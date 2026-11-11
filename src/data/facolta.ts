// Le facoltà raccolgono i corsi esistenti: slug, acquisti e contenuti restano unici.
export const FACOLTA = [
  {
    titolo: 'Ingegneria',
    titoloEn: 'Engineering',
    materie: ['analisi-1', 'analisi-2', 'analisi-3', 'algebra-lineare', 'fisica-1', 'fisica-2', 'statica', 'statistica', 'precorso'],
  },
  {
    titolo: 'Economia',
    titoloEn: 'Economics',
    materie: ['matematica-generale', 'algebra-lineare', 'statistica', 'precorso'],
  },
  {
    titolo: 'Matematica e Fisica',
    titoloEn: 'Mathematics and Physics',
    materie: ['analisi-1', 'analisi-2', 'analisi-3', 'algebra-lineare', 'fisica-1', 'fisica-2', 'statistica', 'precorso'],
  },
] as const;
