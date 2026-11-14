// Studio guidato: test sulle lacune (anteprima riservata ai GM). Versione 2 del 14/11/2026 sera,
// richiesta di Carmine: lo studente che non sa da dove iniziare deve saperlo dopo poche domande,
// con un esito minuzioso (abilità per abilità) e il rimando al punto del sito che serve.
//
// Lo studente sceglie il capitolo su cui è bloccato. Ogni capitolo è diviso in abilità
// (src/data/studio-guidato-livelli.json); il test propone una domanda di livello medio per abilità.
// Dopo una risposta sbagliata, se restano domande di scorta, propone una domanda più semplice sulla
// stessa abilità; se è sbagliata anche quella l'abilità è una lacuna e il test verifica la base da cui
// dipende (RIMANDI in src/data/studio-guidato.mjs). Le domande di scorta sono quelle che avanzano
// dopo averne riservata una a ogni abilità: vanno alle prime abilità sbagliate, che nel programma
// vengono prima.
// Con «Non so da dove iniziare» il test propone una domanda per capitolo, in ordine, e si ferma
// al primo capitolo con una risposta sbagliata: il test prosegue su quello.
// Il ricontrollo propone una domanda per ciascuna lacuna dell'ultimo test.
// Lo stato viaggia firmato fra browser e Worker; l'esito finale si salva nell'archivio.
import { STUDIO_GUIDATO, MATERIA_BASI, REGOLE_SG, RIMANDI } from '../src/data/studio-guidato.mjs';
import CLASSI from '../src/data/studio-guidato-livelli.json' with { type: 'json' };
import TITOLI_RIMANDI from '../src/data/studio-guidato-rimandi.json' with { type: 'json' };

export const VERSIONE_SG = 2;
export const materieGuidate = () => Object.keys(STUDIO_GUIDATO);
export const capitoli = (materia) => Object.keys(STUDIO_GUIDATO[materia]?.dipendenze || {});

// Banca: per materia e argomento, le domande con livello (1-3) e indice dell'abilità.
const bancaCache = {};
export function banca(materia) {
  if (bancaCache[materia]) return bancaCache[materia];
  const per = {};
  for (const [id, [livello, ab]] of Object.entries(CLASSI.domande?.[materia] || {})) {
    const [argomento] = id.split('/');
    (per[argomento] ||= []).push({ id, livello: Math.abs(livello), ab });
  }
  return (bancaCache[materia] = per);
}

// Chiave di un'abilità: «materia/argomento#indice».
const chiave = (m, a, i) => `${m}/${a}#${i}`;
const parti = (k) => { const [ma, i] = k.split('#'); const [m, a] = ma.split('/'); return { m, a, i: Number(i), ma }; };
export const nomeAbilita = (k) => { const p = parti(k); return CLASSI.abilita?.[p.ma]?.[p.i] ?? null; };
const basiDi = (k) => { const p = parti(k); return (RIMANDI[p.ma]?.[p.i] || '||').split('|')[2].split(',').filter(Boolean); };

// tipo: 'ab' abilità del capitolo, 'base' prerequisito, 'ric' ricontrollo. st: null finché non è chiusa.
const unita = (k, tipo, padre = null) => ({ k, tipo, r: [], st: null, padre });

// Stato iniziale. argomento = capitolo scelto (null: lo cerca il test); ricontrollo = solo le lacune di «precedente».
export function creaStato({ materia, argomento = null, ricontrollo = false, precedente = null, viste = [] }) {
  const base = { v: VERSIONE_SG, m: materia, a: null, modo: 'cerca', c: 0, u: [], i: 0, n: 0, n0: 0, cerca: [], viste: viste.slice(-300), usate: [], q: null, t: Date.now() };
  if (ricontrollo && precedente?.v === VERSIONE_SG && precedente.lacune?.length) {
    return { ...base, modo: 'ricontrollo', a: precedente.capitolo || null, u: precedente.lacune.slice(0, REGOLE_SG.maxDomandeTest).map((l) => unita(l.k, 'ric', l.tipo)) };
  }
  if (argomento && capitoli(materia).includes(argomento)) return { ...base, modo: 'capitolo', a: argomento, u: unitaDelCapitolo(materia, argomento) };
  return base;
}
const unitaDelCapitolo = (m, a) => (CLASSI.abilita?.[`${m}/${a}`] || []).map((_, i) => unita(chiave(m, a, i), 'ab'));

