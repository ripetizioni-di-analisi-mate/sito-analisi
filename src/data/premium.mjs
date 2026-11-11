export const PASS_PREMIUM = {
  semestrale: { mesi: 6, centesimi: 18900, it: 'Premium Semestrale', en: 'Premium Six-Month Pass' },
  annuale: { mesi: 12, centesimi: 29900, it: 'Premium Annuale', en: 'Premium Annual Pass' },
};
export const PREZZO_PASSAGGIO_PREMIUM = PASS_PREMIUM.annuale.centesimi - PASS_PREMIUM.semestrale.centesimi;

export const acquistoPremium = (slug, pref = '') => `${pref}/acquisto?tipo=premium&slug=${slug}`;

export const CONDIZIONI_PREMIUM = {
  it: 'Premium è un acquisto a pagamento unico, senza rinnovo automatico. Il semestrale dà accesso per 6 mesi alle discipline scritte pubblicate alla conferma del pagamento, con i relativi aggiornamenti. L’annuale dà accesso per 12 mesi alle discipline scritte, inclusi gli aggiornamenti e le nuove pubblicazioni. I videocorsi sono esclusi. Con il semestrale attivo si può passare all’annuale pagando la differenza. La nuova scadenza è a 12 mesi dalla conferma del primo acquisto. Alla scadenza termina l’accesso tramite il pass e restano validi gli acquisti effettuati separatamente secondo le loro condizioni.',
  en: 'Premium is a one-time purchase with no automatic renewal. The six-month pass includes written subjects published when payment is confirmed, plus updates to those subjects. The annual pass includes written subjects, updates and new releases for 12 months. Video courses are excluded. While a six-month pass is active, you can upgrade by paying the difference. Your new expiry date is 12 months after your original payment was confirmed. When the pass expires, access through Premium ends and separate purchases continue under their own terms.',
};
