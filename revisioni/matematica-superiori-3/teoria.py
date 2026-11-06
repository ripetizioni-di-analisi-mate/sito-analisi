"""Testi originali del corso; sezioni e ancore usate dalle schede."""
CHAPTERS = [
 ('equazioni-e-disequazioni','Equazioni, disequazioni e sistemi','Equazioni e disequazioni'),
 ('valore-assoluto-e-irrazionali','Valore assoluto ed equazioni irrazionali','Valore assoluto e radicali'),
 ('funzioni','Funzioni, dominio e trasformazioni dei grafici','Funzioni'),
 ('piano-cartesiano-e-retta','Piano cartesiano e retta','Piano cartesiano e retta'),
 ('parabola','Parabola e problemi di secondo grado','Parabola'),
 ('circonferenza','Circonferenza, rette e tangenti','Circonferenza'),
 ('ellisse','Ellisse','Ellisse'),
 ('iperbole','Iperbole e funzione omografica','Iperbole'),
 ('trasformazioni-e-coniche','Trasformazioni e problemi sulle coniche','Trasformazioni e coniche'),
 ('esponenziali','Potenze e funzioni esponenziali','Esponenziali'),
 ('logaritmi','Logaritmi, equazioni e disequazioni','Logaritmi'),
 ('statistica','Statistica descrittiva e dati a due variabili','Statistica'),
]

THEORY = {}
THEORY['equazioni-e-disequazioni'] = r'''
## Equazioni e condizioni di esistenza

:::definizione{#equazioni titolo="Insieme delle soluzioni"}
Risolvere un'equazione significa trovare tutti i valori reali che rendono uguali i due membri e per cui le espressioni sono definite. Questi valori formano l'**insieme delle soluzioni**. Per $x^2-5x+6=0$, la scomposizione $(x-2)(x-3)=0$ dà $S=\{2,3\}$. In un'equazione fratta il denominatore deve essere diverso da zero prima di qualunque semplificazione.
:::

## Secondo grado e discriminante

:::teorema{#secondo-grado titolo="Formula risolutiva"}
Per $ax^2+bx+c=0$, con $a\neq0$, si pone $\Delta=b^2-4ac$. Se $\Delta>0$, le radici sono $x_{1,2}=\dfrac{-b\pm\sqrt\Delta}{2a}$; se $\Delta=0$, c'è una radice doppia $-\dfrac b{2a}$; se $\Delta<0$, non ci sono soluzioni reali. Si ottiene la formula completando il quadrato: $(2ax+b)^2=\Delta$. Per $x^2-4x+4=0$, $\Delta=0$ e $x=2$.
:::

## Segno di un prodotto

:::teorema{#prodotti titolo="Tabella dei segni"}
Il prodotto di fattori reali è positivo quando il numero di fattori negativi è pari. Per $(x-1)(x-4)>0$, i fattori hanno lo stesso segno se $x<1$ oppure $x>4$. La soluzione è $(-\infty,1)\cup(4,+\infty)$. Gli zeri entrano nella soluzione solo se il confronto ammette l'uguaglianza. Una radice di molteplicità pari non cambia il segno del polinomio.
:::

## Disequazioni quadratiche

:::teorema{#disequazioni titolo="Segno del trinomio"}
Se $a>0$ e le radici reali distinte sono $r<s$, $a(x-r)(x-s)$ è negativo per $r<x<s$ e positivo all'esterno. Se $a<0$, i segni si invertono. Per $x^2-5x+6\leq0$ si ottiene $[2,3]$. Se il discriminante è negativo, il trinomio mantiene il segno di $a$ per ogni $x$ reale.
:::

## Frazioni algebriche

:::teorema{#fratte titolo="Segno del quoziente"}
Per risolvere $\dfrac{N(x)}{D(x)}\geq0$ si studiano separatamente i segni di numeratore e denominatore. Gli zeri di $D$ restano esclusi. Per $\dfrac{x-1}{x-3}\geq0$ la soluzione è $(-\infty,1]\cup(3,+\infty)$. Moltiplicare direttamente per $x-3$ richiederebbe conoscerne il segno, perché un fattore negativo cambia il verso della disequazione.
:::

## Sistemi di disequazioni

:::definizione{#sistemi titolo="Intersezione delle soluzioni"}
Un sistema richiede che tutte le sue condizioni siano soddisfatte insieme, quindi le soluzioni si intersecano. Il sistema $\begin{cases}(x-1)(x-5)\leq0,\\x>2\end{cases}$ dà $[1,5]\cap(2,+\infty)=(2,5]$. Una disgiunzione, espressa dalla parola «oppure», richiede invece l'unione degli insiemi. Questa distinzione serve anche nel calcolo dei domini.
:::

## Equazioni con parametro

:::teorema{#parametri titolo="Distinguere i casi prima di dividere"}
Per $(k-1)x=2$, se $k\neq1$ la soluzione è $x=\dfrac2{k-1}$; se $k=1$, l'equazione diventa $0=2$ e non ha soluzioni. Per $(k-1)x=0$, invece, $k=1$ dà ogni numero reale. In un'equazione quadratica con parametro si controlla prima che il coefficiente di $x^2$ sia diverso da zero e poi il segno di $\Delta$.
:::

## Problemi e controllo del risultato

:::esempio{#problemi titolo="Dimensioni di un rettangolo"}
Un rettangolo ha lati $x$ e $x+3$ e area $40$. Poiché le lunghezze sono positive, si richiede $x>0$. L'equazione $x(x+3)=40$ diventa $(x-5)(x+8)=0$. I candidati sono $5$ e $-8$, ma solo $5$ soddisfa la condizione geometrica. I lati sono $5$ e $8$ e il prodotto vale $40$. Il controllo usa sia l'equazione sia il significato delle incognite.
:::
'''

