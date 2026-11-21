// Barra in basso «Crea un account gratuito: 10% di sconto sulla prima materia» (richiesta di Carmine del 05/11/2026,
// sul modello di lezione-online.it, senza newsletter: solo registrazione e sconto).
//  - compare dopo 30 secondi di navigazione visibile, una volta per sessione, solo a chi non ha fatto l'accesso;
//  - dal 21/11/2026 (richiesta di Carmine) lo sconto vale per OGNI account, non solo per quelli creati dalla barra:
//    10% sul primo acquisto, se è una materia comprata da sola (videocorsi e lezioni esclusi), applicato da
//    solo al pagamento, con la riga «Sconto iscrizione» nel riepilogo; nessuna email, nessun codice da copiare;
//  - NON si somma allo sconto dei pacchetti (15/20/25%): chi compra due o più materie insieme ha solo lo sconto
//    del pacchetto, anche al primo acquisto. Dal secondo acquisto una materia da sola è a prezzo pieno;
//  - chiusa con la ×, la barra non ricompare per GIORNI_RIPROPOSTA giorni.
export const SCONTO_BENVENUTO = 10;
export const GIORNI_RIPROPOSTA = 14;
// Secondi di navigazione prima dell'invito, mantenuti anche cambiando pagina nella stessa scheda.
export const RITARDO_SECONDI = 30;
// Pagine dove la barra non compare: accesso, pagamento, pagine riservate, prove in corso.
export const PAGINE_SENZA_BARRA = /^\/(?:en\/)?(?:accedi|account|admin|reimposta-password|promemoria|prenota|invito|pacchetti|orientamento)(?:\/|$)|\/sblocca\/?$|\/simulazione\/?$|\/domande\/?$/;
