export const LINGUE_CATALOGO = /** @type {const} */ (['de', 'es', 'fr']);
export const LINGUE_TRADOTTE = /** @type {const} */ (['en', ...LINGUE_CATALOGO]);
export const CODICI_LINGUA = /** @type {const} */ (['it', ...LINGUE_TRADOTTE]);
export const LINGUE_PUBBLICHE = /** @type {const} */ (['it', 'en']);
export const linguaPubblica = (lingua) => LINGUE_PUBBLICHE.includes(lingua);

const PREFISSO = new RegExp(`^/(${LINGUE_TRADOTTE.join('|')})(?=/|\\.html$|$)`);
export const prefissoLingua = (path) => path.match(PREFISSO)?.[0] ?? '';
export function prefissoLinguaSospesa(path) {
  const prefisso = prefissoLingua(path);
  return prefisso && !linguaPubblica(prefisso.slice(1)) ? prefisso : '';
}
