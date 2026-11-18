// Riconoscimento e divisione in voci del programma di un corso, senza modelli.
//
// I programmi arrivano in molte forme: elenco puntato o numerato, prosa con un titolo per sezione,
// titoli numerati seguiti da un paragrafo, diario delle lezioni, scheda dell'insegnamento con obiettivi,
// testi e modalità d'esame, tabelle, righe spezzate da un PDF. Se il documento va al modello in un blocco
// solo, il modello ne confronta spesso soltanto l'inizio (18/11/2026: 12 voci su 97, esito 50%).
// Qui il documento si divide in voci nel codice; il modello abbina poi poche voci per volta e si controlla
// che ogni voce abbia la sua riga (confrontaElenco in compatibilita.mjs).
//
// Il modulo non usa nulla del Worker: lo importa anche il browser (src/scripts/compatibilita.ts) per
// decidere se il testo estratto da un PDF è un programma.

const piano = (s) => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const pulisci = (s) => String(s || '').replace(/\s+/g, ' ').trim();

// ---------- righe ----------
// Titolo o etichetta che introduce i contenuti del corso.
const ETICHETTA_PROGRAMMA = /^(?:programma|syllabus|contenut[oi]\b|argoment[oi]\s+(?:del|dell|svolt|trattat|d.?esame|delle? lezion)|argomenti\s*:?\s*$|temi\s+trattati|elenco\s+(?:(?:degli|delle|dei|di)\s+)?(?:argomenti|dimostrazioni|teoremi)|registro\s+delle\s+lezioni|diario\s+delle\s+lezioni|dettaglio\b.{0,40}\bargomenti|course\s+contents?|topics\b)/;
// Etichette delle parti che non elencano contenuti (scheda dell'insegnamento, avvisi, libri, esami).
const ETICHETTA_AMMINISTRATIVA = new RegExp(`^(?:${[
  'test[oi]\\b(?!\\s+d(?:i|egli)\\s+eserciz)', 'libr[oi]\\s+di\\s+testo', 'bibliografia', 'materiale\\s+didattico', 'materiali\\s+didattici', 'eserciziari',
  'obiettiv[oi]\\b', 'risultati\\s+(?:di\\s+apprendimento|attesi)', 'conoscenz[ae]\\s+e\\s+(?:capacita|abilita)', 'capacita\\s+di\\s+(?:applicare|apprend)', 'autonomia\\s+di\\s+giudizio', 'abilita\\s+comunicative',
  'prerequisiti', 'propedeuticita', '(?:insegnamenti|corsi)\\s+propedeutici', 'competenze\\s+propedeutiche',
  'modalita\\s+d', 'metod[oi]\\s+didattic', 'metod[oi]\\s+di\\s+(?:valutazione|insegnamento|accertamento|verifica)', 'valutazione\\s+(?:dell.?apprendimento|finale|del\\s+profitto)', 'verifica\\s+dell.?apprendimento', 'criteri\\s+di\\s+valutazione',
  'orari[oi]\\s+d', 'ricevimento', 'date\\s+(?:d.?esame|degli\\s+esami|esami)', 'appelli', 'calendario\\s+d', 'prov[ae]\\s+(?:scritt|oral|d.?esame|intermedi|in\\s+itinere)', 'scritto\\s*:', 'orale\\s*:', 'esam[ei]\\s*(?::|$)', 'regole\\s+d.?esame', 'info(?:rmazioni)?\\s+(?:generali|sul|aggiuntive|utili)',
  'altre\\s+informazioni', 'note\\s*:', 'strumenti\\s+a\\s+supporto', 'agenda\\s+2030', 'obiettivi\\s+agenda', 'avvis[oi]\\b',
  'learning\\s+outcomes', 'assessment', 'teaching\\s+methods', 'textbooks?', 'references', 'prerequisites', 'office\\s+hours',
].join('|')})`);
// Etichette che occupano una riga sola («Corso di laurea in Chimica», «CFU: 9»): si salta la riga, non ciò che segue.
const ETICHETTA_DI_RIGA = /^(?:docent[ei]\b|titolare|coordinatore|tutor\b|lingua\s+d|sede\s*:|periodo\s+(?:di\s+erogazione|didattico|di\s+svolgimento)|semestre\b|anno\s+(?:di\s+corso|accademico|offerta|regolamento)|crediti|cfu\b|ssd\b|settore\s+scientifico|codice\b|corso\s+di\s+(?:laurea|studi|studio)|tipologia|ore\s+(?:di|totali)\b|frequenza\s*(?::|alle|obbligatoria|delle\s+lezioni)|sito\s+web|pagina\s+web|contatti|e-?mail|scheda\s+(?:dell.?insegnamento|insegnamento|del\s+corso)|titolo\s+(?:dell.?)?insegnamento|denominazione|versione\s*:)/;
// Una voce che ripete soltanto il nome della materia non è un contenuto.
const NOME_DELLA_MATERIA = /^(?:corso\s+di\s+)?(?:analisi(?:\s+matematica)?|matematica(?:\s+generale)?|fisica(?:\s+generale)?|algebra\s+lineare(?:\s+e\s+geometria(?:\s+analitica)?)?|geometria(?:\s+e\s+algebra(?:\s+lineare)?)?|statistica(?:\s+e\s+probabilita)?|idraulica|statica|meccanica\s+razionale|scienza\s+delle\s+costruzioni|calculus)\s*(?:[1-3]|i{1,3}|uno|due|tre)?$/;
// Frasi di avviso o di regolamento finite fra i contenuti («Se l'esito è insufficiente, lo scritto va ripetuto»).
const FRASE_DI_REGOLAMENTO = /\b(?:voto|esito|scritto|orale|prov[ae]|esam[ei]|appell[oi]|iscrizion|prenotazion|sufficient|insufficient|ammess|student|frequenza|lezion[ei]|ricevimento|docente|dispens[ae]|verbalizz|punteggio|trentesimi|consegn|compit[oi]|tutorato|post)\b.*\b(?:e|sono|viene|vengono|puo|possono|deve|devono|sara|saranno|verra|verranno|fara|va|vanno)\b|\b(?:e|sono|viene|vengono|puo|possono|deve|devono|sara|saranno|verra|verranno|fara|va|vanno)\b.*\b(?:voto|esito|scritto|orale|prov[ae]|esam[ei]|appell[oi]|iscrizion|prenotazion|sufficient|insufficient|ammess|student|frequenza|lezion[ei]|ricevimento|docente|dispens[ae]|verbalizz|punteggio|trentesimi|consegn|compit[oi]|tutorato|post)\b/;
// Righe di intestazione o di servizio, ovunque si trovino.
const RIGA_DI_SERVIZIO = /\b(?:universita|politecnico|dipartimento|facolta|scuola di (?:ingegneria|scienze|economia)|c\.?\s?d\.?\s?l\b|corso di (?:laurea|studi|studio)|laurea (?:triennale|magistrale)|a\.\s?a\.|anno accademico|prof\.?(?:ssa)?\b|docent[ei]\b|cfu\b|crediti formativi|matricola|ricevimento|tutor\b|ultimo aggiornamento|ultima modifica|aggiornato il|pagina \d+ di \d+|svolto fino a|www\.|https?:|@)/;
const RIGA_BIBLIOGRAFICA = /\b(?:zanichelli|liguori|mcgraw|mc graw|hoepli|springer|pitagora|esculapio|edises|bollati|boringhieri|pearson|apogeo|carocci|utet|cedam|giappichelli|ambrosiana|piccin|ecig|decibel|editori riuniti|editrice|editore|edizioni|isbn|\bed\.)/;
const LEGENDA_DIMOSTRAZIONI = /\b(?:asterisco|contrassegnat|denotat|indicat[ie] con|segnat[ie] con|\(d\)\s*=|con dimostrazione\s*[,;:]\s*senza|non (?:sono stat[ie]|vengono|verranno) (?:dimostrat|richiest))/;
const INIZIO_DISCORSIVO = /^(?:il corso|l.?insegnamento|lo studente|la studentessa|gli studenti|il programma|il modulo|segue\b|durante\b|al termine|si consiglia|si raccomanda|quest[oaie]\b|di seguito|in questa pagina|e prevista|sono previst|l.?esame|le lezioni|il docente|questo corso|il presente|per (?:sostenere|accedere|i prerequisiti)|n\.?\s?b\b|nota\s*:|note\s*:|attenzione\s*:)/;
const SOLO_GENERICO = /^(?:(?:esempi|esempio|esercizi|esercitazion[ei]|applicazioni|complementi|cenni|generalita|introduzione|riepilogo|ripasso|richiami|varie|altro|svolgimento|discussione|correzione|quesiti|domande)(?:\s+(?:sul corso|al corso|generale|generali|di esercizi|degli esercizi|vari|svolti|proposti|di riepilogo|d.?esame))?(?:\s*(?:,|e|ed)\s*)?)+$/;
const PAROLE_GENERICHE = new Set(['definizione', 'definizioni', 'proprieta', 'esempi', 'esempio', 'esercizi', 'applicazioni', 'operazioni', 'teoremi', 'teorema', 'generalita', 'introduzione', 'cenni', 'richiami', 'complementi', 'calcolo', 'interpretazione', 'significato', 'geometrico', 'geometrica', 'fisico', 'fisica', 'principali', 'fondamentali', 'elementari', 'prime', 'primi', 'conseguenze', 'enunciato', 'enunciati', 'dimostrazione', 'dimostrazioni', 'concetto', 'concetti', 'nozioni', 'base', 'relative', 'relativi', 'loro', 'sue', 'suoi', 'vari', 'varie', 'e', 'ed', 'di', 'del', 'della', 'dei', 'delle', 'il', 'la', 'le', 'i', 'con', 'su', 'sul', 'sulle', 'sui']);

