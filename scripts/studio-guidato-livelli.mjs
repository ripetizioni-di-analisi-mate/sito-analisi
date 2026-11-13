// Studio guidato: unisce in src/data/studio-guidato-livelli.json la classificazione delle
// domande a tempo (livello 1 base, 2 medio, 3 avanzato e abilità verificata), scritta per
// argomento in file JSON da chi le ha lette (cartella passata come argomento).
// Uso: node scripts/studio-guidato-livelli.mjs <cartella-classi>
// Correzioni a mano: si modifica direttamente src/data/studio-guidato-livelli.json
// ("<argomento>/<n>": [livello, indice dell'abilità nell'elenco "<materia>/<argomento>").
import fs from 'node:fs';
import path from 'node:path';

const cartella = process.argv[2];
if (!cartella) { console.error('Indicare la cartella con i file <materia>__<argomento>.json'); process.exit(1); }
const USCITA = 'src/data/studio-guidato-livelli.json';
const esito = { domande: {}, abilita: {} };
for (const f of fs.readdirSync(cartella).filter((x) => x.endsWith('.json')).sort()) {
  const { materia, argomento, abilita, domande } = JSON.parse(fs.readFileSync(path.join(cartella, f), 'utf8'));
  const attesi = fs.readdirSync(`src/content/domande/${materia}/${argomento}`).filter((x) => x.endsWith('.md')).map((x) => `${argomento}/${x.slice(0, -3)}`);
  const mancanti = attesi.filter((id) => !domande[id]);
  if (mancanti.length) throw new Error(`${f}: mancano ${mancanti.join(', ')}`);
  esito.abilita[`${materia}/${argomento}`] = abilita;
  const per = (esito.domande[materia] ||= {});
  for (const id of attesi) {
    const { livello, abilita: ab } = domande[id];
    const k = abilita.indexOf(ab);
    if (![1, 2, 3].includes(livello) || k < 0) throw new Error(`${f}: voce non valida per ${id}`);
    per[id] = [livello, k];
  }
  const c = [1, 2, 3].map((l) => attesi.filter((id) => per[id][0] === l).length);
  console.log(materia, argomento, 'base', c[0], 'medio', c[1], 'avanzato', c[2]);
}
fs.writeFileSync(USCITA, JSON.stringify(esito) + '\n');
