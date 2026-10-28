// Dati per i motori di ricerca: indirizzo del sito, organizzazione, briciole di pane.
export const SITO = 'https://ripetizionidianalisi.com';
export const INSTAGRAM = 'https://www.instagram.com/ripetizioni_di_analisi_mate/';

// Indirizzo assoluto e pulito (senza .html né /index) di un percorso del sito.
export function assoluto(percorso: string): string {
  const p = (percorso.replace(/\.html$/, '').replace(/\/index$/, '') || '/');
  return SITO + (p === '/' ? '/' : p.replace(/\/$/, ''));
}

export const ORGANIZZAZIONE = {
  '@type': 'EducationalOrganization',
  '@id': `${SITO}/#organizzazione`,
  name: 'Ripetizioni di Analisi',
  url: `${SITO}/`,
  logo: `${SITO}/logo-512.png`,
  founder: { '@type': 'Person', name: 'Carmine Tornincasa' },
  sameAs: [INSTAGRAM],
};

export function briciole(voci: { nome: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: voci.map((v, i) => ({ '@type': 'ListItem', position: i + 1, name: v.nome, item: v.url })),
  };
}
