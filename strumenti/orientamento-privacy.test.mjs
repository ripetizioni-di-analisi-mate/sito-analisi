// Archiviazione locale e cancellazione: codice condiviso reale, Storage/API isolati.
import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import {
  chiaveBozza, leggiBozza, scriviBozza, rimuoviBozza, pulisciBozzeScadute,
  eliminaRisultatoOrientamento, verificaGmOrientamento,
} from '../src/scripts/orientamento-comune.mjs';
import { DURATA_BOZZA_ORIENTAMENTO } from '../src/lib/orientamento-privacy.mjs';

const anna = { email: 'anna@test.invalid', gm: true }, bruno = { email: 'bruno@test.invalid', gm: true };
const impronta = (io) => createHash('sha256').update(io.email.trim().toLowerCase()).digest('hex');
const chiave = (io, tipo = 'studio') => `orientamento:v1:${io ? impronta(io) : 'ospite'}:${tipo}`;
const risultato = {
  id: 'studio:analisi-1', tipo: 'studio', versione: 'versione-di-prova', materia: 'analisi-1', obiettivo: 'recuperare',
  risposte: { 'algebra-1': 2, 'algebra-2': 'non-so' },
};
const bozza = (r = risultato, altri = {}) => ({ ...r, finito: true, indice: 1, conservaLocale: true, ...altri });

function banco(t) {
  let ora = Date.parse('2026-11-13T12:00:00Z');
  t.mock.method(Date, 'now', () => ora);
  const dati = new Map();
  const storage = {
    get length() { return dati.size; },
    key: (i) => [...dati.keys()][i] ?? null,
    getItem: (k) => dati.get(String(k)) ?? null,
    setItem: (k, v) => { dati.set(String(k), String(v)); },
    removeItem: (k) => { dati.delete(String(k)); },
  };
  const prima = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');
  Object.defineProperty(globalThis, 'localStorage', { configurable: true, value: storage });
  t.after(() => prima ? Object.defineProperty(globalThis, 'localStorage', prima) : delete globalThis.localStorage);
  const stato = { account: anna, richieste: [], eliminati: [], primaElimina: null, dopoElimina: null, erroreDelete: false, identitaBloccata: false };
  t.mock.method(globalThis, 'fetch', async (path, opzioni = {}) => {
    stato.richieste.push({ path, ...opzioni });
    if (path === '/api/io') {
      if (stato.identitaBloccata) throw new TypeError('offline');
      return stato.account ? Response.json(stato.account) : Response.json({ errore: 'Accedi' }, { status: 401 });
    }
    assert.equal(path, '/api/orientamento');
    assert.equal(opzioni.method, 'DELETE');
    if (stato.primaElimina) await stato.primaElimina();
    if (stato.account?.gm !== true)
      return Response.json({ errore: 'Anteprima riservata al GM', codice: 'riservato-gm' }, { status: 403 });
    if (!stato.account || new Headers(opzioni.headers).get('x-orientamento-account') !== impronta(stato.account))
      return Response.json({ errore: 'Account cambiato', codice: 'account-cambiato' }, { status: 409 });
    if (stato.erroreDelete) return Response.json({ errore: 'Servizio non disponibile' }, { status: 503 });
    stato.eliminati.push(JSON.parse(opzioni.body).id);
    if (stato.dopoElimina) await stato.dopoElimina();
    return Response.json({ ok: true, eliminati: 1 });
  });
  return { stato, storage, dati, avanza(ms) { ora += ms; } };
}

test('una bozza scade al trentesimo giorno; leggere non rinnova la durata', async (t) => {
  const b = banco(t), k = chiave(anna);
  assert.equal(DURATA_BOZZA_ORIENTAMENTO, 30 * 86400000);
  assert.equal(scriviBozza(k, bozza()), true);
  const iniziale = b.storage.getItem(k);
  b.avanza(DURATA_BOZZA_ORIENTAMENTO - 1);
  assert.equal(leggiBozza(k).materia, 'analisi-1');
  assert.equal(b.storage.getItem(k), iniziale);
  b.avanza(1);
  assert.equal(leggiBozza(k), null);
  assert.equal(b.storage.getItem(k), null);
});

test('la pulizia elimina scaduti e dati corrotti solo nel namespace delle bozze', async (t) => {
  const b = banco(t);
  scriviBozza(chiave(anna), bozza());
  scriviBozza(chiave(null), bozza());
  b.avanza(DURATA_BOZZA_ORIENTAMENTO);
  scriviBozza(chiave(bruno), bozza({ ...risultato, materia: 'fisica-1' }));
  b.storage.setItem(chiave(anna, 'universita'), '{JSON interrotto');
  b.storage.setItem('altro-servizio', '{JSON interrotto');
  b.storage.setItem('orientamento:importa:studio', 'marcatore estraneo alle bozze');
  assert.deepEqual(pulisciBozzeScadute(), { eliminate: 3, disponibile: true });
  assert.ok(b.storage.getItem(chiave(bruno)));
  assert.equal(b.storage.getItem('altro-servizio'), '{JSON interrotto');
  assert.ok(b.storage.getItem('orientamento:importa:studio'));
  assert.deepEqual(pulisciBozzeScadute(), { eliminate: 0, disponibile: true });
  // La riapertura calcola la chiave e ripulisce anche bozze di test non aperti.
  b.avanza(DURATA_BOZZA_ORIENTAMENTO);
  assert.equal(await chiaveBozza('universita', anna), chiave(anna, 'universita'));
  assert.equal(b.storage.getItem(chiave(bruno)), null);
  assert.equal(b.stato.richieste.length, 0);
});

