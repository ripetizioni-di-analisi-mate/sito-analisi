export function preparaIndirizzo(fattura: HTMLElement) {
  const paese = fattura.querySelector<HTMLSelectElement>('[name=fattura_paese]')!;
  const cap = fattura.querySelector<HTMLInputElement>('[name=fattura_cap]')!;
  const provincia = fattura.querySelector<HTMLInputElement>('[name=fattura_provincia]')!;
  const cf = fattura.querySelector<HTMLInputElement>('[name=fattura_cf]')!;
  const en = fattura.dataset.lingua === 'en';
  function aggiorna() {
    const italia = paese.value === 'IT';
    cap.required = provincia.required = cf.required = italia;
    cap.pattern = italia ? '[0-9]{5}' : '.*';
    cap.maxLength = italia ? 5 : 20;
    cap.inputMode = italia ? 'numeric' : 'text';
    provincia.pattern = italia ? '[A-Za-z]{2}' : '.*';
    provincia.maxLength = italia ? 2 : 100;
    provincia.placeholder = italia ? (en ? 'e.g. RM' : 'Es. RM') : '';
    fattura.querySelector<HTMLElement>('#etichetta-provincia')!.textContent = italia
      ? (en ? 'Province code' : 'Sigla della provincia')
      : (en ? 'Province or region (if applicable)' : 'Provincia o regione (se prevista)');
    fattura.querySelector<HTMLElement>('[data-facoltativo-estero]')!.hidden = italia;
    fattura.querySelector<HTMLElement>('#campo-cf')!.hidden = cf.disabled = !italia;
  }
  paese.addEventListener('change', aggiorna);
  window.addEventListener('pageshow', aggiorna);
  aggiorna();
  return aggiorna;
}

export function datiIntestatario(f: FormData): Record<string,string> {
  return Object.fromEntries(['nome','cognome','paese','indirizzo','cap','comune','provincia','cf'].map(
    (campo) => [campo, String(f.get('fattura_' + campo) || '').trim()]
  ));
}
