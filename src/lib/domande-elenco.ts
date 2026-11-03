// Dati della pagina /domande-a-tempo: materie attive con domande, argomenti con il numero di domande.
import { getCollection } from 'astro:content';
import { MATERIE } from '../data/materie';
export async function elencoDomande() {
  const domande = await getCollection('domande');
  const conta = (p: string) => domande.filter((v) => v.id.startsWith(p)).length;
  const materie = MATERIE.filter((m) => m.attiva && conta(`${m.slug}/`) > 0).map((m) => ({
    slug: m.slug, titolo: m.titolo, gruppo: m.gruppo, colore: m.colore, concorsi: m.gruppo === 'Concorsi',
    totale: conta(`${m.slug}/`),
    argomenti: m.argomenti.map((a) => ({ slug: a.slug, titolo: a.titolo, n: conta(`${m.slug}/${a.slug}/`) })).filter((a) => a.n > 0),
  }));
  return { materie, gruppi: [...new Set(materie.map((m) => m.gruppo))], totale: materie.reduce((s, m) => s + m.totale, 0) };
}
