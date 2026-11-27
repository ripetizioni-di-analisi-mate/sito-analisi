const DURATA = 5 * 60 * 1000;
const PREFISSO = 'rda:visita:tratto:';
const SCADUTA = 'rda:visita:scaduta';
const POSIZIONE = 'rda:visita:ritorno';
export const SEGNALE_ACCESSO = 'rda:ultimo-accesso';

function archivioDisponibile() {
  for (const nome of ['localStorage', 'sessionStorage']) {
    try {
      const archivio = window[nome];
      archivio.setItem('rda:visita:prova', '1');
      archivio.removeItem('rda:visita:prova');
      return archivio;
    } catch { /* In una finestra riservata può essere disponibile solo la memoria della pagina. */ }
  }
  return null;
}

// Ogni scheda scrive i propri intervalli. Due finestre visibili nello stesso momento
// consumano una sola volta lo stesso minuto, anche quando terminano in ordine diverso.
function tempoVisibile(tratti) {
  const intervalli = Array.from(tratti, ([chiave, fine]) => [Number(chiave.slice(PREFISSO.length).split(':')[0]), fine])
    .filter(([inizio, fine]) => Number.isFinite(inizio) && Number.isFinite(fine) && fine >= inizio)
    .sort(([a], [b]) => a - b);
  let totale = 0, ultimo = 0;
  for (const [inizio, fine] of intervalli) {
    totale += Math.max(0, fine - Math.max(inizio, ultimo));
    ultimo = Math.max(ultimo, fine);
  }
  return totale;
}

function misuraVisita(allaScadenza) {
  const archivio = archivioDisponibile();
  const tratti = new Map();
  const id = Math.random().toString(36).slice(2);
  const ora = () => Math.round(performance.timeOrigin + performance.now());
  let tratto = '', esaurita = false, sveglia, salvataggio;

  function registra() {
    if (!tratto) return;
    const fine = ora();
    tratti.set(tratto, fine);
    try { archivio?.setItem(tratto, String(fine)); } catch {}
  }
  function ferma() {
    registra();
    tratto = '';
    clearTimeout(sveglia);
    clearInterval(salvataggio);
  }
  function controlla() {
    clearTimeout(sveglia);
    if (document.hidden) return;
    try {
      esaurita ||= archivio?.getItem(SCADUTA) === '1';
      if (archivio && !esaurita) {
        for (const chiave of Object.keys(archivio)) {
          if (chiave.startsWith(PREFISSO)) tratti.set(chiave, Number(archivio.getItem(chiave)));
        }
      }
    } catch {}
    if (tratto) tratti.set(tratto, ora());
    const residuo = esaurita ? 0 : DURATA - tempoVisibile(tratti);
    if (residuo > 0) {
      sveglia = setTimeout(controlla, residuo);
      return;
    }
    ferma();
    esaurita = true;
    try {
      archivio?.setItem(SCADUTA, '1');
      for (const chiave of tratti.keys()) archivio?.removeItem(chiave);
    } catch {}
    tratti.clear();
    allaScadenza();
  }
  function riprendi() {
    if (document.hidden || tratto) return;
    if (!esaurita) {
      tratto = PREFISSO + ora() + ':' + id;
      registra();
      // Conserva anche quasi tutta la lettura se il browser viene terminato senza pagehide.
      salvataggio = setInterval(registra, 10000);
    }
    controlla();
  }
  document.addEventListener('visibilitychange', () => document.hidden ? ferma() : riprendi());
  window.addEventListener('pagehide', ferma);
  window.addEventListener('pageshow', riprendi);
  window.addEventListener('storage', ({ key }) => {
    if (tratto && (key === SCADUTA || key?.startsWith(PREFISSO))) controlla();
  });
  riprendi();
}

const paginaCorrente = () => location.pathname + location.search + location.hash;

export function avviaInvito(dialogo) {
  if (document.documentElement.classList.contains('collegato')) {
    try {
      const ritorno = JSON.parse(sessionStorage.getItem(POSIZIONE));
      if (ritorno?.pagina === paginaCorrente()) {
        sessionStorage.removeItem(POSIZIONE);
        const ripristina = () => requestAnimationFrame(() => window.scrollTo(0, ritorno.y));
        if (document.readyState === 'complete') ripristina();
        else window.addEventListener('load', ripristina, { once: true });
      }
    } catch {}
    return;
  }
  // Un accesso in un'altra scheda richiede una pagina aggiornata dal Worker.
  // Il segnale locale non assegna alcun permesso.
  let ultimoAccesso;
  try { ultimoAccesso = localStorage.getItem(SEGNALE_ACCESSO); } catch {}
  function aggiornaSessione() {
    try {
      if (!document.hidden && localStorage.getItem(SEGNALE_ACCESSO) !== ultimoAccesso) {
        location.reload();
        return true;
      }
    } catch {}
    return false;
  }
  window.addEventListener('pageshow', aggiornaSessione);
  window.addEventListener('storage', ({ key }) => { if (key === SEGNALE_ACCESSO) aggiornaSessione(); });
  document.addEventListener('visibilitychange', aggiornaSessione);

  // L'anteprima è terminata. Il tasto Indietro del browser resta disponibile.
  dialogo.addEventListener('cancel', (evento) => evento.preventDefault());
  dialogo.addEventListener('click', (evento) => {
    if (evento.target.closest('a')) {
      try { sessionStorage.setItem(POSIZIONE, JSON.stringify({ pagina: paginaCorrente(), y: window.scrollY })); } catch {}
    }
  });
  misuraVisita(() => {
    if (aggiornaSessione() || dialogo.open) return;
    for (const link of dialogo.querySelectorAll('a')) {
      const destinazione = new URL(link.href);
      destinazione.searchParams.set('dopo', paginaCorrente());
      link.href = destinazione.href;
    }
    dialogo.showModal();
    if (globalThis.navigator && !navigator.webdriver) {
      fetch('/api/fermo-iscrizione/mostrato', { method: 'POST', keepalive: true }).catch(() => {});
    }
  });
}
