// Figura interattiva ::simboli{curva="circonferenza" simbolo="<=" titolo="…"}
// Due file di pulsanti (la curva, il simbolo) e sotto la disequazione con la lettura della regione.
// A tempo di build si produce la figura nello stato iniziale con grafico(): è quella che vedono la stampa, i motori
// di ricerca e chi non ha JavaScript. I pulsanti restano nascosti finché src/scripts/simboli.ts non li attiva.
import katex from 'katex';
import { grafico } from './grafico.mjs';
import { esc } from './grafico-svg.mjs';
import { CURVE, SIMBOLI, TEX_SIMBOLO, NOME_SIMBOLO, indiceCurva, figuraSimboli, lettureSimboli } from './simboli-tipi.mjs';

const tex = (t) => katex.renderToString(t, { throwOnError: false, output: 'html' });

export function simboli(a = {}) {
  const en = Boolean(a.inglese), l = en ? 'en' : 'it';
  const k = indiceCurva(String(a.curva || 'circonferenza'));
  const s = SIMBOLI.includes(String(a.simbolo)) ? String(a.simbolo) : '<=';
  const letture = lettureSimboli(k, s, en);
  const formula = (kk, ss) => `<span>${tex(CURVE[kk].texSin)}</span><span>${tex(TEX_SIMBOLO[ss])}</span><span>${tex(CURVE[kk].texDes)}</span>`;
  const curve = CURVE.map((c, i) => `<button type="button" data-curva="${i}" aria-pressed="${i === k}">${esc(c[l])}</button>`).join('');
  const segni = SIMBOLI.map((x) => `<button type="button" data-simbolo="${esc(x)}" aria-pressed="${x === s}" aria-label="${esc(NOME_SIMBOLO[l][x])}">${tex(TEX_SIMBOLO[x])}</button>`).join('');
  // i pezzi delle formule già resi, che lo script ricompone a ogni scelta
  const banca = CURVE.map((c, i) => `<span data-pezzo="s${i}">${tex(c.texSin)}</span><span data-pezzo="d${i}">${tex(c.texDes)}</span>`).join('') +
    SIMBOLI.map((x) => `<span data-pezzo="r${esc(x)}">${tex(TEX_SIMBOLO[x])}</span>`).join('');
  const sotto = `<div class="simboli-comandi">` +
    `<div class="simboli-pulsanti" hidden><div class="simboli-gruppo" role="group" aria-label="${en ? 'Curve' : 'Curva'}">${curve}</div>` +
    `<div class="simboli-gruppo simboli-segni" role="group" aria-label="${en ? 'Symbol' : 'Simbolo'}">${segni}</div></div>` +
    `<p class="simboli-formula" aria-live="polite">${formula(k, s)}</p>` +
    `<p class="simboli-lettura"><span data-lettura="regione">${esc(letture.regione)}</span><span data-lettura="frontiera">${esc(letture.frontiera)}</span></p>` +
    `<div class="simboli-banca" hidden>${banca}</div></div>`;
  const dati = esc(JSON.stringify({ k, s, en }));
  return grafico({ ...figuraSimboli(k, s), titolo: a.titolo, inglese: en }, { classe: 'simboli', attributi: ` data-simboli="${dati}"`, sotto });
}
