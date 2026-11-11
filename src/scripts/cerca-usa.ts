const cataloghi = [...document.querySelectorAll<HTMLDetailsElement>('[data-catalogo-usa]')];
if (cataloghi.length) {
  const forms = [...document.querySelectorAll<HTMLFormElement>('[data-us-search]')];
  const cards = cataloghi.flatMap(catalogo => [...catalogo.querySelectorAll<HTMLElement>('[data-usa-materia]')]);
  const gruppi = cataloghi.flatMap(catalogo => [...catalogo.querySelectorAll<HTMLDetailsElement>('[data-usa-sottogruppo]')]);
  const esito = document.querySelector<HTMLElement>('[data-esito-usa]');
  const vuoto = document.querySelector<HTMLElement>('[data-usa-vuoto]');
  const initial = new Map([...cataloghi, ...gruppi].map(gruppo => [gruppo, gruppo.open]));

  function cerca(query: string) {
    const termini = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    for (const scheda of cards) {
      const testo = (scheda.textContent + ' ' + scheda.dataset.usaMateria).toLowerCase();
      scheda.hidden = !termini.every(termine => testo.includes(termine));
    }
    for (const gruppo of gruppi) {
      gruppo.hidden = !gruppo.querySelector('[data-usa-materia]:not([hidden])');
      gruppo.open = termini.length ? !gruppo.hidden : Boolean(initial.get(gruppo));
    }
    const totale = cards.filter(scheda => !scheda.hidden).length;
    if (esito) {
      esito.hidden = termini.length === 0;
      esito.textContent = totale + (totale === 1 ? ' course found' : ' courses found');
    }
    if (vuoto) vuoto.hidden = totale !== 0;
    for (const catalogo of cataloghi) {
      catalogo.hidden = termini.length > 0 && !catalogo.querySelector('[data-usa-materia]:not([hidden])');
      catalogo.open = termini.length ? !catalogo.hidden : Boolean(initial.get(catalogo));
    }
  }

  for (const form of forms) {
    const input = form.querySelector<HTMLInputElement>('input[name="q"]');
    if (!input) continue;
    if (form.id === 'ricerca-principale') input.addEventListener('input', () => cerca(input.value));
    form.addEventListener('submit', event => {
      event.preventDefault();
      cerca(input.value);
      const principale = document.querySelector<HTMLInputElement>('#ricerca-principale input');
      if (principale) principale.value = input.value;
      const dialog = form.closest('dialog[open]');
      if (dialog instanceof HTMLDialogElement) dialog.close();
      esito?.scrollIntoView({ block: 'nearest' });
    });
  }

  const query = new URLSearchParams(location.search).get('q') || document.documentElement.dataset.previewQuery;
  if (query) {
    const input = document.querySelector<HTMLInputElement>('#ricerca-principale input');
    if (input) input.value = query;
    cerca(query);
  }
}