THEORY['valore-assoluto-e-irrazionali'] = r'''
## Distanza sulla retta

:::definizione{#assoluto titolo="Valore assoluto"}
Il **valore assoluto** $|u|$ è $u$ se $u\geq0$ e $-u$ se $u<0$. È sempre non negativo. La quantità $|x-a|$ misura la distanza tra $x$ e $a$ sulla retta reale. Per esempio $|x-2|=3$ individua $x=-1$ e $x=5$, entrambi a distanza $3$ da $2$.
:::

## Equazioni con valore assoluto

:::teorema{#equazioni titolo="Due possibilità per la distanza"}
Per $r>0$, $|f(x)|=r$ equivale a $f(x)=r$ oppure $f(x)=-r$. Se $r=0$ resta $f(x)=0$; se $r<0$ non ci sono soluzioni. Per $|2x-1|=5$, i due casi danno $x=3$ e $x=-2$. Entrambi vanno sostituiti nella traccia iniziale quando altre espressioni impongono condizioni di esistenza.
:::

## Disequazioni interne

:::teorema{#interne titolo="Distanza minore di un raggio"}
Per $r>0$, $|f(x)|\leq r$ equivale a $-r\leq f(x)\leq r$. Si tratta di due condizioni simultanee. Per $|x-2|<3$ si ottiene $-3<x-2<3$, quindi $-1<x<5$. Con $\leq$ si includono gli estremi. Il grafico di $|x-2|$ permette di leggere gli stessi intervalli sotto la retta $y=3$.

::grafico{f="abs(x-2);3" xmin=-3 xmax=7 ymin=-1 ymax=6 titolo="Il grafico di $|x-2|$ incontra $y=3$ in $x=-1$ e $x=5$"}
:::

## Disequazioni esterne

:::teorema{#esterne titolo="Distanza maggiore di un raggio"}
Per $r>0$, $|f(x)|\geq r$ equivale a $f(x)\leq-r$ oppure $f(x)\geq r$. Per $|x+1|\geq2$ si ottiene $x\leq-3$ oppure $x\geq1$. La soluzione è l'unione dei due intervalli. Se il secondo membro è negativo, ogni valore del dominio soddisfa $|f(x)|>r$.
:::

## Radicali e dominio

:::definizione{#radicali titolo="Radice quadrata reale"}
Per $u\geq0$, $\sqrt u$ è l'unico numero non negativo il cui quadrato vale $u$. Quindi $\sqrt{x^2}=|x|$. In $\dfrac1{\sqrt{x-2}}$ il radicando deve essere strettamente positivo, perché la radice sta al denominatore: il dominio è $x>2$. Per $\sqrt{x-2}$ è invece ammesso anche $x=2$.
:::

## Equazioni con una radice

:::teorema{#irrazionali titolo="Elevamento al quadrato equivalente"}
L'equazione $\sqrt{f(x)}=g(x)$ equivale al sistema $\begin{cases}g(x)\geq0,\\f(x)=g(x)^2.\end{cases}$ La seconda condizione rende già non negativo $f(x)$. Per $\sqrt{x+2}=x$, si richiede $x\geq0$ e si risolve $x+2=x^2$. I candidati sono $2$ e $-1$, quindi rimane solo $2$.
:::

## Confronti con una radice

:::teorema{#confronti titolo="Confrontare quantità non negative"}
Per $c\geq0$, $\sqrt{f(x)}\leq c$ equivale a $0\leq f(x)\leq c^2$. Per esempio $\sqrt{x+1}\leq3$ dà $-1\leq x\leq8$. Se il secondo membro dipende da $x$, si distingue il suo segno prima di elevare al quadrato. Per $\sqrt{x+1}>x$, tutti i punti del dominio con $x<0$ soddisfano già il confronto.
:::

## Espressioni definite a tratti

:::esempio{#tratti titolo="Una somma di distanze"}
Per risolvere $|x-1|+|x-4|=5$ si separano gli intervalli $x<1$, $1\leq x\leq4$, $x>4$. Nel primo si ottiene $5-2x=5$, quindi $x=0$; nel secondo la somma vale $3$; nel terzo vale $2x-5$, quindi $x=5$. Le soluzioni $0$ e $5$ appartengono agli intervalli usati e soddisfano la traccia.
:::
'''

THEORY['funzioni'] = r'''
## Una legge tra due insiemi

:::definizione{#valori titolo="Funzione e immagine di un numero"}
Una **funzione** $f:A\to B$ associa a ogni elemento di $A$ un solo elemento di $B$. $A$ è il dominio, $B$ il codominio. L'immagine $f(A)$ contiene i valori effettivamente assunti. Se $f(x)=x^2$ su $\mathbb R$, $f(-3)=9$ e l'immagine è $[0,+\infty)$. Conoscere solo la formula non determina il codominio scelto.
:::

## Dominio di una formula

:::teorema{#dominio titolo="Condizioni da imporre insieme"}
Nel dominio reale, i denominatori sono diversi da zero, i radicandi delle radici pari sono non negativi e gli argomenti dei logaritmi sono positivi. Per $f(x)=\dfrac{\sqrt{x-1}}{x-3}$ il sistema è $\begin{cases}x\geq1,\\x\neq3,\end{cases}$ quindi $D=[1,3)\cup(3,+\infty)$. Le condizioni si riferiscono alla formula iniziale anche quando un fattore si semplifica.
:::

## Zeri e segno

:::definizione{#zeri titolo="Intersezioni con gli assi"}
Gli **zeri** risolvono $f(x)=0$ nel dominio e individuano le intersezioni con l'asse $x$. L'intersezione con l'asse $y$ è $(0,f(0))$, se $0$ appartiene al dominio. Per $f(x)=\dfrac{x-2}{x+1}$, lo zero è $2$, $f(0)=-2$ e il segno è positivo per $x<-1$ oppure $x>2$. Il punto $-1$ resta escluso.
:::

## Simmetrie

:::definizione{#simmetrie titolo="Funzioni pari e dispari"}
Su un dominio simmetrico rispetto a $0$, $f$ è **pari** se $f(-x)=f(x)$ e **dispari** se $f(-x)=-f(x)$. I grafici hanno rispettivamente simmetria rispetto all'asse $y$ e all'origine. $x^2+1$ è pari, $x^3-x$ è dispari. La funzione $x^2+x$ non soddisfa nessuna delle due identità. Il controllo si fa per tutti i punti del dominio.
:::

## Composizione

:::definizione{#composizione titolo="Applicare due leggi in successione"}
La composta $(g\circ f)(x)=g(f(x))$ applica prima $f$, poi $g$. Il suo dominio contiene i punti $x\in D_f$ per cui $f(x)\in D_g$. Se $f(x)=x-1$ e $g(x)=\sqrt x$, allora $(g\circ f)(x)=\sqrt{x-1}$ con $x\geq1$; $(f\circ g)(x)=\sqrt x-1$ ha invece dominio $x\geq0$.
:::

## Funzione inversa

:::teorema{#inversa titolo="Invertire una corrispondenza"}
Una funzione ammette inversa dal suo insieme immagine al dominio se è iniettiva, cioè se valori distinti del dominio hanno immagini distinte. Per $f(x)=2x+3$, dall'equazione $y=2x+3$ si ricava $x=\dfrac{y-3}{2}$, quindi $f^{-1}(x)=\dfrac{x-3}{2}$. La funzione $x^2$ su $\mathbb R$ non è iniettiva; ristretta a $[0,+\infty)$ ha inversa $\sqrt x$.
:::

## Traslazioni del grafico

:::teorema{#traslazioni titolo="Spostamenti orizzontali e verticali"}
Il grafico di $y=f(x-h)+k$ si ottiene spostando quello di $f$ di $h$ orizzontalmente e di $k$ verticalmente. Ogni punto $(u,f(u))$ diventa $(u+h,f(u)+k)$. Per $y=(x-2)^2+1$, il vertice di $y=x^2$ passa da $(0,0)$ a $(2,1)$. Il segno dentro l'argomento si legge dalla sostituzione $u=x-h$.

::grafico{f="x^2;(x-2)^2+1" xmin=-3 xmax=5 ymin=-1 ymax=10 punti="0,0;2,1" titolo="La traslazione porta il vertice da $(0,0)$ a $(2,1)$"}
:::

## Immagine e monotonia

:::definizione{#immagine titolo="Crescenza e valori assunti"}
Una funzione è strettamente crescente su un intervallo se $x_1<x_2$ implica $f(x_1)<f(x_2)$. È strettamente decrescente se il confronto delle immagini si inverte. Per $f(x)=(x-h)^2+k$, con coefficiente del quadrato positivo, il minimo è $k$ e l'immagine è $[k,+\infty)$. Il grafico decresce fino a $h$ e cresce dopo $h$; non occorre usare le derivate per queste proprietà.
:::
'''

