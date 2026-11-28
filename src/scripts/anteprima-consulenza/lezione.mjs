import katex from 'katex';

export const esc = (value) =>
  String(value ?? '').replace(
    /[&<>"']/g,
    (ch) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      })[ch]
  );

const ammessi = new Set([
  'p',
  'strong',
  'em',
  'b',
  'i',
  'small',
  'ol',
  'ul',
  'li',
  'sub',
  'sup',
  'code',
  'pre',
  'table',
  'thead',
  'tbody',
  'tr',
  'th',
  'td',
  'blockquote'
]);
const esclusi =
  'script,style,button,form,iframe,video,canvas,nav,dialog,.chiedi-pi,.svolgimento-riservato,.passi-comandi,.fine-traccia,[hidden]';

// I disegni didattici usano classi del sito e riferimenti interni (frecce, campiture).
// Gli ID dell'estratto sono distinti da quelli della scheda visibile sotto il dialogo.
const forme = new Set(
  'svg g defs marker pattern clipPath linearGradient radialGradient stop rect circle ellipse line polyline polygon path text tspan title desc use'.split(
    ' '
  )
);
const attributi = new Set(
  'viewBox preserveAspectRatio x y x1 x2 y1 y2 cx cy r rx ry dx dy width height points d transform class role aria-label fill stroke color opacity fill-opacity stroke-opacity stroke-width stroke-linejoin stroke-linecap stroke-dasharray fill-rule text-anchor dominant-baseline font-family font-weight font-style font-size marker-start marker-mid marker-end orient markerWidth markerHeight refX refY markerUnits patternUnits patternTransform offset stop-color stop-opacity clip-path'.split(
    ' '
  )
);
let nFigura = 0;
function forma(n, prefisso) {
  if (n.nodeType === 3) return esc(n.textContent);
  if (n.nodeType !== 1 || !forme.has(n.localName)) return '';
  const attrs = [];
  for (const a of n.attributes) {
    let key = a.name,
      val = a.value;
    if (key === 'id' && /^[\w.-]+$/.test(val)) val = prefisso + val;
    else if (key === 'href' || key === 'xlink:href') {
      if (!/^#[\w.-]+$/.test(val)) continue;
      key = 'href';
      val = '#' + prefisso + val.slice(1);
    } else if (!attributi.has(key)) continue;
    if (/url\s*\(/i.test(val)) {
      const ref = /^url\(#([\w.-]+)\)$/.exec(val);
      if (!ref) continue;
      val = 'url(#' + prefisso + ref[1] + ')';
    }
    attrs.push(key + '="' + esc(val) + '"');
  }
  return (
    '<' +
    n.localName +
    ' ' +
    attrs.join(' ') +
    '>' +
    Array.from(n.childNodes, (figlio) => forma(figlio, prefisso)).join('') +
    '</' +
    n.localName +
    '>'
  );
}
function frammento(n) {
  if (n.nodeType === 3) return esc(n.textContent);
  if (n.nodeType !== 1 || n.matches(esclusi)) return '';
  const tex = n.getAttribute('data-tex');
  if (tex)
    return katex.renderToString(tex, {
      displayMode: n.classList.contains('katex-display'),
      throwOnError: false,
      trust: false,
      output: 'htmlAndMathml'
    });
  const tag = n.tagName.toLowerCase();
  if (tag === 'svg') return forma(n, 'pa-fig-' + ++nFigura + '-');
  if (tag === 'img') {
    const src = n.getAttribute('src') || '';
    if (!/^\/(?!\/)/.test(src)) return esc(n.getAttribute('alt'));
    const url = new URL(src, location.origin);
    if (url.origin !== location.origin) return esc(n.getAttribute('alt'));
    return '<img src="' + esc(url.pathname) + '" alt="' + esc(n.getAttribute('alt')) + '" loading="lazy">';
  }
  if (tag === 'br') return '<br>';
  const pezzo = Array.from(n.childNodes, frammento).join('');
  if (tag === 'figure') return '<figure class="pa-figura ' + esc(n.className) + '">' + pezzo + '</figure>';
  if (tag === 'figcaption') return '<figcaption>' + pezzo + '</figcaption>';
  return ammessi.has(tag) ? '<' + tag + '>' + pezzo + '</' + tag + '>' : pezzo;
}

export function estraiScheda(doc, richiesta) {
  const studio = doc.querySelector('main .testo-studio');
  const titolo = doc.querySelector('main h1')?.textContent.trim() || '';
  if (!studio || !titolo || studio.querySelector('.svolgimento-riservato')) return null;
  if (richiesta.scheda) {
    for (const testa of studio.querySelectorAll(':scope > h2')) {
      let soluzione = false;
      const traccia = [],
        passi = [];
      for (let n = testa.nextElementSibling; n && n.tagName !== 'H2'; n = n.nextElementSibling) {
        if (n.classList.contains('fine-traccia')) {
          soluzione = true;
          continue;
        }
        const parte = frammento(n).trim();
        if (parte) (soluzione ? passi : traccia).push(parte);
      }
      if (traccia.length && passi.length) return { titolo, traccia: traccia.join(''), passi };
    }
  }
  const introduzione = doc.querySelector('main .sommario') || studio.querySelector('p');
  return introduzione ? { titolo, traccia: frammento(introduzione), passi: [] } : null;
}

const risorse = new Map();
export function caricaScheda(arg, lingua) {
  const url = new URL(arg.scheda || arg.teoria, location.origin);
  url.searchParams.set('lingua', lingua);
  if (url.origin !== location.origin) return Promise.resolve(null);
  const chiave = url.href;
  if (!risorse.has(chiave)) {
    const richiesta = async () => {
      const fine = new AbortController();
      const timer = setTimeout(() => fine.abort(), 9500);
      try {
        const res = await fetch(url, { signal: fine.signal, credentials: 'same-origin' });
        if (!res.ok || new URL(res.url || url).pathname !== url.pathname) return null;
        const doc = new DOMParser().parseFromString(await res.text(), 'text/html');
        return estraiScheda(doc, arg);
      } finally {
        clearTimeout(timer);
      }
    };
    risorse.set(
      chiave,
      richiesta()
        .catch(() => null)
        .then((dato) => {
          if (!dato) risorse.delete(chiave);
          return dato;
        })
    );
  }
  return risorse.get(chiave);
}
