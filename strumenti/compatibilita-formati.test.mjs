// Banco di prova di «Compatibilità con il tuo esame»: lo stesso programma scritto in molti formati, per più
// materie, e molti compiti. Controlla che un programma sia sempre riconosciuto e diviso in voci senza perdere
// contenuti né raccogliere righe di servizio (docenti, libri, date d'esame), che un compito non sia mai
// scambiato per un programma e che il riscontro per nome trovi nel catalogo i contenuti che il sito ha.
// Nessuna richiesta ai modelli: i modelli sono simulati, anche nel caso peggiore (nessun riferimento).
import assert from 'node:assert/strict';
import { test, after } from 'node:test';
import { mkdtempSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { execFileSync } from 'node:child_process';
import { analizzaDocumento } from '../worker/programma.mjs';
import { riscontroProgramma } from '../worker/riscontro-programma.mjs';
import { PROGRAMMI, COMPITI } from './compatibilita-formati/contenuti.mjs';
import { FORMATI, SENZA_VIRGOLE, FORMATI_COMPITO } from './compatibilita-formati/formati.mjs';

const radice = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const temporanea = mkdtempSync(join(tmpdir(), 'compatibilita-formati-'));
after(() => rmSync(temporanea, { recursive: true, force: true }));
const destinazione = join(temporanea, 'worker.mjs');
execFileSync(process.execPath, [join(radice, 'node_modules/rolldown/bin/cli.mjs'), join(radice, 'worker/compatibilita.mjs'), '--file', destinazione, '--format', 'esm', '--platform', 'node', '--logLevel', 'silent'], { cwd: radice });
const { gestisciCompatibilita } = await import(pathToFileURL(destinazione).href);
const catalogo = JSON.parse(readFileSync(join(radice, 'strumenti/compatibilita-formati/catalogo-analisi-1.json'), 'utf8'));
const salerno = readFileSync(join(radice, 'strumenti/compatibilita-programma-prosa.txt'), 'utf8');

const piano = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
// Parole che stanno soltanto nelle parti di servizio dei documenti di prova.
const SERVIZIO = /zanichelli|liguori|bollati|rossi|bianchi|neri|bruni|verdi|prova scritta|prova orale|giugno|gennaio|cfu|example|semestre|lezioni frontali|scuola secondaria|conoscenze di base|written|asterisco|dimostrati|aule|sintetico/i;

for (const [materia, p] of Object.entries(PROGRAMMI)) {
  test(`${materia}: il programma è riconosciuto e diviso in voci in ${Object.keys(FORMATI).length} formati`, () => {
    for (const [formato, scrivi] of Object.entries(FORMATI)) {
      const a = analizzaDocumento(scrivi(p));
      const attese = p.sezioni.flatMap(([, v]) => v).filter((x) => !SENZA_VIRGOLE.has(formato) || !/[,:]/.test(x));
      const voci = a.voci.map((v) => piano(v.testo));
      assert.equal(a.tipo, 'programma', `${formato}: tipo`);
      assert.deepEqual(attese.filter((x) => !voci.some((t) => t.includes(piano(x)))), [], `${formato}: voci perse`);
      assert.deepEqual(a.voci.filter((v) => SERVIZIO.test(v.testo)).map((v) => v.testo), [], `${formato}: righe di servizio fra le voci`);
      assert.ok(a.voci.length >= attese.length * 0.6 && a.voci.length <= attese.length * 1.5 + 3, `${formato}: ${a.voci.length} voci per ${attese.length} argomenti`);
      // Le voci restano distinte: al più qualche voce raccoglie tre argomenti («Titolo: a, b, c»).
      assert.ok(a.voci.filter((v) => attese.filter((x) => piano(v.testo).includes(piano(x))).length > 2).length <= 3, `${formato}: voci fuse`);
    }
  });
}

test('un compito non è mai scambiato per un programma', () => {
  for (const [materia, righe] of COMPITI) for (const [formato, scrivi] of Object.entries(FORMATI_COMPITO)) {
    assert.equal(analizzaDocumento(scrivi(PROGRAMMI[materia].nome, righe)).tipo, 'esame', `${materia} · ${formato}`);
  }
  // Domande di teoria per l'orale: sono richieste, non un programma.
  assert.equal(analizzaDocumento('Domande di teoria\n1. Enunciare e dimostrare il teorema di Rolle.\n2. Definire la continuità.\n3. Enunciare il teorema di Weierstrass.').tipo, 'esame');
});

test('parole di un programma che sembrano richieste non lo trasformano in un compito', () => {
  const documento = `Scheda dell'insegnamento\nCorso di studi: Ingegneria\nModalità di verifica dell'apprendimento\nProva scritta. Lo studente deve calcolare limiti e studiare funzioni.\nContenuti\n${[
    'Studio del grafico di una funzione', 'Determinante di una matrice', 'Funzioni definite a tratti', 'Calcolo di limiti', 'Matrici definite positive', 'Verifica di ipotesi',
    'Risoluzione di sistemi lineari', 'Problema di Cauchy', 'Definizione di derivata', 'Dimostrazione del teorema di Lagrange', 'Rappresentazione cartesiana', 'Classificazione delle coniche',
  ].join('\n')}`;
  const a = analizzaDocumento(documento);
  assert.equal(a.tipo, 'programma');
  assert.equal(a.voci.length, 12);
});

test('documenti come quelli arrivati al sito: compiti con il programma in coda, quiz, avvisi, intestazioni', () => {
  // Compito con il programma del corso nella stessa foto: è un compito.
  const misto = `## I Scritto - Fisica 1\n\nCorso di Laurea in Chimica  \n30 giugno 2026  \nprof.ssa A. Rossi\n\n1) (10 punti) Un corpo di massa $m = 0.5 \\, \\text{kg}$ è attaccato a una corda ideale. Assumendo che le oscillazioni siano piccole, determinare:\na) (4 punti) la loro ampiezza e il loro periodo;\nb) (3 punti) la legge oraria e la fase iniziale.\n\n2) (12 punti) Un blocco di $28.0 \\, \\text{kg}$ è collegato a un secchio.\na) la massa della sabbia versata nel secchio\nb) l'accelerazione del sistema;\n\n# Programma\n\n## Programma di Fisica 1\n\n* Introduzione\n* Errori di misura\n* Cinematica del punto\n* Dinamica del punto`;
  assert.equal(analizzaDocumento(misto).tipo, 'esame');
  // Prova a risposta multipla, senza verbi all'inizio delle righe.
  const quiz = `Analisi matematica 1\n(1) Una soluzione $z \\in \\mathbb{C}$ dell'equazione $z^2 - 2(1 - i)z + 2 = 0$ è\n(A) $z=2+(\\sqrt{3}-1)i$. (B) $z=2-(\\sqrt{3}+1)i$. (C) $z=-2+(\\sqrt3-1)i$. (D) $z=-2-(\\sqrt3+1)i$.\n(2) Sia $S = \\{x \\in \\mathbb{R}: |x + 1| > \\sqrt{25 - x^2}\\}$. Allora\n(A) $[-5,-3] \\subset S$. (B) $]-\\infty, -4] \\subset S$. (C) $]3,5] \\subset S$. (D) $S$ è un intervallo.\n(3) Il limite $\\lim_{x \\to 0} \\frac{\\sin x}{x}$ vale\n(A) 0. (B) 1. (C) 2. (D) non esiste.`;
  assert.equal(analizzaDocumento(quiz).tipo, 'esame');
  // Regole d'esame scritte per esteso prima del programma: non diventano voci.
  const regole = analizzaDocumento(`ANALISI 2 (10 CFU)\ninfo generali\nESAME\nL'esame è composto da una prova scritta e da una prova orale. Se l'esito è "insufficiente", lo scritto va ripetuto; se è almeno "sufficiente", si accede alla prova orale. Il voto finale è determinato dai risultati di entrambe le prove.\nPROGRAMMA\n- Topologia di $\\mathbb{R}^n$. Calcolo differenziale per funzioni di più variabili.\n- Matrice Hessiana, estremanti liberi.\n- Integrali multipli in $\\mathbb{R}^n$.\n- I teoremi di Gauss, Green e Stokes.`);
  assert.equal(regole.tipo, 'programma');
  assert.deepEqual(regole.voci.map((v) => v.testo), ['Topologia di $\\mathbb{R}^n$', 'Calcolo differenziale per funzioni di più variabili', 'Matrice Hessiana, estremanti liberi', 'Integrali multipli in $\\mathbb{R}^n$', 'I teoremi di Gauss, Green e Stokes']);
  // Nome della materia, titolo in inglese, ore: restano fuori dalle voci.
  const scheda = analizzaDocumento('Analisi Matematica I\nTITOLO INSEGNAMENTO IN INGLESE Calculus I\nCorso di laurea in Ingegneria\nProgramma\nCenni di Teoria degli insiemi. Successioni numeriche. Limiti di funzioni. (Circa 23 ore)');
  assert.deepEqual(scheda.voci.map((v) => v.testo), ['Cenni di Teoria degli insiemi', 'Successioni numeriche', 'Limiti di funzioni']);
  // Testo copiato da un indirizzo web.
  const indirizzo = analizzaDocumento('richiami:%20insiemi,%20operazioni%20sugli%20insiemi.%20Insiemi%20numerici,%20massimi%20e%20minimi.%0AFunzioni%20reali:%20limiti%20e%20continuit%C3%A0.%20Teoremi%20sui%20limiti:%20unicit%C3%A0,%20confronto.');
  assert.equal(indirizzo.tipo, 'programma');
  assert.ok(indirizzo.voci.some((v) => v.testo === 'Funzioni reali: limiti e continuità'));
  // Diario del corso pubblicato in una pagina, con l'avviso in testa.
  const diario = analizzaDocumento('ROSSI - ANALISI MATEMATICA I (Canale S-Z) - 2026/27\nQuesto post verrà aggiornato settimanalmente man mano che progrediamo con le lezioni.\n1. 22/9. Simboli logici e quantificatori. Richiami di insiemistica.\n2. 23/9. Insiemi numerici: numeri naturali, interi e razionali.\n3. 24/9. Estremo superiore. Assioma di completezza.');
  assert.deepEqual(diario.voci.map((v) => v.testo), ['Simboli logici e quantificatori', 'Richiami di insiemistica', 'Insiemi numerici: numeri naturali, interi e razionali', 'Estremo superiore', 'Assioma di completezza']);
});

test('un programma più lungo del massimo si accorcia unendo le voci vicine, senza perdere contenuti', () => {
  const voci = Array.from({ length: 400 }, (_, i) => `Argomento numero ${i + 1} del corso`);
  const righe = [];
  for (let i = 0; i < voci.length; i += 8) righe.push(`${voci.slice(i, i + 8).join('. ')}.`);
  const a = analizzaDocumento(`Programma del corso\n${righe.join('\n')}`, { massimo: 140 });
  assert.ok(a.voci.length <= 140 && a.voci.length >= 50, `${a.voci.length} voci`);
  const tutto = a.voci.map((v) => v.testo).join(' | ');
  assert.ok(voci.every((v) => tutto.includes(v)));
});

test('il riscontro per nome trova i contenuti del sito e non inventa quelli che mancano', () => {
  const trova = (voce, sezione = '') => { const r = riscontroProgramma(catalogo, voce, sezione); return r ? `${r.livello} ${r.argomento.slug}` : null; };
  for (const [voce, atteso, sezione] of [
    ['Teorema di unicità del limite', 'stesso limiti'], ['Teorema della permanenza del segno', 'stesso limiti'], ['Teorema dei carabinieri', 'stesso limiti'],
    ['Forme indeterminate', 'stesso limiti'], ['Limiti fondamentali', 'stesso limiti'], ['Teorema di esistenza degli zeri', 'stesso limiti'], ['Teorema di Weierstrass', 'stesso limiti'],
    ['Funzioni continue', 'stesso limiti'], ['Teorema di Rolle', 'stesso derivate'], ['Teorema di Lagrange', 'stesso derivate'],
    ['Teorema del valor medio', 'stesso derivate'], ['Regola di de l\'Hospital', 'stesso derivate'], ['Formula di Taylor con resto nella forma di Peano', 'stesso derivate'],
    ['Metodo di integrazione per parti', 'stesso integrali'], ['Integrazione per sostituzione', 'stesso integrali'], ['Il teorema fondamentale del calcolo integrale', 'stesso integrali'],
    ['Funzione integrale', 'stesso integrali'], ['Teorema della media e Media Integrale', 'stesso integrali'], ['Integrali impropri', 'stesso integrali-impropri'],
    ['Serie geometrica', 'stesso serie'], ['Serie armonica generalizzata', 'stesso serie'], ['Serie alternate e criterio di Leibniz', 'stesso serie'], ['Serie assolutamente convergenti', 'stesso serie'],
    ['Criterio del rapporto', 'stesso serie'], ['Forma trigonometrica dei numeri complessi', 'stesso numeri-complessi'], ['Potenze e radici n-me di un numero complesso', 'stesso numeri-complessi'],
    ['Funzioni invertibili', 'stesso insiemi'], ['Funzioni periodiche', 'stesso insiemi'], ['Principio di induzione', 'stesso insiemi'], ['Estremo superiore ed estremo inferiore', 'stesso insiemi'],
    ['Equazioni a variabili separabili', 'stesso equazioni-differenziali'], ['Problema di Cauchy', 'stesso equazioni-differenziali'], ['Funzioni convesse e concave', 'stesso studio-di-funzione'],
    ['Operazioni', 'stesso numeri-complessi', 'I numeri complessi'],
    // Contenuti che il materiale di Analisi 1 non ha: restano senza riscontro.
    ['Circonferenza e cerchio', null], ['Equazione canonica dell’ellisse e dell’iperbole', null], ['Equazione canonica della parabola', null], ['Trasformata di Laplace', null],
    ['Derivate parziali', null], ['Autovalori e autovettori', null], ['Legge di Coulomb', null], ['Funzioni lineari: coordinate cartesiane e rette nel piano', null],
  ]) assert.equal(trova(voce, sezione), atteso, voce);
});

// ---------- confronto completo con modelli simulati ----------
async function confronto(risposta, testo, materia = 'analisi-1', extra = {}) {
  const chiamate = [], attese = [], modelli = [];
  const env = {
    ASSETS: { fetch: async () => Response.json(catalogo) },
    AI: { run: async (modello, input) => { modelli.push({ modello, input }); return risposta(modello, input, modelli.length); } },
    ...extra,
  };
  const h = {
    aDO: async (_env, percorso, dati) => { chiamate.push({ percorso, dati }); return { ok: true, rimasti: 3 }; },
    json: (dati, status = 200, headers) => Response.json(dati, { status, headers }),
    utenteCollegato: async () => null, catalogoDomande: async () => ({}),
  };
  const req = new Request('https://esempio.test/api/compatibilita/confronta', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ materia, testo }) });
  const res = await gestisciCompatibilita(req, env, { waitUntil: (p) => attese.push(p) }, '/api/compatibilita/confronta', h);
  const corpo = await res.text();
  await Promise.all(attese);
  return { res, modelli, chiamate, eventi: corpo.trim().split('\n').filter(Boolean).map((r) => JSON.parse(r)) };
}
const identificatori = (input) => [...input.messages[1].content.matchAll(/^(\d+)\. /gm)].map((m) => m[1]);
// Il modello peggiore possibile: una riga per voce, nessun riferimento.
const senzaRiferimenti = (_m, input) => ({ response: `${identificatori(input).map((id) => `${id}|T|-|-|-|Voce ${id}`).join('\n')}\nFINE_CONFRONTO` });

