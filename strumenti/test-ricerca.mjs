import test from 'node:test';
import assert from 'node:assert/strict';
import katex from 'katex';
import {
  normalizza, preparaIndice, cercaVoci, suggerisciQuery, vocabolario,
  distanzaRefuso, partiTitolo, partiEvidenziate, indirizzoSicuro,
} from '../src/lib/ricerca-client.mjs';

const voce = (t, h, c = 'argomenti', extra = {}) => ({ t, h, c, s: 'Teoria', m: 'Analisi 1', p: '', ...extra });
const indice = preparaIndice([
  voce('Limiti e continuità', '/analisi-1/limiti/teoria', 'argomenti', { p: 'limite limiti' }),
  voce('Scheda 3 · Limiti nelle forme $\\frac{0}{0}$ e $\\frac{\\infty}{\\infty}$ con il teorema di De L’Hôpital', '/analisi-1/derivate/esercizi-svolti/3', 'esercizi', { p: 'esercizi svolti limiti' }),
  voce('Limiti di funzioni di due variabili', '/analisi-2/limiti/teoria', 'argomenti', { m: 'Analisi 2' }),
  voce('Analisi matematica 1', '/analisi-1', 'corsi', { m: 'Università', p: 'limiti derivate integrali' }),
  voce('Videocorso di Analisi 1', '/videocorsi/analisi-1', 'videocorsi'),
  voce('Derivatives and Taylor polynomials', '/en/analisi-1/derivate/teoria', 'argomenti', { s: 'Topic', m: 'Calculus 1' }),
], { 'analisi-1': ['analisi-1', 'precorso'] });

test('La ricerca trova accenti, apostrofi e singolare/plurale', () => {
  assert.equal(normalizza('Continuità, DE L’HÔPITAL'), 'continuita de lhopital');
  assert.equal(cercaVoci(indice, "de l'hopital")[0].voce.c, 'esercizi');
  assert.ok(cercaVoci(indice, 'limite').some((r) => r.voce.t === 'Limiti e continuità'));
  assert.ok(cercaVoci(indice, 'continuita').some((r) => r.voce.t === 'Limiti e continuità'));
});

test('Tutte le parole sono necessarie e il titolo ha precedenza sulle parole chiave', () => {
  assert.equal(cercaVoci(indice, 'limiti inesistente').length, 0);
  assert.equal(cercaVoci(indice, 'limiti')[0].voce.t, 'Limiti e continuità');
  assert.ok(cercaVoci(indice, 'limiti').at(-1).voce.c === 'corsi');
});

test('Limiti nel titolo e nel contesto precede gli integrali con parole illimitati o illimitate', () => {
  const esercizi = preparaIndice([
    voce('Scheda 1 · Integrali espliciti su intervalli illimitati', '/analisi-1/integrali-impropri/esercizi-svolti/1', 'esercizi', { s: 'Esercizi svolti · Integrali impropri' }),
    voce('Scheda 2 · Integrali espliciti di funzioni illimitate', '/analisi-1/integrali-impropri/esercizi-svolti/2', 'esercizi', { s: 'Esercizi svolti · Integrali impropri' }),
    voce('Scheda 6 · Limiti con il teorema di de l’Hôpital', '/analisi-1/derivate/esercizi-svolti/6', 'esercizi', { s: 'Esercizi svolti · Derivate', p: 'limite forma indeterminata' }),
    voce('Scheda 1 · Limiti di rapporti di polinomi in un punto', '/analisi-1/limiti/esercizi-svolti/1', 'esercizi', { s: 'Esercizi svolti · Limiti' }),
    voce('Scheda 2 · Razionalizzazione', '/analisi-1/limiti/esercizi-svolti/2', 'esercizi', { s: 'Esercizi svolti · Limiti' }),
    voce('Scheda 6 · Integrali con parametro e funzione illimitata', '/analisi-1/integrali-impropri/esercizi-svolti/6', 'esercizi', { s: 'Esercizi svolti · Integrali impropri', p: 'limiti notevoli' }),
  ]);
  const risultati = cercaVoci(esercizi, 'limiti', { materia: 'analisi-1', tipo: 'esercizi' }).map((r) => r.voce.h);
  assert.deepEqual(risultati, [
    '/analisi-1/limiti/esercizi-svolti/1',
    '/analisi-1/derivate/esercizi-svolti/6',
    '/analisi-1/limiti/esercizi-svolti/2',
    '/analisi-1/integrali-impropri/esercizi-svolti/6',
    '/analisi-1/integrali-impropri/esercizi-svolti/1',
    '/analisi-1/integrali-impropri/esercizi-svolti/2',
  ]);
  assert.equal(cercaVoci(esercizi, 'limite')[0].voce.h, risultati[0]);
});

