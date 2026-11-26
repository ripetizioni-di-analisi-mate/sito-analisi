// Conto alla rovescia dell'offerta di 24 ore, come GIF animata dentro l'email (26/11/2026, richiesta di Carmine).
// Le email non eseguono codice: il programma di posta scarica /email/timer.gif?f=<scadenza in ms> quando l'email
// viene aperta, e riceve 60 fotogrammi da un secondo che partono dal tempo che manca in quel momento.
// Sfondo e cifre sono disegnati una volta da strumenti/timer-email.py (worker/timer-email-dati.json).
import DATI from './timer-email-dati.json' with { type: 'json' };

const FOTOGRAMMI = 60;
const MAX_ORE = 99;

function daRle(b64) {
  const bin = atob(b64), out = [];
  for (let i = 0; i < bin.length; i += 2) for (let n = bin.charCodeAt(i + 1); n > 0; n--) out.push(bin.charCodeAt(i));
  return Uint8Array.from(out);
}
let grafica = null;
const leggiGrafica = () => (grafica ??= { sfondo: daRle(DATI.sfondo), cifre: DATI.cifre.map(daRle) });

// Fotogramma intero: sfondo con le sei cifre hh mm ss.
function fotogramma(secondi) {
  const { sfondo, cifre } = leggiGrafica();
  const img = sfondo.slice();
  const ore = Math.min(MAX_ORE, Math.floor(secondi / 3600));
  const testo = [ore, Math.floor(secondi / 60) % 60, secondi % 60].map((n) => String(n).padStart(2, '0')).join('');
  [...testo].forEach((c, i) => {
    const t = cifre[Number(c)], [x0, y0] = DATI.posti[i];
    for (let y = 0; y < DATI.ch; y++) img.set(t.subarray(y * DATI.cw, (y + 1) * DATI.cw), (y0 + y) * DATI.w + x0);
  });
  return img;
}

// Compressione LZW del formato GIF (stesso schema di omggif), con i blocchi da 255 byte.
function lzw(indici, minimo) {
  const clear = 1 << minimo, fine = clear + 1, out = [];
  let dimensione = minimo + 1, prossimo = fine + 1, tavola = new Map(), acc = 0, bit = 0;
  const scrivi = (codice) => {
    acc |= codice << bit; bit += dimensione;
    while (bit >= 8) { out.push(acc & 255); acc >>>= 8; bit -= 8; }
  };
  scrivi(clear);
  let prefisso = indici[0];
  for (let i = 1; i < indici.length; i++) {
    const k = indici[i], chiave = prefisso * 256 + k, trovato = tavola.get(chiave);
    if (trovato !== undefined) { prefisso = trovato; continue; }
    scrivi(prefisso);
    if (prossimo === 4096) {
      scrivi(clear);
      prossimo = fine + 1; dimensione = minimo + 1; tavola = new Map();
    } else {
      if (prossimo >= (1 << dimensione)) dimensione++;
      tavola.set(chiave, prossimo++);
    }
    prefisso = k;
  }
  scrivi(prefisso); scrivi(fine);
  if (bit > 0) out.push(acc & 255);
  const blocchi = [minimo];
  for (let i = 0; i < out.length; i += 255) {
    const pezzo = out.slice(i, i + 255);
    blocchi.push(pezzo.length, ...pezzo);
  }
  blocchi.push(0);
  return blocchi;
}

const u16 = (n) => [n & 255, (n >> 8) & 255];

export function gifTimer(scadenza, ora = Date.now()) {
  const restano = Math.max(0, Math.floor((scadenza - ora) / 1000));
  const n = Math.max(1, Math.min(FOTOGRAMMI, restano + 1));
  const { w, h } = DATI;
  const byte = [...new TextEncoder().encode('GIF89a'), ...u16(w), ...u16(h), 0xf4, 0, 0, ...DATI.tavolozza];
  let prima = null;
  for (let f = 0; f < n; f++) {
    const img = fotogramma(Math.max(0, restano - f));
    // Dal secondo fotogramma in poi si scrive solo il rettangolo che cambia (le cifre dei secondi, a volte i minuti).
    let x0 = 0, y0 = 0, x1 = w - 1, y1 = h - 1;
    if (prima) {
      x0 = w; y0 = h; x1 = -1; y1 = -1;
      for (let i = 0; i < img.length; i++) if (img[i] !== prima[i]) {
        const x = i % w, y = (i - x) / w;
        if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y;
      }
      if (x1 < 0) { x0 = x1 = y0 = y1 = 0; }
    }
    const rw = x1 - x0 + 1, rh = y1 - y0 + 1, parte = new Uint8Array(rw * rh);
    for (let y = 0; y < rh; y++) parte.set(img.subarray((y0 + y) * w + x0, (y0 + y) * w + x0 + rw), y * rw);
    // Ultimo fotogramma: resta fermo (la GIF non ricomincia).
    byte.push(0x21, 0xf9, 4, 1 << 2, ...u16(f === n - 1 ? 0 : 100), 0, 0);
    byte.push(0x2c, ...u16(x0), ...u16(y0), ...u16(rw), ...u16(rh), 0, ...lzw(parte, 5));
    prima = img;
  }
  byte.push(0x3b);
  return Uint8Array.from(byte);
}

export function rispostaTimer(url) {
  const f = Number(url.searchParams.get('f'));
  const ora = Date.now();
  // Scadenze plausibili: da adesso a 8 giorni (oltre, o non valide, si mostra 00 00 00).
  const scadenza = Number.isFinite(f) && f > ora - 86400000 && f < ora + 8 * 86400000 ? f : ora;
  return new Response(gifTimer(scadenza, ora), { headers: {
    'content-type': 'image/gif', 'cache-control': 'no-store, no-cache, must-revalidate, max-age=0',
    expires: '0', 'x-robots-tag': 'noindex',
  } });
}
