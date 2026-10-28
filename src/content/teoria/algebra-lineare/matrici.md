---
titolo: Matrici e operazioni tra matrici
sommario: Le matrici e i loro tipi, somma, prodotto righe per colonne, trasposta e potenze, la matrice inversa, la riduzione a scala per righe e il calcolo dell'inversa con il metodo di Gauss-Jordan.
---

## Matrici e notazioni

:::definizione{#matrice titolo="Matrice"}
Siano $m, n$ interi positivi. Una **matrice** $m \times n$ a coefficienti reali è una tabella di $mn$ numeri reali disposti su $m$ righe e $n$ colonne:
$$
A =
\begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1n} \\
a_{21} & a_{22} & \cdots & a_{2n} \\
\vdots & \vdots & \ddots & \vdots \\
a_{m1} & a_{m2} & \cdots & a_{mn}
\end{pmatrix} .
$$
Il numero $a_{ij}$ è l'**elemento di posto** $(i, j)$; il primo indice indica la riga e il secondo la colonna. Si scrive in breve $A = (a_{ij})$, e l'insieme delle matrici $m \times n$ si indica con $M_{m,n}(\mathbb{R})$. Due matrici sono uguali se hanno le stesse dimensioni e gli elementi di ugual posto coincidono, quindi un'uguaglianza tra matrici $m \times n$ equivale a $mn$ uguaglianze tra numeri. Le matrici raccolgono in un unico oggetto i coefficienti di un sistema lineare, di un'applicazione lineare o di una forma quadratica, e le operazioni tra matrici traducono le operazioni su questi oggetti.
:::

:::esempio
La matrice
$$
A =
\begin{pmatrix}
1 & 2 & 0 \\
-1 & 3 & 4
\end{pmatrix}
\in M_{2,3}(\mathbb{R})
$$
ha due righe e tre colonne; il suo elemento di posto $(2, 3)$ è $a_{23} = 4$, mentre $a_{12} = 2$ e $a_{21} = -1$. La seconda riga è la matrice $1 \times 3$ data da $(-1 \ \ 3 \ \ 4)$.
:::

