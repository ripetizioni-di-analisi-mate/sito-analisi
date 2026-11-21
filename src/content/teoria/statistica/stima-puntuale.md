---
titolo: "Stima puntuale e massima verosimiglianza"
sommario: "Stimatori, errore quadratico medio, metodo dei momenti e massima verosimiglianza, con esempi di consistenza ed efficienza."
---

Un ufficio tecnico registra in cinque turni scelti a caso $1,0,2,1,1$ richieste d'intervento e vuole sapere quante richieste arrivano in media in un turno, considerando tutti i turni e non soltanto i cinque osservati. La media dei cinque conteggi vale $1$, e questo numero si usa come valore approssimato della media di tutti i turni. Un numero calcolato dai dati per approssimare una grandezza ignota della popolazione si chiama stima puntuale, ed è l'oggetto di questo capitolo.

Il capitolo risponde a due domande. La prima domanda è con quale regola si calcola la stima, e per rispondere si presentano il metodo dei momenti e il metodo della massima verosimiglianza, che danno una regola per ogni modello di cui si conosce la legge a meno di un parametro. La seconda domanda è quanto la regola sbaglia, e per rispondere si calcolano la distorsione, cioè di quanto la stima si discosta in media dal valore vero, e l'errore quadratico medio. Per esempio, sui dati $2,5,8$ la somma dei quadrati degli scarti dalla media vale $18$. Dividendo per $3$ si ottiene $6$, dividendo per $2$ si ottiene $9$, e soltanto la seconda regola ha in media il valore della varianza della popolazione.

I calcoli di attese e varianze usano le variabili aleatorie dei capitoli dal 5 al 7 e i risultati sulla media campionaria del capitolo 8. Il capitolo 10 parte da uno stimatore e dalla sua distribuzione per costruire un intervallo di valori che contiene il parametro con una probabilità fissata, per esempio $0{,}95$. I test del capitolo 11 e la regressione del capitolo 12 usano gli stimatori di questo capitolo, in particolare la media campionaria $\bar X$ e la varianza campionaria corretta $S^2$.

## Parametro, stimatore e stima

