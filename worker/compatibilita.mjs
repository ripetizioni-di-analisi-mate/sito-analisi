// «Compatibilità con il tuo esame» (pagina /compatibilita e riquadro nella pagina Sblocca).
//  1. /api/compatibilita/leggi: le foto del compito (o le pagine di un PDF scansionato, già trasformate in
//     immagini dal browser) vanno al modello che legge le immagini, che ne trascrive gli esercizi in testo.
//  2. /api/compatibilita/confronta: il testo dell'esame va al modello di testo insieme al catalogo della materia
//     (argomenti, schede svolte, voci della teoria, file /dati-compatibilita/<materia>.json generato alla build);
//     il modello divide l'esame in richieste e le abbina al catalogo; qui si controllano i codici e si calcolano
//     le percentuali: compatibilità (quanto dell'esame trova riscontro nel materiale) e, con l'account,
//     successo (quota di domande a tempo indovinate negli argomenti dell'esame).
//  3. Ogni confronto riuscito si salva in forma anonima (solo materia, università facoltativa, esito e sintesi
//     delle richieste, senza dati della persona): Carmine lo vede in /admin/esami con le richieste non coperte.
// Vale solo per gli esami universitari (src/data/compatibilita.ts).
import { MATERIE } from '../src/data/materie.ts';
import { MATERIE_COMPATIBILITA, PESI, LIMITI, MAX_PAGINE, MAX_CARATTERI_TESTO, RISPOSTE_MINIME_SUCCESSO } from '../src/data/compatibilita.ts';

const MODELLI_FOTO = ['@cf/meta/llama-4-scout-17b-16e-instruct', '@cf/mistralai/mistral-small-3.1-24b-instruct'];
const MODELLI_TESTO = ['@cf/google/gemma-4-26b-a4b-it', '@cf/openai/gpt-oss-120b'];
const MAX_IMMAGINE = 1500000;  // caratteri del data URL di una pagina (circa 1 MB)
const MAX_RICHIESTE = 40;
const SCHEDE_LIBERE = 3;       // come in index.mjs: le prime tre schede svolte di ogni argomento sono gratuite
const ARCHIVIO_MAX = 3000;     // confronti anonimi conservati per /admin/esami

// ---------- archivio ----------
export function creaTabelleCompatibilita(sql) {
  sql.exec(`
    CREATE TABLE IF NOT EXISTS comp_conta (giorno TEXT, chi TEXT, tipo TEXT, n INTEGER, PRIMARY KEY (giorno, chi, tipo));
    CREATE TABLE IF NOT EXISTS esami_controllati (id INTEGER PRIMARY KEY AUTOINCREMENT, quando INTEGER, materia TEXT, universita TEXT,
      compatibilita INTEGER, richieste INTEGER, esito TEXT);
  `);
}

export function archivioCompatibilita(o, pathname, c) {
  switch (pathname) {
    case '/comp-conta': {
      // Conta una richiesta per la persona e per il sito; rifiuta oltre i limiti del giorno.
      const n = (chi) => o.riga('SELECT n FROM comp_conta WHERE giorno = ? AND chi = ? AND tipo = ?', c.giorno, chi, c.tipo)?.n || 0;
      const mio = n(c.chi), sito = n('*');
      if (mio >= c.max || sito >= c.maxSito) return { ok: false, motivo: sito >= c.maxSito ? 'sito' : 'persona' };
      for (const chi of [c.chi, '*']) {
        o.sql.exec(`INSERT INTO comp_conta (giorno, chi, tipo, n) VALUES (?, ?, ?, 1)
                    ON CONFLICT (giorno, chi, tipo) DO UPDATE SET n = n + 1`, c.giorno, chi, c.tipo);
      }
      o.sql.exec('DELETE FROM comp_conta WHERE giorno < ?', new Date(Date.now() - 7 * 864e5).toISOString().slice(0, 10));
      return { ok: true, rimasti: c.max - mio - 1 };
    }
    case '/comp-rimborso': {
      for (const chi of [c.chi, '*']) o.sql.exec('UPDATE comp_conta SET n = MAX(n - 1, 0) WHERE giorno = ? AND chi = ? AND tipo = ?', c.giorno, chi, c.tipo);
      return { ok: true };
    }
    case '/comp-salva': {
      o.sql.exec('INSERT INTO esami_controllati (quando, materia, universita, compatibilita, richieste, esito) VALUES (?, ?, ?, ?, ?, ?)',
        Date.now(), c.materia, c.universita || null, c.compatibilita, c.richieste, c.esito);
      o.sql.exec('DELETE FROM esami_controllati WHERE id <= (SELECT MAX(id) FROM esami_controllati) - ?', ARCHIVIO_MAX);
      return { ok: true };
    }
    case '/comp-successo': {
      const righe = o.righe('SELECT argomento, COUNT(*) AS n, SUM(corretta) AS c FROM risposte WHERE email = ? AND materia = ? GROUP BY argomento', c.email, c.materia);
      return { argomenti: Object.fromEntries(righe.map((r) => [r.argomento, { n: r.n, c: r.c || 0 }])) };
    }
    case '/comp-elenco':
      return { esami: o.righe('SELECT id, quando, materia, universita, compatibilita, richieste, esito FROM esami_controllati ORDER BY id DESC LIMIT 400') };
  }
  return null;
}