test('Tutte le parole intere nel contesto precedono corrispondenze parziali nel titolo', () => {
  const esercizi = preparaIndice([
    voce('Limiti e intervalli illimitati', '/analisi-1/a/teoria'),
    voce('Calcolo', '/analisi-1/b/teoria', 'argomenti', { s: 'Limiti e continuità' }),
    voce('Continuità su intervalli illimitati', '/analisi-1/c/teoria'),
  ]);
  assert.equal(cercaVoci(esercizi, 'limiti continuita')[0].voce.h, '/analisi-1/b/teoria');
});

test('Materia e contenuto si combinano e riconoscono anche i percorsi inglesi', () => {
  const risultati = cercaVoci(indice, 'limiti', { materia: 'analisi-1', tipo: 'esercizi' });
  assert.equal(risultati.length, 1);
  assert.equal(risultati[0].voce.h, '/analisi-1/derivate/esercizi-svolti/3');
  assert.equal(cercaVoci(indice, 'derivatives', { materia: 'analisi-1' }).length, 1);
  assert.equal(cercaVoci(indice, '', { materia: 'analisi-2' }).length, 1);
});

test('Il filtro materia include i videocorsi che sbloccano quella materia', () => {
  assert.equal(cercaVoci(indice, '', { materia: 'precorso', tipo: 'videocorsi' }).length, 1);
  assert.equal(cercaVoci(indice, '', { materia: 'analisi-2', tipo: 'videocorsi' }).length, 0);
});

test('I servizi comuni mantengono le associazioni alle materie del catalogo', () => {
  const servizi = preparaIndice([
    voce('Corso di gruppo di Analisi matematica 1', '/corsi-di-gruppo', 'corsi'),
    voce('Corso di gruppo di Analisi matematica 2', '/corsi-di-gruppo', 'corsi'),
    voce('Lezione individuale con Carmine', '/prenota', 'corsi'),
  ], {}, {
    '/corsi-di-gruppo\nCorso di gruppo di Analisi matematica 1': ['analisi-1'],
    '/corsi-di-gruppo\nCorso di gruppo di Analisi matematica 2': ['analisi-2'],
    '/prenota': ['analisi-1', 'analisi-2'],
  });
  assert.equal(cercaVoci(servizi, '', { materia: 'analisi-1' }).length, 2);
  assert.ok(cercaVoci(servizi, '', { materia: 'analisi-1' }).every((r) => !r.voce.t.endsWith('2')));
  assert.equal(cercaVoci(servizi, '', { materia: 'fisica-1' }).length, 0);
});

