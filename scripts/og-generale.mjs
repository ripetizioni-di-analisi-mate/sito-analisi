// Immagini di anteprima generali (home, prezzi, chi sono…): public/og.png (italiano) e public/og-en.png (inglese).
// Stesso disegno delle immagini per materia (scripts/immagini-og.mjs), con il colore verde del sito.
// Si lancia a mano quando cambiano i testi: node scripts/og-generale.mjs
import { readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { createRequire } from 'node:module';
import satori from 'satori';
import sharp from 'sharp';
import { DOMINIO, NOME_SITO_OG, OG_GENERALE } from '../src/lib/anteprime.mjs';

const RADICE = new URL('..', import.meta.url).pathname;
const require = createRequire(import.meta.url);
const font = (pacchetto, file) => readFileSync(join(dirname(require.resolve(`${pacchetto}/package.json`)), 'files', file));
const FONT = ['latin', 'latin-ext'].flatMap((s) => [
  { name: 'Source Serif 4', weight: 700, style: 'normal', data: font('@fontsource/source-serif-4', `source-serif-4-${s}-700-normal.woff`) },
  { name: 'Source Serif 4', weight: 400, style: 'normal', data: font('@fontsource/source-serif-4', `source-serif-4-${s}-400-normal.woff`) },
  { name: 'Source Sans 3', weight: 600, style: 'normal', data: font('@fontsource/source-sans-3', `source-sans-3-${s}-600-normal.woff`) },
]);
const LOGO = `data:image/svg+xml;base64,${readFileSync(join(RADICE, 'public/logo.svg')).toString('base64')}`;
const CARTA = '#faf8f2', INCHIOSTRO = '#22302f', INCHIOSTRO_2 = '#5a6664', VERDE = '#2f6f68';
const h = (type, style, ...children) => ({ type, props: { style: { display: 'flex', ...style }, children: children.flat().filter((c) => c !== '' && c != null) } });

const albero = (d) => h('div', { width: 1200, height: 630, flexDirection: 'column', backgroundColor: CARTA, position: 'relative' },
  h('div', { position: 'absolute', left: 0, bottom: 0, width: 1200, height: 16, backgroundColor: VERDE }),
  h('div', { flexDirection: 'column', flexGrow: 1, padding: '64px 88px 70px' },
    h('div', { alignItems: 'center' },
      { type: 'img', props: { src: LOGO, width: 64, height: 64, style: { marginRight: 20 } } },
      h('div', { fontFamily: 'Source Serif 4', fontWeight: 700, fontSize: 32, color: INCHIOSTRO }, NOME_SITO_OG)),
    h('div', { flexDirection: 'column', flexGrow: 1, justifyContent: 'center' },
      h('div', { fontFamily: 'Source Serif 4', fontWeight: 700, fontSize: 70, lineHeight: 1.14, color: INCHIOSTRO, maxWidth: 1024, textWrap: 'balance' }, d.titolo),
      h('div', { fontFamily: 'Source Serif 4', fontWeight: 400, fontSize: 42, color: INCHIOSTRO_2, marginTop: 22 }, d.sotto)),
    h('div', { alignItems: 'center', fontFamily: 'Source Sans 3', fontWeight: 600, fontSize: 28, color: INCHIOSTRO_2 },
      h('div', { width: 12, height: 12, borderRadius: 999, backgroundColor: VERDE, marginRight: 14 }),
      DOMINIO)));

for (const [lingua, file] of [['it', 'og.png'], ['en', 'og-en.png']]) {
  const svg = await satori(albero(OG_GENERALE[lingua]), { width: 1200, height: 630, fonts: FONT });
  const png = await sharp(Buffer.from(svg), { density: 72 }).png({ palette: true, colours: 64, quality: 90, compressionLevel: 9, effort: 7 }).toBuffer();
  writeFileSync(join(RADICE, 'public', file), png);
  console.log(`public/${file}: ${Math.round(png.length / 1024)} KB`);
}
