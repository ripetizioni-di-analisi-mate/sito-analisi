// Domande a tempo: dai file Markdown (src/content/domande, in inglese src/content-en/domande) ai dati che il
// Worker usa per proporre le domande e correggere le risposte. Le pagine del sito non mostrano mai la risposta corretta.
import { getCollection } from 'astro:content';
import { createMarkdownProcessor, type MarkdownRenderer } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import remarkDirective from 'remark-directive';
import remarkBlocchi from '../plugins/remark-blocchi.mjs';
import remarkTracce from '../plugins/remark-tracce.mjs';
import rehypeKatex from '../plugins/rehype-katex-tex.mjs';

// Le domande non sono rese da Astro (vedi content.config.ts): le rende qui lo stesso processore Markdown
// del sito, con gli stessi plugin, una volta sola per file.
let processore: Promise<MarkdownRenderer> | undefined;
const rese = new Map<string, Promise<string>>();
function htmlDi(chiave: string, body: string): Promise<string> {
  processore ??= createMarkdownProcessor({
    remarkPlugins: [remarkMath, remarkDirective, remarkBlocchi, remarkTracce],
    rehypePlugins: [[rehypeKatex, { strict: false, output: 'html' }]],
    shikiConfig: { theme: 'github-light' },
  } as any);
  if (!rese.has(chiave)) rese.set(chiave, processore.then((p) => p.render(body)).then((r) => r.code));
  return rese.get(chiave)!;
}

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
    const html = await htmlDi(`${lingua}/${e.id}`, e.body ?? '');
    const i = html.search(/<h2[\s>]/);
    if (i < 0) throw new Error(`Domanda ${lingua}/${e.id}: manca il titolo della spiegazione`);
    const prima = html.slice(0, i);
    const spiegazione = html.slice(html.indexOf('</h2>', i) + 5).trim();
    const ul = [...prima.matchAll(/<ul>([\s\S]*?)<\/ul>/g)].pop();
    if (!ul) throw new Error(`Domanda ${lingua}/${e.id}: manca l'elenco delle risposte`);
    const scelte = [...ul[1].matchAll(/<li>([\s\S]*?)<\/li>/g)].map((x) => x[1].trim());
    const numeroScelte = ['tolc-i', 'tolc-s'].includes(m) ? 5 : 4;
    if (scelte.length !== numeroScelte) throw new Error(`Domanda ${lingua}/${e.id}: attese ${numeroScelte} risposte, trovate ${scelte.length}`);
    if (e.data.corretta > numeroScelte) throw new Error(`Domanda ${lingua}/${e.id}: risposta corretta fuori intervallo`);
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
export function catalogoDomande(lingua: Lingua | 'de' | 'es' = 'it'): Promise<Record<string, string[]>> {
  if (lingua === 'de' || lingua === 'es') return Promise.resolve({});
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