THEORY['piano-cartesiano-e-retta'] = r'''
## Coordinate e distanze

:::teorema{#distanza titolo="Distanza tra due punti"}
Per $A(x_1,y_1)$ e $B(x_2,y_2)$, la distanza è $AB=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$. Le differenze delle coordinate sono i cateti di un triangolo rettangolo, quindi la formula segue da Pitagora. Tra $(1,2)$ e $(4,6)$ si ottiene $\sqrt{9+16}=5$. La distanza è nulla solo se i due punti coincidono.
:::

## Punto medio

:::teorema{#medio titolo="Media delle coordinate"}
Il punto medio di $AB$ è $M\left(\dfrac{x_1+x_2}{2},\dfrac{y_1+y_2}{2}\right)$. Per $A(-2,1)$ e $B(4,5)$ si ha $M(1,3)$. Se si conoscono $A$ e $M$, si ricava $B$ da $x_2=2x_M-x_1$ e $y_2=2y_M-y_1$. La formula descrive anche la simmetria centrale di centro $M$.
:::

## Equazioni della retta

:::definizione{#equazione titolo="Forma implicita ed esplicita"}
Una retta ha equazione $ax+by+c=0$, con $(a,b)\neq(0,0)$. Se $b\neq0$, si scrive $y=mx+q$, dove $m=-\dfrac ab$ è il coefficiente angolare e $q=-\dfrac cb$ è l'ordinata all'origine. Le rette verticali hanno equazione $x=k$ e non ammettono la forma $y=mx+q$. Per una retta orizzontale, $m=0$.
:::

## Una retta da due punti

:::teorema{#due-punti titolo="Coefficiente angolare"}
Se $x_1\neq x_2$, la retta per $A$ e $B$ ha $m=\dfrac{y_2-y_1}{x_2-x_1}$ e si scrive $y-y_1=m(x-x_1)$. Per $A(1,2)$, $B(3,6)$, si trova $m=2$ e $y=2x$. Se $x_1=x_2$ e i punti sono distinti, la retta è verticale. Se i punti coincidono, non determinano una retta unica.
:::

## Parallelismo

:::teorema{#parallele titolo="Stessa direzione"}
Due rette non verticali sono parallele se hanno lo stesso coefficiente angolare. Con $q$ diverso sono distinte; con lo stesso $q$ coincidono. La parallela a $y=3x-2$ passante per $(1,4)$ è $y-4=3(x-1)$, quindi $y=3x+1$. Tutte le rette verticali sono parallele tra loro.
:::

## Perpendicolarità

:::teorema{#perpendicolari titolo="Prodotto dei coefficienti angolari"}
Per due rette non verticali, la perpendicolarità equivale a $m_1m_2=-1$. La perpendicolare a $y=2x+1$ per l'origine è $y=-\dfrac12x$. Una retta verticale è perpendicolare a ogni orizzontale. Per le forme implicite $a_1x+b_1y+c_1=0$ e $a_2x+b_2y+c_2=0$, il criterio è $a_1a_2+b_1b_2=0$.
:::

## Intersezione di rette

:::teorema{#intersezioni titolo="Sistema delle due equazioni"}
Il punto comune a due rette soddisfa entrambe le equazioni. Per $y=2x+1$ e $y=-x+4$, si uguagliano i secondi membri: $3x=3$, quindi $x=1$ e $y=3$. Rette parallele distinte danno un sistema impossibile; rette coincidenti danno infinite soluzioni. Il risultato si controlla sostituendo entrambe le coordinate nelle due equazioni.

::grafico{f="2*x+1;-x+4" xmin=-2 xmax=4 ymin=-3 ymax=8 punti="1,3,pieno,P" titolo="Le due rette si intersecano in $P(1,3)$"}
:::

## Distanza punto-retta

:::teorema{#punto-retta titolo="Distanza perpendicolare"}
La distanza di $P(x_0,y_0)$ da $ax+by+c=0$ è $d=\dfrac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}$. La formula è invariata se si moltiplica l'equazione della retta per un numero non nullo. Per $P(0,0)$ e $3x+4y-10=0$, si trova $d=2$. Questa distanza servirà per riconoscere le rette tangenti a una circonferenza.
:::
'''

