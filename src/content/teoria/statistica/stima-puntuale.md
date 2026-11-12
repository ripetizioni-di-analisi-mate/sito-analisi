---
titolo: "Stima puntuale e massima verosimiglianza"
sommario: "Stimatori, errore quadratico medio, metodo dei momenti e massima verosimiglianza, con esempi di consistenza ed efficienza."
---

## Parametro, stimatore e stima

:::definizione{#stimatore titolo="Stimatore e stima osservata"}
Un modello statistico assegna ai dati una famiglia di leggi, indicizzate da un **parametro** $\theta$ che appartiene a un insieme $\Theta$. Per esempio, se $X$ indica il risultato di una prova di Bernoulli, il parametro $p$ è la probabilità di successo e l'insieme dei valori ammissibili è $[0,1]$. Nel modello frequentista il parametro ha un valore fisso, ignoto prima di osservare i dati.

Siano $X_1,\ldots,X_n$ le variabili che descrivono il campione. Uno **stimatore** di $\theta$ è una statistica $T=T(X_1,\ldots,X_n)$ scelta per approssimare $\theta$. La regola dipende dai dati e da eventuali quantità note. Con le osservazioni $x_1,\ldots,x_n$ si ottiene la **stima** $t=T(x_1,\ldots,x_n)$. Lo stimatore è una variabile aleatoria perché il campione può cambiare. La stima è il numero già calcolato sul campione osservato.

Quando si stima una media, $\bar X$ indica la media campionaria come variabile aleatoria e $\bar x$ indica la media dei valori osservati. Per un parametro generico si usa anche $\widehat{\theta}$, specificando dal contesto se si intende la regola oppure il suo valore sui dati fissati.
:::

:::esempio{titolo="Due stime da una stessa rilevazione"}
Su cinque turni scelti indipendentemente si registrano $1,0,2,1,1$ richieste d'intervento. Per stimare il numero medio di richieste per turno si può usare $\bar X$. Con questi dati si ottiene $\bar x=1$. Per stimare la probabilità che in un turno ci sia almeno una richiesta si usa invece la media degli indicatori $\mathbf{1}_{\{X_i\ge 1\}}$, che valgono uno nei turni con almeno una richiesta. La stima corrispondente è $\dfrac45$ perché quattro turni soddisfano la condizione. I due numeri si riferiscono a parametri diversi, quindi rispondono a domande diverse sullo stesso insieme di osservazioni.
:::

:::osservazione
La distribuzione di $T$ sotto la legge indicizzata da $\theta$ è la sua distribuzione campionaria. Si scrivono $E_\theta[T]$ e $\operatorname{Var}_\theta(T)$ per ricordare che attesa e varianza sono calcolate supponendo che quel valore di $\theta$ governi i dati. Due regole possono dare la stessa stima in una rilevazione e avere distribuzioni campionarie diverse. La media di tutte le osservazioni e il valore della prima osservazione, per esempio, coincidono su un campione costante. Su campioni indipendenti con varianza positiva, la prima osservazione è più variabile della media.
:::

:::attenzione
Una regola di stima deve poter essere calcolata con le osservazioni e le quantità note. L'espressione $X_1-\mu$ ha attesa zero quando $E[X_1]=\mu$, ma richiede di conoscere $\mu$. Può essere usata per analizzare gli errori di misura. Quando $\mu$ è il parametro ignoto, essa non è una statistica osservabile. Lo scarto $X_1-\bar X$ è invece calcolabile e descrive la distanza della prima osservazione dal centro del campione.
:::

## Distorsione ed errore quadratico medio

:::definizione{#eqm titolo="Distorsione e correttezza"}
Se $E_\theta[|T|]$ è finito, la **distorsione** di $T$ è lo scarto medio con segno
$$
b_\theta(T)=E_\theta[T]-\theta.
$$
Lo stimatore è **corretto** se questo scarto vale zero per ogni $\theta\in\Theta$. Quando il segno è positivo le stime eccedono in media il parametro. Quando è negativo le stime sono mediamente inferiori. La correttezza è una proprietà della regola e può essere verificata calcolando l'attesa senza conoscere il valore vero del parametro.
:::

::::teorema{#scomposizione-mse titolo="Scomposizione dell'errore quadratico medio"}
Per uno stimatore reale $T$ con secondo momento finito, l'**errore quadratico medio** è $MSE_\theta(T)=E_\theta[(T-\theta)^2]$. Si ha
$$
MSE_\theta(T)=\operatorname{Var}_\theta(T)+b_\theta(T)^2.
$$
La varianza misura la dispersione attorno all'attesa dello stimatore. Il quadrato della distorsione misura quanto tale attesa si discosta dal parametro. Per uno stimatore corretto il secondo contributo è nullo, quindi confrontare gli errori quadratici medi equivale a confrontare le varianze.

:::dimostrazione
Si separa lo scarto dal parametro in uno scarto centrato e una costante. Ponendo $m=E_\theta[T]$, si ottiene
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
Per un dato valore di $\theta$, lo stimatore $T$ è corretto e ha varianza $5$. Lo stimatore $U$ ha attesa $\theta-1$ e varianza $3$. Gli errori quadratici medi valgono
$$
MSE_\theta(T)=5+0^2=5,\qquad
MSE_\theta(U)=3+(-1)^2=4.
$$
In questo punto dello spazio dei parametri, la diminuzione della varianza è maggiore del contributo della distorsione al quadrato. Per affermare che $U$ è preferibile in tutta la famiglia, occorrerebbe ripetere il confronto per ogni valore ammissibile di $\theta$.
:::

## Media e varianza campionarie

:::teorema{#media-corretta titolo="Attesa e varianza della media campionaria"}
Siano $X_1,\ldots,X_n$ indipendenti e identicamente distribuite, con media $\mu$ e varianza finita $\sigma^2$. La media campionaria è corretta per $\mu$ e ha varianza
$$
E[\bar X]=\frac{1}{n}\sum_{i=1}^nE[X_i]=\mu,\qquad
\operatorname{Var}(\bar X)=\frac{\sigma^2}{n}.
$$
La formula per l'attesa segue dalla linearità. Quella per la varianza segue dall'indipendenza, che rende nulle le covarianze fra osservazioni distinte. Con $n=16$ e $\sigma^2=36$, l'errore standard di $\bar X$, cioè la sua deviazione standard, vale $\sqrt{\dfrac{36}{16}}=1{,}5$.
:::

::::teorema{#varianza-corretta titolo="Correttezza della varianza campionaria"}
Sia dato un campione indipendente e identicamente distribuito di numerosità $n>1$, con media $\mu$ e varianza finita $\sigma^2$. Si indica con $D=\sum_{i=1}^n(X_i-\bar X)^2$ la somma degli scarti quadratici dalla media campionaria. Allora
$$
E[D]=(n-1)\sigma^2,\qquad
E[S^2]=\sigma^2,\qquad S^2=\frac{D}{n-1}.
$$
La statistica $S^2$ è la **varianza campionaria corretta**. Con il divisore $n$, la statistica $V_n=\dfrac{D}{n}$ ha invece attesa $\dfrac{n-1}{n}\sigma^2$. La sua distorsione vale $-\dfrac{\sigma^2}{n}$.

:::dimostrazione
Si esprime la somma degli scarti dal centro osservato in funzione degli scarti dalla media della popolazione. Infatti $X_i-\bar X=(X_i-\mu)-(\bar X-\mu)$ e $\sum_i(X_i-\mu)=n(\bar X-\mu)$. Sviluppando i quadrati si ottiene
$$
D=\sum_{i=1}^n(X_i-\mu)^2-n(\bar X-\mu)^2.
$$
Il primo termine ha attesa $n\sigma^2$. Il secondo ha attesa $n\operatorname{Var}(\bar X)=\sigma^2$, perché $\bar X$ è corretta per $\mu$. Perciò $E[D]=n\sigma^2-\sigma^2$. Dividendo per $n-1$ si ottiene la tesi.
:::
::::

:::esempio{titolo="La stessa somma con due divisori"}
Sui dati $2,5,8$ la media osservata vale $5$. Gli scarti sono $-3,0,3$ e la somma dei quadrati vale $18$. La varianza campionaria corretta osservata è $s^2=\dfrac{18}{2}=9$, mentre con il divisore $n$ si ottiene $v_n=\dfrac{18}{3}=6$. I due numeri usano gli stessi scarti. La differenza dipende da come si vuole usare la somma, per descrivere le osservazioni con il divisore $n$ oppure per stimare senza distorsione la varianza della popolazione con il divisore $n-1$.
:::

:::attenzione
Se la media $\mu$ è nota, gli scarti da $\mu$ hanno ciascuno secondo momento $\sigma^2$. La statistica $\dfrac1n\sum_i(X_i-\mu)^2$ è già corretta. La correzione con $n-1$ si applica agli scarti dalla media stimata. Inoltre, prendere la radice di uno stimatore corretto della varianza può introdurre distorsione. Per la concavità della radice, $E[S]\le \sqrt{E[S^2]}=\sigma$, con disuguaglianza stretta quando $S^2$ non è costante quasi certamente.
:::

## Metodo dei momenti

:::definizione{#momenti titolo="Equazioni dei momenti"}
Il **metodo dei momenti** associa a un momento della legge un'analoga quantità calcolabile sui dati. Per il momento di ordine $j$, dove $j$ è un intero positivo, si pongono
$$
m_j(\theta)=E_\theta[X^j],\qquad
\widehat m_j=\frac{1}{n}\sum_{i=1}^n X_i^j.
$$
Il momento teorico deve esistere. Si uguagliano tanti momenti empirici quanti ne servono per identificare i parametri. In un modello a un parametro, se la media teorica determina univocamente $\theta$, si risolve $E_\theta[X]=\bar x$ sui dati osservati. Con più parametri si verifica che il sistema determini una soluzione ammissibile. Un momento empirico può corrispondere a più soluzioni o trovarsi fuori dall'insieme dei valori consentiti dal modello.
:::

:::esempio{titolo="Una media con due interpretazioni"}
Per un campione di Poisson, $E_\lambda[X]=\lambda$, quindi il metodo dei momenti dà $\widehat\lambda=\bar X$. Per un'esponenziale parametrizzata mediante il tasso $\lambda>0$, vale invece $E_\lambda[X]=\dfrac1\lambda$, quindi si ottiene $\widehat\lambda=\dfrac{1}{\bar X}$ per $\bar X>0$. Se la media osservata è $4$ in entrambi i casi, le stime sono $4$ e $\dfrac14$. La legge determina l'equazione da risolvere. Nel modello esponenziale il tasso è l'inverso della scala, quindi se la media è espressa in minuti il tasso è espresso per minuto.
:::

:::esempio{titolo="Due momenti per media e varianza"}
Per una normale $N(\mu,\sigma^2)$ con entrambi i parametri ignoti, $E[X]=\mu$ e $E[X^2]=\mu^2+\sigma^2$. Il primo momento dà $\widehat\mu=\bar X$. Sostituendo nel secondo si ottiene
$$
\widehat{\sigma^2}=\frac{1}{n}\sum_{i=1}^n X_i^2-\bar X^2
=\frac{1}{n}\sum_{i=1}^n (X_i-\bar X)^2.
$$
La seconda identità si ricava sviluppando la somma degli scarti al quadrato. Con i dati $1,3,5$ si ha $\widehat\mu=3$ e $\widehat{\sigma^2}=\dfrac{35}{3}-9=\dfrac83$. Poiché il divisore è $n$, questa stima per momenti deriva da uno stimatore distorto. Per una normale non degenere è richiesto $\sigma^2>0$, quindi con tutti i dati uguali il sistema non ammette una soluzione nello spazio dei parametri.
:::

## Verosimiglianza e ricerca del massimo

:::definizione{#verosimiglianza titolo="Verosimiglianza e log-verosimiglianza"}
Fissate le osservazioni $x_1,\ldots,x_n$, la **verosimiglianza** è la funzione del parametro che assegna a ogni $\theta$ la densità congiunta valutata sui dati, oppure la massa congiunta nel caso discreto. Per un campione indipendente con densità comune $f_\theta$, oppure con massa comune indicata allo stesso modo, vale
$$
L(\theta;x_1,\ldots,x_n)=\prod_{i=1}^n f_\theta(x_i).
$$
Una **stima di massima verosimiglianza** è un punto dello spazio dei parametri in cui $L$ assume il massimo. Dove $L$ è positiva si può massimizzare $\ell(\theta)=\log L(\theta)$, perché il logaritmo è strettamente crescente. Il prodotto diventa una somma. È quindi spesso più comodo calcolare e studiare le derivate di $\ell$.
:::

:::osservazione
Una costante additiva nella log-verosimiglianza, indipendente dal parametro, lascia invariato l'insieme dei massimi. Per esempio, per $K$ di legge binomiale con numerosità nota $n$, osservare $K=k$ dà un coefficiente $\binom nk$ nella verosimiglianza. Poiché il coefficiente dipende dai dati e da $n$, aggiunge alla log-verosimiglianza una costante rispetto a $p$. Si può quindi svolgere l'ottimizzazione usando i soli termini $k\log p$ e $(n-k)\log(1-p)$.
:::

:::attenzione
L'equazione $\ell'(\theta)=0$ individua i candidati interni in cui la funzione è derivabile. Il massimo può trovarsi sul bordo o mancare quando l'insieme dei parametri esclude il punto a cui si tende. Su $[0,1]$ la funzione $L(\theta)=\theta^3$ ha massimo in $1$ anche se la derivata è positiva in tutto l'interno. Su $(0,1)$ ha lo stesso estremo superiore, ma nessun massimo. La verosimiglianza è inoltre una funzione valutata a dati fissati. Il suo integrale rispetto a $\theta$ non è in generale uno, quindi la sua altezza non si interpreta come probabilità del parametro.
:::

:::esempio{titolo="Confronto fra parametri discreti"}
Si considerino le sole probabilità di successo $\dfrac14$ e $\dfrac12$. In tre prove Bernoulli indipendenti si osservano, nell'ordine, due successi e un insuccesso. In questo modello lo spazio dei parametri contiene due punti, quindi si confrontano i valori della verosimiglianza.

$$
L\!\left(\frac14\right)=\left(\frac14\right)^2\frac34=\frac{3}{64},
\qquad
L\!\left(\frac12\right)=\left(\frac12\right)^3=\frac18 .
$$

Poiché $\dfrac18>\dfrac{3}{64}$, il valore di massima verosimiglianza è $\dfrac12$. Se si osservasse solo il numero di successi, ciascuno dei due valori sarebbe moltiplicato per $3$, cioè per il numero di sequenze con due successi. Il confronto resterebbe lo stesso.
:::

:::osservazione{#invarianza-mle titolo="Stima dopo un cambio di parametro"}
Se $\eta=g(\theta)$ è una riparametrizzazione biunivoca, ogni valore ammissibile di $\eta$ corrisponde a uno e un solo valore di $\theta$. La verosimiglianza in funzione di $\eta$ è quindi $L(g^{-1}(\eta))$. Se il massimo in $\theta$ si trova in $\widehat\theta$, quello nella nuova parametrizzazione si trova in $g(\widehat\theta)$, perché le due funzioni assumono gli stessi valori nei punti corrispondenti. Per esempio, con un tasso esponenziale stimato pari a $\dfrac14$ per minuto, la scala stimata è $4$ minuti. Questa trasformazione preserva il massimo della verosimiglianza. La correttezza, che dipende dall'attesa, va verificata separatamente per il nuovo parametro.
:::

## Massima verosimiglianza in modelli comuni

::::teorema{#mle-bernoulli titolo="Massima verosimiglianza per Bernoulli"}
Siano $x_1,\ldots,x_n$ osservazioni di prove Bernoulli indipendenti con parametro $p\in[0,1]$. Posto $k=\sum_i x_i$, la stima di massima verosimiglianza è $\widehat p=\dfrac{k}{n}$. Essa coincide con la proporzione campionaria e si può calcolare contando i successi.

:::dimostrazione
Se $0<k<n$, la log-verosimiglianza all'interno di $[0,1]$ ha derivata
$$
\ell'(p)=\frac{k}{p}-\frac{n-k}{1-p}
=\frac{k-np}{p(1-p)}.
$$
Il denominatore è positivo, quindi la derivata è positiva prima di $\dfrac{k}{n}$ e negativa dopo. Ai bordi la verosimiglianza è nulla, perché sono stati osservati sia successi sia insuccessi. Se $k=0$, la verosimiglianza è $(1-p)^n$ e il massimo è in $0$. Se $k=n$, è $p^n$ e il massimo è in $1$.
:::
::::

:::esempio{titolo="Stima di un tasso esponenziale"}
Per osservazioni indipendenti di legge esponenziale di tasso $\lambda>0$, sia $s=\sum_i x_i$ e si supponga $s>0$. La log-verosimiglianza vale $\ell(\lambda)=n\log\lambda-\lambda s$. Si ricava $\ell'(\lambda)=\dfrac{n}{\lambda}-s$. L'unico zero è $\widehat\lambda=\dfrac ns$ e la derivata passa da positiva a negativa. Per $2,3,7$ minuti si ha $\widehat\lambda=\dfrac{3}{12}=\dfrac14\,\mathrm{min}^{-1}$. L'inverso della media osservata coincide in questo modello con la stima per momenti.
:::

:::osservazione{#mle-poisson titolo="Stima dell'intensità di Poisson"}
Per osservazioni indipendenti di Poisson con parametro $\lambda\ge0$, il prodotto delle masse è
$$
L(\lambda)=\frac{e^{-n\lambda}\lambda^{s}}{\prod_i x_i!},
\qquad s=\sum_i x_i.
$$
Se $s>0$, all'interno del dominio si ha $\ell'(\lambda)=\dfrac{s}{\lambda}-n$. Il segno è positivo per $\lambda<\dfrac{s}{n}$ e negativo per $\lambda>\dfrac{s}{n}$. La stima è quindi $\dfrac{s}{n}=\bar x$. Se $s=0$, il prodotto vale $e^{-n\lambda}$, quindi il massimo è in $\lambda=0$ quando la legge degenere è ammessa. Se il dominio impone $\lambda>0$, l'estremo superiore della verosimiglianza è $1$ e si ottiene come limite per $\lambda\to0^+$.
:::

:::osservazione{#correzione-tasso titolo="Distorsione del tasso esponenziale"}
Per un campione di $n>1$ osservazioni indipendenti esponenziali con tasso $\lambda$, la somma $A=\sum_i X_i$ ha legge gamma di forma $n$ e tasso $\lambda$. Nella densità di $A$, il fattore $a^{n-1}$ diventa $a^{n-2}$ quando si calcola l'attesa dell'inverso. Riconoscendo l'integrale della densità gamma di forma $n-1$ si ricava $E[\dfrac1A]=\dfrac{\lambda}{n-1}$. Pertanto $\dfrac nA$ ha attesa $\dfrac{n}{n-1}\lambda$ e distorsione positiva. La regola $\dfrac{n-1}{A}$ ha invece attesa $\lambda$. L'esempio mostra che una stima ottenuta massimizzando la verosimiglianza può richiedere una correzione se l'obiettivo è la correttezza.
:::

:::osservazione{#mle-normale titolo="Media e varianza nella normale"}
Per un campione normale indipendente, la log-verosimiglianza dipende da $\mu$ attraverso $\sum_i(x_i-\mu)^2$ con segno negativo. A varianza fissata si massimizza quindi scegliendo $\widehat\mu=\bar x$, perché
$$
\sum_{i=1}^n(x_i-\mu)^2
=\sum_{i=1}^n(x_i-\bar x)^2+n(\bar x-\mu)^2.
$$
Se si stima anche la varianza, si sostituisce $\bar x$ e si pone $v=\sigma^2>0$. Indicata con $d$ la somma dei quadrati degli scarti da $\bar x$, si ottiene
$$
\ell'(v)=-\frac{n}{2v}+\frac{d}{2v^2}
=\frac{d-nv}{2v^2}.
$$
Per $d>0$ il massimo si trova in $v=\dfrac dn$. Il divisore è quello derivato dall'ottimizzazione. Se la media è nota, la somma quadratica è calcolata attorno alla media nota e il divisore resta $n$. Nel caso limite $d=0$ la log-verosimiglianza cresce senza limite al tendere di $v$ a zero, che è escluso dal modello normale non degenere.
:::

## Supporto dipendente dal parametro

:::esempio{#uniforme titolo="Stima dell'estremo di un'uniforme"}
Siano $x_1,\ldots,x_n$ osservazioni indipendenti da $U(0,\theta)$, con $\theta>0$. Si usa la versione della densità che vale $\dfrac1\theta$ su $[0,\theta]$, estremi inclusi, e zero altrove. Se i dati sono non negativi e il massimo osservato $m$ è positivo, i valori $\theta<m$ hanno verosimiglianza zero. Per $\theta\ge m$ si ha invece $L(\theta)=\theta^{-n}$. La funzione è strettamente decrescente sulla parte ammissibile, quindi il massimo è in $\widehat\theta=m$.

Per $x_1=1$ e $x_2=2$, la verosimiglianza vale zero prima di $2$ e vale $\theta^{-2}$ a partire da $2$. Il punto $(2,0)$ è escluso dal tratto a sinistra, mentre il punto $(2,\dfrac14)$ è incluso nel tratto a destra. Il salto si deve all'ingresso del valore massimo osservato nel supporto della densità.

::grafico{curve="t,0,0.1,2;t,1/(t*t),2,5.3" xmin=-0.35 xmax=5.5 ymin=-0.075 ymax=0.39 punti="2,0,vuoto;2,0.25,pieno" segmenti="2,0,2,0.25" nomi="θ,L" legenda="L(\theta)=0;L(\theta)=\theta^{-2}" titolo="Per i dati 1 e 2, il massimo di L è al bordo θ = 2."}
:::

::::teorema{#massimo-corretto titolo="Correzione del massimo uniforme"}
Per un campione indipendente di numerosità $n$ da $U(0,\theta)$, il massimo $M=\max_i X_i$ ha attesa $E[M]=\dfrac{n}{n+1}\theta$. La correzione $\dfrac{n+1}{n}M$ è quindi corretta per $\theta$. La stima per momenti $2\bar x$ deriva invece dalla media teorica $\dfrac{\theta}{2}$. Le due regole usano informazioni diverse del campione.

:::dimostrazione
L'evento $\{M\le m\}$ coincide con l'evento in cui tutte le osservazioni sono minori o uguali a $m$. Per $0\le m\le\theta$, l'indipendenza dà
$$
P_\theta(M\le m)=\left(\frac{m}{\theta}\right)^n .
$$
Derivando in $0<m<\theta$ si ottiene la densità $\dfrac{nm^{n-1}}{\theta^n}$. Pertanto
$$
E[M]=\frac{n}{\theta^n}\int_0^\theta m^n\,\mathrm dm
=\frac{n}{n+1}\theta .
$$
Moltiplicando per $\dfrac{n+1}{n}$ si ricava uno stimatore con attesa $\theta$. Per esempio, con quattro osservazioni il fattore è $\dfrac54$. Un massimo osservato di $8$ dà così una stima di $10$. La correzione è più vicina a uno nei campioni più numerosi, perché la probabilità di osservare almeno un dato vicino all'estremo aumenta con il numero di osservazioni indipendenti.
:::
::::

:::attenzione
La stima per momenti può dare un estremo incompatibile con il supporto dei dati. Per $1,1,7$ si ha $\bar x=3$ e quindi $2\bar x=6$, mentre l'osservazione $7$ richiede un estremo almeno uguale a $7$. Il metodo dei momenti soddisfa l'equazione sulla media e restituisce un parametro positivo. La massima verosimiglianza tiene conto del supporto di ciascuna osservazione e dà $7$.
:::

:::esempio{titolo="Un intervallo di massimi"}
Per il modello $U(\theta,\theta+2)$ si usa la densità $\dfrac12$ sul supporto chiuso. Una volta fissati il minimo osservato $a$ e il massimo osservato $b$, tutti i dati sono nel supporto esattamente quando
$$
\begin{cases}
\theta\le a,\\
\theta+2\ge b.
\end{cases}
$$
I valori compatibili formano l'intervallo $[b-2,a]$ quando $b-a\le2$. La densità congiunta è costante su tale intervallo, perché ogni osservazione contribuisce con lo stesso fattore $\dfrac12$. Per i dati $3$ e $4$ tutti i valori da $2$ a $3$, estremi inclusi, massimizzano quindi la verosimiglianza. L'insieme dei massimi può contenere più punti anche quando i dati sono compatibili con il modello.
:::

## Consistenza ed efficienza

:::definizione{#consistenza titolo="Consistenza in probabilità"}
Una successione di stimatori $T_n$ è **consistente** per $\theta$ se converge in probabilità al parametro. Per ogni $\varepsilon>0$ e ogni $\theta\in\Theta$ deve valere
$$
\lim_{n\to\infty}P_\theta(|T_n-\theta|>\varepsilon)=0.
$$
L'evento considerato comprende le stime il cui errore assoluto supera una soglia fissata. La consistenza descrive ciò che accade al crescere della numerosità, mentre la correttezza riguarda l'attesa a una data numerosità.
:::

:::teorema{#consistenza-mse titolo="Errore quadratico medio e consistenza"}
Se $MSE_\theta(T_n)\to 0$ per ogni $\theta\in\Theta$, allora $T_n$ è consistente. Infatti la disuguaglianza di Markov applicata a $(T_n-\theta)^2$ dà
$$
P_\theta(|T_n-\theta|>\varepsilon)
\le \frac{MSE_\theta(T_n)}{\varepsilon^2}.
$$
La condizione vale, per esempio, se la distorsione e la varianza tendono entrambe a zero. Per la media di un campione indipendente con varianza finita, l'errore quadratico medio vale $\dfrac{\sigma^2}{n}$ e tende a zero.
:::

:::esempio{titolo="Distorsione e consistenza possono coesistere"}
Il massimo $M_n$ del campione da $U(0,\theta)$ è distorto per ogni $n$ finito. Poiché $M_n\le\theta$ quasi certamente, per $0<\varepsilon<\theta$ si ha
$$
P_\theta(|M_n-\theta|>\varepsilon)
=P_\theta(M_n<\theta-\varepsilon)
=\left(1-\frac{\varepsilon}{\theta}\right)^n.
$$
La base è compresa tra zero e uno, quindi la potenza tende a zero. Per $\varepsilon\ge\theta$ la probabilità è già nulla. Il massimo campionario è dunque consistente anche senza correzione.
:::

:::attenzione
Consideriamo il campione di una popolazione con varianza positiva e lo stimatore $T_n=X_1$ per qualunque $n$. È corretto per la media perché $E[X_1]=\mu$. Poiché la distribuzione di $X_1$ resta la stessa al crescere di $n$, esiste una soglia positiva per la quale la probabilità di errore oltre soglia rimane positiva. Lo stimatore è quindi corretto a ogni numerosità ma non consistente.
:::

:::osservazione{#efficienza titolo="Confronto di precisione a condizioni fissate"}
Quando due stimatori sono corretti per lo stesso parametro, sotto lo stesso modello e a parità di numerosità si può confrontare la loro **efficienza relativa** attraverso la varianza. Per due osservazioni indipendenti con la stessa media e varianza $\sigma^2>0$, sia $T=\dfrac{X_1+X_2}{2}$ e $U=\dfrac{3X_1+X_2}{4}$. I pesi di entrambe le combinazioni sommano a uno, quindi i due stimatori sono corretti. Le varianze sono $\dfrac{\sigma^2}{2}$ e $\dfrac{5\sigma^2}{8}$. La media è più precisa a parità di dati perché la sua varianza è minore. In presenza di distorsione, l'errore quadratico medio permette di includere anche la differenza tra attesa e parametro.
:::

:::esempio{titolo="Il confronto può dipendere dal parametro"}
Sia $X$ una misura con media $\theta$ e varianza $1$. Si confrontino $T=X$ e $U=\dfrac X2$. Per $T$ l'errore quadratico medio è $1$. Per $U$ la varianza è $\dfrac14$ e la distorsione è $-\dfrac{\theta}{2}$, quindi $MSE_\theta(U)=\dfrac{1+\theta^2}{4}$. Per $\theta=0$ la seconda regola ha errore quadratico medio $\dfrac14$, mentre per $\theta=2$ ha errore quadratico medio $\dfrac54$. Il restringimento dei valori verso zero riduce la varianza in entrambi i casi. La distanza del parametro da zero stabilisce se tale riduzione compensa la distorsione.
:::
