---
titolo: Continuità e asintoti
sommario: Continuità e discontinuità, teoremi sulle funzioni continue, metodo di bisezione e asintoti per tracciare il grafico probabile.
---

## Funzioni continue

:::definizione{#continuita-punto titolo="Funzione continua in un punto"}
Sia $x_0$ un punto del dominio di $f$. Se $x_0$ è un punto di accumulazione del dominio, cioè se altri punti del dominio si avvicinano quanto si vuole a $x_0$, la funzione $f$ è **continua** in $x_0$ se
$$
\lim_{x \to x_0} f(x) = f(x_0) .
$$
Per verificare la continuità si controllano insieme queste tre condizioni.
$$
\begin{cases}
f(x_0) \text{ esiste} \\[4pt]
\displaystyle\lim_{x \to x_0} f(x) \text{ esiste ed è finito} \\[4pt]
\displaystyle\lim_{x \to x_0} f(x) = f(x_0)
\end{cases}
$$
Con la definizione di limite vista nell'argomento sui limiti, la continuità in $x_0$ significa che per ogni $\varepsilon > 0$ esiste $\delta > 0$ tale che $|f(x) - f(x_0)| < \varepsilon$ per ogni $x$ del dominio con $|x - x_0| < \delta$. In altre parole, se $x$ è vicino a $x_0$, allora $f(x)$ è vicino a $f(x_0)$. Se $x_0$ è isolato nel dominio, si sceglie un intorno tanto piccolo che il solo punto del dominio al suo interno è $x_0$. In quel punto lo scarto $|f(x_0)-f(x_0)|$ è nullo per ogni tolleranza $\varepsilon>0$, quindi $f$ è continua. Per esempio $f(x) = x^2 + 1$ è continua in $x_0 = 2$, perché $f(2) = 5$ e $\displaystyle\lim_{x \to 2} \left( x^2 + 1 \right) = 5$.
:::

:::definizione{#continuita-destra-sinistra titolo="Continuità a destra e a sinistra"}
Sia $f$ definita in $x_0$ e a destra di $x_0$. La funzione è **continua a destra** in $x_0$ se $\displaystyle\lim_{x \to x_0^+} f(x) = f(x_0)$. Allo stesso modo, con il limite sinistro, si definisce la **continuità a sinistra**. Quando il dominio permette di avvicinarsi a $x_0$ da entrambi i lati, la continuità in $x_0$ equivale alla continuità a destra e a sinistra. Infatti i due limiti laterali devono coincidere entrambi con $f(x_0)$.

Questa definizione serve per le funzioni definite a tratti. Per la funzione che vale $x^2$ per $x \leq 1$ e $2x$ per $x > 1$ si ha $f(1) = 1$. Il limite sinistro in $1$ è $1$, quindi la funzione è continua a sinistra; il limite destro è $2$, quindi la funzione *non* è continua a destra, e perciò non è continua in $1$.
:::

:::definizione{#continuita-intervallo titolo="Funzione continua in un intervallo"}
Una funzione è **continua in un intervallo** se è continua in ogni punto dell'intervallo. In un estremo chiuso dell'intervallo si richiede solo la continuità da una parte. Per esempio $f$ è continua in $[a, b]$ se è continua in ogni punto di $(a, b)$, continua a destra in $a$ e continua a sinistra in $b$. Una funzione continua in tutti i punti del suo dominio si dice semplicemente **continua**.

All’estremo chiuso si considerano gli $x$ appartenenti all’intervallo. Per esempio la funzione $\sqrt{x}$ è continua in $[0, +\infty)$, e nel punto $0$ è continua a destra, perché $\displaystyle\lim_{x \to 0^+} \sqrt{x} = 0 = \sqrt{0}$.
:::

:::teorema{#continuita-funzioni-elementari titolo="Continuità delle funzioni elementari e delle operazioni"}
Polinomi, funzioni razionali fratte, radici, funzioni potenza, esponenziali, logaritmi, funzioni goniometriche e loro inverse sono continui nei rispettivi domini. Inoltre, se $f$ e $g$ sono continue in $x_0$, sono continue in $x_0$ anche
$$
f + g ,
\qquad
f - g ,
\qquad
f \cdot g ,
\qquad
\frac{f}{g} \quad \text{se } g(x_0) \neq 0 .
$$
Se $g$ è continua in $x_0$ e $f$ è continua in $g(x_0)$, la funzione composta $f\big(g(x)\big)$ è continua in $x_0$ nel suo dominio, formato dagli $x$ del dominio di $g$ per cui $g(x)$ appartiene al dominio di $f$.

Il teorema permette di calcolare il limite di una funzione continua per sostituzione, cioè calcolando la funzione nel punto. Per esempio
$$
\lim_{x \to 2} \frac{x^2 + 1}{x + 3} = \frac{4 + 1}{2 + 3} = 1 ,
\qquad
\lim_{x \to \pi} x \cos x = \pi \cos \pi = -\pi .
$$
Per i polinomi e le funzioni razionali fratte il teorema segue dai teoremi sul limite della somma, del prodotto e del quoziente; per le altre funzioni la dimostrazione si studia all'università.
:::

:::esempio{titolo="Limite di una funzione composta"}
Si calcola $\displaystyle\lim_{x \to 0} e^{\dfrac{\sin x}{x}}$. Per il limite notevole visto nell'argomento sui limiti, l'esponente $\dfrac{\sin x}{x}$ tende a $1$. La funzione esponenziale è continua in $1$, quindi
$$
\lim_{x \to 0} e^{\frac{\sin x}{x}} = e^{1} = e .
$$
:::

## Punti di discontinuità

:::definizione{#punto-discontinuita titolo="Punto di discontinuità"}
Sia $f$ definita in un intorno di $x_0$, escluso al più il punto $x_0$. Il punto $x_0$ è un **punto di discontinuità** di $f$ se $f$ non è continua in $x_0$. Questo accade in due casi:

- $f$ è definita in $x_0$, ma il limite per $x \to x_0$ non esiste, oppure è infinito, oppure è diverso da $f(x_0)$;
- $f$ non è definita in $x_0$, ma è definita in tutti i punti vicini a $x_0$.

Per esempio la funzione $\dfrac{1}{x}$ non è definita in $0$, ma è definita in tutti gli altri punti; perciò $0$ è un punto di discontinuità. La classificazione in tre specie qui descritta riguarda i punti ai quali il dominio si avvicina da entrambi i lati. A una frontiera accessibile da un solo lato si studia il limite da quel lato.
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
Il punto $x_0$ è una **discontinuità di seconda specie** se *almeno uno* dei due limiti, destro o sinistro, è infinito oppure non esiste. Per $f(x) = e^{\dfrac{1}{x}}$ e $x_0 = 0$ si ha:

- per $x \to 0^+$ l'esponente $\dfrac{1}{x}$ tende a $+\infty$, quindi $f(x) \to +\infty$;
- per $x \to 0^-$ l'esponente tende a $-\infty$, quindi $f(x) \to 0$.

Il limite destro è infinito, perciò $0$ è una discontinuità di seconda specie. Anche $\dfrac{1}{x}$ ha in $0$ una discontinuità di seconda specie, perché i due limiti sono $+\infty$ e $-\infty$. Per la funzione $\sin \dfrac{1}{x}$ i due limiti in $0$ non esistono, perché i valori oscillano tra $-1$ e $1$ sempre più rapidamente.

::grafico{f="exp(1/x)" punti="0,0,vuoto" asintoti="x=0" xmin=-4 xmax=4 ymin=-1 ymax=7 legenda="y = e^{\frac{1}{x}}" titolo="La funzione $e^{\dfrac{1}{x}}$ tende a $0$ per $x \to 0^-$ e a $+\infty$ per $x \to 0^+$, quindi in $0$ ha una discontinuità di seconda specie"}

:::

:::definizione{#discontinuita-terza-specie titolo="Discontinuità di terza specie o eliminabile"}
Il punto $x_0$ è una **discontinuità di terza specie**, o **eliminabile**, se il limite di $f$ per $x \to x_0$ esiste ed è finito, ma $f$ non è definita in $x_0$, oppure $f(x_0)$ è diverso dal limite. In questo caso si può definire una nuova funzione, uguale a $f$ per $x \neq x_0$ e uguale al limite in $x_0$, che è continua in $x_0$. Si dice che la discontinuità si elimina **prolungando per continuità** la funzione.

Per esempio $f(x) = \dfrac{\sin x}{x}$ non è definita in $0$, e per il limite notevole $\displaystyle\lim_{x \to 0} \dfrac{\sin x}{x} = 1$. Quindi $0$ è una discontinuità eliminabile, e la funzione che vale $\dfrac{\sin x}{x}$ per $x \neq 0$ e $1$ per $x = 0$ è continua su $\mathbb{R}$.

::grafico{f="sin(x)/x" punti="0,1,vuoto" xmin=-12 xmax=12 ymin=-1 ymax=2 legenda="y = \dfrac{\sin x}{x}" titolo="Il grafico di $\dfrac{\sin x}{x}$ si avvicina al punto $(0, 1)$, che non gli appartiene; la discontinuità in $0$ è eliminabile"}

:::

:::osservazione{#ricerca-discontinuita titolo="Dove si cercano i punti di discontinuità"}
Le espressioni ottenute da funzioni elementari mediante le operazioni elencate sono continue dove tali operazioni sono definite. Per queste espressioni e per le funzioni costruite raccordandone più di una, i punti da controllare sono

- nei punti esclusi dal dominio vicino ai quali la funzione è definita, come gli zeri di un denominatore;
- nei punti in cui cambia l'espressione di una funzione definita a tratti.

Se il dominio arriva al punto da entrambi i lati si confrontano il limite sinistro e il limite destro. Se il dominio arriva da una parte sola, si calcola il limite dal lato accessibile. Per esempio per $\ln x$ si studia $x\to0^+$, mentre per $\sqrt{x}$ si verifica la continuità da destra in $0$. Per $f(x) = \dfrac{x^2 - 4}{x - 2}$ l'unico punto escluso è $2$. Per $x \neq 2$ si ha $f(x) = \dfrac{(x - 2)(x + 2)}{x - 2} = x + 2$, che tende a $4$, quindi $2$ è una discontinuità eliminabile.
:::

## Teoremi sulle funzioni continue

:::teorema{#teorema-weierstrass titolo="Teorema di Weierstrass"}
Sia $f$ una funzione continua in un intervallo chiuso e limitato $[a, b]$. Allora $f$ assume in $[a, b]$ un valore massimo e un valore minimo, cioè esistono due punti $x_1$ e $x_2$ di $[a, b]$ tali che
$$
f(x_1) \leq f(x) \leq f(x_2) \qquad \text{per ogni } x \in [a, b] .
$$
Il teorema garantisce l’esistenza dei valori estremi. L’argomento su massimi, minimi, flessi e studio di funzione mostra come individuarli con le derivate. Per esempio $f(x) = x^3 - 3x$ è continua in $[-2, 2]$. Il suo valore massimo è $2$, assunto in $x = -1$ e in $x = 2$, e il suo valore minimo è $-2$, assunto in $x = -2$ e in $x = 1$. La dimostrazione si studia all'università.

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

::grafico{f="x^3-x-1" punti="1,-1,pieno;2,5,pieno;1.3247,0,pieno" segmenti="1,0,1,-1;2,0,2,5" xmin=-1 xmax=3 ymin=-3 ymax=6 legenda="y = x^3 - x - 1" titolo="La funzione $x^3 - x - 1$ è negativa in $1$ e positiva in $2$, quindi si annulla in un punto $c$ di $(1, 2)$, con $c \approx 1{,}32$"}

:::

:::attenzione
Senza la continuità in tutto l'intervallo il teorema non si applica. La funzione $\dfrac{1}{x}$ in $[-1, 1]$ vale $-1$ in $-1$ e $1$ in $1$, ma non si annulla mai, perché non è definita in $0$ e quindi non è continua in $[-1, 1]$. Inoltre la condizione sui segni è sufficiente, ma *non* necessaria: $f(x) = x^2$ in $[-1, 1]$ ha $f(-1) = f(1) = 1$, e si annulla in $0$.
:::

:::osservazione{#unicita-zero titolo="Unicità dello zero"}
Il teorema di esistenza degli zeri garantisce *almeno* uno zero. Se inoltre $f$ è strettamente crescente, oppure strettamente decrescente, in $[a, b]$, allora lo zero è *uno solo*, perché una funzione strettamente monotona assume ogni valore al più una volta. Per esempio $g(x) = e^{x} + x - 2$ è continua in $[0, 1]$, con $g(0) = -1$ e $g(1) = e - 1 > 0$. Inoltre $g$ è strettamente crescente, perché è la somma delle funzioni strettamente crescenti $e^{x}$ e $x - 2$. Quindi l'equazione $e^{x} = 2 - x$ ha *una e una sola* soluzione in $(0, 1)$.
:::

:::teorema{#teorema-valori-intermedi titolo="Teorema dei valori intermedi"}
Sia $f$ una funzione continua in un intervallo chiuso e limitato $[a, b]$, con minimo $m$ e massimo $M$. Allora $f$ assume tutti i valori compresi tra $m$ e $M$, cioè per ogni $y_0$ con $m \leq y_0 \leq M$ esiste almeno un punto $c$ di $[a, b]$ tale che $f(c) = y_0$.

Se $y_0$ è un estremo tra $m$ e $M$, esiste già un punto in cui $f$ assume quel valore. Per $m<y_0<M$, si prende l’intervallo con estremi nei punti in cui $f$ assume $m$ e $M$. Agli estremi la funzione continua $f(x)-y_0$ ha segni opposti, quindi il **teorema di esistenza degli zeri** garantisce un punto in cui $f(x)=y_0$. Per esempio $f(x) = x^2 + x$ è crescente in $[0, 2]$, quindi ha minimo $f(0) = 0$ e massimo $f(2) = 6$. Il valore $3$ è compreso tra $0$ e $6$, perciò esiste $c$ in $(0, 2)$ con $c^2 + c = 3$. Risolvendo l'equazione si trova $c = \dfrac{-1 + \sqrt{13}}{2} \approx 1{,}30$.

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

Se il punto medio è uno zero, il procedimento termina con il valore esatto. Altrimenti, a ogni passo l’intervallo che contiene uno zero si dimezza. Dopo $n$ dimezzamenti la sua ampiezza è
$$
\frac{b-a}{2^n}.
$$

Sia $m_n$ il punto medio dell’intervallo ottenuto dopo $n$ dimezzamenti e sia $c$ uno zero al suo interno. La distanza $|m_n-c|$ è al più metà dell’ampiezza, quindi
$$
|m_n-c|\leq\frac{b-a}{2^{n+1}} .
$$
Per garantire un’ampiezza inferiore a una tolleranza si usa $\dfrac{b-a}{2^n}$. Per garantire l’errore del punto medio si usa invece $\dfrac{b-a}{2^{n+1}}$.
:::

:::esempio{titolo="Approssimazione di $\sqrt{2}$"}
Il numero $\sqrt{2}$ è lo zero positivo di $f(x) = x^2 - 2$. Poiché $f(1) = -1 < 0$ e $f(2) = 2 > 0$, lo zero sta in $(1, 2)$. Si parte da $[1,2]$. Ogni riga riporta il punto medio, il valore di $f$ nel punto medio e l’intervallo conservato.

| $m$ | $f(m)$ | Intervallo conservato |
| --- | --- | --- |
| $1{,}5$ | $0{,}25 > 0$ | $[1;\ 1{,}5]$ |
| $1{,}25$ | $-0{,}4375 < 0$ | $[1{,}25;\ 1{,}5]$ |
| $1{,}375$ | $-\dfrac{7}{64}$ | $[1{,}375;\ 1{,}5]$ |
| $1{,}4375$ | $\dfrac{17}{256}$ | $[1{,}375;\ 1{,}4375]$ |

Dopo quattro passi lo zero sta in un intervallo di ampiezza $\dfrac{1}{2^4} = \dfrac{1}{16} = 0{,}0625$, e infatti $\sqrt{2} = 1{,}414\ldots$ appartiene a $[1{,}375;\ 1{,}4375]$. Il punto medio $1{,}40625$ dista da $\sqrt{2}$ meno di $0{,}03125$. Per ottenere un intervallo di ampiezza minore di $0{,}001$ servono $10$ passi, perché $2^9<1000<2^{10}$. Se si richiede soltanto che il punto medio abbia un errore minore di $0{,}001$, il limite sull’errore lo garantisce già dopo $9$ passi.

::grafico{f="x^2-2" punti="1,-1,pieno;2,2,pieno;1.5,0.25,pieno;1.25,-0.4375,pieno;1.375,-0.109375,pieno;1.4142,0,pieno" segmenti="1.5,0,1.5,0.25;1.25,0,1.25,-0.4375;1.375,0,1.375,-0.109375" xmin=0 xmax=2 ymin=-2 ymax=2 legenda="y = x^2 - 2" titolo="I punti medi $1{,}5$, $1{,}25$ e $1{,}375$ restringono l'intervallo che contiene lo zero $\sqrt{2}$ di $x^2 - 2$"}

:::

## Asintoti verticali

:::definizione{#asintoto-verticale titolo="Asintoto verticale"}
Un **asintoto** del grafico di una funzione è una retta a cui il grafico si avvicina indefinitamente. La retta $x = x_0$ è un **asintoto verticale** del grafico di $f$ se *almeno uno* dei due limiti
$$
\lim_{x \to x_0^-} f(x) ,
\qquad
\lim_{x \to x_0^+} f(x)
$$
è $+\infty$ oppure $-\infty$. Il limite si calcola dai lati da cui il dominio arriva a $x_0$. Tra i punti da controllare ci sono le frontiere del dominio e i raccordi tra espressioni, anche quando in $x_0$ è assegnato un valore. Per $f(x) = \dfrac{3}{x - 2}$ il punto escluso è $2$. Per $x \to 2^+$ il denominatore tende a $0$ con valori positivi, quindi $f(x) \to +\infty$; per $x \to 2^-$ il denominatore è negativo, quindi $f(x) \to -\infty$. Perciò la retta $x = 2$ è un asintoto verticale.

::grafico{f="3/(x-2)" asintoti="x=2" xmin=-4 xmax=8 ymin=-6 ymax=6 legenda="y = \dfrac{3}{x - 2}" titolo="Il grafico di $\dfrac{3}{x - 2}$ si avvicina alla retta $x = 2$, verso l'alto da destra e verso il basso da sinistra"}

:::

:::osservazione{#asintoto-verticale-un-lato titolo="Asintoti verticali da una sola parte"}
Un asintoto verticale può esserci da una parte sola. La funzione $\ln x$ è definita solo per $x > 0$, e $\displaystyle\lim_{x \to 0^+} \ln x = -\infty$, quindi l'asse $y$ è un asintoto verticale, a destra di $0$. Per $e^{\dfrac{1}{x}}$ si ottiene invece un limite da ciascun lato. Da destra vale $+\infty$ e da sinistra vale $0$, quindi l’asintoto verticale è ancora solo da destra.

Sia ora $g(x)=\dfrac{1}{x^2}$ per $x<0$ e $g(x)=x+1$ per $x\geq0$. Il limite sinistro è $+\infty$ e il limite destro coincide con $g(0)=1$. La retta $x=0$ è un asintoto verticale da sinistra anche se il grafico contiene il punto $(0,1)$.

::grafico{f="(1-sign(x))/(2*x^2)+(x+1)*(1+sign(x))/2" punti="0,1,pieno" asintoti="x=0" xmin=-4 xmax=4 ymin=-1 ymax=7 legenda="y=g(x)" titolo="Il ramo sinistro diverge lungo $x=0$, mentre il ramo destro parte dal punto $(0,1)$"}
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
Lo stesso vale per $x \to -\infty$. Il limite del rapporto dà il coefficiente angolare $m$, mentre il limite della differenza dà l’intercetta $q$. La formula di $m$ si ricava dalla definizione. Se $f(x) - mx - q$ tende a $0$, dividendo per $x$ anche $\dfrac{f(x)}{x} - m - \dfrac{q}{x}$ tende a $0$, e poiché $\dfrac{q}{x} \to 0$ si ottiene $\dfrac{f(x)}{x} \to m$. La formula di $q$ segue dalla definizione, perché dire che $f(x) - mx - q$ tende a $0$ equivale a dire che $f(x) - mx$ tende a $q$.

I due limiti determinano prima la pendenza e poi l’intercetta della retta. Per $f(x) = \dfrac{2x^2 - 3x}{x + 1}$ si ha
$$
m = \lim_{x \to \pm\infty} \frac{2x^2 - 3x}{x\,(x + 1)} = 2 .
$$
$$
\begin{aligned}
q &= \lim_{x \to \pm\infty} \left( \frac{2x^2 - 3x}{x + 1} - 2x \right) \\[6pt]
  &= \lim_{x \to \pm\infty} \frac{-5x}{x + 1} = -5 .
\end{aligned}
$$
Quindi la retta $y = 2x - 5$ è un asintoto obliquo, a destra e a sinistra.
:::

:::osservazione{#asintoti-funzioni-razionali titolo="Asintoti delle funzioni razionali fratte"}
Sia $f(x) = \dfrac{N(x)}{D(x)}$, con $D$ polinomio diverso dal polinomio nullo. Se $N$ è il polinomio nullo, la funzione vale $0$ sul suo dominio e ha asintoto orizzontale $y=0$ a entrambi gli infiniti. Negli altri casi, per studiare gli asintoti si usa la frazione ridotta, cioè si semplificano i fattori comuni. Gli zeri del denominatore originale rimangono esclusi dal dominio. Gli asintoti orizzontali e obliqui dipendono dai gradi dei due polinomi della frazione ridotta.

- se il grado di $N$ è minore del grado di $D$, l'asintoto orizzontale è $y = 0$;
- se i gradi sono uguali, l'asintoto orizzontale è $y = \dfrac{a}{b}$, dove $a$ e $b$ sono i coefficienti dei termini di grado massimo di $N$ e di $D$;
- se il grado di $N$ supera di $1$ il grado di $D$, c'è un asintoto obliquo, e si trova con la divisione tra polinomi;
- se il grado di $N$ supera di $2$ o più il grado di $D$, non ci sono asintoti orizzontali né obliqui.

Gli asintoti verticali sono le rette $x=x_0$ per gli zeri reali del denominatore ridotto. Se un fattore si cancella completamente dal denominatore, nel punto escluso il limite è finito e la discontinuità è eliminabile. Nel caso dell'asintoto obliquo, la divisione di $N$ per $D$ dà un quoziente $Q(x) = mx + q$ e un resto $R(x)$, e si ha $f(x) = mx + q + \dfrac{R(x)}{D(x)}$. Il resto ha grado minore di $D$, quindi l'ultima frazione tende a $0$. Per $\dfrac{2x^2 - 3x}{x + 1}$ la divisione dà $2x^2 - 3x = (x + 1)(2x - 5) + 5$, e si ritrova l'asintoto $y = 2x - 5$.
:::

:::attenzione
Un limite $m$ finito e diverso da $0$ non basta, perché per avere un asintoto obliquo serve anche $q$ finito. La funzione $f(x) = x + \ln x$ ha
$$
m = \lim_{x \to +\infty} \left( 1 + \frac{\ln x}{x} \right) = 1 ,
\qquad
\lim_{x \to +\infty} \big( f(x) - x \big) = \lim_{x \to +\infty} \ln x = +\infty ,
$$
quindi il grafico *non* ha asintoto obliquo. Inoltre l'asintoto destro e quello sinistro possono essere diversi: per $\sqrt{x^2 + 1}$ si trovano $y = x$ a destra e $y = -x$ a sinistra, perché
$$
\sqrt{x^2+1}-|x|=\frac{1}{\sqrt{x^2+1}+|x|}\longrightarrow 0
\qquad (x\to\pm\infty).
$$
A destra $|x|=x$ e a sinistra $|x|=-x$.
:::

## Grafico probabile di una funzione

:::osservazione{#grafico-probabile titolo="Schema per il grafico probabile"}
Il **grafico probabile** di una funzione è un disegno approssimato del grafico, ottenuto senza le derivate. Si ricavano nell'ordine:

1. il dominio $D$;
2. le eventuali simmetrie. Se il dominio è simmetrico rispetto a $0$, si confrontano $f(-x)$ e $f(x)$ per verificare se $f$ è pari o dispari;
3. le intersezioni con gli assi;
4. il segno di $f$, cioè dove il grafico sta sopra e dove sta sotto l'asse $x$;
5. i limiti agli estremi del dominio e nei punti esclusi, quindi gli asintoti e i punti di discontinuità.

Il disegno collega i tratti in modo coerente con il segno e i limiti. Per determinare massimi, minimi e concavità serve un’analisi ulteriore, descritta nell’argomento su massimi, minimi, flessi e studio di funzione.
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
