// Worker del sito: serve le pagine statiche e aggiunge account e accessi a pagamento.
//  - account studenti (email e password), sessione in un cookie firmato;
//  - oscuramento lato server (teoria in anteprima, schede oltre la 3ª, soluzioni, PDF);
//  - dashboard riservata /admin (iscritti, pagamenti, visite, attivazioni manuali);
//  - webhook Paddle: l'acquisto sblocca la materia nell'account dell'acquirente.
// Le materie a pagamento sono quelle di src/data/prezzi.json.
import { versoLaLinguaGiusta } from './lingua.mjs';
import { motoreVerificato, paginaPerMotore } from './motori.mjs';
import { eseguiIndexNow } from './indexnow.mjs';
import { stemmaSVG, rangoDi, gradoDi, nomeRango, stileRango, RANGHI } from './stemmi.mjs';
import PREZZI from '../src/data/prezzi.json';
import { paginaAdmin } from './admin.mjs';
import { MATERIE } from '../src/data/materie.ts';
import { VIDEOCORSI, chiaveVideo, variabilePrezzoVideo } from '../src/data/videocorsi.ts';
import { rispondiAssistente } from './assistente.mjs';
import { eseguiBanco, paginaProve, provaSubito } from './pi-prove.mjs';
import { spazioHome } from './spazio.mjs';
import { creaTabelleLivelli, battito, risposta, riepilogo, percorso, statoDi } from './livelli.mjs';
import { livelloDa, PUNTI, DOMANDE_SESSIONE, RIPASSO, RIPASSO_OGGI } from '../src/data/livelli.ts';
import { nomeDallEmail } from './nomi.mjs';
import { confronta } from './valuta.mjs';
import { esercizioRisolto, ripassoOggi, registraVista, progressi, salvaEsame } from './livelli.mjs';
import { inviaPromemoria, provaPromemoria, inviaATutti, statoPromemoria, PAGINA_DISATTIVATO } from './promemoria.mjs';
import { creaTabellePrenotazioni, archivioPrenotazioni, gestisciPrenotazioni, avvisiLezioni } from './prenotazioni.mjs';
import { creaTabelleGruppi, archivioGruppi, archivioFileGruppi, gestisciGruppi } from './gruppi.mjs';
import { creaTabelleInviti, archivioInviti, gestisciInviti, registraInvitato, dopoAcquistoMateria } from './inviti.mjs';
import { creaTabelleSfide, archivioSfide, gestisciSfide, sha } from './sfide.mjs';

