// Livelli e punti esperienza (EXP) degli account. Letto dalle pagine del sito e dal Worker:
// le regole stanno solo qui, così pagina "Livelli e punti" e calcoli restano sempre allineati.

export const LIVELLO_MAX = 100;

// Per passare dal livello n al livello n + 1 servono 60 + 10 (n − 1) EXP.
export const costoLivello = (n: number) => 60 + 10 * (n - 1);
// EXP totali necessari per essere al livello L: somma dei costi da 1 a L − 1.
export const sogliaLivello = (L: number) => 60 * (L - 1) + 5 * (L - 1) * (L - 2);

export interface Fascia { da: number; a: number; nome: string; frase: string; nomeEn: string; fraseEn: string; nomeEs: string; fraseEs: string }
// Ogni dieci livelli cambia il titolo (scelti da Carmine il 31/10/2026).
export const FASCE: Fascia[] = [
  { da: 1, a: 9, nome: 'Matricola', frase: 'Il viaggio comincia.', nomeEn: 'Freshman', fraseEn: 'The journey begins.', nomeEs: 'Principiante', fraseEs: 'Aquí empieza tu aprendizaje.' },
  { da: 10, a: 19, nome: 'Apprendista', frase: 'Le basi sono a posto.', nomeEn: 'Apprentice', fraseEn: 'The basics are in place.', nomeEs: 'Aprendiz', fraseEs: 'Ya dominas los conceptos básicos.' },
  { da: 20, a: 29, nome: 'Esploratore', frase: 'Ogni giorno un argomento nuovo.', nomeEn: 'Explorer', fraseEn: 'A new topic every day.', nomeEs: 'Explorador', fraseEs: 'Cada día descubres un tema nuevo.' },
  { da: 30, a: 39, nome: 'Cavaliere', frase: 'Pronto a qualsiasi esercizio.', nomeEn: 'Knight', fraseEn: 'Ready for any exercise.', nomeEs: 'Caballero', fraseEs: 'Ya puedes enfrentarte a cualquier ejercicio.' },
  { da: 40, a: 49, nome: 'Stratega', frase: 'Sa sempre da dove partire.', nomeEn: 'Strategist', fraseEn: 'Always knows where to start.', nomeEs: 'Estratega', fraseEs: 'Siempre sabes por dónde empezar.' },
  { da: 50, a: 59, nome: 'Campione', frase: 'Le risposte veloci sono la sua specialità.', nomeEn: 'Champion', fraseEn: 'Quick answers are the specialty.', nomeEs: 'Campeón', fraseEs: 'Tu especialidad es responder rápido.' },
  { da: 60, a: 69, nome: 'Dottore', frase: 'Conosce il programma a memoria.', nomeEn: 'Doctor', fraseEn: 'Knows the syllabus by heart.', nomeEs: 'Doctor', fraseEs: 'Conoces el temario de memoria.' },
  { da: 70, a: 79, nome: 'Maestro', frase: 'Gli altri gli chiedono aiuto.', nomeEn: 'Master', fraseEn: 'Others come for help.', nomeEs: 'Maestro', fraseEs: 'Otros estudiantes te piden ayuda.' },
  { da: 80, a: 89, nome: 'Leggenda', frase: 'Se ne parla nei corridoi.', nomeEn: 'Legend', fraseEn: 'Talked about in the hallways.', nomeEs: 'Leyenda', fraseEs: 'Tu constancia se hace notar.' },
  { da: 90, a: 100, nome: 'Mito', frase: 'Oltre ogni livello.', nomeEn: 'Myth', fraseEn: 'Beyond every level.', nomeEs: 'Mito', fraseEs: 'Has llegado a lo más alto.' },
];
export const fasciaDi = (livello: number) => FASCE.find((f) => livello >= f.da && livello <= f.a) ?? FASCE[FASCE.length - 1];

