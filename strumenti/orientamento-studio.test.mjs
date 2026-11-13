import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import katex from 'katex';
import { COMPETENZE_STUDIO, DOMANDE_STUDIO, PROFILI_STUDIO, VERSIONE_STUDIO } from '../src/data/orientamento-studio.mjs';
import { approfondimentiStudio, domandeBaseStudio, OBIETTIVI_STUDIO, valutaStudio } from '../src/lib/orientamento-studio.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const corrette = domande => Object.fromEntries(domande.map(q => [q.id, q.corretta]));
const errate = domande => Object.fromEntries(domande.map(q => [q.id, (q.corretta + 1) % 4]));
// La maiuscola è significativa nei genotipi (AA, Aa, aa) e nei simboli matematici.
const normalizza = valore => valore.normalize('NFKC').replace(/\s+/g, '');
function catalogo() {
  const sorgente = readFileSync(root + 'src/data/materie.ts', 'utf8');
  const inizi = [...sorgente.matchAll(/^    slug: ['"]([^'"]+)['"],/gm)];
  return inizi.map((m, indice) => {
    const blocco = sorgente.slice(m.index, inizi[indice + 1]?.index ?? sorgente.indexOf('\n];', m.index));
    return { materia: m[1], attiva: /^    attiva: true,/m.test(blocco) };
  });
}

function verificaLink(url) {
  assert.match(url, /^\/[a-z0-9-]+\/[a-z0-9-]+\/(?:teoria|esercizi-svolti|esercizi)$/);
  const [, materia, argomento, sezione] = url.split('/');
  const collezione = { teoria: 'teoria', 'esercizi-svolti': 'svolti', esercizi: 'dafare' }[sezione];
  const percorso = root + 'src/content/' + collezione + '/' + materia + '/' + argomento
    + (sezione === 'teoria' ? '.md' : '/1.md');
  assert.ok(existsSync(percorso), 'Contenuto collegato assente: ' + url);
}

test('i profili coprono il catalogo attivo ed escludono le materie in preparazione', () => {
  const attive = catalogo().filter(m => m.attiva).map(m => m.materia).sort();
  assert.deepEqual(Object.keys(PROFILI_STUDIO).sort(), attive);
  assert.ok(VERSIONE_STUDIO);
  for (const profilo of Object.values(PROFILI_STUDIO)) {
    assert.ok(profilo.titolo && profilo.gruppo);
    const ids = [...profilo.prerequisiti, ...profilo.corso];
    assert.equal(ids.length, new Set(ids).size, profilo.materia + ': prerequisiti e corso sovrapposti');
    assert.ok(profilo.prerequisiti.length >= 2);
    assert.ok(profilo.corso.length >= 3);
    for (const id of ids) assert.ok(COMPETENZE_STUDIO[id], profilo.materia + ': ' + id);
  }
});

test('ogni competenza ha quattro quesiti distinti e chiavi bilanciate', () => {
  assert.equal(DOMANDE_STUDIO.length, new Set(DOMANDE_STUDIO.map(q => q.id)).size);
  assert.equal(DOMANDE_STUDIO.length, new Set(DOMANDE_STUDIO.map(q => normalizza(q.testo))).size);
  for (const competenza of Object.values(COMPETENZE_STUDIO)) {
    const domande = DOMANDE_STUDIO.filter(q => q.competenza === competenza.id);
    assert.equal(domande.length, 4, competenza.id);
    assert.deepEqual(domande.map(q => q.corretta).sort(), [0, 1, 2, 3], competenza.id);
    for (const q of domande) {
      assert.equal(q.scelte.length, 4, q.id);
      assert.ok(q.scelte.every(s => typeof s === 'string' && s.length > 0), q.id);
      assert.equal(new Set(q.scelte.map(normalizza)).size, 4, q.id);
      assert.ok(q.spiegazione.length > 40, q.id + ': spiegazione assente o insufficiente');
    }
  }
});

