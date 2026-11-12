---
titolo: "Trasformata di Laplace"
sommario: "Semipiano di convergenza, trasformate elementari, ritardi, convoluzione, antitrasformazione ed equazioni differenziali con dati iniziali."
---

## Trasformata unilatera e convergenza

:::definizione{#laplace titolo="Trasformata di Laplace"}
Per una funzione localmente integrabile su $[0,\infty)$ si definisce
$$
F(s)=\mathcal L[f](s)=\int_0^\infty e^{-st}f(t)\,dt,\qquad s\in\mathbb C,
$$
nei punti di convergenza assoluta. Se $|f(t)|\le Me^{at}$ per $t$ sufficientemente grande, l'integrale converge per $\operatorname{Re}s>a$. Sul semipiano di convergenza assoluta $F$ è olomorfa. La trasformata è detta **unilatera** perché l'integrale considera solo i tempi non negativi. Nei problemi di Cauchy i dati in zero sono perciò i valori destri.

Per $f=1$, l'integrale vale $\dfrac1s$ per $\operatorname{Re}s>0$. La trasformata è quindi la formula accompagnata dal suo semipiano di convergenza.
:::

:::osservazione
Scriviamo $s=\sigma+i\omega$. Il fattore $e^{-st}$ ha modulo $e^{-\sigma t}$. La stima di convergenza dipende quindi da $\sigma$. Per $f(t)=e^t$, ad esempio, il modulo dell'integrando è $e^{-(\sigma-1)t}$. Se $\sigma>1$, l'integrale assoluto è finito. Per $\sigma=1$ il modulo è costante, anche quando $\omega$ è diverso da zero. L'integrale della formula che definisce la trasformata converge assolutamente nel semipiano aperto a destra della retta $\operatorname{Re}s=1$.

::grafico{nomi="σ,ω" xmin=-2 xmax=5 ymin=-3 ymax=3 uguale=1 poligoni="1,-3 5,-3 5,3 1,3" asintoti="x=1" punti="1,1,vuoto;2,1,pieno" titolo="Per $f(t)=e^t$, il punto $2+i$ è nel semipiano di convergenza assoluta. Il punto $1+i$ sta sulla frontiera, dove il modulo dell'integrando è uguale a uno."}
:::

:::attenzione
La formula razionale ottenuta nel semipiano può avere valori anche fuori da esso. Per $f(t)=e^t$ la formula è $\dfrac1{s-1}$ e in $s=0$ restituisce $-1$. L'integrale che definisce $\mathcal L[f](0)$, invece, è $\int_0^\infty e^t\,dt$ e diverge. Il valore $-1$ appartiene al prolungamento della formula razionale.
:::

:::osservazione
Per derivare rispetto a $s$ in un punto interno si sceglie un piccolo disco interamente contenuto nel semipiano. Si può farlo in modo che anche un semipiano leggermente più ampio contenga il disco e sia ancora di convergenza assoluta. Rispetto al peso nel semipiano più ampio, la derivata introduce il fattore $t$ e mantiene un margine di smorzamento esponenziale. La funzione $t e^{-\varepsilon t}$ è limitata per $\varepsilon>0$, quindi fornisce una maggiorazione integrabile uniforme sul disco. Lo stesso ragionamento vale per ciascuna potenza di $t$ e giustifica le derivate sotto il segno di integrale.
:::

:::esempio{titolo="Una stima di crescita e il semipiano effettivo"}
Sia $f(t)=e^{2t}-e^t$ per $t\ge0$. Una stima con $2e^{3t}$ basta a ottenere la convergenza per $\operatorname{Re}s>3$. Si può trovare il semipiano esatto fattorizzando $f$ come $e^{2t}(1-e^{-t})$. Per $t\ge\log 2$ il fattore $1-e^{-t}$ è compreso fra $\dfrac12$ e $1$. Posto $\sigma=\operatorname{Re}s$, il modulo dell'integrando è quindi compreso fra
$$
\frac12 e^{-(\sigma-2)t}
\qquad\text{e}\qquad
e^{-(\sigma-2)t}.
$$
Per $\sigma>2$ la maggiorazione è integrabile sulla coda. Per $\sigma\le2$ l'integrale della minorazione diverge. Su un intervallo limitato il prodotto è continuo, quindi la coda è l'unico tratto che determina la convergenza. Il semipiano effettivo è $\operatorname{Re}s>2$. In esso entrambe le trasformate elementari convergono e si ottiene
$$
F(s)=\frac1{s-2}-\frac1{s-1}
=\frac1{(s-2)(s-1)}.
$$
:::

:::attenzione
Sulla frontiera occorre esaminare l'integrando. Per esempio, con $f(t)=\dfrac{e^{2t}}{(1+t)^2}$ e $\operatorname{Re}s=2$, il modulo è $\dfrac1{(1+t)^2}$, che è integrabile sul semiasse. Con $g(t)=\dfrac{e^{2t}}{1+t}$, sulla stessa retta il modulo è $\dfrac1{1+t}$ e l'integrale diverge. Entrambe le funzioni hanno il medesimo semipiano aperto di convergenza. La differenza sulla frontiera dipende dal fattore che rimane dopo la cancellazione dei due esponenziali. I punti in cui la convergenza assoluta vale sulla frontiera sono fuori dal semipiano aperto in cui si è giustificata l'olomorfia.
:::

## Trasformate elementari

:::teorema{#tabella-laplace titolo="Potenze, esponenziali e funzioni trigonometriche"}
Per interi $n\ge0$, $a\in\mathbb R$ e $b>0$,
$$
\begin{aligned}
\mathcal L[t^n](s)&=\frac{n!}{s^{n+1}}, &&\operatorname{Re}s>0,\\
\mathcal L[e^{at}](s)&=\frac1{s-a}, &&\operatorname{Re}s>a,\\
\mathcal L[\cos(bt)](s)&=\frac{s}{s^2+b^2}, &&\operatorname{Re}s>0,\\
\mathcal L[\sin(bt)](s)&=\frac b{s^2+b^2}, &&\operatorname{Re}s>0.
\end{aligned}
$$
Le potenze si trattano per integrazioni per parti, partendo da $\mathcal L[1]$. Per seno e coseno si usano gli esponenziali complessi. La linearità permette di combinare le formule su un semipiano comune. Per esempio $\mathcal L[t^2+3e^{-t}]=\dfrac2{s^3}+\dfrac3{s+1}$ per $\operatorname{Re}s>0$.
:::

:::esempio{titolo="Calcolo di una trasformata mediante integrazione per parti"}
Per $\operatorname{Re}s>0$, integriamo prima sull'intervallo $[0,R]$. Prendiamo come primitiva di $e^{-st}$ la funzione $-\dfrac1s e^{-st}$. Si ottiene
$$
\begin{aligned}
\int_0^R t e^{-st}\,dt
&=-\frac{R e^{-sR}}s+\frac1s\int_0^R e^{-st}\,dt \\
&=-\frac{R e^{-sR}}s+\frac{1-e^{-sR}}{s^2}.
\end{aligned}
$$
Il primo termine tende a zero perché $R e^{-\sigma R}\to0$ per ogni $\sigma>0$. Il secondo tende a $\dfrac1{s^2}$. Se partiamo invece da $t^2$, l'integrazione per parti lascia il doppio dell'integrale appena calcolato, diviso per $s$. In generale il fattore $n!$ deriva dalla successione dei fattori $n,n-1,\ldots,1$.

::grafico{f="x*exp(-x);x*exp(-2*x)" xmin=0 xmax=6 ymin=0 ymax=0.48 nomi="t,y" area="x*exp(-x);0;0;6" punti="1,0.367879,pieno;0.5,0.183940,pieno" legenda="te^{-t};te^{-2t}" titolo="L'area sotto $te^{-t}$, estesa a tutto il semiasse, vale $\mathcal L[t](1)=1$. Aumentando $s$ da $1$ a $2$, il peso diventa $e^{-2t}$ e l'area scende a $\dfrac14$."}
:::

:::esempio{titolo="Seno e coseno a partire dallo stesso integrale"}
Per il coseno si scrive $\cos(bt)=\dfrac{e^{ibt}+e^{-ibt}}2$. Le due trasformate elementari sono $\dfrac1{s-ib}$ e $\dfrac1{s+ib}$, entrambe convergenti per $\operatorname{Re}s>0$. La loro semisomma porta al numeratore $s$ e al denominatore $s^2+b^2$. Nel caso del seno, il numeratore si ricava dalla differenza dei medesimi termini divisa per $2i$ e vale $b$. Questa derivazione funziona per $s$ complesso, perché usa l'identità di Eulero prima di integrare.
:::

:::esempio{titolo="Cancellazione di un termine crescente"}
Siano $f(t)=\cosh(2t)$ e $g(t)=\sinh(2t)$. In entrambe compare il termine crescente $\dfrac12e^{2t}$. Le trasformate delle due funzioni sono quindi definite per $\operatorname{Re}s>2$. Dalla somma e dalla differenza di esponenziali si ricava
$$
\begin{aligned}
\mathcal L[f](s)&=\frac{s}{s^2-4},\\
\mathcal L[g](s)&=\frac{2}{s^2-4}.
\end{aligned}
$$
La sottrazione nel semipiano comune produce $\dfrac{s-2}{s^2-4}=\dfrac1{s+2}$. Per stabilire dove quest'ultima formula rappresenti l'integrale si torna al segnale. Poiché il termine crescente ha lo stesso coefficiente nelle due funzioni, la differenza vale $e^{-2t}$. Il suo integrale di Laplace converge già per $\operatorname{Re}s>-2$. In particolare la differenza ha trasformata in zero e lì vale $\dfrac12$, mentre gli integrali delle due funzioni presi separatamente divergono. La linearità fornisce dunque un semipiano sufficiente. La verifica sul segnale individua il dominio esatto dopo la cancellazione.
:::

## Derivate e dati iniziali

::::teorema{#derivate-laplace titolo="Trasformata delle derivate"}
Siano $f,f'$ localmente assolutamente continue e $f,f',f''$ di ordine esponenziale. Su un semipiano sufficientemente a destra, l'integrazione per parti dà
$$
\mathcal L[f']=sF(s)-f(0^+),\qquad
\mathcal L[f'']=s^2F(s)-sf(0^+)-f'(0^+).
$$
Inoltre $\mathcal L[t^nf]=(-1)^nF^{(n)}(s)$ nei punti interni al semipiano di convergenza. I termini iniziali rendono algebrica la trasformazione di un problema di Cauchy.

Per $y'+ay=0$, $y(0)=c$, si ha $(s+a)Y=c$ e quindi $y(t)=ce^{-at}$. Il dato iniziale compare nel numeratore.

:::dimostrazione
L'integrazione per parti separa la derivata del segnale da quella del peso esponenziale. Su $[0,R]$ il bordo superiore è $e^{-sR}f(R)$. Per $\operatorname{Re}s$ maggiore dell'ordine esponenziale di $f$, il suo modulo è dominato da un esponenziale decrescente. Al bordo inferiore il peso vale uno, quindi rimane $-f(0^+)$. L'integrale residuo è $sF(s)$. Si ottiene così la formula per la prima derivata.

Per la seconda derivata si applica lo stesso passaggio a $f'$. L'ipotesi di crescita su $f'$ fa tendere a zero anche il nuovo bordo superiore. Quindi $\mathcal L[f'']=s\mathcal L[f']-f'(0^+)$. Sostituendo la formula già provata, si vede perché $f(0^+)$ è moltiplicato per $s$ mentre $f'(0^+)$ compare da solo. La derivazione rispetto a $s$ agisce invece direttamente sul nucleo dell'integrale. A ogni derivazione compare un fattore $-t$. La maggiorazione uniforme con margine esponenziale giustifica lo scambio tra ciascuna derivata e l'integrale.
:::
::::

:::esempio{titolo="Il termine al bordo e la derivata della trasformata"}
Per $f(t)=2+e^{-t}$, si ha $f(0^+)=3$ e $F(s)=\dfrac2s+\dfrac1{s+1}$. Il calcolo di $sF(s)-3$ dà $-\dfrac1{s+1}$, coerente con $f'(t)=-e^{-t}$. Il termine $3$ si ricava valutando al bordo inferiore il prodotto $e^{-st}f(t)$ nell'integrazione per parti.
$$
\int_0^R e^{-st} f'(t)\,dt
=e^{-sR}f(R)-f(0^+)+s\int_0^R e^{-st}f(t)\,dt.
$$
Per $s$ abbastanza a destra il contributo in $R$ tende a zero. Con il medesimo esempio, $-F'(s)=\dfrac2{s^2}+\dfrac1{(s+1)^2}$ è la trasformata di $t(2+e^{-t})$. La derivata in $t$ usa il termine iniziale. La derivata in $s$ proviene invece dal peso dell'integrale e inserisce il fattore $-t$.

::grafico{f="2+exp(-x);-exp(-x)" xmin=0 xmax=6 ymin=-1.4 ymax=3.6 nomi="t,y" punti="0,3,pieno;0,-1,pieno" asintoti="y=2" legenda="f(t);f^\prime(t)" titolo="La funzione $f(t)=2+e^{-t}$ parte da $3$. La formula per $\mathcal L[f']$ usa questo valore, mentre il grafico di $f'$ parte da $-1$."}
:::

:::attenzione
La formula per $\mathcal L[f']$ richiede la regolarità del segnale attraverso ogni punto interno. Si prenda $f(t)=H(t-2)$. La derivata ordinaria vale zero su entrambi i tratti, quindi ha trasformata nulla. D'altra parte $f(0^+)=0$ e $F(s)=\dfrac{e^{-2s}}s$ per $\operatorname{Re}s>0$. Applicare direttamente $sF(s)-f(0^+)$ darebbe $e^{-2s}$. Il gradino ha un salto in $2$, quindi la funzione manca dell'ipotesi di assoluta continuità su un intervallo che contiene quel punto.

Si recupera la trasformata della derivata ordinaria integrando per parti separatamente sui due tratti. Il bordo in $2$ si valuta una volta dal lato sinistro e una dal lato destro. Il contributo totale è
$$
e^{-2s}\bigl(f(2^-)-f(2^+)\bigr)=-e^{-2s}.
$$
Questo termine cancella $sF(s)$ e resta zero. Per un segnale continuo con un cambio di pendenza, invece, i due valori laterali della funzione coincidono e i termini di bordo interni si annullano. Perciò un gradino e una rampa attivata allo stesso tempo richiedono verifiche di regolarità diverse prima di usare la formula delle derivate.
:::

## Traslazioni e ritardi

:::teorema{#ritardi titolo="Traslazioni della frequenza e del tempo"}
Se $F=\mathcal L[f]$ e $a\in\mathbb R$, allora $\mathcal L[e^{at}f(t)](s)=F(s-a)$. Per $\tau>0$ e la funzione di Heaviside $H$,
$$
\mathcal L[H(t-\tau)f(t-\tau)](s)=e^{-\tau s}F(s).
$$
La seconda formula segue dal cambio $u=t-\tau$ nell'integrale che inizia a $\tau$. Per esempio
$$
\mathcal L[H(t-2)(t-2)^2]=\frac{2e^{-2s}}{s^3}.
$$
Un ritardo modifica sia l'istante di attivazione sia l'argomento della funzione. Per trasformare $H(t-\tau)f(t)$ si riscrive $f(t)$ come funzione di $t-\tau$.

::grafico{f="x*exp(-x);x" xmin=0 xmax=4 ymin=0 ymax=2.5 nomi="t,y" punti="1,0.367879,pieno" legenda="te^{-t};t" titolo="Moltiplicare $t$ per $e^{-t}$ conserva l'origine e smorza il grafico. Nella trasformata si sostituisce $s$ con $s+1$."}
:::

:::osservazione
I due cambiamenti si distinguono anche mediante la convergenza assoluta. La moltiplicazione per $e^{at}$ sostituisce il peso $e^{-\sigma t}$ con $e^{-(\sigma-a)t}$. Quindi una frontiera di convergenza con parte reale $\sigma_0$ si sposta in $\sigma_0+a$. Per il ritardo, il cambio $u=t-\tau$ mostra invece che l'integrale del modulo è quello originario moltiplicato per $e^{-\sigma\tau}$. Pertanto il ritardo conserva l'insieme di convergenza assoluta, compresi gli eventuali punti di frontiera. Per esempio $H(t-2)e^{t-2}$ converge per $\operatorname{Re}s>1$, come $e^t$, mentre $e^{-2t}e^t$ converge per $\operatorname{Re}s>-1$.
:::

:::esempio{titolo="Distinguere una rampa traslata da una rampa troncata"}
Consideriamo $H(t-2)t$ e $H(t-2)(t-2)$. Prima di $t=2$ entrambe valgono zero. Subito dopo $t=2$ la prima ha altezza $2$, mentre la seconda parte da zero. Scrivendo $t=(t-2)+2$ per $t>2$, si ottiene
$$
\begin{aligned}
\mathcal L[H(t-2)t]
&=e^{-2s}\left(\frac1{s^2}+\frac2s\right),\\
\mathcal L[H(t-2)(t-2)]&=\frac{e^{-2s}}{s^2},
\qquad \operatorname{Re}s>0.
\end{aligned}
$$
Il termine aggiuntivo $\dfrac{2e^{-2s}}s$ rappresenta il gradino di altezza $2$ fra le due funzioni. Il valore assegnato a $H(0)$ è irrilevante per l'integrale, perché modifica la funzione in un singolo punto.

::grafico{linee="0,0 2,0;2,0 5,3;2,2 5,5" segmenti="2,0,2,2" punti="2,0,pieno;2,2,vuoto" xmin=0 xmax=5.4 ymin=-0.5 ymax=5.7 nomi="t,y" titolo="Dopo $t=2$, la rampa troncata $H(t-2)t$ è due unità sopra la rampa ritardata $H(t-2)(t-2)$. Il segmento tratteggiato indica l'altezza del salto della prima."}
:::

::::teorema{#segnali-periodici titolo="Trasformata di un segnale periodico"}
Sia $f$ localmente integrabile, periodica di periodo $T>0$. Per $\operatorname{Re}s>0$ vale
$$
\mathcal L[f](s)=\frac{\displaystyle\int_0^T e^{-st}f(t)\,dt}{1-e^{-sT}}.
$$
L'integrale al numeratore contiene la forma del segnale in un periodo. Il denominatore descrive la ripetizione di quel periodo nel tempo.

:::dimostrazione
Scomponiamo l'integrale sugli intervalli $[kT,(k+1)T]$. Nel tratto di indice $k$ poniamo $t=kT+u$ con $0\le u\le T$. Per periodicità $f(kT+u)=f(u)$ e il peso esponenziale si separa nel prodotto di $e^{-skT}$ per $e^{-su}$. Ciascun integrale è quindi il primo integrale moltiplicato per $e^{-skT}$. La somma dei valori assoluti degli integrali è dominata da una serie geometrica di ragione $e^{-(\operatorname{Re}s)T}$, moltiplicata per l'integrale del modulo sul primo periodo. Possiamo dunque sommare i contributi e usare la formula della serie geometrica.
:::
::::

:::esempio{titolo="Periodo diverso dalla durata di accensione"}
Per un segnale di periodo $3$ acceso con altezza $2$ soltanto nella prima unità di ogni periodo, il numeratore è $\dfrac{2(1-e^{-s})}{s}$. Il denominatore è $1-e^{-3s}$, perché le accensioni iniziano ai tempi $0,3,6,\ldots$. Con $s>0$ piccolo, il prodotto $sF(s)$ si avvicina a $\dfrac23$, cioè al valore medio sul periodo. Il segnale continua a saltare fra zero e due. Il numero $\dfrac23$ descrive la media temporale, mentre il valore finale del segnale non esiste.
:::

:::esempio{titolo="Una rampa interrotta dopo due unità"}
Sia $f$ nulla fino al tempo $1$, uguale a $t-1$ fra i tempi $1$ e $3$ e di nuovo nulla dopo il tempo $3$. La prima rampa inizia in $1$ e continua a crescere finché un secondo termine la cancella. Per $t>3$ la rampa ha espressione $(t-3)+2$. La cancellazione richiede quindi una rampa e un gradino attivati insieme in $3$. Si ottiene
$$
f(t)=H(t-1)(t-1)-H(t-3)\bigl((t-3)+2\bigr)
$$
e, per $\operatorname{Re}s>0$,
$$
F(s)=\frac{e^{-s}}{s^2}
-e^{-3s}\left(\frac1{s^2}+\frac2s\right).
$$
Il segnale ha supporto limitato, quindi l'integrale converge per ogni $s$ complesso. Il punto $s=0$ va trattato nell'espressione integrale, perché i termini separati contengono potenze negative di $s$. A peso unitario si integra l'area del triangolo di base due e altezza due, che vale $2$. Questo valore è anche il limite della formula combinata per $s$ che tende a zero, poiché il peso converge uniformemente a uno sul tratto in cui il segnale è attivo.
:::

## Convoluzione e antitrasformazione

:::teorema{#convoluzione-laplace titolo="Convoluzione causale"}
Per funzioni localmente integrabili di ordine esponenziale,
$$
(f*g)(t)=\int_0^t f(t-u)g(u)\,du,\qquad
\mathcal L[f*g](s)=F(s)G(s)
$$
su un semipiano di convergenza comune. La convoluzione è definita e finita quasi ovunque. Fubini permette di scambiare i due integrali. Per $a\ne b$,
$$
\mathcal L^{-1}\left[\frac1{(s+a)(s+b)}\right]
=\frac{e^{-at}-e^{-bt}}{b-a}.
$$
Il risultato segue anche dalle frazioni semplici. Il termine $\dfrac1{(s+a)^m}$ si antitrasforma in $\dfrac{t^{m-1}}{(m-1)!}e^{-at}$. Nella scomposizione in frazioni semplici, un polo di ordine $m$ può contribuire anche con potenze del denominatore di ordine minore.
:::

:::teorema{#inversione-laplace titolo="Unicità e formula di inversione"}
Per funzioni localmente integrabili di ordine esponenziale, l'uguaglianza delle trasformate su un semipiano implica uguaglianza quasi ovunque delle funzioni; se sono continue, l'uguaglianza vale in ogni punto. Per dati con regolarità e crescita sufficienti, per esempio funzioni $C^1$ a tratti di ordine esponenziale con analogo controllo della derivata sui tratti, l'inversione di Bromwich usa
$$
f(t)=\lim_{R\to\infty}\frac1{2\pi i}\int_{\gamma-iR}^{\gamma+iR}e^{st}F(s)\,ds
$$
per $t>0$ nei punti di continuità, con $\gamma$ scelto nel semipiano di convergenza. Nei casi razionali propri degli esercizi, frazioni semplici e tabella forniscono direttamente l'antitrasformata.
:::

:::esempio{titolo="Dominio di integrazione e poli ripetuti"}
Per mostrare perché la trasformata della convoluzione è un prodotto, chiamiamo $u$ il tempo di integrazione interno e poniamo $v=t-u$. La regione $0\le u\le t$ diventa il primo quadrante in $(u,v)$. Su un semipiano in cui entrambi gli integrali sono assolutamente convergenti, l'integrale del modulo sul quadrante è il prodotto degli integrali assoluti di $e^{-su}g(u)$ e $e^{-sv}f(v)$. Fubini permette allora di separare le variabili. A tempo $t$ fissato, l'integrale originale usa soltanto le coppie con $u+v=t$.

::grafico{nomi="u,v" xmin=0 xmax=4.6 ymin=0 ymax=4.1 uguale=1 poligoni="0,0 3,0 0,3" linee="0,3 3,0" etichette="1.8,1.52,u+v=3" punti="3,0,pieno;0,3,pieno" titolo="Il triangolo colorato raccoglie le coppie con $u,v\ge0$ e $u+v\le3$. Al tempo $t=3$ contribuiscono soltanto le coppie del segmento $u+v=3$."}
:::

:::esempio{titolo="Convoluzione di due esponenziali uguali"}
Per $f=g=e^{-t}$, il prodotto $e^{-(t-u)}e^{-u}$ è costante rispetto a $u$ e vale $e^{-t}$. L'integrale su $[0,t]$ è quindi $te^{-t}$. Nel dominio di Laplace le due trasformate coincidono e il prodotto ha un polo doppio in $-1$. Quando i poli sono distinti, le frazioni semplici separano due esponenziali. Quando il polo è doppio, il fattore $t$ appare direttamente dall'integrale di convoluzione.

::grafico{f="x*exp(-x);exp(-x)-exp(-2*x)" xmin=0 xmax=6 ymin=0 ymax=0.47 nomi="t,y" punti="1,0.367879,pieno" legenda="te^{-t};e^{-t}-e^{-2t}" titolo="Con poli distinti in $-1$ e $-2$ si ottiene $e^{-t}-e^{-2t}$. Con un polo doppio in $-1$ si ottiene $te^{-t}$, che ha massimo in $t=1$."}
:::

:::osservazione
Per scegliere la retta di inversione occorre partire dal semipiano in cui l'integrale di Laplace è valido. Se $s=\gamma+i\omega$, allora $F(\gamma+i\omega)$ è la trasformata di Fourier di $e^{-\gamma t}f(t)$ prolungata con zero per $t<0$, nella convenzione con nucleo $e^{-i\omega t}$. L'inversione rispetto a $\omega$ restituisce il segnale smorzato. Il fattore $e^{\gamma t}$ della formula di Bromwich ripristina il segnale originale. L'unicità della trasformata di Fourier sul segnale smorzato implica l'unicità della trasformata di Laplace.

::grafico{nomi="σ,ω" uguale=1 xmin=-3 xmax=3 ymin=-2.7 ymax=2.7 punti="-1,0,pieno;0,1,pieno;0,-1,pieno" vettori="1,-2.3,1,2.3,γ=1" titolo="Per $F(s)=\dfrac1{(s+1)(s^2+1)}$, una retta di inversione possibile è $\operatorname{Re}s=1$, a destra dei poli $-1$ e $\pm i$."}
:::

:::esempio{titolo="Inversione di un rapporto con un polo doppio tramite residui"}
Sia $F(s)=\dfrac{1}{(s+1)^2(s+2)}$. Per $t>0$ scegliamo la retta verticale $\operatorname{Re}s=0$ e chiudiamo il contorno a sinistra con un semicerchio di raggio $R$ centrato in zero. Lungo l'arco il modulo di $e^{st}$ è al più uno. Per $R$ grande la funzione razionale è limitata da una costante per $R^{-3}$, mentre la lunghezza dell'arco è $\pi R$. L'integrale sull'arco tende quindi a zero. Nel limite, l'integrale sulla retta è determinato dai residui nei due poli racchiusi.
$$
\begin{aligned}
\operatorname{Res}_{s=-2}\frac{e^{st}}{(s+1)^2(s+2)}
&=e^{-2t},\\
\operatorname{Res}_{s=-1}\frac{e^{st}}{(s+1)^2(s+2)}
&=\left.\frac d{ds}\frac{e^{st}}{s+2}\right|_{s=-1}
=(t-1)e^{-t}.
\end{aligned}
$$
La somma è $(t-1)e^{-t}+e^{-2t}$. Il polo semplice produce un solo esponenziale. Nel polo doppio la derivata agisce sia su $e^{st}$ sia sul fattore rimasto al denominatore, quindi compare anche il termine $te^{-t}$. Si può controllare il risultato sommando le trasformate dei tre termini e riducendole al denominatore comune. Per la stima dell'arco è stata usata la decrescita della funzione razionale, oltre al segno di $\operatorname{Re}s$ lungo il contorno.
:::

:::esempio{titolo="Convoluzione fra una rampa ritardata e un esponenziale"}
Siano $f(t)=H(t-1)(t-1)$ e $g(t)=e^{-t}$. Nell'integrale di convoluzione il fattore $f(t-u)$ è attivo soltanto se $t-u>1$. Per $t\le1$ tutto l'integrando è nullo. Per $t>1$ l'intervallo si riduce a $0\le u\le t-1$. Posto $v=t-1$, si ottiene
$$
\begin{aligned}
(f*g)(t)
&=\int_0^v (v-u)e^{-u}\,du\\
&=v(1-e^{-v})-\bigl(1-(v+1)e^{-v}\bigr)\\
&=v-1+e^{-v}.
\end{aligned}
$$
Per ottenere il secondo termine della riga intermedia si integra $u e^{-u}$ per parti, usando la primitiva $-e^{-u}$. Nel dominio di Laplace lo stesso calcolo si esprime come $F(s)G(s)=\dfrac{e^{-s}}{s^2(s+1)}$. La scomposizione del fattore razionale è
$$
\frac1{s^2(s+1)}=\frac1{s^2}-\frac1s+\frac1{s+1}.
$$
La tabella fornisce $t-1+e^{-t}$ prima del ritardo. Il fattore $e^{-s}$ attiva la funzione in $1$ e sostituisce $t$ con $t-1$, restituendo l'espressione trovata direttamente. Nel punto di attivazione il valore e la derivata destra valgono zero. Il ritardo della convoluzione si legge già dai limiti di integrazione.
:::

## Problemi di Cauchy e forzanti

:::esempio{#cauchy-laplace titolo="Equazione del secondo ordine"}
Per $y''+y=1$, $y(0)=0$, $y'(0)=0$, si ottiene
$$
(s^2+1)Y(s)=\frac1s,\qquad
Y(s)=\frac1{s(s^2+1)}=\frac1s-\frac{s}{s^2+1}.
$$
Quindi $y(t)=1-\cos t$. Si verifica $y''+y=1$ e i due dati iniziali. Una forzante ritardata introduce un fattore $e^{-\tau s}$; dopo l'antitrasformazione si applica il ritardo allo svolgimento causale.
:::

:::esempio{titolo="Risposta a un gradino ritardato con dato iniziale non nullo"}
Sia $y'+2y=H(t-1)$ con $y(0)=1$. La trasformata del primo membro è $(s+2)Y(s)-1$. Da
$$
Y(s)=\frac1{s+2}+\frac{e^{-s}}{s(s+2)}
$$
si riconoscono la risposta libera e la risposta forzata. Il secondo termine si antitrasforma separando $\dfrac1{s(s+2)}=\dfrac12\left(\dfrac1s-\dfrac1{s+2}\right)$ e ritardando il risultato. Si trova
$$
y(t)=e^{-2t}+\frac12 H(t-1)\bigl(1-e^{-2(t-1)}\bigr).
$$
Prima dell'attivazione è presente soltanto la risposta libera. Nel punto $t=1$ il termine forzato si annulla e la soluzione resta continua. La soluzione soddisfa l'equazione per $t\ne1$. La derivata destra supera quella sinistra di uno, in accordo con il salto della forzante. Per tempi grandi il transitorio decade e rimane il valore $\dfrac12$.

::grafico{f="exp(-2*x)+0.5*(1-exp(-2*(0.5*(x-1+abs(x-1)))));exp(-2*x)" xmin=0 xmax=5 ymin=0 ymax=1.15 nomi="t,y" segmenti="1,0,1,0.135335" punti="1,0.135335,pieno" asintoti="y=0.5" legenda="y(t);e^{-2t}" titolo="In $t=1$ il gradino cambia la pendenza della soluzione senza provocare un salto del valore. La parte tratteggiata mostra la sola risposta libera."}
:::

:::esempio{titolo="Un problema di Cauchy con forzante esponenziale"}
Si consideri $y''+3y'+2y=e^{-3t}$ con $y(0)=1$ e $y'(0)=-1$. Indicando con $Y$ la trasformata di $y$, il termine $y''$ produce $s^2Y-s+1$ e il termine $3y'$ produce $3sY-3$. Pertanto
$$
(s^2+3s+2)Y(s)=s+2+\frac1{s+3}.
$$
Si fattorizza il denominatore in $(s+1)(s+2)$. Il contributo dei dati iniziali si riduce a $\dfrac1{s+1}$, perché il fattore $s+2$ al numeratore si cancella. Il contributo della forzante conserva invece entrambi i fattori dell'operatore e aggiunge il fattore $s+3$. Le frazioni semplici danno
$$
\begin{aligned}
Y(s)
&=\frac1{s+1}+\frac1{(s+1)(s+2)(s+3)}\\
&=\frac{3}{2(s+1)}-\frac1{s+2}+\frac1{2(s+3)}.
\end{aligned}
$$
Perciò $y(t)=\dfrac32e^{-t}-e^{-2t}+\dfrac12e^{-3t}$. I primi due esponenziali risolvono l'equazione omogenea. Sul terzo esponenziale l'operatore moltiplica il coefficiente per $(-3)^2+3(-3)+2=2$, ottenendo proprio $e^{-3t}$. La somma dei coefficienti vale uno. La somma dei coefficienti moltiplicati per i rispettivi esponenti vale meno uno. Questi due controlli riproducono i dati iniziali senza tornare all'equazione algebrica per $Y$.
:::

## Valori iniziali e finali

:::osservazione{#valori-limite titolo="Condizioni dei teoremi del valore iniziale e finale"}
Per una funzione continua a destra nell'origine, di ordine esponenziale, vale $\lim_{s\to+\infty}sF(s)=f(0^+)$. Il teorema del valore finale, nel caso razionale proprio con antitrasformata ordinaria continua per $t>0$, richiede che tutti i poli di $sF(s)$ abbiano parte reale strettamente negativa; allora $\lim_{t\to\infty}f(t)=\lim_{s\to0^+}sF(s)$.

Per $F(s)=\dfrac1{s+2}$ il limite finale è zero, coerente con $e^{-2t}$. Per $F(s)=\dfrac1{s^2+1}$, il prodotto $sF(s)$ ha poli sull'asse immaginario, quindi il criterio non si applica. La funzione $\sin t$ non ha limite finale, anche se il limite algebrico in zero esiste.
:::

:::esempio{titolo="Verifica della stabilità prima di calcolare il valore finale"}
Per $F(s)=\dfrac1{s(s+2)}$, il polo nell'origine rappresenta il livello costante della risposta. Moltiplicare per $s$ lascia soltanto il polo in $-2$, quindi il criterio del valore finale è applicabile e restituisce $\dfrac12$. L'antitrasformata $\dfrac12(1-e^{-2t})$ conferma il risultato. Per $F(s)=\dfrac1{s(s-2)}$, il prodotto $sF(s)$ ha invece un polo positivo in $2$. La funzione $\dfrac12(e^{2t}-1)$ cresce senza limite, anche se sostituendo formalmente $s=0$ nella formula razionale si ottiene il numero finito $-\dfrac12$.

::grafico{f="0.5*(1-exp(-2*x));sin(x)" xmin=0 xmax=9 ymin=-1.2 ymax=1.2 nomi="t,y" asintoti="y=0.5" legenda="\dfrac12(1-e^{-2t});\sin t" titolo="La risposta $\dfrac12(1-e^{-2t})$ converge a $\dfrac12$. La funzione $\sin t$ continua a oscillare e non ha valore finale."}
:::

:::osservazione
Il teorema del valore iniziale si può leggere come una concentrazione del peso vicino all'origine. Per $s>0$ la funzione $s e^{-st}$ ha integrale uno sul semiasse. Per ogni $\varepsilon>0$, l'integrale di questo peso da $\varepsilon$ in poi è $e^{-s\varepsilon}$, che tende a zero. Per passare da questa osservazione al limite di $sF(s)$ si sottrae $f(0^+)$ dall'integrando. Sull'intervallo $[0,\varepsilon]$ la differenza è uniformemente piccola per continuità destra. Sulla coda, la crescita esponenziale di $f$ è dominata dal peso per $s$ grande, mentre l'integrale su un intervallo compatto lontano dall'origine tende a zero per la decrescita uniforme del peso. Il contributo residuo tende quindi a zero.
:::

:::osservazione
Nel caso razionale proprio, il teorema del valore finale si comprende decomponendo $F$ in frazioni semplici. Se $sF$ ha poli soltanto a parte reale negativa, $F$ può aggiungere nell'origine un polo al più semplice. I termini degli altri poli si antitrasformano in esponenziali decrescenti moltiplicati, per poli multipli, da polinomi. Tutti decadono a zero. Il termine corrispondente al polo semplice nell'origine ha la forma $\dfrac As$ e corrisponde a una costante $A$. Moltiplicando per $s$ e passando al limite in zero si ottiene proprio quel coefficiente. Per un polo sull'asse immaginario diverso dall'origine, i termini sinusoidali possono invece persistere indefinitamente.
:::

:::esempio{titolo="Poli effettivi e valore finale"}
Si consideri la funzione razionale
$$
F(s)=\frac{s-2}{s(s-2)(s+1)} .
$$
Il fattore $s-2$ compare al numeratore e al denominatore. In $2$ il quoziente ha una singolarità eliminabile, quindi il criterio del valore finale va applicato alla funzione semplificata. Si ottiene $sF(s)=\dfrac1{s+1}$, con un unico polo in $-1$. Il valore finale è dunque uno. Dalla scomposizione $\dfrac1{s(s+1)}=\dfrac1s-\dfrac1{s+1}$ segue l'antitrasformata $1-e^{-t}$, che tende effettivamente a uno.

Per confronto, se il numeratore fosse $1$ e il denominatore fosse $s(s-2)(s+1)$, il polo in $2$ sarebbe effettivo. Il coefficiente della frazione $\dfrac1{s-2}$ sarebbe $\dfrac16$, ottenuto moltiplicando per $s-2$ e valutando in $2$. Comparirebbe quindi il termine crescente $\dfrac16e^{2t}$. Gli altri due termini sono una costante e un esponenziale decrescente, perciò non possono cancellarne la crescita.
:::
