import test from 'node:test';
import assert from 'node:assert/strict';
import {
  alternative,
  capitolo,
  creaProfilo,
  programma,
  ripristinaOfferta,
  selezionaMateria
} from '../src/scripts/anteprima-consulenza/piano.mjs';

const dati = [
  ['analisi-1', 49],
  ['fisica-1', 49],
  ['algebra-lineare', 39],
  ['precorso', 29],
  ['fisica-zero', 0]
];
const corsi = new Map(
  dati.map(([slug, prezzo]) => [
    slug,
    { slug, nome: slug, prezzo, attiva: true, capitoli: [{ slug: 'primo' }, { slug: 'secondo' }] }
  ])
);
function profilo(ids) {
  const p = creaProfilo();
  for (const id of ids) selezionaMateria(p, id, true, corsi, 'secondo');
  return Object.assign(p, { obiettivo: 'esame', ostacolo: 'metodo', orizzonte: 'mese', dubbio: 'prezzo' });
}

test('la rotazione parte dalla priorità, rispetta capitoli, giorni e minuti e continua nella settimana seguente', () => {
  const p = profilo(['analisi-1', 'fisica-1', 'algebra-lineare']);
  p.priorita = 'fisica-1';
  p.giorni = [2, 5];
  const inizio = new Date(2026, 10, 28, 22);
  const primo = programma(p, corsi, inizio),
    secondo = programma(p, corsi, inizio, 1);
  assert.deepEqual(
    [...primo, ...secondo].map((s) => s.corso.slug),
    ['fisica-1', 'analisi-1', 'algebra-lineare', 'fisica-1']
  );
  assert.deepEqual(
    primo.map((s) => s.data.getDay()),
    [2, 5]
  );
  assert.ok(
    primo.every(
      (s) => s.data > inizio && s.blocchi.reduce((a, b) => a + b) === p.minuti && s.arg.slug === 'secondo'
    )
  );
});

test('pacchetti e primo acquisto applicano le condizioni effettive, escludendo le materie gratuite o già possedute', () => {
  const p = profilo(dati.map(([id]) => id));
  const off = () => alternative(p, corsi, 10);
  const bundle = () => off().opzioni.find((o) => o.id === 'pacchetto');
  assert.deepEqual([bundle().percentuale, bundle().totale], [25, 12450]);
  p.possedute = ['algebra-lineare'];
  ripristinaOfferta(p, corsi);
  assert.deepEqual([bundle().percentuale, bundle().totale], [20, 10160]);
  p.pacchetto = ['analisi-1', 'fisica-1'];
  assert.deepEqual([bundle().percentuale, bundle().totale], [15, 8330]);
  assert.equal(off().opzioni.find((o) => o.id === 'singola').totale, 4410);
  p.primoAcquisto = false;
  assert.equal(off().opzioni.find((o) => o.id === 'singola').totale, 4900);
  assert.equal(bundle().totale, 8330);
});

test('la scelta commerciale segue obiettivo pratico, accessi e preferenza per il gratuito', () => {
  const p = profilo(['analisi-1', 'fisica-1', 'fisica-zero']);
  const off = () => alternative(p, corsi, 10);
  assert.equal(off().suggerita, 'pacchetto');
  p.orizzonte = 'presto';
  assert.equal(off().suggerita, 'singola');
  p.dubbio = 'gratuito';
  assert.equal(off().suggerita, 'gratis');
  p.dubbio = 'prezzo';
  p.priorita = 'fisica-zero';
  assert.equal(off().suggerita, 'gratis');
  p.possedute = ['analisi-1', 'fisica-1'];
  ripristinaOfferta(p, corsi);
  assert.deepEqual(
    off().opzioni.map((o) => o.id),
    ['gratis']
  );
});

test('togliere una materia aggiorna priorità e prezzi e conserva i temi delle materie rimaste', () => {
  const p = profilo(['analisi-1', 'fisica-1']);
  selezionaMateria(p, 'analisi-1', false, corsi);
  assert.equal(p.priorita, 'fisica-1');
  assert.equal(p.temi['analisi-1'], undefined);
  assert.equal(capitolo(p, corsi.get('fisica-1')).slug, 'secondo');
  assert.deepEqual(p.pacchetto, ['fisica-1']);
  assert.equal(alternative(p, corsi, 10).opzioni.length, 2);
});
