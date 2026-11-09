import { calcolaCodiceFiscale } from '../data/codice-fiscale.mjs';

type Luogo = [nome: string, provincia: string, codice: string, dal: string, al: string, inglese?: string];
const chiave = (testo: string) => testo.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

export function preparaCalcoloCF(fattura: HTMLElement) {
  const pannello = fattura.querySelector<HTMLDetailsElement>('[data-calcolo-cf]')!;
  const nome = fattura.querySelector<HTMLInputElement>('[name=fattura_nome]')!;
  const cognome = fattura.querySelector<HTMLInputElement>('[name=fattura_cognome]')!;
  const cf = fattura.querySelector<HTMLInputElement>('[name=fattura_cf]')!;
  const data = pannello.querySelector<HTMLInputElement>('[data-cf-data]')!;
  const sesso = pannello.querySelector<HTMLSelectElement>('[data-cf-sesso]')!;
  const luogo = pannello.querySelector<HTMLInputElement>('[data-cf-luogo]')!;
  const elenco = pannello.querySelector('datalist')!;
  const proposta = pannello.querySelector<HTMLElement>('[data-cf-proposta]')!;
  const risultato = pannello.querySelector<HTMLOutputElement>('output')!;
  const stato = pannello.querySelector<HTMLElement>('[data-cf-stato]')!;
  const en = fattura.dataset.lingua === 'en';
  let luoghi: { riga: Luogo, testo: string, ricerca: string, nomi: string[] }[] = [];
  let caricamento = false;

  function aggiorna() {
    if (!pannello.open || !luoghi.length) return;
    const cerca = chiave(luogo.value);
    const dataScelta = data.value;
    const trovati = cerca.length < 2 ? [] : luoghi.filter(({ riga: [,,, dal, al], ricerca, nomi }) =>
      (!dataScelta || ((!dal || dal <= dataScelta) && (!al || dataScelta <= al))) && (ricerca.includes(cerca) || nomi.some(n => n.includes(cerca))));
    const suggerimenti = [...new Set(trovati.map(x => x.testo))];
    suggerimenti.sort((a, b) => Number(chiave(b).startsWith(cerca)) - Number(chiave(a).startsWith(cerca)));
    elenco.replaceChildren(...suggerimenti.slice(0, 16).map(testo => new Option(testo, testo)));
    const corrispondenti = trovati.filter(x => x.ricerca === cerca || x.nomi.includes(cerca));
    const codici = new Set(corrispondenti.map(x => x.riga[2]));
    const catastale = codici.size === 1 ? codici.values().next().value : undefined;
    const codice = catastale && calcolaCodiceFiscale({ nome: nome.value, cognome: cognome.value, dataNascita: dataScelta, sesso: sesso.value, catastale });
    risultato.value = codice || '';
    proposta.hidden = !codice;
    let messaggio = '';
    if (!nome.value.trim() || !cognome.value.trim()) messaggio = en ? 'Enter the billing recipient’s first and last names above.' : 'Completa prima il nome e il cognome dell’intestatario qui sopra.';
    else if (cerca.length >= 2 && !trovati.length) messaggio = en ? 'No matching birthplace for these details. You can enter your official tax code directly.' : 'Nessun luogo corrispondente per i dati inseriti. Puoi scrivere direttamente il codice della tessera sanitaria.';
    else if (cerca.length >= 2 && !catastale) messaggio = en ? 'Select your birthplace from the suggestions.' : 'Seleziona il luogo di nascita dai suggerimenti.';
    else if (catastale && dataScelta && sesso.value && !codice) messaggio = en ? 'Check the names and date of birth, or enter your official tax code.' : 'Controlla nome, cognome e data di nascita oppure inserisci il codice fiscale ufficiale.';
    stato.textContent = messaggio;
  }

  pannello.addEventListener('toggle', async () => {
    if (!pannello.open) return;
    if (luoghi.length) return aggiorna();
    if (caricamento) return;
    caricamento = true;
    stato.textContent = en ? 'Loading birthplaces…' : 'Caricamento dei luoghi di nascita…';
    try {
      const risposta = await fetch('/dati/luoghi-cf.json');
      if (!risposta.ok) throw new Error();
      const righe: Luogo[] = await risposta.json();
      luoghi = righe.map(riga => {
        const [nome, provincia] = riga;
        const inglese = riga[5];
        const testo = provincia === 'EE' ? ((en && inglese) || nome) : nome + ' (' + provincia + ')';
        return { riga, testo, ricerca: chiave(testo), nomi: inglese ? [chiave(nome), chiave(inglese)] : [chiave(nome)] };
      });
      aggiorna();
    } catch {
      stato.textContent = en ? 'Birthplace search is unavailable. Enter the official code, or reopen the calculator to retry.' : 'Ricerca dei luoghi non disponibile. Inserisci il codice ufficiale oppure riapri il calcolatore per riprovare.';
    } finally { caricamento = false; }
  });
  for (const campo of [nome, cognome, data, sesso, luogo]) campo.addEventListener('input', aggiorna);
  data.form?.addEventListener('submit', evento => evento.preventDefault());
  pannello.querySelector('[data-cf-usa]')!.addEventListener('click', () => {
    aggiorna();
    if (!risultato.value) return;
    cf.value = risultato.value;
    cf.dispatchEvent(new Event('input', { bubbles: true }));
    pannello.open = false;
    cf.focus();
  });
  return pannello;
}
