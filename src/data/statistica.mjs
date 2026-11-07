// Dieci quesiti fissi: cambiare sessione, capitolo o ID non amplia l'anteprima.
export const CAPITOLI_DEMO_STATISTICA = [
  'dati-e-frequenze', 'indici-descrittivi', 'probabilita-e-combinatoria',
  'probabilita-condizionata', 'variabili-discrete', 'variabili-continue',
  'campionamento-e-teoremi-limite', 'intervalli-di-confidenza',
  'test-di-ipotesi', 'regressione-e-correlazione',
];

export function anteprimaStatistica(argomenti) {
  return Object.fromEntries(CAPITOLI_DEMO_STATISTICA.map((slug) => [slug, (argomenti?.[slug] || []).slice(0, 1)]));
}
