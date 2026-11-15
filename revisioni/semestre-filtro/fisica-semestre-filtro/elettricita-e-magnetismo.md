# Elettricità e magnetismo — autorialità e verifica indipendente

Stato: **autorialità e revisione indipendente concluse; contenuti congelati il 15 novembre 2026**. Autore: `bio_strutture`; revisore: `bio_organizzazione`. Le sezioni iniziali documentano il lavoro dell’autore; la sezione finale distingue i controlli e le correzioni del revisore.

## Materiali consegnati

- **230 Markdown**, 115 per lingua: una teoria, 10 schede svolte, 14 tracce autonome, 90 quiz.
- Teoria riscritta da circa 1.082 parole a **3.415 parole IT e 3.311 EN**, secondo il contatore condiviso. Dieci sezioni e tutte le dieci ancore preesistenti preservate.
- **20 esercizi svolti**, due per scheda; un blocco `spiegazione` per esercizio, gratuità soltanto per gli ID 1–3. Mediana del contatore: 369 parole per esercizio IT, 330 EN, inclusi simboli e formule.
- **28 SVG originali**, 14 disegni in due lingue. Dieci figure effettive nella teoria e sette richiami pertinenti negli svolti, inclusi tutti i primi tre. Le sette occorrenze negli svolti usano anche figure già presenti nella teoria.
- Inglese completo, con punto decimale, titoli, parole chiave, descrizioni alternative, figure, soluzioni e link `/en/`. All’avvio i 115 file inglesi di questo capitolo erano assenti; sono stati creati.

Il primo controllo autoriale riportava 37 elementi `svg/img`, includendo anche gli SVG interni alla resa matematica. Le immagini didattiche originali effettive sono **10**; il controllo finale aggiornato riporta correttamente questo numero.

## Copertura del programma

Letto il syllabus MUR di Fisica completo, con confronto puntuale dell’unità 6: 1,2 CFU, almeno il 30% dedicato a esercitazioni. Non vengono attribuiti al capitolo contenuti specialistici estranei a quell’unità.

| Ancora mantenuta | Contenuti e ragionamenti sviluppati |
| --- | --- |
| `coulomb` | Conservazione e segno della carica, elettroni trasferiti, coulomb, forza reciproca, sovrapposizione, limiti del modello puntiforme. |
| `campo-elettrico` | Campo di sorgenti multiple, componenti, linee di campo e loro distinzione dalle traiettorie, moto uniforme accelerato e deviazione parabolica. |
| `potenziale` | Riferimento, campo dalla pendenza, somma scalare, energia di una distribuzione contando una sola volta ogni coppia, lavoro con segno e lavoro esterno, elettronvolt e arresto. |
| `materiali` | Equilibrio elettrostatico, conduttore equipotenziale, induzione con e senza terra, ordine delle operazioni, cavità vuota, cariche legate e polarizzazione. |
| `ohm` | Corrente convenzionale nei metalli e nelle soluzioni, generatore ideale, grafici con assi invertiti, resistività e geometria, controllo della temperatura, strumenti ideali. |
| `circuiti` | Nodi, serie/parallelo e reti miste, conservazione della carica, bilanci di potenza, Joule, corrente o tensione imposta, circuito aperto e limite del cortocircuito ideale. |
| `condensatori` | Capacità e carica di un’armatura, condensatore piano, energia come area, dielettrico a carica o tensione costante, scambi col generatore, modello capacitivo della membrana e suoi limiti. |
| `reti-condensatori` | Serie e parallelo derivati dai vincoli, neutralità iniziale dei nodi intermedi, ripartizione di tensioni/cariche, transitorio e stato stazionario, redistribuzione ed energia dissipata. |
| `lorentz` | Oersted, mano destra e corrente, forza completa e parte magnetica, segno della carica, filo percorso da corrente, raggio, periodo, elica, lavoro nullo sulla singola carica e bilancio del circuito mobile. |
| `induzione` | Flusso e normale orientata, flusso per spira/concatenato, Faraday–Neumann–Lenz, segno, medie e derivate, correnti resistive con autoinduttanza trascurabile, circuito aperto, interpretazione dei grafici. |

## Miglioramenti e correzioni scientifiche

La teoria ora spiega i vincoli prima delle formule e usa esempi numerici, confronti e letture di grafici. Distinzioni esplicite: potenziale/energia, forza/accelerazione, rapidità/velocità, linee/traiettorie, campo nullo/potenziale nullo, corrente stazionaria/equilibrio elettrostatico. La forza magnetica è sempre distinta dal campo elettrico indotto e dal bilancio energetico di un circuito con generatore.

