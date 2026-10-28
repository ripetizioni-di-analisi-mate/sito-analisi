---
titolo: Determinante e matrice inversa
sommario: Come si calcola il determinante di una matrice quadrata, quali proprietà permettono di semplificarne il calcolo e come il determinante decide l'invertibilità e fornisce la formula dell'inversa.
---

## Determinante di ordine 2 e 3

:::definizione{#determinante-ordine-2 titolo="Determinante di ordine 2"}
Sia $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix} \in M_2(\mathbb{R})$. Il **determinante** di $A$ è il numero reale
$$
\det A =
\begin{vmatrix} a & b \\ c & d \end{vmatrix}
= ad - bc ,
$$
cioè il prodotto degli elementi della diagonale principale meno il prodotto degli elementi della diagonale secondaria. Il determinante associa a ogni matrice quadrata un solo numero, e per il criterio di invertibilità questo numero decide se la matrice è invertibile. Per esempio
$$
\begin{vmatrix} 3 & -2 \\ 5 & 4 \end{vmatrix} = 3 \cdot 4 - (-2) \cdot 5 = 22 .
$$
:::

:::osservazione{#significato-geometrico titolo="Significato geometrico"}
Siano $u = (u_1, u_2)$ e $v = (v_1, v_2)$ due vettori del piano. L'**area del parallelogramma** che ha due lati consecutivi su $u$ e $v$ è il valore assoluto del determinante della matrice che ha $u$ e $v$ come righe:
$$
\text{Area} = \left| \det \begin{pmatrix} u_1 & u_2 \\ v_1 & v_2 \end{pmatrix} \right| .
$$
Il segno indica l'orientamento: il determinante è positivo quando la rotazione più breve che porta $u$ su $v$ è antioraria, negativo quando è oraria. Per $u = (3, 1)$ e $v = (1, 2)$ si ottiene $\det = 3 \cdot 2 - 1 \cdot 1 = 5$, quindi il parallelogramma ha area $5$. Il triangolo di lati $u$ e $v$ è metà del parallelogramma e ha area $\dfrac{5}{2}$.

::grafico{area="2*x;x/3;0;1|2+(x-1)/3;x/3;1;3|2+(x-1)/3;1+2*(x-3);3;4" vettori="0,0,3,1,u;0,0,1,2,v" segmenti="3,1,4,3;1,2,4,3" etichette="1.8,1.4,area 5" xmin=-0.5 xmax=4.6 ymin=-0.5 ymax=3.5 uguale=1 titolo="Il parallelogramma di lati $u = (3, 1)$ e $v = (1, 2)$ ha area $\left|\det \begin{pmatrix} 3 & 1 \\ 1 & 2 \end{pmatrix}\right| = 5$"}

:::

:::attenzione
Il determinante è nullo esattamente quando il parallelogramma degenera in un segmento, cioè quando $u$ e $v$ sono **paralleli**. Per $u = (2, 1)$ e $v = (4, 2)$ si ha $v = 2u$, quindi le righe della matrice sono proporzionali e
$$
\begin{vmatrix} 2 & 1 \\ 4 & 2 \end{vmatrix} = 4 - 4 = 0 .
$$

::grafico{vettori="0,0,4,2,v;0,0,2,1,u" xmin=-0.5 xmax=4.6 ymin=-0.5 ymax=2.6 uguale=1 titolo="I vettori $u = (2, 1)$ e $v = (4, 2)$ stanno sulla stessa retta: il parallelogramma ha area $0$ e il determinante è nullo"}

:::

:::definizione{#regola-di-sarrus titolo="Determinante di ordine 3 e regola di Sarrus"}
Sia $A = (a_{ij}) \in M_3(\mathbb{R})$. Il **determinante** di $A$ è
$$
\begin{aligned}
\det A ={}& a_{11}a_{22}a_{33} + a_{12}a_{23}a_{31} + a_{13}a_{21}a_{32} \\[4pt]
&- a_{13}a_{22}a_{31} - a_{11}a_{23}a_{32} - a_{12}a_{21}a_{33} .
\end{aligned}
$$
La **regola di Sarrus** serve a ricordare i sei prodotti: si ricopiano a destra della matrice le prime due colonne,
$$
\left(\begin{array}{ccc|cc}
a_{11} & a_{12} & a_{13} & a_{11} & a_{12} \\
a_{21} & a_{22} & a_{23} & a_{21} & a_{22} \\
a_{31} & a_{32} & a_{33} & a_{31} & a_{32}
\end{array}\right)
$$
e si sommano i prodotti delle tre diagonali che scendono verso destra, poi si sottraggono i prodotti delle tre diagonali che scendono verso sinistra. Per esempio
$$
\begin{vmatrix} 2 & 1 & 0 \\ 1 & 3 & 1 \\ 0 & 1 & 2 \end{vmatrix}
= (12 + 0 + 0) - (0 + 2 + 2) = 8 .
$$
:::

:::attenzione
La regola di Sarrus vale *solo* per le matrici di ordine $3$. Per la matrice $J \in M_4(\mathbb{R})$ con $1$ sulla diagonale secondaria e $0$ altrove, l'analogo schema con le prime tre colonne ricopiate dà $-1$, mentre con lo sviluppo di Laplace si ottiene $\det J = 1$. Per l'ordine $n \geq 4$ si usano lo sviluppo di Laplace e le operazioni elementari.
:::

## Sviluppo di Laplace

:::definizione{#complemento-algebrico titolo="Minore complementare e complemento algebrico"}
Sia $A = (a_{ij}) \in M_n(\mathbb{R})$ con $n \geq 2$. Per ogni coppia di indici $(i, j)$ si indica con $A_{ij}$ la matrice di ordine $n - 1$ ottenuta da $A$ cancellando la riga $i$ e la colonna $j$; il suo determinante $\det A_{ij}$ è il **minore complementare** dell'elemento $a_{ij}$. Il **complemento algebrico** di $a_{ij}$ è
$$
C_{ij} = (-1)^{i+j} \det A_{ij} .
$$
Il segno $(-1)^{i+j}$ è $+$ quando $i + j$ è pari e $-$ quando è dispari, e si dispone a scacchiera con $+$ nell'angolo in alto a sinistra:
$$
\begin{pmatrix} + & - & + \\ - & + & - \\ + & - & + \end{pmatrix} .
$$
Per $A = \begin{pmatrix} 2 & 1 & 0 \\ 1 & 3 & 1 \\ 0 & 1 & 2 \end{pmatrix}$ si ha $C_{12} = -\begin{vmatrix} 1 & 1 \\ 0 & 2 \end{vmatrix} = -2$.
:::

:::definizione{#determinante titolo="Determinante di ordine n"}
Il determinante di una matrice di ordine $1$ è il suo unico elemento: $\det (a_{11}) = a_{11}$. Per $n \geq 2$ il **determinante** di $A \in M_n(\mathbb{R})$ si definisce sviluppando lungo la prima riga:
$$
\det A = a_{11} C_{11} + a_{12} C_{12} + \dots + a_{1n} C_{1n} = \sum_{j=1}^{n} a_{1j} C_{1j} .
$$
La definizione è ricorsiva: un determinante di ordine $n$ si riduce a $n$ determinanti di ordine $n - 1$. Per $n = 2$ e $n = 3$ la formula restituisce $ad - bc$ e i sei prodotti della regola di Sarrus.
:::

:::teorema{#teorema-di-laplace titolo="Teorema di Laplace"}
Sia $A \in M_n(\mathbb{R})$ con $n \geq 2$. Per *ogni* riga $i$ e per *ogni* colonna $j$ valgono
$$
\det A = \sum_{k=1}^{n} a_{ik} C_{ik}
\qquad \text{e} \qquad
\det A = \sum_{k=1}^{n} a_{kj} C_{kj} .
$$
Il determinante si può quindi sviluppare lungo una riga o una colonna qualsiasi, con lo stesso risultato. Nei calcoli si sceglie la riga o la colonna con **più zeri**, perché i termini con $a_{ik} = 0$ non richiedono il calcolo del complemento algebrico. La dimostrazione usa la scrittura del determinante come somma estesa alle permutazioni degli indici e si omette.
:::

:::esempio{titolo="Sviluppo di un determinante di ordine 4"}
$$
\det A =
\begin{vmatrix}
1 & 2 & 0 & 3 \\
0 & 1 & 0 & 2 \\
2 & 1 & 3 & 1 \\
0 & 0 & 0 & 2
\end{vmatrix}
= 2 \cdot (-1)^{4+4}
\begin{vmatrix}
1 & 2 & 0 \\
0 & 1 & 0 \\
2 & 1 & 3
\end{vmatrix}
= 2 \cdot 3 \cdot (-1)^{3+3}
\begin{vmatrix} 1 & 2 \\ 0 & 1 \end{vmatrix}
= 6 .
$$
La quarta riga ha un solo elemento non nullo, perciò lo sviluppo lungo quella riga lascia un solo determinante di ordine $3$. In questo la terza colonna ha un solo elemento non nullo, e lo sviluppo lungo la terza colonna si riduce a un determinante di ordine $2$.
:::

## Proprietà del determinante

::::teorema{#proprieta-del-determinante titolo="Proprietà del determinante"}
Sia $A \in M_n(\mathbb{R})$.

- $\det A^T = \det A$; di conseguenza ogni proprietà enunciata per le righe vale anche per le colonne.
- Se una riga di $A$ è nulla, allora $\det A = 0$.
- Se si moltiplica una riga di $A$ per $k \in \mathbb{R}$, il determinante si moltiplica per $k$.
- Se una riga di $A$ è somma di due righe $r'$ e $r''$, allora $\det A$ è la somma dei determinanti delle due matrici ottenute sostituendo a quella riga $r'$ e $r''$.
- Se si scambiano due righe, il determinante cambia segno.
- Se $A$ ha due righe uguali o proporzionali, allora $\det A = 0$.
- Se a una riga si aggiunge un multiplo di un'altra riga, il determinante non cambia.

Le proprietà permettono di calcolare un determinante senza svilupparlo e di riconoscere a vista un determinante nullo. Per esempio $\begin{vmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \\ 5 & 1 & 7 \end{vmatrix} = 0$, poiché la seconda riga è il doppio della prima.

:::dimostrazione
La prima proprietà e lo scambio di righe seguono dalla scrittura del determinante con le permutazioni e si accettano senza dimostrazione. Sviluppando lungo una riga nulla, per il **teorema di Laplace** tutti i termini sono nulli. Sviluppando lungo la riga $i$ modificata, i complementi algebrici $C_{i1}, \dots, C_{in}$ non dipendono dagli elementi della riga $i$; perciò, se la riga diventa $k$ volte la precedente, ogni termine $a_{ik} C_{ik}$ si moltiplica per $k$, e se la riga è $r' + r''$ la somma si spezza in due sviluppi. Se due righe sono uguali, scambiandole la matrice resta la stessa mentre il determinante cambia segno, quindi $\det A = -\det A$, cioè $\det A = 0$. Se la riga $j$ è $k$ volte la riga $i$, si porta fuori il fattore $k$ e resta una matrice con due righe uguali, quindi il determinante è nullo. Infine, se la riga $i$ diventa $r_i + k\, r_j$, per la proprietà della somma il nuovo determinante è $\det A$ più il determinante di una matrice in cui la riga $i$ è $k\, r_j$, proporzionale alla riga $j$; quest'ultimo è nullo, quindi il determinante non cambia.
:::
::::

:::attenzione
Moltiplicare per $k$ l'intera matrice significa moltiplicare per $k$ *ciascuna* delle $n$ righe, quindi
$$
\det (kA) = k^n \det A .
$$
Per $A \in M_3(\mathbb{R})$ con $\det A = 5$ risulta $\det (2A) = 8 \cdot 5 = 40$, e il valore $2 \cdot 5 = 10$ è errato. Il determinante inoltre *non* è additivo sulle matrici: con $A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$ e $B = \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$ si ha $\det A + \det B = 0$, mentre $\det (A + B) = \det I_2 = 1$.
:::

::::teorema{#determinante-triangolare titolo="Determinante di una matrice triangolare"}
Sia $A \in M_n(\mathbb{R})$ triangolare, superiore o inferiore. Allora il determinante è il **prodotto degli elementi diagonali**:
$$
\det A = a_{11}\, a_{22} \cdots a_{nn} .
$$
In particolare $\det I_n = 1$, e una matrice triangolare ha determinante nullo se e solo se ha almeno uno zero sulla diagonale. Il teorema è la base del calcolo con le operazioni elementari: si riduce la matrice a forma triangolare e si moltiplicano gli elementi diagonali.

:::dimostrazione
Si procede per induzione su $n$; per $n = 1$ la tesi è immediata. Sia $A$ triangolare superiore di ordine $n \geq 2$. La prima colonna ha come unico elemento eventualmente non nullo $a_{11}$, quindi per il **teorema di Laplace** lo sviluppo lungo la prima colonna dà $\det A = a_{11} \det A_{11}$. La matrice $A_{11}$ è triangolare superiore di ordine $n - 1$ con elementi diagonali $a_{22}, \dots, a_{nn}$, perciò per l'ipotesi induttiva $\det A_{11} = a_{22} \cdots a_{nn}$, e segue la tesi. Per $A$ triangolare inferiore si sviluppa lungo la prima riga, oppure si applica il caso precedente ad $A^T$, che è triangolare superiore con gli stessi elementi diagonali.
:::
::::

## Calcolo con le operazioni elementari

:::teorema{#operazioni-elementari-e-determinante titolo="Effetto delle operazioni elementari"}
Sia $A \in M_n(\mathbb{R})$ e sia $A'$ ottenuta da $A$ con una sola operazione elementare di riga. Per le proprietà del determinante:

- se l'operazione è $R_i \leftrightarrow R_j$ con $i \neq j$, allora $\det A' = -\det A$;
- se l'operazione è $R_i \to k R_i$ con $k \neq 0$, allora $\det A' = k \det A$;
- se l'operazione è $R_i \to R_i + k R_j$ con $i \neq j$, allora $\det A' = \det A$.

In ogni caso $\det A' = c \det A$ con $c \neq 0$, quindi le operazioni elementari conservano la proprietà $\det A \neq 0$. Il **metodo di calcolo** consiste nel ridurre $A$ a una matrice triangolare con operazioni elementari, tenendo conto dei cambi di segno e dei fattori, e nel moltiplicare gli elementi diagonali. Per l'ordine $n \geq 4$ il metodo richiede molti meno calcoli dello sviluppo di Laplace completo.
:::

:::esempio{titolo="Riduzione a forma triangolare"}
$$
\begin{vmatrix} 0 & 2 & 4 \\ 1 & 3 & 2 \\ 2 & 1 & 1 \end{vmatrix}
\xrightarrow{R_1 \leftrightarrow R_2}
-\begin{vmatrix} 1 & 3 & 2 \\ 0 & 2 & 4 \\ 2 & 1 & 1 \end{vmatrix}
\xrightarrow{R_3 \to R_3 - 2R_1}
-\begin{vmatrix} 1 & 3 & 2 \\ 0 & 2 & 4 \\ 0 & -5 & -3 \end{vmatrix}
$$
$$
= -2\begin{vmatrix} 1 & 3 & 2 \\ 0 & 1 & 2 \\ 0 & -5 & -3 \end{vmatrix}
\xrightarrow{R_3 \to R_3 + 5R_2}
-2\begin{vmatrix} 1 & 3 & 2 \\ 0 & 1 & 2 \\ 0 & 0 & 7 \end{vmatrix}
= -2 \cdot 7 = -14 .
$$
Lo scambio iniziale introduce il segno meno; dalla seconda riga si porta fuori il fattore $2$, per la proprietà della moltiplicazione di una riga; le operazioni del tipo $R_i \to R_i + k R_j$ non cambiano il determinante. La matrice finale è triangolare, quindi il suo determinante è il prodotto $1 \cdot 1 \cdot 7$.
:::

:::attenzione
L'operazione $R_i \to a R_i + b R_j$ con $a \neq 1$ moltiplica il determinante per $a$. Per esempio, in $\begin{vmatrix} 2 & 1 \\ 3 & 4 \end{vmatrix} = 5$ l'operazione $R_2 \to 2R_2 - 3R_1$ produce $\begin{vmatrix} 2 & 1 \\ 0 & 5 \end{vmatrix} = 10$, che è il doppio del determinante iniziale.
:::

:::osservazione{#laplace-e-operazioni titolo="Operazioni elementari e sviluppo di Laplace insieme"}
Le due tecniche si combinano: con operazioni del tipo $R_i \to R_i + k R_j$ si annullano tutti gli elementi di una colonna tranne uno, poi si sviluppa lungo quella colonna. Il determinante di ordine $n$ si riduce così a un solo determinante di ordine $n - 1$, senza cambi di valore. Per le proprietà del determinante le stesse operazioni si possono eseguire sulle colonne, per esempio sommando tutte le colonne alla prima quando le righe hanno la stessa somma.
:::

::::teorema{#determinante-matrici-elementari titolo="Determinante del prodotto per una matrice elementare"}
Sia $E \in M_n(\mathbb{R})$ una matrice elementare e sia $B \in M_n(\mathbb{R})$. Allora
$$
\det (EB) = \det E \cdot \det B ,
$$
con $\det E = -1$ per uno scambio di righe, $\det E = k$ per $R_i \to k R_i$, $\det E = 1$ per $R_i \to R_i + k R_j$. In ogni caso $\det E \neq 0$. La proposizione è il caso particolare del teorema di Binet da cui parte la dimostrazione del caso generale.

:::dimostrazione
Per il teorema sulle matrici elementari $EB$ è la matrice ottenuta da $B$ con l'operazione che definisce $E$, quindi per l'effetto delle operazioni elementari $\det (EB) = c \det B$, con $c = -1$, $c = k$ o $c = 1$ secondo il tipo. Con $B = I_n$ si ottiene $\det E = c \det I_n = c$, perciò $\det (EB) = \det E \cdot \det B$.
:::
::::

:::richiamo{titolo="Matrici elementari"}
Se $E$ è la matrice elementare di un'operazione di riga, allora $EA$ è la matrice ottenuta applicando ad $A$ quell'operazione, ed $E$ è invertibile con inversa elementare.
:::

## Determinante e invertibilità

::::teorema{#invertibilita-e-determinante titolo="Criterio di invertibilità"}
Sia $A \in M_n(\mathbb{R})$. Allora
$$
A \text{ è invertibile} \iff \det A \neq 0 .
$$
Le matrici con determinante nullo si chiamano **singolari**. Il criterio riduce la domanda sull'invertibilità al calcolo di un solo numero, ed è il punto di partenza della formula dell'inversa e della discussione delle matrici con parametro. Per esempio $\begin{pmatrix} 2 & 1 \\ 4 & 2 \end{pmatrix}$ **non è invertibile**, poiché il suo determinante è $0$.

:::dimostrazione
Si riduce $A$ a scala ridotta con operazioni elementari di riga: dette $E_1, \dots, E_r$ le matrici elementari delle operazioni usate, si ottiene $R = E_r \cdots E_1 A$. Applicando $r$ volte la proposizione sul prodotto per una matrice elementare,
$$
\det R = \det E_r \cdots \det E_1 \cdot \det A ,
$$
e poiché ogni $\det E_i$ è diverso da zero, $\det R \neq 0$ se e solo se $\det A \neq 0$. Per il **teorema di Gauss-Jordan**, se $A$ è invertibile allora $R = I_n$, quindi $\det R = 1 \neq 0$ e perciò $\det A \neq 0$. Se invece $A$ non è invertibile, l'ultima riga di $R$ è nulla, quindi $\det R = 0$ e perciò $\det A = 0$.
:::
::::

:::richiamo{titolo="Teorema di Gauss-Jordan"}
Sia $A \in M_n(\mathbb{R})$ e sia $R$ la matrice a scala ridotta ottenuta da $A$ con operazioni elementari di riga. Se $A$ è invertibile, allora $R = I_n$; se $A$ non è invertibile, allora l'ultima riga di $R$ è nulla.
:::

:::osservazione{#righe-dipendenti titolo="Determinante nullo e righe dipendenti"}
Per le proprietà del determinante, se una riga di $A$ è combinazione lineare delle altre, allora $\det A = 0$: con operazioni del tipo $R_i \to R_i + k R_j$ quella riga si annulla senza che il determinante cambi. Vale anche il viceversa, e la formulazione completa in termini di rango e di indipendenza lineare si trova negli argomenti sui sistemi lineari e sugli spazi vettoriali. Per $A = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 1 \\ 2 & 5 & 7 \end{pmatrix}$ la terza riga è $2R_1 + R_2$, quindi $\det A = 0$ e $A$ **non è invertibile**.
:::

## Teorema di Binet

::::teorema{#teorema-di-binet titolo="Teorema di Binet"}
Siano $A, B \in M_n(\mathbb{R})$. Allora
$$
\det (AB) = \det A \cdot \det B .
$$
Il teorema permette di calcolare il determinante di un prodotto *senza* eseguire il prodotto. Ne seguono due conseguenze di uso continuo: $\det (A^k) = (\det A)^k$ per ogni intero $k \geq 1$, e $\det (AB) = \det (BA)$ anche quando $AB \neq BA$. Con $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ e $B = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$ si ha
$$
AB = \begin{pmatrix} 4 & 3 \\ 10 & 7 \end{pmatrix},
\qquad
BA = \begin{pmatrix} 5 & 8 \\ 4 & 6 \end{pmatrix},
$$
due matrici diverse, entrambe con determinante $-2 = \det A \cdot \det B = (-2) \cdot 1$.

:::dimostrazione
Si distinguono due casi.

- $A$ **invertibile**. Per il teorema di Gauss-Jordan esistono matrici elementari con $E_r \cdots E_1 A = I_n$; moltiplicando a sinistra per le inverse si ottiene $A = F_1 F_2 \cdots F_r$, dove $F_i = E_i^{-1}$ è ancora elementare. Applicando $r$ volte la proposizione sul prodotto per una matrice elementare,
$$
\det (AB) = \det (F_1 F_2 \cdots F_r B) = \det F_1 \cdots \det F_r \cdot \det B ,
$$
e con $B = I_n$ la stessa uguaglianza dà $\det A = \det F_1 \cdots \det F_r$. Sostituendo si ottiene $\det (AB) = \det A \cdot \det B$.
- $A$ **non invertibile**. Per il criterio di invertibilità $\det A = 0$. Anche $AB$ non è invertibile: se lo fosse, posto $C = B\,(AB)^{-1}$ si avrebbe $AC = I_n$, e una matrice quadrata con un'inversa destra è invertibile. Quindi $\det (AB) = 0 = \det A \cdot \det B$.
:::
::::

:::richiamo{titolo="Inversa da una sola uguaglianza"}
Se $A, C \in M_n(\mathbb{R})$ e $AC = I_n$, allora anche $CA = I_n$, quindi $A$ è invertibile e $C = A^{-1}$.
:::

:::teorema{#determinante-dell-inversa titolo="Determinante dell'inversa"}
Sia $A \in M_n(\mathbb{R})$ invertibile. Allora
$$
\det (A^{-1}) = \frac{1}{\det A} .
$$
Infatti $A A^{-1} = I_n$, quindi per il **teorema di Binet** $\det A \cdot \det (A^{-1}) = \det I_n = 1$. Insieme a $\det A^T = \det A$ e a $\det (kA) = k^n \det A$, la formula permette di calcolare il determinante di espressioni come $2 A^T B^{-1}$ conoscendo solo $\det A$ e $\det B$: per $A, B \in M_3(\mathbb{R})$ con $\det A = 3$ e $\det B = -2$ si ottiene $\det (2 A^T B^{-1}) = 8 \cdot 3 \cdot \left(-\dfrac{1}{2}\right) = -12$.
:::

:::osservazione{#binet-geometrico titolo="Significato geometrico del teorema di Binet"}
Sia $A \in M_2(\mathbb{R})$. L'applicazione $x \mapsto Ax$ trasforma il quadrato di lati $e_1 = (1, 0)$ ed $e_2 = (0, 1)$ nel parallelogramma di lati $Ae_1$ e $Ae_2$, che sono le colonne di $A$; per il significato geometrico del determinante e per $\det A^T = \det A$, la sua area è $|\det A|$. Più in generale $|\det A|$ è il fattore per cui l'applicazione moltiplica le aree. Applicare prima $B$ e poi $A$ moltiplica le aree per $|\det B|$ e poi per $|\det A|$, in accordo con il teorema di Binet. Per le applicazioni lineari si rimanda all'argomento dedicato.

::grafico{area="1;0;0;1" vettori="0,0,2,1,Ae₁;0,0,1,2,Ae₂" segmenti="2,1,3,3;1,2,3,3;1,0,1,1;0,1,1,1" etichette="0.25,0.35,1;1.4,1.55,3" xmin=-0.5 xmax=3.5 ymin=-0.5 ymax=3.4 uguale=1 titolo="Con $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ il quadrato di area $1$ (colorato) diventa il parallelogramma di lati $Ae_1 = (2, 1)$ e $Ae_2 = (1, 2)$, di area $\det A = 3$"}

:::

## Inversa con la matrice dei complementi algebrici

:::definizione{#matrice-dei-complementi-algebrici titolo="Matrice dei complementi algebrici"}
Sia $A \in M_n(\mathbb{R})$ con $n \geq 2$. La **matrice dei complementi algebrici** di $A$ è la matrice $\operatorname{cof} A = (C_{ij})$ che al posto $(i, j)$ ha il complemento algebrico $C_{ij}$ di $a_{ij}$. La sua trasposta $(\operatorname{cof} A)^T$, che al posto $(i, j)$ ha $C_{ji}$, si chiama **matrice aggiunta** di $A$. Le due matrici sono gli ingredienti della formula dell'inversa.
:::

::::teorema{#formula-dell-inversa titolo="Formula dell'inversa"}
Sia $A \in M_n(\mathbb{R})$ con $n \geq 2$ e $\det A \neq 0$. Allora
$$
A^{-1} = \frac{1}{\det A}\, (\operatorname{cof} A)^T ,
$$
cioè l'elemento di posto $(i, j)$ di $A^{-1}$ è $\dfrac{C_{ji}}{\det A}$. Per $n = 2$ la formula dà
$$
\begin{pmatrix} a & b \\ c & d \end{pmatrix}^{-1}
= \frac{1}{ad - bc}
\begin{pmatrix} d & -b \\ -c & a \end{pmatrix} .
$$
Nel caso di ordine $2$ quindi si scambiano gli elementi della diagonale principale, si cambia segno agli altri due e si divide per il determinante.

:::dimostrazione
Sia $P = A\, (\operatorname{cof} A)^T$. L'elemento di posto $(i, k)$ di $P$ è il prodotto della riga $i$ di $A$ per la colonna $k$ di $(\operatorname{cof} A)^T$, cioè
$$
p_{ik} = \sum_{j=1}^{n} a_{ij}\, C_{kj} .
$$
Se $k = i$, la somma è lo sviluppo di $\det A$ lungo la riga $i$, quindi per il **teorema di Laplace** $p_{ii} = \det A$. Se $k \neq i$, sia $A'$ la matrice ottenuta da $A$ sostituendo la riga $k$ con la riga $i$. I complementi algebrici $C_{k1}, \dots, C_{kn}$ non dipendono dalla riga $k$, quindi coincidono per $A$ e per $A'$, e la somma è lo sviluppo di $\det A'$ lungo la riga $k$. Poiché $A'$ ha due righe uguali, $p_{ik} = \det A' = 0$. Perciò $P = \det A \cdot I_n$, e dividendo per $\det A \neq 0$ si ottiene $A \cdot \dfrac{1}{\det A}(\operatorname{cof} A)^T = I_n$. Per l'inversa da una sola uguaglianza, la matrice $\dfrac{1}{\det A}(\operatorname{cof} A)^T$ è l'inversa di $A$.
:::
::::

:::esempio{titolo="Inversa di una matrice di ordine 3"}
Sia $A = \begin{pmatrix} 1 & 0 & 1 \\ 1 & 1 & 0 \\ 0 & 1 & 1 \end{pmatrix}$. Lo sviluppo lungo la prima riga dà $\det A = 1 \cdot (1 - 0) - 0 + 1 \cdot (1 - 0) = 2 \neq 0$, quindi $A$ è invertibile. I nove complementi algebrici sono
$$
\begin{aligned}
C_{11} &= +\begin{vmatrix} 1 & 0 \\ 1 & 1 \end{vmatrix} = 1, &
C_{12} &= -\begin{vmatrix} 1 & 0 \\ 0 & 1 \end{vmatrix} = -1, &
C_{13} &= +\begin{vmatrix} 1 & 1 \\ 0 & 1 \end{vmatrix} = 1, \\[6pt]
C_{21} &= -\begin{vmatrix} 0 & 1 \\ 1 & 1 \end{vmatrix} = 1, &
C_{22} &= +\begin{vmatrix} 1 & 1 \\ 0 & 1 \end{vmatrix} = 1, &
C_{23} &= -\begin{vmatrix} 1 & 0 \\ 0 & 1 \end{vmatrix} = -1, \\[6pt]
C_{31} &= +\begin{vmatrix} 0 & 1 \\ 1 & 0 \end{vmatrix} = -1, &
C_{32} &= -\begin{vmatrix} 1 & 1 \\ 1 & 0 \end{vmatrix} = 1, &
C_{33} &= +\begin{vmatrix} 1 & 0 \\ 1 & 1 \end{vmatrix} = 1 .
\end{aligned}
$$
Si dispongono in $\operatorname{cof} A$, si traspone e si divide per $\det A = 2$:
$$
A^{-1} = \frac{1}{2}
\begin{pmatrix} 1 & 1 & -1 \\ -1 & 1 & 1 \\ 1 & -1 & 1 \end{pmatrix} .
$$
Il prodotto $A A^{-1}$ dà $I_3$, e questo controllo conferma il risultato.
:::

:::attenzione
La matrice dei complementi algebrici va **trasposta**. Per $A = \begin{pmatrix} 1 & 0 & 1 \\ 1 & 1 & 0 \\ 0 & 1 & 1 \end{pmatrix}$, con $\det A = 2$, si ha $\operatorname{cof} A = \begin{pmatrix} 1 & -1 & 1 \\ 1 & 1 & -1 \\ -1 & 1 & 1 \end{pmatrix}$, e la matrice $\dfrac{1}{2}\operatorname{cof} A$ ha prima riga $\left(\dfrac{1}{2}, -\dfrac{1}{2}, \dfrac{1}{2}\right)$; il prodotto di questa riga per la prima colonna di $A$ vale $\dfrac{1}{2} - \dfrac{1}{2} + 0 = 0$, mentre in $I_3$ quell'elemento vale $1$. Solo per le matrici simmetriche la trasposizione non cambia $\operatorname{cof} A$.
:::

:::osservazione{#elemento-dell-inversa titolo="Un solo elemento dell'inversa"}
Quando serve un solo elemento di $A^{-1}$, la formula dell'inversa evita il calcolo completo:
$$
(A^{-1})_{ij} = \frac{C_{ji}}{\det A} ,
$$
con gli indici scambiati. Per $A = \begin{pmatrix} 1 & 0 & 1 \\ 1 & 1 & 0 \\ 0 & 1 & 1 \end{pmatrix}$, con $\det A = 2$, risulta $(A^{-1})_{13} = \dfrac{C_{31}}{2} = -\dfrac{1}{2}$. Per matrici di ordine $n \geq 4$ l'inversa completa si calcola di solito con il metodo di Gauss-Jordan, descritto nell'argomento sulle matrici, perché la formula richiede $n^2$ determinanti di ordine $n - 1$.
:::

## Determinanti con parametro

:::osservazione{#determinanti-con-parametro titolo="Matrici con parametro"}
Se gli elementi di $A_k$ dipendono da un parametro reale $k$, il determinante $\det A_k$ è un **polinomio** in $k$. Per il criterio di invertibilità, $A_k$ è invertibile per tutti i valori di $k$ che *non* annullano questo polinomio. Il metodo è quindi:

- si calcola $\det A_k$ cercando di ottenerlo già **fattorizzato**, con operazioni elementari che fanno comparire fattori comuni prima dello sviluppo;
- si risolve l'equazione $\det A_k = 0$;
- si conclude che $A_k$ è invertibile per i valori di $k$ diversi dalle radici trovate.

Lo sviluppo diretto produce un polinomio di grado alto da fattorizzare; le operazioni del tipo $R_i \to R_i + h R_j$ con $h$ numerico, invece, non cambiano il determinante e spesso fanno comparire un fattore comune in una riga.
:::

:::esempio{titolo="Invertibilità al variare del parametro"}
$$
\det A_k =
\begin{vmatrix} 1 & 1 & 1 \\ 1 & k & 1 \\ 1 & 1 & k \end{vmatrix}
\xrightarrow[R_3 \to R_3 - R_1]{R_2 \to R_2 - R_1}
\begin{vmatrix} 1 & 1 & 1 \\ 0 & k - 1 & 0 \\ 0 & 0 & k - 1 \end{vmatrix}
= (k - 1)^2 .
$$
Le due operazioni non cambiano il determinante e producono una matrice triangolare, il cui determinante è il prodotto degli elementi diagonali. Il determinante si annulla solo per $k = 1$, quindi $A_k$ è **invertibile per ogni $k \neq 1$**.
:::

:::attenzione
Un'operazione $R_i \to h R_i$ con $h$ dipendente dal parametro moltiplica il determinante per $h$, e per i valori di $k$ che annullano $h$ l'operazione non è più invertibile. Con $A_k = \begin{pmatrix} k & 1 \\ 1 & 1 \end{pmatrix}$, l'operazione $R_2 \to k R_2 - R_1$ produce $\begin{pmatrix} k & 1 \\ 0 & k - 1 \end{pmatrix}$, di determinante $k(k - 1)$; il valore corretto è $\det A_k = k - 1$, e la radice $k = 0$ è stata introdotta dall'operazione. Le operazioni con il parametro si usano tenendo conto del fattore, oppure si sostituiscono con operazioni a coefficienti numerici.
:::
