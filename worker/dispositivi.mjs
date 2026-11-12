// Gestione dei dispositivi da parte dello studente. Le operazioni che cambiano
// accessi si verificano e si completano nello stesso Durable Object.
export const MAX_DISPOSITIVI = 3;
export const DURATA_GESTIONE_DISPOSITIVI = 5 * 60 * 1000;
export const nuovoIdDispositivo = () => [...crypto.getRandomValues(new Uint8Array(16))].map((b) => b.toString(16).padStart(2, '0')).join('');
const idValido = (id) => typeof id === 'string' && /^[0-9a-f]{32}$/.test(id);
export const cookieGestioneDispositivi = (token, durata = DURATA_GESTIONE_DISPOSITIVI / 1000) =>
  `gestione_dispositivi=${encodeURIComponent(token)}; Path=/api/dispositivi; Max-Age=${durata}; HttpOnly; Secure; SameSite=Strict`;

export function creaTabelleDispositivi(sql) {
  // I cookie già emessi restano utilizzabili finché esiste la loro riga legacy.
  // Ogni nuova registrazione ha invece una generazione distinta della sessione.
  try { sql.exec('ALTER TABLE dispositivi ADD COLUMN nonce TEXT'); } catch { /* già presente */ }
  sql.exec(`CREATE TABLE IF NOT EXISTS gestioni_dispositivi (
    id TEXT PRIMARY KEY, email TEXT NOT NULL, versione INTEGER NOT NULL,
    dispositivo TEXT NOT NULL, nome TEXT NOT NULL, nonce TEXT NOT NULL, scadenza INTEGER NOT NULL
  ); CREATE INDEX IF NOT EXISTS gestioni_dispositivi_scadenza ON gestioni_dispositivi (scadenza);
  CREATE INDEX IF NOT EXISTS gestioni_dispositivi_browser ON gestioni_dispositivi (email, dispositivo)`);
}

export function sessioneDispositivoValida(ar, c) {
  const u = ar.riga('SELECT versione FROM utenti WHERE email = ?', c.email);
  if (!u || u.versione !== c.versione) return false;
  const d = ar.riga('SELECT nonce FROM dispositivi WHERE email = ? AND id = ?', c.email, c.dispositivo || '');
  return Boolean(d) && (d.nonce || null) === (c.nonce || null);
}

const pubblici = (ar, email, corrente) => ar.dispositiviDi(email).map((d) => ({ ...d, questo: d.id === corrente }));
const gestioneValida = (ar, id) => {
  const g = ar.riga('SELECT * FROM gestioni_dispositivi WHERE id = ?', id);
  if (!g || g.scadenza <= Date.now()) return null;
  const u = ar.riga('SELECT versione FROM utenti WHERE email = ?', g.email);
  return u && u.versione === g.versione ? g : null;
};