test('I refusi propongono soltanto correzioni con risultati nei filtri selezionati', () => {
  const dizionario = vocabolario(indice);
  assert.equal(suggerisciQuery(indice, 'limti', {}, dizionario), 'limiti');
  assert.equal(suggerisciQuery(indice, 'limti', { tipo: 'esercizi' }, dizionario), 'limiti');
  assert.equal(suggerisciQuery(indice, 'limti', { tipo: 'videocorsi', materia: 'analisi-2' }, dizionario), null);
  assert.equal(suggerisciQuery(indice, 'derivaties', {}, dizionario), 'derivatives');
  assert.equal(suggerisciQuery(indice, 'limiti', {}, dizionario), null);
  assert.equal(suggerisciQuery(indice, 'zzzxq', {}, dizionario), null);
  assert.equal(suggerisciQuery(indice, 'li', {}, dizionario), null);
});

test('La distanza riconosce lettere mancanti e scambi vicini senza un fuzzy illimitato', () => {
  assert.equal(distanzaRefuso('limti', 'limiti', 1), 1);
  assert.equal(distanzaRefuso('lmiiti', 'limiti', 1), 1);
  assert.equal(distanzaRefuso('limite', 'integrale', 1), 2);
});

test('Le formule dei titoli sono separate dal testo, anche se sono più di una', () => {
  const titolo = indice[1].voce.t;
  const parti = partiTitolo(titolo);
  assert.deepEqual(parti.filter((p) => p.tipo === 'formula').map((p) => p.testo), ['\\frac{0}{0}', '\\frac{\\infty}{\\infty}']);
  for (const parte of parti.filter((p) => p.tipo === 'formula')) {
    assert.match(katex.renderToString(parte.testo, { throwOnError: true, trust: false }), /class="katex"/);
  }
  assert.deepEqual(partiTitolo('Testo $$x^2$$ finale'), [{ tipo: 'testo', testo: 'Testo ' }, { tipo: 'formula', testo: 'x^2' }, { tipo: 'testo', testo: ' finale' }]);
});

test('Delimitatori incompleti ed escapati restano testo senza perdere contenuto', () => {
  assert.deepEqual(partiTitolo('Formula $x senza chiusura'), [{ tipo: 'testo', testo: 'Formula $x senza chiusura' }]);
  assert.deepEqual(partiTitolo(String.raw`Prezzo \$29 e formula $x$`), [{ tipo: 'testo', testo: String.raw`Prezzo \$29 e formula ` }, { tipo: 'formula', testo: 'x' }]);
});

test('L’evidenziazione mantiene i caratteri originali e non produce frammenti HTML', () => {
  const titolo = '<img src=x onerror=alert(1)> Continuità';
  const parti = partiEvidenziate(titolo, 'continuita');
  assert.equal(parti.map((p) => p.testo).join(''), titolo);
  assert.deepEqual(parti.filter((p) => p.evidenziata), [{ testo: 'Continuità', evidenziata: true }]);
  assert.deepEqual(partiTitolo('<script>alert(1)</script>'), [{ tipo: 'testo', testo: '<script>alert(1)</script>' }]);
});

test('Le formule non autorizzano collegamenti attivi o tag HTML', () => {
  const html = katex.renderToString(String.raw`\href{javascript:alert(1)}{x}`, { trust: false, strict: 'ignore', throwOnError: false });
  assert.doesNotMatch(html, /<a\b|href="javascript:/i);
  const tag = katex.renderToString(String.raw`\text{<img src=x onerror=alert(1)>}`, { trust: false, throwOnError: false });
  assert.doesNotMatch(tag, /<img\b/);
});

test('L’indice rifiuta dati incompleti e scarta URL esterni o eseguibili', () => {
  assert.throws(() => preparaIndice({}), TypeError);
  assert.throws(() => preparaIndice([{ t: 'Titolo' }]), TypeError);
  for (const href of ['javascript:alert(1)', '//example.com', '/\\example.com', '/\nexample.com', 'https://example.com']) {
    assert.equal(indirizzoSicuro(href), false, href);
  }
  assert.equal(indirizzoSicuro('/analisi-1/limiti/teoria#definizione'), true);
  assert.equal(preparaIndice([voce('Valido', '/analisi-1'), voce('Esterno', '//example.com')]).length, 1);
});
