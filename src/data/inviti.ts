// «Invita un amico» (richiesta di Carmine del 02/11/2026): 15% a entrambi, solo sulle materie del sito.
//  - chi è invitato ha il 15% sul primo acquisto di una materia;
//  - chi invita riceve uno sconto del 15% sul prossimo acquisto di una materia quando l'amico compra,
//    uno per ogni amico che compra; lo sconto si applica da solo al pagamento.
// Videocorsi e lezioni sono esclusi.
export const SCONTO_INVITO = 15;
// Il link d'invito resta valido nel browser dell'amico per questi giorni (cookie «invito»).
export const GIORNI_COOKIE_INVITO = 30;
// Il codice di sconto dell'amico si rigenera da solo se non lo usa entro questi giorni (scadenza tecnica su Paddle).
export const GIORNI_SCONTO_AMICO = 30;
// Codici d'invito: 7 caratteri senza lettere e cifre che si confondono (0/O, 1/I/L).
export const ALFABETO_INVITO = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
export const FORMATO_INVITO = /^[ABCDEFGHJKMNPQRSTUVWXYZ23456789]{7}$/;
