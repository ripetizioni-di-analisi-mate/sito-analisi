import { getCollection } from 'astro:content';
import { materieL } from '../i18n';
import { schedeLibere } from '../data/schede-libere.mjs';
import { originale } from './canonici';
import { conAccount } from '../data/con-account.mjs';

type LinguaRaccolta = 'it' | 'en';
interface Scheda { numero: number; titolo: string; percorso: string; teoria: string[] }
interface Capitolo { slug: string; titolo: string; schede: Scheda[] }

const cache = new Map<LinguaRaccolta, Promise<Map<string, Capitolo[]>>>();

async function raccogli(lingua: LinguaRaccolta) {
  // Anche le pagine numerate inglesi sono generate a partire dagli ID italiani.
  const [italiane, inglesi] = await Promise.all([getCollection('svolti'), lingua === 'en' ? getCollection('svolti_en') : []]);
  const traduzioni = new Map(inglesi.map((s) => [s.id, s.data.titolo]));
  const perCapitolo = new Map<string, Scheda[]>();
  const materie = materieL(lingua).filter((m) => m.attiva);
  const catalogo = new Map(materie.map((m) => [m.slug, m]));
  for (const scheda of italiane) {
    const [materia, argomento, id] = scheda.id.split('/');
    const m = catalogo.get(materia);
    const numero = Number(id);
    if (!m || ((m.prezzo || conAccount(materia)) && numero > schedeLibere(materia, argomento))) continue;
    const titolo = lingua === 'it' ? scheda.data.titolo : traduzioni.get(scheda.id);
    if (!titolo) continue;
    const chiave = materia + '/' + argomento;
    const gruppo = perCapitolo.get(chiave) ?? [];
    const percorso = originale(materia, argomento, 'esercizi-svolti', id) ?? '/' + chiave + '/esercizi-svolti/' + id;
    gruppo.push({ numero, titolo, percorso, teoria: scheda.data.teoria });
    perCapitolo.set(chiave, gruppo);
  }
  const raccolte = new Map<string, Capitolo[]>();
  for (const materia of materie) {
    const capitoli = materia.argomenti.flatMap(({ slug, titolo }) => {
      const schede = perCapitolo.get(materia.slug + '/' + slug);
      return schede ? [{ slug, titolo, schede: schede.sort((a, b) => a.numero - b.numero) }] : [];
    });
    if (capitoli.length) raccolte.set(materia.slug, capitoli);
  }
  return raccolte;
}

export function raccolteSvolti(lingua: LinguaRaccolta) {
  if (!cache.has(lingua)) cache.set(lingua, raccogli(lingua));
  return cache.get(lingua)!;
}

export const percorsoRaccolta = (materia: string) => '/' + materia + '/esercizi-svolti-gratuiti';

export async function esempiPerEsercizio(lingua: LinguaRaccolta, materia: string, argomento: string, teoria: string[]) {
  if (!teoria.length) return [];
  const capitolo = (await raccolteSvolti(lingua)).get(materia)?.find((c) => c.slug === argomento);
  return (capitolo?.schede ?? [])
    .map((scheda) => ({ scheda, inComune: scheda.teoria.filter((t) => teoria.includes(t)).length }))
    .filter((s) => s.inComune > 0)
    .sort((a, b) => b.inComune - a.inComune || a.scheda.numero - b.scheda.numero)
    .slice(0, 2).map((s) => s.scheda);
}