test('con un modello che non trova nulla, il programma del 18/11 resta coperto dal riscontro per nome', async () => {
  const { eventi } = await confronto(senzaRiferimenti, salerno);
  const esito = eventi.at(-1).fine;
  assert.equal(esito.tipoDocumento, 'programma');
  assert.equal(esito.richieste.length, 98);
  // Prima della correzione: 12 voci lette, 50%. Le sezioni di geometria analitica e di successioni,
  // che Analisi 1 non tratta, restano scoperte.
  assert.ok(esito.compatibilita >= 75 && esito.compatibilita <= 92, `compatibilità ${esito.compatibilita}`);
  const riga = (inizio) => esito.richieste.find((r) => r.testo.startsWith(inizio));
  for (const nome of ['Teorema di Weierstrass', 'Teorema di Rolle', 'Limiti fondamentali', 'Metodo di integrazione per parti', 'Serie geometrica']) {
    assert.equal(riga(nome).livello, 'stesso', nome);
    assert.match(riga(nome).voce?.link || riga(nome).scheda?.link, /^\/analisi-1\//, nome);
  }
  assert.equal(riga('Circonferenza e cerchio').livello, 'nessuno');
  assert.ok(eventi.some((e) => e.fase === 'ricontrollo'));
});

test('ogni formato del programma di Analisi 1 arriva a un risultato completo anche con il modello peggiore', async () => {
  for (const [formato, scrivi] of Object.entries(FORMATI)) {
    const { eventi } = await confronto(senzaRiferimenti, scrivi(PROGRAMMI['analisi-1']));
    const esito = eventi.at(-1).fine;
    assert.ok(esito, `${formato}: ${JSON.stringify(eventi.at(-1)).slice(0, 200)}`);
    assert.equal(esito.tipoDocumento, 'programma', formato);
    assert.ok(esito.compatibilita >= 80, `${formato}: ${esito.compatibilita}%`);
  }
});

test('per un programma il catalogo è di soli titoli e il modello può indicare un paragrafo della teoria', async () => {
  let catalogoVisto = '';
  const conParagrafo = (_m, input) => {
    catalogoVisto = input.messages[0].content;
    const codice = /^(T\d+) Asintoti \[paragrafo\]$/m.exec(catalogoVisto)?.[1];
    return { response: `${identificatori(input).map((id) => `${id}|T|A3|${codice}|-|Voce ${id}`).join('\n')}\nFINE_CONFRONTO` };
  };
  const voci = ['Rette asintotiche al grafico', 'Comportamento del grafico agli estremi del dominio', 'Andamento all’infinito del grafico'];
  const { eventi } = await confronto(conParagrafo, `Programma del corso\n${voci.map((v) => `- ${v}`).join('\n')}`);
  const esito = eventi.at(-1).fine;
  assert.equal(esito.compatibilita, 100);
  assert.ok(esito.richieste.every((r) => r.voce.link === '/analisi-1/limiti/teoria#asintoti'));
  assert.ok(catalogoVisto.length < 40000 && !/Esempi:|Metodi spiegati:/.test(catalogoVisto), 'catalogo di soli titoli');
  assert.match(catalogoVisto, /Teorema del confronto.*\(anche: Teorema dei due carabinieri/);
});

test('un gruppo che il modello non completa si divide a metà invece di fermare il confronto', async () => {
  // Il modello simulato dimentica l'ultima voce quando ne riceve più di sette.
  const smemorato = (_m, input) => { const ids = identificatori(input); return { response: `${(ids.length > 7 ? ids.slice(0, -1) : ids).map((id) => `${id}|T|-|-|-|Voce ${id}`).join('\n')}\nFINE_CONFRONTO` }; };
  const { eventi } = await confronto(smemorato, FORMATI['elenco puntato'](PROGRAMMI['analisi-1']));
  assert.equal(eventi.at(-1).fine.richieste.length, 51);
});

test('se il modello riconosce un programma che il codice aveva preso per un compito, si passa alle voci', async () => {
  // Senza intestazione e con righe che cominciano con un verbo: il codice lo prende per un compito.
  const voci = PROGRAMMI['analisi-1'].sezioni.flatMap(([, v]) => v).slice(0, 30);
  const documento = ['Calcolare limiti e derivate delle funzioni elementari', 'Studiare il grafico di una funzione', 'Determinare primitive', ...voci].join('\n');
  assert.equal(analizzaDocumento(documento).tipo, 'esame');
  const modello = (_m, input) => (identificatori(input).length && /Voci del programma/.test(input.messages[1].content)
    ? senzaRiferimenti(_m, input)
    : { response: 'TIPO_DOCUMENTO|PROGRAMMA\n1|T|A3|-|-|Limiti\nFINE_CONFRONTO' });
  const { eventi } = await confronto(modello, documento);
  const esito = eventi.at(-1).fine;
  assert.equal(esito.tipoDocumento, 'programma');
  assert.ok(esito.richieste.length >= 30, `${esito.richieste.length} voci`);
});

test('un modello che non risponde non tiene fermo il confronto: si chiude entro il limite e propone la verifica personale', async () => {
  const mai = () => new Promise(() => {});
  const inizio = Date.now();
  const { eventi } = await confronto(mai, salerno, 'analisi-1', { COMPATIBILITA_TEMPI: 0.002 });
  assert.ok(Date.now() - inizio < 5000, 'il confronto si chiude entro il limite di tempo');
  assert.ok(eventi.at(-1).verificaPersonale);
  assert.ok(eventi.every((e) => !e.fine));
});

test('se il modello non risponde per una parte dei gruppi, il risultato arriva lo stesso per tutte le voci', async () => {
  let n = 0;
  const alterno = (m, input) => (++n % 4 === 0 ? new Promise(() => {}) : senzaRiferimenti(m, input));
  const { eventi } = await confronto(alterno, salerno, 'analisi-1', { COMPATIBILITA_TEMPI: 0.002 });
  const esito = eventi.at(-1).fine;
  assert.equal(esito.richieste.length, 98);
  assert.ok(esito.compatibilita >= 75, `compatibilità ${esito.compatibilita}`);
});

test('appunti con sole formule e frasi di annuncio non diventano voci di un programma', () => {
  const appunti = 'Vi sono i seguenti insiemi numerici:\n\n* $N = \\{1, 2, 3, 4, ...\\}$;\n* $N_0 = \\{0,1,2,3,...\\}$;\n* $Z = \\{..., -2, -1, 0, 1, 2, ...\\}$;\n* $Q = \\{\\frac{m}{n} \\quad | \\quad m,n \\in \\mathbb{Z}, n \\neq 0\\}$;';
  assert.equal(analizzaDocumento(appunti).voci.length, 0);
  const conAnnuncio = `${PROGRAMMI['algebra-lineare'].sezioni.map(([titolo, voci]) => `${titolo}. ${voci.join('. ')}.`).join('\n')}\nInoltre è richiesta la conoscenza della dimostrazione dei seguenti teoremi. Formula di Grassmann. Teorema di Binet.`;
  const voci = analizzaDocumento(`Programma del corso di Geometria\n\n${conAnnuncio}`).voci.map((v) => v.testo);
  assert.ok(voci.every((v) => !/richiesta la conoscenza/.test(v)), voci.join(' | '));
  assert.ok(voci.includes('Teorema di Binet'));
});

// ---------- argomenti che sono in un'altra materia del sito ----------
const catStatica = { materia: 'statica', titolo: 'Statica', argomenti: [
  { slug: 'reazioni-vincolari', titolo: 'Reazioni vincolari', sezioni: [{ ancora: 'equazioni-cardinali', titolo: 'Equazioni cardinali della statica' }], schede: [{ n: 1, titolo: 'Calcolo di una reazione vincolare', parole: ['reazioni vincolari'] }], teoria: [] },
  { slug: 'travature-reticolari', titolo: 'Travature reticolari', sezioni: [{ ancora: 'metodo-dei-nodi', titolo: 'Metodo dei nodi' }], schede: [], teoria: [] },
] };
const catCostruzioni = { materia: 'scienza-delle-costruzioni', titolo: 'Scienza delle costruzioni', argomenti: [
  { slug: 'linea-elastica', titolo: 'Linea elastica', sezioni: [{ ancora: 'equazione-della-linea-elastica', titolo: 'Equazione della linea elastica' }], schede: [], teoria: [] },
  { slug: 'taglio', titolo: 'Taglio', sezioni: [], schede: [], teoria: [{ ancora: 'formula-di-jourawski', titolo: 'Formula di Jourawski', tipo: 'teorema', dimostrazione: true }] },
  { slug: 'legame-costitutivo', titolo: 'Legame elastico lineare', sezioni: [], schede: [], teoria: [] },
] };
async function conAltreMaterie(risposta, testo, materia = 'statica') {
  const modelli = [], attese = [], chiamate = [];
  const cataloghi = { statica: catStatica, 'scienza-delle-costruzioni': catCostruzioni };
  const env = {
    COMPATIBILITA_TEMPI: 0.05,
    ASSETS: { fetch: async (r) => { const s = new URL(r.url).pathname.split('/').pop().replace('.json', ''); return cataloghi[s] ? Response.json(cataloghi[s]) : new Response('no', { status: 404 }); } },
    AI: { run: async (modello, input) => { modelli.push({ modello, input }); return risposta(modello, input, modelli.length); } },
  };
  const h = {
    aDO: async (_env, percorso, dati) => { chiamate.push({ percorso, dati }); return { ok: true, rimasti: 3 }; },
    json: (dati, status = 200, headers) => Response.json(dati, { status, headers }),
    utenteCollegato: async () => null, catalogoDomande: async () => ({}),
  };
  const req = new Request('https://esempio.test/api/compatibilita/confronta', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ materia, testo }) });
  const res = await gestisciCompatibilita(req, env, { waitUntil: (p) => attese.push(p) }, '/api/compatibilita/confronta', h);
  const corpo = await res.text();
  await Promise.all(attese);
  return { res, modelli, chiamate, eventi: corpo.trim().split('\n').filter(Boolean).map((r) => JSON.parse(r)) };
}
const programmaMisto = 'Programma del corso\n- Calcolo delle reazioni vincolari\n- Travature reticolari\n- Teoria della linea elastica\n- Taglio e formula di Jourawski\n- Legame costitutivo dei materiali elastici\n- Fondazioni su pali';

