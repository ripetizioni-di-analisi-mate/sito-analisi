// /llms.txt: descrizione del sito per gli assistenti IA (ChatGPT, Claude, Perplexity…), con i collegamenti principali.
import { getCollection } from 'astro:content';
import { MATERIE } from '../data/materie';
import { assoluto } from '../lib/seo';

export async function GET() {
  const teoria = new Map((await getCollection('teoria')).map((v) => [v.id, v.data.sommario ?? '']));
  let t = `# Ripetizioni di Analisi\n\n`;
  t += `> Teoria ed esercizi di matematica per gli esami universitari, in italiano (con una parte in inglese): Precorso, Analisi matematica 1, Analisi matematica 2. Curato da Carmine Tornincasa, docente di ripetizioni (Instagram @ripetizioni_di_analisi_mate).\n\n`;
  t += `Ogni argomento ha tre sezioni: teoria (definizioni, teoremi con ipotesi esplicite e dimostrazioni), esercizi svolti passo dopo passo divisi per tipologia, esercizi da fare con soluzione. Di ogni argomento sono liberi l'inizio della teoria, le prime tre schede di esercizi svolti e le tracce degli esercizi; il resto richiede l'acquisto della materia.\n\n`;
  for (const m of MATERIE.filter((x) => x.attiva)) {
    t += `## ${m.titolo}\n\n${m.descrizione}\n\n- [${m.titolo}: indice degli argomenti](${assoluto(`/${m.slug}`)})\n`;
    for (const a of m.argomenti) {
      const id = `${m.slug}/${a.slug}`;
      if (!teoria.has(id)) continue;
      t += `- [${a.titolo}: teoria](${assoluto(`/${id}/teoria`)}): ${teoria.get(id)}\n`;
      t += `- [${a.titolo}: esercizi svolti](${assoluto(`/${id}/esercizi-svolti`)})\n`;
      t += `- [${a.titolo}: esercizi con soluzione](${assoluto(`/${id}/esercizi`)})\n`;
    }
    t += '\n';
  }
  t += `## Altre pagine\n\n- [Prezzi](${assoluto('/prezzi')})\n- [Contatti e assistenza](${assoluto('/contatti')})\n- [Versione inglese](${assoluto('/en')})\n`;
  return new Response(t, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
