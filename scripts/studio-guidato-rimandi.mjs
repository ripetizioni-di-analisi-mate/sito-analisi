// Studio guidato: controlla i rimandi di ogni abilità (RIMANDI in src/data/studio-guidato.mjs) e scrive
// src/data/studio-guidato-rimandi.json con i titoli dei paragrafi e delle schede svolte.
// Uso, dopo una build con Analisi 1 e Precorso: node scripts/studio-guidato-rimandi.mjs
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { RIMANDI } from '../src/data/studio-guidato.mjs';

const CLASSI = JSON.parse(readFileSync('src/data/studio-guidato-livelli.json', 'utf8'));
const testo = (h) => h.replace(/<annotation[\s\S]*?<\/annotation>/g, '').replace(/<[^>]+>/g, '').replace(/&#x3C;/g, '<').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const errori = [];
const uscita = {};
for (const [chiave, righe] of Object.entries(RIMANDI)) {
  const [m, a] = chiave.split('/');
  const nomi = CLASSI.abilita[chiave];
  if (!nomi || nomi.length !== righe.length) { errori.push(`${chiave}: ${righe.length} rimandi per ${nomi?.length} abilità`); continue; }
  const pagina = `dist/${m}/${a}/teoria.html`;
  if (!existsSync(pagina)) { errori.push(`${chiave}: manca ${pagina} (serve la build)`); continue; }
  const titoli = Object.fromEntries([...readFileSync(pagina, 'utf8').matchAll(/<h2[^>]*id="([^"]+)"[^>]*>([\s\S]*?)<\/h2>/g)].map((x) => [x[1], testo(x[2])]));
  uscita[chiave] = righe.map((riga, i) => {
    const [t, s, b] = riga.split('|');
    const paragrafi = t.split(',').filter(Boolean).map((id) => {
      if (!titoli[id]) errori.push(`${chiave} #${i}: paragrafo «${id}» non trovato`);
      return { id, titolo: titoli[id] };
    });
    if (!paragrafi.length) errori.push(`${chiave} #${i}: nessun paragrafo`);
    const schede = s.split(',').filter(Boolean).map((n) => {
      const file = `src/content/svolti/${m}/${a}/${n}.md`;
      if (!existsSync(file)) { errori.push(`${chiave} #${i}: scheda ${n} non trovata`); return { n: Number(n) }; }
      const titolo = readFileSync(file, 'utf8').match(/^titolo:\s*(.+)$/m)?.[1].trim().replace(/^["']|["']$/g, '');
      return { n: Number(n), titolo };
    });
    const basi = b.split(',').filter(Boolean);
    for (const k of basi) {
      const [arg, idx] = k.split('#');
      if (!RIMANDI[arg]?.[Number(idx)]) errori.push(`${chiave} #${i}: base «${k}» inesistente`);
    }
    return { t: paragrafi, s: schede, b: basi };
  });
}
if (errori.length) { console.error(errori.join('\n')); process.exit(1); }
writeFileSync('src/data/studio-guidato-rimandi.json', JSON.stringify(uscita) + '\n');
console.log(`Rimandi scritti: ${Object.values(uscita).reduce((n, v) => n + v.length, 0)} abilità in ${Object.keys(uscita).length} argomenti.`);
