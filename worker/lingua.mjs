// Preferenza esplicita nel cookie, altrimenti lingua del browser.
// Il Worker reindirizza solo a pagine presenti nell'indice di build.
const NON_PERSONE = /bot|crawl|spider|slurp|preview|facebookexternalhit|meta-externalagent|headless|lighthouse|curl|wget|python|httpclient|google-|mediapartners|apis-google|feedfetcher|validator|monitor/i;
// Percorsi che non sono pagine da leggere: lì la lingua non si tocca.
const ESCLUSI = /^\/(api|admin|vetrine|dati-domande|dati-lingue|pi|pdf|risorse)(\/|$)|\.[a-z0-9]+$/i;

let elenco = null;
async function pagineTradotte(env) {
  if (elenco) return elenco;
  try {
    const r = await env.ASSETS.fetch(new Request('https://interno/dati-lingue.json'));
    if (!r.ok) return {};
    const dati = await r.json();
    // I primi build pubblicavano direttamente l'elenco inglese.
    const perLingua = Array.isArray(dati) ? { en: dati } : dati;
    elenco = Object.fromEntries(['en', 'de'].map((l) => [l, new Set(perLingua[l] ?? [])]));
    return elenco;
  } catch { return {}; }
}

function leggiCookie(req, nome) {
  const m = (req.headers.get('cookie') || '').match(new RegExp(`(?:^|;\\s*)${nome}=([^;]+)`));
  try { return m ? decodeURIComponent(m[1]) : null; } catch { return null; }
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

  const scelta = leggiCookie(req, 'lingua');
  const browser = linguaBrowser(req.headers.get('accept-language'));
  const voluta = ['it', 'en', 'de'].includes(scelta) ? scelta
    : browser === 'it' || browser === 'de' ? browser : browser ? 'en' : null;
  if (!voluta) return null;

  const prefisso = percorso.match(/^\/(en|de)(?=\/|$)/)?.[0] ?? '';
  const corrente = prefisso.slice(1) || 'it';
  if (corrente === voluta) return null;
  const italiano = percorso.slice(prefisso.length) || '/';
  if (ESCLUSI.test(italiano)) return null;
  const tradotte = await pagineTradotte(env);
  // Un link tedesco aperto direttamente resta in tedesco se non è stata impostata una lingua.
  if (corrente === 'de' && (!tradotte.de?.has(italiano) || !['it', 'en'].includes(scelta))) return null;
  const disponibile = (lingua) => lingua === 'it' || tradotte[lingua]?.has(italiano);
  // Il tedesco è disponibile solo sulle pagine già localizzate. Altrove resta il comportamento IT/EN.
  const lingua = disponibile(voluta) ? voluta : voluta === 'de' && corrente === 'it' && disponibile('en') ? 'en' : corrente;
  if (lingua === corrente || (corrente === 'en' && lingua === 'it' && !tradotte.en?.has(italiano))) return null;

  const meta = new URL(url);
  meta.pathname = lingua === 'it' ? italiano : `/${lingua}${italiano === '/' ? '' : italiano}`;
  return new Response(null, {
    status: 302,
    headers: { location: meta.pathname + meta.search + meta.hash, 'cache-control': 'private, no-store', vary: 'Accept-Language, Cookie' },
  });
}
