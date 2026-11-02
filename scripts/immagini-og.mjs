// Dopo la build: disegna le immagini di anteprima dei link (og:image), 1200×630, in dist/og/….
// Quali immagini servono lo dicono le pagine stesse: lo script legge l'og:image di ogni pagina di dist
// (scritto da src/layouts/Base.astro con src/lib/anteprime.mjs) e disegna ogni immagine /og/… citata.
// Testi: nome della materia oppure titolo dell'argomento con materia e sezione; nessuna formula.
// Disegno: satori (impaginazione e caratteri del sito → SVG) e sharp (SVG → PNG a tavolozza, poche decine di KB).
// Le immagini già disegnate con lo stesso contenuto si riprendono dalla cache node_modules/.astro/og.
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, openSync, readSync, closeSync, copyFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { createHash } from 'node:crypto';
import { createRequire } from 'node:module';
import { availableParallelism } from 'node:os';
import satori from 'satori';
import sharp from 'sharp';
import { transformWithOxc } from 'vite';
import { anteprima, DOMINIO, NOME_SITO_OG } from '../src/lib/anteprime.mjs';

const inizio = Date.now();
const RADICE = new URL('..', import.meta.url).pathname;
const DIST = join(RADICE, 'dist');
const CACHE = join(RADICE, 'node_modules/.astro/og');
const SITO = 'https://ripetizionidianalisi.com';
const require = createRequire(import.meta.url);

// ---------- dati delle materie (gli stessi file TypeScript usati dal sito) ----------
async function moduloTs(file, sostituzioni = []) {
  let testo = readFileSync(join(RADICE, file), 'utf8');
  for (const [da, a] of sostituzioni) testo = testo.replace(da, a);
  const { code } = await transformWithOxc(testo, file, { lang: 'ts' });
  return import(`data:text/javascript;base64,${Buffer.from(code).toString('base64')}`);
}
const PREZZI = readFileSync(join(RADICE, 'src/data/prezzi.json'), 'utf8');
const { MATERIE } = await moduloTs('src/data/materie.ts', [[/^import PREZZI from '\.\/prezzi\.json';$/m, `const PREZZI = ${PREZZI};`]]);
const { MATERIE_EN } = await moduloTs('src/data/materie-en.ts');
// Materie nella lingua data, come materieL in src/i18n.ts: in inglese i nomi di materie-en.ts, se ci sono.
function materiaL(lingua, slug) {
  const m = MATERIE.find((x) => x.slug === slug);
  const e = lingua === 'en' ? MATERIE_EN[slug] : null;
  if (!m || !e) return m;
  return { ...m, titolo: e.titolo, breve: e.breve, argomenti: m.argomenti.map((a) => ({ ...a, ...(e.argomenti[a.slug] ?? {}) })) };
}
// Dall'indirizzo /og/[en/]<materia>[/<argomento>/<sezione>].png ai testi dell'immagine.
function datiDi(percorso) {
  const m = percorso.match(/^\/og\/(en\/)?([a-z0-9-]+)(?:\/([a-z0-9-]+)\/([a-z-]+))?\.png$/);
  if (!m) return null;
  const lingua = m[1] ? 'en' : 'it';
  const materia = materiaL(lingua, m[2]);
  if (!materia) return null;
  const titoloArgomento = m[3] ? materia.argomenti.find((a) => a.slug === m[3])?.titolo : undefined;
  const dati = anteprima({ lingua, materia, argomento: m[3], sezione: m[4], titoloArgomento });
  return dati && dati.percorso === percorso ? dati : null;
}

// ---------- quali immagini citano le pagine ----------
const RE_OG = /<meta property="og:image" content="([^"]+)"/;
function ogDi(file) {
  // L'og:image sta nell'intestazione: bastano i primi 64 KB della pagina.
  const fd = openSync(file, 'r');
  const buf = Buffer.alloc(65536);
  const n = readSync(fd, buf, 0, buf.length, 0);
  closeSync(fd);
  return (buf.toString('utf8', 0, n).match(RE_OG) ?? (n === buf.length ? readFileSync(file, 'utf8').match(RE_OG) : null))?.[1];
}
const citate = new Map(); // percorso → numero di pagine
let pagine = 0;
function giro(cartella) {
  for (const voce of readdirSync(cartella, { withFileTypes: true })) {
    const pieno = join(cartella, voce.name);
    if (voce.isDirectory()) { if (voce.name !== 'og' && voce.name !== 'risorse') giro(pieno); continue; }
    if (!voce.name.endsWith('.html')) continue;
    pagine++;
    const og = ogDi(pieno);
    if (og?.startsWith(`${SITO}/og/`)) {
      const p = og.slice(SITO.length);
      citate.set(p, (citate.get(p) ?? 0) + 1);
    }
  }
}
if (!existsSync(DIST)) { console.error('immagini-og: manca dist, lanciare prima la build'); process.exit(1); }
giro(DIST);

// ---------- caratteri del sito ----------
const font = (pacchetto, file) => readFileSync(join(dirname(require.resolve(`${pacchetto}/package.json`)), 'files', file));
const FONT = [
  ...['latin', 'latin-ext'].flatMap((s) => [
    { name: 'Source Serif 4', weight: 700, style: 'normal', data: font('@fontsource/source-serif-4', `source-serif-4-${s}-700-normal.woff`) },
    { name: 'Source Serif 4', weight: 400, style: 'normal', data: font('@fontsource/source-serif-4', `source-serif-4-${s}-400-normal.woff`) },
    { name: 'Source Sans 3', weight: 600, style: 'normal', data: font('@fontsource/source-sans-3', `source-sans-3-${s}-600-normal.woff`) },
  ]),
];
const LOGO = `data:image/svg+xml;base64,${readFileSync(join(RADICE, 'public/logo.svg')).toString('base64')}`;