test('le voci non coperte che stanno in una materia vicina portano la materia, il link e la copertura delle due insieme', async () => {
  // Il modello trova in Scienza delle costruzioni anche la voce che il nome da solo non trova (legame costitutivo).
  const risposta = (_m, input) => {
    const altra = input.messages[0].content.includes('di Scienza delle costruzioni.');
    const voci = [...input.messages[1].content.matchAll(/^(\d+)\. (.*)$/gm)];
    return { response: `${voci.map(([, id, t]) => `${id}|T|${altra && /costitutivo/.test(t) ? 'A3' : altra && /linea elastica/.test(t) ? 'A1' : '-'}|-|-|${t}`).join('\n')}\nFINE_CONFRONTO` };
  };
  const { eventi, chiamate } = await conAltreMaterie(risposta, programmaMisto);
  assert.ok(eventi.some((e) => e.fase === 'altre-materie'));
  const esito = eventi.at(-1).fine;
  const per = Object.fromEntries(esito.richieste.map((r) => [r.testo, r]));
  assert.equal(per['Calcolo delle reazioni vincolari'].livello, 'stesso');
  assert.equal(per['Calcolo delle reazioni vincolari'].altrove, undefined);
  assert.equal(per['Teoria della linea elastica'].altrove.materia, 'scienza-delle-costruzioni');
  assert.equal(per['Teoria della linea elastica'].altrove.titolo, 'Scienza delle costruzioni');
  assert.match(per['Teoria della linea elastica'].altrove.link, /^\/scienza-delle-costruzioni\/linea-elastica\/teoria/);
  assert.equal(per['Taglio e formula di Jourawski'].altrove.livello, 'stesso');
  assert.equal(per['Legame costitutivo dei materiali elastici'].altrove.materia, 'scienza-delle-costruzioni');
  assert.equal(per['Fondazioni su pali'].altrove, undefined, 'una voce che non è in nessuna materia resta scoperta');
  assert.deepEqual(esito.altre, [{ materia: 'scienza-delle-costruzioni', titolo: 'Scienza delle costruzioni', richieste: 3 }]);
  assert.equal(esito.compatibilita, 33);
  assert.ok(esito.insieme > 75 && esito.insieme < 100, `insieme ${esito.insieme}`);
  const salvato = JSON.parse(chiamate.find((c) => c.percorso === '/comp-compito-esito').dati.esito);
  assert.equal(salvato.filter((r) => r.x === 'scienza-delle-costruzioni').length, 3);
});

