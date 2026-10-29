---
titolo: Continuità e asintoti
sommario: Che cos'è una funzione continua in un punto e in un intervallo, come si classificano i punti di discontinuità, che cosa affermano i teoremi di Weierstrass, dei valori intermedi e di esistenza degli zeri, come si approssima uno zero con il metodo di bisezione, come si trovano gli asintoti verticali, orizzontali e obliqui e come si traccia il grafico probabile di una funzione.
---

## Funzioni continue

:::definizione{#continuita-punto titolo="Funzione continua in un punto"}
Sia $f$ una funzione definita in un intorno $I(x_0)$ del punto $x_0$, compreso il punto $x_0$. La funzione $f$ è **continua** in $x_0$ se
$$
\lim_{x \to x_0} f(x) = f(x_0) .
$$
L'uguaglianza contiene tre richieste, che devono essere soddisfatte insieme:
$$
\begin{cases}
f(x_0) \text{ esiste} \\[4pt]
\displaystyle\lim_{x \to x_0} f(x) \text{ esiste ed è finito} \\[4pt]
\displaystyle\lim_{x \to x_0} f(x) = f(x_0)
\end{cases}
$$
Con la definizione di limite vista nell'argomento sui limiti, la continuità in $x_0$ significa che per ogni $\varepsilon > 0$ esiste $\delta > 0$ tale che $|f(x) - f(x_0)| < \varepsilon$ per ogni $x$ con $|x - x_0| < \delta$. In altre parole, se $x$ è vicino a $x_0$, allora $f(x)$ è vicino a $f(x_0)$. Per esempio $f(x) = x^2 + 1$ è continua in $x_0 = 2$, perché $f(2) = 5$ e $\displaystyle\lim_{x \to 2} \left( x^2 + 1 \right) = 5$.
:::

:::definizione{#continuita-destra-sinistra titolo="Continuità a destra e a sinistra"}
Sia $f$ definita in $x_0$ e a destra di $x_0$. La funzione è **continua a destra** in $x_0$ se $\displaystyle\lim_{x \to x_0^+} f(x) = f(x_0)$. Allo stesso modo, con il limite sinistro, si definisce la **continuità a sinistra**. Un limite esiste se e solo se il limite destro e il limite sinistro esistono e sono uguali, quindi $f$ è continua in $x_0$ se e *solo se* è continua sia a destra sia a sinistra.

Questa definizione serve per le funzioni definite a tratti. Per la funzione che vale $x^2$ per $x \leq 1$ e $2x$ per $x > 1$ si ha $f(1) = 1$. Il limite sinistro in $1$ è $1$, quindi la funzione è continua a sinistra; il limite destro è $2$, quindi la funzione *non* è continua a destra, e perciò non è continua in $1$.
:::

:::definizione{#continuita-intervallo titolo="Funzione continua in un intervallo"}
Una funzione è **continua in un intervallo** se è continua in ogni punto dell'intervallo. In un estremo chiuso dell'intervallo si richiede solo la continuità da una parte. Per esempio $f$ è continua in $[a, b]$ se è continua in ogni punto di $(a, b)$, continua a destra in $a$ e continua a sinistra in $b$. Una funzione continua in tutti i punti del suo dominio si dice semplicemente **continua**.

Il grafico di una funzione continua in un intervallo si disegna senza staccare la matita dal foglio. La funzione $\sqrt{x}$ è continua in $[0, +\infty)$, e nel punto $0$ è continua a destra, perché $\displaystyle\lim_{x \to 0^+} \sqrt{x} = 0 = \sqrt{0}$.
:::

:::teorema{#continuita-funzioni-elementari titolo="Continuità delle funzioni elementari e delle operazioni"}
Le funzioni elementari sono continue in tutti i punti del loro dominio: i polinomi, le funzioni razionali fratte, le radici, le potenze, le funzioni esponenziali, le funzioni logaritmiche, le funzioni goniometriche e le loro inverse. Inoltre, se $f$ e $g$ sono continue in $x_0$, sono continue in $x_0$ anche
$$
f + g ,
\qquad
f - g ,
\qquad
f \cdot g ,
\qquad
\frac{f}{g} \quad \text{se } g(x_0) \neq 0 .
$$
Se $g$ è continua in $x_0$ e $f$ è continua in $g(x_0)$, la funzione composta $f\big( g(x) \big)$ è continua in $x_0$.

Il teorema permette di calcolare il limite di una funzione continua per sostituzione, cioè calcolando la funzione nel punto. Per esempio
$$
\lim_{x \to 2} \frac{x^2 + 1}{x + 3} = \frac{4 + 1}{2 + 3} = 1 ,
\qquad
\lim_{x \to \pi} x \cos x = \pi \cos \pi = -\pi .
$$
Per i polinomi e le funzioni razionali fratte il teorema segue dai teoremi sul limite della somma, del prodotto e del quoziente; per le altre funzioni la dimostrazione si studia all'università.
:::

:::esempio{titolo="Limite di una funzione composta"}
Si calcola $\displaystyle\lim_{x \to 0} e^{\frac{\sin x}{x}}$. Per il limite notevole visto nell'argomento sui limiti, l'esponente $\dfrac{\sin x}{x}$ tende a $1$. La funzione esponenziale è continua in $1$, quindi
$$
\lim_{x \to 0} e^{\frac{\sin x}{x}} = e^{1} = e .
$$
:::

## Punti di discontinuità

:::definizione{#punto-discontinuita titolo="Punto di discontinuità"}
Sia $f$ definita in un intorno di $x_0$, escluso al più il punto $x_0$. Il punto $x_0$ è un **punto di discontinuità** di $f$ se $f$ non è continua in $x_0$. Questo accade in due casi:

- $f$ è definita in $x_0$, ma il limite per $x \to x_0$ non esiste, oppure è infinito, oppure è diverso da $f(x_0)$;
- $f$ non è definita in $x_0$, ma è definita in tutti i punti vicini a $x_0$.

Per esempio la funzione $\dfrac{1}{x}$ non è definita in $0$, ma è definita in tutti gli altri punti; perciò $0$ è un punto di discontinuità. I punti di discontinuità si classificano in tre specie, secondo i valori del limite destro e del limite sinistro.
:::

:::definizione{#discontinuita-prima-specie titolo="Discontinuità di prima specie"}
Il punto $x_0$ è una **discontinuità di prima specie** se il limite destro e il limite sinistro di $f$ in $x_0$ esistono, sono finiti e sono diversi:
$$
\lim_{x \to x_0^-} f(x) = \ell_1 ,
\qquad
\lim_{x \to x_0^+} f(x) = \ell_2 ,
\qquad
\ell_1 \neq \ell_2 .
$$
Il numero $|\ell_2 - \ell_1|$ si chiama **salto** della funzione in $x_0$. Nel grafico la curva si interrompe e riprende a un'altra altezza. Per la funzione che vale $x + 1$ per $x < 1$ e $x - 2$ per $x \geq 1$ si ha $\ell_1 = 2$ e $\ell_2 = -1$, quindi in $x_0 = 1$ c'è una discontinuità di prima specie con salto $|-1 - 2| = 3$.

::grafico{f="x+1-3*(sign(x-1)+1)/2+0*sqrt(abs(x-1)-0.01)" punti="1,2,vuoto;1,-1,pieno" segmenti="1,-1,1,2" xmin=-3 xmax=4 ymin=-3 ymax=4 legenda=0 titolo="La funzione vale $x + 1$ per $x < 1$ e $x - 2$ per $x \geq 1$; in $x = 1$ il limite sinistro è $2$, il limite destro è $-1$ e il salto è $3$"}

:::

:::definizione{#discontinuita-seconda-specie titolo="Discontinuità di seconda specie"}
Il punto $x_0$ è una **discontinuità di seconda specie** se *almeno uno* dei due limiti, destro o sinistro, è infinito oppure non esiste. Per $f(x) = e^{\frac{1}{x}}$ e $x_0 = 0$ si ha:

- per $x \to 0^+$ l'esponente $\dfrac{1}{x}$ tende a $+\infty$, quindi $f(x) \to +\infty$;
- per $x \to 0^-$ l'esponente tende a $-\infty$, quindi $f(x) \to 0$.

Il limite destro è infinito, perciò $0$ è una discontinuità di seconda specie. Anche $\dfrac{1}{x}$ ha in $0$ una discontinuità di seconda specie, perché i due limiti sono $+\infty$ e $-\infty$. Per la funzione $\sin \dfrac{1}{x}$ i due limiti in $0$ non esistono, perché i valori oscillano tra $-1$ e $1$ sempre più rapidamente.

::grafico{f="exp(1/x)" punti="0,0,vuoto" asintoti="x=0" xmin=-4 xmax=4 ymin=-1 ymax=7 legenda="y = e^{\frac{1}{x}}" titolo="La funzione $e^{\frac{1}{x}}$ tende a $0$ per $x \to 0^-$ e a $+\infty$ per $x \to 0^+$, quindi in $0$ ha una discontinuità di seconda specie"}

:::

:::definizione{#discontinuita-terza-specie titolo="Discontinuità di terza specie o eliminabile"}
Il punto $x_0$ è una **discontinuità di terza specie**, o **eliminabile**, se il limite di $f$ per $x \to x_0$ esiste ed è finito, ma $f$ non è definita in $x_0$, oppure $f(x_0)$ è diverso dal limite. In questo caso si può definire una nuova funzione, uguale a $f$ per $x \neq x_0$ e uguale al limite in $x_0$, che è continua in $x_0$. Si dice che la discontinuità si elimina **prolungando per continuità** la funzione.

Per esempio $f(x) = \dfrac{\sin x}{x}$ non è definita in $0$, e per il limite notevole $\displaystyle\lim_{x \to 0} \dfrac{\sin x}{x} = 1$. Quindi $0$ è una discontinuità eliminabile, e la funzione che vale $\dfrac{\sin x}{x}$ per $x \neq 0$ e $1$ per $x = 0$ è continua su $\mathbb{R}$.

::grafico{f="sin(x)/x" punti="0,1,vuoto" xmin=-12 xmax=12 ymin=-1 ymax=2 legenda="y = \dfrac{\sin x}{x}" titolo="Il grafico di $\dfrac{\sin x}{x}$ si avvicina al punto $(0, 1)$, che non gli appartiene; la discontinuità in $0$ è eliminabile"}

:::

:::osservazione{#ricerca-discontinuita titolo="Dove si cercano i punti di discontinuità"}
Per il teorema sulla continuità delle funzioni elementari, una funzione scritta con una sola espressione è continua nel suo dominio. I punti di discontinuità si cercano quindi

- nei punti esclusi dal dominio vicino ai quali la funzione è definita, come gli zeri di un denominatore;
- nei punti in cui cambia l'espressione di una funzione definita a tratti.

In ciascuno di questi punti si calcolano il limite destro e il limite sinistro. Per $f(x) = \dfrac{x^2 - 4}{x - 2}$ l'unico punto escluso è $2$. Per $x \neq 2$ si ha $f(x) = \dfrac{(x - 2)(x + 2)}{x - 2} = x + 2$, che tende a $4$, quindi $2$ è una discontinuità eliminabile.
:::

## Teoremi sulle funzioni continue

:::teorema{#teorema-weierstrass titolo="Teorema di Weierstrass"}
Sia $f$ una funzione continua in un intervallo chiuso e limitato $[a, b]$. Allora $f$ assume in $[a, b]$ un valore massimo e un valore minimo, cioè esistono due punti $x_1$ e $x_2$ di $[a, b]$ tali che
$$
f(x_1) \leq f(x) \leq f(x_2) \qquad \text{per ogni } x \in [a, b] .
$$
Il teorema garantisce che il massimo e il minimo esistono, ma non dice dove si trovano; per trovarli si usano le derivate, come si vede nell'argomento su massimi, minimi, flessi e studio di funzione. Per esempio $f(x) = x^3 - 3x$ è continua in $[-2, 2]$. Il suo valore massimo è $2$, assunto in $x = -1$ e in $x = 2$, e il suo valore minimo è $-2$, assunto in $x = -2$ e in $x = 1$. La dimostrazione si studia all'università.

::grafico{f="x^3-3*x+0*sqrt(4-x^2)" punti="-2,-2,pieno;-1,2,pieno;1,-2,pieno;2,2,pieno" segmenti="-2,2,2,2;-2,-2,2,-2" xmin=-3 xmax=3 ymin=-3 ymax=3 legenda="y = x^3 - 3x" titolo="In $[-2, 2]$ la funzione $x^3 - 3x$ ha massimo $2$, assunto in $x = -1$ e in $x = 2$, e minimo $-2$, assunto in $x = -2$ e in $x = 1$"}

:::

:::attenzione
Se una delle ipotesi del teorema di Weierstrass non è soddisfatta, il massimo o il minimo possono non esistere.

- L'intervallo $(0, 1]$ non è chiuso. La funzione $\dfrac{1}{x}$ è continua in $(0, 1]$, ma assume valori grandi quanto si vuole vicino a $0$, quindi *non* ha massimo.
- La funzione che vale $x$ per $0 \leq x < 1$ e $0$ per $x = 1$ è definita nell'intervallo chiuso $[0, 1]$, ma non è continua in $1$. Assume tutti i valori di $[0, 1)$ e mai il valore $1$, quindi *non* ha massimo.
:::

:::teorema{#teorema-esistenza-zeri titolo="Teorema di esistenza degli zeri"}
Sia $f$ una funzione continua in un intervallo chiuso e limitato $[a, b]$, con $f(a)$ e $f(b)$ di segno opposto, cioè $f(a) \cdot f(b) < 0$. Allora esiste almeno un punto $c$ di $(a, b)$ tale che $f(c) = 0$.

Nel grafico il punto $\big( a, f(a) \big)$ e il punto $\big( b, f(b) \big)$ stanno da parti opposte rispetto all'asse $x$, e la curva che li unisce non ha interruzioni, quindi attraversa l'asse $x$. Il teorema serve a dimostrare che un'equazione $f(x) = 0$ ha una soluzione anche quando non si sa risolverla. Per esempio $f(x) = x^3 - x - 1$ è un polinomio, quindi è continua in $[1, 2]$, e $f(1) = -1 < 0$, $f(2) = 5 > 0$. Perciò l'equazione $x^3 - x - 1 = 0$ ha una soluzione tra $1$ e $2$, che vale circa $1{,}32$. La dimostrazione si studia all'università.

::grafico{f="x^3-x-1" punti="1,-1,pieno;2,5,pieno;1.3247,0,vuoto" segmenti="1,0,1,-1;2,0,2,5" xmin=-1 xmax=3 ymin=-3 ymax=6 legenda="y = x^3 - x - 1" titolo="La funzione $x^3 - x - 1$ è negativa in $1$ e positiva in $2$, quindi si annulla in un punto $c$ di $(1, 2)$, con $c \approx 1{,}32$"}

:::

:::attenzione
Senza la continuità in tutto l'intervallo il teorema non si applica. La funzione $\dfrac{1}{x}$ in $[-1, 1]$ vale $-1$ in $-1$ e $1$ in $1$, ma non si annulla mai, perché non è definita in $0$ e quindi non è continua in $[-1, 1]$. Inoltre la condizione sui segni è sufficiente, ma *non* necessaria: $f(x) = x^2$ in $[-1, 1]$ ha $f(-1) = f(1) = 1$, e si annulla in $0$.
:::

:::osservazione{#unicita-zero titolo="Unicità dello zero"}
Il teorema di esistenza degli zeri garantisce *almeno* uno zero. Se inoltre $f$ è strettamente crescente, oppure strettamente decrescente, in $[a, b]$, allora lo zero è *uno solo*, perché una funzione strettamente monotona assume ogni valore al più una volta. Per esempio $g(x) = e^{x} + x - 2$ è continua in $[0, 1]$, con $g(0) = -1$ e $g(1) = e - 1 > 0$. Inoltre $g$ è strettamente crescente, perché è la somma delle funzioni strettamente crescenti $e^{x}$ e $x - 2$. Quindi l'equazione $e^{x} = 2 - x$ ha *una e una sola* soluzione in $(0, 1)$.
:::

:::teorema{#teorema-valori-intermedi titolo="Teorema dei valori intermedi"}
Sia $f$ una funzione continua in un intervallo chiuso e limitato $[a, b]$, con minimo $m$ e massimo $M$. Allora $f$ assume tutti i valori compresi tra $m$ e $M$, cioè per ogni $y_0$ con $m \leq y_0 \leq M$ esiste almeno un punto $c$ di $[a, b]$ tale che $f(c) = y_0$.

Il teorema segue dal teorema di esistenza degli zeri applicato alla funzione $f(x) - y_0$. Per esempio $f(x) = x^2 + x$ è crescente in $[0, 2]$, quindi ha minimo $f(0) = 0$ e massimo $f(2) = 6$. Il valore $3$ è compreso tra $0$ e $6$, perciò esiste $c$ in $(0, 2)$ con $c^2 + c = 3$. Risolvendo l'equazione si trova $c = \dfrac{-1 + \sqrt{13}}{2} \approx 1{,}30$.

::grafico{f="x^2+x+0*sqrt(x*(2-x))" punti="0,0,pieno;2,6,pieno;1.3028,3,pieno" segmenti="0,3,1.3028,3;1.3028,0,1.3028,3" xmin=-1 xmax=3 ymin=-1 ymax=7 legenda="y = x^2 + x" titolo="In $[0, 2]$ la funzione $x^2 + x$ assume tutti i valori tra $0$ e $6$; il valore $3$ è assunto in $c = \dfrac{-1 + \sqrt{13}}{2}$"}

:::

:::attenzione
Senza la continuità alcuni valori intermedi possono non essere assunti. La funzione che vale $x + 1$ per $x < 1$ e $x - 2$ per $x \geq 1$, in $[0, 2]$, assume i valori $1$ e $0$ agli estremi, ma *non* assume il valore $\dfrac{1}{2}$. Infatti per $0 \leq x < 1$ i valori sono compresi tra $1$ e $2$, mentre per $1 \leq x \leq 2$ i valori sono compresi tra $-1$ e $0$.
:::

## Metodo di bisezione

:::definizione{#metodo-bisezione titolo="Metodo di bisezione"}
Il **metodo di bisezione** è un procedimento per approssimare uno zero di una funzione $f$ continua in $[a, b]$, con $f(a) \cdot f(b) < 0$. Per il teorema di esistenza degli zeri, $f$ ha uno zero in $(a, b)$. Si procede così:

1. si calcola $f$ nel punto medio $m = \dfrac{a + b}{2}$;
2. se $f(m) = 0$, lo zero è $m$;
3. altrimenti si sceglie la metà, $[a, m]$ oppure $[m, b]$, ai cui estremi $f$ ha segno opposto, e si ripete il procedimento in questa metà.

A ogni passo l'intervallo che contiene lo zero si dimezza. Dopo $n$ passi la sua ampiezza è
$$
\frac{b - a}{2^n} ,
$$
quindi ogni punto dell'intervallo approssima lo zero con un errore minore di questo numero. Il numero di passi necessario per un errore minore di un valore fissato si trova risolvendo la disequazione $\dfrac{b - a}{2^n} < \text{errore}$.
:::

:::esempio{titolo="Approssimazione di $\sqrt{2}$"}
Il numero $\sqrt{2}$ è lo zero positivo di $f(x) = x^2 - 2$. Poiché $f(1) = -1 < 0$ e $f(2) = 2 > 0$, lo zero sta in $(1, 2)$. Nella tabella ogni riga riporta l'intervallo, il punto medio e il segno di $f$ nel punto medio.

| intervallo | $m$ | $f(m)$ | nuovo intervallo |
| --- | --- | --- | --- |
| $[1, 2]$ | $1{,}5$ | $0{,}25 > 0$ | $[1;\ 1{,}5]$ |
| $[1;\ 1{,}5]$ | $1{,}25$ | $-0{,}4375 < 0$ | $[1{,}25;\ 1{,}5]$ |
| $[1{,}25;\ 1{,}5]$ | $1{,}375$ | $-0{,}109\ldots < 0$ | $[1{,}375;\ 1{,}5]$ |
| $[1{,}375;\ 1{,}5]$ | $1{,}4375$ | $0{,}066\ldots > 0$ | $[1{,}375;\ 1{,}4375]$ |

Dopo quattro passi lo zero sta in un intervallo di ampiezza $\dfrac{1}{2^4} = \dfrac{1}{16} = 0{,}0625$, e infatti $\sqrt{2} = 1{,}414\ldots$ appartiene a $[1{,}375;\ 1{,}4375]$. Per avere un errore minore di $0{,}001$ serve $2^n > 1000$, cioè $n \geq 10$, perché $2^{10} = 1024$.

::grafico{f="x^2-2" punti="1,-1,pieno;2,2,pieno;1.5,0.25,pieno;1.25,-0.4375,pieno;1.375,-0.1094,pieno;1.4142,0,vuoto" segmenti="1.5,0,1.5,0.25;1.25,0,1.25,-0.4375;1.375,0,1.375,-0.1094" xmin=0 xmax=2 ymin=-2 ymax=2 legenda="y = x^2 - 2" titolo="I punti medi $1{,}5$, $1{,}25$ e $1{,}375$ restringono l'intervallo che contiene lo zero $\sqrt{2}$ di $x^2 - 2$"}

:::

## Asintoti verticali

:::definizione{#asintoto-verticale titolo="Asintoto verticale"}
Un **asintoto** del grafico di una funzione è una retta a cui il grafico si avvicina indefinitamente. La retta $x = x_0$ è un **asintoto verticale** del grafico di $f$ se *almeno uno* dei due limiti
$$
\lim_{x \to x_0^-} f(x) ,
\qquad
\lim_{x \to x_0^+} f(x)
$$
è $+\infty$ oppure $-\infty$. Gli asintoti verticali si cercano nei punti esclusi dal dominio e negli estremi del dominio che non gli appartengono. Per $f(x) = \dfrac{3}{x - 2}$ il punto escluso è $2$. Per $x \to 2^+$ il denominatore tende a $0$ con valori positivi, quindi $f(x) \to +\infty$; per $x \to 2^-$ il denominatore è negativo, quindi $f(x) \to -\infty$. Perciò la retta $x = 2$ è un asintoto verticale.

::grafico{f="3/(x-2)" asintoti="x=2" xmin=-4 xmax=8 ymin=-6 ymax=6 legenda="y = \dfrac{3}{x - 2}" titolo="Il grafico di $\dfrac{3}{x - 2}$ si avvicina alla retta $x = 2$, verso l'alto da destra e verso il basso da sinistra"}

:::

:::osservazione{#asintoto-verticale-un-lato titolo="Asintoti verticali da una sola parte"}
Un asintoto verticale può esserci da una parte sola. La funzione $\ln x$ è definita solo per $x > 0$, e $\displaystyle\lim_{x \to 0^+} \ln x = -\infty$, quindi l'asse $y$ è un asintoto verticale, a destra di $0$. La funzione $e^{\frac{1}{x}}$ tende a $+\infty$ per $x \to 0^+$ e a $0$ per $x \to 0^-$, quindi la retta $x = 0$ è un asintoto verticale soltanto a destra.
:::

:::attenzione
Un punto escluso dal dominio non sempre dà un asintoto verticale. La funzione $\dfrac{x^2 - 1}{x - 1}$ non è definita in $1$, ma per $x \neq 1$ vale $x + 1$, che tende a $2$. Il limite è finito, quindi la retta $x = 1$ *non* è un asintoto verticale, e il punto $1$ è una discontinuità eliminabile.
:::

## Asintoti orizzontali

:::definizione{#asintoto-orizzontale titolo="Asintoto orizzontale"}
Sia $f$ definita in un intervallo illimitato a destra. La retta $y = \ell$, con $\ell$ numero reale, è un **asintoto orizzontale destro** del grafico di $f$ se
$$
\lim_{x \to +\infty} f(x) = \ell .
$$
Allo stesso modo, con il limite per $x \to -\infty$, si definisce l'**asintoto orizzontale sinistro**. Quando i due limiti sono uguali si parla semplicemente di asintoto orizzontale. Per esempio
$$
\lim_{x \to \pm\infty} \frac{2x^2 + x}{x^2 + 1} = 2 ,
$$
perché, dividendo numeratore e denominatore per $x^2$, si ottiene $\dfrac{2 + \dfrac{1}{x}}{1 + \dfrac{1}{x^2}}$, che tende a $2$. Quindi la retta $y = 2$ è un asintoto orizzontale. La funzione $e^{x}$ ha l'asintoto orizzontale sinistro $y = 0$, perché $\displaystyle\lim_{x \to -\infty} e^{x} = 0$, e non ha asintoto orizzontale destro, perché $\displaystyle\lim_{x \to +\infty} e^{x} = +\infty$.
:::

:::osservazione{#grafico-incontra-asintoto titolo="Il grafico può incontrare un asintoto orizzontale"}
Il grafico di una funzione può intersecare il suo asintoto orizzontale, anche più volte. I punti comuni si trovano risolvendo l'equazione $f(x) = \ell$. Per $f(x) = \dfrac{2x^2 + x}{x^2 + 1}$ l'equazione $\dfrac{2x^2 + x}{x^2 + 1} = 2$ diventa $2x^2 + x = 2x^2 + 2$, cioè $x = 2$. Quindi il grafico incontra l'asintoto $y = 2$ nel punto $(2, 2)$. Inoltre $f(x) - 2 = \dfrac{x - 2}{x^2 + 1}$, quindi per $x > 2$ il grafico sta sopra l'asintoto e per $x < 2$ sta sotto.

::grafico{f="(2*x^2+x)/(x^2+1)" punti="2,2,pieno" asintoti="y=2" xmin=-8 xmax=12 ymin=-1 ymax=3 legenda="y = \dfrac{2x^2 + x}{x^2 + 1}" titolo="Il grafico di $\dfrac{2x^2 + x}{x^2 + 1}$ incontra il suo asintoto orizzontale $y = 2$ nel punto $(2, 2)$"}

:::

## Asintoti obliqui

:::definizione{#asintoto-obliquo titolo="Asintoto obliquo"}
Sia $f$ definita in un intervallo illimitato a destra. La retta $y = mx + q$, con $m \neq 0$, è un **asintoto obliquo destro** del grafico di $f$ se
$$
\lim_{x \to +\infty} \big( f(x) - (mx + q) \big) = 0 ,
$$
cioè se la distanza verticale tra il grafico e la retta tende a $0$. Allo stesso modo si definisce l'asintoto obliquo sinistro, per $x \to -\infty$. Un asintoto obliquo può esserci solo se $f(x)$ tende a $+\infty$ o a $-\infty$, perché $mx + q$ tende a $\pm\infty$. Per esempio $f(x) = \dfrac{x^2 + 1}{x} = x + \dfrac{1}{x}$ ha l'asintoto obliquo $y = x$, perché $f(x) - x = \dfrac{1}{x}$ tende a $0$ per $x \to \pm\infty$.

::grafico{f="(x^2+1)/x;x" asintoti="x=0" xmin=-6 xmax=6 ymin=-6 ymax=6 legenda="y = \dfrac{x^2 + 1}{x};y = x" titolo="Il grafico di $\dfrac{x^2 + 1}{x}$ ha l'asintoto verticale $x = 0$ e l'asintoto obliquo $y = x$"}

:::

:::teorema{#formule-asintoto-obliquo titolo="Calcolo dell'asintoto obliquo"}
Sia $f$ definita in un intervallo illimitato a destra. La retta $y = mx + q$ è un asintoto obliquo destro del grafico di $f$ se e solo se esistono finiti, con $m \neq 0$, i due limiti
$$
m = \lim_{x \to +\infty} \frac{f(x)}{x} ,
\qquad
q = \lim_{x \to +\infty} \big( f(x) - mx \big) .
$$
Lo stesso vale per $x \to -\infty$. La formula di $m$ si ricava dalla definizione. Se $f(x) - mx - q$ tende a $0$, dividendo per $x$ anche $\dfrac{f(x)}{x} - m - \dfrac{q}{x}$ tende a $0$, e poiché $\dfrac{q}{x} \to 0$ si ottiene $\dfrac{f(x)}{x} \to m$. La formula di $q$ segue dalla definizione, perché dire che $f(x) - mx - q$ tende a $0$ equivale a dire che $f(x) - mx$ tende a $q$.

Le formule servono quando non si vede l'asintoto a occhio. Per $f(x) = \dfrac{2x^2 - 3x}{x + 1}$ si ha
$$
m = \lim_{x \to \pm\infty} \frac{2x^2 - 3x}{x\,(x + 1)} = 2 ,
\qquad
q = \lim_{x \to \pm\infty} \left( \frac{2x^2 - 3x}{x + 1} - 2x \right) = \lim_{x \to \pm\infty} \frac{-5x}{x + 1} = -5 ,
$$
quindi la retta $y = 2x - 5$ è un asintoto obliquo, a destra e a sinistra.
:::

:::osservazione{#asintoti-funzioni-razionali titolo="Asintoti delle funzioni razionali fratte"}
Sia $f(x) = \dfrac{N(x)}{D(x)}$, con $N$ e $D$ polinomi senza zeri comuni. Gli asintoti orizzontali e obliqui dipendono dai gradi dei due polinomi:

- se il grado di $N$ è minore del grado di $D$, l'asintoto orizzontale è $y = 0$;
- se i gradi sono uguali, l'asintoto orizzontale è $y = \dfrac{a}{b}$, dove $a$ e $b$ sono i coefficienti dei termini di grado massimo di $N$ e di $D$;
- se il grado di $N$ supera di $1$ il grado di $D$, c'è un asintoto obliquo, e si trova con la divisione tra polinomi;
- se il grado di $N$ supera di $2$ o più il grado di $D$, non ci sono asintoti orizzontali né obliqui.

Gli asintoti verticali sono le rette $x = x_0$ con $x_0$ zero del denominatore. Nel caso dell'asintoto obliquo, la divisione di $N$ per $D$ dà un quoziente $Q(x) = mx + q$ e un resto $R(x)$, e si ha $f(x) = mx + q + \dfrac{R(x)}{D(x)}$. Il resto ha grado minore di $D$, quindi l'ultima frazione tende a $0$. Per $\dfrac{2x^2 - 3x}{x + 1}$ la divisione dà $2x^2 - 3x = (x + 1)(2x - 5) + 5$, e si ritrova l'asintoto $y = 2x - 5$.
:::

:::attenzione
Un limite $m$ finito e diverso da $0$ non basta, perché per avere un asintoto obliquo serve anche $q$ finito. La funzione $f(x) = x + \ln x$ ha
$$
m = \lim_{x \to +\infty} \left( 1 + \frac{\ln x}{x} \right) = 1 ,
\qquad
\lim_{x \to +\infty} \big( f(x) - x \big) = \lim_{x \to +\infty} \ln x = +\infty ,
$$
quindi il grafico *non* ha asintoto obliquo. Inoltre l'asintoto destro e quello sinistro possono essere diversi: per $\sqrt{x^2 + 1}$ si trovano $y = x$ a destra e $y = -x$ a sinistra, perché $\sqrt{x^2 + 1}$ è vicino a $|x|$ quando $|x|$ è grande.
:::

## Grafico probabile di una funzione

:::osservazione{#grafico-probabile titolo="Schema per il grafico probabile"}
Il **grafico probabile** di una funzione è un disegno approssimato del grafico, ottenuto senza le derivate. Si ricavano nell'ordine:

1. il dominio $D$;
2. le eventuali simmetrie: $f$ è pari se $f(-x) = f(x)$, dispari se $f(-x) = -f(x)$;
3. le intersezioni con gli assi;
4. il segno di $f$, cioè dove il grafico sta sopra e dove sta sotto l'asse $x$;
5. i limiti agli estremi del dominio e nei punti esclusi, quindi gli asintoti e i punti di discontinuità.

Il disegno si traccia con questi elementi, collegando i tratti in modo coerente con il segno e con i limiti. I massimi, i minimi e la concavità si trovano con le derivate, come si vede nell'argomento su massimi, minimi, flessi e studio di funzione; il grafico probabile può quindi essere impreciso su questi aspetti.
:::

:::esempio{titolo="Grafico probabile di una funzione razionale fratta"}
Si studia $f(x) = \dfrac{x^2 - 4}{x - 1}$.

- **Dominio.** Il denominatore si annulla per $x = 1$, quindi $D = \mathbb{R} \setminus \{1\}$. Il dominio non è simmetrico rispetto all'origine, perciò la funzione non è né pari né dispari.
- **Intersezioni.** Il numeratore si annulla per $x = \pm 2$, quindi il grafico incontra l'asse $x$ in $(-2, 0)$ e in $(2, 0)$. Inoltre $f(0) = \dfrac{-4}{-1} = 4$, quindi il grafico incontra l'asse $y$ in $(0, 4)$.
- **Segno.** Il numeratore è positivo per $x < -2$ e per $x > 2$, il denominatore è positivo per $x > 1$. Con la regola dei segni, $f(x) > 0$ per $-2 < x < 1$ e per $x > 2$, mentre $f(x) < 0$ per $x < -2$ e per $1 < x < 2$.

**Limiti e asintoti.** Per $x \to 1$ il numeratore tende a $-3$ e il denominatore a $0$. Quindi $f(x) \to +\infty$ per $x \to 1^-$, dove il denominatore è negativo, e $f(x) \to -\infty$ per $x \to 1^+$. La retta $x = 1$ è un asintoto verticale. Il numeratore ha grado $2$ e il denominatore grado $1$, e la divisione dà $x^2 - 4 = (x - 1)(x + 1) - 3$, quindi
$$
f(x) = x + 1 - \frac{3}{x - 1} .
$$
La retta $y = x + 1$ è un asintoto obliquo, a destra e a sinistra. Per $x > 1$ la frazione $\dfrac{3}{x - 1}$ è positiva, quindi il grafico sta sotto l'asintoto; per $x < 1$ sta sopra.

::grafico{f="(x^2-4)/(x-1);x+1" punti="-2,0,pieno;2,0,pieno;0,4,pieno" asintoti="x=1" xmin=-6 xmax=8 ymin=-12 ymax=16 legenda="y = \dfrac{x^2 - 4}{x - 1};y = x + 1" titolo="Grafico di $\dfrac{x^2 - 4}{x - 1}$ con l'asintoto verticale $x = 1$ e l'asintoto obliquo $y = x + 1$"}

:::
