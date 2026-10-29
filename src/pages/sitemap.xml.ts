// Mappa del sito per i motori di ricerca: tutte le pagine indicizzabili, con le versioni nelle due lingue.
import { getCollection } from 'astro:content';
import { MATERIE } from '../data/materie';
import { assoluto } from '../lib/seo';

export async function GET() {
  const oggi = new Date().toISOString().slice(0, 10);
  const [teoria, svolti, dafare, teoriaEn, svoltiEn, dafareEn] = await Promise.all(
    ['teoria', 'svolti', 'dafare', 'teoria_en', 'svolti_en', 'dafare_en'].map((c) => getCollection(c as 'teoria')),
  );
  const tradotte = new Set([...teoriaEn, ...svoltiEn, ...dafareEn].map((v) => v.id));
  const pagine: { it: string; en?: string; priorita: number }[] = [];
  const due = (p: string, priorita: number, conEn = true) => pagine.push({ it: p, en: conEn ? (p === '/' ? '/en' : `/en${p}`) : undefined, priorita });

  due('/', 1.0);
  due('/chi-sono', 0.5);
  due('/concorsi', 0.6, false);
  for (const p of ['/prezzi', '/contatti', '/privacy']) due(p, 0.3);
  for (const m of MATERIE.filter((x) => x.attiva)) {
    due(`/${m.slug}`, 0.9);
    if (m.prezzo) due(`/${m.slug}/sblocca`, 0.4);
    for (const a of m.argomenti) {
      const id = `${m.slug}/${a.slug}`;
      if (!teoria.some((v) => v.id === id)) continue;
      due(`/${id}/teoria`, 0.8, tradotte.has(id));
      const sv = svolti.filter((v) => v.id.startsWith(`${id}/`));
      const df = dafare.filter((v) => v.id.startsWith(`${id}/`));
      due(`/${id}/esercizi-svolti`, 0.7, sv.length > 0 && sv.every((v) => tradotte.has(v.id)));
      due(`/${id}/esercizi`, 0.6, df.length > 0 && df.every((v) => tradotte.has(v.id)));
      for (const v of sv) due(`/${m.slug}/${a.slug}/esercizi-svolti/${v.id.split('/').pop()}`, 0.6, tradotte.has(v.id));
      for (const v of df) due(`/${m.slug}/${a.slug}/esercizi/${v.id.split('/').pop()}`, 0.5, tradotte.has(v.id));
    }
  }
  const voce = (loc: string, alt: { it: string; en?: string }, priorita: number) =>
    `<url><loc>${assoluto(loc)}</loc><lastmod>${oggi}</lastmod><priority>${priorita.toFixed(1)}</priority>` +
    (alt.en ? `<xhtml:link rel="alternate" hreflang="it" href="${assoluto(alt.it)}"/><xhtml:link rel="alternate" hreflang="en" href="${assoluto(alt.en)}"/><xhtml:link rel="alternate" hreflang="x-default" href="${assoluto(alt.it)}"/>` : '') +
    '</url>';
  const righe = pagine.flatMap((p) => [voce(p.it, p, p.priorita), ...(p.en ? [voce(p.en, p, p.priorita)] : [])]);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${righe.join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
