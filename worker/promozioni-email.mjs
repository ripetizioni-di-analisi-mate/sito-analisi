import { MATERIE } from '../src/data/materie.ts';
import { MATERIE_EN } from '../src/data/materie-en.ts';
import { componiEmail, intestazioniDisiscrizione, mittenteEmail, SITO_EMAIL } from './email.mjs';
import { registraInviiEmail } from './storico-email.mjs';

const GIORNO = 86400000;
const DURATA_OFFERTA = 7 * GIORNO;
const DURATA_ANTEPRIMA = 30 * 60000;
const MAX_DESTINATARI = 100;
const BLOCCO_INVIO = 30000;
const QUOTA_INVII = 90;
const materie = new Map(MATERIE.filter((m) => m.attiva && m.prezzo > 0).map((m) => [m.slug, m]));
const slugs = JSON.stringify([...materie.keys()]);
const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
const problema = (errore, stato = 400) => ({ errore, stato });
const disponibile = (env) => Boolean(env.RESEND_API_KEY && env.STRIPE_SECRET_KEY && env.STRIPE_WEBHOOK_SECRET && env.VENDITA !== '0');
const prezzoScontato = (prezzo, percentuale) => Math.round(Math.round(prezzo * 100) * (100 - percentuale) / 100);

export function creaTabellePromozioni(sql) {
  sql.exec(`
    CREATE TABLE IF NOT EXISTS promozioni_email_lotti (
      id TEXT PRIMARY KEY, iniziato INTEGER NOT NULL, scade INTEGER NOT NULL, destinatari INTEGER NOT NULL, inviate INTEGER
    );
    CREATE TABLE IF NOT EXISTS promozioni_email (
      id TEXT PRIMARY KEY, email TEXT NOT NULL, materia TEXT NOT NULL,
      percentuale INTEGER NOT NULL, scade INTEGER NOT NULL, usato TEXT
    );
    CREATE INDEX IF NOT EXISTS promozioni_email_account ON promozioni_email (email, materia, scade);
  `);
}

export function pulisciPromozioni(sql, ora) {
  sql.exec('DELETE FROM promozioni_email_lotti WHERE scade < ?', ora);
  sql.exec('DELETE FROM promozioni_email WHERE scade < ?', ora - 2 * GIORNO);
}

export function contaPromozioniOggi(ar, ora, escluso = '') {
  const oggi = Date.parse(new Date(ora).toISOString().slice(0, 10));
  return ar.riga(`SELECT COALESCE(SUM(destinatari), 0) AS n FROM promozioni_email_lotti
    WHERE iniziato >= ? AND id != ? AND (inviate IS NOT NULL OR iniziato >= ?)`, oggi, escluso, ora - BLOCCO_INVIO)?.n || 0;
}

export function codicePromozione(codice) {
  return typeof codice === 'string' && uuid.test(codice) ? codice : null;
}

export function offertaPromozionale(ar, { email, materia, codice }) {
  const r = ar.riga(`
    SELECT id, percentuale, scade FROM promozioni_email WHERE email = ? AND materia = ? AND scade > ? AND usato IS NULL
    ORDER BY (id = ?) DESC, percentuale DESC, scade DESC, id LIMIT 1`,
    email, materia, Date.now(), codicePromozione(codice) || '');
  return r ? { ...r, tipo: 'promozione' } : {};
}

function selezioneValida(materia, origine) {
  return materie.has(materia) && (!origine || (materie.has(origine) && origine !== materia));
}

