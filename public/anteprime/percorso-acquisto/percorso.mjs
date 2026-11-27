import { courses, extensions } from './contenuti.mjs';

const nonSo = 'non-so';
const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
})[character]);

function caricaStile() {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = new URL('./stile.css', import.meta.url).href;
    link.onload = resolve;
    link.onerror = () => { link.remove(); reject(new Error('CSS')); };
    document.head.append(link);
  });
}

export async function attivaAnteprima(avvio, modo) {
  if (!avvio || avvio.dataset.pronta || !Object.hasOwn(courses, avvio.dataset.materia)) return;
  const studio = document.querySelector('main .testo-studio');
  if (!studio || !['1', 'esercizio'].includes(modo)) return;
  await caricaStile();
  avvio.dataset.pronta = '1';
  const { materia, lingua, titolo, argomento } = avvio.dataset;
  const corso = courses[materia];
  const en = lingua === 'en';
  const t = (it, english) => en ? english : it;
  const testo = value => typeof value === 'string' ? value : value[lingua];
  const mostra = value => escapeHtml(testo(value));
  const nome = escapeHtml(titolo);
  const euro = new Intl.NumberFormat(en ? 'en-IE' : 'it-IT', { style: 'currency', currency: 'EUR' });
  const listino = Math.round(Number(avvio.dataset.prezzo) * 100);
  const percentuale = Number(avvio.dataset.sconto);
  const sconto = Math.round(listino * percentuale / 100);
  const prezzo = centesimi => euro.format(centesimi / 100);
  const dialogo = document.createElement('dialog');
  dialogo.className = 'pa-dialog';
  dialogo.setAttribute('aria-labelledby', 'pa-titolo');
  dialogo.innerHTML = '<div class="pa-progress"></div><div class="pa-corpo"></div><div class="pa-azioni"></div>';
  document.body.append(dialogo);
  const avanzamento = dialogo.querySelector('.pa-progress');
  const corpo = dialogo.querySelector('.pa-corpo');
  const azioni = dialogo.querySelector('.pa-azioni');
  const pulsanteProva = avvio.querySelector('[data-avvia-anteprima]');
  const inizio = () => ({ fase: 'obiettivo', obiettivo: 'method', risposte: [null, null] });
  let stato = inizio();
  let origine;
  let aperturaAutomatica = true;

  function quesiti() {
    const prima = corso.questions[stato.obiettivo];
    return [prima, stato.risposte[0] === prima.correct ? corso.questions.stretch : corso.questions.support];
  }
  function esito() {
    const domande = quesiti();
    const corrette = domande.map((q, i) => stato.risposte[i] === q.correct);
    const punti = corrette.filter(Boolean).length;
    let priorita = domande.findIndex((_, i) => !corrette[i] && stato.risposte[i] !== nonSo);
    if (priorita < 0) priorita = stato.risposte.indexOf(nonSo);
    const livello = priorita === 0 && stato.obiettivo === 'method' ? 0 : punti;
    return { corrette, punti, priorita, esempio: corso.samples[livello], prossimo: corso.samples[livello + 1] || extensions[materia] };
  }
  function pulsante(azione, etichetta, classe, disabilitato = false) {
    return `<button type="button" class="${classe}" data-pa="${azione}" ${disabilitato ? 'disabled' : ''}>${etichetta}</button>`;
  }
  function titoloFase(titoloFase, descrizione = '') {
    return `<h2 id="pa-titolo" tabindex="-1">${titoloFase}</h2>${descrizione ? `<p class="pa-intro">${descrizione}</p>` : ''}`;
  }
  function riferimento(label, indietro = true) {
    return `<div class="pa-meta"><span>${nome} · ${label}</span>${indietro ? pulsante('indietro', t('Indietro','Back'), 'pa-indietro') : ''}</div>`;
  }
  function formula(f) {
    if (!f) return '';
    const num = mostra(f.line);
    const den = f.denominator && mostra(f.denominator);
    const limite = f.tendsTo && escapeHtml(f.tendsTo);
    const rapporto = den ? t(`${num} diviso ${den}`, `${num} divided by ${den}`) : num;
    const etichetta = limite ? t(`Limite per ${limite} di ${rapporto}`, `Limit as ${limite} of ${rapporto}`) : rapporto;
    return `<div class="pa-formula" role="math" aria-label="${etichetta}">`
      + (limite ? `<span class="pa-lim" aria-hidden="true">lim<small>${limite}</small></span>` : '')
      + (den ? `<span class="pa-frazione" aria-hidden="true"><span>${num}</span><span>${den}</span></span>` : `<span aria-hidden="true">${num}</span>`)
      + '</div>';
  }
  function esempio(ex, label) {
    return `<section class="pa-esempio"><span class="pa-etichetta">${label}</span><h3>${mostra(ex.title)}</h3>
      <p>${mostra(ex.task)}</p>${formula(ex.formula)}
      <details><summary>${t('Mostra lo svolgimento','Show the worked solution')}</summary>
      <ol>${ex.steps.map(passo => `<li>${mostra(passo)}</li>`).join('')}</ol></details></section>`;
  }
  function obiettivo() {
    const opzioni = corso.goals.map((goal, i) => {
      const id = i === 0 ? 'method' : 'practice';
      return `<label class="pa-opzione"><input type="radio" name="pa-obiettivo" value="${id}" ${stato.obiettivo === id ? 'checked' : ''}>
        <span><span>${mostra(goal.title)}<small>${mostra(goal.detail)}</small></span></span></label>`;
    });
    return riferimento(escapeHtml(argomento), false) + titoloFase(mostra(corso.headline),
      t('Scegli il tuo obiettivo. Dopo due domande trovi un esercizio da provare gratis.',
        'Choose your goal. Two questions will help us suggest a free exercise to try.'))
      + `<div class="pa-scelte" role="radiogroup" aria-labelledby="pa-titolo">${opzioni.join('')}</div>`;
  }
  function domanda(i) {
    const q = quesiti()[i];
    const risposta = stato.risposte[i];
    const data = risposta !== null;
    const corretta = risposta === q.correct;
    const opzioni = q.choices.map((scelta, j) => {
      const giusta = data && j === q.correct;
      const sceltaErrata = data && j === risposta && !giusta;
      const label = giusta ? t('Soluzione','Solution') : sceltaErrata ? t('La tua scelta','Your choice') : '';
      return `<button type="button" class="pa-risposta${giusta ? ' giusta' : sceltaErrata ? ' scelta' : ''}" data-risposta="${j}" ${data ? 'disabled' : ''}>
        <span class="pa-lettera" aria-hidden="true">${'ABC'[j]}</span><span>${mostra(scelta)}</span>${label ? `<span class="pa-esito-scelta">${label}</span>` : ''}</button>`;
    });
    opzioni.push(`<button type="button" class="pa-nonso" data-risposta="${nonSo}" ${data ? 'disabled' : ''}>${t('Non lo so ancora','I don’t know yet')}</button>`);
    let spiegazione = '';
    if (data) {
      const intestazione = corretta ? t('Esatto.','Correct.') : risposta === nonSo
        ? t('Partiamo dal procedimento.','Start with the method.') : t('Rivediamo il passaggio.','Let’s look at that step.');
      const dettaglio = q.mistakes[risposta];
      spiegazione = `<div class="pa-nota${corretta ? '' : ' neutra'}" role="status" tabindex="-1" data-riscontro>
        <p><strong>${intestazione}</strong></p>${dettaglio ? `<p>${mostra(dettaglio)}</p>` : ''}<p>${mostra(q.explanation)}</p></div>`;
    }
    return riferimento(t(`Domanda ${i + 1} di 2`,`Question ${i + 1} of 2`)) + titoloFase(mostra(q.prompt))
      + formula(q.formula) + `<div class="pa-scelte" role="group" aria-labelledby="pa-titolo">${opzioni.join('')}</div>` + spiegazione;
  }
  function consiglio() {
    const { punti, corrette, priorita, esempio: ex } = esito();
    const domande = quesiti();
    let titoloConsiglio, descrizione;
    if (punti === 2) {
      titoloConsiglio = mostra(corso.next);
      descrizione = t('Hai risolto entrambi i quesiti. Prova ad applicare il metodo in una situazione nuova.',
        'You solved both questions. Try applying the method to a new situation.');
    } else if (stato.risposte.every(r => r === nonSo)) {
      titoloConsiglio = t('Inizia con un esempio guidato','Start with a worked example');
      descrizione = t('Leggi il primo passaggio e prova a scrivere il successivo prima di controllarlo.',
        'Read the first step, then try writing the next one before checking it.');
    } else {
      const q = domande[priorita], scelta = stato.risposte[priorita];
      titoloConsiglio = mostra(q.action);
      if (scelta === nonSo) {
        descrizione = t(`Hai lasciato in sospeso «${mostra(q.skill)}». Puoi provare quel passaggio con lo svolgimento accanto.`,
          `You left “${mostra(q.skill)}” open. Try that step with the worked solution beside you.`);
      } else {
        const sceltaData = mostra(q.choices[scelta]).replace(/[.!?]$/u,'');
        descrizione = t(`Alla domanda ${priorita + 1} hai scelto «${sceltaData}». `, `For question ${priorita + 1} you chose “${sceltaData}”. `)
          + mostra(q.mistakes[scelta] || q.explanation);
      }
    }
    const righe = domande.map((q, i) => {
      const label = stato.risposte[i] === nonSo ? t('Da esplorare','Untried') : corrette[i] ? t('Risposta corretta','Correct answer') : t('Da riprovare','Try again');
      return `<li><strong>${mostra(q.skill)}</strong><small>${label}</small></li>`;
    });
    return riferimento(t('Il tuo punto di partenza','Your starting point')) + titoloFase(titoloConsiglio, descrizione)
      + `<ul class="pa-esiti" aria-label="${t('Le tue due risposte','Your two answers')}">${righe.join('')}</ul>`
      + esempio(ex, t('Esercizio gratuito per te','A free exercise for you'));
  }
  function ordine() {
    return `<div class="pa-ordine"><span class="pa-etichetta">${t('Primo acquisto simulato · Una tantum','Simulated first purchase · One-time payment')}</span><h3>${nome}</h3>
      <div class="pa-riga-prezzo"><span>${t('Prezzo della materia','Course price')}</span><span>${prezzo(listino)}</span></div>
      <div class="pa-riga-prezzo"><span>${t('Sconto iscrizione','Sign-up discount')} (${percentuale}%)</span><span>−${prezzo(sconto)}</span></div>
      <div class="pa-totale"><span>${t('Totale','Total')}</span><strong>${prezzo(listino-sconto)}</strong></div></div>`;
  }
  function offerta() {
    const vantaggi = [mostra(corso.syllabus),t('Esercizi svolti con i passaggi spiegati','Worked exercises with each step explained'),
      t('Esercizi da risolvere e domande a tempo','Practice exercises and timed questions')];
    return riferimento(t('La materia completa','The full course')) + titoloFase(t(`Vuoi continuare con ${nome}?`,`Would you like to continue with ${nome}?`), mostra(corso.courseUse))
      + `<ul class="pa-elenco">${vantaggi.map(v => `<li>${v}</li>`).join('')}</ul><p>${t('Il tuo prossimo esercizio','Your next exercise')} · <strong>${mostra(esito().prossimo.title)}</strong></p>` + ordine();
  }
  function riepilogo() {
    return riferimento(t('Riepilogo','Order summary')) + titoloFase(t('Il tuo acquisto','Your purchase'),
      t('Controlla la materia e l’importo. In questa anteprima puoi simulare la conferma senza inserire dati di pagamento.',
        'Review the course and total. In this preview you can simulate confirmation without entering payment details.')) + ordine();
  }
  function fine() {
    return riferimento(t('Acquisto simulato','Simulated purchase'), false) + titoloFase(t('Riparti dal tuo prossimo esercizio','Pick up with your next exercise'))
      + esempio(esito().prossimo, t('Il tuo prossimo esercizio','Your next exercise'));
  }

  const fasi = ['obiettivo','prima','seconda','consiglio','offerta','riepilogo','fine'];
  const schermate = { obiettivo, prima: () => domanda(0), seconda: () => domanda(1), consiglio, offerta, riepilogo, fine };
  const etichette = [
    t('Inizia la prova','Start the questions'), t('Seconda domanda','Second question'), t('Vedi il mio consiglio','See my feedback'),
    t('Vedi il corso completo','See the full course'), t('Vai al riepilogo','Review my order'), t('Simula il pagamento','Simulate payment'),
    t('Vedi i passaggi','View the steps')
  ];
  function indiceDomanda() { return ['prima','seconda'].indexOf(stato.fase); }
  function inAttesa() {
    const i = indiceDomanda();
    return i >= 0 && stato.risposte[i] === null;
  }
  function disegna(focus = 'titolo') {
    const i = fasi.indexOf(stato.fase);
    const macro = [0,1,1,2,3,3,3][i];
    const tappe = t(['Obiettivo','Prova','Consiglio','Acquisto'], ['Goal','Questions','Feedback','Purchase']);
    avanzamento.innerHTML = `<ol aria-label="${t('Passaggi del percorso','Journey steps')}">${tappe.map((v,k) =>
      `<li ${k === macro ? 'aria-current="step"' : ''} class="${k < macro ? 'completo' : ''}">${v}</li>`).join('')}</ol>`;
    corpo.innerHTML = schermate[stato.fase]();
    const salta = stato.fase === 'fine' ? t('Torna all’esercizio','Back to the exercise')
      : t('Salta<span> e torna all’esercizio</span>','Skip<span> and return to the exercise</span>');
    azioni.innerHTML = pulsante('esci', salta, 'pa-salta') + pulsante(stato.fase === 'fine' ? 'soluzione' : 'avanti', etichette[i], 'pa-primario', inAttesa());
    if (!dialogo.open) return;
    if (focus === 'risposta') {
      const rs = corpo.querySelector('[data-riscontro]');
      rs.focus({preventScroll:true});
      rs.scrollIntoView({block:'nearest'});
    } else {
      corpo.scrollTop = 0;
      corpo.querySelector('h2').focus({preventScroll:true});
    }
  }
  function apri(da) {
    if (dialogo.open || document.querySelector('dialog[open]')) return;
    origine = { da, x: window.scrollX, y: window.scrollY };
    aperturaAutomatica = false;
    stato = inizio();
    disegna();
    dialogo.showModal();
    corpo.scrollTop = 0;
    corpo.querySelector('h2').focus({preventScroll:true});
  }
  dialogo.addEventListener('close', () => {
    // La URL normale si può ricaricare o condividere dopo aver saltato la prova.
    const corrente = new URL(location.href);
    corrente.searchParams.delete('anteprima-percorso');
    history.replaceState(history.state, '', corrente);
    if (origine?.da?.isConnected) origine.da.focus({preventScroll:true});
    if (origine) window.scrollTo({left:origine.x,top:origine.y,behavior:'instant'});
  });
  dialogo.addEventListener('change', evento => {
    if (evento.target.name === 'pa-obiettivo' && ['method','practice'].includes(evento.target.value) && stato.obiettivo !== evento.target.value) {
      stato.obiettivo = evento.target.value;
      stato.risposte = [null, null];
    }
  });
  dialogo.addEventListener('click', evento => {
    const bottone = evento.target.closest('button');
    if (!bottone || bottone.disabled) return;
    const i = indiceDomanda();
    if ('risposta' in bottone.dataset && i >= 0 && inAttesa()) {
      const valore = bottone.dataset.risposta;
      stato.risposte[i] = valore === nonSo ? nonSo : Number(valore);
      disegna('risposta');
      return;
    }
    switch (bottone.dataset.pa) {
      case 'esci': dialogo.close(); break;
      case 'avanti':
        if (!inAttesa()) { stato.fase = fasi[fasi.indexOf(stato.fase)+1]; disegna(); }
        break;
      case 'indietro': stato.fase = fasi[fasi.indexOf(stato.fase)-1]; disegna(); break;
      case 'soluzione': {
        const dettagli = corpo.querySelector('details');
        dettagli.open = true;
        dettagli.querySelector('summary').focus();
        break;
      }
    }
  });
  avvio.hidden = false;
  pulsanteProva.addEventListener('click', () => apri(pulsanteProva));

  // Nel collegamento «esercizio» la prova parte dal vero svolgimento della prima traccia.
  const titoli = studio.querySelectorAll(':scope > h2');
  if (titoli.length) {
    const fineTraccia = document.createElement('div');
    fineTraccia.className = 'pa-fine-esercizio';
    fineTraccia.innerHTML = `<span>${t('Anteprima dopo il primo esercizio','Preview after the first exercise')}</span>
      <button type="button">${t('Ho finito l’esercizio','I’ve finished the exercise')}</button>`;
    const fineEsercizio = fineTraccia.querySelector('button');
    fineEsercizio.addEventListener('click', () => apri(fineEsercizio));
    if (titoli[1]) studio.insertBefore(fineTraccia,titoli[1]); else studio.append(fineTraccia);
    studio.addEventListener('click', evento => {
      if (!aperturaAutomatica) return;
      const comandi = evento.target.closest('.passi-comandi');
      if (!comandi || !(titoli[0].compareDocumentPosition(comandi) & Node.DOCUMENT_POSITION_FOLLOWING)
          || !(fineTraccia.compareDocumentPosition(comandi) & Node.DOCUMENT_POSITION_PRECEDING)) return;
      queueMicrotask(() => {
        if (!comandi.isConnected && aperturaAutomatica) apri(fineEsercizio);
      });
    }, true);
  }
  if (modo === '1') apri(pulsanteProva);
}
