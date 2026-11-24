// Contenuti gratuiti con un account (24/11/2026, scelta di Carmine «porta socchiusa»: un assaggio libero,
// poi l'invito a creare un account gratuito; Google e Bing verificati leggono tutto, come per le materie a pagamento).
// - Materie gratuite con account: per gli ospiti valgono le stesse anteprime delle materie a pagamento
//   (primi due paragrafi della teoria, prime schede svolte, tracce senza soluzione), con l'invito
//   all'iscrizione al posto dell'acquisto (scripts/vetrine.mjs, worker/index.mjs).
// - Formulari: gli ospiti leggono le prime sezioni; il resto e la pagina di stampa con un account.
export const MATERIE_CON_ACCOUNT = ['matematica-da-zero', 'fisica-zero'];
export const SEZIONI_FORMULARIO_LIBERE = 2;
export const conAccount = (materia) => MATERIE_CON_ACCOUNT.includes(materia);
