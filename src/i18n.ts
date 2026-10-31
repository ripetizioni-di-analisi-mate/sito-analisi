// Lingue del sito. L'italiano sta alla radice (/analisi-1/...), l'inglese sotto /en (/en/analisi-1/...).
// Per aggiungere una lingua: un blocco in TESTI, i nomi delle materie (come materie-en.ts),
// le collezioni di contenuti tradotti e le pagine sotto src/pages/<lingua>/.
import { getCollection, getEntry } from 'astro:content';
import { MATERIE, SEZIONI, type Materia, type Argomento } from './data/materie';
import { MATERIE_EN, GRUPPI_EN, SOTTOGRUPPI_EN } from './data/materie-en';
import { url } from './lib/url';

export type Lingua = 'it' | 'en';
export const LINGUE: { codice: Lingua; nome: string }[] = [
  { codice: 'it', nome: 'Italiano' },
  { codice: 'en', nome: 'English' },
];
export const prefisso = (l: Lingua) => (l === 'it' ? '' : `/${l}`);

// Indirizzo di una pagina nella lingua data.
export function link(l: Lingua, path: string): string {
  const p = l === 'it' ? path : path === '/' ? `/${l}` : `/${l}${path}`;
  return url(p);
}
// La stessa pagina nell'altra lingua.
export function altraLingua(pathname: string, verso: Lingua): string {
  const senza = pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  return link(verso, senza.replace(/\.html$/, '').replace(/\/index$/, '') || '/');
}

// ---------- materie nella lingua data ----------
export function materieL(l: Lingua): Materia[] {
  if (l === 'it') return MATERIE;
  return MATERIE.map((m) => {
    const e = MATERIE_EN[m.slug];
    if (!e) return m;
    return {
      ...m,
      titolo: e.titolo, breve: e.breve, descrizione: e.descrizione, gruppo: GRUPPI_EN[m.gruppo] ?? m.gruppo, sottogruppo: m.sottogruppo ? (SOTTOGRUPPI_EN[m.sottogruppo] ?? m.sottogruppo) : undefined,
      argomenti: m.argomenti.map((a) => ({ ...a, ...(e.argomenti[a.slug] ?? {}) })),
    };
  });
}
export const materiaL = (l: Lingua, slug: string): Materia => materieL(l).find((m) => m.slug === slug)!;
export const argomentoL = (l: Lingua, m: string, a: string): Argomento => materiaL(l, m).argomenti.find((x) => x.slug === a)!;
export const gruppiL = (l: Lingua) => [...new Set(materieL(l).map((m) => m.gruppo))];
// Materie di un gruppo divise in blocchi: prima quelle senza sottogruppo, poi un blocco per sottogruppo.
// Nei sottogruppi l'etichetta è il titolo senza il nome del sottogruppo ("Matematica 1° anno" -> "1° anno").
export function blocchiGruppo(materie: Materia[], g: string) {
  const delGruppo = materie.filter((m) => m.gruppo === g);
  const sotto = [...new Set(delGruppo.map((m) => m.sottogruppo).filter(Boolean))] as string[];
  const etichetta = (m: Materia) => (m.sottogruppo && m.titolo.startsWith(m.sottogruppo) ? m.titolo.slice(m.sottogruppo.length).replace(/^[,\s]+/, '') : m.titolo);
  return [
    { sotto: null as string | null, materie: delGruppo.filter((m) => !m.sottogruppo).map((m) => ({ m, nome: m.titolo })) },
    ...sotto.map((x) => ({ sotto: x as string | null, materie: delGruppo.filter((m) => m.sottogruppo === x).map((m) => ({ m, nome: etichetta(m) })) })),
  ].filter((b) => b.materie.length);
}
export function sezioniL(l: Lingua) {
  const nomi = TESTI[l].sezioni;
  return SEZIONI.map((s) => ({ slug: s.slug, titolo: nomi[s.slug] }));
}

// ---------- contenuti: la versione tradotta se c'è, altrimenti l'italiano ----------
type Collezione = 'teoria' | 'svolti' | 'dafare';
const TRADOTTE = { teoria: 'teoria_en', svolti: 'svolti_en', dafare: 'dafare_en' } as const;

