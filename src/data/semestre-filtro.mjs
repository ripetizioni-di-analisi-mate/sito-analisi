// Programmi di riferimento dei corsi del semestre filtro, condivisi dalle pagine di studio.
export const GRUPPO_SEMESTRE_FILTRO = 'Semestre filtro';
export const PROGRAMMI_SEMESTRE_FILTRO = {
  'fisica-semestre-filtro': {
    nome: 'Fisica', nomeEn: 'Physics',
    url: 'https://www.mur.gov.it/sites/default/files/2026-06/Syllabus_FISICA_%20finale%202026.pdf',
  },
};
export const corsoSemestreFiltro = (slug) => Object.hasOwn(PROGRAMMI_SEMESTRE_FILTRO, slug);