// ---------- catalogo della materia ----------
const cacheCataloghi = {};
async function catalogo(env, materia) {
  if (!(materia in cacheCataloghi)) {
    const r = await env.ASSETS.fetch(new Request(`https://interno/dati-compatibilita/${materia}.json`));
    cacheCataloghi[materia] = r.ok ? await r.json() : null;
  }
  return cacheCataloghi[materia];
}

// Catalogo in forma compatta per il modello, con codici brevi (A = argomento, S = scheda svolta, T = voce di teoria).
function codifica(cat) {
  const codici = { A: {}, S: {}, T: {} };
  let s = 0, t = 0;
  const righe = [];
  cat.argomenti.forEach((a, i) => {
    const ca = `A${i + 1}`;
    codici.A[ca] = a;
    righe.push(`${ca} ${a.titolo}`);
    for (const sc of a.schede) {
      const cs = `S${++s}`;
      codici.S[cs] = { argomento: a.slug, ...sc };
      righe.push(`  ${cs} scheda svolta: ${sc.titolo}${sc.parole.length ? ` (${sc.parole.join(', ')})` : ''}`);
    }
    for (const v of a.teoria) {
      const ct = `T${++t}`;
      codici.T[ct] = { argomento: a.slug, ...v };
      righe.push(`  ${ct} ${v.tipo}: ${v.titolo}`);
    }
  });
  return { testo: righe.join('\n'), codici };
}

// ---------- modelli ----------
function testoDi(r) {
  if (!r) return '';
  if (typeof r === 'string') return r;
  if (typeof r.response === 'string') return r.response;
  if (r.response && typeof r.response === 'object') return JSON.stringify(r.response);
  const c = r.choices?.[0]?.message?.content;
  if (typeof c === 'string') return c;
  if (Array.isArray(r.output)) {
    return r.output.flatMap((o) => (o.type === 'message' && Array.isArray(o.content) ? o.content.map((x) => x.text).filter((x) => typeof x === 'string') : [])).join('\n');
  }
  return '';
}
const senzaRagionamento = (t) => String(t || '').replace(/<think>[\s\S]*?<\/think>/g, '').trim();

async function prova(env, modello, input) {
  const base = { ...input, temperature: 0.1 };
  const conOpzioni = /gemma/.test(modello) ? { ...base, chat_template_kwargs: { enable_thinking: false } } : base;
  const r = await env.AI.run(modello, conOpzioni).catch((e) => {
    if (conOpzioni === base) throw e;
    return env.AI.run(modello, base);
  });
  return senzaRagionamento(testoDi(r));
}

const ISTRUZIONI_LETTURA = (titolo) => `Questa immagine è una pagina di un compito d'esame universitario di ${titolo}.
Trascrivi il testo degli esercizi e delle domande, nell'ordine in cui compaiono, con le formule in LaTeX tra $…$.
Mantieni il numero di ogni esercizio, le lettere dei punti (a, b, c…) e il punteggio, se è indicato.
Non trascrivere nome, cognome, matricola, firme, data, istruzioni generali sulla prova (durata, materiale consentito) e appunti scritti a mano dallo studente.
Se nell'immagine non ci sono esercizi di matematica o di fisica, rispondi soltanto NESSUN_ESERCIZIO.
Rispondi soltanto con la trascrizione, senza commenti.`;

