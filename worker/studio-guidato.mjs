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
// Errori tipici delle risposte sbagliate (P3, 15/11/2026): catalogo per capitolo e diagnosi di ogni risposta.
// Scritto da agenti con istruzioni-agenti/brief-studio-guidato-errori.md, unito da strumenti/sg-errori-unisci.py.
import ERRORI from '../src/data/studio-guidato-errori.json' with { type: 'json' };

export const VERSIONE_SG = 2;
export const materieGuidate = () => Object.keys(STUDIO_GUIDATO);
// Materie da cui si prendono le basi (dalle chiavi dei rimandi).
export const materieDelleBasi = () => [...new Set(Object.keys(RIMANDI).map((k) => k.split('/')[0]))];
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
export const abilitaDi = (m, a) => CLASSI.abilita?.[`${m}/${a}`] || [];
export const nomeAbilita = (k) => { const p = parti(k); return CLASSI.abilita?.[p.ma]?.[p.i] ?? null; };
// Abilità, paragrafo di teoria e scheda svolta collegati a una domanda a tempo: la pagina delle domande li mostra
// dopo una risposta sbagliata («Da ripassare») e nel risultato della serie. null se la domanda non è classificata.
export function rimandiDomanda(materia, id) {
  const classe = CLASSI.domande?.[materia]?.[id];
  if (!classe) return null;
  const [argomento] = String(id).split('/');
  const i = classe[1];
  const abilita = CLASSI.abilita?.[`${materia}/${argomento}`]?.[i];
  if (!abilita) return null;
  const r = TITOLI_RIMANDI[`${materia}/${argomento}`]?.[i] || {};
  return { k: `${argomento}#${i}`, argomento, abilita, t: (r.t || []).slice(0, 1), s: (r.s || []).slice(0, 1) };
}
const basiDi = (k) => { const p = parti(k); return (RIMANDI[p.ma]?.[p.i] || '||').split('|')[2].split(',').filter(Boolean); };

// tipo: 'ab' abilità del capitolo, 'base' prerequisito, 'ric' ricontrollo. st: null finché non è chiusa.
const unita = (k, tipo, padre = null) => ({ k, tipo, r: [], st: null, padre });

// Stato iniziale. argomento = capitolo scelto (null: lo cerca il test); ricontrollo = solo le lacune di «precedente».
// priorita = indici delle abilità da verificare per prime (scelte da «Cosa ti blocca?», worker/studio-guidato-ia.mjs).
export function creaStato({ materia, argomento = null, ricontrollo = false, precedente = null, viste = [], priorita = [] }) {
  const base = { v: VERSIONE_SG, m: materia, a: null, modo: 'cerca', c: 0, u: [], i: 0, n: 0, n0: 0, cerca: [], viste: viste.slice(-300), usate: [], q: null, t: Date.now() };
  if (ricontrollo && precedente?.v === VERSIONE_SG && precedente.lacune?.length) {
    return { ...base, modo: 'ricontrollo', a: precedente.capitolo || null, u: precedente.lacune.slice(0, REGOLE_SG.maxDomandeTest).map((l) => unita(l.k, 'ric', l.tipo)) };
  }
  if (argomento && capitoli(materia).includes(argomento)) {
    const u = unitaDelCapitolo(materia, argomento);
    const prime = [...new Set(priorita)].filter((i) => Number.isInteger(i) && i >= 0 && i < u.length).slice(0, 3);
    return { ...base, modo: 'capitolo', a: argomento, u: [...prime.map((i) => u[i]), ...u.filter((_, i) => !prime.includes(i))] };
  }
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
      // Dopo una risposta giusta data tirando a indovinare: una domanda dello stesso livello, per conferma.
      const livelli = u.dubbio ? [u.r[0][1], 1, 3] : u.r.length ? [1, 2, 3].filter((l) => l <= u.r[0][1]).sort((x, y) => (x === u.r[0][1]) - (y === u.r[0][1]) || y - x) : [prima, 1, 3];
      const q = scegli(stato, u.k, livelli);
      if (q) { stato.q = { m: p.m, id: q.id, liv: q.livello, k: u.k }; return stato.q; }
      u.st = u.r.length ? 'incerta' : 'nv';
    }
    stato.i++;
  }
  stato.q = null;
  return null;
}

