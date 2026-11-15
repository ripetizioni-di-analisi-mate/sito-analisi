// La prima campagna ChatGPT dell'account è iniziata l'8 novembre 2026 alle 20:13:44 UTC.
// I contatori precedenti conservano solo giorno e fonte, quindi l'intero giorno 8 resta incerto.
export const INIZIO_CAMPAGNA_CHATGPT = '2026-11-08T20:13:44.000Z';
export const FONTI_CHATGPT = {
  organico: 'ChatGPT organico',
  ads: 'ChatGPT sponsorizzato',
  incerto: 'ChatGPT da verificare',
};
const CHATGPT = new Set(['chatgpt', 'chatgpt.com', 'openai.com', 'com.openai.chatgpt', 'chatgpt.c', 'chatgpt.co']);
const CHATGPT_ADS = new Set(['chatgpt-ads', 'chatgpt_ads', 'openai-ads', 'openai_ads']);
const DURATA_ATTRIBUZIONE = 90 * 86400000;
export const COOKIE_ATTRIBUZIONE = 'fonte-conversione';
export const ROBOT = /bot|crawl|spider|slurp|preview|facebookexternalhit|meta-externalagent|headless|lighthouse|curl|wget|python|httpclient/i;
const FONTI = [
  [/(^|\.)instagram\.com$/, 'Instagram'], [/(^|\.)google\./, 'Google'], [/(^|\.)bing\.com$/, 'Bing'],
  [/(^|\.)(facebook\.com|fb\.com|fb\.me)$/, 'Facebook'], [/(^|\.)tiktok\.com$/, 'TikTok'],
  [/(^|\.)(whatsapp\.com|wa\.me)$/, 'WhatsApp'], [/(^|\.)(t\.co|x\.com|twitter\.com)$/, 'X'],
  [/(^|\.)(youtube\.com|youtu\.be)$/, 'YouTube'], [/(^|\.)duckduckgo\.com$/, 'DuckDuckGo'],
  [/(^|\.)perplexity\.ai$/, 'Perplexity'], [/(^|\.)claude\.ai$/, 'Claude'],
  [/(^|\.)(t\.me|telegram\.org)$/, 'Telegram'], [/(^|\.)ripetizioni-di-analisi-matematica\.it$/, 'Altro sito di Carmine'],
];

export function fonteStorica(fonte, quando = '') {
  if (!fonte) return 'Non registrata';
  const minuscola = fonte.toLowerCase();
  if (CHATGPT_ADS.has(minuscola)) return FONTI_CHATGPT.ads;
  if (CHATGPT.has(minuscola)) {
    return /^\d{4}-\d{2}-\d{2}/.test(quando) && quando < INIZIO_CAMPAGNA_CHATGPT.slice(0, quando.length)
      ? FONTI_CHATGPT.organico : FONTI_CHATGPT.incerto;
  }
  return fonte;
}

export function fonteIngresso(req, url) {
  const ua = req.headers.get('user-agent') || '';
  if (!ua || ROBOT.test(ua)) return null;
  let host = '';
  try { host = new URL(req.headers.get('referer') || '').hostname.replace(/^www\./, ''); } catch {}
  const utm = (url.searchParams.get('utm_source') || '').trim().toLowerCase();
  const mezzo = (url.searchParams.get('utm_medium') || '').trim().toLowerCase();
  const riferimentoAds = (url.searchParams.get('oppref') || '').trim();
  const chatgpt = CHATGPT.has(utm) || /(^|\.)(chatgpt\.com|openai\.com)$/.test(host) || host === 'com.openai.chatgpt';
  // I marcatori espliciti sopravvivono anche ai reindirizzamenti di lingua del sito.
  if (riferimentoAds || CHATGPT_ADS.has(utm) || (chatgpt && /^(cpc|ppc|paid|paid-search|paid_search|sponsored)$/.test(mezzo))) return FONTI_CHATGPT.ads;
  if (CHATGPT.has(utm)) return FONTI_CHATGPT.organico;
  if (host && host === url.hostname.replace(/^www\./, '')) return null;
  if (url.searchParams.has('gclid') || /^(google-ads|adwords)$/.test(utm)) return 'Google Ads';
  if (/^(ig|instagram)$/.test(utm) || /Instagram/.test(ua)) return 'Instagram';
  if (/FBAN|FBAV|FB_IAB/.test(ua)) return 'Facebook';
  if (chatgpt) return FONTI_CHATGPT.organico;
  if (utm) return utm.slice(0, 30);
  if (!host) return 'Diretto o app';
  for (const [re, nome] of FONTI) if (re.test(host)) return nome;
  return host.slice(0, 60);
}

export function cookieAttribuzione(fonte, ora = Date.now()) {
  if (!fonte || fonte === 'Diretto o app') return null;
  const valore = encodeURIComponent(JSON.stringify({ fonte, t: ora }));
  return `${COOKIE_ATTRIBUZIONE}=${valore}; Path=/; Max-Age=${DURATA_ATTRIBUZIONE / 1000}; HttpOnly; Secure; SameSite=Lax`;
}

