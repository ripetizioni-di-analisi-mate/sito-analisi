// La sitemap finale segue l'HTML effettivamente pubblicato, incluse le anteprime
// e le traduzioni disponibili. La mappa unica resta compatibile con IndexNow.
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, relative, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const ORIGINE = 'https://ripetizionidianalisi.com';
const ESCLUSE = /^(?:vetrine|risorse|dati-[^/]+|email|pdf)(?:\/|$)/;
const XML = 'http://www.sitemaps.org/schemas/sitemap/0.9';
const XHTML = 'http://www.w3.org/1999/xhtml';
const escapeXml = (value) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const decodifica = (value) => value.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'");

function attributo(tag, name) {
  const match = tag.match(new RegExp(`\\b${name}\\s*=\\s*(["'])(.*?)\\1`, 'i'));
  return match ? decodifica(match[2]) : '';
}

async function* fileHtml(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) yield* fileHtml(path);
    else if (entry.name.endsWith('.html')) yield path;
  }
}

function urlPagina(path) {
  const clean = `/${path}`.replace(/\.html$/, '').replace(/\/index$/, '').replace(/\/$/, '') || '/';
  return `${ORIGINE}${clean}`;
}

function leggiPagina(html, location) {
  const head = html.slice(0, html.indexOf('</head>'));
  const meta = [...head.matchAll(/<meta\b[^>]*>/gi)].map(([tag]) => tag);
  if (meta.some((tag) => ['robots', 'googlebot'].includes(attributo(tag, 'name').toLowerCase())
    && /(?:^|[\s,])(noindex|none)(?:$|[\s,])/i.test(attributo(tag, 'content')))) return null;
  const links = [...head.matchAll(/<link\b[^>]*>/gi)].map(([tag]) => tag);
  const canonical = links.find((tag) => attributo(tag, 'rel') === 'canonical');
  if (!canonical) throw new Error(`Canonical assente in ${location}`);
  if (attributo(canonical, 'href') !== location) return null;
  const data = meta.find((tag) => attributo(tag, 'name') === 'last-modified');
  const lastmod = data && attributo(data, 'content');
  const alternates = links.filter((tag) => attributo(tag, 'rel') === 'alternate' && attributo(tag, 'hreflang'))
    .map((tag) => ({ lingua: attributo(tag, 'hreflang'), href: attributo(tag, 'href') }));
  const graphs = [...head.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)]
    .flatMap(([, source]) => {
      const value = JSON.parse(source);
      return value['@graph'] ?? [value];
    });
  const corso = graphs.some((item) => item['@type'] === 'Course' && item.url === location);
  return { location, lastmod: /^\d{4}-\d{2}-\d{2}(?:T.*)?$/.test(lastmod || '') ? lastmod : undefined, alternates, corso };
}

function xmlPagina(page) {
  const alternates = page.alternates.map(({ lingua, href }) =>
    `<xhtml:link rel="alternate" hreflang="${escapeXml(lingua)}" href="${escapeXml(href)}"/>`).join('');
  return `<url><loc>${escapeXml(page.location)}</loc>${page.lastmod ? `<lastmod>${escapeXml(page.lastmod)}</lastmod>` : ''}${alternates}</url>`;
}

const xmlMappa = (pages) => `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="${XML}" xmlns:xhtml="${XHTML}">\n${pages.map(xmlPagina).join('\n')}\n</urlset>\n`;

export async function generaSitemap(directory = 'dist') {
  const pages = new Map();
  for await (const path of fileHtml(directory)) {
    const rel = relative(directory, path).replaceAll('\\', '/');
    if (ESCLUSE.test(rel) || rel === '404.html') continue;
    const location = urlPagina(rel);
    const page = leggiPagina(await readFile(path, 'utf8'), location);
    if (page) pages.set(location, { ...page, path });
  }
  // Si dichiarano solo versioni canoniche esistenti e con collegamento di ritorno.
  const originali = new Map([...pages].map(([url, page]) => [url, page.alternates]));
  let alternatiRimossi = 0;
  for (const page of pages.values()) {
    const prima = page.alternates.length;
    page.alternates = page.alternates.filter(({ lingua, href }) => {
      const target = pages.get(href);
      return target && (lingua === 'x-default' || href === page.location
        || originali.get(href).some((alternate) => alternate.href === page.location));
    });
    if (prima === page.alternates.length) continue;
    alternatiRimossi += prima - page.alternates.length;
    // La pagina pubblica può essere servita dalla sua anteprima riservata.
    // Entrambe devono riportare le stesse alternative valide.
    for (const path of [page.path, join(directory, 'vetrine', relative(directory, page.path))]) {
      let html;
      try { html = await readFile(path, 'utf8'); }
      catch (error) { if (error.code === 'ENOENT') continue; throw error; }
      const fine = html.indexOf('</head>');
      const head = html.slice(0, fine).replace(/<link\b[^>]*>/gi, (tag) => {
        if (attributo(tag, 'rel') !== 'alternate' || !attributo(tag, 'hreflang')) return tag;
        return page.alternates.some((item) => item.lingua === attributo(tag, 'hreflang')
          && item.href === attributo(tag, 'href')) ? tag : '';
      });
      await writeFile(path, head + html.slice(fine));
    }
  }
  const sorted = [...pages.values()].sort((a, b) => a.location.localeCompare(b.location));
  if (!sorted.length) throw new Error('Nessuna pagina indicizzabile per la sitemap');
  const corsi = new Set(sorted.filter((page) => page.corso).map((page) =>
    new URL(page.location).pathname.replace(/^\/(en|de|es|fr)(?=\/)/, '').split('/')[1]));
  const gruppi = new Map();
  for (const page of sorted) {
    const slug = new URL(page.location).pathname.replace(/^\/(en|de|es|fr)(?=\/)/, '').split('/')[1];
    const group = corsi.has(slug) ? slug : 'pagine';
    if (!gruppi.has(group)) gruppi.set(group, []);
    gruppi.get(group).push(page);
  }
  const maps = [];
  for (const [group, entries] of [...gruppi].sort(([a], [b]) => a.localeCompare(b))) {
    for (let i = 0; i < entries.length; i += 10000) {
      const chunk = entries.slice(i, i + 10000);
      const name = `sitemap-${group}${entries.length > 10000 ? `-${i / 10000 + 1}` : ''}.xml`;
      const xml = xmlMappa(chunk);
      if (Buffer.byteLength(xml) > 50 * 1024 * 1024) throw new Error(`Sitemap troppo grande: ${name}`);
      await writeFile(join(directory, name), xml);
      maps.push(name);
    }
  }
  // Il Worker legge questo elenco per le notifiche IndexNow già configurate.
  if (sorted.length > 50000) throw new Error('La sitemap unica supera 50.000 URL: aggiornare anche il lettore IndexNow');
  await writeFile(join(directory, 'sitemap.xml'), xmlMappa(sorted));
  const index = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="${XML}">\n${maps.map((name) => `<sitemap><loc>${ORIGINE}/${name}</loc></sitemap>`).join('\n')}\n</sitemapindex>\n`;
  await writeFile(join(directory, 'sitemap-index.xml'), index);
  console.log(`SEO: ${pages.size} URL canonici verificati, ${maps.length} sitemap per materia e pagine generali, ${alternatiRimossi} alternative di lingua non valide rimosse.`);
  return { pagine: pages.size, mappe: maps.length };
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  await generaSitemap(process.argv[2] || 'dist');
}
