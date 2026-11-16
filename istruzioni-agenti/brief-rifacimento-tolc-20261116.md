# Revisione TOLC-I e TOLC-S · 16 novembre 2026

## Incarico già approvato

Carmine ha chiesto: «sistema i 2 TOLC che sono da rifare seguendo le indicazioni date». I percorsi sono TOLC-I (9 capitoli, 810 quiz) e TOLC-S (12 capitoli, 1080 quiz). Riferimento di qualità: Analisi 1. Intervento completo su contenuti italiani e inglesi, senza cambiare prezzi, accessi, programma/catalogo, interfaccia o motore delle simulazioni. Il lavoro resta su ramo dedicato per revisione prima della pubblicazione.

Leggere GUIDA-CONTENUTI.md, la sezione «Stile di scrittura» di CLAUDE.md, la teoria di Analisi 1/limiti e src/content/svolti/analisi-1/limiti/3.md. Applicare le istruzioni permanenti della disciplina: niente :::percorso; prevalgono sulle vecchie indicazioni discordanti. Leggere anche istruzioni-agenti/brief-traduzione.md e brief-traduzione-domande.md. Per questi test le risposte sono CINQUE, non quattro.

## Perimetro di ciascun autore

Un autore per argomento; l'argomento comune può essere trattato nei due corsi, rispettandone le differenze. Scrivere esclusivamente src/content/{teoria,svolti,dafare,domande}/<materia>/<argomento> e le stesse posizioni in src/content-en. Nessun git, commit, push o build da parte degli autori. Coordinamento, integrazione e build appartengono al responsabile. Script di verifica e rapporti intermedi fuori dal repository in ../tolc-qa/<argomento>/.

Inventariare prima i file effettivi. Conservare 90 quiz per capitolo, le schede e le tracce esistenti, gli ID dei quiz, le ancore esistenti valide e i percorsi. Le schede restano 4 per capitolo (6 per inglese); i dafare variano fra 10 e 30. Non perdere i brani o i gruppi di comprensione. I primi quiz correlati alle tracce devono restare coerenti, mantenendo una domanda autosufficiente. Se si cambia la traccia, allineare domanda e soluzione. Riutilizzare quanto è corretto; una revisione sostanziale è autorizzata per colmare i limiti riscontrati.

## Teoria e schede

La teoria iniziale è troppo breve (circa 450–830 parole per capitolo): sviluppare un capitolo completo, circa 2500–3500 parole utili, 6–10 sezioni, blocchi etichettati e progressione didattica. Coprire il sillabo pertinente al capitolo; spiegare idea, ipotesi, simboli, uso e piccoli esempi prima delle applicazioni articolate. Le dimostrazioni si inseriscono dove aiutano il ragionamento richiesto dal TOLC. Niente riempitivi né consigli generici ripetuti.

Ogni scheda contiene 2–4 esercizi progressivi dedicati a una tipologia; titolo al plurale, entro 45 caratteri se possibile. Traccia completa, formule display a passaggi, risultato, <div class="spiegazione"> con motivi e interpretazione. Le schede 1–3 sono gratuite. Non basta indicare la formula e la risposta. Spiegare i passaggi realmente necessari; usare la lunghezza solo come indicatore, non allungare artificialmente. Campi teoria e parole compilati e riferiti ad ancore reali. I dafare hanno traccia autonoma e :::soluzione con la risposta finale.

Figure distribuite fra teoria e schede, anche gratuite, dove rendono concreto il ragionamento: grafici, geometria, insiemi, schemi scientifici, dati. Usare le direttive esistenti, leggere la sintassi dei plugin prima di scriverle. Dati e figura coincidono, assi e quote leggibili, etichette in testo semplice, didascalia tradotta. Nessuna figura decorativa aggiunta solo per un conteggio. Non inventare formati di direttive.

## Novanta quiz distinti

Leggere e classificare TUTTE le 90 domande esistenti per abilità e situazione prima di modificare. Eliminare duplicati di procedimento: cambiare numeri, invertire dato/incognita o chiedere un rapporto dello stesso sistema non crea da solo una domanda diversa. Pianificare domande che richiedano decisioni differenti. Conservare materiale valido e scrivere quesiti originali sui vuoti del programma, interpretazione di grafici, ipotesi, errori, confronti, casi concreti.

Cinque alternative, una sola difendibile, corretta 1–5 distribuita (18 ciascuna quando possibile). Nessuna alternativa equivalente come frazione/decimale/percentuale o sottoinsieme corretto. Calcoli possibili senza calcolatrice in circa due minuti. Frontmatter e formato esistenti, ## Spiegazione in italiano, ## Explanation in inglese. Spiegazioni come piccoli svolgimenti: motivare il metodo, sostituire i dati, esplicitare passaggi, interpretare il risultato ed eventualmente distinguere un errore tipico. Non ripetere una frase standard in tutte le spiegazioni e non riferirsi alla posizione delle alternative, che vengono mescolate.

Italiano: frazioni in colonna, \\dfrac nel testo, \\frac in display; decimali {,}; unità con \\,\\mathrm{}; deduzioni con connettivi espliciti; niente «è facile», «si vede», «Immagina», «In sintesi», retorica, personificazioni, lineette lunghe. Per fisica ipotesi, versi e g espliciti quando necessari, unità e cifre coerenti.

## Inglese nello stesso intervento

Tradurre ogni file interessato integralmente, inclusi titoli, sommari, parole chiave, spiegazioni, brani, risposte e figure. Nessun riassunto. Percorsi, chiavi funzionali, ID, ancore, valori corretta e gratis, ordine delle risposte e struttura identici. Formule e valori matematicamente identici, con punto decimale inglese come nel brief. Il capitolo Inglese conserva le frasi e le alternative in inglese anche nella versione italiana: tradurre le istruzioni/spiegazioni, non alterare il costrutto valutato. Nel capitolo comprensione, l'inglese è una versione tradotta di allenamento del brano italiano; non dichiararlo prova ufficiale CISIA.

## Verifica e consegna di ogni argomento

Ricalcolare tutte le tracce, tutti gli esercizi svolti e tutti i quiz a partire dall'enunciato; Python/sympy per i calcoli, controllo logico documentato per quelli verbali/scientifici. Verificare le alternative errate. Non dichiarare un controllo non svolto. Salvare fuori repo un rapporto con conteggi, copertura, famiglie ripetitive sostituite, calcoli, ancore e dubbi. Un autore diverso rileggerà e ricalcolerà indipendentemente lo stesso capitolo, anche IT/EN frase per frase. Il coordinatore esegue YAML, Markdown/KaTeX, figure renderizzate e build dei due percorsi.

## Riferimenti ufficiali verificati il 16 novembre 2026

- https://www.cisiaonline.it/tolc/tolc-i/struttura-della-prova-e-sillabo
- https://www.cisiaonline.it/tolc/tolc-s/struttura-della-prova-e-sillabo

TOLC-I: matematica 20/50 min, logica 10/20, scienze 10/20, comprensione 10/20; inglese 30/15 separato. TOLC-S: matematica 20/50, ragionamento-problemi-comprensione 15/30, biologia/chimica/fisica/Terra 5/10 ciascuna, inglese 30/15 separato. Non cambiare i motori delle prove in questo incarico. I materiali sono originali e indipendenti, non quesiti ufficiali.
