export const LINGUE_CATALOGO = /** @type {const} */ (['de', 'es']);
export const LINGUE_TRADOTTE = /** @type {const} */ (['en', ...LINGUE_CATALOGO]);
export const CODICI_LINGUA = /** @type {const} */ (['it', ...LINGUE_TRADOTTE]);

const PREFISSO = new RegExp(`^/(${LINGUE_TRADOTTE.join('|')})(?=/|$)`);
export const prefissoLingua = (path) => path.match(PREFISSO)?.[0] ?? '';
