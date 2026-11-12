---
titolo: "Misura e integrale di Lebesgue"
sommario: "Misurabilità, funzioni semplici, integrale, convergenza monotona, Fatou, convergenza dominata, Tonelli e Fubini."
---

## Sigma-algebre e misure

:::definizione{#misura titolo="Spazio di misura"}
Una sigma-algebra $\mathcal A$ su $X$ contiene $X$ ed è chiusa per complementare e unioni numerabili. Una **misura** è una funzione $\mu:\mathcal A\to[0,+\infty]$ con $\mu(\varnothing)=0$ e
$$
\mu\left(\bigcup_{n=1}^{\infty}E_n\right)=\sum_{n=1}^{\infty}\mu(E_n)
$$
per insiemi misurabili a due a due disgiunti. La terna $(X,\mathcal A,\mu)$ è uno spazio di misura. Seguono monotonia e subadditività numerabile. Una proprietà vale quasi ovunque se le eccezioni sono contenute in un insieme misurabile nullo. La misura di conteggio assegna il numero degli elementi; gli integrali diventano somme.
:::

:::osservazione
La sigma-algebra specifica quali sottoinsiemi si possono misurare. La chiusura per complementare e per unioni numerabili dà anche la chiusura per intersezioni numerabili. Se, per esempio, $E_n$ descrive la condizione che un valore superi una soglia al passo $n$, l'evento in cui la condizione si verifica infinite volte è $\bigcap_{k=1}^\infty\bigcup_{n\ge k}E_n$. Le due operazioni della sigma-algebra garantiscono che anche questo insieme sia misurabile.

Per verificare la numerabile additività serve una famiglia disgiunta. Se gli insiemi si sovrappongono, prima si possono sostituire con i pezzi nuovi $E_1$, $E_2\setminus E_1$, $E_3\setminus(E_1\cup E_2)$ e così via. L'unione resta la stessa e ciascun punto viene contato una sola volta.
:::

:::esempio{titolo="Una misura assegnata ai blocchi di una partizione"}
Sia $X=\{1,2,3,4,5,6\}$ e si considerino i blocchi $A=\{1,2\}$, $B=\{3\}$ e $C=\{4,5,6\}$. La famiglia formata da tutte le unioni di questi blocchi è una sigma-algebra. Il complementare di un'unione è l'unione dei blocchi esclusi, mentre ogni unione numerabile seleziona al più tre blocchi. Assegnando ai blocchi rispettivamente le masse $\dfrac14$, $\dfrac13$ e $\dfrac5{12}$ si ottiene una misura di massa totale uno. La misura di $A\cup C$ è $\dfrac14+\dfrac5{12}=\dfrac23$. L'insieme $\{1,3\}$ non appartiene alla sigma-algebra, perché contiene una parte del blocco $A$. In questo spazio misurare un sottoinsieme richiede di sapere se può essere composto con i blocchi disponibili. Con la sigma-algebra di tutti i sottoinsiemi si potrebbero invece assegnare masse separate ai singoletti.
:::

:::esempio{titolo="Due intervalli sovrapposti"}
Gli intervalli $[0,3]$ e $[2,4]$ hanno misure $3$ e $2$. Il tratto comune $[2,3]$ ha misura $1$. Si può sommare la misura di $[0,3]$ a quella della parte nuova $(3,4]$. La misura dell'unione è quindi $4$. Il valore è lo stesso che si ottiene sottraendo la misura dell'intersezione alla somma delle misure.

::grafico{linee="0,1 3,1;2,2 4,2;0,3 4,3" segmenti="0,0,0,3;2,0,2,2;3,0,3,3;4,0,4,3" etichette="1,1.25,A;2.7,2.25,B;1.7,3.25,A ∪ B" xmin=-0.5 xmax=4.6 ymin=-0.3 ymax=3.8 titolo="Le proiezioni dei tratti indicano gli estremi di $A=[0,3]$, $B=[2,4]$ e della loro unione."}

:::

## Misura di Lebesgue

:::definizione{#lebesgue titolo="Misura esterna e misurabilità"}
Per $E\subseteq\mathbb R$, si pone
$$
m^*(E)=\inf\left\{\sum_n|I_n|:E\subseteq\bigcup_n I_n,\ I_n\text{ intervalli aperti}\right\}.
$$
Un insieme $E$ è misurabile secondo Lebesgue se, per ogni $A\subseteq\mathbb R$, vale $m^*(A)=m^*(A\cap E)+m^*(A\setminus E)$. Sugli insiemi misurabili la restrizione $m=m^*$ è una misura completa: anche ogni sottoinsieme di un insieme nullo è misurabile e nullo.

Gli intervalli hanno misura uguale alla lunghezza. I singoletti sono nulli, quindi ogni insieme numerabile è nullo. In particolare $\mathbb Q\cap[0,1]$ ha misura zero pur essendo denso. In $\mathbb R^d$ la costruzione usa ricoprimenti mediante rettangoli.
:::

:::esempio{titolo="Un insieme denso di misura zero"}
Si enumerino i razionali di $[0,1]$ come $q_1,q_2,\ldots$. Fissato $\varepsilon>0$, attorno a $q_k$ si sceglie un intervallo aperto di lunghezza $\varepsilon 2^{-k}$. Il ricoprimento così ottenuto contiene ogni razionale e la sua lunghezza totale è $\varepsilon$. Dalla definizione di misura esterna segue $m^*(\mathbb Q\cap[0,1])\le\varepsilon$. Poiché la stima vale per ogni $\varepsilon>0$, la misura è zero. La densità dice che ogni sottointervallo contiene qualche razionale. La stima del ricoprimento riguarda invece la somma delle lunghezze assegnate a tutti i razionali.

::grafico{linee="0.2,1 0.8,1;0.05,2 0.35,2;0.725,3 0.875,3" punti="0.5,1,pieno;0.2,2,pieno;0.8,3,pieno" etichette="0.51,1.28,q₁;0.22,2.28,q₂;0.8,3.28,q₃" xmin=-0.15 xmax=1.15 ymin=-0.1 ymax=3.65 titolo="Schema dei primi tre intervalli attorno ai razionali enumerati. Le larghezze decrescono e il ricoprimento prosegue per tutti gli indici."}

:::

:::osservazione
Per una successione crescente di insiemi misurabili, la misura dell'unione è il limite delle misure. Lo si vede scrivendo l'unione come somma disgiunta del primo insieme e degli incrementi successivi. Per una successione decrescente si ottiene l'analoga continuità dall'alto quando il primo insieme ha misura finita. Si applica infatti il caso crescente ai complementari relativi al primo insieme. La finitezza serve per sottrarre le misure. Per gli intervalli $(n,+\infty)$, ciascuna misura è infinita e l'intersezione è vuota.
:::

:::esempio{titolo="Un insieme nullo ottenuto togliendo terzi aperti"}
Si parte da $C_0=[0,1]$. Al primo passo si toglie il terzo centrale aperto e si conservano i due intervalli chiusi rimasti. A ogni passo si ripete la stessa operazione su ciascun intervallo. Dopo $n$ passi l'insieme $C_n$ è unione disgiunta di $2^n$ intervalli di lunghezza $3^{-n}$, quindi $m(C_n)=\left(\dfrac23\right)^n$. Gli insiemi decrescono e $m(C_0)=1$. Per la continuità dall'alto l'intersezione $C=\bigcap_n C_n$ ha dunque misura zero. I punti di $C$ si possono descrivere scegliendo, a ogni passo, l'intervallo di sinistra oppure quello di destra. Ogni scelta infinita determina un punto, perché gli intervalli sono chiusi, annidati e di lunghezza tendente a zero. Due scelte che differiscono a un certo passo danno punti distinti, perché i due intervalli scelti a quel passo sono disgiunti. L'insieme ha quindi tanti punti quante le successioni binarie infinite, pur avendo misura zero.
:::

## Funzioni misurabili e semplici

:::definizione{#semplici titolo="Misurabilità e integrale delle funzioni semplici"}
Una funzione reale $f$ è misurabile se $\{x:f(x)>t\}\in\mathcal A$ per ogni $t\in\mathbb R$. Le funzioni continue su $\mathbb R$ sono misurabili rispetto alla sigma-algebra di Borel, e i limiti puntuali conservano la misurabilità. Una funzione semplice è una somma finita $s=\sum_{j=1}^k a_j\mathbf1_{E_j}$, con insiemi misurabili disgiunti. Per $a_j\ge0$,
$$
\int s\,d\mu=\sum_{j=1}^k a_j\mu(E_j),
$$
con convenzione $0\cdot\infty=0$. Per esempio $2\mathbf1_{[0,1]}+3\mathbf1_{(1,3]}$ ha integrale $2+6=8$. Ogni funzione misurabile non negativa è limite crescente di funzioni semplici non negative.
:::

:::esempio{titolo="Sottoinsiemi di livello e approssimazioni dal basso"}
Per $f(x)=x$ su $[0,1)$, l'insieme in cui $f>\dfrac12$ è il tratto a destra di $\dfrac12$. Il suo complemento nel dominio dà i punti in cui $f\le\dfrac12$. Se si taglia l'asse dei valori in passi di ampiezza $\dfrac14$, si ottengono quattro fasce e si assegna a ogni punto l'estremo inferiore della fascia in cui cade il suo valore. La funzione semplice risultante vale $0$, $\dfrac14$, $\dfrac12$ e $\dfrac34$ su quattro intervalli di uguale misura. L'integrale è perciò $\dfrac38$.

::grafico{curve="t,t,0,1" punti="1,1,vuoto" linee="0,0 0.25,0;0.25,0.25 0.5,0.25;0.5,0.5 0.75,0.5;0.75,0.75 1,0.75" segmenti="0.25,0,0.25,0.25;0.5,0,0.5,0.5;0.75,0,0.75,0.75" xmin=-0.1 xmax=1.12 ymin=-0.1 ymax=1.15 titolo="Gradini da un quarto sotto $f(x)=x$ su $[0,1)$. Ogni altezza è l'estremo inferiore della fascia corrispondente."}

Per una funzione misurabile non negativa il procedimento si applica arrotondando per difetto a multipli di $2^{-n}$ e troncando sopra il livello $n$. Le controimmagini delle fasce sono misurabili. Aumentando $n$, il livello di troncamento sale e ogni gradino si divide in due. Le approssimazioni restano inferiori alla funzione e crescono al suo valore in ogni punto.
:::

:::osservazione
Per la misurabilità basta controllare le soglie razionali. Infatti, se $f(x)>t$, esiste un razionale $q$ strettamente compreso fra $t$ e $f(x)$. Viceversa da $f(x)>q>t$ segue $f(x)>t$. Pertanto
$$
\{f>t\}=\bigcup_{\substack{q\in\mathbb Q\\q>t}}\{f>q\}.
$$
L'unione a destra è numerabile. Lo stesso criterio spiega perché l'estremo superiore di una successione di funzioni misurabili è misurabile. Il suo valore supera $t$ esattamente quando almeno uno dei valori della successione supera $t$. L'insieme di livello è dunque l'unione degli insiemi $\{f_n>t\}$. La proprietà vale anche se l'estremo superiore assume il valore infinito. Applicandola alle funzioni opposte si ottiene la misurabilità degli infimi. In particolare, gli infimi delle code di una successione misurabile sono misurabili. Si possono quindi integrare e applicare a essi il teorema di convergenza monotona nella prova di Fatou.
:::

## Integrale di Lebesgue

:::definizione{#integrale-lebesgue titolo="Integrale di una funzione misurabile"}
Per $f\ge0$ misurabile si definisce
$$
\int f\,d\mu=\sup\left\{\int s\,d\mu:0\le s\le f,\ s\text{ semplice}\right\}.
$$
Per $f$ reale si scrive $f=f^+-f^-$, dove $f^+=\max(f,0)$ e $f^-=\max(-f,0)$. L'integrale è definito se almeno uno dei due integrali è finito. La funzione è **integrabile** se $\int|f|<\infty$, e allora $\int f=\int f^+-\int f^-$. Per funzioni complesse si integrano le componenti.

Due funzioni misurabili uguali quasi ovunque hanno lo stesso integrale, quando è definito. Quindi $\int_0^1\mathbf1_{\mathbb Q}\,dm=0$. Una funzione Riemann-integrabile su un compatto ha lo stesso integrale di Lebesgue. Un integrale improprio soltanto condizionatamente convergente non garantisce invece l'integrabilità assoluta richiesta da $L^1$.
:::

:::esempio{titolo="Area orientata e integrale del modulo"}
Per $f(x)=x-1$ su $[0,2]$, la parte positiva coincide con $x-1$ a destra di $1$, mentre la parte negativa coincide con $1-x$ a sinistra. Le due aree valgono entrambe $\dfrac12$. L'integrale di $f$ è la loro differenza e vale zero. L'integrale di $|f|$ è la loro somma e vale uno. Il controllo dell'integrabilità riguarda questa seconda operazione.

::grafico{f="x-1" area="0;x-1;0;1|x-1;0;1;2" punti="1,0,pieno" xmin=-0.2 xmax=2.2 ymin=-1.3 ymax=1.3 titolo="Le due aree valgono $\dfrac12$. Quella a sinistra contribuisce con segno negativo all'integrale di $f$."}

:::

:::attenzione
Per $f(x)=\dfrac1x$ su $(-1,1)$, il valore principale simmetrico è zero. Tuttavia l'integrale della parte positiva e quello della parte negativa valgono entrambi $+\infty$. La sottrazione di questi due infiniti è indeterminata, quindi l'integrale di Lebesgue di $f$ è indefinito. Il valore principale prescrive un legame tra i due tagli di integrazione. La definizione di integrale controlla invece le due parti separatamente.
:::

:::esempio{titolo="Confronto fra una singolarità e una coda"}
Si consideri la funzione $x^{-\alpha}$ per $x>0$, con $\alpha$ reale. Su ogni intervallo chiuso contenuto nella semiretta positiva la funzione è continua. Vicino a zero si integra dapprima su $[\varepsilon,1]$, con $0<\varepsilon<1$. Per $\alpha\ne1$ si ottiene $\dfrac{1-\varepsilon^{1-\alpha}}{1-\alpha}$. Se $\alpha<1$, la potenza di $\varepsilon$ tende a zero e l'integrale vale $\dfrac1{1-\alpha}$. Se $\alpha>1$, la stessa espressione tende a infinito. Per $\alpha=1$ l'integrale troncato vale $-\log\varepsilon$ e diverge. Sulla coda si integra invece su $[1,R]$. Per $\alpha\ne1$ si ottiene $\dfrac{R^{1-\alpha}-1}{1-\alpha}$, che ha limite finito $\dfrac1{\alpha-1}$ esattamente quando $\alpha>1$. Per $\alpha=1$ si ottiene $\log R$. In entrambi i casi, poiché l'integranda è non negativa, i limiti dei troncamenti danno l'integrale di Lebesgue per convergenza monotona. Le due condizioni di integrabilità sono incompatibili, quindi l'integrale su tutta la semiretta è infinito per ogni $\alpha$.
:::

## Convergenza monotona e Fatou

::::teorema{#convergenza-monotona titolo="Convergenza monotona"}
Siano $f_n$ e $f$ misurabili. Se $0\le f_n\le f_{n+1}$ e $f_n\to f$ quasi ovunque, allora
$$
\int f\,d\mu=\lim_n\int f_n\,d\mu,
$$
anche se il valore è infinito. Ne segue lo scambio tra integrale e somma di funzioni non negative.

:::dimostrazione
La monotonia dà $\lim\int f_n\le\int f$. Per una funzione semplice $0\le s\le f$ e $0<c<1$, gli insiemi $E_n=\{f_n\ge cs\}$ crescono e ricoprono quasi ovunque $\{s>0\}$. Quindi $\int f_n\ge c\int_{E_n}s\to c\int s$. Si prende il supremo su $s$ e poi si fa tendere $c$ a $1$.
:::
::::

:::teorema{#fatou titolo="Lemma di Fatou"}
Per funzioni misurabili non negative,
$$
\int\liminf_n f_n\,d\mu\le\liminf_n\int f_n\,d\mu.
$$
Si applica la convergenza monotona a $\inf_{k\ge n}f_k$. Per $f_n=n\mathbf1_{(0,\dfrac1n)}$ il limite è zero quasi ovunque e gli integrali valgono $1$: la disuguaglianza può essere stretta.
:::

:::esempio{titolo="Troncamenti che aumentano senza una maggiorante integrabile"}
Su $(0,1)$ si ponga $f_n(x)=\min(n,\dfrac1x)$. Ogni $f_n$ ha integrale finito e la successione cresce puntualmente a $\dfrac1x$. Separando il tratto costante dal tratto in cui vale $\dfrac1x$ si trova
$$
\int_0^1 f_n(x)\,dx
=\int_0^{\frac1n}n\,dx+\int_{\frac1n}^1\dfrac{dx}{x}
=1+\log n.
$$
Il limite è infinito, in accordo con la convergenza monotona. Il teorema si applica perché le funzioni sono non negative e ordinate punto per punto. L'assenza di una maggiorante integrabile è compatibile con le ipotesi.

::grafico{f="min(2,1/x);min(4,1/x);min(8,1/x)" punti="0.5,2,pieno;0.25,4,pieno;0.125,8,pieno" xmin=0.005 xmax=1 ymin=0 ymax=9 legenda="f_2;f_4;f_8" titolo="Aumentando $n$, il tetto del troncamento sale. L'area tende all'infinito come $1+\log n$."}

:::

:::osservazione
Nel lemma di Fatou la successione degli infimi di coda è crescente. Per ogni $k$, l'infimo di coda è minore o uguale a ciascuno dei termini con indice almeno $k$. Il suo integrale è quindi minore o uguale all'infimo degli integrali della coda. La convergenza monotona applicata agli infimi di coda dà la disuguaglianza del lemma. Il passaggio è a senso unico perché il punto in cui ogni termine è grande può dipendere dall'indice. Nei rettangoli concentrati il supporto si restringe e l'altezza cresce, quindi l'area si conserva benché ogni punto positivo venga escluso.

::grafico{linee="0,2 0.5,2 0.5,0;0,4 0.25,4 0.25,0;0,8 0.125,8 0.125,0" etichette="0.49,2.4,n = 2;0.27,4.38,n = 4;0.18,8.3,n = 8" xmin=-0.05 xmax=0.65 ymin=-0.2 ymax=9.1 titolo="I rettangoli della successione di Fatou hanno tutti area $1$. Il loro supporto si restringe verso $0$."}

:::

:::esempio{titolo="Una somma di gradini con altezze crescenti"}
Per ogni intero positivo $k$, sia $I_k=(2^{-k},2^{1-k}]$. Questi intervalli disgiunti ricoprono $(0,1]$. Si ponga $f(x)=k$ quando $x\in I_k$. La funzione è misurabile e cresce senza limite quando $x$ tende a zero da destra. La somma parziale $s_N=\sum_{k=1}^N k\mathbf1_{I_k}$ vale zero sugli intervalli esclusi, quindi $s_N$ cresce puntualmente a $f$. Poiché ogni intervallo ha lunghezza $2^{-k}$,
$$
\int_0^1s_N\,dm=\sum_{k=1}^N \frac{k}{2^k}
=2-\frac{N+2}{2^N}.
$$
L'ultima uguaglianza segue per induzione. Vale per $N=1$ e il passaggio da $N$ a $N+1$ aggiunge $\dfrac{N+1}{2^{N+1}}$ a entrambi i membri. Poiché il termine $\dfrac{N+2}{2^N}$ tende a zero, la convergenza monotona dà integrale due. In questo esempio, il restringimento degli intervalli compensa l'aumento delle altezze.
:::

## Convergenza dominata

:::teorema{#dominata titolo="Convergenza dominata"}
Siano $f_n$ e $f$ misurabili. Se $f_n\to f$ quasi ovunque ed esiste $g\in L^1(\mu)$ con $|f_n|\le g$ quasi ovunque per ogni $n$, allora
$$
\int|f_n-f|\,d\mu\to0,\qquad \int f_n\,d\mu\to\int f\,d\mu.
$$
La dimostrazione applica Fatou a $2g-|f_n-f|$. Per $f_n(x)=\dfrac{e^{-x}}{1+\dfrac xn}$ su $(0,\infty)$, la dominante $e^{-x}$ è integrabile e il limite è $e^{-x}$; quindi gli integrali tendono a $1$.

La successione $n\mathbf1_{(0,\dfrac1n)}$ mostra che la sola convergenza quasi ovunque non basta: non può esistere una dominante integrabile comune.
:::

:::esempio{titolo="Scelta di una maggiorante su una semiretta"}
Per verificare la dominazione nell'esempio, il denominatore è almeno uno per ogni $n$ e ogni $x>0$. L'esponenziale è quindi una maggiorante indipendente dall'indice. Si ha $\int_0^\infty e^{-x}\,dx=1$, quindi la funzione che maggiora è integrabile sul dominio effettivo. Per ogni $x$ fissato, $\dfrac xn$ tende a zero. Il teorema permette di concludere senza integrare il quoziente per ogni $n$.

::grafico{f="exp(-x);exp(-x)/(1+x);exp(-x)/(1+x/4)" xmin=0 xmax=5 ymin=0 ymax=1.12 legenda="e^{-x};f_1;f_4" titolo="La curva $e^{-x}$ maggiora simultaneamente $f_1$ e $f_4$ e coincide con il limite puntuale."}

Quando una funzione ha una singolarità o il dominio è illimitato, si può scegliere una stima diversa sulle diverse parti del dominio. Per esempio, per $f_n(x)=\dfrac{1}{(1+x^2)(1+\dfrac{x}{n})}$ su $(0,\infty)$, una maggiorante è $1$ su $(0,1]$ e $x^{-2}$ su $(1,\infty)$. Entrambi i tratti sono integrabili e il limite puntuale è $\dfrac1{1+x^2}$. Il limite degli integrali è quindi $\dfrac{\pi}{2}$.
:::

:::osservazione
La conclusione in norma $L^1$ è più informativa della sola convergenza degli integrali. Si ha infatti
$$
\left|\int f_n\,d\mu-\int f\,d\mu\right|\le\int |f_n-f|\,d\mu.
$$
Dalla maggiorazione di $f_n$ segue la stessa maggiorazione per $f$ quasi ovunque. Quindi $0\le 2g-|f_n-f|$ e si può usare Fatou su questa differenza. Il suo limite puntuale è $2g$, così l'integrale di $2g$ è minore o uguale a $\int 2g-\limsup_n\int |f_n-f|$. Poiché $\int 2g$ è finito, la sottrazione mostra che il limite superiore dell'errore in $L^1$ è zero. Questa prova chiarisce il ruolo distinto delle ipotesi: il limite puntuale identifica la funzione finale e l'integrabilità di $g$ rende lecita la sottrazione.

Una successione traslata come $\mathbf1_{(n,n+1)}$ sulla retta mostra che anche senza picchi crescenti lo scambio può fallire. L'altezza resta uno e gli integrali valgono uno, ma a ogni punto fissato il rettangolo passa al più una volta e il limite è zero. Una maggiorante comune deve valere almeno uno su tutti quegli intervalli e ha quindi integrale infinito.
:::

:::esempio{titolo="Un cambio di variabile prima della dominata"}
Su $(0,\infty)$ si consideri $f_n(x)=\dfrac{ne^{-x}}{1+n^2x^2}$. Per ogni $x>0$ la funzione tende a zero, perché il denominatore cresce quadraticamente in $n$ mentre il numeratore cresce linearmente. Il cambio di variabile $u=nx$ dà
$$
\int_0^\infty f_n(x)\,dx
=\int_0^\infty \frac{e^{-\frac un}}{1+u^2}\,du .
$$
Per $u$ fissato l'integranda a destra tende a $\dfrac1{1+u^2}$. Questa stessa funzione è una maggiorante integrabile su tutta la semiretta, poiché $e^{-\dfrac un}\le1$. La convergenza dominata dà dunque $\lim_n\int_0^\infty f_n\,dx=\dfrac{\pi}{2}$. La funzione limite nelle coordinate originali ha invece integrale zero. Il cambio di scala rende visibile il contributo dei valori di $x$ vicini a zero. Per esempio, l'integrale di $f_n$ su $(0,\dfrac1n)$ corrisponde a quello della nuova integranda su $(0,1)$ e tende a $\dfrac{\pi}{4}$. Il limite positivo dell'integrale esclude l'esistenza di una maggiorante integrabile comune nella variabile $x$.
:::

## Tonelli e Fubini

:::teorema{#fubini titolo="Integrali su spazi prodotto"}
Su spazi di misura sigma-finiti, **Tonelli** identifica integrale doppio e integrali iterati per funzioni misurabili non negative, anche con valore infinito. Se $\int|f|<\infty$, **Fubini** garantisce sezioni integrabili quasi ovunque e
$$
\int_{X\times Y}f\,d(\mu\otimes\nu)
=\int_X\left(\int_Y f\,d\nu\right)d\mu
=\int_Y\left(\int_X f\,d\mu\right)d\nu.
$$
Per $e^{-x-2y}$ sul quadrante positivo, Tonelli permette di separare gli integrali e dà $\dfrac12$. Per una funzione di segno variabile si verifica prima l'integrabilità assoluta.
:::

:::esempio{titolo="Due ordini di integrazione sullo stesso triangolo"}
Si integri $x$ sul dominio $D=\{(x,y):0<y<x<1\}$. L'integranda $x\mathbf1_D$ è misurabile e non negativa, quindi Tonelli consente entrambi gli ordini. A $x$ fissato la sezione verticale è $0<y<x$. A $y$ fissato la sezione orizzontale è $y<x<1$. Le due scritture producono lo stesso valore
$$
\int_0^1\int_0^x x\,dy\,dx
=\int_0^1x^2\,dx=\dfrac13,
\qquad
\int_0^1\int_y^1 x\,dx\,dy
=\int_0^1\dfrac{1-y^2}{2}\,dy=\dfrac13.
$$

::grafico{poligoni="0,0 1,0 1,1" linee="0,0 1,1 1,0 0,0;0.7,0 0.7,0.7;0.3,0.3 1,0.3" xmin=-0.12 xmax=1.22 ymin=-0.12 ymax=1.16 uguale=1 titolo="Il triangolo $D$ con una sezione verticale a $x=\dfrac7{10}$ e una orizzontale a $y=\dfrac3{10}$."}

:::

:::attenzione
Per capire a cosa serve l'integrabilità assoluta si consideri $a(i,j)=\mathbf1_{\{j=i\}}-\mathbf1_{\{j=i+1\}}$ sui naturali positivi, con la misura di conteggio in entrambe le variabili. La somma su $j$ a $i$ fissato vale zero, perché ciascuna riga contiene un $1$ e un $-1$. La somma su $i$ a $j$ fissato vale uno per $j=1$ e zero per $j\ge2$, perché nella prima colonna manca il contributo negativo. Le due somme iterate danno dunque zero e uno. La somma di $|a(i,j)|$ è infinita, quindi l'ipotesi di Fubini è assente.
:::

:::esempio{titolo="Integrale a partire dalla misura dei livelli"}
Sia $f(x)=\sqrt{x}$ su $(0,4)$. Per $x$ fissato, l'indicatore della condizione $0<t<f(x)$ ha integrale in $t$ uguale a $f(x)$. L'indicatore è misurabile e non negativo, quindi Tonelli permette di integrare prima in $x$. Per $0<t<2$, la condizione $\sqrt{x}>t$ equivale a $t^2<x<4$. La sezione ha quindi misura $4-t^2$. Per $t\ge2$ la sezione è vuota. Ne segue
$$
\int_0^4\sqrt{x}\,dx
=\int_0^2 (4-t^2)\,dt
=\frac{16}{3}.
$$
Il calcolo riconduce l'integrale alla misura dell'insieme che supera ogni altezza. La stessa costruzione vale per una funzione misurabile non negativa su uno spazio di misura sigma-finito. Per ogni altezza $t$ il contributo è la misura di $\{f>t\}$. La formula è utile quando queste misure si conoscono anche se i valori di $f$ sono distribuiti su insiemi di forma irregolare.
:::

## Integrali dipendenti da un parametro

:::teorema{#parametri titolo="Derivazione sotto il segno di integrale"}
Sia $I$ un intervallo aperto. Si supponga che $F(t,x)$ sia reale, misurabile in $x$ per ogni $t$ e integrabile in $x$ per un valore $t_0$. Si supponga inoltre che $t\mapsto F(t,x)$ sia differenziabile su $I$ per ogni $x$ al di fuori di un insieme nullo fissato. Si supponga infine che su ogni sottointervallo compatto di $I$ esista una funzione integrabile che maggiori $|\partial_tF(t,x)|$ simultaneamente per tutti i parametri del sottointervallo, salvo un insieme nullo di valori di $x$. Allora
$$
\frac d{dt}\int F(t,x)\,d\mu(x)=\int\partial_tF(t,x)\,d\mu(x).
$$
Per il segmento che unisce $t_0$ a $t$, il teorema del valor medio maggiora $|F(t,x)-F(t_0,x)|$ con il prodotto di $|t-t_0|$ e di una funzione integrabile. Quindi $F(t,\cdot)$ è integrabile per ogni $t\in I$. Su un compatto che contiene $t$ al suo interno, la stessa stima controlla i rapporti incrementali e consente di applicare la convergenza dominata. Per $t>0$, derivando $\int_0^\infty e^{-tx}\,dx=\dfrac1t$ si ottiene $\int_0^\infty xe^{-tx}\,dx=\dfrac1{t^2}$.
:::

:::osservazione
Il controllo della derivata può dipendere dall'intorno del parametro in cui si vuole derivare. Nel caso esponenziale, fissato $t_*>0$, si scelgano i valori $t$ tra $\dfrac{t_*}{2}$ e $\dfrac{3t_*}{2}$. I rapporti incrementali sono dominati da $x e^{-\dfrac{t_*}{2}x}$ per il teorema del valor medio. La stima si usa prima di passare al limite. Per ogni $x$ il rapporto incrementale converge a $-xe^{-t_*x}$. La dominata giustifica il passaggio dalla derivata dell'integrale all'integrale della derivata.

::grafico{f="x*exp(-x/2);x*exp(-x);x*exp(-3*x/2)" xmin=0 xmax=9 ymin=0 ymax=0.84 legenda="xe^{-x/2};xe^{-x};xe^{-3x/2}" titolo="Per $t$ compreso fra $\dfrac12$ e $\dfrac32$, $xe^{-\dfrac x2}$ domina $|\partial_t e^{-tx}|$."}

Per calcolare un integrale attraverso una primitiva nel parametro serve anche un valore iniziale. Si ponga $G(t)=\int_0^1\dfrac{\log(1+tx)}{x}\,dx$ per $t>-1$. In un intervallo compatto contenuto in $(-1,\infty)$, la derivata dell'integranda è $\dfrac1{1+tx}$ ed è uniformemente limitata su $(0,1)$. Perciò $G'(t)=\dfrac{\log(1+t)}{t}$ per $t\ne0$ e $G'(0)=1$. Dal valore $G(0)=0$ segue $G(t)=\int_0^t\dfrac{\log(1+s)}{s}\,ds$, con la funzione estesa per continuità in zero.
:::

:::esempio{titolo="Differenza di esponenziali divisa per la variabile"}
Per $t>0$ si consideri
$$
H(t)=\int_0^\infty \frac{e^{-x}-e^{-tx}}{x}\,dx .
$$
L'integranda è misurabile in $x$ e differenziabile in $t$ per ogni $x>0$. In $t=1$ è identicamente nulla, quindi è integrabile per almeno un valore del parametro. La sua derivata rispetto a $t$ è $e^{-tx}$. Su un intervallo compatto $[a,b]\subset(0,\infty)$, la funzione $e^{-ax}$ la maggiora per ogni $t$ e ha integrale $\dfrac1a$. Le ipotesi della derivazione sotto integrale sono quindi soddisfatte e
$$
H'(t)=\int_0^\infty e^{-tx}\,dx=\frac1t .
$$
Integrando nel parametro fra $1$ e $t$ si ottiene $H(t)=\log t$. La scelta di un valore iniziale in cui il numeratore si annulla permette di applicare il teorema direttamente alla differenza. Separando i due esponenziali si otterrebbero invece due integrali divergenti vicino a zero, perché ciascun numeratore tende a uno.
:::