THEORY['parabola'] = r'''
## Luogo geometrico

:::definizione{#fuoco titolo="Fuoco e direttrice"}
La **parabola** è il luogo dei punti equidistanti da un punto, il fuoco, e da una retta, la direttrice, che non contiene il fuoco. Per $(x-h)^2=4p(y-k)$, con $p\neq0$, il vertice è $(h,k)$, il fuoco $(h,k+p)$ e la direttrice $y=k-p$. Il segno di $p$ determina l'apertura verso l'alto o verso il basso.
:::

## Forma con asse verticale

:::teorema{#vertice titolo="Forma del vertice"}
Per $y=ax^2+bx+c$, $a\neq0$, il vertice è $V\left(-\dfrac b{2a},-\dfrac\Delta{4a}\right)$ e l'asse è $x=-\dfrac b{2a}$. Completando il quadrato si ottiene $y=a(x-h)^2+k$. Per $y=x^2-4x+1$, $V=(2,-3)$ e $y=(x-2)^2-3$. Inoltre $p=\dfrac1{4a}$ collega questa forma al luogo geometrico.
:::

## Intersezioni e segno

:::teorema{#zeri titolo="Intersezioni con gli assi"}
L'intersezione con l'asse $y$ è $(0,c)$. Gli zeri risolvono $ax^2+bx+c=0$, quindi dipendono dal discriminante. Per $y=x^2-4x+3$, gli zeri sono $1$ e $3$, il grafico sta sotto l'asse $x$ per $1<x<3$ e sopra all'esterno.

::grafico{f="x^2-4*x+3" xmin=-1 xmax=5 ymin=-2 ymax=8 punti="1,0;3,0;2,-1,pieno,V" titolo="Il vertice è $V(2,-1)$ e gli zeri sono $1$ e $3$"}
:::

## Determinare l'equazione

:::teorema{#equazione titolo="Vertice e punto assegnati"}
Con vertice $(h,k)$ si parte da $y=a(x-h)^2+k$. Un punto $P(x_P,y_P)$ con $x_P\neq h$ determina $a=\dfrac{y_P-k}{(x_P-h)^2}$. Se $V=(1,-2)$ e $P=(3,6)$, allora $a=2$ e $y=2(x-1)^2-2$. Tre punti con ascisse distinte possono invece determinare $a,b,c$ con un sistema lineare, purché il risultato abbia $a\neq0$.
:::

## Rette e parabola

:::teorema{#intersezioni titolo="Sostituzione nel sistema"}
Per le intersezioni con $y=mx+q$ si risolve $ax^2+(b-m)x+c-q=0$. Due radici distinte danno una secante; una radice doppia dà una tangente; nessuna radice reale dà una retta esterna. Per $y=x^2$ e $y=x+2$, le ascisse sono $-1$ e $2$, quindi i punti sono $(-1,1)$ e $(2,4)$.
:::

## Tangente in un punto

:::teorema{#tangenti titolo="Condizione di radice doppia"}
La tangente a $y=ax^2+bx+c$ nel punto di ascissa $t$ ha equazione $y=(2at+b)x+c-at^2$. Sostituendola nella parabola resta $a(x-t)^2=0$, quindi l'intersezione ha radice doppia. Per $y=x^2$ e $t=2$ si ottiene $y=4x-4$. Il risultato si ricava algebricamente senza introdurre le derivate.
:::

## Asse orizzontale

:::definizione{#orizzontale titolo="Scambio delle coordinate"}
Una parabola con asse orizzontale si scrive $x=a(y-k)^2+h$. Il vertice è $(h,k)$ e l'asse è $y=k$. Se $a>0$ si apre verso destra; se $a<0$ verso sinistra. Per $x=(y-1)^2-2$, il vertice è $(-2,1)$ e l'ascissa minima è $-2$. In generale questa curva non è il grafico di una funzione $y=f(x)$.
:::

## Massimi e minimi nei problemi

:::esempio{#massimi titolo="Area con somma dei lati fissata"}
Se due lati di un rettangolo hanno somma $s>0$, l'area è $A(x)=x(s-x)=-\left(x-\dfrac s2\right)^2+\dfrac{s^2}{4}$ per $0<x<s$. Il quadrato è non negativo, quindi il valore massimo è $\dfrac{s^2}{4}$ e si raggiunge per $x=\dfrac s2$. Il rettangolo di area massima è dunque un quadrato. Il dominio geometrico deve contenere il vertice per poter usare quel massimo.
:::
'''

THEORY['circonferenza'] = r'''
## Centro e raggio

:::definizione{#centro titolo="Luogo dei punti a distanza fissata"}
La **circonferenza** di centro $C(h,k)$ e raggio $r>0$ è il luogo dei punti $P(x,y)$ per cui $CP=r$. Per la formula della distanza, la sua equazione è $(x-h)^2+(y-k)^2=r^2$. Per centro $(1,-2)$ e raggio $3$ si ottiene $(x-1)^2+(y+2)^2=9$. La regione interna usa il confronto $<r^2$.
:::

## Forma generale

:::teorema{#generale titolo="Completamento dei quadrati"}
Da $x^2+y^2+Dx+Ey+F=0$ si ricavano $C\left(-\dfrac D2,-\dfrac E2\right)$ e $r^2=\dfrac{D^2+E^2}{4}-F$. Se $r^2>0$ la circonferenza è reale; se $r^2=0$ resta un punto; se $r^2<0$ il luogo reale è vuoto. Per $x^2+y^2-2x+4y-4=0$, il centro è $(1,-2)$ e il raggio è $3$.
:::

## Appartenenza di un punto

:::teorema{#punti titolo="Confronto delle distanze"}
Un punto $P$ è sulla circonferenza se $CP^2=r^2$, interno se $CP^2<r^2$, esterno se $CP^2>r^2$. Per $x^2+y^2=25$, $(3,4)$ appartiene alla curva perché $9+16=25$; $(1,1)$ è interno. Il confronto dei quadrati evita una radice e conserva il risultato, poiché le distanze sono non negative.

::grafico{curve="5*cos(t),5*sin(t),0,6.283185307" xmin=-6 xmax=6 ymin=-6 ymax=6 uguale=1 punti="0,0,pieno,C;3,4,pieno,P;1,1,pieno,Q" legenda="x^2+y^2=25" titolo="$P(3,4)$ appartiene alla circonferenza, mentre $Q(1,1)$ è interno"}
:::

## Diametro assegnato

:::teorema{#diametro titolo="Estremi del diametro"}
Se $A$ e $B$ sono estremi di un diametro, il centro è il loro punto medio e $r=\dfrac{AB}{2}$. Per $A(-1,2)$ e $B(5,2)$, $C=(2,2)$ e $r=3$. L'equazione è $(x-2)^2+(y-2)^2=9$. I due punti devono essere distinti per avere raggio positivo.
:::

## Intersezioni con una retta

:::teorema{#intersezioni titolo="Riduzione a un'equazione quadratica"}
Per una retta non verticale si sostituisce $y=mx+q$ nell'equazione della circonferenza; per $x=t$ si sostituisce direttamente l'ascissa. Per $x^2+y^2=25$ e $y=3$, si ha $x^2=16$, quindi i punti sono $(-4,3)$ e $(4,3)$. Una radice doppia corrisponde alla tangenza.
:::

## Rette tangenti

:::teorema{#tangenti titolo="Distanza del centro dalla retta"}
Una retta è tangente se la sua distanza dal centro è uguale al raggio. Per $x^2+y^2=r^2$ e un punto $(x_0,y_0)$ sulla curva, la tangente è $x_0x+y_0y=r^2$. Per $(3,4)$ su $x^2+y^2=25$ si ottiene $3x+4y=25$. Il raggio che raggiunge il punto di contatto è perpendicolare alla tangente.
:::

## Corde

:::teorema{#corde titolo="Lunghezza da raggio e distanza"}
Una corda la cui retta dista $d<r$ dal centro ha lunghezza $L=2\sqrt{r^2-d^2}$. La perpendicolare dal centro divide la corda a metà, quindi Pitagora dà $(L/2)^2+d^2=r^2$. Se $r=5$ e $d=3$, $L=8$. Per $d=r$ la corda si riduce al punto di tangenza; per $d>r$ la retta non incontra la curva.
:::

## Due circonferenze

:::teorema{#asse-radicale titolo="Sottrazione delle equazioni"}
Sottraendo due equazioni di circonferenza in forma generale si eliminano $x^2$ e $y^2$. Se i centri sono distinti, resta la retta chiamata **asse radicale**, che contiene gli eventuali punti comuni. Per $x^2+y^2=25$ e $(x-6)^2+y^2=25$, la sottrazione dà $x=3$ e i punti comuni sono $(3,4)$ e $(3,-4)$. La retta esiste anche quando le curve non si intersecano.
:::
'''

