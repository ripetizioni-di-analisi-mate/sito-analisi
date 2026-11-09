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

// Una richiesta può citare soltanto i simboli definiti nel testo dello stesso esercizio.
function testoEsercizio(documento, numero) {
  const titoli = [...String(documento || '').matchAll(/^\s*(?:[#*>]+\s*)*esercizio\s+(\d+)\b/gim)];
  const i = titoli.findIndex((m) => m[1] === String(numero));
  return i < 0 ? '' : documento.slice(titoli[i].index, titoli[i + 1]?.index);
}

function normalizzaDisequazioni(testo) {
  return normalizza(testo)
    .replace(/\\(?:left|right|bigl|bigr)\b/g, '')
    .replace(/\\(?:lvert|rvert|vert)\b/g, '|')
    .replace(/\\(?:leq?|leqslant)\b|≤/g, '<=')
    .replace(/\\cap\b|∩/g, ' intersezione ')
    .replace(/\\partial\b|∂/g, ' frontiera ')
    .replace(/²/g, '^2');
}

export function trovaSchedaAnalisiDue(codici, richiesta, numero, documento) {
  const testo = normalizzaDisequazioni(richiesta);
  const contesto = normalizzaDisequazioni(testoEsercizio(documento, numero));
  const scheda = (n) => Object.values(codici.S).find((s) =>
    s.argomento === 'funzioni-di-piu-variabili' && s.n === n && s.tracce?.length);

  // Verificare la continuità di una funzione assegnata è un esercizio applicativo.
  const funzionePiana = /\b[a-z]\s*\(\s*x\s*,\s*y\s*\)|due variabili|piu variabili/;
  if (/\b(?:continu[aoei]|continuita)\b/.test(testo)
      && /\b(?:dimostr|verific|studi|stabil|mostr)\w*/.test(testo)
      && !/\b(?:teorem|lemma|enunci|uniform|holder|lipschitz|differenziabil|integral|massim|minim|estrem)\w*/.test(testo)
      && funzionePiana.test(testo + ' ' + contesto)) return scheda(6);

  if (!/\b(?:disegn|rappresent|tracci|schizz)\w*/.test(testo)
      || /\b(?:integral|massim|minim|estrem|are[ae]|volum|baricentr)\w*/.test(testo)) return null;

  const triangolo = /\|\s*x\s*\|\s*<=\s*y\s*<=|triangol\w*.*(?:vertic|disequazion)/;
  const regione = /\b(?:insieme|dominio|regione)\b/.test(testo);
  if (triangolo.test(testo) || (regione && triangolo.test(contesto))) return scheda(8);

  if (!/\bintersezione\b/.test(testo)) return null;
  const descrizione = testo + '\n' + contesto;
  const dueDischi = /\b(?:dischi|cerchi)\b/.test(descrizione)
    || [...descrizione.matchAll(/\^(?:2|\{2\})\s*\+\s*(?:\([^()]+\)|[a-z])\^(?:2|\{2\})\s*<=/g)].length >= 2;
  return dueDischi ? scheda(8) : null;
}
