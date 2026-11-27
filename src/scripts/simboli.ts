// Figura «una curva, sei simboli» (::simboli nella teoria): a ogni scelta si ridisegna l'SVG con le stesse funzioni
// usate a tempo di build (grafico-svg.mjs, simboli-tipi.mjs). Base.astro carica questo modulo solo se la pagina
// contiene almeno una figura [data-simboli].
import { disegnaSvg } from '../plugins/grafico-svg.mjs';
import { figuraSimboli, lettureSimboli } from '../plugins/simboli-tipi.mjs';

function attiva(fig: HTMLElement) {
  let stato: { k: number; s: string; en: boolean };
  try { stato = JSON.parse(fig.dataset.simboli || ''); } catch { return; }
  const pulsanti = fig.querySelector<HTMLElement>('.simboli-pulsanti');
  const formula = fig.querySelector<HTMLElement>('.simboli-formula');
  if (!pulsanti || !formula) return;
  const id = fig.querySelector('svg marker')?.id.replace(/-freccia$/, '') || 'gs';
  const pezzo = (nome: string) => fig.querySelector<HTMLElement>(`.simboli-banca [data-pezzo="${nome}"]`)?.innerHTML || '';
  const ridisegna = () => {
    const svg = fig.querySelector('svg');
    if (svg) svg.outerHTML = disegnaSvg(figuraSimboli(stato.k, stato.s), id);
    formula.innerHTML = `<span>${pezzo(`s${stato.k}`)}</span><span>${pezzo(`r${stato.s}`)}</span><span>${pezzo(`d${stato.k}`)}</span>`;
    const letture = lettureSimboli(stato.k, stato.s, stato.en) as Record<string, string>;
    fig.querySelectorAll<HTMLElement>('[data-lettura]').forEach((el) => { el.textContent = letture[el.dataset.lettura || ''] || ''; });
    fig.querySelectorAll<HTMLElement>('[data-curva]').forEach((b) => b.setAttribute('aria-pressed', String(Number(b.dataset.curva) === stato.k)));
    fig.querySelectorAll<HTMLElement>('[data-simbolo]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.simbolo === stato.s)));
  };
  pulsanti.addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest<HTMLElement>('button');
    if (!b) return;
    if (b.dataset.curva !== undefined) stato.k = Number(b.dataset.curva);
    if (b.dataset.simbolo !== undefined) stato.s = b.dataset.simbolo;
    ridisegna();
  });
  pulsanti.hidden = false;
  fig.classList.add('simboli-attiva');
}

document.querySelectorAll<HTMLElement>('[data-simboli]').forEach(attiva);
