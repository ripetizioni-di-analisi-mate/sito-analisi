import { CATALOGHI_STUDIO, CATALOGO_PREDEFINITO, PARAMETRO_CATALOGO, catalogoDiIngresso, catalogoStudio } from '../src/data/cataloghi-studio.mjs';
import { navigazioneVisitatore } from './lingua.mjs';

const HOME = new Set(['/', '/en']);
const INGRESSI = new Set([...HOME, '/de', ...Object.values(CATALOGHI_STUDIO).map(c => c.percorso)]);
const COOKIE = 'catalogo_studio';
const DURATA_PREFERENZA = 365 * 24 * 60 * 60;

export function versoCatalogoStudio(req, url) {
  if (!navigazioneVisitatore(req)) return null;
  const percorso = url.pathname.replace(/\.html$/, '').replace(/\/index$/, '').replace(/\/$/, '') || '/';
  if (!INGRESSI.has(percorso)) return null;

  const scelta = url.searchParams.get(PARAMETRO_CATALOGO);
  const manuale = catalogoStudio(scelta);
  if (manuale) {
    const meta = new URL(url);
    const lingua = meta.searchParams.get('lingua');
    meta.pathname = scelta === CATALOGO_PREDEFINITO && ['de', 'en'].includes(lingua) ? `/${lingua}` : manuale.percorso;
    meta.searchParams.delete(PARAMETRO_CATALOGO);
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
