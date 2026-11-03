// Sfide tra studenti (richiesta di Carmine del 03/11/2026): leghe settimanali, duelli, percentile nelle simulazioni.
// Le regole stanno solo qui: le leggono le pagine (/lega, /duelli) e il Worker (worker/sfide.mjs).

// ---------- leghe settimanali ----------
// Dieci leghe, dalla prima all'ultima. Ogni settimana (da lunedì a domenica, ora italiana) chi guadagna i primi EXP
// entra in un gruppo di al massimo LEGA_GRUPPO studenti della sua lega. Conta solo l'EXP guadagnato nella settimana.
// Alla chiusura i primi salgono di una lega e gli ultimi scendono (quote in quoteLega).
export const LEGHE = ['Pitagora', 'Euclide', 'Archimede', 'Fibonacci', 'Cartesio', 'Newton', 'Leibniz', 'Eulero', 'Gauss', 'Riemann'];
export const LEGHE_EN = ['Pythagoras', 'Euclid', 'Archimedes', 'Fibonacci', 'Descartes', 'Newton', 'Leibniz', 'Euler', 'Gauss', 'Riemann'];
export const LEGA_GRUPPO = 30;
// Quanti salgono e quanti scendono in un gruppo di n studenti: salgono i primi n/5 (almeno 1, al massimo 5);
// scendono gli ultimi n/5 (al massimo 5) solo nei gruppi di almeno 10. Nella prima lega non si scende, nell'ultima non si sale.
export function quoteLega(n: number, lega: number) {
  const sale = lega < LEGHE.length - 1 && n > 0 ? Math.min(5, Math.max(1, Math.floor(n / 5))) : 0;
  const scende = lega > 0 && n >= 10 ? Math.min(5, Math.floor(n / 5)) : 0;
  return { sale, scende: Math.min(scende, Math.max(0, n - sale)) };
}

// ---------- duelli ----------
// Due studenti rispondono alle stesse domande a tempo di una materia. Vince chi dà più risposte corrette;
// a parità di risposte corrette vince chi ha impiegato meno tempo in tutto.
export const DUELLO = {
  domande: 10,            // domande per duello
  secondi: 120,           // tempo per ogni domanda (come le domande a tempo)
  oreLink: 48,            // un duello con il link resta aperto 48 ore
  minutiInvito: 10,       // un invito a uno studente online scade dopo 10 minuti
  minutiPartita: 40,      // un duello accettato o abbinato si chiude dopo 40 minuti
  vittoria: 20,           // EXP in più a chi vince
  pareggio: 10,           // EXP in più a entrambi in caso di parità
  premiAlGiorno: 3,       // duelli al giorno che danno il premio di vittoria o di parità
  secondiOnline: 25,      // nella pagina dei duelli da meno di 25 secondi: «pronto a sfidare»
  minutiStudio: 3,        // studio attivo negli ultimi 3 minuti: «sta studiando»
  secondiRicerca: 20,     // chi cerca un avversario resta in coda finché la pagina lo conferma (ogni 4 secondi)
};

// ---------- percentile nelle simulazioni ----------
// A fine simulazione: la quota di simulazioni con punteggio più basso, tra quelle svolte da altri con le stesse
// materie (simulazione a quiz) o della stessa materia (simulazione d'esame). Compare da PERCENTILE_MINIMO simulazioni.
export const PERCENTILE_MINIMO = 10;
