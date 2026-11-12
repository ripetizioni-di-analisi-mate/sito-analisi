// Data dell'ultima modifica vera di ogni contenuto (teoria, schede, esercizi, domande), per la mappa del sito.
// Prima tutte le pagine avevano come data il giorno della build: i motori di ricerca imparano a ignorarla.
// - Con la cronologia git completa: data dell'ultimo commit che ha toccato il file.
// - Con una copia senza cronologia (clone poco profondo): si tiene la data salvata se il file non è cambiato
//   (impronta uguale), altrimenti la data di oggi.
// Il risultato è src/data/date-pagine.json (file → { data, impronta }); va incluso nei commit.
import { execSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const RADICE = new URL('..', import.meta.url).pathname;
const USCITA = join(RADICE, 'src/data/date-pagine.json');
const CARTELLE = ['src/content', 'src/content-en', 'src/content-us'];

function file(cartella) {
  const assoluta = join(RADICE, cartella);
  if (!existsSync(assoluta)) return [];
  return readdirSync(assoluta, { recursive: true })
    .map((f) => join(assoluta, String(f)))
    .filter((f) => /\.mdx?$/.test(f) && !/[\/]domande[\/]/.test(f) && statSync(f).isFile())
    .map((f) => relative(RADICE, f));
}

const vecchio = existsSync(USCITA) ? JSON.parse(readFileSync(USCITA, 'utf8')) : {};
const oggi = new Date().toISOString().slice(0, 10);
let completa = false;
try { completa = execSync('git rev-parse --is-shallow-repository', { cwd: RADICE }).toString().trim() === 'false'; } catch { /* niente git */ }

// Data dell'ultimo commit di ogni file, letta con un solo comando dalla cronologia (dal più recente).
const daGit = {};
if (completa) {
  const log = execSync(`git log --format=@%cs --name-only -- ${CARTELLE.join(' ')}`, { cwd: RADICE, maxBuffer: 256 * 1024 * 1024 }).toString();
  let data = null;
  for (const riga of log.split('\n')) {
    if (riga.startsWith('@')) data = riga.slice(1);
    else if (riga && data && !daGit[riga]) daGit[riga] = data;
  }
}

const nuovo = {};
let cambiati = 0;
for (const f of CARTELLE.flatMap(file).sort()) {
  const impronta = createHash('sha1').update(readFileSync(join(RADICE, f))).digest('hex').slice(0, 12);
  const prima = vecchio[f];
  // file modificato e non ancora nel commit: data di oggi anche con la cronologia completa
  const modificatoOra = completa && prima && prima.impronta !== impronta && daGit[f] && daGit[f] <= prima.data;
  let data;
  if (completa && daGit[f] && !modificatoOra) data = daGit[f];
  else if (prima && prima.impronta === impronta) data = prima.data;
  else data = oggi;
  if (!prima || prima.data !== data) cambiati++;
  nuovo[f] = { data, impronta };
}
writeFileSync(USCITA, `${JSON.stringify(nuovo, null, 0).replace(/\},"/g, '},\n"')}\n`);
console.log(`date-pagine: ${Object.keys(nuovo).length} contenuti, ${cambiati} date nuove o cambiate (${completa ? 'cronologia git' : 'impronte'})`);
