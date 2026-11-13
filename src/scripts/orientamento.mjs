import katex from 'katex';
import { VERSIONE_STUDIO, PROFILI_STUDIO, COMPETENZE_STUDIO } from '../data/orientamento-studio.mjs';
import { domandeBaseStudio, approfondimentiStudio, valutaStudio } from '../lib/orientamento-studio.mjs';
import { VERSIONE_UNIVERSITA, AREE_UNIVERSITA, SCALA_UNIVERSITA } from '../data/orientamento-universita.mjs';
import { domandeBaseUniversita, approfondimentiUniversita, valutaUniversita } from '../lib/orientamento-universita.mjs';
import { elemento as el, collegamento as link, bottone, apiOrientamento, verificaGmOrientamento, improntaAccount, chiaveBozza, leggiBozza, scriviBozza, rimuoviBozza } from './orientamento-comune.mjs';

// Il testo arriva solo dalla banca editoriale: HTML e comandi KaTeX attendibili sono disabilitati.
function matematica(parent, testo) {
  const s = String(testo ?? '');
  const re = /\$\$([\s\S]+?)\$\$|\$([^$]+?)\$/g;
  let fine = 0, m;
  while ((m = re.exec(s))) {
    parent.append(document.createTextNode(s.slice(fine, m.index)));
    const span = el('span');
    span.innerHTML = katex.renderToString(m[1] ?? m[2], { displayMode: Boolean(m[1]), throwOnError: false, trust: false, strict: 'ignore', output: 'htmlAndMathml' });
    parent.append(span); fine = re.lastIndex;
  }
  parent.append(document.createTextNode(s.slice(fine)));
  return parent;
}

const stati = { 'da-verificare': 'Da verificare', 'da-studiare': 'Da studiare', 'da-riprendere': 'Da riprendere', 'da-consolidare': 'Da consolidare', 'riscontri-positivi': 'Riscontri positivi' };
const nomiBlocchi = { interessi: 'Attività e interessi', studio: 'Attività di studio che ti interessano', priorita: 'Le tue priorità', approfondimento: 'Approfondimento' };
const scalaInteresse = SCALA_UNIVERSITA.map((r) => [r.valore, r.etichetta]);

function figuraDi(d) {
  if (!d?.figura) return null;
  const f = d.figura, fig = el('figure', null, 'ori-figura');
  const ns = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(ns, 'svg');
  svg.setAttribute('viewBox', '0 0 440 260'); svg.setAttribute('role', 'img');
  svg.setAttribute('aria-label', f.titolo || (f.tipo === 'trave' ? 'Trave con vincoli e carico concentrato' : 'Grafico delle grandezze del quesito'));
  const add = (tag, props, text) => { const n = document.createElementNS(ns, tag); for (const [k, v] of Object.entries(props)) n.setAttribute(k, String(v)); if (text !== undefined) n.textContent = String(text); svg.append(n); return n; };
  const line = (x1, y1, x2, y2, colore = '#23302e', width = 2) => add('line', { x1, y1, x2, y2, stroke: colore, 'stroke-width': width });
  const text = (x, y, t, anchor = 'middle') => add('text', { x, y, 'text-anchor': anchor, 'font-size': 15, fill: '#23302e', 'font-family': 'sans-serif' }, t);
  if (f.tipo === 'grafico' && Array.isArray(f.punti) && f.punti.length > 1) {
    const xs = f.punti.map((p) => p[0]), ys = f.punti.map((p) => p[1]);
    if (![...xs, ...ys].every(Number.isFinite)) return null;
    const xmax = Math.max(...xs, 1), ymax = Math.max(...ys, 1);
    const X = (x) => 65 + 290 * x / xmax, Y = (y) => 205 - 150 * y / ymax;
    line(65, 205, 393, 205); line(65, 205, 65, 25);
    add('path', { d: 'M386 200l8 5-8 5 M60 33l5-8 5 8', fill: 'none', stroke: '#23302e', 'stroke-width': 2 });
    add('polyline', { points: f.punti.map(([x, y]) => `${X(x)},${Y(y)}`).join(' '), fill: 'none', stroke: '#2f6f68', 'stroke-width': 3 });
    for (let i = 0; i < f.punti.length; i++) {
      const [x, y] = f.punti[i];
      if (x) { line(X(x), 205, X(x), 211); text(X(x), 230, x); }
      if (y) { line(59, Y(y), 65, Y(y)); text(50, Y(y) + 5, y, 'end'); }
      if (x && y) add('path', { d: `M${X(x)} 205V${Y(y)}H65`, fill: 'none', stroke: '#a5b6ad', 'stroke-dasharray': '4 4' });
    }
    text(52, 224, '0'); text(400, 238, f.xLabel || 'x', 'end'); text(58, 19, f.yLabel || 'y', 'start');
  } else if (f.tipo === 'trave' && [f.lunghezza, f.forza, f.posizione].every(Number.isFinite) && f.lunghezza > 0 && f.posizione >= 0 && f.posizione <= f.lunghezza) {
    const x = 65 + 300 * f.posizione / f.lunghezza;
    line(65, 125, 365, 125, '#23302e', 4);
    add('path', { d: 'M65 127l-14 24h28Z M365 127l-14 24h28Z', fill: '#eef3ef', stroke: '#23302e', 'stroke-width': 2 });
    add('circle', { cx: 357, cy: 156, r: 4, fill: 'none', stroke: '#23302e' }); add('circle', { cx: 373, cy: 156, r: 4, fill: 'none', stroke: '#23302e' });
    line(x, 48, x, 114, '#2f6f68', 2.5); add('path', { d: `M${x - 6} 104l6 11 6-11`, fill: 'none', stroke: '#2f6f68', 'stroke-width': 2.5 });
    text(x, 32, `${f.forza} kN`); text(45, 121, 'A'); text(390, 121, 'B');
    line(65, 188, x, 188, '#59645f', 1); line(65, 181, 65, 195, '#59645f', 1); line(x, 181, x, 195, '#59645f', 1); text((65 + x) / 2, 180, `${f.posizione} m`);
    line(65, 225, 365, 225, '#59645f', 1); line(65, 218, 65, 232, '#59645f', 1); line(365, 218, 365, 232, '#59645f', 1); text(215, 218, `${f.lunghezza} m`);
  } else return null;
  fig.append(svg);
  if (f.titolo) fig.append(el('figcaption', f.titolo));
  return fig;
}

