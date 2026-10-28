import katex from 'katex';
// Diagrammi di Venn generati a tempo di build (SVG).
//
// ::venn{tipo="due" zone="ab" titolo="A ∩ B"}
//   tipo      due (predefinito) · tre · incluso (B ⊆ A) · disgiunti
//   zone      zone da colorare, separate da virgole. Ogni zona è l'elenco delle lettere degli insiemi
//             a cui appartiene: a = solo A, ab = A e B, abc = tutti e tre, u = fuori da tutti (complementare).
//             Esempi: unione "a,ab,b"; intersezione "ab"; differenza A \ B "a"; differenza simmetrica "a,b";
//             complementare di A "b,u"; con tre insiemi A ∩ (B ∪ C) "ab,ac,abc".
//   nomi      nomi degli insiemi (predefinito "A,B,C")
//   universo  1 per disegnare l'insieme universo U (automatico se è colorata la zona u)
//   elementi  elementi scritti nelle zone: "a:1,2;ab:3;b:4,5;u:6"
//   titolo    didascalia

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
let contatore = 0;
// Didascalia: testo semplice con formule $…$ rese da KaTeX (frazioni in colonna, radici, esponenti).
const didascalia = (t) => String(t).split(/(\$[^$]+\$)/g).map((p) => (/^\$[^$]+\$$/.test(p)
  ? katex.renderToString(p.slice(1, -1), { throwOnError: false, output: 'html' })
  : esc(p))).join('');
const testoSemplice = (t) => String(t).replace(/\$([^$]+)\$/g, '$1')
  .replace(/\\d?frac\{((?:[^{}]|\{[^{}]*\})*)\}\{((?:[^{}]|\{[^{}]*\})*)\}/g, '($1)/($2)').replace(/\\sqrt/g, '√').replace(/[\\{}]/g, '');

const SCHEMI = {
  due: {
    W: 580, H: 340, U: [40, 20, 500, 300],
    cerchi: { a: [225, 170, 115], b: [355, 170, 115] },
    centri: { a: [170, 170], ab: [290, 170], b: [410, 170], u: [80, 292] },
    nomi: { a: [150, 70], b: [430, 70] },
  },
  tre: {
    W: 580, H: 380, U: [40, 14, 500, 352],
    cerchi: { a: [240, 145, 100], b: [340, 145, 100], c: [290, 232, 100] },
    centri: { a: [205, 110], b: [375, 110], c: [290, 285], ab: [290, 100], ac: [235, 210], bc: [345, 210], abc: [290, 175], u: [78, 340] },
    nomi: { a: [160, 52], b: [420, 52], c: [290, 352] },
  },
  incluso: {
    W: 580, H: 340, U: [40, 20, 500, 300],
    cerchi: { a: [280, 170, 135], b: [325, 185, 62] },
    centri: { a: [205, 145], ab: [325, 185], u: [80, 292] },
    nomi: { a: [175, 58], b: [325, 112] },
  },
  disgiunti: {
    W: 580, H: 340, U: [40, 20, 500, 300],
    cerchi: { a: [180, 170, 95], b: [400, 170, 95] },
    centri: { a: [180, 170], b: [400, 170], u: [80, 292] },
    nomi: { a: [180, 60], b: [400, 60] },
  },
};

export function venn(attr) {
  const id = `v${++contatore}`;
  const S = SCHEMI[attr.tipo] || SCHEMI.due;
  const lettere = Object.keys(S.cerchi);
  const nomi = String(attr.nomi || 'A,B,C').split(',').map((x) => x.trim());
  const zone = String(attr.zone || '').split(',').map((x) => x.trim().toLowerCase()).filter(Boolean);
  const conU = attr.universo === '1' || attr.universo === 1 || attr.universo === true || zone.includes('u') || /(^|;)\s*u:/.test(attr.elementi || '');
  const [ux, uy, uw, uh] = S.U;
  const cerchio = (k, extra = '') => { const [cx, cy, r] = S.cerchi[k]; return `<circle cx="${cx}" cy="${cy}" r="${r}"${extra}/>`; };

  const clip = lettere.map((k) => `<clipPath id="${id}-c${k}">${cerchio(k)}</clipPath>`).join('');
  // Una maschera per zona: bianco dentro gli insiemi della zona, nero negli altri.
  const maschere = zone.map((z, i) => {
    const dentro = z === 'u' ? [] : [...z].filter((k) => lettere.includes(k));
    const fuori = lettere.filter((k) => !dentro.includes(k));
    let bianco;
    if (!dentro.length) bianco = `<rect x="${ux}" y="${uy}" width="${uw}" height="${uh}" fill="#fff"/>`;
    else {
      bianco = cerchio(dentro[dentro.length - 1], ' fill="#fff"');
      for (const k of dentro.slice(0, -1).reverse()) bianco = `<g clip-path="url(#${id}-c${k})">${bianco}</g>`;
    }
    return `<mask id="${id}-m${i}" maskUnits="userSpaceOnUse" x="0" y="0" width="${S.W}" height="${S.H}"><rect x="0" y="0" width="${S.W}" height="${S.H}" fill="#000"/>${bianco}${fuori.map((k) => cerchio(k, ' fill="#000"')).join('')}</mask>`;
  }).join('');
  const colori = zone.map((_, i) => `<rect class="zona" x="0" y="0" width="${S.W}" height="${S.H}" mask="url(#${id}-m${i})"/>`).join('');

  const contorni = lettere.map((k) => cerchio(k, ' class="contorno"')).join('');
  const etichette = lettere.map((k, i) => `<text class="nome-insieme" x="${S.nomi[k][0]}" y="${S.nomi[k][1]}" text-anchor="middle">${esc(nomi[i] ?? k.toUpperCase())}</text>`).join('');
  const universo = conU
    ? `<rect class="universo" x="${ux}" y="${uy}" width="${uw}" height="${uh}" rx="10"/><text class="nome-insieme" x="${ux + 16}" y="${uy + 30}">U</text>`
    : '';
  const elementi = String(attr.elementi || '').split(';').map((x) => x.trim()).filter(Boolean).map((s) => {
    const [z, el] = s.split(':');
    const c = S.centri[z.trim().toLowerCase()];
    return c ? `<text class="elementi" x="${c[0]}" y="${c[1] + 6}" text-anchor="middle">${esc(el.trim().replace(/,/g, ', '))}</text>` : '';
  }).join('');

  const descr = attr.titolo || 'Diagramma di Venn';
  return `<figure class="grafico venn"><svg viewBox="0 0 ${S.W} ${S.H}" role="img" aria-label="${esc(testoSemplice(descr))}">
<defs>${clip}${maschere}</defs>
${universo}${colori}${contorni}${etichette}${elementi}
</svg>${attr.titolo ? `<figcaption>${didascalia(attr.titolo)}</figcaption>` : ''}</figure>`;
}
