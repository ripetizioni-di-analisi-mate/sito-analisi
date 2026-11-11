// Risultati degli esercizi da fare che si possono verificare (un numero, oppure una funzione di x),
// letti solo dal Worker per /api/verifica: l'indirizzo è chiuso al pubblico, come /dati-domande/.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { MATERIE } from '../../data/materie';
import { risultatiMateria } from '../../lib/risposte';
import { usAnswers, usPracticeSlugs } from '../../lib/stem-usa-banks';

export function getStaticPaths() {
  return [...MATERIE.filter((m) => m.attiva).map((m) => m.slug), ...usPracticeSlugs].map(materia => ({ params: { materia } }));
}
export const GET: APIRoute = async ({ params }) =>
  new Response(JSON.stringify(usPracticeSlugs.includes(params.materia!) ? usAnswers(params.materia!) : risultatiMateria(await getCollection('dafare'), params.materia!)),
    { headers: { 'content-type': 'application/json' } });