test('tutti i materiali e i punti di partenza corrispondono a contenuti reali', () => {
  for (const competenza of Object.values(COMPETENZE_STUDIO)) {
    assert.deepEqual(competenza.materiali.map(m => m.tipo), ['teoria', 'svolti', 'esercizi']);
    for (const m of competenza.materiali) verificaLink(m.url);
  }
  for (const profilo of Object.values(PROFILI_STUDIO)) {
    verificaLink(profilo.inizio.url);
    for (const [id, materiali] of Object.entries(profilo.materialiPerCompetenza || {})) {
      assert.ok(COMPETENZE_STUDIO[id], id);
      for (const m of materiali) verificaLink(m.url);
    }
  }
});

test('ogni formula di domanda, opzioni e spiegazione è renderizzabile in KaTeX', () => {
  let controllate = 0;
  for (const q of DOMANDE_STUDIO) {
    for (const testo of [q.testo, ...q.scelte, q.spiegazione]) {
      assert.equal((testo.match(/\$/g) || []).length % 2, 0, q.id + ': delimitatori non bilanciati');
      for (const formula of testo.matchAll(/\$([^$]+)\$/g)) {
        assert.doesNotThrow(() => katex.renderToString(formula[1], { throwOnError: true, strict: 'error' }), q.id);
        controllate++;
      }
    }
  }
  assert.ok(controllate > 1000, 'Il controllo deve attraversare tutta la banca di formule');
});

test('le figure rappresentano dati coerenti con il quesito', () => {
  const velocita = DOMANDE_STUDIO.find(q => q.id === 'cinematica-1');
  assert.deepEqual(velocita.figura.punti, [[0, 0], [4, 8]]);
  assert.equal(4 * 8 / 2, 16);
  assert.match(velocita.scelte[velocita.corretta], /16/);
  const trave = DOMANDE_STUDIO.find(q => q.id === 'equilibrio-1');
  assert.equal(trave.figura.forza * trave.figura.posizione / trave.figura.lunghezza, 4);
  assert.match(trave.scelte[trave.corretta], /4/);
});

test('ogni materia-obiettivo seleziona 18 quesiti e sei nuclei distinti, senza batterie identiche tra materie', () => {
  for (const obiettivo of OBIETTIVI_STUDIO) {
    const viste = new Map();
    for (const materia of Object.keys(PROFILI_STUDIO)) {
      const base = domandeBaseStudio(materia, obiettivo);
      assert.equal(base.length, 18, materia + '/' + obiettivo);
      assert.equal(new Set(base.map(q => q.id)).size, 18);
      assert.equal(new Set(base.map(q => q.competenza)).size, 6);
      const impronta = base.map(q => q.id).sort().join('|');
      assert.equal(viste.has(impronta), false, materia + ' e ' + viste.get(impronta) + ': stessa batteria');
      viste.set(impronta, materia);
      const ammessi = new Set([...PROFILI_STUDIO[materia].prerequisiti, ...PROFILI_STUDIO[materia].corso]);
      for (const q of base) assert.ok(ammessi.has(q.competenza));
    }
  }
});

test('le risposte tutte corrette danno riscontri circoscritti, senza voto globale', () => {
  for (const materia of Object.keys(PROFILI_STUDIO)) {
    for (const obiettivo of OBIETTIVI_STUDIO) {
      const base = domandeBaseStudio(materia, obiettivo);
      const risposte = corrette(base);
      assert.deepEqual(approfondimentiStudio(materia, obiettivo, risposte), []);
      const esito = valutaStudio(materia, obiettivo, risposte);
      assert.equal(esito.completo, true);
      assert.equal(esito.risposteDate, 18);
      assert.equal(esito.domandePreviste, 18);
      assert.ok(esito.competenze.every(c => c.stato === 'riscontri-positivi'));
      assert.equal(esito.priorita.length, 0);
      assert.ok(esito.perimetro.competenzeNonOsservate.length > 0);
      assert.match(esito.perimetro.misura, /non una certificazione/);
      assert.equal(Object.hasOwn(esito, 'punteggio'), false);
      assert.equal(Object.hasOwn(esito, 'percentuale'), false);
    }
  }
});

