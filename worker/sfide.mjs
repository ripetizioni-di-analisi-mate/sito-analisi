// Sfide tra studenti (03/11/2026): leghe settimanali, duelli sulle domande a tempo, percentile nelle simulazioni.
// Regole in src/data/sfide.ts. Due parti:
//  - archivio (Durable Object): tabelle e rotte /sfi-*, chiamate da archivioSfide;
//  - Worker: rotte /api/lega, /api/duelli/*, /api/simulazione/esito (gestisciSfide), che leggono i testi delle
//    domande dai file statici e passano all'archivio solo identificativi e posizioni delle risposte corrette.
// Nomi mostrati agli altri studenti: il nome scelto per le classifiche, altrimenti il nome dell'account (solo la
// prima parola); chi sceglie di non comparire risulta «Studente». Le email non escono mai dall'archivio.
import { LEGHE, LEGHE_EN, LEGA_GRUPPO, quoteLega, DUELLO, PERCENTILE_MINIMO } from '../src/data/sfide.ts';
import { livelloDa, PUNTI } from '../src/data/livelli.ts';
import { MATERIE } from '../src/data/materie.ts';
import { MATERIE_EN } from '../src/data/materie-en.ts';
import { nomeDallEmail } from './nomi.mjs';
import { aggiungi, risposta, settimanaDi, giornoRoma } from './livelli.mjs';
import { creaTabelleAvvisiLega } from './avvisi-lega.mjs';
import { classificaConBot, minutoLega } from './bot-lega.mjs';

const ALFABETO = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
const casuale = (n) => [...crypto.getRandomValues(new Uint8Array(n))].map((b) => ALFABETO[b % ALFABETO.length]).join('');
const titoloMateria = (m, l = 'it') => (l === 'en' && MATERIE_EN[m]?.titolo) || MATERIE.find((x) => x.slug === m)?.titolo || m;
const brevMateria = (m, l = 'it') => (l === 'en' && MATERIE_EN[m]?.breve) || MATERIE.find((x) => x.slug === m)?.breve || titoloMateria(m, l);
const titoloArgomento = (m, a, l = 'it') => (l === 'en' && MATERIE_EN[m]?.argomenti?.[a]?.titolo) || MATERIE.find((x) => x.slug === m)?.argomenti.find((x) => x.slug === a)?.titolo || a;

// Inizio (in millisecondi) di un giorno 'AAAA-MM-GG' nel fuso di Roma: ora solare +01:00, ora legale +02:00.
function inizioGiorno(g) {
  for (const off of ['+01:00', '+02:00']) {
    const t = Date.parse(`${g}T00:00:00${off}`);
    if (giornoRoma(t) === g && giornoRoma(t - 1) !== g) return t;
  }
  return Date.parse(`${g}T00:00:00+01:00`);
}
const spostaGiorno = (g, n) => new Date(Date.parse(`${g}T12:00:00Z`) + n * 86400000).toISOString().slice(0, 10);

// Nome che vedono gli altri studenti.
export function nomePubblico(u) {
  if (!u || u.pubblico === 0) return 'Studente';
  const s = String(u.soprannome || '').trim();
  if (s) return s;
  const n = String(u.nome || '').trim().split(/\s+/)[0] || '';
  return n ? n[0].toUpperCase() + n.slice(1) : (nomeDallEmail(u.email) || 'Studente');
}

// ---------- tabelle ----------
export function creaTabelleSfide(sql) {
  creaTabelleAvvisiLega(sql);
  sql.exec(`
    CREATE TABLE IF NOT EXISTS leghe (email TEXT, settimana TEXT, lega INTEGER, gruppo INTEGER, entrato INTEGER, PRIMARY KEY (email, settimana));
    CREATE INDEX IF NOT EXISTS leghe_gruppo ON leghe (settimana, lega, gruppo);
    CREATE TABLE IF NOT EXISTS leghe_esiti (email TEXT, settimana TEXT, posizione INTEGER, membri INTEGER, da INTEGER, a INTEGER, PRIMARY KEY (email, settimana));
    CREATE TABLE IF NOT EXISTS duelli (codice TEXT PRIMARY KEY, creato INTEGER, scade INTEGER, materia TEXT, argomento TEXT, domande TEXT,
      a TEXT, b TEXT, modo TEXT, stato TEXT, vincitore TEXT);
    CREATE INDEX IF NOT EXISTS duelli_a ON duelli (a, creato);
    CREATE INDEX IF NOT EXISTS duelli_b ON duelli (b, creato);
    CREATE TABLE IF NOT EXISTS duelli_turni (codice TEXT, email TEXT, n INTEGER, servita INTEGER, scelta INTEGER, giusta INTEGER, ms INTEGER, PRIMARY KEY (codice, email, n));
    CREATE TABLE IF NOT EXISTS presenza (email TEXT PRIMARY KEY, ultimo INTEGER, materia TEXT, cerca INTEGER DEFAULT 0, argomento TEXT);
    CREATE TABLE IF NOT EXISTS simulazioni_esiti (id TEXT PRIMARY KEY, tipo TEXT, chiave TEXT, valore REAL, chi TEXT, giorno TEXT, quando INTEGER);
    CREATE INDEX IF NOT EXISTS simulazioni_esiti_chiave ON simulazioni_esiti (tipo, chiave, valore);
    CREATE INDEX IF NOT EXISTS studio_giorno ON studio (giorno, ultimo);
  `);
  for (const col of ['lega INTEGER DEFAULT 0', 'soprannome TEXT', 'pubblico INTEGER DEFAULT 1', 'pid TEXT']) {
    try { sql.exec(`ALTER TABLE utenti ADD COLUMN ${col}`); } catch { /* già presente */ }
  }
}

