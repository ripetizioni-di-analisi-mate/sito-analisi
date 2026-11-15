// Studio guidato · «Pi racconta l'esito» (proposta P1 approvata da Carmine il 15/11/2026).
// Il motore a regole (worker/studio-guidato.mjs) calcola l'esito; qui un modello lo mette in parole,
// usando soltanto i dati dell'esito («Pi parla, il test decide»).
// Modelli, in ordine: Claude Sonnet 5.5 e Claude Haiku 5.5 (API Anthropic, segreto ANTHROPIC_API_KEY,
// crediti API del piano di Carmine), poi i modelli gratuiti di Workers AI. Se nessuno risponde la pagina
// mostra la frase di sintesi del motore, come prima.
// Il racconto si salva nell'esito (rotta /sg-racconto), così rivedere il risultato non costa nulla.
// Token e chiamate si contano per giorno e modello, senza dati della persona (tabella sg_ia).

export const MODELLI_CLAUDE = ['claude-sonnet-5-5', 'claude-haiku-5-5'];
const MODELLI_GRATUITI = ['@cf/google/gemma-4-26b-a4b-it', '@cf/openai/gpt-oss-120b'];
const MAX_TOKEN = 500;

export const ISTRUZIONI_RACCONTO = `Sei Pi, l'assistente del sito ripetizionidianalisi.com dell'Ing. Carmine Tornincasa, docente di Analisi. Uno studente ha appena finito lo «Studio guidato»: un breve test a scelta multipla che individua le lacune in un capitolo e indica da dove ripartire. Ricevi l'esito del test in JSON, già calcolato dal sito. Scrivi il commento che lo studente legge sopra il percorso di studio.

Contenuto
- Un solo paragrafo di 3-5 frasi, in seconda persona singolare («hai risposto», «hai scelto»).
- Di' che cosa lo studente sa già fare (abilità senza errori), poi dove sono le difficoltà e, se c'è, quale errore tipico compare nelle sue risposte sbagliate, poi da dove ripartire e perché (la prima lacuna dell'elenco; se è la base di un'altra abilità, dillo).
- Usa SOLO le informazioni del JSON: nomi delle abilità, numero di risposte sbagliate, errori tipici («errori», con «fatto» che enuncia la regola corretta), capitoli e paragrafi indicati. Non aggiungere lacune, voti, percentuali, tempi di studio, consigli generici o informazioni sul sito che non sono nel JSON.
- Se un errore compare in almeno due risposte («volte» ≥ 2), indicalo come errore ricorrente e riporta il fatto corretto in una frase.
- Se non ci sono lacune, dillo in due frasi e indica la simulazione d'esame come passo successivo.
- Se lo studente ha risposto «Non lo so», non inventare un errore: di' soltanto che l'abilità va ripresa.
- Se una lacuna ha «sbagliataConSicurezza»: true, lo studente era convinto della risposta sbagliata, quindi indicalo come il primo punto da chiarire. Se ci sono risposte giuste date tirando a indovinare («giusteTirandoAIndovinare»), dillo in poche parole, perché quelle risposte non contano come abilità acquisite.

Stile (regole del docente, obbligatorie)
- Italiano matematico da manuale universitario, frasi complete con soggetto e verbo, lessico tecnico canonico (un'ipotesi è soddisfatta, un teorema si applica).
- Esposizione di fatti, non consigli: niente «devi», «bisogna», «ti conviene», «ricorda», «non preoccuparti».
- Niente aperture o chiusure di riempimento («Ottimo lavoro», «In sintesi», «Ecco», «Complimenti»), niente frasi a effetto, niente domande retoriche, niente costruzioni «non è X ma Y», niente lineette lunghe, niente punti esclamativi, niente emoji.
- Ogni deduzione con un connettivo esplicito (quindi, poiché, perciò); i due punti non sostituiscono un connettivo.
- Niente formule e niente simboli matematici: nomina gli oggetti a parole. Niente asterischi, elenchi, titoli o virgolette doppie diritte; usa le virgolette basse «…» per i nomi delle abilità.
- Tono calmo e preciso, da docente che parla a uno studente in difficoltà: lo studente deve capire che il problema è circoscritto e sapere da dove cominciare.`;

