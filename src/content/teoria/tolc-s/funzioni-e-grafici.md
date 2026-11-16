---
titolo: Funzioni, grafici, esponenziali e logaritmi
sommario: Dominio e immagine, lettura e trasformazione dei grafici, composizione e inversa, modelli esponenziali ed equazioni logaritmiche.
---

## Funzioni, tabelle e grafici

:::definizione{#funzione titolo="Funzione e valore di una funzione"}
Una **funzione** associa a ciascun elemento di un insieme un unico elemento di un altro insieme. Nella scrittura $f:A\to B$, l'insieme $A$ è il **dominio**, cioè l'insieme degli argomenti ammessi, mentre $B$ è il codominio. Per $x\in A$, il simbolo $f(x)$ indica il valore associato a $x$. La lettera $x$ può rappresentare un tempo, una lunghezza oppure un numero senza unità; il significato dipende dal problema.

Per valutare $f(x)=2x^2-1$ in $x=-3$, si sostituisce l'intero argomento alla variabile. Si ottiene $f(-3)=2(-3)^2-1=17$. Il quadrato riguarda anche il segno dell'argomento. L'espressione $f(2x)$ richiede invece di sostituire $2x$ in ogni posizione occupata dalla variabile, quindi vale $2(2x)^2-1=8x^2-1$.
:::

:::definizione{#immagine titolo="Immagine e rappresentazione grafica"}
L'**immagine** di $f$ è l'insieme dei valori effettivamente assunti, cioè $f(A)=\{f(x):x\in A\}$. Il grafico è l'insieme dei punti $(x,f(x))$. Per leggere $f(2)$ si parte dall'ascissa $2$, si raggiunge il grafico verticalmente e si legge l'ordinata corrispondente. Una retta verticale incontra il grafico di una funzione al più una volta, perché a un argomento è associato un solo valore.

La funzione $f:\mathbb R\to\mathbb R$, $f(x)=x^2$, ha dominio e codominio uguali a $\mathbb R$, ma immagine $[0,+\infty)$. Ogni quadrato è non negativo e ogni numero $y\ge0$ si ottiene scegliendo $x=\sqrt y$. Questa seconda osservazione dimostra che nell'immagine ci sono *tutti* i numeri dell'intervallo indicato.
:::

:::esempio{titolo="Informazioni fornite da una tabella"}
La tabella $f(1)=4$, $f(2)=4$, $f(5)=7$ permette di calcolare $f(1)+f(5)=11$ e mostra che $4$ e $7$ appartengono all'immagine. I dati non assegnano $f(3)$, a meno che sia dichiarata una legge che permetta di ricavarlo. Inoltre due argomenti diversi, $1$ e $2$, hanno la stessa immagine. La funzione è quindi ben definita, ma non è iniettiva sul dominio che contiene questi argomenti.

:::

:::esempio{titolo="Lettura di un valore sul grafico"}
Per la funzione $g(x)=2x-1$, diversa dalla funzione della tabella, il punto $(2,3)$ permette di leggere $g(2)=3$.

::grafico{f="2*x-1" xmin=-1 xmax=4 ymin=-3 ymax=7 punti="2,3" segmenti="2,0,2,3;0,3,2,3" titolo="Il punto di ascissa 2 ha ordinata 3."}
:::

:::esempio{#funzioni-a-tratti titolo="Leggere una funzione a tratti"}
Una funzione può usare formule diverse su intervalli diversi, purché ogni argomento riceva un solo valore. Per esempio,
$$
p(x)=\begin{cases}
2x+1,&x<1,\\
3,&x\ge1.
\end{cases}
$$
Per calcolare $p(0)$ si usa il primo tratto e si ottiene $1$; per $p(1)$ si usa il secondo e si ottiene $3$. L'uguaglianza nel vincolo $x\ge1$ stabilisce quale formula vale nel punto di raccordo. Avvicinandosi a $1$ da sinistra, anche $2x+1$ si avvicina a $3$, quindi i tratti si raccordano senza salto. Se il secondo tratto valesse invece $4$, il grafico avrebbe un salto in $1$ e sarebbe ancora il grafico di una funzione. Un tratto orizzontale indica un valore costante, non l'assenza della funzione.
:::

## Dominio e condizioni simultanee

:::definizione{#dominio titolo="Dominio naturale di una formula"}
Quando viene data una formula reale senza altre restrizioni, il suo **dominio naturale** è l'insieme degli argomenti per cui tutte le operazioni scritte sono definite nei reali. Un polinomio ammette ogni numero reale. Una frazione richiede il denominatore diverso da zero. Una radice di indice pari richiede il radicando non negativo; una radice di indice dispari ammette anche radicandi negativi. Un logaritmo richiede l'argomento strettamente positivo.

Le condizioni valgono contemporaneamente, quindi si cerca la loro intersezione. Se il denominatore è una radice di indice pari, il radicando deve essere strettamente positivo: il valore zero renderebbe nullo il denominatore. Se il problema rappresenta il tempo trascorso, alla condizione algebrica può aggiungersi $t\ge0$. Il dominio del modello tiene conto anche di questa informazione.
:::

:::esempio{titolo="Una radice e un denominatore"}
Per $f(x)=\dfrac{\sqrt{x-2}}{x-5}$ occorre risolvere il sistema
$$
\begin{cases}
x-2\ge0,\\
x-5\ne0.
\end{cases}
$$
La prima condizione dà $x\ge2$ e la seconda esclude $5$. Quindi $D=[2,5)\cup(5,+\infty)$. Il valore $2$ è ammesso perché annulla solo il numeratore. Il valore $5$ è escluso anche se la radice è definita. La scelta delle parentesi dipende da questi due controlli separati.
:::

:::esempio{titolo="Condizioni che restringono lo stesso intervallo"}
Per $g(x)=\dfrac{\ln x}{\sqrt{6-x}}$ si richiedono $x>0$ e $6-x>0$, quindi $0<x<6$. Per $h(x)=\ln\left(\dfrac{x-4}{x+2}\right)$ occorre invece che il rapporto sia positivo. I punti che separano i segni sono $-2$ e $4$. Numeratore e denominatore sono entrambi negativi per $x<-2$ ed entrambi positivi per $x>4$, quindi il dominio è $(-\infty,-2)\cup(4,+\infty)$.
:::

:::attenzione
Una semplificazione conserva i valori soltanto nei punti in cui la formula iniziale è definita. La funzione $\dfrac{x^2-4}{x-2}$ coincide con $x+2$ per $x\ne2$, ma il suo dominio continua a escludere $2$. Sul grafico della retta rimane un punto vuoto in $(2,4)$. Se si include quel punto si definisce una funzione diversa.
:::

## Zeri, segno e intersezioni

:::definizione{#zeri-segno titolo="Zeri e segno di una funzione"}
Uno **zero** è un argomento $x_0$ del dominio per cui $f(x_0)=0$. Nel grafico è l'ascissa di un punto sull'asse orizzontale. L'intercetta verticale, se $0$ appartiene al dominio, è invece il punto $(0,f(0))$. La funzione è positiva dove il grafico si trova sopra l'asse orizzontale ed è negativa dove si trova sotto.

Per una frazione, gli zeri sono gli zeri del numeratore che non annullano il denominatore. Ad esempio $\dfrac{x(x-4)}{x-4}$ ha soltanto lo zero $0$, perché $4$ è escluso dal dominio. Il segno dipende dal rapporto dei segni di numeratore e denominatore. Nei quesiti che chiedono l'intero insieme delle soluzioni, un intervallo più piccolo, pur composto da soluzioni, non costituisce la risposta completa.
:::

:::esempio{titolo="Segno di una parabola"}
Per $f(x)=(x+2)(x-1)$ gli zeri sono $-2$ e $1$. A sinistra di $-2$ entrambi i fattori sono negativi e il prodotto è positivo. Tra gli zeri i segni sono opposti, quindi il prodotto è negativo. A destra di $1$ entrambi i fattori sono positivi. Pertanto $f(x)<0$ esattamente per $-2<x<1$. La disequazione $f(x)\le0$ include anche i due zeri.

::grafico{f="(x+2)*(x-1)" xmin=-4 xmax=3 ymin=-3 ymax=7 punti="-2,0;1,0" titolo="Fra i due zeri la parabola si trova sotto l'asse orizzontale."}
:::

:::definizione{#intersezioni titolo="Intersezione di due grafici"}
Un punto comune ai grafici di $f$ e $g$ ha la stessa ascissa e la stessa ordinata. Le ascisse delle intersezioni risolvono quindi $f(x)=g(x)$, nel dominio comune. Con $f(x)=x^2+1$ e $g(x)=4x-2$ si ottiene $x^2-4x+3=0$, quindi $x=1$ oppure $x=3$. Le ordinate sono rispettivamente $2$ e $10$. Se viene chiesto il punto di intersezione, il risultato comprende entrambe le coordinate.
:::

## Famiglie di funzioni elementari

:::definizione{#funzioni-elementari titolo="Retta, parabola e valore assoluto"}
Una funzione affine $f(x)=mx+q$ ha grafico rettilineo. Il numero $m$ è la variazione dell'ordinata per ogni aumento unitario dell'ascissa; $q=f(0)$ è il valore iniziale. Da due punti con ascisse distinte si calcola $m=\dfrac{y_2-y_1}{x_2-x_1}$. La proporzionalità diretta $y=kx$ è il caso particolare con $q=0$.

La parabola $a(x-h)^2+k$, con $a\ne0$, ha vertice $(h,k)$ e asse $x=h$. Se $a>0$, il quadrato rende $k$ il minimo; se $a<0$, $k$ è il massimo. Il valore assoluto soddisfa $|u|=u$ per $u\ge0$ e $|u|=-u$ per $u<0$. Perciò $|x-h|+k$ ha un grafico a due semirette con vertice $(h,k)$. Nella parabola l'incremento dipende da un quadrato; nel valore assoluto dipende dalla distanza dall'ascissa del vertice.
:::

:::definizione{#radici-reciproci titolo="Radici e proporzionalità inversa"}
La funzione $y=\sqrt x$ ha dominio e immagine $[0,+\infty)$ ed è strettamente crescente. La funzione $y=\sqrt[3]x$ ha dominio e immagine $\mathbb R$. Le coordinate $(0,0)$, $(1,1)$ e $(4,2)$ aiutano a riconoscere il grafico della radice quadrata.

La proporzionalità inversa $y=\dfrac{k}{x}$, con $k\ne0$, mantiene costante il prodotto $xy=k$ e richiede $x\ne0$. Per $k>0$, i due rami si trovano nel primo e nel terzo quadrante. Gli assi sono asintoti: la curva si avvicina ad essi senza incontrarli. In $y=\dfrac1{x-h}+k$ gli asintoti diventano $x=h$ e $y=k$. L'asintoto verticale segnala un argomento escluso; quello orizzontale descrive un valore a cui la funzione si avvicina per ascisse di modulo grande.

::grafico{f="1/(x-2)-1" xmin=-3 xmax=7 ymin=-5 ymax=4 asintoti="x=2;y=-1" titolo="La traslazione sposta gli asintoti nelle rette x = 2 e y = -1."}
:::

:::esempio{titolo="Dati e scelta del modello"}
Una quantità vale $6$ all'inizio e aumenta di $4$ unità ogni minuto. Dopo $t$ minuti vale $6+4t$, perché l'aumento assoluto è costante. Se invece raddoppia ogni minuto, dopo $n$ minuti interi vale $6\cdot2^n$, perché è costante il fattore moltiplicativo. Per una distanza fissa di $12$ chilometri, il tempo in ore alla velocità $v>0$ chilometri all'ora è $\dfrac{12}{v}$. Il tipo di relazione deriva dai dati, prima del calcolo numerico.
:::

## Trasformazioni e simmetrie

:::teorema{#trasformazioni titolo="Traslazioni e cambiamenti di scala"}
Se $(u,v)$ appartiene al grafico di $f$, allora appartengono ai grafici trasformati i punti seguenti:

- $(u,v+k)$ per $y=f(x)+k$;
- $(u+h,v)$ per $y=f(x-h)$;
- $(u,av)$ per $y=af(x)$;
- $\left(\dfrac{u}{b},v\right)$ per $y=f(bx)$, con $b\ne0$.

La trasformazione orizzontale si ricava imponendo che l'argomento interno sia ancora $u$. Ad esempio, se $f(4)=-2$, per $g(x)=f(x+3)-1$ si risolve $x+3=4$. Ne segue $x=1$ e $g(1)=-3$. Le due operazioni agiscono su coordinate diverse e vanno applicate entrambe.
:::

:::esempio{titolo="Una parabola traslata"}
Il grafico di $y=(x-2)^2+1$ deriva da $y=x^2$ con una traslazione di due unità a destra e una verso l'alto. Il vertice è $(2,1)$. Il valore minimo è $1$, mentre l'intercetta verticale vale $f(0)=5$. Il valore minimo e l'intercetta verticale sono informazioni differenti e coincidono soltanto in casi particolari.

::grafico{f="x^2;(x-2)^2+1" xmin=-2 xmax=5 ymin=-1 ymax=8 punti="0,0;2,1;0,5" titolo="Il vertice e l'intercetta verticale permettono di distinguere le due parabole."}
:::

:::definizione{#parita titolo="Funzioni pari e dispari"}
Su un dominio simmetrico rispetto a zero, una funzione è **pari** se $f(-x)=f(x)$ per ogni argomento ammesso ed è **dispari** se $f(-x)=-f(x)$. Una funzione pari ha il grafico simmetrico rispetto all'asse verticale; una funzione dispari ha il grafico simmetrico rispetto all'origine. Sono pari $x^2+3$ e $|x|$; sono dispari $x^3-x$ e $\dfrac1x$ sul rispettivo dominio.

Due soli valori opposti con la stessa immagine sono compatibili con la parità, ma non la dimostrano per l'intero dominio. La proprietà deve valere per ogni argomento. Se una funzione dispari è definita in zero, allora $f(0)=-f(0)$, perciò necessariamente $f(0)=0$.
:::

## Monotonia, estremi e immagine

:::definizione{#monotonia titolo="Crescenza e decrescenza"}
Una funzione è **strettamente crescente** su un intervallo se $a<b$ implica $f(a)<f(b)$ per ogni coppia di argomenti dell'intervallo. È strettamente decrescente se il confronto fra le immagini è inverso. Nella crescenza non stretta è ammessa l'uguaglianza $f(a)\le f(b)$. Una funzione costante soddisfa quindi la crescenza non stretta, ma non quella stretta.

La monotonia confronta due ordinate e non ne determina il segno. La funzione $x-100$ è crescente anche per gli argomenti per cui assume valori negativi. Per $f(x)=(x-2)^2+1$, la distanza da $2$ diminuisce quando $x$ cresce fino a $2$ e aumenta quando $x$ supera $2$. La parabola è dunque decrescente su $(-\infty,2]$ e crescente su $[2,+\infty)$.
:::

:::definizione{#estremi titolo="Valori massimi e minimi"}
Un minimo assoluto è un valore $m=f(x_0)$ tale che $f(x)\ge m$ su tutto il dominio considerato. Il punto $x_0$ è un argomento in cui il minimo viene raggiunto. Distinguere $x_0$ da $m$ permette di rispondere correttamente a richieste come «dove è minimo?» e «quanto vale il minimo?».

Se il dominio è ristretto, cambiano i valori disponibili. La funzione $(x-2)^2+1$ su $[3,5]$ è crescente e assume il minimo $2$ in $x=3$ e il massimo $10$ in $x=5$. Il vertice non appartiene all'intervallo assegnato. L'immagine è $[2,10]$ perché su quell'intervallo la funzione assume anche tutti i valori intermedi.
:::

:::definizione{#estremi-relativi titolo="Estremi relativi e confronto locale"}
Un **massimo relativo** confronta il valore della funzione con quelli assunti negli argomenti sufficientemente vicini: il punto può essere il più alto in quella zona senza esserlo sull'intero dominio. Per un minimo relativo il confronto è opposto. Un estremo assoluto richiede invece un confronto con tutti gli argomenti ammessi.

Nella spezzata che unisce $(-2,5)$, $(0,2)$, $(1,4)$ e $(3,1)$, il punto $(1,4)$ è un massimo relativo: il grafico sale fino a quel punto e subito dopo scende. Non è il massimo assoluto, perché nell'estremo sinistro la funzione vale $5>4$. Il punto $(0,2)$ è invece un minimo relativo, ma il valore $1$ raggiunto in $x=3$ è più basso. Per individuare un estremo relativo interno si confrontano entrambi i lati; il solo segno positivo o negativo dell'ordinata non decide il tipo di estremo.
:::

:::esempio{titolo="Immagine e numero di soluzioni"}
Per $f(x)=(x+2)^2-1$ l'immagine è $[-1,+\infty)$. L'equazione $f(x)=k$ diventa $(x+2)^2=k+1$. Ha due soluzioni distinte per $k>-1$, una sola per $k=-1$ e nessuna per $k<-1$. Il grafico collega questi casi al numero di intersezioni con una retta orizzontale. Le soluzioni si possono quindi contare senza calcolare ogni volta tutte le radici.
:::

## Esponenziali e modelli di crescita

:::definizione{#esponenziale titolo="Funzione esponenziale"}
Per $a>0$, $a\ne1$, la funzione $f(x)=a^x$ è definita per ogni reale, è sempre positiva e ha immagine $(0,+\infty)$. Passa per $(0,1)$, perché $a^0=1$. È strettamente crescente per $a>1$ e strettamente decrescente per $0<a<1$. La retta $y=0$ è un asintoto orizzontale, quindi zero non è un valore assunto.

La relazione $a^{-x}=\left(\dfrac1a\right)^x$ mostra che le esponenziali con basi reciproche sono simmetriche rispetto all'asse verticale. Per $a>1$, un esponente negativo dà un valore compreso fra zero e uno; non produce un valore negativo.

::grafico{f="2^x;2^(-x)" xmin=-3 xmax=3 ymin=-0.5 ymax=8 titolo="Le basi reciproche producono grafici simmetrici rispetto all'asse verticale."}
:::

:::teorema{#equazioni-esponenziali titolo="Confronto di esponenziali"}
Poiché $a^x$ è strettamente monotona, $a^u=a^v$ equivale a $u=v$. Per le disequazioni, il confronto degli esponenti mantiene il verso se $a>1$ e lo inverte se $0<a<1$. Ad esempio $4^x=8$ si riscrive $2^{2x}=2^3$, quindi $x=\dfrac32$. Da $\left(\dfrac12\right)^x>\dfrac14=\left(\dfrac12\right)^2$ segue invece $x<2$.

Quando compaiono $a^{2x}$ e $a^x$, la sostituzione $u=a^x$ riduce il problema a un'equazione in $u$, con il vincolo $u>0$. Per $4^x-5\cdot2^x+4=0$ si ottiene $u^2-5u+4=0$, quindi $u=1$ oppure $u=4$. Le soluzioni iniziali sono $x=0$ e $x=2$.
:::

:::esempio{titolo="Percentuali successive e dimezzamento"}
Una quantità iniziale $N_0$ moltiplicata per lo stesso fattore $r>0$ a ogni intervallo segue $N_n=N_0r^n$. Una crescita del $10\%$ corrisponde a $r=1{,}1$, quindi $200$ diventa $200\cdot1{,}1^2=242$ dopo due intervalli. La seconda percentuale si applica al valore già aumentato.

Assumendo un decadimento esponenziale con dimezzamento ogni tre ore, il modello continuo è $M(t)=160\left(\dfrac12\right)^{\frac t3}$, con $t\ge0$ in ore e massa in grammi. Dopo nove ore sono trascorsi tre intervalli e restano $20\,\mathrm g$. L'esponente conta gli intervalli, quindi il tempo deve essere espresso nell'unità usata dal modello.
:::

## Logaritmi e loro equazioni

:::definizione{#logaritmo titolo="Logaritmo come esponente"}
Per $a>0$, $a\ne1$ e $b>0$, il numero $\log_a b$ è l'esponente che soddisfa $a^{\log_a b}=b$. Dunque $\log_a b=c$ equivale ad $a^c=b$. In particolare $\log_a1=0$ e $\log_a a=1$. La funzione logaritmica è l'inversa dell'esponenziale, con dominio $(0,+\infty)$ e immagine $\mathbb R$.

Il simbolo $\ln$ indica il logaritmo naturale, in base $e>1$. Per $\log_3\dfrac1{27}$ si osserva $\dfrac1{27}=3^{-3}$, quindi il risultato è $-3$. Il logaritmo può essere negativo anche se il suo argomento deve essere positivo. Per una base maggiore di uno è negativo quando l'argomento è compreso fra zero e uno.
:::

:::teorema{#proprieta-logaritmi titolo="Proprietà dei logaritmi"}
Per una base ammissibile e per $u,v>0$ valgono
$$
\log_a(uv)=\log_a u+\log_a v,\qquad
\log_a\frac uv=\log_a u-\log_a v,
$$
$$
\log_a(u^r)=r\log_a u.
$$
La proprietà del prodotto deriva dalla regola $a^p a^q=a^{p+q}$, ponendo $p=\log_a u$ e $q=\log_a v$. Le altre proprietà derivano allo stesso modo dal quoziente e dalla potenza. Per cambiare base si usa $\log_a b=\dfrac{\ln b}{\ln a}$; il denominatore è non nullo perché $a\ne1$.

Ad esempio $\log_2 6+\log_2\dfrac43=\log_2 8=3$. In $\ln(x^2)$ l'argomento è positivo per $x\ne0$ e la riscrittura valida sull'intero dominio è $2\ln|x|$. La forma $2\ln x$ sarebbe definita soltanto per $x>0$.
:::

:::attenzione
Il logaritmo di una somma non si separa nei logaritmi degli addendi. Con $u=v=1$ si avrebbe $\ln(u+v)=\ln2$, mentre $\ln u+\ln v=0$. Inoltre, quando si uniscono due logaritmi, restano le condizioni di positività dei singoli argomenti: un prodotto positivo può avere entrambi i fattori negativi.
:::

:::esempio{#equazioni-logaritmiche titolo="Equazioni con controllo del dominio"}
L'equazione $\log_2x+\log_2(x-2)=3$ richiede $x>2$. Unendo i logaritmi si ottiene $x(x-2)=8$, quindi $(x-4)(x+2)=0$. Fra i valori $4$ e $-2$, soltanto $4$ appartiene al dominio iniziale.

La disequazione $\log_{\frac13}(x-1)>-1$ richiede $x>1$. La base è minore di uno, quindi il confronto fra gli argomenti è $x-1<3$. L'intersezione delle due condizioni dà $1<x<4$. Il verso nasce dalla decrescenza del logaritmo e la positività dell'argomento rimane una condizione separata.
:::

## Composizione e funzione inversa

:::definizione{#composizione titolo="Composizione e suo dominio"}
La composizione $(f\circ g)(x)=f(g(x))$ applica prima $g$ e poi $f$. Il dominio contiene gli $x$ per cui $g(x)$ è definita e il valore ottenuto appartiene al dominio di $f$. Se $f(u)=\sqrt u$ e $g(x)=6-3x$, si ottiene $\sqrt{6-3x}$ con $x\le2$.

L'ordine conta. Con $f(x)=x^2$ e $g(x)=x+1$ si ha $(f\circ g)(x)=(x+1)^2$, mentre $(g\circ f)(x)=x^2+1$. Le espressioni coincidono in $x=0$, ma differiscono per gli altri argomenti. La somma $f+g$ e il prodotto $fg$ operano invece sui due valori calcolati alla stessa ascissa e non sono composizioni.
:::

:::definizione{#inversa titolo="Iniettività e funzione inversa"}
Una funzione è **iniettiva** se argomenti diversi hanno immagini diverse. In tal caso ciascun valore dell'immagine individua un solo argomento di partenza, e l'inversa $f^{-1}$ restituisce quell'argomento. Dominio e immagine si scambiano. Sul grafico le coordinate si scambiano, quindi i due grafici sono simmetrici rispetto alla retta $y=x$.

Per $f(x)=4x-1$, dalla relazione $y=4x-1$ si ricava $x=\dfrac{y+1}{4}$. Ne segue $f^{-1}(y)=\dfrac{y+1}{4}$. La notazione $f^{-1}$ indica l'inversa della funzione; il reciproco $\dfrac1{f(x)}$ è un'altra operazione.
:::

:::esempio{titolo="Restrizione di una funzione non iniettiva"}
Il quadrato su $\mathbb R$ non è iniettivo, perché $f(2)=f(-2)=4$. Sul dominio $[0,+\infty)$ è invece strettamente crescente e ha inversa $\sqrt x$. Se si restringe il dominio a $(-\infty,0]$, l'inversa diventa $-\sqrt x$, sempre con dominio $[0,+\infty)$. La scelta del segno dipende dal ramo che è stato conservato.

::grafico{f="x^2;sqrt(x);x" uguale=1 xmin=0 xmax=4 ymin=0 ymax=4 titolo="Il quadrato sul semiasse positivo e la radice quadrata sono inversi."}
:::
