// Riconoscimento dei motori verificati (worker/motori.mjs): nome del robot + indirizzo IP negli elenchi ufficiali.
// node --test strumenti/motori.test.mjs
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { leggiElenco, motoreVerificato, MOTORI_IA, rigaFonte } from '../worker/motori.mjs';

const ELENCHI_FINTI = {
  'openai.com/searchbot.json': { creationTime: '2026-11-01', prefixes: [{ ipv4Prefix: '4.227.36.0/25' }] },
  'openai.com/chatgpt-user.json': { prefixes: [{ ipv4Prefix: '23.98.142.176/28' }] },
  'perplexity.com/perplexitybot.json': { prefixes: [{ ipv4Prefix: '107.20.236.150/32' }] },
  'perplexity.com/perplexity-user.json': { prefixes: [{ ipv4Prefix: '44.208.221.197/32' }] },
  // formato diverso: indirizzi singoli e reti in un elenco semplice
  'claude.com/crawling/bots.json': { aggiornato: '2026-08-13', indirizzi: ['34.162.46.92', '160.79.104.0/23', '2600:1900::/28'] },
  'googlebot.json': { prefixes: [{ ipv4Prefix: '66.249.64.0/27' }] },
  'bingbot.json': { prefixes: [{ ipv4Prefix: '157.55.39.0/24' }] },
};
globalThis.fetch = async (u) => {
  const chiave = Object.keys(ELENCHI_FINTI).find((k) => String(u).includes(k));
  return chiave ? new Response(JSON.stringify(ELENCHI_FINTI[chiave])) : new Response('no', { status: 404 });
};
const richiesta = (ua, ip) => new Request('https://ripetizionidianalisi.com/analisi-1/limiti/teoria', { headers: { 'user-agent': ua, 'cf-connecting-ip': ip } });

test('elenchi in formati diversi', () => {
  const r = leggiElenco(ELENCHI_FINTI['claude.com/crawling/bots.json']);
  assert.equal(r.v4.length, 2);
  assert.equal(r.v6.length, 1);
  assert.equal(leggiElenco({ prefixes: [{ ipv4Prefix: '1.2.3.0/24' }, { ipv6Prefix: '2001:db8::/32' }] }).v6.length, 1);
  assert.equal(leggiElenco({ testo: 'non è un indirizzo', data: '2026-11-25' }).v4.length, 0);
});

test('motori delle IA riconosciuti dal nome e dall\'indirizzo', async () => {
  assert.equal(await motoreVerificato(richiesta('Mozilla/5.0; compatible; OAI-SearchBot/1.4; +https://openai.com/searchbot', '4.227.36.10')), 'openai-search');
  assert.equal(await motoreVerificato(richiesta('Mozilla/5.0; compatible; ChatGPT-User/1.0; +https://openai.com/bot', '23.98.142.180')), 'openai-utente');
  assert.equal(await motoreVerificato(richiesta('Mozilla/5.0 (compatible; PerplexityBot/1.0)', '107.20.236.150')), 'perplexity');
  assert.equal(await motoreVerificato(richiesta('Mozilla/5.0 (compatible; Perplexity-User/1.0)', '44.208.221.197')), 'perplexity-utente');
  assert.equal(await motoreVerificato(richiesta('Mozilla/5.0 (compatible; Claude-SearchBot/1.0)', '34.162.46.92')), 'anthropic');
  assert.equal(await motoreVerificato(richiesta('Mozilla/5.0 (compatible; Claude-User/1.0)', '160.79.105.7')), 'anthropic');
  for (const m of ['openai-search', 'openai-utente', 'perplexity', 'perplexity-utente', 'anthropic']) assert.ok(MOTORI_IA.has(m));
  assert.ok(!MOTORI_IA.has('google') && !MOTORI_IA.has('bing'));
});

test('chi si finge un motore delle IA riceve l\'anteprima', async () => {
  assert.equal(await motoreVerificato(richiesta('OAI-SearchBot/1.4', '8.8.8.8')), null);
  assert.equal(await motoreVerificato(richiesta('Claude-SearchBot/1.0', '1.1.1.1')), null);
});

test('i robot di addestramento restano fuori', async () => {
  // GPTBot e ClaudeBot non sono riconosciuti, anche da un indirizzo dell'azienda
  assert.equal(await motoreVerificato(richiesta('Mozilla/5.0; compatible; GPTBot/1.3', '4.227.36.10')), null);
  assert.equal(await motoreVerificato(richiesta('Mozilla/5.0 (compatible; ClaudeBot/1.0)', '34.162.46.92')), null);
});

test('Google e Bing come prima', async () => {
  assert.equal(await motoreVerificato(richiesta('Mozilla/5.0 (compatible; Googlebot/2.1)', '66.249.64.5')), 'google');
  assert.equal(await motoreVerificato(richiesta('Mozilla/5.0 (compatible; bingbot/2.0)', '157.55.39.8')), 'bing');
});

test('riga della fonte', () => {
  const it = rigaFonte('https://ripetizionidianalisi.com/analisi-1/limiti/teoria', 'it');
  assert.match(it, /Fonte: Ing\. Carmine Tornincasa/);
  assert.match(it, /ripetizionidianalisi\.com\/analisi-1\/limiti\/teoria/);
  assert.match(rigaFonte('https://ripetizionidianalisi.com/en/x"<y', 'en'), /^<p class="fonte-ia">Source: .*\/en\/xy\./);
});