// Domanda per un'abilità: il livello chiesto se c'è, altrimenti il più vicino (prima i più semplici).
function scegli(stato, k, livelli, escluse = []) {
  const p = parti(k);
  const tutte = (banca(p.m)[p.a] || []).filter((q) => q.ab === p.i);
  const usate = new Set([...stato.usate, ...escluse]);
  const viste = new Set(stato.viste);
  const libere = tutte.filter((q) => !usate.has(`${p.m}:${q.id}`));
  for (const pool of [libere.filter((q) => !viste.has(`${p.m}:${q.id}`)), libere]) {
    for (const l of livelli) {
      const cand = pool.filter((q) => q.livello === l);
      if (cand.length) return cand[Math.floor(Math.random() * cand.length)];
    }
  }
  return null;
}

// Domande ancora disponibili oltre a quella riservata a ogni abilità non ancora chiesta.
function scorta(stato) {
  const daChiedere = stato.u.filter((u, j) => j > stato.i && u.st === null && !u.r.length).length;
  return REGOLE_SG.maxDomandeTest + stato.n0 - stato.n - daChiedere;
}

// Prossima domanda (o null se il test è finito). Aggiorna stato.q.
export function prossima(stato) {
  if (stato.modo === 'cerca') {
    const cap = capitoli(stato.m);
    while (stato.c < cap.length) {
      const a = cap[stato.c];
      // Una domanda di livello medio su un'abilità a caso del capitolo.
      const indici = (CLASSI.abilita?.[`${stato.m}/${a}`] || []).map((_, i) => i).sort(() => Math.random() - 0.5);
      for (const i of indici) {
        const q = scegli(stato, chiave(stato.m, a, i), [2]);
        if (q) { stato.q = { m: stato.m, id: q.id, liv: q.livello, k: chiave(stato.m, a, i) }; return stato.q; }
      }
      stato.c++;
    }
    stato.q = null;
    return null;
  }
  while (stato.i < stato.u.length) {
    const u = stato.u[stato.i];
    if (u.st === null) {
      const p = parti(u.k);
      const prima = REGOLE_SG.livelloPrima;
      // Seconda domanda: più semplice della prima, se esiste; altrimenti dello stesso livello.
      const livelli = u.r.length ? [1, 2, 3].filter((l) => l <= u.r[0][1]).sort((x, y) => (x === u.r[0][1]) - (y === u.r[0][1]) || y - x) : [prima, 1, 3];
      const q = scegli(stato, u.k, livelli);
      if (q) { stato.q = { m: p.m, id: q.id, liv: q.livello, k: u.k }; return stato.q; }
      u.st = u.r.length ? 'incerta' : 'nv';
    }
    stato.i++;
  }
  stato.q = null;
  return null;
}

// Registra la risposta alla domanda corrente (ok = true/false; «Non lo so» vale false).
export function registra(stato, ok) {
  const q = stato.q;
  if (!q) return;
  stato.usate.push(`${q.m}:${q.id}`);
  stato.n++;
  stato.q = null;
  if (stato.modo === 'cerca') {
    const a = capitoli(stato.m)[stato.c];
    stato.cerca.push([a, ok ? 1 : 0]);
    if (ok) { stato.c++; return; }
    // Primo capitolo con una risposta sbagliata: il test prosegue lì. La domanda sbagliata vale
    // come prima domanda della sua abilità, che viene verificata per prima.
    stato.modo = 'capitolo'; stato.a = a; stato.n0 = stato.n - 1;
    stato.u = unitaDelCapitolo(stato.m, a);
    const j = stato.u.findIndex((u) => u.k === q.k);
    const [u] = stato.u.splice(j, 1);
    u.r.push([q.id, q.liv, 0]);
    stato.u.unshift(u);
    stato.i = 0;
    if (scorta(stato) <= 0) u.st = 'incerta';
    return;
  }
  const u = stato.u[stato.i];
  if (!u) return;
  u.r.push([q.id, q.liv, ok ? 1 : 0]);
  if (u.tipo !== 'ab') { u.st = ok ? 'ok' : 'lacuna'; return; }
  if (u.r.length === 1) {
    if (ok) u.st = 'ok';
    else if (scorta(stato) <= 0) u.st = 'incerta';
    return;
  }
  if (ok) { u.st = 'incerta'; return; }
  u.st = 'lacuna';
  // Lacuna: si verifica la base da cui dipende, se non è già nel test e resta una domanda di scorta.
  const nuove = [];
  for (const b of basiDi(u.k)) {
    if (stato.u.some((x) => x.k === b) || scorta(stato) - nuove.length <= 0) continue;
    nuove.push(unita(b, 'base', u.k));
  }
  stato.u.splice(stato.i + 1, 0, ...nuove);
}

