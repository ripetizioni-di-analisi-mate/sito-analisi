import { componiEmail, inviaEmailResend } from './email.mjs';
// Prenotazione delle lezioni individuali (pagina /prenota).
//  - orari: lunedì-sabato, 10-13 e 15-17 (src/data/lezioni.ts), almeno 24 ore prima;
//  - il calendario Google di Carmine (collegato una volta dalla pagina /admin/lezioni) toglie gli orari già occupati
//    e riceve un evento con il link di Google Meet e l'invito allo studente;
//  - pagamento di 40 € con Stripe (account di Carmine); mentre si paga l'orario resta bloccato;
//  - spostamento o disdetta con rimborso fino a 24 ore prima, dal link nell'email di conferma;
//  - 2 minuti prima della lezione lo studente riceve l'email con il link di Google Meet (cron al minuto 58).
// Segreti su Cloudflare: STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, GOOGLE_CLIENT_SECRET (GOOGLE_CLIENT_ID è in wrangler.jsonc).
import { LEZIONI, MATERIE_LEZIONI } from '../src/data/lezioni.ts';
import { materia } from '../src/data/materie.ts';

const ORA_MS = 3600 * 1000;
const MAX_ATTESE_EMAIL = 2;   // prenotazioni non ancora pagate per indirizzo email
const MAX_ATTESE_RETE = 3;    // e per connessione (impronta dell'indirizzo IP)
const WHATSAPP = 'https://wa.me/393885680393';

// ---------- archivio (tabelle nel Durable Object) ----------
export function creaTabellePrenotazioni(sql) {
  sql.exec(`
    CREATE TABLE IF NOT EXISTS lezioni (id TEXT PRIMARY KEY, inizio INTEGER, fine INTEGER, materia TEXT,
      nome TEXT, email TEXT, telefono TEXT, universita TEXT, note TEXT, cf TEXT, rete TEXT,
      stato TEXT, scadenza INTEGER, sessione TEXT, pagamento TEXT, importo REAL, evento TEXT, meet TEXT,
      spostamenti INTEGER DEFAULT 0, creato TEXT, aggiornato TEXT);
    CREATE INDEX IF NOT EXISTS lezioni_inizio ON lezioni (inizio);
    CREATE TABLE IF NOT EXISTS impostazioni (chiave TEXT PRIMARY KEY, valore TEXT);
  `);
  // momento in cui è partita l'email con il link di Meet, 2 minuti prima della lezione
  try { sql.exec('ALTER TABLE lezioni ADD COLUMN avvisata INTEGER'); } catch { /* già presente */ }
}

// Orari occupati da lezioni pagate o in attesa di pagamento (escluso, se indicato, l'id dato).
function occupateDB(o, da, a, escluso = '') {
  return o.righe(`SELECT inizio, fine FROM lezioni WHERE inizio < ? AND fine > ? AND id != ?
                  AND (stato = 'pagata' OR (stato = 'in-attesa' AND scadenza > ?))`, a, da, escluso, Date.now());
}

// Rotte interne del Durable Object (chiamate con aDO). Restituisce null se il percorso non è suo.
export function archivioPrenotazioni(o, pathname, c) {
  const ora = new Date().toISOString();
  const leggi = (id) => o.riga('SELECT * FROM lezioni WHERE id = ?', id);
  switch (pathname) {
    case '/pren-occupate':
      return { occupate: occupateDB(o, c.da, c.a) };
    case '/pren-blocca': { // il controllo e l'inserimento avvengono insieme: due studenti non possono prendere lo stesso orario
      if (occupateDB(o, c.inizio, c.fine).length) return { ok: false, motivo: 'occupato' };
      const attese = (campo, valore) => o.riga(`SELECT COUNT(*) AS n FROM lezioni WHERE ${campo} = ? AND stato = 'in-attesa' AND scadenza > ?`, valore, Date.now()).n;
      if (attese('email', c.email) >= MAX_ATTESE_EMAIL || (c.rete && attese('rete', c.rete) >= MAX_ATTESE_RETE)) return { ok: false, motivo: 'troppe' };
      o.sql.exec(`INSERT INTO lezioni (id, inizio, fine, materia, nome, email, telefono, universita, note, cf, rete, stato, scadenza, creato, aggiornato)
                  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'in-attesa', ?, ?, ?)`,
        c.id, c.inizio, c.fine, c.materia, c.nome, c.email, c.telefono, c.universita, c.note, c.cf, c.rete, c.scadenza, ora, ora);
      return { ok: true };
    }
    case '/pren-sessione':
      o.sql.exec('UPDATE lezioni SET sessione = ?, aggiornato = ? WHERE id = ?', c.sessione, ora, c.id);
      return { ok: true };
    case '/pren-pagata': { // dal webhook di Stripe; una seconda notifica dello stesso pagamento non fa nulla
      const r = leggi(c.id);
      if (!r) return { ok: false };
      if (r.stato === 'pagata' || r.stato === 'disdetta') return { ok: true, primaVolta: false, lezione: r };
      o.sql.exec("UPDATE lezioni SET stato = 'pagata', pagamento = ?, importo = ?, aggiornato = ? WHERE id = ?", c.pagamento, c.importo, ora, c.id);
      return { ok: true, primaVolta: true, lezione: leggi(c.id) };
    }
    case '/pren-evento':
      o.sql.exec('UPDATE lezioni SET evento = ?, meet = ?, aggiornato = ? WHERE id = ?', c.evento, c.meet, ora, c.id);
      return { ok: true };
    case '/pren-libera': // pagamento annullato o scaduto: l'orario torna libero
      o.sql.exec("UPDATE lezioni SET stato = 'annullata', aggiornato = ? WHERE id = ? AND stato = 'in-attesa'", ora, c.id);
      return { ok: true };
    case '/pren-leggi':
      return { lezione: leggi(c.id) };
    case '/pren-da-sessione':
      return { lezione: o.riga('SELECT * FROM lezioni WHERE sessione = ?', c.sessione) };
    case '/pren-disdici':
      o.sql.exec("UPDATE lezioni SET stato = 'disdetta', aggiornato = ? WHERE id = ? AND stato = 'pagata'", ora, c.id);
      return { ok: true, lezione: leggi(c.id) };
    case '/pren-sposta': {
      const r = leggi(c.id);
      if (!r || r.stato !== 'pagata') return { ok: false, motivo: 'stato' };
      if (occupateDB(o, c.inizio, c.fine, c.id).length) return { ok: false, motivo: 'occupato' };
      o.sql.exec('UPDATE lezioni SET inizio = ?, fine = ?, spostamenti = spostamenti + 1, avvisata = NULL, aggiornato = ? WHERE id = ?', c.inizio, c.fine, ora, c.id);
      return { ok: true, lezione: leggi(c.id), prima: r };
    }
    case '/pren-da-avvisare': // lezioni pagate che iniziano nell'intervallo e non hanno ancora ricevuto il link
      return { lezioni: o.righe("SELECT * FROM lezioni WHERE stato = 'pagata' AND avvisata IS NULL AND inizio > ? AND inizio <= ? ORDER BY inizio", c.da, c.a) };
    case '/pren-avvisata':
      o.sql.exec('UPDATE lezioni SET avvisata = ? WHERE id = ?', Date.now(), c.id);
      return { ok: true };
    case '/pren-elenco': // per la pagina /admin/lezioni: lezioni dagli ultimi 30 giorni in poi
      return { lezioni: o.righe(`SELECT * FROM lezioni WHERE inizio > ? AND stato IN ('pagata', 'disdetta', 'in-attesa')
                                  ORDER BY inizio`, Date.now() - 30 * 24 * ORA_MS) };
    case '/pren-imposta':
      if (c.valore == null) o.sql.exec('DELETE FROM impostazioni WHERE chiave = ?', c.chiave);
      else o.sql.exec('INSERT INTO impostazioni (chiave, valore) VALUES (?, ?) ON CONFLICT(chiave) DO UPDATE SET valore = excluded.valore', c.chiave, c.valore);
      return { ok: true };
    case '/pren-impostazione':
      return { valore: o.riga('SELECT valore FROM impostazioni WHERE chiave = ?', c.chiave)?.valore ?? null };
  }
  return null;
}

