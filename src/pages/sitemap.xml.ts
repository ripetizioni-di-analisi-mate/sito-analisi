// Mappa del sito per i motori di ricerca: tutte le pagine indicizzabili, con le versioni nelle due lingue.
// Per chi non legge né l'italiano né l'inglese (x-default) si indica la versione inglese.
// La data (lastmod) è quella dell'ultima modifica vera del contenuto (src/data/date-pagine.json,
// scripts/date-pagine.mjs): un elenco e la pagina della materia prendono la data più recente dei loro contenuti.
// Le pagine senza contenuti datati (prezzi, contatti…) non hanno data, come raccomandano Google e Bing.
import { getCollection } from 'astro:content';
import { percorsiL } from '../data/percorsi';
import { MATERIE } from '../data/materie';
import { VIDEOCORSI } from '../data/videocorsi';
import DATE from '../data/date-pagine.json';
import { assoluto } from '../lib/seo';

const DATA = DATE as Record<string, { data: string }>;
const dataDi = (cartella: string, id: string) => DATA[`src/${cartella}/${id}.md`]?.data;
const piuRecente = (...d: (string | undefined)[]) => d.filter(Boolean).sort().pop();

export async function GET() {
  const [teoria, svolti, dafare, teoriaEn, svoltiEn, dafareEn] = await Promise.all(
    ['teoria', 'svolti', 'dafare', 'teoria_en', 'svolti_en', 'dafare_en'].map((c) => getCollection(c as 'teoria')),
  );
  const tradotte = new Set([...teoriaEn, ...svoltiEn, ...dafareEn].map((v) => v.id));
  const pagine: { it: string; en?: string; priorita: number; dIt?: string; dEn?: string }[] = [];
  const due = (p: string, priorita: number, conEn = true, dIt?: string, dEn?: string) =>
    pagine.push({ it: p, en: conEn ? (p === '/' ? '/en' : `/en${p}`) : undefined, priorita, dIt, dEn });
  // data di un contenuto nelle due lingue (l'inglese sta in src/content-en)
  const d = (sezione: string, id: string) => ({ it: dataDi(`content/${sezione}`, id), en: dataDi(`content-en/${sezione}`, id) });

  const casa = pagine.length;
  due('/', 1.0);
  const percorsiEn = new Set(percorsiL('en').map((p) => p.slug));
  for (const { slug } of percorsiL('it')) due(`/percorsi/${slug}`, 0.8, percorsiEn.has(slug));
  due('/chi-sono', 0.5);
  due('/concorsi', 0.6, false);
  due('/domande-a-tempo', 0.6);
  due('/concorsi/simulazione', 0.5, false);
  // formulari gratuiti, in italiano e in inglese (quelli tradotti)
  const formulari = await getCollection('formulari');
  const formulariEn = new Set((await getCollection('formulari_en')).map((v) => v.id));
  const dForm = formulari.map((v) => dataDi('content/formulari', v.id));
  const dFormEn = formulari.map((v) => dataDi('content-en/formulari', v.id));
  due('/formulari', 0.7, formulariEn.size > 0, piuRecente(...dForm), piuRecente(...dFormEn));
  formulari.forEach((v, k) => due(`/formulari/${v.id}`, 0.8, formulariEn.has(v.id), dForm[k], dFormEn[k]));
  due('/ripetizioni-analisi', 0.8, false);
  due('/prenota', 0.7, false);
  due('/corsi-di-gruppo', 0.7, false);
  due('/compatibilita', 0.7, false);
  due('/videocorsi', 0.7, false);
  for (const v of VIDEOCORSI) due(`/videocorsi/${v.slug}`, 0.6, false);
  for (const p of ['/prezzi', '/contatti']) due(p, 0.3);
  due('/livelli-e-punti', 0.2);
  for (const p of ['/privacy', '/termini']) due(p, 0.1);
  let tuttoIt: string | undefined, tuttoEn: string | undefined;
  for (const m of MATERIE.filter((x) => x.attiva)) {
    const materia = pagine.length;
    due(`/${m.slug}`, 0.9);
    if (m.prezzo) due(`/${m.slug}/sblocca`, 0.4);
    let mIt: string | undefined, mEn: string | undefined;
    for (const a of m.argomenti) {
      const id = `${m.slug}/${a.slug}`;
      if (!teoria.some((v) => v.id === id)) continue;
      const t = d('teoria', id);
      due(`/${id}/teoria`, 0.8, tradotte.has(id), t.it, t.en);
      const sv = svolti.filter((v) => v.id.startsWith(`${id}/`));
      const df = dafare.filter((v) => v.id.startsWith(`${id}/`));
      const dSv = sv.map((v) => d('svolti', v.id));
      const dDf = df.map((v) => d('dafare', v.id));
      const lsIt = piuRecente(...dSv.map((x) => x.it)), lsEn = piuRecente(...dSv.map((x) => x.en));
      const ldIt = piuRecente(...dDf.map((x) => x.it)), ldEn = piuRecente(...dDf.map((x) => x.en));
      due(`/${id}/esercizi-svolti`, 0.7, sv.length > 0 && sv.every((v) => tradotte.has(v.id)), lsIt, lsEn);
      due(`/${id}/esercizi`, 0.6, df.length > 0 && df.every((v) => tradotte.has(v.id)), ldIt, ldEn);
      sv.forEach((v, k) => due(`/${m.slug}/${a.slug}/esercizi-svolti/${v.id.split('/').pop()}`, 0.6, tradotte.has(v.id), dSv[k].it, dSv[k].en));
      df.forEach((v, k) => due(`/${m.slug}/${a.slug}/esercizi/${v.id.split('/').pop()}`, 0.5, tradotte.has(v.id), dDf[k].it, dDf[k].en));
      mIt = piuRecente(mIt, t.it, lsIt, ldIt); mEn = piuRecente(mEn, t.en, lsEn, ldEn);
    }
    pagine[materia].dIt = mIt; pagine[materia].dEn = mEn;
    // indice analitico: teoremi e definizioni della materia (in inglese se la teoria è tradotta)
    if (teoria.some((v) => v.id.startsWith(`${m.slug}/`))) due(`/${m.slug}/teoremi`, 0.7, teoriaEn.some((v) => v.id.startsWith(`${m.slug}/`)), mIt, mEn);
    tuttoIt = piuRecente(tuttoIt, mIt); tuttoEn = piuRecente(tuttoEn, mEn);
  }
  pagine[casa].dIt = tuttoIt; pagine[casa].dEn = tuttoEn;

  const voce = (loc: string, alt: { it: string; en?: string }, priorita: number, data?: string) =>
    `<url><loc>${assoluto(loc)}</loc>${data ? `<lastmod>${data}</lastmod>` : ''}<priority>${priorita.toFixed(1)}</priority>` +
    (alt.en ? `<xhtml:link rel="alternate" hreflang="it" href="${assoluto(alt.it)}"/><xhtml:link rel="alternate" hreflang="en" href="${assoluto(alt.en)}"/><xhtml:link rel="alternate" hreflang="x-default" href="${assoluto(alt.en)}"/>` : '') +
    '</url>';
  const righe = pagine.flatMap((p) => [voce(p.it, p, p.priorita, p.dIt), ...(p.en ? [voce(p.en, p, p.priorita, p.dEn ?? p.dIt)] : [])]);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${righe.join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
