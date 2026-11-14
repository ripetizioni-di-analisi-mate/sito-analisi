// Interfaccia condivisa. I risultati dell'account vengono sempre richiesti alla sessione corrente.
import { DURATA_BOZZA_ORIENTAMENTO } from '../lib/orientamento-privacy.mjs';

const CHIAVE_BOZZA = /^orientamento:v1:(?:ospite|[0-9a-f]{64}):(?:studio|universita)$/;
const MAX_BOZZA = 24000;

export function elemento(tag, testo, classe) {
  const el = document.createElement(tag);
  if (testo !== undefined && testo !== null) el.textContent = String(testo);
  if (classe) el.className = classe;
  return el;
}

export function collegamento(testo, href, classe) {
  const a = elemento('a', testo, classe);
  if (typeof href === 'string' && /^\/(?!\/)/.test(href)) a.href = href;
  else if (typeof href === 'string' && /^https:\/\//.test(href)) {
    a.href = href; a.target = '_blank'; a.rel = 'noopener noreferrer';
  }
  return a;
}

export function bottone(testo, azione, classe = 'bottone-secondario') {
  const b = elemento('button', testo, classe); b.type = 'button'; b.addEventListener('click', azione); return b;
}

export async function apiOrientamento(path = '/api/orientamento', opzioni = {}) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);
  try {
    const response = await fetch(path, { credentials: 'same-origin', cache: 'no-store', ...opzioni, signal: controller.signal });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw Object.assign(new Error(data.errore || 'Il servizio non è disponibile. Riprova tra poco.'), { status: response.status, codice: data.codice });
    return data;
  } catch (error) {
    if (error.name === 'AbortError' || error instanceof TypeError) throw new Error('La connessione non è disponibile. Riprova tra poco.');
    throw error;
  } finally { clearTimeout(timeout); }
}

export async function identitaOrientamento() {
  try { const io = await apiOrientamento('/api/io'); return io?.email ? io : null; }
  catch (error) { if (error.status === 401) return null; throw error; }
}

// Anteprima riservata: il ruolo arriva sempre dalla sessione reale, mai da bozze o URL.
export async function verificaGmOrientamento(accountAtteso = '') {
  const io = await identitaOrientamento();
  if (!io || typeof io.email !== 'string' || !io.email.trim()) throw Object.assign(new Error('Accedi con l’account GM per aprire l’orientamento.'), { status: 401, codice: 'accesso' });
  if (io.gm !== true) throw Object.assign(new Error('Questa anteprima dell’orientamento è riservata al GM.'), { status: 403, codice: 'riservato-gm' });
  if (accountAtteso && await improntaAccount(io) !== accountAtteso) throw accountCambiato();
  return io;
}

export async function improntaAccount(io) {
  if (!io?.email) return '';
  const raw = new TextEncoder().encode(io.email.trim().toLowerCase());
  const hash = await crypto.subtle.digest('SHA-256', raw);
  return Array.from(new Uint8Array(hash)).map((n) => n.toString(16).padStart(2, '0')).join('');
}

export async function chiaveBozza(tipo, io) {
  pulisciBozzeScadute();
  return `orientamento:v1:${io?.email ? await improntaAccount(io) : 'ospite'}:${tipo}`;
}

function interpretaBozza(raw) {
  if (!raw || raw.length > MAX_BOZZA) return null;
  try {
    const valore = JSON.parse(raw);
    const ora = Date.now();
    if (!valore || typeof valore !== 'object' || Array.isArray(valore)
      || !Number.isFinite(valore.salvata) || valore.salvata > ora + 60000
      || ora - valore.salvata >= DURATA_BOZZA_ORIENTAMENTO) return null;
    return valore;
  } catch { return null; }
}

export function leggiBozza(chiave) {
  if (!CHIAVE_BOZZA.test(chiave)) return null;
  try {
    const raw = localStorage.getItem(chiave);
    if (!raw) return null;
    const valore = interpretaBozza(raw);
    if (!valore) rimuoviBozza(chiave);
    return valore;
  } catch { return null; }
}

export function scriviBozza(chiave, valore) {
  if (!CHIAVE_BOZZA.test(chiave)) return false;
  try {
    const raw = JSON.stringify({ ...valore, salvata: Date.now() });
    if (raw.length > MAX_BOZZA) return false;
    localStorage.setItem(chiave, raw);
    return localStorage.getItem(chiave) === raw;
  } catch { return false; }
}

export function rimuoviBozza(chiave) {
  if (!CHIAVE_BOZZA.test(chiave)) return false;
  try { localStorage.removeItem(chiave); return localStorage.getItem(chiave) === null; }
  catch { return false; }
}

