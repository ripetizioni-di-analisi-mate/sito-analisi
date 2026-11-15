# Termodinamica — rifacimento IT/EN

Autore: agente `bio_genetica`. Data: 15 novembre 2026. Stesura e controllo dell'autore conclusi; verifica indipendente completata dall'agente `bio_segnalazione`, come documentato nella sezione finale. Nessuna build, modifica di cataloghi, commit o pubblicazione eseguita dall'autore.

## Materiali consegnati

- 115 file italiani e 115 inglesi: una teoria, 10 schede svolte, 14 tracce autonome con soluzione ragionata e 90 quiz per lingua.
- Teoria in 9 sezioni, 2.797 parole IT e 2.700 EN secondo il validatore. Tutte le 9 ancore precedenti preservate: `stato-termico`, `gas-ideale`, `calorimetria`, `calore-latente`, `trasmissione-calore`, `primo-principio`, `trasformazioni`, `secondo-principio`, `entropia`.
- 22 esercizi effettivamente svolti per lingua, distribuiti nelle 10 schede. Solo le schede 1–3 sono gratuite. Mediana di 248 parole per esercizio IT e 241 EN.
- 8 disegni scientifici originali in due lingue, per 16 SVG. Sette basi sono utilizzate nella teoria; il grafico del calorimetro e altri cinque grafici sono utilizzati negli esercizi e nelle tracce.
- 90 quiz distinti, quattro opzioni e una risposta corretta. Chiavi bilanciate 23/23/22/22, seed `2026111505`, stessa permutazione IT/EN, nessuna periodicità da 1 a 8, sequenza massima di quattro risposte nella medesima posizione. Mediana delle spiegazioni: 39 parole IT e 35 EN.

## Copertura e scelte scientifiche

Coperta l'unità 5 del programma MUR: sistemi e ambiente; equilibrio e funzioni di stato; scale di temperatura; gas ideale e capacità molari; calorimetria e transizioni; conduzione, convezione e irraggiamento; primo principio; processi canonici, reversibilità e irreversibilità; enunciati del secondo principio; cicli, motori, Carnot, entropia macroscopica e statistica. I frigoriferi e le pompe di calore sviluppano il collegamento fra enunciato di Clausius e bilancio energetico.

La convenzione è sempre calore assorbito positivo e lavoro compiuto dal sistema positivo, quindi `ΔU = Q − W`. Sono distinti lavoro di volume e lavoro di agitazione, pressione esterna e pressione del gas, quasistaticità e reversibilità, espansione libera e adiabatica reversibile. Le relazioni con gamma sono limitate al modello ideale a capacità costanti e al processo reversibile. L'energia interna ideale dipende dalla sola temperatura a quantità e composizione fissate.

Il controllo della fase precede i bilanci di acqua e ghiaccio. Le temperature Celsius sono usate nelle differenze calorimetriche; le temperature assolute sono usate nei rapporti, nei logaritmi, in Carnot e nell'irraggiamento. Il passaggio a kelvin usa 273,15; i casi di mescolamento finale e di entropia con ghiaccio sono stati ricalcolati senza gli arrotondamenti prematuri del materiale precedente.

I disegni derivano dai dati e dalle leggi degli esercizi: curva con plateau di fusione, due strati conduttivi, potenza radiativa netta, due percorsi pressione–volume, isobara/isoterma/adiabatica, ciclo di Carnot, bilancio di entropia dei serbatoi, zero del bilancio calorimetrico. Il ciclo di Carnot usa isoterme e adiabatiche calcolate, con raccordi e versi controllati; non è un quadrilatero schematico.

## Controlli effettivamente svolti dall'autore

