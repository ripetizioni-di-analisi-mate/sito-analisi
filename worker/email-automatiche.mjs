import { MATERIE } from '../src/data/materie.ts';
import { MATERIE_EN } from '../src/data/materie-en.ts';
import { componiEmail, intestazioniDisiscrizione, inviaEmailResend, mittenteEmail, SITO_EMAIL } from './email.mjs';
import { componiPromemoria } from './promemoria.mjs';
import { componiAvvisoLega } from './avvisi-lega.mjs';
import { registraAvvioEmail, registraInviiEmail, storicoEmail } from './storico-email.mjs';

const GIORNO = 86400000;
const ORA = GIORNO / 24;
const PERCENTUALE = 15;
const ORIGINE = 'analisi-1';
const DESTINAZIONE = 'analisi-2';
const MATERIE_ATTIVE = new Map(MATERIE.filter((m) => m.attiva).map((m) => [m.slug, m]));
export const FLUSSI_EMAIL = ['prima-prova', 'studio', 'seconda-materia'];
const ISO = (t) => new Date(t).toISOString();
const giornoDi = (t) => ISO(t).slice(0, 10);
const pref = (lingua) => lingua === 'en' ? '/en' : '';
const titoloDi = (slug, lingua) => (lingua === 'en' && MATERIE_EN[slug]?.titolo) || MATERIE_ATTIVE.get(slug)?.titolo;

export function creaTabelleEmail(sql) {
  sql.exec(`
    CREATE TABLE IF NOT EXISTS email_preferenze (
      email TEXT PRIMARY KEY, materia TEXT, richiesto INTEGER, token TEXT, confermato INTEGER, revocato INTEGER
    );
    CREATE INDEX IF NOT EXISTS email_preferenze_richiesto ON email_preferenze(richiesto);
    CREATE TABLE IF NOT EXISTS email_consensi (
      id INTEGER PRIMARY KEY, email TEXT NOT NULL, evento TEXT NOT NULL, quando INTEGER NOT NULL, versione INTEGER NOT NULL
    );
    CREATE INDEX IF NOT EXISTS email_consensi_quando ON email_consensi (quando);
    CREATE TABLE IF NOT EXISTS email_config (chiave TEXT PRIMARY KEY, valore TEXT NOT NULL);
    CREATE TABLE IF NOT EXISTS email_automatiche (
      id TEXT PRIMARY KEY, email TEXT NOT NULL, tipo TEXT NOT NULL, evento TEXT NOT NULL,
      materia TEXT NOT NULL, argomento TEXT, riferimento INTEGER, prossimo INTEGER NOT NULL, scadenza INTEGER NOT NULL,
      stato TEXT NOT NULL DEFAULT 'attesa', iniziato INTEGER, payload TEXT, tentativi INTEGER NOT NULL DEFAULT 0,
      inviato INTEGER, resend_id TEXT, consegna TEXT, errore INTEGER, sconto TEXT, scade_sconto INTEGER,
      acquisto TEXT, UNIQUE(email, tipo, evento)
    );
    CREATE INDEX IF NOT EXISTS email_automatiche_coda ON email_automatiche(stato, prossimo);
    CREATE INDEX IF NOT EXISTS email_automatiche_inviato ON email_automatiche(inviato);
    CREATE UNIQUE INDEX IF NOT EXISTS email_automatiche_sconto ON email_automatiche(sconto) WHERE sconto IS NOT NULL;
    CREATE INDEX IF NOT EXISTS acquisti_email_materia ON acquisti(email, materia, creato);
  `);
}

function preferenze(ar, email) {
  const p = ar.riga('SELECT materia, richiesto, token, confermato, revocato FROM email_preferenze WHERE email = ?', email);
  const studio = ar.riga('SELECT COALESCE(promemoria, 1) AS attivo FROM utenti WHERE email = ?', email)?.attivo === 1;
  return { studio, offerte: Boolean(p?.confermato), inAttesa: Boolean(p?.token), materia: p?.materia || null };
}

