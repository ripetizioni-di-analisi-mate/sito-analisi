// Dati inglesi delle domande a tempo di una materia, letti solo dal Worker (l'indirizzo è chiuso al pubblico).
// Le materie più pesanti sono divise in pezzi (`<materia>--2.json` …): vedi partiDomande in lib/domande.ts.
import type { APIRoute } from 'astro';
import { catalogoDomande, domandePer, percorsiDati, datiPezzo } from '../../../lib/domande';
import { usQuestions, usPracticeSlugs } from '../../../lib/stem-usa-banks';
import { haProgramma } from '../../../data/stem-usa/programmi.mjs';

export async function getStaticPaths() {
  return [...await percorsiDati(Object.keys(await catalogoDomande('en')), 'en'),
    ...[...usPracticeSlugs, ...Object.keys(await catalogoDomande('us'))].map((materia) => ({ params: { materia } }))];
}
export const GET: APIRoute = async ({ params }) =>
  new Response(JSON.stringify(haProgramma(params.materia!) ? { argomenti: await domandePer(params.materia!, 'us') }
    : usPracticeSlugs.includes(params.materia!) ? { argomenti: usQuestions(params.materia!) } : await datiPezzo(params.materia!, 'en')),
    { headers: { 'content-type': 'application/json' } });
