import { componiEmail } from './email.mjs';
// Composizione dei promemoria e invii manuali dalla dashboard.
import { MATERIE } from '../src/data/materie.ts';
import { MATERIE_EN } from '../src/data/materie-en.ts';
import { livelloDa, RIPASSO } from '../src/data/livelli.ts';
import { nomeRango } from './stemmi.mjs';
import { nomeDallEmail } from './nomi.mjs';

const SITO = 'https://ripetizionidianalisi.com';
const TESTI = {
  it: {
    saluto: (n) => (n ? `Ciao ${n},` : 'Ciao,'),
    ultima: (a, m) => `l'ultima volta stavi studiando ${a} di ${m}.`,
    nessuna: 'sono passati alcuni giorni dalla tua ultima visita al sito.',
    // [oggetto, testo] con domande a tempo sull'argomento
    domande: [
      [(n, a, m) => `Dieci minuti di ${m}, ${n}?`, () => "Chi studia un po' ogni giorno arriva all'esame con gli esercizi ancora chiari in mente. Ti propongo dieci minuti adesso: una serie di domande a tempo sull'argomento che avevi lasciato."],
      [(n, a) => `${n}, riprendiamo ${a}?`, () => "Pochi minuti ogni giorno aiutano a ricordare i procedimenti più di molte ore in un giorno solo. Puoi ripartire con qualche domanda a tempo sullo stesso argomento."],
      [(n, a, m) => `Un po' di ${m} anche oggi`, () => "Per l'esame conta la costanza: ogni giorno in cui studi anche poco rende più facile il giorno successivo. Bastano poche domande a tempo per riprendere il filo."],
      [(n) => `${n}, una serie di domande per oggi`, (m) => `Gli argomenti di ${m} si costruiscono uno sull'altro, quindi riprenderli spesso aiuta a seguire quelli successivi. Oggi puoi dedicare dieci minuti alle domande a tempo sull'ultimo che avevi aperto.`],
    ],
    // senza domande a tempo per quell'argomento: si torna alla teoria
    teoria: [
      [(n, a, m) => `Dieci minuti di ${m}, ${n}?`, () => "Chi studia un po' ogni giorno arriva all'esame con gli esercizi ancora chiari in mente. Ti propongo dieci minuti adesso, ripartendo dall'argomento che avevi lasciato."],
      [(n, a) => `${n}, riprendiamo ${a}?`, () => 'Pochi minuti ogni giorno aiutano a ricordare i procedimenti più di molte ore in un giorno solo. Puoi ripartire dalla pagina che stavi leggendo.'],
    ],
    generico: [(n) => `Dieci minuti di studio, ${n}?`, () => "Chi studia un po' ogni giorno arriva all'esame con gli esercizi ancora chiari in mente. Ti propongo dieci minuti adesso: scegli un argomento e prova una serie di domande a tempo."],
    riprendi: 'Riprendi da dove eri', scegli: 'Scegli un argomento',
    livello: (l) => `Livello ${l}`,
    exp: (x, m, p) => (p === null ? `${x} EXP · livello massimo` : `${x} EXP · mancano ${m} EXP al livello ${p}`),
    firma: 'Il tuo Tutor Carmine',
    piede: 'Ricevi questa email perché hai un account su ripetizionidianalisi.com.', disattiva: 'Non ricevere più questi promemoria',
    prove: "Prove d'esame",
  },
  en: {
    saluto: (n) => (n ? `Hi ${n},` : 'Hi,'),
    ultima: (a, m) => `last time you were studying ${a} in ${m}.`,
    nessuna: 'a few days have passed since your last visit to the website.',
    domande: [
      [(n, a, m) => `Ten minutes of ${m}, ${n}?`, () => 'Studying a little every day takes you to the exam with the exercises still clear in your mind. How about ten minutes now: a set of timed questions on the topic you left.'],
      [(n, a) => `${n}, shall we pick up ${a} again?`, () => 'A few minutes every day keep the methods in mind better than many hours on a single day. You can start again with some timed questions on the same topic.'],
      [(n, a, m) => `A little ${m} today too`, () => 'What counts for the exam is consistency: every day you study, even briefly, makes the next one easier. A few timed questions are enough to pick up the thread.'],
      [(n) => `${n}, a set of questions for today`, (m) => `The topics of ${m} build on one another, so going back to them often helps with the ones that follow. Today you can spend ten minutes on timed questions about the last one you opened.`],
    ],
    teoria: [
      [(n, a, m) => `Ten minutes of ${m}, ${n}?`, () => 'Studying a little every day takes you to the exam with the exercises still clear in your mind. How about ten minutes now, starting from the topic you left.'],
      [(n, a) => `${n}, shall we pick up ${a} again?`, () => 'A few minutes every day keep the methods in mind better than many hours on a single day. You can start again from where you stopped reading.'],
    ],
    generico: [(n) => `Ten minutes of study, ${n}?`, () => 'Studying a little every day takes you to the exam with the exercises still clear in your mind. How about ten minutes now: choose a topic and try a set of timed questions.'],
    riprendi: 'Pick up where you left off', scegli: 'Choose a topic',
    livello: (l) => `Level ${l}`,
    exp: (x, m, p) => (p === null ? `${x} XP · maximum level` : `${x} XP · ${m} XP to level ${p}`),
    firma: 'Your Tutor Carmine',
    piede: 'You receive this email because you have an account on ripetizionidianalisi.com.', disattiva: 'Stop these reminders',
    prove: 'Exam practice',
  },
};


