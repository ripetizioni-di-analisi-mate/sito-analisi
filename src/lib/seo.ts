import { LINGUE_PUBBLICHE } from '../data/codici-lingua.mjs';
import { nellaLingua, type Lingua } from './lingue-sito';

// Dati per i motori di ricerca: indirizzo del sito, organizzazione, briciole di pane.
export const SITO = 'https://ripetizionidianalisi.com';
export const INSTAGRAM = 'https://www.instagram.com/ripetizioni_di_analisi_mate/';

// Indirizzo assoluto e pulito (senza .html né /index) di un percorso del sito.
export function assoluto(percorso: string): string {
  const p = (percorso.replace(/\.html$/, '').replace(/\/index$/, '') || '/');
  return SITO + (p === '/' ? '/' : p.replace(/\/$/, ''));
}

// Autore di tutti i contenuti: lo stesso @id della pagina Chi sono, così i motori collegano le pagine alla persona.
export const AUTORE = {
  '@type': 'Person',
  '@id': `${SITO}/#carmine`,
  name: 'Carmine Tornincasa',
  url: `${SITO}/chi-sono`,
  jobTitle: 'Insegnante privato di Analisi matematica',
  description: 'Laurea in Ingegneria civile e master in matematica; ha seguito oltre mille studenti in più di diecimila ore di lezione.',
  knowsAbout: ['Analisi matematica 1', 'Analisi matematica 2', 'Algebra lineare e geometria analitica', 'Fisica', 'Matematica generale', 'Calculus', 'Linear algebra', 'Physics'],
  knowsLanguage: ['it', 'en'],
  image: `${SITO}/chi-sono/carmine.webp`,
  // stessi profili della pagina Chi sono: aiutano i motori a riconoscere che è la stessa persona
  sameAs: [INSTAGRAM, 'https://www.threads.com/@ripetizioni_di_analisi_mate', 'https://ripetizioni-di-analisi-matematica.it/'],
};

export const ORGANIZZAZIONE = {
  '@type': 'EducationalOrganization',
  '@id': `${SITO}/#organizzazione`,
  name: 'Ripetizioni di Analisi',
  alternateName: ['ripetizionidianalisi.com', 'Ripetizioni di Analisi Matematica'],
  url: `${SITO}/`,
  logo: `${SITO}/logo-512.png`,
  founder: AUTORE,
  sameAs: [INSTAGRAM],
};

export function briciole(voci: { nome: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: voci.map((v, i) => ({ '@type': 'ListItem', position: i + 1, name: v.nome, item: v.url })),
  };
}

// Il sito nel suo insieme, con le due lingue in cui è scritto: aiuta i motori a mostrare il nome giusto.
export function sitoWeb(lingua: Lingua) {
  return {
    '@type': 'WebSite',
    '@id': `${SITO}/#sito`,
    name: 'Ripetizioni di Analisi',
    alternateName: 'ripetizionidianalisi.com',
    url: `${SITO}/`,
    inLanguage: LINGUE_PUBBLICHE,
    publisher: { '@id': `${SITO}/#organizzazione` },
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITO}${nellaLingua(lingua, '/cerca')}?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  };
}

// La pagina corrente, con la sua lingua (le versioni nell'altra lingua sono già indicate con hreflang).
export function paginaWeb(url: string, titolo: string, descrizione: string, lingua: Lingua) {
  return {
    '@type': 'WebPage',
    '@id': `${url}#pagina`,
    url,
    name: titolo,
    description: descrizione,
    inLanguage: lingua,
    isPartOf: { '@id': `${SITO}/#sito` },
  };
}

// Contenuti a pagamento: la parte riservata è racchiusa dal Worker in un blocco .contenuto-riservato quando la pagina
// è letta da Googlebot o Bingbot verificati (worker/motori.mjs). Con questi dati Google sa che è contenuto
// in abbonamento e non lo scambia per una pagina che mostra ai motori una cosa diversa dalle persone.
export function accesso(libero: boolean) {
  return libero
    ? { isAccessibleForFree: true }
    : { isAccessibleForFree: false, hasPart: { '@type': 'WebPageElement', isAccessibleForFree: false, cssSelector: '.contenuto-riservato' } };
}
