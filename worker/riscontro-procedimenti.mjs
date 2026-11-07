// I passaggi ordinari dello studio di una funzione non richiedono una copia
// della funzione del compito: conta il procedimento insegnato nel corso.
const normalizza = (s) => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

export function trovaProcedimentoStudio(codici, richiesta, argomento) {
  if (!['studio-di-funzione', 'derivate', 'limiti', 'insiemi'].includes(argomento)) return null;
  const testo = normalizza(richiesta);
  // Questo riscontro riguarda esclusivamente funzioni reali di una variabile.
  // Richieste composite o di altro tipo restano al confronto con il catalogo completo.
  if (/\b(dimostr\w*|enunci\w*|vincol\w*|lagrange|hessian\w*|gradiente|stocastic\w*|compless\w*|parametr\w*|superfic\w*|fourier|differenzial\w*|integral\w*|frazion\w*|distribuz\w*|funzional\w*|ser[ie]+)\b|piu variabili|due variabili|\(\s*x\s*,|\\mathbb\s*\{?c\b/.test(testo)) return null;
  const voci = Object.values(codici.T);
  const voce = (capitolo, ancora) => voci.find((v) => v.argomento === capitolo && v.ancora === ancora && v.contenuto);
  const necessarie = [];
  const aggiungi = (capitolo, ...ancore) => ancore.forEach((ancora) => necessarie.push(voce(capitolo, ancora)));
  // Una richiesta può combinare operazioni già insegnate. Ogni operazione
  // riconosciuta deve avere il proprio riscontro nel catalogo effettivo.
  if (/\bdominio\b|campo di esistenza|\bsegno\b|intersezioni con gli assi|\bperiodic\w*|\bsimmetri\w*/.test(testo)) aggiungi('studio-di-funzione', 'schema-dello-studio');
  if (/\basintot\w*/.test(testo)) aggiungi('limiti', 'definizione-asintoti');
  if (/\bderivat[ae]\b/.test(testo)) aggiungi('derivate', 'regole-di-derivazione', 'derivata-della-composta', 'derivate-elementari');
  if (/\bmonotoni\w*|crescenza|decrescenza|crescent\w*|decrescent\w*/.test(testo)) aggiungi('studio-di-funzione', 'test-di-monotonia');
  const estremi = /\b(?:massim[oi]|minim[oi]|estrem[oi] (?:relativ[oi]|assolut[oi]|local[ei]|global[ei]))\b/.test(testo);
  const grafico = /\b(?:disegn\w*|tracci\w*|rappresent\w*|costrui\w*)\b.*\bgrafico\b/.test(testo);
  if (estremi) {
    aggiungi('studio-di-funzione', 'criterio-derivata-prima', 'massimi-minimi-assoluti');
  }
  if (grafico) {
    aggiungi('studio-di-funzione', 'grafico-qualitativo');
  }
  if (!necessarie.length || necessarie.some((v) => !v)) return null;
  const pertinenti = [...new Set(necessarie)];
  const principale = grafico ? pertinenti.at(-1)
    : estremi ? voce('studio-di-funzione', /\b(?:assolut[oi]|global[ei])\b/.test(testo) ? 'massimi-minimi-assoluti' : 'criterio-derivata-prima')
      : pertinenti[0];
  return { voce: principale, voci: pertinenti };
}
