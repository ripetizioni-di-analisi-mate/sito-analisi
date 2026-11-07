// SQLite in memoria e browser simulati. Nessun accesso a sessioni o account reali.
import test, { after } from 'node:test';
import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';

const root = fileURLToPath(new URL('../', import.meta.url));
const temp = mkdtempSync(join(tmpdir(), 'dispositivi-'));
const entry = join(temp, 'entry.mjs'), bundle = join(temp, 'bundle.mjs');
writeFileSync(entry, `export { Archivio, firmaToken, default as worker } from ${JSON.stringify(join(root, 'worker/index.mjs'))};`);
execFileSync(process.execPath, [resolve(root, 'node_modules/rolldown/bin/cli.mjs'), entry, '--file', bundle, '--format', 'esm', '--platform', 'node', '--logLevel', 'silent'], { cwd: root });
const { Archivio, firmaToken, worker } = await import(pathToFileURL(bundle));
after(() => rmSync(temp, { recursive: true, force: true }));
const origine = 'https://ripetizionidianalisi.com';
const password = 'solo-test-dispositivi';
const email = 'studente@test.invalid';

class Browser {
  cookies = new Map();
  constructor(nome = 'Windows Chrome') { this.nome = nome; }
  copia() { const b = new Browser(this.nome); b.cookies = new Map(this.cookies); return b; }
  ricevi(r) {
    for (const c of r.headers.getSetCookie()) {
      const [pair] = c.split(';'), at = pair.indexOf('=');
      const nome = pair.slice(0, at), valore = pair.slice(at + 1);
      if (!valore || /Max-Age=0(?:;|$)/i.test(c)) this.cookies.delete(nome);
      else this.cookies.set(nome, valore);
    }
  }
}

function banco(t) {
  const db = new DatabaseSync(':memory:');
  t.after(() => db.close());
  let ora = Date.now(), alarm = null;
  t.mock.method(Date, 'now', () => ora);
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
  const env = { CHIAVE_ACCESSO: 'test-only-dispositivi', VENDITA: '1' };
  const ar = new Archivio({ storage }, env);
  env.ARCHIVIO = { idFromName: () => 'test', get: () => ({ fetch: (url, init) => ar.fetch(new Request(url, init)) }) };
  const api = async (b, p, body, extra = {}) => {
    const pending = [];
    const headers = { cookie: [...b.cookies].map(([k, v]) => k + '=' + v).join('; '), 'user-agent': b.nome, ...extra };
    if (body !== undefined) { headers['content-type'] ??= 'application/json'; headers.origin ??= origine; }
    const req = new Request(origine + p, { method: body === undefined ? 'GET' : 'POST', headers, ...(body === undefined ? {} : { body: JSON.stringify(body) }) });
    const r = await worker.fetch(req, env, { waitUntil(p) { pending.push(p); } });
    await Promise.all(pending);
    b.ricevi(r);
    return r;
  };
  const registrati = async (e = email) => { const b = new Browser(); const r = await api(b, '/api/registrati', { email: e, password, nome: 'Studente' }); assert.equal(r.status, 200); return b; };
  const accedi = (b, e = email, p = password) => api(b, '/api/accedi', { email: e, password: p });
  const dispositivi = (e = email) => db.prepare('SELECT * FROM dispositivi WHERE email = ? ORDER BY id').all(e);
  const tre = async () => { const a = await registrati(), b = new Browser('Android Chrome'), c = new Browser('Mac Safari'); assert.equal((await accedi(b)).status, 200); assert.equal((await accedi(c)).status, 200); return [a, b, c]; };
  return { db, env, ar, api, registrati, accedi, dispositivi, tre, avanza(ms) { ora += ms; } };
}

test('elenco privato, dispositivo corrente riconoscibile e scollegamento selettivo', async (t) => {
  const b = banco(t), [corrente, remoto, terzo] = await b.tre();
  const list = await b.api(corrente, '/api/dispositivi');
  assert.match(list.headers.get('cache-control'), /no-store/);
  const d = await list.json();
  assert.equal(d.max, 3); assert.equal(d.dispositivi.length, 3);
  assert.equal(d.dispositivi.filter(x => x.questo).length, 1);
  assert.ok(d.dispositivi.every(x => x.id && x.nome && x.creato && x.ultimo_uso));
  assert.ok(d.dispositivi.every(x => !Object.hasOwn(x, 'nonce')));
  const id = remoto.cookies.get('dispositivo');
  assert.equal((await b.api(corrente, '/api/dispositivi/scollega', { id })).status, 200);
  assert.equal((await b.api(remoto, '/api/io')).status, 401);
  assert.equal((await b.api(corrente, '/api/io')).status, 200);
  assert.equal((await b.api(terzo, '/api/io')).status, 200);
  assert.equal(b.dispositivi().length, 2);
});

