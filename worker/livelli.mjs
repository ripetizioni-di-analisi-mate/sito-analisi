// Livelli, punti esperienza (EXP), sessioni di studio, obiettivi della settimana e traguardi.
// Le regole (punti, soglie, fasce) stanno in src/data/livelli.ts; qui c'è solo l'archivio.
import {
  livelloDa, PUNTI, TRAGUARDI_FISSI, PUNTI_MATERIA_COMPLETA, puntiTraguardoLivello, OBIETTIVI,
} from '../src/data/livelli.ts';
import { MATERIE } from '../src/data/materie.ts';

const SESSIONE_PAUSA = 15 * 60 * 1000; // dopo 15 minuti senza attività la sessione si considera chiusa
const titoloArgomento = (materia, argomento) =>
  MATERIE.find((m) => m.slug === materia)?.argomenti.find((a) => a.slug === argomento)?.titolo || argomento;

// Date nel fuso di Roma: il giorno di studio e la settimana (da lunedì) sono quelli dello studente italiano.
const fmt = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Rome', year: 'numeric', month: '2-digit', day: '2-digit' });
export const giornoRoma = (ms = Date.now()) => fmt.format(new Date(ms));
const spostaGiorno = (g, n) => new Date(Date.parse(`${g}T12:00:00Z`) + n * 86400000).toISOString().slice(0, 10);
export function settimanaDi(g = giornoRoma()) {
  const dow = new Date(`${g}T12:00:00Z`).getUTCDay(); // 0 = domenica
  const lunedi = spostaGiorno(g, -((dow + 6) % 7));
  return Array.from({ length: 7 }, (_, i) => spostaGiorno(lunedi, i));
}

export function creaTabelleLivelli(sql) {
  sql.exec(`
    CREATE TABLE IF NOT EXISTS exp (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, quando INTEGER, tipo TEXT, punti INTEGER, nota TEXT);
    CREATE INDEX IF NOT EXISTS exp_email ON exp (email, quando);
    CREATE TABLE IF NOT EXISTS studio (email TEXT, giorno TEXT, minuti INTEGER DEFAULT 0, ultimo INTEGER DEFAULT 0, PRIMARY KEY (email, giorno));
    CREATE TABLE IF NOT EXISTS risposte (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, domanda TEXT, materia TEXT, argomento TEXT,
      giorno TEXT, quando INTEGER, corretta INTEGER, veloce INTEGER, punti INTEGER, token TEXT UNIQUE);
    CREATE INDEX IF NOT EXISTS risposte_email ON risposte (email, quando);
    CREATE TABLE IF NOT EXISTS sessioni (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, inizio INTEGER, ultimo INTEGER, materia TEXT, argomento TEXT,
      minuti INTEGER DEFAULT 0, risposte INTEGER DEFAULT 0, corrette INTEGER DEFAULT 0, veloci INTEGER DEFAULT 0, punti INTEGER DEFAULT 0, chiusa INTEGER DEFAULT 0);
    CREATE INDEX IF NOT EXISTS sessioni_email ON sessioni (email, ultimo);
    CREATE TABLE IF NOT EXISTS premi (email TEXT, codice TEXT, nome TEXT, punti INTEGER, quando INTEGER, PRIMARY KEY (email, codice));
    CREATE TABLE IF NOT EXISTS obiettivi (email TEXT, settimana TEXT, n INTEGER, codice TEXT, materia TEXT, argomento TEXT, PRIMARY KEY (email, settimana, n));
  `);
  try { sql.exec('ALTER TABLE utenti ADD COLUMN exp INTEGER DEFAULT 0'); } catch { /* già presente */ }
  // valida = risposta data dopo almeno 10 secondi e dentro il tempo: solo queste contano per obiettivi e traguardi
  try { sql.exec('ALTER TABLE risposte ADD COLUMN valida INTEGER DEFAULT 1'); } catch { /* già presente */ }
}

// ---------- operazioni sull'archivio (ar = istanza di Archivio, con righe/riga/sql) ----------
const expDi = (ar, email) => ar.riga('SELECT COALESCE(exp, 0) AS exp FROM utenti WHERE email = ?', email)?.exp || 0;

