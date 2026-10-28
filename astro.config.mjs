import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkDirective from 'remark-directive';
import remarkBlocchi from './src/plugins/remark-blocchi.mjs';

// ANTEPRIMA=1 produce un sito con link che finiscono in .html,
// adatto a un hosting di file statici senza riscrittura degli URL.
const anteprima = process.env.ANTEPRIMA === '1';

export default defineConfig({
  site: 'https://ripetizionidianalisi.com',
  trailingSlash: 'never',
  build: { format: 'file', assets: 'risorse' },
  markdown: {
    remarkPlugins: [remarkMath, remarkDirective, remarkBlocchi],
    rehypePlugins: [[rehypeKatex, { strict: false, output: 'html' }]],
    shikiConfig: { theme: 'github-light' },
  },
  vite: { define: { 'import.meta.env.ANTEPRIMA': JSON.stringify(anteprima) } },
});
