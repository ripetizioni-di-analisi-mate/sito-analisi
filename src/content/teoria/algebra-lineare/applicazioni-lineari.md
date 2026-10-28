---
titolo: Applicazioni lineari
sommario: Le funzioni tra spazi vettoriali che conservano somme e prodotti per scalare, la matrice che le rappresenta, nucleo e immagine, il teorema della dimensione, gli isomorfismi, la composizione e il cambiamento di base.
---

## Definizione ed esempi

:::definizione{#applicazione-lineare titolo="Applicazione lineare"}
Siano $V$ e $W$ spazi vettoriali reali. Una funzione $f : V \to W$ è un'**applicazione lineare** se per ogni $u, v \in V$ e per ogni $\lambda \in \mathbb{R}$ le due condizioni sono soddisfatte insieme:
$$
\begin{cases}
f(u + v) = f(u) + f(v) \\[4pt]
f(\lambda v) = \lambda f(v)
\end{cases}
$$
Un'applicazione lineare di $V$ in sé stesso si chiama **endomorfismo** di $V$. Le due condizioni equivalgono all'unica condizione $f(\alpha u + \beta v) = \alpha f(u) + \beta f(v)$ per ogni $u, v \in V$ e $\alpha, \beta \in \mathbb{R}$; per induzione, $f$ trasforma *ogni* combinazione lineare nella combinazione lineare delle immagini con gli stessi coefficienti. Su questa proprietà si basano la matrice associata e la costruzione di $f$ a partire dai valori su una base.
:::

:::teorema{#proprieta-elementari titolo="Prime proprietà"}
Sia $f : V \to W$ lineare. Allora $f(0_V) = 0_W$ e $f(-v) = -f(v)$ per ogni $v \in V$. Infatti, ponendo $\lambda = 0$ nella seconda condizione si ottiene $f(0_V) = f(0 \cdot 0_V) = 0 \cdot f(0_V) = 0_W$, e ponendo $\lambda = -1$ si ottiene la seconda uguaglianza. La prima proprietà fornisce un controllo immediato, perché un'applicazione con $f(0_V) \neq 0_W$ **non è lineare**.
:::

:::esempio{titolo="Le applicazioni lineari dell'esame"}
- Per ogni $A \in M_{m,n}(\mathbb{R})$ la funzione $f_A : \mathbb{R}^n \to \mathbb{R}^m$, $f_A(x) = Ax$, è lineare, poiché il prodotto righe per colonne soddisfa $A(x + y) = Ax + Ay$ e $A(\lambda x) = \lambda\, Ax$. Sono di questo tipo tutte le funzioni come $f(x, y, z) = (x + 2y,\ y - z)$, in cui ogni componente è un polinomio di primo grado senza termine noto.
- La derivata $D : \mathbb{R}_n[x] \to \mathbb{R}_{n-1}[x]$, $D(p) = p'$, è lineare, poiché la derivata di una somma è la somma delle derivate e le costanti moltiplicative si portano fuori.
- La trasposizione $M_n(\mathbb{R}) \to M_n(\mathbb{R})$, $A \mapsto A^T$, e la traccia $M_n(\mathbb{R}) \to \mathbb{R}$, $A \mapsto \operatorname{tr} A$, sono lineari.
- La rotazione di un angolo retto attorno all'origine, $R(x, y) = (-y, x)$, è lineare. Ruotando il parallelogramma costruito su $u$ e $v$ si ottiene il parallelogramma costruito su $R(u)$ e $R(v)$, quindi la diagonale $u + v$ va nella diagonale $R(u) + R(v)$.

::grafico{vettori="0,0,2,1,u;0,0,1,2,v;0,0,3,3,u + v;0,0,-1,2,R(u);0,0,-2,1,R(v);0,0,-3,3,R(u + v)" segmenti="2,1,3,3;1,2,3,3;-1,2,-3,3;-2,1,-3,3" xmin=-3.8 xmax=3.8 ymin=-0.6 ymax=3.7 uguale=1 titolo="La rotazione $R(x, y) = (-y, x)$ manda il parallelogramma costruito su $u = (2, 1)$ e $v = (1, 2)$ in quello costruito su $R(u)$ e $R(v)$, perciò $R(u + v) = R(u) + R(v)$"}

:::

:::attenzione
La condizione $f(0_V) = 0_W$ è *necessaria* e non sufficiente per la linearità.

- $f(x, y) = (x + 1,\ y)$ non è lineare, poiché $f(0, 0) = (1, 0)$.
- $g(x, y) = (xy,\ x)$ verifica $g(0, 0) = (0, 0)$ e non è lineare, poiché $g(2, 2) = (4, 2)$ è diverso da $2\, g(1, 1) = (2, 2)$.

Per escludere la linearità basta un controesempio numerico; per dimostrarla servono le due condizioni con vettori e scalari generici.
:::

## Applicazioni definite sui vettori di una base

::::teorema{#esistenza-e-unicita titolo="Esistenza e unicità sui vettori di una base"}
Sia $\mathcal{B} = (v_1, \dots, v_n)$ una base di $V$ e siano $w_1, \dots, w_n$ vettori qualsiasi di $W$. Allora esiste una e una sola applicazione lineare $f : V \to W$ tale che $f(v_i) = w_i$ per $i = 1, \dots, n$, ed è data da
$$
f(a_1 v_1 + \dots + a_n v_n) = a_1 w_1 + \dots + a_n w_n .
$$
Un'applicazione lineare è quindi **determinata dai valori su una base**, e questi valori si possono scegliere liberamente. Per calcolare $f(v)$ si scrive $v$ come combinazione dei vettori della base e si sostituisce ogni $v_i$ con $w_i$.

:::dimostrazione
Per l'unicità delle coordinate ogni $v \in V$ si scrive in un solo modo come $v = a_1 v_1 + \dots + a_n v_n$, quindi la formula definisce una funzione $f : V \to W$; inoltre $f(v_i) = w_i$, perché le coordinate di $v_i$ sono $1$ al posto $i$ e $0$ altrove. Se $u = b_1 v_1 + \dots + b_n v_n$, allora $\alpha u + \beta v = \sum_{i} (\alpha b_i + \beta a_i)\, v_i$, perciò
$$
f(\alpha u + \beta v) = \sum_{i=1}^{n} (\alpha b_i + \beta a_i)\, w_i = \alpha f(u) + \beta f(v) ,
$$
cioè $f$ è lineare. Se $g$ è un'altra applicazione lineare con $g(v_i) = w_i$, per la linearità $g(v) = \sum_i a_i\, g(v_i) = \sum_i a_i w_i = f(v)$ per ogni $v$, quindi $g = f$.
:::
::::

:::richiamo{titolo="Unicità delle coordinate"}
Se $\mathcal{B} = (v_1, \dots, v_n)$ è una base di $V$, ogni $v \in V$ si scrive in uno e un solo modo come $v = a_1 v_1 + \dots + a_n v_n$.
:::

:::esempio{titolo="Un'applicazione assegnata su una base del piano"}
Si cerca $f : \mathbb{R}^2 \to \mathbb{R}^3$ lineare con $f(1, 1) = (2, 0, 1)$ e $f(1, 2) = (1, 1, 0)$. I vettori $(1, 1)$ e $(1, 2)$ formano una base di $\mathbb{R}^2$, poiché non sono proporzionali, quindi $f$ **esiste ed è unica**. Si scrive $(x, y) = a\,(1, 1) + b\,(1, 2)$, cioè
$$
\begin{cases}
a + b = x \\[4pt]
a + 2b = y
\end{cases}
\quad\Longrightarrow\quad
a = 2x - y, \quad b = y - x ,
$$
e per la linearità
$$
\begin{aligned}
f(x, y) &= (2x - y)\,(2, 0, 1) + (y - x)\,(1, 1, 0) \\[6pt]
&= (3x - y,\ -x + y,\ 2x - y) .
\end{aligned}
$$
:::

:::osservazione{#valori-su-vettori-dipendenti titolo="Valori assegnati su vettori dipendenti"}
Se i valori sono assegnati su vettori $u_1, \dots, u_k$ *linearmente dipendenti*, ogni relazione tra i vettori deve valere anche tra i valori: per esempio, da $u_3 = u_1 + u_2$ segue che una $f$ lineare soddisfa $f(u_3) = f(u_1) + f(u_2)$. Se tutte le relazioni sono rispettate, $f$ esiste, ed è unica *solo se* $u_1, \dots, u_k$ generano $V$; se una relazione non è rispettata, $f$ **non esiste**. Non esiste, per esempio, un'applicazione lineare $f : \mathbb{R}^2 \to \mathbb{R}^2$ con $f(1, 0) = (1, 1)$, $f(0, 1) = (2, 0)$ e $f(1, 1) = (3, 2)$, poiché da $(1, 1) = (1, 0) + (0, 1)$ seguirebbe $f(1, 1) = (3, 1)$.
:::

## La matrice associata

:::definizione{#matrice-associata titolo="Matrice associata"}
Siano $\mathcal{B} = (v_1, \dots, v_n)$ una base di $V$, $\mathcal{C} = (w_1, \dots, w_m)$ una base di $W$ e $f : V \to W$ lineare. Per ogni vettore $v$ si indica con $[v]_{\mathcal{B}}$ la colonna delle sue coordinate rispetto a $\mathcal{B}$. La **matrice associata** a $f$ rispetto alle basi $\mathcal{B}$ e $\mathcal{C}$ è la matrice $M^{\mathcal{B}}_{\mathcal{C}}(f) \in M_{m,n}(\mathbb{R})$ che ha come colonna $j$-esima $[f(v_j)]_{\mathcal{C}}$, cioè le coordinate rispetto a $\mathcal{C}$ dell'immagine del $j$-esimo vettore di $\mathcal{B}$. La matrice ha tante colonne quanta è la dimensione del dominio e tante righe quanta è la dimensione del codominio. Per il teorema di esistenza e unicità essa contiene tutta l'informazione su $f$.
:::

::::teorema{#matrice-e-coordinate titolo="Coordinate dell'immagine"}
Nelle ipotesi della definizione, per ogni $v \in V$
$$
[f(v)]_{\mathcal{C}} = M^{\mathcal{B}}_{\mathcal{C}}(f)\, [v]_{\mathcal{B}} .
$$
La matrice associata trasforma le coordinate di $v$ nelle coordinate di $f(v)$, quindi ogni calcolo su $f$ diventa un **calcolo con le matrici**, anche quando $V$ e $W$ sono spazi di polinomi o di matrici.

:::dimostrazione
Siano $[v]_{\mathcal{B}} = (a_1, \dots, a_n)$, cioè $v = a_1 v_1 + \dots + a_n v_n$, e $M^{\mathcal{B}}_{\mathcal{C}}(f) = (c_{ij})$, così che $f(v_j) = \sum_{i=1}^{m} c_{ij} w_i$. Per la linearità
$$
f(v) = \sum_{j=1}^{n} a_j f(v_j) = \sum_{j=1}^{n} a_j \sum_{i=1}^{m} c_{ij} w_i = \sum_{i=1}^{m} \Big( \sum_{j=1}^{n} c_{ij} a_j \Big) w_i ,
$$
quindi la coordinata $i$-esima di $f(v)$ è $\sum_{j} c_{ij} a_j$, che è l'elemento $i$-esimo del prodotto $M^{\mathcal{B}}_{\mathcal{C}}(f)\, [v]_{\mathcal{B}}$.
:::
::::

:::osservazione{#matrice-rispetto-alle-basi-canoniche titolo="Matrice rispetto alle basi canoniche"}
Per $f : \mathbb{R}^n \to \mathbb{R}^m$ con le basi canoniche le coordinate coincidono con le componenti, quindi la matrice associata $A$ ha per colonne $f(e_1), \dots, f(e_n)$ e $f(x) = Ax$. In pratica la matrice si legge dai coefficienti, perché la riga $i$-esima contiene i coefficienti della componente $i$-esima di $f$. Per $f(x, y, z) = (x + 2y,\ y - z)$ si ha
$$
A =
\begin{pmatrix}
1 & 2 & 0 \\
0 & 1 & -1
\end{pmatrix} .
$$
:::

:::esempio{titolo="Immagine di un quadrato"}
L'endomorfismo di $\mathbb{R}^2$ con matrice
$$
A =
\begin{pmatrix}
2 & 1 \\
1 & 2
\end{pmatrix}
$$
manda $e_1$ in $(2, 1)$ ed $e_2$ in $(1, 2)$. Ogni punto del quadrato $[0, 1] \times [0, 1]$ si scrive $a e_1 + b e_2$ con $a, b \in [0, 1]$, e la sua immagine è $a\,(2, 1) + b\,(1, 2)$, quindi il quadrato va nel **parallelogramma** costruito sulle colonne di $A$, con i lati opposti che restano paralleli.

::grafico{area="(5*x+3-abs(3*x-3))/4;(5*x/2-3+abs(3-3*x/2))/2;0;3" vettori="0,0,1,0,e₁;0,0,0,1,e₂;0,0,2,1,f(e₁);0,0,1,2,f(e₂)" segmenti="1,0,1,1;0,1,1,1" xmin=-0.5 xmax=3.6 ymin=-0.5 ymax=3.4 uguale=1 titolo="Il quadrato $[0, 1] \times [0, 1]$ (tratteggiato) e la sua immagine tramite $A$: il parallelogramma colorato costruito su $f(e_1) = (2, 1)$ e $f(e_2) = (1, 2)$"}

:::

:::esempio{titolo="La derivata sui polinomi"}
Sia $D : \mathbb{R}_2[x] \to \mathbb{R}_1[x]$, $D(p) = p'$, con le basi $(1, x, x^2)$ e $(1, x)$. Poiché $D(1) = 0$, $D(x) = 1$ e $D(x^2) = 2x$, le colonne della matrice sono le coordinate di questi tre polinomi:
$$
M(D) =
\begin{pmatrix}
0 & 1 & 0 \\
0 & 0 & 2
\end{pmatrix} .
$$
Per $p(x) = 3 - x + 5x^2$, con coordinate $(3, -1, 5)$, il prodotto $M(D)\,(3, -1, 5)^T = (-1, 10)^T$ dà le coordinate di $p'(x) = -1 + 10x$, come si verifica derivando direttamente.
:::

## Nucleo e immagine

:::definizione{#nucleo-e-immagine titolo="Nucleo e immagine"}
Sia $f : V \to W$ lineare. Il **nucleo** di $f$ è l'insieme dei vettori di $V$ che hanno immagine nulla,
$$
\ker f = \{ v \in V : f(v) = 0_W \} ,
$$
e l'**immagine** di $f$ è l'insieme dei valori assunti,
$$
\operatorname{Im} f = \{ f(v) : v \in V \} \subseteq W .
$$
Il nucleo raccoglie i vettori che $f$ annulla, l'immagine i vettori di $W$ che vengono raggiunti. Il primo serve a decidere l'iniettività, la seconda la suriettività.
:::

::::teorema{#nucleo-e-immagine-sottospazi titolo="Nucleo e immagine sono sottospazi"}
Sia $f : V \to W$ lineare. Allora $\ker f$ è un sottospazio di $V$ e $\operatorname{Im} f$ è un sottospazio di $W$. Ha quindi senso cercarne una base e la dimensione, con i metodi dell'argomento sugli spazi vettoriali.

:::dimostrazione
Si applica il **criterio di sottospazio**. Poiché $f(0_V) = 0_W$, il vettore nullo appartiene a $\ker f$. Se $u, v \in \ker f$ e $\lambda \in \mathbb{R}$, allora $f(u + v) = f(u) + f(v) = 0_W$ e $f(\lambda u) = \lambda f(u) = 0_W$, quindi $u + v$ e $\lambda u$ appartengono a $\ker f$. Per l'immagine, $0_W = f(0_V) \in \operatorname{Im} f$; se $w_1 = f(u)$ e $w_2 = f(v)$, allora $w_1 + w_2 = f(u + v)$ e $\lambda w_1 = f(\lambda u)$ appartengono a $\operatorname{Im} f$.
:::
::::

:::richiamo{titolo="Criterio di sottospazio"}
Un sottoinsieme $U \subseteq V$ è un sottospazio se e solo se $0 \in U$, $u + v \in U$ per ogni $u, v \in U$ e $\lambda u \in U$ per ogni $u \in U$ e $\lambda \in \mathbb{R}$.
:::

:::teorema{#generatori-dell-immagine titolo="Generatori dell'immagine e rango"}
Se $v_1, \dots, v_n$ generano $V$, allora $f(v_1), \dots, f(v_n)$ generano $\operatorname{Im} f$. Infatti ogni vettore dell'immagine è $f(v)$ con $v = \sum_i a_i v_i$, quindi $f(v) = \sum_i a_i f(v_i)$. Per $f(x) = Ax$ con le basi canoniche i vettori $f(e_j)$ sono le colonne di $A$, perciò l'immagine è il sottospazio generato dalle **colonne** di $A$ e
$$
\dim \operatorname{Im} f = \operatorname{rk} A .
$$
L'uguaglianza vale per la matrice associata rispetto a basi qualsiasi, poiché le sue colonne sono le coordinate dei generatori $f(v_j)$ e il passaggio alle coordinate conserva l'indipendenza lineare. Il numero $\dim \operatorname{Im} f$ si chiama **rango** di $f$.
:::

:::osservazione{#calcolo-di-nucleo-e-immagine titolo="Il calcolo di nucleo e immagine"}
Sia $A \in M_{m,n}(\mathbb{R})$ la matrice di $f$ rispetto alle basi canoniche.

- Il nucleo è l'insieme delle soluzioni del sistema omogeneo $Ax = 0$, che si risolve con la riduzione a scala. I parametri liberi sono $n - \operatorname{rk} A$ e ciascuno fornisce un vettore di una base del nucleo (si rimanda all'argomento sui sistemi lineari).
- L'immagine è generata dalle colonne di $A$; una base è formata dalle colonne di $A$ che corrispondono ai pivot della forma a scala. Per scrivere l'immagine in forma cartesiana si impone che il vettore generico $(x, y, z)$ dipenda linearmente dai vettori della base, per esempio annullando un determinante.
:::

:::esempio{titolo="Nucleo e immagine nello spazio"}
Sia $f(x, y, z) = (x + y,\ y - z,\ x + z)$. La riduzione a scala della matrice dà
$$
\begin{pmatrix}
1 & 1 & 0 \\
0 & 1 & -1 \\
1 & 0 & 1
\end{pmatrix}
\xrightarrow{R_3 \to R_3 - R_1}
\begin{pmatrix}
1 & 1 & 0 \\
0 & 1 & -1 \\
0 & -1 & 1
\end{pmatrix}
\xrightarrow{R_3 \to R_3 + R_2}
\begin{pmatrix}
1 & 1 & 0 \\
0 & 1 & -1 \\
0 & 0 & 0
\end{pmatrix} ,
$$
quindi il rango è $2$. Il sistema ridotto dà $y = z$ e $x = -y = -z$, perciò $\ker f = \langle (-1, 1, 1) \rangle$. I pivot sono nelle prime due colonne, perciò $\operatorname{Im} f = \langle (1, 0, 1), (1, 1, 0) \rangle$, e la condizione
$$
\begin{vmatrix}
1 & 1 & x \\
0 & 1 & y \\
1 & 0 & z
\end{vmatrix}
= -x + y + z = 0
$$
dà l'equazione cartesiana $x - y - z = 0$ dell'immagine, che è un piano per l'origine.
:::

:::esempio{titolo="Nucleo e immagine nel piano"}
Sia $f(x, y) = (x - 2y,\ 2x - 4y)$. La seconda componente è il doppio della prima, quindi $f(x, y) = (x - 2y)\,(1, 2)$. Il nucleo è dato da $x - 2y = 0$, cioè $\ker f = \langle (2, 1) \rangle$, la retta $y = \dfrac{x}{2}$; l'immagine è $\operatorname{Im} f = \langle (1, 2) \rangle$, la retta $y = 2x$. L'applicazione schiaccia tutto il piano sulla retta $y = 2x$, e i punti di ogni retta parallela al nucleo hanno la stessa immagine, poiché $f(v + t\,(2, 1)) = f(v)$ per ogni $t$.

::grafico{f="2*x;x/2" vettori="0,0,2,1;0,0,1,2" etichette="1.2,3.2,Im f;2.7,0.9,ker f" xmin=-2 xmax=3.5 ymin=-1.5 ymax=3.6 uguale=1 titolo="L'immagine $y = 2x$ e il nucleo $y = \dfrac{x}{2}$ (tratteggiato) di $f(x, y) = (x - 2y,\ 2x - 4y)$"}

:::

## Iniettività e suriettività

::::teorema{#iniettivita-e-nucleo titolo="Iniettività e nucleo"}
Sia $f : V \to W$ lineare. Allora $f$ è iniettiva se e solo se $\ker f = \{0_V\}$. Per stabilire l'iniettività basta quindi verificare che il sistema omogeneo associato abbia la **sola soluzione nulla**, invece di confrontare le immagini di tutte le coppie di vettori.

:::dimostrazione
Se $f$ è iniettiva e $v \in \ker f$, allora $f(v) = 0_W = f(0_V)$, quindi $v = 0_V$. Viceversa, sia $\ker f = \{0_V\}$ e siano $u, v \in V$ con $f(u) = f(v)$. Per la linearità $f(u - v) = f(u) - f(v) = 0_W$, perciò $u - v \in \ker f$, cioè $u - v = 0_V$ e $u = v$.
:::
::::

:::teorema{#suriettivita titolo="Suriettività e rango"}
Sia $f : V \to W$ lineare con $\dim W = m$ e sia $A$ una sua matrice associata. Allora $f$ è suriettiva se e solo se $\operatorname{rk} A = m$, cioè se il rango è uguale al numero delle righe. Infatti $f$ è suriettiva quando $\operatorname{Im} f = W$, e poiché $\operatorname{Im} f$ è un sottospazio di $W$, questo accade se e solo se $\dim \operatorname{Im} f = \dim W$. Per $f(x, y, z) = (x + y + z,\ x - y)$ il rango è $2$, quindi $f$ è **suriettiva** su $\mathbb{R}^2$.
:::

::::teorema{#immagine-di-vettori-indipendenti titolo="Applicazioni iniettive e vettori indipendenti"}
Sia $f : V \to W$ lineare e iniettiva. Se $v_1, \dots, v_k$ sono linearmente indipendenti, allora anche $f(v_1), \dots, f(v_k)$ sono linearmente indipendenti. In particolare un'applicazione iniettiva trasforma una base di $V$ in una base di $\operatorname{Im} f$, e quindi $\dim \operatorname{Im} f = \dim V$.

:::dimostrazione
Sia $a_1 f(v_1) + \dots + a_k f(v_k) = 0_W$. Per la linearità $f(a_1 v_1 + \dots + a_k v_k) = 0_W$, quindi $a_1 v_1 + \dots + a_k v_k \in \ker f = \{0_V\}$. Poiché i vettori $v_i$ sono indipendenti, $a_1 = \dots = a_k = 0$.
:::
::::

:::attenzione
Senza l'iniettività l'indipendenza *non* si conserva. La proiezione $f(x, y) = (x, 0)$ manda i vettori indipendenti $(1, 0)$ e $(1, 1)$ nello stesso vettore $(1, 0)$, in accordo con il fatto che $\ker f$ è l'asse $y$.
:::

## Il teorema della dimensione

::::teorema{#teorema-della-dimensione titolo="Teorema della dimensione"}
Sia $V$ di dimensione finita e sia $f : V \to W$ lineare. Allora
$$
\dim V = \dim \ker f + \dim \operatorname{Im} f .
$$
Il teorema è detto anche teorema di nullità più rango, perché $\dim \ker f$ si chiama nullità di $f$. Calcolata una delle due dimensioni, l'altra segue senza ulteriori conti. Se $A \in M_{m,n}(\mathbb{R})$ è una matrice associata a $f$, si ottiene $\dim \ker f = n - \operatorname{rk} A$, che è il numero dei parametri liberi del sistema $Ax = 0$.

:::dimostrazione
Sia $(u_1, \dots, u_k)$ una base di $\ker f$, con $k = 0$ se il nucleo è nullo, e la si completi a una base $(u_1, \dots, u_k, v_1, \dots, v_r)$ di $V$, così che $\dim V = k + r$. Basta dimostrare che $f(v_1), \dots, f(v_r)$ formano una base di $\operatorname{Im} f$. Le immagini dei vettori di una base generano $\operatorname{Im} f$ e $f(u_i) = 0_W$, quindi $f(v_1), \dots, f(v_r)$ generano $\operatorname{Im} f$. Per l'indipendenza, sia $b_1 f(v_1) + \dots + b_r f(v_r) = 0_W$. Allora $b_1 v_1 + \dots + b_r v_r \in \ker f$, quindi esistono $a_1, \dots, a_k$ con
$$
b_1 v_1 + \dots + b_r v_r = a_1 u_1 + \dots + a_k u_k .
$$
Poiché $u_1, \dots, u_k, v_1, \dots, v_r$ sono indipendenti, tutti i coefficienti sono nulli, in particolare $b_1 = \dots = b_r = 0$. Perciò $\dim \operatorname{Im} f = r = \dim V - \dim \ker f$.
:::
::::

:::richiamo{titolo="Completamento a una base"}
Se $\dim V = n$ e $u_1, \dots, u_k \in V$ sono linearmente indipendenti, con $k < n$, allora esistono $v_1, \dots, v_{n-k} \in V$ tali che $(u_1, \dots, u_k, v_1, \dots, v_{n-k})$ è una base di $V$.
:::

:::teorema{#conseguenze-del-teorema-della-dimensione titolo="Conseguenze del teorema della dimensione"}
Sia $f : V \to W$ lineare, con $\dim V = n$ e $\dim W = m$, e sia $A$ una sua matrice associata.

- $f$ è iniettiva se e solo se $\operatorname{rk} A = n$; se $n > m$, $f$ **non è iniettiva**.
- $f$ è suriettiva se e solo se $\operatorname{rk} A = m$; se $n < m$, $f$ **non è suriettiva**.
- Se $n = m$, $f$ è iniettiva se e solo se è suriettiva, e ciò accade se e solo se $\det A \neq 0$.

Per il teorema, $\dim \ker f = 0$ equivale a $\dim \operatorname{Im} f = n$, cioè a $\operatorname{rk} A = n$; poiché $\operatorname{rk} A \leq m$, questo è impossibile se $n > m$. Il secondo punto segue dal criterio di suriettività e dalla disuguaglianza $\operatorname{rk} A \leq n$. Il terzo unisce i primi due, poiché per una matrice quadrata il rango è massimo se e solo se il determinante è diverso da zero. Nessuna applicazione lineare $\mathbb{R}^3 \to \mathbb{R}^2$ è iniettiva e nessuna $\mathbb{R}^2 \to \mathbb{R}^3$ è suriettiva.
:::

:::esempio{titolo="La derivata sui polinomi di grado al più tre"}
Sia $D : \mathbb{R}_3[x] \to \mathbb{R}_3[x]$, $D(p) = p'$. Il nucleo è formato dai polinomi costanti, quindi $\dim \ker D = 1$. L'immagine è $\mathbb{R}_2[x]$, poiché ogni polinomio di grado al più due è la derivata di un polinomio di grado al più tre, quindi $\dim \operatorname{Im} D = 3$. La somma $1 + 3 = 4$ è $\dim \mathbb{R}_3[x]$, come prevede il teorema. L'endomorfismo $D$ **non è iniettivo** e, in accordo con la terza conseguenza, non è neanche suriettivo.
:::

## Isomorfismi

:::definizione{#isomorfismo titolo="Isomorfismo"}
Un'applicazione lineare $f : V \to W$ biiettiva si chiama **isomorfismo**, e due spazi tra cui esiste un isomorfismo si dicono **isomorfi**. La funzione inversa $f^{-1} : W \to V$ è ancora lineare. Infatti, se $w_1 = f(v_1)$ e $w_2 = f(v_2)$, dalla linearità di $f$ segue $f(\alpha v_1 + \beta v_2) = \alpha w_1 + \beta w_2$, quindi
$$
f^{-1}(\alpha w_1 + \beta w_2) = \alpha v_1 + \beta v_2 = \alpha f^{-1}(w_1) + \beta f^{-1}(w_2) .
$$
Un isomorfismo trasforma basi in basi e sottospazi in sottospazi della stessa dimensione, perciò due spazi isomorfi si studiano con gli stessi calcoli.
:::

::::teorema{#isomorfismo-e-dimensione titolo="Spazi isomorfi e dimensione"}
Siano $V$ e $W$ di dimensione finita. Allora $V$ e $W$ sono isomorfi se e solo se $\dim V = \dim W$. La dimensione è quindi l'*unica* informazione che distingue due spazi vettoriali di dimensione finita.

:::dimostrazione
Se $f : V \to W$ è un isomorfismo, allora $\ker f = \{0_V\}$ e $\operatorname{Im} f = W$, quindi per il **teorema della dimensione** $\dim V = 0 + \dim W$. Viceversa, sia $\dim V = \dim W = n$ e siano $(v_1, \dots, v_n)$ una base di $V$ e $(w_1, \dots, w_n)$ una base di $W$. Per il teorema di esistenza e unicità esiste $f$ lineare con $f(v_i) = w_i$; la sua immagine contiene una base di $W$, quindi $f$ è suriettiva, e per le conseguenze del teorema della dimensione è anche iniettiva.
:::
::::

:::esempio{#isomorfismo-delle-coordinate titolo="L'isomorfismo delle coordinate"}
Sia $\mathcal{B}$ una base di $V$, con $\dim V = n$. La funzione $V \to \mathbb{R}^n$ che associa a $v$ la colonna delle coordinate $[v]_{\mathcal{B}}$ è l'applicazione lineare che manda la base $\mathcal{B}$ nella base canonica, ed è un **isomorfismo**. Perciò $\mathbb{R}_2[x]$ è isomorfo a $\mathbb{R}^3$ e $M_2(\mathbb{R})$ è isomorfo a $\mathbb{R}^4$, e le domande su indipendenza, generatori e basi di polinomi o matrici si risolvono sulle coordinate in $\mathbb{R}^n$. Il polinomio $2 - x + 3x^2$ corrisponde a $(2, -1, 3)$, la matrice $\begin{pmatrix} 1 & 0 \\ 4 & -2 \end{pmatrix}$ corrisponde a $(1, 0, 4, -2)$.
:::

:::teorema{#isomorfismi-e-determinante titolo="Isomorfismi e determinante"}
Sia $f : V \to W$ lineare con $\dim V = \dim W = n$ e sia $A$ una sua matrice associata. Allora $f$ è un isomorfismo se e solo se $\det A \neq 0$. È la terza conseguenza del teorema della dimensione: per $f$ iniettività e suriettività coincidono, ed equivalgono a $\operatorname{rk} A = n$. Per $f(x, y) = (x + y,\ x + 2y)$ il determinante della matrice è $1 \cdot 2 - 1 \cdot 1 = 1 \neq 0$, quindi $f$ è un **isomorfismo** di $\mathbb{R}^2$.
:::

## Composizione e prodotto di matrici

::::teorema{#composizione titolo="Matrice della composizione"}
Siano $f : U \to V$ e $g : V \to W$ lineari e siano $\mathcal{A}$, $\mathcal{B}$, $\mathcal{C}$ basi di $U$, $V$, $W$. Allora $g \circ f : U \to W$ è lineare e
$$
M^{\mathcal{A}}_{\mathcal{C}}(g \circ f) = M^{\mathcal{B}}_{\mathcal{C}}(g)\, M^{\mathcal{A}}_{\mathcal{B}}(f) .
$$
Comporre applicazioni lineari corrisponde a **moltiplicare le matrici** nell'ordine in cui si scrive la composizione, quindi la matrice dell'applicazione eseguita per prima sta a destra. La definizione del prodotto righe per colonne è quella che rende vera questa regola.

:::dimostrazione
Per $u_1, u_2 \in U$ e $\alpha, \beta \in \mathbb{R}$, la linearità di $f$ e poi quella di $g$ danno
$$
g(f(\alpha u_1 + \beta u_2)) = g(\alpha f(u_1) + \beta f(u_2)) = \alpha\, g(f(u_1)) + \beta\, g(f(u_2)) ,
$$
quindi $g \circ f$ è lineare. Applicando due volte il teorema sulle coordinate dell'immagine, per ogni $u \in U$
$$
[g(f(u))]_{\mathcal{C}} = M^{\mathcal{B}}_{\mathcal{C}}(g)\, [f(u)]_{\mathcal{B}} = M^{\mathcal{B}}_{\mathcal{C}}(g)\, M^{\mathcal{A}}_{\mathcal{B}}(f)\, [u]_{\mathcal{A}} .
$$
Se $u$ è il $j$-esimo vettore di $\mathcal{A}$, la colonna $[u]_{\mathcal{A}}$ è il $j$-esimo vettore della base canonica, quindi la colonna $j$-esima di $M^{\mathcal{A}}_{\mathcal{C}}(g \circ f)$ coincide con la colonna $j$-esima del prodotto.
:::
::::

:::esempio{titolo="Composizione nei due ordini"}
Siano $f(x, y) = (x + y,\ y)$ e $g(x, y) = (2x,\ x - y)$. Le matrici rispetto alla base canonica danno
$$
\begin{aligned}
M(g \circ f) &=
\begin{pmatrix} 2 & 0 \\ 1 & -1 \end{pmatrix}
\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}
=
\begin{pmatrix} 2 & 2 \\ 1 & 0 \end{pmatrix} , \\[8pt]
M(f \circ g) &=
\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}
\begin{pmatrix} 2 & 0 \\ 1 & -1 \end{pmatrix}
=
\begin{pmatrix} 3 & -1 \\ 1 & -1 \end{pmatrix} ,
\end{aligned}
$$
cioè $(g \circ f)(x, y) = (2x + 2y,\ x)$ e $(f \circ g)(x, y) = (3x - y,\ x - y)$. Le due composizioni sono diverse, come i due prodotti di matrici, perciò la composizione di applicazioni lineari **non è commutativa**.
:::

:::teorema{#matrice-dell-inversa titolo="Matrice dell'applicazione inversa"}
Sia $f : V \to W$ un isomorfismo e sia $A = M^{\mathcal{B}}_{\mathcal{C}}(f)$. Allora $A$ è invertibile e
$$
M^{\mathcal{C}}_{\mathcal{B}}(f^{-1}) = A^{-1} .
$$
Infatti $f^{-1} \circ f = \operatorname{id}_V$, e la matrice dell'identità con la stessa base in partenza e in arrivo è la matrice identità; per la matrice della composizione $M^{\mathcal{C}}_{\mathcal{B}}(f^{-1})\, A = I_n$, e allo stesso modo $f \circ f^{-1} = \operatorname{id}_W$ dà $A\, M^{\mathcal{C}}_{\mathcal{B}}(f^{-1}) = I_n$. Per $f(x, y) = (x + y,\ x + 2y)$ si ottiene
$$
\begin{pmatrix} 1 & 1 \\ 1 & 2 \end{pmatrix}^{-1}
=
\begin{pmatrix} 2 & -1 \\ -1 & 1 \end{pmatrix} ,
\qquad
f^{-1}(x, y) = (2x - y,\ -x + y) .
$$
:::

## Cambiamento di base e matrici simili

:::definizione{#matrice-del-cambiamento-di-base titolo="Matrice del cambiamento di base"}
Siano $\mathcal{B}$ e $\mathcal{B}'$ due basi di $V$. La **matrice del cambiamento di base** da $\mathcal{B}'$ a $\mathcal{B}$ è $P = M^{\mathcal{B}'}_{\mathcal{B}}(\operatorname{id}_V)$, la matrice dell'identità con la base $\mathcal{B}'$ in partenza e la base $\mathcal{B}$ in arrivo. Le sue colonne sono le coordinate rispetto a $\mathcal{B}$ dei vettori di $\mathcal{B}'$, e per il teorema sulle coordinate dell'immagine
$$
[v]_{\mathcal{B}} = P\, [v]_{\mathcal{B}'} ,
$$
quindi $P$ trasforma le coordinate rispetto alla base nuova nelle coordinate rispetto alla base vecchia. La matrice $P$ è invertibile, con inversa $M^{\mathcal{B}}_{\mathcal{B}'}(\operatorname{id}_V)$. In $\mathbb{R}^n$, con $\mathcal{B}$ base canonica, le colonne di $P$ sono i vettori di $\mathcal{B}'$.
:::

::::teorema{#formula-del-cambiamento-di-base titolo="Formula del cambiamento di base"}
Sia $f : V \to W$ lineare, siano $\mathcal{B}, \mathcal{B}'$ basi di $V$ e $\mathcal{C}, \mathcal{C}'$ basi di $W$. Posto $P = M^{\mathcal{B}'}_{\mathcal{B}}(\operatorname{id}_V)$ e $Q = M^{\mathcal{C}'}_{\mathcal{C}}(\operatorname{id}_W)$, vale
$$
M^{\mathcal{B}'}_{\mathcal{C}'}(f) = Q^{-1}\, M^{\mathcal{B}}_{\mathcal{C}}(f)\, P .
$$
Per un endomorfismo, con la stessa base in partenza e in arrivo, la formula diventa
$$
M^{\mathcal{B}'}_{\mathcal{B}'}(f) = P^{-1}\, M^{\mathcal{B}}_{\mathcal{B}}(f)\, P .
$$
Nei calcoli $\mathcal{B}$ e $\mathcal{C}$ sono le basi canoniche, $P$ e $Q$ hanno per colonne i vettori delle basi nuove, e la formula dà la matrice di $f$ rispetto alle basi nuove con due prodotti e un'inversa.

:::dimostrazione
Si scrive $f = \operatorname{id}_W \circ f \circ \operatorname{id}_V$, dove $\operatorname{id}_V$ va da $V$ con la base $\mathcal{B}'$ a $V$ con la base $\mathcal{B}$, $f$ va da $V$ con la base $\mathcal{B}$ a $W$ con la base $\mathcal{C}$, e $\operatorname{id}_W$ va da $W$ con la base $\mathcal{C}$ a $W$ con la base $\mathcal{C}'$. Per la **matrice della composizione**
$$
M^{\mathcal{B}'}_{\mathcal{C}'}(f) = M^{\mathcal{C}}_{\mathcal{C}'}(\operatorname{id}_W)\, M^{\mathcal{B}}_{\mathcal{C}}(f)\, M^{\mathcal{B}'}_{\mathcal{B}}(\operatorname{id}_V) ,
$$
e per la matrice dell'applicazione inversa $M^{\mathcal{C}}_{\mathcal{C}'}(\operatorname{id}_W) = \big( M^{\mathcal{C}'}_{\mathcal{C}}(\operatorname{id}_W) \big)^{-1} = Q^{-1}$.
:::
::::

:::richiamo{titolo="Matrice della composizione"}
Se $f : U \to V$ e $g : V \to W$ sono lineari e $\mathcal{A}$, $\mathcal{B}$, $\mathcal{C}$ sono basi di $U$, $V$, $W$, allora $M^{\mathcal{A}}_{\mathcal{C}}(g \circ f) = M^{\mathcal{B}}_{\mathcal{C}}(g)\, M^{\mathcal{A}}_{\mathcal{B}}(f)$.
:::

:::esempio{titolo="Una base in cui la matrice è diagonale"}
Sia $f$ l'endomorfismo di $\mathbb{R}^2$ con matrice $A$ rispetto alla base canonica e sia $\mathcal{B}' = \big( (1, 1), (2, 1) \big)$. Allora
$$
A =
\begin{pmatrix} 4 & -2 \\ 1 & 1 \end{pmatrix} ,
\qquad
P =
\begin{pmatrix} 1 & 2 \\ 1 & 1 \end{pmatrix} ,
\qquad
P^{-1} =
\begin{pmatrix} -1 & 2 \\ 1 & -1 \end{pmatrix} ,
$$
$$
P^{-1} A P =
\begin{pmatrix} -1 & 2 \\ 1 & -1 \end{pmatrix}
\begin{pmatrix} 2 & 6 \\ 2 & 3 \end{pmatrix}
=
\begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix} .
$$
Il risultato si legge sui vettori della base nuova, poiché $f(1, 1) = (2, 2) = 2\,(1, 1)$ e $f(2, 1) = (6, 3) = 3\,(2, 1)$. Rispetto a $\mathcal{B}'$ la matrice è **diagonale**, e la ricerca di basi di questo tipo è l'oggetto dell'argomento su autovalori e diagonalizzazione.

::grafico{vettori="0,0,6,3,f(b₂);0,0,2,2,f(b₁);0,0,2,1,b₂;0,0,1,1,b₁" segmenti="0,0,3.4,3.4;0,0,6.6,3.3" xmin=-0.5 xmax=6.9 ymin=-0.5 ymax=3.7 uguale=1 titolo="I vettori $b_1 = (1, 1)$ e $b_2 = (2, 1)$ e le loro immagini $f(b_1) = 2\,b_1$ e $f(b_2) = 3\,b_2$: ciascuno resta sulla propria retta per l'origine"}

:::

:::definizione{#matrici-simili titolo="Matrici simili"}
Due matrici $A, A' \in M_n(\mathbb{R})$ sono **simili** se esiste una matrice invertibile $P \in M_n(\mathbb{R})$ tale che $A' = P^{-1} A P$. Per la formula del cambiamento di base, le matrici associate a uno stesso endomorfismo rispetto a basi diverse sono simili. Viceversa, se $A' = P^{-1} A P$, le colonne di $P$ formano una base di $\mathbb{R}^n$ rispetto alla quale l'endomorfismo $x \mapsto Ax$ ha matrice $A'$.
:::

::::teorema{#invarianti-per-similitudine titolo="Invarianti per similitudine"}
Se $A, A' \in M_n(\mathbb{R})$ sono simili, allora hanno lo stesso determinante, la stessa traccia e lo stesso rango. Le tre quantità dipendono quindi solo dall'endomorfismo e servono a dimostrare che due matrici **non sono simili**. Le matrici $\begin{pmatrix} 3 & 1 \\ 2 & 0 \end{pmatrix}$ e $\begin{pmatrix} 1 & 1 \\ 0 & 2 \end{pmatrix}$ hanno entrambe traccia $3$, ma i determinanti sono $-2$ e $2$, perciò non sono simili.

:::dimostrazione
Sia $A' = P^{-1} A P$. Per il **teorema di Binet** $\det A' = \det P^{-1} \det A \det P = \det A$, poiché $\det P^{-1} \det P = \det I_n = 1$. Per la traccia si usa l'uguaglianza $\operatorname{tr}(XY) = \operatorname{tr}(YX)$, valida per $X, Y \in M_n(\mathbb{R})$ perché entrambe le tracce sono uguali a $\sum_{i,j} x_{ij} y_{ji}$; con $X = P^{-1}$ e $Y = AP$ si ottiene $\operatorname{tr} A' = \operatorname{tr}(A P P^{-1}) = \operatorname{tr} A$. Infine $A$ e $A'$ sono matrici dello stesso endomorfismo $f$, quindi il rango di entrambe è $\dim \operatorname{Im} f$.
:::
::::

:::richiamo{titolo="Teorema di Binet"}
Se $A, B \in M_n(\mathbb{R})$, allora $\det(AB) = \det A \det B$.
:::

:::attenzione
Determinante, traccia e rango uguali *non* bastano per la similitudine. Le matrici $I_2$ e $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ hanno determinante $1$, traccia $2$ e rango $2$. L'unica matrice simile a $I_2$ è però $I_2$ stessa, poiché $P^{-1} I_2 P = I_2$ per ogni $P$ invertibile; perciò le due matrici **non sono simili**.
:::

## Applicazioni lineari con parametro

:::osservazione{#applicazioni-con-parametro titolo="Discussione al variare del parametro"}
Quando la matrice $A_k$ di $f$ dipende da un parametro $k$, la discussione segue il rango di $A_k$.

- Se $A_k$ è quadrata, si calcola $\det A_k$. Per i valori di $k$ con $\det A_k \neq 0$ l'applicazione è un isomorfismo, con $\ker f = \{0\}$ e $\operatorname{Im} f = W$.
- Per ciascuno dei valori che annullano il determinante si sostituisce $k$ nella matrice e si calcolano rango, nucleo e immagine come per una matrice numerica.
- Se $A_k$ non è quadrata, si riduce a scala tenendo $k$ nei conti e si individuano i valori di $k$ per cui una riga si annulla; in alternativa si usano i minori e il teorema degli orlati.

La domanda se un vettore $w$ appartiene a $\operatorname{Im} f$ equivale alla risolubilità del sistema $A_k x = w$, che si discute con il **teorema di Rouché-Capelli** (si rimanda all'argomento sui sistemi lineari).
:::

:::esempio{titolo="Un endomorfismo con parametro"}
Sia $f_k$ l'endomorfismo di $\mathbb{R}^3$ con matrice
$$
A_k =
\begin{pmatrix}
1 & 2 & 0 \\
2 & k & 1 \\
0 & 1 & 1
\end{pmatrix} ,
\qquad
\det A_k = 1 \cdot (k - 1) - 2 \cdot (2 - 0) = k - 5 .
$$
Per $k \neq 5$ l'applicazione è un **isomorfismo**. Per $k = 5$ la riduzione $R_2 \to R_2 - 2R_1$ dà la riga $(0, 1, 1)$, uguale alla terza, quindi il rango è $2$. Il sistema ridotto $x + 2y = 0$, $y + z = 0$ dà $\ker f_5 = \langle (2, -1, 1) \rangle$. L'immagine è generata dalle prime due colonne, $\operatorname{Im} f_5 = \langle (1, 2, 0), (2, 5, 1) \rangle$, e annullando il determinante con la colonna $(x, y, z)$ si ottiene l'equazione cartesiana $2x - y + z = 0$.
:::
