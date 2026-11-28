---
titolo: "Equazioni di secondo grado"
sommario: "Formula risolutiva, discriminante, relazioni di Viète, dominio e scelta delle radici nei problemi."
---

## Forma normale e significato delle radici

:::definizione{#forma titolo="Coefficienti e soluzioni"}
Un’**equazione di secondo grado** è un’equazione in cui l’incognita $x$ compare al quadrato e non con potenze più alte. Sviluppando i calcoli si riduce sempre alla **forma normale**
$$
ax^2+bx+c=0\qquad\text{con } a\ne0,
$$
dove $a$, $b$, $c$ sono numeri reali detti **coefficienti**:

- $a$ è il coefficiente di $x^2$, detto anche coefficiente principale;
- $b$ è il coefficiente di $x$, detto coefficiente lineare;
- $c$ è il termine noto, cioè il numero che non moltiplica l’incognita.

La condizione $a\ne0$ serve perché con $a=0$ il termine $x^2$ sparisce e l’equazione diventa di primo grado. Il primo membro $ax^2+bx+c$ è un polinomio di secondo grado; quando ha tre termini si chiama anche trinomio.

Per individuare $a$, $b$ e $c$ si sviluppano i prodotti, si portano tutti i termini nel primo membro (a sinistra dell’uguale) e si sommano quelli dello stesso grado. Il segno fa parte del coefficiente: in $x^2-7=0$ si ha $a=1$, $b=0$, $c=-7$. Un termine mancante ha quindi coefficiente zero. Se i termini con $x^2$ si cancellano, il grado si stabilisce dopo la cancellazione. Per esempio, $(x+1)^2=x^2+3$ diventa $x^2+2x+1=x^2+3$, cioè $2x-2=0$, che è di primo grado.

Una **radice** (o soluzione) reale è un valore di $x$ per cui il polinomio vale zero. Le soluzioni si raccolgono nell’insieme delle soluzioni, scritto $S=\{\ldots\}$; se non ce ne sono si scrive $S=\varnothing$ (insieme vuoto). Due equazioni con le stesse soluzioni si dicono **equivalenti** e fra di esse si scrive il simbolo $\iff$, che si legge «equivale a». Se l’equazione proviene da una frazione o da un problema in cui le misure hanno vincoli, il valore deve anche appartenere al dominio iniziale, cioè all’insieme dei valori di $x$ per cui l’equazione di partenza ha senso.
:::

:::esempio{titolo="Un’uguaglianza come intersezione di due grafici"}
Per $x(x+1)=12$ si sviluppa il prodotto e si sottrae $12$ da entrambi i membri:
$$
x^2+x=12\iff x^2+x-12=0,
$$
con $a=1$, $b=1$ e $c=-12$. Poiché $(x+4)(x-3)=x^2+x-12$, le radici sono $-4$ e $3$: infatti $(-4)\cdot(-3)=12$ e $3\cdot4=12$.

In un punto del piano, l’ascissa è la coordinata orizzontale e l’ordinata quella verticale. Il grafico di $y=x^2+x$ è una curva a forma di U, detta **parabola**; il grafico di $y=12$ è una retta orizzontale. Nei loro punti d’incontro le due ordinate valgono entrambe $12$, e le ascisse di quei punti sono $-4$ e $3$. Nell’equazione ridotta si è sottratto $12$ a ogni ordinata del primo grafico, quindi in quegli stessi punti il polinomio $x^2+x-12$ vale zero. Le soluzioni si leggono perciò anche come zeri del nuovo polinomio.

::grafico{f="x^2+x;12" legenda="y=x^2+x;y=12" xmin=-5 xmax=4 ymin=-2 ymax=17 punti="-4,12,pieno;3,12,pieno" segmenti="-4,0,-4,12;3,0,3,12" titolo="Le soluzioni sono le ascisse −4 e 3 dei due punti d’incontro"}
:::

## Equazioni pure e spurie

::::teorema{#incomplete titolo="Usare il termine mancante"}
Un’equazione di secondo grado a cui manca un termine si risolve senza formula.

- Se $b=0$ (manca il termine con $x$) l’equazione si dice **pura**. Da $ax^2+c=0$ si ottiene $x^2=-\dfrac ca$.
- Se $c=0$ (manca il termine noto) l’equazione si dice **spuria**. Raccogliendo $x$ si scrive $x(ax+b)=0$.
:::dimostrazione
Equazione pura. Si sottrae $c$ e si divide per $a$, che è diverso da zero, e si ottiene $x^2=-\dfrac ca$. Si indica il secondo membro con $u$. La radice quadrata $\sqrt u$ di un numero $u>0$ è il numero positivo il cui quadrato è $u$.

- Se $u>0$, le radici sono $\sqrt u$ e $-\sqrt u$, perché entrambi i quadrati valgono $u$. Si scrive in breve $x=\pm\sqrt u$ («più o meno radice di $u$»).
- Se $u=0$, l’unico valore è zero.
- Se $u<0$, non ci sono radici reali, perché il quadrato di un numero reale non è mai negativo.

Equazione spuria. Per la **legge di annullamento del prodotto**, un prodotto di numeri reali vale zero esattamente quando almeno un fattore vale zero. Da $x(ax+b)=0$ segue quindi $x=0$ oppure $ax+b=0$. La seconda equazione dà $ax=-b$, cioè $x=-\dfrac ba$. Se anche $b=0$, i due valori coincidono.
:::
::::

:::esempio{titolo="Due radici opposte e controllo esatto"}
Da $3x^2=18$ si divide per $3$ e si ricava $x^2=6$, quindi $x=\pm\sqrt6$. Le due radici sono opposte, cioè hanno lo stesso valore assoluto e segno diverso; il valore assoluto $|x|$ è la distanza di $x$ da zero. Poiché $\sqrt{x^2}=|x|$, da $x^2=6$ segue $|x|=\sqrt6$.

Per sapere dove cadono, si confronta $6$ con i quadrati $2^2=4$ e $3^2=9$. Poiché $4<6<9$, ciascuna radice ha valore assoluto fra $2$ e $3$. Sostituendo una delle due radici nell’equazione iniziale si ottiene $3(\pm\sqrt6)^2=3\cdot6=18$. Il segno meno produce la seconda soluzione: nel grafico i due punti sono simmetrici rispetto all’asse verticale. Un valore arrotondato come $2{,}45$ serve a collocare le radici sul grafico; la verifica esatta usa il radicale $\sqrt6$.

::grafico{f="3*x^2;18" legenda="y=3x^2;y=18" xmin=-3.2 xmax=3.2 ymin=-2 ymax=24 punti="-2.449489743,18,pieno;2.449489743,18,pieno" titolo="Le due ascisse sono opposte e hanno lo stesso quadrato"}
:::

:::esempio{titolo="Conservare la radice zero"}
In $3x^2+2x=0$ i due termini hanno in comune il fattore $x$. Si raccoglie $x$ e si ottiene $x(3x+2)=0$. Per la legge di annullamento del prodotto, $x=0$ oppure $3x+2=0$, cioè $x=-\dfrac23$. Le radici distinte sono quindi $0$ e $-\dfrac23$.

Dividere subito per $x$ è lecito soltanto per $x\ne0$, e il caso escluso è proprio una soluzione; perciò con la divisione si troverebbe solo $-\dfrac23$. Il grafico di $y=3x^2+2x$ incontra l’asse orizzontale in due punti. Nell’origine si annulla il primo fattore $x$, nel punto di ascissa $-\dfrac23$ si annulla il secondo fattore $3x+2$.

::grafico{f="3*x^2+2*x" xmin=-1.4 xmax=0.7 ymin=-0.55 ymax=2.4 punti="-0.666666667,0,pieno;0,0,pieno" etichette="-0.79,-0.2,−2⁄3" titolo="Il raccoglimento rende visibili entrambi gli zeri"}
:::

## Formula risolutiva

::::teorema{#formula titolo="Completare il quadrato"}
Sia $ax^2+bx+c=0$ con $a\ne0$. Il numero
$$
\Delta=b^2-4ac
$$
si chiama **discriminante** e si indica con la lettera greca $\Delta$, che si legge «delta». Se $\Delta\ge0$, le radici sono
$$
x_1=\frac{-b+\sqrt\Delta}{2a},\qquad x_2=\frac{-b-\sqrt\Delta}{2a},
$$
scritte insieme come $x=\dfrac{-b\pm\sqrt\Delta}{2a}$ (**formula risolutiva**). Se $\Delta<0$, non ci sono radici reali.
:::dimostrazione
L’idea è trasformare il primo membro nel quadrato di un binomio, ricordando che $(p+q)^2=p^2+2pq+q^2$.

Si sottrae $c$ ai due membri, si moltiplica per $4a$ e poi si aggiunge $b^2$ ai due membri:

$$
\begin{aligned}
ax^2+bx&=-c\\[6pt]
4a^2x^2+4abx&=-4ac\\[6pt]
4a^2x^2+4abx+b^2&=b^2-4ac.
\end{aligned}
$$

Il primo membro è il quadrato di $2ax+b$, perché $(2ax)^2=4a^2x^2$ e il doppio prodotto è $2\cdot2ax\cdot b=4abx$. Si ottiene quindi
$$
(2ax+b)^2=\Delta.
$$

La moltiplicazione per $4a$ si annulla dividendo per $4a$, che è diverso da zero, quindi le soluzioni non cambiano. Un quadrato reale non è mai negativo, perciò con $\Delta<0$ non ci sono soluzioni. Se $\Delta\ge0$, il numero $2ax+b$ vale $\sqrt\Delta$ oppure $-\sqrt\Delta$. Sottraendo $b$ si ha $2ax=-b\pm\sqrt\Delta$, e dividendo per $2a$ si ottiene la formula. Con $\Delta=0$ i due segni conducono allo stesso valore.
:::
::::

:::esempio{titolo="Radici esatte e segni"}
In $3x^2-2x-2=0$ i coefficienti sono $a=3$, $b=-2$, $c=-2$. Il discriminante è
$$
\Delta=(-2)^2-4\cdot3\cdot(-2)=4+24=28.
$$
Poiché $28=4\cdot7$, si ha $\sqrt{28}=2\sqrt7$, e la formula dà
$$
x=\frac{2\pm2\sqrt7}{6}=\frac{1\pm\sqrt7}{3},
$$
dopo aver diviso numeratore e denominatore per $2$. Il numero $28$ non è un quadrato perfetto (il quadrato di un intero), quindi $\sqrt{28}$ è irrazionale e le radici si lasciano in questa forma esatta. Poiché $\sqrt7>1$, il numeratore $1+\sqrt7$ è positivo e $1-\sqrt7$ è negativo, quindi una radice è positiva e l’altra negativa.

Per controllare i calcoli si usa il quadrato completato della dimostrazione, in cui $2ax+b=6x-2$. Se $x=\dfrac{1\pm\sqrt7}{3}$, allora $6x-2=2(1\pm\sqrt7)-2=\pm2\sqrt7$, e in entrambi i casi $(6x-2)^2=4\cdot7=28$.
:::

:::osservazione{titolo="Formula ridotta col coefficiente lineare pari"}
Se $b$ è pari, si scrive $b=2d$, cioè $d$ è la metà di $b$. Il discriminante diventa
$$
\Delta=4d^2-4ac=4(d^2-ac).
$$
Quando $d^2-ac\ge0$ si ha $\sqrt{4(d^2-ac)}=2\sqrt{d^2-ac}$, quindi nel numeratore della formula il fattore $2$ compare sia in $-2d$ sia nella radice. Semplificandolo con il $2$ di $2a$ si ottiene
$$
x=\frac{-d\pm\sqrt{d^2-ac}}{a}.
$$
In $2x^2+8x+6=0$ si ha $d=4$. Risulta $d^2-ac=16-12=4$, quindi $x=\dfrac{-4\pm2}{2}$, cioè $-1$ e $-3$. Il calcolo diretto, con $\Delta=64-48=16$, dà le stesse radici.
:::

## Discriminante, vertice e radice doppia

::::teorema{#discriminante titolo="Leggere il numero di intersezioni"}
Il segno del discriminante dice quante sono le radici reali:

- con $\Delta>0$ ci sono due radici reali distinte;
- con $\Delta=0$ c’è una sola radice distinta, $-\dfrac b{2a}$, che è **doppia**;
- con $\Delta<0$ nessuna radice è reale.

Una radice è doppia quando il polinomio contiene due volte il fattore che la produce, come $x-4$ in $(x-4)^2$; si dice anche che ha **molteplicità** due. Una radice prodotta da un solo fattore si dice semplice.
:::dimostrazione
Il grafico di $y=ax^2+bx+c$ è una parabola. È rivolta verso l’alto se $a>0$ e verso il basso se $a<0$. Il suo **vertice** è il punto più basso (se $a>0$) o più alto (se $a<0$), e la retta verticale che passa per il vertice è l’**asse di simmetria**.

Sviluppando il quadrato si verifica che
$$
a\left(x+\frac b{2a}\right)^2-\frac{\Delta}{4a}=ax^2+bx+\frac{b^2}{4a}-\frac{b^2-4ac}{4a}=ax^2+bx+c.
$$
Il quadrato vale zero per $x=-\dfrac b{2a}$, quindi il vertice ha ascissa $-\dfrac b{2a}$ e ordinata $-\dfrac{\Delta}{4a}$.

- Quando $\Delta=0$, il polinomio è $a\left(x+\dfrac b{2a}\right)^2$, cioè un multiplo del quadrato di un fattore di primo grado.
- Quando $\Delta>0$, l’equazione equivale a $\left(x+\dfrac b{2a}\right)^2=\dfrac{\Delta}{4a^2}$, con secondo membro positivo. Il numero $x+\dfrac b{2a}$ è la distanza con segno di $x$ dall’asse di simmetria, quindi ci sono due ascisse, una a destra e una a sinistra dell’asse alla stessa distanza. Per questo l’asse passa a metà fra le due radici, cioè $-\dfrac b{2a}=\dfrac{x_1+x_2}{2}$.
- Se $\Delta<0$, il secondo membro $\dfrac{\Delta}{4a^2}$ è negativo e l’uguaglianza è impossibile.
:::
::::

:::esempio{titolo="Spostare il vertice variando il termine noto"}
I polinomi $x^2-4x+5$, $x^2-4x+4$ e $x^2-4x+3$ differiscono solo per il termine noto e hanno lo stesso asse $x=2$. Poiché $(x-2)^2=x^2-4x+4$, completando il quadrato diventano
$$
(x-2)^2+1,\qquad (x-2)^2,\qquad (x-2)^2-1.
$$
Il quadrato $(x-2)^2$ vale almeno zero, quindi il valore minimo di ciascun polinomio si ha in $x=2$ ed è rispettivamente $1$, $0$, $-1$.

- Nel primo caso il minimo è positivo e la parabola non incontra l’asse orizzontale.
- Nel secondo il vertice tocca l’asse in $x=2$, che è una radice doppia.
- Nel terzo il minimo è negativo e gli zeri sono $1$ e $3$, perché $(x-2)^2=1$ dà $x-2=\pm1$.

Le tre parabole del grafico sono la stessa curva spostata in alto o in basso (traslazione verticale). I tre esiti dipendono solo dall’altezza del vertice.

::grafico{f="(x-2)^2+1;(x-2)^2;(x-2)^2-1" legenda="y=(x-2)^2+1;y=(x-2)^2;y=(x-2)^2-1" xmin=-0.6 xmax=4.7 ymin=-1.8 ymax=5.1 punti="1,0,pieno;2,0,pieno;3,0,pieno" titolo="A parità di asse, l’altezza del vertice determina il numero di radici"}
:::

:::osservazione{titolo="Parabola rivolta verso il basso"}
Per $-x^2-2x-3=0$ si ha $a=-1$, $b=-2$, $c=-3$ e quindi
$$
\Delta=(-2)^2-4\cdot(-1)\cdot(-3)=4-12=-8.
$$
Completando il quadrato, $-x^2-2x-3=-(x^2+2x+1)-2=-(x+1)^2-2$. La curva $y=-(x+1)^2-2$ è rivolta verso il basso, perché $a<0$, e ha massimo $-2$ nel vertice $V=(-1;-2)$. Resta quindi tutta sotto l’asse orizzontale. In generale, con discriminante negativo i valori del polinomio hanno tutti il segno di $a$.

Nel caso di due radici distinte, la distanza tra le loro ascisse è $\dfrac{\sqrt\Delta}{|a|}$. Si ottiene sottraendo i due valori della formula,
$$
\frac{-b+\sqrt\Delta}{2a}-\frac{-b-\sqrt\Delta}{2a}=\frac{2\sqrt\Delta}{2a}=\frac{\sqrt\Delta}{a},
$$
e prendendo il valore assoluto, che rende positiva la distanza anche quando $a<0$.

::grafico{f="-(x+1)^2-2" xmin=-3.8 xmax=1.8 ymin=-9.6 ymax=1.15 punti="-1,-2,pieno,V" titolo="Il massimo vale −2 e la parabola non raggiunge l’asse delle ascisse"}
:::

:::osservazione{titolo="Cambiare scala senza cambiare le radici"}
Si moltiplicano tutti i coefficienti per un numero $\lambda\ne0$ (lettera greca che si legge «lambda»). Le soluzioni non cambiano, perché dividendo per $\lambda$ si torna all’equazione iniziale. Il nuovo discriminante è
$$
(\lambda b)^2-4(\lambda a)(\lambda c)=\lambda^2b^2-4\lambda^2ac=\lambda^2\Delta.
$$
Poiché $\lambda^2>0$, il segno resta lo stesso.

Per esempio, $x^2-5x+4=0$ ha discriminante $25-16=9$ e radici $1$ e $4$. Moltiplicando per $-2$ si ottiene $-2x^2+10x-8=0$, con discriminante $100-64=36=(-2)^2\cdot9$. Le radici restano $1$ e $4$ e la loro distanza resta $3$, perché nel secondo caso $\dfrac{\sqrt{36}}{|-2|}=\dfrac62=3$. Il valore del discriminante dipende quindi dalla forma scelta, mentre il suo segno e la distanza tra gli zeri restano gli stessi.
:::

## Relazioni di Viète e costruzione dalle radici

::::teorema{#viete titolo="Somma, prodotto e fattorizzazione"}
Siano $x_1$ e $x_2$ (si leggono «$x$ uno» e «$x$ due») le radici reali di $ax^2+bx+c=0$, contando due volte la radice doppia. Allora valgono le **relazioni di Viète**, dal nome del matematico francese François Viète:

$$
x_1+x_2=-\frac ba,\qquad x_1x_2=\frac ca.
$$

Inoltre il polinomio si scompone come $a(x-x_1)(x-x_2)$.
:::dimostrazione
Caso di due radici distinte. Si considera la differenza fra $ax^2+bx+c$ e $a(x-x_1)(x-x_2)$. I termini con $x^2$ valgono $ax^2$ in entrambi e si cancellano, quindi la differenza è della forma $mx+q$. Essa vale zero in $x_1$ e in $x_2$, perché lì si annullano entrambi i polinomi. Da $mx_1+q=0$ e $mx_2+q=0$, sottraendo, si ha $m(x_1-x_2)=0$. Poiché $x_1\ne x_2$, segue $m=0$ e quindi anche $q=0$. La differenza vale perciò zero per ogni $x$, e i due polinomi coincidono.

Caso della radice doppia. Il quadrato completato con $\Delta=0$ dà $ax^2+bx+c=a(x-x_1)^2$ con $x_1=x_2=-\dfrac b{2a}$.

In entrambi i casi si sviluppa il prodotto:
$$
a(x-x_1)(x-x_2)=ax^2-a(x_1+x_2)x+ax_1x_2.
$$
Confrontando con $ax^2+bx+c$ i coefficienti di $x$ e i termini noti si ha $b=-a(x_1+x_2)$ e $c=ax_1x_2$. Dividendo per $a$ si ottengono le due relazioni.
:::
::::

:::esempio{titolo="Radici assegnate e coefficiente principale"}
Si vuole un polinomio di secondo grado con radici $-1$ e $3$. Per la scomposizione $a(x-x_1)(x-x_2)$ servono i fattori $x+1$ e $x-3$. Un polinomio con coefficiente principale $1$ si dice **monico**: qui è
$$
(x+1)(x-3)=x^2-3x+x-3=x^2-2x-3.
$$
Se il coefficiente principale deve essere $2$, si moltiplica per $2$ e il trinomio richiesto è $2x^2-4x-6$. I due grafici hanno ordinate diverse, perché il secondo ha ogni ordinata raddoppiata, ma hanno gli stessi zeri. Dalle relazioni si legge la somma $2$ e il prodotto $-3$ in entrambi i casi: infatti $-\dfrac{-4}{2}=2$ e $\dfrac{-6}{2}=-3$. I rapporti $-\dfrac ba$ e $\dfrac ca$ restano invariati quando tutti i coefficienti sono moltiplicati per lo stesso numero non nullo.

::grafico{f="(x+1)*(x-3);2*(x+1)*(x-3)" legenda="y=(x+1)(x-3);y=2(x+1)(x-3)" xmin=-2 xmax=4 ymin=-9 ymax=9 punti="-1,0,pieno;3,0,pieno" titolo="Moltiplicare tutte le ordinate per due conserva gli zeri"}
:::

:::esempio{titolo="Risolvere il problema inverso di somma e prodotto"}
Si cercano due numeri di somma $s$ e prodotto $p$. Se i numeri sono $x_1$ e $x_2$, vale
$$
(t-x_1)(t-x_2)=t^2-(x_1+x_2)t+x_1x_2=t^2-st+p,
$$
quindi i due numeri sono le radici di $t^2-st+p=0$. Il discriminante $s^2-4p$ stabilisce se esistono due numeri reali con quei dati.

- Per $s=5$ e $p=7$ si trova $25-28=-3<0$, quindi la coppia non esiste.
- Per $s=-7$ e $p=10$ si ottiene $t^2+7t+10=(t+2)(t+5)$ e i due numeri sono $-2$ e $-5$.

Si calcola anche la somma dei quadrati senza trovare i singoli valori. Poiché $(x_1+x_2)^2=x_1^2+2x_1x_2+x_2^2$, si ha $x_1^2+x_2^2=s^2-2p$, che nel secondo caso vale $49-20=29$; infatti $4+25=29$. Quando $s^2=4p$ il discriminante è zero e i due numeri coincidono.
:::

:::esempio{titolo="Una radice nota determina l’altra e un coefficiente"}
Si sa che $3$ è radice di $2x^2+bx-24=0$. Il prodotto delle radici è $\dfrac ca=\dfrac{-24}{2}=-12$, quindi l’altra radice è $\dfrac{-12}{3}=-4$. La somma è $3+(-4)=-1$, perciò $-\dfrac b2=-1$ e $b=2$.

Per verifica si sostituisce $3$ nell’equazione: $2\cdot9+3b-24=0$, cioè $3b=6$, che dà lo stesso coefficiente $b=2$. Sostituire $3$ fissa $b$, mentre la relazione sul prodotto fornisce anche l’altra radice senza usare la formula risolutiva. Questo procedimento divide per la radice nota, quindi richiede che essa sia diversa da zero.
:::

## Equazioni fratte e controllo del dominio

::::teorema{#fratte titolo="Intersecare i candidati con il dominio"}
Un’equazione è **fratta** quando l’incognita compare in un denominatore. Il suo dominio è formato dai valori di $x$ che non annullano nessun denominatore; le richieste $x\ne\ldots$ si chiamano **condizioni di esistenza**. Il dominio si scrive togliendo da $\mathbb R$ (l’insieme dei numeri reali) i valori esclusi, per esempio $\mathbb R\setminus\{2\}$.

Dopo aver escluso gli zeri dei denominatori, si moltiplicano i due membri per un multiplo comune dei denominatori, che nel dominio è diverso da zero. Si chiamano **candidati** le soluzioni dell’equazione così ottenuta. Le soluzioni sono solo i candidati che appartengono al dominio iniziale.
:::dimostrazione
Per ogni $x$ del dominio il multiplo comune è diverso da zero, quindi dividendo per esso si torna all’equazione di partenza. Le due equazioni sono perciò equivalenti nel dominio. Fuori dal dominio, almeno uno dei membri dell’equazione iniziale non è definito. Di conseguenza un candidato che annulla un denominatore non è una soluzione, anche se verifica l’equazione senza frazioni.
:::
::::

:::esempio{titolo="Un fattore comune lascia un punto mancante"}
In $\dfrac{x^2-5x+6}{x-2}=0$ il denominatore si annulla per $x=2$, quindi si esclude $x=2$. Una frazione vale zero quando il numeratore è zero e il denominatore no. Il numeratore si scompone in $(x-2)(x-3)$ e i suoi zeri sono $2$ e $3$. Il primo è escluso, quindi resta $x=3$.

Per $x\ne2$ si semplifica il fattore $x-2$ e il primo membro diventa $x-3$. Il grafico è perciò la retta $y=x-3$ privata del punto di ascissa $2$. In figura il punto $(2;-1)$ è vuoto e l’unico zero ammesso è $(3;0)$. Il controllo nell’equazione originale dà $\dfrac{9-15+6}{3-2}=\dfrac01=0$.

::grafico{f="x-3" xmin=-0.6 xmax=5.4 ymin=-4 ymax=2.6 punti="2,-1,vuoto;3,0,pieno" titolo="Il membro sinistro ha uno zero e un punto mancante"}
:::

:::esempio{titolo="Due denominatori con un fattore in comune"}
Nell’equazione $\dfrac{x+1}{x-2}=\dfrac{18}{(x-2)(x+1)}$ sono esclusi $2$ e $-1$, che annullano i denominatori. Si moltiplicano entrambi i membri per $(x-2)(x+1)$, che contiene tutti e due i denominatori:
$$
\begin{aligned}
(x+1)^2&=18\\[6pt]
x+1&=\pm\sqrt{18}=\pm3\sqrt2\\[6pt]
x&=-1\pm3\sqrt2.
\end{aligned}
$$
Si è usato $\sqrt{18}=\sqrt{9\cdot2}=3\sqrt2$. Nessuna radice è $-1$, perché in $-1$ il quadrato $(x+1)^2$ vale zero e non $18$. Nessuna è $2$, perché in $2$ il quadrato vale $9$. Entrambe appartengono quindi al dominio. Poiché per quei valori la moltiplicazione si annulla dividendo, le due radici verificano anche l’equazione iniziale.
:::

## Parametri e condizioni sulle radici

:::esempio{#parametri titolo="Separare la perdita di grado dal discriminante nullo"}
Un **parametro** è una lettera, qui $k$, che indica un numero fissato ma non assegnato; si studia come cambiano le soluzioni al variare di $k$.

In $(k-1)x^2+x-1=0$ il coefficiente di $x^2$ è $k-1$, che si annulla per $k=1$. Con $k=1$ si ottiene $x-1=0$, di primo grado, con soluzione $1$. Per $k\ne1$ l’equazione è di secondo grado con $a=k-1$, $b=1$, $c=-1$, quindi
$$
\Delta=1^2-4(k-1)(-1)=1+4(k-1)=4k-3.
$$

- Se $k<\dfrac34$, si ha $\Delta<0$ e non ci sono radici reali.
- Se $k=\dfrac34$, il discriminante è zero. L’equazione è $-\dfrac14x^2+x-1=0$; moltiplicando per $-4$ diventa $x^2-4x+4=(x-2)^2=0$, con radice doppia $2$.
- Se $k>\dfrac34$ e $k\ne1$, ci sono due radici distinte.

Sia $k=1$ sia $k=\dfrac34$ danno una sola soluzione distinta, per ragioni diverse. Nel primo caso la parabola è diventata una retta; nel secondo tocca l’asse in un solo punto, detto punto di tangenza.
:::

:::esempio{titolo="Richiedere due radici positive e distinte"}
In $x^2-6x+k=0$ si ha $a=1$, quindi per le relazioni di Viète la somma delle radici è $6$ e il prodotto è $k$. Servono due condizioni insieme:
$$
\begin{cases}
\Delta=36-4k>0\\
k>0.
\end{cases}
$$
La prima condizione garantisce due radici reali distinte e dà $4k<36$, cioè $k<9$. Il prodotto $k$ positivo impone che le radici abbiano lo stesso segno, e la somma $6$ positiva stabilisce che quel segno è positivo. Si ottiene $0<k<9$, che si scrive anche come intervallo aperto $(0,9)$.

Gli estremi sono esclusi, perché per $k=0$ una radice è zero e per $k=9$ le radici coincidono. Con $k<0$ le radici hanno segno opposto, perché $36-4k>0$ e il prodotto è negativo. La figura rappresenta i valori di $k$ su una retta orientata. Il tratto fra $0$ e $9$ è quello ammesso e i due cerchi vuoti indicano gli estremi esclusi.

::grafico{xmin=-1.4 xmax=10.6 ymin=-0.72 ymax=0.9 uguale=1 assi=0 vettori="-1.05,0,10.1,0" linee="0,0.28 9,0.28" segmenti="0,0,0,0.28;9,0,9,0.28" punti="0,0,vuoto;9,0,vuoto" etichette="-0.07,-0.33,0;8.93,-0.33,9;10.2,0.08,k" titolo="I parametri ammessi sono fra 0 e 9, con entrambi gli estremi esclusi"}
:::

:::esempio{titolo="Se si annullano tutti i coefficienti"}
In $(k-2)(x^2+x+1)=0$ il caso $k=2$ annulla l’intero membro sinistro, che diventa $0\cdot(x^2+x+1)=0$. L’uguaglianza è vera per ogni numero reale: un’equazione di questo tipo si chiama **identità**. Soltanto per $k\ne2$ si può dividere per $k-2$ e ottenere $x^2+x+1=0$, che ha discriminante $1-4=-3$ e nessuna radice reale. Quindi, passando da $k\ne2$ a $k=2$, l’equazione passa da nessuna soluzione a infinite soluzioni. Controllare il coefficiente di $x^2$ prima di calcolare il discriminante distingue il caso dell’identità da quello della radice doppia.
:::

## Problemi e interpretazione delle soluzioni

:::esempio{#problemi titolo="Selezionare una misura fisicamente possibile"}
Un rettangolo ha area $45\,\mathrm{cm}^2$ e base più lunga dell’altezza di $4\,\mathrm{cm}$. Se $h$ è l’altezza in centimetri, la base è $h+4$ e l’area dà $h(h+4)=45$. La forma normale e la sua scomposizione sono
$$
h^2+4h-45=0\iff(h-5)(h+9)=0.
$$
I candidati sono $5$ e $-9$. Si sceglie $h=5$, perché i lati di un rettangolo sono positivi. La base vale $5+4=9$ e il controllo $5\cdot9=45$ restituisce l’area, come nel rettangolo di $9\,\mathrm{cm}$ per $5\,\mathrm{cm}$ della figura. Il candidato $-9$ è una radice dell’equazione, ma è fuori dal dominio del problema, cioè dai valori che una lunghezza può assumere.

::grafico{assi=0 uguale=1 xmin=-1.14 xmax=10.25 ymin=-1 ymax=5.9 poligoni="0,0 9,0 9,5 0,5" linee="0,0 9,0 9,5 0,5 0,0" etichette="4.17,-0.53,9 cm;-0.85,2.35,5 cm" titolo="L’altezza e la base ammesse ricostruiscono l’area di 45 cm²"}
:::

:::esempio{titolo="Area assegnata a perimetro fissato"}
Un rettangolo ha perimetro $28\,\mathrm{cm}$. Il **semiperimetro**, cioè la metà del perimetro, è la somma di base e altezza: $14\,\mathrm{cm}$. Per avere area $48\,\mathrm{cm}^2$, i due lati devono avere somma $14$ e prodotto $48$, quindi sono le radici di $t^2-14t+48=0$. Il discriminante è $196-192=4$, perciò $t=\dfrac{14\pm2}{2}$ e i lati sono $6$ e $8$, entrambi positivi. Scambiarli cambia soltanto quale lato si chiama base.

Se si richiede area $50\,\mathrm{cm}^2$, il discriminante diventa $196-200=-4$, quindi nessuna coppia reale soddisfa le due condizioni. In generale, con semiperimetro $s$ e area $A$ l’equazione è $t^2-st+A=0$, e la condizione $s^2-4A\ge0$ impone $A\le\dfrac{s^2}{4}$. Al valore limite le radici coincidono, quindi il rettangolo di area massima, a perimetro fissato, è un quadrato. Con $s=14$ l’area massima è $\dfrac{196}{4}=49\,\mathrm{cm}^2$.
:::

:::esempio{titolo="Una radice prima dell’inizio del modello"}
Un modello è una formula che descrive un fenomeno reale entro certi limiti. L’altezza in metri di un oggetto dopo $t$ secondi segue il modello $h(t)=-t^2+6t+7$, valido dal lancio ($t=0$) fino a quando l’oggetto tocca il suolo. Per trovare quell’istante si risolve $h(t)=0$. Poiché
$$
-(t-7)(t+1)=-(t^2-6t-7)=-t^2+6t+7,
$$
i candidati sono $-1$ e $7$. Il primo è precedente al lancio, quindi è fuori dal dominio del modello; il secondo indica un urto dopo $7$ secondi. Per $0\le t<7$ il fattore $t-7$ è negativo e $t+1$ è positivo, quindi il loro prodotto è negativo e $h(t)$, che ne è l’opposto, è positiva. Perciò $7$ è davvero il primo istante dopo il lancio in cui l’oggetto raggiunge il suolo.
:::
