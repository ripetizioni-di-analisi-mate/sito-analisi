import test from 'node:test';
import assert from 'node:assert/strict';
import {
  VERSIONE_UNIVERSITA, AREE_UNIVERSITA, DOMANDE_UNIVERSITA,
} from '../src/data/orientamento-universita.mjs';
import {
  METODO_UNIVERSITA, domandeBaseUniversita, approfondimentiUniversita, valutaUniversita,
} from '../src/lib/orientamento-universita.mjs';

const BASE = domandeBaseUniversita();
const mappaBase = valore => Object.fromEntries(BASE.map(q => [q.id, valore]));
const risposteAree = (aree, valore = 5, resto = 2) => {
  const risposte = mappaBase(resto);
  for (const q of BASE) {
    if (q.blocco === 'interessi' && q.aree.some(a => aree.includes(a))) risposte[q.id] = valore;
  }
  return risposte;
};
const idAree = esito => esito.aree.map(a => a.id);
const ordineCatalogo = ids => AREE_UNIVERSITA.filter(a => ids.includes(a.id)).map(a => a.id);
const percorsoDi = (area, id) => [...area.percorsi, ...(area.altriPercorsi || [])].find(p => p.id === id);

test('44 domande base, due interessi per area, rami completi e nessun ID duplicato', () => {
  assert.equal(BASE.length, 44);
  assert.equal(AREE_UNIVERSITA.length, 15);
  assert.equal(new Set(DOMANDE_UNIVERSITA.map(q => q.id)).size, DOMANDE_UNIVERSITA.length);
  assert.equal(new Set(DOMANDE_UNIVERSITA.map(q => q.testo)).size, DOMANDE_UNIVERSITA.length);
  assert.equal(BASE.filter(q => q.blocco === 'interessi').length, 30);
  assert.equal(BASE.filter(q => q.blocco === 'studio').length, 10);
  assert.equal(BASE.filter(q => q.blocco === 'priorita').length, 4);
  for (const area of AREE_UNIVERSITA) {
    assert.equal(BASE.filter(q => q.blocco === 'interessi' && q.aree.includes(area.id)).length, 2, area.id);
    const ramo = approfondimentiUniversita({}, area.id);
    const tutte = DOMANDE_UNIVERSITA.filter(q => q.blocco === 'approfondimento' && q.famiglia === area.id);
    assert.deepEqual(ramo, tutte);
    assert.ok(ramo.length >= 2 && ramo.length <= 6);
    assert.ok(ramo.every(q => q.indirizzi.every(id => area.percorsi.some(p => p.id === id))));
  }
});

test('le opzioni AFAM restano distinte dalle lauree', () => {
  const esito = valutaUniversita(risposteAree(['arti-design']));
  const arte = esito.aree[0];
  assert.equal(percorsoDi(arte, 'arti-visive').tipo, 'afam');
  assert.equal(percorsoDi(arte, 'musica-spettacolo').tipo, 'afam');
  assert.equal(percorsoDi(arte, 'architettura').tipo, 'laurea');
});

test('tutte non-conosco: attività da conoscere, nessuna preferenza inventata', () => {
  const esito = valutaUniversita(mappaBase('non-conosco'));
  assert.equal(esito.stato, 'da-esplorare');
  assert.equal(esito.copertura.completa, true);
  assert.equal(esito.copertura.valutate, 0);
  assert.equal(esito.copertura.nonConosco, 44);
  assert.deepEqual(esito.aree, []);
  assert.deepEqual(esito.areeConUnaPreferenza, []);
  assert.deepEqual(esito.candidatiConfronto, []);
  assert.equal(esito.sceltaConfronto, false);
  assert.equal(esito.confrontoNeutrale.length, 15);
  assert.equal(esito.attivitaDaProvare.length, 30);
  for (const area of esito.confrontoNeutrale) {
    assert.deepEqual(area.riepilogoInteressi, { totali: 2, espressi: 0, altreRisposte: 0, nonConosco: 2, mancanti: 0 });
    assert.ok(area.risposteInteressi.every(r => r.stato === 'non-conosco'));
  }
});

for (const valore of [1, 2, 3]) {
  test('tutte ' + valore + ': nessuna attività evidenziata, risposte conservate', () => {
    const esito = valutaUniversita(mappaBase(valore));
    assert.equal(esito.stato, 'da-esplorare');
    assert.deepEqual(esito.aree, []);
    assert.deepEqual(esito.candidatiConfronto, []);
    assert.match(esito.titolo, /Nessuna attività indicata/);
    assert.equal(esito.confrontoNeutrale.length, 15);
    assert.ok(esito.confrontoNeutrale.every(a => a.risposteInteressi.every(r => r.risposta === valore)));
  });
}