// Rimandi di un'abilità: paragrafo della teoria, scheda svolta, domande a tempo del capitolo.
function rimandi(k) {
  const p = parti(k);
  const r = TITOLI_RIMANDI[p.ma]?.[p.i] || { t: [], s: [] };
  return {
    teoria: r.t.map((x) => ({ href: `/${p.m}/${p.a}/teoria#${x.id}`, titolo: x.titolo })),
    schede: r.s.map((x) => ({ href: `/${p.m}/${p.a}/esercizi-svolti/${x.n}`, titolo: x.titolo })),
    domande: `/${p.m}/${p.a}/domande`,
  };
}

// Esito del test: stato di ogni abilità e lacune in ordine di studio (prima le basi, poi il capitolo).
export function esito(stato, titoli) {
  const tit = (m, a) => titoli?.[m]?.[a] || a;
  const nomeMateria = (m) => (m === MATERIA_BASI ? 'Precorso' : titoli?.nomeMateria || m);
  const voce = (u, statoVoce) => {
    const p = parti(u.k);
    return { k: u.k, m: p.m, a: p.a, nome: nomeAbilita(u.k), capitolo: tit(p.m, p.a), materia: nomeMateria(p.m), stato: statoVoce };
  };
  const chiuse = stato.u.filter((u) => u.r.length);
  const statoDi = (u) => u.st ?? (u.r.at(-1)?.[2] ? 'ok' : 'incerta');
  const abilita = stato.u.filter((u) => u.tipo !== 'base').map((u) => voce(u, u.r.length ? statoDi(u) : 'nv'));
  const lacune = [];
  const aggiungi = (u, tipo) => {
    if (lacune.some((l) => l.k === u.k)) return;
    // «per»: le abilità del capitolo che dipendono da questa e sono risultate lacune.
    const per = stato.u.filter((x) => x.st === 'lacuna' && x.k !== u.k && basiDi(x.k).includes(u.k)).map((x) => nomeAbilita(x.k));
    lacune.push({ ...voce(u, statoDi(u)), tipo, per, sbagliate: u.r.filter((r) => !r[2]).length, chieste: u.r.length, ...rimandi(u.k) });
  };
  // 1. Basi sbagliate (fuori dal capitolo). 2. Abilità del capitolo che sono base di altre lacune.
  // 3. Le altre lacune nell'ordine del programma. 4. Le abilità incerte.
  for (const u of chiuse) if (u.tipo === 'base' && statoDi(u) === 'lacuna') aggiungi(u, 'base');
  const interne = new Set(chiuse.filter((u) => u.st === 'lacuna').flatMap((u) => basiDi(u.k)));
  for (const u of chiuse) if (u.tipo !== 'base' && statoDi(u) === 'lacuna' && interne.has(u.k)) aggiungi(u, 'abilita');
  for (const u of chiuse) if (u.tipo !== 'base' && statoDi(u) === 'lacuna') aggiungi(u, u.padre === 'base' ? 'base' : 'abilita');
  for (const u of chiuse) if (u.tipo !== 'base' && statoDi(u) === 'incerta') aggiungi(u, 'abilita');

  const cap = stato.a ? tit(stato.m, stato.a) : null;
  const min = (t) => `«${t}»`;
  const gravi = lacune.filter((l) => l.stato === 'lacuna');
  let sintesi;
  if (!stato.n) sintesi = 'Il test non contiene risposte.';
  else if (stato.modo === 'ricontrollo') {
    sintesi = lacune.length ? `Restano da riprendere ${lacune.length === 1 ? 'un punto' : `${lacune.length} punti`} su ${stato.u.length}. Il primo è ${min(lacune[0].nome)}.`
      : 'Le lacune dell’ultimo test non risultano più. Il passo successivo è un altro capitolo oppure la simulazione d’esame.';
  } else if (!stato.a) sintesi = 'Le risposte sono corrette in tutti i capitoli. Il passo successivo è la simulazione d’esame.';
  else if (!lacune.length) sintesi = `In ${min(cap)} non sono emerse lacune.`;
  else {
    const primo = lacune[0];
    sintesi = primo.per.length
      ? `Il punto da cui ripartire è ${min(primo.nome)} (${primo.materia === 'Precorso' ? `Precorso, ${primo.capitolo}` : primo.capitolo}), perché è la base di ${min(primo.per[0])}.`
      : `Il punto da cui ripartire in ${min(cap)} è ${min(primo.nome)}.`;
    const altri = lacune.length - 1;
    if (altri) sintesi += ` ${altri === 1 ? 'C’è un altro punto' : `Ci sono altri ${altri} punti`} da riprendere${gravi.length ? '' : ', tutti da consolidare'}.`;
  }
  return {
    v: VERSIONE_SG, materia: stato.m, modo: stato.modo, capitolo: stato.a, titoloCapitolo: cap, quando: Date.now(), domande: stato.n,
    sintesi, abilita, lacune, cerca: stato.cerca,
    viste: stato.usate,
    risposte: chiuse.map((u) => ({ k: u.k, r: u.r })),
  };
}

