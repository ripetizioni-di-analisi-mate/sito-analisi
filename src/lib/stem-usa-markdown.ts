// Percorsi delle pagine di studio dei corsi americani scritti sul programma statunitense,
// con i contenuti in Markdown (src/content-us/). Gli indirizzi delle sezioni sono inglesi.
import { getCollection } from 'astro:content';
import { PROGRAMMI, SEZIONI_USA } from '../data/stem-usa/programmi.mjs';
import { numero } from './nav';

type Voce = { id: string };
const chiave = (id: string) => id.split('/').slice(0, 2).join('/');

export function argomentiMarkdown() {
  return Object.entries(PROGRAMMI as Record<string, { slug: string }[]>)
    .flatMap(([corso, argomenti]) => argomenti.map((a) => ({ corso, argomento: a.slug })));
}

export async function usSezioniMarkdown() {
  const svolti = await getCollection('svolti_us');
  const dafare = await getCollection('dafare_us');
  const ha = (voci: Voce[], corso: string, argomento: string) => voci.some((v) => chiave(v.id) === `${corso}/${argomento}`);
  return argomentiMarkdown().flatMap(({ corso, argomento }) => [
    { params: { course: corso, topic: argomento, section: SEZIONI_USA.teoria } },
    ...(ha(svolti, corso, argomento) ? [{ params: { course: corso, topic: argomento, section: SEZIONI_USA['esercizi-svolti'] } }] : []),
    ...(ha(dafare, corso, argomento) ? [{ params: { course: corso, topic: argomento, section: SEZIONI_USA.esercizi } }] : []),
  ]);
}

export async function usVociMarkdown() {
  const perSezione = async (collezione: 'svolti_us' | 'dafare_us', section: string) =>
    (await getCollection(collezione)).map((v) => {
      const [corso, argomento] = v.id.split('/');
      return { params: { course: corso, topic: argomento, section, number: String(numero(v.id)) } };
    });
  return [
    ...(await perSezione('svolti_us', SEZIONI_USA['esercizi-svolti'])),
    ...(await perSezione('dafare_us', SEZIONI_USA.esercizi)),
  ];
}
