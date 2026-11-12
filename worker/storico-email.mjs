const GIORNO = 86_400_000;
const FUSO = 'Europe/Rome';
const dataRoma = new Intl.DateTimeFormat('sv-SE', { timeZone: FUSO, year: 'numeric', month: '2-digit', day: '2-digit' });
const offsetRoma = new Intl.DateTimeFormat('en', { timeZone: FUSO, timeZoneName: 'longOffset' });

export const TIPI_EMAIL = {
  'prima-prova': 'Prima prova',
  studio: 'Riprendi lo studio',
  'seconda-materia': 'Seconda materia',
  lega: 'Sorpasso in lega',
  promemoria: 'Promemoria di studio',
  'preferenze-email': 'Conferma preferenze email',
  'recupero-password': 'Recupero password',
  'lezione-confermata': 'Conferma lezione',
  'lezione-promemoria': 'Promemoria lezione',
  'lezione-spostata': 'Spostamento lezione',
  'lezione-disdetta': 'Disdetta lezione',
  'corso-gruppo': 'Iscrizione a corso di gruppo',
  'premio-invito': 'Premio invito',
  'acquisto-digitale': 'Conferma acquisto',
  recesso: 'Conferma richiesta di recesso',
  'avviso-recesso': 'Avviso di recesso al titolare',
  prova: 'Email di prova',
  promozione: 'Promozione manuale',
};

export function preparaStoricoEmail(ar, ora) {
  const { sql } = ar;
  sql.exec(`
    CREATE TABLE IF NOT EXISTS email_inviate (
      id TEXT PRIMARY KEY, tipo TEXT NOT NULL, email TEXT NOT NULL, oggetto TEXT,
      inviato INTEGER NOT NULL, solo_data INTEGER NOT NULL DEFAULT 0
    );
    CREATE INDEX IF NOT EXISTS email_inviate_data ON email_inviate(inviato DESC, id DESC);
  `);
  if (ar.riga("SELECT 1 FROM email_config WHERE chiave = 'storico-email-dal'")) return;
  const da = ora - 91 * GIORNO;
  sql.exec(`INSERT OR IGNORE INTO email_inviate (id, tipo, email, inviato)
    SELECT 'flusso-email/' || id, tipo, email, inviato FROM email_automatiche WHERE inviato >= ?`, da);
  sql.exec(`INSERT OR IGNORE INTO email_inviate (id, tipo, email, inviato)
    SELECT 'lega-sorpasso/' || id, 'lega', email, inviato FROM leghe_avvisi WHERE inviato >= ?`, da);
  sql.exec(`INSERT OR IGNORE INTO email_inviate (id, tipo, email, inviato, solo_data)
    SELECT 'promemoria/' || p.giorno || '/' || p.email, 'promemoria', p.email,
      unixepoch(p.giorno || 'T12:00:00Z') * 1000, 1
    FROM promemoria p WHERE p.giorno >= ? AND NOT EXISTS (
      SELECT 1 FROM email_automatiche f WHERE f.email = p.email AND f.tipo = 'studio'
        AND f.inviato >= unixepoch(p.giorno) * 1000 AND f.inviato < (unixepoch(p.giorno) + 86400) * 1000
    )`, new Date(da).toISOString().slice(0, 10));
  sql.exec(`INSERT OR IGNORE INTO email_inviate (id, tipo, email, inviato)
    SELECT 'conferma-digitale-' || id, 'acquisto-digitale', email, unixepoch(conferma) * 1000
    FROM ordini_stripe WHERE conferma >= ?`, new Date(da).toISOString());
  sql.exec(`INSERT OR IGNORE INTO email_config (chiave, valore)
    SELECT 'avvio-email/' || tipo, MIN(iniziato) FROM email_automatiche WHERE iniziato IS NOT NULL GROUP BY tipo`);
  sql.exec("INSERT OR IGNORE INTO email_config (chiave, valore) VALUES ('storico-email-dal', ?)", String(ora));
}

