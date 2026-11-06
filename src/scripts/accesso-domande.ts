// Stessa indicazione e stessi collegamenti all'acquisto nelle tre modalità di allenamento.
interface Accesso {
  anteprima?: { illimitato?: boolean; usate?: number; limite?: number; rimaste?: number };
  pagamento?: boolean;
  materie?: { href: string; titolo: string }[];
}
export function aggiornaAccessoDomande(radice: HTMLElement, dati: Accesso | null) {
  const box = radice.querySelector<HTMLElement>('.accesso-domande');
  if (!box || !dati?.anteprima) return;
  const en = document.documentElement.lang === 'en';
  const stato = box.querySelector<HTMLElement>('[data-stato-anteprima]')!;
  box.hidden = Boolean(dati.anteprima.illimitato);
  if (box.hidden) return;
  stato.hidden = false;
  stato.textContent = en
    ? `${dati.anteprima.usate} of ${dati.anteprima.limite} free questions used · ${dati.anteprima.rimaste} remaining`
    : `${dati.anteprima.usate} domande gratuite utilizzate su ${dati.anteprima.limite} · ${dati.anteprima.rimaste} rimaste`;
  const acquisto = box.querySelector<HTMLElement>('[data-pagamento-domande]')!;
  acquisto.hidden = !dati.pagamento && Number(dati.anteprima.rimaste) > 0;
  const link = box.querySelector<HTMLElement>('[data-link-acquisto]')!;
  link.replaceChildren();
  for (const m of dati.materie || []) {
    const a = document.createElement('a');
    a.className = 'bottone-primario';
    a.href = m.href;
    a.textContent = `${en ? 'Unlock' : 'Sblocca'} ${m.titolo}`;
    link.append(a);
  }
}
