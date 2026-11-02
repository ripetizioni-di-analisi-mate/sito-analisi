// Titoli e descrizioni per i motori di ricerca, nelle due lingue.
// I titoli seguono le ricerche reali degli studenti ("limiti esercizi svolti", "teorema di Rolle dimostrazione").
import type { Lingua } from '../i18n';

// Google mostra circa 60-65 caratteri del titolo: si sceglie la prima variante che ci sta, dalla più completa
// alla più breve (le parole cercate restano sempre in testa); se nessuna ci sta, l'ultima.
const LIMITE = 65;
const scegli = (...varianti: string[]) => varianti.find((v) => v.length <= LIMITE) ?? varianti[varianti.length - 1];

const IT = {
  home: 'Teoria ed esercizi svolti per le materie scientifiche | Ripetizioni di Analisi',
  homeDescr: "Teoria, teoremi con dimostrazione ed esercizi svolti passo dopo passo di Precorso, Analisi 1 e 2, Algebra lineare, Fisica 1 e 2, Matematica generale, Matematica del 5° anno e materie per i concorsi.",
  materia: (m: string) => scegli(`${m}: teoria ed esercizi svolti per l'esame | Ripetizioni di Analisi`, `${m}: teoria ed esercizi svolti per l'esame`, `${m}: teoria ed esercizi svolti`),
  materiaDescr: (m: string, d: string, n: number) => `${m}: ${n} argomenti con teoria, dimostrazioni, esercizi svolti passo dopo passo ed esercizi con soluzione. ${d}`,
  teoria: (a: string, m: string) => scegli(`${a}: teoria, definizioni e teoremi | ${m}`, `${a}: teoria e teoremi | ${m}`, `${a}: teoria e teoremi`),
  svoltiLista: (a: string, m: string) => scegli(`${a}: esercizi svolti passo dopo passo | ${m}`, `${a}: esercizi svolti | ${m}`, `${a}: esercizi svolti`),
  svoltiListaDescr: (a: string, m: string, n: number) => `${n} schede di esercizi svolti su ${a.toLowerCase()} (${m}), divise per tipologia: ogni passaggio è scritto e spiegato a parole.`,
  scheda: (s: string, m: string) => scegli(`${s}: esercizi svolti | ${m}`, `${s}: esercizi svolti`),
  schedaDescr: (s: string, a: string, m: string) => `${s}: esercizi svolti passo dopo passo, con il calcolo e la spiegazione di ogni passaggio. ${a}, ${m}.`,
  dafareLista: (a: string, m: string) => scegli(`${a}: esercizi con soluzioni | ${m}`, `${a}: esercizi con soluzioni`),
  dafareListaDescr: (a: string, m: string, n: number) => `${n} esercizi da svolgere su ${a.toLowerCase()} (${m}), con la soluzione da controllare.`,
  // il nome breve della materia distingue esercizi con lo stesso titolo in materie diverse
  dafare: (s: string, m: string) => scegli(`${s}: esercizio con soluzione | ${m}`, `${s}: esercizio | ${m}`, `${s}: esercizio con soluzione`),
  dafareDescr: (s: string, a: string, m: string) => `Esercizio di ${m} su ${a.toLowerCase()}: ${s}. Con la soluzione per verificare il risultato.`,
  livello: 'Università',
};
// Fuori dall'Italia «Analisi matematica» si cerca come «Calculus»: nei titoli inglesi per i motori
// compare il nome usato all'estero, con il nome del corso fra parentesi nella pagina della materia.
const NOMI_CERCATI: Record<string, string> = {
  'Mathematical Analysis 1': 'Calculus 1', 'Analysis 1': 'Calculus 1',
  'Mathematical Analysis 2': 'Multivariable Calculus', 'Analysis 2': 'Multivariable Calculus',
  'Linear algebra and analytic geometry': 'Linear Algebra and Analytic Geometry',
};
function cercato(m: string, completo = false): string {
  const n = NOMI_CERCATI[m];
  if (!n) return m;
  return completo && /Analysis/.test(m) ? `${n} (${m})` : n;
}
const EN: typeof IT = {
  home: 'Calculus, linear algebra and physics: theory and worked examples | Ripetizioni di Analisi',
  homeDescr: 'Theory, theorems with proofs and step-by-step worked examples for Calculus 1 and 2 (Mathematical Analysis), Precalculus, Linear Algebra, Physics 1 and 2 and Mathematics for Economics, for university exams.',
  materia: (m) => scegli(`${cercato(m, true)}: theory and worked examples for the exam | Ripetizioni di Analisi`, `${cercato(m, true)}: theory and worked examples for the exam`, `${cercato(m, true)}: theory and worked examples`, `${cercato(m)}: theory and worked examples`),
  materiaDescr: (m, d, n) => `${cercato(m, true)}: ${n} topics with theory, proofs, step-by-step worked examples and exercises with solutions. ${d}`,
  teoria: (a, m) => scegli(`${a}: theory, definitions and theorems | ${cercato(m)}`, `${a}: theory and theorems | ${cercato(m)}`, `${a}: theory and theorems`),
  svoltiLista: (a, m) => scegli(`${a}: step-by-step worked examples | ${cercato(m)}`, `${a}: worked examples | ${cercato(m)}`, `${a}: worked examples`),
  svoltiListaDescr: (a, m, n) => `${n} sheets of worked examples on ${a.toLowerCase()} (${cercato(m)}), grouped by type: every step is written out and explained.`,
  scheda: (s, m) => scegli(`${s}: worked examples | ${cercato(m)}`, `${s}: worked examples`),
  schedaDescr: (s, a, m) => `${s}: step-by-step worked examples, with the computation and an explanation of every step. ${a}, ${cercato(m)}.`,
  dafareLista: (a, m) => scegli(`${a}: exercises with solutions | ${cercato(m)}`, `${a}: exercises with solutions`),
  dafareListaDescr: (a, m, n) => `${n} exercises on ${a.toLowerCase()} (${cercato(m)}), with the solution to check your answer.`,
  dafare: (s, m) => scegli(`${s}: exercise with solution | ${cercato(m)}`, `${s}: exercise | ${cercato(m)}`, `${s}: exercise with solution`),
  dafareDescr: (s, a, m) => `${cercato(m)} exercise on ${a.toLowerCase()}: ${s}. With the solution to check the result.`,
  livello: 'University',
};
export const SEO = (l: Lingua) => (l === 'en' ? EN : IT);
