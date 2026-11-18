// Compatibilità con Claude (richiesta di Carmine del 18/11/2026: «usa Claude, così sono sicuro che stimerà
// per bene i compiti»). Il confronto e la lettura delle foto usano Claude Sonnet 5.5, poi Claude Haiku 5.5,
// poi i modelli gratuiti di Workers AI (worker/compatibilita.mjs).
// Chiave: segreto ANTHROPIC_API_KEY del Worker, la stessa di Pi e dello Studio guidato. La spesa finisce nello
// stesso contatore anonimo (sg_ia, modello con il prefisso «compat:») e rispetta lo stesso tetto di Pi
// (PI_CLAUDE_USD_GIORNO, PI_CLAUDE_USD_MESE): oltre il tetto si torna ai modelli gratuiti fino al giorno dopo.
// Con COMPATIBILITA_CLAUDE = "0" Claude si spegne per la compatibilità.
import { costoRighe, entrataEquivalente } from './pi-claude.mjs';

export const MODELLI_COMPAT_CLAUDE = ['claude-sonnet-5-5', 'claude-haiku-5-5'];
export const eClaude = (modello) => /^claude-/.test(modello);

// Esito dell'ultimo controllo della spesa, valido per un minuto in questa istanza del Worker.
const stato = { quando: 0, ok: false };

// true se la compatibilità può usare Claude adesso. Va chiamata all'inizio di ogni richiesta.
export async function aggiornaClaude(env, aDO) {
  if (!env.ANTHROPIC_API_KEY || env.COMPATIBILITA_CLAUDE === '0') { stato.ok = false; stato.quando = 0; return false; }
  if (Date.now() - stato.quando < 60000) return stato.ok;
  const maxGiorno = Number(env.PI_CLAUDE_USD_GIORNO) || 5;
  const maxMese = Number(env.PI_CLAUDE_USD_MESE) || 150;
  try {
    const { giorno = [], mese = [] } = await aDO(env, '/sg-ia-spesa', {});
    stato.ok = costoRighe(giorno) < maxGiorno && costoRighe(mese) < maxMese;
  } catch { stato.ok = true; }
  stato.quando = Date.now();
  return stato.ok;
}
export const claudeAttivo = (env) => Boolean(env.ANTHROPIC_API_KEY) && env.COMPATIBILITA_CLAUDE !== '0' && !env.SENZA_CLAUDE && stato.ok;

// Messaggi nel formato di Workers AI → richiesta per l'API Anthropic.
// Le istruzioni con il catalogo (messaggio di sistema) sono uguali per ogni documento della materia: vanno in cache.
function richiesta(modello, input, impegno) {
  const sistema = input.messages.filter((m) => m.role === 'system').map((m) => String(m.content)).join('\n\n');
  const messaggi = input.messages.filter((m) => m.role !== 'system').map((m) => {
    if (typeof m.content === 'string') return { role: m.role, content: m.content };
    const parti = [];
    for (const p of m.content) {
      if (p.type === 'text') parti.push({ type: 'text', text: p.text });
      else if (p.type === 'image_url') {
        const [, tipo, dati] = String(p.image_url?.url || '').match(/^data:(image\/(?:jpeg|png|webp));base64,(.*)$/) || [];
        if (tipo) parti.unshift({ type: 'image', source: { type: 'base64', media_type: tipo, data: dati } });
      }
    }
    return { role: m.role, content: parti };
  });
  return {
    model: modello,
    // max_tokens comprende anche il ragionamento, che non si vede: serve margine oltre le righe della risposta.
    max_tokens: Math.max(Number(input.max_tokens) || 0, 3000) + 1500,
    output_config: { effort: impegno },
    ...(sistema ? { system: [{ type: 'text', text: sistema, cache_control: { type: 'ephemeral' } }] } : {}),
    messages: messaggi,
  };
}

// Chiama Claude. Con input.stream restituisce un flusso di eventi nel formato che worker/compatibilita.mjs legge
// già dai modelli di Workers AI («data: {"response": testo}», poi «data: {"finish_reason": "stop"}»); senza,
// un oggetto { response, usage }. conta(modello, tokenDiEntrataEquivalenti, tokenDiUscita) a fine risposta.
export async function eseguiClaude(env, modello, input, { conta, fetchFn = fetch } = {}) {
  const corpo = richiesta(modello, input, env.COMPATIBILITA_CLAUDE_IMPEGNO || 'low');
  const r = await fetchFn('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'x-api-key': env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
    body: JSON.stringify({ ...corpo, stream: Boolean(input.stream) }),
  });
  if (!r.ok || !r.body) {
    const testo = (await r.text().catch(() => '')).slice(0, 200);
    console.log('compatibilita claude', modello, r.status, testo);
    throw new Error(`Claude ${r.status}`);
  }

  if (!input.stream) {
    const d = await r.json();
    await conta?.(modello, entrataEquivalente(modello, d.usage || {}), d.usage?.output_tokens || 0);
    const testo = (d.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('');
    if (d.stop_reason === 'max_tokens') throw new Error('risposta del modello interrotta');
    return { response: testo, usage: { completion_tokens: 0 } };
  }

  const lettore = r.body.getReader();
  const dec = new TextDecoder();
  const enc = new TextEncoder();
  let resto = '', uso = {}, tout = 0, motivo = '', contato = false;
  const chiudi = async () => {
    if (contato) return; contato = true;
    await Promise.resolve(conta?.(modello, entrataEquivalente(modello, uso), tout)).catch(() => {});
  };
  const evento = (o) => enc.encode(`data: ${JSON.stringify(o)}\n\n`);
  return new ReadableStream({
    async pull(c) {
      try {
        for (;;) {
          let i, scritto = false;
          while ((i = resto.indexOf('\n\n')) >= 0) {
            const blocco = resto.slice(0, i); resto = resto.slice(i + 2);
            const riga = blocco.split('\n').find((x) => x.startsWith('data:'));
            if (!riga) continue;
            let d; try { d = JSON.parse(riga.slice(5).trim()); } catch { continue; }
            if (d.type === 'message_start') uso = d.message?.usage || {};
            else if (d.type === 'message_delta') { tout = d.usage?.output_tokens || tout; motivo = d.delta?.stop_reason || motivo; }
            else if (d.type === 'content_block_delta' && d.delta?.type === 'text_delta' && d.delta.text) { c.enqueue(evento({ response: d.delta.text })); scritto = true; }
            else if (d.type === 'error') { c.enqueue(evento({ error: 'errore del modello' })); scritto = true; }
          }
          if (scritto) return;
          const { value, done } = await lettore.read();
          if (done) {
            await chiudi();
            c.enqueue(evento({ finish_reason: motivo === 'max_tokens' ? 'length' : motivo ? 'stop' : 'error' }));
            c.enqueue(enc.encode('data: [DONE]\n\n'));
            c.close();
            return;
          }
          resto += dec.decode(value, { stream: true });
        }
      } catch (e) {
        await chiudi();
        c.error(e);
      }
    },
    async cancel(m) { await chiudi(); return lettore.cancel(m).catch(() => {}); },
  });
}
