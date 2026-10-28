---
titolo: Autovalori, autovettori e diagonalizzazione
sommario: Come si calcolano autovalori e autospazi di una matrice o di un endomorfismo, quando una matrice è diagonalizzabile e come si costruisce la matrice diagonalizzante, con le applicazioni alle potenze e alle matrici con parametro.
---

## Autovalori e autovettori

:::definizione{#autovalore-autovettore titolo="Autovalore e autovettore di un endomorfismo"}
Sia $V$ uno spazio vettoriale reale e sia $f : V \to V$ un'applicazione lineare, detta **endomorfismo** di $V$. Un numero $\lambda \in \mathbb{R}$ è un **autovalore** di $f$ se esiste un vettore $v \in V$ che soddisfa *insieme* le due condizioni
$$
\begin{cases}
v \neq 0 \\[4pt]
f(v) = \lambda v
\end{cases}
$$
e ogni vettore $v$ con queste due proprietà si chiama **autovettore** di $f$ relativo all'autovalore $\lambda$. Un autovettore è quindi un vettore non nullo che $f$ trasforma in un suo multiplo, perciò la retta $\langle v \rangle$ viene mandata in sé. La condizione $v \neq 0$ è necessaria nella definizione, poiché $f(0) = 0 = \lambda \cdot 0$ per *ogni* $\lambda$; l'autovalore invece può essere $0$, e questo accade esattamente quando $\ker f$ contiene vettori non nulli.
:::

:::definizione{#autovalori-di-una-matrice titolo="Autovalore e autovettore di una matrice"}
Sia $A \in M_n(\mathbb{R})$. Un numero $\lambda \in \mathbb{R}$ è un autovalore di $A$ se esiste un vettore colonna $v \in \mathbb{R}^n$, con $v \neq 0$, tale che $Av = \lambda v$, e $v$ si chiama autovettore di $A$ relativo a $\lambda$. È la definizione precedente applicata all'endomorfismo $v \mapsto Av$ di $\mathbb{R}^n$. Per verificare che un vettore assegnato è un autovettore si calcola $Av$ e si controlla che sia un multiplo di $v$; il coefficiente di proporzionalità è l'autovalore.
:::

:::esempio
Siano
$$
A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}, \qquad v = \begin{pmatrix} 1 \\ 1 \end{pmatrix}, \qquad w = \begin{pmatrix} 1 \\ 0 \end{pmatrix} .
$$
Poiché $Av = (5, 5) = 5v$, il vettore $v$ è un **autovettore** di $A$ relativo all'autovalore $5$. Invece $Aw = (4, 2)$ *non* è multiplo di $w$, perché la seconda componente di $w$ è nulla e quella di $Aw$ no, quindi $w$ non è un autovettore.

::grafico{vettori="0,0,5,5,Av;0,0,1,1,v;0,0,1,0,w;0,0,4,2,Aw" segmenti="-0.6,-0.6,5.8,5.8" xmin=-0.8 xmax=6 ymin=-0.8 ymax=6 uguale=1 titolo="$Av = 5v$ resta sulla retta di $v$ (tratteggiata): la direzione di $v$ è invariante; $Aw = (4, 2)$ esce dalla retta di $w$, l'asse $x$"}

:::

## Il polinomio caratteristico

:::definizione{#polinomio-caratteristico titolo="Polinomio caratteristico"}
Sia $A \in M_n(\mathbb{R})$. Il **polinomio caratteristico** di $A$ è
$$
p_A(\lambda) = \det(A - \lambda I_n) ,
$$
un polinomio di grado $n$ nella variabile $\lambda$, con coefficiente direttivo $(-1)^n$. Si ottiene sottraendo $\lambda$ a ogni elemento della diagonale principale e calcolando il determinante con le regole dell'argomento sui determinanti. Per $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$ risulta $p_A(\lambda) = (4 - \lambda)(3 - \lambda) - 2 = \lambda^2 - 7\lambda + 10$.
:::

::::teorema{#autovalori-e-polinomio-caratteristico titolo="Autovalori come radici del polinomio caratteristico"}
Sia $A \in M_n(\mathbb{R})$ e sia $\lambda_0 \in \mathbb{R}$. Allora $\lambda_0$ è un autovalore di $A$ *se e solo se*
$$
p_A(\lambda_0) = \det(A - \lambda_0 I_n) = 0 .
$$
Il teorema riduce la ricerca degli autovalori alla risoluzione di un'**equazione polinomiale** di grado $n$. Per la matrice dell'esempio precedente $\lambda^2 - 7\lambda + 10 = (\lambda - 2)(\lambda - 5)$, quindi gli autovalori sono $2$ e $5$. Una matrice di ordine $n$ ha *al più* $n$ autovalori distinti, perché un polinomio di grado $n$ ha al più $n$ radici.

:::dimostrazione
L'uguaglianza $Av = \lambda_0 v$ equivale a $Av - \lambda_0 I_n v = 0$, cioè a $(A - \lambda_0 I_n)v = 0$. Quindi $\lambda_0$ è un autovalore se e solo se il sistema lineare omogeneo $(A - \lambda_0 I_n)v = 0$ ha una soluzione $v \neq 0$. Poiché la matrice dei coefficienti è quadrata, per il criterio richiamato sotto questo accade se e solo se $\det(A - \lambda_0 I_n) = 0$.
:::
::::

:::richiamo{titolo="Sistemi omogenei quadrati"}
Se $M \in M_n(\mathbb{R})$, il sistema $Mx = 0$ ha soluzioni non nulle se e solo se $\det M = 0$.
:::

:::osservazione{#autovalori-di-matrici-triangolari titolo="Matrici triangolari e sviluppo lungo una riga"}
Se $A$ è triangolare, in particolare diagonale, anche $A - \lambda I_n$ è triangolare, e il suo determinante è il prodotto degli elementi diagonali:
$$
p_A(\lambda) = (a_{11} - \lambda)(a_{22} - \lambda) \cdots (a_{nn} - \lambda) .
$$
Gli autovalori di una **matrice triangolare** sono quindi i suoi elementi diagonali, ciascuno contato tante volte quante compare. Per $\begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix}$ l'unico autovalore è $2$, con $p_A(\lambda) = (2 - \lambda)^2$. Quando la matrice non è triangolare ma ha una riga o una colonna con un solo elemento non nullo fuori dalla diagonale, conviene calcolare $\det(A - \lambda I_n)$ con lo **sviluppo di Laplace** lungo quella riga o colonna, poiché il polinomio si ottiene già in parte fattorizzato.
:::

:::teorema{#traccia-e-determinante titolo="Traccia, determinante e autovalori"}
Sia $A \in M_n(\mathbb{R})$. Il termine noto di $p_A$ è $p_A(0) = \det A$ e il coefficiente di $\lambda^{n-1}$ è $(-1)^{n-1} \operatorname{tr} A$. Per $n = 2$ si ha quindi
$$
p_A(\lambda) = \lambda^2 - (\operatorname{tr} A)\, \lambda + \det A .
$$
Se $p_A$ ha $n$ radici reali $\lambda_1, \dots, \lambda_n$, contate con la loro molteplicità, allora
$$
\begin{aligned}
\operatorname{tr} A &= \lambda_1 + \lambda_2 + \dots + \lambda_n \\[4pt]
\det A &= \lambda_1 \lambda_2 \cdots \lambda_n .
\end{aligned}
$$
La prima affermazione segue ponendo $\lambda = 0$ e osservando che nello sviluppo di $\det(A - \lambda I_n)$ le potenze $\lambda^n$ e $\lambda^{n-1}$ provengono solo dal prodotto degli elementi diagonali; la seconda segue confrontando i coefficienti con $p_A(\lambda) = (\lambda_1 - \lambda) \cdots (\lambda_n - \lambda)$. Le due uguaglianze servono da **controllo dei calcoli**: per $\begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$ si ha $\operatorname{tr} A = 7 = 2 + 5$ e $\det A = 10 = 2 \cdot 5$. Poiché $\det A = p_A(0)$, la matrice $A$ è invertibile se e solo se $0$ *non* è un autovalore di $A$.
:::

## Matrici simili ed endomorfismi

::::teorema{#invarianza-per-similitudine titolo="Matrici simili hanno lo stesso polinomio caratteristico"}
Siano $A, B \in M_n(\mathbb{R})$ simili, cioè tali che $B = P^{-1} A P$ per una matrice invertibile $P \in M_n(\mathbb{R})$. Allora
$$
p_B(\lambda) = p_A(\lambda) ,
$$
quindi $A$ e $B$ hanno gli **stessi autovalori**, con la stessa molteplicità come radici, la stessa traccia e lo stesso determinante. Il teorema permette di definire il polinomio caratteristico di un endomorfismo e fornisce un modo rapido per escludere che due matrici siano simili: se differiscono la traccia, il determinante o gli autovalori, le matrici non sono simili.

:::dimostrazione
Poiché $P^{-1} I_n P = I_n$, si ha $B - \lambda I_n = P^{-1} A P - \lambda P^{-1} I_n P = P^{-1}(A - \lambda I_n) P$. Per il **teorema di Binet**
$$
\det(B - \lambda I_n) = \det(P^{-1}) \det(A - \lambda I_n) \det P = \det(A - \lambda I_n) ,
$$
dato che $\det(P^{-1}) \det P = \det(P^{-1} P) = \det I_n = 1$.
:::
::::

:::richiamo{titolo="Teorema di Binet"}
Se $A, B \in M_n(\mathbb{R})$, allora $\det(AB) = \det A \cdot \det B$.
:::

:::attenzione
Il viceversa del teorema è falso: due matrici con lo stesso polinomio caratteristico possono *non* essere simili. Le matrici $A = \begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix}$ e $2I_2$ hanno entrambe polinomio caratteristico $(2 - \lambda)^2$; tuttavia $P^{-1}(2I_2)P = 2I_2$ per ogni $P$ invertibile, quindi l'unica matrice simile a $2I_2$ è $2I_2$ stessa, e $A$ **non è simile** a $2I_2$.
:::

:::osservazione{#autovalori-di-un-endomorfismo titolo="Autovalori di un endomorfismo con la matrice associata"}
Sia $f : V \to V$ un endomorfismo di uno spazio di dimensione $n$, sia $\mathcal{B}$ una base di $V$ e sia $A = M^{\mathcal{B}}_{\mathcal{B}}(f)$. Poiché la matrice associata trasforma le coordinate di $v$ nelle coordinate di $f(v)$, l'uguaglianza $f(v) = \lambda v$ equivale all'uguaglianza $AX = \lambda X$ tra i vettori delle coordinate. Quindi gli autovalori di $f$ sono gli **autovalori di $A$**, e gli autovettori di $f$ sono i vettori le cui coordinate sono autovettori di $A$. Cambiando base si ottiene una matrice simile ad $A$, come si è visto nell'argomento sulle applicazioni lineari, perciò il polinomio caratteristico $p_f = p_A$ *non* dipende dalla base scelta. Negli spazi di polinomi o di matrici si sceglie la base più comoda, per esempio $\{1, x, x^2\}$ in $\mathbb{R}_2[x]$.
:::

:::esempio{titolo="La simmetria rispetto alla bisettrice"}
L'endomorfismo $f(x, y) = (y, x)$ di $\mathbb{R}^2$ ha matrice $A = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ rispetto alla base canonica e $p_A(\lambda) = \lambda^2 - 1$, quindi gli autovalori sono $1$ e $-1$. Si ha $f(1, 1) = (1, 1)$ e $f(1, -1) = (-1, 1) = -(1, -1)$, perciò i vettori della bisettrice $y = x$ restano fermi e quelli della retta $y = -x$ cambiano verso. In accordo con la geometria, $f$ è la **simmetria** rispetto alla retta $y = x$.

::grafico{vettori="0,0,1.5,1.5,u = f(u);0,0,1.5,-1.5,w;0,0,-1.5,1.5,f(w)" segmenti="-2.4,-2.4,2.4,2.4;-2.4,2.4,2.4,-2.4" xmin=-2.5 xmax=2.5 ymin=-2.2 ymax=2.2 uguale=1 titolo="La simmetria rispetto a $y = x$: i vettori della bisettrice restano fermi (autovalore $1$), quelli della retta $y = -x$ cambiano verso (autovalore $-1$)"}

:::

## Autospazi

:::definizione{#autospazio titolo="Autospazio"}
Sia $A \in M_n(\mathbb{R})$ e sia $\lambda$ un autovalore di $A$. L'**autospazio** relativo a $\lambda$ è
$$
V_\lambda = \{ v \in \mathbb{R}^n : Av = \lambda v \} = \ker(A - \lambda I_n) .
$$
È un sottospazio di $\mathbb{R}^n$, perché è il nucleo di una matrice, e contiene tutti gli autovettori relativi a $\lambda$ insieme al vettore nullo. Poiché $\lambda$ è un autovalore, $V_\lambda$ contiene un vettore non nullo, quindi $\dim V_\lambda \geq 1$. Per un endomorfismo $f$ la definizione è la stessa, con $V_\lambda = \ker(f - \lambda \operatorname{id}_V)$.
:::

:::osservazione{#calcolo-degli-autospazi titolo="Calcolo di un autospazio"}
L'autospazio $V_\lambda$ è l'insieme delle soluzioni del sistema omogeneo $(A - \lambda I_n)v = 0$. Per il **teorema di Rouché-Capelli** il sistema ha $n - \operatorname{rk}(A - \lambda I_n)$ parametri liberi, quindi
$$
\dim V_\lambda = n - \operatorname{rk}(A - \lambda I_n) .
$$
Nei calcoli si scrive $A - \lambda I_n$ con il valore numerico di $\lambda$, se ne calcola il rango, si risolve il sistema e si scrive una base di $V_\lambda$. Poiché $\det(A - \lambda I_n) = 0$, il rango è *sempre* minore di $n$; se la riduzione a scala dà rango $n$, il valore di $\lambda$ usato **non è un autovalore** e c'è un errore nel calcolo precedente.
:::

:::esempio{titolo="Autospazi di una matrice di ordine 2"}
Per $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$, con autovalori $2$ e $5$, si ha
$$
A - 2I_2 = \begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix},
\qquad
A - 5I_2 = \begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix} .
$$
Entrambe le matrici hanno rango $1$, quindi entrambi gli autospazi hanno dimensione $1$. Il primo sistema si riduce all'equazione $2x + y = 0$, il secondo all'equazione $x = y$, perciò
$$
V_2 = \langle (1, -2) \rangle, \qquad V_5 = \langle (1, 1) \rangle .
$$
I due autospazi sono **rette per l'origine**, e su ciascuna di esse $A$ agisce come una moltiplicazione per lo scalare corrispondente.

::grafico{f="x;-2*x" vettori="0,0,1,1,u;0,0,1,-2,w" etichette="0.2,2.5,V₅ : y = x;-2.9,1.9,V₂ : y = −2x" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 titolo="Gli autospazi $V_5$ e $V_2$ di $A$ sono due rette per l'origine, generate da $u = (1, 1)$ e da $w = (1, -2)$"}

:::

## Molteplicità algebrica e geometrica

:::definizione{#molteplicita titolo="Molteplicità algebrica e geometrica"}
Sia $\lambda_0$ un autovalore di $A \in M_n(\mathbb{R})$.

- La **molteplicità algebrica** $m_a(\lambda_0)$ è la molteplicità di $\lambda_0$ come radice di $p_A$, cioè il più grande intero $m$ tale che $(\lambda - \lambda_0)^m$ divide $p_A(\lambda)$.
- La **molteplicità geometrica** $m_g(\lambda_0)$ è la dimensione dell'autospazio, $m_g(\lambda_0) = \dim V_{\lambda_0} = n - \operatorname{rk}(A - \lambda_0 I_n)$.

La prima si legge dalla fattorizzazione del polinomio caratteristico, la seconda richiede il calcolo di un rango. Dal confronto tra le due dipende la diagonalizzabilità, come stabilisce il criterio di diagonalizzabilità.
:::

::::teorema{#relazione-tra-molteplicita titolo="Relazione tra le molteplicità"}
Sia $\lambda_0$ un autovalore di $A \in M_n(\mathbb{R})$. Allora
$$
1 \leq m_g(\lambda_0) \leq m_a(\lambda_0) .
$$
In particolare, se $m_a(\lambda_0) = 1$ allora $m_g(\lambda_0) = 1$ senza bisogno di calcoli, perciò il rango di $A - \lambda_0 I_n$ va calcolato *soltanto* per gli autovalori multipli.

:::dimostrazione
Sia $g = m_g(\lambda_0)$. Si ha $g \geq 1$ perché $V_{\lambda_0}$ contiene un vettore non nullo. Sia $v_1, \dots, v_g$ una base di $V_{\lambda_0}$; per il **teorema di completamento** esistono $v_{g+1}, \dots, v_n$ tali che $v_1, \dots, v_n$ sia una base di $\mathbb{R}^n$. La matrice $P$ che ha questi vettori come colonne è invertibile e soddisfa $Pe_j = v_j$, dove $e_j$ è il $j$-esimo vettore della base canonica, quindi $P^{-1} v_j = e_j$. Per $j \leq g$ la $j$-esima colonna di $P^{-1}AP$ è
$$
P^{-1} A v_j = P^{-1}(\lambda_0 v_j) = \lambda_0 e_j ,
$$
perciò
$$
P^{-1} A P = \begin{pmatrix} \lambda_0 I_g & B \\ 0 & C \end{pmatrix}
$$
con $C \in M_{n-g}(\mathbb{R})$. Sviluppando $\det(P^{-1}AP - \lambda I_n)$ con Laplace lungo la prima colonna, e ripetendo lo sviluppo $g$ volte, si ottiene $(\lambda_0 - \lambda)^g \det(C - \lambda I_{n-g})$. Poiché $A$ e $P^{-1}AP$ sono simili, hanno lo stesso polinomio caratteristico, quindi $p_A(\lambda) = (\lambda_0 - \lambda)^g\, p_C(\lambda)$. Ne segue che $(\lambda - \lambda_0)^g$ divide $p_A$, cioè $m_a(\lambda_0) \geq g$.
:::
::::

:::richiamo{titolo="Teorema di completamento a una base"}
Se $v_1, \dots, v_g$ sono vettori linearmente indipendenti di uno spazio $V$ di dimensione $n$, esistono $v_{g+1}, \dots, v_n \in V$ tali che $v_1, \dots, v_n$ sia una base di $V$.
:::

:::esempio{titolo="Molteplicità diverse"}
Per $A = \begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix}$ si ha $p_A(\lambda) = (2 - \lambda)^2$, quindi $m_a(2) = 2$. La matrice $A - 2I_2 = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$ ha rango $1$, quindi $m_g(2) = 2 - 1 = 1$ e $V_2 = \langle (1, 0) \rangle$. La disuguaglianza $m_g \leq m_a$ può dunque essere **stretta**. Geometricamente $A$ manda $e_1 = (1, 0)$ in $(2, 0)$ ed $e_2 = (0, 1)$ in $(1, 2)$: l'asse $x$ è l'*unica* retta per l'origine mandata in sé.

::grafico{vettori="0,0,2,0,Ae₁;0,0,1,2,Ae₂;0,0,0,1,e₂" segmenti="-0.6,0,2.8,0" xmin=-0.8 xmax=3 ymin=-0.6 ymax=2.6 uguale=1 titolo="La matrice $A$ raddoppia i vettori dell'asse $x$ (autospazio $V_2$) e manda $e_2$ in $(1, 2)$, fuori dalla sua retta"}

:::

## Indipendenza degli autovettori

::::teorema{#autovettori-indipendenti titolo="Autovettori relativi ad autovalori distinti"}
Sia $A \in M_n(\mathbb{R})$ e siano $v_1, \dots, v_k$ autovettori di $A$ relativi ad autovalori $\lambda_1, \dots, \lambda_k$ a due a due distinti. Allora $v_1, \dots, v_k$ sono **linearmente indipendenti**. Il teorema garantisce che autovettori scelti da autospazi diversi non generano dipendenze lineari, ed è il punto di partenza del criterio di diagonalizzabilità.

:::dimostrazione
Si procede per induzione su $k$. Per $k = 1$ la tesi vale perché $v_1 \neq 0$. Si supponga la tesi vera per $k - 1$ autovettori e sia
$$
c_1 v_1 + c_2 v_2 + \dots + c_k v_k = 0 . \qquad (1)
$$
Moltiplicando (1) a sinistra per $A$ e usando $Av_i = \lambda_i v_i$ si ottiene $c_1 \lambda_1 v_1 + \dots + c_k \lambda_k v_k = 0$; sottraendo da questa uguaglianza la (1) moltiplicata per $\lambda_k$ si ottiene
$$
c_1 (\lambda_1 - \lambda_k) v_1 + \dots + c_{k-1} (\lambda_{k-1} - \lambda_k) v_{k-1} = 0 .
$$
Per l'ipotesi induttiva $v_1, \dots, v_{k-1}$ sono indipendenti, quindi $c_i (\lambda_i - \lambda_k) = 0$ per $i = 1, \dots, k-1$. Poiché gli autovalori sono distinti, $\lambda_i - \lambda_k \neq 0$, perciò $c_i = 0$ per $i < k$. La (1) diventa $c_k v_k = 0$, e dato che $v_k \neq 0$ anche $c_k = 0$.
:::
::::

:::osservazione{#unione-di-basi-di-autospazi titolo="Unione di basi di autospazi"}
Siano $\lambda_1, \dots, \lambda_r$ gli autovalori distinti di $A$ e si scelga una base di ciascun autospazio $V_{\lambda_i}$. Allora l'**unione di queste basi** è un insieme di vettori linearmente indipendenti. Infatti, in una combinazione lineare nulla di tutti questi vettori si raccolgono i termini relativi a ciascun autovalore in un vettore $w_i \in V_{\lambda_i}$, e si ottiene $w_1 + \dots + w_r = 0$. Se qualche $w_i$ fosse non nullo, i $w_i$ non nulli sarebbero autovettori relativi ad autovalori distinti con somma nulla, in contrasto con il teorema precedente; quindi ogni $w_i$ è nullo, e poiché $w_i$ è combinazione lineare di una base di $V_{\lambda_i}$, tutti i coefficienti sono nulli. In particolare la somma degli autospazi è diretta e ha dimensione $m_g(\lambda_1) + \dots + m_g(\lambda_r)$.
:::

## Diagonalizzabilità

:::definizione{#matrice-diagonalizzabile titolo="Matrice ed endomorfismo diagonalizzabili"}
Una matrice $A \in M_n(\mathbb{R})$ è **diagonalizzabile** se è simile a una matrice diagonale, cioè se esistono $P \in M_n(\mathbb{R})$ invertibile e $D$ diagonale tali che
$$
P^{-1} A P = D .
$$
La matrice $P$ si chiama **matrice diagonalizzante**. Un endomorfismo $f : V \to V$ è diagonalizzabile se esiste una base di $V$ rispetto alla quale la matrice associata a $f$ è diagonale. Una matrice diagonale descrive un endomorfismo che allunga, accorcia o ribalta ciascun asse coordinato senza mescolare le coordinate; diagonalizzare significa trovare assi con questa proprietà.
:::

::::teorema{#base-di-autovettori titolo="Diagonalizzabilità e basi di autovettori"}
Sia $A \in M_n(\mathbb{R})$. Allora $A$ è diagonalizzabile se e solo se esiste una **base di $\mathbb{R}^n$ formata da autovettori** di $A$. In tal caso, se $v_1, \dots, v_n$ è una tale base con $Av_j = \lambda_j v_j$, la matrice $P$ con colonne $v_1, \dots, v_n$ soddisfa
$$
P^{-1} A P = D = \begin{pmatrix} \lambda_1 & & \\ & \ddots & \\ & & \lambda_n \end{pmatrix} .
$$
Il teorema dice come si costruiscono $P$ e $D$: le colonne di $P$ sono autovettori e gli elementi diagonali di $D$ sono i relativi autovalori, nello stesso ordine.

:::dimostrazione
Sia $P$ una matrice invertibile con colonne $v_1, \dots, v_n$ e sia $D$ diagonale con elementi diagonali $d_1, \dots, d_n$. L'uguaglianza $P^{-1}AP = D$ equivale ad $AP = PD$. La $j$-esima colonna di $AP$ è $Av_j$ e la $j$-esima colonna di $PD$ è $d_j v_j$, quindi $AP = PD$ se e solo se $Av_j = d_j v_j$ per ogni $j$. Le colonne di una matrice invertibile sono non nulle e formano una base di $\mathbb{R}^n$; perciò $A$ è diagonalizzabile se e solo se esiste una base $v_1, \dots, v_n$ con $Av_j = d_j v_j$, cioè una base di autovettori.
:::
::::

::::teorema{#criterio-di-diagonalizzabilita titolo="Criterio di diagonalizzabilità"}
Sia $A \in M_n(\mathbb{R})$. Allora $A$ è diagonalizzabile se e solo se sono soddisfatte entrambe le condizioni
$$
\begin{cases}
p_A \text{ ha } n \text{ radici reali, contate con la loro molteplicità} \\[4pt]
m_g(\lambda) = m_a(\lambda) \text{ per ogni autovalore } \lambda
\end{cases}
$$
Il criterio si applica in due passi. Si fattorizza il polinomio caratteristico, e se ci sono radici non reali la matrice **non è diagonalizzabile**; poi, per ogni autovalore con $m_a \geq 2$, si calcola il rango di $A - \lambda I_n$. Gli autovalori semplici non richiedono verifiche, perché per essi $m_g = m_a = 1$.

:::dimostrazione
Si supponga $P^{-1}AP = D$ con $D$ diagonale di elementi $d_1, \dots, d_n$. Le matrici $A$ e $D$ sono simili, quindi $p_A(\lambda) = p_D(\lambda) = (d_1 - \lambda) \cdots (d_n - \lambda)$, che ha $n$ radici reali. Per un autovalore $\lambda_0$, la molteplicità $m_a(\lambda_0)$ è il numero degli indici $j$ con $d_j = \lambda_0$; le colonne di $P$ con questi indici sono autovettori relativi a $\lambda_0$ e sono indipendenti, perché colonne di una matrice invertibile. Quindi $m_g(\lambda_0) \geq m_a(\lambda_0)$, e dalla relazione tra le molteplicità segue l'uguaglianza.

Viceversa, siano $\lambda_1, \dots, \lambda_r$ gli autovalori distinti. Poiché $p_A$ ha $n$ radici reali, $m_a(\lambda_1) + \dots + m_a(\lambda_r) = n$, quindi per la seconda condizione anche $m_g(\lambda_1) + \dots + m_g(\lambda_r) = n$. Per l'osservazione sull'unione di basi di autospazi, l'unione delle basi degli autospazi è formata da $n$ vettori linearmente indipendenti, perciò è una base di $\mathbb{R}^n$ formata da autovettori, e $A$ è diagonalizzabile per il teorema precedente.
:::
::::

:::teorema{#autovalori-distinti titolo="Autovalori reali distinti"}
Sia $A \in M_n(\mathbb{R})$ con $n$ autovalori reali a due a due distinti. Allora $A$ è **diagonalizzabile**. Infatti ogni autovalore ha $m_a = 1$, quindi $m_g = 1$, ed entrambe le condizioni del criterio sono soddisfatte. La condizione è *sufficiente* e non *necessaria*: la matrice $I_n$ è diagonale e ha l'unico autovalore $1$.
:::

:::attenzione
Una matrice reale con autovalori non reali non è diagonalizzabile su $\mathbb{R}$. Per $A = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$, che descrive la rotazione di un angolo retto, si ha $p_A(\lambda) = \lambda^2 + 1$, senza radici reali: nessuna retta per l'origine viene mandata in sé, quindi **non esistono autovettori** in $\mathbb{R}^2$.

::grafico{vettori="0,0,2,1,v;0,0,-1,2,Av" segmenti="-2.6,-1.3,2.6,1.3" xmin=-2.6 xmax=2.6 ymin=-1.6 ymax=2.6 uguale=1 titolo="La rotazione di un angolo retto manda $v = (2, 1)$ in $Av = (-1, 2)$, ortogonale alla retta di $v$ (tratteggiata); lo stesso accade per ogni vettore non nullo"}

:::

:::osservazione{#matrici-simmetriche-diagonalizzabili titolo="Matrici simmetriche"}
Ogni **matrice simmetrica** reale è diagonalizzabile, e la matrice diagonalizzante si può scegliere con colonne ortonormali. Il risultato è il teorema spettrale, per il quale si rimanda all'argomento sul prodotto scalare e sul teorema spettrale; negli esercizi permette di affermare la diagonalizzabilità di una matrice simmetrica senza calcolare i ranghi.
:::

## La matrice diagonalizzante e le potenze

:::osservazione{#procedura-di-diagonalizzazione titolo="Procedura di diagonalizzazione"}
Per stabilire se $A \in M_n(\mathbb{R})$ è diagonalizzabile e, in caso affermativo, trovare $P$ e $D$, si procede in tre passi.

- Si calcola e si fattorizza $p_A(\lambda)$; se ha radici non reali, $A$ non è diagonalizzabile.
- Per ogni autovalore $\lambda$ con $m_a(\lambda) \geq 2$ si calcola $m_g(\lambda) = n - \operatorname{rk}(A - \lambda I_n)$; se per un autovalore $m_g < m_a$, la matrice $A$ non è diagonalizzabile.
- Se tutte le verifiche danno esito positivo, si trova una base di ogni autospazio, si dispongono i vettori come colonne di $P$ e si scrivono nella diagonale di $D$ i relativi autovalori, nello stesso ordine.

La matrice $P$ *non* è unica: ogni autovettore si può moltiplicare per uno scalare non nullo e l'ordine delle colonne si può cambiare, purché $D$ venga riordinata allo stesso modo. Come verifica conviene controllare l'uguaglianza $AP = PD$, che evita il calcolo di $P^{-1}$.
:::

:::esempio{titolo="Una matrice di ordine 3 con un autovalore doppio"}
Sia
$$
A = \begin{pmatrix} 3 & 1 & 1 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{pmatrix} .
$$
La matrice è triangolare, quindi $p_A(\lambda) = (3 - \lambda)(2 - \lambda)^2$, con $m_a(3) = 1$ e $m_a(2) = 2$. Per l'autovalore doppio la matrice
$$
A - 2I_3 = \begin{pmatrix} 1 & 1 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}
$$
ha rango $1$, quindi $m_g(2) = 3 - 1 = 2 = m_a(2)$ e $A$ è **diagonalizzabile**. L'autospazio $V_2$ è il piano $x + y + z = 0$, con base $(1, -1, 0)$, $(1, 0, -1)$. Per $\lambda = 3$ il sistema $(A - 3I_3)v = 0$ dà $y = 0$ e $z = 0$, quindi $V_3 = \langle (1, 0, 0) \rangle$. Ne segue
$$
P = \begin{pmatrix} 1 & 1 & 1 \\ 0 & -1 & 0 \\ 0 & 0 & -1 \end{pmatrix},
\qquad
D = \begin{pmatrix} 3 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{pmatrix} .
$$
:::

:::teorema{#potenze-di-matrici-diagonalizzabili titolo="Potenze di una matrice diagonalizzabile"}
Sia $A \in M_n(\mathbb{R})$ diagonalizzabile, con $P^{-1}AP = D$ e $D$ diagonale di elementi $\lambda_1, \dots, \lambda_n$. Allora per ogni intero $k \geq 1$
$$
A^k = P D^k P^{-1},
\qquad
D^k = \begin{pmatrix} \lambda_1^k & & \\ & \ddots & \\ & & \lambda_n^k \end{pmatrix} .
$$
Infatti $A = PDP^{-1}$, e nel prodotto $A^k = (PDP^{-1})(PDP^{-1}) \cdots (PDP^{-1})$ ogni fattore $P^{-1}P$ interno vale $I_n$, quindi resta $PD^kP^{-1}$; la potenza di una matrice diagonale si calcola elevando gli elementi diagonali. Il calcolo di $A^k$ per $k$ generico, che con i prodotti righe per colonne richiederebbe $k - 1$ moltiplicazioni, si riduce così a **due prodotti di matrici**.
:::

:::esempio{titolo="Potenza di una matrice di ordine 2"}
Per $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$ gli autospazi sono $V_2 = \langle (1, -2) \rangle$ e $V_5 = \langle (1, 1) \rangle$, quindi
$$
P = \begin{pmatrix} 1 & 1 \\ -2 & 1 \end{pmatrix},
\qquad
P^{-1} = \frac{1}{3} \begin{pmatrix} 1 & -1 \\ 2 & 1 \end{pmatrix},
\qquad
D = \begin{pmatrix} 2 & 0 \\ 0 & 5 \end{pmatrix} .
$$
Il prodotto $P D^k P^{-1}$ dà
$$
A^k = \frac{1}{3} \begin{pmatrix} 2^k + 2 \cdot 5^k & 5^k - 2^k \\ 2 \cdot 5^k - 2^{k+1} & 2^{k+1} + 5^k \end{pmatrix} .
$$
Per $k = 1$ si ritrova $A$, e questo conferma il calcolo.
:::

## Matrici con parametro

:::osservazione{#matrici-con-parametro titolo="Diagonalizzabilità al variare di un parametro"}
Quando $A$ dipende da un parametro reale $k$, la diagonalizzabilità si discute seguendo il **criterio di diagonalizzabilità** e distinguendo i casi.

- Si calcola $p_A(\lambda)$ cercando di fattorizzarlo con $k$ trattato come costante; spesso uno sviluppo di Laplace lungo una riga con molti zeri isola subito un fattore.
- Si individuano i valori di $k$ per cui alcune radici non sono reali, e per essi la matrice non è diagonalizzabile, e quelli per cui due autovalori coincidono.
- Per i valori di $k$ con autovalori reali e distinti la matrice è diagonalizzabile.
- Per ciascun valore di $k$ con un autovalore multiplo si sostituisce $k$ nella matrice e si calcola $m_g$ con il rango.

Anche quando gli autovalori non dipendono da $k$, il rango di $A - \lambda I_n$ può dipendere da $k$, e allora la discussione riguarda *solo* il calcolo di $m_g$.
:::

:::esempio{titolo="Un parametro fuori dalla diagonale"}
Sia
$$
A = \begin{pmatrix} 2 & 0 & k \\ 0 & 1 & 0 \\ 0 & 0 & 2 \end{pmatrix}, \qquad k \in \mathbb{R} .
$$
La matrice è triangolare, quindi per ogni $k$ gli autovalori sono $1$, semplice, e $2$, con $m_a(2) = 2$. Si ha
$$
A - 2I_3 = \begin{pmatrix} 0 & 0 & k \\ 0 & -1 & 0 \\ 0 & 0 & 0 \end{pmatrix} .
$$
Se $k \neq 0$ le prime due righe sono indipendenti, quindi il rango è $2$, $m_g(2) = 1 < 2$ e $A$ non è diagonalizzabile. Se $k = 0$ il rango è $1$, quindi $m_g(2) = 2$ e $A$, che in questo caso è già diagonale, è diagonalizzabile. In conclusione $A$ è **diagonalizzabile se e solo se** $k = 0$.
:::
