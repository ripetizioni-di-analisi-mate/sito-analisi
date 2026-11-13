// Prove del Worker completo con SQLite e account fittizi, senza rete esterna.
import test, { after } from 'node:test';
import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { VERSIONE_STUDIO, PROFILI_STUDIO } from '../src/data/orientamento-studio.mjs';
import { domandeBaseStudio, approfondimentiStudio, valutaStudio } from '../src/lib/orientamento-studio.mjs';
import { VERSIONE_UNIVERSITA, AREE_UNIVERSITA } from '../src/data/orientamento-universita.mjs';
import { domandeBaseUniversita, approfondimentiUniversita, valutaUniversita } from '../src/lib/orientamento-universita.mjs';
import { MAX_CORPO_ORIENTAMENTO, MAX_RISPOSTE_ORIENTAMENTO } from '../worker/orientamento.mjs';
import { DURATA_RISULTATO_ORIENTAMENTO } from '../src/lib/orientamento-privacy.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const temp = mkdtempSync(join(tmpdir(), 'orientamento-api-'));
const entry = join(temp, 'entry.mjs'), bundle = join(temp, 'bundle.mjs');
writeFileSync(entry, `export { Archivio, firmaToken, default as worker } from ${JSON.stringify(join(root, 'worker/index.mjs'))};`);
execFileSync(process.execPath, [join(root, 'node_modules/rolldown/bin/cli.mjs'), entry, '--file', bundle, '--format', 'esm', '--platform', 'node', '--logLevel', 'silent'], { cwd: root });
const { Archivio, firmaToken, worker } = await import(pathToFileURL(bundle));
after(() => rmSync(temp, { recursive: true, force: true }));
const origine = 'https://ripetizionidianalisi.com';
const GIORNO = 86400000;

function banco(t) {
  const db = new DatabaseSync(':memory:');
  t.after(() => db.close());
  let ora = Date.parse('2026-11-13T12:00:00Z'), alarm = null;
  t.mock.method(Date, 'now', () => ora);
  const richiesteEsterne = [];
  t.mock.method(globalThis, 'fetch', async (...args) => {
    richiesteEsterne.push(args);
    throw new Error('La prova non deve contattare servizi esterni.');
  });
  const state = { storage: {
    sql: { exec(q, ...p) {
      if (!p.length && !/^\s*SELECT/i.test(q)) { db.exec(q); return []; }
      const stmt = db.prepare(q);
      return stmt.columns().length ? stmt.all(...p) : (stmt.run(...p), []);
    } },
    transactionSync(fn) {
      db.exec('BEGIN');
      try { const r = fn(); db.exec('COMMIT'); return r; }
      catch (e) { db.exec('ROLLBACK'); throw e; }
    },
    getAlarm: async () => alarm,
    setAlarm: async (n) => { alarm = n; },
  } };
  const env = { CHIAVE_ACCESSO: 'orientamento-solo-test', VENDITA: '1' };
  const ar = new Archivio(state, env);
  env.ARCHIVIO = { idFromName: () => 'test', get: () => ({ fetch: (url, init) => ar.fetch(new Request(url, init)) }) };
  // Sono solo account fittizi in SQLite :memory:. I casi funzionali usano GM;
  // i casi di autorizzazione creano esplicitamente iscritti ordinari/Premium.
  const credenziali = async (email, modifiche = {}, ruoli = { gm: true }) => {
    const d = crypto.randomUUID().replaceAll('-', ''), g = crypto.randomUUID().replaceAll('-', '');
    const quando = new Date(ora).toISOString();
    db.prepare('INSERT OR IGNORE INTO utenti (email, versione, hash, nome, creato, gm_manuale, premium_manuale) VALUES (?, 1, ?, ?, ?, ?, ?)')
      .run(email, 'hash-di-prova', 'Studente', quando, ruoli.gm === true ? quando : null, ruoli.premium === true ? quando : null);
    db.prepare('INSERT INTO dispositivi (email, id, nonce, nome, creato, ultimo_uso) VALUES (?, ?, ?, ?, ?, ?)')
      .run(email, d, g, 'Browser di prova', new Date(ora).toISOString(), ora);
    const token = await firmaToken(env, { e: email, v: 1, d, g, t: ora, ...modifiche });
    return { email, d, g, token, impronta: createHash('sha256').update(email.trim().toLowerCase()).digest('hex') };
  };
  const api = async (utente, method = 'GET', body, headers = {}, path = '/api/orientamento') => {
    const h = new Headers({ 'user-agent': 'Browser orientamento', 'sec-fetch-site': 'same-origin' });
    if (utente?.token) h.set('cookie', `sessione=${encodeURIComponent(utente.token)}`);
    if (utente?.impronta) h.set('x-orientamento-account', utente.impronta);
    if (method !== 'GET') { h.set('origin', origine); h.set('content-type', 'application/json'); }
    for (const [k, v] of Object.entries(headers)) v === null ? h.delete(k) : h.set(k, v);
    const pending = [];
    const req = new Request(origine + path, {
      method, headers: h,
      ...(body === undefined ? {} : { body: typeof body === 'string' ? body : JSON.stringify(body) }),
    });
    const r = await worker.fetch(req, env, { waitUntil(p) { pending.push(p); } });
    await Promise.all(pending);
    return r;
  };
  return { db, ar, env, api, credenziali, richiesteEsterne, avanza(ms) { ora += ms; } };
}