for (const valore of [4, 5]) {
  test('tutte ' + valore + ': tutte le aree restano visibili, nessun vincitore', () => {
    const esito = valutaUniversita(mappaBase(valore));
    assert.equal(esito.stato, 'orientativo');
    assert.deepEqual(idAree(esito), AREE_UNIVERSITA.map(a => a.id));
    assert.deepEqual(esito.candidatiConfronto.map(a => a.id), AREE_UNIVERSITA.map(a => a.id));
    assert.equal(esito.sceltaConfronto, true);
    assert.equal(esito.tipoConfronto, 'aree');
    assert.equal(esito.confrontoNeutrale.length, 0);
    assert.ok(esito.aree.every(a => a.motivazioni.length === 2));
    assert.deepEqual(approfondimentiUniversita(mappaBase(valore)), []);
  });
}

test('5 e 1 nella stessa area conservano la singola attività molto gradita', () => {
  const risposte = mappaBase(1);
  risposte['int-inf-1'] = 5;
  const esito = valutaUniversita(risposte);
  assert.deepEqual(idAree(esito), ['informatica']);
  assert.deepEqual(esito.areeConUnaPreferenza.map(a => a.id), ['informatica']);
  const area = esito.aree[0];
  assert.deepEqual(area.riepilogoInteressi, { totali: 2, espressi: 1, altreRisposte: 1, nonConosco: 0, mancanti: 0 });
  assert.deepEqual(area.risposteInteressi.map(r => r.risposta), [5, 1]);
  assert.deepEqual(area.motivazioni.map(r => r.domandaId), ['int-inf-1']);
  assert.doesNotMatch(esito.sintesi, /non esprimono|incert|profilo/i);
});

test('5 e non-conosco distinguono una preferenza da una attività sconosciuta', () => {
  const risposte = mappaBase(1);
  risposte['int-inf-1'] = 5;
  risposte['int-inf-2'] = 'non-conosco';
  const esito = valutaUniversita(risposte);
  const area = esito.aree[0];
  assert.deepEqual(area.riepilogoInteressi, { totali: 2, espressi: 1, altreRisposte: 0, nonConosco: 1, mancanti: 0 });
  assert.equal(area.risposteInteressi[1].risposta, 'non-conosco');
  assert.equal(area.risposteInteressi[1].stato, 'non-conosco');
  assert.equal(area.risposteInteressi[1].evidenziata, false);
});

test('4 e 4 restano visibili anche se un’altra area riceve 5 e 5; ordine del catalogo', () => {
  const prima = risposteAree(['ingegneria'], 5);
  prima['int-inf-1'] = 4;
  prima['int-inf-2'] = 4;
  const dopo = { ...prima, 'int-ing-1': 4, 'int-ing-2': 4, 'int-inf-1': 5, 'int-inf-2': 5 };
  assert.deepEqual(idAree(valutaUniversita(prima)), ['ingegneria', 'informatica']);
  assert.deepEqual(idAree(valutaUniversita(dopo)), ['ingegneria', 'informatica']);
  assert.equal(valutaUniversita(prima).sceltaConfronto, false);
});

test('le aree con una preferenza restano accessibili accanto a quelle con due', () => {
  const risposte = risposteAree(['lingue']);
  risposte['int-inf-1'] = 5;
  const esito = valutaUniversita(risposte);
  assert.deepEqual(idAree(esito), ['lingue']);
  assert.deepEqual(esito.areeConUnaPreferenza.map(a => a.id), ['informatica']);
  assert.deepEqual(esito.candidatiConfronto.map(a => a.id), ['informatica', 'lingue']);
  assert.equal(esito.confrontoNeutrale.length, 13);
  assert.ok(esito.areeConUnaPreferenza[0].motivazioni.every(m => m.domandaId === 'int-inf-1'));
});

test('una sola area conosciuta conserva entrambe le preferenze, senza soglia di copertura', () => {
  const risposte = risposteAree(['ingegneria'], 5, 'non-conosco');
  const esito = valutaUniversita(risposte);
  assert.equal(esito.copertura.completa, true);
  assert.equal(esito.copertura.areeConfrontabili, 1);
  assert.equal(esito.stato, 'orientativo');
  assert.deepEqual(idAree(esito), ['ingegneria']);
  assert.equal(esito.aree[0].motivazioni.length, 2);
});