1. Lettura integrale della teoria e dei materiali riscritti nelle due lingue; lettura di tutte le 180 domande finali con opzioni e spiegazioni. Sostituita la quasi ripetizione fra i quiz 13 e 77 con un'inferenza sui dati insufficienti per l'entropia prodotta. Nel quiz 86 eliminate due alternative algebricamente equivalenti. Migliorati i distrattori dei quiz 32, 39, 42, 47 e 65; precisate le ipotesi nei quiz 24, 53, 56, 60, 62–64 e 70.
2. `node strumenti/verifica-semestre-filtro-bilingue.mjs fisica-semestre-filtro termodinamica`: 230 file e 2.288 formule resi con il renderer effettivo del sito, **0 errori e 0 avvisi**. Salvato l'HTML completo per il revisore. Nessuna build Astro.
3. Script separato `checks.py`: **468 controlli superati**, di cui **162 ricalcoli numerici**. I dati sono reinseriti dai problemi finali senza importare i moduli di stesura. Integrazioni numeriche verificano separatamente lavoro isotermo/adiabatico, entropia dei corpi finiti, miscugli e area del ciclo di Carnot. Compresi tutti i 22 svolti, tutte le 14 tracce e ciascun distinto calcolo numerico dei quiz.
4. Parità delle formule nelle 115 coppie di file: confronto di multisemi dopo normalizzazione del solo separatore decimale e delle etichette tradotte. Nessuna differenza residua. Inglese con punto decimale; nessuna frazione testuale con slash nei blocchi matematici, nessun `\frac` residuo e nessuna direttiva `:::percorso`.
5. Controllo automatico delle quattro opzioni distinte e della stessa chiave nelle due lingue. Confronto dei testi normalizzati: nessuna coppia di enunciati con similarità SequenceMatcher almeno 0,72. Il controllo testuale integra la lettura concettuale e non la sostituisce. La risposta corretta è l'unica opzione più lunga in 10 quiz italiani su 90.
6. Tutti i 16 SVG renderizzati a 390 e 780 pixel: **32 PNG esaminati**, raccolti in 8 tavole di confronto. Corretta un'etichetta che toccava la curva radiativa e resa più chiara la notazione delle temperature nel ciclo di Carnot. Rese finali dei due disegni nuovamente controllate. Nessun taglio o sovrapposizione residua rilevato dall'autore.
7. `git diff --check` sui soli percorsi del capitolo: nessun errore. Nessun file fuori dalla proprietà assegnata modificato durante questa stesura, a parte gli script ed evidenze nella directory QA del capitolo.

## Fonti consultate

