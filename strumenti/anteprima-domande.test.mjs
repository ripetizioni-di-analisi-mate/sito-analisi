import assert from 'node:assert/strict';
import test from 'node:test';
import { DatabaseSync } from 'node:sqlite';
import { mkdtemp, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
import { build } from 'rolldown';
import { creaTabelleAnteprima, archivioAnteprima, accessoDomande } from '../worker/anteprima-domande.mjs';

function archivio(file = ':memory:') {
  const db = new DatabaseSync(file);
  const ar = { sql: { exec: (s, ...p) => s.startsWith('CREATE') ? db.exec(s) : db.prepare(s).run(...p) }, righe: (s, ...p) => db.prepare(s).all(...p) };
  creaTabelleAnteprima(ar.sql);
  return { ar, db };
}
const ids = (n, da = 0, pref = 'analisi-1/quiz/derivate/') => Array.from({ length: n }, (_, i) => pref + (da + i + 1));
const chiavi = ['o:visitatore'];

test('dieci quesiti, undicesimo bloccato; rilettura e lingua non consumano di nuovo', () => {
  const { ar, db } = archivio();
  for (let i = 0; i < 10; i++) {
    const q = archivioAnteprima(ar, { chiavi, domande: ids(1, i) });
    assert.equal(q.usate, i + 1); assert.equal(q.rimaste, 9 - i);
  }
  assert.deepEqual(archivioAnteprima(ar, { chiavi, domande: ids(1, 10) }).consentite, []);
  assert.equal(archivioAnteprima(ar, { chiavi, domande: ids(1) }).usate, 10);
  assert.deepEqual(archivioAnteprima(ar, { chiavi, domande: ids(1) }).consentite, ids(1));
  db.close();
});

test('simulazioni e quiz condividono la quota tra materie; il gruppo riceve solo i quesiti rimanenti', () => {
  const { ar, db } = archivio();
  archivioAnteprima(ar, { chiavi, domande: ids(7) });
  const simulazione = ids(6, 0, 'fisica-1/esercizi/cinematica/');
  const q = archivioAnteprima(ar, { chiavi, domande: simulazione });
  assert.deepEqual(q.consentite, simulazione.slice(0, 3)); assert.equal(q.rimaste, 0);
  assert.equal(archivioAnteprima(ar, { chiavi, domande: ids(30, 0, 'logica-concorsi/quiz/a/') }).consentite.length, 0);
  db.close();
});

test('il conteggio resta dopo riavvio e passaggio ospite-account, anche su un altro dispositivo', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'anteprima-db-'));
  try {
    const file = join(dir, 'quota.sqlite');
    let b = archivio(file);
    archivioAnteprima(b.ar, { chiavi, domande: ids(9) }); b.db.close();
    b = archivio(file);
    assert.equal(archivioAnteprima(b.ar, { chiavi: ['u:studente', ...chiavi], domande: ids(1, 9) }).rimaste, 0);
    assert.equal(archivioAnteprima(b.ar, { chiavi: ['u:studente', 'o:altro-browser'], domande: ids(1, 10) }).consentite.length, 0);
    b.db.close();
  } finally { await rm(dir, { recursive: true }); }
});

test('le richieste contemporanee non superano dieci concessioni', async () => {
  const { ar, db } = archivio();
  const r = await Promise.all(Array.from({ length: 20 }, (_, i) => Promise.resolve().then(() => archivioAnteprima(ar, { chiavi, domande: ids(1, i) }))));
  assert.equal(r.reduce((n, x) => n + x.consentite.length, 0), 10); db.close();
});