const PUNTO_ELENCO = /^(\s*)(?:[-*+•▪◦●○■□‣⁃⦁·–—→►▶✓]|\(?\d{1,3}(?:\.\d{1,3}){1,3}\.?\)?|\(?\d{1,3}[.)]|\d{1,3}\s*[-–—](?=\s)|\(?[a-z][.)]|\(?(?:i{1,3}|iv|v|vi{1,3}|ix|x)[.)])\s+(\S.*)$/i;
const TITOLO_DI_PARTE = /^(?:modulo|parte|capitolo|cap\.|unita(?:\s+didattica)?|sezione|blocco|tema)\s+(?:\d{1,2}|[ivx]{1,4}|[a-h])\b\s*[:.–—-]?\s*/i;
const ETICHETTA_LEZIONE = /^(?:lezion[ei]|lecture|settimana|week|incontro|esercitazion[ei]|lez\.)\s*(?:n\.?\s*)?\d{1,3}(?:\s*[-–e]\s*\d{1,3})?\s*(?:\([^)]{0,40}\))?\s*(?:del\s+[\d/.-]+)?\s*[.:)–—-]?\s*/i;

const senzaMarcatura = (r) => r.replace(/^\s*#{1,6}\s+/, '').replace(/\*\*|__/g, '').replace(/^\s*\|/, '').replace(/\|\s*$/, '').replace(/\s*\|\s*/g, ' · ').replace(/<[^>]{1,20}>/g, ' ');
const eMaiuscola = (r) => { const lettere = r.replace(/[^\p{L}]/gu, ''); return lettere.length >= 4 && r.length <= 90 && lettere.replace(/[^\p{Lu}]/gu, '').length / lettere.length >= 0.85; };

// Righe del documento con il loro ruolo. Le righe spezzate da un PDF vengono riunite.
function righeDi(testo) {
  const grezze = String(testo || '').replace(/\r/g, '').replace(/\t/g, ' ').replace(/­/g, '').split('\n')
    .filter((r) => !/^\s*\|?[\s:|-]*-{3,}[\s:|-]*$/.test(r) && !/^\s*[-_=*~]{4,}\s*$/.test(r));
  const lunghezze = grezze.map((r) => r.trim().length).filter((n) => n > 20).sort((a, b) => a - b);
  // Un testo ha le righe spezzate se molte righe finiscono vicino alla stessa larghezza.
  const larghezza = lunghezze.length >= 6 ? lunghezze[Math.floor(lunghezze.length * 0.9)] : 0;
  const spezzato = larghezza >= 50 && lunghezze.filter((n) => n >= larghezza - 14).length >= lunghezze.length * 0.45;
  const strutturale = (r) => /^\s*#{1,6}\s/.test(r) || /^\s*[-=_*~]{3,}/.test(r) || PUNTO_ELENCO.test(r) || TITOLO_DI_PARTE.test(r.trim()) || ETICHETTA_LEZIONE.test(r.trim()) || eMaiuscola(r.trim());
  const unite = [];
  for (const riga of grezze) {
    const r = riga.replace(/\s+$/, '');
    const prima = unite.at(-1);
    const t = r.trim();
    if (prima && prima.trim() && t && !strutturale(r) && !/^\s*#{1,6}\s/.test(prima) && !/^\s*[-=_*~]{3,}/.test(prima) && !eMaiuscola(prima.trim())) {
      const p = prima.trim();
      const aCapo = spezzato && p.length >= larghezza - 14 && !/[.;!?]$/.test(p);
      if (/:$/.test(p) && !aCapo) { unite.push(r); continue; }
      const sillabata = /\p{L}-$/u.test(p) && /^\p{Ll}/u.test(t);
      const sospesa = /[,(]$/.test(p) || /\b(?:di|del|della|dei|delle|e|ed|a|al|con|per|in|su|il|la|le|un|una)$/i.test(p);
      const minuscola = /^\p{Ll}/u.test(t) && (p.length >= 35 || PUNTO_ELENCO.test(prima));
      if (sillabata) { unite[unite.length - 1] = prima.replace(/-$/, '') + t; continue; }
      if (sospesa || minuscola || aCapo) { unite[unite.length - 1] = `${prima} ${t}`; continue; }
    }
    unite.push(r);
  }
  return unite.map((riga) => {
    const incorniciato = /^\s*[-=_*~]{3,}\s*([^-=_*~].*?)\s*[-=_*~]{3,}\s*$/.exec(riga);
    const titoloMd = Boolean(incorniciato) || /^\s*#{1,6}\s+/.test(riga) || /^\s*(?:\*\*[^*]+\*\*|__[^_]+__)\s*:?\s*$/.test(riga);
    const pulita = senzaMarcatura(incorniciato ? incorniciato[1] : riga);
    const punto = PUNTO_ELENCO.exec(pulita);
    const corpo = pulisci(punto ? punto[2] : pulita);
    const numerazione = punto ? pulita.trim().split(/\s/)[0] : '';
    return {
      testo: corpo, vuota: !corpo, titoloMd, punto: Boolean(punto), marca: numerazione,
      profondita: punto ? Math.floor(punto[1].length / 2) + (numerazione.match(/\d\.(?=\d)/g) || []).length : 0,
      maiuscola: eMaiuscola(corpo), conDuePunti: corpo.length <= 80 && /:$/.test(corpo),
    };
  });
}

// ---------- frasi ----------
const ABBREVIAZIONE = /(?:\b(?:es|cfr|ecc|risp|pag|pagg|cap|sez|par|fig|tab|vol|art|dim|oss|def|teor|prop|cor|eq|n|p|v|t\.c|c\.n\.s|a\.a|s\.d|c\.d)|\b\p{Lu})$/u;
function frasiDi(riga) {
  const frasi = [];
  let corrente = '', tonde = 0, formula = false;
  for (let i = 0; i < riga.length; i++) {
    const c = riga[i];
    if (c === '$') formula = !formula;
    else if (!formula && (c === '(' || c === '[')) tonde++;
    else if (!formula && (c === ')' || c === ']')) tonde = Math.max(0, tonde - 1);
    const puntoFermo = c === '.' && (i === riga.length - 1 || /\s/.test(riga[i + 1])) && !ABBREVIAZIONE.test(corrente);
    const trattino = (c === '-' || c === '–' || c === '—') && riga[i - 1] === ' ' && riga[i + 1] === ' ' && /\p{L}{3}/u.test(corrente) && /^\s*\p{Lu}/u.test(riga.slice(i + 1));
    const fine = !formula && !tonde && (c === ';' || c === '•' || puntoFermo || trattino);
    if (fine) { frasi.push(corrente); corrente = ''; } else corrente += c;
  }
  frasi.push(corrente);
  return frasi.flatMap(elencoConVirgole).map((f) => (typeof f === 'string' ? ripulisciVoce(f) : (ripulisciVoce(f.testo) && { testo: ripulisciVoce(f.testo), sezione: f.sezione }))).filter(Boolean);
}
// «Limiti, derivate, integrali, serie, …»: un elenco di soli nomi separati da virgole è una voce per nome.
function elencoConVirgole(frase) {
  // «Limiti: definizione, unicità, confronto, limiti notevoli»: il titolo vale per ogni nome dell'elenco.
  const conTitolo = /^([^:(]{3,70}):\s+([^:(]+)$/.exec(frase);
  if (conTitolo) {
    const nomi = conTitolo[2].split(/,\s+/).map((x) => x.trim()).filter(Boolean);
    const parole = nomi.reduce((n, x) => n + x.split(/\s+/).length, 0);
    // Con nomi di una parola sola («Asintoti: verticale, orizzontale, obliquo») la voce resta intera.
    if (nomi.length >= 4 && parole >= nomi.length * 1.6 && nomi.every((x) => x.split(/\s+/).length <= 7)) return nomi.map((x) => ({ testo: x, sezione: conTitolo[1].trim() }));
  }
  if (/[:(]/.test(frase)) return [frase];
  const parti = frase.split(/,\s+|\s+e\s+(?=\p{L}+\s*$)/u).map((p) => p.trim()).filter(Boolean);
  return parti.length >= 5 && parti.every((p) => p.split(/\s+/).length <= 6) ? parti : [frase];
}
function ripulisciVoce(frase) {
  let f = String(frase)
    // I segni accanto ai teoremi indicano se la dimostrazione è richiesta: non fanno parte del nome.
    .replace(/\$?\(\s*\\?\*+\s*\)\$?/g, ' ').replace(/\((?:d|D|c\.?d\.?|s\.?d\.?|dim\.?|con dim\.?|senza dim\.?)\)/g, ' ').replace(/\\\*/g, ' ').replace(/\*+(?=\s|$)/g, ' ')
    .replace(/[([]\s*\d{1,3}\s*(?:h|ore|ora)\s*[)\]]/gi, ' ')
    .replace(/\s+/g, ' ').replace(/^[\s,:;.·–—-]+|[\s,:;·–—-]+$/g, '').replace(/\.$/, '').trim();
  if (!/\p{L}{3}/u.test(f)) return '';
  // «Il corso verte sui seguenti argomenti: limiti, derivate…»: conta ciò che segue i due punti.
  if (INIZIO_DISCORSIVO.test(piano(f)) && /:\s+\S+\s+\S+/.test(f)) f = f.replace(/^[^:]*:\s+/, '');
  const p = piano(f);
  if (RIGA_DI_SERVIZIO.test(p) || RIGA_BIBLIOGRAFICA.test(p) || LEGENDA_DIMOSTRAZIONI.test(p) || INIZIO_DISCORSIVO.test(p) || SOLO_GENERICO.test(p)) return '';
  if (NOME_DELLA_MATERIA.test(p.replace(/[^a-z0-9]+/g, ' ').trim()) || FRASE_DI_REGOLAMENTO.test(p) || /^\(?(?:circa\s+)?\d+\s*(?:ore|h|cfu|lezioni)\)?$/.test(p)) return '';
  if (/\b\d{1,2}[/.]\d{1,2}[/.]\d{2,4}\b|\b\d{1,2}[:.]\d{2}\b.*\b(?:aula|ore)\b|\bore\s+\d{1,2}[:.]\d{2}\b/.test(p)) return '';
  return f.length > 400 ? `${f.slice(0, 400).replace(/\s+\S*$/, '')}…` : f;
}
const generica = (voce) => piano(voce).split(/[^a-z0-9]+/).filter(Boolean).every((w) => PAROLE_GENERICHE.has(w));

// ---------- richieste di un compito ----------
// Verbi con cui comincia una richiesta da svolgere. In un programma compaiono soltanto dentro le frasi
// («modalità di verifica», «corso di studi», «funzioni definite a tratti») e lì non contano.
const INIZIO_RICHIESTA = /^(?:\(?(?:\d{1,2}|[a-h]|[ivx]{1,4})[.)]\s+)?(?:si\s+)?(?:(?:calcol(?:are|a|ate|i)|determin(?:are|a|ate|i)|risolv(?:ere|i|a|ete)|studi(?:are|a|ate)?|dimostr(?:are|a|i|ate)|enunci(?:are|a|i|ate)|defini(?:re|sci|sca|te)|dare\s+la\s+definizione|trov(?:are|a|ate|i)|giustific(?:are|a|ate|hi)|verific(?:are|hi|ate)|verifica\s+(?:che|se)|stabili(?:re|sci|sca)|dire\s+se|discut(?:ere|i|a)|scriv(?:ere|i|a|ete)|disegn(?:are|a|i)|tracci(?:are|a)|rappresent(?:are|a|i)|prov(?:are|a|i)\s+che|mostr(?:are|a|i)\s+che|consideri|considerare|consider(?:a|iamo)\s+la|mostri|provi|classific(?:are|a|hi)|esprim(?:ere|i|a)|ricav(?:are|a|i)|rispondere|quanto\s+vale|qual\s+e)\b|sia(?:no)?\s+(?:dat[aoie]|\$|f\b|a\b|\p{Lu}\b)|dat[aoie]\s+(?:la|il|le|i|l.)\s|un[ao]?\s+\p{L}+\s+(?:di\s+massa|percorr|scivol|ruot|compie|contiene|lancia|viene|ha\s)|due\s+\p{L}+\s+(?:di|distano|sono))/u;
const ETICHETTA_ESERCIZIO = /\b(?:esercizio|quesito|problema|domanda)\s*(?:n\.?\s*)?\d/;

// Testo copiato da un indirizzo web («limiti%20e%20continuit%C3%A0»): si riporta alla forma leggibile.
export function testoLeggibile(testo) {
  const t = String(testo || '');
  if ((t.match(/%20/g) || []).length < 5) return t;
  return t.replace(/(?:%[0-9A-Fa-f]{2})+/g, (m) => { try { return decodeURIComponent(m); } catch { return m; } });
}

// ---------- analisi del documento ----------
// Restituisce il tipo del documento («programma» o «esame»), le voci del programma e come è scritto.
export function analizzaDocumento(testo, { massimo = 140 } = {}) {
  const righe = righeDi(testoLeggibile(testo));
  let compito = 0, scelte = 0;
  let titolo = false, amministrative = 0, lezioni = 0, puntati = 0, richieste = 0, frasiTotali = 0, pezzi = 0, formule = 0, righeContenuto = 0;
  const pezziDi = (t) => t.split(/[;,.•]+/).filter((x) => /\p{L}{3}/u.test(x)).length;
  let modo = 'contenuto', sezione = '';
  const voci = [];          // { testo, sezione, capoverso }
  let capoverso = 0;
  // L'ultimo punto dell'elenco: diventa un titolo se sotto di lui ci sono altri contenuti.
  let ultimoPunto = null;   // { da, a, testo, profondita }
  const aggiungi = (frasi) => { for (const f of frasi) voci.push(typeof f === 'string' ? { testo: f, sezione, capoverso } : { testo: f.testo, sezione: f.sezione, capoverso }); capoverso++; };
  const promuovi = () => { if (ultimoPunto && ultimoPunto.a === voci.length && ultimoPunto.testo.length <= 110) { voci.length = ultimoPunto.da; sezione = ultimoPunto.testo; } ultimoPunto = null; };
  const prossima = (i) => { for (let j = i + 1; j < righe.length; j++) if (!righe[j].vuota) return righe[j]; return null; };

  for (let i = 0; i < righe.length; i++) {
    const r = righe[i];
    if (r.vuota) continue;
    const p = piano(r.testo);
    const etichetta = p.replace(/^[\d.)\s-]+/, '');
    if (ETICHETTA_PROGRAMMA.test(etichetta) && (r.titoloMd || r.maiuscola || !r.punto || r.conDuePunti) && r.testo.length <= 160) {
      titolo = true; modo = 'contenuto'; ultimoPunto = null;
      // Il resto della riga, dopo il titolo, può già elencare contenuti («Programma: limiti, derivate…»).
      const tagli = RIGA_DI_SERVIZIO.test(p) ? [] : r.testo.split(/(?<=[.:])\s+/);
      const dopo = tagli.length > 1 && !ABBREVIAZIONE.test(tagli[0].slice(0, -1)) ? tagli.slice(1).join(' ') : '';
      if (dopo.split(/\s+/).length >= 2) { const f = frasiDi(dopo); frasiTotali += f.length; pezzi += pezziDi(dopo); for (const x of dopo.split(/(?<=[.;:!?])\s+/)) if (INIZIO_RICHIESTA.test(piano(x).trim())) richieste++; aggiungi(f); }
      continue;
    }
    if (ETICHETTA_DI_RIGA.test(etichetta) && r.testo.length <= 140) { amministrative++; ultimoPunto = null; continue; }
    if (ETICHETTA_AMMINISTRATIVA.test(etichetta)) {
      // «CFU: 9» occupa una riga sola; un'etichetta da sola o seguita da un paragrafo apre una parte di servizio.
      const breve = /^[^:]{2,40}:\s*\S/.test(r.testo) && r.testo.length < 60;
      amministrative++; if (!breve) modo = 'servizio'; ultimoPunto = null; continue;
    }
    const titoloDiParte = TITOLO_DI_PARTE.test(r.testo);
    const eTitolo = r.titoloMd || r.maiuscola || titoloDiParte;
    if (modo === 'servizio') {
      // Si esce dalle parti di servizio soltanto con un titolo vero.
      if (!((eTitolo || ETICHETTA_LEZIONE.test(r.testo)) && !RIGA_DI_SERVIZIO.test(p) && !RIGA_BIBLIOGRAFICA.test(p))) continue;
      modo = 'contenuto';
    }
    if (RIGA_DI_SERVIZIO.test(p) && (eTitolo || !voci.length || r.testo.length <= 140)) { ultimoPunto = null; continue; }
    // Intestazione con il nome del corso e l'anno («ANALISI MATEMATICA I (Canale S-Z) - 2026/27»), prima dei contenuti.
    if (!voci.length && !r.punto && r.testo.length <= 110 && !/\.\s/.test(r.testo) && /\b(?:analisi|fisica|matematica|algebra|geometria|statistica|idraulica|statica|meccanica|costruzioni)\b/.test(p) && /\b20\d\d\b|\bcanale\b|\bcorso\b|\ba\.?\s?a\b/.test(p)) continue;
    // Nomi di persone nell'intestazione («Mario ROSSI – Anna BIANCHI»), prima dei contenuti.
    if (!voci.length && !r.punto && /^(?:\p{Lu}[\p{L}.']*\s+){1,3}\p{Lu}{3,}\b(?:\s*[-–—,]\s*(?:\p{Lu}[\p{L}.']*\s+){1,3}\p{Lu}{3,}\b)*\s*$/u.test(r.testo)) continue;
    if (ETICHETTA_ESERCIZIO.test(p)) { richieste++; compito++; }
    if (/\?/.test(r.testo)) richieste++;
    // Punteggi («(10 punti)») e risposte a scelta («(A) … (B) …») si trovano soltanto nei compiti.
    if (/\(\s*\d{1,2}\s*(?:punti|pt\.?|p\.)\s*\)/.test(p)) compito++;
    scelte += (r.testo.match(/\((?:[A-E]|[a-e])\)\s/g) || []).length + (r.punto && /^\(?[A-Ea-e][.)]$/.test(r.marca) && /[=<>\\$]/.test(r.testo) ? 1 : 0);

    const seguente = prossima(i);
    const senzaPunto = !/[.;,]$/.test(r.testo);
    const titoloSemplice = !r.punto && r.testo.length <= 80 && senzaPunto && !/\.\s|;|\s[-–—]\s/.test(r.testo) && !ETICHETTA_LEZIONE.test(r.testo) && seguente
      && (seguente.punto || (!seguente.titoloMd && !seguente.maiuscola && (/[.;]\s/.test(seguente.testo) || seguente.testo.length > 100)));
    if (eTitolo || r.conDuePunti || titoloSemplice) {
      ultimoPunto = null;
      sezione = pulisci(r.testo.replace(TITOLO_DI_PARTE, (m) => (r.testo.length - m.length >= 4 ? '' : m)).replace(/[:.]$/, '').replace(/\(\s*\d+\s*(?:ore|h|cfu)\s*\)/i, ''));
      continue;
    }

    let corpo = r.testo;
    righeContenuto++;
    pezzi += pezziDi(corpo);
    if (/\\(?:int|lim|sum|frac|sqrt|iint)\b|[=<>≤≥]\s*-?\d|\bf\s*\(\s*x/.test(corpo)) formule++;
    const lezione = ETICHETTA_LEZIONE.exec(corpo);
    if (lezione && !r.punto) { lezioni++; corpo = corpo.slice(lezione[0].length); if (!corpo.trim()) continue; }
    const frasi = frasiDi(corpo);
    frasiTotali += Math.max(frasi.length, 1);
    for (const f of corpo.split(/(?<=[.;:!?])\s+/)) if (INIZIO_RICHIESTA.test(piano(f).trim().replace(/^\(\s*\d{1,2}\s*(?:punti|pt\.?|p\.)\s*\)\s*/, ''))) richieste++;
    if (r.punto) {
      puntati++;
      // Un punto più rientrato del precedente: il precedente era il titolo del gruppo.
      if (ultimoPunto && r.profondita > ultimoPunto.profondita) promuovi();
      const da = voci.length;
      aggiungi(frasi);
      ultimoPunto = frasi.length === 1 && typeof frasi[0] === 'string' ? { da, a: voci.length, testo: frasi[0], profondita: r.profondita } : null;
    } else {
      // Testo sotto un punto dell'elenco: il punto era un titolo («1. Vettori» seguito dal paragrafo).
      if (ultimoPunto && frasi.length) promuovi();
      aggiungi(frasi);
    }
  }

  // Le voci fatte di sole parole generiche («Definizione e proprietà») valgono insieme al titolo della sezione.
  let elenco = voci.map((v) => (generica(v.testo) ? (v.sezione ? { ...v, testo: `${v.sezione}: ${v.testo}` } : null) : v)).filter(Boolean);
  const viste = new Set();
  elenco = elenco.filter((v) => { const k = piano(v.testo); if (viste.has(k)) return false; viste.add(k); return true; });
  // Oltre il massimo si uniscono le frasi vicine dello stesso capoverso: nessuna parte del programma si perde.
  for (let passo = 2; elenco.length > massimo && passo <= 12; passo++) {
    const unite = [];
    for (const v of elenco) {
      const u = unite.at(-1);
      if (u && u.capoverso === v.capoverso && u.sezione === v.sezione && u.quante < passo && u.testo.length + v.testo.length < 380) { u.testo += `. ${v.testo}`; u.quante++; } else unite.push({ ...v, quante: v.quante || 1 });
    }
    elenco = unite;
  }
  if (elenco.length > massimo) {
    const unite = [];
    const perVoce = Math.ceil(elenco.length / massimo);
    for (const v of elenco) {
      const u = unite.at(-1);
      if (u && u.sezione === v.sezione && u.pezzi < perVoce) { u.testo = `${u.testo}. ${v.testo}`.slice(0, 600); u.pezzi++; } else unite.push({ ...v, pezzi: 1 });
    }
    elenco = unite;
  }

  // Tipo del documento. Un compito chiede di svolgere qualcosa in quasi ogni riga; un programma nomina
  // contenuti e, al più, cita qualche verbo nelle parti di servizio.
  const quota = richieste / Math.max(frasiTotali, 1);
  let tipo;
  const conFormule = formule >= 2 && formule >= righeContenuto * 0.3;
  const daCompito = compito >= 2 || scelte >= 6;
  if (daCompito) tipo = 'esame';
  else if (titolo) tipo = (richieste >= 3 && quota > 0.2) || (conFormule && formule >= righeContenuto * 0.5) ? 'esame' : 'programma';
  else if (!richieste) tipo = pezzi >= 3 && formule < 2 ? 'programma' : 'esame';
  else tipo = frasiTotali >= 20 && quota < 0.06 && formule < 3 && (amministrative >= 2 || lezioni >= 3 || puntati >= 12) ? 'programma' : 'esame';

  return {
    tipo, titolo, puntati, lezioni, amministrative, richieste,
    voci: elenco.map((v, i) => ({ id: String(i + 1), sezione: v.sezione, testo: v.testo })),
  };
}
