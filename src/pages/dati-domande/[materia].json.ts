// Dati delle domande a tempo di una materia, letti solo dal Worker (l'indirizzo è chiuso al pubblico).
// Le materie più pesanti sono divise in pezzi (`<materia>--2.json` …): vedi partiDomande in lib/domande.ts.
import type { APIRoute } from 'astro';
import { catalogoDomande, percorsiDati, datiPezzo } from '../../lib/domande';

export async function getStaticPaths() {
  return percorsiDati(Object.keys(await catalogoDomande()));
}
export const GET: APIRoute = async ({ params }) =>
  new Response(JSON.stringify(await datiPezzo(params.materia!)), { headers: { 'content-type': 'application/json' } });
