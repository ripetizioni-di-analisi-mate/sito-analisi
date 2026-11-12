---
titolo: "Spazi di Banach e operatori lineari"
sommario: "Completezza, norme di operatori, duale, punto fisso, Baire, uniforme limitatezza, applicazione aperta, Hahn-Banach e compattezza."
---

## Spazi normati e completezza

:::definizione{#banach titolo="Spazio di Banach"}
Una norma su uno spazio vettoriale reale o complesso soddisfa non negatività, annullamento soltanto sul vettore nullo, omogeneità assoluta e disuguaglianza triangolare. Una successione $(x_n)$ è di Cauchy se per ogni $\varepsilon>0$ si ha $\|x_n-x_m\|<\varepsilon$ per $n,m$ sufficientemente grandi. Uno spazio normato in cui ogni successione di Cauchy converge è uno **spazio di Banach**.

Gli spazi $\mathbb R^d$, $L^p$ per $1\le p\le\infty$ e $C([a,b])$ con la norma del massimo sono Banach. Lo spazio dei polinomi con la norma del massimo su $[0,1]$ non è completo: le somme di Taylor dell'esponenziale sono di Cauchy e convergono uniformemente a una funzione che non è un polinomio.
:::

:::esempio{titolo="Due norme sul piano"}
Sul piano, la norma euclidea di $(x,y)$ è la sua distanza dall'origine, mentre la norma del massimo prende la maggiore fra le due distanze coordinate. La palla unitaria della prima è il disco. Per la seconda, le condizioni $|x|\le1$ e $|y|\le1$ descrivono il quadrato. Il vettore $(1,1)$ ha norma del massimo uno e norma euclidea $\sqrt{2}$. In generale
$$
\|(x,y)\|_\infty\le\|(x,y)\|_2\le\sqrt{2}\|(x,y)\|_\infty.
$$
Una successione di Cauchy in una delle due norme lo è anche nell'altra, perché ciascuna distanza è controllata da un multiplo fisso dell'altra. È il controllo con due costanti indipendenti dalla successione che consente di trasferire la completezza.

::grafico{curve="cos(t),sin(t),0,6.283185" linee="-1,-1 1,-1 1,1 -1,1 -1,-1" punti="1,1,pieno,P" uguale=1 xmin=-1.45 xmax=1.65 ymin=-1.45 ymax=1.55 titolo="Il disco euclideo è inscritto nel quadrato della norma del massimo"}
:::

:::esempio{titolo="Una successione di Cauchy fuori dallo spazio dei polinomi"}
Sia $p_n(x)=\sum_{k=0}^n \dfrac{x^k}{k!}$ su $[0,1]$. La coda fra due somme è dominata dalla corrispondente coda di $\sum_k\dfrac{1}{k!}$, poiché $x^k\le1$ su tutto l'intervallo. La stima vale simultaneamente in ogni punto, quindi le somme sono di Cauchy in norma uniforme. Nel più grande spazio $C([0,1])$ il loro limite è $e^x$. Se questo limite fosse un polinomio di grado $d$, la derivata di ordine $d+1$ sarebbe identicamente nulla all'interno dell'intervallo, mentre quella di $e^x$ è ancora $e^x$. L'esempio mostra perché, prima di applicare un teorema di esistenza, va controllato che il limite appartenga allo spazio scelto.

::grafico{f="exp(x);1+x;1+x+x^2/2" xmin=0 xmax=1.1 ymin=-0.06 ymax=3.1 legenda="e^x;1+x;1+x+\dfrac{x^2}{2}" titolo="Le prime approssimazioni polinomiali si avvicinano a $e^x$ su tutto l'intervallo $[0,1]$"}
:::

:::esempio{titolo="Troncamenti di una successione quadrato-sommabile"}
Sia $c_{00}$ lo spazio delle successioni che hanno soltanto un numero finito di coordinate non nulle, con la norma di $\ell^2$. Per ogni intero positivo $n$ si consideri il vettore $x^{(n)}$ che ha coordinata $2^{-k}$ per $1\le k\le n$ e zero per gli indici successivi. Se $m>n$, i due vettori coincidono fino alla coordinata $n$, quindi la distanza dipende soltanto dalla coda. In particolare
$$
\bigl\|x^{(m)}-x^{(n)}\bigr\|_2^2
=\sum_{k=n+1}^m 4^{-k}
\le\sum_{k=n+1}^{\infty}4^{-k}
=\frac{4^{-n}}3.
$$
La successione è di Cauchy. La norma di un vettore domina il modulo di ciascuna coordinata. Dunque, se esistesse un limite in $c_{00}$, la sua coordinata di indice $k$ sarebbe il limite della corrispondente coordinata dei troncamenti e varrebbe $2^{-k}$. Il vettore così determinato appartiene a $\ell^2$ perché i quadrati delle sue coordinate formano una serie geometrica convergente. Ha però infinite coordinate non nulle, quindi la successione di Cauchy non converge in $c_{00}$. La stessa stima della coda mostra che ogni vettore di $\ell^2$ è limite dei propri troncamenti, usando la convergenza della serie dei quadrati al posto della serie geometrica.
:::

## Operatori lineari continui

::::teorema{#operatori titolo="Limitatezza e norma di un operatore"}
Per un operatore lineare $T:X\to Y$, continuità in zero, continuità ovunque e esistenza di $C$ con $\|Tx\|_Y\le C\|x\|_X$ sono equivalenti. La norma è
$$
\|T\|=\sup_{\|x\|\le1}\|Tx\|.
$$
Gli operatori limitati formano $\mathcal L(X,Y)$, completo se $Y$ è Banach. Per operatori componibili vale $\|ST\|\le\|S\|\|T\|$.

Per $Tf(x)=\int_0^x f(t)\,dt$ su $C([0,1])$, si ha $|Tf(x)|\le x\|f\|_\infty$, quindi $\|T\|\le1$. La funzione $f=1$ realizza l'uguaglianza e dà $\|T\|=1$.

:::dimostrazione
La stima locale intorno a zero diventa globale mediante omogeneità. Se $T$ è continua in zero, esiste $\delta>0$ tale che $\|Tv\|_Y<1$ per $\|v\|_X<\delta$. Per ogni $x\ne0$, il vettore $v=\dfrac{\delta}{2\|x\|_X}x$ ha norma $\dfrac{\delta}{2}$. Si ricava quindi
$$
\begin{aligned}
\|Tx\|_Y
&=\frac{2\|x\|_X}{\delta}\|Tv\|_Y\\
&\le\frac{2}{\delta}\|x\|_X.
\end{aligned}
$$
La stima vale anche in zero per linearità. Viceversa, se vale una stima globale con costante $C$, allora $\|Tx-Ty\|_Y=\|T(x-y)\|_Y\le C\|x-y\|_X$. Ne segue la continuità in ogni punto e quindi in zero.

Ogni costante ammissibile è almeno il supremo sulla palla unitaria. Per $x\ne0$, applicando quel supremo a $\dfrac{x}{\|x\|_X}$ e usando l'omogeneità si ritrova la stima globale. Il supremo è perciò la minore costante ammissibile.
:::
::::

:::esempio{titolo="Stima superiore e funzione che la raggiunge"}
Per un moltiplicatore continuo $m$ su $[0,1]$, l'operatore $Tf=mf$ soddisfa $\|Tf\|_\infty\le\|m\|_\infty\|f\|_\infty$. Per trovare la norma serve anche una stima inferiore. Con $f=1$ si ottiene esattamente $Tf=m$, quindi $\|T\|=\|m\|_\infty$. Per $m(x)=x(1-x)$ si completa il quadrato:
$$
x(1-x)=\frac{1}{4}-\left(x-\frac{1}{2}\right)^2.
$$
Il massimo è $\dfrac{1}{4}$ e si raggiunge all'interno dell'intervallo. Provare soltanto i valori agli estremi darebbe zero e non rileverebbe l'amplificazione dell'operatore.

::grafico{f="x*(1-x)" punti="0.5,0.25,pieno,M" segmenti="0.5,0,0.5,0.25" xmin=0 xmax=1 ymin=-0.04 ymax=0.33 titolo="Per il moltiplicatore $x(1-x)$ la norma è l'ordinata del massimo"}
:::

:::osservazione
Per capire la completezza di $\mathcal L(X,Y)$, si prenda una successione di operatori $(T_n)$ di Cauchy nella norma di operatore. Per ogni $x$ fissato, la stima $\|(T_n-T_m)x\|\le\|T_n-T_m\|\|x\|$ rende $(T_nx)$ di Cauchy in $Y$. Si definisce quindi $Tx$ come limite. Il limite rispetta le combinazioni lineari perché le rispettano tutti i $T_n$. La stima valida per ogni $m$ sufficientemente grande passa al limite in $m$, con la stessa costante per ogni $x$ della palla unitaria. Per ogni $\varepsilon>0$ e ogni $n$ abbastanza grande si ha $\|(T-T_n)x\|\le\varepsilon\|x\|$. Per uno di questi indici, $\|Tx\|\le(\|T_n\|+\varepsilon)\|x\|$, quindi $T$ è limitato. La stessa stima dà $\|T-T_n\|\le\varepsilon$ e la convergenza in norma. La completezza richiesta in questo passaggio è quella del codominio $Y$.
:::

:::esempio{titolo="Norma di una matrice per la norma del massimo"}
Sul piano con la norma del massimo, si consideri $T(x,y)=(2x-y,x+y)$. Se le coordinate del dato hanno modulo al più uno, la prima coordinata dell'immagine ha modulo al più tre e la seconda ha modulo al più due. La norma di ogni immagine della palla unitaria è quindi al più tre. Per $(x,y)=(1,-1)$ la prima coordinata dell'immagine vale tre e la seconda vale zero. Poiché il vettore di partenza ha norma uno, si ottiene $\|T\|=3$.

Lo stesso calcolo dà la norma di una matrice reale quando dominio e codominio hanno entrambi la norma del massimo. Per ogni riga si sommano i valori assoluti dei coefficienti, perché ogni coordinata del dato può avere modulo uno. Il massimo fra le somme di riga è una maggiorazione valida per tutte le immagini. Nella riga che raggiunge il massimo si scelgono le coordinate del dato con i segni dei rispettivi coefficienti. Tutti i prodotti di quella riga diventano non negativi, quindi la coordinata corrispondente dell'immagine raggiunge esattamente la maggiorazione.
:::

## Funzionali e duale

:::definizione{#duale titolo="Spazio duale"}
Il **duale** $X^*$ è lo spazio dei funzionali lineari continui $\ell:X\to\mathbb K$, con norma $\|\ell\|=\sup_{\|x\|\le1}|\ell(x)|$. È sempre Banach. Il funzionale $\ell(f)=f(t_0)$ su $C([0,1])$ ha norma $1$. Su $L^p$, dove le funzioni coincidono come classi quasi ovunque, la valutazione puntuale non è in generale ben definita.

Per $\ell(f)=\int_0^1f(t)g(t)\,dt$ e $g\in L^q$, con esponenti coniugati, Hölder dà $|\ell(f)|\le\|f\|_p\|g\|_q$. Nel caso reale $1<p<\infty$, la funzione proporzionale a $\operatorname{sgn}(g)|g|^{q-1}$ realizza l'uguaglianza, quindi $\|\ell\|=\|g\|_q$.
:::

:::esempio{titolo="Valutazioni con coefficienti di segno opposto"}
Su $C([0,1])$ sia $\ell(f)=f(0)-f(1)$. La disuguaglianza triangolare dà $|\ell(f)|\le2\|f\|_\infty$. Una funzione costante ha valori uguali ai due estremi, quindi in questo caso dà zero. Si può raggiungere la stima scegliendo $f(x)=1-2x$, che resta fra $-1$ e $1$ e soddisfa $f(0)=1$, $f(1)=-1$. Pertanto $\|\ell\|=2$. Il segno davanti a una valutazione determina quale valore assegnare al punto corrispondente nella funzione di prova.

::grafico{linee="0,1 1,-1" punti="0,1,pieno;1,-1,pieno" segmenti="0,1,1,1;0,-1,1,-1" xmin=-0.12 xmax=1.2 ymin=-1.35 ymax=1.35 titolo="La funzione $1-2x$ resta nella palla unitaria e dà il massimo di $f(0)-f(1)$"}
:::

:::esempio{titolo="Norma di un funzionale integrale in due spazi"}
Si consideri $\ell(f)=\int_0^1 t f(t)\,dt$. Su $L^2([0,1])$ la disuguaglianza di Cauchy-Schwarz dà una maggiorazione che dipende dalla norma quadratica del peso $t$. Su $C([0,1])$ con la norma uniforme si può invece sostituire $|f(t)|$ con la norma del dato in tutto l'intervallo. Si ottengono così le stime
$$
|\ell(f)|\le \frac{\|f\|_2}{\sqrt{3}},
\qquad
|\ell(f)|\le \frac{\|f\|_\infty}{2},
$$
ciascuna nel proprio spazio. Per la prima si prende $f(t)=\sqrt{3}\,t$, che ha norma quadratica uno e per cui $\ell(f)=\dfrac{1}{\sqrt{3}}$. Per la seconda si prende $f=1$, che ha norma uniforme uno e dà $\ell(f)=\dfrac{1}{2}$. Quindi i due valori sono le norme esatte del funzionale nei rispettivi spazi. I vettori di prova sono diversi perché nel primo caso l'uguaglianza richiede che il dato sia proporzionale al peso, mentre nel secondo il dato unitario può assumere il suo massimo in tutti i punti in cui il peso è positivo.
:::

## Contrazioni e serie di Neumann

::::teorema{#punto-fisso titolo="Teorema del punto fisso di Banach"}
Sia $X$ uno spazio metrico completo non vuoto e $T:X\to X$ una contrazione, cioè $d(Tx,Ty)\le qd(x,y)$ con $0\le q<1$. Esiste un unico punto fisso $x_*$, e le iterate $x_{n+1}=Tx_n$ convergono a esso. Vale
$$
d(x_n,x_*)\le\frac{q^n}{1-q}d(x_1,x_0).
$$

:::dimostrazione
Si controllano gli incrementi delle iterate per applicare la completezza di $X$. Per ogni $k\ge0$ la contrazione dà $d(x_{k+1},x_k)\le q^k d(x_1,x_0)$. Per $m>n$ segue
$$
\begin{aligned}
d(x_m,x_n)
&\le\sum_{k=n}^{m-1} d(x_{k+1},x_k)\\
&\le d(x_1,x_0)\sum_{k=n}^{m-1}q^k\\
&\le\frac{q^n}{1-q}d(x_1,x_0).
\end{aligned}
$$
Poiché $0\le q<1$, il maggiorante tende a zero con $n$ e la successione è di Cauchy. Sia $x_*$ il suo limite in $X$. La contrazione è continua, quindi $x_{n+1}=Tx_n$ converge anche a $Tx_*$. Per unicità del limite, $Tx_*=x_*$. Se $y_*$ è un altro punto fisso, si ottiene $(1-q)d(x_*,y_*)\le0$. La distanza è dunque nulla e i due punti coincidono. Infine la stima enunciata segue facendo tendere $m$ all'infinito nella maggiorazione di $d(x_m,x_n)$.
:::
::::

::::teorema{#neumann titolo="Serie di Neumann"}
Se $A\in\mathcal L(X)$, $X$ è Banach e $\|A\|<1$, allora
$$
(I-A)^{-1}=\sum_{n=0}^{\infty}A^n,\qquad
\|(I-A)^{-1}\|\le\frac{1}{1-\|A\|}.
$$
La somma applicata a $b$ risolve $x=Ax+b$. Per esempio, se $A=\dfrac{1}{2} I$, la soluzione è $2b$.

:::dimostrazione
Si costruisce l'inverso come limite in norma delle somme parziali $S_N=\sum_{j=0}^{N}A^j$. La norma del prodotto dà $\|A^j\|\le\|A\|^j$ e, per $M>N$,
$$
\begin{aligned}
\|S_M-S_N\|&\le\sum_{j=N+1}^M\|A\|^j\\
&\le\frac{\|A\|^{N+1}}{1-\|A\|}.
\end{aligned}
$$
Il maggiorante tende a zero perché $\|A\|<1$, quindi le somme sono di Cauchy. Lo spazio $\mathcal L(X)$ è completo perché $X$ è Banach, perciò esiste il limite $S$. Le identità
$$
(I-A)S_N=S_N(I-A)=I-A^{N+1}
$$
seguono dalla cancellazione dei termini di grado da uno a $N$. Il prodotto con $I-A$ è continuo in norma e $\|A^{N+1}\|\le\|A\|^{N+1}\to0$. Al limite si ottiene $(I-A)S=S(I-A)=I$. Infine la stima $\|S_N\|\le\sum_{j=0}^{N}\|A\|^j$ passa al limite e dà la maggiorazione per la norma dell'inverso.
:::
::::

:::esempio{titolo="Iterazione, errore e invarianza dell'intervallo"}
Per $T(x)=1+\dfrac{x}{2}$ si può lavorare sull'intervallo chiuso $[0,3]$. Le immagini stanno fra $1$ e $\dfrac{5}{2}$, quindi ogni iterata rimane nello spazio su cui si applica il teorema. Il punto fisso soddisfa $x=1+\dfrac{x}{2}$ e vale $2$. Con $x_0=0$ le prime tre iterate sono $1$, $\dfrac{3}{2}$, $\dfrac{7}{4}$. Sottraendo $2$ dalla relazione ricorsiva si trova $x_{n+1}-2=\dfrac{1}{2}(x_n-2)$. In questo caso l'errore esatto è $2^{1-n}$. Se il punto fisso fosse sconosciuto, per un arresto pratico si userebbe $d(x_n,x_*)\le \dfrac{q}{1-q}d(x_n,x_{n-1})$: la prima distanza ancora da percorrere è al più $q$ volte l'ultimo incremento osservato.

::grafico{f="x;1+x/2" linee="0,0 0,1 1,1 1,1.5 1.5,1.5 1.5,1.75 1.75,1.75" punti="2,2,pieno,P" uguale=1 xmin=-0.2 xmax=2.6 ymin=-0.2 ymax=2.6 titolo="A ogni passo si legge $T(x_n)$ sulla retta e si torna alla diagonale per ottenere $x_{n+1}$"}
:::

:::esempio{titolo="Quanto pesa il resto della serie di Neumann"}
Per $A=\dfrac{1}{2} I$ le somme parziali $\sum_{j=0}^N A^j$ sono i multipli dell'identità con coefficienti $1$, $\dfrac{3}{2}$, $\dfrac{7}{4}$, $\dfrac{15}{8}$, e tendono a $2I$. In generale $\|A^j\|\le\|A\|^j$, quindi la coda dopo il termine di ordine $N$ è al più $\dfrac{\|A\|^{N+1}}{1-\|A\|}$. Questa è una stima dell'errore sull'inverso come operatore. Quando si applica l'inverso a $b$ per risolvere $x=Ax+b$, l'errore sulla soluzione è maggiorato dalla stessa coda moltiplicata per $\|b\|$. Il resto può essere più piccolo se certe potenze di $A$ si annullano.

::grafico{punti="0,1,pieno;1,1.5,pieno;2,1.75,pieno;3,1.875,pieno;4,1.9375,pieno" asintoti="y=2" nomi="N,s" xmin=-0.4 xmax=4.8 ymin=-0.06 ymax=2.25 titolo="Le somme parziali scalari per $A=\dfrac{1}{2}I$ convergono a $2$"}
:::

:::esempio{titolo="Potenze integrali e convergenza della serie"}
Su $C([0,1])$ con la norma uniforme, sia $Af(x)=\int_0^x f(t)\,dt$. La norma di $A$ vale uno. Per stimare le potenze, si indica con $A^n$ la composizione di $A$ con se stesso per $n$ volte. Si parte da $|Af(x)|\le x\|f\|_\infty$. Se la potenza di ordine $n$ soddisfa la prima disuguaglianza, quella di ordine successivo si stima integrando
$$
|A^n f(x)|\le\frac{x^n}{n!}\|f\|_\infty,
\qquad
|A^{n+1} f(x)|
\le\int_0^x\frac{t^n}{n!}\|f\|_\infty\,dt
=\frac{x^{n+1}}{(n+1)!}\|f\|_\infty.
$$
Con il dato costante uno si ha uguaglianza in ogni passo. In particolare, prendendo $x=1$ si ricava $\|A^n\|=\dfrac{1}{n!}$. La serie delle norme converge e lo spazio degli operatori è completo, quindi le somme parziali convergono in norma di operatori. Il prodotto di ciascuna somma parziale per $I-A$ è $I-A^{N+1}$. Al limite vale $I$, sia moltiplicando a destra sia a sinistra, dunque la somma è l'inverso. Applicandolo al dato costante uno si ottiene la soluzione $u(x)=\sum_{n=0}^\infty\dfrac{x^n}{n!}=e^x$ di $u=1+Au$. La stima delle singole potenze spiega la convergenza anche nel caso in cui la norma di $A$ sia uguale a uno.
:::

## Baire e uniforme limitatezza

::::teorema{#baire titolo="Baire e principio di uniforme limitatezza"}
In uno spazio metrico completo, un'unione numerabile di chiusi con interno vuoto ha interno vuoto. È il teorema di Baire.

Se $X$ è Banach, $Y$ normato e $(T_\alpha)\subset\mathcal L(X,Y)$ è puntualmente limitata, cioè $\sup_\alpha\|T_\alpha x\|<\infty$ per ogni $x$, allora $\sup_\alpha\|T_\alpha\|<\infty$. È il principio di **uniforme limitatezza**. Si applica Baire ai chiusi $E_n=\{x:\sup_\alpha\|T_\alpha x\|\le n\}$; uno contiene una palla, e per linearità si ottiene una stima sull'intera palla unitaria.

Una successione debolmente convergente $(x_n)$ è limitata in norma. Infatti le valutazioni $J(x_n)$, definite da $J(x_n)(\ell)=\ell(x_n)$ sul duale $X^*$, sono puntualmente limitate per convergenza debole. Il principio si applica al Banach $X^*$ e dà una stima uniforme di $\|J(x_n)\|$. Per Hahn–Banach questa norma coincide con $\|x_n\|$. La limitatezza puntuale degli operatori è una condizione su ogni vettore fissato, distinta dalla stima uniforme sulla palla unitaria.

:::dimostrazione
Per il teorema di Baire si costruisce, in un aperto non vuoto $U$, un punto fuori da tutti i chiusi $F_n$ di interno vuoto. Si sceglie una palla chiusa $B_1$ di raggio positivo al più $\dfrac{1}{2}$ contenuta in $U\setminus F_1$. Una volta scelta $B_n$, il suo interno contiene il centro ed è quindi non vuoto. Poiché $F_{n+1}$ ha interno vuoto, l'interno di $B_n$ contiene un aperto non vuoto disgiunto da $F_{n+1}$. Al suo interno si sceglie una palla chiusa $B_{n+1}$ di raggio al più $2^{-(n+1)}$. I centri sono di Cauchy perché tutti quelli di indice almeno $n$ appartengono a $B_n$, il cui diametro tende a zero. Per completezza essi convergono a un punto $x$, che appartiene a ogni $B_n$ per chiusura. Quindi $x\in U$ e $x\notin F_n$ per ogni $n$.

Per il principio di uniforme limitatezza si applica Baire ai chiusi $E_n$. Ciascun $E_n$ è chiuso perché è l'intersezione dei chiusi $\{x:\|T_\alpha x\|\le n\}$. La limitatezza puntuale implica $\bigcup_{n\ge1}E_n=X$, quindi almeno uno degli $E_n$ ha interno non vuoto. Sia $B(x_0,r)\subseteq E_n$. Se $\|h\|<r$, entrambi i punti $x_0$ e $x_0+h$ appartengono a $E_n$, dunque
$$
\begin{aligned}
\|T_\alpha h\|
&\le\|T_\alpha(x_0+h)\|+\|T_\alpha x_0\|\\
&\le2n .
\end{aligned}
$$
Per ogni $u$ di norma uno, $h=\dfrac{r}{2}u$ soddisfa $\|h\|<r$. Per linearità $\|T_\alpha u\|\le\dfrac{4n}{r}$, con una costante che vale per ogni indice $\alpha$ e per ogni vettore unitario. Pertanto $\sup_\alpha\|T_\alpha\|\le\dfrac{4n}{r}$.

::grafico{uguale=1 curve="1.7*cos(t),1.7*sin(t),0,6.283185;0.55+0.95*cos(t),0.95*sin(t),0,6.283185;0.82+0.45*cos(t),0.45*sin(t),0,6.283185" punti="0,0,pieno;0.55,0,pieno;0.82,0,pieno" xmin=-2 xmax=2 ymin=-1.95 ymax=1.95 titolo="Tre palle chiuse annidate. I centri successivi appartengono a tutte le palle scelte prima"}
:::
::::

:::osservazione
Sia $(T_n)$ una successione di operatori lineari continui da un Banach $X$ a uno spazio normato $Y$. Se $T_nx$ converge in $Y$ per ogni $x\in X$, allora per ciascun dato le immagini formano una successione limitata. Il principio di uniforme limitatezza dà quindi una costante comune $M$ con $\|T_nx\|\le M\|x\|$ per ogni $n$. Passando al limite si ottiene $\|Tx\|\le M\|x\|$, dove $Tx$ è il limite delle immagini. La linearità passa al limite nelle somme e nei prodotti per scalari. Perciò l'operatore limite è lineare e continuo.
:::

:::attenzione
La convergenza di $T_nx$ per ogni $x$ può valere anche quando la distanza in norma tra operatori resta costante. Su $\ell^2$, sia $P_n$ il troncamento alle prime $n$ coordinate. Per ogni $x$ fissato si ha
$$
\|x-P_nx\|_2^2=\sum_{k=n+1}^{\infty}|x_k|^2\longrightarrow0,
$$
perché la serie dei quadrati converge. Invece il vettore unitario $e_{n+1}$, che ha la sola coordinata $n+1$ uguale a uno, viene mandato a zero da $P_n$. La sua immagine per $I-P_n$ ha ancora norma uno. Poiché il troncamento della coda non aumenta la norma, si conclude che $\|I-P_n\|=1$ per ogni $n$. Il dato che realizza questo errore cambia con $n$, mentre nella convergenza puntuale si considera sempre lo stesso dato.
:::

## Applicazione aperta, grafico chiuso e Hahn-Banach

:::teorema{#teoremi-banach titolo="Applicazione aperta e grafico chiuso"}
Un operatore lineare continuo e suriettivo tra Banach è aperto. Quindi, se è anche iniettivo, l'inverso è continuo. Un operatore lineare $T:X\to Y$, definito su tutto un Banach $X$ e a valori in un Banach $Y$, è continuo se e solo se il grafico è chiuso in $X\times Y$. Entrambi i risultati si deducono da Baire.

La completezza e il dominio dell'operatore sono ipotesi necessarie da verificare. La derivazione $D:C^1([0,1])\to C([0,1])$ è limitata per la norma $\|f\|_\infty+\|f'\|_\infty$, ma è illimitata se sul dominio si usa soltanto $\|f\|_\infty$: per $f_n(x)=\sin(nx)$ si ha $\|f_n\|_\infty\le1$ e $\|f_n'\|_\infty=n$.
:::

:::teorema{#hahn-banach titolo="Estensione di Hahn-Banach"}
Se $M$ è un sottospazio di uno spazio normato $X$ e $\ell:M\to\mathbb K$ è lineare e continuo, esiste un'estensione continua $\widetilde\ell:X\to\mathbb K$ con la stessa norma. In particolare, per ogni $x\ne0$ esiste $\ell\in X^*$ con $\|\ell\|=1$ e $\ell(x)=\|x\|$.

Si parte dal sottospazio generato da $x$, dove si pone $\ell(\alpha x)=\alpha\|x\|$, e si applica il teorema. I funzionali continui separano quindi i punti dello spazio.
:::

:::attenzione
Si consideri la stessa famiglia $C^1([0,1])$ con due norme. Lo spazio con $\|f\|_\infty+\|f'\|_\infty$ è completo: una successione di Cauchy dà due limiti uniformi $f$ e $g$, rispettivamente delle funzioni e delle derivate. L'identità $f_n(x)-f_n(0)=\int_0^x f_n'(t)\,dt$ passa al limite, quindi $f'=g$. Con la sola norma uniforme lo spazio è incompleto, come si vede approssimando $|x-\dfrac{1}{2}|$ con $\sqrt{(x-\dfrac{1}{2})^2+n^{-2}}$. L'identità dal primo spazio al secondo è continua e biiettiva, ma il suo inverso è illimitato: $\sin(nx)$ ha norma uniforme al più uno e norma nel primo spazio pari ad almeno $n$. Il teorema dell'inverso continuo richiede che anche il codominio sia completo.
:::

:::esempio{titolo="La proiezione di una palla aperta"}
La proiezione $P(x,y)=x$ è continua e suriettiva da $\mathbb R^2$ a $\mathbb R$. L'immagine della palla euclidea aperta unitaria è $(-1,1)$. Infatti, se $x^2+y^2<1$ allora $|x|<1$, e per ogni $|x|<1$ il punto $(x,0)$ dà una preimmagine nella palla. Più in generale, il teorema dell'applicazione aperta assicura che l'immagine della palla unitaria contenga un intorno di zero. Quando l'operatore è anche iniettivo, questa inclusione equivale a una stima della preimmagine in funzione del dato, quindi alla continuità dell'inverso. Per il grafico chiuso si lavora invece nello spazio prodotto: se $x_n\to x$ e $Tx_n\to y$, la condizione da verificare è $y=Tx$.

::grafico{curve="cos(t),sin(t),0,6.283185" linee="-1,0 1,0" punti="-1,0,vuoto;1,0,vuoto;0.55,0,pieno" segmenti="0.55,0,0.55,0.75" uguale=1 xmin=-1.45 xmax=1.55 ymin=-1.25 ymax=1.25 titolo="La proiezione orizzontale del disco aperto è l'intervallo aperto $(-1,1)$"}
:::

:::esempio{titolo="Un funzionale di norma uno sulla diagonale"}
In $\mathbb R^2$ con norma euclidea sia $u=\dfrac{(1,1)}{\sqrt2}$ e sia $M$ la retta generata da $u$. Su $M$ si pone $\ell(tu)=t$, che ha norma uno. Un'estensione è $\widetilde\ell(x,y)=\dfrac{x+y}{\sqrt2}$: Cauchy-Schwarz dà $|\widetilde\ell(v)|\le\|v\|_2$ e l'uguaglianza vale in $v=u$. La retta di livello $\widetilde\ell(v)=1$ tocca la palla unitaria proprio in $u$. Il calcolo usa il prodotto scalare disponibile sul piano. Il teorema di Hahn-Banach garantisce l'estensione a norma invariata anche quando la norma non proviene da un prodotto scalare.

::grafico{curve="cos(t),sin(t),0,6.283185" f="x;sqrt(2)-x" vettori="0,0,0.707107,0.707107,u" uguale=1 xmin=-1.25 xmax=1.8 ymin=-1.25 ymax=1.8 titolo="La retta di livello $x+y=\sqrt2$ è tangente al cerchio unitario nel vettore $u$"}
:::

:::osservazione
Per dedurre il criterio del grafico chiuso dall'applicazione aperta, si considera il grafico $G=\{(x,Tx):x\in X\}$ con la norma del prodotto $\|(x,y)\|=\|x\|_X+\|y\|_Y$. Il prodotto è completo perché una successione di Cauchy lo è in entrambe le coordinate. Se $G$ è chiuso, anche $G$ è completo. La proiezione $P:G\to X$ data da $P(x,Tx)=x$ è continua, dato che la norma della prima coordinata è al più quella della coppia. È biiettiva perché a ogni $x$ corrisponde esattamente un punto del grafico. Il teorema dell'applicazione aperta dà allora la continuità di $P^{-1}$. La stima dell'inverso controlla $\|x\|_X+\|Tx\|_Y$ con un multiplo di $\|x\|_X$, quindi $T$ è continuo. Per l'implicazione inversa, se le coppie $(x_n,Tx_n)$ convergono a $(x,y)$ e $T$ è continuo, allora $Tx_n$ converge anche a $Tx$. L'unicità del limite dà $y=Tx$ e la coppia appartiene al grafico.
:::

:::esempio{titolo="Estensioni diverse con la stessa norma"}
Su $\mathbb R^2$ con la norma $\|(x,y)\|_1=|x|+|y|$, si prenda il funzionale $\ell(x,0)=x$ sull'asse orizzontale. Ogni estensione lineare è della forma $\widetilde\ell_a(x,y)=x+ay$, dove $a$ è il valore assegnato al vettore $(0,1)$. Si ha
$$
|x+ay|\le\max(1,|a|)(|x|+|y|).
$$
Il vettore $(1,0)$ dà un valore assoluto pari a uno e il vettore $(0,1)$ un valore assoluto pari a $|a|$. Entrambi sono unitari, quindi la norma dell'estensione è esattamente $\max(1,|a|)$. La norma originaria vale uno e viene conservata per ogni $a\in[-1,1]$. In questo esempio il vincolo sulla norma lascia quindi libero il valore che l'estensione assume sul secondo vettore canonico.
:::

## Operatori compatti e Ascoli-Arzelà

:::definizione{#compatti titolo="Compattezza e criterio di Ascoli-Arzelà"}
Un operatore lineare è **compatto** se manda insiemi limitati in insiemi relativamente compatti. Equivalentemente, dalle immagini di ogni successione limitata si può estrarre una sottosuccessione convergente. Gli operatori limitati di rango finito sono compatti. L'identità su un Banach di dimensione infinita non è compatta.

Per $K$ metrico compatto, una famiglia in $C(K)$ è relativamente compatta per la norma uniforme se e solo se è equicontinua e puntualmente limitata: è **Ascoli-Arzelà**. L'operatore $Tf(x)=\int_0^x f(t)\,dt$ manda la palla unitaria in funzioni uniformemente limitate e con costante di Lipschitz al più $1$, quindi è compatto. Su $\ell^2$, un operatore diagonale $(x_n)\mapsto(a_nx_n)$ è compatto se e solo se $a_n\to0$, perché si approssima in norma mediante i troncamenti di rango finito.
:::


:::esempio{titolo="Uniforme limitatezza ed equicontinuità sono due controlli distinti"}
La famiglia $f_n(x)=x^n$ su $[0,1]$ è uniformemente limitata da uno. Se fosse relativamente compatta, avrebbe una sottosuccessione convergente uniformemente. Ogni sottosuccessione ha lo stesso limite puntuale, zero per $x<1$ e uno in $x=1$. Quel limite è discontinuo, mentre un limite uniforme di funzioni continue è continuo. La famiglia quindi non è relativamente compatta. Si può anche individuare il punto in cui fallisce l'equicontinuità. Per $x_n=2^{-\dfrac{1}{n}}$, $x_n\to1$ ma $|f_n(1)-f_n(x_n)|=\dfrac{1}{2}$ per ogni $n$.

::grafico{f="x;x^4;x^12" xmin=0 xmax=1 ymin=-0.12 ymax=1.14 titolo="Le funzioni $x$, $x^4$ e $x^{12}$ restano limitate da uno, ma la transizione vicino a $1$ diventa sempre più ripida"}
:::

::::teorema{#diagonali-compatti titolo="Criterio per gli operatori diagonali"}
Sia $(a_n)$ una successione scalare limitata e sia $D:\ell^2\to\ell^2$ definito da $(Dx)_n=a_nx_n$. L'operatore $D$ è compatto se e solo se $a_n\to0$. Per esempio, il coefficiente $a_n=\dfrac{1}{n}$ dà un operatore compatto di norma uno.

:::dimostrazione
Per la sufficienza si approssima $D$ con i troncamenti $D_N$, che conservano le prime $N$ coordinate di $Dx$. Ciascun $D_N$ è limitato e di rango finito, quindi è compatto. Per ogni $x\in\ell^2$ si ha
$$
\|(D-D_N)x\|_2^2
=\sum_{n>N}|a_n|^2|x_n|^2
\le\left(\sup_{n>N}|a_n|\right)^2\|x\|_2^2.
$$
Per $n>N$ si ha anche $\|(D-D_N)e_n\|_2=|a_n|$. Poiché i vettori $e_n$ sono unitari, le due stime danno $\|D-D_N\|=\sup_{n>N}|a_n|$. Se $a_n\to0$, il resto tende a zero in norma. L'immagine della palla unitaria sotto $D$ è totalmente limitata, perché per ogni raggio si può usare una copertura finita dell'immagine sotto un $D_N$ sufficientemente vicino. Il codominio $\ell^2$ è completo, dunque la chiusura di quell'immagine è compatta.

Per la necessità, se i coefficienti non tendono a zero, esistono $\varepsilon>0$ e indici distinti $n_k$ tali che $|a_{n_k}|\ge\varepsilon$. Le immagini di due vettori canonici distinti hanno coordinate non nulle in posizioni diverse, quindi
$$
\|De_{n_k}-De_{n_j}\|_2
=\sqrt{|a_{n_k}|^2+|a_{n_j}|^2}
\ge\sqrt2\,\varepsilon\qquad(k\ne j).
$$
Le immagini non hanno sottosuccessioni di Cauchy, anche se i vettori di partenza sono unitari. Questo esclude la compattezza.
:::
::::

:::esempio{titolo="Approssimazione di un operatore integrale con rango finito"}
Si consideri ancora $Tf(x)=\int_0^x f(t)\,dt$ su $C([0,1])$. Per un intero $N\ge1$ si scelgano i nodi $t_j=\dfrac{j}{N}$, con $0\le j\le N$, e si definisca $T_N f$ come la funzione lineare a tratti che assume nei nodi gli stessi valori di $Tf$. L'operatore è lineare perché i valori nodali dipendono linearmente da $f$. Le immagini appartengono allo spazio delle spezzate con quei nodi, che ha dimensione finita. Inoltre, su ciascun intervallo fra nodi il valore interpolato è una combinazione convessa dei due valori estremi, quindi $\|T_N f\|_\infty\le\|Tf\|_\infty$.

Per $g=Tf$ si ha $|g(x)-g(y)|\le\|f\|_\infty|x-y|$. Se $x=t_j+\dfrac{\theta}{N}$, con $0\le\theta\le1$, allora
$$
\begin{aligned}
|Tf(x)-T_N f(x)|
&\le (1-\theta)|g(x)-g(t_j)|+\theta|g(x)-g(t_{j+1})|\\[6pt]
&\le\frac{2\theta(1-\theta)}{N}\|f\|_\infty
\le\frac{\|f\|_\infty}{2N}.
\end{aligned}
$$
La stima è uniforme sia nel punto sia nel dato unitario. Ne segue che $T_N$ converge a $T$ in norma di operatori. Ogni $T_N$ è compatto perché è limitato e di rango finito. Il limite in norma è compatto perché si può coprire l'immagine della palla con un numero finito di palle di raggio arbitrariamente piccolo, usando la copertura per un'approssimazione sufficientemente vicina. La completezza del codominio trasforma questa proprietà in compattezza della chiusura.
:::
