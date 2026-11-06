// «Compatibilità con il tuo esame» nel browser (componente CompatibilitaEsame.astro).
// Le foto si riducono qui (lato lungo 1600 px, JPEG); le pagine dei PDF si disegnano con pdf.js (caricato da jsDelivr
// solo quando serve) e partono come immagini, così il modello vede anche le formule. Poi il testo letto va al confronto.
// Per non far aspettare: foto e PDF si preparano appena scelti (mentre lo studente sceglie la materia), e il risultato
// del confronto arriva in streaming, una richiesta alla volta, con le percentuali alla fine.
import katex from 'katex';

const MAX_LATO = 1600;
const MAX_DATI = 1400000; // caratteri del data URL di una pagina (il Worker accetta fino a 1,5 milioni)
const PDFJS = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.10.38/build/';

interface Richiesta {
  esercizio: string; parte: string | null; testo: string; tipo: 'esercizio' | 'teoria'; livello: 'stesso' | 'argomento' | 'nessuno';
  argomento: { slug: string; titolo: string } | null;
  scheda: { n: number; titolo: string; libera: boolean; link: string } | null;
  voce: { titolo: string; tipo: string; link: string } | null;
  teoriaLink: string | null; domandeLink: string | null;
  successo?: { risposte: number; corrette: number } | null;
}
interface Esito {
  materia: string; titolo: string; compatibilita: number; conteggi: Record<'stesso' | 'argomento' | 'nessuno', number>;
  perPunti: boolean; richieste: Richiesta[]; collegato: boolean;
  quote?: { stesso: number; argomento: number };
  successo: { percentuale: number | null; risposte: number } | null;
}

