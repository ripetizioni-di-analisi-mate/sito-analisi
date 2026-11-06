import { riepilogoMaterie, riepilogoVideo, videoSovrapposti, euro } from '../data/pacchetti.mjs';

const app = document.getElementById('pacchetti-app');
if (app) avvia();
async function avvia() {
  const materie = JSON.parse(app.dataset.materie);
  const video = JSON.parse(app.dataset.video);
  const caselle = [...app.querySelectorAll('input[name="materia"]')];
  const messaggio = document.getElementById('esito-pacchetto');
  const tabs = [...app.querySelectorAll('[data-tab]')];
  const bottoni = [...app.querySelectorAll('[data-compra]')];
  let io = null, conf = null, caricando = true, occupato = false, pagato = false, selezioneVideo = null, atteso = [];
  let paddlePronto = null;
  const scrivi = (selettore, testo) => { app.querySelector(selettore).textContent = testo; };
  const avviso = (testo) => { messaggio.hidden = !testo; messaggio.textContent = testo; };
  const scorri = (el) => el.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'center' });
  const scelte = () => caselle.filter((c) => c.checked && !c.disabled).map((c) => c.value);
  const riepilogo = (tipo) => {
    try { return tipo === 'materie' ? riepilogoMaterie(scelte(), materie) : riepilogoVideo(selezioneVideo, video); }
    catch { return null; }
  };
  const disponibile = (q) => q && conf && (q.tipo === 'materie'
    ? q.chiavi.every((s) => conf.prezzi[s] && !io?.materie.includes(s))
    : q.video.every((s) => conf.videocorsi[s]) && !videoSovrapposti(q.chiavi, io?.materie || [], video));
  function aggiorna() {
    app.querySelector('fieldset').disabled = occupato || pagato;
    tabs.forEach((b) => { b.disabled = occupato || pagato; });
    app.querySelectorAll('[data-scegli-materie], [data-scegli-video]').forEach((b) => { b.disabled = occupato || pagato || b.dataset.bloccato === '1'; });
    const m = riepilogo('materie'), v = riepilogo('video');
    app.querySelector('#riepilogo-materie').hidden = !m;
    app.querySelector('#riepilogo-video').hidden = !v;
    app.querySelectorAll('[data-sconto]').forEach((el) => { el.classList.toggle('is-attiva', Boolean(m && Number(el.dataset.sconto) === m.percentuale)); });
    app.querySelectorAll('[data-scegli-materie], [data-scegli-video]').forEach((b) => {
      const elenco = b.dataset.scegliMaterie?.split(',');
      const selezionato = elenco ? Boolean(m && elenco.length === m.chiavi.length && elenco.every((s) => m.chiavi.includes(s))) : Boolean(v && b.dataset.scegliVideo === v.id);
      b.closest('.pacchetto').classList.toggle('is-selected', selezionato);
      b.setAttribute('aria-pressed', String(selezionato));
      const etichetta = b.querySelector('[data-etichetta-scelta]');
      const segno = b.querySelector('[data-segno-scelta]');
      if (b.dataset.bloccato !== '1' && etichetta && segno) {
        etichetta.textContent = selezionato ? 'Selezionato' : 'Scegli il pacchetto';
        segno.textContent = selezionato ? '✓' : '→';
      }
      b.setAttribute('aria-label', `${b.dataset.titolo}: ${etichetta?.textContent || b.textContent}`);
    });
    scrivi('[data-nomi-materie]', scelte().length ? scelte().map((s) => materie.find((m) => m.slug === s).titolo).join(' + ') : 'Scegli un pacchetto o le materie che ti servono.');
    scrivi('[data-totale-materie]', m ? euro(m.totale) : '—');
    scrivi('[data-risparmio-materie]', m ? `Risparmi ${euro(m.risparmio)} · sconto del ${m.percentuale}% incluso` : '');
    scrivi('[data-titolo-video]', v?.titolo || 'Il tuo percorso video');
    scrivi('[data-nomi-video]', v ? v.video.map((s) => video.find((v) => v.slug === s).breve).join(' + ') : 'Scegli il pacchetto che ti interessa.');
    scrivi('[data-totale-video]', v ? euro(v.totale) : '—');
    scrivi('[data-risparmio-video]', v ? `Risparmi ${euro(v.risparmio)} · materiale del sito incluso` : '');
    bottoni.forEach((b) => {
      const q = b.dataset.compra === 'materie' ? m : v;
      b.disabled = caricando || occupato || pagato || !disponibile(q);
      b.textContent = pagato ? 'Pagamento ricevuto' : occupato ? 'Apro il pagamento…' : caricando ? 'Un momento…' : !q
        ? b.dataset.compra === 'materie' ? 'Scegli almeno due materie' : 'Scegli un pacchetto'
        : !conf ? 'Pagamento non disponibile' : !disponibile(q) ? 'Pacchetto già posseduto o non disponibile' : `${io ? 'Acquista' : 'Accedi e acquista'} · ${euro(q.totale)}`;
    });
  }
  function scheda(tipo) {
    tabs.forEach((t) => { const attiva = t.dataset.tab === tipo; t.setAttribute('aria-selected', String(attiva)); t.tabIndex = attiva ? 0 : -1; });
    app.querySelector('#pannello-materie').hidden = tipo !== 'materie';
    app.querySelector('#pannello-video').hidden = tipo !== 'video';
  }
  tabs.forEach((t, i) => {
    t.addEventListener('click', () => { scheda(t.dataset.tab); avviso(''); });
    t.addEventListener('keydown', (e) => {
      if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(e.key)) return;
      e.preventDefault(); const n = e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : (i + 1) % tabs.length;
      tabs[n].click(); tabs[n].focus();
    });
  });
  const mostraRiepilogo = (tipo) => {
    const el = app.querySelector(`#riepilogo-${tipo}`);
    el.querySelector('h2').focus({ preventScroll: true });
    scorri(el);
  };
  app.querySelector('[data-apri-componi]')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (occupato || pagato) return;
    const el = app.querySelector('#componi'); el.open = true;
    (el.querySelector('input:not(:disabled)') || el.querySelector('summary')).focus({ preventScroll: true });
    el.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  });
  app.querySelectorAll('[data-scegli-materie]').forEach((b) => b.addEventListener('click', () => {
    const elenco = b.dataset.scegliMaterie.split(',');
    caselle.forEach((c) => { c.checked = !c.disabled && elenco.includes(c.value); });
    app.querySelector('#componi').open = false;
    avviso(''); aggiorna(); mostraRiepilogo('materie');
  }));
  app.querySelectorAll('[data-scegli-video]').forEach((b) => b.addEventListener('click', () => {
    selezioneVideo = b.dataset.scegliVideo; avviso(''); aggiorna(); mostraRiepilogo('video');
  }));
  caselle.forEach((c) => c.addEventListener('change', () => { avviso(''); aggiorna(); }));

  const params = new URLSearchParams(location.search);
  if (params.get('tipo') === 'video') { scheda('video'); selezioneVideo = params.get('pacchetto'); }
  else { const elenco = (params.get('materie') || '').split(','); caselle.forEach((c) => { c.checked = elenco.includes(c.value); }); }

  async function caricaPaddle() {
    if (paddlePronto) return paddlePronto;
    paddlePronto = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = 'https://cdn.paddle.com/paddle/v2/paddle.js';
      s.onerror = () => { paddlePronto = null; s.remove(); reject(new Error('Non riesco a caricare il pagamento. Riprova.')); };
      s.onload = () => {
        try {
          if (conf.ambiente === 'sandbox') window.Paddle.Environment.set('sandbox');
          window.Paddle.Initialize({ token: conf.token, eventCallback: (ev) => {
            if (ev.name === 'checkout.error') { avviso('Non riesco ad aprire il pagamento. Riprova o scrivi a Carmine.'); return; }
            if (ev.name !== 'checkout.completed' || pagato) return;
            pagato = true; aggiorna(); avviso('Pagamento ricevuto. Sto sbloccando i tuoi corsi…');
            let tentativi = 0;
            const controlla = async () => {
              const r = await fetch('/api/io', { cache: 'no-store' }).catch(() => null);
              const u = r?.ok ? await r.json().catch(() => null) : null;
              if (u && atteso.every((k) => u.materie.includes(k))) { location.href = '/account'; return; }
              if (++tentativi < 30) setTimeout(controlla, 2000);
              else avviso('Pagamento ricevuto. Lo sblocco sta richiedendo qualche istante: ritroverai i corsi nel tuo account. Per assistenza, scrivi a Carmine.');
            };
            controlla();
          } });
          resolve();
        } catch { paddlePronto = null; reject(new Error('Non riesco ad aprire il pagamento. Riprova.')); }
      };
      document.head.appendChild(s);
    });
    return paddlePronto;
  }
  function accesso(tipo) {
    const ritorno = new URLSearchParams(tipo === 'materie' ? { tipo, materie: scelte().join(',') } : { tipo, pacchetto: selezioneVideo });
    location.href = `/accedi?dopo=${encodeURIComponent(`/pacchetti?${ritorno}`)}`;
  }
  bottoni.forEach((b) => b.addEventListener('click', async () => {
    const tipo = b.dataset.compra, q = riepilogo(tipo);
    if (occupato || pagato || !disponibile(q)) return;
    if (!io) { accesso(tipo); return; }
    occupato = true; aggiorna(); avviso('');
    try {
      const body = tipo === 'materie' ? { tipo, materie: [...q.chiavi] } : { tipo, pacchetto: q.id };
      await caricaPaddle();
      const r = await fetch('/api/pacchetti/checkout', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) });
      const d = await r.json();
      if (r.status === 401) { accesso(tipo); return; }
      if (!r.ok) throw new Error(d.errore || 'Pagamento non disponibile. Riprova.');
      if (d.totale !== q.totale) throw new Error('Il listino è stato aggiornato: ricarica la pagina prima di acquistare.');
      atteso = d.chiavi;
      window.Paddle.Checkout.open({ items: d.items, ...(d.discountId ? { discountId: d.discountId } : {}),
        customer: { email: io.email }, customData: { pacchetto: d.id, email: io.email }, settings: { locale: 'it', showAddDiscounts: false } });
    } catch (e) { avviso(e.message || 'Errore di connessione. Riprova.'); scorri(messaggio); }
    finally { occupato = false; aggiorna(); }
  }));
  aggiorna();
  try {
    const [rIo, rConf] = await Promise.all([fetch('/api/io', { cache: 'no-store' }), fetch('/api/config', { cache: 'no-store' })]);
    if (!rIo.ok && rIo.status !== 401) throw new Error('Non riesco a verificare il tuo account. Ricarica la pagina.');
    if (!rConf.ok) throw new Error('Non riesco a caricare i prezzi. Ricarica la pagina.');
    io = rIo.ok ? await rIo.json() : null;
    conf = (await rConf.json()).paddle;
    caselle.forEach((c) => {
      const tuo = io?.materie.includes(c.value), pronto = conf?.prezzi[c.value];
      c.disabled = Boolean(tuo || !pronto);
      if (c.disabled) c.checked = false;
      if (tuo || !pronto) app.querySelector(`[data-stato-materia="${c.value}"]`).textContent = tuo ? 'Già nel tuo account' : 'In attivazione';
    });
    app.querySelectorAll('[data-scegli-materie]').forEach((b) => {
      const elenco = b.dataset.scegliMaterie.split(',');
      const tuo = elenco.some((s) => io?.materie.includes(s));
      const pronto = elenco.every((s) => conf?.prezzi[s]);
      b.disabled = tuo || !pronto;
      b.dataset.bloccato = b.disabled ? '1' : '0';
      if (tuo || !pronto) b.textContent = tuo ? 'Hai già parte di questo pacchetto' : 'In attivazione';
    });
    app.querySelectorAll('[data-scegli-video]').forEach((b) => {
      const q = riepilogoVideo(b.dataset.scegliVideo, video);
      const tuo = videoSovrapposti(q.chiavi, io?.materie || [], video);
      const pronto = q.video.every((s) => conf?.videocorsi[s]);
      b.disabled = tuo || !pronto;
      b.dataset.bloccato = b.disabled ? '1' : '0';
      if (tuo || !pronto) b.textContent = tuo ? 'Hai già parte di questo pacchetto' : 'In attivazione';
    });
  } catch (e) { avviso(e.message || 'Errore di connessione. Ricarica la pagina.'); }
  finally { caricando = false; aggiorna(); }
}
