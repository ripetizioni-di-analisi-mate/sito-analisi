import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { MATERIE } from '../../data/materie';

export const GET: APIRoute = async () => {
  const svolti = (await getCollection('svolti')).filter((v) => v.data.gratis);
  const prove = Object.fromEntries(MATERIE.filter((m) => m.attiva).flatMap((m) => {
    for (const a of m.argomenti) {
      const base = `${m.slug}/${a.slug}/`;
      const v = svolti.filter((s) => s.id.startsWith(base)).sort((x, y) => Number(x.id.slice(base.length)) - Number(y.id.slice(base.length)))[0];
      if (v) return [[m.slug, { titolo: v.data.titolo, href: `/${base}esercizi-svolti/${v.id.slice(base.length)}` }]];
    }
    return [];
  }));
  return new Response(JSON.stringify(prove), { headers: { 'content-type': 'application/json' } });
};