export function archivioDispositivi(ar, p, c) {
  switch (p) {
    case '/disp-lista': {
      if (!sessioneDispositivoValida(ar, c)) return { ok: false, codice: 'scaduto' };
      return { ok: true, dispositivi: pubblici(ar, c.email, c.dispositivo) };
    }
    case '/disp-scollega': {
      if (!sessioneDispositivoValida(ar, c)) return { ok: false, codice: 'scaduto' };
      if (c.id === c.dispositivo) return { ok: false, codice: 'corrente' };
      if (!idValido(c.id)) return { ok: false, codice: 'id' };
      if (!ar.riga('SELECT id FROM dispositivi WHERE email = ? AND id = ?', c.email, c.id)) return { ok: false, codice: 'aggiorna' };
      ar.sql.exec('DELETE FROM dispositivi WHERE email = ? AND id = ?', c.email, c.id);
      ar.copiaDati = null;
      return { ok: true, dispositivi: pubblici(ar, c.email, c.dispositivo) };
    }
    case '/disp-gestione-crea': {
      const u = ar.riga('SELECT versione FROM utenti WHERE email = ?', c.email);
      if (!u || u.versione !== c.versione) return { ok: false, codice: 'scaduto' };
      ar.sql.exec('DELETE FROM gestioni_dispositivi WHERE scadenza <= ? OR (email = ? AND dispositivo = ?)', Date.now(), c.email, c.dispositivo);
      ar.sql.exec('INSERT INTO gestioni_dispositivi (id, email, versione, dispositivo, nome, nonce, scadenza) VALUES (?, ?, ?, ?, ?, ?, ?)',
        c.id, c.email, c.versione, c.dispositivo, c.nome, c.nonce, Date.now() + DURATA_GESTIONE_DISPOSITIVI);
      return { ok: true, dispositivi: pubblici(ar, c.email, c.dispositivo) };
    }
    case '/disp-gestione-lista': {
      const g = gestioneValida(ar, c.gestione);
      return g ? { ok: true, dispositivi: pubblici(ar, g.email, g.dispositivo) } : { ok: false, codice: 'scaduto' };
    }
    case '/disp-sostituisci':
      // Nessun await nel controllo e nella sostituzione. La transazione ripristina
      // anche il dispositivo rimosso se l'inserimento del nuovo dovesse fallire.
      return ar.state.storage.transactionSync(() => {
        const g = gestioneValida(ar, c.gestione);
        if (!g) return { ok: false, codice: 'scaduto' };
        if (!idValido(c.id)) return { ok: false, codice: 'id' };
        if (c.id === g.dispositivo) return { ok: false, codice: 'corrente' };
        if (!ar.riga('SELECT id FROM dispositivi WHERE email = ? AND id = ?', g.email, c.id)) return { ok: false, codice: 'aggiorna' };
        if (ar.riga('SELECT id FROM dispositivi WHERE email = ? AND id = ?', g.email, g.dispositivo)) return { ok: false, codice: 'aggiorna' };
        if (ar.dispositiviDi(g.email).length > MAX_DISPOSITIVI) return { ok: false, codice: 'aggiorna' };
        ar.sql.exec('DELETE FROM dispositivi WHERE email = ? AND id = ?', g.email, c.id);
        ar.sql.exec('INSERT INTO dispositivi (email, id, nome, creato, ultimo_uso, nonce) VALUES (?, ?, ?, ?, ?, ?)',
          g.email, g.dispositivo, g.nome, new Date().toISOString(), Date.now(), g.nonce);
        ar.sql.exec('DELETE FROM gestioni_dispositivi WHERE id = ?', c.gestione);
        ar.copiaDati = null;
        return { ok: true, email: g.email, versione: g.versione, dispositivo: g.dispositivo, nonce: g.nonce };
      });
  }
  return null;
}

export function stessaOrigineDispositivi(req) {
  return req.headers.get('origin') === new URL(req.url).origin
    && req.headers.get('sec-fetch-site') !== 'cross-site'
    && /^application\/json(?:\s*;|$)/i.test(req.headers.get('content-type') || '');
}