// ================= leghe settimanali =================
function classifiche(ar, settimana, lega, gruppo) {
  const da = inizioGiorno(settimana), a = inizioGiorno(spostaGiorno(settimana, 7));
  const filtro = lega === undefined ? [] : [lega, gruppo];
  return ar.righe(`SELECT l.lega, l.gruppo, l.email, l.entrato, u.nome, u.soprannome, u.pubblico, COALESCE(u.exp, 0) AS tot,
      COALESCE((SELECT SUM(e.punti) FROM exp e WHERE e.email = l.email AND e.quando >= ? AND e.quando < ?), 0) AS settimanali
    FROM leghe l JOIN utenti u ON u.email = l.email
    WHERE l.settimana = ? ${filtro.length ? 'AND l.lega = ? AND l.gruppo = ?' : ''}
    ORDER BY l.lega, l.gruppo, settimanali DESC, l.entrato, l.email`, da, a, settimana, ...filtro);
}

const zonaLega = (i, exp, n, { sale, scende }) => i < sale && exp > 0 ? 'sale' : i >= n - scende ? 'scende' : '';

export function datiLegheAdmin(ar, settimanaRichiesta) {
  const adesso = Date.now();
  const oggi = giornoRoma(adesso);
  const corrente = settimanaDi(oggi)[0];
  const settimana = settimanaRichiesta || corrente;
  let copia = ar.copiaLegheAdmin;
  if (!copia || copia.corrente !== corrente || adesso - copia.aggiornato >= 180000) {
    const precedenti = ar.righe('SELECT DISTINCT settimana FROM leghe WHERE settimana < ? ORDER BY settimana DESC LIMIT 11', corrente);
    const settimane = [corrente, ...precedenti.map((r) => r.settimana)].map((inizio) => ({ inizio, fine: spostaGiorno(inizio, 6) }));
    copia = ar.copiaLegheAdmin = { corrente, settimane, aggiornato: adesso, dati: new Map() };
  }
  if (!copia.settimane.some((s) => s.inizio === settimana)) return { errore: 'Settimana non disponibile' };
  if (copia.dati.has(settimana)) return copia.dati.get(settimana);

  const gruppi = new Map();
  for (const m of classifiche(ar, settimana)) {
    const id = `${m.lega}-${m.gruppo}`;
    if (!gruppi.has(id)) gruppi.set(id, { id, lega: m.lega, numero: m.gruppo, membri: [] });
    gruppi.get(id).membri.push({ nome: m.nome || nomeDallEmail(m.email) || 'Studente', exp: m.settimanali });
  }
  const minuto = minutoLega(adesso);
  for (const g of gruppi.values()) {
    const studenti = g.membri;
    g.studenti = studenti.length;
    const quote = quoteLega(g.studenti, g.lega);
    studenti.forEach((m, i) => { m.zona = zonaLega(i, m.exp, g.studenti, quote); });
    if (settimana === corrente) {
      g.membri = classificaConBot(studenti, { settimana, lega: g.lega, gruppo: g.numero, oggi, minuto });
    }
  }
  const dati = { corrente, settimana, settimane: copia.settimane, aggiornato: adesso, leghe: LEGHE, gruppi: [...gruppi.values()] };
  copia.dati.set(settimana, dati);
  return dati;
}

export function fotografiaLega(ar, email) {
  const settimana = settimanaDi()[0];
  const io = ar.riga('SELECT lega, gruppo FROM leghe WHERE email = ? AND settimana = ?', email, settimana);
  return io ? { settimana, ...io, membri: classifiche(ar, settimana, io.lega, io.gruppo) } : null;
}

// Prima attività della settimana: si chiude la settimana precedente dello studente (sale, resta o scende)
// e lo studente entra nel primo gruppo della sua lega con un posto libero.
export function entraInLega(ar, email) {
  const sett = settimanaDi()[0];
  if (ar.riga('SELECT 1 AS x FROM leghe WHERE email = ? AND settimana = ?', email, sett)) return;
  let lega = ar.riga('SELECT COALESCE(lega, 0) AS l FROM utenti WHERE email = ?', email)?.l ?? 0;
  const ultima = ar.riga('SELECT * FROM leghe WHERE email = ? AND settimana < ? ORDER BY settimana DESC LIMIT 1', email, sett);
  if (ultima && !ar.riga('SELECT 1 AS x FROM leghe_esiti WHERE email = ? AND settimana = ?', email, ultima.settimana)) {
    const cl = classifiche(ar, ultima.settimana, ultima.lega, ultima.gruppo);
    const pos = cl.findIndex((x) => x.email === email) + 1;
    const zona = pos > 0 ? zonaLega(pos - 1, cl[pos - 1].settimanali, cl.length, quoteLega(cl.length, ultima.lega)) : '';
    const passo = zona === 'sale' ? 1 : zona === 'scende' ? -1 : 0;
    lega = Math.max(0, Math.min(LEGHE.length - 1, ultima.lega + passo));
    ar.sql.exec('INSERT OR IGNORE INTO leghe_esiti (email, settimana, posizione, membri, da, a) VALUES (?, ?, ?, ?, ?, ?)', email, ultima.settimana, pos, cl.length, ultima.lega, lega);
    ar.sql.exec('UPDATE utenti SET lega = ? WHERE email = ?', lega, email);
  }
  const libero = ar.riga(`SELECT gruppo, COUNT(*) AS n FROM leghe WHERE settimana = ? AND lega = ? GROUP BY gruppo HAVING n < ? ORDER BY gruppo LIMIT 1`, sett, lega, LEGA_GRUPPO);
  const gruppo = libero ? libero.gruppo : ar.riga('SELECT COALESCE(MAX(gruppo), 0) + 1 AS g FROM leghe WHERE settimana = ? AND lega = ?', sett, lega).g;
  ar.sql.exec('INSERT OR IGNORE INTO leghe (email, settimana, lega, gruppo, entrato) VALUES (?, ?, ?, ?, ?)', email, sett, lega, gruppo, Date.now());
}

