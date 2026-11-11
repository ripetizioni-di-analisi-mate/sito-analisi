// Lingua del visitatore: chi arriva con il browser in un'altra lingua vede subito la pagina inglese,
// chi ha il browser in italiano la pagina italiana.
// - Se il visitatore ha scelto la lingua con il tasto IT/EN, vale la sua scelta (cookie «lingua»).
// - Altrimenti decide la prima lingua del browser (intestazione Accept-Language): italiano → italiano,
//   qualunque altra lingua → inglese, perché le pagine esistono solo in queste due lingue.
// - Si cambia pagina solo se esiste la versione tradotta (elenco dist/dati-lingue.json, scripts/lingue.mjs).
// - Motori di ricerca e altri programmi non vengono mai spostati: devono poter leggere entrambe le versioni.

const NON_PERSONE = /bot|crawl|spider|slurp|preview|facebookexternalhit|meta-externalagent|headless|lighthouse|curl|wget|python|httpclient|google-|mediapartners|apis-google|feedfetcher|validator|monitor/i;
// Percorsi che non sono pagine da leggere: lì la lingua non si tocca.
const ESCLUSI = /^\/(api|admin|vetrine|dati-domande|dati-lingue|pi|pdf|risorse)(\/|$)|\.[a-z0-9]+$/i;

let elenco = null;
async function pagineTradotte(env) {
  if (elenco) return elenco;
  try {
    const r = await env.ASSETS.fetch(new Request('https://interno/dati-lingue.json'));
    elenco = new Set(r.ok ? await r.json() : []);
  } catch { elenco = new Set(); }
  return elenco;
}

function leggiCookie(req, nome) {
  const m = (req.headers.get('cookie') || '').match(new RegExp(`(?:^|;\\s*)${nome}=([^;]+)`));
  return m ? decodeURIComponent(m[1]) : null;
}

// Prima lingua del browser in ordine di preferenza (q più alto), per esempio «de» da «de-DE,de;q=0.9,en;q=0.8».
export function linguaBrowser(intestazione) {
  const voci = (intestazione || '').split(',').map((pezzo, i) => {
    const [tag, ...param] = pezzo.trim().split(';');
    const q = Number((param.find((x) => x.trim().startsWith('q=')) || 'q=1').trim().slice(2));
    return { tag: tag.trim().toLowerCase(), q: Number.isFinite(q) ? q : 0, i };
  }).filter((v) => v.tag && v.tag !== '*' && v.q > 0);
  voci.sort((a, b) => b.q - a.q || a.i - b.i);
  return voci[0]?.tag.split('-')[0] || null;
}

export function navigazioneVisitatore(req) {
  const ua = req.headers.get('user-agent') || '';
  return req.method === 'GET' && Boolean(ua) && !NON_PERSONE.test(ua);
}

// Restituisce la risposta di reindirizzamento, oppure null se la pagina va servita così com'è.
export async function versoLaLinguaGiusta(req, env, url) {
  if (!navigazioneVisitatore(req)) return null;
  if (url.searchParams.has('lingua')) return null; // scelta esplicita nell'indirizzo: si rispetta
  const percorso = url.pathname.replace(/\.html$/, '').replace(/\/index$/, '').replace(/\/$/, '') || '/';
  if (ESCLUSI.test(percorso)) return null;

  const scelta = leggiCookie(req, 'lingua');
  const voluta = scelta === 'it' || scelta === 'en'
    ? scelta
    : (() => { const l = linguaBrowser(req.headers.get('accept-language')); return l ? (l === 'it' ? 'it' : 'en') : null; })();
  if (!voluta) return null;

  const inglese = /^\/en(\/|$)/.test(percorso);
  const italiano = inglese ? percorso.replace(/^\/en/, '') || '/' : percorso;
  if (voluta === 'en' && inglese) return null;
  if (voluta === 'it' && !inglese) return null;
  if (!(await pagineTradotte(env)).has(italiano)) return null;

  const meta = new URL(url);
  meta.pathname = voluta === 'en' ? (italiano === '/' ? '/en' : `/en${italiano}`) : italiano;
  return new Response(null, {
    status: 302,
    headers: { location: meta.pathname + meta.search + meta.hash, 'cache-control': 'private, no-store', vary: 'Accept-Language, Cookie' },
  });
}
