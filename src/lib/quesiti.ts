// Quesiti delle prove simulate (src/content/quesiti): dai file Markdown ai dati che il Worker usa per proporre
// e correggere la simulazione (worker/prova.mjs). Le pagine del sito non mostrano mai le risposte.
import { getCollection } from 'astro:content';
import { htmlDi } from './domande';

export interface Quesito {
  id: string; n: number; tipo: 'multipla' | 'completamento'; testo: string; scelte?: string[];
  corretta?: number; risposta?: string; accetta?: string[]; mostra?: string; spiegazione: string;
}

// Risposta attesa scritta come nella prova: numeri con la virgola, notazione scientifica con il punto a metà altezza.
const mostra = (r: string) => r.replace(/\*\*?|\$/g, '').replace(/\\cdot/g, '·').replace(/\^\{?(-?\d+)\}?/g, (_, e) => [...e].map((c: string) => '⁻⁰¹²³⁴⁵⁶⁷⁸⁹'['-0123456789'.indexOf(c)]).join('')).trim();

export async function quesitiPer(materia: string): Promise<Record<string, Quesito[]>> {
  const out: Record<string, Quesito[]> = {};
  for (const e of await getCollection('quesiti')) {
    const [m, argomento, n] = e.id.split('/');
    if (m !== materia) continue;
    const html = await htmlDi(`quesiti/${e.id}`, e.body ?? '');
    const i = html.search(/<h2[\s>]/);
    if (i < 0) throw new Error(`Quesito ${e.id}: manca il titolo della spiegazione`);
    const prima = html.slice(0, i);
    const spiegazione = html.slice(html.indexOf('</h2>', i) + 5).trim();
    const d = e.data as { tipo: 'multipla' | 'completamento'; corretta?: number; risposta?: string; accetta: string[] };
    const q: Quesito = { id: `${argomento}/${n}`, n: Number(n), tipo: d.tipo, testo: prima.trim(), spiegazione };
    if (d.tipo === 'multipla') {
      const ul = [...prima.matchAll(/<ul>([\s\S]*?)<\/ul>/g)].pop();
      if (!ul) throw new Error(`Quesito ${e.id}: manca l'elenco delle risposte`);
      const scelte = [...ul[1].matchAll(/<li>([\s\S]*?)<\/li>/g)].map((x) => x[1].trim());
      if (scelte.length !== 5) throw new Error(`Quesito ${e.id}: le risposte devono essere 5, sono ${scelte.length}`);
      Object.assign(q, { testo: prima.slice(0, ul.index).trim(), scelte, corretta: d.corretta });
    } else {
      if (/<ul>/.test(prima)) throw new Error(`Quesito ${e.id}: un completamento non ha risposte da scegliere`);
      Object.assign(q, { risposta: d.risposta, accetta: d.accetta, mostra: mostra(String(d.risposta)) });
    }
    (out[argomento] ??= []).push(q);
  }
  for (const k of Object.keys(out)) out[k].sort((a, b) => a.n - b.n);
  return out;
}

// Materia → argomenti che hanno quesiti.
let memo: Promise<Record<string, string[]>> | undefined;
export function catalogoQuesiti(): Promise<Record<string, string[]>> {
  return (memo ??= getCollection('quesiti').then((lista) => {
    const c: Record<string, Set<string>> = {};
    for (const e of lista) { const [m, a] = e.id.split('/'); (c[m] ??= new Set()).add(a); }
    return Object.fromEntries(Object.entries(c).map(([m, s]) => [m, [...s]]));
  }));
}
