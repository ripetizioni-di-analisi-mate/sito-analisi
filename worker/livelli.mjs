// Livelli, punti esperienza (EXP), sessioni di studio, obiettivi della settimana e traguardi.
// Le regole (punti, soglie, fasce) stanno in src/data/livelli.ts; qui c'è solo l'archivio.
import {
  livelloDa, PUNTI, RIPASSO, RIPASSO_OGGI, INTERVALLI_RIPASSO, TRAGUARDI_FISSI, PUNTI_MATERIA_COMPLETA, puntiTraguardoLivello, OBIETTIVI, STUDIO, puntiMinuto,
} from '../src/data/livelli.ts';
import { MATERIE } from '../src/data/materie.ts';
import { MATERIE_EN } from '../src/data/materie-en.ts';
import { ARGOMENTI_FR, MATERIE_FR } from '../src/data/materie-fr.ts';
import { ARGOMENTI_ES, MATERIE_ES } from '../src/data/materie-es.ts';
import { courses } from '../src/data/stem-usa/catalog.mjs';
import { entraInLega, riassuntoLega, fotografiaLega } from './sfide.mjs';
import { accodaSorpassi } from './avvisi-lega.mjs';

const SESSIONE_PAUSA = 15 * 60 * 1000; // dopo 15 minuti senza attività la sessione si considera chiusa
const materieUsa = new Map(courses.map(course => [course.slug, course]));
// I testi (titoli, obiettivi, traguardi) si compongono nella lingua della pagina che li richiede.
const titoloArgomento = (materia, argomento, l = 'it') => (argomento === RIPASSO && (l === 'fr' ? 'Entraînement à l’examen' : l === 'es' ? 'Práctica de examen' : l === 'en' ? 'Exam practice' : 'Prove d\'esame'))
  || (argomento === RIPASSO_OGGI && (l === 'fr' ? 'Révision du jour' : l === 'es' ? 'Repaso de hoy' : l === 'en' ? 'Today\'s review' : 'Ripasso di oggi'))
  || (/^unit-\d+$/.test(argomento) && materieUsa.get(materia)?.lessons[Number(argomento.slice(5)) - 1]?.title)
  || (l === 'fr' && (ARGOMENTI_FR[`${materia}/${argomento}`] || ARGOMENTI_FR[argomento]))
  || (l === 'es' && (ARGOMENTI_ES[`${materia}/${argomento}`] || ARGOMENTI_ES[argomento]))
  || (l === 'en' && MATERIE_EN[materia]?.argomenti[argomento]?.titolo)
  || MATERIE.find((m) => m.slug === materia)?.argomenti.find((a) => a.slug === argomento)?.titolo || argomento;
