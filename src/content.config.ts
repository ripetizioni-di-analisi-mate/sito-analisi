import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Teoria: src/content/teoria/<materia>/<argomento>.md
const teoria = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/teoria' }),
  schema: z.object({
    titolo: z.string(),
    sommario: z.string().optional(),
  }),
});

// Esercizi svolti (schede per tipologia): src/content/svolti/<materia>/<argomento>/<n>.md
const svolti = defineCollection({
  loader: glob({ pattern: '*/*/*.md', base: './src/content/svolti' }),
  schema: z.object({
    titolo: z.string(),
    gratis: z.boolean().default(false),
    teoria: z.array(z.string()).default([]), // ancore della pagina di teoria
    parole: z.array(z.string()).default([]), // parole chiave per la ricerca
  }),
});

// Esercizi da fare: src/content/dafare/<materia>/<argomento>/<n>.md
const dafare = defineCollection({
  loader: glob({ pattern: '*/*/*.md', base: './src/content/dafare' }),
  schema: z.object({
    titolo: z.string(),
    teoria: z.array(z.string()).default([]),
    parole: z.array(z.string()).default([]),
  }),
});

// Traduzioni inglesi: stessa struttura, in src/content-en/. Quando una voce manca si mostra l'italiano.
const teoria_en = defineCollection({ loader: glob({ pattern: '*/*.md', base: './src/content-en/teoria' }), schema: teoria.schema });
const svolti_en = defineCollection({ loader: glob({ pattern: '*/*/*.md', base: './src/content-en/svolti' }), schema: svolti.schema });
const dafare_en = defineCollection({ loader: glob({ pattern: '*/*/*.md', base: './src/content-en/dafare' }), schema: dafare.schema });

export const collections = { teoria, svolti, dafare, teoria_en, svolti_en, dafare_en };
