// Pagine copiate da un'altra materia: per i motori di ricerca vale l'indirizzo dell'originale (rel="canonical"),
// così due pagine con lo stesso testo non si tolgono visibilità a vicenda. Le copie restano dove sono per chi studia.
// - Analisi 3 riprende tre capitoli di Analisi 2 e li integra in italiano (scripts/analisi-3-condivisi.mjs).
// - Analisi 2 riprende le equazioni differenziali di Analisi 1 (scripts/analisi-2-condivisi.mjs) e aggiunge i sistemi:
//   sono copie le schede e gli esercizi con lo stesso numero e le voci della teoria presenti in Analisi 1;
//   la teoria e gli elenchi contengono materiale in più e restano pagine a sé.
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const CONDIVISI_ANALISI_3 = ['successioni-e-serie-di-funzioni', 'serie-di-potenze', 'serie-di-fourier'];
const CAPITOLO_ANALISI_2 = 'equazioni-differenziali';
const CARTELLA = { 'esercizi-svolti': 'svolti', esercizi: 'dafare' } as const;
const radice = join(process.cwd(), 'src', 'content');
const aggiunteAnalisi3 = join(process.cwd(), 'src', 'contenuti-integrativi', 'analisi-3', 'it');
const cacheAncore = new Map<string, Set<string>>();

function contieneAncora(f: string, ancora: string): boolean {
  if (!cacheAncore.has(f)) {
    const testo = existsSync(f) ? readFileSync(f, 'utf8') : '';
    cacheAncore.set(f, new Set([...testo.matchAll(/^:{3,4}(?:definizione|teorema|proposizione)\{#([^\s}]+)/gm)].map((x) => x[1])));
  }
  return cacheAncore.get(f)!.has(ancora);
}

// Percorso (senza prefisso di lingua) della pagina originale, oppure undefined se la pagina è già l'originale.
// `voce` è il numero della scheda o dell'esercizio, oppure l'ancora di un teorema o di una definizione.
export function originale(materia: string, argomento: string, sezione: 'teoria' | 'esercizi-svolti' | 'esercizi', voce?: string, lingua = 'it'): string | undefined {
  const coda = `${argomento}/${sezione}${voce ? `/${voce}` : ''}`;
  if (materia === 'analisi-3' && CONDIVISI_ANALISI_3.includes(argomento)) {
    const originaleAnalisi2 = `/analisi-2/${coda}`;
    if (sezione === 'teoria') {
      const nome = `${argomento}.md`;
      if (voce) return contieneAncora(join(radice, 'teoria', 'analisi-2', nome), voce) ? originaleAnalisi2 : undefined;
      return lingua === 'it' && existsSync(join(aggiunteAnalisi3, 'teoria', nome)) ? undefined : originaleAnalisi2;
    }
    const cartella = CARTELLA[sezione];
    const suffisso = voce ? join(argomento, `${voce}.md`) : argomento;
    if (lingua === 'it' && existsSync(join(aggiunteAnalisi3, cartella, suffisso))) return undefined;
    return existsSync(join(radice, cartella, 'analisi-2', suffisso)) ? originaleAnalisi2 : undefined;
  }
  if (materia === 'analisi-2' && argomento === CAPITOLO_ANALISI_2 && voce) {
    if (sezione === 'teoria') return contieneAncora(join(radice, 'teoria', 'analisi-1', `${CAPITOLO_ANALISI_2}.md`), voce) ? `/analisi-1/${coda}` : undefined;
    return existsSync(join(radice, CARTELLA[sezione], 'analisi-1', argomento, `${voce}.md`)) ? `/analisi-1/${coda}` : undefined;
  }
  return undefined;
}