export interface StatoLivello {
  exp: number; livello: number; fascia: string; frase: string;
  base: number; prossimo: number | null; mancano: number; perc: number;
}
export function livelloDa(exp: number, lingua: 'it' | 'en' | 'es' = 'it'): StatoLivello {
  let L = 1;
  while (L < LIVELLO_MAX && exp >= sogliaLivello(L + 1)) L++;
  const base = sogliaLivello(L);
  const prossimo = L < LIVELLO_MAX ? sogliaLivello(L + 1) : null;
  const f = fasciaDi(L);
  return {
    exp, livello: L, fascia: lingua === 'es' ? f.nomeEs : lingua === 'en' ? f.nomeEn : f.nome, frase: lingua === 'es' ? f.fraseEs : lingua === 'en' ? f.fraseEn : f.frase, base, prossimo,
    mancano: prossimo === null ? 0 : prossimo - exp,
    perc: prossimo === null ? 100 : Math.floor(((exp - base) / (prossimo - base)) * 100),
  };
}

// Punti.
// Domande a tempo: ogni sessione propone DOMANDE_SESSIONE domande scelte a caso tra quelle dell'argomento.
// RIPASSO è l'ultimo capitolo di ogni materia (Prove d'esame): le sue domande si pescano da tutti gli argomenti.
export const DOMANDE_SESSIONE = 15;
export const RIPASSO = 'prove-d-esame';
// Ripasso dilazionato (con l'account): una domanda sbagliata torna dopo 1 giorno; ogni risposta corretta data
// il giorno previsto la sposta più avanti (3 e poi 7 giorni); dopo tre risposte corrette esce dal ripasso.
export const RIPASSO_OGGI = 'ripasso-di-oggi';
export const INTERVALLI_RIPASSO = [1, 3, 7];

export const PUNTI = {
  corretta: 10,          // risposta corretta a una domanda a tempo
  esercizio: 15,         // esercizio da fare risolto, con la risposta verificata (una volta sola per esercizio)
  veloce: 5,             // in più se data entro il primo minuto
  secondiVeloce: 60,
  secondiDomanda: 120,   // tempo per ogni domanda
  giorniDimezzati: 7,    // domanda già indovinata nei 7 giorni prima: metà punti
  inattivoSecondi: 120,  // dopo 2 minuti senza attività il conteggio si ferma
};

// Studio attivo di fila (scelta di Carmine del 02/11/2026), senza tetto giornaliero:
// 1 EXP al minuto nei primi 20 minuti, poi 1 EXP al minuto in più ogni 10 minuti fino a 5 EXP al minuto
// (blocchi da 10 minuti: 10, 10, 20, 30, 40, poi 50). Dopo 45 minuti senza studio la serie riparte da capo.
// Ogni ora di studio di fila vale un premio.
export const STUDIO = { primiMinuti: 20, ogniMinuti: 10, maxMinuto: 5, pausaMinuti: 45, premioOra: 50 };
export const puntiMinuto = (m: number) => (m <= STUDIO.primiMinuti ? 1
  : Math.min(STUDIO.maxMinuto, 2 + Math.floor((m - STUDIO.primiMinuti - 1) / STUDIO.ogniMinuti)));

// Traguardi: restano nell'account e danno EXP una sola volta.
export const TRAGUARDI_FISSI = [
  { codice: 'prima-corretta', nome: 'Prima risposta corretta', nomeEn: 'First correct answer', nomeEs: 'Primera respuesta correcta', punti: 20 },
  { codice: 'corrette-100', nome: '100 risposte corrette', nomeEn: '100 correct answers', nomeEs: '100 respuestas correctas', punti: 100 },
  { codice: 'studio-10h', nome: '10 ore di studio', nomeEn: '10 hours of study', nomeEs: '10 horas de estudio', punti: 100 },
];
export const PUNTI_MATERIA_COMPLETA = 150; // ogni argomento con domande di una materia provato almeno una volta
export const puntiTraguardoLivello = (L: number) => 5 * L; // ai livelli 10, 20, …, 100

// Obiettivi della settimana (lunedì-domenica): tre per account.
export const OBIETTIVI = {
  'corrette-arg': { punti: 60, n: 15 },  // 15 risposte corrette su un argomento
  'corrette-tot': { punti: 60, n: 20 },  // 20 risposte corrette
  giorni: { punti: 80, n: 4 },           // studio in 4 giorni diversi
  ore: { punti: 70, n: 180 },            // 3 ore di studio attivo
  argomenti: { punti: 50, n: 3 },        // domande su 3 argomenti diversi
  veloci: { punti: 60, n: 10 },          // 10 risposte corrette nel primo minuto
} as const;
