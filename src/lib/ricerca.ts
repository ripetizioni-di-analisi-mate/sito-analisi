import { materieL, materiaL, argomentoL, link, vociL, T, type Lingua } from '../i18n';
import { numero } from './nav';
import { catalogoDomande } from './domande';
import { RIPASSO } from '../data/livelli';
import { VIDEOCORSI } from '../data/videocorsi';
import { MATERIE_GRUPPI } from '../data/gruppi';
import { MATERIE_LEZIONI } from '../data/lezioni';
import { nomiAllenamento } from './allenamento.mjs';

// Indice della ricerca, generato a tempo di build e letto dal browser nella pagina Cerca.
// Ogni voce ha una categoria `c`, usata per raggruppare i risultati:
//   corsi      = materie, corsi di gruppo, lezioni individuali, guide
//   argomenti  = argomenti, sezioni della teoria, definizioni, teoremi, proposizioni
//   esercizi   = schede svolte, esercizi da fare, domande a tempo, simulazioni d'esame
//   videocorsi = videocorsi preregistrati (solo in italiano)
// `p` contiene parole in più su cui cercare (non mostrate).
export type Categoria = 'corsi' | 'argomenti' | 'esercizi' | 'videocorsi';
export interface VoceRicerca { t: string; s: string; m: string; h: string; p: string; c: Categoria }

const TIPI: Record<Exclude<Lingua, 'de'>, Record<string, string>> = {
  it: { definizione: 'Definizione', teorema: 'Teorema', proposizione: 'Proposizione' },
  en: { definizione: 'Definition', teorema: 'Theorem', proposizione: 'Proposition' },
};
const TESTI = {
  it: {
    materia: 'Materia', teoriaEsercizi: 'Teoria ed esercizi svolti', domande: 'Domande a tempo', ripasso: 'Domande di ripasso',
    paroleMateria: 'materia corso programma teoria esercizi',
    paroleDomande: 'domande quiz a tempo risposta multipla allenamento',
    paroleSimulazione: 'simulazione esame compito scritto prova timer tracce',
  },
  en: {
    materia: 'Subject', teoriaEsercizi: 'Theory and worked examples', domande: 'Timed questions', ripasso: 'Review questions',
    paroleMateria: 'subject course syllabus theory exercises',
    paroleDomande: 'questions quiz timed multiple choice practice',
    paroleSimulazione: 'simulation exam test written practice timer',
  },
};

