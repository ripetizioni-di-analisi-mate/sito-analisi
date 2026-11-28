import stile from './stile.css?url';
import {
  alternative,
  capitolo,
  creaProfilo,
  dubbi,
  orizzonti,
  ostacoli,
  percorsi,
  ripristinaOfferta,
  selezionaMateria
} from './piano.mjs';
import { caricaScheda } from './lezione.mjs';
import { viste, settimanePiano } from './viste.mjs';

export async function attivaAnteprima(avvio, modo) {
  const studio = document.querySelector('main .testo-studio');
  if (!studio || avvio.dataset.pronta || !['1', 'esercizio'].includes(modo)) return;
  const css = new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = stile;
    link.onload = resolve;
    link.onerror = () => {
      link.remove();
      reject(new Error('Stile'));
    };
    document.head.append(link);
  });
  const [res] = await Promise.all([fetch(avvio.dataset.catalogo), css]);
  if (!res.ok) throw new Error('Catalogo');
  const { corsi: dati, benvenuto } = await res.json();
  const corsi = new Map(dati.map((c) => [c.slug, c]));
  if (!corsi.size) throw new Error('Catalogo vuoto');
  avvio.dataset.pronta = '1';
  const lingua = avvio.dataset.lingua,
    en = lingua === 'en';
  const t = (it, english) => (en ? english : it);
  const p = creaProfilo();
  const ui = { ricerca: '', gruppo: '', prova: '', passi: 0, condizioni: false };
  const v = viste(p, ui, corsi, lingua, benvenuto, new Date());
  const fasi = [
    'traguardo',
    'materie',
    'priorita',
    'ostacolo',
    'tempo',
    'piano',
    'lezione',
    'dubbio',
    'offerta',
    'ordine',
    'fine'
  ];
  const nomi = t(
    [
      'Traguardo',
      'Materie',
      'Capitoli',
      'Metodo',
      'Tempo',
      'Piano',
      'Prima sessione',
      'La tua scelta',
      'Confronto'
    ],
    ['Goal', 'Subjects', 'Chapters', 'Method', 'Time', 'Plan', 'First session', 'Your decision', 'Comparison']
  );
  const avanti = t(
    [
      'Scegli le materie',
      'Scegli i capitoli',
      'Continua',
      'Organizza il tempo',
      'Crea il mio piano',
      'Prova una sessione',
      'Valuta il percorso',
      'Confronta le opzioni',
      'Rivedi la scelta',
      'Simula l’acquisto',
      'Torna all’esercizio'
    ],
    [
      'Choose subjects',
      'Choose chapters',
      'Continue',
      'Set my schedule',
      'Create my plan',
      'Try a session',
      'Consider my options',
      'Compare options',
      'Review my choice',
      'Simulate purchase',
      'Back to the exercise'
    ]
  );
  const dialogo = document.createElement('dialog');
  dialogo.className = 'pa-dialog';
  dialogo.setAttribute('aria-labelledby', 'pa-titolo');
  dialogo.innerHTML = `<div class="pa-testata"><div class="pa-marchio"><img alt="" width="26" height="26">Ripetizioni di Analisi</div><span class="pa-fase"></span></div><div class="pa-progress" role="progressbar" aria-label="${t('Avanzamento', 'Progress')}" aria-valuemin="1" aria-valuemax="9"></div><div class="pa-corpo"></div><div class="pa-azioni"><button type="button" class="pa-salta" data-act="esci">${t('Salta', 'Skip')}</button><button type="button" class="pa-primario" data-act="avanti"></button></div>`;
  dialogo.querySelector('img').src = avvio.dataset.logo;
  document.body.append(dialogo);
  const corpo = dialogo.querySelector('.pa-corpo');
  const primario = dialogo.querySelector('.pa-primario');
  const progresso = dialogo.querySelector('.pa-progress');
  const apriPiano = avvio.querySelector('[data-avvia-anteprima]');
  let fase = 'traguardo',
    origine,
    ritornoDalPiano,
    automatica = true,
    giroCarica = 0,
    estratto = null;
  function consenteAvanti() {
    if (fase === 'traguardo') return !!p.obiettivo;
    if (fase === 'materie' || fase === 'priorita') return p.materie.length > 0;
    if (fase === 'ostacolo') return !!p.ostacolo;
    if (fase === 'tempo') return p.giorni.length > 0 && !!p.orizzonte;
    if (fase === 'dubbio') return !!p.dubbio;
    if (fase === 'offerta') return alternative(p, corsi, benvenuto).opzioni.some((o) => o.id === p.scelta);
    return true;
  }
  function aggiornaAvanti() {
    let label = avanti[fasi.indexOf(fase)];
    if (fase === 'piano' && ritornoDalPiano) label = t('Torna alla mia scelta', 'Back to my choice');
    if ((fase === 'dubbio' && p.dubbio === 'gratuito') || (fase === 'offerta' && p.scelta === 'gratis'))
      label = t('Tieni il piano gratuito', 'Keep my free plan');
    primario.disabled = !consenteAvanti();
    primario.textContent = label;
  }
  async function mostraEstratto() {
    const seq = ++giroCarica;
    const corso = corsi.get(ui.prova),
      arg = capitolo(p, corso);
    const dato = await caricaScheda(arg, lingua);
    if (seq !== giroCarica || fase !== 'lezione' || !dialogo.open) return;
    estratto = dato;
    corpo.querySelector('[data-estratto]').innerHTML = v.estratto(dato, arg);
  }
  function disegna() {
    const i = fasi.indexOf(fase),
      n = Math.min(i + 1, 9);
    const label =
      (i > 8
        ? t(fase === 'ordine' ? 'Riepilogo' : 'Il tuo piano', fase === 'ordine' ? 'Summary' : 'Your plan')
        : nomi[i]) +
      ' · ' +
      n +
      t(' di ', ' of ') +
      '9';
    dialogo.querySelector('.pa-fase').textContent = label;
    progresso.setAttribute('aria-valuenow', String(n));
    progresso.setAttribute('aria-valuetext', label);
    progresso.innerHTML = nomi
      .map((_, j) => '<span' + (j < n ? ' class="attiva"' : '') + '></span>')
      .join('');
    const indietro =
      i > 0 && fase !== 'fine'
        ? `<div class="pa-meta"><button type="button" class="pa-indietro" data-act="indietro">${t('Indietro', 'Back')}</button></div>`
        : '';
    if (fase === 'lezione' && !p.materie.includes(ui.prova)) ui.prova = p.priorita;
    corpo.innerHTML = indietro + v[fase]();
    if (fase === 'dubbio' && p.dubbio === 'gratuito')
      corpo.insertAdjacentHTML(
        'beforeend',
        `<button class="pa-link" type="button" data-act="confronta">${t('Voglio comunque confrontare i prezzi', 'I would still like to compare prices')}</button>`
      );
    if (fase === 'fine')
      corpo.insertAdjacentHTML(
        'beforeend',
        `<button type="button" class="pa-link pa-rivedi" data-act="piano">${t('Rivedi il calendario', 'Review schedule')}</button>`
      );
    dialogo.querySelector('.pa-salta').hidden = fase === 'fine';
    aggiornaAvanti();
    corpo.scrollTop = 0;
    if (dialogo.open) corpo.querySelector('h2').focus({ preventScroll: true });
    if (fase === 'lezione' && dialogo.open) mostraEstratto();
  }
  function vai(prossima) {
    ++giroCarica;
    if (prossima === 'lezione') {
      ui.prova = p.priorita;
      ui.passi = 0;
      estratto = null;
    }
    fase = prossima;
    disegna();
  }
  function apri(da) {
    if (dialogo.open || document.querySelector('dialog[open]')) return;
    automatica = false;
    origine = { da, x: window.scrollX, y: window.scrollY };
    dialogo.showModal();
    disegna();
  }
  dialogo.addEventListener('close', () => {
    ++giroCarica;
    const url = new URL(location.href);
    url.searchParams.delete('anteprima-percorso');
    history.replaceState(history.state, '', url);
    if (origine?.da?.isConnected) origine.da.focus({ preventScroll: true });
    if (origine) window.scrollTo({ left: origine.x, top: origine.y, behavior: 'instant' });
  });
  dialogo.addEventListener('input', (e) => {
    if (e.target.name === 'cerca') {
      ui.ricerca = e.target.value;
      corpo.querySelector('.pa-materie').innerHTML = v.listaMaterie();
    }
  });
  function ridisegnaSu(campo) {
    const { name, value } = campo;
    disegna();
    const controllo = [...corpo.querySelectorAll('input,select')].find(
      (el) => el.name === name && el.value === value
    );
    controllo?.focus({ preventScroll: true });
    controllo?.scrollIntoView({ block: 'nearest' });
  }
  dialogo.addEventListener('change', (e) => {
    const el = e.target,
      { name, value, checked } = el;
    if (name === 'gruppo') {
      ui.gruppo = value;
      corpo.querySelector('.pa-materie').innerHTML = v.listaMaterie();
    }
    if (name === 'materia') {
      selezionaMateria(
        p,
        value,
        checked,
        corsi,
        value === avvio.dataset.materia ? avvio.dataset.argomento : ''
      );
      p.settimana = 0;
      corpo.querySelector('.pa-selezione').innerHTML = v.selezione();
    }
    if (name === 'obiettivo' && Object.hasOwn(percorsi, value)) p.obiettivo = value;
    if (name === 'ostacolo' && Object.hasOwn(ostacoli, value)) p.ostacolo = value;
    if (name === 'priorita' && p.materie.includes(value)) {
      p.priorita = value;
      p.scelta = '';
    }
    if (name?.startsWith('tema:')) {
      const id = name.slice(5);
      if (p.materie.includes(id) && corsi.get(id).capitoli.some((a) => a.slug === value)) p.temi[id] = value;
    }
    if (name === 'possiedo' && p.materie.includes(value)) {
      p.possedute = checked ? [...p.possedute, value] : p.possedute.filter((id) => id !== value);
      ripristinaOfferta(p, corsi);
    }
    if (name === 'orizzonte') {
      p.orizzonte = Object.hasOwn(orizzonti, value) ? value : '';
      p.settimana = 0;
      p.scelta = '';
    }
    if (name === 'giorno' || name === 'minuti') {
      if (name === 'minuti') p.minuti = Number(value);
      else
        p.giorni = checked
          ? [...p.giorni, Number(value)].sort((a, b) => a - b)
          : p.giorni.filter((n) => n !== Number(value));
      p.settimana = 0;
      p.scelta = '';
      corpo.querySelector('[data-ritmo]').textContent = v.ritmoTesto();
    }
    if (name === 'prova' && p.materie.includes(value)) {
      ui.prova = value;
      ui.passi = 0;
      estratto = null;
      ridisegnaSu(el);
    }
    if (name === 'dubbio' && Object.hasOwn(dubbi, value)) {
      p.dubbio = value;
      p.scelta = '';
      ridisegnaSu(el);
    }
    if (name === 'offerta') p.scelta = value;
    if (name === 'primo' || name === 'in-pacchetto') {
      ui.condizioni = true;
      if (name === 'primo') p.primoAcquisto = checked;
      else p.pacchetto = checked ? [...p.pacchetto, value] : p.pacchetto.filter((k) => k !== value);
      p.scelta = '';
      ridisegnaSu(el);
    }
    aggiornaAvanti();
  });
  function scarica() {
    const link = document.createElement('a');
    const url = URL.createObjectURL(
      new Blob(['\ufeff', v.testoPiano()], { type: 'text/plain;charset=utf-8' })
    );
    link.href = url;
    link.download = t('Il-mio-piano-di-studio.txt', 'My-study-plan.txt');
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 30000);
    const esito = corpo.querySelector('.pa-msg');
    if (esito) esito.textContent = t('Piano pronto per il download.', 'Your plan is ready to download.');
  }
  dialogo.addEventListener('click', (e) => {
    const b = e.target.closest('button[data-act]');
    if (!b || b.disabled) return;
    const a = b.dataset.act;
    if (a === 'esci') return dialogo.close();
    if (a === 'indietro') {
      ritornoDalPiano = undefined;
      return vai(fasi[fasi.indexOf(fase) - 1]);
    }
    if (a === 'download') return scarica();
    if (a === 'piano') {
      ritornoDalPiano = fase;
      return vai('piano');
    }
    if (a === 'confronta') return vai('offerta');
    if (a === 'prev-week' || a === 'next-week') {
      p.settimana = Math.min(settimanePiano(p) - 1, Math.max(0, p.settimana + (a === 'next-week' ? 1 : -1)));
      return disegna();
    }
    if (a === 'riprova') return mostraEstratto();
    if (a === 'passo' && estratto) {
      ui.passi = Math.min(ui.passi + 1, estratto.passi.length);
      const host = corpo.querySelector('[data-estratto]');
      host.innerHTML = v.estratto(estratto, capitolo(p, corsi.get(ui.prova)));
      const passo = host.querySelector('.pa-passo:last-of-type') || host;
      passo.tabIndex = -1;
      passo.focus({ preventScroll: true });
      passo.scrollIntoView({ block: 'nearest' });
      return;
    }
    if (a !== 'avanti' || !consenteAvanti()) return;
    if (fase === 'piano' && ritornoDalPiano) {
      const torna = ritornoDalPiano;
      ritornoDalPiano = undefined;
      return vai(torna);
    }
    if (fase === 'fine') return dialogo.close();
    if ((fase === 'dubbio' && p.dubbio === 'gratuito') || (fase === 'offerta' && p.scelta === 'gratis')) {
      p.scelta = 'gratis';
      return vai('fine');
    }
    return vai(fasi[fasi.indexOf(fase) + 1]);
  });
  avvio.hidden = false;
  apriPiano.addEventListener('click', () => apri(apriPiano));
  const titoli = studio.querySelectorAll(':scope > h2');
  if (titoli.length) {
    const invito = document.createElement('div');
    invito.className = 'pa-fine-esercizio';
    invito.innerHTML = `<span>${t('Vuoi organizzare le prossime sessioni?', 'Want to plan your next study sessions?')}</span><button type="button">${t('Ho finito l’esercizio', 'I’ve finished the exercise')}</button>`;
    const b = invito.querySelector('button');
    b.addEventListener('click', () => apri(b));
    if (titoli[1]) studio.insertBefore(invito, titoli[1]);
    else studio.append(invito);
    studio.addEventListener(
      'click',
      (e) => {
        const comandi = e.target.closest('.passi-comandi');
        if (
          !automatica ||
          !comandi ||
          !(titoli[0].compareDocumentPosition(comandi) & Node.DOCUMENT_POSITION_FOLLOWING) ||
          !(invito.compareDocumentPosition(comandi) & Node.DOCUMENT_POSITION_PRECEDING)
        )
          return;
        setTimeout(() => {
          if (!comandi.isConnected && automatica) apri(b);
        }, 0);
      },
      true
    );
  }
  if (modo === '1') apri(apriPiano);
}
