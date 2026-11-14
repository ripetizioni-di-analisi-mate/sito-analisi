// Studio guidato: ancore dei paragrafi senza build. Uso: node strumenti/sg-ancore.mjs <materie…> (scrive .sg/rif/ancore-<m>.txt e .sg/dist per scripts/studio-guidato-rimandi.mjs, con un collegamento dist → .sg/dist).
// Rende la teoria delle materie indicate con lo stesso processore del sito e scrive
// .sg/dist/<m>/<a>/teoria.html (solo gli <h2> con id) + .sg/rif/ancore-<m>.txt
import { createMarkdownProcessor } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import remarkDirective from 'remark-directive';
import remarkBlocchi from '../src/plugins/remark-blocchi.mjs';
import remarkTracce from '../src/plugins/remark-tracce.mjs';
import rehypeKatex from '../src/plugins/rehype-katex-tex.mjs';
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs';
const p = await createMarkdownProcessor({ remarkPlugins: [remarkMath, remarkDirective, remarkBlocchi, remarkTracce], rehypePlugins: [[rehypeKatex, { strict: false, output: 'html' }]], shikiConfig: { theme: 'github-light' } });
mkdirSync('.sg/rif', { recursive: true });
for (const m of process.argv.slice(2)) {
  const dir = `src/content/teoria/${m}`;
  const righe = [];
  for (const f of readdirSync(dir).filter((x) => x.endsWith('.md')).sort()) {
    const a = f.replace(/\.md$/, '');
    const body = readFileSync(`${dir}/${f}`, 'utf8').replace(/^---[\s\S]*?\n---\n/, '');
    const r = await p.render(body, { fileURL: new URL(`file:///src/content/teoria/${m}/${f}`) });
    const h = r.metadata.headings.filter((x) => x.depth === 2);
    mkdirSync(`.sg/dist/${m}/${a}`, { recursive: true });
    writeFileSync(`.sg/dist/${m}/${a}/teoria.html`, h.map((x) => `<h2 id="${x.slug}">${x.text.replace(/</g, '&#x3C;')}</h2>`).join('\n'));
    righe.push(`## ${a}`, ...h.map((x) => `${x.slug}\t${x.text}`), '');
  }
  writeFileSync(`.sg/rif/ancore-${m}.txt`, righe.join('\n'));
  console.log(m, righe.filter((r) => r && !r.startsWith('##')).length, 'paragrafi');
}
