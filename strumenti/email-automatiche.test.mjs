import test, { after } from 'node:test';
import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';

const root = fileURLToPath(new URL('../', import.meta.url));
const tmp = mkdtempSync(join(tmpdir(), 'email-automatiche-'));
const entry = join(tmp, 'entry.mjs'), bundle = join(tmp, 'bundle.mjs');
writeFileSync(entry, `export { Archivio, firmaToken, default as worker } from ${JSON.stringify(join(root, 'worker/index.mjs'))};`);
execFileSync(process.execPath, [join(root, 'node_modules/rolldown/bin/cli.mjs'), entry, '--file', bundle, '--format', 'esm', '--platform', 'node', '--logLevel', 'silent'], { cwd: root });
const { Archivio, firmaToken, worker } = await import(pathToFileURL(bundle));
after(() => rmSync(tmp, { recursive: true, force: true }));

const GIORNO = 86400000;
const SITO = 'https://ripetizionidianalisi.com';
const PROVE = { 'analisi-1': { titolo: 'Limiti di rapporti di polinomi', href: '/analisi-1/limiti/esercizi-svolti/1' } };

function banco(t) {
  const db = new DatabaseSync(':memory:');
  t.after(() => db.close());
  let ora = Date.parse('2026-11-09T16:30:00Z');
  t.mock.method(Date, 'now', () => ora);
  const state = { storage: {
    sql: { exec(q, ...p) {
      if (!p.length && !/^\s*SELECT/i.test(q)) { db.exec(q); return []; }
      const statement = db.prepare(q);
      return statement.columns().length ? statement.all(...p) : Object.assign([], { rowsWritten: Number(statement.run(...p).changes) });
    } },
    getAlarm: async () => null,
    setAlarm: async () => {},
  } };
  const env = { RESEND_API_KEY: 'resend-simulato', STRIPE_SECRET_KEY: 'stripe-simulato', CHIAVE_ACCESSO: 'chiave-simulata', ADMIN_PASSWORD: 'admin-simulata' };
  const ar = new Archivio(state, env);
  env.ARCHIVIO = { idFromName: () => 'locale', get: () => ({ fetch: (url, opts) => ar.fetch(new Request(url, opts)) }) };
  const ctx = { waitUntil() {} };
  const api = async (path, body = {}) => {
    const r = await ar.fetch(new Request('https://archivio' + path, { method: 'POST', body: JSON.stringify(body) }));
    assert.equal(r.status, 200);
    return r.json();
  };
  const utente = (email, creato = ora, attivo = creato) =>
    db.prepare('INSERT INTO utenti (email, nome, hash, lingua, creato, attivo) VALUES (?, ?, ?, ?, ?, ?)').run(email, 'Andrea', 'hash', 'it', new Date(creato).toISOString(), attivo);
  const studia = (email, ultimo = ora) =>
    db.prepare('INSERT INTO sessioni (email, inizio, ultimo, materia, argomento) VALUES (?, ?, ?, ?, ?)').run(email, ultimo - 60000, ultimo, 'analisi-1', 'limiti');
  const compra = (email, materia, quando = ora) =>
    db.prepare('INSERT INTO acquisti (email, materia, creato) VALUES (?, ?, ?)').run(email, materia, new Date(quando).toISOString());
  const conferma = async (email) => {
    const { token } = await api('/em-salva', { email, offerte: true, materia: 'analisi-1' });
    const firma = await firmaToken(env, { scopo: 'conferma-offerte-email', r: email, c: token, l: 'it', exp: ora + GIORNO });
    return SITO + '/email/conferma?t=' + encodeURIComponent(firma);
  };
  const apri = (url, method = 'GET', headers = {}) => worker.fetch(new Request(url, { method, headers }), env, ctx);
  const cron = (giornaliero = true) => api('/em-esegui', { giornaliero, catalogo: { 'analisi-1': ['limiti'] }, prove: PROVE });
  const invii = [];
  let erroreInvio = null;
  t.mock.method(globalThis, 'fetch', async (url, op) => {
    if (url === 'https://api.resend.com/emails') {
      invii.push({ ...JSON.parse(op.body), key: op.headers['Idempotency-Key'] });
      return Response.json({ id: 'mail-' + invii.length }, { status: erroreInvio || 200 });
    }
    if (url.startsWith('https://api.resend.com/emails/mail-')) return Response.json({ last_event: 'delivered' });
    throw new Error('URL inatteso ' + url);
  });
  return { db, env, riapri: () => new Archivio(state, env), utente, studia, compra, conferma, apri, cron, api, invii,
    get ora() { return ora; }, avanza(ms) { ora += ms; }, errore(stato) { erroreInvio = stato; } };
}