test('se il modello non risponde per la materia vicina, resta solo ciò che ha lo stesso nome', async () => {
  const risposta = (_m, input) => {
    if (input.messages[0].content.includes('di Scienza delle costruzioni.')) return new Promise(() => {});
    return { response: `${[...input.messages[1].content.matchAll(/^(\d+)\. /gm)].map(([, id]) => `${id}|T|-|-|-|Voce ${id}`).join('\n')}\nFINE_CONFRONTO` };
  };
  const inizio = Date.now();
  const { eventi } = await conAltreMaterie(risposta, programmaMisto);
  assert.ok(Date.now() - inizio < 6000);
  const esito = eventi.at(-1).fine;
  const altrove = esito.richieste.filter((r) => r.altrove).map((r) => r.testo);
  // «Teoria della linea elastica» somiglia al capitolo «Linea elastica», ma senza il modello una somiglianza non basta.
  assert.deepEqual(altrove, ['Taglio e formula di Jourawski']);
});

test('un documento tutto coperto non cerca nelle altre materie', async () => {
  const { eventi, modelli } = await conAltreMaterie((_m, input) => ({ response: `${[...input.messages[1].content.matchAll(/^(\d+)\. /gm)].map(([, id]) => `${id}|T|A1|-|-|Voce ${id}`).join('\n')}\nFINE_CONFRONTO` }), 'Programma\n- Calcolo delle reazioni vincolari\n- Travature reticolari\n- Metodo dei nodi');
  const esito = eventi.at(-1).fine;
  assert.equal(esito.altre, undefined);
  assert.equal(esito.insieme, undefined);
  assert.ok(modelli.every((x) => !x.input.messages[0].content.includes('di Scienza delle costruzioni.')));
});