async function leggiPagina(env, titolo, immagine) {
  const testo = ISTRUZIONI_LETTURA(titolo);
  let ultimo = null;
  for (const m of MODELLI_FOTO) {
    for (const input of [
      { messages: [{ role: 'user', content: [{ type: 'text', text: testo }, { type: 'image_url', image_url: { url: immagine } }] }], max_tokens: 1800 },
      { messages: [{ role: 'user', content: testo }], image: immagine, max_tokens: 1800 },
    ]) {
      try {
        const t = await prova(env, m, input);
        if (t) return t;
      } catch (e) { ultimo = e; console.log('compatibilita lettura', m, String(e?.message || e).slice(0, 200)); }
    }
  }
  throw ultimo || new Error('nessuna trascrizione');
}

const ISTRUZIONI_CONFRONTO = (titolo) => `Sei un docente universitario di ${titolo}. Ricevi il testo di un esame e il catalogo del materiale di un sito di teoria ed esercizi svolti.
Dividi l'esame in richieste e abbina ogni richiesta al catalogo.

Regole
- Una richiesta è un singolo compito da svolgere. Se un esercizio ha più punti (a, b, c…), ogni punto è una richiesta separata con lo stesso numero di esercizio.
- tipo: "esercizio" per calcoli e problemi; "teoria" per definizioni, enunciati e dimostrazioni da scrivere.
- Esercizio: se una scheda svolta del catalogo insegna lo stesso procedimento che serve per risolverlo, scheda = il suo codice S e livello = "stesso". Se nessuna scheda ha lo stesso procedimento ma l'argomento è nel catalogo, scheda = null e livello = "argomento". Se l'argomento non è nel catalogo, livello = "nessuno".
- Teoria: se la definizione o il teorema richiesto è una voce del catalogo, teoria = il suo codice T e livello = "stesso". Se la voce manca ma l'argomento c'è, livello = "argomento". Altrimenti livello = "nessuno".
- argomento = il codice A dell'argomento della richiesta; null se livello = "nessuno".
- Valuta con rigore: "stesso" solo quando la scheda o la voce serve davvero a quella richiesta, non per una somiglianza di parole.
- punti = punteggio dell'esercizio, se il testo lo indica; altrimenti null.
- testo = la richiesta riscritta in breve (al massimo 25 parole), con le formule in LaTeX tra $…$.
- universitario = false se il testo è un test a risposta multipla di un concorso, una verifica di scuola superiore, oppure non contiene esercizi di matematica o di fisica; altrimenti true.

Rispondi soltanto con un oggetto JSON di questa forma, senza altro testo:
{"universitario": true, "richieste": [{"esercizio": "1", "parte": "a", "testo": "…", "tipo": "esercizio", "argomento": "A3", "scheda": "S12", "teoria": null, "livello": "stesso", "punti": 8}]}`;

const SCHEMA = {
  type: 'object',
  properties: {
    universitario: { type: 'boolean' },
    richieste: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          esercizio: { type: 'string' }, parte: { type: ['string', 'null'] }, testo: { type: 'string' },
          tipo: { type: 'string', enum: ['esercizio', 'teoria'] }, argomento: { type: ['string', 'null'] },
          scheda: { type: ['string', 'null'] }, teoria: { type: ['string', 'null'] },
          livello: { type: 'string', enum: ['stesso', 'argomento', 'nessuno'] }, punti: { type: ['number', 'null'] },
        },
        required: ['esercizio', 'testo', 'tipo', 'livello'],
      },
    },
  },
  required: ['universitario', 'richieste'],
};

// Primo oggetto JSON contenuto nel testo del modello (anche dentro ```json … ```).
export function estraiJson(t) {
  const s = String(t || '');
  const i = s.indexOf('{'), j = s.lastIndexOf('}');
  if (i < 0 || j <= i) return null;
  try { return JSON.parse(s.slice(i, j + 1)); } catch { return null; }
}