const A_PAGAMENTO = Object.keys(PREZZI);
const CRON_PROMEMORIA = '30 16 * * *';
const CRON_LEZIONI = '58 * * * *'; // link di Meet 2 minuti prima delle lezioni (worker/prenotazioni.mjs)
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
const DATI_VALIDI = 3 * 60 * 1000;
const MODIFICHE_DASHBOARD = new Set(['/abilita', '/revoca', '/dispositivo-rimuovi', '/utente-password', '/segnalazione-letta', '/registra-acquisto', '/utente-crea']);
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
      -- ciclo di miglioramento di Pi: contatori anonimi (risposte, riserve, errori, limiti) e risposte del banco di prova
      CREATE TABLE IF NOT EXISTS pi_eventi (giorno TEXT, evento TEXT, n INTEGER, PRIMARY KEY (giorno, evento));
      CREATE TABLE IF NOT EXISTS pi_prove (giorno TEXT, id TEXT, area TEXT, domanda TEXT, risposta TEXT, modello TEXT, ms INTEGER, stato INTEGER, PRIMARY KEY (giorno, id));
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
    try { this.sql.exec('ALTER TABLE pi_prove ADD COLUMN tin INTEGER DEFAULT 0'); } catch { /* già presente */ }
    // promemoria per tornare a studiare (worker/promemoria.mjs): ultima attività, consenso, lingua, registro degli invii
    try { this.sql.exec('ALTER TABLE utenti ADD COLUMN attivo INTEGER'); } catch { /* già presente */ }
    try { this.sql.exec('ALTER TABLE utenti ADD COLUMN promemoria INTEGER DEFAULT 1'); } catch { /* già presente */ }
    try { this.sql.exec('ALTER TABLE utenti ADD COLUMN lingua TEXT'); } catch { /* già presente */ }
    this.sql.exec('CREATE TABLE IF NOT EXISTS promemoria (email TEXT, giorno TEXT, PRIMARY KEY (email, giorno))');
    this.sql.exec('CREATE TABLE IF NOT EXISTS promemoria_coda (email TEXT PRIMARY KEY, creato INTEGER)');
    // percorso d'acquisto: soli conteggi per giorno, evento e materia (nessun dato personale)
    this.sql.exec('CREATE TABLE IF NOT EXISTS eventi (giorno TEXT, evento TEXT, materia TEXT, n INTEGER, PRIMARY KEY (giorno, evento, materia))');
    // recupero della password: email inviate per giorno (per indirizzo e per tutto il sito), contro gli abusi
    this.sql.exec('CREATE TABLE IF NOT EXISTS recuperi (giorno TEXT, chiave TEXT, n INTEGER, ultimo INTEGER, PRIMARY KEY (giorno, chiave))');
    // segnalazioni di errori dalle pagine di studio (tasto «Segnala un errore»), lette da Carmine nella dashboard
    this.sql.exec(`CREATE TABLE IF NOT EXISTS segnalazioni (id INTEGER PRIMARY KEY AUTOINCREMENT, quando INTEGER, pagina TEXT, titolo TEXT,
      punto TEXT, testo TEXT, email TEXT, letta INTEGER DEFAULT 0)`);
    // livelli, punti esperienza, sessioni di studio, obiettivi e traguardi (worker/livelli.mjs)
    creaTabelleLivelli(this.sql);
    // lezioni individuali prenotate dal sito (worker/prenotazioni.mjs)
    creaTabellePrenotazioni(this.sql);
    // iscrizioni ai corsi di gruppo e tracce d'esame (worker/gruppi.mjs)
    creaTabelleGruppi(this.sql);
    // «Invita un amico»: codici personali, invitati e sconti del 15% (worker/inviti.mjs)
    creaTabelleInviti(this.sql);
    // sfide tra studenti: leghe settimanali, duelli, percentile delle simulazioni (worker/sfide.mjs)
    creaTabelleSfide(this.sql);
  }
  righe(q, ...p) { return [...this.sql.exec(q, ...p)]; }
  riga(q, ...p) { return this.righe(q, ...p)[0] ?? null; }
  dispositiviDi(email) { return this.righe('SELECT id, nome, creato, ultimo_uso FROM dispositivi WHERE email = ? ORDER BY ultimo_uso DESC', email); }
  materieDi(email) { return this.righe('SELECT materia FROM abilitazioni WHERE email = ?', email).map((r) => r.materia); }

  // Dati della dashboard: si ricalcolano al più ogni DATI_VALIDI ms. Il calcolo legge tutte le tabelle
  // (studio, risposte, visitatori…) e con la dashboard aperta ogni 20 secondi superava il limite giornaliero
  // di righe lette del piano gratuito (5 milioni): il 02/11/2026 account e dashboard si sono fermati.
  // Le azioni fatte dalla dashboard (abilita, revoca, …) svuotano la copia, così si vedono subito.
  async fetch(req) {
    const { pathname } = new URL(req.url);
    if (pathname !== '/dati') {
      if (MODIFICHE_DASHBOARD.has(pathname)) this.copiaDati = null;
      return this.rispondi(req, pathname);
    }
    if (this.copiaDati && Date.now() - this.copiaDati.t < DATI_VALIDI) return new Response(this.copiaDati.corpo, { headers: { 'content-type': 'application/json' } });
    const r = await this.rispondi(req, pathname);
    const corpo = await r.text();
    if (r.ok) this.copiaDati = { t: Date.now(), corpo };
    return new Response(corpo, { status: r.status, headers: { 'content-type': 'application/json' } });
  }

  async rispondi(req, pathname) {
    // pagine nuove o cambiate segnalate ai motori (worker/indexnow.mjs): il corpo è la mappa del sito
    if (pathname === '/indexnow') return Response.json(await eseguiIndexNow(this.sql, await req.text()));
    if (pathname.startsWith('/gruppi-file-salva') || pathname.startsWith('/gruppi-file-apri')) return archivioFileGruppi(this, req, pathname);
    const c = req.method === 'POST' ? await req.json() : {};
    if (pathname.startsWith('/gruppi-')) { const r = archivioGruppi(this, pathname, c); if (r) return Response.json(r); }
    if (pathname.startsWith('/pren-')) { const r = archivioPrenotazioni(this, pathname, c); if (r) return Response.json(r); }
    if (pathname.startsWith('/inv-')) { const r = archivioInviti(this, pathname, c); if (r) return Response.json(r); }
    if (pathname.startsWith('/sfi-')) { const r = archivioSfide(this, pathname, c); if (r) return Response.json(r); }
    const ora = new Date().toISOString();
    switch (pathname) {
      case '/visita':
        this.sql.exec(`INSERT INTO pagine (giorno, sezione, n) VALUES (?, ?, 1)
                       ON CONFLICT(giorno, sezione) DO UPDATE SET n = n + 1`, c.giorno, c.sezione);
        if (c.fonte) this.sql.exec(`INSERT INTO ingressi (giorno, fonte, n) VALUES (?, ?, 1)
                       ON CONFLICT(giorno, fonte) DO UPDATE SET n = n + 1`, c.giorno, c.fonte);
        if (c.campagna) this.sql.exec(`INSERT INTO eventi (giorno, evento, materia, n) VALUES (?, 'campagna', ?, 1)
                       ON CONFLICT(giorno, evento, materia) DO UPDATE SET n = n + 1`, c.giorno, c.campagna);
        if (c.h) {
          this.sql.exec('INSERT OR IGNORE INTO visitatori (giorno, h, mobile) VALUES (?, ?, ?)', c.giorno, c.h, c.mobile ? 1 : 0);
          if (Math.random() < 0.01) this.sql.exec("DELETE FROM visitatori WHERE giorno < date('now', '-200 days')");
        }
        return Response.json({ ok: true });

      case '/evento':
        this.sql.exec(`INSERT INTO eventi (giorno, evento, materia, n) VALUES (?, ?, ?, 1)
                       ON CONFLICT(giorno, evento, materia) DO UPDATE SET n = n + 1`, c.giorno, c.evento, c.materia);
        return Response.json({ ok: true });

      case '/utente': // dati per il login
        return Response.json(this.riga('SELECT email, hash, sale, iterazioni, versione, falliti, bloccato_fino FROM utenti WHERE email = ?', c.email));

      case '/utente-crea': {
        if (this.riga('SELECT email FROM utenti WHERE email = ?', c.email)) return Response.json({ ok: false, esiste: true });
        this.sql.exec('INSERT INTO utenti (email, hash, sale, iterazioni, versione, creato, ultimo_accesso, nome, fonte, corso, attivo, lingua) VALUES (?, ?, ?, ?, 1, ?, ?, ?, ?, ?, ?, ?)',
          c.email, c.hash, c.sale, c.iterazioni, ora, ora, c.nome || null, c.fonte || null, c.corso || null, Date.now(), c.lingua === 'en' ? 'en' : 'it');
        return Response.json({ ok: true, versione: 1 });
      }
      case '/utente-esito-login':
        if (c.ok) this.sql.exec('UPDATE utenti SET falliti = 0, bloccato_fino = 0, ultimo_accesso = ?, attivo = ?, lingua = ? WHERE email = ?', ora, Date.now(), c.lingua === 'en' ? 'en' : 'it', c.email);
        else this.sql.exec(`UPDATE utenti SET falliti = falliti + 1,
          bloccato_fino = CASE WHEN falliti + 1 >= 8 THEN ? ELSE bloccato_fino END WHERE email = ?`, Date.now() + 15 * 60 * 1000, c.email);
        return Response.json({ ok: true });

      case '/promemoria-candidati': { // studenti che accettano i promemoria, con ultima attività e ultimo argomento
        const righe = this.righe(`SELECT u.email, u.nome, u.creato, COALESCE(u.exp, 0) AS exp, u.lingua,
            MAX(COALESCE(u.attivo, 0), COALESCE((SELECT MAX(ultimo_uso) FROM dispositivi d WHERE d.email = u.email), 0),
                COALESCE((SELECT MAX(ultimo) FROM sessioni s WHERE s.email = u.email), 0)) AS ultima,
            (SELECT COUNT(*) FROM promemoria p WHERE p.email = u.email) AS inviati,
            EXISTS (SELECT 1 FROM promemoria p WHERE p.email = u.email AND p.giorno = ?) AS oggi,
            EXISTS (SELECT 1 FROM promemoria_coda q WHERE q.email = u.email) AS coda,
            (SELECT materia FROM sessioni s WHERE s.email = u.email AND s.materia IS NOT NULL ORDER BY ultimo DESC LIMIT 1) AS materia,
            (SELECT argomento FROM sessioni s WHERE s.email = u.email AND s.materia IS NOT NULL ORDER BY ultimo DESC LIMIT 1) AS argomento
          FROM utenti u WHERE u.hash IS NOT NULL AND ${c.solo ? 'u.email = ?' : 'COALESCE(u.promemoria, 1) = 1'}`, c.giorno, ...(c.solo ? [c.solo] : []));
        const rec = this.riga("SELECT n FROM recuperi WHERE giorno = ? AND chiave = '*sito'", c.giorno);
        const inv = this.riga('SELECT COUNT(*) AS n FROM promemoria WHERE giorno = ?', c.giorno);
        return Response.json({ righe, recuperiOggi: rec?.n || 0, inviatiOggi: inv?.n || 0 });
      }
      case '/promemoria-registra':
        for (const e of c.email || []) {
          this.sql.exec('INSERT OR IGNORE INTO promemoria (email, giorno) VALUES (?, ?)', e, c.giorno);
          this.sql.exec('DELETE FROM promemoria_coda WHERE email = ?', e);
        }
        return Response.json({ ok: true });
      case '/promemoria-coda':
        for (const e of c.email || []) this.sql.exec('INSERT OR IGNORE INTO promemoria_coda (email, creato) VALUES (?, ?)', e, Date.now());
        return Response.json({ ok: true });
      case '/promemoria-no':
        this.sql.exec('UPDATE utenti SET promemoria = 0 WHERE email = ?', c.email);
        this.sql.exec('DELETE FROM promemoria_coda WHERE email = ?', c.email);
        return Response.json({ ok: true });

      case '/recupero-conta': { // al massimo 3 email al giorno per indirizzo, una ogni 2 minuti, e un tetto per tutto il sito
        const ora = Date.now();
        const e = this.riga('SELECT n, ultimo FROM recuperi WHERE giorno = ? AND chiave = ?', c.giorno, c.email);
        const s = this.riga("SELECT n FROM recuperi WHERE giorno = ? AND chiave = '*sito'", c.giorno);
        if (e && (e.n >= 3 || ora - e.ultimo < 120 * 1000)) return Response.json({ ok: false, motivo: 'indirizzo' });
        if (s && s.n >= c.maxSito) return Response.json({ ok: false, motivo: 'sito' });
        for (const k of [c.email, '*sito'])
          this.sql.exec(`INSERT INTO recuperi (giorno, chiave, n, ultimo) VALUES (?, ?, 1, ?)
                         ON CONFLICT(giorno, chiave) DO UPDATE SET n = n + 1, ultimo = ?`, c.giorno, k, ora, ora);
        this.sql.exec("DELETE FROM recuperi WHERE giorno < date('now', '-7 days')");
        return Response.json({ ok: true });
      }
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
        if (Date.now() - d.ultimo_uso > 60 * 1000) { // ultima attività: si registra al più una volta al minuto
          this.sql.exec('UPDATE dispositivi SET ultimo_uso = ? WHERE email = ? AND id = ?', Date.now(), c.email, c.dispositivo);
          this.sql.exec('UPDATE utenti SET attivo = ? WHERE email = ?', Date.now(), c.email);
        }
        const dispositivi = this.dispositiviDi(u.email).map((x) => ({ nome: x.nome, questo: x.id === c.dispositivo }));
        return Response.json({ email: u.email, nome: u.nome || null, creato: u.creato, materie: this.materieDi(u.email), dispositivi, exp: statoDi(this, u.email).exp });
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

      // livelli e punti esperienza
      // con il minuto di studio arrivano anche gli inviti ai duelli ricevuti mentre si studia
      case '/liv-battito': return Response.json({ ...battito(this, c), inviti: archivioSfide(this, '/sfi-inviti', c).inviti });
      case '/liv-risposta': return Response.json(risposta(this, c));
      case '/liv-riepilogo': return Response.json(riepilogo(this, c));
      case '/liv-percorso': return Response.json(percorso(this, c));
      case '/liv-esercizio': return Response.json(esercizioRisolto(this, c));
      case '/liv-ripasso': return Response.json(ripassoOggi(this, c));
      case '/liv-vista': return Response.json(registraVista(this, c));
      case '/liv-progressi': return Response.json(progressi(this, c));
      case '/liv-esame': return Response.json(salvaEsame(this, c));
      case '/verifiche-conta': { // tentativi di verifica: al massimo 300 al giorno per persona
        const k = '*verifica:' + c.chi;
        const n = this.riga('SELECT n FROM recuperi WHERE giorno = ? AND chiave = ?', c.giorno, k)?.n || 0;
        if (n >= 300) return Response.json({ ok: false });
        this.sql.exec(`INSERT INTO recuperi (giorno, chiave, n, ultimo) VALUES (?, ?, 1, ?)
                       ON CONFLICT(giorno, chiave) DO UPDATE SET n = n + 1, ultimo = ?`, c.giorno, k, Date.now(), Date.now());
        return Response.json({ ok: true });
      }

      case '/segnala': { // al massimo 10 segnalazioni al giorno per persona e 300 per tutto il sito
        const conta = (k) => this.riga('SELECT n FROM recuperi WHERE giorno = ? AND chiave = ?', c.giorno, k)?.n || 0;
        if (conta('*segnala:' + c.chi) >= 10 || conta('*segnala') >= 300) return Response.json({ ok: false });
        for (const k of ['*segnala:' + c.chi, '*segnala'])
          this.sql.exec(`INSERT INTO recuperi (giorno, chiave, n, ultimo) VALUES (?, ?, 1, ?)
                         ON CONFLICT(giorno, chiave) DO UPDATE SET n = n + 1, ultimo = ?`, c.giorno, k, Date.now(), Date.now());
        this.sql.exec('INSERT INTO segnalazioni (quando, pagina, titolo, punto, testo, email) VALUES (?, ?, ?, ?, ?, ?)',
          Date.now(), c.pagina, c.titolo, c.punto, c.testo, c.email);
        return Response.json({ ok: true });
      }
      case '/segnalazioni':
        return Response.json({ righe: this.righe('SELECT * FROM segnalazioni ORDER BY letta, id DESC LIMIT 300') });
      case '/segnalazione-letta':
        this.sql.exec('UPDATE segnalazioni SET letta = ? WHERE id = ?', c.letta ? 1 : 0, Number(c.id));
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

      case '/pi-evento':
        this.sql.exec(`INSERT INTO pi_eventi (giorno, evento, n) VALUES (?, ?, 1)
                       ON CONFLICT(giorno, evento) DO UPDATE SET n = n + 1`, c.giorno, String(c.evento).slice(0, 60));
        return Response.json({ ok: true });
      case '/pi-prove-salva':
        for (const r of c.righe || []) {
          this.sql.exec('INSERT OR REPLACE INTO pi_prove (giorno, id, area, domanda, risposta, modello, ms, stato, tin) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
            c.giorno, r.id, r.area, r.domanda, r.risposta, r.modello, r.ms, r.stato, Number(r.tin) || 0);
        }
        this.sql.exec("DELETE FROM pi_prove WHERE giorno < date('now', '-60 days')");
        return Response.json({ ok: true });
      case '/pi-prove-leggi': {
        const giorni = this.righe('SELECT DISTINCT giorno FROM pi_prove ORDER BY giorno DESC LIMIT 30').map((r) => r.giorno);
        const g = c.giorno || giorni[0] || null;
        return Response.json({
          giorno: g, giorni,
          prove: g ? this.righe('SELECT id, area, domanda, risposta, modello, ms, stato, tin FROM pi_prove WHERE giorno = ? ORDER BY id', g) : [],
          eventi: this.righe("SELECT giorno, evento, n FROM pi_eventi WHERE giorno >= date('now', '-14 days') ORDER BY giorno DESC, evento"),
          uso: this.righe(`SELECT giorno, SUM(n) AS messaggi, COUNT(*) AS persone, SUM(COALESCE(tin, 0)) AS tin, SUM(COALESCE(tout, 0)) AS tout
                           FROM assistente WHERE giorno >= date('now', '-14 days') GROUP BY giorno ORDER BY giorno DESC`),
        });
      }

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
        // percorso d'acquisto per materia: pagine della materia, fine dell'anteprima, pagina Sblocca, tasto, pagamenti
        const percorsoAcquisto = (giorni) => {
          const da = `date('now', '-${giorni - 1} days')`;
          const pagine = this.righe(`SELECT sezione, SUM(n) AS n FROM pagine WHERE giorno >= ${da} GROUP BY sezione`);
          const ev = this.righe(`SELECT evento, materia, SUM(n) AS n FROM eventi WHERE giorno >= ${da} AND evento != 'campagna' GROUP BY evento, materia`);
          const pag = this.righe(`SELECT materia, COUNT(*) AS n FROM acquisti WHERE substr(creato, 1, 10) >= ${da} GROUP BY materia`);
          const r = {};
          const voce = (m) => (r[m] ??= { materia: m, pagine: 0, fine: 0, sblocca: 0, tasto: 0, pagati: 0 });
          for (const x of pagine) {
            const [m, a] = x.sezione.split('/');
            if (a === 'sblocca') voce(m).sblocca += x.n;
            else if (m === 'videocorsi' && a) voce('video-' + a).pagine += x.n;
            else voce(m).pagine += x.n;
          }
          for (const x of ev) { const v = voce(x.materia); if (x.evento === 'fine-anteprima') v.fine += x.n; if (x.evento === 'tasto') v.tasto += x.n; }
          for (const x of pag) voce(x.materia).pagati += x.n;
          return Object.values(r).filter((v) => v.fine || v.sblocca || v.tasto || v.pagati);
        };
        const campagne = (giorni) => this.righe(`SELECT materia AS campagna, SUM(n) AS n FROM eventi WHERE evento = 'campagna'
                                                 AND giorno >= date('now', '-${giorni - 1} days') GROUP BY materia ORDER BY n DESC LIMIT 30`);
        return Response.json({
          visite: this.righe(`SELECT giorno, SUM(n) AS n FROM pagine WHERE giorno >= date('now', '-179 days') GROUP BY giorno ORDER BY giorno`),
          visitatori: this.righe(`SELECT giorno, COUNT(*) AS n, SUM(mobile) AS mobile FROM visitatori
                                  WHERE giorno >= date('now', '-179 days') GROUP BY giorno ORDER BY giorno`),
          inizioVisitatori: this.riga('SELECT MIN(giorno) AS g FROM visitatori')?.g || null,
          sezioni: { 7: sezioni(7), 30: sezioni(30), 90: sezioni(90) },
          percorsoAcquisto: { 7: percorsoAcquisto(7), 30: percorsoAcquisto(30), 90: percorsoAcquisto(90) },
          campagne: { 7: campagne(7), 30: campagne(30), 90: campagne(90) },
          ingressi: this.righe(`SELECT giorno, fonte, n FROM ingressi WHERE giorno >= date('now', '-179 days') ORDER BY giorno`),
          fontiIscritti: this.righe(`SELECT COALESCE(u.fonte, 'Non registrata') AS fonte, COUNT(*) AS iscritti,
                              COUNT(DISTINCT a.email) AS paganti FROM utenti u
                              LEFT JOIN (SELECT DISTINCT email FROM acquisti) a ON a.email = u.email
                              GROUP BY COALESCE(u.fonte, 'Non registrata') ORDER BY iscritti DESC`),
          acquisti: this.righe('SELECT * FROM acquisti ORDER BY id DESC LIMIT 500'),
          totali: this.righe('SELECT materia, COUNT(*) AS vendite, SUM(importo) AS incasso FROM acquisti GROUP BY materia'),
          // livello e studio di ogni studente (EXP totali in utenti.exp; minuti e risposte dalle tabelle dei livelli)
          // attivita = ultima volta che lo studente ha usato il sito con l'account (pagine, studio, domande), in millisecondi
          utenti: this.righe(`SELECT u.email, u.nome, u.fonte, u.corso, u.creato, u.ultimo_accesso, GROUP_CONCAT(a.materia, ', ') AS materie,
                              MAX(COALESCE(u.attivo, 0), COALESCE((SELECT MAX(ultimo_uso) FROM dispositivi d WHERE d.email = u.email), 0),
                                  COALESCE((SELECT MAX(ultimo) FROM sessioni s WHERE s.email = u.email), 0),
                                  COALESCE((SELECT MAX(ultimo) FROM studio x WHERE x.email = u.email), 0),
                                  COALESCE((SELECT MAX(quando) FROM risposte r WHERE r.email = u.email), 0)) AS attivita,
                              COALESCE(u.exp, 0) AS exp, COALESCE(st.minuti, 0) AS minuti, st.ultimo_studio,
                              COALESCE(rs.risposte, 0) AS risposte, COALESCE(rs.corrette, 0) AS corrette
                              FROM utenti u LEFT JOIN abilitazioni a ON a.email = u.email
                              LEFT JOIN (SELECT email, SUM(minuti) AS minuti, MAX(giorno) AS ultimo_studio FROM studio GROUP BY email) st ON st.email = u.email
                              LEFT JOIN (SELECT email, COUNT(*) AS risposte, SUM(corretta) AS corrette FROM risposte GROUP BY email) rs ON rs.email = u.email
                              GROUP BY u.email ORDER BY u.creato DESC LIMIT 1000`).map((u) => {
            const l = livelloDa(u.exp);
            return { ...u, livello: l.livello, fascia: l.fascia, perc: l.perc, mancano: l.mancano, rango: rangoDi(l.livello) };
          }),
          // uno stemma per rango (pieno), per la colonna Livello e la scheda dello studente
          stemmi: Array.from({ length: 10 }, (_, i) => stemmaSVG(i + 1, { perc: 100, id: 'adm' })),
          ranghi: RANGHI.map((r) => r.it),
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
const MAX_DISPOSITIVI = 3;
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
    it: (l) => `Questo account è già in uso su ${MAX_DISPOSITIVI} dispositivi (${l}). Esci da uno di questi, oppure scrivimi dalla pagina Contatti per scollegarli.`,
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
// Solo il nome (la prima parola), con l'iniziale maiuscola. Se lo studente non l'ha scritto
// si ricava dall'email (worker/nomi.mjs); se nemmeno lì si trova, si legge «Account».
const nomeVisibile = (io) => {
  const n = String(io.nome || '').trim().split(/\s+/)[0] || '';
  return n ? n[0].toUpperCase() + n.slice(1) : (nomeDallEmail(io.email) || 'Account');
};
const json = (dati, stato = 200, intestazioni = {}) => new Response(JSON.stringify(dati), { status: stato, headers: { 'content-type': 'application/json', ...intestazioni } });

// ---------- email per il recupero della password (Resend) ----------
const DURATA_RECUPERO = 60 * 60 * 1000; // il link vale un'ora
const TESTI_RECUPERO = {
  it: {
    nonAttivo: 'Il recupero automatico non è ancora attivo. Scrivimi dalla pagina Contatti e ti imposto una nuova password.',
    limiteIndirizzo: 'Ti ho già mandato un link da poco. Controlla la posta, anche nella cartella spam, oppure riprova tra qualche minuto.',
    limiteSito: 'Oggi sono state inviate troppe email. Riprova domani, oppure scrivimi dalla pagina Contatti.',
    invioFallito: 'Non sono riuscito a inviare l’email. Riprova tra qualche minuto, oppure scrivimi dalla pagina Contatti.',
    linkScaduto: 'Questo link non è più valido: è scaduto oppure è già stato usato. Chiedine uno nuovo dalla pagina di accesso.',
    oggetto: 'Nuova password per Ripetizioni di Analisi',
    corpo: (link) => [
      'Ciao,',
      'hai chiesto di impostare una nuova password per il tuo account su ripetizionidianalisi.com.',
      'Per sceglierla apri questo link, valido per un’ora:',
      link,
      'Se non sei stato tu, ignora questa email: la password attuale resta la stessa.',
      'Carmine',
    ],
    bottone: 'Scegli la nuova password',
  },
  en: {
    nonAttivo: 'Automatic recovery is not active yet. Message me from the Contact page and I will set a new password for you.',
    limiteIndirizzo: 'I sent you a link a short while ago. Check your inbox, including the spam folder, or try again in a few minutes.',
    limiteSito: 'Too many emails have been sent today. Try again tomorrow, or message me from the Contact page.',
    invioFallito: 'I could not send the email. Try again in a few minutes, or message me from the Contact page.',
    linkScaduto: 'This link is no longer valid: it has expired or has already been used. Request a new one from the login page.',
    oggetto: 'New password for Ripetizioni di Analisi',
    corpo: (link) => [
      'Hello,',
      'you asked to set a new password for your account on ripetizionidianalisi.com.',
      'To choose it, open this link, valid for one hour:',
      link,
      'If it was not you, ignore this email: your current password stays the same.',
      'Carmine',
    ],
    bottone: 'Choose the new password',
  },
};
const escHtml = (x) => String(x).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
async function inviaEmailRecupero(env, destinatario, link, l) {
  const T = TESTI_RECUPERO[l];
  const [saluto, chiesto, apri, , nonTu, firma] = T.corpo(link);
  const html = `<div style="font-family:Georgia,'Times New Roman',serif;font-size:16px;line-height:1.55;color:#22302f;max-width:520px">
<p>${escHtml(saluto)}</p><p>${escHtml(chiesto)}</p><p>${escHtml(apri)}</p>
<p style="margin:24px 0"><a href="${escHtml(link)}" style="background:#2f6f68;color:#ffffff;text-decoration:none;padding:12px 20px;border-radius:8px;font-family:Arial,sans-serif;font-size:15px;display:inline-block">${escHtml(T.bottone)}</a></p>
<p style="font-size:13px;color:#5b6664;word-break:break-all">${escHtml(link)}</p>
<p>${escHtml(nonTu)}</p><p>${escHtml(firma)}</p></div>`;
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { authorization: `Bearer ${env.RESEND_API_KEY}`, 'content-type': 'application/json' },
    body: JSON.stringify({
      from: env.MITTENTE || 'Ripetizioni di Analisi <account@ripetizionidianalisi.com>',
      to: [destinatario], subject: T.oggetto, html, text: T.corpo(link).join('\n\n'),
    }),
  });
  return r.ok;
}

// ---------- domande a tempo ----------
// I dati (testo, risposte, posizione della corretta, spiegazione) sono file statici generati alla build
// in /dati-domande/, letti solo qui dentro: dal browser quell'indirizzo non è raggiungibile.
const cacheDomande = {};
const linguaDi = (x) => (x === 'en' ? 'en' : 'it');
async function domandeDi(env, materia, lingua = 'it') {
  if (!/^[a-z0-9-]+$/.test(materia || '')) return null;
  const chiave = `${lingua}/${materia}`;
  if (!cacheDomande[chiave]) {
    const r = await env.ASSETS.fetch(new Request(`https://interno/dati-domande/${lingua === 'en' ? 'en/' : ''}${materia}.json`));
    if (!r.ok) return lingua === 'en' ? domandeDi(env, materia, 'it') : null;
    cacheDomande[chiave] = await r.json();
  }
  return cacheDomande[chiave];
}
const cacheRisposte = {};
async function risposteDi(env, materia) {
  if (!(materia in cacheRisposte)) {
    const r = await env.ASSETS.fetch(new Request(`https://interno/dati-risposte/${materia}.json`));
    cacheRisposte[materia] = r.ok ? await r.json() : null;
  }
  return cacheRisposte[materia];
}
let cacheCatalogo = null; // { materia: [argomenti con domande] }
async function catalogoDomande(env) {
  if (!cacheCatalogo) {
    const r = await env.ASSETS.fetch(new Request('https://interno/dati-domande/indice.json'));
    if (!r.ok) return {};
    cacheCatalogo = await r.json();
  }
  return cacheCatalogo;
}

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
  // Cron di Cloudflare (wrangler.jsonc → triggers): ogni mattina il banco di prova di Pi.
  // Alle 16:30 UTC (17:30 in Italia d'inverno) i promemoria per tornare a studiare (worker/promemoria.mjs).
  async scheduled(evento, env, ctx) {
    if (evento.cron === CRON_LEZIONI) {
      ctx.waitUntil(avvisiLezioni(env, aDO, firmaToken).then((r) => { if (r.lezioni) console.log('avvisi lezioni', JSON.stringify(r)); })
        .catch((e) => console.log('avvisi lezioni', String(e?.message || e))));
      return;
    }
    // A ogni cron (mattina e pomeriggio): pagine nuove o cambiate segnalate ai motori con IndexNow.
    ctx.waitUntil((async () => {
      const mappa = await env.ASSETS.fetch(new Request('https://ripetizionidianalisi.com/sitemap.xml'));
      const r = await archivio(env).fetch('https://archivio/indexnow', { method: 'POST', headers: { 'content-type': 'application/xml' }, body: mappa.body });
      console.log('indexnow', await r.text());
    })().catch((e) => console.log('indexnow', String(e?.message || e))));
    if (evento.cron === CRON_PROMEMORIA) {
      ctx.waitUntil(inviaPromemoria(env, aDO, firmaToken, await catalogoDomande(env).catch(() => ({})))
        .then((r) => console.log('promemoria', JSON.stringify(r))).catch((e) => console.log('promemoria', String(e?.message || e))));
      return;
    }
    ctx.waitUntil(eseguiBanco(env, aDO, A_PAGAMENTO, PREZZI).catch((e) => console.log('banco Pi', String(e?.message || e))));

  },
  async fetch(req, env, ctx) {
    const url = new URL(req.url);
    const p = url.pathname.replace(/\.html$/, '');
    const vendita = env.VENDITA !== '0';
    const POST = req.method === 'POST';

    // ===== un solo indirizzo per ogni pagina =====
    // Google aveva in elenco anche le versioni http:// e www. delle pagine: ora portano tutte, con un
    // reindirizzamento permanente, all'indirizzo https://ripetizionidianalisi.com (stesso percorso e parametri).
    if (url.hostname === 'www.ripetizionidianalisi.com' || (url.protocol === 'http:' && url.hostname === 'ripetizionidianalisi.com')) {
      const verso = new URL(url); verso.protocol = 'https:'; verso.hostname = 'ripetizionidianalisi.com'; verso.port = '';
      return Response.redirect(verso.toString(), req.method === 'GET' || req.method === 'HEAD' ? 301 : 308);
    }

    // ===== lingua del visitatore (worker/lingua.mjs) =====
    const versoLingua = await versoLaLinguaGiusta(req, env, url);
    if (versoLingua) return versoLingua;

    // ===== lezioni individuali: prenotazione, pagamento con Stripe, Google Calendar (worker/prenotazioni.mjs) =====
    if (p.startsWith('/api/prenota/') || p === '/api/stripe/webhook' || p === '/admin/lezioni' || p.startsWith('/admin/google/')) {
      const r = await gestisciPrenotazioni(req, env, ctx, p, { aDO, firmaToken, leggiToken, json, leggiCookie, emailValida, normalizza });
      if (r) return r;
    }

    // ===== corsi di gruppo: iscrizioni, tracce d'esame, elenco per Carmine (worker/gruppi.mjs) =====
    if (p.startsWith('/api/gruppi/') || p === '/admin/gruppi' || p === '/admin/gruppi.csv' || p.startsWith('/admin/gruppi/')) {
      const r = await gestisciGruppi(req, env, ctx, p, { aDO, archivio, firmaToken, leggiToken, json, leggiCookie, emailValida, normalizza });
      if (r) return r;
    }

    // ===== invita un amico: link personale, sconto del 15% a entrambi (worker/inviti.mjs) =====
    if (p.startsWith('/invito/') || p === '/api/invito' || p === '/api/sconto') {
      const r = await gestisciInviti(req, env, ctx, p, { aDO, json, utenteCollegato, leggiCookie });
      if (r) return r;
    }

    // ===== sfide tra studenti: leghe settimanali, duelli, percentile delle simulazioni (worker/sfide.mjs) =====
    if (p === '/api/lega' || p === '/api/lega/nome' || p.startsWith('/api/duelli/') || p === '/api/simulazione/esito') {
      const r = await gestisciSfide(req, env, ctx, p, { json, aDO, utenteCollegato, catalogoDomande, domandeDi, linguaDi });
      if (r) return r;
    }

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
      const r = await aDO(env, '/utente-crea', { email, hash, sale, iterazioni: ITERAZIONI_PBKDF2, nome: pulisciNome(nome), fonte, corso, lingua });
      if (!r.ok) return json({ errore: 'Esiste già un account con questa email. Accedi.' }, 409);
      // arrivato con il link d'invito di un altro studente: 15% sul primo acquisto di una materia
      const invito = leggiCookie(req, 'invito');
      if (invito) await registraInvitato(env, aDO, email, invito).catch((e) => console.log('inviti: registrazione', String(e)));
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
      ctx.waitUntil(aDO(env, '/utente-esito-login', { email, ok, lingua }));
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
      return json({ ...io, livello: livelloDa(io.exp || 0) });
    }

    // ===== percorso d'acquisto: conteggi anonimi (fine dell'anteprima, tasto di acquisto premuto) =====
    if (p === '/api/evento' && POST) {
      const ua = req.headers.get('user-agent') || '';
      const { e, m } = await req.json().catch(() => ({}));
      const materiaValida = typeof m === 'string' && (Object.hasOwn(PREZZI, m) || VIDEOCORSI.some((v) => 'video-' + v.slug === m));
      if (ua && !ROBOT.test(ua) && (e === 'fine-anteprima' || e === 'tasto') && materiaValida) {
        ctx.waitUntil(aDO(env, '/evento', { giorno: new Date().toISOString().slice(0, 10), evento: e, materia: m }).catch(() => {}));
      }
      return new Response(null, { status: 204 });
    }

    // ===== segnalazioni di errori dalle pagine di studio =====
    if (p === '/api/segnala' && POST) {
      const b = await req.json().catch(() => ({}));
      const pulisci = (x, n) => (typeof x === 'string' ? x.replace(/[\u0000-\u0008\u000b-\u001f]/g, '').trim().slice(0, n) : '');
      const testo = pulisci(b.testo, 2000), pagina = pulisci(b.pagina, 300);
      const en = /^\/en(\/|$)/.test(pagina);
      if (testo.length < 5 || !pagina.startsWith('/')) return json({ errore: en ? 'Write at least a few words.' : 'Scrivi almeno qualche parola.' }, 400);
      const io = await utenteCollegato(env, req).catch(() => null);
      const emailData = normalizza(pulisci(b.email, 200));
      const email = io?.email || (emailValida(emailData) ? emailData : null);
      const impronta = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`${req.headers.get('cf-connecting-ip') || ''}|${req.headers.get('user-agent') || ''}`));
      const chi = io?.email || [...new Uint8Array(impronta).slice(0, 8)].map((x) => x.toString(16).padStart(2, '0')).join('');
      const r = await aDO(env, '/segnala', { giorno: new Date().toISOString().slice(0, 10), chi, pagina, titolo: pulisci(b.titolo, 200), punto: pulisci(b.punto, 200), testo, email });
      if (!r.ok) return json({ errore: en ? 'Too many reports today: please write to Carmine on WhatsApp.' : 'Troppe segnalazioni oggi: scrivi a Carmine su WhatsApp.' }, 429);
      return json({ ok: true });
    }

    // ===== livelli e punti esperienza =====
    if (p.startsWith('/dati-domande/') || p.startsWith('/dati-risposte/')) return new Response('non trovato', { status: 404 });
    // Verifica della risposta di un esercizio da fare: il risultato resta nel Worker, al browser arriva solo l'esito.
    if (p === '/api/verifica' && POST) {
      const { id, risposta, lingua } = await req.json().catch(() => ({}));
      const en = lingua === 'en';
      const [materia, argomento, n] = String(id || '').split('/');
      if (!/^[a-z0-9-]+$/.test(materia || '') || !/^[a-z0-9-]+$/.test(argomento || '') || !/^\d+$/.test(n || '') || typeof risposta !== 'string' || risposta.length > 200)
        return json({ errore: en ? 'Invalid request.' : 'Richiesta non valida.' }, 400);
      const risultati = await risposteDi(env, materia);
      const giusta = risultati?.[`${argomento}/${n}`];
      if (!giusta) return json({ errore: en ? 'This exercise has no automatic check.' : 'Questo esercizio non ha la verifica automatica.' }, 404);
      const io = await utenteCollegato(env, req).catch(() => null);
      const impronta = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`${req.headers.get('cf-connecting-ip') || ''}|${req.headers.get('user-agent') || ''}`));
      const chi = io?.email || [...new Uint8Array(impronta).slice(0, 8)].map((x) => x.toString(16).padStart(2, '0')).join('');
      const giorno = new Date().toISOString().slice(0, 10);
      if (!(await aDO(env, '/verifiche-conta', { giorno, chi })).ok) return json({ errore: en ? 'Too many attempts today.' : 'Troppi tentativi oggi.' }, 429);
      const esito = confronta(risposta, giusta);
      if (esito !== 'giusta' || !io) return json({ esito }, 200, { 'cache-control': 'no-store' });
      const r = await aDO(env, '/liv-esercizio', { email: io.email, id: `${materia}/${argomento}/${n}`, materia, argomento, lingua: linguaDi(lingua), catalogo: await catalogoDomande(env) });
      return json({ esito, ...r }, 200, { 'cache-control': 'no-store' });
    }
    if (p === '/api/studio' && POST) { // un minuto di studio attivo
      const io = await utenteCollegato(env, req).catch(() => null);
      if (!io) return json({ errore: 'non collegato' }, 401);
      const { materia, argomento, lingua } = await req.json().catch(() => ({}));
      const pulito = (x) => (typeof x === 'string' && /^[a-z0-9-]{1,60}$/.test(x) ? x : null);
      return json(await aDO(env, '/liv-battito', { email: io.email, materia: pulito(materia), argomento: pulito(argomento), lingua: linguaDi(lingua), catalogo: await catalogoDomande(env) }));
    }
    if (p === '/api/domande/prossima' && POST) {
      const { materia, argomento, id, viste, recenti, lingua } = await req.json().catch(() => ({}));
      const l = linguaDi(lingua);
      const dati = await domandeDi(env, materia, l);
      // Prove d'esame (ripasso) e ripasso di oggi: le domande di tutti gli argomenti della materia.
      const personale = argomento === RIPASSO_OGGI;
      const ripasso = argomento === RIPASSO || personale;
      const gruppi = ripasso ? Object.values(dati?.argomenti || {}).filter((x) => x?.length) : [dati?.argomenti?.[argomento]].filter((x) => x?.length);
      const elenco = gruppi.flat();
      if (!elenco.length) return json({ errore: l === 'en' ? 'No questions for this topic.' : 'Nessuna domanda per questo argomento.' }, 404);
      let q = typeof id === 'string' ? elenco.find((x) => x.id === id) : null;
      let ordine = null;
      if (!q && Array.isArray(viste)) {
        // Pagina aperta prima del 31/10 alle 14:48: manda le domande già viste e non l'id.
        const gia = new Set(viste.slice(-200));
        q = elenco.find((x) => !gia.has(x.id)) || elenco.find((x) => x.id !== [...gia].pop()) || elenco[0];
      }
      if (!q && personale) {
        // Ripasso di oggi: le domande sbagliate arrivate alla loro data (worker/livelli.mjs, ripasso dilazionato).
        const io0 = await utenteCollegato(env, req).catch(() => null);
        if (!io0) return json({ errore: l === 'en' ? 'Today’s review is linked to your account: log in or create a free account. The questions you get wrong come back here after one day.' : 'Il ripasso di oggi è legato all’account: accedi o crea un account gratuito. Le domande sbagliate tornano qui dopo un giorno.' }, 401);
        const { domande: dovute } = await aDO(env, '/liv-ripasso', { email: io0.email, materia });
        const ids = new Set(elenco.map((x) => x.id));
        ordine = dovute.map((d) => d.slice(materia.length + 1)).filter((x) => ids.has(x)).slice(0, DOMANDE_SESSIONE);
        if (!ordine.length) return json({ errore: l === 'en' ? 'No questions to review today in this subject. The questions you get wrong in the timed questions come back here after one day, then after 3 and 7 days.' : 'Oggi non ci sono domande da ripassare in questa materia. Le domande sbagliate nelle domande a tempo tornano qui dopo un giorno, poi dopo 3 e 7 giorni.', vuoto: true }, 404);
        q = elenco.find((x) => x.id === ordine[0]);
      }
      if (!q) {
        // Nuova sessione: DOMANDE_SESSIONE domande a caso, prima quelle non proposte di recente.
        // Nel ripasso si pesca a turno dagli argomenti, così ogni sessione li tocca quasi tutti.
        const viste2 = new Set(Array.isArray(recenti) ? recenti.filter((x) => typeof x === 'string').slice(-300) : []);
        const mescola = (a) => { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
        const pila = (g) => [...mescola(g.filter((x) => !viste2.has(x.id))), ...mescola(g.filter((x) => viste2.has(x.id)))];
        const pile = mescola(gruppi).map(pila);
        ordine = [];
        while (ordine.length < Math.min(DOMANDE_SESSIONE, elenco.length)) for (const pl of pile) if (pl.length && ordine.length < DOMANDE_SESSIONE) ordine.push(pl.shift().id);
        if (ripasso) ordine = mescola(ordine);
        q = elenco.find((x) => x.id === ordine[0]);
      }
      const io = await utenteCollegato(env, req).catch(() => null);
      const token = await firmaToken(env, { q: q.id, m: materia, l, t: Date.now(), e: io?.email || null });
      return json({ token, id: q.id, numero: q.n, testo: q.testo, scelte: q.scelte, ordine: ordine || [q.id], totale: elenco.length, secondi: PUNTI.secondiDomanda, collegato: Boolean(io) },
        200, { 'cache-control': 'no-store' });
    }
    if (p === '/api/domande/rispondi' && POST) {
      const { token, scelta } = await req.json().catch(() => ({}));
      const tok = typeof token === 'string' ? await leggiToken(env, token) : null;
      const dati = tok ? await domandeDi(env, tok.m, linguaDi(tok.l)) : null;
      const [argomento] = String(tok?.q || '').split('/');
      const q = dati?.argomenti?.[argomento]?.find((x) => x.id === tok.q);
      if (!q) return json({ errore: tok?.l === 'en' ? 'Question expired: reload the page.' : 'Domanda scaduta: ricarica la pagina.' }, 400);
      const giusta = Number(scelta) === q.corretta;
      const secondi = Math.round((Date.now() - tok.t) / 1000);
      const base = { giusta, corretta: q.corretta, spiegazione: q.spiegazione, secondi };
      const io = await utenteCollegato(env, req).catch(() => null);
      if (!io || io.email !== tok.e) return json({ ...base, punti: 0, motivo: 'ospite' });
      const r = await aDO(env, '/liv-risposta', {
        email: io.email, token: token.split('.')[1], domanda: `${tok.m}/${q.id}`, materia: tok.m, argomento,
        corretta: giusta, secondi, lingua: linguaDi(tok.l), catalogo: await catalogoDomande(env),
      });
      return json({ ...base, ...r });
    }
    if (p === '/api/simulazione-quiz' && POST) {
      // Simulazione della prova preselettiva (materie dei concorsi): domande di più materie e argomenti,
      // pescate a turno. Il browser riceve testi e risposte; la posizione delle corrette arriva solo alla consegna.
      const { materie, numero, recenti } = await req.json().catch(() => ({}));
      const scelte = (Array.isArray(materie) ? materie : []).filter((s) => MATERIE.some((m) => m.slug === s && m.gruppo === 'Concorsi'));
      const n = Math.max(5, Math.min(100, Math.round(Number(numero) || 30)));
      if (!scelte.length) return json({ errore: 'Scegli almeno una materia.' }, 400);
      const viste = new Set(Array.isArray(recenti) ? recenti.filter((x) => typeof x === 'string').slice(-600) : []);
      const mescola = (a) => { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
      const perMateria = [];
      for (const m of scelte) {
        const dati = await domandeDi(env, m, 'it');
        const gruppi = Object.values(dati?.argomenti || {}).filter((x) => x?.length)
          .map((g) => g.map((q) => ({ ...q, materia: m })))
          .map((g) => [...mescola(g.filter((q) => !viste.has(`${m}/${q.id}`))), ...mescola(g.filter((q) => viste.has(`${m}/${q.id}`)))]);
        if (gruppi.length) perMateria.push(mescola(gruppi));
      }
      const disponibili = perMateria.flat(2).length;
      if (!disponibili) return json({ errore: 'Le domande di queste materie non sono ancora disponibili.' }, 404);
      // Quote per materia proporzionali al numero di argomenti; dentro ogni materia gli argomenti si alternano.
      const argTot = perMateria.reduce((t, g) => t + g.length, 0);
      const quote = perMateria.map((g) => Math.round((n * g.length) / argTot));
      quote[quote.length - 1] = n - quote.slice(0, -1).reduce((t, x) => t + x, 0);
      const elenco = [];
      perMateria.forEach((pile, i) => {
        const presi = [];
        while (presi.length < quote[i] && pile.some((pl) => pl.length)) for (const pl of pile) if (pl.length && presi.length < quote[i]) presi.push(pl.shift());
        elenco.push(...mescola(presi));
      });
      const domande = elenco.map((q) => ({ id: `${q.materia}/${q.id}`, materia: q.materia, argomento: q.id.split('/')[0], testo: q.testo, scelte: q.scelte }));
      const token = await firmaToken(env, { sim: 1, ids: domande.map((d) => d.id), t: Date.now() });
      return json({ token, domande }, 200, { 'cache-control': 'no-store' });
    }
    if (p === '/api/simulazione-quiz/correggi' && POST) {
      const { token, risposte } = await req.json().catch(() => ({}));
      const tok = typeof token === 'string' ? await leggiToken(env, token) : null;
      if (!tok?.sim || !Array.isArray(tok.ids)) return json({ errore: 'Simulazione non valida: ricarica la pagina.' }, 400);
      const esiti = [];
      for (const id of tok.ids) {
        const [m, argomento] = String(id).split('/');
        const dati = await domandeDi(env, m, 'it');
        const q = dati?.argomenti?.[argomento]?.find((x) => `${m}/${x.id}` === id);
        esiti.push(q ? { id, corretta: q.corretta, spiegazione: q.spiegazione } : { id, corretta: 0, spiegazione: '' });
      }
      // Confronto con chi ha svolto una simulazione con le stesse materie: la quota di risposte corrette
      // si calcola qui, dalle risposte date (indici delle scelte originali, null = non data).
      let confronto = null;
      if (Array.isArray(risposte) && risposte.length === esiti.length) {
        const giuste = esiti.filter((e, i) => Number.isInteger(risposte[i]) && risposte[i] === e.corretta - 1).length;
        const materieSim = [...new Set(tok.ids.map((x) => String(x).split('/')[0]))].sort().join('+');
        const firma = token.split('.')[1] || token;
        const io = await utenteCollegato(env, req).catch(() => null);
        const impronta = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`${req.headers.get('cf-connecting-ip') || ''}|${req.headers.get('user-agent') || ''}`));
        const chi = await sha(`c|${io?.email || [...new Uint8Array(impronta).slice(0, 8)].map((x) => x.toString(16).padStart(2, '0')).join('')}`);
        confronto = await aDO(env, '/sfi-percentile', { tipo: 'quiz', chiave: materieSim, id: `q|${firma.slice(0, 40)}`, valore: Math.round((1000 * giuste) / esiti.length) / 10, chi }).catch(() => null);
      }
      return json({ esiti, confronto }, 200, { 'cache-control': 'no-store' });
    }
    if (p === '/api/sessione/riepilogo' && POST) {
      const io = await utenteCollegato(env, req).catch(() => null);
      if (!io) return json({ errore: 'non collegato' }, 401);
      const { chiudi, lingua } = await req.json().catch(() => ({}));
      return json(await aDO(env, '/liv-riepilogo', { email: io.email, chiudi: Boolean(chiudi), lingua: linguaDi(lingua) }));
    }
    if (p === '/api/progressi') { // progressi per argomento di una materia e data dell'esame
      const io = await utenteCollegato(env, req).catch(() => null);
      if (!io) return json({ errore: 'non collegato' }, 401);
      const materia = url.searchParams.get('materia') || '';
      if (!MATERIE.some((m) => m.slug === materia)) return json({ errore: 'materia' }, 400);
      return json(await aDO(env, '/liv-progressi', { email: io.email, materia }), 200, { 'cache-control': 'no-store' });
    }
    if (p === '/api/esame' && POST) { // data dell'esame di una materia (vuota = tolta)
      const io = await utenteCollegato(env, req).catch(() => null);
      if (!io) return json({ errore: 'non collegato' }, 401);
      const { materia, data } = await req.json().catch(() => ({}));
      if (!MATERIE.some((m) => m.slug === materia)) return json({ errore: 'materia' }, 400);
      const valida = typeof data === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(data) && !Number.isNaN(Date.parse(data));
      return json(await aDO(env, '/liv-esame', { email: io.email, materia, data: valida ? data : null }));
    }
    if (p === '/api/ripasso') { // domande da ripassare oggi, per materia (solo conteggi)
      const io = await utenteCollegato(env, req).catch(() => null);
      if (!io) return json({ errore: 'non collegato' }, 401);
      return json(await aDO(env, '/liv-ripasso', { email: io.email }), 200, { 'cache-control': 'no-store' });
    }
    if (p === '/api/percorso') {
      const io = await utenteCollegato(env, req).catch(() => null);
      if (!io) return json({ errore: 'non collegato' }, 401);
      return json(await aDO(env, '/liv-percorso', { email: io.email, lingua: linguaDi(url.searchParams.get('l')), catalogo: await catalogoDomande(env) }));
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

    // ===== promemoria: link «Non ricevere più questi promemoria» (anche one-click dei programmi di posta) =====
    if (p === '/promemoria/disattiva') {
      // Con GET solo la pagina di conferma: i programmi che aprono i link per controllarli non disattivano nulla.
      const tok = await leggiToken(env, url.searchParams.get('t') || '');
      const ok = tok?.scopo === 'promemoria' && typeof tok.r === 'string';
      if (ok && POST) await aDO(env, '/promemoria-no', { email: tok.r });
      return new Response(PAGINA_DISATTIVATO(ok, POST), { status: ok ? 200 : 400, headers: { 'content-type': 'text/html; charset=utf-8', 'x-robots-tag': 'noindex', 'cache-control': 'no-store' } });
    }

    // ===== password dimenticata: link via email (Resend), valido un'ora e una sola volta =====
    if (p === '/api/password-dimenticata' && POST) {
      const { email: e, lingua } = await req.json().catch(() => ({}));
      const l = lingua === 'en' ? 'en' : 'it';
      const email = normalizza(e);
      if (!emailValida(email)) return json({ errore: l === 'en' ? 'Enter a valid email address.' : 'Scrivi un indirizzo email valido.' }, 400);
      if (!env.RESEND_API_KEY) return json({ errore: TESTI_RECUPERO[l].nonAttivo, nonAttivo: true }, 503);
      const conta = await aDO(env, '/recupero-conta', { giorno: new Date().toISOString().slice(0, 10), email, maxSito: Number(env.RECUPERO_MAX_GIORNO) || 90 });
      if (!conta.ok) return json({ errore: TESTI_RECUPERO[l][conta.motivo === 'sito' ? 'limiteSito' : 'limiteIndirizzo'] }, 429);
      const u = await aDO(env, '/utente', { email });
      // Stessa risposta che l'account esista o no: dal modulo non si scopre chi è iscritto.
      if (u?.hash) {
        const token = await firmaToken(env, { scopo: 'recupero', r: email, v: u.versione, t: Date.now() });
        const indirizzo = `${url.origin}${l === 'en' ? '/en' : ''}/reimposta-password#t=${token}`;
        const inviata = await inviaEmailRecupero(env, email, indirizzo, l).catch(() => false);
        if (!inviata) return json({ errore: TESTI_RECUPERO[l].invioFallito }, 502);
      }
      return json({ ok: true });
    }
    if (p === '/api/reimposta-password' && POST) {
      const { token, password, lingua } = await req.json().catch(() => ({}));
      const l = lingua === 'en' ? 'en' : 'it';
      const tok = typeof token === 'string' ? await leggiToken(env, token) : null;
      const scaduto = () => json({ errore: TESTI_RECUPERO[l].linkScaduto, scaduto: true }, 400);
      if (!tok || tok.scopo !== 'recupero' || typeof tok.r !== 'string' || Date.now() - tok.t > DURATA_RECUPERO) return scaduto();
      if (typeof password !== 'string' || password.length < 8 || password.length > 200)
        return json({ errore: l === 'en' ? 'The password must be at least 8 characters long.' : 'La password deve avere almeno 8 caratteri.' }, 400);
      const u = await aDO(env, '/utente', { email: tok.r });
      if (!u || u.versione !== tok.v) return scaduto(); // link già usato, oppure password cambiata nel frattempo
      const sale = nuovoSale();
      const r = await aDO(env, '/utente-password', { email: tok.r, hash: await hashPassword(password, sale), sale, iterazioni: ITERAZIONI_PBKDF2 });
      // Come la password provvisoria della dashboard: si scollegano tutti i dispositivi e si entra da questo.
      await aDO(env, '/dispositivo-rimuovi', { email: tok.r });
      return entraDaDispositivo(env, req, tok.r, r.versione, l);
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

    // Banco di prova di Pi (ciclo di miglioramento): risposte alle domande di prova e contatori anonimi.
    if (p === '/pi/prove/subito' && req.method === 'GET') return provaSubito(url, env, aDO, A_PAGAMENTO, PREZZI);
    if ((p === '/pi/prove' || p.startsWith('/pi/prove/')) && req.method === 'GET') return paginaProve(url, env, aDO);

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
          // invita un amico: sconto usato e premio per chi ha invitato (worker/inviti.mjs)
          ctx.waitUntil(dopoAcquistoMateria(env, aDO, url.origin, { email, transazione: d.id, sconto: d.discount_id }).catch((e) => console.log('inviti: webhook', String(e))));
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
            'fisica-superiori-5': env.PADDLE_PREZZO_FISICA_SUPERIORI_5 || null,
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

      if (p === '/admin/api/dati') {
        // Chi tiene aperta la dashboard con il proprio account collegato risulta attivo anche come studente.
        ctx.waitUntil(utenteCollegato(env, req).catch(() => null));
        return json(await aDO(env, '/dati'));
      }
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
      if (p === '/admin/api/promemoria-prova' && POST) { // email di prova del promemoria, con i dati veri dell'account se esiste
        const email = normalizza((await req.json().catch(() => ({}))).email);
        if (!emailValida(email)) return json({ errore: 'Email non valida.' }, 400);
        return json(await provaPromemoria(env, aDO, firmaToken, await catalogoDomande(env).catch(() => ({})), email));
      }
      if (p === '/admin/api/promemoria-tutti' && POST) {
        return json(await inviaATutti(env, aDO, firmaToken, await catalogoDomande(env).catch(() => ({}))));
      }
      if (p === '/admin/api/promemoria-stato') return json(await statoPromemoria(env, aDO));
      if (p === '/admin/api/segnalazioni') return json(await aDO(env, '/segnalazioni', {}));
      if (p === '/admin/api/segnalazione-letta' && POST) {
        const { id, letta } = await req.json().catch(() => ({}));
        return json(await aDO(env, '/segnalazione-letta', { id, letta }));
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

    // ===== formulari gratuiti: il PDF si scarica con un account, anche gratuito (src/pages/formulari) =====
    // anche in inglese: /pdf/formulari/en/<materia>.pdf, con la pagina /en/formulari/<materia>
    const pdfFormulario = url.pathname.match(/^\/pdf\/formulari\/(en\/)?([a-z0-9-]+)\.pdf$/);
    if (pdfFormulario) {
      const io = await utenteCollegato(env, req).catch(() => null);
      if (!io) return new Response(null, { status: 302, headers: { location: `${pdfFormulario[1] ? '/en' : ''}/formulari/${pdfFormulario[2]}#scarica`, 'cache-control': 'no-store' } });
      const r = await env.ASSETS.fetch(senzaCondizioni(req));
      const out = new Response(r.body, r);
      out.headers.set('cache-control', 'private, no-store');
      out.headers.set('x-robots-tag', 'noindex');
      out.headers.set('content-disposition', `attachment; filename="${pdfFormulario[1] ? 'Formula-sheet' : 'Formulario'}-${pdfFormulario[2]}.pdf"`);
      return out;
    }

    // ===== contenuti: oscuramento e consegna =====
    const info = analizza(url.pathname);
    // I PDF degli argomenti e le pagine di stampa sono stati tolti (03/11/2026, richiesta di Carmine):
    // i vecchi indirizzi portano alla teoria dell'argomento. Restano solo i PDF dei formulari (sopra).
    if (info && (info.tipo === 'pdf' || info.tipo === 'stampa')) {
      return new Response(null, { status: 301, headers: { location: `${info.pref}/${info.materia}/${info.argomento}/teoria`, 'cache-control': 'no-store' } });
    }
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
      // Googlebot e Bingbot verificati leggono la pagina intera, con la parte riservata segnata (worker/motori.mjs).
      const ridotta = info.tipo === 'teoria' || info.tipo === 'esercizi' || (info.tipo === 'esercizi-svolti' && info.n > SCHEDE_LIBERE);
      const motore = !sbloccataQui && ridotta && req.method === 'GET'
        ? await motoreVerificato(req).catch(() => null) : null;
      if (motore) {
        risposta = paginaPerMotore(await env.ASSETS.fetch(senzaCondizioni(req)), info.tipo, info.n);
        risposta = new Response(risposta.body, risposta);
        if (motore === 'bing') risposta.headers.set('x-robots-tag', 'nocache');
      } else if (!sbloccataQui) {
        if (info.tipo === 'pdf' || info.tipo === 'stampa') {
          risposta = await rispostaVetrina(env, req, `${info.pref}/${info.materia}/sblocca`);
        } else if (info.tipo === 'esercizi-svolti' && info.n && info.n > SCHEDE_LIBERE) {
          // scheda bloccata: vetrina con titolo e tracce, svolgimenti tolti (scripts/vetrine.mjs)
          risposta = await rispostaVetrina(env, req, `/vetrine${info.pref}/${info.materia}/${info.argomento}/esercizi-svolti/${info.n}`);
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
    // Indirizzi tecnici di Cloudflare (*.workers.dev, anteprime dei rami): mai negli indici, la pagina vera è su ripetizionidianalisi.com.
    if (url.hostname.endsWith('.workers.dev')) {
      risposta = new Response(risposta.body, risposta);
      risposta.headers.set('x-robots-tag', 'noindex');
    }
    // Copie interne delle anteprime: mai negli indici dei motori di ricerca (la pagina vera è quella canonica).
    if (url.pathname.startsWith('/vetrine/')) {
      risposta = new Response(risposta.body, risposta);
      risposta.headers.set('x-robots-tag', 'noindex');
    }
    // File di testo (llms.txt, robots.txt, sitemap.xml): senza charset i browser e alcuni robot leggono male le lettere accentate.
    const tipoFile = risposta.headers.get('content-type') || '';
    if (/^(text\/plain|application\/xml|text\/xml)/.test(tipoFile) && !/charset/i.test(tipoFile)) {
      risposta = new Response(risposta.body, risposta);
      risposta.headers.set('content-type', `${tipoFile}; charset=utf-8`);
    }
    const html = (risposta.headers.get('content-type') || '').includes('text/html');

    // Pagine: mai copie riusate, né dal browser né da cache intermedie.
    if (html) {
      risposta = new Response(risposta.body, risposta);
      risposta.headers.set('cache-control', 'private, no-store');
      risposta.headers.delete('etag');
      risposta.headers.delete('last-modified');
    }
    // Progressi per argomento: teoria e schede svolte aperte per intero da chi ha l'account.
    if (html && io && info && req.method === 'GET' && risposta.status < 400 && (info.tipo === 'teoria' || (info.tipo === 'esercizi-svolti' && info.n))) {
      const intera = !protetta || sbloccataQui || (info.tipo === 'esercizi-svolti' && info.n <= SCHEDE_LIBERE);
      if (intera) ctx.waitUntil(aDO(env, '/liv-vista', { email: io.email, materia: info.materia, argomento: info.argomento, tipo: info.tipo, n: info.n || 0 }).catch(() => {}));
    }
    // Segni sulla pagina: utente collegato, materie sbloccate (spunte).
    if (html && io) {
      const nome = nomeVisibile(io);
      const en = /^\/en(\/|$)/.test(url.pathname);
      const st = livelloDa(io.exp || 0, en ? 'en' : 'it');
      const riscrivi = new HTMLRewriter();
      // Spazio personale in home (worker/spazio.mjs).
      for (const [sel, v] of Object.entries(spazioHome(st, nome, en))) {
        riscrivi.on(sel, {
          element(e) {
            if (v.stile) e.setAttribute('style', v.stile);
            if (v.mostra) e.removeAttribute('hidden');
            if (v.html !== undefined) e.setInnerContent(v.html, { html: true });
            else if (v.testo !== undefined) e.setInnerContent(v.testo);
          },
        });
      }
      risposta = riscrivi.on('.bottone-account .se-collegato', {
        element(e) { e.setInnerContent(nome.length > 18 ? `${nome.slice(0, 17)}…` : nome); },
      }).on('.bottone-livello .nome-utente', {
        element(e) { e.setInnerContent(nome.length > 18 ? `${nome.slice(0, 17)}…` : nome); },
      }).on('.bottone-livello .exp-livello', {
        element(e) { e.setInnerContent(st.exp.toLocaleString(en ? 'en-US' : 'it-IT')); },
      }).on('.bottone-livello .fascia-nome', {
        element(e) { e.setInnerContent(nomeRango(st.livello, en ? 'en' : 'it')); },
      }).on('.bottone-livello .stemma-testata', {
        element(e) { e.setInnerContent(stemmaSVG(rangoDi(st.livello), { perc: st.perc, id: 't', grado: gradoDi(st.livello) }), { html: true }); },
      }).on('.bottone-livello .barra-testata > span', {
        element(e) { e.setAttribute('style', `width:${st.perc}%`); },
      }).on('.bottone-livello', {
        element(e) {
          e.setAttribute('style', stileRango(rangoDi(st.livello)));
          e.setAttribute('aria-label', en ? `${nome}, level ${st.livello}, ${st.fascia}, ${st.exp} XP: open the level panel` : `${nome}, livello ${st.livello}, ${st.fascia}, ${st.exp} EXP: apri il riquadro del livello`);
          e.setAttribute('data-stato', JSON.stringify({ l: st.livello, f: st.fascia, r: st.frase, x: st.exp, b: st.base, p: st.prossimo, m: st.mancano, c: st.perc }));
        },
      }).on('.bottone-livello .numero-livello', {
        element(e) { e.setInnerContent(String(st.livello)); },
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
      // La pagina Sblocca di ogni materia e la pagina di ogni videocorso si contano a parte (percorso d'acquisto in dashboard).
      const senzaEn = p.replace(/^\/en(?=\/)/, '');
      const sbl = senzaEn.match(/^\/([^/]+)\/sblocca\/?$/), vid = senzaEn.match(/^\/videocorsi\/([^/]+)\/?$/);
      const sezione = info ? (info.argomento ? `${info.materia}/${info.argomento}` : info.materia)
        : sbl ? `${sbl[1]}/sblocca` : vid ? `videocorsi/${vid[1]}`
        : (url.pathname.split('/')[1]?.replace(/\.html$/, '') || 'home');
      const fonte = url.pathname.startsWith('/vetrine/') ? null : fonteIngresso(req, url);
      // Campagna del link (per esempio ?utm_campaign=limiti-notevoli nei caroselli): solo lettere, numeri e trattini.
      const campagnaGrezza = (url.searchParams.get('utm_campaign') || '').toLowerCase();
      const campagna = fonte && /^[a-z0-9-]{1,40}$/.test(campagnaGrezza) ? campagnaGrezza : null;
      // Visitatore unico del giorno: impronta non reversibile di giorno, indirizzo e browser (nessun dato personale salvato).
      const impronta = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`${giorno}|${req.headers.get('cf-connecting-ip') || ''}|${ua}`));
      const h = [...new Uint8Array(impronta).slice(0, 8)].map((b) => b.toString(16).padStart(2, '0')).join('');
      const mobile = /Mobi|Android|iPhone|iPad/i.test(ua);
      ctx.waitUntil(aDO(env, '/visita', { giorno, sezione, fonte, campagna, h, mobile }).catch(() => {}));
      // La prima provenienza resta in un cookie per 90 giorni: serve a sapere da dove arriva chi poi si iscrive.
      if (fonte && !leggiCookie(req, 'fonte')) {
        try { risposta.headers.append('set-cookie', `fonte=${encodeURIComponent(fonte)}; Path=/; Max-Age=7776000; HttpOnly; Secure; SameSite=Lax`); } catch { /* intestazioni bloccate */ }
      }
    }
    return risposta;
  },
};
