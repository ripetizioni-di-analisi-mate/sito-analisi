---
titolo: "Probabilità condizionata, indipendenza e Bayes"
sommario: "Si calcolano probabilità quando è nota un'informazione, si riconosce l'indipendenza e si aggiornano le probabilità con la formula di Bayes."
---

## Il gruppo di riferimento

:::definizione{#condizionata titolo="Probabilità condizionata"}
Siano $A$ e $B$ eventi di uno spazio campionario $\Omega$ e sia $P(B)>0$. Quando si sa che si è verificato $B$, gli esiti ancora possibili sono quelli appartenenti a $B$. Tra questi, gli esiti per cui si verifica anche $A$ formano l'intersezione $A\cap B$. La **probabilità condizionata di $A$ dato $B$** è

$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}.
$$

Il denominatore riporta il peso complessivo degli esiti di $B$ a uno. Il numeratore seleziona, entro quel gruppo, gli esiti che soddisfano anche la condizione espressa da $A$. Poiché $A\cap B\subseteq B$, il rapporto è compreso tra zero e uno.
:::

:::esempio{titolo="Due domande sulla stessa tabella"}
Su $200$ iscritti, $50$ sono pendolari. Tra i pendolari, $20$ viaggiano in treno. Tra i $150$ iscritti residenti, $10$ viaggiano in treno. Siano $B$ l'evento «l'iscritto è pendolare» e $A$ l'evento «l'iscritto viaggia in treno». Si sceglie un iscritto a caso.

| Gruppo | In treno | Con altro mezzo | Totale |
| --- | ---: | ---: | ---: |
| Pendolari | 20 | 30 | 50 |
| Residenti | 10 | 140 | 150 |
| Totale | 30 | 170 | 200 |

Per trovare la probabilità di usare il treno dato che l'iscritto è pendolare si divide per il totale della prima riga. Per trovare la probabilità di essere pendolare dato che l'iscritto usa il treno si divide per il totale della prima colonna. L'intersezione resta la stessa in entrambi i calcoli.

$$
P(A\mid B)=\frac{20}{50}=\frac{2}{5},
\qquad
P(B\mid A)=\frac{20}{30}=\frac{2}{3}.
$$

::venn{nomi="A,B" ambiente="Ω" zone="ab" elementi="a:10;ab:20;b:30;u:140" titolo="A indica gli iscritti che usano il treno e B indica i pendolari. Il gruppo B comprende 20 iscritti nell'intersezione e 30 fuori da A."}
:::

:::osservazione
Se gli esiti di $\Omega$ sono finiti ed equiprobabili, la definizione si riduce al rapporto $\dfrac{|A\cap B|}{|B|}$. In questo caso $|\cdot|$ indica il numero di elementi dell'insieme. Il fattore comune $\dfrac{1}{|\Omega|}$ si semplifica al numeratore e al denominatore. Se gli esiti hanno pesi diversi, al posto dei conteggi si sommano i pesi delle regioni corrispondenti.

Per esempio, un dado ha probabilità $\dfrac{1}{4}$ sulla faccia $6$ e probabilità $\dfrac{3}{20}$ su ciascuna delle altre facce. Sapendo che il risultato è pari, l'evento noto comprende le facce $2$, $4$ e $6$ con peso totale $\dfrac{11}{20}$. Pertanto la probabilità condizionata della faccia $6$ è $\dfrac{5}{11}$.
:::

:::attenzione
Per applicare la definizione occorre $P(B)>0$. Se si lancia un dado ordinario e $B$ è l'evento «esce $7$», si ottengono $P(B)=0$ e $P(A\cap B)=0$ per ogni $A$. Il rapporto è quindi indeterminato. In una tabella di conteggi la stessa difficoltà compare quando il gruppo su cui si vuole condizionare è vuoto.
:::

## Complementari e vincoli sulle probabilità

