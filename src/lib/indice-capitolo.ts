// Indice di un capitolo per la ricerca nel capitolo (componente CercaCapitolo): riquadri della teoria
// con l'ancora, schede svolte con le parole chiave, tracce degli esercizi da fare con l'inizio del testo.
// Si legge dal Markdown: titoli e parole sono gli stessi che il sito mostra già in chiaro negli elenchi.
import katex from 'katex';
import { getCollection } from 'astro:content';
import { link, voceL, type Lingua } from '../i18n';
import { perArgomento, numero } from './nav';

export interface VoceCapitolo { t: string; h: string; p?: string; n?: number; k?: string }
export interface IndiceCapitolo { teoria: VoceCapitolo[]; svolti: VoceCapitolo[]; dafare: VoceCapitolo[] }

const BLOCCO = /^:{3,4}(definizione|teorema|proposizione|esempio|osservazione|attenzione|formula)\{#([\w-]+)[^}]*?titolo="([^"]+)"/;
const NOMI: Record<string, Record<string, string>> = {
  it: { definizione: 'Definizione', teorema: 'Teorema', proposizione: 'Proposizione', esempio: 'Esempio', osservazione: 'Osservazione', attenzione: 'Attenzione', formula: 'Formula' },
  en: { definizione: 'Definition', teorema: 'Theorem', proposizione: 'Proposition', esempio: 'Example', osservazione: 'Remark', attenzione: 'Warning', formula: 'Formula' },
};

// Titoli con formule: $…$ resi con KaTeX, il resto con i caratteri speciali protetti.
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]!));
function conFormule(s: string): string {
  return s.split(/(\$[^$]+\$)/).map((p) => {
    if (!/^\$[^$]+\$$/.test(p)) return esc(p);
    try { return katex.renderToString(p.slice(1, -1), { throwOnError: false }); } catch { return esc(p); }
  }).join('');
}
// Testo per il confronto: senza formule né segni del Markdown.
const piano = (s: string) => s.replace(/\$\$[\s\S]*?\$\$/g, ' ').replace(/\$[^$]*\$/g, ' ').replace(/^:{2,}.*$/gm, ' ').replace(/[#*_>`|\\{}[\]]/g, ' ').replace(/\s+/g, ' ').trim();

const memoria = new Map<string, Promise<IndiceCapitolo>>();
export function indiceCapitolo(lingua: Lingua, materia: string, argomento: string): Promise<IndiceCapitolo> {
  const chiave = `${lingua}|${materia}|${argomento}`;
  if (!memoria.has(chiave)) memoria.set(chiave, costruisci(lingua, materia, argomento));
  return memoria.get(chiave)!;
}

async function costruisci(lingua: Lingua, materia: string, argomento: string): Promise<IndiceCapitolo> {
  const vuoto = { teoria: [], svolti: [], dafare: [] };
  if (lingua !== 'it' && lingua !== 'en') return vuoto;
  const base = `/${materia}/${argomento}`;
  const nomi = NOMI[lingua];

  const teoria: VoceCapitolo[] = [];
  const { voce: vt } = await voceL(lingua, 'teoria', `${materia}/${argomento}`);
  for (const riga of (vt?.body ?? '').split('\n')) {
    const r = BLOCCO.exec(riga.trim());
    if (r) teoria.push({ t: conFormule(r[3]), k: nomi[r[1]], p: piano(r[3]), h: link(lingua, `${base}/teoria`) + '#' + r[2] });
  }

  const svolti = await Promise.all(perArgomento(await getCollection('svolti'), materia, argomento).map(async (e) => {
    const { voce } = await voceL(lingua, 'svolti', e.id);
    const v = voce ?? e;
    const parole = (v.data.parole ?? []).join(' · ');
    return { n: numero(e.id), t: conFormule(v.data.titolo), p: parole, h: link(lingua, `${base}/esercizi-svolti/${numero(e.id)}`) };
  }));

  const dafare = await Promise.all(perArgomento(await getCollection('dafare'), materia, argomento).map(async (e) => {
    const { voce } = await voceL(lingua, 'dafare', e.id);
    const v = voce ?? e;
    const testo = piano((v.body ?? '').split(/^:::\s*soluzione/m)[0]).slice(0, 240);
    return { n: numero(e.id), t: conFormule(v.data.titolo), p: testo, h: link(lingua, `${base}/esercizi/${numero(e.id)}`) };
  }));

  return { teoria, svolti: svolti.sort((a, b) => a.n - b.n), dafare: dafare.sort((a, b) => a.n - b.n) };
}