test('materia acquistata, videocorso già abilitato, materie gratuite e vendita disattivata restano illimitati', async () => {
  const { ar, db } = archivio();
  let chiamate = 0;
  const h = { prezzi: { 'analisi-1': 49 }, materie: [], sha: async (s) => createHash('sha256').update(s).digest('hex'), aDO: async (_, __, c) => { chiamate++; return archivioAnteprima(ar, c); } };
  const req = new Request('https://test', { headers: { 'cf-connecting-ip': '192.0.2.1', 'user-agent': 'prova' } });
  const richieste = ids(30).map((id) => ({ id, materia: 'analisi-1' }));
  const io = { email: 'prova@example.com', materie: ['analisi-1'] };
  for (const [env, utente, domande] of [[{}, io, richieste], [{ VENDITA: '0' }, null, richieste], [{}, null, richieste.map((q) => ({ ...q, materia: 'fisica-zero' }))]]) {
    const r = await accessoDomande(env, req, utente, domande, 'it', h);
    assert.equal(r.consentite.length, 30); assert.equal(r.anteprima.illimitato, true);
  }
  assert.equal(chiamate, 0);
  assert.equal((await accessoDomande({}, req, null, richieste, 'it', h)).consentite.length, 10);
  db.close();
});

// Esercita il router reale, incluse le firme dei token, con asset e database locali.
const dir = await mkdtemp(join(tmpdir(), 'anteprima-router-'));
await build({ input: new URL('../worker/index.mjs', import.meta.url).pathname, output: { file: join(dir, 'worker.mjs'), format: 'esm' } });
const { default: worker, firmaToken } = await import(join(dir, 'worker.mjs'));
const materia = 'analisi-1', argomento = 'insiemi';
const quiz = Array.from({ length: 50 }, (_, i) => ({ id: `${argomento}/${i + 1}`, n: i + 1, testo: `quesito ${i + 1}`, scelte: ['a', 'b', 'c', 'd'], corretta: 1, spiegazione: 'spiegazione' }));
function sito() {
  const { ar, db } = archivio();
  let utente = null;
  const env = { VENDITA: '1', CHIAVE_ACCESSO: 'segreto-solo-di-prova', ARCHIVIO: { idFromName: (s) => s, get: () => ({ fetch: async (url, opzioni) => {
    const p = new URL(url).pathname, c = JSON.parse(opzioni.body);
    if (p === '/anteprima-domande') return Response.json(archivioAnteprima(ar, c));
    if (p === '/sessione') return Response.json(utente);
    if (p === '/sfi-partita') return Response.json({ materia, turno: { id: `${argomento}/11`, n: 0, servita: Date.now() } });
    return Response.json({});
  } }) }, ASSETS: { fetch: async (req) => {
    const p = new URL(req.url).pathname;
    if (p === '/dati-domande/indice.json') return Response.json({ [materia]: [argomento] });
    if (p.startsWith('/dati-domande/')) return Response.json({ argomenti: { [argomento]: quiz } });
    if (p.startsWith('/dati-simulazioni/')) return Response.json({ tracce: quiz.map((q) => ({ id: `${materia}/${q.id}`, argomento, titolo: q.testo, html: '<p>traccia</p><details class="blocco-soluzione">soluzione</details>' })) });
    return new Response('non trovato', { status: 404 });
  } } };
  const post = async (path, dati, cookie = '') => {
    const r = await worker.fetch(new Request('https://ripetizionidianalisi.com' + path, { method: 'POST', headers: { 'content-type': 'application/json', 'cf-connecting-ip': '192.0.2.3', 'user-agent': 'test-quota', cookie }, body: JSON.stringify(dati) }), env, { waitUntil() {} });
    return { status: r.status, d: await r.json(), cache: r.headers.get('cache-control') };
  };
  return { env, post, db, set utente(x) { utente = x; } };
}

