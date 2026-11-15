// Elenco degli esercizi da fare di un argomento che non hanno ancora la verifica automatica.
// Uso: node strumenti/chiavi-elenco.mjs <materia> <argomento> [--tutti]
// Stampa per ogni esercizio numero, titolo, traccia e soluzione (Markdown), da usare per scrivere la chiave di correzione.
import fs from 'node:fs';
import path from 'node:path';
import { risultatoDaEsercizio } from '../worker/valuta.mjs';

const [materia, argomento, opz] = process.argv.slice(2);
if (!materia || !argomento) { console.error('uso: node strumenti/chiavi-elenco.mjs <materia> <argomento> [--tutti]'); process.exit(1); }
const radice = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const cartella = path.join(radice, 'src/content/dafare', materia, argomento);
const chiaviFile = path.join(radice, 'src/data/chiavi', `${materia}.json`);
const chiavi = fs.existsSync(chiaviFile) ? JSON.parse(fs.readFileSync(chiaviFile, 'utf8')) : {};
const file = fs.readdirSync(cartella).filter((f) => f.endsWith('.md')).sort((a, b) => parseInt(a) - parseInt(b));
for (const f of file) {
  const n = f.replace(/\.md$/, '');
  const testo = fs.readFileSync(path.join(cartella, f), 'utf8');
  const auto = risultatoDaEsercizio(testo);
  if (opz !== '--tutti' && (auto || chiavi[`${argomento}/${n}`])) continue;
  const titolo = testo.match(/^titolo:\s*(.+)$/m)?.[1]?.replace(/^["']|["']$/g, '') ?? '';
  const corpo = testo.replace(/^---[\s\S]*?\n---\n/, '');
  const [traccia, resto = ''] = corpo.split(/:::soluzione\s*\n/);
  const soluzione = resto.replace(/\n:::\s*$/, '').trim();
  console.log(`=== ${argomento}/${n} · ${titolo}${auto ? ` · già verificato: ${auto.tipo}` : ''}\n--- TRACCIA\n${traccia.trim()}\n--- SOLUZIONE\n${soluzione}\n`);
}
