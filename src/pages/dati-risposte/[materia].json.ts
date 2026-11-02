// Risultati degli esercizi da fare che si possono verificare (un numero, oppure una funzione di x),
// letti solo dal Worker per /api/verifica: l'indirizzo è chiuso al pubblico, come /dati-domande/.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { MATERIE } from '../../data/materie';
import { risultatiMateria } from '../../lib/risposte';

export function getStaticPaths() {
  return MATERIE.filter((m) => m.attiva).map((m) => ({ params: { materia: m.slug } }));
}
export const GET: APIRoute = async ({ params }) =>
  new Response(JSON.stringify(risultatiMateria(await getCollection('dafare'), params.materia!)), { headers: { 'content-type': 'application/json' } });