// La classifica di gioco include i concorrenti simulati. Esiti e sorpassi usano le sole righe di archivio.
function gruppoDiGioco(ar, email, settimana, io, oggi, ora) {
  const cl = classifiche(ar, settimana, io.lega, io.gruppo);
  const quote = quoteLega(cl.length, io.lega);
  const studenti = cl.map((m, i) => ({
    nome: nomePubblico(m), io: m.email === email, exp: m.settimanali, livello: livelloDa(m.tot).livello,
    posizioneStudente: i + 1, zona: zonaLega(i, m.settimanali, cl.length, quote),
  }));
  const gruppo = classificaConBot(studenti, { settimana, lega: io.lega, gruppo: io.gruppo, oggi, minuto: minutoLega(ora) });
  return { gruppo, conSimulati: gruppo.length > studenti.length, quote };
}

function statoLega(ar, c) {
  const { email } = c;
  const l = c.lingua === 'en' ? 'en' : 'it';
  const nomi = l === 'en' ? LEGHE_EN : LEGHE;
  const ora = Date.now(), oggi = giornoRoma(ora);
  const sett = settimanaDi(oggi)[0];
  const fine = inizioGiorno(spostaGiorno(sett, 7));
  const u = ar.riga('SELECT email, nome, soprannome, COALESCE(pubblico, 1) AS pubblico, COALESCE(lega, 0) AS lega, COALESCE(avvisi_lega, promemoria, 1) AS avvisi_lega FROM utenti WHERE email = ?', email);
  if (!u) return { errore: 'utente' };
  const io = ar.riga('SELECT * FROM leghe WHERE email = ? AND settimana = ?', email, sett);
  const esitoRiga = ar.riga('SELECT * FROM leghe_esiti WHERE email = ? AND settimana = ?', email, spostaGiorno(sett, -7));
  const esito = esitoRiga ? { posizione: esitoRiga.posizione, membri: esitoRiga.membri, da: esitoRiga.da, a: esitoRiga.a, nomeDa: nomi[esitoRiga.da], nomeA: nomi[esitoRiga.a] } : null;
  const base = {
    leghe: nomi, fine, settimana: sett, nome: nomePubblico(u), soprannome: u.soprannome || '', pubblico: u.pubblico !== 0, avvisiLega: u.avvisi_lega !== 0, esito,
  };
  if (!io) return { ...base, lega: u.lega, nomeLega: nomi[u.lega], attesa: true };
  const { gruppo, conSimulati, quote } = gruppoDiGioco(ar, email, sett, io, oggi, ora);
  return {
    ...base, lega: io.lega, nomeLega: nomi[io.lega], ...quote, conSimulati,
    gruppo: gruppo.map((m) => ({
      pos: m.pos, nome: m.nome, exp: m.exp, livello: m.livello, io: Boolean(m.io),
      zona: !conSimulati || m.io ? m.zona : '',
      ...(m.io ? { posizioneStudente: m.posizioneStudente } : {}),
    })),
  };
}

// Il pannello del livello mostra la stessa posizione della classifica di gioco.
export function riassuntoLega(ar, email, l = 'it') {
  const nomi = l === 'en' ? LEGHE_EN : LEGHE;
  const ora = Date.now(), oggi = giornoRoma(ora);
  const sett = settimanaDi(oggi)[0];
  const io = ar.riga('SELECT lega, gruppo FROM leghe WHERE email = ? AND settimana = ?', email, sett);
  if (!io) {
    const lega = ar.riga('SELECT COALESCE(lega, 0) AS l FROM utenti WHERE email = ?', email)?.l ?? 0;
    return { lega, nome: nomi[lega], posizione: null, membri: 0 };
  }
  const { gruppo } = gruppoDiGioco(ar, email, sett, io, oggi, ora);
  return { lega: io.lega, nome: nomi[io.lega], posizione: gruppo.find((m) => m.io)?.pos ?? null, membri: gruppo.length };
}

// ================= duelli =================
const pidDi = (ar, email) => {
  const r = ar.riga('SELECT pid FROM utenti WHERE email = ?', email);
  if (r?.pid) return r.pid;
  const pid = casuale(12);
  ar.sql.exec('UPDATE utenti SET pid = ? WHERE email = ?', pid, email);
  return pid;
};
const utente = (ar, email) => ar.riga('SELECT email, nome, soprannome, COALESCE(pubblico, 1) AS pubblico, COALESCE(exp, 0) AS exp FROM utenti WHERE email = ?', email);
const domandeDuello = (d) => JSON.parse(d.domande || '[]');

