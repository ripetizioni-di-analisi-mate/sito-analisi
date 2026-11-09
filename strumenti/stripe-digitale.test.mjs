import assert from 'node:assert/strict';
import { after, test } from 'node:test';
import { DatabaseSync } from 'node:sqlite';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { riepilogoMaterie } from '../src/data/pacchetti.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const temp = mkdtempSync(join(tmpdir(), 'stripe-digitale-'));
after(() => rmSync(temp, { recursive: true, force: true }));
const bundle = join(temp, 'stripe-digitale.mjs');
execFileSync(process.execPath, [
  join(root, 'node_modules/rolldown/bin/cli.mjs'),
  join(root, 'worker/stripe-digitale.mjs'),
  '--file',
  bundle,
  '--format',
  'esm',
  '--platform',
  'node',
  '--logLevel',
  'silent',
]);
const { creaTabelleStripeDigitale, archivioStripeDigitale, gestisciAcquisti, eventoDigitale, recuperaOrdiniDigitali } =
  await import(pathToFileURL(bundle));
const fattura = {
  nome: 'Persona',
  cognome: 'Fittizia',
  indirizzo: 'Via Esempio 3',
  cap: '00100',
  comune: 'Roma',
  provincia: 'RM',
  paese: 'IT',
  cf: 'RSSMRA85M01H501Q',
};
const origine = 'https://esempio.test';

