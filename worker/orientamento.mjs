// I risultati dell'orientamento appartengono soltanto all'account collegato.
// Le risposte arrivano dal browser; l'esito viene sempre calcolato qui.
import { VERSIONE_STUDIO, PROFILI_STUDIO } from '../src/data/orientamento-studio.mjs';
import { domandeBaseStudio, approfondimentiStudio, valutaStudio, OBIETTIVI_STUDIO } from '../src/lib/orientamento-studio.mjs';
import { VERSIONE_UNIVERSITA, AREE_UNIVERSITA } from '../src/data/orientamento-universita.mjs';
import { domandeBaseUniversita, approfondimentiUniversita, valutaUniversita } from '../src/lib/orientamento-universita.mjs';
import { DURATA_RISULTATO_ORIENTAMENTO, scadenzaRisultatoOrientamento } from '../src/lib/orientamento-privacy.mjs';
import { risorsaTestOrientamento } from '../src/lib/orientamento-accesso.mjs';
import { sessioneDispositivoValida } from './dispositivi.mjs';

export const SCHEMA_ORIENTAMENTO = 1;
export const MAX_CORPO_ORIENTAMENTO = 16 * 1024;
export const MAX_RISPOSTE_ORIENTAMENTO = 128;
// Il riepilogo server può includere tutte le aree e le risposte di riferimento.
// Questo limite non amplia il corpo JSON accettato dal browser (16 KiB).
const MAX_ESITO_BYTES = 128 * 1024;
const campiProva = new Set(['tipo', 'materia', 'obiettivo', 'versione', 'risposte', 'areaScelta']);
const intestazioni = {
  'cache-control': 'private, no-store', 'cdn-cache-control': 'no-store', 'cloudflare-cdn-cache-control': 'no-store',
  vary: 'Cookie', 'x-content-type-options': 'nosniff', 'x-robots-tag': 'noindex, nofollow',
};
const record = (x) => Boolean(x) && typeof x === 'object' && !Array.isArray(x)
  && [Object.prototype, null].includes(Object.getPrototypeOf(x));
const bytes = (x) => new TextEncoder().encode(x).byteLength;

class ErroreOrientamento extends Error {
  constructor(codice, messaggio, stato = 400) {
    super(messaggio);
    this.codice = codice;
    this.stato = stato;
  }
}
const errore = (codice, messaggio, stato) => { throw new ErroreOrientamento(codice, messaggio, stato); };
const datiErrore = (e) => ({ ok: false, codice: e.codice, errore: e.message, stato: e.stato });

// Il setter pathname mantiene ? e # decodificati come parti del percorso:
// non devono troncare il controllo prima di risolvere eventuali segmenti '..'.
export function normalizzaPercorsoOrientamento(percorso) {
  let decoded;
  try { decoded = decodeURIComponent(percorso); } catch { return percorso; }
  const url = new URL('https://orientamento.invalid');
  url.pathname = decoded.replaceAll('\\', '/').replace(/\/+/g, '/');
  return url.pathname.replace(/\/$/, '').replace(/\.html$/i, '').replace(/\/index$/, '');
}

// Il chiamante normalizza prima il percorso, incluse le varianti .html e index.
export function tipoRisorsaOrientamento(percorso) {
  if (percorso === '/orientamento' || percorso.startsWith('/orientamento/')) return 'pagina';
  return risorsaTestOrientamento(percorso) ? 'script' : null;
}

export function rispostaPrivataOrientamento(risposta) {
  const headers = new Headers(risposta.headers);
  const vary = new Set((headers.get('vary') || '').split(',').map((x) => x.trim()).filter(Boolean));
  if (![...vary].some((x) => x.toLowerCase() === 'cookie')) vary.add('Cookie');
  for (const [nome, valore] of Object.entries(intestazioni)) headers.set(nome, valore);
  headers.set('vary', [...vary].join(', '));
  for (const nome of ['etag', 'last-modified', 'expires', 'age']) headers.delete(nome);
  return new Response(risposta.body, { status: risposta.status, statusText: risposta.statusText, headers });
}

export function richiestaPrivataOrientamento(req) {
  const headers = new Headers(req.headers);
  for (const nome of ['if-none-match', 'if-modified-since', 'if-match', 'if-unmodified-since', 'if-range']) headers.delete(nome);
  return new Request(req, { headers });
}

function tokenOrientamentoValido(t, durataSessione) {
  return Boolean(t) && typeof t.e === 'string' && Number.isInteger(t.v) && t.v >= 1
    && typeof t.d === 'string' && /^[0-9a-f]{32}$/.test(t.d)
    && Number.isFinite(t.t) && t.t <= Date.now() && Date.now() - t.t < durataSessione * 1000;
}

