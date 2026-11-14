// Prove del motore dello Studio guidato (worker/studio-guidato.mjs, versione 2 per abilità) con studenti simulati.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { creaStato, prossima, registra, esito, progresso, banca, capitoli } from '../worker/studio-guidato.mjs';
import { RIMANDI, REGOLE_SG } from '../src/data/studio-guidato.mjs';

const CLASSI = JSON.parse(readFileSync(new URL('../src/data/studio-guidato-livelli.json', import.meta.url), 'utf8'));
const TITOLI = JSON.parse(readFileSync(new URL('../src/data/studio-guidato-rimandi.json', import.meta.url), 'utf8'));
const titoli = { 'analisi-1': Object.fromEntries(capitoli('analisi-1').map((a) => [a, a])), precorso: {}, nomeMateria: 'Analisi 1', nomi: { 'analisi-1': 'Analisi 1', precorso: 'Precorso' } };
const titoliFisica = { 'fisica-1': Object.fromEntries(capitoli('fisica-1').map((a) => [a, a])), 'analisi-1': {}, precorso: {}, nomi: { 'fisica-1': 'Fisica 1', 'analisi-1': 'Analisi 1', precorso: 'Precorso' } };

// Studente simulato: sa(k, livello) dice se risponde bene a una domanda dell'abilità k («materia/argomento#i»).
function simula(sa, opzioni = {}, materia = 'analisi-1') {
  const s = creaStato({ materia, ...opzioni });
  const chieste = [];
  let q;
  while ((q = prossima(s))) {
    chieste.push({ k: q.k, liv: q.liv, id: `${q.m}:${q.id}` });
    registra(s, sa(q.k, q.liv));
    assert.ok(s.n <= 30);
  }
  return { e: esito(s, materia === 'fisica-1' ? titoliFisica : titoli), chieste, s };
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

// ---------- Fisica 1 (14/11/2026): basi nei capitoli precedenti, nel Precorso e in Analisi 1 ----------
const fisica = (sa, opzioni = {}) => simula(sa, opzioni, 'fisica-1');

test('Fisica 1: dodici capitoli, ogni abilità con domande medie e basi esistenti', () => {
  assert.equal(capitoli('fisica-1').length, 12);
  for (const a of capitoli('fisica-1')) {
    const nomi = CLASSI.abilita[`fisica-1/${a}`];
    assert.ok(nomi.length >= 6 && nomi.length <= 8, a);
    assert.equal(banca('fisica-1')[a].length, 90, a);
    nomi.forEach((_, i) => {
      const q = banca('fisica-1')[a].filter((x) => x.ab === i);
      assert.ok(q.length >= 6, `${a}#${i}: ${q.length} domande`);
      assert.ok(q.filter((x) => x.livello === 2).length >= 2, `${a}#${i}: domande di livello medio`);
      for (const b of RIMANDI[`fisica-1/${a}`][i].split('|')[2].split(',').filter(Boolean)) {
        const [arg, idx] = b.split('#');
        assert.ok(CLASSI.abilita[arg]?.[Number(idx)], `${a}#${i}: base ${b}`);
        assert.notEqual(b, `fisica-1/${a}#${i}`, `${a}#${i}: base uguale all'abilità`);
      }
    });
  }
});

test('Fisica 1: studente preparato, una domanda per abilità in ogni capitolo', () => {
  for (const a of capitoli('fisica-1')) {
    const { e, chieste } = fisica(tutto, { argomento: a });
    const n = CLASSI.abilita[`fisica-1/${a}`].length;
    assert.equal(e.domande, n, a);
    assert.ok(chieste.every((c) => c.k.startsWith(`fisica-1/${a}#`)));
    assert.equal(e.lacune.length, 0);
  }
});

test('Fisica 1: un test non supera mai il numero massimo di domande', () => {
  for (const a of capitoli('fisica-1')) {
    const { e } = fisica(() => false, { argomento: a });
    assert.ok(e.domande <= REGOLE_SG.maxDomandeTest, `${a}: ${e.domande}`);
    assert.ok(e.abilita.filter((x) => x.stato !== 'nv').length >= 6, `${a}: abilità verificate`);
  }
});

test('Fisica 1: la base in Analisi 1 viene verificata e va per prima, con il nome della materia', () => {
  const k = 'fisica-1/cinematica-1d#4', base = 'analisi-1/derivate#1';
  const { e, chieste } = fisica((q) => q !== k && q !== base, { argomento: 'cinematica-1d' });
  assert.deepEqual(chieste.filter((c) => c.k === k || c.k === base).map((c) => c.k), [k, k, base]);
  assert.deepEqual(e.lacune.map((l) => l.k), [base, k]);
  assert.equal(e.lacune[0].materia, 'Analisi 1');
  assert.equal(e.lacune[0].teoria[0].href, '/analisi-1/derivate/teoria#regole-di-derivazione');
  assert.equal(e.lacune[1].schede[0].href, '/fisica-1/cinematica-1d/esercizi-svolti/5');
  assert.match(e.sintesi, /«Regole di derivazione» \(Analisi 1, derivate\), perché è la base di «Velocità e accelerazione dalla legge oraria»/);
});

test('Fisica 1: la base in un capitolo precedente di Fisica 1 non porta il nome della materia', () => {
  const k = 'fisica-1/leggi-di-newton#4', base = 'fisica-1/grandezze-e-vettori#3';
  const { e } = fisica((q) => q !== k && q !== base, { argomento: 'leggi-di-newton' });
  assert.deepEqual(e.lacune.map((l) => l.k), [base, k]);
  assert.match(e.sintesi, /«Componenti di un vettore» \(grandezze-e-vettori\), perché è la base di «Piano inclinato»/);
  assert.equal(e.lacune[0].teoria[0].href, '/fisica-1/grandezze-e-vettori/teoria#componenti-cartesiane-e-polari');
});

test('Fisica 1: «Non so da dove iniziare» segue l\'ordine dei capitoli e si ferma al primo errore', () => {
  const { e, chieste } = fisica((q) => !q.startsWith('fisica-1/leggi-di-newton#'));
  assert.equal(e.capitolo, 'leggi-di-newton');
  assert.deepEqual(chieste.slice(0, 4).map((c) => c.k.split('#')[0].split('/')[1]), ['grandezze-e-vettori', 'cinematica-1d', 'moto-nel-piano', 'leggi-di-newton']);
  assert.ok(e.domande <= REGOLE_SG.maxDomandeTest + 3);
  const tuttoGiusto = fisica(tutto);
  assert.equal(tuttoGiusto.e.domande, 12);
  assert.equal(tuttoGiusto.e.capitolo, null);
});

test('Fisica 1: ricontrollo con domande nuove', () => {
  const k = 'fisica-1/fluidi#4', base = 'fisica-1/fluidi#3';
  const primo = fisica((q) => q !== k, { argomento: 'fluidi' });
  assert.deepEqual(primo.e.lacune.map((l) => l.k), [k]);
  assert.ok(primo.chieste.some((c) => c.k === base));
  const secondo = fisica(tutto, { ricontrollo: true, precedente: primo.e, viste: primo.e.viste });
  assert.equal(secondo.e.domande, 1);
  const viste = new Set(primo.e.viste);
  assert.ok(secondo.chieste.every((c) => !viste.has(c.id)));
  assert.deepEqual([progresso([secondo.e, primo.e]).trovate, progresso([secondo.e, primo.e]).risolte], [1, 1]);
});
