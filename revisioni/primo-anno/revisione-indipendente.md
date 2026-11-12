# Revisione indipendente di matematica e fisica del primo anno

Data della revisione: 11 novembre 2026.

## Esito e perimetro

La revisione del significato delle domande, delle formule e delle risposte non lascia errori contenutistici aperti nello snapshot controllato. Sono state lette tutte le 22 teorie e tutte le 396 famiglie dei generatori. I risultati dei 1.980 quiz e degli 836 esercizi svolti o da fare sono stati confrontati con formule di controllo costruite separatamente. Per i quiz è stata controllata anche la risposta effettivamente selezionata nei file Markdown, dopo la rotazione delle alternative.

Questa revisione riguarda contenuti e calcoli. La verifica di front matter, ancore, sintassi KaTeX, figure, resa delle pagine, build, accessi e pagamenti è svolta separatamente dall'integrazione. I controlli riportati qui non la sostituiscono.

| Contenuto | Matematica | Fisica | Totale |
|---|---:|---:|---:|
| Capitoli e teorie lette | 12 | 10 | 22 |
| Famiglie di domande lette | 216 | 180 | 396 |
| Quiz controllati | 1.080 | 900 | 1.980 |
| Schede di esercizi svolti | 96 | 80 | 176 |
| Esercizi contenuti nelle schede | 288 | 240 | 528 |
| Esercizi da fare | 168 | 140 | 308 |

Ogni capitolo contiene **18 famiglie con cinque varianti ciascuna**, per 90 quiz. Il numero 90 indica quesiti con tracce distinte, non 90 metodi risolutivi diversi. Ogni capitolo comprende inoltre otto schede con tre esercizi e 14 tracce da svolgere.

## Come è stato effettuato il controllo

### Lettura delle famiglie e oracoli separati

È stato letto ogni ramo dei due generatori, comprese le condizioni della domanda, le alternative e la spiegazione. Per ogni famiglia è stata ricostruita separatamente la risposta attesa a partire dalla relazione matematica o fisica descritta. Il controllo non usa il campo `expected` o l'etichetta della risposta corretta dell'autore come fonte della soluzione.

Per matematica sono state controllate tutte le varianti `k=1..5`; per fisica tutte le varianti `k=0..4`. Sono state controllate anche tutte le 864 combinazioni matematica `k=6..9` e le 540 combinazioni fisica `k=5..7`. Questi **1.404 casi aggiuntivi del generatore** coprono un insieme più ampio delle coppie effettivamente usate negli svolti e nelle tracce: non vengono conteggiati come nuovi esercizi pubblicati.

Le risposte numeriche sono confrontate con valori esatti; le espressioni algebriche mediante equivalenza simbolica; insiemi e intervalli con i rispettivi estremi e inclusioni. Il confronto simbolico tra espressioni non dimostra automaticamente la correttezza delle condizioni di esistenza: domini, esclusioni, versi delle disequazioni e ipotesi geometriche sono stati verificati nella lettura delle famiglie.

### Verifica dei risultati visibili nell'esportazione

I due audit degli autori sono stati usati per associare capitolo, famiglia, variante e percorso. Sono stati poi letti i file effettivi: 1.344 file di quiz/schede/tracce di matematica e 1.120 di fisica. Per i quiz il controllo legge nuovamente le alternative e l'indice `corretta` dal Markdown e verifica che una sola alternativa corrisponda all'oracolo indipendente.

| Tipo di risposta | Matematica | Fisica | Totale |
|---|---:|---:|---:|
| Quiz numerici, algebrici, insiemistici o con intervalli, analizzati dal testo visibile | 940 | 735 | 1.675 |
| Quiz con alternative testuali, esaminate per famiglia e confrontate nell'esportazione | 140 | 165 | 305 |
| Risultati numerici/algebrici di svolti e tracce | 403 | 317 | 720 |
| Risultati testuali di svolti e tracce | 53 | 63 | 116 |
| Record complessivi controllati | 1.536 | 1.280 | 2.816 |

Dei 720 risultati numerici/algebrici degli esercizi, 716 conclusioni visibili rientrano nel parser usato. Quattro conclusioni di fisica sono state confermate con lettura e calcolo diretto, perché la risposta è espressa in prosa, in una formula isolata o come fattore di un'altra quantità:

