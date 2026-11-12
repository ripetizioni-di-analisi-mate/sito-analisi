import { test } from 'node:test';
import assert from 'node:assert/strict';
import { VERSIONE_CONDIZIONI } from '../src/data/consenso-digitale.mjs';
import { allegatoContrattoDigitale } from '../worker/contratto-digitale.mjs';
import { testoContrattoCorrente } from './testo-contratto-digitale.mjs';

for (const lingua of ['it','en']) {
  test('la copia del contratto '+lingua+' contiene i termini e la politica effettivi, con link assoluti e accenti',()=>{
    const a=allegatoContrattoDigitale(lingua,VERSIONE_CONDIZIONI);
    const testo=Buffer.from(a.content,'base64').toString('utf8');
    assert.equal(testo,testoContrattoCorrente(lingua,VERSIONE_CONDIZIONI));
    assert.match(a.filename,/\.txt$/);
    for(const s of ['Carmine Tornincasa','04779350612','carminetornincasa98@gmail.com','/recesso','/rimborsi','/termini','24','14'])assert.ok(testo.includes(s),s);
  });
}
test('non sostituisce una versione mancante con le condizioni correnti',()=>{
  assert.throws(()=>allegatoContrattoDigitale('en','versione-sconosciuta'));
});
