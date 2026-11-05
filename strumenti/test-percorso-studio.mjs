import assert from 'node:assert/strict';
import { destinazioniStudio } from '../src/lib/percorso-studio.mjs';

const argomenti = ['insiemi', 'limiti', 'derivate'];
const tutte = { svolti: true, dafare: true, domande: true };
const prossimo = (sezione, disponibili = tutte) => destinazioniStudio(argomenti, 'limiti', sezione, disponibili).successivo;

// Il pulsante principale non deve saltare alle derivate dall'elenco degli svolti.
assert.deepEqual(prossimo('teoria'), { argomento: 'limiti', sezione: 'esercizi-svolti' });
assert.deepEqual(prossimo('esercizi-svolti'), { argomento: 'limiti', sezione: 'esercizi' });
assert.deepEqual(prossimo('esercizi'), { argomento: 'limiti', sezione: 'domande' });
assert.deepEqual(prossimo('domande'), { argomento: 'derivate', sezione: 'teoria' });

// Materie prive di quiz o di una raccolta non devono produrre destinazioni vuote.
assert.deepEqual(prossimo('esercizi', { svolti: true, dafare: true, domande: false }), { argomento: 'derivate', sezione: 'teoria' });
assert.deepEqual(prossimo('teoria', { svolti: false, dafare: false, domande: true }), { argomento: 'limiti', sezione: 'domande' });
assert.deepEqual(prossimo('esercizi-svolti', { svolti: true, dafare: false, domande: false }), { argomento: 'derivate', sezione: 'teoria' });
assert.deepEqual(destinazioniStudio(argomenti, 'limiti', 'esercizi', tutte).precedente, { argomento: 'limiti', sezione: 'esercizi-svolti' });
assert.equal(destinazioniStudio(argomenti, 'insiemi', 'teoria', tutte).precedente, null);
assert.equal(destinazioniStudio(argomenti, 'derivate', 'domande', tutte).successivo, null);

// RIPASSO e slug sconosciuti non devono essere scambiati per il primo argomento.
assert.equal(destinazioniStudio(argomenti, 'ripasso-di-oggi', 'domande', tutte).successivo, null);
assert.equal(destinazioniStudio(argomenti, 'limiti', 'stampa', tutte).successivo, null);
console.log('Percorso di studio: 12 verifiche superate.');