// Dati dell'esito da passare al modello: solo ciò che serve, senza indirizzi delle pagine.
export function datiRacconto(e) {
  return {
    capitolo: e.titoloCapitolo || (e.modo === 'ricontrollo' ? 'ricontrollo delle lacune del test precedente' : 'tutti i capitoli'),
    modo: e.modo, domande: e.domande,
    senzaErrori: (e.abilita || []).filter((a) => a.stato === 'ok').map((a) => a.nome),
    nonVerificate: (e.abilita || []).filter((a) => a.stato === 'nv').map((a) => a.nome),
    lacune: (e.lacune || []).map((l, i) => ({
      ordine: i + 1, abilita: l.nome, stato: l.stato === 'lacuna' ? 'da riprendere' : 'da consolidare',
      capitolo: l.capitolo, materia: l.materia, base: l.tipo === 'base', baseDi: l.per || [],
      risposteSbagliate: l.sbagliate, domandeChieste: l.chieste,
      errori: (l.errori || []).map((x) => ({ errore: x.nome, fatto: x.fatto, volte: x.volte })),
      sbagliataConSicurezza: Boolean(l.convinzione), giusteTirandoAIndovinare: l.indovinate || 0,
      paragrafi: (l.teoria || []).map((t) => t.titolo),
    })),
    erroreRicorrente: e.ricorrente ? { errore: e.ricorrente.nome, fatto: e.ricorrente.fatto, volte: e.ricorrente.volte } : null,
  };
}

