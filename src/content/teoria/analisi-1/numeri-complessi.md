---
titolo: Numeri complessi
sommario: Che cosa sono i numeri complessi, come si rappresentano in forma algebrica, trigonometrica ed esponenziale, come si calcolano potenze e radici, e come si risolvono le equazioni in campo complesso.
---

## Definizione e forma algebrica

:::definizione{#numero-complesso titolo="Numero complesso"}
Un **numero complesso** è una coppia ordinata $(a, b)$ di numeri reali, con somma e prodotto definiti da
$$
\begin{gathered}
(a, b) + (c, d) = (a + c,\; b + d), \\[4pt]
(a, b) \cdot (c, d) = (ac - bd,\; ad + bc).
\end{gathered}
$$
L'insieme dei numeri complessi si indica con $\mathbb{C}$. Posto $i = (0, 1)$, dalla definizione di prodotto segue $i^2 = (0,1) \cdot (0,1) = (-1, 0)$, e identificando $(a, 0)$ con il numero reale $a$ si ottiene la scrittura
$$
z = (a, b) = a + i b, \qquad i^2 = -1 ,
$$
detta **forma algebrica**. In forma algebrica si calcola come con i polinomi in $i$, sostituendo $i^2$ con $-1$ *ogni volta* che compare.
:::

:::definizione{#parte-reale-immaginaria titolo="Parte reale e parte immaginaria"}
Per $z = a + ib$ con $a, b \in \mathbb{R}$ si pone
$$
\operatorname{Re}(z) = a, \qquad \operatorname{Im}(z) = b .
$$
La parte immaginaria è il numero reale $b$, *non* $ib$. Due numeri complessi sono **uguali** *se e solo se* hanno la stessa parte reale e la stessa parte immaginaria; su questa proprietà si fondano le equazioni risolte ponendo $z = x + iy$, perché un'uguaglianza in $\mathbb{C}$ equivale a un **sistema di due uguaglianze** in $\mathbb{R}$.
:::

:::osservazione
In $\mathbb{C}$ *non* è definito alcun **ordinamento** compatibile con le operazioni: scritture come $z_1 < z_2$ non hanno significato tra numeri complessi non reali. Le disuguaglianze in $\mathbb{C}$ riguardano sempre **quantità reali**, come il modulo o la parte reale.
:::

## Operazioni

:::definizione{#operazioni titolo="Somma, prodotto, reciproco e quoziente"}
Per $z = a + ib$ e $w = c + id$:
$$
\begin{gathered}
z + w = (a + c) + i(b + d), \\[4pt]
z \cdot w = (ac - bd) + i(ad + bc), \\[6pt]
\frac{1}{z} = \frac{a - ib}{a^2 + b^2} \quad (z \neq 0), \qquad
\frac{z}{w} = z \cdot \frac{1}{w} \quad (w \neq 0).
\end{gathered}
$$
Il prodotto si ottiene svolgendo $(a + ib)(c + id)$ con la proprietà distributiva e sostituendo $i^2 = -1$. Per il reciproco e il quoziente si moltiplicano numeratore e denominatore per $c - id$, detto **coniugato** del denominatore $c + id$, così il denominatore diventa il numero reale $(c + id)(c - id) = c^2 + d^2$. Con queste operazioni $\mathbb{C}$ è un **campo**: valgono le stesse regole algebriche di $\mathbb{R}$.
:::

:::esempio{titolo="Quoziente in forma algebrica"}
$$
\frac{2 + i}{1 - 3i}
= \frac{(2 + i)(1 + 3i)}{(1 - 3i)(1 + 3i)}
= \frac{2 + 6i + i + 3i^2}{1 + 9}
= \frac{-1 + 7i}{10}
= -\frac{1}{10} + \frac{7}{10}\, i
$$
Numeratore e denominatore sono moltiplicati per $1 + 3i$, coniugato del denominatore; al denominatore compare $1^2 + 3^2 = 10$, che è **reale**, quindi il risultato si separa in parte reale e parte immaginaria.
:::

## Coniugato

:::definizione{#coniugato titolo="Coniugato e sue proprietà"}
Il **coniugato** di $z = a + ib$ è
$$
\bar{z} = a - ib .
$$
Per ogni $z, w \in \mathbb{C}$ valgono
$$
\begin{gathered}
\overline{z + w} = \bar{z} + \bar{w}, \qquad \overline{z \cdot w} = \bar{z} \cdot \bar{w}, \qquad \overline{\bar{z}} = z, \\[6pt]
z + \bar{z} = 2 \operatorname{Re}(z), \qquad z - \bar{z} = 2i \operatorname{Im}(z),
\end{gathered}
$$
e inoltre $z = \bar{z}$ *se e solo se* $z$ è **reale**. Il coniugato serve a rendere reali i denominatori, a estrarre parte reale e parte immaginaria, e compare nelle equazioni con $\bar{z}$, che si risolvono ponendo $z = x + iy$.
:::

:::definizione{#modulo titolo="Modulo e sue proprietà"}
Il **modulo** di $z = a + ib$ è il numero reale
$$
|z| = \sqrt{a^2 + b^2} \geq 0 ,
$$
nullo *solo* per $z = 0$. Per ogni $z, w \in \mathbb{C}$ valgono
$$
\begin{gathered}
z \cdot \bar{z} = |z|^2, \qquad |z \cdot w| = |z| \, |w|, \qquad \left| \frac{z}{w} \right| = \frac{|z|}{|w|} \ \ (w \neq 0), \\[6pt]
|z + w| \leq |z| + |w| \quad \text{(disuguaglianza triangolare)}.
\end{gathered}
$$
L'identità $z \bar{z} = |z|^2$ si verifica con il calcolo: $(a + ib)(a - ib) = a^2 + b^2$. Da essa segue la **formula del reciproco**, $\dfrac{1}{z} = \dfrac{\bar{z}}{|z|^2}$, e la **moltiplicatività del modulo**: $|zw|^2 = zw \, \overline{zw} = z \bar{z} \, w \bar{w} = |z|^2 |w|^2$. Sul modulo si fondano la forma trigonometrica e i luoghi geometrici del piano descritti da equazioni come $|z - z_0| = r$.
:::

## Piano di Gauss

:::definizione{#piano-di-gauss titolo="Piano di Gauss"}
Il numero $z = a + ib$ si rappresenta nel piano cartesiano con il punto di coordinate $(a, b)$: l'asse delle ascisse contiene i numeri reali, l'asse delle ordinate i numeri immaginari puri $ib$. Con questa identificazione

- la somma $z + w$ è la somma dei vettori che congiungono l'origine ai punti $z$ e $w$ (**regola del parallelogramma**);
- il modulo $|z|$ è la **distanza** del punto $z$ dall'origine, e $|z - w|$ è la distanza tra i punti $z$ e $w$;
- il coniugato $\bar{z}$ è il **simmetrico** di $z$ rispetto all'asse reale.

L'interpretazione di $|z - w|$ come distanza traduce le equazioni e disequazioni con il modulo in luoghi geometrici: $|z - z_0| = r$ è la circonferenza di centro $z_0$ e raggio $r$, $|z - z_0| \leq r$ è il cerchio corrispondente, $|z - z_1| = |z - z_2|$ è l'asse del segmento di estremi $z_1$ e $z_2$.

::grafico{xmin=-1 xmax=5 ymin=-1 ymax=4 uguale=1 nomi="Re,Im" vettori="0,0,3,1,z;0,0,1,2,w;0,0,4,3,z + w" segmenti="3,1,4,3;1,2,4,3" titolo="Regola del parallelogramma: con $z = 3 + i$ e $w = 1 + 2i$ la somma $z + w = 4 + 3i$ è la diagonale del parallelogramma di lati $z$ e $w$"}

::grafico{xmin=-1 xmax=4.5 ymin=-1 ymax=5 uguale=1 nomi="Re,Im" vettori="0,0,3,4,z" segmenti="3,0,3,4;0,4,3,4" titolo="Il modulo di $z = 3 + 4i$ è la distanza del punto $(3, 4)$ dall'origine: $|z| = \sqrt{3^2 + 4^2} = 5$"}

::grafico{xmin=-1 xmax=4.5 ymin=-3 ymax=3 uguale=1 nomi="Re,Im" vettori="0,0,3,2,z;0,0,3,-2,z̄" segmenti="3,2,3,-2" titolo="Il coniugato $\bar{z} = 3 - 2i$ è il simmetrico di $z = 3 + 2i$ rispetto all'asse reale"}

:::

:::esempio
$|z - i| = 2$ è la circonferenza di centro $(0, 1)$ e raggio $2$. Posto $z = x + iy$, l'equazione diventa $\sqrt{x^2 + (y - 1)^2} = 2$, cioè $x^2 + (y - 1)^2 = 4$, che è l'**equazione cartesiana** della stessa circonferenza.

::grafico{curve="2*cos(t),1+2*sin(t),0,6.29" xmin=-3 xmax=3 ymin=-1.5 ymax=3.5 uguale=1 nomi="Re,Im" punti="0,1,pieno,i" segmenti="0,1,2,1" titolo="$|z - i| = 2$: i punti a distanza $2$ dal punto $i$ formano la circonferenza di centro $(0, 1)$ e raggio $2$"}

:::

## Forma trigonometrica

:::definizione{#forma-trigonometrica titolo="Forma trigonometrica e argomento"}
Ogni $z = a + ib \neq 0$ si scrive come
$$
z = \rho \, (\cos\theta + i \sin\theta), \qquad \rho = |z| = \sqrt{a^2 + b^2},
$$
dove $\theta$, detto **argomento** di $z$, è l'angolo che il vettore di $z$ forma con il semiasse reale positivo, determinato da $\cos\theta = \dfrac{a}{\rho}$ e $\sin\theta = \dfrac{b}{\rho}$ a meno di multipli di $2\pi$. L'**argomento principale** è il valore $\theta \in (-\pi, \pi]$; per $a \neq 0$ si ottiene dall'arcotangente di $\dfrac{b}{a}$ correggendo secondo il quadrante:
$$
\theta =
\begin{cases}
\arctan \dfrac{b}{a} & \text{se } a > 0 \\[10pt]
\arctan \dfrac{b}{a} + \pi & \text{se } a < 0,\ b \geq 0 \\[10pt]
\arctan \dfrac{b}{a} - \pi & \text{se } a < 0,\ b < 0 \\[10pt]
\dfrac{\pi}{2} & \text{se } a = 0,\ b > 0 \\[10pt]
-\dfrac{\pi}{2} & \text{se } a = 0,\ b < 0
\end{cases}
$$
La correzione è necessaria perché l'arcotangente restituisce *solo* angoli in $\left(-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right)$, cioè punti con parte reale positiva. La forma trigonometrica è la rappresentazione adatta a prodotti, potenze e radici.
:::

:::esempio{titolo="Forma trigonometrica di un numero nel secondo quadrante"}
$z = -1 + i$: il modulo è $\rho = \sqrt{1 + 1} = \sqrt{2}$. Poiché $a = -1 < 0$ e $b = 1 \geq 0$, l'argomento principale è $\theta = \arctan(-1) + \pi = -\dfrac{\pi}{4} + \pi = \dfrac{3\pi}{4}$, quindi
$$
z = \sqrt{2} \left( \cos \frac{3\pi}{4} + i \sin \frac{3\pi}{4} \right).
$$

::grafico{curve="0.35*cos(t),0.35*sin(t),0,2.356" xmin=-2 xmax=1.5 ymin=-0.8 ymax=1.8 uguale=1 nomi="Re,Im" vettori="0,0,-1,1,z" segmenti="-1,0,-1,1;0,1,-1,1" etichette="0.12,0.5,θ" titolo="$z = -1 + i$ ha modulo $\sqrt{2}$ e argomento principale $\theta = \dfrac{3\pi}{4}$"}

:::

:::teorema{#prodotto-quoziente-trigonometrico titolo="Prodotto e quoziente in forma trigonometrica"}
Se $z = \rho (\cos\theta + i \sin\theta)$ e $w = \sigma (\cos\varphi + i \sin\varphi)$ con $\rho, \sigma > 0$, allora
$$
\begin{gathered}
z \cdot w = \rho \sigma \, \bigl( \cos(\theta + \varphi) + i \sin(\theta + \varphi) \bigr), \\[6pt]
\frac{z}{w} = \frac{\rho}{\sigma} \, \bigl( \cos(\theta - \varphi) + i \sin(\theta - \varphi) \bigr).
\end{gathered}
$$
Nel prodotto i moduli si **moltiplicano** e gli argomenti si **sommano**; nel quoziente i moduli si dividono e gli argomenti si sottraggono. La formula del prodotto si ottiene svolgendo il prodotto delle due forme trigonometriche e applicando le formule di addizione di seno e coseno; quella del quoziente segue applicando il prodotto a $\dfrac{z}{w}$ e $w$. Moltiplicare per $w$ significa quindi ruotare di $\varphi$ e dilatare di $\sigma$: è questa **lettura geometrica** che rende immediate le potenze.

::grafico{xmin=-1 xmax=3 ymin=-0.8 ymax=3.5 uguale=1 nomi="Re,Im" vettori="0,0,2,1,z;0,0,1,1,w;0,0,1,3,zw" titolo="Con $z = 2 + i$ e $w = 1 + i$, di modulo $\sqrt{2}$ e argomento $\dfrac{\pi}{4}$: il prodotto $zw = 1 + 3i$ è $z$ ruotato di $\dfrac{\pi}{4}$, con modulo $\sqrt{5} \cdot \sqrt{2} = \sqrt{10}$"}

:::

::::teorema{#de-moivre titolo="Formula di De Moivre"}
Per ogni $\rho > 0$, $\theta \in \mathbb{R}$ e $n \in \mathbb{N}$, $n \geq 1$:
$$
\bigl( \rho (\cos\theta + i \sin\theta) \bigr)^n = \rho^n \bigl( \cos(n\theta) + i \sin(n\theta) \bigr).
$$
Riduce il calcolo di una potenza alla **moltiplicazione dell'argomento** per $n$: il calcolo di $z^{10}$ richiede la sola forma trigonometrica di $z$, al posto di nove prodotti successivi. È lo strumento per le potenze alte e il punto di partenza per le radici $n$-esime.

::grafico{xmin=-4.6 xmax=1.8 ymin=-0.8 ymax=2.8 uguale=1 nomi="Re,Im" vettori="0,0,1,1,z;0,0,0,2,z²;0,0,-2,2,z³;0,0,-4,0,z⁴" titolo="Potenze di $z = 1 + i$: $z^2 = 2i$, $z^3 = -2 + 2i$, $z^4 = -4$; a ogni passo il modulo si moltiplica per $\sqrt{2}$ e l'argomento aumenta di $\dfrac{\pi}{4}$"}

:::dimostrazione
Si procede per **induzione** su $n$. Per $n = 1$ la formula afferma che $z^1 = \rho(\cos\theta + i\sin\theta)$, che è la forma trigonometrica di $z$, quindi la base è verificata. Si supponga la formula vera per $n$; allora
$$
\begin{aligned}
z^{n+1} &= z^n \cdot z \\[6pt]
&= \rho^n \bigl( \cos(n\theta) + i \sin(n\theta) \bigr) \cdot \rho \, (\cos\theta + i \sin\theta) \\[6pt]
&= \rho^{n+1} \bigl( \cos(n\theta + \theta) + i \sin(n\theta + \theta) \bigr) \\[6pt]
&= \rho^{n+1} \bigl( \cos((n+1)\theta) + i \sin((n+1)\theta) \bigr),
\end{aligned}
$$
dove il terzo passaggio applica la **formula del prodotto** in forma trigonometrica. La formula vale per $n + 1$, quindi per induzione vale per *ogni* $n \geq 1$.
:::
::::

:::richiamo{titolo="Prodotto in forma trigonometrica"}
Se $z = \rho(\cos\theta + i\sin\theta)$ e $w = \sigma(\cos\varphi + i\sin\varphi)$, allora $z w = \rho\sigma \bigl( \cos(\theta + \varphi) + i \sin(\theta + \varphi) \bigr)$.
:::

## Forma esponenziale

:::definizione{#forma-esponenziale titolo="Formula di Eulero e forma esponenziale"}
Per $\theta \in \mathbb{R}$ si pone
$$
e^{i\theta} = \cos\theta + i \sin\theta
$$
(**formula di Eulero**). Ogni $z \neq 0$ si scrive allora in **forma esponenziale**
$$
z = \rho \, e^{i\theta}, \qquad \rho = |z|, \quad \theta = \arg z .
$$
La definizione è coerente con le proprietà delle potenze: dal prodotto in forma trigonometrica segue $e^{i\theta} e^{i\varphi} = e^{i(\theta + \varphi)}$, e la formula di De Moivre diventa $\left( \rho e^{i\theta} \right)^n = \rho^n e^{in\theta}$. La forma esponenziale è la più compatta per prodotti, quozienti, potenze e radici; inoltre $e^{i\theta} = e^{i\varphi}$ *se e solo se* $\theta - \varphi$ è un multiplo intero di $2\pi$, ed è questa proprietà a generare le $n$ soluzioni delle equazioni $z^n = w$.
:::

:::esempio
$e^{i\pi} = \cos\pi + i\sin\pi = -1$, e $i = e^{i\frac{\pi}{2}}$. Il numero $z = \sqrt{2}\, e^{\,i\frac{3\pi}{4}}$ è il numero $-1 + i$ dell'esempio sulla forma trigonometrica, scritto in forma esponenziale.
:::

## Radici n-esime

::::teorema{#radici-n-esime titolo="Radici n-esime di un numero complesso"}
Sia $w = \sigma \, e^{i\varphi} \neq 0$ e $n \geq 1$ intero. L'equazione $z^n = w$ ha *esattamente* $n$ soluzioni distinte:
$$
z_k = \sqrt[n]{\sigma} \; e^{\,i \left( \frac{\varphi + 2k\pi}{n} \right)}, \qquad k = 0, 1, \dots, n - 1 .
$$
Le $n$ radici hanno *tutte* lo stesso modulo $\sqrt[n]{\sigma}$ e argomenti che differiscono di $\dfrac{2\pi}{n}$: nel piano di Gauss sono i vertici di un **poligono regolare** di $n$ lati inscritto nella circonferenza di centro l'origine e raggio $\sqrt[n]{\sigma}$. Nota una radice, le altre si ottengono ruotandola di $\dfrac{2\pi}{n}$.

::grafico{curve="2*cos(t),2*sin(t),0,6.29" xmin=-2.6 xmax=2.6 ymin=-2.4 ymax=2.4 uguale=1 nomi="Re,Im" punti="2,0,pieno,z₀;0.618,1.902,pieno,z₁;-1.618,1.176,pieno,z₂;-1.618,-1.176,pieno,z₃;0.618,-1.902,pieno,z₄" segmenti="2,0,0.618,1.902;0.618,1.902,-1.618,1.176;-1.618,1.176,-1.618,-1.176;-1.618,-1.176,0.618,-1.902;0.618,-1.902,2,0" titolo="Le radici quinte di $32$ sono $z_k = 2\, e^{\,i \frac{2k\pi}{5}}$ con $k = 0, \dots, 4$: vertici di un pentagono regolare inscritto nella circonferenza di raggio $2$"}

:::dimostrazione
Posto $z = \rho \, e^{i\theta}$ con $\rho > 0$, per la **formula di De Moivre** l'equazione $z^n = w$ equivale a $\rho^n e^{in\theta} = \sigma e^{i\varphi}$, cioè al sistema
$$
\begin{cases}
\rho^n = \sigma \\[4pt]
n\theta = \varphi + 2k\pi, \quad k \in \mathbb{Z} .
\end{cases}
$$
Dalla prima equazione, poiché $\rho$ e $\sigma$ sono reali positivi, segue $\rho = \sqrt[n]{\sigma}$; dalla seconda $\theta = \dfrac{\varphi + 2k\pi}{n}$. Due valori $k$ e $k'$ danno la stessa soluzione *se e solo se* i rispettivi argomenti differiscono di un multiplo di $2\pi$, cioè se $k - k'$ è multiplo di $n$; perciò i valori $k = 0, 1, \dots, n-1$ danno $n$ soluzioni a due a due **distinte**, e ogni altro $k$ ne ripete una.
:::
::::

:::definizione{#radici-unita titolo="Radici n-esime dell'unità"}
Le soluzioni di $z^n = 1$ sono
$$
z_k = e^{\,i \frac{2k\pi}{n}}, \qquad k = 0, 1, \dots, n - 1 :
$$
vertici del poligono regolare di $n$ lati inscritto nella **circonferenza unitaria**, con un vertice in $z_0 = 1$. Per $n = 4$ le radici sono $1, i, -1, -i$. Moltiplicando una radice $n$-esima qualsiasi di $w$ per le $n$ radici dell'unità si ottengono *tutte* le radici $n$-esime di $w$.

::grafico{curve="cos(t),sin(t),0,6.29" xmin=-1.6 xmax=1.6 ymin=-1.4 ymax=1.4 uguale=1 nomi="Re,Im" punti="1,0,pieno,1;0,1,pieno,i;-1,0,pieno,−1;0,-1,pieno,−i" segmenti="1,0,0,1;0,1,-1,0;-1,0,0,-1;0,-1,1,0" titolo="Le radici quarte dell'unità $1$, $i$, $-1$, $-i$: vertici di un quadrato inscritto nella circonferenza unitaria"}

:::

## Equazioni in campo complesso

:::teorema{#equazioni-secondo-grado titolo="Equazioni di secondo grado a coefficienti reali"}
L'equazione $a z^2 + b z + c = 0$ con $a, b, c \in \mathbb{R}$, $a \neq 0$ e discriminante $\Delta = b^2 - 4ac < 0$ ha le due **soluzioni complesse coniugate**
$$
z = \frac{-b \pm i \sqrt{-\Delta}}{2a} .
$$
La formula segue dal **completamento del quadrato**: da $\left( z + \dfrac{b}{2a} \right)^2 = \dfrac{\Delta}{4a^2} < 0$ e dal fatto che i numeri complessi con quadrato uguale al reale negativo $t$ sono $\pm i\sqrt{-t}$. In $\mathbb{C}$ ogni equazione di secondo grado a coefficienti reali ha quindi **due soluzioni**, contate con la loro molteplicità.
:::

:::esempio
$z^2 - 2z + 5 = 0$: il discriminante è $\Delta = 4 - 20 = -16 < 0$, quindi
$$
z = \frac{2 \pm i \sqrt{16}}{2} = 1 \pm 2i .
$$
Le due soluzioni sono **coniugate**, come accade *sempre* per i polinomi a coefficienti reali.
:::

:::definizione{#equazioni-in-c titolo="Equazioni con coniugato e modulo"}
Un'equazione in cui compaiono $\bar{z}$, $|z|$, $\operatorname{Re}(z)$ o $\operatorname{Im}(z)$ *non* è algebrica nella sola $z$ e si risolve ponendo $z = x + iy$ con $x, y \in \mathbb{R}$: sostituendo $\bar{z} = x - iy$ e $|z| = \sqrt{x^2 + y^2}$, l'equazione si separa in **parte reale e parte immaginaria** e diventa il sistema
$$
\begin{cases}
\operatorname{Re}(\text{primo membro}) = \operatorname{Re}(\text{secondo membro}) \\[4pt]
\operatorname{Im}(\text{primo membro}) = \operatorname{Im}(\text{secondo membro})
\end{cases}
$$
di due **equazioni reali** nelle incognite $x$ e $y$. Le equazioni della forma $z^n = w$ si risolvono invece con la formula delle radici $n$-esime, *senza* passare per $x$ e $y$.
:::

:::esempio
$z + 2\bar{z} = 3 + i$: posto $z = x + iy$, il primo membro è $x + iy + 2(x - iy) = 3x - iy$, quindi l'equazione equivale al sistema
$$
\begin{cases}
3x = 3 \\[4pt]
-y = 1
\end{cases}
$$
da cui $x = 1$, $y = -1$, cioè $z = 1 - i$.
:::

## Teorema fondamentale dell'algebra

:::teorema{#teorema-fondamentale-algebra titolo="Teorema fondamentale dell'algebra"}
Ogni polinomio $p(z) = a_n z^n + \dots + a_1 z + a_0$ a coefficienti complessi, di grado $n \geq 1$, ha *almeno una* radice in $\mathbb{C}$. Applicando ripetutamente la divisione per $z - z_0$ segue che $p$ ha *esattamente* $n$ radici contate con molteplicità e si **fattorizza** come
$$
p(z) = a_n (z - z_1)(z - z_2) \cdots (z - z_n).
$$
In $\mathbb{C}$, a differenza che in $\mathbb{R}$, nessuna equazione polinomiale resta **senza soluzioni**: il numero delle radici è determinato dal grado. La dimostrazione richiede strumenti di analisi complessa e si assume.
:::

::::teorema{#radici-coniugate titolo="Radici complesse coniugate dei polinomi reali"}
Se $p$ è un polinomio a coefficienti reali e $z_0 \in \mathbb{C}$ è una sua radice, anche $\bar{z}_0$ è **radice** di $p$, con la *stessa* molteplicità. Le radici non reali di un polinomio reale compaiono quindi a **coppie coniugate**; in particolare un polinomio reale di grado dispari ha *almeno una* radice reale.

:::dimostrazione
Sia $p(z) = a_n z^n + \dots + a_1 z + a_0$ con $a_k \in \mathbb{R}$ per ogni $k$, e sia $p(z_0) = 0$. Poiché il coniugato di una somma è la somma dei coniugati e il coniugato di un prodotto è il prodotto dei coniugati, si ha $\overline{z_0^{\,k}} = \bar{z}_0^{\,k}$ e quindi
$$
\begin{aligned}
p(\bar{z}_0) &= \sum_{k=0}^{n} a_k \, \bar{z}_0^{\,k}
= \sum_{k=0}^{n} \overline{a_k} \; \overline{z_0^{\,k}} \\[6pt]
&= \overline{ \sum_{k=0}^{n} a_k \, z_0^{\,k} }
= \overline{p(z_0)} = \bar{0} = 0 ,
\end{aligned}
$$
dove il secondo passaggio usa $\overline{a_k} = a_k$, perché i coefficienti sono reali. Perciò $\bar{z}_0$ è **radice** di $p$. Per la molteplicità: se $z_0$ ha molteplicità $m$, allora $p(z) = (z - z_0)^m q(z)$ con $q(z_0) \neq 0$; coniugando i coefficienti della fattorizzazione si ottiene che $\bar{z}_0$ ha **molteplicità** $m$ per il polinomio coniugato, che coincide con $p$ perché i coefficienti sono reali.
:::
::::

:::richiamo{titolo="Coniugato e operazioni"}
Per ogni $z, w \in \mathbb{C}$: $\overline{z + w} = \bar{z} + \bar{w}$ e $\overline{z \cdot w} = \bar{z} \cdot \bar{w}$; inoltre $\bar{z} = z$ se e solo se $z$ è reale.
:::

:::teorema{#fattorizzazione-reale titolo="Fattorizzazione reale dei polinomi"}
Ogni polinomio a coefficienti reali di grado $n \geq 1$ si fattorizza in $\mathbb{R}$ come prodotto di **fattori di primo grado** e di **fattori di secondo grado** con discriminante negativo. La fattorizzazione si ottiene da quella complessa accoppiando ogni radice non reale $z_0 = \alpha + i\beta$ con la **coniugata**: il prodotto
$$
(z - z_0)(z - \bar{z}_0) = z^2 - 2\alpha z + (\alpha^2 + \beta^2)
$$
ha coefficienti reali e discriminante $4\alpha^2 - 4(\alpha^2 + \beta^2) = -4\beta^2 < 0$. Questa fattorizzazione viene usata nell'integrazione delle funzioni razionali, dove i fattori di secondo grado irriducibili producono i termini con logaritmo e arcotangente.
:::

:::esempio
$p(z) = z^4 - 16$: le radici sono le radici quarte di $16$, cioè $2, 2i, -2, -2i$. Accoppiando le radici coniugate $2i$ e $-2i$ si ottiene la **fattorizzazione reale**
$$
z^4 - 16 = (z - 2)(z + 2)(z^2 + 4).
$$
Il fattore $z^2 + 4$ ha discriminante negativo e in $\mathbb{R}$ **non si scompone** oltre.
:::