// ---------- ora italiana ----------
const fmtRoma = new Intl.DateTimeFormat('en-US', {
  timeZone: LEZIONI.fusoOrario, hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit',
});
export function partiRoma(ms) {
  const o = {};
  for (const p of fmtRoma.formatToParts(new Date(ms))) o[p.type] = p.value;
  return { y: +o.year, m: +o.month, d: +o.day, h: +o.hour % 24, min: +o.minute };
}
// Istante (ms UTC) di un'ora italiana: tiene conto dell'ora legale.
export function daOraRoma(y, m, d, h) {
  const voluto = Date.UTC(y, m - 1, d, h);
  let t = voluto;
  for (let i = 0; i < 3; i++) {
    const p = partiRoma(t);
    const diff = Date.UTC(p.y, p.m - 1, p.d, p.h, p.min) - voluto;
    if (!diff) break;
    t -= diff;
  }
  return t;
}
const due = (n) => String(n).padStart(2, '0');

// Tutti gli orari previsti dalle regole (giorni, ore, preavviso, settimane), senza guardare gli impegni.
export function orariPrevisti(adesso = Date.now()) {
  const oggi = partiRoma(adesso);
  const minimo = adesso + LEZIONI.preavvisoOre * ORA_MS;
  const fuori = [];
  for (let i = 0; i <= LEZIONI.settimane * 7; i++) {
    const g = new Date(Date.UTC(oggi.y, oggi.m - 1, oggi.d + i));
    if (!LEZIONI.giorni.includes(g.getUTCDay())) continue;
    const [y, m, d] = [g.getUTCFullYear(), g.getUTCMonth() + 1, g.getUTCDate()];
    for (const h of LEZIONI.ore) {
      const inizio = daOraRoma(y, m, d, h);
      if (inizio < minimo) continue;
      fuori.push({ inizio, fine: inizio + LEZIONI.durata * 60000, giorno: `${y}-${due(m)}-${due(d)}`, ora: `${due(h)}:00` });
    }
  }
  return fuori;
}
const siSovrappone = (s, occ) => occ.some((x) => s.inizio < x.fine && s.fine > x.inizio);

const GIORNI = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
const MESI = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'];
export function quando(inizio, fine) {
  const a = partiRoma(inizio), b = partiRoma(fine);
  const gs = new Date(Date.UTC(a.y, a.m - 1, a.d)).getUTCDay();
  return `${GIORNI[gs]} ${a.d} ${MESI[a.m - 1]} ${a.y}, ore ${due(a.h)}:${due(a.min)}-${due(b.h)}:${due(b.min)}`;
}
const titoloMateria = (slug) => materia(slug)?.titolo || slug;
const isoRoma = (ms) => { const p = partiRoma(ms); return `${p.y}-${due(p.m)}-${due(p.d)}T${due(p.h)}:${due(p.min)}:00`; };

// ---------- Google Calendar ----------
const SCOPI_GOOGLE = 'https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar.freebusy';
const COOKIE_OAUTH_GOOGLE = '__Host-google_oauth';
const DURATA_OAUTH_GOOGLE = 15 * 60;
const cookieOAuthGoogle = (stato, durata = DURATA_OAUTH_GOOGLE) =>
  `${COOKIE_OAUTH_GOOGLE}=${encodeURIComponent(stato)}; Path=/; Max-Age=${durata}; HttpOnly; Secure; SameSite=Lax`;
