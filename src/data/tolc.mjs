import { TOLC_I_SEZIONI, TOLC_I_FONTE, creaProvaTolc, anteprimaTolc, mescolaTolc } from './tolc-i.mjs';
import { impegnativaTiec } from './tiec-impegnative.mjs';

export const TOLC_S_SEZIONI = [
  { slug: 'matematica', titolo: 'Matematica di base', numero: 20, minuti: 50, argomenti: ['aritmetica-e-algebra', 'geometria', 'funzioni-e-grafici', 'trigonometria-e-statistica', 'probabilita-e-dati'] },
  { slug: 'ragionamento', titolo: 'Ragionamento, problemi e comprensione', numero: 15, minuti: 30, argomenti: ['logica', 'comprensione-verbale'] },
  { slug: 'biologia', titolo: 'Biologia', numero: 5, minuti: 10, argomenti: ['biologia'] },
  { slug: 'chimica', titolo: 'Chimica', numero: 5, minuti: 10, argomenti: ['chimica'] },
  { slug: 'fisica', titolo: 'Fisica', numero: 5, minuti: 10, argomenti: ['fisica'] },
  { slug: 'terra', titolo: 'Scienze della Terra', numero: 5, minuti: 10, argomenti: ['scienze-della-terra'] },
  { slug: 'inglese', titolo: 'Inglese', numero: 30, minuti: 15, argomenti: ['inglese'] },
];

// TIEC dell'Università Cattolica (Economia): 48 quesiti in 60 minuti, 12 per area, 4 opzioni.
// Struttura e soglie dalle pagine di ammissione della Cattolica (verificate il 16/11/2026).
// Il tempo è unico per tutta la prova; la Cattolica non pubblica i punti per risposta.
export const TIEC_FONTE = 'https://www.unicatt.it/en/programmes/undergraduate-and-integrated-degree-programmes/economics-and-management-of-services-rome/admissions-and-enrolment.html';
export const TIEC_SEZIONI = [
  { slug: 'logica', titolo: 'Logica', numero: 12, minuti: 15, soglia: 6, impegnativeMax: 2, argomenti: ['logica'] },
  { slug: 'matematica', titolo: 'Matematica', numero: 12, minuti: 15, soglia: 4, vpi: 7, impegnativeMax: 2, argomenti: ['insiemi-numeri-e-percentuali', 'potenze-esponenziali-e-logaritmi', 'calcolo-letterale-e-frazioni-algebriche', 'equazioni-disequazioni-e-sistemi', 'geometria-analitica-e-trigonometria'] },
  { slug: 'comprensione', titolo: 'Comprensione del testo', numero: 12, minuti: 15, soglia: 6, argomenti: ['comprensione-del-testo'] },
  { slug: 'inglese', titolo: 'Inglese', numero: 12, minuti: 15, soglia: 6, argomenti: ['inglese'] },
];

export const TOLC = {
  'tolc-i': { nome: 'TOLC-I', area: 'Ingegneria', sezioni: TOLC_I_SEZIONI, fonte: TOLC_I_FONTE, quesiti: 50, minuti: 110 },
  'tolc-s': { nome: 'TOLC-S', area: 'Scienze', sezioni: TOLC_S_SEZIONI, fonte: 'https://www.cisiaonline.it/tolc/tolc-s/struttura-della-prova-e-sillabo', quesiti: 55, minuti: 120 },
  tiec: { nome: 'TIEC', area: 'Economia in Cattolica', sezioni: TIEC_SEZIONI, fonte: TIEC_FONTE, quesiti: 48, minuti: 60, tempoUnico: true, scelte: 4 },
};

export function provaTolc(materia, argomenti, inglese = true, casuale = Math.random) {
  if (!Object.hasOwn(TOLC, materia)) throw new Error('Percorso TOLC non valido');
  // Nel TIEC l'inglese è una delle quattro aree: c'è sempre.
  if (materia === 'tiec') argomenti = limitaImpegnative(argomenti, TIEC_SEZIONI, casuale);
  return creaProvaTolc(argomenti, TOLC[materia].tempoUnico ? true : inglese, casuale, TOLC[materia].sezioni);
}

// Nelle aree con `impegnativeMax` restano in gioco solo quelle domande impegnative (scelte a caso),
// quindi la prova ne contiene al massimo tante; le altre domande dell'area hanno il livello della demo ufficiale.
export function limitaImpegnative(argomenti, sezioni, casuale = Math.random) {
  const out = { ...argomenti };
  for (const s of sezioni) {
    if (!s.impegnativeMax) continue;
    const tutte = s.argomenti.flatMap((a) => (argomenti[a] || []).filter((q) => impegnativaTiec(q.id)).map((q) => q.id));
    const ammesse = new Set(mescolaTolc(tutte, casuale).slice(0, s.impegnativeMax));
    for (const a of s.argomenti) out[a] = (argomenti[a] || []).filter((q) => !impegnativaTiec(q.id) || ammesse.has(q.id));
  }
  return out;
}

// Esito del TIEC per area: risposte esatte confrontate con le soglie minime della Cattolica.
export function esitoTiec(sezioni) {
  const aree = sezioni.map((s) => {
    const conf = TIEC_SEZIONI.find((x) => x.slug === s.slug);
    return { ...s, soglia: conf.soglia, superata: s.corrette >= conf.soglia, ...(conf.vpi ? { vpi: conf.vpi, vpiSuperata: s.corrette >= conf.vpi } : {}) };
  });
  return { aree, idoneo: aree.every((a) => a.superata), corrette: aree.reduce((n, a) => n + a.corrette, 0), massimo: aree.reduce((n, a) => n + a.massimo, 0) };
}

export function demoTolc(materia, argomenti) {
  if (materia === 'tolc-i') return anteprimaTolc(argomenti);
  if (materia === 'tiec') return anteprimaTolc(argomenti, { 'insiemi-numeri-e-percentuali': 1, 'potenze-esponenziali-e-logaritmi': 1, 'calcolo-letterale-e-frazioni-algebriche': 1, 'equazioni-disequazioni-e-sistemi': 1, 'geometria-analitica-e-trigonometria': 1, logica: 2, 'comprensione-del-testo': 1, inglese: 2 });
  if (materia !== 'tolc-s') return {};
  return anteprimaTolc(argomenti, { 'aritmetica-e-algebra': 1, geometria: 1, 'probabilita-e-dati': 1, logica: 1, 'comprensione-verbale': 1, biologia: 1, chimica: 1, fisica: 1, 'scienze-della-terra': 1, inglese: 1 });
}
