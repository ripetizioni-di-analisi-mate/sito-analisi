// Barra in basso «Crea un account gratuito: 10% di sconto sulla prima materia» (richiesta di Carmine del 05/11/2026,
// sul modello di lezione-online.it, senza newsletter: solo registrazione e sconto).
//  - compare appena si entra nel sito, solo a chi non ha fatto l'accesso;
//  - chi crea l'account dalla barra ha il 10% sul primo acquisto di una materia (videocorsi e lezioni esclusi),
//    applicato da solo al pagamento; nessuna email, nessun codice da copiare;
//  - chiusa con la ×, la barra non ricompare per GIORNI_RIPROPOSTA giorni.
export const SCONTO_BENVENUTO = 10;
export const GIORNI_RIPROPOSTA = 14;
// Secondi tra l'apertura della pagina e la comparsa della barra («appena entri»).
export const RITARDO_SECONDI = 1.5;
// Pagine dove la barra non compare: accesso, pagamento, pagine riservate, prove in corso.
export const PAGINE_SENZA_BARRA = /^\/(?:en\/)?(?:accedi|account|admin|reimposta-password|promemoria|prenota|invito)(?:\/|$)|\/sblocca\/?$|\/simulazione\/?$|\/domande\/?$/;
