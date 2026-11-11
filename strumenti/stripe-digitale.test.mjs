import assert from 'node:assert/strict';
import { after, test } from 'node:test';
import { DatabaseSync } from 'node:sqlite';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { riepilogoMaterie } from '../src/data/pacchetti.mjs';
import { VERSIONE_CONDIZIONI, VERSIONE_CONDIZIONI_PREMIUM } from '../src/data/consenso-digitale.mjs';

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
    CREATE TABLE email_automatiche(email,sconto,acquisto);
    CREATE TABLE rimborsi_digitali(ordine_id PRIMARY KEY,confermati);`);
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
  const sessioni = new Map(), statiPagamento = new Map();
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
      const versione = ricevuta.subject.includes('Premium') ? VERSIONE_CONDIZIONI_PREMIUM : VERSIONE_CONDIZIONI;
      assert.ok(ricevuta.text.includes(versione));
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
      assert.equal(f.has('payment_method_types[0]'), false);
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
    const url = new URL(u);
    const m = url.pathname.match(/checkout\/sessions\/(cs_test_\w+)(\/expire)?$/);
    assert.ok(m, u);
    const sess = sessioni.get(m[1]);
    if (m[2]) {
      if (sess.status !== 'open') return Response.json({ error: { message: 'Session is not open' } }, { status: 400 });
      sess.status = 'expired';
      return Response.json(sess);
    }
    assert.equal(url.searchParams.get('expand[]'), 'payment_intent');
    return Response.json({ ...sess, payment_intent: sess.payment_intent && {
      id: sess.payment_intent, status: statiPagamento.get(sess.payment_intent) || (sess.payment_status === 'paid' ? 'succeeded' : 'processing'),
    } });
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
    statiPagamento,
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
  versioneCondizioni: VERSIONE_CONDIZIONI,
  fatturazione: fattura,
});
test('i corsi USA usano i prezzi italiani e sbloccano il corso acquistato', async (t) => {
  const b = banco(t);
  const sel = { tipo: 'materia', slug: 'hs-algebra-1', lingua: 'en' };
  assert.equal((await b.call('preventivo', { ...sel, slug: 'calculus-1' })).totale, 4900);
  assert.equal((await b.call('preventivo', { ...sel, slug: 'mechanics-of-materials' })).totale, 6500);
  assert.equal((await b.call('preventivo', sel)).totale, 2900);
  const ordine = {
    ...acquista(sel, 2900),
    fatturazione: { nome: 'Test', cognome: 'Student', indirizzo: '1 Example St', cap: '10001', comune: 'New York', provincia: 'NY', paese: 'US' },
  };
  assert.equal((await b.call('checkout', { ...ordine, totaleAtteso: 1 })).status, 409);
  assert.equal((await b.call('checkout', ordine)).status, 200);
  const s = [...b.sessioni.values()][0];
  assert.equal(s.amount_total, 2900);
  assert.equal(s.currency, 'eur');
  assert.deepEqual(b.o.materieDi(b.io.email), []);
  Object.assign(s, { status: 'complete', payment_status: 'paid', payment_intent: 'pi_algebra' });
  const stato = await b.call('stato?session_id=' + s.id);
  assert.equal(stato.stato, 'pagato');
  assert.equal(stato.destinazione, '/us/high-school/algebra-1');
  assert.deepEqual(b.o.materieDi(b.io.email), ['hs-algebra-1']);
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

test('pagamento differito: attende senza riaprire Stripe, abilita e invia la conferma una volta sola', async (t) => {
  const b = banco(t);
  const ordine = acquista({ tipo: 'materia', slug: 'analisi-1' }, 4900);
  await b.call('checkout', ordine);
  const [s] = b.sessioni.values();
  const notifica = (type, object = s) => eventoDigitale(b.env, b.h, { type: 'checkout.session.' + type, data: { object } });
  Object.assign(s, { status: 'complete', payment_intent: 'pi_differito' });
  await notifica('completed');
  await notifica('async_payment_failed', { ...s, amount_total: 1 });
  assert.equal((await b.call('stato?session_id=' + s.id)).stato, 'in_elaborazione');
  assert.equal((await b.call('checkout', ordine)).sessione, s.id);
  assert.equal((await b.call('checkout', { ...ordine, fatturazione: { ...fattura, nome: 'Secondo' } })).sessione, s.id);
  assert.equal((await b.call('annulla', { id: s.client_reference_id })).stato, 'in_elaborazione');
  assert.equal(b.aperte(), 1);
  assert.deepEqual(b.o.materieDi(b.io.email), []);
  assert.equal(b.messaggi(), 0);
  s.payment_status = 'paid';
  await notifica('async_payment_succeeded');
  await notifica('async_payment_succeeded');
  await notifica('completed', { ...s, payment_status: 'unpaid' });
  await notifica('async_payment_failed', { ...s, payment_status: 'unpaid' });
  assert.equal((await b.call('stato?session_id=' + s.id)).stato, 'pagato');
  assert.deepEqual(b.o.materieDi(b.io.email), ['analisi-1']);
  assert.equal(b.o.riga('SELECT COUNT(*) n FROM acquisti').n, 1);
  assert.equal(b.messaggi(), 1);
});

test('fallimento differito: webhook o recupero periodico sbloccano un nuovo acquisto della stessa selezione', async (t) => {
  const b = banco(t);
  const ordine = acquista({ tipo: 'materia', slug: 'analisi-1' }, 4900);
  await b.call('checkout', ordine);
  const [s] = b.sessioni.values();
  Object.assign(s, { status: 'complete', payment_intent: 'pi_fallito' });
  for (let i = 0; i < 2; i++)
    await eventoDigitale(b.env, b.h, { type: 'checkout.session.async_payment_failed', data: { object: s } });
  const esito = await b.call('stato?session_id=' + s.id);
  assert.equal(esito.stato, 'fallito');
  assert.equal(esito.riprova, '/acquisto?tipo=materia&slug=analisi-1');
  assert.equal(b.o.riga('SELECT fatturazione FROM ordini_stripe WHERE id=?', s.client_reference_id).fatturazione, null);
  assert.equal((await b.call('checkout', ordine)).status, 200);
  const seconda = [...b.sessioni.values()][1];
  Object.assign(seconda, { status: 'complete', payment_intent: 'pi_recuperato' });
  b.statiPagamento.set(seconda.payment_intent, 'requires_payment_method');
  b.o.sql.exec("UPDATE ordini_stripe SET creato='2026-01-01' WHERE id=?", seconda.client_reference_id);
  await recuperaOrdiniDigitali(b.env, b.h);
  assert.equal(b.o.riga('SELECT stato FROM ordini_stripe WHERE id=?', seconda.client_reference_id).stato, 'fallito');
  assert.deepEqual(b.o.materieDi(b.io.email), []);
  assert.equal(b.messaggi(), 0);
  assert.equal((await b.call('checkout', ordine)).status, 200);
  assert.equal(b.aperte(), 3);
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


test('Premium: prezzi fissi, scadenza, passaggio, rimborso e acquisti permanenti', async (t) => {
  const b = banco(t);
  const semi = { tipo: 'premium', slug: 'semestrale' };
  const annuale = { tipo: 'premium', slug: 'annuale' };
  const passaggio = { tipo: 'premium', slug: 'passaggio' };
  const premium = (selezione, totale) => ({
    ...acquista(selezione, totale), versioneCondizioni: VERSIONE_CONDIZIONI_PREMIUM,
  });
  const attivo = () => b.h.aDO(b.env, '/dig-premium', { email: b.io.email });
  const paga = async (intent) => {
    const s = [...b.sessioni.values()].at(-1);
    Object.assign(s, { status: 'complete', payment_status: 'paid', payment_intent: intent });
    assert.equal((await b.call('stato?session_id=' + s.id)).stato, 'pagato');
    assert.equal((await eventoDigitale(b.env, b.h, { type: 'checkout.session.completed', data: { object: s } })).status, 200);
  };
  b.db.prepare("INSERT INTO abilitazioni VALUES (?, 'analisi-1', 'manuale', '')").run(b.io.email);
  assert.equal((await b.call('preventivo', annuale)).totale, 29900);
  assert.equal((await b.call('preventivo', semi)).totale, 18900);
  assert.equal((await b.call('preventivo', passaggio)).status, 400);
  assert.equal((await b.call('checkout', acquista(semi, 18900))).status, 409);
  assert.equal((await b.call('checkout', premium(semi, 100))).status, 409);
  const semestrale = premium(semi, 18900);
  assert.equal((await b.call('checkout', semestrale)).status, 200);
  assert.equal((await b.call('checkout', semestrale)).status, 200);
  assert.equal((await b.call('checkout', premium(annuale, 29900))).status, 409);
  assert.equal(attivo(), null);
  await paga('pi_semestrale');
  const base = attivo();
  assert.equal(base.piano, 'semestrale');
  assert.ok(base.materie.includes('analisi-1'));
  assert.ok(base.materie.includes('calculus-1'));
  assert.ok(base.materie.every(slug => !slug.startsWith('video-')));
  assert.equal(b.o.riga('SELECT count(*) n FROM acquisti').n, 1);
  assert.equal((await b.call('preventivo', annuale)).status, 400);

  const preventivo = await b.call('preventivo', passaggio);
  assert.equal(preventivo.totale, 11000);
  assert.equal(preventivo.premium.mesi, 12);
  assert.equal((await b.call('checkout', premium(passaggio, 11000))).status, 200);
  await paga('pi_passaggio');
  const upgrade = attivo();
  assert.equal(upgrade.piano, 'annuale');
  assert.equal(upgrade.inizio, base.inizio);
  assert.equal(upgrade.scade, preventivo.premium.scade);
  assert.equal((await b.call('preventivo', passaggio)).status, 400);

  b.db.prepare('INSERT INTO rimborsi_digitali VALUES (?, ?)').run(upgrade.id, 11000);
  assert.equal(attivo().piano, 'semestrale');
  b.db.prepare("UPDATE ordini_stripe SET ordine=json_set(ordine, '$.premium.scade', ?) WHERE id=?")
    .run('2020-01-01T00:00:00.000Z', base.id);
  assert.equal(attivo(), null);
  assert.deepEqual(b.o.materieDi(b.io.email), ['analisi-1']);
  assert.equal((await b.call('preventivo', annuale)).totale, 29900);
});