async function abbina(env, titolo, catalogoTesto, esame) {
  const messages = [
    { role: 'system', content: ISTRUZIONI_CONFRONTO(titolo) },
    { role: 'user', content: `Catalogo del materiale\n${catalogoTesto}\n\nTesto dell'esame\n${esame}` },
  ];
  let ultimo = null;
  for (const m of MODELLI_TESTO) {
    for (const input of [
      { messages, max_tokens: 3000, response_format: { type: 'json_schema', json_schema: SCHEMA } },
      { messages, max_tokens: 3000 },
    ]) {
      try {
        const d = estraiJson(await prova(env, m, input));
        if (d && Array.isArray(d.richieste)) return d;
      } catch (e) { ultimo = e; console.log('compatibilita confronto', m, String(e?.message || e).slice(0, 200)); }
    }
  }
  throw ultimo || new Error('nessun confronto');
}

// ---------- calcolo delle percentuali ----------
// Controlla i codici restituiti dal modello, rende coerenti livello, scheda e argomento, assegna i pesi
// (punteggio dell'esercizio diviso tra i suoi punti, se il testo indica i punteggi di tutti gli esercizi) e calcola la compatibilità.
export function valutaRichieste(materia, cat, codici, grezze, successoArg = null, domandePer = {}) {
  const pulito = (x, n) => String(x ?? '').replace(/[\u0000-\u001f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, n);
  const richieste = grezze.slice(0, MAX_RICHIESTE).map((r) => {
    const tipo = r.tipo === 'teoria' ? 'teoria' : 'esercizio';
    let livello = ['stesso', 'argomento', 'nessuno'].includes(r.livello) ? r.livello : 'nessuno';
    const scheda = tipo === 'esercizio' ? codici.S[r.scheda] || null : null;
    const voce = tipo === 'teoria' ? codici.T[r.teoria] || null : null;
    let arg = codici.A[r.argomento] || null;
    const legato = scheda || voce;
    if (legato) arg = cat.argomenti.find((a) => a.slug === legato.argomento) || arg;
    if (livello === 'stesso' && !legato) livello = arg ? 'argomento' : 'nessuno';
    if (livello === 'argomento' && !arg) livello = 'nessuno';
    if (livello === 'nessuno') arg = null;
    const punti = typeof r.punti === 'number' && r.punti > 0 && r.punti <= 100 ? r.punti : null;
    return {
      esercizio: pulito(r.esercizio, 8) || '?', parte: pulito(r.parte, 4) || null, testo: pulito(r.testo, 400), tipo, livello, punti,
      argomento: arg ? { slug: arg.slug, titolo: arg.titolo } : null,
      scheda: livello === 'stesso' && scheda ? { n: scheda.n, titolo: scheda.titolo, libera: scheda.n <= SCHEDE_LIBERE, link: `/${materia}/${scheda.argomento}/esercizi-svolti/${scheda.n}` } : null,
      voce: livello === 'stesso' && voce ? { titolo: voce.titolo, tipo: voce.tipo, link: `/${materia}/${voce.argomento}/teoria#${voce.ancora}` } : null,
      teoriaLink: arg ? `/${materia}/${arg.slug}/teoria` : null,
      domandeLink: arg && domandePer[arg.slug] ? `/${materia}/${arg.slug}/domande` : null,
    };
  }).filter((r) => r.testo);

  // Pesi: con i punteggi di tutti gli esercizi, ogni punto (a, b, c…) vale il punteggio diviso per i punti dell'esercizio.
  const perEsercizio = {};
  for (const r of richieste) (perEsercizio[r.esercizio] ||= []).push(r);
  const conPunti = Object.values(perEsercizio).every((g) => g.some((r) => r.punti));
  for (const g of Object.values(perEsercizio)) {
    const p = conPunti ? Math.max(...g.map((r) => r.punti || 0)) : g.length;
    for (const r of g) r.peso = p / g.length;
  }
  const totale = richieste.reduce((t, r) => t + r.peso, 0);
  const compatibilita = totale ? Math.round((100 * richieste.reduce((t, r) => t + r.peso * PESI[r.livello], 0)) / totale) : 0;
  const conteggi = { stesso: 0, argomento: 0, nessuno: 0 };
  for (const r of richieste) conteggi[r.livello]++;

  // Successo: quota di domande a tempo indovinate negli argomenti dell'esame, con gli stessi pesi.
  let successo = null;
  if (successoArg) {
    const risposte = Object.entries(successoArg).filter(([a]) => richieste.some((r) => r.argomento?.slug === a)).reduce((t, [, v]) => t + v.n, 0);
    for (const r of richieste) {
      const v = r.argomento ? successoArg[r.argomento.slug] : null;
      r.successo = v && v.n ? { risposte: v.n, corrette: v.c } : null;
    }
    if (risposte >= RISPOSTE_MINIME_SUCCESSO) {
      successo = Math.round((100 * richieste.reduce((t, r) => t + r.peso * (r.successo ? r.successo.corrette / r.successo.risposte : 0), 0)) / totale);
    }
    successo = { percentuale: successo, risposte };
  }
  return { richieste, compatibilita, conteggi, perPunti: conPunti, successo };
}

// ---------- rotte ----------
export async function gestisciCompatibilita(req, env, ctx, p, h) {
  const POST = req.method === 'POST';
  const { aDO, json } = h;

  if (p.startsWith('/dati-compatibilita/')) return new Response('non trovato', { status: 404 });

  if (p === '/admin/esami') {
    const ma = h.leggiCookie(req, 'admin');
    const sess = ma ? await h.leggiToken(env, ma) : null;
    if (!sess?.admin) return Response.redirect(`${new URL(req.url).origin}/admin`, 302);
    const { esami } = await aDO(env, '/comp-elenco', {});
    return paginaAdminEsami(esami);
  }

  if (!POST || (p !== '/api/compatibilita/leggi' && p !== '/api/compatibilita/confronta')) return null;
  const b = await req.json().catch(() => ({}));
  const materia = typeof b.materia === 'string' && MATERIE_COMPATIBILITA.includes(b.materia) ? b.materia : null;
  if (!materia) return json({ errore: 'Scegli la materia del tuo esame universitario.' }, 400);
  const m = MATERIE.find((x) => x.slug === materia);
  const io = await h.utenteCollegato(env, req).catch(() => null);
  const impronta = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`${req.headers.get('cf-connecting-ip') || ''}|${req.headers.get('user-agent') || ''}`));
  const chi = io?.email || [...new Uint8Array(impronta).slice(0, 8)].map((x) => x.toString(16).padStart(2, '0')).join('');
  const giorno = new Date().toISOString().slice(0, 10);
  const conta = async (tipo) => {
    const max = tipo === 'leggi' ? (io ? LIMITI.leggiAccount : LIMITI.leggiOspite) : (io ? LIMITI.confrontaAccount : LIMITI.confrontaOspite);
    const maxSito = tipo === 'leggi' ? LIMITI.leggiSito : LIMITI.confrontaSito;
    return aDO(env, '/comp-conta', { giorno, chi, tipo, max, maxSito });
  };
  const limite = (r) => json({
    errore: r.motivo === 'sito'
      ? 'Oggi il controllo degli esami ha raggiunto il limite del sito. Riprova domani.'
      : io ? 'Hai raggiunto il numero di controlli di oggi. Riprova domani.'
        : 'Hai raggiunto il numero di controlli di oggi senza account. Con un account gratuito ne hai di più.',
  }, 429);
  const rimborsa = (tipo) => aDO(env, '/comp-rimborso', { giorno, chi, tipo }).catch(() => {});

  // ----- 1. lettura delle foto -----
  if (p === '/api/compatibilita/leggi') {
    const pagine = (Array.isArray(b.pagine) ? b.pagine : []).filter((x) => typeof x === 'string' && /^data:image\/(jpeg|png|webp);base64,/.test(x));
    if (!pagine.length) return json({ errore: 'Aggiungi almeno una foto del testo dell’esame.' }, 400);
    if (pagine.length > MAX_PAGINE) return json({ errore: `Al massimo ${MAX_PAGINE} pagine per esame.` }, 400);
    if (pagine.some((x) => x.length > MAX_IMMAGINE)) return json({ errore: 'Una delle immagini è troppo grande.' }, 400);
    const c = await conta('leggi');
    if (!c.ok) return limite(c);
    try {
      const testi = await Promise.all(pagine.map((x) => leggiPagina(env, m.titolo, x)));
      const utili = testi.map((t) => t.trim()).filter((t) => t && !/^NESSUN_ESERCIZIO\.?$/i.test(t));
      if (!utili.length) {
        await rimborsa('leggi');
        return json({ errore: 'Nelle immagini non ho trovato esercizi di matematica o di fisica. Controlla che la foto mostri il testo dell’esame.' }, 422);
      }
      return json({ testo: utili.join('\n\n').slice(0, MAX_CARATTERI_TESTO) }, 200, { 'cache-control': 'no-store' });
    } catch (e) {
      await rimborsa('leggi');
      const quota = /4006|allocation|neurons|limit/i.test(String(e?.message || ''));
      return json({ errore: quota ? 'Oggi la lettura delle foto ha raggiunto il limite del sito. Riprova domani, oppure incolla il testo dell’esame.'
        : 'Non sono riuscito a leggere le foto. Riprova con una foto più nitida, oppure incolla il testo dell’esame.' }, 502);
    }
  }

  // ----- 2. confronto con il materiale -----
  const testo = typeof b.testo === 'string' ? b.testo.replace(/[\u0000-\u0008\u000b-\u001f]/g, '').trim() : '';
  if (testo.length < 20) return json({ errore: 'Il testo dell’esame è troppo breve: scrivi o incolla gli esercizi.' }, 400);
  if (testo.length > MAX_CARATTERI_TESTO) return json({ errore: `Il testo è troppo lungo: al massimo ${MAX_CARATTERI_TESTO} caratteri, cioè un compito d’esame.` }, 400);
  const cat = await catalogo(env, materia);
  if (!cat) return json({ errore: 'Il confronto per questa materia non è ancora disponibile.' }, 503);
  const c = await conta('confronta');
  if (!c.ok) return limite(c);
  const { testo: catalogoTesto, codici } = codifica(cat);
  let grezzo;
  try {
    grezzo = await abbina(env, m.titolo, catalogoTesto, testo);
  } catch (e) {
    await rimborsa('confronta');
    const quota = /4006|allocation|neurons|limit/i.test(String(e?.message || ''));
    return json({ errore: quota ? 'Oggi il controllo degli esami ha raggiunto il limite del sito. Riprova domani.' : 'Il confronto non è riuscito. Riprova tra qualche istante.' }, 502);
  }
  if (grezzo.universitario === false) {
    await rimborsa('confronta');
    return json({ errore: 'Il testo non sembra un esame universitario. Il controllo della compatibilità vale per gli esami universitari; per concorsi e test a quiz ci sono le simulazioni a quiz.', nonUniversitario: true }, 422);
  }
  const successoArg = io ? (await aDO(env, '/comp-successo', { email: io.email, materia })).argomenti : null;
  const domande = (await h.catalogoDomande(env))?.[materia] || [];
  const domandePer = Object.fromEntries((Array.isArray(domande) ? domande : Object.keys(domande)).map((a) => [typeof a === 'string' ? a : a.slug, true]));
  const esito = valutaRichieste(materia, cat, codici, grezzo.richieste, successoArg, domandePer);
  if (!esito.richieste.length) {
    await rimborsa('confronta');
    return json({ errore: 'Nel testo non ho riconosciuto esercizi. Controlla il testo e riprova.' }, 422);
  }
  const universita = typeof b.universita === 'string' ? b.universita.replace(/[\u0000-\u001f<>]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 80) : '';
  ctx.waitUntil(aDO(env, '/comp-salva', {
    materia, universita, compatibilita: esito.compatibilita, richieste: esito.richieste.length,
    esito: JSON.stringify(esito.richieste.map((r) => ({ e: r.esercizio, p: r.parte, t: r.testo, l: r.livello, a: r.argomento?.slug || null, s: r.scheda?.n || null }))),
  }).catch(() => {}));
  return json({ materia, titolo: m.titolo, ...esito, collegato: Boolean(io), rimasti: c.rimasti }, 200, { 'cache-control': 'no-store' });
}