THEORY['ellisse'] = r'''
## Somma delle distanze

:::definizione{#definizione titolo="Fuochi e asse maggiore"}
L'**ellisse** è il luogo dei punti la cui somma delle distanze da due fuochi è costante e maggiore della distanza tra i fuochi. Con fuochi $(\pm c,0)$, tale somma è $2a$ con $a>c\geq0$. Il semiasse minore soddisfa $b^2=a^2-c^2$. Quando $c=0$, i fuochi coincidono e il luogo è una circonferenza.
:::

## Equazione canonica

:::teorema{#assi titolo="Semiassi e vertici"}
Per $a>b>0$, l'equazione $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$ ha asse maggiore orizzontale, vertici $(\pm a,0)$ e $(0,\pm b)$. Le lunghezze degli assi sono $2a$ e $2b$. Il semiasse orizzontale si legge dal denominatore sotto $x^2$, anche quando è il minore. Nell'ellisse $\dfrac{x^2}{25}+\dfrac{y^2}{9}=1$ i semiassi misurano $5$ e $3$.
:::

## Fuochi

:::teorema{#fuochi titolo="Distanza focale"}
Con asse maggiore orizzontale si ha $c=\sqrt{a^2-b^2}$ e i fuochi sono $(\pm c,0)$. Per denominatori $25$ e $9$, $c=4$ e la somma delle distanze da ogni punto dell'ellisse ai fuochi vale $10$. Con asse maggiore verticale i fuochi sono $(0,\pm c)$ e il denominatore maggiore è sotto $y^2$.

::grafico{curve="5*cos(t),3*sin(t),0,6.283185307" xmin=-6 xmax=6 ymin=-4 ymax=4 uguale=1 punti="-4,0,pieno,F₁;4,0,pieno,F₂;0,3,pieno,P" legenda="\dfrac{x^2}{25}+\dfrac{y^2}{9}=1" titolo="I fuochi sono $(\pm4,0)$ e la somma delle distanze vale $10$"}
:::

## Eccentricità

:::definizione{#eccentricita titolo="Rapporto tra semidistanza focale e semiasse maggiore"}
L'**eccentricità** è $e=\dfrac ca$, quindi $0\leq e<1$. Indica quanto i fuochi sono separati rispetto all'asse maggiore. Per $a=5$, $c=4$, si ottiene $e=\dfrac45$ e $b=\sqrt{25-16}=3$. Se sono dati $a$ ed $e$, si usa $b=a\sqrt{1-e^2}$.
:::

## Appartenenza e ordinate

:::teorema{#punti titolo="Ricavare una coordinata"}
Da $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$ segue $y=\pm b\sqrt{1-\dfrac{x^2}{a^2}}$, con $|x|\leq a$. Il segno positivo descrive la metà superiore, il negativo quella inferiore. Per $\dfrac{x^2}{25}+\dfrac{y^2}{9}=1$ e $x=3$, si trova $y=\pm\dfrac{12}{5}$. L'ellisse completa non è il grafico di una sola funzione $y=f(x)$.
:::

## Ellisse traslata

:::teorema{#traslata titolo="Centro diverso dall'origine"}
L'equazione $\dfrac{(x-h)^2}{a^2}+\dfrac{(y-k)^2}{b^2}=1$ ha centro $(h,k)$. Con $a>b$ i fuochi sono $(h\pm c,k)$ e i vertici principali $(h\pm a,k)$. Per $\dfrac{(x-2)^2}{25}+\dfrac{(y+1)^2}{9}=1$ il centro è $(2,-1)$ e i fuochi sono $(-2,-1)$ e $(6,-1)$.
:::

## Equazione da dati geometrici

:::esempio{#ricostruzione titolo="Vertice e fuoco"}
Un'ellisse centrata nell'origine ha asse maggiore orizzontale, vertice $(5,0)$ e fuoco $(3,0)$. Quindi $a=5$, $c=3$ e $b^2=a^2-c^2=16$. L'equazione è $\dfrac{x^2}{25}+\dfrac{y^2}{16}=1$. Il dato focale deve rispettare $c<a$; altrimenti non definisce un'ellisse reale non degenere.
:::

## Tangenti e rette

:::teorema{#tangenti titolo="Tangente nel punto assegnato"}
Nel punto $(x_0,y_0)$ dell'ellisse canonica, la tangente è $\dfrac{xx_0}{a^2}+\dfrac{yy_0}{b^2}=1$. Al vertice $(a,0)$ si riduce a $x=a$. Per una retta generica, la sostituzione nell'ellisse produce un'equazione di secondo grado; il discriminante nullo caratterizza la tangenza. Il punto assegnato deve appartenere all'ellisse prima di applicare la formula.
:::
'''