// Errore tipico della risposta `scelta` (indice 0-3) alla domanda q, oppure null.
function erroreDi(m, id, scelta) {
  if (!Number.isInteger(scelta)) return null;
  const k = ERRORI.domande?.[m]?.[id]?.[String(scelta + 1)];
  if (!k) return null;
  const [a] = id.split('/');
  const e = ERRORI.errori?.[`${m}/${a}`]?.find((x) => x.id === k);
  return e ? `${m}/${a}:${k}` : null;
}
const datiErrore = (chiaveErrore) => {
  const [ma, k] = chiaveErrore.split(':');
  return ERRORI.errori?.[ma]?.find((x) => x.id === k) || null;
};

// Registra la risposta alla domanda corrente (ok = true/false; «Non lo so» vale false).
// scelta = indice della risposta scelta (null per «Non lo so»): serve alla diagnosi dell'errore.
// sicuro = true «Sono sicuro», false «Sto tirando a indovinare», null se lo studente non l'ha indicato (P4, 15/11/2026).
// Giusta tirando a indovinare: l'abilità non è ancora verificata (seconda domanda dello stesso livello).
// Sbagliata con sicurezza: convinzione errata, che va per prima nel percorso.
export function registra(stato, ok, scelta = null, sicuro = null) {
  const sic = sicuro === true ? 1 : sicuro === false ? 0 : null;
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
    u.r.push([q.id, q.liv, 0, erroreDi(q.m, q.id, scelta), sic]);
    if (sic === 1) u.conv = true;
    stato.u.unshift(u);
    stato.i = 0;
    if (scorta(stato) <= 0) u.st = 'incerta';
    return;
  }
  const u = stato.u[stato.i];
  if (!u) return;
  u.r.push([q.id, q.liv, ok ? 1 : 0, ok ? null : erroreDi(q.m, q.id, scelta), sic]);
  if (!ok && sic === 1) u.conv = true;
  if (u.tipo !== 'ab') { u.st = ok ? (sic === 0 ? 'incerta' : 'ok') : 'lacuna'; return; }
  if (u.r.length === 1) {
    if (ok && sic !== 0) u.st = 'ok';
    else if (scorta(stato) <= 0) u.st = 'incerta';
    else if (ok) u.dubbio = true;
    return;
  }
  if (ok) { u.st = u.dubbio && sic !== 0 ? 'ok' : 'incerta'; return; }
  // Anche una risposta giusta data tirando a indovinare seguita da una sbagliata è una lacuna.
  u.st = 'lacuna';
  // Lacuna: si verifica la base da cui dipende, se non è già nel test e resta una domanda di scorta.
  const nuove = [];
  for (const b of basiDi(u.k)) {
    if (stato.u.some((x) => x.k === b) || scorta(stato) - nuove.length <= 0) continue;
    nuove.push(unita(b, 'base', u.k));
  }
  stato.u.splice(stato.i + 1, 0, ...nuove);
}