| Scheda ed esercizio | Controllo indipendente |
|---|---|
| Grandezze e unità, scheda 4, esercizio 1 | 625 g corrispondono a 0,625 kg. |
| Misure e incertezze, scheda 6, esercizio 1 | 17,45 cm arrotondati al decimo con la convenzione dichiarata danno 17,5 cm. |
| Proporzionalità e grafici, scheda 4, esercizio 2 | In una proporzionalità diretta positiva, un aumento del 70% di x comporta lo stesso aumento di y. |
| Proporzionalità e grafici, scheda 6, esercizio 1 | In y=cx², moltiplicare x per 7 moltiplica y per 49; il testo scrive y₂=49y₁. |

Le risposte classificate come testuali comprendono anche alcune scritture matematiche, per esempio componenti di vettori e notazione scientifica. Non sono state attribuite al controllo simbolico generale: per esse la verifica del significato deriva dalla lettura della famiglia, seguita dal confronto delle varianti esportate con la risposta attesa.

### Distinzione tra contenuti e semplici conteggi

Dopo la correzione dell'assegnazione delle varianti, nelle raccolte finali non risultano ripetizioni della stessa coppia famiglia/variante né tracce testualmente identiche all'interno di quiz, svolti o esercizi da fare. In matematica sono confermati 288 esercizi svolti distinti; in fisica 240. È stato inoltre verificato che nelle domande, spiegazioni e passaggi di matematica non rimangano riferimenti a una variabile `n` usata soltanto dal generatore e non introdotta allo studente.

## Questioni emerse e corrette

- **Alternative coincidenti.** Sono state individuate e corrette collisioni fra distrattori e risposte, comprese tre varianti di geometria su supplementari, bisettrici e angoli del triangolo isoscele. In fisica sono state corrette collisioni nelle conversioni, nelle relazioni proporzionali, nella densità e nella pressione. Il controllo finale non rileva alternative numericamente equivalenti alla soluzione oltre a quella selezionata.
- **Ripetizioni negli svolti di matematica.** La prima assegnazione fissa della variante in base alla posizione dell'esercizio produceva 29 ripetizioni: 259 tracce distinte su 288. L'assegnazione finale usa una variante non già impiegata per la stessa famiglia e ripristina 288 tracce distinte, tutte comprese nei casi ricalcolati.
- **Espressioni visibili.** Sono stati corretti gli esponenti con più cifre privi di raggruppamento TeX, le sequenze di escape nelle stringhe e le spiegazioni con parametri interni non introdotti. Il controllo matematico ha riguardato anche il risultato visibile, non soltanto il valore numerico memorizzato dal generatore.
- **Domini.** Le frazioni mantengono le esclusioni dell'espressione iniziale dopo le semplificazioni. Sono distinte l'esclusione dei denominatori nulli e l'ammissibilità di un numeratore nullo. È stata precisata una condizione inizialmente più restrittiva del necessario.
- **Ipotesi fisiche.** Sono stati esplicitati i coefficienti positivi nelle proporzionalità con rapporti, il braccio perpendicolare e il punto di applicazione delle forze nei momenti, l'impermeabilità dei corpi nei confronti di Archimede e il carico fuori dall'acqua nei problemi di galleggiamento.

## Coerenza delle teorie e punti delicati

Le 12 teorie di matematica presentano i prerequisiti dei metodi usati nei quiz: segni e frazioni; potenze e percentuali; insiemi, logica e prime funzioni; calcolo letterale; prodotti notevoli e scomposizioni; frazioni algebriche; equazioni e disequazioni; geometria euclidea; statistica descrittiva. Sono presenti spiegazioni, esempi e, dove pertinenti, dimostrazioni. Le definizioni di isoscele, rettangolo, rombo e quadrato sono inclusive; la convenzione esclusiva adottata per il trapezio è dichiarata. I criteri LAL, ALA e LLL specificano le corrispondenze e le condizioni necessarie.

