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
  stesso: 1,      // il procedimento è spiegato nelle schede o nella teoria; per una prova teorica serve il contenuto richiesto
  argomento: 0.9, // il corso tratta l'argomento, ma manca un passaggio o la dimostrazione richiesta
  nessuno: 0,     // l'argomento non è nel materiale del sito
} as const;

// Limiti al giorno. «leggi» = lettura di foto e PDF scansionati (la parte più costosa); «confronta» = confronto del testo.
export const LIMITI = {
  leggiOspite: 6, leggiAccount: 12, leggiSito: 300,
  confrontaOspite: 8, confrontaAccount: 16, confrontaSito: 400,
};
// Fino a questa soglia si propone un nuovo controllo. Sopra si può consigliare l'acquisto.
export const SOGLIA_CONSIGLIATO = 80;
export const MAX_PAGINE = 6;              // foto o pagine di PDF per documento
export const MAX_CARATTERI_TESTO = 16000;  // testo del documento da confrontare
// Il successo (domande a tempo indovinate negli argomenti dell'esame) compare da questo numero di risposte in su.
export const RISPOSTE_MINIME_SUCCESSO = 10;
