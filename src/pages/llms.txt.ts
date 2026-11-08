// /llms.txt: descrizione del sito per gli assistenti IA (ChatGPT, Claude, Perplexity…), con i collegamenti principali.
import { getCollection } from 'astro:content';
import { MATERIE } from '../data/materie';
import { assoluto } from '../lib/seo';

export async function GET() {
  const teoria = new Map((await getCollection('teoria')).map((v) => [v.id, v.data.sommario ?? '']));
  const attive = MATERIE.filter((x) => x.attiva);
  let t = `# Ripetizioni di Analisi\n\n`;
  t += `> Teoria ed esercizi svolti di matematica e fisica per gli esami universitari, per la maturità scientifica e per i concorsi, in italiano (gran parte anche in inglese). Materie: ${attive.map((x) => x.titolo).join(', ')}. Autore di tutti i contenuti: Carmine Tornincasa, insegnante privato di Analisi matematica (laurea in Ingegneria civile e master in matematica, oltre mille studenti seguiti e più di diecimila ore di lezione, Instagram @ripetizioni_di_analisi_mate).\n\n`;
  t += `English: theory and step-by-step worked examples for university exams in Calculus 1 and 2 (Mathematical Analysis), Precalculus, Linear Algebra, Physics 1 and 2 and Mathematics for Economics are also available in English at ${assoluto('/en')}. Visitors whose browser is not set to Italian see the English pages automatically.\n\n`;
  t += `Ogni argomento ha tre sezioni: teoria (definizioni, teoremi con ipotesi esplicite e dimostrazioni, esempi), esercizi svolti passo dopo passo divisi per tipologia (il calcolo e sotto la spiegazione a parole di ogni passaggio), esercizi da fare con la soluzione. Senza account sono liberi i primi paragrafi della teoria, le prime tre schede di esercizi svolti di ogni argomento e le tracce degli esercizi; il resto si sblocca con l'acquisto della materia (pagamento una tantum). Oltre ai materiali scritti ci sono videocorsi preregistrati, corsi di gruppo dal vivo e lezioni individuali online con Carmine.\n\n`;
  t += `## Teoremi e definizioni\n\nOgni teorema, proposizione e definizione della teoria ha una pagina propria (/<materia>/<argomento>/teoria/<nome>) con l'enunciato in chiaro, la dimostrazione, gli esercizi in cui si applica e i nomi alternativi con cui è noto.\n\n- [Tutti i teoremi del sito, in ordine alfabetico](${assoluto('/teoremi')})\n- [Tutte le definizioni, in ordine alfabetico](${assoluto('/definizioni')})\n- [All the theorems (English)](${assoluto('/en/teoremi')})\n\n`;
  for (const m of attive) {
    t += `## ${m.titolo}\n\n${m.descrizione}\n\n- [${m.titolo}: indice degli argomenti](${assoluto(`/${m.slug}`)})\n`;
    if ([...teoria.keys()].some((id) => id.startsWith(`${m.slug}/`))) t += `- [${m.titolo}: tutti i teoremi e le definizioni, ognuno con la sua pagina](${assoluto(`/${m.slug}/teoremi`)})\n`;
    for (const a of m.argomenti) {
      const id = `${m.slug}/${a.slug}`;
      if (!teoria.has(id)) continue;
      t += `- [${a.titolo}: teoria](${assoluto(`/${id}/teoria`)}): ${teoria.get(id)}\n`;
      t += `- [${a.titolo}: esercizi svolti](${assoluto(`/${id}/esercizi-svolti`)})\n`;
      t += `- [${a.titolo}: esercizi con soluzione](${assoluto(`/${id}/esercizi`)})\n`;
    }
    t += '\n';
  }
  const formulari = await getCollection('formulari');
  if (formulari.length) {
    t += `## Formulari gratuiti\n\nLe formule di ogni materia con le condizioni di validità, nell'ordine degli argomenti dell'esame; si leggono online e si scaricano in PDF con un account gratuito.\n\n`;
    for (const v of formulari) t += `- [${v.data.titolo}](${assoluto(`/formulari/${v.id}`)}): ${v.data.sommario}\n`;
    t += '\n';
  }
  const formulariEn = await getCollection('formulari_en');
  if (formulariEn.length) {
    t += `## Free formula sheets (English)\n\nThe formulas of each subject with the conditions under which they hold; read online, PDF with a free account.\n\n`;
    for (const v of formulariEn) t += `- [${v.data.titolo}](${assoluto(`/en/formulari/${v.id}`)}): ${v.data.sommario}\n`;
    t += '\n';
  }
  t += `## Altre pagine\n\n- [Chi sono: Carmine Tornincasa, autore dei contenuti](${assoluto('/chi-sono')})\n- [Ripetizioni di Analisi 1 e Analisi 2 online: lezioni individuali e corsi di gruppo con Carmine](${assoluto('/ripetizioni-analisi')})\n- [Videocorsi di Analisi 1, Analisi 2, Algebra lineare e Matematica generale](${assoluto('/videocorsi')})\n- [Compatibilità con il tuo esame: confronto gratuito di compiti e programmi universitari con il materiale del sito](${assoluto('/compatibilita')})\n- [Domande a tempo: quiz gratuiti per materia e argomento](${assoluto('/domande-a-tempo')})\n- [Timed questions: free quizzes in English](${assoluto('/en/domande-a-tempo')})\n- [Che cosa studiare per un concorso pubblico (guida gratuita)](${assoluto('/concorsi')})\n- [Prezzi](${assoluto('/prezzi')})\n- [Contatti e assistenza](${assoluto('/contatti')})\n- [Versione inglese](${assoluto('/en')})\n`;
  return new Response(t, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
