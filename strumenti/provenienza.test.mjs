import test, { after } from 'node:test';
import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';
import {
  FONTI_CHATGPT, INIZIO_CAMPAGNA_CHATGPT, COOKIE_ATTRIBUZIONE, TESTI_PROVENIENZA,
  fonteIngresso, fonteStorica, fonteIscrizione, cookieAttribuzione,
} from '../worker/provenienza.mjs';
import { paginaAdmin } from '../worker/admin.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const temp = mkdtempSync(join(tmpdir(), 'provenienza-'));
const entry = join(temp, 'entry.mjs'), bundle = join(temp, 'bundle.mjs');
writeFileSync(entry, `export { Archivio, default as worker } from ${JSON.stringify(join(root, 'worker/index.mjs'))};`);
execFileSync(process.execPath, [join(root, 'node_modules/rolldown/bin/cli.mjs'), entry,
  '--file', bundle, '--format', 'esm', '--platform', 'node', '--logLevel', 'silent'], { cwd: root });
const { Archivio, worker } = await import(pathToFileURL(bundle));
after(() => rmSync(temp, { recursive: true, force: true }));

const origine = 'https://ripetizionidianalisi.com';
function richiesta(percorso = '/', headers = {}) {
  return new Request(origine + percorso, { headers: { 'user-agent': 'Mozilla/5.0', ...headers } });
}
function fonte(percorso, headers) {
  const req = richiesta(percorso, headers);
  return fonteIngresso(req, new URL(req.url));
}

test('riconosce pubblicità ChatGPT da UTM e oppref, anche dopo un reindirizzamento interno', () => {
  for (const [percorso, headers] of [
    ['/?oppref=riferimento-di-prova', {}],
    ['/?utm_source=chatgpt-ads&utm_medium=cpc', {}],
    ['/?utm_source=chatgpt.com&utm_medium=paid_search', {}],
    ['/?utm_medium=cpc', { referer: 'https://chatgpt.com/' }],
    ['/en?oppref=prova', { referer: origine + '/' }],
  ]) assert.equal(fonte(percorso, headers), FONTI_CHATGPT.ads);
  assert.equal(fonte('/?utm_source=chatgpt-ads', { 'user-agent': 'Googlebot' }), null);
  assert.equal(fonte('/?oppref=', { referer: 'https://chatgpt.com/' }), FONTI_CHATGPT.organico);
});

test('normalizza ChatGPT web e app e conserva le altre provenienze', () => {
  assert.equal(fonte('/?utm_source=chatgpt.com'), FONTI_CHATGPT.organico);
  assert.equal(fonte('/en?utm_source=chatgpt.com', { referer: origine }), FONTI_CHATGPT.organico);
  assert.equal(fonte('/', { referer: 'https://chatgpt.com/c/esempio' }), FONTI_CHATGPT.organico);
  assert.equal(fonte('/', { referer: 'android-app://com.openai.chatgpt' }), FONTI_CHATGPT.organico);
  assert.equal(fonte('/capitolo', { referer: origine }), null);
  assert.equal(fonte('/?gclid=prova'), 'Google Ads');
  assert.equal(fonte('/?utm_source=ig'), 'Instagram');
  assert.equal(fonte('/'), 'Diretto o app');
});

test('distingue lo storico precedente alla campagna e conserva i casi incerti', () => {
  assert.equal(fonteStorica('chatgpt.com', '2026-11-07'), FONTI_CHATGPT.organico);
  assert.equal(fonteStorica('chatgpt.com', '2026-11-08'), FONTI_CHATGPT.incerto);
  assert.equal(fonteStorica('chatgpt.com', '2026-11-08T20:00:00.000Z'), FONTI_CHATGPT.organico);
  assert.equal(fonteStorica('chatgpt.com', INIZIO_CAMPAGNA_CHATGPT), FONTI_CHATGPT.incerto);
  assert.equal(fonteStorica('com.openai.chatgpt', '2026-11-13'), FONTI_CHATGPT.incerto);
  assert.equal(fonteStorica('chatgpt.com'), FONTI_CHATGPT.incerto);
  assert.equal(fonteStorica('chatgpt.com', 'errata'), FONTI_CHATGPT.incerto);
  assert.equal(fonteStorica('chatgpt-ads', '2026-11-15'), FONTI_CHATGPT.ads);
  assert.equal(fonteStorica(FONTI_CHATGPT.ads), FONTI_CHATGPT.ads);
});