test('risposte tutte errate producono più riscontri per area e danno precedenza ai prerequisiti', () => {
  const base = domandeBaseStudio('analisi-1', 'recuperare');
  const esito = valutaStudio('analisi-1', 'recuperare', errate(base));
  assert.equal(esito.completo, true);
  assert.ok(esito.competenze.every(c => c.errate === 3 && c.stato === 'da-riprendere'));
  assert.equal(esito.priorita.length, 3);
  assert.ok(esito.priorita.every(c => c.tipo === 'prerequisito'));
  assert.equal(esito.puntoPartenza.competenza, esito.priorita[0].id);
  assert.equal(esito.prossimiPassi[0].url, esito.priorita[0].materiali[0].url);
});

test('contenuti non ancora studiati sono distinti dagli errori', () => {
  const base = domandeBaseStudio('analisi-2', 'iniziare');
  const risposte = Object.fromEntries(base.map(q => [q.id, 'non-studiato']));
  const esito = valutaStudio('analisi-2', 'iniziare', risposte);
  assert.equal(esito.completo, true);
  assert.ok(esito.competenze.every(c => c.errate === 0 && c.nonSo === 0 && c.nonStudiato === 3));
  assert.ok(esito.competenze.every(c => c.stato === 'da-studiare'));
  assert.match(esito.competenze.find(c => c.tipo === 'corso').testo, /senza considerarli errori/);
  assert.equal(approfondimentiStudio('analisi-2', 'iniziare', risposte).length, 0);
});

test('non-so e non-studiato producono indicazioni diverse', () => {
  const base = domandeBaseStudio('statistica', 'recuperare');
  const risposte = Object.fromEntries(base.map(q => [q.id, 'non-so']));
  const esito = valutaStudio('statistica', 'recuperare', risposte);
  assert.ok(esito.competenze.every(c => c.nonSo === 3 && c.nonStudiato === 0 && c.errate === 0));
  assert.ok(esito.competenze.every(c => c.stato === 'da-riprendere'));
});

test('un errore isolato non basta a giudicare una competenza e non genera priorità in un test incompleto', () => {
  const base = domandeBaseStudio('fisica-1', 'iniziare');
  const q = base[0];
  const esito = valutaStudio('fisica-1', 'iniziare', { [q.id]: (q.corretta + 1) % 4 });
  assert.equal(esito.completo, false);
  assert.equal(esito.risposteDate, 1);
  assert.equal(esito.priorita.length, 0);
  assert.ok(esito.competenze.every(c => c.stato === 'da-verificare'));
});

test('le conferme nascono solo da risposte base contrastanti e restano stabili dopo la risposta extra', () => {
  const base = domandeBaseStudio('analisi-1', 'iniziare');
  const risposte = corrette(base);
  for (const q of base.slice(0, 6)) risposte[q.id] = (q.corretta + 1) % 4;
  const extra = approfondimentiStudio('analisi-1', 'iniziare', risposte);
  assert.equal(extra.length, 6);
  assert.ok(extra.every(q => !base.some(b => b.id === q.id)));
  const parziale = valutaStudio('analisi-1', 'iniziare', risposte);
  assert.equal(parziale.completo, false);
  assert.equal(parziale.domandePreviste, 24);
  Object.assign(risposte, corrette(extra));
  assert.deepEqual(approfondimentiStudio('analisi-1', 'iniziare', risposte).map(q => q.id), extra.map(q => q.id));
  const esito = valutaStudio('analisi-1', 'iniziare', risposte);
  assert.equal(esito.completo, true);
  assert.equal(esito.domandePreviste, 24);
  assert.equal(esito.risposteDate, 24);
  assert.ok(esito.competenze.every(c => c.stato === 'da-consolidare'));
});

