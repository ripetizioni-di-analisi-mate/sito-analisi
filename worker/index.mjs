// Worker del sito: serve le pagine statiche e aggiunge account e accessi a pagamento.
//  - account studenti (email e password), sessione in un cookie firmato;
//  - oscuramento lato server (teoria in anteprima, schede oltre la 3ª, soluzioni, PDF);
//  - dashboard riservata /admin (iscritti, pagamenti, visite, attivazioni manuali);
//  - webhook Paddle: l'acquisto sblocca la materia nell'account dell'acquirente.
// Le materie a pagamento sono quelle di src/data/prezzi.json.
import PREZZI from '../src/data/prezzi.json';
import { paginaAdmin } from './admin.mjs';

const A_PAGAMENTO = Object.keys(PREZZI);
const SCHEDE_LIBERE = 3;          // le prime N schede svolte di ogni argomento restano aperte
const ITERAZIONI_PBKDF2 = 10000;  // costo dell'hash: entro i 10 ms di CPU del piano gratuito Workers; da alzare col piano a pagamento
const DURATA_SESSIONE = 60 * 60 * 24 * 180; // 180 giorni

// ---------- firma HMAC ----------
async function chiave(env) {
  const segreto = env.CHIAVE_ACCESSO || 'chiave-provvisoria';
  return crypto.subtle.importKey('raw', new TextEncoder().encode(segreto), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign', 'verify']);
}
const b64 = (buf) => btoa(String.fromCharCode(...new Uint8Array(buf))).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
const b64dec = (s) => Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/')), (c) => c.charCodeAt(0));

export async function firmaToken(env, dati) {
  const corpo = b64(new TextEncoder().encode(JSON.stringify(dati)));
  const mac = await crypto.subtle.sign('HMAC', await chiave(env), new TextEncoder().encode(corpo));
  return `${corpo}.${b64(mac)}`;
}
async function leggiToken(env, token) {
  try {
    const [corpo, mac] = token.split('.');
    const ok = await crypto.subtle.verify('HMAC', await chiave(env), b64dec(mac), new TextEncoder().encode(corpo));
    if (!ok) return null;
    return JSON.parse(new TextDecoder().decode(b64dec(corpo)));
  } catch { return null; }
}
function leggiCookie(req, nome) {
  const m = (req.headers.get('cookie') || '').match(new RegExp(`(?:^|;\\s*)${nome}=([^;]+)`));
  return m ? decodeURIComponent(m[1]) : null;
}

// ---------- password ----------
async function hashPassword(password, saleB64, iterazioni = ITERAZIONI_PBKDF2) {
  const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveBits']);
  const bit = await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt: b64dec(saleB64), iterations: iterazioni }, base, 256);
  return b64(bit);
}
const nuovoSale = () => b64(crypto.getRandomValues(new Uint8Array(16)));
function confrontoCostante(a, b) {
  if (a.length !== b.length) return false;
  let r = 0;
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return r === 0;
}
const emailValida = (e) => typeof e === 'string' && e.length <= 200 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
const normalizza = (e) => String(e || '').trim().toLowerCase();

// ---------- archivio (Durable Object con SQLite) ----------
export class Archivio {
  constructor(state) {
    this.sql = state.storage.sql;
    this.sql.exec(`
      CREATE TABLE IF NOT EXISTS accessi (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, materie TEXT, origine TEXT, creato TEXT);
      CREATE TABLE IF NOT EXISTS acquisti (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, materia TEXT, importo REAL, valuta TEXT, transazione TEXT UNIQUE, creato TEXT);
      CREATE TABLE IF NOT EXISTS visite (giorno TEXT, sezione TEXT, n INTEGER, PRIMARY KEY (giorno, sezione));
      CREATE TABLE IF NOT EXISTS utenti (email TEXT PRIMARY KEY, hash TEXT, sale TEXT, iterazioni INTEGER, versione INTEGER DEFAULT 1,
        falliti INTEGER DEFAULT 0, bloccato_fino INTEGER DEFAULT 0, creato TEXT, ultimo_accesso TEXT);
      CREATE TABLE IF NOT EXISTS abilitazioni (email TEXT, materia TEXT, origine TEXT, creato TEXT, PRIMARY KEY (email, materia));
    `);
  }
  righe(q, ...p) { return [...this.sql.exec(q, ...p)]; }
  riga(q, ...p) { return this.righe(q, ...p)[0] ?? null; }
  materieDi(email) { return this.righe('SELECT materia FROM abilitazioni WHERE email = ?', email).map((r) => r.materia); }