// Pulizia leggera del testo: niente asterischi, cancelletti o lineette lunghe.
export const pulisci = (t) => String(t || '').replace(/[*#]/g, '').replace(/\s*—\s*/g, ', ');

// Eventi SSE dell'API Anthropic → pezzi di testo. Restituisce { testo, tin, tout } alla fine.
async function leggiStreamClaude(body, aggiungi) {
  const lettore = body.getReader();
  const dec = new TextDecoder();
  let resto = '', tin = 0, tout = 0, testo = '';
  for (;;) {
    const { value, done } = await lettore.read();
    if (done) break;
    resto += dec.decode(value, { stream: true });
    let i;
    while ((i = resto.indexOf('\n\n')) >= 0) {
      const blocco = resto.slice(0, i); resto = resto.slice(i + 2);
      const riga = blocco.split('\n').find((r) => r.startsWith('data:'));
      if (!riga) continue;
      let d; try { d = JSON.parse(riga.slice(5).trim()); } catch { continue; }
      if (d.type === 'message_start') tin = d.message?.usage?.input_tokens || 0;
      else if (d.type === 'message_delta') tout = d.usage?.output_tokens || tout;
      else if (d.type === 'content_block_delta' && d.delta?.type === 'text_delta') {
        testo += d.delta.text; await aggiungi(d.delta.text);
      } else if (d.type === 'error') throw new Error(d.error?.message || 'errore del modello');
    }
  }
  return { testo, tin, tout };
}

function testoAI(r) {
  if (!r) return '';
  if (typeof r === 'string') return r;
  if (typeof r.response === 'string') return r.response;
  const c = r.choices?.[0]?.message?.content;
  if (typeof c === 'string') return c;
  if (Array.isArray(r.output)) return r.output.flatMap((o) => (o.content || []).map((x) => x.text || '')).join('');
  return '';
}
const senzaRagionamento = (t) => t.replace(/<think>[\s\S]*?<\/think>/g, '').trim();

// Risposta in streaming (testo semplice). salva(testo) e conta(modello, tin, tout) vengono chiamate alla fine.
// fetchFn si può sostituire nelle prove.
export function raccontaInStreaming(env, esito, { salva, conta, fetchFn = fetch } = {}) {
  const messaggio = JSON.stringify(datiRacconto(esito));
  const { readable, writable } = new TransformStream();
  const scrivi = writable.getWriter();
  const enc = new TextEncoder();
  (async () => {
    let fatto = '';
    try {
      if (env.ANTHROPIC_API_KEY) {
        for (const modello of MODELLI_CLAUDE) {
          try {
            const r = await fetchFn('https://api.anthropic.com/v1/messages', {
              method: 'POST',
              headers: { 'x-api-key': env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
              body: JSON.stringify({
                model: modello, max_tokens: MAX_TOKEN, stream: true,
                system: [{ type: 'text', text: ISTRUZIONI_RACCONTO, cache_control: { type: 'ephemeral' } }],
                messages: [{ role: 'user', content: `Esito del test:\n${messaggio}` }],
              }),
            });
            if (!r.ok || !r.body) { console.log('sg-racconto', modello, r.status, (await r.text().catch(() => '')).slice(0, 200)); continue; }
            const { testo, tin, tout } = await leggiStreamClaude(r.body, (t) => scrivi.write(enc.encode(pulisci(t))));
            await conta?.(modello, tin, tout);
            if (testo.trim()) { fatto = pulisci(testo).trim(); break; }
          } catch (e) {
            console.log('sg-racconto', modello, String(e?.message || e).slice(0, 200));
            // Se una parte del testo è già arrivata al browser non si ricomincia con un altro modello.
            if (fatto) break;
          }
        }
      }
      if (!fatto && env.AI) {
        for (const modello of MODELLI_GRATUITI) {
          try {
            const param = { messages: [{ role: 'system', content: ISTRUZIONI_RACCONTO }, { role: 'user', content: `Esito del test:\n${messaggio}` }], max_tokens: MAX_TOKEN };
            const r = await env.AI.run(modello, /gemma/.test(modello) ? { ...param, chat_template_kwargs: { enable_thinking: false } } : param)
              .catch(() => env.AI.run(modello, param));
            const t = pulisci(senzaRagionamento(testoAI(r))).trim();
            const stima = Math.ceil((ISTRUZIONI_RACCONTO.length + messaggio.length) / 4);
            await conta?.(corto(modello), stima, Math.ceil(t.length / 4));
            if (t) { fatto = t; await scrivi.write(enc.encode(t)); break; }
          } catch (e) { console.log('sg-racconto', modello, String(e?.message || e).slice(0, 200)); }
        }
      }
      if (fatto) await salva?.(fatto);
    } catch (e) { console.log('sg-racconto', String(e?.message || e).slice(0, 200)); }
    await scrivi.close().catch(() => {});
  })();
  return new Response(readable, { headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'no-store', 'x-accel-buffering': 'no' } });
}
const corto = (m) => m.split('/').pop();

// ---------- «Cosa ti blocca?» (P2) ----------
export const ISTRUZIONI_BLOCCO = `Sei Pi, l'assistente del sito ripetizionidianalisi.com. Uno studente descrive in una frase che cosa lo blocca in una materia. Ricevi la frase e l'elenco dei capitoli della materia, ciascuno con le sue abilità numerate da 0. Scegli il capitolo in cui sta la difficoltà e da 1 a 3 abilità di quel capitolo da verificare per prime, nell'ordine in cui conviene verificarle (prima quella più vicina alla causa del problema).

Rispondi SOLO con un oggetto JSON, senza altro testo:
{"capitolo":"<slug del capitolo>","abilita":[<indici>],"frase":"<una o due frasi per lo studente>"}

La frase dice in modo preciso che cosa hai capito del problema e che cosa verificherà il test, in seconda persona singolare, in italiano matematico corretto, con tono calmo. Esempio: «La difficoltà riguarda il riconoscimento delle forme indeterminate. Il test parte dalle forme 0/0 e poi verifica i limiti notevoli.» Niente consigli, niente frasi di riempimento («Ottima domanda», «Capisco»), niente formule, niente lineette lunghe, niente punti esclamativi. Non promettere risultati.
Se la frase non riguarda la materia o non si capisce, rispondi {"capitolo":null,"abilita":[],"frase":"<una frase che chiede di scegliere il capitolo dall'elenco>"}.
Usa soltanto slug e indici presenti nell'elenco.`;

// Restituisce { argomento, priorita, frase } oppure { argomento: null, frase } se la frase non si capisce; null se nessun modello risponde.
export async function capisciBlocco(env, testo, catalogo, { conta, fetchFn = fetch } = {}) {
  const elenco = catalogo.map((c) => `${c.slug} (${c.titolo}): ${c.abilita.map((a, i) => `${i} ${a}`).join('; ')}`).join('\n');
  const messaggio = `Capitoli:\n${elenco}\n\nFrase dello studente: «${String(testo).replace(/[«»]/g, '"')}»`;
  const valida = (t) => {
    const m = String(t || '').match(/\{[\s\S]*\}/);
    if (!m) return null;
    let d; try { d = JSON.parse(m[0]); } catch { return null; }
    const frase = pulisci(d.frase || '').trim().slice(0, 400);
    const c = catalogo.find((x) => x.slug === d.capitolo);
    if (!c) return frase ? { argomento: null, priorita: [], frase } : null;
    const priorita = [...new Set((Array.isArray(d.abilita) ? d.abilita : []).filter((i) => Number.isInteger(i) && i >= 0 && i < c.abilita.length))].slice(0, 3);
    return { argomento: c.slug, titolo: c.titolo, priorita, frase };
  };
  if (env.ANTHROPIC_API_KEY) {
    for (const modello of MODELLI_CLAUDE) {
      try {
        const r = await fetchFn('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: { 'x-api-key': env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01', 'content-type': 'application/json' },
          body: JSON.stringify({ model: modello, max_tokens: 300, system: ISTRUZIONI_BLOCCO, messages: [{ role: 'user', content: messaggio }] }),
        });
        if (!r.ok) { console.log('sg-capisci', modello, r.status); continue; }
        const d = await r.json();
        await conta?.(modello, d.usage?.input_tokens || 0, d.usage?.output_tokens || 0);
        const v = valida((d.content || []).map((x) => x.text || '').join(''));
        if (v) return v;
      } catch (e) { console.log('sg-capisci', modello, String(e?.message || e).slice(0, 200)); }
    }
  }
  if (env.AI) {
    for (const modello of MODELLI_GRATUITI) {
      try {
        const param = { messages: [{ role: 'system', content: ISTRUZIONI_BLOCCO }, { role: 'user', content: messaggio }], max_tokens: 300 };
        const r = await env.AI.run(modello, /gemma/.test(modello) ? { ...param, chat_template_kwargs: { enable_thinking: false } } : param).catch(() => env.AI.run(modello, param));
        const t = senzaRagionamento(testoAI(r));
        await conta?.(corto(modello), Math.ceil((ISTRUZIONI_BLOCCO.length + messaggio.length) / 4), Math.ceil(t.length / 4));
        const v = valida(t);
        if (v) return v;
      } catch (e) { console.log('sg-capisci', modello, String(e?.message || e).slice(0, 200)); }
    }
  }
  return null;
}

