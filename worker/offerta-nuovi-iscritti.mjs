// Offerta di 24 ore ai nuovi iscritti che non hanno ancora acquistato (richiesta di Carmine del 26/11/2026).
// Dashboard → Email automatiche → «Offerta 24 ore ai nuovi iscritti». Una sola email per persona, con la foto di
// Carmine, e uno sconto valido 24 ore su una materia a scelta (riga di promozioni_email con materia '*').
// Lo sconto si usa una volta: al primo acquisto di una materia singola dell'account.
import { MATERIE } from '../src/data/materie.ts';
import { componiEmail, intestazioniDisiscrizione, mittenteEmail, SITO_EMAIL } from './email.mjs';
import { registraInviiEmail } from './storico-email.mjs';

const GIORNO = 86400000;
export const TIPO_OFFERTA_24H = 'offerta-24h';
export const MATERIA_TUTTE = '*';
const DURATA = GIORNO;
const FINESTRA_GIORNI = 10;
const DURATA_ANTEPRIMA = 30 * 60000;
const MAX_DESTINATARI = 100;
const BLOCCO_INVIO = 30000;
const QUOTA_INVII = 90;
export const PERCENTUALE_PREDEFINITA = 20;
const prezzoMinimo = Math.min(...MATERIE.filter((m) => m.attiva && m.prezzo > 0).map((m) => m.prezzo));
const problema = (errore, stato = 400) => ({ errore, stato });

const quando = (t, en) => new Intl.DateTimeFormat(en ? 'en-GB' : 'it-IT', {
  weekday: 'long', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Rome',
}).format(t).replace(/,? (alle ore |at )?(\d{1,2}:\d{2})$/, en ? ' at $2' : ' alle $2');

// Iscritti degli ultimi 10 giorni senza nessuna materia nell'account, che non hanno chiesto di non ricevere offerte
// e non hanno già ricevuto questa email. Esclusi gli studenti dei corsi di Carmine e gli account Premium o GM.
export function candidatiOfferta24h(ar, ora = Date.now(), emails = null) {
  const dal = new Date(ora - FINESTRA_GIORNI * GIORNO).toISOString();
  return ar.righe(`
    SELECT u.email, u.nome, u.lingua, u.creato FROM utenti u
    LEFT JOIN email_preferenze p ON p.email = u.email
    WHERE u.hash IS NOT NULL AND u.creato >= ?
      AND p.revocato IS NULL
      AND COALESCE(u.corso, '') = '' AND u.premium_manuale IS NULL AND u.gm_manuale IS NULL
      AND (? = 0 OR u.email IN (SELECT value FROM json_each(?)))
      AND NOT EXISTS (SELECT 1 FROM abilitazioni a WHERE a.email = u.email)
      AND NOT EXISTS (SELECT 1 FROM email_inviate e WHERE e.email = u.email AND e.tipo = ?)
      AND NOT EXISTS (SELECT 1 FROM promozioni_email x WHERE x.email = u.email AND x.materia = ?)
    ORDER BY u.creato DESC, u.email`,
    dal, Number(Boolean(emails)), JSON.stringify(emails || []), TIPO_OFFERTA_24H, MATERIA_TUTTE);
}

