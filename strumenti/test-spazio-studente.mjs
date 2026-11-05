import test from 'node:test';
import assert from 'node:assert/strict';
import { collegamentoStudio, scelteSpazio, ripassiDisponibili } from '../src/lib/spazio-studente.mjs';

const catalogo = [
  { slug: 'analisi-1', titolo: 'Analisi 1', argomenti: [{ slug: 'limiti', titolo: 'Limiti' }], domande: ['limiti'] },
  { slug: 'fisica-zero', titolo: 'Fisica zero', argomenti: [{ slug: 'misure', titolo: 'Misure' }], domande: [] },
];

test('resume uses a known topic and never links to questions missing from its subject', () => {
  const scelta = scelteSpazio({ sessioni: [{ materia: 'fisica-zero', argomento: 'misure' }] }, catalogo);
  assert.equal(scelta.riprendi.href, '/fisica-zero/misure/teoria');
  assert.equal(scelta.quiz, null);
});

test('an unfinished goal with a valid link takes precedence for practice', () => {
  const scelta = scelteSpazio({
    sessioni: [{ materia: 'fisica-zero', argomento: 'misure' }],
    obiettivi: [{ testo: 'Finito', completato: true, link: '/analisi-1/limiti/domande' }, { testo: 'Da fare', completato: false, link: '/analisi-1/limiti/domande' }],
  }, catalogo, '/en');
  assert.equal(scelta.quiz, '/en/analisi-1/limiti/domande');
  assert.equal(scelta.obiettivo.testo, 'Da fare');
});

test('empty or unknown history is a starting state, not invented progress', () => {
  const scelta = scelteSpazio({ sessioni: [{ materia: 'inesistente', argomento: 'qualcosa' }] }, catalogo);
  assert.equal(scelta.riprendi, null);
  assert.equal(scelta.quiz, null);
  assert.equal(scelta.tuttiCompletati, false);
  assert.equal(scelteSpazio({ obiettivi: [{ completato: true }] }, catalogo).tuttiCompletati, true);
});

test('review count excludes unknown subjects, unavailable quizzes and invalid counts', () => {
  assert.deepEqual(ripassiDisponibili({ oggi: [
    { materia: 'analisi-1', n: 4 }, { materia: 'fisica-zero', n: 3 }, { materia: 'altro', n: 1 }, { materia: 'analisi-1', n: -1 },
  ] }, catalogo, '/en'), [{ titolo: 'Analisi 1', n: 4, href: '/en/analisi-1/ripasso-di-oggi/domande' }]);
  assert.deepEqual(ripassiDisponibili(null, catalogo), []);
});

test('practice URLs are local known routes and receive exactly one language prefix', () => {
  assert.equal(collegamentoStudio('/en/analisi-1/limiti/domande', catalogo, '/en'), '/en/analisi-1/limiti/domande');
  for (const href of ['https://evil.example', '//evil.example', 'javascript:alert(1)', '/analisi-1/limiti/domande?x=1', '/analisi-1/limiti/domande/other', '/fisica-zero/misure/domande']) {
    assert.equal(collegamentoStudio(href, catalogo), null, href);
  }
});
