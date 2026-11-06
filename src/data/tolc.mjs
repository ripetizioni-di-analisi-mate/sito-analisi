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

export const TOLC = {
  'tolc-i': { nome: 'TOLC-I', area: 'Ingegneria', sezioni: TOLC_I_SEZIONI, fonte: TOLC_I_FONTE, quesiti: 50, minuti: 110 },
  'tolc-s': { nome: 'TOLC-S', area: 'Scienze', sezioni: TOLC_S_SEZIONI, fonte: 'https://www.cisiaonline.it/tolc/tolc-s/struttura-della-prova-e-sillabo', quesiti: 55, minuti: 120 },
};

export function provaTolc(materia, argomenti, inglese = true, casuale = Math.random) {
  if (!Object.hasOwn(TOLC, materia)) throw new Error('Percorso TOLC non valido');
  return creaProvaTolc(argomenti, inglese, casuale, TOLC[materia].sezioni);
}

export function demoTolc(materia, argomenti) {
  if (materia === 'tolc-i') return anteprimaTolc(argomenti);
  if (materia !== 'tolc-s') return {};
  return anteprimaTolc(argomenti, { 'aritmetica-e-algebra': 1, geometria: 1, 'probabilita-e-dati': 1, logica: 1, 'comprensione-verbale': 1, biologia: 1, chimica: 1, fisica: 1, 'scienze-della-terra': 1, inglese: 1 });
}
