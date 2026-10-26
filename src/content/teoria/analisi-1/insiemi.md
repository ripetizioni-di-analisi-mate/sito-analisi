---
titolo: Insiemi
sommario: Il linguaggio e le operazioni degli insiemi, gli insiemi numerici da N a R, l'estremo superiore e inferiore con la caratterizzazione con epsilon, la completezza che distingue R da Q.
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
