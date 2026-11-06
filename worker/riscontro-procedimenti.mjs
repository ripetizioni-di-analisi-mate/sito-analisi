// I passaggi ordinari dello studio di una funzione non richiedono una copia
// della funzione del compito: conta il procedimento insegnato nel corso.
const normalizza = (s) => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

export function trovaProcedimentoStudio(codici, richiesta, argomento) {
  if (argomento !== 'studio-di-funzione') return null;
  const testo = normalizza(richiesta);
  // Questo riscontro riguarda esclusivamente funzioni reali di una variabile.
  // Richieste composite o di altro tipo restano al confronto con il catalogo completo.
  if (/\b(dimostr\w*|enunci\w*|vincol\w*|lagrange|hessian\w*|gradiente|stocastic\w*|compless\w*|parametr\w*|superfic\w*|fourier|differenzial\w*)\b|piu variabili|due variabili|\(\s*x\s*,|\\mathbb\s*\{?c\b/.test(testo)) return null;
  const voci = Object.values(codici.T).filter((v) => v.argomento === argomento);
  const voce = (ancora) => voci.find((v) => v.ancora === ancora && v.contenuto);
  const estremi = /\b(?:massim[oi]|minim[oi]|estrem[oi] (?:relativ[oi]|assolut[oi]|local[ei]|global[ei]))\b/.test(testo);
  const grafico = /\b(?:disegn\w*|tracci\w*|rappresent\w*|costrui\w*)\b.*\bgrafico\b/.test(testo);
  // Non risolviamo una richiesta con più operazioni a partire da una sola voce.
  if (estremi && grafico) return null;
  if (estremi) {
    const criterio = voce('criterio-derivata-prima');
    const assoluti = voce('massimi-minimi-assoluti');
    if (!criterio || !assoluti) return null;
    return { voce: /\b(?:assolut[oi]|global[ei])\b/.test(testo) ? assoluti : criterio };
  }
  if (grafico) {
    const graficoVoce = voce('grafico-qualitativo');
    if (graficoVoce) return { voce: graficoVoce };
  }
  return null;
}