function esitoOAuthGoogle(testo, collegato = false) {
  // Una pagina del sito interrompe la navigazione iniziata su Google: il link successivo
  // riconosce di nuovo la sessione amministrativa, che conserva SameSite=Strict.
  const r = pagina(`<h1>Google Calendar</h1><p>${esc(testo)}</p><p><a class="tasto" href="/admin/lezioni${collegato ? '?collegato=1' : ''}">Torna alle lezioni</a></p>`, 'Collegamento Google Calendar');
  r.headers.set('set-cookie', cookieOAuthGoogle('', 0));
  r.headers.set('referrer-policy', 'no-referrer');
  return r;
}
let accessoGoogle = null; // { token, scade } tenuto in memoria finché il Worker resta acceso
async function tokenGoogle(env, aDO) {
  if (accessoGoogle && accessoGoogle.scade > Date.now() + 60000) return accessoGoogle.token;
  const refresh = (await aDO(env, '/pren-impostazione', { chiave: 'google_refresh' })).valore;
  if (!refresh || !env.GOOGLE_CLIENT_ID || !env.GOOGLE_CLIENT_SECRET) return null;
  const r = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ client_id: env.GOOGLE_CLIENT_ID, client_secret: env.GOOGLE_CLIENT_SECRET, refresh_token: refresh, grant_type: 'refresh_token' }),
  });
  const d = await r.json().catch(() => ({}));
  if (!r.ok || !d.access_token) { console.log('google token', r.status, JSON.stringify(d).slice(0, 300)); return null; }
  accessoGoogle = { token: d.access_token, scade: Date.now() + (d.expires_in || 3000) * 1000 };
  return accessoGoogle.token;
}
const calendario = (env) => encodeURIComponent(env.GOOGLE_CALENDARIO || 'primary');
async function google(env, aDO, metodo, percorso, corpo) {
  const token = await tokenGoogle(env, aDO);
  if (!token) throw new Error('Google Calendar non collegato');
  const r = await fetch('https://www.googleapis.com/calendar/v3' + percorso, {
    method: metodo, headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json' },
    body: corpo ? JSON.stringify(corpo) : undefined,
  });
  if (r.status === 204 || r.status === 410) return {};
  const d = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(`Google ${r.status}: ${JSON.stringify(d).slice(0, 300)}`);
  return d;
}
async function occupatoGoogle(env, aDO, da, a) {
  const id = env.GOOGLE_CALENDARIO || 'primary';
  const d = await google(env, aDO, 'POST', '/freeBusy', { timeMin: new Date(da).toISOString(), timeMax: new Date(a).toISOString(), items: [{ id }] });
  const cal = d.calendars?.[id];
  if (!cal || cal.errors?.length) throw new Error('freeBusy: ' + JSON.stringify(cal?.errors || d).slice(0, 200));
  return cal.busy.map((b) => ({ inizio: Date.parse(b.start), fine: Date.parse(b.end) }));
}
function descrizioneEvento(l, linkGestione) {
  const righe = [
    `Lezione individuale di ${titoloMateria(l.materia)} (prenotata dal sito).`,
    `Studente: ${l.nome} · ${l.email}${l.telefono ? ' · ' + l.telefono : ''}`,
    l.universita ? `Università e corso: ${l.universita}` : '',
    l.note ? `Argomenti: ${l.note}` : '',
  ].filter(Boolean);
  return `${righe.join('\n')}\n\nSpostamento o disdetta con rimborso fino a ${LEZIONI.rimborsoOre} ore prima: ${linkGestione}`;
}
async function creaEvento(env, aDO, l, linkGestione) {
  const corpo = {
    summary: `Lezione di ${titoloMateria(l.materia)} · ${l.nome}`,
    description: descrizioneEvento(l, linkGestione),
    start: { dateTime: isoRoma(l.inizio), timeZone: LEZIONI.fusoOrario },
    end: { dateTime: isoRoma(l.fine), timeZone: LEZIONI.fusoOrario },
    attendees: [{ email: l.email, displayName: l.nome }],
    conferenceData: { createRequest: { requestId: l.id, conferenceSolutionKey: { type: 'hangoutsMeet' } } },
    reminders: { useDefault: false, overrides: [{ method: 'popup', minutes: LEZIONI.avvisoMinuti }] },
  };
  let ev = await google(env, aDO, 'POST', `/calendars/${calendario(env)}/events?conferenceDataVersion=1&sendUpdates=all`, corpo);
  if (!ev.hangoutLink && ev.id) { // il link di Meet a volte arriva un attimo dopo
    await new Promise((r) => setTimeout(r, 1500));
    ev = await google(env, aDO, 'GET', `/calendars/${calendario(env)}/events/${encodeURIComponent(ev.id)}`).catch(() => ev);
  }
  return { evento: ev.id || null, meet: ev.hangoutLink || ev.conferenceData?.entryPoints?.find((e) => e.entryPointType === 'video')?.uri || null };
}

