// Offerta di 24 ore ai nuovi iscritti che non hanno ancora acquistato (richiesta di Carmine del 26/11/2026).
// Dashboard → Email automatiche → «Offerta 24 ore ai nuovi iscritti». Una sola email per persona, con la foto di
// Carmine, e uno sconto valido 24 ore su un acquisto (riga di promozioni_email con materia '*').
// Lo sconto si usa una volta: sulla prima materia o sul primo pacchetto di materie, senza sommarsi ad altri sconti.
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
    subject: en ? (nome ? nome + ', ' : '') + percentuale + '% off your purchase, for 24 hours only'
      : (nome ? nome + ', il ' : 'Il ') + percentuale + '% sul tuo acquisto, solo per 24 ore',
    titolo: en ? percentuale + '% off your purchase' : 'Il ' + percentuale + '% sul tuo acquisto',
    categoria: en ? 'Personal offer · 24 hours' : 'Offerta riservata · 24 ore',
    anteprima: en ? 'A message from Carmine, with a discount valid until ' + fino + '.'
      : 'Un messaggio di Carmine, con uno sconto valido fino a ' + fino + '.',
    bronzo: true,
    autore: {
      foto: SITO_EMAIL + '/email/carmine.jpg',
      nome: en ? 'Carmine Tornincasa, Eng.' : 'Ing. Carmine Tornincasa',
      ruolo: en ? 'Thousands of students taught, more than ten thousand hours of lessons'
        : 'Migliaia di studenti seguiti, più di diecimila ore di lezione',
    },
    // Ordine scelto da Carmine: chi sono, cosa faccio, cosa amo, quanto tengo ai miei studenti, poi l'offerta.
    righe: en ? [
      nome ? 'Hi ' + nome + ',' : 'Hi,',
      'my name is Carmine Tornincasa. I am a civil engineer with a master’s degree in mathematics, and I started teaching mathematics while I was still in high school. Since then I have taught thousands of students, for more than ten thousand hours of lessons.',
      'I teach STEM subjects in one-to-one lessons, in group courses and in my video courses. Ripetizionidianalisi.com grew out of those lessons: theory explained with its proofs, exercises solved step by step the way I solve them on the board, practice exercises that are checked as soon as you answer, timed questions and exam simulations.',
      'What I love most about this job is the moment when a topic that looked impossible becomes clear. I see it on my students’ faces during lessons, and I read it in the messages they send me after their exams.',
      'I truly care about my students, and I built the site to stay with you when you study on your own, late in the evening or the day before the exam. In the main subjects the Guided study asks you a few questions and shows you the paragraph to start again from, and Pi, the site’s assistant, answers your doubts about exercises and theory.',
      'You created your account a few days ago, and I want your first step to cost you less. For the next 24 hours you have ' + percentuale + '% off your purchase: one subject or several subjects together, chosen among all those on the site.',
    ] : [
      nome ? 'Ciao ' + nome + ',' : 'Ciao,',
      'mi chiamo Carmine Tornincasa. Sono ingegnere civile, ho un master in matematica e ho cominciato a insegnare matematica quando ero ancora alle superiori. Da allora ho seguito migliaia di studenti, per più di diecimila ore di lezione.',
      'Faccio ripetizioni di materie STEM, con le lezioni individuali, i corsi di gruppo e i videocorsi. Ripetizionidianalisi.com nasce da queste lezioni: ci ho messo la teoria spiegata con le dimostrazioni, gli esercizi svolti passaggio per passaggio come li svolgo alla lavagna, gli esercizi da fare con la correzione immediata, le domande a tempo e la simulazione d’esame.',
      'La cosa che amo di più di questo lavoro è il momento in cui un argomento che sembrava impossibile diventa chiaro. Lo vedo sul viso degli studenti durante le lezioni e lo leggo nei messaggi che mi mandano dopo l’esame.',
      'Ai miei studenti tengo davvero, e ho costruito il sito perché ti accompagni anche quando studi da solo, la sera tardi o il giorno prima dell’esame. Nelle materie principali lo Studio guidato ti fa qualche domanda e ti indica il paragrafo da cui ripartire, e Pi, l’assistente del sito, risponde ai tuoi dubbi su esercizi e teoria.',
      'Hai creato il tuo account da pochi giorni e voglio che il primo passo ti costi meno. Per le prossime 24 ore hai il ' + percentuale + '% di sconto sul tuo acquisto: una materia o più materie insieme, scelte fra tutte quelle del sito.',
    ],
    biglietto: {
      etichetta: en ? 'Your discount · 24 hours' : 'Il tuo sconto · 24 ore',
      valore: '−' + percentuale + '%',
      sotto: en ? 'on your purchase of one or more subjects' : 'sul tuo acquisto di una o più materie',
      timer: SITO_EMAIL + '/email/timer.gif?f=' + Math.round(scade) + '&t=verde',
      nota: en ? 'Valid until ' + fino : 'Valido fino a ' + fino,
      pulsante: [en ? 'Choose your subjects' : 'Scegli le materie', link],
    },
    dopo: [
      en ? 'Sign in with the account you registered with and the discount is applied automatically at checkout, on a single purchase.'
        : 'Accedi con l’account con cui ti sei iscritto e lo sconto si applica da solo al pagamento, su un solo acquisto.',
    ],
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
