---
titolo: Sistemi lineari e rango
sommario: Come si scrive un sistema lineare in forma matriciale, come si calcola il rango, quando un sistema ha soluzioni e quante, come si risolve con Gauss o con Cramer e come si discute al variare di un parametro.
---

## Sistemi lineari e scrittura matriciale

:::definizione{#sistema-lineare titolo="Sistema lineare"}
Un **sistema lineare** di $m$ equazioni in $n$ incognite $x_1, \dots, x_n$ è un insieme di equazioni da soddisfare simultaneamente
$$
\begin{cases}
a_{11} x_1 + a_{12} x_2 + \dots + a_{1n} x_n = b_1 \\[4pt]
a_{21} x_1 + a_{22} x_2 + \dots + a_{2n} x_n = b_2 \\[4pt]
\quad \vdots \\[4pt]
a_{m1} x_1 + a_{m2} x_2 + \dots + a_{mn} x_n = b_m
\end{cases}
$$
con coefficienti $a_{ij} \in \mathbb{R}$ e termini noti $b_i \in \mathbb{R}$. Una **soluzione** è una $n$-upla $(x_1, \dots, x_n) \in \mathbb{R}^n$ che soddisfa *tutte* le $m$ equazioni, e risolvere il sistema significa determinare l'insieme di tutte le soluzioni. Le equazioni sono lineari perché le incognite compaiono solo al primo grado e non sono moltiplicate tra loro.
:::

:::definizione{#sistema-compatibile titolo="Sistema compatibile e incompatibile"}
Un sistema lineare si dice

- **compatibile** se ammette *almeno una* soluzione, **incompatibile** se non ne ammette;
- **determinato** se è compatibile con una sola soluzione, **indeterminato** se è compatibile con più di una soluzione.

Il sistema formato da $x + y = 1$ e $x + y = 3$ è incompatibile, perché la stessa quantità $x + y$ non può valere $1$ e $3$. Un sistema indeterminato ha sempre infinite soluzioni, come segue dal teorema di Rouché-Capelli; di conseguenza un sistema lineare con esattamente due soluzioni non esiste.
:::

:::definizione{#forma-matriciale titolo="Forma matriciale"}
Il sistema si scrive in forma compatta come
$$
A x = b, \qquad
A = (a_{ij}) \in M_{m,n}(\mathbb{R}), \quad
x =
\begin{pmatrix}
x_1 \\ \vdots \\ x_n
\end{pmatrix}, \quad
b =
\begin{pmatrix}
b_1 \\ \vdots \\ b_m
\end{pmatrix},
$$
dove $A$ è la **matrice dei coefficienti** e il prodotto è quello righe per colonne, per il quale si rimanda all'argomento sulle matrici. La **matrice completa** $(A \mid b) \in M_{m, n+1}(\mathbb{R})$ si ottiene affiancando ad $A$ la colonna dei termini noti. La riga $i$ della matrice completa contiene tutta l'informazione dell'equazione $i$, perciò ogni operazione sulle equazioni si traduce in un'operazione sulle righe di $(A \mid b)$.
:::

:::esempio
Il sistema
$$
\begin{cases}
x + 2y - z = 3 \\[4pt]
2x - y + z = 1
\end{cases}
$$
ha $m = 2$ equazioni e $n = 3$ incognite, con
$$
A =
\begin{pmatrix}
1 & 2 & -1 \\
2 & -1 & 1
\end{pmatrix},
\qquad
(A \mid b) =
\left(\begin{array}{ccc|c}
1 & 2 & -1 & 3 \\
2 & -1 & 1 & 1
\end{array}\right).
$$
:::

## Interpretazione geometrica

:::osservazione{#interpretazione-geometrica titolo="Interpretazione geometrica"}
Un'equazione $a x + b y = c$ con $(a, b) \neq (0, 0)$ rappresenta una retta del piano, quindi risolvere un sistema di due equazioni in due incognite significa trovare i punti comuni a due rette. I casi possibili sono tre.

- Le rette sono **incidenti**: il sistema è determinato e la soluzione è il punto di intersezione. Questo accade quando i coefficienti delle incognite *non* sono proporzionali, cioè quando $\det A \neq 0$.
- Le rette sono **parallele e distinte**: il sistema è incompatibile.
- Le rette sono **coincidenti**: le due equazioni sono proporzionali e il sistema ha infinite soluzioni, i punti della retta.

::grafico{f="3-x;x-1" punti="2,1,pieno" etichette="0.9,3.0,x + y = 3;3.3,1.7,x − y = 1" xmin=-1.5 xmax=5 ymin=-2 ymax=4 uguale=1 titolo="Il sistema formato da $x + y = 3$ e $x - y = 1$ è determinato: le due rette si incontrano nel solo punto $(2, 1)$"}

::grafico{f="3-x;1-x" etichette="2.1,1.5,x + y = 3;-1.4,-1.2,x + y = 1" xmin=-1.5 xmax=5 ymin=-2 ymax=4 uguale=1 titolo="Il sistema formato da $x + y = 3$ e $x + y = 1$ è incompatibile: le due rette sono parallele e distinte"}

In tre incognite ogni equazione rappresenta un piano dello spazio, e tre piani possono avere in comune un punto, una retta, un piano oppure nessun punto; per lo studio delle posizioni reciproche si rimanda all'argomento su rette e piani nello spazio.
:::

## Operazioni elementari e metodo di Gauss

:::definizione{#operazioni-elementari titolo="Operazioni elementari sulle righe"}
Le **operazioni elementari** sulle righe di una matrice sono tre:

- lo scambio di due righe, $R_i \leftrightarrow R_j$;
- la moltiplicazione di una riga per un numero diverso da zero, $R_i \to c\, R_i$ con $c \neq 0$;
- la somma a una riga di un multiplo di un'altra riga, $R_i \to R_i + c\, R_j$ con $j \neq i$.

Sulla matrice completa di un sistema corrispondono a scambiare due equazioni, a moltiplicare un'equazione per una costante non nulla e a sommare a un'equazione un multiplo di un'altra. Sono le stesse operazioni usate nell'argomento sulle matrici per ridurre a scala e per calcolare l'inversa.
:::

::::teorema{#sistemi-equivalenti titolo="Operazioni elementari e sistemi equivalenti"}
Se la matrice completa $(A' \mid b')$ si ottiene da $(A \mid b)$ con una successione di operazioni elementari sulle righe, allora i sistemi $A x = b$ e $A' x = b'$ hanno le stesse soluzioni. Due sistemi con le stesse soluzioni si dicono **equivalenti**. Il teorema garantisce che durante la riduzione a scala l'insieme delle soluzioni resta lo stesso, quindi si può risolvere il sistema ridotto al posto di quello di partenza.

:::dimostrazione
È sufficiente considerare una sola operazione, perché il caso di una successione segue applicando il ragionamento a ogni passo. Ogni equazione del nuovo sistema è combinazione lineare delle equazioni del vecchio, quindi ogni soluzione del vecchio sistema soddisfa anche il nuovo. Ogni operazione elementare si annulla con un'operazione dello stesso tipo: lo scambio $R_i \leftrightarrow R_j$ con lo stesso scambio, $R_i \to c\, R_i$ con $R_i \to \dfrac{1}{c}\, R_i$, che è definita poiché $c \neq 0$, e $R_i \to R_i + c\, R_j$ con $R_i \to R_i - c\, R_j$. Perciò anche il vecchio sistema si ottiene dal nuovo con un'operazione elementare, e per lo stesso argomento ogni soluzione del nuovo sistema soddisfa il vecchio.
:::
::::

:::attenzione
Il teorema riguarda operazioni eseguite una dopo l'altra. Due operazioni eseguite nello stesso passo producono un sistema equivalente quando ogni riga modificata usa righe che in quel passo restano invariate. Il sistema formato da $x + y = 2$ e $x - y = 0$ ha l'unica soluzione $(1, 1)$; eseguendo insieme $R_1 \to R_1 - R_2$ e $R_2 \to R_2 - R_1$ si ottengono le equazioni $2y = 2$ e $-2y = -2$, che hanno le infinite soluzioni $(t, 1)$. Il nuovo sistema **non è equivalente** al primo, perché l'informazione su $x$ è andata persa.
:::

:::osservazione{#sistema-a-scala titolo="Risoluzione di un sistema a scala"}
Un sistema la cui matrice completa è a scala si risolve dal basso verso l'alto. Il primo elemento non nullo di ogni riga non nulla si chiama **pivot**.

- Se una riga ha la forma $(0 \ \cdots \ 0 \mid c)$ con $c \neq 0$, essa corrisponde all'equazione $0 = c$, quindi il sistema è **incompatibile**.
- Altrimenti le incognite delle colonne con un pivot si ricavano per sostituzione all'indietro, dall'ultima equazione alla prima, e le incognite delle colonne senza pivot restano libere: a ciascuna si assegna un parametro reale.

Le righe del tipo $(0 \ \cdots \ 0 \mid 0)$ corrispondono all'equazione $0 = 0$ e si eliminano. Il numero di parametri liberi è quindi il numero di incognite meno il numero di pivot.
:::

:::osservazione{#metodo-di-gauss titolo="Metodo di eliminazione di Gauss"}
Il **metodo di Gauss** risolve un sistema in due fasi: si riduce a scala la matrice completa $(A \mid b)$ con operazioni elementari sulle righe, poi si risolve il sistema a scala ottenuto. Per il teorema sui sistemi equivalenti le soluzioni trovate sono quelle del sistema di partenza. Il metodo si applica con qualsiasi numero di equazioni e di incognite e stabilisce nello stesso calcolo se il sistema è compatibile.
:::

:::esempio{titolo="Un sistema determinato"}
$$
\begin{cases}
x + y + z = 6 \\[4pt]
2x + 3y + z = 11 \\[4pt]
x - y + 2z = 5
\end{cases}
$$
$$
\left(\begin{array}{ccc|c}
1 & 1 & 1 & 6 \\
2 & 3 & 1 & 11 \\
1 & -1 & 2 & 5
\end{array}\right)
\xrightarrow[R_3 \to R_3 - R_1]{R_2 \to R_2 - 2R_1}
\left(\begin{array}{ccc|c}
1 & 1 & 1 & 6 \\
0 & 1 & -1 & -1 \\
0 & -2 & 1 & -1
\end{array}\right)
\xrightarrow{R_3 \to R_3 + 2R_2}
\left(\begin{array}{ccc|c}
1 & 1 & 1 & 6 \\
0 & 1 & -1 & -1 \\
0 & 0 & -1 & -3
\end{array}\right)
$$
L'ultima equazione $-z = -3$ dà $z = 3$; la seconda, $y - z = -1$, dà $y = 2$; la prima dà $x = 6 - y - z = 1$. Ci sono tre pivot e tre incognite, quindi nessuna incognita è libera e l'**unica soluzione** è $(1, 2, 3)$.
:::

## Il rango di una matrice

:::definizione{#minore titolo="Minore di una matrice"}
Sia $A \in M_{m,n}(\mathbb{R})$ e sia $p \leq \min(m, n)$. Scegliendo $p$ righe e $p$ colonne di $A$ e conservando gli elementi che stanno nelle loro intersezioni, nell'ordine in cui compaiono, si ottiene una sottomatrice quadrata di ordine $p$. Il suo determinante si chiama **minore di ordine $p$** di $A$. Gli elementi di $A$ sono i minori di ordine $1$; per il calcolo dei determinanti si rimanda all'argomento sul determinante e la matrice inversa.
:::

:::definizione{#rango titolo="Rango"}
Il **rango** di una matrice non nulla $A \in M_{m,n}(\mathbb{R})$, indicato con $\operatorname{rk} A$, è il massimo ordine di un minore non nullo di $A$; la matrice nulla ha rango $0$. Dire che $\operatorname{rk} A = r$ significa che esiste un minore non nullo di ordine $r$ e che *tutti* i minori di ordine $r + 1$ sono nulli. Dalla definizione seguono tre proprietà.

- $\operatorname{rk} A \leq \min(m, n)$, perché non esistono minori di ordine maggiore.
- $\operatorname{rk} A^T = \operatorname{rk} A$, perché i minori di $A^T$ sono i minori di $A$, dato che il determinante di una matrice quadrata coincide con quello della sua trasposta.
- Se $A \in M_n(\mathbb{R})$, allora $\operatorname{rk} A = n$ se e solo se $\det A \neq 0$, perché l'unico minore di ordine $n$ è $\det A$.

Il rango coincide con il massimo numero di righe, o di colonne, linearmente indipendenti, e per questa lettura si rimanda all'argomento sugli spazi vettoriali.
:::

:::esempio
Per
$$
A =
\begin{pmatrix}
1 & 2 & 3 \\
2 & 4 & 6 \\
1 & 0 & 1
\end{pmatrix}
$$
il determinante è nullo, poiché la seconda riga è il doppio della prima; quindi $\operatorname{rk} A < 3$. Il minore formato dalle righe $1$, $3$ e dalle colonne $1$, $2$ vale
$$
\begin{vmatrix}
1 & 2 \\
1 & 0
\end{vmatrix}
= -2 \neq 0,
$$
perciò $\operatorname{rk} A = 2$.
:::

::::teorema{#rango-e-riduzione-a-scala titolo="Rango e riduzione a scala"}
Le operazioni elementari sulle righe non cambiano il rango di una matrice, e il rango di una matrice a scala è uguale al numero dei suoi pivot. Quindi per calcolare $\operatorname{rk} A$ si riduce $A$ a scala e si contano i pivot; per matrici con molte righe e colonne il calcolo è molto più breve dell'esame di tutti i minori.

:::dimostrazione
L'invarianza del rango segue dalle proprietà del determinante rispetto alle operazioni elementari, per le quali si rimanda all'argomento sul determinante e la matrice inversa. Uno scambio di righe cambia al più il segno di un minore; la moltiplicazione di una riga per $c \neq 0$ moltiplica per $c$ i minori che contengono quella riga; la somma $R_i \to R_i + c\, R_j$ lascia invariati i minori che contengono entrambe le righe o nessuna delle due e trasforma un minore che contiene solo la riga $i$ nella somma di quel minore e di $c$ volte un altro minore della stessa matrice. Quindi, se tutti i minori di ordine $r + 1$ di $A$ sono nulli, lo sono anche quelli della nuova matrice, e poiché le operazioni sono invertibili vale anche il viceversa.

Sia ora $S$ a scala con $r$ pivot. Il minore formato dalle $r$ righe non nulle e dalle $r$ colonne dei pivot è il determinante di una matrice triangolare superiore con i pivot sulla diagonale, quindi è il prodotto dei pivot ed è diverso da zero. Ogni sottomatrice di ordine $r + 1$ contiene almeno una riga nulla di $S$, poiché le righe non nulle sono solo $r$, perciò ogni minore di ordine $r + 1$ è nullo. Ne segue $\operatorname{rk} S = r$.
:::
::::

## Il teorema degli orlati

:::definizione{#orlato titolo="Minore orlato"}
Sia $M$ un minore di ordine $p$ di $A$, ottenuto dalle righe $i_1, \dots, i_p$ e dalle colonne $j_1, \dots, j_p$. Un **orlato** di $M$ è un minore di ordine $p + 1$ ottenuto aggiungendo a quelle righe e colonne una riga e una colonna di $A$ non ancora scelte. Una matrice $m \times n$ ha esattamente $(m - p)(n - p)$ orlati di un minore di ordine $p$, uno per ogni coppia formata da una riga e da una colonna rimaste.
:::

:::teorema{#teorema-degli-orlati titolo="Teorema degli orlati (di Kronecker)"}
Sia $A \in M_{m,n}(\mathbb{R})$ e sia $M$ un minore non nullo di ordine $r$ di $A$. Se tutti gli orlati di $M$ sono nulli, allora $\operatorname{rk} A = r$. Il teorema riduce il numero di determinanti da calcolare: al posto di tutti i minori di ordine $r + 1$ bastano i $(m - r)(n - r)$ orlati di un minore non nullo già trovato. Il procedimento parte da un elemento non nullo e sale di ordine; se un orlato è diverso da zero, il rango è almeno $r + 1$ e si ripete il controllo sugli orlati del nuovo minore. La dimostrazione usa la dipendenza lineare tra le righe e si rimanda all'argomento sugli spazi vettoriali.
:::

:::esempio{titolo="Rango di una matrice 3 × 4"}
$$
A =
\begin{pmatrix}
1 & 2 & 0 & 1 \\
2 & 4 & 1 & 3 \\
3 & 6 & 1 & 4
\end{pmatrix}
$$
Il minore delle righe $1$, $2$ e delle colonne $1$, $3$ vale
$$
\begin{vmatrix}
1 & 0 \\
2 & 1
\end{vmatrix}
= 1 \neq 0,
$$
quindi $\operatorname{rk} A \geq 2$. I suoi orlati sono $(3 - 2)(4 - 2) = 2$ e si ottengono aggiungendo la riga $3$ e una tra le colonne $2$ e $4$:
$$
\begin{vmatrix}
1 & 2 & 0 \\
2 & 4 & 1 \\
3 & 6 & 1
\end{vmatrix}
= 0,
\qquad
\begin{vmatrix}
1 & 0 & 1 \\
2 & 1 & 3 \\
3 & 1 & 4
\end{vmatrix}
= 1 \cdot 1 - 0 + 1 \cdot (-1) = 0 .
$$
Il primo è nullo perché la sua seconda colonna è il doppio della prima. Poiché entrambi gli orlati sono nulli, per il **teorema degli orlati** $\operatorname{rk} A = 2$. Dalla sola definizione si sarebbero dovuti calcolare tutti e quattro i minori di ordine $3$.
:::

## Il teorema di Rouché-Capelli

::::teorema{#rouche-capelli titolo="Teorema di Rouché-Capelli"}
Sia $A x = b$ un sistema lineare con $A \in M_{m,n}(\mathbb{R})$. Il sistema è compatibile se e solo se
$$
\operatorname{rk} A = \operatorname{rk} (A \mid b) .
$$
In tal caso, detto $r$ il valore comune dei due ranghi, le soluzioni dipendono da $n - r$ parametri liberi:

- se $r = n$, il sistema ha **una e una sola soluzione**;
- se $r < n$, il sistema ha **infinite soluzioni**, e si dice che ne ha $\infty^{n - r}$.

Il teorema risponde alle due domande preliminari su un sistema, cioè se ha soluzioni e quante sono, con il solo calcolo di due ranghi. Poiché $A$ è una sottomatrice di $(A \mid b)$, vale sempre $\operatorname{rk} A \leq \operatorname{rk} (A \mid b) \leq \operatorname{rk} A + 1$, quindi i casi possibili sono due: ranghi uguali oppure rango della matrice completa più grande di uno.

:::dimostrazione
Si riduce $(A \mid b)$ a una matrice a scala $(S \mid c)$ con operazioni elementari sulle righe. Le stesse operazioni, ristrette alle prime $n$ colonne, riducono $A$ alla matrice a scala $S$. Per il teorema sui sistemi equivalenti il sistema $S x = c$ ha le stesse soluzioni di $A x = b$; per il teorema su rango e riduzione a scala $\operatorname{rk} A = \operatorname{rk} S$ e $\operatorname{rk} (A \mid b) = \operatorname{rk} (S \mid c)$, e questi ranghi sono i numeri di pivot.

I pivot di $S$ sono i pivot di $(S \mid c)$ che non stanno nell'ultima colonna. Quindi $\operatorname{rk} (S \mid c) = \operatorname{rk} S + 1$ se e solo se l'ultima colonna contiene un pivot, cioè se e solo se compare una riga $(0 \ \cdots \ 0 \mid c_i)$ con $c_i \neq 0$; in tal caso il sistema contiene l'equazione $0 = c_i$ ed è incompatibile.

Se invece i ranghi sono uguali a $r$, ogni riga non nulla ha il pivot in una colonna di $S$. Le $r$ incognite dei pivot si ricavano per sostituzione all'indietro in funzione delle altre $n - r$, che restano libere, e a ogni scelta dei valori delle incognite libere corrisponde esattamente una soluzione. Perciò la soluzione è unica se $r = n$, mentre se $r < n$ le soluzioni sono infinite e dipendono da $n - r$ parametri.
:::
::::

:::richiamo{titolo="Operazioni elementari e sistemi equivalenti"}
Se $(A' \mid b')$ si ottiene da $(A \mid b)$ con operazioni elementari sulle righe, allora $A x = b$ e $A' x = b'$ hanno le stesse soluzioni.
:::

:::richiamo{titolo="Rango e riduzione a scala"}
Le operazioni elementari sulle righe non cambiano il rango. Il rango di una matrice a scala è il numero dei suoi pivot.
:::

:::esempio{titolo="Un sistema incompatibile"}
$$
\begin{cases}
x + y + z = 2 \\[4pt]
x - y + 3z = 0 \\[4pt]
2x + 4z = 1
\end{cases}
$$
La terza riga di $A$ è la somma delle prime due, quindi $\det A = 0$, mentre il minore $\begin{vmatrix} 1 & 1 \\ 1 & -1 \end{vmatrix} = -2$ è non nullo; perciò $\operatorname{rk} A = 2$. Nella matrice completa l'orlato ottenuto con la terza riga e la colonna dei termini noti vale
$$
\begin{vmatrix}
1 & 1 & 2 \\
1 & -1 & 0 \\
2 & 0 & 1
\end{vmatrix}
= -1 - 1 + 4 = 2 \neq 0,
$$
quindi $\operatorname{rk} (A \mid b) = 3 \neq \operatorname{rk} A$ e il sistema è **incompatibile**. Il motivo si legge anche dalle equazioni: la somma delle prime due dà $2x + 4z = 2$, in contrasto con la terza.
:::

:::osservazione{#incognite-libere titolo="Scelta delle incognite libere"}
Quando il rango comune $r$ è stato trovato con un minore non nullo $M$ di ordine $r$, il sistema si risolve in tre passi.

- Si conservano le $r$ equazioni corrispondenti alle righe di $M$; le altre sono conseguenza di queste e si eliminano.
- Le incognite corrispondenti alle colonne di $M$ restano a sinistra, le altre $n - r$ passano a destra e diventano parametri.
- Il sistema $r \times r$ ottenuto ha determinante $M \neq 0$, quindi ha una sola soluzione per ogni valore dei parametri.

Nel sistema precedente, con il termine noto della terza equazione sostituito da $2$, i ranghi sono entrambi $2$ e le soluzioni sono $\infty^{3 - 2} = \infty^1$. Il minore usato coinvolge le colonne di $x$ e $y$, quindi $z = t$ è libera; dalle equazioni $x + y = 2 - t$ e $x - y = -3t$ si ricava $x = 1 - 2t$, $y = 1 + t$, e le soluzioni sono $(1 - 2t, \, 1 + t, \, t)$ con $t \in \mathbb{R}$.
:::

## La regola di Cramer

::::teorema{#regola-di-cramer titolo="Regola di Cramer"}
Sia $A x = b$ un sistema di $n$ equazioni in $n$ incognite con $\det A \neq 0$. Allora il sistema ha **una e una sola soluzione**, data da
$$
x_j = \frac{\det A_j}{\det A}, \qquad j = 1, \dots, n,
$$
dove $A_j$ è la matrice ottenuta da $A$ sostituendo la colonna $j$ con la colonna $b$ dei termini noti. La regola dà ogni incognita con un rapporto di determinanti, senza ridurre a scala; è comoda per sistemi $2 \times 2$ e $3 \times 3$ e quando serve una sola incognita. Il calcolo completo richiede $n + 1$ determinanti di ordine $n$, perciò per $n \geq 4$ il metodo di Gauss richiede meno operazioni.

:::dimostrazione
Poiché $\det A \neq 0$, la matrice $A$ è invertibile e il sistema equivale a $x = A^{-1} b$, che è l'unica soluzione. L'inversa si scrive con i complementi algebrici $C_{ij}$ degli elementi $a_{ij}$ come $(A^{-1})_{ji} = \dfrac{C_{ij}}{\det A}$, quindi
$$
x_j = \sum_{i=1}^{n} (A^{-1})_{ji}\, b_i = \frac{1}{\det A} \sum_{i=1}^{n} b_i\, C_{ij} .
$$
D'altra parte $A_j$ differisce da $A$ solo nella colonna $j$, e i complementi algebrici degli elementi di quella colonna non dipendono dalla colonna stessa, quindi in $A_j$ sono ancora i $C_{ij}$. Lo sviluppo di Laplace di $\det A_j$ lungo la colonna $j$ dà perciò $\det A_j = \sum_{i} b_i\, C_{ij}$, e sostituendo si ottiene la tesi.
:::
::::

:::richiamo{titolo="Inversa con i complementi algebrici"}
Se $A \in M_n(\mathbb{R})$ e $\det A \neq 0$, allora $A$ è invertibile e $(A^{-1})_{ji} = \dfrac{C_{ij}}{\det A}$, dove $C_{ij}$ è il complemento algebrico di $a_{ij}$.
:::

:::richiamo{titolo="Sviluppo di Laplace lungo una colonna"}
Per ogni $A \in M_n(\mathbb{R})$ e ogni colonna $j$ vale $\det A = \sum_{i=1}^{n} a_{ij}\, C_{ij}$.
:::

:::esempio
$$
\begin{cases}
2x + y = 5 \\[4pt]
x - 3y = -1
\end{cases}
\qquad
\det A =
\begin{vmatrix}
2 & 1 \\
1 & -3
\end{vmatrix}
= -7 \neq 0
$$
$$
x = \frac{1}{-7}
\begin{vmatrix}
5 & 1 \\
-1 & -3
\end{vmatrix}
= \frac{-14}{-7} = 2,
\qquad
y = \frac{1}{-7}
\begin{vmatrix}
2 & 5 \\
1 & -1
\end{vmatrix}
= \frac{-7}{-7} = 1
$$
La soluzione è $(2, 1)$, come si verifica sostituendo: $4 + 1 = 5$ e $2 - 3 = -1$.
:::

:::attenzione
La regola richiede l'ipotesi $\det A \neq 0$. Se $\det A = 0$ i rapporti non sono definiti e il sistema può essere sia incompatibile sia indeterminato: il sistema formato da $x + y = 1$ e $2x + 2y = 3$ è incompatibile, mentre quello formato da $x + y = 1$ e $2x + 2y = 2$ ha le infinite soluzioni $(1 - t, t)$. In entrambi i casi $\det A = 0$, e per decidere si applica il **teorema di Rouché-Capelli**.
:::

## Sistemi omogenei e struttura delle soluzioni

:::definizione{#sistema-omogeneo titolo="Sistema omogeneo"}
Il sistema $A x = b$ si dice **omogeneo** se $b = 0$, cioè se tutti i termini noti sono nulli. Un sistema omogeneo è sempre compatibile, perché $x = 0$ è una soluzione, detta **soluzione banale**. Indichiamo con
$$
S_0 = \{ x \in \mathbb{R}^n : A x = 0 \}
$$
l'insieme delle sue soluzioni. Dato un sistema qualsiasi $A x = b$, il sistema $A x = 0$ con la stessa matrice dei coefficienti si chiama **sistema omogeneo associato**.
:::

::::teorema{#soluzioni-non-banali titolo="Soluzioni non banali di un sistema omogeneo"}
Sia $A \in M_{m,n}(\mathbb{R})$. Il sistema omogeneo $A x = 0$ ha soluzioni diverse da quella banale se e solo se $\operatorname{rk} A < n$; in tal caso le soluzioni sono $\infty^{n - \operatorname{rk} A}$. Se $A$ è quadrata, questo accade se e solo se $\det A = 0$. In particolare un sistema omogeneo con più incognite che equazioni, $n > m$, ha *sempre* soluzioni non banali, poiché $\operatorname{rk} A \leq m < n$.

:::dimostrazione
Aggiungere una colonna nulla non cambia il rango, perché ogni minore che contiene quella colonna è nullo; quindi $\operatorname{rk} (A \mid 0) = \operatorname{rk} A$. Per il teorema di Rouché-Capelli la soluzione è unica, e allora è quella banale, se e solo se $\operatorname{rk} A = n$, mentre le soluzioni sono $\infty^{n - \operatorname{rk} A}$ se $\operatorname{rk} A < n$. Per $A$ quadrata di ordine $n$ la condizione $\operatorname{rk} A < n$ equivale a $\det A = 0$, per le proprietà del rango.
:::
::::

:::osservazione{#spazio-delle-soluzioni-omogenee titolo="Lo spazio delle soluzioni di un sistema omogeneo"}
Se $u$ e $v$ sono soluzioni di $A x = 0$ e $\alpha \in \mathbb{R}$, allora $A(u + v) = Au + Av = 0$ e $A(\alpha u) = \alpha\, Au = 0$, quindi $S_0$ è chiuso rispetto alla somma e al prodotto per uno scalare. Perciò $S_0$ è un **sottospazio** di $\mathbb{R}^n$, di dimensione $n - \operatorname{rk} A$, ed è il nucleo dell'applicazione lineare $x \mapsto A x$; si rimanda agli argomenti sugli spazi vettoriali e sulle applicazioni lineari. Nei calcoli le soluzioni si scrivono come combinazioni lineari di $n - \operatorname{rk} A$ vettori, uno per ogni parametro libero, e questi vettori formano una base di $S_0$.
:::

:::esempio
$$
\begin{cases}
x + y - z = 0 \\[4pt]
2x - y + z = 0
\end{cases}
$$
Sommando le due equazioni si ottiene $3x = 0$, quindi $x = 0$, e la prima dà $y = z$. Posto $z = t$, le soluzioni sono
$$
S_0 = \{ t\,(0, 1, 1) : t \in \mathbb{R} \} = \langle (0, 1, 1) \rangle,
$$
in accordo con il teorema, poiché $\operatorname{rk} A = 2$ e le soluzioni sono $\infty^{3 - 2} = \infty^1$.
:::

::::teorema{#struttura-delle-soluzioni titolo="Struttura delle soluzioni"}
Sia $A x = b$ un sistema compatibile, sia $x_0$ una sua soluzione, detta **soluzione particolare**, e sia $S_0$ l'insieme delle soluzioni del sistema omogeneo associato. Allora l'insieme $S$ delle soluzioni di $A x = b$ è
$$
S = x_0 + S_0 = \{ x_0 + y : y \in S_0 \} .
$$
Tutte le soluzioni si ottengono quindi da una sola, sommando le soluzioni dell'omogeneo associato. Per questo un sistema compatibile ha una soluzione oppure infinite: le sue soluzioni sono tante quante quelle di $A x = 0$.

:::dimostrazione
Sia $x \in S$. Allora $A(x - x_0) = Ax - Ax_0 = b - b = 0$, quindi $y = x - x_0$ appartiene a $S_0$ e $x = x_0 + y$. Viceversa, se $y \in S_0$, allora $A(x_0 + y) = A x_0 + A y = b + 0 = b$, quindi $x_0 + y \in S$. Le due inclusioni danno l'uguaglianza.
:::
::::

:::esempio
Il sistema
$$
\begin{cases}
x + y - z = 1 \\[4pt]
2x - y + z = 2
\end{cases}
$$
ha lo stesso omogeneo associato dell'esempio precedente. Sommando le equazioni si ottiene $3x = 3$, quindi $x = 1$ e $y = z$; le soluzioni sono
$$
(1, t, t) = (1, 0, 0) + t\,(0, 1, 1), \qquad t \in \mathbb{R},
$$
cioè la soluzione particolare $(1, 0, 0)$ più le soluzioni dell'omogeneo. Geometricamente $S_0$ è una retta per l'origine e $S$ è la retta parallela passante per $(1, 0, 0)$. Nel piano accade lo stesso per una sola equazione in due incognite, come mostra la figura per $x - 2y = 2$.

::grafico{f="x/2-1;x/2" vettori="0,0,2,0,x₀;0,0,2,1,v" punti="2,0,pieno" etichette="3.4,0.3,S;-2.6,-0.75,S₀" xmin=-3 xmax=5 ymin=-3 ymax=2.5 uguale=1 titolo="Le soluzioni di $x - 2y = 2$ (in colore) sono la retta parallela a quella delle soluzioni di $x - 2y = 0$ (tratteggiata) passante per la soluzione particolare $x_0 = (2, 0)$: $S = \{ (2, 0) + t\,(2, 1) : t \in \mathbb{R} \}$"}

:::

## Sistemi con parametro

:::osservazione{#discussione-con-parametro titolo="Discussione di un sistema con parametro"}
**Discutere** un sistema che dipende da un parametro reale $k$ significa stabilire, per ogni valore di $k$, se il sistema è compatibile, quante soluzioni ha e quali sono. Per un sistema quadrato, con $n$ equazioni in $n$ incognite, il procedimento ha tre passi.

- Si calcola $\det A$ in funzione di $k$ e se ne trovano gli zeri.
- Per i valori di $k$ con $\det A \neq 0$ si ha $\operatorname{rk} A = \operatorname{rk}(A \mid b) = n$, quindi il sistema è determinato; la soluzione si trova con la regola di Cramer o con Gauss.
- Per ciascuno dei valori con $\det A = 0$ si sostituisce il valore nel sistema e si applica il teorema di Rouché-Capelli al sistema numerico ottenuto.

Se il sistema non è quadrato, si calcolano i ranghi di $A$ e di $(A \mid b)$ in funzione di $k$, con il teorema degli orlati o con la riduzione a scala.
:::

:::esempio{titolo="Discussione completa"}
$$
\begin{cases}
x + y + z = 1 \\[4pt]
-x + ky + z = 1 \\[4pt]
x + y + kz = 1
\end{cases}
\qquad
\det A =
\begin{vmatrix}
1 & 1 & 1 \\
-1 & k & 1 \\
1 & 1 & k
\end{vmatrix}
= (k^2 - 1) + (k + 1) + (-1 - k) = k^2 - 1
$$
Il determinante si annulla per $k = 1$ e per $k = -1$.

- Se $k \neq \pm 1$, il sistema è **determinato**. Sottraendo la prima equazione dalla terza si ottiene $(k - 1) z = 0$, quindi $z = 0$ poiché $k \neq 1$; sommando le prime due rimane $(k + 1) y = 2$. La soluzione è
$$
\left( \frac{k - 1}{k + 1}, \ \frac{2}{k + 1}, \ 0 \right).
$$
- Se $k = 1$, la terza equazione coincide con la prima. Il minore $\begin{vmatrix} 1 & 1 \\ -1 & 1 \end{vmatrix} = 2$ è non nullo, quindi $\operatorname{rk} A = \operatorname{rk} (A \mid b) = 2$ e le soluzioni sono $\infty^1$. Sottraendo la seconda equazione dalla prima si ottiene $2x = 0$, perciò le soluzioni sono $(0, \, 1 - t, \, t)$ con $t \in \mathbb{R}$.
- Se $k = -1$, le colonne di $y$ e $z$ nelle prime due righe danno il minore $\begin{vmatrix} 1 & 1 \\ -1 & 1 \end{vmatrix} = 2 \neq 0$, quindi $\operatorname{rk} A = 2$. Il suo orlato nella matrice completa con la terza riga e la colonna dei termini noti vale $\begin{vmatrix} 1 & 1 & 1 \\ -1 & 1 & 1 \\ 1 & -1 & 1 \end{vmatrix} = 4 \neq 0$, perciò $\operatorname{rk} (A \mid b) = 3$ e il sistema è **incompatibile**.
:::

:::attenzione
Nella riduzione la divisione per un'espressione che contiene il parametro richiede che l'espressione sia diversa da zero, e i valori che la annullano vanno studiati a parte. Nell'esempio precedente l'equazione $(k - 1) z = 0$ dà $z = 0$ solo per $k \neq 1$; per $k = 1$ diventa $0 = 0$, che è soddisfatta da ogni $z$, e infatti per $k = 1$ le soluzioni hanno $z = t$ arbitrario. Allo stesso modo $R_i \to (k - 1)\, R_i$ è un'operazione elementare solo per $k \neq 1$.
:::

:::osservazione{#sistemi-sovradeterminati titolo="Sistemi con più equazioni che incognite"}
Se il sistema ha $n + 1$ equazioni in $n$ incognite, la matrice completa $(A \mid b)$ è quadrata di ordine $n + 1$, mentre $\operatorname{rk} A \leq n$. Quindi se $\det (A \mid b) \neq 0$ si ha $\operatorname{rk} (A \mid b) = n + 1 > \operatorname{rk} A$ e il sistema è incompatibile. La condizione $\det (A \mid b) = 0$ è perciò *necessaria* per la compatibilità, e i valori del parametro che la soddisfano si studiano uno per uno. Per il sistema formato da $x + y = 1$, $x - y = 3$ e $x + 2y = k$ si ha
$$
\det (A \mid b) =
\begin{vmatrix}
1 & 1 & 1 \\
1 & -1 & 3 \\
1 & 2 & k
\end{vmatrix}
= -2k,
$$
quindi il sistema può essere compatibile solo per $k = 0$. Per $k = 0$ le prime due equazioni danno $(2, -1)$, che soddisfa anche la terza, e poiché $\operatorname{rk} A = 2$ questa è l'**unica soluzione**.

::grafico{f="1-x;x-3;-x/2" punti="2,-1,pieno" etichette="-1.9,3.4,x + y = 1;3.9,0.25,x − y = 3;-1.9,1.4,x + 2y = 0" xmin=-2 xmax=5 ymin=-3.5 ymax=4 uguale=1 titolo="Per $k = 0$ le rette $x + y = 1$, $x - y = 3$ e $x + 2y = 0$ passano tutte per $(2, -1)$; per $k \neq 0$ la terza retta non passa per quel punto e il sistema è incompatibile"}

:::