test('prima prova solo dopo doppia conferma e senza studio già iniziato', async (t) => {
  const b = banco(t), email = 'andrea@esempio.test', altro = 'elena@esempio.test';
  b.utente(email, b.ora - 2 * GIORNO);
  b.utente(altro, b.ora - 2 * GIORNO);
  b.studia(altro);
  const link = await b.conferma(email), altroLink = await b.conferma(altro);
  assert.equal((await b.apri(link)).status, 200);
  assert.equal((await b.api('/em-preferenze', { email })).offerte, false);
  await b.cron();
  assert.equal(b.invii.length, 0);
  assert.equal((await b.apri(link, 'POST')).status, 200);
  assert.equal((await b.apri(altroLink, 'POST')).status, 200);
  assert.equal((await b.apri(link, 'POST')).status, 400);
  await b.cron();
  assert.equal(b.invii.length, 1);
  assert.deepEqual(b.invii[0].to, [email]);
  assert.match(b.invii[0].text, /analisi-1\/limiti\/esercizi-svolti\/1/);
  const no = b.invii[0].headers['List-Unsubscribe'].slice(1, -1);
  assert.equal((await b.apri(no)).status, 200);
  assert.equal((await b.api('/em-preferenze', { email })).offerte, true);
  assert.equal((await b.apri(no, 'POST')).status, 200);
  assert.equal((await b.api('/em-preferenze', { email })).offerte, false);
  await b.cron();
  assert.equal(b.invii.length, 1);
  const stato = await b.api('/em-dashboard');
  assert.equal(stato.revoche, 1);
  assert.equal(stato.flussi.find((f) => f.tipo === 'prima-prova').consegnate, 1);
});

test('richiami al giorno 3 e 10, con stop al rientro e deduplicazione', async (t) => {
  const b = banco(t), email = 'andrea@esempio.test', torna = 'elena@esempio.test', attivo = b.ora - 3 * GIORNO;
  for (const e of [email, torna]) { b.utente(e, attivo, attivo); b.studia(e, attivo); }
  await b.cron(); await b.cron();
  assert.deepEqual(b.invii.map((m) => m.to[0]), [email, torna]);
  b.db.prepare('UPDATE utenti SET attivo = ? WHERE email = ?').run(b.ora + 6 * GIORNO, torna);
  b.avanza(7 * GIORNO);
  await b.cron(); await b.cron();
  assert.deepEqual(b.invii.map((m) => m.to[0]), [email, torna, email]);
  assert.match(b.invii[2].text, /analisi-1\/limiti\/domande/);
  b.avanza(5 * GIORNO); await b.cron();
  assert.equal(b.invii.length, 3);
});

test('offerta limitata ad Analisi 2, attribuita una sola volta e assente per chi la possiede', async (t) => {
  const b = banco(t), email = 'andrea@esempio.test', altro = 'elena@esempio.test', senza = 'marco@esempio.test';
  for (const e of [email, altro, senza]) b.utente(e);
  for (const e of [email, altro, senza]) b.compra(e, 'analisi-1');
  b.compra(altro, 'analisi-2');
  b.avanza(GIORNO);
  for (const e of [email, altro]) await b.apri(await b.conferma(e), 'POST');
  b.avanza(6 * GIORNO);
  await b.cron(); await b.cron();
  assert.equal(b.invii.length, 1);
  assert.deepEqual(b.invii[0].to, [email]);
  assert.match(b.invii[0].text, /46,75/);
  const offerta = await b.api('/em-offerta', { email, materia: 'analisi-2' });
  assert.match(offerta.id, /^STUDIO-/);
  assert.equal(offerta.scade, b.ora + 7 * GIORNO);
  assert.equal(offerta.percentuale, 15);
  assert.deepEqual(await b.api('/em-offerta', { email: altro, materia: 'analisi-2' }), {});
  assert.deepEqual(await b.api('/em-offerta', { email, materia: 'analisi-1' }), {});
  for (let i = 0; i < 2; i++) await b.api('/em-acquisto', { email, materia: 'analisi-2', sconto: offerta.id, transazione: 'transazione' });
  assert.deepEqual(await b.api('/em-offerta', { email, materia: 'analisi-2' }), {});
  assert.equal((await b.api('/em-dashboard')).flussi.find((f) => f.tipo === 'seconda-materia').acquisti, 1);
});

