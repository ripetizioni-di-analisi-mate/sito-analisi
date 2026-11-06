// Solo SQLite locale e servizio email simulato: nessun invio a studenti reali.
import test, { after } from 'node:test';
import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const root = fileURLToPath(new URL('../', import.meta.url));
const temp = mkdtempSync(join(tmpdir(), 'avvisi-lega-'));
const entry = join(temp, 'entry.mjs'), bundle = join(temp, 'bundle.mjs');
writeFileSync(entry, [
  `export { Archivio, firmaToken, default as worker } from ${JSON.stringify(join(root, 'worker/index.mjs'))};`,
  `export { aggiungi, settimanaDi } from ${JSON.stringify(join(root, 'worker/livelli.mjs'))};`,
  `export { fotografiaLega } from ${JSON.stringify(join(root, 'worker/sfide.mjs'))};`,
  `export { componiAvvisoLega } from ${JSON.stringify(join(root, 'worker/avvisi-lega.mjs'))};`,
].join('\n'));
execFileSync(process.execPath, [resolve(root, 'node_modules/rolldown/bin/cli.mjs'), entry, '--file', bundle, '--format', 'esm', '--platform', 'node', '--logLevel', 'silent'], { cwd: root });
const { Archivio, firmaToken, worker, aggiungi, settimanaDi, fotografiaLega, componiAvvisoLega } = await import(pathToFileURL(bundle));
after(() => rmSync(temp, { recursive: true, force: true }));

function banco(t) {
  const db = new DatabaseSync(':memory:');
  t.after(() => db.close());
  let alarm = null, ora = Date.now();
  t.mock.method(Date, 'now', () => ora);
  const state = { storage: {
    sql: { exec(q, ...p) {
      if (!p.length && !/^\s*SELECT/i.test(q)) { db.exec(q); return []; }
      const statement = db.prepare(q);
      return statement.columns().length ? statement.all(...p) : (statement.run(...p), []);
    } },
    getAlarm: async () => alarm,
    setAlarm: async (value) => { alarm = value; },
  } };
  const env = { RESEND_API_KEY: 'test-only', CHIAVE_ACCESSO: 'test-only-signature' };
  let ar = new Archivio(state, env);
  const settimana = settimanaDi()[0];
  const utenti = (email, punti, entrato, { lega = 0, gruppo = 1, attivi = null, promemoria = 1, hash = 'test-only' } = {}) => {
    db.prepare('INSERT INTO utenti (email, nome, hash, exp, lega, promemoria, avvisi_lega) VALUES (?, ?, ?, ?, ?, ?, ?)').run(email, email.split('@')[0], hash, punti, lega, promemoria, attivi);
    db.prepare('INSERT INTO leghe (email, settimana, lega, gruppo, entrato) VALUES (?, ?, ?, ?, ?)').run(email, settimana, lega, gruppo, entrato);
    db.prepare("INSERT INTO exp (email, quando, punti, tipo) VALUES (?, ?, ?, 'iniziale')").run(email, ora, punti);
  };
  const all = () => db.prepare('SELECT * FROM leghe_avvisi ORDER BY creato, email').all();
  const api = (path, body) => ar.fetch(new Request(`https://archivio${path}`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) }));
  const sveglia = async () => { ora = Math.max(ora, alarm || 0); alarm = null; await ar.alarm(); };
  const avanza = (ms) => { ora += ms; };
  const riavvia = () => { ar = new Archivio(state, env); };
  const invii = [];
  t.mock.method(globalThis, 'fetch', async (url, opts) => {
    assert.equal(url, 'https://api.resend.com/emails');
    invii.push({ body: opts.body, headers: opts.headers });
    return Response.json({ id: 'email-simulata' });
  });
  return { db, env, utenti, all, api, sveglia, avanza, riavvia, invii, get ar() { return ar; }, get alarm() { return alarm; } };
}

