// Titoli e descrizioni per i motori di ricerca, nelle due lingue.
// I titoli seguono le ricerche reali degli studenti ("limiti esercizi svolti", "teorema di Rolle dimostrazione").
import type { Lingua } from '../i18n';

// Google mostra circa 60-65 caratteri del titolo: si sceglie la prima variante che ci sta, dalla più completa
// alla più breve (le parole cercate restano sempre in testa); se nessuna ci sta, l'ultima.
const LIMITE = 65;
const scegli = (...varianti: string[]) => varianti.find((v) => v.length <= LIMITE) ?? varianti[varianti.length - 1];
// Frase seguita da un elenco di nomi: si aggiungono nomi finché la descrizione resta entro i 155 caratteri.
const conNomi = (inizio: string, nomi: string[]) => {
  let s = inizio;
  let k = 0;
  for (const n of nomi) { const t = `${s}${k ? ', ' : ': '}${n}`; if (t.length > 153) continue; s = t; k++; }
  return `${s}.`;
};

// Nomi degli argomenti come li cercano gli studenti, quando il titolo del capitolo è diverso
// («derivate esercizi svolti», «integrali esercizi svolti»): usati solo nei titoli per i motori.
const ARGOMENTI_CERCATI: Record<string, string> = {
  'Calcolo differenziale e Taylor': 'Derivate e formula di Taylor',
  'Calcolo integrale': 'Integrali',
};
const arg = (a: string) => ARGOMENTI_CERCATI[a] ?? a;
// Lo stesso per i titoli inglesi: i nomi dei capitoli come si cercano all'estero («derivatives», «infinite series»).
const ARGOMENTI_CERCATI_EN: Record<string, string> = {
  'Differential calculus and Taylor': 'Derivatives and Taylor polynomials',
  'Integral calculus': 'Integrals',
  'Numerical series': 'Infinite series',
  'Graphing functions': 'Curve sketching',
  'Free and constrained maxima and minima': 'Maxima, minima and Lagrange multipliers',
  'Differential calculus in several variables': 'Partial derivatives and differentiability',
};
const argEn = (a: string) => ARGOMENTI_CERCATI_EN[a] ?? a;
const IT = {
  home: 'Matematica e fisica: teoria ed esercizi svolti | Ripetizioni di Analisi',
  homeDescr: "Matematica e fisica per università, superiori e concorsi: teoria, teoremi con dimostrazione ed esercizi svolti passo dopo passo di Analisi 1 e 2, Algebra lineare, Fisica 1 e 2, Matematica generale e Precorso.",
  materia: (m: string) => scegli(`${m}: teoria ed esercizi svolti per l'esame | Ripetizioni di Analisi`, `${m}: teoria ed esercizi svolti per l'esame`, `${m}: teoria ed esercizi svolti`),
  materiaDescr: (m: string, d: string, n: number) => `${m}: ${n} argomenti con teoria, dimostrazioni, esercizi svolti passo dopo passo ed esercizi con soluzione. ${d}`,
  teoria: (a: string, m: string) => scegli(`${arg(a)}: teoria, definizioni e teoremi | ${m}`, `${arg(a)}: teoria e teoremi | ${m}`, `${arg(a)}: teoria e teoremi`),
  svoltiLista: (a: string, m: string) => scegli(`${arg(a)}: esercizi svolti passo dopo passo | ${m}`, `${arg(a)}: esercizi svolti | ${m}`, `${arg(a)}: esercizi svolti`),
  svoltiListaDescr: (a: string, m: string, n: number) => `${n} schede di esercizi svolti su ${a.toLowerCase()} (${m}), divise per tipologia: ogni passaggio è scritto e spiegato a parole.`,
  scheda: (s: string, m: string) => scegli(`${s}: esercizi svolti | ${m}`, `${s}: esercizi svolti`),
  schedaDescr: (s: string, a: string, m: string) => `${s}: esercizi svolti passo dopo passo, con il calcolo e la spiegazione di ogni passaggio. ${a}, ${m}.`,
  dafareLista: (a: string, m: string) => scegli(`${arg(a)}: esercizi con soluzioni | ${m}`, `${arg(a)}: esercizi con soluzioni`),
  dafareListaDescr: (a: string, m: string, n: number) => `${n} esercizi da svolgere su ${a.toLowerCase()} (${m}), con la soluzione da controllare.`,
  // il nome breve della materia distingue esercizi con lo stesso titolo in materie diverse
  dafare: (s: string, m: string) => scegli(`${s}: esercizio con soluzione | ${m}`, `${s}: esercizio | ${m}`, `${s}: esercizio con soluzione`),
  dafareDescr: (s: string, a: string, m: string) => `Esercizio di ${m} su ${a.toLowerCase()}: ${s}. Con la soluzione per verificare il risultato.`,
  livello: 'Università',
  teoremi: (m: string, b: string) => scegli(`Teoremi e definizioni di ${m}: l'elenco completo | Ripetizioni di Analisi`, `Teoremi e definizioni di ${m}: l'elenco completo`, `Teoremi e definizioni di ${b}`),
  teoremiDescr: (m: string, nd: number, nt: number, primi: string[]) => conNomi(`${nt} teoremi e ${nd} definizioni di ${m} , ognuno con enunciato, dimostrazione ed esercizi`, primi),
  // pagina singola di un teorema o di una definizione («Teorema di Rolle: enunciato e dimostrazione | Analisi 1»)
  voce: (v: string, tipo: string, dim: boolean, b: string, a: string) => {
    const cosa = tipo === 'definizione' ? 'definizione' : dim ? 'enunciato e dimostrazione' : 'enunciato';
    return scegli(`${v}: ${cosa} | ${a} · ${b}`, `${v}: ${cosa} | ${b}`, `${v} | ${b}`, v);
  },
  voceDescr: (v: string, tipo: string, dim: boolean, a: string, m: string, testo: string) => {
    const testa = `${v} (${m}, ${a})${dim ? ', con dimostrazione ed esercizi' : ''}: `;
    return taglia(testa + (testo.length >= 60 ? testo : tipo === 'definizione' ? 'definizione ed esercizi in cui si usa.' : 'enunciato ed esercizi in cui si applica.'));
  },
};
// Descrizione entro 158 caratteri, tagliata su una parola intera.
function taglia(s: string): string {
  return s.length <= 158 ? s : `${s.slice(0, 155).replace(/\s+\S*$/, '')}…`;
}
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
  // All'estero si cerca «calculus», «solved problems» (USA) o «worked examples» (Regno Unito) e «proofs»: i titoli usano
  // questi termini, le descrizioni li affiancano, e dicono che le pagine sono in inglese per gli studenti in Italia e all'estero.
  home: 'Calculus, Linear Algebra and Physics: theory and solved problems',
  homeDescr: 'Theory, theorems with proofs and step-by-step solved problems for university exams: Calculus 1 and 2 (Mathematical Analysis 1 and 2), Precalculus, Linear Algebra, Physics 1 and 2, Mathematics for Economics. Free previews, in English.',
  materia: (m) => scegli(`${cercato(m, true)}: theory, proofs and solved problems for the exam | Ripetizioni di Analisi`, `${cercato(m, true)}: theory, proofs and solved problems for the exam`, `${cercato(m, true)}: theory, proofs and solved problems`, `${cercato(m)}: theory, proofs and solved problems`),
  materiaDescr: (m, d, n) => `${cercato(m, true)}: ${n} topics with theory, proofs of the theorems, step-by-step worked examples and practice problems with solutions. ${d}`,
  teoria: (a, m) => scegli(`${argEn(a)}: definitions, theorems and proofs | ${cercato(m)}`, `${argEn(a)}: theory and proofs | ${cercato(m)}`, `${argEn(a)}: theory and proofs`),
  svoltiLista: (a, m) => scegli(`${argEn(a)}: solved problems step by step | ${cercato(m)}`, `${argEn(a)}: solved problems | ${cercato(m)}`, `${argEn(a)}: solved problems`),
  svoltiListaDescr: (a, m, n) => `${n} sheets of worked examples on ${a.toLowerCase()} (${cercato(m)}), grouped by type of problem: every step is written out and explained in words.`,
  scheda: (s, m) => scegli(`${s}: solved problems step by step | ${cercato(m)}`, `${s}: solved problems | ${cercato(m)}`, `${s}: solved problems`),
  schedaDescr: (s, a, m) => `${s}: worked examples solved step by step, with the computation and an explanation of every step. ${a}, ${cercato(m)}.`,
  dafareLista: (a, m) => scegli(`${argEn(a)}: practice problems with solutions | ${cercato(m)}`, `${argEn(a)}: practice problems with solutions`, `${argEn(a)}: practice problems`),
  dafareListaDescr: (a, m, n) => `${n} practice problems on ${a.toLowerCase()} (${cercato(m)}), each with the solution to check your answer.`,
  dafare: (s, m) => scegli(`${s}: practice problem with solution | ${cercato(m)}`, `${s}: practice problem | ${cercato(m)}`, `${s}: practice problem with solution`),
  dafareDescr: (s, a, m) => `${cercato(m)} practice problem on ${a.toLowerCase()}: ${s}. With the solution to check the result.`,
  livello: 'University',
  teoremi: (m, b) => scegli(`${cercato(m)}: all definitions and theorems with proofs | Ripetizioni di Analisi`, `${cercato(m)}: all definitions and theorems with proofs`, `${cercato(m)}: all definitions and theorems`, `${cercato(b)}: definitions and theorems`),
  teoremiDescr: (m, nd, nt, primi) => conNomi(`${nt} theorems and ${nd} definitions of ${cercato(m)}, each linked to its statement and proof`, primi),
  voce: (v, tipo, dim, b, a) => {
    const cosa = tipo === 'definizione' ? 'definition' : dim ? 'statement and proof' : 'statement';
    return scegli(`${v}: ${cosa} | ${argEn(a)} · ${cercato(b)}`, `${v}: ${cosa} | ${cercato(b)}`, `${v} | ${cercato(b)}`, v);
  },
  voceDescr: (v, tipo, dim, a, m, testo) => {
    const testa = `${v} (${cercato(m)}, ${a})${dim ? ', with proof and exercises' : ''}: `;
    return taglia(testa + (testo.length >= 60 ? testo : tipo === 'definizione' ? 'definition and the exercises where it is used.' : 'statement and the exercises where it is applied.'));
  },
};
export const SEO = (l: Lingua) => (l === 'en' ? EN : IT);