// Errori tipici diagnosticati nelle risposte sbagliate di un gruppo di unità, con quante volte compaiono.
function erroriDi(unita) {
  const conta = new Map();
  for (const u of unita) for (const r of u.r) if (!r[2] && r[3]) conta.set(r[3], (conta.get(r[3]) || 0) + 1);
  return [...conta].map(([k, volte]) => { const e = datiErrore(k); return e ? { k, nome: e.nome, fatto: e.fatto, nomeHtml: e.nomeHtml, fattoHtml: e.fattoHtml, volte } : null; })
    .filter(Boolean).sort((a, b) => b.volte - a.volte);
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
  const nomeMateria = (m) => titoli?.nomi?.[m] || (m === MATERIA_BASI ? 'Precorso' : titoli?.nomeMateria || m);
  const voce = (u, statoVoce) => {
    const p = parti(u.k);
    return { k: u.k, m: p.m, a: p.a, nome: nomeAbilita(u.k), capitolo: tit(p.m, p.a), materia: nomeMateria(p.m), stato: statoVoce };
  };
  // Le abilità con una risposta sbagliata data con sicurezza vengono prima, a parità di gruppo.
  const chiuse = stato.u.filter((u) => u.r.length).sort((x, y) => Boolean(y.conv) - Boolean(x.conv));
  const statoDi = (u) => u.st ?? (u.r.at(-1)?.[2] ? 'ok' : 'incerta');
  const abilita = stato.u.filter((u) => u.tipo !== 'base').map((u) => voce(u, u.r.length ? statoDi(u) : 'nv'));
  const lacune = [];
  const aggiungi = (u, tipo) => {
    if (lacune.some((l) => l.k === u.k)) return;
    // «per»: le abilità del capitolo che dipendono da questa e sono risultate lacune.
    const per = stato.u.filter((x) => x.st === 'lacuna' && x.k !== u.k && basiDi(x.k).includes(u.k)).map((x) => nomeAbilita(x.k));
    lacune.push({ ...voce(u, statoDi(u)), tipo, per, sbagliate: u.r.filter((r) => !r[2]).length, chieste: u.r.length, errori: erroriDi([u]), convinzione: Boolean(u.conv), indovinate: u.r.filter((r) => r[2] && r[4] === 0).length, ...rimandi(u.k) });
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
  // Errore ricorrente: lo stesso errore tipico in almeno due risposte sbagliate del test.
  const tutti = erroriDi(chiuse);
  const ricorrente = tutti.find((x) => x.volte >= 2) || null;
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
      ? `Il punto da cui ripartire è ${min(primo.nome)} (${primo.m !== stato.m ? `${primo.materia}, ${primo.capitolo}` : primo.capitolo}), perché è la base di ${min(primo.per[0])}.`
      : `Il punto da cui ripartire in ${min(cap)} è ${min(primo.nome)}.`;
    const altri = lacune.length - 1;
    if (altri) sintesi += ` ${altri === 1 ? 'C’è un altro punto' : `Ci sono altri ${altri} punti`} da riprendere${gravi.length ? '' : ', tutti da consolidare'}.`;
  }
  const convinta = lacune.find((l) => l.convinzione);
  if (convinta && stato.modo !== 'ricontrollo') sintesi += ` In «${convinta.nome}» hai sbagliato una risposta data con sicurezza.`;
  if (ricorrente && !ricorrente.nome.includes('$')) sintesi += ` L’errore che ricorre nelle risposte è «${ricorrente.nome[0].toLowerCase()}${ricorrente.nome.slice(1)}».`;
  return {
    v: VERSIONE_SG, materia: stato.m, modo: stato.modo, capitolo: stato.a, titoloCapitolo: cap, quando: Date.now(), domande: stato.n,
    sintesi, abilita, lacune, cerca: stato.cerca, errori: tutti, ricorrente,
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

// Perché il test propone questa domanda (riga sopra la domanda, P «più dinamico» del 15/11/2026).
function motivo(stato, q, titoli) {
  const nome = (k) => `«${nomeAbilita(k)}»`;
  if (stato.modo === 'cerca') {
    const a = capitoli(stato.m)[stato.c];
    return stato.n ? `Il capitolo precedente non ha dato problemi. Ora una domanda su ${`«${titoli?.[stato.m]?.[a] || a}»`}.` : 'Una domanda per ogni capitolo, in ordine, fino al primo da riprendere.';
  }
  const u = stato.u[stato.i];
  if (!u) return null;
  if (u.tipo === 'ric') return `Ricontrollo di ${nome(u.k)}, una lacuna del test precedente.`;
  if (u.tipo === 'base') return `Questa domanda verifica ${nome(u.k)}, che serve per ${nome(u.padre)}.`;
  if (u.r.length && u.dubbio) return `La risposta su ${nome(u.k)} era stata data tirando a indovinare, quindi una seconda domanda dello stesso livello la verifica.`;
  if (u.r.length) return `La risposta su ${nome(u.k)} non era corretta, quindi questa domanda è più semplice.`;
  const fatte = stato.u.filter((x) => x.tipo === 'ab' && x.r.length).length;
  const tot = stato.u.filter((x) => x.tipo === 'ab').length;
  return `Abilità ${Math.min(fatte + 1, tot)} di ${tot} · ${nome(u.k)}`;
}

// Domanda pronta per il browser: testo e risposte (la corretta resta nel Worker).
export function domandaPubblica(q, dati, titoli, stato) {
  const [argomento] = q.id.split('/');
  const d = dati?.argomenti?.[argomento]?.find((x) => x.id === q.id);
  if (!d) return null;
  const massimo = stato.modo === 'cerca' ? null : stato.modo === 'ricontrollo' ? stato.u.length : REGOLE_SG.maxDomandeTest + stato.n0;
  return {
    numero: stato.n + 1, massimo, testo: d.testo, scelte: d.scelte,
    // base: domanda di un'altra materia (Precorso, oppure Analisi 1 per Analisi 2).
    argomento: titoli?.[q.m]?.[argomento] || argomento, base: q.m !== stato.m, materiaBase: q.m !== stato.m ? (titoli?.nomi?.[q.m] || q.m) : null,
    fase: stato.modo === 'cerca' ? 'cerca' : stato.modo === 'ricontrollo' ? 'ricontrollo' : stato.u[stato.i]?.tipo === 'base' ? 'base' : 'capitolo',
    abilita: nomeAbilita(q.k), motivo: motivo(stato, q, titoli),
  };
}
