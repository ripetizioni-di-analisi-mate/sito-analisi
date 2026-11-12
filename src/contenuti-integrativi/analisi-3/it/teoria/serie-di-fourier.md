## Il nucleo di Dirichlet e il fenomeno di Gibbs

:::proposizione{#nucleo-di-dirichlet titolo="Somme parziali come integrali"}
Sia $f$ una funzione integrabile su un periodo e $2\pi$-periodica. Nella sua somma parziale fino all'armonica di indice $N$, sostituendo le formule dei coefficienti si ottiene un solo integrale. La formula del coseno della differenza riunisce il contributo del seno e quello del coseno con lo stesso indice. Il risultato è
$$
\begin{aligned}
s_N(x) &= \frac{1}{2\pi}\int_{-\pi}^{\pi} f(x-t)D_N(t)\,dt, \\[6pt]
D_N(t) &= 1+2\sum_{n=1}^{N}\cos(nt)
       = \frac{\sin\bigl((N+\frac12)t\bigr)}{\sin(\frac t2)} .
\end{aligned}
$$
Il **nucleo di Dirichlet** $D_N$ è pari, vale $2N+1$ in $0$ e ha integrale $2\pi$ su un periodo. Per ottenere il quoziente si moltiplica la somma per $\sin(\dfrac t2)$. Ogni prodotto $2\sin(\dfrac t2)\cos(nt)$ diventa $\sin\bigl((n+\dfrac12)t\bigr)-\sin\bigl((n-\dfrac12)t\bigr)$, quindi rimane soltanto il seno con indice $N+\dfrac12$. L'identità vale fuori dai multipli di $2\pi$, dove il quoziente si estende per continuità.

::grafico{f="1+2*(cos(x)+cos(2*x));1+2*(cos(x)+cos(2*x)+cos(3*x)+cos(4*x)+cos(5*x)+cos(6*x))" xmin=-3.15 xmax=3.15 ymin=-3 ymax=14.5 punti="0,5;0,13" nomi="t,y" legenda="D_2(t);D_6(t)" titolo="Il nucleo $D_6$ ha un picco centrale più alto e più stretto di $D_2$. Entrambi assumono valori negativi fra gli zeri e hanno integrale $2\pi$ su un periodo."}
:::

:::osservazione{titolo="Perché compaiono entrambi i limiti laterali"}
Il nucleo è pari, quindi nell'integrale si possono accoppiare i punti $x-t$ e $x+t$. Sia $A$ la media dei limiti laterali di $f$ in $x$. Poiché l'integrale del nucleo è $2\pi$, la differenza si scrive
$$
s_N(x)-A
=\frac{1}{2\pi}\int_0^{\pi}
\frac{f(x-t)+f(x+t)-2A}{\sin(\frac t2)}
\sin\bigl((N+\tfrac12)t\bigr)\,dt .
$$
Se $f$ è regolare a tratti, vicino a zero il numeratore è dell'ordine di $t$, perché da ciascun lato la derivata rimane limitata. Anche il denominatore è dell'ordine di $t$, quindi il rapporto rimane limitato. Lontano da zero il denominatore non si annulla e il rapporto è integrabile. Per il lemma di Riemann–Lebesgue l'integrale contro il seno di frequenza crescente tende a zero. Per questo caso il lemma si ottiene approssimando il rapporto in norma $L^1$ con funzioni costanti su intervalli: per ogni intervallo l'integrale del seno si calcola agli estremi e tende a zero, e l'errore dell'approssimazione resta limitato dalla sua norma $L^1$. Il valore assegnato alla funzione nel punto $x$ non compare nel calcolo.
:::

:::esempio{titolo="Contributo di un intervallo lontano dal punto di valutazione"}
Sia $r$ il prolungamento periodico della funzione che vale uno su $[\dfrac{\pi}{2},\dfrac{3\pi}{4}]$ e zero altrove nel periodo. Nel punto $x=0$ la funzione è nulla in un intorno, ma le sue somme parziali contengono il contributo dell'intervallo lontano. Indichiamo con $\alpha$ e $\beta$ i suoi estremi e poniamo $k=N+\dfrac12$. Cambiando $t$ in $-t$ nell'integrale e usando la parità di $D_N$, si ottiene
$$
s_N(0)=\frac{1}{2\pi}\int_\alpha^\beta \phi(t)\sin(kt)\,dt,
\qquad \phi(t)=\frac{1}{\sin(\frac t2)}.
$$
La funzione $\phi$ è positiva e decrescente fra $\alpha$ e $\beta$. Integrando per parti, il termine agli estremi ha modulo al più $\dfrac{\phi(\alpha)+\phi(\beta)}{k}$. L'integrale residuo è limitato da $\dfrac1k\int_\alpha^\beta |\phi'(t)|\,dt$, che vale $\dfrac{\phi(\alpha)-\phi(\beta)}{k}$. Sommando le stime e reinserendo il fattore dell'integrale, si trova
$$
|s_N(0)|\leq \frac{\phi(\alpha)}{\pi k}
=\frac{\sqrt2}{\pi(N+\frac12)}.
$$
Il termine agli estremi misura l'effetto del taglio dell'intervallo. La decrescenza di $\phi$ permette di controllare il termine residuo usando soltanto i suoi valori agli estremi. Per $N$ abbastanza grande, il seno assume modulo uno in almeno un punto dell'intervallo, quindi il nucleo ha ancora modulo almeno uno in quel punto. È la cancellazione fra le oscillazioni del seno che rende piccolo l'integrale.
:::

:::esempio{#fenomeno-di-gibbs titolo="Il primo massimo dell'onda quadra"}
Per l'onda quadra $q(x)=\operatorname{sgn}(\sin x)$, sia $S_m$ la somma delle prime $m$ armoniche dispari. Derivando la somma finita e usando $2\sin x\cos((2k+1)x)=\sin((2k+2)x)-\sin(2kx)$ si trova
$$
S_m'(x)=\frac{4}{\pi}\sum_{k=0}^{m-1}\cos((2k+1)x)
       =\frac{2}{\pi}\frac{\sin(2mx)}{\sin x}
       \qquad (0<x<\pi).
$$
Il primo massimo a destra del salto in $0$ è in $x_m=\dfrac{\pi}{2m}$, perché il denominatore è positivo e il numeratore passa da positivo a negativo. Sostituendo $x_m$ nella somma, con $u_k=\dfrac{(2k+1)\pi}{2m}$, si ottiene
$$
S_m(x_m)=\frac{2}{\pi}\sum_{k=0}^{m-1}
\frac{\sin u_k}{u_k}\frac{\pi}{m}
\longrightarrow
\frac{2}{\pi}\int_0^\pi \frac{\sin u}{u}\,du\approx 1{,}179 .
$$
I punti $u_k$ sono i punti medi di una partizione di $[0,\pi]$, quindi il limite segue dalla convergenza delle somme di Riemann. Al crescere di $m$, la posizione del massimo tende al salto e l'eccesso rispetto al livello destro $1$ tende a circa il $9\%$ dell'altezza del salto, che è $2$. Il **fenomeno di Gibbs** riguarda questi massimi che si spostano con $m$. In ogni punto fissato di $(0,\pi)$, il teorema di convergenza puntuale dà il valore $1$.

::grafico{f="4/pi*(sin(x)+sin(3*x)/3+sin(5*x)/5+sin(7*x)/7);4/pi*(sin(x)+sin(3*x)/3+sin(5*x)/5+sin(7*x)/7+sin(9*x)/9+sin(11*x)/11+sin(13*x)/13+sin(15*x)/15+sin(17*x)/17+sin(19*x)/19+sin(21*x)/21+sin(23*x)/23)" xmin=-0.72 xmax=0.72 ymin=-1.35 ymax=1.35 linee="-0.72,-1 0,-1;0,1 0.72,1" punti="0,-1,vuoto;0,1,vuoto;0,0" segmenti="0.392699,0,0.392699,1.184225;0.130900,0,0.130900,1.179559" legenda="S_4(x);S_{12}(x)" titolo="I segmenti orizzontali sono i due livelli dell'onda quadra. I primi massimi di $S_4$ e $S_{12}$ sono in $\dfrac{\pi}{8}$ e $\dfrac{\pi}{24}$. Nel salto entrambe le somme valgono $0$."}
:::

## Traslazioni e approssimazione quadratica

:::proposizione{#traslazione-serie-di-fourier titolo="Effetto di una traslazione sui coefficienti"}
Sia $g(x)=f(x-h)$, con $f$ integrabile e $2\pi$-periodica. La traslazione conserva la media. Per $n\geq 1$, se $a_n,b_n$ sono i coefficienti di $f$, quelli di $g$ sono
$$
\begin{aligned}
a_n(g)&=a_n\cos(nh)-b_n\sin(nh), \\[6pt]
b_n(g)&=a_n\sin(nh)+b_n\cos(nh).
\end{aligned}
$$
Nelle formule integrali dei coefficienti si pone $u=x-h$. I prodotti in $u$ sono periodici e l'integrale si può riportare su $[-\pi,\pi]$. Espandendo $\cos(n(u+h))$ e $\sin(n(u+h))$ si leggono i due coefficienti. Il cambio agisce come una rotazione del vettore $(a_n,b_n)$, di angolo $nh$. Quindi $a_n(g)^2+b_n(g)^2=a_n^2+b_n^2$ per ogni $n$: cambia la fase, mentre il contributo della singola armonica a Parseval rimane invariato.

::grafico{f="cos(x);cos(x-pi/3)" xmin=-4.1 xmax=4.5 ymin=-1.25 ymax=1.4 punti="0,1;1.047198,1" legenda="\cos x;\cos(x-\frac{\pi}{3})" titolo="La traslazione a destra di $\dfrac{\pi}{3}$ sposta il massimo da $0$ a $\dfrac{\pi}{3}$. I coefficienti dell'armonica passano da $(1,0)$ a $\bigl(\dfrac12,\dfrac{\sqrt3}{2}\bigr)$."}
:::

:::osservazione{titolo="Dalla derivata a una stima uniforme del resto"}
Sia $f$ continua, $2\pi$-periodica e regolare a tratti. Denotiamo con $a_n(f')$ e $b_n(f')$ i coefficienti della derivata calcolata negli intervalli di regolarità. Integrando per parti su ciascun intervallo, i contributi ai raccordi si cancellano perché i valori laterali di $f$ coincidono. Anche i contributi ai due estremi del periodo si cancellano perché $f$ e le armoniche hanno lo stesso valore ai due estremi. Per $n\geq 1$ resta
$$
a_n(f')=n b_n(f),\qquad b_n(f')=-n a_n(f).
$$
Per la seconda relazione, l'integrazione per parti sottrae l'integrale di $f$ per la derivata del seno. Da qui viene il segno meno. Poiché $f'$ è limitata a tratti, il suo quadrato è integrabile. Il termine costante di $f'$ è nullo, perché l'integrale della derivata su un periodo è la differenza tra il valore finale e quello iniziale di $f$, che coincidono. Applicando Parseval a $f'$ si ricava
$$
\sum_{n\geq 1} n^2\bigl(a_n(f)^2+b_n(f)^2\bigr)
=\frac{1}{\pi}\int_{-\pi}^{\pi}|f'(t)|^2\,dt .
$$
Per passare dalla somma dei quadrati al resto della serie si usa Cauchy–Schwarz. Per ogni $x$, il modulo dell'armonica di grado $n$ è al più $\sqrt{a_n(f)^2+b_n(f)^2}$, perché il vettore con componenti coseno e seno ha norma uno. Si scrive questa maggiorazione come il prodotto del suo multiplo per $n$ e del fattore $\dfrac1n$. Allora per $N\geq 1$
$$
\sup_x |f(x)-s_N(x)|
\leq
\left(\sum_{n>N}\frac{1}{n^2}\right)^{1/2}
\left(\frac1\pi\int_{-\pi}^{\pi}|f'(t)|^2\,dt\right)^{1/2}
\leq
\frac{\lVert f'\rVert_{L^2(-\pi,\pi)}}{\sqrt{\pi N}} .
$$
L'ultima disuguaglianza usa il confronto con l'integrale di $t^{-2}$ da $N$ a infinito. Per $f(x)=|\sin x|$ il quadrato della derivata vale $\cos^2 x$ quasi ovunque e il suo integrale su un periodo è $\pi$. Quindi l'errore uniforme è al più $\dfrac{1}{\sqrt N}$. La stima richiede la norma della derivata e vale anche in assenza di una formula esplicita per le singole armoniche.
:::

:::esempio{titolo="Come un salto compare nei coefficienti"}
Per una funzione periodica con salti, la stessa integrazione per parti va eseguita separatamente sui tratti regolari. In ciascun punto di salto, sia $\Delta f$ il valore destro meno il valore sinistro. Nel calcolo di $\int f'\cos(nx)$ i termini al bordo del tratto a sinistra e di quello a destra danno insieme $-\Delta f\cos(nx)$. Nel calcolo con il seno danno $-\Delta f\sin(nx)$. I coefficienti del segnale dipendono quindi sia dalla derivata nei tratti aperti sia dai salti.

Si prenda il prolungamento periodico di $f(x)=0$ su $[-\pi,0)$ e di $f(x)=\pi-x$ su $(0,\pi)$. Al raccordo tra periodi entrambi i limiti laterali sono zero. In zero c'è un salto di ampiezza $\pi$ e la derivata vale $-1$ sul semiperiodo positivo. Per $n\geq1$ le relazioni ottenute per parti danno
$$
\begin{aligned}
n\pi b_n
&=-\int_0^\pi \cos(nx)\,dx+\pi=\pi, \\[6pt]
n\pi a_n
&=\int_0^\pi \sin(nx)\,dx=\frac{1-(-1)^n}{n}.
\end{aligned}
$$
Segue $b_n=\dfrac1n$ e $a_n=\dfrac{1-(-1)^n}{\pi n^2}$. Il coefficiente costante si ricava dall'area del triangolo sotto il tratto positivo, quindi $\dfrac{a_0}{2}=\dfrac{\pi}{4}$. Il salto è in zero, dove tutti i seni si annullano e tutti i coseni valgono uno. Per questo lascia un contributo diretto ai coefficienti dei seni e nessuno a quelli dei coseni, che in questo esempio decadono più rapidamente.
:::

::::teorema{#migliore-approssimazione-fourier titolo="Migliore approssimazione in media quadratica"}
Sia $f$ una funzione $2\pi$-periodica con quadrato integrabile. Fra tutti i polinomi trigonometrici $p$ di grado al più $N$, la somma parziale $s_N$ è l'unica che minimizza l'**errore quadratico** $\displaystyle E(p)=\dfrac{1}{\pi}\int_{-\pi}^{\pi}|f(x)-p(x)|^2\,dx$.

:::dimostrazione
I coefficienti di Fourier di $f-s_N$ sono nulli fino al grado $N$. Pertanto l'integrale del prodotto di $f-s_N$ con $s_N-p$ è nullo, poiché $s_N-p$ è una combinazione di quelle stesse armoniche. Sviluppando il quadrato di $f-p=(f-s_N)+(s_N-p)$ si ottiene
$$
E(p)=E(s_N)+\frac{1}{\pi}\int_{-\pi}^{\pi}|s_N(x)-p(x)|^2\,dx .
$$
L'ultimo addendo è non negativo e si annulla soltanto se $p=s_N$, perché la differenza dei due polinomi è continua. Per Parseval, quando si passa da $s_N$ a $s_{N+1}$, la diminuzione dell'errore è $a_{N+1}^2+b_{N+1}^2$. Le ampiezze delle armoniche già incluse restano quelle determinate dai coefficienti.
:::
::::

:::esempio{titolo="Energia dell'armonica esclusa"}
Per $f(x)=\cos x+\dfrac12\cos(2x)$, il polinomio di grado al più uno che minimizza l'errore è $s_1(x)=\cos x$. Il residuo è $\dfrac12\cos(2x)$, quindi l'errore quadratico normalizzato vale $\dfrac14$. Se si aumenta o si diminuisce il coefficiente di $\cos x$ di una quantità $d$, l'errore cresce di $d^2$: il prodotto incrociato fra le due armoniche ha integrale nullo. In un singolo punto la modifica può rendere migliore l'approssimazione. Per esempio, in $x=0$ la scelta $p(x)=\dfrac32\cos x$ dà il valore esatto, ma su tutto il periodo porta l'errore quadratico da $\dfrac14$ a $\dfrac12$.

::grafico{f="cos(x)+cos(2*x)/2;cos(x);3*cos(x)/2" xmin=-3.45 xmax=3.45 ymin=-1.7 ymax=1.75 punti="0,1;0,1.5" legenda="f(x);s_1(x);\frac32\cos x" titolo="In $x=0$ la curva rossa coincide con $f$. La curva tratteggiata $s_1$ dà l'errore quadratico minore sull'intero periodo."}
:::

:::esempio{titolo="Errore quadratico vicino a un salto"}
Per l'onda quadra $q$, la somma delle prime $m$ armoniche dispari coincide con la proiezione sulle armoniche fino all'indice $2m-1$, poiché i coefficienti di indice pari sono nulli. Per calcolare l'errore quadratico normalizzato si sommano i quadrati dei coefficienti esclusi. Dato che $t\mapsto(2t+1)^{-2}$ decresce per $t\geq0$, ogni termine con indice $k$ è al più l'integrale della stessa funzione tra $k-1$ e $k$. Per $m\geq1$ si ottiene
$$
E(S_m)=\frac{16}{\pi^2}\sum_{k=m}^\infty \frac{1}{(2k+1)^2}
\leq \frac{16}{\pi^2}\int_{m-1}^\infty \frac{dt}{(2t+1)^2}
=\frac{8}{\pi^2(2m-1)}.
$$
Questa stima tende a zero. Invece, per ogni $m$ fissato, la somma parziale tende a zero quando $x\downarrow 0$ e $q$ vale uno in quell'intervallo. Perciò il limite destro di $|q-S_m|$ è uno e il suo estremo superiore sul periodo è almeno uno. L'errore quadratico misura l'integrale su tutto il periodo. Può quindi diminuire mentre persiste uno scarto elevato in una regione sempre più vicina al salto.
:::