test('non scollega il corrente, altri account, richieste estranee o form semplici', async (t) => {
  const b = banco(t), [corrente, remoto] = await b.tre(), altro = await b.registrati('altro@test.invalid');
  const id = remoto.cookies.get('dispositivo');
  assert.equal((await b.api(new Browser(), '/api/dispositivi')).status, 401);
  assert.equal((await b.api(corrente, '/api/dispositivi/scollega', { id: corrente.cookies.get('dispositivo') })).status, 409);
  assert.equal((await b.api(corrente, '/api/dispositivi/scollega', { id: altro.cookies.get('dispositivo'), email: 'altro@test.invalid' })).status, 409);
  assert.equal((await b.api(corrente, '/api/dispositivi/scollega', { id }, { origin: 'https://altro.invalid' })).status, 403);
  assert.equal((await b.api(corrente, '/api/dispositivi/scollega', { id }, { 'content-type': 'text/plain' })).status, 403);
  assert.equal((await b.api(corrente, '/api/dispositivi/scollega', { id }, { 'sec-fetch-site': 'cross-site' })).status, 403);
  assert.equal((await b.api(corrente, '/api/dispositivi/scollega', { id: '' })).status, 400);
  assert.equal(b.dispositivi().length, 3); assert.equal(b.dispositivi('altro@test.invalid').length, 1);
});

test('la vecchia sessione revocata non si riattiva dopo un nuovo accesso nello stesso browser', async (t) => {
  const b = banco(t), [corrente, remoto] = await b.tre(), vecchio = remoto.copia();
  const id = remoto.cookies.get('dispositivo');
  await b.api(corrente, '/api/dispositivi/scollega', { id });
  assert.equal((await b.accedi(remoto)).status, 200);
  assert.equal(remoto.cookies.get('dispositivo'), id);
  assert.equal((await b.api(vecchio, '/api/io')).status, 401);
  assert.equal((await b.api(vecchio, '/api/dispositivi/scollega', { id: corrente.cookies.get('dispositivo') })).status, 401);
  await b.api(vecchio, '/api/esci', {});
  assert.equal((await b.api(remoto, '/api/io')).status, 200);
});

test('mantiene le sessioni legacy e cambia generazione quando la riga viene ricreata', async (t) => {
  const b = banco(t), corrente = await b.registrati();
  const id = 'd'.repeat(32);
  b.db.prepare('INSERT INTO dispositivi (email,id,nome,creato,ultimo_uso) VALUES (?,?,?,?,?)').run(email,id,'Legacy',new Date().toISOString(),Date.now());
  const legacy = new Browser(); legacy.cookies.set('dispositivo',id);
  legacy.cookies.set('sessione',encodeURIComponent(await firmaToken(b.env,{e:email,v:1,d:id,t:Date.now()})));
  assert.equal((await b.api(legacy,'/api/io')).status,200);
  const vecchio = legacy.copia();
  await b.api(corrente,'/api/dispositivi/scollega',{id});
  assert.equal((await b.accedi(legacy)).status,200);
  assert.equal((await b.api(vecchio,'/api/io')).status,401);
  assert.equal((await b.api(legacy,'/api/io')).status,200);
});

