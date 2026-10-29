// Uso (dalla radice del repository): node <questo file> <uscita.png> <file.md> [<file.md> ...]
// Disegna tutte le figure ::grafico e ::venn dei file indicati in un'unica immagine PNG, con il nome
// del file sopra ogni figura, e segnala gli errori. Aprire il PNG con il tool Read per controllarle.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
const radice = process.cwd();
const { grafico } = await import(pathToFileURL(path.join(radice, 'src/plugins/grafico.mjs')));
const { venn } = await import(pathToFileURL(path.join(radice, 'src/plugins/venn.mjs')));
const [uscita, ...files] = process.argv.slice(2);
const attr = (s) => { const o = {}; for (const m of s.matchAll(/(\w+)=(?:"([^"]*)"|([^\s}]+))/g)) o[m[1]] = m[2] ?? m[3]; return o; };
let html = '', n = 0, errori = 0;
for (const f of files) {
  const t = fs.readFileSync(f, 'utf8');
  for (const m of t.matchAll(/^::(grafico|venn)\{(.*)\}\s*$/gm)) {
    n++;
    try {
      const a = attr(m[2]);
      const svg = m[1] === 'grafico' ? grafico(a) : venn(a);
      if (m[1] === 'grafico' && (a.f || a.curve) && !/class="curva[^"]*" d="M/.test(svg)) { errori++; console.log(`ATTENZIONE ${f}: curva vuota (fuori dal riquadro o espressione non valida): ${m[0]}`); }
      html += `<div class="cella"><p>${path.basename(path.dirname(f))}/${path.basename(f)}</p>${svg}</div>`;
    } catch (e) { errori++; console.log(`ERRORE ${f}: ${e.message}: ${m[0]}`); }
  }
}
// Se la cartella della build manca (una build è in corso), si usano il CSS di KaTeX da node_modules e gli stili del sito.
const risorse = path.join(radice, 'dist/risorse');
const cssBuild = fs.existsSync(risorse) ? fs.readdirSync(risorse).filter((x) => x.endsWith('.css')).map((x) => fs.readFileSync(path.join(radice, 'dist/risorse', x), 'utf8')).join('\n')
  .replace(/url\(\/?risorse\//g, `url(${pathToFileURL(risorse).href}/`)
  : fs.readFileSync(path.join(radice, 'node_modules/katex/dist/katex.min.css'), 'utf8').replace(/url\(fonts\//g, `url(${pathToFileURL(path.join(radice, 'node_modules/katex/dist/fonts')).href}/`);
const css = cssBuild + '\n' + fs.readFileSync(path.join(radice, 'src/styles/global.css'), 'utf8'); // stili correnti, anche prima di una nuova build
const pagina = `<!doctype html><html lang="it" style="--accento:#2f6f68"><head><meta charset="utf-8"><style>${css}
body{margin:0;padding:10px} .griglia{display:grid;grid-template-columns:1fr 1fr;gap:12px} .cella p{font:12px sans-serif;margin:0;color:#555}</style></head><body><div class="griglia">${html}</div></body></html>`;
const tmp = path.join(path.dirname(uscita), `anteprima-${process.pid}.html`);
fs.writeFileSync(tmp, pagina);
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright');
const b = await chromium.launch(); const pg = await b.newPage({ viewport: { width: 1000, height: 800 } });
await pg.goto(pathToFileURL(tmp).href); await pg.screenshot({ path: uscita, fullPage: true }); await b.close();
fs.unlinkSync(tmp);
console.log(`${n} figure disegnate in ${uscita}; ${errori} problemi`);
