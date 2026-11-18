---
titolo: "Insiemi e logica elementare"
sommario: "Operazioni e conteggio tra insiemi, relazioni e funzioni, condizioni necessarie e sufficienti, negazioni e controesempi."
---

## Elementi e sottoinsiemi

:::definizione{#concetti titolo="Appartenenza e inclusione"}
Un **insieme** è una collezione di oggetti, detti elementi. L'espressione $x\in A$ indica che $x$ è un elemento di $A$. Si può determinare un insieme elencando i suoi elementi oppure specificando una proprietà, come in $A=\{x\in\mathbb Z\mid 1\le x<4\}$. In questa notazione la barra si legge «tale che». Il simbolo $\mathbb Z$ indica gli interi tra cui si cercano gli elementi e la disuguaglianza individua quelli da conservare.

Si scrive $A\subseteq B$ quando ogni elemento di $A$ appartiene a $B$. Se esiste anche un elemento di $B$ esterno ad $A$, l'inclusione è propria e si scrive $A\subsetneq B$. L'**universo** $U$ stabilisce quali oggetti si considerano. L'insieme vuoto $\varnothing$ contiene zero elementi ed è sottoinsieme di qualsiasi insieme. Per smentire l’inclusione servirebbe infatti un elemento di $\varnothing$ esterno all’altro insieme, ma $\varnothing$ è privo di elementi.
:::

:::esempio{titolo="Riconoscere una proprietà e un'inclusione"}
Sia $U=\{0;1;2;3;4;5;6;7\}$. Siano $B$ l'insieme dei multipli di $2$ in $U$ e $A$ l'insieme dei multipli di $4$ in $U$. Poiché $0=4\cdot0$, lo zero appartiene ad $A$. Si ottengono $A=\{0;4\}$ e $B=\{0;2;4;6\}$. Ogni multiplo di $4$ è della forma $4k=2(2k)$, quindi appartiene a $B$. Il numero $2$ appartiene a $B$ ed è esterno ad $A$, perciò l'inclusione è propria.

::venn{tipo="incluso" nomi="B,A" zone="ab" universo=1 elementi="a:2,6;ab:0,4;u:1,3,5,7" titolo="La regione di $A$ è contenuta in quella di $B$"}
:::

::::teorema{#doppia-inclusione titolo="Uguaglianza per doppia inclusione"}
Due insiemi $A$ e $B$ sono uguali se e solo se $A\subseteq B$ e $B\subseteq A$. Il criterio è utile quando uno stesso insieme è descritto con proprietà scritte in modo diverso.

:::dimostrazione
Se $A=B$, un elemento di ciascuno appartiene anche all'altro. Viceversa, se valgono le due inclusioni, un elemento di $A$ appartiene a $B$ per la prima inclusione e un elemento di $B$ appartiene ad $A$ per la seconda. Gli insiemi hanno quindi gli stessi elementi.
:::
::::

:::attenzione
Sia $A=\{0;2\}$. Lo zero è un elemento di $A$, quindi $0\in A$. L'insieme $\{0\}$ è un sottoinsieme di $A$, perché il suo unico elemento appartiene ad $A$. L'insieme $\varnothing$ ha zero elementi, mentre $\{0\}$ ha un elemento, quindi sono distinti.
:::

## Unione, intersezione e differenza

:::definizione{#regole titolo="Operazioni e appartenenza"}
Per $A,B\subseteq U$, l'**unione** $A\cup B$ raccoglie gli elementi che appartengono ad almeno uno dei due insiemi. L'**intersezione** $A\cap B$ raccoglie gli elementi comuni. La differenza $A\setminus B$ raccoglie gli elementi di $A$ esterni a $B$. Il **complementare** $A^c=U\setminus A$ comprende invece tutti gli elementi di $U$ esterni ad $A$. Il complementare dipende da $U$, mentre la differenza $A\setminus B$ si determina a partire dai soli insiemi $A$ e $B$.

Un elemento di $U$ si trova in esattamente una delle quattro regioni determinate da $A$ e $B$. La tabella distingue le regioni anche quando una di esse è vuota.

| Appartenenza ad $A$ | Appartenenza a $B$ | Regione di $x$ |
|---|---|---|
| $x\in A$ | $x\in B$ | $x\in A\cap B$ |
| $x\in A$ | $x\notin B$ | $x\in A\setminus B$ |
| $x\notin A$ | $x\in B$ | $x\in B\setminus A$ |
| $x\notin A$ | $x\notin B$ | $x\in U\setminus(A\cup B)$ |

Nell'unione si riuniscono le prime tre regioni. Nella richiesta «esattamente uno» entrano soltanto la seconda e la terza. Due insiemi si dicono **disgiunti** quando la prima regione è vuota.
:::

:::esempio{titolo="Quattro regioni con elementi assegnati"}
Siano $U=\{-2;0;1;2;3;4;5\}$, $A=\{-2;0;3\}$ e $B=\{0;2;4\}$. Il numero $0$ è comune, quindi $A\cap B=\{0\}$. L'unione si ottiene conservando tutti gli elementi di $A$ e aggiungendo da $B$ soltanto $2$ e $4$.

::venn{tipo="due" zone="a,ab,b" universo=1 elementi="a:-2,3;ab:0;b:2,4;u:1,5" titolo="L'unione comprende le tre regioni interne ai cerchi"}

La differenza $A\setminus B$ contiene $-2$ e $3$. Invertendo l'ordine si parte da $B$, quindi $B\setminus A=\{2;4\}$.

::venn{tipo="due" zone="b" universo=1 elementi="a:-2,3;ab:0;b:2,4;u:1,5" titolo="Nella differenza $B\setminus A$ si parte dal cerchio di $B$"}

Il complementare $U\setminus A=\{1;2;4;5\}$ comprende $2$ e $4$, oltre agli elementi esterni a entrambi gli insiemi. I due numeri esterni a entrambi sono $1$ e $5$.

::venn{tipo="due" zone="b,u" universo=1 elementi="a:-2,3;ab:0;b:2,4;u:1,5" titolo="Il complementare di $A$ comprende tutte le regioni esterne al suo cerchio"}
:::

:::esempio{titolo="Quando l'intersezione è vuota"}
In $U=\{1;2;3;4;5;6\}$ siano $P$ l'insieme dei numeri pari e $D$ quello dei dispari. Un intero ha un unico resto nella divisione per $2$. I due insiemi sono quindi disgiunti, e poiché ogni numero di $U$ è pari o dispari la loro unione è tutto $U$.

::venn{tipo="disgiunti" nomi="P,D" zone="a,b" universo=1 elementi="a:2,4,6;b:1,3,5" titolo="La parità divide $U$ in due insiemi disgiunti"}
:::

## Contare le regioni

::::teorema{#metodo titolo="La formula dell'unione"}
Per insiemi finiti $A$ e $B$, si indica con $|A|$ il numero degli elementi di $A$. Vale la formula
$$
|A\cup B|=|A|+|B|-|A\cap B|.
$$
I tre dati a destra determinano il totale di chi soddisfa almeno una delle due condizioni. Dato il totale, la stessa formula si può risolvere per $|A\cap B|$.

:::dimostrazione
Si può contare l'unione partendo da $A$ e aggiungendo soltanto gli elementi di $B\setminus A$, poiché sono i soli elementi di $B$ che devono ancora essere contati. L'insieme $B$ si divide nella parte comune $A\cap B$ e nella parte esterna $B\setminus A$. Di conseguenza $|B\setminus A|=|B|-|A\cap B|$ e la somma $|A|+|B\setminus A|$ dà la formula.
:::
::::

:::esempio{titolo="Dalla regione esterna all'intersezione"}
Su $30$ studenti, $17$ frequentano teatro e $14$ musica. Cinque studenti non frequentano alcun laboratorio. Quelli che partecipano ad almeno uno dei due sono $30-5=25$. Indicando con $T$ e $M$ i due insiemi, si ricava
$$
\begin{aligned}
|T\cap M|&=|T|+|M|-|T\cup M|\\[6pt]
&=17+14-25\\[6pt]
&=6.
\end{aligned}
$$
Nella regione di solo teatro restano $17-6=11$ studenti e in quella di sola musica ne restano $14-6=8$. Chi frequenta esattamente un laboratorio occupa una di queste due regioni, quindi il totale richiesto in quel caso sarebbe $11+8=19$. Le quattro regioni ricostruiscono la classe, perché $11+6+8+5=30$.

::venn{tipo="due" nomi="T,M" zone="a,b" universo=1 elementi="a:11;ab:6;b:8;u:5" titolo="Frequentano esattamente un laboratorio gli studenti nelle due regioni colorate"}
:::

:::osservazione{titolo="Verificare la compatibilità dei conteggi"}
Se $U$ è finito, l'intersezione è contenuta in ciascun insieme, quindi $|A\cap B|\le\min(|A|,|B|)$. Dalla relazione $|A\cup B|\le |U|$ segue anche $|A\cap B|\ge |A|+|B|-|U|$. Se in un gruppo di $20$ persone $14$ usano un servizio e $12$ un altro, almeno $14+12-20=6$ li usano entrambi. Un dato che assegna $4$ persone all'intersezione implicherebbe un'unione di $22$ persone e sarebbe incompatibile con l'universo assegnato.
:::

## Operazioni composte e leggi di De Morgan

::::teorema{#applicazioni titolo="Complementare delle operazioni"}
Per $A,B\subseteq U$, valgono le due leggi di De Morgan
$$
\begin{aligned}
(A\cup B)^c&=A^c\cap B^c,\\[6pt]
(A\cap B)^c&=A^c\cup B^c.
\end{aligned}
$$
Le leggi permettono di tradurre richieste come «nessuna delle due condizioni» usando i complementari delle singole condizioni.

:::dimostrazione
Per un elemento $x$ di $U$, appartenere a $(A\cup B)^c$ equivale a stare fuori da entrambi gli insiemi, dunque ad appartenere a $A^c\cap B^c$. Per la seconda uguaglianza, se $x$ è esterno alla parte comune, manca almeno una delle due appartenenze. Questo equivale a chiedere che $x$ appartenga ad almeno uno dei complementari. In entrambi i casi l'equivalenza vale per ogni $x$ di $U$, quindi i due insiemi sono uguali.
:::
::::

:::esempio{titolo="Fuori dalla parte comune"}
Siano $U=\{0;1;2;3;4;5;6\}$, $A=\{0;2;4;6\}$ e $B=\{4;5;6\}$. Poiché $A\cap B=\{4;6\}$, il suo complementare è $\{0;1;2;3;5\}$. Calcolando i complementari prima dell'unione si ottiene lo stesso insieme, poiché $A^c=\{1;3;5\}$ e $B^c=\{0;1;2;3\}$. Il numero $5$ appartiene a $B$ ed è esterno ad $A$, quindi resta nel complementare dell'intersezione.

::venn{tipo="due" zone="a,b,u" ambiente="U" elementi="a:0,2;ab:4,6;b:5;u:1,3" titolo="Fuori dall'intersezione restano tre regioni di $U$"}
:::

::::teorema{#distributiva titolo="Intersezione distribuita sull'unione"}
Per tre sottoinsiemi $A,B,C$ di $U$ vale
$$
A\cap(B\cup C)=(A\cap B)\cup(A\cap C).
$$
:::dimostrazione
Un elemento del primo membro sta in $A$ e in almeno uno tra $B$ e $C$. Se appartiene a $B$, sta in $A\cap B$. Se appartiene a $C$, sta in $A\cap C$. Appartiene quindi all'unione del secondo membro. Viceversa, appartenere a una delle due intersezioni garantisce l'appartenenza ad $A$ e ad almeno uno tra $B$ e $C$.
:::

Vale anche $A\cup(B\cap C)=(A\cup B)\cap(A\cup C)$. Per appartenere a entrambe le unioni, basta essere in $A$. Se si è fuori da $A$, occorre essere sia in $B$ sia in $C$.
::::

:::esempio{titolo="Un vincolo comune a due possibilità"}
Siano $A=\{1;2;3;4\}$, $B=\{2;3;5\}$ e $C=\{3;4;5;6\}$. Si ha $B\cup C=\{2;3;4;5;6\}$, quindi $A\cap(B\cup C)=\{2;3;4\}$. Con la formula distributiva si uniscono $\{2;3\}$ e $\{3;4\}$. Il numero $3$ soddisfa entrambe le possibilità e compare una volta nel risultato.

::venn{tipo="tre" zone="ab,ac,abc" universo=1 elementi="a:1;ab:2;ac:4;abc:3;bc:5;c:6;u:7" titolo="Sono colorate le parti di $A$ comprese in almeno uno tra $B$ e $C$"}
:::

## Coppie, prodotto cartesiano e relazioni

:::definizione{#relazioni titolo="Coppie ordinate e prodotto cartesiano"}
In una **coppia ordinata** $(a;b)$, $a$ è la prima coordinata e $b$ è la seconda. Le coppie $(a;b)$ e $(c;d)$ coincidono quando $a=c$ e $b=d$. Il prodotto cartesiano $A\times B$ è l'insieme delle coppie con prima coordinata in $A$ e seconda coordinata in $B$. Una relazione da $A$ a $B$ è un sottoinsieme di $A\times B$.

Se $A$ e $B$ sono finiti, ciascun elemento di $A$ genera esattamente $|B|$ coppie. Le coppie generate da due elementi distinti di $A$ hanno prime coordinate diverse, perciò si possono sommare tutti i conteggi e ottenere $|A\times B|=|A|\,|B|$. Se uno dei due insiemi è vuoto, la relazione tra le coordinate si può rispettare in zero modi, quindi il prodotto è vuoto.
:::

:::esempio{titolo="Sei coppie e una relazione"}
Siano $A=\{-1;2\}$ e $B=\{0;1;3\}$. Le coppie con prima coordinata $-1$ sono $(-1;0)$, $(-1;1)$ e $(-1;3)$. Le altre tre hanno prima coordinata $2$. La relazione che impone $a<b$ conserva tutte le tre coppie con $a=-1$ e soltanto $(2;3)$ tra quelle con $a=2$. Per decidere se $(3;2)$ appartenga alla relazione si verificano prima le coordinate. Poiché $3\notin A$, la coppia è esterna già al prodotto.

::grafico{xmin=-2 xmax=3 ymin=-1 ymax=4 punti="-1,0;-1,1;-1,3;2,0;2,1;2,3" titolo="I sei punti di $A\times B$ si dispongono su due rette verticali"}
:::

## Relazioni che sono funzioni

:::definizione{#funzioni titolo="Dominio, codominio e immagini"}
Una **funzione** $f$ da $A$ a $B$ è una relazione che assegna a ogni elemento $a$ di $A$ un unico elemento di $B$, detto immagine e indicato con $f(a)$. L'insieme $A$ è il dominio e $B$ è il codominio. L'insieme immagine $f(A)$ raccoglie gli elementi di $B$ effettivamente ottenuti. Per controllare una relazione finita si raggruppano le coppie per prima coordinata, verificando che ogni elemento del dominio abbia esattamente una coppia.
:::

:::esempio{titolo="Il codominio comprende valori non raggiunti"}
La regola $f(x)=2x+1$ con $A=\{0;1;2\}$ e $B=\{1;3;5;8\}$ produce le coppie $(0;1)$, $(1;3)$, $(2;5)$. Ogni elemento di $A$ compare una volta e tutte le seconde coordinate appartengono a $B$, quindi la regola definisce una funzione. Il codominio contiene anche $8$, mentre l'immagine è $\{1;3;5\}$. Nel grafico a ogni valore assegnato di $x$ corrisponde un solo punto.

::grafico{xmin=-1 xmax=3 ymin=0 ymax=9 punti="0,1;1,3;2,5" titolo="Il grafico contiene soltanto i punti relativi al dominio assegnato"}
:::

:::attenzione
Siano $A=\{0;1;2\}$ e $B=\{3;4\}$. La relazione $\{(0;3);(1;4)\}$ omette $2$, quindi le coppie non definiscono una funzione da $A$ a $B$. La relazione $\{(0;3);(0;4);(1;3);(2;3)\}$ assegna due immagini a $0$ e non definisce una funzione per un motivo diverso. La relazione $\{(0;3);(1;3);(2;4)\}$ soddisfa invece entrambe le condizioni. I due elementi $0$ e $1$ possono condividere l'immagine $3$, perché per ciascuno è assegnato un unico valore.
:::

## Proposizioni e tabelle di verità

:::definizione{#esempi titolo="Proposizioni e connettivi"}
Una **proposizione** è un enunciato a cui si può attribuire un valore di verità. «$7$ è pari» è una proposizione falsa. L'espressione «$x>3$» dipende dal valore di $x$. Quando si assegna $x=5$, la frase risultante è vera. Le lettere $p$ e $q$ rappresentano proposizioni. La congiunzione $p\land q$ richiede che siano entrambe vere, la disgiunzione $p\lor q$ richiede che almeno una sia vera e la negazione $\neg p$ scambia i due valori.

| $p$ | $q$ | $p\land q$ | $p\lor q$ | $\neg p$ |
|---|---|---|---|---|
| V | V | V | V | F |
| V | F | F | V | F |
| F | V | F | V | V |
| F | F | F | F | V |

Si leggono le righe con **V** per vero e **F** per falso. La prima riga è ammessa nella disgiunzione, quindi l'«oppure» usato da $\lor$ è inclusivo. La frase «esattamente uno tra $p$ e $q$» corrisponde soltanto alle due righe centrali.
:::

:::esempio{titolo="Leggere un'espressione composta"}
Siano $p$ la frase «$9$ è dispari» e $q$ la frase «$9$ è maggiore di $10$». La prima è vera e la seconda è falsa. Quindi $\neg q$ è vera e $p\land\neg q$ è vera. Invece $p\land q$ è falsa, da cui segue che $\neg(p\land q)$ è vera. Qui le due espressioni hanno lo stesso valore, ma se $p$ e $q$ sono entrambe false la prima è falsa e la seconda vera. Una sola riga concorde non stabilisce l'equivalenza.
:::

## Implicazioni, conversa e contronominale

::::teorema{#problemi titolo="Condizione sufficiente e condizione necessaria"}
L'implicazione $p\Rightarrow q$ è falsa esattamente quando $p$ è vera e $q$ è falsa. Se vale $p\Rightarrow q$, $p$ è condizione **sufficiente** per $q$ e $q$ è condizione **necessaria** per $p$. La contronominale $\neg q\Rightarrow\neg p$ ha sempre lo stesso valore di verità dell'implicazione originaria.

:::dimostrazione
La contronominale è falsa quando $\neg q$ è vera e $\neg p$ è falsa, cioè quando $q$ è falsa e $p$ è vera. Le due implicazioni sono false nello stesso caso e vere negli altri, quindi sono equivalenti.
:::
::::

:::esempio{titolo="La direzione del criterio"}
Ogni intero multiplo di $12$ è multiplo di $4$, perché dalla scrittura $12k=4(3k)$ si ricava la divisibilità per $4$. Essere multiplo di $12$ è sufficiente per essere multiplo di $4$. La **conversa** cambia l'ordine delle due condizioni e afferma che ogni multiplo di $4$ è multiplo di $12$. L'intero $8$ soddisfa l'ipotesi della conversa e non la conclusione, perciò è un controesempio. Invece la contronominale del criterio iniziale dice che ogni intero che non è multiplo di $4$ non è multiplo di $12$.
:::

## Quantificatori e negazioni

:::definizione{#quantificatori titolo="Ogni, almeno uno, nessuno"}
Sia $D$ un insieme e sia $P(x)$ una proprietà degli elementi di $D$. La frase $\forall x\in D,\ P(x)$ significa che ogni elemento di $D$ soddisfa la proprietà. La frase $\exists x\in D,\ P(x)$ significa che almeno un elemento di $D$ la soddisfa. Per negare «ogni elemento la soddisfa» occorre un elemento che la violi. Per negare «almeno un elemento la soddisfa» occorre che tutti gli elementi la violino.
$$
\begin{aligned}
\neg\bigl(\forall x\in D,\ P(x)\bigr)&\iff\exists x\in D,\ \neg P(x),\\[6pt]
\neg\bigl(\exists x\in D,\ P(x)\bigr)&\iff\forall x\in D,\ \neg P(x).
\end{aligned}
$$
:::

:::esempio{titolo="Trovare un controesempio indicando il dominio"}
Sia $D=\{-2;-1;0;1;2\}$ e si consideri la proprietà $x^2>x$. Il numero $-1$ la soddisfa, poiché $1>-1$, ma $0$ la viola, poiché $0>0$ è falsa. La frase esistenziale è quindi vera e quella universale falsa. La negazione di $x^2>x$ è $x^2\le x$. L'uguaglianza va compresa, perché è uno dei modi in cui una disuguaglianza stretta può essere violata.
:::

:::esempio{titolo="L'ordine di due quantificatori"}
In $D=\{0;1\}$ è vero che per ogni $x\in D$ esiste un $y\in D$ con $x+y=1$. Quando $x=0$ si può scegliere $y=1$, mentre quando $x=1$ serve $y=0$. Se si legge prima «esiste un $y\in D$» e poi «per ogni $x\in D$», la frase chiede una sola scelta di $y$ che funzioni per entrambe le prove. Le due prove richiedono valori diversi, quindi questa seconda frase è falsa.
:::

:::osservazione{titolo="Quando il dominio è vuoto"}
Nel dominio vuoto una frase universale è vera, perché non esiste alcun controesempio. Una frase esistenziale è falsa, perché non esiste alcun elemento che possa soddisfarla. Lo stesso ragionamento spiega perché $\varnothing$ è un sottoinsieme di ogni insieme.
:::

## Individuare il tipo di risposta

:::osservazione{#controlli titolo="Insieme, elemento e numerosità"}
Se $A=\{2;5\}$ e $B=\{5;6\}$, l'intersezione è $\{5\}$, il suo unico elemento è $5$ e la sua numerosità è $1$. Le tre risposte si distinguono dal tipo di oggetto richiesto. Nelle domande con un enunciato universale, lo stesso controllo individua invece quale oggetto può fungere da controesempio. Per smentire «ogni elemento di $A$ appartiene a $B$» basta $2$, dato che sta in $A$ ed è esterno a $B$.
:::

:::esempio{titolo="Dalla frase alle regioni, e ritorno"}
In $U=\{1;2;3;4;5;6;7;8\}$ siano $A=\{2;4;6;8\}$ gli elementi pari e $B=\{5;6;7;8\}$ quelli maggiori di $4$. La richiesta «pari oppure maggiore di $4$» seleziona $A\cup B$. La sua negazione seleziona invece $A^c\cap B^c$, cioè i numeri dispari che sono al più $4$. Si ottiene $\{1;3\}$, quindi la numerosità richiesta è $2$. Il controllo diretto conferma che $1$ e $3$ sono esterni a entrambi gli insiemi.

::venn{tipo="due" zone="u" universo=1 elementi="a:2,4;ab:6,8;b:5,7;u:1,3" titolo="La negazione dell'oppure individua la regione esterna ai due cerchi"}
:::
