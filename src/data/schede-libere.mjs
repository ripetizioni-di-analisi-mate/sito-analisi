export const SCHEDE_LIBERE = 3;

export function schedeLibere(materia, argomento) {
  if (materia === 'scienza-delle-costruzioni') return argomento === 'statica-vincoli' ? 1 : 0;
  return SCHEDE_LIBERE;
}
