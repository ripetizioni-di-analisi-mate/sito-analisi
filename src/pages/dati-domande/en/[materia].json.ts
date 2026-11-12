// Dati inglesi delle domande a tempo di una materia, letti solo dal Worker (l'indirizzo è chiuso al pubblico).
import type { APIRoute } from 'astro';
import { domandePer, catalogoDomande } from '../../../lib/domande';
import { usQuestions, usPracticeSlugs } from '../../../lib/stem-usa-banks';
import { haProgramma } from '../../../data/stem-usa/programmi.mjs';

export async function getStaticPaths() {
  return [...Object.keys(await catalogoDomande('en')), ...usPracticeSlugs, ...Object.keys(await catalogoDomande('us'))]
    .map((materia) => ({ params: { materia } }));
}
export const GET: APIRoute = async ({ params }) =>
  new Response(JSON.stringify({ argomenti: haProgramma(params.materia!) ? await domandePer(params.materia!, 'us')
    : usPracticeSlugs.includes(params.materia!) ? usQuestions(params.materia!) : await domandePer(params.materia!, 'en') }),
    { headers: { 'content-type': 'application/json' } });
