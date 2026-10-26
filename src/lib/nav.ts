import { materia as trovaMateria, SEZIONI } from '../data/materie';
import { url } from './url';

export interface Passo { titolo: string; sotto?: string; href: string }

// Ordine di lettura dentro una materia: per ogni argomento teoria, esercizi svolti, esercizi da fare.
function pagine(m: string) {
  return trovaMateria(m).argomenti.flatMap((a) =>
    SEZIONI.map((s) => ({ chiave: `${a.slug}/${s.slug}`, titolo: s.titolo, sotto: a.breve, href: url(`/${m}/${a.slug}/${s.slug}`) })),
  );
}

export function vicini(m: string, argomento: string, sezione: string): { precedente?: Passo; successivo?: Passo } {
  const P = pagine(m);
  const i = P.findIndex((p) => p.chiave === `${argomento}/${sezione}`);
  return {
    precedente: i > 0 ? P[i - 1] : { titolo: 'Indice degli argomenti', sotto: trovaMateria(m).breve, href: url(`/${m}`) },
    successivo: i >= 0 && i < P.length - 1 ? P[i + 1] : undefined,
  };
}

// Id delle voci: "<materia>/<argomento>/<n>" per gli esercizi, "<materia>/<argomento>" per la teoria.
export function numero(id: string): number {
  return Number(id.split('/').pop());
}
export function perArgomento<T extends { id: string }>(voci: T[], m: string, argomento: string): T[] {
  return voci.filter((v) => v.id.startsWith(`${m}/${argomento}/`)).sort((a, b) => numero(a.id) - numero(b.id));
}
