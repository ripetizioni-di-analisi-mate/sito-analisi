import { getCollection } from 'astro:content';
import type { Lingua } from '../i18n';

const cache = new Map<string, Promise<Set<string>>>();

// Le ripetizioni si contano nella lingua in cui il titolo sarà pubblicato.
export async function titoloRipetuto(lingua: Lingua, tipo: 'svolti' | 'dafare', materia: string, titolo: string) {
  const raccolta = lingua === 'en' ? `${tipo}_en` as const : lingua === 'es' ? `${tipo}_es` as const : tipo;
  if (!cache.has(raccolta)) {
    cache.set(raccolta, getCollection(raccolta).then((voci) => {
      const visti = new Set<string>(), ripetuti = new Set<string>();
      for (const voce of voci) {
        const chiave = voce.id.split('/')[0] + '/' + voce.data.titolo;
        if (visti.has(chiave)) ripetuti.add(chiave);
        visti.add(chiave);
      }
      return ripetuti;
    }));
  }
  return (await cache.get(raccolta)!).has(materia + '/' + titolo);
}