// Restituisce una risposta di rifiuto, oppure null se la richiesta può proseguire.
// La verifica nel DO non usa ruoli dichiarati nel cookie, header o corpo.
export async function proteggiOrientamento(req, env, h, tipo) {
  const risposta = (testo, stato, extra = {}) => rispostaPrivataOrientamento(new Response(req.method === 'HEAD' ? null : testo, {
    status: stato, headers: { 'content-type': 'text/plain; charset=utf-8', ...extra },
  }));
  if (!['GET', 'HEAD'].includes(req.method)) return risposta('Metodo non consentito.', 405, { allow: 'GET, HEAD' });
  let accesso;
  try {
    const t = await h.tokenSessione(env, req).catch(() => null);
    accesso = tokenOrientamentoValido(t, h.durataSessione)
      ? await h.aDO(env, '/ori-accesso', { email: t.e, versione: t.v, dispositivo: t.d, nonce: t.g })
      : { ok: false, stato: 401, errore: 'Accedi con un account GM per aprire l’orientamento.' };
  } catch { accesso = null; }
  if (accesso?.ok === true) return null;
  if (accesso?.stato === 401 && tipo === 'pagina') {
    const url = new URL(req.url);
    return rispostaPrivataOrientamento(new Response(null, { status: 302, headers: {
      location: `/accedi?dopo=${encodeURIComponent(url.pathname + url.search)}`,
    } }));
  }
  if (accesso?.stato === 401 || accesso?.stato === 403) return risposta(accesso.errore, accesso.stato);
  return risposta('L’orientamento non è disponibile in questo momento. Riprova tra poco.', 503);
}

export function creaTabelleOrientamento(sql) {
  sql.exec(`CREATE TABLE IF NOT EXISTS orientamento_risultati (
    email TEXT NOT NULL, id TEXT NOT NULL, schema_versione INTEGER NOT NULL,
    tipo TEXT NOT NULL, materia TEXT, obiettivo TEXT, versione TEXT NOT NULL,
    area_scelta TEXT, aggiornato TEXT NOT NULL, risposte_json TEXT NOT NULL, esito_json TEXT NOT NULL,
    PRIMARY KEY (email, id)
  );
  CREATE INDEX IF NOT EXISTS orientamento_scadenza ON orientamento_risultati (aggiornato);
  CREATE TRIGGER IF NOT EXISTS orientamento_elimina_account
    AFTER DELETE ON utenti
    BEGIN DELETE FROM orientamento_risultati WHERE email = OLD.email; END;`);
}

function versioneCorrente(tipo) {
  return tipo === 'studio' ? VERSIONE_STUDIO : VERSIONE_UNIVERSITA;
}
function risultatoPubblico(r) {
  return {
    schema: r.schema_versione, id: r.id, tipo: r.tipo, materia: r.materia,
    obiettivo: r.obiettivo, versione: r.versione, areaScelta: r.area_scelta,
    aggiornato: r.aggiornato, scade: scadenzaRisultatoOrientamento(r.aggiornato),
    risposte: JSON.parse(r.risposte_json), esito: JSON.parse(r.esito_json),
    daAggiornare: r.schema_versione !== SCHEMA_ORIENTAMENTO || r.versione !== versioneCorrente(r.tipo)
      || (r.tipo === 'studio' && !Object.hasOwn(PROFILI_STUDIO, r.materia)),
  };
}

function risposteValide(prova) {
  const r = prova.risposte;
  if (!record(r)) errore('risposte', 'Le risposte non sono valide. Riapri il test e riprova.');
  const voci = Object.entries(r);
  if (!voci.length || voci.length > MAX_RISPOSTE_ORIENTAMENTO) errore('risposte', 'Il numero di risposte non è valido.');
  for (const [id, valore] of voci) {
    if (id.length > 100 || !/^[a-z0-9][a-z0-9_.:-]*$/.test(id)) errore('risposte', 'Una domanda non appartiene al test.');
    const valido = prova.tipo === 'studio'
      ? (Number.isInteger(valore) && valore >= 0 && valore <= 3) || valore === 'non-so' || valore === 'non-studiato'
      : (Number.isInteger(valore) && valore >= 1 && valore <= 5) || valore === 'non-conosco';
    if (!valido) errore('risposte', 'Una risposta non è valida. Riapri il test e riprova.');
  }
  return Object.fromEntries(voci);
}