function aggiungi(ar, email, punti, tipo, nota = null) {
  if (!punti) return;
  ar.sql.exec('INSERT INTO exp (email, quando, tipo, punti, nota) VALUES (?, ?, ?, ?, ?)', email, Date.now(), tipo, punti, nota);
  ar.sql.exec('UPDATE utenti SET exp = COALESCE(exp, 0) + ? WHERE email = ?', punti, email);
}
function premia(ar, email, codice, nome, punti, nuovi) {
  if (ar.riga('SELECT codice FROM premi WHERE email = ? AND codice = ?', email, codice)) return;
  ar.sql.exec('INSERT INTO premi (email, codice, nome, punti, quando) VALUES (?, ?, ?, ?, ?)', email, codice, nome, punti, Date.now());
  aggiungi(ar, email, punti, 'premio', codice);
  nuovi.push({ codice, nome, punti });
}

// Sessione aperta (ultima attività da meno di 15 minuti), altrimenti una nuova.
function sessioneCorrente(ar, email, materia, argomento) {
  const ora = Date.now();
  const s = ar.riga('SELECT * FROM sessioni WHERE email = ? AND chiusa = 0 ORDER BY ultimo DESC LIMIT 1', email);
  if (s && ora - s.ultimo < SESSIONE_PAUSA) return s.id;
  ar.sql.exec('UPDATE sessioni SET chiusa = 1 WHERE email = ? AND chiusa = 0', email);
  ar.sql.exec('INSERT INTO sessioni (email, inizio, ultimo, materia, argomento) VALUES (?, ?, ?, ?, ?)', email, ora, ora, materia || null, argomento || null);
  return ar.riga('SELECT last_insert_rowid() AS id').id;
}

// Obiettivi della settimana: scelti una volta il lunedì (o alla prima attività) e poi fissi.
function obiettiviSettimana(ar, email) {
  const sett = settimanaDi();
  const chiave = sett[0];
  let righe = ar.righe('SELECT * FROM obiettivi WHERE email = ? AND settimana = ? ORDER BY n', email, chiave);
  if (righe.length) return { sett, righe };
  // Primo obiettivo: l'argomento su cui lo studente ha risposto di più nelle due settimane precedenti.
  const prima = ar.riga(`SELECT materia, argomento, COUNT(*) AS c FROM risposte WHERE email = ? AND giorno >= ? AND giorno < ?
    GROUP BY materia, argomento ORDER BY c DESC LIMIT 1`, email, spostaGiorno(chiave, -14), chiave);
  const scelte = [
    prima ? ['corrette-arg', prima.materia, prima.argomento] : ['corrette-tot', null, null],
    ['giorni', null, null],
  ];
  let h = 0;
  for (const ch of email + chiave) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  scelte.push([['ore', 'argomenti', 'veloci'][h % 3], null, null]);
  scelte.forEach(([codice, materia, argomento], n) =>
    ar.sql.exec('INSERT OR IGNORE INTO obiettivi (email, settimana, n, codice, materia, argomento) VALUES (?, ?, ?, ?, ?, ?)', email, chiave, n, codice, materia, argomento));
  righe = ar.righe('SELECT * FROM obiettivi WHERE email = ? AND settimana = ? ORDER BY n', email, chiave);
  return { sett, righe };
}
function progressoObiettivo(ar, email, o, sett) {
  const da = sett[0], a = sett[6];
  const def = OBIETTIVI[o.codice];
  let fatto = 0, testo = '';
  switch (o.codice) {
    case 'corrette-arg':
      fatto = ar.riga('SELECT COUNT(*) AS c FROM risposte WHERE email = ? AND giorno BETWEEN ? AND ? AND corretta = 1 AND materia = ? AND argomento = ?', email, da, a, o.materia, o.argomento).c;
      testo = `${def.n} risposte corrette su ${titoloArgomento(o.materia, o.argomento)}`; break;
    case 'corrette-tot':
      fatto = ar.riga('SELECT COUNT(*) AS c FROM risposte WHERE email = ? AND giorno BETWEEN ? AND ? AND corretta = 1', email, da, a).c;
      testo = `${def.n} risposte corrette`; break;
    case 'giorni':
      fatto = ar.riga(`SELECT COUNT(*) AS c FROM (SELECT giorno FROM studio WHERE email = ? AND giorno BETWEEN ? AND ? AND minuti > 0
        UNION SELECT giorno FROM risposte WHERE email = ? AND giorno BETWEEN ? AND ? AND valida = 1)`, email, da, a, email, da, a).c;
      testo = `Studia in ${def.n} giorni diversi`; break;
    case 'ore':
      fatto = ar.riga('SELECT COALESCE(SUM(minuti), 0) AS c FROM studio WHERE email = ? AND giorno BETWEEN ? AND ?', email, da, a).c;
      testo = '3 ore di studio attivo'; break;
    case 'argomenti':
      fatto = ar.riga('SELECT COUNT(DISTINCT materia || \'/\' || argomento) AS c FROM risposte WHERE email = ? AND giorno BETWEEN ? AND ? AND valida = 1', email, da, a).c;
      testo = `Domande su ${def.n} argomenti diversi`; break;
    case 'veloci':
      fatto = ar.riga('SELECT COUNT(*) AS c FROM risposte WHERE email = ? AND giorno BETWEEN ? AND ? AND corretta = 1 AND veloce = 1', email, da, a).c;
      testo = `${def.n} risposte corrette nel primo minuto`; break;
  }
  return { codice: `obiettivo-${da}-${o.n}`, testo, fatto: Math.min(fatto, def.n), totale: def.n, punti: def.punti, completato: fatto >= def.n };
}