function listaMateriali(materiali = []) {
  const lista = el('ul', null, 'ori-materiali');
  for (const m of materiali) { const li = el('li'); li.append(link(m.titolo, m.url)); lista.append(li); }
  return lista;
}

for (const root of document.querySelectorAll('[data-orientamento-test]')) avvia(root);

async function avvia(root) {
  const tipo = root.dataset.orientamentoTest, studio = tipo === 'studio';
  const versione = studio ? VERSIONE_STUDIO : VERSIONE_UNIVERSITA;
  const q = (nome) => root.querySelector(`[data-ori-${nome}]`);
  const config = q('configurazione'), sessione = q('sessione'), risultato = q('risultato');
  const parametri = new URLSearchParams(location.search);
  let io = null, accountAtteso = '', chiave = '', bozza = null, stato = null, base = [], extra = [], indice = 0, esitoAttuale = null;
  let archivioAttuale = null, chiaveDaRiprendere = '';
  let collegamentoVerificato = false, bozzaConservata = false;
  let avviato = false, verificaInCorso = null, vistaSospesa = null;
  const fallisce = (error) => { q('errore').textContent = error.message || 'Il test non è disponibile. Ricarica la pagina.'; };
  const accessoConsentito = () => collegamentoVerificato && io?.gm === true;

  function sospendiAccesso() {
    collegamentoVerificato = false;
    if (!vistaSospesa) vistaSospesa = [config, sessione, risultato, q('ripresa'), q('gestione-locale')].map((el) => [el, el.hidden]);
    for (const [el] of vistaSospesa) el.hidden = true;
  }
  function bloccaAccesso(error) {
    sospendiAccesso(); io = null;
    q('caricamento').hidden = true; fallisce(error);
    q('errore').append(document.createTextNode(' '), bottone('Riprova il collegamento', aggiornaCollegamento, 'ori-testo-bottone'));
    if (error.status === 401) q('errore').append(document.createTextNode(' '), link('Accedi con l’account GM', `/accedi?dopo=${encodeURIComponent(location.pathname + location.search)}`));
  }
  async function controllaAccesso() {
    if (verificaInCorso) return verificaInCorso;
    sospendiAccesso();
    verificaInCorso = (async () => {
      try {
        const nuovaIdentita = await verificaGmOrientamento(accountAtteso);
        const impronta = await improntaAccount(nuovaIdentita);
        io = nuovaIdentita; accountAtteso = impronta; collegamentoVerificato = true;
        for (const [el, hidden] of vistaSospesa || []) el.hidden = hidden;
        vistaSospesa = null; q('errore').replaceChildren();
        return true;
      } catch (error) { bloccaAccesso(error); return false; }
      finally { verificaInCorso = null; }
    })();
    return verificaInCorso;
  }

  function configuraPerimetro() {
    if (!accessoConsentito() || !studio) return;
    const materia = config.elements.materia.value;
    q('perimetro').hidden = !materia;
    q('competenze').replaceChildren();
    if (!materia) return;
    const obiettivo = config.elements.obiettivo.value;
    const domande = domandeBaseStudio(materia, obiettivo);
    q('perimetro-testo').textContent = `${domande.length} quesiti iniziali, con eventuali domande di conferma. Sono verificate queste competenze; il risultato non riguarda tutto il programma.`;
    for (const id of new Set(domande.map((d) => d.competenza))) q('competenze').append(el('li', COMPETENZE_STUDIO[id].titolo));
  }

  function selezionaBase() {
    base = studio ? domandeBaseStudio(stato.materia, stato.obiettivo) : domandeBaseUniversita();
  }
  function risposteBase() { return Object.fromEntries(base.filter((d) => Object.hasOwn(stato.risposte, d.id)).map((d) => [d.id, stato.risposte[d.id]])); }
  function calcolaExtra() {
    if (!base.every((d) => Object.hasOwn(stato.risposte, d.id))) return [];
    return studio ? approfondimentiStudio(stato.materia, stato.obiettivo, risposteBase()) : approfondimentiUniversita(risposteBase(), stato.areaScelta || undefined);
  }
  function aggiornaExtra() {
    extra = studio || stato.approfondito ? calcolaExtra() : [];
    const ammessi = new Set([...base, ...extra].map((d) => d.id));
    for (const id of Object.keys(stato.risposte)) if (!ammessi.has(id)) delete stato.risposte[id];
  }
  function domande() { return [...base, ...extra]; }
  function persisti() {
    if (!accessoConsentito()) return false;
    if (stato) stato.indice = indice;
    bozzaConservata = Boolean(stato?.conservaLocale && chiave && scriviBozza(chiave, stato));
    if (bozzaConservata) chiaveDaRiprendere = chiave;
    q('salvataggio-locale').textContent = bozzaConservata ? 'Risposte conservate su questo browser per 30 giorni dall’ultima attività.' : 'Le risposte restano in questa pagina. “Salva e interrompi” le conserva su questo dispositivo.';
    if (q('gestione-locale')) {
      q('gestione-locale').hidden = !bozzaConservata;
      if (bozzaConservata) { q('elimina-locale').hidden = false; q('locale-stato').textContent = ''; }
    }
    return bozzaConservata;
  }
  function percorsoLocale() {
    const url = new URL(location.href);
    url.searchParams.delete('risultato'); url.searchParams.delete('riprendi');
    if (studio && stato?.materia) url.searchParams.set('materia', stato.materia);
    history.replaceState(null, '', url.pathname + url.search + url.hash);
  }
  async function aggiornaCollegamento() {
    if (!avviato) return inizializza();
    await controllaAccesso();
  }
  function valuta() {
    return studio ? valutaStudio(stato.materia, stato.obiettivo, stato.risposte) : valutaUniversita({ risposte: stato.risposte, areaScelta: stato.areaScelta || undefined });
  }
  function verificaBozza(d) {
    if (!d || d.tipo !== tipo || d.versione !== versione || !d.risposte || typeof d.risposte !== 'object' || Array.isArray(d.risposte)) return false;
    if (d.indice !== undefined && (!Number.isInteger(d.indice) || d.indice < 0 || d.indice > 50)) return false;
    try {
      if (studio) valutaStudio(d.materia, d.obiettivo, d.risposte);
      else {
        if (d.areaScelta && !AREE_UNIVERSITA.some((a) => a.id === d.areaScelta)) return false;
        const iniziali = domandeBaseUniversita();
        const risposteIniziali = Object.fromEntries(iniziali.filter((q) => Object.hasOwn(d.risposte, q.id)).map((q) => [q.id, d.risposte[q.id]]));
        const altre = d.approfondito === true ? approfondimentiUniversita(risposteIniziali, d.areaScelta || undefined) : [];
        const ammesse = new Set([...iniziali, ...altre].map((q) => q.id));
        const valori = new Set(SCALA_UNIVERSITA.map((r) => r.valore));
        if (!Object.entries(d.risposte).every(([id, r]) => ammesse.has(id) && valori.has(r))) return false;
      }
      return true;
    } catch { return false; }
  }
  function ripristina(d) {
    if (!accessoConsentito()) return;
    stato = { ...d, conservaLocale: d.conservaLocale !== false, risposte: { ...d.risposte } }; archivioAttuale = null;
    selezionaBase(); aggiornaExtra();
    indice = Math.max(0, Math.min(Number(d.indice) || 0, domande().length - 1));
    q('ripresa').hidden = true; config.hidden = true;
    if (stato.finito && domande().every((x) => Object.hasOwn(stato.risposte, x.id))) mostraRisultato();
    else mostraDomanda();
  }

  function mostraDomanda(focus = true) {
    if (!accessoConsentito()) return;
    risultato.hidden = true; sessione.hidden = false; config.hidden = true; q('ripresa').hidden = true;
    const tutte = domande(), d = tutte[indice];
    if (!d) return;
    q('domanda-errore').textContent = '';
    q('aggiorna-risultato').hidden = !stato.rivedi;
    aggiornaAvanzamento();
    q('blocco').textContent = studio ? COMPETENZE_STUDIO[d.competenza].titolo : nomiBlocchi[d.blocco] || 'Le tue preferenze';
    q('domanda').replaceChildren(); matematica(q('domanda'), d.testo);
    q('figura').replaceChildren(); const fig = figuraDi(d); if (fig) q('figura').append(fig);
    q('scelte').replaceChildren();
    const scelte = studio ? [...d.scelte.map((s, i) => [i, s]), ['non-so', 'Non so risolverlo'], ['non-studiato', 'Non l’ho ancora studiato']] : scalaInteresse;
    for (const [valore, testo] of scelte) {
      const neutra = typeof valore === 'string';
      const label = el('label', null, `ori-scelta${neutra ? ' ori-scelta-neutra' : ''}`);
      const input = el('input'); input.type = 'radio'; input.name = 'risposta'; input.value = String(valore); input.checked = stato.risposte[d.id] === valore;
      const contenuto = matematica(el('span'), testo);
      label.append(input, contenuto); q('scelte').append(label);
      input.addEventListener('change', () => { if (!accessoConsentito()) return; stato.risposte[d.id] = valore; stato.finito = false; aggiornaExtra(); aggiornaAvanzamento(); persisti(); q('domanda-errore').textContent = ''; });
    }
    q('indietro').disabled = indice === 0;
    persisti();
    if (focus) q('domanda').focus({ preventScroll: true });
  }

  function aggiornaAvanzamento() {
    const tutte = domande();
    q('contatore').textContent = `Domanda ${indice + 1} di ${tutte.length}${indice >= base.length ? ' · Approfondimento' : ''}`;
    q('progresso').max = tutte.length;
    q('progresso').value = tutte.filter((x) => Object.hasOwn(stato.risposte, x.id)).length;
    q('progresso').setAttribute('aria-valuetext', `${q('progresso').value} risposte su ${tutte.length}`);
    q('avanti').textContent = indice === tutte.length - 1 ? 'Concludi il test' : 'Conferma e continua';
  }

  function aggiungiCorrezione() {
    const details = el('details', null, 'ori-revisione'); details.append(el('summary', 'Rivedi risposte e spiegazioni'));
    for (const [i, d] of domande().entries()) {
      const row = el('div', null, 'ori-risposta-revisione');
      row.append(matematica(el('h3'), `${i + 1}. ${d.testo}`));
      const figura = figuraDi(d); if (figura) row.append(figura);
      const risposta = stato.risposte[d.id];
      row.append(matematica(el('p'), `La tua risposta: ${typeof risposta === 'number' ? d.scelte[risposta] : risposta === 'non-studiato' ? 'Non l’ho ancora studiato' : 'Non so risolverlo'}`));
      row.append(matematica(el('p'), `Risposta corretta: ${d.scelte[d.corretta]}`));
      row.append(matematica(el('p'), d.spiegazione), bottone('Modifica questa risposta', () => rivediRisposta(i), 'ori-testo-bottone')); details.append(row);
    }
    risultato.append(details);
  }

  async function rivediRisposta(i) {
    if (!stato || !await controllaAccesso()) return;
    stato.rivedi = true; stato.finito = false; archivioAttuale = null; percorsoLocale(); indice = i; mostraDomanda();
  }

  function mostraStudio(esito) {
    const testa = el('div', null, 'ori-esito-testa');
    const prima = esito.priorita?.[0];
    testa.append(el('p', PROFILI_STUDIO[stato?.materia || archivioAttuale?.materia]?.titolo || 'Orientamento allo studio', 'ori-etichetta'), el('h2', prima ? `Comincia da ${prima.titolo.toLocaleLowerCase('it')}` : 'Prova il prossimo esercizio'), el('p', esito.sintesi));
    risultato.append(testa);
    const piano = el('ol', null, 'ori-piano');
    for (const passo of esito.pianoPratico || []) {
      const li = el('li'); li.append(el('h3', passo.titolo), el('p', passo.motivo));
      li.append(link({ teoria: 'Apri la spiegazione', svolti: 'Segui un esempio', esercizi: 'Prova gli esercizi' }[passo.tipo] || 'Apri il materiale', passo.url)); piano.append(li);
    }
    if (piano.children.length) risultato.append(piano);
    risultato.append(el('p', 'Il piano riguarda le competenze osservate. I materiali collegati possono includere contenuti a pagamento.', 'ori-nota'));
    const dettagli = el('details', null, 'ori-revisione'); dettagli.append(el('summary', 'Altri argomenti e dettaglio delle risposte'));
    for (const c of esito.competenze || []) {
      const row = el('div', null, 'ori-competenza');
      const heading = el('h3', c.titolo); const badge = el('span', stati[c.stato] || 'Da verificare', 'ori-stato'); badge.dataset.stato = c.stato; heading.append(badge);
      row.append(heading, el('p', c.testo));
      row.append(el('p', `${c.corrette} risposte corrette · ${c.errate} errate · ${c.nonSo} “non so” · ${c.nonStudiato} “non ancora studiato”`, 'ori-nota'));
      row.append(listaMateriali(c.materiali)); dettagli.append(row);
    }
    if (esito.perimetro) {
      dettagli.append(el('p', typeof esito.perimetro === 'string' ? esito.perimetro : esito.perimetro.descrizione));
      if (esito.perimetro.competenzeNonOsservate?.length) {
        dettagli.append(el('p', 'Argomenti del corso non verificati:'));
        const ul = el('ul'); for (const id of esito.perimetro.competenzeNonOsservate) ul.append(el('li', COMPETENZE_STUDIO[id]?.titolo || id)); dettagli.append(ul);
      }
      if (esito.perimetro.misura) dettagli.append(el('p', esito.perimetro.misura, 'ori-nota'));
    }
    risultato.append(dettagli);
    if (stato) aggiungiCorrezione();
  }

  async function approfondisciArea(id) {
    if (!stato || !await controllaAccesso()) return;
    stato.risposte = risposteBase(); stato.areaScelta = id; stato.approfondito = true; stato.finito = false;
    archivioAttuale = null; percorsoLocale(); aggiornaExtra(); indice = base.length;
    if (extra.length) mostraDomanda(); else mostraRisultato();
  }

  function contenutoArea(area) {
    const card = el('article', null, 'ori-area-risultato');
    card.dataset.area = area.id; card.append(el('h3', area.titolo));
    if (area.motivazioni?.length) {
      const ul = el('ul', null, 'ori-evidenze');
      for (const m of area.motivazioni.slice(0, 2)) ul.append(el('li', `${m.etichetta}: ${m.testo}`)); card.append(ul);
    } else card.append(el('p', area.descrizione));
    const percorsi = [...(area.percorsi || []), ...(area.altriPercorsi || [])];
    if (area.percorsi?.length) card.append(el('p', `Da confrontare: ${area.percorsi.map((p) => p.titolo + (p.tipo === 'afam' ? ' (AFAM)' : '')).join(' · ')}.`, 'ori-percorsi-brevi'));
    const dettagli = el('details'); dettagli.append(el('summary', 'Corsi, risposte e aspetti da verificare'));
    if (area.risposteInteressi?.length) {
      const ul = el('ul'); for (const r of area.risposteInteressi) ul.append(el('li', `${r.domanda} — ${r.etichetta}`)); dettagli.append(ul);
    }
    for (const p of percorsi) {
      const par = el('p'); par.append(el('strong', `${p.titolo}${p.tipo === 'afam' ? ' · AFAM' : ''}. `), document.createTextNode(p.descrizione || '')); dettagli.append(par);
      if (p.risposteInteressi?.length) { const ul = el('ul'); for (const r of p.risposteInteressi) ul.append(el('li', `${r.domanda} — ${r.etichetta}`)); dettagli.append(ul); }
    }
    if (area.notaPercorsi) dettagli.append(el('p', area.notaPercorsi, 'ori-nota'));
    if (area.cosaConfrontare?.length) { const ul = el('ul'); for (const s of area.cosaConfrontare) ul.append(el('li', s)); dettagli.append(ul); }
    if (area.materie?.length) {
      dettagli.append(el('p', 'Per controllare le conoscenze nelle materie:'));
      dettagli.append(listaMateriali(area.materie.filter((m) => PROFILI_STUDIO[m.slug]).map((m) => ({ titolo: m.titolo, url: `/orientamento/studio?materia=${encodeURIComponent(m.slug)}` }))));
    }
    card.append(dettagli);
    if (stato && !(stato.approfondito && stato.areaScelta === area.id)) card.append(bottone('Confronta gli indirizzi di quest’area', () => approfondisciArea(area.id), 'ori-testo-bottone'));
    return card;
  }

  function mostraUniversita(esito) {
    const testa = el('div', null, 'ori-esito-testa'); testa.append(el('p', 'Scelta universitaria', 'ori-etichetta'), el('h2', esito.titolo), el('p', esito.sintesi)); risultato.append(testa);
    const tutte = [...new Map([...(esito.aree || []), ...(esito.areeConUnaPreferenza || []), ...(esito.confrontoNeutrale || [])].map((a) => [a.id, a])).values()];
    const confronto = el('div', null, 'ori-confronto');
    if (esito.tipoConfronto !== 'percorsi' && (esito.sceltaConfronto || !esito.aree?.length) && tutte.length > 1) {
      const scelta = el('div', null, 'ori-scelta-confronto'); scelta.append(el('h3', 'Scegli due aree da confrontare'));
      const campi = el('div', null, 'ori-confronto-campi'), selects = [];
      for (const nome of ['Prima area', 'Seconda area']) {
        const label = el('label', nome, 'ori-campo'), select = el('select');
        const vuota = el('option', 'Scegli un’area'); vuota.value = ''; select.append(vuota);
        const candidati = new Set((esito.candidatiConfronto || []).map((a) => a.id));
        for (const [ids, nomeGruppo] of [[tutte.filter((a) => candidati.has(a.id)), 'Attività valutate Molto o Moltissimo'], [tutte.filter((a) => !candidati.has(a.id)), 'Altre aree da esplorare']]) {
          if (!ids.length) continue;
          const gruppo = el('optgroup'); gruppo.label = nomeGruppo;
          for (const a of ids) { const n = a.riepilogoInteressi?.espressi || 0; const o = el('option', a.titolo + (n ? ` · ${n} ${n === 1 ? 'attività indicata' : 'attività indicate'}` : '')); o.value = a.id; gruppo.append(o); }
          select.append(gruppo);
        }
        label.append(select); campi.append(label); selects.push(select);
      }
      const errore = el('p', '', 'ori-errore'); errore.setAttribute('role', 'alert');
      const conferma = bottone('Mostra il confronto', async () => {
        if (!await controllaAccesso()) return;
        const ids = selects.map((s) => s.value);
        if (ids.some((id) => !id) || ids[0] === ids[1]) { errore.textContent = 'Scegli due aree diverse.'; return; }
        errore.textContent = ''; confronto.replaceChildren(...ids.map((id) => contenutoArea(tutte.find((a) => a.id === id))));
      }, 'bottone-secondario');
      scelta.append(campi, conferma, errore); risultato.append(scelta);
    } else for (const area of (esito.aree?.length ? esito.aree : esito.confrontoNeutrale) || []) confronto.append(contenutoArea(area));
    risultato.append(confronto);
    const altre = (esito.areeConUnaPreferenza || []).filter((a) => !esito.aree?.some((b) => b.id === a.id));
    if (altre.length && !esito.sceltaConfronto) {
      const dettagli = el('details', null, 'ori-revisione'); dettagli.append(el('summary', 'Altre attività che ti interessano'));
      for (const area of altre) dettagli.append(contenutoArea(area)); risultato.append(dettagli);
    }
    const piano = el('ol', null, 'ori-piano');
    for (const passo of esito.pianoPratico || []) { const li = el('li'); li.append(el('h3', passo.titolo), el('p', passo.testo)); if (passo.url) li.append(link(passo.etichettaLink || 'Apri la risorsa', passo.url)); piano.append(li); }
    if (piano.children.length) { risultato.append(el('h2', 'Adesso fai questo'), piano); }
    for (const [chiaveSezione, titolo] of [['preferenzeStudio', 'Le tue preferenze di studio'], ['priorita', 'Gli aspetti che contano per te']]) {
      const voci = esito[chiaveSezione] || [];
      if (!voci.length) continue;
      const details = el('details', null, 'ori-revisione'); details.append(el('summary', titolo)); const ul = el('ul');
      for (const v of voci) ul.append(el('li', typeof v === 'string' ? v : v.testo || v.evidenza || v.titolo)); details.append(ul); risultato.append(details);
    }
    if (esito.attivitaDaProvare?.length) {
      const attivita = el('details', null, 'ori-revisione'); attivita.append(el('summary', 'Le attività ancora da conoscere'));
      attivita.append(el('p', 'Per queste attività hai scelto “Non conosco abbastanza”. Una lezione aperta o un laboratorio può aiutarti a capire quanto ti interessano.'));
      const ul = el('ul'); for (const a of esito.attivitaDaProvare) ul.append(el('li', a.testo)); attivita.append(ul); risultato.append(attivita);
    }
    if (stato) {
      const risposte = el('details', null, 'ori-revisione'); risposte.append(el('summary', 'Rivedi tutte le risposte'));
      for (const [i, d] of domande().entries()) {
        const row = el('div', null, 'ori-risposta-revisione'); row.append(el('p', d.testo), el('p', SCALA_UNIVERSITA.find((r) => r.valore === stato.risposte[d.id])?.etichetta || 'Da completare', 'ori-nota'), bottone('Modifica questa risposta', () => rivediRisposta(i), 'ori-testo-bottone')); risposte.append(row);
      }
      risultato.append(risposte);
    }
    const metodo = el('details', null, 'ori-revisione'); metodo.append(el('summary', 'Da quali risposte nasce il risultato'), el('p', esito.notaMetodo));
    if (esito.metodo) { const ul = el('ul'); for (const s of [...esito.metodo.regole, ...esito.metodo.limiti]) ul.append(el('li', s)); metodo.append(ul); }
    metodo.append(link('Metodo e fonti di riferimento', '/orientamento#metodo')); risultato.append(metodo);
    risultato.append(el('p', 'Il risultato riepiloga gli interessi dichiarati e aiuta a confrontare corsi. Non misura attitudini, personalità o probabilità di successo.', 'ori-nota'));
    if (stato?.areaScelta) {
      risultato.append(bottone('Torna al confronto fra tutte le aree', async () => {
        if (!await controllaAccesso()) return;
        stato.risposte = risposteBase(); stato.areaScelta = ''; stato.approfondito = false; archivioAttuale = null; percorsoLocale(); aggiornaExtra(); mostraRisultato();
      }, 'ori-testo-bottone'));
    }
  }

  function sezioneSalva() {
    const box = el('div', null, 'ori-salva-esito'), nota = el('p', '', 'ori-nota'), azioni = el('div', null, 'ori-azioni');
    nota.setAttribute('role', 'status');
    if (archivioAttuale) {
      nota.textContent = archivioAttuale.daAggiornare ? 'Questo risultato si riferisce a una versione precedente. Puoi rifare il test aggiornato.' : `Risultato conservato nel tuo account${archivioAttuale.scade ? ` fino al ${new Date(archivioAttuale.scade).toLocaleDateString('it-IT')}` : ''}.`;
      azioni.append(link('Tutti i risultati', '/account#orientamento', 'bottone-secondario'));
    } else if (!collegamentoVerificato) {
      nota.textContent = 'La connessione non ha permesso di controllare l’accesso. Tieni aperta questa pagina e riprova per conservare il risultato.';
      azioni.append(bottone('Riprova il collegamento', aggiornaCollegamento, 'bottone-primario'));
    } else if (accessoConsentito()) {
      nota.textContent = 'Puoi salvare risposte e risultato nel tuo account per 365 giorni, anche per riaprirli da un altro dispositivo. Il nuovo salvataggio sostituisce il precedente per questo test.';
      const salva = bottone('Salva nel mio account', async () => {
        salva.disabled = true; nota.textContent = 'Salvataggio…';
        try {
          if (!await controllaAccesso()) { salva.disabled = false; return; }
          const body = { tipo, versione, risposte: stato.risposte, ...(studio ? { materia: stato.materia, obiettivo: stato.obiettivo } : stato.areaScelta ? { areaScelta: stato.areaScelta } : {}) };
          const d = await apiOrientamento('/api/orientamento', { method: 'POST', headers: { 'content-type': 'application/json', 'X-Orientamento-Account': accountAtteso }, body: JSON.stringify(body) });
          if (!await controllaAccesso()) { salva.disabled = false; return; }
          nota.textContent = `Risultato salvato nel tuo account${d.risultato?.scade ? ` fino al ${new Date(d.risultato.scade).toLocaleDateString('it-IT')}` : ''}. Puoi cancellarlo dalla pagina Account.`; salva.textContent = 'Salvato';
          azioni.append(link('Apri il tuo account', '/account#orientamento', 'ori-testo-bottone'));
          if (d.risultato?.esito) esitoAttuale = d.risultato.esito;
        } catch (error) {
          if ([401, 403].includes(error.status) || error.codice === 'account-cambiato') { salva.disabled = false; bloccaAccesso(error); return; }
          nota.textContent = error.codice === 'account-cambiato' ? 'L’account è cambiato in un’altra scheda. Torna all’account con cui hai iniziato per salvare queste risposte.' : error.status === 409 ? 'Il test è stato aggiornato. Ricarica la pagina e comincia la nuova versione.' : error.status === 401 ? 'La sessione è scaduta. Accedi per salvare il risultato.' : error.message;
          salva.disabled = false;
          if (error.status === 401) {
            const accesso = link('Accedi in un’altra scheda e riprova', '/accedi?dopo=%2Forientamento', 'ori-testo-bottone'); accesso.target = '_blank'; accesso.rel = 'noopener'; azioni.append(accesso);
          }
        }
      }, 'bottone-primario');
      azioni.append(salva);
    }
    if (stato && !bozzaConservata && accessoConsentito()) azioni.append(bottone('Conserva su questo dispositivo', async () => { if (!await controllaAccesso()) return; stato.conservaLocale = true; persisti(); mostraRisultato(); }, 'ori-testo-bottone'));
    azioni.append(bottone('Fai un nuovo test', async () => { if (!await controllaAccesso()) return; percorsoLocale(); risultato.hidden = true; sessione.hidden = true; config.hidden = false; stato = null; archivioAttuale = null; q('ripresa').hidden = true; config.querySelector('select')?.focus(); }, 'ori-testo-bottone'));
    const privacy = el('p', null, 'ori-nota'); privacy.append(link('Conservazione e cancellazione delle risposte', '/privacy#orientamento'));
    box.append(nota, azioni, privacy); risultato.append(box);
  }

  function mostraRisultato(record = null) {
    if (!accessoConsentito()) return;
    if (record) {
      stato = null; esitoAttuale = record.esito;
      const iniziali = studio ? [] : domandeBaseUniversita();
      const candidato = { tipo, versione: record.versione, materia: record.materia, obiettivo: record.obiettivo, areaScelta: record.areaScelta || '', risposte: record.risposte, finito: true, indice: 0, approfondito: !studio && Object.keys(record.risposte || {}).some((id) => !iniziali.some((q) => q.id === id)) };
      if (!record.daAggiornare && verificaBozza(candidato)) { stato = candidato; selezionaBase(); aggiornaExtra(); esitoAttuale = valuta(); }
    } else {
      esitoAttuale = valuta();
    }
    if (!esitoAttuale || (!record && (studio ? !esitoAttuale.completo : !esitoAttuale.copertura?.completa || (stato.approfondito && !esitoAttuale.copertura?.approfondimenti?.completa)))) throw new Error('Completa le domande prima di aprire il risultato.');
    if (!record) { stato.finito = true; persisti(); }
    q('ripresa').hidden = true; config.hidden = true; sessione.hidden = true; risultato.hidden = false; risultato.replaceChildren();
    archivioAttuale = record;
    if (record?.daAggiornare) {
      const avviso = el('div', null, 'ori-esito-testa'); avviso.append(el('h2', 'Il questionario è stato aggiornato'), el('p', 'Questo salvataggio usa una versione precedente. Puoi svolgere il test attuale per ricevere i consigli aggiornati.')); risultato.append(avviso);
    } else if (studio) mostraStudio(esitoAttuale); else mostraUniversita(esitoAttuale);
    sezioneSalva(); risultato.focus({ preventScroll: true }); risultato.scrollIntoView({ behavior: 'instant', block: 'start' });
  }

  config.addEventListener('change', () => { try { configuraPerimetro(); } catch (error) { fallisce(error); } });
  config.addEventListener('submit', async (event) => {
    event.preventDefault(); if (!config.reportValidity()) return;
    if (!await controllaAccesso()) return;
    stato = { tipo, versione, materia: studio ? config.elements.materia.value : undefined, obiettivo: studio ? config.elements.obiettivo.value : undefined, areaScelta: studio ? undefined : config.elements.areaScelta.value, conservaLocale: config.elements.conservaLocale.checked, risposte: {}, approfondito: false, finito: false, indice: 0 };
    percorsoLocale();
    indice = 0; extra = []; archivioAttuale = null; q('errore').textContent = '';
    try { selezionaBase(); mostraDomanda(); } catch (error) { fallisce(error); }
  });
  q('form-domanda').addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!stato || !await controllaAccesso()) return;
    try {
      const d = domande()[indice];
      if (!Object.hasOwn(stato.risposte, d.id)) { q('domanda-errore').textContent = 'Scegli una risposta per continuare.'; q('scelte').querySelector('input')?.focus(); return; }
      aggiornaExtra();
      if (indice < domande().length - 1) { indice++; mostraDomanda(); }
      else mostraRisultato();
    } catch (error) { fallisce(error); }
  });
  q('indietro').addEventListener('click', async () => { if (indice > 0 && await controllaAccesso()) { indice--; mostraDomanda(); } });
  q('aggiorna-risultato').addEventListener('click', async () => {
    if (!stato || !await controllaAccesso()) return;
    try { aggiornaExtra(); const mancante = domande().findIndex((d) => !Object.hasOwn(stato.risposte, d.id)); if (mancante < 0) mostraRisultato(); else { indice = mancante; mostraDomanda(); } }
    catch (error) { fallisce(error); }
  });
  q('pausa').addEventListener('click', async () => {
    if (!stato || !await controllaAccesso()) return;
    stato.conservaLocale = true;
    const salvata = persisti();
    if (!salvata) { q('salvataggio-locale').textContent = 'Le risposte non sono state conservate. Completa il test tenendo aperta questa pagina.'; return; }
    bozza = { ...stato }; sessione.hidden = true; q('ripresa').hidden = false;
    q('ripresa-testo').textContent = 'Le risposte sono conservate su questo browser. Puoi chiudere la pagina e riprendere entro 30 giorni.';
    q('riprendi').focus();
  });
  q('riprendi').addEventListener('click', async () => { if (!await controllaAccesso()) return; try { ripristina(bozza); } catch (error) { fallisce(error); } });
  q('scartabozza').addEventListener('click', async () => {
    if (!await controllaAccesso()) return;
    if (!rimuoviBozza(chiaveDaRiprendere || chiave)) { fallisce(new Error('Il browser non ha permesso la cancellazione. Puoi rimuovere i dati del sito dalle impostazioni del browser.')); return; }
    bozza = null; stato = null; chiaveDaRiprendere = ''; bozzaConservata = false; q('ripresa').hidden = true; q('gestione-locale').hidden = true; config.hidden = false;
  });
  q('elimina-locale').addEventListener('click', async () => {
    if (!await controllaAccesso()) return;
    if (stato) stato.conservaLocale = false;
    config.elements.conservaLocale.checked = false;
    const rimossa = rimuoviBozza(chiave); bozzaConservata = false;
    if (rimossa && !risultato.hidden && stato) mostraRisultato(archivioAttuale);
    if (rimossa && !q('ripresa').hidden && stato) { q('ripresa').hidden = true; mostraDomanda(false); }
    q('gestione-locale').hidden = false;
    q('locale-stato').textContent = rimossa ? 'Copia locale cancellata. Le risposte aperte restano in questa pagina; i risultati nell’account si eliminano dall’account.' : 'Il browser non ha permesso la cancellazione. Rimuovi i dati del sito dalle impostazioni del browser.';
    if (rimossa) { bozza = null; q('elimina-locale').hidden = true; }
    q('salvataggio-locale').textContent = rimossa ? 'Le risposte restano solo in questa pagina. Non vengono più conservate su questo dispositivo.' : 'I successivi salvataggi sono disattivati. La copia precedente potrebbe essere ancora presente sul dispositivo.';
    if (!rimossa) fallisce(new Error('La copia sul dispositivo non è stata cancellata. Puoi rimuoverla dalle impostazioni del browser.'));
  });

  async function inizializza() {
    if (!await controllaAccesso()) return;
    try {
    chiave = await chiaveBozza(tipo, io);
    q('caricamento').hidden = true;
    if (studio && parametri.has('materia')) {
      const materia = parametri.get('materia');
      if (Array.from(config.elements.materia.options).some((o) => o.value === materia)) config.elements.materia.value = materia;
      else q('errore').textContent = 'La disciplina richiesta non è disponibile. Scegli una delle materie elencate.';
    }
    configuraPerimetro();
    if (parametri.has('risultato')) {
      const data = await apiOrientamento('/api/orientamento', { headers: accountAtteso ? { 'X-Orientamento-Account': accountAtteso } : {} });
      await verificaGmOrientamento(accountAtteso);
      const r = (data.risultati || []).find((x) => x.id === parametri.get('risultato') && x.tipo === tipo);
      if (!r) throw new Error('Questo risultato non è presente nel tuo account. Puoi cominciare un nuovo test.');
      mostraRisultato(r); avviato = true; return;
    }
    bozza = leggiBozza(chiave);
    chiaveDaRiprendere = chiave;
    // Nell’anteprima GM le precedenti bozze ospite restano separate e non vengono importate.
    if (verificaBozza(bozza) && (!studio || !parametri.get('materia') || bozza.materia === parametri.get('materia'))) {
      q('ripresa').hidden = false;
      const nome = studio ? PROFILI_STUDIO[bozza.materia].titolo : 'scelta universitaria';
      q('ripresa-testo').textContent = bozza.finito ? `Su questo browser trovi il risultato del test di ${nome}.` : `Hai un test di ${nome} in corso. Puoi riprendere dalle risposte già date.`;
      q('riprendi').textContent = bozza.finito ? 'Riapri il risultato' : 'Riprendi';
    } else {
      config.hidden = false;
      if (bozza) {
        q('gestione-locale').hidden = false;
        q('locale-stato').textContent = verificaBozza(bozza)
          ? `Su questo dispositivo è conservata anche una prova di ${PROFILI_STUDIO[bozza.materia]?.titolo || 'un altro percorso'}. Puoi eliminarla qui.`
          : 'Su questo dispositivo è presente una bozza di una versione precedente. Puoi eliminarla qui e svolgere il test aggiornato.';
      }
    }
    avviato = true;
    } catch (error) { bloccaAccesso(error); }
  }
  window.addEventListener('focus', () => { if (avviato) controllaAccesso(); });
  document.addEventListener('visibilitychange', () => { if (avviato && !document.hidden) controllaAccesso(); });
  await inizializza();
}
