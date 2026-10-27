---
titolo: Insiemi e induzione
sommario: Il linguaggio e le operazioni degli insiemi, gli insiemi numerici da N a R, l'estremo superiore e inferiore, la completezza che distingue R da Q; poi il principio di induzione, il fattoriale, i coefficienti binomiali e il binomio di Newton.
---

## Il linguaggio degli insiemi

:::definizione{#insiemi titolo="Insieme, appartenenza, inclusione"}
Un insieme è una collezione di oggetti, detti elementi. La scrittura $x \in A$ significa che $x$ è un elemento di $A$; $x \notin A$ significa che non lo è. Un insieme si assegna elencando gli elementi, come $\{1, 2, 3\}$, oppure indicando la proprietà che li individua: $\{x \in E : P(x)\}$ è l'insieme degli elementi di $E$ per cui $P(x)$ è vera. L'insieme vuoto $\emptyset$ è l'insieme privo di elementi.

$A \subseteq B$ ($A$ è contenuto in $B$, o $A$ è un sottoinsieme di $B$) significa che ogni elemento di $A$ appartiene anche a $B$. L'uguaglianza tra insiemi equivale alla doppia inclusione:
$$
A = B \iff
\begin{cases}
A \subseteq B \\[2pt]
B \subseteq A
\end{cases}
$$
La doppia inclusione è il metodo con cui si dimostra che due insiemi sono uguali: si verificano separatamente le due inclusioni.
:::

:::esempio
$A = \{x \in \mathbb{R} : x^2 < 4\}$. Si ha $1 \in A$ perché $1^2 = 1 < 4$, e $3 \notin A$ perché $3^2 = 9 \geq 4$. Inoltre $\{0, 1\} \subseteq A$, perché entrambi gli elementi soddisfano la condizione $x^2 < 4$.
:::

:::attenzione
I simboli $\in$ e $\subseteq$ hanno significati diversi: $\in$ lega un elemento a un insieme, $\subseteq$ lega due insiemi. Per $A = \{1, 2\}$ le scritture corrette sono $1 \in A$ e $\{1\} \subseteq A$; le scritture $1 \subseteq A$ e $\{1\} \in A$ sono false, perché $\{1\}$ non è uno dei due elementi di $A$ e $1$ non è un insieme.
:::

## Operazioni tra insiemi

:::definizione{#operazioni-tra-insiemi titolo="Unione, intersezione, differenza, complementare"}
Per $A$ e $B$ sottoinsiemi di un insieme ambiente $E$:
$$
\begin{gathered}
A \cup B = \{x : x \in A \text{ oppure } x \in B\}, \qquad
A \cap B = \{x : x \in A \text{ e } x \in B\}, \\[6pt]
A \setminus B = \{x : x \in A \text{ e } x \notin B\}, \qquad
A^{c} = E \setminus A .
\end{gathered}
$$
L'oppure dell'unione non è esclusivo: gli elementi comuni ad $A$ e $B$ appartengono all'unione. Se $A \cap B = \emptyset$, gli insiemi si dicono disgiunti. Il complementare dipende dall'ambiente $E$; per i sottoinsiemi di $\mathbb{R}$, salvo indicazione contraria, l'ambiente è $\mathbb{R}$. Le operazioni traducono i connettivi logici, perciò l'insieme delle soluzioni di un sistema di disequazioni è l'intersezione degli insiemi delle soluzioni delle singole disequazioni, e l'insieme delle soluzioni di una disequazione risolta per casi è l'unione delle soluzioni dei casi.
:::

:::esempio
$A = \{1, 2, 3, 4\}$ e $B = \{3, 4, 5\}$, con ambiente $E = \{1, 2, 3, 4, 5, 6\}$:
$$
A \cup B = \{1, 2, 3, 4, 5\}, \quad A \cap B = \{3, 4\}, \quad A \setminus B = \{1, 2\}, \quad B \setminus A = \{5\}, \quad A^{c} = \{5, 6\} .
$$
:::

:::definizione{#prodotto-cartesiano titolo="Prodotto cartesiano"}
Il prodotto cartesiano di $A$ e $B$ è l'insieme delle coppie ordinate
$$
A \times B = \{(a, b) : a \in A,\ b \in B\} .
$$
Nelle coppie l'ordine conta, quindi in generale $A \times B \neq B \times A$: per $A = \{1, 2\}$ e $B = \{0\}$ si ha $A \times B = \{(1, 0), (2, 0)\}$ e $B \times A = \{(0, 1), (0, 2)\}$. L'insieme $\mathbb{R}^2 = \mathbb{R} \times \mathbb{R}$ è il piano cartesiano: i grafici delle funzioni sono suoi sottoinsiemi, perciò il prodotto cartesiano è l'ambiente di tutto il capitolo sulle funzioni.
:::

## Gli insiemi numerici

:::definizione{#insiemi-numerici titolo="Gli insiemi numerici N, Z, Q, R"}
$$
\mathbb{N} = \{0, 1, 2, 3, \dots\}, \qquad
\mathbb{Z} = \{\dots, -2, -1, 0, 1, 2, \dots\}, \qquad
\mathbb{Q} = \left\{ \frac{m}{n} : m \in \mathbb{Z},\ n \in \mathbb{N},\ n \geq 1 \right\} .
$$
$\mathbb{R}$ è l'insieme dei numeri reali, rappresentabili come allineamenti decimali finiti o infiniti; i razionali sono esattamente quelli con sviluppo decimale finito o periodico. Valgono le inclusioni strette $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$. Ogni ampliamento rende risolubili equazioni che prima non lo erano: $x + 3 = 1$ non ha soluzione in $\mathbb{N}$ e la ha in $\mathbb{Z}$; $2x = 1$ non ha soluzione in $\mathbb{Z}$ e la ha in $\mathbb{Q}$; $x^2 = 2$ non ha soluzione in $\mathbb{Q}$, come mostra il teorema sull'irrazionalità di $\sqrt{2}$, e la ha in $\mathbb{R}$. I numeri reali non razionali si dicono irrazionali. $\mathbb{Q}$ è denso in $\mathbb{R}$: tra due numeri reali distinti esiste sempre un numero razionale, e anche un numero irrazionale.
:::

::::teorema{#radice-di-due titolo="Irrazionalità di radice di 2"}
Non esiste alcun numero razionale $x$ tale che $x^2 = 2$: il numero $\sqrt{2}$ è irrazionale. Il teorema mostra che $\mathbb{Q}$ ha delle lacune, dato che già la geometria elementare produce la lunghezza $\sqrt{2}$ come diagonale del quadrato di lato $1$. Lo stesso schema per assurdo dimostra l'irrazionalità di $\sqrt{3}$, $\sqrt{5}$, $\sqrt{6}$ e in generale di $\sqrt{p}$ con $p$ primo.

:::dimostrazione
Per assurdo esista un razionale con quadrato $2$ e lo si scriva come frazione ridotta ai minimi termini: $x = \dfrac{m}{n}$ con $m$ e $n$ interi privi di divisori comuni, $n \geq 1$. Da $\dfrac{m^2}{n^2} = 2$ segue $m^2 = 2n^2$, quindi $m^2$ è pari. Il quadrato di un numero dispari è dispari, perciò $m$ è pari: $m = 2k$ con $k$ intero. Sostituendo si ottiene $4k^2 = 2n^2$, cioè $n^2 = 2k^2$, quindi anche $n^2$ è pari e, per lo stesso motivo, $n$ è pari. Allora $m$ e $n$ hanno il divisore comune $2$, il che contraddice l'ipotesi che la frazione sia ridotta ai minimi termini. L'assurdo mostra che un tale razionale non esiste.
:::
::::

## Intervalli

:::definizione{#intervalli titolo="Intervalli e loro notazione"}
Un intervallo è un sottoinsieme $I \subseteq \mathbb{R}$ con questa proprietà: presi due punti di $I$, ogni numero reale compreso tra essi appartiene a $I$. Per $a < b$ reali:
$$
\begin{gathered}
(a, b) = \{x : a < x < b\}, \qquad [a, b] = \{x : a \leq x \leq b\}, \\[6pt]
[a, b) = \{x : a \leq x < b\}, \qquad (a, b] = \{x : a < x \leq b\}, \\[6pt]
(a, +\infty) = \{x : x > a\}, \qquad (-\infty, b] = \{x : x \leq b\}, \qquad (-\infty, +\infty) = \mathbb{R} .
\end{gathered}
$$
La parentesi tonda esclude l'estremo, la quadra lo include; accanto a $+\infty$ e $-\infty$, che non sono numeri reali, la parentesi è sempre tonda. $[a, b]$ si dice intervallo chiuso e limitato, $(a, b)$ intervallo aperto. I domini delle funzioni elementari e gli insiemi delle soluzioni delle disequazioni sono intervalli o unioni di intervalli, quindi questa notazione compare in ogni studio di funzione.
:::

:::esempio{titolo="Operazioni tra intervalli"}
$A = [0, 4)$ e $B = (2, 6]$:
$$
A \cup B = [0, 6], \qquad A \cap B = (2, 4), \qquad A \setminus B = [0, 2], \qquad A^{c} = (-\infty, 0) \cup [4, +\infty) .
$$
Il punto $2$ appartiene ad $A \setminus B$ perché $2 \in A$ e $2 \notin B$, dato che $B$ esclude il proprio estremo sinistro.
:::

## Maggioranti, minoranti, massimo e minimo

:::definizione{#maggioranti-minoranti titolo="Maggiorante, minorante, insieme limitato"}
Sia $A \subseteq \mathbb{R}$ non vuoto. Un numero $M \in \mathbb{R}$ è un maggiorante di $A$ se $a \leq M$ per ogni $a \in A$; un numero $m \in \mathbb{R}$ è un minorante se $m \leq a$ per ogni $a \in A$. $A$ si dice limitato superiormente se ha almeno un maggiorante, limitato inferiormente se ha almeno un minorante, limitato se è limitato sia superiormente sia inferiormente. Un maggiorante può non appartenere all'insieme: i maggioranti di $(0, 1)$ sono tutti i numeri di $[1, +\infty)$, e nessuno di essi sta in $(0, 1)$. Se $M$ è un maggiorante, ogni numero più grande di $M$ lo è, quindi l'informazione utile è il più piccolo dei maggioranti: questo numero, quando esiste, è l'estremo superiore.
:::

:::definizione{#massimo-minimo titolo="Massimo e minimo"}
Il massimo di $A$ è un maggiorante che appartiene all'insieme:
$$
M = \max A \iff
\begin{cases}
M \in A \\[2pt]
a \leq M \quad \text{per ogni } a \in A
\end{cases}
$$
Il minimo è definito in modo analogo con i minoranti. Il massimo, quando esiste, è unico: se $M_1$ e $M_2$ sono entrambi massimi, allora $M_1 \leq M_2$ perché $M_2$ è un maggiorante e $M_1 \in A$, e $M_2 \leq M_1$ per lo stesso motivo, quindi $M_1 = M_2$.
:::

:::esempio
$[0, 1]$ ha minimo $0$ e massimo $1$. L'intervallo $(0, 1)$ non ha massimo: infatti per ogni $x \in (0, 1)$ il punto $\dfrac{x + 1}{2}$ appartiene a $(0, 1)$ ed è maggiore di $x$, quindi nessun elemento dell'insieme è un maggiorante. Per lo stesso motivo $(0, 1)$ non ha minimo.
:::

## Estremo superiore e inferiore

:::definizione{#sup-inf titolo="Estremo superiore e inferiore"}
Sia $A \subseteq \mathbb{R}$ non vuoto. L'estremo superiore di $A$, indicato con $\sup A$, è il minimo dell'insieme dei maggioranti di $A$; l'estremo inferiore $\inf A$ è il massimo dell'insieme dei minoranti. Se $A$ non è limitato superiormente si pone $\sup A = +\infty$; se non è limitato inferiormente, $\inf A = -\infty$. Se il massimo esiste, allora $\sup A = \max A$; viceversa, se $\sup A \in A$, allora $\sup A$ è il massimo di $A$. L'estremo superiore esiste anche quando il massimo non esiste: $\sup\,(0, 1) = 1$ e $\inf\,(0, 1) = 0$, e nessuno dei due appartiene all'intervallo. Per questo sup e inf sono gli strumenti con cui si descrive la limitatezza di un insieme e, nei capitoli successivi, di una funzione o di una successione.
:::

::::teorema{#caratterizzazione-sup titolo="Caratterizzazione di sup e inf con epsilon"}
Siano $A \subseteq \mathbb{R}$ non vuoto e $L \in \mathbb{R}$. Allora $L = \sup A$ se e solo se
$$
\begin{cases}
a \leq L \quad \text{per ogni } a \in A \\[4pt]
\text{per ogni } \varepsilon > 0 \ \text{esiste } a \in A \ \text{tale che } a > L - \varepsilon
\end{cases}
$$
Analogamente, $\ell = \inf A$ se e solo se $\ell \leq a$ per ogni $a \in A$ e per ogni $\varepsilon > 0$ esiste $a \in A$ tale che $a < \ell + \varepsilon$. La prima condizione dice che $L$ è un maggiorante; la seconda che, scesi sotto $L$ di una qualunque quantità $\varepsilon$, l'insieme contiene un elemento oltre $L - \varepsilon$. Nelle verifiche la seconda condizione diventa una disequazione nella variabile che descrive gli elementi di $A$.

:::dimostrazione
La seconda condizione afferma che, per ogni $\varepsilon > 0$, il numero $L - \varepsilon$ non è un maggiorante di $A$. Poiché ogni numero minore di $L$ si scrive come $L - \varepsilon$ con un opportuno $\varepsilon > 0$, le due condizioni insieme equivalgono a: $L$ è un maggiorante di $A$ e nessun numero minore di $L$ lo è. Questo significa che $L$ è il minimo dei maggioranti, cioè $L = \sup A$. Per l'estremo inferiore si ragiona allo stesso modo con i minoranti.
:::
::::

:::osservazione
Per gli insiemi non limitati la caratterizzazione prende una forma diversa: $\sup A = +\infty$ equivale a dire che per ogni $M > 0$ esiste $a \in A$ con $a > M$. In particolare $\sup \mathbb{N} = +\infty$, perché per ogni reale $M$ esiste un naturale maggiore di $M$ (proprietà archimedea dei numeri reali). Questo fatto interviene in quasi tutte le verifiche con $\varepsilon$, per garantire l'esistenza di un naturale $n > \dfrac{1}{\varepsilon}$.
:::

:::esempio{titolo="Verifica con la caratterizzazione"}
$A = \left\{ \dfrac{1}{n} : n \in \mathbb{N},\ n \geq 1 \right\}$. L'estremo superiore è $1$: infatti $1 \in A$ e $\dfrac{1}{n} \leq 1$ per ogni $n \geq 1$, quindi $1$ è il massimo, e il massimo coincide con l'estremo superiore. L'estremo inferiore è $0$: poiché $\dfrac{1}{n} > 0$ per ogni $n$, il numero $0$ è un minorante; fissato $\varepsilon > 0$, per la proprietà archimedea esiste un naturale $n > \dfrac{1}{\varepsilon}$, e per questo $n$ si ha $\dfrac{1}{n} < \varepsilon$. Le due condizioni della caratterizzazione sono soddisfatte, perciò $\inf A = 0$. Poiché $0 \notin A$, l'insieme non ha minimo.
:::

## La completezza di R

:::teorema{#completezza titolo="Completezza di R"}
Ogni sottoinsieme di $\mathbb{R}$ non vuoto e limitato superiormente ammette estremo superiore in $\mathbb{R}$; ogni sottoinsieme non vuoto e limitato inferiormente ammette estremo inferiore. Questa proprietà si chiama completezza e si assume come assioma dei numeri reali. Distingue $\mathbb{R}$ da $\mathbb{Q}$ ed è l'ipotesi da cui dipendono i teoremi di esistenza dell'analisi: la dimostrazione del teorema degli zeri, nel capitolo sui limiti e sulla continuità, costruisce lo zero proprio come estremo superiore di un insieme.
:::

:::osservazione
In $\mathbb{Q}$ la completezza non vale. Sia $A = \{x \in \mathbb{Q} : x \geq 0,\ x^2 < 2\}$: è non vuoto, perché $1 \in A$, ed è limitato superiormente, perché da $x \geq 2$ segue $x^2 \geq 4 > 2$, quindi $2$ è un maggiorante. In $\mathbb{R}$ il suo estremo superiore è $\sqrt{2}$, che non è razionale. Tra i soli numeri razionali, invece, $A$ non ha estremo superiore. Ogni maggiorante razionale $L$ soddisfa $L > \sqrt{2}$: se fosse $L < \sqrt{2}$, per la densità di $\mathbb{Q}$ esisterebbe un razionale $q$ con $L < q < \sqrt{2}$, che apparterrebbe ad $A$ (è positivo, perché $L \geq 1$, e il suo quadrato è minore di $2$) e supererebbe $L$; l'uguaglianza $L = \sqrt{2}$ è esclusa perché $\sqrt{2} \notin \mathbb{Q}$. Di nuovo per densità esiste allora un razionale $q'$ con $\sqrt{2} < q' < L$, e $q'$ è un maggiorante di $A$ più piccolo di $L$, poiché ogni $x \in A$ soddisfa $x < \sqrt{2} < q'$. Quindi nessun maggiorante razionale è il minimo dei maggioranti razionali e, dentro $\mathbb{Q}$, l'insieme $A$ non ha estremo superiore.
:::

## Il principio di induzione

:::teorema{#induzione titolo="Principio di induzione"}
Sia $P(n)$ una proposizione che dipende da un numero naturale $n$ e sia $n_0 \in \mathbb{N}$. Se
$$
\begin{cases}
P(n_0) \ \text{è vera} \\[4pt]
\text{per ogni } n \geq n_0, \ \text{se } P(n) \ \text{è vera allora } P(n+1) \ \text{è vera}
\end{cases}
$$
allora $P(n)$ è vera per ogni $n \geq n_0$. La prima condizione si chiama base dell'induzione, la seconda passo induttivo; nel passo, la proposizione $P(n)$ che si suppone vera si chiama ipotesi induttiva. Il principio si assume come proprietà dell'insieme $\mathbb{N}$. Serve per dimostrare identità, disuguaglianze e proprietà di divisibilità che dipendono da un indice naturale, e ogni dimostrazione per induzione si organizza negli stessi due punti: verifica della base e verifica del passo. Le prime applicazioni sono la formula della somma dei primi $n$ naturali e la disuguaglianza di Bernoulli.
:::

:::attenzione
Il passo induttivo da solo non basta: senza la base non si conclude nulla. Per la proposizione $P(n)$: "$n \geq n + 1$" il passo è verificato, perché sommando $1$ ai due membri da $n \geq n + 1$ segue $n + 1 \geq n + 2$; la base è falsa per ogni scelta di $n_0$, e infatti nessuna $P(n)$ è vera.
:::

## La somma dei primi n naturali

::::teorema{#somma-dei-primi-n titolo="Somma dei primi n naturali"}
Per ogni $n \geq 1$:
$$
1 + 2 + \cdots + n = \sum_{k=1}^{n} k = \frac{n(n+1)}{2} .
$$
È il primo esempio di dimostrazione per induzione e la formula ricompare nel calcolo di somme e nel capitolo sulle serie. Per esempio, la somma dei primi $100$ naturali vale $\dfrac{100 \cdot 101}{2} = 5050$.

:::dimostrazione
Base ($n = 1$): il primo membro vale $1$ e il secondo $\dfrac{1 \cdot 2}{2} = 1$, quindi $P(1)$ è vera. Passo: sia vera $P(n)$, cioè $\displaystyle\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$. Allora
$$
\sum_{k=1}^{n+1} k
= \sum_{k=1}^{n} k + (n+1)
= \frac{n(n+1)}{2} + (n+1)
= (n+1)\left( \frac{n}{2} + 1 \right)
= \frac{(n+1)(n+2)}{2} ,
$$
che è la formula con $n + 1$ al posto di $n$. Quindi $P(n)$ implica $P(n+1)$ e, per il principio di induzione, la formula vale per ogni $n \geq 1$.
:::
::::

## La disuguaglianza di Bernoulli

::::teorema{#bernoulli titolo="Disuguaglianza di Bernoulli"}
Per ogni numero reale $x \geq -1$ e ogni $n \in \mathbb{N}$:
$$
(1 + x)^n \geq 1 + nx .
$$
La disuguaglianza stima dal basso una potenza con un'espressione di primo grado in $n$, molto più semplice da controllare. Con $x = 1$ dà $2^n \geq 1 + n$ per ogni $n$. Si usa nello studio della successione geometrica e nella costruzione del numero $e$; si rimanda al capitolo sulle successioni.

:::dimostrazione
Si procede per induzione su $n$, con $x \geq -1$ fissato. Base ($n = 0$): $(1 + x)^0 = 1$ e $1 + 0 \cdot x = 1$, quindi la disuguaglianza vale con l'uguale. Passo: sia $(1 + x)^n \geq 1 + nx$. Poiché $x \geq -1$, il fattore $1 + x$ è non negativo, quindi moltiplicando i due membri dell'ipotesi induttiva per $1 + x$ il verso non cambia:
$$
(1 + x)^{n+1}
= (1 + x)^n (1 + x)
\geq (1 + nx)(1 + x)
= 1 + (n+1)x + nx^2
\geq 1 + (n+1)x ,
$$
dato che $nx^2 \geq 0$. Per il principio di induzione la disuguaglianza vale per ogni $n$. L'ipotesi $x \geq -1$ è usata nel passo: garantisce che la moltiplicazione per $1 + x$ conservi il verso della disuguaglianza.
:::
::::

## Il fattoriale

:::definizione{#fattoriale titolo="Fattoriale"}
Per $n \geq 1$ il fattoriale di $n$ è il prodotto dei naturali da $1$ a $n$:
$$
n! = n \cdot (n-1) \cdots 2 \cdot 1, \qquad 0! = 1 .
$$
Vale la formula ricorsiva $(n+1)! = (n+1) \cdot n!$, e la scelta $0! = 1$ la rende valida anche per $n = 0$, oltre a dare senso alle formule dei coefficienti binomiali. I primi valori sono $1! = 1$, $2! = 2$, $3! = 6$, $4! = 24$, $5! = 120$. Il fattoriale conta i modi di ordinare $n$ oggetti distinti e cresce molto rapidamente: $10! = 3628800$. Nei calcoli i fattoriali si semplificano con la formula ricorsiva, per esempio $\dfrac{10!}{8!} = 10 \cdot 9 = 90$.
:::

## I coefficienti binomiali

:::definizione{#coefficiente-binomiale titolo="Coefficiente binomiale"}
Per $n, k \in \mathbb{N}$ con $0 \leq k \leq n$:
$$
\binom{n}{k} = \frac{n!}{k!\,(n-k)!} .
$$
Il coefficiente binomiale conta i sottoinsiemi di $k$ elementi di un insieme di $n$ elementi, perciò è sempre un numero naturale. Nei calcoli conviene semplificare i fattoriali prima di moltiplicare:
$$
\binom{5}{2} = \frac{5!}{2!\,3!} = \frac{5 \cdot 4}{2} = 10 .
$$
:::

:::teorema{#proprieta-binomiali titolo="Proprietà dei coefficienti binomiali"}
Per $0 \leq k \leq n$:
$$
\binom{n}{0} = \binom{n}{n} = 1, \qquad
\binom{n}{k} = \binom{n}{n-k}, \qquad
\binom{n}{k} + \binom{n}{k+1} = \binom{n+1}{k+1} \quad (k \leq n - 1).
$$
Le prime due proprietà seguono dalla definizione, poiché scambiare $k$ con $n - k$ lascia invariato il denominatore $k!\,(n-k)!$. La terza è la formula di Stifel e si verifica riducendo le due frazioni allo stesso denominatore $(k+1)!\,(n-k)!$. La formula di Stifel genera il triangolo di Tartaglia, nel quale ogni coefficiente è la somma dei due coefficienti sopra di esso, e interviene nel passo induttivo della dimostrazione del binomio di Newton. Per esempio $\dbinom{4}{1} + \dbinom{4}{2} = 4 + 6 = 10 = \dbinom{5}{2}$.
:::

## Il binomio di Newton

:::teorema{#binomio-di-newton titolo="Formula del binomio di Newton"}
Per ogni coppia di numeri reali $a$ e $b$ e ogni $n \in \mathbb{N}$:
$$
(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{\,n-k}\, b^{\,k}
= a^n + n\,a^{n-1}b + \binom{n}{2} a^{n-2}b^2 + \cdots + n\,a\,b^{n-1} + b^n .
$$
Per $n = 2$ e $n = 3$ la formula restituisce il quadrato e il cubo del binomio. La dimostrazione procede per induzione su $n$: nel passo si moltiplica lo sviluppo di $(a+b)^n$ per $a + b$ e si raggruppano i termini simili con la formula di Stifel. La formula permette di sviluppare una potenza qualunque di un binomio e di determinare un singolo termine dello sviluppo senza calcolare gli altri: il termine che contiene $b^k$ è $\dbinom{n}{k} a^{\,n-k} b^{\,k}$.
:::

:::esempio{titolo="Sviluppo di una potenza"}
$$
(x + 2)^4
= \sum_{k=0}^{4} \binom{4}{k} x^{\,4-k}\, 2^{\,k}
= x^4 + 4 \cdot 2\,x^3 + 6 \cdot 4\,x^2 + 4 \cdot 8\,x + 16
= x^4 + 8x^3 + 24x^2 + 32x + 16 .
$$
I coefficienti binomiali $1, 4, 6, 4, 1$ sono la riga $n = 4$ del triangolo di Tartaglia; ciascuno va moltiplicato per la corrispondente potenza di $2$.
:::

:::osservazione
Dalla formula con $a = b = 1$ segue
$$
\sum_{k=0}^{n} \binom{n}{k} = 2^n ,
$$
quindi un insieme di $n$ elementi ha in tutto $2^n$ sottoinsiemi, dato che $\dbinom{n}{k}$ conta quelli di $k$ elementi. Con $a = 1$ e $b = -1$ si ottiene invece $\displaystyle\sum_{k=0}^{n} (-1)^k \binom{n}{k} = 0$ per ogni $n \geq 1$.
:::
