import katex from 'katex';
import { inLatex } from './espressione.mjs';
import { disegnaSvg, lista, esc } from './grafico-svg.mjs';
// Genera a tempo di build un grafico SVG nel piano cartesiano.
// Assi sempre orientati: frecce ed etichette x, y; tacche con valori interi.
// Le discontinuità (salti grandi tra punti consecutivi) interrompono la curva.
//
// Attributi della direttiva ::grafico{…} (tutti facoltativi tranne il riquadro xmin/xmax):
//   f="x^2;2*x+1"                 una o più funzioni y = f(x), separate da ";" (la prima nel colore della materia)
//   curve="cos(t),sin(t),0,6.29"  curve parametriche x(t),y(t),tmin,tmax; più curve separate da ";"
//   area="x^2;0;0;2"              regione colorata tra y = sopra e y = sotto per a ≤ x ≤ b ("sopra;sotto;a;b"); più aree con "|"
//   punti="1,2;3,0,vuoto;2,4,pieno,P"   x,y[,pieno|vuoto[,etichetta]]
//   vettori="0,0,2,1,v;0,0,1,3,w" frecce da (x0,y0) a (x1,y1) con etichetta facoltativa
//   segmenti="1,0,1,2;0,2,1,2"    segmenti tratteggiati (proiezioni, distanze)
//   etichette="2,3,y = x²;…"      testi in posizione (x,y)
//   asintoti="x=0;y=1"            rette tratteggiate verticali o orizzontali
//   uguale=1                      stessa scala sui due assi (circonferenze rotonde, angoli veri)
//   nomi="Re,Im"                  nomi degli assi al posto di x, y
//   linee="0,0 4,0 4,3;…"         spezzate a tratto pieno (contorni di recipienti, piani, pareti): punti "x,y" separati da spazi
//   poligoni="0,0 4,0 4,2 0,2;…"  regioni chiuse colorate (un liquido, un corpo), punti come in linee
//   assi=0                        nessun asse cartesiano: per schemi fisici (piano inclinato, recipienti, corpi e forze)
//   riferimento="x0,y0,30,1.5,x′,y′"  sistema di assi orientati in (x0,y0), ruotato di 30° e lungo 1,5 unità, con i nomi
//   legenda="y = x^2;y = 2x-1"    voci della legenda in LaTeX, nell'ordine delle curve (prima f, poi curve);
//                                 senza legenda, le funzioni di f compaiono da sole come "y = …"; legenda=0 la toglie
//   unicolore=1                   tutti i vettori nello stesso colore (linee di campo, campi uniformi)
//   titolo="…"                    didascalia

let contatore = 0;
// Didascalia: testo semplice con formule $…$ rese da KaTeX (frazioni in colonna, radici, esponenti).
const didascalia = (t) => String(t).split(/(\$[^$]+\$)/g).map((p) => (/^\$[^$]+\$$/.test(p)
  ? katex.renderToString(p.slice(1, -1), { throwOnError: false, output: 'html' })
  : esc(p))).join('');

// opzioni (usate da cursore.mjs, non dalla direttiva): classe in più della figura, attributi in più
// (già pronti, con lo spazio iniziale) e HTML da inserire tra la legenda e la didascalia.
export function grafico(a, opzioni = {}) {
  const id = `g${++contatore}`;
  const sorgenti = Array.isArray(a.f) ? a.f : lista(a.f);
  const nFunzioni = sorgenti.length, nParametriche = lista(a.curve).length;
  // Legenda: un campione del tratto di ogni curva accanto alla sua formula
  const voci = [];
  if (String(a.legenda) !== '0') {
    const date = a.legenda ? String(a.legenda).split(';').map((x) => x.trim()) : null;
    const nCurve = nFunzioni + nParametriche;
    for (let k = 0; k < nCurve; k++) {
      let tex = date ? date[k] : (k < nFunzioni ? (() => {
                const [vx, vy] = (a.nomi ? lista(a.nomi, ',') : ['x', 'y']).map((v) => v.trim());
        // la voce automatica solo per i grafici y = f(x): in fisica il nome dell'asse non è sempre quello della curva
        if (vy !== 'y' || !/^[A-Za-zα-ωΑ-Ω]$/.test(vx)) return null;
        const l = typeof sorgenti[k] === 'string' ? inLatex(sorgenti[k], vx, a.inglese) : null;
        return l ? `${vy} = ${l}` : null;
      })() : null);
      if (tex) voci.push(`<span class="voce-legenda"><svg class="campione" viewBox="0 0 26 8" aria-hidden="true"><line class="curva c${k % 3}" x1="2" y1="4" x2="24" y2="4"/></svg>${katex.renderToString(tex, { throwOnError: false })}</span>`);
    }
  }
  const legenda = voci.length ? `<div class="legenda">${voci.join('')}</div>` : '';
  const { classe = '', attributi = '', sotto = '' } = opzioni;
  return `<figure class="grafico${classe ? ` ${classe}` : ''}"${attributi}>${disegnaSvg(a, id)}${legenda}${sotto}${a.titolo ? `<figcaption>${didascalia(a.titolo)}</figcaption>` : ''}</figure>`;
}
