// Informazioni ricavate dal materiale effettivo, senza generare descrizioni con un modello.
// Manteniamo brevi gli estratti: il confronto riceve i procedimenti, senza l'intero corso.
const compatto = (s: string) => s.replace(/<[^>]*>/g, ' ').replace(/\*\*|`/g, '').replace(/\s+/g, ' ').trim();
const breve = (s: string, n: number) => s.length <= n ? s : `${s.slice(0, n).replace(/\s+\S*$/, '')}…`;

export function dettagliScheda(corpo: string) {
  const metodi = [...new Set([...corpo.matchAll(/\*\*([^*\n]+)\*\*/g)]
    .map((r) => compatto(r[1])).filter((s) => s.length >= 4 && s.length <= 85 && !s.includes('$')))];
  const tracce = corpo.split(/^## Esercizio[^\n]*\n/gm).slice(1).map((s) => {
    // La prima parte di ogni esercizio contiene la traccia; i calcoli restano nella scheda collegata.
    const primaSpiegazione = s.split(/<div|^::/m)[0];
    const formule = [...primaSpiegazione.matchAll(/\$\$[\s\S]*?\$\$/g)];
    const inizio = formule.length > 1 ? primaSpiegazione.slice(0, formule[1].index) : primaSpiegazione;
    return breve(compatto(inizio), 150);
  }).filter(Boolean);
  return { metodi: metodi.slice(0, 10), tracce: tracce.slice(0, 4) };
}

export function dettagliTeoria(corpo: string, ancora: string) {
  // Il blocco termina prima della direttiva successiva: l'estratto contiene l'enunciato,
  // e la presenza di una dimostrazione si verifica nel blocco completo.
  const righe = corpo.split('\n');
  const i = righe.findIndex((s) => new RegExp(`^:{3,4}\\w+\\{#${ancora}(?:\\s|\\})`).test(s.trim()));
  if (i < 0) return { contenuto: '', dimostrazione: false };
  const chiusura = righe[i].trim().match(/^:+/)![0];
  let fine = i + 1;
  while (fine < righe.length && righe[fine].trim() !== chiusura) fine++;
  const blocco = righe.slice(i + 1, fine).join('\n');
  const enunciato = blocco.split(/^::/m)[0];
  return { contenuto: breve(compatto(enunciato), 220), dimostrazione: /^:::dimostrazione\b/m.test(blocco) };
}

// Titoli dei paragrafi della teoria (righe «## …») con la loro ancora: servono al riscontro per nome delle
// voci di un programma (worker/riscontro-programma.mjs). L'ancora segue la regola con cui Astro la dà ai
// titoli (minuscole, via la punteggiatura, spazi in trattini, un numero in coda ai titoli ripetuti).
export function sezioniTeoria(corpo: string) {
  const viste = new Map<string, number>();
  return [...corpo.matchAll(/^## +(.+?)\s*$/gm)].map((r) => {
    const titolo = compatto(r[1]).replace(/\$/g, '');
    const base = titolo.toLowerCase().replace(/[^\p{L}\p{M}\p{N}\s_-]/gu, '').replace(/ /g, '-');
    const n = viste.get(base) || 0;
    viste.set(base, n + 1);
    return { ancora: n ? `${base}-${n}` : base, titolo };
  }).filter((z) => z.titolo);
}
