// Lezioni individuali prenotabili dal sito (pagina /prenota, worker/prenotazioni.mjs).
// Regole decise da Carmine il 02/11/2026.
import { MATERIE } from './materie';

export const LEZIONI = {
  prezzo: 40,                 // euro per lezione
  durata: 60,                 // minuti
  giorni: [1, 2, 3, 4, 5, 6], // lunedì … sabato (0 = domenica)
  ore: [10, 11, 12, 15, 16],  // inizio delle lezioni (ora italiana); 8-10, 13-15 e dalle 17 sono già occupate
  preavvisoOre: 24,           // si prenota almeno 24 ore prima
  rimborsoOre: 24,            // spostamento o disdetta con rimborso fino a 24 ore prima dell'inizio (16 fino al 02/11)
  avvisoMinuti: 2,            // email con il link di Google Meet e promemoria nel calendario, 2 minuti prima
  settimane: 4,               // quante settimane in avanti si vedono
  attesaPagamentoMin: 30,     // l'orario resta bloccato mentre si paga (Stripe chiede almeno 30 minuti)
  fusoOrario: 'Europe/Rome',
};

// Materie escluse dalle lezioni individuali (scelta di Carmine).
export const ESCLUSE_DALLE_LEZIONI = ['chimica-semestre-filtro', 'fisica-1', 'fisica-2', 'fisica-superiori-3', 'fisica-superiori-4', 'fisica-superiori-5', 'fisica-zero', 'statistica', 'logica-concorsi'];

// Tutte le materie pubblicate sul sito, tranne quelle escluse.
export const MATERIE_LEZIONI = MATERIE
  .filter((m) => m.attiva && !ESCLUSE_DALLE_LEZIONI.includes(m.slug))
  .map((m) => ({ slug: m.slug, titolo: m.titolo }));
