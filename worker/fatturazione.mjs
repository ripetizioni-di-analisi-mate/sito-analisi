import { CODICI_PAESE } from '../src/data/paesi-fattura.mjs';

// Controllo formale del CF, comprese le omocodie e il codice provvisorio numerico.
function codiceFiscaleValido(cf) {
  if (/^\d{11}$/.test(cf)) {
    let somma = 0;
    for (let i = 0; i < 10; i++) {
      const n = Number(cf[i]) * (i % 2 === 0 ? 1 : 2);
      somma += n > 9 ? n - 9 : n;
    }
    return cf !== '00000000000' && (somma + Number(cf[10])) % 10 === 0;
  }
  if (!/^[A-Z]{6}[0-9LMNPQRSTUV]{2}[ABCDEHLMPRST][0-9LMNPQRSTUV]{2}[A-Z][0-9LMNPQRSTUV]{3}[A-Z]$/.test(cf)) return false;
  const dispari = [1,0,5,7,9,13,15,17,19,21,2,4,18,20,11,3,6,8,12,14,16,10,22,25,24,23];
  let somma = 0;
  for (let i = 0; i < 15; i++) {
    const codice = cf.charCodeAt(i);
    const n = codice >= 65 ? codice - 65 : codice - 48;
    somma += i % 2 === 0 ? dispari[n] : n;
  }
  return cf.charCodeAt(15) === 65 + somma % 26;
}

export function leggiFatturazione(input) {
  const dati = {};
  const limiti = { nome: 100, cognome: 100, indirizzo: 180, cap: 20, comune: 100, provincia: 100, paese: 2, cf: 16 };
  for (const [k, massimo] of Object.entries(limiti)) {
    const valore = input?.[k] ?? '';
    if (typeof valore !== 'string' || valore.length > massimo || /[\u0000-\u001f<>]/.test(valore)) {
      return { errore: 'Controlla i dati di fatturazione inseriti.' };
    }
    dati[k] = valore.trim().replace(/\s+/g, ' ');
  }
  dati.paese = dati.paese.toUpperCase();
  if (!CODICI_PAESE.includes(dati.paese)) return { errore: 'Seleziona il Paese di residenza dell’intestatario.' };
  if (!dati.nome || !dati.cognome || !dati.indirizzo || !dati.comune) {
    return { errore: 'Completa nome, cognome, indirizzo e comune di residenza dell’intestatario.' };
  }
  if (dati.paese === 'IT') {
    dati.provincia = dati.provincia.toUpperCase();
    dati.cf = dati.cf.toUpperCase();
    if (!/^\d{5}$/.test(dati.cap)) return { errore: 'Il CAP italiano deve avere cinque cifre.' };
    if (!/^[A-Z]{2}$/.test(dati.provincia)) return { errore: 'Inserisci la sigla della provincia (due lettere).' };
    if (!codiceFiscaleValido(dati.cf)) return { errore: 'Controlla il codice fiscale dell’intestatario della fattura.' };
  } else {
    dati.cf = '';
  }
  return { dati };
}
