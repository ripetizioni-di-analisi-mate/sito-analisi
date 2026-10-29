---
titolo: Equazioni differenziali
sommario: Che cos'è un'equazione differenziale e che cosa sono l'integrale generale, gli integrali particolari e il problema di Cauchy, come si risolvono le equazioni del primo ordine a variabili separabili e lineari e le equazioni lineari del secondo ordine a coefficienti costanti, e come si usano per il decadimento radioattivo, la crescita di una popolazione, il circuito RC e il moto armonico.
---

## Che cos'è un'equazione differenziale

:::definizione{#equazione-differenziale titolo="Equazione differenziale e ordine"}
Un'**equazione differenziale** è un'equazione in cui l'incognita è una funzione $y = y(x)$ e che contiene almeno una derivata di $y$. L'**ordine** dell'equazione è l'ordine massimo delle derivate che vi compaiono. Per esempio
$$
y' = 2x ,
\qquad
y' = 3y ,
\qquad
y'' + y = 0
$$
sono equazioni del primo, del primo e del secondo ordine. Una **soluzione** in un intervallo $I$ è una funzione derivabile in $I$ tante volte quanto è l'ordine, che sostituita nell'equazione la rende un'identità per ogni $x$ di $I$.

Per controllare che una funzione sia soluzione si calcolano le derivate e si sostituiscono. La funzione $y = e^{3x}$ ha derivata $y' = 3e^{3x}$, che è uguale a $3y$ per ogni $x$ reale, quindi $y = e^{3x}$ è una soluzione di $y' = 3y$ in $\mathbb{R}$.
:::

:::esempio{titolo="Una soluzione si verifica per sostituzione"}
Si verifica che $y = \sin x + \cos x$ è soluzione di $y'' + y = 0$. Le derivate sono
$$
y' = \cos x - \sin x ,
\qquad
y'' = -\sin x - \cos x ,
$$
quindi $y'' + y = -\sin x - \cos x + \sin x + \cos x = 0$ per ogni $x$. La funzione $y = x^2$, invece, ha $y'' + y = 2 + x^2$, che è diverso da $0$ per ogni $x$; perciò $x^2$ *non* è una soluzione.
:::

:::definizione{#soluzione-generale-particolare titolo="Integrale generale e integrale particolare"}
Risolvere un'equazione differenziale significa trovare tutte le sue soluzioni. Le soluzioni di un'equazione del primo ordine dipendono di solito da una costante arbitraria $c$, quelle di un'equazione del secondo ordine da due costanti $c_1$ e $c_2$. L'espressione che contiene le costanti e descrive tutte le soluzioni si chiama **integrale generale**; ogni soluzione che si ottiene dando un valore alle costanti si chiama **integrale particolare**. Il grafico di una soluzione si chiama **curva integrale**.

Per l'equazione $y' = 2x$ le soluzioni sono le primitive di $2x$, cioè
$$
y = x^2 + c ,
\qquad
c \in \mathbb{R} .
$$
Questo è l'integrale generale. Con $c = 2$ si ottiene l'integrale particolare $y = x^2 + 2$, con $c = -1$ l'integrale particolare $y = x^2 - 1$. Le curve integrali sono parabole che si ottengono l'una dall'altra con una traslazione verticale.
:::

:::esempio{titolo="Un'equazione del secondo ordine che si risolve integrando due volte"}
Per l'equazione $y'' = 6x$ si integra una prima volta e si ottiene $y' = 3x^2 + c_1$; integrando ancora si ottiene
$$
y = x^3 + c_1 x + c_2 ,
\qquad
c_1, c_2 \in \mathbb{R} .
$$
Le costanti sono due, una per ogni integrazione, come accade per ogni equazione del secondo ordine. Le primitive si calcolano con i metodi dell'argomento sugli integrali indefiniti.
:::

## Problema di Cauchy

:::definizione{#problema-di-cauchy titolo="Problema di Cauchy"}
Per scegliere una soluzione tra le infinite dell'integrale generale si assegnano delle **condizioni iniziali**. Per un'equazione del primo ordine si assegna il valore $y_0$ della soluzione in un punto $x_0$; per un'equazione del secondo ordine si assegnano il valore della soluzione e il valore della sua derivata nello stesso punto. Il **problema di Cauchy** è il sistema formato dall'equazione e dalle condizioni iniziali:
$$
\begin{cases}
y' = f(x, y) \\
y(x_0) = y_0
\end{cases}
\qquad\qquad
\begin{cases}
y'' = f(x, y, y') \\
y(x_0) = y_0 \\
y'(x_0) = y_1
\end{cases}
$$
Geometricamente, per il primo ordine si cerca la curva integrale che passa per il punto $(x_0, y_0)$. Per esempio il problema $y' = 2x$, $y(1) = 3$ si risolve sostituendo le condizioni nell'integrale generale $y = x^2 + c$. Si ottiene $3 = 1 + c$, quindi $c = 2$ e la soluzione è $y = x^2 + 2$.

::grafico{f="x^2+2;x^2-1" punti="1,3,pieno,P" xmin=-3 xmax=3 ymin=-2 ymax=10 legenda="y = x^2 + 2;y = x^2 - 1" titolo="Due curve integrali di $y' = 2x$; la soluzione del problema di Cauchy con $y(1) = 3$ è quella che passa per $P(1, 3)$"}

:::

:::teorema{#esistenza-unicita titolo="Teorema di esistenza e unicità"}
Un'equazione del primo ordine si dice in **forma normale** se è scritta come $y' = f(x, y)$, cioè se è risolta rispetto a $y'$. Sia $f(x, y)$ continua, e sia continua anche la sua derivata rispetto a $y$, calcolata considerando $x$ come una costante, in un rettangolo del piano che contiene il punto $(x_0, y_0)$. Allora esiste un intervallo $I$ contenente $x_0$ in cui il problema di Cauchy $y' = f(x, y)$, $y(x_0) = y_0$ ha *una e una sola* soluzione.

Per un problema di Cauchy del secondo ordine vale un teorema analogo. In particolare, per le equazioni lineari del secondo ordine a coefficienti costanti il problema ha una e una sola soluzione definita su tutto $\mathbb{R}$, qualunque siano $x_0$, $y_0$ e $y_1$.

Il teorema garantisce che per ogni punto del rettangolo passa una sola curva integrale. Per $y' = 3y$ si ha $f(x, y) = 3y$, che è continua con derivata rispetto a $y$ uguale a $3$; quindi il teorema si applica in ogni punto del piano. La dimostrazione si studia all'università.
:::

:::esempio{titolo="Un problema di Cauchy del secondo ordine"}
Si risolve il problema $y'' = 6x$, $y(0) = 1$, $y'(0) = 2$. Dall'integrale generale $y = x^3 + c_1 x + c_2$ si ricava $y' = 3x^2 + c_1$. La condizione $y'(0) = 2$ dà $c_1 = 2$, e la condizione $y(0) = 1$ dà $c_2 = 1$. La soluzione è quindi
$$
y = x^3 + 2x + 1 .
$$
:::

## Equazioni a variabili separabili

:::definizione{#variabili-separabili titolo="Equazione a variabili separabili"}
Un'equazione del primo ordine è **a variabili separabili** se si può scrivere nella forma
$$
y' = g(x) \cdot h(y) ,
$$
cioè se il secondo membro è il prodotto di una funzione della sola $x$ e di una funzione della sola $y$. Per esempio $y' = 2xy$ è a variabili separabili, con $g(x) = 2x$ e $h(y) = y$; anche $y' = x^2 + 1$ lo è, con $h(y) = 1$. L'equazione $y' = x + y$, invece, non si può scrivere in questa forma.

Il caso più semplice è $y' = g(x)$. Le soluzioni sono le primitive di $g$, quindi l'integrale generale è $y = \displaystyle\int g(x)\,dx$, come per $y' = 2x$.
:::

:::teorema{#metodo-separazione titolo="Metodo di separazione delle variabili"}
Per risolvere $y' = g(x) \cdot h(y)$ si procede in due passi.

- Le **soluzioni costanti**: se $h(k) = 0$, la funzione costante $y = k$ è una soluzione, perché la sua derivata è $0$ e anche il secondo membro vale $g(x) \cdot 0 = 0$.
- Le altre soluzioni: dove $h(y) \neq 0$ si scrive $y' = \dfrac{dy}{dx}$, si divide per $h(y)$ e si integra ciascun membro rispetto alla propria variabile:
$$
\int \frac{dy}{h(y)} = \int g(x)\,dx + c .
$$
Si ottiene una relazione tra $x$ e $y$, da cui si ricava $y$ quando è possibile.

Il metodo riduce la risoluzione dell'equazione al calcolo di due integrali indefiniti. Il primo integrale si calcola nella variabile $y$, il secondo nella variabile $x$, e la costante si scrive una volta sola.
:::

:::esempio{titolo="L'equazione y' = 2xy"}
Si risolve $y' = 2xy$ con la condizione $y(0) = 1$. Si ha $h(y) = y$, che si annulla per $y = 0$, quindi $y = 0$ è una soluzione costante. Per $y \neq 0$ si separano le variabili:
$$
\int \frac{dy}{y} = \int 2x\,dx
\qquad
\Longrightarrow
\qquad
\ln |y| = x^2 + c
\qquad
\Longrightarrow
\qquad
|y| = e^{c} \cdot e^{x^2} .
$$
Il numero $e^{c}$ è positivo, e togliendo il valore assoluto si ottiene $y = k\,e^{x^2}$ con $k \neq 0$. Con $k = 0$ si ritrova la soluzione costante, perciò l'integrale generale è $y = k\,e^{x^2}$ con $k$ reale qualsiasi. La condizione $y(0) = 1$ dà $k = 1$, quindi la soluzione del problema di Cauchy è $y = e^{x^2}$.
:::

:::esempio{titolo="Una soluzione definita solo in un intervallo"}
Si risolve il problema $y' = y^2$, $y(0) = 1$. La condizione iniziale ha $y_0 = 1 \neq 0$, quindi la soluzione costante $y = 0$ non la soddisfa. Separando le variabili si ottiene
$$
\int \frac{dy}{y^2} = \int dx
\qquad
\Longrightarrow
\qquad
-\frac{1}{y} = x + c .
$$
Con $x = 0$ e $y = 1$ si trova $c = -1$, perciò $-\dfrac{1}{y} = x - 1$, cioè
$$
y = \frac{1}{1 - x} .
$$
La funzione ha un asintoto verticale in $x = 1$. La soluzione del problema di Cauchy è definita nell'intervallo $(-\infty, 1)$, che è l'intervallo del dominio che contiene $x_0 = 0$, anche se l'equazione $y' = y^2$ ha senso per ogni $x$.

::grafico{f="1/(1-x)" punti="0,1,pieno" asintoti="x=1" xmin=-4 xmax=2 ymin=-1 ymax=9 titolo="La soluzione di $y' = y^2$ con $y(0) = 1$ è $y = \dfrac{1}{1 - x}$, definita per $x < 1$"}

:::

:::attenzione
Dividendo per $h(y)$ si perdono le soluzioni costanti, che vanno cercate a parte. Per l'equazione $y' = (y - 2)^2$ la separazione delle variabili dà $-\dfrac{1}{y - 2} = x + c$, cioè $y = 2 - \dfrac{1}{x + c}$, e nessun valore di $c$ produce la funzione costante $y = 2$. Tuttavia $y = 2$ è una soluzione, perché $h(2) = 0$, ed è la soluzione del problema di Cauchy con $y(0) = 2$.
:::

## Equazioni lineari del primo ordine

:::definizione{#equazione-lineare-primo-ordine titolo="Equazione lineare del primo ordine"}
Un'equazione del primo ordine è **lineare** se si può scrivere nella forma
$$
y' + a(x)\,y = b(x) ,
$$
con $a$ e $b$ funzioni continue in un intervallo $I$. La funzione incognita e la sua derivata compaiono al primo grado e non sono moltiplicate tra loro. L'equazione si dice **omogenea** se $b(x) = 0$ per ogni $x$, **completa** in caso contrario. Per esempio $y' + y = x$ e $y' - \dfrac{y}{x} = x^2$ sono lineari complete, mentre $y' = y^2$ non è lineare, perché contiene $y^2$.
:::

:::teorema{#formula-lineare-primo-ordine titolo="Integrale generale dell'equazione lineare del primo ordine"}
Siano $a$ e $b$ continue nell'intervallo $I$ e sia $A(x)$ una primitiva di $a(x)$. L'integrale generale di $y' + a(x)\,y = b(x)$ in $I$ è
$$
y = e^{-A(x)} \left( \int b(x)\,e^{A(x)}\,dx + c \right) ,
\qquad
c \in \mathbb{R} .
$$
Per l'equazione omogenea, con $b(x) = 0$, la formula si riduce a $y = c\,e^{-A(x)}$.

La formula si ottiene moltiplicando l'equazione per $e^{A(x)}$. Il primo membro diventa $y'\,e^{A(x)} + a(x)\,e^{A(x)}\,y$, che è la derivata del prodotto $y\,e^{A(x)}$, quindi $y\,e^{A(x)}$ è una primitiva di $b(x)\,e^{A(x)}$; dividendo per $e^{A(x)}$ si ricava $y$. Per esempio, per $y' + 2y = 0$ si ha $A(x) = 2x$, e l'integrale generale è $y = c\,e^{-2x}$.
:::

:::esempio{titolo="L'equazione y' + y = x"}
Si risolve il problema $y' + y = x$, $y(0) = 0$. Si ha $a(x) = 1$ e $b(x) = x$, quindi $A(x) = x$. Integrando per parti si trova
$$
\int x\,e^{x}\,dx = x\,e^{x} - \int e^{x}\,dx = (x - 1)\,e^{x} ,
$$
e l'integrale generale è
$$
y = e^{-x} \Big( (x - 1)\,e^{x} + c \Big) = x - 1 + c\,e^{-x} .
$$
La condizione $y(0) = 0$ dà $-1 + c = 0$, cioè $c = 1$, e la soluzione è $y = x - 1 + e^{-x}$. Per $x \to +\infty$ il termine $e^{-x}$ tende a $0$, quindi la retta $y = x - 1$ è un asintoto obliquo della soluzione.

::grafico{f="x-1+exp(-x);x-1" punti="0,0,pieno" xmin=-2 xmax=6 ymin=-3 ymax=6 legenda="y = x - 1 + e^{-x};y = x - 1" titolo="La soluzione di $y' + y = x$ con $y(0) = 0$ si avvicina all'asintoto obliquo $y = x - 1$ per $x \to +\infty$"}

:::

:::esempio{titolo="Un'equazione con coefficiente variabile"}
Si risolve $y' - \dfrac{y}{x} = x^2$ per $x > 0$. Si ha $a(x) = -\dfrac{1}{x}$, quindi $A(x) = -\ln x$, e
$$
e^{A(x)} = e^{-\ln x} = \frac{1}{x} ,
\qquad
e^{-A(x)} = x .
$$
Poiché $\displaystyle\int x^2 \cdot \frac{1}{x}\,dx = \int x\,dx = \frac{x^2}{2}$, l'integrale generale è
$$
y = x \left( \frac{x^2}{2} + c \right) = \frac{x^3}{2} + c\,x .
$$
:::

:::osservazione{#coefficienti-costanti-primo-ordine titolo="Equazioni con coefficienti costanti"}
Quando $a$ e $b$ sono costanti, con $a \neq 0$, l'equazione $y' + a\,y = b$ ha integrale generale
$$
y = \frac{b}{a} + c\,e^{-a x} .
$$
La funzione costante $y = \dfrac{b}{a}$ è una soluzione, perché ha derivata nulla e $a \cdot \dfrac{b}{a} = b$. Se $a > 0$ ogni soluzione tende a $\dfrac{b}{a}$ per $x \to +\infty$, perché $e^{-ax}$ tende a $0$. Per esempio le soluzioni di $y' + 3y = 6$ sono $y = 2 + c\,e^{-3x}$, e tendono tutte a $2$. Le equazioni di questo tipo descrivono la carica di un condensatore, il raffreddamento di un corpo e la caduta con attrito viscoso.
:::

## Equazioni lineari del secondo ordine omogenee

:::definizione{#equazione-lineare-secondo-ordine titolo="Equazione lineare del secondo ordine a coefficienti costanti"}
Un'**equazione lineare del secondo ordine a coefficienti costanti** è un'equazione della forma
$$
a\,y'' + b\,y' + c\,y = r(x) ,
$$
dove $a$, $b$, $c$ sono numeri reali con $a \neq 0$ e $r$ è una funzione continua, detta **termine noto**. Si suppone $a > 0$, cosa sempre possibile cambiando il segno di tutti i termini. L'equazione è **omogenea** se $r(x) = 0$ per ogni $x$. Per esempio $y'' - y' - 2y = 0$ è omogenea, mentre $y'' + 4y = 3\sin x$ non lo è.
:::

:::teorema{#sovrapposizione titolo="Combinazioni lineari di soluzioni"}
Se $y_1$ e $y_2$ sono soluzioni dell'equazione omogenea $a\,y'' + b\,y' + c\,y = 0$, allora anche $c_1 y_1 + c_2 y_2$ è una soluzione, per ogni scelta delle costanti $c_1$ e $c_2$.

Infatti la derivata di una combinazione lineare è la combinazione lineare delle derivate, quindi sostituendo $c_1 y_1 + c_2 y_2$ nel primo membro si ottiene $c_1\,(a\,y_1'' + b\,y_1' + c\,y_1) + c_2\,(a\,y_2'' + b\,y_2' + c\,y_2) = c_1 \cdot 0 + c_2 \cdot 0 = 0$. Per esempio $\sin x$ e $\cos x$ sono soluzioni di $y'' + y = 0$, quindi lo è anche $2\sin x - 5\cos x$. Si dimostra che, se nessuna delle due funzioni $y_1$ e $y_2$ è un multiplo dell'altra, le combinazioni $c_1 y_1 + c_2 y_2$ sono *tutte* le soluzioni, cioè formano l'integrale generale.
:::

:::definizione{#equazione-caratteristica titolo="Equazione caratteristica"}
Si cercano soluzioni dell'equazione omogenea della forma $y = e^{\lambda x}$, con $\lambda$ numero da determinare. Poiché $y' = \lambda\,e^{\lambda x}$ e $y'' = \lambda^2 e^{\lambda x}$, sostituendo si ottiene
$$
e^{\lambda x} \left( a\lambda^2 + b\lambda + c \right) = 0 .
$$
Il fattore $e^{\lambda x}$ è sempre positivo, quindi $y = e^{\lambda x}$ è soluzione se e solo se $\lambda$ risolve l'**equazione caratteristica**
$$
a\lambda^2 + b\lambda + c = 0 ,
$$
di discriminante $\Delta = b^2 - 4ac$. L'equazione caratteristica si scrive sostituendo $y''$ con $\lambda^2$, $y'$ con $\lambda$ e $y$ con $1$. Per $y'' - y' - 2y = 0$ l'equazione caratteristica è $\lambda^2 - \lambda - 2 = 0$, che ha soluzioni $\lambda = 2$ e $\lambda = -1$; perciò $e^{2x}$ ed $e^{-x}$ sono soluzioni.
:::

:::teorema{#soluzioni-omogenea titolo="Integrale generale dell'equazione omogenea"}
L'integrale generale di $a\,y'' + b\,y' + c\,y = 0$, con $a > 0$, dipende dal segno del discriminante $\Delta$ dell'equazione caratteristica.

- Se $\Delta > 0$ l'equazione caratteristica ha due soluzioni reali distinte $\lambda_1$ e $\lambda_2$, e
$$
y = c_1\,e^{\lambda_1 x} + c_2\,e^{\lambda_2 x} .
$$
- Se $\Delta = 0$ l'equazione caratteristica ha una soluzione doppia $\lambda = -\dfrac{b}{2a}$, e
$$
y = (c_1 + c_2\,x)\,e^{\lambda x} .
$$
- Se $\Delta < 0$ si pongono $\alpha = -\dfrac{b}{2a}$ e $\beta = \dfrac{\sqrt{-\Delta}}{2a}$, e
$$
y = e^{\alpha x} \left( c_1 \cos \beta x + c_2 \sin \beta x \right) .
$$
Chi conosce i numeri complessi riconosce in $\alpha \pm i\beta$ le soluzioni complesse dell'equazione caratteristica.

Con questo teorema la risoluzione dell'equazione differenziale si riduce alla risoluzione di un'equazione di secondo grado. Per esempio l'integrale generale di $y'' - y' - 2y = 0$ è $y = c_1\,e^{2x} + c_2\,e^{-x}$. La dimostrazione completa si studia all'università.
:::

:::esempio{titolo="I casi con discriminante nullo e negativo"}
Per $y'' - 4y' + 4y = 0$ l'equazione caratteristica è $\lambda^2 - 4\lambda + 4 = (\lambda - 2)^2 = 0$, con $\Delta = 0$ e soluzione doppia $\lambda = 2$. L'integrale generale è $y = (c_1 + c_2\,x)\,e^{2x}$.

Per $y'' + 2y' + 5y = 0$ l'equazione caratteristica è $\lambda^2 + 2\lambda + 5 = 0$, con $\Delta = 4 - 20 = -16$. Quindi $\alpha = -\dfrac{2}{2} = -1$ e $\beta = \dfrac{\sqrt{16}}{2} = 2$, e l'integrale generale è
$$
y = e^{-x} \left( c_1 \cos 2x + c_2 \sin 2x \right) .
$$
Con le condizioni $y(0) = 2$ e $y'(0) = 0$ si trova $c_1 = 2$. La derivata è $y' = e^{-x} \big( (2c_2 - c_1) \cos 2x - (2c_1 + c_2) \sin 2x \big)$, quindi $y'(0) = 2c_2 - c_1 = 0$ e $c_2 = 1$. La soluzione $y = e^{-x} \left( 2\cos 2x + \sin 2x \right)$ oscilla con ampiezza che si riduce nel tempo, compresa tra $-\sqrt{5}\,e^{-x}$ e $\sqrt{5}\,e^{-x}$.

::grafico{f="exp(-x)*(2*cos(2*x)+sin(2*x));sqrt(5)*exp(-x)" punti="0,2,pieno" xmin=0 xmax=5 ymin=-1 ymax=3 legenda="y = e^{-x}(2\cos 2x + \sin 2x);y = \sqrt{5}\,e^{-x}" titolo="La soluzione di $y'' + 2y' + 5y = 0$ con $y(0) = 2$ e $y'(0) = 0$ oscilla sotto la curva $y = \sqrt{5}\,e^{-x}$"}

:::

:::osservazione{#caso-delta-nullo titolo="Perché nel caso con discriminante nullo compare il fattore x"}
Se $\Delta = 0$ il metodo dell'esponenziale dà una sola soluzione, $e^{\lambda x}$. Si verifica che anche $y = x\,e^{\lambda x}$ è soluzione. Le derivate sono $y' = (1 + \lambda x)\,e^{\lambda x}$ e $y'' = (2\lambda + \lambda^2 x)\,e^{\lambda x}$, e sostituendo si ottiene
$$
a\,y'' + b\,y' + c\,y = e^{\lambda x} \Big( x \left( a\lambda^2 + b\lambda + c \right) + (2a\lambda + b) \Big) .
$$
Il primo termine è nullo perché $\lambda$ risolve l'equazione caratteristica, e il secondo è nullo perché $\lambda = -\dfrac{b}{2a}$. Per $y'' - 4y' + 4y = 0$ si ha quindi la soluzione $x\,e^{2x}$, oltre a $e^{2x}$.
:::

## Equazioni lineari del secondo ordine non omogenee

:::teorema{#soluzione-non-omogenea titolo="Integrale generale dell'equazione completa"}
Sia $\bar{y}$ una soluzione particolare dell'equazione completa $a\,y'' + b\,y' + c\,y = r(x)$. Allora l'integrale generale dell'equazione completa è
$$
y = y_0 + \bar{y} ,
$$
dove $y_0$ è l'integrale generale dell'equazione omogenea associata $a\,y'' + b\,y' + c\,y = 0$.

Infatti, se $y$ è una soluzione qualsiasi, la differenza $y - \bar{y}$ sostituita nel primo membro dà $r(x) - r(x) = 0$, quindi è una soluzione dell'omogenea. Per esempio la funzione $\bar{y} = 1$ risolve $y'' + y = 1$, e l'omogenea $y'' + y = 0$ ha integrale generale $c_1 \cos x + c_2 \sin x$; perciò l'integrale generale di $y'' + y = 1$ è $y = c_1 \cos x + c_2 \sin x + 1$.
:::

:::teorema{#metodo-somiglianza titolo="Metodo di somiglianza"}
Quando il termine noto $r(x)$ è un polinomio, un esponenziale o una funzione goniometrica, si cerca una soluzione particolare $\bar{y}$ dello stesso tipo, con coefficienti da determinare sostituendo nell'equazione.

| $r(x)$ | $\bar{y}$ da cercare | caso particolare |
| --- | --- | --- |
| polinomio di grado $n$ | polinomio di grado $n$ | se $c = 0$ e $b \neq 0$, polinomio di grado $n$ moltiplicato per $x$ |
| $k\,e^{\mu x}$ | $A\,e^{\mu x}$ | se $\mu$ risolve l'equazione caratteristica, $A\,x\,e^{\mu x}$ ($\Delta > 0$) oppure $A\,x^2 e^{\mu x}$ ($\Delta = 0$) |
| $p \cos \omega x + q \sin \omega x$ | $A \cos \omega x + B \sin \omega x$ | se $b = 0$ e $\omega^2 = \dfrac{c}{a}$, la stessa espressione moltiplicata per $x$ |

Nell'ultima colonna compaiono i casi in cui la funzione da cercare risolve già l'equazione omogenea, e quindi non può dare il termine noto. Se il termine noto è una somma di termini dei tipi indicati, si cerca una soluzione particolare per ciascun termine e si sommano i risultati.
:::

:::esempio{titolo="Termine noto polinomiale ed esponenziale"}
Si considera l'equazione $y'' - y' - 2y = r(x)$, la cui omogenea ha integrale generale $c_1\,e^{2x} + c_2\,e^{-x}$.

- Per $r(x) = 4x$ si cerca $\bar{y} = Ax + B$. Poiché $\bar{y}' = A$ e $\bar{y}'' = 0$, si ottiene $-A - 2Ax - 2B = 4x$. Uguagliando i coefficienti di $x$ si trova $-2A = 4$, cioè $A = -2$, e uguagliando i termini noti $-A - 2B = 0$, cioè $B = 1$. Quindi $\bar{y} = -2x + 1$.
- Per $r(x) = 6\,e^{x}$ si cerca $\bar{y} = A\,e^{x}$. Le derivate sono uguali a $A\,e^{x}$, quindi $A - A - 2A = 6$ e $A = -3$, cioè $\bar{y} = -3\,e^{x}$.
- Per $r(x) = 3\,e^{2x}$ il numero $\mu = 2$ risolve l'equazione caratteristica, perciò si cerca $\bar{y} = A\,x\,e^{2x}$. Si ha $\bar{y}' = A\,(1 + 2x)\,e^{2x}$ e $\bar{y}'' = A\,(4 + 4x)\,e^{2x}$, e sostituendo si ottiene $A\,e^{2x} \big( 4 + 4x - 1 - 2x - 2x \big) = 3A\,e^{2x}$. Dalla condizione $3A = 3$ segue $A = 1$, quindi $\bar{y} = x\,e^{2x}$.

Nel primo caso l'integrale generale è $y = c_1\,e^{2x} + c_2\,e^{-x} - 2x + 1$.
:::

:::esempio{titolo="Termine noto goniometrico"}
Per $y'' + 4y = 3\sin x$ si cerca $\bar{y} = A \cos x + B \sin x$. Poiché $\bar{y}'' = -A \cos x - B \sin x$, si ottiene
$$
3A \cos x + 3B \sin x = 3 \sin x ,
$$
quindi $A = 0$ e $B = 1$. La soluzione particolare è $\bar{y} = \sin x$, e l'integrale generale è $y = c_1 \cos 2x + c_2 \sin 2x + \sin x$.
:::

:::attenzione
Quando il termine noto risolve l'equazione omogenea, la funzione dello stesso tipo non dà una soluzione particolare. Per $y'' + 4y = 4\cos 2x$ si ha $b = 0$ e $\omega^2 = 4 = \dfrac{c}{a}$; sostituendo $A \cos 2x + B \sin 2x$ nel primo membro si ottiene $0$, e nessun valore di $A$ e $B$ dà $4 \cos 2x$. Si cerca allora $\bar{y} = x\,(A \cos 2x + B \sin 2x)$, e la sostituzione dà $-4A \sin 2x + 4B \cos 2x = 4 \cos 2x$. Quindi $A = 0$, $B = 1$ e $\bar{y} = x \sin 2x$, una funzione che oscilla con ampiezza crescente. In fisica questo fenomeno si chiama **risonanza**.
:::

## Crescita, decadimento e raffreddamento

:::definizione{#decadimento-radioattivo titolo="Decadimento radioattivo"}
In un campione di sostanza radioattiva il numero di nuclei che decadono nell'unità di tempo è proporzionale al numero $N(t)$ di nuclei presenti. Perciò $N(t)$ soddisfa l'equazione
$$
N'(t) = -k\,N(t) ,
$$
dove $k > 0$ è la **costante di decadimento**. È un'equazione lineare omogenea, e con la condizione $N(0) = N_0$ ha soluzione $N(t) = N_0\,e^{-kt}$. Il **tempo di dimezzamento** $T$ è il tempo in cui il numero di nuclei si riduce alla metà. Dalla condizione $e^{-kT} = \dfrac{1}{2}$ si ricava
$$
T = \frac{\ln 2}{k} .
$$
La stessa legge vale per la massa del campione, che è proporzionale al numero di nuclei. Per un isotopo con $T = 8$ giorni e una massa iniziale di $8\,\mathrm{g}$ si ha $k = \dfrac{\ln 2}{8}$ e $m(t) = 8\,e^{-\frac{\ln 2}{8} t} = 8 \cdot 2^{-\frac{t}{8}}$; dopo $24$ giorni, cioè tre tempi di dimezzamento, restano $8 \cdot 2^{-3} = 1\,\mathrm{g}$.

::grafico{f="8*exp(-log(2)*x/8)" punti="0,8,pieno;8,4,pieno;16,2,pieno;24,1,pieno" segmenti="8,0,8,4;16,0,16,2;24,0,24,1" xmin=0 xmax=40 ymin=-1 ymax=9 nomi="t,m" legenda="m = 8 \cdot 2^{-\frac{t}{8}}" titolo="La massa di un isotopo con tempo di dimezzamento di $8$ giorni si dimezza ogni $8$ giorni"}

:::

:::definizione{#crescita-popolazione titolo="Crescita di una popolazione"}
Nel **modello di Malthus** la velocità di crescita di una popolazione è proporzionale al numero $P(t)$ di individui, cioè $P'(t) = k\,P(t)$ con $k > 0$. La soluzione con $P(0) = P_0$ è $P(t) = P_0\,e^{kt}$, che cresce senza limiti. Per esempio una colonia di $500$ batteri che raddoppia ogni $2$ ore ha $k = \dfrac{\ln 2}{2}$ e $P(t) = 500 \cdot 2^{\frac{t}{2}}$.

Nel **modello logistico** l'ambiente può sostenere al massimo $M$ individui, e la crescita si riduce quando $P$ si avvicina a $M$:
$$
P'(t) = k\,P(t) \left( 1 - \frac{P(t)}{M} \right) .
$$
È un'equazione a variabili separabili; scomponendo $\dfrac{M}{P\,(M - P)} = \dfrac{1}{P} + \dfrac{1}{M - P}$, come negli integrali di funzioni razionali fratte, si trova la soluzione con $P(0) = P_0$, $0 < P_0 < M$:
$$
P(t) = \frac{M}{1 + \dfrac{M - P_0}{P_0}\,e^{-kt}} .
$$
Per $t \to +\infty$ l'esponenziale tende a $0$, quindi $P(t)$ tende a $M$. Le soluzioni costanti $P = 0$ e $P = M$ corrispondono a una popolazione assente e a una popolazione che ha già raggiunto il valore massimo.

::grafico{f="10/(1+9*exp(-x/2))" punti="0,1,pieno" asintoti="y=10" xmin=0 xmax=20 ymin=-2 ymax=12 nomi="t,P" legenda="P = \dfrac{10}{1 + 9e^{-\frac{t}{2}}}" titolo="Soluzione logistica con $M = 10$, $P_0 = 1$ e $k = \dfrac{1}{2}$, che tende al valore massimo $M = 10$"}

:::

:::osservazione{#legge-raffreddamento titolo="Legge di raffreddamento di Newton"}
Un corpo alla temperatura $T(t)$ in un ambiente alla temperatura costante $T_a$ si raffredda, o si riscalda, con velocità proporzionale alla differenza di temperatura:
$$
T'(t) = -k\,\big( T(t) - T_a \big) ,
\qquad
k > 0 .
$$
La funzione $u(t) = T(t) - T_a$ ha derivata $u' = T'$, quindi soddisfa $u' = -k\,u$, e $u(t) = u(0)\,e^{-kt}$. Perciò
$$
T(t) = T_a + \big( T(0) - T_a \big)\,e^{-kt} ,
$$
e la temperatura tende a quella dell'ambiente. Per esempio una tazza a $90\,^{\circ}\mathrm{C}$ in una stanza a $20\,^{\circ}\mathrm{C}$ ha $T(t) = 20 + 70\,e^{-kt}$.
:::

## Circuito RC e moto armonico

:::definizione{#circuito-rc titolo="Carica di un condensatore nel circuito RC"}
Un condensatore di capacità $C$, inizialmente scarico, è collegato a un generatore di forza elettromotrice $E$ attraverso un resistore di resistenza $R$. Sia $q(t)$ la carica sulle armature; l'intensità di corrente è $i(t) = q'(t)$, come si è visto nell'argomento sulle derivate. Per la legge delle maglie la forza elettromotrice è uguale alla somma delle differenze di potenziale ai capi del resistore e del condensatore, quindi
$$
R\,q'(t) + \frac{q(t)}{C} = E .
$$
È un'equazione lineare a coefficienti costanti. Dividendo per $R$ si ha $q' + \dfrac{1}{RC}\,q = \dfrac{E}{R}$, e con la condizione $q(0) = 0$ si trova
$$
q(t) = CE \left( 1 - e^{-\frac{t}{RC}} \right) ,
\qquad
i(t) = \frac{E}{R}\,e^{-\frac{t}{RC}} .
$$
Il prodotto $\tau = RC$ si chiama **costante di tempo** del circuito. Per $R = 1000\,\Omega$, $C = 2\,\mathrm{mF}$ ed $E = 6\,\mathrm{V}$ si ha $\tau = 2\,\mathrm{s}$ e $CE = 12\,\mathrm{mC}$, quindi $q(t) = 12 \left( 1 - e^{-\frac{t}{2}} \right)$ millicoulomb. La carica tende al valore finale $12\,\mathrm{mC}$, e dopo un tempo $\tau$ ne ha raggiunto la frazione $1 - e^{-1} \approx 63\%$.

::grafico{f="12*(1-exp(-x/2))" asintoti="y=12" punti="2,7.59,pieno" segmenti="2,0,2,7.59" xmin=0 xmax=10 ymin=-2 ymax=14 nomi="t,q" legenda="q = 12\left(1 - e^{-\frac{t}{2}}\right)" titolo="Carica del condensatore con $\tau = RC = 2\,\mathrm{s}$; all'istante $t = \tau$ la carica è circa il $63\%$ del valore finale $12\,\mathrm{mC}$"}

:::

:::osservazione{#attrito-viscoso titolo="Scarica del condensatore e caduta con attrito viscoso"}
Se il condensatore, con carica iniziale $Q_0$, si scarica sul resistore senza generatore, l'equazione diventa $R\,q' + \dfrac{q}{C} = 0$, e la soluzione è $q(t) = Q_0\,e^{-\frac{t}{RC}}$, con la stessa legge del decadimento radioattivo.

Un corpo di massa $m$ che cade in un fluido è soggetto al peso $mg$ e a una forza di attrito $-\gamma\,v$ proporzionale alla velocità. Per il secondo principio della dinamica $m\,v' = mg - \gamma\,v$, che è un'equazione lineare a coefficienti costanti in $v$. Per l'osservazione sulle equazioni con coefficienti costanti la velocità tende alla **velocità limite** $v_L = \dfrac{mg}{\gamma}$, e con $v(0) = 0$ si ha $v(t) = v_L \left( 1 - e^{-\frac{\gamma}{m} t} \right)$.
:::

:::definizione{#moto-armonico titolo="Moto armonico"}
Un corpo di massa $m$ attaccato a una molla di costante elastica $k$ si muove lungo l'asse $x$ senza attrito, e la posizione $x$ si misura a partire dalla posizione di riposo $x = 0$. La forza elastica è $-k\,x$, e per il secondo principio della dinamica $m\,x''(t) = -k\,x(t)$. Posto $\omega = \sqrt{\dfrac{k}{m}}$, si ottiene l'equazione del **moto armonico**
$$
x''(t) + \omega^2 x(t) = 0 .
$$
L'equazione caratteristica $\lambda^2 + \omega^2 = 0$ ha $\Delta = -4\omega^2 < 0$, con $\alpha = 0$ e $\beta = \omega$, quindi la legge del moto è
$$
x(t) = c_1 \cos \omega t + c_2 \sin \omega t .
$$
È una funzione periodica di periodo $T = \dfrac{2\pi}{\omega}$, e si scrive anche nella forma $x(t) = A \cos(\omega t + \varphi)$, con **ampiezza** $A = \sqrt{c_1^2 + c_2^2}$. Le costanti si determinano con la posizione e la velocità iniziali, perché $x(0) = c_1$ e $x'(0) = \omega\,c_2$.

Per esempio con $m = 0{,}5\,\mathrm{kg}$ e $k = 8\,\mathrm{N/m}$ si ha $\omega = 4\,\mathrm{rad/s}$ e $T = \dfrac{\pi}{2}\,\mathrm{s}$. Se $x(0) = 2\,\mathrm{cm}$ e $x'(0) = 8\,\mathrm{cm/s}$, allora $c_1 = 2$ e $c_2 = \dfrac{8}{4} = 2$, cioè $x(t) = 2 \cos 4t + 2 \sin 4t$, con ampiezza $A = \sqrt{8} = 2\sqrt{2}\,\mathrm{cm}$.

::grafico{f="2*cos(4*x)+2*sin(4*x)" punti="0,2,pieno" segmenti="0,2.83,4,2.83;0,-2.83,4,-2.83" xmin=0 xmax=4 ymin=-4 ymax=4 nomi="t,x" legenda="x = 2\cos 4t + 2\sin 4t" titolo="Moto armonico con $\omega = 4\,\mathrm{rad/s}$, periodo $T = \dfrac{\pi}{2}\,\mathrm{s}$ e ampiezza $2\sqrt{2}\,\mathrm{cm}$"}

:::

:::osservazione{#oscillatore-smorzato titolo="Oscillazioni smorzate e forzate"}
Se sul corpo agisce anche un attrito viscoso $-\gamma\,x'$, l'equazione diventa $m\,x'' + \gamma\,x' + k\,x = 0$. Quando l'attrito è piccolo il discriminante $\gamma^2 - 4mk$ è negativo, e la soluzione ha la forma $e^{\alpha t} \left( c_1 \cos \beta t + c_2 \sin \beta t \right)$ con $\alpha = -\dfrac{\gamma}{2m} < 0$. Il corpo oscilla con ampiezza che decresce nel tempo, come la soluzione di $y'' + 2y' + 5y = 0$ vista nel caso con discriminante negativo. Se invece non c'è attrito e sul corpo agisce una forza esterna periodica $F \cos \omega t$ con la stessa pulsazione $\omega$ della molla, l'equazione completa ha soluzioni con ampiezza crescente, come nell'esempio della risonanza.
:::
