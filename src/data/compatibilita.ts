// «Compatibilità con il tuo esame» (pagina /compatibilita e riquadro nella pagina Sblocca).
// Lo studente carica il testo del suo esame universitario; il Worker (worker/compatibilita.mjs) riconosce
// le richieste, le abbina alle schede svolte e alla teoria della materia e calcola due percentuali.
// Vale solo per gli esami universitari: niente concorsi, test di ingresso e scuole superiori (scelta di Carmine).
import { MATERIE } from './materie';

// Materie per cui si può fare il confronto: area Università, attive, a pagamento; il Precorso non è un esame.
export const MATERIE_COMPATIBILITA = MATERIE
  .filter((m) => m.gruppo === 'Università' && m.attiva && m.prezzo && m.slug !== 'precorso')
  .map((m) => m.slug);

// Peso di ogni richiesta dell'esame nella percentuale di compatibilità.
export const PESI = {
  stesso: 1,      // c'è una scheda svolta con lo stesso procedimento (o, per la teoria, l'enunciato nella teoria del sito)
  argomento: 0.5, // l'argomento è nel programma del sito, ma senza una scheda dello stesso tipo
  nessuno: 0,     // l'argomento non è nel materiale del sito
} as const;

// Limiti al giorno. «leggi» = lettura di foto e PDF scansionati (la parte più costosa); «confronta» = confronto del testo.
export const LIMITI = {
  leggiOspite: 3, leggiAccount: 8, leggiSito: 300,
  confrontaOspite: 4, confrontaAccount: 12, confrontaSito: 400,
};
// Da questa compatibilità in su, a chi non ha la materia il risultato mostra «Acquisto consigliato» (richiesta di Carmine del 04/11).
export const SOGLIA_CONSIGLIATO = 80;
export const MAX_PAGINE = 4;             // foto o pagine di PDF per esame
export const MAX_CARATTERI_TESTO = 8000; // testo dell'esame da confrontare
// Il successo (domande a tempo indovinate negli argomenti dell'esame) compare da questo numero di risposte in su.
export const RISPOSTE_MINIME_SUCCESSO = 10;