THEORY['iperbole'] = r'''
## Differenza delle distanze

:::definizione{#definizione titolo="Due rami di un luogo geometrico"}
L'**iperbole** è il luogo dei punti per cui il valore assoluto della differenza delle distanze da due fuochi è una costante $2a$, positiva e minore della distanza tra i fuochi $2c$. Con fuochi sull'asse $x$, $c>a>0$ e si pone $b^2=c^2-a^2$. La curva è formata da due rami separati.
:::

## Forma canonica

:::teorema{#assi titolo="Asse trasverso e vertici"}
L'iperbole $\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1$, con $a,b>0$, ha vertici $(\pm a,0)$ e rami verso destra e sinistra. Per $\dfrac{y^2}{a^2}-\dfrac{x^2}{b^2}=1$ i vertici sono $(0,\pm a)$. Il termine positivo determina l'asse che incontra la curva. I punti $(0,\pm b)$ della prima forma non appartengono all'iperbole.
:::

## Fuochi ed eccentricità

:::teorema{#fuochi titolo="Somma dei quadrati"}
Nella forma orizzontale, $c=\sqrt{a^2+b^2}$, i fuochi sono $(\pm c,0)$ e l'eccentricità è $e=\dfrac ca>1$. Per $\dfrac{x^2}{9}-\dfrac{y^2}{16}=1$, $a=3$, $b=4$, $c=5$ ed $e=\dfrac53$. Per l'ellisse compare una differenza, mentre qui compare la somma: entrambe le formule derivano dalla rispettiva definizione focale.
:::

## Asintoti

:::teorema{#asintoti titolo="Rette associate ai rami"}
Gli asintoti di $\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1$ sono $y=\pm\dfrac ba x$. Infatti l'equazione dà $y=\pm\dfrac ba\sqrt{x^2-a^2}$ e, per grandi valori di $|x|$, i rami si avvicinano alle rette indicate. Per $a=3$, $b=4$, gli asintoti hanno coefficienti $\pm\dfrac43$.

::grafico{f="4/3*sqrt(x^2-9);-4/3*sqrt(x^2-9);4/3*x;-4/3*x" xmin=-8 xmax=8 ymin=-9 ymax=9 uguale=1 legenda="y=\dfrac43\sqrt{x^2-9};y=-\dfrac43\sqrt{x^2-9};y=\dfrac43x;y=-\dfrac43x" titolo="I due rami e gli asintoti dell'iperbole con $a=3$, $b=4$"}
:::

## Punti e intersezioni

:::teorema{#punti titolo="Condizione sulle ascisse"}
Nell'iperbole orizzontale, $y^2=b^2\left(\dfrac{x^2}{a^2}-1\right)$ richiede $|x|\geq a$. Ogni ascissa con $|x|>a$ dà due ordinate opposte. Per $\dfrac{x^2}{9}-\dfrac{y^2}{16}=1$ e $x=5$, le ordinate sono $\pm\dfrac{16}{3}$. Una retta verticale può incontrare lo stesso ramo in due punti.
:::

## Iperbole equilatera

:::definizione{#equilatera titolo="Asintoti perpendicolari"}
L'iperbole è **equilatera** quando $a=b$, quindi gli asintoti della forma canonica sono $y=\pm x$. Con una rotazione degli assi si può scrivere $xy=k$, con $k\neq0$. Per $k>0$ i rami sono nei quadranti primo e terzo; per $k<0$ nel secondo e quarto. La forma $y=\dfrac kx$ ha dominio $\mathbb R\setminus\{0\}$.
:::

## Centro traslato

:::teorema{#traslata titolo="Traslare centro e asintoti"}
Per $\dfrac{(x-h)^2}{a^2}-\dfrac{(y-k)^2}{b^2}=1$, il centro è $(h,k)$ e gli asintoti sono $y-k=\pm\dfrac ba(x-h)$. I vertici diventano $(h\pm a,k)$. La traslazione conserva semiassi ed eccentricità. Tutti i punti notevoli si spostano con lo stesso vettore $(h,k)$.
:::

## Funzione omografica

:::teorema{#omografica titolo="Separare la costante e il reciproco"}
Se $c\neq0$ e $ad-bc\neq0$, $y=\dfrac{ax+b}{cx+d}$ si riscrive $y=\dfrac ac+\dfrac{bc-ad}{c^2}\dfrac1{x+\dfrac dc}$. Gli asintoti sono $x=-\dfrac dc$ e $y=\dfrac ac$. Per $y=\dfrac{2x+3}{x-1}$, si ha $y=2+\dfrac5{x-1}$ e centro $(1,2)$. Se $ad-bc=0$, resta una funzione costante con un punto escluso dal dominio.
:::
'''

THEORY['trasformazioni-e-coniche'] = r'''
## Traslazioni di punti e curve

:::teorema{#traslazioni titolo="Cambiare la posizione"}
La traslazione di vettore $(h,k)$ manda $(x,y)$ in $(x+h,y+k)$. Se una curva ha equazione $F(x,y)=0$, la curva traslata ha equazione $F(x-h,y-k)=0$. La circonferenza $x^2+y^2=9$, traslata di $(2,-1)$, diventa $(x-2)^2+(y+1)^2=9$. Distanze e angoli restano invariati.
:::

## Simmetrie assiali e centrali

:::teorema{#simmetrie titolo="Immagini delle coordinate"}
La simmetria rispetto all'asse $x$ manda $(x,y)$ in $(x,-y)$; quella rispetto all'asse $y$ in $(-x,y)$; quella rispetto all'origine in $(-x,-y)$. Rispetto a $y=x$, le coordinate si scambiano. Per esempio $(2,-3)$ diventa $(-3,2)$ nell'ultima trasformazione. Applicando la sostituzione all'equazione si ricava la curva trasformata.
:::

## Omotetie

:::definizione{#omotetie titolo="Rapporto di scala"}
L'**omotetia** di centro l'origine e rapporto $\lambda\neq0$ manda $(x,y)$ in $(\lambda x,\lambda y)$. Le distanze si moltiplicano per $|\lambda|$ e le aree per $\lambda^2$. Una circonferenza di raggio $r$ diventa una circonferenza di raggio $|\lambda|r$. Un rapporto negativo comprende anche una simmetria rispetto all'origine.
:::

## Riconoscere una conica

:::teorema{#riconoscimento titolo="Forma senza termine misto"}
Per $Ax^2+Cy^2+Dx+Ey+F=0$, con entrambi $A,C$ non nulli, il completamento dei quadrati porta a una forma centrata. Coefficienti quadratici dello stesso segno possono dare un'ellisse, un punto o il luogo vuoto; di segno opposto possono dare un'iperbole o due rette. Se uno solo tra $A,C$ è nullo, si può ottenere una parabola, ma vanno controllati anche i termini di primo grado.
:::

## Completare i quadrati

:::esempio{#quadrati titolo="Dalla forma generale al centro"}
Per $4x^2+9y^2-8x+36y+4=0$ si raggruppano i termini: $4[(x-1)^2-1]+9[(y+2)^2-4]+4=0$. Quindi $4(x-1)^2+9(y+2)^2=36$, ossia $\dfrac{(x-1)^2}{9}+\dfrac{(y+2)^2}{4}=1$. Il centro è $(1,-2)$ e i semiassi sono $3$ e $2$. La divisione per il secondo membro si fa dopo averlo calcolato.
:::

## Intersezioni tra curve

:::teorema{#intersezioni titolo="Un sistema per i punti comuni"}
Un punto comune soddisfa le due equazioni. Per $y=x^2$ e $y=2-x^2$ si ottiene $2x^2=2$, quindi $x=\pm1$ e $y=1$. I punti sono $(-1,1)$ e $(1,1)$. Ogni coppia va controllata nelle equazioni iniziali, soprattutto se nella risoluzione si è elevato al quadrato.

::grafico{f="x^2;2-x^2" xmin=-2 xmax=2 ymin=-2 ymax=4 punti="-1,1;1,1" titolo="Le due parabole hanno punti comuni $(-1,1)$ e $(1,1)$"}
:::

## Tangenza e parametri

:::teorema{#tangenza titolo="Intersezione doppia"}
Per determinare una retta tangente in una famiglia si sostituisce la sua equazione nella conica e si impone discriminante nullo quando l'equazione ottenuta è quadratica. Per $y=x^2$ e $y=2x+q$, si trova $x^2-2x-q=0$, quindi $\Delta=4+4q=0$ e $q=-1$. La tangente è $y=2x-1$ e il contatto è $(1,1)$.
:::

## Luoghi geometrici

:::esempio{#luoghi titolo="Punti equidistanti da due punti"}
I punti equidistanti da $A(-2,0)$ e $B(4,0)$ soddisfano $(x+2)^2+y^2=(x-4)^2+y^2$. Sviluppando si ottiene $12x=12$, quindi $x=1$. Il luogo è l'asse del segmento $AB$, cioè la perpendicolare nel suo punto medio. L'uguaglianza delle distanze può essere elevata al quadrato perché entrambi i membri sono non negativi.
:::
'''

