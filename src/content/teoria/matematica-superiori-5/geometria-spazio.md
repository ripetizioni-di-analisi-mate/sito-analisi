---
titolo: Geometria analitica nello spazio
sommario: Come si descrivono con le coordinate i punti, i vettori, i piani, le rette e le superfici sferiche dello spazio, come si calcolano distanze, angoli e prodotti tra vettori e come si stabilisce la posizione reciproca di rette e piani.
---

## Coordinate cartesiane nello spazio

:::definizione{#coordinate-spazio titolo="Sistema di riferimento cartesiano nello spazio"}
Un **sistema di riferimento cartesiano** nello spazio è formato da tre rette orientate, gli assi $x$, $y$ e $z$, che passano per uno stesso punto $O$, detto origine, e sono perpendicolari a due a due; su tutti e tre gli assi si usa la stessa unità di misura. Gli assi si orientano in modo che, guardando il piano degli assi $x$ e $y$ dal semiasse positivo delle $z$, la rotazione di un angolo retto che porta il semiasse positivo delle $x$ sul semiasse positivo delle $y$ sia antioraria.

Per un punto $P$ dello spazio si conducono i tre piani che passano per $P$ e sono perpendicolari agli assi. Questi piani intersecano gli assi in tre punti, e le loro coordinate sugli assi sono le **coordinate** di $P$, che si scrive $P(x_P, y_P, z_P)$. I numeri $x_P$, $y_P$ e $z_P$ si chiamano ascissa, ordinata e **quota** di $P$.

Per esempio, il punto $P(2, 3, 4)$ si raggiunge partendo dall'origine, spostandosi di $2$ unità nel verso dell'asse $x$, poi di $3$ unità nel verso dell'asse $y$, e salendo infine di $4$ unità nel verso dell'asse $z$. Il punto $H(2, 3, 0)$ si trova sotto $P$, nel piano degli assi $x$ e $y$, e si chiama proiezione di $P$ su quel piano.

::grafico{assi=0 uguale=1 linee="0,0 -2,-2;-1.68,-1.89 -2,-2 -1.89,-1.68;0,0 5,0;4.70,0.15 5,0 4.70,-0.15;0,0 0,5;-0.15,4.70 0,5 0.15,4.70" segmenti="-1,-1,2,-1;3,0,2,-1;2,-1,2,3;3,0,3,4;3,4,2,3;0,4,3,4" punti="2,3,pieno,P;2,-1,pieno,H" etichette="-2.35,-1.75,x;5.1,-0.45,y;0.25,4.9,z;-1.45,-0.75,2;3.05,-0.5,3;-0.45,3.85,4" xmin=-2.6 xmax=5.6 ymin=-2.4 ymax=5.4 titolo="Il punto $P(2, 3, 4)$ e la sua proiezione $H(2, 3, 0)$ sul piano degli assi $x$ e $y$; i segmenti tratteggiati sono spigoli del parallelepipedo che ha per vertici opposti l'origine e $P$"}

:::

:::osservazione{#piani-coordinati titolo="Piani coordinati e punti sugli assi"}
I tre piani che contengono due assi si chiamano **piani coordinati**. Il piano degli assi $x$ e $y$ è formato dai punti con quota nulla, quindi ha equazione $z = 0$; allo stesso modo il piano degli assi $x$ e $z$ ha equazione $y = 0$ e il piano degli assi $y$ e $z$ ha equazione $x = 0$. Un punto sull'asse $x$ ha nulle l'ordinata e la quota, cioè ha coordinate $(a, 0, 0)$; i punti degli assi $y$ e $z$ hanno coordinate $(0, b, 0)$ e $(0, 0, c)$. Per esempio $A(0, -3, 5)$ sta nel piano $x = 0$ e $B(0, 0, -2)$ sta sull'asse $z$.
:::

:::teorema{#distanza-due-punti titolo="Distanza tra due punti"}
La distanza tra i punti $A(x_A, y_A, z_A)$ e $B(x_B, y_B, z_B)$ è
$$
\overline{AB} = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2} .
$$
La formula si ottiene applicando due volte il teorema di Pitagora. Sia $K(x_B, y_B, z_A)$ il punto che ha la stessa quota di $A$ e si trova sulla verticale di $B$. Il segmento $AK$ è orizzontale, quindi per la formula della distanza nel piano $\overline{AK}^2 = (x_B - x_A)^2 + (y_B - y_A)^2$. Il segmento $KB$ è verticale e misura $|z_B - z_A|$, perciò il triangolo $AKB$ è rettangolo in $K$ e $\overline{AB}^2 = \overline{AK}^2 + \overline{KB}^2$.

Per $A(1, 2, -1)$ e $B(3, -1, 5)$ le differenze delle coordinate sono $2$, $-3$ e $6$, quindi
$$
\overline{AB} = \sqrt{4 + 9 + 36} = \sqrt{49} = 7 .
$$
La distanza di un punto $P(x, y, z)$ dall'origine è $\overline{OP} = \sqrt{x^2 + y^2 + z^2}$; per il punto $P(2, 3, 4)$ si ottiene $\sqrt{29}$, che è la lunghezza della diagonale del parallelepipedo con vertici opposti nell'origine e in $P$.
:::

:::teorema{#punto-medio titolo="Punto medio di un segmento"}
Il punto medio $M$ del segmento di estremi $A(x_A, y_A, z_A)$ e $B(x_B, y_B, z_B)$ ha come coordinate le medie delle coordinate degli estremi:
$$
M\left( \frac{x_A + x_B}{2}, \frac{y_A + y_B}{2}, \frac{z_A + z_B}{2} \right) .
$$
Per $A(1, 2, -1)$ e $B(3, -1, 5)$ si ottiene $M\left( 2, \dfrac{1}{2}, 2 \right)$. La formula serve anche al contrario. Se $M(2, 0, 1)$ è il punto medio di $AB$ e $A(5, -1, 3)$, allora $x_B = 2 \cdot 2 - 5 = -1$, $y_B = 0 + 1 = 1$ e $z_B = 2 \cdot 1 - 3 = -1$, cioè $B(-1, 1, -1)$; il punto $B$ si chiama simmetrico di $A$ rispetto a $M$.
:::

:::osservazione{#baricentro titolo="Baricentro di un triangolo"}
Il **baricentro** del triangolo di vertici $A$, $B$ e $C$ è il punto in cui si incontrano le tre mediane. Le sue coordinate sono le medie delle coordinate dei tre vertici:
$$
G\left( \frac{x_A + x_B + x_C}{3}, \frac{y_A + y_B + y_C}{3}, \frac{z_A + z_B + z_C}{3} \right) .
$$
Per $A(1, 0, 2)$, $B(3, 4, -1)$ e $C(-1, 2, 5)$ si ha $G(1, 2, 2)$.
:::

## Vettori nello spazio

:::definizione{#vettori-spazio titolo="Vettori e loro componenti"}
Un **vettore** è individuato da una direzione, un verso e un modulo, cioè una lunghezza. Si indica con $\vec{v}$ e si rappresenta con una freccia; due frecce parallele, con lo stesso verso e la stessa lunghezza rappresentano lo stesso vettore. Siano $\vec{i}$, $\vec{j}$ e $\vec{k}$ i vettori di modulo $1$ diretti come i semiassi positivi $x$, $y$ e $z$. Ogni vettore si scrive in un solo modo come
$$
\vec{v} = a\,\vec{i} + b\,\vec{j} + c\,\vec{k} ,
$$
e i numeri $a$, $b$ e $c$ sono le **componenti** di $\vec{v}$; si scrive $\vec{v} = (a, b, c)$. Il vettore che va dal punto $A$ al punto $B$ ha per componenti le differenze delle coordinate:
$$
\overrightarrow{AB} = (x_B - x_A,\ y_B - y_A,\ z_B - z_A) .
$$
Il **modulo** di $\vec{v} = (a, b, c)$ è la lunghezza della freccia, quindi per la formula della distanza vale $|\vec{v}| = \sqrt{a^2 + b^2 + c^2}$. Per $A(1, 0, 2)$ e $B(3, 4, 6)$ si ha $\overrightarrow{AB} = (2, 4, 4)$ e $\left| \overrightarrow{AB} \right| = \sqrt{4 + 16 + 16} = 6$, che è la distanza tra $A$ e $B$.
:::

:::definizione{#operazioni-vettori titolo="Somma di vettori e prodotto per un numero"}
La **somma** di due vettori si ottiene con la regola del parallelogramma, come nel piano, e in componenti si calcola componente per componente. Il **prodotto** di un numero reale $k$ per un vettore moltiplica per $k$ tutte le componenti:
$$
(a, b, c) + (a', b', c') = (a + a',\ b + b',\ c + c') ,
\qquad
k\,(a, b, c) = (ka,\ kb,\ kc) .
$$
Il vettore $k\,\vec{v}$ ha la stessa direzione di $\vec{v}$, lo stesso verso se $k > 0$ e verso opposto se $k < 0$, e ha modulo $|k|\,|\vec{v}|$. Per $\vec{u} = (1, -2, 3)$ e $\vec{v} = (2, 0, -1)$ si ha $\vec{u} + \vec{v} = (3, -2, 2)$ e $3\vec{u} - 2\vec{v} = (3 - 4,\ -6 - 0,\ 9 + 2) = (-1, -6, 11)$.

Un vettore di modulo $1$ si chiama **versore**. Dividendo un vettore non nullo per il suo modulo si ottiene il versore con la stessa direzione e lo stesso verso. Per esempio $\vec{v} = (2, -1, 2)$ ha modulo $3$, quindi il suo versore è $\left( \dfrac{2}{3}, -\dfrac{1}{3}, \dfrac{2}{3} \right)$.
:::

## Prodotto scalare e prodotto vettoriale

:::definizione{#prodotto-scalare titolo="Prodotto scalare"}
Siano $\vec{u}$ e $\vec{v}$ due vettori non nulli e sia $\theta$, con $0 \leq \theta \leq \pi$, l'angolo tra le loro direzioni, misurato quando le due frecce partono dallo stesso punto. Il **prodotto scalare** di $\vec{u}$ e $\vec{v}$ è il numero
$$
\vec{u} \cdot \vec{v} = |\vec{u}|\,|\vec{v}| \cos \theta ;
$$
se uno dei due vettori è nullo, il prodotto scalare è $0$. In componenti, per $\vec{u} = (a, b, c)$ e $\vec{v} = (a', b', c')$, vale
$$
\vec{u} \cdot \vec{v} = a a' + b b' + c c' .
$$
La formula in componenti si ricava dal teorema del coseno applicato al triangolo che ha due lati rappresentati da $\vec{u}$ e $\vec{v}$. Per $\vec{u} = (1, 2, 2)$ e $\vec{v} = (3, 0, 4)$ si ha $\vec{u} \cdot \vec{v} = 3 + 0 + 8 = 11$. Il prodotto scalare di un vettore per sé stesso è il quadrato del modulo, perché $\cos 0 = 1$; infatti $\vec{u} \cdot \vec{u} = 1 + 4 + 4 = 9 = |\vec{u}|^2$.
:::

:::teorema{#angolo-vettori titolo="Angolo tra due vettori"}
Se $\vec{u}$ e $\vec{v}$ sono non nulli, l'angolo $\theta$ tra i due vettori soddisfa
$$
\cos \theta = \frac{\vec{u} \cdot \vec{v}}{|\vec{u}|\,|\vec{v}|} .
$$
La formula si ottiene dividendo la definizione di prodotto scalare per $|\vec{u}|\,|\vec{v}|$, e permette di calcolare angoli conoscendo soltanto le componenti. Per $\vec{u} = (1, 0, 1)$ e $\vec{v} = (1, 1, 0)$ si ha
$$
\cos \theta = \frac{1 + 0 + 0}{\sqrt{2} \cdot \sqrt{2}} = \frac{1}{2} ,
$$
quindi $\theta = \dfrac{\pi}{3}$. Il denominatore è positivo, quindi l'angolo è acuto, retto oppure ottuso secondo che il prodotto scalare sia positivo, nullo oppure negativo.
:::

:::definizione{#prodotto-vettoriale titolo="Prodotto vettoriale"}
Siano $\vec{u}$ e $\vec{v}$ due vettori non paralleli e sia $\theta$ l'angolo tra di essi. Il **prodotto vettoriale** $\vec{u} \times \vec{v}$ è il vettore che ha

- modulo $|\vec{u}|\,|\vec{v}| \sin \theta$;
- direzione perpendicolare sia a $\vec{u}$ sia a $\vec{v}$;
- verso dato dalla regola della mano destra: se il pollice indica $\vec{u}$ e l'indice indica $\vec{v}$, il medio indica $\vec{u} \times \vec{v}$.

Se $\vec{u}$ e $\vec{v}$ sono paralleli, oppure uno dei due è nullo, il prodotto vettoriale è il vettore nullo. In componenti, per $\vec{u} = (a, b, c)$ e $\vec{v} = (a', b', c')$, vale
$$
\vec{u} \times \vec{v} = \big( b c' - c b',\ \ c a' - a c',\ \ a b' - b a' \big) ,
$$
che coincide con lo sviluppo del determinante
$$
\vec{u} \times \vec{v} =
\begin{vmatrix}
\vec{i} & \vec{j} & \vec{k} \\
a & b & c \\
a' & b' & c'
\end{vmatrix} .
$$
Il prodotto vettoriale serve a costruire un vettore perpendicolare a due vettori dati, e quindi a trovare il vettore normale di un piano che contiene due vettori dati. Il modulo $|\vec{u} \times \vec{v}|$ è l'area del parallelogramma che ha per lati $\vec{u}$ e $\vec{v}$, perché la base misura $|\vec{u}|$ e l'altezza misura $|\vec{v}| \sin \theta$. Per $\vec{u} = (0, 2, 0)$ e $\vec{v} = (0, 1, 2)$ si ottiene
$$
\vec{u} \times \vec{v} = \big( 2 \cdot 2 - 0 \cdot 1,\ \ 0 \cdot 0 - 0 \cdot 2,\ \ 0 \cdot 1 - 2 \cdot 0 \big) = (4, 0, 0) .
$$
Il risultato è diretto come l'asse $x$, che è perpendicolare al piano degli assi $y$ e $z$ in cui stanno $\vec{u}$ e $\vec{v}$, e il parallelogramma ha area $4$.

::grafico{assi=0 uguale=1 poligoni="0,0 2,0 3,2 1,2" linee="0,0 -2.6,-2.6;-2.28,-2.49 -2.6,-2.6 -2.49,-2.28;0,0 4.4,0;4.10,0.15 4.4,0 4.10,-0.15;0,0 0,3.4;-0.15,3.10 0,3.4 0.15,3.10" vettori="0,0,-2,-2;0,0,2,0,u;0,0,1,2,v" etichette="-2.95,-2.6,x;4.5,-0.4,y;0.2,3.35,z;-1.05,-1.65,u × v" xmin=-3.2 xmax=5 ymin=-3 ymax=3.8 titolo="Il prodotto vettoriale di $\vec{u} = (0, 2, 0)$ e $\vec{v} = (0, 1, 2)$ è $(4, 0, 0)$, che è perpendicolare al piano dei due vettori; il suo modulo $4$ è l'area del parallelogramma colorato"}

:::

:::teorema{#area-triangolo titolo="Area di un triangolo"}
L'area del triangolo di vertici $A$, $B$ e $C$ è la metà dell'area del parallelogramma costruito sui lati $AB$ e $AC$, quindi
$$
\text{Area}(ABC) = \frac{1}{2} \left| \overrightarrow{AB} \times \overrightarrow{AC} \right| .
$$
Per $A(1, 0, 0)$, $B(0, 1, 0)$ e $C(0, 0, 1)$ si ha $\overrightarrow{AB} = (-1, 1, 0)$ e $\overrightarrow{AC} = (-1, 0, 1)$, quindi
$$
\overrightarrow{AB} \times \overrightarrow{AC} = \big( 1 \cdot 1 - 0 \cdot 0,\ \ 0 \cdot (-1) - (-1) \cdot 1,\ \ (-1) \cdot 0 - 1 \cdot (-1) \big) = (1, 1, 1) .
$$
Il modulo è $\sqrt{3}$, perciò l'area è $\dfrac{\sqrt{3}}{2}$. Il risultato si controlla in un altro modo, perché il triangolo è equilatero di lato $\sqrt{2}$ e ha quindi area $\dfrac{\sqrt{3}}{4} \cdot 2 = \dfrac{\sqrt{3}}{2}$.
:::

:::teorema{#parallelismo-perpendicolarita titolo="Condizioni di parallelismo e di perpendicolarità tra vettori"}
Siano $\vec{u} = (a, b, c)$ e $\vec{v} = (a', b', c')$ due vettori non nulli.

- $\vec{u}$ e $\vec{v}$ sono **paralleli** se e solo se esiste un numero $k$ tale che $\vec{v} = k\,\vec{u}$, cioè se le componenti sono proporzionali; questo accade se e solo se $\vec{u} \times \vec{v} = \vec{0}$.
- $\vec{u}$ e $\vec{v}$ sono **perpendicolari** se e solo se $\vec{u} \cdot \vec{v} = a a' + b b' + c c' = 0$.

La seconda condizione segue dalla definizione di prodotto scalare, perché $\cos \theta = 0$ se e solo se $\theta = \dfrac{\pi}{2}$. Per esempio $(2, -1, 3)$ e $(-4, 2, -6)$ sono paralleli, perché il secondo è il primo moltiplicato per $-2$, mentre $(1, 2, 2)$ e $(2, -2, 1)$ sono perpendicolari, perché $2 - 4 + 2 = 0$. Tre punti $A$, $B$ e $C$ sono allineati se e solo se $\overrightarrow{AB}$ e $\overrightarrow{AC}$ sono paralleli.
:::

## Equazione del piano

:::teorema{#equazione-piano titolo="Equazione del piano"}
Un vettore non nullo si dice **normale** a un piano se è perpendicolare al piano. Il piano che passa per $P_0(x_0, y_0, z_0)$ e ha vettore normale $\vec{n} = (a, b, c)$ ha equazione
$$
a\,(x - x_0) + b\,(y - y_0) + c\,(z - z_0) = 0 .
$$
Infatti un punto $P(x, y, z)$ sta nel piano se e solo se il vettore $\overrightarrow{P_0 P}$ è perpendicolare a $\vec{n}$, cioè se e solo se $\vec{n} \cdot \overrightarrow{P_0 P} = 0$, e questo prodotto scalare è il primo membro dell'equazione. Svolgendo i prodotti e ponendo $d = -a x_0 - b y_0 - c z_0$ si ottiene l'**equazione cartesiana** del piano
$$
ax + by + cz + d = 0 ,
$$
in cui i coefficienti $a$, $b$ e $c$ non sono tutti nulli. Viceversa, ogni equazione di questa forma rappresenta un piano, e il vettore dei coefficienti $(a, b, c)$ è normale al piano.

Per esempio, il piano per $P_0(1, -2, 3)$ con vettore normale $\vec{n} = (2, 1, -1)$ ha equazione $2\,(x - 1) + (y + 2) - (z - 3) = 0$, cioè $2x + y - z + 3 = 0$. Le coordinate di $P_0$ soddisfano l'equazione, perché $2 - 2 - 3 + 3 = 0$.
:::

:::osservazione{#piani-particolari titolo="Piani particolari"}
Alcuni coefficienti nulli corrispondono a posizioni particolari del piano $ax + by + cz + d = 0$.

- Se $d = 0$, il piano passa per l'origine; per esempio $x - 2y + z = 0$.
- Se $a = 0$, il vettore normale $(0, b, c)$ è perpendicolare all'asse $x$, quindi il piano è parallelo all'asse $x$; per esempio $y + z - 2 = 0$. Allo stesso modo $b = 0$ dà un piano parallelo all'asse $y$ e $c = 0$ un piano parallelo all'asse $z$.
- Se $a = b = 0$, l'equazione si riduce a $z = k$ e il piano è parallelo al piano $z = 0$; per esempio $z = 3$ è il piano orizzontale formato dai punti con quota $3$. Allo stesso modo $x = k$ e $y = k$ sono piani paralleli ai piani coordinati $x = 0$ e $y = 0$.
:::

:::teorema{#piano-tre-punti titolo="Piano per tre punti"}
Per tre punti $A$, $B$ e $C$ non allineati passa uno e un solo piano. I vettori $\overrightarrow{AB}$ e $\overrightarrow{AC}$ stanno nel piano e non sono paralleli, quindi il loro prodotto vettoriale è un vettore normale al piano:
$$
\vec{n} = \overrightarrow{AB} \times \overrightarrow{AC} .
$$
In alternativa si sostituiscono le coordinate dei tre punti nell'equazione $ax + by + cz + d = 0$ e si risolve il sistema nelle incognite $a$, $b$, $c$ e $d$, che ha infinite soluzioni tutte proporzionali tra loro.
:::

:::esempio{titolo="Piano che interseca gli assi in tre punti dati"}
Si cerca il piano per $A(2, 0, 0)$, $B(0, 4, 0)$ e $C(0, 0, 3)$. Si ha $\overrightarrow{AB} = (-2, 4, 0)$ e $\overrightarrow{AC} = (-2, 0, 3)$, quindi
$$
\overrightarrow{AB} \times \overrightarrow{AC} = \big( 4 \cdot 3 - 0 \cdot 0,\ \ 0 \cdot (-2) - (-2) \cdot 3,\ \ (-2) \cdot 0 - 4 \cdot (-2) \big) = (12, 6, 8) .
$$
Come vettore normale si può usare anche $(6, 3, 4)$, che è parallelo al precedente. Il piano passa per $A$, perciò ha equazione $6\,(x - 2) + 3y + 4z = 0$, cioè $6x + 3y + 4z - 12 = 0$. Dividendo per $12$ si ottiene
$$
\frac{x}{2} + \frac{y}{4} + \frac{z}{3} = 1 ,
$$
in cui i denominatori sono le coordinate dei punti in cui il piano interseca gli assi.

::grafico{assi=0 uguale=1 poligoni="-1,-1 4,0 0,3" linee="0,0 -2,-2;-1.68,-1.89 -2,-2 -1.89,-1.68;0,0 5,0;4.70,0.15 5,0 4.70,-0.15;0,0 0,4;-0.15,3.70 0,4 0.15,3.70" segmenti="-1,-1,4,0;4,0,0,3;0,3,-1,-1" punti="-1,-1,pieno;4,0,pieno,B;0,3,pieno,C" etichette="-1.5,-0.95,A;-2.35,-1.75,x;5.1,-0.45,y;0.25,3.9,z" xmin=-2.6 xmax=5.6 ymin=-2.4 ymax=4.4 titolo="Il triangolo colorato è la parte del piano $6x + 3y + 4z - 12 = 0$ compresa tra i tre semiassi positivi, con vertici $A(2, 0, 0)$, $B(0, 4, 0)$ e $C(0, 0, 3)$"}

:::

## Piani paralleli e perpendicolari

:::teorema{#piani-paralleli-perpendicolari titolo="Piani paralleli e piani perpendicolari"}
Siano $\pi : ax + by + cz + d = 0$ e $\pi' : a'x + b'y + c'z + d' = 0$ due piani, con vettori normali $\vec{n} = (a, b, c)$ e $\vec{n}' = (a', b', c')$.

- I piani sono **paralleli** se e solo se i vettori normali sono paralleli, cioè se esiste $k$ tale che $(a', b', c') = k\,(a, b, c)$. Se vale anche $d' = k\,d$, i due piani coincidono.
- I piani sono **perpendicolari** se e solo se i vettori normali sono perpendicolari, cioè se $a a' + b b' + c c' = 0$.

Due piani che non sono paralleli si intersecano lungo una retta. Per esempio i piani $2x - y + z - 1 = 0$ e $4x - 2y + 2z + 5 = 0$ sono paralleli e distinti, perché $(4, -2, 2) = 2\,(2, -1, 1)$ ma $5 \neq 2 \cdot (-1)$. I piani $x + y + z = 0$ e $x - 2y + z - 3 = 0$ sono perpendicolari, perché $1 - 2 + 1 = 0$.
:::

:::esempio{titolo="Piano parallelo a un piano dato e piano perpendicolare a due piani"}
Il piano per $P(1, 2, -1)$ parallelo a $3x - y + 2z + 7 = 0$ ha lo stesso vettore normale $(3, -1, 2)$, quindi ha equazione $3\,(x - 1) - (y - 2) + 2\,(z + 1) = 0$, cioè
$$
3x - y + 2z + 1 = 0 .
$$
Il piano per l'origine perpendicolare ai piani $x + y = 0$ e $y - z = 0$ ha vettore normale perpendicolare a $(1, 1, 0)$ e a $(0, 1, -1)$. Si può quindi usare il prodotto vettoriale
$$
(1, 1, 0) \times (0, 1, -1) = \big( 1 \cdot (-1) - 0 \cdot 1,\ \ 0 \cdot 0 - 1 \cdot (-1),\ \ 1 \cdot 1 - 1 \cdot 0 \big) = (-1, 1, 1) ,
$$
e il piano cercato è $-x + y + z = 0$.
:::

## Equazioni della retta

:::definizione{#retta-parametriche titolo="Equazioni parametriche della retta"}
Sia $r$ la retta che passa per $P_0(x_0, y_0, z_0)$ ed è parallela al vettore non nullo $\vec{v} = (l, m, n)$, detto **vettore direzione** di $r$. Un punto $P$ sta su $r$ se e solo se $\overrightarrow{P_0 P}$ è parallelo a $\vec{v}$, cioè se $\overrightarrow{P_0 P} = t\,\vec{v}$ per qualche numero reale $t$. Scrivendo questa uguaglianza componente per componente si ottengono le **equazioni parametriche** di $r$:
$$
\begin{cases}
x = x_0 + l\,t \\
y = y_0 + m\,t \\
z = z_0 + n\,t
\end{cases}
\qquad t \in \mathbb{R} .
$$
Le componenti $l$, $m$ e $n$ si chiamano anche **parametri direttori** della retta. A ogni valore del parametro $t$ corrisponde un punto della retta. Per la retta per $P_0(1, -1, 2)$ con $\vec{v} = (2, 1, -3)$, il valore $t = 1$ dà il punto $(3, 0, -1)$ e il valore $t = -1$ dà il punto $(-1, -2, 5)$. Il punto $Q(5, 1, 0)$ *non* sta sulla retta, perché la prima equazione $5 = 1 + 2t$ dà $t = 2$, mentre la seconda $1 = -1 + t$ dà $t = 2$ e la terza $0 = 2 - 3t$ dà $t = \dfrac{2}{3}$.
:::

:::teorema{#retta-due-punti titolo="Retta per due punti"}
Per due punti distinti $A$ e $B$ passa una e una sola retta, che ha vettore direzione $\overrightarrow{AB}$. Le sue equazioni parametriche sono
$$
x = x_A + (x_B - x_A)\,t ,
\qquad
y = y_A + (y_B - y_A)\,t ,
\qquad
z = z_A + (z_B - z_A)\,t .
$$
Per $t = 0$ si ottiene $A$, per $t = 1$ si ottiene $B$ e per $t = \dfrac{1}{2}$ si ottiene il punto medio di $AB$. Per $A(2, 1, 0)$ e $B(4, 0, 3)$ si ha $\overrightarrow{AB} = (2, -1, 3)$ e la retta ha equazioni $x = 2 + 2t$, $y = 1 - t$, $z = 3t$.
:::

:::definizione{#retta-cartesiane titolo="Equazioni cartesiane della retta"}
Una retta è l'intersezione di due piani non paralleli, quindi si può descrivere con il sistema delle loro equazioni:
$$
\begin{cases}
ax + by + cz + d = 0 \\
a'x + b'y + c'z + d' = 0
\end{cases}
$$
Queste si chiamano **equazioni cartesiane** della retta. Dalle equazioni parametriche si passa a quelle cartesiane eliminando il parametro $t$. Se le componenti di $\vec{v}$ sono tutte diverse da $0$, ricavando $t$ da ciascuna equazione si ottiene
$$
\frac{x - x_0}{l} = \frac{y - y_0}{m} = \frac{z - z_0}{n} ,
$$
che equivale a due equazioni di piani. Per la retta $x = 1 + 2t$, $y = -1 + t$, $z = 2 - 3t$ si ottiene $\dfrac{x - 1}{2} = y + 1 = \dfrac{z - 2}{-3}$. La prima uguaglianza dà $x - 1 = 2y + 2$, cioè $x - 2y - 3 = 0$; la seconda dà $-3y - 3 = z - 2$, cioè $3y + z + 1 = 0$. La retta ha quindi equazioni cartesiane
$$
\begin{cases}
x - 2y - 3 = 0 \\
3y + z + 1 = 0
\end{cases}
$$
:::

:::teorema{#direzione-retta-cartesiane titolo="Vettore direzione di una retta data come intersezione di due piani"}
Se la retta $r$ è l'intersezione dei piani di vettori normali $\vec{n}$ e $\vec{n}'$, allora un vettore direzione di $r$ è
$$
\vec{v} = \vec{n} \times \vec{n}' .
$$
Infatti $r$ sta in entrambi i piani, quindi la sua direzione è perpendicolare a entrambi i vettori normali, e il prodotto vettoriale è perpendicolare a tutti e due. Per passare dalle equazioni cartesiane a quelle parametriche si calcola $\vec{v}$ e si cerca un punto della retta, assegnando un valore a una delle coordinate.
:::

:::esempio{titolo="Dalle equazioni cartesiane alle equazioni parametriche"}
Si considera la retta
$$
r :
\begin{cases}
x + y - z - 1 = 0 \\
2x - y + z - 2 = 0
\end{cases}
$$
I vettori normali sono $(1, 1, -1)$ e $(2, -1, 1)$, quindi
$$
\vec{n} \times \vec{n}' = \big( 1 \cdot 1 - (-1) \cdot (-1),\ \ (-1) \cdot 2 - 1 \cdot 1,\ \ 1 \cdot (-1) - 1 \cdot 2 \big) = (0, -3, -3) ,
$$
e come vettore direzione si può usare $\vec{v} = (0, 1, 1)$. Per trovare un punto si pone $z = 0$. Il sistema diventa $x + y = 1$, $2x - y = 2$, e sommando le due equazioni si ottiene $3x = 3$, quindi $x = 1$ e $y = 0$. La retta passa perciò per $(1, 0, 0)$ e ha equazioni parametriche $x = 1$, $y = t$, $z = t$. Sostituendo nelle equazioni dei piani si ottiene $1 + t - t - 1 = 0$ e $2 - t + t - 2 = 0$ per ogni $t$, e questo conferma il risultato.
:::

## Posizioni reciproche di rette e piani

:::definizione{#posizione-due-rette titolo="Posizione reciproca di due rette"}
Due rette dello spazio possono essere

- **incidenti**, se hanno un solo punto in comune;
- **parallele**, se hanno vettori direzione paralleli; in questo caso sono distinte oppure coincidenti;
- **sghembe**, se non hanno punti in comune e non sono parallele.

Due rette incidenti o parallele stanno in uno stesso piano, mentre due rette sghembe non stanno in nessun piano. Per stabilire la posizione si confrontano prima i vettori direzione. Se non sono paralleli, si uguagliano le equazioni parametriche delle due rette, usando due parametri diversi $t$ e $s$. Se il sistema ha soluzione le rette sono incidenti, altrimenti sono sghembe. Due rette si dicono **perpendicolari** se sono incidenti e i loro vettori direzione sono perpendicolari.
:::

:::esempio{titolo="Rette incidenti e rette sghembe"}
Sia $r$ la retta $x = 1 + t$, $y = 2t$, $z = -t$, con $\vec{v} = (1, 2, -1)$, e sia $s$ la retta $x = 3 - s$, $y = 2s$, $z = 1 - 2s$, con $\vec{w} = (-1, 2, -2)$. I vettori direzione non sono proporzionali, quindi le rette non sono parallele. Uguagliando le coordinate si ottiene il sistema
$$
\begin{cases}
1 + t = 3 - s \\
2t = 2s \\
-t = 1 - 2s
\end{cases}
$$
Dalla seconda equazione $t = s$, e la prima diventa $1 + t = 3 - t$, quindi $t = s = 1$. La terza equazione è soddisfatta, perché $-1 = 1 - 2$. Le rette sono perciò **incidenti** nel punto che si ottiene con $t = 1$, cioè $(2, 2, -1)$.

Sia ora $s'$ la retta $x = s$, $y = 1$, $z = s$, con vettore direzione $(1, 0, 1)$, che non è parallelo a $\vec{v}$. Il sistema $1 + t = s$, $2t = 1$, $-t = s$ dà $t = \dfrac{1}{2}$ dalla seconda equazione; poi la prima dà $s = \dfrac{3}{2}$ e la terza dà $s = -\dfrac{1}{2}$. Il sistema non ha soluzioni, quindi $r$ e $s'$ sono **sghembe**.
:::

:::teorema{#posizione-retta-piano titolo="Posizione reciproca di una retta e di un piano"}
Sia $r$ una retta con vettore direzione $\vec{v}$ e sia $\pi$ un piano con vettore normale $\vec{n}$.

- Se $\vec{v} \cdot \vec{n} \neq 0$, la retta e il piano sono **incidenti**, cioè hanno un solo punto in comune.
- Se $\vec{v} \cdot \vec{n} = 0$, la retta è **parallela** al piano. In questo caso, se un punto di $r$ sta in $\pi$ la retta è contenuta nel piano, altrimenti non ha punti in comune con il piano.

Nella pratica si sostituiscono le equazioni parametriche di $r$ nell'equazione di $\pi$ e si ottiene un'equazione di primo grado in $t$. Se l'equazione ha una soluzione, essa dà il punto di intersezione; se è impossibile, la retta è parallela al piano e non lo incontra; se è un'identità, la retta è contenuta nel piano.

Per la retta $r : x = 1 + t$, $y = 2 - t$, $z = 3t$ e il piano $x + y + z - 6 = 0$ si ottiene $1 + t + 2 - t + 3t - 6 = 0$, cioè $3t - 3 = 0$, quindi $t = 1$ e il punto di intersezione è $(2, 1, 3)$. Con il piano $x + y - 4 = 0$ si ottiene invece $1 + t + 2 - t - 4 = 0$, cioè $-1 = 0$, che è impossibile; la retta è quindi parallela al piano e non lo incontra. Con il piano $x + y - 3 = 0$ si ottiene $0 = 0$, e la retta è contenuta nel piano.
:::

:::teorema{#retta-perpendicolare-piano titolo="Retta perpendicolare a un piano"}
Una retta è **perpendicolare** a un piano se e solo se il suo vettore direzione è parallelo al vettore normale del piano. Perciò la retta per un punto $P_0$ perpendicolare al piano $ax + by + cz + d = 0$ ha equazioni
$$
x = x_0 + a\,t ,
\qquad
y = y_0 + b\,t ,
\qquad
z = z_0 + c\,t .
$$
Il punto in cui questa retta incontra il piano si chiama **proiezione ortogonale** di $P_0$ sul piano. Per esempio, la retta per $P_0(1, 0, 2)$ perpendicolare al piano $x - y + 2z = 0$ è $x = 1 + t$, $y = -t$, $z = 2 + 2t$. Allo stesso modo, il piano per $P_0$ perpendicolare a una retta di vettore direzione $\vec{v}$ è il piano per $P_0$ che ha $\vec{v}$ come vettore normale.
:::

## Distanze

:::teorema{#distanza-punto-piano titolo="Distanza di un punto da un piano"}
La distanza del punto $P_0(x_0, y_0, z_0)$ dal piano $\pi : ax + by + cz + d = 0$ è la lunghezza del segmento $P_0 H$, dove $H$ è la proiezione ortogonale di $P_0$ su $\pi$, e vale
$$
d(P_0, \pi) = \frac{|a x_0 + b y_0 + c z_0 + d|}{\sqrt{a^2 + b^2 + c^2}} .
$$
La formula è analoga a quella della distanza di un punto da una retta nel piano cartesiano, e si ottiene calcolando le coordinate di $H$ con il procedimento della proiezione ortogonale, svolto con coordinate generiche. Per $P_0(2, 0, 4)$ e $\pi : 2x - y + 2z - 3 = 0$ si ha
$$
d(P_0, \pi) = \frac{|4 - 0 + 8 - 3|}{\sqrt{4 + 1 + 4}} = \frac{9}{3} = 3 .
$$
Il numeratore è nullo se e solo se $P_0$ sta nel piano.

::grafico{assi=0 uguale=1 poligoni="-2.5,-1.5 2.5,-1.5 4.5,0.5 -0.5,0.5" segmenti="1,2.5,1,-0.5" vettori="2.6,-0.9,2.6,0.9,n" punti="1,2.5,pieno,P₀;1,-0.5,pieno,H" etichette="3.7,-1.2,π;0.55,1,d" xmin=-3 xmax=5 ymin=-2 ymax=3.2 titolo="La distanza di $P_0$ dal piano $\pi$ è la lunghezza del segmento $P_0 H$, che ha la direzione del vettore normale $\vec{n}$"}

:::

:::esempio{titolo="Proiezione ortogonale di un punto su un piano"}
Si calcola la proiezione di $P_0(2, 0, 4)$ sul piano $\pi : 2x - y + 2z - 3 = 0$. La retta per $P_0$ perpendicolare a $\pi$ ha vettore direzione $\vec{n} = (2, -1, 2)$, quindi ha equazioni $x = 2 + 2t$, $y = -t$, $z = 4 + 2t$. Sostituendo nell'equazione del piano si ottiene
$$
2\,(2 + 2t) + t + 2\,(4 + 2t) - 3 = 0
\qquad
\Longrightarrow
\qquad
9 + 9t = 0
\qquad
\Longrightarrow
\qquad
t = -1 ,
$$
perciò $H(0, 1, 2)$. La distanza è $\overline{P_0 H} = \sqrt{4 + 1 + 4} = 3$, come dà la formula. Il simmetrico di $P_0$ rispetto al piano è il punto per cui $H$ è il punto medio, e si ottiene con $t = -2$, cioè $P_0'(-2, 2, 0)$.
:::

:::osservazione{#distanza-piani-paralleli titolo="Distanza tra due piani paralleli"}
La distanza tra due piani paralleli è la distanza di un punto qualsiasi del primo piano dal secondo piano. Se i due piani si scrivono con gli stessi coefficienti, $ax + by + cz + d = 0$ e $ax + by + cz + d' = 0$, la distanza è
$$
\frac{|d - d'|}{\sqrt{a^2 + b^2 + c^2}} .
$$
Per i piani $2x - y + 2z - 3 = 0$ e $2x - y + 2z + 6 = 0$ la distanza è $\dfrac{|-3 - 6|}{3} = 3$. Lo stesso valore si ottiene dal punto $(0, -3, 0)$ del primo piano, la cui distanza dal secondo è $\dfrac{|0 + 3 + 0 + 6|}{3} = 3$.
:::

:::teorema{#distanza-punto-retta titolo="Distanza di un punto da una retta"}
La distanza del punto $P$ dalla retta $r$ è la lunghezza del segmento $PH$, dove $H$ è il punto di $r$ tale che $PH$ sia perpendicolare a $r$. Il punto $H$ si trova intersecando $r$ con il piano per $P$ perpendicolare a $r$. In alternativa, se $A$ è un punto di $r$ e $\vec{v}$ è un suo vettore direzione, vale
$$
d(P, r) = \frac{\left| \overrightarrow{AP} \times \vec{v} \right|}{|\vec{v}|} ,
$$
perché il numeratore è l'area del parallelogramma di lati $\overrightarrow{AP}$ e $\vec{v}$, il denominatore è la sua base e la distanza è la sua altezza.

::grafico{assi=0 uguale=1 linee="-1,0 6.2,0" vettori="0,0,1.6,0,v" segmenti="3,2,3,0;0,0,3,2" punti="0,0,pieno,A;3,2,pieno,P;3,0,pieno,H" etichette="6.3,0.15,r;3.15,0.9,d" xmin=-1.5 xmax=7 ymin=-0.8 ymax=2.8 titolo="Nel piano che contiene il punto $P$ e la retta $r$, la distanza $d$ è l'altezza del parallelogramma di lati $\overrightarrow{AP}$ e $\vec{v}$ rispetto alla base $\vec{v}$"}

Per esempio si considera la retta $r : x = 1 + t$, $y = 2t$, $z = -1 + 2t$ e il punto $P(4, 0, 2)$. Il piano per $P$ perpendicolare a $r$ ha vettore normale $\vec{v} = (1, 2, 2)$, quindi ha equazione $(x - 4) + 2y + 2\,(z - 2) = 0$, cioè $x + 2y + 2z - 8 = 0$. Sostituendo le equazioni di $r$ si ottiene
$$
1 + t + 4t - 2 + 4t - 8 = 0
\qquad
\Longrightarrow
\qquad
9t - 9 = 0
\qquad
\Longrightarrow
\qquad
t = 1 ,
$$
perciò $H(2, 2, 1)$ e $d(P, r) = \overline{PH} = \sqrt{4 + 4 + 1} = 3$. Con la seconda formula, posto $A(1, 0, -1)$, si ha $\overrightarrow{AP} = (3, 0, 3)$ e $\overrightarrow{AP} \times \vec{v} = (-6, -3, 6)$, che ha modulo $9$; dividendo per $|\vec{v}| = 3$ si ritrova $3$.
:::

## Superficie sferica e piano tangente

:::definizione{#superficie-sferica titolo="Superficie sferica"}
La **superficie sferica** di centro $C(\alpha, \beta, \gamma)$ e raggio $R > 0$ è l'insieme dei punti dello spazio che hanno distanza $R$ da $C$. Per la formula della distanza un punto $P(x, y, z)$ le appartiene se e solo se
$$
(x - \alpha)^2 + (y - \beta)^2 + (z - \gamma)^2 = R^2 .
$$
Svolgendo i quadrati si ottiene un'equazione della forma
$$
x^2 + y^2 + z^2 + ax + by + cz + d = 0 ,
\qquad
\text{con } a = -2\alpha , \quad b = -2\beta , \quad c = -2\gamma , \quad d = \alpha^2 + \beta^2 + \gamma^2 - R^2 .
$$
Per esempio la superficie sferica di centro $C(1, -2, 3)$ e raggio $4$ ha equazione $(x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 16$, cioè $x^2 + y^2 + z^2 - 2x + 4y - 6z - 2 = 0$, perché $1 + 4 + 9 - 16 = -2$. I punti interni alla sfera sono quelli con distanza da $C$ minore di $R$.
:::

:::teorema{#equazione-sfera titolo="Centro e raggio dall'equazione"}
L'equazione $x^2 + y^2 + z^2 + ax + by + cz + d = 0$ rappresenta una superficie sferica se e solo se
$$
\frac{a^2}{4} + \frac{b^2}{4} + \frac{c^2}{4} - d > 0 .
$$
In questo caso il centro e il raggio sono
$$
C\left( -\frac{a}{2}, -\frac{b}{2}, -\frac{c}{2} \right) ,
\qquad
R = \sqrt{\frac{a^2}{4} + \frac{b^2}{4} + \frac{c^2}{4} - d} .
$$
Le formule si ottengono confrontando l'equazione con quella della definizione. Per $x^2 + y^2 + z^2 - 4x + 2y + 6z + 5 = 0$ si ha $C(2, -1, -3)$ e $R^2 = 4 + 1 + 9 - 5 = 9$, quindi $R = 3$.
:::

:::attenzione
Un'equazione di secondo grado in $x$, $y$ e $z$ non rappresenta sempre una superficie sferica. Perché l'equazione rappresenti una superficie sferica, è necessario che i coefficienti di $x^2$, $y^2$ e $z^2$ siano uguali e che non compaiano termini come $xy$; inoltre la condizione sul raggio deve essere soddisfatta. Per esempio $x^2 + y^2 + z^2 + 2x + 5 = 0$ non rappresenta nessun punto, perché si scrive $(x + 1)^2 + y^2 + z^2 = -4$ e il primo membro non è mai negativo.
:::

:::teorema{#posizione-piano-sfera titolo="Posizione di un piano rispetto a una superficie sferica"}
Siano $C$ il centro e $R$ il raggio di una superficie sferica, e sia $\delta$ la distanza di $C$ da un piano $\pi$.

- Se $\delta > R$, il piano è **esterno** e non ha punti in comune con la superficie.
- Se $\delta = R$, il piano è **tangente** e ha un solo punto in comune con la superficie.
- Se $\delta < R$, il piano è **secante** e interseca la superficie lungo una circonferenza, che ha centro nella proiezione $H$ di $C$ sul piano e raggio $r = \sqrt{R^2 - \delta^2}$.

Il raggio $r$ si ottiene con il teorema di Pitagora nel triangolo rettangolo che ha per vertici $C$, $H$ e un punto $Q$ della circonferenza, perché $\overline{CQ} = R$ e $\overline{CH} = \delta$. Per la superficie sferica di centro $C(1, 2, -1)$ e raggio $5$ e il piano $z = 3$ si ha $\delta = 3 - (-1) = 4 < 5$. Il piano è quindi secante e interseca la superficie lungo la circonferenza di centro $H(1, 2, 3)$ e raggio $r = \sqrt{25 - 16} = 3$.

::grafico{f="3+0*x" curve="1+5*cos(t),-1+5*sin(t),0,6.29" segmenti="1,-1,1,3;1,-1,4,3" punti="1,-1,pieno,C;1,3,pieno,H;4,3,pieno,Q" nomi="x,z" xmin=-6 xmax=8 ymin=-8 ymax=6 uguale=1 legenda="z = 3;(x - 1)^2 + (z + 1)^2 = 25" titolo="Sezione con il piano $y = 2$: la superficie sferica di centro $C(1, 2, -1)$ e raggio $5$ e il piano $z = 3$; nel triangolo $CHQ$ si ha $\overline{CH} = 4$ e $\overline{CQ} = 5$, quindi $\overline{HQ} = 3$"}

:::

:::teorema{#piano-tangente-sfera titolo="Piano tangente a una superficie sferica"}
Il piano tangente a una superficie sferica di centro $C$ in un suo punto $T$ è il piano per $T$ perpendicolare al raggio $CT$, cioè il piano per $T$ con vettore normale $\overrightarrow{CT}$. Infatti la distanza di $C$ da questo piano è $\overline{CT} = R$.

Per la superficie sferica $(x - 1)^2 + (y + 2)^2 + (z - 3)^2 = 9$ il punto $T(3, -1, 5)$ appartiene alla superficie, perché $4 + 1 + 4 = 9$. Si ha $\overrightarrow{CT} = (2, 1, 2)$, quindi il piano tangente in $T$ è
$$
2\,(x - 3) + (y + 1) + 2\,(z - 5) = 0 ,
\qquad
\text{cioè}
\qquad
2x + y + 2z - 15 = 0 .
$$
Il risultato si controlla con la distanza, perché $d(C, \pi) = \dfrac{|2 - 2 + 6 - 15|}{3} = 3 = R$.

::grafico{assi=0 uguale=1 f="4.243-x" curve="3*cos(t),3*sin(t),0,6.29" vettori="0,0,2.121,2.121" punti="0,0,pieno,C;2.121,2.121,pieno,T" etichette="4.1,0.55,π;0.75,1.3,R" xmin=-3.6 xmax=5 ymin=-3.6 ymax=4 legenda="0" titolo="Sezione con un piano che contiene il centro $C$ e il punto di tangenza $T$: il piano tangente appare come la retta perpendicolare al raggio $CT$ nel punto $T$"}

:::
