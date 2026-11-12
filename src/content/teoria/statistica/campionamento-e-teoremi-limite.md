---
titolo: "Campionamento, legge dei grandi numeri e teorema centrale del limite"
sommario: "Si studia come cambia una statistica da un campione all'altro e si calcolano probabilità esatte, approssimazioni normali e limiti superiori."
---

## Dal campione alla statistica

:::definizione{#campione titolo="Campione casuale e statistica"}
Siano $X_1,\ldots,X_n$ variabili aleatorie con la stessa distribuzione, dove $X_i$ rappresenta il valore della $i$-esima osservazione. Se sono anche indipendenti, la sequenza costituisce un **campione i.i.d.** di numerosità $n$. La distribuzione comune descrive la popolazione nel modello probabilistico.

Una **statistica** è una funzione dei dati e di costanti note. La media, il massimo e il numero di osservazioni che superano una soglia nota sono statistiche. Prima della rilevazione sono variabili aleatorie perché, ripetendo il campionamento, possono assumere valori diversi. Dopo la rilevazione, i numeri $x_1,\ldots,x_n$ sono una realizzazione del campione e permettono di calcolare il valore osservato della statistica.
:::

:::esempio{titolo="Distribuzione della media di due prove"}
Due misure indipendenti valgono ciascuna $0$ o $1$ con la stessa probabilità. I quattro esiti ordinati sono equiprobabili. La media delle due misure vale $0$ nell'esito $(0,0)$, vale $\dfrac12$ negli esiti $(0,1)$ e $(1,0)$ e vale $1$ nell'esito $(1,1)$. Quindi la sua distribuzione assegna probabilità $\dfrac14$, $\dfrac12$ e $\dfrac14$ ai tre valori. Se il campione osservato è $(1,0)$, la media osservata è $\bar x=\dfrac12$.
:::

:::attenzione
La stessa distribuzione marginale per tutte le osservazioni è compatibile con la dipendenza. Sia $Y$ un indicatore che vale $1$ con probabilità $\dfrac12$ e si ponga $X_1=X_2=Y$. Entrambe le osservazioni hanno la stessa legge dell'esempio, però la coppia può assumere solo $(0,0)$ o $(1,1)$. La media vale allora $Y$ e ha varianza $\dfrac14$, mentre la media delle due prove indipendenti ha varianza $\dfrac18$. Nei campioni a grappoli, più misure raccolte nella stessa unità possono presentare una dipendenza di questo tipo.
:::

## Media campionaria ed errore standard

::::teorema{#media-campionaria titolo="Distribuzione della media"}
Sia $X_1,\ldots,X_n$ un campione i.i.d. da una distribuzione di media $\mu$ e varianza finita $\sigma^2$. La **media campionaria** è $\bar X_n=\dfrac{1}{n}\sum_{i=1}^nX_i$. L'**errore standard** di una statistica $T$ con varianza finita è la deviazione standard della sua distribuzione, indicata con $SE(T)$. Per la media si ha
$$
E[\bar X_n]=\mu,\qquad
\operatorname{Var}(\bar X_n)=\frac{\sigma^2}{n},\qquad
SE(\bar X_n)=\frac{\sigma}{\sqrt n}.
$$
Il valore $\sigma$ misura la dispersione delle singole osservazioni. La quantità $SE(\bar X_n)$ misura quanto variano le medie di campioni della stessa numerosità e si esprime nella stessa unità di misura dei dati.

:::dimostrazione
Si usa la linearità dell'attesa per il centro della distribuzione e l'indipendenza per la dispersione. Ogni $X_i$ ha attesa $\mu$, perciò $E[\bar X_n]=\dfrac{n\mu}{n}=\mu$. Le covarianze tra osservazioni distinte valgono zero. La varianza della somma è quindi $n\sigma^2$. Poiché per la media la somma è moltiplicata per $\dfrac1n$, la varianza diventa $\dfrac{n\sigma^2}{n^2}=\dfrac{\sigma^2}{n}$. La radice quadrata dà l'errore standard.
:::
::::

:::esempio{titolo="Precisione di un nuovo campionamento"}
Le singole misure hanno deviazione standard $12\,\mathrm{mm}$. Per un campione di $36$ misure indipendenti, la media ha errore standard $\dfrac{12}{6}\,\mathrm{mm}=2\,\mathrm{mm}$. Per ottenere $1\,\mathrm{mm}$ occorrono almeno $144$ misure, perché $\dfrac{12}{\sqrt n}\le1$ equivale a $n\ge144$. Dimezzare l'errore standard richiede dunque il quadruplo delle osservazioni se la dispersione della popolazione resta la stessa.
:::

:::osservazione{titolo="Stima dell'errore standard"}
Quando $\sigma$ è ignota, per $n\ge2$ si usa la deviazione standard campionaria $S$ calcolata a partire da $S^2=\dfrac{1}{n-1}\sum_{i=1}^n(X_i-\bar X_n)^2$. Lo stimatore dell'errore standard è $\dfrac{S}{\sqrt n}$. Se in un campione di $25$ misure si osserva $s=10\,\mathrm{mm}$, la stima vale $2\,\mathrm{mm}$. Un nuovo campione della stessa dimensione può dare un altro valore di $s$. La stima cambia con i dati, mentre l'errore standard teorico è fissato da $n$ e dalla popolazione.
:::

:::osservazione{titolo="Precisione con una componente comune"}
Un apparecchio può introdurre lo stesso errore aleatorio di calibrazione $B$ in tutte le misure di una sessione. Supponiamo che l'osservazione $i$ abbia la forma $X_i=\mu+B+E_i$, dove gli errori $E_i$ sono indipendenti fra loro e da $B$. Se $\operatorname{Var}(B)=\tau^2$ e ogni $E_i$ ha varianza $\sigma_E^2$, allora
$$
\operatorname{Var}(\bar X_n)=\tau^2+\frac{\sigma_E^2}{n}.
$$
Infatti la media è $\mu+B+\bar E_n$. La varianza di $\bar E_n$ è quella del singolo errore divisa per $n$. Quando le sessioni sono ripetute indipendentemente, la componente di calibrazione cambia tra sessioni e contribuisce alla variabilità delle loro medie. La stessa componente $B$ compare con coefficiente uno in ogni media e conserva la propria varianza. Per esempio, con $\tau=1$, $\sigma_E=4$ e $n=16$, la varianza della media è $1+\dfrac{16}{16}=2$. Se si trattassero tutte le misure come indipendenti, si otterrebbe $\dfrac{17}{16}$, perché ciascuna misura ha varianza $17$. Il confronto mostra l'effetto di una covarianza positiva sulla precisione.
:::

## Distribuzioni esatte da una popolazione normale

::::teorema{#normale-campione titolo="Media e varianza in un campione normale"}
Se $X_1,\ldots,X_n$ sono indipendenti e hanno ciascuna distribuzione $N(\mu,\sigma^2)$ con $\sigma>0$, allora
$$
\bar X_n\sim N\!\left(\mu,\frac{\sigma^2}{n}\right).
$$
Indicando con $\Phi$ la funzione di ripartizione della normale standard, si ha
$$
P(\bar X_n\le a)=\Phi\!\left(\frac{a-\mu}{\dfrac{\sigma}{\sqrt n}}\right).
$$
Il denominatore è l'errore standard della media. La formula dà la probabilità esatta anche per campioni di piccola numerosità.

:::dimostrazione
Una combinazione lineare di normali indipendenti ha legge normale. La media campionaria è una combinazione lineare in cui tutti i coefficienti valgono $\dfrac1n$. Applicando le formule per l'attesa e la varianza si ottengono quindi i due parametri della sua legge. Sottraendo $\mu$ e dividendo per $\dfrac{\sigma}{\sqrt n}$ si ottiene una normale standard.
:::
::::

:::osservazione{titolo="Quantili a coda inferiore"}
Si indica con $z_q$ il quantile della normale standard di ordine $q\in(0,1)$, definito da $\Phi(z_q)=q$. Il quantile di ordine $q$ della media normale è $\mu+z_q\dfrac{\sigma}{\sqrt n}$. Per esempio, se $\mu=80$, $\sigma=12$ e $n=36$, il quantile di ordine $0{,}95$ è circa $83{,}29$, perché $80+1{,}645\cdot2=83{,}29$. Il $5\,\%$ delle medie di campioni ripetuti supera questa soglia.
:::

:::teorema{#student-campione titolo="Statistica t e varianza campionaria"}
Nelle ipotesi del campione normale, per $n\ge2$ la media $\bar X_n$ e la varianza campionaria $S^2$ sono indipendenti e
$$
\frac{(n-1)S^2}{\sigma^2}\sim\chi^2_{n-1},
\qquad
\frac{\bar X_n-\mu}{\dfrac{S}{\sqrt n}}\sim t_{n-1}.
$$
Per ottenere la prima legge si scompone il vettore delle osservazioni normali standardizzate lungo la direzione $(1,\ldots,1)$ e nel sottospazio ortogonale. La prima coordinata determina la media. La somma dei quadrati delle altre $n-1$ coordinate determina la varianza campionaria e ha legge chi quadrato. Le coordinate sono normali standard indipendenti, perciò vale anche l'indipendenza richiesta nella definizione della $t$. Queste due distribuzioni si applicano quando si costruiscono intervalli per la varianza e per la media normale con $\sigma$ ignota.
:::

:::esempio{titolo="Gradi di libertà da un campione di nove misure"}
Per nove osservazioni normali indipendenti, la statistica $\dfrac{\bar X_9-\mu}{\dfrac{S}{3}}$ ha legge $t_8$. Il numero $8$ è anche il numero di gradi di libertà di $\dfrac{8S^2}{\sigma^2}$. Gli scarti dalla media campionaria hanno somma zero, quindi uno di essi è determinato dagli altri otto.
:::

## Limiti di probabilità da media e varianza

::::teorema{#markov titolo="Disuguaglianza di Markov"}
Sia $Y$ una variabile aleatoria non negativa con attesa finita. Per ogni soglia $a>0$,
$$
P(Y\ge a)\le\frac{E[Y]}{a}.
$$
La disuguaglianza permette di controllare la probabilità che una misura superi una soglia quando si conosce la sua attesa.

:::dimostrazione
Si indica con $\mathbf 1_{\{Y\ge a\}}$ l'indicatore dell'evento $Y\ge a$. Sull'evento l'indicatore vale $1$ e $Y$ è almeno $a$. Fuori dall'evento l'indicatore vale $0$ e $Y$ è non negativa. In entrambi i casi $Y\ge a\mathbf 1_{\{Y\ge a\}}$. Prendendo l'attesa si ottiene $E[Y]\ge aP(Y\ge a)$. Poiché $a$ è positivo, si può dividere per $a$.
:::
::::

:::esempio{titolo="Attesa media e ritardi prolungati"}
Un tempo di attesa non negativo ha media $6\,\mathrm{min}$. La probabilità che sia di almeno $24\,\mathrm{min}$ è al più $\dfrac{6}{24}=0{,}25$. Se i soli tempi possibili sono $0$ e $24\,\mathrm{min}$ e il secondo ha probabilità $0{,}25$, il limite è raggiunto. Con un'altra distribuzione avente la stessa media, la probabilità può essere più piccola.
:::

::::teorema{#chebyshev titolo="Disuguaglianza di Chebyshev"}
Sia $X$ una variabile aleatoria con media $\mu$ e varianza finita $\sigma^2$. Per ogni $\varepsilon>0$,
$$
P(|X-\mu|\ge\varepsilon)\le\frac{\sigma^2}{\varepsilon^2}.
$$
L'evento include entrambe le code rispetto al centro $\mu$. Se la soglia è $k\sigma$ con $k>0$ e $\sigma>0$, il limite superiore è $\dfrac{1}{k^2}$.

:::dimostrazione
Lo scarto quadratico $Y=(X-\mu)^2$ è non negativo e ha attesa $\sigma^2$. L'evento $|X-\mu|\ge\varepsilon$ equivale a $Y\ge\varepsilon^2$, poiché i due membri della disuguaglianza in valore assoluto sono non negativi. Applicando Markov a $Y$ con soglia $\varepsilon^2$ si ottiene il limite.
:::
::::

:::esempio{titolo="Garanzia per una media campionaria"}
Siano $16$ misure i.i.d. con deviazione standard $8\,\mathrm{g}$. La varianza della loro media è $4\,\mathrm{g}^2$. Pertanto $P(|\bar X_{16}-\mu|\ge5)\le\dfrac4{25}=0{,}16$, con la soglia espressa in grammi. Prendendo l'evento complementare si ha $P(|\bar X_{16}-\mu|<5)\ge0{,}84$. Se la soglia è così piccola che il rapporto supera $1$, l'unico limite superiore fornito dal calcolo è quello generale $1$.
:::

:::esempio{titolo="Quando il limite di Chebyshev è raggiunto"}
Una variabile centrata $X$ vale $-5$, $0$ e $5$ con probabilità rispettivamente $0{,}08$, $0{,}84$ e $0{,}08$. Per simmetria $E[X]=0$ e la varianza è $E[X^2]=25\cdot0{,}16=4$. Alla soglia $5$ l'evento $|X|\ge5$ ha probabilità $0{,}16$, uguale al limite $\dfrac4{25}$. Se si considera solo la coda $X\ge5$, la probabilità vale invece $0{,}08$. Il limite di Chebyshev riguarda l'unione delle due code, quindi può essere usato anche per una singola coda sfruttando l'inclusione degli eventi. Con i soli momenti, la forma della distribuzione e le probabilità delle singole code restano in generale indeterminate.
:::

## Legge debole dei grandi numeri

::::teorema{#legge-grandi-numeri titolo="Convergenza della media in probabilità"}
Sia $X_1,X_2,\ldots$ una successione di variabili i.i.d. con media $\mu$ e varianza finita $\sigma^2$. Allora $\bar X_n$ converge in probabilità a $\mu$, cioè per ogni tolleranza fissata $\varepsilon>0$ vale
$$
\lim_{n\to\infty}P(|\bar X_n-\mu|>\varepsilon)=0.
$$
La probabilità che la media campionaria sia fuori da un intervallo fissato attorno a $\mu$ diventa arbitrariamente piccola aumentando la numerosità.

:::dimostrazione
Si applica Chebyshev a ogni media campionaria. Il centro della distribuzione è $\mu$ e la varianza vale $\dfrac{\sigma^2}{n}$, quindi
$$
0\le P(|\bar X_n-\mu|>\varepsilon)
\le\frac{\sigma^2}{n\varepsilon^2}.
$$
Fissata $\varepsilon$, il denominatore cresce con $n$ e il limite superiore tende a zero. Il teorema del confronto dà il risultato.
:::
::::

:::esempio{titolo="Frequenze relative di un esito"}
Sia $X_i$ uguale a $1$ se la prova $i$ dà un certo esito e uguale a $0$ altrimenti. Per prove indipendenti con probabilità di successo $p$, gli indicatori sono i.i.d. e hanno attesa $p$. La loro media è la frequenza relativa dei successi e converge in probabilità a $p$. Se $p=0{,}4$ e $n=400$, la probabilità di uno scarto di almeno $0{,}1$ è al più $\dfrac{0{,}4\cdot0{,}6}{400\cdot0{,}1^2}=0{,}06$. Il limite deriva dai soli parametri della Bernoulli.
:::

:::attenzione
La tolleranza della legge debole è fissata prima di mandare $n$ all'infinito. Per esempio, se le osservazioni hanno legge $N(0,1)$, allora $\bar X_n$ ha deviazione standard $\dfrac{1}{\sqrt n}$. Scegliendo proprio $\varepsilon_n=\dfrac{1}{\sqrt n}$ si ottiene $P(|\bar X_n|>\varepsilon_n)=P(|Z|>1)$ con $Z\sim N(0,1)$. La probabilità resta circa $0{,}3173$ per ogni $n$.
:::

## Teorema centrale del limite

:::teorema{#tcl titolo="Limite normale della media standardizzata"}
Siano $X_1,X_2,\ldots$ i.i.d. con media $\mu$ e varianza $0<\sigma^2<\infty$. Definita la media standardizzata $Z_n=\dfrac{\bar X_n-\mu}{\dfrac{\sigma}{\sqrt n}}$, per ogni $z\in\mathbb R$ si ha
$$
\lim_{n\to\infty}P(Z_n\le z)=\Phi(z).
$$
La convergenza riguarda le ripartizioni delle variabili $Z_n$. La media si avvicina a $\mu$ per la legge debole. Centrando la media e dividendola per l'errore standard, il teorema centrale del limite descrive la forma della distribuzione alla scala alla quale gli scarti restano osservabili.
:::

:::osservazione{titolo="Calcolo con l'approssimazione normale"}
Per una numerosità sufficientemente grande, si approssima la legge di $\bar X_n$ con $N\!\left(\mu,\dfrac{\sigma^2}{n}\right)$. Per la somma $T_n=\sum_{i=1}^nX_i=n\bar X_n$ il centro diventa $n\mu$ e la deviazione standard diventa $\sigma\sqrt n$. Le probabilità della media e della somma coincidono quando si convertono le soglie con lo stesso fattore $n$. Per un intervallo, si standardizzano entrambi gli estremi e si sottrae la ripartizione valutata in quello inferiore da quella valutata in quello superiore.
:::

:::esempio{titolo="Una soglia per il consumo totale"}
Il consumo giornaliero di ciascuno di $64$ dispositivi indipendenti ha la stessa legge, con media $5\,\mathrm{kWh}$ e deviazione standard $2\,\mathrm{kWh}$. Per il consumo totale $T_{64}$, la media è $320\,\mathrm{kWh}$ e la deviazione standard è $16\,\mathrm{kWh}$. La soglia di $352\,\mathrm{kWh}$ corrisponde a due errori standard sopra la media, perché $\dfrac{352-320}{16}=2$. Con il teorema centrale del limite si ottiene $P(T_{64}>352)\approx1-\Phi(2)\approx0{,}0228$.
:::

:::attenzione
Il teorema è asintotico. Una soglia fissa come $n=30$ può dare un'approssimazione imprecisa. Per esempio, in $30$ prove Bernoulli con $p=0{,}01$, il numero di successi è zero con probabilità $0{,}99^{30}\approx0{,}7397$. La distribuzione conserva una massa rilevante in un singolo punto. Per probabilità di coda a numerosità fissata, quando è disponibile la legge binomiale si può calcolare il valore esatto.
:::

:::esempio{titolo="Confronto con una legge esatta asimmetrica"}
Si considerino $36$ tempi indipendenti di legge esponenziale con media e deviazione standard entrambe pari a un minuto. Nella scala del totale, la soglia $45$ dista $9$ minuti dalla media. La deviazione standard del totale è $6\,\mathrm{min}$, perciò il teorema centrale del limite dà $P(T_{36}>45)\approx1-\Phi(1{,}5)\approx0{,}0668$. Se si conosce la legge delle singole misure, la somma ha esattamente una legge gamma di forma $36$ e tasso $1$ per minuto. La coda gamma vale circa $0{,}0742$. La probabilità approssimata e quella esatta differiscono perché la somma di esponenziali resta asimmetrica a numerosità finita. Quando il modello gamma è noto, il valore esatto può essere usato per misurare l'errore dell'approssimazione.
:::

## Proporzioni e correzione di continuità

:::teorema{#proporzioni titolo="Distribuzione della proporzione campionaria"}
Siano $X_1,\ldots,X_n$ indicatori i.i.d. di successo con probabilità $p$. Il conteggio $K=\sum_{i=1}^nX_i$ ha legge $\operatorname{Bin}(n,p)$ e la proporzione $\hat p=\dfrac{K}{n}$ ha
$$
E[\hat p]=p,\qquad
\operatorname{Var}(\hat p)=\frac{p(1-p)}{n}.
$$
Le formule seguono da quelle per la media campionaria, poiché $\hat p$ è la media degli indicatori e un indicatore ha varianza $p(1-p)$. Se $0<p<1$, il teorema centrale del limite si applica. Una regola pratica per l'approssimazione normale della binomiale richiede che sia $np$ sia $n(1-p)$ siano almeno $10$.
:::

:::definizione{#correzione-continuita titolo="Correzione di continuità"}
Il conteggio $K$ assume valori interi. Nella sua approssimazione mediante una normale $Y$ di media $np$ e varianza $np(1-p)$, la massa in $k$ viene approssimata dall'area sopra l'intervallo $(k-0{,}5,k+0{,}5)$. Questa scelta si chiama **correzione di continuità**. Per l'evento $a\le K\le b$, con $a,b$ interi, le soglie diventano $a-0{,}5$ e $b+0{,}5$. Per $K\ge k$ si usa la coda a destra di $k-0{,}5$. Prima di correggere la soglia si determina quindi l'insieme degli interi ammessi dall'evento originale.
:::

:::esempio{titolo="Area normale per tre conteggi interi"}
Sia $K\sim\operatorname{Bin}(100,0{,}5)$. L'evento $49\le K\le51$ comprende tre interi, quindi la normale approssimante $Y\sim N(50,25)$ si integra da $48{,}5$ a $51{,}5$. Si ottiene
$$
P(49\le K\le51)
\approx \Phi(0{,}3)-\Phi(-0{,}3)
\approx 0{,}2358.
$$
La somma esatta delle tre masse binomiali è circa $0{,}2356$. Il grafico rappresenta l'area tra $-0{,}3$ e $0{,}3$ sulla scala standardizzata, che corrisponde alle soglie $48{,}5$ e $51{,}5$ sulla scala del conteggio.

::grafico{f="exp(-x^2/2)/sqrt(2*PI)" area="exp(-x^2/2)/sqrt(2*PI);0;-0.3;0.3" segmenti="-0.3,0,-0.3,0.38139;0.3,0,0.3,0.38139" xmin=-3.5 xmax=3.5 ymin=-0.04 ymax=0.46 nomi="z,f" legenda="N(0,1)" titolo="Area tra −0,3 e 0,3 per approssimare i conteggi 49, 50 e 51"}

:::

:::esempio{titolo="Da una percentuale alla coda del conteggio"}
Per $n=120$, l'evento $\hat p>0{,}60$ equivale a $K>72$. Poiché $K$ è intero, il primo conteggio ammesso è $73$. La normale approssimante si integra dunque da $72{,}5$ verso destra, purché i parametri della binomiale rendano adeguata l'approssimazione. Alla scala della proporzione, lo spostamento della soglia equivale a mezzo passo di ampiezza $\dfrac1{120}$.
:::

## Campioni casuali da popolazioni finite

::::teorema{#popolazione-finita titolo="Correzione per popolazione finita"}
Siano $y_1,\ldots,y_N$ i valori di una popolazione finita con $N\ge2$. La media è $\mu_N=\dfrac1N\sum_{i=1}^Ny_i$ e la varianza di popolazione è $\sigma_N^2=\dfrac1N\sum_{i=1}^N(y_i-\mu_N)^2$. In un campione casuale semplice senza reinserimento, tutti i sottoinsiemi di $n$ unità, con $1\le n\le N$, hanno la stessa probabilità. Per la media del campione,
$$
E[\bar X_n]=\mu_N,
\qquad
\operatorname{Var}(\bar X_n)=\frac{\sigma_N^2}{n}\frac{N-n}{N-1}.
$$
La radice di $\dfrac{N-n}{N-1}$ è il fattore che si applica all'errore standard ottenuto con estrazioni indipendenti dalla stessa popolazione.

:::dimostrazione
Si considerano le estrazioni in ordine e si calcola la covarianza tra due posizioni distinte. Ciascuna posizione ha distribuzione uniforme sui valori della popolazione, quindi ha attesa $\mu_N$ e varianza $\sigma_N^2$. Posto $d_i=y_i-\mu_N$, si ha $\sum_i d_i=0$. La somma dei prodotti $d_id_j$ sulle coppie ordinate con $i\ne j$ è perciò $-\sum_i d_i^2=-N\sigma_N^2$. Dividendo per le $N(N-1)$ coppie equiprobabili si ottiene una covarianza di $-\dfrac{\sigma_N^2}{N-1}$.

Nella varianza della somma del campione si contano $n$ varianze e $n(n-1)$ covarianze tra posizioni distinte. Dividendo per $n^2$ per passare dalla somma alla media, si ottiene
$$
\begin{aligned}
\operatorname{Var}(\bar X_n)
&=\frac{1}{n^2}
\left(n\sigma_N^2-\frac{n(n-1)\sigma_N^2}{N-1}\right)\\[6pt]
&=\frac{\sigma_N^2}{n}\frac{N-n}{N-1}.
\end{aligned}
$$
:::
::::

:::esempio{titolo="Precisione con e senza reinserimento"}
Si estraggono $20$ unità da un insieme di $81$ unità con $\sigma_N^2=80$. Senza reinserimento, la varianza della media è $\dfrac{80}{20}\cdot\dfrac{61}{80}=3{,}05$. Con reinserimento indipendente è invece $4$. Se vengono incluse tutte le $81$ unità senza reinserimento, l'errore standard vale zero perché il campione comprende l'intera popolazione.
:::

:::osservazione{titolo="Due convenzioni per la varianza di popolazione"}
Se si usa la varianza $S_N^2=\dfrac1{N-1}\sum_{i=1}^N(y_i-\mu_N)^2$, vale $S_N^2=\dfrac{N}{N-1}\sigma_N^2$. Sostituendo questa identità, la varianza della media diventa $\dfrac{S_N^2}{n}\left(1-\dfrac nN\right)$. Per una popolazione di soli indicatori con proporzione $p$, la varianza con divisore $N$ è $p(1-p)$. La formula per il campione finito si può quindi applicare anche alla proporzione osservata senza reinserimento.
:::

:::esempio{titolo="Distribuzione esatta con tre unità"}
Una popolazione contiene i valori $2$, $4$ e $6$. Si estraggono due unità senza reinserimento. I tre campioni non ordinati hanno la stessa probabilità e producono le medie $3$, $4$ e $5$. La media di queste tre possibilità è $4$, mentre la loro varianza è $\dfrac{1+0+1}{3}=\dfrac23$. Nella popolazione originaria la varianza vale $\dfrac{4+0+4}{3}=\dfrac83$. La formula con la correzione finita dà
$$
\frac{\sigma_N^2}{n}\frac{N-n}{N-1}
=\frac{8}{3\cdot2}\cdot\frac12
=\frac23,
$$
in accordo con il conteggio diretto. Per $n=1$, il fattore di correzione vale $1$, poiché una sola estrazione ha la stessa distribuzione con o senza reinserimento.
:::

:::esempio{titolo="Proporzioni in un lotto finito"}
Un lotto contiene $20$ pezzi, dei quali quattro sono difettosi. Si estraggono tre pezzi senza reinserimento con campionamento casuale semplice. Se $K$ conta i pezzi difettosi, la probabilità di trovarne almeno uno è il complementare del rapporto tra le terne di soli pezzi integri e tutte le terne possibili. Vale quindi $P(K\ge1)=1-\dfrac{\binom{16}{3}}{\binom{20}{3}}\approx0{,}5088$. Per il conteggio esatto si usa la distribuzione ipergeometrica. Per la dispersione della proporzione $\hat p=\dfrac K3$, si parte invece dalla varianza di popolazione degli indicatori, pari a $0{,}2\cdot0{,}8$, e si ottiene $\operatorname{Var}(\hat p)=\dfrac{0{,}16}{3}\cdot\dfrac{17}{19}$. Il conteggio esatto e la formula della varianza si riferiscono allo stesso disegno di campionamento.
:::

## Scelta del modello e del risultato

:::esempio{titolo="La stessa soglia con informazioni diverse"}
Si considerino $25$ misure indipendenti con media $50$ e deviazione standard $10$. La media campionaria ha centro $50$ ed errore standard $2$. Si vuole valutare la probabilità che la media disti dal centro almeno $4$. Dai soli momenti, Chebyshev fornisce il limite superiore $\dfrac{2^2}{4^2}=0{,}25$. Se si sa che le singole misure hanno legge normale, la media ha legge $N(50,4)$ e la stessa probabilità vale esattamente $2\bigl(1-\Phi(2)\bigr)\approx0{,}0455$. L'uguaglianza riguarda il modello normale e la disuguaglianza riguarda tutte le distribuzioni i.i.d. che soddisfano le ipotesi sui momenti. Se la distribuzione di partenza è ignota, usare il secondo valore come approssimazione richiede di valutare l'adeguatezza del teorema centrale del limite alla numerosità considerata.
:::

:::osservazione{titolo="Soglie fisse e soglie standardizzate"}
Per una tolleranza fissata, raddoppiare $n$ dimezza il limite di Chebyshev per lo scarto della media. La soglia corrispondente nella scala standardizzata cresce perché l'errore standard diminuisce. Se si mantiene invece costante il numero di errori standard, per esempio $2$, la tolleranza in unità originali diventa $\dfrac{2\sigma}{\sqrt n}$. La probabilità di oltrepassarla tende allora a $2\bigl(1-\Phi(2)\bigr)$ per il teorema centrale del limite. La scelta tra tolleranza in unità originali e tolleranza in errori standard determina dunque quale probabilità si sta studiando.
:::

:::esempio{titolo="Somma, media e numero di successi"}
Su $80$ componenti si può studiare il peso complessivo oppure il numero di componenti che superano un limite. Nel primo caso, la variabile osservata è il peso e la somma ha errore standard $\sigma\sqrt{80}$ se le misure sono i.i.d. Nel secondo caso ogni componente è rappresentato da un indicatore, quindi il conteggio segue la legge binomiale se gli indicatori sono indipendenti con probabilità comune. Se il lotto è finito e le unità sono scelte senza reinserimento, si applica invece il modello di popolazione finita. Esplicitare quale grandezza è misurata e come sono state selezionate le unità permette di riconoscere le formule applicabili.
:::