function controllaDomande(risposte, base, ulteriori, facoltative) {
  const obbligatorie = new Set(base.map((q) => q.id));
  const aggiuntive = new Set(ulteriori.map((q) => q.id));
  const ammesse = new Set([...obbligatorie, ...aggiuntive]);
  if (Object.keys(risposte).some((id) => !ammesse.has(id))) errore('risposte', 'Una domanda non appartiene a questo test.');
  if ([...obbligatorie].some((id) => !Object.hasOwn(risposte, id))) errore('incompleto', 'Completa le domande del test prima di salvare il risultato.');
  const dateAggiuntive = [...aggiuntive].filter((id) => Object.hasOwn(risposte, id)).length;
  if ((!facoltative || dateAggiuntive > 0) && dateAggiuntive !== aggiuntive.size)
    errore('incompleto', 'Completa le domande di approfondimento prima di salvare il risultato.');
}

// Questa funzione non accetta né un punteggio né un esito preparato dal browser.
function preparaRisultato(prova) {
  if (!record(prova) || Object.keys(prova).some((k) => !campiProva.has(k)))
    errore('richiesta', 'I dati del test non sono validi.');
  if (!['studio', 'universita'].includes(prova.tipo)) errore('tipo', 'Scegli un test di orientamento.');
  if (prova.versione !== versioneCorrente(prova.tipo))
    errore('versione', 'Questo test è stato aggiornato. Riaprilo per salvare un risultato della versione attuale.', 409);
  if (bytes(JSON.stringify(prova)) > MAX_CORPO_ORIENTAMENTO) errore('dimensione', 'Il test inviato è troppo grande.', 413);
  const risposte = risposteValide(prova);
  let esito, materia = null, obiettivo = null, areaScelta = null;
  if (prova.tipo === 'studio') {
    if (typeof prova.materia !== 'string' || !Object.hasOwn(PROFILI_STUDIO, prova.materia))
      errore('materia', 'Scegli una disciplina disponibile per l’orientamento.');
    if (!OBIETTIVI_STUDIO.includes(prova.obiettivo)) errore('obiettivo', 'Scegli il tuo obiettivo di studio.');
    if (Object.hasOwn(prova, 'areaScelta')) errore('richiesta', 'L’area universitaria non appartiene a questo test.');
    materia = prova.materia;
    obiettivo = prova.obiettivo;
    const base = domandeBaseStudio(materia, obiettivo);
    const risposteBase = Object.fromEntries(base.filter((q) => Object.hasOwn(risposte, q.id)).map((q) => [q.id, risposte[q.id]]));
    const ulteriori = approfondimentiStudio(materia, obiettivo, risposteBase);
    controllaDomande(risposte, base, ulteriori, false);
    esito = valutaStudio(materia, obiettivo, risposte);
    if (!esito.completo) errore('incompleto', 'Completa il test prima di salvare il risultato.');
  } else {
    if (Object.hasOwn(prova, 'materia') || Object.hasOwn(prova, 'obiettivo'))
      errore('richiesta', 'La disciplina e l’obiettivo appartengono al test di studio.');
    if (Object.hasOwn(prova, 'areaScelta')) {
      if (typeof prova.areaScelta !== 'string' || !AREE_UNIVERSITA.some((a) => a.id === prova.areaScelta))
        errore('area', 'Scegli un’area universitaria disponibile.');
      areaScelta = prova.areaScelta;
    }
    const base = domandeBaseUniversita();
    const risposteBase = Object.fromEntries(base.filter((q) => Object.hasOwn(risposte, q.id)).map((q) => [q.id, risposte[q.id]]));
    const ulteriori = approfondimentiUniversita({ risposte: risposteBase, ...(areaScelta ? { areaScelta } : {}) });
    controllaDomande(risposte, base, ulteriori, true);
    esito = valutaUniversita({ risposte, ...(areaScelta ? { areaScelta } : {}) });
    if (!esito.copertura?.completa) errore('incompleto', 'Completa il questionario prima di salvare il risultato.');
  }
  const esitoJson = JSON.stringify(esito);
  if (bytes(esitoJson) > MAX_ESITO_BYTES) errore('dimensione', 'Non è stato possibile salvare questo risultato.', 413);
  return {
    id: prova.tipo === 'studio' ? `studio:${materia}` : 'universita',
    tipo: prova.tipo, materia, obiettivo, versione: prova.versione, areaScelta,
    risposteJson: JSON.stringify(risposte), esitoJson,
  };
}