function banco(t) {
  const db = new DatabaseSync(':memory:');
  t.after(() => db.close());
  db.exec(`CREATE TABLE acquisti(email,materia,importo,valuta,transazione UNIQUE,creato);
    CREATE TABLE abilitazioni(email,materia,origine,creato,PRIMARY KEY(email,materia));
    CREATE TABLE sconti_invito(email,id,usato);CREATE TABLE benvenuto(email,sconto_id,usato);
    CREATE TABLE email_automatiche(email,sconto,acquisto);`);
  const o = {
    sql: { exec: (q, ...p) => (p.length ? db.prepare(q).run(...p) : db.exec(q)) },
    righe: (q, ...p) => db.prepare(q).all(...p),
    riga: (q, ...p) => db.prepare(q).get(...p),
    materieDi: (e) =>
      db
        .prepare('SELECT materia FROM abilitazioni WHERE email=?')
        .all(e)
        .map((x) => x.materia),
    state: {
      storage: {
        transactionSync(f) {
          db.exec('BEGIN');
          try {
            const v = f();
            db.exec('COMMIT');
            return v;
          } catch (e) {
            db.exec('ROLLBACK');
            throw e;
          }
        },
      },
    },
  };
  creaTabelleStripeDigitale(o.sql);
  const io = { email: 'studente@example.test', materie: [] },
    env = { STRIPE_SECRET_KEY: 'segreto-test', STRIPE_WEBHOOK_SECRET: 'firma-test', RESEND_API_KEY: 'resend-test' };
  let sconto = null,
    messaggi = 0,
    aperte = 0,
    statoErrore = 0;
  const sessioni = new Map();
  const h = {
    MATERIE: [
      ['analisi-1', 49],
      ['analisi-2', 55],
      ['precorso', 29],
    ].map(([slug, prezzo]) => ({ slug, titolo: slug, attiva: true, prezzo })),
    VIDEOCORSI: [
      { slug: 'analisi-1', titolo: 'Video Analisi 1', prezzo: 360, sblocca: ['analisi-1', 'precorso'] },
      { slug: 'analisi-2', titolo: 'Video Analisi 2', prezzo: 192, sblocca: ['analisi-2'] },
      {
        slug: 'analisi-1-e-2',
        titolo: 'Video Analisi 1 e 2',
        prezzo: 499,
        sblocca: ['analisi-1', 'analisi-2', 'precorso'],
        pacchettoDi: ['analisi-1', 'analisi-2'],
      },
    ],
    conMaterieDeiVideo(keys) {
      return [
        ...new Set(keys.flatMap((k) => [k, ...(this.VIDEOCORSI.find((v) => 'video-' + v.slug === k)?.sblocca || [])])),
      ];
    },
    sconto: async () => sconto,
    aDO: (_, p, c = {}) => archivioStripeDigitale(o, p, c),
    utenteCollegato: async () => ({ ...io, materie: o.materieDi(io.email) }),
    dopoAcquistoMateria: async () => {},
  };
  t.mock.method(globalThis, 'fetch', async (u, opts) => {
    if (u === 'https://api.resend.com/emails') {
      assert.doesNotMatch(opts.body, /RSSMRA|Via Esempio/);
      const ricevuta = JSON.parse(opts.body);
      assert.ok(ricevuta.attachments[0].content.length > 100);
      assert.match(ricevuta.text, /2026-11-09.1/);
      messaggi++;
      return Response.json({ id: 'em_test' });
    }
    if (u === 'https://api.stripe.com/v1/checkout/sessions') {
      aperte++;
      if (statoErrore) {
        const status = statoErrore;
        statoErrore = 0;
        return Response.json({ error: { message: 'test' } }, { status });
      }
      const f = opts.body;
      const id = 'cs_test_x' + aperte,
        ordine = f.get('metadata[ordine_digitale]');
      assert.ok(f.get('cancel_url').includes(ordine));
      assert.equal(f.get('customer_email'), io.email);
      assert.doesNotMatch(decodeURIComponent(f.toString()), /RSSMRA|Via Esempio/);
      const sess = {
        id,
        url: 'https://checkout.stripe.com/c/pay/' + id,
        mode: 'payment',
        currency: 'eur',
        metadata: { ordine_digitale: ordine },
        client_reference_id: ordine,
        status: 'open',
        payment_status: 'unpaid',
        payment_intent: null,
        amount_total: Number(f.get('line_items[0][price_data][unit_amount]')),
      };
      sessioni.set(id, sess);
      return Response.json(sess);
    }
    const m = u.match(/checkout\/sessions\/(cs_test_\w+)(\/expire)?$/);
    assert.ok(m, u);
    const sess = sessioni.get(m[1]);
    if (m[2]) sess.status = 'expired';
    return Response.json(sess);
  });
  const call = async (path, data) => {
    const req = new Request(origine + '/api/acquisti/' + path, {
      method: data ? 'POST' : 'GET',
      body: data ? JSON.stringify(data) : undefined,
      headers: { origin: origine, 'content-type': 'application/json' },
    });
    const r = await gestisciAcquisti(req, env, new URL(req.url).pathname, h);
    return { status: r.status, ...(await r.json()) };
  };
  return {
    db,
    o,
    io,
    env,
    h,
    call,
    sessioni,
    sconto: (v) => {
      sconto = v;
    },
    messaggi: () => messaggi,
    aperte: () => aperte,
    simulaErrore: (v) => {
      statoErrore = v;
    },
  };
}
const acquista = (sel, totaleAtteso) => ({
  ...sel,
  totaleAtteso,
  condizioni: true,
  immediato: true,
  versioneCondizioni: '2026-11-09.1',
  fatturazione: fattura,
});
test('prezzi server, dati e consensi, doppio checkout, prova di pagamento ed esito riservato', async (t) => {
  const b = banco(t),
    sel = { tipo: 'materia', slug: 'analisi-1' };
  b.sconto({ id: 'id_locale', tipo: 'benvenuto', percentuale: 10 });
  const q = await b.call('preventivo', sel);
  assert.equal(q.totale, 4410);
  const ordine = acquista(sel, q.totale);
  for (const modifica of [{ fatturazione: {} }, { immediato: false }, { condizioni: false }, { totaleAtteso: 49 }])
    assert.ok((await b.call('checkout', { ...ordine, ...modifica })).status >= 400);
  const go = await b.call('checkout', ordine);
  assert.equal(go.status, 200);
  assert.equal((await b.call('checkout', ordine)).url, go.url);
  assert.equal((await b.call('checkout', acquista({ tipo: 'materia', slug: 'analisi-2' }, 4950))).status, 409);
  assert.equal(b.aperte(), 1);
  const s = [...b.sessioni.values()][0];
  assert.equal(b.o.materieDi(b.io.email).length, 0);
  Object.assign(s, { status: 'complete', payment_status: 'paid', payment_intent: 'pi_uno' });
  const evento = { type: 'checkout.session.completed', data: { object: { ...s, amount_total: 1 } } };
  assert.equal((await eventoDigitale(b.env, b.h, evento)).status, 400);
  assert.equal(b.o.materieDi(b.io.email).length, 0);
  // Il ritorno autenticato riconcilia il pagamento anche prima del webhook.
  assert.equal((await b.call('stato?session_id=' + s.id)).stato, 'pagato');
  evento.data.object = s;
  assert.equal((await eventoDigitale(b.env, b.h, evento)).status, 200);
  assert.equal(b.o.riga('SELECT COUNT(*) n FROM acquisti').n, 1);
  assert.equal(b.messaggi(), 1);
  assert.deepEqual(b.o.materieDi(b.io.email), ['analisi-1']);
  b.io.email = 'altro@example.test';
  assert.equal((await b.call('stato?session_id=' + s.id)).status, 404);
});
test('bundle materie e video, accessi preesistenti conservati, abbandono e cancellazione', async (t) => {
  const b = banco(t);
  const materie = ['analisi-1', 'analisi-2'],
    sel = { tipo: 'materie', materie };
  assert.equal((await b.call('preventivo', sel)).totale, riepilogoMaterie(materie, b.h.MATERIE).totale);
  const first = await b.call('checkout', acquista(sel, 8840));
  assert.equal(first.status, 200);
  let s = [...b.sessioni.values()][0];
  const r = await b.call('annulla', { id: s.client_reference_id });
  assert.equal(r.stato, 'scaduto');
  assert.equal(b.o.riga('SELECT fatturazione FROM ordini_stripe').fatturazione, null);
  b.o.sql.exec('INSERT INTO abilitazioni VALUES (?,?,?,?)', b.io.email, 'precorso', 'manuale', '2026-11-09');
  const video = { tipo: 'video', pacchetto: 'video-analisi' };
  assert.equal((await b.call('preventivo', { tipo: 'videocorso', slug: 'analisi-2' })).totale, 19200);
  assert.equal((await b.call('checkout', acquista(video, 49900))).status, 200);
  s = [...b.sessioni.values()][1];
  Object.assign(s, { status: 'complete', payment_status: 'paid', payment_intent: 'pi_due' });
  b.o.sql.exec("UPDATE ordini_stripe SET creato='2026-01-01' WHERE id=?", s.client_reference_id);
  await recuperaOrdiniDigitali(b.env, b.h);
  assert.equal(b.o.riga('SELECT origine FROM abilitazioni WHERE materia=?', 'precorso').origine, 'manuale');
  assert.deepEqual(b.o.materieDi(b.io.email), ['analisi-1', 'analisi-2', 'precorso', 'video-analisi-1-e-2']);
  assert.equal(b.o.riga('SELECT SUM(importo) n FROM acquisti').n, 499);
  assert.equal((await b.call('checkout', acquista({ tipo: 'videocorso', slug: 'analisi-1' }, 36000))).status, 400);
});

