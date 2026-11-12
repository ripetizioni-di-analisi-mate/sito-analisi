// Misurazione delle conversioni per Google Ads e Google Analytics (campagna di novembre 2026, scelta di Carmine).
// Codici attivi dall'11/11/2026: azioni «Acquisto sul sito ripetizionidianalisi.com» e «Account gratuito creato sul sito» (account Google Ads 154-496-3295).
// Finché i codici sono vuoti il sito non carica nessuno script di Google e non mostra il banner dei cookie.
// I codici arrivano dall'account Google Ads (Strumenti → Conversioni → Tag) e da Google Analytics (Amministrazione → Stream di dati).

// Codice di Google Ads, per esempio 'AW-123456789'.
export const GOOGLE_ADS_ID = 'AW-17353712275';
// Codice di Google Analytics 4, per esempio 'G-ABCDE12345' (facoltativo).
export const GA4_ID = '';
// Etichette delle conversioni create in Google Ads (la parte dopo la barra in «AW-123456789/AbCdEfGh»).
export const CONVERSIONI = {
  acquisto: 'Q6WTCPfr07YdEJPF8tJA',   // materia, pacchetto o videocorso pagato sul sito (valore = importo reale)
  lezione: 'Q6WTCPfr07YdEJPF8tJA',    // stessa azione «Acquisto» (11/11/2026); lezione individuale pagata con Stripe (40 €)
  gruppo: '',     // iscrizione a un corso di gruppo (75 €, primo blocco di 5 lezioni)
  account: 'H_5cCOrt07YdEJPF8tJA',    // account gratuito creato (1 €, conversione secondaria)
};
// Valori usati per le conversioni senza importo nel pagamento.
export const VALORI = { gruppo: 75, account: 1 };

export const MISURAZIONE_ATTIVA = Boolean(GOOGLE_ADS_ID || GA4_ID);