function destinatari(ar, materia, origine, emails, cerca = '') {
  const ricerca = cerca.trim().slice(0, 120).toLowerCase();
  return ar.righe(`
    SELECT u.email, u.nome, u.lingua,
      (SELECT a.materia FROM abilitazioni a
        WHERE a.email = u.email AND a.materia != ?
        AND a.materia IN (SELECT value FROM json_each(?))
        AND (? = '' OR a.materia = ?)
        ORDER BY a.creato DESC, a.materia LIMIT 1) AS origine
    FROM email_preferenze p JOIN utenti u ON u.email = p.email
    WHERE u.hash IS NOT NULL AND p.confermato IS NOT NULL AND p.revocato IS NULL
      AND (? = 0 OR u.email IN (SELECT value FROM json_each(?)))
      AND (instr(lower(u.email), ?) > 0 OR instr(lower(COALESCE(u.nome, '')), ?) > 0)
      AND NOT EXISTS (SELECT 1 FROM abilitazioni b WHERE b.email = u.email AND b.materia = ?)
      AND origine IS NOT NULL
    ORDER BY lower(COALESCE(u.nome, u.email)), u.email`,
    materia, slugs, origine, origine, Number(Boolean(emails)), JSON.stringify(emails || []), ricerca, ricerca, materia);
}

function titolo(slug, en) {
  return (en && MATERIE_EN[slug]?.titolo) || materie.get(slug)?.titolo;
}

function componiPromozione(r, piano, { link, disattiva }) {
  const en = r.lingua === 'en';
  const origine = titolo(r.origine, en), materia = titolo(piano.materia, en);
  const prezzo = materie.get(piano.materia).prezzo;
  const percentuale = piano.percentuale;
  const euro = (x) => new Intl.NumberFormat(en ? 'en-IE' : 'it-IT', { style: 'currency', currency: 'EUR' }).format(x);
  return componiEmail({
    lingua: en ? 'en' : 'it',
    subject: en ? percentuale + '% off ' + materia : materia + ' con il ' + percentuale + '% di sconto',
    titolo: en ? 'An offer for your next subject' : 'Una proposta per continuare a studiare',
    categoria: en ? 'Personal offer' : 'Offerta riservata',
    anteprima: en ? 'A personal offer from Carmine.' : 'Un’offerta di Carmine per il tuo percorso di studio.',
    bronzo: true,
    righe: en ? [
      r.nome ? 'Hi ' + r.nome + ',' : 'Hi,',
      'I saw that you already have access to ' + origine + ' in your account.',
      'To reward your effort, I’d like to offer you ' + materia + ' with ' + percentuale + '% off.',
    ] : [
      r.nome ? 'Ciao ' + r.nome + ',' : 'Ciao,',
      'Ho visto che nel tuo account è già attiva la materia ' + origine + '.',
      'Per premiare il tuo impegno, ti propongo di continuare con ' + materia + ' e ti riservo uno sconto del ' + percentuale + '%.',
    ],
    scheda: { etichetta: materia, prima: euro(prezzo), valore: euro(prezzoScontato(prezzo, percentuale) / 100) + ' · −' + percentuale + '%',
      nota: en ? 'Valid for 7 days from the date of this email.' : 'Valida per 7 giorni dalla data di invio.' },
    dopo: [en ? 'Open the offer and sign in to use it once on this subject.' : 'Apri l’offerta e accedi al tuo account per usare lo sconto una sola volta su questa materia.'],
    pulsante: [en ? 'Open your offer' : 'Apri la tua offerta', link],
    motivo: en ? 'You confirmed that you want to receive offers by email.' : 'Hai confermato di voler ricevere offerte via email.',
    disattiva: [en ? 'Unsubscribe' : 'Disattiva esercizi e offerte', disattiva],
  });
}