const titoloMateria = (materia, l = 'it') => (l === 'fr' && MATERIE_FR[materia]?.[0]) || (l === 'es' && MATERIE_ES[materia]?.[0]) || (l === 'en' && MATERIE_EN[materia]?.titolo) || MATERIE.find((m) => m.slug === materia)?.titolo || materieUsa.get(materia)?.title || materia;
function testoObiettivo(o, l = 'it') {
  const n = OBIETTIVI[o.codice]?.n;
  const en = l === 'en', es = l === 'es', fr = l === 'fr';
  switch (o.codice) {
    case 'corrette-arg': return fr ? `${n} bonnes réponses sur « ${titoloArgomento(o.materia, o.argomento, l)} »` : es ? `${n} respuestas correctas sobre ${titoloArgomento(o.materia, o.argomento, l)}` : en ? `${n} correct answers on ${titoloArgomento(o.materia, o.argomento, l)}` : `${n} risposte corrette su ${titoloArgomento(o.materia, o.argomento, l)}`;
    case 'corrette-tot': return fr ? `${n} bonnes réponses` : es ? `${n} respuestas correctas` : en ? `${n} correct answers` : `${n} risposte corrette`;
    case 'giorni': return fr ? `Travaille ${n} jours différents` : es ? `Estudia en ${n} días distintos` : en ? `Study on ${n} different days` : `Studia in ${n} giorni diversi`;
    case 'ore': return fr ? '3 heures de travail actif' : es ? '3 horas de estudio activo' : en ? '3 hours of active study' : '3 ore di studio attivo';
    case 'argomenti': return fr ? `Réponds à des questions sur ${n} chapitres différents` : es ? `Responde preguntas sobre ${n} temas distintos` : en ? `Questions on ${n} different topics` : `Domande su ${n} argomenti diversi`;
    case 'veloci': return fr ? `${n} bonnes réponses en moins d’une minute` : es ? `${n} respuestas correctas en el primer minuto` : en ? `${n} correct answers within the first minute` : `${n} risposte corrette nel primo minuto`;
    default: return o.codice;
  }
}
// Nome di un traguardo o di un obiettivo premiato, dal suo codice.
function nomePremio(ar, email, codice, l = 'it') {
  const fisso = TRAGUARDI_FISSI.find((t) => t.codice === codice);
  if (fisso) return l === 'fr' ? fisso.nomeFr : l === 'es' ? fisso.nomeEs : l === 'en' ? fisso.nomeEn : fisso.nome;
  let m = codice.match(/^materia-(.+)$/);
  if (m) return l === 'fr' ? `Tous les chapitres travaillés dans « ${titoloMateria(m[1], l)} »` : l === 'es' ? `Has practicado todos los temas de ${titoloMateria(m[1], l)}` : l === 'en' ? `All topics of ${titoloMateria(m[1], l)} tried` : `Tutti gli argomenti di ${titoloMateria(m[1], l)} provati`;
  m = codice.match(/^ora-\d+-(\d+)$/);
  if (m) {
    const n = Number(m[1]);
    if (l === 'fr') return n === 1 ? 'Une heure de travail d’affilée' : `${n} heures de travail d’affilée`;
    if (l === 'es') return n === 1 ? 'Una hora seguida de estudio' : `${n} horas seguidas de estudio`;
    if (l === 'en') return n === 1 ? 'One hour of study in a row' : `${n} hours of study in a row`;
    return n === 1 ? "Un'ora di studio di fila" : `${n} ore di studio di fila`;
  }
  m = codice.match(/^livello-(\d+)$/);
  if (m) return l === 'fr' ? `Niveau ${m[1]}` : l === 'es' ? `Nivel ${m[1]}` : l === 'en' ? `Level ${m[1]}` : `Livello ${m[1]}`;
  m = codice.match(/^obiettivo-(\d{4}-\d{2}-\d{2})-(\d+)$/);
  if (m) {
    const o = ar.riga('SELECT * FROM obiettivi WHERE email = ? AND settimana = ? AND n = ?', email, m[1], Number(m[2]));
    return o ? `${l === 'fr' ? 'Objectif' : l === 'es' ? 'Objetivo' : l === 'en' ? 'Goal' : 'Obiettivo'}: ${testoObiettivo(o, l)}` : codice;
  }
  return codice;
}

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
  // valida = risposta data dentro il tempo: solo queste contano per obiettivi e traguardi
  try { sql.exec('ALTER TABLE risposte ADD COLUMN valida INTEGER DEFAULT 1'); } catch { /* già presente */ }
  // studio di fila: minuti della serie in corso (riparte dopo STUDIO.pausaMinuti senza studio)
  sql.exec('CREATE TABLE IF NOT EXISTS serie (email TEXT PRIMARY KEY, inizio INTEGER, minuti INTEGER DEFAULT 0, ultimo INTEGER DEFAULT 0)');
  // EXP dello studio nella sessione (prima erano un punto al minuto e si ricavavano dai minuti)
  try { sql.exec('ALTER TABLE sessioni ADD COLUMN punti_studio INTEGER'); } catch { /* già presente */ }
  // esercizi da fare risolti con la verifica della risposta (una riga per esercizio: i punti si danno una volta sola)
  sql.exec('CREATE TABLE IF NOT EXISTS esercizi (email TEXT, id TEXT, materia TEXT, argomento TEXT, quando INTEGER, PRIMARY KEY (email, id))');
  // ripasso dilazionato delle domande sbagliate: casella 0, 1, 2 (intervalli 1, 3, 7 giorni) e giorno in cui la domanda torna
  sql.exec('CREATE TABLE IF NOT EXISTS ripasso (email TEXT, domanda TEXT, materia TEXT, casella INTEGER, scadenza TEXT, PRIMARY KEY (email, domanda))');
  // progressi per argomento: pagine di studio aperte per intero (teoria, schede svolte) e data dell'esame di ogni materia
  sql.exec('CREATE TABLE IF NOT EXISTS viste (email TEXT, materia TEXT, argomento TEXT, tipo TEXT, n INTEGER, quando INTEGER, PRIMARY KEY (email, materia, argomento, tipo, n))');
  sql.exec('CREATE TABLE IF NOT EXISTS esami (email TEXT, materia TEXT, data TEXT, PRIMARY KEY (email, materia))');
}