test('l’ultimo ingresso riconosciuto prevale sul primo, con scadenza e ritorni diretti', () => {
  const ora = Date.parse('2026-11-15T12:00:00.000Z');
  const cookie = cookieAttribuzione(FONTI_CHATGPT.ads, ora).split(';')[0];
  assert.equal(fonteIscrizione(richiesta('/', { cookie }), 'Instagram', ora + 1000), FONTI_CHATGPT.ads);
  assert.equal(cookieAttribuzione('Diretto o app', ora), null);
  assert.equal(fonteIscrizione(richiesta('/', { cookie }), 'chatgpt.com', ora + 91 * 86400000), FONTI_CHATGPT.incerto);
  for (const valore of ['%zz', '{}', encodeURIComponent(JSON.stringify({ fonte: FONTI_CHATGPT.ads, t: ora + 100 }))]) {
    assert.equal(fonteIscrizione(richiesta('/', { cookie: COOKIE_ATTRIBUZIONE + '=' + valore }), 'Google', ora), 'Google');
  }
  assert.match(cookieAttribuzione(FONTI_CHATGPT.ads, ora), /HttpOnly; Secure; SameSite=Lax$/);
});

function banco(t, precedente = false) {
  const db = new DatabaseSync(':memory:');
  t.after(() => db.close());
  if (precedente) db.exec('CREATE TABLE utenti(email TEXT PRIMARY KEY, hash TEXT, sale TEXT, iterazioni INTEGER, versione INTEGER DEFAULT 1, falliti INTEGER DEFAULT 0, bloccato_fino INTEGER DEFAULT 0, creato TEXT, ultimo_accesso TEXT, fonte TEXT)');
  const storage = {
    sql: { exec(sql, ...args) {
      if (!args.length && !/^\s*SELECT/i.test(sql)) { db.exec(sql); return []; }
      const statement = db.prepare(sql);
      return statement.columns().length ? statement.all(...args) : (statement.run(...args), []);
    } },
    transactionSync(fn) {
      db.exec('BEGIN');
      try { const r = fn(); db.exec('COMMIT'); return r; }
      catch (e) { db.exec('ROLLBACK'); throw e; }
    },
    getAlarm: async () => null, setAlarm: async () => {},
  };
  const env = { CHIAVE_ACCESSO: 'provenienza-solo-test', VENDITA: '1' };
  const archivio = new Archivio({ storage }, env);
  env.ARCHIVIO = { idFromName: () => 'test', get: () => ({ fetch: (url, init) => archivio.fetch(new Request(url, init)) }) };
  const chiama = async (path, body) => {
    const response = await archivio.fetch(new Request('https://archivio' + path, body ? {
      method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body),
    } : {}));
    return response.json();
  };
  return { db, storage, archivio, env, chiama };
}

