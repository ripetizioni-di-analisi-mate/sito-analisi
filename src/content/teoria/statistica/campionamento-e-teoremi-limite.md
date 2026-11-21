---
titolo: "Campionamento, legge dei grandi numeri e teorema centrale del limite"
sommario: "Si studia come cambia una statistica da un campione all'altro e si calcolano probabilità esatte, approssimazioni normali e limiti superiori."
---

Un'azienda misura la lunghezza di $36$ pezzi scelti a caso da una produzione di molte migliaia e ottiene una media di $81{,}5\,\mathrm{mm}$. La lunghezza media di tutti i pezzi prodotti è un altro numero, che nessuno conosce. Con $36$ pezzi diversi si sarebbe ottenuta un'altra media, per esempio $79{,}8\,\mathrm{mm}$. Questo capitolo calcola di quanto la media di un campione cambia da un campione all'altro. Per esempio, se le lunghezze dei singoli pezzi hanno deviazione standard $12\,\mathrm{mm}$, le medie di campioni di $36$ pezzi hanno deviazione standard $2\,\mathrm{mm}$, e la probabilità che una di esse superi di più di $4\,\mathrm{mm}$ la media di tutta la produzione vale circa $0{,}0228$.

Gli strumenti sono di tre tipi. Il primo è la distribuzione esatta della media, che si ottiene quando le singole misure hanno legge normale. Il secondo sono le disuguaglianze di Markov e di Chebyshev, che danno un limite superiore a una probabilità conoscendo soltanto media e varianza. Il terzo sono due teoremi sul comportamento della media quando il numero di osservazioni cresce, la legge dei grandi numeri e il teorema centrale del limite. Il capitolo tratta anche le proporzioni, come la quota di pezzi difettosi in un campione, e i campioni estratti da una popolazione finita senza reinserimento.

Il capitolo apre la parte del corso sull'inferenza statistica, cioè sul passaggio dal campione all'intera popolazione. Popolazione, campione, parametro e statistica sono stati definiti nel capitolo 1, e la media e la varianza di un insieme di dati nel capitolo 2. Dai capitoli sulla probabilità si usano le variabili aleatorie e le loro leggi (capitoli 5 e 6, in particolare la normale) e le regole per la media e la varianza di una somma (capitolo 7). I risultati di questo capitolo servono nei capitoli successivi: nel capitolo 9 per valutare la precisione di una stima, nel capitolo 10 per costruire gli intervalli di confidenza e nel capitolo 11 per i test di ipotesi.

## Dal campione alla statistica