:::teorema{#complementi titolo="Complementare entro la condizione"}
Siano $A$ e $B$ eventi con $P(B)>0$. L'evento $A^c$ è il complementare di $A$ in $\Omega$. Gli eventi $A\cap B$ e $A^c\cap B$ sono disgiunti e la loro unione è $B$. Sommando le probabilità e dividendo per $P(B)$ si ottiene

$$
P(A^c\mid B)=1-P(A\mid B).
$$

La formula permette di calcolare la probabilità del risultato opposto conservando lo stesso gruppo di riferimento. Se il $70\%$ degli iscritti del turno serale supera una prova, il $30\%$ degli iscritti *di quel turno* non la supera.
:::

:::esempio{titolo="Si cambia il gruppo di riferimento"}
Su $100$ ricevute, $40$ riguardano ordini online. Sono state rettificate $12$ ricevute online e $6$ ricevute degli altri ordini. Sia $A$ l'evento «la ricevuta è stata rettificata» e $B$ l'evento «l'ordine è online». Il passaggio da $B$ a $B^c$ porta il denominatore da $40$ a $60$. Si ha

$$
P(A\mid B)=\frac{12}{40}=\frac{3}{10},
\qquad
P(A\mid B^c)=\frac{6}{60}=\frac{1}{10}.
$$

Il complementare della prima probabilità è $P(A^c\mid B)=\dfrac{7}{10}$. Il valore $\dfrac{1}{10}$ riguarda invece le ricevute di un gruppo diverso.
:::

:::osservazione
Quando sono assegnati $P(A)$, $P(B)$ e $P(A\cap B)$, le quattro regioni definite da $A$ e $B$ hanno pesi determinati. Posto $x=P(A\cap B)$, tali pesi sono $x$, $P(A)-x$, $P(B)-x$ e $1-P(A)-P(B)+x$. Poiché tutti devono essere non negativi, l'intersezione deve soddisfare

$$
\max\{0,P(A)+P(B)-1\}\le x\le\min\{P(A),P(B)\}.
$$

Per esempio, se $P(A)=0{,}7$ e $P(B)=0{,}6$, l'intersezione può variare tra $0{,}3$ e $0{,}6$. Il limite inferiore deriva dal fatto che, senza almeno $0{,}3$ di sovrapposizione, l'unione supererebbe la probabilità uno.
:::

:::esempio{titolo="Tabella ricostruita da tre probabilità"}
Siano $A$ l'evento «una richiesta è urgente» e $B$ l'evento «la richiesta arriva online». Si hanno $P(A)=0{,}4$, $P(B)=0{,}6$ e $P(A\cap B)=0{,}3$. Tra le richieste urgenti, la quota che arriva allo sportello è $0{,}4-0{,}3=0{,}1$ rispetto a tutte le richieste. La quota online e non urgente è invece $0{,}6-0{,}3=0{,}3$. Resta un peso $0{,}3$ per le richieste allo sportello e non urgenti. La tabella completa è quindi

| Canale | Urgente | Non urgente | Totale |
| --- | ---: | ---: | ---: |
| Online | $0{,}3$ | $0{,}3$ | $0{,}6$ |
| Sportello | $0{,}1$ | $0{,}3$ | $0{,}4$ |
| Totale | $0{,}4$ | $0{,}6$ | $1$ |

Sapendo che una richiesta è allo sportello, la probabilità che sia urgente è $\dfrac{0{,}1}{0{,}4}=\dfrac14$. Il valore $0{,}1$ indica invece una probabilità congiunta riferita a tutte le richieste. La ricostruzione chiarisce da quale riga o colonna ricavare ogni denominatore.
:::

## Regola del prodotto e alberi

::::teorema{#prodotto titolo="Regola del prodotto"}
Se $P(A)>0$, la probabilità che si verifichino entrambi gli eventi $A$ e $B$ è

$$
P(A\cap B)=P(A)P(B\mid A).
$$

Per tre eventi, se $P(A)>0$ e $P(A\cap B)>0$, vale

$$
P(A\cap B\cap C)=P(A)P(B\mid A)P(C\mid A\cap B).
$$

Quando un esperimento avviene in più fasi, ciascun fattore dopo il primo si riferisce all'intera sequenza di eventi che lo precede.

:::dimostrazione
Si applica la definizione di probabilità condizionata all'ultimo evento della sequenza. Dato che $P(A\cap B)>0$, si può moltiplicare $P(C\mid A\cap B)$ per $P(A\cap B)$ e ottenere $P(A\cap B\cap C)$. Poiché $P(A)>0$, si sostituisce $P(A\cap B)$ con $P(A)P(B\mid A)$.
:::
::::

:::esempio{titolo="Albero di due estrazioni"}
In un'urna ci sono tre palline rosse e due blu. Si estrae due volte senza reinserire la prima pallina. Si indicano con $R_i$ e $B_i$ gli eventi «rossa alla prova $i$» e «blu alla prova $i$». Al primo livello dell'albero i rami hanno probabilità $\dfrac{3}{5}$ e $\dfrac{2}{5}$. Al secondo livello, la composizione dell'urna dipende dal ramo già seguito.

::grafico{assi=0 xmin=-0.8 xmax=12 ymin=-0.6 ymax=6.5 linee="0,3 4,4.7;0,3 4,1.3;4,4.7 8,5.9;4,4.7 8,3.8;4,1.3 8,2.1;4,1.3 8,0.1" punti="0,3,pieno;4,4.7,pieno;4,1.3,pieno;8,5.9,pieno;8,3.8,pieno;8,2.1,pieno;8,0.1,pieno" etichette="1.45,4.08,⅗;1.45,1.62,⅖;5.55,5.68,½;5.55,3.65,½;5.55,2.33,¾;5.55,0.05,¼;8.2,5.9,rossa rossa;8.2,3.8,rossa blu;8.2,2.1,blu rossa;8.2,0.1,blu blu" titolo="Probabilità dei rami nelle due estrazioni senza reinserimento. Le quattro foglie identificano gli ordini possibili."}

La probabilità di ciascuna foglia si ottiene con la regola del prodotto. Le foglie «rossa, blu» e «blu, rossa» sono disgiunte, quindi per trovare la probabilità di due colori diversi si sommano i due percorsi.

$$
\begin{aligned}
P(R_1\cap B_2)&=\frac{3}{5}\cdot\frac{2}{4}=\frac{3}{10},\\[6pt]
P(B_1\cap R_2)&=\frac{2}{5}\cdot\frac{3}{4}=\frac{3}{10},\\[6pt]
P(\text{due colori diversi})&=\frac{3}{5}.
\end{aligned}
$$

Al nodo che segue una prima rossa rimangono due rosse e due blu, quindi i due rami uscenti hanno la stessa probabilità. Al nodo che segue una prima blu rimangono tre rosse e una blu, quindi il ramo verso la rossa ha probabilità maggiore.
:::

:::osservazione
In un albero completo i rami uscenti da un nodo raggiunto con probabilità positiva formano una partizione degli esiti ancora possibili, quindi le probabilità condizionate scritte su quei rami sommano a uno. Le foglie sono percorsi completi. Se un evento richiede un esito intermedio, la sua probabilità è la somma delle foglie che condividono il percorso fino a quell'esito.

Per esempio, nell'urna la probabilità di una prima blu si ritrova sommando $\dfrac{2}{5}\cdot\dfrac{3}{4}$ e $\dfrac{2}{5}\cdot\dfrac{1}{4}$. La somma è $\dfrac{2}{5}$, il peso del nodo prima della seconda estrazione.
:::

:::esempio{titolo="Probabilità marginale della seconda estrazione"}
Si riprende l'urna con tre palline rosse e due blu. Prima di osservare il primo colore, per ottenere una seconda rossa ci sono i due percorsi «rossa, rossa» e «blu, rossa». La loro somma è

$$
P(R_2)=\frac35\cdot\frac24+\frac25\cdot\frac34=\frac35.
$$

Il valore coincide con la quota iniziale di rosse, perché tutte le singole palline sono equiprobabili in seconda posizione. Dato il primo colore, invece, la quota varia tra $\dfrac24$ e $\dfrac34$. Si distinguono così due domande sulla seconda estrazione. Se il primo esito non è noto, si sommano entrambi i percorsi. Se il primo esito è noto, si legge la probabilità sul ramo che parte da quel nodo.
:::

## Indipendenza di due eventi

:::definizione{#indipendenza titolo="Eventi indipendenti"}
Gli eventi $A$ e $B$ sono **indipendenti** se

$$
P(A\cap B)=P(A)P(B).
$$

Se $P(B)>0$, la definizione equivale a $P(A\mid B)=P(A)$ perché si può dividere l'identità per $P(B)$. La probabilità di $A$ rimane quindi la stessa quando si apprende che è accaduto $B$. La definizione mediante il prodotto vale anche quando una delle probabilità è zero.
:::

:::esempio{titolo="Verifica sulle facce di un dado"}
Si lancia un dado equo. Siano $A=\{2,4,6\}$ l'evento «esce un numero pari» e $B=\{3,6\}$ l'evento «esce un multiplo di tre». L'unica faccia comune è $6$, quindi

$$
P(A\cap B)=\frac{1}{6}
=\frac{1}{2}\cdot\frac{1}{3}
=P(A)P(B).
$$

L'indipendenza vale pur trattandosi di eventi relativi allo stesso lancio. Sapere che è uscito un multiplo di tre lascia due casi equiprobabili, uno pari e uno dispari. La probabilità di un pari resta quindi $\dfrac{1}{2}$.
:::

::::teorema{#indipendenza-complementari titolo="Indipendenza e complementari"}
Se $A$ e $B$ sono indipendenti, sono indipendenti anche le coppie $(A^c,B)$, $(A,B^c)$ e $(A^c,B^c)$. Questo permette di calcolare, per esempio, la probabilità che un dispositivo funzioni e un altro sia guasto quando i rispettivi eventi di funzionamento sono indipendenti.

:::dimostrazione
Si sottrae il peso di $A\cap B$ da quello di $B$. Poiché $A$ e $B$ sono indipendenti,

$$
\begin{aligned}
P(A^c\cap B)&=P(B)-P(A\cap B)\\[6pt]
&=P(B)\bigl(1-P(A)\bigr)=P(B)P(A^c).
\end{aligned}
$$

Scambiando i ruoli di $A$ e $B$ si ottiene il risultato per $(A,B^c)$. Si applica poi lo stesso passaggio a una di queste coppie per sostituire anche l'altro evento con il proprio complementare.
:::
::::

:::attenzione
Due eventi disgiunti con probabilità positiva sono dipendenti. In un solo lancio di dado gli eventi «esce $1$» ed «esce $2$» hanno intersezione vuota, quindi la sua probabilità è zero. Il prodotto delle due probabilità vale invece $\dfrac{1}{36}$. Se uno degli eventi ha probabilità zero, entrambi i membri dell'identità di indipendenza valgono zero.
:::

## Partizioni e probabilità totale

::::teorema{#totale titolo="Formula della probabilità totale"}
Siano $B_1,\ldots,B_r$ eventi a due a due disgiunti, con unione uguale a $\Omega$ e $P(B_i)>0$ per ciascun indice $i$. Si dice che formano una **partizione** dello spazio campionario. Per ogni evento $A$ vale

$$
P(A)=\sum_{i=1}^{r} P(A\mid B_i)P(B_i).
$$

Il termine $P(A\mid B_i)$ indica la frequenza di $A$ prevista nel gruppo $B_i$. Il peso $P(B_i)$ indica la quota del gruppo nel modello complessivo. La formula dà quindi una media ponderata delle probabilità condizionate.

:::dimostrazione
Ogni esito di $A$ si trova in un solo gruppo $B_i$. Perciò gli eventi $A\cap B_i$ sono disgiunti e la loro unione è $A$. Per additività, $P(A)$ è la somma dei pesi $P(A\cap B_i)$. Si applica la regola del prodotto a ciascuna intersezione, dato che tutti i $P(B_i)$ sono positivi.
:::
::::

:::esempio{titolo="Tre linee con produzioni diverse"}
Le linee $B_1$, $B_2$ e $B_3$ forniscono rispettivamente il $50\%$, il $30\%$ e il $20\%$ dei pezzi. Le quote di scarto sono rispettivamente il $2\%$, il $5\%$ e il $10\%$. Si seleziona un pezzo a caso e si indica con $S$ l'evento «il pezzo è scartato». Ogni pezzo è prodotto da una sola linea, quindi la probabilità totale vale

$$
\begin{aligned}
P(S)&=0{,}50\cdot0{,}02+0{,}30\cdot0{,}05+0{,}20\cdot0{,}10\\[6pt]
&=0{,}010+0{,}015+0{,}020=0{,}045.
\end{aligned}
$$

::grafico{xmin=-0.28 xmax=3.7 ymin=0 ymax=24 nomi="i,n" poligoni="0.72,0 1.28,0 1.28,10 0.72,10;1.72,0 2.28,0 2.28,15 1.72,15;2.72,0 3.28,0 3.28,20 2.72,20" etichette="0.94,11,10;1.94,16,15;2.94,21,20" titolo="Pezzi scartati attesi su 1000 pezzi prodotti. L’asse i indica la linea e n il numero di scarti. Le altezze sommano a 45."}

La prima linea produce più pezzi della terza, quindi i loro tassi di scarto hanno pesi diversi nel totale. Il valore $0{,}045$ è compreso tra $0{,}02$ e $0{,}10$, come deve accadere per una media ponderata con pesi positivi.
:::

:::osservazione
Se una categoria ha probabilità zero, anche la sua intersezione con $A$ ha probabilità zero. Si può quindi sommare direttamente la probabilità delle intersezioni, oppure usare la formula condizionata sulle sole categorie a peso positivo.

Una partizione con due gruppi $B$ e $B^c$ consente anche di ricavare un tasso mancante. Se $0<P(B)<1$ e sono noti $P(A)$, $P(B)$ e $P(A\mid B)$, dalla formula si isola

$$
P(A\mid B^c)=\frac{P(A)-P(A\mid B)P(B)}{1-P(B)}.
$$

Il numeratore è la quota di tutta la popolazione che appartiene ad $A\cap B^c$. La divisione per $P(B^c)$ esprime quella quota rispetto al gruppo esterno a $B$.
:::

## Inversione del condizionamento

::::teorema{#bayes titolo="Formula di Bayes"}
Siano $B_1,\ldots,B_r$ una partizione con probabilità positive e sia $P(A)>0$. Dopo avere osservato $A$, la probabilità del gruppo $B_j$ è

$$
P(B_j\mid A)
=\frac{P(A\mid B_j)P(B_j)}
       {\displaystyle\sum_{i=1}^{r}P(A\mid B_i)P(B_i)}.
$$

La quantità $P(B_j)$ è la probabilità **a priori** del gruppo. La quantità $P(B_j\mid A)$ è la probabilità **a posteriori**, calcolata dopo avere appreso che si è verificato $A$.

:::dimostrazione
Per definizione, $P(B_j\mid A)=\dfrac{P(B_j\cap A)}{P(A)}$. Si calcola il numeratore con la regola del prodotto nel gruppo $B_j$ e il denominatore con la formula della probabilità totale su tutti i gruppi.
:::
::::

:::esempio{titolo="Provenienza di un pezzo scartato"}
Nelle tre linee dell'esempio precedente il contributo della terza agli scarti è $P(S\cap B_3)=0{,}020$ e la probabilità complessiva di scarto è $0{,}045$. Tra i pezzi scartati la quota proveniente dalla terza linea è perciò

$$
P(B_3\mid S)=\frac{0{,}020}{0{,}045}=\frac{4}{9}.
$$

La terza linea fornisce un quinto della produzione, ma il suo tasso di scarto supera quello complessivo. Per questo il suo peso tra gli scarti, $\dfrac{4}{9}$, supera la quota di produzione.
:::

:::osservazione
Per ordinare le probabilità a posteriori di più gruppi dato lo stesso evento $A$, si possono confrontare soltanto i prodotti $P(A\mid B_i)P(B_i)$. Tutte le probabilità a posteriori hanno infatti lo stesso denominatore positivo $P(A)$. Una categoria più numerosa può quindi risultare più probabile dopo l'osservazione anche quando un'altra presenta un tasso interno più alto.

Per esempio, due linee hanno quote di produzione $0{,}9$ e $0{,}1$ e tassi di scarto $0{,}02$ e $0{,}10$. I pesi delle intersezioni con lo scarto sono $0{,}018$ e $0{,}010$. Un pezzo scartato proviene dunque più probabilmente dalla prima linea.
:::

:::esempio{titolo="Aggiornamento dopo due osservazioni"}
Si sceglie con uguale probabilità una tra due urne. La prima contiene tre palline rosse e una blu, la seconda una rossa e tre blu. Dall'urna scelta si estraggono due volte con reinserimento. Indicando con $B_1$ e $B_2$ la scelta dell'urna, la probabilità di due rosse dato $B_1$ è $\left(\dfrac34\right)^2$. Data $B_2$ è invece $\left(\dfrac14\right)^2$. Le due estrazioni sono indipendenti una volta fissata l'urna, perché ogni reinserimento ripristina la composizione del gruppo scelto.

$$
P(B_1\mid R_1\cap R_2)
=\frac{\tfrac12\cdot\tfrac9{16}}
       {\tfrac12\cdot\tfrac9{16}+\tfrac12\cdot\tfrac1{16}}
=\frac9{10}.
$$

Dopo una sola rossa, il rapporto tra i pesi delle due urne è $3$ a $1$ e la prima ha probabilità a posteriori $\dfrac34$. La seconda rossa porta il rapporto a $9$ a $1$. I due risultati riguardano la stessa urna, quindi l'informazione sulla prima estrazione modifica la probabilità attribuita alla scelta dell'urna e di conseguenza quella della seconda estrazione.
:::

## Classificatori e probabilità di base

:::definizione{#classificatori titolo="Sensibilità, specificità e valori predittivi"}
Sia $D$ l'evento «il pezzo è difettoso» e sia $T$ l'evento «il controllo segnala il pezzo». Quando i gruppi di riferimento hanno probabilità positiva, si definiscono le seguenti quantità.

- La **sensibilità** è $P(T\mid D)$, ossia la probabilità di segnalazione tra i difettosi.
- La **specificità** è $P(T^c\mid D^c)$, ossia la probabilità di assenza di segnalazione tra i regolari.
- Il valore predittivo positivo è $P(D\mid T)$ e quello negativo è $P(D^c\mid T^c)$. I due gruppi di riferimento sono rispettivamente i segnalati e i non segnalati.

La probabilità di falso positivo è $P(T\mid D^c)=1-P(T^c\mid D^c)$. La probabilità di falso negativo è $P(T^c\mid D)=1-P(T\mid D)$. Questi due complementari si riferiscono allo stato del pezzo.
:::

:::esempio{titolo="Un difetto raro e molte segnalazioni regolari"}
In un modello ipotetico la quota difettosa è $P(D)=0{,}02$. Il controllo ha sensibilità $0{,}90$ e specificità $0{,}95$. Su $10\,000$ pezzi, i conteggi attesi sono i seguenti.

| Stato | Segnalati | Non segnalati | Totale |
| --- | ---: | ---: | ---: |
| Difettosi | 180 | 20 | 200 |
| Regolari | 490 | 9310 | 9800 |
| Totale | 670 | 9330 | 10000 |

Tra i segnalati la quota difettosa è $\dfrac{180}{670}=\dfrac{18}{67}\approx0{,}269$. Tra i non segnalati la quota regolare è $\dfrac{9310}{9330}=\dfrac{931}{933}\approx0{,}998$. La base molto più ampia di pezzi regolari spiega perché i falsi positivi superano i veri positivi nonostante la specificità del $95\%$.
:::

:::osservazione
Siano $p=P(D)$ la quota difettosa, $s=P(T\mid D)$ la sensibilità e $f=P(T\mid D^c)$ la probabilità di falso positivo. Per $0<p<1$ e $P(T)>0$, Bayes dà

$$
P(D\mid T)=\frac{sp}{sp+f(1-p)}.
$$

Se $s=0{,}9$ e $f=0{,}05$ restano fissi e la quota iniziale sale dal $2\%$ al $10\%$, il numeratore sale da $0{,}018$ a $0{,}09$. Il denominatore al $10\%$ vale $0{,}09+0{,}045=0{,}135$, quindi il valore predittivo positivo raggiunge $\dfrac{2}{3}$. Lo stesso controllo può dunque avere valori predittivi diversi su produzioni con prevalenze diverse.

::grafico{f="0.9*x/(0.05+0.0085*x)" xmin=0 xmax=20 ymin=0 ymax=90 nomi="p,VPP" legenda=0 punti="2,26.865672;10,66.666667" segmenti="2,0,2,26.865672;10,0,10,66.666667" etichette="2.7,25,27%;10.8,63,67%" titolo="Valore predittivo positivo VPP in funzione della quota difettosa p, entrambi in percentuale. Il tasso di falso positivo è 5% e la sensibilità è 90%."}

:::

:::esempio{titolo="Quota difettosa necessaria per metà di segnalazioni corrette"}
Un controllo segnala $\dfrac45$ dei pezzi difettosi e $\dfrac15$ dei pezzi regolari. Si cerca la quota difettosa $p$ per cui, tra i segnalati, i difettosi costituiscono esattamente la metà. Per avere metà di segnalazioni corrette devono avere lo stesso peso i veri positivi e i falsi positivi. La condizione si scrive

$$
\frac45p=\frac15(1-p),
\qquad p=\frac15.
$$

Per verificare il risultato, su $100$ pezzi attesi se ne contano $20$ difettosi e $80$ regolari. Il controllo segnala $16$ pezzi da ciascuno dei due gruppi. Se la quota iniziale scende sotto $\dfrac15$, i veri positivi diminuiscono e i falsi positivi aumentano, quindi il valore predittivo positivo scende sotto $\dfrac12$.
:::

## Più eventi e indipendenza mutua

:::definizione{#mutua titolo="Indipendenza mutua"}
Gli eventi $A_1,\ldots,A_n$ sono **mutuamente indipendenti** se, per ogni sottoinsieme $I$ di almeno due indici, la probabilità dell'intersezione degli eventi scelti è il prodotto delle loro probabilità.

$$
P\left(\bigcap_{i\in I} A_i\right)=\prod_{i\in I}P(A_i).
$$

Per tre eventi si devono quindi verificare le tre identità relative alle coppie e quella relativa alla tripla. Se tre prove sono eseguite indipendentemente, la probabilità di successo in tutte e tre si ottiene moltiplicando le probabilità di successo delle singole prove.
:::

:::attenzione{titolo="Coppie indipendenti e tripla dipendente"}
Si lanciano due monete eque indipendenti. Siano $A$ l'evento «la prima moneta dà testa», $B$ l'evento «la seconda moneta dà testa» e $C$ l'evento «i due esiti coincidono». Ogni evento ha probabilità $\dfrac{1}{2}$. Ogni intersezione a coppie contiene il solo esito testa-testa e ha quindi probabilità $\dfrac{1}{4}$, uguale al prodotto delle rispettive probabilità.

Anche l'intersezione tripla contiene soltanto testa-testa, quindi ha probabilità $\dfrac{1}{4}$. Il prodotto delle tre probabilità è $\dfrac{1}{8}$. Le coppie sono indipendenti, mentre i tre eventi insieme non sono mutuamente indipendenti.
:::

:::esempio{titolo="Componenti in serie e in parallelo"}
Tre componenti funzionano indipendentemente con probabilità $p_1$, $p_2$ e $p_3$. Se il sistema funziona solo quando tutti sono operativi, l'affidabilità è $p_1p_2p_3$. Se è sufficiente un componente operativo, il sistema si guasta quando tutti si guastano, quindi l'affidabilità è $1-(1-p_1)(1-p_2)(1-p_3)$. La fattorizzazione per i tre guasti si ottiene espandendo il complementare comune per inclusione-esclusione e usando l'indipendenza mutua per tutte le intersezioni.

Con $p_1=0{,}9$, $p_2=0{,}8$ e $p_3=0{,}7$, la configurazione in serie ha affidabilità $0{,}504$. Nella configurazione in parallelo la probabilità di guasto totale è $0{,}1\cdot0{,}2\cdot0{,}3=0{,}006$, quindi l'affidabilità è $0{,}994$.
:::

:::esempio{titolo="Esattamente due componenti operativi"}
Tre componenti funzionano in modo mutuamente indipendente con probabilità $\dfrac12$, $\dfrac23$ e $\dfrac34$. Sia $F_i$ il funzionamento del componente $i$. Esattamente due componenti sono operativi quando si guasta il primo, il secondo oppure il terzo, con gli altri due funzionanti. Ogni configurazione ha un solo guasto e i tre casi sono quindi disgiunti.

$$
\begin{aligned}
P(F_1^c\cap F_2\cap F_3)&=\frac12\cdot\frac23\cdot\frac34=\frac14,\\[6pt]
P(F_1\cap F_2^c\cap F_3)&=\frac12\cdot\frac13\cdot\frac34=\frac18,\\[6pt]
P(F_1\cap F_2\cap F_3^c)&=\frac12\cdot\frac23\cdot\frac14=\frac1{12}.
\end{aligned}
$$

La somma è $\dfrac{11}{24}$. Se il sistema richiede *almeno* due componenti operativi, si aggiunge la configurazione in cui funzionano tutti e tre. Il suo peso è $\dfrac12\cdot\dfrac23\cdot\dfrac34=\dfrac14$, quindi l'affidabilità del sistema è $\dfrac{17}{24}$. Il passaggio da «esattamente» ad «almeno» modifica l'evento richiesto, mentre il peso di ogni configurazione resta lo stesso.
:::