test('migrazione ripetibile e riepiloghi distinti per 7, 30 e 90 giorni', async (t) => {
  const b = banco(t, true);
  new Archivio({ storage: b.storage }, b.env);
  const oggi = new Date().toISOString().slice(0, 10);
  const data = (prima) => new Date(Date.now() - prima * 86400000).toISOString();
  const inserisci = b.db.prepare('INSERT INTO utenti(email,fonte,fonte_conversione,creato) VALUES (?,?,?,?)');
  inserisci.run('ads@test.invalid', 'Instagram', FONTI_CHATGPT.ads, data(0));
  inserisci.run('vecchio@test.invalid', 'Google', 'Google', data(40));
  inserisci.run('organico@test.invalid', FONTI_CHATGPT.organico, null, data(13));
  inserisci.run('incerto@test.invalid', FONTI_CHATGPT.incerto, null, data(2));
  const acquisto = b.db.prepare('INSERT INTO acquisti(email,materia,importo,valuta,transazione,creato) VALUES (?,?,?,?,?,?)');
  acquisto.run('ads@test.invalid', 'analisi-1', 49, 'EUR', 'prova-1', data(0));
  acquisto.run('ads@test.invalid', 'analisi-2', 55, 'EUR', 'prova-2', data(0));
  acquisto.run('ads@test.invalid', 'fisica-1', 90, 'USD', 'prova-3', data(0));
  acquisto.run('vecchio@test.invalid', 'analisi-1', 49, 'EUR', 'prova-4', data(0));
  await b.chiama('/visita', { giorno: oggi, sezione: 'home', fonte: 'chatgpt-ads' });
  await b.chiama('/visita', { giorno: data(13).slice(0, 10), sezione: 'home', fonte: FONTI_CHATGPT.organico });
  const dati = await b.chiama('/dati');
  const fonti = (periodo) => Object.fromEntries(dati.provenienze[periodo].map((r) => [r.fonte, r]));
  assert.deepEqual(fonti(7)[FONTI_CHATGPT.ads], { fonte: FONTI_CHATGPT.ads, iscritti: 1, paganti: 1, incasso: 104 });
  assert.equal(fonti(7).Google.iscritti, 0);
  assert.equal(fonti(7).Google.paganti, 1);
  assert.equal(fonti(30)[FONTI_CHATGPT.organico].iscritti, 1);
  assert.equal(fonti(30)[FONTI_CHATGPT.incerto].iscritti, 1);
  assert.equal(fonti(90).Google.iscritti, 1);
  assert.equal(dati.utenti.find((u) => u.email === 'ads@test.invalid').primaFonte, 'Instagram');
  assert.equal(dati.utenti.find((u) => u.email === 'ads@test.invalid').fonte, FONTI_CHATGPT.ads);
  assert.equal(dati.ingressi.find((r) => r.giorno === data(13).slice(0, 10)).fonte, FONTI_CHATGPT.organico);
});

test('pagina, cookie e registrazione usano il flusso normale anche dopo una prima visita Instagram', async (t) => {
  const b = banco(t);
  class RiscritturaHTML {
    on() { return this; }
    transform(response) { return response; }
  }
  const precedente = Object.getOwnPropertyDescriptor(globalThis, 'HTMLRewriter');
  Object.defineProperty(globalThis, 'HTMLRewriter', { value: RiscritturaHTML, configurable: true });
  t.after(() => precedente ? Object.defineProperty(globalThis, 'HTMLRewriter', precedente) : delete globalThis.HTMLRewriter);
  b.env.ASSETS = { fetch: async () => new Response('<!doctype html><html><body>Prova</body></html>', { headers: { 'content-type': 'text/html' } }) };
  const cookies = new Map([['fonte', 'Instagram']]);
  async function apri(path, extra = {}, body) {
    const attese = [];
    const headers = { 'user-agent': 'Mozilla/5.0', cookie: [...cookies].map(([k, v]) => `${k}=${v}`).join('; '), ...extra };
    if (body) Object.assign(headers, { origin: origine, 'content-type': 'application/json' });
    const req = new Request(origine + path, { method: body ? 'POST' : 'GET', headers, ...(body ? { body: JSON.stringify(body) } : {}) });
    const res = await worker.fetch(req, b.env, { waitUntil(p) { attese.push(p); } });
    await Promise.all(attese);
    for (const value of res.headers.getSetCookie()) {
      const [coppia] = value.split(';');
      const posizione = coppia.indexOf('=');
      cookies.set(coppia.slice(0, posizione), coppia.slice(posizione + 1));
    }
    return res;
  }
  assert.equal((await apri('/?utm_source=chatgpt-ads&utm_medium=cpc&utm_campaign=lezioni')).status, 200);
  const adsCookie = cookies.get(COOKIE_ATTRIBUZIONE);
  assert.ok(adsCookie);
  await apri('/accedi', { referer: origine + '/' });
  assert.equal(cookies.get(COOKIE_ATTRIBUZIONE), adsCookie);
  await apri('/');
  assert.equal(cookies.get(COOKIE_ATTRIBUZIONE), adsCookie);
  const registrazione = await apri('/api/registrati', {}, { email: 'flusso@test.invalid', password: 'password-di-prova', nome: 'Prova', lingua: 'it' });
  assert.equal(registrazione.status, 200);
  const utente = b.db.prepare('SELECT fonte,fonte_conversione FROM utenti WHERE email=?').get('flusso@test.invalid');
  assert.deepEqual({ ...utente }, { fonte: 'Instagram', fonte_conversione: FONTI_CHATGPT.ads });
  assert.equal(b.db.prepare('SELECT SUM(n) AS n FROM ingressi WHERE fonte=?').get(FONTI_CHATGPT.ads).n, 1);
});

