// Esegui con: node --test strumenti/google-calendar.test.mjs
// Il router è quello di produzione; si sostituiscono soltanto i dati Astro delle
// materie, non utilizzati dal collegamento OAuth, per non richiedere una build.
import assert from 'node:assert/strict';
import { createHmac } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const source = await readFile(new URL('../worker/prenotazioni.mjs', import.meta.url), 'utf8');
const modulo = source.replace("import { LEZIONI, MATERIE_LEZIONI } from '../src/data/lezioni.ts';", "const LEZIONI = { fusoOrario: 'Europe/Rome' }; const MATERIE_LEZIONI = [];");
assert.notEqual(modulo, source, 'Importazione dei dati delle materie non riconosciuta');
const { gestisciPrenotazioni } = await import('data:text/javascript;base64,' + Buffer.from(modulo).toString('base64'));
const ORIGINE = 'https://ripetizionidianalisi.com';
const RITORNO = '/admin/google/ritorno';
const SCOPI = 'https://www.googleapis.com/auth/calendar.events https://www.googleapis.com/auth/calendar.freebusy';
const mac = (s) => createHmac('sha256', 'solo-per-le-prove').update(s).digest('base64url');
const firma = (d) => { const s = Buffer.from(JSON.stringify(d)).toString('base64url'); return s + '.' + mac(s); };
function leggi(t) {
  try { const [s, m] = t.split('.'); return mac(s) === m ? JSON.parse(Buffer.from(s, 'base64url')) : null; }
  catch { return null; }
}
function backend(t, risposta = { refresh_token: 'refresh-di-prova', access_token: 'accesso-di-prova', scope: SCOPI }, statoHTTP = 200) {
  const salvataggi = [];
  let richiesteGoogle = 0;
  t.mock.method(globalThis, 'fetch', async (url, opzioni) => {
    richiesteGoogle++;
    assert.equal(url, 'https://oauth2.googleapis.com/token');
    assert.equal(opzioni.method, 'POST');
    const c = new URLSearchParams(opzioni.body);
    assert.equal(c.get('redirect_uri'), ORIGINE + RITORNO);
    assert.equal(c.get('grant_type'), 'authorization_code');
    return new Response(JSON.stringify(risposta), { status: statoHTTP });
  });
  const env = { GOOGLE_CLIENT_ID: 'client-di-prova', GOOGLE_CLIENT_SECRET: 'segreto-di-prova' };
  const h = {
    firmaToken: async (_, d) => firma(d), leggiToken: async (_, s) => leggi(s),
    leggiCookie: (r, nome) => {
      const voce = (r.headers.get('cookie') || '').split(';').map((s) => s.trim()).find((s) => s.startsWith(nome + '='));
      return voce ? decodeURIComponent(voce.slice(nome.length + 1)) : null;
    },
    aDO: async (_, p, dati) => { salvataggi.push({ p, dati }); return { ok: true }; },
  };
  const chiama = (path, cookie = '', method = 'GET') => {
    const req = new Request(ORIGINE + path, { method, headers: { cookie } });
    return gestisciPrenotazioni(req, env, {}, new URL(req.url).pathname, h);
  };
  const inizia = async () => {
    const r = await chiama('/admin/google/collega', 'admin=' + firma({ admin: true }));
    const url = new URL(r.headers.get('location'));
    return { r, url, stato: url.searchParams.get('state'), cookie: r.headers.get('set-cookie').split(';')[0] };
  };
  const ritorna = (stato, cookie, code = 'codice-di-prova', method = 'GET') => chiama(RITORNO + '?' + new URLSearchParams({ state: stato, ...(code ? { code } : { error: 'access_denied' }) }), cookie, method);
  return { salvataggi, chiama, inizia, ritorna, get richiesteGoogle() { return richiesteGoogle; } };
}

test('la partenza richiede la sessione amministrativa e genera uno stato diverso per ogni tentativo', async (t) => {
  const b = backend(t);
  const no = await b.chiama('/admin/google/collega');
  assert.equal(no.status, 302);
  assert.equal(no.headers.get('location'), ORIGINE + '/admin');
  assert.equal(no.headers.get('set-cookie'), null);
  const a = await b.inizia(), altro = await b.inizia();
  assert.equal(a.r.status, 302);
  assert.equal(a.url.origin, 'https://accounts.google.com');
  assert.equal(a.url.searchParams.get('redirect_uri'), ORIGINE + RITORNO);
  assert.equal(a.url.searchParams.get('scope'), SCOPI);
  assert.equal(a.url.searchParams.get('access_type'), 'offline');
  assert.notEqual(a.stato, altro.stato);
  assert.equal(leggi(a.stato).scopo, 'google');
  assert.ok(leggi(a.stato).nonce);
  assert.match(a.r.headers.get('set-cookie'), /^__Host-google_oauth=.+; Path=\/; Max-Age=900; HttpOnly; Secure; SameSite=Lax$/);
  assert.doesNotMatch(a.r.headers.get('set-cookie'), /(?:^|; )admin=/);
});

