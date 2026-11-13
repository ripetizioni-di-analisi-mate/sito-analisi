// Worker e archivio reali su SQLite in memoria; nessun account o servizio esterno.
import test, { after } from 'node:test';
import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';

const root = fileURLToPath(new URL('../', import.meta.url));
const temp = mkdtempSync(join(tmpdir(), 'gm-leghe-'));
const entry = join(temp, 'entry.mjs'), bundle = join(temp, 'bundle.mjs');
writeFileSync(entry, [
  `export { Archivio, default as worker } from ${JSON.stringify(join(root, 'worker/index.mjs'))};`,
  `export { settimanaDi } from ${JSON.stringify(join(root, 'worker/livelli.mjs'))};`,
].join('\n'));
execFileSync(process.execPath, [resolve(root, 'node_modules/rolldown/bin/cli.mjs'), entry, '--file', bundle, '--format', 'esm', '--platform', 'node', '--logLevel', 'silent'], { cwd: root });
const { Archivio, worker, settimanaDi } = await import(pathToFileURL(bundle));
after(() => rmSync(temp, { recursive: true, force: true }));
const origine = 'https://ripetizionidianalisi.com';
const password = 'solo-test-gm';
const emailGM = 'gm@test.invalid';

class Browser {
  cookies = new Map();
  ricevi(r) {
    for (const cookie of r.headers.getSetCookie()) {
      const [coppia] = cookie.split(';'), i = coppia.indexOf('=');
      const nome = coppia.slice(0, i), valore = coppia.slice(i + 1);
      if (!valore || /Max-Age=0(?:;|$)/i.test(cookie)) this.cookies.delete(nome);
      else this.cookies.set(nome, valore);
    }
  }
}

function banco(t) {
  const db = new DatabaseSync(':memory:');
  t.after(() => db.close());
  const ora = Date.parse('2026-11-12T12:00:00Z');
  t.mock.method(Date, 'now', () => ora);
  let alarm = null;
  const storage = {
    sql: { exec(q, ...p) {
      if (!p.length && !/^\s*SELECT/i.test(q)) { db.exec(q); return []; }
      const statement = db.prepare(q);
      return statement.columns().length ? statement.all(...p) : (statement.run(...p), []);
    } },
    transactionSync(fn) {
      db.exec('BEGIN');
      try { const r = fn(); db.exec('COMMIT'); return r; }
      catch (e) { db.exec('ROLLBACK'); throw e; }
    },
    getAlarm: async () => alarm,
    setAlarm: async (value) => { alarm = value; },
  };
  const env = { CHIAVE_ACCESSO: 'test-only-gm', ADMIN_PASSWORD: 'test-only-admin', VENDITA: '1' };
  const ar = new Archivio({ storage }, env);
  env.ARCHIVIO = { idFromName: () => 'test', get: () => ({ fetch: (url, init) => ar.fetch(new Request(url, init)) }) };
  const api = async (b, path, body, extra = {}, method = body === undefined ? 'GET' : 'POST') => {
    const pending = [];
    const headers = { cookie: [...b.cookies].map(([k, v]) => k + '=' + v).join('; '), 'user-agent': 'Windows Chrome', ...extra };
    if (body !== undefined) { headers['content-type'] ??= 'application/json'; headers.origin ??= origine; }
    const req = new Request(origine + path, { method, headers, ...(body === undefined ? {} : { body: JSON.stringify(body) }) });
    const r = await worker.fetch(req, env, { waitUntil(p) { pending.push(p); } });
    await Promise.all(pending); b.ricevi(r); return r;
  };
  const registrati = async (email = emailGM) => {
    const b = new Browser();
    assert.equal((await api(b, '/api/registrati', { email, password, nome: 'Studente' })).status, 200);
    return b;
  };
  const admin = async () => {
    const b = new Browser();
    assert.equal((await api(b, '/admin/api/login', { pw: env.ADMIN_PASSWORD })).status, 200);
    return b;
  };
  const iscrivi = (email, { lega = 0, gruppo = 1, exp = 100, nome = 'Studente', soprannome = null, pubblico = 1 } = {}) => {
    db.prepare('UPDATE utenti SET lega=?, exp=?, nome=?, soprannome=?, pubblico=? WHERE email=?').run(lega, exp, nome, soprannome, pubblico, email);
    db.prepare('INSERT INTO leghe (email,settimana,lega,gruppo,entrato) VALUES (?,?,?,?,?)').run(email, settimanaDi()[0], lega, gruppo, ora);
    db.prepare("INSERT INTO exp (email,quando,punti,tipo) VALUES (?,?,?,'test')").run(email, ora, exp);
  };
  const statoGioco = () => ({
    utenti: db.prepare('SELECT email,lega,exp,premium_manuale FROM utenti ORDER BY email').all(),
    leghe: db.prepare('SELECT * FROM leghe ORDER BY email,settimana').all(),
    exp: db.prepare('SELECT * FROM exp ORDER BY id').all(),
    esiti: db.prepare('SELECT * FROM leghe_esiti ORDER BY email,settimana').all(),
    abilitazioni: db.prepare('SELECT * FROM abilitazioni ORDER BY email,materia').all(),
  });
  return { db, env, ar, api, registrati, admin, iscrivi, statoGioco };
}

