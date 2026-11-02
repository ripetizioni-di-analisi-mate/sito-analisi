// Corsi suggeriti nella pagina di acquisto di ogni materia ("Puoi aggiungere anche…").
// Il corso aggiunto costa il 10% in meno: in Paddle ha un secondo prezzo, PADDLE_PREZZO_<MATERIA>_ABBINATO,
// usato solo quando si compra insieme a un'altra materia (o subito dopo, dalla pagina di conferma).
// Se il prezzo abbinato di una materia non è impostato, quella materia non viene suggerita.
export const SCONTO_ABBINATO = 10; // percentuale sul corso aggiunto

export const ABBINAMENTI: Record<string, string[]> = {
  precorso: ['analisi-1', 'algebra-lineare'],
  'analisi-1': ['analisi-2', 'fisica-1'],
  'analisi-2': ['fisica-2', 'algebra-lineare'],
  'algebra-lineare': ['analisi-1', 'analisi-2'],
  'fisica-1': ['analisi-1', 'fisica-2'],
  'fisica-2': ['analisi-2', 'fisica-1'],
  'matematica-generale': ['precorso'],
  'matematica-superiori-5': ['precorso', 'analisi-1'],
  'matematica-concorsi': ['logica-concorsi'],
  'logica-concorsi': ['matematica-concorsi'],
};

// Prezzo del corso aggiunto, arrotondato al centesimo.
export const prezzoAbbinato = (prezzo: number) => Math.round(prezzo * (100 - SCONTO_ABBINATO)) / 100;

// Nome della variabile Paddle di una materia: analisi-1 -> PADDLE_PREZZO_ANALISI_1 (stessa regola delle variabili esistenti).
export const variabilePrezzo = (slug: string, abbinato = false) =>
  `PADDLE_PREZZO_${slug.toUpperCase().replace(/-/g, '_')}${abbinato ? '_ABBINATO' : ''}`;
