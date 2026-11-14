// Anteprima riservata ai GM (14/11/2026): mostra le versioni «scaffale» dei pacchetti
// (home e indice) e nasconde le righe classiche. Senza verifica resta tutto com'era.
const scaffali = [...document.querySelectorAll<HTMLElement>('[data-pacchetti-gm]')];
if (scaffali.length) {
  fetch('/api/io', { credentials: 'same-origin', cache: 'no-store' })
    .then((r) => (r.ok ? r.json() : null))
    .then((io) => {
      if (io?.gm !== true) return;
      scaffali.forEach((el) => { el.hidden = false; });
      document.querySelectorAll<HTMLElement>('[data-pacchetti-classico]').forEach((el) => { el.hidden = true; });
    })
    .catch(() => {});
}
