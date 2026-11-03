// Medaglione di una lega: cerchio con l'iniziale del matematico e tante tacche quante la posizione della lega.
// Colori dal più chiaro (Pitagora) al più intenso (Riemann), nei toni del sito.
export const COLORI_LEGA = ['#b9a27e', '#a8936b', '#8f9a6a', '#6f9a7c', '#4f8f84', '#3f7f8c', '#3d6a8f', '#4f5c93', '#5f4f8f', '#6b3f7f'];

export function medagliaLega(i: number, nome: string, id = 'ml') {
  const c = COLORI_LEGA[Math.max(0, Math.min(9, i))];
  const tacche = Array.from({ length: i + 1 }, (_, k) => {
    const a = (-90 + (k - i / 2) * 14) * (Math.PI / 180);
    const x = 32 + 27.5 * Math.cos(a), y = 32 + 27.5 * Math.sin(a);
    return `<circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="1.6" fill="#fff" opacity="0.9"/>`;
  }).join('');
  return `<svg viewBox="0 0 64 64" role="img" aria-label="Lega ${nome}"><defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c}" stop-opacity="0.85"/><stop offset="1" stop-color="${c}"/></linearGradient></defs>`
    + `<circle cx="32" cy="32" r="31" fill="url(#${id})"/><circle cx="32" cy="32" r="23" fill="#faf8f2"/><circle cx="32" cy="32" r="23" fill="none" stroke="${c}" stroke-width="1.2" opacity="0.6"/>`
    + `${tacche}<text x="32" y="40.5" text-anchor="middle" font-family="'Source Serif 4', Georgia, serif" font-size="23" font-weight="600" fill="${c}">${nome[0]}</text></svg>`;
}
