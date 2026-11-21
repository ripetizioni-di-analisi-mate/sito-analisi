---
titolo: "Numeri, operazioni e frazioni"
sommario: "Insiemi numerici, ordinamento, operazioni con segno, divisibilità e scritture dei razionali."
---

## Naturali, interi e razionali

:::definizione{#insiemi-numerici titolo="Insiemi numerici e scritture equivalenti"}
Un insieme è un gruppo di oggetti, in questo capitolo numeri, raccolti sotto un unico nome.

- I **numeri naturali** sono i numeri che servono per contare, cioè $0,1,2,3,\ldots$, dove i tre puntini indicano che l’elenco prosegue senza fine. Il loro insieme si indica con $\mathbb N$. In questo corso lo zero appartiene a $\mathbb N$.
- I **numeri interi** sono i naturali e i loro opposti. L’opposto di un numero è lo stesso numero con il segno cambiato, per esempio l’opposto di $2$ è $-2$. Il loro insieme è $\mathbb Z=\{\ldots,-2,-1,0,1,2,\ldots\}$, dove le graffe racchiudono l’elenco dei numeri dell’insieme.
- I **numeri razionali** sono i numeri che si scrivono come frazione $\dfrac ab$, con $a$ e $b$ interi e $b$ diverso da zero. Il numero sopra, $a$, è il numeratore e il numero sotto, $b$, è il denominatore. La frazione indica il risultato della divisione $a:b$, per esempio $\dfrac32=3:2$. Il loro insieme è $\mathbb Q$.

In simboli le condizioni su $a$ e $b$ sono $a,b\in\mathbb Z$ e $b\ne0$, dove $\in$ si legge «appartiene a» e $\ne$ si legge «è diverso da». Il denominatore si sceglie sempre positivo, cioè $b>0$, perché cambiare segno a numeratore e denominatore conserva il risultato della divisione. Per esempio $\dfrac{3}{-4}=\dfrac{-3}{4}=-\dfrac34$.

Ogni intero $a$ è anche un razionale, perché si scrive $\dfrac a1$, per esempio $5=\dfrac51$. In simboli $\mathbb N\subsetneq\mathbb Z\subsetneq\mathbb Q$, dove $\subsetneq$ si legge «è contenuto in, senza coincidere con» e indica che il secondo insieme ha tutti i numeri del primo e anche altri. Un’inclusione di questo tipo si dice stretta. La prima è stretta, perché $-1$ è intero e sta a sinistra dello zero, dove non ci sono naturali. La seconda è stretta, perché $\dfrac12$ è razionale e si trova fra $0$ e $1$, che sono due interi consecutivi, cioè uno subito dopo l’altro.
:::

:::osservazione{titolo="Quando un’operazione resta nello stesso insieme"}
Con i soli numeri naturali la sottrazione $5-8$ non ha risultato, perché il numero da togliere, $8$, supera il numero di partenza, $5$. Negli interi il risultato esiste e vale $5-8=-3$.

In una divisione $a:b$ il numero $a$ è il **dividendo**, il numero $b$ è il **divisore** e il risultato è il **quoziente**. Negli interi il quoziente è intero soltanto in alcuni casi. Per esempio $6:3=2$ è intero. Il quoziente $7:3=\dfrac73$ non è intero, perché $2\cdot3=6$ e $3\cdot3=9$, quindi cade fra $2$ e $3$.

In $\mathbb Q$, cioè fra i razionali, la somma, la differenza e il prodotto di due numeri sono ancora numeri razionali. Lo stesso vale per il quoziente quando il divisore è diverso da zero. Per verificare che un risultato è razionale basta scriverlo come frazione con numeratore e denominatore interi.
:::

:::esempio{titolo="Collocare frazioni fra interi consecutivi"}
La **retta numerica** è una retta su cui ogni numero ha il suo punto. Lo zero è il punto di partenza, i positivi stanno alla sua destra e i negativi alla sua sinistra. Il tratto fra due interi consecutivi è l’**unità**.

Per collocare $-\dfrac32$ si divide ciascuna unità in due parti uguali, perché il denominatore è $2$, e da zero ci si sposta di tre mezze unità verso sinistra. Due mezze unità portano esattamente a $-1$ e la terza porta al punto $P$, a metà fra $-2$ e $-1$. A destra dello zero, una mezza unità porta al punto $Q$, che rappresenta $\dfrac12$.

Nessun intero si trova strettamente fra $0$ e $1$, cioè fra i due numeri senza coincidere con uno di essi. Ci sono invece altri razionali, per esempio $\dfrac13$ e $\dfrac23$.

::grafico{xmin=-2.65 xmax=2.55 ymin=-0.62 ymax=0.67 uguale=1 assi=0 vettori="-2.43,0,2.28,0" linee="-2,-0.08 -2,0.08;-1,-0.08 -1,0.08;0,-0.08 0,0.08;1,-0.08 1,0.08;2,-0.08 2,0.08" punti="-1.5,0,pieno,P;0.5,0,pieno,Q" etichette="-2.11,-0.27,−2;-1.11,-0.27,−1;-0.05,-0.27,0;0.97,-0.27,1;1.97,-0.27,2;2.35,0.09,x" titolo="P rappresenta meno tre mezzi e Q rappresenta un mezzo"}
:::

## Ordine, valore assoluto e distanza

:::definizione{#retta titolo="Ordine e distanza sulla retta numerica"}
Il numero che corrisponde a un punto della retta numerica è la **coordinata** del punto. Il punto di coordinata $0$ è l’origine. Fra due punti ha coordinata maggiore quello più a destra. Il simbolo $<$ si legge «è minore di» e il simbolo $>$ si legge «è maggiore di». Il punto $-5$ sta a sinistra del punto $-2$, perciò $-5<-2$, sebbene $-5$ disti di più dall’origine.

Il **valore assoluto** di un numero $a$, detto anche modulo, si scrive $|a|$ ed è la distanza del suo punto dall’origine. Una distanza è una lunghezza, quindi è positiva oppure nulla. Per esempio $|4|=4$. Con le lettere la regola è

$$
|a|=\begin{cases}a&\text{se }a\ge0\\-a&\text{se }a<0.\end{cases}
$$

Il simbolo $\ge$ si legge «è maggiore o uguale a». Nel secondo caso $a$ è negativo, quindi il suo opposto $-a$ è positivo, come in $|-4|=-(-4)=4$.

I punti di coordinate $-4$ e $4$ hanno uguale distanza da zero e rappresentano numeri opposti. Nella figura le due frecce partono da zero e arrivano a $-4$ e a $4$.

::grafico{xmin=-5.45 xmax=5.45 ymin=-0.82 ymax=1.15 uguale=1 assi=0 vettori="-5.17,0,5.06,0;0,0.51,-4,0.51;0,0.51,4,0.51" punti="-4,0,pieno;0,0,pieno;4,0,pieno" segmenti="-4,0.05,-4,0.53;0,0.05,0,0.53;4,0.05,4,0.53" etichette="-4.18,-0.38,−4;-0.07,-0.38,0;3.91,-0.38,4;-2.13,0.78,4;1.88,0.78,4;5.13,0.12,x" titolo="I punti di coordinate −4 e 4 distano entrambi 4 unità da zero"}
:::

::::teorema{titolo="Formula del punto medio"}
Il **punto medio** fra due punti della retta è il punto che ha la stessa distanza dall’uno e dall’altro.

Siano $a$ e $b$ le coordinate dei due punti, detti estremi, con $a\le b$. Il simbolo $\le$ si legge «è minore o uguale a». Il punto medio ha coordinata $m=\dfrac{a+b}{2}$, che è la **media aritmetica** dei due estremi, cioè la loro somma divisa per due. La distanza del punto medio da ciascun estremo è metà di $b-a$.

La distanza fra $a$ e $b$ si scrive $|b-a|$, perché questa espressione resta la stessa quando si scambiano gli estremi. Per esempio $|5-2|=|3|=3$ e $|2-5|=|-3|=3$.
:::dimostrazione
Il punto cercato si ottiene partendo da $a$ e andando verso $b$ per metà della distanza $b-a$. La sua coordinata è

$$
m=a+\frac{b-a}{2}=\frac{2a}{2}+\frac{b-a}{2}=\frac{2a+b-a}{2}=\frac{a+b}{2}.
$$

Nel secondo passaggio il numero $a$ è scritto come $\dfrac{2a}{2}$, così le due frazioni hanno lo stesso denominatore e si sommano i numeratori.

La distanza del punto da $a$ è $m-a=\dfrac{b-a}{2}$. La distanza da $b$ è $b-m=(b-a)-\dfrac{b-a}{2}=\dfrac{b-a}{2}$. Le due distanze sono uguali, quindi il punto di coordinata $m$ è il punto medio. Se $a=b$, la formula restituisce $m=\dfrac{a+a}{2}=a$ e le due distanze sono nulle.
:::
::::

:::esempio{titolo="Stessa distanza, coordinate diverse"}
I punti $A$ e $B$ hanno coordinate $-3$ e $5$. La loro distanza è $5-(-3)=5+3=8$. La metà della distanza è $4$, quindi il punto medio $M$ si trova quattro unità a destra di $A$ e ha coordinata $m=-3+4=1$. Il punto medio sta a destra dello zero, perché l’estremo destro $5$ è più lontano dall’origine dell’estremo sinistro $-3$.

I punti che hanno distanza $d>0$ da un punto di coordinata $m$, detto centro, hanno coordinate $m-d$ e $m+d$.

::grafico{xmin=-5 xmax=7 ymin=-1 ymax=1 uguale=1 assi=0 vettori="-4.6,0,6.5,0" punti="-3,0,pieno,A;1,0,pieno,M;5,0,pieno,B" linee="0,-0.08 0,0.08" segmenti="-3,0.09,-3,0.45;-3,0.45,1,0.45;1,0.09,1,0.45;1,0.45,5,0.45;5,0.09,5,0.45" etichette="-3.12,-0.28,−3;-0.11,-0.28,0;0.89,-0.28,1;4.89,-0.28,5;-1.05,0.59,4;2.95,0.59,4;6.63,0.08,x" titolo="Il punto medio M divide la distanza fra A e B in due tratti di 4 unità"}
:::

:::esempio{titolo="Confrontare due frazioni negative"}
Quando due frazioni hanno lo stesso denominatore positivo, è minore quella con il numeratore minore. Per confrontare $-\dfrac56$ e $-\dfrac79$ si sceglie il denominatore positivo comune $18$, che è multiplo di $6$ e di $9$.

$$
-\frac56=-\frac{5\cdot3}{6\cdot3}=-\frac{15}{18},\qquad
-\frac79=-\frac{7\cdot2}{9\cdot2}=-\frac{14}{18}.
$$

I numeratori sono $-15$ e $-14$. Poiché $-15<-14$, la prima frazione è minore, cioè $-\dfrac56<-\dfrac79$.

La stessa conclusione si ottiene confrontando le distanze da zero, $\dfrac{15}{18}$ e $\dfrac{14}{18}$, perché fra due numeri negativi è minore quello più lontano da zero. Nella figura $P$ rappresenta $-\dfrac56$ e $Q$ rappresenta $-\dfrac79$.

::grafico{xmin=-0.908 xmax=-0.697 ymin=-0.067 ymax=0.084 uguale=1 assi=0 vettori="-0.894,0,-0.712,0" punti="-0.833333333,0,pieno,P;-0.777777778,0,pieno,Q" etichette="-0.844,-0.035,−5⁄6;-0.787,-0.035,−7⁄9;-0.71,0.018,x" titolo="Il numero meno cinque sesti si trova a sinistra di meno sette noni"}

Il **reciproco** di un numero $a$ diverso da zero è il numero che moltiplicato per $a$ dà $1$, cioè $\dfrac1a$. Fra due numeri positivi, il minore ha il reciproco maggiore, cioè per $0<a<b$ i reciproci soddisfano $\dfrac1a>\dfrac1b$. Infatti la loro differenza è

$$
\frac1a-\frac1b=\frac{b}{ab}-\frac{a}{ab}=\frac{b-a}{ab}>0,
$$

perché sono positivi sia il numeratore $b-a$ sia il denominatore $ab$. La scrittura $ab$ indica il prodotto $a\cdot b$. Con questo confronto si ordinano in modo diretto le frazioni positive con lo stesso numeratore. Per esempio $\dfrac37>\dfrac38$, perché $7<8$.
:::

## Segni, raggruppamenti e priorità

:::definizione{#operazioni titolo="Somma, differenza e ordine dei calcoli"}
I numeri che si sommano si chiamano addendi e quelli che si moltiplicano si chiamano fattori. Sulla retta numerica, sommare un numero positivo equivale a uno spostamento verso destra. Un addendo negativo corrisponde invece a uno spostamento verso sinistra.

La **differenza** fra $a$ e $b$ è il numero che, sommato a $b$, restituisce $a$. Sottrarre $b$ equivale a sommare il suo opposto, cioè $a-b=a+(-b)$. Infatti $(a+(-b))+b=a$. Per esempio $5-(-3)=5+3=8$.

Un’espressione è una scrittura che contiene più operazioni. Le parentesi formano un **raggruppamento**, cioè indicano una parte dell’espressione da calcolare insieme e per prima. All’interno di un raggruppamento, e poi nell’espressione intera, i calcoli seguono questo ordine.

1. Le potenze. Una **potenza** è un prodotto di fattori uguali, per esempio $2^3=2\cdot2\cdot2=8$. Il numero scritto in alto, $3$, è l’esponente e conta i fattori.
2. I prodotti e le divisioni, da sinistra verso destra.
3. Le addizioni e le sottrazioni, da sinistra verso destra.

Per esempio $20-2\cdot3^2=20-2\cdot9=20-18=2$. Il puntino $\cdot$ indica la moltiplicazione e i due punti $:$ indicano la divisione.
:::

:::definizione{#proprieta-operazioni titolo="Commutativa, associativa e distributiva"}
Tre proprietà cambiano la forma di un calcolo e lasciano uguale il risultato.

- Proprietà **commutativa**. Scambiando gli addendi di una somma o i fattori di un prodotto il risultato resta lo stesso. Per esempio $3+5=5+3$ e $3\cdot5=5\cdot3$. Con le lettere, $a+b=b+a$ e $ab=ba$.
- Proprietà **associativa**. In una somma di tre addendi, o in un prodotto di tre fattori, il risultato è lo stesso qualunque coppia di termini vicini si calcoli per prima. Per esempio $(2+3)+4=2+(3+4)=9$. Con le lettere, $(a+b)+c=a+(b+c)$ e $(ab)c=a(bc)$.
- Proprietà **distributiva**. Moltiplicare un numero per una somma equivale a moltiplicarlo per ciascun addendo e sommare i due prodotti. Per esempio $2\cdot(3+4)=2\cdot3+2\cdot4=14$. Con le lettere, $a(b+c)=ab+ac$. La stessa uguaglianza, letta da destra verso sinistra, serve per raccogliere un fattore comune, come in $6+8=2\cdot3+2\cdot4=2\cdot(3+4)$.

La sottrazione non consente gli stessi scambi o raggruppamenti. Per esempio $(9-5)-2=4-2=2$, mentre $9-(5-2)=9-3=6$. Per calcolare una differenza usando le proprietà della somma si scrive prima ogni sottrazione come addizione dell’opposto. Per esempio $9-5-2=(9+(-5))+(-2)$ e, per la proprietà associativa, $9+((-5)+(-2))=9+(-7)=2$. Con le lettere, da $(a+(-b))+(-c)$ si arriva così a $a+((-b)+(-c))$.
:::

:::esempio{titolo="Due spostamenti successivi"}
Si parte da $-5$, si aggiunge $8$ e poi si sottrae $2$. Nella figura la prima freccia è lunga $8$ unità e va da $-5$ verso destra. Per arrivare a zero servono $5$ unità e ne restano $8-5=3$, quindi il primo spostamento supera lo zero di tre unità e arriva a $3$. La seconda freccia, lunga $2$ unità verso sinistra, porta da $3$ a $1$. In formula, $-5+8-2=3-2=1$.

Sommando prima i due spostamenti, la variazione complessiva è $8-2=6$ e quindi $-5+6=1$.

::grafico{xmin=-6.5 xmax=4.5 ymin=-0.65 ymax=1.55 uguale=1 assi=0 vettori="-6.1,0,4.18,0;-5,0.54,3,0.54;3,1.13,1,1.13" punti="-5,0,pieno;1,0,pieno;3,0,pieno" segmenti="-5,0.05,-5,0.56;1,0.05,1,1.13;3,0.05,3,1.13" etichette="-5.17,-0.29,−5;0.92,-0.29,1;2.93,-0.29,3;-1.24,0.77,+8;1.84,1.35,−2;4.24,0.09,x" titolo="Somma con segno sulla retta numerica"}
:::

::::teorema{titolo="Segno del prodotto e del quoziente"}
Due numeri diversi da zero sono **concordi** se hanno lo stesso segno e **discordi** se hanno segni diversi.

Il prodotto di due fattori diversi da zero è positivo se i fattori sono concordi ed è negativo se sono discordi. Per il quoziente vale lo stesso criterio, quando dividendo e divisore sono entrambi diversi da zero.

Per esempio $(-3)\cdot(-4)=12$, $3\cdot(-4)=-12$ e $(-12):4=-3$.
:::dimostrazione
Siano $a$ e $b$ due numeri positivi. La somma di un numero e del suo opposto è zero, quindi $b+(-b)=0$. Si moltiplica per $a$ e si applica la proprietà distributiva.

$$
ab+a(-b)=a\cdot(b+(-b))=a\cdot0=0.
$$

I numeri $ab$ e $a(-b)$ hanno somma zero, quindi $a(-b)$ è l’opposto di $ab$, cioè $a(-b)=-ab$. Poiché $ab$ è positivo, il prodotto $a(-b)$ è negativo. Si ricava allo stesso modo $(-a)b=-ab$.

Per il prodotto di due numeri negativi si applica di nuovo la distributiva a $(-a)(b+(-b))$. Si ottiene $(-a)b+(-a)(-b)=(-a)\cdot0=0$. Il prodotto $(-a)(-b)$ risulta quindi l’opposto di $(-a)b=-ab$, cioè $(-a)(-b)=ab$, che è positivo.

Il segno del quoziente segue da quello del prodotto, perché $a:b$ è il numero che moltiplicato per $b$ deve dare $a$.
:::
::::

:::attenzione{titolo="Divisore zero e precedenza"}
Per $b\ne0$ si ha $0:b=0$. Per esempio $0:5=0$, perché $0\cdot5=0$.

Il quoziente $a:0$ è sempre escluso.

- Quando $a\ne0$, per esempio in $7:0$, nessun numero moltiplicato per zero restituisce $7$, perché ogni numero moltiplicato per zero dà zero.
- Quando $a=0$, cioè in $0:0$, ogni numero moltiplicato per zero dà zero. Il quoziente non sarebbe univoco, cioè non sarebbe un numero solo.

Nella catena $24:6\cdot2$ divisione e prodotto hanno la stessa priorità, quindi si procede da sinistra e si calcola $(24:6)\cdot2=4\cdot2=8$. Se il divisore deve essere $6\cdot2$, serve la scrittura $24:(6\cdot2)$ e il risultato è $24:12=2$. I due raggruppamenti determinano calcoli diversi.
:::

:::esempio{titolo="Distribuire il segno a una somma"}
Si vuole calcolare $14-(9-2(4-7))$. Si parte dal raggruppamento più interno, che è $4-7$.

$$
\begin{aligned}
4-7&=-3\\[6pt]
2(4-7)&=2\cdot(-3)=-6\\[6pt]
9-2(4-7)&=9-(-6)=9+6=15\\[6pt]
14-(9-2(4-7))&=14-15=-1.
\end{aligned}
$$

Si arriva allo stesso numero distribuendo il segno meno al gruppo sottratto. Sottrarre $9-2(4-7)$ equivale a moltiplicarlo per $-1$ e sommare. Per la proprietà distributiva il fattore $-1$ cambia il segno di ciascun termine, quindi $-(9-2(4-7))=-9+2(4-7)$. Si ottiene

$$
14-9+2(4-7)=5+2\cdot(-3)=5-6=-1.
$$
:::

## Divisibilità e multipli comuni

:::definizione{#divisibilita titolo="Divisori, massimo comune divisore e minimo comune multiplo"}
In questo blocco i numeri sono interi positivi. Il numero $d$ è un **divisore** di $a$ quando $a=dq$ per un intero $q$, cioè quando $a:d$ è intero. Si dice anche che $a$ è un multiplo di $d$. Per esempio $4$ è un divisore di $12$, perché $12=4\cdot3$.

- Il **massimo comune divisore** $\operatorname{MCD}(a,b)$, in sigla MCD, è il maggiore fra i divisori positivi comuni.
- Il **minimo comune multiplo** $\operatorname{mcm}(a,b)$, in sigla mcm, è il minore fra i multipli positivi comuni.

Per $8$ e $12$ i divisori comuni sono $1,2,4$, quindi $\operatorname{MCD}(8,12)=4$. I multipli di $8$ sono $8,16,24,\ldots$ e quelli di $12$ sono $12,24,\ldots$, quindi $\operatorname{mcm}(8,12)=24$.

Se il MCD vale $1$, i due numeri sono coprimi, o primi fra loro. Per esempio $9$ e $10$ sono coprimi, perché i divisori di $9$ sono $1,3,9$ e quelli di $10$ sono $1,2,5,10$. Lo sono anche se ciascuno ha divisori propri, cioè diversi da $1$ e dal numero stesso.

Un numero primo è un intero maggiore di $1$ che ha come divisori soltanto $1$ e sé stesso, come $2,3,5,7,11$. Ogni intero maggiore di $1$ si scrive come prodotto di numeri primi, e questa scrittura è la scomposizione in fattori primi. Per $72$ si divide per il primo più piccolo finché la divisione dà un intero, poi si passa al primo successivo.

$$
72=2\cdot36=2\cdot2\cdot18=2\cdot2\cdot2\cdot9=2\cdot2\cdot2\cdot3\cdot3=2^3\cdot3^2.
$$

Allo stesso modo $120=2^3\cdot3\cdot5$. Dalle scomposizioni si leggono il MCD e il mcm.

- Un divisore comune prende ogni primo al massimo con l’esponente minore, perché deve dividere entrambi i numeri. Il MCD è perciò il prodotto dei primi comuni con l’esponente minore.
- Un multiplo comune contiene ogni primo almeno con l’esponente maggiore, perché deve essere divisibile per entrambi i numeri. Il mcm è perciò il prodotto di tutti i primi presenti con l’esponente maggiore.

Per $72$ e $120$ si ottiene

$$
\operatorname{MCD}(72,120)=2^3\cdot3=24,\qquad
\operatorname{mcm}(72,120)=2^3\cdot3^2\cdot5=360.
$$

I quozienti $72:24=3$ e $120:24=5$ sono coprimi, perché dividendo per il MCD si toglie tutto il fattore comune.
:::

::::teorema{titolo="Algoritmo di Euclide"}
Un **algoritmo** è un procedimento formato da passi che si ripetono fino al risultato. L’algoritmo di Euclide calcola il MCD con una serie di divisioni, senza scomporre in fattori primi.

La **divisione con resto** di $a$ per $b$ trova il quoziente $q$, cioè quante volte $b$ sta in $a$, e il **resto** $r$, cioè quanto avanza. In formula, $a=bq+r$ con $0\le r<b$. Per esempio $17=5\cdot3+2$.

Per due interi positivi $a$ e $b$, con $a=bq+r$ la loro divisione con resto, vale

$$
\operatorname{MCD}(a,b)=\begin{cases}\operatorname{MCD}(b,r)&\text{se }r>0\\ b&\text{se }r=0.\end{cases}
$$

Si ripete quindi la divisione, ogni volta fra il divisore e il resto del passo precedente, fino al resto zero.
:::dimostrazione
Se un numero $d$ divide due numeri $dh$ e $dk$, allora divide anche la loro somma e la loro differenza, perché per la proprietà distributiva $dh+dk=d(h+k)$ e $dh-dk=d(h-k)$. Inoltre, se $d$ divide $b$, divide anche il suo multiplo $bq$.

Sia $d$ un divisore di $a$ e di $b$. Allora $d$ divide $bq$ e quindi divide anche la differenza $a-bq=r$. Viceversa, sia $d$ un divisore di $b$ e di $r$. Allora $d$ divide $bq$ e quindi divide anche la somma $bq+r=a$. Le due coppie hanno dunque gli stessi divisori comuni.

Se $r=0$, allora $a=bq$ e quindi $b$ divide $a$. Poiché nessun divisore di $b$ supera $b$, il MCD è $b$.

In ogni divisione il resto è minore del divisore, e il divisore è il resto del passo precedente. Ripetendo la divisione, i resti positivi diminuiscono ogni volta, quindi a un certo passo il resto vale zero. L’ultimo divisore usato è il MCD.
:::
::::

:::esempio{titolo="Calcolare il MCD con i resti"}
Per $132$ e $84$ si calcolano le divisioni con resto. In ogni riga il divisore e il resto diventano il dividendo e il divisore della riga successiva.

$$
\begin{aligned}
132&=84\cdot1+48\\
84&=48\cdot1+36\\
48&=36\cdot1+12\\
36&=12\cdot3+0.
\end{aligned}
$$

Il resto dell’ultima divisione è zero, quindi il massimo comune divisore è l’ultimo divisore usato e vale $12$. I numeri $132:12=11$ e $84:12=7$, ottenuti dividendo i dati iniziali per $12$, hanno come unico divisore comune $1$.
:::

:::esempio{titolo="Ritrovare un istante comune"}
Due segnali, A e B, partono insieme all’istante $0$ e si ripetono ogni $8$ e ogni $12$ secondi. Si cerca il primo istante, dopo la partenza, in cui si ripetono insieme.

I primi istanti positivi del segnale A sono $8$, $16$ e $24$, multipli di $8$. Quelli del segnale B sono $12$ e $24$, multipli di $12$. L’incontro richiede un istante comune alle due sequenze, cioè un multiplo comune di $8$ e di $12$, e il primo è $\operatorname{mcm}(8,12)=24$. I segnali si ritrovano quindi dopo $24\,\mathrm{s}$, dove $\mathrm{s}$ è il simbolo del secondo.

Il **periodo** di un segnale è il tempo fra una ripetizione e la successiva, e l’istante $24\,\mathrm{s}$ corrisponde a $24:8=3$ periodi del segnale A e a $24:12=2$ periodi del segnale B. Nella figura la riga superiore riporta gli istanti di A e la riga inferiore quelli di B.

::grafico{xmin=-2 xmax=27 ymin=-1.2 ymax=3.2 assi=0 vettori="-1,0,25.9,0" linee="0,2 24,2;0,1 24,1" punti="0,2,pieno;8,2,pieno;16,2,pieno;24,2,pieno;0,1,pieno;12,1,pieno;24,1,pieno" segmenti="24,0.05,24,2.13" etichette="-1,2.56,A;-1,1.47,B;0,-0.67,0;7.65,-0.67,8;11.5,-0.67,12;15.55,-0.67,16;23.5,-0.67,24;26,0.25,t" titolo="Il primo incontro dopo la partenza avviene a 24 secondi"}
:::

## Frazioni equivalenti e operazioni

::::teorema{#frazioni titolo="Equivalenza e confronto fra frazioni"}
Due frazioni sono **equivalenti** quando rappresentano lo stesso numero. Moltiplicando numeratore e denominatore per uno stesso numero diverso da zero si ottiene una frazione equivalente, per esempio $\dfrac23=\dfrac{2\cdot2}{3\cdot2}=\dfrac46$. Il passaggio inverso, cioè dividere per un divisore comune, si dice semplificare la frazione.

Per $a,b,c,d\in\mathbb Z$, con $b\ne0$ e $d\ne0$, vale $\dfrac ab=\dfrac cd$ *se e solo se* $ad=bc$. L’espressione «se e solo se» indica che le due uguaglianze sono entrambe vere oppure entrambe false. I prodotti $ad$ e $bc$ si chiamano **prodotti in croce**. Per $\dfrac23$ e $\dfrac46$ valgono $2\cdot6=12$ e $3\cdot4=12$.

Se inoltre i due denominatori sono positivi, l’ordine fra le frazioni è lo stesso ordine fra $ad$ e $bc$. Per $\dfrac23$ e $\dfrac34$ i prodotti sono $2\cdot4=8$ e $3\cdot3=9$. Poiché $8<9$, risulta $\dfrac23<\dfrac34$.
:::dimostrazione
I due **membri** di un’uguaglianza sono le espressioni a sinistra e a destra del segno di uguale. Si moltiplicano entrambi i membri di $\dfrac ab=\dfrac cd$ per $bd$, che è diverso da zero perché lo sono $b$ e $d$. A sinistra si semplifica $b$ e resta $ad$, a destra si semplifica $d$ e resta $bc$. Si passa così dall’uguaglianza fra frazioni all’uguaglianza fra prodotti $ad=bc$. Viceversa, dividendo per $bd$ entrambi i membri di $ad=bc$ si torna alla scrittura iniziale.

Per il confronto si usa una proprietà delle disuguaglianze. Moltiplicando entrambi i membri per un numero positivo il verso si conserva. Quando $b>0$ e $d>0$, anche $bd$ è positivo, quindi la moltiplicazione per $bd$ conserva il verso. Perciò $\dfrac ab<\dfrac cd$ equivale a $ad<bc$.
:::
::::

:::esempio{titolo="Ridurre e scegliere un denominatore comune"}
Ridurre una frazione **ai minimi termini** significa dividere numeratore e denominatore per il loro MCD. Per $\dfrac{18}{24}$ il MCD di $18$ e $24$ è $6$, quindi

$$
\frac{18}{24}=\frac{18:6}{24:6}=\frac34.
$$

Numeratore e denominatore diventano coprimi.

Per sommare $\dfrac23$ e $\dfrac14$ si sceglie una partizione dell’unità comune ai due addendi, cioè una divisione dell’unità in parti uguali con cui si misurano sia i terzi sia i quarti. I dodicesimi vanno bene perché $12$ è multiplo di $3$ e di $4$.

$$
\frac23=\frac{2\cdot4}{3\cdot4}=\frac8{12},\qquad
\frac14=\frac{1\cdot3}{4\cdot3}=\frac3{12}.
$$

Due terzi occupano otto dodicesimi e un quarto ne occupa tre. Con lo stesso denominatore si sommano i numeratori.

$$
\frac23+\frac14=\frac8{12}+\frac3{12}=\frac{11}{12}.
$$

Nella figura l’unità è divisa in $12$ parti e le due quantità sono affiancate. L’ultima parte resta vuota, perché serve ancora un dodicesimo per raggiungere uno.

::grafico{xmin=-0.8 xmax=12.8 ymin=-0.65 ymax=2.25 assi=0 poligoni="0,0.68 8,0.68 8,1.45 0,1.45;8,0.68 11,0.68 11,1.45 8,1.45" linee="0,0.68 12,0.68 12,1.45 0,1.45 0,0.68;1,0.68 1,1.45;2,0.68 2,1.45;3,0.68 3,1.45;4,0.68 4,1.45;5,0.68 5,1.45;6,0.68 6,1.45;7,0.68 7,1.45;8,0.68 8,1.45;9,0.68 9,1.45;10,0.68 10,1.45;11,0.68 11,1.45" etichette="3.31,1.84,8 parti;8.71,1.84,3 parti;0,-0.05,0;11.79,-0.05,1" titolo="Somma di otto dodicesimi e tre dodicesimi nella stessa unità"}
:::

::::teorema{titolo="Prodotto e divisione di frazioni"}
Il prodotto di due frazioni ha per numeratore il prodotto dei numeratori e per denominatore il prodotto dei denominatori. Per esempio $\dfrac23\cdot\dfrac45=\dfrac{2\cdot4}{3\cdot5}=\dfrac8{15}$.

Il reciproco di una frazione diversa da zero si ottiene scambiando numeratore e denominatore. Il reciproco di $\dfrac45$ è $\dfrac54$, perché $\dfrac45\cdot\dfrac54=\dfrac{20}{20}=1$. Dividere per una frazione equivale a moltiplicare per il suo reciproco. Per esempio $\dfrac23:\dfrac45=\dfrac23\cdot\dfrac54=\dfrac{10}{12}=\dfrac56$.

Con le lettere, siano $\dfrac ab$ e $\dfrac cd$ due razionali con $b\ne0$ e $d\ne0$. Il prodotto è $\dfrac{ac}{bd}$. Se $c\ne0$, il quoziente è $\dfrac ab\cdot\dfrac dc$. Il numero $\dfrac dc$ è il reciproco del divisore.
:::dimostrazione
La frazione $\dfrac ab$ è il prodotto di $a$ per $\dfrac1b$, che è il reciproco di $b$. Quindi $\dfrac ab\cdot\dfrac cd=a\cdot\dfrac1b\cdot c\cdot\dfrac1d$. Per calcolare il prodotto si raggruppano i numeratori e i reciproci dei denominatori, perché il prodotto è associativo e commutativo. Si ottiene $(ac)\cdot\left(\dfrac1b\cdot\dfrac1d\right)$. Il numero $\dfrac1b\cdot\dfrac1d$ è il reciproco di $bd$, perché moltiplicato per $bd$ dà $1$. Si ottiene così il prodotto dei numeratori diviso quello dei denominatori, $\dfrac{ac}{bd}$.

Per la divisione si cerca un razionale $q$ che soddisfi $q\cdot\dfrac cd=\dfrac ab$, cioè il numero che moltiplicato per il divisore dà il dividendo. Poiché $\dfrac cd\cdot\dfrac dc=1$, la moltiplicazione di entrambi i membri per $\dfrac dc$ lascia $q$ a sinistra e dà $q=\dfrac ab\cdot\dfrac dc$. Il controllo inverso conferma che il valore trovato restituisce il dividendo, perché $\dfrac ab\cdot\dfrac dc\cdot\dfrac cd=\dfrac ab\cdot1=\dfrac ab$.
:::
::::

:::esempio{titolo="Una frazione di una frazione"}
Si prendano tre quarti di due terzi di un rettangolo unitario, cioè di area $1$. Prendere «tre quarti di» una quantità significa moltiplicarla per $\dfrac34$. Si divide il rettangolo in tre colonne uguali e in quattro righe uguali. Si formano $3\cdot4=12$ celle uguali. Due colonne rappresentano $\dfrac23$ del rettangolo. Se si prendono tre righe su quattro in quelle due colonne, cioè i loro $\dfrac34$, si selezionano $2\cdot3=6$ delle dodici celle complessive. Sono le celle colorate nella figura. L’area selezionata è quindi $\dfrac{6}{12}=\dfrac12$, come dà la regola del prodotto $\dfrac34\cdot\dfrac23=\dfrac{3\cdot2}{4\cdot3}=\dfrac6{12}$.

::grafico{xmin=-0.45 xmax=3.45 ymin=-0.35 ymax=4.65 uguale=1 assi=0 poligoni="0,0 2,0 2,3 0,3" linee="0,0 3,0 3,4 0,4 0,0;1,0 1,4;2,0 2,4;0,1 3,1;0,2 3,2;0,3 3,3" titolo="Due colonne per tre righe danno sei delle dodici celle"}
:::

:::attenzione{titolo="Semplificare un fattore comune a tutti i termini"}
In una frazione si semplifica un numero soltanto quando è un fattore di tutto il numeratore e di tutto il denominatore. Nella frazione $\dfrac{6+9}{3}$ il numeratore è una somma. Il numero $3$ è un fattore di entrambi gli addendi, quindi si raccoglie da tutta la somma, $6+9=3(2+3)$, e si semplifica con il denominatore.

$$
\frac{6+9}{3}=\frac{3(2+3)}3=2+3=5.
$$

Il calcolo $\dfrac{6+9}{6}=1+9$ è errato, perché il $6$ del denominatore è stato semplificato soltanto con il primo addendo. Dividere per sei significa dividere ciascun addendo per sei, quindi il valore è $\dfrac{15}{6}=\dfrac52$, mentre $1+9=10$.
:::

## Decimali finiti e periodici

::::teorema{#decimali titolo="Resto della divisione e scrittura decimale"}
La scrittura decimale di una frazione si ottiene dividendo il numeratore per il denominatore. I casi sono due.

- La divisione termina. La scrittura è **finita**, cioè ha un numero finito di cifre dopo la virgola, come in $\dfrac34=0{,}75$.
- La divisione non termina e da un certo punto un gruppo di cifre, il **periodo**, si ripete senza fine. La scrittura è **periodica**, come in $\dfrac13=0{,}333\ldots$, e il periodo si scrive una volta con un trattino sopra, $\dfrac13=0{,}\overline3$.

Un razionale ha scrittura decimale finita oppure periodica.

Per una frazione ridotta con denominatore positivo, la scrittura è finita esattamente quando il denominatore, scomposto in fattori primi, contiene soltanto i primi $2$ e $5$. In formula, il denominatore è della forma $2^u5^v$, con $u,v$ interi non negativi, cioè maggiori o uguali a zero. Una potenza con esponente zero vale $1$, quindi anche il denominatore $1=2^0\cdot5^0$ soddisfa la condizione.

Per esempio $\dfrac7{40}$ ha scrittura finita, perché $40=2^3\cdot5$, mentre $\dfrac7{24}$ ha scrittura periodica, perché $24=2^3\cdot3$ contiene il primo $3$.
:::dimostrazione
Dopo la parte intera, ogni cifra decimale si ottiene moltiplicando il resto per $10$ e dividendo per il denominatore $b$. Il resto di una divisione per $b$ è minore di $b$, quindi i resti possibili sono $0,1,\ldots,b-1$. Se compare zero, la divisione termina e la scrittura è finita. Altrimenti i resti sono fra $1$ e $b-1$, quindi entro $b$ passi compare un resto già ottenuto. I passi successivi si ripetono, perché partono dallo stesso valore, e la scrittura è periodica.

Un decimale con $k$ cifre dopo la virgola è una frazione con denominatore $10^k$, per esempio $0{,}175=\dfrac{175}{1000}$ con $k=3$. Poiché $10=2\cdot5$, si ha $10^k=2^k5^k$. Dopo la riduzione il denominatore è un divisore di $10^k$, quindi i primi ammessi sono $2$ e $5$.

Viceversa, se il denominatore è $2^u5^v$, si sceglie $k\ge\max(u,v)$, dove $\max(u,v)$ indica il maggiore fra $u$ e $v$. Il denominatore divide $10^k=2^k5^k$, perché i suoi esponenti sono minori o uguali a $k$. Moltiplicando numeratore e denominatore per il quoziente fra $10^k$ e $2^u5^v$ si ottiene una frazione equivalente con denominatore $10^k$, quindi la scrittura è finita. Per $\dfrac7{40}$ si ha $k=3$ e $\dfrac7{40}=\dfrac{7\cdot25}{40\cdot25}=\dfrac{175}{1000}=0{,}175$.
:::
::::

:::esempio{titolo="Riconoscere un periodo dai resti"}
Si divide $7$ per $24$. Il $24$ sta zero volte nel $7$, quindi la parte intera è zero e il primo resto è $7$. A ogni passo si moltiplica il resto per $10$ e si divide per $24$. Il quoziente è la nuova cifra decimale e il resto passa alla riga successiva della tabella.

| Resto in ingresso | Dieci volte il resto | Cifra | Nuovo resto |
| --- | --- | --- | --- |
| $7$ | $70$ | $2$ | $22$ |
| $22$ | $220$ | $9$ | $4$ |
| $4$ | $40$ | $1$ | $16$ |
| $16$ | $160$ | $6$ | $16$ |

Nell’ultima riga il resto $16$ ricompare, perciò la cifra $6$ è prodotta a ogni passo successivo. La scrittura è $0{,}291666\ldots=0{,}291\overline6$. Il periodo è $6$. Le cifre $291$ formano la parte decimale che precede il periodo, detta parte non periodica o **antiperiodo**.
:::

:::esempio{titolo="Dalla scrittura periodica alla frazione"}
La frazione che ha una data scrittura decimale si chiama **frazione generatrice**. Si cerca quella di $z=0{,}2\overline{15}=0{,}2151515\ldots$ L’antiperiodo è $2$ e il periodo è $15$.

Il prodotto per $10$ porta la virgola all’inizio del periodo. Un’ulteriore moltiplicazione per $100$ sposta la virgola di due posti, quante sono le cifre del periodo, e lascia dopo la virgola la stessa successione. Perciò

$$
\begin{aligned}
10z&=2{,}\overline{15}\\
1000z&=215{,}\overline{15}\\
1000z-10z&=215{,}\overline{15}-2{,}\overline{15}\\
990z&=213\\
z&=\frac{213}{990}=\frac{71}{330}.
\end{aligned}
$$

Le parti periodiche si cancellano nella differenza. Nell’ultimo passaggio si divide per $990$ e si semplifica per $3$. Il valore ottenuto è maggiore di $0{,}2$ ed è minore di $0{,}22$, in accordo con le prime due cifre della scrittura iniziale.
:::

## Operazioni e interpretazione nei problemi

:::esempio{#problemi titolo="Scegliere il quoziente e interpretare il resto"}
Una scatola contiene $31$ penne rosse e $23$ blu. Ogni pacchetto completo contiene $4$ rosse e $3$ blu. Si cercano il numero di pacchetti completi e il numero di penne che avanzano.

Le divisioni con resto $31=7\cdot4+3$ e $23=7\cdot3+2$ mostrano che sia le rosse sia le blu bastano per $7$ pacchetti. Un ottavo richiederebbe $8\cdot4=32$ penne rosse e $8\cdot3=24$ blu, oltre le quantità presenti. Restano dunque tre rosse e due blu fuori dai pacchetti. Con due quozienti diversi, il numero di pacchetti completi sarebbe il minore dei due.

Se si regalano due pacchetti rimangono $7-2=5$ pacchetti e le $3+2=5$ penne sciolte. Ogni pacchetto contiene $4+3=7$ penne, quindi il totale è $5\cdot7+5=40$ penne. Si ottiene lo stesso risultato sottraendo le $2\cdot7=14$ penne regalate dalle $31+23=54$ iniziali, perché $54-14=40$.

Il quoziente conta i pacchetti completi e il resto conta penne singole. Pacchetti e penne sono due unità di misura diverse, perciò i $5$ pacchetti sono trasformati in penne con il prodotto $5\cdot7$ prima di sommare le $5$ penne sciolte. Le due unità di misura distinguono anche i passaggi del controllo.
:::

:::esempio{titolo="Riconoscere l’intero a cui si riferisce una frazione"}
Un recipiente è pieno d’acqua per $\dfrac34$ della capacità, cioè della quantità massima che contiene. Si preleva $\dfrac13$ dell’acqua presente. Poiché il terzo è riferito all’acqua, la quantità prelevata corrisponde a $\dfrac13\cdot\dfrac34=\dfrac3{12}=\dfrac14$ della capacità totale. La parte che resta è

$$
\frac34-\frac14=\frac24=\frac12.
$$

Si controlla il risultato osservando che, tolto $\dfrac13$ dell’acqua, ne resta $1-\dfrac13=\dfrac23$. Il prodotto $\dfrac23\cdot\dfrac34=\dfrac6{12}=\dfrac12$ restituisce la stessa frazione di capacità.

Nella figura il recipiente è diviso in quattro parti uguali. Le prime due restano piene e la terza rappresenta l’acqua prelevata.

::grafico{xmin=-0.6 xmax=4.6 ymin=-0.65 ymax=1.85 assi=0 poligoni="0,0.08 2,0.08 2,0.86 0,0.86;2,0.08 3,0.08 3,0.86 2,0.86" linee="0,0.08 4,0.08 4,0.86 0,0.86 0,0.08;1,0.08 1,0.86;2,0.08 2,0.86;3,0.08 3,0.86" etichette="0.48,1.22,Resta;2.14,1.22,Prelievo" titolo="La terza parte rappresenta l’acqua prelevata"}
:::
