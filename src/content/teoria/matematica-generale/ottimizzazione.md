---
titolo: Massimi e minimi liberi e vincolati
sommario: Come si trovano e si classificano i massimi e i minimi di una funzione di due variabili, con i punti stazionari e la matrice hessiana, come si cercano gli estremi assoluti su un insieme chiuso e limitato e gli estremi su un vincolo, con la sostituzione e con i moltiplicatori di Lagrange, e come questi metodi risolvono i problemi del profitto, del consumatore e del costo minimo.
---

## Massimi e minimi relativi e assoluti

:::definizione{#estremi-relativi titolo="Massimi e minimi relativi e assoluti"}
Sia $f$ una funzione di due variabili definita su un insieme $D \subseteq \mathbb{R}^2$ e sia $P_0 = (x_0, y_0) \in D$. Il punto $P_0$ è un **punto di massimo relativo** (o locale) di $f$ se esiste un disco $B$ di centro $P_0$ tale che
$$
f(x, y) \leq f(x_0, y_0) \qquad \text{per ogni } (x, y) \in B \cap D ,
$$
ed è un **punto di minimo relativo** se vale la disuguaglianza opposta, $f(x, y) \geq f(x_0, y_0)$. Se la disuguaglianza vale per *ogni* $(x, y) \in D$, il massimo o il minimo si dice **assoluto**. Con le disuguaglianze strette per $(x, y) \neq (x_0, y_0)$ si parla di massimo o di minimo *stretto*. I massimi e i minimi si chiamano insieme **estremi**.

In altre parole, $P_0$ è di minimo relativo quando nessun punto vicino dà a $f$ un valore più piccolo, e di minimo assoluto quando nessun punto del dominio lo fa. Per esempio $f(x, y) = x^2 + y^2$ ha in $(0, 0)$ un minimo assoluto stretto, perché $f(0, 0) = 0$ e $x^2 + y^2 > 0$ per ogni $(x, y) \neq (0, 0)$. Le nozioni di disco, punto interno e insieme chiuso e limitato sono quelle dell'argomento sulle funzioni di due variabili.
:::

## Punti stazionari e condizione del primo ordine

:::richiamo{titolo="Teorema di Fermat"}
Sia $g$ definita in un intervallo $I$ e sia $t_0$ un punto interno a $I$ di massimo o di minimo relativo per $g$. Se $g$ è derivabile in $t_0$, allora $g'(t_0) = 0$.
:::

::::teorema{#condizione-primo-ordine titolo="Teorema di Fermat in due variabili"}
Sia $P_0 = (x_0, y_0)$ un punto interno al dominio di $f$, di massimo o di minimo relativo. Se in $P_0$ esistono le derivate parziali, allora
$$
\begin{cases}
f_x(x_0, y_0) = 0 \\[4pt]
f_y(x_0, y_0) = 0
\end{cases}
\qquad \text{cioè} \qquad
\nabla f(x_0, y_0) = (0, 0) .
$$
Il teorema riduce la ricerca degli estremi interni alla soluzione di un sistema di due equazioni in due incognite. Come nel caso di una variabile, la condizione è *necessaria* ma *non sufficiente*, e i punti trovati vanno poi classificati.

:::dimostrazione
L'idea è di guardare $f$ solo lungo la retta orizzontale per $P_0$, dove diventa una funzione di una variabile. Si pone $g(t) = f(x_0 + t, y_0)$. Poiché $P_0$ è interno, $g$ è definita in un intervallo che contiene $t = 0$ al suo interno. Se $P_0$ è di massimo relativo per $f$, allora $g(t) \leq g(0)$ per $t$ vicino a $0$, quindi $t = 0$ è di massimo relativo per $g$. La derivata $g'(0)$ è il limite del rapporto incrementale $\dfrac{f(x_0 + t, y_0) - f(x_0, y_0)}{t}$, cioè per definizione $f_x(x_0, y_0)$. Il **teorema di Fermat** applicato a $g$ dà perciò $f_x(x_0, y_0) = 0$. Con la retta verticale, $h(t) = f(x_0, y_0 + t)$, si ottiene allo stesso modo $f_y(x_0, y_0) = 0$. Il caso del minimo è analogo.
:::
::::

:::definizione{#punto-stazionario titolo="Punto stazionario"}
Un punto interno $P_0$ in cui $\nabla f(P_0) = (0, 0)$ si chiama **punto stazionario** (o critico) di $f$. Per una funzione con derivate parziali in ogni punto di un dominio aperto, i massimi e i minimi relativi vanno cercati *solo* tra i punti stazionari. Per esempio, per $f(x, y) = x^2 + y^2 - 2x + 4y$ si ha
$$
\begin{cases}
f_x = 2x - 2 = 0 \\[4pt]
f_y = 2y + 4 = 0
\end{cases}
\iff
\begin{cases}
x = 1 \\[4pt]
y = -2
\end{cases}
$$
quindi l'unico punto stazionario è $(1, -2)$. Completando i quadrati si scrive $f(x, y) = (x - 1)^2 + (y + 2)^2 - 5$. La somma dei due quadrati è positiva in ogni punto diverso da $(1, -2)$, quindi $(1, -2)$ è un minimo assoluto con valore $-5$.
:::

:::definizione{#punto-di-sella titolo="Punto di sella"}
Un punto stazionario $P_0$ è un **punto di sella** se in ogni disco di centro $P_0$ ci sono punti in cui $f > f(P_0)$ e punti in cui $f < f(P_0)$. Un punto di sella non è quindi né di massimo né di minimo relativo. L'esempio tipico è $f(x, y) = x^2 - y^2$ nell'origine. Il gradiente $(2x, -2y)$ si annulla in $(0, 0)$, ma lungo l'asse $x$ la funzione vale $x^2$, positiva per $x \neq 0$, e lungo l'asse $y$ vale $-y^2$, negativa per $y \neq 0$. Il nome viene dalla forma del grafico vicino all'origine, simile a una sella, con quote che aumentano spostandosi lungo l'asse $x$ e diminuiscono spostandosi lungo l'asse $y$.

::grafico{f="x^2;-x^2" punti="0,0,pieno" xmin=-3 xmax=3 ymin=-5 ymax=5 nomi="t,z" legenda="z = f(t, 0) = t^2;z = f(0, t) = -t^2" titolo="Restrizioni di $f(x, y) = x^2 - y^2$ ai due assi: in $t = 0$ la prima ha un minimo e la seconda un massimo, quindi $(0, 0)$ è un punto di sella"}

:::

## Matrice hessiana e test dell'hessiana

::::teorema{#test-hessiana titolo="Test dell'hessiana"}
Sia $f$ con derivate parziali seconde continue in un disco di centro $P_0$, e sia $P_0$ un punto stazionario di $f$. Si indica con $H(P_0)$ la matrice hessiana di $f$ in $P_0$, che è simmetrica per il teorema di Schwarz, e con
$$
\det H(P_0) = f_{xx}(P_0)\,f_{yy}(P_0) - f_{xy}(P_0)^2
$$
il suo determinante, calcolato con la regola delle matrici $2 \times 2$.

- Se $\det H(P_0) > 0$ e $f_{xx}(P_0) > 0$, allora $P_0$ è un punto di **minimo relativo**.
- Se $\det H(P_0) > 0$ e $f_{xx}(P_0) < 0$, allora $P_0$ è un punto di **massimo relativo**.
- Se $\det H(P_0) < 0$, allora $P_0$ è un **punto di sella**.
- Se $\det H(P_0) = 0$, il test non permette di concludere.

La matrice hessiana e il teorema di Schwarz sono quelli dell'argomento sulle funzioni di due variabili. Il test classifica un punto stazionario con il calcolo di tre numeri, $f_{xx}$, $f_{xy}$ e $f_{yy}$ in $P_0$, e ha per le funzioni di due variabili il ruolo del criterio della derivata seconda. Quando $\det H(P_0) > 0$, il prodotto $f_{xx} f_{yy}$ è maggiore di $f_{xy}^2 \geq 0$, quindi $f_{xx}$ e $f_{yy}$ hanno lo stesso segno e si può guardare indifferentemente l'una o l'altra. Per $f(x, y) = x^2 - y^2$ in $(0, 0)$ si ha $\det H = 2 \cdot (-2) - 0 = -4 < 0$, in accordo con il punto di sella visto prima.

:::dimostrazione
L'idea è che vicino a un punto stazionario il segno di $f(x_0 + h, y_0 + k) - f(x_0, y_0)$ è il segno della forma quadratica
$$
Q(h, k) = a h^2 + 2 b h k + c k^2,
\qquad
a = f_{xx}(P_0),\ \ b = f_{xy}(P_0),\ \ c = f_{yy}(P_0) .
$$
Questo segue dalla formula di Taylor del secondo ordine, per la quale si rimanda all'argomento sul calcolo differenziale di Analisi 2:
$$
f(x_0 + h, y_0 + k) = f(x_0, y_0) + f_x(P_0)\,h + f_y(P_0)\,k + \frac{1}{2}\,Q(h, k) + R(h, k),
$$
dove il resto $R$, diviso per $h^2 + k^2$, tende a $0$. In un punto stazionario i termini del primo ordine sono nulli, quindi la differenza vale $\dfrac{1}{2}\,Q(h, k) + R(h, k)$, e per $(h, k)$ piccolo il suo segno è quello di $Q$ ogni volta che $Q$ è positiva o negativa per tutti gli $(h, k) \neq (0, 0)$.

Si studia allora il segno di $Q$. Se $a \neq 0$, raccogliendo $a$ e completando il quadrato si ottiene
$$
Q(h, k) = a \left[ \left( h + \frac{b}{a}\,k \right)^2 + \frac{ac - b^2}{a^2}\,k^2 \right] .
$$

- Se $ac - b^2 > 0$, allora $a \neq 0$ e l'espressione tra parentesi quadre è una somma di due termini non negativi che si annullano insieme *solo* per $h = k = 0$. Quindi $Q$ ha il segno di $a$, e $P_0$ è di minimo se $a > 0$, di massimo se $a < 0$.
- Se $ac - b^2 < 0$ e $a \neq 0$, per $k = 0$ si ha $Q = a h^2$, che ha il segno di $a$; per $h = -\dfrac{b}{a}\,k$ con $k \neq 0$ si ha $Q = \dfrac{ac - b^2}{a}\,k^2$, che ha il segno opposto. Se invece $a = 0$, allora $b \neq 0$, e $Q(h, 1) = 2bh + c$ assume valori positivi e negativi al variare di $h$. Lungo la retta per $P_0$ di direzione $(h, k)$, con $Q(h, k) \neq 0$, la differenza $f - f(P_0)$ ha il segno di $Q(h, k)$ nei punti abbastanza vicini a $P_0$, perché il resto è trascurabile rispetto al termine del secondo ordine. In entrambi i casi la funzione è quindi maggiore di $f(P_0)$ in alcune direzioni e minore in altre, perciò $P_0$ è un punto di sella.
:::
::::

:::esempio{titolo="Una funzione con un minimo e una sella"}
Si cercano e si classificano i punti stazionari di $f(x, y) = x^3 + y^3 - 3xy$. Il sistema del primo ordine è
$$
\begin{cases}
f_x = 3x^2 - 3y = 0 \\[4pt]
f_y = 3y^2 - 3x = 0
\end{cases}
\iff
\begin{cases}
y = x^2 \\[4pt]
x^4 - x = 0
\end{cases}
$$
e poiché $x^4 - x = x\,(x^3 - 1)$, le soluzioni sono $x = 0$ e $x = 1$, cioè i punti $(0, 0)$ e $(1, 1)$. Le derivate seconde sono $f_{xx} = 6x$, $f_{xy} = -3$, $f_{yy} = 6y$, quindi
$$
H(0, 0) = \begin{pmatrix} 0 & -3 \\ -3 & 0 \end{pmatrix},
\qquad
H(1, 1) = \begin{pmatrix} 6 & -3 \\ -3 & 6 \end{pmatrix} .
$$
In $(0, 0)$ si ha $\det H = -9 < 0$, perciò l'origine è un **punto di sella**. In $(1, 1)$ si ha $\det H = 36 - 9 = 27 > 0$ e $f_{xx} = 6 > 0$, perciò $(1, 1)$ è un **minimo relativo**, con $f(1, 1) = -1$. Il minimo non è assoluto, perché lungo l'asse $x$ la funzione vale $x^3$, che tende a $-\infty$ per $x \to -\infty$.

::grafico{f="2*x^3-3*x^2;3*x^2" punti="0,0,pieno;1,-1,pieno" xmin=-1 xmax=2 ymin=-2 ymax=4 nomi="t,z" legenda="z = f(t, t) = 2t^3 - 3t^2;z = f(t, -t) = 3t^2" titolo="Lungo la retta $y = x$ la funzione $x^3 + y^3 - 3xy$ ha un massimo in $t = 0$ e un minimo in $t = 1$; lungo $y = -x$ ha un minimo in $t = 0$"}

:::

## Casi indecisi

:::osservazione{#casi-indecisi titolo="Il caso del determinante nullo"}
Quando $\det H(P_0) = 0$ il punto stazionario può essere di minimo, di massimo o di sella, e si studia direttamente il segno della differenza $f(x, y) - f(P_0)$ vicino a $P_0$. Per le tre funzioni
$$
f_1(x, y) = x^4 + y^4,
\qquad
f_2(x, y) = x^4 - y^4,
\qquad
f_3(x, y) = x^2 + y^3
$$
l'origine è stazionaria, e in tutte e tre $\det H(0, 0) = 0$, perché le hessiane sono la matrice nulla, la matrice nulla e $\begin{pmatrix} 2 & 0 \\ 0 & 0 \end{pmatrix}$.

- $f_1(x, y) > 0 = f_1(0, 0)$ per $(x, y) \neq (0, 0)$, quindi l'origine è un **minimo** assoluto.
- $f_2(x, 0) = x^4 > 0$ per $x \neq 0$ e $f_2(0, y) = -y^4 < 0$ per $y \neq 0$, quindi l'origine è un **punto di sella**.
- $f_3(0, y) = y^3$ è positiva per $y > 0$ e negativa per $y < 0$, quindi anche qui l'origine è un **punto di sella**.

Per mostrare che un punto è di sella basta trovare due curve per $P_0$ lungo le quali la differenza $f - f(P_0)$ ha segni opposti; per mostrare che è un estremo occorre invece controllare il segno in *tutti* i punti di un disco, spesso scrivendo $f - f(P_0)$ come somma di quadrati.
:::

:::attenzione
Il segno di $f_{xx}$ e di $f_{yy}$ non basta a classificare un punto stazionario; serve anche il determinante. La funzione $f(x, y) = x^2 + 4xy + y^2$ ha l'origine come punto stazionario, con $f_{xx} = f_{yy} = 2 > 0$, ma $\det H(0, 0) = 4 - 16 = -12 < 0$. Infatti lungo la retta $y = -x$ si ha $f(x, -x) = x^2 - 4x^2 + x^2 = -2x^2$, negativa per $x \neq 0$, mentre lungo l'asse $x$ si ha $f(x, 0) = x^2$, positiva per $x \neq 0$, quindi l'origine è un **punto di sella** anche se lungo i due assi è un minimo.
:::

## Massimi e minimi assoluti su insiemi chiusi e limitati

:::richiamo{titolo="Teorema di Weierstrass in due variabili"}
Sia $K \subseteq \mathbb{R}^2$ un insieme chiuso e limitato e sia $f$ continua su $K$. Allora $f$ ammette su $K$ un massimo assoluto e un minimo assoluto, cioè esistono $P_1, P_2 \in K$ tali che $f(P_1) \leq f(x, y) \leq f(P_2)$ per ogni $(x, y) \in K$.
:::

:::osservazione{#metodo-insiemi-compatti titolo="Il metodo per gli estremi assoluti"}
Sia $f$ continua su un insieme $K$ chiuso e limitato, con derivate parziali nei punti interni. Un punto di massimo o di minimo assoluto è interno a $K$ oppure sta sulla frontiera. Se è interno è un punto stazionario, per il teorema di Fermat in due variabili. Il metodo è perciò il seguente.

- Si trovano i punti stazionari interni a $K$; non serve classificarli.
- Si studia $f$ sulla frontiera. Ogni tratto della frontiera si descrive con una sola variabile (per esempio $y = 0$ con $x \in [0, 4]$, oppure $x = 2\cos t$, $y = 2\sin t$ con $t \in [0, 2\pi]$), e si cercano massimo e minimo della funzione di una variabile che si ottiene, compresi gli estremi dell'intervallo.
- Si aggiungono i vertici della frontiera, dove due tratti si incontrano.
- Si calcola $f$ in tutti i punti trovati. Il valore più grande è il massimo assoluto e il più piccolo è il minimo assoluto.

Il **teorema di Weierstrass** garantisce che massimo e minimo esistono, quindi il confronto di un numero finito di valori li individua. Se l'insieme non è limitato la conclusione può non valere. Per esempio $f(x, y) = x + y$ è continua sull'insieme chiuso $\{(x, y) : x \geq 0,\ y \geq 0\}$ e non ha massimo, perché $f(t, t) = 2t$ cresce senza limite.
:::

:::esempio{titolo="Estremi assoluti su un triangolo"}
Si cercano il massimo e il minimo assoluti di $f(x, y) = x^2 + y^2 - 2x - 4y$ sul triangolo $T$ di vertici $(0, 0)$, $(4, 0)$ e $(0, 4)$, cioè l'insieme $x \geq 0$, $y \geq 0$, $x + y \leq 4$. Il triangolo è chiuso e limitato e $f$ è continua, quindi gli estremi esistono per il teorema di Weierstrass.

Il sistema $f_x = 2x - 2 = 0$, $f_y = 2y - 4 = 0$ dà il punto $(1, 2)$, interno perché $1 + 2 < 4$, con $f(1, 2) = -5$. Sui tre lati si ottengono funzioni di una variabile:
$$
\begin{aligned}
y = 0,\ x \in [0, 4]: &\quad f = x^2 - 2x, \ \text{ minima in } x = 1, \\[6pt]
x = 0,\ y \in [0, 4]: &\quad f = y^2 - 4y, \ \text{ minima in } y = 2, \\[6pt]
y = 4 - x,\ x \in [0, 4]: &\quad f = 2x^2 - 6x, \ \text{ minima in } x = \frac{3}{2} .
\end{aligned}
$$
I candidati sono quindi i punti $(1, 2)$, $(1, 0)$, $(0, 2)$, $\left( \dfrac{3}{2}, \dfrac{5}{2} \right)$ e i vertici, con valori
$$
-5, \quad -1, \quad -4, \quad -\frac{9}{2}, \qquad f(0, 0) = 0, \quad f(4, 0) = 8, \quad f(0, 4) = 0 .
$$
Il **minimo assoluto** è $-5$, nel punto interno $(1, 2)$; il **massimo assoluto** è $8$, nel vertice $(4, 0)$.

::grafico{poligoni="0,0 4,0 0,4" punti="1,2,pieno,minimo;4,0,pieno,massimo;1,0,vuoto;0,2,vuoto;1.5,2.5,vuoto" xmin=-1 xmax=5 ymin=-1 ymax=5 uguale=1 legenda=0 titolo="Il triangolo $T$ con i candidati: il punto stazionario interno $(1, 2)$, i minimi sui lati $(1, 0)$, $(0, 2)$, $\left( \dfrac{3}{2}, \dfrac{5}{2} \right)$ e il vertice $(4, 0)$"}

:::

## Vincoli di uguaglianza e metodo di sostituzione

:::definizione{#estremo-vincolato titolo="Estremo vincolato"}
Siano $f$ e $g$ funzioni di due variabili. Il **vincolo** $g(x, y) = 0$ individua un insieme di punti del piano, di solito una curva. Un punto $P_0$ del vincolo è un **punto di massimo vincolato** di $f$ se esiste un disco $B$ di centro $P_0$ tale che $f(x, y) \leq f(P_0)$ per ogni $(x, y) \in B$ che soddisfa $g(x, y) = 0$; allo stesso modo si definisce il minimo vincolato. Si confrontano quindi i valori di $f$ *solo* con quelli assunti sul vincolo. Per esempio $f(x, y) = x + y$ non ha punti stazionari, ma sulla circonferenza $x^2 + y^2 = 2$ ha massimo $2$ in $(1, 1)$, perché per la disuguaglianza $(x - y)^2 \geq 0$ si ha $(x + y)^2 \leq 2(x^2 + y^2) = 4$. I problemi economici di scelta con un reddito o un costo fissati sono problemi di questo tipo.
:::

:::osservazione{#metodo-di-sostituzione titolo="Metodo di sostituzione"}
Quando dal vincolo si ricava una variabile in funzione dell'altra, per esempio $y = h(x)$ con $x$ in un intervallo $I$, il problema vincolato diventa lo studio della funzione di una variabile
$$
\varphi(x) = f(x, h(x)), \qquad x \in I ,
$$
con i metodi dell'argomento sulle derivate, le funzioni marginali e l'elasticità. Lo stesso vale quando il vincolo si descrive con un parametro, come la circonferenza $x = r\cos t$, $y = r\sin t$. Si cerca il minimo di $f(x, y) = x^2 + y^2$ sulla retta $x + 2y = 5$. Dal vincolo $x = 5 - 2y$, e quindi
$$
\varphi(y) = (5 - 2y)^2 + y^2 = 5y^2 - 20y + 25,
\qquad
\varphi'(y) = 10y - 20 .
$$
La derivata si annulla per $y = 2$, è negativa prima e positiva dopo, quindi $y = 2$ è il minimo assoluto di $\varphi$. Il punto di minimo vincolato è $(1, 2)$, con $f(1, 2) = 5$; non c'è massimo, perché $\varphi(y) \to +\infty$ per $y \to \pm\infty$. Poiché $x^2 + y^2$ è il quadrato della distanza di $(x, y)$ dall'origine, la distanza della retta dall'origine è $\sqrt{5}$.

::grafico{f="(5-x)/2" curve="sqrt(5)*cos(t),sqrt(5)*sin(t),0,6.29" punti="1,2,pieno" xmin=-3 xmax=5 ymin=-3 ymax=4 uguale=1 legenda="x + 2y = 5;x^2 + y^2 = 5" titolo="Sul vincolo $x + 2y = 5$ il minimo di $x^2 + y^2$ è nel punto $(1, 2)$, dove la curva di livello $x^2 + y^2 = 5$ è tangente alla retta"}

:::

## Moltiplicatori di Lagrange

:::richiamo{titolo="Derivata lungo una curva"}
Sia $f$ con derivate parziali continue e siano $x(t)$, $y(t)$ derivabili. Allora la funzione $\varphi(t) = f(x(t), y(t))$ è derivabile e
$$
\varphi'(t) = f_x(x(t), y(t))\,x'(t) + f_y(x(t), y(t))\,y'(t) = \nabla f(x(t), y(t)) \cdot (x'(t), y'(t)) .
$$
:::

::::teorema{#moltiplicatori-di-lagrange titolo="Teorema dei moltiplicatori di Lagrange"}
Siano $f$ e $g$ con derivate parziali continue in un insieme aperto che contiene il vincolo $g(x, y) = 0$, e sia $P_0$ un punto di massimo o di minimo di $f$ sul vincolo. Se $\nabla g(P_0) \neq (0, 0)$, allora esiste un numero reale $\lambda$, detto **moltiplicatore di Lagrange**, tale che
$$
\nabla f(P_0) = \lambda\,\nabla g(P_0) .
$$
Il teorema dà una condizione *necessaria* per gli estremi vincolati che non richiede di ricavare una variabile dal vincolo. I punti del vincolo in cui $\nabla g = (0, 0)$ vanno esaminati a parte. Per $f(x, y) = x + y$ e $g(x, y) = x^2 + y^2 - 2$ la condizione è $(1, 1) = \lambda\,(2x, 2y)$, quindi $x = y = \dfrac{1}{2\lambda}$, e sul vincolo si ottengono i punti $(1, 1)$ e $(-1, -1)$, dove $f$ vale $2$ e $-2$.

:::dimostrazione
L'idea è di percorrere il vincolo con una curva e di applicare il teorema di Fermat lungo di essa. Poiché $\nabla g(P_0) \neq (0, 0)$, il teorema delle funzioni implicite (teorema di Dini, per il quale si rimanda all'argomento sulle funzioni implicite di Analisi 2) assicura che vicino a $P_0$ i punti del vincolo formano una curva $\big( x(t), y(t) \big)$, con $t$ in un intervallo aperto che contiene $0$, derivabile, con $\big( x(0), y(0) \big) = P_0$ e vettore tangente $\vec{v} = \big( x'(0), y'(0) \big) \neq (0, 0)$.

La funzione $\varphi(t) = f(x(t), y(t))$ ha in $t = 0$ un massimo o un minimo relativo, perché $P_0$ è un estremo di $f$ sul vincolo. Per il teorema di Fermat $\varphi'(0) = 0$, e per la derivata lungo una curva questo significa $\nabla f(P_0) \cdot \vec{v} = 0$. Inoltre $g(x(t), y(t)) = 0$ per ogni $t$, quindi anche la sua derivata è nulla, e in $t = 0$ dà $\nabla g(P_0) \cdot \vec{v} = 0$. I vettori del piano perpendicolari al vettore non nullo $\vec{v}$ stanno tutti su una stessa retta per l'origine, perciò $\nabla f(P_0)$ e $\nabla g(P_0)$ sono paralleli. Poiché $\nabla g(P_0) \neq (0, 0)$, esiste $\lambda$ con $\nabla f(P_0) = \lambda\,\nabla g(P_0)$.
:::
::::

:::definizione{#funzione-lagrangiana titolo="Funzione lagrangiana"}
La **funzione lagrangiana** del problema di estremi di $f$ con il vincolo $g = 0$ è la funzione di tre variabili
$$
\mathcal{L}(x, y, \lambda) = f(x, y) - \lambda\,g(x, y) .
$$
Le sue derivate parziali nulle danno insieme la condizione del teorema di Lagrange e il vincolo:
$$
\begin{cases}
\mathcal{L}_x = f_x - \lambda\,g_x = 0 \\[4pt]
\mathcal{L}_y = f_y - \lambda\,g_y = 0 \\[4pt]
\mathcal{L}_\lambda = -g(x, y) = 0
\end{cases}
$$
Le soluzioni del sistema sono i punti candidati. Se il vincolo è chiuso e limitato, come una circonferenza o un'ellisse, gli estremi esistono per il teorema di Weierstrass, e si trovano confrontando i valori di $f$ nei candidati e nei punti del vincolo con $\nabla g = (0, 0)$. Una strategia frequente per risolvere il sistema è ricavare $\lambda$ dalle prime due equazioni e uguagliare le espressioni ottenute.
:::

:::esempio{titolo="Massimo e minimo di xy su una circonferenza"}
Si cercano gli estremi di $f(x, y) = xy$ sulla circonferenza $x^2 + y^2 = 8$. Con $g(x, y) = x^2 + y^2 - 8$ il sistema di Lagrange è
$$
\begin{cases}
y = 2\lambda x \\[4pt]
x = 2\lambda y \\[4pt]
x^2 + y^2 = 8
\end{cases}
$$
Sostituendo la seconda equazione nella prima si ottiene $y = 4\lambda^2 y$. Se fosse $y = 0$, la seconda equazione darebbe $x = 0$, e l'origine non sta sul vincolo; quindi $y \neq 0$ e $\lambda^2 = \dfrac{1}{4}$. Per $\lambda = \dfrac{1}{2}$ si ha $x = y$, e il vincolo dà $2x^2 = 8$, cioè i punti $(2, 2)$ e $(-2, -2)$, dove $f = 4$. Per $\lambda = -\dfrac{1}{2}$ si ha $x = -y$, con i punti $(2, -2)$ e $(-2, 2)$, dove $f = -4$. Il gradiente $\nabla g = (2x, 2y)$ si annulla solo nell'origine, che non sta sul vincolo. La circonferenza è chiusa e limitata, perciò il **massimo** vincolato è $4$ e il **minimo** è $-4$.
:::

:::osservazione{#interpretazione-geometrica titolo="Interpretazione geometrica"}
Per il teorema sul gradiente e le curve di livello, visto nell'argomento sulle funzioni di due variabili, il gradiente di $f$ in un punto è perpendicolare alla curva di livello di $f$ che passa per quel punto. Lo stesso vale per $\nabla g$ e il vincolo, che è la curva di livello $0$ di $g$. La condizione $\nabla f(P_0) = \lambda\,\nabla g(P_0)$ dice allora che in $P_0$ la curva di livello di $f$ e il vincolo hanno la stessa retta perpendicolare, quindi la stessa retta tangente. Perciò in un estremo vincolato la curva di livello di $f$ è **tangente al vincolo**. In un punto in cui la curva di livello attraversa il vincolo, invece, spostandosi sul vincolo da una parte e dall'altra si passa da valori di $f$ più grandi a valori più piccoli, e il punto non è un estremo.

::grafico{f="4/x" curve="sqrt(8)*cos(t),sqrt(8)*sin(t),0,6.29" vettori="2,2,4,4,∇f" punti="2,2,pieno;-2,-2,pieno" xmin=-5 xmax=5 ymin=-5 ymax=5 uguale=1 legenda="xy = 4;x^2 + y^2 = 8" titolo="Nei punti di massimo $(2, 2)$ e $(-2, -2)$ la curva di livello $xy = 4$ è tangente alla circonferenza $x^2 + y^2 = 8$, e $\nabla f(2, 2) = (2, 2)$ è perpendicolare a entrambe"}

:::

:::attenzione
L'ipotesi $\nabla g(P_0) \neq (0, 0)$ del teorema di Lagrange non si può omettere. Sulla curva $y^2 - x^3 = 0$, che ha una cuspide nell'origine, si ha $x^3 = y^2 \geq 0$, cioè $x \geq 0$, quindi $f(x, y) = x$ ha minimo $0$ nel punto $(0, 0)$. Il sistema di Lagrange
$$
\begin{cases}
1 = -3\lambda x^2 \\[4pt]
0 = 2\lambda y \\[4pt]
y^2 = x^3
\end{cases}
$$
*non* ha soluzioni. Infatti la prima equazione richiede $\lambda \neq 0$ e $x \neq 0$, la seconda dà allora $y = 0$, e il vincolo dà $x = 0$, che contraddice la prima. Il minimo si trova nell'origine, dove $\nabla g = (-3x^2, 2y) = (0, 0)$, ed è per questo che i punti con gradiente del vincolo nullo vanno sempre aggiunti ai candidati.

::grafico{curve="t^2,t^3,-1.4,1.4" vettori="0,0,1,0,∇f" punti="0,0,pieno" xmin=-2 xmax=4 ymin=-3 ymax=3 uguale=1 legenda="y^2 = x^3" titolo="Sulla curva $y^2 = x^3$ la funzione $f(x, y) = x$ ha il minimo nella cuspide $(0, 0)$, dove $\nabla g = (0, 0)$ e la condizione di Lagrange non vale"}

:::

## Applicazioni economiche

:::esempio{#profitto-due-beni titolo="Profitto massimo con due beni"}
Un'impresa in concorrenza perfetta produce due beni in quantità $q_1$ e $q_2$, venduti ai prezzi di $40$ e $50$ euro, con costo $C(q_1, q_2) = q_1^2 + q_1 q_2 + q_2^2$. Il profitto è il ricavo meno il costo,
$$
\pi(q_1, q_2) = 40\,q_1 + 50\,q_2 - q_1^2 - q_1 q_2 - q_2^2 .
$$
Nelle condizioni del primo ordine il prezzo di ogni bene è uguale al suo costo marginale.
$$
\begin{cases}
\pi_{q_1} = 40 - 2q_1 - q_2 = 0 \\[4pt]
\pi_{q_2} = 50 - q_1 - 2q_2 = 0
\end{cases}
\iff
\begin{cases}
q_1 = 10 \\[4pt]
q_2 = 20
\end{cases}
$$
L'hessiana è costante, $H = \begin{pmatrix} -2 & -1 \\ -1 & -2 \end{pmatrix}$, con $\det H = 3 > 0$ e $\pi_{q_1 q_1} = -2 < 0$, quindi per il **test dell'hessiana** il punto è di massimo. Il profitto massimo è $\pi(10, 20) = 400 + 1000 - 100 - 200 - 400 = 700$ euro. Il termine $q_1 q_2$ nel costo rende le due scelte dipendenti; senza di esso ogni bene si studierebbe da solo, come nell'argomento sullo studio di funzione.
:::

:::definizione{#problema-del-consumatore titolo="Problema del consumatore"}
Un consumatore con reddito $m$ acquista le quantità $x$ e $y$ di due beni, ai prezzi $p_1$ e $p_2$, e le sue preferenze sono descritte da una funzione di utilità $U(x, y)$. Il **problema del consumatore** è
$$
\max\, U(x, y) \qquad \text{con il vincolo di bilancio} \qquad p_1 x + p_2 y = m, \quad x, y > 0 .
$$
Le prime due equazioni del sistema di Lagrange sono $U_x = \lambda p_1$ e $U_y = \lambda p_2$, e dividendole si ottiene
$$
\frac{U_x}{U_y} = \frac{p_1}{p_2} ,
$$
cioè nella scelta ottima il **saggio marginale di sostituzione** è uguale al rapporto dei prezzi. Geometricamente, la curva di indifferenza è tangente alla retta di bilancio. Il moltiplicatore $\lambda$ si chiama **utilità marginale del reddito**. Si dimostra infatti che $\lambda$ è la derivata dell'utilità massima rispetto a $m$, quindi misura di quanto aumenta l'utilità massima per ogni euro di reddito in più.
:::

:::esempio{titolo="Scelta ottima con utilità xy"}
Sia $U(x, y) = xy$, con $p_1 = 2$, $p_2 = 4$ e $m = 80$ euro. Il sistema di Lagrange è
$$
\begin{cases}
y = 2\lambda \\[4pt]
x = 4\lambda \\[4pt]
2x + 4y = 80
\end{cases}
$$
Le prime due equazioni danno $x = 2y$, e il vincolo diventa $8y = 80$, quindi $y = 10$, $x = 20$ e $\lambda = 5$. L'utilità massima è $U(20, 10) = 200$. Con lo stesso procedimento e reddito $m$ qualsiasi si trova $x = \dfrac{m}{4}$, $y = \dfrac{m}{8}$, quindi l'utilità massima è $\dfrac{m^2}{32}$, e la sua derivata in $m = 80$ vale $\dfrac{80}{16} = 5 = \lambda$. Sul vincolo, con $x, y > 0$, l'utilità $x \cdot \dfrac{80 - 2x}{4}$ è una parabola con la concavità verso il basso, perciò il punto trovato è il massimo.

::grafico{f="20-x/2+0*sqrt(x*(40-x));200/x+0*sqrt(x)" punti="20,10,pieno" segmenti="20,0,20,10;0,10,20,10" xmin=-5 xmax=45 ymin=-4 ymax=36 legenda="2x + 4y = 80;xy = 200" titolo="La curva di indifferenza $xy = 200$ è tangente alla retta di bilancio $2x + 4y = 80$ nel paniere ottimo $(20, 10)$"}

:::

:::esempio{#minimo-costo titolo="Minimo costo dell'impresa"}
Un'impresa usa lavoro $L$ e capitale $K$, pagati $w = 2$ e $r = 8$ euro per unità, con funzione di produzione $Q = \sqrt{LK}$, e vuole produrre $Q = 4$ unità al costo minimo. Il problema è minimizzare il costo $C = 2L + 8K$ sull'isoquanto $\sqrt{LK} = 4$, cioè $LK = 16$, con $L, K > 0$. Il sistema di Lagrange, con il vincolo $LK - 16 = 0$, è
$$
\begin{cases}
2 = \lambda K \\[4pt]
8 = \lambda L \\[4pt]
LK = 16
\end{cases}
$$
Dividendo la seconda equazione per la prima si ottiene $L = 4K$, e il vincolo dà $4K^2 = 16$, quindi $K = 2$, $L = 8$ e il costo minimo è $C = 16 + 16 = 32$ euro. La condizione $\dfrac{w}{r} = \dfrac{K}{L}$ è il caso particolare della regola generale per cui il rapporto delle produttività marginali è uguale al rapporto dei prezzi dei fattori. Sostituendo $K = \dfrac{16}{L}$ si ha $C = 2L + \dfrac{128}{L}$, che tende a $+\infty$ per $L \to 0^+$ e per $L \to +\infty$, perciò il punto trovato è il minimo.

::grafico{f="16/x+0*sqrt(x);4-x/4+0*sqrt(x*(16-x))" punti="8,2,pieno" xmin=-2 xmax=18 ymin=-1 ymax=9 nomi="L,K" legenda="LK = 16;2L + 8K = 32" titolo="L'isoquanto $LK = 16$ è tangente alla retta di isocosto $2L + 8K = 32$ nella combinazione di costo minimo $(8, 2)$"}

:::
