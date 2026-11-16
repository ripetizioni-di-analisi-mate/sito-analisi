import { AREE_BOCCONI, BOCCONI, PROVE_BOCCONI } from '../data/bocconi.mjs';

type Lingua = 'it' | 'en';
type Area = keyof typeof AREE_BOCCONI;
type Domanda = { id: string; area: Area; capitolo: string; ancora: string; testo: string; scelte: string[] };
type Avvio = { token: string; scadenza: number | null; domande: Domanda[] };
type Sezione = { area: Area; corrette: number; errate: number; omesse: number; massimo: number; punti: number };
type Esito = { massimo: number; punti: number; sezioni: Sezione[]; esiti: { corretta: number; spiegazione: string }[] };
type Stato = Avvio & { prova: string; pagina: number; risposte: (number | null)[]; consegnata: boolean; esito?: Esito };

const radice = document.querySelector<HTMLElement>('[data-bocconi]')!;
const lingua: Lingua = radice.dataset.lingua === 'en' ? 'en' : 'it';
const corso = (lingua === 'en' ? '/en/' : '/') + BOCCONI.slug;
const chiave = 'bocconi-prova-v1-' + lingua;
const traduci = (it: string, en: string) => lingua === 'en' ? en : it;
const elemento = <T extends HTMLElement = HTMLElement>(nome: string) => document.getElementById('boc-' + nome) as T;
const introduzione = elemento('inizio');
const provaInCorso = elemento('prova');
const risultato = elemento('risultato');
const avanti = elemento<HTMLButtonElement>('avanti');
const consegna = elemento<HTMLButtonElement>('consegna');
const conferma = elemento<HTMLDialogElement>('conferma');
const messaggi = elemento('avviso');
const nuova = elemento<HTMLButtonElement>('nuova');
const riprova = elemento<HTMLButtonElement>('riprova');
const diagnostico = elemento<HTMLButtonElement>('diagnostico');
const form = elemento<HTMLFormElement>('form');
const avviaSimulazione = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
const formato = new Intl.NumberFormat(lingua === 'en' ? 'en-GB' : 'it-IT', { maximumFractionDigits: 2 });
const nomiCapitoli = JSON.parse(radice.dataset.capitoli ?? '{}') as Record<string, string>;

let stato: Stato | null = null;
let intervallo = 0;
let richiestaInCorso = false;

function avvisa(testo: string) {
  messaggi.textContent = testo;
  messaggi.hidden = !testo;
}

function salva() {
  try {
    if (stato) sessionStorage.setItem(chiave, JSON.stringify(stato));
    else sessionStorage.removeItem(chiave);
  } catch {
    // La prova funziona anche quando il browser disattiva il salvataggio di sessione.
  }
}

async function richiedi<T>(azione: string, dati: Record<string, unknown>): Promise<T> {
  const risposta = await fetch('/api/bocconi/' + azione, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ ...dati, lingua }),
  }).catch(() => { throw new Error(traduci('Connessione interrotta. Riprova.', 'Connection interrupted. Please try again.')); });
  const esito = await risposta.json().catch(() => null);
  if (!risposta.ok || !esito) {
    throw new Error(esito?.errore || traduci('La prova non si è caricata. Riprova.', 'The test did not load. Please try again.'));
  }
  return esito;
}

function nodo<K extends keyof HTMLElementTagNameMap>(tag: K, testo: string) {
  const el = document.createElement(tag);
  el.textContent = testo;
  return el;
}

function testoReso(html: string, classe = 'boc-domanda-testo') {
  const el = document.createElement('div');
  el.className = classe;
  el.innerHTML = html;
  return el;
}

function aggiornaConto() {
  if (!stato) return;
  const date = stato.risposte.filter((r) => r !== null).length;
  elemento('conto').textContent = traduci(
    'Risposte date ' + date + ' su ' + stato.domande.length,
    date + ' of ' + stato.domande.length + ' answered',
  );
}

function controllaTempo() {
  if (!stato || stato.consegnata) return false;
  if (stato.scadenza === null) return true;
  const secondi = Math.max(0, Math.ceil((stato.scadenza - Date.now()) / 1000));
  const orologio = elemento('orologio');
  orologio.textContent = Math.floor(secondi / 60) + ':' + String(secondi % 60).padStart(2, '0');
  orologio.classList.toggle('boc-in-scadenza', secondi < 60);
  if (secondi === 0) void correggi();
  return secondi > 0;
}

