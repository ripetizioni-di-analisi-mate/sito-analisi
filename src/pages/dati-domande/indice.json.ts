// Materia → argomenti con domande a tempo (per i traguardi "tutti gli argomenti provati").
import type { APIRoute } from 'astro';
import { catalogoDomande } from '../../lib/domande';

export const GET: APIRoute = async () =>
  new Response(JSON.stringify(await catalogoDomande()), { headers: { 'content-type': 'application/json' } });
