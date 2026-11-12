export const CATALOGO_PREDEFINITO = 'IT';
export const PARAMETRO_CATALOGO = 'catalogo';
export const CATALOGO_USA_PUBBLICO = false;

export const CATALOGHI_STUDIO = {
  IT: { percorso: '/', it: 'Italia', en: 'Italy', de: 'Italien', es: 'Italia', fr: 'Italie' },
  US: { percorso: '/us', it: 'Stati Uniti', en: 'United States', de: 'Vereinigte Staaten', es: 'Estados Unidos', fr: 'États-Unis' },
};

export function catalogoStudio(codice) {
  if (codice === 'US' && !CATALOGO_USA_PUBBLICO) return undefined;
  return Object.hasOwn(CATALOGHI_STUDIO, codice) ? CATALOGHI_STUDIO[codice] : undefined;
}

export function percorsoCatalogoUsa(percorso) {
  return /^\/us(?:\/|\.html$|$)/i.test(percorso);
}

export function catalogoDiIngresso(provenienza, preferenza) {
  return catalogoStudio(preferenza) || catalogoStudio(provenienza) || CATALOGHI_STUDIO[CATALOGO_PREDEFINITO];
}
