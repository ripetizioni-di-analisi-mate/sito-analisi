// Studio guidato (13/11/2026, richiesta di Carmine): test adattivo che trova le lacune
// di uno studente, ne cerca la causa nelle basi e indica i capitoli da studiare in ordine.
// Anteprima riservata ai GM, per ora solo Analisi 1 (con le basi del Precorso).
//
// Per ogni argomento del corso:
//   interni = argomenti della stessa materia da cui dipende (si verificano se l'argomento risulta debole);
//   basi    = argomenti del Precorso da cui dipende (si verificano se l'argomento risulta debole).
// L'ordine delle basi conta: si verificano nell'ordine scritto, fino a MAX_BASI per argomento.

export const MATERIA_BASI = 'precorso';

export const STUDIO_GUIDATO = {
  'analisi-1': {
    dipendenze: {
      insiemi: { interni: [], basi: ['logica', 'potenze-e-radici', 'equazioni-polinomiali'] },
      'numeri-complessi': { interni: [], basi: ['equazioni-polinomiali', 'goniometriche', 'polinomi'] },
      limiti: { interni: ['insiemi'], basi: ['polinomi', 'equazioni-polinomiali', 'valore-assoluto', 'irrazionali', 'esponenziali', 'logaritmiche'] },
      derivate: { interni: ['limiti'], basi: ['potenze-e-radici', 'goniometriche', 'logaritmiche'] },
      'studio-di-funzione': { interni: ['limiti', 'derivate'], basi: ['equazioni-polinomiali', 'valore-assoluto', 'irrazionali', 'esponenziali', 'logaritmiche'] },
      integrali: { interni: ['derivate'], basi: ['polinomi', 'goniometriche'] },
      'integrali-impropri': { interni: ['integrali', 'limiti'], basi: [] },
      serie: { interni: ['limiti'], basi: [] },
      'equazioni-differenziali': { interni: ['integrali', 'derivate'], basi: ['equazioni-polinomiali', 'esponenziali', 'goniometriche'] },
    },
  },
};

// Regole del test (si possono ritoccare senza cambiare il motore).
export const REGOLE_SG = {
  livelloIniziale: 2,       // primo livello proposto in un argomento mai verificato
  maxDomandeArgomento: 5,   // al massimo per un argomento del corso
  maxDomandeBase: 3,        // al massimo per una base del Precorso
  maxBasi: 3,               // basi verificate quando un argomento risulta debole
  maxDomandeTest: 45,       // tetto complessivo: oltre, gli argomenti restanti restano «da verificare»
  testPrecedentiViste: 3,   // domande dei test precedenti da non riproporre
};

export const NOMI_LIVELLI = ['Lacuna', 'Base', 'Medio', 'Avanzato'];
