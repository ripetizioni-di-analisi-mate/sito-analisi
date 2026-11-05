// Newsletter (richiesta di Carmine del 05/11/2026, sul modello di lezione-online.it):
//  - barra in basso che compare appena si entra nel sito, solo a chi non ha fatto l'accesso;
//  - chi si iscrive riceve subito un codice di sconto personale del 10% (un solo uso, solo le materie del sito)
//    e poi le novità del sito e le aperture dei corsi di gruppo;
//  - chiusa con la ×, la barra non ricompare per GIORNI_RIPROPOSTA giorni; dopo l'iscrizione non ricompare più.
export const SCONTO_NEWSLETTER = 10;
export const GIORNI_RIPROPOSTA = 14;
// Secondi tra l'apertura della pagina e la comparsa della barra («appena entri»).
export const RITARDO_SECONDI = 1.5;
// Pagine dove la barra non compare: accesso, pagamento, pagine riservate, prove in corso.
export const PAGINE_SENZA_BARRA = /^\/(?:en\/)?(?:accedi|account|admin|reimposta-password|promemoria|newsletter|prenota|invito)(?:\/|$)|\/sblocca\/?$|\/simulazione\/?$|\/domande\/?$/;
