import test from 'node:test';
import assert from 'node:assert/strict';
import { versoCatalogoStudio } from '../worker/catalogo-studio.mjs';
import { linguaBrowser, versoLaLinguaGiusta } from '../worker/lingua.mjs';

const env = { ASSETS: { fetch: () => Response.json({
  de: ['/', '/analisi-1', '/fisica-zero/lavoro-ed-energia/teoria'],
  es: ['/', '/analisi-1', '/fisica-zero/lavoro-ed-energia/teoria'],
  en: ['/', '/analisi-1', '/analisi-1/limiti/teoria'],
}) } };

async function destinazione(path, { lingua = 'de-DE,de;q=0.9,en;q=0.8', cookie = '', agente = 'Mozilla/5.0', method = 'GET' } = {}) {
  const url = new URL(path, 'https://ripetizionidianalisi.com');
  const req = new Request(url, { method, headers: { 'accept-language': lingua, cookie, 'user-agent': agente } });
  const r = await versoLaLinguaGiusta(req, env, url);
  return r?.headers.get('location') ?? null;
}

test('la lingua del browser rispetta le priorità e riconosce i tag regionali', () => {
  assert.equal(linguaBrowser('en-US;q=0.7,de-CH;q=0.9'), 'de');
  assert.equal(linguaBrowser('de;q=0,it-IT;q=0.8'), 'it');
});

test('il tedesco si apre soltanto per pagine presenti e conserva i parametri', async () => {
  assert.equal(await destinazione('/'), '/de');
  assert.equal(await destinazione('/analisi-1?ref=prova'), '/de/analisi-1?ref=prova');
  assert.equal(await destinazione('/fisica-zero/lavoro-ed-energia/teoria'), '/de/fisica-zero/lavoro-ed-energia/teoria');
  assert.equal(await destinazione('/analisi-1/limiti/teoria'), '/en/analisi-1/limiti/teoria');
  assert.equal(await destinazione('/prenota'), null);
});

test('lo spagnolo rispetta la disponibilità del materiale e la scelta esplicita', async () => {
  const spagnolo = { lingua: 'es-MX,es;q=0.9,en;q=0.8' };
  assert.equal(linguaBrowser('es-419;q=0.9,de;q=0.8'), 'es');
  assert.equal(await destinazione('/', spagnolo), '/es');
  assert.equal(await destinazione('/analisi-1?ref=prova', spagnolo), '/es/analisi-1?ref=prova');
  assert.equal(await destinazione('/fisica-zero/lavoro-ed-energia/teoria', spagnolo), '/es/fisica-zero/lavoro-ed-energia/teoria');
  assert.equal(await destinazione('/analisi-1/limiti/teoria', spagnolo), '/en/analisi-1/limiti/teoria');
  assert.equal(await destinazione('/analisi-1/limiti/teoria?lingua=it', spagnolo), null);
  assert.equal(await destinazione('/argomento-inesistente', spagnolo), null);
  assert.equal(await destinazione('/es', { lingua: 'it-IT' }), null);
  assert.equal(await destinazione('/es/analisi-1?lingua=es', { cookie: 'lingua=de' }), null);
  assert.equal(await destinazione('/de/analisi-1', { cookie: 'lingua=es' }), '/es/analisi-1');
});

test('i link diretti e le scelte esplicite funzionano in tutte le lingue', async () => {
  assert.equal(await destinazione('/de', { lingua: 'it-IT' }), null);
  assert.equal(await destinazione('/de', { cookie: 'lingua=it' }), '/');
  assert.equal(await destinazione('/de', { cookie: 'lingua=en' }), '/en');
  assert.equal(await destinazione('/de/fisica-zero/lavoro-ed-energia/teoria', { cookie: 'lingua=en' }), null);
  assert.equal(await destinazione('/en/analisi-1', { lingua: 'it-IT' }), '/analisi-1');
  assert.equal(await destinazione('/analisi-1', { lingua: 'fr-FR' }), '/en/analisi-1');
  assert.equal(await destinazione('/analisi-1/limiti/teoria?lingua=it'), null);
  assert.equal(await destinazione('/', { cookie: 'lingua=%e' }), '/de');
});

test('i robot, gli asset e le API non vengono reindirizzati', async () => {
  assert.equal(await destinazione('/', { agente: 'Googlebot' }), null);
  assert.equal(await destinazione('/', { method: 'POST' }), null);
  assert.equal(await destinazione('/api/accedi'), null);
  assert.equal(await destinazione('/de/api/accedi', { cookie: 'lingua=it' }), null);
  assert.equal(await destinazione('/de/indice-ricerca.json'), null);
});

test('la scelta di un catalogo conserva la lingua compatibile', () => {
  for (const [path, attesa] of [
    ['/de?catalogo=IT&lingua=de', '/de?lingua=de'],
    ['/es?catalogo=IT&lingua=es', '/es?lingua=es'],
    ['/en?catalogo=IT&lingua=en', '/en?lingua=en'],
    ['/us?catalogo=US', '/us'],
  ]) {
    const url = new URL(path, 'https://ripetizionidianalisi.com');
    const req = new Request(url, { headers: { 'user-agent': 'Mozilla/5.0' } });
    assert.equal(versoCatalogoStudio(req, url)?.headers.get('location'), attesa);
  }
});
