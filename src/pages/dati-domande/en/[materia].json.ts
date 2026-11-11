// Dati inglesi delle domande a tempo di una materia, letti solo dal Worker (l'indirizzo è chiuso al pubblico).
import type { APIRoute } from 'astro';
import { domandePer, catalogoDomande } from '../../../lib/domande';
import { usQuestions, usPracticeSlugs } from '../../../lib/stem-usa-banks';

export async function getStaticPaths() {
  return [...Object.keys(await catalogoDomande('en')), ...usPracticeSlugs].map((materia) => ({ params: { materia } }));
}
export const GET: APIRoute = async ({ params }) =>
  new Response(JSON.stringify({ argomenti: usPracticeSlugs.includes(params.materia!) ? usQuestions(params.materia!) : await domandePer(params.materia!, 'en') }),
    { headers: { 'content-type': 'application/json' } });
