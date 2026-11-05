// Simulazione di una prova ufficiale (per ora la prova di Fisica del semestre filtro): sceglie i quesiti
// (risposta multipla e completamento) secondo le regole di src/data/prove.ts e li corregge alla consegna.
// I dati dei quesiti stanno in /dati-quesiti/<materia>.json (chiuso al pubblico, letto solo qui).
import { PROVE, ripartisci } from '../src/data/prove.ts';

const cacheQuesiti = {};
async function quesitiDi(env, materia) {
  if (!/^[a-z0-9-]+$/.test(materia || '') || !PROVE[materia]) return null;
  if (!cacheQuesiti[materia]) {
    const r = await env.ASSETS.fetch(new Request(`https://interno/dati-quesiti/${materia}.json`));
    if (!r.ok) return null;
    cacheQuesiti[materia] = await r.json();
  }
  return cacheQuesiti[materia];
}

const mescola = (a) => { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };

// ---- Correzione dei completamenti ----
// Numeri: virgola o punto decimale, notazione scientifica (1,2·10^3, 1,2 x 10^3, 1,2*10^-3, 1,2e3, 10^5),
// frazioni semplici (3/4); l'unità di misura scritta dopo il numero non conta.
export function leggiNumero(testo) {
  let s = String(testo ?? '').trim().toLowerCase()
    .replace(/[−–]/g, '-').replace(/[×x*⋅∙•]/g, '·').replace(/[{}]/g, '').replace(/\s+/g, '');
  if (!s) return null;
  const sup = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9', '⁻': '-' };
  s = s.replace(/10([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+)/g, (_, e) => `10^${[...e].map((c) => sup[c]).join('')}`);
  const pot = s.match(/^([+-]?)10\^([+-]?\d+)/);
  if (pot) return (pot[1] === '-' ? -1 : 1) * 10 ** Number(pot[2]);
  const m = s.match(/^([+-]?(?:\d{1,3}(?:\.\d{3})+,\d*|\d+(?:[.,]\d*)?|[.,]\d+))(?:·10\^?([+-]?\d+)|e([+-]?\d+))?(?:\/(\d+(?:[.,]\d+)?))?/);
  if (!m) return null;
  let mant = m[1];
  // Con la virgola i punti sono separatori delle migliaia (1.200,5); altrimenti il punto è la virgola decimale.
  if (mant.includes(',')) mant = mant.replace(/\./g, '').replace(',', '.');
  let v = Number(mant) * 10 ** Number(m[2] ?? m[3] ?? 0);
  if (m[4]) v /= Number(m[4].replace(',', '.'));
  return Number.isFinite(v) ? v : null;
}

const ARTICOLI = /^(il|lo|la|l'|i|gli|le|un|uno|una|un')\s*/;
export function normaTesto(testo) {
  return String(testo ?? '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
    .replace(/[’`]/g, "'").replace(/[^a-z0-9' ]+/g, ' ').replace(/\s+/g, ' ').trim().replace(ARTICOLI, '').trim();
}

export function valutaCompletamento(data, q) {
  const attese = [q.risposta, ...(q.accetta || [])].filter((x) => x !== undefined && x !== null && String(x).trim() !== '');
  if (data === null || data === undefined || !String(data).trim()) return null;
  for (const a of attese) {
    const n = leggiNumero(a);
    // Una risposta attesa è numerica se tutta la stringa è un numero (con eventuale unità dopo).
    if (n !== null && /^[\s+\-−]*[\d.,]/.test(String(a))) {
      const d = leggiNumero(data);
      if (d !== null && Math.abs(d - n) <= 1e-9 * Math.max(1, Math.abs(n))) return true;
    } else if (normaTesto(data) === normaTesto(a)) return true;
  }
  return false;
}

// ---- Scelta dei quesiti ----
// Prova completa: quesiti per unità proporzionali ai CFU, dentro l'unità gli argomenti si alternano.
// Allenamento: n quesiti divisi in parti uguali fra gli argomenti scelti. In entrambi i casi la quota di
// completamenti è la stessa della prova (10 su 31), distribuita come i quesiti.
function posti(prova, argomenti, n) {
  if (!argomenti) {
    const quote = ripartisci(n, prova.unita.map((u) => u.cfu));
    return prova.unita.flatMap((u, i) => {
      const giro = mescola(u.argomenti);
      return Array.from({ length: quote[i] }, (_, k) => giro[k % giro.length]);
    });
  }
  const giro = mescola(argomenti);
  return Array.from({ length: n }, (_, k) => giro[k % giro.length]);
}

export async function gestisciProva(req, env, p, { firmaToken, leggiToken, json, aDO, utenteCollegato, sha }) {
  const POST = req.method === 'POST';
  if (p === '/api/simulazione-prova' && POST) {
    const { materia, argomenti, numero, recenti } = await req.json().catch(() => ({}));
    const prova = PROVE[materia];
    const dati = await quesitiDi(env, materia);
    if (!prova || !dati) return json({ errore: 'Simulazione non disponibile.' }, 404);
    const tutti = prova.unita.flatMap((u) => u.argomenti).filter((a) => dati.argomenti?.[a]?.length);
    const scelti = Array.isArray(argomenti) ? tutti.filter((a) => argomenti.includes(a)) : null;
    if (scelti && !scelti.length) return json({ errore: 'Scegli almeno un argomento.' }, 400);
    const totale = prova.multipla + prova.completamento;
    const n = scelti ? Math.max(5, Math.min(totale, Math.round(Number(numero) || totale))) : totale;
    const viste = new Set(Array.isArray(recenti) ? recenti.filter((x) => typeof x === 'string').slice(-800) : []);
    // Pile per argomento e tipo: prima i quesiti non proposti di recente.
    const pile = {};
    for (const a of tutti) {
      for (const tipo of ['multipla', 'completamento']) {
        const g = (dati.argomenti[a] || []).filter((q) => q.tipo === tipo);
        pile[`${a}|${tipo}`] = [...mescola(g.filter((q) => !viste.has(q.id))), ...mescola(g.filter((q) => viste.has(q.id)))];
      }
    }
    const elenco = posti(prova, scelti, n).filter((a) => tutti.includes(a));
    // Completamenti: stessa quota della prova, sparsi a caso fra i posti.
    const nc = Math.round((elenco.length * prova.completamento) / totale);
    const comp = new Set(mescola(elenco.map((_, i) => i)).slice(0, nc));
    const presi = [];
    elenco.forEach((a, i) => {
      const tipo = comp.has(i) ? 'completamento' : 'multipla';
      const altro = tipo === 'multipla' ? 'completamento' : 'multipla';
      const q = pile[`${a}|${tipo}`].shift() || pile[`${a}|${altro}`].shift();
      if (q) presi.push(q);
    });
    if (!presi.length) return json({ errore: 'I quesiti non sono ancora disponibili.' }, 404);
    // Prima la risposta multipla, poi i completamenti, ciascun gruppo in ordine casuale.
    const ordinati = [...mescola(presi.filter((q) => q.tipo === 'multipla')), ...mescola(presi.filter((q) => q.tipo === 'completamento'))];
    const domande = ordinati.map((q) => ({ id: q.id, argomento: q.id.split('/')[0], tipo: q.tipo, testo: q.testo, ...(q.tipo === 'multipla' ? { scelte: q.scelte } : {}) }));
    const token = await firmaToken(env, { sp: 1, m: materia, completa: !scelti, ids: domande.map((d) => d.id), t: Date.now() });
    return json({ token, domande, minuti: scelti ? Math.max(5, Math.round((domande.length * prova.minuti) / totale)) : prova.minuti }, 200, { 'cache-control': 'no-store' });
  }
  if (p === '/api/simulazione-prova/correggi' && POST) {
    const { token, risposte } = await req.json().catch(() => ({}));
    const tok = typeof token === 'string' ? await leggiToken(env, token) : null;
    if (!tok?.sp || !Array.isArray(tok.ids)) return json({ errore: 'Simulazione non valida: ricarica la pagina.' }, 400);
    const prova = PROVE[tok.m];
    const dati = await quesitiDi(env, tok.m);
    if (!prova || !dati) return json({ errore: 'Simulazione non disponibile.' }, 404);
    const date = Array.isArray(risposte) ? risposte : [];
    let giuste = 0, errate = 0, vuote = 0;
    const esiti = tok.ids.map((id, i) => {
      const q = (dati.argomenti[String(id).split('/')[0]] || []).find((x) => x.id === id);
      if (!q) return { id, giusta: null, spiegazione: '' };
      const r = date[i];
      let giusta = null;
      if (q.tipo === 'multipla') giusta = Number.isInteger(r) ? r === q.corretta - 1 : null;
      else giusta = valutaCompletamento(typeof r === 'string' ? r.slice(0, 60) : null, q);
      if (giusta === null) vuote++; else if (giusta) giuste++; else errate++;
      return q.tipo === 'multipla'
        ? { id, tipo: q.tipo, giusta, corretta: q.corretta, spiegazione: q.spiegazione }
        : { id, tipo: q.tipo, giusta, risposta: q.mostra, spiegazione: q.spiegazione };
    });
    const punti = Math.round((giuste * prova.punti.corretta + errate * prova.punti.errata + vuote * prova.punti.nondata) * 100) / 100;
    // Confronto con le altre prove complete (quota di risposte corrette).
    let confronto = null;
    if (tok.completa && date.length === esiti.length) {
      const firma = token.split('.')[1] || token;
      const io = await utenteCollegato(env, req).catch(() => null);
      const impronta = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`${req.headers.get('cf-connecting-ip') || ''}|${req.headers.get('user-agent') || ''}`));
      const chi = await sha(`c|${io?.email || [...new Uint8Array(impronta).slice(0, 8)].map((x) => x.toString(16).padStart(2, '0')).join('')}`);
      confronto = await aDO(env, '/sfi-percentile', { tipo: 'quiz', chiave: `prova:${tok.m}`, id: `p|${firma.slice(0, 40)}`, valore: punti, chi }).catch(() => null);
    }
    return json({ esiti, giuste, errate, vuote, punti, confronto }, 200, { 'cache-control': 'no-store' });
  }
  return null;
}
