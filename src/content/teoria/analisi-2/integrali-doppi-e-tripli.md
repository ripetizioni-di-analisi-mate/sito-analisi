---
titolo: Integrali doppi e tripli
sommario: Come si integra una funzione di due o tre variabili, come un integrale multiplo si riduce a integrali semplici, come i cambiamenti di variabile semplificano il dominio, e come si calcolano aree, volumi, masse e baricentri.
---

## L'integrale doppio su rettangoli

:::definizione{#integrale-doppio titolo="Integrale doppio su un rettangolo"}
Sia $R = [a, b] \times [c, d]$ un rettangolo e sia $f : R \to \mathbb{R}$ limitata. Si suddivide $R$ in sottorettangoli $R_{ij}$ con una griglia di punti, si sceglie un punto $(\xi_{ij}, \eta_{ij})$ in ciascun $R_{ij}$ e si forma la **somma di Riemann**
$$
S = \sum_{i,j} f(\xi_{ij}, \eta_{ij}) \, \operatorname{Area}(R_{ij}) .
$$
Se, al tendere a $0$ delle dimensioni dei sottorettangoli, le somme tendono a uno stesso numero per *ogni* scelta dei punti, $f$ è **integrabile** su $R$ e quel numero è l'**integrale doppio**
$$
\iint_R f(x, y)\, dx\, dy .
$$
Ogni funzione continua su $R$ è integrabile, e l'integrabilità si conserva se $f$ è continua salvo che su un numero finito di curve regolari. Per $f \geq 0$ l'integrale è il volume del solido compreso tra il rettangolo $R$ e il grafico di $f$, così come in una variabile l'integrale di una funzione positiva è l'area sotto il grafico.

::grafico{xmin=-0.3 xmax=5.4 ymin=-0.4 ymax=3.2 area="2;1.5;3.25;4" segmenti="1,0.5,1,2.5;1.75,0.5,1.75,2.5;2.5,0.5,2.5,2.5;3.25,0.5,3.25,2.5;4,0.5,4,2.5;1,0.5,4,0.5;1,1,4,1;1,1.5,4,1.5;1,2,4,2;1,2.5,4,2.5" punti="3.6,1.75" etichette="4.12,1.68,(ξᵢⱼ, ηᵢⱼ)" titolo="Una suddivisione del rettangolo $R$ in sottorettangoli: nel sottorettangolo $R_{ij}$ in colore si sceglie un punto $(\xi_{ij}, \eta_{ij})$"}

:::

:::teorema{#teorema-di-fubini titolo="Teorema di riduzione (Fubini) sui rettangoli"}
Se $f$ è continua su $R = [a, b] \times [c, d]$, allora
$$
\iint_R f(x, y)\, dx\, dy
= \int_a^b \left( \int_c^d f(x, y)\, dy \right) dx
= \int_c^d \left( \int_a^b f(x, y)\, dx \right) dy .
$$
Il teorema riduce l'integrale doppio a **due integrali semplici in successione**: nell'integrale interno una variabile è fissata e si integra rispetto all'altra, poi il risultato, che è una funzione di una sola variabile, si integra a sua volta. La dimostrazione si ottiene raggruppando le somme di Riemann per colonne o per righe e si rimanda ai testi di riferimento. I due ordini di integrazione danno lo **stesso valore**, quindi si sceglie l'ordine in cui i calcoli sono più semplici.
:::

:::esempio{titolo="Riduzione su un rettangolo"}
$$
\begin{aligned}
\iint_{[0,1] \times [0,2]} x y^2 \, dx\, dy
&= \int_0^1 \left( \int_0^2 x y^2 \, dy \right) dx
= \int_0^1 x \cdot \frac{8}{3} \, dx \\[6pt]
&= \frac{8}{3} \cdot \frac{1}{2} = \frac{4}{3}
\end{aligned}
$$
Nell'integrale interno $x$ è una **costante**, perciò esce dal segno di integrale; resta $\displaystyle\int_0^2 y^2\, dy = \dfrac{8}{3}$.
:::

:::teorema{#variabili-separate titolo="Funzioni a variabili separate"}
Se $f(x, y) = g(x)\, h(y)$ con $g$ continua su $[a, b]$ e $h$ continua su $[c, d]$, allora
$$
\iint_{[a,b] \times [c,d]} g(x)\, h(y)\, dx\, dy
= \left( \int_a^b g(x)\, dx \right) \left( \int_c^d h(y)\, dy \right) .
$$
Segue dal **teorema di Fubini**, poiché nell'integrale interno il fattore che non dipende dalla variabile di integrazione esce dal segno di integrale. Il risultato vale *soltanto* sui rettangoli: su un dominio generico gli estremi dell'integrale interno dipendono dall'altra variabile e la fattorizzazione non è possibile.
:::

## Domini normali e formule di riduzione

:::definizione{#dominio-normale titolo="Dominio normale"}
Un insieme $D \subseteq \mathbb{R}^2$ è un **dominio normale** rispetto all'asse $x$ se esistono due funzioni continue $g_1, g_2 : [a, b] \to \mathbb{R}$ con $g_1 \leq g_2$ tali che
$$
D = \left\{ (x, y) :
\begin{cases}
a \leq x \leq b \\
g_1(x) \leq y \leq g_2(x)
\end{cases}
\right\} .
$$
Il dominio è normale rispetto all'asse $y$ se si descrive nello stesso modo scambiando i ruoli: $c \leq y \leq d$ e $h_1(y) \leq x \leq h_2(y)$. Un dominio normale rispetto a $x$ si attraversa con segmenti verticali che entrano dal grafico di $g_1$ ed escono dal grafico di $g_2$; questa descrizione fornisce direttamente gli **estremi di integrazione**. Il cerchio e il triangolo sono normali rispetto a entrambi gli assi; molte regioni che non sono normali si spezzano nell'unione di domini normali.

::grafico{xmin=-0.4 xmax=4.8 ymin=-0.6 ymax=3.6 area="2.6+0.5*sin(x);0.4+0.15*(x-2.5)^2;0.8;4" curve="t,0.4+0.15*(t-2.5)^2,0.8,4;2.2,t,0.4135,3.0043;t,2.6+0.5*sin(t),0.8,4" segmenti="0.8,0,0.8,2.959;4,0,4,2.222" etichette="0.75,-0.45,a;3.95,-0.45,b;2.9,0.75,y = g₁(x);2.9,3.05,y = g₂(x)" titolo="Un dominio normale rispetto all'asse $x$: il segmento verticale nel punto di ascissa $x$ entra dal grafico di $g_1$ ed esce dal grafico di $g_2$"}

:::

:::teorema{#riduzione-domini-normali titolo="Formule di riduzione sui domini normali"}
Sia $f$ continua su $D$.

- Se $D$ è normale rispetto all'asse $x$, con $a \leq x \leq b$ e $g_1(x) \leq y \leq g_2(x)$, allora
$$
\iint_D f(x, y)\, dx\, dy
= \int_a^b \left( \int_{g_1(x)}^{g_2(x)} f(x, y)\, dy \right) dx .
$$
- Se $D$ è normale rispetto all'asse $y$, con $c \leq y \leq d$ e $h_1(y) \leq x \leq h_2(y)$, allora
$$
\iint_D f(x, y)\, dx\, dy
= \int_c^d \left( \int_{h_1(y)}^{h_2(y)} f(x, y)\, dx \right) dy .
$$

La variabile esterna percorre un intervallo *fisso*, mentre gli estremi dell'integrale interno sono funzioni della variabile esterna. Il primo passo di ogni esercizio è quindi la **descrizione del dominio in forma normale**, con un disegno della regione per leggere le funzioni $g_1$ e $g_2$.
:::

:::esempio{titolo="Dominio tra una parabola e una retta"}
Sia $D$ la regione compresa tra la parabola $y = x^2$ e la retta $y = x$. Le due curve si intersecano dove $x^2 = x$, cioè in $x = 0$ e $x = 1$, e per $0 \leq x \leq 1$ si ha $x^2 \leq x$. Il dominio è **normale rispetto all'asse** $x$:
$$
D = \left\{ (x, y) :
\begin{cases}
0 \leq x \leq 1 \\
x^2 \leq y \leq x
\end{cases}
\right\} ,
\qquad
\iint_D f \, dx\, dy = \int_0^1 \left( \int_{x^2}^{x} f(x, y)\, dy \right) dx .
$$

::grafico{xmin=-0.4 xmax=1.6 ymin=-0.3 ymax=1.5 uguale=1 f="x^2;x" area="x;x^2;0;1" segmenti="0.6,0.36,0.6,0.6" punti="0,0;1,1" etichette="1.2,0.95,y = x;0.9,1.38,y = x²" titolo="Il dominio compreso tra la parabola $y = x^2$ e la retta $y = x$: ogni segmento verticale entra dalla parabola ed esce dalla retta"}

:::

:::osservazione{#scambio-ordine titolo="Scambio dell'ordine di integrazione"}
Quando un dominio è normale rispetto a entrambi gli assi, le due formule di riduzione danno lo stesso valore, perciò l'**ordine di integrazione** si può scambiare riscrivendo il dominio nell'altra forma. Lo scambio è utile quando l'integrale interno assegnato non si calcola in forma elementare: la funzione $e^{y^2}$ non ha primitiva elementare rispetto a $y$, quindi l'integrale $\displaystyle\int_0^1 \int_x^1 e^{y^2}\, dy\, dx$ si calcola integrando prima rispetto a $x$. Per scambiare l'ordine si disegna la regione descritta dagli estremi assegnati e la si descrive di nuovo rispetto all'altro asse; gli estremi *non* si scambiano in modo meccanico.

::grafico{xmin=-0.4 xmax=1.6 ymin=-0.3 ymax=1.4 uguale=1 f="x" area="1;x;0;1" segmenti="0,1,1,1;0.35,0.35,0.35,1;0,0.7,0.7,0.7" etichette="1.1,0.85,y = x" titolo="La regione $0 \leq x \leq 1$, $x \leq y \leq 1$ letta nei due modi: il segmento verticale va da $y = x$ a $y = 1$, quello orizzontale va da $x = 0$ a $x = y$"}

:::

## Proprietà dell'integrale doppio

:::teorema{#proprieta-integrale titolo="Linearità, additività, monotonia"}
Siano $f$ e $g$ integrabili su $D$ e siano $\alpha, \beta \in \mathbb{R}$.

- **Linearità**: $\displaystyle\iint_D (\alpha f + \beta g)\, dx\, dy = \alpha \iint_D f\, dx\, dy + \beta \iint_D g\, dx\, dy$.
- **Additività sul dominio**: se $D = D_1 \cup D_2$ con $D_1$ e $D_2$ privi di punti interni comuni, allora $\displaystyle\iint_D f\, dx\, dy = \iint_{D_1} f\, dx\, dy + \iint_{D_2} f\, dx\, dy$.
- **Monotonia**: se $f \leq g$ su $D$, allora $\displaystyle\iint_D f\, dx\, dy \leq \iint_D g\, dx\, dy$; in particolare $\displaystyle\left| \iint_D f\, dx\, dy \right| \leq \iint_D |f|\, dx\, dy$.

Le proprietà sono le stesse dell'integrale in una variabile e si dimostrano allo stesso modo sulle somme di Riemann. La linearità permette di integrare una somma termine a termine; l'additività permette di spezzare una regione non normale nell'unione di domini normali e di integrare su ciascun pezzo; la monotonia fornisce stime quando il calcolo esplicito non è possibile.
:::

## Cambiamento di variabili

:::teorema{#cambiamento-di-variabili titolo="Cambiamento di variabili e Jacobiano"}
Sia $\Phi(u, v) = \bigl( x(u, v),\, y(u, v) \bigr)$ una trasformazione di classe $C^1$, iniettiva all'interno di un dominio $D'$ del piano $uv$, con immagine $D = \Phi(D')$, e sia
$$
J(u, v) = \det
\begin{pmatrix}
\dfrac{\partial x}{\partial u} & \dfrac{\partial x}{\partial v} \\[10pt]
\dfrac{\partial y}{\partial u} & \dfrac{\partial y}{\partial v}
\end{pmatrix}
\neq 0
$$
all'interno di $D'$. Allora, per ogni $f$ continua su $D$,
$$
\iint_D f(x, y)\, dx\, dy
= \iint_{D'} f\bigl( x(u, v),\, y(u, v) \bigr)\, |J(u, v)|\, du\, dv .
$$
Il determinante $J$ si chiama **Jacobiano** della trasformazione e il suo modulo misura come la trasformazione **dilata le aree**: un rettangolino di area $du\, dv$ nel piano $uv$ ha per immagine una regione di area circa $|J|\, du\, dv$. Il teorema è l'analogo in due variabili dell'**integrazione per sostituzione** e si usa quando nuove variabili rendono il dominio un rettangolo o semplificano la funzione: un dominio delimitato dalle curve $xy = 1$, $xy = 4$, $y = x$, $y = 4x$ diventa il quadrato $[1, 4] \times [1, 4]$ nelle variabili $u = xy$ e $v = \dfrac{y}{x}$. La dimostrazione si rimanda ai testi di riferimento.

::grafico{xmin=-0.3 xmax=3.5 ymin=-0.3 ymax=4.5 f="1/x;x;4*x" curve="t,4/t,0.85,3.5" area="4*x;1/x;0.5;1|4/x;x;1;2" punti="1,1;2,2;0.5,2;1,4" etichette="2.6,0.62,xy = 1;2.6,1.8,xy = 4;2.85,2.55,y = x;1.25,4.25,y = 4x" titolo="La regione compresa tra le iperboli $xy = 1$, $xy = 4$ e le rette $y = x$, $y = 4x$: nelle variabili $u = xy$, $v = \dfrac{y}{x}$ diventa il quadrato $[1, 4] \times [1, 4]$"}

:::

:::osservazione
Se le nuove variabili sono assegnate nella forma $u = u(x, y)$, $v = v(x, y)$, il Jacobiano della trasformazione inversa si ottiene senza invertire le formule, poiché i due determinanti sono **reciproci**. Vale infatti
$$
\det \frac{\partial(x, y)}{\partial(u, v)} = \left( \det \frac{\partial(u, v)}{\partial(x, y)} \right)^{\!-1} ,
$$
dove ciascuna scrittura indica il determinante della matrice delle derivate parziali indicate. Si calcola quindi il determinante più comodo e, se serve, se ne prende il reciproco.
:::

:::esempio{titolo="Trasformazione lineare per un'ellisse"}
Per integrare sull'ellisse $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} \leq 1$ si pone $x = a u$, $y = b v$. La trasformazione porta il cerchio unitario $u^2 + v^2 \leq 1$ sull'ellisse e il suo Jacobiano è
$$
J = \det
\begin{pmatrix}
a & 0 \\
0 & b
\end{pmatrix}
= ab ,
$$
quindi $dx\, dy = ab\, du\, dv$. L'**area dell'ellisse** risulta $ab \cdot \pi = \pi a b$, poiché il cerchio unitario ha area $\pi$.
:::

:::teorema{#coordinate-polari titolo="Coordinate polari"}
La trasformazione
$$
\begin{cases}
x = \rho \cos\theta \\
y = \rho \sin\theta
\end{cases}
\qquad \rho \geq 0, \quad \theta \in [0, 2\pi)
$$
ha Jacobiano
$$
J = \det
\begin{pmatrix}
\cos\theta & -\rho \sin\theta \\
\sin\theta & \rho \cos\theta
\end{pmatrix}
= \rho ,
$$
quindi
$$
\iint_D f(x, y)\, dx\, dy
= \iint_{D'} f(\rho \cos\theta,\, \rho \sin\theta)\, \rho \, d\rho\, d\theta .
$$
Le **coordinate polari** convengono quando il dominio è un cerchio, una corona o un settore circolare, oppure quando la funzione contiene la quantità $x^2 + y^2$, poiché $x^2 + y^2 = \rho^2$. Un cerchio di centro l'origine e raggio $R$ diventa il rettangolo $0 \leq \rho \leq R$, $0 \leq \theta \leq 2\pi$.

::grafico{xmin=-2.6 xmax=2.6 ymin=-2.3 ymax=2.4 uguale=1 area="sqrt(abs(4-x^2));-sqrt(abs(4-x^2));-2;-1|sqrt(abs(4-x^2));sqrt(abs(1-x^2));-1;1|-sqrt(abs(1-x^2));-sqrt(abs(4-x^2));-1;1|sqrt(abs(4-x^2));-sqrt(abs(4-x^2));1;2" curve="2*cos(t),2*sin(t),0,6.29;0.6216*t,0.7833*t,0,1.5;0.45*cos(t),0.45*sin(t),0,0.9;cos(t),sin(t),0,6.29" punti="0.932,1.175,pieno,P" etichette="0.2,0.85,ρ;0.55,0.18,θ" titolo="La corona circolare $1 \leq \rho \leq 2$: il punto $P$ ha distanza $\rho$ dall'origine e il segmento $OP$ forma l'angolo $\theta$ con il semiasse $x$ positivo"}

:::

:::esempio{titolo="Integrale su un cerchio"}
$$
\begin{aligned}
\iint_{x^2 + y^2 \leq 1} e^{-(x^2 + y^2)} \, dx\, dy
&= \int_0^{2\pi} \left( \int_0^1 e^{-\rho^2} \rho \, d\rho \right) d\theta \\[6pt]
&= 2\pi \left[ -\frac{e^{-\rho^2}}{2} \right]_0^1
= \pi \left( 1 - \frac{1}{e} \right)
\end{aligned}
$$
In coordinate cartesiane la funzione $e^{-x^2}$ *non* ha primitiva elementare; in coordinate polari il fattore $\rho$ portato dal Jacobiano rende **immediata l'integrazione**, poiché $\rho\, e^{-\rho^2}$ ha primitiva $-\dfrac{e^{-\rho^2}}{2}$.
:::

:::attenzione
L'**elemento d'area** in coordinate polari è $\rho\, d\rho\, d\theta$, *non* $d\rho\, d\theta$. Senza il fattore $\rho$ l'area del cerchio di raggio $R$ risulterebbe $\displaystyle\int_0^{2\pi} \int_0^R d\rho\, d\theta = 2\pi R$ invece di $\pi R^2$.
:::

## Simmetrie

::::teorema{#simmetrie titolo="Funzioni dispari su domini simmetrici"}
Sia $D$ simmetrico rispetto all'asse $y$, cioè $(x, y) \in D$ *se e solo se* $(-x, y) \in D$, e sia $f$ continua su $D$.

- Se $f$ è **dispari** in $x$, cioè $f(-x, y) = -f(x, y)$, allora $\displaystyle\iint_D f \, dx\, dy = 0$.
- Se $f$ è **pari** in $x$, cioè $f(-x, y) = f(x, y)$, allora $\displaystyle\iint_D f \, dx\, dy = 2 \iint_{D^+} f \, dx\, dy$, dove $D^+$ è la parte di $D$ con $x \geq 0$.

Lo stesso vale scambiando i ruoli di $x$ e $y$ per domini simmetrici rispetto all'asse $x$, e vale per gli integrali tripli con le simmetrie rispetto ai piani coordinati. Il teorema annulla interi addendi *senza calcoli*: sull'intero cerchio unitario l'integrale di $x^3 + 3$ vale $0 + 3\pi$, poiché $x^3$ è dispari in $x$ e la costante $3$ si integra sull'area $\pi$.

::grafico{xmin=-1.8 xmax=1.8 ymin=-1.3 ymax=1.5 uguale=1 curve="cos(t),sin(t),0,6.29" area="sqrt(abs(1-x^2));-sqrt(abs(1-x^2));0;1" segmenti="-0.55,0.45,0.55,0.45" punti="0.55,0.45;-0.55,0.45" etichette="0.28,0.58,(x, y);-0.72,0.58,(−x, y);0.35,-0.5,D⁺;-0.6,-0.5,D⁻" titolo="Un dominio simmetrico rispetto all'asse $y$: il punto $(x, y)$ appartiene a $D$ se e solo se vi appartiene $(-x, y)$; in colore la parte $D^+$ con $x \geq 0$"}

:::dimostrazione
Siano $D^+$ e $D^-$ le parti di $D$ con $x \geq 0$ e $x \leq 0$; per l'additività l'integrale su $D$ è la somma degli integrali sulle due parti. Il cambiamento di variabili $u = -x$, $v = y$ ha Jacobiano di modulo $1$ e porta $D^+$ su $D^-$, quindi
$$
\iint_{D^-} f(x, y)\, dx\, dy = \iint_{D^+} f(-u, v)\, du\, dv .
$$
Se $f$ è dispari in $x$, l'ultimo integrale vale $-\displaystyle\iint_{D^+} f(u, v)\, du\, dv$, perciò la somma dei due contributi è **nulla**. Se $f$ è pari in $x$, i due contributi sono uguali e la somma è il **doppio** dell'integrale su $D^+$.
:::
::::

:::richiamo{titolo="Cambiamento di variabili"}
Se $\Phi : D' \to D$ è $C^1$, iniettiva, con Jacobiano $J \neq 0$ all'interno di $D'$, allora $\displaystyle\iint_D f\, dx\, dy = \iint_{D'} (f \circ \Phi)\, |J|\, du\, dv$.
:::

## Integrali tripli

:::definizione{#integrale-triplo titolo="Integrale triplo"}
L'**integrale triplo** $\displaystyle\iiint_E f(x, y, z)\, dx\, dy\, dz$ di una funzione limitata su una regione $E \subseteq \mathbb{R}^3$ si definisce con le somme di Riemann su suddivisioni in parallelepipedi, come l'integrale doppio, e ogni funzione continua su una regione chiusa e limitata delimitata da superfici regolari è integrabile. Valgono la linearità, l'additività sul dominio, la monotonia e il teorema del cambiamento di variabili, con il Jacobiano dato dal determinante della matrice $3 \times 3$ delle derivate parziali. Per $f = 1$ l'integrale è il **volume** di $E$; con $f$ uguale a una densità l'integrale è la **massa** del solido.
:::

:::teorema{#integrazione-per-fili titolo="Integrazione per fili"}
Sia
$$
E = \left\{ (x, y, z) :
\begin{cases}
(x, y) \in D \\
\alpha(x, y) \leq z \leq \beta(x, y)
\end{cases}
\right\}
$$
con $D \subseteq \mathbb{R}^2$ e $\alpha, \beta$ continue su $D$ con $\alpha \leq \beta$. Allora, per $f$ continua su $E$,
$$
\iiint_E f(x, y, z)\, dx\, dy\, dz
= \iint_D \left( \int_{\alpha(x, y)}^{\beta(x, y)} f(x, y, z)\, dz \right) dx\, dy .
$$
Per ogni punto $(x, y)$ della proiezione $D$ si integra lungo il **filo verticale** che entra in $E$ dalla superficie $z = \alpha(x, y)$ ed esce dalla superficie $z = \beta(x, y)$; il risultato è una funzione di $(x, y)$ che si integra su $D$ con le tecniche degli integrali doppi. È la riduzione adatta ai **solidi compresi tra due grafici**, come la regione tra un paraboloide e un piano.

::grafico{xmin=-2 xmax=3.4 ymin=-0.4 ymax=2.6 uguale=1 nomi="x,z" area="2.2-0.3*x^2;0.3+0.25*x^2;-1.5;1.5" curve="t,0.3+0.25*t^2,-1.5,1.5;t,2.2-0.3*t^2,-1.5,1.5" segmenti="-1.5,0.8625,-1.5,1.525;1.5,0.8625,1.5,1.525" vettori="0.6,0.39,0.6,2.092" etichette="1.6,0.75,z = α(x, y);1.6,1.75,z = β(x, y)" titolo="Sezione verticale di un solido $E$ compreso tra due grafici: il filo verticale entra in $E$ dalla superficie $z = \alpha(x, y)$ ed esce dalla superficie $z = \beta(x, y)$"}

:::

:::teorema{#integrazione-per-strati titolo="Integrazione per strati"}
Sia $E$ compresa tra i piani $z = a$ e $z = b$ e, per ogni $z \in [a, b]$, sia $E_z = \{ (x, y) : (x, y, z) \in E \}$ la **sezione** di $E$ alla quota $z$. Allora, per $f$ continua su $E$,
$$
\iiint_E f(x, y, z)\, dx\, dy\, dz
= \int_a^b \left( \iint_{E_z} f(x, y, z)\, dx\, dy \right) dz .
$$
Il solido si affetta con piani orizzontali e su ogni fetta si calcola un integrale doppio. La **riduzione per strati** conviene quando le sezioni hanno forma semplice e la funzione dipende *solo* da $z$: in tal caso l'integrale interno vale $f(z) \cdot \operatorname{Area}(E_z)$ e il calcolo si riduce a un integrale semplice. Per $f = 1$ si ottiene il volume come integrale delle aree delle sezioni.
:::

:::esempio{titolo="Strati su un paraboloide"}
Sia $E = \{ (x, y, z) : x^2 + y^2 \leq z \leq 1 \}$. La sezione alla quota $z \in [0, 1]$ è il cerchio $x^2 + y^2 \leq z$, di area $\pi z$, quindi
$$
\operatorname{Vol}(E) = \int_0^1 \pi z \, dz = \frac{\pi}{2} .
$$
La funzione integranda è $1$ e dipende solo da $z$, perciò l'integrale doppio su ogni sezione è l'**area della sezione**.

::grafico{xmin=-1.8 xmax=1.8 ymin=-0.4 ymax=1.5 uguale=1 nomi="x,z" f="x^2;1+0*sqrt(1-x^2)" area="1;x^2;-1;1" segmenti="-0.7071,0.5,0.7071,0.5" punti="-0.7071,0.5;0.7071,0.5" etichette="0.82,0.42,(√z, z);-1.75,1.08,z = 1" titolo="Sezione del solido $E$ con il piano $y = 0$: alla quota $z$ il solido è tagliato nel cerchio $x^2 + y^2 \leq z$, di raggio $\sqrt{z}$"}

:::

## Coordinate cilindriche e sferiche

:::teorema{#coordinate-cilindriche titolo="Coordinate cilindriche"}
Le **coordinate cilindriche** sono le coordinate polari nel piano $xy$ con la quota $z$ invariata:
$$
\begin{cases}
x = \rho \cos\theta \\
y = \rho \sin\theta \\
z = z
\end{cases}
\qquad \rho \geq 0, \quad \theta \in [0, 2\pi) .
$$
Il Jacobiano è $\rho$, lo stesso delle coordinate polari, quindi $dx\, dy\, dz = \rho\, d\rho\, d\theta\, dz$. Convengono per i solidi con un **asse di simmetria**, come cilindri, coni e paraboloidi con asse $z$: il cilindro $x^2 + y^2 \leq R^2$, $0 \leq z \leq h$ diventa il parallelepipedo $0 \leq \rho \leq R$, $0 \leq \theta \leq 2\pi$, $0 \leq z \leq h$, e il cono $z = \sqrt{x^2 + y^2}$ ha equazione $z = \rho$.
:::

:::teorema{#coordinate-sferiche titolo="Coordinate sferiche"}
Le **coordinate sferiche** individuano un punto con la distanza $r$ dall'origine, la **colatitudine** $\varphi$ misurata dal semiasse $z$ positivo e la **longitudine** $\theta$:
$$
\begin{cases}
x = r \sin\varphi \cos\theta \\
y = r \sin\varphi \sin\theta \\
z = r \cos\varphi
\end{cases}
\qquad r \geq 0, \quad \varphi \in [0, \pi], \quad \theta \in [0, 2\pi) .
$$
Il modulo del Jacobiano è $r^2 \sin\varphi$, quindi $dx\, dy\, dz = r^2 \sin\varphi\, dr\, d\varphi\, d\theta$. Vale l'identità $x^2 + y^2 + z^2 = r^2$, perciò le coordinate sferiche convengono per sfere, calotte e funzioni della distanza dall'origine: la palla $x^2 + y^2 + z^2 \leq R^2$ diventa il parallelepipedo $0 \leq r \leq R$, $0 \leq \varphi \leq \pi$, $0 \leq \theta \leq 2\pi$, e la semipalla con $z \geq 0$ si ottiene con $0 \leq \varphi \leq \dfrac{\pi}{2}$.

::grafico{xmin=-2.6 xmax=2.6 ymin=-2.4 ymax=2.5 uguale=1 nomi="x,z" curve="2*cos(t),2*sin(t),0,6.29;0.5646*t,0.8253*t,0,2;0.6*cos(t),0.6*sin(t),0.9708,1.5708" segmenti="1.1293,1.6507,0,1.6507;1.1293,1.6507,1.1293,0" punti="1.1293,1.6507,pieno,P" etichette="0.72,0.62,r;0.1,0.72,φ" titolo="Sezione con il piano $y = 0$, nel semipiano $\theta = 0$: il punto $P$ ha distanza $r$ dall'origine e colatitudine $\varphi$ misurata dal semiasse $z$ positivo"}

:::

:::esempio{titolo="Volume della palla"}
$$
\begin{aligned}
\operatorname{Vol}\bigl( x^2 + y^2 + z^2 \leq R^2 \bigr)
&= \int_0^{2\pi} \int_0^{\pi} \int_0^R r^2 \sin\varphi \, dr\, d\varphi\, d\theta \\[6pt]
&= 2\pi \cdot \bigl[ -\cos\varphi \bigr]_0^{\pi} \cdot \frac{R^3}{3}
= \frac{4}{3} \pi R^3
\end{aligned}
$$
La funzione integranda $r^2 \sin\varphi$ è un prodotto di fattori in variabili separate ed estremi costanti, quindi l'integrale triplo è il **prodotto dei tre integrali semplici**.
:::

## Applicazioni: aree, volumi, masse e baricentri

:::definizione{#area-e-volume titolo="Area e volume come integrali"}
L'area di un dominio $D \subseteq \mathbb{R}^2$ e il volume di una regione $E \subseteq \mathbb{R}^3$ sono gli **integrali della funzione costante** $1$:
$$
\operatorname{Area}(D) = \iint_D dx\, dy ,
\qquad
\operatorname{Vol}(E) = \iiint_E dx\, dy\, dz .
$$
Se $E$ è il solido compreso tra il piano $xy$ e il grafico di una funzione $f \geq 0$ su $D$, l'integrazione per fili dà
$$
\operatorname{Vol}(E) = \iint_D f(x, y)\, dx\, dy ,
$$
quindi il volume sotto un grafico si calcola con un integrale doppio. Il volume del solido compreso tra due grafici $g \leq f$ su $D$ è l'**integrale della differenza** $f - g$.
:::

:::definizione{#massa-e-baricentro titolo="Massa e baricentro"}
Sia $\delta(x, y) \geq 0$ la **densità superficiale** di una lamina piana $D$. La **massa** e il **baricentro** $(\bar{x}, \bar{y})$ della lamina sono
$$
m = \iint_D \delta(x, y)\, dx\, dy ,
\qquad
\bar{x} = \frac{1}{m} \iint_D x\, \delta(x, y)\, dx\, dy ,
\qquad
\bar{y} = \frac{1}{m} \iint_D y\, \delta(x, y)\, dx\, dy .
$$
Per un solido $E$ con densità $\delta(x, y, z)$ le formule sono le stesse con integrali tripli e la terza coordinata $\bar{z}$. Se la lamina è omogenea, cioè $\delta$ è costante, la densità si semplifica tra numeratore e denominatore e il baricentro dipende *solo* dalla forma: ogni coordinata del baricentro è la media dei valori della coordinata sul dominio. Se il dominio omogeneo è simmetrico rispetto a una retta, il baricentro appartiene a quella retta, poiché nell'integrale della coordinata trasversale la funzione integranda è dispari rispetto alla simmetria.
:::

:::esempio{titolo="Baricentro di un rettangolo con densità variabile"}
La lamina $[0, 1] \times [0, 1]$ con densità $\delta(x, y) = x$ ha massa
$$
m = \int_0^1 \int_0^1 x \, dy\, dx = \frac{1}{2} ,
\qquad
\bar{x} = \frac{1}{m} \int_0^1 \int_0^1 x \cdot x \, dy\, dx = 2 \cdot \frac{1}{3} = \frac{2}{3} .
$$
Il baricentro ha ascissa $\dfrac{2}{3} > \dfrac{1}{2}$, spostata verso la parte destra della lamina, dove la **densità è maggiore**; per la simmetria della densità rispetto alla retta $y = \dfrac{1}{2}$ risulta $\bar{y} = \dfrac{1}{2}$.
:::
