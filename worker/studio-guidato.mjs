// Studio guidato: test adattivo sulle lacune (anteprima riservata ai GM, 13/11/2026).
// Regole e dipendenze fra argomenti in src/data/studio-guidato.mjs; livello e abilità
// di ogni domanda in src/data/studio-guidato-livelli.json.
//
// Il test procede per «unità» (un argomento da verificare). In ogni unità il livello sale
// dopo una risposta giusta e scende dopo una sbagliata (1 base, 2 medio, 3 avanzato).
// Un argomento del corso che risulta debole (livello stimato 0 o 1) aggiunge al test gli
// argomenti da cui dipende: prima quelli della stessa materia, poi le basi del Precorso.
// Lo stato viaggia firmato fra browser e Worker; l'esito finale si salva nell'archivio.
import { STUDIO_GUIDATO, MATERIA_BASI, REGOLE_SG, NOMI_LIVELLI } from '../src/data/studio-guidato.mjs';
import CLASSI from '../src/data/studio-guidato-livelli.json' with { type: 'json' };

export const materieGuidate = () => Object.keys(STUDIO_GUIDATO);

// Banca: per materia e argomento, le domande con livello e abilità.
const bancaCache = {};
export function banca(materia) {
  if (bancaCache[materia]) return bancaCache[materia];
  const per = {};
  for (const [id, [livello, ab]] of Object.entries(CLASSI.domande?.[materia] || {})) {
    const [argomento] = id.split('/');
    (per[argomento] ||= []).push({ id, livello: Math.abs(livello), abilita: CLASSI.abilita?.[`${materia}/${argomento}`]?.[ab] ?? null });
  }
  return (bancaCache[materia] = per);
}

const conta = (u) => {
  const c = { giuste: [0, 0, 0, 0], sbagliate: [0, 0, 0, 0] };
  for (const [, liv, ok] of u.r) (ok ? c.giuste : c.sbagliate)[liv]++;
  return c;
};
// Livello stimato: il più alto in cui le risposte giuste sono almeno una e non meno delle sbagliate.
function stima(u) {
  const c = conta(u);
  for (let l = 3; l >= 1; l--) if (c.giuste[l] >= 1 && c.giuste[l] >= c.sbagliate[l]) return l;
  return 0;
}

const unita = (m, a, tipo, liv, padre = null) => ({ m, a, tipo, liv, r: [], fine: null, padre });

// Stato iniziale. precedente = esito dell'ultimo test (o null); viste = id già proposti di recente.
export function creaStato({ materia, argomenti, precedente, viste = [] }) {
  const dip = STUDIO_GUIDATO[materia].dipendenze;
  const scelti = Object.keys(dip).filter((a) => !argomenti?.length || argomenti.includes(a));
  const prima = new Map((precedente?.argomenti || []).map((x) => [x.a, x.stima]));
  const lacuneBasi = new Set((precedente?.lacune || []).filter((x) => x.m === MATERIA_BASI).map((x) => x.a));
  const u = [];
  for (const a of scelti) {
    // Le basi risultate lacunose la volta scorsa si ricontrollano prima dell'argomento che le aveva richieste.
    for (const b of dip[a].basi) if (lacuneBasi.has(b) && !u.some((x) => x.m === MATERIA_BASI && x.a === b)) u.push(unita(MATERIA_BASI, b, 'base', 1, a));
    const s = prima.get(a);
    if (s === 3) u.push(unita(materia, a, 'controllo', 3));
    else u.push(unita(materia, a, 'corso', typeof s === 'number' ? Math.max(1, s) : REGOLE_SG.livelloIniziale));
  }
  return { v: 1, m: materia, u, i: 0, n: 0, viste: viste.slice(-300), usate: [], q: null, t: Date.now() };
}

function scegliDomanda(stato) {
  const u = stato.u[stato.i];
  const tutte = banca(u.m)[u.a] || [];
  const escluse = new Set([...stato.viste, ...stato.usate]);
  const libere = tutte.filter((q) => !escluse.has(`${u.m}:${q.id}`));
  const pool = libere.length ? libere : tutte.filter((q) => !stato.usate.includes(`${u.m}:${q.id}`));
  // Stesso livello se possibile, altrimenti il più vicino; fra queste, un'abilità non ancora
  // chiesta nell'unità, così le domande dello stesso argomento non si somigliano.
  const chieste = new Set(u.r.map((r) => tutte.find((q) => q.id === r[0])?.abilita));
  for (const d of [0, -1, 1, -2, 2]) {
    const cand = pool.filter((q) => q.livello === u.liv + d);
    if (!cand.length) continue;
    const nuove = cand.filter((q) => !chieste.has(q.abilita));
    const scelta = nuove.length ? nuove : cand;
    return scelta[Math.floor(Math.random() * scelta.length)];
  }
  return null;
}

