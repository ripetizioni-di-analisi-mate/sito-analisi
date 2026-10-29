---
titolo: Teoremi del calcolo differenziale
sommario: Che cosa affermano i teoremi di Fermat, Rolle, Lagrange e Cauchy e qual è il loro significato geometrico, come dal teorema di Lagrange si ricavano il criterio di monotonia e le proprietà delle funzioni con derivata nulla, e come si calcolano i limiti nelle forme indeterminate con il teorema di De L'Hôpital.
---

## Teorema di Fermat

:::definizione{#estremi-relativi titolo="Massimi e minimi relativi"}
Sia $f$ definita in un intervallo $I$ e sia $x_0$ un punto di $I$. Il punto $x_0$ è un **punto di massimo relativo** di $f$ se esiste un intorno $I(x_0)$ tale che
$$
f(x) \leq f(x_0) \qquad \text{per ogni } x \text{ di } I(x_0) \text{ che appartiene a } I .
$$
Con la disuguaglianza $f(x) \geq f(x_0)$ si definisce il **punto di minimo relativo**. In altre parole, il valore $f(x_0)$ si confronta soltanto con i valori di $f$ nei punti vicini a $x_0$. Per $f(x) = x^3 - 3x$ si ha $f(-1) = 2$, e nei punti vicini a $-1$ la funzione assume valori minori di $2$, quindi $x_0 = -1$ è un punto di massimo relativo. Il valore $2$ non è però il più grande valore di $f$, perché per esempio $f(3) = 18$. I massimi e i minimi relativi e assoluti si studiano in dettaglio nell'argomento su massimi, minimi, flessi e studio di funzione; qui servono per enunciare il teorema di Fermat.
:::

:::richiamo{titolo="Teorema della permanenza del segno"}
Se $\displaystyle\lim_{h \to 0} g(h) = \ell$ e $g(h) \geq 0$ in un intorno di $0$, escluso al più $h = 0$, allora $\ell \geq 0$. Lo stesso vale con $\leq$ al posto di $\geq$, e per il limite destro e il limite sinistro.
:::

::::teorema{#teorema-fermat titolo="Teorema di Fermat"}
Sia $f$ definita in un intervallo $I$ e sia $x_0$ un punto interno a $I$ che è di massimo relativo o di minimo relativo per $f$. Se $f$ è derivabile in $x_0$, allora
$$
f'(x_0) = 0 .
$$
Un punto in cui la derivata si annulla si chiama **punto stazionario**. Il significato geometrico del teorema è che in un massimo o in un minimo relativo interno, se esiste la retta tangente, questa è orizzontale. Per $f(x) = x^3 - 3x$ si ha $f'(x) = 3x^2 - 3$, e infatti nel massimo relativo $x = -1$ e nel minimo relativo $x = 1$ la derivata vale $3 - 3 = 0$. Il teorema serve a cercare i massimi e i minimi di una funzione derivabile, perché li restringe ai punti in cui $f'(x) = 0$.

::grafico{f="x^3-3*x" punti="-1,2,pieno;1,-2,pieno" segmenti="-2,2,0,2;0,-2,2,-2" xmin=-3 xmax=3 ymin=-4 ymax=4 titolo="Nel massimo relativo $(-1, 2)$ e nel minimo relativo $(1, -2)$ di $f(x) = x^3 - 3x$ le rette tangenti, tratteggiate, sono orizzontali, perché $f'(-1) = f'(1) = 0$"}

:::dimostrazione
L'idea è studiare il segno del rapporto incrementale a destra e a sinistra di $x_0$. Si suppone che $x_0$ sia un punto di massimo relativo; il caso del minimo è analogo. Poiché $x_0$ è interno a $I$, per $h$ abbastanza piccolo, positivo o negativo, il punto $x_0 + h$ appartiene all'intorno della definizione, quindi
$$
f(x_0 + h) - f(x_0) \leq 0 .
$$
Per $h > 0$ il rapporto incrementale $\dfrac{f(x_0 + h) - f(x_0)}{h}$ ha numeratore $\leq 0$ e denominatore positivo, perciò è $\leq 0$. Per la permanenza del segno il suo limite destro è $\leq 0$, cioè $f'_+(x_0) \leq 0$.

Per $h < 0$ il numeratore è ancora $\leq 0$ e il denominatore è negativo, perciò il rapporto incrementale è $\geq 0$. Allo stesso modo il suo limite sinistro è $\geq 0$, cioè $f'_-(x_0) \geq 0$.

Poiché $f$ è derivabile in $x_0$, la derivata destra e la derivata sinistra sono entrambe uguali a $f'(x_0)$. Quindi $f'(x_0) \leq 0$ e $f'(x_0) \geq 0$, e perciò $f'(x_0) = 0$.
:::
::::

:::attenzione
Un punto stazionario può non essere né di massimo né di minimo. La funzione $f(x) = x^3$ ha $f'(0) = 0$, ma è crescente, perché $x_1 < x_2$ implica $x_1^3 < x_2^3$; quindi in $0$ non ha né un massimo né un minimo relativo. Anche l'ipotesi che $x_0$ sia *interno* è necessaria. La funzione $f(x) = x$ sull'intervallo $[0, 1]$ ha massimo nell'estremo $x_0 = 1$, ma la sua derivata vale $1$ in ogni punto.
:::

## Teorema di Rolle

:::richiamo{titolo="Teorema di Weierstrass"}
Se $f$ è continua nell'intervallo chiuso e limitato $[a, b]$, allora $f$ assume in $[a, b]$ un valore massimo $M$ e un valore minimo $m$.
:::

::::teorema{#teorema-rolle titolo="Teorema di Rolle"}
Sia $f$ una funzione tale che
$$
\begin{cases}
f \text{ è continua in } [a, b] \\
f \text{ è derivabile in } (a, b) \\
f(a) = f(b)
\end{cases}
$$
Allora esiste almeno un punto $c$ di $(a, b)$ tale che $f'(c) = 0$.

Il significato geometrico è il seguente. Se i punti del grafico di ascissa $a$ e $b$ hanno la stessa ordinata, la retta che li congiunge è orizzontale, e in almeno un punto interno la tangente al grafico è anch'essa orizzontale. Per esempio $f(x) = x^2 - 4x + 3$ è un polinomio, quindi è continua e derivabile in $\mathbb{R}$, e nell'intervallo $[0, 4]$ si ha $f(0) = f(4) = 3$. Le ipotesi sono soddisfatte, e infatti $f'(x) = 2x - 4$ si annulla in $c = 2$, che appartiene a $(0, 4)$.

::grafico{f="x^2-4*x+3" punti="0,3,pieno,A;4,3,pieno,B;2,-1,pieno" segmenti="0,3,4,3;1,-1,3,-1" xmin=-1 xmax=5 ymin=-2 ymax=5 titolo="Per $f(x) = x^2 - 4x + 3$ si ha $f(0) = f(4) = 3$, quindi il segmento $AB$ è orizzontale; nel punto $c = 2$ anche la tangente è orizzontale"}

:::dimostrazione
L'idea è mostrare che il massimo o il minimo di $f$ è assunto in un punto interno, e poi applicare il teorema di Fermat. Poiché $f$ è continua in $[a, b]$, per il teorema di Weierstrass $f$ assume in $[a, b]$ un valore massimo $M$ e un valore minimo $m$. Si distinguono due casi.

- Se $M = m$, il valore massimo e il valore minimo coincidono, quindi $f$ è costante in $[a, b]$. Allora $f'(x) = 0$ per ogni $x$ di $(a, b)$, e come $c$ si può scegliere un punto qualsiasi di $(a, b)$.
- Se $M \neq m$, almeno uno dei due valori è diverso dal valore comune $f(a) = f(b)$. Si supponga che sia $M$; il caso di $m$ è analogo. Allora $M$ è assunto in un punto $c$ che non è né $a$ né $b$, cioè in un punto interno all'intervallo. Il punto $c$ è di massimo per $f$ in tutto $[a, b]$, quindi è anche di massimo relativo. Inoltre $f$ è derivabile in $c$, perché $c$ appartiene a $(a, b)$. Per il **teorema di Fermat** si ha perciò $f'(c) = 0$.
:::
::::

:::attenzione
Se una delle ipotesi non è soddisfatta, il punto $c$ può non esistere. La funzione $f(x) = |x|$ nell'intervallo $[-1, 1]$ è continua e ha $f(-1) = f(1) = 1$, ma non è derivabile in $0$. La sua derivata vale $-1$ per $x < 0$ e $1$ per $x > 0$, quindi *non* si annulla in alcun punto. Allo stesso modo la funzione che vale $x$ per $0 \leq x < 1$ e vale $0$ per $x = 1$ ha $f(0) = f(1) = 0$ ed è derivabile in $(0, 1)$, ma non è continua in $1$; la sua derivata in $(0, 1)$ vale sempre $1$.
:::

:::esempio{titolo="Verifica delle ipotesi e ricerca dei punti"}
Si considera $f(x) = \sin x + \cos x$ nell'intervallo $\left[ 0, \dfrac{\pi}{2} \right]$. La funzione è continua e derivabile in $\mathbb{R}$, perché è somma di funzioni continue e derivabili. Inoltre
$$
f(0) = 0 + 1 = 1 ,
\qquad
f\left( \frac{\pi}{2} \right) = 1 + 0 = 1 ,
$$
quindi il teorema di Rolle si applica. La derivata è $f'(x) = \cos x - \sin x$, e l'equazione $\cos x = \sin x$ ha in $\left( 0, \dfrac{\pi}{2} \right)$ la sola soluzione $c = \dfrac{\pi}{4}$, dove seno e coseno valgono entrambi $\dfrac{\sqrt{2}}{2}$.
:::

## Teorema di Lagrange

::::teorema{#teorema-lagrange titolo="Teorema di Lagrange"}
Sia $f$ una funzione tale che
$$
\begin{cases}
f \text{ è continua in } [a, b] \\
f \text{ è derivabile in } (a, b)
\end{cases}
$$
Allora esiste almeno un punto $c$ di $(a, b)$ tale che
$$
f'(c) = \frac{f(b) - f(a)}{b - a} .
$$
Il teorema si chiama anche **teorema del valor medio**. Il quoziente $\dfrac{f(b) - f(a)}{b - a}$ è il coefficiente angolare della retta che congiunge i punti $A\big( a, f(a) \big)$ e $B\big( b, f(b) \big)$ del grafico. Il significato geometrico è quindi che in almeno un punto interno la tangente al grafico è *parallela* alla retta $AB$. Il teorema di Rolle è il caso particolare in cui $f(a) = f(b)$.

Per esempio $f(x) = \sqrt{x}$ è continua in $[0, 4]$ ed è derivabile in $(0, 4)$, anche se non è derivabile in $0$. La retta $AB$ ha coefficiente angolare $\dfrac{2 - 0}{4 - 0} = \dfrac{1}{2}$, e l'equazione $f'(c) = \dfrac{1}{2\sqrt{c}} = \dfrac{1}{2}$ dà $c = 1$. La tangente nel punto $(1, 1)$ è $y = \dfrac{x}{2} + \dfrac{1}{2}$.

::grafico{f="sqrt(x);x/2+1/2" punti="0,0,pieno,A;4,2,pieno,B;1,1,pieno" segmenti="0,0,4,2" xmin=-1 xmax=5 ymin=-1 ymax=3 uguale=1 legenda="y = \sqrt{x};y = \dfrac{x}{2} + \dfrac{1}{2}" titolo="Il segmento $AB$ per $(0, 0)$ e $(4, 2)$ ha coefficiente angolare $\dfrac{1}{2}$; la tangente al grafico di $\sqrt{x}$ nel punto di ascissa $c = 1$ ha lo stesso coefficiente angolare ed è parallela ad $AB$"}

:::dimostrazione
L'idea è sottrarre a $f$ la retta $AB$ e applicare il teorema di Rolle alla differenza. Sia $m = \dfrac{f(b) - f(a)}{b - a}$. La retta $AB$ ha equazione $y = f(a) + m\,(x - a)$, e si pone
$$
g(x) = f(x) - f(a) - m\,(x - a) .
$$
La funzione $g$ è continua in $[a, b]$ e derivabile in $(a, b)$, perché è la differenza tra $f$ e un polinomio di primo grado. Agli estremi si ha
$$
g(a) = f(a) - f(a) - 0 = 0 ,
\qquad
g(b) = f(b) - f(a) - \frac{f(b) - f(a)}{b - a}\,(b - a) = 0 .
$$
Quindi $g(a) = g(b)$, e $g$ soddisfa le ipotesi del teorema di Rolle. Esiste perciò un punto $c$ di $(a, b)$ con $g'(c) = 0$. Poiché $g'(x) = f'(x) - m$, l'uguaglianza $g'(c) = 0$ significa $f'(c) = m$, che è la tesi.
:::
::::

:::esempio{titolo="Punto di Lagrange di una parabola"}
Per $f(x) = x^2$ nell'intervallo $[1, 3]$ le ipotesi sono soddisfatte, perché $f$ è un polinomio. Il coefficiente angolare della retta $AB$ è $\dfrac{9 - 1}{3 - 1} = 4$, e l'equazione $f'(c) = 2c = 4$ dà $c = 2$, che è il punto medio dell'intervallo. Per ogni parabola $y = px^2 + qx + r$ il punto di Lagrange è il punto medio di $[a, b]$, perché $\dfrac{f(b) - f(a)}{b - a} = p\,(a + b) + q$ e $f'(c) = 2pc + q$.
:::

:::osservazione{#lagrange-velocita titolo="Lettura fisica del teorema di Lagrange"}
Sia $s(t)$ la posizione di un'auto lungo una strada all'istante $t$. Il quoziente $\dfrac{s(t_2) - s(t_1)}{t_2 - t_1}$ è la velocità media tra gli istanti $t_1$ e $t_2$, mentre $s'(t)$ è la velocità istantanea. Il moto di un'auto è continuo e derivabile, quindi per il teorema di Lagrange esiste un istante tra $t_1$ e $t_2$ in cui la velocità istantanea è uguale alla velocità media. Per esempio, se un'auto percorre $150\,\mathrm{km}$ in $2$ ore, in almeno un istante il tachimetro segna $75\,\mathrm{km/h}$. Su questo fatto si basa il controllo della velocità media sulle autostrade.
:::

:::esempio{titolo="Stima di una radice con il teorema di Lagrange"}
Il teorema si scrive anche nella forma $f(b) - f(a) = f'(c)\,(b - a)$, che permette di stimare una differenza di valori. Per $f(x) = \sqrt{x}$ nell'intervallo $[100, 101]$ esiste $c$ di $(100, 101)$ con
$$
\sqrt{101} - \sqrt{100} = \frac{1}{2\sqrt{c}} \cdot (101 - 100) = \frac{1}{2\sqrt{c}} .
$$
Poiché $c > 100$, si ha $\sqrt{c} > 10$, quindi $\dfrac{1}{2\sqrt{c}} < \dfrac{1}{20}$. Ne segue che $\sqrt{101} < 10 + \dfrac{1}{20} = 10{,}05$. Il valore vero è $\sqrt{101} = 10{,}0498\ldots$
:::

## Conseguenze del teorema di Lagrange

::::teorema{#derivata-nulla titolo="Funzioni con derivata nulla"}
Sia $f$ derivabile in un intervallo $I$, con $f'(x) = 0$ per ogni $x$ di $I$. Allora $f$ è costante in $I$.

Il viceversa è già noto dall'argomento sulle derivate, perché la derivata di una costante è $0$. Il teorema serve a dimostrare identità tra funzioni. Per esempio la funzione $f(x) = \sin^2 x + \cos^2 x$ ha derivata $2\sin x \cos x - 2\cos x \sin x = 0$ in $\mathbb{R}$, quindi è costante, e il suo valore è $f(0) = 0 + 1 = 1$.

:::dimostrazione
Siano $x_1$ e $x_2$ due punti qualsiasi di $I$, con $x_1 < x_2$. La funzione $f$ è derivabile in $I$, quindi è continua in $[x_1, x_2]$ ed è derivabile in $(x_1, x_2)$. Per il **teorema di Lagrange** esiste $c$ di $(x_1, x_2)$ con
$$
f(x_2) - f(x_1) = f'(c)\,(x_2 - x_1) .
$$
Poiché $f'(c) = 0$, il secondo membro è nullo, e perciò $f(x_2) = f(x_1)$. I due punti sono arbitrari, quindi $f$ assume lo stesso valore in tutti i punti di $I$.
:::
::::

:::teorema{#stessa-derivata titolo="Funzioni con la stessa derivata"}
Siano $f$ e $g$ derivabili in un intervallo $I$, con $f'(x) = g'(x)$ per ogni $x$ di $I$. Allora esiste una costante $k$ tale che
$$
f(x) = g(x) + k \qquad \text{per ogni } x \text{ di } I .
$$
La tesi segue dal teorema sulle funzioni con derivata nulla applicato alla differenza $f - g$, la cui derivata è $f' - g' = 0$. Per esempio le funzioni che hanno derivata $2x$ in $\mathbb{R}$ sono tutte e sole le funzioni $x^2 + k$; tra queste, quella che vale $5$ in $x = 1$ è $x^2 + 4$. Il teorema servirà nell'argomento sugli integrali indefiniti.
:::

:::attenzione
L'ipotesi che $I$ sia un *intervallo* è necessaria. La funzione $f(x) = \arctan x + \arctan \dfrac{1}{x}$ è definita per $x \neq 0$ e ha derivata
$$
f'(x) = \frac{1}{1 + x^2} + \frac{1}{1 + \dfrac{1}{x^2}} \cdot \left( -\frac{1}{x^2} \right) = \frac{1}{1 + x^2} - \frac{1}{x^2 + 1} = 0 .
$$
Tuttavia $f$ non è costante, perché $f(1) = \dfrac{\pi}{4} + \dfrac{\pi}{4} = \dfrac{\pi}{2}$ e $f(-1) = -\dfrac{\pi}{2}$. Il dominio di $f$ è formato da due intervalli, e $f$ è costante in ciascuno dei due.

::grafico{f="atan(x)+atan(1/x)" legenda="y = \arctan x + \arctan \dfrac{1}{x}" punti="0,1.5708,vuoto;0,-1.5708,vuoto" xmin=-4 xmax=4 ymin=-2 ymax=2 titolo="La funzione $\arctan x + \arctan \dfrac{1}{x}$ ha derivata nulla in ogni punto del dominio, ma vale $\dfrac{\pi}{2}$ per $x > 0$ e $-\dfrac{\pi}{2}$ per $x < 0$"}

:::

::::teorema{#criterio-monotonia titolo="Criterio di monotonia"}
Sia $f$ derivabile in un intervallo $I$.

- Se $f'(x) > 0$ per ogni $x$ di $I$, allora $f$ è **strettamente crescente** in $I$, cioè $x_1 < x_2$ implica $f(x_1) < f(x_2)$.
- Se $f'(x) < 0$ per ogni $x$ di $I$, allora $f$ è **strettamente decrescente** in $I$, cioè $x_1 < x_2$ implica $f(x_1) > f(x_2)$.

Il criterio permette di trovare gli intervalli in cui una funzione cresce o decresce studiando il segno della derivata. Per $f(x) = x^3 - 6x^2 + 9x$ si ha
$$
f'(x) = 3x^2 - 12x + 9 = 3\,(x - 1)(x - 3) .
$$
Il trinomio è positivo per $x < 1$ e per $x > 3$, ed è negativo per $1 < x < 3$. Quindi $f$ è crescente in $(-\infty, 1]$ e in $[3, +\infty)$ ed è decrescente in $[1, 3]$. Gli estremi $1$ e $3$ si possono includere negli intervalli, perché il criterio vale anche per una funzione continua in $[a, b]$ con derivata positiva, o negativa, in $(a, b)$. Il criterio vale inoltre se $f'$ si annulla soltanto in un numero finito di punti di $I$, come accade per $x^3$ in $0$.

::grafico{f="x^3-6*x^2+9*x;3*x^2-12*x+9" punti="1,4,pieno;3,0,pieno" segmenti="1,0,1,4" xmin=-1 xmax=5 ymin=-4 ymax=8 legenda="y = x^3 - 6x^2 + 9x;y = 3x^2 - 12x + 9" titolo="La derivata $f'(x) = 3x^2 - 12x + 9$ è negativa tra $1$ e $3$, dove $f(x) = x^3 - 6x^2 + 9x$ decresce, ed è positiva fuori da $[1, 3]$, dove $f$ cresce"}

:::dimostrazione
Si dimostra il primo caso; il secondo è analogo. Siano $x_1$ e $x_2$ due punti di $I$, con $x_1 < x_2$. La funzione $f$ è continua in $[x_1, x_2]$ ed è derivabile in $(x_1, x_2)$, quindi per il **teorema di Lagrange** esiste $c$ di $(x_1, x_2)$ con
$$
f(x_2) - f(x_1) = f'(c)\,(x_2 - x_1) .
$$
Il fattore $f'(c)$ è positivo per ipotesi, e il fattore $x_2 - x_1$ è positivo perché $x_1 < x_2$. Il prodotto è perciò positivo, quindi $f(x_2) > f(x_1)$.
:::
::::

:::osservazione{#monotonia-derivata-segno titolo="Il viceversa del criterio"}
Se $f$ è derivabile e crescente in un intervallo, allora $f'(x) \geq 0$ in ogni punto. Infatti, per $h > 0$ e per $h < 0$, il numeratore e il denominatore del rapporto incrementale $\dfrac{f(x + h) - f(x)}{h}$ hanno lo stesso segno, quindi il rapporto è $\geq 0$ e il suo limite è $\geq 0$ per la permanenza del segno. La derivata di una funzione strettamente crescente può però annullarsi in qualche punto, come quella di $x^3$ in $0$. Dal teorema di Lagrange si ricava anche il criterio di derivabilità visto nell'argomento sulle derivate.
:::

:::attenzione
Il criterio di monotonia richiede un *intervallo*. La funzione $f(x) = \dfrac{1}{x}$ ha derivata $-\dfrac{1}{x^2} < 0$ in ogni punto del dominio, ma non è decrescente nel dominio, perché $-1 < 1$ e $f(-1) = -1 < f(1) = 1$. La funzione è decrescente in $(-\infty, 0)$ e in $(0, +\infty)$, separatamente.
:::

## Teorema di Cauchy

:::teorema{#teorema-cauchy titolo="Teorema di Cauchy"}
Siano $f$ e $g$ due funzioni tali che
$$
\begin{cases}
f \text{ e } g \text{ sono continue in } [a, b] \\
f \text{ e } g \text{ sono derivabili in } (a, b) \\
g'(x) \neq 0 \text{ per ogni } x \text{ di } (a, b)
\end{cases}
$$
Allora $g(b) \neq g(a)$ ed esiste almeno un punto $c$ di $(a, b)$ tale che
$$
\frac{f(b) - f(a)}{g(b) - g(a)} = \frac{f'(c)}{g'(c)} .
$$
Il teorema di Lagrange è il caso particolare $g(x) = x$, perché allora $g(b) - g(a) = b - a$ e $g'(c) = 1$. Dal teorema di Rolle segue che $g(b) \neq g(a)$, perché altrimenti $g'$ si annullerebbe in un punto di $(a, b)$. La tesi si ottiene applicando il teorema di Rolle alla funzione
$$
h(x) = f(x)\,\big( g(b) - g(a) \big) - g(x)\,\big( f(b) - f(a) \big) ,
$$
che in $a$ e in $b$ assume lo stesso valore $f(a)\,g(b) - g(a)\,f(b)$. Il teorema di Cauchy serve a giustificare il teorema di De L'Hôpital.
:::

:::esempio{titolo="Punto di Cauchy per due potenze"}
Siano $f(x) = x^2$ e $g(x) = x^3$ nell'intervallo $[1, 2]$. Le due funzioni sono polinomi, e $g'(x) = 3x^2$ è diversa da $0$ in $(1, 2)$, quindi le ipotesi sono soddisfatte. Si ha
$$
\frac{f(2) - f(1)}{g(2) - g(1)} = \frac{4 - 1}{8 - 1} = \frac{3}{7} ,
\qquad
\frac{f'(c)}{g'(c)} = \frac{2c}{3c^2} = \frac{2}{3c} .
$$
L'equazione $\dfrac{2}{3c} = \dfrac{3}{7}$ dà $9c = 14$, cioè $c = \dfrac{14}{9} \approx 1{,}56$, che appartiene a $(1, 2)$.
:::

## Teorema di De L'Hôpital

:::teorema{#teorema-de-l-hopital titolo="Teorema di De L'Hôpital"}
Siano $f$ e $g$ derivabili in un intorno $I(x_0)$, escluso al più il punto $x_0$, con $g'(x) \neq 0$ in questo intorno. Si supponga che il limite $\displaystyle\lim_{x \to x_0} \frac{f(x)}{g(x)}$ si presenti nella forma indeterminata $\dfrac{0}{0}$ oppure $\dfrac{\infty}{\infty}$. Se esiste il limite del quoziente delle derivate, finito o infinito, allora
$$
\lim_{x \to x_0} \frac{f(x)}{g(x)} = \lim_{x \to x_0} \frac{f'(x)}{g'(x)} .
$$
Il teorema vale anche per il limite destro e per il limite sinistro, e per $x \to +\infty$ e $x \to -\infty$. Il numeratore e il denominatore si derivano *separatamente*; il quoziente $\dfrac{f}{g}$ non si deriva con la regola del quoziente. Per esempio il limite $\displaystyle\lim_{x \to 1} \frac{\ln x}{x^2 - 1}$ si presenta nella forma $\dfrac{0}{0}$, e
$$
\lim_{x \to 1} \frac{\ln x}{x^2 - 1} = \lim_{x \to 1} \frac{\dfrac{1}{x}}{2x} = \lim_{x \to 1} \frac{1}{2x^2} = \frac{1}{2} .
$$
Nel caso $\dfrac{0}{0}$ con $x_0$ finito la dimostrazione si ricava dal teorema di Cauchy; il caso generale si studia all'università.
:::

:::esempio{titolo="Applicazione ripetuta del teorema"}
Se anche il limite di $\dfrac{f'}{g'}$ si presenta in forma indeterminata, il teorema si applica di nuovo, alle derivate seconde. Il limite
$$
\lim_{x \to 0} \frac{e^{x} - 1 - x}{x^2}
$$
è nella forma $\dfrac{0}{0}$. Derivando numeratore e denominatore si ottiene $\dfrac{e^{x} - 1}{2x}$, che per $x \to 0$ è ancora nella forma $\dfrac{0}{0}$. Derivando ancora si ottiene $\dfrac{e^{x}}{2}$, che tende a $\dfrac{1}{2}$. Per il teorema di De L'Hôpital, applicato due volte, il limite di partenza vale quindi $\dfrac{1}{2}$.
:::

:::attenzione
Prima di applicare il teorema si controlla che il limite sia davvero in una delle forme $\dfrac{0}{0}$ o $\dfrac{\infty}{\infty}$. Il limite $\displaystyle\lim_{x \to 0} \frac{x + 1}{x + 2}$ *non* è in forma indeterminata e vale $\dfrac{1}{2}$, per sostituzione; il quoziente delle derivate è invece $\dfrac{1}{1} = 1$, che è un valore sbagliato. Inoltre il teorema dà il limite solo se il limite di $\dfrac{f'}{g'}$ esiste. Per $\displaystyle\lim_{x \to +\infty} \frac{x + \sin x}{x}$ il quoziente delle derivate è $1 + \cos x$, che non ha limite; il limite di partenza esiste comunque e vale $1$, perché $\dfrac{x + \sin x}{x} = 1 + \dfrac{\sin x}{x}$ e $\dfrac{\sin x}{x}$ tende a $0$.
:::

:::teorema{#confronto-infiniti titolo="Gerarchia degli infiniti"}
Per ogni $a > 0$ e per ogni $n$ naturale, $n \geq 1$, valgono
$$
\lim_{x \to +\infty} \frac{\ln x}{x^{a}} = 0 ,
\qquad
\lim_{x \to +\infty} \frac{x^{n}}{e^{x}} = 0 .
$$
In altre parole, per $x \to +\infty$ il logaritmo è un infinito di ordine inferiore a ogni potenza di $x$, e ogni potenza di $x$ è un infinito di ordine inferiore a $e^{x}$. I due limiti sono nella forma $\dfrac{\infty}{\infty}$. Per il primo il teorema di De L'Hôpital dà
$$
\lim_{x \to +\infty} \frac{\dfrac{1}{x}}{a\,x^{a-1}} = \lim_{x \to +\infty} \frac{1}{a\,x^{a}} = 0 .
$$
Per il secondo ogni applicazione del teorema abbassa di $1$ l'esponente di $x$ e lascia $e^{x}$ al denominatore; dopo $n$ applicazioni si ottiene $\dfrac{n!}{e^{x}}$, che tende a $0$. Per esempio $\displaystyle\lim_{x \to +\infty} \frac{x^2}{e^{x}} = \lim_{x \to +\infty} \frac{2x}{e^{x}} = \lim_{x \to +\infty} \frac{2}{e^{x}} = 0$. In questo modo si dimostrano, per la base $e$, i limiti della gerarchia degli infiniti enunciata nell'argomento sui limiti.
:::

## Forme indeterminate 0 · ∞ e ∞ − ∞

:::osservazione{#forma-zero-per-infinito titolo="Forma indeterminata zero per infinito"}
Sia $\displaystyle\lim_{x \to x_0} f(x) = 0$ e $\displaystyle\lim_{x \to x_0} g(x) = \infty$. Il prodotto $f \cdot g$ si scrive come quoziente in uno dei due modi
$$
f \cdot g = \frac{f}{\dfrac{1}{g}}
\qquad \text{oppure} \qquad
f \cdot g = \frac{g}{\dfrac{1}{f}} ,
$$
il primo nella forma $\dfrac{0}{0}$ e il secondo nella forma $\dfrac{\infty}{\infty}$, e al quoziente si applica il teorema di De L'Hôpital. Per $\displaystyle\lim_{x \to 0^+} x \ln x$ si porta $x$ al denominatore:
$$
\lim_{x \to 0^+} x \ln x = \lim_{x \to 0^+} \frac{\ln x}{\dfrac{1}{x}} = \lim_{x \to 0^+} \frac{\dfrac{1}{x}}{-\dfrac{1}{x^2}} = \lim_{x \to 0^+} (-x) = 0 .
$$
Si sceglie la scrittura in cui le derivate sono più semplici. Con l'altra scrittura, $\dfrac{x}{\dfrac{1}{\ln x}}$, la derivata del denominatore è $-\dfrac{1}{x \ln^2 x}$, e il quoziente delle derivate è più complicato di quello di partenza.

::grafico{f="x*log(x)" punti="0,0,vuoto" xmin=-1 xmax=3 ymin=-1 ymax=3 titolo="Il grafico di $x \ln x$ si avvicina all'origine per $x \to 0^+$, perché il limite nella forma $0 \cdot \infty$ vale $0$; il valore minimo è $-\dfrac{1}{e}$, nel punto $x = \dfrac{1}{e}$"}

:::

:::osservazione{#forma-infinito-meno-infinito titolo="Forma indeterminata infinito meno infinito"}
Una differenza di due funzioni che tendono a $+\infty$, oppure entrambe a $-\infty$, si trasforma in un quoziente, di solito riducendo le frazioni allo stesso denominatore. Il limite $\displaystyle\lim_{x \to 0^+} \left( \frac{1}{x} - \frac{1}{e^{x} - 1} \right)$ è nella forma $\infty - \infty$. Con il denominatore comune si ottiene
$$
\lim_{x \to 0^+} \frac{e^{x} - 1 - x}{x\,\left( e^{x} - 1 \right)} ,
$$
che è nella forma $\dfrac{0}{0}$. Derivando numeratore e denominatore si ottiene $\dfrac{e^{x} - 1}{e^{x} - 1 + x\,e^{x}}$, ancora nella forma $\dfrac{0}{0}$. Derivando di nuovo si ottiene
$$
\frac{e^{x}}{2e^{x} + x\,e^{x}} = \frac{1}{2 + x} ,
$$
che tende a $\dfrac{1}{2}$. Perciò il limite vale $\dfrac{1}{2}$, e lo stesso valore si ottiene per $x \to 0^-$.
:::

## Forme indeterminate 1^∞, 0^0 e ∞^0

:::osservazione{#forme-esponenziali titolo="Forme indeterminate con la variabile all'esponente"}
Un limite della forma $\displaystyle\lim_{x \to x_0} f(x)^{g(x)}$, con $f(x) > 0$, si calcola scrivendo la potenza come esponenziale di base $e$:
$$
f(x)^{g(x)} = e^{\,g(x) \ln f(x)} .
$$
Se l'esponente $g(x) \ln f(x)$ tende a $L$, allora $f(x)^{g(x)}$ tende a $e^{L}$, perché la funzione esponenziale è continua. Il limite si riduce così al limite dell'esponente. Nelle forme $1^{\infty}$, $0^{0}$ e $\infty^{0}$ l'esponente è nella forma $0 \cdot \infty$, e si calcola scrivendolo come quoziente e applicando il teorema di De L'Hôpital.

- Forma $0^{0}$: per $\displaystyle\lim_{x \to 0^+} x^{x}$ l'esponente è $x \ln x$, che tende a $0$, quindi il limite è $e^{0} = 1$.
- Forma $1^{\infty}$: per $\displaystyle\lim_{x \to 0} (\cos x)^{\frac{1}{x^2}}$ l'esponente è $\dfrac{\ln \cos x}{x^2}$, nella forma $\dfrac{0}{0}$. Per il teorema di De L'Hôpital il suo limite è uguale a quello di $\dfrac{-\dfrac{\sin x}{\cos x}}{2x} = -\dfrac{1}{2 \cos x} \cdot \dfrac{\sin x}{x}$, che tende a $-\dfrac{1}{2}$. Quindi il limite è $e^{-\frac{1}{2}} = \dfrac{1}{\sqrt{e}}$.
- Forma $\infty^{0}$: per $\displaystyle\lim_{x \to +\infty} x^{\frac{1}{x}}$ l'esponente è $\dfrac{\ln x}{x}$, che tende a $0$ per la gerarchia degli infiniti. Quindi il limite è $e^{0} = 1$.

::grafico{f="x^x" punti="0,1,vuoto" xmin=-1 xmax=2 ymin=-1 ymax=4 titolo="Il grafico di $x^{x}$ per $x > 0$ si avvicina al punto $(0, 1)$, perché il limite nella forma $0^{0}$ vale $1$; per $x = 2$ la funzione vale $2^{2} = 4$"}

:::

:::attenzione
Le forme $1^{\infty}$, $0^{0}$ e $\infty^{0}$ si calcolano con il limite dell'esponente, e il risultato può essere un numero qualsiasi. Il limite $\displaystyle\lim_{x \to 0} (\cos x)^{\frac{1}{x^2}}$ è nella forma $1^{\infty}$ e vale $\dfrac{1}{\sqrt{e}}$, *non* $1$; il limite $\displaystyle\lim_{x \to +\infty} \left( 1 + \frac{1}{x} \right)^{x}$, nella stessa forma, vale $e$, come si è visto nell'argomento sui limiti.
:::
