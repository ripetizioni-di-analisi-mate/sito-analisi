import { getCollection } from 'astro:content';
import { paginaLocalizzata } from './lingue-sito';
import { materiaL, link, T, type Lingua } from '../i18n';
import { catalogoDomande } from './domande';
import { destinazioniStudio } from './percorso-studio.mjs';

export interface Passo { titolo: string; sotto?: string; href: string; etichetta?: string }

export interface DisponibilitaStudio { svolti: boolean; dafare: boolean; domande: boolean }
let raccolteStudio: Promise<{ svolti: Set<string>; dafare: Set<string> }> | undefined;
// Le collezioni italiane sono anche la riserva delle pagine non ancora tradotte.
// Si legge una volta sola l'elenco dei contenuti disponibili durante la build.
export async function disponibilitaStudio(m: string, argomento: string, l: Lingua = 'it'): Promise<DisponibilitaStudio> {
  if (l === 'es') {
    const base = '/' + m + '/' + argomento;
    return {
      svolti: paginaLocalizzata(l, base + '/esercizi-svolti'),
      dafare: paginaLocalizzata(l, base + '/esercizi'),
      domande: paginaLocalizzata(l, base + '/domande'),
    };
  }
  raccolteStudio ??= Promise.all([getCollection('svolti'), getCollection('dafare')]).then(([s, d]) => ({
    svolti: new Set(s.map((v) => v.id.split('/').slice(0, 2).join('/'))),
    dafare: new Set(d.map((v) => v.id.split('/').slice(0, 2).join('/'))),
  }));
  const [raccolte, domande] = await Promise.all([raccolteStudio, catalogoDomande(l)]);
  return { svolti: raccolte.svolti.has(`${m}/${argomento}`), dafare: raccolte.dafare.has(`${m}/${argomento}`), domande: (domande[m] ?? []).includes(argomento) };
}

// La destinazione principale accompagna teoria, svolti, esercizi autonomi e
// verifica sullo stesso argomento. Il prossimo argomento resta una scorciatoia.
export function vicini(m: string, argomento: string, sezione: string, l: Lingua = 'it', disponibili: DisponibilitaStudio = { svolti: true, dafare: true, domande: false }): { precedente?: Passo; successivo?: Passo } {
  const t = T(l);
  const mat = materiaL(l, m);
  const d = destinazioniStudio(mat.argomenti.map((a) => a.slug), argomento, sezione, disponibili);
  const nomi = { ...t.sezioni, domande: l === 'es' ? 'Preguntas cronometradas' : l === 'en' ? 'Timed questions' : 'Domande a tempo' };
  const etichette: Record<string, string> = l === 'es'
    ? { 'esercizi-svolti': 'Continúa con los ejemplos', esercizi: 'Practica por tu cuenta', domande: 'Pon a prueba lo aprendido' }
    : l === 'en'
    ? { 'esercizi-svolti': 'Continue with worked examples', esercizi: 'Try on your own', domande: 'Check your understanding' }
    : { 'esercizi-svolti': 'Continua con gli esempi', esercizi: 'Prova in autonomia', domande: 'Verifica con le domande' };
  const passo = (v: { argomento: string; sezione: string } | null, avanti = false): Passo | undefined => {
    if (!v) return undefined;
    const a = mat.argomenti.find((a) => a.slug === v.argomento);
    if (!a) return undefined;
    const altro = v.argomento !== argomento;
    const ruta = '/' + m + '/' + v.argomento + '/' + v.sezione;
    return {
      titolo: altro ? a.titolo : nomi[v.sezione],
      sotto: altro ? nomi.teoria : a.breve,
      href: link(l, l === 'es' && !paginaLocalizzata(l, ruta) ? '/' + m + '#' + a.slug : ruta),
      ...(avanti ? { etichetta: altro ? t.argomentoSuccessivo : etichette[v.sezione] ?? t.successivo } : {}),
    };
  };
  return {
    precedente: passo(d.precedente) ?? { titolo: t.indiceArgomenti, sotto: mat.breve, href: link(l, `/${m}`) },
    successivo: passo(d.successivo, true),
  };
}

// Id delle voci: "<materia>/<argomento>/<n>" per gli esercizi, "<materia>/<argomento>" per la teoria.
export function numero(id: string): number {
  return Number(id.split('/').pop());
}
export function perArgomento<T extends { id: string }>(voci: T[], m: string, argomento: string): T[] {
  return voci.filter((v) => v.id.startsWith(`${m}/${argomento}/`)).sort((a, b) => numero(a.id) - numero(b.id));
}
