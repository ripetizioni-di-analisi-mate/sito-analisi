// Corsi di gruppo dal vivo (pagina /corsi-di-gruppo, worker/gruppi.mjs).
// Formato descritto da Carmine (ottobre-novembre 2026). Il prezzo per lezione non si mostra sul sito.
export const MATERIE_GRUPPI = [
  { slug: 'analisi-1', titolo: 'Analisi matematica 1', lezioni: 'circa 30 lezioni' },
  { slug: 'analisi-2', titolo: 'Analisi matematica 2', lezioni: 'circa 20 lezioni' },
  { slug: 'matematica-generale', titolo: 'Matematica generale', lezioni: '' },
];

// Tracce d'esame caricate dagli iscritti (conservate nel Durable Object, a pezzi da 1 MB).
export const FILE_GRUPPI = {
  maxFile: 10,                  // file per iscrizione
  maxByte: 8 * 1024 * 1024,     // per file (le foto si riducono nel browser prima dell'invio)
  tipi: ['application/pdf', 'image/jpeg', 'image/png', 'image/webp'],
};
