import test from 'node:test';
import assert from 'node:assert/strict';
import { versoCatalogoStudio } from '../worker/catalogo-studio.mjs';
import { linguaBrowser, versoLaLinguaGiusta } from '../worker/lingua.mjs';

const env = { ASSETS: { fetch: () => Response.json({
  de: ['/', '/analisi-1'],
  es: ['/', '/analisi-1'],
  fr: ['/', '/analisi-1'],
  en: ['/', '/analisi-1', '/analisi-1/limiti/teoria'],
}) } };

function richiesta(path, { lingua = 'en-US', cookie = '', agente = 'Mozilla/5.0', method = 'GET' } = {}) {
  return new Request(new URL(path, 'https://ripetizionidianalisi.com'), {
    method, headers: { 'accept-language': lingua, cookie, 'user-agent': agente },
  });
}

async function risposta(path, opzioni) {
  const req = richiesta(path, opzioni);
  const url = new URL(req.url);
  return versoCatalogoStudio(req, url) ?? versoLaLinguaGiusta(req, env, url);
}

async function destinazione(path, opzioni) {
  return (await risposta(path, opzioni))?.headers.get('location') ?? null;
}

test('il parser della lingua del browser riconosce i tag regionali e le priorità', () => {
  assert.equal(linguaBrowser('en-US;q=0.7,de-CH;q=0.9'), 'de');
  assert.equal(linguaBrowser('de;q=0,it-IT;q=0.8'), 'it');
  assert.equal(linguaBrowser('es-419;q=0.9,de;q=0.8'), 'es');
  assert.equal(linguaBrowser('fr-CH;q=0.9,de;q=0.8'), 'fr');
});

test('l’italiano e l’inglese mantengono preferenze esplicite e disponibilità delle pagine', async () => {
  assert.equal(await destinazione('/'), '/en');
  assert.equal(await destinazione('/analisi-1?ref=prova'), '/en/analisi-1?ref=prova');
  assert.equal(await destinazione('/prenota'), null);
  assert.equal(await destinazione('/analisi-1/limiti/teoria?lingua=it'), null);
  assert.equal(await destinazione('/en/analisi-1?lingua=en', { cookie: 'lingua=it' }), null);
  assert.equal(await destinazione('/en/analisi-1', { lingua: 'it-IT' }), '/analisi-1');
  assert.equal(await destinazione('/en/analisi-1', { cookie: 'lingua=it' }), '/analisi-1');
  assert.equal(await destinazione('/analisi-1', { lingua: 'nl-NL' }), '/en/analisi-1');
  assert.equal(await destinazione('/', { cookie: 'lingua=%e' }), '/en');
});

test('le preferenze per le lingue sospese non aprono vecchie traduzioni', async () => {
  for (const lingua of ['de', 'es', 'fr']) {
    assert.equal(await destinazione('/', { lingua }), '/en');
    assert.equal(await destinazione('/analisi-1', { lingua: 'it', cookie: 'lingua=' + lingua }), null);
    assert.equal(await destinazione('/?lingua=' + lingua), '/en');
  }
});

test('i vecchi URL tedeschi, spagnoli e francesi rimandano all’italiano', async () => {
  for (const [path, meta] of [
    ['/de.html?catalogo=IT&lingua=de&ref=prova', '/?lingua=it&ref=prova'],
    ['/es/analisi-1/limiti/teoria.html?ref=prova', '/analisi-1/limiti/teoria?ref=prova&lingua=it'],
    ['/fr/reimposta-password?token=prova&lingua=fr', '/reimposta-password?token=prova&lingua=it'],
    ['/fr/index.html', '/?lingua=it'],
  ]) {
    const res = await risposta(path, { method: 'HEAD', agente: 'Googlebot' });
    assert.equal(res?.status, 302, path);
    assert.equal(res.headers.get('location'), meta, path);
    assert.equal(await destinazione(meta, { cookie: 'lingua=en' }), null, path);
  }
  assert.equal((await risposta('/de/api/accedi', { method: 'POST' }))?.status, 404);
});

test('la scelta del catalogo Italia conserva l’inglese e scarta le lingue sospese', async () => {
  assert.equal(await destinazione('/en?catalogo=IT&lingua=en'), '/en?lingua=en');
  assert.equal(await destinazione('/?catalogo=IT&lingua=de'), '/');
});

test('API, asset e crawler non attivano il cambio automatico', async () => {
  assert.equal(await destinazione('/', { agente: 'Googlebot' }), null);
  assert.equal(await destinazione('/', { method: 'POST' }), null);
  assert.equal(await destinazione('/api/accedi'), null);
  assert.equal(await destinazione('/indice-ricerca.json'), null);
  assert.equal(await destinazione('/esercizi'), null);
});

test('i vecchi link al catalogo USA continuano a rimandare al catalogo inglese', async () => {
  for (const path of ['/us', '/us.html', '/us/high-school/algebra-1', '/us/calculus-1/practice-exam']) {
    const res = await risposta(path + '?catalogo=US&ref=prova', { method: 'HEAD', agente: 'curl' });
    assert.equal(res?.status, 302, path);
    assert.equal(res.headers.get('location'), '/en?ref=prova', path);
    assert.match(res.headers.get('cache-control'), /no-store/);
  }
});
