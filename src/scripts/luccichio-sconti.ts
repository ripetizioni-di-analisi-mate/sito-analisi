// Il riflesso attraversa soltanto le scritte visibili e resta spento fra i passaggi.
const collegamenti = [...document.querySelectorAll<HTMLElement>('[data-sconto-bronzo]')];

if (collegamenti.length) {
  const riduciMovimento = matchMedia('(prefers-reduced-motion: reduce)');
  let timer = 0;
  let fineTimer = 0;
  let ultimoPassaggio = 0;
  let inCorso = false;

  const disponibile = () => !document.hidden && !riduciMovimento.matches;
  const visibile = (elemento: HTMLElement) => {
    const r = elemento.getBoundingClientRect();
    return elemento.getClientRects().length > 0 && r.width > 0 && r.height > 0 && r.bottom > 0 && r.top < innerHeight;
  };

  function ferma() {
    window.clearTimeout(timer);
    window.clearTimeout(fineTimer);
    timer = 0;
    fineTimer = 0;
    inCorso = false;
    collegamenti.forEach((elemento) => elemento.classList.remove('bronzo-luccichio'));
  }

  function programma(ritardo = 18000 + Math.random() * 8000) {
    window.clearTimeout(timer);
    if (!disponibile()) return;
    timer = window.setTimeout(() => {
      timer = 0;
      if (!disponibile()) return;
      const presenti = collegamenti.filter(visibile);
      if (!presenti.length) { programma(); return; }
      ultimoPassaggio = performance.now();
      inCorso = true;
      presenti.forEach((elemento) => elemento.classList.add('bronzo-luccichio'));
      fineTimer = window.setTimeout(() => {
        collegamenti.forEach((elemento) => elemento.classList.remove('bronzo-luccichio'));
        fineTimer = 0;
        inCorso = false;
        programma();
      }, 1850);
    }, ritardo);
  }

  function riparti() { ferma(); programma(2200); }
  document.addEventListener('visibilitychange', () => {
    ferma();
    if (!document.hidden) programma(3000);
  });
  riduciMovimento.addEventListener('change', riparti);
  window.addEventListener('pagehide', ferma);
  window.addEventListener('pageshow', (evento) => { if (evento.persisted) riparti(); });

  if ('IntersectionObserver' in window) {
    const osservatore = new IntersectionObserver((voci) => {
      if (voci.some((voce) => voce.isIntersecting) && !inCorso && performance.now() - ultimoPassaggio > 8000) programma(2200);
    }, { threshold: 0.6 });
    collegamenti.forEach((elemento) => osservatore.observe(elemento));
  }
  programma(2200);
}
