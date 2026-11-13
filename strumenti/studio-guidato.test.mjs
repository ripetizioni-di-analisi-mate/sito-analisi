// Prove del motore dello Studio guidato (worker/studio-guidato.mjs) con studenti simulati.
import test from 'node:test';
import assert from 'node:assert/strict';
import { creaStato, prossima, registra, esito, progresso, banca } from '../worker/studio-guidato.mjs';
import { STUDIO_GUIDATO } from '../src/data/studio-guidato.mjs';

const titoli = { 'analisi-1': Object.fromEntries(Object.keys(STUDIO_GUIDATO['analisi-1'].dipendenze).map((a) => [a, a])),
  precorso: { logica: 'Logica', 'potenze-e-radici': 'Potenze', polinomi: 'Polinomi', 'equazioni-polinomiali': 'Fratte', 'valore-assoluto': 'Modulo', irrazionali: 'Irrazionali', logaritmiche: 'Log', esponenziali: 'Esp', goniometriche: 'Gonio', 'geometria-analitica': 'Geo' }, nomeMateria: 'Analisi 1' };

// Studente simulato: per ogni (materia/argomento) il livello massimo che sa risolvere.
function simula(sa, opzioni = {}) {
  const s = creaStato({ materia: 'analisi-1', argomenti: opzioni.argomenti, precedente: opzioni.precedente, viste: opzioni.viste });
  const livelli = [];
  let q;
  while ((q = prossima(s))) {
    livelli.push([q.m, q.id.split('/')[0], q.liv]);
    registra(s, q.liv <= (sa[`${q.m}/${q.id.split('/')[0]}`] ?? 3));
    assert.ok(s.n <= 45);
  }
  return { e: esito(s, titoli), livelli, s };
}

test('la banca ha livelli 1-3 per tutte le domande di Analisi 1 e Precorso', () => {
  for (const m of ['analisi-1', 'precorso']) {
    const b = banca(m);
    assert.ok(Object.keys(b).length >= 9);
    for (const qs of Object.values(b)) for (const l of [1, 2, 3]) assert.ok(qs.filter((q) => q.livello === l).length >= 15);
  }
});

test('studente preparato: nessuna lacuna, livelli avanzati, test breve', () => {
  const { e } = simula({});
  assert.equal(e.lacune.length, 0);
  assert.ok(e.argomenti.every((a) => a.stima === 3));
  assert.ok(e.domande <= 9 * 3, `domande ${e.domande}`);
});

test('tre errori di fila: le domande scendono di livello', () => {
  const { livelli } = simula({ 'analisi-1/limiti': 0 }, { argomenti: ['limiti'] });
  const lim = livelli.filter(([m, a]) => a === 'limiti').map(([, , l]) => l);
  assert.deepEqual(lim.slice(0, 3), [2, 1, 1]);
});

test('limiti deboli per una base del Precorso: la causa è trovata e messa per prima', () => {
  const { e } = simula({ 'analisi-1/limiti': 0, 'precorso/polinomi': 0 }, { argomenti: ['limiti'] });
  assert.equal(e.lacune[0].m, 'precorso');
  assert.equal(e.lacune[0].a, 'polinomi');
  assert.ok(e.lacune.some((l) => l.a === 'limiti'));
  assert.match(e.sintesi, /dipendono da/);
  assert.match(e.sintesi, /polinomi/i);
});

test('secondo test: riparte dal livello raggiunto, ricontrolla le lacune e non ripete le domande', () => {
  const primo = simula({ 'analisi-1/limiti': 0, 'precorso/polinomi': 0 }, { argomenti: ['limiti', 'derivate'] });
  const secondo = simula({}, { argomenti: ['limiti', 'derivate'], precedente: primo.e, viste: primo.e.viste });
  assert.equal(secondo.livelli[0][1], 'polinomi', 'la lacuna di base si ricontrolla per prima');
  const viste = new Set(primo.e.viste);
  assert.ok(secondo.e.viste.every((id) => !viste.has(id)));
  assert.equal(secondo.e.lacune.length, 0);
  const p = progresso([secondo.e, primo.e]);
  assert.equal(p.trovate, primo.e.lacune.length);
  assert.equal(p.risolte, primo.e.lacune.length);
});

test('argomento già avanzato: una sola domanda di controllo', () => {
  const primo = simula({}, { argomenti: ['serie'] });
  const secondo = simula({}, { argomenti: ['serie'], precedente: primo.e, viste: primo.e.viste });
  assert.equal(secondo.e.domande, 1);
});
