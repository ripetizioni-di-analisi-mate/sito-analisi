import { accountTesti } from '../lib/account-testi.mjs';
import { caricaPercorsoStudio, destinazioneObiettivo, destinazioneSessione, leggiCatalogoStudio } from '../lib/percorso-studio.mjs';
import { stemmaSVG, rangoDi, nomeRango, stileRango } from '../../worker/stemmi.mjs';
import { avviaRisultatiSalvati } from './orientamento-comune.mjs';

const root = document.getElementById('account-page');
if (root) avviaAccount(root);

export function avviaAccount(root) {
  const { lingua, pref, materie, js } = JSON.parse(root.querySelector('#configurazione-account').textContent);
  const en = lingua === 'en', de = lingua === 'de', es = lingua === 'es', fr = lingua === 'fr', s = accountTesti(lingua), locale = fr ? 'fr-FR' : es ? 'es-ES' : de ? 'de-DE' : en ? 'en-GB' : 'it-IT';
  const q = (id) => root.querySelector('#' + id);
  const catalogo = leggiCatalogoStudio();
  const numero = (n) => Number(n || 0).toLocaleString(locale);
  const elemento = (tag, classe, testo) => {
    const el = document.createElement(tag);
    if (classe) el.className = classe;
    if (testo !== undefined) el.textContent = testo;
    return el;
  };
  const icona = (tipo) => {
    const el = elemento('span', 'account-icona');
    el.setAttribute('aria-hidden', 'true');
    // Le icone seguono il tratto delle icone già presenti nell'indice.
    el.innerHTML = tipo === 'video'
      ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="m10 8 6 4-6 4Z"/></svg>'
      : tipo === 'telefono'
        ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M10 18h4"/></svg>'
        : tipo === 'computer'
          ? '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8m-4-4v4"/></svg>'
          : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M12 5C9 3 6 3 3 3v16c3 0 6 0 9 2 3-2 6-2 9-2V3c-3 0-6 0-9 2Zm0 0v16"/></svg>';
    return el;
  };
  async function api(path, body, signal) {
    const r = await fetch(path, {
      credentials: 'same-origin', cache: 'no-store', signal,
      ...(body === undefined ? {} : { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body) }),
    });
    const d = await r.json().catch(() => ({}));
    if (!r.ok) throw Object.assign(new Error(d.errore || js.erroreGenerico), { status: r.status, dati: d });
    return d;
  }
  function esito(el, testo, errore = false) {
    el.textContent = testo;
    el.classList.toggle('errore', errore);
  }
  // Pagina unica: le voci in alto portano alle sezioni e segnano quella che si sta leggendo.
  const schede = [...root.querySelectorAll('.schede-account [data-area]')];
  let io = null, caricamentoDispositivi = null;
  const ALIAS = { percorso: 'progressi', contenuti: 'studio' };
  function segna(area) {
    for (const b of schede) { if (b.dataset.area === area) b.setAttribute('aria-current', 'true'); else b.removeAttribute('aria-current'); }
  }
  function vai(el) {
    el?.scrollIntoView({ block: 'start', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }
  function daHash() {
    const hash = location.hash.slice(1);
    if (!hash || !io) return;
    const area = ALIAS[hash] || hash;
    if (hash === 'dispositivi') { q('dispositivi').open = true; vai(q('dispositivi')); return; }
    if (hash === 'videocorsi') { vai(root.querySelector('#videocorsi')); return; }
    if (hash === 'orientamento') { if (io.gm === true) vai(root.querySelector('#orientamento')); return; }
    if (['studio', 'progressi', 'impostazioni'].includes(area)) vai(q(area + '-account'));
  }
  schede.forEach((b) => b.addEventListener('click', (event) => {
    event.preventDefault();
    history.replaceState(null, '', '#' + b.dataset.area);
    vai(q(b.dataset.area + '-account'));
  }));
  if ('IntersectionObserver' in window) {
    const visibili = new Set();
    const osservatore = new IntersectionObserver((voci) => {
      for (const v of voci) { if (v.isIntersecting) visibili.add(v.target); else visibili.delete(v.target); }
      const prima = schede.map((b) => q(b.dataset.area + '-account')).find((el) => visibili.has(el));
      if (prima) segna(prima.id.replace('-account', ''));
    }, { rootMargin: '-25% 0px -60% 0px' });
    schede.forEach((b) => osservatore.observe(q(b.dataset.area + '-account')));
  }
  segna('studio');
  window.addEventListener('hashchange', daHash);

  function rigaContenuto(titolo, href, video = false) {
    const li = elemento('li', video ? 'contenuto-videocorso' : '');
    const link = elemento(href ? 'a' : 'div', 'contenuto-account-link');
    if (href) link.href = href;
    link.append(icona(video ? 'video' : 'libro'), elemento('span', 'contenuto-account-nome', titolo));
    if (href) { const arrow = elemento('span', 'contenuto-account-freccia', '↗'); arrow.setAttribute('aria-hidden', 'true'); link.append(arrow); }
    li.append(link);
    return li;
  }
  async function mostraContenuti() {
    const lista = q('contenuti-account');
    const acquistate = new Set(io.materie || []);
    for (const m of materie.filter((m) => acquistate.has(m.slug))) lista.append(rigaContenuto(m.titolo, m.href || `${pref}/${m.slug}`));
    const haVideo = [...acquistate].some((m) => m.startsWith('video-'));
    q('materie-vuote').hidden = lista.children.length > 0 || haVideo;
    lista.hidden = lista.children.length === 0;
    if (haVideo) {
      try {
        const d = await api('/api/videocorsi');
        for (const v of d.videocorsi || []) {
          let drive = null;
          try { const u = new URL(v.drive); if (u.protocol === 'https:') drive = u.href; } catch { /* link non ancora disponibile */ }
          const li = rigaContenuto(v.titolo, drive, true);
          if (!root.querySelector('#videocorsi')) li.id = 'videocorsi';
          li.querySelector('.contenuto-account-nome').append(elemento('small', 'contenuto-account-nota', fr ? `${v.lezioni} séances avec vidéos et PDF (en italien)` : es ? `${v.lezioni} clases con vídeo y PDF (en italiano)` : de ? `${v.lezioni} Unterrichtsstunden mit Video und PDF (Italienisch)` : en ? `${v.lezioni} lessons with video and PDF` : `${v.lezioni} lezioni con video e PDF`));
          if (drive) { const a = li.querySelector('a'); a.target = '_blank'; a.rel = 'noopener'; a.setAttribute('aria-label', `${s.videoApri}: ${v.titolo}`); }
          const nota = elemento('p', 'contenuto-video-dettagli', drive ? `${s.videoNota} (${io.email})` : s.videoAttesa);
          li.append(nota); lista.append(li);
        }
        lista.hidden = lista.children.length === 0;
        q('materie-vuote').hidden = lista.children.length > 0;
      } catch { q('video-errore').textContent = s.videoErrore; q('video-errore').hidden = false; }
    }
    if (location.hash === '#videocorsi') root.querySelector('#videocorsi')?.scrollIntoView({ block: 'start' });
  }
  function destinazione(ses) {
    const d = destinazioneSessione(ses, catalogo, lingua);
    return d ? { ...d, href: ses.risposte > 0 && d.domande ? d.domande : d.href } : null;
  }
  function mostraPercorso(d) {
    const st = d.stato, rango = rangoDi(st.livello);
    const percentuale = Math.max(0, Math.min(100, Number(st.perc) || 0));
    const stemma = root.querySelector('.stemma-account');
    stemma.innerHTML = stemmaSVG(rango, { perc: percentuale, id: 'a', nastro: true, livello: st.livello, etichetta: fr ? 'NIV.' : es ? 'NIVEL' : de ? 'STUFE' : en ? 'LV.' : 'LIV.' });
    stemma.setAttribute('aria-label', `${s.livello} ${st.livello}, ${nomeRango(st.livello, lingua)}`);
    root.querySelector('.ac-copertina').setAttribute('style', stileRango(rango));
    root.querySelector('.fascia-livello').textContent = `${nomeRango(st.livello, lingua)} · ${st.fascia}`;
    q('barra-livello').setAttribute('aria-valuenow', String(percentuale));
    q('barra-livello').firstElementChild.style.width = percentuale + '%';
    root.querySelector('.exp-mancano').textContent = st.prossimo === null ? s.limite : `${numero(st.mancano)} ${s.punti} ${s.alLivello} ${st.livello + 1}`;
    // Tre numeri soltanto: studio della settimana, esperienza accumulata, giorni all'esame più vicino.
    const minuti = d.settimana?.minuti || 0;
    q('sett-minuti').textContent = minuti >= 60 ? `${Math.floor(minuti / 60)} h ${minuti % 60} min` : `${minuti} min`;
    q('exp-accumulata').textContent = `${numero(st.exp)} ${s.punti}`;
    const esame = (d.esami || [])[0], etichetta = q('esame-etichetta');
    etichetta.replaceChildren();
    if (esame) {
      const giorni = Math.max(0, Math.round((new Date(esame.data + 'T12:00:00').getTime() - new Date().setHours(12, 0, 0, 0)) / 86400000));
      q('giorni-esame').textContent = numero(giorni);
      const a = elemento('a', '', esame.titolo || catalogo[esame.materia]?.titolo || '');
      a.href = `${pref}/${esame.materia}`;
      etichetta.append(fr ? 'Jours avant l’examen' : es ? 'Días para el examen' : de ? 'Tage bis zur Prüfung' : en ? 'Days to the exam' : 'Giorni all’esame', a);
    } else {
      q('giorni-esame').textContent = '—';
      const prima = materie.find((m) => (io.materie || []).includes(m.slug));
      const a = elemento('a', '', fr ? 'Ajoute la date de ton examen' : es ? 'Añade la fecha de tu examen' : de ? 'Prüfungstermin eintragen' : en ? 'Add your exam date' : 'Aggiungi la data dell’esame');
      a.href = prima ? (prima.href || `${pref}/${prima.slug}`) : (pref || '/');
      etichetta.append(a);
    }
    const sessioni = d.sessioni || [];
    const ultima = sessioni.find((ses) => destinazione(ses));
    if (ultima) {
      const dest = destinazione(ultima);
      q('ultima-materia').textContent = catalogo[ultima.materia].titolo;
      q('ultimo-argomento').textContent = de || es || fr ? dest.titolo : `${dest.titolo}${ultima.risposte > 0 && dest.domande ? (en ? ' · Timed questions' : ' · Domande a tempo') : (en ? ' · Theory' : ' · Teoria')}`;
      q('riprendi-link').href = dest.href;
      q('riprendi-account').hidden = false;
    }
    q('percorso').hidden = false;
  }
  async function caricaPercorso() {
    q('progressi-riprova').hidden = true;
    const d = await caricaPercorsoStudio(de ? 'en' : lingua).catch(() => null);
    if (!d?.stato) { q('progressi-caricamento').textContent = s.erroreProgressi; q('progressi-riprova').hidden = false; return; }
    mostraPercorso(d); q('progressi-caricamento').hidden = true;
  }
  q('progressi-riprova').addEventListener('click', caricaPercorso);

  let dispositivi = [], maxDispositivi = 3, selezionato = null, invioScollega = false, origineConferma = null;
  function dataDispositivo(d) {
    const stamp = typeof d.ultimo_uso === 'number' ? d.ultimo_uso : Date.parse(d.ultimo_uso);
    if (!Number.isFinite(stamp)) return '';
    return Date.now() - stamp < 120000 ? s.ora : `${s.ultimo}: ${new Date(stamp).toLocaleString(locale, { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}`;
  }
  function mostraDispositivi(lista, max) {
    dispositivi = lista;
    maxDispositivi = max;
    q('elenco-dispositivi').replaceChildren();
    q('dispositivi-conto').textContent = `${lista.length} ${s.posti} ${max}`;
    for (const d of lista) {
      const li = elemento('li', 'account-dispositivo'), dati = elemento('div', 'account-dispositivo-dati');
      const nome = elemento('span', 'account-dispositivo-nome', d.nome);
      dati.append(nome, elemento('small', 'account-dispositivo-ultimo', dataDispositivo(d)));
      li.append(icona(/iPhone|iPad|Android/.test(d.nome) ? 'telefono' : 'computer'), dati);
      if (d.questo) li.append(elemento('span', 'account-dispositivo-attuale', s.questo));
      else {
        const b = elemento('button', 'bottone-secondario dispositivo-scollega', s.scollega);
        b.type = 'button'; b.setAttribute('aria-label', `${s.scollega}: ${d.nome}`);
        b.addEventListener('click', () => {
          selezionato = d; origineConferma = b;
          q('conferma-dispositivo-nome').textContent = d.nome;
          q('errore-conferma-dispositivo').textContent = '';
          q('conferma-dispositivo').showModal(); q('annulla-scollega').focus();
        });
        li.append(b);
      }
      q('elenco-dispositivi').append(li);
    }
  }
  async function caricaDispositivi(mantieniEsito = false) {
    if (caricamentoDispositivi) return caricamentoDispositivi;
    caricamentoDispositivi = (async () => {
      q('aggiorna-dispositivi').disabled = true;
      q('elenco-dispositivi').setAttribute('aria-busy', 'true');
      root.querySelectorAll('.dispositivo-scollega').forEach((b) => { b.disabled = true; });
      if (!mantieniEsito) esito(q('esito-dispositivi'), s.carica);
      try {
        const d = await api('/api/dispositivi');
        if (d.email && d.email !== io.email) {
          location.replace(`${pref}/account#dispositivi`);
          return null;
        }
        mostraDispositivi(d.dispositivi || [], d.max || 3);
        if (!mantieniEsito) esito(q('esito-dispositivi'), dispositivi.length ? '' : s.nessuno);
        return dispositivi;
      } catch (error) {
        esito(q('esito-dispositivi'), error.status === 401 ? s.scaduta : s.erroreDispositivi, true);
        if (error.status === 401) {
          q('elenco-dispositivi').replaceChildren(); q('dispositivi-conto').textContent = '';
          const a = elemento('a', 'account-rientra', s.accedi); a.href = `${pref}/accedi?dopo=${encodeURIComponent(pref + '/account#dispositivi')}`; q('esito-dispositivi').append(' ', a);
        }
        return null;
      } finally {
        q('aggiorna-dispositivi').disabled = false;
        q('elenco-dispositivi').setAttribute('aria-busy', 'false');
        root.querySelectorAll('.dispositivo-scollega').forEach((b) => { b.disabled = false; });
        caricamentoDispositivi = null;
      }
    })();
    return caricamentoDispositivi;
  }
  q('aggiorna-dispositivi').addEventListener('click', () => caricaDispositivi());
  q('annulla-scollega').addEventListener('click', () => q('conferma-dispositivo').close());
  q('conferma-dispositivo').addEventListener('cancel', (event) => { if (invioScollega) event.preventDefault(); });
  q('conferma-dispositivo').addEventListener('close', () => { selezionato = null; (origineConferma?.isConnected ? origineConferma : q('aggiorna-dispositivi')).focus(); });
  q('conferma-scollega').addEventListener('click', async () => {
    if (!selezionato || invioScollega) return;
    const d = selezionato;
    invioScollega = true; q('conferma-scollega').disabled = true; q('annulla-scollega').disabled = true;
    q('conferma-scollega').textContent = s.attesa; q('errore-conferma-dispositivo').textContent = '';
    let completato = false;
    try { await api('/api/dispositivi/scollega', { id: d.id, account: io.email }); completato = true; }
    catch (error) {
      if (error.dati?.codice === 'account') {
        q('conferma-dispositivo').close();
        location.replace(`${pref}/account#dispositivi`);
      } else if (error.status === 401) {
        q('conferma-dispositivo').close();
        await caricaDispositivi();
      } else if (error.status === 409 || !error.status) {
        const aggiornati = await caricaDispositivi(true);
        completato = Boolean(aggiornati && !aggiornati.some((x) => x.id === d.id));
      }
      if (!completato) q('errore-conferma-dispositivo').textContent = error.status === 401 ? s.scaduta : s.erroreScollega;
    }
    if (completato) {
      mostraDispositivi(dispositivi.filter((x) => x.id !== d.id), maxDispositivi);
      esito(q('esito-dispositivi'), s.fatto);
      q('conferma-dispositivo').close();
    }
    invioScollega = false; q('conferma-scollega').disabled = false; q('annulla-scollega').disabled = false; q('conferma-scollega').textContent = s.scollega;
    if (completato) await caricaDispositivi(true);
  });

  const preferenzeEmail = q('form-preferenze-email');
  const campiEmail = preferenzeEmail.elements;
  const esitoEmail = q('esito-email');
  let preferenzePronte = false, caricamentoPreferenze = null;
  function mostraPreferenzeEmail(d) {
    campiEmail.studio.checked = d.studio;
    const messaggio = d.inAttesa ? (fr ? 'Confirme ton choix en suivant le lien reçu par e-mail.' : es ? 'Confirma tu elección con el enlace que te enviamos por correo.' : de ? 'Bestätige deine Auswahl über den Link in deinem Postfach.' : en ? 'Check your inbox to confirm your choice.' : 'Controlla la posta per confermare la tua scelta.') : '';
    esito(esitoEmail, d.errore || messaggio, Boolean(d.errore));
  }
  async function caricaPreferenzeEmail() {
    if (preferenzePronte || caricamentoPreferenze) return;
    const campi = [...preferenzeEmail.querySelectorAll('input, select, button')];
    campi.forEach((el) => { el.disabled = true; });
    caricamentoPreferenze = api('/api/email/preferenze');
    try {
      mostraPreferenzeEmail(await caricamentoPreferenze);
      preferenzePronte = true;
      campi.forEach((el) => { el.disabled = false; });
    } catch {
      esito(esitoEmail, fr ? 'Impossible de charger les préférences de messagerie.' : es ? 'No se pudieron cargar las preferencias de correo.' : de ? 'Die E-Mail-Einstellungen konnten nicht geladen werden.' : en ? 'Email preferences could not be loaded.' : 'Impossibile caricare le preferenze email.', true);
    } finally { caricamentoPreferenze = null; }
  }
  preferenzeEmail.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!preferenzePronte) return;
    const pulsante = campiEmail.studio;
    pulsante.disabled = true;
    try {
      const d = await api('/api/email/preferenze', {
        studio: campiEmail.studio.checked, offerte: false, lingua,
      });
      mostraPreferenzeEmail(d);
      if (!d.inAttesa && !d.errore) esito(esitoEmail, fr ? 'Préférences enregistrées.' : es ? 'Preferencias guardadas.' : de ? 'Einstellungen gespeichert.' : en ? 'Preferences saved.' : 'Preferenze salvate.');
    } catch (error) { esito(esitoEmail, error.message, true); }
    finally { pulsante.disabled = false; }
  });

  // L'interruttore dei promemoria si salva da solo, senza tasto.
  campiEmail.studio.addEventListener('change', () => preferenzeEmail.requestSubmit());

  const nome = q('form-nome'), cambio = q('cambio');
  nome.addEventListener('submit', async (event) => {
    event.preventDefault();
    const value = nome.elements.nome.value.trim(), b = nome.querySelector('button[type="submit"]');
    if (!value) { esito(q('esito-nome'), js.nomeMancante, true); return; }
    b.disabled = true;
    try { const d = await api('/api/nome', { nome: value }); io.nome = d.nome || value; q('nome-account').textContent = io.nome; q('ac-nome').textContent = io.nome; esito(q('esito-nome'), js.nomeSalvato); }
    catch { esito(q('esito-nome'), js.erroreGenerico, true); }
    finally { b.disabled = false; }
  });
  cambio.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (cambio.elements.nuova.value.length < 8) { esito(q('esito-cambio'), js.nuovaCorta, true); return; }
    const b = cambio.querySelector('button[type="submit"]'); b.disabled = true;
    try { await api('/api/password', { attuale: cambio.elements.attuale.value, nuova: cambio.elements.nuova.value }); cambio.reset(); esito(q('esito-cambio'), js.passwordAggiornata); }
    catch (error) { esito(q('esito-cambio'), en || de || es || fr ? js.passwordNonAggiornata : error.message, true); }
    finally { b.disabled = false; }
  });
  const esci = q('esci'), testoEsci = q('esci-testo');
  esci.addEventListener('click', async () => {
    if (esci.disabled) return;
    esci.disabled = true;
    esci.setAttribute('aria-busy', 'true');
    testoEsci.textContent = s.uscitaInCorso;
    esito(q('esito-esci'), s.uscitaInCorso);
    const controller = new AbortController();
    const attesa = setTimeout(() => controller.abort(), 10000);
    try {
      const risposta = await api('/api/esci', {}, controller.signal);
      if (!risposta.ok) throw new Error(s.erroreUscita);
      location.replace(pref || '/');
    } catch {
      esito(q('esito-esci'), s.erroreUscita, true);
      testoEsci.textContent = s.esci;
      esci.disabled = false;
      esci.removeAttribute('aria-busy');
    } finally { clearTimeout(attesa); }
  });
  (async () => {
    try { io = await api('/api/io'); }
    catch (error) {
      if (error.status === 401) { location.href = `${pref}/accedi?dopo=${encodeURIComponent(pref + '/account' + location.hash)}`; return; }
      esito(q('chi'), fr ? 'Impossible de charger ton compte. Actualise la page pour réessayer.' : es ? 'No se ha podido cargar tu cuenta. Actualiza la página para volver a intentarlo.' : de ? 'Dein Konto konnte gerade nicht geladen werden. Lade die Seite neu.' : en ? 'Your account cannot be loaded right now. Please refresh the page.' : 'In questo momento l’account non si carica. Ricarica la pagina per riprovare.', true); return;
    }
    if (!io?.email) { esito(q('chi'), js.erroreGenerico, true); return; }
    q('nome-account').textContent = io.nome || '—'; q('email-account').textContent = io.email;
    q('ac-nome').textContent = io.nome || io.email;
    nome.elements.nome.value = io.nome || '';
    q('chi').hidden = true; q('pannello').hidden = false; esci.hidden = false;
    // Riusa l'identità appena verificata: Premium da solo non apre l'anteprima GM.
    document.querySelectorAll('[data-orientamento-gm]').forEach((el) => { el.hidden = io.gm !== true; });
    if (lingua === 'it' && io.gm === true) avviaRisultatiSalvati(root);
    await Promise.allSettled([mostraContenuti(), caricaPercorso(), caricaDispositivi(), caricaPreferenzeEmail()]);
    daHash();
  })();
}
