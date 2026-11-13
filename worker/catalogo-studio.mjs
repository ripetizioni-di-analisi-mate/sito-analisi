import { CATALOGHI_STUDIO, CATALOGO_PREDEFINITO, CATALOGO_USA_PUBBLICO, PARAMETRO_CATALOGO, catalogoDiIngresso, catalogoStudio, percorsoCatalogoUsa } from '../src/data/cataloghi-studio.mjs';
import { LINGUE_CATALOGO, LINGUE_TRADOTTE, LINGUE_TRADOTTE_PUBBLICHE, prefissoLingua } from '../src/data/codici-lingua.mjs';
import { navigazioneVisitatore } from './lingua.mjs';

const HOME = new Set(['/', '/en']);
const INGRESSI = new Set([...HOME, ...LINGUE_CATALOGO.map((lingua) => `/${lingua}`), ...Object.values(CATALOGHI_STUDIO).map(c => c.percorso)]);
const COOKIE = 'catalogo_studio';
const DURATA_PREFERENZA = 365 * 24 * 60 * 60;

export function versoCatalogoStudio(req, url) {
  if (!CATALOGO_USA_PUBBLICO && percorsoCatalogoUsa(url.pathname)) {
    if (req.method !== 'GET' && req.method !== 'HEAD') return new Response(null, { status: 404 });
    const meta = new URL(url);
    meta.pathname = LINGUE_TRADOTTE_PUBBLICHE ? '/en' : '/';
    meta.searchParams.delete(PARAMETRO_CATALOGO);
    if (!LINGUE_TRADOTTE_PUBBLICHE) meta.searchParams.delete('lingua');
    return new Response(null, {
      status: 302,
      headers: { location: meta.pathname + meta.search, 'cache-control': 'private, no-store' },
    });
  }

  if (!LINGUE_TRADOTTE_PUBBLICHE && prefissoLingua(url.pathname)) return null;
  if (!navigazioneVisitatore(req)) return null;
  const percorso = url.pathname.replace(/\.html$/, '').replace(/\/index$/, '').replace(/\/$/, '') || '/';
  if (!INGRESSI.has(percorso)) return null;

  const scelta = url.searchParams.get(PARAMETRO_CATALOGO);
  const manuale = catalogoStudio(scelta);
  if (manuale) {
    const meta = new URL(url);
    const lingua = meta.searchParams.get('lingua');
    meta.pathname = LINGUE_TRADOTTE_PUBBLICHE && scelta === CATALOGO_PREDEFINITO && LINGUE_TRADOTTE.includes(lingua) ? `/${lingua}` : manuale.percorso;
    meta.searchParams.delete(PARAMETRO_CATALOGO);
    if (!LINGUE_TRADOTTE_PUBBLICHE) meta.searchParams.delete('lingua');
    return new Response(null, {
      status: 303,
      headers: {
        location: meta.pathname + meta.search,
        'cache-control': 'private, no-store',
        'set-cookie': `${COOKIE}=${scelta}; Path=/; Max-Age=${DURATA_PREFERENZA}; HttpOnly; Secure; SameSite=Lax`,
      },
    });
  }

  if (!HOME.has(percorso) || url.searchParams.has('lingua')) return null;
  const preferenza = (req.headers.get('cookie') || '').match(/(?:^|;\s*)catalogo_studio=([A-Z]{2})(?=;|$)/)?.[1];
  const catalogo = catalogoDiIngresso(req.cf?.country, preferenza);
  if (catalogo.percorso === '/') return null;

  return new Response(null, {
    status: 302,
    headers: { location: catalogo.percorso + url.search, 'cache-control': 'private, no-store', vary: 'Cookie' },
  });
}
