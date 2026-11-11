import { registraInviiDalSito } from './storico-email.mjs';

export const SITO_EMAIL = 'https://ripetizionidianalisi.com';
export const mittenteEmail = (env) => env.MITTENTE || 'Ripetizioni di Analisi <account@ripetizionidianalisi.com>';

const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (c) => (
  { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
));
const paragrafo = (s) => `<p style="margin:0 0 15px;line-height:1.55">${esc(s)}</p>`;

export function componiEmail({
  subject, titolo = subject, anteprima, categoria, lingua = 'it', righe, scheda, dopo = [], pulsante,
  firma = 'Carmine', motivo, disattiva, bronzo = false,
}) {
  const colore = bronzo ? '#785735' : '#214f50';
  const dettagli = scheda ? `<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin:0 0 16px;background:${bronzo ? '#f3ece2' : '#faf9f6'};border:1px solid ${bronzo ? '#dfceb7' : '#e1dcd2'};border-radius:8px"><tr>
${scheda.immagine ? `<td width="62" valign="middle" style="padding:10px 0 10px 12px"><img src="${esc(scheda.immagine)}" width="52" alt="" style="display:block;max-width:52px;height:auto"></td>` : ''}
<td style="padding:12px 14px;font-family:Arial,sans-serif">
${scheda.etichetta ? `<div style="font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:${colore};margin-bottom:3px">${esc(scheda.etichetta)}</div>` : ''}
<div style="font-size:18px;font-weight:700;color:${bronzo ? '#57432e' : '#23302e'}">${scheda.prima ? `<s style="font-size:14px;font-weight:400">${esc(scheda.prima)}</s> ` : ''}${esc(scheda.valore)}</div>
${scheda.nota ? `<div style="font-size:13px;color:#59645f;margin-top:4px">${esc(scheda.nota)}</div>` : ''}
</td></tr></table>` : '';
  const bottone = pulsante ? `<table role="presentation" cellspacing="0" cellpadding="0" style="margin:3px 0 17px"><tr><td bgcolor="#214f50" style="border-radius:8px"><a href="${esc(pulsante[1])}" style="display:inline-block;background:#214f50;color:#fff;border:1px solid #214f50;border-radius:8px;text-decoration:none;padding:11px 16px;font:700 14px Arial,sans-serif">${esc(pulsante[0])}</a></td></tr></table>` : '';
  const piede = motivo || disattiva ? `<tr><td style="padding:0 24px 20px"><div style="padding-top:12px;border-top:1px solid #e1dcd2;color:#59645f;font:12px/1.55 Arial,sans-serif">${esc(motivo)}${disattiva ? ` <a href="${esc(disattiva[1])}" style="color:#214f50;text-decoration:underline">${esc(disattiva[0])}</a>.` : ''}</div></td></tr>` : '';
  const html = `<!doctype html><html lang="${['de', 'es', 'en'].includes(lingua) ? lingua : 'it'}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="light"></head>
<body style="margin:0;background:#faf9f6;color:#23302e">
<div style="display:none;max-height:0;max-width:0;overflow:hidden;opacity:0;mso-hide:all">${esc(anteprima || titolo)}</div>
<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#faf9f6"><tr><td align="center" style="padding:16px 10px">
<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:560px;text-align:left;background:#fff;border:1px solid #e1dcd2;border-radius:12px">
<tr><td style="padding:16px 24px 0"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-bottom:1px solid #e1dcd2"><tr>
<td width="39" style="padding:0 0 12px"><img src="${SITO_EMAIL}/logo-180.png" width="30" height="30" alt="" style="display:block"></td>
<td style="padding:0 0 12px;font:700 17px Georgia,serif;color:#23302e">Ripetizioni di Analisi</td></tr></table></td></tr>
<tr><td style="padding:17px 24px 3px;font:15px/1.55 Arial,sans-serif;color:#23302e">
${categoria ? `<div style="font:700 11px Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:${colore}">${esc(categoria)}</div>` : ''}
<h1 style="margin:5px 0 13px;font:700 28px/1.17 Georgia,serif;color:#23302e">${esc(titolo)}</h1>
${righe.map(paragrafo).join('')}${dettagli}${dopo.map(paragrafo).join('')}${bottone}
<p style="margin:0 0 14px;line-height:1.4"><strong>${esc(firma)}</strong><br><span style="color:#59645f;font-size:12px">Ripetizioni di Analisi</span></p>
</td></tr>${piede}</table></td></tr></table></body></html>`;
  const text = [
    'Ripetizioni di Analisi', titolo, ...righe, scheda?.etichetta, scheda?.prima, scheda?.valore, scheda?.nota, ...dopo,
    pulsante && `${pulsante[0]}\n${pulsante[1]}`, firma, motivo, disattiva && `${disattiva[0]}\n${disattiva[1]}`,
  ].filter(Boolean).join('\n\n');
  return { subject, html, text };
}

export function intestazioniDisiscrizione(link) {
  return { 'List-Unsubscribe': `<${link}>`, 'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click' };
}

export async function inviaEmailResend(env, destinatario, messaggio, chiave, tipo) {
  if (!env.RESEND_API_KEY) return { ok: false, stato: 503 };
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${env.RESEND_API_KEY}`, 'content-type': 'application/json',
      ...(chiave ? { 'Idempotency-Key': chiave } : {}),
    },
    body: JSON.stringify({ from: mittenteEmail(env), to: [destinatario], ...messaggio }),
    signal: AbortSignal.timeout(10000),
  }).catch(() => null);
  const id = r?.ok ? (await r.json().catch(() => ({}))).id : null;
  if (r?.ok && tipo) {
    await registraInviiDalSito(env, [{
      id: chiave || id || crypto.randomUUID(), tipo, email: destinatario, oggetto: messaggio.subject, inviato: Date.now(),
    }]);
  }
  return { ok: Boolean(r?.ok), stato: r?.status || 503, id };
}
