import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import { test } from 'node:test';
import { AREE_BOCCONI, BOCCONI, PROVE_BOCCONI } from '../src/data/bocconi.mjs';
import { accessoBocconi, correggiBocconi, gestisciBocconi } from '../worker/bocconi.mjs';

const banca = JSON.parse(readFileSync(new URL('../src/data/bocconi-prove.json', import.meta.url), 'utf8'));

test('Bocconi: distribuzione delle prove, quesiti distinti e chiavi bilingui', () => {
  const ids = new Set();
  const testi = { it: new Set(), en: new Set() };
  for (const prova of PROVE_BOCCONI) {
    const qs = banca[prova];
    const diagnostico = prova === 'diagnostico';
    assert.equal(qs.length, diagnostico ? BOCCONI.diagnostico : BOCCONI.quesiti);
    if (diagnostico) {
      const capitoli = Map.groupBy(qs, (q) => q.capitolo);
      assert.equal(capitoli.size, 6);
      for (const gruppo of capitoli.values()) assert.equal(gruppo.length, 3);
    } else {
      for (const [area, { quesiti }] of Object.entries(AREE_BOCCONI)) {
        assert.equal(qs.filter((q) => q.area === area).length, quesiti);
      }
      assert.equal(qs.filter((q) => q.options.it.length === 3 && q.area === 'critico').length, 4);
      assert.ok(qs.every((q) => q.options.it.length === 5 || (q.options.it.length === 3 && q.area === 'critico')));
    }
    for (const q of qs) {
      assert.ok(!ids.has(q.id));
      ids.add(q.id);
      assert.equal(q.options.it.length, q.options.en.length);
      assert.ok(Number.isInteger(q.correct) && q.correct >= 0 && q.correct < q.options.it.length);
      for (const lingua of ['it', 'en']) {
        assert.ok(q.prompt[lingua] && q.explanation[lingua] && !testi[lingua].has(q.prompt[lingua]));
        testi[lingua].add(q.prompt[lingua]);
        assert.equal(new Set(q.options[lingua]).size, q.options[lingua].length);
      }
    }
  }
});

test('Bocconi: penalità da 0,20 e da 0,33, omissioni e diagnostico', () => {
  const base = { scelte: ['A', 'B', 'C', 'D', 'E'], area: 'matematica', corretta: 0 };
  const domande = [base, base, { ...base, scelte: ['A', 'B', 'C'], area: 'critico' }, base];
  const risposte = [0, 1, 1, null];
  const valuta = correggiBocconi(domande, risposte, true);
  assert.equal(valuta.punti, 0.47);
  assert.equal(valuta.sezioni.find((a) => a.area === 'critico').punti, -0.33);
  assert.equal(valuta.sezioni.find((a) => a.area === 'matematica').omesse, 1);
  assert.equal(correggiBocconi(domande, risposte, false).punti, 1);
});

test('Bocconi: ogni rimando della correzione punta allo stesso argomento in italiano e in inglese', () => {
  const capitoli = new Map();
  for (const { capitolo, topic } of Object.values(banca).flat()) {
    const chiavi = capitoli.get(capitolo) ?? new Set();
    chiavi.add(topic);
    capitoli.set(capitolo, chiavi);
  }
  for (const cartella of ['content', 'content-en']) {
    for (const [capitolo, riferimenti] of capitoli) {
      const testo = readFileSync(new URL(`../src/${cartella}/teoria/${BOCCONI.slug}/${capitolo}.md`, import.meta.url), 'utf8');
      const ancore = new Set(Array.from(testo.matchAll(/\{#([a-z0-9-]+)(?=[\s}])/g), ([, id]) => id));
      for (const id of riferimenti) assert.ok(ancore.has(id), `${cartella}/${capitolo}#${id}`);
    }
  }
});

test('Bocconi: interfaccia delle simulazioni e API usano l’accesso del corso', () => {
  const vendita = { VENDITA: '1' };
  assert.equal(accessoBocconi(vendita, null), false);
  assert.equal(accessoBocconi(vendita, { materie: ['analisi-1'] }), false);
  assert.equal(accessoBocconi(vendita, { materie: [BOCCONI.slug] }), true);
  assert.equal(accessoBocconi({ VENDITA: '0' }, null), true);
});

test('Bocconi: diagnostico aperto, esercitazione protetta, correzione separata', async () => {
  const tokens = new Map();
  let accesso = false;
  let letture = 0;
  const h = {
    json: (body, status, headers) => Response.json(body, { status, headers }),
    utenteCollegato: async () => accesso ? { email: 'studente@example.test', materie: [BOCCONI.slug] } : null,
    firmaToken: async (_env, dati) => {
      const token = String(tokens.size + 1);
      tokens.set(token, dati);
      return token;
    },
    leggiToken: async (_env, token) => tokens.get(token),
  };
  const env = {
    VENDITA: '1',
    ASSETS: {
      async fetch(req) {
        letture++;
        const [, lingua, prova] = new URL(req.url).pathname.match(/bocconi\/(it|en)\/([^/]+)\.json$/);
        const domande = banca[prova].map((q) => ({
          id: q.id, area: q.area, testo: q.prompt[lingua], scelte: q.options[lingua], corretta: q.correct, spiegazione: q.explanation[lingua],
        }));
        return Response.json({ versione: 'test', domande });
      },
    },
  };
  const api = (azione, body) => {
    const path = '/api/bocconi/' + azione;
    const req = new Request('https://sito.test' + path, { method: 'POST', body: JSON.stringify(body) });
    return gestisciBocconi(req, env, path, h);
  };
  const negato = await api('inizia', { lingua: 'en', prova: '1' });
  assert.equal(negato.status, 403);
  assert.equal((await negato.json()).sblocca, '/en/test-bocconi/sblocca');
  assert.equal(letture, 0);
  const demo = await api('inizia', { lingua: 'en', prova: 'diagnostico' });
  const iniziato = await demo.json();
  assert.equal(iniziato.domande.length, 18);
  assert.equal(iniziato.scadenza, null);
  assert.ok(iniziato.domande.every((q) => !Object.hasOwn(q, 'corretta') && !Object.hasOwn(q, 'spiegazione')));
  const corretto = await api('correggi', {
    lingua: 'en', prova: 'diagnostico', token: iniziato.token, risposte: banca.diagnostico.map((q) => q.correct),
  });
  assert.equal((await corretto.json()).punti, 18);
  accesso = true;
  const mock = await api('inizia', { lingua: 'it', prova: '1' });
  const simulazione = await mock.json();
  assert.equal(simulazione.domande.length, 50);
  assert.ok(simulazione.scadenza > Date.now());
  const linguaDiversa = await api('correggi', { lingua: 'en', prova: '1', token: simulazione.token, risposte: Array(50).fill(null) });
  assert.equal(linguaDiversa.status, 400);
  accesso = false;
  const revocato = await api('correggi', { lingua: 'it', prova: '1', token: simulazione.token, risposte: Array(50).fill(null) });
  assert.equal(revocato.status, 403);
});