test('il quarto accesso corretto offre solo gestione limitata, poi sostituisce un dispositivo', async (t) => {
  const b = banco(t), [uno, due, tre] = await b.tre(), nuovo = new Browser('iPhone Safari');
  const login = await b.accedi(nuovo), cookies = login.headers.getSetCookie();
  assert.equal(login.status, 403);
  const d = await login.json();
  assert.equal(d.limite, true); assert.equal(d.gestione, true); assert.equal(d.dispositivi.length, 3);
  assert.ok(d.dispositivi.every(x => x.questo === false && x.id));
  assert.ok(cookies.some(x => x.startsWith('gestione_dispositivi=') && /HttpOnly/.test(x) && /Secure/.test(x) && /SameSite=Strict/.test(x) && /Max-Age=300/.test(x)));
  assert.ok(!nuovo.cookies.has('sessione'));
  assert.equal((await b.api(nuovo, '/api/io')).status, 401);
  assert.equal((await b.api(nuovo, '/api/dispositivi')).status, 401);
  assert.equal((await b.api(nuovo, '/api/dispositivi?gestione=1')).status, 200);
  assert.equal((await b.api(nuovo, '/api/dispositivi/scollega', { id: due.cookies.get('dispositivo') })).status, 401);
  const replay = nuovo.copia();
  const r = await b.api(nuovo, '/api/dispositivi/sostituisci', { id: due.cookies.get('dispositivo') });
  assert.equal(r.status, 200); assert.ok(nuovo.cookies.has('sessione')); assert.ok(!nuovo.cookies.has('gestione_dispositivi'));
  assert.equal((await b.api(nuovo, '/api/io')).status, 200);
  assert.equal((await b.api(due, '/api/io')).status, 401);
  assert.equal((await b.api(uno, '/api/io')).status, 200); assert.equal((await b.api(tre, '/api/io')).status, 200);
  assert.equal((await b.api(replay, '/api/dispositivi/sostituisci', { id: tre.cookies.get('dispositivo') })).status, 401);
  assert.equal(b.dispositivi().length, 3);
});

test('password errata non rivela dispositivi né rilascia grant; grant non vale come sessione', async (t) => {
  const b = banco(t); await b.tre();
  const nuovo = new Browser(), r = await b.accedi(nuovo,email,'sbagliata');
  assert.equal(r.status,401); assert.ok(!nuovo.cookies.has('gestione_dispositivi')); assert.ok(!Object.hasOwn(await r.json(),'dispositivi'));
  await b.accedi(nuovo);
  nuovo.cookies.set('sessione',nuovo.cookies.get('gestione_dispositivi'));
  assert.equal((await b.api(nuovo,'/api/io')).status,401);
});

test('grant scaduto o invalidato dal cambio password non modifica gli accessi', async (t) => {
  const b = banco(t), [uno] = await b.tre(), nuovo = new Browser();
  await b.accedi(nuovo);
  const id=uno.cookies.get('dispositivo');
  b.avanza(300001);
  let r=await b.api(nuovo,'/api/dispositivi/sostituisci',{id});
  assert.equal(r.status,401); assert.equal((await r.json()).scaduto,true); assert.equal(b.dispositivi().length,3);
  await b.accedi(nuovo);
  b.db.prepare('UPDATE utenti SET versione=versione+1 WHERE email=?').run(email);
  r=await b.api(nuovo,'/api/dispositivi/sostituisci',{id});
  assert.equal(r.status,401); assert.equal(b.dispositivi().length,3);
});

test('concorrenza sullo stesso dispositivo: un successo e un refresh, senza superare tre', async (t) => {
  const b=banco(t), [uno]=await b.tre(), a=new Browser(), c=new Browser();
  await b.accedi(a); await b.accedi(c);
  const id=uno.cookies.get('dispositivo');
  const r=await Promise.all([b.api(a,'/api/dispositivi/sostituisci',{id}),b.api(c,'/api/dispositivi/sostituisci',{id})]);
  assert.deepEqual(r.map(x=>x.status).sort(),[200,409]);
  assert.equal((await r.find(x=>x.status===409).json()).aggiorna,true);
  assert.equal(b.dispositivi().length,3);
});

test('sostituzione fallita ripristina il vecchio dispositivo e conserva il grant per riprovare', async (t) => {
  const b=banco(t), [uno]=await b.tre(), nuovo=new Browser(); await b.accedi(nuovo);
  const candidato=nuovo.cookies.get('dispositivo'), id=uno.cookies.get('dispositivo');
  b.db.exec(`CREATE TRIGGER blocca_candidato BEFORE INSERT ON dispositivi WHEN NEW.id='${candidato}' BEGIN SELECT RAISE(ABORT,'errore simulato'); END`);
  const r=await b.api(nuovo,'/api/dispositivi/sostituisci',{id});
  assert.equal(r.status,503); assert.equal((await r.json()).riprova,true);
  assert.ok(b.dispositivi().some(x=>x.id===id)); assert.equal(b.dispositivi().length,3);
  b.db.exec('DROP TRIGGER blocca_candidato');
  assert.equal((await b.api(nuovo,'/api/dispositivi/sostituisci',{id})).status,200);
});

