// IndexNow: due volte al giorno (con i cron del Worker) si avvisano Bing, Yandex, Seznam, Naver, Yep e gli altri
// motori che aderiscono (Bing alimenta anche DuckDuckGo, Ecosia, Yahoo e la ricerca di ChatGPT e Copilot)
// delle pagine nuove o cambiate. Le pagine e le loro date si leggono dalla mappa del sito (sitemap.xml, che il Worker passa all'archivio, con le
// date vere di scripts/date-pagine.mjs); l'archivio ricorda la data già comunicata per ogni indirizzo, così una
// pagina si segnala solo quando cambia. Il lavoro si fa dentro il Durable Object, che ha più tempo di calcolo
// del Worker gratuito. La chiave è pubblica per costruzione: il file /<chiave>.txt dimostra che il sito è nostro.
export const CHIAVE_INDEXNOW = 'b359b0d7e5e9f87fea8bef0d3918b05f';
const HOST = 'ripetizionidianalisi.com';
const PER_INVIO = 5000; // il protocollo ne accetta fino a 10.000 per richiesta

export async function eseguiIndexNow(sql, xml) {
  sql.exec('CREATE TABLE IF NOT EXISTS indexnow (url TEXT PRIMARY KEY, data TEXT)');
  if (!xml || !xml.includes('<urlset')) return { errore: 'mappa del sito non letta' };
  const voci = [...xml.matchAll(/<url><loc>([^<]+)<\/loc>(?:<lastmod>([^<]+)<\/lastmod>)?/g)].map((m) => ({ u: m[1], d: m[2] || '-' }));
  const note = new Map([...sql.exec('SELECT url, data FROM indexnow')].map((x) => [x.url, x.data]));
  const nuove = voci.filter((v) => note.get(v.u) !== v.d);
  let inviate = 0;
  const esiti = [];
  for (let i = 0; i < nuove.length; i += PER_INVIO) {
    const gruppo = nuove.slice(i, i + PER_INVIO);
    const risp = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'content-type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: HOST, key: CHIAVE_INDEXNOW, keyLocation: `https://${HOST}/${CHIAVE_INDEXNOW}.txt`, urlList: gruppo.map((v) => v.u) }),
    });
    esiti.push(risp.status);
    if (risp.status !== 200 && risp.status !== 202) break; // si riprova al giro successivo con le stesse pagine
    for (const v of gruppo) sql.exec('INSERT INTO indexnow (url, data) VALUES (?, ?) ON CONFLICT(url) DO UPDATE SET data = excluded.data', v.u, v.d);
    inviate += gruppo.length;
  }
  return { pagine: voci.length, nuove: nuove.length, inviate, esiti };
}