  async fetch(req) {
    const { pathname } = new URL(req.url);
    const c = req.method === 'POST' ? await req.json() : {};
    const ora = new Date().toISOString();
    switch (pathname) {
      case '/visita':
        this.sql.exec(`INSERT INTO visite (giorno, sezione, n) VALUES (?, ?, 1)
                       ON CONFLICT(giorno, sezione) DO UPDATE SET n = n + 1`, c.giorno, c.sezione);
        return Response.json({ ok: true });

      case '/utente': // dati per il login
        return Response.json(this.riga('SELECT email, hash, sale, iterazioni, versione, falliti, bloccato_fino FROM utenti WHERE email = ?', c.email));

      case '/utente-crea': {
        if (this.riga('SELECT email FROM utenti WHERE email = ?', c.email)) return Response.json({ ok: false, esiste: true });
        this.sql.exec('INSERT INTO utenti (email, hash, sale, iterazioni, versione, creato, ultimo_accesso) VALUES (?, ?, ?, ?, 1, ?, ?)',
          c.email, c.hash, c.sale, c.iterazioni, ora, ora);
        return Response.json({ ok: true, versione: 1 });
      }
      case '/utente-esito-login':
        if (c.ok) this.sql.exec('UPDATE utenti SET falliti = 0, bloccato_fino = 0, ultimo_accesso = ? WHERE email = ?', ora, c.email);
        else this.sql.exec(`UPDATE utenti SET falliti = falliti + 1,
          bloccato_fino = CASE WHEN falliti + 1 >= 8 THEN ? ELSE bloccato_fino END WHERE email = ?`, Date.now() + 15 * 60 * 1000, c.email);
        return Response.json({ ok: true });

      case '/utente-password': {
        this.sql.exec('UPDATE utenti SET hash = ?, sale = ?, iterazioni = ?, versione = versione + 1, falliti = 0, bloccato_fino = 0 WHERE email = ?',
          c.hash, c.sale, c.iterazioni, c.email);
        const u = this.riga('SELECT versione FROM utenti WHERE email = ?', c.email);
        return Response.json({ ok: Boolean(u), versione: u?.versione });
      }
      case '/sessione': { // verifica che la sessione sia ancora valida e restituisce le materie
        const u = this.riga('SELECT email, versione, creato FROM utenti WHERE email = ?', c.email);
        if (!u || u.versione !== c.versione) return Response.json(null);
        return Response.json({ email: u.email, creato: u.creato, materie: this.materieDi(u.email) });
      }
      case '/abilita':
        for (const m of c.materie) {
          this.sql.exec('INSERT OR IGNORE INTO abilitazioni (email, materia, origine, creato) VALUES (?, ?, ?, ?)', c.email, m, c.origine, ora);
        }
        return Response.json({ ok: true, account: Boolean(this.riga('SELECT email FROM utenti WHERE email = ?', c.email)) });

      case '/revoca':
        this.sql.exec('DELETE FROM abilitazioni WHERE email = ? AND materia = ?', c.email, c.materia);
        return Response.json({ ok: true });

      case '/registra-acquisto':
        try {
          this.sql.exec('INSERT INTO acquisti (email, materia, importo, valuta, transazione, creato) VALUES (?, ?, ?, ?, ?, ?)',
            c.email, c.materia, c.importo, c.valuta, c.transazione, ora);
        } catch { return Response.json({ ok: false, doppio: true }); }
        return Response.json({ ok: true });

      case '/dati':
        return Response.json({
          visite: this.righe('SELECT giorno, SUM(n) AS n FROM visite GROUP BY giorno ORDER BY giorno DESC LIMIT 30'),
          visitePerSezione: this.righe('SELECT sezione, SUM(n) AS n FROM visite GROUP BY sezione ORDER BY n DESC LIMIT 12'),
          acquisti: this.righe('SELECT * FROM acquisti ORDER BY id DESC LIMIT 500'),
          totali: this.righe('SELECT materia, COUNT(*) AS vendite, SUM(importo) AS incasso FROM acquisti GROUP BY materia'),
          utenti: this.righe(`SELECT u.email, u.creato, u.ultimo_accesso, GROUP_CONCAT(a.materia, ', ') AS materie
                              FROM utenti u LEFT JOIN abilitazioni a ON a.email = u.email
                              GROUP BY u.email ORDER BY u.creato DESC LIMIT 1000`),
          abilitazioni: this.righe('SELECT * FROM abilitazioni ORDER BY creato DESC LIMIT 1000'),
        });
    }
    return new Response('non trovato', { status: 404 });
  }
}
const archivio = (env) => env.ARCHIVIO.get(env.ARCHIVIO.idFromName('unico'));
async function aDO(env, percorso, dati = {}) {
  const r = await archivio(env).fetch('https://archivio' + percorso, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(dati) });
  return r.json();
}

