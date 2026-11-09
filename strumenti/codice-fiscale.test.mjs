import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { calcolaCodiceFiscale } from '../src/data/codice-fiscale.mjs';

const esempio = { cognome: 'Rossi', nome: 'Mario', dataNascita: '1985-08-01', sesso: 'M', catastale: 'H501' };
const oggi = new Date(2026, 10, 9);
const calcola = (dati) => calcolaCodiceFiscale({ ...esempio, ...dati }, oggi);

test('il luogo deve essere valido alla data di nascita anche quando uno Stato è cambiato', () => {
  const luoghi = JSON.parse(readFileSync(new URL('../public/dati/luoghi-cf.json', import.meta.url), 'utf8'));
  const presente = (codice, data) => luoghi.some(([, , c, dal, al]) => c === codice && (!dal || dal <= data) && (!al || data <= al));
  assert.equal(presente('H501', '1985-08-01'), true);
  assert.equal(presente('Z110', '2000-02-29'), true);
  assert.equal(presente('Z154', '1970-01-01'), false);
  assert.equal(presente('Z154', '2000-01-01'), true);
});

test('codice ordinario e controllo, giorno e mese, regola delle quattro consonanti, nascita estera', () => {
  assert.equal(calcola({}), 'RSSMRA85M01H501Q');
  const estero = { cognome: 'D’Àngelo', nome: 'Francesca', dataNascita: '2000-02-29', sesso: 'F', catastale: 'Z110' };
  assert.equal(calcola(estero), 'DNGFNC00B69Z110N');
  assert.equal(calcola({ ...estero, cognome: "D'Angelo" }), calcola(estero));
  for (let i = 1; i <= 12; i++) {
    assert.equal(calcola({ dataNascita: '1985-' + String(i).padStart(2, '0') + '-01' })[8], 'ABCDEHLMPRST'[i - 1]);
  }
});

test('vocali, nomi composti, completamento con X e traslitterazioni ANPR', () => {
  assert.equal(calcola({ nome: 'Li', cognome: 'Ä' }).slice(0, 6), 'AEXLIX');
  assert.equal(calcola({ nome: 'Maria-Luisa', cognome: 'De Luca' }).slice(0, 6), 'DLCMLS');
  assert.equal(calcola({ nome: 'Zoë', cognome: 'Å' }).slice(0, 6), 'AAXZOE');
  assert.equal(calcola({ cognome: 'A\u0308' }), calcola({ cognome: 'Ä' }));
});

test('non suggerisce codici per dati incompleti, date impossibili o future, traslitterazioni sconosciute', () => {
  assert.equal(calcolaCodiceFiscale(null), null);
  for (const dati of [
    { nome: '' }, { cognome: ' - ' }, { nome: 'A.' }, { nome: '李R' }, { cognome: 'R1' },
    { sesso: '' }, { catastale: '' }, { catastale: 'H50A' }, { dataNascita: '' }, { dataNascita: '0000-01-01' },
    { dataNascita: '2026-02-29' }, { dataNascita: '1900-02-29' }, { dataNascita: '1985-13-01' },
    { dataNascita: '1985-01-32' }, { dataNascita: '2026-11-10' },
  ]) assert.equal(calcola(dati), null);
  assert.ok(calcola({ dataNascita: '2026-11-09' }));
});