function provaStudio(materia = 'analisi-1', obiettivo = 'iniziare', risposta = (q) => q.corretta) {
  const risposte = Object.fromEntries(domandeBaseStudio(materia, obiettivo).map((q) => [q.id, risposta(q)]));
  for (const q of approfondimentiStudio(materia, obiettivo, risposte)) risposte[q.id] = risposta(q);
  return { tipo: 'studio', materia, obiettivo, versione: VERSIONE_STUDIO, risposte };
}

function provaUniversita(approfondisci = false, areaScelta, valore = 4) {
  const risposte = Object.fromEntries(domandeBaseUniversita().map((q) => [q.id, valore]));
  if (approfondisci) for (const q of approfondimentiUniversita({ risposte, ...(areaScelta ? { areaScelta } : {}) })) risposte[q.id] = valore;
  return { tipo: 'universita', versione: VERSIONE_UNIVERSITA, risposte, ...(areaScelta ? { areaScelta } : {}) };
}

const bundleRiservato = '/risorse/TestOrientamento.astro_astro_type_script_index_0_lang.prova-gm.js';
function risorseFittizie(b) {
  const richieste = [];
  b.env.ASSETS = { fetch: async (req) => {
    richieste.push(req);
    // Il contenuto sentinella non è HTML: questa suite isola la consegna e i
    // controlli reali del Worker dall'HTMLRewriter dell'interfaccia Cloudflare.
    const headers = {
      'content-type': new URL(req.url).pathname.includes('/risorse/') ? 'application/javascript' : 'text/plain',
      'cache-control': 'public, max-age=31536000, immutable', 'cdn-cache-control': 'public, max-age=31536000',
      etag: '"asset-di-prova"', 'last-modified': 'Fri, 13 Nov 2026 12:00:00 GMT',
      vary: 'Accept-Encoding',
    };
    if (req.headers.has('if-none-match') || req.headers.has('if-modified-since')) return new Response(null, { status: 304, headers });
    return new Response(req.method === 'HEAD' ? null : 'contenuto-consegnato-da-ASSETS', { headers });
  } };
  return richieste;
}

function assertPrivata(r) {
  assert.match(r.headers.get('cache-control'), /private.*no-store/);
  assert.equal(r.headers.get('cdn-cache-control'), 'no-store');
  assert.equal(r.headers.get('cloudflare-cdn-cache-control'), 'no-store');
  assert.match(r.headers.get('vary'), /Cookie/i);
  assert.match(r.headers.get('x-robots-tag'), /noindex/);
  assert.equal(r.headers.get('etag'), null);
  assert.equal(r.headers.get('last-modified'), null);
}

test('solo il ruolo GM nel database autorizza l’API: Premium, cookie admin e claim client non bastano', async (t) => {
  const b = banco(t);
  const ordinario = await b.credenziali('ordinario@test.invalid', { gm: true }, { gm: false });
  const premium = await b.credenziali('premium@test.invalid', {}, { premium: true });
  const admin = await firmaToken(b.env, { admin: true, t: Date.now() });
  for (const io of [ordinario, premium]) {
    for (const [metodo, corpo] of [['GET', undefined], ['POST', provaStudio()], ['DELETE', { tutti: true }]]) {
      const r = await b.api(io, metodo, corpo, { cookie: `sessione=${encodeURIComponent(io.token)}; admin=${encodeURIComponent(admin)}` });
      assert.equal(r.status, 403);
      assert.equal((await r.json()).codice, 'riservato-gm');
      assertPrivata(r);
    }
  }
  assert.equal((await b.api(null, 'GET', undefined, { cookie: `admin=${encodeURIComponent(admin)}` })).status, 401);
  assert.equal((await b.api(ordinario, 'POST', { ...provaStudio(), gm: true })).status, 403);
  const interno = await b.ar.fetch(new Request('https://archivio/ori-accesso', { method: 'POST', body: JSON.stringify({
    email: ordinario.email, versione: 1, dispositivo: ordinario.d, nonce: ordinario.g, gm: true,
  }) }));
  assert.equal((await interno.json()).stato, 403);
  b.env.VENDITA = '0';
  assert.equal((await b.api(ordinario)).status, 403, 'Aprire i contenuti a pagamento non apre l’anteprima GM.');
  assert.equal(b.db.prepare('SELECT COUNT(*) AS n FROM orientamento_risultati').get().n, 0);
});

test('la revoca GM vale subito con lo stesso token, senza leggere, modificare o eliminare i risultati esistenti', async (t) => {
  const b = banco(t), io = await b.credenziali('revoca-gm@test.invalid');
  assert.equal((await b.api(io, 'POST', provaStudio())).status, 200);
  b.db.prepare('UPDATE utenti SET gm_manuale = NULL WHERE email = ?').run(io.email);
  for (const [metodo, corpo] of [['GET', undefined], ['POST', provaUniversita()], ['DELETE', { tutti: true }]]) {
    const r = await b.api(io, metodo, corpo);
    assert.equal(r.status, 403);
    assert.equal((await r.json()).codice, 'riservato-gm');
  }
  const richieste = risorseFittizie(b);
  for (const path of ['/orientamento/studio', bundleRiservato]) {
    const r = await b.api(io, 'GET', undefined, { 'if-none-match': '"asset-di-prova"' }, path);
    assert.equal(r.status, 403); assertPrivata(r);
  }
  assert.equal(richieste.length, 0);
  assert.deepEqual(b.db.prepare('SELECT id FROM orientamento_risultati WHERE email = ?').all(io.email).map((r) => r.id), ['studio:analisi-1']);
});

