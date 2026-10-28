---
titolo: Superfici, flussi e teoremi di Gauss e Stokes
sommario: Superfici parametriche regolari, vettore normale e area, integrali di superficie e flusso di un campo, divergenza e rotore, teorema della divergenza e teorema di Stokes.
---

## Superfici parametriche

:::definizione{#superficie-parametrica titolo="Superficie parametrica"}
Una **superficie parametrica** è un'applicazione $\mathbf{r} : D \subseteq \mathbb{R}^2 \to \mathbb{R}^3$ di classe $C^1$,
$$
\mathbf{r}(u, v) = \bigl( x(u, v),\; y(u, v),\; z(u, v) \bigr), \qquad (u, v) \in D,
$$
con $D$ chiuso e limitato, unione di un aperto connesso e della sua frontiera. L'immagine $\Sigma = \mathbf{r}(D)$ si chiama **sostegno** della superficie. Una curva dipende da un parametro, perciò il suo sostegno è un oggetto a una dimensione; una superficie dipende da due parametri e il suo sostegno è un oggetto a due dimensioni nello spazio. Fissato $v = v_0$, l'applicazione $u \mapsto \mathbf{r}(u, v_0)$ è una curva tracciata sulla superficie, detta **linea coordinata**; lo stesso con $u = u_0$ fissato.
:::

:::esempio{titolo="Sfera e cilindro"}
La sfera di centro l'origine e raggio $R$ si parametrizza con le **coordinate sferiche**
$$
\mathbf{r}(\varphi, \theta) = \bigl( R \sin\varphi \cos\theta,\; R \sin\varphi \sin\theta,\; R \cos\varphi \bigr),
\qquad (\varphi, \theta) \in [0, \pi] \times [0, 2\pi],
$$
dove $\varphi$ è la colatitudine misurata dall'asse $z$ e $\theta$ la longitudine. La superficie laterale del cilindro $x^2 + y^2 = R^2$ con $0 \leq z \leq h$ si parametrizza con
$$
\mathbf{r}(\theta, t) = \bigl( R \cos\theta,\; R \sin\theta,\; t \bigr),
\qquad (\theta, t) \in [0, 2\pi] \times [0, h].
$$
Queste due parametrizzazioni compaiono nella maggior parte degli esercizi su aree e flussi.

::grafico{xmin=-0.5 xmax=5.5 ymin=-0.6 ymax=7.3 nomi="φ,θ" area="6.2832;0;0;3.1416" segmenti="1.2,0,1.2,6.2832;0,2,3.1416,2;3.1416,0,3.1416,6.2832;0,6.2832,3.1416,6.2832" etichette="1.3,6.7,φ = φ₀;3.3,2.1,θ = θ₀" titolo="Il rettangolo dei parametri $[0, \pi] \times [0, 2\pi]$ della sfera: il segmento $\varphi = \varphi_0$ diventa un parallelo, il segmento $\theta = \theta_0$ un meridiano"}

:::

:::definizione{#superficie-regolare titolo="Superficie regolare"}
I vettori derivati della parametrizzazione sono
$$
\mathbf{r}_u = \left( \frac{\partial x}{\partial u},\; \frac{\partial y}{\partial u},\; \frac{\partial z}{\partial u} \right),
\qquad
\mathbf{r}_v = \left( \frac{\partial x}{\partial v},\; \frac{\partial y}{\partial v},\; \frac{\partial z}{\partial v} \right).
$$
La superficie è **regolare** se $\mathbf{r}$ è iniettiva nei punti interni di $D$ e se
$$
\mathbf{r}_u \wedge \mathbf{r}_v \neq \mathbf{0} \qquad \text{nei punti interni di } D.
$$
Il vettore $\mathbf{r}_u$ è tangente alla linea coordinata con $v$ fissato, il vettore $\mathbf{r}_v$ a quella con $u$ fissato. La condizione $\mathbf{r}_u \wedge \mathbf{r}_v \neq \mathbf{0}$ dice che i due vettori tangenti *non* sono paralleli, quindi in ogni punto interno la superficie possiede un **piano tangente** ben definito, senza punte né spigoli. Tutte le formule di questo capitolo, dall'area al flusso, sono costruite con il vettore $\mathbf{r}_u \wedge \mathbf{r}_v$, perciò la regolarità è l'ipotesi presente in ogni enunciato.
:::

:::esempio{titolo="Regolarità della sfera"}
Per la sfera di raggio $R$ si calcola $\lVert \mathbf{r}_\varphi \wedge \mathbf{r}_\theta \rVert = R^2 \sin\varphi$, che si annulla *solo* per $\varphi = 0$ e $\varphi = \pi$, cioè nei due poli, che sono immagini di punti della frontiera del rettangolo dei parametri. Nei punti interni la condizione di regolarità è **verificata**.
:::

## Vettore normale e piano tangente

:::definizione{#vettore-normale titolo="Vettore normale"}
Sia $\Sigma$ una superficie regolare e $P_0 = \mathbf{r}(u_0, v_0)$ un punto corrispondente a $(u_0, v_0)$ interno a $D$. Il **vettore normale** a $\Sigma$ in $P_0$ è
$$
\mathbf{N}(u_0, v_0) = \mathbf{r}_u(u_0, v_0) \wedge \mathbf{r}_v(u_0, v_0),
$$
e il **versore normale** è $\mathbf{n} = \dfrac{\mathbf{N}}{\lVert \mathbf{N} \rVert}$. Il prodotto vettoriale è ortogonale a entrambi i fattori, quindi $\mathbf{N}$ è ortogonale ai due vettori tangenti $\mathbf{r}_u$ e $\mathbf{r}_v$, perciò è **ortogonale alla superficie** in $P_0$. Il calcolo di $\mathbf{N}$ è il primo passo di quasi ogni esercizio: dalla sua direzione si ottiene il piano tangente, dalla sua norma l'elemento d'area, dal suo verso l'orientazione nei flussi.
:::

:::definizione{#piano-tangente titolo="Piano tangente a una superficie"}
Il **piano tangente** a $\Sigma$ in $P_0 = (x_0, y_0, z_0)$ è il piano passante per $P_0$ e ortogonale a $\mathbf{N} = (N_1, N_2, N_3)$, di equazione
$$
N_1 (x - x_0) + N_2 (y - y_0) + N_3 (z - z_0) = 0 .
$$
Il piano tangente contiene i vettori tangenti a *tutte* le curve tracciate sulla superficie e passanti per $P_0$, quindi approssima la superficie vicino al punto come la retta tangente approssima il grafico di una funzione di una variabile.
:::

:::esempio
Per $\mathbf{r}(u, v) = (u \cos v,\; u \sin v,\; 2v)$ nel punto $(u_0, v_0) = \left(1, \dfrac{\pi}{2}\right)$ si ha $P_0 = (0, 1, \pi)$, $\mathbf{r}_u = (0, 1, 0)$, $\mathbf{r}_v = (-1, 0, 2)$, quindi
$$
\mathbf{N} = \mathbf{r}_u \wedge \mathbf{r}_v = (2,\; 0,\; 1),
$$
e il **piano tangente** ha equazione $2x + (z - \pi) = 0$, cioè $2x + z = \pi$.
:::

:::definizione{#superficie-cartesiana titolo="Superficie cartesiana"}
Il grafico di una funzione $f : D \subseteq \mathbb{R}^2 \to \mathbb{R}$ di classe $C^1$ è una superficie, detta **cartesiana**, con la parametrizzazione
$$
\mathbf{r}(x, y) = \bigl( x,\; y,\; f(x, y) \bigr), \qquad (x, y) \in D .
$$
Da $\mathbf{r}_x = (1, 0, f_x)$ e $\mathbf{r}_y = (0, 1, f_y)$ si ottiene
$$
\mathbf{N} = \mathbf{r}_x \wedge \mathbf{r}_y = \bigl( -f_x,\; -f_y,\; 1 \bigr),
\qquad
\lVert \mathbf{N} \rVert = \sqrt{1 + f_x^2 + f_y^2} .
$$
La terza componente di $\mathbf{N}$ vale $1 > 0$, quindi una superficie cartesiana è *sempre* **regolare** e il suo vettore normale **punta verso l'alto**. Il piano tangente che ne risulta, $z = f(x_0, y_0) + f_x (x - x_0) + f_y (y - y_0)$, coincide con il piano tangente introdotto nel capitolo sul calcolo differenziale per le funzioni differenziabili.

::grafico{xmin=-2 xmax=2.4 ymin=-0.6 ymax=2.8 uguale=1 nomi="x,z" f="2-x^2" vettori="0.7,1.51,1.4,2.01,N;0.7,1.51,1.2,0.81,rₓ" punti="0.7,1.51" titolo="Sezione con il piano $y = 0$ del grafico di $f(x, y) = 2 - x^2$: il vettore tangente $\mathbf{r}_x$ e il vettore normale $\mathbf{N}$, che ha terza componente $1$ e punta verso l'alto"}

:::

## Area di una superficie

:::definizione{#area-di-una-superficie titolo="Area di una superficie"}
L'**area** di una superficie regolare $\Sigma = \mathbf{r}(D)$ è
$$
\operatorname{Area}(\Sigma) = \iint_D \lVert \mathbf{r}_u \wedge \mathbf{r}_v \rVert \, du \, dv .
$$
La definizione nasce dall'approssimazione della superficie con parallelogrammi: un rettangolo di lati $du$ e $dv$ nel piano dei parametri viene trasformato, al primo ordine, nel parallelogramma di lati $\mathbf{r}_u \, du$ e $\mathbf{r}_v \, dv$, la cui area è $\lVert \mathbf{r}_u \wedge \mathbf{r}_v \rVert \, du \, dv$, per la proprietà del prodotto vettoriale. La quantità $d\sigma = \lVert \mathbf{r}_u \wedge \mathbf{r}_v \rVert \, du \, dv$ si chiama **elemento d'area**. Il valore dell'integrale *non* dipende dalla parametrizzazione scelta per la superficie, per la formula di cambiamento di variabili negli integrali doppi.
:::

:::esempio{titolo="Area della sfera"}
Per la sfera di raggio $R$ si ha $\lVert \mathbf{r}_\varphi \wedge \mathbf{r}_\theta \rVert = R^2 \sin\varphi$, quindi
$$
\operatorname{Area} = \int_0^{2\pi} \! \int_0^{\pi} R^2 \sin\varphi \, d\varphi \, d\theta
= 2\pi R^2 \bigl[ -\cos\varphi \bigr]_0^{\pi} = 4\pi R^2 .
$$
:::

:::teorema{#area-superficie-cartesiana titolo="Area di una superficie cartesiana"}
Se $\Sigma$ è il grafico di $f : D \to \mathbb{R}$ di classe $C^1$, allora
$$
\operatorname{Area}(\Sigma) = \iint_D \sqrt{1 + f_x^2 + f_y^2} \; dx \, dy .
$$
La formula segue dalla definizione di area, poiché per la parametrizzazione cartesiana la norma del vettore normale è $\sqrt{1 + f_x^2 + f_y^2}$. Il fattore sotto radice misura **quanto il grafico è inclinato** rispetto al piano $xy$: dove $f$ è costante la radice vale $1$ e l'area coincide con quella della proiezione, dove il grafico è ripido la radice è grande.
:::

::::teorema{#area-superficie-di-rotazione titolo="Area di una superficie di rotazione"}
Sia $\gamma$ la curva regolare nel semipiano $\{ x \geq 0,\, y = 0 \}$ di equazioni $x = g(t)$, $z = h(t)$ con $t \in [a, b]$, $g \geq 0$ e $g, h$ di classe $C^1$. La superficie ottenuta ruotando $\gamma$ di un giro completo attorno all'asse $z$ ha area
$$
\operatorname{Area}(\Sigma) = 2\pi \int_a^b g(t) \, \sqrt{g'(t)^2 + h'(t)^2} \; dt .
$$
L'area è l'integrale della **lunghezza della circonferenza** descritta da ciascun punto della curva, $2\pi g(t)$, rispetto all'elemento di lunghezza della curva. La formula si applica a coni, tronchi di cono, paraboloidi e calotte sferiche senza ripetere ogni volta il calcolo del prodotto vettoriale.

::grafico{xmin=-2.4 xmax=2.6 ymin=-0.4 ymax=3.4 uguale=1 nomi="x,z" curve="1+0.4*sin(2*t),t,0,3;-1-0.4*sin(2*t),t,0,3" segmenti="-1.2702,1.2,1.2702,1.2" punti="1.2702,1.2,pieno,P" etichette="0.35,1.32,g(t);1.15,2.6,γ" titolo="Sezione con il piano $y = 0$ di una superficie di rotazione, con $h(t) = t$: il punto $P = (g(t), h(t))$ della curva $\gamma$ descrive attorno all'asse $z$ una circonferenza di raggio $g(t)$"}

:::dimostrazione
La superficie di rotazione si parametrizza con
$$
\mathbf{r}(t, \theta) = \bigl( g(t) \cos\theta,\; g(t) \sin\theta,\; h(t) \bigr),
\qquad (t, \theta) \in [a, b] \times [0, 2\pi].
$$
I vettori derivati sono $\mathbf{r}_t = (g' \cos\theta,\; g' \sin\theta,\; h')$ e $\mathbf{r}_\theta = (-g \sin\theta,\; g \cos\theta,\; 0)$, quindi
$$
\mathbf{r}_t \wedge \mathbf{r}_\theta = \bigl( -g\, h' \cos\theta,\; -g\, h' \sin\theta,\; g\, g' \bigr),
\qquad
\lVert \mathbf{r}_t \wedge \mathbf{r}_\theta \rVert = g \sqrt{g'^2 + h'^2} .
$$
L'integrando *non* dipende da $\theta$, perciò l'integrale doppio della definizione di area si riduce al **prodotto** di $2\pi$ per l'integrale in $t$, che è la formula dell'enunciato.
:::
::::

## Integrali di superficie di funzioni scalari

:::definizione{#integrale-di-superficie titolo="Integrale di superficie"}
Sia $\Sigma = \mathbf{r}(D)$ una superficie regolare e $f : \Sigma \to \mathbb{R}$ una funzione continua. L'**integrale di superficie** di $f$ su $\Sigma$ è
$$
\iint_\Sigma f \, d\sigma = \iint_D f\bigl( \mathbf{r}(u, v) \bigr) \, \lVert \mathbf{r}_u \wedge \mathbf{r}_v \rVert \, du \, dv .
$$
Il calcolo segue sempre lo stesso schema: si sostituisce la parametrizzazione nella funzione, si moltiplica per la norma del vettore normale e si integra sul dominio dei parametri. Per $f = 1$ si ritrova l'area della superficie. Il valore non dipende dalla parametrizzazione. Se $f$ è la densità superficiale di una lamina a forma di $\Sigma$, l'integrale è la **massa** della lamina; con lo stesso integrale si calcolano baricentri e momenti d'inerzia di superfici materiali.
:::

:::esempio
Per $\Sigma$ porzione del piano $z = 1 - x - y$ sopra il triangolo $T$ di vertici $(0,0)$, $(1,0)$, $(0,1)$ si ha $d\sigma = \sqrt{1 + 1 + 1} \, dx \, dy = \sqrt{3} \, dx \, dy$, quindi
$$
\iint_\Sigma z \, d\sigma = \sqrt{3} \iint_T (1 - x - y) \, dx \, dy = \frac{\sqrt{3}}{6} .
$$
:::

## Superfici orientate e flusso

:::definizione{#superficie-orientata titolo="Superficie orientata"}
Una superficie regolare $\Sigma$ è **orientata** quando su di essa è scelto un campo continuo di versori normali $\mathbf{n}$. In ogni punto i versori normali possibili sono due, opposti tra loro, quindi una superficie orientabile ammette due orientazioni. Una parametrizzazione regolare induce l'orientazione data da
$$
\mathbf{n} = \frac{\mathbf{r}_u \wedge \mathbf{r}_v}{\lVert \mathbf{r}_u \wedge \mathbf{r}_v \rVert} .
$$
Per una superficie chiusa, cioè una superficie che racchiude una regione limitata dello spazio come una sfera o il bordo di un cubo, l'orientazione standard è quella del **versore normale esterno**, uscente dalla regione racchiusa. Per una superficie cartesiana l'orientazione indotta dalla parametrizzazione $\mathbf{r}(x,y) = (x, y, f(x,y))$ ha terza componente positiva e si dice **orientazione verso l'alto**.

::grafico{xmin=-2.2 xmax=2.8 ymin=-2 ymax=2.4 uguale=1 nomi="x,z" curve="1.5*cos(t),1.5*sin(t),0,6.29" vettori="0.964,1.149,1.607,1.915,n;0.964,1.149,0.321,0.383,−n" punti="0.964,1.149" titolo="Sezione di una sfera con un piano per il centro: in ogni punto i versori normali sono due, opposti; per una superficie chiusa si sceglie $\mathbf{n}$, uscente dalla regione racchiusa"}

:::

:::osservazione
Esistono **superfici non orientabili**, sulle quali *nessuna* scelta continua del versore normale è possibile: l'esempio classico è il **nastro di Möbius**, una striscia incollata dopo mezza torsione, lungo la quale il versore normale trasportato con continuità ritorna al punto di partenza con il verso opposto. Le superfici degli esercizi, grafici, sfere, cilindri e loro porzioni, sono tutte orientabili.
:::

:::definizione{#flusso titolo="Flusso di un campo vettoriale"}
Sia $\Sigma$ una superficie regolare orientata dal versore normale $\mathbf{n}$ e sia $\mathbf{F} : A \subseteq \mathbb{R}^3 \to \mathbb{R}^3$ un campo vettoriale continuo definito su un aperto contenente $\Sigma$. Il **flusso** di $\mathbf{F}$ attraverso $\Sigma$ è
$$
\Phi_\Sigma(\mathbf{F}) = \iint_\Sigma \mathbf{F} \cdot \mathbf{n} \; d\sigma
= \iint_D \mathbf{F}\bigl( \mathbf{r}(u, v) \bigr) \cdot \bigl( \mathbf{r}_u \wedge \mathbf{r}_v \bigr) \, du \, dv ,
$$
dove la seconda uguaglianza vale quando la parametrizzazione induce l'orientazione scelta; in caso contrario il flusso **cambia segno**. Nel passaggio dalla prima alla seconda scrittura la norma $\lVert \mathbf{r}_u \wedge \mathbf{r}_v \rVert$ dell'elemento d'area si semplifica con il denominatore del versore, quindi nel calcolo concreto si integra il prodotto scalare tra il campo e il vettore normale *non* normalizzato. Se $\mathbf{F}$ è il campo di velocità di un fluido, il flusso misura il volume di fluido che attraversa $\Sigma$ nell'unità di tempo, contato con segno positivo nel verso di $\mathbf{n}$.
:::

:::teorema{#flusso-superficie-cartesiana titolo="Flusso attraverso una superficie cartesiana"}
Se $\Sigma$ è il grafico di $f : D \to \mathbb{R}$ di classe $C^1$ orientato verso l'alto e $\mathbf{F} = (F_1, F_2, F_3)$ è continuo, allora
$$
\Phi_\Sigma(\mathbf{F}) = \iint_D \bigl( -F_1\, f_x - F_2\, f_y + F_3 \bigr) \, dx \, dy ,
$$
dove le componenti di $\mathbf{F}$ sono valutate in $(x, y, f(x, y))$. La formula segue dalla definizione di flusso, poiché per la parametrizzazione cartesiana il vettore normale è $(-f_x, -f_y, 1)$. Riduce il flusso attraverso un grafico a un **integrale doppio sul dominio di base**, senza scrivere esplicitamente la parametrizzazione.
:::

## Divergenza e rotore

:::definizione{#divergenza titolo="Divergenza"}
Sia $\mathbf{F} = (F_1, F_2, F_3)$ un campo vettoriale di classe $C^1$ su un aperto $A \subseteq \mathbb{R}^3$. La **divergenza** di $\mathbf{F}$ è la funzione scalare
$$
\operatorname{div} \mathbf{F} = \frac{\partial F_1}{\partial x} + \frac{\partial F_2}{\partial y} + \frac{\partial F_3}{\partial z} .
$$
Un campo con divergenza identicamente nulla si dice **solenoidale**. Il significato geometrico della divergenza è dato dal **teorema della divergenza**: il suo integrale su una regione è il flusso uscente dal bordo, quindi $\operatorname{div} \mathbf{F}(P) > 0$ indica che da un intorno di $P$ esce più flusso di quanto ne entra. Per il campo radiale $\mathbf{F}(x, y, z) = (x, y, z)$ si ha $\operatorname{div} \mathbf{F} = 3$ in ogni punto.

::grafico{xmin=-3.2 xmax=3.2 ymin=-3 ymax=3 uguale=1 curve="cos(t),sin(t),0,6.29" vettori="0.59,0.12,0.88,0.18;1,0.67,1.5,1;1.77,0.35,2.65,0.53;0.33,0.5,0.5,0.75;0.23,1.18,0.35,1.77;1,1.5,1.5,2.24;-0.12,0.59,-0.18,0.88;-0.67,1,-1,1.5;-0.35,1.77,-0.53,2.65;-0.5,0.33,-0.75,0.5;-1.18,0.23,-1.77,0.35;-1.5,1,-2.24,1.5;-0.59,-0.12,-0.88,-0.18;-1,-0.67,-1.5,-1;-1.77,-0.35,-2.65,-0.53;-0.33,-0.5,-0.5,-0.75;-0.23,-1.18,-0.35,-1.77;-1,-1.5,-1.5,-2.24;0.12,-0.59,0.18,-0.88;0.67,-1,1,-1.5;0.35,-1.77,0.53,-2.65;0.5,-0.33,0.75,-0.5;1.18,-0.23,1.77,-0.35;1.5,-1,2.24,-1.5" titolo="Il campo radiale $\mathbf{F}(x, y, z) = (x, y, z)$ nel piano $z = 0$: le frecce escono da ogni circonferenza centrata nell'origine, in accordo con $\operatorname{div} \mathbf{F} = 3 > 0$"}

:::

:::definizione{#rotore titolo="Rotore"}
Il **rotore** di un campo $\mathbf{F} = (F_1, F_2, F_3)$ di classe $C^1$ è il campo vettoriale
$$
\operatorname{rot} \mathbf{F} =
\left( \frac{\partial F_3}{\partial y} - \frac{\partial F_2}{\partial z},\;
\frac{\partial F_1}{\partial z} - \frac{\partial F_3}{\partial x},\;
\frac{\partial F_2}{\partial x} - \frac{\partial F_1}{\partial y} \right),
$$
che si ricorda con lo sviluppo formale del determinante
$$
\operatorname{rot} \mathbf{F} = \nabla \wedge \mathbf{F} =
\begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\[4pt]
\dfrac{\partial}{\partial x} & \dfrac{\partial}{\partial y} & \dfrac{\partial}{\partial z} \\[6pt]
F_1 & F_2 & F_3
\end{vmatrix} .
$$
Un campo con rotore identicamente nullo si dice **irrotazionale**. Il significato del rotore è dato dal **teorema di Stokes**: il flusso del rotore attraverso una superficie è la circuitazione del campo lungo il bordo, quindi il rotore misura la tendenza del campo a far ruotare localmente il fluido che lo segue. Per il campo $\mathbf{F} = (-y, x, 0)$, che ruota attorno all'asse $z$, si calcola $\operatorname{rot} \mathbf{F} = (0, 0, 2)$: un vettore diretto lungo l'asse di rotazione.
:::

::::teorema{#proprieta-divergenza-rotore titolo="Proprietà di divergenza e rotore"}
Divergenza e rotore sono **lineari**. Inoltre, per ogni funzione $f$ di classe $C^2$ e ogni campo $\mathbf{F}$ di classe $C^2$ su un aperto $A \subseteq \mathbb{R}^3$ valgono le identità
$$
\operatorname{rot} \bigl( \nabla f \bigr) = \mathbf{0},
\qquad
\operatorname{div} \bigl( \operatorname{rot} \mathbf{F} \bigr) = 0 .
$$
La prima identità dice che *ogni* campo gradiente è **irrotazionale**; poiché i campi conservativi sono i campi gradiente, il calcolo del rotore è il test preliminare di conservatività usato nel capitolo sui campi vettoriali. La seconda dice che ogni rotore è **solenoidale**, quindi un campo con divergenza non nulla non è il rotore di alcun campo $C^2$.

:::dimostrazione
Per la prima identità, la prima componente di $\operatorname{rot}(\nabla f)$ è
$$
\frac{\partial}{\partial y} \frac{\partial f}{\partial z} - \frac{\partial}{\partial z} \frac{\partial f}{\partial y}
= f_{zy} - f_{yz} = 0 ,
$$
poiché $f$ è di classe $C^2$ e il **teorema di Schwarz** si applica; le altre due componenti si annullano allo stesso modo. Per la seconda identità si calcola
$$
\operatorname{div} \bigl( \operatorname{rot} \mathbf{F} \bigr)
= \frac{\partial}{\partial x} \left( \frac{\partial F_3}{\partial y} - \frac{\partial F_2}{\partial z} \right)
+ \frac{\partial}{\partial y} \left( \frac{\partial F_1}{\partial z} - \frac{\partial F_3}{\partial x} \right)
+ \frac{\partial}{\partial z} \left( \frac{\partial F_2}{\partial x} - \frac{\partial F_1}{\partial y} \right),
$$
e le sei derivate seconde miste **si cancellano a coppie**, ancora per il teorema di Schwarz.
:::
::::

:::richiamo{titolo="Teorema di Schwarz"}
Se $f$ è di classe $C^2$ su un aperto, allora le derivate seconde miste **coincidono**: $f_{xy} = f_{yx}$, e lo stesso per ogni coppia di variabili.
:::

:::attenzione
Un campo irrotazionale *non* è necessariamente **conservativo**: il campo $\mathbf{F} = \left( \dfrac{-y}{x^2 + y^2},\, \dfrac{x}{x^2 + y^2},\, 0 \right)$ ha rotore nullo sul suo dominio ma circuitazione $2\pi$ lungo una circonferenza attorno all'asse $z$. L'implicazione inversa richiede un'ipotesi sul dominio e si rimanda al capitolo sui campi vettoriali.
:::

## Il teorema della divergenza

:::definizione{#dominio-regolare titolo="Dominio regolare dello spazio"}
Un insieme $V \subset \mathbb{R}^3$ chiuso e limitato è un **dominio regolare** se la sua frontiera $\partial V$ è l'unione di un numero finito di superfici regolari, orientate con il versore normale esterno $\mathbf{n}$, uscente da $V$. Sono domini regolari la palla, il cubo, il cilindro pieno e le regioni comprese tra due grafici. Su questi insiemi si enuncia il teorema della divergenza.
:::

::::teorema{#teorema-della-divergenza titolo="Teorema della divergenza (Gauss)"}
Sia $V \subset \mathbb{R}^3$ un dominio regolare con frontiera $\partial V$ orientata con il versore normale esterno, e sia $\mathbf{F}$ un campo vettoriale di classe $C^1$ su un aperto contenente $V$. Allora
$$
\iint_{\partial V} \mathbf{F} \cdot \mathbf{n} \; d\sigma
= \iiint_V \operatorname{div} \mathbf{F} \; dx \, dy \, dz .
$$
Il teorema trasforma un **flusso** in un **integrale triplo** e viceversa. Negli esercizi conviene quando la superficie è chiusa e la divergenza è semplice: il flusso del campo radiale $\mathbf{F} = (x, y, z)$ uscente da una *qualunque* superficie chiusa vale $3 \operatorname{Vol}(V)$, senza alcuna parametrizzazione.

:::dimostrazione
Si dimostra l'identità per la terza componente,
$$
\iint_{\partial V} F_3 \, \mathbf{k} \cdot \mathbf{n} \; d\sigma = \iiint_V \frac{\partial F_3}{\partial z} \, dx \, dy \, dz ,
$$
nel caso in cui $V$ sia normale rispetto all'asse $z$, cioè
$$
V = \bigl\{ (x, y, z) : (x, y) \in D,\; g(x, y) \leq z \leq h(x, y) \bigr\}
$$
con $g, h$ di classe $C^1$ su $D$. Per le formule di riduzione degli integrali tripli, il secondo membro è
$$
\iint_D \left( \int_{g(x,y)}^{h(x,y)} \frac{\partial F_3}{\partial z} \, dz \right) dx \, dy
= \iint_D \Bigl( F_3\bigl(x, y, h(x,y)\bigr) - F_3\bigl(x, y, g(x,y)\bigr) \Bigr) \, dx \, dy ,
$$
per il **teorema fondamentale del calcolo** applicato alla variabile $z$. Il primo membro si spezza sulle tre parti della frontiera. Sul grafico superiore $z = h(x, y)$ il normale esterno punta verso l'alto, quindi è parallelo a $(-h_x, -h_y, 1)$ e il flusso di $F_3 \mathbf{k}$ vale $\iint_D F_3(x, y, h(x,y)) \, dx \, dy$, per la formula del flusso attraverso una superficie cartesiana. Sul grafico inferiore $z = g(x, y)$ il normale esterno punta verso il basso, perciò il flusso vale $-\iint_D F_3(x, y, g(x,y)) \, dx \, dy$. Sulla superficie laterale, dove $(x, y)$ percorre la frontiera di $D$, il versore normale è orizzontale, quindi $\mathbf{k} \cdot \mathbf{n} = 0$ e il contributo è **nullo**. La somma dei tre contributi **coincide con il secondo membro**, e questo prova l'identità per la terza componente. Se $V$ è normale anche rispetto agli assi $x$ e $y$, le identità analoghe per $F_1$ e $F_2$ si dimostrano allo stesso modo e la somma delle tre dà il teorema. Per un dominio regolare qualunque si decompone $V$ in un numero finito di domini normali: i flussi attraverso le superfici interne di taglio si cancellano a coppie, poiché le due parti adiacenti le attraversano con normali opposti.
:::
::::

:::richiamo{titolo="Flusso attraverso una superficie cartesiana"}
Se $\Sigma$ è il grafico di $f$ su $D$ orientato verso l'alto, allora $\Phi_\Sigma(\mathbf{F}) = \displaystyle\iint_D \bigl( -F_1 f_x - F_2 f_y + F_3 \bigr) \, dx \, dy$.
:::

:::osservazione
Il teorema della divergenza si applica *anche* a superfici non chiuse, **chiudendole**. Se $\Sigma$ è una superficie con bordo, si aggiunge una **superficie ausiliaria** $\Sigma'$ in modo che $\Sigma \cup \Sigma'$ racchiuda un dominio regolare $V$; allora il flusso attraverso $\Sigma$ è l'integrale della divergenza su $V$ meno il flusso attraverso $\Sigma'$, con le orientazioni esterne. La tecnica conviene quando $\Sigma'$ è un disco piano, sul quale il flusso si calcola in poche righe.
:::

## Il teorema di Stokes

:::definizione{#orientazione-coerente titolo="Orientazione coerente di superficie e bordo"}
Sia $\Sigma$ una superficie regolare orientata dal versore $\mathbf{n}$, il cui bordo $\partial\Sigma$ è una curva chiusa regolare a tratti. Il bordo è **orientato in modo coerente** con $\Sigma$ se, per un osservatore disposto come $\mathbf{n}$ che percorre il bordo nel verso scelto, la superficie resta alla sua **sinistra**. Per una superficie cartesiana orientata verso l'alto l'orientazione coerente del bordo è quella antioraria vista dall'alto. La coerenza tra le due orientazioni è un'ipotesi del teorema di Stokes: invertendo *una sola* delle due, il segno dell'uguaglianza cambia.
:::

::::teorema{#teorema-di-stokes titolo="Teorema di Stokes (del rotore)"}
Sia $\Sigma$ una superficie regolare orientata con bordo $\partial\Sigma$ orientato in modo coerente, e sia $\mathbf{F}$ un campo vettoriale di classe $C^1$ su un aperto contenente $\Sigma$. Allora
$$
\oint_{\partial\Sigma} \mathbf{F} \cdot d\mathbf{r}
= \iint_\Sigma \operatorname{rot} \mathbf{F} \cdot \mathbf{n} \; d\sigma .
$$
La **circuitazione** di un campo lungo una curva chiusa nello spazio è il **flusso del rotore** attraverso una *qualunque* superficie orientata che ha quella curva come bordo coerente. Negli esercizi il teorema si usa nei due versi: una circuitazione complicata diventa il flusso di un rotore spesso semplice, e come superficie si sceglie la più comoda tra quelle con lo stesso bordo, di solito una porzione di piano.

:::dimostrazione
Per una superficie cartesiana $z = f(x, y)$ su un dominio $D$ del piano, l'integrale di linea lungo $\partial\Sigma$ si riscrive, sostituendo la parametrizzazione del bordo, come un integrale di linea lungo la frontiera di $D$ nel piano $xy$; a quest'ultimo si applica il **teorema di Green**, e un calcolo diretto con la regola della catena mostra che l'integrando ottenuto coincide con $\operatorname{rot} \mathbf{F} \cdot (-f_x, -f_y, 1)$, cioè con l'integrando del flusso del rotore. Il caso generale si ottiene decomponendo la superficie in porzioni cartesiane: lungo i tagli interni le circuitazioni si cancellano a coppie, poiché ogni taglio è percorso due volte in versi opposti. Lo svolgimento completo dei passaggi richiede sole manipolazioni di derivate ma è lungo, e si rimanda ai testi di riferimento del corso.
:::
::::

:::richiamo{titolo="Teorema di Green"}
Se $D \subset \mathbb{R}^2$ è un dominio regolare con frontiera $\partial D$ percorsa in verso antiorario e $P, Q$ sono di classe $C^1$ su un aperto contenente $D$, allora
$$
\oint_{\partial D} P \, dx + Q \, dy = \iint_D \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dx \, dy .
$$
:::

:::osservazione{#green-caso-particolare}
Il teorema di Green è il **caso particolare del teorema di Stokes** in cui la superficie è piana. Sia $\Sigma = D$ un dominio regolare del piano $z = 0$ orientato con $\mathbf{n} = \mathbf{k}$, e sia $\mathbf{F} = (P, Q, 0)$ con $P$ e $Q$ indipendenti da $z$. Il bordo coerente è la frontiera di $D$ percorsa in verso antiorario, la circuitazione si riduce a $\oint_{\partial D} P \, dx + Q \, dy$, e il flusso del rotore si riduce a
$$
\iint_D \operatorname{rot} \mathbf{F} \cdot \mathbf{k} \; d\sigma
= \iint_D \left( \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right) dx \, dy ,
$$
poiché la terza componente del rotore di $(P, Q, 0)$ è $Q_x - P_y$. L'uguaglianza di Stokes diventa la **formula di Green**.
:::

:::osservazione
Il teorema di Stokes spiega il legame tra campi irrotazionali e campi conservativi. Se $\operatorname{rot} \mathbf{F} = \mathbf{0}$ su un aperto nel quale ogni curva chiusa è bordo di una superficie contenuta nell'aperto, allora *ogni* circuitazione di $\mathbf{F}$ è nulla, quindi il campo è **conservativo**. La condizione sul dominio e le sue conseguenze sono trattate nel capitolo sui campi vettoriali.
:::
