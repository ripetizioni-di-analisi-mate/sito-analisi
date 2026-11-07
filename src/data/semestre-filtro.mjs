// Programmi di riferimento dei corsi del semestre filtro, condivisi dalle pagine di studio.
export const GRUPPO_SEMESTRE_FILTRO = 'Semestre filtro';
export const PROGRAMMI_SEMESTRE_FILTRO = {
  'biologia-semestre-filtro': {
    nome: 'Biologia', nomeEn: 'Biology',
    url: 'https://www.mur.gov.it/sites/default/files/2026-06/Syllabus_BIOLOGIA_%20finale%202026.pdf',
  },
  'fisica-semestre-filtro': {
    nome: 'Fisica', nomeEn: 'Physics',
    url: 'https://www.mur.gov.it/sites/default/files/2026-06/Syllabus_FISICA_%20finale%202026.pdf',
  },
  'chimica-semestre-filtro': {
    nome: 'Chimica e propedeutica biochimica', nomeEn: 'Chemistry and introductory biochemistry',
    url: 'https://www.mur.gov.it/sites/default/files/2026-06/Syllabus%20Chim.Prop_.Bioch_.%20-%20finale-%202026.pdf',
  },
};
export const corsoSemestreFiltro = (slug) => Object.hasOwn(PROGRAMMI_SEMESTRE_FILTRO, slug);

// Un insieme fisso evita che cambiare capitolo o aprire una nuova sessione
// permetta di leggere oltre i dieci quesiti dimostrativi prima dell'acquisto.
export function anteprimaBiologia(argomenti) {
  const quote = { 'organizzazione-biologica': 2, 'genoma-cromatina': 2, 'flusso-informazione': 2, 'genetica-mutazioni': 1, 'strutture-cellulari': 1, 'segnalazione-cellulare': 1, 'ciclo-cellulare': 1 };
  return Object.fromEntries(Object.entries(quote).map(([slug, n]) => [slug, (argomenti?.[slug] || []).slice(0, n)]));
}
