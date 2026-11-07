// Riconoscimento conservativo: il titolo esplicito prevale; senza titolo
// servono più indizi distinti. Le materie con programmi sovrapposti restano
// sulla scelta dello studente quando il testo non consente di distinguerle.
const normalizza = (s) => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const TITOLI = {
  'analisi-1': /\banalisi\s+(?:matematica\s+)?(?:i|1|uno|prima)\b/,
  'analisi-2': /\banalisi\s+(?:matematica\s+)?(?:ii|2|due|seconda)\b/,
  'algebra-lineare': /\balgebra\s+lineare\b|\bgeometria\s+analitica\b/,
  'fisica-1': /\bfisica\s+(?:generale\s+)?(?:i|1|uno|prima)\b/,
  'fisica-2': /\bfisica\s+(?:generale\s+)?(?:ii|2|due|seconda)\b/,
  'matematica-generale': /\bmatematica\s+(?:generale|per\s+economia)\b/,
};
const INDIZI = {
  'analisi-1': [/\blimit[ei]\b|\\lim\b/, /\bderivat[ae]\b/, /\b(?:integral[ei]|primitiv[ae])\b|\\int\b/, /\bstudio (?:completo )?(?:di |della )?funzion/, /\bserie\s+(?:numeric|a segni|a termini)/],
  'analisi-2': [/\bderivat[ae]\s+parzial|\\partial\b/, /\bintegral[ei]\s+(?:doppi|tripli|curvilinei|superficiali)|\\(?:iint|iiint)\b/, /\bhessian|\bgradiente\b/, /\bsuperfici\b|\bcurve\s+parametriche/, /\bf\s*\(\s*x\s*,\s*y\b/, /\b(?:stokes|green)\b/],
  'algebra-lineare': [/\bmatric[ei]\b/, /\bdeterminant[ei]\b/, /\bautovalor|\bautovettor/, /\bdiagonalizza/, /\bsistem[ai]\s+linear/, /\b(?:nucleo|rango|base|basi)\b.*\b(?:matric|vettor|spazi)/],
  'fisica-1': [/\b(?:forza|forze)\b.*\b(?:newton|attrito|massa)\b|\bleggi?\s+di\s+newton/, /\benergia\s+(?:cinetica|potenziale|meccanica)/, /\b(?:velocita|accelerazione)\b/, /\b(?:quantita di moto|momento angolare|urto|urti)\b/, /\b(?:termodinamica|gas ideale|entropia)\b/],
  'fisica-2': [/\bcampo\s+elettric|\bpotenziale\s+elettric/, /\bcampo\s+magnetic|\binduzione\s+elettromagnetic/, /\b(?:condensator|capacita elettrica)/, /\b(?:circuit|resistenz|corrente elettrica)/, /\b(?:maxwell|faraday|ampere|coulomb)\b/],
  'matematica-generale': [/\b(?:costo|ricavo|profitto)\s+(?:marginale|totale)/, /\b(?:elasticita|domanda|offerta)\b.*\b(?:prezzo|funzione)/, /\b(?:interesse composto|capitalizzazione|rendita finanziaria)\b/],
};

export function riconosciMateriaCompito(testo, scelta, abilitate) {
  const t = normalizza(testo);
  // Non trasformare in esame universitario un documento di un altro percorso.
  if (/\b(?:tolc|liceo|scuola superiore|semestre filtro|test d.ingresso|concorso pubblico)\b/.test(t.slice(0, 500))) return { materia: scelta, fonte: null };
  if (/\b(?:analisi(?: matematica)?|fisica(?: generale)?)\s+(?:i|1)\s*(?:e|\/|-)\s*(?:ii|2)\b/.test(t.slice(0, 1200))) return { materia: scelta, fonte: null };
  const titoli = Object.entries(TITOLI).filter(([slug, re]) => abilitate.includes(slug) && re.test(t.slice(0, 1200)));
  if (titoli.length === 1) return { materia: titoli[0][0], fonte: 'titolo' };
  if (titoli.length > 1) return { materia: scelta, fonte: null };
  const punteggi = Object.entries(INDIZI).filter(([slug]) => abilitate.includes(slug))
    .map(([materia, re]) => ({ materia, punti: re.reduce((n, r) => n + Number(r.test(t)), 0) }))
    .sort((a, b) => b.punti - a.punti);
  const primo = punteggi[0], secondo = punteggi[1];
  if (!primo || primo.punti < 2 || primo.punti - (secondo?.punti || 0) < 2) return { materia: scelta, fonte: null };
  // Analisi 1 e Matematica generale condividono il calcolo in una variabile.
  if (primo.materia === 'analisi-1' && scelta === 'matematica-generale') return { materia: scelta, fonte: null };
  return { materia: primo.materia, fonte: 'argomenti' };
}
