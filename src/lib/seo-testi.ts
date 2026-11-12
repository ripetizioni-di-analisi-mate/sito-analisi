// Titoli e descrizioni per i motori di ricerca, nelle due lingue.
// I titoli seguono le ricerche reali degli studenti ("limiti esercizi svolti", "teorema di Rolle dimostrazione").
import type { Lingua } from '../i18n';
import { MATERIE } from '../data/materie';

// Tipo di materia: decide le parole dei titoli (un concorso ha «quiz», non «teoremi»; alle superiori ci sono
// le verifiche, non l'esame) e il nome con cui la materia si cerca («Matematica 3° anno superiori»).
type Tipo = 'universita' | 'superiori' | 'concorsi' | 'test' | 'semestre' | 'zero';
const TIPO_GRUPPO: Record<string, Tipo> = {
  'Università': 'universita', 'Superiori': 'superiori', 'Concorsi': 'concorsi',
  'TOLC, OFA e test di ingresso': 'test', 'Semestre filtro': 'semestre', 'Percorso per principianti': 'zero',
};
interface Contesto { tipo: Tipo; slug: string; titolo: string; breve: string }
// Le viste passano il titolo o il nome breve della materia: da entrambi si risale alla materia.
const PER_NOME = new Map<string, Contesto>();
for (const x of MATERIE) {
  const c: Contesto = { tipo: TIPO_GRUPPO[x.gruppo] ?? 'universita', slug: x.slug, titolo: x.titolo, breve: x.breve };
  PER_NOME.set(x.titolo, c); PER_NOME.set(x.breve, c);
}
const tipoDi = (m: string): Tipo => PER_NOME.get(m)?.tipo ?? 'universita';
// Nome della materia in coda ai titoli, come si cerca: le superiori con «superiori», il semestre filtro per esteso.
function nomeCercato(m: string): string {
  const c = PER_NOME.get(m);
  if (!c) return m;
  if (c.tipo === 'superiori') return `${c.breve} superiori`;
  if (c.slug === 'matematica-semestre-filtro') return 'Matematica semestre filtro';
  return c.breve;
}
const nomeBreve = (m: string) => PER_NOME.get(m)?.breve ?? m;
// Nelle descrizioni il nome va fra parentesi: «TOLC-I (Ingegneria)» perde la sua parentesi.
const senzaParentesi = (m: string) => m.replace(/\s*\([^)]*\)\s*$/, '');
// Parole dei titoli per tipo di materia: forma completa e forma breve.
const PAROLE: Record<Tipo, { teoria: [string, string]; svolti: [string, string]; dafare: [string, string]; uno: [string, string]; nome: string }> = {
  universita: { teoria: ['teoria, definizioni e teoremi', 'teoria e teoremi'], svolti: ['esercizi svolti passo dopo passo', 'esercizi svolti'], dafare: ['esercizi con soluzioni', 'esercizi con soluzioni'], uno: ['esercizio con soluzione', 'esercizio'], nome: 'Esercizio' },
  superiori: { teoria: ['teoria, formule ed esempi', 'teoria ed esempi'], svolti: ['esercizi svolti passo dopo passo', 'esercizi svolti'], dafare: ['esercizi con soluzioni', 'esercizi con soluzioni'], uno: ['esercizio con soluzione', 'esercizio'], nome: 'Esercizio' },
  concorsi: { teoria: ['teoria per i quiz, con esempi', 'teoria per i quiz'], svolti: ['quiz svolti e commentati', 'quiz svolti'], dafare: ['quiz con soluzione', 'quiz con soluzione'], uno: ['quiz con soluzione', 'quiz'], nome: 'Quiz' },
  test: { teoria: ['teoria per i quiz, con esempi', 'teoria per i quiz'], svolti: ['quiz svolti e commentati', 'quiz svolti'], dafare: ['quiz con soluzione', 'quiz con soluzione'], uno: ['quiz con soluzione', 'quiz'], nome: 'Quiz' },
  semestre: { teoria: ['teoria ed esempi', 'teoria'], svolti: ['esercizi svolti e commentati', 'esercizi svolti'], dafare: ['esercizi con soluzioni', 'esercizi con soluzioni'], uno: ['esercizio con soluzione', 'esercizio'], nome: 'Esercizio' },
  zero: { teoria: ['spiegazione dalle basi con esempi', 'teoria ed esempi'], svolti: ['esercizi svolti passo dopo passo', 'esercizi svolti'], dafare: ['esercizi con soluzioni', 'esercizi con soluzioni'], uno: ['esercizio con soluzione', 'esercizio'], nome: 'Esercizio' },
};
// Livello di studio per i dati strutturati (educationalLevel).
const LIVELLI: Record<Tipo, [string, string]> = {
  universita: ['Università', 'University'], superiori: ['Scuola secondaria di secondo grado', 'High school'],
  concorsi: ['Concorsi pubblici', 'Public competitive exams'], test: ["Test di ammissione all'università", 'University admission tests'],
  semestre: ['Università', 'University'], zero: ['Livello base', 'Beginner'],
};
// Titoli generici («Quesito 3»): da soli sarebbero uguali in ogni capitolo, quindi prendono il nome del capitolo.
const GENERICO = /^(Quesito|Esercizio|Problema|Domanda|Question|Problem|Exercise)\s+\d+$/i;
const conCapitolo = (s: string, ab?: string) => (ab && GENERICO.test(s.trim()) ? `${ab} · ${s}` : s);