function disattivaOfferte(ar, email, ora) {
  const scelta = ar.riga('SELECT confermato, token FROM email_preferenze WHERE email = ?', email);
  if (!scelta?.confermato && !scelta?.token) return;
  ar.sql.exec('UPDATE email_preferenze SET token = NULL, confermato = NULL, revocato = ? WHERE email = ?', ora, email);
  ar.sql.exec(`INSERT INTO email_consensi (email, evento, quando, versione) VALUES (?, 'revoca', ?, 1)`, email, ora);
  ar.sql.exec(`UPDATE email_automatiche SET stato = 'annullata', payload = NULL
    WHERE email = ? AND tipo != 'studio' AND stato IN ('attesa', 'invio')`, email);
}

function flussoAttivo(ar, tipo) {
  return ar.riga('SELECT valore FROM email_config WHERE chiave = ?', tipo)?.valore !== '0';
}

function disponibile(env, tipo) {
  if (!env.RESEND_API_KEY) return false;
  if (tipo === 'studio') return env.PROMEMORIA !== '0';
  if (tipo === 'seconda-materia') return Boolean(env.STRIPE_SECRET_KEY && MATERIE_ATTIVE.has(DESTINAZIONE));
  return true;
}

export function archivioEmail(ar, p, c) {
  const ora = Date.now();
  switch (p) {
    case '/em-preferenze':
      return preferenze(ar, c.email);
    case '/em-salva': {
      const r = ar.riga('SELECT richiesto, token, confermato FROM email_preferenze WHERE email = ?', c.email);
      const materia = MATERIE_ATTIVE.has(c.materia) ? c.materia : null;
      if (typeof c.studio === 'boolean') {
        ar.sql.exec('UPDATE utenti SET avvisi_lega = COALESCE(avvisi_lega, promemoria, 1), promemoria = ? WHERE email = ?', Number(c.studio), c.email);
        if (!c.studio) ar.sql.exec('DELETE FROM promemoria_coda WHERE email = ?', c.email);
      }
      if (!c.offerte) {
        disattivaOfferte(ar, c.email, ora);
        return preferenze(ar, c.email);
      }
      ar.sql.exec(`INSERT INTO email_preferenze (email, materia) VALUES (?, ?)
        ON CONFLICT(email) DO UPDATE SET materia = excluded.materia`, c.email, materia);
      if (r?.confermato || (r?.richiesto && ora - r.richiesto < GIORNO)) return preferenze(ar, c.email);
      const richieste = ar.riga('SELECT COUNT(*) AS n FROM email_preferenze WHERE richiesto >= ?', ora - GIORNO)?.n || 0;
      if (richieste >= 20) return { ...preferenze(ar, c.email), limite: true };
      const token = crypto.randomUUID();
      ar.sql.exec('UPDATE email_preferenze SET richiesto = ?, token = ? WHERE email = ?', ora, token, c.email);
      return { ...preferenze(ar, c.email), token };
    }
    case '/em-conferma-fallita':
      ar.sql.exec('UPDATE email_preferenze SET token = NULL WHERE email = ? AND token = ?', c.email, c.token);
      return { ok: true };
    case '/em-conferma': {
      const modifica = ar.sql.exec(`UPDATE email_preferenze SET confermato = ?, token = NULL, revocato = NULL
        WHERE email = ? AND token = ? AND richiesto >= ?`, ora, c.email, c.token, ora - 2 * GIORNO);
      if (modifica.rowsWritten) ar.sql.exec(`INSERT INTO email_consensi (email, evento, quando, versione) VALUES (?, 'conferma', ?, 1)`, c.email, ora);
      return { ok: modifica.rowsWritten > 0 };
    }
    case '/em-disattiva':
      disattivaOfferte(ar, c.email, ora);
      return { ok: true };
    case '/em-offerta': {
      const r = ar.riga(`SELECT sconto, scade_sconto FROM email_automatiche
        WHERE email = ? AND tipo = 'seconda-materia' AND materia = ? AND stato = 'inviata'
        AND scade_sconto > ? AND acquisto IS NULL AND sconto IS NOT NULL
        AND NOT EXISTS (SELECT 1 FROM abilitazioni WHERE email = ? AND materia = ?)`,
        c.email, c.materia, ora, c.email, c.materia);
      return r ? { id: r.sconto, tipo: 'seconda-materia', percentuale: PERCENTUALE, scade: r.scade_sconto } : {};
    }
    case '/em-acquisto':
      ar.sql.exec(`UPDATE email_automatiche SET acquisto = ? WHERE sconto = ? AND email = ? AND materia = ? AND acquisto IS NULL`,
        c.transazione, c.sconto, c.email, c.materia);
      return { ok: true };
    case '/em-interruttore':
      if (!FLUSSI_EMAIL.includes(c.tipo) || typeof c.attivo !== 'boolean') return { errore: 'Flusso non valido.' };
      ar.sql.exec(`INSERT INTO email_config (chiave, valore) VALUES (?, ?) ON CONFLICT(chiave) DO UPDATE SET valore = excluded.valore`, c.tipo, c.attivo ? '1' : '0');
      return { ok: true };
    case '/em-registra':
      registraInviiEmail(ar.sql, c.righe);
      return { ok: true };
    case '/em-storico':
      return storicoEmail(ar, c, ora);
    case '/em-dashboard': {
      const conteggi = ar.righe(`SELECT tipo, COUNT(inviato) AS inviate,
        SUM(CASE WHEN consegna = 'consegnata' THEN 1 ELSE 0 END) AS consegnate,
        SUM(CASE WHEN stato = 'errore' OR consegna = 'errore' THEN 1 ELSE 0 END) AS errori,
        SUM(CASE WHEN stato IN ('attesa', 'invio') THEN 1 ELSE 0 END) AS coda,
        COUNT(acquisto) AS acquisti
        FROM email_automatiche WHERE prossimo >= ? OR inviato >= ? GROUP BY tipo`, ora - 30 * GIORNO, ora - 30 * GIORNO);
      return {
        flussi: FLUSSI_EMAIL.map((tipo) => ({
          tipo, attivo: flussoAttivo(ar, tipo), disponibile: disponibile(ar.env, tipo),
          avvio: Number(ar.riga('SELECT valore FROM email_config WHERE chiave = ?', 'avvio-email/' + tipo)?.valore) || null,
          ...conteggi.find((r) => r.tipo === tipo),
        })),
        consensi: ar.riga('SELECT COUNT(*) AS n FROM email_preferenze WHERE confermato IS NOT NULL')?.n || 0,
        revoche: ar.riga(`SELECT COUNT(*) AS n FROM email_consensi WHERE evento = 'revoca' AND quando >= ?`, ora - 30 * GIORNO)?.n || 0,
        statoConsegne: ar.riga("SELECT valore FROM email_config WHERE chiave = 'stato-consegne'")?.valore || null,
      };
    }
    default:
      return null;
  }
}

