---
titolo: Matrici, determinanti e sistemi lineari
sommario: Come si opera con le matrici, come si calcolano determinante, inversa e rango, quando un sistema lineare ha soluzioni e come si trovano con Cramer, Rouché-Capelli e Gauss, anche in presenza di un parametro, con l'equilibrio di due mercati e il modello di Leontief.
---

## Matrici e operazioni

:::definizione{#matrice titolo="Matrice"}
Una **matrice** $m \times n$ è una tabella di numeri reali disposti su $m$ righe e $n$ colonne:
$$
A = \begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{pmatrix} .
$$
Il numero $a_{ij}$ è l'**elemento** di posto $(i, j)$, cioè della riga $i$ e della colonna $j$, e si scrive anche $A = (a_{ij})$. Una matrice $1 \times n$ è un **vettore riga**, una matrice $m \times 1$ è un **vettore colonna**. Per esempio
$$
A = \begin{pmatrix} 1 & 2 & 0 \\ 3 & -1 & 4 \end{pmatrix}
$$
è una matrice $2 \times 3$ con $a_{12} = 2$ e $a_{23} = 4$. Le matrici raccolgono in un solo oggetto i coefficienti di un sistema lineare, oppure dati disposti in tabella.
:::

:::definizione{#somma-e-prodotto-per-scalare titolo="Somma e prodotto per uno scalare"}
Siano $A = (a_{ij})$ e $B = (b_{ij})$ due matrici $m \times n$ e sia $\lambda \in \mathbb{R}$. La **somma** $A + B$ e il **prodotto per lo scalare** $\lambda$ si calcolano elemento per elemento:
$$
A + B = (a_{ij} + b_{ij}),
\qquad
\lambda A = (\lambda\, a_{ij}) .
$$
La somma è definita *solo* tra matrici con le stesse dimensioni, ed è commutativa e associativa; la matrice nulla $O$ è l'elemento neutro. Con la matrice $A$ della definizione precedente e $B = \begin{pmatrix} 2 & 0 & 1 \\ -1 & 1 & 2 \end{pmatrix}$ si ha
$$
A + B = \begin{pmatrix} 3 & 2 & 1 \\ 2 & 0 & 6 \end{pmatrix},
\qquad
2A = \begin{pmatrix} 2 & 4 & 0 \\ 6 & -2 & 8 \end{pmatrix} .
$$
:::

:::definizione{#prodotto-righe-per-colonne titolo="Prodotto righe per colonne"}
Siano $A$ una matrice $m \times n$ e $B$ una matrice $n \times p$, cioè il numero di colonne di $A$ è uguale al numero di righe di $B$. Il **prodotto** $AB$ è la matrice $m \times p$ il cui elemento di posto $(i, j)$ si ottiene moltiplicando la riga $i$ di $A$ per la colonna $j$ di $B$, elemento per elemento, e sommando:
$$
(AB)_{ij} = a_{i1} b_{1j} + a_{i2} b_{2j} + \dots + a_{in} b_{nj} = \sum_{k = 1}^{n} a_{ik}\, b_{kj} .
$$
Con $A = \begin{pmatrix} 1 & 2 & 0 \\ 3 & -1 & 4 \end{pmatrix}$, di tipo $2 \times 3$, e $C = \begin{pmatrix} 1 & 0 \\ 2 & 1 \\ -1 & 3 \end{pmatrix}$, di tipo $3 \times 2$, il prodotto $AC$ è $2 \times 2$:
$$
AC = \begin{pmatrix}
1 + 4 + 0 & 0 + 2 + 0 \\
3 - 2 - 4 & 0 - 1 + 12
\end{pmatrix}
= \begin{pmatrix} 5 & 2 \\ -3 & 11 \end{pmatrix} .
$$
Il prodotto $CA$ è invece una matrice $3 \times 3$.
:::

:::teorema{#proprieta-del-prodotto titolo="Proprietà del prodotto"}
Per matrici con dimensioni tali che i prodotti e le somme siano definiti, e per ogni $\lambda \in \mathbb{R}$, valgono:

- associativa: $(AB)C = A(BC)$;
- distributive: $A(B + C) = AB + AC$ e $(A + B)C = AC + BC$;
- compatibilità con lo scalare: $(\lambda A)B = A(\lambda B) = \lambda\,(AB)$.

Le proprietà seguono scrivendo l'elemento generico dei due membri. Per l'associativa si scrive $ABC$ senza parentesi, e per una matrice quadrata si definiscono le potenze $A^2 = AA$, $A^3 = AAA$ e così via.
:::

:::attenzione
Il prodotto di matrici *non* è commutativo, anche quando $AB$ e $BA$ sono entrambi definiti e hanno le stesse dimensioni. Per esempio
$$
\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}
\begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}
= \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix},
\qquad
\begin{pmatrix} 1 & 0 \\ 1 & 1 \end{pmatrix}
\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}
= \begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix} .
$$
Inoltre il prodotto di due matrici non nulle può essere la matrice nulla, perché $\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix} \begin{pmatrix} 1 & -1 \\ -1 & 1 \end{pmatrix} = O$. Quindi da $AB = O$ *non* segue che $A = O$ oppure $B = O$.
:::