test('basi dichiarate nuove in tre risposte su quattro non vengono saltate per andare ai limiti', () => {
  const base = domandeBaseStudio('analisi-1', 'iniziare');
  const risposte = Object.fromEntries(base.map(q => [q.id, q.id.endsWith('-1') ? q.corretta : 'non-studiato']));
  const extra = approfondimentiStudio('analisi-1', 'iniziare', risposte);
  assert.equal(extra.length, 6);
  for (const q of extra) risposte[q.id] = 'non-studiato';
  const esito = valutaStudio('analisi-1', 'iniziare', risposte);
  assert.equal(esito.completo, true);
  assert.ok(esito.competenze.every(c => c.stato === 'da-studiare'));
  assert.equal(esito.priorita[0].tipo, 'prerequisito');
  assert.notEqual(esito.puntoPartenza.competenza, 'limiti');
});

test('le aree campionate cambiano con l’obiettivo e il perimetro dichiara quelle escluse', () => {
  const inizio = domandeBaseStudio('analisi-1', 'iniziare');
  const esame = domandeBaseStudio('analisi-1', 'esame');
  assert.notDeepEqual(inizio.map(q => q.id), esame.map(q => q.id));
  const esito = valutaStudio('analisi-1', 'iniziare', corrette(inizio));
  assert.deepEqual(new Set(esito.perimetro.competenzeOsservate), new Set(inizio.map(q => q.competenza)));
  for (const id of esito.perimetro.competenzeNonOsservate) assert.ok(!esito.perimetro.competenzeOsservate.includes(id));
});

test('valori, materie, obiettivi e domande estranei sono rifiutati esplicitamente', () => {
  assert.throws(() => domandeBaseStudio('materia-inesistente', 'iniziare'), TypeError);
  assert.throws(() => domandeBaseStudio('__proto__', 'iniziare'), TypeError);
  assert.throws(() => domandeBaseStudio('analisi-1', 'vincere'), TypeError);
  assert.throws(() => domandeBaseStudio('tolc-e', 'iniziare'), TypeError);
  assert.throws(() => valutaStudio('analisi-1', 'iniziare', null), TypeError);
  assert.throws(() => valutaStudio('analisi-1', 'iniziare', []), TypeError);
  const q = domandeBaseStudio('analisi-1', 'iniziare')[0];
  for (const valore of [-1, 4, 0.5, '0', true, null, undefined, {}, []]) {
    assert.throws(() => valutaStudio('analisi-1', 'iniziare', { [q.id]: valore }), TypeError);
  }
  assert.throws(() => valutaStudio('analisi-1', 'iniziare', { 'dna-1': 0 }), TypeError);
  assert.throws(() => approfondimentiStudio('analisi-1', 'iniziare', { [q.id]: 4 }), TypeError);
});

test('una domanda di approfondimento non richiesta non può alterare la valutazione', () => {
  const base = domandeBaseStudio('analisi-1', 'iniziare');
  const risposte = corrette(base);
  const extraNonRichiesta = DOMANDE_STUDIO.find(q => q.competenza === base[0].competenza && q.id.endsWith('-4'));
  risposte[extraNonRichiesta.id] = extraNonRichiesta.corretta;
  assert.throws(() => valutaStudio('analisi-1', 'iniziare', risposte), /non richiesto/);
});

test('il core non modifica il record delle risposte e i risultati sono riproducibili', () => {
  const base = domandeBaseStudio('matematica-finanziaria', 'esame');
  const risposte = Object.freeze(corrette(base));
  const prima = valutaStudio('matematica-finanziaria', 'esame', risposte);
  const seconda = valutaStudio('matematica-finanziaria', 'esame', risposte);
  assert.deepEqual(prima, seconda);
  assert.deepEqual(risposte, corrette(base));
});

