import test from 'node:test';
import assert from 'node:assert/strict';
import { classificaConBot, minutoLega } from '../worker/bot-lega.mjs';

const settimana = '2026-11-09';
const contesto = { settimana, oggi: settimana, minuto: 1439, lega: 0, gruppo: 1 };
const studenti = (n) => Array.from({ length: n }, (_, i) => ({
  nome: `Studente ${i + 1}`, exp: 20, posizioneStudente: i + 1, io: i === 0, zona: i === 0 ? 'sale' : '',
}));
const bot = (righe) => righe.filter((r) => r.bot);
const avversari = (opzioni) => bot(classificaConBot(studenti(1), { ...contesto, ...opzioni }));

test('tutte le leghe riempiono soltanto i posti necessari, anche nei gruppi appena formati', () => {
  for (let lega = 0; lega < 10; lega++) {
    for (const n of [0, 1, 5, 9, 10, 11, 30]) {
      const iscritti = studenti(n);
      const righe = classificaConBot(iscritti, { ...contesto, lega });
      assert.equal(righe.length, n ? Math.max(10, n) : 0);
      const avversari = bot(righe);
      assert.equal(avversari.length, righe.length - n);
      assert.equal(new Set(avversari.map((r) => r.nome)).size, avversari.length);
      assert.ok(avversari.every((r) => r.bot === true && /^\p{Lu}\p{Ll}+$/u.test(r.nome) && !r.io && !r.zona && !r.email));
      const persone = righe.filter((r) => !r.bot);
      for (const [i, persona] of persone.entries()) {
        for (const [chiave, valore] of Object.entries(iscritti[i])) assert.equal(persona[chiave], valore);
      }
      assert.equal(persone.length, n);
    }
  }
});

test('la graduatoria è stabile, ordinata per EXP e a parità dà precedenza agli studenti', () => {
  const iscritti = studenti(2);
  const campione = bot(classificaConBot(iscritti, contesto))[0];
  for (const studente of iscritti) studente.exp = campione.exp;
  const righe = classificaConBot(iscritti, contesto);
  assert.deepEqual(classificaConBot(iscritti, contesto), righe);
  assert.deepEqual(righe.map((r) => r.pos), Array.from({ length: righe.length }, (_, i) => i + 1));
  assert.deepEqual(righe.map((r) => r.exp), righe.map((r) => r.exp).sort((a, b) => b - a));
  const pari = righe.filter((r) => r.exp === campione.exp);
  assert.deepEqual(pari.slice(0, 2).map((r) => r.nome), iscritti.map((r) => r.nome));
  assert.ok(pari.slice(2).some((r) => r.nome === campione.nome && r.bot));
});

test('se arriva uno studente, i bot rimanenti conservano nome e punteggio', () => {
  const iniziali = new Map(bot(classificaConBot(studenti(1), contesto)).map((r) => [r.nome, r.exp]));
  for (const r of bot(classificaConBot(studenti(5), contesto))) assert.equal(r.exp, iniziali.get(r.nome));
});

test('le sessioni alternano pause e incrementi interi, stabili fra due letture nello stesso minuto', () => {
  let pause = 0, aumenti = 0, giorniFermi = 0;
  const ultimaExp = new Map();
  for (const oggi of ['2026-11-09', '2026-11-10', '2026-11-11', '2026-11-12', '2026-11-13', '2026-11-14', '2026-11-15']) {
    const apertura = avversari({ oggi, minuto: 0 });
    for (const r of apertura) {
      assert.equal(r.exp, ultimaExp.get(r.nome) ?? 0);
      ultimaExp.set(r.nome, r.exp);
    }
    for (let minuto = 29; minuto < 1440; minuto += 30) {
      const attuali = avversari({ oggi, minuto });
      for (const r of attuali) {
        const differenza = r.exp - ultimaExp.get(r.nome);
        assert.ok(Number.isInteger(differenza) && differenza >= 0);
        if (differenza > 0) aumenti++;
        else pause++;
        ultimaExp.set(r.nome, r.exp);
      }
      assert.deepEqual(avversari({ oggi, minuto }), attuali);
    }
    giorniFermi += apertura.filter((r) => r.exp === ultimaExp.get(r.nome)).length;
  }
  assert.ok(aumenti > 0 && pause > aumenti);
  assert.ok(giorniFermi > 0);
});

test('nelle settimane del cambio d’ora il punteggio cumulato si azzera al lunedì', () => {
  assert.equal(minutoLega(Date.parse('2026-03-29T00:59Z')), 1 * 60 + 59);
  assert.equal(minutoLega(Date.parse('2026-03-29T01:00Z')), 3 * 60);
  assert.equal(minutoLega(Date.parse('2026-10-25T00:30Z')), 2 * 60 + 30);
  assert.equal(minutoLega(Date.parse('2026-10-25T01:30Z')), 2 * 60 + 30);
  for (const [inizio, sabato, domenica, lunedi] of [
    ['2026-03-23', '2026-03-28', '2026-03-29', '2026-03-30'],
    ['2026-10-19', '2026-10-24', '2026-10-25', '2026-10-26'],
  ]) {
    const precedenti = new Map(avversari({ settimana: inizio, oggi: sabato }).map((r) => [r.nome, r.exp]));
    const chiusura = avversari({ settimana: inizio, oggi: domenica });
    assert.ok(chiusura.every((r) => r.exp > 0 && r.exp >= precedenti.get(r.nome)));
    assert.ok(avversari({ settimana: lunedi, oggi: lunedi, minuto: 0 }).every((r) => r.exp === 0));
  }
});

test('i gruppi hanno estrazioni distinte e ogni lega successiva offre punteggi più alti', () => {
  const oggi = '2026-11-15';
  assert.notDeepEqual(avversari({ oggi }), avversari({ oggi, gruppo: 2 }));
  for (const gruppo of [1, 2]) {
    let precedenti;
    for (let lega = 0; lega < 10; lega++) {
      const punteggi = avversari({ oggi, gruppo, lega }).map((r) => r.exp).sort((a, b) => a - b);
      if (precedenti) assert.ok(punteggi.every((exp, i) => exp > precedenti[i]));
      precedenti = punteggi;
    }
  }
});
