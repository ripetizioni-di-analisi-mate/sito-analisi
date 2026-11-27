// Uso (dalla radice del repository): node strumenti/anteprima_pagina.mjs <uscita.png> <file.md> [larghezza]
// Rende un file Markdown (teoria, scheda, esercizio, domanda) con lo stesso processore del sito e ne fa la schermata
// intera, senza build. Serve a controllare blocchi, formule e figure di un contenuto appena scritto.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';
import { createMarkdownProcessor } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import remarkDirective from 'remark-directive';
import remarkBlocchi from '../src/plugins/remark-blocchi.mjs';
import remarkTracce from '../src/plugins/remark-tracce.mjs';
import rehypeKatex from '../src/plugins/rehype-katex-tex.mjs';
const [uscita, file, larghezza = '760'] = process.argv.slice(2);
const radice = process.cwd();
const p = await createMarkdownProcessor({ remarkPlugins: [remarkMath, remarkDirective, remarkBlocchi, remarkTracce], rehypePlugins: [[rehypeKatex, { strict: false, output: 'html' }]], shikiConfig: { theme: 'github-light' } });
const corpo = fs.readFileSync(file, 'utf8').replace(/^---[\s\S]*?\n---\n/, '');
const r = await p.render(corpo, { fileURL: pathToFileURL(path.resolve(file)) });
const css = fs.readFileSync(path.join(radice, 'node_modules/katex/dist/katex.min.css'), 'utf8').replace(/url\(fonts\//g, `url(${pathToFileURL(path.join(radice, 'node_modules/katex/dist/fonts')).href}/`) + '\n' + fs.readFileSync(path.join(radice, 'src/styles/global.css'), 'utf8');
const pagina = `<!doctype html><html lang="it" style="--accento:#336976"><head><meta charset="utf-8"><style>${css}
body{margin:0;padding:16px 24px;background:var(--carta)} main{max-width:42rem;margin:0 auto}</style></head><body><main class="contenuto prosa">${r.code}</main></body></html>`;
const tmp = path.join(path.dirname(uscita), `pagina-${process.pid}.html`);
fs.writeFileSync(tmp, pagina);
const { chromium } = createRequire(import.meta.url)('playwright');
const b = await chromium.launch(); const pg = await b.newPage({ viewport: { width: Number(larghezza), height: 900 } });
const errori = []; pg.on('pageerror', (e) => errori.push(e.message));
await pg.goto(pathToFileURL(tmp).href); await pg.screenshot({ path: uscita, fullPage: true }); 
const rossi = await pg.locator('.katex-error').count();
await b.close(); fs.unlinkSync(tmp);
console.log(`scritto ${uscita}; formule con errore: ${rossi}; titoli ##: ${r.metadata.headings.filter((x) => x.depth === 2).length}`);
