// Dieci quesiti complessivi tra domande a tempo e simulazioni delle materie a pagamento.
// Le concessioni restano in SQLite: ricaricare, cambiare argomento o lingua non rinnova la prova.
export const DOMANDE_GRATUITE = 10;

export function creaTabelleAnteprima(sql) {
  sql.exec(`CREATE TABLE IF NOT EXISTS anteprima_domande (
    chi TEXT NOT NULL, domanda TEXT NOT NULL, PRIMARY KEY (chi, domanda)
  )`);
}

// Operazione sincrona: controllo e concessione non possono intercalarsi con un'altra richiesta.
export function archivioAnteprima(ar, { chiavi, domande = [], consuma = true }) {
  if (!Array.isArray(chiavi) || !chiavi.length || chiavi.length > 2 || chiavi.some((x) => typeof x !== 'string' || x.length > 100)) throw new Error('Identità non valida');
  const segnaposti = chiavi.map(() => '?').join(',');
  const gia = new Set(ar.righe(`SELECT DISTINCT domanda FROM anteprima_domande WHERE chi IN (${segnaposti})`, ...chiavi).map((x) => x.domanda));
  // All'accesso conserva sul conto dello studente anche la prova già usata da ospite.
  for (const chi of chiavi) for (const id of gia) ar.sql.exec('INSERT OR IGNORE INTO anteprima_domande (chi, domanda) VALUES (?, ?)', chi, id);
  const consentite = [];
  for (const id of [...new Set(domande)].slice(0, 100)) {
    if (gia.has(id)) { consentite.push(id); continue; }
    if (!consuma || gia.size >= DOMANDE_GRATUITE) continue;
    for (const chi of chiavi) ar.sql.exec('INSERT OR IGNORE INTO anteprima_domande (chi, domanda) VALUES (?, ?)', chi, id);
    gia.add(id); consentite.push(id);
  }
  return { consentite, limite: DOMANDE_GRATUITE, usate: Math.min(gia.size, DOMANDE_GRATUITE), rimaste: Math.max(0, DOMANDE_GRATUITE - gia.size) };
}

export async function accessoDomande(env, req, io, domande, lingua, h, consuma = true) {
  const riservate = domande.filter((q) => env.VENDITA !== '0' && h.prezzi[q.materia] && !io?.materie.includes(q.materia));
  if (!riservate.length) return { consentite: domande.map((q) => q.id), anteprima: { illimitato: true } };
  // Stessa impronta usata dagli altri servizi del sito; non si conserva indirizzo IP o browser in chiaro.
  const ospite = 'o:' + await h.sha(`${env.CHIAVE_ACCESSO}|anteprima|${req.headers.get('cf-connecting-ip') || ''}|${req.headers.get('user-agent') || ''}`);
  const chiavi = io ? ['u:' + await h.sha(io.email), ospite] : [ospite];
  const quota = await h.aDO(env, '/anteprima-domande', { chiavi, domande: riservate.map((q) => q.id), consuma });
  // Un vecchio Archivio in aggiornamento non deve aprire i contenuti senza verificarli.
  if (!Array.isArray(quota?.consentite)) throw new Error('Conteggio domande non disponibile');
  const ammesse = new Set(quota.consentite);
  const consentite = domande.filter((q) => !riservate.includes(q) || ammesse.has(q.id)).map((q) => q.id);
  const pref = lingua === 'en' ? '/en' : '';
  const materie = [...new Set(riservate.map((q) => q.materia))].map((slug) => ({ slug, href: `${pref}/${slug}/sblocca`, titolo: h.materie.find((m) => m.slug === slug)?.titolo || slug }));
  return { consentite, anteprima: { limite: quota.limite, usate: quota.usate, rimaste: quota.rimaste }, materie };
}

export function pagamentoDomande(accesso, lingua = 'it') {
  return { ...accesso, pagamento: true, errore: lingua === 'en'
    ? 'You have used your 10 free questions. Unlock the subject to continue with questions and simulations.'
    : 'Hai utilizzato le 10 domande gratuite. Sblocca la materia per continuare con domande e simulazioni.' };
}
