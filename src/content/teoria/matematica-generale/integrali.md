---
titolo: Calcolo integrale e applicazioni economiche
sommario: Come si trovano le primitive di una funzione con gli integrali immediati, per sostituzione, per parti e con i fratti semplici, che cosa sono l'integrale definito e la funzione integrale, che cosa dicono il teorema della media e il teorema fondamentale del calcolo, e come si usano gli integrali per calcolare aree, costi totali, surplus e valori attuali.
---

## Primitive e integrale indefinito

:::definizione{#primitiva titolo="Primitiva"}
La derivazione associa a una funzione la sua pendenza; qui si cerca l'operazione inversa, cioè una funzione di cui si conosce la derivata. Sia $f$ definita su un intervallo $I$. Una funzione $F$ derivabile su $I$ è una **primitiva** di $f$ su $I$ se
$$
F'(x) = f(x) \qquad \text{per ogni } x \in I .
$$
Per esempio $F(x) = x^3$ è una primitiva di $f(x) = 3x^2$ su $\mathbb{R}$, perché $\left( x^3 \right)' = 3x^2$. Anche $x^3 + 5$ e $x^3 - 2$ sono primitive di $3x^2$, perché la derivata di una costante è zero; una funzione che ha una primitiva ne ha quindi infinite.
:::

:::teorema{#primitive-di-una-funzione titolo="Primitive di una stessa funzione"}
Sia $F$ una primitiva di $f$ sull'intervallo $I$. Allora le primitive di $f$ su $I$ sono *tutte e sole* le funzioni
$$
F(x) + c, \qquad c \in \mathbb{R} .
$$
Ogni $F + c$ è una primitiva, perché $(F + c)' = F' = f$. Viceversa, se $G$ è un'altra primitiva, la differenza $G - F$ ha derivata $f - f = 0$ su tutto l'intervallo, e per il teorema sul **segno della derivata e monotonia** è costante. I grafici delle primitive sono traslazioni verticali l'uno dell'altro, e la costante si fissa assegnando il valore in un punto. La primitiva di $2x$ che vale $3$ in $x = 1$ è $x^2 + c$ con $1 + c = 3$, cioè $x^2 + 2$.

::grafico{f="x^2;x^2+2" segmenti="1,1,1,3;-1.5,2.25,-1.5,4.25" punti="1,3,pieno" xmin=-3 xmax=3 ymin=-1 ymax=9 legenda="y = x^2;y = x^2 + 2" titolo="Due primitive di $2x$; i grafici di $x^2$ e di $x^2 + 2$ distano $2$ in verticale per ogni $x$, e in ogni ascissa hanno la stessa pendenza; il punto $(1, 3)$ individua $x^2 + 2$"}

:::

:::definizione{#integrale-indefinito titolo="Integrale indefinito"}
L'**integrale indefinito** di $f$ è l'insieme di tutte le sue primitive, e si scrive
$$
\int f(x)\,dx = F(x) + c ,
$$
dove $F$ è una primitiva qualsiasi e $c$ è una costante arbitraria. La funzione $f$ si chiama **funzione integranda**, e $dx$ indica la variabile rispetto alla quale si integra. Dalle regole di derivazione della somma e del prodotto per una costante segue la **linearità**: per $h, k \in \mathbb{R}$
$$
\int \big( h\,f(x) + k\,g(x) \big)\,dx = h \int f(x)\,dx + k \int g(x)\,dx .
$$
Per esempio $\displaystyle\int \left( 3x^2 - 4x + 5 \right) dx = x^3 - 2x^2 + 5x + c$, come si controlla derivando il risultato. Il controllo per derivazione vale per ogni integrale indefinito.
:::

## Integrali immediati

:::teorema{#integrali-immediati titolo="Integrali immediati"}
Leggendo al contrario la tabella delle derivate delle funzioni elementari si ottengono, sugli intervalli in cui le funzioni sono definite,

| $f(x)$ | $\displaystyle\int f(x)\,dx$ |
| --- | --- |
| $x^{a}$, con $a \neq -1$ | $\dfrac{x^{a + 1}}{a + 1} + c$ |
| $\dfrac{1}{x}$ | $\ln \lvert x \rvert + c$ |
| $e^{x}$ | $e^{x} + c$ |
| $a^{x}$, con $a > 0$ e $a \neq 1$ | $\dfrac{a^{x}}{\ln a} + c$ |
| $\sin x$ | $-\cos x + c$ |
| $\cos x$ | $\sin x + c$ |

Il valore assoluto nella primitiva di $\dfrac{1}{x}$ serve per $x < 0$; infatti per $x < 0$ si ha $\big( \ln(-x) \big)' = \dfrac{-1}{-x} = \dfrac{1}{x}$. La formula delle potenze comprende radici e reciproci, che si scrivono prima come potenze:
$$
\int \left( \sqrt{x} + \frac{1}{x^2} \right) dx
= \int \left( x^{\frac{1}{2}} + x^{-2} \right) dx
= \frac{2}{3}\,x^{\frac{3}{2}} - \frac{1}{x} + c .
$$
:::

:::teorema{#integrali-forma-composta titolo="Integrali immediati in forma composta"}
Sia $g$ derivabile su un intervallo. Dalla regola della funzione composta seguono
$$
\int g(x)^{a}\,g'(x)\,dx = \frac{g(x)^{a + 1}}{a + 1} + c \quad (a \neq -1),
\qquad
\int \frac{g'(x)}{g(x)}\,dx = \ln \lvert g(x) \rvert + c,
\qquad
\int e^{g(x)}\,g'(x)\,dx = e^{g(x)} + c .
$$
Si riconoscono quando l'integranda contiene una funzione $g$ e, come fattore, la sua derivata $g'$, eventualmente a meno di una costante moltiplicativa, che si aggiusta. Per esempio
$$
\int \frac{2x}{x^2 + 3}\,dx = \ln\left( x^2 + 3 \right) + c,
\qquad
\int x \left( x^2 + 1 \right)^3 dx = \frac{1}{2} \int 2x \left( x^2 + 1 \right)^3 dx = \frac{\left( x^2 + 1 \right)^4}{8} + c ,
$$
e il valore assoluto si omette nel primo caso perché $x^2 + 3 > 0$. Nel secondo integrale manca il fattore $2$ della derivata di $x^2 + 1$, perciò si moltiplica e si divide per $2$. Con $g(x) = 3x$ si ottiene anche $\displaystyle\int e^{3x}\,dx = \dfrac{e^{3x}}{3} + c$.
:::

## Integrazione per sostituzione e per parti

:::teorema{#integrazione-per-sostituzione titolo="Integrazione per sostituzione"}
Siano $f$ continua e $\varphi$ invertibile, derivabile con derivata continua. Allora, posto $x = \varphi(t)$,
$$
\int f(x)\,dx = \int f\big( \varphi(t) \big)\,\varphi'(t)\,dt ,
$$
e alla fine si torna alla variabile $x$ con la funzione inversa $t = \varphi^{-1}(x)$. In pratica si sceglie una nuova variabile $t$ che semplifica l'integranda, si esprimono $x$ e $dx = \varphi'(t)\,dt$ in funzione di $t$, si integra e si sostituisce all'indietro. La formula segue dalla regola della funzione composta; infatti, se $G(t)$ è una primitiva del secondo membro, la derivata di $G\big( \varphi^{-1}(x) \big)$ è $f(x)$. Per esempio, con $t = \sqrt{x}$, cioè $x = t^2$ e $dx = 2t\,dt$, per $x > 0$
$$
\int \frac{e^{\sqrt{x}}}{\sqrt{x}}\,dx = \int \frac{e^{t}}{t}\,2t\,dt = 2 \int e^{t}\,dt = 2\,e^{\sqrt{x}} + c .
$$
:::

::::teorema{#integrazione-per-parti titolo="Integrazione per parti"}
Siano $f$ e $g$ derivabili con derivate continue. Allora
$$
\int f(x)\,g'(x)\,dx = f(x)\,g(x) - \int f'(x)\,g(x)\,dx .
$$
Il fattore $g'$ si chiama *fattore differenziale*, e di esso serve una primitiva; il fattore $f$ si chiama *fattore finito*, e di esso serve la derivata. La formula conviene quando $f'$ è più semplice di $f$, come succede per i polinomi e per $\ln x$, e $g'$ ha una primitiva semplice, come $e^{x}$. Per esempio, con $f(x) = x$ e $g'(x) = e^{x}$,
$$
\int x\,e^{x}\,dx = x\,e^{x} - \int e^{x}\,dx = (x - 1)\,e^{x} + c .
$$
Per $\displaystyle\int \ln x\,dx$ si sceglie $f(x) = \ln x$ e $g'(x) = 1$, e si ottiene $x \ln x - \displaystyle\int x \cdot \dfrac{1}{x}\,dx = x \ln x - x + c$.

:::dimostrazione
Per la regola del prodotto $(f g)' = f' g + f g'$, quindi $f g$ è una primitiva di $f' g + f g'$. Integrando i due membri e usando la linearità si ottiene $f g = \displaystyle\int f' g\,dx + \displaystyle\int f g'\,dx$, che è la formula.
:::
::::

## Integrali di funzioni razionali

:::teorema{#razionali-primo-grado titolo="Funzioni razionali con denominatore di primo grado"}
Sia $\dfrac{N(x)}{x - a}$ con $N$ polinomio. Si divide $N(x)$ per $x - a$, ottenendo il quoziente $Q(x)$ e il resto costante $r = N(a)$, e si scrive
$$
\frac{N(x)}{x - a} = Q(x) + \frac{r}{x - a},
\qquad
\int \frac{N(x)}{x - a}\,dx = \int Q(x)\,dx + r \ln \lvert x - a \rvert + c .
$$
Il primo integrale è quello di un polinomio, il secondo è immediato. Per esempio $2x + 3 = 2\,(x + 1) + 1$, quindi
$$
\int \frac{2x + 3}{x + 1}\,dx = \int \left( 2 + \frac{1}{x + 1} \right) dx = 2x + \ln \lvert x + 1 \rvert + c .
$$
Con un denominatore $m x + k$ si raccoglie $m$ e ci si riconduce allo stesso caso.
:::

:::teorema{#razionali-secondo-grado titolo="Funzioni razionali con denominatore di secondo grado"}
Sia $\dfrac{N(x)}{D(x)}$ con $D$ di secondo grado con radici reali e $N$ di grado minore di $2$; se il grado di $N$ non è minore, prima si esegue la divisione, come nel caso di primo grado. Esistono costanti $A$ e $B$ tali che

- se $D(x) = (x - x_1)(x - x_2)$ con $x_1 \neq x_2$, si ha $\dfrac{N(x)}{D(x)} = \dfrac{A}{x - x_1} + \dfrac{B}{x - x_2}$;
- se $D(x) = (x - x_1)^2$, si ha $\dfrac{N(x)}{D(x)} = \dfrac{A}{x - x_1} + \dfrac{B}{(x - x_1)^2}$.

Le frazioni a secondo membro si chiamano **fratti semplici**; le primitive di $\dfrac{1}{x - x_1}$ e di $\dfrac{1}{(x - x_1)^2}$ sono $\ln \lvert x - x_1 \rvert$ e $-\dfrac{1}{x - x_1}$. Le costanti si trovano riducendo il secondo membro allo stesso denominatore e uguagliando i numeratori. Quando il numeratore è la derivata del denominatore, come in $\dfrac{2x - 3}{x^2 - 3x + 2}$, non serve scomporre, perché l'integrale è $\ln \lvert x^2 - 3x + 2 \rvert + c$ per la forma composta. Se $D$ non ha radici reali, nella primitiva compare l'arcotangente, e si rimanda all'argomento sugli integrali di Analisi 1.
:::

:::esempio{titolo="Scomposizione in fratti semplici"}
Il denominatore di $\dfrac{x + 5}{x^2 + x - 2}$ ha radici $1$ e $-2$, quindi $x^2 + x - 2 = (x - 1)(x + 2)$ e
$$
\frac{x + 5}{(x - 1)(x + 2)} = \frac{A}{x - 1} + \frac{B}{x + 2}
\iff
x + 5 = A\,(x + 2) + B\,(x - 1) .
$$
L'uguaglianza vale per ogni $x$. Con $x = 1$ si ottiene $6 = 3A$, quindi $A = 2$; con $x = -2$ si ottiene $3 = -3B$, quindi $B = -1$. Perciò
$$
\int \frac{x + 5}{x^2 + x - 2}\,dx = 2 \ln \lvert x - 1 \rvert - \ln \lvert x + 2 \rvert + c .
$$
Con la radice doppia, $\dfrac{x}{(x - 1)^2} = \dfrac{(x - 1) + 1}{(x - 1)^2} = \dfrac{1}{x - 1} + \dfrac{1}{(x - 1)^2}$, e l'integrale è $\ln \lvert x - 1 \rvert - \dfrac{1}{x - 1} + c$.
:::

## Integrale definito

:::definizione{#somme-di-riemann titolo="Somme di Riemann"}
Si vuole misurare l'area della regione compresa tra il grafico di una funzione positiva e l'asse $x$, e la si approssima con rettangoli. Sia $f$ definita sull'intervallo $[a, b]$. Si divide $[a, b]$ in $n$ parti uguali, di ampiezza $\Delta x = \dfrac{b - a}{n}$, con i punti di suddivisione
$$
x_k = a + k\,\Delta x, \qquad k = 0, 1, \ldots, n ,
$$
e in ogni intervallino $[x_{k-1}, x_k]$ si sceglie un punto $\xi_k$. La **somma di Riemann** è
$$
S_n = \sum_{k=1}^{n} f(\xi_k)\,\Delta x ,
$$
cioè la somma delle aree dei rettangoli di base $\Delta x$ e altezza $f(\xi_k)$, quando $f$ è positiva. Per $f(x) = 4 - x^2$ su $[0, 2]$, con $n = 4$ e $\xi_k$ uguale all'estremo sinistro, si ha $\Delta x = \dfrac{1}{2}$ e
$$
S_4 = \frac{1}{2} \left( 4 + \frac{15}{4} + 3 + \frac{7}{4} \right) = \frac{25}{4} .
$$

::grafico{f="4-x^2+0*sqrt(x*(2-x))" area="4-(floor(2*x)/2)^2;0;0;1.999" segmenti="0.5,0,0.5,4;1,0,1,3.75;1.5,0,1.5,3;2,0,2,1.75" xmin=-1 xmax=3 ymin=-1 ymax=5 legenda="y = 4 - x^2" titolo="I quattro rettangoli della somma $S_4 = \dfrac{25}{4}$ per $y = 4 - x^2$ su $[0, 2]$, con le altezze prese negli estremi sinistri; l'area sotto il grafico è $\dfrac{16}{3}$"}

:::

:::definizione{#integrale-definito titolo="Integrale definito"}
Sia $f$ continua su $[a, b]$. Al crescere di $n$ le somme di Riemann hanno un limite finito, che non dipende dalla scelta dei punti $\xi_k$; il limite si chiama **integrale definito** di $f$ da $a$ a $b$:
$$
\int_a^b f(x)\,dx = \lim_{n \to +\infty} \sum_{k=1}^{n} f(\xi_k)\,\Delta x .
$$
I numeri $a$ e $b$ sono gli **estremi di integrazione**. L'esistenza del limite per ogni funzione continua si dimostra in Analisi 1, alla quale si rimanda; il risultato vale anche per le funzioni limitate con un numero finito di discontinuità. Per $f(x) = x$ su $[0, 1]$, con $\xi_k = x_k = \dfrac{k}{n}$, la somma dei termini di una progressione aritmetica, vista nell'argomento su successioni, progressioni e serie, dà
$$
S_n = \sum_{k=1}^{n} \frac{k}{n} \cdot \frac{1}{n} = \frac{1}{n^2} \cdot \frac{n\,(n + 1)}{2} = \frac{n + 1}{2n} \to \frac{1}{2} ,
$$
quindi $\displaystyle\int_0^1 x\,dx = \dfrac{1}{2}$, che è l'area del triangolo di vertici $(0, 0)$, $(1, 0)$ e $(1, 1)$. Si pone inoltre $\displaystyle\int_a^a f(x)\,dx = 0$ e $\displaystyle\int_b^a f(x)\,dx = -\int_a^b f(x)\,dx$.
:::

:::teorema{#proprieta-integrale-definito titolo="Proprietà dell'integrale definito"}
Siano $f$ e $g$ continue su un intervallo che contiene i punti $a$, $b$, $c$, con $a < b$ nelle ultime due proprietà, e siano $h, k \in \mathbb{R}$.

- **Linearità**: $\displaystyle\int_a^b \big( h\,f(x) + k\,g(x) \big)\,dx = h \int_a^b f(x)\,dx + k \int_a^b g(x)\,dx$.
- **Additività rispetto all'intervallo**: $\displaystyle\int_a^b f(x)\,dx = \int_a^c f(x)\,dx + \int_c^b f(x)\,dx$.
- **Monotonia**: se $f(x) \leq g(x)$ su $[a, b]$, allora $\displaystyle\int_a^b f(x)\,dx \leq \int_a^b g(x)\,dx$.
- **Confronto con le costanti**: se $m \leq f(x) \leq M$ su $[a, b]$, allora $m\,(b - a) \leq \displaystyle\int_a^b f(x)\,dx \leq M\,(b - a)$.

Le prime tre seguono dalle proprietà analoghe delle somme di Riemann, passando al limite; l'ultima è la monotonia applicata alle funzioni costanti $m$ e $M$. Il confronto serve a stimare un integrale senza calcolarlo. Per esempio su $[0, 1]$ si ha $1 \leq e^{x^2} \leq e$, quindi $1 \leq \displaystyle\int_0^1 e^{x^2}\,dx \leq e$.
:::

:::osservazione{#integrale-e-area titolo="Integrale e area"}
Se $f \geq 0$ su $[a, b]$, l'integrale $\displaystyle\int_a^b f(x)\,dx$ è l'area della regione compresa tra il grafico e l'asse $x$. Dove $f < 0$ i termini $f(\xi_k)\,\Delta x$ sono negativi, perciò l'integrale conta *con il segno meno* le aree che stanno sotto l'asse. Per avere l'area si spezza l'intervallo nei punti in cui $f$ cambia segno e si cambia segno agli integrali delle parti negative. Per $f(x) = x^2 - 1$ su $[0, 2]$, con la formula fondamentale del calcolo, si trova
$$
\int_0^2 \left( x^2 - 1 \right) dx = \frac{2}{3},
\qquad
\text{area} = \int_0^1 \left( 1 - x^2 \right) dx + \int_1^2 \left( x^2 - 1 \right) dx = \frac{2}{3} + \frac{4}{3} = 2 .
$$

::grafico{f="x^2-1" area="x^2-1;0;0;2" etichette="0.45,-0.45,−;1.65,1.1,+" xmin=-1 xmax=3 ymin=-2 ymax=4 legenda="y = x^2 - 1" titolo="Su $[0, 2]$ la regione sotto l'asse ha area $\dfrac{2}{3}$ e quella sopra ha area $\dfrac{4}{3}$; l'integrale è la differenza, $\dfrac{2}{3}$, e l'area è la somma, $2$"}

:::

## Teorema della media e teorema fondamentale del calcolo

:::richiamo{titolo="Teorema di Weierstrass"}
Se $f$ è continua sull'intervallo chiuso e limitato $[a, b]$, allora $f$ ha su $[a, b]$ un valore minimo $m$ e un valore massimo $M$.
:::

:::richiamo{titolo="Teorema dei valori intermedi"}
Se $f$ è continua sull'intervallo $[a, b]$, allora $f$ assume tutti i valori compresi tra $f(a)$ e $f(b)$.
:::

::::teorema{#teorema-della-media titolo="Teorema della media integrale"}
Sia $f$ continua su $[a, b]$. Allora esiste almeno un punto $c \in [a, b]$ tale che
$$
\frac{1}{b - a} \int_a^b f(x)\,dx = f(c) .
$$
Il numero a primo membro si chiama **media integrale** di $f$ su $[a, b]$. Se $f \geq 0$, il rettangolo di base $[a, b]$ e altezza $f(c)$ ha la stessa area della regione sotto il grafico. Per $f(x) = x^2$ su $[0, 3]$ la media è $\dfrac{1}{3} \cdot 9 = 3$, e $c^2 = 3$ con $c \in [0, 3]$ dà $c = \sqrt{3}$.

::grafico{f="x^2" area="x^2;0;0;3" segmenti="0,3,3,3;3,0,3,3;1.732,0,1.732,3" punti="1.732,3,pieno" xmin=-1 xmax=4 ymin=-1 ymax=9 legenda="y = x^2" titolo="La regione sotto $y = x^2$ su $[0, 3]$ e il rettangolo tratteggiato di altezza $3$ hanno la stessa area, $9$; l'altezza è il valore di $f$ in $c = \sqrt{3}$"}

:::dimostrazione
L'idea è che la media sta tra il minimo e il massimo di $f$, e quindi è un valore assunto da $f$. Per il teorema di Weierstrass $f$ ha minimo $m$ e massimo $M$ su $[a, b]$, cioè $m \leq f(x) \leq M$. Per il confronto con le costanti
$$
m\,(b - a) \leq \int_a^b f(x)\,dx \leq M\,(b - a),
\qquad
\text{quindi}
\qquad
m \leq \frac{1}{b - a} \int_a^b f(x)\,dx \leq M .
$$
La media integrale è perciò un valore compreso tra il minimo e il massimo di $f$. Siano $x_1$ e $x_2$ due punti di $[a, b]$ con $f(x_1) = m$ e $f(x_2) = M$. Per il teorema dei valori intermedi, applicato all'intervallo di estremi $x_1$ e $x_2$, la funzione assume ogni valore compreso tra $m$ e $M$, quindi esiste $c$ in quell'intervallo, e perciò in $[a, b]$, in cui $f(c)$ è uguale alla media integrale.
:::
::::

:::definizione{#funzione-integrale titolo="Funzione integrale"}
Sia $f$ continua sull'intervallo $I$ e sia $a \in I$. La **funzione integrale** di $f$ con punto iniziale $a$ è
$$
F(x) = \int_a^x f(t)\,dt, \qquad x \in I .
$$
La variabile di integrazione si chiama $t$, perché la lettera $x$ indica l'estremo superiore. Se $f \geq 0$ e $x > a$, il valore $F(x)$ è l'area sotto il grafico di $f$ tra $a$ e $x$, e cresce quando $x$ si sposta a destra. Si ha sempre $F(a) = 0$. Per $f(t) = \dfrac{1}{t}$ e $a = 1$, il valore $F(x)$ per $x > 1$ è l'area sotto l'iperbole tra $1$ e $x$, e la formula fondamentale del calcolo dà $F(x) = \ln x$.

::grafico{f="1/x+0*sqrt(x)" area="1/x;0;1;3" punti="1,0,pieno;3,0,pieno,x" nomi="t,y" xmin=-1 xmax=5 ymin=-1 ymax=3 legenda="y = \dfrac{1}{t}" titolo="La funzione integrale $F(x) = \int_1^x \dfrac{1}{t}\,dt$ in $x = 3$ è l'area colorata sotto il grafico di $\dfrac{1}{t}$ tra $1$ e $3$, e vale $\ln 3$"}

:::

::::teorema{#teorema-fondamentale titolo="Teorema fondamentale del calcolo integrale"}
Sia $f$ continua sull'intervallo $I$, sia $a \in I$ e sia $F(x) = \displaystyle\int_a^x f(t)\,dt$. Allora $F$ è derivabile su $I$ e
$$
F'(x) = f(x) \qquad \text{per ogni } x \in I .
$$
In altre parole, la funzione integrale è una primitiva di $f$; quindi ogni funzione continua su un intervallo ha una primitiva. Il teorema permette di studiare una funzione integrale senza calcolare l'integrale. Per esempio $F(x) = \displaystyle\int_0^x e^{-t^2}\,dt$ ha $F'(x) = e^{-x^2} > 0$, quindi è crescente su $\mathbb{R}$, anche se $e^{-t^2}$ non ha una primitiva elementare. Se l'estremo superiore è una funzione derivabile $g(x)$, la regola della funzione composta dà $\dfrac{d}{dx} \displaystyle\int_a^{g(x)} f(t)\,dt = f\big( g(x) \big)\,g'(x)$.

:::dimostrazione
L'idea è scrivere il rapporto incrementale di $F$ come una media integrale. Siano $x \in I$ e $h \neq 0$ con $x + h \in I$. Per l'additività
$$
F(x + h) - F(x) = \int_a^{x + h} f(t)\,dt - \int_a^{x} f(t)\,dt = \int_x^{x + h} f(t)\,dt .
$$
Per il teorema della media integrale, applicato all'intervallo di estremi $x$ e $x + h$, esiste un punto $c_h$ compreso tra $x$ e $x + h$ tale che $\displaystyle\int_x^{x + h} f(t)\,dt = h\,f(c_h)$; per $h < 0$ la formula vale ancora, perché scambiare gli estremi cambia il segno sia dell'integrale sia dell'ampiezza. Quindi
$$
\frac{F(x + h) - F(x)}{h} = f(c_h) .
$$
Quando $h \to 0$ il punto $c_h$, che sta tra $x$ e $x + h$, tende a $x$, e poiché $f$ è continua si ha $f(c_h) \to f(x)$. Il rapporto incrementale ha perciò limite $f(x)$, cioè $F'(x) = f(x)$.
:::
::::

::::teorema{#formula-fondamentale titolo="Formula fondamentale del calcolo integrale"}
Sia $f$ continua su $[a, b]$ e sia $G$ una qualsiasi primitiva di $f$ su $[a, b]$. Allora
$$
\int_a^b f(x)\,dx = G(b) - G(a) = \Big[ G(x) \Big]_a^b .
$$
La formula riduce il calcolo di un integrale definito alla ricerca di una primitiva, senza passare dalle somme di Riemann. Per esempio
$$
\int_1^3 (2x + 1)\,dx = \Big[ x^2 + x \Big]_1^3 = 12 - 2 = 10,
\qquad
\int_0^2 \left( 4 - x^2 \right) dx = \left[ 4x - \frac{x^3}{3} \right]_0^2 = 8 - \frac{8}{3} = \frac{16}{3} ,
$$
e il secondo valore è l'area che le somme di Riemann approssimano. La costante additiva della primitiva non conta, perché si elide nella differenza $G(b) - G(a)$.

:::dimostrazione
Per il teorema fondamentale la funzione integrale $F(x) = \displaystyle\int_a^x f(t)\,dt$ è una primitiva di $f$. Due primitive della stessa funzione su un intervallo differiscono per una costante, quindi $G(x) = F(x) + k$ per ogni $x \in [a, b]$. Allora
$$
G(b) - G(a) = \big( F(b) + k \big) - \big( F(a) + k \big) = F(b) - F(a) = \int_a^b f(t)\,dt - 0 ,
$$
perché $F(a) = 0$.
:::
::::

:::osservazione{#sostituzione-integrale-definito titolo="Sostituzione negli integrali definiti"}
Quando si applica la sostituzione a un integrale definito si cambiano anche gli estremi. Se $x$ va da $a$ a $b$, la nuova variabile va da $\varphi^{-1}(a)$ a $\varphi^{-1}(b)$, e non serve tornare alla variabile $x$. Con $t = x^2$ si ha $dt = 2x\,dx$, e $t$ va da $0$ a $1$ quando $x$ va da $0$ a $1$; perciò
$$
\int_0^1 x\,e^{x^2}\,dx = \frac{1}{2} \int_0^1 e^{t}\,dt = \frac{e - 1}{2} .
$$
:::

## Aree tra curve

:::teorema{#area-tra-curve titolo="Area tra due curve"}
Siano $f$ e $g$ continue su $[a, b]$ con $f(x) \geq g(x)$ per ogni $x \in [a, b]$. L'area della regione compresa tra i due grafici e le rette $x = a$ e $x = b$ è
$$
A = \int_a^b \big( f(x) - g(x) \big)\,dx .
$$
Se le due funzioni sono positive, l'area è la differenza tra l'area sotto $f$ e l'area sotto $g$; se non lo sono, si somma a entrambe una stessa costante, che sposta la regione in alto senza cambiarne l'area e non cambia la differenza $f - g$. Per una regione delimitata soltanto dai due grafici, gli estremi $a$ e $b$ sono le ascisse dei punti di intersezione, cioè le soluzioni di $f(x) = g(x)$. Se i grafici si incrociano dentro l'intervallo, si spezza l'intervallo nei punti di incrocio e in ogni parte si sottrae la funzione più bassa dalla più alta.
:::

:::esempio{titolo="Regione tra una parabola e una retta"}
Si calcola l'area della regione delimitata da $y = 4 - x^2$ e da $y = x + 2$. Le intersezioni sono le soluzioni di
$$
4 - x^2 = x + 2
\iff
x^2 + x - 2 = 0
\iff
x = -2 \ \text{ oppure } \ x = 1 .
$$
Nel punto intermedio $x = 0$ la parabola vale $4$ e la retta vale $2$, quindi tra $-2$ e $1$ la parabola sta sopra la retta, e
$$
\begin{aligned}
A
&= \int_{-2}^{1} \left( 2 - x - x^2 \right) dx
= \left[ 2x - \frac{x^2}{2} - \frac{x^3}{3} \right]_{-2}^{1} \\[6pt]
&= \left( 2 - \frac{1}{2} - \frac{1}{3} \right) - \left( -4 - 2 + \frac{8}{3} \right)
= \frac{7}{6} + \frac{10}{3}
= \frac{9}{2} .
\end{aligned}
$$

::grafico{f="4-x^2;x+2" area="4-x^2;x+2;-2;1" punti="-2,0,pieno;1,3,pieno" xmin=-4 xmax=3 ymin=-3 ymax=5 legenda="y = 4 - x^2;y = x + 2" titolo="La regione tra la parabola $y = 4 - x^2$ e la retta $y = x + 2$, con le intersezioni $(-2, 0)$ e $(1, 3)$; la sua area è $\dfrac{9}{2}$"}

:::

## Integrali impropri

:::definizione{#integrale-improprio titolo="Integrale improprio su una semiretta"}
L'integrale definito richiede un intervallo limitato; per una semiretta si passa al limite. Sia $f$ continua su $[a, +\infty)$. Se esiste il limite
$$
\int_a^{+\infty} f(x)\,dx = \lim_{t \to +\infty} \int_a^{t} f(x)\,dx ,
$$
l'integrale si chiama **integrale improprio**. Si dice che l'integrale **converge** se il limite è finito, **diverge** se il limite è $+\infty$ o $-\infty$. Per $f \geq 0$ un integrale convergente misura l'area, finita, di una regione illimitata. Per esempio
$$
\int_0^{+\infty} e^{-x}\,dx = \lim_{t \to +\infty} \Big[ -e^{-x} \Big]_0^{t} = \lim_{t \to +\infty} \left( 1 - e^{-t} \right) = 1 .
$$
:::

::::teorema{#impropri-potenze titolo="Integrale improprio delle potenze"}
Sia $a$ un numero reale. Allora
$$
\int_1^{+\infty} \frac{1}{x^{a}}\,dx =
\begin{cases}
\dfrac{1}{a - 1} & \text{se } a > 1 \\[8pt]
+\infty & \text{se } a \leq 1
\end{cases}
$$
quindi l'integrale converge *se e solo se* $a > 1$. Per esempio $\displaystyle\int_1^{+\infty} \dfrac{1}{x^2}\,dx = 1$, mentre $\displaystyle\int_1^{+\infty} \dfrac{1}{x}\,dx$ diverge. I due grafici, per $x$ grande, sono entrambi vicini all'asse $x$, ma $\dfrac{1}{x^2}$ tende a zero abbastanza in fretta da dare un'area finita e $\dfrac{1}{x}$ no.

::grafico{f="1/x^2+0*sqrt(x);1/x+0*sqrt(x)" area="1/x^2;0;1;9" segmenti="1,0,1,1" xmin=-1 xmax=9 ymin=-1 ymax=2 legenda="y = \dfrac{1}{x^2};y = \dfrac{1}{x}" titolo="La regione illimitata sotto $y = \dfrac{1}{x^2}$ per $x \geq 1$ ha area $1$; sotto $y = \dfrac{1}{x}$ l'area è infinita"}

:::dimostrazione
Per $a \neq 1$ una primitiva di $x^{-a}$ è $\dfrac{x^{1 - a}}{1 - a}$, quindi
$$
\int_1^{t} x^{-a}\,dx = \frac{t^{1 - a} - 1}{1 - a} .
$$
Se $a > 1$ l'esponente $1 - a$ è negativo, perciò $t^{1 - a} \to 0$ e l'integrale tende a $\dfrac{-1}{1 - a} = \dfrac{1}{a - 1}$. Se $a < 1$ l'esponente è positivo, perciò $t^{1 - a} \to +\infty$ e l'integrale diverge. Se $a = 1$ si ha $\displaystyle\int_1^{t} \dfrac{1}{x}\,dx = \ln t \to +\infty$.
:::
::::

:::teorema{#impropri-esponenziale titolo="Integrale improprio dell'esponenziale"}
Sia $k > 0$. Allora
$$
\int_0^{+\infty} e^{-kx}\,dx = \frac{1}{k} .
$$
Infatti $\displaystyle\int_0^{t} e^{-kx}\,dx = \left[ -\frac{e^{-kx}}{k} \right]_0^{t} = \dfrac{1 - e^{-kt}}{k}$, e $e^{-kt} \to 0$ per $t \to +\infty$ perché $k > 0$. Per esempio $\displaystyle\int_0^{+\infty} e^{-2x}\,dx = \dfrac{1}{2}$. Per $k \leq 0$ l'integrale diverge, perché la funzione integranda è maggiore o uguale a $1$ e quindi $\displaystyle\int_0^{t} e^{-kx}\,dx \geq t$. Questo integrale dà il valore attuale di un flusso di pagamenti che non ha termine, come si vede nelle applicazioni economiche. Integrali come $\displaystyle\int_0^{+\infty} x\,e^{-x}\,dx$ si calcolano per parti, e il limite che resta si calcola con il confronto tra infiniti.
:::

## Applicazioni economiche

:::teorema{#costo-dal-marginale titolo="Costo totale dal costo marginale"}
Sia $C(q)$ il costo totale, con costo marginale $C'(q)$ continuo. Poiché $C$ è una primitiva di $C'$, la formula fondamentale del calcolo dà
$$
C(q) = C(0) + \int_0^{q} C'(x)\,dx,
\qquad
C(q_2) - C(q_1) = \int_{q_1}^{q_2} C'(q)\,dq ,
$$
dove $C(0)$ è il costo fisso. Il secondo integrale è il costo aggiuntivo per portare la produzione da $q_1$ a $q_2$, e nel grafico del costo marginale è l'area sotto la curva tra $q_1$ e $q_2$. Allo stesso modo il ricavo si ottiene dal ricavo marginale, con $R(0) = 0$. Con costo marginale $C'(q) = 10 + 2q$ e costo fisso di $500$ euro si ha $C(q) = 500 + 10q + q^2$, e passare da $5$ a $15$ unità costa
$$
\int_5^{15} (10 + 2q)\,dq = \Big[ 10q + q^2 \Big]_5^{15} = 375 - 75 = 300 \text{ euro} .
$$

::grafico{f="10+2*x+0*sqrt(x)" area="10+2*x;0;5;15" segmenti="5,0,5,20;15,0,15,40" xmin=-2 xmax=17 ymin=-5 ymax=45 nomi="q,C′" legenda="C'(q) = 10 + 2q" titolo="L'area sotto il costo marginale $C'(q) = 10 + 2q$ tra $q = 5$ e $q = 15$ è il costo aggiuntivo, $300$ euro"}

:::

:::definizione{#valore-medio titolo="Valore medio di una grandezza"}
Il **valore medio** di una grandezza $f(t)$ che varia con continuità nell'intervallo di tempo $[t_1, t_2]$ è la sua media integrale
$$
\bar{f} = \frac{1}{t_2 - t_1} \int_{t_1}^{t_2} f(t)\,dt .
$$
È il valore costante che, mantenuto per tutto l'intervallo, darebbe lo stesso totale, e per il teorema della media è assunto da $f$ in almeno un istante. Se la produzione oraria di un impianto nelle prime $4$ ore di un turno è $q(t) = 40 + 12t - 3t^2$ unità all'ora, la produzione oraria media è
$$
\bar{q} = \frac{1}{4} \int_0^4 \left( 40 + 12t - 3t^2 \right) dt = \frac{1}{4} \Big[ 40t + 6t^2 - t^3 \Big]_0^4 = \frac{192}{4} = 48 .
$$
Applicata al costo marginale, la definizione dà $\dfrac{C(q_2) - C(q_1)}{q_2 - q_1}$, cioè il costo medio di ciascuna delle unità aggiuntive; nell'esempio precedente vale $\dfrac{300}{10} = 30$ euro.
:::

:::definizione{#surplus titolo="Surplus del consumatore e del produttore"}
Siano $p_d(q)$ la domanda inversa, decrescente, e $p_s(q)$ l'offerta inversa, crescente, e sia $(q^*, p^*)$ il punto di equilibrio di mercato. Il prezzo $p_d(q)$ è quanto i consumatori sono disposti a pagare per la $q$-esima unità, mentre al mercato la pagano $p^*$. Sommando queste differenze su tutte le unità scambiate si ottiene il **surplus del consumatore**
$$
S_C = \int_0^{q^*} \big( p_d(q) - p^* \big)\,dq ,
$$
e allo stesso modo il **surplus del produttore**, cioè il guadagno dei produttori che avrebbero venduto a un prezzo minore di $p^*$:
$$
S_P = \int_0^{q^*} \big( p^* - p_s(q) \big)\,dq .
$$
Nel grafico con la quantità in ascissa, $S_C$ è l'area tra la curva di domanda e la retta $p = p^*$, e $S_P$ è l'area tra la retta $p = p^*$ e la curva di offerta.
:::

:::esempio{titolo="Surplus con domanda quadratica e offerta lineare"}
La domanda inversa è $p_d(q) = 84 - q^2$ e l'offerta inversa è $p_s(q) = 4 + 2q$. All'equilibrio
$$
84 - q^2 = 4 + 2q
\iff
q^2 + 2q - 80 = 0
\iff
q = 8 \ \text{ oppure } \ q = -10 ,
$$
e la soluzione con $q \geq 0$ è $q^* = 8$, con $p^* = 4 + 16 = 20$. I surplus sono
$$
S_C = \int_0^8 \left( 64 - q^2 \right) dq = 512 - \frac{512}{3} = \frac{1024}{3} \approx 341{,}33,
\qquad
S_P = \int_0^8 (16 - 2q)\,dq = 128 - 64 = 64 ,
$$
in euro. Il secondo valore si controlla con l'area del triangolo di base $8$ e altezza $16$, che vale $64$.

::grafico{f="84-x^2+0*sqrt(x);4+2*x+0*sqrt(x)" area="84-x^2;20;0;8|20;4+2*x;0;8" punti="8,20,pieno" segmenti="0,20,10,20;8,0,8,20" xmin=-2 xmax=10 ymin=-10 ymax=90 nomi="q,p" legenda="p = 84 - q^2;p = 4 + 2q" titolo="Il surplus del consumatore è l'area tra la domanda e la retta $p = 20$, e vale $\dfrac{1024}{3}$; il surplus del produttore è l'area tra la retta $p = 20$ e l'offerta, e vale $64$"}

:::

:::definizione{#valore-attuale-flusso titolo="Valore attuale di un flusso continuo"}
Un investimento produce un **flusso di cassa continuo** di intensità $f(t)$, in euro all'anno, per $0 \leq t \leq T$; nel breve intervallo $[t, t + \Delta t]$ incassa quindi circa $f(t)\,\Delta t$ euro. In capitalizzazione continua con intensità istantanea di interesse $\delta > 0$, un euro disponibile all'istante $t$ vale oggi $e^{-\delta t}$ euro. Sommando i valori attuali dei piccoli incassi $f(t)\,e^{-\delta t}\,\Delta t$ si ottiene una somma di Riemann, e al limite il **valore attuale** del flusso
$$
V = \int_0^{T} f(t)\,e^{-\delta t}\,dt .
$$
Per un flusso costante di $1000$ euro all'anno per $5$ anni, con $\delta = 0{,}05$,
$$
V = 1000 \int_0^5 e^{-0{,}05\,t}\,dt = \frac{1000}{0{,}05} \left( 1 - e^{-0{,}25} \right) = 20\,000 \left( 1 - e^{-0{,}25} \right) \approx 4423{,}98 \text{ euro},
$$
meno dei $5000$ euro incassati in tutto, perché gli incassi futuri sono scontati. Se il flusso non ha termine, il valore attuale è l'integrale improprio $\displaystyle\int_0^{+\infty} 1000\,e^{-0{,}05\,t}\,dt = \dfrac{1000}{0{,}05} = 20\,000$ euro. La capitalizzazione continua è trattata nell'argomento sulla matematica finanziaria.
:::