test('il ritorno da Google funziona senza il cookie admin Strict, solo con lo stato del browser', async (t) => {
  const b = backend(t), a = await b.inizia();
  const r = await b.ritorna(a.stato, a.cookie);
  assert.equal(r.status, 200);
  assert.equal(b.richiesteGoogle, 1);
  assert.deepEqual(b.salvataggi, [{ p: '/pren-imposta', dati: { chiave: 'google_refresh', valore: 'refresh-di-prova' } }]);
  assert.match(r.headers.get('set-cookie'), /^__Host-google_oauth=;.*Max-Age=0/);
  assert.equal(r.headers.get('referrer-policy'), 'no-referrer');
  const html = await r.text();
  assert.match(html, /Google Calendar collegato/);
  assert.match(html, /href="\/admin\/lezioni\?collegato=1"/);
  assert.doesNotMatch(html, /codice-di-prova|refresh-di-prova|accesso-di-prova/);
});

test('uno stato assente, estraneo, alterato o scaduto non modifica il calendario', async (t) => {
  const ora = Date.now();
  const casi = [
    { nome: 'cookie mancante', dati: { scopo: 'google', t: ora, nonce: 'a' }, cookie: null },
    { nome: 'cookie di un altro browser', dati: { scopo: 'google', t: ora, nonce: 'a' }, cookie: 'altro' },
    { nome: 'firma alterata', dati: { scopo: 'google', t: ora, nonce: 'a' }, altera: true },
    { nome: 'stato scaduto', dati: { scopo: 'google', t: ora - 901000, nonce: 'a' } },
    { nome: 'data futura', dati: { scopo: 'google', t: ora + 120000, nonce: 'a' } },
    { nome: 'scopo diverso', dati: { admin: true, t: ora, nonce: 'a' } },
    { nome: 'stato precedente senza nonce', dati: { scopo: 'google', t: ora } },
  ];
  for (const c of casi) await t.test(c.nome, async (st) => {
    const b = backend(st);
    const stato = firma(c.dati) + (c.altera ? 'x' : '');
    const cookie = c.cookie === null ? '' : '__Host-google_oauth=' + encodeURIComponent(c.cookie || stato);
    const r = await b.ritorna(stato, cookie);
    assert.match(await r.text(), /scaduto o non appartiene a questo browser/);
    assert.equal(b.richiesteGoogle, 0);
    assert.equal(b.salvataggi.length, 0);
  });
});

test('il rifiuto su Google cancella il tentativo senza scambiare il codice', async (t) => {
  const b = backend(t), a = await b.inizia();
  const r = await b.ritorna(a.stato, a.cookie, '');
  assert.match(await r.text(), /Collegamento annullato/);
  assert.match(r.headers.get('set-cookie'), /Max-Age=0/);
  assert.equal(b.richiesteGoogle, 0);
  assert.equal(b.salvataggi.length, 0);
});

test('gli errori Google non salvano credenziali e non le scrivono nei log', async (t) => {
  const log = [];
  t.mock.method(console, 'log', (...args) => log.push(args));
  const b = backend(t, { error: 'invalid_client', refresh_token: 'refresh-di-prova', access_token: 'accesso-di-prova' }, 401);
  const a = await b.inizia(), r = await b.ritorna(a.stato, a.cookie);
  assert.match(await r.text(), /Google non ha concesso/);
  assert.equal(b.salvataggi.length, 0);
  assert.doesNotMatch(JSON.stringify(log), /refresh-di-prova|accesso-di-prova/);
});

test('permessi parziali non sono presentati come un collegamento riuscito', async (t) => {
  const b = backend(t, { refresh_token: 'refresh-di-prova', scope: 'https://www.googleapis.com/auth/calendar.freebusy' });
  const a = await b.inizia(), r = await b.ritorna(a.stato, a.cookie);
  assert.match(await r.text(), /solo parte dei permessi/);
  assert.equal(b.salvataggi.length, 0);
});

test('il cookie temporaneo non apre la dashboard e non consente di scollegare Calendar', async (t) => {
  const b = backend(t), a = await b.inizia();
  for (const [path, metodo] of [['/admin/lezioni', 'GET'], ['/admin/google/scollega', 'POST']]) {
    const r = await b.chiama(path, a.cookie, metodo);
    assert.equal(r.status, 302);
    assert.equal(r.headers.get('location'), ORIGINE + '/admin');
  }
  const r = await b.ritorna(a.stato, a.cookie, 'codice-di-prova', 'POST');
  assert.equal(r.status, 405);
  assert.equal(b.richiesteGoogle, 0);
  assert.equal(b.salvataggi.length, 0);
});
