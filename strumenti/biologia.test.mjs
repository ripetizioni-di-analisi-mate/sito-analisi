// Prove senza rete sul Worker reale: nuovo corso a pagamento e isolamento degli accessi.
import test, { after } from 'node:test';
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const root = new URL('../', import.meta.url).pathname;
const temp = mkdtempSync(join(tmpdir(), 'biologia-worker-'));
const bundle = join(temp, 'worker.mjs');
execFileSync(process.execPath, [join(root, 'node_modules/rolldown/bin/cli.mjs'), join(root, 'worker/index.mjs'), '--file', bundle, '--format', 'esm', '--platform', 'neutral'], { stdio: 'pipe' });
after(() => rmSync(temp, { recursive: true, force: true }));
const { default: worker, firmaToken } = await import(pathToFileURL(bundle));
const materia = 'biologia-semestre-filtro';
const programma = `/${materia}/organizzazione-biologica`;
const prezzo = readFileSync(join(root, 'wrangler.jsonc'), 'utf8').match(/"PADDLE_PREZZO_BIOLOGIA_SEMESTRE_FILTRO":\s*"([^"]+)"/)[1];

async function banco(materie = null) {
  const richieste = [];
  const env = {
    VENDITA: '1', CHIAVE_ACCESSO: 'chiave-solo-prove-locali',
    PADDLE_CLIENT_TOKEN: 'test-only', PADDLE_PREZZO_BIOLOGIA_SEMESTRE_FILTRO: prezzo,
    ASSETS: { async fetch(req) {
      const path = new URL(req.url || req).pathname;
      richieste.push(path);
      if (path === `/dati-domande/${materia}.json`) return new Response(readFileSync(join(root, 'dist', path)), { headers: { 'content-type': 'application/json' } });
      // Si verifica la selezione della pagina, senza simulare HTMLRewriter di Cloudflare.
      return new Response(path, { headers: { 'content-type': 'text/plain' } });
    } },
    ARCHIVIO: { idFromName: () => 'test', get: () => ({ fetch: async (url) => {
      assert.equal(new URL(url).pathname, '/sessione');
      return Response.json(materie === null ? null : { email: 'studente@example.test', nome: 'Studente', materie, versione: 1 });
    } }) },
  };
  const cookie = materie === null ? '' : `sessione=${await firmaToken(env, {e:'studente@example.test',v:1,d:'test',t:Date.now()})}`;
  const invia = body => worker.fetch(new Request('https://ripetizionidianalisi.com/api/domande/prossima', {method:'POST', headers: {cookie, 'content-type':'application/json'}, body:JSON.stringify({materia, lingua:'it', ...body})}), env, {waitUntil() {}});
  const apri = path => worker.fetch(new Request('https://ripetizionidianalisi.com' + path, { headers: {cookie, 'accept-language':'it', 'user-agent':'audit-bot'} }), env, { waitUntil() {} });
  return { apri, invia, richieste };
}

test('Biologia fornisce il proprio prezzo Paddle e resta nel listino a pagamento', async () => {
  const b = await banco();
  const config = await (await b.apri('/api/config')).json();
  assert.equal(config.paddle.prezzi[materia], prezzo);
  assert.match(prezzo, /^pri_[a-z0-9]{26}$/);
  const listino = JSON.parse(readFileSync(join(root, 'src/data/prezzi.json')));
  assert.equal(listino[materia], 49);
});

test('un ospite riceve anteprima della teoria e delle schede riservate', async () => {
  const b = await banco();
  assert.equal(await (await b.apri(`${programma}/teoria`)).text(), `/vetrine${programma}/teoria`);
  assert.equal(await (await b.apri(`${programma}/esercizi-svolti/4`)).text(), `/vetrine${programma}/esercizi-svolti/4`);
  assert.equal(await (await b.apri(`${programma}/esercizi/1`)).text(), `/vetrine${programma}/esercizi/1`);
});

test('le prime tre schede di Biologia seguono l’anteprima ordinaria', async () => {
  const b = await banco();
  assert.equal(await (await b.apri(`${programma}/esercizi-svolti/3`)).text(), `${programma}/esercizi-svolti/3`);
});

test('chi ha Biologia accede alla teoria completa e alle soluzioni', async () => {
  const b = await banco([materia]);
  assert.equal(await (await b.apri(`${programma}/teoria`)).text(), `${programma}/teoria`);
  assert.equal(await (await b.apri(`${programma}/esercizi-svolti/4`)).text(), `${programma}/esercizi-svolti/4`);
  assert.equal(await (await b.apri(`${programma}/esercizi/1`)).text(), `${programma}/esercizi/1`);
});

test('l’acquisto di un’altra materia non sblocca Biologia', async () => {
  const b = await banco(['chimica-semestre-filtro']);
  assert.equal(await (await b.apri(`${programma}/teoria`)).text(), `/vetrine${programma}/teoria`);
});

test('il banco delle risposte resta inaccessibile direttamente', async () => {
  const b = await banco();
  assert.equal((await b.apri(`/dati-domande/${materia}.json`)).status, 404);
});

test('ospiti e iscritti senza acquisto vedono gli stessi dieci quiz complessivi', async () => {
  for (const materie of [null, [], ['chimica-semestre-filtro']]) {
    const b = await banco(materie);
    const risposta = await b.invia({argomento:'prove-d-esame'});
    assert.equal(risposta.status, 200);
    const dati = await risposta.json();
    assert.equal(dati.totale, 10);
    assert.equal(new Set(dati.ordine).size, 10);
    const tentativo = await (await b.invia({argomento:'genetica-mutazioni',id:'genetica-mutazioni/45'})).json();
    assert.equal(tentativo.totale, 1);
    assert.equal(tentativo.id, 'genetica-mutazioni/1');
  }
});

test('chi acquista Biologia può esercitarsi su tutti i 315 quiz', async () => {
  const b = await banco([materia]);
  const r = await b.invia({argomento:'prove-d-esame'});
  assert.equal(r.status,200);
  assert.equal((await r.json()).totale,315);
});
