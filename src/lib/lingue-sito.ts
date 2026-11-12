import { MATERIE } from '../data/materie';
import { MATERIE_DE, ARGOMENTI_DE, GRUPPI_DE, SOTTOGRUPPI_DE } from '../data/materie-de';
import { MATERIE_ES, ARGOMENTI_ES, GRUPPI_ES, SOTTOGRUPPI_ES } from '../data/materie-es';
import { MATERIE_FR, ARGOMENTI_FR, GRUPPI_FR, SOTTOGRUPPI_FR } from '../data/materie-fr';
import { CODICI_LINGUA, LINGUE_CATALOGO, prefissoLingua } from '../data/codici-lingua.mjs';

export type Lingua = (typeof CODICI_LINGUA)[number];
export type LinguaCatalogo = (typeof LINGUE_CATALOGO)[number];

export const LINGUE: { codice: Lingua; nome: string }[] = [
  { codice: 'it', nome: 'Italiano' },
  { codice: 'en', nome: 'English' },
  { codice: 'de', nome: 'Deutsch' },
  { codice: 'es', nome: 'Español' },
  { codice: 'fr', nome: 'Français' },
];

export const LOCALE = { it: 'it_IT', en: 'en_US', de: 'de_DE', es: 'es_ES', fr: 'fr_FR' };

export function linguaCatalogo(lingua: Lingua): lingua is LinguaCatalogo {
  return (LINGUE_CATALOGO as readonly Lingua[]).includes(lingua);
}

export function senzaLingua(path: string) {
  const normalizzato = path.replace(/\/(?:index\.html)$/, '/').replace(/\.html$/, '').replace(/\/$/, '');
  return normalizzato.slice(prefissoLingua(normalizzato).length) || '/';
}

export const nellaLingua = (lingua: Lingua, path: string) => lingua === 'it' ? path : `/${lingua}${path === '/' ? '' : path}`;

export const CATALOGHI_LOCALIZZATI = {
  de: { materie: MATERIE_DE, argomenti: ARGOMENTI_DE, gruppi: GRUPPI_DE, sottogruppi: SOTTOGRUPPI_DE },
  es: { materie: MATERIE_ES, argomenti: ARGOMENTI_ES, gruppi: GRUPPI_ES, sottogruppi: SOTTOGRUPPI_ES },
  fr: { materie: MATERIE_FR, argomenti: ARGOMENTI_FR, gruppi: GRUPPI_FR, sottogruppi: SOTTOGRUPPI_FR },
};

const pagineComuni = ['/', '/cerca', '/chi-sono', '/contatti', '/prezzi', '/accedi', '/account', '/reimposta-password'];
const lezioni: Record<LinguaCatalogo, string[]> = {
  de: ['/fisica-zero/lavoro-ed-energia/teoria'],
  es: ['/fisica-zero/lavoro-ed-energia/teoria'],
  fr: ['/fisica-zero/lavoro-ed-energia/teoria'],
};
const pagine = Object.fromEntries(LINGUE_CATALOGO.map((lingua) => [lingua, new Set([
  ...pagineComuni,
  ...lezioni[lingua].filter((path) => MATERIE.some((m) => m.attiva && m.slug === path.split('/')[1])),
  ...MATERIE.filter((m) => m.attiva && Object.hasOwn(CATALOGHI_LOCALIZZATI[lingua].materie, m.slug)).map((m) => `/${m.slug}`),
])])) as Record<LinguaCatalogo, Set<string>>;

export const paginaLocalizzata = (lingua: LinguaCatalogo, path: string) => pagine[lingua].has(path);
export const lingueLocalizzate = (path: string) => LINGUE_CATALOGO.filter((lingua) => paginaLocalizzata(lingua, path));

// Una pagina priva di traduzione porta all'argomento o al corso corrispondente nel catalogo.
export function destinazioneLocalizzata(lingua: LinguaCatalogo, path: string) {
  if (paginaLocalizzata(lingua, path)) return nellaLingua(lingua, path);
  const [, materia, argomento] = path.split('/');
  const m = MATERIE.find((x) => x.slug === materia);
  if (!m || !paginaLocalizzata(lingua, `/${materia}`)) return nellaLingua(lingua, '/');
  return nellaLingua(lingua, `/${materia}${m.argomenti.some((a) => a.slug === argomento) ? `#${argomento}` : ''}`);
}