test('un errore temporaneo conserva chiave e corpo e la revoca cancella i prossimi tentativi', async (t) => {
  const b = banco(t), email = 'andrea@esempio.test', altro = 'elena@esempio.test';
  for (const e of [email, altro]) {
    b.utente(e, b.ora - 2 * GIORNO);
    await b.apri(await b.conferma(e), 'POST');
  }
  b.errore(503);
  await b.cron();
  assert.equal(b.invii.length, 2);
  assert.equal((await b.api('/em-storico', { tipo: 'prima-prova' })).totale, 0);
  await b.api('/em-disattiva', { email: altro });
  b.errore(null); b.avanza(GIORNO / 8);
  await b.cron(false); await b.cron(false);
  assert.equal(b.invii.length, 3);
  assert.deepEqual(b.invii[0], b.invii[2]);
  const storico = await b.api('/em-storico', { tipo: 'prima-prova' });
  assert.equal(storico.totale, 1);
  assert.equal(storico.invii[0].email, email);
});

test('lo storico recupera gli invii precedenti senza duplicare i promemoria e usa la mezzanotte italiana', async (t) => {
  const b = banco(t), email = 'studente@esempio.test';
  const quando = Date.parse('2026-11-08T23:15:00Z');
  b.db.exec("DELETE FROM email_config WHERE chiave = 'storico-email-dal'");
  b.db.prepare(`INSERT INTO email_automatiche (id, email, tipo, evento, materia, prossimo, scadenza, stato, iniziato, inviato)
    VALUES ('vecchio', ?, 'studio', '123/3', 'analisi-1', ?, ?, 'inviata', ?, ?)`).run(email, quando, quando, quando - 1000, quando);
  b.db.prepare("INSERT INTO promemoria (email, giorno) VALUES (?, '2026-11-08'), (?, '2026-11-08')").run(email, 'altro@esempio.test');
  b.riapri();
  b.riapri();
  const storico = await b.api('/em-storico');
  assert.equal(storico.totale, 2);
  assert.deepEqual(storico.conteggi.map(({ giorno, tipo, n }) => ({ giorno, tipo, n })), [
    { giorno: '2026-11-08', tipo: 'promemoria', n: 1 }, { giorno: '2026-11-09', tipo: 'studio', n: 1 },
  ]);
  assert.equal(storico.invii[1].solo_data, 1);
  await b.cron(false);
  const flussi = (await b.api('/em-dashboard')).flussi;
  assert.equal(flussi.find((f) => f.tipo === 'studio').avvio, quando - 1000);
  assert.equal(flussi.find((f) => f.tipo === 'prima-prova').avvio, b.ora);
});

test('gli invii di servizio sono consultabili per tipo e giorno solo dall’amministratore', async (t) => {
  const b = banco(t), email = 'studente@esempio.test';
  b.utente(email);
  const r = await worker.fetch(new Request(SITO + '/api/password-dimenticata', {
    method: 'POST', body: JSON.stringify({ email }),
  }), b.env, {});
  assert.equal(r.status, 200);
  const url = SITO + '/admin/api/email-storico?giorni=7&tipo=recupero-password&giorno=2026-11-09';
  assert.equal((await b.apri(url)).status, 401);
  const token = await firmaToken(b.env, { admin: true, t: b.ora });
  const risposta = await b.apri(url, 'GET', { cookie: 'admin=' + encodeURIComponent(token) });
  assert.equal(risposta.status, 200);
  assert.equal(risposta.headers.get('cache-control'), 'private, no-store');
  const storico = await risposta.json();
  assert.equal(storico.giorni.length, 7);
  assert.equal(storico.totale, 1);
  assert.equal(storico.invii[0].tipo, 'recupero-password');
  assert.equal(storico.invii[0].email, email);
  assert.equal(storico.invii[0].oggetto, b.invii[0].subject);
  assert.equal((await b.api('/em-storico', { tipo: 'studio' })).totale, 0);
  assert.equal((await b.api('/em-storico', { giorno: '2026-11-08' })).totale, 0);
});
