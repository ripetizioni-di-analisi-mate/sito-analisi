// Dati della pagina /domande-a-tempo (e /en/domande-a-tempo): materie attive con domande, argomenti con il numero di domande.
// In inglese contano solo le domande tradotte (src/content-en/domande), con i nomi inglesi di materie e argomenti.
import { getCollection } from 'astro:content';
import { materieL, type Lingua } from '../i18n';
export async function elencoDomande(lingua: Lingua = 'it') {
  const domande = await getCollection(lingua === 'en' ? 'domande_en' : 'domande');
  const conta = (p: string) => domande.filter((v) => v.id.startsWith(p)).length;
  const materie = materieL(lingua).filter((m) => m.attiva && conta(`${m.slug}/`) > 0).map((m) => ({
    slug: m.slug, titolo: m.titolo, gruppo: m.gruppo, colore: m.colore, concorsi: m.gruppo === 'Concorsi',
    totale: conta(`${m.slug}/`),
    argomenti: m.argomenti.map((a) => ({ slug: a.slug, titolo: a.titolo, n: conta(`${m.slug}/${a.slug}/`) })).filter((a) => a.n > 0),
  }));
  return { materie, gruppi: [...new Set(materie.map((m) => m.gruppo))], totale: materie.reduce((s, m) => s + m.totale, 0) };
}
