// Disegni e testi delle quattro tappe della pagina Accedi («Sali scorrendo», scelta di Carmine del 19/11/2026).
// Tratto verde del sito, fondo sabbia, un solo accento ocra.
const T = '#214f50', TL = '#dbe7e4', S = '#f1ece2', O = '#d99a2b', OL = '#f7e6bd', G = '#cdd5d1', W = '#fff';
const svg = (dentro) => `<svg class="sl-disegno" viewBox="0 0 440 300" aria-hidden="true" fill="none" stroke-linecap="round" stroke-linejoin="round">${dentro}</svg>`;
const riga = (x, y, w, h = 7, c = G) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${c}"/>`;
const stella = (x, y, r, c = O) => `<path d="M${x},${y - r} L${x + r * 0.28},${y - r * 0.28} L${x + r},${y} L${x + r * 0.28},${y + r * 0.28} L${x},${y + r} L${x - r * 0.28},${y + r * 0.28} L${x - r},${y} L${x - r * 0.28},${y - r * 0.28}Z" fill="${c}"/>`;
const d1 = svg(`
  <ellipse cx="220" cy="156" rx="186" ry="124" fill="${S}"/>
  <g transform="rotate(-4 205 152)">
    <rect x="96" y="44" width="226" height="212" rx="18" fill="${W}" stroke="${T}" stroke-width="1.8"/>
    ${riga(120, 68, 62, 7)}${riga(120, 88, 160, 11, T)}
    ${[0, 1, 2, 3].map((i) => { const y = 118 + i * 32; return i === 0
      ? `<rect x="118" y="${y}" width="182" height="24" rx="12" fill="${TL}" stroke="${T}" stroke-width="1.8"/><circle cx="132" cy="${y + 12}" r="7" fill="${T}"/><path d="M128.6,${y + 12.2} l2.4,2.4 l4.4,-4.8" stroke="${W}" stroke-width="1.8"/>${riga(148, y + 8.5, 86, 7, T)}`
      : `<rect x="118" y="${y}" width="182" height="24" rx="12" fill="${W}" stroke="${G}" stroke-width="1.5"/><circle cx="132" cy="${y + 12}" r="6" stroke="${G}" stroke-width="1.5"/>${riga(148, y + 8.5, [70, 96, 58][i - 1], 7)}`; }).join('')}
  </g>
  <g><rect x="336" y="26" width="14" height="10" rx="3" fill="${T}"/><circle cx="343" cy="76" r="38" fill="${W}" stroke="${T}" stroke-width="1.8"/><path d="M343,76 L343,46 A30,30 0 0 1 369,91 Z" fill="${OL}"/><path d="M343,76 L343,50 M343,76 L361,87" stroke="${T}" stroke-width="2.4"/><circle cx="343" cy="76" r="3.4" fill="${T}"/></g>
  <g><circle cx="338" cy="226" r="34" fill="${T}"/><text x="338" y="235" text-anchor="middle" class="dz-n" fill="${W}">+10</text></g>
  ${stella(384, 178, 9)}${stella(288, 268, 6)}${stella(70, 84, 7, T)}`);
const libro = (x, y) => `<g transform="translate(${x} ${y})"><path d="M0,4 C8,0 16,0 22,4 C28,0 36,0 44,4 V32 C36,28 28,28 22,32 C16,28 8,28 0,32 Z" fill="${W}" stroke="${T}" stroke-width="1.6"/><path d="M22,4 V32" stroke="${T}" stroke-width="1.6"/><path d="M6,12 h10 M6,18 h10 M28,12 h10 M28,18 h10" stroke="${G}" stroke-width="2"/></g>`;
const d2 = svg(`
  <ellipse cx="220" cy="156" rx="186" ry="124" fill="${S}"/>
  <path d="M84,232 C150,236 150,170 214,166 S 290,96 356,88" stroke="${T}" stroke-width="2.6" stroke-dasharray="1.5 9"/>
  ${libro(62, 168)}${libro(192, 104)}
  <g><circle cx="84" cy="232" r="20" fill="${T}"/><text x="84" y="239" text-anchor="middle" class="dz-p" fill="${W}">1</text></g>
  <g><circle cx="214" cy="166" r="20" fill="${W}" stroke="${T}" stroke-width="1.8"/><text x="214" y="173" text-anchor="middle" class="dz-p" fill="${T}">2</text></g>
  <g><circle cx="356" cy="88" r="20" fill="${W}" stroke="${T}" stroke-width="1.8"/><text x="356" y="95" text-anchor="middle" class="dz-p" fill="${T}">3</text></g>
  <g><path d="M356,66 V28" stroke="${T}" stroke-width="2"/><path d="M356,29 h34 l-8,11 l8,11 h-34 Z" fill="${O}"/></g>
  <g transform="translate(286 196)"><circle cx="0" cy="0" r="30" fill="${W}" stroke="${T}" stroke-width="1.8"/><circle cx="0" cy="0" r="19" stroke="${T}" stroke-width="1.6"/><circle cx="0" cy="0" r="8" fill="${O}"/><path d="M0,-38 v10 M0,28 v10 M-38,0 h10 M28,0 h10" stroke="${T}" stroke-width="1.8"/></g>
  ${stella(128, 110, 7)}${stella(398, 150, 6, T)}`);
