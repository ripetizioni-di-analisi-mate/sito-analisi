import { alternative, capitolo, dubbi, orizzonti, ostacoli, percorsi, programma, tappa } from './piano.mjs';
import { esc } from './lezione.mjs';

export const settimanePiano = (p) =>
  ({
    presto: 1,
    mese: 2,
    lungo: 4,
    libero: Math.max(2, Math.ceil(p.materie.length / Math.max(1, p.giorni.length)))
  })[p.orizzonte] || 1;
const normalizza = (s) =>
  s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();

export function viste(p, ui, corsi, lingua, benvenuto, inizio) {
  const en = lingua === 'en';
  const t = (it, eng) => (en ? eng : it);
  const euro = (cents) =>
    new Intl.NumberFormat(en ? 'en-IE' : 'it-IT', { style: 'currency', currency: 'EUR' }).format(cents / 100);
  const data = (d) =>
    new Intl.DateTimeFormat(en ? 'en-GB' : 'it-IT', {
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    }).format(d);
  const giorni = t(
    ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'],
    ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  );
  const nome = (id) => esc(corsi.get(id).nome);
  const titolo = (h, intro = '') =>
    `<h2 id="pa-titolo" tabindex="-1">${h}</h2>${intro ? `<p class="pa-intro">${intro}</p>` : ''}`;
  const box = (h, c) => `<section class="pa-box"><h3>${h}</h3>${c}</section>`;
  const button = (a, label, more = '') =>
    `<button class="pa-link" type="button" data-act="${a}" ${more}>${label}</button>`;
  const link = (url, label) =>
    `<a class="pa-link" href="${esc(url)}" target="_blank" rel="noopener">${label}</a>`;
  const etich = (key, v) => key[v][lingua];
  const radio = (name, val, on, h, sub = '') =>
    `<label class="pa-opzione"><input type="radio" name="${name}" value="${esc(val)}" ${on ? 'checked' : ''}><span><span><b>${h}</b>${sub ? `<small>${sub}</small>` : ''}</span></span></label>`;
  const scelte = (name, dict, multi = false) =>
    `<fieldset class="pa-scelte ${multi ? 'pa-due' : ''}" aria-labelledby="pa-titolo">${Object.entries(dict)
      .map(([key, v]) => radio(name, key, p[name] === key, ...v[lingua].slice(0, 2)))
      .join('')}</fieldset>`;
  const select = (label, name, opts, value) =>
    `<label class="pa-campo"><span>${label}</span><select name="${esc(name)}">${opts.map(([v, l]) => `<option value="${esc(v)}" ${v === value ? 'selected' : ''}>${esc(l)}</option>`).join('')}</select></label>`;
  const check = (name, value, checked, label) =>
    `<label class="pa-check"><input type="checkbox" name="${name}" value="${esc(value)}" ${checked ? 'checked' : ''}><span>${label}</span></label>`;
  const turno = () => programma(p, corsi, inizio, p.settimana);
  const ord = () => alternative(p, corsi, benvenuto);
  const fonte = (a) =>
    link(
      a.scheda || a.teoria,
      a.scheda
        ? t('Apri la scheda completa', 'Open the full exercise sheet')
        : t('Apri il capitolo', 'Open the chapter')
    );
  const nomeOfferta = (o) =>
    o.id === 'gratis'
      ? t('Il piano gratuito', 'The free plan')
      : o.id === 'singola'
        ? nome(o.slugs[0])
        : t(`Le tue ${o.slugs.length} materie`, `Your ${o.slugs.length} subjects`);
  const attuale = () => ord().opzioni.find((o) => o.id === p.scelta);

  function traguardo() {
    return (
      titolo(
        t('Per cosa ti stai preparando?', 'What are you preparing for?'),
        t(
          'Scegli il tuo traguardo. Costruiremo una settimana di studio e potrai provare la prima sessione sul capitolo che ti interessa.',
          'Choose your goal. Put together a week of study and try the first session on a chapter you care about.'
        )
      ) + scelte('obiettivo', percorsi, true)
    );
  }
  function listaMaterie() {
    const cerca = normalizza(ui.ricerca);
    const lista = [...corsi.values()].filter(
      (c) =>
        (!ui.gruppo || c.gruppo === ui.gruppo) &&
        (!cerca || normalizza(c.nome + ' ' + c.gruppo + ' ' + c.slug.replaceAll('-', ' ')).includes(cerca))
    );
    return lista.length
      ? lista.map((c) => check('materia', c.slug, p.materie.includes(c.slug), esc(c.nome))).join('')
      : `<p>${t('Nessuna materia trovata. Cambia il testo o il gruppo.', 'No matches. Try another name or subject group.')}</p>`;
  }
  function selezione() {
    if (!p.materie.length) return t('Nessuna materia selezionata', 'No subjects selected');
    return `<strong>${t('Nel tuo piano', 'In your plan')} (${p.materie.length})</strong> ${p.materie.map(nome).join(' · ')}`;
  }
  function materie() {
    const gruppi = [...new Set([...corsi.values()].map((c) => c.gruppo))].map((g) => [g, g]);
    return (
      titolo(
        t('Quali materie vuoi preparare insieme?', 'Which subjects will you study together?'),
        t(
          'Puoi combinare materie di percorsi diversi e includere quelle che già studi.',
          'Mix subjects from different programmes, including ones you are already studying.'
        )
      ) +
      `<div class="pa-filtri"><label class="pa-campo"><span>${t('Cerca una materia', 'Find a subject')}</span><input type="search" name="cerca" value="${esc(ui.ricerca)}"></label>${select(t('Percorso', 'Subject group'), 'gruppo', [['', t('Tutti i percorsi', 'All groups')], ...gruppi], ui.gruppo)}</div>
      <div class="pa-selezione" aria-live="polite">${selezione()}</div><fieldset class="pa-materie" aria-label="${t('Materie disponibili', 'Available subjects')}">${listaMaterie()}</fieldset>`
    );
  }
  function priorita() {
    return (
      titolo(
        t('Da quale capitolo vuoi partire?', 'Which chapter will you start with?'),
        t(
          'Dai la precedenza alla materia più urgente. Per le altre puoi scegliere già adesso il capitolo da mettere in calendario.',
          'Give the most urgent subject the first slot. You can also choose the chapter to schedule for each of the others.'
        )
      ) +
      (p.materie.length > 1
        ? select(
            t('Prima materia da studiare', 'First subject to study'),
            'priorita',
            p.materie.map((s) => [s, corsi.get(s).nome]),
            p.priorita
          )
        : '') +
      p.materie
        .map((s) => {
          const c = corsi.get(s);
          return `<div class="pa-capitolo">${select(
            nome(s),
            'tema:' + s,
            c.capitoli.map((a) => [a.slug, a.nome]),
            p.temi[s]
          )}${c.prezzo ? check('possiedo', s, p.possedute.includes(s), t('Ho già accesso al corso completo', 'I already have full access to this subject')) : `<small>${t('Materia gratuita con account', 'Free subject with an account')}</small>`}</div>`;
        })
        .join('')
    );
  }
  function ostacolo() {
    return (
      titolo(
        t('Quando studi, dove perdi più tempo?', 'Where do you lose time when studying?'),
        t(
          'La tua scelta cambia il lavoro da fare in ogni sessione e il modo in cui proverai il materiale.',
          'Your answer shapes each session and how you will try the material.'
        )
      ) + scelte('ostacolo', ostacoli, true)
    );
  }
  function ritmoTesto() {
    return t(
      `${p.giorni.length} sessioni × ${p.minuti} minuti = ${p.giorni.length * p.minuti} minuti alla settimana`,
      `${p.giorni.length} sessions × ${p.minuti} minutes = ${p.giorni.length * p.minuti} minutes per week`
    );
  }
  function tempo() {
    const oriz = [
      ['', t('Scegli la scadenza', 'Choose a timeframe')],
      ...Object.entries(orizzonti).map(([k, v]) => [k, v[lingua][0]])
    ];
    return (
      titolo(
        t('Quale spazio hai davvero per studiare?', 'When can you realistically study?'),
        t(
          'Scegli i giorni che puoi mantenere anche in una settimana piena.',
          'Pick days you can keep even during a busy week.'
        )
      ) +
      select(
        t('Quando ti serve essere pronto?', 'When do you want to be ready?'),
        'orizzonte',
        oriz,
        p.orizzonte
      ) +
      `<fieldset class="pa-pillole"><legend>${t('Giorni disponibili', 'Available days')}</legend>${giorni.map((d, i) => check('giorno', i + 1, p.giorni.includes(i + 1), d)).join('')}</fieldset>
      <fieldset class="pa-pillole"><legend>${t('Tempo per sessione', 'Time per session')}</legend>${[15, 25, 45, 60].map((n) => `<label><input type="radio" name="minuti" value="${n}" ${p.minuti === n ? 'checked' : ''}><span>${n} min</span></label>`).join('')}</fieldset>
      <p class="pa-nota" data-ritmo aria-live="polite">${ritmoTesto()}</p>`
    );
  }

  function piano() {
    const sedute = turno(),
      limite = settimanePiano(p),
      visti = new Set(sedute.map((s) => s.corso.slug));
    const inCoda = p.materie.filter((id) => !visti.has(id));
    const riassunto = `${etich(percorsi, p.obiettivo)[0]} · ${etich(orizzonti, p.orizzonte)[0]} · ${p.giorni.length * p.minuti} min/${t('settimana', 'week')}`;
    const righe = sedute
      .map(
        (s) =>
          `<li><div class="pa-data">${esc(data(s.data))}</div><div><b>${esc(s.corso.nome)} · ${esc(s.arg.nome)}</b><small>${tappa(
            s,
            p,
            lingua
          )
            .map((testo, i) => `${s.blocchi[i]}′ ${testo}`)
            .join(' · ')}</small></div></li>`
      )
      .join('');
    const coda = inCoda.length
      ? `<p class="pa-nota">${limite === 1 ? t('Con questi giorni le seguenti materie restano fuori dalla settimana. Puoi tornare al calendario e aggiungere una sessione.', 'With these days, the following subjects will not fit this week. You can go back and add a session.') : t('Materie fuori da questa settimana, in ordine di rotazione', 'Subjects outside this week, in rotation order')} ${inCoda.map(nome).join(', ')}.</p>`
      : '';
    return (
      titolo(t('Il tuo piano di studio', 'Your study plan'), riassunto) +
      `<p class="pa-nota">${etich(orizzonti, p.orizzonte)[1]}</p><div class="pa-settimana"><h3>${t('Settimana', 'Week')} ${p.settimana + 1}</h3><div>${p.settimana > 0 ? button('prev-week', t('Precedente', 'Previous')) : ''} ${p.settimana + 1 < limite ? button('next-week', t('Successiva', 'Next week')) : ''}</div></div>
      <ol class="pa-agenda">${righe}</ol>${coda}` +
      box(
        t('Come verificare se la sessione è servita', 'How to tell whether the session helped'),
        `<p>${etich(percorsi, p.obiettivo)[2]}</p>`
      ) +
      button('download', t('Scarica il mio piano gratuito', 'Download my free plan')) +
      `<span class="pa-msg" role="status"></span>`
    );
  }
  function lezione() {
    const c = corsi.get(ui.prova),
      a = capitolo(p, c);
    const menu =
      p.materie.length > 1
        ? select(
            t('Materia da provare', 'Subject to try'),
            'prova',
            p.materie.map((s) => [s, corsi.get(s).nome]),
            ui.prova
          )
        : '';
    return (
      titolo(
        t('Prova una sessione del tuo piano', 'Try a session from your plan'),
        `${nome(c.slug)} · ${esc(a.nome)}`
      ) +
      menu +
      box(
        t('Prima di aprire lo svolgimento', 'Before looking at the solution'),
        `<p>${etich(ostacoli, p.ostacolo)[2]}</p>`
      ) +
      `<div class="pa-lezione" data-estratto aria-live="polite"><p>${t('Apro il materiale del capitolo…', 'Opening the chapter material…')}</p></div>` +
      fonte(a)
    );
  }
  function estratto(dato, a) {
    if (!dato)
      return `<p>${t('Il materiale si può consultare nella pagina del capitolo.', 'The material is available on the chapter page.')}</p>${button('riprova', t('Ricarica l’estratto', 'Reload the excerpt'))}`;
    const passi = dato.passi.slice(0, ui.passi);
    return (
      `<h3>${esc(dato.titolo)}</h3><div class="pa-traccia">${dato.traccia}</div>${passi.map((v, i) => `<div class="pa-passo"><small>${t('Passaggio', 'Step')} ${i + 1}</small>${v}</div>`).join('')}` +
      (ui.passi < dato.passi.length
        ? button(
            'passo',
            ui.passi
              ? t('Mostra il passaggio successivo', 'Show the next step')
              : t('Scopri il primo passaggio', 'Reveal the first step')
          )
        : '') +
      (!dato.passi.length && a.scheda
        ? `<p>${t('Lo svolgimento completo è nella scheda qui sotto.', 'The full solution is on the sheet below.')}</p>`
        : '')
    );
  }
  function rispostaDubbio() {
    const primo = corsi.get(p.priorita);
    if (p.dubbio === 'programma')
      return box(
        t('Controlla i capitoli che hai scelto', 'Check the chapters you chose'),
        `<ul>${p.materie
          .map((id) => {
            const c = corsi.get(id);
            return `<li>${nome(id)} · ${esc(capitolo(p, c).nome)} · ${link(c.programma, t('Vedi il programma', 'See syllabus'))}</li>`;
          })
          .join('')}</ul>`
      );
    if (p.dubbio === 'costanza') {
      const s = programma(p, corsi, inizio)[0];
      return box(
        t('La tua prima sessione è già definita', 'Your first session is ready'),
        `<p>${esc(data(s.data))} · ${nome(primo.slug)} · ${p.minuti} min.</p><p>${tappa(s, p, lingua)
          .map((x, i) => s.blocchi[i] + '′ ' + x)
          .join(' · ')}</p>${button('piano', t('Rivedi il mio calendario', 'Review my schedule'))}`
      );
    }
    if (p.dubbio === 'prezzo') {
      const { opzioni } = ord();
      const singola = opzioni.find((o) => o.id === 'singola');
      const condizione = singola?.percentuale
        ? t(
            `Per la materia singola è simulato il primo acquisto con il ${singola.percentuale}% di sconto. Il prezzo di listino è ${euro(singola.listino)}.`,
            `The single subject includes a simulated first-purchase discount of ${singola.percentuale}%. Its list price is ${euro(singola.listino)}.`
          )
        : '';
      return box(
        t('Il costo cambia con ciò che scegli', 'What you choose determines the cost'),
        `<ul>${opzioni.map((o) => `<li>${nomeOfferta(o)} · <b>${euro(o.totale)}</b></li>`).join('')}</ul>${condizione ? '<p>' + condizione + '</p>' : ''}`
      );
    }
    if (p.dubbio === 'gratuito')
      return box(
        t('Comincia con il materiale aperto', 'Start with the free material'),
        `<p>${esc(capitolo(p, primo).nome)} · ${fonte(capitolo(p, primo))}</p><p>${t('Puoi tenere il calendario e decidere dopo la prima settimana.', 'Keep your schedule and decide after the first week.')}</p>`
      );
    return '';
  }
  function dubbio() {
    return (
      titolo(t('Cosa vuoi chiarire prima di scegliere?', 'What would help you decide?')) +
      scelte('dubbio', dubbi, true) +
      `<div data-dettaglio-dubbio aria-live="polite">${rispostaDubbio()}</div>`
    );
  }
  function motivo(id) {
    const principale = corsi.get(p.priorita),
      tema = esc(capitolo(p, principale).nome);
    const quando = data(programma(p, corsi, inizio)[0].data);
    if (id === 'gratis')
      return p.dubbio === 'gratuito'
        ? t(
            `Hai scelto di provare il metodo. Il ${quando} puoi già dedicare ${p.minuti} minuti a «${tema}» con la prima scheda gratuita.`,
            `You want to try the method. On ${quando} you can spend ${p.minuti} minutes on “${tema}” with the free material.`
          )
        : t(
            `Per «${tema}», la tua priorità in ${nome(p.priorita)}, puoi già usare l’accesso che hai indicato. Inizia da lì.`,
            `For “${tema}”, your priority in ${nome(p.priorita)}, you can use the access you already have. Start there.`
          );
    if (id === 'singola')
      return t(
        `La prima sessione è su «${tema}». Con ${nome(p.priorita)} puoi proseguire su questo capitolo e sugli altri della materia.`,
        `Your first session covers “${tema}”. With ${nome(p.priorita)} you can continue with this chapter and the rest of the subject.`
      );
    const off = ord().opzioni.find((o) => o.id === 'pacchetto');
    return t(
      `Hai previsto ${p.giorni.length * p.minuti} minuti alla settimana, cominciando da ${nome(p.priorita)}. Per le ${off.slugs.length} materie incluse il pacchetto costa ${euro(off.listino - off.totale)} in meno dei prezzi di listino separati.`,
      `You set aside ${p.giorni.length * p.minuti} minutes per week, starting with ${nome(p.priorita)}. For the ${off.slugs.length} subjects included, the bundle costs ${euro(off.listino - off.totale)} less than their separate list prices.`
    );
  }
  function offerta() {
    const { opzioni, suggerita, pagabili } = ord();
    const rec = opzioni.find((o) => o.id === suggerita);
    let controlli = '';
    if (pagabili.length)
      controlli = `<details class="pa-condizioni" ${ui.condizioni ? 'open' : ''}><summary>${t('Condizioni del confronto e materie incluse', 'Comparison settings and included subjects')}</summary>${check('primo', '1', p.primoAcquisto, t('Simula il primo acquisto di una materia', 'Simulate a first subject purchase'))}
      <p>${t(`Il ${benvenuto}% di benvenuto si applica alla prima materia singola. Il pacchetto ha il proprio sconto.`, `The ${benvenuto}% welcome discount applies to the first single subject. The bundle has its own discount.`)}</p>${pagabili.length > 1 ? `<fieldset class="pa-pacchetto"><legend>${t('Materie da confrontare nel pacchetto (da 2 a 30)', 'Subjects in the bundle comparison (2 to 30)')}</legend>${pagabili.map((k) => check('in-pacchetto', k, p.pacchetto.includes(k), nome(k))).join('')}</fieldset>` : ''}</details>`;
    const descr = (o) =>
      o.id === 'gratis'
        ? t(
            'Calendario, materiale già disponibile e prime schede dei capitoli.',
            'Schedule, material you already have and the first worked sheets.'
          )
        : o.id === 'singola'
          ? t(
              `Pagamento unico, accesso senza scadenza.${o.percentuale ? ' Primo acquisto −' + o.percentuale + '% sul listino di ' + euro(o.listino) + '.' : ''}`,
              `One payment, access with no expiry.${o.percentuale ? ' First purchase: ' + o.percentuale + '% off the ' + euro(o.listino) + ' list price.' : ''}`
            )
          : t(
              `${o.slugs.map(nome).join(', ')}. Risparmi ${euro(o.listino - o.totale)} sul listino.`,
              `${o.slugs.map(nome).join(', ')}. You save ${euro(o.listino - o.totale)} against list price.`
            );
    const ordinati = [rec, ...opzioni.filter((o) => o !== rec)];
    return (
      titolo(
        t('Quale accesso ha senso per te?', 'Which access fits your plan?'),
        t(
          'Confronto in anteprima. I prezzi mostrano cosa copre ciascuna scelta.',
          'Preview comparison. See what each option covers and costs.'
        )
      ) +
      box(
        t('Il nostro consiglio', 'Our suggestion') + ' · ' + nomeOfferta(rec),
        `<p>${motivo(suggerita)}</p>`
      ) +
      `<fieldset class="pa-scelte" aria-label="${t('Opzioni disponibili', 'Available options')}">${ordinati.map((o) => radio('offerta', o.id, p.scelta === o.id, nomeOfferta(o) + ' · ' + euro(o.totale), descr(o))).join('')}</fieldset>` +
      (p.pacchetto.length > 30
        ? `<p>${t('Per confrontare un pacchetto scegli al massimo 30 materie nelle condizioni qui sotto.', 'To compare a bundle, choose up to 30 subjects in the settings below.')}</p>`
        : '') +
      controlli
    );
  }
  function ordine() {
    const o = attuale();
    const righe = o.slugs
      .map(
        (id) =>
          `<div class="pa-riga-prezzo"><span>${nome(id)}</span><span>${euro(Math.round(corsi.get(id).prezzo * 100))}</span></div>`
      )
      .join('');
    return (
      titolo(
        t('Rivedi la tua scelta', 'Review your choice'),
        t(
          'Questo è un riepilogo di prova. La conferma simula l’acquisto.',
          'This is a preview order. Confirming simulates the purchase.'
        )
      ) +
      `<div class="pa-ordine"><h3>${nomeOfferta(o)}</h3>${righe}${o.percentuale ? `<div class="pa-riga-prezzo"><span>${o.id === 'singola' ? t('Sconto primo acquisto', 'First purchase discount') : t('Sconto pacchetto', 'Bundle discount')} (${o.percentuale}%)</span><span>−${euro(o.listino - o.totale)}</span></div>` : ''}<div class="pa-totale"><span>${t('Totale una tantum', 'One-time total')}</span><strong>${euro(o.totale)}</strong></div></div>` +
      `<p class="pa-nota">${t('L’accesso completo riguarda le materie elencate. Il calendario comprende tutte le materie che hai scelto di preparare.', 'Full access covers the subjects listed. The schedule includes every subject you chose to study.')}</p>`
    );
  }
  function fine() {
    const s = programma(p, corsi, inizio)[0];
    return (
      titolo(
        p.scelta === 'gratis'
          ? t('Il piano gratuito è pronto', 'Your free plan is ready')
          : t('Acquisto simulato. Ecco da dove ripartire.', 'Purchase simulated. Here is where to start.'),
        t('La tua prima sessione è già pronta all’uso.', 'Your first session is ready to use.')
      ) +
      box(
        esc(data(s.data)) + ' · ' + nome(s.corso.slug),
        `<p><b>${esc(s.arg.nome)}</b> · ${p.minuti} min</p><p>${tappa(s, p, lingua)[0]} · ${s.blocchi[0]} min</p>${fonte(s.arg)}`
      ) +
      button('download', t('Scarica il mio piano gratuito', 'Download my free plan')) +
      `<span class="pa-msg" role="status"></span>`
    );
  }
  function testoPiano() {
    const lines = [
      t('Il mio piano di studio', 'My study plan'),
      etich(percorsi, p.obiettivo)[0] + ' · ' + etich(orizzonti, p.orizzonte)[0],
      ritmoTesto(),
      etich(ostacoli, p.ostacolo)[2],
      etich(percorsi, p.obiettivo)[2],
      ''
    ];
    for (let w = 0; w < settimanePiano(p); w++) {
      lines.push(t('Settimana', 'Week') + ' ' + (w + 1));
      for (const s of programma(p, corsi, inizio, w))
        lines.push(
          data(s.data) + ' · ' + s.corso.nome + ' · ' + s.arg.nome,
          tappa(s, p, lingua)
            .map((a, i) => s.blocchi[i] + ' min — ' + a)
            .join(' / '),
          new URL(s.arg.scheda || s.arg.teoria, location.origin).href,
          ''
        );
    }
    lines.push(t('Tutte le materie scelte', 'All selected subjects'));
    for (const id of p.materie) {
      const c = corsi.get(id),
        a = capitolo(p, c);
      lines.push(c.nome + ' · ' + a.nome + ' · ' + new URL(a.scheda || a.teoria, location.origin).href);
    }
    return lines.join('\n');
  }
  return {
    traguardo,
    materie,
    priorita,
    ostacolo,
    tempo,
    piano,
    lezione,
    dubbio,
    offerta,
    ordine,
    fine,
    listaMaterie,
    selezione,
    ritmoTesto,
    rispostaDubbio,
    estratto,
    testoPiano
  };
}
