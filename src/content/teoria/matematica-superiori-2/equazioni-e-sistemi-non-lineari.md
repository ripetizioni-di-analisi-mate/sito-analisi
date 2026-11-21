---
titolo: "Equazioni e sistemi non lineari"
sommario: "Scomposizioni, biquadratiche, equazioni con radici o valore assoluto, sistemi e verifica delle soluzioni."
---

## Scomporre un’equazione in fattori

::::teorema{#fattorizzazione titolo="Annullamento di un prodotto"}
I **fattori** di un prodotto sono le espressioni che si moltiplicano: in $x(x-3)(x+3)$ i fattori sono $x$, $x-3$ e $x+3$. Una **radice**, o **soluzione**, di un’equazione è un valore dell’incognita che rende vera l’uguaglianza. Il **dominio** è l’insieme dei valori dell’incognita per cui tutte le espressioni sono definite.

La **legge di annullamento del prodotto** dice che, se due o più fattori sono definiti nel dominio considerato, il loro prodotto è zero esattamente quando almeno un fattore è zero. Il **primo membro** di un’equazione è l’espressione a sinistra del segno $=$, il **secondo membro** quella a destra. Perciò un’equazione con secondo membro zero si risolve scrivendo il primo membro come prodotto e uguagliando a zero un fattore alla volta.
:::dimostrazione
Se un fattore vale zero, il prodotto vale zero, perché ogni numero moltiplicato per zero dà zero.

Viceversa, siano $a$ e $b$ due fattori con $ab=0$ e si supponga $a\ne0$. Moltiplicando entrambi i membri per il reciproco $\dfrac1a$ si ottiene $\dfrac1a\cdot ab=\dfrac1a\cdot0$, cioè $b=0$. Quindi almeno uno dei due fattori si annulla. Con tre o più fattori si ripete lo stesso ragionamento, considerando il prodotto dei primi fattori come un unico fattore.
:::
::::

:::esempio{titolo="Ciascun fattore dà un caso"}
In $x^3-9x=0$ si **raccoglie** $x$, cioè lo si scrive una sola volta davanti a ciò che resta dei due termini. Poi si scompone $x^2-9$ con la **differenza di quadrati** $a^2-b^2=(a-b)(a+b)$, con $a=x$ e $b=3$:

$$
\begin{aligned}
x^3-9x&=x(x^2-9)\\[6pt]
&=x(x-3)(x+3)=0.
\end{aligned}
$$

Ogni fattore dà una radice: $x=0$, poi $x-3=0$ cioè $x=3$, infine $x+3=0$ cioè $x=-3$. L’**insieme delle soluzioni** è quindi $\{-3,0,3\}$. Nel grafico le tre soluzioni sono le **ascisse** (coordinate $x$) dei tre punti in cui la curva incontra l’asse $x$.

Dividendo subito per $x$ si otterrebbe $x^2=9$ e la radice zero andrebbe persa. La divisione per $x$ ha senso solo per $x\ne0$, quindi si divide dopo aver verificato a parte il caso $x=0$.

::grafico{f="x^3-9*x" xmin=-3.8 xmax=3.8 ymin=-14 ymax=14 punti="-3,0,pieno;0,0,pieno;3,0,pieno" titolo="I tre fattori lineari individuano tre incontri con l’asse"}
:::

:::osservazione{titolo="Zeri distinti e molteplicità"}
In $x^2(x-2)^3=0$ le radici distinte sono due, $0$ e $2$. Il fattore $x$ compare due volte, perché $x^2=x\cdot x$, e il fattore $x-2$ compare tre volte. Il numero di volte in cui compare il fattore di una radice è la **molteplicità** della radice: lo zero ha molteplicità $2$ e il numero $2$ ha molteplicità $3$. La somma delle molteplicità, $2+3=5$, è il **grado** del polinomio, cioè il suo esponente più alto. Il coefficiente del termine di grado più alto è il **coefficiente principale**; se vale $1$ il polinomio è **monico**, come $x(x+1)(x-2)=x^3-x^2-2x$.

Vicino a zero, $x^2$ è positivo ai due lati mentre $(x-2)^3$ è negativo. Il prodotto è quindi negativo a sinistra e a destra di $0$, perciò il grafico tocca l’asse in $0$ e resta sotto. Attraversando $2$, il fattore cubico cambia segno mentre $x^2$ resta positivo, perciò il grafico attraversa l’asse. In generale, in una radice di molteplicità pari il grafico tocca l’asse senza attraversarlo, in una di molteplicità dispari lo attraversa. Contare i fattori distingue la molteplicità dal numero di radici.
:::

## Equazioni biquadratiche

::::teorema{#biquadratiche titolo="Dall’incognita al suo quadrato e ritorno"}
Un’equazione **biquadratica** ha la forma $ax^4+bx^2+c=0$ con $a\ne0$: contiene soltanto $x^4$, $x^2$ e un numero. Poiché $x^4=(x^2)^2$, si introduce l’**incognita ausiliaria** $t=x^2$ e l’equazione diventa di secondo grado in $t$:

$$
at^2+bt+c=0.
$$

Si risolve l’equazione in $t$, si tengono solo le radici **non negative**, cioè con $t\ge0$, e si ritorna a $x$ risolvendo $x^2=t$:

- ogni $t>0$ dà due valori opposti, $x=-\sqrt t$ e $x=\sqrt t$, scritti insieme $x=\pm\sqrt t$ (si legge «più o meno»);
- $t=0$ dà soltanto $x=0$;
- $t<0$ non dà alcun $x$ reale.
:::dimostrazione
Per ogni numero reale $x$ il quadrato $t=x^2$ è non negativo e $x^4=(x^2)^2=t^2$. Quindi ogni soluzione $x$ dà una soluzione $t\ge0$ dell’equazione in $t$. Viceversa, ogni $t>0$ trovato produce $x=-\sqrt t$ e $x=\sqrt t$, che hanno entrambi quadrato $t$. Il valore $t=0$ produce solo $x=0$. Nessun $t<0$ è il quadrato di un reale. Questi casi esauriscono la corrispondenza.
:::
::::

:::esempio{titolo="Quattro radici, oppure soltanto tre"}
In $x^4-5x^2+4=0$ si pone $t=x^2$ e si ottiene $t^2-5t+4=0$. I numeri $1$ e $4$ hanno somma $5$ e prodotto $4$, quindi $t^2-5t+4=(t-1)(t-4)$ e i due valori di $t$ sono $1$ e $4$. Poiché sono distinti e positivi, da $x^2=1$ si trova $x=\pm1$ e da $x^2=4$ si trova $x=\pm2$.

In $x^4-4x^2=0$, invece, l’equazione in $t$ è $t^2-4t=t(t-4)=0$ e dà $t=0$ e $t=4$. Da $t=0$ si ottiene solo $0$, da $t=4$ si ottengono $-2$ e $2$, quindi le soluzioni sono $-2$, $0$ e $2$. Nel grafico la curva tocca l’asse in zero senza cambiare segno, perché $x^4-4x^2=x^2(x^2-4)$, e il fattore $x^2$ dà allo zero molteplicità due.

::grafico{f="x^4-4*x^2" xmin=-2.65 xmax=2.65 ymin=-5 ymax=10 punti="-2,0,pieno;0,0,pieno;2,0,pieno" titolo="t = 0 dà una sola ascissa, mentre t = 4 ne dà due"}
:::

:::esempio{titolo="Una soluzione ausiliaria che non torna a x"}
Per $x^4+x^2-2=0$ si pone $t=x^2$ e si ottiene $t^2+t-2=(t+2)(t-1)=0$, con $t=-2$ e $t=1$. Il valore $-2$ va escluso prima di estrarre qualunque radice, perché un quadrato non è mai negativo. Da $t=1$ si ottengono $-1$ e $1$.

Se invece l’equazione ausiliaria fosse $(t-3)^2=0$, il valore $t=3$ sarebbe una **radice doppia**, con il fattore $t-3$ ripetuto due volte, e darebbe comunque due reali distinti, $-\sqrt3$ e $\sqrt3$. La distinzione fra i valori di $t$ e quelli di $x$ serve quindi anche in presenza di una radice doppia.
:::

:::osservazione{titolo="Riconoscere in anticipo il caso con tre radici"}
Una biquadratica ha esattamente tre radici reali distinte quando nell’equazione ausiliaria compaiono lo zero e una radice strettamente positiva, cioè maggiore di zero.

Lo zero è radice di $at^2+bt+c=0$ se e solo se $c=0$, perché sostituendo $t=0$ resta $c=0$. Il numero $c$ è il **termine noto**, il termine senza incognita. Con quel termine noto si raccoglie $t$, cioè $at^2+bt=t(at+b)$, e l’altra radice è $-\dfrac ba$. Il criterio è dunque

$$
\begin{cases}
c=0,\\[4pt]
-\frac ba>0.
\end{cases}
$$

Se l’altra radice è negativa o coincide con zero, rimane soltanto $x=0$. In nessun caso un singolo valore positivo di $t$ produce una sola ascissa reale.
:::

## Equazioni con una radice quadrata

::::teorema{#irrazionali titolo="Quando elevare al quadrato è reversibile"}
Un’equazione è **irrazionale** quando l’incognita compare sotto il segno di radice. Il **radicando** è l’espressione sotto la radice: in $\sqrt{x+6}$ il radicando è $x+6$. Il simbolo $\sqrt a$ indica la **radice quadrata principale** di $a$, cioè il numero non negativo che elevato al quadrato dà $a$. Per esempio $\sqrt9=3$, anche se pure $(-3)^2=9$. Le scritture $A(x)$ e $B(x)$ indicano due espressioni che contengono $x$.

Dove $A(x)$ e $B(x)$ sono definite, la relazione $\sqrt{A(x)}=B(x)$ equivale a

$$
\begin{cases}
A(x)\ge0,\\
B(x)\ge0,\\
A(x)=B(x)^2.
\end{cases}
$$

Con la condizione $B(x)\ge0$ il passaggio diventa **reversibile**, cioè non cambia l’insieme delle soluzioni.

:::dimostrazione
Una radice quadrata reale esiste per radicando non negativo e il suo valore è non negativo. Quindi, se $\sqrt{A(x)}=B(x)$, valgono $A(x)\ge0$ e $B(x)\ge0$. Due numeri uguali hanno quadrati uguali, perciò $A(x)=B(x)^2$.

Viceversa, se $A(x)=B(x)^2$ e $B(x)\ge0$, allora $B(x)$ è un numero non negativo con quadrato $A(x)$. Quindi $B(x)$ coincide con la radice principale $\sqrt{A(x)}$.
:::
::::

:::esempio{titolo="Un candidato ha il segno sbagliato"}
In $\sqrt{x+6}=x$ il radicando impone $x+6\ge0$, cioè $x\ge-6$, e il membro destro impone $x\ge0$. Elevando al quadrato si trova

$$
\begin{aligned}
x+6&=x^2\\[6pt]
x^2-x-6&=0\\[6pt]
(x-3)(x+2)&=0.
\end{aligned}
$$

I valori $3$ e $-2$ sono **candidati**, cioè valori da controllare nell’equazione di partenza. Il candidato $-2$ rispetta il solo dominio della radice, ma $\sqrt{-2+6}=\sqrt4=2$ e non vale $-2$. Un candidato di questo tipo si chiama **candidato estraneo**. Il candidato $3$ verifica $\sqrt9=3$, quindi l’unica soluzione è $x=3$. Nel grafico c’è una sola intersezione fra le due curve originali, il punto $P=(3,3)$.

Una funzione è **crescente** se al crescere di $x$ cresce anche il suo valore, **decrescente** se diminuisce. Poiché $\sqrt x$ cresce e $2-x$ decresce, l’equazione $\sqrt x=2-x$ ha al massimo una soluzione, che è $x=1$.

::grafico{f="sqrt(x+6);x" legenda="y=\sqrt{x+6};y=x" xmin=-6.7 xmax=5.5 ymin=-3 ymax=5.7 punti="3,3,pieno,P" titolo="Solo x = 3 rende uguali i membri originali"}
:::

:::osservazione{titolo="Stesso quadrato, segni diversi"}
L’equazione $\sqrt{x^2}=x$ ha dominio $\mathbb R$, l’insieme di tutti i numeri reali, perché $x^2\ge0$ per ogni $x$. Se si uguagliassero soltanto i quadrati si otterrebbe $x^2=x^2$, che è un’**identità**, cioè un’uguaglianza vera per ogni valore di $x$.

La relazione iniziale richiede però $x\ge0$, perché il membro sinistro è il **valore assoluto** $|x|$. Il valore assoluto di un numero è il numero stesso se è non negativo, il suo opposto se è negativo: $|5|=5$ e $|-3|=3$. Il caso mostra che un’equazione trasformata può perfino essere un’identità mentre l’uguaglianza originale vale soltanto su una parte del dominio.
:::

:::osservazione{titolo="Radici di indice dispari"}
La **radice cubica** $\sqrt[3]a$ è il numero reale che elevato al cubo dà $a$: $\sqrt[3]8=2$ e $\sqrt[3]{-27}=-3$, perché $(-3)^3=-27$. La radice cubica reale è l’inversa del cubo su tutta la retta. Può quindi essere negativa, e il cubo conserva l’equivalenza senza imporre un segno ai membri, perché numeri diversi hanno cubi diversi.

Per esempio, $\sqrt[3]{x-2}=-3$ equivale a $x-2=(-3)^3=-27$, da cui $x=-25$. Se il secondo membro contiene l’incognita, si applica lo stesso principio. Da $\sqrt[3]x=-x$ segue $x=(-x)^3=-x^3$, cioè $x^3+x=x(x^2+1)=0$. Il fattore $x^2+1$ vale almeno $1$, quindi resta la sola soluzione $0$, che verifica anche la relazione iniziale.
:::

## Equazioni con due radicali

:::esempio{#due-radicali titolo="Isolare e conservare il vincolo di segno"}
In $\sqrt{x+1}+\sqrt x=3$ entrambi i radicandi devono essere non negativi, e basta $x\ge0$, che comprende anche $x+1\ge0$. Si **isola** la prima radice, cioè la si lascia da sola nel primo membro: $\sqrt{x+1}=3-\sqrt x$. Il secondo membro deve essere non negativo, e $3-\sqrt x\ge0$ significa $\sqrt x\le3$, cioè $x\le9$. Nel dominio $0\le x\le9$ si può quindi elevare al quadrato.

A destra si usa il **quadrato del binomio** $(a-b)^2=a^2-2ab+b^2$ con $a=3$ e $b=\sqrt x$. Il termine $-2ab=-6\sqrt x$ è il **doppio prodotto**, o termine misto.

$$
\begin{aligned}
x+1&=9-6\sqrt x+x\\[6pt]
\sqrt x&=\frac43\\[6pt]
x&=\frac{16}{9}.
\end{aligned}
$$

Nel secondo passaggio si sottrae $x$ da entrambi i membri, si ottiene $6\sqrt x=8$ e si divide per $6$. L’ultimo quadrato è reversibile perché $\dfrac43>0$.

Il valore appartiene all’intervallo ammesso e le due radici originali sono $\sqrt{\dfrac{25}{9}}=\dfrac53$ e $\sqrt{\dfrac{16}{9}}=\dfrac43$, con somma $3$. Si è dovuto sviluppare il quadrato del binomio per conservare il termine misto, che è proprio quello da cui si ricava $\sqrt x$. Nel grafico il segmento verticale in $x=9$ segna il punto in cui $y=3-\sqrt x$ arriva sull’asse.

::grafico{f="sqrt(x+1);3-sqrt(x)" legenda="y=\sqrt{x+1};y=3-\sqrt x" xmin=-0.7 xmax=10.6 ymin=-0.6 ymax=4.3 punti="1.777777778,1.666666667,pieno,P;9,0,pieno" segmenti="9,0,9,3.4" titolo="Il membro con 3 − √x deve stare sull’asse o sopra di esso"}
:::

:::attenzione{titolo="Una verifica di segno può chiudere il calcolo"}
In $\sqrt{x+4}+\sqrt x=1$ il dominio è $x\ge0$. Per $x\ge0$ il radicando $x+4$ vale almeno $4$, quindi il primo radicale vale almeno $2$, mentre l’altro è non negativo. Perciò la somma vale almeno $2$ e non può valere $1$.

Se si isola la prima radice, $\sqrt{x+4}=1-\sqrt x$, e si eleva al quadrato senza controllare il segno, si arriva a

$$
\begin{aligned}
x+4&=1-2\sqrt x+x\\[6pt]
2\sqrt x&=-3\\[6pt]
\sqrt x&=-\frac32.
\end{aligned}
$$

Un altro quadrato farebbe comparire il candidato $\dfrac94$, ma la radice principale non può essere negativa. Fermarsi alla prima condizione impossibile evita il candidato estraneo.
:::

:::esempio{titolo="Una differenza di radicali e un valore di confine"}
In $\sqrt{x+4}-\sqrt x=k$ la lettera $k$ è un **parametro**, cioè un numero fissato ma non specificato. Si cercano le soluzioni per $k>0$, con dominio $x\ge0$. Dopo aver isolato la prima radice, $\sqrt{x+4}=k+\sqrt x$, il secondo membro è positivo sul dominio, perché $k>0$ e $\sqrt x\ge0$. Elevando al quadrato si trova

$$
\begin{aligned}
x+4&=k^2+2k\sqrt x+x\\[6pt]
4&=k^2+2k\sqrt x\\[6pt]
\sqrt x&=\frac{4-k^2}{2k}.
\end{aligned}
$$

Dividere per $2k$ è lecito perché $k>0$, e il risultato è uguale a $\sqrt x$, quindi deve essere non negativo. Poiché il denominatore $2k$ è positivo, occorre $4-k^2\ge0$, cioè $k^2\le4$. Per $k=2$ si ha $\sqrt x=0$ e l’unica soluzione è $x=0$. Per $k=1$ si ha $\sqrt x=\dfrac32$ e $x=\dfrac94$. La sostituzione restituisce $\sqrt{\dfrac{25}{4}}-\sqrt{\dfrac94}=\dfrac52-\dfrac32=1$. Con $k>2$ il valore $\dfrac{4-k^2}{2k}$ è negativo, quindi la condizione di segno non è soddisfatta e non ci sono soluzioni. Per questo non si eleva una seconda volta al quadrato.
:::

## Valore assoluto e suddivisione in casi

::::teorema{#assoluto titolo="Il segno determina il ramo da usare"}
L’**argomento** di un valore assoluto è l’espressione al suo interno: in $|2x-1|$ l’argomento è $2x-1$. Affinché $|A(x)|=B(x)$ possa valere occorre $B(x)\ge0$, dato che un valore assoluto non è mai negativo. Poi il dominio si divide in due **rami**, cioè due parti in cui l’argomento ha segno costante:

- nei punti in cui $A(x)\ge0$ si ha $|A(x)|=A(x)$ e si risolve $A(x)=B(x)$;
- nei punti in cui $A(x)<0$ si ha $|A(x)|=-A(x)$ e si risolve $-A(x)=B(x)$.

Ogni soluzione deve appartenere all’intervallo del proprio ramo.
:::dimostrazione
Segue dalla definizione del valore assoluto, che restituisce $A(x)$ nel primo caso e il suo opposto nel secondo. I due casi coprono tutti i punti del dominio. Se $A(x)=0$, entrambe le espressioni valgono zero, quindi quel punto verifica l’equazione solo quando anche $B(x)=0$.
:::
::::

:::esempio{titolo="Controllare a quale ramo appartiene ogni soluzione"}
Per $|2x-1|=x+2$ occorre $x+2\ge0$, cioè $x\ge-2$. L’argomento $2x-1$ si annulla in $x=\dfrac12$, che separa i due rami.

- Nel ramo $x\ge\dfrac12$ l’argomento è non negativo e si risolve $2x-1=x+2$, che dà $x=3$.
- Nel ramo $-2\le x<\dfrac12$ l’argomento è negativo, quindi $|2x-1|=1-2x$. Si risolve $1-2x=x+2$, cioè $-3x=1$, e si trova $x=-\dfrac13$.

Entrambe le soluzioni appartengono al proprio intervallo, perché $3\ge\dfrac12$ e $-2\le-\dfrac13<\dfrac12$. Le **ordinate** (coordinate $y$) corrispondenti, $5$ e $\dfrac53$, sono i valori comuni dei due membri nei punti d’incontro dei grafici; le soluzioni sono le ascisse. Il punto $\left(\dfrac12,0\right)$ del grafico è quello in cui $y=|2x-1|$ cambia ramo.

::grafico{f="abs(2*x-1);x+2" legenda="y=|2x-1|;y=x+2" xmin=-2.5 xmax=4.15 ymin=-0.7 ymax=7.25 punti="-0.333333333,1.666666667,pieno;3,5,pieno;0.5,0,pieno" titolo="Ogni soluzione appartiene al ramo usato per trovarla"}
:::

:::osservazione{titolo="Distanza e insieme delle soluzioni"}
Sulla retta dei numeri, $|x-2|$ è la distanza fra $x$ e $2$. La relazione $|x-2|=3$ cerca quindi le ascisse a distanza $3$ da $2$, cioè $2-3=-1$ e $2+3=5$. I due valori sono simmetrici rispetto a $2$, che è il loro **punto medio** $\dfrac{-1+5}{2}$. Per lo stesso motivo, poiché $|x+1|=|x-(-1)|$, l’equazione $|x-3|=|x+1|$ cerca il punto equidistante da $3$ e da $-1$, cioè il loro punto medio $x=\dfrac{3+(-1)}{2}=1$. Se si sostituisce $3$ con zero resta il solo $x=2$, e con un numero negativo non ci sono soluzioni.

Con il membro destro variabile il numero di soluzioni può cambiare ancora. In $|x-1|=x-1$ tutti i valori $x\ge1$ verificano l’uguaglianza, perché l’argomento è già non negativo, mentre per $x<1$ il membro destro è negativo. L’insieme delle soluzioni è quindi l’intervallo $[1,+\infty)$, formato da tutti i numeri maggiori o uguali a $1$. La parentesi quadra indica che $1$ è compreso.

Se l’incognita compare solo in $|x|$, si pone $t=|x|$, con $t\ge0$. In $\bigl||x|-2\bigr|=1$ si ottiene $|t-2|=1$, cioè $t=1$ oppure $t=3$, e ogni $t>0$ dà due valori opposti, quindi $x=\pm1$ e $x=\pm3$.
:::

:::esempio{titolo="Due valori assoluti permettono un altro passaggio"}
In $|x-5|=|2x-1|$ entrambi i membri sono non negativi. Uguagliare i quadrati è reversibile e dà $(x-5)^2=(2x-1)^2$. Si porta tutto nel primo membro e si scompone la differenza dei quadrati con $a=x-5$ e $b=2x-1$:

$$
\begin{aligned}
(x-5)^2-(2x-1)^2&=0\\[6pt]
\bigl[(x-5)-(2x-1)\bigr]\bigl[(x-5)+(2x-1)\bigr]&=0\\[6pt]
(-x-4)(3x-6)&=0.
\end{aligned}
$$

I candidati sono $-4$ e $2$. Al primo valore i due argomenti valgono entrambi $-9$. Al secondo sono $-3$ e $3$. Due valori assoluti sono quindi uguali quando gli argomenti coincidono o sono opposti.
:::

## Sistemi tra una relazione lineare e una non lineare

::::teorema{#sistemi titolo="Sostituire e ricostruire la coppia"}
Un **sistema** è un gruppo di equazioni che devono valere insieme. Una sua soluzione è una **coppia ordinata** $(x,y)$, in cui conta l’ordine: $(1,2)$ e $(2,1)$ sono coppie diverse. Il sistema è **non lineare** quando almeno un’equazione non è di primo grado, come $y=x^2$. La scrittura $y=g(x)$ indica che $y$ è dato da un’espressione in $x$, come $y=2x+3$, e $F(x,y)=0$ indica un’altra equazione in $x$ e $y$.

In un sistema con $y=g(x)$ e $F(x,y)=0$, si può risolvere $F(x,g(x))=0$ nei punti in cui le espressioni sono definite. È il **metodo di sostituzione**: si scrive $g(x)$ al posto di $y$ e resta la sola incognita $x$. A ogni valore ammesso di $x$ si associa la coppia $(x,g(x))$.
:::dimostrazione
Una coppia del sistema verifica la prima equazione, quindi $y=g(x)$, e sostituire $g(x)$ a $y$ nella seconda conserva l’uguaglianza. Viceversa, se l’equazione dopo la sostituzione è verificata e la coppia ricostruita è ammessa, allora la stessa coppia verifica entrambe le equazioni del sistema. Perciò in ogni coppia si usa il valore $y=g(x)$ associato a quella $x$.
:::
::::

:::esempio{titolo="La retta incontra la parabola in due punti"}
Il grafico di $y=x^2$ è una **parabola**, quello di $y=2x+3$ è una retta. Nei punti d’incontro le due ordinate sono uguali, quindi $x^2=2x+3$, cioè $x^2-2x-3=0$. Scomponendo si ottiene $(x-3)(x+1)=0$.

Con $x=-1$ la retta dà $y=2\cdot(-1)+3=1$. Con $x=3$ dà $y=2\cdot3+3=9$. Si trovano $(-1,1)$ e $(3,9)$. Incrociare le ordinate ottenute formerebbe coppie che non verificano il sistema. La verifica consiste nel calcolare l’ordinata tramite entrambe le relazioni.

::grafico{f="x^2;2*x+3" legenda="y=x^2;y=2x+3" xmin=-2 xmax=3.8 ymin=-1.4 ymax=11.8 punti="-1,1,pieno;3,9,pieno" segmenti="-1,0,-1,1;3,0,3,9" titolo="Ogni punto d’intersezione ha l’ordinata imposta da entrambe le curve"}
:::

:::esempio{titolo="Passare da nessuna intersezione alla tangenza"}
Con $y=x^2$ e $y=2x+m$, dove $m$ è un parametro, uguagliando le ordinate si ottiene $x^2-2x=m$. Si **completa il quadrato**, cioè si aggiunge $1$ a entrambi i membri, così che il primo membro diventi $x^2-2x+1=(x-1)^2$:

$$
(x-1)^2=m+1.
$$

- Per $m<-1$ il secondo membro è negativo, quindi non può essere uguale a un quadrato reale, e non ci sono intersezioni.
- Per $m=-1$ si ha $(x-1)^2=0$, quindi $x=1$ e si ottiene la sola coppia $(1,1)$. La retta è **tangente** alla parabola, cioè la tocca in un solo punto senza attraversarla.
- Per $m>-1$ si ha $x-1=\pm\sqrt{m+1}$, e i due segni danno due ascisse distinte e quindi due coppie.

Nel grafico la retta $y=2x-1$, con $m=-1$, tocca la parabola in $(1,1)$, mentre $y=2x-2$, con $m=-2$, resta sotto. Se la retta fosse verticale, come $x=2$, si sostituirebbe invece il valore di $x$ nella parabola, ottenendo $(2,4)$.

::grafico{f="x^2;2*x-1;2*x-2" legenda="y=x^2;y=2x-1;y=2x-2" xmin=-1.25 xmax=3.15 ymin=-2.65 ymax=6.8 punti="1,1,pieno" titolo="Una retta è tangente, l’altra resta sotto la parabola"}
:::

## Sistemi simmetrici

::::teorema{#somma-prodotto titolo="Ricavare le incognite da somma e prodotto"}
Un sistema è **simmetrico** quando scambiando $x$ con $y$ le equazioni non cambiano, come nel sistema con somma $s$ e prodotto $p$:

$$
\begin{cases}
x+y=s,\\
xy=p.
\end{cases}
$$

Le incognite sono le radici dell’equazione ausiliaria $t^2-st+p=0$. Il suo **discriminante** è $\Delta=s^2-4p$ (lettera greca «delta»), la quantità sotto radice nella formula risolutiva.

- Due radici reali distinte $t_1$ e $t_2$ danno due coppie ordinate, $(t_1,t_2)$ e $(t_2,t_1)$.
- Una radice doppia $t_1$ dà una sola coppia, $(t_1,t_1)$.
- Se le radici non sono reali, cioè se $\Delta<0$, non ci sono coppie reali.
:::dimostrazione
Per ogni coppia del sistema, sviluppando il prodotto si ottiene

$$
(t-x)(t-y)=t^2-(x+y)t+xy=t^2-st+p,
$$

quindi $x$ e $y$ sono le radici di $t^2-st+p$. Viceversa, le due radici reali del polinomio hanno somma $s$ e prodotto $p$ per le **relazioni di Viète**, che legano somma e prodotto delle radici ai coefficienti. Scambiarle preserva le due equazioni. Lo scambio produce una seconda coppia solo se le radici sono diverse.
:::
::::

:::esempio{titolo="Usare la somma dei quadrati per ricavare il prodotto"}
Si supponga $x+y=5$ e $x^2+y^2=13$. Sviluppando il quadrato della somma e sostituendo i dati si ottiene

$$
\begin{aligned}
(x+y)^2&=x^2+y^2+2xy\\[6pt]
25&=13+2xy\\[6pt]
xy&=6.
\end{aligned}
$$

L’equazione $t^2-5t+6=(t-2)(t-3)=0$ dà $2$ e $3$. Il sistema ammette $(2,3)$ e $(3,2)$, che hanno somma $5$ e somma dei quadrati $4+9=13$. Poiché $(x+y)^3=x^3+y^3+3xy(x+y)$, si ha anche $x^3+y^3=(x+y)^3-3xy(x+y)=125-3\cdot6\cdot5=35$. Nel grafico la prima condizione è la retta $y=5-x$. La seconda è la **circonferenza** di centro l’origine e raggio $\sqrt{13}$ (i punti a distanza $\sqrt{13}$ dall’origine), e i punti $P$ e $Q$ sono le due soluzioni. Se si aggiunge $x\le y$, sopravvive solo $(2,3)$.

::grafico{f="5-x" curve="sqrt(13)*cos(t),sqrt(13)*sin(t),0,6.283185307" legenda="y=5-x;x^2+y^2=13" xmin=-3.95 xmax=5.2 ymin=-3.95 ymax=5.2 uguale=1 punti="2,3,pieno,P;3,2,pieno,Q" titolo="Lo scambio delle coordinate lascia valide entrambe le relazioni"}
:::

:::osservazione{titolo="Un vincolo prima ancora della formula"}
Per ogni coppia di reali vale

$$
(x+y)^2-4xy=x^2+2xy+y^2-4xy=x^2-2xy+y^2=(x-y)^2.
$$

Poiché $(x-y)^2\ge0$, segue $s^2-4p\ge0$, cioè $p\le\dfrac{s^2}{4}$. Con somma $2$ il prodotto massimo è $\dfrac{2^2}{4}=1$, quindi la richiesta di somma $2$ e prodotto $3$ non rispetta la condizione. Con somma $2$ e prodotto $1$ si ha $(x-y)^2=4-4=0$, la differenza deve essere zero e la sola coppia è $(1,1)$. Poiché $s^2-4p$ è il discriminante $\Delta$, la condizione equivale a $\Delta\ge0$.
:::

:::esempio{titolo="Una circonferenza di raggio insufficiente"}
Nel sistema $x+y=4$, $x^2+y^2=q$, si usa l’uguaglianza $(x+y)^2+(x-y)^2=2(x^2+y^2)$, che si ottiene sommando gli sviluppi dei quadrati. Ne segue

$$
(x-y)^2=2(x^2+y^2)-(x+y)^2=2q-16.
$$

Quindi occorre $2q-16\ge0$, cioè $q\ge8$. A $q=8$ le incognite sono uguali e la sola coppia è $(2,2)$. Per $q>8$ le differenze possibili sono $\sqrt{2q-16}$ e $-\sqrt{2q-16}$, opposte e distinte. Ciascuna, unita alla somma $4$, determina una coppia. Per esempio, con $q=10$ le differenze valgono $2$ e $-2$, e insieme a $x+y=4$ danno $(3,1)$ e $(1,3)$.

La circonferenza $x^2+y^2=q$ ha raggio $\sqrt q$. Quando $0\le q<8$, la circonferenza è troppo piccola per raggiungere la retta. Aumentare il raggio fino alla soglia $\sqrt8$ produce la tangenza.
:::

## Dominio e condizioni applicative

:::esempio{#dominio titolo="Cancellare un fattore senza reinserire il suo zero"}
La **condizione di esistenza** di una frazione è che il denominatore sia diverso da zero. In $\dfrac{x(x-2)(x+2)}{x-2}=0$ il denominatore impone $x\ne2$. Per $x\ne2$ il fattore $x-2$ è comune a numeratore e denominatore e si cancella, quindi sul dominio l’equazione diventa $x(x+2)=0$.

Restano $x=0$ e $x=-2$, che annullano il numeratore senza annullare il denominatore. La forma semplificata avrebbe valore $2\cdot4=8$ in $x=2$, ma il grafico della frazione non contiene quel punto, segnato da un cerchio vuoto. La condizione di esistenza va conservata anche quando cambia la forma dell’espressione.

::grafico{f="x*(x+2)" xmin=-3.3 xmax=2.9 ymin=-2 ymax=10 punti="-2,0,pieno;0,0,pieno;2,8,vuoto" titolo="Il grafico ha due zeri ammessi e un punto mancante in (2, 8)"}
:::

:::esempio{titolo="Il problema può imporre un ordine"}
Due lati adiacenti di un rettangolo misurano $x$ e $y$ centimetri. Le misure soddisfano $x+y=7$ e $xy=12$. Le radici ausiliarie di $t^2-7t+12=(t-3)(t-4)$ sono $3$ e $4$, entrambe positive. Come coppie ordinate si trovano $(3,4)$ e $(4,3)$.

Se $x$ indica specificamente il lato più corto, serve $x<y$ e si tiene solo $(3,4)$. La scelta conserva l’area $12\,\mathrm{cm}^2$ e il perimetro $14\,\mathrm{cm}$. Il vincolo proviene dalla descrizione delle misure, mentre le due equazioni da sole sono simmetriche.
:::

:::esempio{titolo="Un radicale che compare anche al denominatore"}
Per $\sqrt{x-4}=\dfrac1{x-4}$ il radicando richiede $x\ge4$ e il denominatore richiede $x\ne4$. Le due condizioni insieme danno il dominio $x>4$.

Si pone $u=\sqrt{x-4}$. Allora $u>0$ e $x-4=u^2$, quindi l’equazione diventa $u=\dfrac1{u^2}$. Moltiplicando entrambi i membri per $u^2$ si ottiene $u^3=1$, e l’unico reale con cubo $1$ è $u=1$. Da $\sqrt{x-4}=1$ segue $x-4=1$, cioè $x=5$. La condizione $u>0$ rende reversibile il passaggio in cui si moltiplica per $u^2$, perché $u^2$ è diverso da zero. In $x=5$ entrambi i membri originali valgono $1$.
:::
