// Pagine copiate da un'altra materia: per i motori di ricerca vale l'indirizzo dell'originale (rel="canonical"),
// così due pagine con lo stesso testo non si tolgono visibilità a vicenda. Le copie restano dove sono per chi studia.
// - Analisi 3 riprende tre capitoli di Analisi 2 (scripts/analisi-3-condivisi.mjs): teoria, voci, schede ed esercizi.
// - Analisi 2 riprende le equazioni differenziali di Analisi 1 (scripts/analisi-2-condivisi.mjs) e aggiunge i sistemi:
//   sono copie le schede e gli esercizi con lo stesso numero e le voci della teoria presenti in Analisi 1;
//   la teoria e gli elenchi contengono materiale in più e restano pagine a sé.
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const CONDIVISI_ANALISI_3 = ['successioni-e-serie-di-funzioni', 'serie-di-potenze', 'serie-di-fourier'];
const CAPITOLO_ANALISI_2 = 'equazioni-differenziali';
const CARTELLA = { 'esercizi-svolti': 'svolti', esercizi: 'dafare' } as const;
const radice = join(process.cwd(), 'src', 'content');

let ancoreAnalisi1: Set<string> | undefined;
function ancoraInAnalisi1(ancora: string): boolean {
  if (!ancoreAnalisi1) {
    const f = join(radice, 'teoria', 'analisi-1', `${CAPITOLO_ANALISI_2}.md`);
    const testo = existsSync(f) ? readFileSync(f, 'utf8') : '';
    ancoreAnalisi1 = new Set([...testo.matchAll(/^:{3,4}(?:definizione|teorema|proposizione)\{#([^\s}]+)/gm)].map((x) => x[1]));
  }
  return ancoreAnalisi1.has(ancora);
}

// Percorso (senza prefisso di lingua) della pagina originale, oppure undefined se la pagina è già l'originale.
// `voce` è il numero della scheda o dell'esercizio, oppure l'ancora di un teorema o di una definizione.
export function originale(materia: string, argomento: string, sezione: 'teoria' | 'esercizi-svolti' | 'esercizi', voce?: string): string | undefined {
  const coda = `${argomento}/${sezione}${voce ? `/${voce}` : ''}`;
  if (materia === 'analisi-3' && CONDIVISI_ANALISI_3.includes(argomento)) return `/analisi-2/${coda}`;
  if (materia === 'analisi-2' && argomento === CAPITOLO_ANALISI_2 && voce) {
    if (sezione === 'teoria') return ancoraInAnalisi1(voce) ? `/analisi-1/${coda}` : undefined;
    return existsSync(join(radice, CARTELLA[sezione], 'analisi-1', argomento, `${voce}.md`)) ? `/analisi-1/${coda}` : undefined;
  }
  return undefined;
}
