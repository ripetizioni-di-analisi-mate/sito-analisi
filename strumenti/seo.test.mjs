import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { generaDate } from '../scripts/date-pagine.mjs';
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

test('le date SEO seguono i file originali, anche per capitoli generati e copie senza cronologia', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'seo-date-'));
  const git = (cwd, ...args) => execFileSync('git', args, {
    cwd, stdio: 'pipe',
    env: { ...process.env, GIT_AUTHOR_DATE: '2025-03-15T12:00:00Z', GIT_COMMITTER_DATE: '2025-03-15T12:00:00Z' },
  });
  try {
    const source = join(directory, 'origine'), breve = join(directory, 'breve');
    const rel = 'src/content/teoria/analisi-1/numeri-complessi.md';
    const copia = rel.replace('/analisi-1/', '/algebra-lineare/');
    const cache = 'src/data/date-pagine.json';
    await mkdir(join(source, 'src/content/teoria/analisi-1'), { recursive: true });
    await mkdir(join(source, 'src/content/teoria/algebra-lineare'), { recursive: true });
    await mkdir(join(source, 'src/data'));
    await writeFile(join(source, rel), 'Prima edizione');
    git(source, 'init', '-q');
    git(source, 'add', rel);
    git(source, '-c', 'user.name=Test', '-c', 'user.email=test@example.org', 'commit', '-qm', 'Teoria');
    await writeFile(join(source, copia), 'Prima edizione');
    generaDate(source);
    const leggi = async (root) => JSON.parse(await readFile(join(root, cache), 'utf8'));
    assert.equal((await leggi(source))[rel].data, '2025-03-15');
    assert.equal((await leggi(source))[copia].data, '2025-03-15');
    git(source, 'add', cache);
    git(source, '-c', 'user.name=Test', '-c', 'user.email=test@example.org', 'commit', '-qm', 'Date');
    git(directory, 'clone', '--depth', '1', pathToFileURL(source).href, breve);
    generaDate(breve);
    assert.equal((await leggi(breve))[rel].data, '2025-03-15');
    await writeFile(join(breve, rel), 'Contenuto diverso');
    generaDate(breve);
    assert.equal((await leggi(breve))[rel], undefined);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});

test('gli indici gratuiti di Analisi 1 collegano schede complete disponibili in ciascuna lingua',
  { skip: !existsSync('dist/analisi-1.html') }, async () => {
    for (const pre of ['', '/en']) {
      const percorso = pre + '/analisi-1/esercizi-svolti-gratuiti';
      const html = await readFile('dist' + percorso + '.html', 'utf8');
      const htmlMateria = await readFile('dist' + pre + '/analisi-1.html', 'utf8');
      assert.ok(htmlMateria.includes('href="' + percorso + '"'));
      assert.ok(html.includes('rel="canonical" href="' + sito + percorso + '"'));
      const voce = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]+?)<\/script>/)[1]);
      const elenco = voce['@graph'].find((item) => item['@type'] === 'ItemList');
      assert.ok(elenco.numberOfItems > 0);
      assert.equal(elenco.itemListElement.length, elenco.numberOfItems);
      for (const item of elenco.itemListElement) {
        const path = new URL(item.url).pathname;
        assert.ok(path.startsWith(pre + '/analisi-1/'));
        assert.match(path, /\/esercizi-svolti\/[123]$/);
        assert.ok(html.includes('href="' + path + '"'));
        assert.ok(existsSync('dist' + path + '.html'), path);
      }
      const capitolo = pre + '/analisi-1/limiti';
      const scheda = await readFile('dist' + capitolo + '/esercizi-svolti/1.html', 'utf8');
      assert.ok(scheda.includes('href="' + capitolo + '/teoria/limite-finito"'));
      assert.ok(existsSync('dist' + capitolo + '/teoria/limite-finito.html'));
    }
  });

test('quiz, ripasso generale e simulazioni pubblici restano distinti dal ripasso personale e dalle copie',
  { skip: !existsSync('dist/analisi-1/limiti/domande.html') }, async () => {
    const xml = await readFile('dist/sitemap.xml', 'utf8');
    for (const pre of ['', '/en']) {
      const radice = pre + '/analisi-1';
      for (const fine of ['/limiti/domande', '/prove-d-esame/domande', '/simulazione']) {
        const percorso = radice + fine;
        const pagina = await readFile('dist' + percorso + '.html', 'utf8');
        assert.ok(pagina.includes('rel="canonical" href="' + sito + percorso + '"'), percorso);
        assert.doesNotMatch(pagina, /<meta name="robots" content="noindex/);
        assert.ok(xml.includes('<loc>' + sito + percorso + '</loc>'), percorso);
        const destinazione = fine.startsWith('/prove-') ? '/limiti/domande'
          : fine === '/simulazione' ? '/limiti/esercizi' : '/limiti/teoria/';
        assert.ok(pagina.includes('href="' + radice + destinazione), destinazione);
      }
      const personale = radice + '/ripasso-di-oggi/domande';
      assert.match(await readFile('dist' + personale + '.html', 'utf8'), /<meta name="robots" content="noindex/);
      assert.ok(!xml.includes('<loc>' + sito + personale + '</loc>'));
      const copia = pre + '/algebra-lineare/numeri-complessi/domande';
      if (existsSync('dist' + copia + '.html')) {
        assert.ok((await readFile('dist' + copia + '.html', 'utf8')).includes('rel="canonical" href="' + sito + radice + '/numeri-complessi/domande"'));
        assert.ok(!xml.includes('<loc>' + sito + copia + '</loc>'));
      }
      const bocconi = pre + '/test-bocconi/simulazione';
      if (existsSync('dist' + bocconi + '.html')) assert.ok(xml.includes('<loc>' + sito + bocconi + '</loc>'));
    }
  });