Negli svolti si sono conservati i problemi utili e il ragionamento già valido, correggendo o precisando:

- Costanti, vuoto, regioni di campo, persistenza del campo nel ritorno dell’elettrone, trascurabilità delle altre forze e condizioni geometriche ora dichiarate.
- Scheda 4: titolo coerente con gli esercizi effettivi, diametro/raggio, volume costante e limite del modello di trafilatura.
- Scheda 6: il problema dell’asciugacapelli è ora un **riscaldatore puramente resistivo in continua**, così la potenza totale non viene attribuita indebitamente al solo resistore. Il confronto fra lampadine è diventato un confronto fra elementi riscaldanti: dalla sola potenza non si deduce la luminosità. Il limite della resistenza costante resta dichiarato.
- Scheda 7: tolta la garanzia ingiustificata di funzionamento in aria derivata da un unico valore medio di rigidità dielettrica. Esplicitati bordi e campo locale.
- Scheda 8: la serie col gruppo equivalente è giustificata dalla neutralità del nodo intermedio, non dal solo aspetto del filo nel disegno.
- Scheda 9: accelerazione centripeta, raggio e lavoro nullo; verifica del prodotto scalare anche per la forza tridimensionale sull’elettrone.
- Scheda 10: notazioni distinte per flusso per spira e flusso concatenato, verso della corrente e differenza fra corrente finale e corrente media nell’integrazione della carica.

Le 14 tracce sono autonome e chiedono più passaggi o interpretazioni, comprese analisi di dati, confronto di protocolli, un bilancio termico, redistribuzione fra condensatori e flusso a tratti. Non sono copie dei quiz.

## Quiz e parità bilingue

Tutti i 90 quiz hanno quattro alternative distinte e una risposta corretta. I primi 14 problemi numerici utili sono stati conservati con ipotesi e spiegazioni migliorate; i successivi sono ricostruiti per includere geometria, inferenza, validità dei modelli, grafici, conversioni e controesempi. Ricontrollati segni, unità e plausibilità dei distrattori, evitando alternative fuori argomento.

Le chiavi sono **23/23/22/22**, con seed `fisica/elettricita-e-magnetismo/2026-11-15/v1`, nessuna periodicità da 1 a 8 e nessuna ripetizione consecutiva oltre tre posizioni uguali. La stessa permutazione è applicata IT/EN. Controllata programmaticamente l’identità della risposta vera prima e dopo il riordino in tutti i 180 file, senza riferimenti a lettere o posizioni nelle spiegazioni.

I quiz **87 e 88** condividono intenzionalmente la geometria ma oppongono campo entrante crescente e decrescente. Verificano l’errore specifico «il campo indotto si oppone sempre al campo esterno», invece dell’opposizione alla variazione. Il coordinatore ha letto il confronto e ne ha riconosciuto la funzione; il revisore deve comunque verificarne chiarezza e unicità della risposta.

Parità matematica: teoria, tutte le 14 tracce e tutti i 90 quiz hanno la medesima sequenza di formule dopo normalizzazione della virgola/punto (**105 coppie complete**). Per i 10 svolti, tutte le **61 formule esposte complessive per lingua**, comprendendo anche la teoria, coincidono dopo normalizzazione dei decimali e delle etichette linguistiche. Le differenze inline nei dieci svolti sono state lette singolarmente: frazione/rapporto, parentesi TeX, spazi, ripetizione o raggruppamento di simboli; non cambiano dati o risultati. Il dettaglio è in `parita.json`.

## Controlli eseguiti

- Validatore condiviso con il renderer Markdown/KaTeX del sito: **230 file, 2.178 formule, zero errori e zero avvisi**. HTML salvato per ogni file; nessuna build globale.
- **221 ricalcoli e identità**: esercizi svolti, tracce, risultati numerici dei quiz, dati delle figure. Sono inclusi sistemi nodali risolti con algebra lineare, neutralità dei nodi dei condensatori, integrale temporale della corrente, equazione del luogo a potenziale nullo e ortogonalità magnetica simbolica. Tolleranze di arrotondamento dichiarate nel JSON.
- **1.011 asserzioni di parità e struttura**: quantità, ID, ancore, chiavi e risposta vera, formule esposte, decimali EN, link, caratteri di controllo, XML SVG e identità geometrica delle figure IT/EN.
- Tutti i **28 SVG renderizzati e ispezionati a 390 e 780 px**, 56 rese. Dopo l’ispezione corrette origini dei grafici, etichette vicine a fili/curve, valore di tensione sovrapposto al polo positivo, marcatore che copriva un segno di carica, pedici magnetici e riempimento del dielettrico. Tutte le figure cambiate sono state renderizzate nuovamente e riviste in entrambe le lingue e larghezze.
- `git diff --check` sugli ambiti del capitolo: nessun problema.

