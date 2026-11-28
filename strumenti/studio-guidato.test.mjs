// Prove del motore dello Studio guidato (worker/studio-guidato.mjs, versione 2 per abilità) con studenti simulati.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { creaStato, prossima, registra, esito, progresso, banca, capitoli } from '../worker/studio-guidato.mjs';
import { RIMANDI, REGOLE_SG } from '../src/data/studio-guidato.mjs';

const CLASSI = JSON.parse(readFileSync(new URL('../src/data/studio-guidato-livelli.json', import.meta.url), 'utf8'));
const TITOLI = JSON.parse(readFileSync(new URL('../src/data/studio-guidato-rimandi.json', import.meta.url), 'utf8'));
const titoli = { 'analisi-1': Object.fromEntries(capitoli('analisi-1').map((a) => [a, a])), precorso: {}, nomeMateria: 'Analisi 1', nomi: { 'analisi-1': 'Analisi 1', precorso: 'Precorso' } };
// Materie aggiunte il 14/11/2026 notte (Logica per concorsi, Analisi 3): nomi come in titoliGuidati del Worker.
const NOMI = { 'analisi-1': 'Analisi 1', 'analisi-2': 'Analisi 2', 'analisi-3': 'Analisi 3', 'logica-concorsi': 'Logica per concorsi', 'fisica-1': 'Fisica 1', 'meccanica-razionale': 'Meccanica razionale', idraulica: 'Idraulica', precorso: 'Precorso' };
const TITOLI_ALTRE = Object.fromEntries(['logica-concorsi', 'analisi-3', 'meccanica-razionale', 'idraulica'].map((m) => [m, { [m]: Object.fromEntries(capitoli(m).map((a) => [a, a])), 'analisi-1': {}, 'analisi-2': {}, 'fisica-1': {}, precorso: {}, nomi: NOMI }]));
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
  return { e: esito(s, materia === 'fisica-1' ? titoliFisica : TITOLI_ALTRE[materia] || titoli), chieste, s };
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
  assert.deepEqual(chieste.slice(0, 4).map((c) => c.k.split('#')[0]), ['analisi-1/insiemi', 'analisi-1/numeri-complessi', 'analisi-1/successioni', 'analisi-1/limiti']);
  assert.ok(e.domande <= REGOLE_SG.maxDomandeTest + 3);
  assert.ok(e.lacune.length >= 1);
  const tuttoGiusto = simula(tutto);
  assert.equal(tuttoGiusto.e.domande, 10);
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

// ---------- Logica per concorsi e Analisi 3 (14/11/2026 notte) ----------
for (const [materia, n] of [['logica-concorsi', 8], ['analisi-3', 11], ['meccanica-razionale', 12], ['idraulica', 11]]) {
  test(`${materia}: ${n} capitoli, ogni abilità con domande medie e semplici e basi esistenti`, () => {
    assert.equal(capitoli(materia).length, n);
    for (const a of capitoli(materia)) {
      const nomi = CLASSI.abilita[`${materia}/${a}`];
      assert.ok(nomi.length >= 6 && nomi.length <= 8, a);
      assert.equal(banca(materia)[a].length, 90, a);
      nomi.forEach((_, i) => {
        const q = banca(materia)[a].filter((x) => x.ab === i);
        assert.ok(q.length >= 6, `${a}#${i}: ${q.length} domande`);
        assert.ok(q.filter((x) => x.livello === 2).length >= 2, `${a}#${i}: domande di livello medio`);
        assert.ok(q.some((x) => x.livello === 1), `${a}#${i}: domande di livello base`);
        for (const b of RIMANDI[`${materia}/${a}`][i].split('|')[2].split(',').filter(Boolean)) {
          const [arg, idx] = b.split('#');
          assert.ok(CLASSI.abilita[arg]?.[Number(idx)], `${a}#${i}: base ${b}`);
          assert.notEqual(b, `${materia}/${a}#${i}`, `${a}#${i}: base uguale all'abilità`);
        }
      });
    }
  });

  test(`${materia}: studente preparato, una domanda per abilità; studente in difficoltà, al massimo ${REGOLE_SG.maxDomandeTest} domande`, () => {
    for (const a of capitoli(materia)) {
      const bravo = simula(tutto, { argomento: a }, materia);
      assert.equal(bravo.e.domande, CLASSI.abilita[`${materia}/${a}`].length, a);
      assert.equal(bravo.e.lacune.length, 0);
      const { e } = simula(() => false, { argomento: a }, materia);
      assert.ok(e.domande <= REGOLE_SG.maxDomandeTest, `${a}: ${e.domande}`);
    }
  });
}

