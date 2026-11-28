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
  'script,style,button,form,iframe,svg,img,video,canvas,nav,dialog,.chiedi-pi,.svolgimento-riservato,.passi-comandi,.fine-traccia,[hidden]';
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
  if (tag === 'br') return '<br>';
  const pezzo = Array.from(n.childNodes, frammento).join('');
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