const esc = (s: string) => s.replace(/[&<>"]/g, (x) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[x]!));
// Testo con formule tra $…$ o $$…$$: le formule si scrivono con KaTeX, il resto si protegge.
function conFormule(s: string): string {
  return s.split(/(\$\$[\s\S]+?\$\$|\$[^$]+?\$)/g).map((p) => {
    const blocco = p.startsWith('$$') && p.endsWith('$$') && p.length > 4;
    const riga = !blocco && p.startsWith('$') && p.endsWith('$') && p.length > 2;
    if (!blocco && !riga) return esc(p);
    try { return katex.renderToString(p.slice(blocco ? 2 : 1, blocco ? -2 : -1), { throwOnError: false }); } catch { return esc(p); }
  }).join('');
}

// ---------- immagini dalle foto e dai PDF ----------
function suTela(sorgente: CanvasImageSource, w: number, h: number): string {
  const k = Math.min(1, MAX_LATO / Math.max(w, h));
  const c = document.createElement('canvas');
  c.width = Math.round(w * k); c.height = Math.round(h * k);
  const g = c.getContext('2d')!;
  g.fillStyle = 'white'; g.fillRect(0, 0, c.width, c.height);
  g.drawImage(sorgente, 0, 0, c.width, c.height);
  let q = 0.82, d = c.toDataURL('image/jpeg', q);
  while (d.length > MAX_DATI && q > 0.5) { q -= 0.12; d = c.toDataURL('image/jpeg', q); }
  return d;
}
async function daFoto(f: File): Promise<string> {
  try { const img = await createImageBitmap(f); return suTela(img, img.width, img.height); }
  catch { throw new Error(`Non riesco ad aprire «${f.name}». Usa una foto in JPG o PNG.`); }
}
async function daPdf(f: File, quante: number): Promise<string[]> {
  const pdfjs = await import(/* @vite-ignore */ `${PDFJS}pdf.min.mjs`);
  pdfjs.GlobalWorkerOptions.workerSrc = `${PDFJS}pdf.worker.min.mjs`;
  const doc = await pdfjs.getDocument({ data: new Uint8Array(await f.arrayBuffer()) }).promise;
  const pagine: string[] = [];
  for (let i = 1; i <= Math.min(doc.numPages, quante); i++) {
    const p = await doc.getPage(i);
    const base = p.getViewport({ scale: 1 });
    const viewport = p.getViewport({ scale: MAX_LATO / Math.max(base.width, base.height) });
    const c = document.createElement('canvas');
    c.width = Math.round(viewport.width); c.height = Math.round(viewport.height);
    const g = c.getContext('2d')!;
    g.fillStyle = 'white'; g.fillRect(0, 0, c.width, c.height);
    await p.render({ canvasContext: g, viewport }).promise;
    pagine.push(suTela(c, c.width, c.height));
  }
  return pagine;
}

// ---------- pagina ----------
export function avviaCompatibilita() {
  const box = document.getElementById('compat');
  const form = document.getElementById('compat-modulo') as HTMLFormElement | null;
  if (!box || !form) return;
  const prezzi: Record<string, number> = JSON.parse(box.dataset.prezzi || '{}');
  const MAX_PAGINE = Number(box.dataset.maxPagine) || 4;
  const SOGLIA = Number(box.dataset.soglia) || 80;
  let idCompito = ''; // compito archiviato dalla lettura delle foto: il confronto aggiorna lo stesso
  const stato = document.getElementById('compat-stato')!;
  const esitoBox = document.getElementById('compat-esito')!;
  const invia = document.getElementById('compat-invia') as HTMLButtonElement;
  const attesa = document.getElementById('compat-attesa')!;
  const fase = document.getElementById('compat-fase')!;
  const notaAttesa = document.getElementById('compat-attesa-nota')!;
  const titoloAttesa = document.getElementById('compat-attesa-titolo')!;
  const percentualeAttesa = document.getElementById('compat-percentuale')!;
  const etichettaPercentuale = document.getElementById('compat-percentuale-etichetta')!;
  const barraAttesa = document.getElementById('compat-loading')!;
  const riempimentoAttesa = barraAttesa.querySelector<HTMLElement>('span')!;
  const passaggi = Array.from(attesa.querySelectorAll<HTMLElement>('[data-fase]'));
  const scorri = (el: HTMLElement) => el.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'nearest' });
  let inAttesa = false;
  let timerAttesa: ReturnType<typeof setTimeout> | undefined;
  let timerAvanzamento: ReturnType<typeof setInterval> | undefined;
  let avanzamento = 0;
  let limiteStima = 44;
  let completata = false;
  // Il servizio non comunica il numero totale di richieste: la stima segue le fasi reali
  // e avanza dolcemente nell'attesa. Solo un risultato reso correttamente vale il 100%.
  const aggiornaAvanzamento = (valore: number, finale = false) => {
    avanzamento = Math.max(avanzamento, Math.min(finale ? 100 : 95, valore));
    const percentuale = Math.floor(avanzamento);
    percentualeAttesa.textContent = `${percentuale}%`;
    riempimentoAttesa.style.width = `${percentuale}%`;
    barraAttesa.setAttribute('aria-valuenow', String(percentuale));
    barraAttesa.setAttribute('aria-valuetext', finale ? 'Verifica completata: 100%' : `${percentuale}% stimato`);
  };
  const aggiornaFase = (nome: 'lettura' | 'confronto' | 'risultato', messaggio: string) => {
    fase.textContent = messaggio;
    if (nome === 'confronto') { limiteStima = 95; aggiornaAvanzamento(50); }
    const indice = passaggi.findIndex((p) => p.dataset.fase === nome);
    passaggi.forEach((p, i) => {
      p.classList.toggle('completato', i < indice);
      if (i === indice) p.setAttribute('aria-current', 'step');
      else p.removeAttribute('aria-current');
    });
  };
  const completaAttesa = () => {
    clearInterval(timerAvanzamento);
    clearTimeout(timerAttesa);
    completata = true;
    attesa.dataset.stato = 'completato';
    titoloAttesa.textContent = 'Verifica completata';
    etichettaPercentuale.textContent = 'completato';
    aggiornaFase('risultato', 'Il risultato è pronto qui sotto.');
    aggiornaAvanzamento(100, true);
  };
  const elencoFile = document.getElementById('compat-file')!;
  const inputFile = form.querySelector<HTMLInputElement>('input[name=file]')!;
  const area = form.querySelector<HTMLTextAreaElement>('textarea[name=testo]')!;
  const zona = form.querySelector<HTMLElement>('.compat-carica')!;
  let files: File[] = [];
  // Pagine già pronte per ogni file, preparate appena il file viene scelto.
  const pronte = new Map<File, Promise<string[]>>();
  const prepara = (f: File) => {
    if (!pronte.has(f)) {
      const p = f.type === 'application/pdf' ? daPdf(f, MAX_PAGINE) : daFoto(f).then((x) => [x]);
      p.catch(() => {}); // l'errore si mostra al momento dell'invio
      pronte.set(f, p);
    }
    return pronte.get(f)!;
  };

  // Materia dall'indirizzo (?materia=analisi-1): ci si arriva dalla pagina Sblocca.
  const dallaPagina = new URLSearchParams(location.search).get('materia');
  if (dallaPagina) {
    const r = form.querySelector<HTMLInputElement>(`input[name=materia][value="${CSS.escape(dallaPagina)}"]`);
    if (r) r.checked = true;
  }
  const materiaScelta = () => form.querySelector<HTMLInputElement>('input[name=materia]:checked')?.value || '';

  const mostraFile = () => {
    elencoFile.innerHTML = files.map((f, i) => `<li>${esc(f.name)} <button type="button" data-togli="${i}" aria-label="Togli ${esc(f.name)}">×</button></li>`).join('');
    zona.classList.toggle('con-file', files.length > 0);
    document.getElementById('compat-carica-titolo')!.textContent = files.length ? `${files.length} ${files.length === 1 ? 'file pronto' : 'file pronti'}` : 'Carica il tuo compito';
    document.getElementById('compat-carica-dettaglio')!.textContent = files.length ? 'Puoi aggiungere altre pagine o togliere i file qui sotto' : 'Trascina qui i file oppure scegli dal dispositivo';
  };
  const aggiungi = (nuovi: FileList | File[]) => {
    if (inAttesa) return;
    for (const f of Array.from(nuovi)) {
      if (!(f.type.startsWith('image/') || f.type === 'application/pdf')) { stato.textContent = `«${f.name}» non è una foto né un PDF.`; continue; }
      if (files.length < MAX_PAGINE) { files.push(f); prepara(f); }
    }
    mostraFile();
  };
  inputFile.addEventListener('change', () => { aggiungi(inputFile.files || []); inputFile.value = ''; });
  elencoFile.addEventListener('click', (e) => {
    const b = (e.target as HTMLElement).closest<HTMLButtonElement>('[data-togli]');
    if (b) { files.splice(Number(b.dataset.togli), 1); mostraFile(); }
  });
  zona.addEventListener('dragover', (e) => { e.preventDefault(); zona.classList.add('sopra'); });
  zona.addEventListener('dragleave', () => zona.classList.remove('sopra'));
  zona.addEventListener('drop', (e) => { e.preventDefault(); zona.classList.remove('sopra'); if (e.dataTransfer?.files) aggiungi(e.dataTransfer.files); });

  const chiama = async (percorso: string, dati: unknown) => {
    const r = await fetch(percorso, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(dati) });
    const d = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error(d.errore || 'Il controllo non è riuscito. Riprova tra qualche istante.');
    return d;
  };
  const occupato = (si: boolean) => {
    inAttesa = si;
    invia.disabled = si;
    invia.textContent = si ? 'Verifica in corso…' : 'Controlla la compatibilità';
    invia.setAttribute('aria-busy', String(si));
    form.setAttribute('aria-busy', String(si));
    form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLButtonElement>('input, textarea, [data-togli]').forEach((el) => { el.disabled = si; });
    attesa.hidden = !si && !completata;
    clearTimeout(timerAttesa);
    clearInterval(timerAvanzamento);
    if (si) {
      completata = false;
      avanzamento = 0;
      limiteStima = 44;
      attesa.dataset.stato = 'in-corso';
      titoloAttesa.textContent = 'Verifica compatibilità in corso';
      etichettaPercentuale.textContent = 'stimato';
      riempimentoAttesa.style.transition = 'none';
      aggiornaAvanzamento(3);
      // Una nuova verifica riparte subito: non animare all'indietro dal 100% precedente.
      void riempimentoAttesa.offsetWidth;
      riempimentoAttesa.style.removeProperty('transition');
      timerAvanzamento = setInterval(() => {
        aggiornaAvanzamento(avanzamento + (limiteStima - avanzamento) * 0.025);
      }, 700);
      stato.textContent = '';
      esitoBox.hidden = true;
      aggiornaFase('lettura', 'Preparazione del compito…');
      notaAttesa.textContent = 'Può richiedere qualche istante. Attendi qui: il risultato apparirà automaticamente.';
      timerAttesa = setTimeout(() => {
        notaAttesa.textContent = 'La verifica sta continuando e può richiedere ancora un po’ di tempo. Mantieni aperta questa pagina.';
      }, 20000);
      scorri(attesa);
    }
  };

  // Il confronto risponde in streaming (una riga JSON per evento): {"r": richiesta} appena il modello la scrive,
  // poi {"fine": esito} con le percentuali. Le richieste si mostrano subito, il riquadro completo alla fine.
  const confronta = async (materia: string, testo: string) => {
    esitoBox.hidden = true;
    esitoBox.innerHTML = '';
    aggiornaFase('confronto', 'Confronto gli esercizi con la teoria e il materiale della materia…');
    const r = await fetch('/api/compatibilita/confronta', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ materia, testo, id: idCompito || undefined }) });
    if (!r.ok || !/ndjson/.test(r.headers.get('content-type') || '')) {
      const d = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(d.errore || 'Il controllo non è riuscito. Riprova tra qualche istante.');
      if (d.id) idCompito = d.id;
      stato.textContent = '';
      mostra(d as Esito, testo);
      completaAttesa();
      scorri(esitoBox);
      return;
    }
    const arrivate: Richiesta[] = [];
    let esito: (Esito & { id?: string }) | null = null;
    const evento = (riga: string) => {
      if (!riga.trim()) return;
      const d = JSON.parse(riga);
      if (d.errore) throw new Error(d.errore);
      if (d.ricomincia) {
        arrivate.length = 0;
        esitoBox.innerHTML = '';
        esitoBox.hidden = true;
        aggiornaFase('confronto', 'Completo il confronto con una seconda analisi…');
        return;
      }
      if (d.fine) { esito = d.fine; return; }
      if (d.r) {
        arrivate.push(d.r);
        inCorso(materia, arrivate);
        aggiornaAvanzamento(Math.min(90, 60 + arrivate.length * 3));
        aggiornaFase('confronto', `${arrivate.length} ${arrivate.length === 1 ? 'richiesta analizzata' : 'richieste analizzate'}. Il confronto continua…`);
      }
    };
    const lettore = r.body!.pipeThrough(new TextDecoderStream()).getReader();
    let resto = '';
    try {
      for (;;) {
        const { done, value } = await lettore.read();
        if (done) break;
        resto += value;
        const righe = resto.split('\n');
        resto = righe.pop()!;
        righe.forEach(evento);
      }
      evento(resto);
    } finally { await lettore.cancel().catch(() => {}); lettore.releaseLock(); }
    const finale = esito as (Esito & { id?: string }) | null;
    if (!finale) throw new Error('Il confronto si è interrotto. Riprova tra qualche istante.');
    if (finale.id) idCompito = finale.id;
    stato.textContent = '';
    mostra(finale, testo);
    completaAttesa();
    scorri(esitoBox);
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (inAttesa) return;
    const materia = materiaScelta();
    if (!materia) { stato.textContent = 'Scegli la materia.'; return; }
    if (!area.value.trim() && !files.length) { stato.textContent = 'Carica il compito o incolla il testo.'; return; }
    occupato(true);
    try {
      let testo = area.value.trim();
      idCompito = '';
      if (!testo) {
        if (!files.length) throw new Error('Carica il compito o incolla il testo.');
        aggiornaFase('lettura', 'Preparazione delle foto o delle pagine del PDF…');
        const pagine = (await Promise.all(files.map(prepara))).flat().slice(0, MAX_PAGINE);
        aggiornaAvanzamento(18);
        aggiornaFase('lettura', 'Lettura del testo e delle formule del compito…');
        const letto = await chiama('/api/compatibilita/leggi', { materia, pagine });
        testo = letto.testo; idCompito = letto.id || '';
        aggiornaAvanzamento(44);
      }
      await confronta(materia, testo);
    } catch (err) {
      esitoBox.hidden = true;
      stato.textContent = (err as Error).message;
    } finally { occupato(false); }
  });

  // ---------- risultato ----------
  const possiede = (m: string) => (document.documentElement.dataset.materie || '').split(/\s+/).includes(m);
  const ETICHETTE = { stesso: 'Coperto', argomento: 'In parte', nessuno: 'Non coperto' };
  const rigaHtml = (materia: string, r: Richiesta) => {
    const link: string[] = [];
    if (r.scheda) link.push(`<a href="${esc(r.scheda.link)}">${conFormule(r.scheda.titolo)}</a>${r.scheda.libera && !possiede(materia) ? ' (gratuita)' : ''}`);
    else if (r.voce) link.push(`<a href="${esc(r.voce.link)}">${conFormule(r.voce.titolo)}</a>`);
    else if (r.argomento && r.teoriaLink) link.push(`<a href="${esc(r.teoriaLink)}">${esc(r.argomento.titolo)}</a>`);
    if (r.domandeLink) link.push(`<a href="${esc(r.domandeLink)}">Domande a tempo</a>${r.successo ? ` ${r.successo.corrette}/${r.successo.risposte}` : ''}`);
    return `<li><span class="compat-n">${esc(r.esercizio)}${r.parte ? esc(r.parte) : ''}</span><div class="compat-r">
        <div class="testo-richiesta">${conFormule(r.testo)}</div>
        <p class="compat-link"><span class="compat-et ${r.livello}">${ETICHETTE[r.livello]}</span>${link.join(' · ')}</p></div></li>`;
  };
  // Mentre il confronto è in corso: le richieste già abbinate, senza percentuali.
  function inCorso(materia: string, richieste: Richiesta[]) {
    if (richieste.length === 1) esitoBox.innerHTML = `
      <div class="compat-sintesi"><p class="compat-righe-sintesi"></p></div>
      <ol class="compat-richieste"></ol>`;
    esitoBox.querySelector('.compat-righe-sintesi')!.textContent = `Confronto in corso · ${richieste.length} ${richieste.length === 1 ? 'richiesta analizzata' : 'richieste analizzate'}`;
    esitoBox.querySelector('.compat-richieste')!.insertAdjacentHTML('beforeend', rigaHtml(materia, richieste[richieste.length - 1]));
    esitoBox.hidden = false;
  }
  function mostra(e: Esito, testo: string) {
    const tot = Math.max(e.richieste.length, 1);
    const quota = (k: 'stesso' | 'argomento') => e.quote?.[k] ?? (100 * e.conteggi[k] * (k === 'stesso' ? 1 : 0.5)) / tot;
    const successo = e.collegato && e.successo?.percentuale != null
      ? `<p class="compat-righe-sintesi">Successo nelle domande a tempo sugli stessi argomenti: <b>${e.successo.percentuale}%</b></p>`
      : !e.collegato ? `<p class="compat-righe-sintesi">Con l’account vedi anche il successo nelle domande a tempo sugli argomenti del compito.</p>` : '';
    const daComprare = !possiede(e.materia) && prezzi[e.materia];
    const consigliato = daComprare && e.compatibilita >= SOGLIA;
    const acquisto = consigliato
      ? `<div class="compat-consigliato">
          <p class="cc-etichetta"><svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="9.5" fill="currentColor"/><path d="M6 10.4l2.7 2.6L14 7.6" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>Acquisto consigliato</p>
          <p class="cc-titolo">Copertura stimata del tuo compito con ${esc(e.titolo)}: ${e.compatibilita}%.</p>
          <a class="bottone-primario" href="/${e.materia}/sblocca">Sblocca ${esc(e.titolo)} · ${prezzi[e.materia]} €</a></div>`
      : daComprare ? `<p class="compat-acquisto"><a href="/${e.materia}/sblocca">Sblocca ${esc(e.titolo)} · ${prezzi[e.materia]} €</a></p>` : '';
    const voci = e.richieste.map((r) => rigaHtml(e.materia, r)).join('');
    esitoBox.innerHTML = `
      <div class="compat-sintesi">
        <p class="compat-titolo-esito"><strong>${e.compatibilita}%</strong><span>di copertura stimata con ${esc(e.titolo)}</span></p>
        <div class="compat-barra" aria-hidden="true"><i class="b-stesso" style="width:${quota('stesso')}%"></i><i class="b-argomento" style="width:${quota('argomento')}%"></i></div>
        <p class="compat-righe-sintesi">${e.conteggi.stesso} coperte · ${e.conteggi.argomento} in parte · ${e.conteggi.nessuno} non coperte</p>
        ${successo}${acquisto}
      </div>
      <ol class="compat-richieste">${voci}</ol>
      <details class="compat-dettagli">
        <summary>Come si calcola</summary>
        <p>Una richiesta vale per intero se il procedimento necessario è spiegato negli esercizi svolti o nella teoria, per metà se c’è solo l’argomento. Una dimostrazione richiesta deve essere presente nel materiale. ${e.perPunti ? 'Si usano i punteggi indicati; il totale di un esercizio si distribuisce tra i suoi punti quando manca un punteggio specifico.' : 'Le richieste hanno tutte lo stesso peso.'} La stima riguarda il compito caricato; i riferimenti usati sono indicati in ogni riga.</p>
      </details>
      <details class="compat-dettagli">
        <summary>Correggi il testo letto</summary>
        <textarea rows="6" maxlength="8000" id="compat-letto"></textarea>
        <button type="button" class="bottone-secondario" id="compat-ricalcola">Ricalcola</button>
      </details>`;
    esitoBox.hidden = false;
    const letto = document.getElementById('compat-letto') as HTMLTextAreaElement;
    letto.value = testo;
    document.getElementById('compat-ricalcola')!.addEventListener('click', async (ev) => {
      const b = ev.currentTarget as HTMLButtonElement;
      if (inAttesa) return;
      occupato(true);
      b.disabled = true;
      try { await confronta(e.materia, letto.value.trim()); } catch (err) { esitoBox.hidden = true; stato.textContent = (err as Error).message; }
      finally { b.disabled = false; occupato(false); }
    });
  }
}