export function componiOfferta24h(r, { percentuale, scade, link, disattiva }) {
  const en = r.lingua === 'en';
  const nome = (r.nome || '').trim().split(/\s+/)[0];
  const fino = quando(scade, en);
  return componiEmail({
    lingua: en ? 'en' : 'it',
    subject: en ? (nome ? nome + ', ' : '') + percentuale + '% off a subject of your choice, for 24 hours'
      : (nome ? nome + ', il ' : 'Il ') + percentuale + '% su una materia a tua scelta, per 24 ore',
    titolo: en ? percentuale + '% off a subject of your choice' : 'Il ' + percentuale + '% su una materia a tua scelta',
    categoria: en ? 'Personal offer · 24 hours' : 'Offerta riservata · 24 ore',
    anteprima: en ? 'Valid until ' + fino + '.' : 'Lo sconto vale fino a ' + fino + '.',
    bronzo: true,
    autore: {
      foto: SITO_EMAIL + '/email/carmine.jpg',
      nome: en ? 'Carmine Tornincasa, Eng.' : 'Ing. Carmine Tornincasa',
      ruolo: en ? 'Over a thousand students taught, more than ten thousand hours of lessons'
        : 'Oltre mille studenti seguiti, più di diecimila ore di lezione',
    },
    righe: en ? [
      nome ? 'Hi ' + nome + ',' : 'Hi,',
      'I am Carmine, the author of the material on ripetizionidianalisi.com. I am a civil engineer with a master’s degree in mathematics, and I have been teaching mathematics since I was in high school.',
      'You recently created an account on the site, where I put the method I use in my lessons: theory with proofs, exercises solved step by step and timed questions to check how ready you are for the exam.',
      'I care a lot about my students, and I want the first step on the site to cost you less. For the next 24 hours you have ' + percentuale + '% off one subject of your choice.',
    ] : [
      nome ? 'Ciao ' + nome + ',' : 'Ciao,',
      'sono Carmine, l’autore del materiale di ripetizionidianalisi.com. Sono ingegnere civile, ho un master in matematica e insegno matematica dai tempi delle superiori.',
      'Di recente hai creato un account sul sito, dove ho messo il metodo che uso a lezione: la teoria con le dimostrazioni, gli esercizi svolti passo per passo e le domande a tempo per capire quanto sei pronto per l’esame.',
      'Tengo molto ai miei studenti e voglio che il primo passo sul sito ti costi meno. Per le prossime 24 ore hai il ' + percentuale + '% di sconto su una materia a tua scelta.',
    ],
    scheda: {
      etichetta: en ? 'Your discount' : 'Il tuo sconto',
      valore: '−' + percentuale + '% ' + (en ? 'on one subject' : 'su una materia'),
      nota: en ? 'Valid until ' + fino + '.' : 'Valido fino a ' + fino + '.',
    },
    dopo: [en ? 'Sign in with the account you registered with and the discount is applied automatically at checkout, once, on the subject you choose.'
      : 'Accedi con l’account con cui ti sei iscritto e lo sconto si applica da solo al pagamento, una sola volta, sulla materia che scegli.'],
    pulsante: [en ? 'Choose your subject' : 'Scegli la materia', link],
    firma: 'Carmine',
    motivo: en ? 'You are receiving this email because you created an account on ripetizionidianalisi.com.'
      : 'Ricevi questa email perché hai creato un account su ripetizionidianalisi.com.',
    disattiva: [en ? 'Do not send me offers' : 'Non ricevere altre offerte', disattiva],
  });
}

export function esempioOfferta24h(percentuale = PERCENTUALE_PREDEFINITA) {
  return componiOfferta24h({ nome: 'Andrea', lingua: 'it' },
    { percentuale, scade: Date.now() + DURATA, link: SITO_EMAIL + '/prezzi', disattiva: SITO_EMAIL + '/account#impostazioni' });
}

function percentualeValida(x) {
  const n = Number(x);
  return Number.isInteger(n) && n >= 5 && n <= 60 && Math.round(prezzoMinimo * (100 - n)) >= 50 ? n : null;
}

async function anteprima(ar, c, firmaToken) {
  const percentuale = percentualeValida(c.percentuale);
  if (!percentuale) return problema('Indica uno sconto intero fra 5 e 60%.');
  if (!Array.isArray(c.emails) || !c.emails.length || c.emails.length > MAX_DESTINATARI ||
    c.emails.some((e) => typeof e !== 'string' || e.length > 200))
    return problema('Seleziona da 1 a ' + MAX_DESTINATARI + ' destinatari.');
  const emails = [...new Set(c.emails)];
  const scelti = candidatiOfferta24h(ar, Date.now(), emails);
  if (scelti.length !== emails.length) return problema('Uno o più destinatari non sono più disponibili. Aggiorna l’elenco.', 409);
  const bozza = {
    scopo: 'offerta-24h-admin', id: crypto.randomUUID(), exp: Date.now() + DURATA_ANTEPRIMA, percentuale,
    destinatari: scelti.map((r) => ({ email: r.email, nome: r.nome, lingua: r.lingua, id: crypto.randomUUID() })),
  };
  const scade = Date.now() + DURATA;
  const modelli = bozza.destinatari.map((r) => {
    const m = componiOfferta24h(r, { percentuale, scade, link: '#', disattiva: '#' });
    return { email: r.email, subject: m.subject, html: m.html };
  });
  return { token: await firmaToken(ar.env, bozza), modelli };
}