test('quattro e cinque aree non vengono cancellate o troncate; scelta esplicita', () => {
  const ids = ['ingegneria', 'informatica', 'economia', 'lingue', 'sport'];
  for (const n of [3, 4, 5]) {
    const esito = valutaUniversita(risposteAree(ids.slice(0, n), 4));
    assert.deepEqual(idAree(esito), ordineCatalogo(ids.slice(0, n)));
    assert.equal(esito.candidatiConfronto.length, n);
    assert.equal(esito.sceltaConfronto, n > 3);
  }
  const miste = risposteAree(ids.slice(0, 3), 4);
  miste['int-lin-1'] = 5;
  const esito = valutaUniversita(miste);
  assert.equal(esito.aree.length, 3);
  assert.equal(esito.areeConUnaPreferenza.length, 1);
  assert.equal(esito.candidatiConfronto.length, 4);
  assert.equal(esito.sceltaConfronto, true);
});

test('una risposta alta in ogni area rimane un elenco di attività, senza classifica', () => {
  const risposte = mappaBase(2);
  for (const area of AREE_UNIVERSITA) {
    const domande = BASE.filter(q => q.blocco === 'interessi' && q.aree.includes(area.id));
    risposte[domande[0].id] = 3;
    risposte[domande[1].id] = 5;
  }
  const esito = valutaUniversita(risposte);
  assert.equal(esito.aree.length, 15);
  assert.equal(esito.areeConUnaPreferenza.length, 15);
  assert.equal(esito.sceltaConfronto, true);
  assert.ok(esito.aree.every(a => a.motivazioni.length === 1 && a.riepilogoInteressi.altreRisposte === 1));
});

test('base incompleta: stato esplicito e non salvabile, senza inventare la risposta mancante', () => {
  const risposte = risposteAree(['ingegneria']);
  delete risposte['pri-pratica'];
  const esito = valutaUniversita(risposte);
  assert.equal(esito.stato, 'da-completare');
  assert.equal(esito.copertura.mancanti, 1);
  assert.equal(esito.copertura.completa, false);
  assert.deepEqual(esito.aree, []);
});

test('le motivazioni di ogni area corrispondono esattamente alle attività e risposte dichiarate', () => {
  const risposte = risposteAree(['informatica', 'lettere-filosofia-storia', 'lingue']);
  risposte['stu-lettura'] = 5;
  risposte['pri-esplorare'] = 4;
  const esito = valutaUniversita(risposte);
  assert.equal(esito.preferenzeStudio.length, 1);
  assert.equal(esito.priorita.length, 1);
  for (const area of esito.aree) {
    for (const motivazione of area.motivazioni) {
      const domanda = BASE.find(q => q.id === motivazione.domandaId);
      assert.ok(domanda.aree.includes(area.id));
      assert.equal(motivazione.testo, domanda.evidenza);
      assert.equal(motivazione.domanda, domanda.testo);
      assert.equal(motivazione.risposta, risposte[domanda.id]);
      assert.ok([4, 5].includes(motivazione.risposta));
      assert.equal(motivazione.evidenziata, true);
    }
  }
  assert.ok(!JSON.stringify(esito).includes('%'));
  assert.equal(esito.versione, VERSIONE_UNIVERSITA);
});

test('studio e priorità non selezionano le aree; i risultati delle competenze sono ignorati', () => {
  const prima = risposteAree(['salute', 'educazione-psicologia']);
  const competenze = { ...prima, competenze: { matematica: 0 }, voto: 1, risultatiTest: { corretti: 0 }, probabilitaSuccesso: 100 };
  assert.deepEqual(valutaUniversita(prima), valutaUniversita(competenze));
  const dopo = { ...prima };
  for (const q of BASE.filter(q => q.blocco === 'studio' || q.blocco === 'priorita')) dopo[q.id] = 5;
  assert.deepEqual(valutaUniversita(prima).aree, valutaUniversita(dopo).aree);
  assert.deepEqual(valutaUniversita(prima).candidatiConfronto, valutaUniversita(dopo).candidatiConfronto);
});

