import { componiEmail, inviaEmailResend } from './email.mjs';
// Iscrizioni ai corsi di gruppo dal vivo (pagina /corsi-di-gruppo).
//  - lo studente si iscrive a una materia e aspetta che il gruppo si formi;
//  - dalla sua pagina (/corsi-di-gruppo/la-tua-iscrizione#t=…, link anche nell'email) aggiunge data d'esame,
//    università, docente, note e le tracce d'esame (PDF o foto);
//  - Carmine vede tutto in /admin/gruppi, materia per materia, con le tracce da aprire e un CSV.
import { MATERIE_GRUPPI, FILE_GRUPPI } from '../src/data/gruppi.ts';

const PARTE = 1024 * 1024;       // le tracce si salvano a pezzi da 1 MB (limite di un valore SQLite nel Durable Object: 2 MB)
const MAX_ISCRIZIONI_RETE = 6;   // iscrizioni al giorno dalla stessa connessione
const WHATSAPP = 'https://wa.me/393885680393';

// ---------- archivio ----------
export function creaTabelleGruppi(sql) {
  sql.exec(`
    CREATE TABLE IF NOT EXISTS gruppi_iscritti (id TEXT PRIMARY KEY, materia TEXT, nome TEXT, cognome TEXT, email TEXT, telefono TEXT,
      universita TEXT, corso_laurea TEXT, docente TEXT, data_esame TEXT, note TEXT, rete TEXT, creato TEXT, aggiornato TEXT);
    CREATE INDEX IF NOT EXISTS gruppi_iscritti_email ON gruppi_iscritti (email, materia);
    CREATE TABLE IF NOT EXISTS gruppi_file (id TEXT PRIMARY KEY, iscritto TEXT, nome TEXT, tipo TEXT, dimensione INTEGER, parti INTEGER, creato TEXT);
    CREATE TABLE IF NOT EXISTS gruppi_parti (file TEXT, n INTEGER, dati BLOB, PRIMARY KEY (file, n));
  `);
}

