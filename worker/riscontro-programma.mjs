// Riscontro per nome fra una voce di programma e il materiale del sito, senza modelli.
//
// Il modello che abbina le voci al catalogo a volte lascia senza riferimento un contenuto che nel sito c'è
// (18/11/2026: «teorema di unicità del limite», «forme indeterminate», «massimo e minimo»). Qui si cerca il
// nome della voce fra i titoli dei riquadri della teoria, dei paragrafi e delle schede svolte: se il nome
// c'è, la voce è coperta anche quando il modello non l'ha trovata. Il riscontro alza soltanto un esito:
// non toglie mai un riferimento indicato dal modello, e ogni voce coperta porta il link al contenuto.
const piano = (s) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

const VUOTE = new Set(['il', 'lo', 'la', 'i', 'gli', 'le', 'un', 'una', 'uno', 'di', 'del', 'dello', 'della', 'dei', 'degli', 'delle', 'dell', 'de', 'l', 'd', 'a', 'al', 'alla', 'allo', 'ai', 'agli', 'alle', 'all', 'da', 'dal', 'dalla', 'dai', 'in', 'nel', 'nella', 'nei', 'nelle', 'nell', 'con', 'su', 'sul', 'sulla', 'sui', 'sulle', 'per', 'tra', 'fra', 'e', 'ed', 'o', 'od', 'che', 'come', 'loro', 'sue', 'suoi', 'sua', 'suo', 'non', 'piu', 'cenni', 'vari', 'varie', 'alcuni', 'alcune', 'relativi', 'relative', 'the', 'of', 'and']);
// Parole che da sole non individuano un contenuto: contano soltanto insieme alle altre.
const GENERICHE = new Set(['teorem', 'definizion', 'formul', 'criter', 'princip', 'legg', 'regol', 'metod', 'propriet', 'operazion', 'calcol', 'esemp', 'eserciz', 'applicazion', 'stud', 'concett', 'nozion', 'introduzion', 'richiam', 'conseguent', 'enunciat', 'dimostrazion', 'significat', 'interpretazion', 'geometr', 'prim', 'second', 'general', 'caratterizzazion', 'classificazion', 'determinazion', 'rappresentazion', 'tabell', 'schem', 'cas', 'tip', 'spec', 'form', 'element', 'elementar', 'fondamental', 'principal', 'semplic', 'problem', 'uso', 'us', 'var', 'due', 'tre', 'real', 'funzion', 'numer', 'punt', 'insiem', 'sistem', 'grandezz', 'fis', 'bas', 'mot', 'forz', 'camp', 'equazion', 'integral', 'derivat', 'limit', 'ser', 'matric', 'vettor', 'spaz', 'variabil', 'distribuzion', 'energ', 'corrent', 'circuit', 'teor', 'local', 'notazion', 'relazion', 'legam', 'effett', 'condizion', 'valor', 'ordin', 'tecn', 'risoluzion', 'struttur', 'modell', 'analis', 'different']);
// Grafie e nomi diversi dello stesso contenuto.
const GRAFIE = [
  [/\bm(?:a)?c\s*-?\s*laurin\b/g, 'maclaurin'], [/\b(?:de\s+)?l\s*['’]?\s*h[oô](?:s)?pital\b/g, 'hopital'], [/\bn\s*-?\s*(?:esim[aeio]|m[aeio])\b/g, 'nesime'], [/\bennesim[aeio]\b/g, 'nesime'],
  [/\bo\s*-?\s*piccol[oi]\b/g, 'opiccolo'], [/\b(?:due\s+)?carabinieri\b/g, 'confronto'], [/\bsandwich\b/g, 'confronto'], [/\bvalor\b/g, 'valore'], [/\bfratti\s+semplici\b/g, 'funzioni razionali'],
  [/\brouche\s*-?\s*capelli\b/g, 'rouchecapelli'], [/\bgram\s*-?\s*schmidt\b/g, 'gramschmidt'], [/\bhuygens\s*-?\s*steiner\b/g, 'huygenssteiner'], [/\bfaraday(?:\s*-?\s*neumann)?(?:\s*-?\s*lenz)?\b/g, 'faraday'], [/\bbiot\s*-?\s*savart\b/g, 'biotsavart'],
  [/\bgauss\s*-?\s*green\b/g, 'green'], [/\blimiti\s+fondamentali\b/g, 'limiti notevoli'], [/\besistenza\s+degli\s+zeri\b/g, 'zeri'], [/\bscarto\s+quadratico\s+medio\b/g, 'deviazione standard'],
];
// Parole diverse per lo stesso contenuto, dopo la riduzione alla radice.
const SINONIMI = { integrazion: 'integral', derivazion: 'derivat', invertibil: 'invers', crescent: 'monoton', decrescent: 'monoton', concav: 'convess', autovettor: 'autovalor', diagonalizzabil: 'diagonalizzazion', estrem: 'estrem', hospital: 'hopital', obliqu: 'asintot', stazionar: 'critic', ottimizzazion: 'massim', vincolat: 'vincol' };
function radice(w) {
  if (w.length <= 3) return w;
  let r = w.length >= 8 ? w.replace(/mente$/, '') : w;
  if (r.length >= 7) r = r.replace(/ita$/, '');
  r = r.replace(/[aeiou]$/, '');
  if (r.length > 4) r = r.replace(/i$/, '');
  r = r.replace(/([cg])h$/, '$1').replace(/ezz$/, '').replace(/enz$/, 'ent');
  if (r.length > 6 && !/^(?:iperbol|parabol|ellitt)ic$/.test(r)) r = r.replace(/ic$/, '');
  if (r.length < 3) r = w.slice(0, 3);
  return SINONIMI[r] || r;
}
export function paroleDi(testo) {
  let t = piano(testo).replace(/\$([a-z])\$\s*-\s*/g, '$1').replace(/\$[^$]*\$/g, ' ').replace(/[’'`]/g, ' ');
  for (const [da, a] of GRAFIE) t = t.replace(da, a);
  return [...new Set(t.split(/[^a-z0-9]+/).filter((w) => w.length > 1 && !VUOTE.has(w) && !/^\d+$/.test(w)).map(radice))];
}
const nucleo = (parole) => parole.filter((w) => !GENERICHE.has(w));
// Parole che dicono il tipo di contenuto: «Regola di de l'Hôpital» e «Teorema di de l'Hôpital» sono lo stesso contenuto.
const TIPI = new Set(['teorem', 'regol', 'formul', 'criter', 'legg', 'princip', 'definizion', 'lemm', 'corollar', 'proposizion', 'metod', 'test']);
const senzaTipo = (parole) => { const r = parole.filter((w) => !TIPI.has(w)); return r.length ? r : parole; };
// Nomi propri nei titoli del sito (maiuscola dopo la prima parola): «Weierstrass», «Landau», «Cauchy».
const nomiPropri = (titolo) => paroleDi(String(titolo).split(/\s+/).slice(1).filter((w) => /^\p{Lu}\p{Ll}{3,}/u.test(w)).join(' '));

const cache = new WeakMap();
function indice(cat) {
  if (cache.has(cat)) return cache.get(cat);
  const voci = [];
  const aggiungi = (tipo, argomento, rif, titolo, forza) => {
    const intere = paroleDi(titolo);
    const parole = senzaTipo(intere);
    if (parole.length) voci.push({ tipo, argomento, rif, titolo, intere, nucleoIntero: nucleo(intere), parole, nucleo: nucleo(parole), forza, propri: nomiPropri(titolo) });
  };
  for (const a of cat.argomenti) {
    aggiungi('A', a, null, a.titolo, 1);
    for (const v of a.teoria || []) { aggiungi('T', a, v, v.titolo, 4); for (const alias of v.alias || []) aggiungi('T', a, v, alias, 4); }
    for (const z of a.sezioni || []) aggiungi('Z', a, z, z.titolo, 3);
    for (const sc of a.schede || []) { aggiungi('S', a, sc, sc.titolo, 2); for (const parola of sc.parole || []) if (parola.split(/\s+/).length >= 2) aggiungi('S', a, sc, parola, 1.5); }
  }
  // Rarità di ogni parola fra i titoli del catalogo: le parole rare pesano di più.
  const presenze = new Map();
  for (const v of voci) for (const w of v.parole) presenze.set(w, (presenze.get(w) || 0) + 1);
  const peso = (w) => Math.log(1 + voci.length / (presenze.get(w) || 0.5));
  // Vocabolario di ogni capitolo, per il riscontro del solo argomento.
  const lessico = new Map(cat.argomenti.map((a) => [a.slug, new Set(voci.filter((v) => v.argomento === a).flatMap((v) => v.parole))]));
  const dati = { voci, peso, lessico, presenze };
  cache.set(cat, dati);
  return dati;
}

// Riscontro di una voce: { livello: 'stesso' | 'argomento', argomento, voce?, sezione?, scheda?, titolo } oppure null.
// Prima si confronta il nome intero («Formula fondamentale del calcolo» e «Teorema fondamentale del calcolo»
// sono voci distinte); solo se non c'è si lascia cadere la parola che dice il tipo di contenuto.
export function riscontroProgramma(cat, testo, sezione = '') {
  const intero = cerca(cat, testo, sezione, false);
  if (intero?.livello === 'stesso') return intero;
  const senza = cerca(cat, testo, sezione, true);
  return senza?.livello === 'stesso' ? senza : intero || senza;
}
function cerca(cat, testo, sezione, toltoIlTipo) {
  const dati = indice(cat);
  const { peso, lessico, presenze } = dati;
  const voci = toltoIlTipo ? dati.voci : dati.voci.map((e) => e.interi || (e.interi = { ...e, parole: e.intere, nucleo: e.nucleoIntero }));
  const V = toltoIlTipo ? senzaTipo(paroleDi(testo)) : paroleDi(testo);
  const nV = nucleo(V);
  if (!V.length) return null;
  const insieme = new Set(V);
  const S = paroleDi(sezione).filter((w) => !GENERICHE.has(w));
  const somma = (parole) => parole.reduce((t, w) => t + peso(w), 0);
  const pesoVoce = somma(V) + 0.01;
  let migliore = null;
  for (const e of voci) {
    const comuni = e.parole.filter((w) => insieme.has(w));
    if (!comuni.length) continue;
    const tutte = comuni.length === e.parole.length;
    let punti = 0;
    // Il titolo del sito sta per intero nella voce: «Teorema di unicità del limite di una successione» ⊇ «Unicità del limite».
    const titoloDentro = tutte && (e.nucleo.length >= 1 || e.parole.length >= 3) && (e.parole.length >= 2 || (presenze.get(e.parole[0]) || 0) <= 6);
    // La voce sta per intero nel titolo del sito: «Forma trigonometrica» ⊆ «Forma trigonometrica di un numero complesso».
    const voceDentro = V.every((w) => e.parole.includes(w)) && (nV.length >= 2 || V.length >= 3 || (nV.length === 1 && V.length >= 2 && e.nucleo.length <= 2)) && e.nucleo.length <= nV.length + 2;
    // Un nome proprio o un termine raro in comune («simboli di Landau», «Weierstrass»).
    const raro = comuni.some((w) => e.propri.includes(w) && (presenze.get(w) || 0) <= 4);
    // Stesse parole, anche se tutte comuni («Funzione integrale»).
    const uguali = tutte && e.parole.length === V.length && (V.length >= 2 || e.nucleo.length === 1 || S.some((w) => lessico.get(e.argomento.slug).has(w)));
    if (uguali) punti = 3;
    else if (titoloDentro) punti = 2 + somma(comuni) / pesoVoce;
    else if (voceDentro) punti = 1.6 + somma(comuni) / (somma(e.parole) + 0.01);
    else if (raro && somma(comuni) >= 0.5 * somma(e.parole) && somma(comuni) >= 0.3 * pesoVoce) punti = 1 + somma(comuni) / pesoVoce;
    if (!punti) continue;
    if (e.tipo === 'A') punti -= 0.4;
    // Conta di più il titolo che corrisponde all'inizio della voce, cioè al suo soggetto.
    const primo = Math.min(...comuni.filter((w) => !GENERICHE.has(w) || comuni.length === V.length).map((w) => V.indexOf(w)), V.length);
    punti += 0.5 * (1 - primo / V.length);
    // A parità, vale il capitolo nominato dalla sezione del programma.
    if (S.some((w) => lessico.get(e.argomento.slug).has(w))) punti += 0.2;
    punti += e.forza / 100;
    if (!migliore || punti > migliore.punti) migliore = { punti, e, copertura: uguali || voceDentro ? 1 : somma(comuni) / pesoVoce, soglia: uguali || voceDentro || titoloDentro ? 0.45 : 2 };
  }
  if (migliore) {
    const { e, copertura, soglia } = migliore;
    // Il titolo del capitolo dice che l'argomento è trattato; un titolo che copre meno di metà della voce
    // (voce con più contenuti) la copre in parte; un nome proprio in comune non basta a dire che è lo stesso
    // contenuto («teorema di Gauss» e «piano di Gauss»).
    const livello = (e.tipo === 'A' && copertura < 1) || copertura < soglia ? 'argomento' : 'stesso';
    return { livello, argomento: e.argomento, voce: e.tipo === 'T' ? e.rif : null, sezione: e.tipo === 'Z' ? e.rif : null, scheda: e.tipo === 'S' ? e.rif : null, titolo: e.titolo };
  }
  // Nessun titolo con quel nome. Il capitolo tratta l'argomento se tutte le parole proprie della voce
  // appartengono al suo vocabolario; per una voce di sole parole comuni («Operazioni con le derivate»)
  // conta il capitolo in cui quelle parole si concentrano.
  let scelto = null;
  for (const a of cat.argomenti) {
    const lex = lessico.get(a.slug);
    if (!V.every((w) => lex.has(w))) continue;
    const titolo = paroleDi(a.titolo);
    const nelTitolo = V.filter((w) => titolo.includes(w)).length;
    const contesto = S.filter((w) => lex.has(w)).length;
    const concentrate = V.filter((w) => !['teorem', 'definizion', 'propriet', 'operazion', 'calcol', 'esemp', 'applicazion'].includes(w))
      .some((w) => (presenze.get(w) || 0) >= 2 && voci.filter((x) => x.argomento === a && x.parole.includes(w)).length >= 0.5 * presenze.get(w));
    if (!(nV.length >= 2 || nelTitolo || contesto || (nV.length && concentrate) || (!nV.length && concentrate && V.length >= 1))) continue;
    const punti = nelTitolo * 2 + contesto + (concentrate ? 1 : 0) + nV.length * 0.25;
    if (!scelto || punti > scelto.punti) scelto = { punti, a };
  }
  if (scelto) return { livello: 'argomento', argomento: scelto.a, voce: null, sezione: null, scheda: null, titolo: scelto.a.titolo };
  return null;
}