Le 10 teorie di fisica coprono gli strumenti di misura e i modelli effettivamente usati. I criteri di incertezza sono espliciti: semidispersione, incertezza strumentale, compatibilità per sovrapposizione degli intervalli e propagazione prudenziale al primo ordine. La teoria distingue il valore effettivo dell'attrito statico dal suo massimo, controlla la possibilità del contatto attraverso la normale, definisce il braccio come distanza perpendicolare e separa pressione assoluta, relativa e differenza di pressione. Nel galleggiamento distingue volume totale e immerso, corpo completamente immerso e corpo libero di galleggiare, peso e lettura del dinamometro.

Le Indicazioni nazionali articolano gli obiettivi del primo biennio senza fissare una scansione annuale identica per tutte le scuole. I programmi ufficiali consultati confermano il nucleo adottato. La collocazione delle frazioni algebriche e delle disequazioni, così come dei fluidi, può variare: le introduzioni dei moduli rendono esplicita questa variabilità. Il corso di fisica non viene ampliato con interi moduli di cinematica, dinamica, energia o termologia per raggiungere il conteggio dei quiz.

Fonti curricolari di riferimento:

- [Indicazioni nazionali del liceo scientifico, copia pubblicata dal Galilei di Verona](https://www.galileivr.edu.it/doc/lex/indnaz/liceoscient.pdf).
- [Copernico di Pavia, programma di matematica della classe 1C, 2024/25](https://copernico.edu.it/wp-content/uploads/2025/06/1c_matematica25.pdf).
- [Benedetti–Majorana, programmi della 1E, 2024/25](https://www.benedettimajorana.it/wp-content/uploads/2025/06/1E-2024-2025-Programmi-svolti.pdf).
- [Vico di Corsico, programma di fisica della 1A, 2024/25](https://www.liceovico.edu.it/wp-content/uploads/2025/06/1A_FISICA_programma_svolto.pdf).
- [Severi–Correnti, programma di fisica della 1C LS, 2024/25](https://severi-correnti.edu.it/sites/default/files/programmi_svolti/2024-2025/PrimaC-LS-Fisica-PSeC2024-2025-D%26%23039%3BEredit%C3%A0.pdf).

## Ripetere il controllo dei calcoli

Lo script `strumenti/verifica-primo-anno-calcoli.py` conserva gli oracoli separati per tutte le 396 famiglie. Usa la radice relativa del repository, carica soltanto definizioni e metadati dei generatori e non riscrive i contenuti. Richiede Python 3.10 o successivo, SymPy e PyYAML; **non richiede ANTLR**.

```sh
python3 strumenti/verifica-primo-anno-calcoli.py
python3 strumenti/verifica-primo-anno-calcoli.py --with-extra-variants
python3 strumenti/verifica-primo-anno-calcoli.py geometria pressure
python3 strumenti/verifica-primo-anno-calcoli.py --output /tmp/calcoli-primo-anno.json
```

Il comando completo con le varianti aggiuntive ha verificato 1.980 casi quiz e 1.404 casi extra, senza segnalazioni, restituendo codice di uscita zero. Il rapporto dettagliato viene scritto soltanto quando si passa `--output`; altrimenti viene stampato un riepilogo JSON.

SHA-256 dei generatori nello snapshot di questo controllo:

```text
matematica af4d7e999b25d1ba86df09b2346b5fd4988b5b8bba65375faaf53343d4e15b4c
fisica     b6c406590a37b3c89bc7e7d6160e379491d923af1e58416c0542c54fc9a18798
```

## Limiti effettivi della verifica

Il parser interpreta il sottoinsieme di TeX usato nelle risposte di questi generatori; non è un interprete generale di LaTeX. I confronti testuali non dimostrano automaticamente l'equivalenza di frasi arbitrarie. Le spiegazioni sono state esaminate per ogni famiglia, mentre ogni variante numerica e ogni risultato esportato sono stati ricalcolati: non si dichiara una dimostrazione automatica di tutti i passaggi discorsivi di ogni pagina.

Lo script ripetibile controlla i generatori e le loro risposte visibili. Il confronto dei 2.816 record con i file esportati, la lettura delle 22 teorie e la risoluzione dei quattro casi discorsivi sopra indicati fanno parte di questa revisione dello snapshot; non vengono implicitamente ripetuti dal solo comando dello script. Modifiche successive a tracce, teorie, famiglie o condizioni richiedono una revisione coerente con quanto cambiato.