test('pagine e bundle GM negano anche accessi diretti, alias HTML, slash, percent-encoding e mappe', async (t) => {
  const b = banco(t), nonGM = await b.credenziali('nessun-gm@test.invalid', {}, { gm: false });
  const richieste = risorseFittizie(b);
  const pagine = [
    '/orientamento', '/orientamento/', '/orientamento.html', '/orientamento/index.html',
    '/orientamento/studio', '/orientamento/studio/', '/orientamento/studio.html', '/orientamento/studio/index.html',
    '//orientamento//universita//', '/%6frientamento/%73tudio', '/orientamento%2fstudio',
    '/orientamento/%2e%2e/orientamento/universita', '/%2forientamento/studio',
    '/x%3f%2f..%2forientamento/studio', '/x%23%2f..%2forientamento/studio',
    '/x%3f%2f%2f..%2forientamento/studio', '/x%23%5c..%5corientamento%5cstudio',
  ];
  const script = [
    bundleRiservato, bundleRiservato + '.map', bundleRiservato + '/', bundleRiservato + '/index.html',
    bundleRiservato.replace('/risorse/', '/risorse//'), bundleRiservato.replace('/risorse/', '/%72isorse/'),
    bundleRiservato.replace('/Test', '/%54est'), bundleRiservato.replace('.js', '%2ejs'),
    bundleRiservato.replace('/risorse/', '/risorse%2f'),
    '/x%3f%2f..%2f' + bundleRiservato.slice(1), '/x%23%2f..%2f' + bundleRiservato.slice(1),
  ];
  for (const [paths, ospiteStato] of [[pagine, 302], [script, 401]]) {
    for (const path of paths) {
      const ospite = await b.api(null, 'GET', undefined, {}, path);
      assert.equal(ospite.status, ospiteStato, path); assertPrivata(ospite);
      if (ospiteStato === 302) assert.ok(ospite.headers.get('location').startsWith('/accedi?dopo='));
      const negato = await b.api(nonGM, 'GET', undefined, {}, path);
      assert.equal(negato.status, 403, path); assertPrivata(negato);
      assert.equal((await negato.text()).includes('contenuto-consegnato-da-ASSETS'), false);
    }
  }
  for (const path of ['/orientamento/studio', bundleRiservato]) {
    const head = await b.api(nonGM, 'HEAD', undefined, { 'if-none-match': '"asset-di-prova"' }, path);
    assert.equal(head.status, 403); assert.equal(await head.text(), ''); assertPrivata(head);
  }
  for (const path of ['/api/orientamento.html', '/api/orientamento/', '/api/orientamento/index.html', '/%61pi/orientamento']) {
    const r = await b.api(nonGM, 'GET', undefined, {}, path);
    assert.equal(r.status, 403, path);
    assert.equal((await r.json()).codice, 'riservato-gm');
  }
  assert.equal(richieste.length, 0, 'Nessun asset viene richiesto prima di autorizzare il GM.');
});

test('GM attivo riceve pagine e bundle senza cache o validator; common e KaTeX restano pubblici', async (t) => {
  const b = banco(t), io = await b.credenziali('gm-pagine@test.invalid');
  const richieste = risorseFittizie(b);
  const condizionali = { 'if-none-match': '"asset-di-prova"', 'if-modified-since': 'Fri, 13 Nov 2026 12:00:00 GMT', 'if-match': '*', 'if-unmodified-since': 'Fri, 13 Nov 2026 12:00:00 GMT', 'if-range': '"asset-di-prova"' };
  for (const path of ['/orientamento', '/orientamento/studio', '/orientamento/universita', bundleRiservato, bundleRiservato + '.map']) {
    const r = await b.api(io, 'GET', undefined, condizionali, path);
    assert.equal(r.status, 200, path); assertPrivata(r);
    assert.match(r.headers.get('vary'), /Accept-Encoding/);
    assert.equal(await r.text(), 'contenuto-consegnato-da-ASSETS');
    for (const nome of Object.keys(condizionali)) assert.equal(richieste.at(-1).headers.has(nome), false, nome);
  }
  const head = await b.api(io, 'HEAD', undefined, condizionali, bundleRiservato);
  assert.equal(head.status, 200); assert.equal(await head.text(), ''); assertPrivata(head);
  for (const path of ['/risorse/orientamento-comune.prova.js', '/risorse/katex.prova.js', '/risorse/Account.prova.js']) {
    const r = await b.api(null, 'GET', undefined, {}, path);
    assert.equal(r.status, 200, path);
    assert.match(r.headers.get('cache-control'), /public/);
  }
  const n = richieste.length;
  assert.equal((await b.api(io, 'POST', '{}', {}, bundleRiservato)).status, 405);
  assert.equal(richieste.length, n);
});