// Prossima domanda (o null se il test è finito). Aggiorna stato.q.
export function prossima(stato) {
  while (stato.i < stato.u.length) {
    if (stato.n >= REGOLE_SG.maxDomandeTest) break;
    const u = stato.u[stato.i];
    if (u.fine === null) {
      const q = scegliDomanda(stato);
      if (q) { stato.q = { m: u.m, id: q.id, liv: q.livello }; return stato.q; }
      u.fine = u.r.length ? stima(u) : -1;
    }
    stato.i++;
  }
  stato.q = null;
  return null;
}

// Registra la risposta alla domanda corrente (ok = true/false; «Non lo so» vale false).
export function registra(stato, ok) {
  const u = stato.u[stato.i];
  const q = stato.q;
  if (!u || !q) return;
  u.r.push([q.id, q.liv, ok ? 1 : 0]);
  stato.usate.push(`${q.m}:${q.id}`);
  stato.n++;
  const c = conta(u);
  const quante = u.r.length;
  if (u.tipo === 'controllo') {
    // Argomento già avanzato: una domanda di controllo. Se è sbagliata si torna al test normale.
    if (ok) { u.fine = 3; return chiudi(stato, u); }
    u.tipo = 'corso'; u.liv = 2; return;
  }
  u.liv = Math.max(1, Math.min(3, u.liv + (ok ? 1 : -1)));
  if (u.tipo === 'base') {
    if (c.giuste.reduce((a, b) => a + b) >= 2 || c.sbagliate[1] >= 2 || quante >= REGOLE_SG.maxDomandeBase) { u.fine = stima(u); chiudi(stato, u); }
    return;
  }
  const finito = (c.giuste[3] >= 1 && quante >= 2) || c.sbagliate[1] >= 2 || quante >= REGOLE_SG.maxDomandeArgomento;
  if (finito) { u.fine = stima(u); chiudi(stato, u); }
}

// Un argomento del corso debole aggiunge, subito dopo, gli argomenti da cui dipende.
function chiudi(stato, u) {
  if (u.tipo !== 'corso' || u.fine > 1) return;
  const dip = STUDIO_GUIDATO[stato.m].dipendenze[u.a];
  const giaDentro = (m, a) => stato.u.some((x) => x.m === m && x.a === a);
  const nuove = [];
  for (const a of dip.interni) if (!giaDentro(stato.m, a)) nuove.push(unita(stato.m, a, 'corso', 1, u.a));
  for (const b of dip.basi) {
    if (nuove.filter((x) => x.tipo === 'base').length >= REGOLE_SG.maxBasi) break;
    if (!giaDentro(MATERIA_BASI, b)) nuove.push(unita(MATERIA_BASI, b, 'base', 1, u.a));
  }
  stato.u.splice(stato.i + 1, 0, ...nuove);
}

