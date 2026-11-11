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
  let io = null, attivo = false, caricando = true, selezioneVideo = null;
  const scrivi = (selettore, testo) => { app.querySelector(selettore).textContent = testo; };
  const avviso = (testo) => { messaggio.hidden = !testo; messaggio.textContent = testo; };
  const scorri = (el) => el.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'center' });
  const possedute = () => io?.materiePermanenti || io?.materie || [];
  const scelte = () => caselle.filter((c) => c.checked && !c.disabled).map((c) => c.value);
  const riepilogo = (tipo) => {
    try { return tipo === 'materie' ? riepilogoMaterie(scelte(), materie) : riepilogoVideo(selezioneVideo, video); }
    catch { return null; }
  };
  const disponibile = (q) => q && attivo && (q.tipo === 'materie'
    ? q.chiavi.every((s) => !possedute().includes(s))
    : !videoSovrapposti(q.chiavi, io?.materie || [], video));
  function aggiorna() {
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
        etichetta.textContent = selezionato ? 'Selezionato' : 'Scegli';
        segno.textContent = selezionato ? '✓' : '→';
      }
      b.setAttribute('aria-label', `${b.dataset.titolo}: ${etichetta?.textContent || b.textContent}`);
    });
    const compositore = app.querySelector('#componi');
    const rMaterie = app.querySelector('#riepilogo-materie');
    const rVideo = app.querySelector('#riepilogo-video');
    const percorsoMaterie = !compositore.open && m && app.querySelector('[data-scegli-materie][aria-pressed="true"]')?.closest('.pacchetto');
    const percorsoVideo = v && app.querySelector('[data-scegli-video][aria-pressed="true"]')?.closest('.pacchetto');
    if (percorsoMaterie) {
      if (rMaterie.parentElement !== percorsoMaterie) percorsoMaterie.append(rMaterie);
    } else if (rMaterie.previousElementSibling !== compositore) compositore.after(rMaterie);
    if (percorsoVideo && rVideo.parentElement !== percorsoVideo) percorsoVideo.append(rVideo);
    scrivi('[data-nomi-materie]', scelte().length ? scelte().map((s) => materie.find((m) => m.slug === s).titolo).join(' + ') : 'Scegli un pacchetto o le materie che ti servono.');
    scrivi('[data-totale-materie]', m ? euro(m.totale) : '—');
    scrivi('[data-risparmio-materie]', m ? `Risparmi ${euro(m.risparmio)} · sconto del ${m.percentuale}% incluso` : '');
    scrivi('[data-titolo-video]', v?.titolo || 'Il tuo pacchetto video');
    scrivi('[data-nomi-video]', v ? v.video.map((s) => video.find((v) => v.slug === s).breve).join(' + ') : 'Scegli il pacchetto che ti interessa.');
    scrivi('[data-totale-video]', v ? euro(v.totale) : '—');
    scrivi('[data-risparmio-video]', v ? `Risparmi ${euro(v.risparmio)} · materiale del sito incluso` : '');
    bottoni.forEach((b) => {
      const q = b.dataset.compra === 'materie' ? m : v;
      b.disabled = caricando || !disponibile(q);
      b.textContent = caricando ? 'Un momento…' : !q
        ? b.dataset.compra === 'materie' ? 'Scegli almeno due materie' : 'Scegli un pacchetto'
        : !attivo ? 'Pagamento non disponibile' : !disponibile(q) ? 'Pacchetto già posseduto o non disponibile' : `${io ? 'Acquista' : 'Accedi e acquista'} · ${euro(q.totale)}`;
    });
  }
  function scheda(tipo) {
    app.dataset.view = tipo;
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
  app.querySelector('#componi').addEventListener('toggle', aggiorna);

  const params = new URLSearchParams(location.search);
  if (params.get('tipo') === 'video') { scheda('video'); selezioneVideo = params.get('pacchetto'); }
  else { const elenco = (params.get('materie') || '').split(','); caselle.forEach((c) => { c.checked = elenco.includes(c.value); }); }

  bottoni.forEach((b) => b.addEventListener('click', () => {
    const tipo = b.dataset.compra, q = riepilogo(tipo);
    if (!disponibile(q)) return;
    const selezione = new URLSearchParams(tipo === 'materie'
      ? { tipo, materie: q.chiavi.join(',') } : { tipo, pacchetto: q.id });
    const acquisto = '/acquisto?' + selezione;
    location.assign(io ? acquisto : '/accedi?dopo=' + encodeURIComponent(acquisto));
  }));
  aggiorna();
  try {
    const [rIo, rConf] = await Promise.all([fetch('/api/io', { cache: 'no-store' }), fetch('/api/config', { cache: 'no-store' })]);
    if (!rIo.ok && rIo.status !== 401) throw new Error('Non riesco a verificare il tuo account. Ricarica la pagina.');
    if (!rConf.ok) throw new Error('Non riesco a caricare i prezzi. Ricarica la pagina.');
    io = rIo.ok ? await rIo.json() : null;
    attivo = Boolean((await rConf.json()).stripe);
    caselle.forEach((c) => {
      const tuo = possedute().includes(c.value), pronto = attivo;
      c.disabled = Boolean(tuo || !pronto);
      if (c.disabled) c.checked = false;
      if (tuo || !pronto) app.querySelector(`[data-stato-materia="${c.value}"]`).textContent = tuo ? 'Già nel tuo account' : 'In attivazione';
    });
    app.querySelectorAll('[data-scegli-materie]').forEach((b) => {
      const elenco = b.dataset.scegliMaterie.split(',');
      const tuo = elenco.some((s) => possedute().includes(s));
      const pronto = attivo;
      b.disabled = tuo || !pronto;
      b.dataset.bloccato = b.disabled ? '1' : '0';
      if (tuo || !pronto) b.textContent = tuo ? 'Include corsi già tuoi' : 'In attivazione';
    });
    app.querySelectorAll('[data-scegli-video]').forEach((b) => {
      const q = riepilogoVideo(b.dataset.scegliVideo, video);
      const tuo = videoSovrapposti(q.chiavi, io?.materie || [], video);
      const pronto = attivo;
      b.disabled = tuo || !pronto;
      b.dataset.bloccato = b.disabled ? '1' : '0';
      if (tuo || !pronto) b.textContent = tuo ? 'Include corsi già tuoi' : 'In attivazione';
    });
  } catch (e) { avviso(e.message || 'Errore di connessione. Ricarica la pagina.'); }
  finally { caricando = false; aggiorna(); }
}
