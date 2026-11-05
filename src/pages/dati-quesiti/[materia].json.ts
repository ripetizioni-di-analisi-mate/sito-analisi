// Quesiti delle prove simulate di una materia, letti solo dal Worker (l'indirizzo è chiuso al pubblico).
import type { APIRoute } from 'astro';
import { quesitiPer, catalogoQuesiti } from '../../lib/quesiti';

export async function getStaticPaths() {
  return Object.keys(await catalogoQuesiti()).map((materia) => ({ params: { materia } }));
}
export const GET: APIRoute = async ({ params }) =>
  new Response(JSON.stringify({ argomenti: await quesitiPer(params.materia!) }), { headers: { 'content-type': 'application/json' } });