// ---------- sessione ----------
const cookieSessione = (valore, durata) =>
  `sessione=${encodeURIComponent(valore)}; Path=/; Max-Age=${durata}; HttpOnly; Secure; SameSite=Lax`;
async function apriSessione(env, email, versione) {
  return cookieSessione(await firmaToken(env, { e: email, v: versione, t: Date.now() }), DURATA_SESSIONE);
}
async function tokenSessione(env, req) {
  const t = leggiCookie(req, 'sessione');
  return t ? leggiToken(env, t) : null;
}
// Utente collegato, con le materie sbloccate (una lettura dell'archivio).
async function utenteCollegato(env, req) {
  const t = await tokenSessione(env, req);
  if (!t?.e) return null;
  return aDO(env, '/sessione', { email: t.e, versione: t.v });
}

const json = (dati, stato = 200, intestazioni = {}) => new Response(JSON.stringify(dati), { status: stato, headers: { 'content-type': 'application/json', ...intestazioni } });

// ---------- percorsi protetti ----------
function analizza(pathname) {
  let m = pathname.match(/^\/pdf\/([^/]+)\/([^/]+)\.pdf$/);
  if (m) return { materia: m[1], argomento: m[2], tipo: 'pdf' };
  m = pathname.replace(/\.html$/, '').match(/^\/([^/]+)\/([^/]+)\/(teoria|stampa|esercizi-svolti|esercizi)(?:\/(\d+))?\/?$/);
  if (m) return { materia: m[1], argomento: m[2], tipo: m[3], n: m[4] ? Number(m[4]) : undefined };
  return null;
}
// Le pagine cambiano a seconda di chi le guarda (ospite, iscritto, materia sbloccata): niente risposte
// "non modificata" (304), altrimenti il browser mostrerebbe la copia vista prima di accedere o di pagare.
function senzaCondizioni(req, u = req.url) {
  const h = new Headers(req.headers);
  h.delete('if-none-match'); h.delete('if-modified-since');
  return new Request(u, { method: req.method, headers: h });
}
async function rispostaVetrina(env, req, percorso) {
  const u = new URL(req.url); u.pathname = percorso; u.search = '';
  const r = await env.ASSETS.fetch(senzaCondizioni(req, u));
  return new Response(r.body, { status: r.status, headers: r.headers });
}

