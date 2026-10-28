---
titolo: Equazioni differenziali
sommario: Che cosa sono le equazioni differenziali e il problema di Cauchy, i metodi risolutivi per il primo ordine e per il secondo ordine a coefficienti costanti.
---

## Equazioni differenziali e problema di Cauchy

:::definizione{#equazione-differenziale titolo="Equazione differenziale, ordine, soluzione"}
Un'**equazione differenziale** è un'equazione la cui incognita è una *funzione* $y(x)$ e in cui compaiono una o più derivate di $y$. L'**ordine** dell'equazione è l'ordine massimo di derivazione presente: $y' = 2y$ ha ordine $1$, $y'' + y = 0$ ha ordine $2$. Una **soluzione** (o integrale) su un intervallo $I$ è una funzione $y : I \to \mathbb{R}$, derivabile in $I$ tante volte quante ne richiede l'ordine, che sostituita nell'equazione la rende un'identità per ogni $x \in I$. Per verificare che una funzione è soluzione si calcolano le sue derivate e si sostituiscono nell'equazione.
:::

:::esempio{titolo="Verifica di una soluzione"}
$y = e^{3x}$ è soluzione di $y' = 3y$ su $\mathbb{R}$, poiché $y' = 3e^{3x} = 3y$. Anche $y = C e^{3x}$ è soluzione per *ogni* costante $C \in \mathbb{R}$, perché $y' = 3Ce^{3x} = 3y$.
:::

:::definizione{#integrale-generale titolo="Integrale generale e integrale particolare"}
L'**integrale generale** di un'equazione differenziale è la famiglia di *tutte* le sue soluzioni; per le equazioni di ordine $n$ trattate in questo capitolo dipende da $n$ costanti arbitrarie. Un **integrale particolare** è la singola soluzione che si ottiene assegnando un valore alle costanti. L'integrale generale di $y' = 3y$ è $y = Ce^{3x}$ con $C \in \mathbb{R}$; per $C = 1$ si ottiene l'integrale particolare $y = e^{3x}$.
:::

:::definizione{#problema-di-cauchy titolo="Problema di Cauchy"}
Un **problema di Cauchy** per un'equazione del primo ordine è il sistema
$$
\begin{cases}
y' = f(x, y) \\[4pt]
y(x_0) = y_0
\end{cases}
$$
formato dall'equazione e da una **condizione iniziale**. La condizione iniziale serve a selezionare, tra le infinite soluzioni dell'integrale generale, quella il cui grafico passa per il punto $(x_0, y_0)$: si sostituiscono $x_0$ e $y_0$ nell'integrale generale e si ricava la costante.
:::

:::esempio{titolo="Risoluzione di un problema di Cauchy"}
Per il problema $y' = 3y$ con $y(0) = 2$, l'integrale generale è $y = Ce^{3x}$. Imponendo la condizione iniziale si ottiene $y(0) = C = 2$, quindi la **soluzione** è $y = 2e^{3x}$.

::grafico{f="2*exp(3*x);exp(3*x);-exp(3*x)" punti="0,2,pieno" xmin=-2 xmax=1.2 ymin=-4 ymax=6 titolo="Tre soluzioni di $y' = 3y$: $y = 2e^{3x}$ in colore, $y = e^{3x}$ tratteggiata, $y = -e^{3x}$ in rosso; la condizione $y(0) = 2$ seleziona la soluzione che passa per $(0, 2)$"}

:::

## Esistenza e unicità locale

:::teorema{#esistenza-unicita titolo="Esistenza e unicità locale"}
Sia $f(x, y)$ definita in un rettangolo aperto del piano contenente il punto $(x_0, y_0)$. Se $f$ e la derivata parziale $\dfrac{\partial f}{\partial y}$ sono continue nel rettangolo, allora il problema di Cauchy $y' = f(x, y)$ con $y(x_0) = y_0$ ha **una e una sola soluzione**, definita in un intorno di $x_0$. Il teorema garantisce che il problema è ben posto prima di qualunque calcolo. L'aggettivo *locale* indica che la soluzione è assicurata *soltanto* vicino a $x_0$: l'intervallo massimale su cui è definita può essere più piccolo di quello su cui è definita $f$, come si vede negli esercizi sull'intervallo di esistenza. La dimostrazione richiede le successioni di funzioni e si rimanda ai corsi successivi.
:::

:::attenzione
Senza la continuità di $\dfrac{\partial f}{\partial y}$ l'unicità **può non valere**. Il problema di Cauchy $y' = 2\sqrt{|y|}$ con $y(0) = 0$ ha *almeno due* soluzioni su $\mathbb{R}$: la funzione nulla $y \equiv 0$ e la funzione $y = x\,|x|$, per la quale $y' = 2|x| = 2\sqrt{|y|}$. La funzione $f(x, y) = 2\sqrt{|y|}$ è continua, ma la sua derivata parziale rispetto a $y$ è illimitata vicino a $y = 0$, quindi l'ipotesi del teorema **non è soddisfatta**.

::grafico{f="x*abs(x);0" punti="0,0,pieno" xmin=-2 xmax=2 ymin=-2.5 ymax=2.5 titolo="Due soluzioni del problema $y' = 2\sqrt{|y|}$, $y(0) = 0$: $y = x|x|$ in colore e $y = 0$ tratteggiata, entrambe passanti per l'origine"}

:::

## Equazioni a variabili separabili

:::definizione{#variabili-separabili titolo="Equazione a variabili separabili"}
Un'equazione del primo ordine è **a variabili separabili** se si scrive nella forma
$$
y' = g(x)\, h(y)
$$
con $g$ continua su un intervallo e $h$ di classe $C^1$. Il secondo membro è il **prodotto** di una funzione della *sola* $x$ e di una funzione della sola $y$: l'equazione $y' = x y^2$ è a variabili separabili con $g(x) = x$ e $h(y) = y^2$, mentre $y' = x + y$ non lo è.
:::

::::teorema{#metodo-di-separazione titolo="Metodo di separazione delle variabili"}
Per l'equazione $y' = g(x)\,h(y)$ valgono i fatti seguenti.

- Se $h(\bar{y}) = 0$, la funzione costante $y \equiv \bar{y}$ è **soluzione**.
- Nelle regioni in cui $h(y) \neq 0$, le soluzioni soddisfano
$$
H(y(x)) = G(x) + C ,
$$
dove $H$ è una primitiva di $\dfrac{1}{h}$ e $G$ è una primitiva di $g$; da questa uguaglianza si ricava $y(x)$.

Operativamente si scrive $\dfrac{dy}{h(y)} = g(x)\,dx$ e si integrano i due membri, ciascuno nella propria variabile. Le **soluzioni costanti** vanno cercate *a parte*, perché la divisione per $h(y)$ le esclude.

:::dimostrazione
La funzione costante $y \equiv \bar{y}$ ha derivata nulla e, poiché $h(\bar{y}) = 0$, anche il secondo membro è nullo, quindi l'equazione è soddisfatta. Sia ora $y$ una soluzione con $h(y(x)) \neq 0$ su un intervallo. Dividendo l'equazione per $h(y(x))$ si ottiene
$$
\frac{y'(x)}{h(y(x))} = g(x) .
$$
Per la **regola di derivazione della funzione composta**, il primo membro è la derivata di $H(y(x))$, dato che $\dfrac{d}{dx} H(y(x)) = H'(y(x))\, y'(x) = \dfrac{y'(x)}{h(y(x))}$. Quindi $H(y(x))$ e $G(x)$ hanno la stessa derivata sull'intervallo, perciò **differiscono per una costante**.
:::
::::

:::esempio{titolo="Separazione con soluzione costante"}
$y' = -2xy$. La funzione nulla $y \equiv 0$ è **soluzione**. Per $y \neq 0$ si separa:
$$
\int \frac{dy}{y} = \int (-2x)\, dx
\quad\implies\quad
\ln |y| = -x^2 + c
\quad\implies\quad
y = C e^{-x^2}
$$
con $C = \pm e^{c} \neq 0$. Il valore $C = 0$ restituisce la soluzione nulla, quindi l'**integrale generale** è $y = Ce^{-x^2}$ con $C \in \mathbb{R}$.

::grafico{f="exp(-x*x)" xmin=-3 xmax=3 ymin=-0.3 ymax=1.3 titolo="La soluzione con $C = 1$, cioè $y = e^{-x^2}$"}

:::

:::osservazione
L'**intervallo di esistenza** della soluzione di un problema di Cauchy è il più grande intervallo contenente $x_0$ su cui la funzione trovata è derivabile e soddisfa l'equazione. Può essere limitato *anche* quando $f$ è definita in tutto il piano. Il problema $y' = 1 + y^2$ con $y(0) = 0$ ha soluzione $y = \tan x$: la soluzione è definita su $\left(-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right)$, l'intervallo contenente $0$ in cui la tangente è derivabile, e agli estremi tende all'infinito.

::grafico{f="tan(x)+0*sqrt(2.4674-x*x)" asintoti="x=-1.5708;x=1.5708" punti="0,0,pieno" xmin=-3 xmax=3 ymin=-5 ymax=5 titolo="La soluzione $y = \tan x$ del problema $y' = 1 + y^2$, $y(0) = 0$, è definita soltanto su $\left(-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right)$, anche se l'equazione ha senso in tutto il piano"}

:::

## Equazioni lineari del primo ordine

:::definizione{#lineari-primo-ordine titolo="Equazione lineare del primo ordine"}
Un'equazione del primo ordine è **lineare** se si scrive nella forma
$$
y' + a(x)\, y = b(x)
$$
con $a$ e $b$ continue su un intervallo $I$. Se $b \equiv 0$ l'equazione si dice **omogenea**; l'equazione $y' + a(x)\,y = 0$ è l'**omogenea associata**. L'incognita e la sua derivata compaiono a *primo grado*: $y' + x y = e^x$ è lineare, $y' = y^2$ non lo è.
:::

::::teorema{#fattore-integrante titolo="Formula risolutiva con il fattore integrante"}
Sia $A(x)$ una primitiva di $a(x)$ su $I$. L'integrale generale dell'equazione $y' + a(x)\,y = b(x)$ è
$$
y(x) = e^{-A(x)} \left( C + \int b(x)\, e^{A(x)}\, dx \right), \qquad C \in \mathbb{R},
$$
dove l'integrale indica una primitiva di $b(x)\,e^{A(x)}$. Tutte le soluzioni sono definite su *tutto* $I$. Operativamente si moltiplica l'equazione per il **fattore integrante** $e^{A(x)}$, si riconosce a primo membro la derivata di $e^{A(x)} y$ e si integra.

:::dimostrazione
Il fattore integrante $e^{A(x)}$ non si annulla mai, quindi moltiplicare per esso dà un'**equazione equivalente**. Per la **regola di derivazione del prodotto**,
$$
\left( e^{A(x)}\, y \right)' = e^{A(x)} y' + a(x)\, e^{A(x)} y = e^{A(x)} \bigl( y' + a(x)\, y \bigr),
$$
perciò l'equazione equivale a
$$
\left( e^{A(x)}\, y \right)' = e^{A(x)}\, b(x) .
$$
Due primitive della stessa funzione su un intervallo differiscono per una costante, quindi $e^{A(x)} y = \displaystyle\int b(x)\, e^{A(x)}\, dx + C$; dividendo per $e^{A(x)}$ si ottiene la formula. Tutti i passaggi sono equivalenze, perciò la formula fornisce **tutte e sole** le soluzioni.
:::
::::

:::teorema{#struttura-primo-ordine titolo="Struttura dell'integrale generale"}
L'integrale generale di $y' + a(x)\,y = b(x)$ è
$$
y = C e^{-A(x)} + y_p(x) ,
$$
dove $Ce^{-A(x)}$ è l'**integrale generale dell'omogenea associata** e $y_p$ è una *qualunque* **soluzione particolare** dell'equazione completa. La struttura si legge nella formula risolutiva, separando il termine con la costante $C$ dal termine con la primitiva. La stessa struttura vale per ogni equazione lineare, di qualunque ordine, e viene ripresa per il secondo ordine.
:::

:::esempio
$y' + y = x$. Qui $a(x) = 1$, quindi $A(x) = x$ e il fattore integrante è $e^{x}$:
$$
\left( e^{x} y \right)' = x e^{x}
\quad\implies\quad
e^{x} y = (x - 1)e^{x} + C
\quad\implies\quad
y = x - 1 + Ce^{-x} ,
$$
dove la primitiva di $xe^{x}$ si calcola **per parti**. Il termine $Ce^{-x}$ risolve l'omogenea associata, il termine $x - 1$ è una **soluzione particolare** della completa.

::grafico{f="x-1;x-1+3*exp(-x);x-1-3*exp(-x)" xmin=-1.5 xmax=6 ymin=-5 ymax=6 titolo="Soluzioni di $y' + y = x$: la soluzione particolare $y = x - 1$ in colore, quelle con $C = 3$ (tratteggiata) e $C = -3$ (in rosso); per $x \to +\infty$ il termine $Ce^{-x}$ tende a $0$ e i grafici si avvicinano alla retta"}

:::

## Equazioni di Bernoulli

:::teorema{#bernoulli titolo="Equazione di Bernoulli"}
Un'**equazione di Bernoulli** ha la forma
$$
y' + a(x)\, y = b(x)\, y^{\alpha}
$$
con $a$, $b$ continue e $\alpha \in \mathbb{R}$, $\alpha \neq 0$, $\alpha \neq 1$ (per $\alpha = 0$ l'equazione è lineare, per $\alpha = 1$ è lineare omogenea). Se $\alpha > 0$, la funzione nulla $y \equiv 0$ è **soluzione**. Nelle regioni in cui $y \neq 0$ (con $y > 0$ se $\alpha$ non è intero), la sostituzione
$$
z = y^{1 - \alpha}
$$
trasforma l'equazione nell'**equazione lineare**
$$
z' + (1 - \alpha)\, a(x)\, z = (1 - \alpha)\, b(x) .
$$
Infatti, dividendo l'equazione di partenza per $y^{\alpha}$ si ottiene $y^{-\alpha} y' + a(x)\, y^{1-\alpha} = b(x)$, e poiché $z' = (1 - \alpha)\, y^{-\alpha} y'$, moltiplicare per $1 - \alpha$ produce l'equazione lineare scritta sopra. Si risolve la lineare con il fattore integrante e si ricava $y$ dalla sostituzione.
:::

:::esempio
$y' - y = -y^2$, equazione di Bernoulli con $\alpha = 2$. Le costanti $y \equiv 0$ e $y \equiv 1$ sono **soluzioni**. Per $y \neq 0$, la sostituzione $z = y^{-1}$ dà $z' + z = 1$, equazione lineare con integrale generale $z = 1 + Ce^{-x}$, quindi
$$
y = \frac{1}{1 + Ce^{-x}} .
$$
Per $C = 0$ si ritrova la **soluzione costante** $y \equiv 1$.

::grafico{f="1/(1+exp(-x));1;1/(1-0.5*exp(-x))+0*sqrt(x+0.6931)" xmin=-5 xmax=5 ymin=-0.5 ymax=3 titolo="Soluzioni di $y' - y = -y^2$: $C = 1$ in colore, $C = -\dfrac{1}{2}$ in rosso; per $x \to +\infty$ entrambe si avvicinano alla soluzione costante $y = 1$ (tratteggiata), una da sotto e una da sopra"}

:::

## Secondo ordine a coefficienti costanti: equazioni omogenee

:::definizione{#secondo-ordine-omogenea titolo="Equazione del secondo ordine a coefficienti costanti"}
Un'**equazione lineare del secondo ordine a coefficienti costanti** ha la forma
$$
y'' + a\, y' + b\, y = f(x)
$$
con $a, b \in \mathbb{R}$ e $f$ continua su un intervallo $I$. Se $f \equiv 0$ l'equazione si dice **omogenea**; l'equazione con $f \equiv 0$ è l'omogenea associata. Queste equazioni descrivono i sistemi oscillanti della fisica, come la molla con attrito e il circuito elettrico, nei quali $f$ rappresenta la forzante esterna.
:::

::::teorema{#equazione-caratteristica titolo="Equazione caratteristica"}
All'equazione omogenea $y'' + a y' + b y = 0$ si associa l'**equazione caratteristica**
$$
r^2 + a r + b = 0 ,
$$
ottenuta cercando soluzioni della forma $y = e^{rx}$. Detto $\Delta = a^2 - 4b$, l'integrale generale dipende dal *tipo di radici*:

- se $\Delta > 0$, le radici $r_1 \neq r_2$ sono reali distinte e $y = C_1 e^{r_1 x} + C_2 e^{r_2 x}$;
- se $\Delta = 0$, la radice $r$ è reale doppia e $y = (C_1 + C_2\, x)\, e^{r x}$;
- se $\Delta < 0$, le radici sono complesse coniugate $\lambda \pm i\mu$ con $\mu > 0$ e $y = e^{\lambda x} \bigl( C_1 \cos(\mu x) + C_2 \sin(\mu x) \bigr)$;

in tutti i casi $C_1, C_2 \in \mathbb{R}$ sono costanti arbitrarie.

:::dimostrazione
Sostituendo $y = e^{rx}$ nell'equazione si ottiene $(r^2 + ar + b)\, e^{rx} = 0$ e, poiché $e^{rx} > 0$, la funzione $e^{rx}$ è soluzione *se e solo se* $r$ è **radice dell'equazione caratteristica**. Per $\Delta > 0$ questo fornisce le due soluzioni non proporzionali $e^{r_1 x}$ ed $e^{r_2 x}$. Per $\Delta = 0$ la radice doppia è $r = -\dfrac{a}{2}$ e anche $x e^{rx}$ è soluzione: sostituendo si ottiene $(r^2 + ar + b)\, x e^{rx} + (2r + a)\, e^{rx} = 0$, dove $r^2 + ar + b = 0$ perché $r$ è radice e $2r + a = 0$ per la scelta di $r$. Per $\Delta < 0$ le radici sono $\lambda \pm i\mu$ e per la **formula di Eulero**
$$
e^{(\lambda + i\mu)x} = e^{\lambda x} \bigl( \cos(\mu x) + i \sin(\mu x) \bigr) ;
$$
la parte reale $e^{\lambda x}\cos(\mu x)$ e la parte immaginaria $e^{\lambda x}\sin(\mu x)$ sono soluzioni reali, perché l'equazione ha coefficienti reali. In ogni caso le combinazioni $C_1 y_1 + C_2 y_2$ sono soluzioni per linearità, e per il **teorema sulla struttura dello spazio delle soluzioni** *non* ce ne sono altre.
:::
::::

:::teorema{#spazio-delle-soluzioni titolo="Struttura dello spazio delle soluzioni"}
Le soluzioni dell'equazione omogenea $y'' + ay' + by = 0$ formano uno **spazio vettoriale di dimensione** $2$: se $y_1$ e $y_2$ sono soluzioni *non proporzionali*, ogni soluzione si scrive in uno e un solo modo come $C_1 y_1 + C_2 y_2$. L'integrale generale dell'equazione completa $y'' + ay' + by = f(x)$ è
$$
y = C_1 y_1 + C_2 y_2 + y_p ,
$$
dove $y_p$ è una qualunque soluzione particolare della completa. Quindi la risoluzione procede in **due passi**: l'integrale generale dell'omogenea con l'equazione caratteristica, poi una soluzione particolare con il metodo di somiglianza o con la variazione delle costanti. La dimostrazione si fonda sul teorema di esistenza e unicità per il secondo ordine e si rimanda ai corsi successivi.
:::

:::esempio
$y'' - y = 0$: l'equazione caratteristica $r^2 - 1 = 0$ ha radici $\pm 1$, quindi $y = C_1 e^{x} + C_2 e^{-x}$. $y'' + 4y = 0$: l'equazione caratteristica $r^2 + 4 = 0$ ha radici $\pm 2i$, quindi $y = C_1 \cos(2x) + C_2 \sin(2x)$.

::grafico{f="exp(-x)*cos(2*x);exp(-x);-exp(-x)" xmin=-0.5 xmax=5 ymin=-1.2 ymax=1.2 titolo="Per $y'' + 2y' + 5y = 0$ le radici sono $-1 \pm 2i$: la soluzione $y = e^{-x}\cos(2x)$ oscilla tra $y = e^{-x}$ (tratteggiata) e $y = -e^{-x}$ (in rosso), con ampiezza che tende a $0$"}

:::

## Equazioni non omogenee: il metodo di somiglianza

:::teorema{#somiglianza titolo="Metodo di somiglianza"}
Se il termine noto $f(x)$ di $y'' + ay' + by = f(x)$ ha una delle forme della tabella, l'equazione ammette una **soluzione particolare della forma indicata**; i coefficienti del tentativo si determinano *sostituendolo* nell'equazione e uguagliando i coefficienti dei termini corrispondenti.

| $f(x)$ | tentativo $y_p$ |
| --- | --- |
| polinomio $p_n(x)$ di grado $n$ | polinomio $q_n(x)$ di grado $n$ |
| $A\, e^{\gamma x}$ | $a_0\, e^{\gamma x}$ |
| $A \cos(\omega x) + B \sin(\omega x)$ | $a_0 \cos(\omega x) + b_0 \sin(\omega x)$ |
| $p_n(x)\, e^{\gamma x}$ | $q_n(x)\, e^{\gamma x}$ |
| $e^{\gamma x} \bigl( A\cos(\omega x) + B\sin(\omega x) \bigr)$ | $e^{\gamma x} \bigl( a_0\cos(\omega x) + b_0\sin(\omega x) \bigr)$ |

**Regola della risonanza**: a ogni riga è associato un numero, cioè $0$ per i polinomi, $\gamma$ per l'esponenziale, $\pm i\omega$ per seno e coseno, $\gamma \pm i\omega$ per i prodotti. Se questo numero è radice dell'equazione caratteristica, il tentativo della tabella **va moltiplicato per** $x$; se è radice *doppia*, per $x^2$. Se $f$ è somma di termini di righe diverse, si cerca una soluzione particolare per ciascun termine e si sommano i risultati, per la **linearità** dell'equazione.
:::

:::esempio{titolo="Un caso con risonanza"}
$y'' + y = \cos x$. L'equazione caratteristica $r^2 + 1 = 0$ ha radici $\pm i$, che coincidono con il numero associato a $\cos x$, quindi il tentativo $a_0 \cos x + b_0 \sin x$ **va moltiplicato per** $x$. Sostituendo $y_p = x\,(a_0 \cos x + b_0 \sin x)$ si ottiene $a_0 = 0$ e $b_0 = \dfrac{1}{2}$, perciò $y_p = \dfrac{x \sin x}{2}$ e l'**integrale generale** è
$$
y = C_1 \cos x + C_2 \sin x + \frac{x \sin x}{2} .
$$

::grafico{f="x*sin(x)/2" xmin=-25 xmax=25 ymin=-13 ymax=13 titolo="$y = \dfrac{x \sin x}{2}$: l'ampiezza delle oscillazioni cresce nel tempo (risonanza)"}

:::

:::teorema{#variazione-delle-costanti titolo="Variazione delle costanti"}
Siano $y_1$ e $y_2$ soluzioni non proporzionali dell'omogenea associata e sia
$$
W(x) = y_1(x)\, y_2'(x) - y_1'(x)\, y_2(x)
$$
il loro **wronskiano**, che *non* si annulla mai. Una soluzione particolare di $y'' + ay' + by = f(x)$ è
$$
y_p(x) = -\,y_1(x) \int \frac{y_2(x)\, f(x)}{W(x)}\, dx \;+\; y_2(x) \int \frac{y_1(x)\, f(x)}{W(x)}\, dx .
$$
Il metodo si applica a *ogni* $f$ continua, anche fuori dalla tabella della somiglianza, per esempio a $y'' + y = \dfrac{1}{\cos x}$. Il nome deriva dalla forma del tentativo $y_p = c_1(x)\, y_1 + c_2(x)\, y_2$, nel quale le costanti dell'integrale generale dell'omogenea sono **sostituite da funzioni**; la formula si verifica per sostituzione diretta nell'equazione.
:::

## Problema di Cauchy del secondo ordine ed equazioni di ordine n

:::teorema{#cauchy-secondo-ordine titolo="Problema di Cauchy del secondo ordine"}
Il problema
$$
\begin{cases}
y'' + a\, y' + b\, y = f(x) \\[4pt]
y(x_0) = y_0 \\[4pt]
y'(x_0) = y_1
\end{cases}
$$
con $f$ continua su $I$ e $x_0 \in I$, ha **una e una sola soluzione**, definita su *tutto* $I$. Le condizioni iniziali sono due perché l'integrale generale contiene **due costanti**: assegnano nello stesso punto il valore della funzione e quello della sua derivata, cioè posizione e velocità nei modelli meccanici. Operativamente si scrive l'integrale generale, se ne calcola la derivata, si impongono le due condizioni e si risolve il sistema lineare nelle costanti $C_1$ e $C_2$.
:::

:::esempio
Per il problema $y'' + y = 0$ con $y(0) = 0$ e $y'(0) = 1$, l'integrale generale è $y = C_1 \cos x + C_2 \sin x$. Dalla prima condizione $y(0) = C_1 = 0$; poiché $y' = C_2 \cos x$, dalla seconda condizione $y'(0) = C_2 = 1$. La **soluzione** è $y = \sin x$.

::grafico{f="sin(x);x;2*sin(x)" punti="0,0,pieno" xmin=-1 xmax=7 ymin=-2.5 ymax=2.5 titolo="La soluzione $y = \sin x$ (in colore) parte da $y(0) = 0$ con pendenza $y'(0) = 1$, quella della retta tratteggiata $y = x$; con $y'(0) = 2$ la soluzione è $y = 2\sin x$ (in rosso)"}

:::

:::teorema{#ordine-n titolo="Equazioni lineari di ordine n a coefficienti costanti"}
Per l'equazione $y^{(n)} + a_{n-1}\, y^{(n-1)} + \cdots + a_1\, y' + a_0\, y = 0$ vale lo *stesso schema* del secondo ordine. L'equazione caratteristica è $r^n + a_{n-1} r^{n-1} + \cdots + a_1 r + a_0 = 0$ e le soluzioni formano uno **spazio vettoriale di dimensione** $n$. Ogni radice reale $r$ di **molteplicità** $m$ fornisce le soluzioni $e^{rx},\, x e^{rx},\, \dots,\, x^{m-1} e^{rx}$; ogni coppia di radici complesse $\lambda \pm i\mu$ di molteplicità $m$ fornisce $x^{k} e^{\lambda x} \cos(\mu x)$ e $x^{k} e^{\lambda x} \sin(\mu x)$ per $k = 0, \dots, m-1$. L'integrale generale è la combinazione lineare delle $n$ soluzioni così ottenute: per $y''' - y'' = 0$ l'equazione caratteristica $r^3 - r^2 = 0$ ha la radice doppia $0$ e la radice semplice $1$, quindi $y = C_1 + C_2\, x + C_3\, e^{x}$.
:::
