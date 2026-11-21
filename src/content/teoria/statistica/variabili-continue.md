---
titolo: "Variabili aleatorie e distribuzioni continue"
sommario: "Come calcolare probabilità, quantili e momenti a partire da una densità e come usare le principali distribuzioni continue."
---

Nel capitolo 5 le variabili aleatorie assumevano valori isolati, come il numero di pezzi difettosi in un lotto, e a ogni valore corrispondeva una probabilità. Molte grandezze, come il tempo di attesa a uno sportello o il peso di una confezione, assumono invece tutti i valori di un intervallo. Per esse un singolo valore esatto ha probabilità zero, e la probabilità di un intervallo si calcola come area sotto il grafico di una funzione detta densità. Se per esempio la durata di una lampadina ha media $4$ ore e segue la legge esponenziale di questo capitolo, la probabilità che duri più di $8$ ore è $e^{-2}\approx0{,}135$.

Dalla densità si ricavano, con integrali al posto delle somme del capitolo 5, la ripartizione, i quantili (per esempio la soglia entro cui si conclude il $90\%$ delle attese), il valore atteso e la varianza. Seguono le leggi continue usate nel resto del corso: uniforme, esponenziale, normale, gamma, chi quadrato, t di Student e F di Fisher.

Il capitolo appartiene alla parte del corso sulla probabilità (capitoli dal 3 al 7), che serve a misurare l'errore commesso passando dal campione all'intera popolazione. Il capitolo 7 estende la densità a più variabili. Nel capitolo 8 la normale è la legge approssimata della media di un campione numeroso, e nei capitoli 10 e 11 i quantili di queste leggi danno gli estremi degli intervalli di confidenza e le soglie dei test.

## Densità e probabilità di intervalli

