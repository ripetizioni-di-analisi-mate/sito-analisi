---
titolo: "Matematica per il TOL del Politecnico"
sommario: "Aritmetica, algebra, geometria piana e nello spazio, trigonometria e funzioni."
---

## Basi di numerazione e frazioni

:::definizione{#basi-e-frazioni titolo="Scrittura in base e numeri razionali"}
In base $b$, con $b\ge2$, le cifre possibili vanno da $0$ a $b-1$. Da destra verso sinistra, le posizioni valgono $1,b,b^2,\ldots$. Per convertire un intero non negativo dalla base dieci alla base $b$, si divide ripetutamente per $b$ e si leggono i resti dall'ultimo al primo.

Un numero razionale si scrive come rapporto di due interi con denominatore diverso da zero. La sua scrittura decimale è finita oppure periodica. Per confrontare $\dfrac ab$ e $\dfrac cd$ con $b,d>0$, si confrontano $ad$ e $bc$, che sono i numeratori dopo aver portato le due frazioni al denominatore comune $bd$.
:::

:::esempio
Il numero $203_4$ vale $2\cdot4^2+0\cdot4+3=35$. Nel passaggio inverso, le divisioni successive di $35$, $8$ e $2$ per $4$ danno i resti $3,0,2$, quindi si ritrova $203_4$.

Se $z=0{,}1\overline{6}$, allora $100z=16{,}\overline6$ e $10z=1{,}\overline6$. Sottraendo si ottiene $90z=15$, perciò $z=\dfrac16$.
:::

## Potenze, divisibilità e stime

:::osservazione{#potenze-e-stime titolo="Fattori, segni e ordini di grandezza"}
La scomposizione di un intero positivo in fattori primi permette di riconoscere quali potenze lo dividono. Per esempio $756=2^2\cdot3^3\cdot7$, quindi $27$ divide $756$, mentre $81$ non lo divide.

Per $a\ne0$ e $m$ intero positivo vale $a^{-m}=\dfrac1{a^m}$. Nei reali, $\sqrt{a^2}=|a|$ per ogni $a$, perché la radice quadrata indica il risultato non negativo. Se $u<v$, moltiplicando entrambi i membri per un numero negativo si ottiene una disuguaglianza di verso opposto.
:::

:::esempio
Si può stimare $\sqrt{86}$ confrontando $86$ con $81$ e $100$. Poiché $9^2<86<10^2$, la radice è fra $9$ e $10$. Per arrotondare ai decimi, il valore $9{,}25$ separa i risultati $9{,}2$ e $9{,}3$. Il confronto $9{,}25^2=85{,}5625<86<9{,}35^2$ dà $9{,}3$.

Aumentare una quantità del $15\%$ equivale a moltiplicarla per $1{,}15$. Se dopo l'aumento si ottiene $92$, la quantità iniziale vale $\dfrac{92}{1{,}15}=80$.
:::

## Polinomi e fattorizzazioni

:::definizione{#polinomi titolo="Divisione, radici e fattori comuni"}
Nella divisione di $P$ per $D\ne0$ si trovano un quoziente $Q$ e un resto $R$ tali che $P=DQ+R$, con $R=0$ oppure con grado minore di quello di $D$. Se $D=x-a$, il resto è la costante $P(a)$. Di conseguenza $x-a$ divide $P$ esattamente quando $a$ è una radice.

Per calcolare massimo comune divisore e minimo comune multiplo monici si scrivono i polinomi come prodotti di fattori irriducibili nello stesso campo. Il massimo comune divisore prende i fattori comuni con gli esponenti minori. Il minimo comune multiplo prende tutti i fattori con gli esponenti maggiori.
:::

:::esempio
Per $P=x^3+2x^2-x-2$ si può raccogliere $x+2$ a gruppi. Si ottiene $P=(x+2)(x^2-1)=(x+2)(x-1)(x+1)$. Le radici sono quindi $-2,1,-1$. Con $D=(x-1)^2(x+1)$, il massimo comune divisore è $(x-1)(x+1)$ e il minimo comune multiplo è $(x+2)(x-1)^2(x+1)$.
:::

## Equazioni e sistemi

:::osservazione{#equazioni-e-sistemi titolo="Numero di soluzioni"}
Nell'equazione $ax=b$, se $a\ne0$ c'è una soluzione. Se $a=0$ e $b=0$ ogni reale è soluzione. Se $a=0$ e $b\ne0$ non ci sono soluzioni. In un'equazione $ax^2+bx+c=0$ con $a\ne0$, il segno di $\Delta=b^2-4ac$ distingue due radici reali, una radice reale doppia o nessuna radice reale.

Le soluzioni di un sistema soddisfano contemporaneamente tutte le equazioni. Per due rette nel piano questo significa trovare i punti comuni. Con rette parallele distinte non ci sono punti comuni. Con rette coincidenti ci sono infinite soluzioni.
:::

:::esempio
Il sistema $x+y=5$, $xy=6$ richiede due numeri con somma $5$ e prodotto $6$. Sostituendo $y=5-x$ si ottiene $x(5-x)=6$, quindi $(x-2)(x-3)=0$. Le coppie ordinate sono $(2,3)$ e $(3,2)$.
:::

## Disequazioni, radicali e valori assoluti

:::osservazione{#disequazioni-e-domini titolo="Dominio e segno"}
Un'espressione razionale fratta è definita quando il denominatore è diverso da zero. Per risolvere una disequazione fratta si determinano gli zeri dei fattori e si studia il segno nei tratti che questi separano. Gli zeri del numeratore possono essere soluzioni quando è ammessa l'uguaglianza. Gli zeri del denominatore rimangono esclusi.

Nelle equazioni con una radice quadrata occorre che il radicando sia non negativo. Se la radice è uguagliata a un'espressione, anche quella espressione deve essere non negativa prima di elevare al quadrato. Il valore $|x-a|$ è la distanza fra $x$ e $a$ sulla retta reale.
:::

:::esempio
In $\sqrt{x+10}=x$ si impone $x\ge0$, che qui garantisce anche il dominio del radicando. L'equazione al quadrato è $x^2-x-10=0$. Le radici sono $\dfrac{1\pm\sqrt{41}}2$ e solo quella con il segno più è non negativa. Per essa il quadrato dell'espressione e il radicando coincidono, quindi soddisfa l'equazione iniziale.
:::

## Geometria piana e costruzioni

:::definizione{#geometria-piana titolo="Distanze, similitudine e aree"}
L'asse di un segmento è la retta perpendicolare al segmento nel suo punto medio. Tutti i suoi punti sono equidistanti dai due estremi. Per costruirlo si tracciano due archi di uguale raggio centrati negli estremi, con raggio maggiore della metà del segmento. La retta per i due punti d'incontro è l'asse cercato.

In due figure simili, se il rapporto tra lati corrispondenti è $k$, il rapporto tra perimetri è $k$ e quello tra aree è $k^2$. L'area di un triangolo è metà del prodotto tra base e altezza relativa.
:::

:::esempio
Due triangoli simili hanno aree $18$ e $50$ cm². Il rapporto fra le lunghezze del primo e del secondo è $\sqrt{\dfrac{18}{50}}=\dfrac35$. A un lato lungo $9$ cm nel primo corrisponde quindi un lato lungo $15$ cm nel secondo.
:::

## Solidi e coordinate nello spazio

:::definizione{#geometria-spazio titolo="Volumi, distanze e sfera"}
Il volume di un prisma o di un cilindro è il prodotto $Bh$ di area di base e altezza. In una piramide o in un cono con la stessa base e altezza il volume è $\dfrac{Bh}{3}$. Una sfera di raggio $r$ ha superficie $4\pi r^2$ e volume $\dfrac43\pi r^3$. In due solidi simili con rapporto lineare $k$, le superfici stanno nel rapporto $k^2$ e i volumi nel rapporto $k^3$.

Nello spazio, il quadrato della distanza fra due punti è la somma dei quadrati delle differenze nelle tre coordinate. Perciò la superficie della sfera di centro $(a,b,c)$ e raggio $r$ ha equazione $(x-a)^2+(y-b)^2+(z-c)^2=r^2$. La regione interna e la superficie si ottengono con $\le$ al posto dell'uguale.
:::

:::esempio
Un blocco rettangolare di spigoli $2$, $3$ e $6$ ha diagonale $\sqrt{2^2+3^2+6^2}=7$. Il piano $z=2$ è parallelo al piano $xy$. Se taglia una sfera di centro $(1,0,2)$, passa per il centro e la sezione è un cerchio con raggio uguale a quello della sfera.
:::

## Rette e luoghi geometrici

:::osservazione{#luoghi-geometrici titolo="Equazioni nel piano"}
La retta $y=mx+q$ ha pendenza $m$ e intercetta verticale $q$. Due rette con pendenze finite sono perpendicolari se il prodotto dei coefficienti angolari è $-1$. Una retta verticale ha equazione $x=a$ ed è perpendicolare alle rette orizzontali.

Nel piano, $(x-a)^2+(y-b)^2=r^2$ descrive la circonferenza di centro $(a,b)$. Con $\le$ descrive il disco, bordo incluso. L'ellisse centrata nell'origine ha forma $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$ con $a,b>0$. Sostituendo il più con un meno si ottiene un'iperbole con vertici sull'asse $x$. La parabola è il luogo dei punti equidistanti da un fuoco e da una direttrice.
:::

:::esempio
Per trovare i punti comuni a $y=x^2$ e $y=x+2$ si risolve $x^2=x+2$. La fattorizzazione $(x-2)(x+1)=0$ dà le ascisse $2$ e $-1$. Le ordinate sono $4$ e $1$.

::grafico{f="x^2;x+2" punti="-1,1,pieno,A;2,4,pieno,B" xmin=-3 xmax=4 ymin=-1 ymax=6 titolo="Intersezioni della parabola e della retta"}
:::

## Trigonometria

:::definizione{#trigonometria titolo="Radianti e triangoli"}
L'angolo in radianti è il rapporto fra lunghezza dell'arco e raggio. Un angolo giro misura $2\pi$ radianti, perciò $180^\circ$ corrispondono a $\pi$. Sulla circonferenza unitaria, coseno e seno sono l'ascissa e l'ordinata del punto associato all'angolo.

In un triangolo rettangolo, il seno di un angolo acuto è il rapporto fra cateto opposto e ipotenusa. Il coseno usa il cateto adiacente. Nel triangolo qualunque con angolo $\gamma$ compreso fra lati $a,b$, il lato opposto $c$ soddisfa $c^2=a^2+b^2-2ab\cos\gamma$ e l'area è $\dfrac{ab\sin\gamma}{2}$.
:::

:::esempio
Due lati lunghi $6$ e $8$ formano un angolo di $60^\circ$. Si ha $c^2=36+64-96\cdot\dfrac12=52$, quindi $c=2\sqrt{13}$. Per risolvere $\sin x=\dfrac12$ in $[0,2\pi)$, i punti della circonferenza unitaria con ordinata $\dfrac12$ sono due. I rispettivi angoli sono $\dfrac\pi6$ e $\dfrac{5\pi}6$.
:::

## Funzioni elementari

:::definizione{#funzioni titolo="Dominio, grafico e confronti"}
Una funzione assegna a ogni elemento del dominio un solo valore. Gli zeri sono le ascisse dei punti del grafico che stanno sull'asse $x$. La funzione $f$ è crescente se preserva l'ordine delle ascisse nel confronto delle ordinate.

Per $a>0$ e $a\ne1$, l'esponenziale $a^x$ è definito su tutti i reali e ha valori positivi. Il logaritmo $\log_a x$ è la sua inversa e richiede $x>0$. Entrambe sono crescenti per $a>1$ e decrescenti per $0<a<1$. Il seno e il coseno hanno periodo $2\pi$ e valori compresi fra $-1$ e $1$.
:::

:::esempio
In $\log_{1/3}(x-2)>-1$ si impone $x>2$. Poiché $-1=\log_{1/3}3$ e la base è minore di $1$, il confronto fra gli argomenti è $x-2<3$. Insieme al dominio si ottiene $2<x<5$.
:::