// Dopo ogni attività: obiettivi raggiunti, traguardi, livelli. Restituisce i premi nuovi.
function controllaPremi(ar, email, catalogo) {
  const nuovi = [];
  const { sett, righe } = obiettiviSettimana(ar, email);
  for (const o of righe) {
    const p = progressoObiettivo(ar, email, o, sett);
    if (p.completato) premia(ar, email, p.codice, `Obiettivo: ${p.testo}`, p.punti, nuovi);
  }
  const corrette = ar.riga('SELECT COUNT(*) AS c FROM risposte WHERE email = ? AND corretta = 1', email).c;
  const minuti = ar.riga('SELECT COALESCE(SUM(minuti), 0) AS c FROM studio WHERE email = ?', email).c;
  const [prima, cento, ore] = TRAGUARDI_FISSI;
  if (corrette >= 1) premia(ar, email, prima.codice, prima.nome, prima.punti, nuovi);
  if (corrette >= 100) premia(ar, email, cento.codice, cento.nome, cento.punti, nuovi);
  if (minuti >= 600) premia(ar, email, ore.codice, ore.nome, ore.punti, nuovi);
  for (const [materia, argomenti] of Object.entries(catalogo || {})) {
    if (!argomenti.length) continue;
    const provati = ar.riga(`SELECT COUNT(DISTINCT argomento) AS c FROM risposte WHERE email = ? AND valida = 1 AND materia = ? AND argomento IN (${argomenti.map(() => '?').join(',')})`, email, materia, ...argomenti).c;
    if (provati >= argomenti.length) {
      const titolo = MATERIE.find((m) => m.slug === materia)?.titolo || materia;
      premia(ar, email, `materia-${materia}`, `Tutti gli argomenti di ${titolo} provati`, PUNTI_MATERIA_COMPLETA, nuovi);
    }
  }
  // Traguardi di livello (10, 20, …): i loro punti possono far salire ancora, quindi si ripete.
  for (let giro = 0; giro < 12; giro++) {
    const L = livelloDa(expDi(ar, email)).livello;
    const quanti = nuovi.length;
    for (let k = 10; k <= L; k += 10) premia(ar, email, `livello-${k}`, `Livello ${k}`, puntiTraguardoLivello(k), nuovi);
    if (nuovi.length === quanti) break;
  }
  return nuovi;
}

export function statoDi(ar, email) {
  return livelloDa(expDi(ar, email));
}

