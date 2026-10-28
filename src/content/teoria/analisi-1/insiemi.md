---
titolo: Insiemi, induzione e funzioni elementari
sommario: Il linguaggio degli insiemi e gli insiemi numerici da N a R, il principio di induzione e il binomio di Newton, poi le funzioni elementari con i loro grafici, il bagaglio di partenza per tutta l'analisi.
---

## Il linguaggio degli insiemi

:::definizione{#insiemi titolo="Insieme, appartenenza, inclusione"}
Un **insieme** è una collezione di oggetti, detti **elementi**. La scrittura $x \in A$ significa che $x$ è un elemento di $A$; $x \notin A$ significa che non lo è. Un insieme si assegna elencando gli elementi, come $\{1, 2, 3\}$, oppure indicando la proprietà che li individua: $\{x \in E : P(x)\}$ è l'insieme degli elementi di $E$ per cui $P(x)$ è vera. L'insieme vuoto $\emptyset$ è l'insieme privo di elementi.

$A \subseteq B$ ($A$ è contenuto in $B$, o $A$ è un **sottoinsieme** di $B$) significa che *ogni* elemento di $A$ appartiene anche a $B$. L'uguaglianza tra insiemi equivale alla **doppia inclusione**:
$$
A = B \iff
\begin{cases}
A \subseteq B \\[2pt]
B \subseteq A
\end{cases}
$$
La doppia inclusione è il metodo con cui si dimostra che due insiemi sono uguali: si verificano *separatamente* le due inclusioni.

::venn{tipo="incluso" nomi="B,A" zone="ab" titolo="$A \subseteq B$: ogni elemento di $A$ appartiene anche a $B$"}

:::

:::esempio
$A = \{x \in \mathbb{R} : x^2 < 4\}$. Si ha $1 \in A$ perché $1^2 = 1 < 4$, e $3 \notin A$ perché $3^2 = 9 \geq 4$. Inoltre $\{0, 1\} \subseteq A$, perché entrambi gli elementi soddisfano la condizione $x^2 < 4$.
:::

:::attenzione
I simboli $\in$ e $\subseteq$ hanno significati **diversi**: $\in$ lega un elemento a un insieme, $\subseteq$ lega due insiemi. Per $A = \{1, 2\}$ le scritture corrette sono $1 \in A$ e $\{1\} \subseteq A$; le scritture $1 \subseteq A$ e $\{1\} \in A$ sono **false**, perché $1$ non è un insieme e $\{1\}$ non è uno dei due elementi di $A$.
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
L'oppure dell'unione *non* è esclusivo: gli elementi comuni ad $A$ e $B$ appartengono all'unione. Se $A \cap B = \emptyset$, gli insiemi si dicono **disgiunti**. Il complementare dipende dall'ambiente $E$; per i sottoinsiemi di $\mathbb{R}$, salvo indicazione contraria, l'ambiente è $\mathbb{R}$. Le operazioni traducono i connettivi logici, perciò l'insieme delle soluzioni di un sistema di disequazioni è l'**intersezione** degli insiemi delle soluzioni delle singole disequazioni, e l'insieme delle soluzioni di una disequazione risolta per casi è l'**unione** delle soluzioni dei casi.

::venn{tipo="disgiunti" titolo="Insiemi disgiunti: $A \cap B = \emptyset$"}

::venn{ambiente="E" zone="u" universo=1 titolo="Legge di De Morgan $(A \cup B)^{c} = A^{c} \cap B^{c}$: gli elementi fuori dall'unione sono fuori da $A$ e fuori da $B$"}

::venn{ambiente="E" zone="a,b,u" universo=1 titolo="Legge di De Morgan $(A \cap B)^{c} = A^{c} \cup B^{c}$: gli elementi fuori dall'intersezione sono fuori da $A$ oppure fuori da $B$"}

::venn{tipo="tre" zone="ab,ac,abc" titolo="Proprietà distributiva $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$"}

::venn{tipo="tre" zone="a,ab,ac,abc,bc" titolo="Proprietà distributiva $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$"}

:::

:::esempio
$A = \{1, 2, 3, 4\}$ e $B = \{3, 4, 5\}$, con ambiente $E = \{1, 2, 3, 4, 5, 6\}$:
$$
A \cup B = \{1, 2, 3, 4, 5\}, \quad A \cap B = \{3, 4\}, \quad A \setminus B = \{1, 2\}, \quad B \setminus A = \{5\}, \quad A^{c} = \{5, 6\} .
$$

::venn{ambiente="E" zone="a,ab,b" elementi="a:1,2;ab:3,4;b:5;u:6" titolo="$A \cup B = \{1, 2, 3, 4, 5\}$"}

::venn{ambiente="E" zone="ab" elementi="a:1,2;ab:3,4;b:5;u:6" titolo="$A \cap B = \{3, 4\}$"}

::venn{ambiente="E" zone="a" elementi="a:1,2;ab:3,4;b:5;u:6" titolo="$A \setminus B = \{1, 2\}$"}

::venn{ambiente="E" zone="a,b" elementi="a:1,2;ab:3,4;b:5;u:6" titolo="$(A \setminus B) \cup (B \setminus A) = \{1, 2, 5\}$: gli elementi che stanno in uno solo dei due insiemi formano la differenza simmetrica $A \,\triangle\, B$"}

::venn{ambiente="E" zone="b,u" elementi="a:1,2;ab:3,4;b:5;u:6" titolo="$A^{c} = E \setminus A = \{5, 6\}$"}

:::

:::definizione{#prodotto-cartesiano titolo="Prodotto cartesiano"}
Il **prodotto cartesiano** di $A$ e $B$ è l'insieme delle coppie ordinate
$$
A \times B = \{(a, b) : a \in A,\ b \in B\} .
$$
Nelle coppie l'ordine *conta*, quindi in generale $A \times B \neq B \times A$: per $A = \{1, 2\}$ e $B = \{0\}$ si ha $A \times B = \{(1, 0), (2, 0)\}$ e $B \times A = \{(0, 1), (0, 2)\}$. L'insieme $\mathbb{R}^2 = \mathbb{R} \times \mathbb{R}$ è il **piano cartesiano**: i grafici delle funzioni sono suoi sottoinsiemi, perciò il prodotto cartesiano è l'ambiente in cui si studiano le funzioni.
:::

## Gli insiemi numerici

:::definizione{#insiemi-numerici titolo="Gli insiemi numerici N, Z, Q, R"}
$$
\mathbb{N} = \{0, 1, 2, 3, \dots\}, \qquad
\mathbb{Z} = \{\dots, -2, -1, 0, 1, 2, \dots\}, \qquad
\mathbb{Q} = \left\{ \frac{m}{n} : m \in \mathbb{Z},\ n \in \mathbb{N},\ n \geq 1 \right\} .
$$
$\mathbb{R}$ è l'insieme dei numeri reali, rappresentabili come allineamenti decimali finiti o infiniti; i razionali sono *esattamente* quelli con sviluppo decimale finito o periodico. Valgono le inclusioni strette $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$. Ogni ampliamento rende risolubili equazioni che prima non lo erano: $x + 3 = 1$ non ha soluzione in $\mathbb{N}$ e la ha in $\mathbb{Z}$; $2x = 1$ non ha soluzione in $\mathbb{Z}$ e la ha in $\mathbb{Q}$; $x^2 = 2$ non ha soluzione in $\mathbb{Q}$, come mostra il teorema sull'irrazionalità di $\sqrt{2}$, e la ha in $\mathbb{R}$. I numeri reali non razionali si dicono **irrazionali**. $\mathbb{Q}$ è **denso** in $\mathbb{R}$: tra due numeri reali distinti esiste sempre un numero razionale, e anche un numero irrazionale.
:::

::::teorema{#radice-di-due titolo="Irrazionalità di radice di 2"}
Non esiste alcun numero razionale $x$ tale che $x^2 = 2$: il numero $\sqrt{2}$ è **irrazionale**. Il teorema mostra che $\mathbb{Q}$ ha delle **lacune**, dato che già la geometria elementare produce la lunghezza $\sqrt{2}$ come diagonale del quadrato di lato $1$. Lo stesso schema per assurdo dimostra l'irrazionalità di $\sqrt{3}$, $\sqrt{5}$, $\sqrt{6}$ e in generale di $\sqrt{p}$ con $p$ primo.

:::dimostrazione
**Per assurdo** esista un razionale con quadrato $2$ e lo si scriva come frazione ridotta ai minimi termini: $x = \dfrac{m}{n}$ con $m$ e $n$ interi privi di divisori comuni, $n \geq 1$. Da $\dfrac{m^2}{n^2} = 2$ segue $m^2 = 2n^2$, quindi $m^2$ è pari. Il quadrato di un numero dispari è dispari, perciò $m$ è pari: $m = 2k$ con $k$ intero. Sostituendo si ottiene $4k^2 = 2n^2$, cioè $n^2 = 2k^2$, quindi anche $n^2$ è pari e, per lo stesso motivo, $n$ è pari. Allora $m$ e $n$ hanno il divisore comune $2$, il che **contraddice** l'ipotesi che la frazione sia ridotta ai minimi termini. L'assurdo mostra che un tale razionale non esiste.
:::
::::

## Intervalli

:::definizione{#intervalli titolo="Intervalli e loro notazione"}
Un **intervallo** è un sottoinsieme $I \subseteq \mathbb{R}$ con questa proprietà: presi due punti di $I$, *ogni* numero reale compreso tra essi appartiene a $I$. Per $a < b$ reali:
$$
\begin{gathered}
(a, b) = \{x : a < x < b\}, \qquad [a, b] = \{x : a \leq x \leq b\}, \\[6pt]
[a, b) = \{x : a \leq x < b\}, \qquad (a, b] = \{x : a < x \leq b\}, \\[6pt]
(a, +\infty) = \{x : x > a\}, \qquad (-\infty, b] = \{x : x \leq b\}, \qquad (-\infty, +\infty) = \mathbb{R} .
\end{gathered}
$$
La parentesi tonda esclude l'estremo, la quadra lo include; accanto a $+\infty$ e $-\infty$, che non sono numeri reali, la parentesi è *sempre* tonda. $[a, b]$ si dice **intervallo chiuso e limitato**, $(a, b)$ **intervallo aperto**. I domini delle funzioni elementari e gli insiemi delle soluzioni delle disequazioni sono intervalli o unioni di intervalli, quindi questa notazione compare in ogni studio di funzione.
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
Sia $A \subseteq \mathbb{R}$ non vuoto. Un numero $M \in \mathbb{R}$ è un **maggiorante** di $A$ se $a \leq M$ per ogni $a \in A$; un numero $m \in \mathbb{R}$ è un **minorante** se $m \leq a$ per ogni $a \in A$. $A$ si dice limitato superiormente se ha almeno un maggiorante, limitato inferiormente se ha almeno un minorante, **limitato** se è limitato sia superiormente sia inferiormente. Un maggiorante può *non* appartenere all'insieme: i maggioranti di $(0, 1)$ sono tutti i numeri di $[1, +\infty)$, e nessuno di essi sta in $(0, 1)$. Se $M$ è un maggiorante, ogni numero più grande di $M$ lo è, quindi l'informazione utile è il più piccolo dei maggioranti: questo numero, quando esiste, è l'estremo superiore.
:::

:::definizione{#massimo-minimo titolo="Massimo e minimo"}
Il **massimo** di $A$ è un maggiorante che *appartiene* all'insieme:
$$
M = \max A \iff
\begin{cases}
M \in A \\[2pt]
a \leq M \quad \text{per ogni } a \in A
\end{cases}
$$
Il **minimo** è definito in modo analogo con i minoranti. Il massimo, quando esiste, è **unico**: se $M_1$ e $M_2$ sono entrambi massimi, allora $M_1 \leq M_2$ perché $M_2$ è un maggiorante e $M_1 \in A$, e $M_2 \leq M_1$ per lo stesso motivo, quindi $M_1 = M_2$.
:::

:::esempio
$[0, 1]$ ha minimo $0$ e massimo $1$. L'intervallo $(0, 1)$ **non ha massimo**: infatti per ogni $x \in (0, 1)$ il punto $\dfrac{x + 1}{2}$ appartiene a $(0, 1)$ ed è maggiore di $x$, quindi nessun elemento dell'insieme è un maggiorante. Per lo stesso motivo $(0, 1)$ **non ha minimo**.
:::

## Estremo superiore e inferiore

:::definizione{#sup-inf titolo="Estremo superiore e inferiore"}
Sia $A \subseteq \mathbb{R}$ non vuoto. L'**estremo superiore** di $A$, indicato con $\sup A$, è il minimo dell'insieme dei maggioranti di $A$; l'**estremo inferiore** $\inf A$ è il massimo dell'insieme dei minoranti. Se $A$ non è limitato superiormente si pone $\sup A = +\infty$; se non è limitato inferiormente, $\inf A = -\infty$. Se il massimo esiste, allora $\sup A = \max A$; viceversa, se $\sup A \in A$, allora $\sup A$ è il massimo di $A$. L'estremo superiore esiste *anche* quando il massimo non esiste: $\sup\,(0, 1) = 1$ e $\inf\,(0, 1) = 0$, e nessuno dei due appartiene all'intervallo. Per questo sup e inf sono gli strumenti con cui si descrive la limitatezza di un insieme e, nei capitoli successivi, di una funzione o di una successione.
:::

::::teorema{#caratterizzazione-sup titolo="Caratterizzazione di sup e inf con epsilon"}
Siano $A \subseteq \mathbb{R}$ non vuoto e $L \in \mathbb{R}$. Allora $L = \sup A$ *se e solo se*
$$
\begin{cases}
a \leq L \quad \text{per ogni } a \in A \\[4pt]
\text{per ogni } \varepsilon > 0 \ \text{esiste } a \in A \ \text{tale che } a > L - \varepsilon
\end{cases}
$$
Analogamente, $\ell = \inf A$ se e solo se $\ell \leq a$ per ogni $a \in A$ e per ogni $\varepsilon > 0$ esiste $a \in A$ tale che $a < \ell + \varepsilon$. La prima condizione dice che $L$ è un **maggiorante**; la seconda che, scesi sotto $L$ di una *qualunque* quantità $\varepsilon$, l'insieme contiene un elemento oltre $L - \varepsilon$. Nelle verifiche la seconda condizione diventa una disequazione nella variabile che descrive gli elementi di $A$.

:::dimostrazione
La seconda condizione afferma che, per ogni $\varepsilon > 0$, il numero $L - \varepsilon$ *non* è un maggiorante di $A$. Poiché ogni numero minore di $L$ si scrive come $L - \varepsilon$ con un opportuno $\varepsilon > 0$, le due condizioni insieme equivalgono a: $L$ è un maggiorante di $A$ e nessun numero minore di $L$ lo è. Questo significa che $L$ è il **minimo dei maggioranti**, cioè $L = \sup A$. Per l'estremo inferiore si ragiona allo stesso modo con i minoranti.
:::
::::

:::osservazione
Per gli insiemi non limitati la caratterizzazione prende una forma diversa: $\sup A = +\infty$ equivale a dire che per ogni $M > 0$ esiste $a \in A$ con $a > M$. In particolare $\sup \mathbb{N} = +\infty$, perché per ogni reale $M$ esiste un naturale maggiore di $M$ (**proprietà archimedea** dei numeri reali). Questo fatto interviene in quasi tutte le verifiche con $\varepsilon$, per garantire l'esistenza di un naturale $n > \dfrac{1}{\varepsilon}$.
:::

:::esempio{titolo="Verifica con la caratterizzazione"}
$A = \left\{ \dfrac{1}{n} : n \in \mathbb{N},\ n \geq 1 \right\}$. L'estremo superiore è $1$: infatti $1 \in A$ e $\dfrac{1}{n} \leq 1$ per ogni $n \geq 1$, quindi $1$ è il massimo, e il massimo coincide con l'estremo superiore. L'estremo inferiore è $0$: poiché $\dfrac{1}{n} > 0$ per ogni $n$, il numero $0$ è un minorante; fissato $\varepsilon > 0$, per la **proprietà archimedea** esiste un naturale $n > \dfrac{1}{\varepsilon}$, e per questo $n$ si ha $\dfrac{1}{n} < \varepsilon$. Le due condizioni della caratterizzazione sono **soddisfatte**, perciò $\inf A = 0$. Poiché $0 \notin A$, l'insieme **non ha minimo**.
:::

## La completezza di R

:::teorema{#completezza titolo="Completezza di R"}
Ogni sottoinsieme di $\mathbb{R}$ non vuoto e limitato superiormente ammette **estremo superiore** in $\mathbb{R}$; ogni sottoinsieme non vuoto e limitato inferiormente ammette estremo inferiore. Questa proprietà si chiama **completezza** e si *assume* come assioma dei numeri reali. Distingue $\mathbb{R}$ da $\mathbb{Q}$ ed è l'ipotesi da cui dipendono i teoremi di esistenza dell'analisi: la dimostrazione del teorema degli zeri, nel capitolo sui limiti e sulla continuità, costruisce lo zero proprio come estremo superiore di un insieme.
:::

:::osservazione
In $\mathbb{Q}$ la completezza **non vale**. Sia $A = \{x \in \mathbb{Q} : x \geq 0,\ x^2 < 2\}$: è non vuoto, perché $1 \in A$, ed è limitato superiormente, perché da $x \geq 2$ segue $x^2 \geq 4 > 2$, quindi $2$ è un maggiorante. In $\mathbb{R}$ il suo estremo superiore è $\sqrt{2}$, che non è razionale. Tra i soli numeri razionali, invece, $A$ non ha estremo superiore. Ogni maggiorante razionale $L$ soddisfa $L > \sqrt{2}$: se fosse $L < \sqrt{2}$, per la **densità** di $\mathbb{Q}$ esisterebbe un razionale $q$ con $L < q < \sqrt{2}$, che apparterrebbe ad $A$ (è positivo, perché $q > L \geq 1$, dato che $L$ è un maggiorante e $1 \in A$, e il suo quadrato è minore di $2$) e supererebbe $L$; l'uguaglianza $L = \sqrt{2}$ è esclusa perché $\sqrt{2} \notin \mathbb{Q}$. Di nuovo per densità esiste allora un razionale $q'$ con $\sqrt{2} < q' < L$, e $q'$ è un maggiorante di $A$ più piccolo di $L$, poiché ogni $x \in A$ soddisfa $x < \sqrt{2} < q'$. Quindi nessun maggiorante razionale è il minimo dei maggioranti razionali e, dentro $\mathbb{Q}$, l'insieme $A$ **non ha estremo superiore**.
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
allora $P(n)$ è vera per *ogni* $n \geq n_0$. La prima condizione si chiama **base dell'induzione**, la seconda **passo induttivo**; nel passo, la proposizione $P(n)$ che si suppone vera si chiama **ipotesi induttiva**. Il principio si assume come proprietà dell'insieme $\mathbb{N}$. Serve per dimostrare identità, disuguaglianze e proprietà di divisibilità che dipendono da un indice naturale, e ogni dimostrazione per induzione si organizza negli stessi due punti: verifica della base e verifica del passo. Le prime applicazioni sono la formula della somma dei primi $n$ naturali e la disuguaglianza di Bernoulli.
:::

:::attenzione
Il passo induttivo *da solo* non basta: senza la base **non si conclude nulla**. Per la proposizione $P(n)$: "$n \geq n + 1$" il passo è verificato, perché sommando $1$ ai due membri da $n \geq n + 1$ segue $n + 1 \geq n + 2$; la base è **falsa** per ogni scelta di $n_0$, e infatti nessuna $P(n)$ è vera.
:::

## La somma dei primi n naturali

::::teorema{#somma-dei-primi-n titolo="Somma dei primi n naturali"}
Per ogni $n \geq 1$:
$$
1 + 2 + \cdots + n = \sum_{k=1}^{n} k = \frac{n(n+1)}{2} .
$$
È il primo esempio di **dimostrazione per induzione** e la formula ricompare nel calcolo di somme e nel capitolo sulle serie. Per esempio, la somma dei primi $100$ naturali vale $\dfrac{100 \cdot 101}{2} = 5050$.

:::dimostrazione
Base ($n = 1$): il primo membro vale $1$ e il secondo $\dfrac{1 \cdot 2}{2} = 1$, quindi $P(1)$ è vera. Passo: sia vera $P(n)$, cioè $\displaystyle\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$. Allora
$$
\sum_{k=1}^{n+1} k
= \sum_{k=1}^{n} k + (n+1)
= \frac{n(n+1)}{2} + (n+1)
= (n+1)\left( \frac{n}{2} + 1 \right)
= \frac{(n+1)(n+2)}{2} ,
$$
che è la formula con $n + 1$ al posto di $n$. Quindi $P(n)$ implica $P(n+1)$ e, per il **principio di induzione**, la formula vale per ogni $n \geq 1$.
:::
::::

## La disuguaglianza di Bernoulli

::::teorema{#bernoulli titolo="Disuguaglianza di Bernoulli"}
Per ogni numero reale $x \geq -1$ e ogni $n \in \mathbb{N}$:
$$
(1 + x)^n \geq 1 + nx .
$$
La disuguaglianza stima *dal basso* una potenza con un'espressione di primo grado in $n$, molto più semplice da controllare. Con $x = 1$ dà $2^n \geq 1 + n$ per ogni $n$. Si usa nello studio della successione geometrica e nella costruzione del numero $e$; si rimanda al richiamo sulle successioni nel capitolo sulle serie.

:::dimostrazione
Si procede per **induzione** su $n$, con $x \geq -1$ fissato. Base ($n = 0$): $(1 + x)^0 = 1$ e $1 + 0 \cdot x = 1$, quindi la disuguaglianza è verificata come uguaglianza. Passo: sia $(1 + x)^n \geq 1 + nx$. Poiché $x \geq -1$, il fattore $1 + x$ è **non negativo**, quindi moltiplicando i due membri dell'ipotesi induttiva per $1 + x$ il verso *non* cambia:
$$
(1 + x)^{n+1}
= (1 + x)^n (1 + x)
\geq (1 + nx)(1 + x)
= 1 + (n+1)x + nx^2
\geq 1 + (n+1)x ,
$$
dato che $nx^2 \geq 0$. Per il **principio di induzione** la disuguaglianza vale per ogni $n$. L'ipotesi $x \geq -1$ è usata nel **passo**: garantisce che la moltiplicazione per $1 + x$ conservi il verso della disuguaglianza.
:::
::::

## Il fattoriale

:::definizione{#fattoriale titolo="Fattoriale"}
Per $n \geq 1$ il **fattoriale** di $n$ è il prodotto dei naturali da $1$ a $n$:
$$
n! = n \cdot (n-1) \cdots 2 \cdot 1, \qquad 0! = 1 .
$$
Vale la **formula ricorsiva** $(n+1)! = (n+1) \cdot n!$, e la scelta $0! = 1$ la rende valida anche per $n = 0$, oltre a dare senso alle formule dei coefficienti binomiali. I primi valori sono $1! = 1$, $2! = 2$, $3! = 6$, $4! = 24$, $5! = 120$. Il fattoriale conta i modi di ordinare $n$ oggetti distinti e cresce *molto rapidamente*: $10! = 3628800$. Nei calcoli i fattoriali si semplificano con la formula ricorsiva, per esempio $\dfrac{10!}{8!} = 10 \cdot 9 = 90$.
:::

## I coefficienti binomiali

:::definizione{#coefficiente-binomiale titolo="Coefficiente binomiale"}
Per $n, k \in \mathbb{N}$ con $0 \leq k \leq n$:
$$
\binom{n}{k} = \frac{n!}{k!\,(n-k)!} .
$$
Il coefficiente binomiale **conta i sottoinsiemi** di $k$ elementi di un insieme di $n$ elementi, perciò è *sempre* un numero naturale. Nei calcoli conviene **semplificare i fattoriali** prima di moltiplicare:
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
Le prime due proprietà seguono dalla definizione; in particolare la seconda vale perché scambiare $k$ con $n - k$ lascia invariato il denominatore $k!\,(n-k)!$. La terza è la **formula di Stifel** e si verifica riducendo le due frazioni allo stesso denominatore $(k+1)!\,(n-k)!$. La formula di Stifel genera il **triangolo di Tartaglia**, nel quale ogni coefficiente è la somma dei due coefficienti sopra di esso, e interviene nel passo induttivo della dimostrazione del binomio di Newton. Per esempio $\dbinom{4}{1} + \dbinom{4}{2} = 4 + 6 = 10 = \dbinom{5}{2}$.
:::

## Il binomio di Newton

:::teorema{#binomio-di-newton titolo="Formula del binomio di Newton"}
Per ogni coppia di numeri reali $a$ e $b$ e ogni $n \in \mathbb{N}$:
$$
(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{\,n-k}\, b^{\,k}
= a^n + n\,a^{n-1}b + \binom{n}{2} a^{n-2}b^2 + \cdots + n\,a\,b^{n-1} + b^n .
$$
Per $n = 2$ e $n = 3$ la formula restituisce il quadrato e il cubo del binomio. La dimostrazione procede per **induzione** su $n$: nel passo si moltiplica lo sviluppo di $(a+b)^n$ per $a + b$ e si raggruppano i termini simili con la **formula di Stifel**. La formula permette di sviluppare una potenza qualunque di un binomio e di determinare un singolo termine dello sviluppo *senza* calcolare gli altri: il termine che contiene $b^k$ è $\dbinom{n}{k} a^{\,n-k} b^{\,k}$.
:::

:::esempio{titolo="Sviluppo di una potenza"}
$$
(x + 2)^4
= \sum_{k=0}^{4} \binom{4}{k} x^{\,4-k}\, 2^{\,k}
= x^4 + 4 \cdot 2\,x^3 + 6 \cdot 4\,x^2 + 4 \cdot 8\,x + 16
= x^4 + 8x^3 + 24x^2 + 32x + 16 .
$$
I coefficienti binomiali $1, 4, 6, 4, 1$ sono la riga $n = 4$ del **triangolo di Tartaglia**; ciascuno va moltiplicato per la corrispondente potenza di $2$.
:::

:::osservazione
Dalla formula con $a = b = 1$ segue
$$
\sum_{k=0}^{n} \binom{n}{k} = 2^n ,
$$
quindi un insieme di $n$ elementi ha in tutto $2^n$ **sottoinsiemi**, dato che $\dbinom{n}{k}$ conta quelli di $k$ elementi. Con $a = 1$ e $b = -1$ si ottiene invece $\displaystyle\sum_{k=0}^{n} (-1)^k \binom{n}{k} = 0$ per ogni $n \geq 1$.
:::

## Funzioni, dominio e immagine

:::definizione{#funzione titolo="Funzione, dominio, codominio e immagine"}
Una funzione $f : A \to B$ è una legge che associa a ogni elemento $x \in A$ *uno e un solo* elemento $f(x) \in B$. L'insieme $A$ è il **dominio**, $B$ è il **codominio**; l'**immagine** è l'insieme dei valori assunti,
$$
f(A) = \{ y \in B : y = f(x) \ \text{per qualche}\ x \in A \} \subseteq B .
$$
Il **grafico** di $f$ è l'insieme dei punti $(x, f(x))$ del piano, al variare di $x \in A$. Poiché a ogni $x$ corrisponde un solo valore, ogni retta verticale $x = c$ con $c \in A$ interseca il grafico in *esattamente* un punto. In questo corso $A$ e $B$ sono sottoinsiemi di $\mathbb{R}$; limiti, derivate e integrali si definiscono per funzioni di questo tipo, perciò dominio, immagine e grafico sono il punto di partenza di ogni capitolo successivo.
:::

:::esempio{titolo="Dominio e immagine di x²"}
$f(x) = x^2$ con dominio $\mathbb{R}$. Ogni valore assunto soddisfa $x^2 \geq 0$; viceversa ogni $y \geq 0$ è assunto, perché $f(\sqrt{y}) = y$. Quindi l'immagine è $[0, +\infty)$. Il grafico è una **parabola** con vertice nell'origine.

::grafico{f="x^2" xmin=-3 xmax=3 ymin=-1 ymax=6 titolo="$y = x^2$: dominio $\mathbb{R}$, immagine $[0, +\infty)$"}

:::

## Iniettività, funzione inversa e composizione

:::definizione{#iniettiva-suriettiva titolo="Funzione iniettiva, suriettiva, biiettiva"}
$f : A \to B$ è

- **iniettiva** se elementi distinti hanno immagini distinte, cioè se da $f(x_1) = f(x_2)$ segue $x_1 = x_2$;
- **suriettiva** se l'immagine coincide con il codominio, cioè se ogni $y \in B$ è della forma $f(x)$ per qualche $x \in A$;
- **biiettiva** se è iniettiva e suriettiva, cioè se ogni $y \in B$ proviene da uno e un solo $x \in A$.

Sul grafico l'iniettività si legge con le **rette orizzontali**: $f$ è iniettiva se ogni retta $y = c$ interseca il grafico *al più* in un punto. $f(x) = x^2$ su $\mathbb{R}$ assume lo stesso valore in $1$ e in $-1$, quindi su $\mathbb{R}$ la retta $y = 1$ interseca il grafico in due punti; la restrizione a $[0, +\infty)$ è iniettiva. L'iniettività è la condizione che permette di definire la **funzione inversa**.

::grafico{f="x^2;1" xmin=-3 xmax=3 ymin=-1 ymax=6 punti="-1,1,pieno;1,1,pieno" titolo="La retta $y = 1$ (tratteggiata) interseca la parabola $y = x^2$ nei due punti di ascissa $-1$ e $1$: su $\mathbb{R}$ la funzione $x^2$ non è iniettiva"}

::grafico{f="x^2+0*sqrt(x);1" xmin=-3 xmax=3 ymin=-1 ymax=6 punti="1,1,pieno" titolo="Ristretta a $[0, +\infty)$, la funzione $x^2$ è iniettiva: la retta $y = 1$ (tratteggiata) incontra il grafico soltanto nel punto $(1, 1)$"}

:::

:::definizione{#funzione-inversa titolo="Funzione inversa"}
Se $f : A \to B$ è biiettiva, per ogni $y \in B$ esiste uno e un solo $x \in A$ con $f(x) = y$; la **funzione inversa** $f^{-1} : B \to A$ associa a $y$ questo $x$. Valgono
$$
f^{-1}(f(x)) = x \ \text{per ogni}\ x \in A, \qquad f(f^{-1}(y)) = y \ \text{per ogni}\ y \in B .
$$
Il punto $(a, b)$ appartiene al grafico di $f$ *se e solo se* $(b, a)$ appartiene al grafico di $f^{-1}$, quindi il grafico di $f^{-1}$ è il **simmetrico** del grafico di $f$ rispetto alla bisettrice $y = x$. Quando $f$ è iniettiva ma il codominio è più grande dell'immagine, si **restringe il codominio** all'immagine e si inverte la funzione così ottenuta. Con questa costruzione si definiscono le radici, il logaritmo e le inverse trigonometriche di questo capitolo.
:::

:::esempio{titolo="Inversa di una funzione lineare"}
$f(x) = 2x - 3$, da $\mathbb{R}$ a $\mathbb{R}$. L'equazione $y = 2x - 3$ ha l'unica soluzione $x = \dfrac{y + 3}{2}$ per ogni $y$, quindi $f$ è **biiettiva** e $f^{-1}(y) = \dfrac{y + 3}{2}$. Verifica: $f^{-1}(f(x)) = \dfrac{(2x - 3) + 3}{2} = x$.

::grafico{f="2*x-3;(x+3)/2;x" xmin=-5 xmax=6 ymin=-5 ymax=6 uguale=1 punti="0,-3,pieno,P;-3,0,pieno,P′" titolo="$y = 2x - 3$ e la sua inversa $y = \dfrac{x + 3}{2}$ (tratteggiata) sono simmetriche rispetto alla bisettrice $y = x$ (rossa): ai punti $P = (0, -3)$ e $P' = (-3, 0)$ si scambiano le coordinate"}

:::

:::definizione{#composizione titolo="Funzione composta"}
Date $f : A \to \mathbb{R}$ e $g : B \to \mathbb{R}$, la **funzione composta** $g \circ f$ è definita da $(g \circ f)(x) = g(f(x))$, sul dominio
$$
\{ x \in A : f(x) \in B \} .
$$
La composizione legge le funzioni complicate come **catene di funzioni elementari**: $h(x) = \sqrt{x^2 + 1}$ è la composta di $f(x) = x^2 + 1$ con $g(y) = \sqrt{y}$. Questa lettura guida il calcolo del dominio naturale e, nel capitolo sulle derivate, la regola di derivazione della funzione composta.
:::

:::attenzione
La composizione dipende dall'**ordine** dei fattori. Con $f(x) = x + 1$ e $g(x) = x^2$ si ha $(g \circ f)(x) = (x + 1)^2$ e $(f \circ g)(x) = x^2 + 1$: in $x = 1$ i valori sono $4$ e $2$, quindi $g \circ f \neq f \circ g$.
:::

## Simmetrie, periodicità, monotonia e limitatezza

:::definizione{#pari-dispari titolo="Funzione pari e funzione dispari"}
Sia $A$ simmetrico rispetto all'origine, cioè $-x \in A$ per ogni $x \in A$. $f : A \to \mathbb{R}$ è

- **pari** se $f(-x) = f(x)$ per ogni $x \in A$; il grafico è simmetrico rispetto all'asse $y$;
- **dispari** se $f(-x) = -f(x)$ per ogni $x \in A$; il grafico è simmetrico rispetto all'origine.

Sono pari $x^2$, $x^4$, $|x|$, $\cos x$; sono dispari $x$, $x^3$, $\sin x$, $\tan x$. Una simmetria **dimezza il lavoro**: negli studi di funzione si studia $f$ per $x \geq 0$ e si riflette il grafico.

::grafico{f="x^2;x^3" xmin=-2.5 xmax=2.5 ymin=-4 ymax=5 punti="-1.5,2.25;1.5,2.25;-1.5,-3.375;1.5,3.375" segmenti="-1.5,2.25,1.5,2.25;-1.5,-3.375,1.5,3.375" titolo="$y = x^2$ è pari: il grafico è simmetrico rispetto all'asse $y$; $y = x^3$ (tratteggiata) è dispari: il grafico è simmetrico rispetto all'origine"}

:::

:::definizione{#periodica titolo="Funzione periodica"}
$f$ è **periodica** di periodo $T > 0$ se, per ogni $x$ del dominio, anche $x + T$ appartiene al dominio e $f(x + T) = f(x)$. Il più piccolo periodo positivo, quando esiste, è il **periodo minimo**. $\sin x$ e $\cos x$ hanno periodo minimo $2\pi$; $\tan x$ ha periodo minimo $\pi$. Il grafico si ripete per traslazione orizzontale di $T$, quindi lo studio di una funzione periodica si svolge su un *solo* intervallo di ampiezza $T$. Per lo stesso motivo le equazioni trigonometriche hanno **infinite soluzioni**, elencate con un intero $k$.
:::

:::definizione{#monotona titolo="Funzione monotona"}
$f$ è **crescente** su un insieme $I$ del dominio se da $x_1 < x_2$ segue $f(x_1) \leq f(x_2)$, **strettamente crescente** se segue $f(x_1) < f(x_2)$; decrescente e strettamente decrescente si definiscono con le disuguaglianze opposte. Una funzione strettamente monotona è **iniettiva**, perché da $x_1 < x_2$ segue, a seconda del verso di monotonia, $f(x_1) < f(x_2)$ oppure $f(x_1) > f(x_2)$, e in entrambi i casi $f(x_1) \neq f(x_2)$; quindi è invertibile sulla sua immagine; l'inversa è strettamente monotona nello stesso verso. Applicare una funzione strettamente crescente ai due membri di una disuguaglianza *conserva* il verso; applicare una funzione strettamente decrescente lo *rovescia*. Su questa proprietà si fondano le disequazioni esponenziali e logaritmiche di questo capitolo.
:::

:::definizione{#limitata titolo="Funzione limitata"}
$f$ è **limitata superiormente** se esiste $M \in \mathbb{R}$ con $f(x) \leq M$ per ogni $x$ del dominio, **limitata inferiormente** se esiste $m \in \mathbb{R}$ con $f(x) \geq m$, **limitata** se valgono entrambe le condizioni, cioè se $|f(x)| \leq C$ per una costante $C$. $\sin x$ e $\cos x$ sono limitate, con valori in $[-1, 1]$; $x^2$ è limitata inferiormente e illimitata superiormente. La limitatezza si legge sull'immagine e ritorna nel capitolo sui limiti, nel teorema della funzione limitata per una infinitesima e nel teorema di Weierstrass.
:::

## Trasformazioni del grafico

:::teorema{#trasformazioni-del-grafico titolo="Trasformazioni del grafico"}
Dal grafico di $f$, per $k > 0$ e $a > 1$, si ottengono i grafici seguenti:

- $f(x) + k$: traslazione verticale verso l'alto di $k$; $f(x) - k$: verso il basso;
- $f(x - k)$: traslazione orizzontale verso destra di $k$; $f(x + k)$: verso sinistra;
- $a\,f(x)$: dilatazione verticale di fattore $a$; $\dfrac{f(x)}{a}$: compressione verticale;
- $f(a x)$: compressione orizzontale di fattore $a$; $f\!\left(\dfrac{x}{a}\right)$: dilatazione orizzontale;
- $-f(x)$: riflessione rispetto all'asse $x$; $f(-x)$: riflessione rispetto all'asse $y$;
- $|f(x)|$: la parte di grafico con $f(x) \geq 0$ resta al suo posto, la parte con $f(x) < 0$ si riflette sopra l'asse $x$;
- $f(|x|)$: la parte di grafico con $x \geq 0$ resta al suo posto e viene riflessa anche a sinistra dell'asse $y$; la funzione ottenuta è **pari**.

Le verifiche seguono dalla **definizione di grafico**: per esempio $(x_0, y_0)$ appartiene al grafico di $f$ se e solo se $(x_0 + k, y_0)$ appartiene al grafico di $f(x - k)$. Con queste regole il grafico di molte funzioni si traccia a partire dai **grafici elementari**, *senza* uno studio di funzione completo.

::grafico{f="x^2;(x-2)^2;x^2+1" xmin=-3 xmax=5 ymin=-1 ymax=7 titolo="Da $y = x^2$: $y = (x - 2)^2$ (tratteggiata) è traslata verso destra di $2$, $y = x^2 + 1$ (rossa) è traslata verso l'alto di $1$"}

::grafico{f="exp(x);exp(-x);-exp(x)" xmin=-3 xmax=3 ymin=-5 ymax=5 titolo="Da $y = e^x$: $y = e^{-x}$ (tratteggiata) è la riflessione rispetto all'asse $y$, $y = -e^x$ (rossa) è la riflessione rispetto all'asse $x$"}

::grafico{f="x^2-2*abs(x);x^2-2*x" xmin=-3.5 xmax=3.5 ymin=-2 ymax=5 titolo="$y = x^2 - 2|x|$ si ottiene da $y = x^2 - 2x$ (tratteggiata) conservando la parte con $x \geq 0$ e riflettendola rispetto all'asse $y$"}

:::

:::esempio{titolo="Dal grafico di x² a quello di |x² − 1|"}
Da $x^2$ si passa a $x^2 - 1$ con la **traslazione verticale** verso il basso di $1$; poiché $x^2 - 1 < 0$ per $-1 < x < 1$, il **valore assoluto** riflette sopra l'asse $x$ l'arco compreso tra $-1$ e $1$ e lascia il resto al suo posto.

::grafico{f="abs(x^2-1)" xmin=-3 xmax=3 ymin=-1 ymax=4 titolo="$y = |x^2 - 1|$: l'arco con $-1 < x < 1$ è riflesso sopra l'asse $x$"}

:::

## Potenze e radici

:::definizione{#potenze titolo="Potenze a esponente naturale e intero negativo"}
Per $n \in \mathbb{N}$, $n \geq 1$, la potenza $f(x) = x^n$ ha dominio $\mathbb{R}$.

- $n$ pari: funzione **pari**, immagine $[0, +\infty)$, strettamente decrescente su $(-\infty, 0]$ e strettamente crescente su $[0, +\infty)$.
- $n$ dispari: funzione **dispari**, immagine $\mathbb{R}$, strettamente crescente su $\mathbb{R}$.

Per esponente intero negativo si pone $x^{-n} = \dfrac{1}{x^n}$, con dominio $\mathbb{R} \setminus \{0\}$. Il caso di riferimento è $x^{-1} = \dfrac{1}{x}$: funzione dispari, strettamente decrescente su $(-\infty, 0)$ e su $(0, +\infty)$, con immagine $\mathbb{R} \setminus \{0\}$. Polinomi e funzioni razionali si costruiscono con somme e quozienti di queste potenze, perciò i loro grafici ricorrono in tutti gli esempi del corso.

::grafico{f="x^3" xmin=-2.5 xmax=2.5 ymin=-6 ymax=6 titolo="$y = x^3$: dispari, strettamente crescente, immagine $\mathbb{R}$"}

::grafico{f="1/x" xmin=-4 xmax=4 ymin=-4 ymax=4 asintoti="x=0;y=0" titolo="$y = \dfrac{1}{x}$: il grafico si avvicina alle rette $x = 0$ e $y = 0$"}

:::

:::definizione{#radici titolo="Radici e potenze a esponente razionale"}
Per $n$ pari la potenza $x^n$ ristretta a $[0, +\infty)$ è strettamente crescente con immagine $[0, +\infty)$, quindi è **invertibile**: l'inversa è la **radice** $n$-esima $\sqrt[n]{x} : [0, +\infty) \to [0, +\infty)$, strettamente crescente. Per $n$ dispari la potenza $x^n$ è strettamente crescente su tutto $\mathbb{R}$, perciò la radice $n$-esima è definita su $\mathbb{R}$; per esempio $\sqrt[3]{-8} = -2$. Per $x > 0$, $m \in \mathbb{Z}$ e $n \geq 1$ si pone
$$
x^{\frac{m}{n}} = \sqrt[n]{x^m} ,
$$
in accordo con le proprietà delle potenze. Il grafico di $\sqrt{x}$ è il simmetrico rispetto alla bisettrice $y = x$ del ramo con $x \geq 0$ della parabola $y = x^2$, perché le due funzioni sono una l'**inversa** dell'altra.

::grafico{f="sqrt(x)" xmin=-1 xmax=9 ymin=-1 ymax=4 titolo="$y = \sqrt{x}$: dominio e immagine $[0, +\infty)$"}

:::

:::attenzione
Per indice pari la radice di una potenza restituisce il **valore assoluto** della base: $\sqrt{x^2} = |x|$. Per $x = -3$ si ha $\sqrt{(-3)^2} = \sqrt{9} = 3 = |-3|$, mentre la base vale $-3$.
:::

## Esponenziale e logaritmo

:::definizione{#esponenziale titolo="Funzione esponenziale"}
Per $a > 0$, $a \neq 1$, la **funzione esponenziale** $f(x) = a^x$ ha dominio $\mathbb{R}$ e immagine $(0, +\infty)$; in particolare $a^x > 0$ per *ogni* $x$. Valgono le proprietà delle potenze:
$$
a^{x+y} = a^x\, a^y, \qquad a^{x-y} = \frac{a^x}{a^y}, \qquad (a^x)^y = a^{x y}, \qquad a^0 = 1 .
$$
Per $a > 1$ la funzione è **strettamente crescente**; per $0 < a < 1$ è **strettamente decrescente**. Poiché $a^x = \left(\dfrac{1}{a}\right)^{-x}$, i grafici relativi a basi reciproche sono simmetrici rispetto all'asse $y$. La base più usata nell'analisi è il numero $e = 2{,}71828\ldots$; il comportamento agli estremi del dominio e i limiti notevoli con $e$ si trovano nel capitolo sui limiti.

::grafico{f="exp(x)" xmin=-3 xmax=3 ymin=-1 ymax=8 asintoti="y=0" titolo="$y = e^x$: immagine $(0, +\infty)$, strettamente crescente"}

:::

:::definizione{#logaritmo titolo="Logaritmo e cambio di base"}
Per $a > 0$, $a \neq 1$, l'esponenziale $a^x$ è strettamente monotona con immagine $(0, +\infty)$, quindi è **invertibile**: l'inversa è il **logaritmo** in base $a$,
$$
y = \log_a x \iff a^y = x \qquad (x > 0) .
$$
Il logaritmo ha dominio $(0, +\infty)$ e immagine $\mathbb{R}$; è strettamente crescente per $a > 1$ e strettamente decrescente per $0 < a < 1$. Dalle proprietà dell'esponenziale seguono, per $x, y > 0$ e $\alpha \in \mathbb{R}$:
$$
\log_a (x y) = \log_a x + \log_a y, \qquad \log_a \frac{x}{y} = \log_a x - \log_a y, \qquad \log_a x^{\alpha} = \alpha \log_a x ,
$$
con $\log_a 1 = 0$ e $\log_a a = 1$. Il **cambio di base**, per $b > 0$, $b \neq 1$, è
$$
\log_a x = \frac{\log_b x}{\log_b a} ,
$$
e si ottiene applicando $\log_b$ all'identità $a^{\log_a x} = x$, poiché $\log_b\!\left(a^{\log_a x}\right) = \log_a x \cdot \log_b a$. Il logaritmo in base $e$ si indica con $\ln x$; grazie al cambio di base ogni logaritmo si riconduce a questo. Il grafico di $\log_a x$ è il simmetrico di quello di $a^x$ rispetto alla bisettrice $y = x$.

::grafico{f="log(x)" xmin=-1 xmax=8 ymin=-3 ymax=3 asintoti="x=0" titolo="$y = \ln x$: dominio $(0, +\infty)$, immagine $\mathbb{R}$"}

:::

:::attenzione
L'identità $\log_a x^{\alpha} = \alpha \log_a x$ richiede $x > 0$. Per esponente pari e base negativa la scrittura corretta usa il **valore assoluto**, $\log_a x^2 = 2 \log_a |x|$ per $x \neq 0$: con $x = -2$ si ha $\log_2 x^2 = \log_2 4 = 2$, mentre $\log_2(-2)$ *non* è definito.
:::

## Funzioni trigonometriche e loro inverse

:::definizione{#trigonometriche titolo="Seno, coseno e tangente"}
Sulla circonferenza di centro l'origine e raggio $1$, il punto raggiunto ruotando di un angolo $x$, misurato in radianti a partire da $(1, 0)$ in verso antiorario, ha coordinate $(\cos x, \sin x)$. Le due funzioni hanno dominio $\mathbb{R}$, immagine $[-1, 1]$ e periodo minimo $2\pi$; $\sin x$ è **dispari** e $\cos x$ è **pari**. La **tangente** è
$$
\tan x = \frac{\sin x}{\cos x} ,
$$
con dominio $x \neq \dfrac{\pi}{2} + k\pi$ ($k \in \mathbb{Z}$), immagine $\mathbb{R}$, periodo minimo $\pi$; è dispari. Valori notevoli:
$$
\begin{array}{c|ccccc}
x & 0 & \dfrac{\pi}{6} & \dfrac{\pi}{4} & \dfrac{\pi}{3} & \dfrac{\pi}{2} \\[8pt]
\hline
\sin x & 0 & \dfrac{1}{2} & \dfrac{\sqrt{2}}{2} & \dfrac{\sqrt{3}}{2} & 1 \\[10pt]
\cos x & 1 & \dfrac{\sqrt{3}}{2} & \dfrac{\sqrt{2}}{2} & \dfrac{1}{2} & 0 \\[10pt]
\tan x & 0 & \dfrac{\sqrt{3}}{3} & 1 & \sqrt{3} & \text{n.d.}
\end{array}
$$
Questi valori, insieme alle simmetrie e alla periodicità, permettono di scrivere in forma chiusa le soluzioni delle equazioni trigonometriche degli esercizi.

::grafico{f="sin(x)" xmin=-7 xmax=7 ymin=-1.5 ymax=1.5 titolo="$y = \sin x$: periodica di periodo $2\pi$, immagine $[-1, 1]$"}

:::

:::teorema{#identita-trigonometriche titolo="Identità principali"}
Per ogni $x, y \in \mathbb{R}$:
$$
\sin^2 x + \cos^2 x = 1 ,
$$
che è il **teorema di Pitagora** sulla circonferenza unitaria. **Formule di addizione**:
$$
\sin(x + y) = \sin x \cos y + \cos x \sin y, \qquad
\cos(x + y) = \cos x \cos y - \sin x \sin y .
$$
Con $y = x$ si ottengono le **formule di duplicazione**:
$$
\sin 2x = 2 \sin x \cos x, \qquad
\cos 2x = \cos^2 x - \sin^2 x = 2\cos^2 x - 1 = 1 - 2\sin^2 x .
$$
L'identità fondamentale e le duplicazioni riconducono molte equazioni trigonometriche a una *sola* funzione incognita, come negli esercizi svolti di questo argomento.
:::

:::definizione{#inverse-trigonometriche titolo="Arcoseno, arcocoseno e arcotangente"}
Le funzioni trigonometriche sono periodiche, quindi si invertono dopo una **restrizione** a un intervallo di stretta monotonia.

- $\sin x$ ristretto a $\left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right]$ è strettamente crescente con immagine $[-1, 1]$; l'inversa è $\arcsin : [-1, 1] \to \left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right]$, strettamente crescente e dispari.
- $\cos x$ ristretto a $[0, \pi]$ è strettamente decrescente con immagine $[-1, 1]$; l'inversa è $\arccos : [-1, 1] \to [0, \pi]$, strettamente decrescente.
- $\tan x$ ristretta a $\left(-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right)$ è strettamente crescente con immagine $\mathbb{R}$; l'inversa è $\arctan : \mathbb{R} \to \left(-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right)$, strettamente crescente e dispari.

Per definizione $\arcsin m$ è l'**unico** angolo in $\left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right]$ con seno uguale a $m$; con questi angoli si scrivono le soluzioni delle equazioni trigonometriche. L'arcotangente, definita su tutto $\mathbb{R}$ e limitata, ricorre negli esempi dei capitoli su limiti e derivate.

::grafico{f="atan(x)" xmin=-6 xmax=6 ymin=-2 ymax=2 asintoti="y=1.5708;y=-1.5708" titolo="$y = \arctan x$: il grafico si avvicina alle rette $y = \dfrac{\pi}{2}$ e $y = -\dfrac{\pi}{2}$"}

:::

:::definizione{#iperboliche titolo="Funzioni iperboliche"}
Seno e coseno iperbolico sono definiti a partire dall'esponenziale:
$$
\sinh x = \frac{e^x - e^{-x}}{2}, \qquad \cosh x = \frac{e^x + e^{-x}}{2}, \qquad \tanh x = \frac{\sinh x}{\cosh x} .
$$
Tutte e tre hanno dominio $\mathbb{R}$. $\sinh x$ è **dispari**, strettamente crescente, con immagine $\mathbb{R}$; $\cosh x$ è **pari**, con immagine $[1, +\infty)$ e valore minimo $\cosh 0 = 1$. Identità fondamentale:
$$
\cosh^2 x - \sinh^2 x = 1 ,
$$
che si verifica sviluppando i quadrati: $\cosh^2 x - \sinh^2 x = \dfrac{e^{2x} + 2 + e^{-2x}}{4} - \dfrac{e^{2x} - 2 + e^{-2x}}{4} = 1$. Il punto $(\cosh t, \sinh t)$ appartiene quindi all'**iperbole** $x^2 - y^2 = 1$, da cui il nome. Le funzioni iperboliche compaiono nelle primitive di alcune funzioni irrazionali, nel capitolo sugli integrali.

::grafico{f="(exp(x)+exp(-x))/2" xmin=-3 xmax=3 ymin=-1 ymax=6 titolo="$y = \cosh x$: pari, immagine $[1, +\infty)$"}

:::

## Dominio naturale

:::definizione{#dominio-naturale titolo="Dominio naturale"}
Quando una funzione è assegnata con una sola espressione analitica, il **dominio naturale** è l'insieme dei numeri reali per cui ogni operazione dell'espressione è definita. Le condizioni da imporre:

- un denominatore è diverso da $0$;
- l'argomento di una radice di indice pari è maggiore o uguale a $0$;
- l'argomento di un logaritmo è maggiore di $0$;
- l'argomento della tangente è diverso da $\dfrac{\pi}{2} + k\pi$;
- l'argomento di $\arcsin$ e di $\arccos$ appartiene a $[-1, 1]$;
- in $f(x)^{g(x)}$ la base $f(x)$ è maggiore di $0$.

Le condizioni devono essere soddisfatte *tutte* nello stesso punto, perciò si raccolgono in un **sistema** e il dominio è l'insieme delle sue soluzioni. Il dominio naturale è il **primo passo** di ogni studio di funzione e di ogni calcolo di limite.
:::

:::esempio{titolo="Dominio con logaritmo e radice"}
$f(x) = \dfrac{\ln(x - 1)}{\sqrt{4 - x^2}}$. Il logaritmo richiede argomento positivo; la radice compare al denominatore, quindi il suo argomento è maggiore *strettamente* di $0$:
$$
\begin{cases}
x - 1 > 0 \\[4pt]
4 - x^2 > 0
\end{cases}
\qquad\text{cioè}\qquad
\begin{cases}
x > 1 \\[4pt]
-2 < x < 2
\end{cases}
$$
quindi $D = (1, 2)$.
:::

## Equazioni e disequazioni elementari

:::teorema{#equazioni-esponenziali-logaritmiche titolo="Equazioni e disequazioni esponenziali e logaritmiche"}
Per $a > 0$, $a \neq 1$, l'equazione $a^x = b$ ha soluzione *se e solo se* $b > 0$, perché l'immagine dell'esponenziale è $(0, +\infty)$; in tal caso l'**unica soluzione** è $x = \log_a b$, per l'**iniettività**. Per le disequazioni si applica la **stretta monotonia**:

- se $a > 1$, allora $a^{f(x)} > a^{g(x)} \iff f(x) > g(x)$;
- se $0 < a < 1$, allora $a^{f(x)} > a^{g(x)} \iff f(x) < g(x)$.

Per i logaritmi al confronto degli argomenti si aggiungono le **condizioni di esistenza**, che entrano in **sistema**: per $a > 1$,
$$
\log_a f(x) > \log_a g(x)
\iff
\begin{cases}
f(x) > g(x) \\[4pt]
g(x) > 0
\end{cases}
$$
dove la condizione $f(x) > 0$ segue dalle altre due. Per $0 < a < 1$ il verso del confronto tra gli argomenti si **rovescia** e la condizione di esistenza da imporre diventa quella su $f$:
$$
\log_a f(x) > \log_a g(x)
\iff
\begin{cases}
f(x) < g(x) \\[4pt]
f(x) > 0
\end{cases}
$$
e in questo caso $g(x) > 0$ segue dalle altre due. Questi criteri riducono ogni disequazione esponenziale o logaritmica elementare a una disequazione algebrica.
:::

:::esempio
$2^x \geq 8$. Poiché $8 = 2^3$ e la base $2$ è maggiore di $1$, la disequazione equivale a $x \geq 3$. Con base minore di $1$: da $\left(\dfrac{1}{2}\right)^{x} \geq 8 = \left(\dfrac{1}{2}\right)^{-3}$, poiché la base è *minore* di $1$, segue $x \leq -3$.
:::

:::teorema{#equazioni-trigonometriche titolo="Equazioni trigonometriche elementari"}
Le equazioni $\sin x = m$ e $\cos x = m$ hanno soluzione *soltanto* per $m \in [-1, 1]$, perché l'immagine di seno e coseno è $[-1, 1]$. In tal caso, con $k \in \mathbb{Z}$:

- $\sin x = m$ ha soluzioni $x = \arcsin m + 2k\pi$ oppure $x = \pi - \arcsin m + 2k\pi$;
- $\cos x = m$ ha soluzioni $x = \arccos m + 2k\pi$ oppure $x = -\arccos m + 2k\pi$;
- $\tan x = m$, per ogni $m \in \mathbb{R}$, ha soluzioni $x = \arctan m + k\pi$.

Le formule seguono dalle **simmetrie** e dalla **periodicità**: sulla circonferenza unitaria i punti con ordinata $m$ sono *due* in ogni giro, con angoli $\arcsin m$ e $\pi - \arcsin m$; i punti con ascissa $m$ hanno angoli **opposti**. Le equazioni più generali si riconducono a queste forme con le identità principali, come negli esercizi svolti.
:::

:::esempio
$\cos x = \dfrac{1}{2}$. Poiché $\arccos \dfrac{1}{2} = \dfrac{\pi}{3}$, le soluzioni sono $x = \dfrac{\pi}{3} + 2k\pi$ oppure $x = -\dfrac{\pi}{3} + 2k\pi$, con $k \in \mathbb{Z}$.
:::
