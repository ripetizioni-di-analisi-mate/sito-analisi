import { TOLC_I_SEZIONI, TOLC_I_FONTE, creaProvaTolc, anteprimaTolc } from './tolc-i.mjs';

export const TOLC_S_SEZIONI = [
  { slug: 'matematica', titolo: 'Matematica di base', numero: 20, minuti: 50, argomenti: ['aritmetica-e-algebra', 'geometria', 'funzioni-e-grafici', 'trigonometria-e-statistica', 'probabilita-e-dati'] },
  { slug: 'ragionamento', titolo: 'Ragionamento, problemi e comprensione', numero: 15, minuti: 30, argomenti: ['logica', 'comprensione-verbale'] },
  { slug: 'biologia', titolo: 'Biologia', numero: 5, minuti: 10, argomenti: ['biologia'] },
  { slug: 'chimica', titolo: 'Chimica', numero: 5, minuti: 10, argomenti: ['chimica'] },
  { slug: 'fisica', titolo: 'Fisica', numero: 5, minuti: 10, argomenti: ['fisica'] },
  { slug: 'terra', titolo: 'Scienze della Terra', numero: 5, minuti: 10, argomenti: ['scienze-della-terra'] },
  { slug: 'inglese', titolo: 'Inglese', numero: 30, minuti: 15, argomenti: ['inglese'] },
];

const TOLC_E_SEZIONI = [
  { slug: 'logica', titolo: 'Logica', numero: 13, minuti: 30, argomenti: ['logica'] },
  { slug: 'comprensione', titolo: 'Comprensione del testo', numero: 10, minuti: 30, argomenti: ['comprensione-verbale'], brani: 2 },
  { slug: 'matematica', titolo: 'Matematica', numero: 13, minuti: 30, argomenti: ['aritmetica-e-algebra', 'funzioni-e-grafici', 'geometria'] },
  { slug: 'inglese', titolo: 'Inglese', numero: 30, minuti: 15, argomenti: ['inglese'] },
];

const TOL_POLITECNICO_SEZIONI = [
  { slug: 'inglese', titolo: 'Inglese · TENG', numero: 30, minuti: 15, argomenti: ['inglese'], peso: 1 / 3 },
  { slug: 'matematica', titolo: 'Logica, matematica e statistica', numero: 25, minuti: 65, argomenti: ['matematica', 'logica', 'statistica'], quote: [15, 5, 5], peso: 2.6 },
  { slug: 'comprensione', titolo: 'Comprensione verbale', numero: 5, minuti: 10, argomenti: ['comprensione-verbale'], brani: 1, peso: 3 },
  { slug: 'fisica', titolo: 'Fisica', numero: 5, minuti: 10, argomenti: ['fisica'], peso: 2 },
];

export const TOLC = {
  'tolc-i': { nome: 'TOLC-I', area: 'Ingegneria', sezioni: TOLC_I_SEZIONI, fonte: TOLC_I_FONTE, quesiti: 50, minuti: 110 },
  'tolc-s': { nome: 'TOLC-S', area: 'Scienze', sezioni: TOLC_S_SEZIONI, fonte: 'https://www.cisiaonline.it/tolc/tolc-s/struttura-della-prova-e-sillabo', quesiti: 55, minuti: 120 },
  'tolc-e': { nome: 'TOLC-E', area: 'Economia', sezioni: TOLC_E_SEZIONI, fonte: 'https://www.cisiaonline.it/tolc/tolc-e/struttura-della-prova-e-sillabo', quesiti: 36, minuti: 90 },
};

export const PROVE_INGRESSO = {
  ...TOLC,
  'tol-politecnico': {
    nome: 'TOL Politecnico di Milano', area: 'Ingegneria al Politecnico di Milano',
    sezioni: TOL_POLITECNICO_SEZIONI, quesiti: 65, minuti: 100, massimo: 100, ingleseObbligatorio: true,
    fonte: 'https://www.polimi.it/futuri-studenti/test-e-ammissione/laurea/ingegneria/tol-test-on-line/materie-del-tol',
    testoFonte: 'Programma del Politecnico di Milano',
    nota: 'Preparazione indipendente con quesiti di allenamento. Il punteggio è pesato su 100 secondo la struttura del TOL. Per ammissione e soglie fa fede il bando del Politecnico di Milano.',
  },
  'ofa-matematica': {
    nome: 'OFA di matematica', area: 'Recupero OFA', quesiti: 20, minuti: 50, risposte: 4, esercitazione: true,
    sezioni: [{
      slug: 'matematica', titolo: 'Matematica di base', numero: 20, minuti: 50,
      argomenti: ['numeri-e-percentuali', 'algebra-e-equazioni', 'funzioni-e-grafici', 'geometria-e-misure'],
    }],
    fonte: 'https://www.ing.unipi.it/it/studenti/carriera-universitaria/test-recupero-ofa',
    testoFonte: 'Esempio di prova OFA dell’Università di Pisa',
    nota: 'Argomenti, tempi e modalità di assolvimento degli OFA dipendono dal tuo ateneo e corso di laurea.',
  },
};

export function provaTolc(materia, argomenti, inglese = true, casuale = Math.random) {
  if (!Object.hasOwn(PROVE_INGRESSO, materia)) throw new Error('Percorso di ingresso non valido');
  const conf = PROVE_INGRESSO[materia];
  return creaProvaTolc(argomenti, conf.ingleseObbligatorio || inglese, casuale, conf.sezioni);
}

export function demoTolc(materia, argomenti) {
  if (materia === 'tolc-i') return anteprimaTolc(argomenti);
  if (materia === 'tolc-s') {
    return anteprimaTolc(argomenti, { 'aritmetica-e-algebra': 1, geometria: 1, 'probabilita-e-dati': 1, logica: 1, 'comprensione-verbale': 1, biologia: 1, chimica: 1, fisica: 1, 'scienze-della-terra': 1, inglese: 1 });
  }
  if (!Object.hasOwn(PROVE_INGRESSO, materia)) return {};
  const capitoli = PROVE_INGRESSO[materia].sezioni.flatMap(s => s.argomenti);
  const perCapitolo = Math.floor(10 / capitoli.length);
  const extra = 10 % capitoli.length;
  return anteprimaTolc(argomenti, Object.fromEntries(capitoli.map((a, i) => [a, perCapitolo + Number(i < extra)])));
}