:::definizione{#matrice-quadrata titolo="Matrici quadrate, vettori riga e vettori colonna"}
- Una matrice con $m = n$ si dice **quadrata** di ordine $n$; l'insieme delle matrici quadrate di ordine $n$ si indica con $M_n(\mathbb{R})$.
- In una matrice quadrata gli elementi $a_{11}, a_{22}, \dots, a_{nn}$ formano la **diagonale principale**. La loro somma è la **traccia**, $\operatorname{tr} A = a_{11} + a_{22} + \dots + a_{nn}$.
- Una matrice $1 \times n$ è un vettore riga; una matrice $m \times 1$ è un vettore colonna. Nei calcoli matriciali i vettori di $\mathbb{R}^n$ si scrivono in colonna.
- La matrice nulla $O$ ha tutti gli elementi uguali a $0$.

Per $A = \begin{pmatrix} 2 & 5 \\ -1 & 3 \end{pmatrix}$ la diagonale principale è formata da $2$ e $3$, quindi $\operatorname{tr} A = 5$.
:::

## Matrici quadrate particolari

:::definizione{#matrici-diagonali-e-triangolari titolo="Matrici diagonali, triangolari e identità"}
Sia $A = (a_{ij}) \in M_n(\mathbb{R})$.

- $A$ è **triangolare superiore** se $a_{ij} = 0$ per $i > j$, cioè se gli elementi sotto la diagonale principale sono nulli.
- $A$ è triangolare inferiore se $a_{ij} = 0$ per $i < j$, cioè se gli elementi sopra la diagonale principale sono nulli.
- $A$ è **diagonale** se $a_{ij} = 0$ per $i \neq j$; si scrive $A = \operatorname{diag}(a_{11}, \dots, a_{nn})$.
- La **matrice identità** $I_n$ è la matrice diagonale con tutti gli elementi diagonali uguali a $1$.

Una matrice diagonale è insieme triangolare superiore e inferiore. Il prodotto di due matrici triangolari superiori dello stesso ordine è triangolare superiore, e lo stesso vale per le diagonali. Su queste classi i calcoli si semplificano: la riduzione a scala produce matrici triangolari superiori, e le potenze di una matrice diagonale si calcolano elemento per elemento.
:::

:::esempio
$$
T =
\begin{pmatrix}
1 & 4 & -2 \\
0 & 3 & 5 \\
0 & 0 & 2
\end{pmatrix},
\qquad
D =
\begin{pmatrix}
2 & 0 & 0 \\
0 & -1 & 0 \\
0 & 0 & 0
\end{pmatrix},
\qquad
I_3 =
\begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 1
\end{pmatrix} .
$$
$T$ è triangolare superiore e $D = \operatorname{diag}(2, -1, 0)$ è diagonale. Un elemento diagonale nullo è ammesso, poiché la definizione pone condizioni *solo* sugli elementi fuori dalla diagonale.
:::

:::definizione{#matrice-simmetrica titolo="Matrici simmetriche e antisimmetriche"}
Una matrice $A = (a_{ij}) \in M_n(\mathbb{R})$ si dice

- **simmetrica** se $a_{ij} = a_{ji}$ per ogni $i, j$;
- **antisimmetrica** se $a_{ij} = -a_{ji}$ per ogni $i, j$.

In una matrice simmetrica gli elementi sono disposti in modo speculare rispetto alla diagonale principale. In una matrice antisimmetrica, ponendo $i = j$, si ottiene $a_{ii} = -a_{ii}$, quindi gli elementi diagonali sono nulli. Le matrici simmetriche descrivono le forme quadratiche e le coniche, e il teorema spettrale garantisce che sono sempre diagonalizzabili; si rimanda agli argomenti sul prodotto scalare e sulle coniche.
:::

:::esempio
$$
S =
\begin{pmatrix}
1 & 2 & -3 \\
2 & 0 & 4 \\
-3 & 4 & 5
\end{pmatrix},
\qquad
K =
\begin{pmatrix}
0 & 1 & -2 \\
-1 & 0 & 3 \\
2 & -3 & 0
\end{pmatrix} .
$$
$S$ è simmetrica, poiché $s_{12} = s_{21} = 2$, $s_{13} = s_{31} = -3$ e $s_{23} = s_{32} = 4$. $K$ è antisimmetrica, poiché ha diagonale nulla e gli elementi in posizioni speculari sono opposti.
:::

## Somma e prodotto per uno scalare

:::definizione{#somma-e-prodotto-per-scalare titolo="Somma e prodotto per uno scalare"}
Siano $A = (a_{ij})$ e $B = (b_{ij})$ in $M_{m,n}(\mathbb{R})$ e sia $k \in \mathbb{R}$. La **somma** e il **prodotto per uno scalare** si eseguono elemento per elemento:
$$
A + B = (a_{ij} + b_{ij}),
\qquad
kA = (k\, a_{ij}) .
$$
La somma è definita *solo* tra matrici con le stesse dimensioni. Si pone $-A = (-1)A$ e $A - B = A + (-B)$. Un'espressione come $2A - 3B$ si chiama **combinazione lineare** di $A$ e $B$.
:::

:::esempio
Con
$$
A =
\begin{pmatrix}
1 & -2 \\
0 & 3
\end{pmatrix},
\qquad
B =
\begin{pmatrix}
4 & 1 \\
2 & -1
\end{pmatrix}
$$
si ottiene
$$
A + B =
\begin{pmatrix}
5 & -1 \\
2 & 2
\end{pmatrix},
\qquad
2A - B =
\begin{pmatrix}
2 - 4 & -4 - 1 \\
0 - 2 & 6 + 1
\end{pmatrix}
=
\begin{pmatrix}
-2 & -5 \\
-2 & 7
\end{pmatrix} .
$$
:::

:::teorema{#proprieta-operazioni-lineari titolo="Proprietà della somma e del prodotto per uno scalare"}
Per ogni $A, B, C \in M_{m,n}(\mathbb{R})$ e ogni $h, k \in \mathbb{R}$ valgono:

- $(A + B) + C = A + (B + C)$ e $A + B = B + A$;
- $A + O = A$ e $A + (-A) = O$;
- $k(A + B) = kA + kB$ e $(h + k)A = hA + kA$;
- $h(kA) = (hk)A$ e $1A = A$.

Ogni proprietà, scritta elemento per elemento, è la corrispondente proprietà dei numeri reali, quindi segue da essa. Queste regole permettono di risolvere equazioni come $2X + A = B$ con gli stessi passaggi delle equazioni numeriche, ottenendo $X = \dfrac{1}{2}(B - A)$. Esse dicono inoltre che $M_{m,n}(\mathbb{R})$ è uno spazio vettoriale di dimensione $mn$, e si rimanda all'argomento sugli spazi vettoriali.
:::

## Prodotto righe per colonne

:::definizione{#prodotto-righe-per-colonne titolo="Prodotto righe per colonne"}
Siano $A = (a_{ij}) \in M_{m,n}(\mathbb{R})$ e $B = (b_{jk}) \in M_{n,p}(\mathbb{R})$, cioè il numero di colonne di $A$ è uguale al numero di righe di $B$. Il **prodotto righe per colonne** $AB$ è la matrice di $M_{m,p}(\mathbb{R})$ con elemento di posto $(i, k)$
$$
(AB)_{ik} = \sum_{j=1}^{n} a_{ij}\, b_{jk} = a_{i1} b_{1k} + a_{i2} b_{2k} + \dots + a_{in} b_{nk} .
$$
L'elemento $(i, k)$ del prodotto si ottiene quindi moltiplicando la riga $i$ di $A$ per la colonna $k$ di $B$, cioè moltiplicando gli elementi corrispondenti e sommando i risultati. Le dimensioni seguono lo schema $(m \times n) \cdot (n \times p) = m \times p$; se le dimensioni interne sono diverse, il prodotto *non* è definito.
:::

:::esempio{titolo="Prodotto di una matrice 2 × 3 per una matrice 3 × 2"}
$$
A =
\begin{pmatrix}
1 & 2 & 0 \\
-1 & 3 & 1
\end{pmatrix},
\qquad
B =
\begin{pmatrix}
2 & 1 \\
0 & -1 \\
3 & 4
\end{pmatrix} .
$$
Poiché $A$ ha tre colonne e $B$ ha tre righe, il prodotto $AB$ è definito ed è $2 \times 2$:
$$
AB =
\begin{pmatrix}
1 \cdot 2 + 2 \cdot 0 + 0 \cdot 3 & 1 \cdot 1 + 2 \cdot (-1) + 0 \cdot 4 \\
-1 \cdot 2 + 3 \cdot 0 + 1 \cdot 3 & -1 \cdot 1 + 3 \cdot (-1) + 1 \cdot 4
\end{pmatrix}
=
\begin{pmatrix}
2 & -1 \\
1 & 0
\end{pmatrix} .
$$
Anche $BA$ è definito, poiché $B$ ha due colonne e $A$ ha due righe, ma è una matrice $3 \times 3$; perciò $AB$ e $BA$ sono diverse.
:::

:::osservazione{#prodotto-per-colonne titolo="Il prodotto colonna per colonna e i sistemi lineari"}
La colonna $k$ di $AB$ è il prodotto di $A$ per la colonna $k$ di $B$. Il prodotto di $A \in M_{m,n}(\mathbb{R})$ per un vettore colonna $x \in \mathbb{R}^n$ è la **combinazione lineare delle colonne** $A^1, \dots, A^n$ di $A$ con coefficienti le componenti di $x$:
$$
Ax = x_1 A^1 + x_2 A^2 + \dots + x_n A^n .
$$
Questa lettura spiega la definizione del prodotto: un sistema lineare di $m$ equazioni in $n$ incognite si scrive come un'unica equazione matriciale $Ax = b$, con $A$ matrice dei coefficienti e $b$ colonna dei termini noti. Il sistema
$$
\begin{cases}
2x_1 - x_2 = 3 \\[4pt]
x_1 + 4x_2 = 6
\end{cases}
$$
equivale a $\begin{pmatrix} 2 & -1 \\ 1 & 4 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 3 \\ 6 \end{pmatrix}$ e chiede con quali coefficienti le colonne $(2, 1)$ e $(-1, 4)$ danno $(3, 6)$; la soluzione è $x = (2, 1)$, come mostra la figura. Lo studio dei sistemi in questa forma si trova nell'argomento sui sistemi lineari e rango.

::grafico{vettori="0,0,2,1,A¹;0,0,-1,4,A²;0,0,3,6,b" segmenti="2,1,4,2;4,2,3,6" punti="4,2,vuoto" etichette="4.15,1.55,2A¹" xmin=-2 xmax=5.5 ymin=-0.8 ymax=6.8 uguale=1 titolo="Il vettore $b = (3, 6)$ è la combinazione $2A^1 + A^2$ delle colonne $A^1 = (2, 1)$ e $A^2 = (-1, 4)$, quindi $x = (2, 1)$ risolve $Ax = b$"}

:::

::::teorema{#proprieta-del-prodotto titolo="Proprietà del prodotto righe per colonne"}
Siano $A, B, C$ matrici e $k \in \mathbb{R}$, con dimensioni tali che le operazioni scritte siano definite. Allora:

- $(AB)C = A(BC)$ (proprietà associativa);
- $A(B + C) = AB + AC$ e $(A + B)C = AC + BC$ (proprietà distributive);
- $(kA)B = k(AB) = A(kB)$;
- $I_m A = A = A I_n$ per ogni $A \in M_{m,n}(\mathbb{R})$.

La proprietà associativa permette di scrivere $ABC$ senza ambiguità e di definire le potenze; l'identità svolge il ruolo del numero $1$. Nelle distributive conta il lato: in $A(B + C)$ la matrice $A$ resta a sinistra in entrambi i termini.

:::dimostrazione
Siano $A \in M_{m,n}(\mathbb{R})$, $B \in M_{n,p}(\mathbb{R})$, $C \in M_{p,q}(\mathbb{R})$. Per la definizione del prodotto, l'elemento di posto $(i, l)$ di $(AB)C$ è
$$
\big( (AB)C \big)_{il}
= \sum_{k=1}^{p} (AB)_{ik}\, c_{kl}
= \sum_{k=1}^{p} \sum_{j=1}^{n} a_{ij}\, b_{jk}\, c_{kl} .
$$
L'elemento di posto $(i, l)$ di $A(BC)$ è
$$
\big( A(BC) \big)_{il}
= \sum_{j=1}^{n} a_{ij}\, (BC)_{jl}
= \sum_{j=1}^{n} \sum_{k=1}^{p} a_{ij}\, b_{jk}\, c_{kl} .
$$
Le due somme doppie hanno gli stessi addendi in ordine diverso, quindi coincidono; poiché le due matrici hanno anche le stesse dimensioni $m \times q$, esse sono uguali. Le altre proprietà si verificano allo stesso modo: per la prima distributiva si ha $\sum_j a_{ij}(b_{jk} + c_{jk}) = \sum_j a_{ij} b_{jk} + \sum_j a_{ij} c_{jk}$, e per l'identità si osserva che nella somma $\sum_j a_{ij}\, (I_n)_{jk}$ l'unico addendo non nullo è quello con $j = k$, che vale $a_{ik}$.
:::
::::

## Non commutatività e divisori dello zero

:::attenzione
Il prodotto di matrici **non è commutativo**. Anche quando $A$ e $B$ sono quadrate dello stesso ordine, e quindi $AB$ e $BA$ sono entrambi definiti e hanno le stesse dimensioni, in generale $AB \neq BA$:
$$
A =
\begin{pmatrix}
1 & 1 \\
0 & 1
\end{pmatrix},
\quad
B =
\begin{pmatrix}
1 & 0 \\
1 & 1
\end{pmatrix},
\qquad
AB =
\begin{pmatrix}
2 & 1 \\
1 & 1
\end{pmatrix},
\quad
BA =
\begin{pmatrix}
1 & 1 \\
1 & 2
\end{pmatrix} .
$$
:::

:::definizione{#matrici-che-commutano titolo="Matrici che commutano"}
Due matrici $A, B \in M_n(\mathbb{R})$ **commutano** se $AB = BA$. Ogni matrice commuta con $I_n$, con la matrice nulla e con le proprie potenze; due matrici diagonali dello stesso ordine commutano sempre, perché il loro prodotto è la matrice diagonale dei prodotti degli elementi diagonali. Per trovare *tutte* le matrici che commutano con una matrice data $A$ si scrive $X$ con elementi incogniti e si risolve il sistema lineare che si ottiene dall'uguaglianza $AX = XA$.
:::

:::osservazione{#prodotti-notevoli titolo="Prodotti notevoli tra matrici"}
Per la proprietà distributiva, per ogni $A, B \in M_n(\mathbb{R})$
$$
(A + B)^2 = (A + B)(A + B) = A^2 + AB + BA + B^2 .
$$
La formula $(A + B)^2 = A^2 + 2AB + B^2$ vale se e solo se $AB + BA = 2AB$, cioè *se e solo se* $A$ e $B$ commutano. Analogamente $(A + B)(A - B) = A^2 - AB + BA - B^2$, che coincide con $A^2 - B^2$ se e solo se $AB = BA$. Quando $AB = BA$ vale anche la **formula del binomio** $(A + B)^k = \sum_{j=0}^{k} \binom{k}{j} A^{k-j} B^j$, con la stessa dimostrazione per induzione del caso numerico.
:::

:::definizione{#divisori-dello-zero titolo="Divisori dello zero"}
Una matrice $A \neq O$ si dice **divisore dello zero** se esiste una matrice $B \neq O$ tale che $AB = O$ oppure $BA = O$. Tra i numeri reali un prodotto è nullo solo quando è nullo uno dei fattori; tra le matrici questa legge di annullamento del prodotto *non* vale:
$$
\begin{pmatrix}
1 & 1 \\
1 & 1
\end{pmatrix}
\begin{pmatrix}
1 & -1 \\
-1 & 1
\end{pmatrix}
=
\begin{pmatrix}
0 & 0 \\
0 & 0
\end{pmatrix},
\qquad
\begin{pmatrix}
0 & 1 \\
0 & 0
\end{pmatrix}^2
=
\begin{pmatrix}
0 & 0 \\
0 & 0
\end{pmatrix} .
$$
Nel primo prodotto il fattore di sinistra manda nel vettore nullo ogni vettore $(t, -t)$, e le colonne del fattore di destra sono di questo tipo, come mostra la figura. Una matrice quadrata invertibile non è mai un divisore dello zero, per le condizioni sufficienti di non invertibilità.

::grafico{f="-x;x" vettori="0,0,1,-1,c₁;0,0,-1,1,c₂" etichette="1.25,-1.75,y = −x;1.3,1.75,y = x" xmin=-2.2 xmax=2.2 ymin=-2.2 ymax=2.2 uguale=1 titolo="Le colonne $c_1 = (1, -1)$ e $c_2 = (-1, 1)$ del fattore di destra stanno sulla retta $y = -x$, che il fattore di sinistra manda nel vettore nullo; l'immagine di ogni vettore tramite il fattore di sinistra sta sulla retta $y = x$ (tratteggiata)"}

:::

:::attenzione
Da $AB = AC$ con $A \neq O$ *non* segue $B = C$. Con
$$
A =
\begin{pmatrix}
1 & 1 \\
1 & 1
\end{pmatrix},
\qquad
C =
\begin{pmatrix}
2 & 1 \\
-1 & 0
\end{pmatrix}
$$
si ha $AC = A = A I_2$, eppure $C \neq I_2$. La semplificazione è lecita quando $A$ è invertibile: moltiplicando a sinistra entrambi i membri per $A^{-1}$ si ottiene $B = C$.
:::

## Matrice trasposta

:::definizione{#trasposta titolo="Matrice trasposta"}
Sia $A = (a_{ij}) \in M_{m,n}(\mathbb{R})$. La **trasposta** di $A$ è la matrice $A^T \in M_{n,m}(\mathbb{R})$ con elemento di posto $(i, j)$ uguale ad $a_{ji}$, cioè la matrice che ha per colonne le righe di $A$. Una matrice quadrata è simmetrica se e solo se $A^T = A$, ed è antisimmetrica se e solo se $A^T = -A$. La trasposta serve a scrivere in forma matriciale il prodotto scalare, $u \cdot v = u^T v$ per $u, v \in \mathbb{R}^n$ in colonna, e a passare dalle righe alle colonne di una matrice.
:::

:::esempio
$$
A =
\begin{pmatrix}
1 & 2 & 0 \\
-1 & 3 & 1
\end{pmatrix},
\qquad
A^T =
\begin{pmatrix}
1 & -1 \\
2 & 3 \\
0 & 1
\end{pmatrix},
\qquad
A A^T =
\begin{pmatrix}
5 & 5 \\
5 & 11
\end{pmatrix} .
$$
Il prodotto $A A^T$ è quadrato e simmetrico, in accordo con le proprietà della trasposta.
:::

::::teorema{#proprieta-della-trasposta titolo="Proprietà della trasposta"}
Siano $A, B$ matrici e $k \in \mathbb{R}$, con dimensioni tali che le operazioni scritte siano definite. Allora:

- $(A^T)^T = A$;
- $(A + B)^T = A^T + B^T$ e $(kA)^T = k A^T$;
- $(AB)^T = B^T A^T$.

Nella trasposta di un prodotto l'**ordine dei fattori si inverte**. Per ogni $A \in M_{m,n}(\mathbb{R})$ ne segue che $A A^T$ e $A^T A$ sono simmetriche, poiché $(A A^T)^T = (A^T)^T A^T = A A^T$; analogamente, per ogni $A \in M_n(\mathbb{R})$ la matrice $A + A^T$ è simmetrica e $A - A^T$ è antisimmetrica.

:::dimostrazione
Le prime proprietà seguono dalla definizione, poiché trasporre due volte riporta ogni elemento al proprio posto e trasporre una somma o un multiplo agisce elemento per elemento. Per l'ultima siano $A \in M_{m,n}(\mathbb{R})$ e $B \in M_{n,p}(\mathbb{R})$; entrambe le matrici $(AB)^T$ e $B^T A^T$ sono $p \times m$. L'elemento di posto $(k, i)$ di $(AB)^T$ è l'elemento di posto $(i, k)$ di $AB$:
$$
\big( (AB)^T \big)_{ki} = (AB)_{ik} = \sum_{j=1}^{n} a_{ij}\, b_{jk} .
$$
Poiché $(B^T)_{kj} = b_{jk}$ e $(A^T)_{ji} = a_{ij}$, l'elemento di posto $(k, i)$ di $B^T A^T$ è
$$
\big( B^T A^T \big)_{ki} = \sum_{j=1}^{n} (B^T)_{kj}\, (A^T)_{ji} = \sum_{j=1}^{n} b_{jk}\, a_{ij} .
$$
Le due somme coincidono per la commutatività del prodotto di numeri reali, quindi $(AB)^T = B^T A^T$.
:::
::::

:::attenzione
La formula $(AB)^T = A^T B^T$ è errata. Con $A = \begin{pmatrix} 1 & 2 \\ 0 & -1 \end{pmatrix}$ e $B = \begin{pmatrix} 3 & 0 \\ 1 & 2 \end{pmatrix}$ risulta
$$
(AB)^T = B^T A^T =
\begin{pmatrix}
5 & -1 \\
4 & -2
\end{pmatrix},
\qquad
A^T B^T =
\begin{pmatrix}
3 & 1 \\
6 & 0
\end{pmatrix} .
$$
:::

## Potenze di una matrice

:::definizione{#potenze-di-una-matrice titolo="Potenze di una matrice quadrata"}
Sia $A \in M_n(\mathbb{R})$. Si pone $A^0 = I_n$ e, per ogni intero $k \geq 1$, $A^k = A^{k-1} A$, cioè $A^k$ è il prodotto di $k$ fattori uguali ad $A$. Le **potenze** sono definite *solo* per matrici quadrate, perché il prodotto $AA$ richiede che il numero di colonne di $A$ sia uguale al numero di righe. Per la proprietà associativa valgono $A^h A^k = A^{h+k}$ e $(A^h)^k = A^{hk}$; la regola $(AB)^k = A^k B^k$ vale invece quando $A$ e $B$ commutano.
:::

:::teorema{#potenze-di-matrici-diagonali titolo="Potenze di matrici diagonali e triangolari"}
Sia $D = \operatorname{diag}(d_1, \dots, d_n)$. Allora per ogni intero $k \geq 0$
$$
D^k = \operatorname{diag}(d_1^{\,k}, \dots, d_n^{\,k}) .
$$
L'enunciato si dimostra per **induzione** su $k$: il prodotto di due matrici diagonali è la matrice diagonale dei prodotti degli elementi corrispondenti, quindi da $D^{k-1} = \operatorname{diag}(d_1^{\,k-1}, \dots, d_n^{\,k-1})$ segue $D^k = D^{k-1} D = \operatorname{diag}(d_1^{\,k}, \dots, d_n^{\,k})$. Per esempio $\operatorname{diag}(2, -1)^5 = \operatorname{diag}(32, -1)$. Le potenze di una matrice triangolare superiore restano triangolari superiori e hanno sulla diagonale le potenze degli elementi diagonali, mentre gli elementi sopra la diagonale vanno calcolati. Questo teorema è la base del calcolo delle potenze con la diagonalizzazione, $A^k = P D^k P^{-1}$, per cui si rimanda all'argomento sugli autovalori.
:::

:::osservazione{#potenze-per-induzione titolo="Potenze con la formula congetturata e l'induzione"}
Per una matrice che non è diagonale si calcolano le prime potenze, si congettura la forma generale di $A^k$ e la si dimostra **per induzione**. Per $A = \begin{pmatrix} 1 & 2 \\ 0 & 1 \end{pmatrix}$ si trova $A^2 = \begin{pmatrix} 1 & 4 \\ 0 & 1 \end{pmatrix}$ e $A^3 = \begin{pmatrix} 1 & 6 \\ 0 & 1 \end{pmatrix}$, da cui la congettura $A^k = \begin{pmatrix} 1 & 2k \\ 0 & 1 \end{pmatrix}$. Essa vale per $k = 1$; se vale per $k$, allora
$$
A^{k+1} = A^k A =
\begin{pmatrix}
1 & 2k \\
0 & 1
\end{pmatrix}
\begin{pmatrix}
1 & 2 \\
0 & 1
\end{pmatrix}
=
\begin{pmatrix}
1 & 2k + 2 \\
0 & 1
\end{pmatrix},
$$
quindi vale anche per $k + 1$. La seconda colonna di $A^k$ è $A^k$ applicata al vettore $(0, 1)$, e la figura mostra come ogni moltiplicazione per $A$ la sposti di $2$ in orizzontale.

::grafico{vettori="0,0,0,1;0,0,2,1;0,0,4,1;0,0,6,1" segmenti="-0.5,1,7,1" etichette="0.12,1.35,k = 0;1.8,1.35,k = 1;3.8,1.35,k = 2;5.8,1.35,k = 3" xmin=-1 xmax=7.5 ymin=-0.8 ymax=2 uguale=1 titolo="Le seconde colonne $(2k, 1)$ di $A^k$ per $k = 0, 1, 2, 3$ stanno sulla retta $y = 1$, a distanza $2$ l'una dall'altra"}

:::

:::definizione{#matrice-nilpotente titolo="Matrice nilpotente"}
Una matrice $N \in M_n(\mathbb{R})$ si dice **nilpotente** se esiste un intero $k \geq 1$ tale che $N^k = O$; una matrice nilpotente non nulla è quindi un divisore dello zero. Le matrici triangolari superiori con diagonale nulla sono nilpotenti:
$$
N =
\begin{pmatrix}
0 & 1 & 0 \\
0 & 0 & 1 \\
0 & 0 & 0
\end{pmatrix},
\qquad
N^2 =
\begin{pmatrix}
0 & 0 & 1 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{pmatrix},
\qquad
N^3 = O .
$$
A ogni potenza la diagonale degli elementi uguali a $1$ si sposta di un posto verso l'alto a destra, quindi dopo tre passi la matrice è nulla. Le matrici nilpotenti servono a calcolare le potenze di matrici della forma $\lambda I_n + N$: poiché $I_n$ commuta con $N$, si applica la **formula del binomio**, e la somma si arresta perché le potenze di $N$ da un certo esponente in poi sono nulle.
:::

## Matrice inversa

:::definizione{#matrice-invertibile titolo="Matrice invertibile"}
Una matrice $A \in M_n(\mathbb{R})$ si dice **invertibile** se esiste una matrice $B \in M_n(\mathbb{R})$ tale che
$$
AB = BA = I_n .
$$
Una tale $B$ si chiama **inversa** di $A$ e si indica con $A^{-1}$. L'inversa permette di risolvere le equazioni matriciali come quelle numeriche: se $A$ è invertibile, l'equazione $AX = C$ ha l'unica soluzione $X = A^{-1} C$, ottenuta moltiplicando a sinistra entrambi i membri per $A^{-1}$. In particolare il sistema lineare $Ax = b$ ha l'unica soluzione $x = A^{-1} b$. La definizione riguarda *solo* matrici quadrate.
:::

:::esempio
Per $A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$ e $B = \begin{pmatrix} 1 & -1 \\ -1 & 2 \end{pmatrix}$ si calcola
$$
AB =
\begin{pmatrix}
2 - 1 & -2 + 2 \\
1 - 1 & -1 + 2
\end{pmatrix}
= I_2,
\qquad
BA =
\begin{pmatrix}
2 - 1 & 1 - 1 \\
-2 + 2 & -1 + 2
\end{pmatrix}
= I_2,
$$
quindi $A$ è **invertibile** e $A^{-1} = B$. Applicata a un vettore, $A^{-1}$ annulla l'effetto di $A$, come mostra la figura.

::grafico{vettori="0,0,1,1,x;0,0,3,2,Ax" xmin=-0.6 xmax=3.8 ymin=-0.6 ymax=2.8 uguale=1 titolo="$A$ manda $x = (1, 1)$ in $Ax = (3, 2)$, e $A^{-1}$ riporta $(3, 2)$ in $(1, 1)$, poiché $A^{-1}(Ax) = I_2\, x = x$"}

:::

::::teorema{#unicita-dell-inversa titolo="Unicità dell'inversa"}
Sia $A \in M_n(\mathbb{R})$ e siano $B, C \in M_n(\mathbb{R})$ tali che $BA = I_n$ e $AC = I_n$. Allora $B = C$. In particolare, se $A$ è invertibile, la sua inversa è **unica**, e la notazione $A^{-1}$ è giustificata.

:::dimostrazione
Per la proprietà associativa del prodotto e per le proprietà dell'identità,
$$
B = B I_n = B(AC) = (BA)C = I_n C = C .
$$
Se $B$ e $C$ sono due inverse di $A$, esse soddisfano in particolare $BA = I_n$ e $AC = I_n$, quindi coincidono.
:::
::::

::::teorema{#proprieta-dell-inversa titolo="Proprietà della matrice inversa"}
Siano $A, B \in M_n(\mathbb{R})$ invertibili e sia $k \in \mathbb{R}$ con $k \neq 0$. Allora $A^{-1}$, $AB$, $A^T$ e $kA$ sono invertibili e
$$
(A^{-1})^{-1} = A,
\qquad
(AB)^{-1} = B^{-1} A^{-1},
\qquad
(A^T)^{-1} = (A^{-1})^T,
\qquad
(kA)^{-1} = \frac{1}{k}\, A^{-1} .
$$
Come nella trasposta, nell'inversa di un prodotto l'**ordine dei fattori si inverte**. Per induzione il prodotto di un numero qualsiasi di matrici invertibili è invertibile, con $(A_1 A_2 \cdots A_r)^{-1} = A_r^{-1} \cdots A_2^{-1} A_1^{-1}$. Una matrice diagonale con elementi diagonali tutti non nulli è invertibile, con $\operatorname{diag}(d_1, \dots, d_n)^{-1} = \operatorname{diag}\!\left( \dfrac{1}{d_1}, \dots, \dfrac{1}{d_n} \right)$.

:::dimostrazione
Per l'unicità dell'inversa basta verificare, in ogni caso, che la matrice proposta moltiplicata a destra e a sinistra dia $I_n$. L'uguaglianza $A A^{-1} = A^{-1} A = I_n$ dice che $A$ è l'inversa di $A^{-1}$. Per il prodotto, usando la proprietà associativa,
$$
(AB)(B^{-1} A^{-1}) = A (B B^{-1}) A^{-1} = A I_n A^{-1} = A A^{-1} = I_n,
$$
e allo stesso modo $(B^{-1} A^{-1})(AB) = B^{-1} (A^{-1} A) B = B^{-1} B = I_n$. Per la trasposta, dalla regola $(XY)^T = Y^T X^T$ segue
$$
A^T (A^{-1})^T = (A^{-1} A)^T = I_n^T = I_n,
\qquad
(A^{-1})^T A^T = (A A^{-1})^T = I_n .
$$
Infine $(kA) \cdot \dfrac{1}{k} A^{-1} = \dfrac{k}{k}\, A A^{-1} = I_n$, e nello stesso modo con i fattori scambiati.
:::
::::

:::richiamo{titolo="Unicità dell'inversa"}
Se $BA = I_n$ e $AC = I_n$, allora $B = C$.
:::

::::teorema{#matrici-non-invertibili titolo="Condizioni sufficienti per la non invertibilità"}
Sia $A \in M_n(\mathbb{R})$.

- Se $A$ ha una riga nulla o una colonna nulla, allora $A$ non è invertibile.
- Se esiste $B \in M_n(\mathbb{R})$ con $B \neq O$ tale che $AB = O$ oppure $BA = O$, allora $A$ non è invertibile.

Il secondo punto dice che un **divisore dello zero non è invertibile**; in particolare una matrice nilpotente non è invertibile. Queste condizioni permettono di escludere l'invertibilità senza calcoli, mentre la riduzione a scala decide in ogni caso.

:::dimostrazione
Se la riga $i$ di $A$ è nulla, per la definizione del prodotto la riga $i$ di $AB$ è nulla per ogni $B$, quindi $AB \neq I_n$ per ogni $B$ e $A$ non ha inversa; se è nulla la colonna $k$ di $A$, si ragiona allo stesso modo sulla colonna $k$ di $BA$. Supponiamo ora $AB = O$ con $B \neq O$ e, per assurdo, $A$ invertibile. Moltiplicando a sinistra per $A^{-1}$ si ottiene
$$
B = I_n B = (A^{-1} A) B = A^{-1} (AB) = A^{-1} O = O,
$$
in contraddizione con $B \neq O$. Il caso $BA = O$ si tratta moltiplicando a destra per $A^{-1}$.
:::
::::

:::osservazione{#inversa-da-un-identita titolo="Inversa da un'identità polinomiale"}
Quando una matrice soddisfa un'identità polinomiale con termine noto non nullo, l'inversa si ricava raccogliendo $A$. Se per esempio $A^2 - 4A + 3I_n = O$, allora $A(4I_n - A) = 3I_n$ e anche $(4I_n - A)A = 3I_n$, perché $A$ commuta con $I_n$; perciò $A$ è invertibile e
$$
A^{-1} = \frac{1}{3}\,(4I_n - A) .
$$
Con lo stesso raccoglimento, per $N$ nilpotente con $N^3 = O$ si ha $(I_n - N)(I_n + N + N^2) = I_n - N^3 = I_n$, quindi $I_n - N$ è invertibile con inversa $I_n + N + N^2$.
:::

## Riduzione a scala per righe

:::definizione{#operazioni-elementari titolo="Operazioni elementari di riga"}
Sia $A$ una matrice con righe $R_1, \dots, R_m$. Le **operazioni elementari di riga** sono tre:

- lo scambio di due righe, $R_i \leftrightarrow R_j$;
- la moltiplicazione di una riga per uno scalare non nullo, $R_i \to k R_i$ con $k \neq 0$;
- la sostituzione di una riga con la somma di essa e di un multiplo di un'altra, $R_i \to R_i + k R_j$ con $j \neq i$.

Ogni operazione elementare si annulla con un'operazione elementare dello stesso tipo: $R_i \leftrightarrow R_j$ con se stessa, $R_i \to k R_i$ con $R_i \to \dfrac{1}{k} R_i$, $R_i \to R_i + k R_j$ con $R_i \to R_i - k R_j$. Applicate alla matrice completa di un sistema lineare, le operazioni elementari producono un sistema con le **stesse soluzioni**; per questo sono lo strumento di calcolo per i sistemi, il rango e l'inversa. Nei calcoli ogni operazione si scrive sopra la freccia, per esempio $\xrightarrow{R_2 \to R_2 - 2R_1}$.
:::

:::definizione{#matrice-a-scala titolo="Matrice a scala e pivot"}
Una matrice è **a scala per righe** se sono soddisfatte entrambe le condizioni:

- le eventuali righe nulle sono in fondo alla matrice;
- in ogni riga non nulla il primo elemento non nullo, detto **pivot**, si trova in una colonna strettamente a destra del pivot della riga precedente.

Sotto ogni pivot, quindi, ci sono solo zeri. Una matrice a scala si dice **ridotta** se, in più, ogni pivot è uguale a $1$ ed è l'unico elemento non nullo della sua colonna. Una matrice quadrata a scala è triangolare superiore.
:::

:::esempio
$$
\begin{pmatrix}
2 & 1 & 0 & 3 \\
0 & 0 & -1 & 4 \\
0 & 0 & 0 & 5
\end{pmatrix},
\qquad
\begin{pmatrix}
1 & 0 & 2 \\
0 & 1 & -3 \\
0 & 0 & 0
\end{pmatrix} .
$$
La prima matrice è a scala con pivot $2$, $-1$, $5$ nelle colonne $1$, $3$, $4$. La seconda è a scala ridotta con due pivot e una riga nulla. La matrice $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ *non* è a scala, perché il pivot della seconda riga sta a sinistra di quello della prima; lo scambio $R_1 \leftrightarrow R_2$ la porta in forma a scala.
:::

::::teorema{#algoritmo-di-gauss titolo="Algoritmo di Gauss"}
Ogni matrice si trasforma in una matrice a scala con un numero finito di operazioni elementari di riga, e con ulteriori operazioni in una matrice a scala ridotta. La riduzione a scala si usa per risolvere i sistemi lineari, per calcolare il rango e per calcolare l'inversa. Il numero di pivot non dipende dalle operazioni scelte ed è il rango della matrice, per cui si rimanda all'argomento sui sistemi lineari e rango.

:::dimostrazione
Si procede per induzione sul numero $m$ di righe. Se la matrice è nulla, è già a scala. Altrimenti sia $c$ la prima colonna non nulla; con uno scambio si porta in prima riga una riga con elemento non nullo $p$ nella colonna $c$, che diventa il pivot. Per ogni riga $R_i$ con $i \geq 2$ ed elemento $a_{ic}$ nella colonna $c$, l'operazione $R_i \to R_i - \dfrac{a_{ic}}{p} R_1$ annulla quell'elemento. Dopo questi passi le colonne a sinistra di $c$ sono nulle e nella colonna $c$ l'unico elemento non nullo è il pivot in prima riga. Per l'ipotesi induttiva, la sottomatrice formata dalle righe dalla seconda in poi si riduce a scala con operazioni che non toccano la prima riga; la matrice ottenuta è a scala, perché i pivot delle righe successive stanno a destra della colonna $c$. Per ottenere la forma ridotta si divide ogni riga non nulla per il suo pivot e, procedendo dall'ultimo pivot verso il primo, si annullano con operazioni del terzo tipo gli elementi sopra ciascun pivot.
:::
::::

:::esempio{titolo="Riduzione a scala di una matrice 3 × 4"}
$$
\begin{pmatrix}
1 & 2 & -1 & 3 \\
2 & 4 & 1 & 0 \\
-1 & -2 & 2 & -5
\end{pmatrix}
\xrightarrow[R_3 \to R_3 + R_1]{R_2 \to R_2 - 2R_1}
\begin{pmatrix}
1 & 2 & -1 & 3 \\
0 & 0 & 3 & -6 \\
0 & 0 & 1 & -2
\end{pmatrix}
$$
$$
\xrightarrow{R_2 \leftrightarrow R_3}
\begin{pmatrix}
1 & 2 & -1 & 3 \\
0 & 0 & 1 & -2 \\
0 & 0 & 3 & -6
\end{pmatrix}
\xrightarrow{R_3 \to R_3 - 3R_2}
\begin{pmatrix}
1 & 2 & -1 & 3 \\
0 & 0 & 1 & -2 \\
0 & 0 & 0 & 0
\end{pmatrix}
$$
Dopo il primo passo la seconda colonna è nulla sotto la prima riga, quindi il secondo pivot si cerca nella terza colonna; lo scambio di righe porta in alto il pivot $1$ ed evita le frazioni. La matrice finale è a scala con **due pivot**, nelle colonne $1$ e $3$.
:::

::::teorema{#matrici-elementari titolo="Matrici elementari"}
Si chiama **matrice elementare** di ordine $m$ la matrice $E$ ottenuta applicando a $I_m$ una sola operazione elementare di riga. Allora:

- per ogni $A \in M_{m,n}(\mathbb{R})$ il prodotto $EA$ è la matrice ottenuta applicando ad $A$ la stessa operazione;
- $E$ è invertibile, e $E^{-1}$ è la matrice elementare dell'operazione inversa.

Ridurre $A$ con le operazioni corrispondenti a $E_1, E_2, \dots, E_r$ significa quindi moltiplicarla a sinistra per il prodotto $E_r \cdots E_2 E_1$, che è invertibile. Per esempio, in ordine $3$ l'operazione $R_3 \to R_3 - 2R_1$ corrisponde a
$$
E =
\begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
-2 & 0 & 1
\end{pmatrix},
\qquad
E^{-1} =
\begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
2 & 0 & 1
\end{pmatrix} .
$$

:::dimostrazione
La riga $i$ di $EA$ è il prodotto della riga $i$ di $E$ per $A$, cioè la combinazione lineare delle righe di $A$ con coefficienti gli elementi della riga $i$ di $E$. Per $R_i \to R_i + k R_j$ la riga $i$ di $E$ ha $1$ al posto $i$ e $k$ al posto $j$, quindi la riga $i$ di $EA$ è $R_i + k R_j$, mentre le altre righe di $E$ coincidono con quelle di $I_m$ e lasciano invariate le altre righe di $A$. Gli altri due tipi si verificano allo stesso modo. Sia ora $E'$ la matrice elementare dell'operazione inversa. Per il primo punto $E'E$ si ottiene applicando a $E$ l'operazione inversa di quella che ha prodotto $E$ da $I_m$, quindi $E'E = I_m$; con lo stesso ragionamento $EE' = I_m$, perciò $E' = E^{-1}$.
:::
::::

## Calcolo dell'inversa con il metodo di Gauss-Jordan

::::teorema{#teorema-di-gauss-jordan titolo="Teorema di Gauss-Jordan"}
Sia $A \in M_n(\mathbb{R})$ e sia $R$ la matrice a scala ridotta ottenuta da $A$ con operazioni elementari di riga. Allora $A$ è invertibile *se e solo se* $R = I_n$, cioè se e solo se la riduzione a scala di $A$ produce $n$ pivot. In tal caso le stesse operazioni che trasformano $A$ in $I_n$ trasformano $I_n$ in $A^{-1}$.

Il teorema fornisce insieme un **criterio di invertibilità** e un **metodo di calcolo** dell'inversa. Una matrice triangolare superiore con elementi diagonali tutti non nulli, per esempio, ha $n$ pivot ed è quindi invertibile.

:::dimostrazione
Siano $E_1, \dots, E_r$ le matrici elementari delle operazioni usate, e sia $P = E_r \cdots E_1$, così che $R = PA$; per il teorema sulle matrici elementari e per le proprietà dell'inversa, $P$ è invertibile. Se $R$ ha $n$ pivot, le colonne dei pivot sono $n$ indici strettamente crescenti compresi tra $1$ e $n$, quindi il pivot della riga $i$ sta nella colonna $i$; poiché ogni pivot vale $1$ ed è l'unico elemento non nullo della propria colonna, si ha $R = I_n$. Se invece i pivot sono meno di $n$, le righe non nulle sono meno di $n$, e poiché le righe nulle sono in fondo, l'ultima riga di $R$ è nulla.

Se $R = I_n$, allora $PA = I_n$. Moltiplicando a sinistra per $P^{-1}$ si ottiene $A = P^{-1}$, quindi $A$ è invertibile, come inversa di una matrice invertibile, e $A^{-1} = (P^{-1})^{-1} = P = E_r \cdots E_1 I_n$; perciò l'inversa si ottiene applicando a $I_n$ le stesse operazioni nello stesso ordine.

Se $R \neq I_n$, allora $R$ ha l'ultima riga nulla e, per le condizioni sufficienti di non invertibilità, $R$ non è invertibile. Se $A$ fosse invertibile, anche $R = PA$ lo sarebbe, come prodotto di matrici invertibili; perciò $A$ non è invertibile.
:::
::::

:::richiamo{titolo="Matrici elementari"}
Se $E$ è la matrice elementare di un'operazione di riga, allora $EA$ è la matrice ottenuta applicando ad $A$ quell'operazione, ed $E$ è invertibile.
:::

:::osservazione{#metodo-di-gauss-jordan titolo="Il metodo di Gauss-Jordan in pratica"}
Si scrive la matrice $n \times 2n$ ottenuta affiancando $A$ e $I_n$, e la si riduce con operazioni di riga fino a portare il blocco di sinistra in forma a scala ridotta:
$$
\left( A \mid I_n \right) \longrightarrow \left( I_n \mid A^{-1} \right) .
$$
Le operazioni si applicano a righe intere, quindi agiscono contemporaneamente sui due blocchi. Prima si producono gli zeri sotto la diagonale, poi si rendono uguali a $1$ i pivot, infine si producono gli zeri sopra la diagonale procedendo dall'ultima colonna verso la prima. Se durante la riduzione nel blocco di sinistra compare una riga nulla, i pivot sono meno di $n$ e $A$ **non è invertibile**. Le operazioni sono *tutte* di riga, poiché un'operazione di colonna corrisponde a una moltiplicazione a destra per una matrice elementare e con essa il blocco di destra non darebbe più $A^{-1}$. A fine calcolo il risultato si verifica con il solo prodotto $A A^{-1} = I_n$, per il teorema sull'inversa destra e l'inversa sinistra.
:::

::::teorema{#inversa-unilaterale titolo="Inversa destra e inversa sinistra"}
Siano $A, B \in M_n(\mathbb{R})$ tali che $AB = I_n$. Allora $A$ è invertibile e $B = A^{-1}$; in particolare vale anche $BA = I_n$. Per matrici quadrate basta quindi *una sola* delle due uguaglianze della definizione di inversa. Il criterio di invertibilità con il determinante e la formula dell'inversa con i complementi algebrici si trovano nell'argomento sul determinante e la matrice inversa.

:::dimostrazione
Sia $R = PA$ la forma a scala ridotta di $A$, con $P$ invertibile prodotto di matrici elementari. Se $A$ non fosse invertibile, per il teorema di Gauss-Jordan l'ultima riga di $R$ sarebbe nulla, quindi sarebbe nulla anche l'ultima riga di $RB$; ma $RB = PAB = P$, che è invertibile e per le condizioni sufficienti di non invertibilità non ha righe nulle. Perciò $A$ è invertibile, e moltiplicando a sinistra $AB = I_n$ per $A^{-1}$ si ottiene $B = A^{-1}$.
:::
::::

:::esempio{titolo="Inversa di una matrice 3 × 3"}
Sia $A = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & 1 \\ 1 & 2 & 1 \end{pmatrix}$.
$$
\left(\begin{array}{ccc|ccc}
1 & 2 & 0 & 1 & 0 & 0 \\
0 & 1 & 1 & 0 & 1 & 0 \\
1 & 2 & 1 & 0 & 0 & 1
\end{array}\right)
\xrightarrow{R_3 \to R_3 - R_1}
\left(\begin{array}{ccc|ccc}
1 & 2 & 0 & 1 & 0 & 0 \\
0 & 1 & 1 & 0 & 1 & 0 \\
0 & 0 & 1 & -1 & 0 & 1
\end{array}\right)
$$
$$
\xrightarrow{R_2 \to R_2 - R_3}
\left(\begin{array}{ccc|ccc}
1 & 2 & 0 & 1 & 0 & 0 \\
0 & 1 & 0 & 1 & 1 & -1 \\
0 & 0 & 1 & -1 & 0 & 1
\end{array}\right)
\xrightarrow{R_1 \to R_1 - 2R_2}
\left(\begin{array}{ccc|ccc}
1 & 0 & 0 & -1 & -2 & 2 \\
0 & 1 & 0 & 1 & 1 & -1 \\
0 & 0 & 1 & -1 & 0 & 1
\end{array}\right)
$$
Il blocco di sinistra è diventato $I_3$, quindi $A$ è **invertibile** e
$$
A^{-1} =
\begin{pmatrix}
-1 & -2 & 2 \\
1 & 1 & -1 \\
-1 & 0 & 1
\end{pmatrix} .
$$
:::

:::esempio{titolo="Una matrice non invertibile"}
Per $A = \begin{pmatrix} 1 & 2 \\ 2 & 4 \end{pmatrix}$ la riduzione di $\left( A \mid I_2 \right)$ dà
$$
\left(\begin{array}{cc|cc}
1 & 2 & 1 & 0 \\
2 & 4 & 0 & 1
\end{array}\right)
\xrightarrow{R_2 \to R_2 - 2R_1}
\left(\begin{array}{cc|cc}
1 & 2 & 1 & 0 \\
0 & 0 & -2 & 1
\end{array}\right) .
$$
Nel blocco di sinistra compare una riga nulla, quindi la riduzione produce un solo pivot e $A$ **non è invertibile**. In accordo con le condizioni sufficienti di non invertibilità, $A$ è un divisore dello zero:
$$
\begin{pmatrix}
1 & 2 \\
2 & 4
\end{pmatrix}
\begin{pmatrix}
2 & 0 \\
-1 & 0
\end{pmatrix}
=
\begin{pmatrix}
0 & 0 \\
0 & 0
\end{pmatrix} .
$$
:::

:::osservazione{#equazioni-matriciali titolo="Equazioni matriciali"}
Sia $A \in M_n(\mathbb{R})$ invertibile. Le equazioni nell'incognita $X$
$$
AX = B
\qquad \text{e} \qquad
XA = B
$$
hanno rispettivamente le uniche soluzioni $X = A^{-1} B$ e $X = B A^{-1}$: nel primo caso si moltiplica a sinistra per $A^{-1}$, nel secondo a destra, e i due risultati sono in generale diversi perché il prodotto non è commutativo. Per $AX = B$ si può evitare il calcolo di $A^{-1}$ riducendo la matrice affiancata $\left( A \mid B \right)$ fino a $\left( I_n \mid X \right)$, per lo stesso argomento del teorema di Gauss-Jordan. Quando $A$ *non* è invertibile, si scrive $X$ con elementi incogniti e si risolve il sistema lineare che si ottiene; le soluzioni possono non esistere o essere infinite.
:::
