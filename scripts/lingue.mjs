// Dopo la build: elenco delle pagine italiane che hanno una vera versione inglese.
// Il Worker lo usa per aprire subito la pagina nella lingua del visitatore (worker/lingua.mjs).
// Una pagina inglese conta solo se è tradotta: le pagine che mostrano l'italiano con l'avviso
// «This page is not yet available in English» (classe avviso-lingua) restano fuori.
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = new URL('../dist', import.meta.url).pathname;

function giro(cartella, rel, tradotte) {
  for (const voce of readdirSync(cartella, { withFileTypes: true })) {
    const pieno = join(cartella, voce.name);
    if (voce.isDirectory()) { giro(pieno, `${rel}/${voce.name}`, tradotte); continue; }
    if (!voce.name.endsWith('.html')) continue;
    const html = readFileSync(pieno, 'utf8');
    if (html.includes('class="avviso-lingua"')) continue;
    const nome = voce.name.replace(/\.html$/, '');
    const percorso = nome === 'index' ? rel || '/' : `${rel}/${nome}`;
    tradotte.push(percorso);
  }
}

const elenco = {};
for (const lingua of ['en', 'de']) {
  const tradotte = [];
  const cartella = join(DIST, lingua);
  if (existsSync(cartella)) giro(cartella, '', tradotte);
  const home = join(DIST, `${lingua}.html`);
  if (existsSync(home) && !readFileSync(home, 'utf8').includes('class="avviso-lingua"')) tradotte.push('/');
  elenco[lingua] = [...new Set(tradotte)].sort();
  console.log(`lingue: ${elenco[lingua].length} pagine con la versione ${lingua}`);
}
writeFileSync(join(DIST, 'dati-lingue.json'), JSON.stringify(elenco));
