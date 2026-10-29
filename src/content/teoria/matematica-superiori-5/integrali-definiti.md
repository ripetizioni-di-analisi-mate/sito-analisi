---
titolo: Integrali definiti, aree e volumi
sommario: Che cos'è l'integrale definito e come si ottiene dalle somme di rettangoli, quali sono le sue proprietà, che cosa dicono il teorema della media e il teorema fondamentale del calcolo integrale, e come si usano gli integrali per calcolare aree, volumi dei solidi di rotazione, integrali impropri e grandezze fisiche come lo spazio percorso, il lavoro e la carica.
---

## Trapezoide e integrale definito

:::definizione{#trapezoide titolo="Trapezoide"}
Sia $f$ una funzione continua e non negativa nell'intervallo $[a, b]$. Il **trapezoide** di $f$ su $[a, b]$ è la regione del piano delimitata dal grafico di $f$, dall'asse $x$ e dalle rette $x = a$ e $x = b$. Per $f(x) = x + 1$ su $[0, 2]$ il trapezoide è un trapezio rettangolo, con basi $f(0) = 1$ e $f(2) = 3$ e altezza $2$, quindi la sua area è
$$
\frac{(1 + 3) \cdot 2}{2} = 4 .
$$
Il nome viene da questo caso. Quando il grafico è una curva, per l'area del trapezoide non c'è una formula della geometria elementare, e la si approssima con figure formate da rettangoli.
:::

:::definizione{#somme-inferiori-superiori titolo="Somma inferiore e somma superiore"}
Sia $f$ continua in $[a, b]$. Si divide $[a, b]$ in $n$ intervalli di uguale ampiezza
$$
h = \frac{b - a}{n} .
$$
In ciascuno di questi intervalli $f$ è continua, quindi per il teorema di Weierstrass ha un valore minimo $m_k$ e un valore massimo $M_k$, con $k = 1, 2, \ldots, n$. La **somma inferiore** e la **somma superiore** sono
$$
s_n = \sum_{k=1}^{n} m_k\,h ,
\qquad
S_n = \sum_{k=1}^{n} M_k\,h .
$$
Se $f \geq 0$, la somma $s_n$ è l'area di un plurirettangolo contenuto nel trapezoide, detto *inscritto*, e $S_n$ è l'area di un plurirettangolo che contiene il trapezoide, detto *circoscritto*. Perciò l'area del trapezoide è compresa tra $s_n$ e $S_n$.

Per $f(x) = x^2$ su $[0, 2]$, con $n = 4$, si ha $h = \dfrac{1}{2}$. La funzione è crescente, quindi in ogni intervallo il minimo si trova nell'estremo sinistro e il massimo nell'estremo destro:
$$
s_4 = \frac{1}{2} \left( 0 + \frac{1}{4} + 1 + \frac{9}{4} \right) = \frac{7}{4} ,
\qquad
S_4 = \frac{1}{2} \left( \frac{1}{4} + 1 + \frac{9}{4} + 4 \right) = \frac{15}{4} .
$$

::grafico{f="x^2+0*sqrt(x*(2-x))" area="(floor(2*x)/2)^2;0;0;1.999" segmenti="0,0.25,0.5,0.25;0.5,1,1,1;1,2.25,1.5,2.25;1.5,4,2,4;0.5,0,0.5,1;1,0,1,2.25;1.5,0,1.5,4;2,0,2,4" xmin=-1 xmax=3 ymin=-1 ymax=5 legenda="y = x^2" titolo="Per $y = x^2$ su $[0, 2]$ con $n = 4$ il plurirettangolo inscritto, colorato, ha area $s_4 = \dfrac{7}{4}$, e quello circoscritto, tratteggiato, ha area $S_4 = \dfrac{15}{4}$"}

:::

:::definizione{#integrale-definito titolo="Integrale definito"}
Al crescere di $n$ i rettangoli diventano più stretti, e le due somme si avvicinano all'area del trapezoide. Si dimostra che, se $f$ è continua in $[a, b]$, le successioni $s_n$ e $S_n$ hanno lo stesso limite finito per $n \to +\infty$; la dimostrazione si studia all'università. Questo limite comune si chiama **integrale definito** di $f$ da $a$ a $b$ e si indica con
$$
\int_a^b f(x)\,dx = \lim_{n \to +\infty} s_n = \lim_{n \to +\infty} S_n .
$$
I numeri $a$ e $b$ sono gli **estremi di integrazione** e $f$ è la **funzione integranda**. La definizione vale per ogni funzione continua, anche non positiva, perché le somme si calcolano allo stesso modo. Se $f \geq 0$, l'integrale è l'area del trapezoide.

Per $f(x) = x^2$ su $[0, 2]$ si ha $h = \dfrac{2}{n}$, e il minimo nel $k$-esimo intervallo è $\left( \dfrac{2(k - 1)}{n} \right)^2$. Con la formula $1^2 + 2^2 + \dots + p^2 = \dfrac{p\,(p + 1)(2p + 1)}{6}$, che si dimostra per induzione, si ottiene
$$
s_n = \frac{8}{n^3} \left( 1^2 + 2^2 + \dots + (n - 1)^2 \right) = \frac{8}{n^3} \cdot \frac{(n - 1)\,n\,(2n - 1)}{6} = \frac{4\,(n - 1)(2n - 1)}{3n^2} .
$$
Per $n \to +\infty$ il numeratore e il denominatore hanno grado $2$, quindi il limite è il rapporto dei coefficienti di $n^2$, cioè $\dfrac{8}{3}$. Perciò
$$
\int_0^2 x^2\,dx = \frac{8}{3} .
$$
:::

:::osservazione{#integrale-segno titolo="Segno dell'integrale e area"}
Se $f \leq 0$ in $[a, b]$, i numeri $m_k$ e $M_k$ sono negativi o nulli, quindi le somme e il loro limite sono negativi o nulli. In questo caso l'integrale è l'opposto dell'area della regione compresa tra il grafico e l'asse $x$. Se $f$ cambia segno, l'integrale è uguale all'area delle parti che stanno sopra l'asse $x$ meno l'area delle parti che stanno sotto. Per esempio, nell'intervallo $[0, 2\pi]$ le due regioni comprese tra il grafico di $\sin x$ e l'asse $x$ sono simmetriche rispetto al punto $(\pi, 0)$ e hanno la stessa area, perciò
$$
\int_0^{2\pi} \sin x\,dx = 0 .
$$

::grafico{f="sin(x)" area="sin(x);0;0;6.2832" etichette="1.57,0.4,+;4.71,-0.4,−" punti="3.1416,0,pieno" xmin=-1 xmax=7 ymin=-2 ymax=2 legenda="y = \sin x" titolo="In $[0, 2\pi]$ la regione sopra l'asse e quella sotto l'asse hanno la stessa area, quindi l'integrale di $\sin x$ su $[0, 2\pi]$ vale $0$"}

:::

## Proprietà dell'integrale definito

:::teorema{#proprieta-integrale titolo="Proprietà dell'integrale definito"}
Si pone per definizione
$$
\int_a^a f(x)\,dx = 0 ,
\qquad
\int_b^a f(x)\,dx = -\int_a^b f(x)\,dx .
$$
Siano $f$ e $g$ continue in un intervallo che contiene $a$, $b$ e $c$, e sia $k$ un numero reale. Valgono le proprietà seguenti.

- **Linearità**: $\displaystyle\int_a^b \big( f(x) + g(x) \big)\,dx = \int_a^b f(x)\,dx + \int_a^b g(x)\,dx$ e $\displaystyle\int_a^b k\,f(x)\,dx = k \int_a^b f(x)\,dx$.
- **Additività rispetto all'intervallo**: $\displaystyle\int_a^b f(x)\,dx = \int_a^c f(x)\,dx + \int_c^b f(x)\,dx$.
- **Confronto**: se $a < b$ e $f(x) \leq g(x)$ per ogni $x$ di $[a, b]$, allora $\displaystyle\int_a^b f(x)\,dx \leq \int_a^b g(x)\,dx$.

Le proprietà seguono dalle proprietà analoghe delle somme, passando al limite. La linearità permette di calcolare l'integrale di una somma un termine alla volta. Per esempio $\displaystyle\int_0^2 x\,dx = 2$, perché è l'area del triangolo di vertici $(0, 0)$, $(2, 0)$ e $(2, 2)$; insieme a $\displaystyle\int_0^2 x^2\,dx = \dfrac{8}{3}$ si ottiene
$$
\int_0^2 \left( 3x^2 - 2x \right) dx = 3 \cdot \frac{8}{3} - 2 \cdot 2 = 4 .
$$
Il confronto permette di stimare un integrale senza calcolarlo. Per $0 \leq x \leq 1$ si ha $x^2 \leq x$, quindi $\displaystyle\int_0^1 x^2\,dx \leq \int_0^1 x\,dx = \dfrac{1}{2}$.
:::

## Teorema della media

:::richiamo{titolo="Teorema di Weierstrass"}
Se $f$ è continua nell'intervallo chiuso e limitato $[a, b]$, allora $f$ ha in $[a, b]$ un valore minimo $m$ e un valore massimo $M$.
:::

:::richiamo{titolo="Teorema dei valori intermedi"}
Se $f$ è continua nell'intervallo chiuso e limitato $[a, b]$, allora $f$ assume tutti i valori compresi tra il suo minimo e il suo massimo.
:::

::::teorema{#teorema-media titolo="Teorema della media"}
Sia $f$ continua nell'intervallo $[a, b]$. Allora esiste almeno un punto $c$ di $[a, b]$ tale che
$$
\int_a^b f(x)\,dx = (b - a) \cdot f(c) .
$$
Il numero $\dfrac{1}{b - a} \displaystyle\int_a^b f(x)\,dx = f(c)$ si chiama **valore medio** di $f$ in $[a, b]$. Se $f \geq 0$, il teorema afferma che il rettangolo di base $[a, b]$ e altezza $f(c)$ ha la stessa area del trapezoide. Per $f(x) = x^2$ su $[0, 2]$ il valore medio è $\dfrac{1}{2} \cdot \dfrac{8}{3} = \dfrac{4}{3}$, e dall'equazione $c^2 = \dfrac{4}{3}$ con $c$ in $[0, 2]$ si ottiene $c = \dfrac{2}{\sqrt{3}} = \dfrac{2\sqrt{3}}{3} \approx 1{,}15$.

::grafico{f="x^2" area="x^2;0;0;2" segmenti="0,1.3333,2,1.3333;2,0,2,1.3333;1.1547,0,1.1547,1.3333" punti="1.1547,1.3333,pieno" xmin=-1 xmax=3 ymin=-1 ymax=5 legenda="y = x^2" titolo="Il trapezoide di $y = x^2$ su $[0, 2]$ e il rettangolo tratteggiato di altezza $\dfrac{4}{3}$ hanno la stessa area, $\dfrac{8}{3}$; l'altezza è il valore di $f$ in $c = \dfrac{2\sqrt{3}}{3}$"}

:::dimostrazione
L'idea è mostrare che il valore medio è compreso tra il minimo e il massimo di $f$, e poi usare il teorema dei valori intermedi.

Per il teorema di Weierstrass la funzione $f$ ha in $[a, b]$ un minimo $m$ e un massimo $M$, quindi $m \leq f(x) \leq M$ per ogni $x$ di $[a, b]$. Per la proprietà del confronto, applicata alle funzioni costanti $m$ e $M$, si ha
$$
\int_a^b m\,dx \leq \int_a^b f(x)\,dx \leq \int_a^b M\,dx .
$$
L'integrale di una costante positiva è l'area di un rettangolo di base $b - a$, e lo stesso calcolo con le somme vale per una costante qualsiasi. Perciò
$$
m\,(b - a) \leq \int_a^b f(x)\,dx \leq M\,(b - a) .
$$
Dividendo per $b - a$, che è positivo, si ottiene
$$
m \leq \frac{1}{b - a} \int_a^b f(x)\,dx \leq M .
$$
Il valore medio è quindi un numero compreso tra il minimo e il massimo di $f$. Per il teorema dei valori intermedi $f$ assume ogni valore compreso tra $m$ e $M$, quindi esiste un punto $c$ di $[a, b]$ in cui $f(c)$ è uguale al valore medio. Moltiplicando per $b - a$ si ottiene la tesi.
:::
::::

## Funzione integrale e teorema fondamentale

:::definizione{#funzione-integrale titolo="Funzione integrale"}
Sia $f$ continua in un intervallo $I$ e sia $a$ un punto di $I$. Per ogni $x$ di $I$ si può calcolare l'integrale di $f$ da $a$ a $x$, e si ottiene una funzione di $x$, la **funzione integrale** di $f$ con punto iniziale $a$:
$$
F(x) = \int_a^x f(t)\,dt .
$$
La variabile di integrazione si indica con $t$, perché la lettera $x$ indica l'estremo superiore. Si ha sempre $F(a) = 0$. Se $f \geq 0$ e $x > a$, il numero $F(x)$ è l'area del trapezoide di $f$ su $[a, x]$.

Per $f(t) = t$ e $a = 0$, con $x > 0$, il trapezoide è il triangolo di vertici $(0, 0)$, $(x, 0)$ e $(x, x)$, quindi $F(x) = \dfrac{x^2}{2}$. Si osserva che $F'(x) = x = f(x)$; il teorema che segue mostra che questa uguaglianza vale per ogni funzione continua.

::grafico{f="x" area="x;0;0;3" punti="3,0,pieno,x;3,3,pieno" nomi="t,y" xmin=-1 xmax=4 ymin=-1 ymax=4 uguale=1 legenda="y = t" titolo="La funzione integrale $F(x) = \int_0^x t\,dt$ in $x = 3$ è l'area del triangolo colorato, cioè $\dfrac{9}{2}$"}

:::

::::teorema{#teorema-fondamentale titolo="Teorema fondamentale del calcolo integrale"}
Sia $f$ continua nell'intervallo $I$, sia $a$ un punto di $I$ e sia $F(x) = \displaystyle\int_a^x f(t)\,dt$. Allora $F$ è derivabile in $I$ e
$$
F'(x) = f(x) \qquad \text{per ogni } x \text{ di } I .
$$
La funzione integrale è quindi una primitiva di $f$, e ogni funzione continua in un intervallo ha almeno una primitiva. Il teorema, detto anche *teorema di Torricelli-Barrow*, permette di studiare una funzione integrale senza calcolare l'integrale. Per esempio la funzione $F(x) = \displaystyle\int_0^x e^{-t^2}\,dt$ ha derivata $F'(x) = e^{-x^2}$, che è positiva per ogni $x$, quindi $F$ è **crescente** in $\mathbb{R}$. Per $e^{-t^2}$ non esiste una primitiva che si scriva con le funzioni elementari.

:::dimostrazione
L'idea è scrivere il rapporto incrementale di $F$ come un valore medio di $f$ e poi usare la continuità di $f$.

Siano $x$ un punto di $I$ e $h \neq 0$ un incremento con $x + h$ in $I$. Per l'additività rispetto all'intervallo
$$
F(x + h) - F(x) = \int_a^{x + h} f(t)\,dt - \int_a^{x} f(t)\,dt = \int_x^{x + h} f(t)\,dt .
$$
Si considera $h > 0$. Per il teorema della media, applicato all'intervallo $[x, x + h]$, esiste un punto $c_h$ di questo intervallo tale che
$$
\int_x^{x + h} f(t)\,dt = h \cdot f(c_h) .
$$
Per $h < 0$ si applica il teorema all'intervallo $[x + h, x]$ e si ottiene la stessa uguaglianza, perché lo scambio degli estremi cambia il segno dell'integrale. In entrambi i casi il rapporto incrementale è
$$
\frac{F(x + h) - F(x)}{h} = f(c_h) .
$$
Il punto $c_h$ è compreso tra $x$ e $x + h$, quindi tende a $x$ quando $h \to 0$. Poiché $f$ è continua in $x$, si ha $f(c_h) \to f(x)$. Perciò il rapporto incrementale tende a $f(x)$, cioè $F'(x) = f(x)$.
:::
::::

:::osservazione{#derivata-estremo-variabile titolo="Derivata di un integrale con estremo variabile"}
Se l'estremo superiore è una funzione derivabile $g(x)$, la funzione $G(x) = \displaystyle\int_a^{g(x)} f(t)\,dt$ è la composizione di $F(x) = \displaystyle\int_a^x f(t)\,dt$ con $g$. Per la regola della funzione composta e per il teorema fondamentale
$$
G'(x) = f\big( g(x) \big) \cdot g'(x) .
$$
Per esempio, per $G(x) = \displaystyle\int_0^{x^2} \sin t\,dt$ si ha $G'(x) = \sin\left( x^2 \right) \cdot 2x$. Se l'estremo variabile è quello inferiore, si scambiano gli estremi e si cambia il segno.
:::

:::richiamo{titolo="Funzioni con derivata nulla"}
Se $G$ è derivabile nell'intervallo $I$ e $G'(x) = 0$ per ogni $x$ di $I$, allora $G$ è costante in $I$.
:::

::::teorema{#formula-fondamentale titolo="Formula fondamentale del calcolo integrale"}
Sia $f$ continua in $[a, b]$ e sia $G$ una primitiva qualsiasi di $f$ in $[a, b]$. Allora
$$
\int_a^b f(x)\,dx = G(b) - G(a) .
$$
La differenza $G(b) - G(a)$ si indica anche con $\Big[ G(x) \Big]_a^b$. La formula riduce il calcolo di un integrale definito alla ricerca di una primitiva, che si studia nell'argomento sugli integrali indefiniti, senza passare dalle somme. Per esempio
$$
\int_0^2 x^2\,dx = \left[ \frac{x^3}{3} \right]_0^2 = \frac{8}{3} - 0 = \frac{8}{3} ,
\qquad
\int_0^{\pi} \sin x\,dx = \Big[ -\cos x \Big]_0^{\pi} = 1 - (-1) = 2 ,
$$
e il primo valore coincide con quello ottenuto con le somme inferiori. La costante additiva della primitiva non cambia il risultato, perché si elide nella differenza.

:::dimostrazione
Per il teorema fondamentale la funzione $F(x) = \displaystyle\int_a^x f(t)\,dt$ è una primitiva di $f$. La differenza $G - F$ ha quindi derivata $f - f = 0$ in tutto l'intervallo, e per il richiamo sulle funzioni con derivata nulla è una costante $k$. Perciò $G(x) = F(x) + k$ per ogni $x$ di $[a, b]$, e
$$
G(b) - G(a) = \big( F(b) + k \big) - \big( F(a) + k \big) = F(b) - F(a) .
$$
Poiché $F(a) = 0$ e $F(b) = \displaystyle\int_a^b f(t)\,dt$, si ottiene la tesi.
:::
::::

## Metodi di calcolo degli integrali definiti

:::teorema{#sostituzione-definiti titolo="Integrazione per sostituzione negli integrali definiti"}
Sia $g$ derivabile con derivata continua in $[a, b]$ e sia $f$ continua in un intervallo che contiene i valori di $g$. Allora, con la sostituzione $t = g(x)$,
$$
\int_a^b f\big( g(x) \big)\,g'(x)\,dx = \int_{g(a)}^{g(b)} f(t)\,dt .
$$
Con la sostituzione si cambiano anche gli estremi, e alla fine non serve tornare alla variabile $x$. La formula segue dalla formula fondamentale, perché, se $G$ è una primitiva di $f$, allora $G\big( g(x) \big)$ è una primitiva di $f\big( g(x) \big)\,g'(x)$ per la regola della funzione composta. Per esempio, con $t = x^2 + 1$ si ha $dt = 2x\,dx$, e $t$ va da $1$ a $2$ quando $x$ va da $0$ a $1$. Quindi
$$
\int_0^1 x \left( x^2 + 1 \right)^3 dx = \frac{1}{2} \int_1^2 t^3\,dt = \frac{1}{2} \left[ \frac{t^4}{4} \right]_1^2 = \frac{1}{2} \cdot \frac{16 - 1}{4} = \frac{15}{8} .
$$
:::

:::teorema{#parti-definiti titolo="Integrazione per parti negli integrali definiti"}
Siano $f$ e $g$ derivabili con derivate continue in $[a, b]$. Allora
$$
\int_a^b f(x)\,g'(x)\,dx = \Big[ f(x)\,g(x) \Big]_a^b - \int_a^b f'(x)\,g(x)\,dx .
$$
La formula è quella dell'integrazione per parti vista nell'argomento sugli integrali indefiniti, con gli estremi applicati a entrambi i termini. Per esempio, con $f(x) = x$ e $g'(x) = e^{x}$, si ha $f'(x) = 1$ e $g(x) = e^{x}$, quindi
$$
\int_0^1 x\,e^{x}\,dx = \Big[ x\,e^{x} \Big]_0^1 - \int_0^1 e^{x}\,dx = e - (e - 1) = 1 .
$$
:::

:::teorema{#integrali-simmetrie titolo="Integrali di funzioni pari e dispari"}
Sia $f$ continua nell'intervallo $[-a, a]$, con $a > 0$.

- Se $f$ è **pari**, allora $\displaystyle\int_{-a}^{a} f(x)\,dx = 2 \int_0^{a} f(x)\,dx$.
- Se $f$ è **dispari**, allora $\displaystyle\int_{-a}^{a} f(x)\,dx = 0$.

Il grafico di una funzione pari è simmetrico rispetto all'asse $y$, quindi le regioni su $[-a, 0]$ e su $[0, a]$ hanno la stessa area e lo stesso segno. Il grafico di una funzione dispari è simmetrico rispetto all'origine, quindi le due regioni hanno la stessa area e segno opposto. La dimostrazione si ottiene con la sostituzione $t = -x$. Per esempio, nell'integrale $\displaystyle\int_{-2}^{2} \left( x^3 - 5x + 3x^2 \right) dx$ i termini $x^3$ e $-5x$ sono dispari e $3x^2$ è pari, perciò
$$
\int_{-2}^{2} \left( x^3 - 5x + 3x^2 \right) dx = 0 + 2 \int_0^2 3x^2\,dx = 2 \Big[ x^3 \Big]_0^2 = 16 .
$$
:::

## Calcolo delle aree

:::attenzione
L'integrale di una funzione che cambia segno è diverso dall'area della regione compresa tra il grafico e l'asse $x$. Per $f(x) = x^2 - 4$ su $[0, 3]$ si ha
$$
\int_0^3 \left( x^2 - 4 \right) dx = \left[ \frac{x^3}{3} - 4x \right]_0^3 = 9 - 12 = -3 ,
$$
che è un numero negativo. La funzione è negativa in $[0, 2)$ e positiva in $(2, 3]$, quindi l'area si calcola spezzando l'intervallo nel punto $x = 2$ e cambiando segno all'integrale della parte negativa:
$$
\text{area} = \int_0^2 \left( 4 - x^2 \right) dx + \int_2^3 \left( x^2 - 4 \right) dx = \frac{16}{3} + \frac{7}{3} = \frac{23}{3} .
$$

::grafico{f="x^2-4" area="x^2-4;0;0;3" punti="2,0,pieno" etichette="1,-1.5,−;2.75,1,+" xmin=-1 xmax=4 ymin=-6 ymax=6 legenda="y = x^2 - 4" titolo="Su $[0, 3]$ la regione sotto l'asse ha area $\dfrac{16}{3}$ e quella sopra ha area $\dfrac{7}{3}$; l'integrale è $\dfrac{7}{3} - \dfrac{16}{3} = -3$, mentre l'area è $\dfrac{23}{3}$"}

:::

:::teorema{#area-tra-curve titolo="Area della regione compresa tra due curve"}
Siano $f$ e $g$ continue in $[a, b]$, con $f(x) \geq g(x)$ per ogni $x$ di $[a, b]$. L'area della regione compresa tra i due grafici e le rette $x = a$ e $x = b$ è
$$
A = \int_a^b \big( f(x) - g(x) \big)\,dx .
$$
Se le due funzioni sono positive, l'area è la differenza tra l'area del trapezoide di $f$ e quella del trapezoide di $g$. Se non lo sono, si somma a entrambe una costante abbastanza grande; la regione si sposta verso l'alto senza cambiare area, e la differenza $f - g$ resta la stessa. Quando la regione è delimitata soltanto dai due grafici, gli estremi $a$ e $b$ sono le ascisse dei punti di intersezione, cioè le soluzioni dell'equazione $f(x) = g(x)$.
:::

:::esempio{titolo="Regione tra una parabola e una retta"}
Si calcola l'area della regione delimitata dalla parabola $y = x^2 - 2x$ e dalla retta $y = x$. Le ascisse dei punti di intersezione sono le soluzioni di
$$
x^2 - 2x = x
\iff
x^2 - 3x = 0
\iff
x = 0 \quad \text{oppure} \quad x = 3 .
$$
Nel punto intermedio $x = 1$ la retta vale $1$ e la parabola vale $-1$, quindi in $[0, 3]$ la retta sta sopra la parabola. Perciò
$$
A = \int_0^3 \big( x - \left( x^2 - 2x \right) \big)\,dx = \int_0^3 \left( 3x - x^2 \right) dx = \left[ \frac{3x^2}{2} - \frac{x^3}{3} \right]_0^3 = \frac{27}{2} - 9 = \frac{9}{2} .
$$

::grafico{f="x^2-2*x;x" area="x;x^2-2*x;0;3" punti="0,0,pieno;3,3,pieno" xmin=-2 xmax=4 ymin=-2 ymax=4 legenda="y = x^2 - 2x;y = x" titolo="La regione compresa tra la parabola $y = x^2 - 2x$ e la retta $y = x$, con le intersezioni $(0, 0)$ e $(3, 3)$, ha area $\dfrac{9}{2}$"}

:::

:::osservazione{#segmento-parabolico titolo="Area del segmento parabolico"}
La regione compresa tra una parabola e una retta che la taglia in due punti si chiama **segmento parabolico**. Se la differenza tra le due funzioni è un trinomio $a x^2 + b x + c$ con radici $x_1 < x_2$, l'area del segmento parabolico è
$$
A = \frac{|a|\,(x_2 - x_1)^3}{6} .
$$
La formula si ottiene calcolando l'integrale di $|a|\,(x - x_1)(x_2 - x)$ su $[x_1, x_2]$. Nell'esempio precedente la differenza è $3x - x^2$, con $a = -1$, $x_1 = 0$ e $x_2 = 3$, quindi $A = \dfrac{1 \cdot 27}{6} = \dfrac{9}{2}$, come con l'integrale. La formula serve anche a controllare il risultato.
:::

## Volumi dei solidi di rotazione

:::teorema{#volume-rotazione-x titolo="Volume di un solido di rotazione attorno all'asse x"}
Sia $f$ continua e non negativa in $[a, b]$. Quando il trapezoide di $f$ compie un giro completo attorno all'asse $x$, descrive un solido, detto **solido di rotazione**. Il suo volume è
$$
V = \pi \int_a^b f(x)^2\,dx .
$$
Il piano perpendicolare all'asse $x$ nel punto di ascissa $x$ taglia il solido in un cerchio di raggio $f(x)$, che ha area $\pi f(x)^2$. Si divide $[a, b]$ in $n$ intervalli di ampiezza $h$ e si approssima il solido con $n$ cilindri sottili di altezza $h$, i cui volumi sono della forma $\pi f(x)^2 \cdot h$. Per $n \to +\infty$ la somma di questi volumi tende all'integrale della formula.

Per il trapezoide di $f(x) = \dfrac{x}{2}$ su $[0, 4]$ il solido è un cono con raggio di base $2$ e altezza $4$, e
$$
V = \pi \int_0^4 \frac{x^2}{4}\,dx = \pi \left[ \frac{x^3}{12} \right]_0^4 = \frac{16\pi}{3} ,
$$
che coincide con il volume del cono della geometria solida, $\dfrac{1}{3}\,\pi \cdot 2^2 \cdot 4$.

::grafico{f="x/2+0*sqrt(x*(4-x));-x/2+0*sqrt(x*(4-x))" area="x/2;0;0;4" segmenti="4,-2,4,2" xmin=-1 xmax=5 ymin=-3 ymax=3 uguale=1 legenda="y = \dfrac{x}{2};y = -\dfrac{x}{2}" titolo="La rotazione attorno all'asse $x$ del triangolo colorato, trapezoide di $y = \dfrac{x}{2}$ su $[0, 4]$, genera un cono di raggio $2$ e altezza $4$; la linea tratteggiata è il contorno della sezione del cono"}

:::

:::esempio{titolo="Volume della sfera"}
La sfera di raggio $r$ si ottiene dalla rotazione attorno all'asse $x$ del semicerchio che sta sopra l'asse, cioè del trapezoide di $f(x) = \sqrt{r^2 - x^2}$ su $[-r, r]$. Poiché $f(x)^2 = r^2 - x^2$, si ha
$$
V = \pi \int_{-r}^{r} \left( r^2 - x^2 \right) dx = \pi \left[ r^2 x - \frac{x^3}{3} \right]_{-r}^{r} = \pi \left( \frac{2r^3}{3} + \frac{2r^3}{3} \right) = \frac{4}{3}\,\pi r^3 .
$$
Per $r = 3$ il volume è $36\pi$.
:::

:::osservazione{#volume-corona titolo="Rotazione della regione compresa tra due curve"}
Siano $f$ e $g$ continue in $[a, b]$ con $0 \leq g(x) \leq f(x)$. La rotazione attorno all'asse $x$ della regione compresa tra i due grafici genera un solido con un foro, e la sezione nel punto $x$ è una corona circolare di raggi $f(x)$ e $g(x)$. Il volume è quindi la differenza dei volumi generati dai due trapezoidi:
$$
V = \pi \int_a^b \left( f(x)^2 - g(x)^2 \right) dx .
$$
Per la regione compresa tra $y = x$ e $y = x^2$, che si incontrano in $x = 0$ e $x = 1$, con $x^2 \leq x$ in $[0, 1]$, si ottiene $V = \pi \displaystyle\int_0^1 \left( x^2 - x^4 \right) dx = \pi \left( \dfrac{1}{3} - \dfrac{1}{5} \right) = \dfrac{2\pi}{15}$.
:::

:::attenzione
Nella formula della corona si sottraggono i quadrati delle due funzioni, e il risultato è diverso dal quadrato della differenza. Per la regione dell'esempio precedente si avrebbe $\pi \displaystyle\int_0^1 \left( x - x^2 \right)^2 dx = \dfrac{\pi}{30}$, che è il volume del solido generato dal trapezoide di $x - x^2$, un solido diverso da quello cercato.
:::

:::teorema{#volume-rotazione-y titolo="Rotazione attorno all'asse y"}
Sia $f$ continua e non negativa in $[a, b]$, con $0 \leq a < b$. Il volume del solido generato dalla rotazione del trapezoide di $f$ attorno all'asse $y$ è
$$
V = 2\pi \int_a^b x\,f(x)\,dx .
$$
In questo caso il solido si approssima con *gusci cilindrici*. La striscia sottile del trapezoide in corrispondenza di $x$, di larghezza $h$ e altezza $f(x)$, ruotando attorno all'asse $y$ descrive un guscio di raggio $x$, che ha volume circa uguale a $2\pi x \cdot f(x) \cdot h$. Per esempio, la rotazione attorno all'asse $y$ del trapezoide di $f(x) = x^2$ su $[0, 2]$ genera un solido di volume
$$
V = 2\pi \int_0^2 x^3\,dx = 2\pi \left[ \frac{x^4}{4} \right]_0^2 = 8\pi .
$$
Quando la regione è descritta da $x = g(y)$ con $c \leq y \leq d$, cioè è delimitata dal grafico di $g$, dall'asse $y$ e dalle rette $y = c$ e $y = d$, si applica la formula della rotazione attorno all'asse $x$ scambiando le variabili, e $V = \pi \displaystyle\int_c^d g(y)^2\,dy$.
:::

:::teorema{#metodo-sezioni titolo="Metodo delle sezioni"}
Sia dato un solido compreso tra i piani perpendicolari all'asse $x$ nei punti di ascissa $a$ e $b$, e sia $S(x)$ l'area della sua sezione con il piano perpendicolare all'asse $x$ nel punto di ascissa $x$. Se $S$ è continua in $[a, b]$, il volume del solido è
$$
V = \int_a^b S(x)\,dx .
$$
La formula del solido di rotazione è il caso particolare in cui la sezione è un cerchio, e $S(x) = \pi f(x)^2$. Per una piramide a base quadrata di lato $6$ e altezza $4$ si pone il vertice nell'origine e l'asse $x$ lungo l'altezza. La sezione a distanza $x$ dal vertice è un quadrato simile alla base, con lato $\dfrac{6x}{4} = \dfrac{3x}{2}$, quindi $S(x) = \dfrac{9x^2}{4}$ e
$$
V = \int_0^4 \frac{9x^2}{4}\,dx = \left[ \frac{3x^3}{4} \right]_0^4 = 48 ,
$$
in accordo con la formula $\dfrac{1}{3} \cdot 36 \cdot 4 = 48$ della geometria solida.
:::

## Integrali impropri

:::definizione{#improprio-intervallo-illimitato titolo="Integrale su un intervallo illimitato"}
L'integrale definito richiede un intervallo chiuso e limitato. Per una semiretta si calcola l'integrale su un intervallo limitato e poi si passa al limite. Sia $f$ continua in $[a, +\infty)$. Si pone
$$
\int_a^{+\infty} f(x)\,dx = \lim_{t \to +\infty} \int_a^{t} f(x)\,dx .
$$
Se il limite esiste ed è finito, l'**integrale improprio** si dice **convergente**; se il limite è $+\infty$ oppure $-\infty$, si dice **divergente**. Allo stesso modo si definisce l'integrale su $(-\infty, b]$. Per esempio
$$
\int_1^{+\infty} \frac{1}{x^2}\,dx = \lim_{t \to +\infty} \left[ -\frac{1}{x} \right]_1^{t} = \lim_{t \to +\infty} \left( 1 - \frac{1}{t} \right) = 1 ,
$$
quindi la regione illimitata compresa tra il grafico di $\dfrac{1}{x^2}$, l'asse $x$ e la retta $x = 1$ ha area finita, uguale a $1$.
:::

:::definizione{#improprio-funzione-illimitata titolo="Integrale di una funzione illimitata"}
Sia $f$ continua in $(a, b]$ e illimitata vicino ad $a$. Si pone
$$
\int_a^b f(x)\,dx = \lim_{t \to a^+} \int_t^b f(x)\,dx ,
$$
e l'integrale si dice convergente o divergente come nel caso precedente. Allo stesso modo si procede quando $f$ è illimitata vicino a $b$. Se $f$ è illimitata vicino a un punto interno $c$, si spezza l'intervallo in $c$, e l'integrale converge se convergono entrambe le parti. Per esempio
$$
\int_0^1 \frac{1}{\sqrt{x}}\,dx = \lim_{t \to 0^+} \Big[ 2\sqrt{x} \Big]_t^1 = \lim_{t \to 0^+} \left( 2 - 2\sqrt{t} \right) = 2 .
$$
:::

:::teorema{#impropri-potenze titolo="Integrali impropri delle potenze"}
Sia $\alpha$ un numero reale positivo. Allora
$$
\int_1^{+\infty} \frac{1}{x^{\alpha}}\,dx
\begin{cases}
= \dfrac{1}{\alpha - 1} & \text{se } \alpha > 1 \\[8pt]
= +\infty & \text{se } \alpha \leq 1
\end{cases}
\qquad
\int_0^1 \frac{1}{x^{\alpha}}\,dx
\begin{cases}
= \dfrac{1}{1 - \alpha} & \text{se } \alpha < 1 \\[8pt]
= +\infty & \text{se } \alpha \geq 1
\end{cases}
$$
Per $\alpha \neq 1$ una primitiva di $x^{-\alpha}$ è $\dfrac{x^{1 - \alpha}}{1 - \alpha}$, e i limiti si calcolano secondo il segno dell'esponente $1 - \alpha$; per $\alpha = 1$ la primitiva è $\ln x$, che tende a $+\infty$ per $x \to +\infty$ e a $-\infty$ per $x \to 0^+$. Questi integrali servono come termine di paragone. Per esempio $\displaystyle\int_1^{+\infty} \dfrac{1}{x}\,dx$ diverge, mentre $\displaystyle\int_1^{+\infty} \dfrac{1}{x^2}\,dx = 1$; vicino a $0$ la situazione si inverte, e $\displaystyle\int_0^1 \dfrac{1}{\sqrt{x}}\,dx = 2$ converge.

::grafico{f="1/x^2+0*sqrt(x);1/x+0*sqrt(x)" area="1/x^2;0;1;9" segmenti="1,0,1,1" xmin=-1 xmax=9 ymin=-1 ymax=3 legenda="y = \dfrac{1}{x^2};y = \dfrac{1}{x}" titolo="Per $x \geq 1$ la regione illimitata sotto $y = \dfrac{1}{x^2}$ ha area $1$, mentre sotto $y = \dfrac{1}{x}$ l'integrale diverge"}

:::

:::attenzione
La formula fondamentale si applica solo a funzioni continue nell'intervallo chiuso $[a, b]$. Per $\dfrac{1}{x^2}$ su $[-1, 1]$ la formula darebbe $\left[ -\dfrac{1}{x} \right]_{-1}^{1} = -1 - 1 = -2$, un numero negativo per l'integrale di una funzione positiva. Il risultato è sbagliato perché la funzione non è definita in $x = 0$. L'integrale è improprio, e poiché $\displaystyle\int_0^1 \dfrac{1}{x^2}\,dx$ diverge, anche $\displaystyle\int_{-1}^{1} \dfrac{1}{x^2}\,dx$ **diverge**.
:::

## Applicazioni alla fisica

:::teorema{#spazio-velocita titolo="Spostamento e spazio percorso dalla velocità"}
Un corpo si muove lungo una retta con velocità $v(t)$ continua. Poiché la posizione $s(t)$ è una primitiva della velocità, per la formula fondamentale lo spostamento tra gli istanti $t_1$ e $t_2$ è
$$
s(t_2) - s(t_1) = \int_{t_1}^{t_2} v(t)\,dt .
$$
Nel grafico della velocità lo spostamento è l'area con segno compresa tra il grafico e l'asse dei tempi. Lo **spazio percorso** conta come positivi anche i tratti percorsi all'indietro, quindi è $\displaystyle\int_{t_1}^{t_2} |v(t)|\,dt$. Allo stesso modo la velocità si ottiene dall'accelerazione, $v(t_2) - v(t_1) = \displaystyle\int_{t_1}^{t_2} a(t)\,dt$.

Per $v(t) = 6 - 2t$, in metri al secondo, nell'intervallo $[0, 5]$ la velocità è positiva fino a $t = 3$ e negativa dopo. Lo spostamento è
$$
\int_0^5 (6 - 2t)\,dt = \Big[ 6t - t^2 \Big]_0^5 = 5\,\mathrm{m} ,
$$
mentre lo spazio percorso è $\displaystyle\int_0^3 (6 - 2t)\,dt + \int_3^5 (2t - 6)\,dt = 9 + 4 = 13\,\mathrm{m}$.

::grafico{f="6-2*x" area="6-2*x;0;0;5" punti="3,0,pieno" etichette="1,1.5,+;4.4,-0.8,−" nomi="t,v" xmin=-1 xmax=6 ymin=-6 ymax=8 legenda="v = 6 - 2t" titolo="Nel grafico di $v(t) = 6 - 2t$ il triangolo sopra l'asse ha area $9$ e quello sotto ha area $4$; lo spostamento è $9 - 4 = 5$ e lo spazio percorso è $9 + 4 = 13$"}

:::

:::osservazione{#valore-medio-fisica titolo="Velocità media come valore medio"}
La velocità media nell'intervallo $[t_1, t_2]$ è lo spostamento diviso per la durata, cioè
$$
\frac{s(t_2) - s(t_1)}{t_2 - t_1} = \frac{1}{t_2 - t_1} \int_{t_1}^{t_2} v(t)\,dt ,
$$
che è il valore medio della funzione $v$ in $[t_1, t_2]$. Per il teorema della media la velocità istantanea è uguale alla velocità media in almeno un istante. Nell'esempio precedente la velocità media è $\dfrac{5}{5} = 1\,\mathrm{m/s}$, e $6 - 2t = 1$ per $t = 2{,}5\,\mathrm{s}$.
:::

:::definizione{#lavoro-forza titolo="Lavoro di una forza variabile"}
Un corpo si muove lungo l'asse $x$ dalla posizione $a$ alla posizione $b$, sotto l'azione di una forza diretta come l'asse e di componente $F(x)$ continua. Se la forza è costante, il lavoro è $F \cdot (b - a)$. Se la forza varia, si divide $[a, b]$ in tratti brevi, in ciascuno dei quali la forza è quasi costante, e si sommano i lavori; al limite si ottiene il **lavoro**
$$
W = \int_a^b F(x)\,dx .
$$
Per allungare una molla di costante elastica $k$ serve una forza $F(x) = kx$, dove $x$ è l'allungamento. Il lavoro per portare l'allungamento da $0$ a $\ell$ è
$$
W = \int_0^{\ell} kx\,dx = \frac{1}{2}\,k\,\ell^2 ,
$$
e per $k = 200\,\mathrm{N/m}$ e $\ell = 0{,}1\,\mathrm{m}$ vale $W = \dfrac{1}{2} \cdot 200 \cdot 0{,}01 = 1\,\mathrm{J}$.
:::

:::definizione{#carica-corrente titolo="Carica dalla corrente"}
L'intensità di corrente è la derivata della carica, $i(t) = q'(t)$, come si è visto nell'argomento sulle derivate. Per la formula fondamentale la **carica** che attraversa la sezione di un conduttore tra gli istanti $t_1$ e $t_2$ è
$$
Q = \int_{t_1}^{t_2} i(t)\,dt .
$$
Per esempio, se $i(t) = 4\,e^{-2t}$ ampere, nel primo secondo passa la carica
$$
Q = \int_0^1 4\,e^{-2t}\,dt = \Big[ -2\,e^{-2t} \Big]_0^1 = 2 - 2\,e^{-2} \approx 1{,}73\,\mathrm{C} .
$$
La carica totale, per $t$ da $0$ a $+\infty$, è un integrale improprio, e vale $\displaystyle\lim_{t \to +\infty} \left( 2 - 2\,e^{-2t} \right) = 2\,\mathrm{C}$.
:::