:::definizione{#trasposta titolo="Matrice trasposta"}
La **trasposta** di una matrice $A$ di tipo $m \times n$ è la matrice $A^{T}$ di tipo $n \times m$ che ha per righe le colonne di $A$, cioè $(A^{T})_{ij} = a_{ji}$. Valgono
$$
(A + B)^{T} = A^{T} + B^{T},
\qquad
(\lambda A)^{T} = \lambda A^{T},
\qquad
(AB)^{T} = B^{T} A^{T} ,
$$
e nell'ultima formula l'ordine dei fattori si inverte. Per esempio $\begin{pmatrix} 1 & 2 & 0 \\ 3 & -1 & 4 \end{pmatrix}^{T} = \begin{pmatrix} 1 & 3 \\ 2 & -1 \\ 0 & 4 \end{pmatrix}$.
:::

## Matrici quadrate

:::definizione{#matrice-quadrata titolo="Matrice quadrata e matrice identità"}
Una matrice è **quadrata** di ordine $n$ se ha $n$ righe e $n$ colonne. Gli elementi $a_{11}, a_{22}, \dots, a_{nn}$ formano la **diagonale principale**. La **matrice identità** $I_n$ è la matrice quadrata di ordine $n$ con $1$ sulla diagonale principale e $0$ altrove:
$$
I_2 = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix},
\qquad
I_3 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix} .
$$
Per ogni matrice $A$ quadrata di ordine $n$ vale $A I_n = I_n A = A$, perché il prodotto di $A$ per la colonna $j$ di $I_n$ è la colonna $j$ di $A$; nel prodotto di matrici l'identità ha quindi il ruolo del numero $1$.
:::

