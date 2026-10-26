import { getCollection } from 'astro:content';
import { MATERIE, materia as trovaMateria, argomento as trovaArgomento } from '../data/materie';
import { url } from '../lib/url';
import { numero } from '../lib/nav';

// Indice della ricerca: materie, argomenti, definizioni, teoremi, esercizi e parole chiave.
// Generato a tempo di build e letto dal browser nella pagina /cerca.
export async function GET() {
  const voci: { t: string; s: string; m: string; h: string; p: string }[] = [];

  for (const m of MATERIE.filter((x) => x.attiva)) {
    for (const a of m.argomenti) voci.push({ t: a.titolo, s: 'Argomento', m: m.breve, h: url(`/${m.slug}/${a.slug}/teoria`), p: '' });
  }
  for (const v of await getCollection('teoria')) {
    const [ms, as] = v.id.split('/');
    const m = trovaMateria(ms), a = trovaArgomento(ms, as);
    const body = v.body ?? '';
    for (const x of body.matchAll(/:{3,4}(definizione|teorema|proposizione)\{#([\w-]+)\s+titolo="([^"]+)"/g)) {
      const tipo = x[1][0].toUpperCase() + x[1].slice(1);
      voci.push({ t: x[3], s: `${tipo} · ${a.breve}`, m: m.breve, h: url(`/${v.id}/teoria#${x[2]}`), p: '' });
    }
    for (const x of body.matchAll(/^##\s+(.+)$/gm)) {
      voci.push({ t: x[1].trim(), s: `Teoria · ${a.breve}`, m: m.breve, h: url(`/${v.id}/teoria`), p: '' });
    }
  }
  for (const v of await getCollection('svolti')) {
    const [ms, as] = v.id.split('/');
    voci.push({ t: `Scheda ${numero(v.id)} · ${v.data.titolo}`, s: `Esercizi svolti · ${trovaArgomento(ms, as).breve}`, m: trovaMateria(ms).breve, h: url(`/${ms}/${as}/esercizi-svolti/${numero(v.id)}`), p: v.data.parole.join(' ') });
  }
  for (const v of await getCollection('dafare')) {
    const [ms, as] = v.id.split('/');
    voci.push({ t: `Esercizio da fare ${numero(v.id)} · ${v.data.titolo}`, s: `Esercizi da fare · ${trovaArgomento(ms, as).breve}`, m: trovaMateria(ms).breve, h: url(`/${ms}/${as}/esercizi/${numero(v.id)}`), p: v.data.parole.join(' ') });
  }
  return new Response(JSON.stringify(voci), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