function nomiArgomento(materia, argomento, l) {
  const m = MATERIE.find((x) => x.slug === materia);
  if (!m) return null;
  const en = l === 'en' ? MATERIE_EN[materia] : null;
  const titoloM = en?.titolo || m.titolo;
  const breveM = en?.breve || m.breve || titoloM;
  if (argomento === RIPASSO) return { titoloM, breveM, titoloA: TESTI[l].prove };
  const a = m.argomenti.find((x) => x.slug === argomento);
  if (!a) return null;
  return { titoloM, breveM, titoloA: en?.argomenti?.[argomento]?.titolo || a.titolo };
}

// Compone l'email per uno studente (r: riga di /promemoria-candidati).
export function componiPromemoria(r, catalogo, linkNo) {
  const l = r.lingua === 'en' ? 'en' : 'it';
  const T = TESTI[l];
  const pref = l === 'en' ? '/en' : '';
  const nome = (r.nome || nomeDallEmail(r.email) || '').trim();
  // senza nome l'oggetto perde la virgola: «Dieci minuti di Analisi 1?»
  const pulisci = (o) => (nome ? o : o.replace(/^,\s*/, '').replace(/,\s*(?=\?|$)/, '').replace(/^\s*/, '')).replace(/^./, (c) => c.toUpperCase());
  const nomi = r.materia && r.argomento ? nomiArgomento(r.materia, r.argomento, l) : null;
  const conDomande = Boolean(nomi && (r.argomento === RIPASSO || catalogo?.[r.materia]?.includes(r.argomento)));
  let oggetto, frase, apertura, link, tasto;
  if (nomi) {
    const elenco = conDomande ? T.domande : T.teoria;
    const [o, f] = elenco[(r.inviati || 0) % elenco.length];
    oggetto = pulisci(o(nome, nomi.titoloA, nomi.breveM));
    frase = f(nomi.breveM);
    apertura = T.ultima(nomi.titoloA, nomi.titoloM);
    link = `${SITO}${pref}/${r.materia}/${r.argomento}${conDomande ? '/domande' : '/teoria'}`;
    tasto = T.riprendi;
  } else {
    oggetto = pulisci(T.generico[0](nome));
    frase = T.generico[1]();
    apertura = T.nessuna;
    link = `${SITO}${pref}/`;
    tasto = T.scegli;
  }
  const st = livelloDa(r.exp || 0, l);
  const num = (x) => x.toLocaleString(l === 'en' ? 'en-US' : 'it-IT');
  const m = componiEmail({
    lingua: l, subject: oggetto, titolo: nomi ? T.riprendi : T.scegli, anteprima: apertura,
    categoria: l === 'en' ? 'Your study progress' : 'Il tuo percorso di studio',
    righe: [T.saluto(nome), apertura, frase],
    scheda: {
      etichetta: nomi?.titoloM,
      valore: `${T.livello(st.livello)} · ${nomeRango(st.livello, l)} · ${st.fascia}`,
      nota: T.exp(num(st.exp), num(st.mancano), st.prossimo === null ? null : st.livello + 1),
      immagine: `${SITO}/email/stemmi/${st.livello}.png`,
    },
    pulsante: [tasto, link], firma: T.firma, motivo: T.piede, disattiva: [T.disattiva, linkNo],
  });
  return { oggetto, html: m.html, testo: m.text };
}

