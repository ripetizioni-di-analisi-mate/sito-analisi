---
titolo: "Probabilità e calcolo combinatorio"
sommario: "Dagli eventi e dagli assiomi della probabilità ai conteggi con vincoli e alle estrazioni da una popolazione finita."
---

Questo capitolo mostra come si calcola la probabilità di un risultato prima di osservarlo, quando i risultati possibili sono in numero finito. Per esempio, un lotto contiene otto pezzi, di cui tre difettosi, e se ne scelgono tre a caso. Con i metodi del capitolo si ottiene che la probabilità di trovare esattamente un pezzo difettoso fra i tre è $\dfrac{15}{28}$, circa $0{,}54$, e che la probabilità di trovarne almeno uno è $\dfrac{23}{28}$, circa $0{,}82$.

Si elencano i risultati possibili, si assegna a ciascuno una probabilità e si sommano le probabilità dei risultati che interessano. Quando i risultati hanno tutti la stessa probabilità, la probabilità di un evento è il numero dei casi favorevoli diviso per il numero dei casi possibili, quindi il problema diventa contare. I campioni di tre pezzi estratti da otto sono $56$, mentre quelli di dieci pezzi estratti da cento sono circa diciassettemila miliardi, perciò la seconda metà del capitolo presenta il calcolo combinatorio, cioè le formule che danno questi numeri senza elencare i casi.

I capitoli 1 e 2 riassumono dati già raccolti, per esempio con la frequenza relativa; la probabilità si assegna invece prima di osservare il risultato. Con questo capitolo comincia la parte del corso sulla probabilità, dal capitolo 3 al 7, che serve a misurare l'errore che si commette quando si passa dal campione all'intera popolazione. Le probabilità del campione casuale semplice del capitolo 1, estratto senza reinserimento, si calcolano in questo capitolo. Il capitolo 4 studia come cambia una probabilità quando si conosce già una parte del risultato e introduce l'indipendenza. Il capitolo 5 usa i conteggi di questo capitolo per costruire le leggi binomiale e ipergeometrica, che tornano nell'inferenza statistica dei capitoli dall'8 al 12.

## Esiti, eventi e operazioni

