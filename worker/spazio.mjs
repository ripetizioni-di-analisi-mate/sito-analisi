// Spazio personale in home (src/components/SpazioStudente.astro): che cosa scrive il Worker in ogni elemento.
// Restituisce { selettore: { html?, testo?, stile? } } a partire dallo stato del livello (livelloDa) e dal nome.
import { stemmaSVG, rangoDi, gradoDi, nomeRango, stileRango, RANGHI } from './stemmi.mjs';

const MAX = 100;

// Primo livello, dopo quello attuale, in cui cambia il grado (I, II, III) o il rango.
function prossimoGrado(livello) {
  const ora = nomeRango(livello);
  for (let l = livello + 1; l <= MAX; l++) if (nomeRango(l) !== ora) return l;
  return null;
}

export function spazioHome(st, nome, en) {
  const l = en ? 'en' : 'it';
  const n = (x) => x.toLocaleString(en ? 'en-US' : 'it-IT');
  const XP = en ? 'XP' : 'EXP';
  const r = rangoDi(st.livello);
  const c = RANGHI[r - 1];
  const succ = prossimoGrado(st.livello);
  const fuori = {
    '.spazio-studente': { stile: `${stileRango(r)}; --rango-chiaro: ${c.chiaro}; --rango-medio: ${c.medio}; --rango-scuro: ${c.scuro}` },
    '.spazio-studente .ss-stemma': { html: stemmaSVG(r, { perc: st.perc, id: 'h', nastro: true, livello: st.livello, etichetta: en ? 'LV.' : 'LIV.' }) },
    '.spazio-studente .ss-rango': { testo: `${nomeRango(st.livello, l)} · ${en ? 'Level' : 'Livello'} ${st.livello}` },
    '.spazio-studente .ss-nome': { testo: nome },
    '.spazio-studente .ss-fascia': { testo: st.fascia },
    '.spazio-studente .ss-frase': { testo: st.frase || '' },
    '.spazio-studente .ss-barra > span': { stile: `--perc: ${st.perc}%` },
    '.spazio-studente .ss-exp-tot': { html: `<strong>${n(st.exp)}</strong> ${XP}` },
    '.spazio-studente .ss-mancano': {
      html: st.prossimo === null
        ? (en ? 'Maximum level' : 'Livello massimo')
        : `<strong>${n(st.mancano)} ${XP}</strong> ${en ? 'to level' : 'al livello'} ${st.livello + 1}`,
    },
  };
  if (succ) {
    // Il prossimo grado: lo stemma che lo studente riceverà, ancora vuoto.
    fuori['.spazio-studente .ss-prossimo'] = { mostra: true };
    fuori['.spazio-studente .ss-prossimo-stemma'] = { html: stemmaSVG(rangoDi(succ), { perc: 0, id: 'hn', grado: gradoDi(succ) }) };
    fuori['.spazio-studente .ss-prossimo-testo'] = {
      html: rangoDi(succ) !== r
        ? `${en ? 'Next rank' : 'Prossimo rango'}: <strong>${nomeRango(succ, l)}</strong> ${en ? 'at level' : 'al livello'} ${succ}`
        : `${en ? 'Next grade' : 'Prossimo grado'}: <strong>${nomeRango(succ, l)}</strong> ${en ? 'at level' : 'al livello'} ${succ}`,
    };
  }
  return fuori;
}
