// Forme in cui un programma (contenuti.mjs) arriva al sito: ogni funzione scrive lo stesso programma in un
// formato diverso, con le parti di servizio (docente, libri, esame) che si trovano nei documenti veri.
// «senzaVirgole: true» = il formato separa le voci con le virgole, quindi si usano solo le voci senza virgole.
const tutte = (p) => p.sezioni.flatMap(([, v]) => v);
const LIBRI = 'M. Rossi, G. Bianchi: Lezioni del corso, Zanichelli Editore.\nP. Verdi: Esercizi svolti, vol. 1, Liguori.';
const ESAME = "L'esame consiste in una prova scritta e in una prova orale. Lo studente deve calcolare e risolvere esercizi sugli argomenti del corso.";
const aCapo = (testo, n) => testo.split('\n').map((riga) => {
  const out = []; let c = '';
  for (const w of riga.split(' ')) { if ((c + ' ' + w).length > n && c) { out.push(c); c = w; } else c = c ? `${c} ${w}` : w; }
  return [...out, c].join('\n');
}).join('\n');

export const FORMATI = {
  'prosa con titoli': (p) => `## Università degli Studi\n### Dipartimento di Ingegneria – C.d.L. Ing. Gestionale\n### Programma del corso di ${p.nome} (9 cfu) – Prof.ssa Maria Rossi\n#### A.A. 2025/2026\n${p.sezioni.map(([t, v]) => `### ${t}\n${v.map((x, i) => (i % 4 === 3 ? `${x}(\\*)` : x)).join('. ')}.`).join('\n')}\nN.B. Tutti gli argomenti segnati con un asterisco non sono stati dimostrati.`,
  'elenco puntato': (p) => `Programma di ${p.nome}\n\n${p.sezioni.map(([t, v]) => `${t}\n${v.map((x) => `- ${x}`).join('\n')}`).join('\n\n')}`,
  'elenco numerato annidato': (p) => `PROGRAMMA del corso di ${p.nome}\nsvolto fino a: 7 novembre 2025\ndocente: Mario Rossi\na.a. 2025-2026\n\nTesti Consigliati:\n${LIBRI}\n\n${p.sezioni.map(([t, v], i) => `${i + 1} ${t.toUpperCase()}\n${v.map((x, j) => `${i + 1}.${j + 1} ${x}`).join('\n')}`).join('\n')}`,
  'titoli numerati e paragrafo': (p) => `SAPIENZA UNIVERSITÀ DI ROMA\nINGEGNERIA CIVILE\nprogramma del corso di ${p.nome.toUpperCase()} – A.A. 2024-2025\nMario ROSSI – Tutor: Anna BIANCHI\n\n${p.sezioni.map(([t, v], i) => `${i + 1}. ${t}\n${v.join('. ')}.`).join('\n\n')}\n\nTesti consigliati :\n${LIBRI}\n\nSCRITTO: 10 GIUGNO 2025 SCADENZA PRENOTAZIONE: 05 GIUGNO 2025\nORALE: 20 GIUGNO 2025`,
  'punti con più frasi': (p) => `Programma sintetico\nInsegnamento di ${p.nome}\na.a. 2025-2026\n\nIl corso tratta gli argomenti di base della disciplina. Segue un programma indicativo e sintetico; il programma completo sarà reso disponibile al termine del corso.\n\n${p.sezioni.map(([t, v]) => `• ${t}. ${v.join('. ')}.`).join('\n\n')}\n\nTesto di riferimento\n• E. Neri: ${p.nome}, Bollati Boringhieri.\n\nEserciziari consigliati.\n• G. Bruni: Esercizi e complementi, Zanichelli Decibel.`,
  'diario delle lezioni': (p) => { let n = 0; const v = tutte(p); const lez = []; for (let i = 0; i < v.length; i += 2) { n++; lez.push(`Lezione ${n} (${String((n % 27) + 1).padStart(2, '0')}/10/2025). ${v.slice(i, i + 2).join('. ')}. Esempi ed esercizi.`); } return aCapo(`Università di Padova - Scuola di Ingegneria - a.a. 2025-2026\nProgramma di ${p.nome} svolto per lezioni - M. Rossi 1\n\nDate d'esame: 20/01/2026 ore 09.00-13.30; 10/02/2026 ore 09.00-13.30. Le aule saranno comunicate sulla pagina del corso.\n\n${lez.join('\n')}\n\nUltimo aggiornamento effettuato il: 8 gennaio 2026, 17:50`, 95); },
  'scheda dell\'insegnamento': (p) => `Testi del Syllabus\nDocente ROSSI MARIO, 9 CFU\nAnno offerta: 2025/2026\nInsegnamento: 008IN - ${p.nome.toUpperCase()}\nCorso di studio: IN03A - INGEGNERIA INDUSTRIALE\nCFU: 9\n\nObiettivi formativi\nD1. Conoscenza e capacità di comprensione: conoscere le nozioni di base della disciplina. D2. Capacità di applicare conoscenza: saper calcolare, determinare e risolvere problemi. Verifica delle competenze acquisite nel corso di studi.\n\nPrerequisiti\nLe nozioni di matematica della scuola secondaria.\n\nContenuti del corso\n${p.sezioni.map(([t, v]) => `${t}: ${v.join('. ')}.`).join('\n')}\n\nMetodi didattici\nLezioni frontali ed esercitazioni. Vengono assegnati per casa esercizi che poi il docente svolge in classe.\n\nModalità di verifica dell'apprendimento\n${ESAME}\n\nTesti di riferimento\n${LIBRI}`,
  'titoli in maiuscolo': (p) => `PROGRAMMA DEL CORSO\n\n${p.sezioni.map(([t, v]) => `${t.toUpperCase()}\n${v.join('; ')}.`).join('\n\n')}`,
  'voci separate da trattini': (p) => `Denominazione ${p.nome.toUpperCase()}\nLingua di insegnamento Italiano\nCarico didattico in crediti formativi universitari 12 CFU\n\nProgramma Il programma del corso è composto dai seguenti contenuti didattici:\n\n${p.sezioni.map(([t, v], i) => `${i + 1}) ${t}\n${v.join(' - ')}`).join('\n\n')}\n\nTesti di riferimento\n${LIBRI}`,
  'virgole senza intestazione': (p) => p.sezioni.map(([t, v]) => `${t}: ${v.filter((x) => !/[,:]/.test(x)).join(', ')}.`).join('\n'),
  'capitoli del libro': (p) => `Corso di Laurea in Ingegneria Meccanica\nEsame di ${p.nome}\nDettaglio (capitoli e paragrafi) degli argomenti svolti nel corso\n\nLibro di testo:\nA. Bruni - G. Neri: Corso di ${p.nome}, vol. 1, Zanichelli\n\n${p.sezioni.map(([t, v], i) => `---------- ${t} ----------\n${v.map((x, j) => `${i * 10 + j + 1} - ${x}`).join('\n')}`).join('\n\n')}`,
  'trascrizione con grassetti': (p) => `**Programma di ${p.nome}**\n\nGli argomenti denotati con (D) sono stati dimostrati.\n\n${p.sezioni.map(([t, v]) => `**${t}**\n\n${v.map((x, i) => `* ${x}${i % 3 === 0 ? ' (D)' : ''}`).join('\n')}`).join('\n\n')}`,
  'una voce per riga': (p) => p.sezioni.map(([t, v]) => `${t}:\n${v.join('\n')}`).join('\n\n'),
  'righe spezzate dal PDF': (p) => aCapo(`Programma del corso di ${p.nome}\n\n${p.sezioni.map(([t, v]) => `${t}. ${v.join('. ')}.`).join('\n\n')}`, 72),
  'settimane': (p) => `Syllabus – ${p.nome}\nCourse contents\n${p.sezioni.map(([t, v], i) => `Settimana ${i + 1}: ${t}. ${v.join('; ')}.`).join('\n')}\n\nAssessment\nWritten exam and oral exam.\n\nTextbooks\n${LIBRI}`,
  'tabella': (p) => `# Programma del corso di ${p.nome}\n\n| Argomento | Ore |\n|---|---|\n${tutte(p).map((x, i) => `| ${x} | ${(i % 3) + 1} |`).join('\n')}`,
  'parti con lettere': (p) => `Programma d'esame di ${p.nome}\n\n${p.sezioni.map(([t, v], i) => `Parte ${'ABCDEFGH'[i]} – ${t}\n${v.map((x, j) => `${'abcdefghijklm'[j]}) ${x}`).join('\n')}`).join('\n\n')}`,
  'un solo capoverso': (p) => `Programma di ${p.nome}. ${p.sezioni.map(([, v]) => v.join('. ')).join('. ')}.`,
  'moduli con le ore': (p) => `Scheda Insegnamento\n${p.nome}\nAnno Accademico: 2025-2026\nDocente: Mario Rossi\nE-mail: mario.rossi@example.org\nCFU: 9\nOre 72\n\nProgramma\n${p.sezioni.map(([t, v], i) => `Modulo ${i + 1} – ${t} (12 ore)\n${v.join('. ')}.`).join('\n')}\n\nModalità d'esame\n${ESAME}`,
  'punti tondi rientrati': (p) => `ARGOMENTI DEL CORSO DI ${p.nome.toUpperCase()}\n\n${p.sezioni.map(([t, v]) => `⦁ ${t}\n${v.map((x) => `    ○ ${x}`).join('\n')}`).join('\n')}`,
  'programma esteso': (p) => `${p.nome}\nSyllabus del corso\nObiettivi\nFornire le conoscenze di base.\nContenuti sintetici\n${p.sezioni.map(([t]) => t).join(', ')}.\nProgramma esteso\n${p.sezioni.map(([, v]) => v.join('. ') + '.').join('\n')}\nMateriale didattico\n${LIBRI}\nPeriodo di erogazione dell'insegnamento\nPrimo semestre\nModalità di verifica del profitto\n${ESAME}`,
  'sezioni numerate in maiuscolo': (p) => `${p.nome.toUpperCase()} - PROGRAMMA D'ESAME\n\n${p.sezioni.map(([t, v], i) => `${i + 1} - ${t.toUpperCase()}\n${v.join('. ')}.`).join('\n\n')}`,
  'elenco dei teoremi per l\'orale': (p) => `Elenco degli argomenti da sapere per l'orale di ${p.nome}\n\n${tutte(p).map((x, i) => `${i + 1}) ${x}`).join('\n')}`,
  'presentazione discorsiva': (p) => `Il corso di ${p.nome} verte sui seguenti argomenti: ${p.sezioni[0][1].join('; ')}.\n${p.sezioni.slice(1).map(([t, v]) => `${t}: ${v.join('; ')}.`).join('\n')}\nL'esame consiste in una prova scritta seguita da un colloquio orale. Gli studenti devono iscriversi all'appello.`,
};
export const SENZA_VIRGOLE = new Set(['virgole senza intestazione']);