// Chiude ciò che è scaduto e assegna il risultato dei duelli finiti.
function aggiornaDuello(ar, d, catalogo) {
  const ora = Date.now();
  if (!d) return d;
  if ((d.stato === 'aperto' || d.stato === 'invito') && ora > d.scade) {
    ar.sql.exec("UPDATE duelli SET stato = 'scaduto' WHERE codice = ?", d.codice);
    return { ...d, stato: 'scaduto' };
  }
  const limite = (DUELLO.secondi + 5) * 1000;
  if (d.stato === 'aperto') {
    ar.sql.exec('UPDATE duelli_turni SET scelta = -1, giusta = 0, ms = ? WHERE codice = ? AND scelta IS NULL AND servita < ?', DUELLO.secondi * 1000, d.codice, ora - limite);
    return d;
  }
  if (d.stato !== 'gioco') return d;
  // Domande lasciate oltre il tempo (pagina chiusa, connessione persa): contano come sbagliate.
  ar.sql.exec('UPDATE duelli_turni SET scelta = -1, giusta = 0, ms = ? WHERE codice = ? AND scelta IS NULL AND servita < ?', DUELLO.secondi * 1000, d.codice, ora - limite);
  const k = domandeDuello(d).length;
  const fatte = (e) => ar.riga('SELECT COUNT(*) AS c FROM duelli_turni WHERE codice = ? AND email = ? AND scelta IS NOT NULL', d.codice, e).c;
  if (!(fatte(d.a) >= k && fatte(d.b) >= k) && ora <= d.scade) return d;
  const pa = punteggio(ar, d.codice, d.a, k), pb = punteggio(ar, d.codice, d.b, k);
  const vincitore = pa.giuste !== pb.giuste ? (pa.giuste > pb.giuste ? d.a : d.b) : pa.ms !== pb.ms ? (pa.ms < pb.ms ? d.a : d.b) : 'pari';
  ar.sql.exec("UPDATE duelli SET stato = 'finito', vincitore = ? WHERE codice = ? AND stato = 'gioco'", vincitore, d.codice);
  const premio = (e, p) => {
    const oggi = inizioGiorno(giornoRoma());
    const presi = ar.riga("SELECT COUNT(*) AS c FROM exp WHERE email = ? AND tipo = 'duello' AND quando >= ?", e, oggi).c;
    if (presi < DUELLO.premiAlGiorno) aggiungi(ar, e, p, 'duello', d.codice);
  };
  if (vincitore === 'pari') { premio(d.a, DUELLO.pareggio); premio(d.b, DUELLO.pareggio); } else premio(vincitore, DUELLO.vittoria);
  return { ...d, stato: 'finito', vincitore };
}
function punteggio(ar, codice, email, k) {
  const r = ar.riga('SELECT COUNT(*) AS date, COALESCE(SUM(giusta), 0) AS giuste, COALESCE(SUM(ms), 0) AS ms FROM duelli_turni WHERE codice = ? AND email = ? AND scelta IS NOT NULL', codice, email);
  // le domande mai aperte valgono come date fuori tempo
  return { date: r.date, giuste: r.giuste, ms: r.ms + Math.max(0, k - r.date) * DUELLO.secondi * 1000 };
}

