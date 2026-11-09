// Avvisi di sorpasso: coda SQLite persistente, invio con alarm anche a sito chiuso.
// Ogni tentativo riusa lo stesso payload e la stessa chiave di idempotenza Resend.
import { LEGHE, LEGHE_EN } from '../src/data/sfide.ts';
import { settimanaDi } from './livelli.mjs';
import { fotografiaLega } from './sfide.mjs';
import { componiEmail } from './email.mjs';

const SITO = 'https://ripetizionidianalisi.com';
const ATTESA = 5000; // raggruppa i premi assegnati nella stessa azione
const SCADENZA = 23 * 3600000; // entro le 24 ore di idempotenza del fornitore

export function creaTabelleAvvisiLega(sql) {
  sql.exec(`CREATE TABLE IF NOT EXISTS leghe_avvisi (
    id TEXT PRIMARY KEY, email TEXT NOT NULL, settimana TEXT NOT NULL, lega INTEGER NOT NULL, gruppo INTEGER NOT NULL,
    da INTEGER NOT NULL, a INTEGER NOT NULL, creato INTEGER NOT NULL, prossimo INTEGER NOT NULL,
    stato TEXT NOT NULL DEFAULT 'attesa', tentativi INTEGER NOT NULL DEFAULT 0, iniziato INTEGER,
    payload TEXT, inviato INTEGER
  );
  CREATE UNIQUE INDEX IF NOT EXISTS leghe_avvisi_attesa ON leghe_avvisi (email, settimana) WHERE stato = 'attesa';
  CREATE INDEX IF NOT EXISTS leghe_avvisi_prossimo ON leghe_avvisi (stato, prossimo);`);
  // NULL eredita la precedente preferenza sulle email di studio; una scelta dalla lega è esplicita.
  try { sql.exec('ALTER TABLE utenti ADD COLUMN avvisi_lega INTEGER'); } catch { /* già presente */ }
}

export function accodaSorpassi(ar, email, prima, dopo) {
  if (!prima || !dopo || prima.settimana !== dopo.settimana || prima.lega !== dopo.lega || prima.gruppo !== dopo.gruppo) return;
  const primaIo = prima.membri.findIndex((m) => m.email === email);
  const dopoIo = dopo.membri.findIndex((m) => m.email === email);
  if (primaIo < 0 || dopoIo < 0 || dopoIo >= primaIo) return;
  const posizioni = new Map(prima.membri.map((m, i) => [m.email, i + 1]));
  const ora = Date.now();
  dopo.membri.forEach((m, i) => {
    const da = posizioni.get(m.email), a = i + 1;
    if (m.email === email || !da || a <= da) return;
    const u = ar.riga('SELECT hash, COALESCE(avvisi_lega, promemoria, 1) AS attivi FROM utenti WHERE email = ?', m.email);
    // Rispetta anche chi aveva già rinunciato alle email per tornare a studiare.
    if (!u?.hash || !u.attivi) return;
    const pendente = ar.riga("SELECT id FROM leghe_avvisi WHERE email = ? AND settimana = ? AND stato = 'attesa'", m.email, prima.settimana);
    if (pendente) ar.sql.exec('UPDATE leghe_avvisi SET a = ? WHERE id = ?', a, pendente.id);
    else ar.sql.exec(`INSERT INTO leghe_avvisi (id, email, settimana, lega, gruppo, da, a, creato, prossimo)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`, crypto.randomUUID(), m.email, prima.settimana, prima.lega, prima.gruppo, da, a, ora, ora + ATTESA);
    ar.avvisiLegaDaProgrammare = true;
  });
}

export function componiAvvisoLega(r, linkNo) {
  const en = r.lingua === 'en';
  const lega = (en ? LEGHE_EN : LEGHE)[r.lega];
  const saluto = r.nome?.trim() ? `${en ? 'Hi' : 'Ciao'} ${r.nome.trim()},` : (en ? 'Hi,' : 'Ciao,');
  const subject = en ? `League ${lega} · You are now #${r.a}` : `Lega ${lega} · Ora sei in ${r.a}ª posizione`;
  const anteprima = en
    ? `Another student moved ahead of you in this week's league.`
    : 'Un altro studente ti ha superato nella classifica settimanale.';
  return componiEmail({
    lingua: en ? 'en' : 'it', subject, anteprima,
    titolo: en ? 'Your league position has changed' : 'La tua posizione è cambiata',
    categoria: en ? 'Weekly league' : 'Lega della settimana',
    righe: [saluto, en
      ? `Another student overtook you. You moved from position ${r.da} to position ${r.a}.`
      : `Un altro studente ti ha superato. Sei passato dalla ${r.da}ª alla ${r.a}ª posizione.`],
    scheda: {
      etichetta: en ? `${lega} league` : `Lega ${lega}`,
      valore: en ? `#${r.da} → #${r.a}` : `${r.da}ª → ${r.a}ª posizione`,
      nota: en ? 'Weekly standings' : 'Classifica settimanale',
    },
    dopo: [en ? 'Timed questions, exercises and active study earn you more XP.' : 'Puoi guadagnare altri EXP con le domande a tempo, gli esercizi e lo studio attivo.'],
    pulsante: [en ? 'View the standings' : 'Vai alla classifica', `${SITO}/lega`],
    motivo: en ? 'You receive this email because you take part in the weekly league.' : 'Ricevi questa email perché partecipi alla lega settimanale.',
    disattiva: [en ? 'Turn off league alerts' : 'Disattiva gli avvisi della lega', linkNo],
  });
}

