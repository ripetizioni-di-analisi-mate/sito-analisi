// Stampa la mappa dei file da pubblicare nell'anteprima: solo i file nuovi o cambiati
// rispetto all'ultima pubblicazione (scripts/manifest.json), più null per quelli rimossi.
// Uso: node scripts/mappa.mjs            → stampa la mappa
//      node scripts/mappa.mjs --conferma → aggiorna il manifest dopo una pubblicazione riuscita
import { readdirSync, readFileSync, writeFileSync, statSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join, relative } from 'node:path';

const DIST = new URL('../dist', import.meta.url).pathname;
const MAN = new URL('./manifest.json', import.meta.url).pathname;

function* file(dir) {
  for (const n of readdirSync(dir)) {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) yield* file(p); else yield p;
  }
}
const attuale = {};
for (const p of file(DIST)) {
  const rel = relative(DIST, p);
  if (rel === 'index.html') continue;
  attuale[rel] = createHash('sha1').update(readFileSync(p)).digest('hex');
}
const prec = existsSync(MAN) ? JSON.parse(readFileSync(MAN, 'utf8')) : {};
const precMap = Array.isArray(prec) ? Object.fromEntries(prec.map((p) => [p, ''])) : prec;

if (process.argv.includes('--conferma')) {
  writeFileSync(MAN, JSON.stringify(attuale));
  console.log('manifest aggiornato:', Object.keys(attuale).length, 'file');
} else {
  const mappa = {};
  for (const [p, h] of Object.entries(attuale)) if (precMap[p] !== h) mappa[p] = p;
  for (const p of Object.keys(precMap)) if (!(p in attuale)) mappa[p] = null;
  console.log(JSON.stringify(mappa));
  console.error(Object.keys(mappa).length, 'voci');
}