// Si esegue quando una pagina dell'orientamento torna attiva, non a browser chiuso.
// L'esito permette anche a un comando visibile di segnalare un archivio bloccato.
export function pulisciBozzeScadute() {
  const esito = { eliminate: 0, disponibile: true };
  try {
    const chiavi = [];
    for (let i = 0; i < localStorage.length; i++) {
      const chiave = localStorage.key(i);
      if (CHIAVE_BOZZA.test(chiave)) chiavi.push(chiave);
    }
    for (const chiave of chiavi) {
      const raw = localStorage.getItem(chiave);
      if (raw !== null && !interpretaBozza(raw)) {
        if (rimuoviBozza(chiave)) esito.eliminate++;
        else esito.disponibile = false;
      }
    }
  } catch { esito.disponibile = false; }
  return esito;
}

function corrispondeAlRisultato(bozza, risultato) {
  if (!bozza || bozza.finito !== true || bozza.tipo !== risultato.tipo || bozza.versione !== risultato.versione) return false;
  if (risultato.tipo === 'studio'
    ? bozza.materia !== risultato.materia || bozza.obiettivo !== risultato.obiettivo
    : (bozza.areaScelta || '') !== (risultato.areaScelta || '')) return false;
  const a = bozza.risposte, b = risultato.risposte;
  if (!a || !b || typeof a !== 'object' || typeof b !== 'object' || Array.isArray(a) || Array.isArray(b)) return false;
  return Object.keys(a).length === Object.keys(b).length
    && Object.keys(a).every((id) => Object.hasOwn(b, id) && a[id] === b[id]);
}

function accountCambiato() {
  return Object.assign(new Error('L’account è cambiato in un’altra scheda. Aggiorna l’elenco prima di continuare.'), { status: 409, codice: 'account-cambiato' });
}

// Cancella il record dell'account e soltanto la sua copia locale riconoscibile.
// Una nuova prova, anche della stessa materia, e i dati di altri account restano.
export async function eliminaRisultatoOrientamento(risultato, accountAtteso) {
  const idAtteso = risultato?.tipo === 'studio' ? `studio:${risultato.materia}` : risultato?.tipo === 'universita' ? 'universita' : null;
  if (!idAtteso || risultato.id !== idAtteso || !/^[0-9a-f]{64}$/.test(accountAtteso || ''))
    throw new Error('Aggiorna l’elenco prima di eliminare un risultato.');
  await verificaGmOrientamento(accountAtteso);
  const chiave = `orientamento:v1:${accountAtteso}:${risultato.tipo}`;
  let raw, locale = 'assente';
  try {
    raw = localStorage.getItem(chiave);
    if (raw !== null) locale = corrispondeAlRisultato(interpretaBozza(raw), risultato) ? 'corrispondente' : 'diversa';
  } catch { locale = 'non-disponibile'; }
  const risposta = await apiOrientamento('/api/orientamento', {
    method: 'DELETE', headers: { 'content-type': 'application/json', 'X-Orientamento-Account': accountAtteso },
    body: JSON.stringify({ id: risultato.id }),
  });
  if (locale === 'corrispondente') {
    try {
      // Non confondere il successo sul server con la cancellazione sul browser.
      await verificaGmOrientamento(accountAtteso);
      if (localStorage.getItem(chiave) !== raw) locale = 'aggiornata';
      else locale = rimuoviBozza(chiave) ? 'rimossa' : 'non-disponibile';
    } catch (error) { locale = error.codice === 'account-cambiato' ? 'account-cambiato' : [401, 403].includes(error.status) ? 'accesso-revocato' : 'non-disponibile'; }
  }
  return { ...risposta, bozzaLocale: locale };
}

export function linkRisultato(record) {
  const base = record.tipo === 'studio' ? '/orientamento/studio' : '/orientamento/universita';
  return `${base}?risultato=${encodeURIComponent(record.id)}`;
}

