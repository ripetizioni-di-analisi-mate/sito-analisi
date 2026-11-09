import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { DatabaseSync } from 'node:sqlite';
import { after, test } from 'node:test';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { leggiFatturazione } from '../worker/fatturazione.mjs';

const intestatario = { nome: 'Mario', cognome: 'Rossi', indirizzo: 'Via Esempio 1', cap: '00100', comune: 'Roma', provincia: 'RM', paese: 'IT', cf: 'RSSMRA85M01H501Q' };
test('dati per privati italiani ed esteri, compresi omocodia e CF provvisorio', () => {
  for (const cf of [intestatario.cf, 'RSSMRA85M01H50MI', '12345678903']) {
    assert.deepEqual(leggiFatturazione({ ...intestatario, cf: cf.toLowerCase() }).dati, { ...intestatario, cf });
  }
  for (const cambio of [{ cf: '' }, { cf: 'RSSMRA85M01H501A' }, { cf: '12345678901' }, { cap: '1234' }, { provincia: '' }, { comune: '' }, { cognome: '' }, { paese: 'ZZ' }]) {
    assert.ok(leggiFatturazione({ ...intestatario, ...cambio }).errore);
  }
  const estero = { ...intestatario, paese: 'HK', provincia: '', cap: '', cf: '' };
  assert.deepEqual(leggiFatturazione(estero).dati, estero);
});

const root = fileURLToPath(new URL('../', import.meta.url));
const temp = mkdtempSync(join(tmpdir(), 'fatturazione-'));
after(() => rmSync(temp, { recursive: true, force: true }));
const bundle = join(temp, 'prenotazioni.mjs');
execFileSync(process.execPath, [join(root, 'node_modules/rolldown/bin/cli.mjs'), join(root, 'worker/prenotazioni.mjs'), '--file', bundle, '--format', 'esm', '--platform', 'node', '--logLevel', 'silent']);
const { gestisciPrenotazioni, archivioPrenotazioni, creaTabellePrenotazioni, avvisiLezioni } = await import(pathToFileURL(bundle));

test('la fatturazione segue il pagamento, resta privata e viene cancellata per i checkout scaduti', async (t) => {
  const db = new DatabaseSync(':memory:');
  t.after(() => db.close());
  const sql = { exec: (q, ...p) => p.length ? db.prepare(q).run(...p) : db.exec(q) };
  const archivio = { sql, riga: (q, ...p) => db.prepare(q).get(...p), righe: (q, ...p) => db.prepare(q).all(...p) };
  creaTabellePrenotazioni(sql);
  let statoStripe = 'open';
  let richiesteStripe = 0;
  const sessione = 'cs_test_di_fatturazione';
  t.mock.method(globalThis, 'fetch', async (u, opzioni) => {
    if (u === 'https://oauth2.googleapis.com/token') return Response.json({ access_token: 'prova' });
    if (u.endsWith('/freeBusy')) return Response.json({ calendars: { primary: { busy: [] } } });
    if (u.endsWith('/checkout/sessions')) {
      richiesteStripe++;
      assert.doesNotMatch(decodeURIComponent(opzioni.body.toString()), /RSSMRA|Via Esempio|Mario|00100/);
      return Response.json({ id: sessione, url: 'https://example.org/checkout' });
    }
    if (u.endsWith('/expire')) return Response.json(statoStripe === 'complete' ? { error: 'already paid' } : { status: 'expired' }, { status: statoStripe === 'complete' ? 400 : 200 });
    if (u.endsWith('/' + sessione)) return Response.json({ status: statoStripe });
    throw new Error('Chiamata inattesa');
  });
  const env = { STRIPE_SECRET_KEY: 'prova', GOOGLE_CLIENT_ID: 'prova', GOOGLE_CLIENT_SECRET: 'prova' };
  const h = {
    normalizza: (s) => s, emailValida: () => true, leggiCookie: (r) => r.headers.get('cookie'),
    leggiToken: async (_, s) => JSON.parse(s), firmaToken: async (_, d) => JSON.stringify(d),
    json: (o, status = 200, headers) => Response.json(o, { status, headers }),
    aDO: async (_, p, c) => archivioPrenotazioni(archivio, p, c),
  };
  const call = (path, dati, admin = false) => {
    const req = new Request('https://example.org' + path, { method: dati ? 'POST' : 'GET', body: dati ? JSON.stringify(dati) : undefined, headers: admin ? { cookie: '{"admin":true}' } : {} });
    return gestisciPrenotazioni(req, env, {}, new URL(req.url).pathname, h);
  };
  await h.aDO(env, '/pren-imposta', { chiave: 'google_refresh', valore: 'prova' });
  const { orari } = await (await call('/api/prenota/disponibilita')).json();
  const dati = { materia: 'analisi-1', nome: 'Studente Esempio', email: 'studente@example.test', telefono: '3300000000', condizioni: true, inizio: orari[0].inizio };
  assert.equal((await call('/api/prenota/inizia', dati)).status, 400);
  assert.equal(richiesteStripe, 0);
  assert.equal((await call('/api/prenota/inizia', { ...dati, fatturazione: intestatario })).status, 200);
  assert.equal(richiesteStripe, 1);
  const r = db.prepare('SELECT * FROM lezioni').get();
  assert.deepEqual(JSON.parse(r.fatturazione), intestatario);
  assert.equal(r.cf, null);
  const pubblico = await (await call('/api/prenota/stato', { s: sessione })).text();
  assert.doesNotMatch(pubblico, /Mario|RSSMRA|Via Esempio|00100/);
  assert.equal((await call('/admin/lezioni')).status, 302);
  statoStripe = 'complete';
  assert.equal((await call('/api/prenota/libera', { t: JSON.stringify({ l: r.id, scopo: 'annulla' }) })).status, 409);
  await h.aDO(env, '/pren-pagata', { id: r.id, pagamento: 'pi_prova', importo: 40 });
  const admin = await call('/admin/lezioni', undefined, true);
  assert.equal(admin.headers.get('cache-control'), 'no-store');
  assert.match(await admin.text(), /Mario Rossi.*Via Esempio 1.*00100 Roma RM IT.*RSSMRA85M01H501Q.*pi_prova/);
  await h.aDO(env, '/pren-libera', { id: r.id });
  assert.ok(db.prepare('SELECT fatturazione FROM lezioni WHERE id = ?').get(r.id).fatturazione);
  // Una seconda sessione resta abbandonata, con il webhook di scadenza mancante.
  db.prepare("UPDATE lezioni SET stato = 'in-attesa', scadenza = 1, pagamento = NULL WHERE id = ?").run(r.id);
  statoStripe = 'expired';
  await avvisiLezioni(env, h.aDO, h.firmaToken);
  assert.equal(db.prepare('SELECT fatturazione FROM lezioni WHERE id = ?').get(r.id).fatturazione, null);
});
