// Domande a tempo: dai file Markdown (src/content/domande, in inglese src/content-en/domande) ai dati che il
// Worker usa per proporre le domande e correggere le risposte. Le pagine del sito non mostrano mai la risposta corretta.
import { getCollection } from 'astro:content';

export interface Domanda { id: string; n: number; testo: string; scelte: string[]; corretta: number; spiegazione: string }
type Lingua = 'it' | 'en';

const senzaSoluzione = (html: string) => html.replace(/<details[^>]*blocco-soluzione[\s\S]*?<\/details>/g, '').trim();

// In inglese: le domande tradotte; la traccia inglese se c'è, altrimenti quella italiana.
export async function domandePer(materia: string, lingua: Lingua = 'it'): Promise<Record<string, Domanda[]>> {
  const tracce = new Map((await getCollection('dafare')).map((e) => [e.id, e]));
  const tracceEn = lingua === 'en' ? new Map((await getCollection('dafare_en')).map((e) => [e.id, e])) : new Map();
  const out: Record<string, Domanda[]> = {};
  for (const e of await getCollection(lingua === 'en' ? 'domande_en' : 'domande')) {
    const [m, argomento, n] = e.id.split('/');
    if (m !== materia) continue;
    const html = e.rendered?.html ?? '';
    const i = html.search(/<h2[\s>]/);
    if (i < 0) throw new Error(`Domanda ${lingua}/${e.id}: manca il titolo della spiegazione`);
    const prima = html.slice(0, i);
    const spiegazione = html.slice(html.indexOf('</h2>', i) + 5).trim();
    const ul = [...prima.matchAll(/<ul>([\s\S]*?)<\/ul>/g)].pop();
    if (!ul) throw new Error(`Domanda ${lingua}/${e.id}: manca l'elenco delle risposte`);
    const scelte = [...ul[1].matchAll(/<li>([\s\S]*?)<\/li>/g)].map((x) => x[1].trim());
    if (scelte.length !== 4) throw new Error(`Domanda ${lingua}/${e.id}: le risposte devono essere 4, sono ${scelte.length}`);
    let testo = prima.slice(0, ul.index).trim();
    if (!testo) {
      const t = tracceEn.get(e.id) ?? tracce.get(e.id);
      if (!t) throw new Error(`Domanda ${lingua}/${e.id}: nessuna traccia con lo stesso numero`);
      testo = senzaSoluzione(t.rendered?.html ?? '');
    }
    (out[argomento] ??= []).push({ id: `${argomento}/${n}`, n: Number(n), testo, scelte, corretta: e.data.corretta, spiegazione });
  }
  for (const k of Object.keys(out)) out[k].sort((a, b) => a.n - b.n);
  return out;
}

// Materia → argomenti che hanno almeno una domanda (per le pagine e per i traguardi).
const memo: Partial<Record<Lingua, Promise<Record<string, string[]>>>> = {};
export function catalogoDomande(lingua: Lingua = 'it'): Promise<Record<string, string[]>> {
  return (memo[lingua] ??= calcolaCatalogo(lingua));
}
async function calcolaCatalogo(lingua: Lingua): Promise<Record<string, string[]>> {
  const c: Record<string, Set<string>> = {};
  for (const e of await getCollection(lingua === 'en' ? 'domande_en' : 'domande')) {
    const [m, a] = e.id.split('/');
    (c[m] ??= new Set()).add(a);
  }
  return Object.fromEntries(Object.entries(c).map(([m, s]) => [m, [...s]]));
}
