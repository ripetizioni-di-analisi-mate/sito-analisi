// Esercizi da fare con la verifica della risposta: il risultato si ricava dalla soluzione (worker/valuta.mjs).
import { risultatoDaSoluzione } from '../../worker/valuta.mjs';

type Voce = { id: string; body?: string };
const soluzione = (body = '') => body.match(/:::soluzione\s*\n([\s\S]*?)\n:::/)?.[1] ?? '';
export const risultatoDi = (v?: Voce) => (v ? risultatoDaSoluzione(soluzione(v.body)) : null);

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