function mostraQuesito(q: Domanda, indice: number, scelta: number | null) {
  const scheda = nodo('article', '');
  scheda.className = 'boc-quesito';
  const titolo = nodo('h3', traduci('Quesito ', 'Question ') + (indice + 1));
  const opzioni = nodo('fieldset', '');
  opzioni.append(nodo('legend', traduci('Seleziona una risposta', 'Choose one answer')));
  const togli = nodo('button', traduci('Togli risposta', 'Clear answer'));
  togli.type = 'button';
  togli.className = 'bottone-secondario';
  togli.disabled = scelta === null;
  for (const [i, risposta] of q.scelte.entries()) {
    const etichetta = nodo('label', '');
    etichetta.className = 'boc-scelta';
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'boc-scelta-' + indice;
    input.value = String(i);
    input.checked = scelta === i;
    input.addEventListener('change', () => {
      if (!stato || !controllaTempo()) return;
      stato.risposte[indice] = i;
      togli.disabled = false;
      salva();
      aggiornaConto();
    });
    const lettera = nodo('span', String.fromCharCode(65 + i) + '. ');
    lettera.setAttribute('aria-hidden', 'true');
    etichetta.append(input, lettera, testoReso(risposta, 'boc-risposta-testo'));
    opzioni.append(etichetta);
  }
  togli.addEventListener('click', () => {
    if (!stato || !controllaTempo()) return;
    stato.risposte[indice] = null;
    opzioni.querySelectorAll<HTMLInputElement>('input').forEach((input) => { input.checked = false; });
    opzioni.querySelector('input')?.focus();
    togli.disabled = true;
    salva();
    aggiornaConto();
  });
  scheda.append(titolo, testoReso(q.testo), opzioni, togli);
  return scheda;
}

function mostraPagina() {
  if (!stato || !controllaTempo()) return;
  introduzione.hidden = true;
  provaInCorso.hidden = false;
  risultato.hidden = true;
  nuova.hidden = true;
  elemento('tempo').hidden = stato.scadenza === null;
  const partenza = stato.pagina * BOCCONI.perPagina;
  const limite = Math.min(partenza + BOCCONI.perPagina, stato.domande.length);
  const ultimaPagina = limite === stato.domande.length;
  elemento('pagina').textContent = traduci('Pagina ', 'Page ') + (stato.pagina + 1) + ' / ' + Math.ceil(stato.domande.length / BOCCONI.perPagina);
  elemento('domande').replaceChildren(...stato.domande.slice(partenza, limite).map((q, i) =>
    mostraQuesito(q, partenza + i, stato!.risposte[partenza + i])));
  avanti.hidden = ultimaPagina;
  consegna.className = ultimaPagina ? 'bottone-primario' : 'bottone-secondario';
  aggiornaConto();
  elemento('pagina').focus();
}

async function inizia(codice: string) {
  if (richiestaInCorso) return;
  richiestaInCorso = true;
  diagnostico.disabled = true;
  avviaSimulazione.disabled = true;
  avvisa(traduci('Caricamento dei quesiti…', 'Loading questions…'));
  try {
    const dati = await richiedi<Avvio>('inizia', { prova: codice });
    stato = { ...dati, prova: codice, pagina: 0, risposte: dati.domande.map(() => null), consegnata: false };
    salva();
    avvisa('');
    mostraPagina();
    if (dati.scadenza !== null && !stato.consegnata) intervallo = window.setInterval(controllaTempo, 1000);
  } catch (errore) {
    avvisa(errore instanceof Error ? errore.message : traduci('Connessione da riprovare.', 'Please check your connection and retry.'));
  } finally {
    diagnostico.disabled = false;
    avviaSimulazione.disabled = false;
    richiestaInCorso = false;
    if (stato?.consegnata && !stato.esito) void correggi();
  }
}

function linkTeoria(q: Domanda, titolo?: string) {
  const a = nodo('a', titolo ?? traduci('Ripassa la lezione', 'Review the lesson'));
  a.href = corso + '/' + q.capitolo + '/teoria/' + q.ancora;
  return a;
}

