// Titoli e descrizioni per i motori di ricerca, nelle due lingue.
// I titoli seguono le ricerche reali degli studenti ("limiti esercizi svolti", "teorema di Rolle dimostrazione").
import type { Lingua } from '../i18n';

const IT = {
  home: 'Teoria ed esercizi svolti per le materie scientifiche | Ripetizioni di Analisi',
  homeDescr: "Teoria, teoremi con dimostrazione ed esercizi svolti passo dopo passo di Precorso, Analisi 1 e 2, Algebra lineare, Fisica 1 e 2, Matematica generale, Matematica del 5° anno e materie per i concorsi.",
  materia: (m: string) => `${m}: teoria ed esercizi svolti per l'esame | Ripetizioni di Analisi`,
  materiaDescr: (m: string, d: string, n: number) => `${m}: ${n} argomenti con teoria, dimostrazioni, esercizi svolti passo dopo passo ed esercizi con soluzione. ${d}`,
  teoria: (a: string, m: string) => `${a}: teoria, definizioni e teoremi | ${m}`,
  svoltiLista: (a: string, m: string) => `${a}: esercizi svolti passo dopo passo | ${m}`,
  svoltiListaDescr: (a: string, m: string, n: number) => `${n} schede di esercizi svolti su ${a.toLowerCase()} (${m}), divise per tipologia: ogni passaggio è scritto e spiegato a parole.`,
  scheda: (s: string, m: string) => `${s}: esercizi svolti | ${m}`,
  schedaDescr: (s: string, a: string, m: string) => `${s}: esercizi svolti passo dopo passo, con il calcolo e la spiegazione di ogni passaggio. ${a}, ${m}.`,
  dafareLista: (a: string, m: string) => `${a}: esercizi con soluzioni | ${m}`,
  dafareListaDescr: (a: string, m: string, n: number) => `${n} esercizi da svolgere su ${a.toLowerCase()} (${m}), con la soluzione da controllare.`,
  dafare: (s: string, a: string) => `${s}: esercizio con soluzione | ${a}`,
  dafareDescr: (s: string, a: string, m: string) => `Esercizio di ${m} su ${a.toLowerCase()}: ${s}. Con la soluzione per verificare il risultato.`,
  livello: 'Università',
};
const EN: typeof IT = {
  home: 'Calculus 1 and 2: theory and worked examples | Ripetizioni di Analisi',
  homeDescr: 'Theory, definitions, theorems with proofs and step-by-step worked examples for Mathematical Analysis 1, Mathematical Analysis 2 and Precalculus, to prepare university exams.',
  materia: (m) => `${m}: theory and worked examples for the exam | Ripetizioni di Analisi`,
  materiaDescr: (m, d, n) => `${m}: ${n} topics with theory, proofs, step-by-step worked examples and exercises with solutions. ${d}`,
  teoria: (a, m) => `${a}: theory, definitions and theorems | ${m}`,
  svoltiLista: (a, m) => `${a}: step-by-step worked examples | ${m}`,
  svoltiListaDescr: (a, m, n) => `${n} sheets of worked examples on ${a.toLowerCase()} (${m}), grouped by type: every step is written out and explained.`,
  scheda: (s, m) => `${s}: worked examples | ${m}`,
  schedaDescr: (s, a, m) => `${s}: step-by-step worked examples, with the computation and an explanation of every step. ${a}, ${m}.`,
  dafareLista: (a, m) => `${a}: exercises with solutions | ${m}`,
  dafareListaDescr: (a, m, n) => `${n} exercises on ${a.toLowerCase()} (${m}), with the solution to check your answer.`,
  dafare: (s, a) => `${s}: exercise with solution | ${a}`,
  dafareDescr: (s, a, m) => `${m} exercise on ${a.toLowerCase()}: ${s}. With the solution to check the result.`,
  livello: 'University',
};
export const SEO = (l: Lingua) => (l === 'en' ? EN : IT);
