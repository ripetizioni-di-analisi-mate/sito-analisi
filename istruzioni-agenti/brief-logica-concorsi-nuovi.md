# Logica per concorsi: i due argomenti aggiunti il 02/11/2026

Il brief di base è `istruzioni-agenti/brief-logica-concorsi.md`: leggilo per intero e seguilo in tutto (pubblico, tono, formato dei quiz con **cinque opzioni A-E**, schede, tracce, lettere distribuite, controlli, consegna). Il repository è `/home/claude/sito-analisi` (il brief di base dice `sito-analisi1`: vale questo). Qui sotto ci sono solo il programma dei due argomenti nuovi e le regole in più. Gli altri sei argomenti della materia sono già online: leggi per intero almeno `src/content/teoria/logica-concorsi/condizioni-necessarie-e-sufficienti.md`, due sue schede svolte e quattro tracce, che fanno da modello di formato, lunghezza e tono.

## 7. `logica-verbale`: "Logica verbale e comprensione dei testi"
Sezioni previste (da 6 a 9 `##`, l'ultima "Metodi rapidi per i quiz"):
- **Analogie verbali**: "A sta a B come C sta a …", con i tipi di relazione tra le coppie (sinonimia, contrarietà, parte e tutto, elemento e categoria, strumento e funzione, causa ed effetto, luogo e attività, grado di intensità); il metodo della frase che lega le due parole della prima coppia e si applica alla seconda.
- **Classificazioni e termine estraneo**: quale parola non appartiene al gruppo, con il criterio esplicito che separa l'intruso dagli altri.
- **Completamento di frasi e connettivi testuali**: il connettivo che rende coerente una frase (quindi, perciò, tuttavia, invece, perché, benché, infatti) secondo il rapporto logico tra le due parti (conseguenza, causa, contrasto, concessione, spiegazione); la parola mancante scelta per coerenza con il resto della frase.
- **Brani e affermazioni**: dato un brano breve (5-8 righe, scritto da te, su un tema neutro come un regolamento, un servizio pubblico, un fatto di scienza o di storia descritto nel brano stesso), stabilire se un'affermazione è *vera*, *falsa* o *non deducibile* in base al solo testo; la differenza tra ciò che il brano dice e ciò che il lettore sa o suppone.
- **Struttura di un argomento**: premesse, conclusione, assunzione implicita (la premessa non scritta senza cui la conclusione non segue).
- **Rafforzare e indebolire un argomento**: quale affermazione, se vera, rende la conclusione più o meno sostenibile; il collegamento con le condizioni necessarie e sufficienti, richiamato per nome.

Regole in più per questo argomento:
- Il rischio principale è l'**ambiguità**: per ogni quiz scrivi nel file di lavoro, opzione per opzione, perché è giusta o sbagliata. Se un'opzione sbagliata può essere difesa con una lettura ragionevole del testo, cambiala.
- Solo lessico comune: niente parole rare, regionali o tecniche, niente conoscenze di cultura generale (date, capitali, autori) come chiave della risposta. La risposta deve dipendere dal testo o dalla relazione tra le parole.
- Nei brani le informazioni sono inventate ma verosimili e dichiarate nel brano; la risposta "non deducibile" deve essere tale anche per chi conosce bene il tema.
- Il controllo con Python qui non si applica alle analogie e ai brani: il controllo è il ragionamento scritto opzione per opzione nel file di lavoro in `/tmp/lavoro-lc/logica-verbale/`. Il conteggio delle lettere e yamlcheck restano obbligatori.

## 8. `ragionamento-figurale`: "Ragionamento figurale e spaziale"
Sezioni previste (da 6 a 9 `##`, l'ultima "Metodi rapidi per i quiz"):
- **Le trasformazioni di una figura**: rotazione (di $45°$, $90°$, $180°$ in senso orario o antiorario), simmetria rispetto a un asse verticale o orizzontale, cambio di riempimento, cambio di numero, spostamento lungo le posizioni di una cella; come si descrive in parole la trasformazione da una cella alla successiva.
- **Serie di figure**: la figura che continua la serie; più regole che agiscono insieme su caratteristiche diverse (per esempio la forma ruota e intanto il numero di punti cresce di uno).
- **Matrici di figure**: griglie $3 \times 3$ con l'ultima cella mancante; regole per riga e per colonna; sovrapposizione (la terza cella è l'unione, o la differenza simmetrica, delle prime due).
- **Figura estranea**: quale figura non segue la regola comune.
- **Rotazioni e simmetrie di figure piane**: quale figura è la stessa ruotata e quale è la sua immagine allo specchio (con lettere come F, R, L, G o con figure asimmetriche).
- **Sviluppi del cubo**: quali facce sono opposte; quale cubo si ottiene da uno sviluppo; quale sviluppo si chiude in un cubo.
- **Conteggio di figure**: quanti triangoli o quadrati ci sono in una figura, quanti cubetti formano una costruzione a strati (descritta dalla vista dall'alto con il numero di cubetti in ogni colonna).

Figure: si disegnano con la direttiva `::figura` (sintassi completa nell'intestazione di `src/plugins/figura.mjs`, leggila per intero prima di scrivere). Regole:
- Ogni quiz di serie, matrici, figura estranea, rotazioni e cubi ha la sua figura: la sequenza o la matrice con la cella `?`, e le cinque opzioni disegnate come celle con le etichette A-E (`tipo="opzioni"`). Nel testo, l'elenco `- A) …` … `- E) …` dice soltanto "la figura A", "la figura B", … così il formato del sito resta quello di tutti i quiz.
- Sui cubi si usano solo simboli che restano uguali ruotando di $90°$ (cerchio, punto, croce, quadrato, anello, croce obliqua) con riempimenti diversi, così conta solo la posizione delle facce e non il verso del disegno. Le domande sui cubi si verificano con `python3 strumenti/cubo.py` (facce opposte e terne di facce visibili insieme, con il loro verso).
- Ogni figura va disegnata con `node strumenti/anteprima_figure.mjs <png> <file…>` dalla radice del repository e guardata con Read: la regola deve vedersi nella figura, le opzioni devono essere tutte distinguibili, e solo una deve rispettare la regola.
- Le spiegazioni dicono a parole la regola ("la freccia ruota di $90°$ in senso orario a ogni passo e il numero di punti aumenta di uno") e perché ciascuna delle opzioni sbagliate più attraenti la viola.
- Verifica: per serie e matrici scrivi la regola come funzione Python sulle caratteristiche delle celle (forma, rotazione, riempimento, numero, posizione) e controlla che tra le cinque opzioni la soddisfi **una sola**; per i conteggi enumera con Python.

## Consegna
Come nel brief di base. In più: per la logica verbale, la conferma che ogni quiz ha il ragionamento opzione per opzione nel file di lavoro; per il ragionamento figurale, il numero di figure e la conferma di averle guardate tutte nel PNG.