test('pagine e script richiedono anche token non scaduto e dispositivo non revocato, non basta il ruolo GM', async (t) => {
  const b = banco(t), richieste = risorseFittizie(b);
  for (const [i, token] of [
    { t: Date.now() - 180 * GIORNO }, { t: Date.now() + 1 }, { t: null }, { t: 'oggi' }, { scopo: 'recupero' },
  ].entries()) {
    const io = await b.credenziali(`token-gm-${i}@test.invalid`, token);
    assert.equal((await b.api(io, 'GET', undefined, {}, '/orientamento/studio')).status, 302);
    assert.equal((await b.api(io, 'GET', undefined, {}, bundleRiservato)).status, 401);
  }
  const io = await b.credenziali('device-gm@test.invalid');
  b.db.prepare('DELETE FROM dispositivi WHERE email = ? AND id = ?').run(io.email, io.d);
  assert.equal((await b.api(io, 'GET', undefined, {}, '/orientamento')).status, 302);
  assert.equal((await b.api(io, 'GET', undefined, {}, bundleRiservato)).status, 401);
  const ruotato = await b.credenziali('nonce-gm@test.invalid');
  b.db.prepare('UPDATE dispositivi SET nonce = ? WHERE email = ? AND id = ?').run('nuova-generazione', ruotato.email, ruotato.d);
  assert.equal((await b.api(ruotato, 'GET', undefined, {}, bundleRiservato)).status, 401);
  const versione = await b.credenziali('password-gm@test.invalid');
  b.db.prepare('UPDATE utenti SET versione = versione + 1 WHERE email = ?').run(versione.email);
  assert.equal((await b.api(versione, 'GET', undefined, {}, bundleRiservato)).status, 401);
  assert.equal(richieste.length, 0);
});

test('archivio non disponibile o risposta inattesa: pagine, bundle e API rimangono chiusi', async (t) => {
  const b = banco(t), io = await b.credenziali('gm-errore@test.invalid'), richieste = risorseFittizie(b);
  for (const fetch of [
    async () => { throw new Error('Archivio non raggiungibile'); },
    async () => Response.json({ ok: 'true' }),
    async () => Response.json(null),
  ]) {
    b.env.ARCHIVIO = { idFromName: () => 'test', get: () => ({ fetch }) };
    for (const path of ['/orientamento/studio', bundleRiservato, '/api/orientamento']) {
      const r = await b.api(io, 'GET', undefined, {}, path);
      assert.equal(r.status, 503, path); assertPrivata(r);
      assert.equal((await r.text()).includes('contenuto-consegnato-da-ASSETS'), false);
    }
  }
  assert.equal(richieste.length, 0);
});

test('salva il risultato ricalcolato, lo riapre da un altro dispositivo e sostituisce soltanto la stessa materia', async (t) => {
  const b = banco(t), io = await b.credenziali('studente@test.invalid');
  const prova = provaStudio();
  const r = await b.api(io, 'POST', prova);
  assert.equal(r.status, 200);
  assert.match(r.headers.get('cache-control'), /private.*no-store/);
  const { risultato } = await r.json();
  assert.equal(risultato.id, 'studio:analisi-1');
  assert.equal(risultato.schema, 1);
  assert.equal(risultato.daAggiornare, false);
  assert.deepEqual(risultato.risposte, prova.risposte);
  assert.deepEqual(risultato.esito, valutaStudio(prova.materia, prova.obiettivo, prova.risposte));
  assert.ok(!Object.hasOwn(risultato, 'email'));
  const altroDispositivo = await b.credenziali(io.email);
  const lista = await b.api(altroDispositivo);
  assert.deepEqual((await lista.json()).risultati, [risultato]);
  b.avanza(1000);
  const cambio = await b.api(io, 'POST', provaStudio('analisi-1', 'esame', () => 'non-studiato'));
  assert.equal(cambio.status, 200);
  assert.equal((await cambio.json()).risultato.id, risultato.id);
  const altraMateria = Object.keys(PROFILI_STUDIO).find((m) => m !== 'analisi-1');
  assert.equal((await b.api(io, 'POST', provaStudio(altraMateria))).status, 200);
  const risultati = (await (await b.api(io)).json()).risultati;
  assert.equal(risultati.length, 2);
  assert.equal(risultati.find((x) => x.id === risultato.id).obiettivo, 'esame');
  assert.equal(b.richiesteEsterne.length, 0);
});

test('due account hanno risultati privati anche con id uguali e indirizzo altrui nella query', async (t) => {
  const b = banco(t), a = await b.credenziali('anna@test.invalid'), c = await b.credenziali('carlo@test.invalid');
  const pa = provaStudio(), pc = provaStudio('analisi-1', 'recuperare', () => 'non-so');
  assert.equal((await b.api(a, 'POST', pa)).status, 200);
  assert.equal((await b.api(c)).status, 200);
  assert.deepEqual((await (await b.api(c)).json()).risultati, []);
  assert.equal((await b.api(c, 'POST', pc)).status, 200);
  const dati = await (await b.api(a, 'GET', undefined, {}, '/api/orientamento?email=carlo%40test.invalid')).json();
  assert.equal(dati.risultati.length, 1);
  assert.equal(dati.risultati[0].obiettivo, 'iniziare');
  assert.deepEqual(dati.risultati[0].risposte, pa.risposte);
  assert.equal((await b.api(a, 'POST', { ...pa, email: c.email })).status, 400);
  assert.equal((await b.api(a, 'DELETE', { id: 'studio:analisi-1', email: c.email })).status, 400);
  assert.equal((await b.api(a, 'DELETE', { id: 'studio:analisi-1' })).status, 200);
  assert.deepEqual((await (await b.api(a)).json()).risultati, []);
  assert.equal((await (await b.api(c)).json()).risultati.length, 1);
});

