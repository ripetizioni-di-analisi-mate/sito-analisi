---
titolo: Rette e piani nello spazio
sommario: Equazioni di piani e rette nello spazio, posizioni reciproche, angoli, distanze, proiezioni ortogonali, fasci di piani e retta di minima distanza tra due rette sghembe.
---

## Il piano: equazione cartesiana e vettore normale

:::definizione{#piano-per-un-punto titolo="Piano per un punto ortogonale a un vettore"}
Siano $P_0$ un punto dello spazio e $\vec{n}$ un vettore non nullo. Il piano per $P_0$ ortogonale a $\vec{n}$ è l'insieme dei punti $P$ per cui il vettore $\overrightarrow{P_0 P}$ è ortogonale a $\vec{n}$:
$$
\pi = \{ P : \vec{n} \cdot \overrightarrow{P_0 P} = 0 \} .
$$
Il vettore $\vec{n}$ si chiama **vettore normale** al piano. Un piano è quindi individuato da un punto e da una direzione ortogonale; poiché la condizione $\vec{n} \cdot \overrightarrow{P_0 P} = 0$ non cambia se si moltiplica $\vec{n}$ per un numero non nullo, il vettore normale è definito a meno di un fattore. Per il prodotto scalare e l'ortogonalità si rimanda all'argomento sui vettori.

::grafico{f="2-x" vettori="1,1,2,2,n;1,1,3,-1;1,1,0.5,2.5,P₀Q" punti="1,1,pieno,P₀;3,-1,pieno,P;0.5,2.5,pieno,Q" etichette="3.45,-0.95,π;2.2,0.2,P₀P" xmin=-1 xmax=4 ymin=-2 ymax=3.2 uguale=1 nomi="x,z" titolo="Sezione con il piano $y = 0$ del piano $\pi : x + z = 2$, di vettore normale $\vec{n} = (1, 0, 1)$: il vettore $\overrightarrow{P_0 P}$ con $P \in \pi$ è ortogonale a $\vec{n}$, mentre per il punto $Q$ fuori dal piano $\vec{n} \cdot \overrightarrow{P_0 Q} \neq 0$"}

:::

::::teorema{#equazione-cartesiana-piano titolo="Equazione cartesiana del piano"}
Ogni piano dello spazio è l'insieme delle soluzioni di un'equazione
$$
ax + by + cz + d = 0 \qquad \text{con } (a, b, c) \neq (0, 0, 0),
$$
e il vettore $(a, b, c)$ è normale al piano. Viceversa, ogni equazione di questo tipo rappresenta un piano con vettore normale $(a, b, c)$. Dall'equazione si leggono quindi le componenti di un vettore normale, e per scrivere l'equazione bastano un punto e un vettore normale. Il piano per $P_0 = (1, 2, -1)$ con $\vec{n} = (2, -1, 3)$ ha equazione $2(x - 1) - (y - 2) + 3(z + 1) = 0$, cioè $2x - y + 3z + 3 = 0$.

:::dimostrazione
Sia $\pi$ il piano per $P_0 = (x_0, y_0, z_0)$ ortogonale a $\vec{n} = (a, b, c)$. Scrivendo il prodotto scalare in componenti, la condizione $\vec{n} \cdot \overrightarrow{P_0 P} = 0$ diventa
$$
a(x - x_0) + b(y - y_0) + c(z - z_0) = 0 ,
$$
cioè $ax + by + cz + d = 0$ con $d = -(a x_0 + b y_0 + c z_0)$. Viceversa, sia data l'equazione con $(a, b, c) \neq (0, 0, 0)$ e sia, per esempio, $a \neq 0$. Il punto $P_0 = \left( -\dfrac{d}{a}, 0, 0 \right)$ soddisfa l'equazione, quindi $d = -(a x_0 + b y_0 + c z_0)$ con $(x_0, y_0, z_0) = P_0$. Sostituendo questa espressione di $d$, l'equazione diventa $a(x - x_0) + b(y - y_0) + c(z - z_0) = 0$, che è la condizione $\vec{n} \cdot \overrightarrow{P_0 P} = 0$; perciò le soluzioni formano il piano per $P_0$ ortogonale a $(a, b, c)$. Se $a = 0$ si ragiona allo stesso modo con il coefficiente non nullo tra $b$ e $c$.
:::
::::

:::osservazione{#piano-per-tre-punti titolo="Piano per tre punti"}
Tre punti $A$, $B$, $C$ non allineati individuano un unico piano. I vettori $\overrightarrow{AB}$ e $\overrightarrow{AC}$ sono paralleli al piano e non sono paralleli tra loro, quindi il loro prodotto vettoriale è un vettore normale:
$$
\vec{n} = \overrightarrow{AB} \times \overrightarrow{AC} .
$$
In modo equivalente, il punto $P = (x, y, z)$ sta nel piano se e solo se i vettori $\overrightarrow{AP}$, $\overrightarrow{AB}$, $\overrightarrow{AC}$ sono complanari, cioè se e solo se il loro prodotto misto è nullo:
$$
\begin{vmatrix}
x - x_A & y - y_A & z - z_A \\
x_B - x_A & y_B - y_A & z_B - z_A \\
x_C - x_A & y_C - y_A & z_C - z_A
\end{vmatrix} = 0 .
$$
Per $A = (1, 0, 0)$, $B = (0, 2, 0)$, $C = (0, 0, 3)$ si ha $\overrightarrow{AB} \times \overrightarrow{AC} = (-1, 2, 0) \times (-1, 0, 3) = (6, 3, 2)$, quindi il piano è $6x + 3y + 2z - 6 = 0$. Dividendo per $6$ si ottiene $\dfrac{x}{1} + \dfrac{y}{2} + \dfrac{z}{3} = 1$, forma in cui si leggono le intersezioni del piano con i tre assi.
:::

:::definizione{#equazioni-parametriche-piano titolo="Equazioni parametriche del piano"}
Siano $P_0$ un punto e $\vec{u}$, $\vec{w}$ due vettori non paralleli. Il piano per $P_0$ parallelo a $\vec{u}$ e a $\vec{w}$ è descritto dalle **equazioni parametriche**
$$
P = P_0 + s\,\vec{u} + t\,\vec{w}, \qquad s, t \in \mathbb{R} .
$$
Il passaggio alla forma cartesiana richiede un vettore normale, che è $\vec{n} = \vec{u} \times \vec{w}$. Il passaggio inverso consiste nel risolvere l'equazione cartesiana, che ha due incognite libere. Per il piano $x + y - z = 1$ si pone $y = s$, $z = t$ e si ricava $x = 1 - s + t$, quindi $P = (1, 0, 0) + s\,(-1, 1, 0) + t\,(1, 0, 1)$.
:::

## La retta: equazioni parametriche e cartesiane

:::definizione{#equazioni-parametriche-retta titolo="Equazioni parametriche della retta"}
Siano $P_0 = (x_0, y_0, z_0)$ un punto e $\vec{v} = (v_1, v_2, v_3)$ un vettore non nullo. La retta per $P_0$ parallela a $\vec{v}$ è l'insieme dei punti $P = P_0 + t\,\vec{v}$ al variare di $t \in \mathbb{R}$, cioè dei punti le cui coordinate soddisfano
$$
\begin{cases}
x = x_0 + v_1\, t \\[4pt]
y = y_0 + v_2\, t \\[4pt]
z = z_0 + v_3\, t
\end{cases}
\qquad t \in \mathbb{R} .
$$
Il vettore $\vec{v}$ si chiama **vettore direttore** della retta e le sue componenti si chiamano **parametri direttori**; come il vettore normale di un piano, il vettore direttore è definito a meno di un fattore non nullo. La retta per due punti distinti $A$ e $B$ ha vettore direttore $\overrightarrow{AB}$.
:::

:::esempio
La retta per $A = (1, -1, 2)$ con vettore direttore $\vec{v} = (2, 1, -3)$ ha equazioni parametriche $x = 1 + 2t$, $y = -1 + t$, $z = 2 - 3t$. Il punto $(5, 1, -4)$ appartiene alla retta, perché si ottiene per $t = 2$. Il punto $(3, 0, 0)$ *non* appartiene alla retta, perché le prime due equazioni danno $t = 1$ mentre la terza dà $t = \dfrac{2}{3}$.
:::

:::definizione{#equazioni-cartesiane-retta titolo="Equazioni cartesiane della retta"}
Una retta è l'intersezione di due piani non paralleli, quindi si descrive con il sistema
$$
\begin{cases}
a_1 x + b_1 y + c_1 z + d_1 = 0 \\[4pt]
a_2 x + b_2 y + c_2 z + d_2 = 0
\end{cases}
\qquad \text{con } \operatorname{rk} \begin{pmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \end{pmatrix} = 2 .
$$
Le due equazioni si chiamano **equazioni cartesiane** della retta. La condizione sul rango dice che i vettori normali $\vec{n}_1$ e $\vec{n}_2$ non sono paralleli; per il **teorema di Rouché-Capelli** il sistema ha allora $\infty^1$ soluzioni, che formano una retta. Le equazioni cartesiane di una retta *non* sono uniche, perché qualsiasi coppia di piani distinti che la contengono la rappresenta; l'insieme di tutti questi piani è il fascio di piani che ha la retta come asse.
:::

:::osservazione{#passaggio-tra-forme titolo="Passaggio tra le due forme"}
- **Dalle parametriche alle cartesiane**: si ricava $t$ da un'equazione in cui il suo coefficiente è diverso da zero e lo si sostituisce nelle altre due. Per la retta dell'esempio precedente, da $t = y + 1$ seguono $x = 2y + 3$ e $z = -3y - 1$, quindi le equazioni cartesiane sono
$$
\begin{cases}
x - 2y - 3 = 0 \\[4pt]
3y + z + 1 = 0
\end{cases}
$$
- **Dalle cartesiane alle parametriche**: si risolve il sistema scegliendo come parametro un'incognita libera, oppure si calcolano un punto e un vettore direttore. La retta giace in entrambi i piani, quindi il suo vettore direttore è ortogonale a $\vec{n}_1$ e a $\vec{n}_2$, e si può prendere
$$
\vec{v} = \vec{n}_1 \times \vec{n}_2 .
$$
Per la retta di equazioni $x + y - z = 1$ e $2x - y + z = 2$ si ottiene $\vec{v} = (1, 1, -1) \times (2, -1, 1) = (0, -3, -3)$, parallelo a $(0, 1, 1)$. Sommando le due equazioni si ha $3x = 3$, quindi $x = 1$ e $y = z$; un punto della retta è $(1, 0, 0)$ e le equazioni parametriche sono $x = 1$, $y = t$, $z = t$.
:::

## Posizioni reciproche di due piani e di una retta e un piano

::::teorema{#posizione-due-piani titolo="Posizione reciproca di due piani"}
Siano $\pi_1 : a_1 x + b_1 y + c_1 z + d_1 = 0$ e $\pi_2 : a_2 x + b_2 y + c_2 z + d_2 = 0$ due piani, e siano $A$ e $(A \mid b)$ la matrice dei coefficienti e la matrice completa del sistema formato dalle due equazioni.

- Se $\operatorname{rk} A = 2$, i piani sono **incidenti** e si intersecano in una retta.
- Se $\operatorname{rk} A = 1$ e $\operatorname{rk} (A \mid b) = 2$, i piani sono paralleli e distinti.
- Se $\operatorname{rk} A = \operatorname{rk} (A \mid b) = 1$, i piani sono coincidenti.

Nella pratica i piani sono *paralleli* quando i vettori normali sono proporzionali, e *coincidenti* quando sono proporzionali le intere equazioni. I piani $x + 2y - z = 1$ e $2x + 4y - 2z = 5$ sono paralleli e distinti, poiché $(2, 4, -2) = 2\,(1, 2, -1)$ mentre $5 \neq 2 \cdot 1$.

:::dimostrazione
I punti comuni ai due piani sono le soluzioni del sistema di due equazioni in tre incognite. Se $\operatorname{rk} A = 2$, anche $\operatorname{rk} (A \mid b) = 2$, poiché la matrice completa ha due righe; per il **teorema di Rouché-Capelli** le soluzioni dipendono allora da $3 - 2 = 1$ parametro e formano una retta. Se $\operatorname{rk} A = 1$, le due righe di $A$ sono proporzionali, quindi i vettori normali sono paralleli. In questo caso, se $\operatorname{rk} (A \mid b) = 2$ il sistema non ha soluzioni e i piani sono disgiunti; se $\operatorname{rk} (A \mid b) = 1$ la seconda equazione è un multiplo della prima e i due piani coincidono.
:::
::::

:::richiamo{titolo="Teorema di Rouché-Capelli"}
Sia $Ax = b$ un sistema lineare in $n$ incognite. Il sistema ha soluzioni se e solo se $\operatorname{rk} A = \operatorname{rk} (A \mid b)$; in tal caso le soluzioni dipendono da $n - \operatorname{rk} A$ parametri liberi.
:::

::::teorema{#posizione-retta-piano titolo="Posizione reciproca di una retta e un piano"}
Siano $r$ la retta $P = P_0 + t\,\vec{v}$ e $\pi$ il piano $ax + by + cz + d = 0$, con vettore normale $\vec{n} = (a, b, c)$.

- Se $\vec{n} \cdot \vec{v} \neq 0$, la retta e il piano sono **incidenti** in un solo punto.
- Se $\vec{n} \cdot \vec{v} = 0$ e $P_0 \notin \pi$, la retta è parallela al piano e non ha punti in comune con esso.
- Se $\vec{n} \cdot \vec{v} = 0$ e $P_0 \in \pi$, la retta è contenuta nel piano.

Il criterio richiede un solo prodotto scalare. Nel caso di incidenza il punto comune si trova sostituendo le equazioni parametriche nell'equazione del piano. Per $r : P = (1 + t,\ 2t,\ -1 + t)$ e $\pi : x - y + 2z = 1$ si ha $\vec{n} \cdot \vec{v} = (1, -1, 2) \cdot (1, 2, 1) = 1 \neq 0$; la sostituzione dà $t - 1 = 1$, quindi $t = 2$ e il punto comune è $(3, 4, 1)$.

:::dimostrazione
Sia $P_0 = (x_0, y_0, z_0)$. Sostituendo le coordinate di $P_0 + t\,\vec{v}$ nell'equazione del piano si ottiene l'equazione di primo grado nell'incognita $t$
$$
(\vec{n} \cdot \vec{v})\, t + (a x_0 + b y_0 + c z_0 + d) = 0 .
$$
Se $\vec{n} \cdot \vec{v} \neq 0$ l'equazione ha un'unica soluzione, quindi la retta e il piano hanno un solo punto comune. Se $\vec{n} \cdot \vec{v} = 0$ l'equazione si riduce a $a x_0 + b y_0 + c z_0 + d = 0$, che non dipende da $t$. Se $P_0 \in \pi$ questa uguaglianza è vera, perciò ogni punto della retta sta nel piano; se $P_0 \notin \pi$ è falsa, perciò nessun punto della retta sta nel piano.
:::
::::

## Posizioni reciproche di due rette

:::definizione{#rette-sghembe titolo="Rette complanari e rette sghembe"}
Due rette dello spazio si dicono **complanari** se esiste un piano che le contiene entrambe, **sghembe** in caso contrario. Due rette complanari sono *incidenti* se hanno un solo punto in comune, *parallele* se hanno vettori direttori paralleli; due rette parallele con un punto in comune coincidono. Due rette sghembe non hanno punti comuni e non sono parallele, situazione che nel piano non si presenta. L'asse $x$ e la retta di equazioni $x = 0$, $z = 1$ sono sghembe, perché non hanno punti comuni (sulla prima $z = 0$, sulla seconda $z = 1$) e i loro vettori direttori $(1, 0, 0)$ e $(0, 1, 0)$ non sono paralleli.
:::

::::teorema{#criterio-complanarita-rette titolo="Criterio di complanarità di due rette"}
Siano $r$ la retta per $A$ con vettore direttore $\vec{v}$ e $s$ la retta per $B$ con vettore direttore $\vec{w}$. Le rette $r$ e $s$ sono complanari se e solo se
$$
\overrightarrow{AB} \cdot (\vec{v} \times \vec{w}) = 0 ,
$$
cioè se e solo se è nullo il determinante della matrice che ha per righe le componenti di $\overrightarrow{AB}$, $\vec{v}$ e $\vec{w}$. Il criterio stabilisce con un determinante di ordine $3$ se due rette sono sghembe, senza cercare i punti comuni.

:::dimostrazione
Se $\vec{v}$ e $\vec{w}$ sono paralleli, il prodotto vettoriale $\vec{v} \times \vec{w}$ è nullo e quindi il prodotto misto è nullo; d'altra parte due rette parallele sono complanari, perciò in questo caso l'equivalenza vale. Siano allora $\vec{v}$ e $\vec{w}$ non paralleli. Se le rette stanno in un piano $\pi$, i vettori $\overrightarrow{AB}$, $\vec{v}$, $\vec{w}$ sono paralleli a $\pi$, quindi sono complanari e il loro prodotto misto è nullo per il **criterio di complanarità** dei vettori. Viceversa, si supponga nullo il prodotto misto e sia $\pi$ il piano per $A$ con vettore normale $\vec{n} = \vec{v} \times \vec{w}$, che è non nullo. Il piano contiene $r$, poiché $A \in \pi$ e $\vec{n} \cdot \vec{v} = 0$. Il piano contiene anche $B$, poiché $\vec{n} \cdot \overrightarrow{AB} = 0$, e poiché $\vec{n} \cdot \vec{w} = 0$ contiene tutta la retta $s$ per il teorema sulla posizione reciproca di una retta e un piano. Quindi le rette sono complanari.
:::
::::

:::richiamo{titolo="Criterio di complanarità di tre vettori"}
Tre vettori $\vec{u}$, $\vec{v}$, $\vec{w}$ dello spazio sono complanari se e solo se $\vec{u} \cdot (\vec{v} \times \vec{w}) = 0$.
:::

:::osservazione{#classificazione-due-rette titolo="Classificazione di due rette"}
Se una delle rette è data in forma cartesiana, se ne calcolano prima un punto e un vettore direttore. La classificazione richiede poi due controlli.

- Se $\vec{v}$ e $\vec{w}$ sono paralleli, le rette sono **parallele**; coincidono se $B \in r$.
- Se $\vec{v}$ e $\vec{w}$ non sono paralleli e $\overrightarrow{AB} \cdot (\vec{v} \times \vec{w}) = 0$, le rette sono **incidenti**, e il punto comune si trova risolvendo il sistema $A + t\,\vec{v} = B + u\,\vec{w}$ nelle incognite $t$ e $u$.
- Se $\overrightarrow{AB} \cdot (\vec{v} \times \vec{w}) \neq 0$, le rette sono **sghembe**.
:::

:::esempio
Siano $r : P = (t,\ 1 + t,\ 1)$, con $A = (0, 1, 1)$ e $\vec{v} = (1, 1, 0)$, e $s : P = (1,\ u,\ 2u)$, con $B = (1, 0, 0)$ e $\vec{w} = (0, 1, 2)$. I vettori direttori non sono paralleli e $\vec{v} \times \vec{w} = (2, -2, 1)$. Poiché $\overrightarrow{AB} \cdot (\vec{v} \times \vec{w}) = (1, -1, -1) \cdot (2, -2, 1) = 3 \neq 0$, le rette sono **sghembe**. La retta $s' : P = (2,\ 2 + u,\ -1 + 2u)$, parallela a $s$ e passante per $B' = (2, 2, -1)$, dà invece $\overrightarrow{AB'} \cdot (\vec{v} \times \vec{w}) = (2, 1, -2) \cdot (2, -2, 1) = 0$, quindi $r$ e $s'$ sono **incidenti**. Il sistema $t = 2$, $1 + t = 2 + u$, $1 = -1 + 2u$ ha la soluzione $t = 2$, $u = 1$, e il punto comune è $(2, 3, 1)$.
:::

## Angoli tra rette e piani

Gli angoli si calcolano con il prodotto scalare dei vettori direttori e normali, e si sceglie sempre l'angolo acuto o retto.

:::definizione{#angolo-tra-rette titolo="Angolo tra due rette"}
Siano $r$ e $s$ due rette con vettori direttori $\vec{v}$ e $\vec{w}$. L'**angolo** tra $r$ e $s$ è il numero $\theta \in \left[0, \dfrac{\pi}{2}\right]$ tale che
$$
\cos\theta = \frac{|\vec{v} \cdot \vec{w}|}{\|\vec{v}\|\, \|\vec{w}\|} .
$$
Il valore assoluto è necessario perché il vettore direttore è definito a meno del segno, e sostituire $\vec{v}$ con $-\vec{v}$ trasforma l'angolo tra i vettori nel suo supplementare. La definizione vale anche per rette sghembe. Per $\vec{v} = (1, 1, 0)$ e $\vec{w} = (1, 0, 0)$ si ha $\cos\theta = \dfrac{1}{\sqrt{2}}$, quindi $\theta = \dfrac{\pi}{4}$.
:::

:::definizione{#angolo-retta-piano titolo="Angolo tra una retta e un piano"}
Siano $r$ una retta con vettore direttore $\vec{v}$ e $\pi$ un piano con vettore normale $\vec{n}$. L'**angolo** tra $r$ e $\pi$ è l'angolo $\theta \in \left[0, \dfrac{\pi}{2}\right]$ tra $r$ e la sua proiezione ortogonale su $\pi$, con $\theta = \dfrac{\pi}{2}$ se $r$ è perpendicolare a $\pi$. Poiché $\vec{n}$ è ortogonale al piano, l'angolo tra $r$ e la direzione di $\vec{n}$ è $\dfrac{\pi}{2} - \theta$, quindi
$$
\sin\theta = \frac{|\vec{v} \cdot \vec{n}|}{\|\vec{v}\|\, \|\vec{n}\|} .
$$
Nella formula compare il *seno*, perché il prodotto scalare misura l'angolo con la normale. Per $\vec{v} = (1, 0, 1)$ e il piano $x + y = 2$, con $\vec{n} = (1, 1, 0)$, si ha $\sin\theta = \dfrac{1}{2}$, quindi $\theta = \dfrac{\pi}{6}$.

::grafico{f="0.5*x" vettori="0,0,0,2,n;0,0,2.4,1.2" etichette="1.0,0.85,v;1.3,0.2,θ;0.2,1.3,π/2 − θ;3,-0.4,π;-2.6,-1,r" xmin=-3 xmax=3.4 ymin=-1.6 ymax=2.5 uguale=1 nomi="x,z" titolo="Sezione con il piano $y = 0$ del piano $\pi : z = 0$ e della retta $r$ per l'origine con $\vec{v} = (2, 0, 1)$: $r$ forma con $\pi$ l'angolo $\theta$ e con $\vec{n} = (0, 0, 1)$ l'angolo $\dfrac{\pi}{2} - \theta$"}

:::

:::definizione{#angolo-tra-piani titolo="Angolo tra due piani"}
Siano $\pi_1$ e $\pi_2$ due piani con vettori normali $\vec{n}_1$ e $\vec{n}_2$. L'**angolo** tra $\pi_1$ e $\pi_2$ è il numero $\theta \in \left[0, \dfrac{\pi}{2}\right]$ tale che
$$
\cos\theta = \frac{|\vec{n}_1 \cdot \vec{n}_2|}{\|\vec{n}_1\|\, \|\vec{n}_2\|} .
$$
Se i piani sono incidenti, la sezione con un piano perpendicolare alla retta comune li mostra come due rette, e i vettori normali come due vettori ortogonali a quelle rette; perciò l'angolo tra le normali coincide con l'angolo tra le due rette della sezione. Per $\pi_1 : x - y = 0$ e $\pi_2 : y - z = 0$ si ha $|\vec{n}_1 \cdot \vec{n}_2| = |(1, -1, 0) \cdot (0, 1, -1)| = 1$ e $\|\vec{n}_1\| = \|\vec{n}_2\| = \sqrt{2}$, quindi $\cos\theta = \dfrac{1}{2}$ e $\theta = \dfrac{\pi}{3}$.

::grafico{f="x" vettori="0,0,0,1.8,n₁;0,0,-1.27,1.27,n₂" etichette="2.7,-0.4,π₁;2.1,2.5,π₂;0.6,0.22,θ;-0.35,1.05,θ" xmin=-2.4 xmax=3 ymin=-1.2 ymax=2.8 uguale=1 nomi="x,z" titolo="Sezione con il piano $y = 0$ dei piani $\pi_1 : z = 0$ e $\pi_2 : x - z = 0$, che si intersecano lungo l'asse $y$: le tracce formano l'angolo $\theta = \dfrac{\pi}{4}$, lo stesso angolo formato dai vettori normali $\vec{n}_1 = (0, 0, 1)$ e $\vec{n}_2 = (-1, 0, 1)$"}

:::

:::osservazione{#parallelismo-perpendicolarita titolo="Parallelismo e perpendicolarità"}
Le condizioni di parallelismo e di perpendicolarità si leggono sui vettori direttori e normali.

- Una retta $r$ è parallela al piano $\pi$ se e solo se $\vec{v} \cdot \vec{n} = 0$, ed è perpendicolare a $\pi$ se e solo se $\vec{v}$ e $\vec{n}$ sono paralleli.
- Due piani sono paralleli se e solo se $\vec{n}_1$ e $\vec{n}_2$ sono paralleli, e sono perpendicolari se e solo se $\vec{n}_1 \cdot \vec{n}_2 = 0$.
- Due rette sono perpendicolari se e solo se $\vec{v} \cdot \vec{w} = 0$, anche quando sono sghembe.

Queste condizioni servono a scrivere rette e piani soggetti a vincoli assegnati. La retta per $P_0$ perpendicolare al piano $\pi$ ha vettore direttore $\vec{n}$, e il piano per $P_0$ perpendicolare alla retta $r$ ha vettore normale $\vec{v}$.
:::

## Distanze

::::teorema{#distanza-punto-piano titolo="Distanza di un punto da un piano"}
Siano $P_1 = (x_1, y_1, z_1)$ un punto e $\pi : ax + by + cz + d = 0$ un piano. La distanza di $P_1$ da $\pi$, cioè la minima distanza di $P_1$ dai punti di $\pi$, è
$$
d(P_1, \pi) = \frac{|a x_1 + b y_1 + c z_1 + d|}{\sqrt{a^2 + b^2 + c^2}} ,
$$
e il minimo è raggiunto nel piede $H$ della perpendicolare a $\pi$ condotta da $P_1$. La formula è l'analoga di quella della distanza di un punto da una retta nel piano: al numeratore si sostituiscono le coordinate del punto nel primo membro dell'equazione, al denominatore c'è la norma del vettore normale. Per $P_1 = (2, 1, -1)$ e $\pi : x + 2y + 2z - 6 = 0$ si ottiene $d = \dfrac{|2 + 2 - 2 - 6|}{3} = \dfrac{4}{3}$.

::grafico{f="2-x" vettori="3,-1,4,0,n;3,-1,3,3,P₀P₁" segmenti="3,3,1,1" punti="3,-1,pieno;1,1,pieno,H;3,3,pieno,P₁" etichette="-0.6,2.2,π;2.45,-1.45,P₀" xmin=-1 xmax=4.6 ymin=-1.8 ymax=3.6 uguale=1 nomi="x,z" titolo="Sezione con il piano $y = 0$ del piano $\pi : x + z = 2$ e del punto $P_1 = (3, 0, 3)$: la distanza $\|\overrightarrow{H P_1}\| = 2\sqrt{2}$ è il valore assoluto della componente di $\overrightarrow{P_0 P_1}$ lungo $\vec{n} = (1, 0, 1)$"}

:::dimostrazione
Sia $\vec{n} = (a, b, c)$ e sia $H$ il punto in cui la retta per $P_1$ con vettore direttore $\vec{n}$ incontra $\pi$; tale punto esiste ed è unico per il teorema sulla posizione reciproca di una retta e un piano, poiché $\vec{n} \cdot \vec{n} \neq 0$. Per ogni $Q \in \pi$ il vettore $\overrightarrow{HQ}$ è ortogonale a $\vec{n}$, mentre $\overrightarrow{H P_1}$ è parallelo a $\vec{n}$, quindi per il **teorema di Pitagora**
$$
\|\overrightarrow{Q P_1}\|^2 = \|\overrightarrow{H P_1}\|^2 + \|\overrightarrow{Q H}\|^2 \geq \|\overrightarrow{H P_1}\|^2 ,
$$
con uguaglianza solo per $Q = H$. La distanza è dunque $\|\overrightarrow{H P_1}\|$. Sia ora $P_0$ un punto di $\pi$. Poiché $\overrightarrow{P_0 P_1} = \overrightarrow{P_0 H} + \overrightarrow{H P_1}$ e $\overrightarrow{P_0 H}$ è ortogonale a $\vec{n}$, si ha $\vec{n} \cdot \overrightarrow{P_0 P_1} = \vec{n} \cdot \overrightarrow{H P_1}$, e quest'ultimo prodotto vale $\pm \|\vec{n}\|\, \|\overrightarrow{H P_1}\|$ perché i due vettori sono paralleli. Quindi
$$
d(P_1, \pi) = \frac{|\vec{n} \cdot \overrightarrow{P_0 P_1}|}{\|\vec{n}\|} .
$$
Infine $P_0$ soddisfa l'equazione del piano, perciò $a x_0 + b y_0 + c z_0 = -d$ e $\vec{n} \cdot \overrightarrow{P_0 P_1} = a x_1 + b y_1 + c z_1 + d$, da cui la formula.
:::
::::

::::teorema{#distanza-punto-retta titolo="Distanza di un punto da una retta"}
Siano $r$ la retta per $A$ con vettore direttore $\vec{v}$ e $P$ un punto. La distanza di $P$ da $r$ è
$$
d(P, r) = \frac{\|\overrightarrow{AP} \times \vec{v}\|}{\|\vec{v}\|} .
$$
In alternativa si trova il piede $H$ della perpendicolare, intersecando $r$ con il piano per $P$ ortogonale a $r$, e si calcola $\|\overrightarrow{HP}\|$; questo secondo metodo dà anche la proiezione di $P$ su $r$. Per $A = (1, 0, 0)$, $\vec{v} = (1, 2, 2)$ e $P = (2, 2, -1)$ si ha $\overrightarrow{AP} \times \vec{v} = (1, 2, -1) \times (1, 2, 2) = (6, -3, 0)$, di norma $3\sqrt{5}$, e poiché $\|\vec{v}\| = 3$ la distanza è $\sqrt{5}$.

::grafico{f="1+0*x" area="((x+2)/2+1+3-abs((x+2)/2+1-3))/2;(x/2+2+abs(x/2))/2;-2;4" vettori="-2,1,0,1,v;-2,1,2,3" segmenti="2,3,2,1" punti="-2,1,pieno;2,1,pieno,H;2,3,pieno,P" etichette="4.3,0.55,r;-0.6,2.2,AP;-2.6,1.2,A" xmin=-2.8 xmax=4.8 ymin=-0.6 ymax=3.6 uguale=1 titolo="Nel piano $z = 0$, la retta $r$ per $A = (-2, 1, 0)$ con $\vec{v} = (2, 0, 0)$ e il punto $P = (2, 3, 0)$: il parallelogramma costruito su $\vec{v}$ e $\overrightarrow{AP}$ ha base $\|\vec{v}\| = 2$ e altezza $d(P, r) = \|\overrightarrow{HP}\| = 2$"}

:::dimostrazione
Si applicano i vettori $\vec{v}$ e $\overrightarrow{AP}$ nel punto $A$. Il parallelogramma che essi determinano ha area $\|\overrightarrow{AP} \times \vec{v}\|$, per il significato geometrico del prodotto vettoriale. La stessa area è il prodotto della base per l'altezza: la base è il lato $\vec{v}$, di lunghezza $\|\vec{v}\|$, che giace su $r$, e l'altezza relativa a questa base è la distanza di $P$ dalla retta $r$. Dividendo l'area per $\|\vec{v}\|$ si ottiene la formula.
:::
::::

:::osservazione{#distanze-tra-rette-e-piani titolo="Distanze tra rette e piani"}
Le altre distanze si riconducono alle due formule precedenti.

- Due piani paralleli hanno distanza uguale alla distanza di un punto qualsiasi di uno dei due dall'altro. Se le equazioni hanno gli stessi coefficienti, $ax + by + cz + d_1 = 0$ e $ax + by + cz + d_2 = 0$, la distanza è $\dfrac{|d_1 - d_2|}{\sqrt{a^2 + b^2 + c^2}}$.
- Una retta parallela a un piano ha dal piano la distanza di un suo punto qualsiasi.
- Due rette parallele hanno distanza uguale alla distanza di un punto di una dall'altra.
- Rette e piani che hanno punti in comune hanno distanza $0$.

I piani $x + 2y - 2z - 3 = 0$ e $x + 2y - 2z + 6 = 0$ hanno distanza $\dfrac{|-3 - 6|}{3} = 3$. Restano le rette sghembe, la cui distanza è positiva e si calcola con il teorema sulla perpendicolare comune.
:::

## Proiezioni ortogonali e punti simmetrici

:::definizione{#proiezione-punto-piano titolo="Proiezione ortogonale di un punto su un piano"}
Siano $P$ un punto e $\pi : ax + by + cz + d = 0$ un piano con vettore normale $\vec{n}$. La **proiezione ortogonale** di $P$ su $\pi$ è il punto $H \in \pi$ tale che $\overrightarrow{HP}$ è parallelo a $\vec{n}$, cioè il piede della perpendicolare a $\pi$ condotta da $P$. Per trovarla si interseca $\pi$ con la retta $P + t\,\vec{n}$; risolvendo l'equazione in $t$ si ottiene
$$
H = P - \frac{a x_P + b y_P + c z_P + d}{a^2 + b^2 + c^2}\, \vec{n} .
$$
Per $P = (3, 1, 2)$ e $\pi : x + y + z = 0$ la retta $(3 + t,\ 1 + t,\ 2 + t)$ incontra il piano quando $6 + 3t = 0$, cioè per $t = -2$, quindi $H = (1, -1, 0)$.
:::

:::definizione{#punto-simmetrico titolo="Punto simmetrico"}
Il **simmetrico** di un punto $P$ rispetto a un piano, o a una retta, è il punto $P'$ tale che la proiezione ortogonale $H$ di $P$ sia il punto medio del segmento $P P'$. Dalla formula del punto medio segue
$$
P' = 2H - P ,
$$
dove l'operazione si esegue sulle coordinate. Il simmetrico rispetto a un punto $C$ si ottiene con la stessa formula, con $H = C$. Nel caso del piano $x + y + z = 0$ e di $P = (3, 1, 2)$ si ha $H = (1, -1, 0)$, quindi $P' = (2, -2, 0) - (3, 1, 2) = (-1, -3, -2)$; come verifica, $\overrightarrow{P P'} = (-4, -4, -4)$ è parallelo a $\vec{n}$.

::grafico{f="1+0*x" segmenti="1,3,1,-1" vettori="-1.5,1,-1.5,2.2,n" punti="1,3,pieno,P;1,1,pieno,H;1,-1,pieno,P′" etichette="2.6,1.25,π" xmin=-2.5 xmax=3 ymin=-1.6 ymax=3.6 uguale=1 nomi="x,z" titolo="Sezione con il piano $y = 0$ del piano $\pi : z = 1$ e del punto $P = (1, 0, 3)$: la proiezione ortogonale $H = (1, 0, 1)$ è il punto medio del segmento $P P'$, con $P' = (1, 0, -1)$"}

:::

:::osservazione{#proiezione-punto-retta titolo="Proiezione ortogonale di un punto su una retta"}
La proiezione ortogonale di $P$ sulla retta $r : A + t\,\vec{v}$ è il punto $H \in r$ tale che $\overrightarrow{HP}$ è ortogonale a $\vec{v}$. I metodi per trovarla sono due.

- Si interseca $r$ con il piano per $P$ che ha vettore normale $\vec{v}$.
- Si impone $\left( P - A - t\,\vec{v} \right) \cdot \vec{v} = 0$, che dà $t = \dfrac{\overrightarrow{AP} \cdot \vec{v}}{\|\vec{v}\|^2}$, e si sostituisce il valore di $t$ nelle equazioni di $r$.

Per la retta $r$ di equazioni parametriche $x = 1 + t$, $y = t$, $z = -t$, con $A = (1, 0, 0)$ e $\vec{v} = (1, 1, -1)$, e per il punto $P = (2, 3, 1)$ si ha $\overrightarrow{AP} = (1, 3, 1)$ e $\overrightarrow{AP} \cdot \vec{v} = 1 + 3 - 1 = 3 = \|\vec{v}\|^2$, quindi $t = 1$, $H = (2, 1, -1)$ e il simmetrico di $P$ rispetto a $r$ è $P' = (2, -1, -3)$. Inoltre $d(P, r) = \|\overrightarrow{HP}\| = \|(0, 2, 2)\| = 2\sqrt{2}$.
:::

:::osservazione{#proiezione-retta-piano titolo="Proiezione ortogonale di una retta su un piano"}
Sia $r$ una retta non perpendicolare al piano $\pi$. Le proiezioni ortogonali dei punti di $r$ su $\pi$ formano una retta, intersezione di $\pi$ con il piano che contiene $r$ ed è perpendicolare a $\pi$. Il piano che contiene $r$ ed è perpendicolare a $\pi$ si determina con il fascio di piani di asse $r$. In alternativa si proiettano due punti di $r$; se $r$ incontra $\pi$, conviene scegliere come primo punto quello di intersezione, che coincide con la propria proiezione. Se $r$ è perpendicolare a $\pi$, la proiezione è il solo punto di intersezione. Sul piano $z = 0$ la proiezione si ottiene annullando la terza coordinata, perciò la retta $(1 + t,\ t,\ 2t)$ si proietta nella retta $(1 + t,\ t,\ 0)$.
:::

## Fasci di piani

:::definizione{#fascio-di-piani titolo="Fascio di piani"}
Il **fascio proprio** di asse $r$ è l'insieme di tutti i piani che contengono la retta $r$. Il **fascio improprio** è l'insieme dei piani paralleli a un piano dato $ax + by + cz + d = 0$, cioè dei piani $ax + by + cz + k = 0$ al variare di $k \in \mathbb{R}$. I fasci servono a scrivere il piano che contiene una retta assegnata e soddisfa una condizione in più, come il passaggio per un punto o il parallelismo con una retta.

::grafico{f="0.5*x;-x;3*x" punti="0,0,pieno" xmin=-2.5 xmax=2.5 ymin=-2.5 ymax=2.5 uguale=1 nomi="x,z" titolo="Sezione con il piano $y = 0$ di tre piani del fascio che ha per asse l'asse $y$: ogni piano del fascio appare come una retta per l'origine, il punto in cui la sezione incontra l'asse"}

:::

::::teorema{#piani-per-una-retta titolo="Piani che contengono una retta"}
Sia $r$ la retta di equazioni cartesiane $a_1 x + b_1 y + c_1 z + d_1 = 0$ e $a_2 x + b_2 y + c_2 z + d_2 = 0$, con vettori normali $\vec{n}_1$ e $\vec{n}_2$ non paralleli. I piani che contengono $r$ sono tutti e soli i piani di equazione
$$
\lambda\, (a_1 x + b_1 y + c_1 z + d_1) + \mu\, (a_2 x + b_2 y + c_2 z + d_2) = 0, \qquad (\lambda, \mu) \neq (0, 0) .
$$
Per trovare il piano del fascio che soddisfa un'ulteriore condizione si impone la condizione all'equazione, ottenendo un'equazione lineare omogenea in $\lambda$ e $\mu$; la coppia $(\lambda, \mu)$ è determinata a meno di un fattore. Porre $\lambda = 1$ fin dall'inizio esclude il secondo piano, che corrisponde a $\lambda = 0$. Per la retta $x - y = 0$, $z - 1 = 0$ e il punto $P = (1, 0, 0)$, la sostituzione dà $\lambda - \mu = 0$; con $\lambda = \mu = 1$ si ottiene il piano $x - y + z - 1 = 0$.

:::dimostrazione
L'equazione del fascio ha vettore dei coefficienti $\lambda\,\vec{n}_1 + \mu\,\vec{n}_2$, che è non nullo poiché $\vec{n}_1$ e $\vec{n}_2$ sono linearmente indipendenti e $(\lambda, \mu) \neq (0, 0)$; quindi l'equazione rappresenta un piano. Ogni punto di $r$ annulla sia $a_1 x + b_1 y + c_1 z + d_1$ sia $a_2 x + b_2 y + c_2 z + d_2$, perciò annulla la loro combinazione, e il piano contiene $r$. Viceversa, sia $\sigma$ un piano che contiene $r$, con vettore normale $\vec{n}$. Poiché $\sigma$ contiene $r$, il vettore $\vec{n}$ è ortogonale al vettore direttore $\vec{v}$ di $r$. I vettori ortogonali a $\vec{v}$ formano un sottospazio di dimensione $2$, il complemento ortogonale di $\langle \vec{v} \rangle$, che contiene i vettori indipendenti $\vec{n}_1$ e $\vec{n}_2$ e ne è quindi generato; perciò $\vec{n} = \lambda\,\vec{n}_1 + \mu\,\vec{n}_2$ per opportuni $\lambda$, $\mu$ non entrambi nulli. Il piano del fascio con questi coefficienti e il piano $\sigma$ hanno lo stesso vettore normale e passano entrambi per un punto $P_0$ di $r$, quindi sono lo stesso piano, per la definizione di piano per un punto ortogonale a un vettore.
:::
::::

:::esempio{titolo="Piano per una retta, perpendicolare a un piano"}
Si cerca il piano che contiene la retta $r$ di equazioni $x + z - 1 = 0$, $y - 2 = 0$ ed è perpendicolare al piano $\pi : x + y + 2z = 0$. Il fascio di asse $r$ è $\lambda\,(x + z - 1) + \mu\,(y - 2) = 0$, con vettore normale $(\lambda, \mu, \lambda)$. La perpendicolarità a $\pi$ richiede $(\lambda, \mu, \lambda) \cdot (1, 1, 2) = 3\lambda + \mu = 0$, quindi si può scegliere $\lambda = 1$, $\mu = -3$, e il piano cercato è
$$
x - 3y + z + 5 = 0 .
$$
L'intersezione di questo piano con $\pi$ è la proiezione ortogonale di $r$ su $\pi$.
:::

## Rette sghembe: distanza e retta di minima distanza

::::teorema{#perpendicolare-comune titolo="Perpendicolare comune a due rette sghembe"}
Siano $r : A + t\,\vec{v}$ e $s : B + u\,\vec{w}$ due rette sghembe. Esiste una e una sola retta incidente e perpendicolare sia a $r$ sia a $s$, detta **perpendicolare comune** o **retta di minima distanza**. Detti $H \in r$ e $K \in s$ i punti in cui essa incontra le due rette, per ogni $P \in r$ e $Q \in s$ vale
$$
\|\overrightarrow{PQ}\| \geq \|\overrightarrow{HK}\| ,
$$
con uguaglianza solo per $P = H$ e $Q = K$. La distanza tra $r$ e $s$ è quindi $d(r, s) = \|\overrightarrow{HK}\|$. Per trovare $H$ e $K$ si scrivono come punti generici delle due rette e si impone che $\overrightarrow{HK}$ sia ortogonale a $\vec{v}$ e a $\vec{w}$.

::grafico{f="0.5*x;-x" punti="0,0,pieno" etichette="0.25,0.4,H e K;2.2,1.45,r;-2.2,2.6,s" xmin=-2.6 xmax=2.8 ymin=-2.6 ymax=3 uguale=1 titolo="Le rette sghembe $r : y = \dfrac{x}{2},\ z = 0$ e $s : y = -x,\ z = 2$ viste dall'alto: le proiezioni sul piano $z = 0$ si incontrano nell'origine, dove si proietta la perpendicolare comune, il segmento dell'asse $z$ da $H = (0, 0, 0)$ a $K = (0, 0, 2)$"}

:::dimostrazione
Siano $H = A + t\,\vec{v}$ e $K = B + u\,\vec{w}$, così che $\overrightarrow{HK} = \overrightarrow{AB} + u\,\vec{w} - t\,\vec{v}$. Le condizioni $\overrightarrow{HK} \cdot \vec{v} = 0$ e $\overrightarrow{HK} \cdot \vec{w} = 0$ formano il sistema lineare nelle incognite $t$ e $u$
$$
\begin{cases}
(\vec{v} \cdot \vec{v})\, t - (\vec{v} \cdot \vec{w})\, u = \overrightarrow{AB} \cdot \vec{v} \\[4pt]
(\vec{v} \cdot \vec{w})\, t - (\vec{w} \cdot \vec{w})\, u = \overrightarrow{AB} \cdot \vec{w}
\end{cases}
$$
il cui determinante è $(\vec{v} \cdot \vec{w})^2 - \|\vec{v}\|^2 \|\vec{w}\|^2$. Le rette sono sghembe, quindi $\vec{v}$ e $\vec{w}$ non sono paralleli e per la **disuguaglianza di Cauchy-Schwarz** il determinante è diverso da zero. Il sistema ha perciò un'unica soluzione, e i punti $H$, $K$ sono distinti perché le rette non hanno punti comuni; la retta $HK$ è dunque l'unica retta incidente e perpendicolare a entrambe. Siano ora $P = A + t'\,\vec{v}$ e $Q = B + u'\,\vec{w}$ due punti qualsiasi delle due rette. Si ha
$$
\overrightarrow{PQ} = \overrightarrow{HK} + \left[ (u' - u)\, \vec{w} - (t' - t)\, \vec{v} \right] ,
$$
e il vettore $(u' - u)\, \vec{w} - (t' - t)\, \vec{v}$ è ortogonale a $\overrightarrow{HK}$, poiché è combinazione di $\vec{v}$ e $\vec{w}$. Per il **teorema di Pitagora**
$$
\|\overrightarrow{PQ}\|^2 = \|\overrightarrow{HK}\|^2 + \|(u' - u)\, \vec{w} - (t' - t)\, \vec{v}\|^2 \geq \|\overrightarrow{HK}\|^2 ,
$$
e l'uguaglianza vale solo se la combinazione è nulla, cioè, essendo $\vec{v}$ e $\vec{w}$ indipendenti, solo per $t' = t$ e $u' = u$.
:::
::::

:::richiamo{titolo="Disuguaglianza di Cauchy-Schwarz"}
Per ogni coppia di vettori $\vec{v}$, $\vec{w}$ vale $|\vec{v} \cdot \vec{w}| \leq \|\vec{v}\|\, \|\vec{w}\|$, con uguaglianza se e solo se $\vec{v}$ e $\vec{w}$ sono paralleli.
:::

::::teorema{#distanza-rette-sghembe titolo="Distanza tra due rette sghembe"}
Siano $r : A + t\,\vec{v}$ e $s : B + u\,\vec{w}$ due rette sghembe. Allora
$$
d(r, s) = \frac{|\overrightarrow{AB} \cdot (\vec{v} \times \vec{w})|}{\|\vec{v} \times \vec{w}\|} .
$$
La formula dà la distanza senza calcolare $H$ e $K$. Il numeratore è il prodotto misto del criterio di complanarità, quindi la formula assegna distanza positiva proprio alle rette sghembe. Per $r : P = (t,\ t,\ 0)$ e $s : P = (1,\ u,\ 2 + u)$ si ha $\vec{v} \times \vec{w} = (1, 1, 0) \times (0, 1, 1) = (1, -1, 1)$ e $\overrightarrow{AB} \cdot (\vec{v} \times \vec{w}) = (1, 0, 2) \cdot (1, -1, 1) = 3$, quindi $d(r, s) = \dfrac{3}{\sqrt{3}} = \sqrt{3}$.

:::dimostrazione
Siano $H = A + t\,\vec{v}$ e $K = B + u\,\vec{w}$ i punti della perpendicolare comune. Allora $\overrightarrow{AB} = \overrightarrow{HK} + t\,\vec{v} - u\,\vec{w}$, e moltiplicando scalarmente per $\vec{v} \times \vec{w}$, che è ortogonale a $\vec{v}$ e a $\vec{w}$, si ottiene
$$
\overrightarrow{AB} \cdot (\vec{v} \times \vec{w}) = \overrightarrow{HK} \cdot (\vec{v} \times \vec{w}) .
$$
Il vettore $\overrightarrow{HK}$ è ortogonale a $\vec{v}$ e a $\vec{w}$, che sono indipendenti, quindi è parallelo a $\vec{v} \times \vec{w}$, e il valore assoluto del loro prodotto scalare è $\|\overrightarrow{HK}\|\, \|\vec{v} \times \vec{w}\|$. Dividendo per $\|\vec{v} \times \vec{w}\|$ si ottiene $\|\overrightarrow{HK}\| = d(r, s)$.
:::
::::

:::osservazione{#metodi-retta-minima-distanza titolo="Due metodi per la retta di minima distanza"}
- **Metodo dei punti generici**: si scrivono $H = A + t\,\vec{v}$ e $K = B + u\,\vec{w}$, si impongono $\overrightarrow{HK} \cdot \vec{v} = 0$ e $\overrightarrow{HK} \cdot \vec{w} = 0$ e si risolve il sistema in $t$ e $u$. La retta cercata è la retta $HK$, e il metodo fornisce anche i punti di minima distanza e la distanza.
- **Metodo dei due piani**: la perpendicolare comune ha vettore direttore $\vec{n} = \vec{v} \times \vec{w}$, quindi giace nel piano $\alpha$ che contiene $r$ ed è parallelo a $\vec{n}$ e nel piano $\beta$ che contiene $s$ ed è parallelo a $\vec{n}$. Il piano $\alpha$ passa per $A$ con vettore normale $\vec{v} \times \vec{n}$, il piano $\beta$ passa per $B$ con vettore normale $\vec{w} \times \vec{n}$, e le loro equazioni sono le equazioni cartesiane della perpendicolare comune.
:::

:::esempio{titolo="Retta di minima distanza"}
Per le rette $r : P = (t,\ t,\ 0)$ e $s : P = (1,\ u,\ 2 + u)$ i punti generici sono $H = (t, t, 0)$ e $K = (1, u, 2 + u)$, quindi $\overrightarrow{HK} = (1 - t,\ u - t,\ 2 + u)$. Le due condizioni di ortogonalità sono
$$
\begin{cases}
\overrightarrow{HK} \cdot (1, 1, 0) = 1 - 2t + u = 0 \\[4pt]
\overrightarrow{HK} \cdot (0, 1, 1) = 2 - t + 2u = 0
\end{cases}
$$
Dalla prima equazione $u = 2t - 1$, e sostituendo nella seconda si ottiene $3t = 0$; quindi $t = 0$, $u = -1$, $H = (0, 0, 0)$ e $K = (1, -1, 1)$. La retta di minima distanza è $P = (\lambda,\ -\lambda,\ \lambda)$ con $\lambda \in \mathbb{R}$, e $\|\overrightarrow{HK}\| = \sqrt{3}$ conferma la distanza calcolata con la formula.
:::