async function preparaPromozione(ar, c, firmaToken) {
  const percentuale = Number(c.percentuale);
  const prezzo = materie.get(c.materia)?.prezzo;
  if (!selezioneValida(c.materia, c.origine || '')) return problema('Scegli una materia acquistabile da promuovere.');
  if (!Number.isInteger(percentuale) || percentuale < 1 || percentuale > 99 || prezzoScontato(prezzo, percentuale) < 50)
    return problema('Indica una percentuale intera che lasci almeno 0,50 € da pagare.');
  if (!Array.isArray(c.emails) || !c.emails.length || c.emails.length > MAX_DESTINATARI ||
    c.emails.some((e) => typeof e !== 'string' || e.length > 200))
    return problema('Seleziona da 1 a ' + MAX_DESTINATARI + ' destinatari.');
  const emails = [...new Set(c.emails)];
  const candidati = destinatari(ar, c.materia, c.origine || '', emails);
  if (candidati.length !== emails.length) return problema('La disponibilità di uno o più destinatari è cambiata. Aggiorna la selezione.', 409);
  const bozza = {
    scopo: 'promozione-email-admin', id: crypto.randomUUID(), exp: Date.now() + DURATA_ANTEPRIMA,
    materia: c.materia, percentuale,
    destinatari: candidati.map((r) => ({ ...r, id: crypto.randomUUID() })),
  };
  const modelli = bozza.destinatari.map((r) => {
    const m = componiPromozione(r, bozza, { link: '#', disattiva: '#' });
    return { email: r.email, origine: titolo(r.origine, r.lingua === 'en'), subject: m.subject, html: m.html };
  });
  return { token: await firmaToken(ar.env, bozza), modelli };
}

function destinatariAncoraValidi(ar, bozza) {
  const trovati = ar.riga(`
    WITH scelti AS (
      SELECT json_extract(value, '$.email') AS email, json_extract(value, '$.origine') AS origine FROM json_each(?)
    )
    SELECT COUNT(*) AS n FROM scelti s
      JOIN utenti u ON u.email = s.email AND u.hash IS NOT NULL
      JOIN email_preferenze p ON p.email = s.email AND p.confermato IS NOT NULL AND p.revocato IS NULL
      JOIN abilitazioni a ON a.email = s.email AND a.materia = s.origine
    WHERE NOT EXISTS (SELECT 1 FROM abilitazioni b WHERE b.email = s.email AND b.materia = ?)`,
    JSON.stringify(bozza.destinatari), bozza.materia);
  return trovati?.n === bozza.destinatari.length && bozza.destinatari.every((r) => materie.has(r.origine));
}