export async function programmaAvvisiLega(ar) {
  if (!ar.avvisiLegaDaProgrammare) return;
  ar.avvisiLegaDaProgrammare = false;
  const prossimo = ar.riga("SELECT MIN(prossimo) AS t FROM leghe_avvisi WHERE stato IN ('attesa', 'invio')")?.t;
  if (!prossimo) return;
  const t = Math.max(Date.now() + 1000, prossimo);
  try {
    const attuale = await ar.state.storage.getAlarm();
    if (attuale === null || attuale > t) await ar.state.storage.setAlarm(t);
  } catch (e) { ar.avvisiLegaDaProgrammare = true; throw e; }
}

// Un invio per alarm: evita raffiche al servizio email. Gli altri seguono a un secondo di distanza.
export async function inviaAvvisoLega(ar, env, firmaToken) {
  const ora = Date.now();
  ar.sql.exec("DELETE FROM leghe_avvisi WHERE creato < ? AND stato IN ('inviato', 'annullato', 'errore')", ora - 30 * 86400000);
  ar.sql.exec("UPDATE leghe_avvisi SET stato = 'annullato' WHERE stato IN ('attesa', 'invio') AND (settimana != ? OR COALESCE(iniziato, creato) < ?)", settimanaDi()[0], ora - SCADENZA);
  const r = ar.riga("SELECT * FROM leghe_avvisi WHERE stato IN ('attesa', 'invio') AND prossimo <= ? ORDER BY prossimo, creato LIMIT 1", ora);
  if (!r) return;
  const u = ar.riga('SELECT nome, lingua, hash, COALESCE(avvisi_lega, promemoria, 1) AS attivi FROM utenti WHERE email = ?', r.email);
  const cl = fotografiaLega(ar, r.email);
  const pos = cl?.membri.findIndex((m) => m.email === r.email) + 1;
  if (!u?.hash || !u.attivi || !cl || cl.lega !== r.lega || cl.gruppo !== r.gruppo || (r.stato === 'attesa' && (!pos || pos <= r.da))) {
    ar.sql.exec("UPDATE leghe_avvisi SET stato = 'annullato' WHERE id = ?", r.id);
    return;
  }
  if (!env.RESEND_API_KEY) {
    ar.sql.exec('UPDATE leghe_avvisi SET prossimo = ? WHERE id = ?', ora + 3600000, r.id);
    console.log('avvisi lega: chiave email assente');
    return;
  }
  // Congela i dati PRIMA dell'I/O: altri sorpassi accodano un avviso distinto.
  if (r.stato === 'attesa') ar.sql.exec("UPDATE leghe_avvisi SET stato = 'invio', a = ?, iniziato = ? WHERE id = ?", pos, ora, r.id);
  ar.sql.exec('UPDATE leghe_avvisi SET tentativi = tentativi + 1, prossimo = ? WHERE id = ?', ora + Math.min(3600000, 60000 * 2 ** Math.min(r.tentativi, 6)), r.id);
  let payload = r.payload;
  if (!payload) {
    const token = await firmaToken(env, { scopo: 'avvisi-lega', r: r.email });
    const linkNo = `${SITO}/lega/avvisi/disattiva?t=${encodeURIComponent(token)}`;
    payload = JSON.stringify({
      from: env.MITTENTE || 'Ripetizioni di Analisi <account@ripetizionidianalisi.com>', to: [r.email],
      ...componiAvvisoLega({ ...r, ...u, a: r.stato === 'attesa' ? pos : r.a }, linkNo),
      headers: { 'List-Unsubscribe': `<${linkNo}>`, 'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click' },
    });
    ar.sql.exec('UPDATE leghe_avvisi SET payload = ? WHERE id = ?', payload, r.id);
  }
  // La preferenza può essere cambiata durante la firma del link.
  if (!ar.riga("SELECT 1 AS x FROM leghe_avvisi WHERE id = ? AND stato = 'invio'", r.id)) return;
  try {
    const risposta = await fetch('https://api.resend.com/emails', {
      method: 'POST', headers: { authorization: `Bearer ${env.RESEND_API_KEY}`, 'content-type': 'application/json', 'Idempotency-Key': `lega-sorpasso/${r.id}` },
      body: payload, signal: AbortSignal.timeout(15000),
    });
    if (risposta.ok) ar.sql.exec("UPDATE leghe_avvisi SET stato = 'inviato', inviato = ? WHERE id = ?", Date.now(), r.id);
    else {
      // Errori permanenti non bloccano gli altri studenti; 409, 429 e 5xx si ritentano.
      if (risposta.status >= 400 && risposta.status < 500 && ![409, 429].includes(risposta.status)) ar.sql.exec("UPDATE leghe_avvisi SET stato = 'errore' WHERE id = ?", r.id);
      console.log('avvisi lega: servizio email', risposta.status);
    }
    await risposta.body?.cancel();
  } catch { console.log('avvisi lega: invio da ritentare'); }
}

export function paginaAvvisiDisattivati(ok, fatto) {
  return `<!doctype html><html lang="it"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Avvisi della lega</title></head><body style="max-width:32rem;margin:12vh auto;padding:20px;font:18px/1.6 Georgia,serif;color:#22302f;background:#faf8f2">
<h1>Avvisi della lega</h1>${!ok ? '<p>Il link non è valido.</p>' : fatto ? '<p>Gli avvisi email sui sorpassi sono disattivati. Puoi riattivarli dalla pagina della lega.</p>' : '<p>Vuoi disattivare le email che ti avvisano quando scendi in classifica?</p><form method="post"><button type="submit">Disattiva gli avvisi</button></form>'}<p><a href="/lega">Apri la lega</a></p></body></html>`;
}
