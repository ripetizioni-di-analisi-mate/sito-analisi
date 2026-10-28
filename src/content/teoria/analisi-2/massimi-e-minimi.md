---
titolo: Massimi e minimi liberi e vincolati
sommario: Dove cercare gli estremi di una funzione di più variabili, come classificarli con la matrice Hessiana, come trattare i compatti e i vincoli con i moltiplicatori di Lagrange.
---

## Massimi e minimi liberi

:::definizione{#massimo-e-minimo titolo="Massimo e minimo, locale e assoluto"}
Sia $f : A \to \mathbb{R}$ con $A \subseteq \mathbb{R}^2$ e sia $(x_0, y_0) \in A$.

- $(x_0, y_0)$ è **punto di massimo assoluto** se $f(x, y) \leq f(x_0, y_0)$ per *ogni* $(x, y) \in A$.
- $(x_0, y_0)$ è **punto di massimo locale** se esiste $r > 0$ tale che $f(x, y) \leq f(x_0, y_0)$ per ogni $(x, y) \in A$ con $\sqrt{(x - x_0)^2 + (y - y_0)^2} < r$.

Con le disuguaglianze opposte si definiscono il minimo assoluto e il minimo locale; massimi e minimi si chiamano **estremi**. Le definizioni sono le stesse del caso di una variabile, con l'intorno circolare al posto dell'intervallo, e si estendono senza modifiche a $\mathbb{R}^n$. Un estremo assoluto è anche locale; il viceversa *non* è vero, perciò le due nozioni richiedono strumenti diversi: per gli estremi locali il calcolo differenziale, per quelli assoluti un confronto tra i valori nei candidati.
:::

:::esempio
$f(x, y) = x^2 + y^2$ ha in $(0, 0)$ un **punto di minimo assoluto**, poiché $f(x, y) \geq 0 = f(0, 0)$ per ogni $(x, y) \in \mathbb{R}^2$. La stessa funzione **non ha massimo**, perché lungo l'asse $x$ si ha $f(x, 0) = x^2 \to +\infty$.
:::

## Punti critici e teorema di Fermat

:::definizione{#punto-critico titolo="Punto critico"}
Sia $f$ dotata di derivate parziali in $(x_0, y_0)$ interno al dominio. Il punto $(x_0, y_0)$ è **critico** (o **stazionario**) per $f$ se il gradiente si annulla, cioè se le due condizioni sono soddisfatte *insieme*:
$$
\begin{cases}
f_x(x_0, y_0) = 0 \\[4pt]
f_y(x_0, y_0) = 0
\end{cases}
$$
La ricerca dei punti critici è la risoluzione di questo sistema di due equazioni in due incognite. Nei punti critici il piano tangente al grafico è **orizzontale**.
:::

::::teorema{#teorema-di-fermat titolo="Teorema di Fermat in più variabili"}
Sia $(x_0, y_0)$ un punto di estremo locale per $f$, interno al dominio, e supponiamo che $f$ abbia derivate parziali in $(x_0, y_0)$. Allora $(x_0, y_0)$ è un **punto critico**:
$$
\nabla f(x_0, y_0) = (0, 0) .
$$
Il teorema dice dove cercare gli estremi liberi: tra i **punti critici**, oltre agli eventuali punti interni dove $f$ non è derivabile e ai punti del bordo del dominio. Per $f(x, y) = x^2 + y^2 - 4x$ il sistema $f_x = 2x - 4 = 0$, $f_y = 2y = 0$ ha l'*unica* soluzione $(2, 0)$, quindi ogni eventuale estremo libero è in $(2, 0)$.

:::dimostrazione
Sia $(x_0, y_0)$ un punto di massimo locale (per il minimo si ragiona allo stesso modo). La funzione di una variabile $g(t) = f(t, y_0)$ è definita in un intorno di $t = x_0$, perché il punto è interno al dominio, ed è derivabile in $x_0$ con $g'(x_0) = f_x(x_0, y_0)$. Poiché $f$ ha un massimo locale in $(x_0, y_0)$, la restrizione $g$ ha un massimo locale nel punto interno $x_0$, quindi per il **teorema di Fermat in una variabile** $g'(x_0) = 0$, cioè $f_x(x_0, y_0) = 0$. Applicando lo stesso argomento a $h(t) = f(x_0, t)$ si ottiene $f_y(x_0, y_0) = 0$.
:::
::::

:::richiamo{titolo="Teorema di Fermat in una variabile"}
Se $x_0$ è un punto di estremo locale per $g$, interno al dominio, e $g$ è derivabile in $x_0$, allora $g'(x_0) = 0$.
:::

:::definizione{#punto-di-sella titolo="Punto di sella"}
Un punto critico che non è di estremo locale si chiama **punto di sella**. Il nome viene dal grafico di $f(x, y) = x^2 - y^2$: l'origine è critica, ma $f(x, 0) = x^2 > 0$ e $f(0, y) = -y^2 < 0$ per $x, y \neq 0$, quindi in ogni intorno dell'origine la funzione assume valori sia maggiori sia minori di $f(0, 0) = 0$ e l'origine **non è un estremo**. Il teorema di Fermat fornisce una condizione *necessaria* e non *sufficiente*, perciò dopo la ricerca dei punti critici serve uno strumento che li classifichi.

::grafico{area="abs(x);-abs(x);-2.5;2.5" segmenti="-2.3,-2.3,2.3,2.3;-2.3,2.3,2.3,-2.3" punti="0,0,pieno" etichette="1.3,0.3,f > 0;-2.1,0.3,f > 0;0.15,1.6,f < 0;0.15,-1.9,f < 0" xmin=-2.5 xmax=2.5 ymin=-2.3 ymax=2.3 uguale=1 titolo="$f(x, y) = x^2 - y^2$ è positiva nella regione colorata e negativa nel resto: in ogni intorno dell'origine assume entrambi i segni"}

:::

## La matrice Hessiana e la classificazione dei punti critici

:::definizione{#matrice-hessiana titolo="Matrice Hessiana"}
Sia $f$ di classe $C^2$ in un aperto. La **matrice Hessiana** di $f$ in $(x_0, y_0)$ è la matrice delle derivate seconde
$$
H_f(x_0, y_0) =
\begin{pmatrix}
f_{xx}(x_0, y_0) & f_{xy}(x_0, y_0) \\[4pt]
f_{yx}(x_0, y_0) & f_{yy}(x_0, y_0)
\end{pmatrix} .
$$
Poiché $f$ è di classe $C^2$, per il **teorema di Schwarz** le derivate miste coincidono, quindi la matrice è **simmetrica**. La Hessiana svolge in due variabili il ruolo della derivata seconda in una variabile: il suo segno, nel senso definito sotto, classifica i punti critici.
:::

:::definizione{#segno-matrice-simmetrica titolo="Segno di una matrice simmetrica"}
Una matrice simmetrica $H$ di ordine $2$ si dice

- **definita positiva** se i suoi autovalori sono entrambi positivi;
- **definita negativa** se i suoi autovalori sono entrambi negativi;
- **indefinita** se ha un autovalore positivo e uno negativo;
- semidefinita (caso degenere) se *almeno un* autovalore è nullo, cioè se $\det H = 0$.

Per una matrice di ordine $2$ il segno si legge dal determinante e dal primo elemento, *senza* calcolare gli autovalori: poiché $\det H$ è il prodotto degli autovalori, $\det H > 0$ significa autovalori concordi, con il segno comune dato dal segno di $f_{xx}$, mentre $\det H < 0$ significa autovalori discordi. In $n$ variabili lo stesso criterio usa i minori principali di nord-ovest (criterio di Sylvester) e si rimanda al corso di algebra lineare.
:::

:::teorema{#criterio-della-hessiana titolo="Classificazione con la matrice Hessiana"}
Sia $f$ di classe $C^2$ e sia $(x_0, y_0)$ un punto critico con Hessiana $H = H_f(x_0, y_0)$.

- Se $\det H > 0$ e $f_{xx}(x_0, y_0) > 0$, allora $(x_0, y_0)$ è un **punto di minimo locale**.
- Se $\det H > 0$ e $f_{xx}(x_0, y_0) < 0$, allora $(x_0, y_0)$ è un **punto di massimo locale**.
- Se $\det H < 0$, allora $(x_0, y_0)$ è un **punto di sella**.
- Se $\det H = 0$, il criterio *non* decide e il punto va studiato direttamente.

La dimostrazione usa la formula di Taylor al secondo ordine: vicino al punto critico la differenza $f(x, y) - f(x_0, y_0)$ ha il segno della forma quadratica associata alla Hessiana, e si rimanda al capitolo sul calcolo differenziale in più variabili. Nei calcoli il criterio si applica così: si trova ogni punto critico risolvendo il sistema $\nabla f = (0, 0)$, si calcolano le tre derivate seconde nel punto e si guardano $\det H$ e $f_{xx}$.
:::

:::esempio{titolo="Applicazione del criterio"}
$f(x, y) = x^2 + 3y^2 - 6y$. Il sistema $f_x = 2x = 0$, $f_y = 6y - 6 = 0$ ha l'unica soluzione $(0, 1)$. Le derivate seconde sono $f_{xx} = 2$, $f_{yy} = 6$, $f_{xy} = 0$, quindi $\det H = 12 > 0$ e $f_{xx} = 2 > 0$: il punto $(0, 1)$ è **di minimo locale**, con $f(0, 1) = -3$.
:::

## Il caso degenere: studio diretto del segno

:::osservazione{#caso-degenere titolo="Studio diretto del segno"}
Quando $\det H = 0$ nel punto critico, la classificazione si ottiene studiando il segno della differenza
$$
f(x, y) - f(x_0, y_0)
$$
vicino al punto. Se la differenza è $\geq 0$ in un intorno, il punto è **di minimo locale**; se è $\leq 0$, **di massimo locale**; se in *ogni* intorno assume entrambi i segni, il punto è **di sella**. Per stabilire il segno si usano due tecniche, spesso insieme: riconoscere una somma di quantità non negative (quadrati, potenze pari), oppure calcolare la differenza lungo curve che passano per il punto (rette, parabole) alla ricerca di segni diversi. Per $f(x, y) = x^2 + y^4$ l'origine è critica con Hessiana degenere, e poiché $f(x, y) \geq 0 = f(0, 0)$ ovunque, l'origine è un punto di minimo assoluto.
:::

:::attenzione
Lungo le rette il segno può essere costante *anche* in un punto di sella. Per $f(x, y) = (y - x^2)(y - 4x^2)$ l'origine è critica con Hessiana degenere e la restrizione a ogni retta per l'origine ha un minimo in $0$; sulla parabola $y = 2x^2$ risulta invece $f = -2x^4 < 0$, mentre sull'asse $y$ risulta $f = y^2 > 0$, quindi l'origine è un **punto di sella**. Un numero finito di restrizioni può escludere l'estremo, ma *non* basta mai a dimostrarlo; l'estremo si dimostra con una stima valida in tutto un intorno.

::grafico{f="2*x^2" area="4*x^2;x^2;-1.2;1.2" segmenti="-0.6,-0.6,1.2,1.2" punti="0,0,pieno" xmin=-1.2 xmax=1.2 ymin=-0.6 ymax=3 titolo="$f(x, y) = (y - x^2)(y - 4x^2)$ è negativa fra le parabole $y = x^2$ e $y = 4x^2$ (regione colorata): vicino all'origine ogni retta, come $y = x$ (tratteggiata), resta fuori dalla regione, mentre la parabola $y = 2x^2$ vi resta dentro"}

:::

## Estremi assoluti su insiemi compatti

:::teorema{#weierstrass-in-piu-variabili titolo="Teorema di Weierstrass"}
Sia $K \subset \mathbb{R}^2$ un insieme compatto, cioè chiuso e limitato, e sia $f$ continua su $K$. Allora $f$ ammette **massimo e minimo assoluti** su $K$. Il teorema garantisce che il problema ha soluzione *prima* ancora di iniziare i calcoli: su un rettangolo, un cerchio o un triangolo (con il bordo) gli estremi assoluti di una funzione continua esistono sempre. La dimostrazione è analoga a quella in una variabile e si rimanda al capitolo sulle funzioni di più variabili.
:::

:::osservazione{#metodo-del-compatto titolo="Il metodo per gli estremi assoluti su un compatto"}
Gli estremi assoluti su $K$ vengono assunti in **punti interni** oppure sulla **frontiera**. Nei punti interni di estremo si applica il **teorema di Fermat**, quindi i candidati sono di tre tipi:

- i punti critici interni a $K$;
- gli eventuali punti interni dove $f$ non è derivabile;
- i punti di estremo della restrizione di $f$ alla frontiera di $K$.

Si calcolano i valori di $f$ in *tutti* i candidati e si confrontano: il valore più grande è il massimo assoluto, il più piccolo è il minimo assoluto. La classificazione con la Hessiana non serve in questo metodo, poiché il confronto finale dei valori decide tutto; anche un punto di sella interno può restare tra i candidati senza causare errori.
:::

:::osservazione{#studio-della-frontiera titolo="Studio della frontiera"}
La restrizione di $f$ alla frontiera è una funzione di una variabile, da studiare con i metodi di Analisi 1. Le due tecniche sono la sostituzione e la parametrizzazione.

- **Sostituzione**: sui tratti dove la frontiera è un grafico, si ricava una variabile dall'equazione del bordo e si sostituisce. Sul segmento $y = 2$, $x \in [0, 3]$ si studia $g(x) = f(x, 2)$ su $[0, 3]$; sulla circonferenza $x^2 + y^2 = 1$ si può sostituire $y^2 = 1 - x^2$ con $x \in [-1, 1]$, quando $f$ dipende da $y$ solo attraverso $y^2$.
- **Parametrizzazione**: si descrive il bordo con un parametro e si studia la funzione composta. Per la circonferenza $x^2 + y^2 = r^2$ si pone $x = r\cos t$, $y = r\sin t$ con $t \in [0, 2\pi]$ e si studia $g(t) = f(r\cos t, r\sin t)$.

Se la frontiera è composta da più tratti, come i lati di un rettangolo o di un triangolo, ogni tratto si studia separatamente e i **punti di raccordo** (i vertici) vanno inclusi tra i candidati, perché sono gli estremi degli intervalli delle restrizioni.
:::

:::esempio{titolo="Estremi assoluti su un quadrato"}
$f(x, y) = xy$ sul quadrato $K = [0, 1] \times [0, 1]$. La funzione è continua e $K$ è compatto, quindi per il **teorema di Weierstrass** massimo e minimo esistono. L'unico punto critico è l'origine, che *non* è interna a $K$, perciò gli estremi sono sulla frontiera. Sui lati $x = 0$ e $y = 0$ si ha $f = 0$; sul lato $x = 1$ la restrizione è $g(y) = y$, crescente su $[0, 1]$, con valori da $0$ a $1$; sul lato $y = 1$ la restrizione è $g(x) = x$, con gli stessi valori. Il confronto dà **massimo assoluto** $1$ in $(1, 1)$ e **minimo assoluto** $0$, assunto in tutti i punti dei due lati sugli assi.

::grafico{curve="(t+abs(t))/2,(abs(t)-t)/2,-1,1" area="1;0;0;1" punti="1,1,pieno,massimo 1" etichette="0.3,-0.27,minimo 0" xmin=-0.4 xmax=1.6 ymin=-0.4 ymax=1.5 uguale=1 titolo="Il quadrato $K = [0, 1] \times [0, 1]$: $f(x, y) = xy$ ha massimo $1$ nel vertice $(1, 1)$ e minimo $0$ sui due lati che stanno sugli assi (in colore)"}

:::

## Estremi vincolati: i moltiplicatori di Lagrange

:::definizione{#estremo-vincolato titolo="Estremo vincolato"}
Siano $f$ e $g$ funzioni di classe $C^1$ e sia $Z = \{ (x, y) : g(x, y) = 0 \}$ l'insieme degli zeri del vincolo. Un punto $(x_0, y_0) \in Z$ è **di massimo vincolato** se $f(x_0, y_0) \geq f(x, y)$ per ogni $(x, y) \in Z$ vicino a $(x_0, y_0)$; analogamente per il minimo. Si cercano cioè gli estremi di $f$ ristretta alla curva di equazione $g(x, y) = 0$. Il teorema di Fermat **non si applica**, perché i punti di $Z$ non sono interni a $Z$: serve una condizione *necessaria* adatta, che è il **teorema dei moltiplicatori di Lagrange**.
:::

::::teorema{#moltiplicatori-di-lagrange titolo="Teorema dei moltiplicatori di Lagrange"}
Siano $f, g$ di classe $C^1$ e sia $(x_0, y_0)$ un punto di estremo vincolato per $f$ con vincolo $g(x, y) = 0$. Se $\nabla g(x_0, y_0) \neq (0, 0)$, allora esiste $\lambda \in \mathbb{R}$, detto **moltiplicatore di Lagrange**, tale che
$$
\nabla f(x_0, y_0) = \lambda\, \nabla g(x_0, y_0) .
$$
Nei punti di estremo vincolato i due gradienti sono **paralleli**: le curve di livello di $f$ sono **tangenti** alla curva del vincolo, poiché se la attraversassero il valore di $f$ lungo il vincolo starebbe ancora crescendo.

:::dimostrazione
Poiché $\nabla g(x_0, y_0) \neq (0, 0)$, una delle due derivate parziali di $g$ è diversa da zero; sia $g_y(x_0, y_0) \neq 0$ (nel caso $g_x \neq 0$ si scambiano i ruoli delle variabili). Per il **teorema di Dini**, vicino a $(x_0, y_0)$ l'insieme $Z$ è il grafico di una funzione $y = \varphi(x)$ di classe $C^1$ con $\varphi(x_0) = y_0$ e
$$
\varphi'(x_0) = -\frac{g_x(x_0, y_0)}{g_y(x_0, y_0)} .
$$
La funzione di una variabile $h(x) = f(x, \varphi(x))$ ha un estremo locale nel punto interno $x_0$, quindi per il **teorema di Fermat** e per la **regola di derivazione della funzione composta**
$$
0 = h'(x_0) = f_x(x_0, y_0) + f_y(x_0, y_0)\, \varphi'(x_0)
= f_x(x_0, y_0) - f_y(x_0, y_0)\, \frac{g_x(x_0, y_0)}{g_y(x_0, y_0)} .
$$
Posto $\lambda = \dfrac{f_y(x_0, y_0)}{g_y(x_0, y_0)}$, dall'uguaglianza segue $f_x(x_0, y_0) = \lambda\, g_x(x_0, y_0)$, e dalla definizione di $\lambda$ segue $f_y(x_0, y_0) = \lambda\, g_y(x_0, y_0)$, cioè la tesi.
:::
::::

:::richiamo{titolo="Teorema di Dini"}
Se $g$ è di classe $C^1$, $g(x_0, y_0) = 0$ e $g_y(x_0, y_0) \neq 0$, allora vicino a $(x_0, y_0)$ l'insieme degli zeri di $g$ è il grafico di una funzione $y = \varphi(x)$ di classe $C^1$, con $\varphi'(x) = -\dfrac{g_x(x, \varphi(x))}{g_y(x, \varphi(x))}$.
:::

:::osservazione{#sistema-di-lagrange titolo="Il sistema di Lagrange"}
Il teorema trasforma la ricerca degli estremi vincolati nella risoluzione del **sistema di tre equazioni** nelle tre incognite $x$, $y$, $\lambda$:
$$
\begin{cases}
f_x(x, y) = \lambda\, g_x(x, y) \\[4pt]
f_y(x, y) = \lambda\, g_y(x, y) \\[4pt]
g(x, y) = 0
\end{cases}
$$
Le soluzioni del sistema, insieme agli eventuali punti del vincolo con $\nabla g = (0, 0)$, sono i candidati. Quando il vincolo è un insieme compatto, per il **teorema di Weierstrass** il massimo e il minimo esistono e si trovano confrontando i valori di $f$ nei candidati. Quando il vincolo *non* è compatto, l'esistenza va **giustificata a parte**, per esempio studiando il comportamento di $f$ lungo il vincolo all'infinito. Il valore di $\lambda$ serve solo a risolvere il sistema e di regola non compare nella risposta.
:::

:::esempio{titolo="Massimo e minimo su una circonferenza"}
Estremi di $f(x, y) = x + y$ con vincolo $g(x, y) = x^2 + y^2 - 2 = 0$. Il gradiente $\nabla g = (2x, 2y)$ si annulla *solo* nell'origine, che non appartiene al vincolo, quindi tutti i candidati risolvono il sistema
$$
\begin{cases}
1 = 2\lambda x \\[4pt]
1 = 2\lambda y \\[4pt]
x^2 + y^2 = 2
\end{cases}
$$
Dalle prime due equazioni $\lambda \neq 0$ e $x = y = \dfrac{1}{2\lambda}$; sostituendo nella terza si ottiene $2x^2 = 2$, quindi $x = \pm 1$. I candidati sono $(1, 1)$ con $f = 2$ e $(-1, -1)$ con $f = -2$; poiché la circonferenza è compatta, il **massimo vincolato** è $2$ e il **minimo vincolato** è $-2$.

::grafico{curve="sqrt(2)*cos(t),sqrt(2)*sin(t),0,6.29" segmenti="-0.4,2.4,2.4,-0.4;-2.2,2.2,2.2,-2.2;-2.4,0.4,0.4,-2.4" vettori="1,1,1.6,1.6,∇f" punti="1,1,pieno;-1,-1,pieno" etichette="1.65,0.55,x + y = 2;-2.45,-0.9,x + y = −2" xmin=-2.6 xmax=2.6 ymin=-2.5 ymax=2.5 uguale=1 titolo="Il vincolo $x^2 + y^2 = 2$ e le rette di livello $x + y = k$ per $k = -2, 0, 2$ (tratteggiate): nel massimo $(1, 1)$ e nel minimo $(-1, -1)$ la retta di livello è tangente alla circonferenza e $\nabla f$ è ortogonale a entrambe"}

:::

:::attenzione
L'ipotesi $\nabla g \neq (0, 0)$ *non* si può omettere. Sulla curva $g(x, y) = y^3 - x^2 = 0$ la funzione $f(x, y) = y$ ha **minimo vincolato** nell'origine, perché sul vincolo $y = x^{\frac{2}{3}} \geq 0$; il sistema di Lagrange richiede $(0, 1) = \lambda\,(-2x, 3y^2)$, che nell'origine diventa $(0, 1) = (0, 0)$ e non ha soluzione. Il punto sfugge al sistema poiché $\nabla g(0, 0) = (0, 0)$: i punti del vincolo dove il gradiente di $g$ si annulla vanno **aggiunti a mano** ai candidati.

::grafico{f="cbrt(x*x)" punti="0,0,pieno" xmin=-2 xmax=2 ymin=-0.6 ymax=2 titolo="Il vincolo $y^3 - x^2 = 0$, cioè $y = \sqrt[3]{x^2}$: la funzione $f(x, y) = y$ ha minimo vincolato nell'origine, dove $\nabla g = (0, 0)$ e la curva ha una cuspide"}

:::

## Due vincoli in tre variabili

:::teorema{#due-vincoli titolo="Moltiplicatori con due vincoli"}
Siano $f, g, h$ di classe $C^1$ in $\mathbb{R}^3$ e sia $(x_0, y_0, z_0)$ un punto di estremo per $f$ sull'insieme definito dalle due condizioni simultanee
$$
\begin{cases}
g(x, y, z) = 0 \\[4pt]
h(x, y, z) = 0
\end{cases}
$$
che in generale è una curva dello spazio, intersezione di due superfici. Se $\nabla g$ e $\nabla h$ sono **linearmente indipendenti** nel punto, allora esistono $\lambda, \mu \in \mathbb{R}$ tali che
$$
\nabla f(x_0, y_0, z_0) = \lambda\, \nabla g(x_0, y_0, z_0) + \mu\, \nabla h(x_0, y_0, z_0) .
$$
Il sistema risultante ha **cinque equazioni** nelle cinque incognite $x$, $y$, $z$, $\lambda$, $\mu$. Il caso tipico è l'intersezione di una sfera con un piano; quando uno dei vincoli è esplicitabile conviene sostituirlo e ridursi a un solo vincolo in due variabili.
:::

## Problemi geometrici di ottimizzazione

:::osservazione{#impostazione-problemi-geometrici titolo="Impostazione di un problema geometrico"}
Un problema geometrico di ottimizzazione chiede la figura che rende massima o minima una grandezza (area, volume, distanza, costo) sotto una condizione assegnata. L'impostazione segue *sempre* gli stessi passi.

- Si scelgono le variabili, cioè le misure che individuano la figura, con le limitazioni geometriche ($x > 0$ per una lunghezza).
- Si scrive la **funzione obiettivo** da ottimizzare e l'**equazione del vincolo** che lega le variabili.
- Si risolve per sostituzione, ricavando una variabile dal vincolo per ridursi a una funzione di una variabile, oppure con i moltiplicatori di Lagrange; con due variabili e un vincolo esplicitabile la sostituzione è di solito più rapida.
- Si giustifica che l'estremo trovato è davvero assoluto: con il teorema di Weierstrass se il dominio è compatto, altrimenti con lo studio della funzione obiettivo agli estremi del dominio (per esempio, un volume che tende a $0$ ai bordi rende massimo l'unico punto critico interno).

Per le distanze conviene ottimizzare il **quadrato della distanza**, che ha gli stessi punti di estremo della distanza ed evita la radice nei calcoli.
:::

:::esempio{titolo="Rettangolo di area massima"}
Tra i rettangoli di perimetro $20$ si cerca quello di area massima. Dette $x$ e $y$ le dimensioni, con $x, y > 0$, il vincolo è $2x + 2y = 20$, cioè $y = 10 - x$ con $x \in (0, 10)$, e l'obiettivo diventa
$$
A(x) = x\,(10 - x) = 10x - x^2 .
$$
Poiché $A'(x) = 10 - 2x$ si annulla solo in $x = 5$, con $A$ crescente prima e decrescente dopo, il **massimo assoluto** su $(0, 10)$ è $A(5) = 25$, raggiunto dal **quadrato** di lato $5$. Agli estremi del dominio l'area tende a $0$, in accordo con il fatto che il massimo è interno.

::grafico{f="x*(10-x)" xmin=0 xmax=10 ymin=0 ymax=30 punti="5,25" titolo="A(x) = x(10 − x): il massimo è nel vertice, per x = 5"}
:::