test('un cambio di account in un’altra scheda non sposta il test né elimina il risultato dell’altro account', async (t) => {
  const b = banco(t), anna = await b.credenziali('anna-scheda@test.invalid'), bruno = await b.credenziali('bruno-scheda@test.invalid');
  const provaAnna = provaStudio('analisi-1', 'iniziare');
  const provaBruno = provaStudio('analisi-1', 'recuperare', () => 'non-so');
  assert.equal((await b.api(anna, 'POST', provaAnna)).status, 200);
  assert.equal((await b.api(bruno, 'POST', provaBruno)).status, 200);
  // Il pannello aperto da Anna conserva la sua impronta, ma il cookie è ora di Bruno.
  for (const [metodo, corpo] of [['POST', provaAnna], ['DELETE', { id: 'studio:analisi-1' }], ['DELETE', { tutti: true }]]) {
    const r = await b.api(bruno, metodo, corpo, { 'x-orientamento-account': anna.impronta });
    assert.equal(r.status, 409);
    assert.equal((await r.json()).codice, 'account-cambiato');
  }
  const letturaObsoleta = await b.api(bruno, 'GET', undefined, { 'x-orientamento-account': anna.impronta });
  assert.equal(letturaObsoleta.status, 409);
  assert.equal((await letturaObsoleta.json()).codice, 'account-cambiato');
  const listaBruno = (await (await b.api(bruno)).json()).risultati;
  assert.equal(listaBruno.length, 1);
  assert.equal(listaBruno[0].obiettivo, 'recuperare');
  assert.deepEqual(listaBruno[0].risposte, provaBruno.risposte);
  assert.deepEqual((await (await b.api(anna)).json()).risultati[0].risposte, provaAnna.risposte);
  const getSenzaImpronta = await b.api(bruno, 'GET', undefined, { 'x-orientamento-account': null });
  assert.equal(getSenzaImpronta.status, 200);
  assert.equal((await getSenzaImpronta.json()).risultati[0].obiettivo, 'recuperare');
});

test('POST e DELETE richiedono un’impronta valida; GET la controlla quando presente', async (t) => {
  const b = banco(t), io = await b.credenziali('impronta@test.invalid');
  for (const valore of [null, '', io.email, 'abc', io.impronta.toUpperCase()]) {
    for (const [metodo, corpo] of [['POST', provaStudio()], ['DELETE', { tutti: true }]]) {
      const r = await b.api(io, metodo, corpo, { 'x-orientamento-account': valore });
      assert.equal(r.status, 400);
      assert.equal((await r.json()).codice, 'account-non-valido');
    }
  }
  assert.equal((await b.api(io, 'GET', undefined, { 'x-orientamento-account': 'abc' })).status, 400);
  assert.equal(b.db.prepare('SELECT COUNT(*) AS n FROM orientamento_risultati').get().n, 0);
});

test('ospiti, token manomessi, scaduti e dispositivi revocati non leggono né salvano', async (t) => {
  const b = banco(t), io = await b.credenziali('privato@test.invalid'), prova = provaStudio();
  for (const method of ['GET', 'POST', 'DELETE']) {
    const body = method === 'GET' ? undefined : method === 'POST' ? prova : { tutti: true };
    assert.equal((await b.api(null, method, body)).status, 401);
  }
  const parti = io.token.split('.');
  const falso = { ...io, token: `${parti[0]}.${parti[1][0] === 'a' ? 'b' : 'a'}${parti[1].slice(1)}` };
  assert.equal((await b.api(falso)).status, 401);
  const scaduto = await b.credenziali('scaduto@test.invalid', { t: Date.now() - 181 * GIORNO });
  assert.equal((await b.api(scaduto, 'POST', prova)).status, 401);
  const futuro = await b.credenziali('futuro@test.invalid', { t: Date.now() + 100000 });
  assert.equal((await b.api(futuro)).status, 401);
  const altroScopo = await b.credenziali('recupero@test.invalid', { scopo: 'recupero' });
  assert.equal((await b.api(altroScopo)).status, 401);
  assert.equal((await b.api(io, 'POST', prova)).status, 200);
  b.db.prepare('DELETE FROM dispositivi WHERE email = ? AND id = ?').run(io.email, io.d);
  for (const method of ['GET', 'POST', 'DELETE']) {
    assert.equal((await b.api(io, method, method === 'GET' ? undefined : method === 'POST' ? prova : { tutti: true })).status, 401);
  }
  const nuova = await b.credenziali(io.email);
  b.db.prepare('UPDATE utenti SET versione = versione + 1 WHERE email = ?').run(io.email);
  assert.equal((await b.api(nuova)).status, 401);
  assert.equal(b.db.prepare('SELECT COUNT(*) AS n FROM orientamento_risultati').get().n, 1);
});

