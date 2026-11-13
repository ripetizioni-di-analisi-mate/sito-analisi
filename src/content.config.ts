import { defineCollection, z } from 'astro:content';
import { glob, type LoaderContext } from 'astro/loaders';
import { CATALOGO_USA_PUBBLICO } from './data/cataloghi-studio.mjs';
import { LINGUE_TRADOTTE_PUBBLICHE } from './data/codici-lingua.mjs';
import { parseFrontmatter } from '@astrojs/markdown-remark';
import { glob as cerca } from 'tinyglobby';
import fs from 'node:fs/promises';
import path from 'node:path';
import { MATERIE } from './data/materie';

// I contenuti delle materie in preparazione restano fuori dal sito finché la materia non è attivata.
const IN_PREPARAZIONE = MATERIE.filter((m) => !m.attiva).map((m) => m.slug);
const escludi = IN_PREPARAZIONE.map((s) => `!${s}/**`);

// Teoria: src/content/teoria/<materia>/<argomento>.md
const teoria = defineCollection({
  loader: senzaHtml('./src/content/teoria', ['*/*.md', ...escludi]),
  schema: z.object({
    titolo: z.string(),
    sommario: z.string().optional(),
  }),
});

// Esercizi svolti (schede per tipologia): src/content/svolti/<materia>/<argomento>/<n>.md
const svolti = defineCollection({
  loader: senzaHtml('./src/content/svolti'),
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

// Le domande a tempo sono più di trentaseimila file. Astro le rendeva tutte in HTML (KaTeX compreso)
// durante la sincronizzazione dei contenuti, e il risultato veniva poi buttato via: la versione già resa
// faceva superare la lunghezza massima di una stringa nel deposito dei contenuti (build fallita l'01/11),
// perciò veniva scartata. Quel lavoro inutile prendeva la maggior parte del tempo di build, quindi questo
// caricatore legge soltanto il frontmatter e il corpo Markdown: l'HTML lo produce src/lib/domande.ts
// quando i dati servono, una volta per file.
function senzaHtml(base: string, includi: string[] = ['*/*/*.md', ...escludi]) {
  const radice = path.resolve(base);

  async function leggi(ctx: any, assoluto: string, id: string) {
    const testo = await fs.readFile(assoluto, 'utf8');
    const digest = ctx.generateDigest(testo);
    if (ctx.store.get(id)?.digest === digest) return;
    const { frontmatter, content } = parseFrontmatter(testo);
    const data = await ctx.parseData({ id, data: frontmatter, filePath: assoluto });
    ctx.store.set({ id, data, body: content, filePath: path.relative(process.cwd(), assoluto), digest });
  }

  return {
    name: 'glob-senza-html',
    load: async (ctx: any) => {
      const file = await cerca(includi, { cwd: radice });
      const visti = new Set<string>();
      for (const f of file) {
        const id = f.slice(0, -3);
        visti.add(id);
        await leggi(ctx, path.join(radice, f), id);
      }
      for (const id of ctx.store.keys()) if (!visti.has(id)) ctx.store.delete(id);

      // In sviluppo le modifiche ai file devono arrivare alla pagina aperta.
      if (!ctx.watcher) return;
      ctx.watcher.add(radice);
      const idDi = (f: string) => {
        const rel = path.relative(radice, f);
        return rel.startsWith('..') || !rel.endsWith('.md') ? undefined : rel.slice(0, -3);
      };
      const aggiorna = async (f: string) => {
        const id = idDi(f);
        if (id) await leggi(ctx, f, id).catch((e: any) => ctx.logger.error(`${id}: ${e.message}`));
      };
      ctx.watcher.on('add', aggiorna);
      ctx.watcher.on('change', aggiorna);
      ctx.watcher.on('unlink', (f: string) => {
        const id = idDi(f);
        if (id) ctx.store.delete(id);
      });
    },
  };
}

// Domande a tempo: src/content/domande/<materia>/<argomento>/<n>.md, una per traccia degli esercizi da fare
// (stesso n). Corpo: eventuale domanda riformulata, elenco di 4 risposte, "## Spiegazione".
const domande = defineCollection({
  loader: senzaHtml('./src/content/domande'),
  schema: z.object({ corretta: z.number().int().min(1).max(5) }),
});

const raccoltaSospesa = {
  name: 'raccolta-sospesa',
  async load({ store }: LoaderContext) { store.clear(); },
};

// Traduzioni inglesi: stessa struttura, in src/content-en/. Quando una voce manca si mostra l'italiano.
const teoria_en = defineCollection({ loader: LINGUE_TRADOTTE_PUBBLICHE ? senzaHtml('./src/content-en/teoria', ['*/*.md', ...escludi]) : raccoltaSospesa, schema: teoria.schema });
const svolti_en = defineCollection({ loader: LINGUE_TRADOTTE_PUBBLICHE ? senzaHtml('./src/content-en/svolti') : raccoltaSospesa, schema: svolti.schema });
const domande_en = defineCollection({ loader: LINGUE_TRADOTTE_PUBBLICHE ? senzaHtml('./src/content-en/domande') : raccoltaSospesa, schema: domande.schema });
const dafare_en = defineCollection({ loader: LINGUE_TRADOTTE_PUBBLICHE ? glob({ pattern: ['*/*/*.md', ...escludi], base: './src/content-en/dafare' }) : raccoltaSospesa, schema: dafare.schema });

// Corsi americani: stessa struttura, in src/content-us/, con lo slug del corso al posto della materia
// (src/content-us/teoria/physics-1-mechanics/<argomento>.md). I contenuti sono scritti in inglese sul
// programma americano, non tradotti dall'italiano.
const teoria_us = defineCollection({ loader: CATALOGO_USA_PUBBLICO ? senzaHtml('./src/content-us/teoria', ['*/*.md']) : raccoltaSospesa, schema: teoria.schema });
const svolti_us = defineCollection({ loader: CATALOGO_USA_PUBBLICO ? senzaHtml('./src/content-us/svolti', ['*/*/*.md']) : raccoltaSospesa, schema: svolti.schema });
const dafare_us = defineCollection({ loader: CATALOGO_USA_PUBBLICO ? glob({ pattern: ['*/*/*.md'], base: './src/content-us/dafare' }) : raccoltaSospesa, schema: dafare.schema });
const domande_us = defineCollection({ loader: CATALOGO_USA_PUBBLICO ? senzaHtml('./src/content-us/domande', ['*/*/*.md']) : raccoltaSospesa, schema: domande.schema });

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
const formulari_en = defineCollection({ loader: LINGUE_TRADOTTE_PUBBLICHE ? glob({ pattern: ['*.md'], base: './src/content-en/formulari' }) : raccoltaSospesa, schema: formulari.schema });

const teoria_es = defineCollection({ loader: LINGUE_TRADOTTE_PUBBLICHE ? senzaHtml('./src/content-es/teoria', ['*/*.md', ...escludi]) : raccoltaSospesa, schema: teoria.schema });
const svolti_es = defineCollection({ loader: LINGUE_TRADOTTE_PUBBLICHE ? senzaHtml('./src/content-es/svolti') : raccoltaSospesa, schema: svolti.schema });
const dafare_es = defineCollection({ loader: LINGUE_TRADOTTE_PUBBLICHE ? glob({ pattern: ['*/*/*.md', ...escludi], base: './src/content-es/dafare' }) : raccoltaSospesa, schema: dafare.schema });
const domande_es = defineCollection({ loader: LINGUE_TRADOTTE_PUBBLICHE ? senzaHtml('./src/content-es/domande') : raccoltaSospesa, schema: domande.schema });

export const collections = { teoria, svolti, dafare, domande, domande_en, teoria_en, svolti_en, dafare_en, teoria_es, svolti_es, dafare_es, domande_es, teoria_us, svolti_us, dafare_us, domande_us, formulari, formulari_en };