// Google mostra circa 60-65 caratteri del titolo: si sceglie la prima variante che ci sta, dalla più completa
// alla più breve (le parole cercate restano sempre in testa); se nessuna ci sta, l'ultima.
const LIMITE = 65;
const scegli = (...varianti: string[]) => varianti.find((v) => v.length <= LIMITE) ?? varianti[varianti.length - 1];
// Come sopra, ma prima di rinunciare al nome della materia si accetta un titolo fino a 72 caratteri: la parte
// cercata resta in testa e Google legge il titolo intero anche quando ne mostra un po' meno.
const TOLLERANZA = 72;
const scegliCon = (conMateria: string[], senza: string) =>
  conMateria.find((v) => v.length <= LIMITE) ?? conMateria.find((v) => v.length <= TOLLERANZA) ?? senza;
// Titolo di una pagina di capitolo: capitolo, che cosa contiene, materia. Se non ci sta si accorcia prima la
// descrizione, poi il nome del capitolo (nome breve); la materia si toglie solo per ultima.
function titoloCapitolo(a: string, ab: string | undefined, cosa: [string, string], m: string): string {
  const brevi = ab && ab !== a ? [`${ab}: ${cosa[0]} | ${m}`, `${ab}: ${cosa[1]} | ${m}`] : [];
  const interi = [`${a}: ${cosa[0]} | ${m}`, `${a}: ${cosa[1]} | ${m}`];
  // prima il titolo intero del capitolo (anche con la tolleranza), poi il nome breve
  return interi.find((v) => v.length <= LIMITE) ?? interi.find((v) => v.length <= TOLLERANZA) ?? scegliCon(brevi, `${a}: ${cosa[1]}`);
}
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
// Titoli delle pagine delle materie che non seguono lo schema generale.
const TITOLI_MATERIA: Record<string, string> = {
  'chimica-semestre-filtro': 'Chimica e propedeutica biochimica (semestre filtro): teoria ed esercizi',
  'matematica-semestre-filtro': 'Basi di matematica per il semestre filtro: teoria ed esercizi svolti',
};
const IT = {
  home: 'Matematica e fisica: teoria ed esercizi svolti | Ripetizioni di Analisi',
  homeDescr: 'Teoria ed esercizi svolti di matematica, fisica, chimica e biologia: esami universitari, superiori, semestre filtro di Medicina, TOLC e concorsi.',
  materia: (m: string) => {
    const c = PER_NOME.get(m);
    if (c && TITOLI_MATERIA[c.slug]) return TITOLI_MATERIA[c.slug];
    const tipo = tipoDi(m);
    if (tipo === 'superiori') return scegli(`${m} superiori: teoria ed esercizi svolti per le verifiche`, `${m} superiori: teoria ed esercizi svolti`);
    if (tipo === 'concorsi') return scegli(`${m}: teoria, quiz svolti e simulazione della prova`, `${m}: teoria, quiz svolti e simulazione`, `${m}: teoria e quiz svolti`);
    if (tipo === 'zero') return scegli(`${m}: teoria ed esercizi svolti gratuiti, dalle basi`, `${m}: teoria ed esercizi svolti gratuiti`);
    if (tipo === 'semestre' || tipo === 'test') return scegliCon([`${m}: teoria ed esercizi svolti | Ripetizioni di Analisi`, `${m}: teoria ed esercizi svolti`], `${nomeBreve(m)}: teoria ed esercizi svolti`);
    return scegli(`${m}: teoria ed esercizi svolti per l'esame | Ripetizioni di Analisi`, `${m}: teoria ed esercizi svolti per l'esame`, `${m}: teoria ed esercizi svolti`);
  },
  materiaDescr: (m: string, d: string, n: number) => {
    const tipo = tipoDi(m);
    if (tipo === 'superiori') return `${m} delle superiori: ${n} argomenti con teoria, esercizi svolti passo dopo passo ed esercizi con soluzione. ${d}`;
    if (tipo === 'concorsi' || tipo === 'test') return `${m}: ${n} argomenti con teoria, quiz svolti e commentati e quiz con soluzione. ${d}`;
    if (tipo === 'semestre' || tipo === 'zero') return `${m}: ${n} argomenti con teoria, esercizi svolti passo dopo passo ed esercizi con soluzione. ${d}`;
    return `${m}: ${n} argomenti con teoria, dimostrazioni, esercizi svolti passo dopo passo ed esercizi con soluzione. ${d}`;
  },
  teoria: (a: string, m: string, ab?: string) => titoloCapitolo(arg(a), ARGOMENTI_CERCATI[a] ? undefined : ab, PAROLE[tipoDi(m)].teoria, nomeCercato(m)),
  svoltiLista: (a: string, m: string, ab?: string) => titoloCapitolo(arg(a), ARGOMENTI_CERCATI[a] ? undefined : ab, PAROLE[tipoDi(m)].svolti, nomeCercato(m)),
  svoltiListaDescr: (a: string, m: string, n: number) => {
    const quiz = ['concorsi', 'test'].includes(tipoDi(m));
    return quiz
      ? `${n} schede di quiz svolti su ${a.toLowerCase()} (${senzaParentesi(m)}): per ogni quiz la risposta corretta e la spiegazione del procedimento.`
      : `${n} schede di esercizi svolti su ${a.toLowerCase()} (${senzaParentesi(m)}), divise per tipologia: ogni passaggio è scritto e spiegato a parole.`;
  },
  scheda: (s: string, m: string) => {
    const cosa = PAROLE[tipoDi(m)].svolti[1];
    return scegliCon([`${s}: ${cosa} | ${nomeCercato(m)}`, `${s}: ${cosa} | ${nomeBreve(m)}`], `${s}: ${cosa}`);
  },
  schedaDescr: (s: string, a: string, m: string) => (['concorsi', 'test'].includes(tipoDi(m))
    ? `${s}: quiz svolti con la risposta corretta e la spiegazione del procedimento. ${a}, ${senzaParentesi(m)}.`
    : `${s}: esercizi svolti passo dopo passo, con il calcolo e la spiegazione di ogni passaggio. ${a}, ${senzaParentesi(m)}.`),
  dafareLista: (a: string, m: string, ab?: string) => titoloCapitolo(arg(a), ARGOMENTI_CERCATI[a] ? undefined : ab, PAROLE[tipoDi(m)].dafare, nomeCercato(m)),
  dafareListaDescr: (a: string, m: string, n: number) => (['concorsi', 'test'].includes(tipoDi(m))
    ? `${n} quiz da svolgere su ${a.toLowerCase()} (${senzaParentesi(m)}), con la risposta corretta da controllare.`
    : `${n} esercizi da svolgere su ${a.toLowerCase()} (${senzaParentesi(m)}), con la soluzione da controllare.`),
  // il nome della materia distingue esercizi con lo stesso titolo in materie diverse; i titoli generici
  // («Quesito 3») prendono anche il nome del capitolo
  dafare: (s: string, m: string, ab?: string) => {
    const t = conCapitolo(s, ab), cosa = PAROLE[tipoDi(m)].uno;
    return scegliCon([`${t}: ${cosa[0]} | ${nomeCercato(m)}`, `${t}: ${cosa[0]} | ${nomeBreve(m)}`, `${t}: ${cosa[1]} | ${nomeBreve(m)}`], `${t}: ${cosa[0]}`);
  },
  dafareDescr: (s: string, a: string, m: string, testo = '') => {
    const nome = PAROLE[tipoDi(m)].nome;
    // titolo generico: la descrizione riporta l'inizio della traccia, che distingue la pagina dalle altre del capitolo
    if (GENERICO.test(s.trim()) && testo.length >= 40) return taglia(`${s} di ${senzaParentesi(m)} su ${a.toLowerCase()}, con la soluzione: ${testo}`);
    return `${nome} di ${senzaParentesi(m)} su ${a.toLowerCase()}: ${s}. Con la soluzione per verificare il risultato.`;
  },
  livello: 'Università',
  livelloDi: (m: string) => LIVELLI[tipoDi(m)][0],
  teoremi: (m: string, b: string) => scegli(`Teoremi e definizioni di ${m}: l'elenco completo | Ripetizioni di Analisi`, `Teoremi e definizioni di ${m}: l'elenco completo`, `Teoremi e definizioni di ${b}`),
  teoremiDescr: (m: string, nd: number, nt: number, primi: string[]) => conNomi(`${nt} teoremi e ${nd} definizioni di ${m}, ognuno con enunciato, dimostrazione ed esercizi`, primi),
  // pagina singola di un teorema o di una definizione («Teorema di Rolle: enunciato e dimostrazione | Analisi 1»);
  // se lo stesso titolo compare in più capitoli della materia (ripetuta) il capitolo resta nel titolo
  voce: (v: string, tipo: string, dim: boolean, b: string, a: string, ripetuta = false) => {
    const cosa = tipo === 'definizione' ? 'definizione' : dim ? 'enunciato e dimostrazione' : 'enunciato';
    return ripetuta
      ? scegli(`${v}: ${cosa} | ${a} · ${b}`, `${v} | ${a} · ${b}`, `${v} (${a}) | ${b}`, `${v} | ${a}`)
      : scegli(`${v}: ${cosa} | ${a} · ${b}`, `${v}: ${cosa} | ${b}`, `${v} | ${b}`, v);
  },
  voceDescr: (v: string, tipo: string, dim: boolean, a: string, m: string, testo: string, alias: string[] = []) => {
    const testa = `${v}${alias.length ? ` (${alias[0]})` : ''} (${m}, ${a})${dim ? ', con dimostrazione ed esercizi' : ''}: `;
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
  teoria: (a, m, ab) => titoloCapitolo(argEn(a), ARGOMENTI_CERCATI_EN[a] ? undefined : ab, ['definitions, theorems and proofs', 'theory and proofs'], cercato(m)),
  svoltiLista: (a, m, ab) => titoloCapitolo(argEn(a), ARGOMENTI_CERCATI_EN[a] ? undefined : ab, ['solved problems step by step', 'solved problems'], cercato(m)),
  svoltiListaDescr: (a, m, n) => `${n} sheets of worked examples on ${a.toLowerCase()} (${cercato(m)}), grouped by type of problem: every step is written out and explained in words.`,
  scheda: (s, m) => scegliCon([`${s}: solved problems step by step | ${cercato(m)}`, `${s}: solved problems | ${cercato(m)}`], `${s}: solved problems`),
  schedaDescr: (s, a, m) => `${s}: worked examples solved step by step, with the computation and an explanation of every step. ${a}, ${cercato(m)}.`,
  dafareLista: (a, m, ab) => titoloCapitolo(argEn(a), ARGOMENTI_CERCATI_EN[a] ? undefined : ab, ['practice problems with solutions', 'practice problems'], cercato(m)),
  dafareListaDescr: (a, m, n) => `${n} practice problems on ${a.toLowerCase()} (${cercato(m)}), each with the solution to check your answer.`,
  dafare: (s, m, ab) => { const t = conCapitolo(s, ab); return scegliCon([`${t}: practice problem with solution | ${cercato(m)}`, `${t}: practice problem | ${cercato(m)}`], `${t}: practice problem with solution`); },
  dafareDescr: (s, a, m) => `${cercato(m)} practice problem on ${a.toLowerCase()}: ${s}. With the solution to check the result.`,
  livello: 'University',
  livelloDi: () => 'University',
  teoremi: (m, b) => scegli(`${cercato(m)}: all definitions and theorems with proofs | Ripetizioni di Analisi`, `${cercato(m)}: all definitions and theorems with proofs`, `${cercato(m)}: all definitions and theorems`, `${cercato(b)}: definitions and theorems`),
  teoremiDescr: (m, nd, nt, primi) => conNomi(`${nt} theorems and ${nd} definitions of ${cercato(m)}, each linked to its statement and proof`, primi),
  voce: (v, tipo, dim, b, a, ripetuta = false) => {
    const cosa = tipo === 'definizione' ? 'definition' : dim ? 'statement and proof' : 'statement';
    if (ripetuta) return scegli(`${v}: ${cosa} | ${argEn(a)} · ${cercato(b)}`, `${v} | ${argEn(a)} · ${cercato(b)}`, `${v} (${argEn(a)}) | ${cercato(b)}`, `${v} | ${argEn(a)}`);
    return scegli(`${v}: ${cosa} | ${argEn(a)} · ${cercato(b)}`, `${v}: ${cosa} | ${cercato(b)}`, `${v} | ${cercato(b)}`, v);
  },
  voceDescr: (v, tipo, dim, a, m, testo, alias = []) => {
    const testa = `${v}${alias.length ? ` (${alias[0]})` : ''} (${cercato(m)}, ${a})${dim ? ', with proof and exercises' : ''}: `;
    return taglia(testa + (testo.length >= 60 ? testo : tipo === 'definizione' ? 'definition and the exercises where it is used.' : 'statement and the exercises where it is applied.'));
  },
};
export const SEO = (l: Lingua) => (l === 'en' ? EN : IT);
