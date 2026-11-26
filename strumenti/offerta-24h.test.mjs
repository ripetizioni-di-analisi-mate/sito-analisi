import assert from 'node:assert/strict';
import { after, test } from 'node:test';
import { DatabaseSync } from 'node:sqlite';
import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { riepilogoMaterie } from '../src/data/pacchetti.mjs';
import { VERSIONE_CONDIZIONI } from '../src/data/consenso-digitale.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const temp = mkdtempSync(join(tmpdir(), 'offerta-24h-'));
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
execFileSync(process.execPath, [join(root, 'node_modules/rolldown/bin/cli.mjs'), join(root, 'worker/promozioni-email.mjs'),
  '--file', join(temp, 'promozioni.mjs'), '--format', 'esm', '--platform', 'node', '--logLevel', 'silent']);
const { creaTabellePromozioni, offertaPromozionale } = await import(pathToFileURL(join(temp, 'promozioni.mjs')));
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

const o_sql = (db) => ({ exec: (q, ...p) => (p.length ? db.prepare(q).run(...p) : db.exec(q)) });
function banco(t) {
  const db = new DatabaseSync(':memory:');
  t.after(() => db.close());
  db.exec(`CREATE TABLE acquisti(email,materia,importo,valuta,transazione UNIQUE,creato);
    CREATE TABLE abilitazioni(email,materia,origine,creato,PRIMARY KEY(email,materia));
    CREATE TABLE sconti_invito(email,id,usato);CREATE TABLE benvenuto(email,sconto_id,usato);
    CREATE TABLE email_automatiche(email,sconto,acquisto);
    CREATE TABLE email_inviate(id TEXT PRIMARY KEY,tipo,email,oggetto,inviato,solo_data INTEGER DEFAULT 0);`);
  creaTabellePromozioni(o_sql(db));
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
    env = { STRIPE_SECRET_KEY: 'segreto-test', STRIPE_WEBHOOK_SECRET: 'firma-test', RESEND_API_KEY: 'resend-test', EMAIL_AVVISI: 'avvisi@example.test' };
  let sconto = null,
    messaggi = 0,
    avvisi = [],
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
    sconto: async (io, m) => {
      const p = offertaPromozionale(o, { email: io.email, materia: m });
      return p.id && p.percentuale >= (sconto?.percentuale || 0) ? p : sconto;
    },
    aDO: (_, p, c = {}) => archivioStripeDigitale(o, p, c),
    utenteCollegato: async () => ({ ...io, materie: o.materieDi(io.email) }),
    dopoAcquistoMateria: async () => {},
  };
  t.mock.method(globalThis, 'fetch', async (u, opts) => {
    if (u === 'https://api.resend.com/emails') {
      assert.doesNotMatch(opts.body, /RSSMRA|Via Esempio/);
      if (JSON.parse(opts.body).to[0] === 'avvisi@example.test') {
        avvisi.push({ chiave: opts.headers['Idempotency-Key'], oggetto: JSON.parse(opts.body).subject });
        return Response.json({ id: 'em_avviso' });
      }
      const ricevuta = JSON.parse(opts.body);
      assert.ok(ricevuta.attachments[0].content.length > 100);
      assert.ok(ricevuta.text.includes(VERSIONE_CONDIZIONI));
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
    avvisi: () => avvisi,
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
  versioneCondizioni: VERSIONE_CONDIZIONI,
  fatturazione: fattura,
});

// Offerta di 24 ore ai nuovi iscritti (26/11/2026): riga di promozioni_email con materia '*'.
const offerta = (b, { percentuale = 20, scade = Date.now() + 86400000, id = 'off-1' } = {}) =>
  b.db.prepare("INSERT INTO promozioni_email (id,email,materia,percentuale,scade) VALUES (?,?,'*',?,?)")
    .run(id, b.io.email, percentuale, scade);
async function paga(b, slug, totale) {
  const go = await b.call('checkout', acquista({ tipo: 'materia', slug }, totale));
  assert.equal(go.status, 200);
  const s = [...b.sessioni.values()].at(-1);
  assert.equal(s.amount_total, totale);
  Object.assign(s, { status: 'complete', payment_status: 'paid', payment_intent: 'pi_' + slug });
  assert.equal((await eventoDigitale(b.env, b.h, { type: 'checkout.session.completed', data: { object: s } })).status, 200);
}

test('offerta di 24 ore: sconto su una materia a scelta, una sola volta, più forte del 10% di benvenuto', async (t) => {
  const b = banco(t);
  b.sconto({ id: 'benv', tipo: 'benvenuto', percentuale: 10 });
  offerta(b);
  const q = await b.call('preventivo', { tipo: 'materia', slug: 'analisi-2' });
  assert.equal(q.totale, 4400); // 55 € − 20%
  assert.equal(q.sconti.length, 1);
  assert.equal(q.sconti[0].tipo, 'promozione');
  await paga(b, 'analisi-2', 4400);
  assert.deepEqual(b.o.materieDi(b.io.email), ['analisi-2']);
  assert.equal(b.o.riga("SELECT usato FROM promozioni_email WHERE id='off-1'").usato, 'pi_analisi-2');
  // Seconda materia: l'offerta è già usata, resta solo l'eventuale altro sconto.
  b.sconto(null);
  assert.equal((await b.call('preventivo', { tipo: 'materia', slug: 'precorso' })).totale, 2900);
});

test('offerta di 24 ore scaduta: nessuno sconto', async (t) => {
  const b = banco(t);
  offerta(b, { scade: Date.now() - 1000 });
  assert.equal((await b.call('preventivo', { tipo: 'materia', slug: 'analisi-1' })).totale, 4900);
});

test('offerta che scade fra preventivo e pagamento: il checkout si ferma', async (t) => {
  const b = banco(t);
  offerta(b);
  const q = await b.call('preventivo', { tipo: 'materia', slug: 'analisi-1' });
  assert.equal(q.totale, 3920);
  b.db.prepare("UPDATE promozioni_email SET scade = ? WHERE id = 'off-1'").run(Date.now() - 1);
  assert.ok((await b.call('checkout', acquista({ tipo: 'materia', slug: 'analisi-1' }, 3920))).status >= 400);
});

test('il pacchetto di materie non usa l\'offerta di 24 ore', async (t) => {
  const b = banco(t);
  offerta(b);
  const q = await b.call('preventivo', { tipo: 'materie', materie: ['analisi-1', 'analisi-2'] });
  assert.ok(!q.sconti?.some((s) => s.tipo === 'promozione'));
});
