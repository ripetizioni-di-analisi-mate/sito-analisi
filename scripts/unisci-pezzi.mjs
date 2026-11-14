// Unisce le cartelle dist dei pezzi della build (scripts/pezzi.mjs) in una sola cartella.
//   node scripts/unisci-pezzi.mjs <destinazione> <pezzo1> <pezzo2> …
// I file presenti in più pezzi (risorse di Vite, file di public/) devono essere identici: se due pezzi
// scrivono lo stesso file con contenuto diverso l'unione si ferma, perché il sito pubblicato non sarebbe
// quello di una build unica. I file vengono spostati, non copiati: le cartelle dei pezzi si svuotano.
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readdirSync, readFileSync, renameSync, statSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';

const [destinazione, ...pezzi] = process.argv.slice(2);
if (!destinazione || pezzi.length === 0) {
  console.error('uso: node scripts/unisci-pezzi.mjs <destinazione> <pezzo1> <pezzo2> …');
  process.exit(2);
}

const hash = (f) => createHash('sha1').update(readFileSync(f)).digest('hex');
function* file(cartella) {
  for (const voce of readdirSync(cartella, { withFileTypes: true })) {
    const percorso = join(cartella, voce.name);
    if (voce.isDirectory()) yield* file(percorso);
    else yield percorso;
  }
}

mkdirSync(destinazione, { recursive: true });
const diversi = [];
let spostati = 0, uguali = 0;
for (const pezzo of pezzi) {
  for (const sorgente of file(pezzo)) {
    const rel = relative(pezzo, sorgente);
    const arrivo = join(destinazione, rel);
    if (existsSync(arrivo)) {
      if (statSync(arrivo).size !== statSync(sorgente).size || hash(arrivo) !== hash(sorgente)) diversi.push(`${rel} (${pezzo})`);
      else uguali++;
      continue;
    }
    mkdirSync(dirname(arrivo), { recursive: true });
    renameSync(sorgente, arrivo);
    spostati++;
  }
}
console.log(`unisci-pezzi: ${pezzi.length} pezzi, ${spostati} file, ${uguali} file comuni identici`);
if (diversi.length) {
  console.error(`unisci-pezzi: ${diversi.length} file diversi fra i pezzi:\n  ${diversi.slice(0, 40).join('\n  ')}`);
  process.exit(1);
}