THEORY['esponenziali'] = r'''
## Potenze e proprietà

:::teorema{#potenze titolo="Esponenti interi e razionali"}
Per $a>0$, valgono $a^u a^v=a^{u+v}$, $\dfrac{a^u}{a^v}=a^{u-v}$ e $(a^u)^v=a^{uv}$. Inoltre $a^{-u}=\dfrac1{a^u}$ e $a^{\frac mn}=\sqrt[n]{a^m}$ per interi $m,n$ con $n>0$. Per esempio $16^{\frac34}=8$. La base positiva permette di estendere le potenze agli esponenti reali conservando queste proprietà.
:::

## Funzione esponenziale

:::definizione{#funzione titolo="Base positiva diversa da uno"}
Per $a>0$, $a\neq1$, la **funzione esponenziale** $f(x)=a^x$ ha dominio $\mathbb R$, immagine $(0,+\infty)$ e passa per $(0,1)$. È crescente se $a>1$ e decrescente se $0<a<1$. La retta $y=0$ è un asintoto orizzontale. Per $a=1$ si ottiene invece la funzione costante $1$.

::grafico{f="2^x;0.5^x" xmin=-4 xmax=4 ymin=-1 ymax=8 titolo="Una base maggiore di uno dà crescita, una base tra zero e uno dà decrescita"}
:::

## Equazioni con la stessa base

:::teorema{#equazioni titolo="Uguaglianza degli esponenti"}
Poiché $a^x$ è iniettiva, per $a>0$, $a\neq1$, $a^{f(x)}=a^{g(x)}$ equivale a $f(x)=g(x)$ nel dominio comune. Per $2^{x+1}=8=2^3$ si trova $x=2$. Per $4^x=8$, si riscrive $2^{2x}=2^3$, quindi $x=\dfrac32$. Il cambio di base si fonda sulle proprietà delle potenze.
:::

## Disequazioni con base maggiore di uno

:::teorema{#crescenti titolo="Conservazione del verso"}
Se $a>1$, $a^{f(x)}>a^{g(x)}$ equivale a $f(x)>g(x)$. Per $3^{2x-1}\leq27$, si scrive $27=3^3$, quindi $2x-1\leq3$ e $x\leq2$. Se gli esponenti contengono frazioni o radicali, si mantiene anche il loro dominio.
:::

## Disequazioni con base minore di uno

:::teorema{#decrescenti titolo="Inversione del verso"}
Se $0<a<1$, la funzione è decrescente, quindi $a^{f(x)}>a^{g(x)}$ equivale a $f(x)<g(x)$. Per $\left(\dfrac12\right)^x\geq\dfrac18$, si ottiene $x\leq3$. Il verso cambia per la monotonia della funzione, anche se non si moltiplica la disequazione per un numero negativo.
:::

## Equazioni riconducibili al secondo grado

:::teorema{#sostituzione titolo="Incognita esponenziale positiva"}
In $a^{2x}-sa^x+p=0$ si pone $t=a^x>0$. Si risolve $t^2-st+p=0$ e si conservano solo le radici positive, poi si torna a $x$. Per $4^x-5\cdot2^x+4=0$, $t=2^x$ dà $(t-1)(t-4)=0$, quindi $x=0$ oppure $x=2$.
:::

## Grafici traslati

:::teorema{#trasformazioni titolo="Traslazione dell'esponenziale"}
Per $f(x)=a^{x-h}+k$, l'immagine è $(k,+\infty)$ e l'asintoto orizzontale è $y=k$. La traslazione orizzontale non cambia l'immagine né la monotonia. Per $f(x)=2^{x-1}-3$, il punto $(1,-2)$ appartiene al grafico e l'asintoto è $y=-3$. L'asintoto non viene raggiunto per alcun $x$ reale.
:::

## Crescita e decadimento

:::definizione{#modelli titolo="Fattore moltiplicativo costante"}
Il modello $N(t)=N_0q^t$, con $N_0>0$ e $q>0$, descrive una quantità moltiplicata per $q$ in ogni unità di tempo. Se cresce del $10\%$, $q=1{,}10$; se diminuisce del $20\%$, $q=0{,}80$. Un raddoppio ogni $T$ unità dà $N(t)=N_0\cdot2^{\frac tT}$. Per $N_0=80$ e $T=3$, dopo $6$ unità la quantità vale $320$.
:::
'''

