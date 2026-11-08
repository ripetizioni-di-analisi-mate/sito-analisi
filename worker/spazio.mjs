// Spazio personale in home (src/components/SpazioStudente.astro, versione F «Copertina» dell'08/11): che cosa scrive il Worker in ogni elemento.
// Restituisce { selettore: { html?, testo?, stile? } } a partire dallo stato del livello (livelloDa) e dal nome.
import { stemmaSVG, rangoDi, stileRango, RANGHI } from './stemmi.mjs';

export function spazioHome(st, nome, en) {
  const l = en ? 'en' : 'it';
  const n = (x) => x.toLocaleString(en ? 'en-US' : 'it-IT');
  const XP = en ? 'XP' : 'EXP';
  const r = rangoDi(st.livello);
  const c = RANGHI[r - 1];
  const fuori = {
    '.spazio-studente': { stile: `${stileRango(r)}; --rango-chiaro: ${c.chiaro}; --rango-medio: ${c.medio}; --rango-scuro: ${c.scuro}` },
    '.spazio-studente .ss-stemma': { html: stemmaSVG(r, { perc: st.perc, id: 'h', nastro: true, livello: st.livello, etichetta: en ? 'LV.' : 'LIV.' }) },
    // Niente rango e grado nel riquadro (richiesta di Carmine, 08/11): restano nello stemma e nella testata.
    '.spazio-studente .ss-nome': { testo: nome },
    '.spazio-studente .ss-fascia': { testo: st.fascia },
    '.spazio-studente .ss-frase': { testo: st.frase || '' },
    '.spazio-studente .ss-barra > span': { stile: `--perc: ${st.perc}%` },
    '.spazio-studente .ss-exp-tot': { testo: `${n(st.exp)} ${XP}` },
    '.spazio-studente .ss-mancano': {
      html: st.prossimo === null
        ? (en ? 'maximum level' : 'livello massimo')
        : (en ? `${n(st.mancano)} ${XP} to level ${st.livello + 1}` : `mancano ${n(st.mancano)} ${XP} al livello ${st.livello + 1}`),
    },
  };
  return fuori;
}
