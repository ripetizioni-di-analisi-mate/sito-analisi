---
titolo: Funzioni, grafici, esponenziali e logaritmi
sommario: Dominio e immagine, lettura e trasformazione dei grafici, composizione e inversa, modelli esponenziali ed equazioni logaritmiche.
---

## Funzioni, tabelle e grafici

:::definizione{#funzione titolo="Funzione e valore di una funzione"}
Una **funzione** è una regola che a ogni elemento di un insieme di partenza associa *un solo* elemento di un insieme di arrivo. Per esempio, la regola «a ogni numero si associa il suo doppio» è una funzione, e al numero $3$ associa $6$.

L'insieme di partenza si chiama **dominio** e quello di arrivo codominio. La scrittura $f:A\to B$ indica una funzione $f$ con dominio $A$ e codominio $B$, e $x\in A$ si legge «$x$ appartiene ad $A$». Un elemento $x$ del dominio si chiama **argomento**; l'elemento che la funzione gli associa si indica con $f(x)$, si legge «$f$ di $x$» ed è il **valore** della funzione in $x$. Secondo il problema, $x$ rappresenta un tempo, una lunghezza oppure un numero senza unità. L'insieme dei numeri reali si indica con $\mathbb R$.

Di solito la regola è una formula. Per calcolare il valore di $f(x)=2x^2-1$ in $x=-3$ si scrive $-3$, fra parentesi, al posto di ogni $x$:
$$
f(-3)=2\cdot(-3)^2-1=2\cdot9-1=17 .
$$
Il quadrato si applica a tutto il numero $-3$, segno compreso. Allo stesso modo, $f(2x)$ si calcola scrivendo $2x$ al posto di ogni $x$ e vale $2\cdot(2x)^2-1=2\cdot4x^2-1=8x^2-1$.
:::

:::definizione{#immagine titolo="Immagine e rappresentazione grafica"}
L'**immagine** di una funzione $f$ è l'insieme dei valori che la funzione assume, cioè dei numeri $f(x)$ ottenuti facendo variare $x$ in tutto il dominio $A$. Si indica con $f(A)$ ed è una parte del codominio. Anche il singolo valore $f(x)$ si chiama immagine di $x$.

Per esempio, $f(x)=x^2$ ha dominio e codominio $\mathbb R$. Un quadrato è maggiore o uguale a zero, quindi nessun numero negativo è un valore di $f$. Ogni numero $y\ge0$ è invece un valore di $f$, perché $y=f(\sqrt y)$. L'immagine è perciò l'intervallo $[0,+\infty)$. In un intervallo una parentesi quadra indica un estremo compreso e una tonda un estremo escluso; i simboli $+\infty$ e $-\infty$, «più infinito» e «meno infinito», indicano che l'intervallo prosegue senza fine verso destra o verso sinistra.

Il **grafico** di $f$ è l'insieme dei punti $(x,f(x))$ del piano cartesiano. Il primo numero della coppia è l'**ascissa** e si legge sull'asse orizzontale; il secondo è l'**ordinata** e si legge sull'asse verticale. Per leggere $f(2)$ si parte dal punto $2$ dell'asse orizzontale, ci si sposta in verticale fino alla curva e si legge l'ordinata. Una retta verticale incontra il grafico di una funzione al più una volta, perché a ogni argomento è associato un solo valore.
:::

:::esempio{titolo="Informazioni fornite da una tabella"}
Una tabella assegna una funzione elencando gli argomenti e i valori corrispondenti.

| $x$ | $1$ | $2$ | $5$ |
|---|---|---|---|
| $f(x)$ | $4$ | $4$ | $7$ |

Dalla tabella si leggono $f(1)=4$ e $f(5)=7$, quindi $f(1)+f(5)=4+7=11$. I numeri $4$ e $7$ appartengono all'immagine. Il valore $f(3)$ non è assegnato, perché $3$ non compare fra gli argomenti; si ricava soltanto se il testo dichiara una legge che vale anche per $3$.

Gli argomenti $1$ e $2$ hanno lo stesso valore $4$, ma ogni argomento ha un solo valore, quindi la tabella definisce una funzione. Una funzione in cui due argomenti diversi hanno lo stesso valore si dice *non iniettiva*.

:::

:::esempio{titolo="Lettura di un valore sul grafico"}
La funzione $g(x)=2x-1$ ha per grafico la retta della figura. Il valore $g(2)=2\cdot2-1=3$ si legge anche sul grafico. Il segmento tratteggiato verticale sale dal punto $2$ dell'asse orizzontale fino al punto $(2,3)$ della retta; quello orizzontale collega questo punto all'asse verticale, dove si legge l'ordinata $3$.

::grafico{f="2*x-1" xmin=-1 xmax=4 ymin=-3 ymax=7 punti="2,3" segmenti="2,0,2,3;0,3,2,3" titolo="Il punto di ascissa 2 ha ordinata 3."}
:::

:::esempio{#funzioni-a-tratti titolo="Leggere una funzione a tratti"}
Una **funzione a tratti** usa formule diverse su parti diverse del dominio. Accanto a ogni formula è scritta la condizione che indica per quali $x$ si usa quella formula. Per esempio,
$$
p(x)=\begin{cases}
2x+1,&x<1,\\
3,&x\ge1.
\end{cases}
$$
Per $x=0$ vale $0<1$, quindi si usa la prima riga e $p(0)=2\cdot0+1=1$. Per $x=1$ è soddisfatta la condizione $x\ge1$, che comprende l'uguaglianza, quindi $p(1)=3$.

Il grafico è un pezzo della retta $y=2x+1$ a sinistra di $1$ e un tratto orizzontale all'altezza $3$ da $1$ in poi, sul quale la funzione è definita e ha valore costante $3$. Per $x$ vicino a $1$ da sinistra la prima formula dà valori vicini a $2\cdot1+1=3$, quindi i due pezzi si uniscono in $(1,3)$ senza salto. Con $4$ al posto di $3$ nella seconda riga il grafico avrebbe un salto in $x=1$ e $p$ sarebbe ancora una funzione, perché ogni argomento avrebbe un solo valore.
:::

## Dominio e condizioni simultanee

:::definizione{#dominio titolo="Dominio naturale di una formula"}
Quando una funzione è data da una formula e il testo non indica il dominio, si prende il **dominio naturale**, cioè l'insieme dei numeri reali $x$ per i quali tutte le operazioni scritte nella formula sono definite. Le operazioni che pongono una condizione sono tre.

- Una frazione richiede il denominatore diverso da zero; per esempio $\dfrac1x$ è definita per $x\ne0$.
- Una radice di indice pari richiede il radicando maggiore o uguale a zero. Il radicando è l'espressione scritta sotto il segno di radice; l'indice è il numero scritto in piccolo sopra il segno e vale $2$ nella radice quadrata.
- Un logaritmo, indicato con $\log$ o con $\ln$ e definito nella sezione «Logaritmi e loro equazioni», richiede l'argomento strettamente positivo; l'argomento è l'espressione di cui si calcola il logaritmo.

Un polinomio, cioè una somma di potenze di $x$ moltiplicate per numeri, come $x^2-3x+2$, non contiene nessuna di queste operazioni, quindi ha dominio $\mathbb R$. Una radice di indice dispari è definita anche per i numeri negativi; per esempio $\sqrt[3]{-8}=-2$, perché $(-2)^3=-8$.

Le condizioni devono essere soddisfatte tutte insieme, quindi si scrivono in un sistema. Il dominio è la loro intersezione, cioè l'insieme degli $x$ che le soddisfano tutte. Quando una radice di indice pari sta al denominatore, il radicando deve essere strettamente positivo, perché il valore zero annullerebbe il denominatore. Se la variabile è un tempo $t$ misurato dall'inizio di un esperimento, si aggiunge la condizione $t\ge0$.
:::

:::esempio{titolo="Una radice e un denominatore"}
Nella formula $f(x)=\dfrac{\sqrt{x-2}}{x-5}$ compaiono una radice quadrata e una frazione, quindi le condizioni sono due:
$$
\begin{cases}
x-2\ge0,\\
x-5\ne0.
\end{cases}
$$
La prima equivale a $x\ge2$ e la seconda a $x\ne5$. Il dominio è formato dai numeri da $2$ in poi, tolto $5$, e si scrive $D=[2,5)\cup(5,+\infty)$; il simbolo $\cup$ si legge «unione» e riunisce i due intervalli. Il numero $2$ è compreso, con parentesi quadra, perché $f(2)=\dfrac{\sqrt0}{-3}=0$. Il numero $5$ è escluso, con parentesi tonde, perché in $x=5$ il denominatore vale $0$, anche se la radice è definita.
:::

:::esempio{titolo="Condizioni che restringono lo stesso intervallo"}
Nella funzione $g(x)=\dfrac{\ln x}{\sqrt{6-x}}$ l'argomento del logaritmo deve essere positivo e il radicando, che sta al denominatore, deve essere strettamente positivo:
$$
\begin{cases}
x>0,\\
6-x>0.
\end{cases}
$$
La seconda condizione equivale a $x<6$, quindi il dominio è $0<x<6$.

Nella funzione $h(x)=\ln\left(\dfrac{x-4}{x+2}\right)$ l'argomento del logaritmo è una frazione, positiva quando numeratore e denominatore hanno lo stesso segno. Il numeratore $x-4$ è positivo per $x>4$ e il denominatore $x+2$ per $x>-2$, quindi i numeri $-2$ e $4$ separano i segni. I due termini sono entrambi negativi per $x<-2$, hanno segni opposti per $-2<x<4$ e sono entrambi positivi per $x>4$. Il dominio è perciò $(-\infty,-2)\cup(4,+\infty)$.
:::

:::attenzione
Il dominio si determina sulla formula com'è scritta, prima di semplificarla. La funzione $\dfrac{x^2-4}{x-2}$ ha dominio $x\ne2$. Poiché $x^2-4=(x-2)(x+2)$, per $x\ne2$ il fattore $x-2$ si semplifica e la funzione vale $x+2$. Il suo grafico è la retta $y=x+2$ privata del punto $(2,4)$. La funzione $x+2$, definita anche in $2$, è una funzione diversa.
:::

## Zeri, segno e intersezioni

:::definizione{#zeri-segno titolo="Zeri e segno di una funzione"}
Uno **zero** di una funzione $f$ è un numero $x_0$ del dominio in cui la funzione vale zero, cioè $f(x_0)=0$. Gli zeri si trovano risolvendo l'equazione $f(x)=0$; per esempio $f(x)=2x-6$ ha lo zero $x_0=3$, perché $2\cdot3-6=0$. I punti dell'asse orizzontale hanno ordinata $0$, quindi sul grafico uno zero è l'ascissa di un punto in cui la curva incontra l'asse orizzontale.

L'**intercetta verticale** è il punto in cui il grafico incontra l'asse verticale. I punti di quell'asse hanno ascissa $0$, quindi l'intercetta è il punto $(0,f(0))$ ed esiste se $0$ appartiene al dominio. Per $f(x)=2x-6$ è il punto $(0,-6)$.

Studiare il **segno** di $f$ significa stabilire dove $f(x)>0$ e dove $f(x)<0$. La funzione è positiva dove il grafico sta sopra l'asse orizzontale ed è negativa dove sta sotto.

Gli zeri di una frazione sono gli zeri del numeratore che appartengono al dominio. La funzione $\dfrac{x(x-4)}{x-4}$ ha dominio $x\ne4$; il numeratore vale zero in $0$ e in $4$, ma $4$ è escluso dal dominio, quindi l'unico zero è $0$. Una frazione è positiva dove numeratore e denominatore hanno lo stesso segno e negativa dove hanno segni opposti.
:::

:::esempio{titolo="Segno di una parabola"}
La funzione $f(x)=(x+2)(x-1)$, svolto il prodotto, è il polinomio di secondo grado $x^2+x-2$, il cui grafico è una curva chiamata parabola. Un prodotto vale zero quando vale zero uno dei fattori, quindi gli zeri sono $x=-2$ e $x=1$. Per $x<-2$ i due fattori sono negativi e il prodotto è positivo. Per $-2<x<1$ il fattore $x+2$ è positivo e $x-1$ è negativo, quindi il prodotto è negativo; per esempio $f(0)=2\cdot(-1)=-2$. Per $x>1$ i due fattori sono positivi e il prodotto è positivo.

La disequazione $f(x)<0$ ha quindi soluzione $-2<x<1$, e $f(x)\le0$ comprende anche i due zeri. L'intervallo $-1<x<0$ contiene soltanto soluzioni, ma ne esclude altre, come $x=0{,}5$, quindi non è l'insieme delle soluzioni.

Nella figura i due punti segnati, $(-2,0)$ e $(1,0)$, corrispondono agli zeri. La curva sta sotto l'asse orizzontale fra i due zeri e sopra a sinistra di $-2$ e a destra di $1$.

::grafico{f="(x+2)*(x-1)" xmin=-4 xmax=3 ymin=-3 ymax=7 punti="-2,0;1,0" titolo="Fra i due zeri la parabola si trova sotto l'asse orizzontale."}
:::

:::definizione{#intersezioni titolo="Intersezione di due grafici"}
Un punto di **intersezione** fra i grafici di due funzioni $f$ e $g$ è un punto che appartiene a entrambi. Lì le due funzioni hanno lo stesso argomento e lo stesso valore, quindi le ascisse delle intersezioni sono le soluzioni dell'equazione $f(x)=g(x)$ nel dominio comune.

Con $f(x)=x^2+1$ e $g(x)=4x-2$ l'equazione è $x^2+1=4x-2$. Portando tutti i termini a sinistra si ottiene $x^2-4x+3=0$, cioè $(x-1)(x-3)=0$, quindi $x=1$ oppure $x=3$. Sostituendo le ascisse in $g$ si ottengono le ordinate $g(1)=4\cdot1-2=2$ e $g(3)=4\cdot3-2=10$, quindi i punti di intersezione sono $(1,2)$ e $(3,10)$. Un quesito che chiede il punto di intersezione ha per risposta una coppia di numeri.
:::

## Famiglie di funzioni elementari

:::definizione{#funzioni-elementari titolo="Retta, parabola e valore assoluto"}
Una **funzione affine** ha la forma $f(x)=mx+q$ e il suo grafico è una retta. Il numero $m$ è la **pendenza**, cioè la variazione di $f(x)$ quando $x$ aumenta di $1$; la retta sale da sinistra verso destra se $m>0$ e scende se $m<0$. Il numero $q=f(0)$ è il valore iniziale, quindi la retta incontra l'asse verticale in $(0,q)$.

Dati due punti $(x_1,y_1)$ e $(x_2,y_2)$ della retta, con $x_1\ne x_2$, la pendenza è il rapporto fra la variazione delle ordinate e quella delle ascisse, $m=\dfrac{y_2-y_1}{x_2-x_1}$. Per la retta che passa per $(1,3)$ e $(4,9)$ si ottiene $m=\dfrac{9-3}{4-1}=\dfrac63=2$. La **proporzionalità diretta** $y=kx$ è il caso $q=0$, in cui la retta passa per l'origine $(0,0)$.

Una **parabola** è il grafico di un polinomio di secondo grado. Nella forma $f(x)=a(x-h)^2+k$, con $a\ne0$, il punto $(h,k)$ è il **vertice**, cioè il punto del grafico in cui la funzione assume il valore minimo oppure massimo. Infatti $(x-h)^2$ vale zero per $x=h$ ed è positivo per ogni altro $x$. Se $a>0$, a $k$ si aggiunge una quantità maggiore o uguale a zero, quindi $k$ è il valore minimo; se $a<0$ la quantità aggiunta è minore o uguale a zero, quindi $k$ è il valore massimo. La retta verticale $x=h$ è l'asse di simmetria. Per esempio $(x-2)^2+1$ ha vertice $(2,1)$ e valore minimo $1$.

Il **valore assoluto** di un numero $u$, indicato con $|u|$, è la distanza di $u$ da zero sulla retta dei numeri. Vale $|u|=u$ se $u\ge0$ e $|u|=-u$ se $u<0$; per esempio $|5|=5$ e $|-5|=5$. Il grafico di $|x-h|+k$ è formato da due semirette che partono dal vertice $(h,k)$, di pendenza $-1$ a sinistra e $1$ a destra. A distanza $d$ dall'ascissa $h$ del vertice, $|x-h|+k$ supera $k$ di $d$, mentre la parabola $(x-h)^2+k$ supera $k$ di $d^2$.
:::

:::definizione{#radici-reciproci titolo="Radici e proporzionalità inversa"}
La **radice quadrata** $\sqrt x$ di un numero $x\ge0$ è il numero maggiore o uguale a zero che elevato al quadrato dà $x$; per esempio $\sqrt9=3$. La funzione $y=\sqrt x$ ha dominio e immagine $[0,+\infty)$, è strettamente crescente, cioè il suo grafico sale da sinistra verso destra, e passa per $(0,0)$, $(1,1)$ e $(4,2)$. La radice cubica $\sqrt[3]x$ è il numero che elevato al cubo dà $x$, e la funzione $y=\sqrt[3]x$ ha dominio e immagine $\mathbb R$.

Due grandezze $x$ e $y$ sono in **proporzionalità inversa** quando il loro prodotto è costante, $xy=k$ con $k\ne0$, cioè $y=\dfrac kx$ con $x\ne0$. Per $k=12$ i punti $(2,6)$, $(3,4)$ e $(6,2)$ appartengono al grafico, perché in ciascuno il prodotto delle coordinate è $12$. Per $k>0$ le coordinate hanno lo stesso segno, quindi il grafico ha un ramo nel primo quadrante, dove $x>0$ e $y>0$, e uno nel terzo, dove $x<0$ e $y<0$.

Un **asintoto** è una retta alla quale i punti del grafico si avvicinano sempre di più quando $x$ oppure $y$ diventa molto grande in valore assoluto. Gli asintoti di $y=\dfrac kx$ sono i due assi, e la curva non li incontra. Con $k=12$, per $x=0{,}01$ si ha $y=1200$, un punto vicino all'asse verticale; per $x=1200$ si ha $y=0{,}01$, un punto vicino all'asse orizzontale.

Nella funzione $y=\dfrac1{x-h}+k$ l'asintoto verticale è la retta $x=h$, dove $h$ è il numero escluso dal dominio. L'asintoto orizzontale è la retta $y=k$, perché per $x$ molto grande in valore assoluto la frazione è vicina a zero e la funzione è vicina a $k$. Nella figura è disegnata $y=\dfrac1{x-2}-1$, cioè il grafico di $y=\dfrac1x$ spostato di $2$ unità verso destra e di $1$ verso il basso; le due rette tratteggiate sono i suoi asintoti $x=2$ e $y=-1$. La curva ha un ramo a sinistra e uno a destra della retta $x=2$; in $x=1$ vale $\dfrac1{-1}-1=-2$ e in $x=3$ vale $\dfrac11-1=0$.

::grafico{f="1/(x-2)-1" xmin=-3 xmax=7 ymin=-5 ymax=4 asintoti="x=2;y=-1" titolo="La traslazione sposta gli asintoti nelle rette x = 2 e y = -1."}
:::

:::esempio{titolo="Dati e scelta del modello"}
Il tipo di funzione si riconosce da come il testo descrive il cambiamento della quantità.

- Una quantità vale $6$ all'inizio e aumenta di $4$ unità ogni minuto. L'aumento è lo stesso a ogni minuto, quindi la funzione è affine con pendenza $4$. Dopo $t$ minuti la quantità vale $6+4t$, e dopo $3$ minuti vale $18$.
- Una quantità vale $6$ all'inizio e raddoppia ogni minuto. A ogni minuto viene moltiplicata per $2$, quindi dopo $n$ minuti vale $6\cdot2^n$, e dopo $3$ minuti vale $6\cdot8=48$. La variabile $n$ sta all'esponente, quindi la funzione è di tipo esponenziale.
- Un percorso è lungo $12$ chilometri. Il tempo è il rapporto fra distanza e velocità, quindi alla velocità di $v$ chilometri all'ora, con $v>0$, il tempo in ore è $\dfrac{12}{v}$. Tempo e velocità sono in proporzionalità inversa, e a $4$ chilometri all'ora servono $3$ ore.
:::

## Trasformazioni e simmetrie

:::teorema{#trasformazioni titolo="Traslazioni e cambiamenti di scala"}
Una **traslazione** è lo spostamento dell'intero grafico, senza deformazioni. Un cambiamento di scala moltiplica tutte le ordinate, oppure tutte le ascisse, per lo stesso numero. Se $(u,v)$ appartiene al grafico di $f$, cioè $v=f(u)$, allora appartengono ai grafici trasformati i punti seguenti:

- $(u,v+k)$ per $y=f(x)+k$, traslazione verticale di $k$, verso l'alto se $k>0$;
- $(u+h,v)$ per $y=f(x-h)$, traslazione orizzontale di $h$, verso destra se $h>0$;
- $(u,av)$ per $y=af(x)$, in cui le ordinate sono moltiplicate per $a$;
- $\left(\dfrac{u}{b},v\right)$ per $y=f(bx)$, con $b\ne0$, in cui le ascisse sono divise per $b$.

Le operazioni scritte fuori da $f$ cambiano le ordinate e quelle scritte dentro $f$ cambiano le ascisse. La nuova funzione assume infatti il valore $v$ quando l'espressione dentro $f$ vale $u$; per $y=f(x-h)$ si chiede $x-h=u$, cioè $x=u+h$.

Per esempio, siano $f(4)=-2$ e $g(x)=f(x+3)-1$. L'espressione dentro $f$ vale $4$ quando $x+3=4$, cioè per $x=1$. Allora $g(1)=f(4)-1=-2-1=-3$. Al punto $(4,-2)$ del grafico di $f$ corrisponde il punto $(1,-3)$ del grafico di $g$, tre unità più a sinistra e una più in basso. Le due operazioni agiscono su coordinate diverse e si applicano entrambe.
:::

:::esempio{titolo="Una parabola traslata"}
La funzione $f(x)=(x-2)^2+1$ si ottiene da $x^2$ sostituendo $x$ con $x-2$ e sommando $1$. Il grafico di $y=x^2$ viene quindi traslato di $2$ unità verso destra e di $1$ unità verso l'alto. Il vertice $(0,0)$ va nel punto $(2,1)$ e il valore minimo passa da $0$ a $1$.

Ponendo $x=0$ si ottiene $f(0)=(0-2)^2+1=5$, quindi l'intercetta verticale è il punto $(0,5)$. Il valore minimo $1$ è l'ordinata del vertice e il valore $5$ è l'ordinata dell'intercetta; i due valori coincidono soltanto quando il vertice sta sull'asse verticale, come in $y=x^2$.

Nella figura sono segnati il vertice $(0,0)$ di $y=x^2$, il vertice $(2,1)$ e l'intercetta verticale $(0,5)$ di $y=(x-2)^2+1$.

::grafico{f="x^2;(x-2)^2+1" xmin=-2 xmax=5 ymin=-1 ymax=8 punti="0,0;2,1;0,5" titolo="Il vertice e l'intercetta verticale permettono di distinguere le due parabole."}
:::

:::definizione{#parita titolo="Funzioni pari e dispari"}
Le due proprietà seguenti confrontano il valore della funzione in $x$ con il valore nell'opposto $-x$, su un dominio simmetrico rispetto a zero, cioè un dominio che insieme a ogni $x$ contiene anche $-x$.

- Una funzione è **pari** se $f(-x)=f(x)$ per ogni $x$ del dominio, cioè se argomenti opposti hanno lo stesso valore. Il suo grafico è simmetrico rispetto all'asse verticale, cioè se contiene $(x,y)$, contiene anche $(-x,y)$.
- Una funzione è **dispari** se $f(-x)=-f(x)$ per ogni $x$ del dominio, cioè se argomenti opposti hanno valori opposti. Il suo grafico è simmetrico rispetto all'origine, cioè se contiene $(x,y)$, contiene anche $(-x,-y)$.

Per verificare la proprietà si sostituisce $-x$ nella formula. Per $f(x)=x^2+3$ si ha $f(-x)=(-x)^2+3=x^2+3=f(x)$, quindi la funzione è pari. Per $f(x)=x^3-x$ si ha $f(-x)=-x^3+x=-(x^3-x)=-f(x)$, quindi la funzione è dispari. Anche $|x|$ è pari, e $\dfrac1x$ è dispari sul dominio $x\ne0$.

Se una funzione dispari è definita in zero, ponendo $x=0$ si ottiene $f(0)=-f(0)$, cioè $2f(0)=0$, quindi $f(0)=0$.
:::

:::attenzione
La proprietà deve valere per *ogni* $x$ del dominio. Per $f(x)=x^3-x$ si ha $f(1)=0$ e $f(-1)=0$, quindi in $1$ e in $-1$ i valori coincidono. La funzione però non è pari, perché $f(2)=6$ e $f(-2)=-6$.
:::

## Monotonia, estremi e immagine

:::definizione{#monotonia titolo="Crescenza e decrescenza"}
Una funzione è **strettamente crescente** su un intervallo quando, all'aumentare di $x$ in quell'intervallo, aumenta anche $f(x)$, cioè il grafico sale da sinistra verso destra. In formule, per ogni coppia di numeri $a$ e $b$ dell'intervallo, da $a<b$ segue $f(a)<f(b)$. È **strettamente decrescente** quando all'aumentare di $x$ il valore $f(x)$ diminuisce, cioè da $a<b$ segue $f(a)>f(b)$. In entrambi i casi si dice **strettamente monotona** su quell'intervallo.

Se si ammette anche l'uguaglianza, $f(a)\le f(b)$, la funzione è crescente in senso non stretto. Una funzione costante è crescente in senso non stretto e non lo è strettamente. Nel seguito del capitolo «crescente» e «decrescente», senza altre parole, indicano la monotonia stretta.

Per esempio $f(x)=(x-2)^2+1$ è decrescente su $(-\infty,2]$ e crescente su $[2,+\infty)$, perché $(x-2)^2$ è il quadrato della distanza di $x$ da $2$, che diminuisce finché $x$ arriva a $2$ e poi aumenta. I valori sono $f(0)=5$, $f(1)=2$, $f(2)=1$, $f(3)=2$, $f(4)=5$.

La monotonia confronta due valori fra loro e non ne determina il segno. La funzione $x-100$ è crescente anche dove è negativa; per esempio in $x=1$ vale $-99$ e in $x=2$ vale $-98$, che è maggiore di $-99$.
:::

:::definizione{#estremi titolo="Valori massimi e minimi"}
Il **minimo assoluto** di una funzione su un dominio è il più piccolo dei valori che la funzione assume, cioè un numero $m=f(x_0)$ tale che $f(x)\ge m$ per ogni $x$ del dominio. Il numero $x_0$ in cui il minimo è assunto si chiama punto di minimo. Il **massimo assoluto** è il più grande dei valori. Massimi e minimi si chiamano *estremi*.

Per $f(x)=(x-2)^2+1$ su $\mathbb R$ il minimo assoluto è $m=1$ e il punto di minimo è $x_0=2$. Alla domanda «dove è minimo?» la risposta è $x=2$; alla domanda «quanto vale il minimo?» la risposta è $1$.

Gli estremi dipendono dal dominio. La stessa funzione sull'intervallo $[3,5]$ è crescente, perché $[3,5]$ è contenuto in $[2,+\infty)$. Il minimo è quindi assunto nell'estremo sinistro e vale $f(3)=1+1=2$; il massimo è assunto nell'estremo destro e vale $f(5)=9+1=10$. Il vertice non interviene, perché $2$ non appartiene a $[3,5]$. Il grafico sale senza interruzioni dall'ordinata $2$ all'ordinata $10$, quindi la funzione assume tutti i valori intermedi e l'immagine è $[2,10]$.
:::

:::definizione{#estremi-relativi titolo="Estremi relativi e confronto locale"}
Un **massimo relativo** è un valore $f(x_0)$ maggiore o uguale ai valori che la funzione assume negli argomenti del dominio vicini a $x_0$. Un **minimo relativo** è un valore minore o uguale a quelli assunti negli argomenti vicini. Per un estremo relativo il confronto riguarda soltanto una zona attorno a $x_0$; per un estremo assoluto riguarda tutto il dominio.

Per esempio, il grafico di una funzione sia la spezzata, cioè la linea formata da segmenti consecutivi, che unisce nell'ordine i punti $(-2,5)$, $(0,2)$, $(1,4)$ e $(3,1)$. Il valore $4$, assunto in $x=1$, è un massimo relativo, perché il grafico sale fino a $x=1$ e subito dopo scende; il massimo assoluto è invece $5$, assunto in $x=-2$. Il valore $2$, assunto in $x=0$, è un minimo relativo, perché il grafico scende fino a $x=0$ e subito dopo sale; il minimo assoluto è invece $1$, assunto in $x=3$. Un estremo relativo interno al dominio si riconosce confrontando i valori vicini su entrambi i lati; il segno dell'ordinata non interviene.
:::

:::esempio{titolo="Immagine e numero di soluzioni"}
La funzione $f(x)=(x+2)^2-1$ ha per grafico una parabola con vertice $(-2,-1)$. Il quadrato $(x+2)^2$ assume tutti i valori maggiori o uguali a zero, quindi l'immagine è $[-1,+\infty)$.

Le soluzioni dell'equazione $f(x)=k$ sono le ascisse dei punti in cui la retta orizzontale $y=k$ incontra la parabola. L'equazione $(x+2)^2-1=k$ equivale a $(x+2)^2=k+1$.

- Se $k>-1$, il secondo membro è positivo e le soluzioni sono due. Per $k=3$ si ha $(x+2)^2=4$, quindi $x+2=2$ oppure $x+2=-2$, cioè $x=0$ oppure $x=-4$.
- Se $k=-1$, si ha $(x+2)^2=0$ e la soluzione è una sola, $x=-2$, l'ascissa del vertice.
- Se $k<-1$, il secondo membro è negativo, quindi l'equazione non ha soluzioni.

L'equazione ha soluzioni esattamente quando $k$ appartiene all'immagine. Il numero delle soluzioni è il numero di questi punti di incontro, quindi si conta sul grafico senza calcolare ogni volta le radici.
:::

## Esponenziali e modelli di crescita

:::definizione{#esponenziale titolo="Funzione esponenziale"}
Una **funzione esponenziale** ha la variabile $x$ all'esponente: $f(x)=a^x$. Il numero $a$ si chiama **base** e soddisfa $a>0$ e $a\ne1$. Per $a=2$ si ottiene la tabella seguente.

| $x$ | $-2$ | $-1$ | $0$ | $1$ | $2$ | $3$ |
|---|---|---|---|---|---|---|
| $2^x$ | $\dfrac14$ | $\dfrac12$ | $1$ | $2$ | $4$ | $8$ |

Ogni volta che $x$ aumenta di $1$, il valore viene moltiplicato per la base. Un esponente negativo indica il reciproco della potenza con esponente positivo, quindi $2^{-2}=\dfrac1{2^2}=\dfrac14$. Per $a>1$ un esponente negativo dà perciò un valore compreso fra zero e uno, che è positivo.

Per ogni base valgono le proprietà seguenti.

- Il dominio è $\mathbb R$ e l'immagine è $(0,+\infty)$. I valori sono tutti positivi, quindi equazioni come $a^x=0$ e $a^x=-3$ non hanno soluzioni.
- Vale $a^0=1$, quindi il grafico passa per il punto $(0,1)$.
- Se $a>1$ la funzione è strettamente crescente; se $0<a<1$ è strettamente decrescente.
- L'asse orizzontale $y=0$ è un asintoto; per esempio $2^{-10}=\dfrac1{1024}$ è vicino a zero.

Poiché $a^{-x}=\left(\dfrac1a\right)^x$, la funzione di base $\dfrac1a$ assume in $x$ il valore che la funzione di base $a$ assume in $-x$. I due grafici sono perciò simmetrici rispetto all'asse verticale. Nella figura la curva $y=2^x$ sale da sinistra verso destra e la curva $y=2^{-x}=\left(\dfrac12\right)^x$ scende. Le due curve si incontrano nel punto $(0,1)$ e restano sopra l'asse orizzontale.

::grafico{f="2^x;2^(-x)" xmin=-3 xmax=3 ymin=-0.5 ymax=8 titolo="Le basi reciproche producono grafici simmetrici rispetto all'asse verticale."}
:::

:::teorema{#equazioni-esponenziali titolo="Confronto di esponenziali"}
La funzione $a^x$ è strettamente monotona, quindi a esponenti diversi associa valori diversi. Ne segue che $a^u=a^v$ equivale a $u=v$. Per risolvere un'equazione esponenziale si scrivono i due membri come potenze della stessa base e si uguagliano gli esponenti. Nell'equazione $4^x=8$ la base comune è $2$. Si ha $4^x=(2^2)^x=2^{2x}$ e $8=2^3$, quindi l'equazione diventa $2^{2x}=2^3$. Uguagliando gli esponenti si ottiene $2x=3$, cioè $x=\dfrac32$.

Nelle disequazioni il verso dipende dalla base.

- Se $a>1$, la funzione è crescente e $a^u>a^v$ equivale a $u>v$.
- Se $0<a<1$, la funzione è decrescente e $a^u>a^v$ equivale a $u<v$, con il verso invertito. Per esempio da $\left(\dfrac12\right)^x>\dfrac14=\left(\dfrac12\right)^2$ segue $x<2$.

Quando compaiono sia $a^{2x}$ sia $a^x$, si pone $u=a^x$. Allora $a^{2x}=(a^x)^2=u^2$ e l'equazione contiene soltanto $u$, con la condizione $u>0$. Nell'equazione $4^x-5\cdot2^x+4=0$ si pone $u=2^x$ e si ottiene $u^2-5u+4=0$, cioè $(u-1)(u-4)=0$, quindi $u=1$ oppure $u=4$. Da $2^x=1=2^0$ segue $x=0$ e da $2^x=4=2^2$ segue $x=2$.
:::

:::esempio{titolo="Percentuali successive e dimezzamento"}
Una quantità che vale $N_0$ all'inizio e a ogni intervallo di tempo viene moltiplicata per lo stesso numero $r>0$ vale $N_n=N_0r^n$ dopo $n$ intervalli.

Aumentare una quantità del $10\%$ significa moltiplicarla per $1+\dfrac{10}{100}=1{,}1$. Una quantità che vale $200$ e cresce del $10\%$ a ogni intervallo vale $200\cdot1{,}1=220$ dopo il primo intervallo e $220\cdot1{,}1=242$ dopo il secondo, in accordo con $200\cdot1{,}1^2=242$. Il primo aumento è $20$ e il secondo è $22$, perché il secondo è il $10\%$ del valore già aumentato.

Il **tempo di dimezzamento** è l'intervallo di tempo in cui una quantità si riduce alla metà. Si supponga che una massa di $160\,\mathrm g$ si dimezzi ogni $3$ ore. In $t$ ore sono contenuti $\dfrac t3$ intervalli di dimezzamento, e a ogni intervallo la massa viene moltiplicata per $\dfrac12$. Il modello è $M(t)=160\left(\dfrac12\right)^{\frac t3}$, con $t\ge0$ in ore e $M$ in grammi. Dopo $9$ ore l'esponente vale $\dfrac93=3$ e $M(9)=160\cdot\dfrac18=20\,\mathrm g$. L'esponente conta gli intervalli di $3$ ore, quindi il tempo si sostituisce espresso in ore.
:::

## Logaritmi e loro equazioni

:::definizione{#logaritmo titolo="Logaritmo come esponente"}
Il **logaritmo** in base $a$ di un numero $b$ è l'esponente a cui si eleva $a$ per ottenere $b$, e si indica con $\log_a b$. Per esempio $\log_2 8=3$, perché $2^3=8$. In formule, $\log_a b=c$ equivale ad $a^c=b$, e quindi $a^{\log_a b}=b$.

La base soddisfa $a>0$ e $a\ne1$. L'argomento $b$ deve essere positivo, perché le potenze $a^c$ sono tutte positive. Per ogni base valgono $\log_a1=0$, perché $a^0=1$, e $\log_a a=1$, perché $a^1=a$.

Il risultato di un logaritmo è un esponente, quindi è un numero reale qualsiasi, anche negativo. Per calcolare $\log_3\dfrac1{27}$ si scrive $\dfrac1{27}=\dfrac1{3^3}=3^{-3}$, quindi $\log_3\dfrac1{27}=-3$. Con una base maggiore di $1$ il logaritmo è negativo per gli argomenti compresi fra $0$ e $1$.

La funzione logaritmica $y=\log_a x$ ha dominio $(0,+\infty)$ e immagine $\mathbb R$. È la funzione inversa dell'esponenziale con la stessa base; per esempio l'esponenziale associa all'esponente $3$ il valore $2^3=8$, e il logaritmo associa al valore $8$ l'esponente $3$. Come l'esponenziale, è strettamente crescente se $a>1$ e strettamente decrescente se $0<a<1$.

Il simbolo $\ln$ indica il **logaritmo naturale**, cioè il logaritmo che ha per base il numero $e$, il cui valore è circa $2{,}718$; poiché $e>1$, la funzione $\ln x$ è crescente.
:::

:::teorema{#proprieta-logaritmi titolo="Proprietà dei logaritmi"}
Siano $a>0$, $a\ne1$ e $u,v>0$. Il logaritmo di un prodotto è la somma dei logaritmi, il logaritmo di un quoziente è la differenza dei logaritmi, e l'esponente dell'argomento si porta davanti al logaritmo come fattore:
$$
\log_a(uv)=\log_a u+\log_a v,\qquad
\log_a\frac uv=\log_a u-\log_a v,
$$
$$
\log_a(u^r)=r\log_a u.
$$
La proprietà del prodotto deriva dalla regola delle potenze $a^p a^q=a^{p+q}$. Si pone $p=\log_a u$ e $q=\log_a v$, cioè $a^p=u$ e $a^q=v$. Allora $uv=a^{p+q}$, quindi $\log_a(uv)=p+q$. Le altre due proprietà si ottengono allo stesso modo dalle regole del quoziente e della potenza di potenze.

Per esempio $\log_2 6+\log_2\dfrac43=\log_2\left(6\cdot\dfrac43\right)=\log_2 8=3$.

La formula del cambiamento di base esprime un logaritmo di base qualsiasi con i logaritmi naturali: $\log_a b=\dfrac{\ln b}{\ln a}$. Il denominatore è diverso da zero perché $a\ne1$.

La funzione $\ln(x^2)$ è definita per ogni $x\ne0$, perché $x^2>0$. Poiché $x^2=|x|^2$ e $|x|>0$, vale $\ln(x^2)=2\ln|x|$ per ogni $x\ne0$. L'espressione $2\ln x$ è definita soltanto per $x>0$.
:::

:::attenzione
Per il logaritmo di una somma non esiste una proprietà analoga; per esempio $\log_2(4+4)=\log_28=3$, mentre $\log_24+\log_24=2+2=4$.

Quando due logaritmi si riuniscono in uno solo, restano le condizioni di positività dei due argomenti di partenza. Il prodotto $x(x-2)$ è positivo anche per $x=-2$, dove vale $8$, ma in $x=-2$ i logaritmi $\log_2x$ e $\log_2(x-2)$ non sono definiti.
:::

:::esempio{#equazioni-logaritmiche titolo="Equazioni con controllo del dominio"}
Nell'equazione $\log_2x+\log_2(x-2)=3$ i due argomenti devono essere positivi, quindi $x>0$ e $x-2>0$, cioè $x>2$. Per la proprietà del prodotto l'equazione diventa $\log_2\big(x(x-2)\big)=3$ e, per la definizione di logaritmo, $x(x-2)=2^3=8$. Si ottiene $x^2-2x-8=0$, cioè $(x-4)(x+2)=0$, quindi $x=4$ oppure $x=-2$. Soltanto $4$ soddisfa $x>2$, quindi la soluzione è $x=4$. Come verifica, $\log_24+\log_22=2+1=3$.

Nella disequazione $\log_{\frac13}(x-1)>-1$ l'argomento deve essere positivo, quindi $x>1$. Poiché $\left(\dfrac13\right)^{-1}=3$, si ha $-1=\log_{\frac13}3$ e la disequazione diventa $\log_{\frac13}(x-1)>\log_{\frac13}3$. La base è minore di $1$, quindi il logaritmo è decrescente e, passando agli argomenti, il verso si inverte. Si ottiene $x-1<3$, cioè $x<4$. Le due condizioni $x>1$ e $x<4$ valgono insieme, quindi la soluzione è $1<x<4$.
:::

## Composizione e funzione inversa

:::definizione{#composizione titolo="Composizione e suo dominio"}
**Comporre** due funzioni significa applicarle una dopo l'altra, in modo che il valore prodotto dalla prima diventi l'argomento della seconda. La funzione che applica prima $g$ e poi $f$ si indica con $f\circ g$, si legge «$f$ composto $g$» ed è definita da $(f\circ g)(x)=f(g(x))$. Con $f(x)=x^2$ e $g(x)=x+1$, per $x=3$ si ha $g(3)=4$ e $f(4)=16$, quindi $(f\circ g)(3)=16$. Per ogni $x$ si ha $(f\circ g)(x)=(x+1)^2$.

L'ordine conta. Nell'ordine opposto si ha $(g\circ f)(x)=g(x^2)=x^2+1$, e per $x=3$ si ottiene $10$. Le due espressioni sono uguali quando $x^2+2x+1=x^2+1$, cioè soltanto per $x=0$.

Il dominio di $f\circ g$ è formato dagli $x$ del dominio di $g$ per i quali il valore $g(x)$ appartiene al dominio di $f$. Con $f(u)=\sqrt u$ e $g(x)=6-3x$ la funzione composta è $\sqrt{6-3x}$. La funzione $g$ è definita per ogni $x$, mentre $f$ richiede un argomento maggiore o uguale a zero, quindi $6-3x\ge0$, cioè $x\le2$.

Nella somma $f+g$ e nel prodotto $fg$ si calcolano $f(x)$ e $g(x)$ nello stesso argomento $x$ e poi si sommano o si moltiplicano i due valori; sono operazioni diverse dalla composizione. Con $f(x)=x^2$ e $g(x)=x+1$ si ha $(f+g)(3)=9+4=13$, mentre $(f\circ g)(3)=16$.
:::

:::definizione{#inversa titolo="Iniettività e funzione inversa"}
Una funzione è **iniettiva** se argomenti diversi hanno sempre valori diversi. Una funzione strettamente monotona è iniettiva.

Se $f$ è iniettiva, ogni valore $y$ dell'immagine proviene da un solo argomento $x$. La **funzione inversa**, indicata con $f^{-1}$, associa a ogni $y$ dell'immagine di $f$ quell'argomento, cioè $f^{-1}(y)=x$ equivale a $f(x)=y$. Il dominio di $f^{-1}$ è l'immagine di $f$ e l'immagine di $f^{-1}$ è il dominio di $f$.

Per trovare l'inversa si scrive $y=f(x)$ e si ricava $x$. Per $f(x)=4x-1$ si parte da $y=4x-1$, si ottiene $y+1=4x$ e poi $x=\dfrac{y+1}{4}$. Ne segue $f^{-1}(y)=\dfrac{y+1}{4}$. Come verifica, $f(2)=7$ e $f^{-1}(7)=\dfrac{7+1}{4}=2$. La notazione $f^{-1}$ indica la funzione inversa; il reciproco $\dfrac1{f(x)}$ è un'altra operazione. Poiché $f(7)=4\cdot7-1=27$, si ha $\dfrac1{f(7)}=\dfrac1{27}$, mentre $f^{-1}(7)=2$.

Se $(x,y)$ è un punto del grafico di $f$, allora $(y,x)$ è un punto del grafico di $f^{-1}$. Due punti con le coordinate scambiate sono simmetrici rispetto alla retta $y=x$, quindi i grafici di $f$ e di $f^{-1}$ sono simmetrici rispetto a quella retta.
:::

:::esempio{titolo="Restrizione di una funzione non iniettiva"}
La funzione $f(x)=x^2$ su $\mathbb R$ non è iniettiva, perché $f(2)=f(-2)=4$. Per ottenere una funzione che ha l'inversa si **restringe** il dominio, cioè si considera la stessa formula su una parte del dominio in cui la funzione è iniettiva.

- Su $[0,+\infty)$ la funzione $x^2$ è strettamente crescente. Da $y=x^2$ con $x\ge0$ si ricava $x=\sqrt y$, quindi l'inversa è la radice quadrata.
- Su $(-\infty,0]$ è strettamente decrescente. Da $y=x^2$ con $x\le0$ si ricava $x=-\sqrt y$; per esempio $f(-3)=9$ e $-\sqrt9=-3$.

In entrambi i casi l'inversa ha dominio $[0,+\infty)$, che è l'immagine di $x^2$. Il segno davanti alla radice dipende dalla parte del dominio che è stata conservata.

Nella figura sono disegnate le curve $y=x^2$ e $y=\sqrt x$ e la retta $y=x$, con la stessa unità di misura sui due assi. Le due curve sono simmetriche rispetto alla retta; per esempio $(2,4)$ appartiene a $y=x^2$ e $(4,2)$ a $y=\sqrt x$.

::grafico{f="x^2;sqrt(x);x" uguale=1 xmin=0 xmax=4 ymin=0 ymax=4 titolo="Il quadrato sul semiasse positivo e la radice quadrata sono inversi."}
:::
