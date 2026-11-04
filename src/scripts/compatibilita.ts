// «Compatibilità con il tuo esame» nel browser (componente CompatibilitaEsame.astro).
// Le foto si riducono qui (lato lungo 1600 px, JPEG); le pagine dei PDF si disegnano con pdf.js (caricato da jsDelivr
// solo quando serve) e partono come immagini, così il modello vede anche le formule. Poi il testo letto va al confronto.
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
  const stato = document.getElementById('compat-stato')!;
  const esitoBox = document.getElementById('compat-esito')!;
  const invia = document.getElementById('compat-invia') as HTMLButtonElement;
  const elencoFile = document.getElementById('compat-file')!;
  const inputFile = form.querySelector<HTMLInputElement>('input[name=file]')!;
  const area = form.querySelector<HTMLTextAreaElement>('textarea[name=testo]')!;
  const zona = form.querySelector<HTMLElement>('.compat-carica')!;
  let files: File[] = [];

  // Materia dall'indirizzo (?materia=analisi-1): ci si arriva dalla pagina Sblocca.
  const dallaPagina = new URLSearchParams(location.search).get('materia');
  if (dallaPagina) {
    const r = form.querySelector<HTMLInputElement>(`input[name=materia][value="${CSS.escape(dallaPagina)}"]`);
    if (r) r.checked = true;
  }
  const materiaScelta = () => form.querySelector<HTMLInputElement>('input[name=materia]:checked')?.value || '';

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
  const occupato = (si: boolean) => { invia.disabled = si; };

  const confronta = async (materia: string, testo: string) => {
    stato.textContent = 'Confronto con il materiale…';
    const esito: Esito = await chiama('/api/compatibilita/confronta', { materia, testo });
    stato.textContent = '';
    mostra(esito, testo);
    esitoBox.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const materia = materiaScelta();
    if (!materia) { stato.textContent = 'Scegli la materia.'; return; }
    occupato(true);
    try {
      let testo = area.value.trim();
      if (!testo) {
        if (!files.length) throw new Error('Carica il compito o incolla il testo.');
        stato.textContent = 'Lettura del compito…';
        const pagine: string[] = [];
        for (const f of files) {
          if (pagine.length >= MAX_PAGINE) break;
          if (f.type === 'application/pdf') pagine.push(...(await daPdf(f, MAX_PAGINE - pagine.length)));
          else pagine.push(await daFoto(f));
        }
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
    const tot = Math.max(e.richieste.length, 1);
    const quota = (k: 'stesso' | 'argomento') => (100 * e.conteggi[k]) / tot;
    const successo = e.collegato && e.successo?.percentuale != null
      ? `<p class="compat-righe-sintesi">Successo nelle domande a tempo sugli stessi argomenti: <b>${e.successo.percentuale}%</b></p>`
      : !e.collegato ? `<p class="compat-righe-sintesi">Con l’account vedi anche il successo nelle domande a tempo sugli argomenti del compito.</p>` : '';
    const acquisto = !possiede(e.materia) && prezzi[e.materia]
      ? `<p class="compat-acquisto"><a href="/${e.materia}/sblocca">Sblocca ${esc(e.titolo)} · ${prezzi[e.materia]} €</a></p>` : '';
    const voci = e.richieste.map((r) => {
      const link: string[] = [];
      if (r.scheda) link.push(`<a href="${esc(r.scheda.link)}">${conFormule(r.scheda.titolo)}</a>${r.scheda.libera && !possiede(e.materia) ? ' (gratuita)' : ''}`);
      else if (r.voce) link.push(`<a href="${esc(r.voce.link)}">${conFormule(r.voce.titolo)}</a>`);
      else if (r.argomento && r.teoriaLink) link.push(`<a href="${esc(r.teoriaLink)}">${esc(r.argomento.titolo)}</a>`);
      if (r.domandeLink) link.push(`<a href="${esc(r.domandeLink)}">Domande a tempo</a>${r.successo ? ` ${r.successo.corrette}/${r.successo.risposte}` : ''}`);
      return `<li><span class="compat-n">${esc(r.esercizio)}${r.parte ? esc(r.parte) : ''}</span><div class="compat-r">
        <div class="testo-richiesta">${conFormule(r.testo)}</div>
        <p class="compat-link"><span class="compat-et ${r.livello}">${ETICHETTE[r.livello]}</span>${link.join(' · ')}</p></div></li>`;
    }).join('');
    esitoBox.innerHTML = `
      <div class="compat-sintesi">
        <p class="compat-titolo-esito"><strong>${e.compatibilita}%</strong><span>di compatibilità con ${esc(e.titolo)}</span></p>
        <div class="compat-barra" aria-hidden="true"><i class="b-stesso" style="width:${quota('stesso')}%"></i><i class="b-argomento" style="width:${quota('argomento')}%"></i></div>
        <p class="compat-righe-sintesi">${e.conteggi.stesso} coperte · ${e.conteggi.argomento} in parte · ${e.conteggi.nessuno} non coperte</p>
        ${successo}${acquisto}
      </div>
      <ol class="compat-richieste">${voci}</ol>
      <details class="compat-dettagli">
        <summary>Come si calcola</summary>
        <p>Una richiesta vale per intero se c’è un esercizio svolto con lo stesso procedimento (per la teoria, se l’enunciato è nel sito), per metà se c’è solo l’argomento. ${e.perPunti ? 'Ogni esercizio pesa quanto il suo punteggio.' : 'Le richieste hanno tutte lo stesso peso.'}</p>
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
      b.disabled = true;
      try { await confronta(e.materia, letto.value.trim()); } catch (err) { stato.textContent = (err as Error).message; }
      finally { b.disabled = false; }
    });
  }
}
