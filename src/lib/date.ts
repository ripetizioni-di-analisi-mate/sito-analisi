// Data dell'ultima modifica vera di un contenuto (src/data/date-pagine.json, scritto da scripts/date-pagine.mjs).
// Serve ai motori di ricerca e agli assistenti IA, che danno peso alle pagine con una data di aggiornamento dichiarata.
import DATE from '../data/date-pagine.json';
import type { Lingua } from '../i18n';

const DATA = DATE as Record<string, { data: string }>;

// Data del file di un contenuto: `dataContenuto('it', 'teoria', 'analisi-1/limiti')`.
export function dataContenuto(lingua: Lingua, sezione: string, id: string): string | undefined {
  return DATA[`src/${lingua === 'en' ? 'content-en' : 'content'}/${sezione}/${id}.md`]?.data;
}

// La più recente fra più date (per gli elenchi e le pagine delle materie).
export function piuRecente(...d: (string | undefined)[]): string | undefined {
  return d.filter(Boolean).sort().pop();
}
