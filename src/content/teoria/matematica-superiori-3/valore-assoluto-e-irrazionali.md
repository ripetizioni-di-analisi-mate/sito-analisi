---
titolo: Valore assoluto ed equazioni irrazionali
sommario: Come leggere il valore assoluto come distanza e risolvere equazioni e disequazioni con moduli e radici reali.
---

## Il valore assoluto come distanza

:::definizione{#assoluto titolo="Valore assoluto"}
Il **valore assoluto** di un numero reale $u$ è la sua distanza da zero. Se $u\geq0$, la distanza è $u$. Se $u<0$, la distanza è $-u$, che in questo caso è positivo. Quindi $|-5|=5$ e $|5|=5$. In generale $|u|$ è non negativo e vale zero solo quando $u=0$.

La differenza $x-a$ è lo spostamento con segno da $a$ a $x$. Perciò $|x-a|$ è la distanza fra questi due punti. Per esempio $|1-4|=3$ e $|7-4|=3$, quindi $1$ e $7$ si trovano ai lati di $4$ alla stessa distanza.
:::

:::esempio{titolo="Il grafico dei due tratti"}
Per $y=|x-2|$, l'argomento $x-2$ è negativo a sinistra di $2$ e non negativo a destra. Il grafico è quindi la semiretta $y=2-x$ per $x<2$ e la semiretta $y=x-2$ per $x\geq2$. Le due rette si incontrano in $(2,0)$. Allontanarsi da $2$ di un'unità in entrambi i versi fa crescere l'ordinata di un'unità.

::grafico{f="abs(x-2)" xmin=-2 xmax=6 ymin=-1 ymax=5 punti="1,1,pieno;2,0,pieno;3,1,pieno" titolo="I punti di ascissa $1$ e $3$ distano entrambi $1$ da $2$"}

:::

::::teorema{#distanza-proprieta titolo="Simmetria della distanza e fattori costanti"}
Per ogni coppia di numeri reali $u,v$ valgono $|-u|=|u|$ e $|uv|=|u||v|$. Di conseguenza, se $a\neq0$, il modulo di $ax+b$ è $|a|\left|x+\dfrac ba\right|$. La distanza si misura quindi dal punto $-\dfrac ba$ e viene moltiplicata per $|a|$.

:::dimostrazione
Per ogni numero reale $u$, il prodotto $u^2$ è non negativo e la sua radice quadrata è la distanza di $u$ da zero. Poiché $(-u)^2=u^2$, si ha $|-u|=|u|$. Inoltre $|u||v|$ è non negativo e il suo quadrato vale $u^2v^2=(uv)^2$, quindi coincide con $|uv|$. Per il caso affine si raccoglie $a$, ottenendo $ax+b=a\left(x+\dfrac ba\right)$, e si applica il risultato sul prodotto.
:::
::::

:::esempio{titolo="Leggere centro e ampiezza dalla stessa formula"}
Scriviamo $|6-2x|=2|x-3|$. Il fattore $2$ moltiplica la distanza da $3$. Pertanto la quota $4$ corrisponde a una distanza orizzontale di $2$ da quel centro. Si ottengono le ascisse $1$ e $5$. Per verificare, in $x=1$ l’argomento vale $4$ e in $x=5$ vale $-4$. La curva ha pendenze $-2$ e $2$ nei due tratti. Dall’ascissa $3$ alle due ascisse trovate si percorrono due unità orizzontali e si sale di quattro unità verticali.

::grafico{f="abs(6-2*x);4" xmin=-0.3 xmax=6.3 ymin=-1 ymax=7 punti="1,4,pieno;3,0,pieno,V;5,4,pieno" titolo="Il fattore $2$ trasforma una distanza orizzontale di $2$ in un’ordinata di $4$"}

:::

## Equazioni con valore assoluto

:::teorema{#equazioni titolo="Due possibilità per la distanza"}
Sia $f$ definita per i valori di $x$ in esame. Per $r>0$, l'equazione $|f(x)|=r$ equivale a $f(x)=r$ oppure $f(x)=-r$. Se $r=0$ rimane la sola condizione $f(x)=0$. Se $r<0$, non ci sono soluzioni perché il valore assoluto è sempre non negativo.

Se il secondo membro è un'espressione $g(x)$, il suo segno dipende da $x$. Si lavora perciò nel dominio comune con il vincolo $g(x)\geq0$, poi si risolvono le due equazioni $f(x)=g(x)$ e $f(x)=-g(x)$. Si conservano solo le radici appartenenti al dominio che rispettano il vincolo.
:::

:::esempio{titolo="Un secondo membro che cambia segno"}
In $|2x-3|=x$, il membro di destra è non negativo per $x\geq0$. Nel primo caso $2x-3=x$, quindi $x=3$. Nel secondo caso $2x-3=-x$, quindi $3x=3$ e $x=1$. I due candidati soddisfano $x\geq0$ e in effetti $|6-3|=3$ e $|2-3|=1$.

::grafico{f="abs(2*x-3);x" xmin=-1 xmax=4.5 ymin=-1 ymax=6 punti="1,1,pieno;3,3,pieno" titolo="Le due intersezioni risolvono $|2x-3|=x$"}

:::

:::esempio{titolo="Quante intersezioni produce il parametro?"}
Consideriamo $|x-1|=k+2$ con $k$ reale. Nel grafico si interseca la curva $y=|x-1|$ con la retta orizzontale $y=k+2$. La quota più bassa della curva è $0$ e si raggiunge in $x=1$. Il valore del parametro che porta la retta a quella quota è $k=-2$.

- Per $k<-2$ la retta è sotto il vertice, quindi non ci sono intersezioni.
- Per $k=-2$ si incontra solo il vertice e la soluzione è $x=1$.
- Per $k>-2$ la retta taglia entrambi i rami. Risolvendo $x-1=k+2$ oppure $x-1=-(k+2)$ si ottengono $x=k+3$ e $x=-k-1$.

Per esempio, $k=0$ dà quota $2$ e soluzioni $-1$ e $3$. Il grafico mostra perché il numero di soluzioni dipende dalla quota e perché nel caso limite le due ascisse coincidono.

::grafico{f="abs(x-1);2;-1" xmin=-3 xmax=5 ymin=-2 ymax=5 punti="-1,2,pieno;1,0,pieno;3,2,pieno" titolo="Con quota $2$ ci sono due intersezioni, a quota $0$ si ha solo il vertice e a quota $-1$ nessuna"}

:::

:::esempio{titolo="Due distanze uguali richiedono un punto medio"}
In $|x+2|=|x-6|$ si cercano punti equidistanti da $-2$ e da $6$. Il loro punto medio è $2$. Per verificare che sia l'unica soluzione si possono elevare al quadrato i membri, che sono entrambi non negativi.

$$
\begin{aligned}
(x+2)^2&=(x-6)^2\\[4pt]
x^2+4x+4&=x^2-12x+36\\[4pt]
16x&=32\\[4pt]
x&=2.
\end{aligned}
$$

I due polinomi hanno lo stesso termine in $x^2$, che si elimina. Sostituendo si ottiene $|2+2|=|2-6|=4$. Le due curve sono simmetriche rispetto alla verticale del punto medio. Per esempio in $x=0$ le distanze sono $2$ e $6$, mentre in $x=4$ sono $6$ e $2$.

::grafico{f="abs(x+2);abs(x-6)" xmin=-4 xmax=8 ymin=-1 ymax=8 punti="-2,0,pieno;6,0,pieno;2,4,pieno,P" titolo="Le distanze da $-2$ e da $6$ sono uguali in $x=2$"}

:::

## Distanze inferiori a una soglia

:::teorema{#interne titolo="Distanza minore di un raggio"}
Per $r>0$ la condizione $|f(x)|<r$ equivale a $-r<f(x)<r$. Il numero $f(x)$ deve essere contemporaneamente a destra di $-r$ e a sinistra di $r$. Con $|f(x)|\leq r$ le due disuguaglianze diventano non strette e si ammettono gli estremi. Per $r=0$ il confronto stretto è impossibile, mentre quello non stretto ammette solo gli zeri di $f$. Per $r<0$ entrambi i confronti sono impossibili.
:::

:::esempio{titolo="Segno del coefficiente dell'incognita"}
In $|5-2x|<3$ la doppia disuguaglianza è $-3<5-2x<3$. Sottraendo $5$ si ottiene $-8<-2x<-2$. Dividendo per $-2$, entrambi i versi si invertono e si ha $4>x>1$. L'insieme delle soluzioni è $(1,4)$. Il punto $x=4$ dà $|5-8|=3$, quindi resta escluso. Il punto $x=2$ è interno e dà $|5-4|=1<3$.
:::

::::teorema{#modulo-minore-variabile titolo="Un limite che dipende dall’incognita"}
Siano $f$ e $g$ definite nello stesso punto. La condizione $|f(x)|\leq g(x)$ equivale alle due disuguaglianze $-g(x)\leq f(x)$ e $f(x)\leq g(x)$ soddisfatte insieme. Per il confronto stretto occorrono entrambe le disuguaglianze strette. La sola presenza di questi due limiti impone che $g(x)$ sia non negativo nel primo caso e positivo nel secondo.

:::dimostrazione
Se $|f(x)|\leq g(x)$, sia $f(x)$ sia $-f(x)$ sono al più $g(x)$, perché il modulo è il maggiore dei due. Moltiplicando $-f(x)\leq g(x)$ per $-1$ si ha $f(x)\geq-g(x)$. Viceversa, dalle due disuguaglianze segue che sia $f(x)$ sia $-f(x)$ sono al più $g(x)$, quindi lo è anche il loro massimo. Nel caso stretto lo stesso ragionamento vale con entrambe le disuguaglianze strette.
:::
::::

:::esempio{titolo="Il confronto si riduce a due condizioni lineari"}
Per $|2x-1|\leq x+2$ si impongono $-x-2\leq2x-1$ e $2x-1\leq x+2$. La prima dà $-1\leq3x$, ossia $x\geq-\dfrac13$. La seconda dà $x\leq3$. Il risultato è $\left[-\dfrac13,3\right]$. In tutto questo intervallo il secondo membro $x+2$ è positivo. Nel punto $x=-\dfrac13$ il modulo e la retta hanno ordinata $\dfrac53$. Nel punto $x=3$ hanno ordinata $5$. Tra queste due ascisse il grafico del modulo è al più all'altezza della retta, anche se la soglia varia con $x$.

::grafico{f="abs(2*x-1);x+2" xmin=-2 xmax=4.5 ymin=-1 ymax=8 punti="-0.3333333333,1.6666666667,pieno;3,5,pieno" titolo="La soglia cresce con $x$ e incontra entrambi i rami del modulo"}

:::

:::esempio{titolo="Due tolleranze sulla stessa misura"}
Un pezzo di lunghezza $x$ in millimetri è ammesso dal primo controllo quando dista al più $2$ da $50$. Un secondo controllo chiede una distanza strettamente minore di $2$ da $51$. Le condizioni sono $|x-50|\leq2$ e $|x-51|<2$. La prima dà $[48,52]$. La seconda dà $(49,53)$. Per superare i due controlli si prende l'intersezione, quindi $x\in(49,52]$.

Il valore $49$ verifica il primo controllo perché lo scarto è $1$. Nel secondo lo scarto è $2$, quindi $49$ è escluso. In $52$ lo scarto dal primo centro è $2$ e quello dal secondo è $1$, entrambi ammessi. Se bastasse superare almeno uno dei controlli, si prenderebbe l'unione $[48,53)$. Cambia così quali estremi si conservano quando cambia la richiesta.
:::

## Distanze superiori a una soglia

:::teorema{#esterne titolo="Distanza maggiore di un raggio"}
Per $r>0$ la condizione $|f(x)|>r$ equivale a $f(x)<-r$ oppure $f(x)>r$. Sulla retta sono ammesse due semirette distinte, quindi si usa un'unione. Per $|f(x)|\geq r$ si aggiungono i valori in cui $f(x)=-r$ o $f(x)=r$. Se $r=0$, il confronto $|f(x)|>0$ esclude gli zeri di $f$, mentre $|f(x)|\geq0$ vale in tutto il dominio. Se $r<0$, entrambi i confronti valgono in tutto il dominio.
:::

:::esempio{titolo="Una soglia con due intervalli"}
La disequazione $|x+1|\geq2$ chiede i punti a distanza almeno $2$ da $-1$. Il primo ramo è $x+1\leq-2$, quindi $x\leq-3$. Il secondo è $x+1\geq2$, quindi $x\geq1$. Il grafico della distanza e la retta $y=2$ si incontrano in $x=-3$ e $x=1$. La soluzione è l'unione $(-\infty,-3]\cup[1,+\infty)$.

::grafico{f="abs(x+1);2" xmin=-5 xmax=3 ymin=-1 ymax=5 punti="-3,2,pieno;1,2,pieno" titolo="La distanza raggiunge o supera $2$ a sinistra di $-3$ o a destra di $1$, estremi inclusi"}

:::

:::esempio{titolo="L’esterno di un intervallo con un punto aggiunto"}
Per $|x^2-9|\geq9$, si richiede che il quadrato differisca da $9$ di almeno $9$. Un primo caso è $x^2-9\leq-9$. Aggiungendo $9$ si ottiene $x^2\leq0$ e quindi il solo valore $x=0$. L'altro caso è $x^2-9\geq9$, che equivale a $x^2\geq18$. Poiché $\sqrt{18}=3\sqrt2$, si ottengono le semirette con $x\leq-3\sqrt2$ e $x\geq3\sqrt2$. La soluzione è l'unione di queste semirette con il punto $0$. In $x=1$ il modulo vale $8$, quindi si comprende perché il punto centrale resta separato dal ramo di destra. Per la simmetria del quadrato, lo stesso vale a sinistra.

::grafico{f="abs(x^2-9);9" xmin=-5.2 xmax=5.2 ymin=-1 ymax=18 punti="-4.2426406871,9,pieno;0,9,pieno;4.2426406871,9,pieno" titolo="La quota $9$ è raggiunta anche in $x=0$, che è una soluzione isolata"}

:::

## Radicali e dominio

:::definizione{#radicali titolo="Radice quadrata reale"}
Per $u\geq0$, $\sqrt u$ è l'unico numero reale non negativo il cui quadrato vale $u$. Il numero $u$ si chiama **radicando**. Per esempio $\sqrt9=3$, perché $3\geq0$ e $3^2=9$. Per la stessa definizione $\sqrt{x^2}=|x|$. In particolare, se $x=-4$ allora $\sqrt{x^2}=4$.

Una radice di indice pari impone un radicando maggiore o uguale a zero. Una radice di indice dispari, come $\sqrt[3]{x}$, è definita anche per $x<0$. Se compare un denominatore, bisogna richiedere inoltre che il denominatore sia diverso da zero. In $\dfrac1{\sqrt{x-2}}$ questo significa $x-2>0$.
:::

:::esempio{titolo="Due condizioni di esistenza"}
Nell'espressione $\dfrac{\sqrt{x+2}}{\sqrt{5-x}}$, il numeratore esiste per $x+2\geq0$. Il denominatore deve esistere e avere valore positivo, quindi $5-x>0$. Le due condizioni impongono rispettivamente $x\geq-2$ e $x<5$. Il dominio è $[-2,5)$. In $-2$ il numeratore vale zero e il rapporto è definito. In $5$ si annulla il denominatore, quindi il rapporto è indefinito.
:::

:::esempio{titolo="Un quoziente sotto la radice"}
Per trovare il dominio di $\sqrt{\dfrac{x-1}{x+2}}$, il rapporto deve essere definito e non negativo. Il suo denominatore è zero in $-2$ e il numeratore è zero in $1$. I due punti dividono la retta in tre intervalli. Per $x<-2$ sia $x-1$ sia $x+2$ sono negativi, quindi il rapporto è positivo. Per $-2<x<1$ il numeratore è negativo e il denominatore positivo. Per $x>1$ sono entrambi positivi. In $x=1$ il rapporto vale zero ed è ammesso. Si ottiene così $(-\infty,-2)\cup[1,+\infty)$.

Se la radice fosse a sua volta al denominatore, occorrerebbe stretta positività del radicando e si escluderebbe anche $1$. Per esempio, in $x=0$ il rapporto vale $-\dfrac12$ e nessuna delle due funzioni sarebbe reale. In $x=1$ la funzione con la sola radice vale invece zero e quella con il reciproco resta indefinita.

::grafico{f="sqrt((x-1)/(x+2))" xmin=-6 xmax=6 ymin=-0.5 ymax=4 asintoti="x=-2" punti="1,0,pieno" titolo="Il ramo di destra inizia nel punto $x=1$, dove il radicando vale zero"}

:::

## Equazioni con una radice

::::teorema{#irrazionali titolo="Elevamento al quadrato equivalente"}
Siano $f$ e $g$ espressioni reali definite nel dominio comune in esame. L'equazione $\sqrt{f(x)}=g(x)$ equivale a

$$
\begin{cases}
g(x)\geq0,\\
f(x)=g(x)^2.
\end{cases}
$$

:::dimostrazione
Se vale l'uguaglianza, il secondo membro è non negativo perché è uguale a una radice quadrata. Elevando al quadrato si ottiene $f(x)=g(x)^2$. Nel verso opposto, se $f(x)=g(x)^2$ allora $f(x)\geq0$ e la radice esiste. Poiché $g(x)\geq0$, $g(x)$ è il numero non negativo il cui quadrato vale $f(x)$. Quindi è proprio $\sqrt{f(x)}$.
:::
::::

:::esempio{titolo="Un candidato estraneo dopo il quadrato"}
Nell'equazione $\sqrt{x+2}=x$ serve $x\geq0$. Elevando al quadrato si ottiene $x^2-x-2=(x-2)(x+1)=0$. I candidati sono $2$ e $-1$. In $-1$ il radicando è positivo, ma i membri dell'equazione iniziale valgono $1$ e $-1$. Per $x=2$ valgono entrambi $2$, quindi la soluzione è $\{2\}$.

::grafico{f="sqrt(x+2);x" xmin=-3 xmax=4 ymin=-2 ymax=4 punti="2,2,pieno;-1,1,pieno;-1,-1,pieno" segmenti="-1,-1,-1,1" titolo="In $x=-1$ i quadrati coincidono, mentre le ordinate sono opposte"}

:::

:::esempio{titolo="Due radicali e il segno prima del quadrato"}
Risolviamo $\sqrt{x+4}=2-\sqrt x$. Le due radici esistono per $x\geq0$. In più il membro di destra deve essere non negativo, quindi $\sqrt x\leq2$ e il vincolo diventa $0\leq x\leq4$. Su questo intervallo si può elevare al quadrato.

$$
\begin{aligned}
x+4&=(2-\sqrt x)^2\\[4pt]
&=4-4\sqrt x+x,\\[4pt]
4\sqrt x&=0,\\[4pt]
x&=0.
\end{aligned}
$$

Per $x=0$ entrambi i membri iniziali valgono $2$. Per ogni $x>0$ del dominio, $\sqrt{x+4}>2$ e $2-\sqrt x<2$. Le due curve si allontanano dunque dalla quota comune appena ci si sposta a destra di $0$. Il punto $(0,2)$ è l'unica intersezione.

::grafico{f="sqrt(x+4)+0*sqrt(x);2-sqrt(x)" legenda="y=\sqrt{x+4};y=2-\sqrt{x}" xmin=-0.8 xmax=6 ymin=-1 ymax=4 punti="0,2,pieno" titolo="Le due curve hanno ordinata comune solo al confine $x=0$"}

:::

::::teorema{#uguaglianza-di-radici titolo="Due radici quadrate nella stessa equazione"}
Siano $f$ e $g$ definite in un insieme $D$. L'equazione $\sqrt{f(x)}=\sqrt{g(x)}$ equivale a $f(x)=g(x)$ per tutti e soli i valori in cui i due radicandi sono non negativi. Il controllo del dominio resta necessario anche quando i radicandi, dopo un calcolo, risultano uguali.

:::dimostrazione
Se le radici sono uguali, sono definite e ciascuna è non negativa. Il loro quadrato restituisce rispettivamente $f(x)$ e $g(x)$, da cui l'uguaglianza dei radicandi. Viceversa, se i radicandi sono uguali e non negativi, per definizione hanno la stessa radice quadrata. Le due direzioni dimostrano l'equivalenza sul dominio comune.
:::
::::

:::esempio{titolo="Il candidato comune può essere fuori dal dominio"}
Consideriamo $\sqrt{x+1}=\sqrt{2x-1}$. Il dominio comune è $x\geq\dfrac12$. Uguagliando i radicandi si ottiene $x+1=2x-1$, quindi $x=2$. Il candidato appartiene al dominio e dà $\sqrt3$ in entrambi i membri.

Se si confrontano invece $\sqrt{x-5}$ e $\sqrt{2x-6}$, il dominio comune è $x\geq5$. L'uguaglianza dei radicandi conduce a $x-5=2x-6$, da cui $x=1$. In quella ascissa entrambi i radicandi valgono $-4$, quindi nessuna delle due radici è reale. I due grafici esistono entrambi da $5$ in poi e il secondo rimane più alto, poiché $2x-6-(x-5)=x-1>0$ su quel tratto.

::grafico{f="sqrt(x-5);sqrt(2*x-6)" xmin=0 xmax=10 ymin=-1 ymax=4 punti="5,0,pieno;3,0,pieno;5,2,pieno" titolo="Dove esistono entrambe, le radici hanno ordinate diverse"}

:::

:::esempio{titolo="Differenza fra due radici e somma coniugata"}
In $\sqrt{x+16}-\sqrt x=2$, entrambe le radici esistono per $x\geq0$. Poniamo $u=\sqrt{x+16}$ e $v=\sqrt x$. Dalla richiesta $u-v=2$ si può ricavare anche la somma. Infatti la differenza dei quadrati vale $16$, indipendentemente dall'ascissa.

$$
\begin{aligned}
u^2-v^2&=(x+16)-x=16,\\[4pt]
(u-v)(u+v)&=16,\\[4pt]
u+v&=8.
\end{aligned}
$$

Si può dividere per $u-v$ perché, in una soluzione, vale $2$. Sottraendo $u-v=2$ da $u+v=8$ si trova $2v=6$, quindi $\sqrt x=3$ e $x=9$. La verifica nella traccia originale dà $\sqrt{25}-\sqrt9=5-3=2$. In questo caso basta risolvere un sistema lineare nelle due radici. Il controllo finale conferma che i valori $u=5$ e $v=3$ vengono effettivamente dallo stesso $x$.
:::

## Disequazioni con una radice

:::teorema{#confronti titolo="Confrontare quantità non negative"}
La funzione quadrato è strettamente crescente sui numeri non negativi. Infatti, per $v>u\geq0$ si ha $v^2-u^2=(v-u)(v+u)>0$. Se entrambi i membri di una disequazione sono non negativi, elevarli al quadrato conserva il verso del confronto.

Sia $c\geq0$. Allora $\sqrt{f(x)}\leq c$ equivale a $0\leq f(x)\leq c^2$. La prima disuguaglianza serve per il dominio, la seconda impone il confronto. Se $c$ è sostituito da $g(x)$, quando $g(x)<0$ il confronto $\sqrt{f(x)}\leq g(x)$ è impossibile. Nello stesso caso il confronto $\sqrt{f(x)}>g(x)$ è automaticamente vero in tutto il dominio della radice. Per $g(x)\geq0$ si confrontano i quadrati mantenendo la condizione di esistenza.
:::

:::esempio{titolo="La retta attraversa l'asse"}
Per $\sqrt{x+2}>x$, il dominio è $x\geq-2$. Su $[-2,0)$ il membro di sinistra è non negativo e quello di destra è negativo, quindi la disuguaglianza è vera. Per $x\geq0$ si può elevare al quadrato e si ottiene

$$
\begin{aligned}
x+2>x^2&\iff (x-2)(x+1)<0 \\[4pt]
&\iff -1<x<2.
\end{aligned}
$$

Intersecando il secondo caso con $x\geq0$ si ottiene $[0,2)$. Unendo i due casi, la soluzione è $[-2,2)$. Si include $-2$ perché $0>-2$, mentre $2$ è escluso perché le ordinate sono uguali.
:::

:::esempio{titolo="Una soglia fra zero e uno"}
Per $\sqrt{x}\leq x$, il dominio è $[0,+\infty)$. Anche il secondo membro è non negativo, quindi il quadrato conserva l'inequazione. Si ottiene $x\leq x^2$, cioè $x(x-1)\geq0$. Il prodotto è positivo per $x<0$ oppure per $x>1$. Vale zero in $0$ e in $1$. Intersecando con il dominio si trova $\{0\}\cup[1,+\infty)$. Il punto $0$ è isolato nell'insieme soluzione, perché tra $0$ e $1$ la radice supera il proprio radicando. Per esempio, in $x=\dfrac14$ il primo membro vale $\dfrac12$, maggiore di $\dfrac14$. In $x=4$ la radice vale invece $2$ e il confronto è vero.

::grafico{f="sqrt(x);x" xmin=-0.5 xmax=4 ymin=-0.5 ymax=4 punti="0,0,pieno;1,1,pieno;0.25,0.5,pieno" titolo="La radice e la retta si incontrano in $0$ e in $1$"}

:::

## Espressioni definite a tratti

:::esempio{#tratti titolo="Una somma di distanze"}
In $|x-1|+|x-4|$ si sommano le distanze di $x$ da $1$ e da $4$. Sul tratto $1\leq x\leq4$, quelle due distanze ricoprono il segmento da $1$ a $4$, quindi la somma vale sempre $3$. A sinistra di $1$ i due argomenti sono negativi e la somma vale $5-2x$. A destra di $4$ gli argomenti sono positivi e la somma vale $2x-5$.

Per risolvere $|x-1|+|x-4|=5$, nel primo tratto si ottiene $5-2x=5$, quindi $x=0$. Il tratto centrale ha quota $3$ e non contiene soluzioni. Nel terzo si ottiene $2x-5=5$, quindi $x=5$. I candidati $0$ e $5$ appartengono ai tratti in cui sono stati calcolati. Con la soglia $3$, invece, ogni punto dell'intervallo $[1,4]$ sarebbe una soluzione.

::grafico{f="abs(x-1)+abs(x-4);5" xmin=-2 xmax=7 ymin=-1 ymax=9 punti="0,5,pieno;1,3,pieno;4,3,pieno;5,5,pieno" titolo="La somma delle distanze è costante tra $1$ e $4$"}

:::

:::osservazione
Se due valori assoluti cambiano formula in punti diversi, si divide la retta in corrispondenza degli zeri di tutti gli argomenti. Ogni tratto fornisce una formula valida su quel tratto. Dopo avere risolto l'equazione o la disequazione del tratto, si interseca la soluzione con il tratto stesso prima di unire i risultati. Il controllo impedisce a una formula usata fuori dal proprio intervallo di produrre soluzioni estranee.
:::

:::esempio{titolo="Due distanze con pesi diversi"}
Consideriamo $F(x)=|x|+2|x-3|$. I cambi di espressione avvengono dove si annullano gli argomenti, cioè in $0$ e in $3$. Per $x<0$ la formula è $-x+2(3-x)=6-3x$. Per $0\leq x\leq3$ è $x+2(3-x)=6-x$. Per $x>3$ diventa $x+2(x-3)=3x-6$. In $x=0$ le due prime formule danno $6$, mentre in $x=3$ le due ultime danno $3$. Nei due tratti a sinistra di $3$ il valore diminuisce. Nel tratto destro aumenta. Il minimo è quindi $F(3)=3$, quando si annulla la distanza che pesa il doppio.

Per risolvere $F(x)\leq5$ il primo tratto non fornisce valori, perché $6-3x>6$ per $x<0$. Nel tratto centrale occorre $6-x\leq5$, quindi $x\geq1$ entro $[0,3]$. Sul tratto destro, $3x-6\leq5$ dà $x\leq\dfrac{11}{3}$ entro $x>3$. I tratti utili si uniscono in $\left[1,\dfrac{11}{3}\right]$. Per verificare il confine sinistro si ottiene $1+2\cdot2=5$. Sul confine destro il valore è $3\cdot\dfrac{11}{3}-6=5$. Entrambi gli estremi sono inclusi.

::grafico{f="abs(x)+2*abs(x-3);5" xmin=-1.5 xmax=5 ymin=-1 ymax=10 punti="0,6,pieno;1,5,pieno;3,3,pieno;3.6666666667,5,pieno" titolo="Le due distanze pesate hanno minimo in $x=3$ e restano sotto la soglia tra i due punti di incontro"}

:::
