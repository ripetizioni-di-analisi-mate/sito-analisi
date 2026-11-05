// Funzioni della ricerca eseguibili anche senza il DOM, per verificare i casi
// di corrispondenza, i refusi e i titoli provenienti dall'indice.
export const normalizza = (testo) => String(testo).toLowerCase().normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '').replace(/[’']/g, '').replace(/[^\p{L}\p{N}]+/gu, ' ').trim();

export const radice = (parola) => parola.length >= 5 ? parola.replace(/[aeiou]$/, '') : parola;
export const paroleQuery = (testo) => normalizza(testo).split(/\s+/)
  .filter((parola) => parola.length > 1 || /\d/.test(parola));

/** Accetta soltanto collegamenti relativi al sito, anche se l'indice fosse alterato. */
export function indirizzoSicuro(href) {
  return typeof href === 'string' && /^\/(?!\/)/.test(href) && !/[\\\u0000-\u0020\u007f]/.test(href);
}

/** Riconosce la materia dal percorso, senza cambiare il formato dell'indice pubblico. */
export function materieVoce(voce, video = {}, collegamenti = {}) {
  const collegate = collegamenti[`${voce.h}\n${voce.t}`] || collegamenti[voce.h];
  if (collegate) return collegate;
  const parti = voce.h.split(/[?#]/, 1)[0].split('/').filter(Boolean);
  if (parti[0] === 'en') parti.shift();
  return parti[0] === 'videocorsi' ? video[parti[1]] || [] : [parti[0] || ''];
}

export function preparaIndice(voci, video = {}, collegamenti = {}) {
  if (!Array.isArray(voci) || voci.some((v) => !v ||
    !['t', 's', 'm', 'h', 'p', 'c'].every((chiave) => typeof v[chiave] === 'string'))) {
    throw new TypeError('Indice di ricerca non valido');
  }
  return voci.filter((v) => indirizzoSicuro(v.h)).map((v) => ({
    voce: v,
    titolo: normalizza(v.t),
    testo: normalizza(`${v.t} ${v.s} ${v.m} ${v.p}`),
    lemmiTitolo: new Set(paroleQuery(v.t).map(radice)),
    lemmiContesto: new Set(paroleQuery(`${v.s} ${v.m}`).map(radice)),
    lemmiTesto: new Set(paroleQuery(`${v.t} ${v.s} ${v.m} ${v.p}`).map(radice)),
    materie: materieVoce(v, video, collegamenti),
  }));
}

export function filtraIndice(indice, { materia = '', tipo = '' } = {}) {
  return indice.filter((riga) => (!materia || riga.materie.includes(materia)) && (!tipo || riga.voce.c === tipo));
}

export function cercaVoci(indice, query, filtri = {}) {
  const parole = paroleQuery(query).map(radice);
  // Ogni criterio prevale su tutti quelli successivi: prima parole intere o
  // lemmi, poi titolo, contesto visibile e infine sottostringhe nel titolo.
  // «Limiti» resta quindi davanti a «intervalli illimitati», mantenendo questi
  // ultimi tra i risultati quando la corrispondenza è soltanto parziale.
  const scala = parole.length + 1;
  return filtraIndice(indice, filtri).map((riga, ordine) => ({
    ...riga,
    ordine,
    punti: parole.reduce((n, p) => n
      + (riga.lemmiTesto.has(p) ? scala ** 3 : 0)
      + (riga.lemmiTitolo.has(p) ? scala ** 2 : 0)
      + (riga.lemmiContesto.has(p) ? scala : 0)
      + (riga.titolo.includes(p) ? 1 : 0), 0),
  })).filter((riga) => parole.every((p) => riga.testo.includes(p)))
    .sort((a, b) => b.punti - a.punti || a.ordine - b.ordine);
}

// Distanza di Damerau-Levenshtein: conta anche lo scambio di due lettere vicine.
export function distanzaRefuso(a, b, massimo = 2) {
  if (Math.abs(a.length - b.length) > massimo) return massimo + 1;
  let prima = null;
  let precedente = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const riga = [i];
    for (let j = 1; j <= b.length; j++) {
      riga[j] = Math.min(riga[j - 1] + 1, precedente[j] + 1, precedente[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      if (prima && i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        riga[j] = Math.min(riga[j], prima[j - 2] + 1);
      }
    }
    if (Math.min(...riga) > massimo) return massimo + 1;
    prima = precedente;
    precedente = riga;
  }
  return precedente[b.length];
}

export function vocabolario(indice) {
  const parole = new Map();
  for (const riga of indice) {
    // Le parole dei titoli hanno precedenza su quelle aggiunte per la ricerca.
    for (const [testo, peso] of [[`${riga.voce.t} ${riga.voce.m}`, 3], [riga.voce.p, 1]]) {
      for (const parola of new Set(paroleQuery(testo))) {
        if (/^\p{L}{4,24}$/u.test(parola)) parole.set(parola, (parole.get(parola) || 0) + peso);
      }
    }
  }
  return parole;
}

/** Propone una query soltanto quando la correzione trova risultati nei filtri scelti. */
export function suggerisciQuery(indice, query, filtri = {}, dizionario = vocabolario(indice)) {
  const parole = paroleQuery(query);
  if (parole.length === 0 || parole.length > 8 || cercaVoci(indice, query, filtri).length) return null;
  let cambiata = false;
  const corrette = parole.map((parola) => {
    if (parola.length < 4 || parola.length > 24 || !/^\p{L}+$/u.test(parola)
      || indice.some((riga) => riga.testo.includes(radice(parola)))) return parola;
    const massimo = parola.length >= 7 ? 2 : 1;
    let migliore = parola, distanza = massimo + 1, peso = -1;
    for (const [candidata, frequenza] of dizionario) {
      if (Math.abs(candidata.length - parola.length) > massimo) continue;
      const d = distanzaRefuso(parola, candidata, massimo);
      if (d <= massimo && (d < distanza || d === distanza && frequenza > peso)) {
        migliore = candidata; distanza = d; peso = frequenza;
      }
    }
    cambiata ||= migliore !== parola;
    return migliore;
  });
  const suggerimento = corrette.join(' ');
  return cambiata && cercaVoci(indice, suggerimento, filtri).length ? suggerimento : null;
}

const dollaroEscapato = (testo, posizione) => {
  let barre = 0;
  while (posizione > 0 && testo[--posizione] === '\\') barre++;
  return barre % 2 === 1;
};

/** Separa il LaTeX dal testo. Le parti testuali restano sempre nodi di testo. */
export function partiTitolo(testo) {
  const parti = [];
  let inizio = 0, i = 0;
  while (i < testo.length) {
    if (testo[i] !== '$' || dollaroEscapato(testo, i)) { i++; continue; }
    const delimitatore = testo[i + 1] === '$' ? '$$' : '$';
    let fine = i + delimitatore.length;
    while (fine < testo.length) {
      if (testo.startsWith(delimitatore, fine) && !dollaroEscapato(testo, fine)) break;
      fine++;
    }
    if (fine >= testo.length || fine === i + delimitatore.length) { i += delimitatore.length; continue; }
    if (i > inizio) parti.push({ tipo: 'testo', testo: testo.slice(inizio, i) });
    parti.push({ tipo: 'formula', testo: testo.slice(i + delimitatore.length, fine) });
    i = fine + delimitatore.length;
    inizio = i;
  }
  if (inizio < testo.length) parti.push({ tipo: 'testo', testo: testo.slice(inizio) });
  return parti;
}

export function partiEvidenziate(testo, query) {
  const parole = paroleQuery(query).map(radice);
  return testo.split(/([\p{L}\p{N}]+(?:[’'][\p{L}\p{N}]+)*)/u).filter(Boolean)
    .map((parte) => ({ testo: parte, evidenziata: parole.some((p) => normalizza(parte).includes(p)) }));
}