:::definizione{#eventi titolo="Spazio campionario ed eventi"}
Si lancia due volte una moneta e si registra il risultato di ogni lancio, con $T$ per testa e $C$ per croce. Prima dei lanci si sa che uscirà una delle quattro sequenze $(T,T)$, $(T,C)$, $(C,T)$, $(C,C)$, ma non si sa quale. Un esperimento di cui si conoscono i risultati possibili, ma non quello che si otterrà, si chiama **esperimento aleatorio**. Sono esperimenti aleatori anche il lancio di un dado e l'estrazione di un pezzo da un lotto per controllarlo.

Ogni risultato possibile dell'esperimento si chiama esito, o esito elementare, e il singolo esito si indica con $\omega$, che si legge «omega». L'insieme di tutti gli esiti si chiama **spazio campionario** e si indica con $\Omega$, che si legge «omega maiuscola». Nei due lanci della moneta

$$
\Omega=\{(T,T),(T,C),(C,T),(C,C)\}.
$$

L'esito $(T,C)$ indica testa al primo lancio e croce al secondo, perciò è diverso dall'esito $(C,T)$.

Una domanda sul risultato, come «è uscita esattamente una testa?», individua gli esiti per i quali la risposta è sì. Un sottoinsieme $A$ dello spazio campionario, cioè un insieme $A\subseteq\Omega$, si chiama **evento**. In questo capitolo lo spazio campionario è sempre finito, e ogni suo sottoinsieme è un evento. L'evento «esattamente una testa» è

$$
A=\{(T,C),(C,T)\}.
$$

Si dice che l'evento $A$ si verifica quando l'esito osservato appartiene ad $A$. Con l'esito $(T,C)$ l'evento $A$ si verifica, con l'esito $(C,C)$ non si verifica.
:::

:::definizione{#operazioni-eventi titolo="Unione, intersezione e differenza"}
Con le operazioni fra insiemi si ottengono nuovi eventi. Siano $A$ e $B$ eventi definiti sullo stesso spazio campionario.

- L'intersezione $A\cap B$ raccoglie gli esiti comuni ai due eventi, quindi corrisponde a «si verificano sia $A$ sia $B$».
- L'unione $A\cup B$ raccoglie gli esiti che appartengono ad almeno uno dei due eventi, quindi corrisponde a «si verifica $A$ oppure $B$, o tutti e due».
- La differenza $A\setminus B$ raccoglie gli esiti di $A$ che non appartengono a $B$, quindi corrisponde a «si verifica $A$ e non si verifica $B$».
- Il complementare $A^c=\Omega\setminus A$ raccoglie tutti gli esiti per i quali $A$ non si verifica.

Il simbolo $\varnothing$ indica l'insieme vuoto. Come evento si chiama evento impossibile, perché non contiene esiti e quindi non si verifica mai; l'evento $\Omega$ si verifica sempre e si chiama evento certo.

Gli eventi $A$ e $B$ sono **incompatibili** quando $A\cap B=\varnothing$, cioè quando non possono verificarsi insieme. Nel lancio di un dado gli eventi «esce $1$» ed «esce un numero pari» sono incompatibili. Due eventi incompatibili si dicono anche disgiunti, che è il nome degli insiemi senza elementi in comune. Più eventi $A_1,\ldots,A_m$ sono a due a due incompatibili quando ogni coppia di eventi diversi fra loro è incompatibile, quindi nessun esito appartiene a due di essi.

Il simbolo $A\subseteq B$ indica che ogni esito di $A$ appartiene a $B$, quindi il verificarsi di $A$ implica quello di $B$.
:::

:::esempio{titolo="Eventi su un dado"}
Nel lancio di un dado a sei facce, sia $A=\{2,4,6\}$ l'evento «esce un numero pari» e sia $B=\{4,5,6\}$ l'evento «esce almeno $4$». L'esito $6$ soddisfa entrambe le condizioni, l'esito $5$ solo la seconda e l'esito $2$ solo la prima, mentre $1$ e $3$ sono esterni a entrambi gli eventi.

$$
A\cap B=\{4,6\},\qquad A\cup B=\{2,4,5,6\}.
$$

Allo stesso modo $A\setminus B=\{2\}$, $B\setminus A=\{5\}$ e $A^c=\{1,3,5\}$, che è l'evento «esce un numero dispari».

Il diagramma evidenzia gli esiti che soddisfano entrambe le condizioni; l'unione comprende anche le due regioni laterali.

::venn{zone="ab" nomi="A,B" elementi="a:2;ab:4,6;b:5;u:1,3" universo=1 ambiente="Ω" titolo="Pari e almeno quattro"}

:::

:::osservazione
Lo stesso esperimento si può descrivere con spazi campionari diversi. In tre lanci di una moneta si possono registrare le sequenze dei risultati, che sono otto:

$$
TTT,\quad TTC,\quad TCT,\quad CTT,\quad TCC,\quad CTC,\quad CCT,\quad CCC.
$$

Si può anche registrare soltanto il numero di teste, e allora lo spazio campionario è $\{0,1,2,3\}$. Questo secondo spazio non dice in quale lancio è uscita la testa.

Una moneta si dice regolare quando testa e croce hanno la stessa probabilità, $\dfrac12$; allo stesso modo un dado è regolare quando ciascuna delle sei facce ha probabilità $\dfrac16$. Più lanci si dicono indipendenti quando il risultato di un lancio non cambia le probabilità dei risultati degli altri. La definizione precisa di indipendenza è nel capitolo 4; in questo capitolo se ne usa una sola conseguenza. In lanci indipendenti di monete o di dadi regolari tutte le sequenze di risultati hanno la stessa probabilità, cioè sono equiprobabili. Lo stesso vale per ogni serie di prove indipendenti in cui i risultati di ciascuna prova hanno tutti la stessa probabilità.

Con tre lanci indipendenti di una moneta regolare, quindi, ciascuna delle otto sequenze ha probabilità $\dfrac18$. Il numero di teste $1$ raccoglie le tre sequenze $TCC$, $CTC$, $CCT$, il numero $2$ le tre sequenze $TTC$, $TCT$, $CTT$, mentre $0$ e $3$ raccolgono una sola sequenza ciascuno. I numeri di teste $0,1,2,3$ hanno perciò probabilità $\dfrac{1}{8}$, $\dfrac{3}{8}$, $\dfrac{3}{8}$ e $\dfrac{1}{8}$.

Nello spazio $\{0,1,2,3\}$ i quattro esiti non sono quindi equiprobabili, e le loro probabilità si ricavano dallo spazio delle sequenze. Lo stesso conteggio delle sequenze dà la legge binomiale del capitolo 5.

::grafico{xmin=-0.6 xmax=3.8 ymin=-0.04 ymax=0.48 nomi="k,p" linee="0,0 0,0.125;1,0 1,0.375;2,0 2,0.375;3,0 3,0.125" punti="0,0.125;1,0.375;2,0.375;3,0.125" etichette="0,0.17,0,125;1,0.42,0,375;2,0.42,0,375;3,0.17,0,125" titolo="Probabilità del numero $k$ di teste in tre lanci. I valori $1$ e $2$ corrispondono a tre sequenze ciascuno."}
:::

## Assiomi e assegnazione delle probabilità

:::definizione{#assiomi titolo="Assiomi della probabilità"}
Nel lancio di un dado regolare si assegna a ogni faccia la probabilità $\dfrac16$. All'evento «esce un numero pari», che contiene tre facce, si assegna la probabilità $\dfrac16+\dfrac16+\dfrac16=\dfrac12$, e all'evento certo $\Omega$, che contiene tutte e sei le facce, la probabilità $1$. Ripetendo molte volte il lancio, la frequenza relativa dei numeri pari, definita nel capitolo 1, si avvicina a $\dfrac12$, come stabilisce la legge dei grandi numeri del capitolo 8.

Sullo spazio campionario finito $\Omega$, una **probabilità** $P$ è una regola che associa a ogni evento $A$ un numero reale $P(A)$, che si legge «probabilità di $A$», in modo che valgano le tre proprietà seguenti, dette assiomi della probabilità.

- $P(A)\ge 0$ per ogni evento $A$.
- $P(\Omega)=1$.
- Se $A_1,\ldots,A_m$ sono eventi a due a due incompatibili, allora
  $$
  P\left(\bigcup_{i=1}^{m} A_i\right)=\sum_{i=1}^{m}P(A_i).
  $$

La terza proprietà si chiama additività. A sinistra c'è la probabilità dell'evento «si verifica uno degli $A_i$», a destra la somma delle loro probabilità. Nel dado, gli eventi «esce $1$» ed «esce un numero pari» sono incompatibili, perciò l'evento «esce $1$ oppure un numero pari» ha probabilità $\dfrac16+\dfrac12=\dfrac23$.

Su uno spazio infinito, come per le variabili continue del capitolo 6, si precisa anche quali sottoinsiemi sono eventi e si richiede l'additività per infiniti eventi incompatibili elencati come i numeri naturali; in questo capitolo lo spazio è sempre finito. Dai tre assiomi si ricavano tutte le formule del capitolo, come la formula del complementare e quella di inclusione ed esclusione.
:::

::::teorema{#masse-elementari titolo="Probabilità degli esiti elementari"}
Nel dado regolare la probabilità di «esce un numero pari» è la somma delle probabilità delle facce $2$, $4$, $6$. Il teorema afferma che su uno spazio finito ogni probabilità si calcola in questo modo.

Sia $\Omega=\{\omega_1,\ldots,\omega_N\}$ uno spazio con $N\ge 1$ esiti. A ogni esito $\omega_i$ si associ un numero $p_i\ge 0$, detto peso dell'esito, in modo che i pesi sommino a $1$, cioè $\sum_{i=1}^N p_i=1$. Allora la regola

$$
P(A)=\sum_{\omega_i\in A}p_i,
$$

che assegna a ogni evento $A$ la somma dei pesi dei suoi esiti, definisce una probabilità su $\Omega$. Viceversa, ogni probabilità su questo spazio si ottiene in questo modo, ponendo $p_i=P(\{\omega_i\})$, dove $\{\omega_i\}$ è l'evento formato dal solo esito $\omega_i$. Per calcolare la probabilità di un evento basta quindi conoscere le probabilità dei singoli esiti.

:::dimostrazione
L'idea consiste nello scomporre ogni evento nei suoi esiti. Si verificano prima i tre assiomi per la regola definita dalla somma. I pesi sono non negativi, quindi anche le loro somme lo sono. L'evento $\Omega$ contiene tutti gli esiti, perciò $P(\Omega)=\sum_{i=1}^N p_i=1$. Se gli eventi $A_1,\ldots,A_m$ sono a due a due incompatibili, ogni esito della loro unione appartiene a uno solo di essi, quindi la somma dei pesi sull'unione si spezza nella somma dei pesi su ciascun evento.

Viceversa, sia $P$ una probabilità. Ogni evento $A$ è l'unione degli eventi $\{\omega_i\}$ formati dai suoi singoli esiti, e questi eventi sono a due a due incompatibili. Per additività $P(A)$ è perciò la somma delle probabilità $p_i=P(\{\omega_i\})$. I numeri $p_i$ sono non negativi per il primo assioma e hanno somma $P(\Omega)=1$ per il secondo.
:::
::::

:::esempio{titolo="Tre esiti con probabilità diverse"}
Una ruota ha tre settori $R,S,T$ con probabilità rispettivamente $\dfrac{1}{2}$, $\dfrac{1}{3}$ e $\dfrac{1}{6}$. I pesi sommano a $1$, perché $\dfrac36+\dfrac26+\dfrac16=1$. L'evento $A=\{R,T\}$ ha probabilità

$$
P(A)=\frac{1}{2}+\frac{1}{6}=\frac{2}{3}.
$$

L'evento $A$ contiene due esiti su tre, e il valore $\dfrac23$ coincide per caso con la quota di esiti. L'evento $\{S,T\}$ contiene anch'esso due esiti, ma ha probabilità $\dfrac13+\dfrac16=\dfrac{1}{2}$.
:::

::::teorema{#complementare titolo="Complementare e monotonia"}
Nel lancio di un dado regolare, la probabilità di «non esce $6$» è $1-\dfrac16=\dfrac56$. Inoltre l'evento «esce $6$» è incluso in «esce un numero pari», e infatti $\dfrac16\le\dfrac12$. Le due regole valgono in generale.

Per ogni evento $A$ vale

$$
P(A^c)=1-P(A).
$$

Se $A\subseteq B$, allora $P(A)\le P(B)$; questa proprietà si chiama monotonia. In particolare, $P(\varnothing)=0$ e $0\le P(A)\le 1$ per ogni evento $A$.

La formula del complementare si usa quando il caso opposto contiene meno esiti dell'evento richiesto, come «nessuna testa» rispetto ad «almeno una testa».

:::dimostrazione
L'evento $A$ e il suo complementare sono incompatibili e la loro unione è $\Omega$. Per additività $P(A)+P(A^c)=P(\Omega)=1$, da cui segue la formula.

Se $A\subseteq B$, gli eventi $A$ e $B\setminus A$ sono incompatibili e la loro unione è $B$. Per additività $P(B)=P(A)+P(B\setminus A)$, e $P(B\setminus A)\ge0$ per il primo assioma, perciò $P(B)\ge P(A)$.

Infine $\varnothing=\Omega^c$, quindi $P(\varnothing)=1-P(\Omega)=0$. Ogni evento è incluso in $\Omega$, perciò $P(A)\le P(\Omega)=1$ per monotonia, mentre $P(A)\ge0$ per il primo assioma.

::venn{tipo="incluso" nomi="B,A" zone="a" universo=1 ambiente="Ω" titolo="Se $A\subseteq B$, l'evento $B$ è unione dei due eventi incompatibili $A$ e $B\setminus A$, colorato."}
:::
::::

:::esempio{titolo="Almeno un esito favorevole"}
Si lancia quattro volte una moneta regolare, con lanci indipendenti. Ogni lancio ha due risultati, quindi le sequenze possibili sono $2\cdot2\cdot2\cdot2=2^4=16$, e sono equiprobabili. L'unica sequenza priva di teste è $(C,C,C,C)$, che ha probabilità $\dfrac{1}{16}$. L'evento «almeno una testa» è il complementare di quella sequenza, perciò per la formula del complementare ha probabilità

$$
1-\frac{1}{16}=\frac{15}{16}.
$$
:::

:::definizione{#partizione titolo="Partizione dello spazio campionario"}
Nel lancio di un dado, i tre eventi «esce $1$ o $2$», «esce $3$ o $4$», «esce $5$ o $6$» non hanno esiti in comune e insieme contengono tutte le facce. Qualunque sia l'esito, quindi, si verifica uno e uno solo dei tre eventi.

Una **partizione** di $\Omega$ è una famiglia di eventi non vuoti, a due a due incompatibili, la cui unione è $\Omega$. Ogni esito appartiene perciò a uno e un solo evento della famiglia; gli eventi della partizione si chiamano anche parti o celle. Se si conoscono le probabilità delle parti, la probabilità di un evento formato da alcune parti intere si ottiene, per additività, sommando le loro probabilità.

Le partizioni servono nel capitolo sulla probabilità condizionata per distinguere le possibili origini di uno stesso risultato. Per esempio, se un pezzo difettoso può provenire da una di tre macchine, i tre eventi «prodotto dalla macchina $1$», «dalla macchina $2$», «dalla macchina $3$» formano una partizione.
:::

:::esempio{titolo="Classi di esito incompatibili"}
Un lotto può essere accettato, riesaminato oppure respinto. Se il procedimento assegna a ogni lotto uno solo di questi tre esiti, le tre categorie formano una partizione. Con probabilità di riesame $0{,}12$ e di rifiuto $0{,}08$, la probabilità che il lotto non venga accettato al primo controllo è $0{,}12+0{,}08=0{,}20$. La somma è giustificata dall'additività, perché nessun lotto è classificato contemporaneamente nelle due categorie. L'accettazione è il complementare di «non accettato», quindi la sua probabilità è $1-0{,}20=0{,}80$.

::grafico{assi=0 uguale=1 xmin=-0.3 xmax=10.3 ymin=-1.1 ymax=4.2 poligoni="8,0 9.2,0 9.2,3 8,3;9.2,0 10,0 10,3 9.2,3" linee="0,0 10,0 10,3 0,3 0,0;8,0 8,3;9.2,0 9.2,3" segmenti="8.6,3,8.6,3.45;9.6,0,9.6,-0.45" etichette="2.6,1.5,Accettato  0,80;6.4,3.75,Riesame  0,12;8.1,-0.8,Respinto  0,08" titolo="Le tre categorie formano una partizione di Ω. La parte colorata è l'evento «non accettato», di probabilità $0{,}12+0{,}08=0{,}20$."}
:::

:::osservazione
Con $n$ lanci indipendenti di una moneta regolare le sequenze sono $2^n$, tutte equiprobabili, e una sola è priva di teste, quindi per la formula del complementare

$$
P(\text{almeno una testa})=1-\frac{1}{2^n}.
$$

Lo stesso schema vale per $n$ prove ripetute con due risultati possibili, chiamati successo e insuccesso, quando ogni prova dà successo con la stessa probabilità $p$ e le prove sono indipendenti. Il capitolo 4 dimostra che in questo caso la probabilità di nessun successo è il prodotto delle $n$ probabilità di insuccesso, cioè $(1-p)^n$. Per il complementare si ha quindi

$$
P(\text{almeno un successo})=1-(1-p)^n.
$$

Con tre prove e $p=0{,}2$, per esempio, si ottiene $1-0{,}8^3=1-0{,}512=0{,}488$. Con $p=\dfrac12$ si ritrova la formula della moneta, perché $\left(1-\dfrac12\right)^n=\dfrac{1}{2^n}$.
:::

## Unioni di eventi sovrapposti

::::teorema{#inclusione-esclusione titolo="Formula di inclusione ed esclusione"}
Nel lancio di un dado regolare siano $A=\{2,4,6\}$ l'evento «esce un numero pari» e $B=\{4,5,6\}$ l'evento «esce almeno $4$». La somma $P(A)+P(B)=\dfrac36+\dfrac36=1$ è diversa da $P(A\cup B)=\dfrac46$, perché gli esiti $4$ e $6$, comuni ai due eventi, sono stati contati due volte. Togliendo una volta la loro probabilità, $P(A\cap B)=\dfrac26$, si ottiene $1-\dfrac26=\dfrac46$, che è il valore giusto.

Per due eventi $A,B$ sullo stesso spazio vale in generale

$$
P(A\cup B)=P(A)+P(B)-P(A\cap B).
$$

La formula si usa anche al contrario, quando si conosce la probabilità dell'unione e si vuole ricavare quella dell'intersezione.

:::dimostrazione
L'idea è separare la parte comune. Gli eventi $A\setminus B$, $A\cap B$ e $B\setminus A$ sono a due a due incompatibili. Per additività

$$
\begin{aligned}
P(A)&=P(A\setminus B)+P(A\cap B),\\[6pt]
P(B)&=P(B\setminus A)+P(A\cap B),\\[6pt]
P(A\cup B)&=P(A\setminus B)+P(A\cap B)+P(B\setminus A),
\end{aligned}
$$

perché $A$ è l'unione dei primi due eventi, $B$ è l'unione degli ultimi due e $A\cup B$ è l'unione di tutti e tre. Sommando le prime due uguaglianze, $P(A)+P(B)$ contiene una volta le probabilità delle due regioni esterne e due volte quella dell'intersezione. Sottraendo una volta $P(A\cap B)$ si ottiene quindi la terza riga, cioè $P(A\cup B)$.
:::
::::

:::esempio{titolo="Due controlli sullo stesso componente"}
Da un lotto si seleziona un componente. La probabilità che superi il limite di massa è $0{,}08$, quella che superi il limite di diametro è $0{,}10$ e quella che superi entrambi è $0{,}03$. L'evento «supera almeno un limite» è l'unione dei due eventi, quindi ha probabilità

$$
0{,}08+0{,}10-0{,}03=0{,}15.
$$

La probabilità di superare un solo limite è $0{,}15-0{,}03=0{,}12$, perché l'unione comprende anche i componenti che li superano entrambi. La probabilità di restare entro entrambi i limiti è quella del complementare dell'unione, $1-0{,}15=0{,}85$.
:::

:::osservazione
Per tre eventi $A,B,C$ la formula diventa

$$
\begin{aligned}
P(A\cup B\cup C)={}&P(A)+P(B)+P(C)\\[6pt]
&-P(A\cap B)-P(A\cap C)-P(B\cap C)\\[6pt]
&+P(A\cap B\cap C).
\end{aligned}
$$

Un esito comune a tutti e tre gli eventi compare nelle tre probabilità singole e nelle tre intersezioni a coppie, che si sottraggono; con l'ultimo termine è contato $3-3+1=1$ volta. Un esito comune a due soli eventi compare in due probabilità singole e in una sola intersezione a coppie, quindi è contato $2-1=1$ volta.

La stessa scomposizione vale per i conteggi. Il numero di elementi di un insieme finito $A$ si chiama cardinalità di $A$ e si indica con $|A|$. Tra $40$ iscritti, $18$ seguono un laboratorio, $13$ un seminario e $9$ un corso integrativo. Le intersezioni a coppie, cioè laboratorio e seminario, laboratorio e corso, seminario e corso, hanno rispettivamente $5$, $4$ e $3$ iscritti, e $2$ iscritti seguono tutte e tre le attività. Gli iscritti che seguono almeno un'attività sono allora $18+13+9-5-4-3+2=30$, e quelli che non ne seguono nessuna sono $40-30=10$.

::venn{tipo="tre" zone="a,b,c,ab,ac,bc,abc" nomi="L,S,C" elementi="a:11;b:7;c:4;ab:3;ac:2;bc:1;abc:2;u:10" universo=1 ambiente="Ω" titolo="Le regioni dell’unione contano 30 iscritti a laboratorio, seminario o corso. Ogni numero è riferito a una regione disgiunta."}
:::

## Equiprobabilità e scelta degli esiti

:::definizione{#equiprobabilita titolo="Modello finito equiprobabile"}
Nel lancio di un dado regolare l'evento «esce un numero pari» contiene tre facce su sei e ha probabilità $\dfrac36$, che si ottiene contando le facce.

Gli esiti di uno spazio finito si dicono **equiprobabili** quando hanno tutti la stessa probabilità. Sia $\Omega$ uno spazio con $N\ge 1$ esiti equiprobabili. Le probabilità degli $N$ esiti sono uguali e sommano a $1$, perciò ogni esito ha probabilità $\dfrac{1}{N}$. Per il teorema sulle probabilità degli esiti elementari, $P(A)$ è la somma di $|A|$ termini uguali a $\dfrac1N$, dove $|A|$ è la cardinalità di $A$, cioè il numero dei suoi esiti. Si ottiene

$$
P(A)=\frac{|A|}{|\Omega|},
$$

cioè il numero dei casi favorevoli diviso per il numero dei casi possibili.

Numeratore e denominatore vanno contati sullo stesso spazio campionario, con la stessa scelta sull'ordine e sulle ripetizioni. Se gli esiti del lancio di due dadi sono coppie ordinate, come $(2,5)$ e $(5,2)$, anche gli esiti favorevoli si contano come coppie ordinate. Il calcolo di una probabilità si riduce così a due conteggi, che sono l'oggetto del calcolo combinatorio.
:::

:::esempio{titolo="Somme di due dadi"}
Si lanciano due dadi regolari e indipendenti. Un esito è la coppia ordinata $(i,j)$ dei valori, con $i$ sul primo dado e $j$ sul secondo. Le coppie sono $6\cdot6=36$ e sono equiprobabili. La somma $7$ si realizza con le sei coppie $(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)$, quindi ha probabilità $\dfrac{6}{36}=\dfrac{1}{6}$. Per la somma $11$ le coppie possibili sono $(5,6)$ e $(6,5)$, quindi la probabilità è $\dfrac{2}{36}=\dfrac{1}{18}$.
:::

:::attenzione{titolo="Esiti raggruppati con pesi diversi"}
Le undici somme possibili di due dadi regolari non sono equiprobabili. La somma $2$ ha una sola coppia favorevole, $(1,1)$, mentre la somma $3$ ne ha due, $(1,2)$ e $(2,1)$. Se si registrano direttamente le somme, a ciascuna somma va quindi attribuita la probabilità totale delle coppie che la producono. Lo stesso accade se si raggruppano le coppie senza tenere conto dell'ordine. La coppia di valori diversi $\{2,5\}$ corrisponde a due coppie ordinate, $(2,5)$ e $(5,2)$, mentre il doppio $2$ corrisponde alla sola coppia $(2,2)$.

Sia $S$ la somma dei due dadi, e sia $P(S=s)$ la probabilità che la somma valga $s$. Una grandezza come $S$, che assume un valore numerico per ogni esito, si chiama variabile aleatoria e si studia nel capitolo 5. Per $s$ compreso tra $2$ e $12$, il numero di coppie ordinate con somma $s$ è $6-|s-7|$; per $s=7$, per esempio, vale $6-0=6$. Le probabilità delle somme crescono quindi da $\dfrac{1}{36}$ a $\dfrac{6}{36}$ e poi decrescono in modo simmetrico.

::grafico{xmin=0.6 xmax=12.8 ymin=-0.4 ymax=7 nomi="s,N" linee="2,0 2,1;3,0 3,2;4,0 4,3;5,0 5,4;6,0 6,5;7,0 7,6;8,0 8,5;9,0 9,4;10,0 10,3;11,0 11,2;12,0 12,1" punti="2,1;3,2;4,3;5,4;6,5;7,6;8,5;9,4;10,3;11,2;12,1" titolo="Numero $N$ di coppie ordinate con somma $s$. Dividendo per $36$ si ottiene $P(S=s)$, che per $s=7$ vale $\dfrac{6}{36}=\dfrac{1}{6}$ e per $s=2$ vale $\dfrac{1}{36}$."}
:::

:::osservazione
Da un'urna con tre sfere rosse e una blu si estrae una sfera, dopo averle mescolate in modo che ciascuna delle quattro sfere abbia la stessa probabilità di uscire. Un'estrazione in cui ogni oggetto presente ha la stessa probabilità di essere estratto si dice **uniforme**.

I colori possibili sono due, ma i due colori non sono equiprobabili. Dando un nome a ogni sfera, $R_1$, $R_2$, $R_3$ per le rosse e $B$ per la blu, lo spazio campionario è $\{R_1,R_2,R_3,B\}$ e i quattro esiti sono equiprobabili. L'evento «esce una rossa» è $\{R_1,R_2,R_3\}$, perciò ha probabilità $\dfrac{3}{4}$, e la blu ha probabilità $\dfrac14$.

L'equiprobabilità si stabilisce quindi sui singoli oggetti, ai quali si dà un nome anche quando il dato osservato è solo il colore. Lo stesso accorgimento si usa per le permutazioni con oggetti indistinguibili e per le estrazioni da un lotto.
:::

## Scelte per stadi e permutazioni

::::teorema{#principio-prodotto titolo="Principio del prodotto"}
Un esito si costruisce con $k$ scelte successive. La prima scelta si fa in $a_1$ modi. Qualunque sia la prima scelta, la seconda si fa in $a_2$ modi, e così via fino alla $k$-esima scelta, che si fa in $a_k$ modi. Allora il numero degli esiti completi è

$$
a_1a_2\cdots a_k.
$$

Le opzioni disponibili a un passo possono dipendere dalle scelte precedenti, purché il loro *numero* resti lo stesso. Con le lettere $A$, $B$, $C$ si formano sequenze di due lettere diverse. Se la prima lettera è $A$, la seconda è $B$ oppure $C$; se la prima è $B$, la seconda è $A$ oppure $C$. Le lettere ammesse al secondo posto cambiano, ma sono sempre due, quindi le sequenze sono $3\cdot2=6$. Dal principio del prodotto si ricavano le formule delle permutazioni, delle disposizioni e delle combinazioni.

:::dimostrazione
Dopo la prima scelta ci sono $a_1$ sequenze parziali, una per ogni prima scelta. Ciascuna si prolunga con la seconda scelta in $a_2$ modi, quindi dopo due scelte le sequenze parziali sono $a_1a_2$. Ogni sequenza di due scelte si prolunga in $a_3$ modi, perciò dopo tre scelte le sequenze sono $a_1a_2a_3$. Ripetendo l'argomento fino alla scelta $k$ si ottiene il prodotto indicato.
:::

Gli esiti si rappresentano con un albero delle scelte. Dal punto iniziale partono $a_1$ rami, e ogni ramo si divide a sua volta in $a_2$ rami. Ogni livello dell'albero corrisponde a una scelta e ogni punto finale, detto foglia, corrisponde a un esito completo. Con $a_1=2$ e $a_2=3$ ciascuno dei due rami del primo livello si divide in tre, perciò le foglie sono $2\cdot3=6$.

::grafico{assi=0 uguale=1 xmin=-0.6 xmax=7.4 ymin=0 ymax=6 linee="0,3 3,4.5;0,3 3,1.5;3,4.5 6,5.5;3,4.5 6,4.5;3,4.5 6,3.5;3,1.5 6,2.5;3,1.5 6,1.5;3,1.5 6,0.5" punti="0,3;3,4.5;3,1.5;6,5.5;6,4.5;6,3.5;6,2.5;6,1.5;6,0.5" etichette="3,5,a;3,1,b;6.6,5.5,a1;6.6,4.5,a2;6.6,3.5,a3;6.6,2.5,b1;6.6,1.5,b2;6.6,0.5,b3" titolo="Albero delle scelte con $a_1=2$ e $a_2=3$. Le sei foglie sono gli esiti completi."}
::::

:::esempio{titolo="Un codice con cifre distinte"}
Un codice ha tre cifre distinte e la prima deve essere diversa da zero. Per il primo posto ci sono $9$ scelte, le cifre da $1$ a $9$. Al secondo posto si può usare anche lo zero, ma si esclude la cifra già scelta, perciò ci sono ancora $9$ possibilità. Al terzo posto si escludono le due cifre già usate e restano $8$ cifre. Il totale è $9\cdot9\cdot8=648$. Le cifre disponibili al secondo posto cambiano con la prima cifra, ma il loro numero è sempre $9$, quindi il principio del prodotto si applica.
:::

:::definizione{#permutazioni titolo="Permutazioni di oggetti distinti"}
Tre libri $A$, $B$, $C$ si possono mettere in fila su uno scaffale in sei modi:

$$
ABC,\quad ACB,\quad BAC,\quad BCA,\quad CAB,\quad CBA.
$$

Una **permutazione** di $n$ oggetti distinti è un ordinamento che usa tutti gli oggetti una volta ciascuno. La prima posizione si può occupare con uno qualunque degli $n$ oggetti, la seconda con uno degli $n-1$ rimasti, e così via fino all'ultima, che riceve l'unico oggetto rimasto. Per il principio del prodotto il numero di permutazioni è quindi

$$
n!=n(n-1)\cdots 2\cdot 1.
$$

Il simbolo $n!$ si legge «$n$ fattoriale»; per i tre libri $3!=3\cdot2\cdot1=6$. Si pone $0!=1$, perché esiste un solo ordinamento dell'insieme vuoto, quello che non occupa alcuna posizione. Il fattoriale cresce in fretta, per esempio $10!=3\,628\,800$, perciò gli ordinamenti si contano con la formula.
:::

:::esempio{titolo="Una coppia di oggetti consecutivi"}
Cinque libri distinti vanno ordinati su uno scaffale. Due volumi della stessa collana devono stare vicini. I due volumi si trattano come un unico blocco, quindi si ordinano quattro unità, cioè il blocco e gli altri tre libri, in $4!=24$ modi. All'interno del blocco i due volumi si possono disporre in due ordini, perciò gli ordinamenti richiesti sono $4!\cdot 2=48$. Il conto non ripete nessun ordinamento, perché ogni ordinamento ammesso corrisponde a un solo ordine delle quattro unità e a un solo ordine dei due volumi nel blocco.
:::

::::teorema{#permutazioni-ripetute titolo="Permutazioni con oggetti indistinguibili"}
Con le lettere della parola ORO si formano le parole $ORO$, $OOR$, $ROO$, cioè tre parole. Se si distinguono le due O come $O_1$ e $O_2$, gli ordinamenti sono $3!=6$; scambiando $O_1$ e $O_2$ si ottiene però la stessa parola, perciò le parole distinte sono $\dfrac{6}{2}=3$.

Si ordinano $n$ oggetti divisi in $r$ gruppi. Nel gruppo $i$ vi sono $n_i$ oggetti indistinguibili, cioè uguali fra loro come le due O di ORO, e $n_1+\cdots+n_r=n$. Il numero di ordinamenti distinguibili è

$$
\frac{n!}{n_1!\cdots n_r!}.
$$

Per esempio, le lettere di MAMMA, cioè tre M e due A, danno $\dfrac{5!}{3!\,2!}=\dfrac{120}{12}=10$ parole distinte.

:::dimostrazione
Si assegna provvisoriamente un'etichetta diversa a ciascun oggetto, come $O_1$ e $O_2$. Gli oggetti diventano tutti distinti, quindi si ottengono $n!$ ordinamenti. Si fissi un ordinamento senza etichette. Le posizioni occupate dal gruppo $i$ sono determinate, ma le $n_i$ etichette di quel gruppo si possono disporre in quelle posizioni in $n_i!$ modi. I modi di disporre le etichette di gruppi diversi si combinano con il principio del prodotto, quindi ogni ordinamento senza etichette corrisponde esattamente a $n_1!\cdots n_r!$ ordinamenti etichettati. Dividendo $n!$ per questo numero si conta perciò ogni ordinamento senza etichette una sola volta.
:::
::::

## Disposizioni e combinazioni

:::definizione{#disposizioni titolo="Disposizioni di lunghezza fissata"}
Con le cifre $1$, $2$, $3$ si formano codici di due cifre. Se le cifre si possono ripetere, i codici sono $3\cdot3=9$, cioè $11,12,13,21,22,23,31,32,33$. Se le due cifre devono essere distinte, i codici sono $3\cdot2=6$, cioè $12,13,21,23,31,32$.

Una **disposizione** di lunghezza $k$ è una sequenza ordinata di $k$ elementi scelti da un insieme di $n\ge 1$ elementi. Se si ammette la ripetizione, ogni posto dispone di $n$ opzioni e il numero delle disposizioni è $n^k$. Se gli elementi devono essere distinti, occorre $0\le k\le n$, e il numero delle disposizioni, che si indica con $D_{n,k}$, è

$$
D_{n,k}=n(n-1)\cdots(n-k+1)=\frac{n!}{(n-k)!}.
$$

Il prodotto $n(n-1)\cdots(n-k+1)$ ha $k$ fattori, uno per ogni posto. Con $k=0$ le due formule danno $n^0=1$ e $\dfrac{n!}{n!}=1$, cioè la sola sequenza vuota. Per esempio, assegnare tre ruoli distinti a tre persone diverse scelte fra sette dà $D_{7,3}=7\cdot6\cdot5=210$ disposizioni, mentre le sequenze di tre cifre da $0$ a $9$, con ripetizioni, sono $10^3=1000$. Le disposizioni contano quindi le scelte in cui due sequenze con gli stessi elementi in ordine diverso sono esiti diversi, come i ruoli di una commissione o le cifre di un codice.
:::

::::teorema{#combinazioni titolo="Combinazioni senza ripetizione"}
Fra quattro persone $A$, $B$, $C$, $D$ si sceglie una coppia senza incarichi. Le coppie sono sei, cioè $\{A,B\}$, $\{A,C\}$, $\{A,D\}$, $\{B,C\}$, $\{B,D\}$, $\{C,D\}$. Le sequenze ordinate di due persone distinte sono invece $D_{4,2}=4\cdot3=12$, perché ogni coppia, per esempio $\{A,B\}$, compare due volte, come $AB$ e come $BA$. Si ha quindi $\dfrac{12}{2}=6$.

Per $0\le k\le n$, il numero di sottoinsiemi di $k$ elementi di un insieme di $n$ elementi è

$$
\binom{n}{k}=\frac{n!}{k!(n-k)!}.
$$

Il simbolo $\binom{n}{k}$ si legge «$n$ su $k$» e si chiama **coefficiente binomiale**. Il coefficiente binomiale conta le scelte di $k$ oggetti distinti in cui interessa solo quali oggetti sono scelti, e non il loro ordine. Una commissione di tre membri senza incarichi, formata fra otto candidati, si può scegliere in $\binom{8}{3}=\dfrac{8\cdot7\cdot6}{3\cdot2\cdot1}=56$ modi. I coefficienti binomiali contano i campioni estratti da un lotto e tornano nella legge binomiale del capitolo 5.

:::dimostrazione
Si contano prima le sequenze ordinate di $k$ elementi distinti, che sono $D_{n,k}$. Per ogni sottoinsieme di $k$ elementi esistono $k!$ sequenze che ne usano tutti gli elementi, una per ogni ordine. Sequenze che provengono da sottoinsiemi diversi sono diverse, quindi le $D_{n,k}$ sequenze si dividono in gruppi disgiunti di $k!$ sequenze, uno per ogni sottoinsieme. Perciò $D_{n,k}=k!\binom{n}{k}$, e dividendo $D_{n,k}=\dfrac{n!}{(n-k)!}$ per $k!$ si ottiene la formula.
:::
::::

:::osservazione
Scegliere $k$ elementi determina anche quali $n-k$ si lasciano fuori, quindi $\binom{n}{k}=\binom{n}{n-k}$. Per esempio $\binom83=\binom85=56$.

Inoltre si possono contare i sottoinsiemi separatamente, a seconda che contengano o no un elemento fissato. Nel primo caso si scelgono gli altri $k-1$ elementi tra gli altri $n-1$. Nel secondo caso si scelgono tutti i $k$ elementi tra gli altri $n-1$. I due casi sono incompatibili e coprono tutti i sottoinsiemi, perciò per $1\le k<n$ si ha

$$
\binom{n}{k}=\binom{n-1}{k-1}+\binom{n-1}{k}.
$$

Questa uguaglianza si chiama formula di Pascal. Con $n=6$ e $k=2$, le coppie che contengono l'elemento fissato sono $\binom51=5$ e quelle che lo escludono sono $\binom52=10$. Si ottiene quindi $5+10=15=\binom62$.
:::

:::esempio{titolo="Posizioni di un simbolo in una sequenza"}
Una stringa di sette simboli contiene esattamente tre A e quattro B. Basta scegliere i tre posti occupati dalle A, perché tutti i posti rimanenti contengono B. Le posizioni delle A sono un sottoinsieme di tre dei sette posti, quindi le stringhe sono $\binom{7}{3}=35$. Le stringhe sono ordinate, ma l'insieme dei posti delle A si conta senza ordine. Lo stesso numero si ottiene con la formula delle permutazioni con oggetti indistinguibili, dividendo le $7!$ permutazioni etichettate per $3!\,4!$, perché $\dfrac{5040}{6\cdot24}=35$.
:::

## Conteggi con restrizioni

:::osservazione
Quando il numero di possibilità a un passo dipende dalle scelte precedenti, il principio del prodotto non si applica direttamente. L'insieme da contare si divide allora in casi incompatibili, che insieme coprono tutte le configurazioni richieste; ogni caso si conta con il principio del prodotto o con le combinazioni, e i risultati si sommano.

Per esempio, fra quattro tecnici e tre amministrativi si sceglie una commissione di tre persone con almeno due tecnici. Le commissioni con esattamente due tecnici sono $\binom42\binom31=18$ e quelle con tre tecnici sono $\binom43=4$, quindi il totale è $18+4=22$.

Se è più breve contare i casi esclusi, si sottraggono dal totale senza vincoli. Le commissioni senza vincoli sono $\binom73=35$; quelle con meno di due tecnici sono $\binom33=1$, senza tecnici, e $\binom41\binom32=12$, con un tecnico. Si ritrova $35-1-12=22$.
:::

:::esempio{titolo="Cifra finale pari e prima cifra non nulla"}
Si formano numeri di tre cifre distinte usando $0,1,2,3,4$. Un numero è pari quando l'ultima cifra è $0$, $2$ oppure $4$. Se l'ultima cifra è $0$, la prima ha $4$ scelte, le cifre da $1$ a $4$, e la seconda ne ha $3$. Se l'ultima è $2$ o $4$, la prima può essere solo una delle altre tre cifre non nulle e la seconda ha $3$ scelte, perché si escludono le due cifre già usate ma si può usare lo zero. I due casi sono disgiunti, quindi il totale è

$$
4\cdot3+2\cdot3\cdot3=12+18=30.
$$

La distinzione tra zero e cifra pari non nulla è necessaria, perché la cifra finale cambia il numero di cifre che possono occupare il primo posto.

::grafico{assi=0 xmin=0 xmax=10.5 ymin=0.4 ymax=5.8 linee="2.4,3 3.6,4.4 6.9,4.4;2.4,3 3.6,1.6 6.9,1.6" etichette="0.15,3,Ultima cifra;3.85,4.75,Ultima 0;3.85,1.95,Ultima 2 o 4;7.2,4.3,4 × 3 = 12;7.2,1.5,2 × 3 × 3 = 18" titolo="I 12 numeri che terminano con 0 si sommano ai 18 che terminano con 2 o 4."}
:::

:::esempio{titolo="Una commissione con due profili"}
Tra cinque tecnici e quattro amministrativi si scelgono quattro persone con almeno un rappresentante di ciascun profilo. Le selezioni possibili senza vincoli sono $\binom{9}{4}=126$. Tra queste, $\binom{5}{4}=5$ usano soltanto tecnici e $\binom{4}{4}=1$ usa soltanto amministrativi. I due casi da escludere sono incompatibili, quindi il numero richiesto è $126-5-1=120$.

Lo stesso totale si ottiene contando le composizioni con uno, due o tre tecnici, scegliendo ogni volta anche gli amministrativi che completano la commissione. Si ha $\binom51\binom43+\binom52\binom42+\binom53\binom41=20+60+40=120$.
:::

## Estrazioni senza reinserimento

::::teorema{#estrazioni titolo="Campioni uniformi senza reinserimento"}
Si estraggono oggetti uno alla volta da una popolazione finita, per esempio pezzi da un lotto. L'estrazione è **senza reinserimento** quando l'oggetto estratto non viene rimesso nella popolazione, quindi non può uscire una seconda volta. È invece con reinserimento quando l'oggetto viene rimesso prima dell'estrazione successiva. In questo teorema ogni estrazione è uniforme, cioè ciascuno degli oggetti ancora presenti ha la stessa probabilità di uscire.

In una popolazione di $N$ oggetti distinti, $R$ possiedono una certa caratteristica e $N-R$ ne sono privi. Si estraggono $n$ oggetti senza reinserimento, con $0\le n\le N$. Sia $K$ il numero di oggetti estratti che hanno la caratteristica, e sia $P(K=k)$ la probabilità che questi oggetti siano esattamente $k$. Per ogni intero $k$ compreso tra $\max(0,n-N+R)$ e $\min(n,R)$ vale

$$
P(K=k)=\frac{\binom{R}{k}\binom{N-R}{n-k}}{\binom{N}{n}}.
$$

I due limiti di $k$ si leggono così. Il limite superiore dice che $k$ non supera né il numero $n$ di oggetti estratti né il numero $R$ di oggetti con la caratteristica. Il limite inferiore dice che gli oggetti privi della caratteristica, $n-k$, non superano gli $N-R$ disponibili, quindi $k\ge n-(N-R)$. Per esempio, se da dieci oggetti, sette con la caratteristica e tre senza, se ne estraggono cinque, gli oggetti senza la caratteristica sono al più tre, perciò $k$ va da $5-3=2$ a $5$. Per i valori di $k$ fuori da questo intervallo l'evento è impossibile.

Le probabilità $P(K=k)$, al variare di $k$, formano la legge ipergeometrica, che si studia tra le distribuzioni discrete del capitolo 5.

:::dimostrazione
Ogni sequenza ordinata di $n$ oggetti distinti ha la stessa probabilità di essere estratta, perché a ogni passo ciascuno degli oggetti rimasti ha la stessa probabilità di uscire. Il valore comune è $\dfrac{1}{N(N-1)\cdots(N-n+1)}$, e il calcolo esplicito usa la regola del prodotto del capitolo 4. Ogni sottoinsieme di $n$ oggetti compare in $n!$ sequenze, una per ogni ordine di estrazione, quindi anche i sottoinsiemi sono equiprobabili.

I campioni possibili, cioè i sottoinsiemi di $n$ oggetti, sono $\binom{N}{n}$. Un campione favorevole si forma scegliendo $k$ oggetti tra gli $R$ con la caratteristica, in $\binom Rk$ modi, e $n-k$ oggetti tra gli $N-R$ che ne sono privi, in $\binom{N-R}{n-k}$ modi. Le due scelte si combinano con il principio del prodotto, quindi il numero dei campioni favorevoli è il prodotto dei due coefficienti binomiali. Per il modello equiprobabile la probabilità è il rapporto fra campioni favorevoli e campioni possibili.
:::
::::

:::esempio{titolo="Tre pezzi da un lotto"}
Un lotto contiene otto pezzi numerati, quindi distinguibili, di cui tre difettosi. Si estraggono tre pezzi in modo uniforme senza reinserimento. Per avere un solo pezzo difettoso occorre scegliere un pezzo fra i tre difettosi e due fra i cinque integri, quindi

$$
P(K=1)=\frac{\binom{3}{1}\binom{5}{2}}{\binom{8}{3}}
=\frac{3\cdot10}{56}=\frac{30}{56}=\frac{15}{28}.
$$

Per avere almeno un pezzo difettoso basta escludere i campioni formati solo da pezzi integri, che sono $\binom53=10$. Per la formula del complementare la probabilità è $1-\dfrac{\binom{5}{3}}{\binom{8}{3}}=1-\dfrac{10}{56}=\dfrac{46}{56}=\dfrac{23}{28}$. I due eventi hanno probabilità diverse, perché il secondo comprende anche i campioni con due o tre pezzi difettosi.

Con la stessa formula, i campioni con $k=0,1,2,3$ pezzi difettosi sono $\binom{5}{3}=10$, $30$, $\binom{3}{2}\binom{5}{1}=15$ e $\binom{3}{3}=1$. La loro somma è $56$, perché ogni campione ha un solo numero di pezzi difettosi.

::grafico{xmin=-0.7 xmax=3.9 ymin=-0.9 ymax=35 nomi="k,N" linee="0,0 0,10;1,0 1,30;2,0 2,15;3,0 3,1" punti="0,10;1,30,pieno;2,15;3,1" etichette="0.3,11.5,10;1.3,31.5,30;2.3,16.5,15;3.3,2.5,1" titolo="Numero $N$ di campioni con $k$ pezzi difettosi su $\binom{8}{3}=56$. Il valore $k=1$ corrisponde a $P(K=1)=\dfrac{30}{56}=\dfrac{15}{28}$."}
:::

:::attenzione{titolo="Con e senza reinserimento"}
Un'urna contiene due sfere rosse e due blu, e si estraggono due sfere in modo uniforme. Senza reinserimento, i campioni di due sfere sono $\binom{4}{2}=6$ e uno solo contiene entrambe le blu. La probabilità di due blu, cioè di nessuna rossa, è quindi $\dfrac{1}{6}$.

Con reinserimento si dà un nome a ogni sfera, $R_1$, $R_2$, $B_1$, $B_2$. Le sequenze ordinate di due estrazioni sono $4\cdot4=16$. Le estrazioni sono indipendenti e in ciascuna le quattro sfere hanno la stessa probabilità, quindi le $16$ sequenze sono equiprobabili. Quelle con due blu sono $2\cdot2=4$, perciò la probabilità di due blu è $\dfrac{4}{16}=\dfrac14=\left(\dfrac{1}{2}\right)^2$.

Le due probabilità sono diverse, perché senza reinserimento la prima estrazione cambia la composizione dell'urna. Dopo una blu restano infatti una blu e due rosse, e la seconda blu ha probabilità $\dfrac13$ invece di $\dfrac12$. Il capitolo sulla probabilità condizionata studia il calcolo per sequenze di estrazioni in cui la probabilità di un risultato cambia in funzione dei risultati precedenti.
:::
