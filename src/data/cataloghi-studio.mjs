export const CATALOGO_PREDEFINITO = 'IT';
export const PARAMETRO_CATALOGO = 'catalogo';

export const CATALOGHI_STUDIO = {
  IT: { percorso: '/', it: 'Italia', en: 'Italy', de: 'Italien', es: 'Italia', fr: 'Italie' },
  US: { percorso: '/us', it: 'Stati Uniti', en: 'United States', de: 'Vereinigte Staaten', es: 'Estados Unidos', fr: 'États-Unis' },
};

export function catalogoStudio(codice) {
  return Object.hasOwn(CATALOGHI_STUDIO, codice) ? CATALOGHI_STUDIO[codice] : undefined;
}

export function catalogoDiIngresso(provenienza, preferenza) {
  return catalogoStudio(preferenza) || catalogoStudio(provenienza) || CATALOGHI_STUDIO[CATALOGO_PREDEFINITO];
}
