// Worker del sito: serve le pagine statiche e aggiunge account e accessi a pagamento.
//  - account studenti (email e password), sessione in un cookie firmato;
//  - oscuramento lato server (teoria in anteprima, schede oltre la 3ª, soluzioni, PDF);
//  - dashboard riservata /admin (iscritti, pagamenti, visite, attivazioni manuali);
//  - webhook Paddle: l'acquisto sblocca la materia nell'account dell'acquirente.
// Le materie a pagamento sono quelle di src/data/prezzi.json.
import PREZZI from '../src/data/prezzi.json';
import { paginaAdmin } from './admin.mjs';
import { MATERIE } from '../src/data/materie.ts';
import { VIDEOCORSI, chiaveVideo, variabilePrezzoVideo } from '../src/data/videocorsi.ts';
import { rispondiAssistente } from './assistente.mjs';

const A_PAGAMENTO = Object.keys(PREZZI);
// Videocorsi: l'acquisto registra `video-<slug>` e sblocca le materie collegate.
const VIDEO = Object.fromEntries(VIDEOCORSI.map((v) => [chiaveVideo(v.slug), v]));
const conMaterieDeiVideo = (chiavi) => [...new Set(chiavi.flatMap((k) => (VIDEO[k] ? [k, ...VIDEO[k].sblocca] : [k])))];
const linkDrive = (env) => { try { return JSON.parse(env.VIDEOCORSI_DRIVE || '{}'); } catch { return {}; } };
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

