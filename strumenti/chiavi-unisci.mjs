// Unisce i file di lavoro delle chiavi (<cartella>/<materia>__<argomento>.json) in src/data/chiavi/<materia>.json.
// Uso: node strumenti/chiavi-unisci.mjs <cartella>
import fs from 'node:fs';
import path from 'node:path';
const cartella = process.argv[2];
if (!cartella) { console.error('uso: node strumenti/chiavi-unisci.mjs <cartella>'); process.exit(1); }
const radice = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const per = {};
for (const f of fs.readdirSync(cartella).filter((x) => x.endsWith('.json'))) {
  const materia = f.split('__')[0];
  Object.assign(per[materia] ??= {}, JSON.parse(fs.readFileSync(path.join(cartella, f), 'utf8')));
}
for (const [materia, voci] of Object.entries(per)) {
  const dest = path.join(radice, 'src/data/chiavi', `${materia}.json`);
  const vecchie = fs.existsSync(dest) ? JSON.parse(fs.readFileSync(dest, 'utf8')) : {};
  const tutte = { ...vecchie, ...voci };
  const ordinate = Object.fromEntries(Object.keys(tutte).sort((a, b) => {
    const [aa, an] = a.split('/'); const [ba, bn] = b.split('/');
    return aa.localeCompare(ba) || Number(an) - Number(bn);
  }).map((k) => [k, tutte[k]]));
  fs.writeFileSync(dest, JSON.stringify(ordinate, null, 1) + '\n');
  console.log(`${materia}: ${Object.keys(voci).length} chiavi (totale ${Object.keys(ordinate).length})`);
}
