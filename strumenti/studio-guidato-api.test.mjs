// Prova dell'API dello Studio guidato con il Worker vero e un archivio SQLite in memoria.
// Richiede una build con le materie del test: SOLO_MATERIE="analisi-1,analisi-2,analisi-3,precorso,fisica-1,logica-concorsi,meccanica-razionale,idraulica" npx astro build
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
// Le materie più pesanti hanno il file diviso in pezzi `<m>--2.json` … (partiDomande in src/lib/domande.ts).
const dati = (m) => {
  const d = JSON.parse(readFileSync(join(root, 'dist/dati-domande', `${m}.json`), 'utf8'));
  for (let k = 2; k <= (d.parti ?? 1); k++) Object.assign(d.argomenti, JSON.parse(readFileSync(join(root, 'dist/dati-domande', `${m}--${k}.json`), 'utf8')).argomenti);
  return d;
};
const DATI = Object.fromEntries(['analisi-1', 'analisi-2', 'analisi-3', 'precorso', 'fisica-1', 'logica-concorsi', 'meccanica-razionale', 'idraulica'].map((m) => [m, dati(m)]));
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
    // I file veri della build, pezzi compresi: così il Worker li riunisce come in produzione.
    const m = new URL(req.url).pathname.match(/^\/dati-domande\/([a-z0-9-]+?)(--\d+)?\.json$/);
    return m && DATI[m[1]] ? new Response(readFileSync(join(root, 'dist/dati-domande', `${m[1]}${m[2] ?? ''}.json`)), { headers: { 'content-type': 'application/json' } })
      : new Response('no', { status: 404 });
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