test('storage bloccato o quota insufficiente non produce una falsa conferma di salvataggio/cancellazione', (t) => {
  const b = banco(t), k = chiave(anna);
  scriviBozza(k, bozza());
  t.mock.method(b.storage, 'setItem', () => { throw new Error('Quota superata'); });
  assert.equal(scriviBozza(k, bozza(risultato, { indice: 2 })), false);
  assert.equal(leggiBozza(k).indice, 1);
  t.mock.method(b.storage, 'removeItem', () => { throw new Error('Archivio bloccato'); });
  assert.equal(rimuoviBozza(k), false);
  assert.ok(b.storage.getItem(k));
  b.avanza(DURATA_BOZZA_ORIENTAMENTO);
  assert.deepEqual(pulisciBozzeScadute(), { eliminate: 0, disponibile: false });
  assert.equal(leggiBozza(k), null);
  assert.ok(b.storage.getItem(k), 'Una bozza scaduta non è ripresa anche quando il browser ne impedisce la rimozione.');
  assert.equal(rimuoviBozza('altro-servizio'), false);
});

test('DELETE rimuove solo la copia completata corrispondente e invia la guardia dell’account', async (t) => {
  const b = banco(t), k = chiave(anna);
  scriviBozza(k, bozza());
  scriviBozza(chiave(bruno), bozza());
  scriviBozza(chiave(null), bozza());
  scriviBozza(chiave(anna, 'universita'), bozza({ ...risultato, tipo: 'universita' }));
  const r = await eliminaRisultatoOrientamento(risultato, impronta(anna));
  assert.deepEqual(r, { ok: true, eliminati: 1, bozzaLocale: 'rimossa' });
  assert.equal(b.storage.getItem(k), null);
  for (const altra of [chiave(bruno), chiave(null), chiave(anna, 'universita')]) assert.ok(b.storage.getItem(altra));
  const richiesta = b.stato.richieste.find((x) => x.method === 'DELETE');
  assert.equal(new Headers(richiesta.headers).get('x-orientamento-account'), impronta(anna));
  assert.deepEqual(JSON.parse(richiesta.body), { id: risultato.id });
});

test('DELETE preserva un’altra materia, una nuova prova e le risposte modificate', async (t) => {
  const b = banco(t), k = chiave(anna);
  for (const variante of [
    { materia: 'fisica-1' }, { obiettivo: 'esame' }, { versione: 'più-recente' },
    { finito: false }, { risposte: { ...risultato.risposte, 'algebra-1': 3 } },
  ]) {
    scriviBozza(k, bozza(risultato, variante));
    const prima = b.storage.getItem(k);
    const r = await eliminaRisultatoOrientamento(risultato, impronta(anna));
    assert.equal(r.bozzaLocale, 'diversa');
    assert.equal(b.storage.getItem(k), prima);
  }
});

test('DELETE universitario confronta anche l’area scelta e il set completo delle risposte', async (t) => {
  const b = banco(t), k = chiave(anna, 'universita');
  const uni = { id: 'universita', tipo: 'universita', versione: 'versione-di-prova', areaScelta: 'ingegneria', risposte: { 'uni-1': 5, 'extra-1': 2 } };
  scriviBozza(k, bozza(uni, { areaScelta: 'informatica' }));
  assert.equal((await eliminaRisultatoOrientamento(uni, impronta(anna))).bozzaLocale, 'diversa');
  scriviBozza(k, bozza(uni, { risposte: { 'uni-1': 5 } }));
  assert.equal((await eliminaRisultatoOrientamento(uni, impronta(anna))).bozzaLocale, 'diversa');
  scriviBozza(k, bozza(uni));
  assert.equal((await eliminaRisultatoOrientamento(uni, impronta(anna))).bozzaLocale, 'rimossa');
  assert.equal(b.storage.getItem(k), null);
});

test('un cambio di account prima o durante DELETE conserva tutte le bozze', async (t) => {
  const b = banco(t);
  for (const io of [anna, bruno]) scriviBozza(chiave(io), bozza());
  const copie = new Map(b.dati);
  b.stato.account = bruno;
  await assert.rejects(eliminaRisultatoOrientamento(risultato, impronta(anna)), { codice: 'account-cambiato' });
  assert.equal(b.stato.richieste.filter((r) => r.method === 'DELETE').length, 0);
  b.stato.account = anna;
  b.stato.primaElimina = () => { b.stato.account = bruno; };
  await assert.rejects(eliminaRisultatoOrientamento(risultato, impronta(anna)), { codice: 'account-cambiato' });
  assert.deepEqual(b.dati, copie);
  assert.deepEqual(b.stato.eliminati, []);
});

