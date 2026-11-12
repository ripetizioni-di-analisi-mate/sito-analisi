// Domande a tempo: dai file Markdown (src/content/domande, in inglese src/content-en/domande) ai dati che il
// Worker usa per proporre le domande e correggere le risposte. Le pagine del sito non mostrano mai la risposta corretta.
import type { LinguaCatalogo } from './lingue-sito';
import { getCollection } from 'astro:content';
import { processoreMarkdown, percorsoFinto } from './resa';

// Le domande non sono rese da Astro (vedi content.config.ts): le rende qui lo stesso processore Markdown
// del sito, con gli stessi plugin, una volta sola per file.
// Le domande rese restano da parte quanto basta a non rifare due volte lo stesso file dentro una materia;
// passando alla materia dopo, le più vecchie si lasciano andare e la memoria torna libera.
const QUANTE_RESE = 1500;
const rese = new Map<string, Promise<string>>();
function htmlDi(chiave: string, body: string): Promise<string> {
  const gia = rese.get(chiave);
  if (gia) return gia;
  const [lingua, ...resto] = chiave.split('/');
  const fileURL = new URL(percorsoFinto(lingua, 'domande', resto.join('/')));
  const p = processoreMarkdown().then((pr) => pr.render(body, { fileURL } as any)).then((r) => r.code);
  rese.set(chiave, p);
  if (rese.size > QUANTE_RESE) rese.delete(rese.keys().next().value as string);
  return p;
}

export interface Domanda { id: string; n: number; testo: string; scelte: string[]; corretta: number; spiegazione: string }
type Lingua = 'it' | 'en' | 'es' | 'us';
// Con lingua 'us': i corsi americani scritti sul programma statunitense (src/content-us/).
const COLLEZIONI = { it: 'domande', en: 'domande_en', es: 'domande_es', us: 'domande_us' } as const;

const senzaSoluzione = (html: string) => html.replace(/<details[^>]*blocco-soluzione[\s\S]*?<\/details>/g, '').trim();

// In inglese: le domande tradotte; la traccia inglese se c'è, altrimenti quella italiana.
export async function domandePer(materia: string, lingua: Lingua = 'it'): Promise<Record<string, Domanda[]>> {
  const tracce = new Map((await getCollection(lingua === 'us' ? 'dafare_us' : lingua === 'es' ? 'dafare_es' : 'dafare')).map((e) => [e.id, e]));
  const tracceEn = lingua === 'en' ? new Map((await getCollection('dafare_en')).map((e) => [e.id, e])) : new Map();
  const out: Record<string, Domanda[]> = {};
  for (const e of await getCollection(COLLEZIONI[lingua] as 'domande')) {
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

// Materia → argomento → quante domande, letti dagli identificativi dei file: non serve renderle.
const conti: Partial<Record<Lingua, Promise<Record<string, Record<string, number>>>>> = {};
export function conteggiDomande(lingua: Lingua = 'it'): Promise<Record<string, Record<string, number>>> {
  return (conti[lingua] ??= (async () => {
    const c: Record<string, Record<string, number>> = {};
    for (const e of await getCollection(COLLEZIONI[lingua] as 'domande')) {
      const [m, a] = e.id.split('/');
      ((c[m] ??= {})[a] ??= 0, c[m][a]++);
    }
    return c;
  })());
}

// Materia → argomenti che hanno almeno una domanda (per le pagine e per i traguardi).
const memo: Partial<Record<Lingua, Promise<Record<string, string[]>>>> = {};
export function catalogoDomande(lingua: Lingua | LinguaCatalogo = 'it'): Promise<Record<string, string[]>> {
  if (lingua !== 'it' && lingua !== 'en' && lingua !== 'es' && lingua !== 'us') return Promise.resolve({});
  return (memo[lingua] ??= calcolaCatalogo(lingua));
}
async function calcolaCatalogo(lingua: Lingua): Promise<Record<string, string[]>> {
  const c: Record<string, Set<string>> = {};
  for (const e of await getCollection(COLLEZIONI[lingua] as 'domande')) {
    const [m, a] = e.id.split('/');
    (c[m] ??= new Set()).add(a);
  }
  return Object.fromEntries(Object.entries(c).map(([m, s]) => [m, [...s]]));
}
