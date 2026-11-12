// Lezioni individuali prenotabili dal sito (pagina /prenota, worker/prenotazioni.mjs).
// Regole decise da Carmine il 02/11/2026.
import { MATERIE } from './materie';

export const LEZIONI = {
  prezzo: 40,                 // euro per lezione
  durata: 60,                 // minuti
  giorni: [1, 2, 3, 4, 5, 6], // lunedì … sabato (0 = domenica)
  ore: [10, 11, 12, 14, 15, 16, 17, 18], // fasce 10–13 e 14–19, in ora italiana
  limitiPrimiGiorni: [1, 1, 2, 2, 3],   // da oggi, contando i giorni di calendario
  limiteSuccessivi: 6,
  preavvisoMinuti: 45,        // lascia il tempo per completare il pagamento anche in giornata
  preavvisoSpostamentoOre: 24,
  rimborsoOre: 24,            // spostamento o disdetta con rimborso fino a 24 ore prima dell'inizio (16 fino al 02/11)
  avvisoMinuti: 2,            // email con il link di Google Meet e promemoria nel calendario, 2 minuti prima
  settimane: 4,               // quante settimane in avanti si vedono
  attesaPagamentoMin: 30,     // l'orario resta bloccato mentre si paga (Stripe chiede almeno 30 minuti)
  fusoOrario: 'Europe/Rome',
};

// Solo le materie di matematica offerte per le lezioni individuali.
const GRUPPI_LEZIONI = [
  { titolo: 'Università', slug: ['precorso', 'analisi-1', 'analisi-2', 'algebra-lineare', 'matematica-generale'] },
  { titolo: 'Scuole superiori', slug: ['matematica-superiori-2', 'matematica-superiori-3', 'matematica-superiori-4', 'matematica-superiori-5'] },
  { titolo: 'Basi e concorsi', slug: ['matematica-concorsi', 'matematica-da-zero', 'matematica-semestre-filtro'] },
];

export const GRUPPI_MATERIE_LEZIONI = GRUPPI_LEZIONI.map((gruppo) => ({
  titolo: gruppo.titolo,
  materie: MATERIE
    .filter((m) => m.attiva && gruppo.slug.includes(m.slug))
    .map((m) => ({ slug: m.slug, titolo: m.titolo })),
})).filter((gruppo) => gruppo.materie.length > 0);

export const MATERIE_LEZIONI = GRUPPI_MATERIE_LEZIONI.flatMap((gruppo) => gruppo.materie);