:::definizione{#campione titolo="Campione casuale e statistica"}
Si estraggono a caso, uno dopo l'altro, $5$ studenti di un grande ateneo e se ne misura l'altezza. Prima dell'estrazione l'altezza del primo studente estratto è un numero aleatorio. I suoi valori possibili e le loro probabilità sono quelli delle altezze di tutti gli iscritti. Se il $30\,\%$ degli iscritti supera i $180\,\mathrm{cm}$, il primo studente estratto supera i $180\,\mathrm{cm}$ con probabilità $0{,}3$, e lo stesso vale per il secondo, il terzo e così via. Le probabilità che riguardano una sola osservazione coincidono quindi con le frequenze relative della popolazione.

Con $n$ osservazioni, siano $X_1,\ldots,X_n$ variabili aleatorie con la stessa distribuzione, dove $X_i$ è il valore della $i$-esima osservazione. Le variabili si dicono indipendenti se, per ogni scelta di insiemi $A_1,\ldots,A_n$, vale
$$
P(X_1\in A_1,\ldots,X_n\in A_n)=P(X_1\in A_1)\cdots P(X_n\in A_n).
$$
Per $n=2$ è la definizione di indipendenza di una coppia data nel capitolo 7. Nell'esempio, la probabilità che tutti e cinque gli studenti superino i $180\,\mathrm{cm}$ vale $0{,}3^5=0{,}00243$. Variabili indipendenti e con la stessa distribuzione si dicono indipendenti e identicamente distribuite, con la sigla i.i.d.; la sequenza $X_1,\ldots,X_n$ costituisce allora un **campione i.i.d.** di numerosità $n$.

Una **statistica** è una funzione dei dati e di costanti note. La media, il massimo e il numero di osservazioni che superano una soglia nota sono statistiche. La quantità $\bar X_n-\mu$, dove $\bar X_n$ è la media delle osservazioni e $\mu$ (si legge mu) è la media ignota della popolazione, non è una statistica, perché per calcolarla serve $\mu$. Prima della rilevazione le statistiche sono variabili aleatorie perché, ripetendo il campionamento, assumono valori diversi. Dopo la rilevazione, i numeri $x_1,\ldots,x_n$ sono una realizzazione del campione e danno il valore osservato della statistica. Se le cinque altezze osservate sono $172$, $181$, $168$, $185$ e $174\,\mathrm{cm}$, la media osservata è $\dfrac{880}{5}=176\,\mathrm{cm}$, il massimo è $185\,\mathrm{cm}$ e le osservazioni sopra i $180\,\mathrm{cm}$ sono $2$.

La distribuzione di una statistica, detta distribuzione campionaria, dà la probabilità con cui la statistica cade in ciascun insieme di valori, considerando tutti i campioni possibili. Il resto del capitolo calcola questa distribuzione per la media e per la proporzione.
:::

:::esempio{titolo="Distribuzione della media di due prove"}
Due misure indipendenti valgono ciascuna $0$ o $1$ con la stessa probabilità, come il risultato di due lanci di una moneta in cui $1$ indica testa. I quattro esiti ordinati sono equiprobabili. La media delle due misure vale $0$ nell'esito $(0,0)$, vale $\dfrac12$ negli esiti $(0,1)$ e $(1,0)$ e vale $1$ nell'esito $(1,1)$. Quindi la sua distribuzione assegna probabilità $\dfrac14$, $\dfrac12$ e $\dfrac14$ ai tre valori. Se il campione osservato è $(1,0)$, la media osservata è $\bar x=\dfrac12$.

::grafico{xmin=-0.27 xmax=1.35 ymin=-0.05 ymax=0.66 nomi="m,p" linee="0,0 0,0.25;0.5,0 0.5,0.5;1,0 1,0.25" punti="0,0.25;0.5,0.5;1,0.25" etichette="0.08,0.31,¼;0.5,0.56,½;1,0.31,¼;0.5,-0.035,½" titolo="La massa della media è doppia in un mezzo, dove confluiscono due esiti ordinati."}
:::

:::attenzione
Più osservazioni possono avere la stessa distribuzione ed essere dipendenti. Sia $Y$ un indicatore che vale $1$ con probabilità $\dfrac12$ e si ponga $X_1=X_2=Y$. Entrambe le osservazioni hanno la stessa legge dell'esempio, però la coppia assume solo i valori $(0,0)$ e $(1,1)$. La media vale allora $Y$ e ha varianza $\dfrac14$, mentre la media delle due prove indipendenti ha varianza $\dfrac18$. Le formule di questo capitolo per la media richiedono perciò l'indipendenza.

Una dipendenza di questo tipo compare quando si misura più volte la stessa unità, oppure nel campionamento a grappoli, in cui si estraggono a caso gruppi di unità, detti grappoli, e si misurano tutte le unità di ciascun gruppo estratto. Le tre misure di spessore di una stessa piastrella del capitolo 1 sono un esempio: se la piastrella è più spessa della media, le tre misure tendono a essere tutte alte.
:::

## Media campionaria ed errore standard

::::teorema{#media-campionaria titolo="Distribuzione della media"}
Nell'esempio delle due prove ciascuna misura ha media $\dfrac12$ e varianza $\dfrac14$. La media delle due misure ha ancora media $\dfrac12$, mentre la sua varianza vale $\dfrac14\cdot\left(-\dfrac12\right)^2+\dfrac12\cdot0^2+\dfrac14\cdot\left(\dfrac12\right)^2=\dfrac18$, cioè la metà della varianza di una misura. Il teorema seguente dice che con $n$ osservazioni indipendenti la varianza della media è quella di una misura divisa per $n$.

Sia $X_1,\ldots,X_n$ un campione i.i.d. da una distribuzione di media $\mu$ e varianza finita $\sigma^2$ (si legge sigma quadro), dove $\sigma$ è la deviazione standard delle singole osservazioni. La **media campionaria** è $\bar X_n=\dfrac{1}{n}\sum_{i=1}^nX_i$. L'**errore standard** di una statistica $T$ con varianza finita è la deviazione standard della sua distribuzione, indicata con $SE(T)$ (dall'inglese standard error). Con $E$ per il valore atteso e $\operatorname{Var}$ per la varianza di una variabile aleatoria (capitolo 5), per la media si ha
$$
E[\bar X_n]=\mu,\qquad
\operatorname{Var}(\bar X_n)=\frac{\sigma^2}{n},\qquad
SE(\bar X_n)=\frac{\sigma}{\sqrt n}.
$$
Il valore $\sigma$ indica di quanto le singole osservazioni si scostano tipicamente da $\mu$. La quantità $SE(\bar X_n)$ indica di quanto si scostano da $\mu$ le medie di campioni della stessa numerosità, nella stessa unità di misura dei dati. Nell'esempio dell'introduzione le lunghezze dei singoli pezzi hanno $\sigma=12\,\mathrm{mm}$, mentre le medie di $36$ pezzi hanno errore standard $2\,\mathrm{mm}$. L'errore standard è la misura della precisione di una media che si usa nei capitoli 9, 10 e 11.

:::dimostrazione
Per il centro della distribuzione si usa la linearità dell'attesa (capitolo 7). Ogni $X_i$ ha attesa $\mu$, perciò $E[\bar X_n]=\dfrac{n\mu}{n}=\mu$. Per la dispersione si usa l'indipendenza. Le covarianze tra osservazioni distinte valgono zero, quindi la varianza della somma è la somma delle varianze (capitolo 7), cioè $n\sigma^2$. Moltiplicando una variabile per $\dfrac1n$ la sua varianza si moltiplica per $\dfrac1{n^2}$, perciò la varianza della media è $\dfrac{n\sigma^2}{n^2}=\dfrac{\sigma^2}{n}$. La radice quadrata dà l'errore standard.
:::
::::

:::esempio{titolo="Precisione di un nuovo campionamento"}
Le singole misure hanno deviazione standard $12\,\mathrm{mm}$. Per un campione di $36$ misure indipendenti, la media ha errore standard $\dfrac{12}{\sqrt{36}}\,\mathrm{mm}=\dfrac{12}{6}\,\mathrm{mm}=2\,\mathrm{mm}$. Per ottenere $1\,\mathrm{mm}$ occorrono almeno $144$ misure, perché $\dfrac{12}{\sqrt n}\le1$ equivale a $\sqrt n\ge12$, cioè a $n\ge144$. Poiché $144=4\cdot36$, dimezzare l'errore standard richiede il quadruplo delle osservazioni, se la dispersione della popolazione resta la stessa.

::grafico{curve="t,12/sqrt(t),4,156" xmin=0 xmax=160 ymin=-0.3 ymax=6.6 nomi="n,SE" legenda="SE=\dfrac{12}{\sqrt n}" punti="36,2;144,1" segmenti="36,0,36,2;144,0,144,1" etichette="44,2.5,n = 36;144,1.5,n = 144" titolo="L'errore standard $\dfrac{12}{\sqrt n}$ in millimetri vale $2$ per $n=36$ e $1$ per $n=144$."}
:::

:::osservazione{titolo="Stima dell'errore standard"}
La formula $\dfrac{\sigma}{\sqrt n}$ contiene la deviazione standard $\sigma$ della popolazione, che di solito è ignota. Al suo posto, per $n\ge2$, si usa la deviazione standard campionaria $S$, cioè la radice della varianza campionaria corretta del capitolo 2:
$$
S^2=\frac{1}{n-1}\sum_{i=1}^n(X_i-\bar X_n)^2.
$$
Lo stimatore dell'errore standard è $\dfrac{S}{\sqrt n}$. Se in un campione di $25$ misure si osserva $s=10\,\mathrm{mm}$, la stima vale $\dfrac{10}{5}\,\mathrm{mm}=2\,\mathrm{mm}$. Un nuovo campione della stessa dimensione dà un altro valore di $s$, per esempio $s=12\,\mathrm{mm}$, e quindi la stima $2{,}4\,\mathrm{mm}$. La stima cambia con i dati, mentre l'errore standard teorico è fissato da $n$ e dalla popolazione.
:::

:::osservazione{titolo="Precisione con una componente comune"}
Un apparecchio introduce lo stesso errore aleatorio di calibrazione $B$ in tutte le misure di una sessione: se in una sessione lo strumento segna $0{,}5\,\mathrm{mm}$ in più, tutte le misure di quella sessione risultano più lunghe di $0{,}5\,\mathrm{mm}$. Supponiamo che l'osservazione $i$ abbia la forma $X_i=\mu+B+E_i$, dove gli errori $E_i$ sono indipendenti fra loro e da $B$. Se $\operatorname{Var}(B)=\tau^2$ ($\tau$ si legge tau) e ogni $E_i$ ha varianza $\sigma_E^2$, allora
$$
\operatorname{Var}(\bar X_n)=\tau^2+\frac{\sigma_E^2}{n}.
$$
Infatti la media è $\mu+B+\bar E_n$, dove $\bar E_n$ è la media degli errori $E_i$. Poiché $B$ e $\bar E_n$ sono indipendenti, le loro varianze si sommano. La varianza di $\bar E_n$ è quella del singolo errore divisa per $n$, per il teorema precedente. La stessa componente $B$ compare invece con coefficiente uno in ogni media, quindi conserva la propria varianza $\tau^2$.

Ne segue che la varianza della media resta maggiore di $\tau^2$ per quanto cresca $n$: aumentando le misure di una sessione si riduce soltanto la parte $\dfrac{\sigma_E^2}{n}$. Quando le sessioni sono ripetute indipendentemente, la componente di calibrazione cambia tra sessioni e contribuisce alla variabilità delle loro medie. Per esempio, con $\tau=1$, $\sigma_E=4$ e $n=16$, la varianza della media è $1+\dfrac{16}{16}=2$, e con $n=1600$ è $1+\dfrac{16}{1600}=1{,}01$. Se si trattassero tutte le misure come indipendenti, si otterrebbe $\dfrac{17}{16}$ per $n=16$, perché ciascuna misura ha varianza $1+16=17$. Il valore corretto $2$ è più grande perché due misure della stessa sessione hanno covarianza positiva, pari a $\tau^2$.

::grafico{curve="t,1+16/t,1,48;t,17/t,1,48" xmin=-0.45 xmax=49 ymin=-0.22 ymax=6.8 nomi="n,V" legenda="1+\dfrac{16}{n};\dfrac{17}{n}" segmenti="16,0,16,2" punti="16,2;16,1.0625" asintoti="y=1" titolo="Con errore comune, la varianza della media tende a 1. Per 16 misure vale 2, mentre con varianza individuale 17 e indipendenza varrebbe 17 sedicesimi."}
:::

## Distribuzioni esatte da una popolazione normale

::::teorema{#normale-campione titolo="Media e varianza in un campione normale"}
Si misurano $36$ pezzi la cui lunghezza ha legge normale con media $80\,\mathrm{mm}$ e deviazione standard $12\,\mathrm{mm}$. Per il teorema precedente la media dei $36$ pezzi ha centro $80\,\mathrm{mm}$ ed errore standard $2\,\mathrm{mm}$. Il teorema seguente aggiunge che anche la media ha legge normale, quindi la probabilità che non superi $83\,\mathrm{mm}$ si ottiene dalla funzione di ripartizione della normale standard, indicata con $\Phi$ (si legge fi) e calcolata con la tavola del capitolo 6. Questa probabilità vale $\Phi\!\left(\dfrac{83-80}{2}\right)=\Phi(1{,}5)\approx0{,}9332$.

Si ricorda dal capitolo 6 che $X\sim N(\mu,\sigma^2)$ indica una variabile con legge normale di media $\mu$ e varianza $\sigma^2$, e che $N(0,1)$ è la normale standard. Se $X_1,\ldots,X_n$ sono indipendenti e hanno ciascuna distribuzione $N(\mu,\sigma^2)$ con $\sigma>0$, allora
$$
\bar X_n\sim N\!\left(\mu,\frac{\sigma^2}{n}\right).
$$
Di conseguenza
$$
P(\bar X_n\le a)=\Phi\!\left(\frac{a-\mu}{\dfrac{\sigma}{\sqrt n}}\right).
$$
Il denominatore è l'errore standard della media. La formula dà la probabilità esatta per ogni numerosità, anche per $n=4$. Il teorema centrale del limite, più avanti nel capitolo, dà invece un valore approssimato che vale per popolazioni non normali quando $n$ è grande.

:::dimostrazione
Si usa il fatto seguente, che si ammette senza dimostrazione: se $Y_1,\ldots,Y_n$ sono normali indipendenti e $a_1,\ldots,a_n$ sono numeri reali non tutti nulli, la combinazione lineare $a_1Y_1+\cdots+a_nY_n$ ha legge normale. Per due addendi lo si verifica calcolando l'integrale della formula di convoluzione del capitolo 7. Per esempio, se $Y_1\sim N(1,4)$ e $Y_2\sim N(2,9)$ sono indipendenti, la somma $Y_1+Y_2$ ha legge $N(3,13)$.

La media campionaria è una combinazione lineare in cui tutti i coefficienti valgono $\dfrac1n$, quindi ha legge normale. Una legge normale è determinata dalla media e dalla varianza, che per il teorema precedente valgono $\mu$ e $\dfrac{\sigma^2}{n}$. Sottraendo $\mu$ e dividendo per $\dfrac{\sigma}{\sqrt n}$ si ottiene una normale standard, per la standardizzazione della normale del capitolo 6. Ne segue la formula per $P(\bar X_n\le a)$.
:::
::::

:::osservazione{titolo="Quantili a coda inferiore"}
Si indica con $z_q$ il quantile della normale standard di ordine $q\in(0,1)$, definito da $\Phi(z_q)=q$. Per esempio $z_{0{,}95}\approx1{,}645$, perché la normale standard lascia a sinistra di $1{,}645$ un'area pari a $0{,}95$. Il quantile di ordine $q$ della media normale è il valore $x$ per cui $P(\bar X_n\le x)=q$. Per il teorema precedente questo significa $\Phi\!\left(\dfrac{x-\mu}{\dfrac{\sigma}{\sqrt n}}\right)=q$, cioè $\dfrac{x-\mu}{\dfrac{\sigma}{\sqrt n}}=z_q$, e quindi
$$
x=\mu+z_q\frac{\sigma}{\sqrt n}.
$$
Per esempio, se $\mu=80$, $\sigma=12$ e $n=36$, il quantile di ordine $0{,}95$ è circa $83{,}29$, perché $80+1{,}645\cdot2=83{,}29$. Il $5\,\%$ delle medie di campioni ripetuti supera questa soglia.
:::

:::teorema{#student-campione titolo="Statistica t e varianza campionaria"}
Quando $\sigma$ è ignota, nella media standardizzata $\dfrac{\bar X_n-\mu}{\dfrac{\sigma}{\sqrt n}}$ si sostituisce $\sigma$ con la deviazione standard campionaria $S$. Per esempio, con nove misure, $\mu=16$, $\bar x=18$ e $s=6$, il valore osservato è $\dfrac{18-16}{\dfrac63}=1$. Il quoziente così ottenuto non ha più legge normale standard, perché il denominatore cambia da un campione all'altro. La sua legge è una delle distribuzioni del capitolo 6, che si richiamano qui.

- Se $Z_1,\ldots,Z_\nu$ sono normali standard indipendenti, la somma $Z_1^2+\cdots+Z_\nu^2$ ha legge chi quadrato con $\nu$ gradi di libertà, indicata con $\chi^2_\nu$ ($\nu$ si legge nu, $\chi$ si legge chi).
- Se $Z\sim N(0,1)$ e $U\sim\chi^2_\nu$ sono indipendenti, il quoziente $\dfrac{Z}{\sqrt{\dfrac{U}{\nu}}}$ ha legge t di Student con $\nu$ gradi di libertà, indicata con $t_\nu$.

Nelle ipotesi del campione normale, per $n\ge2$ la media $\bar X_n$ e la varianza campionaria $S^2$ sono indipendenti e
$$
\frac{(n-1)S^2}{\sigma^2}\sim\chi^2_{n-1},
\qquad
\frac{\bar X_n-\mu}{\dfrac{S}{\sqrt n}}\sim t_{n-1}.
$$
Il numero di gradi di libertà è $n-1$ perché gli $n$ scarti $X_i-\bar X_n$ hanno somma zero, dato che $\sum_{i=1}^n(X_i-\bar X_n)=\sum_{i=1}^nX_i-n\bar X_n=0$. Perciò, noti $n-1$ scarti, l'ultimo è determinato. La dimostrazione della prima legge e dell'indipendenza di $\bar X_n$ e $S^2$ usa un cambio di coordinate nello spazio delle $n$ osservazioni, che scompone il vettore delle osservazioni standardizzate lungo la direzione $(1,\ldots,1)$ e nelle direzioni perpendicolari; richiede l'algebra lineare e qui si omette.

La seconda legge segue dalla prima e dalla definizione di $t_\nu$. Si pone $Z=\dfrac{\bar X_n-\mu}{\dfrac{\sigma}{\sqrt n}}$, che ha legge $N(0,1)$ per il teorema precedente, e $U=\dfrac{(n-1)S^2}{\sigma^2}$, che ha legge $\chi^2_{n-1}$ ed è indipendente da $Z$. Poiché $\sqrt{\dfrac{U}{n-1}}=\dfrac{S}{\sigma}$, si ottiene
$$
\frac{Z}{\sqrt{\dfrac{U}{n-1}}}
=\frac{\bar X_n-\mu}{\dfrac{\sigma}{\sqrt n}}\cdot\frac{\sigma}{S}
=\frac{\bar X_n-\mu}{\dfrac{S}{\sqrt n}},
$$
che ha quindi legge $t_{n-1}$. Queste due distribuzioni si applicano quando si costruiscono intervalli per la varianza e per la media normale con $\sigma$ ignota (capitolo 10) e nei test sulla media (capitolo 11).
:::

:::esempio{titolo="Gradi di libertà da un campione di nove misure"}
Per nove osservazioni normali indipendenti, la statistica $\dfrac{\bar X_9-\mu}{\dfrac{S}{3}}$ ha legge $t_8$. Il numero $8$ è anche il numero di gradi di libertà di $\dfrac{8S^2}{\sigma^2}$. Gli scarti dalla media campionaria hanno somma zero, quindi uno di essi è determinato dagli altri otto: se otto scarti hanno somma $-3$, il nono vale $3$.

La densità della $t_8$ vale circa $0{,}387$ in zero, contro $0{,}399$ della normale standard, e in $3$ vale circa $0{,}013$, contro $0{,}0044$. La $t_8$ assegna quindi più probabilità alle code, perché al denominatore della statistica compare la stima $S$ al posto di $\sigma$, e nei campioni in cui $S$ risulta piccola il quoziente diventa grande.

::grafico{f="0.386699*(1+x^2/8)^(-4.5);exp(-x^2/2)/sqrt(2*PI)" xmin=-4.2 xmax=4.2 ymin=-0.03 ymax=0.46 nomi="t,f" legenda="t_8;N(0,1)" titolo="Densità della $t_8$ e della normale standard. Le code della $t_8$ sono più alte."}
:::

## Limiti di probabilità da media e varianza

::::teorema{#markov titolo="Disuguaglianza di Markov"}
Un tempo di attesa non negativo ha media $6\,\mathrm{min}$. Se più del $25\,\%$ delle attese durasse almeno $24\,\mathrm{min}$, queste attese da sole contribuirebbero alla media per più di $0{,}25\cdot24=6\,\mathrm{min}$, e la media supererebbe $6\,\mathrm{min}$, perché le altre attese non sono negative. Quindi la probabilità di un'attesa di almeno $24\,\mathrm{min}$ è al più $0{,}25$. Lo stesso ragionamento vale per ogni variabile non negativa.

Sia $Y$ una variabile aleatoria non negativa con attesa finita. Per ogni soglia $a>0$,
$$
P(Y\ge a)\le\frac{E[Y]}{a}.
$$
La disuguaglianza dà un limite superiore alla probabilità che una misura superi una soglia usando soltanto la sua attesa, senza conoscerne la distribuzione.

:::dimostrazione
Si indica con $\mathbf 1_{\{Y\ge a\}}$ l'indicatore dell'evento $Y\ge a$, cioè la variabile che vale $1$ se l'evento si verifica e $0$ altrimenti. Sull'evento l'indicatore vale $1$ e $Y$ è almeno $a$. Fuori dall'evento l'indicatore vale $0$ e $Y$ è non negativa. In entrambi i casi $Y\ge a\mathbf 1_{\{Y\ge a\}}$. L'attesa conserva le disuguaglianze e l'attesa di un indicatore è la probabilità del suo evento, quindi $E[Y]\ge aP(Y\ge a)$. Poiché $a$ è positivo, si può dividere per $a$.
:::
::::

:::esempio{titolo="Attesa media e ritardi prolungati"}
Un tempo di attesa non negativo ha media $6\,\mathrm{min}$. La probabilità che sia di almeno $24\,\mathrm{min}$ è al più $\dfrac{6}{24}=0{,}25$. Se i soli tempi possibili sono $0$ e $24\,\mathrm{min}$ e il secondo ha probabilità $0{,}25$, la media vale $0{,}25\cdot24=6\,\mathrm{min}$ e il limite è raggiunto. Con un'altra distribuzione avente la stessa media la probabilità è più piccola: se l'attesa vale sempre esattamente $6\,\mathrm{min}$, la probabilità di arrivare a $24\,\mathrm{min}$ è zero.
:::

::::teorema{#chebyshev titolo="Disuguaglianza di Chebyshev"}
Una misura ha media $50$ e deviazione standard $3$, e la sua distribuzione è ignota. La disuguaglianza seguente dice che uno scarto dalla media di almeno $6$, in una direzione o nell'altra, ha probabilità al più $\dfrac{3^2}{6^2}=0{,}25$.

Sia $X$ una variabile aleatoria con media $\mu$ e varianza finita $\sigma^2$. Per ogni $\varepsilon>0$ ($\varepsilon$ si legge epsilon),
$$
P(|X-\mu|\ge\varepsilon)\le\frac{\sigma^2}{\varepsilon^2}.
$$
L'evento $|X-\mu|\ge\varepsilon$ comprende entrambe le code rispetto al centro $\mu$, cioè $X\le\mu-\varepsilon$ e $X\ge\mu+\varepsilon$. Se la soglia è $k\sigma$ con $k>0$ e $\sigma>0$, il limite superiore è $\dfrac{\sigma^2}{k^2\sigma^2}=\dfrac{1}{k^2}$: per $k=2$, come nell'esempio, vale $0{,}25$.

:::dimostrazione
Lo scarto quadratico $Y=(X-\mu)^2$ è non negativo e ha attesa $\sigma^2$, per la definizione di varianza. L'evento $|X-\mu|\ge\varepsilon$ equivale a $Y\ge\varepsilon^2$, perché fra due numeri non negativi elevare al quadrato conserva l'ordine. Applicando la disuguaglianza di Markov a $Y$ con soglia $\varepsilon^2$ si ottiene $P(Y\ge\varepsilon^2)\le\dfrac{\sigma^2}{\varepsilon^2}$.
:::
::::

:::esempio{titolo="Garanzia per una media campionaria"}
Siano $16$ misure i.i.d. con deviazione standard $8\,\mathrm{g}$. La varianza della loro media è $\dfrac{64}{16}=4\,\mathrm{g}^2$. Pertanto $P(|\bar X_{16}-\mu|\ge5)\le\dfrac4{25}=0{,}16$, con la soglia espressa in grammi. Prendendo l'evento complementare si ha $P(|\bar X_{16}-\mu|<5)\ge1-0{,}16=0{,}84$. Se la soglia è così piccola che il rapporto supera $1$, l'unico limite superiore fornito dal calcolo è quello generale $1$: con la soglia $1\,\mathrm{g}$ il rapporto vale $\dfrac41=4$, e una probabilità è comunque al più $1$.
:::

:::esempio{titolo="Quando il limite di Chebyshev è raggiunto"}
Una variabile centrata $X$ vale $-5$, $0$ e $5$ con probabilità rispettivamente $0{,}08$, $0{,}84$ e $0{,}08$. Per simmetria $E[X]=0$ e la varianza è $E[X^2]=25\cdot0{,}16=4$. Alla soglia $5$ l'evento $|X|\ge5$ ha probabilità $0{,}16$, uguale al limite $\dfrac4{25}$.

Se si considera solo la coda $X\ge5$, la probabilità vale invece $0{,}08$. Il limite di Chebyshev vale anche per una sola coda, perché $\{X\ge5\}\subseteq\{|X|\ge5\}$ e quindi $P(X\ge5)\le P(|X|\ge5)\le0{,}16$. Media e varianza da sole non determinano la probabilità di una singola coda. La variabile che vale $-\dfrac53$, $0$ e $5$ con probabilità $0{,}36$, $0{,}52$ e $0{,}12$ ha ancora media $0$ e varianza $4$, ma $P(X\ge5)=0{,}12$.

::grafico{xmin=-7 xmax=7 ymin=-0.06 ymax=1 nomi="x,p" linee="-5,0 -5,0.08;0,0 0,0.84;5,0 5,0.08" punti="-5,0.08;0,0.84;5,0.08" etichette="-5,0.15,0,08;0.9,0.84,0,84;5,0.15,0,08" titolo="Le due code $|X|\ge5$ hanno probabilità complessiva $0{,}16$, uguale al limite $\dfrac{4}{25}$ di Chebyshev."}
:::

## Legge debole dei grandi numeri

::::teorema{#legge-grandi-numeri titolo="Convergenza della media in probabilità"}
Le singole misure hanno varianza $4$. La media di $100$ misure ha varianza $\dfrac{4}{100}=0{,}04$, e la disuguaglianza di Chebyshev con tolleranza $0{,}5$ dà $P(|\bar X_{100}-\mu|\ge0{,}5)\le\dfrac{0{,}04}{0{,}25}=0{,}16$. Con $1000$ misure il limite scende a $\dfrac{0{,}004}{0{,}25}=0{,}016$. Aumentando il numero di misure, il limite tende a zero per ogni tolleranza fissata.

Sia $X_1,X_2,\ldots$ una successione di variabili i.i.d. con media $\mu$ e varianza finita $\sigma^2$. Allora $\bar X_n$ converge in probabilità a $\mu$, cioè per ogni tolleranza fissata $\varepsilon>0$ vale
$$
\lim_{n\to\infty}P(|\bar X_n-\mu|>\varepsilon)=0.
$$
La probabilità che la media campionaria sia fuori dall'intervallo da $\mu-\varepsilon$ a $\mu+\varepsilon$ diventa piccola quanto si vuole aumentando la numerosità. Questo risultato si chiama **legge debole dei grandi numeri**; la parola «debole» la distingue da un enunciato più forte sulla stessa media, che non si tratta in questo corso.

:::dimostrazione
Si applica la disuguaglianza di Chebyshev a ogni media campionaria. Il centro della distribuzione è $\mu$ e la varianza vale $\dfrac{\sigma^2}{n}$. Poiché l'evento $|\bar X_n-\mu|>\varepsilon$ è contenuto nell'evento $|\bar X_n-\mu|\ge\varepsilon$, si ha
$$
0\le P(|\bar X_n-\mu|>\varepsilon)
\le\frac{\sigma^2}{n\varepsilon^2}.
$$
Fissata $\varepsilon$, il denominatore cresce con $n$ e il limite superiore tende a zero. Il teorema del confronto per i limiti dà il risultato.
:::
::::

:::esempio{titolo="Frequenze relative di un esito"}
Sia $X_i$ uguale a $1$ se la prova $i$ dà un certo esito e uguale a $0$ altrimenti. Per prove indipendenti con probabilità di successo $p$, gli indicatori sono i.i.d. e hanno attesa $p$ e varianza $p(1-p)$, come ogni variabile di Bernoulli (capitolo 5). La loro media è la frequenza relativa dei successi e converge in probabilità a $p$. Se $p=0{,}4$ e $n=400$, la probabilità di uno scarto di almeno $0{,}1$ è al più $\dfrac{0{,}4\cdot0{,}6}{400\cdot0{,}1^2}=\dfrac{0{,}24}{4}=0{,}06$. Il limite deriva dai soli parametri della Bernoulli. Il risultato giustifica la lettura della probabilità di un esito come frequenza relativa su un grande numero di prove ripetute.

::grafico{curve="t,24/t,24,990" xmin=0 xmax=1000 ymin=-0.06 ymax=1.12 nomi="n,L" legenda="L=\dfrac{24}{n}" punti="400,0.06" segmenti="400,0,400,0.06" etichette="400,0.17,n = 400" titolo="Limite di Chebyshev $\dfrac{0{,}4\cdot0{,}6}{n\cdot0{,}1^2}=\dfrac{24}{n}$ per uno scarto di almeno $0{,}1$. Per $n=400$ vale $0{,}06$."}
:::

:::attenzione
La tolleranza della legge debole è fissata prima di mandare $n$ all'infinito. Se la tolleranza diminuisce insieme a $n$, la probabilità non tende a zero. Per esempio, se le osservazioni hanno legge $N(0,1)$, allora $\bar X_n$ ha legge $N\!\left(0,\dfrac1n\right)$ e deviazione standard $\dfrac{1}{\sqrt n}$. Scegliendo proprio $\varepsilon_n=\dfrac{1}{\sqrt n}$ si ottiene $P(|\bar X_n|>\varepsilon_n)=P(|Z|>1)$ con $Z=\sqrt n\,\bar X_n\sim N(0,1)$. La probabilità vale $2\bigl(1-\Phi(1)\bigr)\approx0{,}3173$ per ogni $n$.
:::

## Teorema centrale del limite

:::teorema{#tcl titolo="Limite normale della media standardizzata"}
Il risultato di un dado equilibrato ha distribuzione uniforme sui valori da $1$ a $6$, lontana dalla forma a campana della normale. La media di due dadi vale già $3{,}5$ con probabilità $\dfrac{6}{36}$ e vale $1$ con probabilità $\dfrac1{36}$, quindi i valori centrali sono i più probabili. Aumentando il numero di dadi, la distribuzione della media, centrata e divisa per l'errore standard, si avvicina alla normale standard. Il teorema seguente dice che lo stesso accade per ogni distribuzione con varianza finita e positiva.

Siano $X_1,X_2,\ldots$ i.i.d. con media $\mu$ e varianza $0<\sigma^2<\infty$. Definita la media standardizzata $Z_n=\dfrac{\bar X_n-\mu}{\dfrac{\sigma}{\sqrt n}}$, per ogni $z\in\mathbb R$ si ha
$$
\lim_{n\to\infty}P(Z_n\le z)=\Phi(z).
$$
La convergenza riguarda le funzioni di ripartizione delle variabili $Z_n$. Quando le funzioni di ripartizione di una successione di variabili convergono in questo modo a quella di una variabile $Z$, si dice che la successione **converge in distribuzione** a $Z$; il teorema dice quindi che $Z_n$ converge in distribuzione a una normale standard.

Per $n$ grande vale perciò $P(Z_n\le z)\approx\Phi(z)$, qualunque sia la legge delle singole osservazioni, purché abbiano varianza finita e positiva. Tornando alla media, $\bar X_n$ ha approssimativamente legge $N\!\left(\mu,\dfrac{\sigma^2}{n}\right)$. Le due leggi limite dicono cose diverse. La legge debole dice che $\bar X_n$ si concentra attorno a $\mu$. Il teorema centrale del limite dice come sono distribuiti gli scarti $\bar X_n-\mu$ misurati in errori standard: per esempio la media dista da $\mu$ più di due errori standard con probabilità vicina a $2\bigl(1-\Phi(2)\bigr)\approx0{,}0455$, per ogni $n$ grande. Su questo si basano gli intervalli di confidenza e i test per popolazioni non normali dei capitoli 10 e 11.
:::

:::osservazione{titolo="Calcolo con l'approssimazione normale"}
Quando $n$ è grande, si approssima la legge di $\bar X_n$ con $N\!\left(\mu,\dfrac{\sigma^2}{n}\right)$. Il teorema non indica da quale $n$ l'approssimazione sia buona: l'avvertenza dopo l'esempio seguente mostra un caso in cui $n=30$ non basta, e per i conteggi binomiali il paragrafo sulle proporzioni dà una regola pratica.

Per la somma $T_n=\sum_{i=1}^nX_i=n\bar X_n$ il centro diventa $n\mu$ e la deviazione standard diventa $\sigma\sqrt n$. Le probabilità della media e della somma coincidono quando si convertono le soglie con lo stesso fattore $n$. Con $n=64$, $\mu=5$ e $\sigma=2$, per esempio, l'evento $T_{64}>352$ coincide con $\bar X_{64}>\dfrac{352}{64}=5{,}5$, e le due soglie standardizzate sono uguali: $\dfrac{352-320}{16}=2$ e $\dfrac{5{,}5-5}{0{,}25}=2$. Per un intervallo, si standardizzano entrambi gli estremi e si sottrae la ripartizione valutata in quello inferiore da quella valutata in quello superiore.
:::

:::esempio{titolo="Una soglia per il consumo totale"}
Il consumo giornaliero di ciascuno di $64$ dispositivi indipendenti ha la stessa legge, con media $5\,\mathrm{kWh}$ e deviazione standard $2\,\mathrm{kWh}$. Per il consumo totale $T_{64}$, la media è $64\cdot5=320\,\mathrm{kWh}$ e la deviazione standard è $2\sqrt{64}=16\,\mathrm{kWh}$. La soglia di $352\,\mathrm{kWh}$ corrisponde a due errori standard sopra la media, perché $\dfrac{352-320}{16}=2$. Con il teorema centrale del limite si ottiene $P(T_{64}>352)\approx1-\Phi(2)\approx0{,}0228$.

::grafico{f="exp(-x^2/2)/sqrt(2*PI)" area="exp(-x^2/2)/sqrt(2*PI);0;2;3.9" segmenti="2,0,2,0.05399" xmin=-3.9 xmax=4 ymin=-0.035 ymax=0.46 nomi="z,f" legenda="N(0,1)" etichette="2.1,0.11,352 kWh;0.1,0.42,320 kWh" titolo="La soglia di $352\,\mathrm{kWh}$ corrisponde a $z=2$. L'area colorata approssima $P(T_{64}>352)\approx0{,}0228$."}
:::

:::attenzione
Il teorema è asintotico, cioè dice che cosa accade quando $n$ tende all'infinito, e non indica da quale numerosità l'approssimazione sia buona. Per esempio, in $30$ prove Bernoulli con $p=0{,}01$, il numero di successi è zero con probabilità $0{,}99^{30}\approx0{,}7397$. La distribuzione conserva una massa rilevante in un singolo punto. La normale con la stessa media $0{,}3$ e la stessa deviazione standard $\sqrt{0{,}297}\approx0{,}545$ assegna ai valori minori di $0{,}5$, cioè più vicini a $0$ che a $1$, la probabilità $\Phi\!\left(\dfrac{0{,}5-0{,}3}{0{,}545}\right)\approx0{,}643$, lontana dal valore esatto $0{,}7397$. Per probabilità di coda a numerosità fissata, quando è disponibile la legge binomiale si calcola il valore esatto.
:::

:::esempio{titolo="Confronto con una legge esatta asimmetrica"}
Si considerino $36$ tempi indipendenti di legge esponenziale con media e deviazione standard entrambe pari a un minuto, cioè con tasso $1$ per minuto (capitolo 6). Il totale $T_{36}$ ha media $36\,\mathrm{min}$ e deviazione standard $\sqrt{36}=6\,\mathrm{min}$. La soglia $45$ dista $9$ minuti dalla media, cioè $\dfrac96=1{,}5$ deviazioni standard, perciò il teorema centrale del limite dà $P(T_{36}>45)\approx1-\Phi(1{,}5)\approx0{,}0668$.

In questo caso si conosce anche la legge esatta del totale. La somma di $n$ esponenziali indipendenti di tasso $\lambda$ ($\lambda$ si legge lambda) ha legge gamma di forma $n$ e tasso $\lambda$, la famiglia definita nel capitolo 6. Per $n=2$ lo si verifica con la formula di convoluzione del capitolo 7: se $Y_1$ e $Y_2$ sono esponenziali indipendenti di tasso $\lambda$, la densità della somma $Y_1+Y_2$ in un punto $s>0$ è
$$
f_{Y_1+Y_2}(s)=\int_0^s\lambda e^{-\lambda x}\,\lambda e^{-\lambda(s-x)}\,dx=\lambda^2se^{-\lambda s},
$$
che è la densità gamma di forma $2$; si procede poi aggiungendo un addendo alla volta. Qui la somma ha quindi esattamente una legge gamma di forma $36$ e tasso $1$ per minuto. La coda gamma vale circa $0{,}0742$. La probabilità approssimata e quella esatta differiscono di circa $0{,}0074$, perché la somma di esponenziali resta asimmetrica a numerosità finita, con la coda destra più lunga della sinistra. Quando il modello gamma è noto, il valore esatto misura l'errore dell'approssimazione: qui la normale sottostima la coda di circa il $10\,\%$.

::grafico{f="exp(35*log(x+1e-12)-x-92.1361756);exp(-((x-36)/6)^2/2)/(6*sqrt(2*PI))" area="exp(35*log(x)-x-92.1361756);0;45;60" segmenti="45,0,45,0.02018" xmin=0 xmax=60 ymin=-0.005 ymax=0.078 nomi="t,f" legenda="\text{gamma di forma }36;N(36,36)" titolo="Densità esatta del totale e normale approssimante. L'area colorata è la coda esatta $P(T_{36}>45)\approx0{,}0742$."}
:::

## Proporzioni e correzione di continuità

:::teorema{#proporzioni titolo="Distribuzione della proporzione campionaria"}
Si controllano $400$ pezzi, ciascuno difettoso con probabilità $0{,}2$ indipendentemente dagli altri. Se $K$ è il numero di pezzi difettosi trovati, la quota di difettosi nel campione è $\dfrac{K}{400}$: con $K=86$ vale $0{,}215$. Il teorema seguente dice che questa quota ha media $0{,}2$ ed errore standard $\sqrt{\dfrac{0{,}2\cdot0{,}8}{400}}=0{,}02$.

Siano $X_1,\ldots,X_n$ indicatori i.i.d. di successo con probabilità $p$, cioè variabili di Bernoulli (capitolo 5). Il conteggio $K=\sum_{i=1}^nX_i$ ha legge binomiale $\operatorname{Bin}(n,p)$ e la **proporzione campionaria** $\hat p=\dfrac{K}{n}$ ($\hat p$ si legge p cappuccio) ha
$$
E[\hat p]=p,\qquad
\operatorname{Var}(\hat p)=\frac{p(1-p)}{n}.
$$
Le formule seguono da quelle per la media campionaria, poiché $\hat p$ è la media degli indicatori e un indicatore ha media $p$ e varianza $p(1-p)$. Se $0<p<1$, la varianza $p(1-p)$ è positiva e il teorema centrale del limite si applica. Una regola pratica per l'approssimazione normale della binomiale richiede che sia $np$ sia $n(1-p)$ siano almeno $10$: nell'esempio $np=80$ e $n(1-p)=320$. La proporzione campionaria è la statistica con cui il capitolo 9 stima una proporzione della popolazione, come la quota di pezzi difettosi in tutta la produzione.
:::

:::definizione{#correzione-continuita titolo="Correzione di continuità"}
Sia $K\sim\operatorname{Bin}(100,0{,}5)$, con media $50$ e varianza $100\cdot0{,}5\cdot0{,}5=25$. La probabilità $P(K=50)$ è positiva, mentre una normale assegna probabilità zero a ogni singolo punto. Nell'istogramma della binomiale ogni rettangolo ha base $1$ centrata sul conteggio $k$ e altezza $P(K=k)$, quindi la sua area è la massa in $k$. La massa in $50$ è perciò rappresentata dall'area del rettangolo fra $49{,}5$ e $50{,}5$, e la normale si integra su quell'intervallo. Allo stesso modo, i tre rettangoli dei conteggi $49$, $50$ e $51$ coprono l'intervallo da $48{,}5$ a $51{,}5$, dove si integra la densità normale di media $50$ e varianza $25$.

Il conteggio $K$ di una binomiale assume valori interi. Nella sua approssimazione mediante una normale $Y$ di media $np$ e varianza $np(1-p)$, la massa in $k$ viene approssimata dall'area sopra l'intervallo $(k-0{,}5,k+0{,}5)$. Questa scelta si chiama **correzione di continuità**.

- Per l'evento $a\le K\le b$, con $a,b$ interi, le soglie diventano $a-0{,}5$ e $b+0{,}5$.
- Per $K\ge k$ si usa la coda a destra di $k-0{,}5$.
- Per $K\le k$ si usa la coda a sinistra di $k+0{,}5$.

Un evento con una disuguaglianza stretta si scrive prima come insieme di interi. Per esempio $K>72$ equivale a $K\ge73$, quindi la coda corretta parte da $72{,}5$; analogamente $K<65$ equivale a $K\le64$ e si usa la coda a sinistra di $64{,}5$.

::grafico{f="exp(-((x-50)/5)^2/2)/(5*sqrt(2*PI))" area="exp(-((x-50)/5)^2/2)/(5*sqrt(2*PI));0;48.5;51.5" linee="41.5,0 41.5,0.02229 42.5,0.02229 42.5,0;42.5,0 42.5,0.03007 43.5,0.03007 43.5,0;43.5,0 43.5,0.03895 44.5,0.03895 44.5,0;44.5,0 44.5,0.04847 45.5,0.04847 45.5,0;45.5,0 45.5,0.05796 46.5,0.05796 46.5,0;46.5,0 46.5,0.06659 47.5,0.06659 47.5,0;47.5,0 47.5,0.07353 48.5,0.07353 48.5,0;48.5,0 48.5,0.07803 49.5,0.07803 49.5,0;49.5,0 49.5,0.07959 50.5,0.07959 50.5,0;50.5,0 50.5,0.07803 51.5,0.07803 51.5,0;51.5,0 51.5,0.07353 52.5,0.07353 52.5,0;52.5,0 52.5,0.06659 53.5,0.06659 53.5,0;53.5,0 53.5,0.05796 54.5,0.05796 54.5,0;54.5,0 54.5,0.04847 55.5,0.04847 55.5,0;55.5,0 55.5,0.03895 56.5,0.03895 56.5,0;56.5,0 56.5,0.03007 57.5,0.03007 57.5,0;57.5,0 57.5,0.02229 58.5,0.02229 58.5,0" xmin=37.2 xmax=61 ymin=-0.006 ymax=0.095 nomi="k,p" legenda="N(50,25)" titolo="Istogramma di $\operatorname{Bin}(100,0{,}5)$ e densità normale. L'area colorata, da $48{,}5$ a $51{,}5$, approssima la massa dei conteggi $49$, $50$ e $51$."}
:::

:::esempio{titolo="Area normale per tre conteggi interi"}
Sia $K\sim\operatorname{Bin}(100,0{,}5)$. L'evento $49\le K\le51$ comprende tre interi, quindi la normale approssimante $Y\sim N(50,25)$ si integra da $48{,}5$ a $51{,}5$. Le soglie standardizzate sono $\dfrac{48{,}5-50}{5}=-0{,}3$ e $\dfrac{51{,}5-50}{5}=0{,}3$. Si ottiene
$$
P(49\le K\le51)
\approx \Phi(0{,}3)-\Phi(-0{,}3)
\approx 0{,}2358.
$$
La somma esatta delle tre masse binomiali è circa $0{,}2356$. Il grafico rappresenta l'area tra $-0{,}3$ e $0{,}3$ sulla scala standardizzata, che corrisponde alle soglie $48{,}5$ e $51{,}5$ sulla scala del conteggio.

::grafico{f="exp(-x^2/2)/sqrt(2*PI)" area="exp(-x^2/2)/sqrt(2*PI);0;-0.3;0.3" segmenti="-0.3,0,-0.3,0.38139;0.3,0,0.3,0.38139" xmin=-3.5 xmax=3.5 ymin=-0.04 ymax=0.46 nomi="z,f" legenda="N(0,1)" titolo="Area tra −0,3 e 0,3 per approssimare i conteggi 49, 50 e 51"}

:::

:::esempio{titolo="Da una percentuale alla coda del conteggio"}
In $n=120$ prove indipendenti con probabilità di successo $p=0{,}55$, si vuole approssimare la probabilità che la proporzione di successi superi il $60\,\%$. La regola pratica è soddisfatta, perché $np=66$ e $n(1-p)=54$ sono almeno $10$. L'evento $\hat p>0{,}60$ equivale a $K>0{,}60\cdot120$, cioè a $K>72$. Poiché $K$ è intero, il primo conteggio ammesso è $73$, quindi la normale approssimante si integra da $72{,}5$ verso destra. Alla scala della proporzione, lo spostamento della soglia equivale a mezzo passo di ampiezza $\dfrac1{120}$.

La normale ha media $66$ e deviazione standard $\sqrt{120\cdot0{,}55\cdot0{,}45}=\sqrt{29{,}7}\approx5{,}45$. Si ottiene
$$
P(K>72)\approx1-\Phi\!\left(\frac{72{,}5-66}{5{,}45}\right)\approx1-\Phi(1{,}19)\approx0{,}117.
$$
:::

## Campioni casuali da popolazioni finite

::::teorema{#popolazione-finita titolo="Correzione per popolazione finita"}
Una popolazione contiene i valori $2$, $4$ e $6$, con media $4$ e varianza $\dfrac{4+0+4}{3}=\dfrac83$. Estraendo due unità con reinserimento, cioè rimettendo in gioco l'unità già estratta, la media del campione ha varianza $\dfrac{8}{3\cdot2}=\dfrac43$ per il teorema sulla media campionaria. Estraendo due unità distinte, l'esempio «Distribuzione esatta con tre unità», più avanti, trova invece la varianza $\dfrac23$, cioè la metà. Il teorema seguente calcola questa riduzione in generale.

Siano $y_1,\ldots,y_N$ i valori di una popolazione finita con $N\ge2$. La media è $\mu_N=\dfrac1N\sum_{i=1}^Ny_i$ e la varianza di popolazione è $\sigma_N^2=\dfrac1N\sum_{i=1}^N(y_i-\mu_N)^2$. In un campione casuale semplice senza reinserimento, definito nel capitolo 1, tutti i sottoinsiemi di $n$ unità, con $1\le n\le N$, hanno la stessa probabilità. Per la media del campione,
$$
E[\bar X_n]=\mu_N,
\qquad
\operatorname{Var}(\bar X_n)=\frac{\sigma_N^2}{n}\frac{N-n}{N-1}.
$$
La radice di $\dfrac{N-n}{N-1}$ è il fattore che si applica all'errore standard ottenuto con estrazioni indipendenti dalla stessa popolazione. Il fattore conta quando il campione è una parte non piccola della popolazione. Se si estraggono $n=200$ studenti da $N=12000$, come nel capitolo 1, il fattore $\dfrac{11800}{11999}\approx0{,}983$ cambia la varianza di meno del $2\,\%$.

:::dimostrazione
Si considerano le estrazioni in ordine e si calcola la covarianza tra due posizioni distinte. Ciascuna posizione ha distribuzione uniforme sui valori della popolazione, quindi ha attesa $\mu_N$ e varianza $\sigma_N^2$. Posto $d_i=y_i-\mu_N$, si ha $\sum_i d_i=0$. La somma dei prodotti $d_id_j$ sulle coppie ordinate con $i\ne j$ è il quadrato della somma meno i quadrati dei singoli termini:
$$
\sum_{i\ne j}d_id_j=\Bigl(\sum_i d_i\Bigr)^2-\sum_i d_i^2=-\sum_i d_i^2=-N\sigma_N^2.
$$
Le $N(N-1)$ coppie ordinate di unità distinte sono equiprobabili, quindi la covarianza è la media dei prodotti $d_id_j$ e vale $-\dfrac{N\sigma_N^2}{N(N-1)}=-\dfrac{\sigma_N^2}{N-1}$.

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
Si estraggono $20$ unità da un insieme di $81$ unità con $\sigma_N^2=80$. Senza reinserimento, la varianza della media è $\dfrac{80}{20}\cdot\dfrac{81-20}{81-1}=4\cdot\dfrac{61}{80}=3{,}05$. Con reinserimento indipendente è invece $\dfrac{80}{20}=4$. Se vengono incluse tutte le $81$ unità senza reinserimento, il fattore vale $\dfrac{81-81}{80}=0$ e l'errore standard vale zero, perché il campione comprende l'intera popolazione.
:::

:::osservazione{titolo="Due convenzioni per la varianza di popolazione"}
Se si usa la varianza $S_N^2=\dfrac1{N-1}\sum_{i=1}^N(y_i-\mu_N)^2$, vale $S_N^2=\dfrac{N}{N-1}\sigma_N^2$, perché la somma degli scarti quadratici è la stessa e cambia solo il divisore. Sostituendo $\sigma_N^2=\dfrac{N-1}{N}S_N^2$, la varianza della media diventa
$$
\frac{N-1}{N}\cdot\frac{S_N^2}{n}\cdot\frac{N-n}{N-1}=\frac{S_N^2}{n}\left(1-\frac nN\right).
$$
Per una popolazione di soli indicatori con proporzione $p$ di valori uguali a $1$, la media è $p$ e la varianza con divisore $N$ è $p(1-p)$, come per una variabile di Bernoulli. La formula per il campione finito si applica quindi anche alla proporzione osservata senza reinserimento.
:::

:::esempio{titolo="Distribuzione esatta con tre unità"}
Una popolazione contiene i valori $2$, $4$ e $6$. Si estraggono due unità senza reinserimento. I tre campioni non ordinati $\{2,4\}$, $\{2,6\}$ e $\{4,6\}$ hanno la stessa probabilità e producono le medie $3$, $4$ e $5$. La media di queste tre possibilità è $4$, mentre la loro varianza è $\dfrac{1+0+1}{3}=\dfrac23$. Nella popolazione originaria la varianza vale $\dfrac{4+0+4}{3}=\dfrac83$. La formula con la correzione finita dà
$$
\frac{\sigma_N^2}{n}\frac{N-n}{N-1}
=\frac{8}{3\cdot2}\cdot\frac12
=\frac23,
$$
in accordo con il conteggio diretto. Per $n=1$, il fattore di correzione vale $\dfrac{N-1}{N-1}=1$, poiché una sola estrazione ha la stessa distribuzione con o senza reinserimento.
:::

:::esempio{titolo="Proporzioni in un lotto finito"}
Un lotto contiene $20$ pezzi, dei quali quattro sono difettosi. Si estraggono tre pezzi senza reinserimento con campionamento casuale semplice. Se $K$ conta i pezzi difettosi, la probabilità di trovarne almeno uno è il complementare del rapporto tra le terne di soli pezzi integri e tutte le terne possibili. Con i coefficienti binomiali del capitolo 3 vale quindi
$$
P(K\ge1)=1-\frac{\binom{16}{3}}{\binom{20}{3}}=1-\frac{560}{1140}\approx0{,}5088.
$$
Per il conteggio esatto si usa la distribuzione ipergeometrica (capitolo 5). Per la dispersione della proporzione $\hat p=\dfrac K3$, si parte invece dalla varianza di popolazione degli indicatori, pari a $0{,}2\cdot0{,}8=0{,}16$, e si ottiene $\operatorname{Var}(\hat p)=\dfrac{0{,}16}{3}\cdot\dfrac{17}{19}\approx0{,}0477$. Con reinserimento la varianza sarebbe $\dfrac{0{,}16}{3}\approx0{,}0533$.
:::

## Scelta del modello e del risultato

:::esempio{titolo="La stessa soglia con informazioni diverse"}
Si considerino $25$ misure indipendenti con media $50$ e deviazione standard $10$. La media campionaria ha centro $50$ ed errore standard $\dfrac{10}{5}=2$. Si vuole valutare la probabilità che la media disti dal centro almeno $4$.

- Dai soli momenti, Chebyshev fornisce il limite superiore $\dfrac{2^2}{4^2}=0{,}25$. Il limite vale per ogni distribuzione con media $50$ e deviazione standard $10$.
- Se si sa che le singole misure hanno legge normale, la media ha legge $N(50,4)$ e la stessa probabilità vale esattamente $2\bigl(1-\Phi(2)\bigr)\approx0{,}0455$.

Se la distribuzione delle singole misure è ignota, il valore $0{,}0455$ è un'approssimazione data dal teorema centrale del limite. Con $n=25$ la sua qualità dipende dalla distribuzione delle singole misure, come mostrano l'avvertenza sulle prove Bernoulli e il confronto con la legge gamma.
:::

:::osservazione{titolo="Soglie fisse e soglie standardizzate"}
Per una tolleranza fissata, raddoppiare $n$ dimezza il limite di Chebyshev per lo scarto della media. Con $\sigma=10$ e tolleranza $4$, il limite vale $\dfrac{100}{25\cdot16}=0{,}25$ per $n=25$ e $\dfrac{100}{50\cdot16}=0{,}125$ per $n=50$. La soglia corrispondente nella scala standardizzata cresce perché l'errore standard diminuisce: la tolleranza $4$ vale $2$ errori standard per $n=25$ e circa $2{,}83$ errori standard per $n=50$, dove l'errore standard è $\dfrac{10}{\sqrt{50}}\approx1{,}41$.

Se si mantiene invece costante il numero di errori standard, per esempio $2$, la tolleranza in unità originali diventa $\dfrac{2\sigma}{\sqrt n}$, cioè $4$ per $n=25$ e $2$ per $n=100$. La probabilità di oltrepassarla tende allora a $2\bigl(1-\Phi(2)\bigr)\approx0{,}0455$ per il teorema centrale del limite, e non a zero. La scelta tra tolleranza in unità originali e tolleranza in errori standard determina dunque quale probabilità si sta calcolando.
:::

:::esempio{titolo="Somma, media e numero di successi"}
Su $80$ componenti si calcola una probabilità che riguarda il peso complessivo oppure il numero di componenti che superano un limite di peso. Le due domande richiedono modelli diversi.

- Se la grandezza osservata è il peso e le misure sono i.i.d. con deviazione standard $\sigma$, la somma ha errore standard $\sigma\sqrt{80}$.
- Se per ogni componente si registra un indicatore, che vale $1$ quando il componente supera il limite, il conteggio segue la legge binomiale purché gli indicatori siano indipendenti con probabilità comune.
- Se il lotto è finito e le unità sono scelte senza reinserimento, si applica invece il modello di popolazione finita.

La formula applicabile si individua quindi da due informazioni: quale grandezza si misura su ogni unità e come sono state selezionate le unità.
:::
