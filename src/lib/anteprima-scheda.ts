// Anteprima di una scheda svolta per l'elenco delle schede: la prima formula in evidenza della traccia del primo
// esercizio (lo studente riconosce l'esercizio a colpo d'occhio) oppure, se la traccia non ne ha, l'inizio del testo.
// Si guarda solo la traccia, cioè il primo blocco dopo «## Esercizio 1» (come src/plugins/remark-tracce.mjs):
// nessun passaggio dello svolgimento finisce nell'elenco, che è pubblico anche per le schede riservate.
import { processoreMarkdown, percorsoFinto } from './resa';

export interface AnteprimaScheda { tipo: 'formula' | 'testo' | 'nessuna'; html: string; esercizi: number }

function tracciaDelPrimo(corpo: string): string {
  const titolo = /^##\s[^\n]*\n/m.exec(corpo);
  if (!titolo) return '';
  const righe = corpo.slice(titolo.index + titolo[0].length).replace(/^\s*\n/, '').split('\n');
  const blocchi: string[] = [];
  let attuale: string[] = [];
  for (const r of righe) {
    if (/^#{1,6}\s/.test(r)) break;
    if (r.trim() === '') { if (attuale.length) { blocchi.push(attuale.join('\n')); attuale = []; if (blocchi.length === 2) break; } continue; }
    attuale.push(r);
  }
  if (attuale.length && blocchi.length < 2) blocchi.push(attuale.join('\n'));
  if (!blocchi.length) return '';
  // Una traccia che finisce con i due punti prosegue nel blocco seguente (la formula o l'elenco).
  return blocchi[0].trim().endsWith(':') && blocchi[1] ? `${blocchi[0]}\n\n${blocchi[1]}` : blocchi[0];
}

export async function anteprimaScheda(lingua: string, voce: { id: string; body?: string }): Promise<AnteprimaScheda> {
  const corpo = voce.body ?? '';
  const esercizi = (corpo.match(/^##\s/gm) || []).length;
  const traccia = tracciaDelPrimo(corpo);
  if (!traccia || /^\s*(:{2,}|<|\|)/m.test(traccia)) return { tipo: 'nessuna', html: '', esercizi };
  const rendi = async (md: string) => ((await (await processoreMarkdown()).render(md, { fileURL: percorsoFinto(lingua, 'svolti', voce.id) } as any)) as any).code as string;
  const formula = /\$\$([\s\S]+?)\$\$/.exec(traccia);
  if (formula) return { tipo: 'formula', html: await rendi(`$$\n${formula[1].trim()}\n$$`), esercizi };
  const testo = traccia.split(/\n\s*\n/)[0].replace(/^\s*[-*]\s+/gm, '').trim();
  if (testo.length < 12) return { tipo: 'nessuna', html: '', esercizi };
  return { tipo: 'testo', html: await rendi(testo), esercizi };
}
