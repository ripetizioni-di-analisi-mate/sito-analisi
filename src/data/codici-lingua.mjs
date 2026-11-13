export const LINGUE_CATALOGO = /** @type {const} */ (['de', 'es', 'fr']);
export const LINGUE_TRADOTTE = /** @type {const} */ (['en', ...LINGUE_CATALOGO]);
export const CODICI_LINGUA = /** @type {const} */ (['it', ...LINGUE_TRADOTTE]);
export const LINGUE_TRADOTTE_PUBBLICHE = false;

const PREFISSO = new RegExp(`^/(${LINGUE_TRADOTTE.join('|')})(?=/|\\.html$|$)`);
export const prefissoLingua = (path) => path.match(PREFISSO)?.[0] ?? '';
