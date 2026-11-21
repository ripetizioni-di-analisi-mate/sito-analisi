// Controllo locale (non va nel repository): rende i file dati con il processore del sito.
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { createMarkdownProcessor } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import remarkDirective from 'remark-directive';
import remarkBlocchi from '../src/plugins/remark-blocchi.mjs';
import rehypeKatex from 'rehype-katex';
import katex from 'katex';
let remarkTracce = null;
try { remarkTracce = (await import('../src/plugins/remark-tracce.mjs')).default; } catch {}
const processore = await createMarkdownProcessor({
  remarkPlugins: [remarkMath, remarkDirective, remarkBlocchi, ...(remarkTracce ? [remarkTracce] : [])],
  rehypePlugins: [[rehypeKatex, { strict: false, output: 'html' }]],
});
let err = 0;
for (const p of process.argv.slice(2)) {
  const t = readFileSync(p, 'utf8');
  const corpo = t.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, '');
  let formule = 0;
  try {
    for (const m of corpo.matchAll(/\$\$([\s\S]*?)\$\$|(?<!\$)\$(?!\$)([^\n$]+?)\$(?!\$)/g)) {
      katex.renderToString(m[1] ?? m[2], { displayMode: m[1] !== undefined, throwOnError: true, strict: false }); formule++;
    }
    const html = (await processore.render(corpo, { fileURL: pathToFileURL(resolve(p)) })).code;
    const guai = [];
    if (html.includes('katex-error')) guai.push('errore KaTeX');
    if (/(?:^|\n|>)\s*:{2,4}(?:definizione|teorema|dimostrazione|esempio|osservazione|attenzione|richiamo|grafico|struttura|schema)\b/.test(html)) guai.push('direttiva non resa');
    const fig = (html.match(/<figure|<svg/g) || []).length;
    const blocchi = (html.match(/class="[^"]*blocco/g) || []).length;
    console.log(`${guai.length ? 'ERRORE' : 'ok'} ${p}: formule ${formule}, figure/svg ${fig}, blocchi ${blocchi}, h2 ${(html.match(/<h2/g) || []).length}${guai.length ? ' → ' + guai.join(', ') : ''}`);
    if (guai.length) err++;
  } catch (e) { console.log('ERRORE', p, String(e.message).slice(0, 300)); err++; }
}
process.exit(err ? 1 : 0);