export async function voceL(l: Lingua, c: Collezione, id: string) {
  if (l === 'en') {
    const t = await getEntry(TRADOTTE[c], id);
    if (t) return { voce: t as any, tradotta: true };
  }
  return { voce: (await getEntry(c, id)) as any, tradotta: l === 'it' };
}
export async function vociL(l: Lingua, c: Collezione) {
  const it = await getCollection(c);
  if (l === 'it') return it as any[];
  const en = new Map((await getCollection(TRADOTTE[c])).map((v: any) => [v.id, v]));
  return it.map((v: any) => en.get(v.id) ?? v);
}

// ---------- testi dell'interfaccia ----------
export const TESTI = {
  it: {
    nomeSito: 'Ripetizioni di Analisi',
    sezioni: { teoria: 'Teoria', 'esercizi-svolti': 'Esercizi svolti', esercizi: 'Esercizi da fare' } as Record<string, string>,
    indice: 'Indice', chiudi: 'Chiudi', cerca: 'Cerca', accedi: 'Accedi', account: 'Account', ilTuoAccount: 'Il tuo account',
    sbloccata: 'Sbloccata', materie: 'Materie', altreMaterie: 'altre materie', contatti: 'Contatti e assistenza', chiSono: 'Chi sono', prezzi: 'Prezzi', privacy: 'Informativa sulla privacy', termini: 'Termini e diritti d’autore',
    copyright: '© 2026 Carmine Tornincasa. Tutti i diritti riservati. Vietata la riproduzione o la diffusione, anche parziale, senza autorizzazione scritta.',
    notaTermini: 'Con l’acquisto accetti i <a href="/termini">termini d’uso</a>: l’accesso è personale e il materiale non può essere condiviso né diffuso.',
    precedente: 'Precedente', successivo: 'Successivo', argomentoSuccessivo: 'Argomento successivo', tornaSu: "Torna all'inizio della pagina",
    whatsapp: 'Scrivimi su WhatsApp', lingua: 'Lingua', inPreparazione: 'in preparazione', argomenti: 'argomenti',
    nonTradotta: '',
    // home
    homeSopra: 'Università · Superiori · Concorsi', homeTitolo: 'Teoria ed esercizi svolti per le materie scientifiche',
    homeSommario: 'Per ogni materia trovi teoria, definizioni, teoremi e dimostrazioni, esercizi svolti passo dopo passo ed esercizi da risolvere con soluzione.',
    homeDescrizione: "Teoria ed esercizi per gli esami di matematica dell'università, materia per materia.",
    cercaSegnaposto: 'Cerca un argomento, un teorema, un tipo di esercizio…', cercaNelSito: 'Cerca nel sito',
    // pagina della materia
    argomentiEsame: "Gli argomenti dell'esame",
    accessoAttivo: 'Accesso completo attivo',
    accessoAttivoTesto: (m: string) => `Teoria, tutte le schede svolte e soluzioni di ${m} sono sbloccate nel tuo account.`,
    anteprima: 'Anteprima gratuita',
    anteprimaTesto: "Di ogni argomento puoi leggere gratis l'inizio della teoria e le prime 3 schede di esercizi svolti, senza account.",
    iniziaAnteprima: "Inizia dall'anteprima", anteprimaBollino: 'Anteprima gratuita', sbloccaTutto: 'Sblocca tutto',
    homeAnteprima: "Ogni materia ha un'anteprima gratuita: apri quella che ti serve e inizia a leggere, senza account.",
    sblocca: 'Sblocca',
    // contenuti
    pdfArgomento: "PDF dell'argomento", scaricaPdf: (a: string) => `scarica ${a} in PDF`, pdfContiene: '(teoria, esercizi svolti ed esercizi da fare).',
    inQuestaPagina: 'In questa pagina', teoriaInPreparazione: 'La teoria di questo argomento è in preparazione.',
    eserciziLabel: 'Esercizi', svoltiMin: 'svolti', daFareMin: 'da fare',
    svoltiSuArgomento: 'Esercizi svolti su questo argomento',
    dafareSuArgomento: (n: number) => `Esercizi da fare su questo argomento: ${n} tracce con soluzione`,
    svoltiSommario: 'Una scheda per ogni tipologia, con più esercizi svolti in difficoltà crescente: prima il calcolo, poi la spiegazione a parole. In testa a ogni scheda ci sono i collegamenti alla teoria che usa.',
    svoltiInPreparazione: 'Gli esercizi di questo argomento sono in preparazione.',
    dafareSommario: 'Tracce da svolgere in autonomia. La soluzione finale compare con il pulsante sotto ogni traccia; ogni esercizio ha anche una pagina propria, da condividere con il link.',
    dafareInPreparazione: 'Le tracce di questo argomento sono in preparazione.',
    scheda: 'Scheda', esercizio: 'Esercizio', esercizioDaFare: 'Esercizio da fare', tutteLeSchede: 'Tutte le schede', tuttiDaFare: 'Tutti gli esercizi da fare',
    teoriaUsata: 'Teoria usata', vaiA: 'Vai a', indiceArgomenti: 'Indice degli argomenti',
    // sblocca
    sbloccaTitolo: (m: string) => `Sblocca ${m}`,
    sbloccaDescrizione: (m: string) => `Accesso completo a ${m}: teoria, schede di esercizi svolti e soluzioni.`,
    sbloccaSommario: 'Un acquisto unico, senza abbonamento: la materia resta sbloccata nel tuo account, su un massimo di 2 dispositivi, senza scadenza.',
    includeTeoria: (n: number) => `La <strong>teoria completa</strong> di tutti gli ${n} argomenti, con definizioni, teoremi e dimostrazioni`,
    includeSvolti: (n: number) => `Tutte le <strong>${n} schede di esercizi svolti</strong> per tipologia, con ogni passaggio spiegato`,
    includeSoluzioni: (n: number) => `Le <strong>soluzioni</strong> dei ${n} esercizi da fare`,
    includePdf: 'Il <strong>PDF</strong> di ogni argomento',
    unaVoltaSola: 'una volta sola', unMomento: 'Un momento…',
    gratisOra: "Gratis, senza account, restano l'inizio della teoria e le prime 3 schede svolte di ogni argomento.",
    metodiPagamento: 'Si paga con carta, PayPal, Apple Pay, Google Pay o con gli altri metodi mostrati nella finestra di pagamento. Il pagamento è gestito da Paddle, che invia la ricevuta.',
    almenoOtto: 'almeno 8 caratteri',
    // testi usati dagli script nel browser
    js: {
      creaESblocca: 'Crea un account e sblocca', haiAccount: 'Hai già un account?', accedi: 'Accedi',
      giaSbloccata: (m: string) => `${m} è già sbloccata nel tuo account ✓`, vaiArgomenti: 'Vai agli argomenti',
      pagamentiInArrivo: (email: string) => `I pagamenti online stanno per arrivare. Nel frattempo puoi sbloccare scrivendomi su <a href="https://wa.me/393885680393" target="_blank" rel="noopener">WhatsApp</a> o su <a href="https://instagram.com/ripetizioni_di_analisi_mate" target="_blank" rel="noopener">Instagram</a>: attivo la materia sul tuo account <strong>${email}</strong>.`,
      creaEPaga: 'Crea l’account e paga', aperturaPagamento: 'Account creato. Si apre la finestra di pagamento…',
      accountCreatoEx: 'Account creato. Carmine controlla l’iscrizione e ti attiva gratis le materie collegate al tuo corso: non serve pagare. Se questa materia non è compresa nel tuo corso, puoi sbloccarla qui sotto.',
      sbloccaOra: 'Sblocca ora', acquistoCollegato: (email: string) => `Acquisto collegato al tuo account ${email}.`,
      pagamentoRicevuto: 'Pagamento ricevuto. Sto sbloccando la materia nel tuo account…',
      sbloccoLento: 'Pagamento ricevuto. Lo sblocco richiede ancora qualche istante: ricarica la pagina tra poco, oppure scrivimi dalla pagina Contatti.',
      paddleNonCaricato: 'Il modulo di pagamento non si è caricato. Ricarica la pagina o scrivimi dalla pagina Contatti.',
      emailNonValida: 'Scrivi un indirizzo email valido.', passwordCorta: 'La password deve avere almeno 8 caratteri.',
      passwordDiverse: 'Le due password non coincidono.', erroreGenerico: 'Qualcosa non ha funzionato. Riprova.',
      connessione: 'Connessione assente. Riprova tra un momento.', creaAccount: 'Crea l’account',
      collegatoCome: (e: string) => `Hai effettuato l'accesso come ${e}.`, questoDispositivo: 'questo dispositivo', nomeMancante: 'Scrivi il tuo nome.', nomeSalvato: 'Nome salvato.', studia: 'Studia', sbloccataOk: 'Sbloccata ✓',
      nuovaCorta: 'La nuova password deve avere almeno 8 caratteri.', passwordAggiornata: 'Password aggiornata.',
      passwordNonAggiornata: 'Non è stato possibile aggiornare la password.',
      nessunRisultato: 'Nessun risultato.', unRisultato: '1 risultato', risultati: '§ risultati',
    },
    // accedi / account
    accediDescrizione: 'Accedi al tuo account o creane uno nuovo.',
    accediSommario: "Con l'account acquisti le materie e le ritrovi sbloccate su ogni dispositivo in cui accedi.",
    creaUnAccount: 'Crea un account', ripetiPassword: 'Ripeti la password', nome: 'Nome', tuoNome: 'Il tuo nome', salva: 'Salva',
    passwordDimenticata: 'Password dimenticata? Scrivimi dalla pagina', eTeNeImposto: 'e te ne imposto una nuova.',
    accountDescrizione: 'Le tue materie e i dati del tuo account.', caricamento: 'Caricamento…', leTueMaterie: 'Le tue materie',
    mostraPassword: 'Mostra la password', impostazioni: 'Impostazioni account',
    tuoiDispositivi: 'I tuoi dispositivi', notaDispositivi: "L'account si può usare al massimo su 2 dispositivi. Uscendo dall'account su un dispositivo, il posto si libera.",
    cambiaPassword: 'Cambia password', passwordAttuale: 'Password attuale', nuovaPassword: 'Nuova password', aggiornaPassword: 'Aggiorna la password', esci: "Esci dall'account",
    // cerca
    ricerca: 'Ricerca', cercaSommario: 'Argomenti, definizioni, teoremi ed esercizi di tutte le materie. La ricerca avviene nel browser, senza inviare nulla.',
    cercaEsempio: 'Per esempio: permanenza del segno, forma indeterminata',
    argomento: 'Argomento',
    // contatti
    contattiDescrizione: 'Contatti per informazioni sul materiale, assistenza sugli acquisti e segnalazioni.',
    contattiTesto: 'Per informazioni sul materiale didattico, assistenza sugli acquisti o segnalazioni di eventuali errori, puoi contattare:',
    // prezzi
    prezziDescrizione: "Prezzi dell'accesso completo alle materie di Ripetizioni di Analisi.",
    prezziSommario: "Un acquisto unico per ogni materia, senza abbonamento e senza rinnovi. L'accesso resta tuo, su un massimo di 2 dispositivi.",
    acquistoUnico: 'acquisto unico', cosaComprende: "Che cosa comprende l'accesso completo",
    comprende: [
      'La teoria completa di ogni argomento della materia, con definizioni, teoremi e dimostrazioni',
      'Tutte le schede di esercizi svolti, con ogni passaggio spiegato',
      'Le soluzioni di tutti gli esercizi da fare',
    ],
  },
  en: {
    nomeSito: 'Ripetizioni di Analisi',
    sezioni: { teoria: 'Theory', 'esercizi-svolti': 'Worked examples', esercizi: 'Exercises' } as Record<string, string>,
    indice: 'Contents', chiudi: 'Close', cerca: 'Search', accedi: 'Log in', account: 'Account', ilTuoAccount: 'Your account',
    sbloccata: 'Unlocked', materie: 'Subjects', altreMaterie: 'other subjects', contatti: 'Contact and support', chiSono: 'About me', prezzi: 'Prices', privacy: 'Privacy policy', termini: 'Terms and copyright',
    copyright: '© 2026 Carmine Tornincasa. All rights reserved. Reproduction or distribution, in whole or in part, is prohibited without written permission.',
    notaTermini: 'By purchasing you accept the <a href="/en/termini">terms of use</a>: access is personal and the material may not be shared or distributed.',
    precedente: 'Previous', successivo: 'Next', argomentoSuccessivo: 'Next topic', tornaSu: 'Back to top',
    whatsapp: 'Message me on WhatsApp', lingua: 'Language', inPreparazione: 'coming soon', argomenti: 'topics',
    nonTradotta: 'This page is not yet available in English: it is shown in Italian.',
    homeSopra: 'Theory and exercises', homeTitolo: 'Choose a subject',
    homeSommario: 'For each subject you will find theory, definitions, theorems and proofs, step-by-step worked examples and exercises to solve, with solutions.',
    homeDescrizione: 'Theory and exercises for university mathematics exams, subject by subject.',
    cercaSegnaposto: 'Search for a topic, a theorem, a type of exercise…', cercaNelSito: 'Search the site',
    argomentiEsame: 'The exam topics',
    accessoAttivo: 'Full access active',
    accessoAttivoTesto: (m: string) => `Theory, all worked examples and solutions of ${m} are unlocked in your account.`,
    anteprima: 'Free preview',
    anteprimaTesto: 'For each topic you can read the beginning of the theory and the first 3 sheets of worked examples for free, no account needed.',
    iniziaAnteprima: 'Start with the preview', anteprimaBollino: 'Free preview', sbloccaTutto: 'Unlock everything',
    homeAnteprima: 'Every subject has a free preview: open the one you need and start reading, no account needed.',
    sblocca: 'Unlock',
    pdfArgomento: 'Topic PDF', scaricaPdf: (a: string) => `download ${a} as PDF`, pdfContiene: '(theory, worked examples and exercises, in Italian).',
    inQuestaPagina: 'On this page', teoriaInPreparazione: 'The theory for this topic is coming soon.',
    eserciziLabel: 'Exercises', svoltiMin: 'worked', daFareMin: 'to solve',
    svoltiSuArgomento: 'Worked examples on this topic',
    dafareSuArgomento: (n: number) => `Exercises on this topic: ${n} problems with solutions`,
    svoltiSommario: 'One sheet for each type of problem, with several worked examples of increasing difficulty: first the computation, then the explanation in words. Each sheet starts with links to the theory it uses.',
    svoltiInPreparazione: 'The exercises for this topic are coming soon.',
    dafareSommario: 'Problems to solve on your own. The final solution appears with the button below each problem; each exercise also has its own page, to share with the link.',
    dafareInPreparazione: 'The problems for this topic are coming soon.',
    scheda: 'Sheet', esercizio: 'Exercise', esercizioDaFare: 'Exercise', tutteLeSchede: 'All sheets', tuttiDaFare: 'All exercises',
    teoriaUsata: 'Theory used', vaiA: 'Go to', indiceArgomenti: 'List of topics',
    sbloccaTitolo: (m: string) => `Unlock ${m}`,
    sbloccaDescrizione: (m: string) => `Full access to ${m}: theory, worked examples and solutions.`,
    sbloccaSommario: 'A one-time purchase, no subscription: the subject stays unlocked in your account, on up to 2 devices, with no expiry.',
    includeTeoria: (n: number) => `The <strong>complete theory</strong> of all ${n} topics, with definitions, theorems and proofs`,
    includeSvolti: (n: number) => `All <strong>${n} sheets of worked examples</strong> by type, with every step explained`,
    includeSoluzioni: (n: number) => `The <strong>solutions</strong> of the ${n} exercises`,
    includePdf: 'The <strong>PDF</strong> of each topic',
    unaVoltaSola: 'one-time', unMomento: 'One moment…',
    gratisOra: 'Free, with no account: the beginning of the theory and the first 3 worked examples of each topic.',
    metodiPagamento: 'You can pay by card, PayPal, Apple Pay, Google Pay or the other methods shown in the payment window. Payment is handled by Paddle, which sends the receipt.',
    almenoOtto: 'at least 8 characters',
    js: {
      creaESblocca: 'Create an account and unlock', haiAccount: 'Already have an account?', accedi: 'Log in',
      giaSbloccata: (m: string) => `${m} is already unlocked in your account ✓`, vaiArgomenti: 'Go to the topics',
      pagamentiInArrivo: (email: string) => `Online payments are coming soon. Meanwhile you can unlock by messaging me on <a href="https://wa.me/393885680393" target="_blank" rel="noopener">WhatsApp</a> or <a href="https://instagram.com/ripetizioni_di_analisi_mate" target="_blank" rel="noopener">Instagram</a>: I will activate the subject on your account <strong>${email}</strong>.`,
      creaEPaga: 'Create account and pay', aperturaPagamento: 'Account created. Opening the payment window…',
      accountCreatoEx: 'Account created.',
      sbloccaOra: 'Unlock now', acquistoCollegato: (email: string) => `Purchase linked to your account ${email}.`,
      pagamentoRicevuto: 'Payment received. Unlocking the subject in your account…',
      sbloccoLento: 'Payment received. Unlocking is taking a little longer: reload the page shortly, or message me from the Contact page.',
      paddleNonCaricato: 'The payment form did not load. Reload the page or message me from the Contact page.',
      emailNonValida: 'Enter a valid email address.', passwordCorta: 'The password must be at least 8 characters long.',
      passwordDiverse: 'The two passwords do not match.', erroreGenerico: 'Something went wrong. Please try again.',
      connessione: 'No connection. Try again in a moment.', creaAccount: 'Create account',
      collegatoCome: (e: string) => `You are logged in as ${e}.`, questoDispositivo: 'this device', nomeMancante: 'Enter your name.', nomeSalvato: 'Name saved.', studia: 'Study', sbloccataOk: 'Unlocked ✓',
      nuovaCorta: 'The new password must be at least 8 characters long.', passwordAggiornata: 'Password updated.',
      passwordNonAggiornata: 'The password could not be updated.',
      nessunRisultato: 'No results.', unRisultato: '1 result', risultati: '§ results',
    },
    accediDescrizione: 'Log in to your account or create a new one.',
    accediSommario: 'With an account you buy subjects and find them unlocked on every device where you log in.',
    creaUnAccount: 'Create an account', ripetiPassword: 'Repeat the password', nome: 'Name', tuoNome: 'Your name', salva: 'Save',
    passwordDimenticata: 'Forgot your password? Message me from the', eTeNeImposto: 'page and I will set a new one for you.',
    accountDescrizione: 'Your subjects and account details.', caricamento: 'Loading…', leTueMaterie: 'Your subjects',
    mostraPassword: 'Show password', impostazioni: 'Account settings',
    tuoiDispositivi: 'Your devices', notaDispositivi: 'The account can be used on at most 2 devices. Logging out on a device frees its place.',
    cambiaPassword: 'Change password', passwordAttuale: 'Current password', nuovaPassword: 'New password', aggiornaPassword: 'Update password', esci: 'Log out',
    ricerca: 'Search', cercaSommario: 'Topics, definitions, theorems and exercises of all subjects. The search runs in your browser and sends nothing.',
    cercaEsempio: 'For example: sign permanence, indeterminate form',
    argomento: 'Topic',
    contattiDescrizione: 'Contacts for information about the material, help with purchases and error reports.',
    contattiTesto: 'For information about the study material, help with purchases or to report errors, you can contact:',
    prezziDescrizione: 'Prices of full access to the subjects of Ripetizioni di Analisi.',
    prezziSommario: 'One purchase per subject, with no subscription and no renewals. Access stays yours, on up to 2 devices.',
    acquistoUnico: 'one-time purchase', cosaComprende: 'What full access includes',
    comprende: [
      'The complete theory of every topic of the subject, with definitions, theorems and proofs',
      'All sheets of worked examples, with every step explained',
      'The solutions of all exercises',
    ],
  },
};
export type Testi = (typeof TESTI)['it'];
export const T = (l: Lingua) => TESTI[l] as Testi;
// I soli testi che servono agli script nel browser (le funzioni non passano: si usano i segnaposto).
export function testiJs(l: Lingua) {
  const j = TESTI[l].js as Record<string, unknown>;
  return Object.fromEntries(Object.entries(j).map(([k, v]) => [k, typeof v === 'function' ? (v as (x: string) => string)('§') : v]));
}