test('se account o bozza cambiano dopo DELETE, distingue il successo server e conserva la copia locale', async (t) => {
  const b = banco(t), k = chiave(anna);
  scriviBozza(k, bozza());
  scriviBozza(chiave(bruno), bozza());
  b.stato.dopoElimina = () => { b.stato.account = bruno; };
  const cambiato = await eliminaRisultatoOrientamento(risultato, impronta(anna));
  assert.equal(cambiato.ok, true);
  assert.equal(cambiato.bozzaLocale, 'account-cambiato');
  assert.ok(b.storage.getItem(k));
  assert.ok(b.storage.getItem(chiave(bruno)));
  b.stato.account = anna;
  b.stato.dopoElimina = () => { scriviBozza(k, bozza(risultato, { finito: false, indice: 0 })); };
  assert.equal((await eliminaRisultatoOrientamento(risultato, impronta(anna))).bozzaLocale, 'aggiornata');
  assert.equal(leggiBozza(k).finito, false);
});

test('DELETE fallito non tocca la bozza; mancata pulizia locale non nasconde una cancellazione server riuscita', async (t) => {
  const b = banco(t), k = chiave(anna);
  scriviBozza(k, bozza());
  b.stato.erroreDelete = true;
  await assert.rejects(eliminaRisultatoOrientamento(risultato, impronta(anna)), { status: 503 });
  assert.ok(b.storage.getItem(k));
  b.stato.erroreDelete = false;
  t.mock.method(b.storage, 'removeItem', () => { throw new Error('Archivio bloccato'); });
  assert.equal((await eliminaRisultatoOrientamento(risultato, impronta(anna))).bozzaLocale, 'non-disponibile');
  assert.ok(b.storage.getItem(k));
  b.stato.dopoElimina = () => { b.stato.identitaBloccata = true; };
  const r = await eliminaRisultatoOrientamento(risultato, impronta(anna));
  assert.equal(r.ok, true);
  assert.equal(r.bozzaLocale, 'non-disponibile');
  assert.ok(b.storage.getItem(k));
});

test('l’anteprima richiede il ruolo GM booleano della sessione reale, senza fallback ospite', async (t) => {
  const b = banco(t);
  assert.deepEqual(await verificaGmOrientamento(impronta(anna)), anna);
  for (const gm of [undefined, false, 'true', 1]) {
    b.stato.account = { ...anna, gm };
    await assert.rejects(verificaGmOrientamento(), { status: 403, codice: 'riservato-gm' });
  }
  b.stato.account = null;
  await assert.rejects(verificaGmOrientamento(), { status: 401, codice: 'accesso' });
  for (const email of [undefined, '', '   ', 42]) {
    b.stato.account = { gm: true, email };
    await assert.rejects(verificaGmOrientamento(), { status: 401, codice: 'accesso' });
  }
  b.stato.account = bruno;
  await assert.rejects(verificaGmOrientamento(impronta(anna)), { codice: 'account-cambiato' });
  b.stato.identitaBloccata = true;
  await assert.rejects(verificaGmOrientamento(), /connessione non è disponibile/);
  assert.ok(b.stato.richieste.every((r) => r.path === '/api/io'));
});

test('revoca GM prima o durante DELETE blocca la cancellazione e conserva le bozze', async (t) => {
  const b = banco(t), k = chiave(anna);
  scriviBozza(k, bozza());
  scriviBozza(chiave(null), bozza());
  const copie = new Map(b.dati);
  b.stato.account = { ...anna, gm: false };
  await assert.rejects(eliminaRisultatoOrientamento(risultato, impronta(anna)), { status: 403, codice: 'riservato-gm' });
  assert.equal(b.stato.richieste.filter((r) => r.method === 'DELETE').length, 0);
  assert.deepEqual(b.dati, copie);
  b.stato.account = anna;
  b.stato.primaElimina = () => { b.stato.account = { ...anna, gm: false }; };
  await assert.rejects(eliminaRisultatoOrientamento(risultato, impronta(anna)), { status: 403, codice: 'riservato-gm' });
  assert.deepEqual(b.stato.eliminati, []);
  assert.deepEqual(b.dati, copie);
});

test('revoca GM dopo DELETE distingue il successo server e non elimina la copia locale', async (t) => {
  const b = banco(t), k = chiave(anna);
  scriviBozza(k, bozza());
  const copia = b.storage.getItem(k);
  b.stato.dopoElimina = () => { b.stato.account = { ...anna, gm: false }; };
  const r = await eliminaRisultatoOrientamento(risultato, impronta(anna));
  assert.equal(r.ok, true);
  assert.equal(r.bozzaLocale, 'accesso-revocato');
  assert.equal(b.storage.getItem(k), copia);
});