export function registraAvvioEmail(sql, tipi, ora) {
  for (const tipo of tipi) {
    sql.exec('INSERT OR IGNORE INTO email_config (chiave, valore) VALUES (?, ?)', 'avvio-email/' + tipo, String(ora));
  }
}

export function registraInviiEmail(sql, righe = []) {
  const invii = righe.filter((r) => Object.hasOwn(TIPI_EMAIL, r.tipo));
  if (!invii.length) return;
  sql.exec(`INSERT OR IGNORE INTO email_inviate (id, tipo, email, oggetto, inviato)
    SELECT json_extract(value, '$.id'), json_extract(value, '$.tipo'), json_extract(value, '$.email'),
      substr(json_extract(value, '$.oggetto'), 1, 300), json_extract(value, '$.inviato')
    FROM json_each(?)`, JSON.stringify(invii));
}

export async function registraInviiDalSito(env, righe) {
  try {
    const ar = env.ARCHIVIO.get(env.ARCHIVIO.idFromName('unico'));
    const r = await ar.fetch('https://archivio/em-registra', {
      method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ righe }),
    });
    await r.body?.cancel();
    if (!r.ok) throw new Error('Archivio email non disponibile');
  } catch {
    console.error('Storico email: registrazione non riuscita');
  }
}

function mezzanotteRoma(utc) {
  const offset = offsetRoma.formatToParts(utc).find((p) => p.type === 'timeZoneName').value;
  const [ore, minuti] = offset.slice(4).split(':').map(Number);
  // Alle 00:00 UTC il cambio d'ora italiano, se previsto, non è ancora avvenuto.
  return utc - (ore * 60 + (minuti || 0)) * 60_000;
}

export function storicoEmail(ar, c, ora) {
  const giorni = [7, 30, 90].includes(Number(c.giorni)) ? Number(c.giorni) : 30;
  const oggi = Date.parse(dataRoma.format(ora));
  const calendario = Array.from({ length: giorni }, (_, i) => {
    const utc = oggi - i * GIORNO;
    return {
      giorno: new Date(utc).toISOString().slice(0, 10),
      inizio: mezzanotteRoma(utc),
      fine: mezzanotteRoma(utc + GIORNO),
    };
  });
  const tipo = Object.hasOwn(TIPI_EMAIL, c.tipo) ? c.tipo : '';
  const filtro = tipo ? ' AND tipo = ?' : '';
  const argomenti = tipo ? [tipo] : [];
  const copertura = Number(ar.riga("SELECT valore FROM email_config WHERE chiave = 'storico-email-dal'")?.valore);
  const conteggi = ar.righe(`WITH giorni AS (
    SELECT json_extract(value, '$.giorno') AS giorno, json_extract(value, '$.inizio') AS inizio,
      json_extract(value, '$.fine') AS fine FROM json_each(?)
    )
    SELECT g.giorno, e.tipo, COUNT(*) AS n FROM giorni g
    JOIN email_inviate e ON e.inviato >= g.inizio AND e.inviato < g.fine${filtro}
    GROUP BY g.giorno, e.tipo`, JSON.stringify(calendario), ...argomenti);
  const scelto = calendario.find((g) => g.giorno === c.giorno);
  const parametri = [scelto?.inizio ?? calendario.at(-1).inizio, scelto?.fine ?? calendario[0].fine, ...argomenti];
  const totale = conteggi.reduce((n, r) => n + (!scelto || r.giorno === scelto.giorno ? r.n : 0), 0);
  const pagine = Math.max(1, Math.ceil(totale / 50));
  const pagina = Math.min(pagine, Math.max(1, Math.trunc(Number(c.pagina) || 1)));
  const invii = ar.righe(`SELECT tipo, email, oggetto, inviato, solo_data FROM email_inviate
    WHERE inviato >= ? AND inviato < ?${filtro} ORDER BY inviato DESC, id DESC LIMIT 50 OFFSET ?`,
    ...parametri, (pagina - 1) * 50);
  return {
    copertura, giorni: calendario.map(({ giorno, inizio }) => ({ giorno, parziale: inizio < copertura })),
    conteggi, invii, totale, pagina, pagine,
  };
}