test('HTTP: decima concessa e correggibile, undicesima 402 senza testo; inglese e simulazioni non aggirano la quota', async () => {
  const b = sito(); let decima;
  for (let i = 1; i <= 10; i++) {
    decima = await b.post('/api/domande/prossima', { materia, argomento, id: `${argomento}/${i}`, lingua: 'it' });
    assert.equal(decima.status, 200); assert.equal(decima.d.anteprima.usate, i);
  }
  assert.equal((await b.post('/api/domande/rispondi', { token: decima.d.token, scelta: 1 })).d.corretta, 1);
  const negata = await b.post('/api/domande/prossima', { materia, argomento, id: `${argomento}/11`, lingua: 'en' });
  assert.equal(negata.status, 402); assert.equal(negata.d.testo, undefined); assert.equal(negata.d.token, undefined); assert.equal(negata.cache, 'no-store');
  assert.equal(negata.d.materie[0].href, '/en/analisi-1/sblocca');
  const sim = await b.post('/api/simulazione', { materia, argomenti: [argomento], numero: 6 });
  assert.equal(sim.status, 402); assert.equal(sim.d.tracce, undefined);
  const proprietario = { email: 'acquirente@example.com', materie: [materia] }; b.utente = proprietario;
  const cookie = 'sessione=' + encodeURIComponent(await firmaToken(b.env, { e: proprietario.email, v: 1 }));
  assert.equal((await b.post('/api/domande/prossima', { materia, argomento, id: `${argomento}/11` }, cookie)).status, 200);
  assert.equal((await b.post('/api/simulazione', { materia, argomenti: [argomento], numero: 6 }, cookie)).d.tracce.length, 6);
  const privati = await worker.fetch(new Request('https://ripetizionidianalisi.com/dati-simulazioni/it/analisi-1.json'), b.env, {});
  assert.equal(privati.status, 404);
  const codificati = await worker.fetch(new Request('https://ripetizionidianalisi.com/%64ati-simulazioni/it/analisi-1.json'), b.env, {});
  assert.equal(codificati.status, 404); b.db.close();
});

test('HTTP: simulazione a quiz limitata a dieci quesiti e correggibile; la prova successiva non riceve nuovi quesiti', async () => {
  const b = sito();
  const r = await b.post('/api/simulazione-quiz', { materie: ['logica-concorsi'], numero: 30 });
  assert.equal(r.status, 200); assert.equal(r.d.domande.length, 10); assert.equal(r.d.parziale, true);
  const corretta = await b.post('/api/simulazione-quiz/correggi', { token: r.d.token });
  assert.equal(corretta.status, 200); assert.equal(corretta.d.esiti.length, 10);
  const prossima = await b.post('/api/domande/prossima', { materia, argomento, id: `${argomento}/1` });
  assert.equal(prossima.status, 402); b.db.close();
});

test('HTTP: con nove quiz già utilizzati la simulazione concede un solo esercizio con soluzione', async () => {
  const b = sito();
  for (let i = 1; i <= 9; i++) await b.post('/api/domande/prossima', { materia, argomento, id: `${argomento}/${i}` });
  const r = await b.post('/api/simulazione', { materia, argomenti: [argomento], numero: 5 });
  assert.equal(r.status, 200); assert.equal(r.d.tracce.length, 1);
  assert.equal(r.d.parziale, true); assert.equal(r.d.anteprima.rimaste, 0);
  assert.match(r.d.tracce[0].html, /blocco-soluzione/);
  assert.equal((await b.post('/api/domande/prossima', { materia, argomento, id: `${argomento}/10` })).status, 402);
  b.db.close();
});

test('HTTP: i duelli usano la stessa quota e non espongono l’undicesima domanda o la correzione', async () => {
  const b = sito();
  b.utente = { email: 'duellante@example.com', materie: [] };
  const cookie = 'sessione=' + encodeURIComponent(await firmaToken(b.env, { e: 'duellante@example.com', v: 1 }));
  for (let i = 1; i <= 10; i++) await b.post('/api/domande/prossima', { materia, argomento, id: `${argomento}/${i}` }, cookie);
  const partita = await b.post('/api/duelli/partita', { codice: 'ABC', servi: true }, cookie);
  assert.equal(partita.status, 402); assert.equal(partita.d.turno, undefined);
  const risposta = await b.post('/api/duelli/rispondi', { codice: 'ABC', n: 0, scelta: 0 }, cookie);
  assert.equal(risposta.status, 402); assert.equal(risposta.d.corretta, undefined);
  b.utente = { email: 'duellante@example.com', materie: [materia] };
  assert.equal((await b.post('/api/duelli/partita', { codice: 'ABC', servi: true }, cookie)).status, 200);
  b.db.close();
});

test.after(async () => { await rm(dir, { recursive: true }); });
