---
titolo: "Pensiero critico"
sommario: "Conclusioni da dati o vincoli e valutazione di affermazioni a partire da un breve testo."
---

## Dati e proposizioni

:::definizione{#dati-e-proposizioni titolo="Conseguenza dei dati"}
Le **premesse** sono le informazioni che il quesito assume come vere. Una **proposizione** è un enunciato che, una volta fissata la situazione, può essere vero o falso. Una situazione è *compatibile* se rispetta tutte le premesse. Una proposizione è necessariamente vera se vale in ogni situazione compatibile ed è necessariamente falsa se risulta falsa in ciascuna di esse.

In un brano le premesse possono essere mescolate a dettagli di contesto. La deduzione comincia con l'individuazione di chi o che cosa compare nella proposizione e dei dati che lo riguardano. Se due frasi parlano di gruppi o periodi diversi, le informazioni sul primo valgono anche sul secondo solo quando il testo stabilisce un legame.
:::

:::esempio{titolo="Orari e durata"}
Un laboratorio apre alle ore 9 e chiude alle ore 13. Il rilevamento si svolge interamente nell'orario di apertura e comincia alle ore 11. La sua durata è al più di due ore, perché deve concludersi entro le ore 13. Una durata di tre ore è esclusa, perché porterebbe il termine alle ore 14. Una durata di due ore è invece compatibile, perché il rilevamento potrebbe concludersi esattamente alla chiusura. Anche una durata di un'ora rispetta i dati. La durata effettiva rimane quindi indeterminata.
:::

:::osservazione
La domanda decide quante situazioni occorre considerare. Per mostrare che una proposizione è *possibile*, basta un caso compatibile in cui è vera. Per mostrare che è *necessaria*, occorre un ragionamento valido in tutti i casi. Nell'esempio degli orari il limite di due ore si ricava direttamente dalla chiusura e vale qualunque sia la durata. Una situazione specifica in cui il rilevamento dura due ore dimostra soltanto che raggiungere il limite è possibile.
:::

:::esempio{titolo="Dati completi e informazioni mancanti"}
In una sala ci sono esattamente nove sedie, ciascuna di un solo colore, rosso o blu. Cinque sono rosse. Poiché i colori sono le sole alternative, quattro sedie sono blu. Se si conoscessero il totale e il numero di sedie rosse, lasciando aperta la scelta dei colori, le quattro rimanenti potrebbero essere tutte blu, tutte verdi o di più colori. È l'elenco completo delle alternative, insieme al totale, a rendere determinato il numero di sedie blu.
:::

## Quantificatori e insiemi

:::definizione{#quantificatori-e-insiemi titolo="Tutti, nessuno, almeno uno"}
Il **quantificatore** indica a quanti elementi si riferisce una proprietà. Siano $A$ e $B$ i sottoinsiemi di un universo $U$ formati dagli elementi che soddisfano due proprietà. Dire che ogni $A$ è un $B$ significa che $A$ è contenuto in $B$, cioè $A\subseteq B$. Dire che nessun $A$ è un $B$ significa che l'intersezione $A\cap B$ è vuota. Dire che qualche $A$ è un $B$ significa che $A\cap B$ contiene almeno un elemento.

Un'inclusione descrive dove si trovano gli elementi di $A$, se ce ne sono. Una frase universale è quindi compatibile anche con $A$ vuoto. Per concludere che esiste un elemento in comune serve un dato di esistenza, per esempio che $A$ è non vuoto e che $A\subseteq B$.
:::

:::esempio{titolo="Un'inclusione con un elemento noto"}
Tutti i fascicoli con etichetta blu sono stati inventariati. Il fascicolo 12 ha etichetta blu. Sia $A$ l'insieme dei fascicoli con etichetta blu e sia $B$ l'insieme dei fascicoli inventariati. Allora $A\subseteq B$. Poiché il fascicolo 12 appartiene ad $A$, appartiene anche a $B$. L'esistenza di almeno un fascicolo inventariato è quindi certa. Il testo lascia aperta la possibilità di fascicoli inventariati con un'etichetta diversa.

::venn{tipo="incluso" nomi="B,A" zone="ab" elementi="ab:12" titolo="Il fascicolo 12 appartiene ad A e quindi anche a B"}

:::

:::osservazione
La negazione di «tutti gli $A$ sono $B$» richiede almeno un $A$ che sia fuori da $B$. Per esempio, il fascicolo 35 con etichetta blu e ancora da inventariare basta a smentire la regola sulle etichette, anche se tutti gli altri fascicoli blu sono stati inventariati. La negazione di «nessun $A$ è $B$» richiede invece almeno un elemento nell'intersezione. Un controesempio dev'essere coerente con tutti i dati che rimangono validi.
:::

:::esempio{titolo="Limiti su una quantità"}
Un gruppo comprende almeno tre assistenti e al più cinque assistenti. Il numero $n$ di assistenti soddisfa $3\leq n\leq 5$, quindi può essere 3, 4 o 5 finché gli altri dati lo consentono. La frase «il gruppo ha meno di cinque assistenti» escluderebbe il valore 5. Per concludere che il gruppo ha esattamente cinque assistenti servirebbe un dato ulteriore, per esempio che ne ha almeno cinque.
:::

## Condizioni e implicazioni

:::definizione{#condizioni-e-implicazioni titolo="Condizione sufficiente e condizione necessaria"}
Siano $P$ e $Q$ due proposizioni. L'**implicazione** $P\implies Q$ afferma che ogni volta che $P$ è vera, anche $Q$ è vera. In questo caso $P$ è una condizione *sufficiente* per $Q$ e $Q$ è una condizione *necessaria* per $P$. La frase «$P$ solo se $Q$» si traduce quindi con $P\implies Q$. «$P$ se $Q$» ha invece direzione $Q\implies P$.

Se vale $P\implies Q$ e $Q$ è falsa, allora $P$ è falsa. Infatti, se $P$ fosse vera, dovrebbe esserlo anche $Q$. Questa deduzione è la **contrapposizione**. Quando si conosce soltanto che $Q$ è vera, l'implicazione lascia aperta la possibilità che $P$ sia vera e quella che sia falsa.
:::

:::esempio{titolo="Una regola di accesso"}
Un locale si apre solo con un tesserino abilitato. La proposizione $P$ afferma che una persona ha aperto il locale. La proposizione $Q$ afferma che quella persona ha usato un tesserino abilitato. Dalla regola segue $P\implies Q$. Se la persona ha aperto il locale, ha usato un tesserino abilitato. Se la persona ha usato un tesserino abilitato, la regola da sola lascia aperto l'esito. Per esempio, una seconda serratura potrebbe essere ancora chiusa. In quella situazione $Q$ è vera e $P$ è falsa, e la regola è rispettata.
:::

:::osservazione
La frase «se e solo se» comprende due implicazioni. Per esempio un ordine viene completato se e solo se supera il controllo e risulta pagato. In ogni ordine completato entrambe le condizioni sono soddisfatte. Inoltre, il superamento del controllo *insieme al* pagamento basta per il completamento.

Nel linguaggio della logica, «$P$ oppure $Q$» comprende anche la possibilità che entrambe siano vere, salvo che il testo richieda *esattamente una* delle due. Se il regolamento permette di allegare una ricevuta oppure un codice di transazione, un allegato di entrambi i tipi soddisfa il requisito minimo. Se invece impone di scegliere una sola modalità di invio, le due modalità sono incompatibili. La scelta fra queste letture dipende dalle parole della regola.
:::

## Vincoli e ordinamenti

:::definizione{#vincoli-e-ordinamenti titolo="Situazioni ammissibili"}
Un **vincolo** limita le situazioni che possono verificarsi. In un problema con più vincoli una situazione è ammissibile se li rispetta *contemporaneamente*. Per un numero ridotto di casi è utile elencare quelli permessi da una parte dei dati e poi eliminare quelli che violano una seconda condizione. Una proprietà si può dedurre quando vale in tutti i casi rimasti.

In un ordinamento, «prima di» è una relazione transitiva. Se $A$ è prima di $B$ e $B$ è prima di $C$, allora $A$ è prima di $C$. La frase «immediatamente prima di» impone anche che le posizioni siano consecutive. La distanza tra le due posizioni è quindi una seconda condizione.
:::

:::esempio{titolo="Ordine di quattro interventi"}
Quattro interventi distinti $A$, $B$, $C$ e $D$ occupano quattro posizioni, a partire dalla prima. $B$ è immediatamente dopo $D$, mentre $A$ viene prima di $D$. Inoltre $C$ deve essere ultimo. Restano le posizioni 1, 2 e 3 per $A$, $D$ e $B$. Poiché $D$ deve avere una posizione prima e una dopo di sé, occupa la posizione 2. Segue l'ordine $A,D,B,C$.

Se si toglie il vincolo che assegna a $C$ l'ultima posizione, la sequenza $A,C,D,B$ diventa compatibile. $A$ viene ancora prima di $D$ e la coppia $D,B$ è consecutiva. Il primo ordine mostra che $D$ può essere secondo, mentre il secondo ordine mostra che può essere terzo.
:::

:::esempio{titolo="Distribuzione fra posti distinti"}
Tre appuntamenti $L$, $M$ e $N$ occupano tre sale distinte, una per sala. $L$ può usare solo le sale 1 e 2. $N$ usa la sala 3. Anche $M$ può usare solo le sale 1 e 2. Le assegnazioni compatibili sono due.

| Sala 1 | Sala 2 | Sala 3 |
| --- | --- | --- |
| $L$ | $M$ | $N$ |
| $M$ | $L$ | $N$ |

In ciascuna assegnazione uno tra $L$ e $M$ è nella sala 1. La disgiunzione è quindi certa. L'assegnazione della sala 1 a $L$ è soltanto possibile. La tabella permette di distinguere le due affermazioni senza aggiungere preferenze fra le sale.
:::

## Eccezioni e ambito della regola

:::definizione{#eccezioni-e-ambito titolo="Ambito ed eccezioni"}
L'**ambito** di una regola è il gruppo di persone, oggetti o momenti a cui si applica. Nella frase «le pratiche non urgenti passano per il controllo ordinario», la condizione *non urgenti* indica a quali pratiche si applica la procedura. Per sapere che cosa succede alle pratiche urgenti occorre verificare se il testo fornisce anche una procedura per loro o se le esclude espressamente dal controllo ordinario.

Una formula come «la regola si applica alle pratiche non urgenti» precisa l'ambito, mentre «le pratiche urgenti sono esenti dal controllo» fissa un esito per le pratiche urgenti. Anche la data fa parte dell'ambito. Se una regola vale da lunedì, i dati di venerdì precedente restano fuori dal periodo indicato.
:::

:::esempio{titolo="Una condizione per due gruppi"}
I partecipanti alla visita che non sono fornitori entrano dall'accesso ovest. I fornitori con una consegna prenotata entrano dall'accesso nord. Una persona presente alla visita è un fornitore e ha una consegna prenotata. La seconda regola si applica a quella persona, quindi l'accesso indicato è quello nord. Per un fornitore senza prenotazione, il testo non assegna un accesso. L'esito di quel fornitore è indeterminato anche se il testo contiene una regola per i fornitori prenotati.
:::

:::osservazione
L'espressione «almeno», «al massimo» o «solo» può riguardare una singola parte della frase. «Ogni turno ha almeno una persona con esperienza» non richiede esperienza per tutti gli addetti del turno. «Solo gli addetti del turno serale hanno accesso al magazzino» implica che un addetto con accesso lavora di sera. Resta possibile che un addetto serale non abbia accesso. La parola «solo» delimita quindi il gruppo che può possedere la proprietà, senza attribuirla a ogni suo membro.
:::

:::esempio{titolo="Periodo di osservazione"}
Un registro riporta tutte e sole le richieste consegnate tra il 3 e il 7 giugno. Nell'intervallo compaiono undici richieste, tutte complete. La frase «tra il 3 e il 7 giugno tutte le richieste consegnate erano complete» segue dal registro. La stessa affermazione estesa a tutto giugno è indeterminata. Una richiesta incompleta del 12 giugno la renderebbe falsa e sarebbe compatibile con il registro. È altrettanto compatibile un mese in cui anche tutte le altre richieste sono complete.
:::

## Vero, falso o non determinabile

:::definizione{#vero-falso-indeterminato titolo="I tre giudizi"}
Quando il quesito propone **Vero**, **Falso** e **Non determinabile**, il giudizio dipende dai dati del brano. Si hanno tre casi.

- **Vero** se l'affermazione segue dalle informazioni fornite. Può essere ripetuta nel testo oppure ricavata con una deduzione.
- **Falso** se dai dati segue la sua negazione. Il testo esclude ogni situazione in cui l'affermazione sarebbe vera.
- **Non determinabile** se i dati ammettono almeno una situazione in cui l'affermazione è vera e almeno una in cui è falsa.

Per il terzo giudizio sono utili due esempi completi. Le alternative che si costruiscono possono differire soltanto per il dato mancante. In entrambi i casi si devono conservare le quantità note, i vincoli e l'ambito.
:::

:::esempio{titolo="Due arrivi possibili"}
Un traghetto parte alle 8 e impiega almeno 40 minuti e al massimo un'ora. L'affermazione «arriva prima delle 8:30» è falsa, perché l'arrivo più anticipato è alle 8:40. «Arriva entro le 9» è vera, perché anche la durata massima porta a un arrivo alle 9. «Arriva prima delle 8:50» è non determinabile. Un tragitto di 45 minuti la rende vera e un tragitto di 55 minuti la rende falsa. Entrambe le durate rispettano i limiti indicati.
:::

:::osservazione
«Il brano permette di escludere $P$» e «il brano permette di concludere $P$» sono richieste diverse. Se per $P$ si trova soltanto un controesempio compatibile, si è escluso che $P$ sia necessaria. Per dichiararla falsa occorre stabilire che la sua negazione vale in tutti i casi. Nell'esempio del traghetto, una durata di 55 minuti esclude la necessità di arrivare prima delle 8:50. La durata di 45 minuti conferma che l'arrivo prima delle 8:50 resta possibile.
:::

:::esempio{titolo="La negazione di un esistente"}
Se in un armadio ci sono esattamente quattro cartelle e tutte sono chiuse, l'affermazione «almeno una cartella è aperta» è falsa, perché ciascuna delle quattro è chiusa. Se invece il testo dice soltanto che una delle quattro cartelle è chiusa, almeno una delle altre tre potrebbe essere aperta. Potrebbero anche essere tutte chiuse. In quel caso lo stesso enunciato è non determinabile.
:::

## Affermazioni basate sui dati

:::definizione{#affermazioni-sui-dati titolo="Confronto tra quantità e quote"}
Una **quantità assoluta** indica un numero di unità. Una **quota** rapporta quel numero al totale di riferimento. Il confronto fra due numeri assoluti risponde a una domanda diversa dal confronto fra le loro quote. Quando si passa da un gruppo all'altro, occorre quindi identificare quale totale corrisponde a ciascun valore.

Per una tabella che riporta un valore per gruppo e periodo, ogni cella riguarda l'intersezione fra la propria riga e la propria colonna. Una colonna con il totale è interpretabile come somma delle voci solo quando le parti sono disgiunte ed esauriscono il gruppo, oppure quando il testo definisce esplicitamente quel totale.
:::

:::esempio{titolo="Due campioni di dimensione diversa"}
In un controllo illustrativo, 15 componenti di un lotto di 60 e 16 componenti di un lotto di 80 superano una prova aggiuntiva. Il secondo lotto conta più successi in valore assoluto, perché $16>15$. Le due quote sono invece

$$
\frac{15}{60}=\frac{1}{4}=25\%, \qquad \frac{16}{80}=\frac{1}{5}=20\%.
$$

La quota è quindi maggiore nel primo lotto. Da questi conteggi segue il confronto fra i lotti osservati. Per attribuire la differenza al processo di produzione occorrerebbero informazioni che isolino l'effetto del processo dai diversi materiali, dagli strumenti e dalle condizioni di misura.
:::

:::osservazione
Due totali riferiti a categorie che si sovrappongono possono contare due volte alcuni elementi. Per esempio, se 12 visite al mese riguardano la sala principale e 8 la sala laterale, il numero di visite distinte che comprendono almeno una delle due sale è 20 soltanto quando nessuna visita comprende entrambe le sale. Se tre visite comprendono entrambe, le visite distinte sono $12+8-3=17$. Se l'intersezione è ignota, la somma 20 rappresenta il massimo possibile e il totale preciso resta indeterminato.
:::

:::esempio{titolo="Limite ricavato da dati parziali"}
Per un turno sono programmati 24 controlli. Dodici hanno già dato esito favorevole e altri cinque esito sfavorevole. Rimangono $24-12-5=7$ controlli. Anche se tutti e sette dessero esito favorevole, gli esiti favorevoli sarebbero $12+7=19$. La frase «il turno potrà avere almeno 20 esiti favorevoli» è quindi falsa. Il conteggio finale esatto può ancora variare fra 12 e 19.
:::

## Quesiti con più proposizioni

:::definizione{#combinazioni-di-proposizioni titolo="Valutazione separata delle proposizioni"}
Quando il quesito presenta più proposizioni numerate, ciascuna va confrontata con le stesse premesse. Una proposizione elencata è un enunciato da valutare e non entra fra i dati delle altre. Una risposta come «solo I e III» afferma che le due proposizioni indicate soddisfano il criterio richiesto e che le altre sono escluse da quel criterio.

Se il criterio è «quali sono necessariamente vere», una proposizione non determinabile resta esclusa dalla risposta insieme alle proposizioni false rispetto ai dati. Se il criterio è «quali sono necessariamente false», una proposizione non determinabile resta ugualmente esclusa. Cambiare il criterio può cambiare la risposta anche se le premesse rimangono le stesse.
:::

:::esempio{titolo="Tre affermazioni sulla stessa regola"}
In un'associazione tutti i soci maggiorenni possono votare. È presente almeno un socio maggiorenne. Il testo precisa anche che i visitatori non sono soci. Si considerano le tre proposizioni I «Almeno un socio può votare», II «Non è presente alcun socio maggiorenne» e III «Ogni socio può votare».

| Proposizione | Giudizio | Passaggio decisivo |
| --- | --- | --- |
| I | Vero | Il socio maggiorenne presente può votare. |
| II | Falso | La presenza di un socio maggiorenne è data. |
| III | Non determinabile | Il voto dei soci minorenni non è stabilito. |

Per la III, un'associazione con soli soci maggiorenni soddisfa la frase. Un'associazione con almeno un socio minorenne a cui il regolamento non consente di votare rispetta i dati e la smentisce. La risposta alla richiesta «Quali sono necessariamente vere?» è quindi «solo I». Alla richiesta «Quali sono necessariamente false?» la risposta è «solo II».
:::

:::osservazione
L'espressione «quale proposizione è compatibile?» chiede una possibilità. La domanda «quale proposizione deve valere?» richiede invece una conseguenza. Alla domanda «quale delle seguenti non può essere vera?» risponde la proposizione la cui *negazione* è una conseguenza dei dati. Nei quesiti a coppie di affermazioni, registrare il giudizio di ciascuna prima di confrontare le coppie evita di trattare come implicazioni le semplici somiglianze tra le opzioni.
:::