function mostraRisultato(esito: Esito) {
  if (!stato) return;
  introduzione.hidden = true;
  provaInCorso.hidden = true;
  risultato.hidden = false;
  riprova.hidden = true;
  nuova.hidden = false;
  avvisa('');
  elemento('punti').textContent = (stato.prova === 'diagnostico' ? traduci('Risposte corrette ', 'Correct answers ') : traduci('Punteggio ', 'Score ')) +
    formato.format(esito.punti) + ' / ' + esito.massimo;
  elemento('aree').replaceChildren(...esito.sezioni.map((s) => {
    const tr = nodo('tr', '');
    const intestazione = nodo('th', AREE_BOCCONI[s.area][lingua]);
    intestazione.scope = 'row';
    tr.append(intestazione, ...[s.corrette, s.errate, s.omesse, formato.format(s.punti) + ' / ' + s.massimo].map((v) => nodo('td', String(v))));
    return tr;
  }));
  const capitoli = new Map<string, { domanda: Domanda; daRiprendere: number }>();
  const gruppi = new Map<Area, HTMLDetailsElement>();
  for (const [i, q] of stato.domande.entries()) {
    const e = esito.esiti[i];
    const scelta = stato.risposte[i];
    const giusta = scelta === e.corretta;
    if (!giusta) {
      const voce = capitoli.get(q.capitolo);
      if (voce) voce.daRiprendere++;
      else capitoli.set(q.capitolo, { domanda: q, daRiprendere: 1 });
    }
    let gruppo = gruppi.get(q.area);
    if (!gruppo) {
      gruppo = nodo('details', '');
      gruppo.className = 'boc-revisione-gruppo';
      gruppo.append(nodo('summary', AREE_BOCCONI[q.area][lingua]));
      gruppi.set(q.area, gruppo);
    }
    const articolo = nodo('article', '');
    const giudizio = scelta === null ? traduci('Omessa', 'Skipped') : giusta ? traduci('Corretta', 'Correct') : traduci('Errata', 'Wrong');
    articolo.append(nodo('h4', traduci('Quesito ', 'Question ') + (i + 1) + ' · ' + giudizio), testoReso(q.testo));
    if (scelta !== null && !giusta) articolo.append(nodo('strong', traduci('La tua risposta', 'Your answer')), testoReso(q.scelte[scelta]));
    articolo.append(nodo('strong', traduci('Risposta corretta', 'Correct answer')), testoReso(q.scelte[e.corretta]), testoReso(e.spiegazione), linkTeoria(q));
    gruppo.append(articolo);
  }
  elemento('focus').hidden = capitoli.size === 0;
  elemento('focus-lista').replaceChildren(...[...capitoli.entries()].sort((a, b) => b[1].daRiprendere - a[1].daRiprendere).map(([id, voce]) => {
    const li = nodo('li', '');
    li.append(linkTeoria(voce.domanda, nomiCapitoli[id]), ' · ' + voce.daRiprendere + traduci(' da rivedere', ' to review'));
    return li;
  }));
  elemento('correzione').replaceChildren(...Object.keys(AREE_BOCCONI).map((area) => gruppi.get(area as Area)!));
  elemento('risultato-titolo').focus();
}

async function correggi() {
  if (!stato) return;
  stato.consegnata = true;
  salva();
  if (richiestaInCorso) return;
  richiestaInCorso = true;
  if (conferma.open) conferma.close();
  clearInterval(intervallo);
  introduzione.hidden = true;
  provaInCorso.hidden = true;
  riprova.hidden = true;
  nuova.hidden = true;
  avvisa(traduci('Correzione in corso…', 'Marking your answers…'));
  try {
    stato.esito = await richiedi<Esito>('correggi', { prova: stato.prova, token: stato.token, risposte: stato.risposte });
    salva();
    mostraRisultato(stato.esito);
  } catch (errore) {
    avvisa(errore instanceof Error ? errore.message : traduci('Correzione da riprovare.', 'Please retry marking.'));
    riprova.hidden = false;
    nuova.hidden = false;
  } finally {
    richiestaInCorso = false;
  }
}

diagnostico.addEventListener('click', () => void inizia('diagnostico'));
form.addEventListener('submit', (evento) => {
  evento.preventDefault();
  void inizia(elemento<HTMLSelectElement>('numero').value);
});
avanti.addEventListener('click', () => {
  if (!stato || !controllaTempo() || (stato.pagina + 1) * BOCCONI.perPagina >= stato.domande.length) return;
  stato.pagina++;
  salva();
  mostraPagina();
});
consegna.addEventListener('click', () => {
  if (!stato || !controllaTempo()) return;
  const omesse = stato.risposte.filter((r) => r === null).length;
  elemento('dialog-testo').textContent = omesse
    ? traduci('Quesiti senza risposta: ', 'Unanswered questions: ') + omesse + '.'
    : traduci('Hai risposto a tutti i quesiti.', 'You have answered all the questions.');
  conferma.returnValue = '';
  conferma.showModal();
});
conferma.addEventListener('close', () => {
  if (conferma.returnValue === 'consegna') void correggi();
});
riprova.addEventListener('click', () => void correggi());
nuova.addEventListener('click', () => {
  stato = null;
  salva();
  avvisa('');
  risultato.hidden = true;
  nuova.hidden = true;
  riprova.hidden = true;
  introduzione.hidden = false;
  diagnostico.focus();
});

try {
  const ripresa = JSON.parse(sessionStorage.getItem(chiave) ?? 'null') as Stato | null;
  if (ripresa && PROVE_BOCCONI.includes(ripresa.prova) && typeof ripresa.token === 'string' &&
      ripresa.domande.length === (ripresa.prova === 'diagnostico' ? BOCCONI.diagnostico : BOCCONI.quesiti) &&
      ripresa.risposte.length === ripresa.domande.length && Number.isInteger(ripresa.pagina) &&
      ripresa.pagina >= 0 && ripresa.pagina * BOCCONI.perPagina < ripresa.domande.length) stato = ripresa;
} catch {
  stato = null;
}
if (stato?.esito) mostraRisultato(stato.esito);
else if (stato?.consegnata) void correggi();
else if (stato) {
  mostraPagina();
  if (stato.scadenza !== null && !stato.consegnata) intervallo = window.setInterval(controllaTempo, 1000);
}
