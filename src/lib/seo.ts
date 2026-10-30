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
  description: 'Laurea in Ingegneria civile e master in matematica; insegna Analisi matematica a studenti universitari da oltre 10 anni.',
  knowsAbout: ['Analisi matematica 1', 'Analisi matematica 2', 'Algebra lineare e geometria analitica', 'Fisica', 'Matematica generale'],
  sameAs: [INSTAGRAM],
};

export const ORGANIZZAZIONE = {
  '@type': 'EducationalOrganization',
  '@id': `${SITO}/#organizzazione`,
  name: 'Ripetizioni di Analisi',
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