// Forme di un compito d'esame.
export const FORMATI_COMPITO = {
  'esercizi numerati': (nome, r) => `Prova scritta di ${nome} – Appello del 12/01/2026\nCognome e nome: ____ Matricola: ____\nTempo a disposizione: 2 ore.\n\n${r.map((x, i) => `Esercizio ${i + 1}. (${6 + i} punti) ${x}`).join('\n\n')}`,
  'numeri con parentesi': (nome, r) => `${nome}\nCompito del 3 febbraio 2026\n\n${r.map((x, i) => `${i + 1}) ${x}`).join('\n')}`,
  'titoli markdown': (nome, r) => `# ${nome} — prova scritta\n\n${r.map((x, i) => `### Esercizio ${i + 1}\n${x}`).join('\n\n')}`,
  'quesiti e fuori programma': (nome, r) => `Esame di ${nome}. Gli studenti del vecchio ordinamento svolgano anche l'ultimo quesito, anche se fuori programma.\n${r.map((x, i) => `Quesito ${i + 1}: ${x}`).join('\n')}`,
  'senza intestazione': (_nome, r) => r.join('\n'),
  'punti con lettere': (nome, r) => `Università degli Studi – Corso di laurea in Ingegneria\n${nome}, appello di giugno\n\nProblema 1\n${r.map((x, i) => `${'abcdefgh'[i]}) ${x}`).join('\n')}`,
};
