import { creaProvaTolc, correggiSezioneTolc } from '../src/data/tolc-i.mjs';

export async function gestisciTolcI(req, env, path, h) {
  const risposta = (d, stato = 200) => h.json(d, stato, { 'cache-control': 'no-store' });
  if (req.method !== 'POST') return risposta({ errore: 'Metodo non consentito.' }, 405);
  const io = await h.utenteCollegato(env, req).catch(() => null);
  if (env.VENDITA !== '0' && !io?.materie?.includes('tolc-i')) {
    return risposta({ errore: 'La simulazione completa è inclusa nell’accesso TOLC-I. Puoi iniziare dai dieci quiz in anteprima.', sblocca: '/tolc-i/sblocca' }, 403);
  }
  const b = await req.json().catch(() => ({}));
  const dati = await h.domandeDi(env, 'tolc-i', 'it');
  if (!dati?.argomenti) return risposta({ errore: 'Le domande non sono disponibili. Riprova tra poco.' }, 503);
  if (path === '/api/tolc-i/inizia') {
    let prova;
    try { prova = creaProvaTolc(dati.argomenti, b.inglese !== false); }
    catch { return risposta({ errore: 'La banca quesiti è in aggiornamento. Riprova tra poco.' }, 503); }
    const sezioni = prova.map((s) => ({ slug: s.slug, titolo: s.titolo, minuti: s.minuti, ids: s.domande.map((q) => q.id) }));
    const token = await h.firmaToken(env, { tipo: 'tolc-i', e: io?.email || null, t: Date.now(), sezioni });
    return risposta({ token, sezioni: prova.map((s) => ({ ...s, domande: s.domande.map((q) => ({ id: q.id, testo: q.testo, scelte: q.scelte })) })) });
  }
  if (path === '/api/tolc-i/correggi') {
    const tok = typeof b.token === 'string' ? await h.leggiToken(env, b.token) : null;
    if (tok?.tipo !== 'tolc-i' || tok.e !== (io?.email || null) || !Array.isArray(tok.sezioni) || Date.now() - tok.t > 6 * 3600000) {
      return risposta({ errore: 'La sessione non è più valida. Avvia una nuova simulazione.' }, 400);
    }
    if (!Array.isArray(b.risposte) || b.risposte.length !== tok.sezioni.length) return risposta({ errore: 'Risposte incomplete.' }, 400);
    const sezioni = [];
    for (let i = 0; i < tok.sezioni.length; i++) {
      const s = tok.sezioni[i];
      const domande = s.ids.map((id) => dati.argomenti[id.split('/')[0]]?.find((q) => q.id === id));
      const rs = b.risposte[i];
      if (domande.some((q) => !q) || !Array.isArray(rs) || rs.length !== domande.length || rs.some((r, j) => r !== null && (!Number.isInteger(r) || r < 0 || r >= domande[j].scelte.length))) {
        return risposta({ errore: 'Formato delle risposte non valido.' }, 400);
      }
      sezioni.push({ slug: s.slug, titolo: s.titolo, ...correggiSezioneTolc(domande, rs, s.slug === 'inglese'), esiti: domande.map((q) => ({ id: q.id, corretta: q.corretta, spiegazione: q.spiegazione })) });
    }
    return risposta({ sezioni, punti: sezioni.filter((s) => s.slug !== 'inglese').reduce((n, s) => n + s.punti, 0), massimo: 50, inglese: sezioni.find((s) => s.slug === 'inglese')?.punti ?? null });
  }
  return risposta({ errore: 'Percorso non trovato.' }, 404);
}