async function invia(ar, bozza, firmaToken, contaPromozioniOggi) {
  const { sql, env } = ar;
  if (bozza?.scopo !== 'offerta-24h-admin' || !(bozza.exp > Date.now()) || !percentualeValida(bozza.percentuale))
    return problema('L’anteprima è scaduta. Preparane una nuova.', 409);
  const leggiLotto = () => ar.riga('SELECT iniziato, scade, inviate FROM promozioni_email_lotti WHERE id = ?', bozza.id);
  const esistente = leggiLotto();
  if (esistente?.inviate != null) return { inviate: esistente.inviate, rimasti: 0 };
  if (esistente?.iniziato > Date.now() - BLOCCO_INVIO)
    return problema('Invio in corso. Attendi qualche secondo e riprova.', 409);
  // Chi nel frattempo ha comprato, si è disiscritto o ha già ricevuto l'offerta non riceve nulla.
  const ancora = new Set(candidatiOfferta24h(ar, Date.now(), bozza.destinatari.map((r) => r.email)).map((r) => r.email));
  const validi = bozza.destinatari.filter((r) => ancora.has(r.email));
  if (!validi.length) return { inviate: 0, rimasti: 0, saltati: bozza.destinatari.length };
  const ora = Date.now();
  const oggi = Date.parse(new Date(ora).toISOString().slice(0, 10));
  const altri = ar.riga("SELECT COUNT(*) AS n FROM email_inviate WHERE inviato >= ? AND tipo != 'promozione' AND tipo != ?", oggi, TIPO_OFFERTA_24H)?.n || 0;
  const residui = Math.max(0, QUOTA_INVII - altri - contaPromozioniOggi(ar, ora, bozza.id));
  if (!residui) return problema('Per oggi il limite di invii è raggiunto. Riprova domani.', 429);
  const lotto = validi.slice(0, residui);
  const scade = ora + DURATA;
  const payload = await Promise.all(lotto.map(async (r) => {
    const t = await firmaToken(env, { scopo: 'offerte-email', r: r.email, l: r.lingua });
    const disattiva = SITO_EMAIL + '/email/disattiva?t=' + encodeURIComponent(t);
    const link = SITO_EMAIL + '/offerta-email/tutte/' + r.id + (r.lingua === 'en' ? '?l=en' : '');
    return { from: mittenteEmail(env), to: [r.email], ...componiOfferta24h(r, { percentuale: bozza.percentuale, scade, link, disattiva }),
      headers: intestazioniDisiscrizione(disattiva) };
  }));
  sql.exec(`INSERT INTO promozioni_email_lotti (id, iniziato, scade, destinatari) VALUES (?, ?, ?, ?)
    ON CONFLICT(id) DO UPDATE SET iniziato = excluded.iniziato`, bozza.id, ora, scade, payload.length);
  const risposta = await fetch('https://api.resend.com/emails/batch', {
    method: 'POST',
    headers: {
      authorization: 'Bearer ' + env.RESEND_API_KEY, 'content-type': 'application/json',
      'Idempotency-Key': 'offerta-24h/' + bozza.id,
    },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(15000),
  }).catch(() => null);
  if (!risposta?.ok) {
    if (risposta && risposta.status < 500 && risposta.status !== 409)
      sql.exec('UPDATE promozioni_email_lotti SET iniziato = 0 WHERE id = ?', bozza.id);
    return problema(risposta?.status === 429 ? 'Limite di invio di Resend raggiunto. Riprova più tardi.'
      : 'Resend non ha confermato l’invio. Riprova con la stessa anteprima: non partiranno doppioni.', risposta?.status === 429 ? 429 : 502);
  }
  const esito = await risposta.json().catch(() => null);
  if (!Array.isArray(esito?.data) || esito.data.length !== payload.length)
    return problema('Resend non ha confermato tutti gli invii. Riprova con la stessa anteprima.', 502);
  const inviato = Date.now();
  for (const r of lotto) {
    sql.exec('INSERT OR IGNORE INTO promozioni_email (id, email, materia, percentuale, scade) VALUES (?, ?, ?, ?, ?)',
      r.id, r.email, MATERIA_TUTTE, bozza.percentuale, scade);
  }
  registraInviiEmail(sql, lotto.map((r, i) => ({
    id: 'offerta-24h/' + r.id, tipo: TIPO_OFFERTA_24H, email: r.email, oggetto: payload[i].subject, inviato,
  })));
  sql.exec('UPDATE promozioni_email_lotti SET inviate = ? WHERE id = ?', payload.length, bozza.id);
  return { inviate: payload.length, rimasti: validi.length - payload.length, saltati: bozza.destinatari.length - validi.length };
}

export async function archivioOfferta24h(ar, p, c, { firmaToken, leggiToken, contaPromozioniOggi }) {
  if (p === '/promo-nuovi-candidati') {
    return {
      disponibile: Boolean(ar.env.RESEND_API_KEY), giorni: FINESTRA_GIORNI, percentuale: PERCENTUALE_PREDEFINITA,
      massimoDestinatari: MAX_DESTINATARI,
      destinatari: candidatiOfferta24h(ar).map(({ email, nome, creato }) => ({ email, nome, creato })),
    };
  }
  if (!ar.env.RESEND_API_KEY) return problema('Invio delle email non disponibile (manca la chiave di Resend).', 503);
  if (p === '/promo-nuovi-anteprima') return anteprima(ar, c, firmaToken);
  if (p === '/promo-nuovi-invia')
    return invia(ar, await leggiToken(ar.env, typeof c.token === 'string' ? c.token : ''), firmaToken, contaPromozioniOggi);
  return problema('Pagina non trovata.', 404);
}
