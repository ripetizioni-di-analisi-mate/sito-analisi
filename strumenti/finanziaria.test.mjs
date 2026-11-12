import test, { after } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, mkdtempSync, rmSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { anteprimaFinanziaria, CAPITOLI_FINANZIARIA } from '../src/data/finanziaria.mjs';

const root = fileURLToPath(new URL('..', import.meta.url));
const temp = mkdtempSync(join(tmpdir(), 'finanziaria-worker-'));
const bundle = join(temp, 'worker.mjs');
after(() => rmSync(temp, { recursive: true, force: true }));
execFileSync(process.execPath, [
  join(root, 'node_modules/rolldown/bin/cli.mjs'),
  join(root, 'worker/index.mjs'),
  '--file', bundle, '--format', 'esm', '--platform', 'neutral',
], { stdio: 'pipe' });

const { default: worker, firmaToken } = await import(pathToFileURL(bundle));
const materia = 'matematica-finanziaria';
const origine = 'https://ripetizionidianalisi.com';
const email = 'studente@example.test';
const percorsoBanca = `/dati-domande/${materia}.json`;
const bancaDomande = () => readFileSync(join(root, 'dist', percorsoBanca));

async function banco(materie = null) {
  const env = {
    VENDITA: '1',
    CHIAVE_ACCESSO: 'test-only',
    STRIPE_SECRET_KEY: 'test-only',
    STRIPE_WEBHOOK_SECRET: 'test-only',
    ASSETS: {
      async fetch(req) {
        const path = new URL(req.url || req).pathname;
        if (path === percorsoBanca)
          return new Response(bancaDomande(), { headers: { 'content-type': 'application/json' } });
        // Restituisce il percorso scelto dal Worker per distinguere le pagine dalle vetrine.
        return new Response(path, { headers: { 'content-type': 'text/plain' } });
      },
    },
    ARCHIVIO: {
      idFromName: () => 'test',
      get: () => ({
        async fetch(url) {
          const path = new URL(url).pathname;
          if (['/promo-offerta', '/inv-sconto', '/bv-stato'].includes(path)) return Response.json({});
          assert.equal(path, '/sessione');
          return Response.json(materie === null ? null : { email, nome: 'Studente', materie, versione: 1 });
        },
      }),
    },
  };
  const cookie = materie === null ? '' : `sessione=${await firmaToken(env, { e: email, v: 1, d: 'test', t: Date.now() })}`;
  const invia = (path, body) => worker.fetch(new Request(origine + path, {
    method: body ? 'POST' : 'GET',
    headers: { cookie, origin: origine, 'content-type': 'application/json', 'user-agent': 'audit-bot', 'accept-language': 'it' },
    body: body ? JSON.stringify(body) : undefined,
  }), env, { waitUntil() {} });
  const quiz = async (argomento) => {
    const risposta = await invia('/api/domande/prossima', { materia, lingua: 'it', argomento });
    assert.equal(risposta.status, 200);
    return risposta.json();
  };
  return { invia, quiz };
}

test('Stripe calcola il prezzo e associa l’acquisto a Matematica finanziaria', async () => {
  const b = await banco(['matematica-generale']);
  assert.deepEqual(await (await b.invia('/api/config')).json(), { stripe: true });
  const preventivo = await b.invia('/api/acquisti/preventivo', { tipo: 'materia', slug: materia });
  assert.equal(preventivo.status, 200);
  const ordine = await preventivo.json();
  const listino = JSON.parse(readFileSync(join(root, 'src/data/prezzi.json')));
  assert.equal(ordine.titolo, 'Matematica finanziaria');
  assert.equal(ordine.totale, 100 * listino[materia]);
  assert.deepEqual(ordine.chiavi, [materia]);
});

test('Matematica generale non concede l’accesso al corso autonomo', async () => {
  const b = await banco(['matematica-generale']);
  const path = `/${materia}/regimi-e-tassi/teoria`;
  assert.equal(await (await b.invia(path)).text(), `/vetrine${path}`);
});

test('l’accesso al corso apre teoria, schede e soluzioni proprie', async () => {
  const b = await banco([materia]);
  for (const capitolo of CAPITOLI_FINANZIARIA) {
    for (const pagina of ['teoria', 'esercizi-svolti/4', 'esercizi/1']) {
      const path = `/${materia}/${capitolo}/${pagina}`;
      assert.equal(await (await b.invia(path)).text(), path);
    }
  }
});

test('le prime tre schede sono gratuite, le altre riservate', async () => {
  const b = await banco();
  for (const n of [1, 2, 3, 4, 8]) {
    const path = `/${materia}/ammortamenti/esercizi-svolti/${n}`;
    assert.equal(await (await b.invia(path)).text(), n <= 3 ? path : `/vetrine${path}`);
  }
});

test('le soluzioni e i banchi delle risposte sono protetti', async () => {
  const b = await banco();
  const path = `/${materia}/obbligazioni/esercizi/1`;
  assert.equal(await (await b.invia(path)).text(), `/vetrine${path}`);
  assert.equal((await b.invia(percorsoBanca)).status, 404);
  assert.equal((await b.invia(`/dati-risposte/${materia}.json`)).status, 404);
});

test('gli stessi dieci ID delimitano l’anteprima in ogni capitolo e sessione', async () => {
  let riferimento;
  for (const materie of [null, [], ['matematica-generale']]) {
    const b = await banco(materie);
    const ripasso = await b.quiz('prove-d-esame');
    assert.equal(ripasso.totale, 10);
    const ids = [...ripasso.ordine].sort();
    riferimento ??= ids;
    assert.deepEqual(ids, riferimento);
    for (const capitolo of CAPITOLI_FINANZIARIA) {
      const domanda = await b.quiz(capitolo);
      assert.equal(domanda.totale, 1);
      assert.ok(riferimento.includes(domanda.id));
    }
  }
});

test('chi ha accesso può usare tutti i 320 quiz', async () => {
  const b = await banco([materia]);
  assert.equal((await b.quiz('prove-d-esame')).totale, 320);
  const { argomenti } = JSON.parse(bancaDomande());
  assert.equal(Object.keys(argomenti).length, 10);
  for (const domande of Object.values(argomenti)) assert.equal(domande.length, 32);
});

test('il filtro anteprima conserva un solo ID per capitolo previsto', () => {
  const argomenti = Object.fromEntries(CAPITOLI_FINANZIARIA.map((capitolo) => [
    capitolo, [{ id: `${capitolo}/1` }, { id: `${capitolo}/2` }],
  ]));
  argomenti.altro = [{ id: 'altro/1' }];
  const demo = anteprimaFinanziaria(argomenti);
  assert.equal(Object.values(demo).flat().length, 10);
  assert.ok(!demo.altro);
});
