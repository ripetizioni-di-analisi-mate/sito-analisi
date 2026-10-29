---
titolo: Integrali indefiniti
sommario: Che cosa sono le primitive di una funzione e l'integrale indefinito, come si calcolano gli integrali immediati e quelli di funzioni composte, come si usano l'integrazione per sostituzione e per parti e come si integrano le funzioni razionali fratte con denominatore di primo e di secondo grado.
---

## Primitive e integrale indefinito

:::definizione{#primitiva titolo="Primitiva"}
Nell'argomento sulle derivate a ogni funzione si associa la sua derivata. Qui si risolve il problema inverso, cioè si cerca una funzione di cui si conosce la derivata. Sia $f$ una funzione definita in un intervallo $I$. Una funzione $F$ derivabile in $I$ si chiama **primitiva** di $f$ in $I$ se
$$
F'(x) = f(x) \qquad \text{per ogni } x \text{ di } I .
$$
Per esempio $F(x) = x^2$ è una primitiva di $f(x) = 2x$ in $\mathbb{R}$, perché $\left( x^2 \right)' = 2x$. Anche $x^2 + 5$ e $x^2 - 7$ sono primitive di $2x$, perché la derivata di una costante è $0$. Una funzione che ha una primitiva ne ha quindi infinite.
:::

:::richiamo{titolo="Funzioni con derivata nulla"}
Sia $g$ derivabile in un intervallo $I$, con $g'(x) = 0$ per ogni $x$ di $I$. Allora $g$ è costante in $I$.
:::

:::teorema{#primitive-di-una-funzione titolo="Primitive di una stessa funzione"}
Sia $F$ una primitiva di $f$ nell'intervallo $I$. Allora le primitive di $f$ in $I$ sono *tutte e sole* le funzioni
$$
F(x) + c , \qquad \text{con } c \text{ numero reale} .
$$
Ogni funzione $F(x) + c$ è una primitiva, perché la sua derivata è $F'(x) = f(x)$. Viceversa, se $G$ è un'altra primitiva, la differenza $G - F$ ha derivata $f - f = 0$ in tutto l'intervallo; per il teorema sulle funzioni con derivata nulla, che si studia nell'argomento sui teoremi del calcolo differenziale, la differenza è quindi una costante $c$, e $G = F + c$.

I grafici delle primitive si ottengono perciò l'uno dall'altro con una traslazione verticale. Per esempio le primitive di $f(x) = x^2 - 1$ sono le funzioni $\dfrac{x^3}{3} - x + c$. In ogni ascissa i loro grafici hanno la stessa pendenza, uguale a $f(x)$.

::grafico{f="x^3/3-x;x^3/3-x+2" segmenti="2,0.667,2,2.667;-2,-0.667,-2,1.333" xmin=-3 xmax=3 ymin=-3 ymax=5 legenda="y = \dfrac{x^3}{3} - x;y = \dfrac{x^3}{3} - x + 2" titolo="Due primitive di $f(x) = x^2 - 1$; i loro grafici distano $2$ in verticale in ogni ascissa, e in ogni ascissa hanno la stessa pendenza $f(x)$"}

:::

:::definizione{#integrale-indefinito titolo="Integrale indefinito"}
L'**integrale indefinito** di $f$ è l'insieme di tutte le primitive di $f$, e si scrive
$$
\int f(x)\,dx = F(x) + c ,
$$
dove $F$ è una primitiva qualsiasi di $f$ e $c$ è una costante arbitraria, detta **costante di integrazione**. La funzione $f$ si chiama **funzione integranda**, e il simbolo $dx$ indica che la variabile è $x$. Per esempio
$$
\int 3x^2\,dx = x^3 + c ,
\qquad
\int \cos x\,dx = \sin x + c .
$$
Ogni integrale indefinito si controlla derivando il risultato, perché la derivata di $F(x) + c$ deve essere la funzione integranda. Per il primo esempio $\left( x^3 + c \right)' = 3x^2$.
:::

:::teorema{#esistenza-primitive titolo="Esistenza delle primitive"}
Ogni funzione continua in un intervallo ha una primitiva in quell'intervallo.

Le funzioni che si incontrano negli esercizi, cioè polinomi, funzioni razionali, radici, esponenziali, logaritmi e funzioni goniometriche, sono continue negli intervalli in cui sono definite, quindi in quegli intervalli hanno primitive. Per esempio $f(x) = \dfrac{1}{x^2 + 1}$ è continua su tutto $\mathbb{R}$, quindi ha primitive su $\mathbb{R}$; una di esse è $\arctan x$, come risulta dalla tabella degli integrali immediati. Il teorema si dimostra con il teorema fondamentale del calcolo integrale, nell'argomento sugli integrali definiti.
:::

:::osservazione{#grafico-primitiva titolo="Dal grafico di una funzione al grafico di una sua primitiva"}
Poiché $F'(x) = f(x)$, il segno di $f$ è il segno della derivata di $F$. Per il criterio di monotonia, una primitiva $F$ è quindi crescente negli intervalli in cui $f > 0$ e decrescente negli intervalli in cui $f < 0$; nei punti in cui $f$ cambia segno il grafico di $F$ ha un massimo o un minimo relativo, con tangente orizzontale.

Per esempio $F(x) = (x - 1)\,e^{x}$ è una primitiva di $f(x) = x\,e^{x}$, perché per la regola del prodotto $F'(x) = e^{x} + (x - 1)\,e^{x} = x\,e^{x}$. La funzione $f$ è negativa per $x < 0$ e positiva per $x > 0$, perciò $F$ decresce per $x < 0$, cresce per $x > 0$ e ha un **minimo** in $x = 0$, dove vale $F(0) = -1$.

::grafico{f="x*exp(x);(x-1)*exp(x)" punti="0,-1,pieno;0,0,pieno" xmin=-4 xmax=2 ymin=-2 ymax=4 legenda="y = x\,e^{x};y = (x - 1)\,e^{x}" titolo="La primitiva $F(x) = (x - 1)\,e^{x}$ di $f(x) = x\,e^{x}$ ha un minimo in $x = 0$, dove $f$ passa da valori negativi a valori positivi"}

:::

:::osservazione{#primitiva-per-un-punto titolo="Primitiva che passa per un punto"}
Tra le infinite primitive di $f$ ce n'è una sola il cui grafico passa per un punto assegnato $P(x_0, y_0)$, con $x_0$ nell'intervallo. Infatti la condizione $F(x_0) + c = y_0$ determina il valore di $c$. Per esempio le primitive di $f(x) = 6x - 2$ sono $3x^2 - 2x + c$. La primitiva che passa per $P(1, 4)$ soddisfa $3 - 2 + c = 4$, quindi $c = 3$, e la primitiva cercata è
$$
F(x) = 3x^2 - 2x + 3 .
$$

::grafico{f="3*x^2-2*x;3*x^2-2*x+3" punti="1,4,pieno,P" xmin=-2 xmax=3 ymin=-2 ymax=10 legenda="y = 3x^2 - 2x;y = 3x^2 - 2x + 3" titolo="Tra le primitive di $f(x) = 6x - 2$, la funzione $F(x) = 3x^2 - 2x + 3$ è quella il cui grafico passa per $P(1, 4)$"}

:::

:::osservazione{#moto-da-accelerazione titolo="Velocità e posizione dall'accelerazione"}
In fisica la velocità è la derivata della posizione e l'accelerazione è la derivata della velocità, come si è visto nell'argomento sulle derivate. Perciò la velocità $v(t)$ è una primitiva dell'accelerazione $a(t)$, e la legge oraria $s(t)$ è una primitiva della velocità. Le costanti di integrazione si determinano con la velocità e la posizione all'istante iniziale.

Per esempio un corpo si muove lungo una retta con accelerazione $a(t) = 6t - 2$, in $\mathrm{m/s^2}$, e all'istante $t = 0$ si trova in $s = 0$ con velocità $1\,\mathrm{m/s}$. Allora
$$
v(t) = \int (6t - 2)\,dt = 3t^2 - 2t + c_1 ,
\qquad
v(0) = 1 \;\Longrightarrow\; c_1 = 1 ,
$$
$$
s(t) = \int \left( 3t^2 - 2t + 1 \right) dt = t^3 - t^2 + t + c_2 ,
\qquad
s(0) = 0 \;\Longrightarrow\; c_2 = 0 .
$$
All'istante $t = 2\,\mathrm{s}$ il corpo si trova quindi in $s(2) = 8 - 4 + 2 = 6\,\mathrm{m}$. Questo è il primo esempio di equazione differenziale, cioè di equazione in cui l'incognita è una funzione; le equazioni differenziali si studiano nell'argomento dedicato.

::grafico{f="x^3-x^2+x" punti="2,6,pieno" segmenti="2,0,2,6;0,6,2,6" xmin=-1 xmax=3 ymin=-2 ymax=10 nomi="t,s" legenda="s = t^3 - t^2 + t" titolo="La legge oraria $s(t) = t^3 - t^2 + t$ è la primitiva di $v(t) = 3t^2 - 2t + 1$ che vale $0$ per $t = 0$; all'istante $t = 2$ il corpo si trova in $s = 6$"}

:::

## Proprietà di linearità

:::teorema{#linearita titolo="Linearità dell'integrale indefinito"}
Siano $f$ e $g$ funzioni che hanno primitive in un intervallo e sia $k$ un numero reale. Allora
$$
\int k\,f(x)\,dx = k \int f(x)\,dx ,
\qquad
\int \big( f(x) + g(x) \big)\,dx = \int f(x)\,dx + \int g(x)\,dx .
$$
In parole, una costante moltiplicativa si porta fuori dal segno di integrale, e l'integrale di una somma è la somma degli integrali. Le due formule seguono dalle regole di derivazione del prodotto per una costante e della somma. Con la linearità un polinomio si integra termine per termine:
$$
\int \left( 4x^3 - 6x + 2 \right) dx = 4 \cdot \frac{x^4}{4} - 6 \cdot \frac{x^2}{2} + 2x + c = x^4 - 3x^2 + 2x + c .
$$
Le costanti di integrazione dei singoli termini si sommano in un'unica costante $c$.
:::

:::attenzione
L'integrale di un prodotto è diverso dal prodotto degli integrali. Per $f(x) = g(x) = x$ il prodotto è $x^2$, il cui integrale è $\dfrac{x^3}{3} + c$, mentre il prodotto delle primitive $\dfrac{x^2}{2} \cdot \dfrac{x^2}{2} = \dfrac{x^4}{4}$ ha derivata $x^3$, che è diversa da $x^2$. Per i prodotti si usano l'integrazione per sostituzione e l'integrazione per parti.
:::

## Integrali immediati

:::teorema{#integrali-immediati titolo="Integrali immediati"}
Leggendo al contrario la tabella delle derivate delle funzioni elementari si ottengono gli **integrali immediati**, validi negli intervalli in cui le funzioni sono definite.

| $f(x)$ | $\displaystyle\int f(x)\,dx$ |
| --- | --- |
| $k$ (costante) | $k\,x + c$ |
| $x^{a}$, con $a \neq -1$ | $\dfrac{x^{a + 1}}{a + 1} + c$ |
| $\dfrac{1}{x}$ | $\ln \lvert x \rvert + c$ |
| $e^{x}$ | $e^{x} + c$ |
| $a^{x}$, con $a > 0$ e $a \neq 1$ | $\dfrac{a^{x}}{\ln a} + c$ |
| $\sin x$ | $-\cos x + c$ |
| $\cos x$ | $\sin x + c$ |
| $\dfrac{1}{\cos^2 x}$ | $\tan x + c$ |
| $\dfrac{1}{\sin^2 x}$ | $-\dfrac{1}{\tan x} + c$ |
| $\dfrac{1}{1 + x^2}$ | $\arctan x + c$ |
| $\dfrac{1}{\sqrt{1 - x^2}}$ | $\arcsin x + c$ |

Ogni riga si verifica derivando la seconda colonna. Per esempio $\left( \dfrac{x^{a + 1}}{a + 1} \right)' = \dfrac{(a + 1)\,x^{a}}{a + 1} = x^{a}$, e la condizione $a \neq -1$ serve perché per $a = -1$ il denominatore $a + 1$ è nullo.
:::

:::esempio{titolo="Radici e potenze con esponente negativo"}
La formula delle potenze vale anche per radici e reciproci, purché si scrivano prima come potenze. Per $x > 0$ si ha $\sqrt{x} = x^{\frac{1}{2}}$ e $\dfrac{1}{x^3} = x^{-3}$, quindi
$$
\begin{aligned}
\int \left( 3\sqrt{x} - \frac{2}{x^3} \right) dx
&= 3 \int x^{\frac{1}{2}}\,dx - 2 \int x^{-3}\,dx \\[6pt]
&= 3 \cdot \frac{x^{\frac{3}{2}}}{\frac{3}{2}} - 2 \cdot \frac{x^{-2}}{-2} + c \\[6pt]
&= 2\,x^{\frac{3}{2}} + \frac{1}{x^2} + c = 2x\sqrt{x} + \frac{1}{x^2} + c .
\end{aligned}
$$
Allo stesso modo $\displaystyle\int \left( 2\cos x - 3\sin x \right) dx = 2\sin x + 3\cos x + c$ e $\displaystyle\int 2^{x}\,dx = \dfrac{2^{x}}{\ln 2} + c$.
:::

:::osservazione{#primitiva-reciproco titolo="Il valore assoluto nella primitiva del reciproco"}
La funzione $\dfrac{1}{x}$ è definita per $x \neq 0$, cioè nei due intervalli $x < 0$ e $x > 0$. Per $x > 0$ si ha $(\ln x)' = \dfrac{1}{x}$. Per $x < 0$ il logaritmo $\ln x$ non è definito, mentre $\ln(-x)$ lo è, e per la regola della funzione composta
$$
\big( \ln(-x) \big)' = \frac{1}{-x} \cdot (-1) = \frac{1}{x} .
$$
Le due formule si riassumono nella scrittura $\ln \lvert x \rvert$, che è una primitiva di $\dfrac{1}{x}$ in ciascuno dei due intervalli.

::grafico{f="1/x;log(abs(x))" asintoti="x=0" xmin=-4 xmax=4 ymin=-3 ymax=3 legenda="y = \dfrac{1}{x};y = \ln |x|" titolo="La funzione $\ln |x|$ è una primitiva di $\dfrac{1}{x}$ sia per $x < 0$ sia per $x > 0$; dove $\dfrac{1}{x}$ è negativa la primitiva decresce, dove è positiva cresce"}

:::

:::osservazione{#primitiva-arcotangente titolo="L'arcotangente come primitiva"}
La funzione $\dfrac{1}{1 + x^2}$ è razionale, mentre la sua primitiva $\arctan x$ è una funzione goniometrica inversa. La funzione integranda è positiva su tutto $\mathbb{R}$, quindi l'arcotangente è crescente; il valore massimo dell'integranda è $1$, in $x = 0$, e in quel punto la tangente al grafico dell'arcotangente ha coefficiente angolare $1$. Questo integrale serve per le funzioni razionali fratte con denominatore di secondo grado senza radici reali.

::grafico{f="1/(1+x^2);atan(x)" punti="0,0,pieno;0,1,pieno" asintoti="y=1.5708;y=-1.5708" xmin=-5 xmax=5 ymin=-2 ymax=2 legenda="y = \dfrac{1}{1 + x^2};y = \arctan x" titolo="La funzione $\arctan x$ è la primitiva di $\dfrac{1}{1 + x^2}$ che vale $0$ in $x = 0$; i suoi asintoti orizzontali sono $y = \dfrac{\pi}{2}$ e $y = -\dfrac{\pi}{2}$"}

:::

## Integrali di funzioni composte

:::teorema{#integrali-funzioni-composte titolo="Integrali di funzioni composte"}
Sia $g$ una funzione derivabile, con derivata $g'$ continua. Dalla regola di derivazione della funzione composta seguono le formule

| funzione integranda | integrale |
| --- | --- |
| $g(x)^{a} \cdot g'(x)$, con $a \neq -1$ | $\dfrac{g(x)^{a + 1}}{a + 1} + c$ |
| $\dfrac{g'(x)}{g(x)}$ | $\ln \lvert g(x) \rvert + c$ |
| $e^{g(x)} \cdot g'(x)$ | $e^{g(x)} + c$ |
| $\sin g(x) \cdot g'(x)$ | $-\cos g(x) + c$ |
| $\cos g(x) \cdot g'(x)$ | $\sin g(x) + c$ |
| $\dfrac{g'(x)}{1 + g(x)^2}$ | $\arctan g(x) + c$ |
| $\dfrac{g'(x)}{\sqrt{1 - g(x)^2}}$ | $\arcsin g(x) + c$ |

Ogni formula si verifica derivando il secondo membro. Per esempio la derivata di $e^{g(x)}$ è $e^{g(x)} \cdot g'(x)$. Le formule si usano quando la funzione integranda contiene una funzione $g(x)$ e, come fattore, la sua derivata $g'(x)$. Per esempio, con $g(x) = x^3 + 1$ e $g'(x) = 3x^2$,
$$
\int 3x^2 \left( x^3 + 1 \right)^4 dx = \frac{\left( x^3 + 1 \right)^5}{5} + c .
$$
:::

:::esempio{titolo="Derivata della funzione interna a meno di una costante"}
Quando nella funzione integranda la derivata $g'(x)$ compare moltiplicata per una costante diversa, si moltiplica e si divide per un numero opportuno. Nell'integrale di $\dfrac{x}{x^2 + 4}$ la derivata del denominatore è $2x$, quindi
$$
\int \frac{x}{x^2 + 4}\,dx = \frac{1}{2} \int \frac{2x}{x^2 + 4}\,dx = \frac{1}{2} \ln \left( x^2 + 4 \right) + c ,
$$
dove il valore assoluto non serve perché $x^2 + 4 > 0$. Allo stesso modo, poiché la derivata di $-x^2$ è $-2x$,
$$
\int x\,e^{-x^2}\,dx = -\frac{1}{2} \int (-2x)\,e^{-x^2}\,dx = -\frac{1}{2}\,e^{-x^2} + c .
$$
Altri due esempi sono $\displaystyle\int \sin^3 x \cos x\,dx = \dfrac{\sin^4 x}{4} + c$, con $g(x) = \sin x$, e
$$
\int \tan x\,dx = \int \frac{\sin x}{\cos x}\,dx = -\int \frac{-\sin x}{\cos x}\,dx = -\ln \lvert \cos x \rvert + c .
$$
:::

:::teorema{#funzione-interna-lineare titolo="Funzione interna di primo grado"}
Sia $F$ una primitiva di $f$ e siano $m$ e $q$ numeri reali, con $m \neq 0$. Allora
$$
\int f(m x + q)\,dx = \frac{1}{m}\,F(m x + q) + c .
$$
La formula è il caso delle funzioni composte con $g(x) = m x + q$, la cui derivata è la costante $m$. Per esempio
$$
\int \cos (3x)\,dx = \frac{\sin (3x)}{3} + c ,
\qquad
\int (2x - 1)^5\,dx = \frac{1}{2} \cdot \frac{(2x - 1)^6}{6} + c = \frac{(2x - 1)^6}{12} + c ,
$$
$$
\int \frac{1}{2x + 1}\,dx = \frac{1}{2} \ln \lvert 2x + 1 \rvert + c ,
\qquad
\int e^{-4x}\,dx = -\frac{1}{4}\,e^{-4x} + c .
$$
:::

:::attenzione
La formula delle potenze di una funzione composta richiede il fattore $g'(x)$. Nell'integrale di $\left( x^2 + 1 \right)^2$ il fattore $2x$ manca, e la funzione $\dfrac{\left( x^2 + 1 \right)^3}{3}$ *non* è una primitiva, perché la sua derivata è $2x \left( x^2 + 1 \right)^2$. Il fattore $2x$ contiene la variabile, quindi non si aggiusta moltiplicando e dividendo per una costante. In questo caso si sviluppa il quadrato:
$$
\int \left( x^2 + 1 \right)^2 dx = \int \left( x^4 + 2x^2 + 1 \right) dx = \frac{x^5}{5} + \frac{2x^3}{3} + x + c .
$$
:::

## Integrazione per sostituzione

:::teorema{#integrazione-per-sostituzione titolo="Integrazione per sostituzione"}
Sia $f$ continua e sia $x = \varphi(t)$ una funzione invertibile, derivabile con derivata continua. Allora
$$
\int f(x)\,dx = \int f\big( \varphi(t) \big)\,\varphi'(t)\,dt ,
$$
e dopo aver calcolato l'integrale a secondo membro si torna alla variabile $x$ sostituendo $t = \varphi^{-1}(x)$. In pratica si sceglie una nuova variabile $t$ che rende più semplice la funzione integranda, si esprimono $x$ e $dx = \varphi'(t)\,dt$ in funzione di $t$, si integra rispetto a $t$ e si torna a $x$. La formula segue dalla regola di derivazione della funzione composta; la dimostrazione si studia all'università.

Per esempio, nell'integrale di $\dfrac{1}{1 + \sqrt{x}}$, con $x \geq 0$, si pone $t = \sqrt{x}$. Allora $x = t^2$, con $t \geq 0$, e $dx = 2t\,dt$. Poiché $\dfrac{t}{1 + t} = \dfrac{(1 + t) - 1}{1 + t} = 1 - \dfrac{1}{1 + t}$, si ottiene
$$
\begin{aligned}
\int \frac{1}{1 + \sqrt{x}}\,dx
&= \int \frac{2t}{1 + t}\,dt \\[6pt]
&= 2 \int \left( 1 - \frac{1}{1 + t} \right) dt \\[6pt]
&= 2t - 2 \ln (1 + t) + c \\[6pt]
&= 2\sqrt{x} - 2 \ln \left( 1 + \sqrt{x} \right) + c .
\end{aligned}
$$
Il valore assoluto non serve, perché $1 + t > 0$.
:::

:::esempio{titolo="Sostituzione per una radice di primo grado"}
Nell'integrale di $x\sqrt{x + 1}$, con $x \geq -1$, la radice contiene un'espressione di primo grado. Si pone $t = \sqrt{x + 1}$, cioè $x = t^2 - 1$, con $t \geq 0$, e $dx = 2t\,dt$. La funzione integranda diventa $\left( t^2 - 1 \right) t$, quindi
$$
\begin{aligned}
\int x\sqrt{x + 1}\,dx
&= \int \left( t^2 - 1 \right) t \cdot 2t\,dt \\[6pt]
&= 2 \int \left( t^4 - t^2 \right) dt \\[6pt]
&= \frac{2}{5}\,t^5 - \frac{2}{3}\,t^3 + c \\[6pt]
&= \frac{2}{5}\,(x + 1)^{\frac{5}{2}} - \frac{2}{3}\,(x + 1)^{\frac{3}{2}} + c .
\end{aligned}
$$
Anche gli integrali di funzioni composte si calcolano per sostituzione. Nell'integrale di $3x^2 \left( x^3 + 1 \right)^4$, con $t = x^3 + 1$ si ha $dt = 3x^2\,dx$, e l'integrale diventa $\displaystyle\int t^4\,dt = \dfrac{t^5}{5} + c$.
:::

:::esempio{titolo="Sostituzione con l'esponenziale"}
Nell'integrale di $\dfrac{e^{x}}{e^{2x} + 1}$ si pone $t = e^{x}$. Allora $dt = e^{x}\,dx$ ed $e^{2x} = t^2$, quindi
$$
\int \frac{e^{x}}{e^{2x} + 1}\,dx = \int \frac{1}{t^2 + 1}\,dt = \arctan t + c = \arctan \left( e^{x} \right) + c .
$$
Il risultato si controlla derivando, perché $\big( \arctan \left( e^{x} \right) \big)' = \dfrac{e^{x}}{1 + e^{2x}}$.
:::

## Integrazione per parti

:::teorema{#integrazione-per-parti titolo="Integrazione per parti"}
Siano $f$ e $g$ derivabili, con derivate continue, in un intervallo. Allora
$$
\int f(x)\,g'(x)\,dx = f(x)\,g(x) - \int f'(x)\,g(x)\,dx .
$$
Il fattore $f(x)$ si chiama **fattore finito**, e di esso si calcola la derivata; il fattore $g'(x)$ si chiama **fattore differenziale**, e di esso si calcola una primitiva. La formula si ricava dalla regola di derivazione del prodotto. Infatti $(f g)' = f' g + f g'$, quindi $f g$ è una primitiva di $f' g + f g'$, e per la linearità $f g = \displaystyle\int f' g\,dx + \displaystyle\int f g'\,dx$; portando il primo integrale a primo membro si ottiene la formula.

La formula è utile quando l'integrale a secondo membro è più semplice di quello di partenza. Per esempio, con $f(x) = x$ e $g'(x) = \cos x$, si ha $f'(x) = 1$ e $g(x) = \sin x$, quindi
$$
\int x \cos x\,dx = x \sin x - \int \sin x\,dx = x \sin x + \cos x + c .
$$
:::

:::osservazione{#scelta-fattori titolo="Scelta del fattore finito"}
Il fattore finito si sceglie in modo che la sua derivata sia più semplice.

- Nei prodotti di un polinomio per $e^{x}$, $\sin x$ o $\cos x$ il fattore finito è il polinomio, perché a ogni derivazione il suo grado diminuisce di $1$.
- Nei prodotti di un polinomio per $\ln x$ o $\arctan x$ il fattore finito è il logaritmo o l'arcotangente, perché la loro derivata è una funzione razionale.

Per esempio, con fattore finito $\ln x$ e fattore differenziale $1$, per $x > 0$
$$
\int \ln x\,dx = x \ln x - \int x \cdot \frac{1}{x}\,dx = x \ln x - x + c .
$$
Con fattore finito $\arctan x$ e fattore differenziale $1$ si ottiene
$$
\int \arctan x\,dx = x \arctan x - \int \frac{x}{1 + x^2}\,dx = x \arctan x - \frac{1}{2} \ln \left( 1 + x^2 \right) + c .
$$
:::

:::esempio{titolo="Due integrazioni per parti di seguito"}
Nell'integrale di $x^2 e^{x}$ il fattore finito è $x^2$ e il fattore differenziale è $e^{x}$. Dopo la prima integrazione per parti resta l'integrale di $2x\,e^{x}$, che si calcola con una seconda integrazione per parti:
$$
\begin{aligned}
\int x^2 e^{x}\,dx
&= x^2 e^{x} - \int 2x\,e^{x}\,dx \\[6pt]
&= x^2 e^{x} - \left( 2x\,e^{x} - \int 2\,e^{x}\,dx \right) \\[6pt]
&= x^2 e^{x} - 2x\,e^{x} + 2\,e^{x} + c \\[6pt]
&= \left( x^2 - 2x + 2 \right) e^{x} + c .
\end{aligned}
$$
:::

:::esempio{titolo="Un integrale che ricompare"}
Nell'integrale $I = \displaystyle\int e^{x} \sin x\,dx$ si sceglie $\sin x$ come fattore finito e si integra due volte per parti:
$$
\begin{aligned}
I
&= e^{x} \sin x - \int e^{x} \cos x\,dx \\[6pt]
&= e^{x} \sin x - \left( e^{x} \cos x + \int e^{x} \sin x\,dx \right) \\[6pt]
&= e^{x} \sin x - e^{x} \cos x - I .
\end{aligned}
$$
Dopo due passaggi ricompare l'integrale $I$ di partenza, con il segno meno. L'uguaglianza ottenuta è un'equazione nell'incognita $I$, da cui $2I = e^{x} (\sin x - \cos x)$, e quindi
$$
\int e^{x} \sin x\,dx = \frac{e^{x} (\sin x - \cos x)}{2} + c .
$$
:::

## Funzioni razionali fratte con denominatore di primo grado

:::definizione{#funzione-razionale-fratta titolo="Funzione razionale fratta"}
Una **funzione razionale fratta** è un quoziente di due polinomi $\dfrac{N(x)}{D(x)}$, con $D$ di grado almeno $1$. Se il grado del numeratore è maggiore o uguale al grado del denominatore, si esegue la divisione tra polinomi. Si ottengono un quoziente $Q(x)$ e un resto $R(x)$ di grado minore di quello di $D(x)$, e vale
$$
\frac{N(x)}{D(x)} = Q(x) + \frac{R(x)}{D(x)} .
$$
Il quoziente è un polinomio, che si integra termine per termine. Resta quindi da integrare la frazione $\dfrac{R(x)}{D(x)}$, in cui il grado del numeratore è minore del grado del denominatore. Per esempio $x^2 - 3$ diviso $x + 1$ dà quoziente $x - 1$ e resto $-2$, perché $(x + 1)(x - 1) - 2 = x^2 - 3$; quindi
$$
\frac{x^2 - 3}{x + 1} = x - 1 - \frac{2}{x + 1} .
$$
:::

:::teorema{#razionali-primo-grado titolo="Denominatore di primo grado"}
Siano $m$, $q$ e $k$ numeri reali, con $m \neq 0$. Per la formula della funzione interna di primo grado
$$
\int \frac{k}{m x + q}\,dx = \frac{k}{m} \ln \lvert m x + q \rvert + c .
$$
Se il numeratore ha grado maggiore o uguale a $1$, si esegue prima la divisione. Per esempio $3x + 1 = 3\,(x - 2) + 7$, quindi
$$
\int \frac{3x + 1}{x - 2}\,dx = \int \left( 3 + \frac{7}{x - 2} \right) dx = 3x + 7 \ln \lvert x - 2 \rvert + c .
$$
Con la divisione precedente si ottiene anche
$$
\int \frac{x^2 - 3}{x + 1}\,dx = \int \left( x - 1 - \frac{2}{x + 1} \right) dx = \frac{x^2}{2} - x - 2 \ln \lvert x + 1 \rvert + c .
$$
:::

## Funzioni razionali fratte con denominatore di secondo grado

:::osservazione{#numeratore-derivata-denominatore titolo="Numeratore uguale alla derivata del denominatore"}
Si considera l'integrale di $\dfrac{p x + r}{D(x)}$, dove $D(x)$ è un trinomio di secondo grado con primo coefficiente $a$ e discriminante $\Delta$. Il numeratore ha grado minore di $2$; se il grado fosse maggiore o uguale a $2$, si eseguirebbe prima la divisione. Quando il numeratore è la derivata del denominatore, o un suo multiplo, si applica la formula $\displaystyle\int \dfrac{g'(x)}{g(x)}\,dx = \ln \lvert g(x) \rvert + c$ e non serve altro. Per esempio la derivata di $x^2 - 5x + 6$ è $2x - 5$, quindi
$$
\int \frac{2x - 5}{x^2 - 5x + 6}\,dx = \ln \left\lvert x^2 - 5x + 6 \right\rvert + c .
$$
Negli altri casi il metodo dipende dal segno di $\Delta$, come nei tre teoremi che seguono.
:::

:::teorema{#razionali-delta-positivo titolo="Discriminante positivo"}
Se $\Delta > 0$, il denominatore ha due radici reali distinte $x_1$ e $x_2$, e si scompone in $a\,(x - x_1)(x - x_2)$. Esistono allora due numeri $A$ e $B$ tali che
$$
\frac{p x + r}{a\,(x - x_1)(x - x_2)} = \frac{A}{x - x_1} + \frac{B}{x - x_2} ,
$$
e quindi
$$
\int \frac{p x + r}{D(x)}\,dx = A \ln \lvert x - x_1 \rvert + B \ln \lvert x - x_2 \rvert + c .
$$
Le frazioni a secondo membro si chiamano **fratti semplici**. I numeri $A$ e $B$ si trovano riducendo il secondo membro allo stesso denominatore e uguagliando i numeratori; l'uguaglianza vale per ogni $x$, e sostituendo $x = x_1$ e $x = x_2$ si ottiene un'equazione per ciascuno dei due numeri.
:::

:::esempio{titolo="Scomposizione in fratti semplici"}
Il denominatore di $\dfrac{x + 7}{x^2 - x - 6}$ ha discriminante $\Delta = 1 + 24 = 25 > 0$ e radici $3$ e $-2$, quindi $x^2 - x - 6 = (x - 3)(x + 2)$. Si cercano $A$ e $B$ tali che
$$
\frac{x + 7}{(x - 3)(x + 2)} = \frac{A}{x - 3} + \frac{B}{x + 2} ,
\qquad \text{cioè} \qquad
x + 7 = A\,(x + 2) + B\,(x - 3) .
$$
Per $x = 3$ si ottiene $10 = 5A$, quindi $A = 2$. Per $x = -2$ si ottiene $5 = -5B$, quindi $B = -1$. Perciò
$$
\int \frac{x + 7}{x^2 - x - 6}\,dx = 2 \ln \lvert x - 3 \rvert - \ln \lvert x + 2 \rvert + c .
$$
Per le proprietà dei logaritmi il risultato si scrive anche $\ln \dfrac{(x - 3)^2}{\lvert x + 2 \rvert} + c$.
:::

:::teorema{#razionali-delta-nullo titolo="Discriminante nullo"}
Se $\Delta = 0$, il denominatore ha una radice doppia $x_1$ e si scrive $a\,(x - x_1)^2$. Il numeratore si riscrive in funzione di $x - x_1$, cioè $p x + r = p\,(x - x_1) + (p x_1 + r)$, e la frazione si spezza in due termini con primitive note:
$$
\int \frac{1}{x - x_1}\,dx = \ln \lvert x - x_1 \rvert + c ,
\qquad
\int \frac{1}{(x - x_1)^2}\,dx = -\frac{1}{x - x_1} + c .
$$
Il secondo integrale è quello di una potenza con esponente $-2$ e funzione interna di primo grado. Per esempio $x^2 - 4x + 4 = (x - 2)^2$ e $2x + 1 = 2\,(x - 2) + 5$, quindi
$$
\begin{aligned}
\int \frac{2x + 1}{x^2 - 4x + 4}\,dx
&= \int \left( \frac{2}{x - 2} + \frac{5}{(x - 2)^2} \right) dx \\[6pt]
&= 2 \ln \lvert x - 2 \rvert - \frac{5}{x - 2} + c .
\end{aligned}
$$
:::

:::teorema{#razionali-delta-negativo titolo="Discriminante negativo"}
Se $\Delta < 0$, il denominatore non ha radici reali, e con il completamento del quadrato si scrive nella forma $a \left( (x - h)^2 + k^2 \right)$, con $k > 0$. Si usa allora l'integrale
$$
\int \frac{1}{(x - h)^2 + k^2}\,dx = \frac{1}{k} \arctan \frac{x - h}{k} + c ,
$$
che si ottiene raccogliendo $k^2$ al denominatore e applicando la formula della funzione interna di primo grado all'integrale di $\dfrac{1}{1 + t^2}$, con $t = \dfrac{x - h}{k}$. Per esempio $x^2 + 2x + 5 = (x + 1)^2 + 4$, con $h = -1$ e $k = 2$, quindi
$$
\int \frac{1}{x^2 + 2x + 5}\,dx = \frac{1}{2} \arctan \frac{x + 1}{2} + c .
$$
Se il numeratore è di primo grado, prima si fa comparire la derivata del denominatore, e la frazione si spezza in un termine con il logaritmo e un termine con l'arcotangente.

::grafico{f="1/(x^2+2*x+5);atan((x+1)/2)/2" punti="-1,0,pieno" xmin=-6 xmax=4 ymin=-1 ymax=1 legenda="y = \dfrac{1}{x^2 + 2x + 5};y = \dfrac{1}{2} \arctan \dfrac{x + 1}{2}" titolo="La primitiva $\dfrac{1}{2} \arctan \dfrac{x + 1}{2}$ di $\dfrac{1}{x^2 + 2x + 5}$ è crescente, perché la funzione integranda è positiva, e ha la pendenza massima in $x = -1$"}

:::

:::esempio{titolo="Numeratore di primo grado e discriminante negativo"}
Nell'integrale di $\dfrac{2x + 3}{x^2 + 2x + 5}$ la derivata del denominatore è $2x + 2$. Si scrive $2x + 3 = (2x + 2) + 1$ e si spezza la frazione:
$$
\begin{aligned}
\int \frac{2x + 3}{x^2 + 2x + 5}\,dx
&= \int \frac{2x + 2}{x^2 + 2x + 5}\,dx + \int \frac{1}{(x + 1)^2 + 4}\,dx \\[6pt]
&= \ln \left( x^2 + 2x + 5 \right) + \frac{1}{2} \arctan \frac{x + 1}{2} + c .
\end{aligned}
$$
Il valore assoluto nel logaritmo non serve, perché un trinomio con $\Delta < 0$ e primo coefficiente positivo è sempre positivo.
:::

:::attenzione
Un denominatore di secondo grado senza radici reali dà un'arcotangente, e il logaritmo compare solo quando il numeratore contiene la derivata del denominatore. Per esempio la derivata di $\ln \left( x^2 + 4 \right)$ è $\dfrac{2x}{x^2 + 4}$, quindi $\ln \left( x^2 + 4 \right)$ *non* è una primitiva di $\dfrac{1}{x^2 + 4}$. La primitiva corretta, con $h = 0$ e $k = 2$, è $\dfrac{1}{2} \arctan \dfrac{x}{2} + c$.
:::