test('rifiuta richieste cross-site, origini di sottodomini, form e metodi estranei', async (t) => {
  const b = banco(t), io = await b.credenziali('origine@test.invalid'), prova = provaStudio();
  for (const method of ['POST', 'DELETE']) {
    const body = method === 'POST' ? prova : { tutti: true };
    for (const headers of [
      { origin: 'https://altro.test' }, { origin: 'https://www.ripetizionidianalisi.com' },
      { origin: null }, { 'sec-fetch-site': 'cross-site' }, { 'sec-fetch-site': 'same-site' },
    ]) assert.equal((await b.api(io, method, body, headers)).status, 403);
    assert.equal((await b.api(io, method, body, { 'content-type': 'text/plain' })).status, 415);
    assert.equal((await b.api(io, method, body, { 'content-type': 'application/x-www-form-urlencoded' })).status, 415);
  }
  assert.equal((await b.api(io, 'GET', undefined, { 'sec-fetch-site': 'cross-site' })).status, 403);
  assert.equal((await b.api(io, 'GET', undefined, { origin: 'https://altro.test' })).status, 403);
  const metodo = await b.api(io, 'PUT', prova);
  assert.equal(metodo.status, 405);
  assert.equal(metodo.headers.get('allow'), 'GET, POST, DELETE');
  assert.equal(b.db.prepare('SELECT COUNT(*) AS n FROM orientamento_risultati').get().n, 0);
});

test('rifiuta versioni vecchie, risultati forgiati, ID estranei e valori non previsti', async (t) => {
  const b = banco(t), io = await b.credenziali('validazione@test.invalid'), p = provaStudio();
  const obsoleto = await b.api(io, 'POST', { ...p, versione: 'precedente' });
  assert.equal(obsoleto.status, 409);
  assert.equal((await obsoleto.json()).codice, 'versione');
  for (const body of [
    { ...p, esito: { completo: true, priorita: [], voto: 100 } },
    { ...p, punti: 99999 }, { ...p, materia: 'non-esiste' },
    { ...p, obiettivo: 'sblocca' }, { ...p, areaScelta: 'ingegneria' },
    { ...p, risposte: { ...p.risposte, 'domanda-estranea': 0 } },
    { ...p, risposte: [] }, { ...p, risposte: null },
  ]) assert.equal((await b.api(io, 'POST', body)).status, 400);
  const id = Object.keys(p.risposte)[0];
  for (const valore of [null, true, false, -1, 4, 0.5, '0', 'non-conosco', {}, []]) {
    assert.equal((await b.api(io, 'POST', { ...p, risposte: { ...p.risposte, [id]: valore } })).status, 400);
  }
  assert.equal((await b.api(io, 'POST', '{"tipo":')).status, 400);
  assert.equal((await b.api(io, 'POST', null)).status, 400);
  assert.equal((await b.api(io, 'POST', '[]')).status, 400);
  const prototipo = JSON.stringify(p).replace('"risposte":{', '"risposte":{"__proto__":0,');
  assert.equal((await b.api(io, 'POST', prototipo)).status, 400);
  assert.equal(b.db.prepare('SELECT COUNT(*) AS n FROM orientamento_risultati').get().n, 0);
});

test('non salva un test di studio incompleto o un approfondimento scelto solo in parte', async (t) => {
  const b = banco(t), io = await b.credenziali('completezza@test.invalid');
  const p = provaStudio('analisi-1', 'recuperare', (q) => (q.corretta + 1) % 4);
  delete p.risposte[Object.keys(p.risposte)[0]];
  const parziale = await b.api(io, 'POST', p);
  assert.equal(parziale.status, 400);
  assert.equal((await parziale.json()).codice, 'incompleto');
  const area = AREE_UNIVERSITA.find((a) => a.id === 'ingegneria')?.id || AREE_UNIVERSITA[0].id;
  const universita = provaUniversita(true, area);
  const extra = approfondimentiUniversita({ risposte: universita.risposte, areaScelta: area });
  assert.ok(extra.length >= 2, 'La prova usa un ramo con almeno due domande.');
  delete universita.risposte[extra.at(-1).id];
  const ramo = await b.api(io, 'POST', universita);
  assert.equal(ramo.status, 400);
  assert.equal((await ramo.json()).codice, 'incompleto');
  assert.equal(b.db.prepare('SELECT COUNT(*) AS n FROM orientamento_risultati').get().n, 0);
});

test('salva università con base completa oppure approfondimento completo e mantiene la copertura reale', async (t) => {
  const b = banco(t), io = await b.credenziali('universita@test.invalid');
  const base = provaUniversita(false, undefined, 'non-conosco');
  const iniziale = await b.api(io, 'POST', base);
  assert.equal(iniziale.status, 200);
  const primo = (await iniziale.json()).risultato;
  assert.equal(primo.id, 'universita');
  assert.deepEqual(primo.esito, valutaUniversita({ risposte: base.risposte }));
  assert.equal(primo.esito.copertura.valutate, 0);
  assert.ok(primo.esito.copertura.nonConosco > 0);
  const area = AREE_UNIVERSITA.find((a) => a.id === 'ingegneria')?.id || AREE_UNIVERSITA[0].id;
  const completo = provaUniversita(true, area);
  const r = await b.api(io, 'POST', completo);
  assert.equal(r.status, 200);
  const secondo = (await r.json()).risultato;
  assert.equal(secondo.areaScelta, area);
  assert.deepEqual(secondo.esito, valutaUniversita({ risposte: completo.risposte, areaScelta: area }));
  assert.equal((await (await b.api(io)).json()).risultati.length, 1);
  assert.equal((await b.api(io, 'POST', { ...completo, areaScelta: 'inesistente' })).status, 400);
  const q = Object.keys(completo.risposte)[0];
  for (const valore of [0, 6, '5', 'non-so', true, null]) {
    assert.equal((await b.api(io, 'POST', { ...completo, risposte: { ...completo.risposte, [q]: valore } })).status, 400);
  }
});

