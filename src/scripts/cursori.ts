// Figure con cursore (::cursore nella teoria): al cambiare del cursore si ridisegna l'SVG con le stesse funzioni
// usate a tempo di build (grafico-svg.mjs, cursori-tipi.mjs), quindi con la stessa scala, gli stessi assi e colori.
// La legenda e la didascalia restano quelle scritte dalla build; cambiano la figura e i numeri sotto di essa.
// Base.astro carica questo modulo solo se la pagina contiene almeno una figura [data-cursore].
import { disegnaSvg } from '../plugins/grafico-svg.mjs';
import { TIPI } from '../plugins/cursori-tipi.mjs';

interface Dati { tipo: keyof typeof TIPI; p: Record<string, any>; en: boolean }

function attiva(fig: HTMLElement) {
  let dati: Dati;
  try { dati = JSON.parse(fig.dataset.cursore || ''); } catch { return; }
  const T = (TIPI as Record<string, any>)[dati.tipo];
  const input = fig.querySelector<HTMLInputElement>('input[type="range"]');
  if (!T || !input) return;
  // l'id dei marcatori (frecce degli assi) resta quello della build: è unico nella pagina
  const id = fig.querySelector('svg marker')?.id.replace(/-freccia$/, '') || 'gc';
  const numeri = [...fig.querySelectorAll<HTMLElement>('.cursore-numero')];
  let attesa = 0;
  const ridisegna = () => {
    attesa = 0;
    const v = Number(input.value);
    const svg = fig.querySelector('svg');
    if (svg) svg.outerHTML = disegnaSvg(T.figura(dati.p, v), id);
    const val = T.valori(dati.p, v, dati.en);
    numeri.forEach((n) => { const t = val[n.dataset.valore || '']; if (t !== undefined) n.textContent = t; });
    input.setAttribute('aria-valuetext', val.testo);
  };
  // al trascinamento si ridisegna al massimo una volta per fotogramma
  input.addEventListener('input', () => { if (!attesa) attesa = requestAnimationFrame(ridisegna); });
  input.hidden = false;
  fig.classList.add('cursore-attivo');
  // valore di prova dall'indirizzo, per esempio ?cursore=0.5 (tutte le figure della pagina)
  const prova = new URLSearchParams(location.search).get('cursore');
  if (prova !== null && Number.isFinite(Number(prova))) { input.value = prova; ridisegna(); }
}

document.querySelectorAll<HTMLElement>('[data-cursore]').forEach(attiva);