// Progresso fra un test e l'altro: lacune trovate in tutti i test e quante non risultano più.
export function progresso(storico) {
  const validi = (storico || []).filter((e) => e.v === VERSIONE_SG);
  if (!validi.length) return null;
  const [ultimo] = validi;
  const trovate = new Set(validi.flatMap((e) => e.lacune.map((l) => l.k)));
  // Stato più recente di ogni abilità verificata.
  const recente = new Map();
  for (const e of [...validi].reverse()) {
    for (const x of e.abilita) if (x.stato !== 'nv') recente.set(x.k, x.stato);
    for (const l of e.lacune) recente.set(l.k, l.stato);
  }
  const risolte = [...trovate].filter((k) => recente.get(k) === 'ok');
  return { trovate: trovate.size, risolte: risolte.length, test: validi.length, ultimo: ultimo.quando, prossimo: ultimo.lacune[0] || null };
}

// ---------- archivio (Durable Object) ----------
export function creaTabelleStudioGuidato(sql) {
  sql.exec('CREATE TABLE IF NOT EXISTS studio_guidato (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT, materia TEXT, quando INTEGER, esito TEXT)');
  sql.exec('CREATE INDEX IF NOT EXISTS studio_guidato_email ON studio_guidato (email, materia, quando)');
}
export function archivioStudioGuidato(ar, pathname, c) {
  if (pathname === '/sg-storico') {
    const righe = ar.righe('SELECT esito FROM studio_guidato WHERE email = ? AND materia = ? ORDER BY quando DESC LIMIT 20', c.email, c.materia);
    // Gli esiti della prima versione del test (per capitolo, senza abilità) non si leggono più.
    return { storico: righe.map((r) => JSON.parse(r.esito)).filter((e) => e.v === VERSIONE_SG) };
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
  const massimo = stato.modo === 'cerca' ? null : stato.modo === 'ricontrollo' ? stato.u.length : REGOLE_SG.maxDomandeTest + stato.n0;
  return {
    numero: stato.n + 1, massimo, testo: d.testo, scelte: d.scelte,
    argomento: titoli?.[q.m]?.[argomento] || argomento, base: q.m === MATERIA_BASI,
    fase: stato.modo === 'cerca' ? 'cerca' : stato.modo === 'ricontrollo' ? 'ricontrollo' : stato.u[stato.i]?.tipo === 'base' ? 'base' : 'capitolo',
  };
}
