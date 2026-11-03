// Indice analitico di una materia: definizioni, teoremi e proposizioni della teoria, argomento per argomento,
// con l'ancora del riquadro nella pagina di teoria. Si legge dal Markdown (`:::teorema{#ancora titolo="…"}`),
// così l'elenco segue da solo ogni modifica dei contenuti.
import { getCollection } from 'astro:content';
import type { Lingua } from '../i18n';

export type TipoVoce = 'definizione' | 'teorema' | 'proposizione';
export interface VoceIndice { tipo: TipoVoce; ancora: string; titolo: string }
export interface ArgomentoIndice { argomento: string; voci: VoceIndice[] }

const BLOCCO = /^:{3,4}(definizione|teorema|proposizione)\{#([\w-]+)[^}]*?titolo="([^"]+)"/;

export async function indiceAnalitico(lingua: Lingua, materia: string, argomenti: string[]): Promise<ArgomentoIndice[]> {
  const teoria = await getCollection(lingua === 'en' ? 'teoria_en' : 'teoria');
  const perId = new Map(teoria.map((v) => [v.id, v]));
  return argomenti
    .map((a) => {
      const corpo = perId.get(`${materia}/${a}`)?.body ?? '';
      const voci: VoceIndice[] = [];
      for (const riga of corpo.split('\n')) {
        const r = BLOCCO.exec(riga.trim());
        if (r) voci.push({ tipo: r[1] as TipoVoce, ancora: r[2], titolo: r[3] });
      }
      return { argomento: a, voci };
    })
    .filter((x) => x.voci.length > 0);
}

// Numero di voci, per il rimando nella pagina della materia.
export async function quanteVoci(lingua: Lingua, materia: string, argomenti: string[]): Promise<number> {
  return (await indiceAnalitico(lingua, materia, argomenti)).reduce((n, a) => n + a.voci.length, 0);
}
