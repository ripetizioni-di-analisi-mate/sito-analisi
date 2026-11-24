// Genera, dopo la build, le versioni "vetrina" delle pagine a pagamento:
//  - teoria: visibili i primi due paragrafi, poi un riquadro con i titoli dei paragrafi che mancano,
//    che cosa c'è ancora, prezzo e schede gratuite;
//  - esercizi da fare: traccia visibile, soluzione sostituita dall'invito.
//  - schede svolte riservate: titolo, teoria usata e tracce visibili, al posto di ogni
//    svolgimento una riga che rimanda all'accesso completo, in fondo il riquadro di accesso
//    (la fine della traccia è segnata da src/plugins/remark-tracce.mjs).
// Il Worker serve queste varianti a chi non ha l'accesso.
// Le materie a pagamento sono quelle elencate in src/data/prezzi.json.
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { MATERIE_ES, ARGOMENTI_ES } from '../src/data/materie-es.ts';
import { SCHEDE_LIBERE, schedeLibere } from '../src/data/schede-libere.mjs';
import { MATERIE_CON_ACCOUNT, SEZIONI_FORMULARIO_LIBERE, conAccount } from '../src/data/con-account.mjs';

const A_PAGAMENTO = Object.keys(JSON.parse(readFileSync(new URL('../src/data/prezzi.json', import.meta.url), 'utf8')));
const DIST = new URL('../dist', import.meta.url).pathname;
const PREZZI = JSON.parse(readFileSync(new URL('../src/data/prezzi.json', import.meta.url), 'utf8'));
// Nomi brevi delle materie ("Analisi 1"), letti dai file dei dati senza importare TypeScript.
function nomiBrevi(file, re) {
  const testo = readFileSync(new URL(file, import.meta.url), 'utf8');
  return Object.fromEntries([...testo.matchAll(re)].map((m) => [m[1], m[2]]));
}
const BREVE_IT = nomiBrevi('../src/data/materie.ts', /slug: '([a-z0-9-]+)',(?:\s*[a-z]+: '[^']*',)*?\s*breve: '([^']*)'/g);
// Nomi completi delle materie (riquadro delle schede) e nomi brevi degli argomenti (link alle schede gratuite),
// materia per materia, perché lo stesso argomento (per esempio "derivate") compare in più materie.
function perMateria(file, inizio, campoTitolo, voceArgomento) {
  const testo = readFileSync(new URL(file, import.meta.url), 'utf8');
  const pezzi = testo.split(inizio).slice(1);
  const titoli = {}, argomenti = {};
  for (let k = 0; k < pezzi.length; k += 2) {
    const [slug, corpo] = [pezzi[k], pezzi[k + 1]];
    titoli[slug] = corpo.match(campoTitolo)?.[1];
    argomenti[slug] = Object.fromEntries([...corpo.matchAll(voceArgomento)].map((m) => [m[1], m[2]]));
  }
  return { titoli, argomenti };
}
const DATI_IT = perMateria('../src/data/materie.ts', /^ {4}slug: '([a-z0-9-]+)',$/m, /^ {4}titolo: '([^']*)'/m, /\{ slug: '([a-z0-9-]+)', titolo: '[^']*', breve: '([^']*)' \}/g);
const DATI_EN = perMateria('../src/data/materie-en.ts', /^ {2}'?([a-z0-9-]+)'?: \{$/m, /^ {4}titolo: '([^']*)'/m, /^ {6}'?([a-z0-9-]+)'?: \{ titolo: '[^']*', breve: '([^']*)' \}/gm);
const BREVE_EN = nomiBrevi('../src/data/materie-en.ts', /^ {2}'?([a-z0-9-]+)'?: \{\s*titolo: '[^']*',\s*breve: '([^']*)'/gm);
const contaPagine = (cartella) => (existsSync(cartella) ? readdirSync(cartella).filter((f) => /^\d+\.html$/.test(f)).length : 0);
// Testo del titolo di un paragrafo: si tiene l'HTML interno dell'<h2> (anche le formule), senza l'eventuale ancora.
const titoloH2 = (html, da) => html.slice(html.indexOf('>', da) + 1, html.indexOf('</h2>', da)).replace(/<a class="ancora"[\s\S]*?<\/a>/g, '').trim();

// Sostituisce i blocchi <details> "Mostra soluzione" rispettando l'annidamento.
function senzaSoluzioni(html, invito) {
  let out = '', i = 0;
  while (true) {
    const inizio = html.indexOf('<details class="blocco blocco-soluzione"', i);
    if (inizio === -1) { out += html.slice(i); break; }
    // chiusura bilanciata del details
    let p = inizio, profondita = 0, fine = -1;
    while (p < html.length) {
      const ap = html.indexOf('<details', p);
      const ch = html.indexOf('</details>', p);
      if (ch === -1) break;
      if (ap !== -1 && ap < ch) { profondita++; p = ap + 8; }
      else { profondita--; p = ch + 10; if (profondita === 0) { fine = p; break; } }
    }
    if (fine === -1) { out += html.slice(i); break; }
    out += html.slice(i, inizio) + invito;
    i = fine;
  }
  return out;
}

// Sostituisce il blocco <details> della dimostrazione (ce n'è al massimo uno per pagina singola).
function senzaDimostrazione(html, invito) {
  const inizio = html.indexOf('<details class="blocco blocco-dimostrazione"');
  if (inizio === -1) return html;
  let p = inizio, profondita = 0;
  while (p < html.length) {
    const ap = html.indexOf('<details', p);
    const ch = html.indexOf('</details>', p);
    if (ch === -1) return html;
    if (ap !== -1 && ap < ch) { profondita++; p = ap + 8; }
    else { profondita--; p = ch + 10; if (profondita === 0) return html.slice(0, inizio) + invito + html.slice(p); }
  }
  return html;
}

// Fine del <div> che si apre in posizione `da`, contando i <div> annidati.
function fineDiv(html, da) {
  let p = da, profondita = 0;
  while (p < html.length) {
    const ap = html.indexOf('<div', p);
    const ch = html.indexOf('</div>', p);
    if (ch === -1) return -1;
    if (ap !== -1 && ap < ch) { profondita++; p = ap + 4; } else { profondita--; p = ch + 6; if (profondita === 0) return ch; }
  }
  return -1;
}
const SEGNO_TRACCIA = '<span class="fine-traccia" hidden></span>';

// Testi delle vetrine in ogni lingua del sito (l'italiano alla radice, le altre sotto /<lingua>).
const NOMI_ES = Object.fromEntries(Object.entries(MATERIE_ES).map(([slug, [nome]]) => [slug, nome]));
const LINGUE = [
  { pref: '', sblocca: 'Sblocca ora',
    breve: BREVE_IT, nomi: DATI_IT.titoli, argomenti: DATI_IT.argomenti, fine: 'Fine dell’anteprima gratuita',
    titolo: (n) => (n === 1 ? 'La teoria di questo argomento continua con un altro paragrafo' : `La teoria di questo argomento continua con altri ${n} paragrafi`),
    resto: (schede, esercizi) => `Nell’accesso completo si trovano anche ${schede === 1 ? 'l’altra scheda svolta' : `le altre ${schede} schede svolte`} di questo argomento e le soluzioni dei ${esercizi} esercizi da fare.`,
    restoAnteprimaUnica: (schede) => `L’accesso completo include ${schede === 1 ? 'la scheda svolta' : `le ${schede} schede svolte`} di questo argomento.`,
    tasto: (nome, prezzo) => `Sblocca ${nome} · ${prezzo} €`,
    gratis: (url) => `Le prime ${SCHEDE_LIBERE} schede svolte di questo argomento sono gratuite e si trovano negli <a href="${url}">esercizi svolti</a>.`,
    riservata: 'Soluzione riservata a chi ha sbloccato la materia.', soluzione: 'La soluzione completa di questo esercizio è nella versione sbloccata.',
    svolgimento: 'Svolgimento passo per passo nell’accesso completo.',
    dimostrazione: 'La dimostrazione è riservata a chi ha sbloccato la materia.',
    schedaSopra: 'Scheda dell’accesso completo',
    schedaTitolo: (titolo) => `Le tracce sono libere, gli svolgimenti sono riservati a chi ha sbloccato ${titolo}`,
    schedaResto: (schede, argomenti, esercizi) => `Le prime ${SCHEDE_LIBERE} schede di ogni argomento sono gratuite. Con l’accesso completo ci sono tutte le ${schede} schede svolte, la teoria completa ${argomenti === 1 ? 'dell’argomento' : `dei ${argomenti} argomenti`} e le soluzioni dei ${esercizi} esercizi da fare.`,
    schedaRestoAnteprimaUnica: (schede, argomenti) => `L’accesso completo include tutte le ${schede} schede svolte, la teoria dei ${argomenti} argomenti e tutte le domande a tempo.`,
    schedaGratis: (arg) => `Scheda completa gratuita di ${arg} →`,
    schedeGratis: (arg) => `Le schede gratuite di ${arg} →`,
    acc: { sblocca: 'Crea un account gratuito',
      resto: (schede, esercizi) => `Con un account gratuito si leggono anche gli altri paragrafi, ${schede === 1 ? 'l’altra scheda svolta' : `le altre ${schede} schede svolte`} di questo argomento e le soluzioni dei ${esercizi} esercizi da fare.`,
      tasto: () => 'Crea un account gratuito',
      riservata: 'Soluzione visibile con un account gratuito.', soluzione: 'La soluzione completa di questo esercizio si vede con un account gratuito.',
      svolgimento: 'Svolgimento passo per passo con un account gratuito.',
      dimostrazione: 'La dimostrazione si legge con un account gratuito.',
      schedaSopra: 'Gratis con un account',
      schedaTitolo: (titolo) => `Le tracce sono libere; gli svolgimenti di ${titolo} si leggono con un account gratuito`,
      schedaResto: (schede, argomenti, esercizi) => `Le prime ${SCHEDE_LIBERE} schede di ogni argomento si aprono subito. Con l’account gratuito ci sono tutte le ${schede} schede svolte, la teoria completa dei ${argomenti} argomenti e le soluzioni dei ${esercizi} esercizi da fare.`,
      gia: (href) => `<p class="velo-gratis">Hai già un account? <a href="${href}">Accedi</a></p>` },
  },
  { pref: '/en', sblocca: 'Unlock now',
    breve: BREVE_EN, nomi: DATI_EN.titoli, argomenti: DATI_EN.argomenti, fine: 'End of the free preview',
    titolo: (n) => (n === 1 ? 'The theory of this topic continues with one more section' : `The theory of this topic continues with ${n} more sections`),
    resto: (schede, esercizi) => `Full access also includes the other ${schede} worked example${schede === 1 ? '' : 's'} of this topic and the solutions of the ${esercizi} practice exercises.`,
    restoAnteprimaUnica: (schede) => `Full access includes the ${schede === 1 ? 'worked sheet' : `${schede} worked sheets`} for this topic.`,
    tasto: (nome, prezzo) => `Unlock ${nome} · €${prezzo}`,
    gratis: (url) => `Read the first ${SCHEDE_LIBERE} <a href="${url}">worked examples</a> in this chapter for free.`,
    riservata: 'Solution available to those who have unlocked the subject.', soluzione: 'Full course access includes the worked solution to this exercise.',
    svolgimento: 'Step-by-step solution in full access.',
    dimostrazione: 'The proof is available to those who have unlocked the subject.',
    schedaSopra: 'Part of full access',
    schedaTitolo: (titolo) => `You can read the problems for free. Full access to ${titolo} includes the worked solutions.`,
    schedaResto: (schede, argomenti, esercizi) => `The first ${SCHEDE_LIBERE} worked examples of each topic are free. Full access includes all ${schede} worked examples, the complete theory of the ${argomenti} topic${argomenti === 1 ? '' : 's'} and the solutions of the ${esercizi} practice exercises.`,
    schedaRestoAnteprimaUnica: (schede, argomenti) => `Full access includes all ${schede} worked sheets, the theory for all ${argomenti} topics and all timed questions.`,
    schedaGratis: (arg) => `Free worked sheet for ${arg} →`,
    schedeGratis: (arg) => `Free worked examples on ${arg} →`,
    acc: { sblocca: 'Create a free account',
      resto: (schede, esercizi) => `With a free account you can also read the other sections, the other ${schede} worked example${schede === 1 ? '' : 's'} of this topic and the solutions of the ${esercizi} practice exercises.`,
      tasto: () => 'Create a free account',
      riservata: 'Solution available with a free account.', soluzione: 'The full solution of this exercise is available with a free account.',
      svolgimento: 'Step-by-step solution with a free account.',
      dimostrazione: 'The proof is available with a free account.',
      schedaSopra: 'Free with an account',
      schedaTitolo: (titolo) => `You can read the problems for free; the worked solutions of ${titolo} are available with a free account`,
      schedaResto: (schede, argomenti, esercizi) => `The first ${SCHEDE_LIBERE} worked examples of each topic are open. A free account gives you all ${schede} worked examples, the complete theory of the ${argomenti} topics and the solutions of the ${esercizi} practice exercises.`,
      gia: (href) => `<p class="velo-gratis">Already have an account? <a href="${href}">Log in</a></p>` },
  },
  { pref: '/es', sblocca: 'Acceso completo (compra en italiano)',
    breve: NOMI_ES, nomi: NOMI_ES,
    argomenti: Object.fromEntries(Object.keys(MATERIE_ES).map((slug) => [slug, ARGOMENTI_ES])),
    fine: 'Fin de la vista previa gratuita',
    titolo: (n) => n === 1 ? 'Queda un apartado de teoría' : `Quedan ${n} apartados de teoría`,
    resto: () => 'El acceso completo incluye la teoría de este tema y las soluciones de los ejercicios.',
    restoAnteprimaUnica: () => 'El acceso completo incluye los ejercicios resueltos de este tema.',
    tasto: (nombre, precio) => `Acceso a ${nombre} por ${precio} € (compra en italiano)`,
    gratis: (url) => `Puedes consultar las primeras fichas gratis en <a href="${url}">Ejercicios resueltos</a>.`,
    riservata: 'Solución incluida en el acceso completo.',
    soluzione: 'La solución de este ejercicio está incluida en el acceso completo.',
    svolgimento: 'Solución paso a paso incluida en el acceso completo.',
    dimostrazione: 'Demostración incluida en el acceso completo.',
    schedaSopra: 'Acceso completo',
    schedaTitolo: (nombre) => `Puedes leer los enunciados gratis. Las soluciones están incluidas en el acceso completo a ${nombre}.`,
    schedaResto: () => 'También tendrás acceso a la teoría del tema y a las soluciones de los ejercicios para practicar.',
    schedaRestoAnteprimaUnica: () => 'El acceso completo incluye la teoría y los ejercicios de este tema.',
    schedaGratis: (tema) => `Ficha gratuita de ${tema} →`,
    schedeGratis: (tema) => `Ejercicios resueltos gratuitos de ${tema} →` },

];
let L = LINGUE[0];
// Materie gratuite con account: il tasto porta all'iscrizione e, dopo, di nuovo alla pagina (`dopo`).
const linkAccedi = (T, pagina, nuovo = true) => `${T.pref}/accedi?${nuovo ? 'nuovo=1&' : ''}dopo=${encodeURIComponent(pagina)}`;
const linkSblocca = (materia, T = L, pagina = '') => T.gia ? linkAccedi(T, pagina)
  : T.pref === '/es' ? `/${materia}/sblocca?lingua=it` : `${T.pref}/${materia}/sblocca`;
const giaAccount = (T, pagina) => (T.gia ? T.gia(linkAccedi(T, pagina, false)) : '');
function invitoHtml(materia, cosa, T = L, pagina = '') {
  return `<div class="velo-blocco"><p>${cosa}</p><a class="bottone-sblocca" href="${linkSblocca(materia, T, pagina)}">${T.sblocca}</a>${giaAccount(T, pagina)}</div>`;
}

let teorie = 0, esercizi = 0, schedeVetrina = 0, voci = 0;
const problemi = [];
for (L of LINGUE) for (const materia of [...A_PAGAMENTO, ...MATERIE_CON_ACCOUNT]) {
  if (conAccount(materia) && !L.acc) continue;
  const T = conAccount(materia) ? { ...L, ...L.acc } : L;
  const base = join(DIST, T.pref, materia);
  if (!existsSync(base)) continue;
  // numeri della materia intera, per il riquadro delle schede bloccate
  const argomentiMateria = readdirSync(base).filter((a) => existsSync(join(base, a, 'teoria.html')));
  const totSchede = argomentiMateria.reduce((n, a) => n + contaPagine(join(base, a, 'esercizi-svolti')), 0);
  const totDaFare = argomentiMateria.reduce((n, a) => n + contaPagine(join(base, a, 'esercizi')), 0);
  const anteprimaUnica = argomentiMateria.some((a) => schedeLibere(materia, a) === 0);
  const argomentoGratis = anteprimaUnica && argomentiMateria.find((a) => schedeLibere(materia, a) > 0 && existsSync(join(base, a, 'esercizi-svolti', '1.html')));
  const linkSchedaGratis = argomentoGratis
    ? `<p class="velo-gratis"><a href="${T.pref}/${materia}/${argomentoGratis}/esercizi-svolti/1">${T.schedaGratis(T.argomenti[materia]?.[argomentoGratis] || argomentoGratis)}</a></p>`
    : '';
  for (const argomento of readdirSync(base)) {
    const cartella = join(base, argomento);
    if (!existsSync(join(cartella, 'teoria.html'))) continue;
    const dest = join(DIST, 'vetrine', T.pref, materia, argomento);
    const cartellaSv = join(cartella, 'esercizi-svolti');
    const libere = schedeLibere(materia, argomento);
    mkdirSync(join(dest, 'esercizi'), { recursive: true });

    // --- teoria a metà ---
    let t = readFileSync(join(cartella, 'teoria.html'), 'utf8');
    const posizioni = [...t.matchAll(/<h2 id="([^"]+)"/g)];
    if (posizioni.length >= 2) {
      // restano visibili solo i primi due paragrafi: un assaggio, non mezza dispensa
      const tenute = Math.min(2, posizioni.length - 1);
      const taglio = posizioni[tenute].index;
      // dopo il riquadro di fine anteprima restano «Segnala un errore» (se c'è) e i passi verso le altre pagine
      let coda = t.indexOf('<p class="segnala-errore"', taglio);
      if (coda === -1) coda = t.indexOf('<nav class="passi"', taglio);
      if (coda === -1) coda = t.indexOf('<script', taglio);
      const nascoste = posizioni.length - tenute;
      const voci = posizioni.slice(tenute).map((m2) => `<li>${titoloH2(t, m2.index)}</li>`).join('');
      const nSchede = contaPagine(cartellaSv);
      const schede = Math.max(0, nSchede - libere);
      const daFare = contaPagine(join(cartella, 'esercizi'));
      const nome = T.breve[materia] || materia;
      const resto = anteprimaUnica ? (schede ? T.restoAnteprimaUnica(schede) : '') : T.resto(schede, daFare);
      const schedeGratis = anteprimaUnica ? linkSchedaGratis
        : nSchede > 0 ? `<p class="velo-gratis">${T.gratis(`${T.pref}/${materia}/${argomento}/esercizi-svolti`)}</p>` : '';
      const invito = `<div class="velo-blocco fine-anteprima"><p class="velo-sopra">${T.fine}</p><p class="velo-titolo">${T.titolo(nascoste)}</p>`
        + `<ol class="velo-elenco" start="${tenute + 1}">${voci}</ol>`
        + (resto ? `<p>${resto}</p>` : '')
        + `<a class="bottone-sblocca" href="${linkSblocca(materia, T, `${T.pref}/${materia}/${argomento}/teoria`)}">${T.tasto(nome, PREZZI[materia])}</a>`
        + giaAccount(T, `${T.pref}/${materia}/${argomento}/teoria`)
        + schedeGratis
        + `</div>`;
      let vetrina = t.slice(0, taglio) + invito + t.slice(coda);
      // nel riquadro "In questa pagina" restano solo i paragrafi visibili
      const visibili = new Set(posizioni.slice(0, tenute).map((m2) => m2[1]));
      vetrina = vetrina.replace(/<li><a href="#([^"]+)">(.*?)<\/a><\/li>/g, (tutto, slug) => (visibili.has(slug) ? tutto : ''));
      writeFileSync(join(dest, 'teoria.html'), vetrina);
      teorie++;
    }

    // --- schede svolte oltre le gratuite: tracce visibili, svolgimenti tolti ---
    if (existsSync(cartellaSv)) {
      mkdirSync(join(dest, 'esercizi-svolti'), { recursive: true });
      for (const f of readdirSync(cartellaSv)) {
        if (!/^\d+\.html$/.test(f) || parseInt(f, 10) <= libere) continue;
        const h = readFileSync(join(cartellaSv, f), 'utf8');
        const apre = h.indexOf('<div class="testo-studio">');
        const chiude = apre === -1 ? -1 : fineDiv(h, apre);
        if (chiude === -1) { problemi.push(`${T.pref}/${materia}/${argomento}/esercizi-svolti/${f}: testo non trovato`); continue; }
        const dentro = h.slice(apre + '<div class="testo-studio">'.length, chiude);
        const parti = dentro.split(/(?=<h2 id=")/);
        let mancanti = 0;
        const ridotto = parti.map((x) => {
          if (!x.startsWith('<h2')) return x;
          const i = x.indexOf(SEGNO_TRACCIA);
          if (i === -1) { mancanti++; return x.replace(/(<\/h2>)[\s\S]*$/, `$1<p class="svolgimento-riservato">${T.svolgimento}</p>`); }
          return `${x.slice(0, i)}<p class="svolgimento-riservato">${T.svolgimento}</p>`;
        }).join('');
        if (mancanti) problemi.push(`${T.pref}/${materia}/${argomento}/esercizi-svolti/${f}: ${mancanti} esercizi senza segno di fine traccia (mostrato solo il titolo)`);
        const nomeArg = T.argomenti[materia]?.[argomento] || argomento;
        const resto = anteprimaUnica ? T.schedaRestoAnteprimaUnica(totSchede, argomentiMateria.length) : T.schedaResto(totSchede, argomentiMateria.length, totDaFare);
        const schedeGratis = anteprimaUnica ? linkSchedaGratis
          : `<p class="velo-gratis"><a href="${T.pref}/${materia}/${argomento}/esercizi-svolti/1">${T.schedeGratis(nomeArg)}</a></p>`;
        const riquadro = `<div class="velo-blocco fine-anteprima velo-scheda"><p class="velo-sopra">${T.schedaSopra}</p>`
          + `<p class="velo-titolo">${T.schedaTitolo(T.nomi[materia] || materia)}</p>`
          + `<p>${resto}</p>`
          + `<a class="bottone-sblocca" href="${linkSblocca(materia, T, `${T.pref}/${materia}/${argomento}/esercizi-svolti/${parseInt(f, 10)}`)}">${T.tasto(T.breve[materia] || materia, PREZZI[materia])}</a>`
          + giaAccount(T, `${T.pref}/${materia}/${argomento}/esercizi-svolti/${parseInt(f, 10)}`)
          + schedeGratis
          + `</div>`;
        const vetrina = `${h.slice(0, apre)}<div class="testo-studio">${ridotto}</div>${riquadro}${h.slice(chiude + 6)}`;
        writeFileSync(join(dest, 'esercizi-svolti', f), vetrina);
        schedeVetrina++;
      }
    }

    // --- pagine singole dei teoremi e delle definizioni: enunciato in chiaro, dimostrazione tolta ---
    // (per ogni voce c'è una vetrina, anche senza dimostrazione, così il Worker ha sempre il file da servire)
    const cartellaVoci = join(cartella, 'teoria');
    if (existsSync(cartellaVoci)) {
      mkdirSync(join(dest, 'teoria'), { recursive: true });
      for (const f of readdirSync(cartellaVoci)) {
        if (!f.endsWith('.html')) continue;
        const h = readFileSync(join(cartellaVoci, f), 'utf8');
        writeFileSync(join(dest, 'teoria', f), senzaDimostrazione(h, invitoHtml(materia, T.dimostrazione, T, `${T.pref}/${materia}/${argomento}/teoria/${f.replace(/\.html$/, '')}`)));
        voci++;
      }
    }

    // --- elenco degli esercizi da fare: tracce visibili, soluzioni tolte ---
    if (existsSync(join(cartella, 'esercizi.html'))) {
      const el = readFileSync(join(cartella, 'esercizi.html'), 'utf8');
      writeFileSync(join(dest, 'esercizi.html'), senzaSoluzioni(el, `<p class="soluzione-riservata">${T.riservata}</p>`));
    }

    // --- esercizi da fare: soluzioni oscurate ---
    const cartellaEs = join(cartella, 'esercizi');
    if (existsSync(cartellaEs)) {
      for (const f of readdirSync(cartellaEs)) {
        if (!/^\d+\.html$/.test(f)) continue;
        const e = readFileSync(join(cartellaEs, f), 'utf8');
        writeFileSync(join(dest, 'esercizi', f), senzaSoluzioni(e, invitoHtml(materia, T.soluzione, T, `${T.pref}/${materia}/${argomento}/esercizi/${parseInt(f, 10)}`)));
        esercizi++;
      }
    }
  }
}
// --- formulari (24/11/2026, «porta socchiusa»): agli ospiti le prime sezioni, poi l'invito all'account gratuito ---
let formulari = 0;
const TESTI_FORMULARIO = {
  '': { fine: 'Fine dell’anteprima gratuita', titolo: (n) => `Il formulario continua con altre ${n} sezioni`,
    testo: 'Con un account gratuito si legge tutto il formulario e si scarica il PDF.', tasto: 'Crea un account gratuito', gia: 'Hai già un account?', accedi: 'Accedi' },
  '/en': { fine: 'End of the free preview', titolo: (n) => `The formula sheet continues with ${n} more sections`,
    testo: 'With a free account you can read the whole formula sheet and download the PDF.', tasto: 'Create a free account', gia: 'Already have an account?', accedi: 'Log in' },
};
for (const [pref, F] of Object.entries(TESTI_FORMULARIO)) {
  const cartella = join(DIST, pref, 'formulari');
  if (!existsSync(cartella)) continue;
  for (const f of readdirSync(cartella)) {
    if (!f.endsWith('.html') || f === 'index.html') continue;
    const h = readFileSync(join(cartella, f), 'utf8');
    const segno = '<div class="testo-studio testo-formulario">';
    const apre = h.indexOf(segno);
    const chiude = apre === -1 ? -1 : fineDiv(h, apre);
    if (chiude === -1) { problemi.push(`${pref}/formulari/${f}: testo non trovato`); continue; }
    const dentro = h.slice(apre + segno.length, chiude);
    const posizioni = [...dentro.matchAll(/<h2 id="([^"]+)"/g)];
    if (posizioni.length <= SEZIONI_FORMULARIO_LIBERE) continue;
    const pagina = `${pref}/formulari/${f.replace(/\.html$/, '')}`;
    const nascoste = posizioni.slice(SEZIONI_FORMULARIO_LIBERE);
    const voci = nascoste.map((m2) => `<li>${titoloH2(dentro, m2.index)}</li>`).join('');
    const invito = `<div class="velo-blocco fine-anteprima" id="continua"><p class="velo-sopra">${F.fine}</p><p class="velo-titolo">${F.titolo(nascoste.length)}</p>`
      + `<ol class="velo-elenco" start="${SEZIONI_FORMULARIO_LIBERE + 1}">${voci}</ol><p>${F.testo}</p>`
      + `<a class="bottone-sblocca" href="${pref}/accedi?nuovo=1&dopo=${encodeURIComponent(pagina)}">${F.tasto}</a>`
      + `<p class="velo-gratis">${F.gia} <a href="${pref}/accedi?dopo=${encodeURIComponent(pagina)}">${F.accedi}</a></p></div>`;
    let vetrina = h.slice(0, apre) + segno + dentro.slice(0, nascoste[0].index) + '</div>' + invito + h.slice(chiude + 6);
    // nell'indice in cima le sezioni nascoste portano al riquadro dell'invito
    const nascosti = new Set(nascoste.map((m2) => m2[1]));
    vetrina = vetrina.replace(/<li><a href="#([^"]+)">/g, (tutto, slug) => (nascosti.has(slug) ? '<li><a href="#continua">' : tutto));
    mkdirSync(join(DIST, 'vetrine', pref, 'formulari'), { recursive: true });
    writeFileSync(join(DIST, 'vetrine', pref, 'formulari', f), vetrina);
    formulari++;
  }
}
console.log(`vetrine: ${teorie} teorie, ${voci} voci singole, ${schedeVetrina} schede svolte, ${esercizi} esercizi, ${formulari} formulari`);
for (const p of problemi) console.warn(`vetrine: ${p}`);