test('nessun ramo automatico; risposte a approfondimenti non scelti non influenzano il generale', () => {
  const risposte = risposteAree(['ingegneria', 'economia', 'arti-design']);
  assert.deepEqual(approfondimentiUniversita(risposte), []);
  const dopo = { ...risposte };
  for (const q of DOMANDE_UNIVERSITA.filter(q => q.blocco === 'approfondimento')) dopo[q.id] = 5;
  assert.deepEqual(valutaUniversita(risposte), valutaUniversita(dopo));
  const esito = valutaUniversita(risposte);
  assert.equal(esito.copertura.approfondimenti.totali, 0);
  assert.equal(esito.copertura.approfondimenti.completa, true);
  assert.ok(esito.aree.every(a => a.percorsi.every(p => !p.approfondimentiProposti && p.risposteInteressi.length === 0)));
});

test('famiglia esplicita: ramo intero stabile, input annidato e argomento esplicito equivalenti', () => {
  const risposte = mappaBase('non-conosco');
  const ramo = approfondimentiUniversita(risposte, 'ingegneria');
  assert.equal(ramo.length, 6);
  ramo.forEach((q, i) => { risposte[q.id] = i % 2 ? 1 : 5; });
  assert.deepEqual(approfondimentiUniversita({ risposte, areaScelta: 'ingegneria' }), ramo);
  assert.deepEqual(valutaUniversita({ risposte, areaScelta: 'ingegneria' }), valutaUniversita(risposte, 'ingegneria'));
  const extraNonAmmessi = { ...risposte, 'app-eco-mercati': 5, 'app-art-visive': 5 };
  assert.deepEqual(valutaUniversita(risposte, 'ingegneria'), valutaUniversita(extraNonAmmessi, 'ingegneria'));
});

test('famiglia scelta: percorsi motivati da risposte reali, anche quando sono 4 invece di 5', () => {
  const risposte = mappaBase('non-conosco');
  risposte['app-eco-mercati'] = 5;
  risposte['app-eco-impresa'] = 4;
  const esito = valutaUniversita(risposte, 'economia');
  assert.equal(esito.tipoConfronto, 'percorsi');
  assert.equal(esito.stato, 'orientativo');
  assert.deepEqual(esito.aree[0].percorsi.map(p => p.id), ['economia-mercati', 'economia-aziendale']);
  assert.equal(esito.aree[0].altriPercorsi.length, 0);
  assert.deepEqual(esito.aree[0].motivazioni.map(m => m.risposta), [5, 4]);
  assert.equal(esito.confrontoNeutrale.length, 1);
});

test('approfondimenti: risposta bassa, sconosciuta e mancante sono distinte', () => {
  const risposte = mappaBase('non-conosco');
  Object.assign(risposte, {
    'app-ing-civile-1': 5,
    'app-ing-civile-2': 1,
    'app-ing-industriale-1': 4,
    'app-ing-informazione-1': 'non-conosco',
    'app-ing-informazione-2': 'non-conosco',
  });
  const esito = valutaUniversita(risposte, 'ingegneria');
  const area = esito.aree[0];
  assert.deepEqual(area.percorsi.map(p => p.id), ['ing-civile', 'ing-industriale']);
  assert.deepEqual(percorsoDi(area, 'ing-civile').riepilogoInteressi, { totali: 2, espressi: 1, altreRisposte: 1, nonConosco: 0, mancanti: 0 });
  assert.deepEqual(percorsoDi(area, 'ing-industriale').riepilogoInteressi, { totali: 2, espressi: 1, altreRisposte: 0, nonConosco: 0, mancanti: 1 });
  assert.equal(percorsoDi(area, 'ing-industriale').risposteInteressi[1].risposta, null);
  assert.equal(percorsoDi(area, 'ing-industriale').risposteInteressi[1].stato, 'non-risposto');
  assert.deepEqual(percorsoDi(area, 'ing-informazione').riepilogoInteressi, { totali: 2, espressi: 0, altreRisposte: 0, nonConosco: 2, mancanti: 0 });
  assert.equal(esito.copertura.approfondimenti.completa, false);
});

test('famiglia scelta con tutte alte: tutti gli indirizzi, nessun vincitore', () => {
  const risposte = mappaBase(5);
  for (const q of approfondimentiUniversita(risposte, 'ingegneria')) risposte[q.id] = 5;
  const esito = valutaUniversita(risposte, 'ingegneria');
  assert.equal(esito.aree[0].percorsi.length, 3);
  assert.equal(esito.aree[0].altriPercorsi.length, 0);
  assert.equal(esito.candidatiConfronto.length, 3);
  assert.equal(esito.sceltaConfronto, false);
  assert.ok(esito.aree[0].percorsi.every(p => p.motivazioni.length === 2));
});