export async function gestisciDispositivi(req, env, p, h) {
  const url = new URL(req.url);
  const scelta = url.searchParams.get('l'), cookie = h.leggiCookie(req, 'lingua');
  const es = (scelta || cookie) === 'es', fr = (scelta || cookie) === 'fr';
  const en = scelta === 'en' || cookie === 'en';
  const intestazioni = { 'cache-control': 'no-store, private' };
  const messaggi = fr ? {
    scaduto: 'Reconnecte-toi pour gérer tes appareils.', corrente: 'Tu utilises cet appareil. Pour le déconnecter, sélectionne Se déconnecter.',
    aggiorna: 'La liste des appareils a changé. Actualise-la, puis choisis un appareil.', account: 'Le compte connecté a changé. Actualise la page.',
    id: 'Choisis un appareil.', origine: 'Actualise la page et réessaie.',
  } : es ? {
    scaduto: 'Vuelve a iniciar sesión para gestionar tus dispositivos.', corrente: 'Estás usando este dispositivo. Usa Cerrar sesión para desconectarlo.',
    aggiorna: 'La lista de dispositivos ha cambiado. Actualízala y elige un dispositivo.', account: 'La cuenta conectada ha cambiado. Vuelve a cargar la página.',
    id: 'Elige un dispositivo.', origine: 'Vuelve a cargar la página e inténtalo de nuevo.',
  } : en ? {
    scaduto: 'Sign in again to manage your devices.', corrente: 'This is the device you are using. Use Log out to disconnect it.',
    aggiorna: 'The device list has changed. Refresh it and choose a device again.', account: 'The signed-in account has changed. Reload the page.', id: 'Choose a device.', origine: 'Reload the page and try again.',
  } : {
    scaduto: 'Accedi di nuovo per gestire i dispositivi.', corrente: 'Questo è il dispositivo in uso. Per scollegarlo usa Esci dall’account.',
    aggiorna: 'L’elenco dei dispositivi è cambiato. Aggiornalo e scegli di nuovo.', account: 'L’account aperto è cambiato. Ricarica la pagina.', id: 'Scegli un dispositivo.', origine: 'Ricarica la pagina e riprova.',
  };
  const errore = (codice) => h.json({ errore: messaggi[codice], codice, ...(codice === 'scaduto' ? { scaduto: true } : {}), ...(['aggiorna', 'account'].includes(codice) ? { aggiorna: true } : {}) },
    codice === 'scaduto' ? 401 : codice === 'origine' ? 403 : codice === 'id' ? 400 : 409, intestazioni);
  const credenziali = async () => {
    const t = await h.tokenSessione(env, req);
    return t?.e ? { email: t.e, versione: t.v, dispositivo: t.d, nonce: t.g } : null;
  };
  const gestione = async () => {
    const t = await h.leggiToken(env, h.leggiCookie(req, 'gestione_dispositivi') || '');
    return t?.scopo === 'gestione-dispositivi' && idValido(t.id) && Number.isFinite(t.t) && t.t <= Date.now()
      && Date.now() - t.t < DURATA_GESTIONE_DISPOSITIVI ? t.id : null;
  };

  if (p === '/api/dispositivi' && req.method === 'GET') {
    // La schermata del limite può riguardare un account diverso dalla sessione
    // già aperta. I due elenchi usano credenziali distinte, senza fallback.
    if (url.searchParams.get('gestione') !== '1') {
      const c = await credenziali();
      if (!c) return errore('scaduto');
      const r = await h.aDO(env, '/disp-lista', c);
      return r.ok ? h.json({ email: c.email, dispositivi: r.dispositivi, max: MAX_DISPOSITIVI }, 200, intestazioni) : errore(r.codice);
    }
    const id = await gestione();
    if (!id) return errore('scaduto');
    const r = await h.aDO(env, '/disp-gestione-lista', { gestione: id });
    return r.ok ? h.json({ dispositivi: r.dispositivi, max: MAX_DISPOSITIVI, gestione: true }, 200, intestazioni) : errore(r.codice);
  }
  if (p !== '/api/dispositivi/scollega' && p !== '/api/dispositivi/sostituisci') return h.json({ errore: 'non trovato' }, 404, intestazioni);
  if (req.method !== 'POST') return h.json({ errore: 'Metodo non consentito.' }, 405, { ...intestazioni, allow: 'POST' });
  if (!stessaOrigineDispositivi(req)) return errore('origine');
  const body = await req.json().catch(() => null);
  if (!body || !idValido(body.id)) return errore('id');
  if (p === '/api/dispositivi/scollega') {
    const c = await credenziali();
    if (!c) return errore('scaduto');
    // Un'altra scheda può avere cambiato account dopo l'apertura dell'elenco.
    // Il valore atteso serve soltanto a rilevare questo cambio, mai ad autorizzare.
    if (Object.hasOwn(body, 'account') && body.account !== c.email) return errore('account');
    const r = await h.aDO(env, '/disp-scollega', { ...c, id: body.id });
    return r.ok ? h.json({ ok: true, dispositivi: r.dispositivi, max: MAX_DISPOSITIVI }, 200, intestazioni) : errore(r.codice);
  }
  const id = await gestione();
  if (!id) return errore('scaduto');
  let r;
  try { r = await h.aDO(env, '/disp-sostituisci', { gestione: id, id: body.id }); }
  catch { return h.json({ errore: fr ? 'Impossible de déconnecter l’appareil. Réessaie.' : es ? 'No se pudo desconectar el dispositivo. Vuelve a intentarlo.' : en ? 'The device could not be replaced. Please try again.' : 'Il dispositivo non è stato sostituito. Riprova.', riprova: true }, 503, intestazioni); }
  if (!r.ok) return errore(r.codice);
  const headers = new Headers({ 'content-type': 'application/json', ...intestazioni });
  headers.append('set-cookie', h.cookieDispositivo(r.dispositivo));
  headers.append('set-cookie', await h.apriSessione(env, r.email, r.versione, r.dispositivo, r.nonce));
  headers.append('set-cookie', cookieGestioneDispositivi('', 0));
  return new Response('{"ok":true}', { headers });
}