Evidenze riproducibili in `qa/fisica-semestre-filtro/elettricita-e-magnetismo/`: `baseline.json`, `quiz-manifest.json`, `ricalcoli.py/json`, `parita.py/json`, `validatore.json`, `html/`, `figure/`. Gli script di autorialità non devono essere rieseguiti dopo le correzioni del revisore, perché rigenerano contenuti dalle copie iniziali.

## Fonti consultate

- [MUR, Syllabus Fisica 2026/2027](https://www.mur.gov.it/sites/default/files/2026-06/Syllabus_FISICA_%20finale%202026.pdf), unità 6; testo integrale fornito dal coordinatore in `qa/fisica-syllabus.txt`.
- [BIPM, Resolution 1 of the 26th CGPM](https://www.bipm.org/en/committees/cg/cgpm/26-2018/resolution-1): carica elementare e unità del SI. Le costanti numeriche impiegate nei problemi sono arrotondate ed esplicitate.
- [MIT 8.02, Capacitance and Dielectrics](https://web.mit.edu/viz/EM/visualizations/coursenotes/modules/guide05.pdf), in particolare sezioni 5.3–5.5: energia, serie/parallelo, dielettrico con batteria e senza batteria.
- [MIT 8.02, Magnetic Fields](https://web.mit.edu/viz/EM/visualizations/coursenotes/modules/guide08.pdf): prodotto vettoriale, moto circolare, forza sui fili e distinzione dal lavoro sulla singola carica.
- [MIT 8.02, Faraday’s Law](https://web.mit.edu/viz/EM/visualizations/coursenotes/modules/guide10.pdf), sezioni 10.1 e successive: normale, flusso, convenzione di Lenz e limiti del modello puramente resistivo.
- [MIT 8.02, Electric Potential](https://web.mit.edu/course/8/8.02-esg/8.02IS/units/unit03.pdf) e [foglio ufficiale delle relazioni](https://web.mit.edu/8.02t/www/mitxmaterials/ExamPrep/Exam1_Equations.pdf): potenziale scalare, energia di coppie e lavoro esterno.

Testi, domande e SVG sono originali; le fonti hanno funzione di controllo, non di riproduzione di pagine o banche di domande.

## Verifiche ancora da svolgere

Rimane la verifica integrata del sito completo, a cura del coordinatore. Il revisore ha terminato la verifica del capitolo riportata sotto. Nessuna build globale, commit o pubblicazione è stata eseguita durante questo incarico; cataloghi, prezzi, altri capitoli e materiali congelati di Chimica/Biologia non sono stati modificati.


## Verifica indipendente — bio_organizzazione

**Esito: superata, materiali congelati.** Ho letto integralmente tutti i **230 Markdown**: teoria IT/EN, tutti i **20 svolti per lingua**, le **14 tracce per lingua**, e ciascuna delle **90 domande per lingua**, incluse quattro alternative e spiegazione. Ho confrontato la copertura con tutte le voci dell’unità 6 del syllabus MUR. La revisione è stata svolta direttamente sui sorgenti congelati dell’autore, senza rigenerarne i testi dagli script di stesura.

### Correzioni effettive

- Esplicitate le ipotesi necessarie: sorgenti puntiformi ferme; campo magnetico uniforme e assenza di altre forze per il moto circolare; campo elettrico non nullo; particella carica per il moto elicoidale. Nel problema dell’arresto del protone, precisati campo uniforme sufficientemente esteso e percorso parallelo al campo.
- **Quiz 37:** esclusi carica di prova e potenziale nulli, che avrebbero reso indistinguibili alcune alternative di raddoppio/dimezzamento. Rafforzati i distrattori dei **quiz 44 e 75**, mantenendoli nel concetto fisico richiesto. Nessuna chiave corretta è stata cambiata.
- Corretta la frase teorica sulla forza elettromotrice media: un flusso lineare dà uguaglianza col valore istantaneo nell’intero intervallo; per un flusso non lineare l’uguaglianza può comunque verificarsi in alcuni istanti. Esplicitata l’isotropia nel modello del dielettrico; precisate formulazioni su cadute di tensione e realizzazione dei condensatori.
- Nel quiz 79, il lavoro magnetico nullo è motivato dal prodotto scalare e dalla perpendicolarità locale, evitando l’espressione fuorviante «angolo variabile». Negli svolti 1, corretti due segni di uguaglianza davanti a valori arrotondati. Separati con punto e virgola i componenti dei vettori italiani del quiz 24.
- Convertite **229 espressioni matematiche** con rapporti lineari in frazioni `\dfrac`, preservando valori e unità. La prosa estesa della teoria è ora tutta nei blocchi previsti. Convertiti in colonna anche i rapporti presenti in **10 SVG**; nella coppia dei condensatori aumentata la distanza tra le righe per mantenerle leggibili.

I quiz **87 e 88 sono entrambi validi e conservati**: il contrasto tra aumento e diminuzione del medesimo campo entrante verifica il verso di Lenz e impedisce di sostituire «opposizione alla variazione» con «opposizione al campo». I due enunciati hanno una sola risposta corretta e spiegazioni coerenti.

### Evidenze indipendenti

| Controllo | Esito finale |
| --- | --- |
| Renderer Markdown/KaTeX del capitolo | **230 file, 2.178 formule, zero errori, zero avvisi** |
| Ricalcoli indipendenti e identità simboliche | **231 verifiche superate** |
| Geometrie SVG | **906 verifiche superate**, comprendenti tutti gli 806 punti delle tre coppie di curve campionate, il luogo a potenziale nullo, pendenze, direzioni e parità geometrica |
| Struttura e parità | **2.096 verifiche superate** |
| Ispezione visiva effettiva | **Tutti i 28 SVG a 390 e 780 px: 56 rese finali viste** |
| Risposte corrette | **23/23/22/22**, stessa sequenza IT/EN, nessun periodo 1–8 e massimo tre chiavi uguali consecutive |
| Identità e accessi | Tutti gli ID e le dieci ancore preservati; gratuità degli svolti limitata a 1–3 |
| Controllo delle differenze | `git diff --check` senza rilievi; hash finali di tutti i 258 sorgenti salvati |

I ricalcoli partono dai dati degli enunciati e comprendono soluzioni nodali delle reti resistive, neutralità dei nodi intermedi dei condensatori, bilanci di energia e lavoro del generatore, redistribuzione della carica, integrazione della corrente variabile, prodotti vettoriali e ortogonalità simbolica. Per valori non nulli le tolleranze sono relative alla grandezza verificata; gli arrotondamenti sono controllati separatamente alle cifre significative dichiarate. La traccia 5 è un confronto qualitativo di protocolli, verificato con la lettura fisica dei due casi, senza attribuirle un ricalcolo numerico fittizio.

Le **105 coppie** di teoria/tracce/quiz hanno sequenze matematiche coincidenti dopo normalizzazione delle localizzazioni. Per i dieci svolti coincidono tutte le formule esposte; le differenze inline sono state lette singolarmente: simboli ripetuti o raggruppati, ordine sintattico, parentesi TeX e notazione equivalente. Nessuna differenza di dati, valori o conclusioni. In particolare, nella **scheda 2** le forme `\dfrac12` e `\dfrac{1}{2}` rappresentano entrambe il fattore un mezzo; la traduzione non ripete in alcuni periodi i simboli già definiti `\Delta x` e `v_0`. Nella **scheda 5**, `R_1` e `R_2` sono talvolta raggruppati nella stessa formula e `R_{23}` o `R_3` non sono ripetuti dove il gruppo o il resistore sono già identificati dalla frase: i dati numerici dei componenti, le correnti e le cadute di tensione coincidono. Gli scarti segnalati nelle schede 1 e 10 dipendono dall’ordine sintattico e conservano lo stesso multinsieme numerico. L’inglese usa il punto decimale, compresi i diagrammi.

Per i punti delicati ho verificato anche le dispense primarie MIT sopra collegate: dielettrici a carica o tensione fissata, convenzione di Lenz e relazione tra forza sui fili e lavoro sulla singola particella. La copertura deriva dal syllabus ufficiale MUR, non da una banca di domande.

Le evidenze del revisore sono separate in `qa/fisica-semestre-filtro/elettricita-e-magnetismo/independent-review/`: `before/`, `baseline-hashes.json`, `precision-fixes.json`, `fractions-corrections.json`, `svg-fractions.json`, `recalculate.py/json`, `geometry.py/json`, `structure.py/json`, `read-ledger.json`, `visual-review.json`, `render/`, `validation-final.json`, `changed-files.json` e `final-hashes.json`. Rispetto al congelamento autoriale sono stati modificati **126 Markdown e 10 SVG**, in larga parte per il formato delle frazioni. Gli script di stesura e quelli una tantum di correzione non vanno rieseguiti dopo questo congelamento.
