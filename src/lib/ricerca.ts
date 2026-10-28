import { materieL, materiaL, argomentoL, link, vociL, T, type Lingua } from '../i18n';
import { numero } from './nav';

// Indice della ricerca: materie, argomenti, definizioni, teoremi, esercizi e parole chiave.
// Generato a tempo di build e letto dal browser nella pagina Cerca.
const TIPI: Record<Lingua, Record<string, string>> = {
  it: { definizione: 'Definizione', teorema: 'Teorema', proposizione: 'Proposizione' },
  en: { definizione: 'Definition', teorema: 'Theorem', proposizione: 'Proposition' },
};
export async function indiceRicerca(l: Lingua) {
  const t = T(l);
  const voci: { t: string; s: string; m: string; h: string; p: string }[] = [];
  for (const m of materieL(l).filter((x) => x.attiva)) {
    for (const a of m.argomenti) voci.push({ t: a.titolo, s: t.argomento, m: m.breve, h: link(l, `/${m.slug}/${a.slug}/teoria`), p: '' });
  }
  for (const v of await vociL(l, 'teoria')) {
    const [ms, as] = v.id.split('/');
    const m = materiaL(l, ms), a = argomentoL(l, ms, as);
    const body = v.body ?? '';
    for (const x of body.matchAll(/:{3,4}(definizione|teorema|proposizione)\{#([\w-]+)\s+titolo="([^"]+)"/g)) {
      voci.push({ t: x[3], s: `${TIPI[l][x[1]]} · ${a.breve}`, m: m.breve, h: link(l, `/${v.id}/teoria#${x[2]}`), p: '' });
    }
    for (const x of body.matchAll(/^##\s+(.+)$/gm)) {
      voci.push({ t: x[1].trim(), s: `${t.sezioni.teoria} · ${a.breve}`, m: m.breve, h: link(l, `/${v.id}/teoria`), p: '' });
    }
  }
  for (const v of await vociL(l, 'svolti')) {
    const [ms, as] = v.id.split('/');
    voci.push({ t: `${t.scheda} ${numero(v.id)} · ${v.data.titolo}`, s: `${t.sezioni['esercizi-svolti']} · ${argomentoL(l, ms, as).breve}`, m: materiaL(l, ms).breve, h: link(l, `/${ms}/${as}/esercizi-svolti/${numero(v.id)}`), p: v.data.parole.join(' ') });
  }
  for (const v of await vociL(l, 'dafare')) {
    const [ms, as] = v.id.split('/');
    voci.push({ t: `${t.esercizioDaFare} ${numero(v.id)} · ${v.data.titolo}`, s: `${t.sezioni.esercizi} · ${argomentoL(l, ms, as).breve}`, m: materiaL(l, ms).breve, h: link(l, `/${ms}/${as}/esercizi/${numero(v.id)}`), p: v.data.parole.join(' ') });
  }
  return new Response(JSON.stringify(voci), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
