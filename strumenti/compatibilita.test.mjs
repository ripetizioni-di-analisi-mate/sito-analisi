// Prove locali del calcolo e del protocollo: nessuna richiesta ai modelli o all'archivio di produzione.
import assert from 'node:assert/strict';
import { test, after } from 'node:test';
import { mkdtempSync, readFileSync, readdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';

const radice = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const temporanea = mkdtempSync(join(tmpdir(), 'compatibilita-prove-'));
const compila = async (file, nome) => {
  const destinazione = join(temporanea, `${nome}.mjs`);
  execFileSync(process.execPath, [join(radice, 'node_modules/rolldown/bin/cli.mjs'), join(radice, file), '--file', destinazione, '--format', 'esm', '--platform', 'node', '--logLevel', 'silent'], { cwd: radice });
  return import(pathToFileURL(destinazione).href);
};
const { codifica, leggiRiga, valutaRichieste, gestisciCompatibilita } = await compila('worker/compatibilita.mjs', 'worker');
const { dettagliScheda, dettagliTeoria } = await compila('src/lib/catalogo-compatibilita.ts', 'catalogo');
const { MATERIE_COMPATIBILITA } = await compila('src/data/compatibilita.ts', 'materie');
const { trovaVoceTeoria, riferimentiNominati } = await compila('worker/riscontro-teoria.mjs', 'riscontro');
after(() => rmSync(temporanea, { recursive: true, force: true }));

const cat = {
  materia: 'analisi-1', titolo: 'Analisi matematica 1', argomenti: [{
    slug: 'integrali', titolo: 'Integrali',
    schede: [{ n: 4, titolo: 'Integrali per parti', parole: ['integrazione per parti'], metodi: ['formula di integrazione per parti'], tracce: ['Calcolare $\\int x e^x dx$.'] }],
    teoria: [
      { ancora: 'per-parti', titolo: 'Integrazione per parti', tipo: 'teorema', contenuto: 'La formula per integrare un prodotto.', dimostrazione: true },
      { ancora: 'teorema', titolo: 'Teorema senza dimostrazione', tipo: 'teorema', contenuto: 'Enunciato.', dimostrazione: false },
      { ancora: 'teorema-fondamentale', titolo: 'Teorema fondamentale del calcolo', tipo: 'teorema', contenuto: 'La funzione integrale ha derivata uguale alla funzione integranda.', dimostrazione: true },
      { ancora: 'formula-fondamentale', titolo: 'Formula fondamentale del calcolo', tipo: 'teorema', contenuto: 'Valutazione di una primitiva agli estremi.', dimostrazione: false },
    ],
  }],
};
const { codici } = codifica(cat, false);
const valuta = (...righe) => valutaRichieste('analisi-1', cat, codici, righe.map((r) => typeof r === 'string' ? leggiRiga(r) : r));

test('la copertura dipende dal materiale: 0, 50 e 100 sono tutti possibili', () => {
  assert.equal(valuta('1|-|E|-|-|-|Risolvere una PDE stocastica').compatibilita, 0);
  assert.equal(valuta('1|-|E|A1|-|-|Studiare un integrale').compatibilita, 50);
  assert.equal(valuta('1|-|E|A1|S1|-|Integrare un prodotto per parti').compatibilita, 100);
});

test('il metodo spiegato nella teoria può coprire un calcolo', () => {
  const esito = valuta('1|-|E|A1|T1|-|Applicare la formula per parti');
  assert.equal(esito.compatibilita, 100);
  assert.equal(esito.richieste[0].voce.link, '/analisi-1/integrali/teoria#per-parti');
  assert.match(codifica(cat, false).testo, /T1 Integrazione per parti/);
});

test('una dimostrazione non presente resta coperta solo in parte', () => {
  assert.equal(valuta('1|-|T|A1|T2|-|Enunciare e dimostrare il teorema').compatibilita, 50);
  assert.equal(valuta('1|-|T|A1|T1|-|Dimostrare la formula per parti').compatibilita, 100);
});

test('codici inesistenti e proprietà ereditate non sono fonti', () => {
  assert.equal(valuta('1|-|E|A1|S999|-|Calcolare un integrale').compatibilita, 50);
  assert.equal(valuta({ esercizio: '1', testo: 'Una richiesta', livello: 'stesso', argomento: 'toString', scheda: 'constructor' }).compatibilita, 0);
});

test('i punteggi dei singoli punti sono rispettati (8 punti coperti su 10)', () => {
  const esito = valuta('1|a|E|-|-|P2|Richiesta estranea', '1|b|E|A1|S1|P8|Integrare per parti');
  assert.equal(esito.compatibilita, 80);
  assert.equal(esito.perPunti, true);
  assert.deepEqual(esito.richieste.map((r) => r.peso), [2, 8]);
  assert.equal(esito.quote.stesso + esito.quote.argomento, 80);
});

test('il totale di un esercizio non viene moltiplicato per il numero di punti', () => {
  const esito = valuta('1|a|E|A1|S1|E6|Primo integrale', '1|b|E|A1|S1|E6|Secondo integrale', '2|-|E|-|-|E4|Richiesta estranea');
  assert.equal(esito.compatibilita, 60);
  assert.deepEqual(esito.richieste.map((r) => r.peso), [3, 3, 4]);
});

test('punteggi incompleti o incoerenti usano pesi uguali', () => {
  assert.equal(valuta('1|a|E|A1|S1|P8|Integrare per parti', '1|b|E|-|-|-|Richiesta estranea').perPunti, false);
  assert.equal(valuta('1|a|E|A1|S1|E8|Integrare per parti', '1|b|E|-|-|E4|Richiesta estranea').perPunti, false);
});

test('un totale e un punteggio specifico distribuiscono solo il residuo', () => {
  const esito = valuta('1|a|E|A1|S1|P8|Integrare per parti', '1|b|E|-|-|E10|Richiesta estranea');
  assert.equal(esito.compatibilita, 80);
  assert.deepEqual(esito.richieste.map((r) => r.peso), [8, 2]);
});

test('duplicati e risposte vuote non alterano la copertura', () => {
  const r = '1|-|E|A1|S1|-|Integrare per parti';
  assert.equal(valuta(r, r).richieste.length, 1);
  const vuoto = valutaRichieste('analisi-1', cat, codici, []);
  assert.equal(vuoto.compatibilita, 0);
  assert.equal(vuoto.perPunti, false);
});

test('i separatori nei valori assoluti restano nella formula', () => {
  assert.equal(leggiRiga('1|a|E|A1|S1|P2,5|Calcolare $|x|$').testo, 'Calcolare $|x|$');
  assert.equal(leggiRiga('1|a|E|A1|S1|P2,5|Calcolare $|x|$').punti, 2.5);
});

test('il formato compatto a sei campi conserva parte, tipo e punteggio', () => {
  const r = leggiRiga('1a|E|A1|S1|p2,5|Calcolare $|x|$');
  assert.equal(r.esercizio, '1');
  assert.equal(r.parte, 'a');
  assert.equal(r.punti, 2.5);
  assert.equal(r.puntiTipo, 'parte');
  assert.equal(r.testo, 'Calcolare $|x|$');
  assert.equal(leggiRiga('2|T|A1|T1|6|Enunciare la formula').tipo, 'teoria');
});

test('gli estratti provengono dalle spiegazioni e dalle tracce effettive', () => {
  const corpo = readFileSync(join(radice, 'src/content/svolti/analisi-1/limiti/4.md'), 'utf8').replace(/^---[\s\S]*?---/, '');
  const dettagli = dettagliScheda(corpo);
  assert.equal(dettagli.tracce.length, 3);
  assert.ok(dettagli.tracce.some((t) => t.includes('\\lim')));
  assert.ok(dettagli.metodi.includes('cambio di variabile'));
  for (const metodo of dettagli.metodi) assert.ok(corpo.includes(`**${metodo}**`));
  const teoria = readFileSync(join(radice, 'src/content/teoria/analisi-1/limiti.md'), 'utf8');
  assert.equal(dettagliTeoria(teoria, 'unicita-del-limite').dimostrazione, true);
  assert.equal(dettagliTeoria(teoria, 'intorno').dimostrazione, false);
});

test('cataloghi diversi della stessa materia non condividono una codifica obsoleta', () => {
  const altro = structuredClone(cat);
  altro.argomenti[0].schede[0].titolo = 'Titolo aggiornato';
  assert.match(codifica(altro, false).testo, /Titolo aggiornato/);
  assert.doesNotMatch(codifica(cat, false).testo, /Titolo aggiornato/);
});

function catalogoTeoriaReale(materia) {
  const cartella = join(radice, 'src/content/teoria', materia);
  return { materia, titolo: materia, argomenti: readdirSync(cartella).filter((f) => f.endsWith('.md')).sort().map((file) => {
    const corpo = readFileSync(join(cartella, file), 'utf8');
    return { slug: file.replace(/\.md$/, ''), titolo: file, schede: [], teoria: [...corpo.matchAll(/^:{3,4}(definizione|teorema|proposizione)\{#([\w-]+)[^}]*?titolo="([^"]+)"/gm)]
      .map((r) => ({ tipo: r[1], ancora: r[2], titolo: r[3], ...dettagliTeoria(corpo, r[2]) })) };
  }) };
}

test('il teorema fondamentale viene recuperato anche senza codice o con la formula sbagliata', () => {
  const reale = catalogoTeoriaReale('analisi-1'), codici = codifica(reale, true).codici;
  const [formula] = Object.entries(codici.T).find(([, v]) => v.ancora === 'formula-fondamentale');
  const richiesta = { esercizio: '1', tipo: 'teoria', testo: 'Enunciato e dimostrazione del teorema fondamentale del calcolo integrale', livello: 'argomento' };
  for (const riferimento of [null, formula]) {
    const e = valutaRichieste('analisi-1', reale, codici, [{ ...richiesta, teoria: riferimento }]);
    assert.equal(e.compatibilita, 100);
    assert.ok(e.richieste[0].voce.link.endsWith('#teorema-fondamentale'));
  }
  assert.match(riferimentiNominati(codici.T, richiesta.testo), /Teorema fondamentale del calcolo \[enunciato e dimostrazione presenti\]/);
});

test('le dimostrazioni presenti nei corsi restano coperte anche se il modello non le abbina', (t) => {
  let verificati = 0;
  for (const materia of MATERIE_COMPATIBILITA) {
    const reale = catalogoTeoriaReale(materia), codici = codifica(reale, true).codici;
    for (const a of reale.argomenti) {
      const codiceA = Object.entries(codici.A).find(([, v]) => v.slug === a.slug)[0];
      for (const v of a.teoria.filter((v) => v.dimostrazione)) {
        if (a.teoria.filter((x) => x.titolo.toLowerCase() === v.titolo.toLowerCase()).length !== 1) continue;
        const e = valutaRichieste(materia, reale, codici, [{ esercizio: '1', tipo: 'teoria', testo: `Enunciare e dimostrare ${v.titolo}`, argomento: codiceA, livello: 'argomento' }]);
        assert.equal(e.compatibilita, 100, `${materia}/${a.slug} — ${v.titolo}`);
        assert.ok(e.richieste[0].voce.link.endsWith(`#${v.ancora}`), `${materia}/${a.slug} — riferimento di ${v.titolo}`);
        verificati++;
      }
    }
  }
  assert.ok(verificati >= 200, 'La prova deve comprendere il catalogo reale dei corsi universitari');
  t.diagnostic(`${verificati} dimostrazioni verificate nelle ${MATERIE_COMPATIBILITA.length} materie abilitate`);
});

test('nomi distinti, nomi ambigui e richieste composite non vengono confusi', () => {
  const voci = {
    T1: { titolo: 'Teorema di Cauchy', argomento: 'derivate', dimostrazione: true },
    T2: { titolo: 'Teorema fondamentale del calcolo', argomento: 'integrali', dimostrazione: true },
    T3: { titolo: 'Formula fondamentale del calcolo', argomento: 'integrali', dimostrazione: false },
  };
  assert.equal(trovaVoceTeoria(voci, 'Enunciare e dimostrare il teorema di Cauchy-Schwarz'), null);
  assert.equal(trovaVoceTeoria(voci, 'Enunciare il fondamentale del calcolo'), null);
  assert.equal(trovaVoceTeoria(voci, 'Enunciare Cauchy e il teorema fondamentale del calcolo'), null);
  assert.equal(trovaVoceTeoria(voci, 'Formula fondamentale del calcolo: enunciato e dimostrazione').codice, 'T3');
});

test('una richiesta di enunciato è teorica anche se il modello la classifica come esercizio', () => {
  const reale = catalogoTeoriaReale('analisi-1'), codici = codifica(reale, true).codici;
  const e = valutaRichieste('analisi-1', reale, codici, [{ esercizio: '1', tipo: 'esercizio', testo: 'Enunciare e dimostrare il teorema di Rolle', livello: 'argomento' }]);
  assert.equal(e.compatibilita, 100);
  assert.equal(e.richieste[0].tipo, 'teoria');
});

test('un calcolo che cita un enunciato conserva la scheda svolta pertinente', () => {
  const e = valuta({ esercizio: '1', tipo: 'esercizio', argomento: 'A1', scheda: 'S1', testo: 'Usare l’enunciato della formula per parti per calcolare un integrale' });
  assert.equal(e.compatibilita, 100);
  assert.equal(e.richieste[0].tipo, 'esercizio');
  assert.equal(e.richieste[0].scheda.n, 4);
});

const riga = '1|-|E|A1|S1|-|Integrare un prodotto per parti\n';
async function confronto(risposta, materia = 'analisi-1', assetOk = true) {
  const chiamate = [], attese = [], modelli = [];
  const env = {
    ASSETS: { fetch: async () => assetOk ? Response.json(cat) : new Response('', { status: 503 }) },
    AI: { run: async (modello, input) => {
      modelli.push({ modello, input });
      return typeof risposta === 'function' ? risposta(modello, input, modelli.length) : { response: risposta };
    } },
  };
  const h = {
    aDO: async (_env, percorso, dati) => { chiamate.push({ percorso, dati }); return { ok: true, rimasti: 3 }; },
    json: (dati, status = 200, headers) => Response.json(dati, { status, headers }),
    utenteCollegato: async () => null,
    catalogoDomande: async () => ({}),
  };
  const req = new Request('https://esempio.test/api/compatibilita/confronta', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ materia, testo: 'Esercizio 1. Calcolare un integrale per parti.' }) });
  const res = await gestisciCompatibilita(req, env, { waitUntil: (p) => attese.push(p) }, '/api/compatibilita/confronta', h);
  const testo = await res.text();
  await Promise.all(attese);
  const eventi = testo.trim().split('\n').filter(Boolean).map((r) => JSON.parse(r));
  return { res, eventi, chiamate, modelli };
}

test('un confronto completo restituisce fonti, percentuale e un solo salvataggio', async () => {
  const { eventi, chiamate } = await confronto(`${riga}FINE_CONFRONTO|1`);
  assert.equal(eventi.at(-1).fine.compatibilita, 100);
  assert.equal(chiamate.filter((x) => x.percorso === '/comp-compito-esito').length, 1);
});

test('il risultato API corregge il riferimento confuso dal modello prima del salvataggio', async () => {
  const { eventi, chiamate } = await confronto('1|T|A1|T4|6|Enunciare e dimostrare il teorema fondamentale del calcolo integrale\nFINE_CONFRONTO|1');
  assert.equal(eventi.at(-1).fine.compatibilita, 100);
  assert.ok(eventi.at(-1).fine.richieste[0].voce.link.endsWith('#teorema-fondamentale'));
  const salvato = chiamate.find((c) => c.percorso === '/comp-compito-esito');
  assert.equal(salvato.dati.compatibilita, 100);
  assert.equal(JSON.parse(salvato.dati.esito)[0].l, 'stesso');
});

test('un confronto troncato non pubblica percentuali e restituisce il controllo', async () => {
  const { eventi, chiamate } = await confronto(riga);
  assert.ok(eventi.some((x) => x.r));
  assert.ok(eventi.at(-1).errore);
  assert.ok(eventi.every((x) => !x.fine));
  assert.equal(chiamate.filter((x) => x.percorso === '/comp-compito-esito').length, 0);
  assert.equal(chiamate.filter((x) => x.percorso === '/comp-rimborso').length, 1);
});

test('un numero finale incoerente non produce una percentuale', async () => {
  const { eventi } = await confronto(`${riga}FINE_CONFRONTO|2`);
  assert.ok(eventi.at(-1).errore);
  assert.ok(eventi.every((x) => !x.fine));
});

test('il confronto comprende tutte le quaranta richieste consentite', async () => {
  const righe = Array.from({ length: 40 }, (_, i) => `${i + 1}|-|E|A1|S1|-|Integrale ${i + 1}`).join('\n');
  const { eventi } = await confronto(`${righe}\nFINE_CONFRONTO|40`);
  assert.equal(eventi.at(-1).fine.richieste.length, 40);
});

test('oltre quaranta richieste si segnala l’errore senza troncare il compito', async () => {
  const righe = Array.from({ length: 41 }, (_, i) => `${i + 1}|-|E|A1|S1|-|Integrale ${i + 1}`).join('\n');
  const { eventi } = await confronto(`${righe}\nFINE_CONFRONTO|41`);
  assert.ok(eventi.at(-1).errore);
  assert.ok(eventi.every((x) => !x.fine));
});

test('l’ultimo evento SSE viene letto anche senza ritorno a capo', async () => {
  const { eventi } = await confronto(() => new ReadableStream({ start(c) {
    c.enqueue(new TextEncoder().encode(`data: ${JSON.stringify({ response: `${riga}FINE_CONFRONTO|1` })}`)); c.close();
  } }));
  assert.equal(eventi.at(-1).fine.compatibilita, 100);
});

test('un modello può concludere con stop senza ripetere il segnale testuale', async () => {
  const { eventi } = await confronto(() => ({ choices: [{ message: { content: '1|E|-|-|30|Risolvere un problema fuori programma' }, finish_reason: 'stop' }] }));
  assert.equal(eventi.at(-1).fine.compatibilita, 0);
});

test('DONE conclude uno streaming valido anche senza segnale testuale', async () => {
  const { eventi } = await confronto(() => new ReadableStream({ start(c) {
    c.enqueue(new TextEncoder().encode(`data: ${JSON.stringify({ response: riga })}\n\ndata: [DONE]\n\n`)); c.close();
  } }));
  assert.equal(eventi.at(-1).fine.compatibilita, 100);
});

test('il limite di token del modello non viene scambiato per un esame completo', async () => {
  const { eventi } = await confronto(() => new ReadableStream({ start(c) {
    c.enqueue(new TextEncoder().encode(`data: ${JSON.stringify({ response: `${riga}FINE_CONFRONTO|1\n` })}\n\ndata: ${JSON.stringify({ choices: [{ finish_reason: 'length' }] })}\n\n`)); c.close();
  } }));
  assert.ok(eventi.at(-1).errore);
  assert.ok(eventi.every((x) => !x.fine));
});

test('un catalogo temporaneamente indisponibile viene ritentato', async () => {
  const primo = await confronto(`${riga}FINE_CONFRONTO|1`, 'analisi-2', false);
  assert.equal(primo.res.status, 503);
  const secondo = await confronto(`${riga}FINE_CONFRONTO|1`, 'analisi-2', true);
  assert.equal(secondo.eventi.at(-1).fine.compatibilita, 100);
});

const flusso = (...eventi) => new ReadableStream({ start(c) {
  for (const e of eventi) c.enqueue(new TextEncoder().encode(`data: ${typeof e === 'string' ? e : JSON.stringify(e)}\n\n`));
  c.close();
} });

test('il riepilogo finale con il testo cumulativo non duplica le richieste', async () => {
  const testo = `${riga}FINE_CONFRONTO|1\n`;
  const { eventi, modelli } = await confronto(() => flusso(
    { choices: [{ delta: { content: testo }, finish_reason: null }] },
    { response: testo, usage: { completion_tokens: 30 } },
    '[DONE]',
  ));
  assert.equal(eventi.at(-1).fine.richieste.length, 1);
  assert.equal(eventi.filter((e) => e.r).length, 1);
  assert.equal(modelli.length, 1);
});

test('stop nel formato response conferma la conclusione del trasporto', async () => {
  const { eventi } = await confronto(() => flusso({ response: riga }, { response: '', finish_reason: 'stop' }));
  assert.equal(eventi.at(-1).fine.compatibilita, 100);
});

test('response.completed conclude anche le risposte nel formato Responses', async () => {
  const { eventi } = await confronto(() => flusso(
    { type: 'response.output_text.delta', delta: riga }, { type: 'response.completed' },
  ));
  assert.equal(eventi.at(-1).fine.compatibilita, 100);
});

test('response.incomplete non pubblica un risultato anche se contiene il segnale testuale', async () => {
  const { eventi, chiamate } = await confronto(() => flusso(
    { type: 'response.output_text.delta', delta: `${riga}FINE_CONFRONTO|1\n` }, { type: 'response.incomplete' },
  ));
  assert.ok(eventi.at(-1).errore);
  assert.ok(eventi.every((e) => !e.fine));
  assert.equal(chiamate.filter((c) => c.percorso === '/comp-rimborso').length, 1);
});

test('un errore dopo la prima riga attiva il secondo modello e sostituisce il tentativo', async () => {
  const { eventi, chiamate, modelli } = await confronto((_modello, _input, n) => n === 1
    ? flusso({ response: riga }, { choices: [{ finish_reason: 'length' }] })
    : { response: '1|E|A1|S1|6|Nuova analisi completa\n2|E|-|-|4|Problema fuori programma\nFINE_CONFRONTO|2' });
  assert.equal(modelli.length, 2);
  assert.notEqual(modelli[0].modello, modelli[1].modello);
  const ripresa = eventi.findIndex((e) => e.ricomincia);
  assert.ok(ripresa > 0);
  const esito = eventi.at(-1).fine;
  assert.equal(esito.compatibilita, 60);
  assert.equal(esito.richieste.length, 2);
  assert.equal(esito.richieste[0].testo, 'Nuova analisi completa');
  assert.equal(eventi.slice(ripresa + 1).filter((e) => e.r).length, 2);
  assert.equal(chiamate.filter((c) => c.percorso === '/comp-conta').length, 1);
  assert.equal(chiamate.filter((c) => c.percorso === '/comp-rimborso').length, 0);
  const salvataggi = chiamate.filter((c) => c.percorso === '/comp-compito-esito');
  assert.equal(salvataggi.length, 1);
  assert.equal(salvataggi[0].dati.richieste, 2);
});

test('un conteggio incoerente viene recuperato senza conservare le righe del primo tentativo', async () => {
  const { eventi, modelli } = await confronto((_modello, _input, n) => ({ response: `${riga}FINE_CONFRONTO|${n === 1 ? 2 : 1}` }));
  assert.equal(modelli.length, 2);
  assert.equal(eventi.filter((e) => e.ricomincia).length, 1);
  assert.equal(eventi.at(-1).fine.richieste.length, 1);
});

test('il fallimento di entrambi i modelli rimborsa una volta e non salva una percentuale', async () => {
  const { eventi, chiamate, modelli } = await confronto(() => flusso({ response: riga }));
  assert.equal(modelli.length, 2);
  assert.ok(eventi.at(-1).errore);
  assert.ok(eventi.every((e) => !e.fine));
  assert.equal(chiamate.filter((c) => c.percorso === '/comp-conta').length, 1);
  assert.equal(chiamate.filter((c) => c.percorso === '/comp-rimborso').length, 1);
  assert.equal(chiamate.filter((c) => c.percorso === '/comp-compito-esito').length, 0);
});
