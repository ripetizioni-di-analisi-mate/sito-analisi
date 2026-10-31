// Prova in locale del banco di Pi con un modello finto (nessuna chiamata a Cloudflare).
// Serve al ciclo di miglioramento (revisioni/pi/CICLO-PI.md) per controllare che il Worker di Pi
// funzioni dopo una modifica: streaming, riserva, risposte non in streaming, pagina /pi/prove.
// Uso, dalla radice del repository:
//   npx esbuild worker/pi-prove.mjs --bundle --format=esm --platform=neutral --outfile=/tmp/pi-prove.mjs --log-level=error
//   node strumenti/pi-prova-locale.mjs /tmp/pi-prove.mjs [giorno]
// Si può passare RISPOSTA_FINTA="testo" per vedere come viene trattato un certo testo del modello.
const { eseguiBanco, paginaProve, casiDelGiorno } = await import(process.argv[2]);
const giorno = process.argv[3] || new Date().toISOString().slice(0, 10);
const finta = process.env.RISPOSTA_FINTA || '<think>bozza</think>Il limite vale $\\dfrac{1}{2}$.';
const sse = (t) => new ReadableStream({ start(c) { const e = new TextEncoder(); for (let i = 0; i < t.length; i += 7) c.enqueue(e.encode(`data: ${JSON.stringify({ response: t.slice(i, i + 7) })}\n\n`)); c.enqueue(e.encode('data: [DONE]\n\n')); c.close(); } });
let n = 0; const sistemi = [];
const env = { AI: { run: async (m, inp) => { n++; sistemi.push(inp.messages?.[0]?.content || ''); if (n === 2) throw new Error('modello occupato (prova della riserva)'); if (n === 3) return { response: 'Risposta non in streaming.' }; return sse(finta); } } };
const db = {};
const aDO = async (_e, p, d) => { if (p === '/pi-prove-salva') db.s = d; if (p === '/pi-prove-leggi') return { giorno: db.s.giorno, giorni: [db.s.giorno], prove: db.s.righe, eventi: [], uso: [] }; return { ok: true, n: 0 }; };
console.log('Casi del giorno:', casiDelGiorno(giorno).map((c) => c.id).join(', '));
const r = await eseguiBanco(env, aDO, ['analisi-1'], { 'analisi-1': 49 }, giorno);
for (const x of r) console.log(`${x.id} | stato ${x.stato} | ${x.modello} | ${JSON.stringify(x.risposta.slice(0, 80))}`);
console.log(`Lunghezza delle istruzioni di sistema: min ${Math.min(...sistemi.map((s) => s.length))}, max ${Math.max(...sistemi.map((s) => s.length))} caratteri (circa /4 token).`);
const pag = await paginaProve(new URL('https://x/pi/prove'), env, aDO);
console.log((await pag.text()).includes('Banco di prova') ? 'Pagina /pi/prove: ok' : 'Pagina /pi/prove: ERRORE');
