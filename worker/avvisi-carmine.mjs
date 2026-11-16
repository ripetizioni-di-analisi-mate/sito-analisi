// Avvisi per Carmine: un'email nella sua casella Gmail a ogni pagamento ricevuto sul sito
// (materie, pacchetti, videocorsi, lezioni individuali). Destinatario nel segreto EMAIL_AVVISI, inserito da Carmine
// nel pannello Cloudflare (Worker sito-analisi → Settings → Variables and Secrets); senza il segreto gli avvisi
// restano spenti. Un avviso non riuscito non blocca mai l'acquisto dello studente.
import { componiEmail, inviaEmailResend, SITO_EMAIL } from './email.mjs';

// Più indirizzi nello stesso segreto, separati da virgola o punto e virgola (al massimo 5)
export const destinatariAvvisi = (env) =>
  String(env.EMAIL_AVVISI || '')
    .split(/[,;\s]+/)
    .map((s) => s.trim())
    .filter((s) => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(s))
    .slice(0, 5);

export const euro = (n) => new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(n);

export const dataItaliana = (t) =>
  new Date(t).toLocaleString('it-IT', { timeZone: 'Europe/Rome', dateStyle: 'full', timeStyle: 'short' });

// chiave: identificativo del pagamento, così un webhook ripetuto non manda due avvisi (Idempotency-Key di Resend)
export async function avvisaCarmine(env, { chiave, oggetto, titolo, righe, prodotto, importo, link }) {
  const indirizzi = destinatariAvvisi(env);
  if (!indirizzi.length) return false;
  try {
    const messaggio = componiEmail({
      subject: oggetto,
      titolo,
      anteprima: righe[0],
      categoria: 'Avviso per Carmine',
      righe,
      scheda: { etichetta: prodotto, valore: euro(importo) },
      pulsante: link,
      firma: 'ripetizionidianalisi.com',
    });
    let tutti = true;
    for (const [i, a] of indirizzi.entries()) {
      const esito = await inviaEmailResend(env, a, messaggio, 'avviso-carmine-' + chiave + (i ? '-' + i : ''));
      tutti = tutti && esito.ok;
    }
    return tutti;
  } catch (e) {
    console.log('avviso carmine', String(e?.message || e));
    return false;
  }
}

export const linkDashboard = (percorso = '/admin') => ['Apri la dashboard', SITO_EMAIL + percorso];