function eliminaScaduti(ar, email) {
  const soglia = new Date(Date.now() - DURATA_RISULTATO_ORIENTAMENTO).toISOString();
  const filtro = email === undefined ? 'aggiornato <= ?' : 'email = ? AND aggiornato <= ?';
  const params = email === undefined ? [soglia] : [email, soglia];
  const eliminati = ar.riga(`SELECT COUNT(*) AS n FROM orientamento_risultati WHERE ${filtro}`, ...params).n;
  if (eliminati) ar.sql.exec(`DELETE FROM orientamento_risultati WHERE ${filtro}`, ...params);
  return eliminati;
}

export function archivioOrientamento(ar, percorso, c) {
  // Solo il cron interno richiama questo percorso attraverso il binding del DO.
  // L'API pubblica espone soltanto lista, salvataggio ed eliminazione propri.
  if (percorso === '/ori-pulisci') return { ok: true, eliminati: eliminaScaduti(ar) };
  if (!['/ori-accesso', '/ori-lista', '/ori-salva', '/ori-elimina'].includes(percorso)) return null;
  if (!sessioneDispositivoValida(ar, c)) return { ok: false, codice: 'accesso', errore: 'Accedi per aprire o salvare i tuoi risultati.', stato: 401 };
  if (!ar.riga('SELECT gm_manuale FROM utenti WHERE email = ?', c.email)?.gm_manuale)
    return { ok: false, codice: 'riservato-gm', errore: 'L’orientamento è riservato agli account GM.', stato: 403 };
  if (percorso === '/ori-accesso') return { ok: true };
  // La firma del cookie e il dispositivo determinano l'identità. L'impronta
  // segnala soltanto che un'altra scheda ha cambiato account nel frattempo.
  if (c.accountAtteso !== null && c.accountAtteso !== c.accountCorrente)
    return { ok: false, codice: 'account-cambiato', errore: 'L’account collegato è cambiato. Ricarica la pagina prima di salvare o eliminare un risultato.', stato: 409 };
  try {
    // Anche se un ciclo programmato è in ritardo, l'API non restituisce scaduti.
    // Leggere un risultato non rinnova la data dell'ultimo salvataggio.
    eliminaScaduti(ar, c.email);
    if (percorso === '/ori-lista') {
      return { ok: true, risultati: ar.righe('SELECT * FROM orientamento_risultati WHERE email = ? ORDER BY aggiornato DESC, id', c.email).map(risultatoPubblico) };
    }
    if (percorso === '/ori-salva') {
      const r = preparaRisultato(c.prova);
      const quando = new Date(Date.now()).toISOString();
      ar.sql.exec(`INSERT INTO orientamento_risultati
        (email, id, schema_versione, tipo, materia, obiettivo, versione, area_scelta, aggiornato, risposte_json, esito_json)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(email, id) DO UPDATE SET schema_versione = excluded.schema_versione,
          tipo = excluded.tipo, materia = excluded.materia, obiettivo = excluded.obiettivo,
          versione = excluded.versione, area_scelta = excluded.area_scelta, aggiornato = excluded.aggiornato,
          risposte_json = excluded.risposte_json, esito_json = excluded.esito_json`,
        c.email, r.id, SCHEMA_ORIENTAMENTO, r.tipo, r.materia, r.obiettivo, r.versione,
        r.areaScelta, quando, r.risposteJson, r.esitoJson);
      return { ok: true, risultato: risultatoPubblico(ar.riga('SELECT * FROM orientamento_risultati WHERE email = ? AND id = ?', c.email, r.id)) };
    }
    const d = c.elimina;
    if (!record(d) || Object.keys(d).some((k) => !['id', 'tutti'].includes(k))
      || (Object.hasOwn(d, 'id') === Object.hasOwn(d, 'tutti'))
      || (Object.hasOwn(d, 'tutti') && d.tutti !== true)
      || (Object.hasOwn(d, 'id') && (typeof d.id !== 'string' || !/^(universita|studio:[a-z0-9-]{1,80})$/.test(d.id))))
      errore('richiesta', 'Scegli il risultato da eliminare.');
    const filtro = d.tutti ? 'email = ?' : 'email = ? AND id = ?';
    const params = d.tutti ? [c.email] : [c.email, d.id];
    const eliminati = ar.riga(`SELECT COUNT(*) AS n FROM orientamento_risultati WHERE ${filtro}`, ...params).n;
    ar.sql.exec(`DELETE FROM orientamento_risultati WHERE ${filtro}`, ...params);
    return { ok: true, eliminati };
  } catch (e) {
    if (e instanceof ErroreOrientamento) return datiErrore(e);
    // I motori puri rifiutano anche identificativi e valori incompatibili.
    if (e instanceof TypeError || e instanceof RangeError)
      return { ok: false, codice: 'risposte', errore: 'Le risposte non sono compatibili con questo test.', stato: 400 };
    throw e;
  }
}

