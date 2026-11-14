import type { APIRoute } from 'astro';
import { catalogoDomande, percorsiDati, datiPezzo } from '../../../lib/domande';

export async function getStaticPaths() {
  return percorsiDati(Object.keys(await catalogoDomande('es')), 'es');
}
export const GET: APIRoute = async ({ params }) =>
  new Response(JSON.stringify(await datiPezzo(params.materia!, 'es')),
    { headers: { 'content-type': 'application/json' } });
