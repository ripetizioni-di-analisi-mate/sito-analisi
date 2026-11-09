// Analisi 2 riprende le equazioni scalari di Analisi 1 e aggiunge i sistemi lineari.
import { cpSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const capitolo = 'equazioni-differenziali';
const cartelle = { it: 'content', en: 'content-en' };

for (const [lingua, cartella] of Object.entries(cartelle)) {
  const contenuti = join(root, 'src', cartella);
  const aggiunte = join(root, 'src', 'contenuti-integrativi', 'analisi-2', lingua);
  const teoria = readFileSync(join(contenuti, 'teoria', 'analisi-1', capitolo + '.md'), 'utf8');
  const sistemi = readFileSync(join(aggiunte, 'teoria.md'), 'utf8');
  writeFileSync(join(contenuti, 'teoria', 'analisi-2', capitolo + '.md'), teoria.trimEnd() + '\n\n' + sistemi);

  for (const tipo of ['svolti', 'dafare', 'domande']) {
    const fonte = join(contenuti, tipo, 'analisi-1', capitolo);
    const destinazione = join(contenuti, tipo, 'analisi-2', capitolo);
    rmSync(destinazione, { recursive: true, force: true });
    mkdirSync(destinazione, { recursive: true });
    cpSync(fonte, destinazione, { recursive: true });
    for (const nome of readdirSync(join(aggiunte, tipo))) {
      cpSync(join(aggiunte, tipo, nome), join(destinazione, nome), { force: false, errorOnExist: true });
    }
  }
}
