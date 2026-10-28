---
titolo: Spazi vettoriali, basi e dimensione
sommario: La struttura comune a vettori, matrici e polinomi, i sottospazi descritti con generatori o con equazioni, le basi, la dimensione e la formula di Grassmann per somma e intersezione.
---

## Spazi vettoriali

:::definizione{#spazio-vettoriale titolo="Spazio vettoriale reale"}
Uno **spazio vettoriale reale** è un insieme $V$ dotato di due operazioni, la somma $V \times V \to V$, $(u, v) \mapsto u + v$, e il prodotto per scalare $\mathbb{R} \times V \to V$, $(\lambda, v) \mapsto \lambda v$, tali che per ogni $u, v, w \in V$ e ogni $\lambda, \mu \in \mathbb{R}$ valgano le proprietà seguenti.

- Somma associativa e commutativa: $(u + v) + w = u + (v + w)$ e $u + v = v + u$.
- Esiste un vettore nullo $0 \in V$ con $v + 0 = v$ per ogni $v$.
- Ogni $v$ ha un opposto $-v$ con $v + (-v) = 0$.
- Distributività: $\lambda(u + v) = \lambda u + \lambda v$ e $(\lambda + \mu)v = \lambda v + \mu v$.
- Compatibilità: $\lambda(\mu v) = (\lambda\mu)v$ e $1 \cdot v = v$.

Gli elementi di $V$ si chiamano **vettori**, i numeri reali scalari. La definizione raccoglie le sole regole di calcolo che servono per parlare di combinazioni lineari, basi e dimensione; perciò ogni risultato dimostrato a partire da esse vale *insieme* per le $n$-uple, per le matrici e per i polinomi.
:::

:::esempio{titolo="Gli spazi vettoriali dell'esame"}
- $\mathbb{R}^n$, con somma e prodotto per scalare componente per componente: $(1, 2, 0) + 3\,(0, 1, 1) = (1, 5, 3)$.
- $M_{m,n}(\mathbb{R})$, le matrici $m \times n$ con la somma e il prodotto per scalare elemento per elemento; il vettore nullo è la matrice nulla.
- $\mathbb{R}_n[x]$, i polinomi a coefficienti reali di grado minore o uguale a $n$, compreso il polinomio nullo, con le operazioni usuali sui polinomi.

Per $\mathbb{R}_n[x]$ la condizione sul grado è scritta come disuguaglianza perché i polinomi di grado *esattamente* $2$ non formano uno spazio vettoriale: la somma $(x^2 + x) + (-x^2) = x$ ha grado $1$.
:::

:::osservazione{#proprieta-elementari titolo="Regole di calcolo"}
Dagli assiomi seguono le regole $0 \cdot v = 0$, $\lambda \cdot 0 = 0$ e $(-1)\,v = -v$. Per la prima si scrive $0 \cdot v = (0 + 0)\,v = 0 \cdot v + 0 \cdot v$; sommando a entrambi i membri l'opposto di $0 \cdot v$ si ottiene $0 = 0 \cdot v$. Vale inoltre la legge di annullamento: se $\lambda v = 0$, allora $\lambda = 0$ oppure $v = 0$. Queste regole si usano in tutti i calcoli successivi senza citarle.
:::

## Sottospazi vettoriali

:::definizione{#sottospazio titolo="Sottospazio vettoriale"}
Un sottoinsieme $W \subseteq V$ è un **sottospazio vettoriale** di $V$ se è a sua volta uno spazio vettoriale con le operazioni di $V$. Ogni spazio $V$ contiene i sottospazi banali $\{0\}$ e $V$. In $\mathbb{R}^2$ gli altri sottospazi sono le rette per l'origine, in $\mathbb{R}^3$ le rette e i piani per l'origine, come mostrerà il calcolo della dimensione.
:::

::::teorema{#criterio-sottospazio titolo="Criterio di sottospazio"}
Sia $V$ uno spazio vettoriale e sia $W \subseteq V$. Allora $W$ è un sottospazio di $V$ se e solo se le tre condizioni seguenti sono soddisfatte insieme:
$$
\begin{cases}
0 \in W \\[4pt]
u + v \in W \quad \text{per ogni } u, v \in W \\[4pt]
\lambda u \in W \quad \text{per ogni } u \in W, \ \lambda \in \mathbb{R}
\end{cases}
$$
Il criterio riduce la verifica degli assiomi a tre controlli. Per escludere che $W$ sia un sottospazio è sufficiente un controesempio a *una* delle tre condizioni, e la più rapida da controllare è $0 \in W$.

:::dimostrazione
Se $W$ è un sottospazio, la somma e il prodotto per scalare di elementi di $W$ stanno in $W$ per definizione, e $0 \in W$ poiché per ogni $u \in W$ si ha $0 = 0 \cdot u \in W$. Viceversa, se le tre condizioni sono soddisfatte, le due operazioni di $V$ restano operazioni su $W$. Le proprietà associativa, commutativa, distributiva e di compatibilità valgono in $W$ perché valgono in $V$; il vettore nullo sta in $W$ per la prima condizione, e l'opposto di $u \in W$ è $-u = (-1)\,u$, che sta in $W$ per la terza. Quindi $W$ è uno spazio vettoriale.
:::
::::

:::esempio{titolo="Un piano per l'origine"}
$W = \{ (x, y, z) \in \mathbb{R}^3 : x + y - 2z = 0 \}$. Il vettore nullo soddisfa l'equazione. Se $u = (u_1, u_2, u_3)$ e $v = (v_1, v_2, v_3)$ stanno in $W$, allora
$$
\begin{aligned}
(u_1 + v_1) + (u_2 + v_2) - 2(u_3 + v_3) &= (u_1 + u_2 - 2u_3) + (v_1 + v_2 - 2v_3) \\[6pt]
&= 0 + 0 = 0 ,
\end{aligned}
$$
quindi $u + v \in W$; allo stesso modo $\lambda u_1 + \lambda u_2 - 2\lambda u_3 = \lambda \cdot 0 = 0$, quindi $\lambda u \in W$. Per il **criterio di sottospazio**, $W$ **è un sottospazio** di $\mathbb{R}^3$.
:::

:::osservazione{#sottospazi-ed-equazioni titolo="Equazioni omogenee e non omogenee"}
Il ragionamento dell'esempio vale per ogni sistema lineare omogeneo: l'insieme delle soluzioni di $A x = 0$, con $A \in M_{m,n}(\mathbb{R})$, è un **sottospazio** di $\mathbb{R}^n$, poiché $A0 = 0$, $A(u + v) = Au + Av$ e $A(\lambda u) = \lambda\, Au$. L'insieme delle soluzioni di un sistema $A x = b$ con $b \neq 0$ *non* è un sottospazio, perché il vettore nullo non lo soddisfa. Nel piano la retta $x - 2y = 0$ è un sottospazio, mentre la retta parallela $x - 2y = -2$ non contiene l'origine.

::grafico{f="x/2;x/2+1" punti="0,0,pieno;0,1,vuoto" etichette="2.3,0.6,x − 2y = 0;-3.6,0.2,x − 2y = −2" xmin=-4 xmax=4 ymin=-2.5 ymax=3 uguale=1 titolo="La retta $x - 2y = 0$ passa per l'origine ed è un sottospazio di $\mathbb{R}^2$; la retta parallela $x - 2y = -2$ (tratteggiata) non contiene il vettore nullo"}

:::

:::attenzione
Un sottoinsieme può contenere il vettore nullo ed essere chiuso rispetto al prodotto per scalare senza essere un sottospazio. L'unione dei due assi di $\mathbb{R}^2$, cioè $\{ (x, y) : xy = 0 \}$, contiene $(1, 0)$ e $(0, 1)$, mentre la loro somma $(1, 1)$ non soddisfa $xy = 0$. Le tre condizioni del criterio vanno verificate *tutte*.

::grafico{curve="t<2.6?t:(t>3.4?0:NaN),t<2.6?0:(t>3.4?t-6:NaN),-2.5,8.5" vettori="0,0,1,0,u;0,0,0,1,v;0,0,1,1,u + v" punti="1,1,vuoto" xmin=-2.5 xmax=2.5 ymin=-2.5 ymax=2.5 uguale=1 titolo="L'insieme $xy = 0$ (in colore) è l'unione dei due assi: contiene $u = (1, 0)$ e $v = (0, 1)$, e non contiene la somma $u + v = (1, 1)$"}

:::

## Combinazioni lineari e generatori

:::definizione{#combinazione-lineare titolo="Combinazione lineare"}
Dati $v_1, \dots, v_k \in V$, una **combinazione lineare** di questi vettori è un vettore della forma
$$
\lambda_1 v_1 + \lambda_2 v_2 + \dots + \lambda_k v_k , \qquad \lambda_1, \dots, \lambda_k \in \mathbb{R} .
$$
I numeri $\lambda_i$ sono i coefficienti della combinazione. Stabilire se $v$ è combinazione lineare di $v_1, \dots, v_k$ equivale a stabilire se un sistema lineare nelle incognite $\lambda_i$ ha soluzione. Per esempio $(3, 5) = \lambda_1 (1, 1) + \lambda_2 (1, 2)$ equivale al sistema $\lambda_1 + \lambda_2 = 3$, $\lambda_1 + 2\lambda_2 = 5$, che ha soluzione $\lambda_1 = 1$, $\lambda_2 = 2$.
:::

::::teorema{#sottospazio-generato titolo="Sottospazio generato"}
Siano $v_1, \dots, v_k \in V$. L'insieme di tutte le loro combinazioni lineari
$$
\langle v_1, \dots, v_k \rangle = \{ \lambda_1 v_1 + \dots + \lambda_k v_k : \lambda_1, \dots, \lambda_k \in \mathbb{R} \}
$$
è un sottospazio di $V$, ed è il **più piccolo sottospazio** che contiene $v_1, \dots, v_k$. Il sottospazio generato da un vettore non nullo è la retta per l'origine con quella direzione; in $\mathbb{R}^3$ il sottospazio generato da due vettori non proporzionali è il piano per l'origine che li contiene.

::grafico{f="2*x" vettori="0,0,1,2,v;0,0,-1,-2,−v" punti="0,0,pieno" xmin=-3 xmax=3 ymin=-3.5 ymax=3.5 uguale=1 titolo="Il sottospazio $\langle v \rangle$ generato da $v = (1, 2)$ è la retta $y = 2x$: contiene tutti i multipli $\lambda v$, come $-v = (-1, -2)$"}

:::dimostrazione
La combinazione con tutti i coefficienti nulli dà $0$. La somma di due combinazioni è la combinazione con coefficienti $\lambda_i + \mu_i$, e il prodotto di una combinazione per $c \in \mathbb{R}$ è la combinazione con coefficienti $c\lambda_i$; quindi per il **criterio di sottospazio** $\langle v_1, \dots, v_k \rangle$ è un sottospazio. Se $U$ è un sottospazio che contiene $v_1, \dots, v_k$, allora contiene ogni $\lambda_i v_i$ e ogni somma di tali vettori, perché è chiuso rispetto alle due operazioni; perciò $\langle v_1, \dots, v_k \rangle \subseteq U$.
:::
::::

:::definizione{#sistema-di-generatori titolo="Sistema di generatori"}
I vettori $v_1, \dots, v_k$ **generano** $V$ se $\langle v_1, \dots, v_k \rangle = V$, cioè se ogni vettore di $V$ è loro combinazione lineare. Uno spazio che ammette un numero finito di generatori si dice finitamente generato, e tutti gli spazi di questo argomento lo sono. Per esempio $(1, 1)$ e $(1, -1)$ generano $\mathbb{R}^2$, poiché per ogni $(a, b)$ vale
$$
(a, b) = \frac{a + b}{2}\,(1, 1) + \frac{a - b}{2}\,(1, -1) .
$$
Lo spazio $\mathbb{R}[x]$ di *tutti* i polinomi non è finitamente generato: un numero finito di polinomi ha un grado massimo $d$, quindi le loro combinazioni hanno grado al più $d$.
:::

:::teorema{#generatori-ridondanti titolo="Eliminazione di un generatore superfluo"}
Siano $v_1, \dots, v_k \in V$. Se $v_k$ è combinazione lineare di $v_1, \dots, v_{k-1}$, allora
$$
\langle v_1, \dots, v_{k-1}, v_k \rangle = \langle v_1, \dots, v_{k-1} \rangle .
$$
Infatti in ogni combinazione di $v_1, \dots, v_k$ si può sostituire $v_k$ con la sua espressione, e si ottiene una combinazione dei soli $v_1, \dots, v_{k-1}$. Con questo teorema si riduce un sistema di generatori: poiché $(2, 3) = 2\,(1, 0) + 3\,(0, 1)$, si ha $\langle (1, 0), (0, 1), (2, 3) \rangle = \langle (1, 0), (0, 1) \rangle = \mathbb{R}^2$.
:::

## Dipendenza e indipendenza lineare

:::definizione{#indipendenza-lineare titolo="Vettori linearmente indipendenti"}
I vettori $v_1, \dots, v_k \in V$ sono **linearmente indipendenti** se l'unica combinazione lineare che dà il vettore nullo è quella con tutti i coefficienti nulli:
$$
\lambda_1 v_1 + \dots + \lambda_k v_k = 0 \quad \Longrightarrow \quad \lambda_1 = \dots = \lambda_k = 0 .
$$
In caso contrario sono **linearmente dipendenti**, e una combinazione nulla con coefficienti non tutti nulli si chiama relazione di dipendenza. La verifica consiste nel risolvere il sistema omogeneo nelle incognite $\lambda_i$: i vettori sono indipendenti quando la *sola* soluzione è quella nulla.
:::

::::teorema{#caratterizzazione-dipendenza titolo="Dipendenza e combinazioni lineari"}
Siano $v_1, \dots, v_k \in V$ con $k \geq 2$. I vettori sono linearmente dipendenti se e solo se *almeno uno* di essi è combinazione lineare degli altri. Dalla relazione di dipendenza $2v_1 - v_2 + 3v_3 = 0$, per esempio, si ricava $v_2 = 2v_1 + 3v_3$.

:::dimostrazione
Se $\lambda_1 v_1 + \dots + \lambda_k v_k = 0$ con un coefficiente $\lambda_j \neq 0$, si divide per $\lambda_j$ e si ottiene
$$
v_j = -\sum_{i \neq j} \frac{\lambda_i}{\lambda_j}\, v_i ,
$$
quindi $v_j$ è combinazione degli altri. Viceversa, se $v_j = \sum_{i \neq j} \mu_i v_i$, allora $\sum_{i \neq j} \mu_i v_i - v_j = 0$ è una combinazione nulla in cui il coefficiente di $v_j$ vale $-1 \neq 0$, perciò i vettori sono dipendenti.
:::
::::

:::osservazione{#casi-particolari-indipendenza titolo="Casi particolari"}
- Un solo vettore $v$ è indipendente se e solo se $v \neq 0$.
- Due vettori sono dipendenti se e solo se sono proporzionali.
- Un insieme che contiene il vettore nullo è dipendente, poiché $1 \cdot 0 = 0$ è una relazione di dipendenza.
- Un sottoinsieme di vettori indipendenti è formato da vettori indipendenti.
:::

:::attenzione
Per tre o più vettori il confronto a due a due non decide. I vettori $(1, 0)$, $(0, 1)$, $(1, 1)$ non sono proporzionali a due a due, eppure sono **dipendenti**, perché $(1, 1) = (1, 0) + (0, 1)$.

::grafico{vettori="0,0,1,0,u;0,0,0,1,v;0,0,1,1,w" segmenti="1,0,1,1;0,1,1,1" xmin=-0.6 xmax=1.8 ymin=-0.5 ymax=1.6 uguale=1 titolo="Il vettore $w = (1, 1)$ è la diagonale del parallelogramma di lati $u = (1, 0)$ e $v = (0, 1)$: poiché $w = u + v$, i tre vettori sono dipendenti"}

:::

::::teorema{#indipendenza-e-rango titolo="Indipendenza e rango"}
Siano $v_1, \dots, v_k \in \mathbb{R}^n$ e sia $A \in M_{n,k}(\mathbb{R})$ la matrice che ha questi vettori come colonne. I vettori sono linearmente indipendenti se e solo se $\operatorname{rk} A = k$. In particolare, per $k = n$ i vettori sono indipendenti se e solo se $\det A \neq 0$. Il rango si calcola con la riduzione a scala o con i minori, come nell'argomento sui sistemi lineari.

:::dimostrazione
L'uguaglianza $\lambda_1 v_1 + \dots + \lambda_k v_k = 0$ è il sistema omogeneo $A \lambda = 0$ nell'incognita $\lambda = (\lambda_1, \dots, \lambda_k)$. Per il **teorema di Rouché-Capelli** le sue soluzioni dipendono da $k - \operatorname{rk} A$ parametri liberi, quindi la sola soluzione è quella nulla se e solo se $\operatorname{rk} A = k$. Per $k = n$ la matrice è quadrata, e $\operatorname{rk} A = n$ equivale a $\det A \neq 0$.
:::
::::

:::richiamo{titolo="Teorema di Rouché-Capelli (caso omogeneo)"}
Sia $A \in M_{m,k}(\mathbb{R})$. Il sistema $A \lambda = 0$ è sempre risolubile e le sue soluzioni dipendono da $k - \operatorname{rk} A$ parametri liberi.
:::

:::esempio{titolo="Tre vettori indipendenti"}
I vettori $(1, 2, 0)$, $(0, 1, 1)$, $(1, 1, 1)$ sono **indipendenti**, poiché la matrice che li ha come colonne ha determinante non nullo:
$$
\begin{vmatrix}
1 & 0 & 1 \\
2 & 1 & 1 \\
0 & 1 & 1
\end{vmatrix}
= 1 \cdot (1 - 1) - 0 + 1 \cdot (2 - 0) = 2 \neq 0 .
$$
:::

::::teorema{#aggiunta-di-un-vettore titolo="Aggiunta di un vettore a un insieme indipendente"}
Siano $v_1, \dots, v_k \in V$ linearmente indipendenti e sia $v \in V$ con $v \notin \langle v_1, \dots, v_k \rangle$. Allora $v_1, \dots, v_k, v$ sono linearmente indipendenti. Il teorema permette di allungare un insieme indipendente un vettore alla volta, e si usa per completare un insieme indipendente a una base.

:::dimostrazione
Sia $\lambda_1 v_1 + \dots + \lambda_k v_k + \mu v = 0$. Se fosse $\mu \neq 0$, si avrebbe $v = -\dfrac{1}{\mu}(\lambda_1 v_1 + \dots + \lambda_k v_k) \in \langle v_1, \dots, v_k \rangle$, contro l'ipotesi; quindi $\mu = 0$. La relazione diventa $\lambda_1 v_1 + \dots + \lambda_k v_k = 0$, e poiché $v_1, \dots, v_k$ sono indipendenti tutti i $\lambda_i$ sono nulli.
:::
::::

## Basi e coordinate

:::definizione{#base titolo="Base"}
Una **base** di $V$ è una sequenza ordinata $\mathcal{B} = (v_1, \dots, v_n)$ di vettori di $V$ che sono linearmente indipendenti e generano $V$. Le due condizioni hanno ruoli distinti: poiché i vettori generano $V$, ogni vettore si scrive come loro combinazione; poiché sono indipendenti, questa scrittura è unica, come afferma il teorema di unicità delle coordinate.
:::

:::osservazione{#basi-canoniche titolo="Basi canoniche"}
- In $\mathbb{R}^n$ la base canonica è formata da $e_1 = (1, 0, \dots, 0)$, $\dots$, $e_n = (0, \dots, 0, 1)$, e vale $(a_1, \dots, a_n) = a_1 e_1 + \dots + a_n e_n$.
- In $M_{m,n}(\mathbb{R})$ la base canonica è formata dalle $mn$ matrici $E_{ij}$ con $1$ al posto $(i, j)$ e $0$ altrove.
- In $\mathbb{R}_n[x]$ la base canonica è $(1, x, x^2, \dots, x^n)$, formata da $n + 1$ polinomi.
:::

::::teorema{#unicita-delle-coordinate titolo="Unicità delle coordinate"}
Sia $\mathcal{B} = (v_1, \dots, v_n)$ una base di $V$. Allora ogni $v \in V$ si scrive in **uno e un solo modo** come
$$
v = a_1 v_1 + \dots + a_n v_n .
$$

:::dimostrazione
L'esistenza della scrittura segue dal fatto che $v_1, \dots, v_n$ generano $V$. Se $v = a_1 v_1 + \dots + a_n v_n = b_1 v_1 + \dots + b_n v_n$, sottraendo le due scritture si ottiene $(a_1 - b_1)\,v_1 + \dots + (a_n - b_n)\,v_n = 0$; poiché i vettori della base sono indipendenti, $a_i - b_i = 0$ per ogni $i$, quindi le due scritture coincidono.
:::
::::

:::definizione{#coordinate titolo="Coordinate rispetto a una base"}
I numeri $a_1, \dots, a_n$ del teorema di unicità sono le **coordinate** di $v$ rispetto a $\mathcal{B}$, e $(a_1, \dots, a_n) \in \mathbb{R}^n$ è il vettore delle coordinate. Rispetto alla base canonica le coordinate di un vettore di $\mathbb{R}^n$ sono le sue componenti, e le coordinate di $p(x) = 3 - x + 2x^2$ rispetto a $(1, x, x^2)$ sono $(3, -1, 2)$. Rispetto a un'altra base le coordinate si trovano risolvendo un sistema lineare: con $\mathcal{B} = \big( (1, 1), (1, -1) \big)$ si ha $(5, 1) = 3\,(1, 1) + 2\,(1, -1)$, quindi le coordinate di $(5, 1)$ sono $(3, 2)$.

::grafico{vettori="0,0,3,3,3b₁;3,3,5,1,2b₂;0,0,5,1,v;0,0,1,1,b₁;0,0,1,-1,b₂" segmenti="0,0,2,-2;2,-2,5,1" xmin=-0.8 xmax=5.8 ymin=-2.6 ymax=3.6 uguale=1 titolo="Rispetto alla base $b_1 = (1, 1)$, $b_2 = (1, -1)$ il vettore $v = (5, 1)$ si scrive $3b_1 + 2b_2$: le sue coordinate sono $(3, 2)$"}

:::

:::osservazione{#calcoli-in-coordinate titolo="Calcoli in coordinate"}
Fissata una base di $V$, il passaggio dai vettori alle coordinate conserva somme, prodotti per scalare e combinazioni lineari. Perciò dei vettori di $V$ sono indipendenti se e solo se lo sono i loro vettori delle coordinate in $\mathbb{R}^n$, e lo stesso vale per i generatori. Nei calcoli con polinomi o matrici si passa quindi alle coordinate rispetto alla base canonica e si applicano i metodi di $\mathbb{R}^n$: i polinomi $1 + x$, $x - x^2$, $1 + 2x + x^2$ corrispondono ai vettori $(1, 1, 0)$, $(0, 1, -1)$, $(1, 2, 1)$, che sono indipendenti perché il determinante della matrice che li ha come colonne vale $2$. Questa corrispondenza è un isomorfismo, nozione per cui si rimanda all'argomento sulle applicazioni lineari.
:::

## Dimensione

::::teorema{#lemma-di-steinitz titolo="Lemma di Steinitz"}
Sia $V$ generato da $w_1, \dots, w_n$. Allora ogni insieme di vettori linearmente indipendenti di $V$ ha *al più* $n$ elementi. Per esempio $\mathbb{R}^3$ è generato dai tre vettori canonici, quindi quattro vettori di $\mathbb{R}^3$ sono sempre dipendenti.

:::dimostrazione
Siano $v_1, \dots, v_m \in V$ con $m > n$; si mostra che sono dipendenti. Poiché i $w_i$ generano $V$, ogni $v_j$ si scrive $v_j = \sum_{i=1}^{n} a_{ij} w_i$. Il sistema omogeneo
$$
\sum_{j=1}^{m} a_{ij}\, x_j = 0 , \qquad i = 1, \dots, n ,
$$
ha $n$ equazioni e $m > n$ incognite, quindi ha una soluzione $(x_1, \dots, x_m)$ non nulla. Per questa soluzione
$$
\begin{aligned}
\sum_{j=1}^{m} x_j v_j &= \sum_{j=1}^{m} x_j \sum_{i=1}^{n} a_{ij} w_i \\[6pt]
&= \sum_{i=1}^{n} \Big( \sum_{j=1}^{m} a_{ij} x_j \Big) w_i = 0 ,
\end{aligned}
$$
perciò $v_1, \dots, v_m$ sono linearmente dipendenti.
:::
::::

:::richiamo{titolo="Sistemi omogenei con più incognite che equazioni"}
Un sistema lineare omogeneo di $n$ equazioni in $m > n$ incognite ha soluzioni non nulle, poiché il rango è al più $n$ e le soluzioni dipendono da almeno $m - n \geq 1$ parametri liberi.
:::

::::teorema{#invarianza-della-dimensione titolo="Invarianza del numero di elementi di una base"}
Sia $V \neq \{0\}$ finitamente generato. Allora $V$ ha una base, e due basi qualsiasi di $V$ hanno lo **stesso numero di elementi**. L'esistenza di una base segue dal teorema di estrazione di una base, applicato a un sistema finito di generatori.

:::dimostrazione
Siano $(v_1, \dots, v_n)$ e $(w_1, \dots, w_m)$ due basi di $V$. I $w_j$ sono indipendenti e i $v_i$ generano $V$, quindi per il **lemma di Steinitz** $m \leq n$. Scambiando i ruoli delle due basi si ottiene $n \leq m$, perciò $m = n$.
:::
::::

:::definizione{#dimensione titolo="Dimensione"}
La **dimensione** di $V$, indicata con $\dim V$, è il numero di elementi di una qualsiasi base; per convenzione $\dim \{0\} = 0$. Dalle basi canoniche si leggono
$$
\dim \mathbb{R}^n = n , \qquad \dim M_{m,n}(\mathbb{R}) = mn , \qquad \dim \mathbb{R}_n[x] = n + 1 .
$$
La dimensione è il numero di parametri liberi che servono per descrivere un vettore dello spazio: una retta per l'origine ha dimensione $1$, un piano per l'origine dimensione $2$.
:::

::::teorema{#conseguenze-della-dimensione titolo="Conseguenze della dimensione"}
Sia $\dim V = n$. Allora:

- più di $n$ vettori di $V$ sono linearmente dipendenti;
- meno di $n$ vettori di $V$ non generano $V$;
- $n$ vettori linearmente indipendenti formano una base di $V$;
- $n$ vettori che generano $V$ formano una base di $V$.

Le ultime due proprietà riducono i controlli: per verificare che $n$ vettori di uno spazio di dimensione $n$ formano una base è sufficiente controllare *una sola* delle due condizioni, di solito l'indipendenza con il determinante.

:::dimostrazione
Le prime due proprietà seguono dal **lemma di Steinitz** applicato a una base di $V$, che è formata da $n$ vettori indipendenti e generatori. Siano $v_1, \dots, v_n$ indipendenti: se non generassero $V$, esisterebbe $v \notin \langle v_1, \dots, v_n \rangle$ e, per il teorema sull'aggiunta di un vettore, $v_1, \dots, v_n, v$ sarebbero $n + 1$ vettori indipendenti, contro la prima proprietà. Siano ora $v_1, \dots, v_n$ generatori: se fossero dipendenti, uno di essi sarebbe combinazione degli altri e, eliminandolo, $V$ sarebbe generato da $n - 1$ vettori, contro la seconda proprietà.
:::
::::

:::richiamo{titolo="Aggiunta di un vettore a un insieme indipendente"}
Se $v_1, \dots, v_k$ sono linearmente indipendenti e $v \notin \langle v_1, \dots, v_k \rangle$, allora $v_1, \dots, v_k, v$ sono linearmente indipendenti.
:::

:::teorema{#dimensione-di-un-sottospazio titolo="Dimensione di un sottospazio"}
Sia $\dim V = n$ e sia $W$ un sottospazio di $V$. Allora $\dim W \leq n$, e $\dim W = n$ se e solo se $W = V$. Infatti, per il lemma di Steinitz, ogni insieme di vettori indipendenti di $W$ ha al più $n$ elementi. Se $W \neq \{0\}$, si sceglie un insieme indipendente $w_1, \dots, w_m$ di $W$ con $m$ massimo; ogni $w \in W$ appartiene a $\langle w_1, \dots, w_m \rangle$, poiché altrimenti, per il teorema sull'aggiunta di un vettore, $w_1, \dots, w_m, w$ sarebbero $m + 1$ vettori indipendenti di $W$. Quindi $(w_1, \dots, w_m)$ è una base di $W$ e $\dim W = m \leq n$. Se $m = n$, per le conseguenze della dimensione $w_1, \dots, w_n$ formano una base di $V$, perciò $W = V$. Il teorema serve a dimostrare uguaglianze tra sottospazi: se $U \subseteq W$ e $\dim U = \dim W$, allora $U = W$.
:::

## Estrazione e completamento di basi

::::teorema{#estrazione-di-una-base titolo="Estrazione di una base"}
Siano $v_1, \dots, v_k$ generatori di $V \neq \{0\}$. Allora tra di essi si può scegliere una base di $V$. In particolare $\dim \langle v_1, \dots, v_k \rangle$ è il massimo numero di vettori indipendenti tra $v_1, \dots, v_k$.

:::dimostrazione
Se $v_1, \dots, v_k$ sono indipendenti, formano già una base. Altrimenti, per il teorema sulla dipendenza e le combinazioni lineari, uno di essi è combinazione degli altri, e per il **teorema di eliminazione di un generatore superfluo** i rimanenti generano ancora $V$. Si ripete il procedimento finché i vettori rimasti sono indipendenti. A ogni passo il numero dei vettori diminuisce di uno, e un solo vettore non nullo è indipendente, quindi il procedimento termina con una base di $V$.
:::
::::

::::teorema{#completamento-a-base titolo="Completamento a una base"}
Sia $\dim V = n$ e siano $v_1, \dots, v_k \in V$ linearmente indipendenti, con $k < n$. Allora esistono $v_{k+1}, \dots, v_n \in V$ tali che $(v_1, \dots, v_n)$ è una base di $V$. I vettori aggiunti si possono scegliere tra quelli di una qualsiasi base fissata di $V$, per esempio la base canonica.

:::dimostrazione
Sia $(e_1, \dots, e_n)$ una base di $V$. Poiché $k < n$, per le conseguenze della dimensione i vettori $v_1, \dots, v_k$ non generano $V$. Se tutti gli $e_j$ appartenessero a $\langle v_1, \dots, v_k \rangle$, questo sottospazio conterrebbe ogni loro combinazione e sarebbe uguale a $V$; esiste quindi un $e_j \notin \langle v_1, \dots, v_k \rangle$, e per il **teorema sull'aggiunta di un vettore** i vettori $v_1, \dots, v_k, e_j$ sono indipendenti. Si ripete il passo fino ad avere $n$ vettori indipendenti, che per le conseguenze della dimensione formano una base di $V$.
:::
::::

:::osservazione{#metodo-della-riduzione-a-scala titolo="Il metodo con la riduzione a scala"}
In $\mathbb{R}^n$, o in coordinate, estrazione e completamento si eseguono con la riduzione a scala.

- **Estrazione**: si scrivono i generatori come *colonne* di una matrice $A$ e si riduce $A$ a scala. Le colonne di $A$ che corrispondono alle colonne dei pivot formano una base di $\langle v_1, \dots, v_k \rangle$, e $\dim \langle v_1, \dots, v_k \rangle = \operatorname{rk} A$. Il metodo è corretto perché le operazioni elementari sulle righe non cambiano le soluzioni di $A x = 0$, cioè le relazioni lineari tra le colonne.
- **Completamento**: si scrivono i vettori indipendenti come *righe* e si riduce a scala, poi si aggiungono i vettori canonici $e_j$ corrispondenti alle colonne prive di pivot. Le operazioni sulle righe non cambiano il sottospazio generato dalle righe, e le righe a scala insieme ai vettori aggiunti hanno un pivot in ogni colonna, quindi formano $n$ vettori indipendenti.
:::

:::esempio{titolo="Estrazione con la riduzione a scala"}
Generatori $v_1 = (1, 2, 1)$, $v_2 = (2, 4, 2)$, $v_3 = (0, 1, 1)$, $v_4 = (1, 3, 2)$, scritti come colonne:
$$
\begin{pmatrix}
1 & 2 & 0 & 1 \\
2 & 4 & 1 & 3 \\
1 & 2 & 1 & 2
\end{pmatrix}
\xrightarrow{\substack{R_2 \to R_2 - 2R_1 \\ R_3 \to R_3 - R_1}}
\begin{pmatrix}
1 & 2 & 0 & 1 \\
0 & 0 & 1 & 1 \\
0 & 0 & 1 & 1
\end{pmatrix}
\xrightarrow{R_3 \to R_3 - R_2}
\begin{pmatrix}
1 & 2 & 0 & 1 \\
0 & 0 & 1 & 1 \\
0 & 0 & 0 & 0
\end{pmatrix}
$$
I pivot sono nelle colonne $1$ e $3$, quindi $(v_1, v_3)$ è una **base** del sottospazio generato, che ha dimensione $2$. Le colonne senza pivot forniscono le relazioni $v_2 = 2v_1$ e $v_4 = v_1 + v_3$.
:::

:::attenzione
La base si prende tra le colonne della matrice *di partenza*. Le colonne della matrice a scala in generale non appartengono al sottospazio: per $\langle (1, 2) \rangle$ la riduzione di $\begin{pmatrix} 1 \\ 2 \end{pmatrix}$ dà $\begin{pmatrix} 1 \\ 0 \end{pmatrix}$, e $(1, 0)$ non è multiplo di $(1, 2)$.

::grafico{f="2*x" vettori="0,0,1,2,v;0,0,1,0,e₁" xmin=-2 xmax=2.5 ymin=-2.5 ymax=3 uguale=1 titolo="Il sottospazio $\langle (1, 2) \rangle$ è la retta $y = 2x$ che contiene $v = (1, 2)$; il vettore $e_1 = (1, 0)$ ottenuto dalla riduzione a scala non sta sulla retta"}

:::

## Forma parametrica e forma cartesiana

:::definizione{#forma-parametrica titolo="Forma parametrica"}
Un sottospazio $W = \langle w_1, \dots, w_k \rangle$ di $\mathbb{R}^n$ è descritto in **forma parametrica** dall'uguaglianza $x = t_1 w_1 + \dots + t_k w_k$, con $t_1, \dots, t_k \in \mathbb{R}$. Se i generatori sono indipendenti, il numero dei parametri è $\dim W$. Per esempio $\{ (s + t, s, t) : s, t \in \mathbb{R} \} = \langle (1, 1, 0), (1, 0, 1) \rangle$ è un piano di $\mathbb{R}^3$.
:::

:::definizione{#forma-cartesiana titolo="Forma cartesiana"}
Un sottospazio $W$ di $\mathbb{R}^n$ è descritto in **forma cartesiana** come l'insieme delle soluzioni di un sistema omogeneo $A x = 0$, con $A \in M_{m,n}(\mathbb{R})$. Per il teorema di Rouché-Capelli
$$
\dim W = n - \operatorname{rk} A ,
$$
quindi, se le equazioni sono indipendenti, il loro numero è $n - \dim W$: un piano di $\mathbb{R}^3$ ha una equazione, una retta di $\mathbb{R}^3$ ne ha due, un sottospazio di dimensione $3$ in $\mathbb{R}^4$ ne ha una.
:::

:::osservazione{#da-cartesiana-a-parametrica titolo="Dalla forma cartesiana alla parametrica"}
Si risolve il sistema, si esprimono le variabili dipendenti in funzione di quelle libere e si raccolgono le variabili libere: i vettori dei loro coefficienti formano una base di $W$. Per
$$
W :
\begin{cases}
x + y - z = 0 \\[4pt]
y + 2z = 0
\end{cases}
$$
la seconda equazione dà $y = -2z$ e la prima $x = z - y = 3z$, quindi $(x, y, z) = z\,(3, -2, 1)$ e $W = \langle (3, -2, 1) \rangle$, di dimensione $3 - 2 = 1$.
:::

:::osservazione{#da-parametrica-a-cartesiana titolo="Dalla forma parametrica alla cartesiana"}
Sia $W = \langle w_1, \dots, w_k \rangle$ con generatori indipendenti. Un vettore $x$ appartiene a $W$ se e solo se $w_1, \dots, w_k, x$ sono dipendenti, cioè se e solo se
$$
\operatorname{rk} \begin{pmatrix} w_1 & \cdots & w_k & x \end{pmatrix} = k .
$$
Si riduce a scala la matrice con colonne $w_1, \dots, w_k, x$: le righe che si annullano nelle prime $k$ colonne danno, nell'ultima colonna, le $n - k$ equazioni cartesiane. Quando $k = n - 1$ la condizione è l'annullarsi di un determinante. Per $W = \langle (1, 0, 2), (0, 1, -1) \rangle$ si ottiene
$$
\begin{vmatrix}
1 & 0 & x \\
0 & 1 & y \\
2 & -1 & z
\end{vmatrix}
= -2x + y + z = 0 ,
$$
cioè $W : 2x - y - z = 0$. Il controllo consiste nel sostituire i generatori nell'equazione trovata: $2 - 0 - 2 = 0$ e $0 - 1 + 1 = 0$.
:::

## Intersezione, somma e formula di Grassmann

:::teorema{#intersezione-di-sottospazi titolo="Intersezione di sottospazi"}
Siano $U$ e $W$ sottospazi di $V$. Allora $U \cap W$ è un sottospazio di $V$. Infatti il vettore nullo sta in entrambi, e somme e multipli di vettori comuni restano in entrambi, quindi si applica il criterio di sottospazio. Se $U$ e $W$ sono in forma cartesiana, le equazioni di $U \cap W$ si ottengono mettendo a sistema le equazioni di $U$ e quelle di $W$.
:::

:::attenzione
L'unione di due sottospazi in generale *non* è un sottospazio. Le rette $\langle (1, 1) \rangle$ e $\langle (1, -1) \rangle$ di $\mathbb{R}^2$ sono sottospazi, mentre la loro unione non contiene la somma $(1, 1) + (1, -1) = (2, 0)$.
:::

:::definizione{#somma-di-sottospazi titolo="Somma di sottospazi"}
Siano $U$ e $W$ sottospazi di $V$. La loro **somma** è
$$
U + W = \{ u + w : u \in U, \ w \in W \} .
$$
È il più piccolo sottospazio che contiene $U \cup W$. Se $U = \langle u_1, \dots, u_r \rangle$ e $W = \langle w_1, \dots, w_s \rangle$, allora $U + W = \langle u_1, \dots, u_r, w_1, \dots, w_s \rangle$, quindi una base della somma si estrae dall'unione delle due basi.
:::

::::teorema{#formula-di-grassmann titolo="Formula di Grassmann"}
Siano $U$ e $W$ sottospazi di uno spazio $V$ di dimensione finita. Allora
$$
\dim (U + W) = \dim U + \dim W - \dim (U \cap W) .
$$
La formula permette di calcolare una delle quattro dimensioni conoscendo le altre tre, e fornisce un controllo dei calcoli. Due piani distinti di $\mathbb{R}^3$ per l'origine hanno somma $\mathbb{R}^3$, quindi $\dim (U \cap W) = 2 + 2 - 3 = 1$, cioè si intersecano in una retta.

:::dimostrazione
Sia $(z_1, \dots, z_r)$ una base di $U \cap W$. Per il **teorema di completamento** si completa a una base $(z_1, \dots, z_r, u_1, \dots, u_s)$ di $U$ e a una base $(z_1, \dots, z_r, w_1, \dots, w_t)$ di $W$, quindi $\dim U = r + s$ e $\dim W = r + t$. Si mostra che $\mathcal{B} = (z_1, \dots, z_r, u_1, \dots, u_s, w_1, \dots, w_t)$ è una base di $U + W$. I vettori di $\mathcal{B}$ generano $U + W$, poiché contengono una base di $U$ e una base di $W$. Per l'indipendenza, sia
$$
\sum_i a_i z_i + \sum_j b_j u_j + \sum_l c_l w_l = 0 .
$$
Il vettore $w = \sum_l c_l w_l$ sta in $W$ ed è uguale a $-\sum_i a_i z_i - \sum_j b_j u_j$, che sta in $U$; quindi $w \in U \cap W$ e si scrive $w = \sum_i d_i z_i$. Da $\sum_i d_i z_i - \sum_l c_l w_l = 0$ e dall'indipendenza della base di $W$ segue che tutti i $c_l$ sono nulli. La relazione iniziale diventa $\sum_i a_i z_i + \sum_j b_j u_j = 0$, e dall'indipendenza della base di $U$ segue che anche gli $a_i$ e i $b_j$ sono nulli. Perciò
$$
\dim (U + W) = r + s + t = (r + s) + (r + t) - r .
$$
:::
::::

:::richiamo{titolo="Completamento a una base"}
Se $\dim V = n$ e $v_1, \dots, v_k \in V$ sono linearmente indipendenti con $k < n$, esistono $v_{k+1}, \dots, v_n$ tali che $(v_1, \dots, v_n)$ è una base di $V$.
:::

:::osservazione{#calcolo-di-somma-e-intersezione titolo="Calcolo di somma e intersezione"}
- **Somma**: si uniscono le basi di $U$ e di $W$ e si estrae una base con la riduzione a scala; $\dim (U + W)$ è il rango della matrice che ha come colonne tutti i generatori.
- **Intersezione** con entrambi i sottospazi in forma cartesiana: si mettono a sistema tutte le equazioni.
- **Intersezione** con $U$ in forma cartesiana e $W = \langle w_1, \dots, w_s \rangle$: si sostituisce il vettore generico $t_1 w_1 + \dots + t_s w_s$ nelle equazioni di $U$ e si ricavano le condizioni sui parametri.

Le dimensioni trovate devono soddisfare la formula di Grassmann. Per $U : x - z = 0$ e $W : y + z = 0$ in $\mathbb{R}^3$, il sistema delle due equazioni dà $x = z$, $y = -z$, quindi $U \cap W = \langle (1, -1, 1) \rangle$, e $\dim (U + W) = 2 + 2 - 1 = 3$, cioè $U + W = \mathbb{R}^3$.
:::

## Somma diretta

:::definizione{#somma-diretta titolo="Somma diretta"}
La somma di due sottospazi $U$ e $W$ è **diretta** se $U \cap W = \{0\}$, e in tal caso si scrive $U \oplus W$. Se inoltre $U \oplus W = V$, i due sottospazi si dicono **supplementari** in $V$. Per la formula di Grassmann la somma è diretta se e solo se $\dim (U + W) = \dim U + \dim W$.
:::

::::teorema{#caratterizzazione-somma-diretta titolo="Unicità della decomposizione"}
Siano $U$ e $W$ sottospazi di $V$. La somma $U + W$ è diretta se e solo se ogni vettore di $U + W$ si scrive in **un solo modo** come $u + w$ con $u \in U$ e $w \in W$. Nella somma diretta ogni vettore ha quindi due componenti ben determinate, una in $U$ e una in $W$.

::grafico{f="x/2;-x" vettori="0,0,2,1,u;0,0,-1,1,w;0,0,1,2,v" segmenti="2,1,1,2;-1,1,1,2" xmin=-2.5 xmax=3 ymin=-1.5 ymax=2.6 uguale=1 titolo="$\mathbb{R}^2 = U \oplus W$ con $U = \langle (2, 1) \rangle$ e $W = \langle (-1, 1) \rangle$ (tratteggiata): il vettore $v = (1, 2)$ si decompone in un solo modo come $u + w$, con $u = (2, 1)$ e $w = (-1, 1)$"}

:::dimostrazione
Sia $U \cap W = \{0\}$ e sia $u + w = u' + w'$ con $u, u' \in U$ e $w, w' \in W$. Allora $u - u' = w' - w$; il primo membro sta in $U$, il secondo in $W$, quindi entrambi stanno in $U \cap W = \{0\}$, perciò $u = u'$ e $w = w'$. Viceversa, se la decomposizione è unica e $v \in U \cap W$, le scritture $v = v + 0$ e $v = 0 + v$ sono due decomposizioni di $v$, quindi coincidono e $v = 0$.
:::
::::

:::osservazione{#criterio-dei-supplementari titolo="Criterio per i sottospazi supplementari"}
Sia $\dim V = n$. Allora $V = U \oplus W$ se e solo se sono soddisfatte insieme le condizioni
$$
\begin{cases}
U \cap W = \{0\} \\[4pt]
\dim U + \dim W = n
\end{cases}
$$
e questo equivale a dire che l'unione di una base di $U$ e di una base di $W$ è una base di $V$. Infatti per la formula di Grassmann le due condizioni danno $\dim (U + W) = n$, e per il teorema sulla dimensione di un sottospazio $U + W = V$. In $\mathbb{R}^3$ il piano $U : x + y + z = 0$ e la retta $W = \langle (1, 1, 1) \rangle$ sono **supplementari**, poiché $(1, 1, 1)$ non soddisfa l'equazione di $U$ e $2 + 1 = 3$. Il supplementare *non* è unico: anche $\langle (1, 0, 0) \rangle$ è supplementare di $U$.
:::

:::esempio{titolo="Matrici simmetriche e antisimmetriche"}
In $M_n(\mathbb{R})$ siano $S$ il sottospazio delle matrici simmetriche ($A^T = A$) e $K$ quello delle antisimmetriche ($A^T = -A$). Ogni matrice si decompone come
$$
A = \frac{A + A^T}{2} + \frac{A - A^T}{2} ,
$$
con il primo addendo in $S$ e il secondo in $K$, quindi $S + K = M_n(\mathbb{R})$. Se $A \in S \cap K$, allora $A = A^T = -A$, quindi $A = 0$. Perciò $M_n(\mathbb{R}) = S \oplus K$; per $n = 2$ le dimensioni sono $\dim S = 3$ e $\dim K = 1$, con somma $4 = \dim M_2(\mathbb{R})$.
:::