// ---------- Stripe ----------
function campiStripe(oggetto, prefisso = '', fuori = new URLSearchParams()) {
  for (const [k, v] of Object.entries(oggetto)) {
    if (v == null) continue;
    const nome = prefisso ? `${prefisso}[${k}]` : k;
    if (typeof v === 'object') campiStripe(v, nome, fuori);
    else fuori.append(nome, String(v));
  }
  return fuori;
}
async function stripe(env, metodo, percorso, campi, idempotenza) {
  const h = { authorization: `Bearer ${env.STRIPE_SECRET_KEY}`, 'content-type': 'application/x-www-form-urlencoded' };
  if (idempotenza) h['idempotency-key'] = idempotenza;
  const r = await fetch('https://api.stripe.com/v1' + percorso, { method: metodo, headers: h, body: campi ? campiStripe(campi) : undefined });
  const d = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(`Stripe ${r.status}: ${d.error?.message || ''}`);
  return d;
}
const esa = (buf) => [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
export async function verificaStripe(intestazione, corpo, segreto, adesso = Date.now()) {
  const parti = String(intestazione || '').split(',').map((x) => x.trim().split('='));
  const t = parti.find(([k]) => k === 't')?.[1];
  const firme = parti.filter(([k]) => k === 'v1').map(([, v]) => v);
  if (!t || !firme.length || Math.abs(adesso / 1000 - Number(t)) > 300) return false;
  const k = await crypto.subtle.importKey('raw', new TextEncoder().encode(segreto), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const atteso = esa(await crypto.subtle.sign('HMAC', k, new TextEncoder().encode(`${t}.${corpo}`)));
  return firme.some((f) => f.length === atteso.length && [...f].reduce((acc, ch, i) => acc | (ch.charCodeAt(0) ^ atteso.charCodeAt(i)), 0) === 0);
}

// ---------- email (Resend) ----------
const esc = (x) => String(x ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
async function inviaEmail(env, a, oggetto, righe, tasto, dettagli = {}) {
  const messaggio = componiEmail({
    subject: oggetto, categoria: 'Lezioni individuali', righe, pulsante: tasto, ...dettagli,
  });
  return (await inviaEmailResend(env, a, messaggio)).ok;
}
const rigaMeet = (l) => (l.meet ? `Link della lezione su Google Meet: ${l.meet}` : 'Il link di Google Meet arriva con l’invito di Google Calendar a questo indirizzo.');
const rigaRegole = () => `La lezione si può spostare o disdire con rimborso completo fino a ${LEZIONI.rimborsoOre} ore prima dell’inizio. Dopo quel momento non è previsto il rimborso.`;

// ---------- link di Meet 2 minuti prima della lezione ----------
// Cron di Cloudflare al minuto 58 di ogni ora (le lezioni iniziano sempre all'ora esatta):
// a chi ha una lezione pagata che inizia nei prossimi minuti arriva l'email con il link di Google Meet.
export async function avvisiLezioni(env, aDO, firmaToken, adesso = Date.now()) {
  const { lezioni } = await aDO(env, '/pren-da-avvisare', { da: adesso, a: adesso + (LEZIONI.avvisoMinuti + 3) * 60000 });
  let inviate = 0;
  for (const l of lezioni) {
    const p = partiRoma(l.inizio);
    const ok = await inviaEmail(env, l.email, `La lezione inizia alle ${due(p.h)}:${due(p.min)}: ecco il link`, [
      `Ciao ${l.nome.split(' ')[0]},`,
      `la lezione di ${titoloMateria(l.materia)} inizia alle ${due(p.h)}:${due(p.min)}.`,
      l.meet ? `Si entra su Google Meet da questo link: ${l.meet}` : 'Il link di Google Meet è nell’invito di Google Calendar che hai ricevuto alla prenotazione.',
    ], l.meet ? ['Entra nella lezione', l.meet] : null);
    await aDO(env, '/pren-avvisata', { id: l.id });
    if (ok) inviate++;
  }
  return { lezioni: lezioni.length, inviate };
}

// ---------- percorsi del Worker ----------
// h = { aDO, firmaToken, leggiToken, json, leggiCookie, emailValida, normalizza }
export async function gestisciPrenotazioni(req, env, ctx, p, h) {
  const POST = req.method === 'POST';
  const { aDO, json } = h;
  const origine = new URL(req.url).origin;
  const corpo = async () => (POST ? req.json().catch(() => ({})) : {});
  const linkGestione = async (id) => `${origine}/prenota/gestisci#t=${await h.firmaToken(env, { l: id, scopo: 'lezione' })}`;
  const daToken = async (t) => {
    const d = typeof t === 'string' ? await h.leggiToken(env, t) : null;
    if (d?.scopo !== 'lezione' || !d.l) return null;
    return (await aDO(env, '/pren-leggi', { id: d.l })).lezione;
  };
  const attivo = async () => Boolean(env.STRIPE_SECRET_KEY && (await tokenGoogle(env, aDO).catch(() => null)));

  // Orari liberi: regole del sito, meno impegni del calendario Google, meno lezioni già prese.
  const orariLiberi = async (escluso = '') => {
    const previsti = orariPrevisti();
    if (!previsti.length) return [];
    const da = previsti[0].inizio, a = previsti.at(-1).fine;
    const [g, db] = await Promise.all([occupatoGoogle(env, aDO, da, a), aDO(env, '/pren-occupate', { da, a })]);
    const nostre = escluso ? (await aDO(env, '/pren-leggi', { id: escluso })).lezione : null;
    // la lezione che si sta spostando occupa il suo orario anche in Google: quell'intervallo non conta
    const daGoogle = nostre ? g.filter((x) => !(x.inizio >= nostre.inizio && x.fine <= nostre.fine)) : g;
    const daDB = db.occupate.filter((x) => !(nostre && x.inizio === nostre.inizio && x.fine === nostre.fine));
    return previsti.filter((s) => !siSovrappone(s, daGoogle) && !siSovrappone(s, daDB));
  };
  const pubblico = (l) => ({ materia: titoloMateria(l.materia), quando: quando(l.inizio, l.fine), inizio: l.inizio, stato: l.stato, meet: l.meet,
    nome: l.nome, email: l.email, rimborsabile: l.stato === 'pagata' && Date.now() <= l.inizio - LEZIONI.rimborsoOre * ORA_MS });

  // ===== disponibilità =====
  if (p === '/api/prenota/disponibilita') {
    const base = { materie: MATERIE_LEZIONI, regole: LEZIONI };
    if (!(await attivo())) return json({ ...base, attivo: false, orari: [] }, 200, { 'cache-control': 'no-store' });
    try {
      const orari = await orariLiberi();
      return json({ ...base, attivo: true, orari: orari.map(({ inizio, giorno, ora }) => ({ inizio, giorno, ora })) }, 200, { 'cache-control': 'no-store' });
    } catch (e) {
      console.log('prenota disponibilita', String(e?.message || e));
      return json({ ...base, attivo: false, orari: [], errore: 'Il calendario non risponde. Riprova tra poco.' }, 503);
    }
  }

  // ===== nuova prenotazione: blocca l'orario e apre il pagamento =====
  if (p === '/api/prenota/inizia' && POST) {
    if (!(await attivo())) return json({ errore: 'Le prenotazioni online non sono ancora attive.' }, 503);
    const c = await corpo();
    const pulisci = (x, n) => (typeof x === 'string' ? x.replace(/[\u0000-\u001f<>]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, n) : '');
    const email = h.normalizza(c.email);
    const dati = {
      materia: MATERIE_LEZIONI.some((m) => m.slug === c.materia) ? c.materia : null,
      nome: pulisci(c.nome, 80), email, telefono: pulisci(c.telefono, 30), universita: pulisci(c.universita, 120),
      note: pulisci(c.note, 500), cf: pulisci(c.cf, 16).toUpperCase(),
    };
    if (!dati.materia) return json({ errore: 'Scegli la materia.' }, 400);
    if (dati.nome.length < 2) return json({ errore: 'Scrivi nome e cognome.' }, 400);
    if (!h.emailValida(email)) return json({ errore: 'Scrivi un indirizzo email valido.' }, 400);
    if (!/^[+0-9 ]{6,20}$/.test(dati.telefono)) return json({ errore: 'Scrivi un numero di telefono valido.' }, 400);
    if (dati.cf && !/^[A-Z0-9]{11,16}$/.test(dati.cf)) return json({ errore: 'Il codice fiscale non è valido.' }, 400);
    if (c.condizioni !== true) return json({ errore: 'Per prenotare servono le condizioni accettate.' }, 400);
    let orari;
    try { orari = await orariLiberi(); } catch { return json({ errore: 'Il calendario non risponde. Riprova tra poco.' }, 503); }
    const scelto = orari.find((s) => s.inizio === Number(c.inizio));
    if (!scelto) return json({ errore: 'Questo orario non è più libero. Scegline un altro.', occupato: true }, 409);

    const id = crypto.randomUUID().replace(/-/g, '').slice(0, 20);
    const ip = req.headers.get('cf-connecting-ip') || '';
    const rete = ip ? esa(await crypto.subtle.digest('SHA-256', new TextEncoder().encode('lezioni:' + ip))).slice(0, 24) : null;
    const scadeStripe = Math.floor(Date.now() / 1000) + LEZIONI.attesaPagamentoMin * 60 + 60;
    const b = await aDO(env, '/pren-blocca', { id, ...dati, rete, inizio: scelto.inizio, fine: scelto.fine, scadenza: scadeStripe * 1000 + 5 * 60000 });
    if (!b.ok) return json({ errore: b.motivo === 'troppe'
      ? 'Ci sono già prenotazioni in attesa di pagamento da questo indirizzo. Completa quelle o riprova tra mezz’ora.'
      : 'Questo orario non è più libero. Scegline un altro.', occupato: b.motivo === 'occupato' }, 409);

    const annulla = `${origine}/prenota?annullata=${encodeURIComponent(await h.firmaToken(env, { l: id, scopo: 'annulla' }))}`;
    try {
      const sessione = await stripe(env, 'POST', '/checkout/sessions', {
        mode: 'payment', locale: 'it', customer_email: email, client_reference_id: id, expires_at: scadeStripe,
        payment_method_types: { 0: 'card' },
        line_items: { 0: { quantity: 1, price_data: { currency: 'eur', unit_amount: LEZIONI.prezzo * 100,
          product_data: { name: `Lezione individuale di ${titoloMateria(dati.materia)}`, description: `${quando(scelto.inizio, scelto.fine)} · online su Google Meet` } } } },
        metadata: { prenotazione: id },
        payment_intent_data: { metadata: { prenotazione: id }, description: `Lezione di ${titoloMateria(dati.materia)} · ${quando(scelto.inizio, scelto.fine)} · ${dati.nome}` },
        success_url: `${origine}/prenota/confermata?s={CHECKOUT_SESSION_ID}`,
        cancel_url: annulla,
      }, 'sessione-' + id);
      await aDO(env, '/pren-sessione', { id, sessione: sessione.id });
      return json({ url: sessione.url });
    } catch (e) {
      console.log('prenota stripe', String(e?.message || e));
      await aDO(env, '/pren-libera', { id });
      return json({ errore: 'Il pagamento non si è aperto. Riprova tra poco.' }, 502);
    }
  }

  // ===== pagamento annullato dallo studente: l'orario torna subito libero =====
  if (p === '/api/prenota/libera' && POST) {
    const d = await h.leggiToken(env, String((await corpo()).t || ''));
    if (d?.scopo !== 'annulla' || !d.l) return json({ ok: false }, 400);
    const l = (await aDO(env, '/pren-leggi', { id: d.l })).lezione;
    if (l?.stato === 'in-attesa') {
      if (l.sessione) await stripe(env, 'POST', `/checkout/sessions/${l.sessione}/expire`).catch(() => {});
      await aDO(env, '/pren-libera', { id: l.id });
    }
    return json({ ok: true });
  }

  // ===== pagina di conferma: stato della prenotazione dopo il pagamento =====
  if (p === '/api/prenota/stato' && POST) {
    const s = String((await corpo()).s || '');
    if (!/^cs_[A-Za-z0-9_]{10,}$/.test(s)) return json({ errore: 'non trovata' }, 404);
    const l = (await aDO(env, '/pren-da-sessione', { sessione: s })).lezione;
    if (!l) return json({ errore: 'non trovata' }, 404);
    return json({ ...pubblico(l), gestione: l.stato === 'pagata' ? await linkGestione(l.id) : null }, 200, { 'cache-control': 'no-store' });
  }

  // ===== gestione dal link dell'email: vedere, spostare, disdire =====
  if (p === '/api/prenota/dettaglio' && POST) {
    const l = await daToken((await corpo()).t);
    if (!l || !['pagata', 'disdetta'].includes(l.stato)) return json({ errore: 'Prenotazione non trovata.' }, 404);
    return json(pubblico(l), 200, { 'cache-control': 'no-store' });
  }
  if (p === '/api/prenota/orari-spostamento' && POST) {
    const l = await daToken((await corpo()).t);
    if (!l || l.stato !== 'pagata') return json({ errore: 'Prenotazione non trovata.' }, 404);
    try {
      const orari = (await orariLiberi(l.id)).filter((s) => s.inizio !== l.inizio);
      return json({ orari: orari.map(({ inizio, giorno, ora }) => ({ inizio, giorno, ora })) }, 200, { 'cache-control': 'no-store' });
    } catch { return json({ errore: 'Il calendario non risponde. Riprova tra poco.' }, 503); }
  }
  if (p === '/api/prenota/sposta' && POST) {
    const c = await corpo();
    const l = await daToken(c.t);
    if (!l || l.stato !== 'pagata') return json({ errore: 'Prenotazione non trovata.' }, 404);
    if (Date.now() > l.inizio - LEZIONI.rimborsoOre * ORA_MS) return json({ errore: `Mancano meno di ${LEZIONI.rimborsoOre} ore alla lezione: non si può più spostare dal sito.` }, 409);
    let orari;
    try { orari = await orariLiberi(l.id); } catch { return json({ errore: 'Il calendario non risponde. Riprova tra poco.' }, 503); }
    const scelto = orari.find((s) => s.inizio === Number(c.inizio));
    if (!scelto) return json({ errore: 'Questo orario non è più libero. Scegline un altro.' }, 409);
    const r = await aDO(env, '/pren-sposta', { id: l.id, inizio: scelto.inizio, fine: scelto.fine });
    if (!r.ok) return json({ errore: 'Questo orario non è più libero. Scegline un altro.' }, 409);
    const nuova = r.lezione;
    if (nuova.evento) {
      ctx.waitUntil(google(env, aDO, 'PATCH', `/calendars/${calendario(env)}/events/${encodeURIComponent(nuova.evento)}?sendUpdates=all`, {
        start: { dateTime: isoRoma(nuova.inizio), timeZone: LEZIONI.fusoOrario }, end: { dateTime: isoRoma(nuova.fine), timeZone: LEZIONI.fusoOrario },
      }).catch((e) => console.log('prenota sposta google', String(e?.message || e))));
    }
    ctx.waitUntil(inviaEmail(env, nuova.email, `Lezione spostata: ${quando(nuova.inizio, nuova.fine)}`, [
      `Ciao ${nuova.nome.split(' ')[0]},`,
      `la lezione di ${titoloMateria(nuova.materia)} è stata spostata a ${quando(nuova.inizio, nuova.fine)}. Prima era fissata per ${quando(r.prima.inizio, r.prima.fine)}.`,
      rigaMeet(nuova), rigaRegole(),
    ], ['Gestisci la prenotazione', await linkGestione(nuova.id)]));
    return json(pubblico(nuova));
  }
  if (p === '/api/prenota/disdici' && POST) {
    const l = await daToken((await corpo()).t);
    if (!l || l.stato !== 'pagata') return json({ errore: 'Prenotazione non trovata.' }, 404);
    if (Date.now() > l.inizio - LEZIONI.rimborsoOre * ORA_MS)
      return json({ errore: `Mancano meno di ${LEZIONI.rimborsoOre} ore alla lezione: il rimborso non è più previsto.` }, 409);
    try {
      if (l.pagamento) await stripe(env, 'POST', '/refunds', { payment_intent: l.pagamento, metadata: { prenotazione: l.id } }, 'rimborso-' + l.id);
    } catch (e) {
      console.log('prenota rimborso', String(e?.message || e));
      return json({ errore: 'Il rimborso non è andato a buon fine. Scrivimi su WhatsApp e lo sistemo io.' }, 502);
    }
    const r = await aDO(env, '/pren-disdici', { id: l.id });
    if (l.evento) ctx.waitUntil(google(env, aDO, 'DELETE', `/calendars/${calendario(env)}/events/${encodeURIComponent(l.evento)}?sendUpdates=all`)
      .catch((e) => console.log('prenota disdici google', String(e?.message || e))));
    ctx.waitUntil(inviaEmail(env, l.email, 'Lezione disdetta e rimborsata', [
      `Ciao ${l.nome.split(' ')[0]},`,
      `la lezione di ${titoloMateria(l.materia)} di ${quando(l.inizio, l.fine)} è stata disdetta.`,
      `Il rimborso di ${LEZIONI.prezzo} € è partito sulla carta usata per il pagamento; di solito compare sull’estratto conto entro 5-10 giorni lavorativi.`,
    ]));
    return json(pubblico(r.lezione));
  }

  // ===== webhook di Stripe =====
  if (p === '/api/stripe/webhook' && POST) {
    const testo = await req.text();
    if (!env.STRIPE_WEBHOOK_SECRET || !(await verificaStripe(req.headers.get('stripe-signature'), testo, env.STRIPE_WEBHOOK_SECRET)))
      return new Response('firma non valida', { status: 400 });
    const ev = JSON.parse(testo);
    const s = ev.data?.object || {};
    const id = s.metadata?.prenotazione || s.client_reference_id;
    if (!id) return json({ ok: true });
    if (ev.type === 'checkout.session.completed' && s.payment_status === 'paid') {
      const r = await aDO(env, '/pren-pagata', { id, pagamento: s.payment_intent, importo: (s.amount_total || 0) / 100 });
      if (r.ok && r.primaVolta) {
        const l = r.lezione;
        const gestione = await linkGestione(id);
        try {
          const e = await creaEvento(env, aDO, l, gestione);
          await aDO(env, '/pren-evento', { id, ...e });
          l.meet = e.meet;
        } catch (e) { console.log('prenota evento google', String(e?.message || e)); }
        await inviaEmail(env, l.email, `Lezione confermata: ${quando(l.inizio, l.fine)}`, [
          `Ciao ${l.nome.split(' ')[0]},`,
          `ho ricevuto il pagamento di ${LEZIONI.prezzo} € per la tua lezione di ${titoloMateria(l.materia)}.`,
        ], ['Gestisci la prenotazione', gestione], {
          titolo: 'La tua lezione è confermata',
          anteprima: quando(l.inizio, l.fine),
          scheda: { etichetta: 'La tua prenotazione', valore: quando(l.inizio, l.fine), nota: 'Ora italiana · Google Meet' },
          dopo: [rigaMeet(l), 'Se hai una traccia d’esame o degli esercizi su cui lavorare, mandameli su WhatsApp prima della lezione.', rigaRegole()],
          motivo: 'Ricevi questa email perché hai prenotato una lezione individuale.',
        });
      }
    } else if (ev.type === 'checkout.session.expired') {
      await aDO(env, '/pren-libera', { id });
    }
    return json({ ok: true });
  }

  // ===== pagina riservata /admin/lezioni e collegamento di Google Calendar =====
  if (p === '/admin/lezioni' || p.startsWith('/admin/google/')) {
    const ritorno = `${origine}/admin/google/ritorno`;
    if (p === '/admin/google/ritorno') {
      if (req.method !== 'GET') return new Response('Metodo non consentito', { status: 405, headers: { allow: 'GET' } });
      const u = new URL(req.url);
      const stato = u.searchParams.get('state') || '';
      const inviato = h.leggiCookie(req, COOKIE_OAUTH_GOOGLE);
      const st = await h.leggiToken(env, stato);
      // Google torna da un altro sito, quindi il cookie admin Strict non viene inviato.
      // Il solo ritorno usa un cookie separato, breve e legato allo stato firmato
      // creato dopo l'accesso amministrativo. Uno stato di un altro browser non basta.
      if (!stato || stato !== inviato || st?.scopo !== 'google' || typeof st.nonce !== 'string' || !st.nonce
          || !Number.isFinite(st.t) || st.t > Date.now() + 60000 || Date.now() - st.t > DURATA_OAUTH_GOOGLE * 1000) {
        return esitoOAuthGoogle('Il collegamento è scaduto o non appartiene a questo browser. Riprova da Collega Google Calendar.');
      }
      if (!u.searchParams.get('code')) return esitoOAuthGoogle('Collegamento annullato.');
      const r = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ code: u.searchParams.get('code'), client_id: env.GOOGLE_CLIENT_ID, client_secret: env.GOOGLE_CLIENT_SECRET || '', redirect_uri: ritorno, grant_type: 'authorization_code' }),
      });
      const d = await r.json().catch(() => ({}));
      if (!r.ok || !d.refresh_token) {
        console.log('google collega', r.status, typeof d.error === 'string' ? d.error : 'refresh_token_assente');
        return esitoOAuthGoogle('Google non ha concesso l’accesso. Riprova da Collega Google Calendar.');
      }
      const concessi = new Set((d.scope || '').split(/\s+/));
      if (d.scope && !concessi.has('https://www.googleapis.com/auth/calendar') && !SCOPI_GOOGLE.split(' ').every((s) => concessi.has(s))) {
        return esitoOAuthGoogle('Google ha concesso solo parte dei permessi. Riprova selezionando sia la disponibilità sia la gestione degli eventi.');
      }
      await aDO(env, '/pren-imposta', { chiave: 'google_refresh', valore: d.refresh_token });
      accessoGoogle = null;
      return esitoOAuthGoogle('Google Calendar collegato.', true);
    }
    const ma = h.leggiCookie(req, 'admin');
    const sess = ma ? await h.leggiToken(env, ma) : null;
    if (!sess?.admin) return Response.redirect(`${origine}/admin`, 302);
    if (p === '/admin/google/collega') {
      if (!env.GOOGLE_CLIENT_ID) return pagina('Manca il codice GOOGLE_CLIENT_ID nelle impostazioni del sito.');
      if (!env.GOOGLE_CLIENT_SECRET) return pagina('Manca il segreto GOOGLE_CLIENT_SECRET nelle impostazioni del sito.');
      const stato = await h.firmaToken(env, { scopo: 'google', t: Date.now(), nonce: crypto.randomUUID() });
      const q = new URLSearchParams({ client_id: env.GOOGLE_CLIENT_ID, redirect_uri: ritorno, response_type: 'code', scope: SCOPI_GOOGLE,
        access_type: 'offline', prompt: 'consent', include_granted_scopes: 'true', state: stato });
      return new Response(null, { status: 302, headers: {
        location: `https://accounts.google.com/o/oauth2/v2/auth?${q}`, 'set-cookie': cookieOAuthGoogle(stato),
      } });
    }
    if (p === '/admin/google/scollega' && POST) {
      await aDO(env, '/pren-imposta', { chiave: 'google_refresh', valore: null });
      accessoGoogle = null;
      return Response.redirect(`${origine}/admin/lezioni`, 303);
    }
    if (p === '/admin/lezioni') return paginaAdminLezioni(env, aDO, new URL(req.url));
  }
  return null;
}

