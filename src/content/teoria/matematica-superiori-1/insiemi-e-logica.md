---
titolo: "Insiemi e logica elementare"
sommario: "Appartenenza, inclusione, operazioni tra insiemi, conteggi, coppie ordinate e primi esempi di funzioni. Proposizioni, implicazioni e negazioni."
---

:::percorso
Parti dalla lettura dei simboli e dalle operazioni tra insiemi. Passa poi ai problemi di conteggio e alle frasi logiche: per ogni risposta devi poter indicare gli elementi coinvolti oppure la condizione che la rende vera. Sono sufficienti le quattro operazioni e il confronto tra numeri.
:::

## Elementi, insiemi e sottoinsiemi

:::definizione{#concetti titolo="Appartenenza e inclusione"}
Un insieme è una raccolta di elementi individuati da una condizione precisa. Si può descrivere per **elencazione**, come $A=\{1;2;3\}$, oppure attraverso una proprietà, come «gli interi positivi minori di quattro». L'ordine degli elementi e le ripetizioni non cambiano l'insieme.

Il simbolo $2\in A$ significa che $2$ appartiene ad $A$; $4\notin A$ significa che non vi appartiene. L'**insieme vuoto** $\varnothing$ non contiene elementi: è diverso da $\{0\}$, che contiene il numero zero.

Si scrive $C\subseteq A$ quando ogni elemento di $C$ appartiene anche ad $A$. Se inoltre $C\ne A$, l'inclusione è propria: $C\subsetneq A$. Per esempio $\{1;2\}\subsetneq\{1;2;3\}$. L'appartenenza confronta un elemento con un insieme; l'inclusione confronta due insiemi.

L'**universo** $U$ specifica quali elementi si stanno considerando. Ogni complementare dipende da questa scelta. Il simbolo $|A|$ indica il numero di elementi di un insieme finito.
:::

## Unione, intersezione, differenza e complementare

:::definizione{#regole titolo="Quattro operazioni"}
L'**unione** $A\cup B$ contiene gli elementi che appartengono ad almeno uno dei due insiemi. L'**intersezione** $A\cap B$ contiene quelli comuni a entrambi. La **differenza** $A\setminus B$ contiene gli elementi di $A$ che non appartengono a $B$. Il **complementare** di $A$ rispetto a $U$ è $U\setminus A$.

Considera $U=\{1;2;3;4;5;6\}$, $A=\{1;2;3\}$ e $B=\{3;4;5\}$. Allora
$$
A\cup B=\{1;2;3;4;5\},\qquad A\cap B=\{3\},
$$
$$
A\setminus B=\{1;2\},\qquad U\setminus A=\{4;5;6\}.
$$
L'elemento $3$ compare una sola volta nell'unione. La differenza dipende dall'ordine: $B\setminus A=\{4;5\}$. Due insiemi sono **disgiunti** quando la loro intersezione è vuota.

::venn{tipo="due" zone="ab" universo=1 elementi="a:1,2;ab:3;b:4,5;u:6" titolo="L'intersezione $A\cap B$ contiene soltanto $3$, comune ai due insiemi"}

::venn{tipo="due" zone="a" universo=1 elementi="a:1,2;ab:3;b:4,5;u:6" titolo="La differenza $A\setminus B$ conserva $1$ e $2$, escludendo la parte comune"}

::venn{tipo="due" zone="b,u" universo=1 elementi="a:1,2;ab:3;b:4,5;u:6" titolo="Il complementare $U\setminus A$ comprende $4$, $5$ e $6$"}
:::

## Contare senza ripetere gli elementi

:::teorema{#metodo titolo="La formula dell'unione"}
Per due insiemi finiti,
$$
|A\cup B|=|A|+|B|-|A\cap B|.
$$
La somma $|A|+|B|$ conta due volte gli elementi comuni; sottrarre una volta l'intersezione corregge il doppio conteggio. Se gli insiemi sono disgiunti, basta sommare le due numerosità.

In una classe di $25$ studenti, $15$ studiano inglese, $10$ francese e $5$ entrambe le lingue. Studiano almeno una delle due lingue $15+10-5=20$ studenti. Studiano soltanto inglese $15-5=10$ studenti; soltanto francese $10-5=5$. Non studiano nessuna delle due lingue $25-20=5$ studenti.

Le quattro regioni disgiunte hanno numerosità $10$, $5$, $5$, $5$: la somma restituisce $25$. Questo controllo è utile prima di scegliere la risposta di un quiz.
:::

## Coppie ordinate, relazioni e funzioni

:::definizione{#relazioni titolo="Dal prodotto cartesiano a una regola di corrispondenza"}
Una **coppia ordinata** $(a;b)$ distingue il primo elemento dal secondo. Il prodotto cartesiano $A\times B$ contiene tutte le coppie con primo elemento in $A$ e secondo in $B$. Se $A=\{1;2\}$ e $B=\{3;4;5\}$, allora
$$
A\times B=\{(1;3);(1;4);(1;5);(2;3);(2;4);(2;5)\}.
$$
Ci sono $2\cdot3=6$ coppie: in generale $|A\times B|=|A|\,|B|$. La coppia $(3;1)$ non appartiene al prodotto dell'esempio.

Una **relazione** da $A$ a $B$ è un insieme di coppie scelte in $A\times B$. Una **funzione** da $A$ a $B$ associa a ogni elemento di $A$ esattamente un elemento di $B$. Nessun elemento di partenza può restare senza immagine o avere due immagini diverse; elementi diversi possono avere la stessa immagine.

La regola $f(x)=2x+1$, con dominio $D=\{0;1;2\}$ e insieme di arrivo $E=\{1;3;5\}$, definisce una funzione:

| $x$ | $0$ | $1$ | $2$ |
|---|---|---|---|
| $f(x)$ | $1$ | $3$ | $5$ |

La tabella mostra tutte le immagini perché il dominio contiene soltanto questi tre elementi. Per controllare una corrispondenza, verifica sempre il dominio dichiarato.
:::

## Proposizioni e connettivi

:::definizione{#esempi titolo="E, oppure, non"}
Una **proposizione** è una frase a cui si può attribuire un valore di verità. «$4$ è pari» è vera; «$4$ è dispari» è falsa. Una frase come «$x>3$» diventa vera o falsa quando si precisa il valore di $x$.

La congiunzione $p\land q$ è vera quando entrambe le proposizioni sono vere. La disgiunzione $p\lor q$ usa l'**oppure inclusivo**: è vera quando almeno una è vera, anche se lo sono entrambe. La negazione $\neg p$ scambia vero e falso.

| $p$ | $q$ | $p\land q$ | $p\lor q$ |
|---|---|---|---|
| Vera | Vera | Vera | Vera |
| Vera | Falsa | Falsa | Vera |
| Falsa | Vera | Falsa | Vera |
| Falsa | Falsa | Falsa | Falsa |

Per esempio «$6$ è pari e maggiore di $10$» è falsa, mentre «$6$ è pari oppure maggiore di $10$» è vera. L'intersezione corrisponde a una richiesta con “e”; l'unione a una richiesta con “oppure”.
:::

## Implicazioni e negazioni corrette

:::teorema{#problemi titolo="Ipotesi, conclusione e controesempio"}
L'implicazione $p\Rightarrow q$ si legge «se $p$, allora $q$». È falsa nel caso in cui l'ipotesi $p$ sia vera e la conclusione $q$ sia falsa. Un esempio con questa caratteristica è un **controesempio**.

«Se un intero è multiplo di $6$, allora è multiplo di $3$» è vera. L'implicazione inversa è falsa: $3$ è multiplo di $3$, ma non di $6$. La **contronominale** $\neg q\Rightarrow\neg p$ è invece equivalente all'implicazione iniziale: «se un intero non è multiplo di $3$, allora non è multiplo di $6$».

Negare «tutti gli studenti hanno consegnato» significa «almeno uno studente non ha consegnato». Negare «esiste uno studente che ha consegnato» significa «nessuno studente ha consegnato». Occorre mantenere lo stesso gruppo di riferimento.

Per un numero reale $x$, la negazione di $x>4$ è $x\le4$: anche l'uguaglianza rende falsa la frase iniziale. Analogamente, negare «$x>0$ e $x<3$» dà «$x\le0$ oppure $x\ge3$».
:::

## Un esempio con più operazioni

:::esempio{#applicazioni titolo="Prima l'unione, poi il complementare"}
Siano $U=\{1;2;3;4;5;6\}$, $A=\{1;2;3\}$ e $B=\{3;4;5\}$. Per trovare $U\setminus(A\cup B)$ si calcola prima $A\cup B=\{1;2;3;4;5\}$. Eliminando questi elementi dall'universo resta $\{6\}$.

Il risultato raccoglie gli elementi che non appartengono né ad $A$ né a $B$. Corrisponde anche all'intersezione dei complementari:
$$
(U\setminus A)\cap(U\setminus B)=\{4;5;6\}\cap\{1;2;6\}=\{6\}.
$$
Il controllo elemento per elemento permette di verificare l'uguaglianza senza affidarsi soltanto alla memoria dei simboli.
:::

## Controlli prima della risposta

:::osservazione{#controlli titolo="Leggere esattamente la richiesta"}
Controlla se la domanda chiede un insieme, un elemento o una numerosità. Distingui “almeno uno” da “esattamente uno” e “nessuno” da “non tutti”. Nel prodotto cartesiano verifica entrambe le posizioni della coppia; nel complementare individua l'universo.

Per smentire una frase universale basta un controesempio. Un solo esempio favorevole, invece, non dimostra che la frase valga per tutti. In un problema di conteggio, tutte le numerosità devono essere intere e non negative; l'intersezione non può avere più elementi di uno dei due insiemi.
:::
