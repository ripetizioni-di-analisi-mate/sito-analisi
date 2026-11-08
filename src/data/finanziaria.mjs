// Dieci ID fissi nell'intero corso: cambiare capitolo o sessione non amplia l'anteprima.
export const CAPITOLI_FINANZIARIA = [
  'regimi-e-tassi', 'equivalenza-finanziaria', 'rendite-costanti', 'rendite-variabili',
  'ammortamenti', 'valutazione-investimenti', 'obbligazioni', 'struttura-a-termine',
  'duration-convexity', 'immunizzazione',
];
export function anteprimaFinanziaria(argomenti = {}) {
  return Object.fromEntries(CAPITOLI_FINANZIARIA.map(slug => [slug, (argomenti[slug] || []).slice(0,1)]));
}
