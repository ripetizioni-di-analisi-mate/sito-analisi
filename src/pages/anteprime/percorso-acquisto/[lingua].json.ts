import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { materieL, link } from '../../../i18n';
import { SCONTO_BENVENUTO } from '../../../data/benvenuto';

export const getStaticPaths = () => ['it', 'en'].map((lingua) => ({ params: { lingua } }));

export const GET: APIRoute = async ({ params }) => {
  const lingua = params.lingua === 'en' ? 'en' : 'it';
  const prime = await getCollection('svolti', (voce) => voce.id.endsWith('/1'));
  const tradotte = lingua === 'en' ? await getCollection('svolti_en', (voce) => voce.id.endsWith('/1')) : [];
  const italiane = new Map(prime.map((voce) => [voce.id, voce.data.titolo]));
  const inglesi = new Map(tradotte.map((voce) => [voce.id, voce.data.titolo]));
  const corsi = materieL(lingua)
    .filter((m) => m.attiva && m.argomenti.length)
    .map((m) => ({
      slug: m.slug,
      nome: m.breve,
      gruppo: m.gruppo,
      prezzo: m.prezzo ?? 0,
      attiva: true,
      programma: link(lingua, `/${m.slug}`),
      capitoli: m.argomenti.map((a) => {
        const base = `/${m.slug}/${a.slug}`;
        const id = `${m.slug}/${a.slug}/1`;
        const titolo = (lingua === 'en' ? inglesi.get(id) : italiane.get(id)) || '';
        return {
          slug: a.slug,
          nome: a.breve,
          titolo,
          teoria: link(lingua, base + '/teoria'),
          scheda: titolo ? link(lingua, base + '/esercizi-svolti/1') : ''
        };
      })
    }));
  return Response.json({ corsi, benvenuto: SCONTO_BENVENUTO });
};
