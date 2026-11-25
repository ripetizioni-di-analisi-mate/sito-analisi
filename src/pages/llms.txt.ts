// /llms.txt: presentazione breve del sito per gli assistenti IA (ChatGPT, Claude, Perplexity, Gemini…).
// SEO per le IA (25/11/2026): la versione con tutti i capitoli superava i 250.000 caratteri e gli assistenti
// ne leggevano solo l'inizio. Qui restano chi siamo, le materie con il loro indice e le pagine utili;
// l'elenco completo degli argomenti è in /llms-full.txt (formato proposto da llmstxt.org).
import { MATERIE } from '../data/materie';
import { assoluto } from '../lib/seo';

export async function GET() {
  const attive = MATERIE.filter((x) => x.attiva);
  const gruppi = new Map<string, typeof attive>();
  for (const m of attive) {
    if (!gruppi.has(m.gruppo)) gruppi.set(m.gruppo, []);
    gruppi.get(m.gruppo)!.push(m);
  }
  let t = `# Ripetizioni di Analisi\n\n`;
  t += `> Sito italiano di teoria ed esercizi svolti di matematica e fisica per gli esami universitari (Analisi matematica 1 e 2, Algebra lineare, Fisica 1 e 2, materie di Ingegneria ed Economia), per le superiori, per i test di ingresso (TOLC, TIEC) e per i concorsi. Autore di tutti i contenuti: Ing. Carmine Tornincasa, insegnante privato di Analisi matematica (laurea in Ingegneria civile e master in matematica, oltre mille studenti seguiti e più di diecimila ore di lezione; Instagram @ripetizioni_di_analisi_mate).\n\n`;
  t += `Ogni capitolo ha la teoria (definizioni, teoremi con ipotesi esplicite e dimostrazioni, esempi), esercizi svolti passo dopo passo divisi per tipologia, esercizi da fare con la soluzione e domande a risposta multipla con la spiegazione. Ogni teorema e ogni definizione ha anche una pagina propria con l'enunciato in chiaro.\n\n`;
  t += `Gratis senza account: l'inizio della teoria e le prime tre schede di esercizi svolti di ogni capitolo, gli enunciati di tutti i teoremi e le definizioni, le domande a tempo, il confronto fra il proprio esame e il materiale del sito. Con un account gratuito: formulari, Matematica zero, Fisica zero, Studio guidato. Il resto si sblocca acquistando la materia (pagamento una tantum, senza abbonamento). Ci sono anche videocorsi, corsi di gruppo dal vivo e lezioni individuali online con l'autore.\n\n`;
  t += `English: most university subjects are also available in English (Calculus 1 and 2, Precalculus, Linear Algebra, Physics 1 and 2, Mathematics for Economics) at ${assoluto('/en')}.\n\n`;
  t += `L'elenco completo dei capitoli di ogni materia, con il sommario di ciascuno, è in [llms-full.txt](${assoluto('/llms-full.txt')}).\n\n`;
  t += `## Teoremi e definizioni\n\n`;
  t += `- [Tutti i teoremi e le proposizioni, in ordine alfabetico, con l'enunciato e i nomi alternativi](${assoluto('/teoremi')})\n`;
  t += `- [Tutte le definizioni, in ordine alfabetico](${assoluto('/definizioni')})\n`;
  t += `- [All the theorems (English)](${assoluto('/en/teoremi')})\n\n`;
  for (const [gruppo, materie] of gruppi) {
    t += `## ${gruppo}\n\n`;
    for (const m of materie) {
      t += `- [${m.titolo}](${assoluto(`/${m.slug}`)}): ${m.descrizione}`;
      if (m.argomenti.length) t += ` Capitoli: ${m.argomenti.map((a) => a.titolo).join('; ')}.`;
      t += `\n`;
    }
    t += `\n`;
  }
  t += `## Pagine utili\n\n`;
  t += `- [Materiale gratuito](${assoluto('/gratis')}): tutto ciò che si usa senza pagare, con o senza account\n`;
  t += `- [Formulari gratuiti](${assoluto('/formulari')}): le formule di ogni materia con le condizioni di validità\n`;
  t += `- [Domande a tempo](${assoluto('/domande-a-tempo')}): quiz gratuiti a risposta multipla per materia e capitolo, con la spiegazione\n`;
  t += `- [Il sito copre il tuo esame?](${assoluto('/compatibilita')}): si carica il compito o il programma del proprio corso e il sito indica quali parti tratta\n`;
  t += `- [Lezioni individuali e corsi di gruppo di Analisi 1 e 2 online](${assoluto('/ripetizioni-analisi')})\n`;
  t += `- [Videocorsi](${assoluto('/videocorsi')})\n`;
  t += `- [Chi è l'autore: Carmine Tornincasa](${assoluto('/chi-sono')})\n`;
  t += `- [Recensioni degli studenti](${assoluto('/recensioni')})\n`;
  t += `- [Che cosa studiare per un concorso pubblico](${assoluto('/concorsi')})\n`;
  t += `- [Prezzi](${assoluto('/prezzi')}) · [Pacchetti](${assoluto('/pacchetti')}) · [Contatti](${assoluto('/contatti')})\n`;
  return new Response(t, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