const TESTI_SALVATI = {
  it: {
    caricamento: 'Caricamento dei risultati…',
    privati: 'I risultati sono visibili soltanto nel tuo account.',
    vuoto: 'I risultati che scegli di salvare al termine di un test compariranno qui.',
    titolo: 'Orientamento allo studio', scade: 'Scade il', aggiornato: 'Test aggiornato',
    elimina: 'Elimina', conferma: 'Conferma eliminazione', annulla: 'Annulla', riprova: 'Riprova',
    rimossa: 'Risultato eliminato dall’account. La copia salvata su questo browser è stata rimossa.',
    revocato: 'Risultato eliminato dall’account. L’accesso GM non è più disponibile; la copia locale è stata conservata.',
    cambiatoDopo: 'Risultato eliminato dall’account. L’account è poi cambiato: la cancellazione della copia sul browser non è stata eseguita. Aggiorna l’elenco.',
    localeNonDisponibile: 'Risultato eliminato dall’account. Non è stato possibile verificare la cancellazione della copia sul browser; puoi gestirla dalla pagina del test o dalle impostazioni del browser.',
    localeAggiornata: 'Risultato eliminato dall’account. La copia locale è cambiata durante l’operazione e non è stata rimossa.',
    localeDiversa: 'Risultato eliminato dall’account. La bozza di un’altra prova su questo browser è rimasta disponibile.',
    eliminato: 'Risultato eliminato dall’account.', nessunRisultato: 'Non ci sono risultati salvati nell’account.',
    accountCambiato: 'L’account è cambiato in un’altra scheda. Aggiorna l’elenco prima di continuare.',
    accediAvviso: 'Accedi con l’account GM per aprire l’orientamento.', accedi: 'Accedi',
    servizio: 'Il servizio non è disponibile. Riprova tra poco.',
  },
  en: {
    caricamento: 'Loading your results…',
    privati: 'Your results are visible only in your account.',
    vuoto: 'Results you choose to save after a test will appear here.',
    titolo: 'Study guidance', scade: 'Expires on', aggiornato: 'Test updated',
    elimina: 'Delete', conferma: 'Confirm deletion', annulla: 'Cancel', riprova: 'Try again',
    rimossa: 'The result has been deleted from your account. The copy saved in this browser has been removed.',
    revocato: 'The result has been deleted from your account. GM access is no longer available; the local copy has been kept.',
    cambiatoDopo: 'The result has been deleted from your account. The account then changed, so the browser copy was not deleted. Refresh the list.',
    localeNonDisponibile: 'The result has been deleted from your account. We could not verify whether the browser copy was removed; you can manage it from the test page or your browser settings.',
    localeAggiornata: 'The result has been deleted from your account. The local copy changed during the operation and has not been removed.',
    localeDiversa: 'The result has been deleted from your account. The draft of another test in this browser is still available.',
    eliminato: 'The result has been deleted from your account.', nessunRisultato: 'There are no results saved in your account.',
    accountCambiato: 'The account changed in another tab. Refresh the list before continuing.',
    accediAvviso: 'Sign in with your GM account to open study guidance.', accedi: 'Sign in',
    servizio: 'The service is not available right now. Please try again shortly.',
  },
};

// Si traduce soltanto la presentazione del box: codici, status e verifiche
// delle funzioni condivise restano gli stessi anche sulle pagine italiane.
function erroreRisultatiSalvati(error, en) {
  const s = TESTI_SALVATI[en ? 'en' : 'it'];
  if (error.codice === 'account-cambiato') return s.accountCambiato;
  if (!en) return error.message || s.servizio;
  const perCodice = {
    accesso: s.accediAvviso,
    'riservato-gm': 'This study guidance preview is restricted to GM accounts.',
    'account-non-valido': 'Reload the page to verify your account before continuing.',
    origine: 'Reopen the test on this website and try again.',
    formato: 'The request format is not valid. Reload the page and try again.',
    richiesta: 'Choose the result to delete.',
    dimensione: 'The data sent is too large. Reload the page and try again.',
    indisponibile: 'Your results are not available right now. Please try again shortly.',
  };
  if (Object.hasOwn(perCodice, error.codice)) return perCodice[error.codice];
  if (error.status === 401) return s.accediAvviso;
  if (error.status === 403) return 'Access is not available for this account.';
  if (error.status === 405) return 'This request method is not allowed. Reload the page and try again.';
  if (error.message === 'La connessione non è disponibile. Riprova tra poco.')
    return 'The connection is not available. Please try again shortly.';
  if (error.message === 'Aggiorna l’elenco prima di eliminare un risultato.')
    return 'Refresh the list before deleting a result.';
  return s.servizio;
}

