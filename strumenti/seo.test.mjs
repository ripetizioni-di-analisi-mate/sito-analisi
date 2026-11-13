import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { stripTypeScriptTypes } from 'node:module';
import { generaSitemap } from '../scripts/sitemap-verificata.mjs';

const sito = 'https://ripetizionidianalisi.com';
const pagina = (url, extra = '') => `<html><head><title>Test</title><link rel="canonical" href="${sito}${url}"/>${extra}</head><body><h1>Test</h1></body></html>`;

test('tutte le discipline attive hanno testi distinti e collegamenti validi', async () => {
  const source = await readFile(new URL('../src/data/seo-discipline.ts', import.meta.url), 'utf8');
  const { GUIDE_DISCIPLINE } = await import(`data:text/javascript;base64,${Buffer.from(stripTypeScriptTypes(source)).toString('base64')}`);
  const prezzi = await readFile(new URL('../src/data/prezzi.json', import.meta.url), 'utf8');
  const catalogo = (await readFile(new URL('../src/data/materie.ts', import.meta.url), 'utf8'))
    .replace("import PREZZI from './prezzi.json';", `const PREZZI = ${prezzi};`);
  const { MATERIE } = await import(`data:text/javascript;base64,${Buffer.from(stripTypeScriptTypes(catalogo)).toString('base64')}`);
  const attive = MATERIE.filter((m) => m.attiva);
  const titoli = new Set(), descrizioni = new Set();
  for (const materia of attive) {
    const guida = GUIDE_DISCIPLINE[materia.slug];
    assert.ok(guida, materia.slug);
    assert.ok(!titoli.has(guida.titolo), `Titolo ripetuto: ${materia.slug}`);
    assert.ok(!descrizioni.has(guida.descrizione), `Descrizione ripetuta: ${materia.slug}`);
    assert.ok(guida.descrizione.length <= 160, `Descrizione lunga: ${materia.slug}`);
    titoli.add(guida.titolo); descrizioni.add(guida.descrizione);
    for (const slug of guida.esempi) assert.ok(materia.argomenti.some((a) => a.slug === slug), `${materia.slug}/${slug}`);
    for (const slug of guida.collegate) assert.ok(MATERIE.some((m) => m.attiva && m.slug === slug), slug);
  }
});

test('sitemap ricavata dalle pagine canoniche e indicizzabili della build', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'seo-sitemap-'));
  try {
    await mkdir(join(directory, 'en'));
    await mkdir(join(directory, 'vetrine'));
    const alternate = (lang, url) => `<link rel="alternate" hreflang="${lang}" href="${sito}${url}"/>`;
    await writeFile(join(directory, 'index.html'), pagina('/'));
    await writeFile(join(directory, 'analisi-1.html'), pagina('/analisi-1',
      `<meta name="last-modified" content="2026-11-01"/>` +
      alternate('en', '/en/analisi-1') + alternate('fr', '/fr/analisi-1') +
      `<script type="application/ld+json">${JSON.stringify({ '@graph': [{ '@type': 'Course', url: `${sito}/analisi-1` }] })}</script>`));
    await writeFile(join(directory, 'en/analisi-1.html'), pagina('/en/analisi-1', alternate('it', '/analisi-1')));
    await writeFile(join(directory, 'copia.html'), pagina('/analisi-1'));
    await writeFile(join(directory, 'account.html'), pagina('/account', '<meta name="robots" content="noindex, follow"/>'));
    await writeFile(join(directory, 'vetrine/analisi-1.html'), pagina('/vetrine/analisi-1'));
    await writeFile(join(directory, '404.html'), pagina('/404'));
    const result = await generaSitemap(directory);
    assert.deepEqual(result, { pagine: 3, mappe: 2 });
    const xml = await readFile(join(directory, 'sitemap.xml'), 'utf8');
    assert.match(xml, /<lastmod>2026-11-01<\/lastmod>/);
    assert.match(xml, /hreflang="en"/);
    assert.doesNotMatch(xml, /\/account|\/copia|\/vetrine|\/404|hreflang="fr"/);
    const html = await readFile(join(directory, 'analisi-1.html'), 'utf8');
    assert.doesNotMatch(html, /hreflang="fr"/);
    assert.match(html, /hreflang="en"/);
    const index = await readFile(join(directory, 'sitemap-index.xml'), 'utf8');
    assert.match(index, /sitemap-analisi-1.xml/);
    assert.match(index, /sitemap-pagine.xml/);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});

test('una pagina senza canonical interrompe la generazione', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'seo-sitemap-'));
  try {
    await writeFile(join(directory, 'index.html'), '<html><head><title>Test</title></head></html>');
    await assert.rejects(generaSitemap(directory), /Canonical assente/);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});
