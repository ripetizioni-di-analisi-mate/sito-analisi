// Le facoltà raccolgono i corsi esistenti: slug, acquisti e contenuti restano unici.
export const FACOLTA = [
  {
    titolo: 'Ingegneria',
    titoloEn: 'Engineering',
    titoloDe: 'Ingenieurwissenschaften',
    titoloEs: 'Ingeniería',
    titoloFr: 'Ingénierie',
    materie: ['analisi-1', 'analisi-2', 'algebra-lineare', 'informatica', 'fisica-1', 'fisica-2', 'statica', 'meccanica-razionale', 'scienza-delle-costruzioni', 'idraulica', 'statistica', 'precorso'],
    // Solo nell'indice laterale l'elenco è diviso in due parti (richiesta di Carmine del 18/11/2026: elenchi più corti; la home resta un elenco unico).
    parti: [
      { titolo: 'Materie di base', titoloEn: 'Core subjects', titoloDe: 'Grundlagenfächer', titoloEs: 'Asignaturas básicas', titoloFr: 'Matières fondamentales', materie: ['analisi-1', 'analisi-2', 'algebra-lineare', 'fisica-1', 'fisica-2', 'informatica', 'statistica', 'precorso'] },
      { titolo: 'Materie di indirizzo', titoloEn: 'Specialist subjects', titoloDe: 'Vertiefungsfächer', titoloEs: 'Asignaturas de especialidad', titoloFr: 'Matières de spécialité', materie: ['statica', 'meccanica-razionale', 'scienza-delle-costruzioni', 'idraulica'] },
    ],
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