:::definizione{#stimatore titolo="Stimatore e stima osservata"}
Su $20$ pezzi controllati in una linea di produzione, $3$ sono difettosi. La probabilità $p$ che un pezzo della linea sia difettoso non è nota. Per il pezzo $i$ si pone $X_i=1$ se è difettoso e $X_i=0$ altrimenti, quindi $X_i$ ha legge di Bernoulli con parametro $p$ (capitolo 5). Ogni valore di $p$ fra $0$ e $1$ dà una legge diversa per i dati. Per esempio, con $p=0{,}1$ un pezzo è difettoso con probabilità $0{,}1$, con $p=0{,}2$ con probabilità $0{,}2$.

L'insieme delle leggi possibili per i dati, una per ogni valore di un numero ignoto, si chiama modello statistico. Il numero ignoto è il **parametro** del modello e, per un modello qualsiasi, si indica con $\theta$, che si legge theta; nell'esempio $\theta=p$. L'insieme dei valori ammessi per $\theta$ si chiama spazio dei parametri e si indica con $\Theta$, theta maiuscola; nell'esempio $\Theta=[0,1]$. Il parametro ha un valore fisso, che non si conosce prima di osservare i dati.

Le variabili $X_1,\ldots,X_n$ indicano i valori delle $n$ osservazioni prima della rilevazione, e una statistica è una funzione delle osservazioni e di quantità note (capitolo 8). Nell'esempio la quota di pezzi difettosi nel campione, $\dfrac{X_1+\cdots+X_{20}}{20}$, è una statistica scelta per approssimare $p$. Per un parametro qualsiasi, uno **stimatore** di $\theta$ è una statistica $T=T(X_1,\ldots,X_n)$ scelta per approssimare $\theta$. Sostituendo i valori osservati $x_1,\ldots,x_n$ si ottiene la **stima** $t=T(x_1,\ldots,x_n)$; nell'esempio $t=\dfrac{3}{20}=0{,}15$.

Lo stimatore è una variabile aleatoria, perché su altri $20$ pezzi i difettosi possono essere $1$ oppure $5$ e la quota cambia. La stima è il numero già calcolato sul campione osservato.

Quando si stima una media, $\bar X$ indica la media campionaria come variabile aleatoria e $\bar x$ indica la media dei valori osservati. Per un parametro generico si scrive anche $\widehat{\theta}$, che si legge theta cappello; il contesto dice se si intende la regola oppure il suo valore sui dati osservati.

Il resto del capitolo confronta stimatori diversi dello stesso parametro e presenta due metodi per costruirli. Gli intervalli di confidenza del capitolo 10 partono da uno stimatore e dalla sua distribuzione.
:::

:::esempio{titolo="Due stime da una stessa rilevazione"}
Su cinque turni scelti indipendentemente si registrano $1,0,2,1,1$ richieste d'intervento. Per stimare il numero medio di richieste per turno si usa $\bar X$, e con questi dati si ottiene $\bar x=1$. Per stimare la probabilità che in un turno ci sia almeno una richiesta si usa invece la media degli indicatori $\mathbf{1}_{\{X_i\ge 1\}}$, che valgono $1$ nei turni con almeno una richiesta e $0$ negli altri. La stima corrispondente è $\dfrac45$, perché quattro turni su cinque soddisfano la condizione. I due numeri stimano parametri diversi. Il primo indica quante richieste arrivano in media in un turno, il secondo in quale frazione dei turni arriva almeno una richiesta.

::grafico{xmin=-0.35 xmax=5.8 ymin=-0.35 ymax=2.6 nomi="i,xᵢ" punti="1,1;2,0;3,2;4,1;5,1" segmenti="1,0,1,1;3,0,3,2;4,0,4,1;5,0,5,1" linee="0.6,1 5.35,1" titolo="La linea orizzontale indica la media di una richiesta per turno. I punti sopra zero indicano i quattro turni con almeno una richiesta."}
:::

:::osservazione
Su altri cinque turni lo stimatore $\bar X$ assume un altro valore. La legge di uno stimatore $T$, calcolata supponendo che i dati seguano la legge del modello con un certo valore di $\theta$, si chiama distribuzione campionaria di $T$. Si scrivono $E_\theta[T]$ e $\operatorname{Var}_\theta(T)$ per indicare che attesa e varianza sono calcolate supponendo che $\theta$ sia il valore vero del parametro.

Due regole possono dare la stessa stima su un campione e avere distribuzioni campionarie diverse. Con i dati $1,0,2,1,1$ la media vale $1$ e anche la prima osservazione vale $1$, quindi le due regole danno la stessa stima. Come variabili aleatorie, però, $X_1$ ha varianza $\sigma^2$, la varianza di una singola osservazione, mentre $\bar X$ ha varianza $\dfrac{\sigma^2}{5}$ (capitolo 8, distribuzione della media). Se $\sigma^2>0$, su un altro campione la prima osservazione si allontana perciò in media dal valore atteso più della media campionaria.
:::

:::attenzione
Uno stimatore si calcola con le sole osservazioni e quantità note. L'espressione $X_1-\mu$ ha attesa zero quando $E[X_1]=\mu$, ma contiene il parametro ignoto $\mu$. Per calcolarla sui dati $1,0,2,1,1$ servirebbe il valore di $\mu$, che è proprio ciò che si cerca, quindi non è una statistica e non si può usare come stimatore.

L'espressione $X_1-\mu$ si calcola soltanto quando $\mu$ è noto. Per esempio, se $\mu$ è la massa certificata di un pesetto campione e $X_1$ è la sua misura su una bilancia, $X_1-\mu$ è l'errore di misura. Lo scarto $X_1-\bar X$ si calcola invece dai dati, e sui turni vale $1-1=0$. È una statistica, ma non stima nessun parametro, perché indica soltanto quanto la prima osservazione dista dalla media del campione.
:::

## Distorsione ed errore quadratico medio

:::definizione{#eqm titolo="Distorsione e correttezza"}
Siano $X_1,X_2,X_3$ tre osservazioni con media $\mu$ e si consideri lo stimatore $T=\dfrac{X_1+X_2+X_3}{4}$, che divide la somma per $4$ invece che per $3$. Per la linearità dell'attesa, $E[T]=\dfrac{3\mu}{4}$. Se $\mu=8$, si ha $E[T]=6$, quindi le stime valgono in media $6$ mentre il parametro vale $8$, e lo scarto medio è $6-8=-2$.

Se $T$ ha attesa finita, la **distorsione** di $T$ è lo scarto medio con segno fra lo stimatore e il parametro:
$$
b_\theta(T)=E_\theta[T]-\theta.
$$
Nell'esempio $b_\mu(T)=\dfrac{3\mu}{4}-\mu=-\dfrac{\mu}{4}$, che per $\mu=8$ vale $-2$. Quando la distorsione è positiva le stime superano in media il parametro, quando è negativa sono in media inferiori.

Lo stimatore è **corretto** se la distorsione vale zero per ogni $\theta\in\Theta$. Per esempio $\bar X=\dfrac{X_1+X_2+X_3}{3}$ ha attesa $\mu$ per ogni $\mu$, quindi è corretto. La correttezza è una proprietà della regola, e si verifica calcolando l'attesa in funzione di $\theta$, senza conoscere il valore vero del parametro.

La distorsione indica di quanto una regola sbaglia in media. Il teorema sulla varianza campionaria, più avanti, la usa per scegliere fra il divisore $n$ e il divisore $n-1$.
:::

::::teorema{#scomposizione-mse titolo="Scomposizione dell'errore quadratico medio"}
Uno stimatore corretto con varianza $100$ dà stime che in media coincidono con $\theta$, ma che hanno deviazione standard $10$ attorno a $\theta$. Per misurare insieme la distorsione e la dispersione si usa la media del quadrato dell'errore $T-\theta$.

Per uno stimatore reale $T$ con $E_\theta[T^2]$ finito, l'**errore quadratico medio** è $MSE_\theta(T)=E_\theta[(T-\theta)^2]$; la sigla viene dall'inglese mean squared error. Si ha
$$
MSE_\theta(T)=\operatorname{Var}_\theta(T)+b_\theta(T)^2.
$$
La varianza indica quanto le stime si disperdono attorno all'attesa dello stimatore. Il quadrato della distorsione indica quanto questa attesa dista dal parametro. Per uno stimatore corretto il secondo termine è nullo, quindi confrontare gli errori quadratici medi di due stimatori corretti equivale a confrontarne le varianze. Lo stimatore corretto con varianza $100$ ha perciò errore quadratico medio $100$.

Con l'errore quadratico medio si confronta anche uno stimatore corretto con uno distorto, come nell'esempio seguente.

:::dimostrazione
Si scrive l'errore $T-\theta$ come somma di uno scarto dall'attesa e di una costante. Posto $m=E_\theta[T]$, sviluppando il quadrato e usando la linearità dell'attesa si ottiene
$$
\begin{aligned}
E_\theta[(T-\theta)^2]
&= E_\theta[((T-m)+(m-\theta))^2]\\[6pt]
&= E_\theta[(T-m)^2]
+2(m-\theta)E_\theta[T-m]+(m-\theta)^2\\[6pt]
&= \operatorname{Var}_\theta(T)+(m-\theta)^2 .
\end{aligned}
$$
Il termine misto vale zero perché $E_\theta[T-m]=m-m=0$. La quantità $m-\theta$ è la distorsione.
:::
::::

:::esempio{titolo="Confronto fra due regole di stima"}
Per un dato valore di $\theta$, lo stimatore $T$ è corretto e ha varianza $5$. Lo stimatore $U$ ha attesa $\theta-1$, quindi distorsione $-1$, e varianza $3$. Gli errori quadratici medi valgono
$$
MSE_\theta(T)=5+0^2=5,\qquad
MSE_\theta(U)=3+(-1)^2=4.
$$
Per questo valore di $\theta$ la varianza di $U$ è minore di $2$ rispetto a quella di $T$, mentre il quadrato della distorsione aggiunge soltanto $1$, perciò $U$ ha l'errore minore. Per concludere che $U$ è preferibile per ogni valore del parametro occorre ripetere il confronto per ogni $\theta\in\Theta$; l'ultimo esempio del capitolo mostra un caso in cui il confronto cambia con $\theta$.

::grafico{f="exp(-x*x/10)/sqrt(10*PI);exp(-(x+1)^2/6)/sqrt(6*PI)" xmin=-8 xmax=7 ymin=-0.03 ymax=0.29 nomi="t,y" punti="0,0,pieno,θ" segmenti="-1,0,-1,0.2303" legenda="f_T;f_U" titolo="Densità di $T$ e $U$ supposte normali, per $\theta=0$. La densità di $T$ è centrata in $0$ con varianza $5$; quella di $U$ è centrata in $-1$, più stretta, con varianza $3$."}
:::

## Media e varianza campionarie

:::teorema{#media-corretta titolo="Attesa e varianza della media campionaria"}
Siano $X_1,\ldots,X_n$ indipendenti e identicamente distribuite, con media $\mu$ e varianza finita $\sigma^2$. La media campionaria è uno stimatore corretto di $\mu$ e ha varianza
$$
E[\bar X]=\frac{1}{n}\sum_{i=1}^nE[X_i]=\mu,\qquad
\operatorname{Var}(\bar X)=\frac{\sigma^2}{n}.
$$
La formula per l'attesa segue dalla linearità dell'attesa. La formula per la varianza segue dall'indipendenza, che rende nulle le covarianze fra osservazioni distinte (capitolo 7), e coincide con il risultato del capitolo 8 sulla distribuzione della media. Con $n=16$ e $\sigma^2=36$, l'errore standard di $\bar X$, cioè la sua deviazione standard, vale $\sqrt{\dfrac{36}{16}}=1{,}5$.

Poiché la varianza è $\dfrac{\sigma^2}{n}$, l'errore standard diminuisce come $\dfrac{1}{\sqrt n}$. Per dimezzarlo servono perciò quattro volte le osservazioni. Per esempio, con $n=64$ e $\sigma^2=36$ l'errore standard vale $\sqrt{\dfrac{36}{64}}=0{,}75$.

::grafico{f="exp(-(x-20)^2/72)/(6*sqrt(2*PI));exp(-(x-20)^2/18)/(3*sqrt(2*PI));exp(-(x-20)^2/4.5)/(1.5*sqrt(2*PI))" xmin=0 xmax=41 ymin=-0.03 ymax=0.31 nomi="x̄,y" legenda="n=1;n=4;n=16" titolo="Densità di $\bar X$ per una popolazione normale con $\mu=20$ e $\sigma^2=36$. Con $n=1$, $4$ e $16$ le deviazioni standard valgono $6$, $3$ e $1{,}5$."}
:::

::::teorema{#varianza-corretta titolo="Correttezza della varianza campionaria"}
Per stimare la varianza $\sigma^2$ della popolazione si può partire dalla varianza descrittiva del capitolo 2, che divide per $n$ la somma dei quadrati degli scarti dalla media. Il teorema mostra che questa regola dà in media un valore minore di $\sigma^2$; per esempio, con $n=3$ la sua attesa vale $\dfrac23\sigma^2$.

Sia dato un campione indipendente e identicamente distribuito di numerosità $n>1$, con media $\mu$ e varianza finita $\sigma^2$. Si indica con $D=\sum_{i=1}^n(X_i-\bar X)^2$ la somma dei quadrati degli scarti dalla media campionaria. Allora
$$
E[D]=(n-1)\sigma^2,\qquad
E[S^2]=\sigma^2,\qquad S^2=\frac{D}{n-1}.
$$
La statistica $S^2$ è la **varianza campionaria corretta** ed è uno stimatore corretto di $\sigma^2$. Con il divisore $n$, la statistica $V_n=\dfrac{D}{n}$ ha invece attesa $\dfrac{n-1}{n}\sigma^2$, quindi la sua distorsione vale $\dfrac{n-1}{n}\sigma^2-\sigma^2=-\dfrac{\sigma^2}{n}$.

La statistica $S^2$ è lo stimatore della varianza usato negli intervalli di confidenza del capitolo 10 e nei test del capitolo 11 quando $\sigma^2$ non è nota.

:::dimostrazione
Si scrivono gli scarti dalla media campionaria in funzione degli scarti dalla media della popolazione, $X_i-\bar X=(X_i-\mu)-(\bar X-\mu)$. Elevando al quadrato e sommando su $i$ si ottiene
$$
D=\sum_{i=1}^n(X_i-\mu)^2-2(\bar X-\mu)\sum_{i=1}^n(X_i-\mu)+n(\bar X-\mu)^2.
$$
Poiché $\sum_i(X_i-\mu)=n\bar X-n\mu=n(\bar X-\mu)$, il termine centrale vale $-2n(\bar X-\mu)^2$, quindi
$$
D=\sum_{i=1}^n(X_i-\mu)^2-n(\bar X-\mu)^2.
$$
Ogni termine $(X_i-\mu)^2$ ha attesa $\sigma^2$ per definizione di varianza, perciò il primo addendo ha attesa $n\sigma^2$. Poiché $\bar X$ ha attesa $\mu$ e varianza $\dfrac{\sigma^2}{n}$, il secondo addendo ha attesa $nE[(\bar X-\mu)^2]=n\cdot\dfrac{\sigma^2}{n}=\sigma^2$. Perciò $E[D]=n\sigma^2-\sigma^2=(n-1)\sigma^2$, e dividendo per $n-1$ si ottiene $E[S^2]=\sigma^2$.
:::
::::

:::esempio{titolo="La stessa somma con due divisori"}
Sui dati $2,5,8$ la media osservata vale $5$. Gli scarti sono $-3,0,3$ e la somma dei loro quadrati vale $18$. La varianza campionaria corretta osservata è $s^2=\dfrac{18}{2}=9$, mentre con il divisore $n$ si ottiene $v_n=\dfrac{18}{3}=6$. I due numeri usano gli stessi scarti e rispondono a due domande diverse. Il valore $6$ è la varianza descrittiva dei tre dati, cioè la media dei quadrati dei loro scarti (capitolo 2). Il valore $9$ è la stima della varianza della popolazione da cui i dati provengono, ottenuta con una regola corretta.
:::

:::attenzione
Se la media $\mu$ della popolazione è nota, gli scarti si calcolano da $\mu$ e non da $\bar X$. Ciascun $(X_i-\mu)^2$ ha attesa $\sigma^2$, quindi la statistica $\dfrac1n\sum_i(X_i-\mu)^2$ ha attesa $\sigma^2$ ed è già corretta. Per esempio, se si sa che $\mu=4$ e i dati sono $2,5,8$, gli scarti da $4$ sono $-2,1,4$ e la stima di $\sigma^2$ è $\dfrac{4+1+16}{3}=7$. Il divisore $n-1$ serve soltanto con gli scarti dalla media stimata $\bar X$.
:::

:::attenzione
La deviazione standard $\sigma$ si stima con $S=\sqrt{S^2}$. Poiché $\operatorname{Var}(S)=E[S^2]-E[S]^2\ge0$, si ha $E[S]^2\le E[S^2]=\sigma^2$, quindi $E[S]\le\sigma$. L'uguaglianza vale solo quando $\operatorname{Var}(S)=0$, cioè quando $S$ assume sempre lo stesso valore. Perciò $S$, pur essendo la radice di uno stimatore corretto, ha distorsione negativa tranne quando è costante.

Per esempio, si estraggano due osservazioni indipendenti da una popolazione che vale $-1$ e $1$ con probabilità $\dfrac12$ ciascuno, con media $0$ e varianza $\sigma^2=1$. Si ha $S^2=\dfrac{(X_1-X_2)^2}{2}$, che vale $0$ se le due osservazioni sono uguali e $2$ se sono diverse, ciascun caso con probabilità $\dfrac12$. Quindi $E[S^2]=1=\sigma^2$, mentre $E[S]=\dfrac12\cdot0+\dfrac12\sqrt2\approx0{,}71$, che è minore di $\sigma=1$.
:::

## Metodo dei momenti

:::definizione{#momenti titolo="Equazioni dei momenti"}
Si supponga che i dati $1,4,7$ provengano da una legge uniforme su $[0,\theta]$ con $\theta$ ignoto. La media di questa legge è $\dfrac\theta2$ (capitolo 6), mentre la media osservata è $\dfrac{1+4+7}{3}=4$. Ponendo $\dfrac\theta2=4$ si ottiene la stima $\theta=8$.

Il momento di ordine $j$ di $X$, dove $j$ è un intero positivo, è $m_j(\theta)=E_\theta[X^j]$; il momento di ordine $1$ è la media. Sui dati si calcola la corrispondente media delle potenze, detta **momento empirico** di ordine $j$:
$$
m_j(\theta)=E_\theta[X^j],\qquad
\widehat m_j=\frac{1}{n}\sum_{i=1}^n X_i^j.
$$
Il **metodo dei momenti** sceglie come stima il valore di $\theta$ per cui i momenti della legge sono uguali ai momenti empirici. Si scrivono tante equazioni quanti sono i parametri ignoti, usando i momenti di ordine $1,2,\ldots$, che devono essere finiti. Con un solo parametro si risolve l'equazione $E_\theta[X]=\bar x$, come nell'esempio dell'uniforme. Con due parametri si aggiunge l'equazione $E_\theta[X^2]=\widehat m_2$.

Il sistema può avere più soluzioni, oppure avere una soluzione fuori dallo spazio dei parametri; il secondo esempio qui sotto mostra un caso di questo tipo.

Il metodo dà uno stimatore ogni volta che i momenti della legge si scrivono in funzione dei parametri, e richiede soltanto di risolvere equazioni. Nella sezione «Supporto dipendente dal parametro» si vede un caso in cui la sua stima è minore di un dato osservato, e la massima verosimiglianza dà una stima migliore.
:::

:::esempio{titolo="Una media con due interpretazioni"}
Per un campione di Poisson, $E_\lambda[X]=\lambda$, quindi il metodo dei momenti dà $\widehat\lambda=\bar X$. Per un campione esponenziale con tasso $\lambda>0$ vale invece $E_\lambda[X]=\dfrac1\lambda$ (capitolo 6), quindi si ottiene $\widehat\lambda=\dfrac{1}{\bar X}$ per $\bar X>0$. Se la media osservata è $4$ in entrambi i casi, le stime sono $4$ e $\dfrac14$. L'equazione da risolvere cambia con la legge, perché la media della legge è $\lambda$ nel primo caso e $\dfrac1\lambda$ nel secondo. Nel modello esponenziale $\dfrac1\lambda$ è la durata media, quindi se la media è espressa in minuti il tasso $\lambda$ si esprime in $\mathrm{min}^{-1}$, cioè per minuto.
:::

:::esempio{titolo="Due momenti per media e varianza"}
Per una normale $N(\mu,\sigma^2)$ con entrambi i parametri ignoti si ha $E[X]=\mu$ e $E[X^2]=\operatorname{Var}(X)+E[X]^2=\sigma^2+\mu^2$. La prima equazione dà $\widehat\mu=\bar X$. Sostituendo nella seconda si ottiene
$$
\widehat{\sigma^2}=\frac{1}{n}\sum_{i=1}^n X_i^2-\bar X^2
=\frac{1}{n}\sum_{i=1}^n (X_i-\bar X)^2.
$$
La seconda uguaglianza si verifica sviluppando il quadrato: $\dfrac1n\sum_i(X_i-\bar X)^2=\dfrac1n\sum_iX_i^2-2\bar X\cdot\bar X+\bar X^2=\dfrac1n\sum_iX_i^2-\bar X^2$. Con i dati $1,3,5$ si ha $\widehat\mu=3$ e $\widehat{\sigma^2}=\dfrac{1+9+25}{3}-9=\dfrac{35}{3}-9=\dfrac83$.

Lo stimatore ottenuto divide per $n$, quindi coincide con lo stimatore $V_n$ del teorema sulla varianza campionaria e ha distorsione $-\dfrac{\sigma^2}{n}$. Il modello normale richiede inoltre $\sigma^2>0$. Con dati tutti uguali, per esempio $2,2,2$, si ottiene $\widehat{\sigma^2}=0$, che non appartiene allo spazio dei parametri, quindi il sistema non ha una soluzione ammessa.
:::

## Verosimiglianza e ricerca del massimo

:::definizione{#verosimiglianza titolo="Verosimiglianza e log-verosimiglianza"}
Due lampadine dello stesso tipo durano $1$ anno e $3$ anni. Si suppone che la durata abbia legge esponenziale di tasso $\lambda$, con densità $\lambda e^{-\lambda x}$ per $x>0$ (capitolo 6). Le due durate sono indipendenti, quindi la densità congiunta valutata nei dati è il prodotto delle densità (capitolo 7):
$$
\lambda e^{-\lambda\cdot1}\cdot\lambda e^{-\lambda\cdot3}=\lambda^2e^{-4\lambda}.
$$
Con $\lambda=\dfrac12$ questa quantità vale $\dfrac{e^{-2}}{4}\approx0{,}034$, con $\lambda=1$ vale $e^{-4}\approx0{,}018$. I dati osservati hanno quindi una densità circa $1{,}8$ volte maggiore se $\lambda=\dfrac12$ che se $\lambda=1$.

Fissate le osservazioni $x_1,\ldots,x_n$, la **verosimiglianza** è la funzione che assegna a ogni valore $\theta$ del parametro la densità congiunta valutata nei dati, oppure la massa congiunta nel caso discreto. Per un campione indipendente con densità comune $f_\theta$, oppure con massa comune indicata allo stesso modo, vale
$$
L(\theta;x_1,\ldots,x_n)=\prod_{i=1}^n f_\theta(x_i).
$$
Nell'esempio delle lampadine $L(\lambda)=\lambda^2e^{-4\lambda}$, e con $n$ durate di somma $s$ si ottiene $L(\lambda)=\lambda^ne^{-\lambda s}$.

Una **stima di massima verosimiglianza** è un punto dello spazio dei parametri in cui $L$ assume il valore massimo. Dove $L$ è positiva si considera la log-verosimiglianza $\ell(\theta)=\log L(\theta)$. Il logaritmo è strettamente crescente, quindi $L$ e $\ell$ hanno il massimo negli stessi punti. Il logaritmo trasforma inoltre il prodotto in una somma, e la derivata di una somma si calcola termine per termine. Nell'esempio $\ell(\lambda)=2\log\lambda-4\lambda$; il massimo si trova in $\lambda=\dfrac12$, come mostra il calcolo dell'esempio «Stima di un tasso esponenziale».

Il metodo si usa in ogni modello di cui si sa scrivere la densità o la massa. La sezione successiva lo applica ai modelli di Bernoulli, esponenziale, di Poisson e normale.
:::

:::osservazione
Una costante additiva nella log-verosimiglianza, che non dipende dal parametro, lascia invariati i punti di massimo, perché sposta tutti i valori di $\ell$ della stessa quantità e lascia invariata la differenza fra i valori in due punti. Per esempio, per $K$ di legge binomiale con numerosità nota $n$, osservare $K=k$ dà nella verosimiglianza il coefficiente $\binom nk$. Con $n=10$ e $k=3$ il coefficiente vale $\binom{10}{3}=120$ e aggiunge $\log120$ a ogni valore di $\ell$. Poiché il coefficiente dipende dai dati e da $n$, ma non da $p$, l'ottimizzazione si svolge con i soli termini $k\log p$ e $(n-k)\log(1-p)$.
:::

:::attenzione
L'equazione $\ell'(\theta)=0$ trova i punti di massimo che stanno all'interno dello spazio dei parametri e in cui $\ell$ è derivabile. Il massimo può invece trovarsi in un estremo dello spazio dei parametri, oppure non esistere.

Per $L(\theta)=\theta^3$ con $\Theta=[0,1]$ la derivata $3\theta^2$ è positiva per $0<\theta<1$, quindi non si annulla all'interno, e il massimo è nell'estremo $\theta=1$, dove $L$ vale $1$. Con $\Theta=(0,1)$ la funzione si avvicina a $1$ per $\theta\to1$ senza raggiungere questo valore, quindi non ha massimo.
:::

:::osservazione
La verosimiglianza è una funzione di $\theta$ calcolata con i dati fissati, e il suo integrale rispetto a $\theta$ può essere diverso da $1$. Per le lampadine $\int_0^{+\infty}\lambda^2e^{-4\lambda}\,d\lambda=\dfrac{2}{4^3}=\dfrac{1}{32}$. Perciò il valore $L\!\left(\dfrac12\right)\approx0{,}034$ non è la probabilità che $\lambda$ valga $\dfrac12$, e la verosimiglianza serve soltanto a confrontare i valori del parametro fra loro.
:::

:::esempio{titolo="Confronto fra parametri discreti"}
Si considerino le sole probabilità di successo $\dfrac14$ e $\dfrac12$. In tre prove di Bernoulli indipendenti si osservano, nell'ordine, due successi e un insuccesso. In questo modello lo spazio dei parametri contiene due punti, quindi si confrontano i due valori della verosimiglianza.

$$
L\!\left(\frac14\right)=\left(\frac14\right)^2\frac34=\frac{3}{64},
\qquad
L\!\left(\frac12\right)=\left(\frac12\right)^3=\frac18 .
$$

Poiché $\dfrac18=\dfrac{8}{64}>\dfrac{3}{64}$, il valore di massima verosimiglianza è $\dfrac12$. Se si osservasse solo il numero di successi, ciascuno dei due valori sarebbe moltiplicato per $3$, cioè per il numero di sequenze con due successi su tre prove. Il confronto resterebbe lo stesso.

Se il modello ammettesse ogni $p\in[0,1]$, il massimo sarebbe invece in $\dfrac23$, cioè nella proporzione di successi osservata.

::grafico{curve="t,t*t*(1-t),0,1" xmin=-0.1 xmax=1.12 ymin=-0.02 ymax=0.19 nomi="p,L" punti="0.25,0.046875,pieno;0.5,0.125,pieno;0.666667,0.148148,vuoto" segmenti="0.25,0,0.25,0.046875;0.5,0,0.5,0.125;0.666667,0,0.666667,0.148148" etichette="0.21,-0.012,¼;0.47,-0.012,½;0.64,-0.012,⅔" legenda="L(p)=p^2(1-p)" titolo="Verosimiglianza dei dati osservati. Nei valori ammessi vale $\dfrac{3}{64}$ in $\dfrac14$ e $\dfrac18$ in $\dfrac12$; su tutto $[0,1]$ il massimo $\dfrac{4}{27}$ si trova in $\dfrac23$."}
:::

:::osservazione{#invarianza-mle titolo="Stima dopo un cambio di parametro"}
Il modello esponenziale si scrive in funzione del tasso $\lambda$ oppure della durata media $\eta=\dfrac1\lambda$, dove $\eta$ si legge eta. Se la stima di massima verosimiglianza del tasso è $\dfrac14$ per minuto, quella della durata media è $4$ minuti.

Per un modello qualsiasi, sia $\eta=g(\theta)$ un nuovo parametro, con $g$ biunivoca, cioè tale che ogni valore ammesso di $\eta$ corrisponde a uno e un solo valore di $\theta$. La verosimiglianza in funzione di $\eta$ è $L(g^{-1}(\eta))$, quindi assume nel punto $\eta=g(\theta)$ lo stesso valore che $L$ assume in $\theta$. Perciò, se il massimo in $\theta$ si trova in $\widehat\theta$, il massimo in $\eta$ si trova in $g(\widehat\theta)$.

La correttezza, che dipende dall'attesa, si verifica invece separatamente per ciascun parametro. Nel modello esponenziale $\bar X$ è uno stimatore corretto di $\eta=\dfrac1\lambda$, mentre $\dfrac1{\bar X}$ ha distorsione positiva come stimatore di $\lambda$ (osservazione «Distorsione del tasso esponenziale»).
:::

## Massima verosimiglianza in modelli comuni

::::teorema{#mle-bernoulli titolo="Massima verosimiglianza per Bernoulli"}
Siano $x_1,\ldots,x_n$ osservazioni di prove di Bernoulli indipendenti con parametro $p\in[0,1]$. Posto $k=\sum_i x_i$, il numero di successi, la stima di massima verosimiglianza è $\widehat p=\dfrac{k}{n}$, cioè la proporzione di successi nel campione. Con $20$ pezzi controllati e $3$ difettosi si ottiene $\widehat p=\dfrac{3}{20}=0{,}15$.

:::dimostrazione
La verosimiglianza è $L(p)=p^k(1-p)^{n-k}$. Se $0<k<n$, per $0<p<1$ la log-verosimiglianza è $\ell(p)=k\log p+(n-k)\log(1-p)$ e ha derivata
$$
\ell'(p)=\frac{k}{p}-\frac{n-k}{1-p}
=\frac{k-np}{p(1-p)}.
$$
Il denominatore è positivo, quindi la derivata è positiva per $p<\dfrac{k}{n}$ e negativa per $p>\dfrac{k}{n}$. Negli estremi la verosimiglianza è nulla, perché $p^k=0$ in $p=0$ con $k>0$ e $(1-p)^{n-k}=0$ in $p=1$ con $n-k>0$. Il massimo è quindi in $\dfrac kn$. Se $k=0$, la verosimiglianza è $(1-p)^n$, che decresce, e il massimo è in $0$. Se $k=n$, è $p^n$, che cresce, e il massimo è in $1$.
:::
::::

:::esempio{titolo="Stima di un tasso esponenziale"}
Per osservazioni indipendenti di legge esponenziale di tasso $\lambda>0$, sia $s=\sum_i x_i$ e si supponga $s>0$. La verosimiglianza è $L(\lambda)=\lambda^ne^{-\lambda s}$, quindi la log-verosimiglianza vale $\ell(\lambda)=n\log\lambda-\lambda s$ e la sua derivata è $\ell'(\lambda)=\dfrac{n}{\lambda}-s$. L'unico zero è $\widehat\lambda=\dfrac ns$, e la derivata è positiva prima di questo punto e negativa dopo, quindi $\dfrac ns$ è il massimo. Per i tempi $2,3,7$ minuti si ha $s=12$ e $\widehat\lambda=\dfrac{3}{12}=\dfrac14\,\mathrm{min}^{-1}$. La stima $\dfrac14$ è l'inverso della media osservata $4$, quindi coincide con la stima per momenti dell'esempio «Una media con due interpretazioni».

::grafico{f="3*log(x)-12*x" xmin=-0.06 xmax=0.9 ymin=-12.5 ymax=1.3 nomi="λ,ℓ" punti="0.25,-7.1589,pieno" segmenti="0.25,0,0.25,-7.1589" etichette="0.27,0.6,¼" legenda="\ell(\lambda)=3\log\lambda-12\lambda" titolo="Log-verosimiglianza dei tempi $2$, $3$ e $7$ minuti. Il massimo è in $\lambda=\dfrac14$, dove vale $3\log\dfrac14-3\approx-7{,}16$."}
:::

:::osservazione{#mle-poisson titolo="Stima dell'intensità di Poisson"}
Per osservazioni indipendenti di Poisson con parametro $\lambda\ge0$, il prodotto delle masse è
$$
L(\lambda)=\frac{e^{-n\lambda}\lambda^{s}}{\prod_i x_i!},
\qquad s=\sum_i x_i.
$$
Il capitolo 5 definisce la legge di Poisson per $\lambda>0$. Qui si ammette anche $\lambda=0$, che corrisponde a una variabile uguale a $0$ con probabilità $1$; questa legge si dice degenere.

Se $s>0$, per $\lambda>0$ si ha $\ell'(\lambda)=\dfrac{s}{\lambda}-n$. La derivata è positiva per $\lambda<\dfrac{s}{n}$ e negativa per $\lambda>\dfrac{s}{n}$, quindi la stima è $\dfrac{s}{n}=\bar x$. Con i conteggi $1,0,2,1,1$ si ha $s=5$ e $\widehat\lambda=\dfrac55=1$.

Se $s=0$, cioè se tutti i conteggi sono zero, il prodotto vale $e^{-n\lambda}$, che decresce in $\lambda$. Se si ammette $\lambda=0$, il massimo è in $\lambda=0$. Se il modello impone $\lambda>0$, la verosimiglianza si avvicina a $1$ per $\lambda\to0^+$ senza raggiungere questo valore, quindi non ha massimo.
:::

:::osservazione{#correzione-tasso titolo="Distorsione del tasso esponenziale"}
La legge gamma di forma $n$ e tasso $\lambda$ (capitolo 6) ha densità $\dfrac{\lambda^n}{\Gamma(n)}a^{n-1}e^{-\lambda a}$ per $a>0$. Per $n$ intero vale $\Gamma(n)=(n-1)!$, perché $\Gamma(1)=1$ e $\Gamma(k+1)=k\Gamma(k)$. La somma $A=\sum_iX_i$ di $n$ tempi indipendenti esponenziali con tasso $\lambda$ ha questa legge (capitolo 8), quindi la sua densità è
$$
f_A(a)=\frac{\lambda^n a^{n-1}e^{-\lambda a}}{(n-1)!},\qquad a>0.
$$
Per $n>1$ l'attesa di $\dfrac1A$ si ottiene integrando $\dfrac1a f_A(a)$. Poiché $(n-1)!=(n-1)\cdot(n-2)!$, si ha
$$
E\left[\frac1A\right]=\int_0^{+\infty}\frac{\lambda^n a^{n-2}e^{-\lambda a}}{(n-1)!}\,da=\frac{\lambda}{n-1}\int_0^{+\infty}\frac{\lambda^{n-1}a^{n-2}e^{-\lambda a}}{(n-2)!}\,da=\frac{\lambda}{n-1}.
$$
L'ultimo integrale vale $1$, perché è l'integrale della densità gamma di forma $n-1$ e tasso $\lambda$.

Lo stimatore di massima verosimiglianza $\dfrac nA$ ha quindi attesa $\dfrac{n}{n-1}\lambda$ e distorsione positiva $\dfrac{\lambda}{n-1}$. Per esempio, con $n=4$ e $\lambda=3$ l'attesa vale $\dfrac43\cdot3=4$ e la distorsione vale $1$. Lo stimatore $\dfrac{n-1}{A}$ ha invece attesa $\lambda$, quindi è corretto. Per i tempi $2,3,7$ minuti la stima di massima verosimiglianza è $\dfrac{3}{12}=\dfrac14$, mentre la stima corretta è $\dfrac{2}{12}=\dfrac16$ per minuto.
:::

:::osservazione{#mle-normale titolo="Media e varianza nella normale"}
Per un campione normale indipendente con media $\mu$ e varianza $v=\sigma^2>0$, il logaritmo del prodotto delle densità è
$$
\ell(\mu,v)=-\frac n2\log(2\pi v)-\frac{1}{2v}\sum_{i=1}^n(x_i-\mu)^2 .
$$
La log-verosimiglianza dipende da $\mu$ soltanto attraverso $\sum_i(x_i-\mu)^2$, con segno negativo. Sviluppando il quadrato e usando $\sum_i(x_i-\bar x)=0$ si ottiene
$$
\sum_{i=1}^n(x_i-\mu)^2
=\sum_{i=1}^n(x_i-\bar x)^2+n(\bar x-\mu)^2,
$$
che è minima per $\mu=\bar x$. A varianza fissata il massimo in $\mu$ è quindi $\widehat\mu=\bar x$.

Se si stima anche la varianza, si sostituisce $\mu=\bar x$. Indicata con $d$ la somma dei quadrati degli scarti da $\bar x$, si ottiene
$$
\ell'(v)=-\frac{n}{2v}+\frac{d}{2v^2}
=\frac{d-nv}{2v^2}.
$$
Per $d>0$ la derivata è positiva per $v<\dfrac dn$ e negativa per $v>\dfrac dn$, quindi il massimo si trova in $v=\dfrac dn$. Il divisore è $n$, perciò la stima coincide con la varianza descrittiva del capitolo 2 e non con $s^2$. Con i dati $1,3,5$ si ha $\widehat\mu=3$ e $\widehat v=\dfrac83$, gli stessi valori del metodo dei momenti. Se la media è nota, la somma dei quadrati si calcola attorno alla media nota e il divisore resta $n$.

Se $d=0$, cioè se tutti i dati sono uguali, la log-verosimiglianza cresce senza limite per $v\to0^+$. Poiché $v=0$ non è ammesso nel modello normale, in questo caso non c'è massimo.
:::

## Supporto dipendente dal parametro

:::esempio{#uniforme titolo="Stima dell'estremo di un'uniforme"}
Due numeri estratti indipendentemente con legge uniforme su $[0,\theta]$, con $\theta>0$ ignoto, valgono $x_1=1$ e $x_2=2$. L'insieme dei valori in cui la densità è positiva si chiama supporto, e qui è l'intervallo $[0,\theta]$. Il capitolo 6 definisce la densità di $U(0,\theta)$ uguale a $\dfrac1\theta$ su $(0,\theta)$. Qui la si prende uguale a $\dfrac1\theta$ anche negli estremi $0$ e $\theta$, e uguale a zero altrove. Cambiare il valore della densità in un punto non cambia nessuna probabilità, perché la probabilità di un singolo punto è zero (capitolo 6, probabilità in un punto).

Se $\theta<2$, il dato $2$ sta fuori dal supporto, la sua densità vale zero e quindi $L(\theta)=0$. Se $\theta\ge2$, entrambi i dati stanno in $[0,\theta]$ e $L(\theta)=\dfrac1\theta\cdot\dfrac1\theta=\theta^{-2}$. Il punto $(2,0)$ è escluso dal tratto a sinistra, mentre il punto $(2,\dfrac14)$ è incluso nel tratto a destra. Il salto avviene in $\theta=2$, il primo valore per cui il dato $2$ appartiene a $[0,\theta]$.

Con $n$ dati, siano $x_1,\ldots,x_n$ osservazioni indipendenti da $U(0,\theta)$, con dati non negativi e massimo osservato $m>0$. I valori $\theta<m$ hanno verosimiglianza zero, mentre per $\theta\ge m$ si ha $L(\theta)=\theta^{-n}$. La funzione è strettamente decrescente per $\theta\ge m$, quindi il massimo è in $\widehat\theta=m$.

Lo stesso controllo, dato per dato, serve quando il supporto si sposta con $\theta$, come nell'esempio «Un intervallo di massimi» alla fine di questa sezione.

::grafico{curve="t,0,0.1,2;t,1/(t*t),2,5.3" xmin=-0.35 xmax=5.5 ymin=-0.075 ymax=0.39 punti="2,0,vuoto;2,0.25,pieno" segmenti="2,0,2,0.25" nomi="θ,L" legenda="L(\theta)=0;L(\theta)=\theta^{-2}" titolo="Per i dati 1 e 2, il massimo di L è al bordo θ = 2."}
:::

::::teorema{#massimo-corretto titolo="Correzione del massimo uniforme"}
Con quattro osservazioni da $U(0,10)$ il massimo campionario non supera mai $10$, quindi in media resta sotto $10$; la sua attesa vale $8$. La stima di massima verosimiglianza $m$ è perciò distorta, e il teorema dà il fattore che la corregge.

Per un campione indipendente di numerosità $n$ da $U(0,\theta)$, il massimo $M=\max_i X_i$ ha attesa $E[M]=\dfrac{n}{n+1}\theta$. Lo stimatore $\dfrac{n+1}{n}M$ è quindi corretto per $\theta$.

La stima per momenti $2\bar x$ deriva invece dalla media teorica $\dfrac{\theta}{2}$. La regola corretta usa soltanto il dato più grande, mentre la stima per momenti usa la media di tutti i dati. Con i dati $2,3,9$ la prima dà $\dfrac43\cdot9=12$, la seconda $2\cdot\dfrac{14}{3}=\dfrac{28}{3}\approx9{,}33$.

::grafico{curve="t,4*t^3/10000,0,10" xmin=-0.8 xmax=12 ymin=-0.04 ymax=0.46 nomi="m,y" segmenti="10,0,10,0.4;8,0,8,0.2048" punti="8,0.2048,pieno;10,0.4,pieno" etichette="7.3,0.25,E[M] = 8" legenda="f_M(m)=\dfrac{4m^3}{10^4}" titolo="Densità del massimo di quattro osservazioni da $U(0,10)$. Si concentra vicino all'estremo $10$, ma la sua attesa vale $\dfrac45\cdot10=8$."}

:::dimostrazione
L'evento $\{M\le m\}$ coincide con l'evento in cui tutte le osservazioni sono minori o uguali a $m$. Per $0\le m\le\theta$ ciascuna osservazione è al più $m$ con probabilità $\dfrac m\theta$, e per l'indipendenza le $n$ probabilità si moltiplicano. Si ottiene
$$
P_\theta(M\le m)=\left(\frac{m}{\theta}\right)^n .
$$
La densità di $M$ è la derivata della funzione di ripartizione (capitolo 6), quindi per $0<m<\theta$ vale $\dfrac{nm^{n-1}}{\theta^n}$. Pertanto
$$
E[M]=\int_0^\theta m\cdot\frac{nm^{n-1}}{\theta^n}\,\mathrm dm=\frac{n}{\theta^n}\int_0^\theta m^n\,\mathrm dm
=\frac{n}{\theta^n}\cdot\frac{\theta^{n+1}}{n+1}=\frac{n}{n+1}\theta .
$$
Moltiplicando per $\dfrac{n+1}{n}$ si ricava uno stimatore con attesa $\theta$. Per esempio, con quattro osservazioni il fattore è $\dfrac54$, e un massimo osservato di $8$ dà una stima di $10$. Il fattore $\dfrac{n+1}{n}$ si avvicina a uno al crescere di $n$, perché la probabilità di osservare almeno un dato vicino all'estremo aumenta con il numero di osservazioni indipendenti; con $n=20$ il fattore vale $1{,}05$.
:::
::::

:::attenzione
La stima per momenti può dare un estremo minore di un dato osservato. Per i dati $1,1,7$ si ha $\bar x=3$ e quindi $2\bar x=6$, mentre l'osservazione $7$ richiede un estremo almeno uguale a $7$. Il metodo dei momenti impone soltanto che la media della legge, $\dfrac\theta2$, sia uguale alla media osservata, e non controlla che ogni dato stia in $[0,\theta]$. Nella massima verosimiglianza ogni $\theta<7$ ha verosimiglianza zero, perciò la stima è $7$.
:::

:::esempio{titolo="Un intervallo di massimi"}
Per il modello $U(\theta,\theta+2)$ si usa la densità $\dfrac12$ sull'intervallo chiuso $[\theta,\theta+2]$, che è il supporto. Indicati con $a$ il minimo osservato e con $b$ il massimo osservato, tutti i dati stanno nel supporto esattamente quando
$$
\begin{cases}
\theta\le a,\\
\theta+2\ge b.
\end{cases}
$$
I valori di $\theta$ che soddisfano entrambe le condizioni formano l'intervallo $[b-2,a]$, che non è vuoto quando $b-a\le2$. Su tale intervallo la densità congiunta è costante, perché ogni osservazione contribuisce con lo stesso fattore $\dfrac12$. Per i dati $3$ e $4$ si ha $[b-2,a]=[2,3]$, quindi tutti i valori da $2$ a $3$, estremi inclusi, massimizzano la verosimiglianza. In questo modello la stima di massima verosimiglianza non è unica, perché ogni $\theta\in[2,3]$ è una stima. Se invece $b-a>2$, nessun valore di $\theta$ contiene tutti i dati nel supporto, e la verosimiglianza vale zero per ogni $\theta$.
:::

## Consistenza ed efficienza

:::definizione{#consistenza titolo="Consistenza in probabilità"}
Per prove di Bernoulli con $p=0{,}4$, la frequenza relativa dei successi $\bar X_n$ su $n$ prove dista da $0{,}4$ almeno $0{,}1$ con probabilità al più $\dfrac{0{,}4\cdot0{,}6}{n\cdot0{,}1^2}$, per la disuguaglianza di Chebyshev (capitolo 8). Il limite vale $0{,}24$ per $n=100$ e $0{,}06$ per $n=400$, e tende a zero al crescere di $n$.

Una successione di stimatori $T_n$, uno per ogni numerosità $n$, è **consistente** per $\theta$ se converge in probabilità al parametro (capitolo 8, legge dei grandi numeri), cioè se per ogni $\varepsilon>0$ e ogni $\theta\in\Theta$ vale
$$
\lim_{n\to\infty}P_\theta(|T_n-\theta|>\varepsilon)=0.
$$
Il simbolo $P_\theta$ indica una probabilità calcolata supponendo che $\theta$ sia il valore vero del parametro, come $E_\theta$. L'evento $\{|T_n-\theta|>\varepsilon\}$ contiene i campioni in cui l'errore della stima supera la soglia $\varepsilon$.

Uno stimatore consistente dà, con un numero di dati abbastanza grande, una stima che dista dal parametro meno di $\varepsilon$ con probabilità vicina a $1$. La correttezza riguarda invece l'attesa a una numerosità fissata. I due esempi alla fine di questa sezione mostrano uno stimatore distorto e consistente e uno stimatore corretto e non consistente.
:::

:::teorema{#consistenza-mse titolo="Errore quadratico medio e consistenza"}
Se $MSE_\theta(T_n)\to 0$ per ogni $\theta\in\Theta$, allora $T_n$ è consistente.

La disuguaglianza di Markov (capitolo 8) afferma che, se $Y\ge0$ ha attesa finita e $a>0$, allora $P(Y\ge a)\le\dfrac{E[Y]}{a}$. Applicata a $Y=(T_n-\theta)^2$ con $a=\varepsilon^2$, poiché l'evento $\{|T_n-\theta|>\varepsilon\}$ è contenuto in $\{(T_n-\theta)^2\ge\varepsilon^2\}$, dà
$$
P_\theta(|T_n-\theta|>\varepsilon)
\le \frac{MSE_\theta(T_n)}{\varepsilon^2}.
$$
Il secondo membro tende a zero, quindi anche il primo. Poiché $MSE_\theta(T_n)=\operatorname{Var}_\theta(T_n)+b_\theta(T_n)^2$, la condizione vale quando la distorsione e la varianza tendono entrambe a zero. Per la media di un campione indipendente con varianza finita, l'errore quadratico medio vale $\dfrac{\sigma^2}{n}$ e tende a zero. Con $\sigma^2=9$, $\varepsilon=0{,}5$ e $n=100$ il limite vale $\dfrac{9}{100\cdot0{,}25}=0{,}36$.
:::

:::esempio{titolo="Distorsione e consistenza possono coesistere"}
Il massimo $M_n$ del campione da $U(0,\theta)$ ha attesa $\dfrac{n}{n+1}\theta$, quindi è distorto per ogni $n$. Ogni osservazione sta in $[0,\theta]$, quindi $M_n\le\theta$, e l'errore $|M_n-\theta|$ supera $\varepsilon$ solo quando $M_n<\theta-\varepsilon$. Per $0<\varepsilon<\theta$, usando $P_\theta(M_n\le m)=\left(\dfrac m\theta\right)^n$ con $m=\theta-\varepsilon$, si ha
$$
P_\theta(|M_n-\theta|>\varepsilon)
=P_\theta(M_n<\theta-\varepsilon)
=\left(1-\frac{\varepsilon}{\theta}\right)^n.
$$
La base è compresa fra zero e uno, quindi la potenza tende a zero. Per $\varepsilon\ge\theta$ la probabilità è già nulla. Il massimo campionario è dunque consistente anche senza correzione.

::grafico{xmin=-0.8 xmax=21.5 ymin=-0.08 ymax=1.1 nomi="n,P" punti="1,0.9;2,0.81;3,0.729;4,0.6561;5,0.5905;6,0.5314;7,0.4783;8,0.4305;9,0.3874;10,0.3487;11,0.3138;12,0.2824;13,0.2542;14,0.2288;15,0.2059;16,0.1853;17,0.1668;18,0.1501;19,0.1351;20,0.1216" titolo="Valori di $\left(1-\dfrac{\varepsilon}{\theta}\right)^n$ con $\dfrac{\varepsilon}{\theta}=\dfrac{1}{10}$, per $n$ da $1$ a $20$. Per $n=20$ la probabilità di un errore maggiore di $\varepsilon$ è circa $0{,}12$."}
:::

:::attenzione
Si consideri un campione da una popolazione con varianza positiva e lo stimatore $T_n=X_1$, che usa soltanto la prima osservazione qualunque sia $n$. È corretto per la media, perché $E[X_1]=\mu$. La legge di $X_1$ però non cambia al crescere di $n$. Se, per esempio, la popolazione è normale con deviazione standard $\sigma=1$, si ha $P(|X_1-\mu|>1)\approx0{,}32$ per ogni $n$, e questa probabilità non tende a zero. Lo stimatore è quindi corretto a ogni numerosità ma non consistente.
:::

:::osservazione{#efficienza titolo="Confronto di precisione a condizioni fissate"}
Per due osservazioni indipendenti con la stessa media e varianza $\sigma^2>0$, si considerino $T=\dfrac{X_1+X_2}{2}$ e $U=\dfrac{3X_1+X_2}{4}$. I pesi di entrambe le combinazioni sommano a uno, quindi entrambi gli stimatori sono corretti per la media. Per la formula della varianza di una combinazione lineare di variabili indipendenti (capitolo 7) le varianze sono
$$
\operatorname{Var}(T)=\frac{1+1}{4}\sigma^2=\frac{\sigma^2}{2},\qquad
\operatorname{Var}(U)=\frac{9+1}{16}\sigma^2=\frac{5\sigma^2}{8}.
$$
La media $T$ è più precisa a parità di dati, perché la sua varianza è minore.

Per due stimatori corretti dello stesso parametro, sotto lo stesso modello e con la stessa numerosità, l'**efficienza relativa** di $T$ rispetto a $U$ è il rapporto delle varianze $\dfrac{\operatorname{Var}(U)}{\operatorname{Var}(T)}$. Qui vale $\dfrac{5}{8}\cdot2=\dfrac54$, quindi $T$ è più efficiente di $U$. Se le due osservazioni non sono indipendenti, nella varianza compare anche il termine con la covarianza (capitolo 7).

Se uno dei due stimatori è distorto, si confrontano gli errori quadratici medi, che contengono anche la distorsione, come nell'esempio seguente.
:::

:::esempio{titolo="Il confronto può dipendere dal parametro"}
Sia $X$ una misura con media $\theta$ e varianza $1$. Si confrontano $T=X$ e $U=\dfrac X2$. Per $T$ l'errore quadratico medio è $1$. Per $U$ la varianza è $\dfrac14$ e la distorsione è $\dfrac\theta2-\theta=-\dfrac{\theta}{2}$, quindi $MSE_\theta(U)=\dfrac14+\dfrac{\theta^2}{4}=\dfrac{1+\theta^2}{4}$. Per $\theta=0$ la seconda regola ha errore quadratico medio $\dfrac14$, mentre per $\theta=2$ ha errore quadratico medio $\dfrac54$. Lo stimatore $U$ dimezza la misura, quindi ha varianza minore di quella di $T$ per ogni $\theta$, ma ha una distorsione che cresce con $|\theta|$. Si ha $\dfrac{1+\theta^2}{4}<1$ esattamente quando $\theta^2<3$, perciò $U$ ha errore minore per $|\theta|<\sqrt3$ e maggiore per $|\theta|>\sqrt3$.

::grafico{f="1;(1+x^2)/4" xmin=-3.1 xmax=3.1 ymin=-0.25 ymax=2.9 nomi="θ,R" punti="-1.73205,1;1.73205,1;0,0.25;2,1.25" segmenti="-1.73205,0,-1.73205,1;1.73205,0,1.73205,1" legenda="MSE_\theta(T);MSE_\theta(U)" titolo="Vicino a zero la curva di U sta sotto la retta di T. I due errori coincidono per θ uguale a −√3 e √3."}
:::
