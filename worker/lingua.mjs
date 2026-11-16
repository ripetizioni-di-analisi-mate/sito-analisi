import { CODICI_LINGUA, LINGUE_CATALOGO, LINGUE_TRADOTTE, prefissoLingua } from '../src/data/codici-lingua.mjs';

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
    elenco = Object.fromEntries(LINGUE_TRADOTTE.map((l) => [l, new Set(perLingua[l] ?? [])]));
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

// Tutte le lingue accettate dal browser (q > 0), per esempio ['en', 'it'] da «en-GB,en;q=0.9,it;q=0.8».
export function lingueBrowser(intestazione) {
  return (intestazione || '').split(',').map((pezzo) => {
    const [tag, ...param] = pezzo.trim().split(';');
    const q = Number((param.find((x) => x.trim().startsWith('q=')) || 'q=1').trim().slice(2));
    return Number.isFinite(q) && q > 0 ? tag.trim().toLowerCase().split('-')[0] : '';
  }).filter((t) => t && t !== '*');
}

// Paesi in cui il sito resta in italiano anche con il telefono in un'altra lingua (16/11/2026: molti studenti
// italiani con il telefono in inglese finivano sulla versione inglese). Il paese lo dà Cloudflare (req.cf.country).
const PAESI_ITALIANI = new Set(['IT', 'SM', 'VA']);
export function visitatoreItaliano(req) {
  return PAESI_ITALIANI.has(String(req.cf?.country || '').toUpperCase()) || lingueBrowser(req.headers.get('accept-language')).includes('it');
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
  const sceltaEsplicita = CODICI_LINGUA.includes(scelta);
  // Senza una scelta esplicita: in Italia, o con l'italiano fra le lingue del browser, resta l'italiano.
  const voluta = sceltaEsplicita ? scelta : visitatoreItaliano(req) ? 'it' : CODICI_LINGUA.includes(browser) ? browser : browser ? 'en' : null;
  if (!voluta) return null;

  const prefisso = prefissoLingua(percorso);
  const corrente = prefisso.slice(1) || 'it';
  if (corrente === voluta) return null;
  const italiano = percorso.slice(prefisso.length) || '/';
  if (ESCLUSI.test(italiano)) return null;
  const tradotte = await pagineTradotte(env);
  // Un link a un catalogo tradotto mantiene la lingua in assenza di una scelta esplicita.
  if (LINGUE_CATALOGO.includes(corrente) && (!tradotte[corrente]?.has(italiano) || !sceltaEsplicita)) return null;
  const disponibile = (lingua) => lingua === 'it' || tradotte[lingua]?.has(italiano);
  // I cataloghi tradotti sono disponibili soltanto sulle pagine localizzate.
  const lingua = disponibile(voluta) ? voluta : LINGUE_CATALOGO.includes(voluta) && corrente === 'it' && disponibile('en') ? 'en' : corrente;
  if (lingua === corrente || (corrente === 'en' && lingua === 'it' && !tradotte.en?.has(italiano))) return null;

  const meta = new URL(url);
  meta.pathname = lingua === 'it' ? italiano : `/${lingua}${italiano === '/' ? '' : italiano}`;
  return new Response(null, {
    status: 302,
    headers: { location: meta.pathname + meta.search + meta.hash, 'cache-control': 'private, no-store', vary: 'Accept-Language, Cookie' },
  });
}
