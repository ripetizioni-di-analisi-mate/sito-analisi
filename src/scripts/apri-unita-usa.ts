function openLinkedUnit(hash: string) {
  if (!/^#(?:unit|worked|exercises)-\d+$/.test(hash)) return;
  const target = document.getElementById(hash.slice(1));
  const details = target?.closest('details');
  if (details instanceof HTMLDetailsElement) {
    details.hidden = false;
    details.open = true;
    target?.scrollIntoView({ block: 'start' });
  }
}

openLinkedUnit(location.hash);
addEventListener('hashchange', () => openLinkedUnit(location.hash));
document.addEventListener('click', event => {
  const link = event.target instanceof Element && event.target.closest<HTMLAnchorElement>('a[href]');
  if (!link || link.pathname !== location.pathname || !link.hash) return;
  const dialog = link.closest('dialog[open]');
  if (dialog instanceof HTMLDialogElement) dialog.close();
  openLinkedUnit(link.hash);
});
