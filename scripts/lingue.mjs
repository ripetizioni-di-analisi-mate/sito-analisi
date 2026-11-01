// Dopo la build: elenco delle pagine italiane che hanno una vera versione inglese.
// Il Worker lo usa per aprire subito la pagina nella lingua del visitatore (worker/lingua.mjs).
// Una pagina inglese conta solo se è tradotta: le pagine che mostrano l'italiano con l'avviso
// «This page is not yet available in English» (classe avviso-lingua) restano fuori.
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = new URL('../dist', import.meta.url).pathname;
const EN = join(DIST, 'en');
const tradotte = [];

function giro(cartella, rel) {
  for (const voce of readdirSync(cartella, { withFileTypes: true })) {
    const pieno = join(cartella, voce.name);
    if (voce.isDirectory()) { giro(pieno, `${rel}/${voce.name}`); continue; }
    if (!voce.name.endsWith('.html')) continue;
    const html = readFileSync(pieno, 'utf8');
    if (html.includes('class="avviso-lingua"')) continue;
    const nome = voce.name.replace(/\.html$/, '');
    const percorso = nome === 'index' ? rel || '/' : `${rel}/${nome}`;
    tradotte.push(percorso);
  }
}

if (existsSync(EN)) giro(EN, '');
// La home inglese, nella build, è /en.html: corrisponde alla home italiana «/».
if (existsSync(join(DIST, 'en.html')) && !readFileSync(join(DIST, 'en.html'), 'utf8').includes('class="avviso-lingua"')) tradotte.push('/');
const elenco = [...new Set(tradotte)].sort();
writeFileSync(join(DIST, 'dati-lingue.json'), JSON.stringify(elenco));
console.log(`lingue: ${elenco.length} pagine con la versione inglese`);
