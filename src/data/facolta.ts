// Le facoltà raccolgono i corsi esistenti: slug, acquisti e contenuti restano unici.
export const FACOLTA = [
  {
    titolo: 'Ingegneria',
    titoloEn: 'Engineering',
    titoloDe: 'Ingenieurwissenschaften',
    titoloEs: 'Ingeniería',
    titoloFr: 'Ingénierie',
    materie: ['analisi-1', 'analisi-2', 'algebra-lineare', 'fisica-1', 'fisica-2', 'statica', 'scienza-delle-costruzioni', 'statistica', 'precorso'],
  },
  {
    titolo: 'Economia',
    titoloEn: 'Economics',
    titoloDe: 'Wirtschaftswissenschaften',
    titoloEs: 'Economía',
    titoloFr: 'Économie',
    materie: ['matematica-generale', 'matematica-finanziaria', 'algebra-lineare', 'statistica', 'precorso'],
  },
  {
    titolo: 'Matematica e Fisica',
    titoloEn: 'Mathematics and Physics',
    titoloDe: 'Mathematik und Physik',
    titoloEs: 'Matemáticas y Física',
    titoloFr: 'Mathématiques et physique',
    materie: ['analisi-1', 'analisi-2', 'analisi-3', 'algebra-lineare', 'fisica-1', 'fisica-2', 'statistica', 'precorso'],
  },
] as const;
