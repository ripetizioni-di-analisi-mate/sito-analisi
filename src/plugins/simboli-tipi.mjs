// Figura «una curva, sei simboli» (::simboli): si sceglie una curva e un simbolo e la figura mostra la regione.
// Modulo puro (niente KaTeX, niente Node): lo usano simboli.mjs a tempo di build, per la figura nello stato
// iniziale, e src/scripts/simboli.ts nel browser, che la ridisegna a ogni scelta.

// sin, des: i due membri in sintassi dei grafici; texSin, texDes: gli stessi in LaTeX; riq: xmin, xmax, ymin, ymax;
// meno, piu: la regione in cui il primo membro è minore o maggiore del secondo.
export const CURVE = [
  { id: 'retta', it: 'Retta', en: 'Line', sin: 'y', des: 'x+1', texSin: 'y', texDes: 'x + 1', riq: [-4, 4, -4, 4],
    meno: { it: 'i punti sotto la retta', en: 'the points below the line' }, piu: { it: 'i punti sopra la retta', en: 'the points above the line' } },
  { id: 'parabola-verticale', it: 'Parabola y = x²', en: 'Parabola y = x²', sin: 'y', des: 'x^2', texSin: 'y', texDes: 'x^2', riq: [-4, 4, -2, 6],
    meno: { it: 'i punti sotto la parabola', en: 'the points below the parabola' }, piu: { it: 'i punti sopra la parabola', en: 'the points above the parabola' } },
  { id: 'parabola-orizzontale', it: 'Parabola x = y²', en: 'Parabola x = y²', sin: 'x', des: 'y^2', texSin: 'x', texDes: 'y^2', riq: [-2, 6, -4, 4],
    meno: { it: 'i punti a sinistra della parabola', en: 'the points to the left of the parabola' }, piu: { it: 'i punti a destra della parabola', en: 'the points to the right of the parabola' } },
  { id: 'circonferenza', it: 'Circonferenza', en: 'Circle', sin: 'x^2+y^2', des: '4', texSin: 'x^2 + y^2', texDes: '4', riq: [-4, 4, -4, 4],
    meno: { it: 'i punti interni alla circonferenza', en: 'the points inside the circle' }, piu: { it: 'i punti esterni alla circonferenza', en: 'the points outside the circle' } },
  { id: 'ellisse', it: 'Ellisse', en: 'Ellipse', sin: '(x-1)^2/4+y^2', des: '1', texSin: '\\dfrac{(x-1)^2}{4} + y^2', texDes: '1', riq: [-3, 5, -4, 4],
    meno: { it: "i punti interni all'ellisse", en: 'the points inside the ellipse' }, piu: { it: "i punti esterni all'ellisse", en: 'the points outside the ellipse' } },
  { id: 'iperbole', it: 'Iperbole', en: 'Hyperbola', sin: 'x^2-y^2', des: '1', texSin: 'x^2 - y^2', texDes: '1', riq: [-4, 4, -4, 4], segmenti: '-4,-4,4,4;-4,4,4,-4',
    meno: { it: 'la regione tra i due rami', en: 'the region between the two branches' }, piu: { it: 'le due regioni interne ai rami', en: 'the two regions inside the branches' } },
  { id: 'iperbole-equilatera', it: 'Iperbole xy = 1', en: 'Hyperbola xy = 1', sin: 'x*y', des: '1', texSin: 'xy', texDes: '1', riq: [-4, 4, -4, 4],
    meno: { it: 'la regione tra i due rami', en: 'the region between the two branches' }, piu: { it: 'le due regioni oltre i rami', en: 'the two regions beyond the branches' } },
];
export const SIMBOLI = ['<', '<=', '=', '>=', '>', '!='];
export const TEX_SIMBOLO = { '<': '<', '<=': '\\le', '=': '=', '>=': '\\ge', '>': '>', '!=': '\\ne' };
export const NOME_SIMBOLO = {
  it: { '<': 'minore', '<=': 'minore o uguale', '=': 'uguale', '>=': 'maggiore o uguale', '>': 'maggiore', '!=': 'diverso' },
  en: { '<': 'less than', '<=': 'less than or equal to', '=': 'equal to', '>=': 'greater than or equal to', '>': 'greater than', '!=': 'not equal to' },
};

export const indiceCurva = (id) => Math.max(0, CURVE.findIndex((c) => c.id === id));

// Attributi per disegnaSvg (gli stessi di ::grafico).
export function figuraSimboli(k, simbolo) {
  const c = CURVE[k];
  return { regione: `${c.sin}${simbolo}${c.des}`, xmin: c.riq[0], xmax: c.riq[1], ymin: c.riq[2], ymax: c.riq[3], uguale: 1, ...(c.segmenti ? { segmenti: c.segmenti } : {}) };
}

// Le due righe di lettura sotto la figura.
export function lettureSimboli(k, simbolo, en) {
  const c = CURVE[k], l = en ? 'en' : 'it';
  const maiuscola = (t) => t.charAt(0).toUpperCase() + t.slice(1);
  if (simbolo === '=') return en
    ? { regione: 'Solutions: only the points of the curve.', frontiera: 'The curve is drawn as a solid line.' }
    : { regione: 'Soluzioni: i soli punti della curva.', frontiera: 'La curva è disegnata a tratto continuo.' };
  if (simbolo === '!=') return en
    ? { regione: 'Solutions: every point of the plane except those of the curve.', frontiera: 'Boundary excluded, drawn dashed.' }
    : { regione: 'Soluzioni: tutti i punti del piano tranne quelli della curva.', frontiera: 'Frontiera esclusa, tratteggiata.' };
  const regione = `${en ? 'Solutions' : 'Soluzioni'}: ${(simbolo[0] === '<' ? c.meno : c.piu)[l]}.`;
  const compresa = simbolo.length === 2;
  return { regione: maiuscola(regione), frontiera: en ? (compresa ? 'Boundary included, drawn as a solid line.' : 'Boundary excluded, drawn dashed.') : (compresa ? 'Frontiera compresa, a tratto continuo.' : 'Frontiera esclusa, tratteggiata.') };
}