test('solo la dashboard autenticata può attivare GM, con origine e JSON validi', async (t) => {
  const b = banco(t), studente = await b.registrati(), admin = await b.admin();
  const comando = { email: emailGM, attivo: true };
  assert.equal((await b.api(new Browser(), '/admin/api/gm', comando)).status, 401);
  assert.equal((await b.api(studente, '/admin/api/gm', comando)).status, 401);
  for (const headers of [{ origin: 'https://altro.invalid' }, { origin: '' }, { 'content-type': 'text/plain' }, { 'sec-fetch-site': 'cross-site' }]) {
    assert.equal((await b.api(admin, '/admin/api/gm', comando, headers)).status, 403);
  }
  for (const body of [{ email: emailGM, attivo: 'true' }, { email: emailGM }, { email: 'non-email', attivo: true }, null]) {
    assert.equal((await b.api(admin, '/admin/api/gm', body)).status, 400);
  }
  const method = await b.api(admin, '/admin/api/gm');
  assert.equal(method.status, 405); assert.equal(method.headers.get('allow'), 'POST');
  assert.equal(b.db.prepare('SELECT gm_manuale FROM utenti WHERE email=?').get(emailGM).gm_manuale, null);
  assert.equal((await b.api(admin, '/admin/api/gm', { email: 'inesistente@test.invalid', attivo: true })).status, 404);
});

test('attivazione e revoca sono immediate sulle sessioni aperte e sui dati dashboard', async (t) => {
  const b = banco(t), studente = await b.registrati(), admin = await b.admin();
  const prima = b.statoGioco();
  assert.equal((await (await b.api(studente, '/api/io')).json()).gm, false);
  const dashboardPrima = await (await b.api(admin, '/admin/api/dati')).json();
  assert.equal(dashboardPrima.utenti.find(u => u.email === emailGM).gm_manuale, null);
  const attiva = await b.api(admin, '/admin/api/gm', { email: ' GM@TEST.INVALID ', attivo: true });
  assert.equal(attiva.status, 200); assert.match(attiva.headers.get('cache-control'), /private.*no-store/);
  const data = (await attiva.json()).gm_manuale;
  assert.ok(data);
  assert.equal((await (await b.api(admin, '/admin/api/gm', { email: emailGM, attivo: true })).json()).gm_manuale, data);
  assert.equal((await (await b.api(studente, '/api/io')).json()).gm, true);
  assert.equal((await (await b.api(studente, '/api/lega')).json()).gm, true);
  assert.equal((await (await b.api(admin, '/admin/api/dati')).json()).utenti.find(u => u.email === emailGM).gm_manuale, data);
  assert.equal((await b.api(studente, '/api/lega/gm?lega=0')).status, 200);
  const revoca = await b.api(admin, '/admin/api/gm', { email: emailGM, attivo: false });
  assert.equal((await revoca.json()).gm_manuale, null);
  assert.equal((await (await b.api(studente, '/api/io')).json()).gm, false);
  assert.equal((await (await b.api(studente, '/api/lega')).json()).gm, false);
  assert.equal((await b.api(studente, '/api/lega/gm?lega=0')).status, 403);
  assert.equal((await (await b.api(admin, '/admin/api/dati')).json()).utenti.find(u => u.email === emailGM).gm_manuale, null);
  assert.deepEqual(b.statoGioco(), prima);
});

test('la lettura GM è privata, autorizzata anche nell’archivio e limita metodo e parametri', async (t) => {
  const b = banco(t), gm = await b.registrati(), admin = await b.admin();
  const ospite = await b.api(new Browser(), '/api/lega/gm?lega=0');
  assert.equal(ospite.status, 401); assert.match(ospite.headers.get('cache-control'), /no-store/);
  assert.equal((await b.api(gm, '/api/lega/gm?lega=0')).status, 403);
  // Nemmeno un chiamante interno può ignorare una revoca già avvenuta.
  const interno = await b.ar.fetch(new Request('https://archivio/sfi-lega-gm', { method: 'POST', body: JSON.stringify({ email: emailGM, lega: 0 }) }));
  assert.equal((await interno.json()).status, 403);
  await b.api(admin, '/admin/api/gm', { email: emailGM, attivo: true });
  for (const query of ['', 'lega=-1', 'lega=10', 'lega=1.0', 'lega=1e0', 'lega=1&lega=2', 'lega=0&gruppo=', 'lega=0&gruppo=0', 'lega=0&gruppo=-1', 'lega=0&gruppo=1.5', 'lega=0&gruppo=9007199254740992', 'lega=0&gruppo=1&gruppo=2']) {
    const r = await b.api(gm, '/api/lega/gm?' + query);
    assert.equal(r.status, 400, query); assert.match(r.headers.get('cache-control'), /no-store/);
  }
  for (const method of ['POST', 'PUT', 'DELETE', 'HEAD']) {
    const r = await b.api(gm, '/api/lega/gm?lega=0', undefined, {}, method);
    assert.equal(r.status, 405); assert.equal(r.headers.get('allow'), 'GET');
  }
  assert.equal((await b.api(gm, '/api/lega/gm?lega=0&gruppo=1')).status, 404);
  for (let lega = 0; lega < 10; lega++) {
    const r = await b.api(gm, '/api/lega/gm?lega=' + lega);
    assert.equal(r.status, 200); assert.match(r.headers.get('cache-control'), /private.*no-store/);
    const d = await r.json();
    assert.equal(d.lega, lega); assert.equal(d.osservazione, true); assert.equal(d.attesa, true);
    assert.equal(d.gruppoNumero, null); assert.deepEqual(d.gruppi, []); assert.deepEqual(d.gruppo, []);
  }
});