for (const valore of [1, 2, 3, 'non-conosco']) {
  test('famiglia esplicita con tutte ' + valore + ': una famiglia neutrale e tutti i percorsi', () => {
    const risposte = mappaBase(5);
    for (const q of approfondimentiUniversita(risposte, 'ingegneria')) risposte[q.id] = valore;
    const esito = valutaUniversita(risposte, 'ingegneria');
    assert.equal(esito.stato, 'da-esplorare');
    assert.deepEqual(esito.aree, []);
    assert.deepEqual(esito.candidatiConfronto, []);
    assert.equal(esito.sceltaConfronto, false);
    assert.equal(esito.confrontoNeutrale.length, 1);
    assert.equal(esito.confrontoNeutrale[0].percorsi.length, 3);
    assert.ok(esito.confrontoNeutrale[0].percorsi.every(p => p.risposteInteressi.every(r => r.risposta === valore)));
  });
}

test('quattro percorsi artistici con risposta alta rimangono distinti e richiedono scelta', () => {
  const risposte = mappaBase(2);
  for (const q of approfondimentiUniversita(risposte, 'arti-design')) risposte[q.id] = 4;
  const esito = valutaUniversita(risposte, 'arti-design');
  assert.equal(esito.aree[0].percorsi.length, 4);
  assert.equal(esito.sceltaConfronto, true);
  assert.equal(esito.tipoConfronto, 'percorsi');
  assert.deepEqual(esito.candidatiConfronto.map(p => p.id), ['design', 'architettura', 'arti-visive', 'musica-spettacolo']);
});

test('base completa senza approfondimenti rimane salvabile con famiglia scelta', () => {
  const esito = valutaUniversita({ risposte: mappaBase(3), areaScelta: 'arti-design' });
  assert.equal(esito.copertura.completa, true);
  assert.equal(esito.copertura.approfondimenti.risposte, 0);
  assert.equal(esito.stato, 'da-esplorare');
  assert.equal(esito.confrontoNeutrale.length, 1);
  assert.equal(esito.confrontoNeutrale[0].percorsi.length, 4);
  for (const percorso of esito.confrontoNeutrale[0].percorsi) {
    assert.equal(percorso.approfondimentiProposti, true);
    assert.equal(percorso.riepilogoInteressi.espressi, 0);
    assert.equal(percorso.riepilogoInteressi.altreRisposte, 0);
    assert.ok(percorso.risposteInteressi.every(r => r.risposta === null && r.stato === 'non-risposto'));
  }
});

test('piano di tre azioni concrete: personalizzazione soltanto dalle priorità dichiarate', () => {
  const risposte = risposteAree(['informatica']);
  const prima = valutaUniversita(risposte);
  assert.equal(prima.pianoPratico.length, 3);
  assert.ok(prima.pianoPratico.every(p => p.id && p.titolo && p.testo));
  assert.equal(prima.pianoPratico[0].url, 'https://www.universitaly.it/it/cerca-corsi');
  assert.equal(prima.pianoPratico[0].etichettaLink, 'Cerca due corsi su Universitaly');
  for (const passo of prima.pianoPratico.slice(1)) {
    assert.equal(passo.url, null);
    assert.equal(passo.etichettaLink, null);
  }
  assert.deepEqual(prima.pianoPratico[1].domandeId, []);
  assert.doesNotMatch(prima.pianoPratico[1].testo, /Per le priorità che hai indicato/);
  risposte['pri-pratica'] = 4;
  risposte['pri-professione'] = 5;
  const dopo = valutaUniversita(risposte);
  assert.deepEqual(dopo.pianoPratico[1].domandeId, ['pri-professione', 'pri-pratica']);
  assert.match(dopo.pianoPratico[1].testo, /laboratori, progetti e tirocini/);
  assert.match(dopo.pianoPratico[1].testo, /titoli e ulteriori requisiti/);
  assert.deepEqual(dopo.prossimiPassi, dopo.pianoPratico.map(p => p.testo));
  for (const passo of dopo.pianoPratico) {
    assert.ok(passo.domandeId.every(id => [4, 5].includes(risposte[id])));
  }
});

