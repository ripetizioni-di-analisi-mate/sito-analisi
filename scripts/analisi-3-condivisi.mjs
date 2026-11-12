// Analisi 2 fornisce la base comune. La versione italiana di Analisi 3 aggiunge i suoi approfondimenti.
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const condivisi = new Set(['successioni-e-serie-di-funzioni', 'serie-di-potenze', 'serie-di-fourier']);
const aggiunte = join(root, 'src', 'contenuti-integrativi', 'analisi-3', 'it');
const precisazioni = JSON.parse(readFileSync(join(aggiunte, 'precisazioni.json'), 'utf8'));
const markdown = (cartella) => existsSync(cartella) ? readdirSync(cartella).filter((nome) => nome.endsWith('.md')) : [];

for (const base of ['src/content', 'src/content-en']) {
  for (const tipo of ['teoria', 'svolti', 'dafare', 'domande']) {
    for (const argomento of condivisi) {
      const teoria = tipo === 'teoria';
      const suffisso = teoria ? `${argomento}.md` : argomento;
      const origine = join(root, base, tipo, 'analisi-2', suffisso);
      const destinazione = join(root, base, tipo, 'analisi-3', suffisso);
      const integrazione = base === 'src/content' && tipo !== 'domande' ? join(aggiunte, tipo, suffisso) : null;
      rmSync(destinazione, { recursive: true, force: true });
      if (!existsSync(origine)) continue;

      const fileIntegrativi = !teoria && integrazione ? markdown(integrazione) : [];
      const nomi = teoria ? [''] : new Set([...markdown(origine), ...fileIntegrativi]);
      for (const nome of nomi) {
        const integrato = nome && fileIntegrativi.includes(nome) ? join(integrazione, nome) : null;
        const sorgente = integrato ?? join(origine, nome);
        const out = join(destinazione, nome);
        let contenuto = readFileSync(sorgente, 'utf8');
        if (base === 'src/content' && !integrato) {
          const percorso = [tipo, suffisso, nome].filter(Boolean).join('/');
          for (const [prima, dopo] of precisazioni[percorso] ?? []) {
            contenuto = contenuto.replace(prima, () => dopo);
          }
        }
        if (teoria && integrazione && existsSync(integrazione)) {
          contenuto = contenuto.trimEnd() + '\n\n' + readFileSync(integrazione, 'utf8').trim() + '\n';
        }
        contenuto = contenuto.replace(/\/analisi-2\/([a-z-]+)(?=\/)/g, (match, slug) =>
          condivisi.has(slug) ? '/analisi-3/' + slug : match);
        mkdirSync(dirname(out), { recursive: true });
        writeFileSync(out, contenuto);
      }
    }
  }
}
console.log('Analisi 3: sincronizzati i capitoli condivisi e gli approfondimenti italiani.');
