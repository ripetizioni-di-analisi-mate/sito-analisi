// Catalogo del materiale di una materia per «Compatibilità con il tuo esame»: argomenti, schede svolte
// (titolo e parole chiave) e voci della teoria (definizioni, teoremi, proposizioni con la loro ancora).
// Lo legge solo il Worker (worker/compatibilita.mjs): l'indirizzo è chiuso al pubblico, come /dati-domande/.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { materia as datiMateria } from '../../data/materie';
import { MATERIE_COMPATIBILITA } from '../../data/compatibilita';
import { indiceAnalitico } from '../../lib/indice-analitico';
import { dettagliScheda, dettagliTeoria } from '../../lib/catalogo-compatibilita';

export function getStaticPaths() {
  return MATERIE_COMPATIBILITA.map((m) => ({ params: { materia: m } }));
}

const numero = (id: string) => Number(id.split('/').pop());

export const GET: APIRoute = async ({ params }) => {
  const m = datiMateria(params.materia!);
  const svolti = (await getCollection('svolti')).filter((v) => v.id.startsWith(`${m.slug}/`));
  const dafare = (await getCollection('dafare')).filter((v) => v.id.startsWith(`${m.slug}/`));
  const teoria = new Map((await getCollection('teoria')).map((v) => [v.id, v.body || '']));
  const indice = await indiceAnalitico('it', m.slug, m.argomenti.map((a) => a.slug));
  const argomenti = m.argomenti.map((a) => ({
    slug: a.slug,
    titolo: a.titolo,
    schede: svolti
      .filter((v) => v.id.startsWith(`${m.slug}/${a.slug}/`))
      .map((v) => ({ n: numero(v.id), titolo: String(v.data.titolo), parole: ((v.data as { parole?: string[] }).parole || []).map(String), ...dettagliScheda(v.body || '') }))
      .sort((x, y) => x.n - y.n),
    teoria: (indice.find((x) => x.argomento === a.slug)?.voci || []).map((v) => ({ ancora: v.ancora, titolo: v.titolo, tipo: v.tipo, ...dettagliTeoria(teoria.get(`${m.slug}/${a.slug}`) || '', v.ancora) })),
    esercizi: dafare.filter((v) => v.id.startsWith(`${m.slug}/${a.slug}/`)).length,
  }));
  return new Response(JSON.stringify({ materia: m.slug, titolo: m.titolo, argomenti }), { headers: { 'content-type': 'application/json' } });
};
