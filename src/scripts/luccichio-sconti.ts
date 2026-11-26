// Il riflesso attraversa soltanto le scritte visibili e resta spento fra i passaggi.
// Regole del 26/11/2026 (scelta di Carmine): un passaggio a ogni apertura della pagina, poi uno ogni 60 secondi; dopo che il visitatore ha cliccato
// una volta sul riquadro degli sconti, uno ogni 3 minuti; spento per chi ha già acquistato. Il Worker scrive su
// <html> data-materie con le materie dell'account; le materie gratuite con account non contano.
import { conAccount } from '../data/con-account.mjs';

const collegamenti = [...document.querySelectorAll<HTMLElement>('[data-sconto-bronzo]')];
// Prova: con ?luccichio=1 nell'indirizzo il riflesso parte dopo un secondo e mezzo, anche per chi ha acquistato.
const prova = new URLSearchParams(location.search).get('luccichio') === '1';
if (prova) document.documentElement.classList.add('luccichio-prova');
const haAcquistato = !prova && (document.documentElement.dataset.materie || '')
  .split(/\s+/)
  .some((m) => m && !conAccount(m));

if (collegamenti.length && !haAcquistato) {
  // Prima il riflesso si spegneva per sempre al primo clic: il vecchio segno nel browser si cancella.
  try { localStorage.removeItem('rda:sconti:visitati'); } catch { /* Storage non disponibile. */ }
  const chiaveCliccato = 'rda:sconti:cliccato';
  const riduciMovimento = matchMedia('(prefers-reduced-motion: reduce)');
  let cliccato = false;
  try { cliccato = localStorage.getItem(chiaveCliccato) === '1'; } catch { /* Storage non disponibile. */ }
  const intervallo = () => (cliccato ? 180000 : 60000);
  let timer = 0;
  let fineTimer = 0;

  const disponibile = () => !document.hidden && (prova || !riduciMovimento.matches);
  // Il primo passaggio arriva a ogni apertura o aggiornamento della pagina, appena la scritta è in vista.
  let primo = true;
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
      if (!presenti.length) {
        if (primo) { timer = window.setTimeout(() => programma(), 1000); return; }
        programma();
        return;
      }
      primo = false;
      presenti.forEach((elemento) => elemento.classList.add('bronzo-luccichio'));
      fineTimer = window.setTimeout(() => {
        collegamenti.forEach((elemento) => elemento.classList.remove('bronzo-luccichio'));
        fineTimer = 0;
        programma();
      }, 1850);
    }, primo ? 1500 : intervallo());
  }

  function segnaCliccato() {
    if (cliccato) return;
    cliccato = true;
    try { localStorage.setItem(chiaveCliccato, '1'); } catch { /* Vale per la pagina corrente. */ }
  }
  collegamenti.forEach((elemento) => {
    elemento.addEventListener('click', segnaCliccato);
    elemento.addEventListener('auxclick', (evento) => { if (evento.button === 1) segnaCliccato(); });
  });
  window.addEventListener('storage', (evento) => {
    if (evento.key === chiaveCliccato && evento.newValue === '1') { cliccato = true; riparti(); }
  });

  function riparti() { ferma(); programma(); }
  document.addEventListener('visibilitychange', riparti);
  riduciMovimento.addEventListener('change', riparti);
  window.addEventListener('pagehide', ferma);
  window.addEventListener('pageshow', (evento) => { if (evento.persisted) riparti(); });

  programma();
}