const ultimaAttivita = 'MAX(COALESCE(u.attivo, 0), COALESCE(s.ultimo, 0), COALESCE((SELECT MAX(d.ultimo_uso) FROM dispositivi d WHERE d.email = u.email), 0))';
const conSessione = `JOIN sessioni s ON s.id = (SELECT id FROM sessioni
  WHERE email = u.email AND materia IS NOT NULL AND argomento IS NOT NULL ORDER BY ultimo DESC LIMIT 1)`;

function accoda(ar, ora, prove) {
  const inserisci = (tipo, r, evento, scadenza) => ar.sql.exec(`INSERT OR IGNORE INTO email_automatiche
    (id, email, tipo, evento, materia, argomento, riferimento, prossimo, scadenza) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    crypto.randomUUID(), r.email, tipo, evento, r.materia, r.argomento || null, r.ultima || null, ora, scadenza);

  if (flussoAttivo(ar, 'prima-prova')) {
    for (const r of ar.righe(`SELECT u.email, u.creato, e.materia, e.confermato
      FROM email_preferenze e JOIN utenti u ON u.email = e.email
      WHERE u.hash IS NOT NULL AND e.confermato IS NOT NULL AND u.creato BETWEEN ? AND ?
      AND NOT EXISTS (SELECT 1 FROM sessioni WHERE email = u.email AND materia IS NOT NULL)
      AND NOT EXISTS (SELECT 1 FROM acquisti WHERE email = u.email)
      AND NOT EXISTS (SELECT 1 FROM email_automatiche f WHERE f.email = u.email AND f.tipo = 'prima-prova' AND f.evento = u.creato)
      ORDER BY u.creato LIMIT 40`, ISO(ora - 6 * GIORNO), ISO(ora - 2 * GIORNO))) {
      if (prove[r.materia]) inserisci('prima-prova', r, r.creato, Date.parse(r.creato) + 7 * GIORNO);
    }
  }

  if (flussoAttivo(ar, 'studio') && disponibile(ar.env, 'studio')) {
    for (const giorni of [3, 10]) {
      for (const r of ar.righe(`SELECT u.email, s.materia, s.argomento, ${ultimaAttivita} AS ultima
        FROM utenti u ${conSessione} WHERE u.hash IS NOT NULL AND COALESCE(u.promemoria, 1) = 1
        AND u.attivo <= ? AND ${ultimaAttivita} BETWEEN ? AND ?
        AND NOT EXISTS (SELECT 1 FROM email_automatiche f WHERE f.email = u.email AND f.tipo = 'studio'
          AND f.evento = CAST(${ultimaAttivita} AS TEXT) || '/' || ?)
        ORDER BY ultima LIMIT 40`, ora - giorni * GIORNO, ora - (giorni + 2) * GIORNO, ora - giorni * GIORNO, giorni)) {
        inserisci('studio', r, `${r.ultima}/${giorni}`, r.ultima + (giorni + 2) * GIORNO);
      }
    }
  }

  if (flussoAttivo(ar, 'seconda-materia') && disponibile(ar.env, 'seconda-materia')) {
    for (const r of ar.righe(`SELECT e.email, MIN(a.creato) AS creato, ? AS materia
      FROM email_preferenze e JOIN acquisti a ON a.email = e.email AND a.materia = ?
      JOIN utenti u ON u.email = e.email AND u.hash IS NOT NULL
      WHERE e.confermato IS NOT NULL AND a.creato BETWEEN ? AND ?
      AND NOT EXISTS (SELECT 1 FROM abilitazioni WHERE email = e.email AND materia = ?)
      AND NOT EXISTS (SELECT 1 FROM acquisti WHERE email = e.email AND materia = ?)
      AND NOT EXISTS (SELECT 1 FROM email_automatiche f WHERE f.email = e.email AND f.tipo = 'seconda-materia' AND f.evento = ?)
      GROUP BY e.email ORDER BY creato LIMIT 40`, DESTINAZIONE, ORIGINE, ISO(ora - 15 * GIORNO), ISO(ora - 7 * GIORNO), DESTINAZIONE, DESTINAZIONE, DESTINAZIONE)) {
      inserisci('seconda-materia', r, DESTINAZIONE, Date.parse(r.creato) + 16 * GIORNO);
    }
  }
}

function destinatarioValido(ar, f) {
  const u = ar.riga(`SELECT u.nome, u.lingua, u.exp, COALESCE(u.promemoria, 1) AS promemoria,
      MAX(COALESCE(u.attivo, 0), COALESCE((SELECT MAX(ultimo) FROM sessioni WHERE email = u.email), 0),
          COALESCE((SELECT MAX(ultimo_uso) FROM dispositivi WHERE email = u.email), 0)) AS ultima,
      e.confermato, e.materia
    FROM utenti u LEFT JOIN email_preferenze e ON e.email = u.email WHERE u.email = ? AND u.hash IS NOT NULL`, f.email);
  if (!u) return null;
  if (f.tipo === 'studio') return u.promemoria && u.ultima === f.riferimento ? u : null;
  if (!u.confermato) return null;
  if (f.tipo === 'prima-prova') {
    const iniziato = ar.riga('SELECT 1 FROM sessioni WHERE email = ? AND materia IS NOT NULL LIMIT 1', f.email)
      || ar.riga('SELECT 1 FROM acquisti WHERE email = ? LIMIT 1', f.email);
    return u.materia === f.materia && !iniziato ? u : null;
  }
  const possiede = ar.riga('SELECT 1 FROM abilitazioni WHERE email = ? AND materia = ?', f.email, f.materia)
    || ar.riga('SELECT 1 FROM acquisti WHERE email = ? AND materia = ? LIMIT 1', f.email, f.materia);
  return possiede ? null : u;
}

export function componiCampagna(f, u, prove, linkNo) {
  const lingua = u.lingua === 'en' ? 'en' : 'it';
  const en = lingua === 'en', titolo = titoloDi(f.materia, lingua);
  const saluto = u.nome ? `${en ? 'Hi' : 'Ciao'} ${u.nome},` : en ? 'Hi,' : 'Ciao,';
  const contesto = {
    lingua,
    motivo: en ? 'You confirmed that you want study suggestions and offers by email.' : 'Hai confermato di voler ricevere esercizi e offerte via email.',
    disattiva: [en ? 'Unsubscribe' : 'Disattiva esercizi e offerte', linkNo],
  };
  if (f.tipo === 'prima-prova') {
    const prova = prove[f.materia];
    if (!prova || !titolo) return null;
    return componiEmail({
      ...contesto,
      subject: en ? `Your first free exercise in ${titolo}` : `Il tuo primo esercizio gratuito di ${titolo}`,
      categoria: en ? 'Your first exercise' : 'La tua prima prova',
      anteprima: en ? 'Open a worked exercise in the subject you picked.' : 'Apri un esercizio svolto della materia che hai scelto.',
      titolo: en ? 'Start with a worked exercise' : 'Comincia da un esercizio svolto',
      righe: [saluto, en ? 'Here is a free worked exercise to get started in the subject you picked.' : 'Ti propongo un esercizio svolto gratuito per iniziare dalla materia che hai scelto.'],
      scheda: { etichetta: titolo, valore: en ? 'Free worked exercise' : prova.titolo },
      pulsante: [en ? 'Open the exercise' : 'Apri l’esercizio gratuito', `${SITO_EMAIL}${pref(lingua)}${prova.href}`],
    });
  }
  const locale = en ? 'en-IE' : 'it-IT';
  const scadenza = new Intl.DateTimeFormat(locale, { dateStyle: 'long', timeStyle: 'short', timeZone: 'Europe/Rome' }).format(f.scade_sconto);
  const euro = (x) => new Intl.NumberFormat(locale, { style: 'currency', currency: 'EUR' }).format(x);
  const prezzo = MATERIE_ATTIVE.get(DESTINAZIONE).prezzo;
  return componiEmail({
    ...contesto, bronzo: true,
    subject: en ? `15% off ${titolo}` : `${titolo} con il 15% di sconto`,
    titolo: en ? 'Your next subject is Calculus 2' : 'Il prossimo passo è Analisi 2',
    categoria: en ? 'Your personal offer' : 'Offerta riservata',
    anteprima: en ? 'An offer on the next subject in your study path.' : 'Un’offerta sulla seconda materia del tuo percorso.',
    righe: [saluto, en ? 'If Calculus 2 is on your syllabus, start with functions of several variables and multiple integrals.' : 'Se Analisi 2 è nel tuo piano di studi, puoi iniziare da funzioni di più variabili e integrali multipli con teoria ed esercizi svolti.'],
    scheda: { etichetta: titolo, prima: euro(prezzo), valore: `${euro(prezzo * (1 - PERCENTUALE / 100))} · −15%`, nota: en ? `Valid until ${scadenza} (Italian time)` : `Valida fino al ${scadenza} (ora italiana)` },
    dopo: [en ? 'Your discount applies at checkout when you sign in. You can use it once on this subject.' : 'Lo sconto si applica al pagamento quando accedi al tuo account. È valido su Analisi 2 ed è utilizzabile una sola volta.'],
    pulsante: [en ? 'Explore Calculus 2' : 'Scopri Analisi 2', `${SITO_EMAIL}${pref(lingua)}/${DESTINAZIONE}`],
  });
}

async function verificaConsegne(ar, ora) {
  const righe = ar.righe(`SELECT id, resend_id FROM email_automatiche WHERE resend_id IS NOT NULL
    AND consegna IS NULL AND inviato >= ? ORDER BY inviato LIMIT 4`, ora - 3 * GIORNO);
  for (const f of righe) {
    const r = await fetch(`https://api.resend.com/emails/${encodeURIComponent(f.resend_id)}`, {
      headers: { authorization: `Bearer ${ar.env.RESEND_API_KEY}` }, signal: AbortSignal.timeout(6000),
    }).catch(() => null);
    if (r?.status === 401 || r?.status === 403) {
      ar.sql.exec("INSERT OR REPLACE INTO email_config (chiave, valore) VALUES ('stato-consegne', 'permessi')");
      return;
    }
    if (!r?.ok) return;
    ar.sql.exec("INSERT OR REPLACE INTO email_config (chiave, valore) VALUES ('stato-consegne', 'ok')");
    const evento = (await r.json().catch(() => ({}))).last_event;
    if (['delivered', 'opened', 'clicked'].includes(evento)) ar.sql.exec("UPDATE email_automatiche SET consegna = 'consegnata' WHERE id = ?", f.id);
    if (['bounced', 'complained', 'failed', 'suppressed', 'canceled'].includes(evento)) ar.sql.exec("UPDATE email_automatiche SET consegna = 'errore' WHERE id = ?", f.id);
  }
}

