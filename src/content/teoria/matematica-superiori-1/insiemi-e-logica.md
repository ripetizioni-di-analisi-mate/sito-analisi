---
titolo: "Insiemi e logica elementare"
sommario: "Operazioni e conteggio tra insiemi, relazioni e funzioni, condizioni necessarie e sufficienti, negazioni e controesempi."
---

## Elementi e sottoinsiemi

:::definizione{#concetti titolo="Appartenenza e inclusione"}
Un **insieme** è un gruppo di oggetti per il quale, di ogni oggetto, si sa dire se ne fa parte oppure no. Gli oggetti che ne fanno parte si chiamano **elementi**. Un insieme si indica con una lettera maiuscola e i suoi elementi si scrivono tra parentesi graffe, separati da un punto e virgola. L'ordine di scrittura non conta, quindi $\{1;2;3\}$ e $\{3;1;2\}$ sono lo stesso insieme.

Il simbolo $\in$ si legge «appartiene a». L'espressione $x\in A$ indica che $x$ è un elemento di $A$. Il simbolo $\notin$ si legge «non appartiene a». Per $A=\{1;2;3\}$ si ha $2\in A$ e $5\notin A$.

Un insieme si assegna in due modi.

- Per elencazione, cioè scrivendo tutti i suoi elementi, come in $A=\{1;2;3\}$.
- Per proprietà, cioè scrivendo la condizione che i suoi elementi soddisfano, come in $A=\{x\in\mathbb Z\mid 1\le x<4\}$.

Nella seconda notazione la barra verticale si legge «tale che». Il simbolo $\mathbb Z$ indica l'insieme dei numeri interi $\ldots,-2,-1,0,1,2,\ldots$, tra cui si cercano gli elementi. La disuguaglianza $1\le x<4$ individua gli interi da conservare. Il segno $\le$ si legge «minore o uguale» e comprende $1$, mentre il segno $<$ esclude $4$. Gli interi che soddisfano la condizione sono $1$, $2$ e $3$, quindi le due scritture indicano lo stesso insieme.

Un insieme $A$ è un **sottoinsieme** di $B$ quando ogni elemento di $A$ appartiene anche a $B$. Si scrive $A\subseteq B$ e si legge «$A$ è incluso in $B$». Questa relazione si chiama inclusione. Per esempio $\{1;3\}\subseteq\{1;2;3\}$. Se esiste anche un elemento di $B$ che non appartiene ad $A$, l'inclusione è propria e si scrive $A\subsetneq B$. Nell'esempio l'inclusione è propria, perché $2$ appartiene al secondo insieme e non al primo.

L'**universo** $U$ è l'insieme di tutti gli oggetti che si considerano in un problema. L'insieme vuoto $\varnothing$ è l'insieme che ha zero elementi ed è sottoinsieme di qualsiasi insieme $B$. Per smentire l'inclusione $\varnothing\subseteq B$ servirebbe infatti un elemento di $\varnothing$ che non appartiene a $B$, ma $\varnothing$ è privo di elementi.
:::

:::esempio{titolo="Riconoscere una proprietà e un'inclusione"}
Sia $U=\{0;1;2;3;4;5;6;7\}$. Un multiplo di $2$ è un numero che si ottiene moltiplicando $2$ per un intero, e lo stesso vale per i multipli di $4$. Siano $B$ l'insieme dei multipli di $2$ in $U$ e $A$ l'insieme dei multipli di $4$ in $U$.

Poiché $0=4\cdot0$, lo zero è un multiplo di $4$ e appartiene ad $A$. Si ottengono $A=\{0;4\}$ e $B=\{0;2;4;6\}$.

Ogni multiplo di $4$ si scrive $4k$, dove $k$ è un intero. Poiché $4k=2(2k)$, lo stesso numero è anche $2$ moltiplicato per l'intero $2k$, quindi è un multiplo di $2$ e appartiene a $B$. Ne segue che $A\subseteq B$. Il numero $2$ appartiene a $B$ e non appartiene ad $A$, perciò l'inclusione è propria e $A\subsetneq B$.

Nella figura i numeri $1$, $3$, $5$, $7$ sono gli elementi di $U$ esterni a $B$.

::venn{tipo="incluso" nomi="B,A" zone="ab" universo=1 elementi="a:2,6;ab:0,4;u:1,3,5,7" titolo="La regione di $A$ è contenuta in quella di $B$"}
:::

::::teorema{#doppia-inclusione titolo="Uguaglianza per doppia inclusione"}
Due insiemi sono uguali quando hanno gli stessi elementi. Due insiemi $A$ e $B$ sono uguali se e solo se $A\subseteq B$ e $B\subseteq A$. L'espressione «se e solo se» indica che ciascuna delle due affermazioni è vera esattamente quando è vera l'altra. Il criterio è utile quando uno stesso insieme è descritto con proprietà scritte in modo diverso.

:::dimostrazione
Se $A=B$, i due insiemi hanno gli stessi elementi, quindi un elemento di ciascuno appartiene anche all'altro e valgono le due inclusioni. Viceversa, se valgono le due inclusioni, un elemento di $A$ appartiene a $B$ per la prima inclusione e un elemento di $B$ appartiene ad $A$ per la seconda. Gli insiemi hanno quindi gli stessi elementi.
:::
::::

:::attenzione
Il simbolo $\in$ collega un elemento a un insieme, mentre $\subseteq$ collega due insiemi.

Sia $A=\{0;2\}$. Lo zero è un elemento di $A$, quindi $0\in A$. La scrittura $\{0\}$ indica invece l'insieme che ha lo zero come unico elemento. L'insieme $\{0\}$ è un sottoinsieme di $A$, perché il suo unico elemento appartiene ad $A$, e si scrive $\{0\}\subseteq A$.

L'insieme $\varnothing$ ha zero elementi, mentre $\{0\}$ ha un elemento, quindi sono distinti.

Un insieme può comparire come elemento di un altro insieme. In $C=\{\varnothing;4\}$ gli elementi sono due, l'insieme vuoto e il numero $4$, quindi $\varnothing\in C$.
:::

## Unione, intersezione e differenza

:::definizione{#regole titolo="Operazioni e appartenenza"}
Siano $A$ e $B$ due sottoinsiemi dell'universo $U$. A partire da $A$ e $B$ si costruiscono quattro nuovi insiemi.

- L'**unione** $A\cup B$ raccoglie gli elementi che appartengono ad almeno uno dei due insiemi, compresi quelli che appartengono a entrambi.
- L'**intersezione** $A\cap B$ raccoglie gli elementi comuni, cioè quelli che appartengono sia ad $A$ sia a $B$.
- La differenza $A\setminus B$ raccoglie gli elementi di $A$ che non appartengono a $B$.
- Il **complementare** $A^c=U\setminus A$ comprende tutti gli elementi di $U$ che non appartengono ad $A$.

Per $U=\{1;2;3;4;5\}$, $A=\{1;2;3\}$ e $B=\{3;4\}$ si ottiene
$$
\begin{aligned}
A\cup B&=\{1;2;3;4\},& A\cap B&=\{3\},\\[6pt]
A\setminus B&=\{1;2\},& A^c&=\{4;5\}.
\end{aligned}
$$
Il complementare dipende da $U$, mentre la differenza $A\setminus B$ si determina a partire dai soli insiemi $A$ e $B$.

Un elemento $x$ di $U$ si trova in esattamente una delle quattro regioni determinate da $A$ e $B$. La tabella distingue le regioni anche quando una di esse è vuota.

| Appartenenza ad $A$ | Appartenenza a $B$ | Regione di $x$ |
|---|---|---|
| $x\in A$ | $x\in B$ | $x\in A\cap B$ |
| $x\in A$ | $x\notin B$ | $x\in A\setminus B$ |
| $x\notin A$ | $x\in B$ | $x\in B\setminus A$ |
| $x\notin A$ | $x\notin B$ | $x\in U\setminus(A\cup B)$ |

Nell'unione si riuniscono le prime tre regioni. Nella richiesta «esattamente uno dei due insiemi» entrano soltanto la seconda e la terza. Due insiemi si dicono **disgiunti** quando la prima regione è vuota, cioè quando $A\cap B=\varnothing$.
:::

:::esempio{titolo="Quattro regioni con elementi assegnati"}
Siano $U=\{-2;0;1;2;3;4;5\}$, $A=\{-2;0;3\}$ e $B=\{0;2;4\}$. Il numero $0$ è l'unico elemento comune, quindi $A\cap B=\{0\}$. L'unione si ottiene conservando tutti gli elementi di $A$ e aggiungendo da $B$ soltanto $2$ e $4$, perché $0$ è già presente. Si ottiene $A\cup B=\{-2;0;2;3;4\}$.

::venn{tipo="due" zone="a,ab,b" universo=1 elementi="a:-2,3;ab:0;b:2,4;u:1,5" titolo="L'unione comprende le tre regioni interne ai cerchi"}

Per la differenza $A\setminus B$ si parte da $A$ e si toglie l'elemento $0$, che appartiene anche a $B$. Si ottiene $A\setminus B=\{-2;3\}$. Invertendo l'ordine si parte da $B$ e si toglie ancora $0$, quindi $B\setminus A=\{2;4\}$.

::venn{tipo="due" zone="b" universo=1 elementi="a:-2,3;ab:0;b:2,4;u:1,5" titolo="Nella differenza $B\setminus A$ si parte dal cerchio di $B$"}

Per il complementare di $A$ si parte da $U$ e si tolgono $-2$, $0$ e $3$. Si ottiene $U\setminus A=\{1;2;4;5\}$. Il complementare comprende $2$ e $4$, che appartengono a $B$, oltre agli elementi esterni a entrambi gli insiemi. I due numeri esterni a entrambi sono $1$ e $5$.

::venn{tipo="due" zone="b,u" universo=1 elementi="a:-2,3;ab:0;b:2,4;u:1,5" titolo="Il complementare di $A$ comprende tutte le regioni esterne al suo cerchio"}
:::

:::esempio{titolo="Quando l'intersezione è vuota"}
In $U=\{1;2;3;4;5;6\}$ siano $P$ l'insieme dei numeri pari e $D$ quello dei dispari, cioè $P=\{2;4;6\}$ e $D=\{1;3;5\}$. Un intero ha un unico resto nella divisione per $2$. Il resto è $0$ per i pari ed è $1$ per i dispari. Nessun numero è quindi sia pari sia dispari, e i due insiemi sono disgiunti. Poiché ogni numero di $U$ è pari o dispari, la loro unione è tutto $U$.

::venn{tipo="disgiunti" nomi="P,D" zone="a,b" universo=1 elementi="a:2,4,6;b:1,3,5" titolo="La parità divide $U$ in due insiemi disgiunti"}
:::

## Contare le regioni

::::teorema{#metodo titolo="La formula dell'unione"}
Un insieme è finito quando i suoi elementi si possono contare fino all'ultimo. Per insiemi finiti $A$ e $B$, si indica con $|A|$ il numero degli elementi di $A$, detto anche numerosità di $A$. Per $A=\{1;2;3\}$ si ha $|A|=3$. Vale la formula
$$
|A\cup B|=|A|+|B|-|A\cap B|.
$$
La somma $|A|+|B|$ conta due volte gli elementi comuni, una volta in $A$ e una volta in $B$. Sottraendo $|A\cap B|$ ogni elemento resta contato una volta sola. Per $A=\{1;2;3\}$ e $B=\{3;4\}$ l'unione è $\{1;2;3;4\}$ e la formula dà $3+2-1=4$.

I tre dati a destra determinano il totale di chi soddisfa almeno una delle due condizioni. Quando è noto il totale $|A\cup B|$, la stessa formula si risolve rispetto a $|A\cap B|$ e si ottiene $|A\cap B|=|A|+|B|-|A\cup B|$.

:::dimostrazione
Si conta l'unione partendo da $A$ e aggiungendo soltanto gli elementi di $B\setminus A$, poiché sono i soli elementi di $B$ che devono ancora essere contati. Quindi $|A\cup B|=|A|+|B\setminus A|$. L'insieme $B$ si divide nella parte comune $A\cap B$ e nella parte esterna $B\setminus A$, che sono disgiunte. Di conseguenza $|B|=|A\cap B|+|B\setminus A|$, cioè $|B\setminus A|=|B|-|A\cap B|$. Sostituendo questo valore nella somma $|A|+|B\setminus A|$ si ottiene la formula.
:::
::::

:::esempio{titolo="Dalla regione esterna all'intersezione"}
Su $30$ studenti, $17$ frequentano teatro e $14$ musica. Cinque studenti non frequentano alcun laboratorio. Si indicano con $T$ l'insieme di chi frequenta teatro e con $M$ l'insieme di chi frequenta musica. I cinque studenti senza laboratorio sono fuori dall'unione $T\cup M$, quindi quelli che partecipano ad almeno uno dei due sono $30-5=25$. Dalla formula dell'unione si ricava
$$
\begin{aligned}
|T\cap M|&=|T|+|M|-|T\cup M|\\[6pt]
&=17+14-25\\[6pt]
&=6.
\end{aligned}
$$
Sei studenti frequentano entrambi i laboratori. Nella regione di solo teatro restano $17-6=11$ studenti e in quella di sola musica ne restano $14-6=8$. Chi frequenta esattamente un laboratorio occupa una di queste due regioni, quindi il totale richiesto in quel caso sarebbe $11+8=19$. Le quattro regioni ricostruiscono la classe, perché $11+6+8+5=30$.

Nella figura ogni numero è la numerosità di una regione.

::venn{tipo="due" nomi="T,M" zone="a,b" universo=1 elementi="a:11;ab:6;b:8;u:5" titolo="Frequentano esattamente un laboratorio gli studenti nelle due regioni colorate"}
:::

:::osservazione{titolo="Verificare la compatibilità dei conteggi"}
Siano $A$ e $B$ sottoinsiemi di un universo $U$ finito. L'intersezione è contenuta in ciascuno dei due insiemi, quindi ha al più tanti elementi quanti ne ha il più piccolo dei due. Si scrive $|A\cap B|\le\min(|A|,|B|)$, dove $\min$ indica il minore dei due numeri.

L'unione è contenuta in $U$, quindi $|A\cup B|\le |U|$. Per la formula dell'unione questa disuguaglianza si scrive $|A|+|B|-|A\cap B|\le|U|$, da cui segue $|A\cap B|\ge |A|+|B|-|U|$.

Se in un gruppo di $20$ persone $14$ usano un servizio e $12$ un altro, almeno $14+12-20=6$ li usano entrambi e al più $12$ li usano entrambi. Un dato che assegna $4$ persone all'intersezione implicherebbe un'unione di $14+12-4=22$ persone. Il gruppo ne ha $20$, quindi quel dato è in contrasto con l'universo assegnato.
:::

## Operazioni composte e leggi di De Morgan

::::teorema{#applicazioni titolo="Complementare delle operazioni"}
Un elemento è fuori dall'unione di due insiemi quando è fuori da entrambi. Un elemento è fuori dall'intersezione quando è fuori da almeno uno dei due. Queste due regole si chiamano leggi di De Morgan. Per $A$ e $B$ sottoinsiemi di $U$ si scrivono
$$
\begin{aligned}
(A\cup B)^c&=A^c\cap B^c,\\[6pt]
(A\cap B)^c&=A^c\cup B^c.
\end{aligned}
$$
Con le leggi si traducono richieste come «nessuna delle due condizioni» usando i complementari delle singole condizioni.

:::dimostrazione
Si mostra che i due insiemi di ciascuna uguaglianza hanno gli stessi elementi. Sia $x$ un elemento di $U$. Appartenere a $(A\cup B)^c$ significa essere fuori dall'unione, cioè fuori da entrambi gli insiemi. Questo equivale ad appartenere sia ad $A^c$ sia a $B^c$, dunque ad $A^c\cap B^c$.

Per la seconda uguaglianza, $x$ appartiene a $(A\cap B)^c$ quando è esterno alla parte comune. In questo caso manca almeno una delle due appartenenze, cioè $x\notin A$ oppure $x\notin B$. Questo equivale a chiedere che $x$ appartenga ad almeno uno dei complementari, dunque ad $A^c\cup B^c$. In entrambi i casi l'equivalenza vale per ogni $x$ di $U$, quindi i due insiemi sono uguali.
:::
::::

:::esempio{titolo="Fuori dalla parte comune"}
Siano $U=\{0;1;2;3;4;5;6\}$, $A=\{0;2;4;6\}$ e $B=\{4;5;6\}$. Gli elementi comuni sono $4$ e $6$, quindi $A\cap B=\{4;6\}$. Togliendo $4$ e $6$ da $U$ si ottiene il complementare $(A\cap B)^c=\{0;1;2;3;5\}$.

Lo stesso insieme si ottiene calcolando prima i complementari e poi l'unione. Si ha $A^c=\{1;3;5\}$ e $B^c=\{0;1;2;3\}$, quindi $A^c\cup B^c=\{0;1;2;3;5\}$. Il numero $5$ appartiene a $B$ ed è esterno ad $A$, quindi resta nel complementare dell'intersezione.

::venn{tipo="due" zone="a,b,u" ambiente="U" elementi="a:0,2;ab:4,6;b:5;u:1,3" titolo="Fuori dall'intersezione restano tre regioni di $U$"}
:::

::::teorema{#distributiva titolo="Intersezione distribuita sull'unione"}
In un'espressione con più operazioni si esegue per prima l'operazione scritta tra parentesi. Per tre sottoinsiemi $A,B,C$ di $U$ vale
$$
A\cap(B\cup C)=(A\cap B)\cup(A\cap C).
$$
L'espressione a sinistra del segno di uguale si chiama primo membro e quella a destra secondo membro.

:::dimostrazione
Si mostrano le due inclusioni, e l'uguaglianza segue dalla doppia inclusione. Un elemento del primo membro sta in $A$ e in almeno uno tra $B$ e $C$. Se appartiene a $B$, sta in $A\cap B$. Se appartiene a $C$, sta in $A\cap C$. Appartiene quindi all'unione del secondo membro. Viceversa, un elemento del secondo membro appartiene a una delle due intersezioni. Questo garantisce l'appartenenza ad $A$ e ad almeno uno tra $B$ e $C$, quindi al primo membro.
:::

Vale anche $A\cup(B\cap C)=(A\cup B)\cap(A\cup C)$. Per appartenere a entrambe le unioni, basta essere in $A$. Se si è fuori da $A$, occorre essere sia in $B$ sia in $C$, cioè in $B\cap C$. In entrambi i casi l'elemento appartiene ad $A\cup(B\cap C)$.
::::

:::esempio{titolo="Un vincolo comune a due possibilità"}
Siano $A=\{1;2;3;4\}$, $B=\{2;3;5\}$ e $C=\{3;4;5;6\}$. Si calcola prima l'unione $B\cup C=\{2;3;4;5;6\}$. Gli elementi di $A$ che appartengono a questa unione sono $2$, $3$ e $4$, quindi $A\cap(B\cup C)=\{2;3;4\}$.

Con la formula distributiva si calcolano prima $A\cap B=\{2;3\}$ e $A\cap C=\{3;4\}$, e poi si uniscono. Si ottiene di nuovo $\{2;3;4\}$. Il numero $3$ soddisfa entrambe le possibilità e compare una volta nel risultato.

Nella figura l'universo comprende anche $7$, che è esterno ai tre insiemi.

::venn{tipo="tre" zone="ab,ac,abc" universo=1 elementi="a:1;ab:2;ac:4;abc:3;bc:5;c:6;u:7" titolo="Sono colorate le parti di $A$ comprese in almeno uno tra $B$ e $C$"}
:::

## Coppie, prodotto cartesiano e relazioni

:::definizione{#relazioni titolo="Coppie ordinate e prodotto cartesiano"}
Una **coppia ordinata** $(a;b)$ è formata da due oggetti scritti in un ordine fissato. L'oggetto $a$ è la prima coordinata e $b$ è la seconda. Le coppie $(a;b)$ e $(c;d)$ coincidono quando sono soddisfatte entrambe le condizioni
$$
\begin{cases}
a=c\\
b=d
\end{cases}
$$
Le coppie $(1;2)$ e $(2;1)$ sono quindi diverse, mentre gli insiemi $\{1;2\}$ e $\{2;1\}$ sono uguali.

Il **prodotto cartesiano** $A\times B$ è l'insieme di tutte le coppie con prima coordinata in $A$ e seconda coordinata in $B$. Una **relazione** da $A$ a $B$ è un sottoinsieme di $A\times B$, cioè una scelta di alcune di queste coppie.

Se $A$ e $B$ sono finiti, ciascun elemento di $A$ genera esattamente $|B|$ coppie, una per ogni elemento di $B$. Le coppie generate da due elementi distinti di $A$ hanno prime coordinate diverse, quindi sono coppie diverse. Perciò si sommano tutti i conteggi e si ottiene $|A\times B|=|A|\,|B|$. Se uno dei due insiemi è vuoto, manca ogni scelta per una delle due coordinate. Non si forma quindi alcuna coppia e il prodotto è vuoto.
:::

:::esempio{titolo="Sei coppie e una relazione"}
Siano $A=\{-1;2\}$ e $B=\{0;1;3\}$. Il prodotto $A\times B$ ha $2\cdot3=6$ coppie. Le coppie con prima coordinata $-1$ sono $(-1;0)$, $(-1;1)$ e $(-1;3)$. Le altre tre hanno prima coordinata $2$ e sono $(2;0)$, $(2;1)$ e $(2;3)$.

La relazione che impone $a<b$ conserva tutte le tre coppie con $a=-1$, perché $-1$ è minore di $0$, di $1$ e di $3$. Tra quelle con $a=2$ conserva soltanto $(2;3)$, perché $2<3$ mentre $2<0$ e $2<1$ sono false. La relazione è quindi $\{(-1;0);(-1;1);(-1;3);(2;3)\}$.

Per decidere se $(3;2)$ appartenga alla relazione si verificano prima le coordinate. Poiché $3\notin A$, la coppia è esterna già al prodotto $A\times B$.

Nel piano cartesiano la coppia $(a;b)$ è il punto che ha $a$ sull'asse orizzontale $x$ e $b$ sull'asse verticale $y$. La prima coordinata di un punto si chiama ascissa e la seconda ordinata. I tre punti con ascissa $-1$ stanno su una retta verticale e i tre punti con ascissa $2$ su un'altra.

::grafico{xmin=-2 xmax=3 ymin=-1 ymax=4 punti="-1,0;-1,1;-1,3;2,0;2,1;2,3" titolo="I sei punti di $A\times B$ si dispongono su due rette verticali"}
:::

## Relazioni che sono funzioni

:::definizione{#funzioni titolo="Dominio, codominio e immagini"}
Una **funzione** $f$ da $A$ a $B$ è una relazione che assegna a ogni elemento $a$ di $A$ un unico elemento di $B$. Questo elemento si chiama immagine di $a$ e si indica con $f(a)$, che si legge «$f$ di $a$». L'insieme $A$ è il **dominio** e $B$ è il **codominio**. Si scrive $f:A\to B$. La freccia $\mapsto$ collega un elemento alla sua immagine, e $a\mapsto f(a)$ si legge «$a$ va in $f(a)$».

Una funzione si assegna anche con una formula. Per la funzione $f(x)=2x+3$ l'immagine di $-1$ si calcola sostituendo $-1$ a $x$, e si ottiene $f(-1)=2\cdot(-1)+3=1$. Quando il dominio e il codominio sono l'insieme $\mathbb R$ dei numeri reali, cioè di tutti i numeri che si rappresentano sulla retta, si scrive $f:\mathbb R\to\mathbb R$.

L'insieme immagine $f(A)$ raccoglie gli elementi di $B$ effettivamente ottenuti come immagine di qualche elemento di $A$.

Per controllare se una relazione finita è una funzione si raggruppano le coppie per prima coordinata. La relazione è una funzione quando ogni elemento del dominio compare come prima coordinata in esattamente una coppia.
:::

:::esempio{titolo="Il codominio comprende valori non raggiunti"}
Siano $A=\{0;1;2\}$ e $B=\{1;3;5;8\}$, e si consideri la regola $f(x)=2x+1$. Le immagini sono
$$
\begin{aligned}
f(0)&=2\cdot0+1=1,\\[6pt]
f(1)&=2\cdot1+1=3,\\[6pt]
f(2)&=2\cdot2+1=5.
\end{aligned}
$$
La regola produce le coppie $(0;1)$, $(1;3)$, $(2;5)$. Ogni elemento di $A$ compare una volta come prima coordinata e tutte le seconde coordinate appartengono a $B$, quindi la regola definisce una funzione da $A$ a $B$. Il codominio contiene anche $8$, che non è immagine di alcun elemento, mentre l'insieme immagine è $f(A)=\{1;3;5\}$.

Nel grafico a ogni valore assegnato di $x$ corrisponde un solo punto.

::grafico{xmin=-1 xmax=3 ymin=0 ymax=9 punti="0,1;1,3;2,5" titolo="Il grafico contiene soltanto i punti relativi al dominio assegnato"}
:::

:::attenzione
Siano $A=\{0;1;2\}$ e $B=\{3;4\}$.

- La relazione $\{(0;3);(1;4)\}$ omette $2$, cioè nessuna coppia ha $2$ come prima coordinata. Le coppie non definiscono quindi una funzione da $A$ a $B$.
- La relazione $\{(0;3);(0;4);(1;3);(2;3)\}$ assegna due immagini a $0$ e non definisce una funzione per un motivo diverso.
- La relazione $\{(0;3);(1;3);(2;4)\}$ soddisfa invece entrambe le condizioni ed è una funzione.

Nella terza relazione i due elementi $0$ e $1$ hanno la stessa immagine $3$. Questo è ammesso, perché a ciascuno dei due è assegnato un unico valore.
:::

## Proposizioni e tabelle di verità

:::definizione{#esempi titolo="Proposizioni e connettivi"}
Una **proposizione**, detta anche enunciato, è una frase di cui si sa dire se è vera oppure falsa. Vero e falso sono i due valori di verità. «$7$ è pari» è una proposizione falsa. L'espressione «$x>3$» dipende dal valore di $x$, quindi diventa una proposizione soltanto quando si assegna un valore a $x$. Con $x=5$ la frase risultante, «$5>3$», è vera.

Le lettere $p$ e $q$ rappresentano proposizioni. Un **connettivo** è un simbolo che forma una nuova proposizione a partire da una o due proposizioni date.

- La congiunzione $p\land q$ si legge «$p$ e $q$». È vera quando $p$ e $q$ sono entrambe vere.
- La disgiunzione $p\lor q$ si legge «$p$ oppure $q$». È vera quando almeno una fra $p$ e $q$ è vera.
- La negazione $\neg p$ si legge «non $p$». Scambia i due valori, quindi è vera quando $p$ è falsa ed è falsa quando $p$ è vera.

Una **tabella di verità** elenca, una per riga, tutte le combinazioni dei valori di $p$ e $q$, con il valore delle proposizioni composte.

| $p$ | $q$ | $p\land q$ | $p\lor q$ | $\neg p$ |
|---|---|---|---|---|
| V | V | V | V | F |
| V | F | F | V | F |
| F | V | F | V | V |
| F | F | F | F | V |

Si leggono le righe con **V** per vero e **F** per falso. Nella prima riga $p$ e $q$ sono entrambe vere e la disgiunzione è vera, quindi l'«oppure» usato da $\lor$ è inclusivo, cioè comprende il caso in cui valgono entrambe. La frase «esattamente uno tra $p$ e $q$» corrisponde soltanto alle due righe centrali.
:::

:::esempio{titolo="Leggere un'espressione composta"}
Siano $p$ la frase «$9$ è dispari» e $q$ la frase «$9$ è maggiore di $10$». La prima è vera e la seconda è falsa.

Per l'espressione $p\land\neg q$ si calcola prima $\neg q$. Poiché $q$ è falsa, $\neg q$ è vera. Le proposizioni $p$ e $\neg q$ sono entrambe vere, quindi $p\land\neg q$ è vera.

Per l'espressione $\neg(p\land q)$ si calcola prima la congiunzione $p\land q$. Poiché $q$ è falsa, $p\land q$ è falsa, da cui segue che $\neg(p\land q)$ è vera.

Con questi valori di $p$ e $q$ le due espressioni hanno lo stesso valore. Due espressioni si dicono **equivalenti** quando hanno lo stesso valore in tutte le righe della tabella.

| $p$ | $q$ | $p\land\neg q$ | $\neg(p\land q)$ |
|---|---|---|---|
| V | V | F | F |
| V | F | V | V |
| F | V | F | V |
| F | F | F | V |

Nella quarta riga, dove $p$ e $q$ sono entrambe false, la prima espressione è falsa e la seconda è vera. Le due espressioni non sono quindi equivalenti. Una sola riga concorde non stabilisce l'equivalenza.
:::

## Implicazioni, conversa e contronominale

::::teorema{#problemi titolo="Condizione sufficiente e condizione necessaria"}
L'**implicazione** $p\Rightarrow q$ si legge «se $p$ allora $q$» oppure «$p$ implica $q$». La proposizione $p$ è l'ipotesi e $q$ è la conclusione. L'implicazione $p\Rightarrow q$ è falsa esattamente quando $p$ è vera e $q$ è falsa.

| $p$ | $q$ | $p\Rightarrow q$ | $\neg q$ | $\neg p$ | $\neg q\Rightarrow\neg p$ |
|---|---|---|---|---|---|
| V | V | V | F | F | V |
| V | F | F | V | F | F |
| F | V | V | F | V | V |
| F | F | V | V | V | V |

Si consideri la frase «se un intero è multiplo di $4$, allora è pari». Il numero $8$ è multiplo di $4$ ed è pari, come nella prima riga. Il numero $6$ è pari senza essere multiplo di $4$, come nella terza riga. Il numero $3$ rientra nella quarta riga. Nessuno dei tre smentisce la frase. La smentirebbe soltanto un multiplo di $4$ dispari, che corrisponde alla seconda riga.

Se vale $p\Rightarrow q$, $p$ è condizione **sufficiente** per $q$, perché la verità di $p$ basta per avere $q$. Inoltre $q$ è condizione **necessaria** per $p$, perché quando $q$ è falsa anche $p$ è falsa. Nell'esempio, essere multiplo di $4$ è sufficiente per essere pari, ed essere pari è necessario per essere multiplo di $4$.

La **contronominale** di $p\Rightarrow q$ è l'implicazione $\neg q\Rightarrow\neg p$. La contronominale ha sempre lo stesso valore di verità dell'implicazione originaria.

:::dimostrazione
Un'implicazione è falsa soltanto quando la sua ipotesi è vera e la sua conclusione è falsa. La contronominale ha ipotesi $\neg q$ e conclusione $\neg p$, quindi è falsa quando $\neg q$ è vera e $\neg p$ è falsa, cioè quando $q$ è falsa e $p$ è vera. Questo è lo stesso caso in cui è falsa $p\Rightarrow q$. Le due implicazioni sono false nello stesso caso e vere negli altri, quindi sono equivalenti. Nella tabella la terza e la sesta colonna coincidono.
:::
::::

:::esempio{titolo="La direzione del criterio"}
Ogni intero multiplo di $12$ è multiplo di $4$. Un multiplo di $12$ si scrive infatti $12k$ con $k$ intero, e dalla scrittura $12k=4(3k)$ si ricava la divisibilità per $4$. Essere multiplo di $12$ è quindi sufficiente per essere multiplo di $4$.

La **conversa** di un'implicazione scambia l'ipotesi con la conclusione. Qui la conversa afferma che ogni multiplo di $4$ è multiplo di $12$. Un **controesempio** è un caso che soddisfa l'ipotesi di una frase e non la sua conclusione, e un solo controesempio basta per dichiarare falsa la frase. L'intero $8$ è multiplo di $4$, perché $8=4\cdot2$, e non è multiplo di $12$. L'intero $8$ soddisfa l'ipotesi della conversa e non la conclusione, perciò è un controesempio e la conversa è falsa.

Invece la contronominale del criterio iniziale dice che ogni intero che non è multiplo di $4$ non è multiplo di $12$.

La scrittura $a\mid b$ si legge «$a$ divide $b$» e indica che $b$ è multiplo di $a$. La scrittura $a\nmid b$ si legge «$a$ non divide $b$». Con questi simboli $4\mid 8$ e $12\nmid 8$. La barra ha qui un significato diverso da quello che ha nella scrittura di un insieme, dove si legge «tale che».
:::

## Quantificatori e negazioni

:::definizione{#quantificatori titolo="Ogni, almeno uno, nessuno"}
Sia $D$ un insieme e sia $P(x)$ una proprietà degli elementi di $D$, cioè una frase che diventa vera o falsa quando a $x$ si sostituisce un elemento di $D$. I **quantificatori** sono i due simboli $\forall$ ed $\exists$, che indicano quanti elementi di $D$ soddisfano la proprietà.

- Il simbolo $\forall$ si legge «per ogni». La frase $\forall x\in D,\ P(x)$ significa che ogni elemento di $D$ soddisfa la proprietà e si chiama frase universale.
- Il simbolo $\exists$ si legge «esiste almeno un». La frase $\exists x\in D,\ P(x)$ significa che almeno un elemento di $D$ la soddisfa e si chiama frase esistenziale.

Sia $D$ l'insieme degli studenti di una classe e sia $P(x)$ la proprietà «$x$ ha consegnato il compito». «Nessuno ha consegnato» si scrive $\forall x\in D,\ \neg P(x)$.

Per negare «ogni elemento la soddisfa» occorre un elemento che la violi. La negazione di «tutti hanno consegnato» è «almeno uno studente non ha consegnato». Per negare «almeno un elemento la soddisfa» occorre che tutti gli elementi la violino. La negazione di «almeno uno ha consegnato» è «nessuno ha consegnato».
$$
\begin{aligned}
\neg\bigl(\forall x\in D,\ P(x)\bigr)&\iff\exists x\in D,\ \neg P(x),\\[6pt]
\neg\bigl(\exists x\in D,\ P(x)\bigr)&\iff\forall x\in D,\ \neg P(x).
\end{aligned}
$$
Il simbolo $\iff$ si legge «equivale a» oppure «se e solo se». Indica che le due frasi sono entrambe vere oppure entrambe false.
:::

:::esempio{titolo="Trovare un controesempio indicando il dominio"}
Sia $D=\{-2;-1;0;1;2\}$ e si consideri la proprietà $x^2>x$. Il numero $-1$ la soddisfa, poiché $(-1)^2=1$ e $1>-1$. La frase esistenziale è quindi vera. Un elemento che rende vera una frase esistenziale si chiama testimone, e qui $-1$ è un testimone.

Il numero $0$ viola la proprietà, poiché $0^2=0$ e $0>0$ è falsa. Il numero $0$ è un controesempio alla frase universale, che quindi è falsa.

La negazione di $x^2>x$ è $x^2\le x$. L'uguaglianza va compresa, perché una disuguaglianza stretta è violata sia quando il primo numero è minore del secondo sia quando i due numeri sono uguali.
:::

:::esempio{titolo="L'ordine di due quantificatori"}
In $D=\{0;1\}$ è vero che per ogni $x\in D$ esiste un $y\in D$ con $x+y=1$. In questa frase si fissa prima $x$ e poi si cerca un $y$ adatto a quell'$x$. Quando $x=0$ si sceglie $y=1$, perché $0+1=1$. Quando $x=1$ serve $y=0$, perché $1+0=1$.

Se si legge prima «esiste un $y\in D$» e poi «per ogni $x\in D$», la frase chiede una sola scelta di $y$ che funzioni per entrambe le prove. Con $y=0$ la prova $x=0$ dà $0+0=0$. Con $y=1$ la prova $x=1$ dà $1+1=2$. Le due prove richiedono valori diversi di $y$, quindi questa seconda frase è falsa.
:::

:::osservazione{titolo="Quando il dominio è vuoto"}
Nel dominio vuoto una frase universale è vera, perché per dichiararla falsa servirebbe un controesempio e il dominio non ha elementi. Una frase esistenziale è falsa, perché non esiste alcun elemento che possa soddisfarla. Lo stesso ragionamento spiega perché $\varnothing$ è un sottoinsieme di ogni insieme $B$. La frase «ogni elemento di $\varnothing$ appartiene a $B$» è una frase universale su un dominio vuoto.
:::

## Individuare il tipo di risposta

:::osservazione{#controlli titolo="Insieme, elemento e numerosità"}
Se $A=\{2;5\}$ e $B=\{5;6\}$, l'intersezione è l'insieme $\{5\}$, il suo unico elemento è il numero $5$ e la sua numerosità è $1$. Le tre risposte si distinguono dal tipo di oggetto richiesto.

Nelle domande con un enunciato universale, lo stesso controllo individua invece quale oggetto può fungere da controesempio. La frase «ogni elemento di $A$ appartiene a $B$» parla degli elementi di $A$, quindi un controesempio è un elemento di $A$. Per smentirla basta $2$, dato che sta in $A$ ed è esterno a $B$.
:::

:::esempio{titolo="Dalla frase alle regioni, e ritorno"}
In $U=\{1;2;3;4;5;6;7;8\}$ siano $A=\{2;4;6;8\}$ gli elementi pari e $B=\{5;6;7;8\}$ quelli maggiori di $4$. La richiesta «pari oppure maggiore di $4$» seleziona gli elementi che stanno in almeno uno dei due insiemi, cioè $A\cup B$.

La sua negazione seleziona il complementare $(A\cup B)^c$. Per la prima legge di De Morgan questo insieme è $A^c\cap B^c$. Gli elementi di $A^c$ sono i dispari e quelli di $B^c$ sono i numeri minori o uguali a $4$, quindi $A^c\cap B^c$ è formato dai numeri dispari che sono al più $4$. Si ottiene $\{1;3\}$, quindi la numerosità richiesta è $2$. Il controllo diretto conferma che $1$ e $3$ sono esterni a entrambi gli insiemi.

::venn{tipo="due" zone="u" universo=1 elementi="a:2,4;ab:6,8;b:5,7;u:1,3" titolo="La negazione dell'oppure individua la regione esterna ai due cerchi"}
:::
