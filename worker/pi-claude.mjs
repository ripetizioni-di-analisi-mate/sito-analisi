// Pi su Claude (richiesta di Carmine del 17/11/2026): il Pi generale del sito risponde con Claude Sonnet 5.5,
// poi Claude Haiku 5.5, poi i modelli gratuiti di Workers AI (worker/assistente.mjs).
// Chiave: segreto ANTHROPIC_API_KEY del Worker (crediti API del piano di Carmine, 200 $ al mese, condivisi con lo Studio guidato).
// Tetto di spesa: se la spesa di Claude di oggi (Pi e Studio guidato insieme) supera PI_CLAUDE_USD_GIORNO (predefinito 5 $)
// oppure quella del mese supera PI_CLAUDE_USD_MESE (predefinito 150 $), Pi usa solo i modelli gratuiti fino al giorno dopo.
// Con PI_CLAUDE = "0" Claude si spegne per Pi.
// Token e chiamate finiscono nel contatore anonimo sg_ia (modello con il prefisso «pi:»), senza testi né dati della persona.

export const MODELLI_PI_CLAUDE = ['claude-sonnet-5-5', 'claude-haiku-5-5'];

// Dollari per milione di token: entrata, uscita, lettura e scrittura della cache.
const PREZZI = {
  'claude-sonnet-5-5': [2, 10, 0.1, 2.5],
  'claude-haiku-5-5': [0.1, 0.5, 0.01, 0.125],
};

// Token di entrata «equivalenti» al prezzo pieno, così il contatore esistente (tin, tout) dà il costo giusto anche con la cache.
export function entrataEquivalente(modello, u = {}) {
  const [pin, , pread, pwrite] = PREZZI[modello] || [1, 1, 1, 1];
  return Math.round((u.input_tokens || 0) + (u.cache_read_input_tokens || 0) * (pread / pin) + (u.cache_creation_input_tokens || 0) * (pwrite / pin));
}

// Costo in dollari delle righe del contatore (modello con o senza il prefisso «pi:»).
export function costoRighe(righe = []) {
  let usd = 0;
  for (const r of righe) {
    const p = PREZZI[String(r.modello || '').replace(/^pi:/, '')];
    if (p) usd += ((Number(r.tin) || 0) * p[0] + (Number(r.tout) || 0) * p[1]) / 1e6;
  }
  return usd;
}

// true se Pi può usare Claude adesso.
export async function claudeDisponibile(env, aDO) {
  if (!env.ANTHROPIC_API_KEY || env.PI_CLAUDE === '0') return false;
  const maxGiorno = Number(env.PI_CLAUDE_USD_GIORNO) || 5;
  const maxMese = Number(env.PI_CLAUDE_USD_MESE) || 150;
  try {
    const { giorno = [], mese = [] } = await aDO(env, '/sg-ia-spesa', {});
    return costoRighe(giorno) < maxGiorno && costoRighe(mese) < maxMese;
  } catch { return true; }
}

// Messaggi nel formato dell'API Anthropic; la foto (data URL) va nell'ultimo messaggio dello studente.
export function messaggiClaude(messaggi, foto) {
  // L'API vuole che la conversazione cominci con un messaggio dello studente.
  const da = messaggi.findIndex((m) => m.role === 'user');
  const out = messaggi.slice(Math.max(0, da)).map((m) => ({ role: m.role, content: m.content }));
  if (foto) {
    const [, tipo, dati] = foto.match(/^data:(image\/(?:jpeg|png|webp));base64,(.*)$/) || [];
    if (tipo) {
      const u = out[out.length - 1];
      u.content = [{ type: 'image', source: { type: 'base64', media_type: tipo, data: dati } }, { type: 'text', text: u.content }];
    }
  }
  return out;
}

// Chiede la risposta a un modello Claude in streaming. Restituisce una Response di testo semplice che arriva a pezzi,
// oppure null se il modello dà errore o non scrive nulla (allora si passa al modello successivo).
// fine(modello, tinEquivalenti, tout) viene chiamata quando la risposta è finita.
export async function chiediClaude(env, modello, { fisso, variabile, messaggi, maxTokens, intestazioni = {}, fine, fetchFn = fetch }) {
  const r = await fetchFn('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'x-api-key': env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
    body: JSON.stringify({
      model: modello, max_tokens: maxTokens, stream: true,
      // Le istruzioni e le informazioni sul sito sono uguali per tutti: si mettono in cache. Il contesto della pagina cambia.
      system: [{ type: 'text', text: fisso, cache_control: { type: 'ephemeral' } }, ...(variabile ? [{ type: 'text', text: variabile }] : [])],
      messages: messaggi,
    }),
  });
  if (!r.ok || !r.body) { console.log('Pi', modello, r.status, (await r.text().catch(() => '')).slice(0, 300)); return null; }

  const lettore = r.body.getReader();
  const dec = new TextDecoder();
  const enc = new TextEncoder();
  let resto = '', uso = {}, tout = 0, chiuso = false;
  // Legge gli eventi fino al prossimo pezzo di testo; '' a fine risposta.
  const prossimo = async () => {
    for (;;) {
      let i;
      while ((i = resto.indexOf('\n\n')) >= 0) {
        const blocco = resto.slice(0, i); resto = resto.slice(i + 2);
        const riga = blocco.split('\n').find((x) => x.startsWith('data:'));
        if (!riga) continue;
        let d; try { d = JSON.parse(riga.slice(5).trim()); } catch { continue; }
        if (d.type === 'message_start') uso = d.message?.usage || {};
        else if (d.type === 'message_delta') tout = d.usage?.output_tokens || tout;
        else if (d.type === 'content_block_delta' && d.delta?.type === 'text_delta' && d.delta.text) return d.delta.text;
        else if (d.type === 'error') throw new Error(d.error?.message || 'errore del modello');
      }
      const { value, done } = await lettore.read();
      if (done) return '';
      resto += dec.decode(value, { stream: true });
    }
  };
  const chiudi = async () => {
    if (chiuso) return; chiuso = true;
    await fine?.(modello, entrataEquivalente(modello, uso), tout);
  };

  // Si aspetta il primo pezzo di testo: se non arriva, si passa al modello successivo.
  let primo;
  try { primo = await prossimo(); } catch (e) { console.log('Pi', modello, String(e?.message || e).slice(0, 200)); await chiudi(); return null; }
  if (!primo) { await chiudi(); return null; }

  const corpo = new ReadableStream({
    start(c) { c.enqueue(enc.encode(primo)); },
    async pull(c) {
      try {
        const t = await prossimo();
        if (t) { c.enqueue(enc.encode(t)); return; }
      } catch (e) { console.log('Pi', modello, 'interrotto', String(e?.message || e).slice(0, 200)); }
      await chiudi(); c.close();
    },
    async cancel(m) { await chiudi(); return lettore.cancel(m); },
  });
  return new Response(corpo, { headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'no-store', 'x-modello': modello, 'x-accel-buffering': 'no', ...intestazioni } });
}