// ---------- archivio (Durable Object) ----------
export function creaTabelleIA(sql) {
  sql.exec('CREATE TABLE IF NOT EXISTS sg_ia (giorno TEXT, modello TEXT, chiamate INTEGER, tin INTEGER, tout INTEGER, PRIMARY KEY (giorno, modello))');
}
export function archivioIA(ar, pathname, c) {
  if (pathname === '/sg-racconto') {
    const r = ar.riga('SELECT id, esito FROM studio_guidato WHERE email = ? AND materia = ? AND quando = ?', c.email, c.materia, c.quando);
    if (!r) return { ok: false };
    const e = JSON.parse(r.esito);
    e.racconto = String(c.testo || '').slice(0, 3000);
    ar.sql.exec('UPDATE studio_guidato SET esito = ? WHERE id = ?', JSON.stringify(e), r.id);
    return { ok: true };
  }
  if (pathname === '/sg-ia-conta') {
    const giorno = new Date().toISOString().slice(0, 10);
    ar.sql.exec(`INSERT INTO sg_ia (giorno, modello, chiamate, tin, tout) VALUES (?, ?, 1, ?, ?)
      ON CONFLICT (giorno, modello) DO UPDATE SET chiamate = chiamate + 1, tin = tin + excluded.tin, tout = tout + excluded.tout`,
    giorno, String(c.modello || '?').slice(0, 60), Number(c.tin) || 0, Number(c.tout) || 0);
    return { ok: true };
  }
  if (pathname === '/sg-ia-uso') {
    return { righe: ar.righe('SELECT giorno, modello, chiamate, tin, tout FROM sg_ia ORDER BY giorno DESC LIMIT 200') };
  }
  return null;
}