// Posto rimasto oggi: il piano gratuito di Resend permette 100 email al giorno, contando anche quelle di recupero
// della password e quelle già partite oggi.
const postoOggi = (env, c) => Math.max(0, Math.min(Number(env.PROMEMORIA_MAX_GIORNO) || 60, 90 - (c.recuperiOggi || 0) - (c.inviatiOggi || 0) - (c.campagneOggi || 0)));

// Compone e invia (Resend, in blocchi da 100) le email per le righe date; registra gli invii e le toglie dalla coda.
async function inviaRighe(env, aDO, firmaToken, catalogo, righe, oggi) {
  const email = await Promise.all(righe.map(async (r) => {
    const token = await firmaToken(env, { scopo: 'promemoria', r: r.email });
    const linkNo = `${SITO}/promemoria/disattiva?t=${encodeURIComponent(token)}`;
    const m = componiPromemoria(r, catalogo, linkNo);
    return {
      from: env.MITTENTE || 'Ripetizioni di Analisi <account@ripetizionidianalisi.com>',
      to: [r.email], subject: m.oggetto, html: m.html, text: m.testo,
      headers: { 'List-Unsubscribe': `<${linkNo}>`, 'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click' },
    };
  }));
  const inviati = [];
  for (let i = 0; i < email.length; i += 100) {
    const blocco = email.slice(i, i + 100);
    const r = await fetch('https://api.resend.com/emails/batch', {
      method: 'POST', headers: { authorization: `Bearer ${env.RESEND_API_KEY}`, 'content-type': 'application/json' },
      body: JSON.stringify(blocco),
    });
    if (r.ok) inviati.push(...blocco.map((x) => x.to[0]));
    else console.log('promemoria', r.status, (await r.text()).slice(0, 300));
  }
  if (inviati.length) await aDO(env, '/promemoria-registra', { giorno: oggi, email: inviati });
  return inviati;
}

// Smaltisce gli invii richiesti dalla dashboard dopo le automazioni giornaliere.
export async function inviaCodaPromemoria(env, aDO, firmaToken, catalogo) {
  if (!env.RESEND_API_KEY || env.PROMEMORIA === '0') return { inviati: 0 };
  const oggi = new Date().toISOString().slice(0, 10);
  const c = await aDO(env, '/promemoria-candidati', { giorno: oggi, soloCoda: true });
  const righe = (c.righe || []).filter((r) => !r.oggi);
  const scelti = righe.slice(0, postoOggi(env, c));
  if (!scelti.length) return { inviati: 0 };
  const inviati = await inviaRighe(env, aDO, firmaToken, catalogo, scelti, oggi);
  return { inviati: inviati.length };
}