:::definizione{#matrici-diagonali-e-triangolari titolo="Matrici diagonali e triangolari"}
Sia $A$ una matrice quadrata di ordine $n$.

- $A$ è **diagonale** se $a_{ij} = 0$ per ogni $i \neq j$, cioè se gli elementi fuori dalla diagonale principale sono nulli.
- $A$ è **triangolare superiore** se $a_{ij} = 0$ per ogni $i > j$, cioè se gli elementi sotto la diagonale principale sono nulli.
- $A$ è **triangolare inferiore** se $a_{ij} = 0$ per ogni $i < j$.

Il prodotto di due matrici diagonali è diagonale e si ottiene moltiplicando gli elementi diagonali corrispondenti, quindi le potenze di una matrice diagonale si calcolano subito:
$$
\begin{pmatrix} 2 & 0 \\ 0 & -1 \end{pmatrix}^{3} = \begin{pmatrix} 8 & 0 \\ 0 & -1 \end{pmatrix} .
$$
Il metodo di Gauss trasforma una matrice quadrata in una matrice triangolare superiore, il cui determinante è il prodotto degli elementi diagonali.
:::

:::definizione{#matrice-simmetrica titolo="Matrice simmetrica"}
Una matrice quadrata $A$ è **simmetrica** se $A^{T} = A$, cioè se $a_{ij} = a_{ji}$ per ogni $i$ e $j$; gli elementi sono disposti in modo simmetrico rispetto alla diagonale principale. Per esempio $\begin{pmatrix} 1 & 4 \\ 4 & -3 \end{pmatrix}$ è simmetrica. Per ogni matrice $B$ la matrice $B B^{T}$ è simmetrica, poiché $(B B^{T})^{T} = (B^{T})^{T} B^{T} = B B^{T}$. Le matrici simmetriche compaiono nello studio delle funzioni di due variabili, dove la matrice hessiana è simmetrica per il teorema di Schwarz.
:::

## Determinante

:::definizione{#determinante-2x2 titolo="Determinante di una matrice 2 × 2"}
Il **determinante** di una matrice quadrata di ordine $2$ è il numero
$$
\det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = \begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc ,
$$
cioè il prodotto degli elementi della diagonale principale meno il prodotto degli elementi dell'altra diagonale. Per esempio $\begin{vmatrix} 4 & 1 \\ 1 & 3 \end{vmatrix} = 12 - 1 = 11$. Il valore assoluto del determinante è l'area del parallelogramma che ha per lati i vettori riga $(a, b)$ e $(c, d)$; in particolare il determinante è nullo esattamente quando le due righe sono proporzionali e il parallelogramma è schiacciato su una retta.

::grafico{area="3*x;x/4;0;1|3+(x-1)/4;x/4;1;4|3+(x-1)/4;1+3*(x-4);4;5" vettori="0,0,4,1,u;0,0,1,3,v" segmenti="4,1,5,4;1,3,5,4" etichette="2.1,1.9,area 11" xmin=-1 xmax=6 ymin=-1 ymax=5 uguale=1 titolo="Il parallelogramma di lati $u = (4, 1)$ e $v = (1, 3)$ ha area $\begin{vmatrix} 4 & 1 \\ 1 & 3 \end{vmatrix} = 11$"}

:::

:::definizione{#complemento-algebrico titolo="Minore complementare e complemento algebrico"}
Sia $A$ una matrice quadrata di ordine $n \geq 2$. Il **minore complementare** $M_{ij}$ dell'elemento $a_{ij}$ è il determinante della matrice di ordine $n - 1$ che si ottiene cancellando da $A$ la riga $i$ e la colonna $j$. Il **complemento algebrico** di $a_{ij}$ è
$$
A_{ij} = (-1)^{i + j}\, M_{ij} .
$$
Il segno $(-1)^{i + j}$ vale $+1$ quando $i + j$ è pari e $-1$ quando è dispari, e si distribuisce a scacchiera a partire dal $+$ in alto a sinistra. Per $A = \begin{pmatrix} 2 & 1 & 0 \\ 1 & 3 & 1 \\ 0 & 2 & 4 \end{pmatrix}$, cancellando la prima riga e la seconda colonna si ottiene $M_{12} = \begin{vmatrix} 1 & 1 \\ 0 & 4 \end{vmatrix} = 4$, quindi $A_{12} = -4$.
:::

:::definizione{#determinante titolo="Determinante di una matrice quadrata"}
Il determinante di una matrice quadrata di ordine $n$ si definisce a partire dall'ordine $n - 1$. Per $n = 1$ si pone $\det (a_{11}) = a_{11}$; per $n \geq 2$
$$
\det A = a_{11} A_{11} + a_{12} A_{12} + \dots + a_{1n} A_{1n} ,
$$
cioè si moltiplica ogni elemento della prima riga per il suo complemento algebrico e si sommano i prodotti. Per $n = 2$ si ritrova $ad - bc$, poiché $A_{11} = d$ e $A_{12} = -c$. Per la matrice $A$ della definizione precedente
$$
\det A = 2 \begin{vmatrix} 3 & 1 \\ 2 & 4 \end{vmatrix} - 1 \begin{vmatrix} 1 & 1 \\ 0 & 4 \end{vmatrix} + 0 = 2 \cdot 10 - 4 = 16 .
$$
:::

:::teorema{#regola-di-sarrus titolo="Regola di Sarrus"}
Per una matrice quadrata di ordine $3$ si ricopiano a destra le prime due colonne. Il determinante è la somma dei prodotti sulle tre diagonali che scendono verso destra meno la somma dei prodotti sulle tre diagonali che salgono verso destra:
$$
\det A = a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32} - a_{13}a_{22}a_{31} - a_{11}a_{23}a_{32} - a_{12}a_{21}a_{33} .
$$
La formula si ottiene sviluppando i tre determinanti $2 \times 2$ della definizione. Per $A = \begin{pmatrix} 2 & 1 & 0 \\ 1 & 3 & 1 \\ 0 & 2 & 4 \end{pmatrix}$ si ha $\det A = (24 + 0 + 0) - (0 + 4 + 4) = 16$, come con la definizione. La regola vale *solo* per l'ordine $3$; per l'ordine $4$ si usa lo sviluppo di Laplace.

::grafico{assi=0 uguale=1 etichette="0,2,2;1,2,1;2,2,0;3,2,2;4,2,1;0,1,1;1,1,3;2,1,1;3,1,1;4,1,3;0,0,0;1,0,2;2,0,4;3,0,0;4,0,2" linee="-0.3,2.3 2.3,-0.3;0.7,2.3 3.3,-0.3;1.7,2.3 4.3,-0.3" segmenti="-0.3,-0.3,2.3,2.3;0.7,-0.3,3.3,2.3;1.7,-0.3,4.3,2.3" xmin=-1 xmax=5 ymin=-1 ymax=3 titolo="Regola di Sarrus: le prime due colonne sono ricopiate a destra; i prodotti sulle diagonali a tratto pieno ($24$, $0$, $0$) si sommano, quelli sulle diagonali tratteggiate ($0$, $4$, $4$) si sottraggono"}

:::

:::teorema{#sviluppo-di-laplace titolo="Sviluppo di Laplace"}
Sia $A$ una matrice quadrata di ordine $n \geq 2$. Per ogni riga $i$ e per ogni colonna $j$
$$
\det A = \sum_{k = 1}^{n} a_{ik}\, A_{ik} = \sum_{k = 1}^{n} a_{kj}\, A_{kj} ,
$$
cioè il determinante si può sviluppare lungo una riga *qualsiasi* o lungo una colonna *qualsiasi*. Se invece si moltiplicano gli elementi di una riga per i complementi algebrici di un'altra riga, la somma è zero:
$$
\sum_{k = 1}^{n} a_{ik}\, A_{jk} = 0 \qquad \text{per } i \neq j .
$$
Conviene sviluppare lungo la riga o la colonna con più zeri, perché i termini con $a_{ik} = 0$ non vanno calcolati. La seconda formula è lo sviluppo di una matrice con due righe uguali, la riga $i$ ripetuta al posto della riga $j$, che ha determinante nullo. Per la dimostrazione si rimanda all'argomento sui determinanti di Algebra lineare.
:::

:::esempio{titolo="Determinante di ordine 4"}
Nella matrice
$$
A = \begin{pmatrix} 1 & 0 & 2 & 0 \\ 3 & 1 & 0 & 0 \\ 0 & 2 & 1 & 0 \\ 1 & 0 & 1 & 2 \end{pmatrix}
$$
la quarta colonna ha un solo elemento non nullo, $a_{44} = 2$, con segno $(-1)^{4 + 4} = +1$. Lo sviluppo lungo la quarta colonna e poi lungo la prima riga dà
$$
\begin{aligned}
\det A &= 2 \begin{vmatrix} 1 & 0 & 2 \\ 3 & 1 & 0 \\ 0 & 2 & 1 \end{vmatrix} \\[6pt]
&= 2 \left( 1 \cdot (1 - 0) - 0 + 2 \cdot (6 - 0) \right) \\[6pt]
&= 2 \cdot 13 = 26 .
\end{aligned}
$$
:::

:::teorema{#determinante-triangolare titolo="Determinante di una matrice triangolare"}
Il determinante di una matrice triangolare, superiore o inferiore, e in particolare di una matrice diagonale, è il prodotto degli elementi della diagonale principale:
$$
\det A = a_{11}\, a_{22} \cdots a_{nn} .
$$
Per una matrice triangolare superiore si sviluppa lungo la prima colonna, che ha come unico elemento non nullo $a_{11}$; il minore complementare è ancora triangolare superiore, e ripetendo il ragionamento si ottiene il prodotto degli elementi diagonali. In particolare $\det I_n = 1$, e per esempio $\begin{vmatrix} 2 & 5 & -1 \\ 0 & 3 & 7 \\ 0 & 0 & -1 \end{vmatrix} = -6$.
:::

## Proprietà del determinante

:::teorema{#proprieta-del-determinante titolo="Proprietà del determinante"}
Sia $A$ una matrice quadrata di ordine $n$. Valgono le proprietà seguenti.

- $\det A^{T} = \det A$; perciò ogni proprietà enunciata per le righe vale anche per le colonne.
- Se $A$ ha una riga nulla, oppure due righe uguali o proporzionali, allora $\det A = 0$.
- Scambiando due righe il determinante cambia segno.
- Moltiplicando una riga per $\lambda$ il determinante viene moltiplicato per $\lambda$; di conseguenza $\det(\lambda A) = \lambda^{n} \det A$.
- Sommando a una riga un multiplo di un'altra riga il determinante non cambia.

L'ultima proprietà permette di creare zeri in una colonna senza cambiare il determinante, e di arrivare a una matrice triangolare. Per la dimostrazione si rimanda all'argomento sui determinanti di Algebra lineare.
:::

:::esempio{titolo="Calcolo con le operazioni sulle righe"}
Nella matrice $\begin{pmatrix} 1 & 2 & 3 \\ 2 & 5 & 7 \\ 1 & 3 & 5 \end{pmatrix}$ si sottrae dalla seconda riga il doppio della prima e dalla terza riga la prima; poi si sottrae dalla terza riga la nuova seconda riga. Le operazioni sono tutte del tipo dell'ultima proprietà, quindi
$$
\begin{vmatrix} 1 & 2 & 3 \\ 2 & 5 & 7 \\ 1 & 3 & 5 \end{vmatrix}
= \begin{vmatrix} 1 & 2 & 3 \\ 0 & 1 & 1 \\ 0 & 1 & 2 \end{vmatrix}
= \begin{vmatrix} 1 & 2 & 3 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{vmatrix}
= 1 .
$$
L'ultimo determinante è quello di una matrice triangolare, e vale il prodotto $1 \cdot 1 \cdot 1$.
:::

:::teorema{#teorema-di-binet titolo="Teorema di Binet"}
Siano $A$ e $B$ matrici quadrate dello stesso ordine. Allora
$$
\det(AB) = \det A \cdot \det B .
$$
Ne segue che $\det(AB) = \det(BA)$, benché in generale $AB \neq BA$, e che $\det(A^{k}) = (\det A)^{k}$. Per esempio, con $\det A = 3$ e $\det B = -2$ si ottiene $\det(A^{2} B) = 9 \cdot (-2) = -18$. Per la dimostrazione si rimanda all'argomento sui determinanti di Algebra lineare.
:::

:::attenzione
Il determinante *non* è additivo. Con $A = B = I_2$ si ha $\det(A + B) = \det(2 I_2) = 4$, mentre $\det A + \det B = 2$. Allo stesso modo $\det(2A) = 2^{n} \det A$, e non $2 \det A$.
:::

## Matrice inversa

:::definizione{#matrice-inversa titolo="Matrice inversa"}
Una matrice quadrata $A$ di ordine $n$ è **invertibile** se esiste una matrice $B$ di ordine $n$ tale che
$$
AB = BA = I_n .
$$
Se una tale $B$ esiste è unica, si chiama **inversa** di $A$ e si indica con $A^{-1}$. L'unicità segue dall'associatività, poiché se anche $C$ soddisfa $AC = CA = I_n$ allora $C = C\,(AB) = (CA)\,B = B$. L'inversa serve a risolvere le equazioni matriciali; per esempio da $AX = B$, moltiplicando a sinistra per $A^{-1}$, si ottiene $X = A^{-1} B$.
:::

::::teorema{#esistenza-inversa titolo="Esistenza e calcolo dell'inversa"}
Una matrice quadrata $A$ è invertibile se e solo se $\det A \neq 0$. In questo caso
$$
A^{-1} = \frac{1}{\det A}
\begin{pmatrix}
A_{11} & A_{21} & \cdots & A_{n1} \\
A_{12} & A_{22} & \cdots & A_{n2} \\
\vdots & \vdots & & \vdots \\
A_{1n} & A_{2n} & \cdots & A_{nn}
\end{pmatrix} ,
$$
cioè l'elemento di posto $(i, j)$ dell'inversa è $\dfrac{A_{ji}}{\det A}$, quindi si calcola la matrice dei complementi algebrici, la si traspone e la si divide per $\det A$. Per $n = 2$ la formula diventa
$$
\begin{pmatrix} a & b \\ c & d \end{pmatrix}^{-1} = \frac{1}{ad - bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix},
\qquad ad - bc \neq 0 ,
$$
quindi si scambiano gli elementi della diagonale principale e si cambia segno agli altri due. Per esempio $\begin{pmatrix} 4 & 1 \\ 1 & 3 \end{pmatrix}^{-1} = \dfrac{1}{11} \begin{pmatrix} 3 & -1 \\ -1 & 4 \end{pmatrix}$.

:::dimostrazione
L'idea è che il prodotto di $A$ per la trasposta della matrice dei complementi algebrici, che si indica con $\operatorname{adj} A$, contiene in ogni posto uno sviluppo di Laplace. Se $A$ è invertibile, per il **teorema di Binet** $\det A \cdot \det A^{-1} = \det I_n = 1$, quindi $\det A \neq 0$. Viceversa, sia $\det A \neq 0$. L'elemento di posto $(i, j)$ del prodotto $A \cdot \operatorname{adj} A$ è
$$
\sum_{k = 1}^{n} a_{ik}\, A_{jk} .
$$
Per $i = j$ questa somma è lo sviluppo di $\det A$ lungo la riga $i$; per $i \neq j$ è nulla, per la seconda formula dello **sviluppo di Laplace**. Quindi $A \cdot \operatorname{adj} A = \det A \cdot I_n$, e con lo sviluppo lungo le colonne si ottiene allo stesso modo $\operatorname{adj} A \cdot A = \det A \cdot I_n$. Dividendo per $\det A \neq 0$ si conclude che $\dfrac{1}{\det A} \operatorname{adj} A$ è l'inversa di $A$.
:::
::::

:::esempio{titolo="Inversa di una matrice di ordine 3"}
Per $A = \begin{pmatrix} 1 & 2 & 1 \\ 0 & 1 & 1 \\ 1 & 1 & 1 \end{pmatrix}$ lo sviluppo lungo la prima colonna dà $\det A = 1 \cdot (1 - 1) + 1 \cdot (2 - 1) = 1 \neq 0$, quindi $A$ è invertibile. I complementi algebrici sono
$$
\begin{aligned}
&A_{11} = 0, \quad A_{12} = 1, \quad A_{13} = -1, \\[4pt]
&A_{21} = -1, \quad A_{22} = 0, \quad A_{23} = 1, \\[4pt]
&A_{31} = 1, \quad A_{32} = -1, \quad A_{33} = 1 ,
\end{aligned}
$$
e trasponendo la loro matrice si ottiene
$$
A^{-1} = \begin{pmatrix} 0 & -1 & 1 \\ 1 & 0 & -1 \\ -1 & 1 & 1 \end{pmatrix} .
$$
Come controllo, la prima riga di $A$ per la prima colonna di $A^{-1}$ dà $0 + 2 - 1 = 1$, e la prima riga di $A$ per la seconda colonna dà $-1 + 0 + 1 = 0$.
:::

:::teorema{#proprieta-dell-inversa titolo="Proprietà dell'inversa"}
Siano $A$ e $B$ matrici quadrate invertibili dello stesso ordine. Allora $AB$, $A^{T}$ e $A^{-1}$ sono invertibili e
$$
(AB)^{-1} = B^{-1} A^{-1},
\qquad
(A^{T})^{-1} = (A^{-1})^{T},
\qquad
\det(A^{-1}) = \frac{1}{\det A} .
$$
La prima formula si verifica con il prodotto, poiché $(AB)(B^{-1}A^{-1}) = A\,(B B^{-1})\,A^{-1} = A A^{-1} = I_n$; come per la trasposta, l'ordine dei fattori si inverte. La terza segue dal teorema di Binet applicato a $A A^{-1} = I_n$.
:::

## Rango

:::definizione{#rango titolo="Minori e rango"}
Sia $A$ una matrice $m \times n$. Un **minore di ordine** $k$ di $A$ è il determinante di una matrice quadrata $k \times k$ che si ottiene scegliendo $k$ righe e $k$ colonne di $A$. Il **rango** $\operatorname{rk} A$ è l'ordine massimo di un minore non nullo di $A$, e la matrice nulla ha rango $0$. Risulta sempre $\operatorname{rk} A \leq \min(m, n)$, e una matrice quadrata di ordine $n$ ha rango $n$ se e solo se $\det A \neq 0$.
:::

:::esempio{titolo="Rango con i minori"}
Per $A = \begin{pmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 1 & 0 & 1 \end{pmatrix}$ l'unico minore di ordine $3$ è $\det A$, che è nullo perché la seconda riga è il doppio della prima. Il minore di ordine $2$ formato dalla prima e dalla terza riga e dalle prime due colonne è
$$
\begin{vmatrix} 1 & 2 \\ 1 & 0 \end{vmatrix} = -2 \neq 0 ,
$$
quindi $\operatorname{rk} A = 2$.
:::

:::teorema{#teorema-degli-orlati titolo="Teorema degli orlati"}
Sia $M$ un minore non nullo di ordine $r$ di una matrice $A$. Se tutti i minori di ordine $r + 1$ che contengono $M$, detti **orlati** di $M$, sono nulli, allora $\operatorname{rk} A = r$. Gli orlati si ottengono aggiungendo a $M$ una riga e una colonna di $A$; per una matrice $3 \times 4$ con un minore non nullo di ordine $2$, per esempio, bastano $2$ orlati invece dei $4$ minori di ordine $3$. Per la dimostrazione si rimanda all'argomento sui sistemi lineari e il rango di Algebra lineare.
:::

:::definizione{#matrice-a-scala titolo="Matrice a scala"}
Una matrice è **a scala** (per righe) se il primo elemento non nullo di ogni riga, detto **pivot**, sta strettamente a destra del pivot della riga precedente, e le eventuali righe nulle stanno in fondo. Sotto ogni pivot ci sono quindi solo zeri. Per esempio
$$
\begin{pmatrix} 1 & 2 & -1 & 3 \\ 0 & 0 & 3 & 1 \\ 0 & 0 & 0 & 0 \end{pmatrix}
$$
è a scala, con pivot $1$ nella prima colonna e $3$ nella terza. Il rango di una matrice a scala è il **numero delle righe non nulle**, perché le righe con i pivot e le colonne dei pivot formano un minore triangolare con elementi diagonali non nulli, mentre ogni minore più grande contiene una riga nulla.

::grafico{assi=0 uguale=1 etichette="0,2,1;1,2,2;2,2,-1;3,2,3;0,1,0;1,1,0;2,1,3;3,1,1;0,0,0;1,0,0;2,0,0;3,0,0" linee="-0.5,2.5 -0.5,1.5 1.5,1.5 1.5,0.5 3.5,0.5" xmin=-1 xmax=4 ymin=-1 ymax=3 titolo="Nella matrice a scala i pivot $1$ e $3$ stanno subito sopra la linea a gradini e sotto la linea ci sono solo zeri; le righe non nulle sono due, quindi il rango è $2$"}

:::

:::teorema{#riduzione-a-scala titolo="Riduzione a scala"}
Le **operazioni elementari** sulle righe di una matrice sono:

- scambiare due righe;
- moltiplicare una riga per un numero diverso da zero;
- sommare a una riga un multiplo di un'altra riga.

Le operazioni elementari non cambiano il rango, e con un numero finito di esse ogni matrice si trasforma in una matrice a scala (**metodo di eliminazione di Gauss**). Per esempio, nella matrice $\begin{pmatrix} 1 & 2 & -1 & 3 \\ 2 & 4 & 1 & 7 \\ 1 & 2 & 2 & 4 \end{pmatrix}$ si sottrae il doppio della prima riga dalla seconda e la prima riga dalla terza, ottenendo le righe $(0, 0, 3, 1)$ e $(0, 0, 3, 1)$; sottraendo la seconda riga dalla terza si arriva alla matrice a scala della definizione precedente, quindi il rango è $2$. L'invarianza del rango segue dalle proprietà del determinante, e per la dimostrazione si rimanda all'argomento sui sistemi lineari e il rango di Algebra lineare.
:::

## Sistemi lineari e regola di Cramer

:::definizione{#sistema-lineare titolo="Sistema lineare in forma matriciale"}
Un **sistema lineare** di $m$ equazioni in $n$ incognite $x_1, \dots, x_n$ è
$$
\begin{cases}
a_{11} x_1 + a_{12} x_2 + \dots + a_{1n} x_n = b_1 \\[4pt]
a_{21} x_1 + a_{22} x_2 + \dots + a_{2n} x_n = b_2 \\[4pt]
\quad \vdots \\[4pt]
a_{m1} x_1 + a_{m2} x_2 + \dots + a_{mn} x_n = b_m
\end{cases}
$$
I numeri $a_{ij}$ formano la **matrice dei coefficienti** $A$, di tipo $m \times n$, e i termini noti formano il vettore colonna $b$. Con il vettore colonna delle incognite $x$, il sistema si scrive in **forma matriciale**
$$
A x = b ,
$$
perché la riga $i$ di $A$ per la colonna $x$ è il primo membro dell'equazione $i$. La **matrice completa** $(A \mid b)$ si ottiene aggiungendo ad $A$ la colonna dei termini noti. Il sistema è **compatibile** se ha almeno una soluzione e **incompatibile** se non ne ha; un sistema compatibile è **determinato** se la soluzione è unica e **indeterminato** se le soluzioni sono infinite. Il sistema è **omogeneo** se $b = 0$, e in quel caso ammette sempre la soluzione nulla.
:::

:::osservazione{#sistemi-in-due-incognite titolo="Sistemi di due equazioni in due incognite"}
Ogni equazione $a x + b y = c$, con $a$ e $b$ non entrambi nulli, rappresenta una retta del piano, e le soluzioni del sistema sono i punti comuni alle due rette.

- Se le rette sono incidenti il sistema è determinato.
- Se le rette sono parallele e distinte il sistema è incompatibile.
- Se le rette coincidono il sistema è indeterminato, con infinite soluzioni.

Le rette sono parallele o coincidenti esattamente quando i coefficienti delle incognite sono proporzionali, cioè quando il determinante della matrice dei coefficienti è nullo. Per esempio il sistema formato da $x - 2y = 2$ e $x - 2y = -2$ ha determinante $\begin{vmatrix} 1 & -2 \\ 1 & -2 \end{vmatrix} = 0$ e termini noti diversi, quindi è incompatibile.

::grafico{f="(x-2)/2;(x+2)/2" etichette="4,-1,x − 2y = 2;-3.6,0.6,x − 2y = −2" xmin=-4 xmax=6 ymin=-3 ymax=4 uguale=1 titolo="Le rette $x - 2y = 2$ e $x - 2y = -2$ sono parallele e distinte, quindi il sistema formato dalle due equazioni è incompatibile"}

:::

::::teorema{#regola-di-cramer titolo="Regola di Cramer"}
Sia $A x = b$ un sistema di $n$ equazioni in $n$ incognite con $\det A \neq 0$. Allora il sistema ha una e una sola soluzione, data da
$$
x = A^{-1} b,
\qquad
x_j = \frac{\det A_j}{\det A}, \quad j = 1, \dots, n ,
$$
dove $A_j$ è la matrice che si ottiene da $A$ sostituendo la colonna $j$ con la colonna $b$ dei termini noti. La regola è comoda per sistemi di ordine $2$ e $3$ e per sistemi con un parametro.

:::dimostrazione
Poiché $\det A \neq 0$, la matrice $A$ è invertibile. Se $x$ è una soluzione, moltiplicando $Ax = b$ a sinistra per $A^{-1}$ si ottiene $x = A^{-1} b$; viceversa $x = A^{-1}b$ soddisfa $A x = A A^{-1} b = b$. Quindi la soluzione esiste ed è unica. Per la formula dell'**inversa**, la componente $j$ di $A^{-1} b$ è
$$
x_j = \frac{1}{\det A} \sum_{i = 1}^{n} A_{ij}\, b_i .
$$
La somma è lo **sviluppo di Laplace** di $\det A_j$ lungo la colonna $j$, perché $A_j$ ha in quella colonna i numeri $b_i$ e, fuori da quella colonna, coincide con $A$, quindi ha gli stessi complementi algebrici $A_{ij}$. Perciò $x_j = \dfrac{\det A_j}{\det A}$.
:::
::::

:::esempio{titolo="Sistema di ordine 2 con Cramer"}
Per il sistema
$$
\begin{cases}
2x + y = 5 \\[4pt]
x - y = 1
\end{cases}
$$
si ha $\det A = \begin{vmatrix} 2 & 1 \\ 1 & -1 \end{vmatrix} = -3 \neq 0$, quindi la regola di Cramer si applica e
$$
x = \frac{\begin{vmatrix} 5 & 1 \\ 1 & -1 \end{vmatrix}}{-3} = \frac{-6}{-3} = 2,
\qquad
y = \frac{\begin{vmatrix} 2 & 5 \\ 1 & 1 \end{vmatrix}}{-3} = \frac{-3}{-3} = 1 .
$$

::grafico{f="5-2*x;x-1" punti="2,1,pieno" etichette="3.4,-1.1,2x + y = 5;4.3,2.4,x − y = 1" xmin=-2 xmax=6 ymin=-2 ymax=6 uguale=1 titolo="Le rette $2x + y = 5$ e $x - y = 1$ si incontrano nel solo punto $(2, 1)$, la soluzione data dalla regola di Cramer"}

:::

## Teorema di Rouché-Capelli e metodo di Gauss

:::teorema{#metodo-di-gauss titolo="Metodo di eliminazione di Gauss"}
Le operazioni elementari sulle righe della matrice completa $(A \mid b)$ trasformano il sistema in un sistema **equivalente**, cioè con le stesse soluzioni. Infatti le tre operazioni corrispondono a scambiare due equazioni, a moltiplicare un'equazione per un numero non nullo e a sommare a un'equazione un multiplo di un'altra, e ciascuna si annulla con un'operazione dello stesso tipo. Il **metodo di Gauss** riduce a scala la matrice completa e poi risolve il sistema a scala partendo dall'ultima equazione e risalendo. Per esempio
$$
\left( \begin{array}{ccc|c} 1 & 1 & 1 & 2 \\ 1 & 2 & 3 & 3 \\ 2 & 3 & 4 & 5 \end{array} \right)
\longrightarrow
\left( \begin{array}{ccc|c} 1 & 1 & 1 & 2 \\ 0 & 1 & 2 & 1 \\ 0 & 1 & 2 & 1 \end{array} \right)
\longrightarrow
\left( \begin{array}{ccc|c} 1 & 1 & 1 & 2 \\ 0 & 1 & 2 & 1 \\ 0 & 0 & 0 & 0 \end{array} \right),
$$
dove si è sottratta la prima riga dalla seconda, il doppio della prima dalla terza e infine la seconda dalla terza. Restano le equazioni $x + y + z = 2$ e $y + 2z = 1$; posto $z = t$, si ricava $y = 1 - 2t$ e poi $x = 2 - y - z = 1 + t$. Le soluzioni sono $(1 + t,\ 1 - 2t,\ t)$ con $t \in \mathbb{R}$.
:::

::::teorema{#rouche-capelli titolo="Teorema di Rouché-Capelli"}
Un sistema lineare $A x = b$ in $n$ incognite è compatibile se e solo se
$$
\operatorname{rk} A = \operatorname{rk}(A \mid b) .
$$
In questo caso, detto $r$ il valore comune dei due ranghi:

- se $r = n$ il sistema è determinato;
- se $r < n$ il sistema è indeterminato e le soluzioni dipendono da $n - r$ parametri liberi, e si dice che sono $\infty^{n - r}$.

Il teorema permette di sapere se un sistema ha soluzioni, e quante, senza risolverlo. Nel sistema del metodo di Gauss la matrice dei coefficienti e la matrice completa hanno entrambe rango $2$ e le incognite sono $3$, quindi le soluzioni sono $\infty^{1}$, in accordo con il parametro $t$ trovato.

:::dimostrazione
L'idea è leggere la risposta sulla forma a scala. Si riduce a scala la matrice completa con il **metodo di Gauss**, ottenendo $(A' \mid b')$; il sistema $A' x = b'$ è equivalente a quello di partenza, e le stesse operazioni riducono $A$ alla matrice a scala $A'$. Per la **riduzione a scala** i ranghi non cambiano, quindi $\operatorname{rk} A = \operatorname{rk} A'$ e $\operatorname{rk}(A \mid b) = \operatorname{rk}(A' \mid b')$, e ciascun rango è il numero delle righe non nulle. I due ranghi sono diversi esattamente quando $(A' \mid b')$ ha una riga del tipo $(0 \ \cdots \ 0 \mid c)$ con $c \neq 0$, che corrisponde all'equazione $0 = c$; in quel caso il sistema è incompatibile. Se i ranghi sono uguali a $r$, restano $r$ equazioni, ciascuna con un pivot. Le $n - r$ incognite che non corrispondono a un pivot si possono scegliere liberamente; risalendo dall'ultima equazione, ogni equazione determina in modo unico la sua incognita pivot. Perciò le soluzioni dipendono da $n - r$ parametri, e sono una sola quando $r = n$.
:::
::::

:::osservazione{#sistemi-omogenei titolo="Sistemi omogenei"}
Per un sistema omogeneo $A x = 0$ la colonna dei termini noti è nulla, quindi $\operatorname{rk}(A \mid 0) = \operatorname{rk} A$ e il sistema è sempre compatibile. Per il teorema di Rouché-Capelli ha soluzioni diverse da quella nulla se e solo se $\operatorname{rk} A < n$, cioè, per un sistema quadrato, se e solo se $\det A = 0$. Per esempio il sistema formato da $x + 2y = 0$ e $3x + 6y = 0$ ha determinante nullo, e le sue soluzioni sono $(-2t, t)$ con $t \in \mathbb{R}$.
:::

## Sistemi con un parametro

:::osservazione{#discussione-con-parametro titolo="Discussione di un sistema con un parametro"}
Quando i coefficienti o i termini noti dipendono da un parametro $k$, *discutere* il sistema significa dire per quali valori di $k$ è determinato, indeterminato o incompatibile. Per un sistema quadrato si procede così.

- Si calcola $\det A$ in funzione di $k$ e si trovano i valori che lo annullano.
- Per i valori di $k$ con $\det A \neq 0$ il sistema è determinato, e la soluzione si trova con la regola di Cramer.
- Per ciascun valore con $\det A = 0$ si sostituisce $k$ nel sistema e si confrontano $\operatorname{rk} A$ e $\operatorname{rk}(A \mid b)$ con il teorema di Rouché-Capelli.

Se il sistema non è quadrato si studiano direttamente i ranghi, per esempio con i minori e il teorema degli orlati, oppure con la riduzione a scala.
:::

:::esempio{titolo="Sistema con un parametro in due incognite"}
Si discute il sistema
$$
\begin{cases}
x + k y = 2 \\[4pt]
k x + 4 y = 4
\end{cases}
$$
Il determinante è $\begin{vmatrix} 1 & k \\ k & 4 \end{vmatrix} = 4 - k^{2}$, che si annulla per $k = 2$ e per $k = -2$.

- Per $k \neq \pm 2$ il sistema è determinato. La regola di Cramer dà $x = \dfrac{8 - 4k}{4 - k^{2}} = \dfrac{4}{k + 2}$ e $y = \dfrac{4 - 2k}{4 - k^{2}} = \dfrac{2}{k + 2}$, dopo aver semplificato il fattore $2 - k \neq 0$.
- Per $k = 2$ la seconda equazione, $2x + 4y = 4$, è il doppio della prima, quindi $\operatorname{rk} A = \operatorname{rk}(A \mid b) = 1$ e il sistema è indeterminato con $\infty^{1}$ soluzioni $(2 - 2t,\ t)$.
- Per $k = -2$ le equazioni sono $x - 2y = 2$ e $-2x + 4y = 4$, cioè $x - 2y = -2$. Il minore $\begin{vmatrix} 1 & 2 \\ -2 & 4 \end{vmatrix} = 8$ della matrice completa è non nullo, quindi $\operatorname{rk}(A \mid b) = 2 > 1 = \operatorname{rk} A$ e il sistema è incompatibile. Le due equazioni rappresentano le rette parallele e distinte $x - 2y = 2$ e $x - 2y = -2$.
:::

## Applicazioni economiche

:::definizione{#equilibrio-due-beni titolo="Equilibrio di mercato con due beni"}
Quando due beni sono collegati, la domanda di ciascuno dipende anche dal prezzo dell'altro. Con domande e offerte lineari nei prezzi $p_1$ e $p_2$, l'**equilibrio** è la coppia di prezzi per cui su entrambi i mercati la quantità domandata è uguale alla quantità offerta:
$$
\begin{cases}
q_{d1}(p_1, p_2) = q_{s1}(p_1, p_2) \\[4pt]
q_{d2}(p_1, p_2) = q_{s2}(p_1, p_2)
\end{cases}
$$
e le due condizioni formano un sistema lineare di due equazioni nelle incognite $p_1$ e $p_2$. Un coefficiente positivo di $p_2$ nella domanda del primo bene indica che i due beni sono sostituti.
:::

:::esempio{titolo="Due beni sostituti"}
Le domande e le offerte di due beni sono
$$
q_{d1} = 25 - 2p_1 + p_2, \quad q_{s1} = 2 + 2p_1, \qquad q_{d2} = 12 + p_1 - 2p_2, \quad q_{s2} = 4 + p_2 .
$$
Uguagliando domanda e offerta su ciascun mercato si ottiene il sistema
$$
\begin{cases}
4p_1 - p_2 = 23 \\[4pt]
-p_1 + 3p_2 = 8
\end{cases}
$$
con determinante $12 - 1 = 11 \neq 0$. La regola di Cramer dà
$$
p_1 = \frac{23 \cdot 3 - (-1) \cdot 8}{11} = \frac{77}{11} = 7,
\qquad
p_2 = \frac{4 \cdot 8 - (-1) \cdot 23}{11} = \frac{55}{11} = 5 .
$$
Le quantità di equilibrio sono $q_1 = 2 + 14 = 16$ e $q_2 = 4 + 5 = 9$; come controllo, $25 - 14 + 5 = 16$ e $12 + 7 - 10 = 9$.

::grafico{f="4*x-23;(x+8)/3" punti="7,5,pieno" etichette="8.7,8.4,mercato 1;1,4.4,mercato 2" xmin=0 xmax=12 ymin=0 ymax=12 nomi="p₁,p₂" titolo="Le coppie di prezzi che equilibrano il primo mercato ($4p_1 - p_2 = 23$) e il secondo ($-p_1 + 3p_2 = 8$) stanno su due rette che si incontrano nell'equilibrio $(7, 5)$"}

:::

:::definizione{#modello-di-leontief titolo="Modello input-output di Leontief"}
Un'economia è divisa in $n$ settori, e ogni settore usa come input una parte della produzione degli altri. Il **coefficiente tecnico** $a_{ij} \geq 0$ è la quantità di prodotto del settore $i$ necessaria per produrre una unità del settore $j$; i coefficienti formano la **matrice tecnologica** $A$. Se $x$ è il vettore delle produzioni e $d$ quello della **domanda finale**, la produzione del settore $i$ deve coprire sia gli usi intermedi $a_{i1} x_1 + \dots + a_{in} x_n$ sia la domanda finale $d_i$, quindi
$$
x = A x + d
\iff
(I_n - A)\, x = d .
$$
Se $I_n - A$ è invertibile, la produzione che soddisfa la domanda finale è
$$
x = (I_n - A)^{-1} d .
$$
Se ogni colonna di $A$ ha somma minore di $1$, si dimostra che $(I_n - A)^{-1}$ esiste e ha tutti gli elementi non negativi, quindi a una domanda finale non negativa corrispondono produzioni non negative.
:::

:::esempio{titolo="Economia con due settori"}
La matrice tecnologica e la domanda finale sono
$$
A = \begin{pmatrix} 0{,}2 & 0{,}3 \\ 0{,}4 & 0{,}1 \end{pmatrix},
\qquad
d = \begin{pmatrix} 12 \\ 24 \end{pmatrix} .
$$
Le colonne di $A$ hanno somma $0{,}6$ e $0{,}4$, minori di $1$. Si ha
$$
I_2 - A = \begin{pmatrix} 0{,}8 & -0{,}3 \\ -0{,}4 & 0{,}9 \end{pmatrix},
\qquad
\det(I_2 - A) = 0{,}72 - 0{,}12 = 0{,}6 ,
$$
e con la formula dell'inversa di ordine $2$
$$
x = \frac{1}{0{,}6} \begin{pmatrix} 0{,}9 & 0{,}3 \\ 0{,}4 & 0{,}8 \end{pmatrix} \begin{pmatrix} 12 \\ 24 \end{pmatrix}
= \frac{1}{0{,}6} \begin{pmatrix} 18 \\ 24 \end{pmatrix}
= \begin{pmatrix} 30 \\ 40 \end{pmatrix} .
$$
Il primo settore deve produrre $30$ unità, di cui $0{,}2 \cdot 30 + 0{,}3 \cdot 40 = 18$ assorbite dagli usi intermedi e $12$ destinate alla domanda finale.

::grafico{f="(0.8*x-12)/0.3;(24+0.4*x)/0.9" punti="30,40,pieno" etichette="44,60,settore 1;3,40,settore 2" xmin=0 xmax=72 ymin=0 ymax=72 nomi="x₁,x₂" titolo="Le equazioni $0{,}8\,x_1 - 0{,}3\,x_2 = 12$ e $-0{,}4\,x_1 + 0{,}9\,x_2 = 24$ sono due rette che si incontrano nel primo quadrante, nel punto $(30, 40)$"}

:::