test('avvisa soltanto gli studenti superati nello stesso gruppo', async (t) => {
  const b = banco(t);
  b.utenti('anna@test.invalid', 100, 1); b.utenti('luca@test.invalid', 80, 2); b.utenti('mario@test.invalid', 60, 3);
  b.utenti('altro@test.invalid', 80, 1, { gruppo: 2 });
  aggiungi(b.ar, 'mario@test.invalid', 25, 'risposta');
  assert.deepEqual(b.all().map((r) => [r.email, r.da, r.a]), [['luca@test.invalid', 2, 3]]);
  aggiungi(b.ar, 'mario@test.invalid', 1, 'premio');
  assert.equal(b.all().length, 1);
  assert.deepEqual(fotografiaLega(b.ar, 'mario@test.invalid').membri.map((m) => m.email), ['anna@test.invalid', 'mario@test.invalid', 'luca@test.invalid']);
});

test('la parità usa il momento di ingresso e un ingresso nuovo può superare più studenti', (t) => {
  const b = banco(t);
  b.utenti('anna@test.invalid', 80, 1); b.utenti('luca@test.invalid', 60, 2);
  b.db.prepare("INSERT INTO utenti (email, hash, exp) VALUES ('nuovo@test.invalid', 'test', 0)").run();
  aggiungi(b.ar, 'nuovo@test.invalid', 60, 'risposta');
  assert.equal(b.all().length, 0);
  aggiungi(b.ar, 'nuovo@test.invalid', 21, 'risposta');
  assert.deepEqual(b.all().map((r) => [r.email, r.da, r.a]), [['anna@test.invalid', 1, 2], ['luca@test.invalid', 2, 3]]);
});

test('sorpassi ravvicinati vengono riuniti prima del primo invio', (t) => {
  const b = banco(t);
  b.utenti('anna@test.invalid', 100, 1); b.utenti('luca@test.invalid', 90, 2); b.utenti('mario@test.invalid', 80, 3);
  aggiungi(b.ar, 'luca@test.invalid', 11, 'risposta');
  aggiungi(b.ar, 'mario@test.invalid', 22, 'risposta');
  const anna = b.all().filter((r) => r.email === 'anna@test.invalid');
  assert.equal(anna.length, 1); assert.equal(anna[0].da, 1); assert.equal(anna[0].a, 3);
});

test('la preferenza precedente è rispettata e si può riattivare soltanto la lega', async (t) => {
  const b = banco(t);
  b.utenti('anna@test.invalid', 80, 1, { promemoria: 0 }); b.utenti('luca@test.invalid', 60, 2);
  aggiungi(b.ar, 'luca@test.invalid', 21, 'risposta'); assert.equal(b.all().length, 0);
  await b.api('/sfi-avvisi', { email: 'anna@test.invalid', attivi: true });
  aggiungi(b.ar, 'anna@test.invalid', 3, 'risposta');
  aggiungi(b.ar, 'luca@test.invalid', 3, 'risposta');
  assert.equal(b.all().filter((r) => r.email === 'anna@test.invalid').length, 1);
  assert.equal((await (await b.api('/sfi-lega', { email: 'anna@test.invalid' })).json()).avvisiLega, true);
  await b.api('/sfi-avvisi', { email: 'anna@test.invalid', attivi: false });
  assert.equal(b.all().filter((r) => r.email === 'anna@test.invalid').length, 0);
});

test('alarm persistente invia a pagina chiusa e non ripete dopo un riavvio', async (t) => {
  const b = banco(t);
  b.utenti('anna@test.invalid', 80, 1); b.utenti('luca@test.invalid', 60, 2);
  aggiungi(b.ar, 'luca@test.invalid', 21, 'risposta');
  await b.api('/sfi-lega', { email: 'luca@test.invalid' });
  assert.ok(b.alarm > Date.now());
  b.riavvia(); await b.sveglia();
  assert.equal(b.invii.length, 1); assert.equal(b.all()[0].stato, 'inviato');
  const mail = JSON.parse(b.invii[0].body);
  assert.deepEqual(mail.to, ['anna@test.invalid']); assert.match(mail.text, /dalla 1ª alla 2ª/);
  assert.match(mail.html, /https:\/\/ripetizionidianalisi.com\/lega/);
  assert.ok(!mail.text.includes('luca@test.invalid'));
  b.riavvia(); await b.sveglia(); assert.equal(b.invii.length, 1);
});

