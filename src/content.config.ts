import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import fs from 'node:fs';
import path from 'node:path';
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

// Domande a tempo: src/content/domande/<materia>/<argomento>/<n>.md, una per traccia degli esercizi da fare
// (stesso n). Corpo: eventuale domanda riformulata, elenco di 4 risposte, "## Spiegazione".
// Le domande sono migliaia: il caricatore le conserva come testo, senza renderle (con le formule rese
// l'archivio dei contenuti superava la lunghezza massima di una stringa e la build si fermava, 01/11).
// Il Markdown si rende solo quando si scrivono i dati per il Worker (src/lib/domande.ts).
function caricaDomande(base: string) {
  return {
    name: 'domande-testo',
    load: async ({ store, parseData, generateDigest }: any) => {
      store.clear();
      for (const m of fs.existsSync(base) ? fs.readdirSync(base) : []) {
        if (IN_PREPARAZIONE.includes(m) || !fs.statSync(path.join(base, m)).isDirectory()) continue;
        for (const a of fs.readdirSync(path.join(base, m))) {
          if (!fs.statSync(path.join(base, m, a)).isDirectory()) continue;
          for (const f of fs.readdirSync(path.join(base, m, a))) {
            if (!f.endsWith('.md')) continue;
            const testo = fs.readFileSync(path.join(base, m, a, f), 'utf8');
            const fm = testo.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
            const corretta = Number(fm?.[1].match(/corretta:\s*(\d+)/)?.[1]);
            const id = `${m}/${a}/${f.replace(/\.md$/, '')}`;
            const data = await parseData({ id, data: { corretta } });
            store.set({ id, data, body: fm ? testo.slice(fm[0].length) : testo, digest: generateDigest(testo) });
          }
        }
      }
    },
  };
}
const domande = defineCollection({
  loader: caricaDomande('./src/content/domande'),
  schema: z.object({ corretta: z.number().int().min(1).max(4) }),
});

// Traduzioni inglesi: stessa struttura, in src/content-en/. Quando una voce manca si mostra l'italiano.
const teoria_en = defineCollection({ loader: glob({ pattern: ['*/*.md', ...escludi], base: './src/content-en/teoria' }), schema: teoria.schema });
const svolti_en = defineCollection({ loader: glob({ pattern: ['*/*/*.md', ...escludi], base: './src/content-en/svolti' }), schema: svolti.schema });
const domande_en = defineCollection({ loader: caricaDomande('./src/content-en/domande'), schema: domande.schema });
const dafare_en = defineCollection({ loader: glob({ pattern: ['*/*/*.md', ...escludi], base: './src/content-en/dafare' }), schema: dafare.schema });

export const collections = { teoria, svolti, dafare, domande, domande_en, teoria_en, svolti_en, dafare_en };
