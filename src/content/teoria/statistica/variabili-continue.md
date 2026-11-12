---
titolo: "Variabili aleatorie e distribuzioni continue"
sommario: "Come calcolare probabilità, quantili e momenti a partire da una densità e come usare le principali distribuzioni continue."
---

## Densità e probabilità di intervalli

:::definizione{#densita titolo="Densità di una variabile aleatoria"}
Una misura come la durata di una prova può essere modellata da una variabile aleatoria $X$ che assume valori reali. La legge di $X$ è **assolutamente continua** se esiste una funzione integrabile $f_X$, detta **densità**, con $f_X(x)\ge 0$, area totale unitaria e
$$
P(a<X\le b)=\int_a^b f_X(x)\,dx
\qquad\text{per ogni }a<b.
$$
La densità assegna probabilità attraverso le aree. Se $X$ è misurata in secondi, $f_X(x)$ si esprime in $\mathrm{s}^{-1}$ e la probabilità è adimensionale. Una densità si può modificare su un numero finito di punti senza modificare le aree, quindi la scelta del suo valore agli estremi dei tratti è convenzionale.
:::

:::esempio{titolo="Calcolo della costante di normalizzazione"}
Sia $f_X(x)=cx$ per $0<x<2$ e sia $f_X(x)=0$ altrove. Poiché la densità deve avere area unitaria, si ottiene
$$
1=\int_0^2 cx\,dx
  =\left[\frac{cx^2}{2}\right]_0^2=2c.
$$
Ne segue $c=\dfrac12$. Con questo valore la funzione è anche non negativa su tutto il supporto. Per trovare $P(1<X<2)$ si integra soltanto tra $1$ e $2$. L'area vale $\dfrac34$ perché l'area tra $0$ e $1$ vale $\dfrac14$ e le due aree sommano a $1$.

::grafico{curve="t,t/2,0,2" legenda="f_X(x)=\dfrac{x}{2}" segmenti="2,0,2,1" area="x/2;0;1;2" xmin=-0.4 xmax=2.6 ymin=-0.12 ymax=1.22 nomi="x,y" titolo="L'area colorata è la probabilità che X sia compresa tra 1 e 2"}

:::

::::teorema{#probabilita-puntuale titolo="Probabilità in un punto"}
Se $X$ ammette densità, allora $P(X=x_0)=0$ per ogni $x_0\in\mathbb R$. Perciò tutte le scelte di inclusione dei due estremi di un intervallo danno la stessa probabilità.
:::dimostrazione
L'evento $\{X=x_0\}$ è contenuto in $\{x_0-h<X\le x_0\}$ per ogni $h>0$. Poiché $f_X$ è integrabile, l'integrale su $(x_0-h,x_0]$ tende a zero per $h\to0^+$. La probabilità del singoletto è compresa tra zero e quell'integrale, quindi vale zero.
:::
::::

:::attenzione{titolo="L'altezza della densità può superare uno"}
La densità uniforme su $(0,\dfrac14)$ ha altezza $4$. La sua area vale $4\cdot\dfrac14=1$. Perciò la condizione di normalizzazione riguarda l'integrale della densità e lascia libera la sua altezza. Se una legge assegna probabilità positiva a un singolo valore, come accade con un tempo di attesa che vale zero con probabilità $\dfrac14$, l'intera legge non si può invece descrivere con una densità.
:::

## Ripartizione, quantili e momenti

:::definizione{#ripartizione titolo="Funzione di ripartizione"}
La **funzione di ripartizione** $F_X$ indica la probabilità che $X$ sia al più pari a una soglia $x$. Per una variabile con densità vale
$$
F_X(x)=P(X\le x)=\int_{-\infty}^x f_X(t)\,dt.
$$
Quando $x$ aumenta, l'intervallo d'integrazione si allarga e l'integrando è non negativo. Quindi $F_X$ è non decrescente. L'area su intervalli di lunghezza tendente a zero tende a zero, quindi $F_X$ è continua. I limiti a sinistra e a destra sono rispettivamente $0$ e $1$. Per ricavare la probabilità tra due soglie si usa
$$
P(a<X\le b)=F_X(b)-F_X(a),
$$
perché il secondo termine sottrae l'area accumulata fino ad $a$.
:::

:::esempio{titolo="Ripartizione su tre intervalli"}
Sia $f_X(x)=2x$ per $0<x<1$ e sia zero altrove. Se $0<x<1$, l'integrale da $0$ a $x$ vale $x^2$. A sinistra del supporto l'area è zero. A destra è già tutta accumulata. La ripartizione vale dunque $0$ per $x\le 0$, $x^2$ per $0<x<1$ e $1$ per $x\ge1$. Il calcolo $F_X(1)-F_X(\dfrac12)=\dfrac34$ include l'intera area dalla metà dell'intervallo al bordo destro.
:::

:::osservazione{titolo="Dalla ripartizione alla densità"}
In un punto di continuità di $f_X$, il teorema fondamentale del calcolo integrale dà $F_X'(x)=f_X(x)$. Per una ripartizione continua e derivabile a tratti, con un numero finito di tratti, le derivate dei singoli tratti forniscono la densità. La ripartizione fornisce probabilità e soglie. Integrando la densità dopo averla moltiplicata per una potenza di $x$ si ottengono invece i momenti della legge. Un tratto orizzontale della ripartizione corrisponde a un intervallo di probabilità nulla. In presenza di un salto, la sua ampiezza è la probabilità assegnata al punto e la derivazione dei soli tratti regolari non recupera quella massa.
:::

:::definizione{#quantili-continui titolo="Quantile di coda inferiore"}
Sia $p\in(0,1)$. Il **quantile di ordine** $p$ è la prima soglia alla quale la ripartizione raggiunge almeno $p$:
$$
q_p=\inf\{x\in\mathbb R:F_X(x)\ge p\}.
$$
Se la ripartizione è continua e strettamente crescente intorno alla soglia, il quantile è l'unica soluzione di $F_X(x)=p$. La mediana è $q_{\frac12}$. Se il testo chiede una soglia con probabilità $0{,}10$ a destra, si cerca il quantile $q_{0{,}90}$ poiché le due code complementari sommano a uno.
:::

:::esempio{titolo="Lettura del quantile dalla ripartizione"}
Per la ripartizione che vale $x^2$ tra $0$ e $1$, il quantile di ordine $\dfrac14$ soddisfa $q_{\frac14}^2=\dfrac14$. La radice $\dfrac12$ appartiene all'intervallo, quindi è la soglia cercata. La radice negativa è fuori dal tratto su cui vale l'equazione. Se la ripartizione fosse costante al livello richiesto per un intero intervallo, la definizione tramite estremo inferiore sceglierebbe l'estremo sinistro.
:::

## Valore atteso e varianza

:::definizione{#momenti-continui titolo="Momenti di una legge con densità"}
Se $\int_{\mathbb R}|x|f_X(x)\,dx$ è finito, il **valore atteso** si ottiene pesando ogni valore con la densità. Se il momento secondo è finito, si calcolano anche
$$
\begin{aligned}
E[X]&=\int_{\mathbb R}x f_X(x)\,dx,\\[6pt]
E[X^2]&=\int_{\mathbb R}x^2 f_X(x)\,dx,\\[6pt]
\operatorname{Var}(X)&=E[X^2]-E[X]^2.
\end{aligned}
$$
La seconda formula integra il quadrato dei valori prima di fare la media. L'ultima segue sviluppando il quadrato in $E[(X-E[X])^2]$ e usando la linearità. Se $X$ è misurata in metri, $E[X]$ e la deviazione standard hanno unità $\mathrm m$, mentre la varianza ha unità $\mathrm{m}^2$.
:::

:::esempio{titolo="Momenti di una densità crescente"}
Per $f_X(x)=2x$ su $(0,1)$, l'integrale di $2x^2$ dà $E[X]=\dfrac23$ e l'integrale di $2x^3$ dà $E[X^2]=\dfrac12$. Quindi la varianza vale $\dfrac12-\dfrac49=\dfrac1{18}$. La media è maggiore del punto medio dell'intervallo perché gli intervalli a destra hanno densità maggiore dei corrispondenti intervalli a sinistra.
:::

:::osservazione{titolo="Effetto di una trasformazione affine"}
Se $Y=aX+b$ e $E[X^2]$ è finito, allora $E[Y]=aE[X]+b$. Sottraendo le medie si ha $Y-E[Y]=a(X-E[X])$, quindi $\operatorname{Var}(Y)=a^2\operatorname{Var}(X)$. Per la deviazione standard il fattore è $|a|$. Una conversione da secondi a minuti divide per $60$ i valori e la deviazione standard, mentre divide la varianza per $3600$.
:::

## Distribuzione uniforme

:::definizione{#uniforme titolo="Uniforme su un intervallo"}
Per $a<b$, la notazione $X\sim U(a,b)$ indica che $X$ ha densità costante $\dfrac1{b-a}$ su $(a,b)$ e zero fuori. L'altezza è il reciproco della lunghezza $b-a$, quindi il rettangolo della densità ha area unitaria. Per trovare una probabilità si calcola la lunghezza della parte dell'intervallo richiesto che interseca $(a,b)$ e la si divide per $b-a$.
:::

:::esempio{titolo="Intervallo che supera il supporto"}
Una consegna arriva tra le ore $8$ e le ore $12$ con orario uniforme in quell'intervallo. L'evento «dopo le $10$ e prima delle $13$» ha la stessa probabilità dell'arrivo tra le $10$ e le $12$. La parte utile dell'intervallo dura due ore, quindi la probabilità vale $\dfrac24=\dfrac12$. Il calcolo riguarda il modello uniforme dato nell'esercizio, che assegna la stessa probabilità a finestre della stessa durata entro il supporto.
:::

::::teorema{#parametri-uniforme titolo="Quantili e momenti dell'uniforme"}
Se $X\sim U(a,b)$ con $a<b$, allora
$$
q_p=a+p(b-a),\qquad E[X]=\frac{a+b}{2},
\qquad \operatorname{Var}(X)=\frac{(b-a)^2}{12}.
$$
Il quantile si trova percorrendo la frazione $p$ dell'intervallo a partire da $a$. La varianza dipende dalla lunghezza dell'intervallo.
:::dimostrazione
Per $a<x<b$, la ripartizione è $\dfrac{x-a}{b-a}$. Risolvendo l'equazione $F_X(q_p)=p$ si ottiene la formula del quantile. Per la media si integra $x$ su $(a,b)$ e si divide per $b-a$. Si ottiene $\dfrac{b^2-a^2}{2(b-a)}=\dfrac{a+b}{2}$. Per la varianza si pone $V=\dfrac{X-a}{b-a}$, uniforme su $(0,1)$. Poiché $E[V]=\dfrac12$ ed $E[V^2]=\dfrac13$, si ha $\operatorname{Var}(V)=\dfrac1{12}$. La trasformazione $X=a+(b-a)V$ moltiplica la varianza per $(b-a)^2$.
:::
::::

## Distribuzione esponenziale

:::definizione{#esponenziale titolo="Tempo di attesa esponenziale"}
Se $X$ ha **legge esponenziale** con tasso $\lambda>0$, la sua densità è $\lambda e^{-\lambda x}$ per $x>0$ e zero altrove. Il tasso $\lambda$ ha unità inverse rispetto alla durata. Per $t\ge0$ si ottiene, integrando la densità da $t$ a infinito,
$$
P(X>t)=e^{-\lambda t},
\qquad F_X(t)=1-e^{-\lambda t}.
$$
La prima funzione è detta **sopravvivenza** e permette di calcolare direttamente le probabilità oltre una soglia. Per $0\le a<b$, la probabilità tra $a$ e $b$ è $e^{-\lambda a}-e^{-\lambda b}$. Si sottrae la coda oltre $b$ da quella oltre $a$.
:::

:::osservazione{titolo="Scala, varianza e quantile"}
Per integrazione per parti si ottengono $E[X]=\dfrac1\lambda$ ed $E[X^2]=\dfrac{2}{\lambda^2}$. Quindi $\operatorname{Var}(X)=\dfrac1{\lambda^2}$. Il reciproco del tasso è il parametro di **scala** e coincide con l'attesa media. Risolvendo $1-e^{-\lambda q_p}=p$ si ottiene
$$
q_p=-\frac{\log(1-p)}{\lambda}.
$$
Qui $\log$ indica il logaritmo naturale. Se il tasso è $\dfrac14\,\mathrm{min}^{-1}$, la media vale $4\,\mathrm{min}$ e la mediana vale $4\log 2\,\mathrm{min}$. La mediana è più piccola della media perché $\log 2<1$.
:::

::::teorema{#assenza-di-memoria titolo="Assenza di memoria"}
Se $X$ ha legge esponenziale con tasso $\lambda>0$, allora, per ogni $s,t\ge0$,
$$
P(X>s+t\mid X>s)=P(X>t).
$$
Per esempio, se la durata è esponenziale con media $4\,\mathrm{h}$, la probabilità di durare altre quattro ore dopo averne già superate dieci è $e^{-1}$.
:::dimostrazione
Poiché $\{X>s+t\}\subseteq\{X>s\}$ e $P(X>s)=e^{-\lambda s}>0$, il rapporto che definisce la probabilità condizionata è
$$
\frac{e^{-\lambda(s+t)}}{e^{-\lambda s}}=e^{-\lambda t}.
$$
Il risultato dipende da $t$, quindi l'attesa residua condizionata alla sopravvivenza fino a $s$ ha la stessa distribuzione dell'attesa iniziale.
:::
::::

:::attenzione{titolo="L'assenza di memoria è una proprietà del modello"}
Se $X\sim U(0,10)$, allora $P(X>6\mid X>5)=\dfrac45$, perché dopo la condizione restano cinque unità di lunghezza e quattro di queste superano $6$. Invece $P(X>1)=\dfrac9{10}$. La proprietà esponenziale non si estende quindi a una durata continua generica.
:::

:::esempio{titolo="Conversione dell'unità di tempo"}
Un tempo di risposta $T$ ha distribuzione esponenziale con media $30\,\mathrm{s}$. Se si misura il tempo in secondi, il tasso è $\dfrac1{30}\,\mathrm{s}^{-1}$. Per superare $90\,\mathrm{s}$, il prodotto tasso per durata è $\dfrac{90}{30}=3$, quindi $P(T>90\,\mathrm{s})=e^{-3}$. Se l'unità è il minuto, l'attesa media è $\dfrac12\,\mathrm{min}$ e il tasso è $2\,\mathrm{min}^{-1}$. Il prodotto vale ancora $2\cdot\dfrac32=3$. La probabilità rimane la stessa perché la soglia e il tasso sono stati espressi in unità compatibili.
:::

## Normale e standardizzazione

:::definizione{#normale titolo="Distribuzione normale"}
Si scrive $X\sim N(\mu,\sigma^2)$ quando $X$ ha **legge normale** con media $\mu$ e varianza $\sigma^2$, dove $\sigma>0$ è la deviazione standard. La densità è
$$
f_X(x)=\frac{1}{\sigma\sqrt{2\pi}}
          \exp\!\left(-\frac{(x-\mu)^2}{2\sigma^2}\right).
$$
L'esponente dipende dal quadrato della distanza da $\mu$, quindi i punti alla stessa distanza dal centro hanno la stessa densità. La probabilità di ciascuna delle due semirette separate da $\mu$ è $\dfrac12$. Aumentando $\sigma$ cresce la dispersione e diminuisce l'altezza al centro, mentre l'area totale resta unitaria.
:::

::::teorema{#standardizzazione-normale titolo="Standardizzazione della normale"}
Se $X\sim N(\mu,\sigma^2)$ con $\sigma>0$, allora $Z=\dfrac{X-\mu}{\sigma}$ ha legge $N(0,1)$. Indicando con $\Phi$ la sua ripartizione, per $a<b$ si ottiene
$$
P(a<X<b)=
\Phi\!\left(\frac{b-\mu}{\sigma}\right)
-\Phi\!\left(\frac{a-\mu}{\sigma}\right).
$$
In una tavola della normale standard, $\Phi(z)$ indica l'area a sinistra di $z$. La probabilità a destra vale $1-\Phi(z)$. Viceversa, se $Z$ è normale standard, allora $\mu+\sigma Z$ ha legge $N(\mu,\sigma^2)$. Poiché $-Z$ ha la stessa legge di $Z$ per simmetria, per $a\ne0$ la variabile $aX+b$ è normale con media $a\mu+b$ e varianza $a^2\sigma^2$.
:::dimostrazione
Sottrarre $\mu$ e dividere per $\sigma>0$ conserva il verso delle disuguaglianze. Nella formula integrale di $P(X\le x)$ si sostituisce $u=\dfrac{t-\mu}{\sigma}$. Il differenziale $dt=\sigma\,du$ semplifica il fattore $\dfrac1\sigma$ della densità. Resta la densità della normale standard integrata fino a $\dfrac{x-\mu}{\sigma}$. Sottraendo due valori della ripartizione si ottiene la formula per l'intervallo.
:::
::::

:::esempio{titolo="Due code simmetriche"}
Per $X\sim N(40,25)$, la deviazione standard è $5$. Le soglie $35$ e $45$ corrispondono a $-1$ e $1$. Poiché la densità standard è pari, $\Phi(-1)=1-\Phi(1)$. Dunque, usando $\Phi(1)\approx0{,}84134$, la probabilità dell'intervallo è $2\Phi(1)-1\approx0{,}6827$. La probabilità esterna si trova sommando le due code e vale circa $0{,}3173$.

::grafico{f="exp(-x*x/2)/sqrt(2*PI)" area="exp(-x*x/2)/sqrt(2*PI);0;-1;1" segmenti="-1,0,-1,0.24197;1,0,1,0.24197" xmin=-3.8 xmax=3.8 ymin=-0.045 ymax=0.46 nomi="z,y" legenda="f_Z(z)" titolo="Area compresa fra i valori standardizzati −1 e 1"}

:::

:::osservazione{titolo="Quantili e limiti di tolleranza"}
Sia $z_p$ il quantile di ordine $p$ della normale standard. Se $X\sim N(\mu,\sigma^2)$, allora $q_p=\mu+\sigma z_p$, perché standardizzando quella soglia si ottiene proprio $z_p$. Un intervallo centrale al $95\%$ lascia il $2{,}5\%$ in ogni coda, quindi si usano gli ordini $0{,}025$ e $0{,}975$. Una sola soglia superiore che lascia a destra il $5\%$ richiede invece il quantile di ordine $0{,}95$.
:::

## Gamma, chi quadrato, Student e Fisher

:::definizione{#famiglie titolo="Gamma e distribuzioni per l'inferenza"}
La **gamma** con forma $k>0$ e tasso $\lambda>0$ ha densità
$$
f_X(x)=\frac{\lambda^k}{\Gamma(k)}x^{k-1}e^{-\lambda x}
\qquad\text{per }x>0,
$$
e densità zero altrove. La funzione gamma è $\Gamma(k)=\int_0^\infty t^{k-1}e^{-t}\,dt$. Il cambio di variabile $t=\lambda x$ mostra che l'integrale della densità è uno. Con $k=1$ si ottiene l'esponenziale, perché $\Gamma(1)=1$. In questa parametrizzazione, $E[X]=\dfrac{k}{\lambda}$ e $\operatorname{Var}(X)=\dfrac{k}{\lambda^2}$. Se la forma vale $3$ e il tasso vale $2$, la media è $\dfrac32$ e la varianza $\dfrac34$.
:::

:::osservazione{titolo="Momenti della gamma"}
L'integrale di $x f_X(x)$ differisce da quello di normalizzazione per una potenza di $x$ in più. Dopo il cambio di variabile si ottiene $E[X]=\dfrac{\Gamma(k+1)}{\lambda\Gamma(k)}$. Integrando per parti si trova $\Gamma(k+1)=k\Gamma(k)$, quindi $E[X]=\dfrac{k}{\lambda}$. Con due potenze in più si ottiene $E[X^2]=\dfrac{k(k+1)}{\lambda^2}$. Sottraendo il quadrato della media resta $\dfrac{k}{\lambda^2}$.
:::

:::definizione{#chi-quadrato-student-fisher titolo="Chi quadrato, t di Student e F di Fisher"}
Se $Z_1,\ldots,Z_\nu$ sono normali standard indipendenti, con $\nu$ intero positivo, la somma $\sum_{i=1}^\nu Z_i^2$ ha legge **chi quadrato** con $\nu$ gradi di libertà, indicata con $\chi^2_\nu$. È una gamma con forma $\dfrac\nu2$ e tasso $\dfrac12$, quindi ha media $\nu$ e varianza $2\nu$. In particolare, la somma dei quadrati di tre normali standard indipendenti ha media $3$ e varianza $6$.

- Se $Z\sim N(0,1)$ e $U\sim\chi^2_\nu$ sono indipendenti, la variabile $\dfrac{Z}{\sqrt{\frac{U}{\nu}}}$ ha legge $t_\nu$ di Student.
- Se $U\sim\chi^2_r$ e $V\sim\chi^2_s$ sono indipendenti, la variabile $\dfrac{\frac{U}{r}}{\frac{V}{s}}$ ha legge $F_{r,s}$ di Fisher.

Le distribuzioni chi quadrato e Fisher assumono valori non negativi. La t di Student assume valori di entrambi i segni ed è simmetrica perché il numeratore è simmetrico e indipendente dal denominatore positivo. Nei capitoli sugli intervalli e sui test si useranno i loro quantili. Per una legge $F_{r,s}$, il primo indice si riferisce alla variabile al numeratore.
:::

## Trasformazioni monotone

::::teorema{#trasformazioni titolo="Densità di una trasformazione monotona"}
Sia $X$ una variabile con densità concentrata su un intervallo $I$ e sia $Y=g(X)$. Supponiamo che $g$ sia strettamente monotona e di classe $C^1$ nell'interno di $I$, con derivata sempre diversa da zero. Allora, per quasi ogni $y\in g(I)$,
$$
f_Y(y)=f_X\bigl(g^{-1}(y)\bigr)
       \left|\frac{d}{dy}g^{-1}(y)\right|.
$$
Fuori dall'intervallo trasformato la densità è zero. Il fattore con la derivata converte la lunghezza di un intervallo in $y$ nella corrispondente lunghezza nella variabile originaria.
:::dimostrazione
Se $g$ è crescente, l'evento $\{Y\le y\}$ coincide con $\{X\le g^{-1}(y)\}$. Si ha quindi $F_Y(y)=F_X(g^{-1}(y))$. Derivando si ottiene il prodotto tra la densità valutata nell'inversa e la derivata dell'inversa. Se $g$ è decrescente, la disuguaglianza si inverte e si ha $F_Y(y)=1-F_X(g^{-1}(y))$, perché i punti singoli hanno probabilità zero. La derivazione introduce un segno meno che rende positivo il fattore associato alla derivata negativa. In entrambi i casi compare il valore assoluto.
:::
::::

:::esempio{titolo="Trasformazione affine decrescente"}
Se $X\sim U(1,4)$ e $Y=9-2X$, gli estremi trasformati sono $7$ e $1$. Quindi la densità di $Y$ è nulla fuori da $(1,7)$. L'inversa è $x=\dfrac{9-y}{2}$ e ha derivata $-\dfrac12$. All'interno del supporto si ottiene $f_Y(y)=\dfrac13\cdot\dfrac12=\dfrac16$. L'area è ancora unitaria perché la lunghezza del supporto è raddoppiata.
:::

:::esempio{titolo="Due rami per una trasformazione quadratica"}
Sia $X\sim U(-2,2)$ e sia $Y=X^2$. L'equazione $x^2=y$ ha due soluzioni per $0<y<4$. Per ottenere la ripartizione si osserva che $X^2\le y$ equivale a $-\sqrt y\le X\le\sqrt y$. L'intervallo ha lunghezza $2\sqrt y$, quindi $F_Y(y)=\dfrac{\sqrt y}{2}$ per $0<y<4$. La densità è $f_Y(y)=\dfrac1{4\sqrt y}$ sullo stesso intervallo. I valori di $F_Y$ sono $0$ a sinistra e $1$ a destra. Per un vettore di variabili e per le trasformazioni che dipendono da più componenti si rimanda al capitolo sulle distribuzioni congiunte.
:::

:::osservazione{titolo="Probabilità e densità della trasformata"}
Per trovare una sola probabilità di $Y=g(X)$ è sufficiente riscrivere l'evento in funzione di $X$. Per esempio, $P(X^2>1)$ si ottiene sommando $P(X<-1)$ e $P(X>1)$, perché i due eventi sono disgiunti. Per ricavare tutta la legge si calcola invece la ripartizione per una soglia variabile $y$ e si deriva sui tratti in cui essa varia. Questa distinzione è utile quando la trasformazione ha più rami e il quesito riguarda una sola soglia.
:::