const CAMPI = ['universita', 'corso_laurea', 'docente', 'data_esame', 'note'];
export function archivioGruppi(o, pathname, c) {
  const ora = new Date().toISOString();
  const files = (id) => o.righe('SELECT id, nome, tipo, dimensione, creato FROM gruppi_file WHERE iscritto = ? ORDER BY creato', id);
  switch (pathname) {
    case '/gruppi-iscrivi': {
      const gia = o.riga('SELECT id FROM gruppi_iscritti WHERE email = ? AND materia = ?', c.email, c.materia);
      if (gia) return { ok: true, gia: true, id: gia.id };
      if (c.rete && o.riga("SELECT COUNT(*) AS n FROM gruppi_iscritti WHERE rete = ? AND creato > ?", c.rete, new Date(Date.now() - 864e5).toISOString()).n >= MAX_ISCRIZIONI_RETE)
        return { ok: false, motivo: 'troppe' };
      o.sql.exec(`INSERT INTO gruppi_iscritti (id, materia, nome, cognome, email, telefono, universita, corso_laurea, docente, data_esame, note, rete, creato, aggiornato)
                  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        c.id, c.materia, c.nome, c.cognome, c.email, c.telefono, c.universita, c.corso_laurea, c.docente, c.data_esame, c.note, c.rete, ora, ora);
      return { ok: true, gia: false, id: c.id };
    }
    case '/gruppi-leggi': {
      const r = o.riga('SELECT * FROM gruppi_iscritti WHERE id = ?', c.id);
      return { iscritto: r, file: r ? files(r.id) : [] };
    }
    case '/gruppi-aggiorna': {
      const set = CAMPI.filter((k) => k in c.campi);
      if (!set.length) return { ok: true };
      o.sql.exec(`UPDATE gruppi_iscritti SET ${set.map((k) => `${k} = ?`).join(', ')}, aggiornato = ? WHERE id = ?`, ...set.map((k) => c.campi[k]), ora, c.id);
      return { ok: true };
    }
    case '/gruppi-elenco': {
      const iscritti = o.righe('SELECT * FROM gruppi_iscritti ORDER BY materia, creato');
      const tutti = o.righe('SELECT id, iscritto, nome, tipo, dimensione, creato FROM gruppi_file ORDER BY creato');
      return { iscritti: iscritti.map((i) => ({ ...i, file: tutti.filter((f) => f.iscritto === i.id) })) };
    }
    case '/gruppi-file-elimina':
      if (!o.riga('SELECT id FROM gruppi_file WHERE id = ? AND iscritto = ?', c.file, c.id)) return { ok: false };
      o.sql.exec('DELETE FROM gruppi_parti WHERE file = ?', c.file);
      o.sql.exec('DELETE FROM gruppi_file WHERE id = ?', c.file);
      return { ok: true };
  }
  return null;
}

// File: arrivano e ripartono come dati binari, non come JSON.
export async function archivioFileGruppi(o, req, pathname) {
  const u = new URL(req.url);
  if (pathname === '/gruppi-file-salva') {
    const iscritto = u.searchParams.get('iscritto');
    if (!o.riga('SELECT id FROM gruppi_iscritti WHERE id = ?', iscritto)) return Response.json({ ok: false, motivo: 'iscritto' });
    const n = o.riga('SELECT COUNT(*) AS n FROM gruppi_file WHERE iscritto = ?', iscritto).n;
    if (n >= FILE_GRUPPI.maxFile) return Response.json({ ok: false, motivo: 'troppi' });
    const dati = new Uint8Array(await req.arrayBuffer());
    if (!dati.length || dati.length > FILE_GRUPPI.maxByte) return Response.json({ ok: false, motivo: 'dimensione' });
    const id = crypto.randomUUID().replace(/-/g, '');
    const parti = Math.ceil(dati.length / PARTE);
    for (let i = 0; i < parti; i++) o.sql.exec('INSERT INTO gruppi_parti (file, n, dati) VALUES (?, ?, ?)', id, i, dati.slice(i * PARTE, (i + 1) * PARTE).buffer);
    o.sql.exec('INSERT INTO gruppi_file (id, iscritto, nome, tipo, dimensione, parti, creato) VALUES (?, ?, ?, ?, ?, ?, ?)',
      id, iscritto, u.searchParams.get('nome') || 'traccia', u.searchParams.get('tipo') || 'application/octet-stream', dati.length, parti, new Date().toISOString());
    return Response.json({ ok: true, id });
  }
  if (pathname === '/gruppi-file-apri') {
    const f = o.riga('SELECT * FROM gruppi_file WHERE id = ?', u.searchParams.get('id'));
    if (!f) return new Response('non trovato', { status: 404 });
    const pezzi = o.righe('SELECT dati FROM gruppi_parti WHERE file = ? ORDER BY n', f.id).map((r) => new Uint8Array(r.dati));
    const tutto = new Uint8Array(pezzi.reduce((s, p) => s + p.length, 0));
    let k = 0;
    for (const p of pezzi) { tutto.set(p, k); k += p.length; }
    return new Response(tutto, { headers: { 'content-type': f.tipo, 'content-disposition': `inline; filename*=UTF-8''${encodeURIComponent(f.nome)}` } });
  }
  return null;
}

// ---------- email ----------
const esc = (x) => String(x ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
async function inviaEmail(env, a, oggetto, righe, tasto) {
  const messaggio = componiEmail({
    subject: oggetto, categoria: 'Corsi di gruppo', righe, pulsante: tasto,
  });
  return (await inviaEmailResend(env, a, messaggio)).ok;
}
const titolo = (slug) => MATERIE_GRUPPI.find((m) => m.slug === slug)?.titolo || slug;
const esa = (buf) => [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');

// ---------- percorsi del Worker ----------
// h = { aDO, archivio, firmaToken, leggiToken, json, leggiCookie, emailValida, normalizza }
export async function gestisciGruppi(req, env, ctx, p, h) {
  const POST = req.method === 'POST';
  const { aDO, json } = h;
  const origine = new URL(req.url).origin;
  const link = async (id) => `${origine}/corsi-di-gruppo/la-tua-iscrizione#t=${await h.firmaToken(env, { g: id, scopo: 'gruppo' })}`;
  const daToken = async (t) => {
    const d = typeof t === 'string' ? await h.leggiToken(env, t) : null;
    return d?.scopo === 'gruppo' && d.g ? d.g : null;
  };
  const pulisci = (x, n) => (typeof x === 'string' ? x.replace(/[\u0000-\u001f<>]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, n) : '');
  const dataValida = (x) => (typeof x === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(x) && !Number.isNaN(Date.parse(x)) ? x : '');
  const pubblico = (r) => ({ iscritto: { materia: titolo(r.iscritto.materia), nome: r.iscritto.nome, cognome: r.iscritto.cognome, email: r.iscritto.email,
    ...Object.fromEntries(CAMPI.map((k) => [k, r.iscritto[k] || ''])) }, file: r.file });

  // ===== iscrizione =====
  if (p === '/api/gruppi/iscriviti' && POST) {
    const c = await req.json().catch(() => ({}));
    const email = h.normalizza(c.email);
    const d = {
      materia: MATERIE_GRUPPI.some((m) => m.slug === c.materia) ? c.materia : null,
      nome: pulisci(c.nome, 60), cognome: pulisci(c.cognome, 60), email, telefono: pulisci(c.telefono, 30),
      universita: pulisci(c.universita, 120), corso_laurea: pulisci(c.corso_laurea, 120), docente: pulisci(c.docente, 80),
      data_esame: dataValida(c.data_esame), note: pulisci(c.note, 800),
    };
    if (!d.materia) return json({ errore: 'Scegli il corso.' }, 400);
    if (d.nome.length < 2 || d.cognome.length < 2) return json({ errore: 'Scrivi nome e cognome.' }, 400);
    if (!h.emailValida(email)) return json({ errore: 'Scrivi un indirizzo email valido.' }, 400);
    if (!/^[+0-9 ]{6,20}$/.test(d.telefono)) return json({ errore: 'Scrivi un numero di telefono valido.' }, 400);
    const ip = req.headers.get('cf-connecting-ip') || '';
    const rete = ip ? esa(await crypto.subtle.digest('SHA-256', new TextEncoder().encode('gruppi:' + ip))).slice(0, 24) : null;
    const id = crypto.randomUUID().replace(/-/g, '').slice(0, 20);
    const r = await aDO(env, '/gruppi-iscrivi', { id, ...d, rete });
    if (!r.ok) return json({ errore: 'Troppe iscrizioni da questa connessione oggi. Riprova domani o scrivimi su WhatsApp.' }, 429);
    const pagina = await link(r.id);
    if (r.gia) {
      // Già iscritto a questo corso: il link alla sua pagina arriva solo per email, non si mostra a chi conosce l'indirizzo.
      ctx.waitUntil(inviaEmail(env, email, `La tua iscrizione al corso di ${titolo(d.materia)}`, [
        `Ciao ${d.nome},`, `risulti già iscritto al corso di gruppo di ${titolo(d.materia)}. Dalla tua pagina puoi aggiungere le tracce d’esame e aggiornare la data dell’esame.`,
      ], ['Apri la tua pagina del corso', pagina]));
      return json({ ok: true, gia: true });
    }
    ctx.waitUntil(inviaEmail(env, email, `Iscrizione al corso di gruppo di ${titolo(d.materia)}`, [
      `Ciao ${d.nome},`,
      `la tua iscrizione al corso di gruppo di ${titolo(d.materia)} è registrata. Quando il gruppo è formato ti scrivo su WhatsApp con il calendario delle lezioni.`,
      'Nel frattempo, dalla tua pagina del corso puoi inviarmi le tracce d’esame del tuo docente e indicare la data dell’esame: servono a costruire il programma del corso.',
    ], ['Apri la tua pagina del corso', pagina]));
    return json({ ok: true, gia: false, link: pagina, t: pagina.split('#t=')[1] });
  }

  // ===== pagina personale dell'iscritto =====
  if (p === '/api/gruppi/io' && POST) {
    const id = await daToken((await req.json().catch(() => ({}))).t);
    const r = id ? await aDO(env, '/gruppi-leggi', { id }) : null;
    if (!r?.iscritto) return json({ errore: 'Iscrizione non trovata.' }, 404);
    return json(pubblico(r), 200, { 'cache-control': 'no-store' });
  }
  if (p === '/api/gruppi/aggiorna' && POST) {
    const c = await req.json().catch(() => ({}));
    const id = await daToken(c.t);
    if (!id) return json({ errore: 'Iscrizione non trovata.' }, 404);
    const campi = {};
    const lim = { universita: 120, corso_laurea: 120, docente: 80, note: 800 };
    for (const k of CAMPI) if (typeof c[k] === 'string') campi[k] = k === 'data_esame' ? dataValida(c[k]) : pulisci(c[k], lim[k]);
    await aDO(env, '/gruppi-aggiorna', { id, campi });
    return json(pubblico(await aDO(env, '/gruppi-leggi', { id })));
  }
  if (p === '/api/gruppi/file' && POST) {
    const u = new URL(req.url);
    const id = await daToken(u.searchParams.get('t') || '');
    if (!id) return json({ errore: 'Iscrizione non trovata.' }, 404);
    const tipo = (req.headers.get('content-type') || '').split(';')[0].trim();
    if (!FILE_GRUPPI.tipi.includes(tipo)) return json({ errore: 'Si possono inviare PDF e foto (JPG, PNG, WEBP).' }, 415);
    const lunghezza = Number(req.headers.get('content-length') || 0);
    if (lunghezza > FILE_GRUPPI.maxByte) return json({ errore: 'Il file supera gli 8 MB.' }, 413);
    const nome = pulisci(u.searchParams.get('nome') || 'traccia', 120).replace(/[\\/]/g, '-') || 'traccia';
    const r = await h.archivio(env).fetch(`https://archivio/gruppi-file-salva?iscritto=${encodeURIComponent(id)}&nome=${encodeURIComponent(nome)}&tipo=${encodeURIComponent(tipo)}`,
      { method: 'POST', body: req.body }).then((x) => x.json());
    if (!r.ok) return json({ errore: r.motivo === 'troppi' ? `Si possono inviare al massimo ${FILE_GRUPPI.maxFile} file.` : r.motivo === 'dimensione' ? 'Il file è vuoto o supera gli 8 MB.' : 'Iscrizione non trovata.' }, 400);
    return json(pubblico(await aDO(env, '/gruppi-leggi', { id })));
  }
  if (p === '/api/gruppi/file-elimina' && POST) {
    const c = await req.json().catch(() => ({}));
    const id = await daToken(c.t);
    if (!id) return json({ errore: 'Iscrizione non trovata.' }, 404);
    await aDO(env, '/gruppi-file-elimina', { id, file: String(c.file || '') });
    return json(pubblico(await aDO(env, '/gruppi-leggi', { id })));
  }

  // ===== pagina riservata /admin/gruppi =====
  if (p === '/admin/gruppi' || p === '/admin/gruppi.csv' || p.startsWith('/admin/gruppi/file/')) {
    const ma = h.leggiCookie(req, 'admin');
    const sess = ma ? await h.leggiToken(env, ma) : null;
    if (!sess?.admin) return Response.redirect(`${origine}/admin`, 302);
    if (p.startsWith('/admin/gruppi/file/')) {
      const r = await h.archivio(env).fetch(`https://archivio/gruppi-file-apri?id=${encodeURIComponent(p.split('/').pop())}`);
      return new Response(r.body, { status: r.status, headers: { 'content-type': r.headers.get('content-type') || 'application/octet-stream',
        'content-disposition': r.headers.get('content-disposition') || 'inline', 'cache-control': 'private, no-store', 'x-robots-tag': 'noindex' } });
    }
    const { iscritti } = await aDO(env, '/gruppi-elenco', {});
    if (p === '/admin/gruppi.csv') {
      const col = ['materia', 'nome', 'cognome', 'email', 'telefono', 'universita', 'corso_laurea', 'docente', 'data_esame', 'note', 'tracce', 'creato'];
      const cella = (x) => `"${String(x ?? '').replace(/"/g, '""')}"`;
      const righe = iscritti.map((i) => col.map((k) => cella(k === 'materia' ? titolo(i.materia) : k === 'tracce' ? i.file.length : i[k])).join(';'));
      return new Response('﻿' + [col.join(';'), ...righe].join('\r\n'), { headers: { 'content-type': 'text/csv; charset=utf-8', 'content-disposition': 'attachment; filename="iscritti-corsi-di-gruppo.csv"' } });
    }
    return paginaAdminGruppi(iscritti);
  }
  return null;
}

// ---------- pagina /admin/gruppi ----------
function numeroWhatsApp(t) {
  const cifre = String(t || '').replace(/^\+/, '').replace(/[^0-9]/g, '');
  return /^3\d{8,9}$/.test(cifre) ? '39' + cifre : cifre.replace(/^00/, '');
}
const dataIt = (x) => (x ? x.split('-').reverse().join('/') : '');
function paginaAdminGruppi(iscritti) {
  const sezioni = MATERIE_GRUPPI.map((m) => {
    const del = iscritti.filter((i) => i.materia === m.slug)
      .sort((a, b) => (a.data_esame || '9999').localeCompare(b.data_esame || '9999'));
    const telefoni = del.map((i) => i.telefono).join(', ');
    const righe = del.map((i) => `<tr>
<td><strong>${esc(i.nome)} ${esc(i.cognome)}</strong><br><span class="piccolo"><a href="mailto:${esc(i.email)}">${esc(i.email)}</a> · <a href="https://wa.me/${esc(numeroWhatsApp(i.telefono))}" target="_blank">${esc(i.telefono)}</a></span></td>
<td>${esc(i.universita)}${i.corso_laurea ? `<br><span class="piccolo">${esc(i.corso_laurea)}</span>` : ''}${i.docente ? `<br><span class="piccolo">Docente: ${esc(i.docente)}</span>` : ''}</td>
<td>${i.data_esame ? `<strong>${esc(dataIt(i.data_esame))}</strong>` : '<span class="piccolo">da indicare</span>'}</td>
<td>${i.file.length ? i.file.map((f) => `<a href="/admin/gruppi/file/${esc(f.id)}" target="_blank">${esc(f.nome)}</a>`).join('<br>') : '<span class="piccolo">nessuna</span>'}</td>
<td class="piccolo">${esc(i.note)}</td><td class="piccolo">${esc(dataIt(i.creato.slice(0, 10)))}</td></tr>`).join('');
    return `<section><h2>${esc(m.titolo)} <span class="conta">${del.length} ${del.length === 1 ? 'iscritto' : 'iscritti'}</span></h2>
${del.length ? `<div class="tab"><table><thead><tr><th>Studente</th><th>Università e docente</th><th>Esame</th><th>Tracce</th><th>Note</th><th>Iscritto il</th></tr></thead><tbody>${righe}</tbody></table></div>
<details class="piccolo"><summary>Telefoni per il gruppo WhatsApp</summary><p>${esc(telefoni)}</p></details>` : '<p class="piccolo">Nessun iscritto per ora.</p>'}</section>`;
  }).join('');
  return new Response(`<!doctype html><html lang="it"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex"><title>Corsi di gruppo · iscritti</title><style>
body{font-family:'Source Sans 3',system-ui,sans-serif;background:#faf8f2;color:#22302f;margin:0;padding:24px 16px;line-height:1.45}
main{max-width:1150px;margin:0 auto}h1,h2{font-family:Georgia,serif;font-weight:600}h1{margin:0 0 4px}h2{margin:32px 0 10px;font-size:1.3rem}a{color:#2f6f68}
.conta{font-family:'Source Sans 3',system-ui,sans-serif;font-size:.85rem;font-weight:600;color:#2f6f68;background:#e3efe9;border-radius:999px;padding:2px 10px;margin-left:6px;vertical-align:middle}
table{border-collapse:collapse;width:100%;background:#fff;border:1px solid #ddd6c8;font-size:15px}th,td{text-align:left;padding:8px 10px;border-bottom:1px solid #eee8dc;vertical-align:top}
th{background:#f1ede4;font-size:13px;text-transform:uppercase;letter-spacing:.05em;color:#5a6664}.piccolo{font-size:13px;color:#5a6664}.tab{overflow-x:auto}details{margin-top:8px}
.tasto{font-weight:600;background:#2f6f68;color:#fff;border-radius:999px;padding:7px 16px;text-decoration:none;display:inline-block}</style></head><body><main>
<p class="piccolo"><a href="/admin">← Dashboard</a></p>
<h1>Corsi di gruppo</h1>
<p class="piccolo">Iscrizioni dalla pagina <a href="/corsi-di-gruppo" target="_blank">/corsi-di-gruppo</a>, ordinate per data d’esame. Le tracce si aprono con un clic.</p>
<p><a class="tasto" href="/admin/gruppi.csv">Scarica l’elenco (CSV)</a></p>
${sezioni}
<p class="piccolo" style="margin-top:32px">Per scrivere a tutti gli iscritti di un corso: <a href="${WHATSAPP}">WhatsApp</a> con i telefoni dell’elenco.</p>
</main></body></html>`, { headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store', 'x-robots-tag': 'noindex' } });
}
