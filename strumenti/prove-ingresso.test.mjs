import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PROVE_INGRESSO, provaTolc } from '../src/data/tolc.mjs';
import { gestisciTolcI } from '../worker/tolc-i.mjs';

function banco(materia) {
  const conf = PROVE_INGRESSO[materia];
  return Object.fromEntries(conf.sezioni.flatMap(s => s.argomenti.map(a => [
    a,
    Array.from({ length: 90 }, (_, i) => ({
      id: `${a}/${i + 1}`,
      n: i + 1,
      testo: 'Quesito di prova',
      scelte: Array.from({ length: conf.risposte ?? 5 }, (_, j) => String(j)),
      corretta: 1,
      spiegazione: 'Spiegazione di prova',
      ...(s.brani ? { brano: String(Math.floor(i / 5)) } : {}),
    })),
  ])));
}

function verificaBrani(domande, attesi) {
  const blocchi = Array.from({ length: attesi }, (_, i) => domande.slice(i * 5, i * 5 + 5));
  assert.ok(blocchi.every(blocco => blocco.length === 5 && new Set(blocco.map(q => q.brano)).size === 1));
  assert.equal(new Set(blocchi.map(blocco => blocco[0].brano)).size, attesi);
}

test('TOLC-E estrae due brani interi e permette di omettere inglese', () => {
  const domande = banco('tolc-e');
  const intera = provaTolc('tolc-e', domande);
  assert.deepEqual(intera.map(s => [s.domande.length, s.minuti]), [[13, 30], [10, 30], [13, 30], [30, 15]]);
  verificaBrani(intera[1].domande, 2);
  assert.equal(provaTolc('tolc-e', domande, false).flatMap(s => s.domande).length, 36);
  domande['comprensione-verbale'] = domande['comprensione-verbale'].slice(0, 9);
  assert.throws(() => provaTolc('tolc-e', domande), /Brani insufficienti/);
});

test('TOL Politecnico include TENG, un brano da cinque domande e le quote di allenamento', () => {
  const prova = provaTolc('tol-politecnico', banco('tol-politecnico'), false);
  assert.deepEqual(prova.map(s => [s.domande.length, s.minuti]), [[30, 15], [25, 65], [5, 10], [5, 10]]);
  assert.equal(prova[0].slug, 'inglese');
  verificaBrani(prova[2].domande, 1);
  const quote = Object.groupBy(prova[1].domande, q => q.id.split('/')[0]);
  assert.deepEqual(['matematica', 'logica', 'statistica'].map(a => quote[a].length), [15, 5, 5]);
});

for (const [materia, attesi] of Object.entries({
  'tolc-e': { punti: 29.25, massimo: 36, inglese: 28, numero: 66, alternative: 5 },
  'tol-politecnico': { punti: 82.15, massimo: 100, inglese: null, numero: 65, alternative: 5 },
  'ofa-matematica': { punti: 18, massimo: 20, inglese: null, numero: 20, alternative: 4 },
})) {
  test(`${materia}: sessione, punteggio e spiegazioni alla consegna`, async () => {
    const argomenti = banco(materia);
    let firmato;
    const h = {
      json: (d, status = 200) => Response.json(d, { status }),
      utenteCollegato: async () => null,
      domandeDi: async () => ({ argomenti }),
      firmaToken: async (_env, d) => { firmato = d; return 'token-di-prova'; },
      leggiToken: async (_env, token) => token === 'token-di-prova' ? firmato : null,
    };
    async function chiama(azione, dati) {
      const path = `/api/${materia}/${azione}`;
      const req = new Request('https://esempio.invalid' + path, {
        method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(dati),
      });
      return gestisciTolcI(req, { VENDITA: '1' }, path, h);
    }
    const avvio = await chiama('inizia', {});
    assert.equal(avvio.status, 200);
    const { token, sezioni } = await avvio.json();
    const quesiti = sezioni.flatMap(s => s.domande);
    assert.equal(quesiti.length, attesi.numero);
    assert.equal(new Set(quesiti.map(q => q.id)).size, attesi.numero);
    assert.ok(quesiti.every(q => q.scelte.length === attesi.alternative && !('corretta' in q) && !('spiegazione' in q)));

    const risposte = sezioni.map(s => s.domande.map((_, i) => i === 0 ? null : i === 1 ? 1 : 0));
    const consegna = await chiama('correggi', { token, risposte });
    assert.equal(consegna.status, 200);
    const esito = await consegna.json();
    assert.equal(esito.punti, attesi.punti);
    assert.equal(esito.massimo, attesi.massimo);
    assert.equal(esito.inglese, attesi.inglese);
    assert.ok(esito.sezioni.every(s => s.omesse === 1 && s.errate === 1));
    assert.ok(esito.sezioni.flatMap(s => s.esiti).every(q => q.corretta === 1 && q.spiegazione));

    risposte[0][0] = attesi.alternative;
    assert.equal((await chiama('correggi', { token, risposte })).status, 400);
  });
}
