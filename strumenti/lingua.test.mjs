import test from 'node:test';
import assert from 'node:assert/strict';
import { versoCatalogoStudio } from '../worker/catalogo-studio.mjs';
import { linguaBrowser, versoLaLinguaGiusta } from '../worker/lingua.mjs';

function richiesta(path, { method = 'GET', lingua = 'de-DE,de;q=0.9,en;q=0.8', cookie = '', agente = 'Mozilla/5.0' } = {}) {
  return new Request(new URL(path, 'https://ripetizionidianalisi.com'), {
    method, headers: { 'accept-language': lingua, cookie, 'user-agent': agente },
  });
}

const env = { ASSETS: { fetch: () => assert.fail('Il Worker non deve consultare l’indice delle traduzioni') } };

async function risposta(path, opzioni) {
  const req = richiesta(path, opzioni);
  const url = new URL(req.url);
  return versoCatalogoStudio(req, url) ?? versoLaLinguaGiusta(req, env, url);
}

test('il parser di Accept-Language riconosce le varianti regionali e le priorità', () => {
  assert.equal(linguaBrowser('en-US;q=0.7,de-CH;q=0.9'), 'de');
  assert.equal(linguaBrowser('de;q=0,it-IT;q=0.8'), 'it');
  assert.equal(linguaBrowser('es-419;q=0.9,de;q=0.8'), 'es');
  assert.equal(linguaBrowser('fr-CH;q=0.9,de;q=0.8'), 'fr');
});

test('le pagine italiane ignorano la lingua del browser e le preferenze salvate', async () => {
  for (const path of ['/', '/?catalogo=US', '/analisi-1/limiti/teoria?lingua=es', '/accedi', '/esercizi', '/api/accedi', '/risorse/en.css']) {
    assert.equal(await risposta(path, { cookie: 'lingua=en; catalogo_studio=US' }), null, path);
  }
});

test('le vecchie pagine tradotte portano alle corrispondenti pagine italiane', async () => {
  for (const [path, meta] of [
    ['/en', '/'],
    ['/de.html?catalogo=IT&lingua=de&ref=prova', '/?ref=prova'],
    ['/en/index.html', '/'],
    ['/es/analisi-1/limiti/teoria.html?lingua=es&ref=prova', '/analisi-1/limiti/teoria?ref=prova'],
    ['/fr/reimposta-password?token=prova&lingua=fr', '/reimposta-password?token=prova'],
    ['/en/indice-ricerca.json', '/indice-ricerca.json'],
    ['/pdf/formulari/en/analisi-1.pdf', '/pdf/formulari/analisi-1.pdf'],
  ]) {
    const res = await risposta(path, { method: 'HEAD', agente: 'Googlebot', cookie: 'lingua=de' });
    assert.equal(res?.status, 302, path);
    assert.equal(res.headers.get('location'), meta, path);
    assert.match(res.headers.get('cache-control'), /no-store/);
  }
  assert.equal((await risposta('/de/api/accedi', { method: 'POST' }))?.status, 404);
});

test('i vecchi link al catalogo USA portano alla home italiana', async () => {
  for (const path of ['/us', '/us.html', '/us/high-school/algebra-1', '/us/calculus-1/practice-exam']) {
    const res = await risposta(path + '?catalogo=US&lingua=en&ref=prova');
    assert.equal(res?.status, 302, path);
    assert.equal(res.headers.get('location'), '/?ref=prova', path);
  }
});