test('la pagina amministrativa incorpora i testi italiani e inglesi senza riferimenti esterni mancanti', () => {
  for (const lingua of ['it', 'en']) {
    const html = paginaAdmin([], [], lingua);
    assert.match(html, new RegExp(`<html lang="${lingua}">`));
    assert.ok(html.includes(TESTI_PROVENIENZA[lingua].titolo));
    assert.ok(html.includes('tabellaProvenienze'));
    const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
    assert.doesNotThrow(() => new Function(script));
    assert.ok(!script.includes('Iscritti da sempre con questa provenienza'));
  }
});

test('la campagna del link resta nel cookie e viene letta all’iscrizione', async () => {
  const { cookieCampagna, campagnaIscrizione } = await import('../worker/provenienza.mjs');
  const ora = Date.parse('2026-11-17T12:00:00Z');
  const cookie = cookieCampagna('120252248678190156', ora);
  assert.match(cookie, /^campagna-conversione=/);
  assert.match(cookie, /HttpOnly; Secure; SameSite=Lax$/);
  const req = (c) => new Request('https://sito.test/', { headers: { cookie: c } });
  assert.equal(campagnaIscrizione(req(cookie.split(';')[0]), ora + 86400000), '120252248678190156');
  assert.equal(campagnaIscrizione(req(cookie.split(';')[0]), ora + 91 * 86400000), null);
  assert.equal(campagnaIscrizione(req('campagna-conversione=%7B%22c%22%3A%22%3Cscript%3E%22%2C%22t%22%3A1%7D'), ora), null);
  assert.equal(cookieCampagna(null, ora), null);
  assert.equal(cookieCampagna('Nome Con Spazi', ora), null);
});

test('la spesa di Meta si legge per campagna e senza chiave resta spenta', async () => {
  const { speseMeta, azzeraSpeseMeta } = await import('../worker/meta-ads.mjs');
  assert.deepEqual(await speseMeta({}), { collegato: false });
  const chiamate = [];
  const finto = async (url, opz) => {
    chiamate.push({ url: String(url), opz });
    return Response.json({ data: [{ campaign_id: '120252248678190156', campaign_name: 'Post di Instagram: Compito', spend: '156.12' }] });
  };
  const env = { META_ADS_TOKEN: 'chiave-di-prova', META_ADS_ACCOUNT: '206104238102726' };
  azzeraSpeseMeta();
  const d = await speseMeta(env, Date.parse('2026-11-17T12:00:00Z'), finto);
  assert.equal(d.collegato, true);
  assert.deepEqual(d[30], [{ campagna: '120252248678190156', nome: 'Post di Instagram: Compito', speso: 156.12 }]);
  assert.equal(chiamate.length, 3);
  assert.ok(chiamate.every((c) => !c.url.includes('chiave-di-prova') && c.opz.headers.authorization === 'Bearer chiave-di-prova'));
  assert.match(decodeURIComponent(chiamate[1].url), /"since":"2026-10-19","until":"2026-11-17"/);
  azzeraSpeseMeta();
  const e = await speseMeta(env, Date.now(), async () => Response.json({ error: { message: 'no' } }, { status: 400 }));
  assert.deepEqual(e, { collegato: true, errore: true });
  azzeraSpeseMeta();
});