test('Analisi 3: la base in Analisi 1 va per prima con il nome della materia; i capitoli presi da Analisi 2 restano in Analisi 3', () => {
  const k = 'analisi-3/trasformata-di-laplace#5', base = 'analisi-1/integrali#3';
  const { e, chieste } = simula((q) => q !== k && q !== base, { argomento: 'trasformata-di-laplace' }, 'analisi-3');
  assert.deepEqual(chieste.filter((c) => c.k === k || c.k === base).map((c) => c.k), [k, k, base]);
  assert.deepEqual(e.lacune.map((l) => l.k), [base, k]);
  assert.equal(e.lacune[0].materia, 'Analisi 1');
  const k2 = 'analisi-3/equazioni-derivate-parziali#3', base2 = 'analisi-3/serie-di-fourier#2';
  const due = simula((q) => q !== k2 && q !== base2 && !q.startsWith('analisi-1/'), { argomento: 'equazioni-derivate-parziali' }, 'analisi-3');
  assert.ok(due.e.lacune.some((l) => l.k === base2 && l.materia === 'Analisi 3'));
  assert.ok(due.e.lacune.find((l) => l.k === base2).teoria[0].href.startsWith('/analisi-3/serie-di-fourier/teoria#'));
});

test('Logica per concorsi: la base in un capitolo precedente viene verificata e va per prima', () => {
  const k = 'logica-concorsi/sillogismi#4', base = 'logica-concorsi/insiemi-e-venn#3';
  const { e } = simula((q) => q !== k && q !== base && !q.startsWith('precorso/'), { argomento: 'sillogismi' }, 'logica-concorsi');
  assert.equal(e.lacune[0].k, base);
  assert.ok(e.lacune.some((l) => l.k === k));
  assert.equal(e.lacune[0].teoria[0].href, '/logica-concorsi/insiemi-e-venn/teoria#relazioni-tra-categorie');
});

// ---------- Meccanica razionale e Idraulica (15/11/2026) ----------
test('Meccanica razionale: la base in Fisica 1 va per prima con il nome della materia', () => {
  const k = 'meccanica-razionale/vettori-applicati#0', base = 'fisica-1/grandezze-e-vettori#6';
  const { e } = simula((q) => q !== k && q !== base, { argomento: 'vettori-applicati' }, 'meccanica-razionale');
  assert.equal(e.lacune[0].k, base);
  assert.equal(e.lacune[0].materia, 'Fisica 1');
  assert.ok(e.lacune.some((l) => l.k === k));
});

test('Idraulica: la base in un capitolo precedente resta in Idraulica', () => {
  const k = 'idraulica/spinte-idrostatiche#0', base = 'idraulica/idrostatica#4';
  const { e } = simula((q) => q !== k && q !== base, { argomento: 'spinte-idrostatiche' }, 'idraulica');
  assert.equal(e.lacune[0].k, base);
  assert.equal(e.lacune[0].materia, 'Idraulica');
  assert.ok(e.lacune[0].teoria[0].href.startsWith('/idraulica/idrostatica/teoria#'));
});