// ---------- provenienza dei visitatori ----------
// Un "ingresso" è una pagina aperta arrivando da fuori dal sito (referer esterno o assente).
// Il browser interno di Instagram si riconosce dallo user agent anche quando il referer manca.
const ROBOT = /bot|crawl|spider|slurp|preview|facebookexternalhit|meta-externalagent|headless|lighthouse|curl|wget|python|httpclient/i;
const FONTI = [
  [/(^|\.)instagram\.com$/, 'Instagram'], [/(^|\.)google\./, 'Google'], [/(^|\.)bing\.com$/, 'Bing'],
  [/(^|\.)(facebook\.com|fb\.com|fb\.me)$/, 'Facebook'], [/(^|\.)tiktok\.com$/, 'TikTok'],
  [/(^|\.)(whatsapp\.com|wa\.me)$/, 'WhatsApp'], [/(^|\.)(t\.co|x\.com|twitter\.com)$/, 'X'],
  [/(^|\.)(youtube\.com|youtu\.be)$/, 'YouTube'], [/(^|\.)duckduckgo\.com$/, 'DuckDuckGo'],
  [/(^|\.)(chatgpt\.com|openai\.com)$/, 'ChatGPT'], [/(^|\.)perplexity\.ai$/, 'Perplexity'], [/(^|\.)claude\.ai$/, 'Claude'],
  [/(^|\.)(t\.me|telegram\.org)$/, 'Telegram'], [/(^|\.)ripetizioni-di-analisi-matematica\.it$/, 'Altro sito di Carmine'],
];
function fonteIngresso(req, url) {
  const ua = req.headers.get('user-agent') || '';
  if (!ua || ROBOT.test(ua)) return null;
  let host = '';
  try { host = new URL(req.headers.get('referer') || '').hostname.replace(/^www\./, ''); } catch { /* nessun referer */ }
  if (host && host === url.hostname.replace(/^www\./, '')) return null; // navigazione interna
  const utm = (url.searchParams.get('utm_source') || '').toLowerCase();
  if (/^(ig|instagram)$/.test(utm) || /Instagram/.test(ua)) return 'Instagram';
  if (/FBAN|FBAV|FB_IAB/.test(ua)) return 'Facebook';
  if (utm) return utm.slice(0, 30);
  if (!host) return 'Diretto o app';
  for (const [re, nome] of FONTI) if (re.test(host)) return nome;
  return host.slice(0, 60);
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
      CREATE TABLE IF NOT EXISTS ingressi (giorno TEXT, fonte TEXT, n INTEGER, PRIMARY KEY (giorno, fonte));
      CREATE TABLE IF NOT EXISTS visitatori (giorno TEXT, h TEXT, mobile INTEGER, PRIMARY KEY (giorno, h));
      -- pagine viste da persone (dal 28/10/2026); la vecchia tabella visite contava anche i robot e resta solo come archivio
      CREATE TABLE IF NOT EXISTS pagine (giorno TEXT, sezione TEXT, n INTEGER, PRIMARY KEY (giorno, sezione));
      CREATE TABLE IF NOT EXISTS utenti (email TEXT PRIMARY KEY, hash TEXT, sale TEXT, iterazioni INTEGER, versione INTEGER DEFAULT 1,
        falliti INTEGER DEFAULT 0, bloccato_fino INTEGER DEFAULT 0, creato TEXT, ultimo_accesso TEXT);
      CREATE TABLE IF NOT EXISTS abilitazioni (email TEXT, materia TEXT, origine TEXT, creato TEXT, PRIMARY KEY (email, materia));
      CREATE TABLE IF NOT EXISTS dispositivi (email TEXT, id TEXT, nome TEXT, creato TEXT, ultimo_uso INTEGER, PRIMARY KEY (email, id));
      CREATE TABLE IF NOT EXISTS assistente (giorno TEXT, email TEXT, n INTEGER, PRIMARY KEY (giorno, email));
    `);
    // colonne aggiunte dopo: il nome dello studente
    try { this.sql.exec('ALTER TABLE utenti ADD COLUMN nome TEXT'); } catch { /* già presente */ }
    // e la provenienza della prima visita (Instagram, Google, …)
    try { this.sql.exec('ALTER TABLE utenti ADD COLUMN fonte TEXT'); } catch { /* già presente */ }
    // il corso di gruppo già seguito con Carmine, dichiarato all'iscrizione (facoltativo)
    try { this.sql.exec('ALTER TABLE utenti ADD COLUMN corso TEXT'); } catch { /* già presente */ }
    // token consumati dall'assistente (entrata e uscita), per il tetto giornaliero
    try { this.sql.exec('ALTER TABLE assistente ADD COLUMN tin INTEGER DEFAULT 0'); } catch { /* già presente */ }
    try { this.sql.exec('ALTER TABLE assistente ADD COLUMN tout INTEGER DEFAULT 0'); } catch { /* già presente */ }
  }
  righe(q, ...p) { return [...this.sql.exec(q, ...p)]; }
  riga(q, ...p) { return this.righe(q, ...p)[0] ?? null; }
  dispositiviDi(email) { return this.righe('SELECT id, nome, creato, ultimo_uso FROM dispositivi WHERE email = ? ORDER BY ultimo_uso DESC', email); }
  materieDi(email) { return this.righe('SELECT materia FROM abilitazioni WHERE email = ?', email).map((r) => r.materia); }

  async fetch(req) {
    const { pathname } = new URL(req.url);
    const c = req.method === 'POST' ? await req.json() : {};
    const ora = new Date().toISOString();
    switch (pathname) {
      case '/visita':
        this.sql.exec(`INSERT INTO pagine (giorno, sezione, n) VALUES (?, ?, 1)
                       ON CONFLICT(giorno, sezione) DO UPDATE SET n = n + 1`, c.giorno, c.sezione);
        if (c.fonte) this.sql.exec(`INSERT INTO ingressi (giorno, fonte, n) VALUES (?, ?, 1)
                       ON CONFLICT(giorno, fonte) DO UPDATE SET n = n + 1`, c.giorno, c.fonte);
        if (c.h) {
          this.sql.exec('INSERT OR IGNORE INTO visitatori (giorno, h, mobile) VALUES (?, ?, ?)', c.giorno, c.h, c.mobile ? 1 : 0);
          if (Math.random() < 0.01) this.sql.exec("DELETE FROM visitatori WHERE giorno < date('now', '-200 days')");
        }
        return Response.json({ ok: true });

      case '/utente': // dati per il login
        return Response.json(this.riga('SELECT email, hash, sale, iterazioni, versione, falliti, bloccato_fino FROM utenti WHERE email = ?', c.email));

      case '/utente-crea': {
        if (this.riga('SELECT email FROM utenti WHERE email = ?', c.email)) return Response.json({ ok: false, esiste: true });
        this.sql.exec('INSERT INTO utenti (email, hash, sale, iterazioni, versione, creato, ultimo_accesso, nome, fonte, corso) VALUES (?, ?, ?, ?, 1, ?, ?, ?, ?, ?)',
          c.email, c.hash, c.sale, c.iterazioni, ora, ora, c.nome || null, c.fonte || null, c.corso || null);
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
        const u = this.riga('SELECT email, versione, creato, nome FROM utenti WHERE email = ?', c.email);
        if (!u || u.versione !== c.versione) return Response.json(null);
        // il dispositivo deve essere ancora tra quelli registrati (l'uscita o lo scollegamento lo tolgono)
        const d = this.riga('SELECT ultimo_uso FROM dispositivi WHERE email = ? AND id = ?', c.email, c.dispositivo || '');
        if (!d) return Response.json(null);
        if (Date.now() - d.ultimo_uso > 3600 * 1000) this.sql.exec('UPDATE dispositivi SET ultimo_uso = ? WHERE email = ? AND id = ?', Date.now(), c.email, c.dispositivo);
        const dispositivi = this.dispositiviDi(u.email).map((x) => ({ nome: x.nome, questo: x.id === c.dispositivo }));
        return Response.json({ email: u.email, nome: u.nome || null, creato: u.creato, materie: this.materieDi(u.email), dispositivi });
      }
      case '/dispositivo-registra': { // al massimo MAX dispositivi per account; quelli fermi da 60 giorni si liberano da soli
        this.sql.exec('DELETE FROM dispositivi WHERE email = ? AND ultimo_uso < ?', c.email, Date.now() - 60 * 86400 * 1000);
        if (this.riga('SELECT id FROM dispositivi WHERE email = ? AND id = ?', c.email, c.id)) {
          this.sql.exec('UPDATE dispositivi SET ultimo_uso = ?, nome = ? WHERE email = ? AND id = ?', Date.now(), c.nome, c.email, c.id);
          return Response.json({ ok: true });
        }
        const presenti = this.dispositiviDi(c.email);
        if (presenti.length >= c.max) return Response.json({ ok: false, dispositivi: presenti.map((x) => x.nome) });
        this.sql.exec('INSERT INTO dispositivi (email, id, nome, creato, ultimo_uso) VALUES (?, ?, ?, ?, ?)', c.email, c.id, c.nome, ora, Date.now());
        return Response.json({ ok: true });
      }
      case '/dispositivo-rimuovi':
        if (c.id) this.sql.exec('DELETE FROM dispositivi WHERE email = ? AND id = ?', c.email, c.id);
        else this.sql.exec('DELETE FROM dispositivi WHERE email = ?', c.email);
        return Response.json({ ok: true });

      case '/utente-nome':
        this.sql.exec('UPDATE utenti SET nome = ? WHERE email = ?', c.nome || null, c.email);
        return Response.json({ ok: true });

      case '/abilita':
        for (const m of c.materie) {
          this.sql.exec('INSERT OR IGNORE INTO abilitazioni (email, materia, origine, creato) VALUES (?, ?, ?, ?)', c.email, m, c.origine, ora);
        }
        return Response.json({ ok: true, account: Boolean(this.riga('SELECT email FROM utenti WHERE email = ?', c.email)) });

      case '/assistente-conta': { // messaggi all'assistente: limite per studente e per tutto il sito
        const r1 = this.riga('SELECT n, COALESCE(tin, 0) + COALESCE(tout, 0) AS t FROM assistente WHERE giorno = ? AND email = ?', c.giorno, c.email);
        const mio = r1?.n || 0;
        if (mio >= c.maxStudente || (c.maxToken && (r1?.t || 0) >= c.maxToken)) return Response.json({ ok: false, motivo: 'studente' });
        const r2 = this.riga('SELECT SUM(n) AS n, SUM(COALESCE(tin, 0) + COALESCE(tout, 0)) AS t FROM assistente WHERE giorno = ?', c.giorno);
        if ((r2?.n || 0) >= c.maxGiorno || (c.maxTokenGiorno && (r2?.t || 0) >= c.maxTokenGiorno)) return Response.json({ ok: false, motivo: 'sito' });
        this.sql.exec(`INSERT INTO assistente (giorno, email, n) VALUES (?, ?, 1)
                       ON CONFLICT(giorno, email) DO UPDATE SET n = n + 1`, c.giorno, c.email);
        if (Math.random() < 0.01) this.sql.exec("DELETE FROM assistente WHERE giorno < date('now', '-200 days')");
        return Response.json({ ok: true, n: mio + 1 });
      }
      case '/assistente-token':
        this.sql.exec('UPDATE assistente SET tin = COALESCE(tin, 0) + ?, tout = COALESCE(tout, 0) + ? WHERE giorno = ? AND email = ?',
          Math.max(0, Number(c.tin) || 0), Math.max(0, Number(c.tout) || 0), c.giorno, c.email);
        return Response.json({ ok: true });
      case '/assistente-rimborso':
        this.sql.exec('UPDATE assistente SET n = MAX(n - 1, 0) WHERE giorno = ? AND email = ?', c.giorno, c.email);
        return Response.json({ ok: true });

      case '/revoca':
        this.sql.exec('DELETE FROM abilitazioni WHERE email = ? AND materia = ?', c.email, c.materia);
        return Response.json({ ok: true });

      case '/registra-acquisto':
        try {
          this.sql.exec('INSERT INTO acquisti (email, materia, importo, valuta, transazione, creato) VALUES (?, ?, ?, ?, ?, ?)',
            c.email, c.materia, c.importo, c.valuta, c.transazione, ora);
        } catch { return Response.json({ ok: false, doppio: true }); }
        return Response.json({ ok: true });

      case '/dati': {
        const sezioni = (giorni) => this.righe(`SELECT sezione, SUM(n) AS n FROM pagine WHERE giorno >= date('now', '-${giorni - 1} days')
                                               GROUP BY sezione ORDER BY n DESC LIMIT 15`);
        return Response.json({
          visite: this.righe(`SELECT giorno, SUM(n) AS n FROM pagine WHERE giorno >= date('now', '-179 days') GROUP BY giorno ORDER BY giorno`),
          visitatori: this.righe(`SELECT giorno, COUNT(*) AS n, SUM(mobile) AS mobile FROM visitatori
                                  WHERE giorno >= date('now', '-179 days') GROUP BY giorno ORDER BY giorno`),
          inizioVisitatori: this.riga('SELECT MIN(giorno) AS g FROM visitatori')?.g || null,
          sezioni: { 7: sezioni(7), 30: sezioni(30), 90: sezioni(90) },
          ingressi: this.righe(`SELECT giorno, fonte, n FROM ingressi WHERE giorno >= date('now', '-179 days') ORDER BY giorno`),
          fontiIscritti: this.righe(`SELECT COALESCE(u.fonte, 'Non registrata') AS fonte, COUNT(*) AS iscritti,
                              COUNT(DISTINCT a.email) AS paganti FROM utenti u
                              LEFT JOIN (SELECT DISTINCT email FROM acquisti) a ON a.email = u.email
                              GROUP BY COALESCE(u.fonte, 'Non registrata') ORDER BY iscritti DESC`),
          acquisti: this.righe('SELECT * FROM acquisti ORDER BY id DESC LIMIT 500'),
          totali: this.righe('SELECT materia, COUNT(*) AS vendite, SUM(importo) AS incasso FROM acquisti GROUP BY materia'),
          utenti: this.righe(`SELECT u.email, u.nome, u.fonte, u.corso, u.creato, u.ultimo_accesso, GROUP_CONCAT(a.materia, ', ') AS materie
                              FROM utenti u LEFT JOIN abilitazioni a ON a.email = u.email
                              GROUP BY u.email ORDER BY u.creato DESC LIMIT 1000`),
          abilitazioni: this.righe('SELECT * FROM abilitazioni ORDER BY creato DESC LIMIT 1000'),
          dispositivi: this.righe('SELECT email, nome, creato, ultimo_uso FROM dispositivi ORDER BY ultimo_uso DESC LIMIT 2000'),
          assistente: this.righe(`SELECT giorno, SUM(n) AS messaggi, COUNT(*) AS studenti, SUM(COALESCE(tin, 0)) AS token_entrata, SUM(COALESCE(tout, 0)) AS token_uscita FROM assistente
                                  WHERE giorno >= date('now', '-89 days') GROUP BY giorno ORDER BY giorno`),
        });
      }
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
async function apriSessione(env, email, versione, dispositivo) {
  return cookieSessione(await firmaToken(env, { e: email, v: versione, d: dispositivo, t: Date.now() }), DURATA_SESSIONE);
}

// ---------- dispositivi: al massimo MAX_DISPOSITIVI per account ----------
const MAX_DISPOSITIVI = 2;
// Il cookie "dispositivo" resta anche dopo l'uscita: rientrando dallo stesso browser si riusa lo stesso posto.
const cookieDispositivo = (id) => `dispositivo=${id}; Path=/; Max-Age=34560000; HttpOnly; Secure; SameSite=Lax`;
function idDispositivo(req) {
  const c = leggiCookie(req, 'dispositivo');
  return c && /^[0-9a-f]{32}$/.test(c) ? c : [...crypto.getRandomValues(new Uint8Array(16))].map((b) => b.toString(16).padStart(2, '0')).join('');
}
function nomeDispositivo(req) {
  const ua = req.headers.get('user-agent') || '';
  const so = /iPhone/.test(ua) ? 'iPhone' : /iPad/.test(ua) ? 'iPad' : /Android/.test(ua) ? 'Android' : /Windows/.test(ua) ? 'Windows' : /Mac OS X|Macintosh/.test(ua) ? 'Mac' : /Linux/.test(ua) ? 'Linux' : 'Dispositivo';
  const br = /Edg\//.test(ua) ? 'Edge' : /SamsungBrowser/.test(ua) ? 'Samsung Internet' : /Firefox|FxiOS/.test(ua) ? 'Firefox' : /Chrome|CriOS/.test(ua) ? 'Chrome' : /Safari/.test(ua) ? 'Safari' : 'browser';
  return `${so} · ${br}`;
}
const MSG = {
  limite: {
    it: (l) => `Questo account è già in uso su ${MAX_DISPOSITIVI} dispositivi (${l}). Esci da uno dei due, oppure scrivimi dalla pagina Contatti per scollegarli.`,
    en: (l) => `This account is already in use on ${MAX_DISPOSITIVI} devices (${l}). Log out on one of them, or message me from the Contact page to disconnect them.`,
  },
};
// Registra il dispositivo e apre la sessione; se il limite è raggiunto risponde con l'errore.
async function entraDaDispositivo(env, req, email, versione, lingua) {
  const id = idDispositivo(req);
  const r = await aDO(env, '/dispositivo-registra', { email, id, nome: nomeDispositivo(req), max: MAX_DISPOSITIVI });
  const h = new Headers({ 'content-type': 'application/json' });
  h.append('set-cookie', cookieDispositivo(id));
  if (!r.ok) return new Response(JSON.stringify({ errore: MSG.limite[lingua === 'en' ? 'en' : 'it'](r.dispositivi.join(', ')), limite: true }), { status: 403, headers: h });
  h.append('set-cookie', await apriSessione(env, email, versione, id));
  return new Response('{"ok":true}', { headers: h });
}
async function tokenSessione(env, req) {
  const t = leggiCookie(req, 'sessione');
  return t ? leggiToken(env, t) : null;
}
// Utente collegato, con le materie sbloccate (una lettura dell'archivio).
async function utenteCollegato(env, req) {
  const t = await tokenSessione(env, req);
  if (!t?.e) return null;
  return aDO(env, '/sessione', { email: t.e, versione: t.v, dispositivo: t.d });
}

// Nome mostrato in testata: quello scelto dallo studente, altrimenti la parte dell'email prima della @.
const pulisciNome = (n) => String(n || '').replace(/[<>"\u0000-\u001f]/g, '').replace(/\s+/g, ' ').trim().slice(0, 40);
const nomeVisibile = (io) => (io.nome || io.email.split('@')[0]).trim();
const json = (dati, stato = 200, intestazioni = {}) => new Response(JSON.stringify(dati), { status: stato, headers: { 'content-type': 'application/json', ...intestazioni } });

// ---------- percorsi protetti ----------
// Le pagine inglesi stanno sotto /en: stessa protezione, vetrine in /vetrine/en.
function analizza(pathname) {
  let m = pathname.match(/^\/pdf\/([^/]+)\/([^/]+)\.pdf$/);
  if (m) return { materia: m[1], argomento: m[2], tipo: 'pdf', pref: '' };
  const pref = /^\/en(?=\/)/.test(pathname) ? '/en' : '';
  pathname = pathname.slice(pref.length);
  m = pathname.replace(/\.html$/, '').match(/^\/([^/]+)\/([^/]+)\/(teoria|stampa|esercizi-svolti|esercizi)(?:\/(\d+))?\/?$/);
  if (m) return { materia: m[1], argomento: m[2], tipo: m[3], n: m[4] ? Number(m[4]) : undefined, pref };
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
      const { email: e, password, lingua, nome, corso: corsoDato } = await req.json().catch(() => ({}));
      const email = normalizza(e);
      const corso = typeof corsoDato === 'string' ? corsoDato.replace(/[\u0000-\u001f<>]/g, '').trim().slice(0, 120) || null : null;
      if (!emailValida(email)) return json({ errore: 'Scrivi un indirizzo email valido.' }, 400);
      if (typeof password !== 'string' || password.length < 8 || password.length > 200) return json({ errore: 'La password deve avere almeno 8 caratteri.' }, 400);
      const sale = nuovoSale();
      const hash = await hashPassword(password, sale);
      const fonte = (leggiCookie(req, 'fonte') || '').slice(0, 60) || null;
      const r = await aDO(env, '/utente-crea', { email, hash, sale, iterazioni: ITERAZIONI_PBKDF2, nome: pulisciNome(nome), fonte, corso });
      if (!r.ok) return json({ errore: 'Esiste già un account con questa email. Accedi.' }, 409);
      return entraDaDispositivo(env, req, email, r.versione, lingua);
    }
    if (p === '/api/accedi' && POST) {
      const { email: e, password, lingua } = await req.json().catch(() => ({}));
      const email = normalizza(e);
      const u = emailValida(email) ? await aDO(env, '/utente', { email }) : null;
      const sbagliato = () => json({ errore: 'Email o password non corrette.' }, 401);
      if (!u || typeof password !== 'string') return sbagliato();
      if (u.bloccato_fino > Date.now()) return json({ errore: 'Troppi tentativi. Riprova tra un quarto d’ora.' }, 429);
      const ok = confrontoCostante(await hashPassword(password, u.sale, u.iterazioni), u.hash);
      ctx.waitUntil(aDO(env, '/utente-esito-login', { email, ok }));
      if (!ok) return sbagliato();
      return entraDaDispositivo(env, req, email, u.versione, lingua);
    }
    if (p === '/api/esci' && POST) {
      const t = await tokenSessione(env, req);
      if (t?.e && t.d) await aDO(env, '/dispositivo-rimuovi', { email: t.e, id: t.d });
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
    if (p === '/api/videocorsi') { // i videocorsi comprati, con il link della cartella Drive
      const io = await utenteCollegato(env, req);
      if (!io) return json({ errore: 'non collegato' }, 401);
      const drive = linkDrive(env);
      return json({ email: io.email, videocorsi: VIDEOCORSI.filter((v) => io.materie.includes(chiaveVideo(v.slug)))
        .map((v) => ({ slug: v.slug, titolo: v.titolo, lezioni: v.lezioni, sblocca: v.sblocca, drive: drive[v.slug] || null })) });
    }
    if (p === '/api/nome' && POST) {
      const io = await utenteCollegato(env, req);
      if (!io) return json({ errore: 'Accedi di nuovo.' }, 401);
      const { nome } = await req.json().catch(() => ({}));
      await aDO(env, '/utente-nome', { email: io.email, nome: pulisciNome(nome) });
      return json({ ok: true, nome: pulisciNome(nome) });
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
      return json({ ok: true }, 200, { 'set-cookie': await apriSessione(env, t.e, r.versione, t.d) });
    }

    // ===== vecchi link personali: non danno più accesso, serve l'account =====
    if (p === '/accesso') {
      return new Response(null, { status: 302, headers: {
        location: '/accedi',
        'set-cookie': 'accesso=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax',
      } });
    }
    if (p === '/esci') {
      const t = await tokenSessione(env, req);
      if (t?.e && t.d) await aDO(env, '/dispositivo-rimuovi', { email: t.e, id: t.d });
      const h = new Headers({ location: '/' });
      h.append('set-cookie', cookieSessione('', 0));
      h.append('set-cookie', 'accesso=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax');
      return new Response(null, { status: 302, headers: h });
    }

    // ===== assistente di studio =====
    if (p === '/api/assistente' && POST) {
      const io = await utenteCollegato(env, req).catch(() => null);
      return rispondiAssistente(req, env, io, aDO, A_PAGAMENTO, PREZZI);
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
        const video = d.custom_data?.videocorso ? chiaveVideo(d.custom_data.videocorso) : '';
        const importo = Number(d.details?.totals?.total || 0) / 100;
        if (email && A_PAGAMENTO.includes(materia)) {
          await aDO(env, '/registra-acquisto', { email, materia, importo, valuta: d.currency_code || 'EUR', transazione: d.id });
          await aDO(env, '/abilita', { email, materie: [materia], origine: 'paddle' });
        } else if (email && VIDEO[video]) {
          await aDO(env, '/registra-acquisto', { email, materia: video, importo, valuta: d.currency_code || 'EUR', transazione: d.id });
          await aDO(env, '/abilita', { email, materie: conMaterieDeiVideo([video]), origine: 'paddle' });
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
            'algebra-lineare': env.PADDLE_PREZZO_ALGEBRA_LINEARE || null,
            'fisica-1': env.PADDLE_PREZZO_FISICA_1 || null,
            'fisica-2': env.PADDLE_PREZZO_FISICA_2 || null,
            'matematica-generale': env.PADDLE_PREZZO_MATEMATICA_GENERALE || null,
            'matematica-superiori-5': env.PADDLE_PREZZO_MATEMATICA_SUPERIORI_5 || null,
            'matematica-concorsi': env.PADDLE_PREZZO_MATEMATICA_CONCORSI || null,
            'logica-concorsi': env.PADDLE_PREZZO_LOGICA_CONCORSI || null,
          },
          videocorsi: Object.fromEntries(VIDEOCORSI.map((v) => [v.slug, env[variabilePrezzoVideo(v.slug)] || null])),
        } : null,
      });
    }

    // ===== dashboard =====
    if (p === '/admin') return new Response(paginaAdmin(A_PAGAMENTO.concat(Object.keys(VIDEO)), MATERIE.concat(VIDEOCORSI.map((v) => ({ slug: chiaveVideo(v.slug), titolo: v.titolo, breve: `Videocorso ${v.breve}`, colore: v.colore, prezzo: v.prezzo, argomenti: [] })))), { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store', 'x-robots-tag': 'noindex' } });
    if (p.startsWith('/admin/api/')) {
      const pwGiusta = env.ADMIN_PASSWORD || 'cambiami';
      if (p === '/admin/api/login' && POST) {
        const { pw } = await req.json().catch(() => ({}));
        if (typeof pw !== 'string' || !confrontoCostante(pw, pwGiusta)) return new Response('no', { status: 401 });
        const t = await firmaToken(env, { admin: true, t: Date.now() });
        return new Response('ok', { headers: { 'set-cookie': `admin=${encodeURIComponent(t)}; Path=/admin; Max-Age=604800; HttpOnly; Secure; SameSite=Strict` } });
      }
      if (p === '/admin/api/esci' && POST) {
        return new Response('ok', { headers: { 'set-cookie': 'admin=; Path=/admin; Max-Age=0; HttpOnly; Secure; SameSite=Strict' } });
      }
      const ma = leggiCookie(req, 'admin');
      const sess = ma ? await leggiToken(env, ma) : null;
      if (!sess?.admin) return new Response('accesso negato', { status: 401 });

      if (p === '/admin/api/dati') return json(await aDO(env, '/dati'));
      if (p === '/admin/api/abilita' && POST) {
        const { email: e, materie } = await req.json();
        const email = normalizza(e);
        const valide = (materie || []).filter((m) => A_PAGAMENTO.includes(m) || VIDEO[m]);
        if (!emailValida(email) || !valide.length) return json({ errore: 'Email o materie non valide.' }, 400);
        return json(await aDO(env, '/abilita', { email, materie: conMaterieDeiVideo(valide), origine: 'manuale' }));
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
        await aDO(env, '/dispositivo-rimuovi', { email });
        return json({ password: provvisoria });
      }
      if (p === '/admin/api/scollega' && POST) {
        const email = normalizza((await req.json()).email);
        return json(await aDO(env, '/dispositivo-rimuovi', { email }));
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
    const primo = url.pathname.replace(/^\/en(?=\/)/, '').split('/')[1]?.replace(/\.html$/, '');
    let sbloccataQui = Boolean(io && A_PAGAMENTO.includes(primo) && io.materie.includes(primo));
    if (protetta) {
      sbloccataQui = Boolean(io?.materie.includes(info.materia));
      if (!sbloccataQui) {
        if (info.tipo === 'pdf' || info.tipo === 'stampa' || (info.tipo === 'esercizi-svolti' && info.n && info.n > SCHEDE_LIBERE)) {
          risposta = await rispostaVetrina(env, req, `${info.pref}/${info.materia}/sblocca`);
        } else if (info.tipo === 'teoria') {
          risposta = await rispostaVetrina(env, req, `/vetrine${info.pref}/${info.materia}/${info.argomento}/teoria`);
        } else if (info.tipo === 'esercizi') {
          risposta = await rispostaVetrina(env, req, info.n
            ? `/vetrine${info.pref}/${info.materia}/${info.argomento}/esercizi/${info.n}`
            : `/vetrine${info.pref}/${info.materia}/${info.argomento}/esercizi`);
        }
      }
    }
    if (!risposta) risposta = await env.ASSETS.fetch(pagina && req.method === 'GET' ? senzaCondizioni(req) : req);
    // Copie interne delle anteprime: mai negli indici dei motori di ricerca (la pagina vera è quella canonica).
    if (url.pathname.startsWith('/vetrine/')) {
      risposta = new Response(risposta.body, risposta);
      risposta.headers.set('x-robots-tag', 'noindex');
    }
    const html = (risposta.headers.get('content-type') || '').includes('text/html');

    // Pagine: mai copie riusate, né dal browser né da cache intermedie.
    if (html) {
      risposta = new Response(risposta.body, risposta);
      risposta.headers.set('cache-control', 'private, no-store');
      risposta.headers.delete('etag');
      risposta.headers.delete('last-modified');
    }
    // Segni sulla pagina: utente collegato, materie sbloccate (spunte).
    if (html && io) {
      const nome = nomeVisibile(io);
      risposta = new HTMLRewriter().on('.bottone-account .se-collegato', {
        element(e) { e.setInnerContent(nome.length > 18 ? `${nome.slice(0, 17)}…` : nome); },
      }).on('.bottone-account .iniziale', {
        element(e) { e.setInnerContent([...nome][0]?.toUpperCase() || '·'); },
      }).on('.bottone-account', {
        element(e) { e.setAttribute('aria-label', `Account di ${nome}`); },
      }).on('html', {
        element(e) {
          const classi = [(e.getAttribute('class') || ''), io ? 'collegato' : '', sbloccataQui ? 'sbloccato' : ''].join(' ').trim();
          e.setAttribute('class', classi);
          e.setAttribute('data-materie', io.materie.join(' '));
        },
      }).transform(risposta);
    }

    // Conteggio visite (solo pagine).
    // Si contano solo le persone: robot, anteprime dei link e strumenti automatici restano fuori.
    const ua = req.headers.get('user-agent') || '';
    if (req.method === 'GET' && html && ua && !ROBOT.test(ua) && risposta.status < 400) {
      const giorno = new Date().toISOString().slice(0, 10);
      const sezione = info ? (info.argomento ? `${info.materia}/${info.argomento}` : info.materia)
        : (url.pathname.split('/')[1]?.replace(/\.html$/, '') || 'home');
      const fonte = url.pathname.startsWith('/vetrine/') ? null : fonteIngresso(req, url);
      // Visitatore unico del giorno: impronta non reversibile di giorno, indirizzo e browser (nessun dato personale salvato).
      const impronta = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`${giorno}|${req.headers.get('cf-connecting-ip') || ''}|${ua}`));
      const h = [...new Uint8Array(impronta).slice(0, 8)].map((b) => b.toString(16).padStart(2, '0')).join('');
      const mobile = /Mobi|Android|iPhone|iPad/i.test(ua);
      ctx.waitUntil(aDO(env, '/visita', { giorno, sezione, fonte, h, mobile }).catch(() => {}));
      // La prima provenienza resta in un cookie per 90 giorni: serve a sapere da dove arriva chi poi si iscrive.
      if (fonte && !leggiCookie(req, 'fonte')) {
        try { risposta.headers.append('set-cookie', `fonte=${encodeURIComponent(fonte)}; Path=/; Max-Age=7776000; HttpOnly; Secure; SameSite=Lax`); } catch { /* intestazioni bloccate */ }
      }
    }
    return risposta;
  },
};
