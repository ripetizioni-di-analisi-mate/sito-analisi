// Prova dell'API dello Studio guidato con il Worker vero e un archivio SQLite in memoria.
// Richiede una build con Analisi 1 e Precorso: SOLO_MATERIE="analisi-1,precorso" npx astro build
import test, { after } from 'node:test';
import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
import { mkdtempSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';

const root = fileURLToPath(new URL('../', import.meta.url));
const temp = mkdtempSync(join(tmpdir(), 'studio-guidato-api-'));
const entry = join(temp, 'entry.mjs'), bundle = join(temp, 'bundle.mjs');
writeFileSync(entry, `export { Archivio, firmaToken, default as worker } from ${JSON.stringify(join(root, 'worker/index.mjs'))};`);
execFileSync(process.execPath, [join(root, 'node_modules/rolldown/bin/cli.mjs'), entry, '--file', bundle, '--format', 'esm', '--platform', 'node', '--logLevel', 'silent'], { cwd: root });
const { Archivio, firmaToken, worker } = await import(pathToFileURL(bundle));
after(() => rmSync(temp, { recursive: true, force: true }));
const origine = 'https://ripetizionidianalisi.com';
const dati = (m) => JSON.parse(readFileSync(join(root, 'dist/dati-domande', `${m}.json`), 'utf8'));
const DATI = { 'analisi-1': dati('analisi-1'), precorso: dati('precorso') };
const corretta = (id, m) => DATI[m].argomenti[id.split('/')[0]].find((q) => q.id === id).corretta;

function banco(t) {
  const db = new DatabaseSync(':memory:');
  t.after(() => db.close());
  t.mock.method(globalThis, 'fetch', async () => { throw new Error('Nessuna richiesta esterna.'); });
  const state = { storage: { sql: { exec(q, ...p) {
    if (!p.length && !/^\s*SELECT/i.test(q)) { db.exec(q); return []; }
    const s = db.prepare(q); return s.columns().length ? s.all(...p) : (s.run(...p), []);
  } }, transactionSync: (fn) => fn(), getAlarm: async () => null, setAlarm: async () => {} } };
  const env = { CHIAVE_ACCESSO: 'studio-guidato-test', VENDITA: '1' };
  env.ASSETS = { fetch: async (req) => {
    const m = new URL(req.url).pathname.match(/^\/dati-domande\/([a-z0-9-]+)\.json$/);
    return m && DATI[m[1]] ? Response.json(DATI[m[1]]) : new Response('no', { status: 404 });
  } };
  const ar = new Archivio(state, env);
  env.ARCHIVIO = { idFromName: () => 'test', get: () => ({ fetch: (url, init) => ar.fetch(new Request(url, init)) }) };
  const utente = async (email, gm) => {
    const ora = Date.now(), d = crypto.randomUUID(), g = crypto.randomUUID();
    db.prepare('INSERT INTO utenti (email, versione, hash, nome, creato, gm_manuale) VALUES (?, 1, ?, ?, ?, ?)').run(email, 'h', 'Studente', new Date(ora).toISOString(), gm ? 'si' : null);
    db.prepare('INSERT INTO dispositivi (email, id, nonce, nome, creato, ultimo_uso) VALUES (?, ?, ?, ?, ?, ?)').run(email, d, g, 'Prova', new Date(ora).toISOString(), ora);
    return firmaToken(env, { e: email, v: 1, d, g, t: ora });
  };
  const api = async (tok, path, body) => {
    const h = new Headers({ 'user-agent': 'Browser di prova', 'sec-fetch-site': 'same-origin', cookie: `sessione=${encodeURIComponent(tok)}` });
    if (body !== undefined) { h.set('origin', origine); h.set('content-type', 'application/json'); }
    const r = await worker.fetch(new Request(origine + path, { method: body === undefined ? 'GET' : 'POST', headers: h, ...(body === undefined ? {} : { body: JSON.stringify(body) }) }), env, { waitUntil() {} });
    return { status: r.status, d: await r.json() };
  };
  return { api, utente };
}

test('solo i GM usano lo Studio guidato', async (t) => {
  const b = banco(t);
  const tok = await b.utente('normale@test.invalid', false);
  assert.equal((await b.api(tok, '/api/studio-guidato?materia=analisi-1')).status, 403);
  assert.equal((await b.api(tok, '/api/studio-guidato/inizia', { materia: 'analisi-1' })).status, 403);
});

test('test completo: domande senza la soluzione, esito salvato, secondo test con il progresso', async (t) => {
  const b = banco(t);
  const tok = await b.utente('gm@test.invalid', true);
  // Studente che sbaglia tutto sui limiti e sui polinomi e risponde bene al resto.
  const prova = async () => {
    let r = await b.api(tok, '/api/studio-guidato/inizia', { materia: 'analisi-1', argomenti: ['limiti', 'derivate'] });
    let n = 0;
    while (!r.d.fine) {
      assert.equal(r.status, 200, JSON.stringify(r.d));
      assert.ok(!('corretta' in r.d.domanda) && !('spiegazione' in r.d.domanda));
      const stato = JSON.parse(Buffer.from(r.d.token.split('.')[0].replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString());
      const q = stato.s.q;
      const sbaglia = /^(limiti|polinomi)\//.test(q.id);
      const giusta = Number(corretta(q.id, q.m)) - 1;
      r = await b.api(tok, '/api/studio-guidato/rispondi', { token: r.d.token, scelta: sbaglia ? (giusta + 1) % 4 : giusta });
      assert.ok(++n < 50);
    }
    return r.d;
  };
  const primo = await prova();
  assert.ok(primo.esito.lacune.some((l) => l.a === 'polinomi'));
  assert.ok(primo.esito.lacune.some((l) => l.a === 'limiti'));
  assert.equal(primo.esito.lacune[0].m, 'precorso');
  const stato = await b.api(tok, '/api/studio-guidato?materia=analisi-1');
  assert.equal(stato.d.progresso.test, 1);
  assert.ok(stato.d.progresso.prossimo);
  const secondo = await prova();
  assert.equal(secondo.progresso.test, 2);
});