// ---------- Paddle ----------
async function verificaPaddle(req, corpo, segreto) {
  const firma = req.headers.get('paddle-signature') || '';
  const ts = firma.match(/ts=(\d+)/)?.[1];
  const h1 = firma.match(/h1=([0-9a-f]+)/)?.[1];
  if (!ts || !h1) return false;
  const k = await crypto.subtle.importKey('raw', new TextEncoder().encode(segreto), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const mac = await crypto.subtle.sign('HMAC', k, new TextEncoder().encode(`${ts}:${corpo}`));
  const esad = [...new Uint8Array(mac)].map((b) => b.toString(16).padStart(2, '0')).join('');
  return confrontoCostante(esad, h1);
}

// ---------- worker ----------
export default {
  async fetch(req, env, ctx) {
    const url = new URL(req.url);
    const p = url.pathname.replace(/\.html$/, '');
    const vendita = env.VENDITA !== '0';
    const POST = req.method === 'POST';

    // ===== account =====
    if (p === '/api/registrati' && POST) {
      const { email: e, password } = await req.json().catch(() => ({}));
      const email = normalizza(e);
      if (!emailValida(email)) return json({ errore: 'Scrivi un indirizzo email valido.' }, 400);
      if (typeof password !== 'string' || password.length < 8 || password.length > 200) return json({ errore: 'La password deve avere almeno 8 caratteri.' }, 400);
      const sale = nuovoSale();
      const hash = await hashPassword(password, sale);
      const r = await aDO(env, '/utente-crea', { email, hash, sale, iterazioni: ITERAZIONI_PBKDF2 });
      if (!r.ok) return json({ errore: 'Esiste già un account con questa email. Accedi.' }, 409);
      return json({ ok: true }, 200, { 'set-cookie': await apriSessione(env, email, r.versione) });
    }
    if (p === '/api/accedi' && POST) {
      const { email: e, password } = await req.json().catch(() => ({}));
      const email = normalizza(e);
      const u = emailValida(email) ? await aDO(env, '/utente', { email }) : null;
      const sbagliato = () => json({ errore: 'Email o password non corrette.' }, 401);
      if (!u || typeof password !== 'string') return sbagliato();
      if (u.bloccato_fino > Date.now()) return json({ errore: 'Troppi tentativi. Riprova tra un quarto d’ora.' }, 429);
      const ok = confrontoCostante(await hashPassword(password, u.sale, u.iterazioni), u.hash);
      ctx.waitUntil(aDO(env, '/utente-esito-login', { email, ok }));
      if (!ok) return sbagliato();
      return json({ ok: true }, 200, { 'set-cookie': await apriSessione(env, email, u.versione) });
    }
    if (p === '/api/esci' && POST) {
      const h = new Headers({ 'content-type': 'application/json' });
      h.append('set-cookie', cookieSessione('', 0));
      h.append('set-cookie', 'accesso=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax');
      return new Response('{"ok":true}', { headers: h });
    }
    if (p === '/api/io') {
      const io = await utenteCollegato(env, req);
      if (!io) return json({ errore: 'non collegato' }, 401);
      return json(io);
    }
    if (p === '/api/password' && POST) {
      const t = await tokenSessione(env, req);
      if (!t?.e) return json({ errore: 'Accedi di nuovo.' }, 401);
      const { attuale, nuova } = await req.json().catch(() => ({}));
      if (typeof nuova !== 'string' || nuova.length < 8 || nuova.length > 200) return json({ errore: 'La nuova password deve avere almeno 8 caratteri.' }, 400);
      const u = await aDO(env, '/utente', { email: t.e });
      if (!u || u.versione !== t.v || !confrontoCostante(await hashPassword(String(attuale || ''), u.sale, u.iterazioni), u.hash))
        return json({ errore: 'La password attuale non è corretta.' }, 401);
      const sale = nuovoSale();
      const r = await aDO(env, '/utente-password', { email: t.e, hash: await hashPassword(nuova, sale), sale, iterazioni: ITERAZIONI_PBKDF2 });
      return json({ ok: true }, 200, { 'set-cookie': await apriSessione(env, t.e, r.versione) });
    }

    // ===== vecchi link personali: non danno più accesso, serve l'account =====
    if (p === '/accesso') {
      return new Response(null, { status: 302, headers: {
        location: '/accedi',
        'set-cookie': 'accesso=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax',
      } });
    }
    if (p === '/esci') {
      const h = new Headers({ location: '/' });
      h.append('set-cookie', cookieSessione('', 0));
      h.append('set-cookie', 'accesso=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax');
      return new Response(null, { status: 302, headers: h });
    }

    // ===== webhook Paddle =====
    if (p === '/api/paddle/webhook' && POST) {
      const corpo = await req.text();
      if (!env.PADDLE_WEBHOOK_SECRET || !(await verificaPaddle(req, corpo, env.PADDLE_WEBHOOK_SECRET)))
        return new Response('firma non valida', { status: 401 });
      const ev = JSON.parse(corpo);
      if (ev.event_type === 'transaction.completed') {
        const d = ev.data;
        const email = normalizza(d.custom_data?.email || d.customer?.email || '');
        const materia = d.custom_data?.materia || '';
        const importo = Number(d.details?.totals?.total || 0) / 100;
        if (email && A_PAGAMENTO.includes(materia)) {
          await aDO(env, '/registra-acquisto', { email, materia, importo, valuta: d.currency_code || 'EUR', transazione: d.id });
          await aDO(env, '/abilita', { email, materie: [materia], origine: 'paddle' });
        }
      }
      return json({ ok: true });
    }

    // ===== configurazione per il pagamento =====
    if (p === '/api/config') {
      return json({
        paddle: env.PADDLE_CLIENT_TOKEN ? {
          token: env.PADDLE_CLIENT_TOKEN,
          ambiente: env.PADDLE_AMBIENTE || 'production',
          prezzi: {
            precorso: env.PADDLE_PREZZO_PRECORSO || null,
            'analisi-1': env.PADDLE_PREZZO_ANALISI_1 || null,
            'analisi-2': env.PADDLE_PREZZO_ANALISI_2 || null,
          },
        } : null,
      });
    }

    // ===== dashboard =====
    if (p === '/admin') return new Response(paginaAdmin(A_PAGAMENTO), { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' } });
    if (p.startsWith('/admin/api/')) {
      const pwGiusta = env.ADMIN_PASSWORD || 'cambiami';
      if (p === '/admin/api/login' && POST) {
        const { pw } = await req.json().catch(() => ({}));
        if (typeof pw !== 'string' || !confrontoCostante(pw, pwGiusta)) return new Response('no', { status: 401 });
        const t = await firmaToken(env, { admin: true, t: Date.now() });
        return new Response('ok', { headers: { 'set-cookie': `admin=${encodeURIComponent(t)}; Path=/admin; Max-Age=604800; HttpOnly; Secure; SameSite=Strict` } });
      }
      const ma = leggiCookie(req, 'admin');
      const sess = ma ? await leggiToken(env, ma) : null;
      if (!sess?.admin) return new Response('accesso negato', { status: 401 });

      if (p === '/admin/api/dati') return json(await aDO(env, '/dati'));
      if (p === '/admin/api/abilita' && POST) {
        const { email: e, materie } = await req.json();
        const email = normalizza(e);
        const valide = (materie || []).filter((m) => A_PAGAMENTO.includes(m));
        if (!emailValida(email) || !valide.length) return json({ errore: 'Email o materie non valide.' }, 400);
        return json(await aDO(env, '/abilita', { email, materie: valide, origine: 'manuale' }));
      }
      if (p === '/admin/api/revoca' && POST) {
        const { email, materia } = await req.json();
        return json(await aDO(env, '/revoca', { email: normalizza(email), materia }));
      }
      if (p === '/admin/api/reset' && POST) {
        const email = normalizza((await req.json()).email);
        const alfabeto = 'abcdefghjkmnpqrstuvwxyz23456789';
        const provvisoria = [...crypto.getRandomValues(new Uint8Array(10))].map((b) => alfabeto[b % alfabeto.length]).join('');
        const sale = nuovoSale();
        const r = await aDO(env, '/utente-password', { email, hash: await hashPassword(provvisoria, sale), sale, iterazioni: ITERAZIONI_PBKDF2 });
        if (!r.ok) return json({ errore: 'Nessun account con questa email.' }, 404);
        return json({ password: provvisoria });
      }
      return new Response('non trovato', { status: 404 });
    }

    // ===== contenuti: oscuramento e consegna =====
    const info = analizza(url.pathname);
    const protetta = vendita && info && A_PAGAMENTO.includes(info.materia);
    // La sessione si verifica solo per le pagine e i PDF, non per font, stili e immagini.
    const pagina = !/\.[a-z0-9]+$/i.test(url.pathname) || /\.(html|pdf)$/i.test(url.pathname);
    const io = pagina ? await utenteCollegato(env, req).catch(() => null) : null;
    let risposta;
    // Materia della pagina (anche la pagina principale della materia): serve per la spunta.
    const primo = url.pathname.split('/')[1]?.replace(/\.html$/, '');
    let sbloccataQui = Boolean(io && A_PAGAMENTO.includes(primo) && io.materie.includes(primo));
    if (protetta) {
      sbloccataQui = Boolean(io?.materie.includes(info.materia));
      if (!sbloccataQui) {
        if (info.tipo === 'pdf' || info.tipo === 'stampa' || (info.tipo === 'esercizi-svolti' && info.n && info.n > SCHEDE_LIBERE)) {
          risposta = await rispostaVetrina(env, req, `/${info.materia}/sblocca`);
        } else if (info.tipo === 'teoria') {
          risposta = await rispostaVetrina(env, req, `/vetrine/${info.materia}/${info.argomento}/teoria`);
        } else if (info.tipo === 'esercizi') {
          risposta = await rispostaVetrina(env, req, info.n
            ? `/vetrine/${info.materia}/${info.argomento}/esercizi/${info.n}`
            : `/vetrine/${info.materia}/${info.argomento}/esercizi`);
        }
      }
    }
    if (!risposta) risposta = await env.ASSETS.fetch(pagina && req.method === 'GET' ? senzaCondizioni(req) : req);
    const html = (risposta.headers.get('content-type') || '').includes('text/html');

    // Pagine: mai copie riusate, né dal browser né da cache intermedie.
    if (html) {
      risposta = new Response(risposta.body, risposta);
      risposta.headers.set('cache-control', 'private, no-store');
      risposta.headers.delete('etag');
      risposta.headers.delete('last-modified');
    }
    // Segni sulla pagina: utente collegato, materie sbloccate (spunte), filigrana.
    if (html && io) {
      risposta = new HTMLRewriter().on('html', {
        element(e) {
          const classi = [(e.getAttribute('class') || ''), io ? 'collegato' : '', sbloccataQui ? 'sbloccato' : ''].join(' ').trim();
          e.setAttribute('class', classi);
          e.setAttribute('data-materie', io.materie.join(' '));
          if (sbloccataQui) e.setAttribute('data-utente', io.email);
        },
      }).transform(risposta);
    }

    // Conteggio visite (solo pagine).
    if (req.method === 'GET' && html) {
      const giorno = new Date().toISOString().slice(0, 10);
      const sezione = info ? `${info.materia}/${info.argomento}` : (url.pathname.split('/')[1]?.replace(/\.html$/, '') || 'home');
      ctx.waitUntil(aDO(env, '/visita', { giorno, sezione }).catch(() => {}));
    }
    return risposta;
  },
};
