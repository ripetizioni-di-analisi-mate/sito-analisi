import { datiIntestatario, preparaIndirizzo } from '../lib/campi-fattura';

const pagina = document.querySelector<HTMLElement>('[data-acquisto-digitale]')!;
const en = pagina.dataset.lingua === 'en';
const pref = en ? '/en' : '';
const nomi: Record<string,string> = JSON.parse(pagina.dataset.materie || '{}');
const form = document.querySelector<HTMLFormElement>('#modulo-digitale')!;
const stato = document.getElementById('stato-acquisto')!;
const errore = document.getElementById('errore-acquisto')!;
const azione = document.querySelector<HTMLAnchorElement>('#azione-acquisto')!;
const paga = document.querySelector<HTMLButtonElement>('#paga-digitale')!;
const annullaPendente = document.querySelector<HTMLButtonElement>('#annulla-pendente')!;
const params = new URLSearchParams(location.search);
const tipo = params.get('tipo');
const slug = params.get('slug') || '';
const materie = (params.get('materie') || '').split(',').filter(Boolean);
const selezione = tipo === 'materie' ? { tipo, materie }
  : tipo === 'video' ? { tipo, pacchetto: params.get('pacchetto') }
  : { tipo, slug };
const aggiornaIndirizzo = preparaIndirizzo(form.querySelector<HTMLElement>('[data-campi-fattura]')!);
const formatta = (centesimi: number) => (centesimi / 100).toLocaleString(en ? 'en-IE' : 'it-IT', {style: 'currency', currency: 'EUR'});
const messaggioRete = en ? 'Could not connect. Please try again.' : 'Connessione non disponibile. Riprova.';
let totaleAtteso: number;
let occupato = false;

for (const a of document.querySelectorAll<HTMLAnchorElement>('a[href="/acquisto"],a[href="/en/acquisto"]')) {
  a.search = location.search;
}

function mostraAzione(testo: string, href: string) {
  azione.textContent = testo;
  azione.href = href;
  azione.hidden = false;
}

function accesso() {
  form.hidden = true;
  stato.textContent = en ? 'Sign in to the account for this purchase.' : 'Accedi all’account con cui vuoi acquistare o hai acquistato il materiale.';
  mostraAzione(en ? 'Sign in' : 'Accedi', pref + '/accedi?' + new URLSearchParams({ dopo: location.pathname + location.search }));
}

async function richiedi(rotta: string, dati?: Record<string,unknown>) {
  const r = await fetch('/api/acquisti/' + rotta, dati ? {
    method: 'POST', cache: 'no-store', headers: { 'content-type': 'application/json' }, body: JSON.stringify(dati),
  } : { cache: 'no-store' });
  const d = await r.json();
  if (r.status === 401) { accesso(); return null; }
  if (r.status === 409 && typeof d.pendente === 'string') {
    annullaPendente.dataset.ordine = d.pendente;
    annullaPendente.hidden = false;
  }
  if (!r.ok) throw new Error(d.errore || (en ? 'This order is unavailable. Check your selection and try again.' : 'Questo acquisto non è disponibile. Controlla la selezione e riprova.'));
  return d;
}

async function preventivo() {
  const d = await richiedi('preventivo', { ...selezione, lingua: en ? 'en' : 'it' });
  if (!d) return;
  if (!Number.isSafeInteger(d.totale) || d.totale <= 0) throw new Error(en ? 'The price is unavailable.' : 'Il prezzo non è disponibile.');
  totaleAtteso = d.totale;
  const titolo = tipo === 'materia' && nomi[slug] ? nomi[slug] : d.titolo;
  document.getElementById('titolo-prodotto')!.textContent = titolo;
  const elenco = document.getElementById('voci-prodotto')!;
  if (tipo === 'materie') {
    elenco.textContent = materie.map((s) => nomi[s] || s).join(' · ');
    elenco.hidden = false;
  }
  const sconto = document.getElementById('sconto-digitale')!;
  sconto.hidden = !(d.percentuale > 0);
  if (!sconto.hidden) sconto.textContent = en ? `${d.percentuale}% discount included` : `Sconto del ${d.percentuale}% incluso`;
  const importo = formatta(totaleAtteso);
  document.getElementById('totale-digitale')!.textContent = importo;
  paga.textContent = (en ? 'Continue to Stripe · ' : 'Continua su Stripe · ') + importo;
  paga.disabled = false;
  form.hidden = false;
}

