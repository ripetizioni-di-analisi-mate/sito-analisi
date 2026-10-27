// Materie del sito. Ogni materia ha i suoi argomenti, il suo colore di accento
// e i suoi contenuti in src/content/<collezione>/<materia>/…
export interface Argomento { slug: string; titolo: string; breve: string }
export interface Materia {
  slug: string;
  titolo: string;
  breve: string;
  descrizione: string;
  colore: string;      // accento della materia (titoli, indice, striscia in testata)
  gruppo: string;      // percorso di studi: la home e l'indice raggruppano per questo
  attiva: boolean;     // false = in preparazione, compare in home senza link
  argomenti: Argomento[];
}

export const MATERIE: Materia[] = [
  {
    slug: 'precorso',
    titolo: 'Precorso',
    breve: 'Precorso',
    descrizione: 'La matematica che serve prima di Analisi 1: logica, polinomi, equazioni e disequazioni di ogni tipo, geometria analitica.',
    colore: '#a8762b',
    gruppo: 'Università',
    attiva: true,
    argomenti: [
      { slug: 'logica', titolo: 'Logica elementare', breve: 'Logica' },
      { slug: 'potenze-e-radici', titolo: 'Potenze e radici', breve: 'Potenze e radici' },
      { slug: 'polinomi', titolo: 'Fattorizzazione, Ruffini e divisione tra polinomi', breve: 'Polinomi' },
      { slug: 'equazioni-polinomiali', titolo: 'Equazioni e disequazioni polinomiali e fratte', breve: 'Polinomiali e fratte' },
      { slug: 'valore-assoluto', titolo: 'Equazioni e disequazioni con il valore assoluto', breve: 'Valore assoluto' },
      { slug: 'irrazionali', titolo: 'Equazioni e disequazioni irrazionali', breve: 'Irrazionali' },
      { slug: 'logaritmiche', titolo: 'Equazioni e disequazioni logaritmiche', breve: 'Logaritmiche' },
      { slug: 'esponenziali', titolo: 'Equazioni e disequazioni esponenziali', breve: 'Esponenziali' },
      { slug: 'goniometriche', titolo: 'Equazioni e disequazioni goniometriche', breve: 'Goniometriche' },
      { slug: 'geometria-analitica', titolo: 'Geometria analitica e coniche', breve: 'Geometria analitica' },
    ],
  },
  {
    slug: 'analisi-1',
    titolo: 'Analisi 1',
    breve: 'Analisi 1',
    descrizione: 'Limiti, derivate, integrali, serie ed equazioni differenziali: la teoria e gli esercizi per l\'esame.',
    colore: '#2f6f68',
    gruppo: 'Università',
    attiva: true,
    argomenti: [
      { slug: 'insiemi', titolo: 'Insiemi, induzione e funzioni elementari', breve: 'Nozioni di base' },
      { slug: 'numeri-complessi', titolo: 'Numeri complessi', breve: 'Numeri complessi' },
      { slug: 'limiti', titolo: 'Limiti e continuità', breve: 'Limiti' },
      { slug: 'derivate', titolo: 'Calcolo differenziale e Taylor', breve: 'Derivate' },
      { slug: 'studio-di-funzione', titolo: 'Studio di funzione', breve: 'Studio di funzione' },
      { slug: 'integrali', titolo: 'Calcolo integrale', breve: 'Integrali' },
      { slug: 'integrali-impropri', titolo: 'Integrali impropri', breve: 'Integrali impropri' },
      { slug: 'serie', titolo: 'Serie numeriche', breve: 'Serie' },
      { slug: 'equazioni-differenziali', titolo: 'Equazioni differenziali', breve: 'Equazioni differenziali' },
    ],
  },
  {
    slug: 'analisi-2',
    titolo: 'Analisi 2',
    breve: 'Analisi 2',
    descrizione: 'Funzioni di più variabili, integrali multipli, curve e superfici, serie di funzioni.',
    colore: '#3b5f8f',
    gruppo: 'Università',
    attiva: true,
    argomenti: [
      { slug: 'funzioni-di-piu-variabili', titolo: 'Funzioni di più variabili', breve: 'Più variabili' },
      { slug: 'calcolo-differenziale', titolo: 'Calcolo differenziale in più variabili', breve: 'Calcolo differenziale' },
      { slug: 'funzioni-implicite', titolo: 'Funzioni implicite', breve: 'Funzioni implicite' },
      { slug: 'massimi-e-minimi', titolo: 'Massimi e minimi liberi e vincolati', breve: 'Massimi e minimi' },
      { slug: 'curve-e-integrali-di-linea', titolo: 'Curve e integrali di linea', breve: 'Curve' },
      { slug: 'campi-vettoriali', titolo: 'Campi vettoriali e teorema di Green', breve: 'Campi vettoriali' },
      { slug: 'integrali-doppi-e-tripli', titolo: 'Integrali doppi e tripli', breve: 'Integrali multipli' },
      { slug: 'superfici-e-flussi', titolo: 'Superfici, flussi e teoremi di Gauss e Stokes', breve: 'Superfici e flussi' },
      { slug: 'successioni-e-serie-di-funzioni', titolo: 'Successioni e serie di funzioni', breve: 'Serie di funzioni' },
      { slug: 'serie-di-potenze', titolo: 'Serie di potenze e serie di Taylor', breve: 'Serie di potenze' },
      { slug: 'serie-di-fourier', titolo: 'Serie di Fourier', breve: 'Serie di Fourier' },
    ],
  },
];

export const SEZIONI = [
  { slug: 'teoria', titolo: 'Teoria' },
  { slug: 'esercizi-svolti', titolo: 'Esercizi svolti' },
  { slug: 'esercizi', titolo: 'Esercizi da fare' },
] as const;

export function materia(slug: string): Materia {
  return MATERIE.find((m) => m.slug === slug)!;
}
export function argomento(m: string, a: string): Argomento {
  return materia(m).argomenti.find((x) => x.slug === a)!;
}
// Tutte le coppie (materia, argomento) delle materie attive, per getStaticPaths.
export function coppie() {
  return MATERIE.filter((m) => m.attiva).flatMap((m) => m.argomenti.map((a) => ({ materia: m.slug, argomento: a.slug })));
}
// I gruppi (percorsi di studi) nell'ordine in cui compaiono in home e nell'indice.
export function gruppi(): string[] {
  return [...new Set(MATERIE.map((m) => m.gruppo))];
}