// ---------- operazioni sull'archivio (ar = istanza di Archivio, con righe/riga/sql) ----------
const expDi = (ar, email) => ar.riga('SELECT COALESCE(exp, 0) AS exp FROM utenti WHERE email = ?', email)?.exp || 0;

export function aggiungi(ar, email, punti, tipo, nota = null) {
  if (!punti) return;
  // La fotografia precede gli EXP, anche al primo ingresso della settimana.
  entraInLega(ar, email);
  const prima = fotografiaLega(ar, email);
  ar.sql.exec('INSERT INTO exp (email, quando, tipo, punti, nota) VALUES (?, ?, ?, ?, ?)', email, Date.now(), tipo, punti, nota);
  ar.sql.exec('UPDATE utenti SET exp = COALESCE(exp, 0) + ? WHERE email = ?', punti, email);
  if (punti > 0 && prima) accodaSorpassi(ar, email, prima, fotografiaLega(ar, email));
}
function premia(ar, email, codice, nome, punti, nuovi) {
  if (ar.riga('SELECT codice FROM premi WHERE email = ? AND codice = ?', email, codice)) return;
  ar.sql.exec('INSERT INTO premi (email, codice, nome, punti, quando) VALUES (?, ?, ?, ?, ?)', email, codice, nome, punti, Date.now());
  aggiungi(ar, email, punti, 'premio', codice);
  nuovi.push({ codice, punti });
}
const conNomi = (ar, email, premi, l) => premi.map((p) => ({ ...p, nome: nomePremio(ar, email, p.codice, l) }));

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
  // Primo obiettivo: con un esame nei prossimi 60 giorni, l'argomento di quella materia con meno risposte corrette
  // (tra quelli con domande a tempo); altrimenti l'argomento su cui lo studente ha risposto di più nelle due settimane precedenti.
  const esame = ar.riga('SELECT materia FROM esami WHERE email = ? AND data >= ? AND data <= ? ORDER BY data LIMIT 1', email, chiave, spostaGiorno(chiave, 60));
  const daEsame = esame && (ultimoCatalogo[esame.materia] || []).length
    ? ultimoCatalogo[esame.materia].map((a) => ({ materia: esame.materia, argomento: a,
      c: ar.riga('SELECT COUNT(DISTINCT domanda) AS k FROM risposte WHERE email = ? AND materia = ? AND argomento = ? AND corretta = 1', email, esame.materia, a).k }))
      .sort((x, y) => x.c - y.c)[0]
    : null;
  const prima = daEsame || ar.riga(`SELECT materia, argomento, COUNT(*) AS c FROM risposte WHERE email = ? AND giorno >= ? AND giorno < ?
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
function progressoObiettivo(ar, email, o, sett, l = 'it') {
  const da = sett[0], a = sett[6];
  const def = OBIETTIVI[o.codice];
  let fatto = 0, testo = '';
  switch (o.codice) {
    case 'corrette-arg':
      fatto = ar.riga('SELECT COUNT(*) AS c FROM risposte WHERE email = ? AND giorno BETWEEN ? AND ? AND corretta = 1 AND materia = ? AND argomento = ?', email, da, a, o.materia, o.argomento).c;
      break;
    case 'corrette-tot':
      fatto = ar.riga('SELECT COUNT(*) AS c FROM risposte WHERE email = ? AND giorno BETWEEN ? AND ? AND corretta = 1', email, da, a).c;
      break;
    case 'giorni':
      fatto = ar.riga(`SELECT COUNT(*) AS c FROM (SELECT giorno FROM studio WHERE email = ? AND giorno BETWEEN ? AND ? AND minuti > 0
        UNION SELECT giorno FROM risposte WHERE email = ? AND giorno BETWEEN ? AND ? AND valida = 1)`, email, da, a, email, da, a).c;
      break;
    case 'ore':
      fatto = ar.riga('SELECT COALESCE(SUM(minuti), 0) AS c FROM studio WHERE email = ? AND giorno BETWEEN ? AND ?', email, da, a).c;
      break;
    case 'argomenti':
      fatto = ar.riga('SELECT COUNT(DISTINCT materia || \'/\' || argomento) AS c FROM risposte WHERE email = ? AND giorno BETWEEN ? AND ? AND valida = 1', email, da, a).c;
      break;
    case 'veloci':
      fatto = ar.riga('SELECT COUNT(*) AS c FROM risposte WHERE email = ? AND giorno BETWEEN ? AND ? AND corretta = 1 AND veloce = 1', email, da, a).c;
      break;
  }
  testo = testoObiettivo(o, l);
  const link = o.codice === 'corrette-arg' && o.materia && o.argomento ? `/${o.materia}/${o.argomento}/domande` : null;
  return { codice: `obiettivo-${da}-${o.n}`, testo, fatto: Math.min(fatto, def.n), totale: def.n, punti: def.punti, completato: fatto >= def.n, link, unita: o.codice === 'ore' ? 'min' : '' };
}

// Ultimo catalogo delle domande a tempo ricevuto dal Worker (serve agli obiettivi calibrati sull'esame).
let ultimoCatalogo = {};
// Dopo ogni attività: obiettivi raggiunti, traguardi, livelli. Restituisce i premi nuovi.
function controllaPremi(ar, email, catalogo) {
  if (catalogo && Object.keys(catalogo).length) ultimoCatalogo = catalogo;
  const nuovi = [];
  const { sett, righe } = obiettiviSettimana(ar, email);
  for (const o of righe) {
    const p = progressoObiettivo(ar, email, o, sett);
    if (p.completato) premia(ar, email, p.codice, p.testo, p.punti, nuovi);
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
      premia(ar, email, `materia-${materia}`, `Tutti gli argomenti di ${titoloMateria(materia)} provati`, PUNTI_MATERIA_COMPLETA, nuovi);
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

export function statoDi(ar, email, l = 'it') {
  return livelloDa(expDi(ar, email), l);
}

// Un minuto di studio attivo (il browser lo manda al massimo una volta al minuto).
export function battito(ar, c) {
  const { email } = c;
  const ora = Date.now();
  const giorno = giornoRoma(ora);
  const r = ar.riga('SELECT minuti, ultimo FROM studio WHERE email = ? AND giorno = ?', email, giorno);
  let contato = false;
  const oraPremi = [];
  if (!r || ora - r.ultimo >= 50 * 1000) {
    ar.sql.exec(`INSERT INTO studio (email, giorno, minuti, ultimo) VALUES (?, ?, 1, ?)
      ON CONFLICT(email, giorno) DO UPDATE SET minuti = minuti + 1, ultimo = excluded.ultimo`, email, giorno, ora);
    // Serie di studio di fila: riparte da capo dopo STUDIO.pausaMinuti senza minuti contati.
    let sr = ar.riga('SELECT inizio, minuti, ultimo FROM serie WHERE email = ?', email);
    if (!sr || ora - sr.ultimo > STUDIO.pausaMinuti * 60000) sr = { inizio: ora, minuti: 0 };
    const m = sr.minuti + 1;
    ar.sql.exec(`INSERT INTO serie (email, inizio, minuti, ultimo) VALUES (?, ?, ?, ?)
      ON CONFLICT(email) DO UPDATE SET inizio = excluded.inizio, minuti = excluded.minuti, ultimo = excluded.ultimo`, email, sr.inizio, m, ora);
    const punti = puntiMinuto(m);
    aggiungi(ar, email, punti, 'studio');
    const s = sessioneCorrente(ar, email, c.materia, c.argomento);
    ar.sql.exec('UPDATE sessioni SET minuti = minuti + 1, punti = punti + ?, punti_studio = COALESCE(punti_studio, 0) + ?, ultimo = ?, materia = COALESCE(?, materia), argomento = COALESCE(?, argomento) WHERE id = ?',
      punti, punti, ora, c.materia || null, c.argomento || null, s);
    contato = true;
    if (m % 60 === 0) premia(ar, email, `ora-${sr.inizio}-${m / 60}`, '', STUDIO.premioOra, oraPremi);
  }
  const nuovi = contato ? [...oraPremi, ...controllaPremi(ar, email, c.catalogo)] : [];
  return { contato, nuovi: conNomi(ar, email, nuovi, c.lingua), stato: statoDi(ar, email, c.lingua) };
}

// Risposta a una domanda a tempo: i punti li decide l'archivio, non il browser.
export function risposta(ar, c) {
  const { email } = c;
  const gia = ar.riga('SELECT punti, veloce FROM risposte WHERE token = ?', c.token);
  if (gia) return { punti: gia.punti, veloce: Boolean(gia.veloce), motivo: 'gia-risposta', nuovi: [], stato: statoDi(ar, email, c.lingua) };
  const ora = Date.now();
  const s = c.secondi;
  let punti = 0, motivo = null;
  const veloce = c.corretta && s <= PUNTI.secondiVeloce;
  if (!c.corretta) motivo = 'sbagliata';
  else if (s > PUNTI.secondiDomanda + 5) motivo = 'tempo-scaduto';
  else {
    punti = PUNTI.corretta + (veloce ? PUNTI.veloce : 0);
    const recente = ar.riga('SELECT id FROM risposte WHERE email = ? AND domanda = ? AND corretta = 1 AND quando > ?',
      email, c.domanda, ora - PUNTI.giorniDimezzati * 86400000);
    if (recente) { punti = Math.floor(punti / 2); motivo = 'ripetuta'; }
  }
  const valeVeloce = Boolean(veloce && punti > 0);
  const valida = s <= PUNTI.secondiDomanda + 5;
  const giusta = Boolean(c.corretta && valida);
  ar.sql.exec('INSERT INTO risposte (email, domanda, materia, argomento, giorno, quando, corretta, veloce, punti, token, valida) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    email, c.domanda, c.materia, c.argomento, giornoRoma(ora), ora, giusta ? 1 : 0, valeVeloce ? 1 : 0, punti, c.token, valida ? 1 : 0);
  aggiungi(ar, email, punti, 'domanda', c.domanda);
  aggiornaRipasso(ar, email, c.domanda, c.materia, giusta);
  const sid = sessioneCorrente(ar, email, c.materia, c.argomento);
  ar.sql.exec('UPDATE sessioni SET risposte = risposte + 1, corrette = corrette + ?, veloci = veloci + ?, punti = punti + ?, ultimo = ?, materia = ?, argomento = ? WHERE id = ?',
    giusta ? 1 : 0, valeVeloce ? 1 : 0, punti, ora, c.materia, c.argomento, sid);
  const nuovi = controllaPremi(ar, email, c.catalogo);
  return { punti, veloce: valeVeloce, motivo, nuovi: conNomi(ar, email, nuovi, c.lingua), stato: statoDi(ar, email, c.lingua) };
}

// ---------- ripasso dilazionato ----------
// Risposta sbagliata (o fuori tempo): la domanda entra nel ripasso e torna domani.
// Risposta corretta a una domanda del ripasso arrivata alla sua data: passa all'intervallo successivo; dopo l'ultimo esce.
function aggiornaRipasso(ar, email, domanda, materia, giusta) {
  const oggi = giornoRoma();
  const r = ar.riga('SELECT casella, scadenza FROM ripasso WHERE email = ? AND domanda = ?', email, domanda);
  if (!giusta) {
    ar.sql.exec(`INSERT INTO ripasso (email, domanda, materia, casella, scadenza) VALUES (?, ?, ?, 0, ?)
      ON CONFLICT(email, domanda) DO UPDATE SET casella = 0, scadenza = excluded.scadenza`, email, domanda, materia, spostaGiorno(oggi, INTERVALLI_RIPASSO[0]));
    return;
  }
  if (!r || r.scadenza > oggi) return;
  const casella = r.casella + 1;
  if (casella >= INTERVALLI_RIPASSO.length) ar.sql.exec('DELETE FROM ripasso WHERE email = ? AND domanda = ?', email, domanda);
  else ar.sql.exec('UPDATE ripasso SET casella = ?, scadenza = ? WHERE email = ? AND domanda = ?', casella, spostaGiorno(oggi, INTERVALLI_RIPASSO[casella]), email, domanda);
}
// Domande da ripassare oggi: per una materia (elenco degli id) oppure il conteggio per ogni materia.
export function ripassoOggi(ar, c) {
  const oggi = giornoRoma();
  if (c.materia) return { domande: ar.righe('SELECT domanda FROM ripasso WHERE email = ? AND materia = ? AND scadenza <= ? ORDER BY scadenza, casella', c.email, c.materia, oggi).map((r) => r.domanda) };
  return {
    oggi: ar.righe('SELECT materia, COUNT(*) AS n FROM ripasso WHERE email = ? AND scadenza <= ? GROUP BY materia', c.email, oggi),
    prossimi: ar.righe('SELECT materia, COUNT(*) AS n, MIN(scadenza) AS da FROM ripasso WHERE email = ? AND scadenza > ? GROUP BY materia', c.email, oggi),
  };
}

// ---------- progressi per argomento e data dell'esame ----------
export function registraVista(ar, c) {
  ar.sql.exec(`INSERT INTO viste (email, materia, argomento, tipo, n, quando) VALUES (?, ?, ?, ?, ?, ?)
    ON CONFLICT(email, materia, argomento, tipo, n) DO UPDATE SET quando = excluded.quando`, c.email, c.materia, c.argomento, c.tipo, c.n || 0, Date.now());
  return { ok: true };
}
export function progressi(ar, c) {
  const { email, materia } = c;
  const out = {};
  const voce = (a) => (out[a] ??= { teoria: false, schede: 0, esercizi: 0, domande: 0 });
  for (const r of ar.righe('SELECT argomento, tipo, COUNT(*) AS k FROM viste WHERE email = ? AND materia = ? GROUP BY argomento, tipo', email, materia)) {
    if (r.tipo === 'teoria') voce(r.argomento).teoria = true;
    else if (r.tipo === 'esercizi-svolti') voce(r.argomento).schede = r.k;
  }
  for (const r of ar.righe('SELECT argomento, COUNT(*) AS k FROM esercizi WHERE email = ? AND materia = ? GROUP BY argomento', email, materia)) voce(r.argomento).esercizi = r.k;
  for (const r of ar.righe('SELECT argomento, COUNT(DISTINCT domanda) AS k FROM risposte WHERE email = ? AND materia = ? AND corretta = 1 GROUP BY argomento', email, materia)) voce(r.argomento).domande = r.k;
  const e = ar.riga('SELECT data FROM esami WHERE email = ? AND materia = ?', email, materia);
  return { argomenti: out, esame: e?.data || null };
}
export function salvaEsame(ar, c) {
  if (c.data) ar.sql.exec(`INSERT INTO esami (email, materia, data) VALUES (?, ?, ?) ON CONFLICT(email, materia) DO UPDATE SET data = excluded.data`, c.email, c.materia, c.data);
  else ar.sql.exec('DELETE FROM esami WHERE email = ? AND materia = ?', c.email, c.materia);
  return { ok: true };
}

// Esercizio da fare risolto (risposta verificata dal Worker): EXP la prima volta, poi nulla.
export function esercizioRisolto(ar, c) {
  const { email } = c;
  if (ar.riga('SELECT id FROM esercizi WHERE email = ? AND id = ?', email, c.id)) return { punti: 0, motivo: 'gia-risolto', nuovi: [], stato: statoDi(ar, email, c.lingua) };
  const ora = Date.now();
  ar.sql.exec('INSERT INTO esercizi (email, id, materia, argomento, quando) VALUES (?, ?, ?, ?, ?)', email, c.id, c.materia, c.argomento, ora);
  aggiungi(ar, email, PUNTI.esercizio, 'esercizio', c.id);
  const sid = sessioneCorrente(ar, email, c.materia, c.argomento);
  ar.sql.exec('UPDATE sessioni SET punti = punti + ?, ultimo = ? WHERE id = ?', PUNTI.esercizio, ora, sid);
  const nuovi = controllaPremi(ar, email, c.catalogo);
  return { punti: PUNTI.esercizio, nuovi: conNomi(ar, email, nuovi, c.lingua), stato: statoDi(ar, email, c.lingua) };
}

// Riepilogo della sessione in corso; con chiudi = true la sessione si chiude.
export function riepilogo(ar, c) {
  const { email } = c;
  const s = ar.riga('SELECT * FROM sessioni WHERE email = ? ORDER BY ultimo DESC LIMIT 1', email);
  const l = c.lingua;
  if (!s) return { sessione: null, stato: statoDi(ar, email, l) };
  if (c.chiudi) ar.sql.exec('UPDATE sessioni SET chiusa = 1 WHERE id = ?', s.id);
  const premi = conNomi(ar, email, ar.righe('SELECT codice, punti FROM premi WHERE email = ? AND quando BETWEEN ? AND ?', email, s.inizio, Date.now()), l);
  const { sett, righe } = obiettiviSettimana(ar, email);
  const obiettivi = righe.map((o) => progressoObiettivo(ar, email, o, sett, l));
  return {
    sessione: {
      inizio: s.inizio, minuti: s.minuti, risposte: s.risposte, corrette: s.corrette, veloci: s.veloci,
      materia: s.materia, argomento: s.argomento, titolo: s.argomento ? titoloArgomento(s.materia, s.argomento, l) : null,
      puntiCorrette: s.punti - (s.punti_studio ?? s.minuti),
      puntiStudio: s.punti_studio ?? s.minuti,
      premi, punti: s.punti + premi.reduce((x, p) => x + p.punti, 0),
    },
    obiettivi, stato: statoDi(ar, email, l),
  };
}

// Pagina "Il tuo percorso" nell'account.
export function percorso(ar, c) {
  const { email } = c;
  if (c.catalogo && Object.keys(c.catalogo).length) ultimoCatalogo = c.catalogo;
  const l = c.lingua;
  const en = l === 'en';
  const { sett, righe } = obiettiviSettimana(ar, email);
  const da = sett[0], a = sett[6];
  const oggi = giornoRoma();
  const giorniAttivi = new Set(ar.righe(`SELECT giorno FROM studio WHERE email = ? AND giorno BETWEEN ? AND ? AND minuti > 0
    UNION SELECT giorno FROM risposte WHERE email = ? AND giorno BETWEEN ? AND ? AND valida = 1`, email, da, a, email, da, a).map((r) => r.giorno));
  const premi = conNomi(ar, email, ar.righe('SELECT codice, punti, quando FROM premi WHERE email = ? AND codice NOT LIKE \'obiettivo-%\' ORDER BY quando', email), l);
  const stato = statoDi(ar, email, l);
  // Traguardi ancora da raggiungere: i tre fissi, le materie con domande, il prossimo livello tondo.
  const presi = new Set(premi.map((p) => p.codice));
  // Avanzamento di ogni traguardo (fatto su totale): serve al pannello per mostrare il più vicino.
  const corretteTot = ar.riga('SELECT COUNT(*) AS c FROM risposte WHERE email = ? AND corretta = 1', email).c;
  const minutiTot = ar.riga('SELECT COALESCE(SUM(minuti), 0) AS c FROM studio WHERE email = ?', email).c;
  const avanzamento = { 'prima-corretta': [corretteTot, 1], 'corrette-100': [corretteTot, 100], 'studio-10h': [minutiTot, 600] };
  const daFare = [
    ...TRAGUARDI_FISSI.filter((t) => !presi.has(t.codice)).map((t) => {
      const [fatto, totale] = avanzamento[t.codice] || [0, 1];
      return { nome: nomePremio(ar, email, t.codice, l), punti: t.punti, fatto: Math.min(fatto, totale), totale, unita: t.codice === 'studio-10h' ? 'min' : '' };
    }),
    ...Object.entries(c.catalogo || {}).filter(([m, args]) => args.length && !presi.has(`materia-${m}`)).map(([m, args]) => {
      const provati = ar.riga(`SELECT COUNT(DISTINCT argomento) AS c FROM risposte WHERE email = ? AND valida = 1 AND materia = ? AND argomento IN (${args.map(() => '?').join(',')})`, email, m, ...args).c;
      return { nome: nomePremio(ar, email, `materia-${m}`, l), punti: PUNTI_MATERIA_COMPLETA, fatto: provati, totale: args.length, unita: '' };
    }),
  ];
  const prossimoTondo = Math.min(100, Math.floor(stato.livello / 10) * 10 + 10);
  if (!presi.has(`livello-${prossimoTondo}`)) daFare.push({ nome: nomePremio(ar, email, `livello-${prossimoTondo}`, l), punti: puntiTraguardoLivello(prossimoTondo), fatto: stato.livello, totale: prossimoTondo, unita: '' });
  // Il traguardo più vicino (in proporzione), tra quelli già cominciati se ce ne sono.
  const prossimo = [...daFare].sort((x, y) => (y.fatto / y.totale) - (x.fatto / x.totale))[0] || null;
  return {
    stato,
    settimana: {
      giorni: sett.map((g) => ({ giorno: g, attivo: giorniAttivi.has(g), oggi: g === oggi })),
      minuti: ar.riga('SELECT COALESCE(SUM(minuti), 0) AS c FROM studio WHERE email = ? AND giorno BETWEEN ? AND ?', email, da, a).c,
      corrette: ar.riga('SELECT COUNT(*) AS c FROM risposte WHERE email = ? AND giorno BETWEEN ? AND ? AND corretta = 1', email, da, a).c,
    },
    oggi: {
      minuti: ar.riga('SELECT COALESCE(SUM(minuti), 0) AS c FROM studio WHERE email = ? AND giorno = ?', email, oggi).c,
      corrette: ar.riga('SELECT COUNT(*) AS c FROM risposte WHERE email = ? AND giorno = ? AND corretta = 1', email, oggi).c,
    },
    obiettivi: righe.map((o) => progressoObiettivo(ar, email, o, sett, l)),
    traguardi: premi.map((p) => ({ nome: p.nome, punti: p.punti, quando: p.quando })),
    daFare,
    prossimo,
    // Esami con la data inserita, dal più vicino (in home il primo accanto al titolo).
    esami: ar.righe('SELECT materia, data FROM esami WHERE email = ? AND data >= ? ORDER BY data LIMIT 3', email, oggi)
      .map((e) => ({ ...e, titolo: titoloMateria(e.materia, l) })),
    lega: riassuntoLega(ar, email, l),
    sessioni: ar.righe('SELECT inizio, minuti, risposte, corrette, punti, materia, argomento FROM sessioni WHERE email = ? ORDER BY ultimo DESC LIMIT 5', email)
      .map((s) => ({ ...s, titolo: s.argomento ? titoloArgomento(s.materia, s.argomento, l) : null })),
  };
}
