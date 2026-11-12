import { PROVE_INGRESSO, provaTolc } from '../src/data/tolc.mjs';
import { correggiSezioneTolc } from '../src/data/tolc-i.mjs';
import PREZZI from '../src/data/prezzi.json' with { type: 'json' };

export async function gestisciTolcI(req, env, path, h) {
  const materia = path.split('/')[2];
  const conf = Object.hasOwn(PROVE_INGRESSO, materia) ? PROVE_INGRESSO[materia] : null;
  const risposta = (d, stato = 200) => h.json(d, stato, { 'cache-control': 'no-store' });
  if (!conf) return risposta({ errore: 'Percorso non trovato.' }, 404);
  if (req.method !== 'POST') return risposta({ errore: 'Metodo non consentito.' }, 405);
  const io = await h.utenteCollegato(env, req).catch(() => null);
  if (Object.hasOwn(PREZZI, materia) && env.VENDITA !== '0' && !io?.materie?.includes(materia)) {
    return risposta({ errore: `La simulazione completa è inclusa nell’accesso ${conf.nome}. Puoi iniziare dai dieci quiz in anteprima.`, sblocca: `/${materia}/sblocca` }, 403);
  }
  const b = await req.json().catch(() => ({}));
  const dati = await h.domandeDi(env, materia, 'it');
  if (!dati?.argomenti) return risposta({ errore: 'Le domande non sono disponibili. Riprova tra poco.' }, 503);
  if (path === `/api/${materia}/inizia`) {
    let prova;
    try { prova = provaTolc(materia, dati.argomenti, b.inglese !== false); }
    catch { return risposta({ errore: 'La banca quesiti è in aggiornamento. Riprova tra poco.' }, 503); }
    const sezioni = prova.map((s) => ({ slug: s.slug, titolo: s.titolo, minuti: s.minuti, ids: s.domande.map((q) => q.id) }));
    const token = await h.firmaToken(env, { tipo: materia, e: io?.email || null, t: Date.now(), sezioni });
    return risposta({ token, sezioni: prova.map((s) => ({ ...s, domande: s.domande.map((q) => ({ id: q.id, testo: q.testo, scelte: q.scelte })) })) });
  }
  if (path === `/api/${materia}/correggi`) {
    const tok = typeof b.token === 'string' ? await h.leggiToken(env, b.token) : null;
    if (tok?.tipo !== materia || tok.e !== (io?.email || null) || !Array.isArray(tok.sezioni) || Date.now() - tok.t > 6 * 3600000) {
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
      const senzaPenalita = conf.esercitazione || (s.slug === 'inglese' && !conf.ingleseObbligatorio);
      const esito = correggiSezioneTolc(domande, rs, senzaPenalita);
      const peso = conf.sezioni.find(sezione => sezione.slug === s.slug)?.peso ?? 1;
      sezioni.push({
        slug: s.slug, titolo: s.titolo, ...esito, punti: esito.punti * peso, massimo: esito.massimo * peso,
        esiti: domande.map((q) => ({ id: q.id, corretta: q.corretta, spiegazione: q.spiegazione })),
      });
    }
    const punti = sezioni.filter(s => conf.ingleseObbligatorio || s.slug !== 'inglese').reduce((n, s) => n + s.punti, 0);
    return risposta({
      sezioni,
      punti: Math.round(punti * 100) / 100,
      massimo: conf.massimo ?? conf.quesiti,
      inglese: conf.ingleseObbligatorio ? null : sezioni.find(s => s.slug === 'inglese')?.punti ?? null,
    });
  }
  return risposta({ errore: 'Percorso non trovato.' }, 404);
}
