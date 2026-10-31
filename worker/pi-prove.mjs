// Banco di prova di Pi (ciclo di miglioramento, revisioni/pi/CICLO-PI.md).
// Ogni mattina il cron di Cloudflare (wrangler.jsonc → triggers) pone a Pi alcune domande di prova
// prese da worker/pi-banco.json e salva le risposte nell'archivio. La pagina /pi/prove le mostra
// (insieme ai contatori anonimi di uso ed errori), così il ciclo del mattino le può valutare.
// Nessun dato degli studenti: solo le domande di prova e numeri aggregati per giorno.
import BANCO from './pi-banco.json';
import { rispondiAssistente } from './assistente.mjs';

const oggi = () => new Date().toISOString().slice(0, 10);

// Casi del giorno: i fissi più una rotazione degli altri, così in pochi giorni si provano tutti.
export function casiDelGiorno(giorno = oggi()) {
  const fissi = BANCO.casi.filter((c) => (BANCO.fissi || []).includes(c.id));
  const altri = BANCO.casi.filter((c) => !(BANCO.fissi || []).includes(c.id));
  const n = Math.min(BANCO.perGiorno || 6, altri.length);
  const d = Math.floor(Date.parse(giorno) / 86400000);
  const scelti = [];
  for (let k = 0; k < n; k++) scelti.push(altri[(d * n + k) % altri.length]);
  return [...fissi, ...scelti.filter((c, i, a) => a.indexOf(c) === i)];
}

export async function eseguiBanco(env, aDO, aPagamento, prezzi, giorno = oggi()) {
  // Le prove non consumano i limiti degli studenti e non entrano nei contatori di uso.
  const finto = async (_env, percorso) => (percorso === '/assistente-conta' ? { ok: true, n: 0 } : { ok: true });
  const righe = [];
  // Se nel banco c'è un modello candidato, gli stessi casi si pongono anche a lui (id con il suffisso ~candidato).
  const giri = [[env, '']];
  if (BANCO.modelloCandidato) giri.push([{ ...env, ASSISTENTE_MODELLO: BANCO.modelloCandidato }, '~candidato']);
  for (const [envGiro, suffisso] of giri) for (const c of casiDelGiorno(giorno)) {
    const corpo = {
      messaggi: [{ ruolo: 'studente', testo: c.domanda }],
      materia: c.materia, argomento: c.argomento, tipo: c.tipo, titoloPagina: c.titoloPagina,
      parte: c.parte || null, lingua: c.lingua || 'it',
    };
    const inizio = Date.now();
    let risposta = '', modello = '', stato = 0;
    try {
      const r = await rispondiAssistente(new Request('https://banco/api/assistente', { method: 'POST', body: JSON.stringify(corpo) }), envGiro, null, finto, aPagamento, prezzi);
      stato = r.status;
      modello = r.headers.get('x-modello') || '';
      const testo = await r.text();
      if ((r.headers.get('content-type') || '').includes('json')) {
        const j = JSON.parse(testo);
        risposta = j.risposta || `ERRORE: ${j.errore || testo}`;
      } else risposta = testo;
    } catch (e) { risposta = `ERRORE: ${String(e?.message || e).slice(0, 300)}`; }
    righe.push({ id: c.id + suffisso, area: c.area, domanda: c.domanda, risposta: risposta.slice(0, 8000), modello, ms: Date.now() - inizio, stato });
  }
  await aDO(env, '/pi-prove-salva', { giorno, righe });
  return righe;
}

const esc = (s) => String(s ?? '').replace(/[&<>]/g, (x) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[x]));

// Pagina /pi/prove (riassunto) e /pi/prove/<id> (risposta completa). Testo semplice in HTML minimo, non indicizzato.
export async function paginaProve(url, env, aDO) {
  const giorno = /^\d{4}-\d{2}-\d{2}$/.test(url.searchParams.get('giorno') || '') ? url.searchParams.get('giorno') : null;
  const d = await aDO(env, '/pi-prove-leggi', { giorno });
  const id = url.pathname.split('/')[3] || '';
  let corpo;
  if (id) {
    const r = (d.prove || []).find((x) => x.id === id);
    const caso = BANCO.casi.find((x) => x.id === id.replace(/~candidato$/, ''));
    corpo = r
      ? `<h1>Prova ${esc(id)} del ${esc(d.giorno)}</h1><p>Area: ${esc(r.area)} · modello: ${esc(r.modello)} · ${r.ms} ms · stato ${r.stato}</p>
<h2>Domanda</h2><pre>${esc(r.domanda)}</pre><h2>Atteso</h2><pre>${esc(caso?.atteso || '')}</pre><h2>Risposta di Pi</h2><pre>${esc(r.risposta)}</pre>`
      : `<h1>Nessuna prova ${esc(id)} il ${esc(d.giorno || '')}</h1>`;
  } else {
    corpo = `<h1>Banco di prova di Pi · ${esc(d.giorno || 'nessuna prova ancora')}</h1>
<p>Giorni con prove: ${esc((d.giorni || []).join(', '))}</p>
<h2>Prove</h2><pre>${(d.prove || []).map((r) => `${r.id} | ${r.area} | stato ${r.stato} | ${r.modello || '-'} | ${r.ms} ms | ${r.risposta.length} caratteri | /pi/prove/${r.id}?giorno=${d.giorno}`).join('\n') || 'nessuna'}</pre>
<h2>Eventi degli ultimi 14 giorni (numeri anonimi)</h2><pre>${(d.eventi || []).map((e) => `${e.giorno} | ${e.evento} | ${e.n}`).join('\n') || 'nessuno'}</pre>
<h2>Uso giornaliero</h2><pre>${(d.uso || []).map((u) => `${u.giorno} | messaggi ${u.messaggi} | persone ${u.persone} | token entrata ${u.tin} | token uscita ${u.tout}`).join('\n') || 'nessuno'}</pre>`;
  }
  return new Response(`<!doctype html><meta charset="utf-8"><meta name="robots" content="noindex,nofollow"><title>Banco di prova di Pi</title><body style="font-family:system-ui;max-width:900px;margin:2rem auto;padding:0 1rem">${corpo}</body>`, {
    headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store', 'x-robots-tag': 'noindex, nofollow' },
  });
}
