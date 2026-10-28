import { materiaL, sezioniL, link, T, type Lingua } from '../i18n';

export interface Passo { titolo: string; sotto?: string; href: string }

// Ordine di lettura dentro una materia: per ogni argomento teoria, esercizi svolti, esercizi da fare.
function pagine(m: string, l: Lingua) {
  return materiaL(l, m).argomenti.flatMap((a) =>
    sezioniL(l).map((s) => ({ chiave: `${a.slug}/${s.slug}`, titolo: s.titolo, sotto: a.breve, href: link(l, `/${m}/${a.slug}/${s.slug}`) })),
  );
}

export function vicini(m: string, argomento: string, sezione: string, l: Lingua = 'it'): { precedente?: Passo; successivo?: Passo } {
  const P = pagine(m, l);
  const i = P.findIndex((p) => p.chiave === `${argomento}/${sezione}`);
  return {
    precedente: i > 0 ? P[i - 1] : { titolo: T(l).indiceArgomenti, sotto: materiaL(l, m).breve, href: link(l, `/${m}`) },
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
