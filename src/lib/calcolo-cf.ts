import { calcolaCodiceFiscale } from '../data/codice-fiscale.mjs';

type Luogo = [nome: string, provincia: string, codice: string, dal: string, al: string, inglese?: string];
const chiave = (testo: string) => testo.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

export function preparaCalcoloCF(fattura: HTMLElement) {
  const sezione = fattura.querySelector<HTMLElement>('[data-calcolo-cf]')!;
  const nome = fattura.querySelector<HTMLInputElement>('[name=fattura_nome]')!;
  const cognome = fattura.querySelector<HTMLInputElement>('[name=fattura_cognome]')!;
  const cf = sezione.querySelector<HTMLInputElement>('[name=fattura_cf]')!;
  const data = sezione.querySelector<HTMLInputElement>('[data-cf-data]')!;
  const sesso = sezione.querySelector<HTMLSelectElement>('[data-cf-sesso]')!;
  const luogo = sezione.querySelector<HTMLInputElement>('[data-cf-luogo]')!;
  const elenco = sezione.querySelector('datalist')!;
  const stato = sezione.querySelector<HTMLElement>('[data-cf-stato]')!;
  const en = fattura.dataset.lingua === 'en';
  const erroreArchivio = en ? 'Birthplace search is unavailable. Try again or enter your official tax code.' : 'Ricerca dei luoghi non disponibile. Riprova oppure inserisci il codice della tessera sanitaria.';

  async function caricaLuoghi() {
    const risposta = await fetch('/dati/luoghi-cf.json');
    if (!risposta.ok) throw new Error();
    const righe: Luogo[] = await risposta.json();
    return righe.map(riga => {
      const [nome, provincia, codice, dal, al, inglese] = riga;
      const testo = provincia === 'EE' ? ((en && inglese) || nome) : nome + ' (' + provincia + ')';
      return { testo, codice, dal, al, ricerca: chiave(testo), nomi: inglese ? [chiave(nome), chiave(inglese)] : [chiave(nome)] };
    });
  }

  let archivio: ReturnType<typeof caricaLuoghi> | undefined;
  async function corrispondenze() {
    const luoghi = await (archivio ??= caricaLuoghi().catch(errore => { archivio = undefined; throw errore; }));
    const cerca = chiave(luogo.value);
    return cerca.length < 2 ? [] : luoghi.filter(x =>
      (!data.value || ((!x.dal || x.dal <= data.value) && (!x.al || data.value <= x.al))) &&
      (x.ricerca.includes(cerca) || x.nomi.some(n => n.includes(cerca))));
  }

  async function suggerisci() {
    try {
      const trovati = await corrispondenze();
      const cerca = chiave(luogo.value);
      const suggerimenti = [...new Set(trovati.map(x => x.testo))];
      suggerimenti.sort((a, b) => Number(chiave(b).startsWith(cerca)) - Number(chiave(a).startsWith(cerca)));
      elenco.replaceChildren(...suggerimenti.slice(0, 16).map(testo => new Option(testo, testo)));
    } catch { stato.textContent = erroreArchivio; }
  }
  luogo.addEventListener('input', suggerisci);
  data.addEventListener('input', () => { if (luogo.value) suggerisci(); });
  let compilatoDalCalcolo = false;
  cf.addEventListener('input', () => { compilatoDalCalcolo = false; stato.textContent = ''; });
  for (const campo of [nome, cognome, data, sesso, luogo]) campo.addEventListener('input', () => {
    stato.textContent = '';
    if (compilatoDalCalcolo) {
      cf.value = '';
      compilatoDalCalcolo = false;
    }
  });

  async function calcola(evento: Event) {
    evento.preventDefault();
    if (sezione.hidden) return;
    if (![nome, cognome, data, sesso, luogo].every(campo => campo.value.trim())) {
      stato.textContent = en ? 'To calculate the code, enter first name, last name, date of birth, sex and birthplace.' : 'Per calcolare il codice, completa nome, cognome, data di nascita, sesso e luogo di nascita.';
      return;
    }
    const precedente = cf.value;
    try {
      const trovati = await corrispondenze();
      if (sezione.hidden || cf.value !== precedente) return;
      const cerca = chiave(luogo.value);
      const codici = new Set(trovati.filter(x => x.ricerca === cerca || x.nomi.includes(cerca)).map(x => x.codice));
      if (codici.size !== 1) {
        stato.textContent = en ? 'Select the birthplace valid on the date of birth, or enter your official tax code.' : 'Seleziona il luogo valido alla data di nascita oppure inserisci il codice della tessera sanitaria.';
        return;
      }
      const codice = calcolaCodiceFiscale({ nome: nome.value, cognome: cognome.value, dataNascita: data.value, sesso: sesso.value, catastale: [...codici][0] });
      if (!codice) {
        stato.textContent = en ? 'Check the names and date of birth, or enter your official tax code.' : 'Controlla nome, cognome e data di nascita oppure inserisci il codice ufficiale.';
        return;
      }
      cf.value = codice;
      cf.dispatchEvent(new Event('input', { bubbles: true }));
      compilatoDalCalcolo = true;
    } catch { stato.textContent = erroreArchivio; }
  }
  sezione.querySelector('[data-cf-calcola]')!.addEventListener('click', calcola);
  document.getElementById('calcolatore-cf-locale')!.addEventListener('submit', calcola);
  return sezione;
}