async function esito(sessione: string, tentativo = 0): Promise<void> {
  const d = await richiedi('stato?session_id=' + encodeURIComponent(sessione));
  if (!d) return;
  document.getElementById('ordini-digitali')!.hidden = false;
  if (d.stato === 'pagato') {
    stato.textContent = en ? 'Payment confirmed. Your purchase is now available in your account.' : 'Pagamento confermato. Il materiale acquistato è disponibile nel tuo account.';
    const destinazione = new URL(d.destinazione || pref + '/account', location.origin);
    mostraAzione(en ? 'Open your purchase' : 'Apri il materiale', destinazione.origin === location.origin ? destinazione.href : pref + '/account');
    try {
      const chiave = 'misurato-' + sessione;
      const misura = (window as any).misura;
      if (misura && !sessionStorage.getItem(chiave)) {
        misura('acquisto', { valore: d.totale / 100, valuta: 'EUR', id: sessione, voce: d.titolo });
        sessionStorage.setItem(chiave, '1');
      }
    } catch { /* la conferma funziona anche con le statistiche disattivate */ }
    return;
  }
  if (d.stato === 'scaduto') {
    stato.textContent = en ? 'This payment session has expired. Return to the catalogue to start again.' : 'La sessione di pagamento è scaduta. Puoi ripartire dal catalogo.';
    mostraAzione(en ? 'Browse subjects' : 'Vai alle materie', pref + '/prezzi');
    return;
  }
  if (tentativo >= 15) {
    stato.textContent = en ? 'Your payment is still being verified. You can check again here in a moment.' : 'La verifica del pagamento è ancora in corso. Tra poco puoi controllare nuovamente lo stato da qui.';
    mostraAzione(en ? 'Check payment status' : 'Controlla lo stato del pagamento', location.href);
    return;
  }
  stato.textContent = en ? 'Checking your payment and activating your purchase…' : 'Verifica del pagamento e attivazione del materiale in corso…';
  await new Promise((ok) => setTimeout(ok, 2000));
  return esito(sessione, tentativo + 1);
}

async function apri() {
  const sessione = params.get('session_id');
  if (sessione) return esito(sessione);
  const annullato = params.get('annullato');
  if (annullato) {
    const d = await richiedi('annulla', { id: annullato });
    if (!d) return;
    if (d.stato === 'pagato') {
      stato.textContent = en ? 'Payment already confirmed. Your purchase is available in your account.' : 'Il pagamento risulta già confermato. Il materiale è disponibile nel tuo account.';
      mostraAzione(en ? 'Go to your account' : 'Vai al tuo account', pref + '/account');
      document.getElementById('ordini-digitali')!.hidden = false;
      return;
    }
    if (d.stato !== 'scaduto') throw new Error(en ? 'Check the status of your previous payment before trying again.' : 'Verifica lo stato del pagamento precedente prima di riprovare.');
    params.delete('annullato');
    history.replaceState(null, '', location.pathname + '?' + params);
    stato.textContent = en ? 'The previous checkout was cancelled. You can review the order below.' : 'Il pagamento precedente è stato annullato. Qui puoi ricontrollare l’ordine.';
  } else stato.textContent = '';
  if (!['materia','videocorso','materie','video'].includes(tipo || '')) {
    stato.textContent = en ? 'Choose a subject or course to start your order.' : 'Scegli una materia o un videocorso per iniziare l’acquisto.';
    mostraAzione(en ? 'Browse subjects' : 'Vai alle materie', pref + '/prezzi');
    return;
  }
  await preventivo();
}

annullaPendente.addEventListener('click', async () => {
  annullaPendente.disabled = true;
  paga.disabled = true;
  try {
    const d = await richiedi('annulla', { id: annullaPendente.dataset.ordine });
    if (!d) return;
    annullaPendente.hidden = true;
    if (d.stato === 'pagato') {
      form.hidden = true;
      stato.textContent = en ? 'Your previous payment was confirmed.' : 'Il pagamento precedente è già stato confermato.';
      mostraAzione(en ? 'Go to your account' : 'Vai al tuo account', pref + '/account');
      return;
    }
    errore.textContent = '';
    await preventivo();
    stato.textContent = en ? 'The previous checkout was cancelled. You can now use the billing details below.' : 'Il pagamento precedente è stato annullato. Puoi proseguire con i dati di fatturazione qui sotto.';
  } catch (err) { errore.textContent = err instanceof TypeError ? messaggioRete : (err as Error).message; }
  finally { annullaPendente.disabled = false; }
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (occupato || paga.disabled) return;
  aggiornaIndirizzo();
  if (!form.reportValidity()) return;
  const f = new FormData(form);
  occupato = true;
  paga.disabled = true;
  errore.textContent = '';
  try {
    const d = await richiedi('checkout', { ...selezione, lingua: en ? 'en' : 'it', totaleAtteso,
      fatturazione: datiIntestatario(f), versioneCondizioni: f.get('versioneCondizioni'), condizioni: f.has('condizioni'), immediato: f.has('immediato') });
    if (!d) return;
    const url = new URL(d.url);
    if (url.origin !== 'https://checkout.stripe.com') throw new Error(en ? 'Payment link unavailable.' : 'Link al pagamento non disponibile.');
    location.assign(url.href);
  } catch (err) {
    errore.textContent = err instanceof TypeError ? messaggioRete : (err as Error).message;
    try { await preventivo(); } catch { form.hidden = true; stato.textContent = errore.textContent; }
    occupato = false;
  }
});
apri().catch((err) => {
  stato.textContent = err instanceof TypeError ? messaggioRete : err.message;
  mostraAzione(en ? 'Back to your account' : 'Vai al tuo account', pref + '/account');
});
