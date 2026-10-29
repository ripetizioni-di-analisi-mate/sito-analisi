---
titolo: Derivate
sommario: Che cos'è la derivata di una funzione e che cosa rappresenta nel grafico, come si calcola con la definizione e con le regole di derivazione, quali sono i punti in cui una funzione non è derivabile, che cos'è il differenziale e come si usano le derivate in fisica per velocità, accelerazione e intensità di corrente.
---

## Rapporto incrementale e derivata

:::definizione{#rapporto-incrementale titolo="Rapporto incrementale"}
Sia $f$ una funzione definita in un intervallo $I$ e sia $x_0$ un punto di $I$. Quando la variabile passa da $x_0$ a $x_0 + h$, con $h \neq 0$ e $x_0 + h$ in $I$, il numero $h$ si chiama **incremento** della variabile e la differenza $f(x_0 + h) - f(x_0)$ si chiama incremento della funzione. Il **rapporto incrementale** di $f$ in $x_0$ è il quoziente
$$
\frac{f(x_0 + h) - f(x_0)}{h} .
$$
Nel grafico si considerano i punti $P\big( x_0, f(x_0) \big)$ e $Q\big( x_0 + h, f(x_0 + h) \big)$. La retta $PQ$ si chiama **secante**, e il rapporto incrementale è il suo coefficiente angolare, perché è la differenza delle ordinate divisa per la differenza delle ascisse. Per $f(x) = x^2$, $x_0 = 1$ e $h = 2$ il rapporto incrementale è
$$
\frac{f(3) - f(1)}{2} = \frac{9 - 1}{2} = 4 ,
$$
quindi la secante per $P(1, 1)$ e $Q(3, 9)$ ha coefficiente angolare $4$ ed equazione $y = 4x - 3$.

::grafico{f="x^2;4*x-3" punti="1,1,pieno,P;3,9,pieno,Q" segmenti="1,1,3,1;3,1,3,9" xmin=-2 xmax=4 ymin=-2 ymax=12 legenda="y = x^2;y = 4x - 3" titolo="La secante per $P(1, 1)$ e $Q(3, 9)$ ha coefficiente angolare $\dfrac{9 - 1}{3 - 1} = 4$, uguale al rapporto incrementale di $x^2$ in $x_0 = 1$ con $h = 2$"}

:::

:::esempio{titolo="Il rapporto incrementale quando l'incremento diventa piccolo"}
Per $f(x) = x^2$ e $x_0 = 1$, con $h$ qualsiasi diverso da $0$, si ha
$$
\frac{(1 + h)^2 - 1}{h} = \frac{1 + 2h + h^2 - 1}{h} = \frac{h\,(2 + h)}{h} = 2 + h .
$$
Con $h = 2$ il rapporto vale $4$, con $h = 1$ vale $3$, con $h = 0{,}1$ vale $2{,}1$ e con $h = 0{,}01$ vale $2{,}01$. Quando $h$ si avvicina a $0$ il rapporto incrementale si avvicina quindi a $2$. Questo numero è la derivata di $x^2$ in $1$, definita nel blocco che segue.
:::

:::definizione{#derivata titolo="Derivata in un punto"}
Un punto $x_0$ di un intervallo $I$ si dice **interno** a $I$ se esiste un intorno $I(x_0)$ contenuto in $I$, cioè se $x_0$ non è un estremo dell'intervallo. Sia $f$ definita in $I$ e sia $x_0$ interno a $I$. La funzione $f$ è **derivabile** in $x_0$ se esiste ed è *finito* il limite del rapporto incrementale per $h \to 0$. Questo limite si chiama **derivata** di $f$ in $x_0$ e si indica con $f'(x_0)$:
$$
f'(x_0) = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h} .
$$
Si usano anche i simboli $y'(x_0)$ e $\dfrac{df}{dx}(x_0)$. La derivata misura la rapidità con cui varia $f$ vicino a $x_0$. Dall'esempio precedente, per $f(x) = x^2$ si ha $f'(1) = \displaystyle\lim_{h \to 0} (2 + h) = 2$.
:::

:::esempio{titolo="Derivata di una funzione cubica con la definizione"}
Si calcola la derivata di $f(x) = x^3$ in $x_0 = 2$. Poiché $(2 + h)^3 = 8 + 12h + 6h^2 + h^3$, il rapporto incrementale è
$$
\frac{(2 + h)^3 - 8}{h} = \frac{12h + 6h^2 + h^3}{h} = 12 + 6h + h^2 .
$$
Per $h \to 0$ gli ultimi due termini tendono a $0$, quindi $f'(2) = 12$. Prima della semplificazione per $h$ il limite si presenta nella forma indeterminata $\dfrac{0}{0}$, come accade sempre nel calcolo di una derivata con la definizione.
:::

:::definizione{#derivata-destra-sinistra titolo="Derivata destra e derivata sinistra"}
Se si calcola il limite del rapporto incrementale solo per $h \to 0^+$, oppure solo per $h \to 0^-$, si ottengono la **derivata destra** e la **derivata sinistra** di $f$ in $x_0$:
$$
f'_+(x_0) = \lim_{h \to 0^+} \frac{f(x_0 + h) - f(x_0)}{h} ,
\qquad
f'_-(x_0) = \lim_{h \to 0^-} \frac{f(x_0 + h) - f(x_0)}{h} .
$$
Un limite esiste se e solo se il limite destro e il limite sinistro esistono e sono uguali, come si è visto nell'argomento sui limiti. Perciò $f$ è derivabile in $x_0$ se e *solo se* le due derivate esistono, sono finite e sono uguali. Per $f(x) = |x|$ e $x_0 = 0$ il rapporto incrementale è $\dfrac{|h|}{h}$, che vale $1$ per $h > 0$ e $-1$ per $h < 0$. Quindi $f'_+(0) = 1$ e $f'_-(0) = -1$, e la funzione $|x|$ *non* è derivabile in $0$.

Le derivate destra e sinistra servono anche negli estremi di un intervallo chiuso. Si dice che $f$ è derivabile in $[a, b]$ se è derivabile in ogni punto di $(a, b)$ e se esistono finite $f'_+(a)$ e $f'_-(b)$.
:::

:::definizione{#funzione-derivata titolo="Funzione derivata"}
Se $f$ è derivabile in ogni punto di un intervallo, si dice derivabile nell'intervallo. In questo caso a ogni $x$ si associa il numero $f'(x)$, e si ottiene una nuova funzione, la **funzione derivata** $f'$. Per $f(x) = x^2$ e $x$ qualsiasi il rapporto incrementale è
$$
\frac{(x + h)^2 - x^2}{h} = \frac{2xh + h^2}{h} = 2x + h ,
$$
che tende a $2x$ per $h \to 0$. Quindi $f'(x) = 2x$. Da questa formula si leggono tutte le derivate di $x^2$ senza rifare il limite. Per esempio $f'(1) = 2$, $f'(-3) = -6$ e $f'(0) = 0$.
:::

## Significato geometrico e retta tangente

:::definizione{#retta-tangente titolo="Retta tangente"}
Quando $h$ tende a $0$ il punto $Q$ si muove sul grafico verso $P$, e la secante $PQ$ ruota attorno a $P$. Se $f$ è derivabile in $x_0$, il coefficiente angolare della secante tende a $f'(x_0)$. La **retta tangente** al grafico di $f$ nel punto $P\big( x_0, f(x_0) \big)$ è la retta che passa per $P$ e ha coefficiente angolare $f'(x_0)$:
$$
y - f(x_0) = f'(x_0)\,(x - x_0) .
$$
Perciò $f'(x_0)$ è il coefficiente angolare della retta tangente nel punto di ascissa $x_0$; questo è il **significato geometrico** della derivata. Per $f(x) = x^2$ e $x_0 = 1$ si ha $f(1) = 1$ e $f'(1) = 2$, quindi la tangente è
$$
y - 1 = 2\,(x - 1) ,
\qquad
\text{cioè}
\qquad
y = 2x - 1 .
$$
Se $f'(x_0) = 0$ la tangente è orizzontale. Per $x^2$ questo accade in $x_0 = 0$, dove la tangente è l'asse $x$.

::grafico{f="x^2;2*x-1" punti="1,1,pieno,P" xmin=-2 xmax=4 ymin=-2 ymax=12 legenda="y = x^2;y = 2x - 1" titolo="La tangente al grafico di $x^2$ nel punto $P(1, 1)$ ha coefficiente angolare $f'(1) = 2$; le secanti per $P$ tendono a questa retta quando $h$ tende a $0$"}

:::

:::osservazione{#retta-normale titolo="Angolo della tangente e retta normale"}
Il coefficiente angolare di una retta è la tangente goniometrica dell'angolo $\alpha$ che la retta forma con il verso positivo dell'asse $x$. Perciò $f'(x_0) = \tan \alpha$, dove $\alpha$ è l'angolo formato dalla retta tangente. Per $f(x) = x^2$ si ha $f'\left( \dfrac{1}{2} \right) = 1$, quindi nel punto di ascissa $\dfrac{1}{2}$ la tangente forma un angolo di $\dfrac{\pi}{4}$ con l'asse $x$.

La **retta normale** al grafico in $P$ è la perpendicolare alla tangente in $P$. Due rette sono perpendicolari quando il prodotto dei coefficienti angolari è $-1$, quindi, se $f'(x_0) \neq 0$, la normale ha coefficiente angolare $-\dfrac{1}{f'(x_0)}$. Per $x^2$ nel punto $(1, 1)$ la normale è $y - 1 = -\dfrac{1}{2}\,(x - 1)$, cioè $y = -\dfrac{x}{2} + \dfrac{3}{2}$.
:::

## Continuità e derivabilità

::::teorema{#derivabilita-continuita titolo="Continuità delle funzioni derivabili"}
Se $f$ è derivabile in $x_0$, allora $f$ è continua in $x_0$.

Dal teorema segue che una funzione *non* continua in $x_0$ non è derivabile in $x_0$. Per esempio la funzione che vale $x$ per $x \leq 0$ e $x + 1$ per $x > 0$ ha in $0$ un salto, perché il limite destro è $1$ e $f(0) = 0$; quindi non è derivabile in $0$, e non serve calcolare il rapporto incrementale.

:::dimostrazione
L'idea è scrivere l'incremento della funzione come prodotto del rapporto incrementale per $h$. Per $h \neq 0$ vale l'identità
$$
f(x_0 + h) - f(x_0) = \frac{f(x_0 + h) - f(x_0)}{h} \cdot h .
$$
Per $h \to 0$ il primo fattore tende a $f'(x_0)$, che è un numero finito perché $f$ è derivabile in $x_0$, e il secondo fattore tende a $0$. Per il teorema sul limite del prodotto il secondo membro tende quindi a $f'(x_0) \cdot 0 = 0$. Ne segue che
$$
\lim_{h \to 0} f(x_0 + h) = f(x_0) .
$$
Ponendo $x = x_0 + h$, questa uguaglianza diventa $\displaystyle\lim_{x \to x_0} f(x) = f(x_0)$, che è la definizione di funzione continua in $x_0$.
:::
::::

:::attenzione
Una funzione continua in un punto può non essere derivabile in quel punto. La funzione $f(x) = |x|$ è continua in $0$, perché $\displaystyle\lim_{x \to 0} |x| = 0 = f(0)$, ma ha derivata destra $1$ e derivata sinistra $-1$, quindi in $0$ *non* è derivabile. Nel grafico la pendenza passa bruscamente da $-1$ a $1$ e nel punto $(0, 0)$ non esiste una retta tangente.

::grafico{f="abs(x)" punti="0,0,pieno" xmin=-3 xmax=3 ymin=-1 ymax=3 uguale=1 titolo="Il grafico di $|x|$ è continuo in $0$, ma ha pendenza $-1$ a sinistra e pendenza $1$ a destra, quindi in $(0, 0)$ la funzione non è derivabile"}

:::

## Derivate fondamentali

:::teorema{#derivate-fondamentali titolo="Derivate delle funzioni elementari"}
Nei punti indicati valgono le formule

| $f(x)$ | $f'(x)$ | dove |
| --- | --- | --- |
| $k$ (costante) | $0$ | $x \in \mathbb{R}$ |
| $x^n$, con $n$ naturale | $n\,x^{n-1}$ | $x \in \mathbb{R}$ |
| $x^{a}$, con $a$ reale | $a\,x^{a-1}$ | $x > 0$ |
| $\sqrt{x}$ | $\dfrac{1}{2\sqrt{x}}$ | $x > 0$ |
| $\dfrac{1}{x}$ | $-\dfrac{1}{x^2}$ | $x \neq 0$ |
| $\sin x$ | $\cos x$ | $x \in \mathbb{R}$ |
| $\cos x$ | $-\sin x$ | $x \in \mathbb{R}$ |
| $\tan x$ | $\dfrac{1}{\cos^2 x} = 1 + \tan^2 x$ | $x \neq \dfrac{\pi}{2} + k\pi$ |
| $e^{x}$ | $e^{x}$ | $x \in \mathbb{R}$ |
| $a^{x}$, con $a > 0$ | $a^{x} \ln a$ | $x \in \mathbb{R}$ |
| $\ln x$ | $\dfrac{1}{x}$ | $x > 0$ |
| $\log_a x$, con $a > 0$, $a \neq 1$ | $\dfrac{1}{x \ln a}$ | $x > 0$ |
| $\arcsin x$ | $\dfrac{1}{\sqrt{1 - x^2}}$ | $-1 < x < 1$ |
| $\arccos x$ | $-\dfrac{1}{\sqrt{1 - x^2}}$ | $-1 < x < 1$ |
| $\arctan x$ | $\dfrac{1}{1 + x^2}$ | $x \in \mathbb{R}$ |

La tabella permette di derivare le funzioni elementari senza calcolare limiti. Per esempio $\left( x^5 \right)' = 5x^4$ e $\left( \sqrt[3]{x} \right)' = \left( x^{\frac{1}{3}} \right)' = \dfrac{1}{3}\,x^{-\frac{2}{3}} = \dfrac{1}{3\sqrt[3]{x^2}}$ per $x > 0$. Le formule della costante, delle potenze, di seno, coseno, esponenziale e logaritmo si dimostrano con la definizione nei teoremi che seguono; quelle della tangente e delle funzioni inverse goniometriche si ricavano con le regole di derivazione.
:::

::::teorema{#derivate-costante-potenze titolo="Derivate della costante e delle potenze"}
Per ogni $x$ reale valgono
$$
(k)' = 0 ,
\qquad
\left( x^n \right)' = n\,x^{n-1} \quad \text{con } n \text{ naturale, } n \geq 1 .
$$
In particolare $(x)' = 1$, $\left( x^2 \right)' = 2x$ e $\left( x^3 \right)' = 3x^2$. Con la formula delle potenze la tangente al grafico di $x^3$ nel punto $(1, 1)$ ha coefficiente angolare $3$, ed è quindi $y - 1 = 3\,(x - 1)$, cioè $y = 3x - 2$.

:::dimostrazione
Per la funzione costante $f(x) = k$ il rapporto incrementale è $\dfrac{k - k}{h} = 0$ per ogni $h \neq 0$, quindi il suo limite è $0$.

Per $f(x) = x^n$ l'idea è sviluppare $(x + h)^n$ con la formula del binomio di Newton e mettere in evidenza $h$. Lo sviluppo è
$$
(x + h)^n = x^n + n\,x^{n-1} h + \binom{n}{2} x^{n-2} h^2 + \dots + h^n ,
$$
dove ogni termine dopo i primi due contiene il fattore $h^2$. Sottraendo $x^n$ e dividendo per $h$ si ottiene
$$
\frac{(x + h)^n - x^n}{h} = n\,x^{n-1} + h \left( \binom{n}{2} x^{n-2} + \dots + h^{n-2} \right) .
$$
Il fattore che moltiplica $h$ tende a $\dbinom{n}{2} x^{n-2}$, che è un numero finito, perciò il secondo addendo tende a $0$. Quindi il rapporto incrementale tende a $n\,x^{n-1}$. Per $n = 3$ il conto è $\dfrac{(x + h)^3 - x^3}{h} = \dfrac{3x^2 h + 3x h^2 + h^3}{h} = 3x^2 + 3xh + h^2$, che tende a $3x^2$.
:::
::::

:::richiamo{titolo="Limiti notevoli"}
Valgono
$$
\lim_{h \to 0} \frac{\sin h}{h} = 1 ,
\qquad
\lim_{h \to 0} \frac{1 - \cos h}{h} = 0 ,
\qquad
\lim_{h \to 0} \frac{e^{h} - 1}{h} = 1 ,
\qquad
\lim_{t \to 0} \frac{\ln (1 + t)}{t} = 1 .
$$
:::

::::teorema{#derivate-seno-coseno titolo="Derivate di seno e coseno"}
Per ogni $x$ reale, con $x$ misurato in radianti, valgono
$$
(\sin x)' = \cos x ,
\qquad
(\cos x)' = -\sin x .
$$
Per esempio la tangente al grafico di $\sin x$ nell'origine ha coefficiente angolare $\cos 0 = 1$, ed è quindi la bisettrice $y = x$. Vicino a $0$ il grafico del seno e questa retta sono quasi sovrapposti; per questo motivo $\sin x \approx x$ quando $x$ è piccolo.

::grafico{f="sin(x);x" punti="0,0,pieno" xmin=-4 xmax=4 ymin=-2 ymax=2 uguale=1 legenda="y = \sin x;y = x" titolo="La tangente al grafico di $\sin x$ nell'origine è la retta $y = x$, perché $(\sin x)' = \cos x$ vale $1$ in $0$"}

:::dimostrazione
L'idea è usare la formula di addizione del seno e poi i limiti notevoli. Poiché $\sin(x + h) = \sin x \cos h + \cos x \sin h$, il rapporto incrementale del seno è
$$
\begin{aligned}
\frac{\sin(x + h) - \sin x}{h}
&= \frac{\sin x \cos h - \sin x + \cos x \sin h}{h} \\[6pt]
&= -\sin x \cdot \frac{1 - \cos h}{h} + \cos x \cdot \frac{\sin h}{h} .
\end{aligned}
$$
Per $h \to 0$ il primo quoziente tende a $0$ e il secondo tende a $1$, per i limiti notevoli. Il valore $x$ è fissato, quindi $\sin x$ e $\cos x$ sono costanti, e il rapporto incrementale tende a $-\sin x \cdot 0 + \cos x \cdot 1 = \cos x$.

Per il coseno si usa $\cos(x + h) = \cos x \cos h - \sin x \sin h$. Allo stesso modo
$$
\frac{\cos(x + h) - \cos x}{h} = -\cos x \cdot \frac{1 - \cos h}{h} - \sin x \cdot \frac{\sin h}{h} ,
$$
che tende a $-\cos x \cdot 0 - \sin x \cdot 1 = -\sin x$.
:::
::::

::::teorema{#derivate-esponenziale-logaritmo titolo="Derivate dell'esponenziale e del logaritmo"}
Valgono
$$
\left( e^{x} \right)' = e^{x} \quad \text{per ogni } x \text{ reale} ,
\qquad
(\ln x)' = \frac{1}{x} \quad \text{per ogni } x > 0 .
$$
La funzione $e^{x}$ coincide quindi con la sua derivata. Nel punto $(0, 1)$ la tangente al grafico di $e^{x}$ ha coefficiente angolare $e^{0} = 1$ ed è $y = x + 1$; nel punto $(1, 0)$ la tangente al grafico di $\ln x$ ha coefficiente angolare $1$ ed è $y = x - 1$.

:::dimostrazione
Per l'esponenziale si usa la proprietà $e^{x + h} = e^{x} \cdot e^{h}$ e si raccoglie $e^{x}$:
$$
\frac{e^{x + h} - e^{x}}{h} = e^{x} \cdot \frac{e^{h} - 1}{h} .
$$
Per il limite notevole il secondo fattore tende a $1$, quindi il rapporto incrementale tende a $e^{x}$.

Per il logaritmo, con $x > 0$, la differenza di due logaritmi è il logaritmo del quoziente, perciò
$$
\frac{\ln(x + h) - \ln x}{h} = \frac{1}{h} \ln \left( 1 + \frac{h}{x} \right) = \frac{1}{x} \cdot \frac{\ln\left( 1 + \dfrac{h}{x} \right)}{\dfrac{h}{x}} ,
$$
dove nell'ultimo passaggio si è moltiplicato e diviso per $x$. Si pone $t = \dfrac{h}{x}$. Poiché $x$ è fissato, $t \to 0$ quando $h \to 0$, e per il limite notevole il quoziente $\dfrac{\ln(1 + t)}{t}$ tende a $1$. Quindi il rapporto incrementale tende a $\dfrac{1}{x}$.
:::
::::

## Regole di derivazione

:::teorema{#regole-somma-prodotto titolo="Derivata della somma e del prodotto"}
Siano $f$ e $g$ derivabili in $x$ e sia $k$ un numero reale. Allora $k f$, $f + g$ e $f g$ sono derivabili in $x$ e
$$
(k f)' = k f' ,
\qquad
(f + g)' = f' + g' ,
\qquad
(f g)' = f' g + f g' .
$$
Le prime due regole permettono di derivare un polinomio termine per termine. Per esempio
$$
\left( 3x^2 - 5x + 2 \right)' = 6x - 5 ,
\qquad
\left( x^2 \sin x \right)' = 2x \sin x + x^2 \cos x ,
\qquad
\left( x\,e^{x} \right)' = e^{x} + x\,e^{x} = (x + 1)\,e^{x} .
$$
Le tre regole si ricavano dalla definizione di derivata con i teoremi sul limite della somma e del prodotto; per il prodotto si aggiunge e si toglie $f(x + h)\,g(x)$ al numeratore del rapporto incrementale.
:::

:::attenzione
La derivata di un prodotto è diversa dal prodotto delle derivate. Per $f(x) = g(x) = x$ il prodotto è $x^2$, che ha derivata $2x$, mentre il prodotto delle derivate è $1 \cdot 1 = 1$. Con la regola del prodotto si ottiene il risultato corretto, $1 \cdot x + x \cdot 1 = 2x$.
:::

:::teorema{#regola-quoziente titolo="Derivata del quoziente"}
Siano $f$ e $g$ derivabili in $x$, con $g(x) \neq 0$. Allora $\dfrac{f}{g}$ è derivabile in $x$ e
$$
\left( \frac{f}{g} \right)' = \frac{f' g - f g'}{g^2} .
$$
Con $f = 1$ si ottiene il caso particolare $\left( \dfrac{1}{g} \right)' = -\dfrac{g'}{g^2}$. La regola si ricava dalla definizione di derivata, come quella del prodotto. Per esempio
$$
\left( \frac{x - 1}{x + 2} \right)' = \frac{1 \cdot (x + 2) - (x - 1) \cdot 1}{(x + 2)^2} = \frac{3}{(x + 2)^2} \qquad \text{per } x \neq -2 .
$$
Con la stessa regola si ricava la derivata della tangente. Per $x \neq \dfrac{\pi}{2} + k\pi$ si ha
$$
(\tan x)' = \left( \frac{\sin x}{\cos x} \right)' = \frac{\cos x \cdot \cos x - \sin x \cdot (-\sin x)}{\cos^2 x} = \frac{\cos^2 x + \sin^2 x}{\cos^2 x} = \frac{1}{\cos^2 x} .
$$
Dividendo termine a termine la frazione $\dfrac{\cos^2 x + \sin^2 x}{\cos^2 x}$ si ottiene anche la forma $1 + \tan^2 x$.
:::

:::teorema{#derivata-funzione-composta titolo="Derivata della funzione composta"}
Sia $g$ derivabile in $x$ e sia $f$ derivabile nel punto $g(x)$. Allora la funzione composta $y = f\big( g(x) \big)$ è derivabile in $x$ e
$$
\Big( f\big( g(x) \big) \Big)' = f'\big( g(x) \big) \cdot g'(x) .
$$
In parole, si deriva la funzione esterna $f$, calcolata nella funzione interna $g(x)$, e si moltiplica per la derivata della funzione interna. Per esempio
$$
\big( \sin (3x) \big)' = \cos (3x) \cdot 3 ,
\qquad
\left( \left( x^2 + 1 \right)^5 \right)' = 5 \left( x^2 + 1 \right)^4 \cdot 2x = 10x \left( x^2 + 1 \right)^4 ,
$$
$$
\left( e^{-x^2} \right)' = e^{-x^2} \cdot (-2x) ,
\qquad
\left( \ln \left( x^2 + 4 \right) \right)' = \frac{1}{x^2 + 4} \cdot 2x = \frac{2x}{x^2 + 4} .
$$
Nel primo esempio la funzione esterna è il seno e la funzione interna è $3x$. La dimostrazione si studia all'università.
:::

:::esempio{titolo="Potenze con base o esponente variabili"}
Poiché esponenziale e logaritmo naturale sono funzioni inverse, ogni potenza con base positiva si scrive come esponenziale di base $e$, e la si deriva con la regola della funzione composta.

- Per $a > 0$ si ha $a^{x} = e^{x \ln a}$, quindi $\left( a^{x} \right)' = e^{x \ln a} \cdot \ln a = a^{x} \ln a$. Per esempio $\left( 2^{x} \right)' = 2^{x} \ln 2$.
- Per $x > 0$ e $a$ reale si ha $x^{a} = e^{a \ln x}$, quindi $\left( x^{a} \right)' = e^{a \ln x} \cdot \dfrac{a}{x} = x^{a} \cdot \dfrac{a}{x} = a\,x^{a-1}$.
- Per $x > 0$ si ha $x^{x} = e^{x \ln x}$. La derivata dell'esponente è $\ln x + x \cdot \dfrac{1}{x} = \ln x + 1$, per la regola del prodotto, quindi $\left( x^{x} \right)' = x^{x} (\ln x + 1)$.

Le prime due formule giustificano le righe corrispondenti della tabella delle derivate fondamentali.
:::

:::teorema{#derivata-funzione-inversa titolo="Derivata della funzione inversa"}
Sia $f$ continua e strettamente crescente, oppure strettamente decrescente, in un intervallo, così che abbia una funzione inversa $f^{-1}$. Se $f$ è derivabile in $x_0$ con $f'(x_0) \neq 0$, allora $f^{-1}$ è derivabile nel punto $y_0 = f(x_0)$ e
$$
\left( f^{-1} \right)'(y_0) = \frac{1}{f'(x_0)} .
$$
Il grafico di $f^{-1}$ è il simmetrico del grafico di $f$ rispetto alla retta $y = x$. Questa simmetria scambia le ascisse con le ordinate, e quindi trasforma una tangente di coefficiente angolare $m$ in una tangente di coefficiente angolare $\dfrac{1}{m}$. Per esempio $f(x) = x^3 + x$ ha derivata $3x^2 + 1 > 0$, perciò è strettamente crescente e invertibile; poiché $f(1) = 2$ e $f'(1) = 4$, si ha $\left( f^{-1} \right)'(2) = \dfrac{1}{4}$, anche se non si conosce una formula per $f^{-1}$. La dimostrazione si studia all'università.
:::

:::esempio{titolo="Derivate dell'arcoseno e dell'arcotangente"}
La funzione $y = \arcsin x$, per $-1 < x < 1$, è l'inversa di $x = \sin y$ con $-\dfrac{\pi}{2} < y < \dfrac{\pi}{2}$. Per il teorema della funzione inversa
$$
(\arcsin x)' = \frac{1}{(\sin y)'} = \frac{1}{\cos y} = \frac{1}{\sqrt{1 - \sin^2 y}} = \frac{1}{\sqrt{1 - x^2}} ,
$$
dove $\cos y = \sqrt{1 - \sin^2 y}$ perché il coseno è positivo per $-\dfrac{\pi}{2} < y < \dfrac{\pi}{2}$. Allo stesso modo $y = \arctan x$ è l'inversa di $x = \tan y$, e poiché $(\tan y)' = 1 + \tan^2 y = 1 + x^2$, si ottiene
$$
(\arctan x)' = \frac{1}{1 + x^2} .
$$
Per esempio la tangente al grafico di $\arctan x$ nell'origine ha coefficiente angolare $1$ ed è la retta $y = x$.
:::

## Derivate di ordine superiore

:::definizione{#derivate-successive titolo="Derivate successive"}
Se la funzione derivata $f'$ è a sua volta derivabile, la sua derivata si chiama **derivata seconda** di $f$ e si indica con $f''$. Derivando ancora si ottengono la derivata terza $f'''$, la derivata quarta $f^{(4)}$ e, in generale, la **derivata $n$-esima** $f^{(n)}$. Per $f(x) = x^4 - 2x^3$ si ha
$$
f'(x) = 4x^3 - 6x^2 ,
\qquad
f''(x) = 12x^2 - 12x ,
\qquad
f'''(x) = 24x - 12 ,
\qquad
f^{(4)}(x) = 24 ,
$$
e tutte le derivate successive sono nulle. La derivata seconda misura come varia il coefficiente angolare della tangente. Il suo segno determina la concavità del grafico, come si vede nell'argomento su massimi, minimi, flessi e studio di funzione; in fisica la derivata seconda della posizione è l'accelerazione.
:::

:::esempio{titolo="Derivata n-esima"}
Per $f(x) = e^{2x}$ ogni derivazione moltiplica per $2$, per la regola della funzione composta. Quindi $f'(x) = 2e^{2x}$, $f''(x) = 4e^{2x}$ e $f^{(n)}(x) = 2^n e^{2x}$; per esempio $f^{(5)}(x) = 32\,e^{2x}$.

Per $f(x) = \sin x$ le derivate si ripetono ogni quattro:
$$
f'(x) = \cos x ,
\qquad
f''(x) = -\sin x ,
\qquad
f'''(x) = -\cos x ,
\qquad
f^{(4)}(x) = \sin x .
$$
Poiché $10 = 4 \cdot 2 + 2$, la derivata decima coincide con la derivata seconda, e vale $f^{(10)}(x) = -\sin x$.
:::

## Punti di non derivabilità

:::definizione{#punti-non-derivabilita titolo="Punti angolosi, cuspidi e flessi a tangente verticale"}
Sia $f$ continua in $x_0$ e non derivabile in $x_0$. Si distinguono tre casi, secondo i valori della derivata destra e della derivata sinistra.

- **Punto angoloso**: $f'_+(x_0)$ e $f'_-(x_0)$ sono diverse e almeno una delle due è finita. Nel punto il grafico ha due semirette tangenti distinte.
- **Cuspide**: le due derivate sono infinite e di segno opposto, una $+\infty$ e l'altra $-\infty$. Il grafico arriva nel punto con tangente verticale da entrambe le parti e torna indietro.
- **Flesso a tangente verticale**: le due derivate sono entrambe $+\infty$ oppure entrambe $-\infty$. Il grafico attraversa la retta verticale $x = x_0$, che è la tangente.

Per $f(x) = \left| x^2 - 4 \right|$ e $x_0 = 2$ il rapporto incrementale per $h > 0$ piccolo è $\dfrac{(2 + h)^2 - 4}{h} = 4 + h$, e per $h < 0$ è $\dfrac{4 - (2 + h)^2}{h} = -4 - h$. Quindi $f'_+(2) = 4$ e $f'_-(2) = -4$, e il punto $(2, 0)$ è un **punto angoloso**, con semitangenti $y = 4(x - 2)$ a destra e $y = -4(x - 2)$ a sinistra.

::grafico{f="abs(x^2-4)" punti="2,0,pieno;-2,0,pieno" xmin=-4 xmax=4 ymin=-2 ymax=8 titolo="La funzione $\left| x^2 - 4 \right|$ ha due punti angolosi, in $x = 2$ e in $x = -2$, dove la derivata destra e la derivata sinistra sono $4$ e $-4$ in un ordine o nell'altro"}

:::

:::esempio{titolo="Una cuspide e un flesso a tangente verticale"}
Per $f(x) = \sqrt[3]{x^2}$ e $x_0 = 0$ il rapporto incrementale è
$$
\frac{\sqrt[3]{h^2}}{h} = \frac{1}{\sqrt[3]{h}} ,
$$
che tende a $+\infty$ per $h \to 0^+$ e a $-\infty$ per $h \to 0^-$. Le due derivate sono infinite e di segno opposto, quindi l'origine è una **cuspide**.

::grafico{f="cbrt(x^2)" punti="0,0,pieno" xmin=-4 xmax=4 ymin=-1 ymax=3 titolo="La funzione $\sqrt[3]{x^2}$ ha una cuspide nell'origine, perché la derivata destra è $+\infty$ e la derivata sinistra è $-\infty$"}

Per $g(x) = \sqrt[3]{x}$ e $x_0 = 0$ il rapporto incrementale è $\dfrac{\sqrt[3]{h}}{h} = \dfrac{1}{\sqrt[3]{h^2}}$, che è positivo e tende a $+\infty$ sia da destra sia da sinistra. L'origine è quindi un **flesso a tangente verticale**, e la tangente è l'asse $y$.

::grafico{f="cbrt(x)" punti="0,0,pieno" segmenti="0,-2,0,2" xmin=-4 xmax=4 ymin=-2 ymax=2 titolo="La funzione $\sqrt[3]{x}$ ha nell'origine un flesso a tangente verticale, perché le due derivate sono $+\infty$, e il grafico attraversa la tangente $x = 0$"}

:::

:::teorema{#criterio-derivabilita titolo="Criterio di derivabilità"}
Sia $f$ continua in $x_0$ e derivabile in un intorno di $x_0$, escluso al più il punto $x_0$. Se esiste il limite $\displaystyle\lim_{x \to x_0^+} f'(x) = \ell$, finito o infinito, allora $f'_+(x_0) = \ell$. Lo stesso vale per il limite sinistro e la derivata sinistra.

Il criterio permette di calcolare le derivate destra e sinistra con i limiti della funzione derivata, senza il rapporto incrementale. Per $f(x) = x\,|x|$ si ha $f(x) = x^2$ per $x \geq 0$ e $f(x) = -x^2$ per $x < 0$, quindi $f'(x) = 2x$ per $x > 0$ e $f'(x) = -2x$ per $x < 0$. Entrambe le espressioni tendono a $0$ per $x \to 0$, perciò $f'_+(0) = f'_-(0) = 0$ e la funzione è **derivabile** in $0$, con $f'(0) = 0$. Il criterio è una conseguenza del teorema di Lagrange, che si studia nell'argomento sui teoremi del calcolo differenziale.
:::

:::attenzione
L'ipotesi di continuità in $x_0$ è necessaria. La funzione che vale $x$ per $x \leq 0$ e $x + 1$ per $x > 0$ ha derivata $1$ in ogni punto diverso da $0$, quindi $f'(x)$ tende a $1$ da entrambe le parti. Tuttavia $f$ non è continua in $0$ e, per il teorema sulla continuità delle funzioni derivabili, *non* è derivabile in $0$.
:::

## Differenziale

:::definizione{#differenziale titolo="Differenziale"}
Sia $f$ derivabile in $x_0$ e sia $h$ un incremento della variabile. Il **differenziale** di $f$ in $x_0$ relativo a $h$ è il prodotto
$$
df = f'(x_0) \cdot h .
$$
Per la funzione $f(x) = x$ il differenziale è $dx = 1 \cdot h = h$, perciò l'incremento della variabile si indica con $dx$ e si scrive $dy = f'(x)\,dx$. Da qui viene la notazione $f'(x) = \dfrac{dy}{dx}$.

Nel grafico l'incremento della funzione $\Delta y = f(x_0 + h) - f(x_0)$ è la variazione dell'ordinata sul grafico, mentre il differenziale $dy$ è la variazione dell'ordinata sulla retta tangente, perché la tangente ha coefficiente angolare $f'(x_0)$. La differenza $\Delta y - dy$, divisa per $h$, è uguale al rapporto incrementale meno $f'(x_0)$, e quindi tende a $0$ per $h \to 0$. Per $h$ piccolo vale perciò l'approssimazione
$$
f(x_0 + h) \approx f(x_0) + f'(x_0)\,h .
$$
Per esempio, con $f(x) = \sqrt{x}$, $x_0 = 4$ e $h = 0{,}1$, si ha $f'(4) = \dfrac{1}{2\sqrt{4}} = \dfrac{1}{4}$ e
$$
\sqrt{4{,}1} \approx 2 + \frac{1}{4} \cdot 0{,}1 = 2{,}025 ,
$$
mentre il valore esatto è $2{,}0248\ldots$

::grafico{f="x^2;2*x-1" punti="1,1,pieno,P;2,4,pieno;2,3,pieno" segmenti="1,1,2,1;2,1,2,4" etichette="2.15,2,dy;1.5,0.5,h" xmin=-1 xmax=3 ymin=-1 ymax=6 legenda="y = x^2;y = 2x - 1" titolo="Per $x^2$ con $x_0 = 1$ e $h = 1$ l'incremento della funzione è $\Delta y = 4 - 1 = 3$, mentre il differenziale è l'incremento della tangente, $dy = 2 \cdot 1 = 2$"}

:::

:::esempio{titolo="Errore sull'area di un quadrato"}
Il lato di un quadrato misura $10\,\mathrm{cm}$, con un errore di $0{,}1\,\mathrm{cm}$. L'area è $A(\ell) = \ell^2$ e la sua derivata è $A'(\ell) = 2\ell$, quindi il differenziale è
$$
dA = 2\ell \cdot d\ell = 2 \cdot 10 \cdot 0{,}1 = 2\,\mathrm{cm^2} .
$$
La variazione esatta dell'area è $10{,}1^2 - 10^2 = 2{,}01\,\mathrm{cm^2}$, e differisce dal differenziale per $0{,}01\,\mathrm{cm^2}$, cioè per $(d\ell)^2$.
:::

## Applicazioni alla fisica

:::definizione{#velocita-accelerazione titolo="Velocità e accelerazione istantanee"}
Un corpo si muove lungo una retta e la sua posizione al tempo $t$ è $s(t)$, detta **legge oraria**. La velocità media tra gli istanti $t_0$ e $t_0 + \Delta t$ è
$$
\frac{s(t_0 + \Delta t) - s(t_0)}{\Delta t} ,
$$
cioè il rapporto incrementale di $s$. La **velocità istantanea** è il suo limite per $\Delta t \to 0$, quindi è la derivata della posizione; allo stesso modo l'**accelerazione istantanea** è la derivata della velocità:
$$
v(t) = s'(t) ,
\qquad
a(t) = v'(t) = s''(t) .
$$
Per il moto uniformemente accelerato $s(t) = s_0 + v_0 t + \dfrac{1}{2}\,a\,t^2$ si ottiene $v(t) = v_0 + a\,t$ e accelerazione costante $a$, che sono le formule della cinematica. Per esempio, con $s(t) = 2 + 3t + 4t^2$, in metri e secondi, si ha $v(t) = 3 + 8t$ e $a(t) = 8\,\mathrm{m/s^2}$; all'istante $t = 1\,\mathrm{s}$ il corpo si trova in $s(1) = 9\,\mathrm{m}$ e ha velocità $v(1) = 11\,\mathrm{m/s}$.

::grafico{f="2+3*x+4*x^2;11*x-2" punti="1,9,pieno" xmin=-1 xmax=3 ymin=-12 ymax=48 nomi="t,s" legenda="s = 2 + 3t + 4t^2;s = 11t - 2" titolo="Nel grafico della legge oraria $s(t) = 2 + 3t + 4t^2$ la velocità all'istante $t = 1$ è il coefficiente angolare della tangente nel punto $(1, 9)$, cioè $v(1) = 11$"}

:::

:::definizione{#intensita-corrente titolo="Intensità di corrente"}
Sia $q(t)$ la carica che ha attraversato la sezione di un conduttore dall'istante $0$ all'istante $t$. Il rapporto $\dfrac{\Delta q}{\Delta t}$ è l'intensità media di corrente nell'intervallo di tempo $\Delta t$, e il suo limite per $\Delta t \to 0$ è l'**intensità di corrente** istantanea:
$$
i(t) = q'(t) .
$$
Se la carica si misura in coulomb e il tempo in secondi, l'intensità si misura in ampere. Per esempio, con $q(t) = 2t^2 + t$, si ha $i(t) = 4t + 1$, quindi all'istante $t = 3\,\mathrm{s}$ l'intensità è $i(3) = 13\,\mathrm{A}$.
:::

:::osservazione{#derivata-come-rapidita titolo="Altre grandezze definite da una derivata"}
Ogni grandezza fisica che misura la rapidità con cui varia un'altra grandezza è una derivata rispetto al tempo. La potenza è la derivata del lavoro, $P(t) = L'(t)$. Per la legge di Faraday-Neumann la forza elettromotrice indotta in un circuito è l'opposto della derivata del flusso magnetico, $\varepsilon(t) = -\Phi'(t)$. Per esempio, se $\Phi(t) = 0{,}2\,t^2$ weber, allora $\varepsilon(t) = -0{,}4\,t$ volt, e all'istante $t = 5\,\mathrm{s}$ la forza elettromotrice vale $-2\,\mathrm{V}$.
:::