// Un minuto di studio attivo (il browser lo manda al massimo una volta al minuto).
export function battito(ar, c) {
  const { email } = c;
  const ora = Date.now();
  const giorno = giornoRoma(ora);
  const r = ar.riga('SELECT minuti, ultimo FROM studio WHERE email = ? AND giorno = ?', email, giorno);
  let contato = false;
  if (!r || ora - r.ultimo >= 50 * 1000) {
    const minuti = r?.minuti || 0;
    if (minuti < PUNTI.studioMaxGiorno) {
      ar.sql.exec(`INSERT INTO studio (email, giorno, minuti, ultimo) VALUES (?, ?, 1, ?)
        ON CONFLICT(email, giorno) DO UPDATE SET minuti = minuti + 1, ultimo = excluded.ultimo`, email, giorno, ora);
      aggiungi(ar, email, PUNTI.studioMinuto, 'studio');
      const s = sessioneCorrente(ar, email, c.materia, c.argomento);
      ar.sql.exec('UPDATE sessioni SET minuti = minuti + 1, punti = punti + ?, ultimo = ?, materia = COALESCE(?, materia), argomento = COALESCE(?, argomento) WHERE id = ?',
        PUNTI.studioMinuto, ora, c.materia || null, c.argomento || null, s);
      contato = true;
    } else {
      ar.sql.exec('UPDATE studio SET ultimo = ? WHERE email = ? AND giorno = ?', ora, email, giorno);
    }
  }
  const nuovi = contato ? controllaPremi(ar, email, c.catalogo) : [];
  return { contato, nuovi, stato: statoDi(ar, email) };
}

