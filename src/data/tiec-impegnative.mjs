// TIEC: domande a tempo di logica e matematica più impegnative dei quesiti demo pubblicati dalla Cattolica
// (https://international.unicatt.it/ucscinternational-TIEC_-Mat_ITA.pdf e ucscinternational-TIEC_-_Logica_ITA.pdf).
// Restano fra le domande a tempo; nella simulazione completa ne entrano al massimo `impegnativeMax` per area
// (vedi TIEC_SEZIONI in tolc.mjs), così la prova ha la difficoltà della demo ufficiale.
// Criterio (16/11/2026): più di due passaggi, oppure una tecnica che nella demo non compare
// (inclusione-esclusione con tre insiemi, negazioni con quantificatori annidati, sostituzioni negli esponenziali,
// divisioni fra polinomi di grado 2, disequazioni fratte con più fattori, parametri con condizioni sulle radici…).
export const TIEC_IMPEGNATIVE = {
  logica: [3, 11, 15, 16, 23, 25, 33, 34, 39, 42, 45, 48, 55, 61, 65, 70, 72, 75, 76, 80, 82, 89],
  'insiemi-numeri-e-percentuali': [15, 21, 24, 30, 34, 35, 44, 49, 50, 55, 67, 71, 72, 73, 75, 79],
  'potenze-esponenziali-e-logaritmi': [9, 24, 29, 37, 41, 55, 57, 62, 64, 67, 75, 76, 79, 80, 86, 87, 89],
  'calcolo-letterale-e-frazioni-algebriche': [9, 10, 30, 41, 42, 45, 59, 60, 61, 64, 67, 69, 75, 76, 81, 84, 87, 89],
  'equazioni-disequazioni-e-sistemi': [18, 21, 25, 28, 29, 33, 37, 39, 49, 56, 57, 64, 65, 68, 71, 76, 79, 83, 90],
  'geometria-analitica-e-trigonometria': [7, 41, 44, 49, 51, 53, 56, 62, 64, 66, 71, 79, 89],
};

const IDS = new Set(Object.entries(TIEC_IMPEGNATIVE).flatMap(([a, ns]) => ns.map((n) => `${a}/${n}`)));
export const impegnativaTiec = (id) => IDS.has(id);