export async function eseguiEmailAutomatiche(ar, { giornaliero, catalogo = {}, prove = {} }, firmaToken) {
  if (!ar.env.RESEND_API_KEY) return { inviati: 0 };
  const ora = Date.now(), oggi = giornoDi(ora);
  const abilitati = FLUSSI_EMAIL.filter((tipo) => flussoAttivo(ar, tipo) && disponibile(ar.env, tipo));
  registraAvvioEmail(ar.sql, abilitati, ora);
  ar.sql.exec(`UPDATE email_automatiche SET stato = CASE WHEN iniziato IS NULL THEN 'annullata' ELSE 'errore' END, payload = NULL
    WHERE stato IN ('attesa', 'invio') AND (scadenza <= ? OR iniziato <= ?) `, ora, ora - 22 * ORA);
  if (giornaliero) {
    ar.sql.exec('DELETE FROM email_automatiche WHERE prossimo < ? AND COALESCE(inviato, 0) < ?', ora - 90 * GIORNO, ora - 90 * GIORNO);
    ar.sql.exec('DELETE FROM email_inviate WHERE inviato < ?', ora - 91 * GIORNO);
    accoda(ar, ora, prove);
  }

  const quota = () => {
    const n = ar.riga('SELECT COUNT(*) AS n FROM email_automatiche WHERE inviato >= ? OR (stato = ? AND iniziato >= ?)', Date.parse(oggi), 'invio', Date.parse(oggi))?.n || 0;
    const rec = ar.riga("SELECT n FROM recuperi WHERE giorno = ? AND chiave = '*sito'", oggi)?.n || 0;
    const prom = ar.riga('SELECT COUNT(*) AS n FROM promemoria WHERE giorno = ?', oggi)?.n || 0;
    return Math.max(0, Math.min(20 - n, 90 - n - rec - prom));
  };
  let inviati = 0;
  for (let i = 0; i < 6 && abilitati.length; i++) {
    const f = ar.riga(`SELECT * FROM email_automatiche WHERE stato IN ('attesa','invio') AND prossimo <= ?
      AND tipo IN (${abilitati.map(() => '?').join(',')}) AND (iniziato IS NOT NULL OR ? > 0)
      ORDER BY prossimo LIMIT 1`, Date.now(), ...abilitati, quota());
    if (!f) break;
    const annulla = () => ar.sql.exec("UPDATE email_automatiche SET stato = 'annullata', payload = NULL WHERE id = ? AND stato IN ('attesa','invio')", f.id);
    const u = destinatarioValido(ar, f);
    if (!u) { annulla(); continue; }
    if (f.tipo === 'studio' && ar.riga('SELECT 1 FROM promemoria WHERE email = ? AND giorno = ?', f.email, oggi)) {
      annulla(); continue;
    }
    if (f.tipo !== 'studio') {
      const ultima = ar.riga(`SELECT MAX(COALESCE(inviato, iniziato)) AS t FROM email_automatiche
        WHERE email = ? AND tipo != 'studio' AND id != ? AND stato IN ('inviata','invio')`, f.email, f.id)?.t;
      if (ultima && Date.now() - ultima < 7 * GIORNO) {
        ar.sql.exec('UPDATE email_automatiche SET prossimo = ? WHERE id = ?', ultima + 7 * GIORNO, f.id);
        continue;
      }
    }
    ar.sql.exec(`UPDATE email_automatiche SET stato = 'invio', prossimo = ?, iniziato = COALESCE(iniziato, ?), tentativi = tentativi + 1 WHERE id = ?`,
      Date.now() + 2 * ORA, Date.now(), f.id);
    try {
      if (f.tipo === 'seconda-materia' && !f.sconto) {
        const scade = f.scade_sconto || Date.now() + 7 * GIORNO;
        f.sconto = 'STUDIO-' + f.id;
        f.scade_sconto = scade;
        ar.sql.exec('UPDATE email_automatiche SET sconto = ?, scade_sconto = ? WHERE id = ?', f.sconto, scade, f.id);
      }
      if (!destinatarioValido(ar, f)) { annulla(); continue; }
      if (!flussoAttivo(ar, f.tipo)) continue;
      const scopo = f.tipo === 'studio' ? 'promemoria' : 'offerte-email';
      const percorso = f.tipo === 'studio' ? '/promemoria/disattiva' : '/email/disattiva';
      const token = await firmaToken(ar.env, { scopo, r: f.email, l: u.lingua });
      const linkNo = `${SITO_EMAIL}${percorso}?t=${encodeURIComponent(token)}`;
      let mail = f.payload && JSON.parse(f.payload);
      if (!mail) {
        if (f.tipo === 'studio') {
          const n = ar.riga("SELECT COUNT(*) AS n FROM promemoria WHERE email = ?", f.email)?.n || 0;
          const m = componiPromemoria({ ...f, ...u, inviati: n, materia: f.materia }, catalogo, linkNo);
          mail = { subject: m.oggetto, html: m.html, text: m.testo };
        } else mail = componiCampagna(f, u, prove, linkNo);
        if (!mail) { annulla(); continue; }
        mail.from = mittenteEmail(ar.env);
        mail.headers = intestazioniDisiscrizione(linkNo);
        ar.sql.exec('UPDATE email_automatiche SET payload = ? WHERE id = ?', JSON.stringify(mail), f.id);
      }
      if (!destinatarioValido(ar, f)) { annulla(); continue; }
      if (!flussoAttivo(ar, f.tipo)) continue;
      const chiave = `flusso-email/${f.id}`;
      const r = await inviaEmailResend(ar.env, f.email, mail, chiave);
      if (r.ok) {
        const inviato = Date.now();
        ar.sql.exec("UPDATE email_automatiche SET stato = 'inviata', inviato = ?, resend_id = ?, payload = NULL, errore = NULL WHERE id = ?", inviato, r.id, f.id);
        if (f.tipo === 'studio') {
          ar.sql.exec('INSERT OR IGNORE INTO promemoria (email, giorno) VALUES (?, ?)', f.email, oggi);
          ar.sql.exec('DELETE FROM promemoria_coda WHERE email = ?', f.email);
        }
        registraInviiEmail(ar.sql, [{ id: chiave, tipo: f.tipo, email: f.email, oggetto: mail.subject, inviato }]);
        inviati++;
      } else if (r.stato === 409 || r.stato === 429 || r.stato >= 500) {
        ar.sql.exec('UPDATE email_automatiche SET errore = ? WHERE id = ?', r.stato, f.id);
        if (r.stato === 429) break;
      } else {
        ar.sql.exec("UPDATE email_automatiche SET stato = 'errore', errore = ?, payload = NULL WHERE id = ?", r.stato, f.id);
      }
    } catch {
      ar.sql.exec('UPDATE email_automatiche SET errore = 503 WHERE id = ?', f.id);
    }
  }
  if (!inviati) await verificaConsegne(ar, ora);
  return { inviati };
}

