// Archivio interno delle tracce con soluzione, accessibile soltanto al Worker.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { MATERIE } from '../../../data/materie';

export function getStaticPaths() {
  return MATERIE.filter((m) => m.attiva).flatMap((m) => ['it', 'en'].map((lingua) => ({ params: { materia: m.slug, lingua } })));
}
export const GET: APIRoute = async ({ params }) => {
  const italiane = (await getCollection('dafare')).filter((v) => v.id.startsWith(`${params.materia}/`));
  const tradotte = params.lingua === 'en' ? new Map((await getCollection('dafare_en')).map((v) => [v.id, v])) : new Map();
  const tracce = italiane.map((v) => {
    const e = tradotte.get(v.id) || v;
    return { id: v.id, argomento: v.id.split('/')[1], titolo: e.data.titolo, html: e.rendered?.html || '' };
  });
  return new Response(JSON.stringify({ tracce }), { headers: { 'content-type': 'application/json' } });
};
