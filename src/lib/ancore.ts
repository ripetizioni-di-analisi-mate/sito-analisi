// Mappa ancora → titolo dei blocchi di una pagina di teoria, per i collegamenti dagli esercizi.
export function titoliAncore(body: string | undefined): Record<string, string> {
  const out: Record<string, string> = {};
  for (const m of (body ?? '').matchAll(/:::(\w+)\{#([\w-]+)\s+titolo="([^"]+)"/g)) out[m[2]] = m[3];
  return out;
}
