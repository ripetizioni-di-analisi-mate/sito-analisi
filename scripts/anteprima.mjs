// Prepara dist/ per un hosting di file statici in una sottocartella:
// trasforma gli indirizzi assoluti (/...) in relativi e toglie i font
// nei formati non necessari (resta il woff2).
import { readdirSync, readFileSync, writeFileSync, statSync, unlinkSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';

const DIST = new URL('../dist', import.meta.url).pathname;

function* file(dir) {
  for (const n of readdirSync(dir)) {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) yield* file(p); else yield p;
  }
}

// L'anteprima regge al massimo 512 file: via i sottoinsiemi di font che un
// sito in italiano non usa, i font KaTeX mai richiamati dai contenuti e le
// pagine di stampa (servono solo alla generazione locale dei PDF).
const SUPERFLUO = /(cyrillic|greek|vietnamese|latin-ext).*\.woff2$|KaTeX_(Fraktur|Typewriter|Script)[^/]*\.woff2$|\/stampa\.html$/;

for (const p of file(DIST)) {
  if (/\.(woff|ttf)$/.test(p) || SUPERFLUO.test(p)) { unlinkSync(p); continue; }
  const d = dirname(p);
  const prefisso = relative(d, DIST) || '.';
  if (p.endsWith('.html')) {
    let s = readFileSync(p, 'utf8');
    s = s.replace(/(href|src|content)="\/([^"]*)"/g, (m, attr, rest) => `${attr}="${prefisso}/${rest}"`);
    writeFileSync(p, s);
  } else if (p.endsWith('.css')) {
    let s = readFileSync(p, 'utf8');
    s = s.replace(/url\(\/_assets\//g, 'url(').replace(/url\(\/([^)]*)\)/g, `url(${prefisso}/$1)`);
    writeFileSync(p, s);
  } else if (p.endsWith('.json')) {
    writeFileSync(p, readFileSync(p, 'utf8').replace(/"h":"\//g, '"h":"'));
  }
}
console.log('anteprima pronta');
