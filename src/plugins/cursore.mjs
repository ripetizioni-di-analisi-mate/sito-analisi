// Figure con cursore: ::cursore{tipo="epsilon-delta" titolo="…" …parametri}
// A tempo di build si produce la figura completa nello stato iniziale (con grafico(), quindi identica nello stile
// alle figure ::grafico): è quella che vedono la stampa, i motori di ricerca e chi non ha JavaScript.
// Sotto la figura: il nome del cursore con il suo valore, il cursore <input type="range"> (nascosto finché
// lo script src/scripts/cursori.ts non lo attiva) e i valori calcolati. Tipi e parametri sono in cursori-tipi.mjs.
import katex from 'katex';
import { grafico } from './grafico.mjs';
import { esc } from './grafico-svg.mjs';
import { TIPI, parametri } from './cursori-tipi.mjs';

let contatore = 0;
const tex = (t) => katex.renderToString(t, { throwOnError: false, output: 'html' });
// Riga di testo con formule $…$ e segnaposto {nome}, che lo script aggiorna.
const riga = (t, val) => String(t).split(/(\$[^$]+\$|\{\w+\})/g).map((p) => {
  if (/^\$[^$]+\$$/.test(p)) return tex(p.slice(1, -1));
  const m = p.match(/^\{(\w+)\}$/);
  return m ? `<span class="cursore-numero" data-valore="${m[1]}">${esc(val[m[1]] ?? '')}</span>` : esc(p);
}).join('');

export function cursore(a = {}) {
  const tipo = String(a.tipo || '');
  const T = TIPI[tipo];
  if (!T) throw new Error(`::cursore: tipo sconosciuto «${tipo}» (tipi: ${Object.keys(TIPI).join(', ')})`);
  const en = Boolean(a.inglese);
  const p = parametri(tipo, a);
  const v = p.valore;
  const val = T.valori(p, v, en);
  const testi = T.testi(p, en);
  const id = `cursore${++contatore}`;
  const legenda = T.legenda(p, en);
  // il primo valore restituito da valori() è quello del cursore
  const [chiave, primo] = Object.entries(val)[0];
  // le formule KaTeX (solo HTML) sono nascoste ai lettori di schermo: il cursore ha anche un nome in testo semplice
  const nomeSemplice = testi.nome.replace('\\varepsilon', 'ε').replace(/\s*=\s*$/, '');
  const sotto = `<div class="cursore-comandi">` +
    `<div class="cursore-riga"><label class="cursore-nome" for="${id}">${tex(testi.nome)} <span class="cursore-numero" data-valore="${chiave}">${esc(primo)}</span></label>` +
    `<input type="range" id="${id}" min="${p.min}" max="${p.max}" step="${p.passo}" value="${v}" aria-label="${esc(nomeSemplice)}" aria-valuetext="${esc(val.testo)}" aria-describedby="${id}-valori" hidden></div>` +
    `<p class="cursore-valori" id="${id}-valori">${testi.righe.map((r) => `<span>${riga(r, val)}</span>`).join('')}</p>` +
    `</div>`;
  const dati = esc(JSON.stringify({ tipo, p, en }));
  return grafico({ ...T.figura(p, v), ...(legenda ? { legenda } : {}), titolo: a.titolo, inglese: en },
    { classe: 'cursore', attributi: ` data-cursore="${dati}"`, sotto });
}
