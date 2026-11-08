// Le facoltà raccolgono i corsi esistenti: slug, acquisti e contenuti restano unici.
export const FACOLTA = [
  {
    titolo: 'Ingegneria',
    titoloEn: 'Engineering',
    materie: ['analisi-1', 'analisi-2', 'analisi-3', 'algebra-lineare', 'fisica-1', 'fisica-2', 'statistica', 'precorso'],
  },
  {
    titolo: 'Economia',
    titoloEn: 'Economics',
    materie: ['matematica-generale', 'matematica-finanziaria', 'algebra-lineare', 'statistica', 'precorso'],
  },
  {
    titolo: 'Matematica e Fisica',
    titoloEn: 'Mathematics and Physics',
    materie: ['analisi-1', 'analisi-2', 'analisi-3', 'algebra-lineare', 'fisica-1', 'fisica-2', 'statistica', 'precorso'],
  },
] as const;

// Voci dirette per argomenti già compresi in un corso: contenuti e accesso restano quelli di origine.
export const ARGOMENTI_FACOLTA: Record<string, {
  materia: string; argomento: string; titolo: string; titoloEn: string;
  descrizione: string; descrizioneEn: string;
}> = {
  'matematica-finanziaria': {
    materia: 'matematica-generale',
    argomento: 'matematica-finanziaria',
    titolo: 'Matematica finanziaria',
    titoloEn: 'Financial mathematics',
    descrizione: 'Capitalizzazione semplice, composta e continua, tassi equivalenti, rendite, ammortamenti, VAN e TIR. Teoria ed esercizi del corso di Matematica generale.',
    descrizioneEn: 'Simple, compound and continuous interest, equivalent rates, annuities, amortization, NPV and IRR. Theory and exercises from Mathematics for Economics.',
  },
};
