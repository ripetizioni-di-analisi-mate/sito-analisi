import { MATERIE } from '../data/materie';
import { MATERIE_DE } from '../data/materie-de';

export type Lingua = 'it' | 'en' | 'de';

export const LINGUE: { codice: Lingua; nome: string }[] = [
  { codice: 'it', nome: 'Italiano' },
  { codice: 'en', nome: 'English' },
  { codice: 'de', nome: 'Deutsch' },
];

export const LOCALE = { it: 'it_IT', en: 'en_US', de: 'de_DE' };
export const senzaLingua = (path: string) => path.replace(/\/(?:index\.html)$/, '/').replace(/\.html$/, '').replace(/^\/(en|de)(?=\/|$)/, '').replace(/\/$/, '') || '/';
export const nellaLingua = (lingua: Lingua, path: string) => lingua === 'it' ? path : `/${lingua}${path === '/' ? '' : path}`;

const lezioniDe = ['/fisica-zero/lavoro-ed-energia/teoria'];
const pagineDe = new Set([
  ...lezioniDe.filter((path) => MATERIE.some((m) => m.attiva && m.slug === path.split('/')[1])),
  '/', '/cerca', '/chi-sono', '/contatti', '/prezzi', '/accedi', '/account', '/reimposta-password',
  ...MATERIE.filter((m) => m.attiva && Object.hasOwn(MATERIE_DE, m.slug)).map((m) => `/${m.slug}`),
]);

export const inTedesco = (path: string) => pagineDe.has(path);

// Una pagina priva di traduzione porta all'argomento o al corso corrispondente nel catalogo.
export function destinazioneTedesca(path: string) {
  if (inTedesco(path)) return nellaLingua('de', path);
  const [, materia, argomento] = path.split('/');
  const m = MATERIE.find((x) => x.slug === materia);
  if (!m || !inTedesco(`/${materia}`)) return '/de';
  return `/de/${materia}${m.argomenti.some((a) => a.slug === argomento) ? `#${argomento}` : ''}`;
}