// ---------- pagina /admin/esami ----------
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (x) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[x]));
const ETICHETTE = { stesso: 'Coperto', argomento: 'In parte', nessuno: 'Non coperto' };
function paginaAdminEsami(esami) {
  const perMateria = MATERIE_COMPATIBILITA.map((slug) => {
    const titolo = MATERIE.find((m) => m.slug === slug)?.titolo || slug;
    const del = esami.filter((e) => e.materia === slug);
    if (!del.length) return '';
    const media = Math.round(del.reduce((t, e) => t + e.compatibilita, 0) / del.length);
    // Richieste non coperte o coperte in parte: sono le schede che mancano al sito.
    const scoperte = del.flatMap((e) => { try { return JSON.parse(e.esito); } catch { return []; } }).filter((r) => r.l !== 'stesso');
    const righe = del.slice(0, 60).map((e) => {
      let rr = [];
      try { rr = JSON.parse(e.esito); } catch { /* vuoto */ }
      return `<tr><td class="piccolo">${esc(new Date(e.quando).toLocaleDateString('it-IT', { timeZone: 'Europe/Rome' }))}</td><td>${esc(e.universita || '')}</td>
<td><strong>${e.compatibilita}%</strong></td><td><details><summary>${e.richieste} richieste</summary><ol>${rr.map((r) => `<li><span class="et ${esc(r.l)}">${ETICHETTE[r.l] || ''}</span> ${esc(r.e)}${r.p ? esc(r.p) : ''}. ${esc(r.t)}${r.a ? ` <span class="piccolo">(${esc(r.a)}${r.s ? `, scheda ${r.s}` : ''})</span>` : ''}</li>`).join('')}</ol></details></td></tr>`;
    }).join('');
    return `<section><h2>${esc(titolo)} <span class="conta">${del.length} ${del.length === 1 ? 'esame' : 'esami'} · media ${media}%</span></h2>
${scoperte.length ? `<details class="piccolo" open><summary>Richieste senza una scheda dello stesso tipo (${scoperte.length})</summary><ul>${scoperte.slice(0, 80).map((r) => `<li><span class="et ${esc(r.l)}">${ETICHETTE[r.l]}</span> ${esc(r.t)}${r.a ? ` <span class="piccolo">(${esc(r.a)})</span>` : ''}</li>`).join('')}</ul></details>` : ''}
<div class="tab"><table><thead><tr><th>Giorno</th><th>Università</th><th>Compatibilità</th><th>Richieste</th></tr></thead><tbody>${righe}</tbody></table></div></section>`;
  }).join('');
  return new Response(`<!doctype html><html lang="it"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex"><title>Esami controllati</title><style>
body{font-family:'Source Sans 3',system-ui,sans-serif;background:#faf8f2;color:#22302f;margin:0;padding:24px 16px;line-height:1.45}
main{max-width:1150px;margin:0 auto}h1,h2{font-family:Georgia,serif;font-weight:600}h1{margin:0 0 4px}h2{margin:32px 0 10px;font-size:1.3rem}a{color:#2f6f68}
.conta{font-family:'Source Sans 3',system-ui,sans-serif;font-size:.85rem;font-weight:600;color:#2f6f68;background:#e3efe9;border-radius:999px;padding:2px 10px;margin-left:6px;vertical-align:middle}
table{border-collapse:collapse;width:100%;background:#fff;border:1px solid #ddd6c8;font-size:15px}th,td{text-align:left;padding:8px 10px;border-bottom:1px solid #eee8dc;vertical-align:top}
th{background:#f1ede4;font-size:13px;text-transform:uppercase;letter-spacing:.05em;color:#5a6664}.piccolo{font-size:13px;color:#5a6664}.tab{overflow-x:auto}details{margin:8px 0}
ol,ul{margin:6px 0;padding-left:20px}li{margin:3px 0}.et{font-size:12px;font-weight:600;border-radius:999px;padding:1px 8px;white-space:nowrap}
.et.stesso{background:#e3efe9;color:#2f6f68}.et.argomento{background:#f6ecd9;color:#8a5f1f}.et.nessuno{background:#eee8dc;color:#5a6664}</style></head><body><main>
<p class="piccolo"><a href="/admin">← Dashboard</a></p>
<h1>Esami controllati</h1>
<p class="piccolo">Confronti fatti dagli studenti nella pagina <a href="/compatibilita" target="_blank">Compatibilità con il tuo esame</a>, in forma anonima (nessun dato della persona). Le richieste «In parte» e «Non coperto» indicano le schede svolte che mancano al sito.</p>
${perMateria || '<p class="piccolo">Nessun esame controllato per ora.</p>'}
</main></body></html>`, { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store', 'x-robots-tag': 'noindex' } });
}
