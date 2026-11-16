import { AREE_BOCCONI, BOCCONI, PROVE_BOCCONI } from '../src/data/bocconi.mjs';

export function correggiBocconi(domande, risposte, simulazione) {
  const aree = Object.fromEntries(Object.keys(AREE_BOCCONI).map((area) => [
    area, { corrette: 0, errate: 0, omesse: 0, massimo: 0, centesimi: 0 },
  ]));
  const esiti = domande.map((q, i) => {
    const area = aree[q.area];
    const scelta = risposte[i];
    area.massimo++;
    if (scelta === null) {
      area.omesse++;
    } else if (scelta === q.corretta) {
      area.corrette++;
      area.centesimi += 100;
    } else {
      area.errate++;
      if (simulazione) area.centesimi -= q.area === 'critico' && q.scelte.length === 3 ? 33 : 20;
    }
    return { corretta: q.corretta, spiegazione: q.spiegazione };
  });
  return {
    massimo: domande.length,
    punti: Object.values(aree).reduce((somma, area) => somma + area.centesimi, 0) / 100,
    sezioni: Object.entries(aree).map(([area, { centesimi, ...dati }]) => ({ area, ...dati, punti: centesimi / 100 })),
    esiti,
  };
}

export async function gestisciBocconi(req, env, path, h) {
  const risposta = (dati, stato = 200) => h.json(dati, stato, { 'cache-control': 'no-store' });
  if (req.method !== 'POST') return risposta({ errore: 'Method not allowed' }, 405);
  const b = await req.json().catch(() => null);
  const lingua = b?.lingua === 'en' ? 'en' : 'it';
  const messaggio = (it, en) => lingua === 'en' ? en : it;
  const simulazione = b?.prova !== 'diagnostico';
  if (!PROVE_BOCCONI.includes(b?.prova) || !['/api/bocconi/inizia', '/api/bocconi/correggi'].includes(path)) {
    return risposta({ errore: messaggio('Prova non disponibile.', 'Test unavailable.') }, 404);
  }
  const io = simulazione ? await h.utenteCollegato(env, req).catch(() => null) : null;
  if (simulazione && env.VENDITA !== '0' && !io?.materie?.includes(BOCCONI.slug)) {
    return risposta({
      errore: messaggio('Le simulazioni complete sono incluse nel corso Test Bocconi.', 'The full mock tests are included in the Bocconi Test course.'),
      sblocca: `${lingua === 'en' ? '/en' : ''}/${BOCCONI.slug}/sblocca`,
    }, 403);
  }
  const identita = io?.email ?? null;
  const inizia = path.endsWith('/inizia');
  const token = !inizia && typeof b.token === 'string' ? await h.leggiToken(env, b.token) : null;
  if (!inizia && (token?.tipo !== BOCCONI.slug || token.prova !== b.prova ||
      token.lingua !== lingua || token.e !== identita || Date.now() - token.t > 24 * 3600000)) {
    return risposta({ errore: messaggio('La sessione è scaduta. Avvia una nuova prova.', 'This session has expired. Start a new test.') }, 400);
  }
  const dati = await env.ASSETS.fetch(new Request(`https://interno/dati-domande/bocconi/${lingua}/${b.prova}.json`))
    .then((r) => r.ok ? r.json() : null).catch(() => null);
  const domande = dati?.domande;
  if (!Array.isArray(domande) || domande.length !== (simulazione ? BOCCONI.quesiti : BOCCONI.diagnostico)) {
    return risposta({ errore: messaggio('I quesiti non sono disponibili. Riprova tra poco.', 'The questions are unavailable. Please try again in a moment.') }, 503);
  }
  if (inizia) {
    const adesso = Date.now();
    return risposta({
      token: await h.firmaToken(env, { tipo: BOCCONI.slug, prova: b.prova, lingua, e: identita, t: adesso, versione: dati.versione }),
      scadenza: simulazione ? adesso + BOCCONI.minuti * 60000 : null,
      domande: domande.map(({ corretta, spiegazione, ...domanda }) => domanda),
    });
  }
  if (token.versione !== dati.versione) {
    return risposta({ errore: messaggio('La prova è stata aggiornata. Avviala di nuovo.', 'This test has been updated. Please start it again.') }, 409);
  }
  const { risposte } = b;
  if (!Array.isArray(risposte) || risposte.length !== domande.length ||
      risposte.some((r, i) => r !== null && (!Number.isInteger(r) || r < 0 || r >= domande[i].scelte.length))) {
    return risposta({ errore: messaggio('Formato delle risposte non valido.', 'Invalid answer format.') }, 400);
  }
  return risposta(correggiBocconi(domande, risposte, simulazione));
}