const d3 = svg(`
  <ellipse cx="220" cy="156" rx="186" ry="124" fill="${S}"/>
  <g transform="rotate(-3 150 150)">
    <rect x="70" y="56" width="176" height="186" rx="16" fill="${W}" stroke="${T}" stroke-width="1.8"/>
    <path d="M70,98 V72 a16,16 0 0 1 16,-16 h144 a16,16 0 0 1 16,16 V98 Z" fill="${T}"/>
    <rect x="108" y="44" width="8" height="24" rx="4" fill="${W}" stroke="${T}" stroke-width="1.8"/><rect x="200" y="44" width="8" height="24" rx="4" fill="${W}" stroke="${T}" stroke-width="1.8"/>
    ${[0, 1, 2, 3].map((r) => [0, 1, 2, 3, 4].map((c) => r === 2 && c === 3 ? `<circle cx="${96 + c * 31}" cy="${124 + r * 30}" r="13" fill="${OL}" stroke="${O}" stroke-width="2.4"/><circle cx="${96 + c * 31}" cy="${124 + r * 30}" r="4.5" fill="${O}"/>` : `<circle cx="${96 + c * 31}" cy="${124 + r * 30}" r="5" fill="${r < 2 || (r === 2 && c < 3) ? T : G}" opacity="${r < 2 || (r === 2 && c < 3) ? 0.55 : 1}"/>`).join('')).join('')}
  </g>
  <g transform="rotate(4 310 180)">
    <rect x="234" y="104" width="150" height="150" rx="16" fill="${W}" stroke="${T}" stroke-width="1.8"/>
    ${[0, 1, 2].map((i) => { const y = 136 + i * 42; return (i < 2
      ? `<circle cx="262" cy="${y}" r="12" fill="${T}"/><path d="M256.4,${y + 0.4} l3.8,3.8 l7,-7.6" stroke="${W}" stroke-width="2.2"/>`
      : `<circle cx="262" cy="${y}" r="11" fill="${W}" stroke="${T}" stroke-width="1.8"/><path d="M262,${y - 11} a11,11 0 0 1 0,22 Z" fill="${TL}" stroke="${T}" stroke-width="1.8"/>`) + riga(286, y - 9, 74, 8, i < 2 ? T : G) + riga(286, y + 5, 48, 6); }).join('')}
  </g>
  ${stella(396, 84, 8)}${stella(52, 208, 6, T)}`);
const persona = (x, y, c) => `<g transform="translate(${x} ${y})"><circle cx="0" cy="-24" r="13" fill="${c}" stroke="${T}" stroke-width="1.8"/><path d="M-21,6 a21,20 0 0 1 42,0 Z" fill="${c}" stroke="${T}" stroke-width="1.8"/></g>`;
const d4 = svg(`
  <ellipse cx="220" cy="156" rx="186" ry="124" fill="${S}"/>
  <path d="M88,252 h264" stroke="${T}" stroke-width="1.8"/>
  <rect x="100" y="176" width="80" height="76" rx="6" fill="${W}" stroke="${T}" stroke-width="1.8"/><text x="140" y="224" text-anchor="middle" class="dz-p" fill="${T}">2</text>
  <rect x="180" y="132" width="80" height="120" rx="6" fill="${TL}" stroke="${T}" stroke-width="1.8"/><text x="220" y="202" text-anchor="middle" class="dz-n" fill="${T}">1</text>
  <rect x="260" y="200" width="80" height="52" rx="6" fill="${W}" stroke="${T}" stroke-width="1.8"/><text x="300" y="236" text-anchor="middle" class="dz-p" fill="${T}">3</text>
  ${persona(140, 166, W)}${persona(220, 122, OL)}${persona(300, 190, W)}
  <path d="M204,62 l6,-16 l10,12 l10,-12 l6,16 Z" fill="${O}" stroke="${T}" stroke-width="1.6"/>
  ${stella(92, 104, 8)}${stella(352, 96, 7, T)}${stella(376, 150, 5)}`);
export const SCENE = [
  ['Rispondi', 'Rispondi alle domande', 'Domande brevi a quattro risposte, capitolo per capitolo. Ogni risposta giusta vale 10 punti.', 'Rispondi a «Qual è la derivata di x²?» entro due minuti e prendi 10 punti.', d1],
  ['Scopri le lacune', 'Scopri da dove ripartire', 'Un test di una dozzina di domande trova i punti deboli di un capitolo e li mette in ordine.', 'Sbagli due domande sui limiti notevoli e il sito ti indica il paragrafo e l’esercizio svolto da rivedere.', d2],
  ['Segui i progressi', 'Vedi a che punto sei', 'Per ogni capitolo sai quanto hai fatto e quanto manca. Con la data d’esame il sito conta i giorni.', '«Derivate: a metà. Mancano 48 giorni all’esame.»', d3],
  ['Sfida gli altri', 'Sfida gli altri studenti', 'Una classifica nuova ogni settimana e i duelli: due studenti, le stesse dieci domande.', 'Questa settimana sei terzo su trenta: con venti punti in più passi secondo.', d4],
];