async function leggiCorpo(req) {
  const lunghezza = req.headers.get('content-length');
  if (lunghezza && (!/^\d+$/.test(lunghezza) || Number(lunghezza) > MAX_CORPO_ORIENTAMENTO))
    errore('dimensione', 'Il test inviato è troppo grande.', 413);
  if (!req.body) errore('richiesta', 'I dati del test non sono validi.');
  const lettore = req.body.getReader();
  const blocchi = [];
  let dimensione = 0;
  try {
    while (true) {
      const { done, value } = await lettore.read();
      if (done) break;
      dimensione += value.byteLength;
      if (dimensione > MAX_CORPO_ORIENTAMENTO) {
        await lettore.cancel();
        errore('dimensione', 'Il test inviato è troppo grande.', 413);
      }
      blocchi.push(value);
    }
  } finally { lettore.releaseLock(); }
  const uniti = new Uint8Array(dimensione);
  let offset = 0;
  for (const b of blocchi) { uniti.set(b, offset); offset += b.byteLength; }
  try { return JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(uniti)); }
  catch { errore('richiesta', 'I dati del test non sono validi.'); }
}

export async function gestisciOrientamento(req, env, h) {
  const method = req.method;
  if (!['GET', 'POST', 'DELETE'].includes(method))
    return h.json({ errore: 'Metodo non consentito.' }, 405, { ...intestazioni, allow: 'GET, POST, DELETE' });
  const origin = req.headers.get('origin');
  const fetchSite = req.headers.get('sec-fetch-site');
  const propria = new URL(req.url).origin;
  if ((origin && origin !== propria) || (fetchSite && !['same-origin', 'none'].includes(fetchSite))
    || (method !== 'GET' && origin !== propria))
    return h.json({ errore: 'Riapri il test sul sito e riprova.', codice: 'origine' }, 403, intestazioni);
  if (method !== 'GET' && !/^application\/json(?:\s*;|$)/i.test(req.headers.get('content-type') || ''))
    return h.json({ errore: 'Invia il test in formato JSON.', codice: 'formato' }, 415, intestazioni);
  const t = await h.tokenSessione(env, req).catch(() => null);
  if (!tokenOrientamentoValido(t, h.durataSessione))
    return h.json({ errore: 'Accedi per aprire o salvare i tuoi risultati.', codice: 'accesso' }, 401, intestazioni);
  const accountAtteso = req.headers.get('x-orientamento-account');
  if ((method !== 'GET' || accountAtteso !== null) && !/^[0-9a-f]{64}$/.test(accountAtteso || ''))
    return h.json({ errore: 'Ricarica la pagina per verificare l’account prima di continuare.', codice: 'account-non-valido' }, 400, intestazioni);
  const hash = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(t.e.trim().toLowerCase()));
  const accountCorrente = [...new Uint8Array(hash)].map((n) => n.toString(16).padStart(2, '0')).join('');
  const credenziali = { email: t.e, versione: t.v, dispositivo: t.d, nonce: t.g, accountAtteso, accountCorrente };
  try {
    const corpo = method === 'GET' ? null : await leggiCorpo(req);
    const percorso = method === 'GET' ? '/ori-lista' : method === 'POST' ? '/ori-salva' : '/ori-elimina';
    const r = await h.aDO(env, percorso, { ...credenziali, ...(method === 'POST' ? { prova: corpo } : method === 'DELETE' ? { elimina: corpo } : {}) });
    if (r?.ok !== true) return h.json({
      errore: r?.errore || 'I risultati non sono disponibili in questo momento. Riprova tra poco.',
      codice: r?.codice || 'indisponibile',
    }, Number.isInteger(r?.stato) && r.stato >= 400 && r.stato <= 599 ? r.stato : 503, intestazioni);
    return h.json(method === 'GET' ? { risultati: r.risultati } : method === 'POST' ? { risultato: r.risultato } : { ok: true, eliminati: r.eliminati }, 200, intestazioni);
  } catch (e) {
    if (e instanceof ErroreOrientamento) return h.json({ errore: e.message, codice: e.codice }, e.stato, intestazioni);
    return h.json({ errore: 'I risultati non sono disponibili in questo momento. Riprova tra poco.', codice: 'indisponibile' }, 503, intestazioni);
  }
}