:::definizione{#densita titolo="Densità di una variabile aleatoria"}
Come nel capitolo 5, una variabile aleatoria $X$ assegna un numero a ogni esito di un esperimento; qui il numero è una misura che cade in un punto qualsiasi di un intervallo, come la durata di una prova. La **legge** di $X$, detta anche distribuzione di $X$, è la regola che dà, per ogni intervallo di numeri, la probabilità che $X$ vi cada.

Un autobus passa ogni $10$ minuti e uno studente arriva alla fermata in un istante a caso. L'attesa $X$, in minuti, è compresa fra $0$ e $10$, e intervalli di attesa della stessa lunghezza hanno la stessa probabilità. Perciò $P(2<X\le5)=\dfrac{3}{10}$, perché l'intervallo da $2$ a $5$ copre $3$ dei $10$ minuti. Lo stesso numero è l'area $3\cdot\dfrac1{10}$ del rettangolo con base da $2$ a $5$ e altezza $\dfrac1{10}$. Ogni probabilità relativa all'attesa è quindi un'area sotto la funzione che vale $\dfrac1{10}$ fra $0$ e $10$ e zero altrove; l'area totale vale $1$. Dove i valori sono più probabili, la funzione è più alta.

Una **densità** è una funzione integrabile $f_X$ tale che $f_X(x)\ge 0$ per ogni $x$, $\displaystyle\int_{-\infty}^{+\infty}f_X(x)\,dx=1$ e
$$
P(a<X\le b)=\int_a^b f_X(x)\,dx
\qquad\text{per ogni }a<b.
$$
Se $X$ ammette una densità, si dice che la sua legge è **assolutamente continua**. La densità è non negativa perché le probabilità non sono negative, e ha area totale $1$ perché questa è la probabilità che $X$ assuma un valore qualsiasi.

L'insieme dei punti in cui la densità è positiva si chiama supporto di $X$, come nel caso discreto del capitolo 5; per l'autobus è $(0,10)$. Se $X$ è misurata in secondi, $f_X(x)$ si esprime in $\mathrm{s}^{-1}$, perché altezza per base deve dare un numero puro. Cambiare la densità in un numero finito di punti lascia invariate tutte le aree, perché un punto ha larghezza zero; per questo il valore agli estremi dei tratti, come in $x=0$ e $x=10$, si sceglie per comodità.
:::

:::esempio{titolo="Calcolo della costante di normalizzazione"}
Sia $f_X(x)=cx$ per $0<x<2$ e sia $f_X(x)=0$ altrove. La costante $c$ va scelta in modo che l'area totale sia $1$; per questo si chiama costante di normalizzazione. Si ottiene
$$
1=\int_0^2 cx\,dx
  =\left[\frac{cx^2}{2}\right]_0^2=2c.
$$
Ne segue $c=\dfrac12$, e con questo valore la funzione è non negativa su tutto il supporto. Per trovare $P(1<X<2)$ si integra soltanto tra $1$ e $2$. L'area tra $0$ e $1$ è quella del triangolo di base $1$ e altezza $f_X(1)=\dfrac12$, quindi vale $\dfrac{1\cdot\frac12}{2}=\dfrac14$. Le due aree sommano a $1$, perciò l'area tra $1$ e $2$ vale $1-\dfrac14=\dfrac34$.

::grafico{curve="t,t/2,0,2" legenda="f_X(x)=\dfrac{x}{2}" segmenti="2,0,2,1" area="x/2;0;1;2" xmin=-0.4 xmax=2.6 ymin=-0.12 ymax=1.22 nomi="x,y" titolo="L'area colorata è la probabilità che X sia compresa tra 1 e 2"}

:::

::::teorema{#probabilita-puntuale titolo="Probabilità in un punto"}
Per l'autobus, un'attesa fra $3$ e $3+h$ minuti ha probabilità $\dfrac{h}{10}$. Un'attesa di esattamente $3$ minuti ha probabilità al più $\dfrac h{10}$ per ogni $h>0$, quindi vale zero.

Se $X$ ammette densità, allora $P(X=x_0)=0$ per ogni $x_0\in\mathbb R$. Perciò tutte le scelte di inclusione dei due estremi di un intervallo danno la stessa probabilità:
$$
P(a<X<b)=P(a\le X<b)=P(a<X\le b)=P(a\le X\le b).
$$
Per le variabili discrete del capitolo 5, invece, l'inclusione degli estremi cambia il risultato.
:::dimostrazione
L'evento $\{X=x_0\}$ è contenuto in $\{x_0-h<X\le x_0\}$ per ogni $h>0$, quindi $P(X=x_0)$ non supera l'integrale di $f_X$ su $(x_0-h,x_0]$. Poiché $f_X$ è integrabile, l'integrale su $(x_0-h,x_0]$ tende a zero per $h\to0^+$. La probabilità del singolo punto è compresa tra zero e una quantità che tende a zero, quindi vale zero.
:::
::::

:::attenzione{titolo="L'altezza della densità può superare uno"}
Il valore $f_X(x)$ è un'altezza, mentre le probabilità sono aree. La densità costante su $(0,\dfrac14)$ ha altezza $4$, perché la sua area deve valere $4\cdot\dfrac14=1$. Perciò la condizione di normalizzazione riguarda l'integrale della densità e lascia libera la sua altezza.

Una probabilità positiva su un singolo valore, invece, non si ottiene da nessuna densità, per il teorema sulla probabilità in un punto. Se un tempo di attesa vale zero con probabilità $\dfrac14$, perché un cliente su quattro trova lo sportello libero, la sua legge non ha densità.
:::

## Ripartizione, quantili e momenti

:::definizione{#ripartizione titolo="Funzione di ripartizione"}
Come nel capitolo 5, la **funzione di ripartizione** $F_X$ dà, per ogni soglia $x$, la probabilità che $X$ non superi $x$. Per l'attesa dell'autobus, per esempio, $F_X(4)=P(X\le4)=\dfrac4{10}$, che è l'area del rettangolo fra $0$ e $4$. Per una variabile con densità la ripartizione è l'area accumulata a sinistra della soglia:
$$
F_X(x)=P(X\le x)=\int_{-\infty}^x f_X(t)\,dt.
$$
La funzione ha tre proprietà.

- $F_X$ è non decrescente, perché quando $x$ aumenta l'intervallo d'integrazione si allarga e l'integrando è non negativo.
- $F_X$ è continua, perché l'area su intervalli di lunghezza tendente a zero tende a zero.
- Per $x\to-\infty$ la ripartizione tende a $0$, perché l'area accumulata a sinistra di $x$ si riduce a zero. Per $x\to+\infty$ tende a $1$, perché si accumula tutta l'area della densità.

Nota $F_X$, la probabilità di un intervallo si ottiene da due suoi valori, senza calcolare integrali:
$$
P(a<X\le b)=F_X(b)-F_X(a),
$$
perché il secondo termine sottrae l'area accumulata fino ad $a$.
:::

:::esempio{titolo="Ripartizione su tre intervalli"}
Sia $f_X(x)=2x$ per $0<x<1$ e sia zero altrove. Se $0<x<1$, l'area accumulata è $\displaystyle\int_0^x 2t\,dt=x^2$. A sinistra del supporto l'area è zero, mentre a destra è già tutta accumulata. La ripartizione vale dunque $0$ per $x\le 0$, $x^2$ per $0<x<1$ e $1$ per $x\ge1$. Il calcolo $F_X(1)-F_X(\dfrac12)=1-\dfrac14=\dfrac34$ dà la probabilità che $X$ cada fra la metà dell'intervallo e il bordo destro.
:::

:::osservazione{titolo="Dalla ripartizione alla densità"}
Dalla ripartizione si leggono direttamente probabilità e soglie; per il valore atteso e la varianza della sezione successiva serve invece la densità, che si ricava dalla ripartizione. In un punto in cui $f_X$ è continua, il teorema fondamentale del calcolo integrale dà $F_X'(x)=f_X(x)$. Per esempio, la ripartizione $x^2$ su $(0,1)$ ha derivata $2x$, che è la densità da cui si era partiti. Se la ripartizione è continua e derivabile a tratti, con un numero finito di tratti, la densità si ottiene derivando tratto per tratto. Un tratto orizzontale della ripartizione, come $F_X(x)=0$ per $x\le0$, ha derivata zero e corrisponde a un intervallo di probabilità nulla.

Se la ripartizione ha un salto in un punto $x_0$, l'ampiezza del salto è la probabilità del punto, come per le variabili discrete:
$$
P(X=x_0)=F_X(x_0)-F_X(x_0^-),
$$
dove $F_X(x_0^-)$ è il limite da sinistra del capitolo 5. Poiché con una densità ogni punto ha probabilità zero, una variabile con un salto nella ripartizione non ammette densità. Per l'attesa che vale zero con probabilità $\dfrac14$ la ripartizione salta da $0$ a $\dfrac14$ in $0$, e derivando i tratti senza salti si ottiene una funzione con area $\dfrac34$.
:::

:::definizione{#quantili-continui titolo="Quantile di coda inferiore"}
Per sapere entro quanti minuti arriva l'autobus nel $90\%$ dei casi, si cerca la soglia $x$ con $F_X(x)=\dfrac{x}{10}=0{,}90$, cioè $x=9$ minuti.

La probabilità a sinistra di una soglia, $P(X\le x)=F_X(x)$, si chiama **coda inferiore**; la probabilità a destra, $P(X>x)=1-F_X(x)$, si chiama coda superiore. Sia $p\in(0,1)$. Il **quantile di ordine** $p$ è la più piccola soglia alla quale la coda inferiore raggiunge almeno $p$:
$$
q_p=\inf\{x\in\mathbb R:F_X(x)\ge p\}.
$$
Il simbolo $\inf$ indica l'estremo inferiore dell'insieme. Se la ripartizione è continua e strettamente crescente intorno alla soglia, il quantile è l'unica soluzione di $F_X(x)=p$, come per l'autobus.

La **mediana** è il quantile $q_{\frac12}$, che divide la probabilità in due metà; per l'autobus vale $5$ minuti. Una soglia con probabilità $0{,}10$ a destra ha coda inferiore $1-0{,}10=0{,}90$, perché le due code sommano a uno, quindi è il quantile $q_{0{,}90}$.
:::

:::esempio{titolo="Lettura del quantile dalla ripartizione"}
Per la ripartizione che vale $x^2$ tra $0$ e $1$, il quantile di ordine $\dfrac14$ soddisfa $q_{\frac14}^2=\dfrac14$. La radice $\dfrac12$ appartiene all'intervallo, quindi è la soglia cercata. La radice negativa è fuori dal tratto su cui la ripartizione vale $x^2$.

::grafico{curve="t,0,-0.35,0;t,t*t,0,1;t,1,1,1.4" punti="0.5,0.25,pieno" segmenti="0,0.25,0.5,0.25;0.5,0,0.5,0.25" etichette="0.46,-0.10,0,5;-0.25,0.25,0,25" xmin=-0.35 xmax=1.42 ymin=-0.16 ymax=1.18 nomi="x,F_X" legenda=0 titolo="Il livello $p=\dfrac14$ della ripartizione si raggiunge alla soglia $x=\dfrac12$"}

L'estremo inferiore serve quando la ripartizione resta costante al livello $p$ su un intero intervallo. Se la densità vale $\dfrac12$ su $(0,1)$ e su $(3,4)$ e zero altrove, la ripartizione vale $\dfrac12$ per ogni $x$ fra $1$ e $3$, quindi tutte queste soglie risolvono $F_X(x)=\dfrac12$. La definizione sceglie la più piccola, perciò $q_{\frac12}=1$.
:::

## Valore atteso e varianza

:::definizione{#momenti-continui titolo="Momenti di una legge con densità"}
Nel capitolo 5 il valore atteso di una variabile discreta era la somma dei valori pesati con le loro probabilità, $E[X]=\sum x\,p_X(x)$. Con una densità, l'intervallo da $x$ a $x+dx$ ha probabilità circa $f_X(x)\,dx$, quindi la somma diventa un integrale. Se $\int_{\mathbb R}|x|f_X(x)\,dx$ è finito, il **valore atteso** è
$$
E[X]=\int_{\mathbb R}x f_X(x)\,dx.
$$
Se anche $\int_{\mathbb R}x^2f_X(x)\,dx$ è finito, si definiscono
$$
\begin{aligned}
E[X^2]&=\int_{\mathbb R}x^2 f_X(x)\,dx,\\[6pt]
\operatorname{Var}(X)&=E[X^2]-E[X]^2.
\end{aligned}
$$
La prima formula integra il quadrato dei valori pesato con la densità. Gli integrali di $x^k f_X(x)$ si chiamano **momenti** della legge: $E[X]$ è il momento primo ed $E[X^2]$ il momento secondo.

La **varianza** è il valore atteso del quadrato dello scarto dalla media, $\operatorname{Var}(X)=E[(X-E[X])^2]$. La formula di calcolo segue sviluppando il quadrato e usando la linearità del valore atteso, $E[aU+bW]=aE[U]+bE[W]$. La deviazione standard è la radice quadrata della varianza. Il valore atteso dà il centro della legge, come l'attesa media a uno sportello, e la deviazione standard la distanza tipica dei valori da quel centro. Se $X$ è misurata in metri, $E[X]$ e la deviazione standard hanno unità $\mathrm m$, mentre la varianza ha unità $\mathrm{m}^2$.
:::

:::esempio{titolo="Momenti di una densità crescente"}
Per $f_X(x)=2x$ su $(0,1)$ si ha
$$
E[X]=\int_0^1 x\cdot2x\,dx=\left[\frac{2x^3}{3}\right]_0^1=\frac23,
\qquad
E[X^2]=\int_0^1 x^2\cdot2x\,dx=\left[\frac{x^4}{2}\right]_0^1=\frac12.
$$
Quindi la varianza vale $\dfrac12-\dfrac49=\dfrac1{18}$. La media è maggiore del punto medio $\dfrac12$ dell'intervallo, perché gli intervalli a destra hanno densità maggiore dei corrispondenti intervalli a sinistra.
:::

:::osservazione{titolo="Effetto di una trasformazione affine"}
Se $Y=aX+b$ e $E[X^2]$ è finito, la linearità del valore atteso dà $E[Y]=aE[X]+b$. Sottraendo le medie si ha $Y-E[Y]=a(X-E[X])$, quindi $\operatorname{Var}(Y)=a^2\operatorname{Var}(X)$. Per la deviazione standard il fattore è $|a|$, la radice di $a^2$.

Una conversione da secondi a minuti divide per $60$ i valori e la deviazione standard, mentre divide la varianza per $60^2=3600$; una deviazione standard di $30\,\mathrm s$ diventa $0{,}5\,\mathrm{min}$, e la varianza passa da $900\,\mathrm{s}^2$ a $0{,}25\,\mathrm{min}^2$.
:::

## Distribuzione uniforme

:::definizione{#uniforme titolo="Uniforme su un intervallo"}
L'attesa dell'autobus ha densità costante su $(0,10)$, e una legge di questo tipo si chiama uniforme. Per $a<b$, la notazione $X\sim U(a,b)$, che si legge «$X$ ha legge **uniforme** su $(a,b)$», indica che $X$ ha densità costante $\dfrac1{b-a}$ su $(a,b)$ e zero fuori. L'altezza è il reciproco della lunghezza $b-a$, quindi il rettangolo della densità ha area unitaria.

Per trovare una probabilità si calcola la lunghezza della parte dell'intervallo richiesto che sta dentro $(a,b)$ e la si divide per $b-a$, come per l'autobus, che ha legge $U(0,10)$.
:::

:::esempio{titolo="Intervallo che supera il supporto"}
Una consegna arriva tra le ore $8$ e le ore $12$ con orario uniforme in quell'intervallo, cioè con legge $U(8,12)$. L'evento «dopo le $10$ e prima delle $13$» ha la stessa probabilità dell'arrivo tra le $10$ e le $12$, perché dopo le $12$ la densità vale zero. La parte utile dell'intervallo dura due ore, quindi la probabilità vale $\dfrac24=\dfrac12$. La legge uniforme assegna infatti la stessa probabilità a intervalli della stessa lunghezza contenuti nel supporto.

::grafico{linee="0,0 8,0;8,0.25 12,0.25;12,0 14.4,0" area="0.25;0;10;12" segmenti="8,0,8,0.25;12,0,12,0.25;13,0,13,0.12;0,0.25,8,0.25" etichette="13,0.15,13;0.9,0.27,0,25" xmin=-0.6 xmax=14.6 ymin=-0.04 ymax=0.34 nomi="x,f_X" legenda=0 titolo="Densità di $U(8,12)$, alta $\dfrac14$. Dell'intervallo da $10$ a $13$ conta solo la parte fino a $12$, che ha area $2\cdot\dfrac14=\dfrac12$"}

:::

::::teorema{#parametri-uniforme titolo="Quantili e momenti dell'uniforme"}
Se $X\sim U(a,b)$ con $a<b$, allora
$$
q_p=a+p(b-a),\qquad E[X]=\frac{a+b}{2},
\qquad \operatorname{Var}(X)=\frac{(b-a)^2}{12}.
$$
Il quantile si trova percorrendo la frazione $p$ della lunghezza dell'intervallo a partire da $a$. La varianza dipende soltanto dalla lunghezza $b-a$ dell'intervallo. Per la consegna con legge $U(8,12)$ si ottengono $q_{0{,}25}=8+0{,}25\cdot4=9$, $E[X]=10$ e $\operatorname{Var}(X)=\dfrac{16}{12}=\dfrac43$.
:::dimostrazione
Per $a<x<b$, la ripartizione è l'area del rettangolo fra $a$ e $x$, cioè $\dfrac{x-a}{b-a}$. Risolvendo l'equazione $\dfrac{q_p-a}{b-a}=p$ si ottiene la formula del quantile. Per la media si integra $x$ su $(a,b)$ e si divide per $b-a$. Si ottiene $\dfrac{b^2-a^2}{2(b-a)}=\dfrac{a+b}{2}$. Per la varianza si pone $V=\dfrac{X-a}{b-a}$, che ha legge $U(0,1)$. Poiché $E[V]=\dfrac12$ ed $E[V^2]=\displaystyle\int_0^1 v^2\,dv=\dfrac13$, si ha $\operatorname{Var}(V)=\dfrac13-\dfrac14=\dfrac1{12}$. Si ha $X=a+(b-a)V$, quindi per l'effetto di una trasformazione affine la varianza di $X$ è $(b-a)^2\operatorname{Var}(V)=\dfrac{(b-a)^2}{12}$.
:::
::::

## Distribuzione esponenziale

:::definizione{#esponenziale titolo="Tempo di attesa esponenziale"}
A uno sportello i clienti arrivano secondo un processo di Poisson omogeneo di intensità $2$ arrivi al minuto (capitolo 5), quindi il numero di arrivi in $t$ minuti ha legge di Poisson di parametro $2t$. Il tempo $X$ fino al primo arrivo supera $t$ minuti esattamente quando nei primi $t$ minuti non arriva nessuno. La massa di Poisson in zero è $e^{-2t}\dfrac{(2t)^0}{0!}=e^{-2t}$, perciò
$$
P(X>t)=P(\text{nessun arrivo in }t\text{ minuti})=e^{-2t},\qquad t\ge0.
$$
La ripartizione è quindi $F_X(t)=1-e^{-2t}$ per $t\ge0$ e, derivando, la densità di $X$ è $2e^{-2t}$ per $t>0$.

Una variabile $X$ ha **legge esponenziale** con tasso $\lambda>0$ se la sua densità è $\lambda e^{-\lambda x}$ per $x>0$ e zero altrove. Il tasso $\lambda$ (si legge lambda) è il numero medio di eventi per unità di tempo, come l'intensità del processo di Poisson, e si misura nell'inverso dell'unità di tempo; allo sportello $\lambda=2\,\mathrm{min}^{-1}$. Per $t\ge0$ si ottiene, integrando la densità da $t$ a infinito,
$$
P(X>t)=\int_t^{+\infty}\lambda e^{-\lambda x}\,dx=\Bigl[-e^{-\lambda x}\Bigr]_t^{+\infty}=e^{-\lambda t},
\qquad F_X(t)=1-e^{-\lambda t}.
$$
La funzione $t\mapsto P(X>t)$ si chiama **sopravvivenza**; il nome viene dalle durate di funzionamento, per le quali $P(X>t)$ è la probabilità che un componente funzioni ancora al tempo $t$. Per $0\le a<b$, la probabilità tra $a$ e $b$ è $e^{-\lambda a}-e^{-\lambda b}$, perché si sottrae la coda oltre $b$ da quella oltre $a$.
:::

:::osservazione{titolo="Scala, varianza e quantile"}
Integrando per parti $x\lambda e^{-\lambda x}$ e $x^2\lambda e^{-\lambda x}$ su $(0,+\infty)$ si ottengono $E[X]=\dfrac1\lambda$ ed $E[X^2]=\dfrac{2}{\lambda^2}$. Quindi $\operatorname{Var}(X)=\dfrac{2}{\lambda^2}-\dfrac{1}{\lambda^2}=\dfrac1{\lambda^2}$. Il reciproco $\dfrac1\lambda$ del tasso si chiama parametro di **scala** e coincide con l'attesa media, per esempio $\dfrac12$ minuto allo sportello. Dall'equazione $1-e^{-\lambda q_p}=p$ si ha $e^{-\lambda q_p}=1-p$ e, passando ai logaritmi,
$$
q_p=-\frac{\log(1-p)}{\lambda}.
$$
Qui $\log$ indica il logaritmo naturale. Se il tasso è $\dfrac14\,\mathrm{min}^{-1}$, la media vale $4\,\mathrm{min}$ e la mediana vale $-4\log\dfrac12=4\log 2\approx2{,}77\,\mathrm{min}$. La mediana è più piccola della media perché $\log 2<1$.

::grafico{curve="t,exp(-t/4)/4,0,16" area="exp(-x/4)/4;0;0;2.7726" segmenti="2.7726,0,2.7726,0.125;4,0,4,0.09197" etichette="3.9,0.14,mediana;5.1,0.105,media" xmin=-0.6 xmax=16.5 ymin=-0.025 ymax=0.3 nomi="x,f_X" legenda="f_X(x)=\dfrac14e^{-x/4}" titolo="Densità esponenziale con tasso $\dfrac14$. L'area colorata vale $\dfrac12$ e termina nella mediana $4\log 2\approx2{,}77$, a sinistra della media $4$"}

:::

::::teorema{#assenza-di-memoria titolo="Assenza di memoria"}
Una lampadina ha durata esponenziale con media $4\,\mathrm{h}$, quindi tasso $\dfrac14\,\mathrm{h}^{-1}$, e dura più di $4$ ore con probabilità $e^{-\frac14\cdot4}=e^{-1}$. Se è già accesa da $10$ ore, la probabilità che duri altre $4$ ore è
$$
P(X>14\mid X>10)=\frac{e^{-\frac{14}{4}}}{e^{-\frac{10}{4}}}=e^{-1},
$$
la stessa di una lampadina nuova. Le ore già trascorse non cambiano la probabilità di quelle successive; da qui il nome assenza di memoria.

Se $X$ ha legge esponenziale con tasso $\lambda>0$, allora, per ogni $s,t\ge0$,
$$
P(X>s+t\mid X>s)=P(X>t).
$$
:::dimostrazione
La probabilità condizionata del capitolo 4 è $P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}$. Poiché $\{X>s+t\}\subseteq\{X>s\}$, l'intersezione dei due eventi è $\{X>s+t\}$. Inoltre $P(X>s)=e^{-\lambda s}>0$, quindi il rapporto che definisce la probabilità condizionata è
$$
\frac{e^{-\lambda(s+t)}}{e^{-\lambda s}}=e^{-\lambda t}.
$$
Il risultato dipende solo da $t$ e non da $s$, quindi l'attesa residua, condizionata alla sopravvivenza fino a $s$, ha la stessa distribuzione dell'attesa iniziale.
:::
::::

:::attenzione{titolo="L'assenza di memoria è una proprietà del modello"}
Se $X\sim U(0,10)$, allora $P(X>6\mid X>5)=\dfrac45$, perché dopo la condizione restano cinque unità di lunghezza e quattro di queste superano $6$. Invece $P(X>1)=\dfrac9{10}$. La proprietà dell'esponenziale non vale quindi per una durata continua qualsiasi.
:::

:::esempio{titolo="Conversione dell'unità di tempo"}
Un tempo di risposta $T$ ha distribuzione esponenziale con media $30\,\mathrm{s}$. Se si misura il tempo in secondi, il tasso è $\dfrac1{30}\,\mathrm{s}^{-1}$. Per superare $90\,\mathrm{s}$, il prodotto tasso per durata è $\dfrac{90}{30}=3$, quindi $P(T>90\,\mathrm{s})=e^{-3}$. Se l'unità è il minuto, l'attesa media è $\dfrac12\,\mathrm{min}$ e il tasso è $2\,\mathrm{min}^{-1}$, mentre la soglia è $\dfrac32\,\mathrm{min}$. Il prodotto vale ancora $2\cdot\dfrac32=3$. La probabilità rimane la stessa perché la soglia e il tasso sono espressi nella stessa unità di tempo.
:::

## Normale e standardizzazione

:::definizione{#normale titolo="Distribuzione normale"}
I pesi delle confezioni riempite da una macchina si addensano intorno a un valore centrale e diventano più rari allontanandosi da esso, allo stesso modo a destra e a sinistra. Per grandezze di questo tipo si usa la legge normale, con densità a campana.

Si scrive $X\sim N(\mu,\sigma^2)$ quando $X$ ha **legge normale** con media $\mu$ (si legge mu) e varianza $\sigma^2$, dove $\sigma>0$ (si legge sigma) è la deviazione standard. La densità è
$$
f_X(x)=\frac{1}{\sigma\sqrt{2\pi}}
          \exp\!\left(-\frac{(x-\mu)^2}{2\sigma^2}\right),
$$
dove $\exp(u)$ indica $e^u$. L'esponente dipende dal quadrato della distanza da $\mu$, quindi i punti alla stessa distanza dal centro hanno la stessa densità: $f_X(\mu+d)=f_X(\mu-d)$ per ogni $d$. Una legge con questa proprietà si dice **simmetrica** rispetto a $\mu$, e per ogni $d>0$ vale $P(X<\mu-d)=P(X>\mu+d)$. In particolare ciascuna delle due semirette separate da $\mu$ ha probabilità $\dfrac12$.

L'altezza al centro è $\dfrac{1}{\sigma\sqrt{2\pi}}$, quindi aumentando $\sigma$ cresce la dispersione e diminuisce l'altezza al centro, mentre l'area totale resta unitaria. La normale con $\mu=0$ e $\sigma=1$, indicata con $N(0,1)$, si chiama **normale standard**.
:::

::::teorema{#standardizzazione-normale titolo="Standardizzazione della normale"}
La densità normale non ha una primitiva elementare, quindi le sue probabilità si leggono su una tavola. La standardizzazione riconduce ogni normale alla normale standard, perciò basta una sola tavola.

Se $X\sim N(\mu,\sigma^2)$ con $\sigma>0$, allora $Z=\dfrac{X-\mu}{\sigma}$ ha legge $N(0,1)$. Indicando con $\Phi$ (si legge fi) la ripartizione della normale standard, per $a<b$ si ottiene
$$
P(a<X<b)=
\Phi\!\left(\frac{b-\mu}{\sigma}\right)
-\Phi\!\left(\frac{a-\mu}{\sigma}\right).
$$
Una tavola della normale standard riporta $\Phi(z)$, l'area a sinistra di $z$, per valori positivi di $z$; per esempio $\Phi(1{,}00)\approx0{,}8413$. La probabilità a destra di $z$ vale $1-\Phi(z)$.

Viceversa, se $Z$ è normale standard, allora $\mu+\sigma Z$ ha legge $N(\mu,\sigma^2)$. Sia ora $Y=aX+b$ con $a\ne0$. Poiché $X=\mu+\sigma Z$, si ha $Y=(a\mu+b)+a\sigma Z$.

- Se $a>0$, la regola precedente con deviazione standard $a\sigma$ dà $Y\sim N(a\mu+b,a^2\sigma^2)$.
- Se $a<0$, si scrive $Y=(a\mu+b)+|a|\sigma\,(-Z)$. Due variabili hanno la stessa legge quando assegnano la stessa probabilità a ogni intervallo. La variabile $-Z$ ha la stessa legge di $Z$, perché $P(c<-Z<d)=P(-d<Z<-c)=P(c<Z<d)$, dove l'ultima uguaglianza vale perché la densità standard è simmetrica rispetto a $0$. Perciò $-Z$ è ancora normale standard e di nuovo $Y\sim N(a\mu+b,a^2\sigma^2)$.
:::dimostrazione
Sottrarre $\mu$ e dividere per $\sigma>0$ conserva il verso delle disuguaglianze, quindi $P(Z\le z)=P(X\le\mu+\sigma z)$. Nella formula integrale di $P(X\le x)$ si sostituisce $u=\dfrac{t-\mu}{\sigma}$. Il differenziale $dt=\sigma\,du$ semplifica il fattore $\dfrac1\sigma$ della densità. Resta la densità della normale standard integrata fino a $\dfrac{x-\mu}{\sigma}$, cioè $P(X\le x)=\Phi\!\left(\dfrac{x-\mu}{\sigma}\right)$. Con $x=\mu+\sigma z$ si ottiene $P(Z\le z)=\Phi(z)$ per ogni $z$, quindi $Z$ ha la ripartizione della normale standard e $Z\sim N(0,1)$. Sottraendo due valori della ripartizione si ottiene la formula per l'intervallo.

Per il viceversa, sia $Z\sim N(0,1)$ e sia $X=\mu+\sigma Z$. Poiché $\sigma>0$, si ha $P(X\le x)=P\!\left(Z\le\dfrac{x-\mu}{\sigma}\right)=\Phi\!\left(\dfrac{x-\mu}{\sigma}\right)$. Derivando con la regola della funzione composta, la densità di $X$ è $\dfrac1\sigma$ per la densità standard valutata in $\dfrac{x-\mu}{\sigma}$, cioè la densità di $N(\mu,\sigma^2)$.
:::
::::

:::esempio{titolo="Due code simmetriche"}
Per $X\sim N(40,25)$, la deviazione standard è $\sqrt{25}=5$. Le soglie $35$ e $45$ corrispondono ai valori standardizzati $\dfrac{35-40}{5}=-1$ e $\dfrac{45-40}{5}=1$. La densità standard è simmetrica rispetto a $0$, quindi l'area a sinistra di $-1$ è uguale all'area a destra di $1$, cioè $\Phi(-1)=1-\Phi(1)$. Dunque, usando $\Phi(1)\approx0{,}84134$, la probabilità dell'intervallo è
$$
P(35<X<45)=\Phi(1)-\Phi(-1)=2\Phi(1)-1\approx0{,}6827.
$$
La probabilità esterna è la somma delle due code e vale circa $1-0{,}6827=0{,}3173$.

::grafico{f="exp(-x*x/2)/sqrt(2*PI)" area="exp(-x*x/2)/sqrt(2*PI);0;-1;1" segmenti="-1,0,-1,0.24197;1,0,1,0.24197" xmin=-3.8 xmax=3.8 ymin=-0.045 ymax=0.46 nomi="z,y" legenda="f_Z(z)" titolo="Area compresa fra i valori standardizzati −1 e 1"}

:::

:::osservazione{titolo="Quantili della normale"}
Sia $z_p$ il quantile di ordine $p$ della normale standard; per esempio $z_{0{,}95}\approx1{,}645$ e $z_{0{,}975}\approx1{,}96$. Per la simmetria rispetto a $0$ vale $z_{1-p}=-z_p$, quindi $z_{0{,}025}\approx-1{,}96$. Se $X\sim N(\mu,\sigma^2)$, allora $q_p=\mu+\sigma z_p$, perché standardizzando quella soglia si ottiene proprio $z_p$.

Un intervallo centrale al $95\%$ è l'intervallo con centro $\mu$ che contiene probabilità $0{,}95$. Lascia il $2{,}5\%$ in ogni coda, quindi i suoi estremi sono i quantili di ordine $0{,}025$ e $0{,}975$; per $N(40,25)$ va da $40-5\cdot1{,}96=30{,}2$ a $40+5\cdot1{,}96=49{,}8$. Una sola soglia superiore che lascia a destra il $5\%$ richiede invece il quantile di ordine $0{,}95$, che per $N(40,25)$ vale $40+5\cdot1{,}645\approx48{,}2$.

::grafico{f="exp(-x*x/2)/sqrt(2*PI)" area="exp(-x*x/2)/sqrt(2*PI);0;-4;-1.96|exp(-x*x/2)/sqrt(2*PI);0;1.96;4" segmenti="-1.96,0,-1.96,0.05844;1.96,0,1.96,0.05844" etichette="-1.96,0.1,−1,96;1.96,0.1,1,96" xmin=-4 xmax=4 ymin=-0.045 ymax=0.46 nomi="z,f_Z" legenda="f_Z(z)" titolo="Le due code colorate oltre $z_{0{,}025}\approx-1{,}96$ e $z_{0{,}975}\approx1{,}96$ hanno area $0{,}025$ ciascuna"}

:::

## Gamma, chi quadrato, Student e Fisher

:::definizione{#famiglie titolo="Gamma e distribuzioni per l'inferenza"}
Allo sportello con $2$ arrivi al minuto il tempo fino al primo arrivo è esponenziale con tasso $2$, mentre il tempo fino al terzo arrivo ha legge gamma con forma $3$ e tasso $2$. Nel capitolo 8 la gamma di forma $k$ e tasso $\lambda$ torna come legge della somma di $k$ attese esponenziali di tasso $\lambda$.

La **gamma** con forma $k>0$ e tasso $\lambda>0$ ha densità
$$
f_X(x)=\frac{\lambda^k}{\Gamma(k)}x^{k-1}e^{-\lambda x}
\qquad\text{per }x>0,
$$
e densità zero altrove. Quando $k$ è intero, la gamma è la legge del tempo fino al $k$-esimo arrivo; con $k=1$ la densità decresce a partire da $x=0$, mentre con $k>1$ sale da zero fino a un massimo e poi scende.

Il simbolo $\Gamma$ si legge gamma maiuscola e indica la funzione gamma, $\Gamma(k)=\int_0^\infty t^{k-1}e^{-t}\,dt$. Per $k$ intero $\Gamma(k)=(k-1)!$, per esempio $\Gamma(3)=2$. Il cambio di variabile $t=\lambda x$ trasforma l'integrale della densità in $\dfrac{1}{\Gamma(k)}\displaystyle\int_0^{\infty}t^{k-1}e^{-t}\,dt=1$. Con $k=1$ si ottiene l'esponenziale, perché $\Gamma(1)=1$ e $x^0=1$. Con forma $k$ e tasso $\lambda$ si ha $E[X]=\dfrac{k}{\lambda}$ e $\operatorname{Var}(X)=\dfrac{k}{\lambda^2}$. Se la forma vale $3$ e il tasso vale $2$, la densità è $\dfrac{2^3}{2}x^2e^{-2x}=4x^2e^{-2x}$, la media è $\dfrac32$ e la varianza $\dfrac34$. La derivata $4(2x-2x^2)e^{-2x}$ si annulla in $x=1$, dove la densità è massima; questo punto si chiama moda della legge, come la moda dei dati del capitolo 2.

::grafico{curve="t,4*t*t*exp(-2*t),0,5" segmenti="1.5,0,1.5,0.44808" punti="1,0.54134,pieno" etichette="1.85,0.5,media 1,5;0.7,0.6,moda 1" xmin=-0.25 xmax=5.2 ymin=-0.06 ymax=0.68 nomi="x,f_X" legenda="f_X(x)=4x^2e^{-2x}" titolo="Densità gamma con forma $3$ e tasso $2$. Il massimo è in $x=1$, la media in $x=\dfrac32$"}

:::

:::osservazione{titolo="Momenti della gamma"}
L'integrale di $x f_X(x)$ differisce da quello di normalizzazione per una potenza di $x$ in più. Dopo il cambio di variabile $t=\lambda x$ si ottiene $E[X]=\dfrac{\Gamma(k+1)}{\lambda\Gamma(k)}$. Integrando per parti $t^ke^{-t}$ si trova $\Gamma(k+1)=k\Gamma(k)$, quindi $E[X]=\dfrac{k}{\lambda}$. Con due potenze in più si ottiene $E[X^2]=\dfrac{\Gamma(k+2)}{\lambda^2\Gamma(k)}=\dfrac{k(k+1)}{\lambda^2}$. Sottraendo il quadrato della media resta $\operatorname{Var}(X)=\dfrac{k(k+1)-k^2}{\lambda^2}=\dfrac{k}{\lambda^2}$. Con $k=1$ si ritrovano media $\dfrac1\lambda$ e varianza $\dfrac1{\lambda^2}$ dell'esponenziale.
:::

:::definizione{#chi-quadrato-student-fisher titolo="Chi quadrato, t di Student e F di Fisher"}
Le tre leggi seguenti si costruiscono da normali standard; la t di Student, per esempio, dà nel capitolo 10 l'intervallo di confidenza per la media quando la varianza non è nota.

Due variabili aleatorie $X$ e $Y$ si dicono **indipendenti** quando ogni evento che riguarda solo $X$ è indipendente, nel senso del capitolo 4, da ogni evento che riguarda solo $Y$; per esempio $P(X\le1,\,Y\le2)=P(X\le1)\,P(Y\le2)$. La definizione per più variabili è nel capitolo 7.

Se $Z_1,\ldots,Z_\nu$ sono normali standard indipendenti, con $\nu$ (si legge nu) intero positivo, la somma $\sum_{i=1}^\nu Z_i^2$ ha legge **chi quadrato** con $\nu$ gradi di libertà, indicata con $\chi^2_\nu$ (la lettera $\chi$ si legge chi). Il numero $\nu$ di quadrati sommati si chiama numero di **gradi di libertà**. Nel capitolo 8 la varianza campionaria di $n$ osservazioni normali, moltiplicata per $\dfrac{n-1}{\sigma^2}$, ha legge chi quadrato con $n-1$ gradi di libertà. La $\chi^2_\nu$ è una gamma con forma $\dfrac\nu2$ e tasso $\dfrac12$, quindi le formule $\dfrac{k}{\lambda}$ e $\dfrac{k}{\lambda^2}$ danno media $\nu$ e varianza $2\nu$. In particolare, la somma dei quadrati di tre normali standard indipendenti ha media $3$ e varianza $6$.

- Se $Z\sim N(0,1)$ e $U\sim\chi^2_\nu$ sono indipendenti, la variabile $T=\dfrac{Z}{\sqrt{\frac{U}{\nu}}}$ ha legge $t_\nu$ di Student con $\nu$ gradi di libertà.
- Se $U\sim\chi^2_r$ e $V\sim\chi^2_s$ sono indipendenti, la variabile $\dfrac{\frac{U}{r}}{\frac{V}{s}}$ ha legge $F_{r,s}$ di Fisher.

Le distribuzioni chi quadrato e Fisher assumono valori non negativi. La t di Student assume valori di entrambi i segni ed è simmetrica rispetto a $0$. Infatti $-T=\dfrac{-Z}{\sqrt{\frac{U}{\nu}}}$, e $-Z$ ha la stessa legge di $Z$ ed è indipendente da $U$, quindi $-T$ ha la stessa legge di $T$. Con pochi gradi di libertà la t di Student dà più probabilità della normale standard ai valori lontani da $0$, come mostra la figura per la $t_3$. Nei capitoli sugli intervalli e sui test si useranno i quantili di queste leggi, letti su tavole come per la normale. Per una legge $F_{r,s}$, il primo indice si riferisce alla variabile al numeratore.

::grafico{f="0.367553*(1+x^2/3)^(-2);exp(-x^2/2)/sqrt(2*PI)" area="0.367553*(1+x^2/3)^(-2);0;-4.5;-1.96|0.367553*(1+x^2/3)^(-2);0;1.96;4.5" segmenti="-1.96,0,-1.96,0.07067;1.96,0,1.96,0.07067" xmin=-4.5 xmax=4.5 ymin=-0.04 ymax=0.46 nomi="t,f" legenda="t_3;N(0,1)" titolo="Densità della $t_3$ e della normale standard. Oltre $\pm1{,}96$ la normale lascia il $5\%$, mentre le code colorate della $t_3$ hanno area complessiva $0{,}145$ circa"}

:::

## Trasformazioni monotone

::::teorema{#trasformazioni titolo="Densità di una trasformazione monotona"}
Sia $X\sim U(0,1)$ il lato di un quadrato e sia $Y=X^2$ la sua area. Per $0<y<1$ si ha $Y\le y$ esattamente quando $X\le\sqrt y$, quindi $F_Y(y)=\sqrt y$ e, derivando, $f_Y(y)=\dfrac{1}{2\sqrt y}$. Lo stesso procedimento, svolto per una trasformazione monotona qualsiasi, dà la formula generale.

Sia $X$ una variabile con densità nulla fuori da un intervallo $I$ e sia $Y=g(X)$. Si suppone che $g$ sia strettamente monotona e di classe $C^1$, cioè derivabile con derivata continua, nell'interno di $I$, con derivata sempre diversa da zero. Si indicano con $g^{-1}$ la funzione inversa e con $g(I)$ l'insieme dei valori di $g$ su $I$. Allora, per ogni $y$ interno a $g(I)$, tranne al più un numero finito di punti,
$$
f_Y(y)=f_X\bigl(g^{-1}(y)\bigr)
       \left|\frac{d}{dy}g^{-1}(y)\right|.
$$
Fuori dall'intervallo trasformato la densità è zero. Il fattore con la derivata converte la lunghezza di un intervallo in $y$ nella corrispondente lunghezza nella variabile originaria.
:::dimostrazione
Se $g$ è crescente, l'evento $\{Y\le y\}$ coincide con $\{X\le g^{-1}(y)\}$. Si ha quindi $F_Y(y)=F_X(g^{-1}(y))$. Derivando con la regola della funzione composta si ottiene il prodotto tra la densità valutata nell'inversa e la derivata dell'inversa, che è positiva. Se $g$ è decrescente, la disuguaglianza si inverte e l'evento $\{Y\le y\}$ coincide con $\{X\ge g^{-1}(y)\}$. Poiché i punti singoli hanno probabilità zero, si ha $F_Y(y)=1-F_X(g^{-1}(y))$. La derivazione introduce un segno meno, che rende positivo il prodotto perché la derivata dell'inversa è negativa. In entrambi i casi il risultato si scrive con il valore assoluto della derivata.
:::
::::

:::esempio{titolo="Trasformazione affine decrescente"}
Se $X\sim U(1,4)$ e $Y=9-2X$, gli estremi trasformati sono $7$ e $1$. Quindi la densità di $Y$ è nulla fuori da $(1,7)$. L'inversa è $x=\dfrac{9-y}{2}$ e ha derivata $-\dfrac12$. La densità di $X$ vale $\dfrac13$ su $(1,4)$, perciò all'interno del supporto si ottiene $f_Y(y)=\dfrac13\cdot\left|-\dfrac12\right|=\dfrac16$. L'area è ancora $6\cdot\dfrac16=1$, perché la lunghezza del supporto è raddoppiata da $3$ a $6$ e l'altezza si è dimezzata.
:::

:::esempio{titolo="Due rami per una trasformazione quadratica"}
Sia $X\sim U(-2,2)$ e sia $Y=X^2$. La funzione $x^2$ decresce su $(-2,0)$ e cresce su $(0,2)$, quindi non è monotona e il teorema sulle trasformazioni monotone non si applica. Si calcola allora la ripartizione. Per $0<y<4$, $X^2\le y$ equivale a $-\sqrt y\le X\le\sqrt y$. L'intervallo ha lunghezza $2\sqrt y$ e la densità di $X$ vale $\dfrac14$, quindi $F_Y(y)=\dfrac{2\sqrt y}{4}=\dfrac{\sqrt y}{2}$ per $0<y<4$. Derivando, la densità è $f_Y(y)=\dfrac1{4\sqrt y}$ sullo stesso intervallo. I valori di $F_Y$ sono $0$ a sinistra e $1$ a destra. Per un vettore di variabili e per le trasformazioni che dipendono da più componenti si rimanda al capitolo 7 sulle distribuzioni congiunte.

::grafico{curve="t,t*t,-2,2" linee="-2,1 2,1" punti="-1,1,pieno;1,1,pieno" segmenti="-1,0,-1,1;1,0,1,1" poligoni="-1,0 1,0 1,-0.21 -1,-0.21" xmin=-2.4 xmax=2.4 ymin=-0.45 ymax=4.55 nomi="x,y" legenda="y=x^2" titolo="Alla soglia $y=1$ corrispondono due radici. La fascia sull'asse orizzontale indica i valori di $X$ per cui $Y\le 1$"}
:::

:::osservazione{titolo="Probabilità e densità della trasformata"}
Per trovare una sola probabilità di $Y=g(X)$ basta riscrivere l'evento in funzione di $X$. Per $X\sim U(-2,2)$, per esempio, $X^2>1$ equivale a $X<-1$ oppure $X>1$; i due eventi sono disgiunti, quindi
$$
P(X^2>1)=P(X<-1)+P(X>1)=\frac14+\frac14=\frac12.
$$
Per ricavare tutta la legge di $Y$ si calcola invece la ripartizione per una soglia variabile $y$ e si deriva sui tratti in cui essa varia. Quando la trasformazione ha più rami e il quesito riguarda una sola soglia, il primo metodo evita di calcolare l'intera ripartizione.
:::