test('salva e riapre il confronto legittimo con una preferenza e un’attività sconosciuta in ogni area', async (t) => {
  const b = banco(t), io = await b.credenziali('molte-aree@test.invalid');
  const prova = provaUniversita(false, undefined, 5), base = domandeBaseUniversita();
  for (const area of AREE_UNIVERSITA) {
    const domande = base.filter((q) => q.blocco === 'interessi' && q.aree.includes(area.id));
    assert.equal(domande.length, 2);
    prova.risposte[domande[1].id] = 'non-conosco';
  }
  const esito = valutaUniversita(prova);
  assert.equal(esito.areeConUnaPreferenza.length, AREE_UNIVERSITA.length);
  assert.ok(Buffer.byteLength(JSON.stringify(esito)) > 64 * 1024, 'Il caso supera il precedente limite dell’esito server.');
  assert.ok(Buffer.byteLength(JSON.stringify(prova)) < MAX_CORPO_ORIENTAMENTO);
  const salvato = await b.api(io, 'POST', prova);
  assert.equal(salvato.status, 200);
  assert.deepEqual((await salvato.json()).risultato.esito, esito);
  const risultati = (await (await b.api(io)).json()).risultati;
  assert.equal(risultati.length, 1);
  assert.deepEqual(risultati[0].risposte, prova.risposte);
  assert.deepEqual(risultati[0].esito, esito);
});

test('limita i byte letti, anche senza content-length, e il numero degli elementi', async (t) => {
  const b = banco(t), io = await b.credenziali('limite@test.invalid'), p = provaStudio();
  const lungo = JSON.stringify({ ...p, testo: 'é'.repeat(MAX_CORPO_ORIENTAMENTO / 2) });
  assert.equal((await b.api(io, 'POST', lungo)).status, 413);
  assert.equal((await b.api(io, 'POST', lungo, { 'content-length': '1' })).status, 413);
  assert.equal((await b.api(io, 'POST', p, { 'content-length': String(MAX_CORPO_ORIENTAMENTO + 1) })).status, 413);
  const troppe = Object.fromEntries(Array.from({ length: MAX_RISPOSTE_ORIENTAMENTO + 1 }, (_, i) => [`q-${i}`, 0]));
  assert.equal((await b.api(io, 'POST', { ...p, risposte: troppe })).status, 400);
  assert.equal(b.db.prepare('SELECT COUNT(*) AS n FROM orientamento_risultati').get().n, 0);
});

test('eliminazione esplicita e cancellazione account ripuliscono soltanto i risultati propri', async (t) => {
  const b = banco(t), a = await b.credenziali('cancella@test.invalid'), altro = await b.credenziali('conserva@test.invalid');
  for (const utente of [a, altro]) {
    assert.equal((await b.api(utente, 'POST', provaStudio())).status, 200);
    assert.equal((await b.api(utente, 'POST', provaUniversita())).status, 200);
  }
  for (const dati of [{}, { tutti: false }, { id: 'universita', tutti: true }, { id: '../altro' }]) {
    assert.equal((await b.api(a, 'DELETE', dati)).status, 400);
  }
  const singolo = await b.api(a, 'DELETE', { id: 'studio:analisi-1' });
  assert.deepEqual(await singolo.json(), { ok: true, eliminati: 1 });
  assert.deepEqual(await (await b.api(a, 'DELETE', { id: 'studio:analisi-1' })).json(), { ok: true, eliminati: 0 });
  assert.deepEqual(await (await b.api(a, 'DELETE', { tutti: true })).json(), { ok: true, eliminati: 1 });
  assert.equal((await (await b.api(altro)).json()).risultati.length, 2);
  assert.equal((await b.api(a, 'POST', provaStudio())).status, 200);
  b.db.prepare('DELETE FROM utenti WHERE email = ?').run(a.email);
  assert.equal(b.db.prepare('SELECT COUNT(*) AS n FROM orientamento_risultati WHERE email = ?').get(a.email).n, 0);
  assert.equal(b.db.prepare('SELECT COUNT(*) AS n FROM orientamento_risultati WHERE email = ?').get(altro.email).n, 2);
  assert.equal((await b.api(a)).status, 401);
});

test('la versione storica resta riconoscibile e orientamento non assegna EXP né avvia studio o email', async (t) => {
  const b = banco(t), io = await b.credenziali('senza-premi@test.invalid');
  const prima = b.db.prepare('SELECT exp FROM utenti WHERE email = ?').get(io.email).exp;
  const p = provaStudio();
  assert.equal((await b.api(io, 'POST', p)).status, 200);
  assert.equal((await b.api(io, 'POST', provaUniversita())).status, 200);
  b.db.prepare('UPDATE orientamento_risultati SET versione = ? WHERE email = ? AND id = ?').run('versione-storica', io.email, 'studio:analisi-1');
  const risultati = (await (await b.api(io)).json()).risultati;
  assert.equal(risultati.find((r) => r.id === 'studio:analisi-1').daAggiornare, true);
  assert.equal(risultati.find((r) => r.id === 'universita').daAggiornare, false);
  assert.equal(b.db.prepare('SELECT exp FROM utenti WHERE email = ?').get(io.email).exp, prima);
  for (const table of ['risposte', 'studio', 'sessioni', 'premi', 'ripasso', 'exp']) {
    assert.equal(b.db.prepare(`SELECT COUNT(*) AS n FROM ${table} WHERE email = ?`).get(io.email).n, 0, table);
  }
  assert.equal(b.richiesteEsterne.length, 0);
});

