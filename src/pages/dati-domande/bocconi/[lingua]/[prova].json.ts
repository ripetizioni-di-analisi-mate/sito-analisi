import type { APIRoute } from 'astro';
import { createHash } from 'node:crypto';
import { BOCCONI, PROVE_BOCCONI } from '../../../../data/bocconi.mjs';
import { MATERIE } from '../../../../data/materie';
import banca from '../../../../data/bocconi-prove.json';
import { processoreMarkdown, percorsoFinto } from '../../../../lib/resa';

export function getStaticPaths() {
  if (!MATERIE.some((m) => m.slug === BOCCONI.slug && m.attiva)) return [];
  return (['it', 'en'] as const).flatMap((lingua) => PROVE_BOCCONI.map((prova) => ({ params: { lingua, prova } })));
}

export const GET: APIRoute = async ({ params }) => {
  const lingua = params.lingua === 'en' ? 'en' : 'it';
  const prova = params.prova as keyof typeof banca;
  const originali = banca[prova];
  const processore = await processoreMarkdown();
  const domande = await Promise.all(originali.map(async (q) => {
    const fileURL = new URL(percorsoFinto(lingua, 'domande', `${BOCCONI.slug}/${q.capitolo}/${q.id}`));
    const render = (testo: string) => processore.render(testo, { fileURL }).then(({ code }) => code.trim());
    return {
      id: q.id,
      area: q.area,
      capitolo: q.capitolo,
      ancora: q.topic,
      testo: await render(q.prompt[lingua]),
      scelte: await Promise.all(q.options[lingua].map(render)),
      corretta: q.correct,
      spiegazione: await render(q.explanation[lingua]),
    };
  }));
  const versione = createHash('sha256').update(JSON.stringify(originali)).digest('hex').slice(0, 16);
  return Response.json({ versione, domande });
};