// ---------- disegno ----------
const CARTA = '#faf8f2', INCHIOSTRO = '#22302f', INCHIOSTRO_2 = '#5a6664';
// Colore della materia schiarito verso la carta (come color-mix nel CSS del sito).
function misto(hex, p) {
  const a = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
  const b = CARTA.match(/\w\w/g).map((x) => parseInt(x, 16));
  return `#${a.map((v, i) => Math.round(v * p + b[i] * (1 - p)).toString(16).padStart(2, '0')).join('')}`;
}
const h = (type, style, ...children) => ({ type, props: { style: { display: 'flex', ...style }, children: children.flat().filter((c) => c !== '' && c != null) } });
// Corpo del titolo secondo la lunghezza: i titoli lunghi vanno su due o tre righe senza uscire dal riquadro.
const corpo = (t, materia) => (materia ? (t.length <= 22 ? 92 : t.length <= 38 ? 78 : 66) : t.length <= 22 ? 80 : t.length <= 34 ? 70 : t.length <= 48 ? 62 : 56);

function albero(d) {
  const materia = !d.sopra;
  return h('div', { width: 1200, height: 630, flexDirection: 'column', backgroundColor: CARTA, position: 'relative' },
    // striscia del colore della materia, in fondo come nell'immagine generale
    h('div', { position: 'absolute', left: 0, bottom: 0, width: 1200, height: 16, backgroundColor: d.colore }),
    h('div', { flexDirection: 'column', flexGrow: 1, padding: '64px 88px 70px' },
      // marchio
      h('div', { alignItems: 'center' },
        { type: 'img', props: { src: LOGO, width: 64, height: 64, style: { marginRight: 20 } } },
        h('div', { fontFamily: 'Source Serif 4', fontWeight: 700, fontSize: 32, color: INCHIOSTRO }, NOME_SITO_OG)),
      // testo principale
      h('div', { flexDirection: 'column', flexGrow: 1, justifyContent: 'center' },
        d.sopra ? h('div', {
          alignSelf: 'flex-start', fontFamily: 'Source Sans 3', fontWeight: 600, fontSize: 28, color: d.colore,
          backgroundColor: misto(d.colore, 0.08), border: `2px solid ${misto(d.colore, 0.4)}`, borderRadius: 999,
          padding: '6px 22px', marginBottom: 30,
        }, d.sopra) : '',
        h('div', {
          fontFamily: 'Source Serif 4', fontWeight: 700, fontSize: corpo(d.titolo, materia), lineHeight: 1.14, color: INCHIOSTRO,
          maxWidth: 1024, textWrap: 'balance',
        }, d.titolo),
        d.sotto ? h('div', { fontFamily: 'Source Serif 4', fontWeight: 400, fontSize: 42, color: INCHIOSTRO_2, marginTop: 22 }, d.sotto) : ''),
      // dominio
      h('div', { alignItems: 'center', fontFamily: 'Source Sans 3', fontWeight: 600, fontSize: 28, color: INCHIOSTRO_2 },
        h('div', { width: 12, height: 12, borderRadius: 999, backgroundColor: d.colore, marginRight: 14 }),
        DOMINIO)));
}

// Impronta del contenuto: testi, colore, codice di questo script e dei testi delle anteprime.
const VERSIONE = createHash('sha1')
  .update(readFileSync(new URL(import.meta.url)))
  .update(readFileSync(join(RADICE, 'src/lib/anteprime.mjs')))
  .update(readFileSync(join(RADICE, 'public/logo.svg')))
  .digest('hex');
const impronta = (d) => createHash('sha1').update(VERSIONE).update(JSON.stringify([d.sopra, d.titolo, d.sotto, d.colore])).digest('hex').slice(0, 20);

async function disegna(d) {
  const svg = await satori(albero(d), { width: 1200, height: 630, fonts: FONT });
  return sharp(Buffer.from(svg), { density: 72 })
    .png({ palette: true, colours: 64, quality: 90, compressionLevel: 9, effort: 7 })
    .toBuffer();
}

mkdirSync(CACHE, { recursive: true });
const elenco = [...citate.keys()].sort();
const errori = [];
let nuove = 0, daCache = 0, byte = 0;
let k = 0;
async function lavoratore() {
  while (k < elenco.length) {
    const percorso = elenco[k++];
    const d = datiDi(percorso);
    if (!d) { errori.push(percorso); continue; }
    const inCache = join(CACHE, `${impronta(d)}.png`);
    const dest = join(DIST, percorso);
    mkdirSync(dirname(dest), { recursive: true });
    if (existsSync(inCache)) { copyFileSync(inCache, dest); daCache++; }
    else {
      const png = await disegna(d);
      writeFileSync(inCache, png);
      writeFileSync(dest, png);
      nuove++;
    }
    byte += readFileSync(dest).length;
  }
}
// satori lavora nel filo principale, sharp nei suoi fili: qualche disegno in parallelo tiene occupati tutti i processori.
await Promise.all(Array.from({ length: availableParallelism() + 1 }, lavoratore));

const secondi = ((Date.now() - inizio) / 1000).toFixed(1);
console.log(`immagini-og: ${elenco.length} immagini per ${pagine} pagine (${nuove} disegnate, ${daCache} dalla cache), ${Math.round(byte / Math.max(1, elenco.length) / 1024)} KB in media, ${secondi} s`);
if (errori.length) {
  console.error(`immagini-og: ${errori.length} immagini citate dalle pagine senza dati: ${errori.slice(0, 5).join(', ')}`);
  process.exit(1);
}
