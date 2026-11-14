// Prove del motore dello Studio guidato (worker/studio-guidato.mjs, versione 2 per abilità) con studenti simulati.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { creaStato, prossima, registra, esito, progresso, banca, capitoli } from '../worker/studio-guidato.mjs';
import { RIMANDI, REGOLE_SG } from '../src/data/studio-guidato.mjs';

const CLASSI = JSON.parse(readFileSync(new URL('../src/data/studio-guidato-livelli.json', import.meta.url), 'utf8'));
const TITOLI = JSON.parse(readFileSync(new URL('../src/data/studio-guidato-rimandi.json', import.meta.url), 'utf8'));
const titoli = { 'analisi-1': Object.fromEntries(capitoli('analisi-1').map((a) => [a, a])), precorso: {}, nomeMateria: 'Analisi 1', nomi: { 'analisi-1': 'Analisi 1', precorso: 'Precorso' } };

// Studente simulato: sa(k, livello) dice se risponde bene a una domanda dell'abilità k («materia/argomento#i»).
function simula(sa, opzioni = {}) {
  const s = creaStato({ materia: 'analisi-1', ...opzioni });
  const chieste = [];
  let q;
  while ((q = prossima(s))) {
    chieste.push({ k: q.k, liv: q.liv, id: `${q.m}:${q.id}` });
    registra(s, sa(q.k, q.liv));
    assert.ok(s.n <= 30);
  }
  return { e: esito(s, titoli), chieste, s };
}
const tutto = () => true;

test('ogni abilità ha paragrafo della teoria, domande e rimandi con i titoli', () => {
  for (const [chiave, nomi] of Object.entries(CLASSI.abilita)) {
    assert.equal(RIMANDI[chiave]?.length, nomi.length, chiave);
    assert.equal(TITOLI[chiave]?.length, nomi.length, `${chiave}: rifare node scripts/studio-guidato-rimandi.mjs`);
    const [m, a] = chiave.split('/');
    nomi.forEach((_, i) => {
      assert.ok(TITOLI[chiave][i].t.length >= 1 && TITOLI[chiave][i].t.every((x) => x.titolo), `${chiave}#${i}`);
      assert.deepEqual(TITOLI[chiave][i].t.map((x) => x.id).join(','), RIMANDI[chiave][i].split('|')[0], `${chiave}#${i}: titoli non aggiornati`);
      assert.ok(banca(m)[a].some((q) => q.ab === i), `${chiave}#${i} senza domande`);
    });
  }
});

test('studente preparato sul capitolo: una domanda per abilità, nessuna lacuna', () => {
  const { e, chieste } = simula(tutto, { argomento: 'limiti' });
  assert.equal(e.domande, 8);
  assert.equal(new Set(chieste.map((c) => c.k)).size, 8);
  assert.equal(e.lacune.length, 0);
  assert.ok(e.abilita.every((a) => a.stato === 'ok'));
});

test('un test non supera mai il numero massimo di domande', () => {
  for (const a of capitoli('analisi-1')) {
    const { e } = simula(() => false, { argomento: a });
    assert.ok(e.domande <= REGOLE_SG.maxDomandeTest, `${a}: ${e.domande}`);
    assert.ok(e.abilita.every((x) => x.stato !== 'ok'));
    assert.ok(e.abilita.filter((x) => x.stato !== 'nv').length >= Math.min(e.abilita.length, 6), `${a}: abilità verificate`);
  }
});

test('errore su una abilità: domanda più semplice sulla stessa abilità, poi la base; la base va per prima', () => {
  const k = 'analisi-1/limiti#0', base = 'precorso/polinomi#5';
  const { e, chieste } = simula((q) => q !== k && q !== base, { argomento: 'limiti' });
  const su = chieste.filter((c) => c.k === k);
  assert.equal(su.length, 2);
  assert.ok(su[1].liv <= su[0].liv);
  assert.equal(chieste[2].k, base, 'dopo due errori si verifica la base');
  assert.equal(e.lacune[0].k, base);
  assert.equal(e.lacune[0].tipo, 'base');
  assert.deepEqual(e.lacune[0].per, ['Forme 0/0 con scomposizione']);
  assert.equal(e.lacune[1].k, k);
  assert.equal(e.lacune.length, 2);
  assert.match(e.sintesi, /Raccoglimenti e trinomi/);
  assert.match(e.lacune[0].teoria[0].href, /^\/precorso\/polinomi\/teoria#strategia-di-fattorizzazione$/);
  assert.match(e.lacune[1].schede[0].href, /^\/analisi-1\/limiti\/esercizi-svolti\/1$/);
  assert.ok(e.domande <= 11);
});

test('errore solo sulla domanda media: abilità da consolidare, senza verifica della base', () => {
  const k = 'analisi-1/limiti#3';
  const { e, chieste } = simula((q, liv) => q !== k || liv < 2, { argomento: 'limiti' });
  assert.equal(e.lacune.length, 1);
  assert.equal(e.lacune[0].stato, 'incerta');
  assert.ok(chieste.every((c) => c.k.startsWith('analisi-1/limiti#')));
});

test('«Non so da dove iniziare»: una domanda per capitolo fino al primo errore, poi il test sul capitolo', () => {
  const { e, chieste } = simula((q) => !q.startsWith('analisi-1/limiti#') && !q.startsWith('precorso/'));
  assert.equal(e.capitolo, 'limiti');
  assert.deepEqual(chieste.slice(0, 3).map((c) => c.k.split('#')[0]), ['analisi-1/insiemi', 'analisi-1/numeri-complessi', 'analisi-1/limiti']);
  assert.ok(e.domande <= REGOLE_SG.maxDomandeTest + 2);
  assert.ok(e.lacune.length >= 1);
  const tuttoGiusto = simula(tutto);
  assert.equal(tuttoGiusto.e.domande, 9);
  assert.equal(tuttoGiusto.e.capitolo, null);
  assert.equal(tuttoGiusto.e.lacune.length, 0);
});

test('ricontrollo: una domanda per lacuna, domande nuove, progresso aggiornato', () => {
  const k = 'analisi-1/limiti#0', base = 'precorso/polinomi#5';
  const primo = simula((q) => q !== k && q !== base, { argomento: 'limiti' });
  const secondo = simula(tutto, { ricontrollo: true, precedente: primo.e, viste: primo.e.viste });
  assert.equal(secondo.e.domande, 2);
  assert.deepEqual(secondo.chieste.map((c) => c.k), [base, k]);
  const viste = new Set(primo.e.viste);
  assert.ok(secondo.chieste.every((c) => !viste.has(c.id)));
  assert.equal(secondo.e.lacune.length, 0);
  const p = progresso([secondo.e, primo.e]);
  assert.deepEqual([p.trovate, p.risolte, p.test], [2, 2, 2]);
  const terzo = simula((q) => q !== base, { ricontrollo: true, precedente: primo.e });
  assert.equal(terzo.e.lacune.length, 1);
  assert.equal(progresso([terzo.e, primo.e]).risolte, 1);
});
