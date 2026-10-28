// Pagina di confronto "prima / dopo" di una teoria, resa con la stessa pipeline del sito.
// Uso: node scripts/confronto.mjs <prima.md> <dopo.md> <titolo> <uscita.html>
import fs from 'node:fs';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkMath from 'remark-math';
import remarkDirective from 'remark-directive';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import remarkBlocchi from '../src/plugins/remark-blocchi.mjs';

const [fPrima, fDopo, titolo, uscita] = process.argv.slice(2);
const via = (s) => s.replace(/^---\n[\s\S]*?\n---\n/, '');
async function rendi(md) {
  const f = await unified().use(remarkParse).use(remarkMath).use(remarkDirective).use(remarkBlocchi)
    .use(remarkRehype, { allowDangerousHtml: true }).use(rehypeRaw)
    .use(rehypeKatex, { strict: false, output: 'html' }).use(rehypeStringify).process(md);
  return String(f);
}
// divide in sezioni ## (la prima parte, prima del primo titolo, è l'apertura)
function sezioni(md) {
  const parti = via(md).split(/^(?=## )/m);
  return parti.map((p) => { const m = p.match(/^## (.+)\n/); return { titolo: m ? m[1].trim() : 'Apertura', corpo: p }; });
}
const A = sezioni(fs.readFileSync(fPrima, 'utf8')), B = sezioni(fs.readFileSync(fDopo, 'utf8'));
const nomi = [...new Set([...A, ...B].map((s) => s.titolo))];
const righe = [];
for (const n of nomi) {
  const a = A.find((s) => s.titolo === n), b = B.find((s) => s.titolo === n);
  righe.push({ titolo: n, prima: a ? await rendi(a.corpo) : '<p class="vuota">Non c\'era.</p>', dopo: b ? await rendi(b.corpo) : '<p class="vuota">Tolta.</p>',
    lp: a ? a.corpo.length : 0, ld: b ? b.corpo.length : 0 });
}
const css = fs.readFileSync(new URL('../src/styles/global.css', import.meta.url), 'utf8');
// KaTeX con i caratteri incorporati (solo woff2), perché la pagina non può caricarli da fuori.
const dirK = new URL('../node_modules/katex/dist/', import.meta.url);
const katexCss = fs.readFileSync(new URL('katex.min.css', dirK), 'utf8')
  .replace(/src:url\(fonts\/([^)]+\.woff2)\) format\("woff2"\)[^;}]*/g, (_, f) => `src:url(data:font/woff2;base64,${fs.readFileSync(new URL('fonts/' + f, dirK)).toString('base64')}) format("woff2")`);
const sezioniHtml = righe.map((r, i) => `<section class="riga" id="s${i}">
<h2 class="titolo-sez">${r.titolo === 'Apertura' ? 'Apertura della pagina' : r.titolo}<small>${r.lp ? Math.round(((r.ld - r.lp) / r.lp) * 100) : 100}% di testo</small></h2>
<div class="coppia"><div class="lato prima"><p class="cartellino">Prima</p>${r.prima}</div><div class="lato dopo"><p class="cartellino">Adesso</p>${r.dopo}</div></div></section>`).join('\n');
const indice = righe.map((r, i) => `<a href="#s${i}">${r.titolo === 'Apertura' ? 'Apertura' : r.titolo}</a>`).join('');
const pagina = `<title>${titolo}</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600;700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600;8..60,700&display=swap">
<style>
${katexCss}
${css.replace(/@import[^;]+;/g, '')}
/* pagina di confronto: una sola veste chiara, come il sito */
:root { color-scheme: light; --testo: 'Source Serif 4', Georgia, serif; --titoli: 'Source Serif 4', Georgia, serif; --ui: 'Source Sans 3', system-ui, sans-serif; }
html, body { background: var(--carta); }
body { padding-left: max(16px, env(safe-area-inset-left, 0px)); padding-right: max(16px, env(safe-area-inset-right, 0px)); padding-block: 0 4rem; }
.testa-confronto { max-width: 84rem; margin: 0 auto; padding-block: 2rem 1rem; display: grid; gap: .6rem; }
.testa-confronto h1 { font-size: clamp(1.6rem, 4vw, 2.2rem); margin: 0; }
.testa-confronto p { margin: 0; color: var(--inchiostro-2); max-width: 46rem; }
.indice-sez { position: sticky; top: env(safe-area-inset-top, 0px); z-index: 5; background: var(--carta); display: flex; gap: .4rem; overflow-x: auto; padding-block: .6rem; border-bottom: 1px solid var(--riga); max-width: 84rem; margin: 0 auto; font-family: var(--ui); }
.indice-sez a { flex: none; font-size: .85rem; font-weight: 600; color: var(--inchiostro-2); text-decoration: none; padding: .25rem .7rem; border: 1px solid var(--riga); border-radius: 99px; }
.indice-sez a:hover { color: var(--accento); border-color: var(--accento); }
.riga { max-width: 84rem; margin: 0 auto; padding-top: 1.6rem; scroll-margin-top: 3.4rem; }
.titolo-sez { font-size: 1.35rem; display: flex; align-items: baseline; gap: .8rem; flex-wrap: wrap; border-bottom: 2px solid var(--accento); padding-bottom: .4rem; }
.titolo-sez small { font: 600 .8rem var(--ui); color: var(--inchiostro-2); }
.coppia { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 2rem; }
.lato { min-width: 0; font-size: 1rem; line-height: 1.6; }
.lato.prima { opacity: .78; }
.lato > h2:first-of-type { display: none; }
.cartellino { position: sticky; top: 3.2rem; z-index: 2; display: inline-block; font: 700 .72rem var(--ui); letter-spacing: .08em; text-transform: uppercase; padding: .2rem .6rem; border-radius: 99px; margin: .8rem 0 0; }
.prima .cartellino { background: #ece7dc; color: #6b6458; }
.dopo .cartellino { background: color-mix(in srgb, var(--accento) 14%, var(--carta)); color: var(--accento); }
.vuota { color: var(--inchiostro-2); font-style: italic; }
.grafico svg { max-width: 100%; }
math[display="block"] { overflow-x: auto; max-width: 100%; }
.lato .blocco-esercizi { display: none; }
@media (max-width: 860px) { .coppia { grid-template-columns: minmax(0, 1fr); gap: .5rem; } .lato.prima { border-bottom: 1px dashed var(--riga); padding-bottom: 1rem; } }
</style>
<header class="testa-confronto"><p class="sopratitolo">Analisi matematica 1 · revisione di chiarezza</p><h1>${titolo}</h1>
<p>A sinistra la teoria com'era, a destra com'è adesso, sezione per sezione. Da telefono le due versioni sono una sotto l'altra. La percentuale accanto a ogni titolo dice quanto testo in più c'è adesso.</p></header>
<nav class="indice-sez" aria-label="Sezioni">${indice}</nav>
${sezioniHtml}`;
fs.writeFileSync(uscita, pagina);
console.log('sezioni', righe.length, 'byte', pagina.length);
