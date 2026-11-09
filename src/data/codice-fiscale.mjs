// D.M. 23 dicembre 1976, artt. 3–7. Caratteri diacritici secondo la tabella 40 ANPR.
const MESE = 'ABCDEHLMPRST';
const DISPARI = [1, 0, 5, 7, 9, 13, 15, 17, 19, 21, 2, 4, 18, 20, 11, 3, 6, 8, 12, 14, 16, 10, 22, 25, 24, 23];
const SEGNI_ANPR = {
  A: 'ÁÀÂĂĀÃĄ', AE: 'ÄÆ', AA: 'Å', C: 'ĆĊĈČÇ', D: 'ĎĐÐƉ', E: 'ÉÈĖÊËĚĔĒĘ',
  G: 'ĠĜĞĢ', H: 'ĤĦ', I: 'ÍÌİÎÏĬĪĨĮı', IJ: 'Ĳ', J: 'Ĵ', K: 'Ķ', L: 'ĹĿĽĻŁ',
  N: 'ŃŇÑŅŊŉ', O: 'ÓÒÔŎŌÕŐ', OE: 'ÖØŒ', R: 'ŔŘŖ', S: 'ŚŜŠŞ', SS: 'ẞß', T: 'ŤŢŦ',
  TH: 'Þ', U: 'ÚÙÛŬŪŨŮŲŰ', UE: 'Ü', W: 'Ŵ', Y: 'ÝŶŸ', Z: 'ŹŻŽ',
};
const TRASLITTERAZIONI = new Map();
for (const [ascii, segni] of Object.entries(SEGNI_ANPR)) {
  for (const segno of segni) {
    TRASLITTERAZIONI.set(segno, ascii);
    TRASLITTERAZIONI.set(segno.toLowerCase(), ascii);
  }
}

export function carattereControlloCF(base) {
  let somma = 0;
  for (let i = 0; i < 15; i++) {
    const codice = base.charCodeAt(i);
    const n = codice >= 65 ? codice - 65 : codice - 48;
    somma += i % 2 === 0 ? DISPARI[n] : n;
  }
  return String.fromCharCode(65 + somma % 26);
}

function terna(valore, nome) {
  if (typeof valore !== 'string' || valore.length > 100) return null;
  const testo = valore.normalize('NFC').replace(/[\s'’ʼ‐‑-]/gu, '');
  let lettere = '';
  for (const lettera of testo) {
    const ascii = /^[a-zA-Z]$/.test(lettera) ? lettera.toUpperCase() : TRASLITTERAZIONI.get(lettera);
    if (!ascii) return null;
    lettere += ascii;
  }
  if (!lettere) return null;
  const consonanti = lettere.replace(/[AEIOU]/g, '');
  if (nome && consonanti.length >= 4) return consonanti[0] + consonanti[2] + consonanti[3];
  const vocali = lettere.replace(/[^AEIOU]/g, '');
  return (consonanti + vocali).padEnd(3, 'X').slice(0, 3);
}

// Calcola il codice ordinario dai dati anagrafici. Le omocodie sono attribuite dall'Agenzia.
export function calcolaCodiceFiscale(dati, oggi = new Date()) {
  const { nome, cognome, dataNascita, sesso, catastale } = dati ?? {};
  if (typeof dataNascita !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(dataNascita) ||
      !['M', 'F'].includes(sesso) || typeof catastale !== 'string' || !/^[A-Z]\d{3}$/.test(catastale)) return null;
  const [anno, mese, giorno] = dataNascita.split('-').map(Number);
  const data = new Date(dataNascita + 'T00:00:00');
  if (anno < 1 || data.getFullYear() !== anno || data.getMonth() + 1 !== mese ||
      data.getDate() !== giorno || data > oggi) return null;
  const c = terna(cognome, false);
  const n = terna(nome, true);
  if (!c || !n) return null;
  const giornoCodice = String(giorno + (sesso === 'F' ? 40 : 0)).padStart(2, '0');
  const base = c + n + dataNascita.slice(2, 4) + MESE[mese - 1] + giornoCodice + catastale;
  return base + carattereControlloCF(base);
}