function creaDuello(ar, c) {
  const ora = Date.now();
  const oggi = inizioGiorno(giornoRoma());
  if (ar.riga('SELECT COUNT(*) AS c FROM duelli WHERE a = ? AND creato >= ?', c.email, oggi).c >= 30) return { errore: 'Oggi hai già lanciato molti duelli: riprova domani.' };
  let b = null, stato = 'aperto', scade = ora + DUELLO.oreLink * 3600000;
  if (c.modo === 'invito') {
    const t = ar.riga('SELECT email FROM utenti WHERE pid = ?', String(c.pid || ''));
    if (!t || t.email === c.email) return { errore: 'Studente non trovato.' };
    if (!onlineOra(ar).some((x) => x.email === t.email)) return { errore: 'Questo studente non è più online.' };
    if (ar.riga("SELECT 1 AS x FROM duelli WHERE a = ? AND b = ? AND stato = 'invito' AND scade > ?", c.email, t.email, ora)) return { errore: 'Hai già invitato questo studente: aspetta la risposta.' };
    b = t.email; stato = 'invito'; scade = ora + DUELLO.minutiInvito * 60000;
  }
  const codice = casuale(6);
  ar.sql.exec('INSERT INTO duelli (codice, creato, scade, materia, argomento, domande, a, b, modo, stato) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    codice, ora, scade, c.materia, c.argomento || null, JSON.stringify(c.domande), c.email, b, c.modo === 'invito' ? 'invito' : 'link', stato);
  return { codice };
}

// Studenti online: nella pagina dei duelli da pochi secondi, oppure con studio attivo negli ultimi minuti.
function onlineOra(ar) {
  const ora = Date.now();
  const inPagina = ar.righe('SELECT email, materia FROM presenza WHERE ultimo > ?', ora - DUELLO.secondiOnline * 1000).map((r) => ({ ...r, dove: 'duelli' }));
  const visti = new Set(inPagina.map((r) => r.email));
  const studiano = ar.righe(`SELECT s.email, (SELECT materia FROM sessioni WHERE email = s.email ORDER BY ultimo DESC LIMIT 1) AS materia
    FROM studio s WHERE s.giorno = ? AND s.ultimo > ?`, giornoRoma(ora), ora - DUELLO.minutiStudio * 60000)
    .filter((r) => !visti.has(r.email)).map((r) => ({ ...r, dove: 'studio' }));
  return [...inPagina, ...studiano];
}

function invitiPer(ar, email, l = 'it') {
  const ora = Date.now();
  return ar.righe("SELECT codice, a, materia, argomento FROM duelli WHERE b = ? AND stato = 'invito' AND scade > ? ORDER BY creato DESC LIMIT 3", email, ora)
    .map((d) => ({ codice: d.codice, da: nomePubblico(utente(ar, d.a)), materia: brevMateria(d.materia, l), argomento: d.argomento ? titoloArgomento(d.materia, d.argomento, l) : null }));
}

function lobby(ar, c) {
  const ora = Date.now();
  const { email } = c;
  const l = c.lingua === 'en' ? 'en' : 'it';
  const materia = typeof c.materia === 'string' ? c.materia : null;
  ar.sql.exec(`INSERT INTO presenza (email, ultimo, materia, cerca, argomento) VALUES (?, ?, ?, ?, ?)
    ON CONFLICT(email) DO UPDATE SET ultimo = excluded.ultimo, materia = excluded.materia, cerca = excluded.cerca, argomento = excluded.argomento`,
  email, ora, materia, c.cerca ? 1 : 0, c.argomento || null);
  let abbinato = null;
  // Ricerca di un avversario: il primo studente in coda sulla stessa materia (e sullo stesso argomento, se scelto).
  if (c.cerca && materia && Array.isArray(c.domande) && c.domande.length) {
    const altro = ar.riga(`SELECT email FROM presenza WHERE cerca = 1 AND email != ? AND materia = ? AND COALESCE(argomento, '') = ? AND ultimo > ? ORDER BY ultimo LIMIT 1`,
      email, materia, c.argomento || '', ora - DUELLO.secondiRicerca * 1000);
    if (altro) {
      const codice = casuale(6);
      ar.sql.exec('INSERT INTO duelli (codice, creato, scade, materia, argomento, domande, a, b, modo, stato) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        codice, ora, ora + DUELLO.minutiPartita * 60000, materia, c.argomento || null, JSON.stringify(c.domande), altro.email, email, 'online', 'gioco');
      ar.sql.exec('UPDATE presenza SET cerca = 0 WHERE email IN (?, ?)', email, altro.email);
      abbinato = codice;
    }
  }
  if (!abbinato) {
    const d = ar.riga(`SELECT codice FROM duelli WHERE modo = 'online' AND stato = 'gioco' AND (a = ? OR b = ?) AND creato > ?
      AND NOT EXISTS (SELECT 1 FROM duelli_turni t WHERE t.codice = duelli.codice AND t.email = ?) ORDER BY creato DESC LIMIT 1`, email, email, ora - 90000, email);
    if (d) { abbinato = d.codice; ar.sql.exec('UPDATE presenza SET cerca = 0 WHERE email = ?', email); }
  }
  const online = onlineOra(ar).filter((r) => r.email !== email).map((r) => ({ ...r, u: utente(ar, r.email) }))
    .filter((r) => r.u && r.u.pubblico !== 0).slice(0, 40)
    .map((r) => ({ pid: pidDi(ar, r.email), nome: nomePubblico(r.u), livello: livelloDa(r.u.exp).livello, dove: r.dove, materia: r.materia ? brevMateria(r.materia, l) : null }));
  const inCoda = materia ? ar.riga('SELECT COUNT(*) AS c FROM presenza WHERE cerca = 1 AND email != ? AND materia = ? AND ultimo > ?', email, materia, ora - DUELLO.secondiRicerca * 1000).c : 0;
  return { online, inviti: invitiPer(ar, email, l), abbinato, inCoda, miei: mieiDuelli(ar, email, l) };
}

function mieiDuelli(ar, email, l) {
  return ar.righe('SELECT * FROM duelli WHERE (a = ? OR b = ?) ORDER BY creato DESC LIMIT 8', email, email)
    .map((d) => aggiornaDuello(ar, d))
    .filter((d) => d.stato !== 'rifiutato')
    .map((d) => {
      const altro = d.a === email ? d.b : d.a;
      const k = domandeDuello(d).length;
      const mio = punteggio(ar, d.codice, email, k), suo = altro ? punteggio(ar, d.codice, altro, k) : null;
      return {
        codice: d.codice, creato: d.creato, materia: brevMateria(d.materia, l), stato: d.stato,
        avversario: altro ? nomePubblico(utente(ar, altro)) : null, mie: mio.giuste, sue: d.stato === 'finito' ? suo?.giuste ?? null : null,
        esito: d.stato === 'finito' ? (d.vincitore === 'pari' ? 'pari' : d.vincitore === email ? 'vinto' : 'perso') : null,
        daGiocare: (d.stato === 'gioco' || (d.stato === 'aperto' && d.a === email)) && mio.date < k, sfidante: d.a === email,
      };
    });
}

// Stato di un duello per uno dei due studenti; con unisci = true chi apre il link diventa lo sfidato.
function partita(ar, c) {
  const { email } = c;
  const l = c.lingua === 'en' ? 'en' : 'it';
  let d = ar.riga('SELECT * FROM duelli WHERE codice = ?', String(c.codice || '').toUpperCase());
  if (!d) return { errore: 'Duello non trovato: controlla il link.' };
  d = aggiornaDuello(ar, d);
  if (d.stato === 'aperto' && c.unisci && d.a !== email) {
    ar.sql.exec("UPDATE duelli SET b = ?, stato = 'gioco', scade = ? WHERE codice = ? AND stato = 'aperto'", email, Math.min(d.scade, Date.now() + DUELLO.oreLink * 3600000), d.codice);
    d = ar.riga('SELECT * FROM duelli WHERE codice = ?', d.codice);
  }
  if (d.stato === 'invito' && d.b === email && c.accetta !== undefined) {
    if (c.accetta) ar.sql.exec("UPDATE duelli SET stato = 'gioco', scade = ? WHERE codice = ?", Date.now() + DUELLO.minutiPartita * 60000, d.codice);
    else ar.sql.exec("UPDATE duelli SET stato = 'rifiutato' WHERE codice = ?", d.codice);
    d = ar.riga('SELECT * FROM duelli WHERE codice = ?', d.codice);
  }
  const partecipa = d.a === email || d.b === email;
  const domande = domandeDuello(d);
  const k = domande.length;
  const altro = d.a === email ? d.b : d.a;
  const base = {
    codice: d.codice, stato: d.stato, modo: d.modo, materia: d.materia, titoloMateria: titoloMateria(d.materia, l),
    argomento: d.argomento ? titoloArgomento(d.materia, d.argomento, l) : null, totale: k, scade: d.scade, secondi: DUELLO.secondi,
    sfidante: nomePubblico(utente(ar, d.a)), livelloSfidante: livelloDa(utente(ar, d.a)?.exp || 0).livello, partecipa, sonoSfidante: d.a === email,
  };
  if (!partecipa) return base;
  const mio = punteggio(ar, d.codice, email, k);
  const suo = altro ? punteggio(ar, d.codice, altro, k) : null;
  const u2 = altro ? utente(ar, altro) : null;
  const out = {
    ...base,
    avversario: u2 ? { nome: nomePubblico(u2), livello: livelloDa(u2.exp).livello, date: suo.date, giuste: d.stato === 'finito' || mio.date >= k ? suo.giuste : null, ms: d.stato === 'finito' ? suo.ms : null } : null,
    io: { nome: nomePubblico(utente(ar, email)), date: mio.date, giuste: mio.giuste, ms: mio.ms },
    esito: d.stato === 'finito' ? (d.vincitore === 'pari' ? 'pari' : d.vincitore === email ? 'vinto' : 'perso') : null,
  };
  if (d.stato === 'finito' || mio.date >= k) {
    out.riepilogo = ar.righe('SELECT n, scelta, giusta, ms FROM duelli_turni WHERE codice = ? AND email = ? ORDER BY n', d.codice, email)
      .map((t) => ({ n: t.n, id: domande[t.n]?.id, scelta: t.scelta, giusta: Boolean(t.giusta), corretta: domande[t.n]?.c, ms: t.ms }));
  }
  const puoGiocare = d.stato === 'gioco' || (d.stato === 'aperto' && d.a === email);
  if (!puoGiocare || mio.date >= k) return out;
  // Domanda in corso: la prima senza risposta; il tempo parte la prima volta che viene servita.
  const n = mio.date;
  let t = ar.riga('SELECT servita FROM duelli_turni WHERE codice = ? AND email = ? AND n = ?', d.codice, email, n);
  if (!t && c.servi) {
    ar.sql.exec('INSERT OR IGNORE INTO duelli_turni (codice, email, n, servita) VALUES (?, ?, ?, ?)', d.codice, email, n, Date.now());
    t = { servita: Date.now() };
  }
  out.turno = { n, id: domande[n].id, servita: t?.servita || null, ora: Date.now() };
  return out;
}

function rispondiDuello(ar, c) {
  const { email } = c;
  let d = ar.riga('SELECT * FROM duelli WHERE codice = ?', String(c.codice || '').toUpperCase());
  if (!d || (d.a !== email && d.b !== email)) return { errore: 'Duello non trovato.' };
  d = aggiornaDuello(ar, d);
  if (!(d.stato === 'gioco' || (d.stato === 'aperto' && d.a === email))) return { errore: 'Il duello è chiuso.', stato: d.stato };
  const domande = domandeDuello(d);
  const t = ar.riga('SELECT * FROM duelli_turni WHERE codice = ? AND email = ? AND n = ?', d.codice, email, c.n);
  if (!t || t.scelta !== null) return { errore: 'Domanda già chiusa.' };
  const ms = Date.now() - t.servita;
  const q = domande[c.n];
  const inTempo = ms <= (DUELLO.secondi + 3) * 1000;
  const scelta = Number.isInteger(c.scelta) ? c.scelta : -1;
  const giusta = inTempo && scelta === q.c;
  ar.sql.exec('UPDATE duelli_turni SET scelta = ?, giusta = ?, ms = ? WHERE codice = ? AND email = ? AND n = ?', scelta, giusta ? 1 : 0, Math.min(ms, DUELLO.secondi * 1000), d.codice, email, c.n);
  // Le domande del duello sono domande a tempo: valgono EXP, ripasso e obiettivi come nelle sessioni normali.
  let r = { punti: 0, nuovi: [] };
  if (scelta >= 0) {
    r = risposta(ar, {
      email, token: `duello-${d.codice}-${c.n}-${email}`, domanda: `${d.materia}/${q.id}`, materia: d.materia, argomento: q.id.split('/')[0],
      corretta: giusta, secondi: Math.round(ms / 1000), lingua: c.lingua, catalogo: c.catalogo,
    });
  }
  const dopo = aggiornaDuello(ar, ar.riga('SELECT * FROM duelli WHERE codice = ?', d.codice));
  return { giusta, corretta: q.c, ms, punti: r.punti, nuovi: r.nuovi, stato: r.stato, statoDuello: dopo.stato };
}

// ================= percentile delle simulazioni =================
function percentile(ar, c) {
  const ora = Date.now();
  const giorno = giornoRoma(ora);
  const fatti = ar.riga('SELECT COUNT(*) AS c FROM simulazioni_esiti WHERE chi = ? AND giorno = ?', c.chi, giorno).c;
  if (fatti < 40 || ar.riga('SELECT 1 AS x FROM simulazioni_esiti WHERE id = ?', c.id)) {
    ar.sql.exec(`INSERT INTO simulazioni_esiti (id, tipo, chiave, valore, chi, giorno, quando) VALUES (?, ?, ?, ?, ?, ?, ?)
      ON CONFLICT(id) DO UPDATE SET valore = CASE WHEN ? THEN excluded.valore ELSE valore END`, c.id, c.tipo, c.chiave, c.valore, c.chi, giorno, ora, c.aggiorna ? 1 : 0);
  }
  const v = ar.riga('SELECT valore FROM simulazioni_esiti WHERE id = ?', c.id)?.valore ?? c.valore;
  const altri = ar.riga('SELECT COUNT(*) AS n, SUM(CASE WHEN valore < ? THEN 1 ELSE 0 END) AS sotto FROM simulazioni_esiti WHERE tipo = ? AND chiave = ? AND id != ?', v, c.tipo, c.chiave, c.id);
  if (altri.n < PERCENTILE_MINIMO) return { confronto: altri.n };
  return { confronto: altri.n, percentile: Math.round((100 * altri.sotto) / altri.n) };
}

// ---------- rotte dell'archivio ----------
export function archivioSfide(ar, pathname, c) {
  switch (pathname) {
    case '/sfi-lega': return statoLega(ar, c);
    case '/sfi-nome': {
      const s = String(c.soprannome || '').replace(/[<>"\u0000-\u001f]/g, '').replace(/\s+/g, ' ').trim().slice(0, 24);
      ar.sql.exec('UPDATE utenti SET soprannome = ?, pubblico = ? WHERE email = ?', s || null, c.pubblico ? 1 : 0, c.email);
      return { ok: true };
    }
    case '/sfi-avvisi': {
      ar.sql.exec('UPDATE utenti SET avvisi_lega = ? WHERE email = ?', c.attivi === true ? 1 : 0, c.email);
      if (c.attivi !== true) ar.sql.exec("DELETE FROM leghe_avvisi WHERE email = ? AND stato IN ('attesa', 'invio')", c.email);
      return { ok: true };
    }
    case '/sfi-lobby': return lobby(ar, c);
    case '/sfi-esci': ar.sql.exec('UPDATE presenza SET cerca = 0, ultimo = 0 WHERE email = ?', c.email); return { ok: true };
    case '/sfi-crea': return creaDuello(ar, c);
    case '/sfi-partita': return partita(ar, c);
    case '/sfi-rispondi': return rispondiDuello(ar, c);
    case '/sfi-inviti': return { inviti: invitiPer(ar, c.email, c.lingua) };
    case '/sfi-percentile': return percentile(ar, c);
    default: return null;
  }
}

// ================= Worker =================
const mescola = (a) => { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };
async function impronta(req, io) {
  if (io?.email) return io.email;
  const h = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`${req.headers.get('cf-connecting-ip') || ''}|${req.headers.get('user-agent') || ''}`));
  return [...new Uint8Array(h).slice(0, 8)].map((x) => x.toString(16).padStart(2, '0')).join('');
}
export async function sha(x) {
  const h = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(x));
  return [...new Uint8Array(h).slice(0, 12)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

// Domande di un duello: DUELLO.domande a caso dall'argomento scelto, oppure a turno da tutti gli argomenti della materia.
async function scegliDomande(h, env, materia, argomento) {
  const dati = await h.domandeDi(env, materia, 'it');
  const gruppi = argomento ? [dati?.argomenti?.[argomento]].filter((x) => x?.length) : Object.values(dati?.argomenti || {}).filter((x) => x?.length);
  if (!gruppi.length) return null;
  const pile = mescola(gruppi).map(mescola);
  const presi = [];
  const tot = pile.reduce((t, p) => t + p.length, 0);
  while (presi.length < Math.min(DUELLO.domande, tot)) for (const p of pile) if (p.length && presi.length < DUELLO.domande) presi.push(p.shift());
  return mescola(presi).map((q) => ({ id: q.id, c: q.corretta - 1 }));
}
const materiaValida = (cat, m) => typeof m === 'string' && Array.isArray(cat[m]) && cat[m].length > 0;

export async function gestisciSfide(req, env, ctx, p, h) {
  const POST = req.method === 'POST';
  const { json, aDO, utenteCollegato, catalogoDomande, domandeDi, linguaDi } = h;
  const corpo = POST ? await req.clone().json().catch(() => ({})) : {};
  const l = linguaDi(corpo.lingua || new URL(req.url).searchParams.get('l'));

  // ----- percentile delle simulazioni (anche senza account) -----
  if (p === '/api/simulazione/esito' && POST) {
    const io = await utenteCollegato(env, req).catch(() => null);
    const chi = await sha(`c|${await impronta(req, io)}`); // solo un'impronta: nessun dato personale nell'archivio
    const { materia, inizio, voto, n } = corpo;
    if (!MATERIE.some((m) => m.slug === materia) || !Number.isFinite(voto) || voto < 0 || voto > 30 || !Number.isFinite(inizio) || !(n >= 3 && n <= 6)) return json({ errore: 'dati' }, 400);
    const id = await sha(`t|${chi}|${materia}|${inizio}`);
    return json(await aDO(env, '/sfi-percentile', { tipo: 'trentesimi', chiave: materia, id, valore: Math.round(voto * 2) / 2, chi, aggiorna: true }), 200, { 'cache-control': 'no-store' });
  }

  // ----- da qui serve l'account -----
  const io = await utenteCollegato(env, req).catch(() => null);
  if (!io) return json({ errore: l === 'en' ? 'Log in to take part.' : 'Accedi per partecipare.', ospite: true }, 401);

  if (p === '/api/lega') return json(await aDO(env, '/sfi-lega', { email: io.email, lingua: l }), 200, { 'cache-control': 'no-store' });
  if (p === '/api/lega/nome' && POST) return json(await aDO(env, '/sfi-nome', { email: io.email, soprannome: corpo.soprannome, pubblico: corpo.pubblico !== false }));
  if (p === '/api/lega/avvisi' && POST) return json(await aDO(env, '/sfi-avvisi', { email: io.email, attivi: corpo.attivi === true }));

  const cat = await catalogoDomande(env);
  if (p === '/api/duelli/lobby' && POST) {
    const materia = materiaValida(cat, corpo.materia) ? corpo.materia : null;
    const argomento = materia && cat[materia].includes(corpo.argomento) ? corpo.argomento : null;
    const domande = corpo.cerca && materia ? await scegliDomande(h, env, materia, argomento) : null;
    return json(await aDO(env, '/sfi-lobby', { email: io.email, lingua: l, materia, argomento, cerca: Boolean(corpo.cerca && materia), domande }), 200, { 'cache-control': 'no-store' });
  }
  if (p === '/api/duelli/esci' && POST) return json(await aDO(env, '/sfi-esci', { email: io.email }));
  if (p === '/api/duelli/crea' && POST) {
    if (!materiaValida(cat, corpo.materia)) return json({ errore: 'Scegli una materia.' }, 400);
    const argomento = cat[corpo.materia].includes(corpo.argomento) ? corpo.argomento : null;
    const domande = await scegliDomande(h, env, corpo.materia, argomento);
    if (!domande) return json({ errore: 'Nessuna domanda per questa scelta.' }, 404);
    const r = await aDO(env, '/sfi-crea', { email: io.email, materia: corpo.materia, argomento, domande, modo: corpo.modo === 'invito' ? 'invito' : 'link', pid: corpo.pid });
    return json(r, r.errore ? 400 : 200);
  }
  if (p === '/api/duelli/partita' && POST) {
    const r = await aDO(env, '/sfi-partita', { email: io.email, lingua: l, codice: corpo.codice, unisci: Boolean(corpo.unisci), servi: Boolean(corpo.servi), accetta: corpo.accetta });
    if (r.errore) return json(r, 404);
    // Testo della domanda in corso e, a duello chiuso per lo studente, spiegazioni del riepilogo.
    const dati = await domandeDi(env, r.materia, l);
    const trova = (id) => dati?.argomenti?.[String(id).split('/')[0]]?.find((x) => x.id === id);
    if (r.turno) {
      const q = trova(r.turno.id);
      r.turno = { ...r.turno, testo: q?.testo || '', scelte: q?.scelte || [], argomento: titoloArgomento(r.materia, String(r.turno.id).split('/')[0], l) };
      delete r.turno.id;
    }
    if (r.riepilogo) r.riepilogo = r.riepilogo.map((x) => { const q = trova(x.id); return { ...x, testo: q?.testo || '', scelte: q?.scelte || [], spiegazione: q?.spiegazione || '', argomento: titoloArgomento(r.materia, String(x.id).split('/')[0], l) }; });
    return json(r, 200, { 'cache-control': 'no-store' });
  }
  if (p === '/api/duelli/rispondi' && POST) {
    const n = Number(corpo.n);
    if (!Number.isInteger(n) || n < 0 || n >= DUELLO.domande) return json({ errore: 'dati' }, 400);
    const scelta = Number.isInteger(corpo.scelta) ? corpo.scelta : null;
    const r = await aDO(env, '/sfi-rispondi', { email: io.email, codice: corpo.codice, n, scelta, lingua: l, catalogo: cat });
    return json(r, r.errore ? 400 : 200, { 'cache-control': 'no-store' });
  }
  return null;
}
