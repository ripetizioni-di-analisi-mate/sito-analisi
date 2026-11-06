import test from 'node:test';
import assert from 'node:assert/strict';
import {
  caricaPercorsoStudio, creaCatalogoStudio, destinazioneObiettivo,
  destinazioneSessione, prossimaAttivita, ultimaSessioneStudio,
} from '../src/lib/percorso-studio.mjs';

const catalogo = creaCatalogoStudio([
  { slug: 'analisi-1', titolo: 'Analisi 1', attiva: true, gruppo: 'Università', argomenti: [{ slug: 'limiti' }, { slug: 'senza-quiz' }] },
  { slug: 'matematica-superiori-4', titolo: 'Matematica 4° anno', attiva: true, gruppo: 'Superiori', argomenti: [{ slug: 'trigonometria' }] },
  { slug: 'statistica', attiva: false, argomenti: [] },
], { 'analisi-1': ['limiti'], 'matematica-superiori-4': ['trigonometria'] });

test('riprendere un ripasso apre le domande e conserva i nomi delle verifiche', () => {
  const oggi = destinazioneSessione({ materia: 'analisi-1', argomento: 'ripasso-di-oggi' }, catalogo);
  assert.equal(oggi.href, '/analisi-1/ripasso-di-oggi/domande');
  const verifica = destinazioneSessione({ materia: 'matematica-superiori-4', argomento: 'prove-d-esame', titolo: "Prove d'esame" }, catalogo);
  assert.equal(verifica.titolo, 'Simulazioni di verifiche');
  assert.equal(verifica.href, '/matematica-superiori-4/prove-d-esame/domande');
});

test('un argomento senza quiz continua dalla teoria', () => {
  const d = prossimaAttivita({ sessioni: [{ materia: 'analisi-1', argomento: 'senza-quiz' }] }, catalogo);
  assert.equal(d.href, '/analisi-1/senza-quiz/teoria');
  assert.equal(d.testo, 'Riprendi lo studio');
});

test('obiettivi completati, corsi in preparazione e indirizzi estranei non sostituiscono la sessione valida', () => {
  const obiettivi = [
    { link: '/analisi-1/limiti/domande', completato: true },
    { link: '//example.com/analisi-1/limiti/domande' },
    { link: '/statistica/limiti/domande' },
    { link: '/analisi-1/senza-quiz/domande' },
  ];
  for (const o of obiettivi) assert.equal(destinazioneObiettivo(o, catalogo), null);
  const d = prossimaAttivita({ obiettivi, sessioni: [{ materia: 'analisi-1', argomento: 'limiti' }] }, catalogo);
  assert.equal(d.href, '/analisi-1/limiti/domande');
});

test('un obiettivo incompleto valido ha precedenza e il prefisso inglese compare una volta', () => {
  const d = prossimaAttivita({
    obiettivi: [{ link: '/en/analisi-1/limiti/domande', completato: false }],
    sessioni: [{ materia: 'matematica-superiori-4', argomento: 'trigonometria' }],
  }, catalogo, 'en');
  assert.equal(d.href, '/en/analisi-1/limiti/domande');
  assert.equal(d.testo, 'Continue with the timed questions');
});

test('una sessione non più pubblicata viene saltata senza creare pagine inesistenti', () => {
  const sessioni = [
    { materia: 'statistica', argomento: 'media' },
    { materia: 'analisi-1', argomento: 'capitolo-rimosso' },
    { materia: 'analisi-1', argomento: 'limiti', titolo: 'Limiti e continuità' },
  ];
  assert.equal(ultimaSessioneStudio(sessioni, catalogo).href, '/analisi-1/limiti/teoria');
  assert.equal(ultimaSessioneStudio(sessioni, catalogo).titolo, 'Limiti e continuità');
});

test('senza attività si apre il catalogo delle domande anche in inglese', () => {
  assert.equal(prossimaAttivita({}, catalogo).href, '/domande-a-tempo');
  assert.equal(prossimaAttivita(null, catalogo, 'en').href, '/en/domande-a-tempo');
});

test('home, account e pannello condividono una richiesta e un errore consente di riprovare', async () => {
  const originale = globalThis.fetch;
  let chiamate = 0;
  try {
    globalThis.fetch = async () => { chiamate++; return { ok: true, json: async () => ({ sessioni: [] }) }; };
    const risposte = await Promise.all([caricaPercorsoStudio('it'), caricaPercorsoStudio('it'), caricaPercorsoStudio('it')]);
    assert.equal(chiamate, 1);
    assert.equal(risposte[0], risposte[1]);
    globalThis.fetch = async () => { chiamate++; throw new Error('rete'); };
    assert.equal(await caricaPercorsoStudio('en'), null);
    globalThis.fetch = async () => { chiamate++; return { ok: true, json: async () => ({ sessioni: [] }) }; };
    assert.deepEqual(await caricaPercorsoStudio('en'), { sessioni: [] });
    assert.equal(chiamate, 3);
  } finally { globalThis.fetch = originale; }
});