test('requisiti aggiornati nel registro prima di aprire Stripe e riprova dopo errore certo del provider', async (t) => {
  const b = banco(t),
    sel = { tipo: 'materia', slug: 'analisi-1' };
  const ordine = acquista(sel, 4900);
  assert.equal((await b.call('checkout', { ...ordine, versioneCondizioni: 'superata' })).status, 409);
  b.simulaErrore(400);
  assert.equal((await b.call('checkout', ordine)).status, 502);
  const fallito = b.o.riga('SELECT * FROM ordini_stripe');
  assert.equal(fallito.stato, 'scaduto');
  assert.equal(fallito.fatturazione, null);
  assert.equal((await b.call('checkout', ordine)).status, 200);
  const aperto = b.o.riga("SELECT * FROM ordini_stripe WHERE stato='in_attesa'");
  const q = JSON.parse(aperto.ordine);
  assert.equal(q.versioneCondizioni, ordine.versioneCondizioni);
  assert.match(q.consensoFornitura, /Riconosco/);
  assert.ok(Number.isFinite(Date.parse(aperto.consenso)));
  // Lo studente riceve l'accesso mentre è ancora sulla schermata dell'offerta.
  b.o.sql.exec('INSERT INTO abilitazioni VALUES (?,?,?,?)', b.io.email, 'video-analisi-1-e-2', 'paddle', '2026-11-09');
  const ad = (c) =>
    b.h.aDO(b.env, '/dig-apri', { id: crypto.randomUUID(), email: b.io.email, ordine: c, fatturazione: fattura });
  assert.deepEqual(await ad({ ...q, tipo: 'videocorso', chiavi: ['video-analisi-1'] }), { posseduto: true });
  b.o.sql.exec('INSERT INTO sconti_invito VALUES (?,?,?)', b.io.email, 'g', 'txn_vecchio');
  assert.deepEqual(await ad({ ...q, chiavi: ['analisi-2'], sconto: { id: 'g', tipo: 'premio' } }), { scontoUsato: true });
});
