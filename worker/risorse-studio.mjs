// Solo equivalenti didattici verificabili. Una voce inesistente in entrambe le lingue mantiene il 404.
export function alternativaStudio(pathname) {
  const percorso = pathname.replace(/\.html$/, '').replace(/\/$/, '');
  const vecchieProve = percorso.match(/^(\/(?:en\/)?[a-z0-9-]+)\/prove-d-esame\/esercizi-svolti$/);
  if (vecchieProve) return { percorso: vecchieProve[1] + '/esercizi-svolti-gratuiti', stato: 301 };
  if (!percorso.startsWith('/en/')) return;
  const originale = percorso.slice(3);
  if (/^\/[a-z0-9-]+\/(?:teoremi|simulazione)$/.test(originale)
    || /^\/[a-z0-9-]+\/(?!ripasso-di-oggi\/)[a-z0-9-]+\/(?:domande|teoria\/[a-z0-9-]+)$/.test(originale)
    || /^\/videocorsi\/[a-z0-9-]+$/.test(originale)) return { percorso: originale, stato: 302 };
}
