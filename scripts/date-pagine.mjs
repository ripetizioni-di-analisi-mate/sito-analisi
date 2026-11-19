// Data dell'ultima modifica del materiale didattico, condivisa da HTML e sitemap.
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const cartelle = ['src/content', 'src/content-en', 'src/content-es', 'src/content-fr', 'src/content-de', 'src/content-us'];
const percorsiGit = [...cartelle, 'src/contenuti-integrativi', ':(exclude,glob)**/domande/**'];

// I capitoli condivisi sono generati prima di Astro. Per loro conta la revisione
// del materiale di origine, compresa la teoria aggiuntiva sui sistemi di Analisi 2.
function sorgenti(file) {
  const condiviso = file.match(/^(src\/content(?:-en)?)\/(teoria|svolti|dafare)\/(analisi-2|analisi-3|algebra-lineare)\/([^/.]+)(.*)$/);
  if (!condiviso) return [file];
  const [, base, tipo, materia, argomento, coda] = condiviso;
  if (materia === 'analisi-3' && ['successioni-e-serie-di-funzioni', 'serie-di-potenze', 'serie-di-fourier'].includes(argomento))
    return [file.replace('/analisi-3/', '/analisi-2/')];
  if (materia === 'algebra-lineare' && argomento === 'numeri-complessi')
    return [file.replace('/algebra-lineare/', '/analisi-1/')];
  if (materia !== 'analisi-2' || argomento !== 'equazioni-differenziali') return [file];
  const origine = file.replace('/analisi-2/', '/analisi-1/');
  const extra = 'src/contenuti-integrativi/analisi-2/' + (base.endsWith('-en') ? 'en' : 'it');
  return tipo === 'teoria' ? [origine, extra + '/teoria.md'] : [origine, extra + '/' + tipo + coda];
}

export function generaDate(radice) {
  const uscita = join(radice, 'src/data/date-pagine.json');
  const vecchio = existsSync(uscita) ? JSON.parse(readFileSync(uscita, 'utf8')) : {};
  const git = (...args) => execFileSync('git', args, { cwd: radice, encoding: 'utf8', maxBuffer: 256 * 1024 * 1024, stdio: ['ignore', 'pipe', 'pipe'] });
  let completa = false;
  try { completa = git('rev-parse', '--is-shallow-repository').trim() === 'false'; } catch { /* Copia senza Git. */ }
  const date = new Map();
  const modificati = new Set();
  if (completa) {
    let giorno;
    for (const riga of git('log', '--format=@%cs', '--name-only', '--', ...percorsiGit).split('\n')) {
      if (riga.startsWith('@')) giorno = riga.slice(1);
      else if (riga && giorno && !date.has(riga)) date.set(riga, giorno);
    }
    for (const file of git('diff', '--name-only', 'HEAD', '--', ...percorsiGit).trim().split('\n')) modificati.add(file);
  }

  const nuovo = {};
  for (const base of cartelle) {
    if (!existsSync(join(radice, base))) continue;
    const files = readdirSync(join(radice, base), { recursive: true }).filter((f) => /\.mdx?$/.test(f) && !f.split('/').includes('domande')).sort();
    for (const relativo of files) {
      const file = base + '/' + relativo;
      const impronta = createHash('sha1').update(readFileSync(join(radice, file))).digest('hex').slice(0, 12);
      const fonti = sorgenti(file).filter((fonte) => existsSync(join(radice, fonte)));
      const note = fonti.map((fonte) => modificati.has(fonte) ? undefined : date.get(fonte));
      // Senza storia completa si conserva solo una data già associata allo stesso contenuto.
      const salvata = vecchio[file]?.impronta === impronta ? vecchio[file].data : undefined;
      const data = note.length && note.every(Boolean) ? note.sort().at(-1) : salvata;
      if (data) nuovo[file] = { data, impronta };
    }
  }
  writeFileSync(uscita, JSON.stringify(nuovo).replace(/\},"/g, '},\n"') + '\n');
  console.log(`date-pagine: ${Object.keys(nuovo).length} contenuti con data verificabile`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href)
  generaDate(fileURLToPath(new URL('..', import.meta.url)));