- [MUR, syllabus Fisica 2026/2027](https://www.mur.gov.it/sites/default/files/2026-06/Syllabus_FISICA_%20finale%202026.pdf), unità 5; trascrizione fornita dal coordinatore in `qa/fisica-syllabus.txt`.
- [OpenStax, Rice University — First Law of Thermodynamics](https://openstax.org/books/university-physics-volume-2/pages/3-3-first-law-of-thermodynamics): convenzioni, bilanci ed energia interna.
- [OpenStax, Rice University — The Carnot Cycle](https://openstax.org/books/university-physics-volume-2/pages/4-5-the-carnot-cycle): quattro rami, condizioni reversibili e limite di rendimento.
- [OpenStax, Rice University — Entropy](https://openstax.org/books/university-physics-volume-2/pages/4-6-entropy): percorso reversibile ausiliario e bilanci di entropia; il vincolo di non diminuzione nel capitolo è riferito all'insieme isolato, non a un generico sistema chiuso.
- [OpenStax, Rice University — Entropy on a Microscopic Scale](https://openstax.org/books/university-physics-volume-2/pages/4-7-entropy-on-a-microscopic-scale): espansione libera, microstati e relazione di Boltzmann.
- [OpenStax, Rice University — Thermodynamics Key Equations](https://openstax.org/books/university-physics-volume-2/pages/4-key-equations): rendimento e coefficienti di prestazione.
- [NIST — Boltzmann constant](https://physics.nist.gov/cuu/Constants/Value/k.html) e [NIST — Stefan–Boltzmann constant](https://physics.nist.gov/cgi-bin/cuu/Value?sigma%7Csearch_for=stefan+boltzmann): valori e unità delle costanti. Negli esercizi il valore approssimato di sigma è esplicitamente assegnato.

## Evidenze e passaggio al revisore

Directory QA: `/workspace/scratch/e665c34d8d52/qa/fisica-semestre-filtro/termodinamica/`. Sono disponibili baseline, `checks.py`, `checks.json`, `renderer-report.json`, HTML completo in `rendered/`, tutte le rese in `figures/`, lista delle permutazioni e hash del congelamento.

Gli script `worked.py`, `worked-rest.py`, `traces.py` e `quiz-data.py` documentano la stesura ma **non vanno rigenerati**: i Markdown finali comprendono rifiniture successive. Il revisore deve correggere direttamente i sorgenti e aggiornare questo rapporto. Alla consegna dell'autore restavano da svolgere la revisione indipendente e la successiva build complessiva; i controlli dell'autore sopra riportati non le comprendevano. La revisione indipendente è documentata nella sezione seguente; la build complessiva resta di competenza del coordinatore.


## Revisione indipendente completa — 15 novembre 2026

Revisore: agente `bio_segnalazione`, distinto dall'autore `bio_genetica`. Il revisore ha acquisito una baseline separata dei 230 Markdown, dei 16 SVG e di questo rapporto, poi ha letto integralmente tutte le 115 coppie IT/EN: teoria, 22 esercizi svolti per lingua, 14 tracce con soluzioni e tutti i 90 quiz con ciascuna opzione e spiegazione. Il confronto scientifico ha incluso l'unità 5 del syllabus MUR, convenzione del lavoro, pressione esterna, condizioni delle leggi adiabatiche, reversibilità, passaggi di fase ed entropia. Non sono stati rigenerati gli script di stesura dell'autore.

### Correzioni effettuate

Sono stati corretti direttamente **46 Markdown**; nessun SVG ha richiesto modifiche. Quantità, ID, nove ancore originali, accesso gratuito delle sole schede 1–3, ordine delle alternative e chiavi sono conservati nelle due lingue.

- Teoria e quiz 55: esplicitato che l'area nel diagramma pressione–volume rappresenta il lavoro netto quando il ciclo è meccanicamente reversibile e il lavoro è soltanto quello di volume.
- Svolto 9.1 e quiz 4, 9, 24, 29, 39, 58, 59, 68 e 73: precisati i vincoli usati nel ragionamento, fra cui capacità costanti, campioni chiusi, lavoro di volume, reversibilità meccanica, temperature esterne diverse, due soli serbatoi e regime stazionario. Non sono cambiati i valori dei risultati.
- Quiz 37: distinta la caduta di temperatura attraverso ciascuno strato dal salto all'interfaccia; al contatto ideale la temperatura è continua.
- Quiz 67: sostituito il distrattore che limitava erroneamente l'enunciato di Clausius ai gas con un errore pertinente sul bilancio del fluido ciclico e dell'ambiente. Quiz 81: precisato che produzione interna al fluido e irreversibilità negli scambi esterni devono essere distinte.
- Quiz 77: eliminata l'ambiguità fra “diminuzione” come valore con segno e come modulo, che rendeva due distrattori interpretabili come equivalenti. La domanda ora valuta un'informazione mancante sul ricevente ed è distinta dal calcolo del singolo serbatoio nel quiz 13.
- Quiz 87: sostituita una domanda troppo vicina al quiz 17 con un'espansione adiabatica a volume raddoppiato. Per scegliere la temperatura finale occorre soddisfare insieme lavoro positivo e produzione interna di entropia positiva. Fra le alternative figurano il limite adiabatico reversibile esatto e il caso a lavoro nullo: i quattro casi sono fisicamente distinti. La realizzabilità della risposta è controllata anche costruendo un tratto adiabatico reversibile seguito da espansione libera.
- Schede svolte 3–9: sostituite le parole chiave generiche di calorimetria con termini pertinenti, tradotti in inglese.

### Verifiche effettivamente eseguite dal revisore

1. **Ricalcolo separato:** `review/independent-checks.py`, senza importare moduli dell'autore, registra **200 controlli numerici**. Sono coperti tutti i 22 svolti, tutte le 14 tracce e i distinti calcoli del banco quiz. Il controllo comprende bilanci e unità, conversioni, fasi finali, logaritmi, rendimento/COP e limiti di entropia. Integrazioni numeriche autonome verificano lavoro isotermo e adiabatico, entropia dei corpi finiti e dei mescolamenti, e lavoro del ciclo di Carnot. Tutti superati.
2. **Geometria effettiva degli SVG:** recuperati e verificati **2.796 punti** dai percorsi presenti nei 16 file finali. Sono confrontati con leggi calorimetriche, conduzione, Stefan–Boltzmann, isoterme e adiabatiche. Controllati separatamente raccordi del Carnot, integrale del ciclo, lavori dei due percorsi e altezze delle barre di entropia. Tutti superati; geometria IT/EN identica.
3. **Controllo visivo completo:** viste tutte le **32 rese a 390/780 pixel**, attraverso le otto tavole di confronto dell'autore, verificate contro i sorgenti finali invariati. Assi, unità, segni, versi, etichette e legende risultano leggibili; non sono stati rilevati tagli o collisioni. Le tavole rappresentano curve calcolate, non schemi di sola disposizione.
4. **Parità bilingue e struttura:** tutte le **115 coppie** hanno multisemi di formule equivalenti dopo normalizzazione dei separatori decimali e delle sole etichette tradotte. Conservate quattro opzioni distinte e la stessa chiave per ogni quiz; tutte le 90 risposte sono state ricontrollate durante la lettura delle alternative. Distribuzione 23/23/22/22, nessuna periodicità globale da 1 a 8. Il file JSON registra 3.288 controlli numerici/strutturali complessivi, senza fallimenti; questo conteggio include controlli ripetuti per file e formula e non indica 3.288 ricalcoli distinti.
5. **Conformità editoriale:** teoria in nove sezioni, prosa interamente dentro blocchi, tutte le ancore preservate. Nessuna direttiva `:::percorso`, come richiesto dal brief aggiornato; nessuna frazione con slash o `\frac` nelle espressioni matematiche dei Markdown; inglese con punti decimali. Le soluzioni delle tracce restano ragionate secondo il brief, che prevale sulla sintesi prevista dalla guida generale.
6. **Renderer finale:** `node strumenti/verifica-semestre-filtro-bilingue.mjs fisica-semestre-filtro termodinamica`, con HTML salvato in `review/rendered/`: **230 file, 2.324 formule, 0 errori, 0 avvisi**. Teoria finale 2.808 parole IT e 2.709 EN; mediane delle spiegazioni quiz 39 IT/36 EN; mediane svolti 248 IT/241 EN. `git diff --check` sui percorsi del capitolo superato. Nessuna build Astro eseguita dal revisore.

### Fonti e chiusura della revisione

Oltre al syllabus MUR fornito, il revisore ha consultato le risorse universitarie primarie [MIT 10.40 — Second Law: Concepts and Applications](https://ocw.mit.edu/courses/10-40-chemical-engineering-thermodynamics-fall-2003/aea59133e5a4de8675700ec04eef57fc_suppnotes_ch04.pdf) per la distinzione fra quasistaticità e reversibilità, [MIT Unified Engineering — Chapter 7](https://www.ocw.mit.edu/ans7870/16/16.unified/thermoF03/chapter_7.htm) per espansione libera e reversibile, e [MIT 5.60 — Entropy and Irreversibility](https://ocw.mit.edu/courses/5-60-thermodynamics-kinetics-spring-2008/18516ec05fe08afb00f0135dd3225734_QrzHB9_kHPE.pdf) per il percorso reversibile ausiliario. Verificati anche i valori NIST delle costanti di Boltzmann e Stefan–Boltzmann già collegati nella bibliografia dell'autore. Queste risorse sono usate per il controllo dei principi, senza riprodurne gli esercizi.

Evidenze indipendenti in `qa/fisica-semestre-filtro/termodinamica/review/`: baseline con hash, registro delle modifiche finali, `independent-checks.py/json`, `validation.json`, HTML, registro di lettura e controllo visivo, hash finali. **Revisione indipendente conclusa; contenuti congelati.** Non restano correzioni scientifiche o editoriali note nel capitolo. Restano al coordinatore la build complessiva, i controlli delle pagine integrate e l'eventuale pubblicazione. Il revisore non ha eseguito build, commit o deploy.
