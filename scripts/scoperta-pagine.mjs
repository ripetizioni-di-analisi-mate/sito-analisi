// Verifica i percorsi di navigazione della versione pubblica dopo l'unione di tutti i pezzi.
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fromHtmlIsomorphic } from 'hast-util-from-html-isomorphic';

function linkHome(html) {
  const hrefs = [];
  function leggi(nodo) {
    const p = nodo.properties ?? {};
    if ('dataSoloSessione' in p || 'dataOrientamentoGm' in p || ['script', 'style', 'template'].includes(nodo.tagName)) return;
    if (nodo.tagName === 'a' && typeof p.href === 'string' && !p.rel?.includes('nofollow')) hrefs.push(p.href);
    for (const figlio of nodo.children ?? []) leggi(figlio);
  }
  leggi(fromHtmlIsomorphic(html));
  return hrefs;
}

function linkPagina(html) {
  const corpo = html.replace(/<(script|style|template)\b[^>]*>[\s\S]*?<\/\1\s*>|<!--[\s\S]*?-->/gi, '');
  const hrefs = [];
  for (const [tag] of corpo.matchAll(/<a\s+(?:[^>"']|"[^"]*"|'[^']*')*>/gi)) {
    if (/\srel=["'][^"']*\bnofollow\b/i.test(tag)) continue;
    const m = tag.match(/\shref\s*=\s*(["'])(.*?)\1/i);
    if (m) hrefs.push(m[2].replace(/&amp;/g, '&'));
  }
  return hrefs;
}

function raggiunte(grafo, radici, alternative) {
  const viste = new Set(radici), coda = [...viste];
  for (let i = 0; i < coda.length; i++) {
    const pagina = coda[i];
    const mete = alternative ? [...grafo[pagina], ...alternative[pagina]] : grafo[pagina];
    for (const meta of mete) if (!viste.has(meta)) { viste.add(meta); coda.push(meta); }
  }
  return viste;
}

export async function verificaScoperta(directory, pagine) {
  const id = new Map(pagine.map((p, i) => [new URL(p.location).pathname, i]));
  const radici = [...id].filter(([p]) => /^\/(?:en|es|fr|de)?$/.test(p)).map(([, i]) => i);
  const grafo = [], lingue = [];
  for (const [i, pagina] of pagine.entries()) {
    const vetrina = join(directory, 'vetrine', relative(directory, pagina.path));
    const html = await readFile(existsSync(vetrina) ? vetrina : pagina.path, 'utf8');
    const hrefs = radici.includes(i) ? linkHome(html) : linkPagina(html);
    const url = new URL(pagina.location);
    const diretti = new Set();
    for (const href of hrefs) {
      if (!href || href.startsWith('#') || href.startsWith('?')) continue;
      let path;
      if (href.startsWith('/') && !href.startsWith('//')) path = href.split(/[?#]/, 1)[0];
      else {
        let meta;
        try { meta = new URL(href, url); } catch { continue; }
        if (meta.origin !== url.origin) continue;
        path = meta.pathname;
      }
      const meta = id.get(path.replace(/\/$/, '') || '/');
      if (meta !== undefined && meta !== i) diretti.add(meta);
    }
    grafo.push(diretti);
    lingue.push(pagina.alternates.map((v) => id.get(new URL(v.href).pathname)).filter((n) => n !== undefined));
  }
  const daHome = raggiunte(grafo, radici);
  const conLingue = raggiunte(grafo, id.has('/') ? [id.get('/')] : [], lingue);
  return { dirette: daHome.size, totali: pagine.length,
    orfane: pagine.filter((_, i) => !conLingue.has(i)).map((p) => p.location) };
}
