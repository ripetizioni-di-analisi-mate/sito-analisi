// Il riflesso attraversa soltanto le scritte visibili e resta spento fra i passaggi.
const collegamenti = [...document.querySelectorAll<HTMLElement>('[data-sconto-bronzo]')];

if (collegamenti.length) {
  const chiaveVisitato = 'rda:sconti:visitati';
  const riduciMovimento = matchMedia('(prefers-reduced-motion: reduce)');
  let visitato = false;
  try { visitato = localStorage.getItem(chiaveVisitato) === '1'; } catch { /* Storage non disponibile. */ }
  let timer = 0;
  let fineTimer = 0;

  const disponibile = () => !visitato && !document.hidden && !riduciMovimento.matches;
  const visibile = (elemento: HTMLElement) => {
    const r = elemento.getBoundingClientRect();
    return elemento.getClientRects().length > 0 && r.width > 0 && r.height > 0 && r.bottom > 0 && r.top < innerHeight;
  };

  function ferma() {
    window.clearTimeout(timer);
    window.clearTimeout(fineTimer);
    timer = 0;
    fineTimer = 0;
    collegamenti.forEach((elemento) => elemento.classList.remove('bronzo-luccichio'));
  }

  function programma() {
    window.clearTimeout(timer);
    if (!disponibile()) return;
    timer = window.setTimeout(() => {
      timer = 0;
      if (!disponibile()) return;
      const presenti = collegamenti.filter(visibile);
      if (!presenti.length) { programma(); return; }
      presenti.forEach((elemento) => elemento.classList.add('bronzo-luccichio'));
      fineTimer = window.setTimeout(() => {
        collegamenti.forEach((elemento) => elemento.classList.remove('bronzo-luccichio'));
        fineTimer = 0;
        programma();
      }, 1850);
    }, 120000 + Math.random() * 60000);
  }

  function segnaVisitato() {
    visitato = true;
    ferma();
    try { localStorage.setItem(chiaveVisitato, '1'); } catch { /* Resta spento nella pagina corrente. */ }
  }
  collegamenti.forEach((elemento) => {
    elemento.addEventListener('click', segnaVisitato);
    elemento.addEventListener('auxclick', (evento) => { if (evento.button === 1) segnaVisitato(); });
  });
  window.addEventListener('storage', (evento) => {
    if (evento.key === chiaveVisitato && evento.newValue === '1') {
      visitato = true;
      ferma();
    }
  });
  function riparti() { ferma(); programma(); }
  document.addEventListener('visibilitychange', riparti);
  riduciMovimento.addEventListener('change', riparti);
  window.addEventListener('pagehide', ferma);
  window.addEventListener('pageshow', (evento) => { if (evento.persisted) riparti(); });

  programma();
}