THEORY['logaritmi'] = r'''
## Definizione

:::definizione{#definizione titolo="L'esponente richiesto"}
Per $a>0$, $a\neq1$ e $b>0$, il **logaritmo** $\log_a b$ è l'unico numero $x$ per cui $a^x=b$. Per esempio $\log_2 8=3$ e $\log_3\dfrac19=-2$. L'argomento è positivo, mentre il valore del logaritmo può avere qualunque segno. Si scrive $\ln$ per la base $e$ e $\log_{10}$ per la base dieci.
:::

## Proprietà

:::teorema{#proprieta titolo="Prodotti, rapporti e potenze"}
Per $u,v>0$ e base ammissibile, $\log_a(uv)=\log_a u+\log_a v$, $\log_a\dfrac uv=\log_a u-\log_a v$ e $\log_a(u^r)=r\log_a u$. Le proprietà seguono da quelle delle potenze. Per esempio $\log_2 24-\log_2 3=3$. La somma $\log_a(u+v)$ non ha una scomposizione analoga. Per esempio $\log_2(2+6)=3$, mentre $\log_2 2+\log_2 6=\log_2 12$, che è diverso da $3$.
:::

## Cambio di base

:::teorema{#base titolo="Rapporto di due logaritmi"}
Per basi $a,c>0$ diverse da $1$ e $b>0$, $\log_a b=\dfrac{\log_c b}{\log_c a}$. Infatti $a^x=b$ implica $x\log_c a=\log_c b$ e $\log_c a\neq0$. Per esempio $\log_4 8=\dfrac32$. La formula permette di calcolare logaritmi in una base qualsiasi con il tasto $\ln$ della calcolatrice.
:::

## Dominio

:::teorema{#dominio titolo="Argomento strettamente positivo"}
Per $\log_a f(x)$ si impone $f(x)>0$. Se anche la base dipende da $x$, deve essere positiva e diversa da $1$. Per $\ln\dfrac{x-1}{x+2}$ si studia $\dfrac{x-1}{x+2}>0$, ottenendo $(-\infty,-2)\cup(1,+\infty)$. Gli estremi sono entrambi esclusi, perché in uno manca il denominatore e nell'altro l'argomento è zero.
:::

## Grafico e inversa

:::definizione{#funzione titolo="Inversa dell'esponenziale"}
La funzione $y=\log_a x$ ha dominio $(0,+\infty)$, immagine $\mathbb R$ e passa per $(1,0)$. È crescente per $a>1$, decrescente per $0<a<1$. Il grafico è simmetrico a quello di $y=a^x$ rispetto a $y=x$. L'asse $y$ è un asintoto verticale.

::grafico{f="log(x)/log(2);log(x)/log(0.5)" xmin=0 xmax=6 ymin=-4 ymax=4 legenda="\log_2 x;\log_{\frac12}x" titolo="Il logaritmo può assumere valori negativi con argomento positivo"}
:::

## Equazioni

:::teorema{#equazioni titolo="Iniettività nel dominio"}
Per base ammissibile, $\log_a f(x)=\log_a g(x)$ equivale a $f(x)=g(x)$ nel dominio comune. Per $\log_2(x-1)=3$ si richiede $x>1$, quindi $x-1=8$ e $x=9$. In $\ln(x-1)+\ln(x+1)=\ln8$, il dominio è $x>1$. Il prodotto dà $x^2-1=8$, ma delle radici $\pm3$ si conserva solo $3$.
:::

## Disequazioni

:::teorema{#disequazioni titolo="Monotonia e dominio insieme"}
Per $a>1$ il confronto tra logaritmi conserva il verso; per $0<a<1$ lo inverte. In $\log_2(x-1)\leq3$ le condizioni sono $\begin{cases}x>1,\\x-1\leq8,\end{cases}$ quindi $1<x\leq9$. In $\log_{\frac12}(x+1)\geq-2$ si ottiene $-1<x\leq3$. L'estremo in cui l'argomento è zero resta escluso.
:::

## Ricavare un tempo

:::esempio{#modelli titolo="Soglia in una crescita esponenziale"}
Se $N(t)=100\cdot2^t$, la soglia $500$ si raggiunge quando $2^t=5$, cioè $t=\log_2 5=\dfrac{\ln5}{\ln2}\approx2{,}322$. Se il modello viene osservato solo a tempi interi, il primo tempo con $N(t)\geq500$ è $t=3$. La soluzione reale dell'equazione e il primo istante intero rispondono a due richieste diverse.
:::
'''

THEORY['statistica'] = r'''
## Dati e frequenze

:::definizione{#frequenze titolo="Contare e confrontare"}
La **frequenza assoluta** $n_i$ conta quante volte si presenta un valore. Con $N$ osservazioni, la frequenza relativa è $f_i=\dfrac{n_i}{N}$ e quella percentuale è $100f_i$. Le frequenze assolute sommano a $N$, le relative a $1$. Se $6$ studenti su $24$ scelgono una risposta, la frequenza relativa è $\dfrac14$ e quella percentuale è $25\%$.
:::

## Media aritmetica

:::definizione{#media titolo="Valore medio dei dati"}
La **media aritmetica** di $x_1,\ldots,x_N$ è $\bar x=\dfrac{x_1+\cdots+x_N}{N}$. Con frequenze si usa $\bar x=\dfrac{\sum_i n_ix_i}{\sum_i n_i}$. La media di $4,6,8$ è $6$. Un valore molto lontano dagli altri può modificarla molto; per questo si confronta anche con mediana e dispersione.
:::

## Mediana e moda

:::definizione{#mediana titolo="Posizione centrale e valore più frequente"}
Ordinati i dati, la **mediana** è il dato centrale se $N$ è dispari e la media dei due centrali se $N$ è pari. La **moda** è un valore con frequenza massima e può non essere unica. Per $2,3,3,8,9$, mediana e moda sono $3$, mentre la media è $5$. L'ordinamento precede il calcolo della mediana.
:::

## Variabilità

:::definizione{#varianza titolo="Varianza della popolazione osservata"}
Per descrivere l'intero insieme di dati si usa $\sigma^2=\dfrac1N\sum_i(x_i-\bar x)^2=\dfrac1N\sum_i x_i^2-\bar x^2$. La deviazione standard è $\sigma=\sqrt{\sigma^2}$ e ha la stessa unità dei dati. Per $2,4,6$, $\bar x=4$, $\sigma^2=\dfrac83$. Qui il divisore è $N$; la stima campionaria con divisore $N-1$ risponde a uno scopo diverso.
:::

## Trasformare i dati

:::teorema{#trasformazioni titolo="Effetti di una trasformazione affine"}
Se $y_i=ax_i+b$, allora $\bar y=a\bar x+b$, $\sigma_y^2=a^2\sigma_x^2$ e $\sigma_y=|a|\sigma_x$. Aggiungere una costante cambia la media e conserva la dispersione. Moltiplicare ogni dato per $3$ moltiplica la varianza per $9$. Le formule seguono da $y_i-\bar y=a(x_i-\bar x)$.
:::

## Due variabili

:::definizione{#covarianza titolo="Variazioni osservate insieme"}
Per coppie $(x_i,y_i)$, la covarianza è $\operatorname{cov}(x,y)=\dfrac1N\sum_i(x_i-\bar x)(y_i-\bar y)$. Il segno positivo indica una tendenza congiunta crescente, quello negativo una tendenza opposta. Se entrambe le deviazioni standard sono positive, $r=\dfrac{\operatorname{cov}(x,y)}{\sigma_x\sigma_y}$ è il coefficiente di correlazione lineare e appartiene a $[-1,1]$.
:::

## Retta di regressione

:::teorema{#regressione titolo="Previsione lineare dai dati"}
Se $\sigma_x^2>0$, la retta di regressione di $y$ su $x$ è $y=mx+q$, con $m=\dfrac{\operatorname{cov}(x,y)}{\sigma_x^2}$ e $q=\bar y-m\bar x$. Minimizza la somma dei quadrati degli scarti verticali e passa per $(\bar x,\bar y)$. La retta di $x$ su $y$ risolve un problema diverso. Una previsione fuori dall'intervallo dei dati richiede cautela, perché prolunga il modello oltre le osservazioni.
:::

## Interpretazione e limiti

:::osservazione{#lettura titolo="Associazione e causalità"}
Una correlazione, anche forte, descrive un'associazione tra variabili e da sola non dimostra un rapporto di causa ed effetto. Un valore anomalo può influenzare media, correlazione e regressione. Nei grafici, origine e scala degli assi cambiano la percezione delle differenze; frequenze e unità di misura vanno dichiarate. Per confrontare due classi di numerosità diversa si usano frequenze relative.
:::
'''
