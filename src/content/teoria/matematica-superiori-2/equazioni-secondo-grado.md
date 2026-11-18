---
titolo: "Equazioni di secondo grado"
sommario: "Formula risolutiva, discriminante, relazioni di Viète, dominio e scelta delle radici nei problemi."
---

## Forma normale e significato delle radici

:::definizione{#forma titolo="Coefficienti e soluzioni"}
Un’equazione di secondo grado a coefficienti reali si riduce a $ax^2+bx+c=0$ con $a\ne0$. Per individuare $a$, $b$ e $c$ si sviluppano i prodotti, si riuniscono i termini in un solo membro e si raccolgono quelli dello stesso grado. Il segno fa parte del coefficiente. Un termine mancante ha coefficiente zero. Se i termini quadratici si cancellano, il grado si determina dopo la cancellazione.

Una radice reale è un valore di $x$ per cui il polinomio è zero. Se l’equazione proviene da una frazione o da un problema con vincoli sulle misure, il valore deve anche appartenere al dominio iniziale.
:::

:::esempio{titolo="Un’uguaglianza come intersezione di due grafici"}
Per $x(x+1)=12$ si trova $x^2+x-12=0$, con $a=1$, $b=1$ e $c=-12$. Poiché $(x+4)(x-3)=x^2+x-12$, le radici sono $-4$ e $3$. Le ordinate nei punti in cui i grafici di $y=x^2+x$ e $y=12$ si incontrano valgono entrambe $12$. Nell’equazione ridotta si è sottratto $12$ a ogni ordinata del primo grafico. Gli stessi punti d’incontro si leggono quindi come zeri del nuovo polinomio.

::grafico{f="x^2+x;12" legenda="y=x^2+x;y=12" xmin=-5 xmax=4 ymin=-2 ymax=17 punti="-4,12,pieno;3,12,pieno" segmenti="-4,0,-4,12;3,0,3,12" titolo="Le soluzioni sono le ascisse −4 e 3 dei due punti d’incontro"}
:::

## Equazioni pure e spurie

::::teorema{#incomplete titolo="Usare il termine mancante"}
Con $b=0$ l’equazione è pura e si riduce a $x^2=-\dfrac ca$. Con $c=0$ l’equazione è spuria e si può scrivere $x(ax+b)=0$.
:::dimostrazione
Nel primo caso si divide per $a$. Indicando il secondo membro con $u$, se $u>0$ le radici sono $\sqrt u$ e $-\sqrt u$, perché entrambi i quadrati valgono $u$. Per $u=0$ l’unico valore è zero. Per $u<0$ nessun quadrato reale può uguagliare $u$. Nel secondo caso un prodotto di reali è nullo esattamente quando si annulla almeno un fattore. Si ottiene $x=0$ oppure $ax+b=0$, quindi $x=-\dfrac ba$. Se anche $b=0$, i due valori coincidono.
:::
::::

:::esempio{titolo="Due radici opposte e controllo esatto"}
Da $3x^2=18$ si ricava $x^2=6$ e quindi $x=\pm\sqrt6$. Poiché $4<6<9$, ciascuna radice ha valore assoluto fra $2$ e $3$. Sostituire una delle due radici nell’equazione iniziale dà $3(\pm\sqrt6)^2=18$. Il segno meno produce una seconda soluzione, simmetrica rispetto all’asse verticale. Arrotondare i valori può aiutare a localizzarli, mentre la verifica esatta usa il radicale.

::grafico{f="3*x^2;18" legenda="y=3x^2;y=18" xmin=-3.2 xmax=3.2 ymin=-2 ymax=24 punti="-2.449489743,18,pieno;2.449489743,18,pieno" titolo="Le due ascisse sono opposte e hanno lo stesso quadrato"}
:::

:::esempio{titolo="Conservare la radice zero"}
In $3x^2+2x=0$ si raccoglie $x$ e si ottiene $x(3x+2)=0$. Le radici distinte sono $0$ e $-\dfrac23$. Dividere subito per $x$ sarebbe lecito per $x\ne0$, ma il caso escluso è proprio una soluzione. Il grafico incontra l’asse in due punti. Nell’origine il valore zero viene dal primo fattore, mentre nell’altro punto si annulla il secondo.

::grafico{f="3*x^2+2*x" xmin=-1.4 xmax=0.7 ymin=-0.55 ymax=2.4 punti="-0.666666667,0,pieno;0,0,pieno" etichette="-0.79,-0.2,−2⁄3" titolo="Il raccoglimento rende visibili entrambi gli zeri"}
:::

## Formula risolutiva

::::teorema{#formula titolo="Completare il quadrato"}
Per $a\ne0$ si pone $\Delta=b^2-4ac$. Se $\Delta\ge0$, le radici sono $\dfrac{-b+\sqrt\Delta}{2a}$ e $\dfrac{-b-\sqrt\Delta}{2a}$. Se $\Delta<0$, non ci sono radici reali.
:::dimostrazione
Si moltiplica l’equazione per $4a$ e si aggiunge $b^2$ ai due membri dopo aver spostato il termine costante.

$$
\begin{aligned}
4a^2x^2+4abx&=-4ac\\[6pt]
4a^2x^2+4abx+b^2&=b^2-4ac\\[6pt]
(2ax+b)^2&=\Delta.
\end{aligned}
$$

La moltiplicazione è reversibile perché $4a\ne0$. Un quadrato reale non può essere negativo. Se $\Delta\ge0$, il valore di $2ax+b$ può essere $\sqrt\Delta$ o $-\sqrt\Delta$. Sottraendo $b$ e dividendo per $2a$ si ottiene la formula. Con $\Delta=0$ i due segni conducono allo stesso valore.
:::
::::

:::esempio{titolo="Radici esatte e segni"}
Per $3x^2-2x-2=0$ si ha $\Delta=(-2)^2-4\cdot3\cdot(-2)=28$. Siccome $\sqrt{28}=2\sqrt7$, le radici sono $\dfrac{1\pm\sqrt7}{3}$. Una è negativa e l’altra positiva, perché $\sqrt7>1$. Per controllare i calcoli si può usare il quadrato completato: se $x=\dfrac{1\pm\sqrt7}{3}$, allora $6x-2=\pm2\sqrt7$ e in entrambi i casi $(6x-2)^2=28$.
:::

:::osservazione{titolo="Formula ridotta col coefficiente lineare pari"}
Se $b=2d$, il discriminante è $4(d^2-ac)$. Quando $d^2-ac\ge0$, nel numeratore della formula compare il fattore $2$ sia in $-2d$ sia in $\sqrt{4(d^2-ac)}$. Semplificandolo si ottiene $x=\dfrac{-d\pm\sqrt{d^2-ac}}{a}$. In $2x^2+8x+6=0$ si usa $d=4$. Risulta $d^2-ac=4$, quindi $x=\dfrac{-4\pm2}{2}$, cioè $-1$ e $-3$. Il calcolo diretto dà lo stesso risultato con $\Delta=16$.
:::

## Discriminante, vertice e radice doppia

::::teorema{#discriminante titolo="Leggere il numero di intersezioni"}
Con $\Delta>0$ ci sono due radici reali distinte. Con $\Delta=0$ c’è una sola radice distinta, $-\dfrac b{2a}$, che è doppia. Con $\Delta<0$ nessuna radice è reale.
:::dimostrazione
Riscrivendo il polinomio si ottiene

$$
ax^2+bx+c=a\left(x+\frac b{2a}\right)^2-\frac{\Delta}{4a}.
$$

Il vertice ha ascissa $-\dfrac b{2a}$ e ordinata $-\dfrac{\Delta}{4a}$. Quando $\Delta=0$, il polinomio è un multiplo del quadrato di un fattore lineare. Quando $\Delta>0$, l’equazione $\left(x+\dfrac b{2a}\right)^2=\dfrac{\Delta}{4a^2}$ chiede una distanza positiva dall’asse di simmetria e ammette due ascisse. Se $\Delta<0$, il secondo membro è negativo e l’uguaglianza è impossibile.
:::
::::

:::esempio{titolo="Spostare il vertice variando il termine noto"}
I polinomi $x^2-4x+5$, $x^2-4x+4$ e $x^2-4x+3$ hanno lo stesso asse $x=2$. Completando il quadrato diventano $(x-2)^2+1$, $(x-2)^2$ e $(x-2)^2-1$. Nel primo caso il minimo è positivo e non c’è intersezione con l’asse orizzontale. Nel secondo il vertice tocca l’asse in $x=2$. Nel terzo il minimo è negativo e gli zeri sono $1$ e $3$. Si ottengono così i tre esiti attraverso una traslazione verticale.

::grafico{f="(x-2)^2+1;(x-2)^2;(x-2)^2-1" legenda="y=(x-2)^2+1;y=(x-2)^2;y=(x-2)^2-1" xmin=-0.6 xmax=4.7 ymin=-1.8 ymax=5.1 punti="1,0,pieno;2,0,pieno;3,0,pieno" titolo="A parità di asse, l’altezza del vertice determina il numero di radici"}
:::

:::osservazione{titolo="Parabola rivolta verso il basso"}
Per $-x^2-2x-3=0$ si trova $\Delta=4-12=-8$. La curva $y=-(x+1)^2-2$ è rivolta verso il basso e ha massimo $-2$. Resta sotto l’asse orizzontale. In generale, con discriminante negativo le quote del polinomio hanno tutte il segno di $a$. Nel caso di due radici distinte, invece, la distanza tra le ascisse è $\dfrac{\sqrt\Delta}{|a|}$. Si ottiene sottraendo i due valori della formula e prendendo il valore assoluto, che serve anche quando $a<0$.

::grafico{f="-(x+1)^2-2" xmin=-3.8 xmax=1.8 ymin=-9.6 ymax=1.15 punti="-1,-2,pieno,V" titolo="Il massimo vale −2 e la parabola non raggiunge l’asse delle ascisse"}
:::

:::osservazione{titolo="Cambiare scala senza cambiare le radici"}
Se si moltiplica l’equazione per $\lambda\ne0$, il nuovo discriminante è $(\lambda b)^2-4(\lambda a)(\lambda c)=\lambda^2\Delta$. Il suo segno resta invariato. Per esempio, $x^2-5x+4=0$ ha discriminante $9$ e radici $1$ e $4$. Moltiplicando per $-2$ si ottiene $-2x^2+10x-8=0$ con discriminante $36$. Le radici restano $1$ e $4$ e la loro distanza è sempre $3$: nel secondo caso $\dfrac{\sqrt{36}}{|-2|}=3$. Il numero scritto come discriminante dipende dalla forma scelta, il suo segno e la distanza tra gli zeri no.
:::

## Relazioni di Viète e costruzione dalle radici

::::teorema{#viete titolo="Somma, prodotto e fattorizzazione"}
Se $x_1$ e $x_2$ sono le radici reali, contando due volte la radice doppia, allora

$$
x_1+x_2=-\frac ba,\qquad x_1x_2=\frac ca.
$$

Il polinomio è $a(x-x_1)(x-x_2)$.
:::dimostrazione
Per due radici distinte, la differenza tra $ax^2+bx+c$ e $a(x-x_1)(x-x_2)$ ha grado al più uno, perché i termini quadratici si cancellano. La differenza è nulla in entrambe le radici, dunque vale zero per ogni $x$. Quando la radice è doppia, la fattorizzazione segue dal quadrato completato con $\Delta=0$. Sviluppando il prodotto si ottiene $ax^2-a(x_1+x_2)x+ax_1x_2$. Confrontare i coefficienti di $x$ e del termine noto dà le due relazioni.
:::
::::

:::esempio{titolo="Radici assegnate e coefficiente principale"}
Per costruire un polinomio di secondo grado con radici $-1$ e $3$ si usano i fattori $x+1$ e $x-3$. Il polinomio monico è $(x+1)(x-3)=x^2-2x-3$. Se il coefficiente principale deve essere $2$, il trinomio richiesto è $2x^2-4x-6$. I grafici differiscono nelle ordinate, ma conservano gli stessi zeri. Dalle relazioni si legge la somma $2$ e il prodotto $-3$ in entrambi i casi, perché $-\dfrac ba$ e $\dfrac ca$ restano invariati quando tutti i coefficienti sono moltiplicati per lo stesso numero non nullo.

::grafico{f="(x+1)*(x-3);2*(x+1)*(x-3)" legenda="y=(x+1)(x-3);y=2(x+1)(x-3)" xmin=-2 xmax=4 ymin=-9 ymax=9 punti="-1,0,pieno;3,0,pieno" titolo="Moltiplicare tutte le ordinate per due conserva gli zeri"}
:::

:::esempio{titolo="Risolvere il problema inverso di somma e prodotto"}
Due numeri di somma $s$ e prodotto $p$ sono le radici di $t^2-st+p=0$. Il discriminante $s^2-4p$ decide se esistono due numeri reali con quei dati. Per $s=5$ e $p=7$ si trova $25-28=-3$, quindi la coppia non esiste. Per $s=-7$ e $p=10$ si ottiene $t^2+7t+10=(t+2)(t+5)$ e i due numeri sono $-2$ e $-5$. Si può calcolare anche la somma dei quadrati senza trovare i singoli valori. Infatti $x_1^2+x_2^2=s^2-2p$, che nel secondo caso vale $49-20=29$. Quando $s^2=4p$ i due numeri coincidono.
:::

:::esempio{titolo="Una radice nota determina l’altra e un coefficiente"}
Supponiamo che $3$ sia radice di $2x^2+bx-24=0$. Il prodotto delle radici è $-12$, quindi l’altra è $-12:3=-4$. La somma è $3-4=-1$, perciò $-\dfrac b2=-1$ e $b=2$. Si può verificare sostituendo $3$ nell’equazione: $18+3b-24=0$ impone lo stesso coefficiente. Sostituire $3$ fissa $b$, mentre la relazione sul prodotto fornisce anche l’altra radice senza dover usare la formula risolutiva. Lo stesso procedimento attraverso il prodotto richiede che la radice nota sia diversa da zero.
:::

## Equazioni fratte e controllo del dominio

::::teorema{#fratte titolo="Intersecare i candidati con il dominio"}
Dopo aver escluso gli zeri dei denominatori, si può moltiplicare per un loro multiplo comune diverso da zero in tutto il dominio. Le soluzioni sono solo i candidati dell’equazione ottenuta che appartengono al dominio iniziale.
:::dimostrazione
Per ogni $x$ ammesso, la divisione per il multiplo comune inverte il passaggio. Quindi l’equazione senza denominatori è equivalente a quella iniziale nel dominio. Fuori dal dominio, almeno uno dei membri originali non è definito. Un candidato che annulla un denominatore non può essere una soluzione neanche se verifica l’equazione senza frazioni.
:::
::::

:::esempio{titolo="Un fattore comune lascia un punto mancante"}
In $\dfrac{x^2-5x+6}{x-2}=0$ si esclude $x=2$. Gli zeri del numeratore $(x-2)(x-3)$ sono $2$ e $3$. Il primo è escluso, quindi resta $x=3$. Cancellando il fattore $x-2$ si ottiene il membro $x-3$ soltanto per $x\ne2$. La figura ha un punto mancante in $(2,-1)$ e l’unico zero ammesso è $(3,0)$. Il controllo nell’equazione originale dà $\dfrac{9-15+6}{3-2}=0$.

::grafico{f="x-3" xmin=-0.6 xmax=5.4 ymin=-4 ymax=2.6 punti="2,-1,vuoto;3,0,pieno" titolo="Il membro sinistro ha uno zero e un punto mancante"}
:::

:::esempio{titolo="Due denominatori con un fattore in comune"}
Nell’equazione $\dfrac{x+1}{x-2}=\dfrac{18}{(x-2)(x+1)}$ sono esclusi $2$ e $-1$. Moltiplicando per $(x-2)(x+1)$ si ottiene $(x+1)^2=18$, dunque $x=-1\pm3\sqrt2$. Nessuna radice è $-1$, perché il quadrato in quel punto vale zero. Nessuna è $2$, perché il quadrato in $2$ è $9$. Entrambe appartengono al dominio. Poiché la moltiplicazione può essere invertita per quei valori, l’uguaglianza del quadrato verifica anche l’equazione iniziale.
:::

## Parametri e condizioni sulle radici

:::esempio{#parametri titolo="Separare la perdita di grado dal discriminante nullo"}
Per $(k-1)x^2+x-1=0$, con $k=1$ si ottiene $x-1=0$, di primo grado. La soluzione è $1$. Per $k\ne1$ il discriminante vale $1+4(k-1)=4k-3$. Se $k<\dfrac34$, non ci sono radici reali. Per $k=\dfrac34$ il discriminante è zero e la radice doppia è $2$. Se $k>\dfrac34$ e $k\ne1$, ci sono due radici distinte. Sia $k=1$ sia $k=\dfrac34$ danno una sola soluzione distinta, per ragioni diverse: nel primo caso la parabola è diventata una retta, nel secondo ha un punto di tangenza.
:::

:::esempio{titolo="Richiedere due radici positive e distinte"}
Per $x^2-6x+k=0$ occorrono $\Delta=36-4k>0$ e $k>0$. La prima condizione garantisce due radici reali distinte. Il prodotto $k$ positivo impone lo stesso segno, e la somma $6$ positiva stabilisce che il segno è positivo per entrambe. Si ottiene $0<k<9$. Per $k=0$ una radice è zero, mentre per $k=9$ le radici coincidono. Con $k<0$ si hanno radici di segno opposto, perché $36-4k>0$ e il prodotto è negativo.

::grafico{xmin=-1.4 xmax=10.6 ymin=-0.72 ymax=0.9 uguale=1 assi=0 vettori="-1.05,0,10.1,0" linee="0,0.28 9,0.28" segmenti="0,0,0,0.28;9,0,9,0.28" punti="0,0,vuoto;9,0,vuoto" etichette="-0.07,-0.33,0;8.93,-0.33,9;10.2,0.08,k" titolo="I parametri ammessi sono fra 0 e 9, con entrambi gli estremi esclusi"}
:::

:::esempio{titolo="Se si annullano tutti i coefficienti"}
In $(k-2)(x^2+x+1)=0$ il caso $k=2$ annulla l’intero membro sinistro. L’uguaglianza è vera per ogni reale. Soltanto per $k\ne2$ si può dividere per $k-2$ e ottenere $x^2+x+1=0$, che ha discriminante $-3$ e nessuna radice reale. Quindi l’equazione della famiglia passa da nessuna soluzione a infinite soluzioni. Controllare il grado prima di calcolare il discriminante distingue il caso d’identità da quello di radice doppia.
:::

## Problemi e interpretazione delle soluzioni

:::esempio{#problemi titolo="Selezionare una misura fisicamente possibile"}
Un rettangolo ha area $45\,\mathrm{cm}^2$ e base più lunga dell’altezza di $4\,\mathrm{cm}$. Se $h$ è l’altezza in centimetri, allora $h(h+4)=45$. La forma normale si scompone in $(h-5)(h+9)=0$. I candidati sono $5$ e $-9$. Si sceglie $h=5$, perché i lati devono essere positivi. La base vale $9$ e il controllo $5\cdot9=45$ restituisce l’area. Il candidato negativo è una radice dell’equazione, ma è fuori dal dominio delle misure.

::grafico{assi=0 uguale=1 xmin=-1.14 xmax=10.25 ymin=-1 ymax=5.9 poligoni="0,0 9,0 9,5 0,5" linee="0,0 9,0 9,5 0,5 0,0" etichette="4.17,-0.53,9 cm;-0.85,2.35,5 cm" titolo="L’altezza e la base ammesse ricostruiscono l’area di 45 cm²"}
:::

:::esempio{titolo="Area assegnata a perimetro fissato"}
Con perimetro $28\,\mathrm{cm}$, due lati adiacenti hanno somma $14\,\mathrm{cm}$. Per avere area $48\,\mathrm{cm}^2$, i due lati devono essere le radici di $t^2-14t+48=0$. Il discriminante è $196-192=4$, quindi i lati sono $6$ e $8$, entrambi positivi. Scambiarli cambia soltanto quale lato si chiama base.

Se si richiede area $50\,\mathrm{cm}^2$, il discriminante diventa $196-200=-4$, dunque nessuna coppia reale soddisfa le due condizioni. Più in generale, per semiperimetro $s$ e area $A$, la condizione $s^2-4A\ge0$ impone $A\le\dfrac{s^2}{4}$. Al valore limite le radici coincidono: il rettangolo di area massima, a perimetro fissato, è un quadrato.
:::

:::esempio{titolo="Una radice prima dell’inizio del modello"}
L’altezza in metri di un oggetto dopo $t$ secondi segue il modello $h(t)=-t^2+6t+7$, valido dal lancio fino a quando l’oggetto tocca il suolo. Per trovare quell’istante si risolve $h(t)=0$. Poiché $-t^2+6t+7=-(t-7)(t+1)$, i candidati sono $-1$ e $7$. Il primo è precedente al lancio e il secondo indica un urto dopo $7$ secondi. Nell’intervallo $0\le t<7$, il fattore $t-7$ è negativo e $t+1$ è positivo: l’altezza è positiva, quindi $7$ è davvero il primo istante dopo il lancio in cui si raggiunge il suolo.
:::
