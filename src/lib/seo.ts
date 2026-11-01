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
  sameAs: [INSTAGRAM],
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
export function sitoWeb(lingua: 'it' | 'en') {
  return {
    '@type': 'WebSite',
    '@id': `${SITO}/#sito`,
    name: 'Ripetizioni di Analisi',
    alternateName: 'ripetizionidianalisi.com',
    url: `${SITO}/`,
    inLanguage: ['it', 'en'],
    publisher: { '@id': `${SITO}/#organizzazione` },
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITO}${lingua === 'en' ? '/en' : ''}/cerca?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  };
}

// La pagina corrente, con la sua lingua (le versioni nell'altra lingua sono già indicate con hreflang).
export function paginaWeb(url: string, titolo: string, descrizione: string, lingua: 'it' | 'en') {
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
