// «Compatibilità con il tuo esame» nel browser (componente CompatibilitaEsame.astro).
// Le foto si riducono qui (lato lungo 1600 px, JPEG); le pagine dei PDF si disegnano con pdf.js e partono come immagini,
// così il modello che legge le immagini vede anche le formule. Poi il testo letto va al confronto con il materiale.
import katex from 'katex';

const MAX_LATO = 1600;
const MAX_DATI = 1400000; // caratteri del data URL di una pagina (il Worker accetta fino a 1,5 milioni)
const CHIAVE_RECENTI = 'compatibilita-esami';

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
  successo: { percentuale: number | null; risposte: number } | null;
}
interface Recente { quando: number; testo: string; esito: Esito }

const esc = (s: string) => s.replace(/[&<>"]/g, (x) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[x]!));
// Testo con formule tra $…$ o $$…$$: le formule si scrivono con KaTeX, il resto si protegge.
function conFormule(s: string): string {
  const parti = s.split(/(\$\$[\s\S]+?\$\$|\$[^$]+?\$)/g);
  return parti.map((p) => {
    const blocco = p.startsWith('$$') && p.endsWith('$$') && p.length > 4;
    const riga = !blocco && p.startsWith('$') && p.endsWith('$') && p.length > 2;
    if (!blocco && !riga) return esc(p);
    try { return katex.renderToString(p.slice(blocco ? 2 : 1, blocco ? -2 : -1), { throwOnError: false, displayMode: false }); }
    catch { return esc(p); }
  }).join('');
}

function leggiRecenti(): Recente[] {
  try { return JSON.parse(localStorage.getItem(CHIAVE_RECENTI) || '[]'); } catch { return []; }
}
function salvaRecente(r: Recente) {
  try { localStorage.setItem(CHIAVE_RECENTI, JSON.stringify([r, ...leggiRecenti()].slice(0, 6))); } catch { /* memoria del browser non disponibile */ }
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
  try {
    const img = await createImageBitmap(f);
    return suTela(img, img.width, img.height);
  } catch {
    throw new Error(`Non riesco ad aprire «${f.name}». Usa una foto in JPG o PNG.`);
  }
}
async function daPdf(f: File, quante: number): Promise<string[]> {
  const pdfjs = await import('pdfjs-dist');
  const lavoratore = (await import('pdfjs-dist/build/pdf.worker.min.mjs?url')).default;
  pdfjs.GlobalWorkerOptions.workerSrc = lavoratore;
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
    await p.render({ canvas: c, canvasContext: g, viewport }).promise;
    pagine.push(suTela(c, c.width, c.height));
  }
  return pagine;
}

// ---------- pagina ----------
export function avviaCompatibilita() {
  const box = document.getElementById('compat');
  const form = document.getElementById('compat-modulo') as HTMLFormElement | null;
  if (!box || !form) return;
  const fissa = box.dataset.fissa || '';
  const prezzi: Record<string, number> = JSON.parse(box.dataset.prezzi || '{}');
  const MAX_PAGINE = Number(box.dataset.maxPagine) || 4;
  const stato = document.getElementById('compat-stato')!;
  const esitoBox = document.getElementById('compat-esito')!;
  const invia = document.getElementById('compat-invia') as HTMLButtonElement;
  const elencoFile = document.getElementById('compat-file')!;
  const inputFile = form.querySelector<HTMLInputElement>('input[name=file]')!;
  const area = form.querySelector<HTMLTextAreaElement>('textarea[name=testo]')!;
  const zona = form.querySelector<HTMLElement>('.compat-carica')!;
  let files: File[] = [];

  // Materia dall'indirizzo (?materia=analisi-1), per i collegamenti dalle altre pagine.
  const dallaPagina = new URLSearchParams(location.search).get('materia');
  if (!fissa && dallaPagina) {
    const r = form.querySelector<HTMLInputElement>(`input[name=materia][value="${CSS.escape(dallaPagina)}"]`);
    if (r) r.checked = true;
  }
  const materiaScelta = () => fissa || form.querySelector<HTMLInputElement>('input[name=materia]:checked')?.value || '';
  const modo = () => form.querySelector<HTMLInputElement>('input[name=modo]:checked')?.value || 'file';
  form.querySelectorAll<HTMLInputElement>('input[name=modo]').forEach((r) => r.addEventListener('change', () => {
    form.querySelectorAll<HTMLElement>('.compat-campo').forEach((c) => { c.hidden = c.dataset.modo !== modo(); });
    stato.textContent = '';
  }));

  const mostraFile = () => {
    elencoFile.innerHTML = files.map((f, i) => `<li>${esc(f.name)} <button type="button" data-togli="${i}" aria-label="Togli ${esc(f.name)}">×</button></li>`).join('');
  };
  const aggiungi = (nuovi: FileList | File[]) => {
    for (const f of Array.from(nuovi)) {
      if (!(f.type.startsWith('image/') || f.type === 'application/pdf')) { stato.textContent = `«${f.name}» non è una foto né un PDF.`; continue; }
      if (files.length < MAX_PAGINE) files.push(f);
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
  const occupato = (si: boolean) => { invia.disabled = si; invia.textContent = si ? 'Controllo in corso…' : 'Controlla la compatibilità'; };

  const confronta = async (materia: string, testo: string) => {
    stato.textContent = 'Confronto degli esercizi con il materiale del sito…';
    const universita = (form.querySelector<HTMLInputElement>('input[name=universita]')?.value || '').trim();
    const esito: Esito = await chiama('/api/compatibilita/confronta', { materia, testo, universita });
    stato.textContent = '';
    salvaRecente({ quando: Date.now(), testo, esito });
    mostra(esito, testo);
    mostraRecenti();
    esitoBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const materia = materiaScelta();
    if (!materia) { stato.textContent = 'Scegli la materia dell’esame.'; return; }
    occupato(true);
    try {
      let testo = '';
      if (modo() === 'testo') {
        testo = area.value.trim();
        if (testo.length < 20) throw new Error('Scrivi o incolla gli esercizi del compito.');
      } else {
        if (!files.length) throw new Error('Scegli almeno una foto o un PDF del testo dell’esame.');
        stato.textContent = 'Preparazione delle pagine…';
        const pagine: string[] = [];
        for (const f of files) {
          if (pagine.length >= MAX_PAGINE) break;
          if (f.type === 'application/pdf') pagine.push(...(await daPdf(f, MAX_PAGINE - pagine.length)));
          else pagine.push(await daFoto(f));
        }
        stato.textContent = pagine.length > 1 ? `Lettura delle ${pagine.length} pagine del compito…` : 'Lettura della pagina del compito…';
        testo = (await chiama('/api/compatibilita/leggi', { materia, pagine })).testo;
      }
      await confronta(materia, testo);
    } catch (err) {
      stato.textContent = (err as Error).message;
    } finally { occupato(false); }
  });

  // ---------- risultato ----------
  const possiede = (m: string) => (document.documentElement.dataset.materie || '').split(/\s+/).includes(m);
  const ETICHETTE = { stesso: 'Coperto', argomento: 'In parte', nessuno: 'Non coperto' };
  function mostra(e: Esito, testo: string) {
    const tot = e.richieste.length;
    const quota = (k: 'stesso' | 'argomento') => (100 * e.conteggi[k]) / Math.max(tot, 1);
    const plur = (n: number, uno: string, piu: string) => `${n} ${n === 1 ? uno : piu}`;
    const successo = !e.collegato
      ? `<p class="compat-successo">Con un account gratuito compare anche il <b>successo</b>: la quota di domande a tempo che indovini negli argomenti di questo esame. <a href="/accedi?nuovo=1&dopo=${encodeURIComponent(location.pathname)}">Crea un account</a></p>`
      : e.successo?.percentuale == null
        ? `<p class="compat-successo">Il <b>successo</b> compare dopo almeno 10 domande a tempo negli argomenti di questo esame${e.successo?.risposte ? ` (per ora ${e.successo.risposte})` : ''}. Le trovi accanto a ogni richiesta.</p>`
        : '';
    const numeroSuccesso = e.collegato && e.successo?.percentuale != null
      ? `<div class="compat-numero secondario"><strong>${e.successo.percentuale}%</strong><span>successo nelle domande a tempo<br>sugli argomenti dell’esame (${e.successo.risposte} risposte)</span></div>` : '';
    const acquisto = !fissa && !possiede(e.materia) && prezzi[e.materia]
      ? `<p class="compat-acquisto"><a class="bottone-primario" href="/${e.materia}/sblocca">Sblocca ${esc(e.titolo)} · ${prezzi[e.materia]} €</a><a href="/${e.materia}">Vedi il programma</a></p>` : '';
    const voci = e.richieste.map((r) => {
      const link: string[] = [];
      if (r.scheda) link.push(`Esercizio svolto dello stesso tipo: <a href="${esc(r.scheda.link)}">${conFormule(r.scheda.titolo)}</a>${r.scheda.libera && !possiede(e.materia) ? '<span class="gratuita">gratuito</span>' : ''}`);
      if (r.voce) link.push(`Nella teoria: <a href="${esc(r.voce.link)}">${conFormule(r.voce.titolo)}</a>`);
      if (!r.scheda && !r.voce && r.argomento && r.teoriaLink) link.push(`Argomento: <a href="${esc(r.teoriaLink)}">${esc(r.argomento.titolo)}</a>`);
      if (r.domandeLink) link.push(`<a href="${esc(r.domandeLink)}">Domande a tempo</a>${r.successo ? ` · ${r.successo.corrette} su ${r.successo.risposte} indovinate` : ''}`);
      return `<li><span class="compat-n">${esc(r.esercizio)}${r.parte ? esc(r.parte) : ''}</span><div class="compat-r">
        <span class="compat-et ${r.livello}">${ETICHETTE[r.livello]}</span>
        <div class="testo-richiesta">${conFormule(r.testo)}</div>
        ${link.map((l) => `<p class="compat-link">${l}</p>`).join('')}</div></li>`;
    }).join('');
    esitoBox.innerHTML = `
      <div class="compat-sintesi">
        <div class="compat-numeri">
          <div class="compat-numero"><strong>${e.compatibilita}%</strong><span>compatibilità con il materiale<br>di ${esc(e.titolo)}</span></div>
          ${numeroSuccesso}
        </div>
        <div class="compat-barra" aria-hidden="true"><i class="b-stesso" style="width:${quota('stesso')}%"></i><i class="b-argomento" style="width:${quota('argomento')}%"></i></div>
        <p class="compat-conteggi">
          <span><i class="pallino" style="background:var(--accento)"></i>${plur(e.conteggi.stesso, 'richiesta coperta', 'richieste coperte')}</span>
          <span><i class="pallino" style="background:#d8b27a"></i>${plur(e.conteggi.argomento, 'in parte', 'in parte')}</span>
          <span><i class="pallino" style="background:var(--riga)"></i>${plur(e.conteggi.nessuno, 'non coperta', 'non coperte')}</span>
        </p>
        <p class="compat-pesi">${e.perPunti ? 'Calcolata sui punteggi indicati nel testo dell’esame.' : 'Ogni richiesta ha lo stesso peso, perché il testo non indica i punteggi di tutti gli esercizi.'}</p>
        ${successo}
        ${acquisto}
      </div>
      <ol class="compat-richieste">${voci}</ol>
      <details class="compat-dettagli">
        <summary>Testo letto dal compito</summary>
        <p>Il riconoscimento degli esercizi è automatico. Se il testo letto contiene errori, si può correggere qui e ricalcolare.</p>
        <textarea rows="8" maxlength="8000" id="compat-letto"></textarea>
        <button type="button" class="bottone-secondario" id="compat-ricalcola">Ricalcola con questo testo</button>
      </details>
      <details class="compat-dettagli">
        <summary>Come si calcolano le percentuali</summary>
        <p>La <b>compatibilità</b> è la quota dell’esame che trova riscontro nel materiale del sito. Una richiesta conta per intero se tra gli esercizi svolti c’è una scheda con lo stesso procedimento (per una domanda di teoria, se la definizione o il teorema è nella teoria del sito), per metà se l’argomento è nel programma ma senza una scheda dello stesso tipo, zero se l’argomento non è trattato. Se il testo indica i punteggi, ogni esercizio pesa quanto il suo punteggio.</p>
        <p>Il <b>successo</b> si calcola con gli stessi pesi dalle domande a tempo dell’account: per ogni richiesta conta la quota di domande indovinate nel suo argomento.</p>
      </details>`;
    esitoBox.hidden = false;
    const letto = document.getElementById('compat-letto') as HTMLTextAreaElement;
    letto.value = testo;
    document.getElementById('compat-ricalcola')!.addEventListener('click', async (ev) => {
      const b = ev.currentTarget as HTMLButtonElement;
      b.disabled = true;
      try { await confronta(e.materia, letto.value.trim()); } catch (err) { stato.textContent = (err as Error).message; stato.scrollIntoView({ block: 'center' }); }
      finally { b.disabled = false; }
    });
  }

  // ---------- esami controllati di recente (solo nella pagina apposita) ----------
  let recentiBox: HTMLElement | null = null;
  function mostraRecenti() {
    if (fissa) return;
    const recenti = leggiRecenti();
    if (!recenti.length) return;
    if (!recentiBox) { recentiBox = document.createElement('section'); recentiBox.className = 'compat-recenti'; box!.append(recentiBox); }
    const data = (t: number) => new Date(t).toLocaleDateString('it-IT', { day: 'numeric', month: 'long' });
    recentiBox.innerHTML = `<h2>Esami controllati di recente</h2><ul>${recenti.map((r, i) => `<li><button type="button" data-recente="${i}">
      <span>${esc(r.esito.titolo)} <small>· ${data(r.quando)} · ${r.esito.richieste.length} richieste</small></span><b>${r.esito.compatibilita}%</b></button></li>`).join('')}</ul>`;
    recentiBox.querySelectorAll<HTMLButtonElement>('[data-recente]').forEach((b) => b.addEventListener('click', () => {
      const r = leggiRecenti()[Number(b.dataset.recente)];
      if (!r) return;
      mostra(r.esito, r.testo);
      esitoBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }));
  }
  mostraRecenti();
}
