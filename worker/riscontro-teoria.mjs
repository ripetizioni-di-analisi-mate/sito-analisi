// Riscontro diretto dei nomi nel catalogo: un codice omesso o confuso dal modello
// non deve trasformare un teorema presente in un semplice riscontro di argomento.
const normalizza = (s) => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
  .replace(/\bteoremi\b/g, 'teorema').replace(/\bformule\b/g, 'formula')
  .replace(/\bcriteri\b/g, 'criterio').replace(/\bprincipi\b/g, 'principio')
  .replace(/[^a-z0-9]+/g, ' ')
  .replace(/\b(?:il|lo|la|i|gli|le|un|una|uno|di|del|dello|della|dei|degli|delle|dell|de|l|d|a|al|alla|allo|agli|alle|e|ed|con)\b/g, ' ')
  .replace(/\s+/g, ' ').trim()
  .replace(/\bfondamentale calcolo integrale\b/g, 'fondamentale calcolo');
const senzaTipo = (s) => s.replace(/^(?:teorema|formula|criterio|principio|definizione|proposizione|lemma|corollario) /, '');
function nomiRichiesti(s) {
  const base = normalizza(s)
    .replace(/\b(?:enunciare|enuncia|enunci|dimostrare|dimostra|dimostri|scrivere|scrivi|riportare|riporta|fornire|fornisci)\b/g, ' ')
    .replace(/\s+/g, ' ').trim();
  // Prima si prova il nome intatto: «Equivalenza degli enunciati» è un titolo,
  // mentre «enunciato e dimostrazione» prima o dopo il nome descrive la richiesta.
  const senzaIstruzioni = base
    .replace(/^(?:(?:enunciati? dimostrazioni?|enunciato|dimostrazione|ipotesi|tesi) )+/, '')
    .replace(/(?: (?:enunciati? dimostrazioni?|enunciato|dimostrazione|ipotesi|tesi))+$/, '');
  return [...new Set([base, senzaIstruzioni])];
}

const cacheNomi = new WeakMap();
function indiceNomi(voci) {
  if (cacheNomi.has(voci)) return cacheNomi.get(voci);
  const interi = new Map(), brevi = new Map();
  for (const [codice, voce] of Object.entries(voci)) {
    const nome = normalizza(voce.titolo), breve = senzaTipo(nome);
    for (const [indice, chiave] of [[interi, nome], [brevi, breve]]) {
      if (!chiave) continue;
      if (!indice.has(chiave)) indice.set(chiave, []);
      indice.get(chiave).push({ codice, voce });
    }
  }
  const indice = { interi, brevi };
  cacheNomi.set(voci, indice);
  return indice;
}

// Si richiede un nome completo e univoco, non una somiglianza di parole.
// Se lo stesso nome è presente in più capitoli, l'argomento già riconosciuto può disambiguare.
export function trovaVoceTeoria(voci, richiesta, argomento = null) {
  const indice = indiceNomi(voci);
  for (const nome of nomiRichiesti(richiesta)) {
    let candidate = indice.interi.get(nome) || indice.brevi.get(senzaTipo(nome)) || [];
    if (candidate.length > 1 && argomento) candidate = candidate.filter((x) => x.voce.argomento === argomento);
    if (candidate.length === 1) return candidate[0];
    if (candidate.length > 1) return null;
  }
  return null;
}

// I riferimenti con il nome esplicitamente presente nel compito vengono richiamati vicino al testo,
// oltre a restare nel catalogo completo. Non costituiscono un giudizio automatico di copertura.
export function riferimentiNominati(voci, testo) {
  const esame = ` ${normalizza(testo)} `;
  return Object.entries(voci).filter(([, v]) => {
    const nome = normalizza(v.titolo);
    return nome.split(' ').length >= 2 && esame.includes(` ${nome} `);
  }).slice(0, 12).map(([codice, v]) => `${codice} ${v.titolo}${v.dimostrazione ? ' [enunciato e dimostrazione presenti]' : ' [verificare la richiesta sulla base del contenuto]'}: ${v.contenuto || ''}`).join('\n');
}
