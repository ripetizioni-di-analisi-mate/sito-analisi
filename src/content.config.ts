import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { MATERIE } from './data/materie';

// I contenuti delle materie in preparazione restano fuori dal sito finché la materia non è attivata.
const IN_PREPARAZIONE = MATERIE.filter((m) => !m.attiva).map((m) => m.slug);
const escludi = IN_PREPARAZIONE.map((s) => `!${s}/**`);

// Teoria: src/content/teoria/<materia>/<argomento>.md
const teoria = defineCollection({
  loader: glob({ pattern: ['*/*.md', ...escludi], base: './src/content/teoria' }),
  schema: z.object({
    titolo: z.string(),
    sommario: z.string().optional(),
  }),
});

// Esercizi svolti (schede per tipologia): src/content/svolti/<materia>/<argomento>/<n>.md
const svolti = defineCollection({
  loader: glob({ pattern: ['*/*/*.md', ...escludi], base: './src/content/svolti' }),
  schema: z.object({
    titolo: z.string(),
    gratis: z.boolean().default(false),
    teoria: z.array(z.string()).default([]), // ancore della pagina di teoria
    parole: z.array(z.string()).default([]), // parole chiave per la ricerca
  }),
});

// Esercizi da fare: src/content/dafare/<materia>/<argomento>/<n>.md
const dafare = defineCollection({
  loader: glob({ pattern: ['*/*/*.md', ...escludi], base: './src/content/dafare' }),
  schema: z.object({
    titolo: z.string(),
    teoria: z.array(z.string()).default([]),
    parole: z.array(z.string()).default([]),
  }),
});

// Le domande a tempo sono migliaia: la loro versione già resa in HTML (con le formule KaTeX) faceva superare
// ad Astro la lunghezza massima di una stringa nel deposito dei contenuti (build fallita l'01/11).
// Nel deposito resta solo il Markdown; l'HTML lo produce src/lib/domande.ts quando servono i dati.
function senzaHtml(base: string) {
  const g = glob({ pattern: ['*/*/*.md', ...escludi], base });
  return {
    name: 'glob-senza-html',
    load: (ctx: any) => g.load({
      ...ctx,
      store: new Proxy(ctx.store, {
        get(t, p) {
          if (p === 'set') return (e: any) => t.set({ ...e, rendered: undefined, assetImports: undefined });
          const v = Reflect.get(t, p);
          return typeof v === 'function' ? v.bind(t) : v;
        },
      }),
    }),
  };
}

// Domande a tempo: src/content/domande/<materia>/<argomento>/<n>.md, una per traccia degli esercizi da fare
// (stesso n). Corpo: eventuale domanda riformulata, elenco di 4 risposte, "## Spiegazione".
const domande = defineCollection({
  loader: senzaHtml('./src/content/domande'),
  schema: z.object({ corretta: z.number().int().min(1).max(5) }),
});

// Traduzioni inglesi: stessa struttura, in src/content-en/. Quando una voce manca si mostra l'italiano.
const teoria_en = defineCollection({ loader: glob({ pattern: ['*/*.md', ...escludi], base: './src/content-en/teoria' }), schema: teoria.schema });
const svolti_en = defineCollection({ loader: glob({ pattern: ['*/*/*.md', ...escludi], base: './src/content-en/svolti' }), schema: svolti.schema });
const domande_en = defineCollection({ loader: senzaHtml('./src/content-en/domande'), schema: domande.schema });
const dafare_en = defineCollection({ loader: glob({ pattern: ['*/*/*.md', ...escludi], base: './src/content-en/dafare' }), schema: dafare.schema });

// Formulari gratuiti: src/content/formulari/<materia>.md (pagina /formulari/<materia>, PDF con account gratuito).
const formulari = defineCollection({
  loader: glob({ pattern: ['*.md'], base: './src/content/formulari' }),
  schema: z.object({
    titolo: z.string(),
    sommario: z.string(),
    descrizione: z.string().max(170),
  }),
});
// Formulari in inglese: src/content-en/formulari/<materia>.md (pagina /en/formulari/<materia>).
const formulari_en = defineCollection({ loader: glob({ pattern: ['*.md'], base: './src/content-en/formulari' }), schema: formulari.schema });

const teoria_es = defineCollection({ loader: glob({ pattern: ['*/*.md', ...escludi], base: './src/content-es/teoria' }), schema: teoria.schema });
const svolti_es = defineCollection({ loader: glob({ pattern: ['*/*/*.md', ...escludi], base: './src/content-es/svolti' }), schema: svolti.schema });
const dafare_es = defineCollection({ loader: glob({ pattern: ['*/*/*.md', ...escludi], base: './src/content-es/dafare' }), schema: dafare.schema });
const domande_es = defineCollection({ loader: senzaHtml('./src/content-es/domande'), schema: domande.schema });

export const collections = { teoria, svolti, dafare, domande, domande_en, teoria_en, svolti_en, dafare_en, teoria_es, svolti_es, dafare_es, domande_es, formulari, formulari_en };