export function avviaRisultatiSalvati(contesto = document, lingua = document.documentElement.lang) {
  for (const box of contesto.querySelectorAll('[data-orientamento-salvati]')) {
    if (box.dataset.oriAvviato) continue;
    box.dataset.oriAvviato = '1';
    const en = (box.dataset.oriLingua || lingua) === 'en';
    const s = TESTI_SALVATI[en ? 'en' : 'it'];
    const locale = en ? 'en-GB' : 'it-IT';
    box.lang = en ? 'en' : 'it';
    let titoliMaterie = {};
    try {
      const titoli = JSON.parse(box.dataset.oriTitoliMaterie || '{}');
      if (titoli && typeof titoli === 'object' && !Array.isArray(titoli)) titoliMaterie = titoli;
    } catch { /* Un dizionario assente o non valido usa il titolo di riserva. */ }
    const stato = box.querySelector('[data-ori-salvati-stato]');
    const lista = box.querySelector('[data-ori-salvati-lista]');
    const riprova = box.querySelector('[data-ori-salvati-riprova]');
    riprova.textContent = s.riprova;
    let caricamento = 0;
    async function carica() {
      const corrente = ++caricamento;
      riprova.hidden = true;
      stato.textContent = s.caricamento;
      lista.replaceChildren();
      try {
        const io = await verificaGmOrientamento();
        const accountAtteso = await improntaAccount(io);
        const data = await apiOrientamento('/api/orientamento', { headers: { 'X-Orientamento-Account': accountAtteso } });
        await verificaGmOrientamento(accountAtteso);
        if (corrente !== caricamento) return;
        pulisciBozzeScadute();
        // «Quale corso scegliere?» è sospeso: si mostrano solo i risultati di «Da dove comincio?».
        const record = Array.isArray(data.risultati) ? data.risultati.filter((r) => r.tipo === 'studio') : [];
        stato.textContent = record.length ? s.privati : s.vuoto;
        for (const r of record) {
          const li = elemento('li', null, 'ori-salvato');
          const a = collegamento('', linkRisultato(r));
          a.hreflang = 'it';
          const titoloTradotto = Object.hasOwn(titoliMaterie, r.materia) && typeof titoliMaterie[r.materia] === 'string'
            ? titoliMaterie[r.materia].trim() : '';
          const titolo = titoloTradotto || (!en && r.esito?.titolo) || s.titolo;
          a.append(elemento('strong', titolo));
          const dataSalvataggio = new Date(r.aggiornato);
          const dataScadenza = r.scade ? new Date(r.scade) : null;
          const formato = { day: 'numeric', month: 'long', year: 'numeric' };
          const scadenza = dataScadenza && !Number.isNaN(dataScadenza.getTime()) ? ` · ${s.scade} ${dataScadenza.toLocaleDateString(locale, formato)}` : '';
          a.append(elemento('small', `${Number.isNaN(dataSalvataggio.getTime()) ? '' : dataSalvataggio.toLocaleDateString(locale, formato)}${scadenza}${r.daAggiornare ? ` · ${s.aggiornato}` : ''}`));
          let confermato = false;
          const elimina = bottone(s.elimina, async () => {
            if (!confermato) { confermato = true; elimina.textContent = s.conferma; annulla.hidden = false; return; }
            elimina.disabled = true;
            try {
              const cancellazione = await eliminaRisultatoOrientamento(r, accountAtteso);
              if (corrente !== caricamento) return;
              li.remove();
              if (cancellazione.bozzaLocale === 'rimossa') stato.textContent = s.rimossa;
              else if (cancellazione.bozzaLocale === 'accesso-revocato') {
                lista.replaceChildren(); riprova.hidden = false;
                stato.textContent = s.revocato;
              }
              else if (['non-disponibile', 'account-cambiato'].includes(cancellazione.bozzaLocale)) {
                lista.replaceChildren();
                stato.textContent = cancellazione.bozzaLocale === 'account-cambiato' ? s.cambiatoDopo : s.localeNonDisponibile;
                riprova.hidden = false;
              } else if (cancellazione.bozzaLocale === 'aggiornata') stato.textContent = s.localeAggiornata;
              else if (cancellazione.bozzaLocale === 'diversa') stato.textContent = s.localeDiversa;
              else stato.textContent = lista.children.length ? s.eliminato : s.nessunRisultato;
            } catch (error) {
              if (corrente !== caricamento) return;
              lista.replaceChildren();
              stato.textContent = erroreRisultatiSalvati(error, en);
              elimina.disabled = false; riprova.hidden = false;
            }
          }, 'ori-testo-bottone');
          const annulla = bottone(s.annulla, () => { confermato = false; elimina.textContent = s.elimina; annulla.hidden = true; }, 'ori-testo-bottone');
          annulla.hidden = true;
          const azioni = elemento('div', null, 'ori-azioni'); azioni.append(elimina, annulla);
          li.append(a, azioni); lista.append(li);
        }
      } catch (error) {
        if (corrente !== caricamento) return;
        lista.replaceChildren();
        if (error.status === 401) {
          const prefisso = en ? '/en' : '';
          stato.replaceChildren(document.createTextNode(s.accediAvviso + ' '), collegamento(s.accedi, `${prefisso}/accedi?dopo=${encodeURIComponent(prefisso + '/orientamento')}`));
        } else { stato.textContent = erroreRisultatiSalvati(error, en); riprova.hidden = false; }
      }
    }
    riprova.addEventListener('click', carica);
    window.addEventListener('focus', carica);
    document.addEventListener('visibilitychange', () => { if (!document.hidden) carica(); });
    carica();
  }
}