test('test completo: domande senza la soluzione, esito con i rimandi, ricontrollo con il progresso', async (t) => {
  const b = banco(t);
  const tok = await b.utente('gm@test.invalid', true);
  // Studente che sbaglia le forme 0/0 dei limiti e la scomposizione dei polinomi e risponde bene al resto.
  const prova = async (inizio, sbagliate) => {
    let r = await b.api(tok, '/api/studio-guidato/inizia', { materia: 'analisi-1', ...inizio });
    let n = 0;
    while (!r.d.fine) {
      assert.equal(r.status, 200, JSON.stringify(r.d));
      assert.ok(!('corretta' in r.d.domanda) && !('spiegazione' in r.d.domanda));
      const stato = JSON.parse(Buffer.from(r.d.token.split('.')[0].replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString());
      const q = stato.s.q;
      const giusta = Number(corretta(q.id, q.m)) - 1;
      r = await b.api(tok, '/api/studio-guidato/rispondi', { token: r.d.token, scelta: sbagliate.includes(q.k) ? (giusta + 1) % 4 : giusta });
      assert.ok(++n <= 12);
    }
    return r.d;
  };
  const primo = await prova({ argomento: 'limiti' }, ['analisi-1/limiti#0', 'precorso/polinomi#5']);
  assert.deepEqual(primo.esito.lacune.map((l) => l.k), ['precorso/polinomi#5', 'analisi-1/limiti#0']);
  assert.equal(primo.esito.lacune[0].teoria[0].href, '/precorso/polinomi/teoria#strategia-di-fattorizzazione');
  assert.ok(primo.esito.lacune[0].teoria[0].titolo && primo.esito.lacune[1].schede[0].titolo);
  assert.ok(!('viste' in primo.esito) && !('risposte' in primo.esito));
  const stato = await b.api(tok, '/api/studio-guidato?materia=analisi-1');
  assert.equal(stato.d.progresso.test, 1);
  assert.equal(stato.d.ultimo.lacune.length, 2);
  const secondo = await prova({ ricontrollo: true }, []);
  assert.equal(secondo.esito.domande, 2);
  assert.deepEqual([secondo.progresso.test, secondo.progresso.trovate, secondo.progresso.risolte], [2, 2, 2]);
});

test('Fisica 1: test su un capitolo con la base in Analisi 1, nomi delle materie ed esito salvato a parte', async (t) => {
  const b = banco(t);
  const tok = await b.utente('gm-fisica@test.invalid', true);
  const sbagliate = ['fisica-1/cinematica-1d#4', 'analisi-1/derivate#1'];
  let r = await b.api(tok, '/api/studio-guidato/inizia', { materia: 'fisica-1', argomento: 'cinematica-1d' });
  const etichette = [];
  let n = 0;
  while (!r.d.fine) {
    assert.equal(r.status, 200, JSON.stringify(r.d));
    assert.ok(r.d.domanda.testo && r.d.domanda.scelte.length === 4, 'testo e quattro risposte');
    assert.ok(!('corretta' in r.d.domanda) && !('spiegazione' in r.d.domanda));
    const q = JSON.parse(Buffer.from(r.d.token.split('.')[0].replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString()).s.q;
    etichette.push([q.m, r.d.domanda.base, r.d.domanda.materiaBase]);
    const giusta = Number(corretta(q.id, q.m)) - 1;
    r = await b.api(tok, '/api/studio-guidato/rispondi', { token: r.d.token, scelta: sbagliate.includes(q.k) ? (giusta + 1) % 4 : giusta });
    assert.ok(++n <= 12);
  }
  assert.ok(etichette.some(([m, base, nome]) => m === 'analisi-1' && base === true && nome === 'Analisi 1'));
  assert.ok(etichette.filter(([m]) => m === 'fisica-1').every(([, base, nome]) => base === false && nome === null));
  const e = r.d.esito;
  assert.deepEqual(e.lacune.map((l) => l.k), ['analisi-1/derivate#1', 'fisica-1/cinematica-1d#4']);
  assert.equal(e.lacune[0].materia, 'Analisi 1');
  assert.equal(e.lacune[1].materia, 'Fisica 1');
  assert.equal(e.titoloCapitolo, 'Cinematica in una dimensione');
  assert.equal(e.lacune[0].teoria[0].href, '/analisi-1/derivate/teoria#regole-di-derivazione');
  assert.ok(e.lacune[1].teoria.every((x) => x.titolo) && e.lacune[1].schede[0].titolo);
  // L'esito di Fisica 1 non compare in Analisi 1.
  assert.equal((await b.api(tok, '/api/studio-guidato?materia=fisica-1')).d.progresso.test, 1);
  assert.equal((await b.api(tok, '/api/studio-guidato?materia=analisi-1')).d.ultimo, null);
  // «Non so da dove iniziare»: dodici capitoli, tutte risposte giuste.
  r = await b.api(tok, '/api/studio-guidato/inizia', { materia: 'fisica-1' });
  n = 0;
  while (!r.d.fine) {
    const q = JSON.parse(Buffer.from(r.d.token.split('.')[0].replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString()).s.q;
    r = await b.api(tok, '/api/studio-guidato/rispondi', { token: r.d.token, scelta: Number(corretta(q.id, q.m)) - 1 });
    n++;
  }
  assert.equal(n, 12);
  assert.equal(r.d.esito.lacune.length, 0);
});

// Logica per concorsi e Analisi 3 (14/11/2026 notte).
const giro = async (b, tok, inizio, sbagliate) => {
  let r = await b.api(tok, '/api/studio-guidato/inizia', inizio);
  const etichette = [];
  let n = 0;
  while (!r.d.fine) {
    assert.equal(r.status, 200, JSON.stringify(r.d));
    assert.ok(r.d.domanda.testo && r.d.domanda.scelte.length === 4, 'testo e quattro risposte');
    const q = JSON.parse(Buffer.from(r.d.token.split('.')[0].replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString()).s.q;
    etichette.push([q.m, r.d.domanda.base, r.d.domanda.materiaBase]);
    const giusta = Number(corretta(q.id, q.m)) - 1;
    r = await b.api(tok, '/api/studio-guidato/rispondi', { token: r.d.token, scelta: sbagliate.includes(q.k) ? (giusta + 1) % 4 : giusta });
    assert.ok(++n <= 20);
  }
  return { esito: r.d.esito, etichette, n };
};

test('Analisi 3: base in Analisi 1 con il nome della materia, capitoli presi da Analisi 2 dentro Analisi 3', async (t) => {
  const b = banco(t);
  const tok = await b.utente('gm-analisi3@test.invalid', true);
  const { esito, etichette } = await giro(b, tok, { materia: 'analisi-3', argomento: 'trasformata-di-laplace' }, ['analisi-3/trasformata-di-laplace#5', 'analisi-1/integrali#3']);
  assert.ok(etichette.some(([m, base, nome]) => m === 'analisi-1' && base === true && nome === 'Analisi 1'));
  assert.deepEqual(esito.lacune.map((l) => l.k), ['analisi-1/integrali#3', 'analisi-3/trasformata-di-laplace#5']);
  assert.equal(esito.lacune[1].materia, 'Analisi 3');
  assert.ok(esito.lacune.every((l) => l.teoria.every((x) => x.titolo)));
  const fourier = await giro(b, tok, { materia: 'analisi-3', argomento: 'serie-di-fourier' }, []);
  assert.equal(fourier.esito.lacune.length, 0);
  assert.ok(fourier.etichette.every(([m]) => m === 'analisi-3'));
});

test('Logica per concorsi: test completo e «Non so da dove iniziare» sugli otto capitoli', async (t) => {
  const b = banco(t);
  const tok = await b.utente('gm-logica@test.invalid', true);
  const { esito } = await giro(b, tok, { materia: 'logica-concorsi', argomento: 'sillogismi' }, ['logica-concorsi/sillogismi#4', 'logica-concorsi/insiemi-e-venn#3', 'precorso/logica#2']);
  assert.equal(esito.lacune[0].k, 'logica-concorsi/insiemi-e-venn#3');
  assert.equal(esito.lacune[0].teoria[0].href, '/logica-concorsi/insiemi-e-venn/teoria#relazioni-tra-categorie');
  const tutto = await giro(b, tok, { materia: 'logica-concorsi' }, []);
  assert.equal(tutto.n, 8);
  assert.equal(tutto.esito.lacune.length, 0);
});

// Meccanica razionale e Idraulica (15/11/2026): file dei dati divisi in pezzi, basi in Fisica 1 e nei capitoli precedenti.
test('Meccanica razionale e Idraulica: test completo con basi in Fisica 1 e in un capitolo precedente', async (t) => {
  const b = banco(t);
  const tok = await b.utente('gm-ingegneria@test.invalid', true);
  const mr = await giro(b, tok, { materia: 'meccanica-razionale', argomento: 'vettori-applicati' }, ['meccanica-razionale/vettori-applicati#0', 'fisica-1/grandezze-e-vettori#6']);
  assert.ok(mr.etichette.some(([m, base, nome]) => m === 'fisica-1' && base === true && nome === 'Fisica 1'));
  assert.equal(mr.esito.lacune[0].k, 'fisica-1/grandezze-e-vettori#6');
  const id = await giro(b, tok, { materia: 'idraulica', argomento: 'spinte-idrostatiche' }, ['idraulica/spinte-idrostatiche#0', 'idraulica/idrostatica#4']);
  assert.equal(id.esito.lacune[0].k, 'idraulica/idrostatica#4');
  assert.ok(id.esito.lacune.every((l) => l.teoria.every((x) => x.titolo)));
  const tutto = await giro(b, tok, { materia: 'idraulica' }, []);
  assert.equal(tutto.esito.lacune.length, 0);
});