// Diagnosi dell'errore (15/11/2026): la risposta scelta porta all'errore tipico del catalogo.
const ERRORI = JSON.parse(readFileSync(new URL('../src/data/studio-guidato-errori.json', import.meta.url), 'utf8'));
test('errori tipici: ogni diagnosi punta a un errore del catalogo e mai alla risposta corretta', () => {
  for (const [m, domande] of Object.entries(ERRORI.domande)) for (const [id, voce] of Object.entries(domande)) {
    const [a, n] = id.split('/');
    const corretta = Number(/corretta:\s*(\d)/.exec(readFileSync(new URL(`../src/content/domande/${m}/${a}/${n}.md`, import.meta.url), 'utf8'))[1]);
    for (const [k, err] of Object.entries(voce)) {
      assert.notEqual(Number(k), corretta, `${m}/${id}`);
      assert.ok(ERRORI.errori[`${m}/${a}`].some((e) => e.id === err && e.nomeHtml && e.fattoHtml), `${m}/${id} → ${err}`);
    }
  }
});
test('errori tipici: le risposte sbagliate diagnosticate compaiono nell\'esito e l\'errore ripetuto è ricorrente', () => {
  const diagnosi = ERRORI.domande['analisi-1'] || {};
  const s = creaStato({ materia: 'analisi-1', argomento: 'limiti' });
  let q, viste = 0;
  while ((q = prossima(s))) {
    const voce = diagnosi[q.id];
    const k = voce ? Object.keys(voce)[0] : null;
    // Sbaglia sempre scegliendo una risposta con diagnosi, se esiste.
    registra(s, false, k ? Number(k) - 1 : null);
    viste++;
  }
  const e = esito(s, titoli);
  const conte = e.errori.reduce((t, x) => t + x.volte, 0);
  assert.ok(viste > 0 && conte > 0, 'nessun errore diagnosticato');
  assert.ok(e.lacune.some((l) => l.errori.length), 'errori assenti dalle lacune');
  if (e.errori[0].volte >= 2) assert.equal(e.ricorrente.k, e.errori[0].k);
});

// «Quanto sei sicuro?» (P4) e «Cosa ti blocca?» (P2), 15/11/2026.
test('giusta tirando a indovinare: seconda domanda e niente «ok» se anche la seconda è a caso', () => {
  const s = creaStato({ materia: 'analisi-1', argomento: 'limiti' });
  const q1 = prossima(s); registra(s, true, 0, false);
  const q2 = prossima(s);
  assert.equal(q2.k, q1.k, 'serve una seconda domanda sulla stessa abilità');
  registra(s, true, 0, false);
  assert.equal(s.u[0].st, 'incerta');
  const s2 = creaStato({ materia: 'analisi-1', argomento: 'limiti' });
  prossima(s2); registra(s2, true, 0, false); prossima(s2); registra(s2, true, 0, true);
  assert.equal(s2.u[0].st, 'ok');
});
test('sbagliata con sicurezza: convinzione e prima nel percorso', () => {
  const s = creaStato({ materia: 'analisi-1', argomento: 'limiti' });
  let q, n = 0;
  while ((q = prossima(s))) { registra(s, false, 0, n === 3); n++; }
  const e = esito(s, titoli);
  assert.ok(e.lacune.some((l) => l.convinzione));
  const prime = e.lacune.filter((l) => l.tipo === 'abilita');
  assert.ok(prime[0].convinzione || e.lacune.findIndex((l) => l.convinzione) <= e.lacune.findIndex((l) => l.tipo === 'abilita' && !l.convinzione));
});
test('priorità di «Cosa ti blocca?»: le abilità scelte vengono chieste per prime', () => {
  const s = creaStato({ materia: 'analisi-1', argomento: 'limiti', priorita: [3, 99, 1] });
  assert.equal(prossima(s).k, 'analisi-1/limiti#3');
  registra(s, true, 0, true);
  assert.equal(prossima(s).k, 'analisi-1/limiti#1');
});