export function fonteIscrizione(req, fontePrima, ora = Date.now()) {
  const valore = (req.headers.get('cookie') || '').split(';').map((p) => p.trim())
    .find((p) => p.startsWith(COOKIE_ATTRIBUZIONE + '='));
  if (valore) {
    try {
      const dati = JSON.parse(decodeURIComponent(valore.slice(COOKIE_ATTRIBUZIONE.length + 1)));
      if (typeof dati.fonte === 'string' && dati.fonte.length <= 60 && dati.fonte !== 'Diretto o app'
        && Number.isFinite(dati.t) && dati.t <= ora && ora - dati.t <= DURATA_ATTRIBUZIONE) return dati.fonte;
    } catch {}
  }
  // Il cookie precedente non conserva la data del primo ingresso.
  return fonteStorica(fontePrima);
}

export function riepilogoFonti(archivio, giorni) {
  const fonti = new Map();
  const voce = (r) => {
    const fonte = fonteStorica(r.fonte_conversione || r.fonte, r.creato);
    if (!fonti.has(fonte)) fonti.set(fonte, { fonte, iscritti: 0, paganti: 0, incasso: 0 });
    return fonti.get(fonte);
  };
  const dal = `date('now', '-${giorni - 1} days')`;
  const iscritti = archivio.righe(`SELECT fonte, fonte_conversione, creato FROM utenti WHERE substr(creato, 1, 10) >= ${dal}`);
  for (const r of iscritti) voce(r).iscritti++;
  // Una riga per acquirente, anche quando un pacchetto genera più righe o acquista in giorni diversi.
  const paganti = archivio.righe(`SELECT u.fonte, u.fonte_conversione, u.creato,
      SUM(CASE WHEN UPPER(a.valuta) = 'EUR' THEN a.importo ELSE 0 END) AS incasso
    FROM utenti u JOIN acquisti a ON a.email = u.email
    WHERE substr(a.creato, 1, 10) >= ${dal} GROUP BY u.email`);
  for (const r of paganti) {
    const v = voce(r);
    v.paganti++;
    v.incasso += r.incasso || 0;
  }
  return [...fonti.values()];
}

export const TESTI_PROVENIENZA = {
  it: {
    organico: 'ChatGPT organico', ads: 'ChatGPT sponsorizzato', incerto: 'ChatGPT da verificare',
    titolo: 'ChatGPT · organico e pubblicità', fonte: 'Fonte', ingressi: 'Ingressi', iscritti: 'Iscritti', quota: 'Quota',
    paganti: 'Paganti', incasso: 'Incasso lordo', prima: 'Prima provenienza', giorni: 'giorni',
    periodo: 'Ingressi, iscrizioni e acquisti nel periodo selezionato. L’incasso comprende i pagamenti registrati in euro, prima di rimborsi e commissioni.',
    criterio: 'Le iscrizioni seguono l’ultimo ingresso riconosciuto nei 90 giorni precedenti. Gli acquisti sono attribuiti alla provenienza registrata all’iscrizione. I ritorni diretti conservano l’ultima provenienza riconosciuta.',
    storico: 'La campagna attuale è iniziata l’8 novembre 2026 alle 21:13, ora italiana. Gli ingressi fino al 7 novembre e le iscrizioni precedenti all’avvio sono organici. I dati successivi senza un marcatore pubblicitario restano da verificare.',
    conteggio: 'Gli ingressi contano le aperture dall’esterno, anche ripetute dalla stessa persona. Il confronto con i clic di Ads Manager può differire.',
    diretto: 'Instagram comprende bio, storie e DM aperti nell’app. “Diretto o app” comprende indirizzi scritti a mano, preferiti e link che omettono la provenienza.',
  },
  en: {
    organico: 'ChatGPT organic', ads: 'ChatGPT paid', incerto: 'ChatGPT unverified',
    titolo: 'ChatGPT · organic and advertising', fonte: 'Source', ingressi: 'Entries', iscritti: 'Sign-ups', quota: 'Share',
    paganti: 'Paying users', incasso: 'Gross revenue', prima: 'First source', giorni: 'days',
    periodo: 'Entries, sign-ups and purchases in the selected period. Revenue includes recorded euro payments, before refunds and fees.',
    criterio: 'Sign-ups use the latest identified entry within the previous 90 days. Purchases are attributed to the source recorded at sign-up. Direct returns retain the latest identified source.',
    storico: 'The current campaign started on 8 November 2026 at 21:13 Italian time. Entries through 7 November and sign-ups before the campaign started are organic. Later historical records without an advertising marker remain unverified.',
    conteggio: 'Entries count arrivals from outside the website, including repeated arrivals by the same person. They may differ from Ads Manager clicks.',
    diretto: 'Instagram includes bio links, stories and direct messages opened in the app. “Direct or app” includes typed addresses, bookmarks and links that omit their source.',
  },
};