test('gli errori transitori ritentano lo stesso payload con la stessa chiave', async (t) => {
  const b = banco(t);
  b.utenti('anna@test.invalid', 80, 1); b.utenti('luca@test.invalid', 60, 2);
  aggiungi(b.ar, 'luca@test.invalid', 21, 'risposta');
  await b.api('/sfi-lega', { email: 'luca@test.invalid' });
  let n = 0;
  t.mock.method(globalThis, 'fetch', async (_url, opts) => {
    b.invii.push({ body: opts.body, headers: opts.headers });
    return Response.json({ id: 'simulata' }, { status: ++n === 1 ? 429 : 200 });
  });
  await b.sveglia(); assert.equal(b.all()[0].stato, 'invio'); assert.ok(b.alarm > Date.now());
  b.riavvia(); await b.sveglia();
  assert.equal(b.all()[0].stato, 'inviato'); assert.equal(b.all()[0].tentativi, 2);
  assert.equal(b.invii[0].body, b.invii[1].body);
  assert.equal(b.invii[0].headers['Idempotency-Key'], b.invii[1].headers['Idempotency-Key']);
});

test('nessun falso avviso se si recupera la posizione o si cambia settimana', async (t) => {
  const b = banco(t);
  b.utenti('anna@test.invalid', 80, 1); b.utenti('luca@test.invalid', 60, 2);
  aggiungi(b.ar, 'luca@test.invalid', 21, 'risposta'); aggiungi(b.ar, 'anna@test.invalid', 2, 'risposta');
  await b.api('/sfi-lega', { email: 'anna@test.invalid' });
  await b.sveglia();
  assert.equal(b.all().find((r) => r.email === 'anna@test.invalid').stato, 'annullato');
  b.avanza(7 * 86400000); await b.sveglia();
  assert.equal(b.invii.length, 0);
});

test('nessun invio senza chiave email, senza account o con errore permanente', async (t) => {
  const b = banco(t);
  b.utenti('anna@test.invalid', 80, 1); b.utenti('senza@test.invalid', 70, 2, { hash: null }); b.utenti('luca@test.invalid', 60, 3);
  aggiungi(b.ar, 'luca@test.invalid', 21, 'risposta'); assert.equal(b.all().length, 1);
  delete b.env.RESEND_API_KEY;
  await b.api('/sfi-lega', { email: 'luca@test.invalid' }); await b.sveglia();
  assert.equal(b.invii.length, 0); assert.equal(b.all()[0].stato, 'attesa');
  b.env.RESEND_API_KEY = 'test-only';
  t.mock.method(globalThis, 'fetch', async () => new Response('', { status: 422 }));
  await b.sveglia(); assert.equal(b.all()[0].stato, 'errore');
});

test('la disattivazione firmata richiede POST e un token dello scopo corretto', async (t) => {
  const b = banco(t);
  b.utenti('anna@test.invalid', 80, 1);
  b.env.ARCHIVIO = { idFromName: () => 'locale', get: () => ({ fetch: (url, opts) => b.ar.fetch(new Request(url, opts)) }) };
  const token = await firmaToken(b.env, { scopo: 'avvisi-lega', r: 'anna@test.invalid' });
  const url = `https://ripetizionidianalisi.com/lega/avvisi/disattiva?t=${encodeURIComponent(token)}`;
  const ctx = { waitUntil() {} };
  assert.equal((await worker.fetch(new Request(url), b.env, ctx)).status, 200);
  assert.equal((await (await b.api('/sfi-lega', { email: 'anna@test.invalid' })).json()).avvisiLega, true);
  assert.equal((await worker.fetch(new Request(url, { method: 'POST' }), b.env, ctx)).status, 200);
  assert.equal((await (await b.api('/sfi-lega', { email: 'anna@test.invalid' })).json()).avvisiLega, false);
  assert.equal((await worker.fetch(new Request(`${url}rotto`, { method: 'POST' }), b.env, ctx)).status, 400);
});

test('email inglese e HTML sicuro non espongono dati degli avversari', () => {
  const m = componiAvvisoLega({ nome: '<script>test</script>', lingua: 'en', lega: 0, da: 3, a: 4 }, 'https://example.test/?a=1&b=2');
  assert.match(m.subject, /#4/); assert.match(m.text, /position 3 to position 4/);
  assert.ok(!m.html.includes('<script>')); assert.match(m.html, /&lt;script&gt;/);
});
