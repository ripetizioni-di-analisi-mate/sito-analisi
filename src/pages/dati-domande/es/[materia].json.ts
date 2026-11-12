import type { APIRoute } from 'astro';
import { catalogoDomande, domandePer } from '../../../lib/domande';

export async function getStaticPaths() {
  return Object.keys(await catalogoDomande('es')).map((materia) => ({ params: { materia } }));
}
export const GET: APIRoute = async ({ params }) =>
  new Response(JSON.stringify({ argomenti: await domandePer(params.materia!, 'es') }),
    { headers: { 'content-type': 'application/json' } });