export async function inviaConfermaOfferte(env, email, token, lingua, firmaToken) {
  const en = lingua === 'en';
  const t = await firmaToken(env, { scopo: 'conferma-offerte-email', r: email, c: token, l: lingua, exp: Date.now() + 2 * GIORNO });
  const link = `${SITO_EMAIL}/email/conferma?t=${encodeURIComponent(t)}`;
  return inviaEmailResend(env, email, componiEmail({
    lingua, subject: en ? 'Confirm your email preferences' : 'Conferma le tue preferenze email',
    categoria: en ? 'Email preferences' : 'Preferenze email',
    righe: [en ? 'Confirm to receive study suggestions and offers from Ripetizioni di Analisi. You can change your choice whenever you like.' : 'Conferma la tua scelta per ricevere esercizi gratuiti e offerte da Ripetizioni di Analisi. Puoi cambiare preferenza in qualsiasi momento.'],
    pulsante: [en ? 'Review and confirm' : 'Rivedi e conferma', link],
  }), `consenso-offerte/${token}`, 'preferenze-email');
}

export function paginaPreferenzeEmail(tipo, lingua, valido, fatto) {
  const en = lingua === 'en', conferma = tipo === 'conferma';
  const t = en ? 'Email preferences' : 'Preferenze email';
  const azione = conferma ? (en ? 'Confirm' : 'Conferma') : (en ? 'Unsubscribe' : 'Disattiva');
  const testo = !valido ? (en ? 'This link is invalid or expired.' : 'Il link è scaduto o non è valido.')
    : fatto ? (conferma ? (en ? 'Your email preferences have been confirmed.' : 'Le tue preferenze email sono confermate.')
      : (en ? 'You are unsubscribed from study suggestions and offers.' : 'Hai disattivato le email con esercizi e offerte.'))
      : conferma ? (en ? 'Confirm that you want study suggestions and offers by email.' : 'Confermi di voler ricevere esercizi gratuiti e offerte via email?')
        : (en ? 'Unsubscribe from emails with study suggestions and offers?' : 'Vuoi disattivare le email con esercizi gratuiti e offerte?');
  return `<!doctype html><html lang="${en ? 'en' : 'it'}"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="robots" content="noindex"><title>${t}</title>
<style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#faf9f6;color:#23302e;font:17px/1.55 Georgia,serif}main{max-width:30rem;margin:16px;padding:24px;background:white;border:1px solid #e1dcd2;border-radius:12px}button{background:#214f50;color:white;border:0;border-radius:8px;padding:10px 15px;font:700 15px Arial;cursor:pointer}a{color:#214f50}</style>
<main><h1>${t}</h1><p>${testo}</p>${valido && !fatto ? `<form method="post"><button>${azione}</button></form>` : ''}
<p><a href="${pref(lingua)}/account#impostazioni">${en ? 'Your account' : 'Il tuo account'}</a></p></main></html>`;
}

export function esempioEmail(tipo) {
  const linkNo = `${SITO_EMAIL}/account#impostazioni`;
  if (tipo === 'lega') return componiAvvisoLega({ nome: 'Andrea', lega: 0, da: 2, a: 3 }, linkNo);
  if (tipo === 'studio') {
    const m = componiPromemoria({ nome: 'Andrea', exp: 310, materia: ORIGINE, argomento: 'limiti' }, { [ORIGINE]: ['limiti'] }, linkNo);
    return { subject: m.oggetto, html: m.html, text: m.testo };
  }
  return componiCampagna({ tipo, materia: tipo === 'prima-prova' ? ORIGINE : DESTINAZIONE, scade_sconto: Date.now() + 7 * GIORNO },
    { nome: 'Andrea' }, { [ORIGINE]: { titolo: 'Limiti di rapporti di polinomi in un punto', href: '/analisi-1/limiti/esercizi-svolti/1' } }, linkNo);
}