test('il piano pratico segue la prima priorità con teoria, svolti ed esercizi reali', () => {
  for (const materia of Object.keys(PROFILI_STUDIO)) {
    for (const obiettivo of OBIETTIVI_STUDIO) {
      const base = domandeBaseStudio(materia, obiettivo);
      const esito = valutaStudio(materia, obiettivo, errate(base));
      const piano = esito.pianoPratico;
      const prima = esito.priorita[0];
      assert.deepEqual(piano.map(a => a.passo), ['ora', 'poi', 'verifica']);
      assert.deepEqual(piano.map(a => a.tipo), ['teoria', 'svolti', 'esercizi']);
      assert.ok(piano.every(a => a.competenza === prima.id));
      assert.match(piano[0].titolo, /^Riprendi /);
      assert.ok(piano[0].titolo.includes(prima.titolo.toLocaleLowerCase('it-IT')));
      for (const azione of piano) {
        assert.ok(prima.materiali.some(m => m.url === azione.url && m.tipo === azione.tipo));
        verificaLink(azione.url);
        assert.ok(azione.titolo.length <= 60, azione.titolo);
        assert.ok(azione.motivo.length <= 190, azione.motivo);
        assert.equal((azione.motivo.match(/[.!?](?:\s|$)/g) || []).length, 1, azione.motivo);
      }
    }
  }
});

test('il piano per argomenti nuovi invita allo studio senza attribuire errori', () => {
  const base = domandeBaseStudio('analisi-2', 'iniziare');
  const esito = valutaStudio('analisi-2', 'iniziare', Object.fromEntries(base.map(q => [q.id, 'non-studiato'])));
  assert.equal(esito.priorita[0].stato, 'da-studiare');
  assert.equal(esito.pianoPratico.length, 3);
  assert.match(esito.pianoPratico[0].titolo, /^Studia /);
  assert.match(esito.pianoPratico[0].motivo, /nuovi/);
  assert.ok(esito.pianoPratico.every(a => !/error|sbagli|difficolt|incertezz/i.test(a.motivo)));
});

test('un’area da consolidare propone un esempio e una prova autonoma', () => {
  const base = domandeBaseStudio('analisi-1', 'iniziare');
  const risposte = corrette(base);
  for (const q of base.slice(0, 6)) risposte[q.id] = (q.corretta + 1) % 4;
  Object.assign(risposte, corrette(approfondimentiStudio('analisi-1', 'iniziare', risposte)));
  const esito = valutaStudio('analisi-1', 'iniziare', risposte);
  assert.equal(esito.priorita[0].stato, 'da-consolidare');
  assert.deepEqual(esito.pianoPratico.map(a => a.tipo), ['svolti', 'esercizi']);
  assert.deepEqual(esito.pianoPratico.map(a => a.passo), ['ora', 'verifica']);
  assert.ok(esito.pianoPratico.every(a => a.competenza === esito.priorita[0].id));
});

test('un esito positivo propone solo esercizi di una competenza del corso effettivamente osservata', () => {
  for (const materia of Object.keys(PROFILI_STUDIO)) {
    for (const obiettivo of OBIETTIVI_STUDIO) {
      const base = domandeBaseStudio(materia, obiettivo);
      const esito = valutaStudio(materia, obiettivo, corrette(base));
      assert.equal(esito.pianoPratico.length, 1);
      const [azione] = esito.pianoPratico;
      const competenza = esito.competenze.find(c => c.id === azione.competenza);
      assert.equal(azione.passo, 'ora');
      assert.equal(azione.tipo, 'esercizi');
      assert.equal(competenza.tipo, 'corso');
      assert.equal(competenza.stato, 'riscontri-positivi');
      assert.ok(competenza.materiali.some(m => m.url === azione.url && m.tipo === 'esercizi'));
      assert.ok(esito.perimetro.competenzeOsservate.includes(azione.competenza));
      verificaLink(azione.url);
    }
  }
});

test('un test parziale o con approfondimenti ancora mancanti non propone un piano', () => {
  const base = domandeBaseStudio('fisica-1', 'iniziare');
  const primo = base[0];
  const scenari = [{}, { [primo.id]: (primo.corretta + 1) % 4 }, corrette(base)];
  scenari[2][primo.id] = (primo.corretta + 1) % 4;
  for (const risposte of scenari) {
    const esito = valutaStudio('fisica-1', 'iniziare', risposte);
    assert.equal(esito.completo, false);
    assert.deepEqual(esito.pianoPratico, []);
  }
});