// Dashboard → «Invia a tutti»: a ogni iscritto che accetta i promemoria, a prescindere dal calendario.
// Oggi parte quanto permette il limite giornaliero; gli altri restano in coda e partono dal giorno dopo alle 17:30.
export async function inviaATutti(env, aDO, firmaToken, catalogo) {
  if (!env.RESEND_API_KEY) return { errore: 'Manca la chiave RESEND_API_KEY su Cloudflare.' };
  const oggi = new Date().toISOString().slice(0, 10);
  const c = await aDO(env, '/promemoria-candidati', { giorno: oggi });
  const righe = (c.righe || []).filter((r) => !r.oggi);
  const posto = postoOggi(env, c);
  const inviati = await inviaRighe(env, aDO, firmaToken, catalogo, righe.slice(0, posto), oggi);
  const resto = righe.slice(posto).map((r) => r.email);
  if (resto.length) await aDO(env, '/promemoria-coda', { email: resto });
  return { ok: true, inviati: inviati.length, inCoda: resto.length, giaOggi: (c.righe || []).length - righe.length };
}

// Numeri per la dashboard.
export async function statoPromemoria(env, aDO) {
  const oggi = new Date().toISOString().slice(0, 10);
  const c = await aDO(env, '/promemoria-candidati', { giorno: oggi });
  const righe = c.righe || [];
  return { attivi: righe.length, inCoda: righe.filter((r) => r.coda).length, inviatiOggi: c.inviatiOggi || 0, posto: postoOggi(env, c), chiave: Boolean(env.RESEND_API_KEY) };
}

// Dashboard (Strumenti o scheda dello studente): invia subito il promemoria a un indirizzo.
export async function provaPromemoria(env, aDO, firmaToken, catalogo, email) {
  if (!env.RESEND_API_KEY) return { errore: 'Manca la chiave RESEND_API_KEY su Cloudflare.' };
  const c = await aDO(env, '/promemoria-candidati', { giorno: new Date().toISOString().slice(0, 10), solo: email });
  const riga = c.righe?.[0] || { email, nome: null, exp: 310, lingua: 'it', materia: 'analisi-1', argomento: 'limiti', inviati: 0 };
  const token = await firmaToken(env, { scopo: 'promemoria', r: email });
  const linkNo = `${SITO}/promemoria/disattiva?t=${encodeURIComponent(token)}`;
  const m = componiPromemoria(riga, catalogo, linkNo);
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST', headers: { authorization: `Bearer ${env.RESEND_API_KEY}`, 'content-type': 'application/json' },
    body: JSON.stringify({ from: env.MITTENTE || 'Ripetizioni di Analisi <account@ripetizionidianalisi.com>', to: [email], subject: m.oggetto, html: m.html, text: m.testo }),
  });
  if (!r.ok) return { errore: `Resend ha risposto ${r.status}: ${(await r.text()).slice(0, 200)}` };
  // Per uno studente iscritto l'invio a mano conta come quello automatico: niente doppione nello stesso giorno.
  if (c.righe?.[0]) await aDO(env, '/promemoria-registra', { giorno: new Date().toISOString().slice(0, 10), email: [email] });
  return { ok: true, oggetto: m.oggetto, account: Boolean(c.righe?.[0]) };
}

export const PAGINA_DISATTIVATO = (ok, fatto) => `<!doctype html><html lang="it"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="robots" content="noindex"><title>Promemoria</title>
<style>body{margin:0;background:#faf8f2;color:#22302f;font-family:Georgia,serif;display:grid;place-items:center;min-height:100vh;padding:16px;box-sizing:border-box}div{max-width:30rem;text-align:center;line-height:1.6}a{color:#2f6f68}button{font:600 15px Arial,sans-serif;background:#2f6f68;color:#fff;border:0;border-radius:999px;padding:12px 22px;cursor:pointer}</style></head>
<body><div>${!ok
  ? '<p>Il link non è valido.</p><p lang="en">This link is not valid.</p>'
  : fatto
    ? '<p>Non riceverai più i promemoria per studiare.</p><p lang="en">You will no longer receive study reminders.</p>'
    : '<p>Vuoi smettere di ricevere i promemoria per studiare?</p><p lang="en">Do you want to stop receiving study reminders?</p><form method="post"><button type="submit">Non ricevere più i promemoria · Stop reminders</button></form>'
}<p><a href="/">ripetizionidianalisi.com</a></p></div></body></html>`;
