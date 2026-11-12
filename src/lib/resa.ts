// Dal Markdown all'HTML, con gli stessi plugin del sito (astro.config.mjs).
//
// Le schede svolte e le domande a tempo non vengono rese da Astro durante la sincronizzazione dei contenuti
// (vedi src/content.config.ts): il loro HTML, pieno di formule KaTeX, faceva crescere il deposito delle
// collezioni fino a centinaia di megabyte, e la build di Cloudflare finiva la memoria. Qui l'HTML si produce
// mentre la pagina viene costruita, una volta per file, e la memoria torna libera subito dopo.
import { createMarkdownProcessor, type MarkdownRenderer } from '@astrojs/markdown-remark';
import remarkMath from 'remark-math';
import remarkDirective from 'remark-directive';
import remarkBlocchi from '../plugins/remark-blocchi.mjs';
import remarkTracce from '../plugins/remark-tracce.mjs';
import rehypeKatex from '../plugins/rehype-katex-tex.mjs';

export interface Titolo { depth: number; slug: string; text: string }
export interface Resa { html: string; headings: Titolo[] }

let processore: Promise<MarkdownRenderer> | undefined;
export function processoreMarkdown(): Promise<MarkdownRenderer> {
  return (processore ??= createMarkdownProcessor({
    remarkPlugins: [remarkMath, remarkDirective, remarkBlocchi, remarkTracce],
    rehypePlugins: [[rehypeKatex, { strict: false, output: 'html' }]],
    shikiConfig: { theme: 'github-light' },
  } as any));
}

// I plugin guardano il percorso del file per scegliere la lingua delle etichette e dei numeri nelle figure.
const CARTELLA: Record<string, string> = { it: 'content', en: 'content-en', es: 'content-es', us: 'content-us' };
export function percorsoFinto(lingua: string, collezione: string, id: string): string {
  return `file:///src/${CARTELLA[lingua] ?? 'content'}/${collezione}/${id}.md`;
}

// Le pagine di uno stesso argomento si costruiscono una dopo l'altra: poche resa tenute da parte bastano
// perché un file non venga reso due volte, e il deposito non cresce con tutta la materia.
const QUANTE = 8;
const tenute = new Map<string, Promise<Resa>>();

export function resa(chiave: string, body: string, fileURL: string): Promise<Resa> {
  const gia = tenute.get(chiave);
  if (gia) {
    tenute.delete(chiave);
    tenute.set(chiave, gia);
    return gia;
  }
  const p = processoreMarkdown()
    .then((m) => m.render(body ?? '', { fileURL } as any))
    .then((r: any) => ({ html: r.code as string, headings: (r.metadata?.headings ?? []) as Titolo[] }));
  tenute.set(chiave, p);
  if (tenute.size > QUANTE) tenute.delete(tenute.keys().next().value as string);
  return p;
}

// Scorciatoia per una voce di una collezione (id della collezione = percorso senza estensione).
export function resaVoce(lingua: string, collezione: string, voce: { id: string; body?: string }): Promise<Resa> {
  return resa(`${lingua}/${collezione}/${voce.id}`, voce.body ?? '', percorsoFinto(lingua, collezione, voce.id));
}