// ---------- pagina /admin/lezioni ----------
// Numero per il link di WhatsApp: solo cifre; un cellulare italiano scritto senza prefisso riceve il 39.
function numeroWhatsApp(t) {
  const cifre = String(t || '').replace(/^\+/, '').replace(/[^0-9]/g, '');
  return /^3\d{8,9}$/.test(cifre) ? '39' + cifre : cifre.replace(/^00/, '');
}
function pagina(corpo, titolo = 'Lezioni prenotate') {
  return new Response(`<!doctype html><html lang="it"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex"><title>${esc(titolo)}</title><style>
body{font-family:'Source Sans 3',system-ui,sans-serif;background:#faf8f2;color:#22302f;margin:0;padding:24px 16px;line-height:1.45}
main{max-width:1100px;margin:0 auto}h1{font-family:Georgia,serif;font-weight:600;margin:0 0 4px}a{color:#2f6f68}
.riga{display:flex;flex-wrap:wrap;gap:12px;align-items:center;margin:16px 0}.box{background:#fff;border:1px solid #ddd6c8;border-radius:8px;padding:14px 16px;margin:16px 0}
.ok{color:#2f6f68;font-weight:600}.no{color:#b23c2a;font-weight:600}button,.tasto{font:inherit;font-weight:600;background:#2f6f68;color:#fff;border:0;border-radius:999px;padding:8px 18px;cursor:pointer;text-decoration:none;display:inline-block}
button.secondario{background:none;color:#5a6664;border:1px solid #ddd6c8}
table{border-collapse:collapse;width:100%;background:#fff;border:1px solid #ddd6c8;border-radius:8px;overflow:hidden;font-size:15px}
th,td{text-align:left;padding:8px 10px;border-bottom:1px solid #eee8dc;vertical-align:top}th{background:#f1ede4;font-size:13px;text-transform:uppercase;letter-spacing:.05em;color:#5a6664}
.passata td{color:#8a928f}.stato{font-size:13px;font-weight:600;border-radius:999px;padding:2px 9px;white-space:nowrap}
.s-pagata{background:#e3efe9;color:#2f6f68}.s-disdetta{background:#f6e3df;color:#b23c2a}.s-in-attesa{background:#f4ecd9;color:#8a6420}
.piccolo{font-size:13px;color:#5a6664}.tab{overflow-x:auto}</style></head><body><main>${corpo}</main></body></html>`,
  { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store', 'x-robots-tag': 'noindex' } });
}
async function paginaAdminLezioni(env, aDO, url) {
  const collegato = Boolean((await aDO(env, '/pren-impostazione', { chiave: 'google_refresh' })).valore);
  let googleOk = false;
  if (collegato) googleOk = Boolean(await tokenGoogle(env, aDO).catch(() => null));
  const { lezioni } = await aDO(env, '/pren-elenco', {});
  const adesso = Date.now();
  const STATI = { pagata: 'Pagata', disdetta: 'Disdetta e rimborsata', 'in-attesa': 'In attesa di pagamento' };
  const visibili = lezioni.filter((l) => l.stato !== 'in-attesa' || l.scadenza > adesso);
  const righe = visibili.map((l) => `<tr class="${l.fine < adesso ? 'passata' : ''}">
<td>${esc(quando(l.inizio, l.fine))}</td><td>${esc(titoloMateria(l.materia))}</td>
<td>${esc(l.nome)}<br><span class="piccolo"><a href="mailto:${esc(l.email)}">${esc(l.email)}</a> · <a href="https://wa.me/${esc(numeroWhatsApp(l.telefono))}">${esc(l.telefono)}</a></span></td>
<td>${esc(l.universita || '')}${l.note ? `<br><span class="piccolo">${esc(l.note)}</span>` : ''}</td>
<td>${l.cf ? esc(l.cf) : '<span class="piccolo">non indicato</span>'}</td>
<td><span class="stato s-${esc(l.stato)}">${esc(STATI[l.stato] || l.stato)}</span>${l.spostamenti ? `<br><span class="piccolo">spostata ${l.spostamenti} ${l.spostamenti === 1 ? 'volta' : 'volte'}</span>` : ''}</td>
<td>${l.meet ? `<a href="${esc(l.meet)}" target="_blank" rel="noopener">Meet</a>` : ''}</td></tr>`).join('');
  return pagina(`<p class="piccolo"><a href="/admin">← Dashboard</a></p>
<h1>Lezioni prenotate</h1>
<p class="piccolo">Prenotazioni dalla pagina <a href="/prenota" target="_blank">/prenota</a>: ${LEZIONI.prezzo} € a lezione, pagamento con Stripe, evento e link di Meet nel tuo Google Calendar.</p>
${url.searchParams.get('collegato') ? '<div class="box ok">Google Calendar collegato.</div>' : ''}
<div class="box"><div class="riga" style="margin:0">
<div><strong>Google Calendar</strong><br>${collegato ? (googleOk ? '<span class="ok">Collegato</span>' : '<span class="no">Collegato, ma Google rifiuta l’accesso: ricollegalo</span>') : '<span class="no">Non collegato</span>'}</div>
<a class="tasto" href="/admin/google/collega">${collegato ? 'Ricollega' : 'Collega Google Calendar'}</a>
${collegato ? '<form method="post" action="/admin/google/scollega" style="margin:0"><button class="secondario" type="submit">Scollega</button></form>' : ''}
<div style="margin-left:auto"><strong>Stripe</strong><br>${env.STRIPE_SECRET_KEY ? '<span class="ok">Chiave inserita</span>' : '<span class="no">Chiave mancante</span>'} · ${env.STRIPE_WEBHOOK_SECRET ? '<span class="ok">webhook pronto</span>' : '<span class="no">segreto del webhook mancante</span>'}</div>
</div></div>
${righe ? `<div class="tab"><table><thead><tr><th>Quando</th><th>Materia</th><th>Studente</th><th>Università e argomenti</th><th>Codice fiscale</th><th>Stato</th><th></th></tr></thead><tbody>${righe}</tbody></table></div>`
    : '<p>Nessuna lezione prenotata dal sito negli ultimi 30 giorni o in programma.</p>'}
<p class="piccolo">Per le prenotazioni restano le regole della pagina: dal lunedì al sabato, ${LEZIONI.ore.map((o) => `${o}-${o + 1}`).join(', ')}, almeno ${LEZIONI.preavvisoOre} ore prima; gli impegni del tuo calendario tolgono gli orari corrispondenti. Problemi o richieste fuori dalle regole: <a href="${WHATSAPP}">WhatsApp</a>.</p>`);
}