test('espone la scadenza di 365 giorni: solo un nuovo salvataggio la rinnova e il limite è incluso', async (t) => {
  const b = banco(t), io = await b.credenziali('scadenza@test.invalid');
  const iniziale = (await (await b.api(io, 'POST', provaStudio())).json()).risultato;
  assert.equal(DURATA_RISULTATO_ORIENTAMENTO, 365 * GIORNO);
  assert.equal(Date.parse(iniziale.scade) - Date.parse(iniziale.aggiornato), DURATA_RISULTATO_ORIENTAMENTO);
  b.avanza(100 * GIORNO);
  const letto = (await (await b.api(io)).json()).risultati[0];
  assert.equal(letto.scade, iniziale.scade);
  assert.equal(letto.aggiornato, iniziale.aggiornato);
  const aggiornato = (await (await b.api(io, 'POST', provaStudio('analisi-1', 'recuperare'))).json()).risultato;
  assert.equal(Date.parse(aggiornato.scade) - Date.parse(iniziale.scade), 100 * GIORNO);
  b.avanza(DURATA_RISULTATO_ORIENTAMENTO - 1);
  const rientro = await b.credenziali(io.email);
  assert.equal((await (await b.api(rientro)).json()).risultati[0].scade, aggiornato.scade);
  b.avanza(1);
  assert.deepEqual((await (await b.api(rientro)).json()).risultati, []);
  assert.equal(b.db.prepare('SELECT COUNT(*) AS n FROM orientamento_risultati').get().n, 0);
});

test('la pulizia su accesso riguarda solo l’account autenticato e non parte con un’impronta obsoleta', async (t) => {
  const b = banco(t), anna = await b.credenziali('anna-scadenza@test.invalid'), bruno = await b.credenziali('bruno-scadenza@test.invalid');
  for (const io of [anna, bruno]) assert.equal((await b.api(io, 'POST', provaStudio())).status, 200);
  b.avanza(DURATA_RISULTATO_ORIENTAMENTO);
  const rientroAnna = await b.credenziali(anna.email), rientroBruno = await b.credenziali(bruno.email);
  assert.equal((await b.api(null)).status, 401);
  assert.equal((await b.api(rientroBruno, 'DELETE', { tutti: true }, { 'x-orientamento-account': anna.impronta })).status, 409);
  assert.equal(b.db.prepare('SELECT COUNT(*) AS n FROM orientamento_risultati').get().n, 2);
  assert.deepEqual((await (await b.api(rientroAnna)).json()).risultati, []);
  assert.equal(b.db.prepare('SELECT COUNT(*) AS n FROM orientamento_risultati WHERE email = ?').get(bruno.email).n, 1);
  assert.equal((await b.api(rientroBruno, 'POST', provaUniversita())).status, 200);
  const superstiti = b.db.prepare('SELECT email, id FROM orientamento_risultati').all();
  assert.deepEqual(superstiti.map((r) => ({ ...r })), [{ email: bruno.email, id: 'universita' }]);
});

test('il cron orario elimina fisicamente gli scaduti di tutti gli account e preserva i risultati recenti', async (t) => {
  const b = banco(t), anna = await b.credenziali('anna-cron@test.invalid'), bruno = await b.credenziali('bruno-cron@test.invalid');
  for (const io of [anna, bruno]) {
    assert.equal((await b.api(io, 'POST', provaStudio())).status, 200);
    assert.equal((await b.api(io, 'POST', provaUniversita())).status, 200);
  }
  b.avanza(DURATA_RISULTATO_ORIENTAMENTO - GIORNO);
  const rientroBruno = await b.credenziali(bruno.email);
  const fresco = (await (await b.api(rientroBruno, 'POST', provaUniversita())).json()).risultato;
  b.avanza(GIORNO);
  // Gli altri lavori del cron ricevono soltanto cataloghi vuoti e dati fittizi.
  // Nessuna credenziale di invio/pagamento o risorsa di produzione è presente.
  b.env.ASSETS = { fetch: async () => Response.json({}) };
  const pending = [];
  await worker.scheduled({ cron: '58 * * * *' }, b.env, { waitUntil(p) { pending.push(p); } });
  await Promise.all(pending);
  const superstiti = b.db.prepare('SELECT email, id, aggiornato FROM orientamento_risultati').all();
  assert.deepEqual(superstiti.map((r) => ({ ...r })), [{ email: bruno.email, id: 'universita', aggiornato: fresco.aggiornato }]);
  const ripeti = await b.ar.fetch(new Request('https://archivio/ori-pulisci', { method: 'POST', body: '{}' }));
  assert.deepEqual(await ripeti.json(), { ok: true, eliminati: 0 });
  assert.equal(b.richiesteEsterne.length, 0);
});