// Esito del test: livello per argomento, lacune in ordine di studio, frase di sintesi.
export function esito(stato, titoli) {
  const tit = (m, a) => titoli?.[m]?.[a] || a;
  const fatte = stato.u.filter((u) => u.r.length);
  const debolezze = (u) => [...new Set(u.r.filter((r) => !r[2]).map((r) => (banca(u.m)[u.a] || []).find((q) => q.id === r[0])?.abilita).filter(Boolean))];
  const argomenti = Object.keys(STUDIO_GUIDATO[stato.m].dipendenze).map((a) => {
    const u = stato.u.find((x) => x.m === stato.m && x.a === a);
    const s = u && u.r.length ? (u.fine ?? stima(u)) : null;
    return { a, titolo: tit(stato.m, a), stima: s, nome: s === null ? 'Da verificare' : NOMI_LIVELLI[s] };
  });
  const basi = fatte.filter((u) => u.m === MATERIA_BASI).map((u) => ({ a: u.a, titolo: tit(MATERIA_BASI, u.a), stima: u.fine ?? stima(u), padre: u.padre }));
  const lacune = [];
  const link = (m, a) => ({ teoria: `/${m}/${a}/teoria`, svolti: `/${m}/${a}/esercizi-svolti`, domande: `/${m}/${a}/domande` });
  // Prima le basi (nell'ordine del Precorso), poi gli argomenti del corso nell'ordine del programma.
  const ordineBasi = Object.keys(titoli?.[MATERIA_BASI] || {});
  for (const b of [...basi].sort((x, y) => ordineBasi.indexOf(x.a) - ordineBasi.indexOf(y.a))) {
    if (b.stima > 0 || lacune.some((x) => x.m === MATERIA_BASI && x.a === b.a)) continue;
    const u = fatte.find((x) => x.m === MATERIA_BASI && x.a === b.a);
    const per = [...new Set(fatte.filter((x) => x.m === MATERIA_BASI && x.a === b.a).map((x) => x.padre))].map((a) => tit(stato.m, a));
    lacune.push({ m: MATERIA_BASI, a: b.a, titolo: b.titolo, materia: 'Precorso', abilita: debolezze(u), per, link: link(MATERIA_BASI, b.a) });
  }
  for (const x of argomenti) {
    if (x.stima === null || x.stima > 1) continue;
    const u = fatte.find((y) => y.m === stato.m && y.a === x.a);
    lacune.push({ m: stato.m, a: x.a, titolo: x.titolo, materia: titoli?.nomeMateria || stato.m, livello: x.stima, abilita: debolezze(u), per: [], link: link(stato.m, x.a) });
  }
  const deboli = argomenti.filter((x) => x.stima !== null && x.stima <= 1);
  const min = (t) => `«${t}»`;
  const elenca = (v, prep = '') => v.length <= 1 ? (v[0] || '') : `${v.slice(0, -1).join(', ')} e ${prep}${v.at(-1)}`;
  let sintesi;
  if (!fatte.length) sintesi = 'Il test non contiene risposte.';
  else if (!deboli.length && !lacune.length) sintesi = 'Negli argomenti verificati non sono emerse lacune. Il passo successivo è la simulazione d’esame.';
  else {
    const primo = deboli[0];
    const cause = primo ? lacune.filter((l) => l.m === MATERIA_BASI && l.per.includes(primo.titolo)).map((l) => min(l.titolo)) : [];
    const causeInterne = primo ? lacune.filter((l) => l.m === stato.m && l.a !== primo.a
      && STUDIO_GUIDATO[stato.m].dipendenze[primo.a].interni.includes(l.a)).map((l) => min(l.titolo)) : [];
    const tutte = [...causeInterne, ...cause];
    if (primo && tutte.length) sintesi = `Le difficoltà in ${min(primo.titolo)} dipendono da ${elenca(tutte, 'da ')}.`;
    else if (primo) sintesi = `Le difficoltà riguardano ${min(primo.titolo)}; le basi verificate risultano acquisite.`;
    else sintesi = `Le basi da riprendere sono ${elenca(lacune.map((l) => min(l.titolo)))}.`;
    if (deboli.length > 1) sintesi += ` Risultano deboli anche ${elenca(deboli.slice(1).map((d) => min(d.titolo)))}.`;
  }
  return {
    v: 1, materia: stato.m, quando: Date.now(), domande: stato.n, sintesi, argomenti, basi, lacune,
    viste: stato.usate,
    risposte: fatte.map((u) => ({ m: u.m, a: u.a, r: u.r })),
  };
}

// Progresso fra un test e l'altro: lacune trovate in tutti i test e quante non risultano più.
export function progresso(storico) {
  if (!storico?.length) return null;
  const [ultimo] = storico;
  const chiave = (l) => `${l.m}/${l.a}`;
  const trovate = new Set(storico.flatMap((e) => e.lacune.map(chiave)));
  const ancora = new Set(ultimo.lacune.map(chiave));
  const verificate = new Set([...ultimo.argomenti.filter((x) => x.stima !== null).map((x) => `${ultimo.materia}/${x.a}`), ...ultimo.basi.map((b) => `${MATERIA_BASI}/${b.a}`)]);
  const risolte = [...trovate].filter((k) => !ancora.has(k) && verificate.has(k));
  return { trovate: trovate.size, risolte: risolte.length, test: storico.length, ultimo: ultimo.quando, prossimo: ultimo.lacune[0] || null };
}

// ---------- archivio (Durable Object) ----------
export function creaTabelleStudioGuidato(sql) {
  sql.exec('CREATE TABLE IF NOT EXISTS studio_guidato (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, materia TEXT, quando INTEGER, esito TEXT)');
  sql.exec('CREATE INDEX IF NOT EXISTS studio_guidato_email ON studio_guidato (email, materia, quando)');
}
export function archivioStudioGuidato(ar, pathname, c) {
  if (pathname === '/sg-storico') {
    const righe = ar.righe('SELECT esito FROM studio_guidato WHERE email = ? AND materia = ? ORDER BY quando DESC LIMIT 20', c.email, c.materia);
    return { storico: righe.map((r) => JSON.parse(r.esito)) };
  }
  if (pathname === '/sg-salva') {
    ar.sql.exec('INSERT INTO studio_guidato (email, materia, quando, esito) VALUES (?, ?, ?, ?)', c.email, c.materia, c.esito.quando, JSON.stringify(c.esito));
    return { ok: true };
  }
  return null;
}

// Domanda pronta per il browser: testo e risposte (la corretta resta nel Worker).
export function domandaPubblica(q, dati, titoli, stato) {
  const [argomento] = q.id.split('/');
  const d = dati?.argomenti?.[argomento]?.find((x) => x.id === q.id);
  if (!d) return null;
  return {
    numero: stato.n + 1, testo: d.testo, scelte: d.scelte,
    argomento: titoli?.[q.m]?.[argomento] || argomento, base: q.m === MATERIA_BASI, livello: q.liv,
  };
}
