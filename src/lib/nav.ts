import { materiaL, sezioniL, link, T, type Lingua } from '../i18n';

export interface Passo { titolo: string; sotto?: string; href: string; etichetta?: string }

// Navigazione a fine pagina: si va avanti di argomento in argomento lungo la teoria.
// Gli esercizi di ogni argomento sono elencati in fondo alla sua teoria.
//  - teoria: indietro alla teoria dell'argomento precedente (o all'indice), avanti alla teoria del successivo;
//  - elenchi di esercizi: indietro alla teoria dello stesso argomento, avanti alla teoria del successivo.
export function vicini(m: string, argomento: string, sezione: string, l: Lingua = 'it'): { precedente?: Passo; successivo?: Passo } {
  const t = T(l);
  const mat = materiaL(l, m);
  const i = mat.argomenti.findIndex((a) => a.slug === argomento);
  const teoria = sezioniL(l).find((s) => s.slug === 'teoria')!.titolo;
  const verso = (k: number) => mat.argomenti[k] && { titolo: mat.argomenti[k].titolo, sotto: teoria, href: link(l, `/${m}/${mat.argomenti[k].slug}/teoria`) };
  const successivo = verso(i + 1);
  if (successivo) (successivo as Passo).etichetta = t.argomentoSuccessivo;
  const precedente = sezione === 'teoria'
    ? (verso(i - 1) || { titolo: t.indiceArgomenti, sotto: mat.breve, href: link(l, `/${m}`) })
    : { titolo: teoria, sotto: mat.argomenti[i]?.breve, href: link(l, `/${m}/${argomento}/teoria`) };
  return { precedente, successivo: successivo || undefined };
}

// Id delle voci: "<materia>/<argomento>/<n>" per gli esercizi, "<materia>/<argomento>" per la teoria.
export function numero(id: string): number {
  return Number(id.split('/').pop());
}
export function perArgomento<T extends { id: string }>(voci: T[], m: string, argomento: string): T[] {
  return voci.filter((v) => v.id.startsWith(`${m}/${argomento}/`)).sort((a, b) => numero(a.id) - numero(b.id));
}
