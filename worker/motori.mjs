// Motori di ricerca verificati: Googlebot e Bingbot leggono per intero teoria, schede e soluzioni a pagamento,
// così le pagine si trovano per tutto quello che contengono (scelta 2.8 B di Carmine, consulenza del 31/10/2026).
// Le persone continuano a vedere l'anteprima. Il robot si riconosce dall'indirizzo IP, confrontato con gli
// elenchi pubblicati da Google e da Microsoft: chi si finge Googlebot cambiando solo il nome del browser
// riceve l'anteprima come tutti.
// Nella pagina la parte riservata è racchiusa in <div class="contenuto-riservato" data-nosnippet>: i dati strutturati
// (isAccessibleForFree: false, hasPart con cssSelector .contenuto-riservato) dicono a Google che è contenuto a pagamento,
// data-nosnippet impedisce di mostrarlo negli estratti e nelle risposte dell'IA di Google;
// a Bing l'intestazione «nocache» impedisce di mostrarlo per intero (copia cache, Copilot).

const ELENCHI = {
  google: 'https://developers.google.com/static/search/apis/ipranges/googlebot.json',
  bing: 'https://www.bing.com/toolbox/bingbot.json',
};
const NOMI = { google: /Googlebot|Google-InspectionTool/i, bing: /bingbot/i };
const DURATA = 12 * 60 * 60 * 1000; // gli elenchi si rileggono due volte al giorno

const reti = {}; // motore → { quando, v4: [[base, maschera]], v6: [[base, maschera]] }

function v4(ip) {
  const p = ip.split('.').map(Number);
  if (p.length !== 4 || p.some((x) => !(x >= 0 && x <= 255))) return null;
  return BigInt(((p[0] << 24) >>> 0) + (p[1] << 16) + (p[2] << 8) + p[3]);
}
function v6(ip) {
  if (!ip.includes(':')) return null;
  let [testa, coda] = ip.split('::');
  const a = testa ? testa.split(':') : [];
  const b = coda !== undefined && coda !== '' ? coda.split(':') : [];
  if (coda === undefined && a.length !== 8) return null;
  const gruppi = [...a, ...Array(8 - a.length - b.length).fill('0'), ...b];
  if (gruppi.length !== 8) return null;
  let n = 0n;
  for (const g of gruppi) { const x = parseInt(g || '0', 16); if (!(x >= 0 && x <= 0xffff)) return null; n = (n << 16n) | BigInt(x); }
  return n;
}
function rete(cidr, bit, leggi) {
  const [base, lung] = cidr.split('/');
  const n = leggi(base); const l = Number(lung);
  if (n === null || !(l >= 0 && l <= bit)) return null;
  const maschera = l === 0 ? 0n : ((1n << BigInt(bit)) - 1n) ^ ((1n << BigInt(bit - l)) - 1n);
  return [n & maschera, maschera];
}

async function carica(motore) {
  const r = reti[motore];
  if (r && Date.now() - r.quando < DURATA) return r;
  try {
    const risp = await fetch(ELENCHI[motore], { cf: { cacheTtl: 43200, cacheEverything: true } });
    if (!risp.ok) throw new Error(String(risp.status));
    const dati = await risp.json();
    const nuovo = { quando: Date.now(), v4: [], v6: [] };
    for (const p of dati.prefixes || []) {
      if (p.ipv4Prefix) { const x = rete(p.ipv4Prefix, 32, v4); if (x) nuovo.v4.push(x); }
      if (p.ipv6Prefix) { const x = rete(p.ipv6Prefix, 128, v6); if (x) nuovo.v6.push(x); }
    }
    if (nuovo.v4.length + nuovo.v6.length === 0) throw new Error('elenco vuoto');
    reti[motore] = nuovo;
    return nuovo;
  } catch (e) {
    console.log('motori: elenco non letto', motore, String(e?.message || e));
    return r || null; // se l'elenco non si legge si usa quello vecchio; senza elenco nessuno è verificato
  }
}

// Restituisce 'google', 'bing' oppure null.
export async function motoreVerificato(req) {
  const ua = req.headers.get('user-agent') || '';
  const motore = Object.keys(NOMI).find((k) => NOMI[k].test(ua));
  if (!motore) return null;
  const ip = req.headers.get('cf-connecting-ip') || '';
  const r = await carica(motore);
  if (!r) return null;
  const n4 = v4(ip);
  if (n4 !== null) return r.v4.some(([b, m]) => (n4 & m) === b) ? motore : null;
  const n6 = v6(ip);
  if (n6 !== null) return r.v6.some(([b, m]) => (n6 & m) === b) ? motore : null;
  return null;
}

// Pagina intera per il motore, con la parte riservata racchiusa in un solo blocco .contenuto-riservato.
//  - teoria: dal terzo paragrafo (<h2>) in poi, come nell'anteprima di scripts/vetrine.mjs;
//  - schede svolte: lo svolgimento di ogni esercizio (dopo il segno di fine traccia di remark-tracce.mjs);
//  - esercizi da fare: i blocchi «Mostra soluzione».
const APRI = '<div class="contenuto-riservato" data-nosnippet>';
export function paginaPerMotore(risposta, tipo, n) {
  const riscrivi = new HTMLRewriter();
  if (tipo === 'teoria') {
    let h2 = 0, aperto = false;
    riscrivi.on('.testo-studio > h2', {
      element(e) { h2++; if (h2 === 3 && !aperto) { e.before(APRI, { html: true }); aperto = true; } },
    }).on('.testo-studio', {
      element(e) { e.onEndTag((fine) => { if (aperto) fine.before('</div>', { html: true }); }); },
    });
  } else if (tipo === 'esercizi-svolti' && n) {
    // Dentro .testo-studio: <h2> dell'esercizio, traccia, segno di fine traccia, svolgimento.
    let segno = false, aperto = false;
    riscrivi.on('.testo-studio > *', {
      element(e) {
        if (e.tagName === 'h2') {
          if (aperto) { e.before('</div>', { html: true }); aperto = false; }
          segno = false;
          return;
        }
        if (segno && !aperto) { e.before(APRI, { html: true }); aperto = true; }
      },
    }).on('.testo-studio span.fine-traccia', {
      element() { segno = true; },
    }).on('.testo-studio', {
      element(e) { e.onEndTag((fine) => { if (aperto) fine.before('</div>', { html: true }); }); },
    });
  } else if (tipo === 'voce') {
    // pagina singola di un teorema: riservata solo la dimostrazione
    riscrivi.on('.testo-studio details.blocco-dimostrazione', {
      element(e) { e.before(APRI, { html: true }); e.after('</div>', { html: true }); },
    });
  } else if (tipo === 'esercizi') {
    // Solo i blocchi esterni: un blocco dentro un altro è già racchiuso (i blocchi .contenuto-riservato non si annidano).
    let dentro = 0;
    riscrivi.on('details.blocco-soluzione', {
      element(e) {
        if (dentro === 0) { e.before(APRI, { html: true }); e.after('</div>', { html: true }); }
        dentro++;
        e.onEndTag(() => { dentro--; });
      },
    });
  }
  return riscrivi.transform(risposta);
}