test('target di un altro account o mancante conserva il grant e consente una nuova scelta', async (t) => {
  const b=banco(t), [uno]=await b.tre(), altro=await b.registrati('altro@test.invalid'), nuovo=new Browser(); await b.accedi(nuovo);
  for(const id of [altro.cookies.get('dispositivo'),'f'.repeat(32)]) {
    const r=await b.api(nuovo,'/api/dispositivi/sostituisci',{id}); assert.equal(r.status,409); assert.equal((await r.json()).aggiorna,true);
  }
  assert.equal((await b.api(nuovo,'/api/dispositivi/sostituisci',{id:uno.cookies.get('dispositivo')})).status,200);
  assert.equal(b.dispositivi('altro@test.invalid').length,1);
});

test('il refresh del limite resta legato al grant anche con una sessione di un altro account', async (t) => {
  const b=banco(t), [uno]=await b.tre(), browser=await b.registrati('altro@test.invalid');
  const altroId=browser.cookies.get('dispositivo');
  const r=await b.accedi(browser,email);
  assert.equal(r.status,403);
  const lista=await (await b.api(browser,'/api/dispositivi?gestione=1')).json();
  assert.equal(lista.gestione,true); assert.equal(lista.dispositivi.length,3);
  assert.ok(lista.dispositivi.every(d=>d.id!==altroId));
  const accountA=await (await b.api(browser,'/api/dispositivi')).json();
  assert.equal(accountA.dispositivi.length,1); assert.equal(accountA.dispositivi[0].id,altroId);
  assert.equal((await b.api(browser,'/api/dispositivi/sostituisci',{id:uno.cookies.get('dispositivo')})).status,200);
  assert.equal((await (await b.api(browser,'/api/io')).json()).email,email);
  assert.equal((await b.api(browser,'/api/dispositivi?gestione=1')).status,401);
});

test('il cambio password conserva il nonce del corrente e invalida le altre sessioni', async (t) => {
  const b=banco(t), [uno,due]=await b.tre();
  const prima=uno.copia(), id=uno.cookies.get('dispositivo');
  const nonce=b.dispositivi().find(d=>d.id===id).nonce;
  const r=await b.api(uno,'/api/password',{attuale:password,nuova:'nuova-password-solo-test'});
  assert.equal(r.status,200);
  assert.equal(b.dispositivi().find(d=>d.id===id).nonce,nonce);
  assert.equal((await b.api(uno,'/api/io')).status,200);
  assert.equal((await b.api(prima,'/api/io')).status,401);
  assert.equal((await b.api(due,'/api/io')).status,401);
});

test('sessione A revocata e grant B: elenco account negato, gestione limitata riferita soltanto a B', async (t) => {
  const b=banco(t); await b.tre();
  const browser=await b.registrati('altro@test.invalid');
  const idA=browser.cookies.get('dispositivo');
  assert.equal((await b.accedi(browser,email)).status,403);
  b.db.prepare('DELETE FROM dispositivi WHERE email=? AND id=?').run('altro@test.invalid',idA);
  const account=await b.api(browser,'/api/dispositivi');
  assert.equal(account.status,401); assert.equal((await account.json()).scaduto,true);
  const gestione=await b.api(browser,'/api/dispositivi?gestione=1');
  assert.equal(gestione.status,200);
  const lista=await gestione.json();
  assert.equal(lista.gestione,true); assert.equal(lista.dispositivi.length,3);
  assert.ok(lista.dispositivi.every(d=>d.id!==idA));
});

test('un cambio account in un’altra scheda non scollega un ID condiviso dal conto sbagliato', async (t) => {
  const b=banco(t), corrente=await b.registrati(), remoto=new Browser('Android Chrome');
  await b.accedi(remoto);
  const id=remoto.cookies.get('dispositivo');
  const prima=await (await b.api(corrente,'/api/dispositivi')).json();
  assert.equal(prima.email,email);
  await b.registrati('altro@test.invalid');
  await b.accedi(corrente,'altro@test.invalid');
  await b.accedi(remoto,'altro@test.invalid');
  assert.ok(b.dispositivi(email).some(d=>d.id===id));
  assert.ok(b.dispositivi('altro@test.invalid').some(d=>d.id===id));
  const r=await b.api(corrente,'/api/dispositivi/scollega',{id,account:prima.email});
  assert.equal(r.status,409);
  const errore=await r.json();
  assert.equal(errore.codice,'account'); assert.equal(errore.aggiorna,true);
  assert.ok(b.dispositivi(email).some(d=>d.id===id));
  assert.ok(b.dispositivi('altro@test.invalid').some(d=>d.id===id));
  assert.equal((await (await b.api(corrente,'/api/dispositivi')).json()).email,'altro@test.invalid');
});
