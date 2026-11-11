// Rende i nuovi contenuti con gli stessi plugin del sito, comprese le formule display.
// Eseguire dalla radice: node strumenti/verifica-primo-anno-render.mjs
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import assert from 'node:assert/strict';
import { createMarkdownProcessor } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import remarkDirective from 'remark-directive';
import remarkBlocchi from '../src/plugins/remark-blocchi.mjs';
import remarkTracce from '../src/plugins/remark-tracce.mjs';
import rehypeKatex from '../src/plugins/rehype-katex-tex.mjs';

const processor = await createMarkdownProcessor({
  remarkPlugins: [remarkMath, remarkDirective, remarkBlocchi, remarkTracce],
  rehypePlugins: [[rehypeKatex, { strict: false, output: 'html' }]],
  shikiConfig: { theme: 'github-light' },
});
let pages = 0, formulas = 0, worked = 0;
const errors = [];
for (const subject of ['matematica-superiori-1', 'fisica-superiori-1']) {
  for (const collection of ['teoria', 'svolti', 'dafare', 'domande']) {
    const base = join('src/content', collection, subject);
    const files = readdirSync(base, { recursive: true }).filter(f => f.endsWith('.md'));
    assert(files.length > 0, `${base}: contenuti mancanti`);
    for (const relative of files) {
      const file = join(base, relative);
      const source = readFileSync(file, 'utf8').replace(/^---\n[\s\S]*?\n---\n/, '');
      const { code } = await processor.render(source, { fileURL: pathToFileURL(file) });
      if (code.includes('katex-error')) {
        const reasons = [...code.matchAll(/class="katex-error"[^>]*title="([^"]*)"/g)].map(m => m[1]);
        errors.push(`${file}: formula non resa da KaTeX${reasons.length ? ' — ' + reasons.join('; ') : ''}`);
      }
      if (/<p>:::/.test(code)) errors.push(`${file}: direttiva Markdown non riconosciuta`);
      if (collection === 'svolti') {
        const traces = (code.match(/class="fine-traccia"/g) || []).length;
        if (traces !== 3) errors.push(`${file}: separazione fra tracce e svolgimenti non valida (${traces} anziché 3)`);
        worked += traces;
      }
      formulas += (code.match(/data-tex=/g) || []).length;
      pages++;
    }
  }
}
console.log(`${pages} file resi; ${formulas} formule inline/display; ${worked} tracce separate dagli svolgimenti.`);
if (errors.length) {
  console.error(errors.join('\n'));
  process.exitCode = 1;
}
