// Esercizi da fare con la verifica della risposta.
// Il risultato si ricava dalla soluzione (worker/valuta.mjs); per gli esercizi con più risultati, intervalli,
// matrici o classificazioni vale la chiave di correzione scritta in src/data/chiavi/<materia>.json.
import { risultatoDaEsercizio, compilaChiave } from '../../worker/valuta.mjs';

type Voce = { id: string; body?: string };
const file = import.meta.glob('../data/chiavi/*.json', { eager: true, import: 'default' }) as Record<string, Record<string, unknown>>;
const CHIAVI: Record<string, unknown> = {};
for (const [percorso, voci] of Object.entries(file)) {
  const materia = percorso.split('/').pop()!.replace(/\.json$/, '');
  for (const [k, v] of Object.entries(voci)) CHIAVI[`${materia}/${k}`] = v;
}
const compilate = new Map<string, unknown>();
function chiaveDi(id: string) {
  if (!(id in CHIAVI)) return null;
  if (!compilate.has(id)) {
    try { compilate.set(id, compilaChiave(CHIAVI[id])); }
    catch (e) { throw new Error(`Chiave di correzione non valida per ${id}: ${(e as Error).message}`); }
  }
  return compilate.get(id);
}
// La chiave scritta a mano vince sul risultato letto dalla soluzione.
export const risultatoDi = (v?: Voce) => (v ? (chiaveDi(v.id) ?? risultatoDaEsercizio(v.body)) : null);

// { "limiti/4": { tipo: 'numero', v: 1.5 }, … } per una materia (id senza il nome della materia).
export function risultatiMateria(voci: Voce[], materia: string) {
  const out: Record<string, unknown> = {};
  for (const v of voci) {
    if (!v.id.startsWith(`${materia}/`)) continue;
    const r = risultatoDi(v);
    if (r) out[v.id.slice(materia.length + 1)] = r;
  }
  return out;
}