async function inviaPromozione(ar, bozza, firmaToken) {
  const { sql, env } = ar;
  if (bozza?.scopo !== 'promozione-email-admin' || !(bozza.exp > Date.now()) || !materie.has(bozza.materia))
    return problema('L’anteprima è scaduta. Preparane una nuova.', 409);
  const leggiLotto = () => ar.riga('SELECT iniziato, scade, inviate FROM promozioni_email_lotti WHERE id = ?', bozza.id);
  const esistente = leggiLotto();
  if (esistente?.inviate != null) return { inviate: esistente.inviate };
  if (esistente?.iniziato > Date.now() - BLOCCO_INVIO)
    return problema('Invio in verifica. Attendi qualche secondo e riprova con questa anteprima.', 409);
  const payload = await Promise.all(bozza.destinatari.map(async (r) => {
    const link = SITO_EMAIL + '/offerta-email/' + bozza.materia + '/' + r.id + (r.lingua === 'en' ? '?l=en' : '');
    const t = await firmaToken(env, { scopo: 'offerte-email', r: r.email, l: r.lingua });
    const disattiva = SITO_EMAIL + '/email/disattiva?t=' + encodeURIComponent(t);
    return { from: mittenteEmail(env), to: [r.email], ...componiPromozione(r, bozza, { link, disattiva }),
      headers: intestazioniDisiscrizione(disattiva) };
  }));
  // L'archivio serializza le scritture sincrone. Controlla il lotto di nuovo dopo la firma dei link.
  const ora = Date.now(), lotto = leggiLotto();
  if (lotto?.inviate != null) return { inviate: lotto.inviate };
  if (lotto?.iniziato > ora - BLOCCO_INVIO) return problema('L’invio è già in corso.', 409);
  if (bozza.exp <= ora || !destinatariAncoraValidi(ar, bozza))
    return problema('La disponibilità o il consenso di uno o più destinatari è cambiato. Prepara una nuova anteprima.', 409);
  const oggi = Date.parse(new Date(ora).toISOString().slice(0, 10));
  const altriInvii = ar.riga("SELECT COUNT(*) AS n FROM email_inviate WHERE inviato >= ? AND tipo != 'promozione'", oggi)?.n || 0;
  const residui = Math.max(0, QUOTA_INVII - altriInvii - contaPromozioniOggi(ar, ora, bozza.id));
  if (!lotto && payload.length > residui)
    return problema('Per oggi restano ' + residui + ' invii disponibili. Riduci i destinatari oppure riprova domani.', 429);
  const scade = lotto?.scade ?? ora + DURATA_OFFERTA;
  sql.exec(`INSERT INTO promozioni_email_lotti (id, iniziato, scade, destinatari) VALUES (?, ?, ?, ?)
    ON CONFLICT(id) DO UPDATE SET iniziato = excluded.iniziato`, bozza.id, ora, scade, payload.length);
  const risposta = await fetch('https://api.resend.com/emails/batch', {
    method: 'POST',
    headers: {
      authorization: 'Bearer ' + env.RESEND_API_KEY, 'content-type': 'application/json',
      'Idempotency-Key': 'promozione/' + bozza.id,
    },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(10000),
  }).catch(() => null);
  if (!risposta?.ok) {
    if (risposta && risposta.status < 500 && risposta.status !== 409)
      sql.exec('UPDATE promozioni_email_lotti SET iniziato = 0 WHERE id = ?', bozza.id);
    const limite = risposta?.status === 429;
    return problema(limite ? 'Limite di invio raggiunto. Riprova con questa anteprima.' :
      'Resend non ha confermato l’invio. Riprova con la stessa anteprima per evitare duplicati.', limite ? 429 : 502);
  }
  const esito = await risposta.json().catch(() => null);
  if (!Array.isArray(esito?.data) || esito.data.length !== payload.length || esito.data.some((x) => typeof x?.id !== 'string'))
    return problema('Resend non ha confermato tutti gli invii. Riprova con la stessa anteprima.', 502);
  const inviato = Date.now();
  for (const r of bozza.destinatari) {
    sql.exec('INSERT OR IGNORE INTO promozioni_email (id, email, materia, percentuale, scade) VALUES (?, ?, ?, ?, ?)',
      r.id, r.email, bozza.materia, bozza.percentuale, scade);
  }
  registraInviiEmail(sql, bozza.destinatari.map((r, i) => ({
    id: 'promozione/' + r.id, tipo: 'promozione', email: r.email, oggetto: payload[i].subject, inviato,
  })));
  sql.exec('UPDATE promozioni_email_lotti SET inviate = ? WHERE id = ?', payload.length, bozza.id);
  return { inviate: payload.length };
}

export async function archivioPromozioni(ar, p, c, firmaToken, leggiToken) {
  if (p === '/promo-offerta') return offertaPromozionale(ar, c);
  if (p === '/promo-catalogo') {
    return { disponibile: disponibile(ar.env), massimoDestinatari: MAX_DESTINATARI,
      materie: [...materie.values()].map(({ slug, titolo }) => ({ slug, titolo })) };
  }
  if (!disponibile(ar.env)) return problema('Invio delle promozioni o pagamento Stripe non disponibile.', 503);
  if (p === '/promo-candidati') {
    const origine = c.origine || '';
    if (!selezioneValida(c.materia, origine)) return problema('Scegli le materie della promozione.');
    return { destinatari: destinatari(ar, c.materia, origine, null, String(c.cerca || '')).map(({ email, nome, origine }) =>
      ({ email, nome, origine: titolo(origine, false) })) };
  }
  if (p === '/promo-anteprima') return preparaPromozione(ar, c, firmaToken);
  if (p === '/promo-invia') return inviaPromozione(ar, await leggiToken(ar.env, typeof c.token === 'string' ? c.token : ''), firmaToken);
  return problema('Pagina non trovata.', 404);
}
