import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from './src/plugins/rehype-katex-tex.mjs';
import remarkDirective from 'remark-directive';
import remarkBlocchi from './src/plugins/remark-blocchi.mjs';
import remarkTracce from './src/plugins/remark-tracce.mjs';
import fs from 'node:fs';
import crypto from 'node:crypto';
import { CATALOGO_USA_PUBBLICO, percorsoCatalogoUsa } from './src/data/cataloghi-studio.mjs';

// Astro conserva in cache le pagine già rese e non si accorge se cambiano i plugin (figure, legende, blocchi):
// se il codice dei plugin è cambiato dall'ultima build, la cache dei contenuti si svuota.
const impronta = crypto.createHash('sha1')
  .update(fs.readdirSync('./src/plugins').sort().map((f) => fs.readFileSync(`./src/plugins/${f}`, 'utf8')).join('\n'))
  .digest('hex');
const fileImpronta = './node_modules/.astro/impronta-plugin';
if ((fs.existsSync(fileImpronta) ? fs.readFileSync(fileImpronta, 'utf8') : '') !== impronta) {
  fs.rmSync('./node_modules/.astro/data-store.json', { force: true });
  fs.rmSync('./node_modules/.astro/data-store', { recursive: true, force: true });
  fs.mkdirSync('./node_modules/.astro', { recursive: true });
  fs.writeFileSync(fileImpronta, impronta);
}

// ANTEPRIMA=1 produce un sito con link che finiscono in .html,
// adatto a un hosting di file statici senza riscrittura degli URL.
const anteprima = process.env.ANTEPRIMA === '1';

export default defineConfig({
  site: 'https://ripetizionidianalisi.com',
  trailingSlash: 'never',
  build: { format: 'file', assets: 'risorse' },
  integrations: CATALOGO_USA_PUBBLICO ? [] : [{
    name: 'sospensione-catalogo-usa',
    hooks: {
      'astro:build:start': ({ setPrerenderer }) => {
        setPrerenderer((prerenderer) => ({
          ...prerenderer,
          async getStaticPaths() {
            const risultato = await prerenderer.getStaticPaths();
            return { ...risultato, paths: risultato.paths.filter(({ pathname }) => !percorsoCatalogoUsa(pathname)) };
          },
        }));
      },
    },
  }],
  // Le formule rendono voluminoso il deposito: parti da 1 MiB evitano una singola stringa oltre il limite di V8.
  experimental: {
    collectionStorage: { type: 'chunked', chunkSize: 1024 * 1024 },
  },
  markdown: {
    remarkPlugins: [remarkMath, remarkDirective, remarkBlocchi, remarkTracce],
    rehypePlugins: [[rehypeKatex, { strict: false, output: 'html' }]],
    shikiConfig: { theme: 'github-light' },
  },
  vite: { define: { 'import.meta.env.ANTEPRIMA': JSON.stringify(anteprima) } },
});
