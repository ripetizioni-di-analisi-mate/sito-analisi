// Algebra lineare riprende il capitolo «Numeri complessi» di Analisi 1, che resta la sorgente unica:
// teoria, schede svolte, esercizi da fare e domande a tempo vengono copiati con gli indirizzi di Algebra lineare.
// Le copie non sono in git (.gitignore) e per i motori di ricerca puntano all'originale (src/lib/canonici.ts).
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const origine = 'analisi-1';
const materia = 'algebra-lineare';
const condivisi = ['numeri-complessi'];
const rx = new RegExp(`/${origine}/(${condivisi.join('|')})(?=/|#|\\)|$)`, 'g');

for (const base of ['src/content', 'src/content-en']) {
  for (const tipo of ['teoria', 'svolti', 'dafare', 'domande']) {
    for (const argomento of condivisi) {
      const suffisso = tipo === 'teoria' ? argomento + '.md' : argomento;
      const da = join(root, base, tipo, origine, suffisso);
      const a = join(root, base, tipo, materia, suffisso);
      rmSync(a, { recursive: true, force: true });
      if (!existsSync(da)) continue;
      const nomi = tipo === 'teoria' ? [''] : readdirSync(da).filter((n) => n.endsWith('.md'));
      for (const nome of nomi) {
        const out = nome ? join(a, nome) : a;
        mkdirSync(dirname(out), { recursive: true });
        const testo = readFileSync(nome ? join(da, nome) : da, 'utf8').replace(rx, `/${materia}/$1`);
        writeFileSync(out, testo);
      }
    }
  }
}
console.log('Algebra lineare: sincronizzato il capitolo Numeri complessi di Analisi 1.');
