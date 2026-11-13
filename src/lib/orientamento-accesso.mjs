// Confine condiviso tra la protezione del Worker e la verifica della build.
// Comprende anche le eventuali mappe del bundle, senza bloccare i moduli
// orientamento-comune e KaTeX usati dalle pagine pubbliche.
export function risorsaTestOrientamento(percorso) {
  return typeof percorso === 'string'
    && percorso.startsWith('/risorse/TestOrientamento.astro_astro_type_script_index_0_lang.');
}