test('il metodo è leggibile e non espone punteggi, medie o soglie di copertura', () => {
  const esito = valutaUniversita(risposteAree(['economia']));
  assert.equal(METODO_UNIVERSITA.validato, false);
  assert.equal(Object.hasOwn(METODO_UNIVERSITA, 'minimoAreeConfrontabili'), false);
  assert.ok(esito.metodo.titolo);
  assert.ok(esito.metodo.regole.every(t => typeof t === 'string' && t.length > 0));
  assert.ok(esito.metodo.limiti.every(t => typeof t === 'string' && t.length > 0));
  assert.ok(esito.fonti.every(f => f.url.startsWith('https://') && f.uso));
  assert.ok(esito.aree.every(a => !Object.hasOwn(a, 'media') && !Object.hasOwn(a, 'punteggio')));
});

test('input invalidi, numeri fuori scala, stringhe e proprietà ereditate vengono ignorati', () => {
  for (const dati of [undefined, null, true, 42, 'test', [], [5, 5]]) {
    const esito = valutaUniversita(dati);
    assert.equal(esito.copertura.risposte, 0);
    assert.deepEqual(esito.aree, []);
  }
  for (const valore of [0, -1, 6, Infinity, NaN, 2.5, '5', '<script>alert(1)</script>', {}, []]) {
    assert.equal(valutaUniversita(mappaBase(valore)).copertura.risposte, 0);
  }
  const ereditate = Object.create(risposteAree(['ingegneria']));
  assert.equal(valutaUniversita(ereditate).copertura.risposte, 0);
  const malizioso = JSON.parse('{"__proto__":{"int-ing-1":5},"constructor":{"prototype":{"contaminato":true}},"areaScelta":"<script>alert(1)</script>"}');
  const esito = valutaUniversita(malizioso);
  assert.equal(esito.areaScelta, null);
  assert.equal(esito.copertura.risposte, 0);
  assert.equal({}.contaminato, undefined);
  assert.ok(!JSON.stringify(esito).includes('<script>'));
  assert.deepEqual(approfondimentiUniversita(mappaBase(5), '<script>'), []);
});

test('gli accessor non vengono eseguiti e un proxy ostile non interrompe il riepilogo', () => {
  let eseguiti = 0;
  const dati = {};
  Object.defineProperty(dati, 'int-ing-1', { get() { eseguiti += 1; throw new Error('Accessor non ammesso'); } });
  assert.equal(valutaUniversita(dati).copertura.risposte, 0);
  assert.equal(eseguiti, 0);
  const proxy = new Proxy({}, { getOwnPropertyDescriptor() { throw new Error('Lettura negata'); } });
  assert.equal(valutaUniversita(proxy).copertura.risposte, 0);
});

test('risultati serializzabili, deterministici e copie indipendenti per browser e Worker', () => {
  const risposte = risposteAree(['economia']);
  const originale = JSON.stringify(risposte);
  const esito = valutaUniversita(risposte);
  assert.deepEqual(JSON.parse(JSON.stringify(esito)), esito);
  esito.aree[0].percorsi[0].titolo = 'Modificato';
  esito.aree[0].materie[0].slug = 'inesistente';
  esito.aree[0].cosaConfrontare.push('Modificato');
  esito.aree[0].risposteInteressi[0].testo = 'Modificato';
  esito.metodo.regole[0] = 'Modificato';
  esito.fonti[0].uso = 'Modificato';
  const successivo = valutaUniversita(risposte);
  assert.notEqual(successivo.aree[0].percorsi[0].titolo, 'Modificato');
  assert.notEqual(successivo.aree[0].materie[0].slug, 'inesistente');
  assert.ok(!successivo.aree[0].cosaConfrontare.includes('Modificato'));
  assert.notEqual(successivo.aree[0].risposteInteressi[0].testo, 'Modificato');
  assert.notEqual(successivo.metodo.regole[0], 'Modificato');
  assert.notEqual(successivo.fonti[0].uso, 'Modificato');
  assert.equal(JSON.stringify(risposte), originale);
  assert.deepEqual(valutaUniversita(risposte), successivo);
  const domande = domandeBaseUniversita();
  domande[0].aree.push('inesistente');
  assert.ok(!domandeBaseUniversita()[0].aree.includes('inesistente'));
  const extra = approfondimentiUniversita({}, 'ingegneria');
  extra[0].indirizzi.push('inesistente');
  assert.ok(!approfondimentiUniversita({}, 'ingegneria')[0].indirizzi.includes('inesistente'));
});