// Risposta a una domanda a tempo: i punti li decide l'archivio, non il browser.
export function risposta(ar, c) {
  const { email } = c;
  const gia = ar.riga('SELECT punti, veloce FROM risposte WHERE token = ?', c.token);
  if (gia) return { punti: gia.punti, veloce: Boolean(gia.veloce), motivo: 'gia-risposta', nuovi: [], stato: statoDi(ar, email) };
  const ora = Date.now();
  const s = c.secondi;
  let punti = 0, motivo = null;
  const veloce = c.corretta && s <= PUNTI.secondiVeloce;
  if (!c.corretta) motivo = 'sbagliata';
  else if (s < PUNTI.secondiMinimi) motivo = 'troppo-presto';
  else if (s > PUNTI.secondiDomanda + 5) motivo = 'tempo-scaduto';
  else {
    punti = PUNTI.corretta + (veloce ? PUNTI.veloce : 0);
    const recente = ar.riga('SELECT id FROM risposte WHERE email = ? AND domanda = ? AND corretta = 1 AND quando > ?',
      email, c.domanda, ora - PUNTI.giorniDimezzati * 86400000);
    if (recente) { punti = Math.floor(punti / 2); motivo = 'ripetuta'; }
  }
  const valeVeloce = Boolean(veloce && punti > 0);
  const valida = s >= PUNTI.secondiMinimi && s <= PUNTI.secondiDomanda + 5;
  const giusta = Boolean(c.corretta && valida);
  ar.sql.exec('INSERT INTO risposte (email, domanda, materia, argomento, giorno, quando, corretta, veloce, punti, token, valida) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    email, c.domanda, c.materia, c.argomento, giornoRoma(ora), ora, giusta ? 1 : 0, valeVeloce ? 1 : 0, punti, c.token, valida ? 1 : 0);
  aggiungi(ar, email, punti, 'domanda', c.domanda);
  const sid = sessioneCorrente(ar, email, c.materia, c.argomento);
  ar.sql.exec('UPDATE sessioni SET risposte = risposte + 1, corrette = corrette + ?, veloci = veloci + ?, punti = punti + ?, ultimo = ?, materia = ?, argomento = ? WHERE id = ?',
    giusta ? 1 : 0, valeVeloce ? 1 : 0, punti, ora, c.materia, c.argomento, sid);
  const nuovi = controllaPremi(ar, email, c.catalogo);
  return { punti, veloce: valeVeloce, motivo, nuovi, stato: statoDi(ar, email) };
}

// Riepilogo della sessione in corso; con chiudi = true la sessione si chiude.
export function riepilogo(ar, c) {
  const { email } = c;
  const s = ar.riga('SELECT * FROM sessioni WHERE email = ? ORDER BY ultimo DESC LIMIT 1', email);
  if (!s) return { sessione: null, stato: statoDi(ar, email) };
  if (c.chiudi) ar.sql.exec('UPDATE sessioni SET chiusa = 1 WHERE id = ?', s.id);
  const premi = ar.righe('SELECT nome, punti FROM premi WHERE email = ? AND quando BETWEEN ? AND ?', email, s.inizio, Date.now());
  const { sett, righe } = obiettiviSettimana(ar, email);
  const obiettivi = righe.map((o) => progressoObiettivo(ar, email, o, sett));
  return {
    sessione: {
      inizio: s.inizio, minuti: s.minuti, risposte: s.risposte, corrette: s.corrette, veloci: s.veloci,
      materia: s.materia, argomento: s.argomento, titolo: s.argomento ? titoloArgomento(s.materia, s.argomento) : null,
      puntiCorrette: s.punti - s.minuti * PUNTI.studioMinuto,
      puntiStudio: s.minuti * PUNTI.studioMinuto,
      premi, punti: s.punti + premi.reduce((x, p) => x + p.punti, 0),
    },
    obiettivi, stato: statoDi(ar, email),
  };
}

// Pagina "Il tuo percorso" nell'account.
export function percorso(ar, c) {
  const { email } = c;
  const { sett, righe } = obiettiviSettimana(ar, email);
  const da = sett[0], a = sett[6];
  const oggi = giornoRoma();
  const giorniAttivi = new Set(ar.righe(`SELECT giorno FROM studio WHERE email = ? AND giorno BETWEEN ? AND ? AND minuti > 0
    UNION SELECT giorno FROM risposte WHERE email = ? AND giorno BETWEEN ? AND ? AND valida = 1`, email, da, a, email, da, a).map((r) => r.giorno));
  const premi = ar.righe('SELECT codice, nome, punti, quando FROM premi WHERE email = ? AND codice NOT LIKE \'obiettivo-%\' ORDER BY quando', email);
  const stato = statoDi(ar, email);
  // Traguardi ancora da raggiungere: i tre fissi, le materie con domande, il prossimo livello tondo.
  const presi = new Set(premi.map((p) => p.codice));
  const daFare = [
    ...TRAGUARDI_FISSI.filter((t) => !presi.has(t.codice)).map((t) => ({ nome: t.nome, punti: t.punti })),
    ...Object.keys(c.catalogo || {}).filter((m) => !presi.has(`materia-${m}`))
      .map((m) => ({ nome: `Tutti gli argomenti di ${MATERIE.find((x) => x.slug === m)?.titolo || m} provati`, punti: PUNTI_MATERIA_COMPLETA })),
  ];
  const prossimoTondo = Math.min(100, Math.floor(stato.livello / 10) * 10 + 10);
  if (!presi.has(`livello-${prossimoTondo}`)) daFare.push({ nome: `Livello ${prossimoTondo}`, punti: puntiTraguardoLivello(prossimoTondo) });
  return {
    stato,
    settimana: {
      giorni: sett.map((g) => ({ giorno: g, attivo: giorniAttivi.has(g), oggi: g === oggi })),
      minuti: ar.riga('SELECT COALESCE(SUM(minuti), 0) AS c FROM studio WHERE email = ? AND giorno BETWEEN ? AND ?', email, da, a).c,
      corrette: ar.riga('SELECT COUNT(*) AS c FROM risposte WHERE email = ? AND giorno BETWEEN ? AND ? AND corretta = 1', email, da, a).c,
    },
    obiettivi: righe.map((o) => progressoObiettivo(ar, email, o, sett)),
    traguardi: premi.map((p) => ({ nome: p.nome, punti: p.punti, quando: p.quando })),
    daFare,
    sessioni: ar.righe('SELECT inizio, minuti, risposte, corrette, punti, materia, argomento FROM sessioni WHERE email = ? ORDER BY ultimo DESC LIMIT 5', email)
      .map((s) => ({ ...s, titolo: s.argomento ? titoloArgomento(s.materia, s.argomento) : null })),
  };
}
