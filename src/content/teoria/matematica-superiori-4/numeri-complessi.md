---
titolo: Numeri complessi
sommario: Che cosa sono i numeri complessi e come si calcola con essi in forma algebrica, trigonometrica ed esponenziale, come si rappresentano nel piano di Gauss, come si calcolano potenze e radici con la formula di De Moivre e come si risolvono le equazioni di secondo grado con discriminante negativo.
---

## Unità immaginaria e forma algebrica

:::definizione{#unita-immaginaria titolo="Unità immaginaria"}
L'equazione $x^2 + 1 = 0$ non ha soluzioni reali, perché il quadrato di un numero reale non è mai negativo e quindi $x^2 + 1 \geq 1$. Per risolvere equazioni di questo tipo si introduce un numero nuovo, che non è reale. Si chiama **unità immaginaria** il numero $i$ tale che
$$
i^2 = -1 .
$$
Con questo numero l'equazione $x^2 + 1 = 0$ ha la soluzione $x = i$, e anche la soluzione $x = -i$, perché $(-i)^2 = (-1)^2 \cdot i^2 = -1$. Allo stesso modo l'equazione $x^2 = -9$ ha le soluzioni $3i$ e $-3i$, perché $(3i)^2 = 9i^2 = -9$.
:::

:::definizione{#forma-algebrica titolo="Numero complesso in forma algebrica"}
Un **numero complesso** è un'espressione del tipo
$$
z = a + bi ,
\qquad
\text{con } a, b \in \mathbb{R} .
$$
Il numero reale $a$ si chiama **parte reale** di $z$ e si indica con $\operatorname{Re} z$; il numero reale $b$ si chiama **parte immaginaria** e si indica con $\operatorname{Im} z$. La scrittura $a + bi$ si chiama **forma algebrica** di $z$, e l'insieme dei numeri complessi si indica con $\mathbb{C}$.

Per esempio $z = 4 - 3i$ ha $\operatorname{Re} z = 4$ e $\operatorname{Im} z = -3$. La parte immaginaria è il coefficiente di $i$, quindi è il numero reale $-3$, senza la $i$.

- Se $b = 0$ il numero $z = a$ è reale. Perciò ogni numero reale è anche un numero complesso, e $\mathbb{R}$ è contenuto in $\mathbb{C}$.
- Se $a = 0$ e $b \neq 0$ il numero $z = bi$ si dice **immaginario puro**, come $5i$ o $-\dfrac{i}{2}$.
:::

:::definizione{#uguaglianza titolo="Uguaglianza di due numeri complessi"}
Due numeri complessi sono uguali quando hanno la stessa parte reale e la stessa parte immaginaria:
$$
a + bi = c + di
\iff
\begin{cases}
a = c \\[4pt]
b = d
\end{cases}
$$
Un'uguaglianza tra numeri complessi equivale quindi a due uguaglianze tra numeri reali, e serve a determinare due incognite reali. Per esempio l'uguaglianza $(x - 1) + 6i = 3 + 2y\,i$, con $x$ e $y$ reali, equivale al sistema
$$
\begin{cases}
x - 1 = 3 \\
6 = 2y
\end{cases}
$$
quindi $x = 4$ e $y = 3$. In particolare $a + bi = 0$ se e solo se $a = 0$ e $b = 0$.
:::

:::attenzione
Sui numeri complessi non si definisce un ordinamento compatibile con le operazioni, e scritture come $i > 0$ o $2 + i < 3$ non hanno significato. Se valesse $i > 0$, moltiplicando per il numero positivo $i$ si otterrebbe $i \cdot i > 0$, cioè $-1 > 0$, che è falso; se valesse $i < 0$, allora $-i > 0$ e, moltiplicando per $-i$, si otterrebbe $(-i)^2 > 0$, cioè ancora $-1 > 0$. Le disuguaglianze si scrivono quindi solo tra numeri reali, come le parti reali, le parti immaginarie e i moduli.
:::

## Operazioni in forma algebrica

:::teorema{#somma-prodotto titolo="Somma, differenza e prodotto"}
Le operazioni tra numeri complessi seguono le regole del calcolo letterale, considerando $i$ come una lettera e sostituendo $i^2$ con $-1$ ogni volta che compare. Per $z = a + bi$ e $w = c + di$ si ottiene
$$
\begin{aligned}
z + w &= (a + c) + (b + d)\,i , \\[6pt]
z - w &= (a - c) + (b - d)\,i , \\[6pt]
z \cdot w &= (ac - bd) + (ad + bc)\,i .
\end{aligned}
$$
La formula del prodotto viene dalla proprietà distributiva: $(a + bi)(c + di) = ac + adi + bci + bd\,i^2$, e poiché $i^2 = -1$ il termine $bd\,i^2$ diventa $-bd$. Per esempio
$$
(2 + 3i)(1 - 2i) = 2 - 4i + 3i - 6i^2 = 2 - i + 6 = 8 - i .
$$
Le operazioni così definite hanno le stesse proprietà delle operazioni tra numeri reali (commutativa, associativa, distributiva), quindi valgono anche i prodotti notevoli. Per esempio $(1 + i)^2 = 1 + 2i + i^2 = 2i$ e $(3 + i)(3 - i) = 9 - i^2 = 10$.
:::

:::teorema{#potenze-di-i titolo="Potenze dell'unità immaginaria"}
Le potenze di $i$ con esponente naturale si ripetono ogni quattro:
$$
i^0 = 1 ,
\qquad
i^1 = i ,
\qquad
i^2 = -1 ,
\qquad
i^3 = i^2 \cdot i = -i ,
\qquad
i^4 = i^2 \cdot i^2 = 1 .
$$
Poiché $i^4 = 1$, per ogni naturale $n$ si ha $i^{n + 4} = i^n \cdot i^4 = i^n$. Per calcolare $i^n$ si divide quindi $n$ per $4$: se $r$ è il resto, allora $i^n = i^r$. Per esempio $27 = 4 \cdot 6 + 3$, perciò $i^{27} = i^3 = -i$; $2026 = 4 \cdot 506 + 2$, perciò $i^{2026} = i^2 = -1$.
:::

:::esempio{titolo="Cubo di un binomio"}
Si calcola $(2 - i)^3$ con la formula del cubo di un binomio, $(a - b)^3 = a^3 - 3a^2 b + 3ab^2 - b^3$:
$$
\begin{aligned}
(2 - i)^3 &= 8 - 3 \cdot 4 \cdot i + 3 \cdot 2 \cdot i^2 - i^3 \\[6pt]
&= 8 - 12i - 6 + i \\[6pt]
&= 2 - 11i .
\end{aligned}
$$
Nel secondo passaggio si è usato $i^2 = -1$ e $i^3 = -i$, quindi $-i^3 = i$.
:::

## Coniugato e quoziente

:::definizione{#coniugato titolo="Numero complesso coniugato"}
Il **coniugato** del numero $z = a + bi$ è il numero che ha la stessa parte reale e la parte immaginaria opposta:
$$
\bar z = a - bi .
$$
Per esempio il coniugato di $3 + 2i$ è $3 - 2i$, il coniugato di $-5i$ è $5i$ e il coniugato di un numero reale è il numero stesso. Il coniugato serve a trasformare un numero complesso in un numero reale con una moltiplicazione, e per questo motivo è lo strumento per calcolare i quozienti.
:::

::::teorema{#proprieta-coniugato titolo="Proprietà del coniugato"}
Per ogni $z = a + bi$ e ogni $w$ in $\mathbb{C}$ valgono
$$
z + \bar z = 2a ,
\qquad
z \cdot \bar z = a^2 + b^2 ,
\qquad
\overline{z + w} = \bar z + \bar w ,
\qquad
\overline{z \cdot w} = \bar z \cdot \bar w .
$$
Le prime due uguaglianze dicono che la somma e il prodotto di un numero complesso per il suo coniugato sono numeri **reali**; il prodotto, in particolare, è positivo se $z \neq 0$. Per $z = 3 + 2i$ si ha $z + \bar z = 6$ e $z \cdot \bar z = 9 + 4 = 13$. Le ultime due uguaglianze dicono che il coniugato di una somma o di un prodotto si calcola coniugando i singoli termini, e serviranno per le equazioni a coefficienti reali.

:::dimostrazione
Le prime due si ottengono con un calcolo diretto. La somma è $(a + bi) + (a - bi) = 2a$. Il prodotto è un prodotto notevole del tipo somma per differenza:
$$
(a + bi)(a - bi) = a^2 - b^2 i^2 = a^2 + b^2 .
$$
Per la terza si pone $w = c + di$. La somma $z + w$ è $(a + c) + (b + d)\,i$, quindi il suo coniugato è $(a + c) - (b + d)\,i$, che coincide con $\bar z + \bar w = (a - bi) + (c - di)$. Per la quarta si confrontano i due membri. Il prodotto $z w$ è $(ac - bd) + (ad + bc)\,i$, quindi il suo coniugato è $(ac - bd) - (ad + bc)\,i$. D'altra parte
$$
\bar z \cdot \bar w = (a - bi)(c - di) = ac - adi - bci + bd\,i^2 = (ac - bd) - (ad + bc)\,i ,
$$
che coincide con $\overline{z w}$.
:::
::::

:::teorema{#quoziente titolo="Reciproco e quoziente"}
Sia $w = c + di$ diverso da $0$. Per calcolare il quoziente $\dfrac{z}{w}$ si moltiplicano numeratore e denominatore per il coniugato del denominatore. Il denominatore diventa $w \bar w = c^2 + d^2$, che è un numero reale positivo, e quindi
$$
\frac{z}{w} = \frac{z \cdot \bar w}{c^2 + d^2} ,
\qquad
\frac{1}{w} = \frac{\bar w}{c^2 + d^2} = \frac{c}{c^2 + d^2} - \frac{d}{c^2 + d^2}\,i .
$$
Il quoziente si scrive così in forma algebrica, con parte reale e parte immaginaria separate. Per esempio
$$
\frac{3 + i}{1 - i} = \frac{(3 + i)(1 + i)}{(1 - i)(1 + i)} = \frac{3 + 3i + i + i^2}{1 + 1} = \frac{2 + 4i}{2} = 1 + 2i .
$$
In particolare $\dfrac{1}{i} = \dfrac{-i}{1} = -i$, perché il coniugato di $i$ è $-i$ e $i \cdot (-i) = 1$.
:::

:::attenzione
Il prodotto $z \cdot \bar z$ è diverso dal quadrato $z^2$. Per $z = 3 + 4i$ si ha $z \cdot \bar z = 9 + 16 = 25$, mentre
$$
z^2 = 9 + 24i + 16i^2 = -7 + 24i ,
$$
che non è un numero reale. Il denominatore di un quoziente diventa reale solo moltiplicando per il *coniugato*.
:::

:::esempio{titolo="Un'equazione di primo grado"}
Si risolve l'equazione $(2 + i)\,z = 1 + 3i$. Il coefficiente $2 + i$ è diverso da $0$, quindi si dividono i due membri per $2 + i$:
$$
z = \frac{1 + 3i}{2 + i} = \frac{(1 + 3i)(2 - i)}{(2 + i)(2 - i)} = \frac{2 - i + 6i - 3i^2}{4 + 1} = \frac{5 + 5i}{5} = 1 + i .
$$
Le equazioni di primo grado si risolvono quindi con le stesse regole usate in $\mathbb{R}$, calcolando il quoziente con il coniugato.
:::

## Piano di Gauss e modulo

:::definizione{#piano-di-gauss titolo="Piano di Gauss"}
Un numero complesso $z = a + bi$ è individuato dalla coppia di numeri reali $(a, b)$. Perciò si può rappresentare con il punto $P(a, b)$ di un piano cartesiano, nel quale l'asse $x$ si chiama **asse reale** e l'asse $y$ si chiama **asse immaginario**. Questo piano si chiama **piano di Gauss**. Il numero $z$ si rappresenta anche con il vettore che va dall'origine $O$ al punto $P$.

I numeri reali stanno sull'asse reale e gli immaginari puri sull'asse immaginario. Il coniugato $\bar z = a - bi$ corrisponde al punto $(a, -b)$, che è il simmetrico di $P$ rispetto all'asse reale; l'opposto $-z$ corrisponde al punto $(-a, -b)$, simmetrico di $P$ rispetto all'origine.

::grafico{vettori="0,0,3,2,3 + 2i;0,0,3,-2,3 − 2i;0,0,-3,-2,−3 − 2i" punti="3,2,pieno;3,-2,pieno;-3,-2,pieno" segmenti="3,2,3,0;3,2,0,2" xmin=-4 xmax=5 ymin=-3 ymax=3 uguale=1 nomi="Re,Im" titolo="Nel piano di Gauss $z = 3 + 2i$ è il punto $(3, 2)$; il coniugato $\bar z = 3 - 2i$ è il simmetrico rispetto all'asse reale e l'opposto $-z = -3 - 2i$ è il simmetrico rispetto all'origine"}

:::

:::teorema{#somma-vettori titolo="Somma e regola del parallelogramma"}
Nella somma $z + w$ si sommano separatamente le parti reali e le parti immaginarie, cioè le componenti dei due vettori. Perciò il vettore che rappresenta $z + w$ è la somma dei vettori che rappresentano $z$ e $w$, e si costruisce con la **regola del parallelogramma**: è la diagonale del parallelogramma che ha per lati i due vettori. Per esempio con $z = 1 + 2i$ e $w = 3 + i$ si ha $z + w = 4 + 3i$, e i punti $O$, $(1, 2)$, $(4, 3)$, $(3, 1)$ sono i vertici di un parallelogramma. Allo stesso modo $z - w$ è il vettore che va dal punto $w$ al punto $z$.

::grafico{vettori="0,0,1,2,z;0,0,3,1,w;0,0,4,3,z + w" segmenti="1,2,4,3;3,1,4,3" punti="4,3,pieno" xmin=-1 xmax=5 ymin=-1 ymax=4 uguale=1 nomi="Re,Im" titolo="La somma di $z = 1 + 2i$ e $w = 3 + i$ è la diagonale $z + w = 4 + 3i$ del parallelogramma che ha per lati i vettori $z$ e $w$"}

:::

:::definizione{#modulo titolo="Modulo di un numero complesso"}
Il **modulo** di $z = a + bi$ è la distanza del punto $(a, b)$ dall'origine, cioè la lunghezza del vettore che rappresenta $z$. Per il teorema di Pitagora
$$
|z| = \sqrt{a^2 + b^2} .
$$
Il modulo è un numero reale non negativo, ed è $0$ solo per $z = 0$. Per esempio $|3 - 4i| = \sqrt{9 + 16} = 5$ e $|-2i| = 2$. Per un numero reale $a$ il modulo è $\sqrt{a^2}$, cioè il valore assoluto $|a|$; per questo motivo si usa lo stesso simbolo. Dalla proprietà $z \bar z = a^2 + b^2$ segue
$$
z \cdot \bar z = |z|^2 ,
$$
e quindi il reciproco di un numero non nullo si scrive $\dfrac{1}{z} = \dfrac{\bar z}{|z|^2}$.
:::

::::teorema{#proprieta-modulo titolo="Modulo del prodotto e del quoziente"}
Per ogni $z$ e $w$ in $\mathbb{C}$ valgono
$$
|\bar z| = |z| ,
\qquad
|z \cdot w| = |z| \cdot |w| ,
\qquad
\left| \frac{z}{w} \right| = \frac{|z|}{|w|} \quad \text{se } w \neq 0 .
$$
Queste uguaglianze permettono di calcolare il modulo di un prodotto o di un quoziente senza svolgere l'operazione. Per esempio
$$
\left| \frac{3 + 4i}{1 - i} \right| = \frac{5}{\sqrt{2}} = \frac{5\sqrt{2}}{2} .
$$
Dalla seconda uguaglianza segue anche la **legge di annullamento del prodotto** in $\mathbb{C}$: se $z w = 0$, allora $|z| \cdot |w| = 0$, quindi almeno uno dei due moduli è $0$ e perciò almeno uno dei due numeri è $0$.

:::dimostrazione
La prima uguaglianza vale perché $\bar z = a - bi$ ha modulo $\sqrt{a^2 + (-b)^2} = \sqrt{a^2 + b^2}$. Per la seconda si calcola il quadrato del modulo con la formula $|u|^2 = u \bar u$ e con la proprietà del coniugato di un prodotto:
$$
|z w|^2 = (z w) \cdot \overline{z w} = z w \bar z \bar w = (z \bar z)(w \bar w) = |z|^2 |w|^2 .
$$
I due moduli sono numeri non negativi con lo stesso quadrato, quindi sono uguali. Per la terza si pone $q = \dfrac{z}{w}$; allora $z = q w$ e, per la seconda uguaglianza, $|z| = |q| \cdot |w|$. Dividendo per $|w| \neq 0$ si ottiene $|q| = \dfrac{|z|}{|w|}$.
:::
::::

:::esempio{titolo="Distanza tra due numeri e circonferenze"}
Il numero $z - w$ ha per parti reale e immaginaria le differenze delle coordinate dei due punti, quindi $|z - w|$ è la **distanza** tra i punti che rappresentano $z$ e $w$. Per esempio la distanza tra $1 + i$ e $4 + 5i$ è $|3 + 4i| = 5$.

Di conseguenza l'insieme dei numeri $z$ tali che $|z - z_0| = r$, con $r > 0$, è la circonferenza di centro $z_0$ e raggio $r$. Per $|z - (1 + i)| = 2$, con $z = x + yi$, si ha $z - (1 + i) = (x - 1) + (y - 1)\,i$, e l'equazione diventa
$$
\sqrt{(x - 1)^2 + (y - 1)^2} = 2
\iff
(x - 1)^2 + (y - 1)^2 = 4 ,
$$
dove si è elevato al quadrato perché i due membri sono non negativi. È la circonferenza di centro $(1, 1)$ e raggio $2$. La disuguaglianza $|z - (1 + i)| < 2$ descrive invece i punti interni.

::grafico{curve="1+2*cos(t),1+2*sin(t),0,6.29" punti="1,1,pieno,1 + i;3,1,pieno;1,3,pieno" vettori="1,1,3,1,r = 2" xmin=-2 xmax=4 ymin=-2 ymax=4 uguale=1 nomi="Re,Im" legenda="|z - (1 + i)| = 2" titolo="I numeri $z$ con $|z - (1 + i)| = 2$ formano la circonferenza di centro $1 + i$ e raggio $2$; ne fanno parte, per esempio, $3 + i$ e $1 + 3i$"}

:::

## Argomento e forma trigonometrica

:::definizione{#argomento titolo="Argomento di un numero complesso"}
Sia $z = a + bi$ diverso da $0$, rappresentato dal punto $P(a, b)$. Si chiama **argomento** di $z$ ogni angolo $\theta$ di cui deve ruotare il semiasse reale positivo, in verso antiorario, per sovrapporsi alla semiretta $OP$. Gli argomenti di $z$ sono infiniti e differiscono per multipli interi di $2\pi$; quello compreso nell'intervallo $[0, 2\pi)$ si indica con $\arg z$. Alcuni libri scelgono invece l'intervallo $(-\pi, \pi]$, e le due scelte danno lo stesso numero complesso.

Il numero $0$ ha modulo $0$ e non ha argomento, perché il punto $O$ non individua alcuna semiretta. Per i numeri sugli assi l'argomento si ricava dalla posizione del punto. Per esempio $\arg 5 = 0$, $\arg (2i) = \dfrac{\pi}{2}$, $\arg (-3) = \pi$, $\arg (-i) = \dfrac{3\pi}{2}$.
:::

:::teorema{#calcolo-argomento titolo="Calcolo dell'argomento"}
Sia $z = a + bi \neq 0$ e sia $\rho = |z|$. Il punto $P(a, b)$ sta sulla circonferenza di centro $O$ e raggio $\rho$, quindi, per la definizione di seno e coseno, le sue coordinate sono $a = \rho\cos\theta$ e $b = \rho\sin\theta$. L'argomento $\theta$ è perciò l'angolo che soddisfa insieme
$$
\begin{cases}
\cos\theta = \dfrac{a}{\rho} \\[10pt]
\sin\theta = \dfrac{b}{\rho}
\end{cases}
$$
Il segno di $\cos\theta$ e quello di $\sin\theta$ indicano il quadrante. Per $z = -1 + \sqrt{3}\,i$ il modulo è $\rho = \sqrt{1 + 3} = 2$, quindi $\cos\theta = -\dfrac{1}{2}$ e $\sin\theta = \dfrac{\sqrt{3}}{2}$. Il coseno è negativo e il seno positivo, perciò $\theta$ è nel secondo quadrante, e l'angolo associato all'angolo notevole $\dfrac{\pi}{3}$ è $\theta = \pi - \dfrac{\pi}{3} = \dfrac{2\pi}{3}$.

::grafico{curve="2*cos(t),2*sin(t),0,6.29;0.6*cos(t),0.6*sin(t),0,2.094" vettori="0,0,-1,1.732,z" punti="-1,1.732,pieno" segmenti="-1,1.732,-1,0;-1,1.732,0,1.732" etichette="0.35,0.75,θ;-1.75,0.85,ρ = 2" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 nomi="Re,Im" legenda="|z| = 2;\theta = \frac{2\pi}{3}" titolo="Il numero $z = -1 + \sqrt{3}\,i$ ha modulo $2$ e argomento $\dfrac{2\pi}{3}$; le sue proiezioni sugli assi sono $a = 2\cos\dfrac{2\pi}{3} = -1$ e $b = 2\sin\dfrac{2\pi}{3} = \sqrt{3}$"}

:::

:::attenzione
La sola condizione $\tan\theta = \dfrac{b}{a}$ non determina l'argomento, perché la tangente ha periodo $\pi$ e quindi assume lo stesso valore in due angoli opposti rispetto all'origine. Per $z = -1 - i$ si ha $\dfrac{b}{a} = 1$, e $\arctan 1 = \dfrac{\pi}{4}$ è l'argomento di $1 + i$, nel primo quadrante. Il punto $(-1, -1)$ è invece nel terzo quadrante, e l'argomento di $-1 - i$ è $\dfrac{\pi}{4} + \pi = \dfrac{5\pi}{4}$.
:::

:::definizione{#forma-trigonometrica titolo="Forma trigonometrica"}
Sostituendo $a = \rho\cos\theta$ e $b = \rho\sin\theta$ nella forma algebrica, ogni numero $z \neq 0$ si scrive
$$
z = \rho\,(\cos\theta + i\sin\theta) ,
$$
dove $\rho = |z| > 0$ e $\theta$ è un argomento di $z$. Questa scrittura si chiama **forma trigonometrica** di $z$. Per il numero della figura si ha $-1 + \sqrt{3}\,i = 2\left( \cos\dfrac{2\pi}{3} + i\sin\dfrac{2\pi}{3} \right)$.

Il passaggio inverso si fa calcolando seno e coseno. Per esempio
$$
4\left( \cos\frac{7\pi}{6} + i\sin\frac{7\pi}{6} \right) = 4\left( -\frac{\sqrt{3}}{2} - \frac{1}{2}\,i \right) = -2\sqrt{3} - 2i .
$$
Due numeri non nulli scritti in forma trigonometrica sono uguali se e solo se hanno lo stesso modulo e argomenti che differiscono per un multiplo intero di $2\pi$. Questa condizione servirà per calcolare le radici $n$-esime.
:::

:::esempio{titolo="Forma trigonometrica di alcuni numeri"}
Per ogni numero si calcolano il modulo e poi l'argomento dal sistema di coseno e seno.

- $1 + i$ ha modulo $\sqrt{2}$ e $\cos\theta = \sin\theta = \dfrac{1}{\sqrt{2}} = \dfrac{\sqrt{2}}{2}$, quindi $1 + i = \sqrt{2}\left( \cos\dfrac{\pi}{4} + i\sin\dfrac{\pi}{4} \right)$.
- $\sqrt{3} - i$ ha modulo $2$, $\cos\theta = \dfrac{\sqrt{3}}{2}$ e $\sin\theta = -\dfrac{1}{2}$; l'angolo è nel quarto quadrante, quindi $\theta = 2\pi - \dfrac{\pi}{6} = \dfrac{11\pi}{6}$.
- $-4$ ha modulo $4$ e argomento $\pi$, quindi $-4 = 4\,(\cos\pi + i\sin\pi)$.
- $-3i$ ha modulo $3$ e argomento $\dfrac{3\pi}{2}$, quindi $-3i = 3\left( \cos\dfrac{3\pi}{2} + i\sin\dfrac{3\pi}{2} \right)$.
:::

## Prodotto e quoziente in forma trigonometrica

:::richiamo{titolo="Formule di addizione"}
Per ogni $\alpha$ e $\beta$ reali valgono
$$
\cos(\alpha + \beta) = \cos\alpha\cos\beta - \sin\alpha\sin\beta ,
\qquad
\sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta .
$$
:::

::::teorema{#prodotto-trigonometrico titolo="Prodotto in forma trigonometrica"}
Siano $z_1 = \rho_1(\cos\theta_1 + i\sin\theta_1)$ e $z_2 = \rho_2(\cos\theta_2 + i\sin\theta_2)$. Allora
$$
z_1 z_2 = \rho_1 \rho_2 \big( \cos(\theta_1 + \theta_2) + i\sin(\theta_1 + \theta_2) \big) .
$$
In parole, il prodotto ha per modulo il **prodotto dei moduli** e per argomento la **somma degli argomenti**. Moltiplicare per $z_2$ significa quindi dilatare il vettore $z_1$ del fattore $\rho_2$ e ruotarlo dell'angolo $\theta_2$. Per esempio, con $z_1 = 2\left( \cos\dfrac{\pi}{6} + i\sin\dfrac{\pi}{6} \right) = \sqrt{3} + i$ e $z_2 = \sqrt{2}\left( \cos\dfrac{\pi}{4} + i\sin\dfrac{\pi}{4} \right) = 1 + i$, il prodotto ha modulo $2\sqrt{2}$ e argomento $\dfrac{\pi}{6} + \dfrac{\pi}{4} = \dfrac{5\pi}{12}$. In forma algebrica lo stesso prodotto è $(\sqrt{3} + i)(1 + i) = (\sqrt{3} - 1) + (\sqrt{3} + 1)\,i$.

::grafico{vettori="0,0,1.732,1,z₁;0,0,1,1,z₂;0,0,0.732,2.732,z₁z₂" curve="0.7*cos(t),0.7*sin(t),0,1.309" xmin=-1 xmax=3 ymin=-1 ymax=3 uguale=1 nomi="Re,Im" legenda="\theta_1 + \theta_2 = \frac{5\pi}{12}" titolo="Il prodotto di $z_1 = \sqrt{3} + i$, con argomento $\dfrac{\pi}{6}$, e di $z_2 = 1 + i$, con argomento $\dfrac{\pi}{4}$, ha argomento $\dfrac{5\pi}{12}$ e modulo $2 \cdot \sqrt{2}$"}

:::dimostrazione
L'idea è svolgere il prodotto in forma algebrica e riconoscere le formule di addizione. Si moltiplicano i moduli e i due binomi:
$$
\begin{aligned}
z_1 z_2 &= \rho_1 \rho_2 (\cos\theta_1 + i\sin\theta_1)(\cos\theta_2 + i\sin\theta_2) \\[6pt]
&= \rho_1 \rho_2 \big( \cos\theta_1\cos\theta_2 + i\cos\theta_1\sin\theta_2 + i\sin\theta_1\cos\theta_2 + i^2\sin\theta_1\sin\theta_2 \big) \\[6pt]
&= \rho_1 \rho_2 \big( (\cos\theta_1\cos\theta_2 - \sin\theta_1\sin\theta_2) + i\,(\sin\theta_1\cos\theta_2 + \cos\theta_1\sin\theta_2) \big) .
\end{aligned}
$$
Nell'ultimo passaggio si è sostituito $i^2 = -1$ e si sono raccolti i termini con $i$. Per le formule di addizione la prima espressione è $\cos(\theta_1 + \theta_2)$ e la seconda è $\sin(\theta_1 + \theta_2)$, quindi si ottiene la tesi.
:::
::::

:::esempio{titolo="La moltiplicazione per i è una rotazione"}
Il numero $i$ ha modulo $1$ e argomento $\dfrac{\pi}{2}$. Per il teorema sul prodotto, moltiplicare un numero per $i$ lascia invariato il modulo e aggiunge $\dfrac{\pi}{2}$ all'argomento, cioè ruota il vettore di un angolo retto in verso antiorario. Per esempio $i\,(3 + 2i) = 3i + 2i^2 = -2 + 3i$, e infatti il punto $(3, 2)$ ruotato di $\dfrac{\pi}{2}$ attorno all'origine va nel punto $(-2, 3)$. Questa osservazione serve nei problemi di geometria, per esempio per costruire un quadrato a partire da un lato.
:::

::::teorema{#quoziente-trigonometrico titolo="Quoziente in forma trigonometrica"}
Siano $z_1 = \rho_1(\cos\theta_1 + i\sin\theta_1)$ e $z_2 = \rho_2(\cos\theta_2 + i\sin\theta_2)$, con $z_2 \neq 0$. Allora
$$
\frac{z_1}{z_2} = \frac{\rho_1}{\rho_2} \big( \cos(\theta_1 - \theta_2) + i\sin(\theta_1 - \theta_2) \big) .
$$
Il quoziente ha quindi per modulo il quoziente dei moduli e per argomento la differenza degli argomenti. Con $z_1 = 6\left( \cos\dfrac{5\pi}{6} + i\sin\dfrac{5\pi}{6} \right)$ e $z_2 = 2\left( \cos\dfrac{\pi}{3} + i\sin\dfrac{\pi}{3} \right)$ si ottiene
$$
\frac{z_1}{z_2} = 3\left( \cos\frac{\pi}{2} + i\sin\frac{\pi}{2} \right) = 3i .
$$
Se la differenza degli argomenti è negativa, le si aggiunge $2\pi$ per ottenere l'argomento in $[0, 2\pi)$. Con $z_1 = 1 = 1\,(\cos 0 + i\sin 0)$ e $z_2 = \rho\,(\cos\theta + i\sin\theta)$ si ricava il reciproco $\dfrac{1}{z_2}$, che ha modulo $\dfrac{1}{\rho}$ e argomento $-\theta$.

:::dimostrazione
L'idea è verificare che il numero proposto, moltiplicato per $z_2$, dà $z_1$. Sia
$$
q = \frac{\rho_1}{\rho_2} \big( \cos(\theta_1 - \theta_2) + i\sin(\theta_1 - \theta_2) \big) .
$$
Per il teorema sul prodotto, $q \cdot z_2$ ha modulo $\dfrac{\rho_1}{\rho_2} \cdot \rho_2 = \rho_1$ e argomento $(\theta_1 - \theta_2) + \theta_2 = \theta_1$, quindi $q \cdot z_2 = z_1$. Poiché $z_2 \neq 0$, l'equazione $w \cdot z_2 = z_1$ ha l'unica soluzione $w = \dfrac{z_1}{z_2}$, che si ottiene dividendo per $z_2$. Perciò $q = \dfrac{z_1}{z_2}$.
:::
::::

## Formula di De Moivre

::::teorema{#de-moivre titolo="Formula di De Moivre"}
Sia $z = \rho(\cos\theta + i\sin\theta)$ e sia $n$ un numero naturale, $n \geq 1$. Allora
$$
z^n = \rho^n \big( \cos(n\theta) + i\sin(n\theta) \big) .
$$
La potenza ha quindi per modulo la potenza del modulo e per argomento $n$ volte l'argomento. La formula permette di calcolare potenze con esponente alto senza sviluppare il binomio. Per esempio $1 + i = \sqrt{2}\left( \cos\dfrac{\pi}{4} + i\sin\dfrac{\pi}{4} \right)$, quindi
$$
(1 + i)^8 = \left( \sqrt{2} \right)^8 \big( \cos(2\pi) + i\sin(2\pi) \big) = 16 .
$$
Per $z \neq 0$ la formula vale anche per gli esponenti interi negativi, con $z^{-n} = \dfrac{1}{z^n}$.

:::dimostrazione
L'idea è applicare più volte il teorema sul prodotto. Con $z_1 = z_2 = z$ il teorema dà
$$
z^2 = \rho \cdot \rho \,\big( \cos(\theta + \theta) + i\sin(\theta + \theta) \big) = \rho^2 \big( \cos(2\theta) + i\sin(2\theta) \big) .
$$
Si supponga ora che la formula valga per un certo esponente $n$. Poiché $z^{n + 1} = z^n \cdot z$, il teorema sul prodotto dà per $z^{n + 1}$ il modulo $\rho^n \cdot \rho = \rho^{n + 1}$ e l'argomento $n\theta + \theta = (n + 1)\,\theta$. Quindi la formula vale anche per l'esponente $n + 1$. Partendo da $n = 1$, per cui la formula è la forma trigonometrica di $z$, si ottiene così la formula per $n = 2$, poi per $n = 3$, e per ogni $n$. Questo modo di ragionare si chiama principio di induzione, e si studia nell'argomento sulle successioni e progressioni.

Per gli esponenti negativi si applica il teorema sul quoziente a $\dfrac{1}{z^n}$, con $1 = 1\,(\cos 0 + i\sin 0)$, e si ottengono il modulo $\dfrac{1}{\rho^n} = \rho^{-n}$ e l'argomento $0 - n\theta = -n\theta$.
:::
::::

:::esempio{titolo="Una potenza con argomento non notevole"}
Si calcola $\left( 1 - \sqrt{3}\,i \right)^6$. Il numero ha modulo $\sqrt{1 + 3} = 2$, coseno $\dfrac{1}{2}$ e seno $-\dfrac{\sqrt{3}}{2}$, quindi è nel quarto quadrante e ha argomento $\dfrac{5\pi}{3}$. Per la formula di De Moivre
$$
\left( 1 - \sqrt{3}\,i \right)^6 = 2^6 \left( \cos\frac{30\pi}{3} + i\sin\frac{30\pi}{3} \right) = 64\,(\cos 10\pi + i\sin 10\pi) = 64 ,
$$
perché $10\pi$ è un multiplo di $2\pi$, e quindi $\cos 10\pi = 1$ e $\sin 10\pi = 0$. Con lo sviluppo della sesta potenza del binomio lo stesso conto richiederebbe sette termini.
:::

:::esempio{titolo="Le formule di duplicazione ricavate da De Moivre"}
Per $\rho = 1$ e $n = 2$ la formula di De Moivre dà $(\cos\theta + i\sin\theta)^2 = \cos(2\theta) + i\sin(2\theta)$. Il primo membro si sviluppa come quadrato di un binomio:
$$
(\cos\theta + i\sin\theta)^2 = \cos^2\theta - \sin^2\theta + 2i\sin\theta\cos\theta .
$$
Per l'uguaglianza di due numeri complessi le parti reali e le parti immaginarie dei due membri coincidono, quindi
$$
\cos(2\theta) = \cos^2\theta - \sin^2\theta ,
\qquad
\sin(2\theta) = 2\sin\theta\cos\theta ,
$$
che sono le formule di duplicazione dell'argomento sulle formule goniometriche. Con $n = 3$ si ricavano allo stesso modo le formule di triplicazione.
:::

## Radici n-esime di un numero complesso

:::definizione{#radice-n-esima titolo="Radice n-esima complessa"}
Sia $n$ un numero naturale, $n \geq 2$, e sia $z$ un numero complesso. Si chiama **radice $n$-esima** di $z$ ogni numero complesso $w$ tale che
$$
w^n = z .
$$
Nei numeri reali il numero $4$ ha due radici quadrate, $2$ e $-2$, mentre $-4$ non ne ha. In $\mathbb{C}$ anche $-4$ ha due radici quadrate, $2i$ e $-2i$, perché $(2i)^2 = 4i^2 = -4$ e $(-2i)^2 = -4$. Per distinguere le radici complesse dalla radice aritmetica $\sqrt[n]{\ }$ dei numeri reali positivi, si scrive l'equazione $w^n = z$ al posto del simbolo di radice.
:::

::::teorema{#radici-n-esime titolo="Radici n-esime in forma trigonometrica"}
Sia $z = \rho(\cos\theta + i\sin\theta)$ diverso da $0$ e sia $n \geq 2$. Allora $z$ ha esattamente $n$ radici $n$-esime distinte, date da
$$
w_k = \sqrt[n]{\rho}\left( \cos\frac{\theta + 2k\pi}{n} + i\sin\frac{\theta + 2k\pi}{n} \right) ,
\qquad
k = 0, 1, \dots, n - 1 ,
$$
dove $\sqrt[n]{\rho}$ è la radice aritmetica del numero reale positivo $\rho$. Le radici hanno tutte lo stesso modulo e argomenti che si ottengono dal primo, $\dfrac{\theta}{n}$, aggiungendo ogni volta $\dfrac{2\pi}{n}$. Per esempio le radici cubiche di $8 = 8\,(\cos 0 + i\sin 0)$ hanno modulo $\sqrt[3]{8} = 2$ e argomenti $0$, $\dfrac{2\pi}{3}$, $\dfrac{4\pi}{3}$:
$$
w_0 = 2 ,
\qquad
w_1 = -1 + \sqrt{3}\,i ,
\qquad
w_2 = -1 - \sqrt{3}\,i .
$$

::grafico{curve="2*cos(t),2*sin(t),0,6.29" linee="2,0 -1,1.732 -1,-1.732 2,0" punti="2,0,pieno,w₀;-1,1.732,pieno,w₁;-1,-1.732,pieno,w₂" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 nomi="Re,Im" legenda="|w| = 2" titolo="Le radici cubiche di $8$ stanno sulla circonferenza di raggio $\sqrt[3]{8} = 2$ e sono i vertici di un triangolo equilatero, con argomenti $0$, $\dfrac{2\pi}{3}$, $\dfrac{4\pi}{3}$"}

:::dimostrazione
L'idea è cercare $w$ in forma trigonometrica e confrontare modulo e argomento. Sia $w = r(\cos\varphi + i\sin\varphi)$ con $r > 0$. Per la formula di De Moivre l'equazione $w^n = z$ diventa
$$
r^n \big( \cos(n\varphi) + i\sin(n\varphi) \big) = \rho\,(\cos\theta + i\sin\theta) .
$$
Due numeri in forma trigonometrica sono uguali se e solo se hanno lo stesso modulo e argomenti che differiscono per un multiplo di $2\pi$. Quindi deve essere $r^n = \rho$ e $n\varphi = \theta + 2k\pi$ con $k$ intero. Poiché $r$ è un numero reale positivo, la prima condizione dà $r = \sqrt[n]{\rho}$; la seconda dà $\varphi = \dfrac{\theta + 2k\pi}{n}$.

Resta da contare le radici distinte. Per $k = 0, 1, \dots, n - 1$ gli angoli $\dfrac{\theta + 2k\pi}{n}$ stanno nell'intervallo $\left[ \dfrac{\theta}{n}, \dfrac{\theta}{n} + 2\pi \right)$, che ha ampiezza $2\pi$, e sono diversi tra loro; perciò danno $n$ punti diversi. Il valore $k = n$ dà l'angolo $\dfrac{\theta}{n} + 2\pi$, cioè di nuovo $w_0$, e in generale $k$ e $k + n$ danno la stessa radice. Quindi le radici distinte sono esattamente $n$.
:::
::::

:::osservazione{#poligono-regolare titolo="Le radici sono i vertici di un poligono regolare"}
Le $n$ radici $n$-esime di $z \neq 0$ stanno sulla circonferenza di centro $O$ e raggio $\sqrt[n]{\rho}$, e due radici consecutive formano con l'origine un angolo $\dfrac{2\pi}{n}$. Perciò, per $n \geq 3$, le radici sono i vertici di un **poligono regolare** di $n$ lati inscritto in quella circonferenza. Per esempio le radici quarte di $-16 = 16\,(\cos\pi + i\sin\pi)$ hanno modulo $\sqrt[4]{16} = 2$ e argomenti $\dfrac{\pi}{4}$, $\dfrac{3\pi}{4}$, $\dfrac{5\pi}{4}$, $\dfrac{7\pi}{4}$:
$$
\sqrt{2} + \sqrt{2}\,i ,
\qquad
-\sqrt{2} + \sqrt{2}\,i ,
\qquad
-\sqrt{2} - \sqrt{2}\,i ,
\qquad
\sqrt{2} - \sqrt{2}\,i ,
$$
e sono i vertici di un quadrato di lato $2\sqrt{2}$.

::grafico{curve="2*cos(t),2*sin(t),0,6.29" linee="1.414,1.414 -1.414,1.414 -1.414,-1.414 1.414,-1.414 1.414,1.414" punti="1.414,1.414,pieno,w₀;-1.414,1.414,pieno,w₁;-1.414,-1.414,pieno,w₂;1.414,-1.414,pieno,w₃" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 nomi="Re,Im" legenda="|w| = 2" titolo="Le radici quarte di $-16$ hanno modulo $2$ e argomenti $\dfrac{\pi}{4} + \dfrac{k\pi}{2}$, quindi sono i vertici di un quadrato inscritto nella circonferenza di raggio $2$"}

Le radici $n$-esime di $1$ si chiamano **radici $n$-esime dell'unità**. Hanno modulo $1$ e argomenti $\dfrac{2k\pi}{n}$, e una di esse è sempre il numero $1$. Le radici seste dell'unità, per esempio, sono i vertici di un esagono regolare inscritto nella circonferenza di raggio $1$.
:::

:::esempio{titolo="Radici quadrate in forma algebrica"}
Le radici quadrate si calcolano anche in forma algebrica, quando l'argomento non è un angolo notevole. Si cercano le radici quadrate di $3 + 4i$ nella forma $w = x + yi$, con $x$ e $y$ reali. Poiché $w^2 = x^2 - y^2 + 2xy\,i$, per l'uguaglianza di due numeri complessi deve essere
$$
\begin{cases}
x^2 - y^2 = 3 \\[4pt]
2xy = 4
\end{cases}
$$
Dalla seconda equazione $y = \dfrac{2}{x}$, con $x \neq 0$; sostituendo nella prima si ottiene $x^2 - \dfrac{4}{x^2} = 3$, cioè $x^4 - 3x^2 - 4 = 0$. Questa equazione biquadratica dà $x^2 = 4$ oppure $x^2 = -1$, e la seconda va scartata perché $x$ è reale. Quindi $x = 2$ e $y = 1$, oppure $x = -2$ e $y = -1$, e le radici quadrate di $3 + 4i$ sono $2 + i$ e $-2 - i$.
:::

## Forma esponenziale e formula di Eulero

:::teorema{#formula-eulero titolo="Formula di Eulero"}
Per ogni numero reale $\theta$ si pone
$$
e^{i\theta} = \cos\theta + i\sin\theta .
$$
Questa uguaglianza si chiama **formula di Eulero**. Il numero $e^{i\theta}$ ha modulo $\sqrt{\cos^2\theta + \sin^2\theta} = 1$ e argomento $\theta$, quindi, al variare di $\theta$, il punto che lo rappresenta percorre la circonferenza di centro $O$ e raggio $1$. Per esempio
$$
e^{i\frac{\pi}{2}} = \cos\frac{\pi}{2} + i\sin\frac{\pi}{2} = i ,
\qquad
e^{i\pi} = \cos\pi + i\sin\pi = -1 .
$$
La seconda uguaglianza si scrive anche $e^{i\pi} + 1 = 0$, e contiene i numeri $e$, $i$, $\pi$, $1$ e $0$. La giustificazione della formula usa gli sviluppi in serie delle funzioni esponenziale, seno e coseno, che si studiano all'università. Al liceo si accetta come definizione dell'esponenziale con esponente immaginario.

::grafico{curve="cos(t),sin(t),0,6.29;0.3*cos(t),0.3*sin(t),0,0.785" vettori="0,0,0.707,0.707,P" punti="0.707,0.707,pieno" segmenti="0.707,0.707,0.707,0;0.707,0.707,0,0.707" etichette="0.75,-0.15,cos θ;-0.45,0.72,sin θ;0.38,0.12,θ" xmin=-2 xmax=2 ymin=-2 ymax=2 uguale=1 nomi="Re,Im" legenda="|e^{i\theta}| = 1" titolo="Il numero $e^{i\theta} = \cos\theta + i\sin\theta$ è il punto della circonferenza di raggio $1$ con argomento $\theta$; nella figura $\theta = \dfrac{\pi}{4}$"}

:::

:::definizione{#forma-esponenziale titolo="Forma esponenziale"}
Per la formula di Eulero la forma trigonometrica $z = \rho(\cos\theta + i\sin\theta)$ si scrive in modo più breve come
$$
z = \rho\,e^{i\theta} ,
$$
che si chiama **forma esponenziale** di $z$. Per esempio $1 + i = \sqrt{2}\,e^{i\frac{\pi}{4}}$, $-4 = 4\,e^{i\pi}$ e $-1 + \sqrt{3}\,i = 2\,e^{i\frac{2\pi}{3}}$.

Con questa scrittura le regole del prodotto, del quoziente e della formula di De Moivre coincidono con le proprietà delle potenze:
$$
\rho_1 e^{i\theta_1} \cdot \rho_2 e^{i\theta_2} = \rho_1 \rho_2\, e^{i(\theta_1 + \theta_2)} ,
\qquad
\frac{\rho_1 e^{i\theta_1}}{\rho_2 e^{i\theta_2}} = \frac{\rho_1}{\rho_2}\, e^{i(\theta_1 - \theta_2)} ,
\qquad
\left( \rho\,e^{i\theta} \right)^n = \rho^n e^{in\theta} .
$$
Per esempio $\left( 2\,e^{i\frac{\pi}{6}} \right)^3 = 8\,e^{i\frac{\pi}{2}} = 8i$. Il coniugato di $\rho\,e^{i\theta}$ è $\rho\,e^{-i\theta}$, perché il simmetrico rispetto all'asse reale ha lo stesso modulo e argomento opposto.
:::

:::esempio{titolo="Calcoli in forma esponenziale"}
Siano $z = 4\,e^{i\frac{5\pi}{6}}$ e $w = 2\,e^{i\frac{\pi}{3}}$. Il prodotto e il quoziente sono
$$
z w = 8\,e^{i\left( \frac{5\pi}{6} + \frac{\pi}{3} \right)} = 8\,e^{i\frac{7\pi}{6}} ,
\qquad
\frac{z}{w} = 2\,e^{i\left( \frac{5\pi}{6} - \frac{\pi}{3} \right)} = 2\,e^{i\frac{\pi}{2}} = 2i .
$$
Per tornare alla forma algebrica si calcolano coseno e seno dell'argomento. Poiché $\cos\dfrac{7\pi}{6} = -\dfrac{\sqrt{3}}{2}$ e $\sin\dfrac{7\pi}{6} = -\dfrac{1}{2}$, si ha $z w = -4\sqrt{3} - 4i$.
:::

## Equazioni nel campo complesso

::::teorema{#equazioni-secondo-grado titolo="Equazioni di secondo grado con discriminante negativo"}
Sia $a z^2 + b z + c = 0$ un'equazione con coefficienti reali, $a \neq 0$, e discriminante $\Delta = b^2 - 4ac < 0$. Allora l'equazione ha in $\mathbb{C}$ le due soluzioni
$$
z_{1,2} = \frac{-b \pm i\sqrt{-\Delta}}{2a} ,
$$
che sono **complesse coniugate**. Il numero $-\Delta$ è positivo, quindi $\sqrt{-\Delta}$ è una radice aritmetica reale. Per esempio $z^2 - 4z + 13 = 0$ ha $\Delta = 16 - 52 = -36$, quindi
$$
z_{1,2} = \frac{4 \pm 6i}{2} = 2 \pm 3i .
$$
Le relazioni tra coefficienti e soluzioni valgono anche in questo caso: $z_1 + z_2 = 4 = -\dfrac{b}{a}$ e $z_1 z_2 = 4 + 9 = 13 = \dfrac{c}{a}$.

::grafico{punti="2,3,pieno,z₁ = 2 + 3i;2,-3,pieno,z₂ = 2 − 3i" segmenti="2,3,2,-3" xmin=-2 xmax=5 ymin=-4 ymax=4 uguale=1 nomi="Re,Im" titolo="Le soluzioni di $z^2 - 4z + 13 = 0$ sono $2 + 3i$ e $2 - 3i$, simmetriche rispetto all'asse reale perché sono coniugate"}

:::dimostrazione
L'idea è completare il quadrato, come per la formula risolutiva nei numeri reali. Si moltiplicano i due membri per $4a \neq 0$ e si aggiunge $b^2$:
$$
4a^2 z^2 + 4ab z + b^2 = b^2 - 4ac
\iff
(2az + b)^2 = \Delta .
$$
Poiché $\Delta < 0$, si ha $\Delta = -(-\Delta) = i^2 \left( \sqrt{-\Delta} \right)^2 = \left( i\sqrt{-\Delta} \right)^2$. L'equazione diventa una differenza di quadrati uguale a $0$, che si scompone:
$$
\left( 2az + b - i\sqrt{-\Delta} \right)\left( 2az + b + i\sqrt{-\Delta} \right) = 0 .
$$
Per la legge di annullamento del prodotto, che vale anche in $\mathbb{C}$, uno dei due fattori è nullo, quindi $2az + b = \pm i\sqrt{-\Delta}$. Dividendo per $2a$ si ottengono le due soluzioni dell'enunciato.
:::
::::

:::teorema{#teorema-fondamentale-algebra titolo="Teorema fondamentale dell'algebra"}
Ogni equazione polinomiale di grado $n \geq 1$, con coefficienti complessi,
$$
a_n z^n + a_{n-1} z^{n-1} + \dots + a_1 z + a_0 = 0 ,
\qquad
a_n \neq 0 ,
$$
ha almeno una soluzione in $\mathbb{C}$. Di conseguenza il polinomio si scompone nel prodotto di $n$ fattori di primo grado, e l'equazione ha esattamente $n$ soluzioni, se ciascuna si conta tante volte quanti sono i fattori uguali in cui compare. La dimostrazione si studia all'università.

Il teorema assicura che in $\mathbb{C}$ non servono altri numeri nuovi per risolvere le equazioni polinomiali. Per esempio l'equazione $z^3 - 1 = 0$ ha grado $3$, e infatti ha tre soluzioni. Scomponendo $z^3 - 1 = (z - 1)\left( z^2 + z + 1 \right)$ si trovano $z = 1$ e, dal fattore di secondo grado con $\Delta = -3$, le soluzioni $-\dfrac{1}{2} \pm \dfrac{\sqrt{3}}{2}\,i$. Sono le radici cubiche dell'unità.
:::

:::osservazione{#radici-coniugate titolo="Polinomi a coefficienti reali"}
Se un polinomio $p(z)$ ha coefficienti *reali* e $z_0$ è una sua radice, allora anche $\bar z_0$ è una radice. Infatti il coniugato di una somma è la somma dei coniugati e il coniugato di un prodotto è il prodotto dei coniugati, quindi $\overline{p(z_0)} = p(\bar z_0)$, perché i coefficienti reali coincidono con i loro coniugati; poiché $p(z_0) = 0$, anche $p(\bar z_0) = \bar 0 = 0$. Le radici non reali di un polinomio a coefficienti reali compaiono quindi in coppie coniugate.

Per esempio il polinomio $p(z) = z^3 - 3z^2 + 4z - 2$ si annulla per $z = 1$, perché $1 - 3 + 4 - 2 = 0$. Con la regola di Ruffini si ottiene $p(z) = (z - 1)\left( z^2 - 2z + 2 \right)$, e il fattore di secondo grado ha $\Delta = 4 - 8 = -4$ e radici $1 \pm i$, che sono coniugate.
:::