export async function vociRicerca(l: Exclude<Lingua, 'de'>): Promise<VoceRicerca[]> {
  const t = T(l);
  const x = TESTI[l];
  const voci: VoceRicerca[] = [];
  const materie = materieL(l).filter((m) => m.attiva);
  const domande = await catalogoDomande(l);

  // Materie e corsi
  for (const m of materie) {
    voci.push({ t: m.titolo, s: `${x.materia} · ${x.teoriaEsercizi}`, m: m.gruppo, h: link(l, `/${m.slug}`), p: `${m.breve} ${m.descrizione} ${m.argomenti.map((a) => a.breve).join(' ')} ${x.paroleMateria}`, c: 'corsi' });
  }
  if (l === 'it') {
    for (const g of MATERIE_GRUPPI) {
      voci.push({ t: `Corso di gruppo di ${g.titolo}`, s: 'Corso dal vivo online · Iscrizioni aperte', m: 'Lezioni con Carmine', h: '/corsi-di-gruppo', p: `${g.lezioni} corsi di gruppo lezioni dal vivo online registrate gruppo iscrizione tracce esame`, c: 'corsi' });
    }
    voci.push({ t: 'Lezione individuale con Carmine', s: 'Scegli giorno e ora · Google Meet', m: 'Lezioni con Carmine', h: '/prenota', p: `lezioni individuali private ripetizioni prenota prenotazione online meet calendario ${MATERIE_LEZIONI.map((m) => m.titolo).join(' ')}`, c: 'corsi' });
    voci.push({ t: 'Che cosa studiare per il tuo concorso', s: 'Guida gratuita', m: 'Concorsi', h: '/concorsi', p: 'concorsi pubblici guida programma matematica logica test', c: 'corsi' });
    voci.push({ t: 'Compatibilità con il tuo esame', s: 'Confronto gratuito del compito o del programma con il materiale', m: 'Esami universitari', h: '/compatibilita', p: 'compatibilità esame compito traccia prova scritta appello percentuale copertura confronto programma syllabus argomenti università foto pdf', c: 'corsi' });
    voci.push({ t: 'Domande a tempo di tutte le materie', s: 'Quiz gratuiti per argomento', m: 'Domande a tempo', h: '/domande-a-tempo', p: 'domande a tempo quiz risposta multipla gratis allenamento esame', c: 'esercizi' });
    voci.push({ t: 'Simulazione della prova a quiz per i concorsi', s: 'Matematica e logica · Punteggio e soglia', m: 'Concorsi', h: '/concorsi/simulazione', p: 'simulazione prova concorso quiz test risposta multipla punteggio penalità soglia timer matematica logica', c: 'esercizi' });
  }

  // Argomenti
  for (const m of materie) {
    for (const a of m.argomenti) voci.push({ t: a.titolo, s: t.argomento, m: m.breve, h: link(l, `/${m.slug}/${a.slug}/teoria`), p: `${a.breve} ${m.titolo}`, c: 'argomenti' });
  }
  for (const v of await vociL(l, 'teoria')) {
    const [ms, as] = v.id.split('/');
    const m = materiaL(l, ms), a = argomentoL(l, ms, as);
    const body = v.body ?? '';
    for (const y of body.matchAll(/:{3,4}(definizione|teorema|proposizione)\{#([\w-]+)\s+titolo="([^"]+)"/g)) {
      voci.push({ t: y[3], s: `${TIPI[l][y[1]]} · ${a.breve}`, m: m.breve, h: link(l, `/${v.id}/teoria#${y[2]}`), p: '', c: 'argomenti' });
    }
    for (const y of body.matchAll(/^##\s+(.+)$/gm)) {
      voci.push({ t: y[1].trim(), s: `${t.sezioni.teoria} · ${a.breve}`, m: m.breve, h: link(l, `/${v.id}/teoria`), p: '', c: 'argomenti' });
    }
  }

  // Esercizi
  for (const v of await vociL(l, 'svolti')) {
    const [ms, as] = v.id.split('/');
    voci.push({ t: `${t.scheda} ${numero(v.id)} · ${v.data.titolo}`, s: `${t.sezioni['esercizi-svolti']} · ${argomentoL(l, ms, as).breve}`, m: materiaL(l, ms).breve, h: link(l, `/${ms}/${as}/esercizi-svolti/${numero(v.id)}`), p: `${v.data.parole.join(' ')} esercizi svolti`, c: 'esercizi' });
  }
  for (const v of await vociL(l, 'dafare')) {
    const [ms, as] = v.id.split('/');
    voci.push({ t: `${t.esercizioDaFare} ${numero(v.id)} · ${v.data.titolo}`, s: `${t.sezioni.esercizi} · ${argomentoL(l, ms, as).breve}`, m: materiaL(l, ms).breve, h: link(l, `/${ms}/${as}/esercizi/${numero(v.id)}`), p: `${v.data.parole.join(' ')} esercizi da fare tracce soluzione`, c: 'esercizi' });
  }
  for (const m of materie) {
    const con = domande[m.slug] ?? [];
    if (con.length === 0) continue;
    for (const a of m.argomenti.filter((a) => con.includes(a.slug))) {
      voci.push({ t: `${x.domande} · ${a.titolo}`, s: `${x.domande} · ${a.breve}`, m: m.breve, h: link(l, `/${m.slug}/${a.slug}/domande`), p: x.paroleDomande, c: 'esercizi' });
    }
    const nomiProve = nomiAllenamento(m, l);
    voci.push({ t: `${x.ripasso} · ${m.titolo}`, s: nomiProve.ripasso, m: m.breve, h: link(l, `/${m.slug}/${RIPASSO}/domande`), p: `${x.paroleDomande} ripasso`, c: 'esercizi' });
    if (m.eserciziDaFare === false) continue;
    const quiz = l === 'it' && m.gruppo === 'Concorsi';
    const superiori = m.gruppo === 'Superiori' || m.gruppo === 'High school';
    voci.push({ t: `${nomiProve.simulazione} · ${m.titolo}`, s: nomiProve.ripasso, m: m.breve, h: link(l, `/${m.slug}/simulazione`), p: quiz ? 'simulazione prova concorso quiz test risposta multipla punteggio timer' : superiori ? (l === 'en' ? 'class test simulation timed written practice' : 'simulazioni verifiche in classe compito scritto prova timer tracce') : x.paroleSimulazione, c: 'esercizi' });
  }

  // Videocorsi (pagine solo in italiano)
  if (l === 'it') {
    voci.push({ t: 'Videocorsi di Carmine', s: 'Tutti i videocorsi', m: 'Videocorsi', h: '/videocorsi', p: 'video lezioni registrate preregistrate corso online', c: 'videocorsi' });
    for (const v of VIDEOCORSI) {
      const materieSbloccate = v.sblocca.map((s) => materie.find((m) => m.slug === s)?.titolo ?? '').join(' ');
      voci.push({ t: v.titolo, s: `${v.lezioni} lezioni registrate`, m: 'Videocorsi', h: `/videocorsi/${v.slug}`, p: `${v.breve} ${v.sommario} ${materieSbloccate} video lezioni registrate preregistrate corso online`, c: 'videocorsi' });
    }
  }
  return voci;
}

export async function indiceRicerca(l: Exclude<Lingua, 'de'>) {
  return new Response(JSON.stringify(await vociRicerca(l)), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