test('GM vede le vere classifiche con nomi pubblici e bot coerenti, senza entrare o guadagnare EXP', async (t) => {
  const b = banco(t), gm = await b.registrati(), admin = await b.admin();
  const anna = await b.registrati('anna@test.invalid');
  await b.registrati('privato@test.invalid'); await b.registrati('altro@test.invalid');
  b.iscrivi('anna@test.invalid', { lega: 3, gruppo: 2, exp: 300, nome: 'Anna CognomeRiservato', soprannome: 'Nina' });
  b.iscrivi('privato@test.invalid', { lega: 3, gruppo: 2, exp: 200, nome: 'IdentitaSegreta', soprannome: 'NicknameSegreto', pubblico: 0 });
  b.iscrivi('altro@test.invalid', { lega: 3, gruppo: 4, exp: 150, nome: 'Luca CognomeRiservato' });
  await b.api(admin, '/admin/api/gm', { email: emailGM, attivo: true });
  const prima = b.statoGioco();
  const d = await (await b.api(gm, '/api/lega/gm?lega=3')).json();
  const normale = await (await b.api(anna, '/api/lega')).json();
  assert.equal(d.gruppoNumero, 2); assert.equal(d.esito, null); assert.equal(d.attesa, false);
  assert.deepEqual(d.gruppi, [{ numero: 2, membri: 2 }, { numero: 4, membri: 1 }]);
  assert.equal(d.conSimulati, normale.conSimulati);
  assert.deepEqual(d.gruppo.map(({ nome, pos, exp, livello }) => ({ nome, pos, exp, livello })), normale.gruppo.map(({ nome, pos, exp, livello }) => ({ nome, pos, exp, livello })));
  assert.ok(d.gruppo.some(m => m.nome === 'Nina'));
  assert.ok(d.gruppo.some(m => m.nome === 'Studente'));
  assert.ok(d.gruppo.every(m => m.io === false && !Object.hasOwn(m, 'posizioneStudente')));
  const serializzato = JSON.stringify(d);
  for (const segreto of ['@test.invalid', 'CognomeRiservato', 'IdentitaSegreta', 'NicknameSegreto', 'gm_manuale', 'password', 'hash']) assert.ok(!serializzato.includes(segreto), segreto);
  const altro = await (await b.api(gm, '/api/lega/gm?lega=3&gruppo=4')).json();
  assert.equal(altro.gruppoNumero, 4); assert.ok(altro.gruppo.some(m => m.nome === 'Luca')); assert.ok(!altro.gruppo.some(m => m.nome === 'Nina'));
  assert.equal((await b.api(gm, '/api/lega/gm?lega=3&gruppo=3')).status, 404);
  assert.deepEqual(b.statoGioco(), prima);
  assert.equal(b.db.prepare('SELECT COUNT(*) AS n FROM leghe WHERE email=?').get(emailGM).n, 0);
});

test('il permesso GM resta distinto da Premium e non conferisce accesso amministrativo', async (t) => {
  const b = banco(t), gm = await b.registrati(), admin = await b.admin();
  const prima = await (await b.api(gm, '/api/io')).json();
  await b.api(admin, '/admin/api/gm', { email: emailGM, attivo: true });
  const dopo = await (await b.api(gm, '/api/io')).json();
  assert.deepEqual(dopo.materie, prima.materie);
  assert.equal((await b.api(gm, '/admin/api/dati')).status, 401);
  assert.equal((await b.api(gm, '/admin/api/gm', { email: emailGM, attivo: false })).status, 401);
  await b.api(admin, '/admin/api/premium', { email: emailGM, attivo: true });
  await b.api(admin, '/admin/api/gm', { email: emailGM, attivo: false });
  assert.equal((await b.api(gm, '/api/lega/gm?lega=0')).status, 403);
  const premium = await (await b.api(gm, '/api/io')).json();
  assert.equal(premium.gm, false); assert.ok(premium.materie.length > prima.materie.length);
});
