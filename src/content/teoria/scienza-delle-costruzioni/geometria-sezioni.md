---
titolo: "Geometria delle sezioni"
sommario: "Area, baricentro, momenti d’inerzia e moduli resistenti delle sezioni piene e cave."
---

## Area e momenti statici

:::definizione{#momenti-statici titolo="Momenti statici dell’area"}
Si tagli una trave con un piano perpendicolare all’asse longitudinale $x$. La parte del piano occupata dal materiale è la **sezione** $A$. In questo capitolo le coordinate nel piano della sezione sono $(z,y)$, con $z$ verso destra e $y$ verso l’alto nei disegni. L’elemento $dA$ rappresenta una porzione infinitesima di area. Se le coordinate sono misurate in millimetri, la sua unità di misura è il millimetro quadrato.

Per sommare le distanze con segno di tutte le porzioni elementari da un asse, si moltiplica ciascuna distanza per l’area della porzione. L’integrale rispetto alla sezione dà i **momenti statici**.

$$
A=\int_A dA,
\qquad
S_z=\int_A y\,dA,
\qquad
S_y=\int_A z\,dA.
$$

Per il momento rispetto a $z$ si usa la coordinata verticale $y$, perché questa è la distanza orientata dall’asse orizzontale. Per quello rispetto a $y$ si usa la coordinata orizzontale $z$. Le aree ai due lati dell’asse contribuiscono con segni opposti. Un risultato nullo indica quindi che i contributi positivi e negativi si compensano. I momenti statici si misurano in $\mathrm{mm^3}$.
:::

:::esempio{titolo="Momento statico rispetto a un bordo"}
Un rettangolo ha base $40\,\mathrm{mm}$ e altezza $60\,\mathrm{mm}$. L’asse $z$ coincide con il lato inferiore. A quota $y$ una striscia orizzontale di spessore $dy$ ha area $40\,dy$. Quindi

$$
S_z=\int_0^{60}40y\,dy
=40\,\frac{60^2}{2}\,\mathrm{mm^3}
=72\,000\,\mathrm{mm^3}.
$$

::struttura{riferimento=0 poligoni="0,0 40,0 40,60 0,60" linee="0,31 40,31;0,35 40,35" frecce="0,0,54,0,z;0,0,0,72,y" quote="0 60,40 60,40 mm,-8;40 0,40 60,60 mm,9" titolo="Una striscia orizzontale nel rettangolo"}

Se l’origine viene spostata di $30\,\mathrm{mm}$ verso l’alto, la coordinata della striscia diventa $y-30\,\mathrm{mm}$. Poiché l’area vale $2\,400\,\mathrm{mm^2}$, il momento rispetto al nuovo asse vale $72\,000-30\cdot2\,400=0$, in $\mathrm{mm^3}$. La sezione è la stessa. Cambia la posizione dell’asse a cui si riferisce il calcolo.
:::

:::esempio{titolo="Momento statico della sola porzione superiore"}
Si consideri un rettangolo largo $20\,\mathrm{mm}$ e alto $100\,\mathrm{mm}$, centrato nell’origine. Il momento statico dell’intera sezione rispetto a $z$ vale zero. Se si integra soltanto sulla parte con $y\geq30\,\mathrm{mm}$, la porzione ha area $20\cdot20=400\,\mathrm{mm^2}$ e quota media $40\,\mathrm{mm}$. Il suo momento statico vale quindi $16\,000\,\mathrm{mm^3}$. Nel capitolo sul problema di Saint Venant, il calcolo di Jourawski usa proprio il momento statico di una porzione delimitata da un taglio.

::struttura{riferimento=0 poligoni="-10,30 10,30 10,50 -10,50" linee="-10,-50 10,-50 10,50 -10,50 -10,-50" frecce="0,0,22,0,z;0,0,0,64,y" quote="-10 0,-10 30,30 mm,-8;10 -50,10 50,100 mm,22" titolo="L’area colorata è la porzione usata per il momento statico"}
:::

:::esempio{titolo="Ali e anima di un profilo laminato"}
Le due ali del profilo sono separate dall’anima. Nella sezione idealizzata le ali si trovano lontano dall’asse baricentrico parallelo a esse. Questa distanza entra al quadrato nel calcolo dell’inerzia rispetto a tale asse.

<figure class="grafico foto-tecnica"><img src="/immagini/scienza-delle-costruzioni/profilo-h.webp" alt="Estremità di un profilo d’acciaio a H con due ali e anima centrale" width="1211" height="1024" loading="lazy" decoding="async"><figcaption>Ali e anima di un profilo laminato. Foto ridimensionata di <a href="https://commons.wikimedia.org/wiki/File:Balk6.jpg">Anders Lagerås</a>, <a href="https://creativecommons.org/licenses/by-sa/2.5/">CC BY-SA 2.5</a>.</figcaption></figure>
:::

## Baricentro e simmetria

:::definizione{#coordinate-baricentro titolo="Coordinate del baricentro"}
Il **baricentro geometrico** $G$ è il punto le cui coordinate sono le medie delle coordinate dei punti della sezione, pesate con l’area. Per una sezione di area positiva si ha

$$
z_G=\frac{S_y}{A},
\qquad
y_G=\frac{S_z}{A}.
$$

Questa definizione riguarda la distribuzione geometrica del materiale. Se la sezione appartiene a un corpo di densità uniforme, il baricentro geometrico coincide con il centro di massa della lamina corrispondente. In una sezione formata da materiali diversi, le medie pesate con la massa e quelle pesate con l’area possono dare risultati diversi.

Un asse parallelo a $z$ che passa per $G$ ha momento statico nullo, perché $\int_A(y-y_G)\,dA=S_z-Ay_G=0$. Per l’asse parallelo a $y$ vale lo stesso ragionamento. Questa proprietà permette di controllare le coordinate del baricentro a partire dai momenti statici delle singole parti.
:::

:::osservazione{#simmetria-sezioni titolo="Baricentro su un asse di simmetria"}
Se la riflessione rispetto a una retta lascia invariata la sezione, ogni porzione da un lato ha una porzione uguale alla stessa distanza dal lato opposto. I momenti statici rispetto alla retta si compensano a coppie. Il baricentro appartiene quindi alla retta di simmetria. Due rette di simmetria distinte e incidenti individuano entrambe le coordinate di $G$.

In una sezione a T con l’ala centrata, l’asse verticale è una retta di simmetria, quindi determina la coordinata orizzontale. La quota verticale dipende dalle aree dell’anima e dell’ala e dalle quote dei rispettivi baricentri. In una corona circolare concentrica il centro appartiene invece a ogni diametro, quindi è il baricentro della corona anche se si trova nel vuoto.

::struttura{riferimento=0 cerchi="0,0,30;0,0,17,foro" frecce="0,0,42,0,z;0,0,0,42,y" punti="0,0,G,baricentro" titolo="Il baricentro della corona circolare coincide con il centro del foro"}
:::

## Composizione e sottrazione di aree

::::teorema{#baricentro titolo="Baricentro per composizione"}
Sia $A$ una sezione costruita da parti elementari di cui sono noti area e baricentro. Le parti piene possono avere in comune i bordi. Se condividono una regione di area positiva, occorre sottrarre l’intersezione contata due volte. Indicando con $A_i$ l’area con segno della parte $i$ e con $(z_i,y_i)$ le coordinate del suo baricentro, si ottiene

$$
A=\sum_i A_i,
\qquad
z_G=\frac{\sum_i A_i z_i}{\sum_i A_i},
\qquad
y_G=\frac{\sum_i A_i y_i}{\sum_i A_i}.
$$

Per un foro interamente contenuto nel contorno esterno si usa l’area con segno negativo. Le coordinate del centro del foro conservano il proprio segno. Il segno dell’area rappresenta la sottrazione della regione, mentre quello delle coordinate rappresenta la sua posizione rispetto all’origine.

:::dimostrazione
L’idea è calcolare separatamente area e momento statico. L’integrale di $1$ sulle parti piene si somma, mentre quello sulle parti rimosse si sottrae. Per lo stesso motivo si sommano o si sottraggono gli integrali di $y$. Su ogni parte il momento statico è il prodotto dell’area per la quota media. Quindi $S_z=\sum_i A_i y_i$. Dividendo per l’area effettiva $\sum_i A_i$ si ottiene $y_G$. L’integrale di $z$ dà la formula per $z_G$.
:::
::::

:::esempio{titolo="Anima e ala di una sezione a T"}
Un’anima larga $20\,\mathrm{mm}$ e alta $80\,\mathrm{mm}$ sostiene un’ala centrata larga $100\,\mathrm{mm}$ e spessa $20\,\mathrm{mm}$. Si prende l’origine al piede dell’anima. Le aree di anima e ala valgono $1\,600$ e $2\,000\,\mathrm{mm^2}$. Le rispettive quote medie sono $40$ e $90\,\mathrm{mm}$. Quindi

$$
y_G=\frac{1\,600\cdot40+2\,000\cdot90}{3\,600}\,\mathrm{mm}
=\frac{610}{9}\,\mathrm{mm}\simeq67{,}78\,\mathrm{mm}.
$$

Il risultato è compreso fra $40$ e $90\,\mathrm{mm}$ ed è più vicino al baricentro dell’ala, che ha area maggiore. Per simmetria $z_G=0$.

::struttura{riferimento=0 poligoni="-10,0 10,0 10,80 50,80 50,100 -50,100 -50,80 -10,80" tratteggi="-10,80 10,80" punti="0,40,G_a,centro;0,90,G_b,centro;0,67.778,G,baricentro" frecce="0,0,64,0,z;0,0,0,113,y" quote="-50 100,50 100,100 mm,-23;10 0,10 80,80 mm,11" titolo="Baricentri di anima, ala e sezione completa"}
:::

:::esempio{titolo="Foro al di sotto del centro del pieno"}
Un rettangolo $80\times60\,\mathrm{mm}$ ha un foro quadrato di lato $20\,\mathrm{mm}$ con centro $(30,20)\,\mathrm{mm}$. L’origine è nel vertice inferiore sinistro. Il rettangolo pieno ha baricentro a quota $30\,\mathrm{mm}$ e area $4\,800\,\mathrm{mm^2}$. Il foro sottrae $400\,\mathrm{mm^2}$ a quota $20\,\mathrm{mm}$. Ne risulta

$$
y_G=\frac{4\,800\cdot30-400\cdot20}{4\,800-400}\,\mathrm{mm}
=\frac{340}{11}\,\mathrm{mm}.
$$

Per interpretare il verso dello spostamento, si prende come riferimento il centro del rettangolo esterno. Il foro occupava una porzione a quota negativa. Sottraendo quel contributo negativo, il momento statico dell’area residua diventa positivo. Perciò il suo baricentro si trova sopra il centro del rettangolo esterno.

::struttura{riferimento=0 poligoni="0,0 80,0 80,60 0,60" fori="20,10 40,10 40,30 20,30" punti="30,20,C,centro;40.909,30.909,G,baricentro" frecce="0,0,95,0,z;0,0,0,71,y" quote="0 60,80 60,80 mm,-8;80 0,80 60,60 mm,9" titolo="L’area rimossa è sotto il centro geometrico del contorno esterno"}
:::

## Momenti d’inerzia d’area

:::definizione{#momenti-inerzia titolo="Momento d’inerzia rispetto a un asse"}
Il **momento d’inerzia d’area** rispetto a un asse pesa ciascun elemento di area con il quadrato della sua distanza dall’asse. Per i due assi del riferimento si scrive

$$
I_z=\int_A y^2\,dA,
\qquad
I_y=\int_A z^2\,dA.
$$

Il quadrato fa sì che porzioni alla stessa distanza da parti opposte contribuiscano allo stesso modo. Per questo motivo un asse baricentrico ha momento statico nullo e momento d’inerzia positivo. L’unità di misura è $\mathrm{mm^4}$, perché ogni contributo contiene una distanza al quadrato e un’area.

A parità di area, spostare materiale lontano dall’asse accresce il contributo all’inerzia. Per un profilo a I le due ali distano dall’asse orizzontale baricentrico. I loro contributi a $I_z$ comprendono quindi anche la distanza fra il baricentro di ciascuna ala e l’asse del profilo. La stessa osservazione spiega perché ruotare un rettangolo di $90^\circ$ può modificare molto la sua inerzia rispetto a un asse fisso.
:::

::::teorema{#inerzia-rettangolo titolo="Inerzie baricentriche del rettangolo"}
Per un rettangolo con lato $b$ parallelo a $z$ e lato $h$ parallelo a $y$, le inerzie intorno ai due assi passanti per il centro valgono

$$
I_z=\frac{bh^3}{12},
\qquad
I_y=\frac{hb^3}{12}.
$$

La dimensione elevata al cubo è quella perpendicolare all’asse rispetto al quale si integra. Se $h$ è doppia di $b$, $I_z$ è quattro volte $I_y$.

:::dimostrazione
Si scompone il rettangolo in strisce orizzontali di area $b\,dy$ comprese fra le quote $-\dfrac h2$ e $\dfrac h2$. Poiché $y^2$ è pari, le due metà danno contributi uguali. Allora

$$
I_z=2b\int_0^{h/2} y^2\,dy
=2b\,\frac{\left(\frac h2\right)^3}{3}
=\frac{bh^3}{12}.
$$

Con strisce verticali di area $h\,dz$ e semibase $\dfrac b2$ si ottiene la seconda formula.
:::
::::


:::esempio{titolo="Distribuzione del materiale in un profilo a I"}
Un profilo a I ha altezza totale $100\,\mathrm{mm}$. Le due ali sono larghe $60\,\mathrm{mm}$ e spesse $10\,\mathrm{mm}$. L’anima è larga $12\,\mathrm{mm}$ e ha altezza libera $80\,\mathrm{mm}$. Per doppia simmetria, $G$ coincide con l’intersezione della mezzeria orizzontale e di quella verticale. Il profilo si può ottenere sottraendo da un rettangolo $60\times100\,\mathrm{mm}$ due regioni rettangolari larghe $24\,\mathrm{mm}$ e alte $80\,\mathrm{mm}$. Poiché entrambe le regioni sottratte sono centrate a quota zero, per l’asse orizzontale bastano le inerzie calcolate attorno alle rispettive mezzerie orizzontali.

$$
I_z=\frac{60\cdot100^3-2\cdot24\cdot80^3}{12}\,\mathrm{mm^4}
=2\,952\,000\,\mathrm{mm^4}.
$$

Per l’asse verticale è più comodo sommare le inerzie delle tre parti piene. Infatti l’anima e le due ali sono centrate tutte sulla stessa mezzeria verticale. Le ali possono quindi essere calcolate come due rettangoli baricentrici uguali anche se i loro baricentri hanno quote diverse. Si ottiene

$$
I_y=\frac{80\cdot12^3+2\cdot10\cdot60^3}{12}\,\mathrm{mm^4}
=371\,520\,\mathrm{mm^4}.
$$

::struttura{riferimento=0 poligoni="-30,-50 30,-50 30,-40 6,-40 6,40 30,40 30,50 -30,50 -30,40 -6,40 -6,-40 -30,-40" frecce="0,0,46,0,z;0,0,0,64,y" quote="-30 50,30 50,60 mm,-23;30 -50,30 50,100 mm,28;-6 -40,-6 40,80 mm,-34" titolo="Profilo a I con ali uguali e anima centrata"}

La differenza fra le due inerzie si spiega osservando la posizione delle ali rispetto a ciascun asse. Rispetto a $z$, le ali sono lontane in verticale e aggiungono molto al contributo dell’anima. Rispetto a $y$, il loro spessore verticale entra come fattore lineare e tutta l’anima si concentra vicino alla mezzeria. Se si confronta il profilo con un rettangolo esterno pieno, il materiale sottratto è distribuito su tutto lo spessore dell’anima e su gran parte della larghezza. Il rapporto fra area rimossa e inerzia rimossa dipende quindi dall’asse scelto.

Nel calcolo per sottrazione la larghezza complessiva delle due zone vuote è $48\,\mathrm{mm}$. Nel calcolo per somma la larghezza dell’anima è invece $12\,\mathrm{mm}$. La loro somma dà i $60\,\mathrm{mm}$ del contorno esterno e verifica che le tre porzioni ricostruiscono la larghezza alla quota della mezzeria orizzontale. È un controllo geometrico preliminare che evita di usare lo spessore dell’anima nel termine riferito al vuoto.
:::

## Trasporto a un asse parallelo

::::teorema{#steiner titolo="Teorema di Steiner"}
Sia $z_G$ l’asse orizzontale passante per il baricentro $G$ di una sezione. Un asse $z$ parallelo a $z_G$ dista $d$ da esso. Il momento d’inerzia rispetto a $z$ vale

$$
I_z=I_{z,G}+Ad^2,
$$

dove $I_{z,G}$ è il momento d’inerzia rispetto a $z_G$. La stessa formula vale per una coppia di assi paralleli orientati in un’altra direzione. A direzione fissata, il momento d’inerzia è minimo per l’asse che passa per il baricentro. Ogni traslazione parallela aggiunge il contributo positivo $Ad^2$.

:::dimostrazione
Si misura la quota $\eta$ di ogni elemento dall’asse baricentrico. Sia $d$ lo spostamento orientato da $z$ all’asse baricentrico. La quota rispetto a $z$ è $y=\eta+d$. Espandendo il quadrato nell’integrale si ha

$$
\begin{aligned}
I_z
&=\int_A \eta^2\,dA+2d\int_A \eta\,dA+d^2\int_A dA\\[6pt]
&=I_{z,G}+Ad^2.
\end{aligned}
$$

L’integrale di $\eta$ è il momento statico rispetto all’asse baricentrico e vale zero. Il verso della traslazione compare soltanto nel termine lineare che si annulla. Resta quindi il quadrato della distanza.
:::
::::

:::esempio{titolo="Inerzia rispetto al bordo di un rettangolo"}
Un rettangolo largo $30\,\mathrm{mm}$ e alto $40\,\mathrm{mm}$ ha area $1\,200\,\mathrm{mm^2}$. Il suo momento d’inerzia baricentrico orizzontale vale $160\,000\,\mathrm{mm^4}$. L’asse sul lato inferiore dista $20\,\mathrm{mm}$ dall’asse baricentrico. Perciò

$$
I_z=160\,000+1\,200\cdot20^2
=640\,000\,\mathrm{mm^4}.
$$

L’integrazione diretta sul rettangolo dà $30\displaystyle\int_0^{40}y^2\,dy=640\,000$, in $\mathrm{mm^4}$. I due calcoli usano la stessa geometria con riferimenti diversi. Nel primo si trasporta l’inerzia baricentrica. Nel secondo si misurano tutte le quote dal lato inferiore.

::struttura{riferimento=0 poligoni="0,0 30,0 30,40 0,40" tratteggi="-7,20 41,20" etichette="46,20,z_G" frecce="0,0,49,0,z;0,0,0,52,y" quote="30 0,30 20,20 mm,10" titolo="Asse sul bordo inferiore e asse baricentrico parallelo"}
:::

:::osservazione{titolo="Trasporto dei contributi in una sezione cava"}
Il calcolo su una sezione composta richiede un unico asse di arrivo. Si trasporta ogni contributo baricentrico a quell’asse, quindi si sommano le parti piene e si sottraggono le parti rimosse. Per un foro eccentrico di area positiva $A_f$, con baricentro a distanza $d_f$ dall’asse di arrivo, si sottrae $I_{z,f,G}+A_f d_f^2$. Se il foro è centrato sull’asse, la distanza $d_f$ è nulla e resta il solo contributo baricentrico. Il calcolo mantiene così distinto il ruolo della forma del foro da quello della sua posizione.
:::

## Prodotto d’inerzia

:::definizione{#prodotto-inerzia titolo="Prodotto d’inerzia e segno dei quadranti"}
Per descrivere le inerzie intorno a direzioni inclinate servono anche i prodotti delle due coordinate. Il **prodotto d’inerzia** è

$$
I_{yz}=\int_A yz\,dA.
$$

Nella convenzione di questo capitolo il prodotto ha segno positivo quando prevalgono i contributi dei quadranti in cui $y$ e $z$ hanno lo stesso segno. Ha segno negativo quando prevalgono quelli dei quadranti in cui le coordinate hanno segno opposto. L’unità di misura è $\mathrm{mm^4}$.

Se la sezione è simmetrica rispetto all’asse $y$, a ogni punto $(z,y)$ corrisponde il punto $(-z,y)$ di uguale area elementare. Le due porzioni contribuiscono con prodotti opposti. Perciò $I_{yz}=0$. Lo stesso vale se la simmetria è rispetto a $z$. In entrambi i casi il riferimento baricentrico si orienta lungo l’asse di simmetria e la sua perpendicolare.
:::

::::teorema{#trasporto-prodotto titolo="Trasporto del prodotto d’inerzia"}
Sia $G=(z_G,y_G)$ il baricentro della sezione nel riferimento dato. Indicando con $I_{yz,G}$ il prodotto d’inerzia negli assi paralleli passanti per $G$, si ha

$$
I_{yz}=I_{yz,G}+Ay_Gz_G.
$$

Il termine di trasporto dipende dal quadrante in cui cade $G$. In una sezione composta la formula si applica a ogni parte separatamente, riferendo tutte le coordinate dei baricentri al medesimo riferimento.

:::dimostrazione
Si scrivono $y=\eta+y_G$ e $z=\zeta+z_G$, con $\eta$ e $\zeta$ coordinate baricentriche. Il prodotto contiene quattro termini. Integrando $\eta\zeta$ si ottiene $I_{yz,G}$. I termini $z_G\eta$ e $y_G\zeta$ hanno integrali nulli, perché $\eta$ e $\zeta$ hanno media nulla sulla sezione. Il termine costante $y_Gz_G$ dà $Ay_Gz_G$.
:::
::::

:::esempio{titolo="Segno del prodotto d’inerzia di un angolare"}
Un angolare ha due ali uguali di lunghezza esterna $60\,\mathrm{mm}$ e spessore $10\,\mathrm{mm}$. Si divide in un rettangolo orizzontale e nella porzione verticale sopra di esso. I due rettangoli hanno baricentri rispettivamente a destra e in basso, a sinistra e in alto rispetto a $G$. Ciascun rettangolo ha prodotto d’inerzia baricentrico nullo. Perciò entrambi i contributi di trasporto sono negativi. Nel riferimento baricentrico con assi paralleli ai lati, il prodotto d’inerzia dell’angolare è negativo.

::struttura{riferimento=0 poligoni="0,0 60,0 60,10 10,10 10,60 0,60" tratteggi="0,10 10,10" punti="30,5,G_a,centro;5,35,G_b,centro;18.636,18.636,G,baricentro" frecce="18.636,18.636,74,18.636,z_G;18.636,18.636,18.636,71,y_G" titolo="Baricentri delle due parti in quadranti con prodotto negativo"}
:::

## Rotazione e assi principali

::::teorema{#rotazione-assi titolo="Inerzia rispetto a un asse ruotato"}
Si consideri un riferimento baricentrico nel piano $(z,y)$. L’asse $z^\prime$ si ottiene ruotando $z$ verso $y$ di un angolo $\theta$. Le coordinate del punto nel nuovo riferimento sono $y^\prime=y\cos\theta-z\sin\theta$ e $z^\prime=z\cos\theta+y\sin\theta$. Il momento d’inerzia rispetto a $z^\prime$ vale

$$
I_{z^\prime}
=I_z\cos^2\theta+I_y\sin^2\theta
-2I_{yz}\sin\theta\cos\theta.
$$

La formula dà $I_z$ per $\theta=0$ e $I_y$ per $\theta=90^\circ$. Il segno del termine misto dipende sia dal verso della rotazione sia dalla convenzione adottata per $I_{yz}$.

:::dimostrazione
La distanza orientata da $z^\prime$ è la coordinata $y^\prime$. Elevando al quadrato la sua espressione e integrando, i termini in $y^2$ e $z^2$ danno i momenti $I_z$ e $I_y$. Il doppio prodotto di $y\cos\theta$ e $-z\sin\theta$ dà il contributo $-2I_{yz}\sin\theta\cos\theta$. Lo stesso procedimento, integrando $y^\prime z^\prime$, dà

$$
I_{y^\prime z^\prime}
=I_{yz}\cos(2\theta)
+\frac{I_z-I_y}{2}\sin(2\theta).
$$
:::
::::

:::esempio{titolo="Rotazione nel piano di un rettangolo"}
Per un rettangolo largo $80\,\mathrm{mm}$ e alto $40\,\mathrm{mm}$, il prodotto d’inerzia è nullo per simmetria. Poiché $I_y=4I_z$, una rotazione di $30^\circ$ da $z$ verso $y$ dà $I_{z^\prime}=\dfrac34 I_z+\dfrac14 I_y=\dfrac74 I_z$. Il risultato è più vicino all’inerzia orizzontale perché il quadrato del coseno pesa il contributo di quell’asse per tre quarti.

::struttura{riferimento=0 poligoni="-40,-20 40,-20 40,20 -40,20" frecce="0,0,57,0,z;0,0,0,34,y;0,0,48,27.713,z′" quote="-40 -20,40 -20,80 mm,8;40 -20,40 20,40 mm,26" titolo="Rettangolo con asse inclinato di 30° rispetto a z"}
:::

::::teorema{#assi-principali titolo="Assi e momenti principali d’inerzia"}
Gli **assi principali** sono gli assi baricentrici ortogonali nei quali il prodotto d’inerzia è nullo. In queste due direzioni il momento d’inerzia assume il valore massimo o minimo fra gli assi baricentrici. I valori sono

$$
I_{\max,\min}=\frac{I_y+I_z}{2}
\pm\sqrt{\left(\frac{I_y-I_z}{2}\right)^2+I_{yz}^2}.
$$

Per individuare le direzioni si risolve l’equazione $I_{y^\prime z^\prime}=0$, quindi si sostituisce l’angolo nella formula di $I_{z^\prime}$ per capire a quale valore corrisponde. Nel caso $I_y=I_z$ e $I_{yz}=0$, ogni coppia di assi baricentrici ortogonali è principale.

:::dimostrazione
Si riscrive la formula di rotazione usando gli angoli doppi. La parte variabile è una combinazione di seno e coseno di $2\theta$,

$$
I_{z^\prime}-\frac{I_y+I_z}{2}
=\frac{I_z-I_y}{2}\cos(2\theta)-I_{yz}\sin(2\theta).
$$

Il massimo di questa combinazione è la radice quadrata della somma dei quadrati dei coefficienti. Il minimo è il suo opposto. Se la radice è positiva, le direzioni che danno i due valori differiscono di $90^\circ$. Inoltre la derivata rispetto a $\theta$ è $-2I_{y^\prime z^\prime}$. Quindi il prodotto d’inerzia si annulla esattamente nelle direzioni stazionarie.
:::
::::

## Momento polare e raggi d’inerzia

:::definizione{#momento-polare titolo="Momento polare d’inerzia"}
Il **momento polare** $I_p$ rispetto all’origine è l’integrale del quadrato della distanza dall’origine. Poiché il quadrato della distanza vale $y^2+z^2$, si ottiene

$$
I_p=\int_A(y^2+z^2)\,dA=I_y+I_z.
$$

Questa somma resta uguale se si ruotano gli assi attorno alla medesima origine. Per una corona concentrica di raggi $r$ interno e $R$ esterno, un anello infinitesimo di raggio $\rho$ e spessore $d\rho$ ha area $2\pi\rho\,d\rho$. Tutti i suoi punti hanno la stessa distanza $\rho$ dal centro. Ne segue

$$
I_p=2\pi\int_r^R\rho^3\,d\rho
=\frac{\pi}{2}(R^4-r^4).
$$

Poiché la corona ha la stessa inerzia intorno a ogni diametro, $I_y=I_z=\dfrac{I_p}{2}$. Nelle sezioni circolari il momento polare interviene nel calcolo della torsione. Per i profili di altra forma la costante torsionale va ricavata dal modello di Saint Venant pertinente alla sezione.
:::

:::definizione{#raggio-inerzia titolo="Raggio d’inerzia rispetto a un asse"}
Il **raggio d’inerzia** $\rho_z$ è la distanza dall’asse alla quale si potrebbe concentrare l’intera area $A$ ottenendo lo stesso momento $I_z$. Dall’identità $A\rho_z^2=I_z$ si ricava

$$
\rho_z=\sqrt{\frac{I_z}{A}}.
$$

Il risultato è una lunghezza. Nei due assi principali, la sezione ha la stessa area, quindi il minore momento d’inerzia corrisponde anche al minore raggio d’inerzia. Quando le condizioni di vincolo nei due piani d’inflessione sono uguali, questa direzione è quella da esaminare per prima nel capitolo sulla stabilità. Se i vincoli sono diversi, occorre confrontare anche le lunghezze libere d’inflessione nei due piani.
:::

## Moduli ai lembi e controllo delle unità

:::definizione{#modulo-resistente titolo="Modulo resistente elastico"}
Sia $z_G$ un asse principale orizzontale. Si indichino con $c_{\mathrm{sup}}$ e $c_{\mathrm{inf}}$ le distanze positive dei lembi superiore e inferiore da quell’asse. I due **moduli resistenti elastici** sono

$$
W_{\mathrm{sup}}=\frac{I_z}{c_{\mathrm{sup}}},
\qquad
W_{\mathrm{inf}}=\frac{I_z}{c_{\mathrm{inf}}}.
$$

Se la sezione è simmetrica rispetto a $z_G$, i lembi sono equidistanti e i moduli coincidono. In una sezione asimmetrica il lembo più lontano ha modulo minore. La formula di Navier, trattata nel capitolo sul problema di Saint Venant, usa il modulo del lembo che si sta esaminando. Il modulo si misura in $\mathrm{mm^3}$, perché è il rapporto fra un’inerzia in $\mathrm{mm^4}$ e una distanza in $\mathrm{mm}$.
:::

:::esempio{titolo="Distanze dei due lembi nella sezione a T"}
Per la sezione a T con altezza complessiva $100\,\mathrm{mm}$ e baricentro a quota $\dfrac{610}{9}\,\mathrm{mm}$, si ha $c_{\mathrm{inf}}=\dfrac{610}{9}\,\mathrm{mm}$ e $c_{\mathrm{sup}}=\dfrac{290}{9}\,\mathrm{mm}$. Lo stesso $I_z$ compare in entrambi i rapporti. Quindi $\dfrac{W_{\mathrm{sup}}}{W_{\mathrm{inf}}}=\dfrac{61}{29}$. Questo confronto si può fare appena si conosce $G$, prima di calcolare l’inerzia.

::struttura{riferimento=0 poligoni="-10,0 10,0 10,80 50,80 50,100 -50,100 -50,80 -10,80" tratteggi="-54,67.778 54,67.778" punti="0,67.778,G,baricentro" frecce="0,0,68,0,z;0,0,0,114,y" quote="50 67.778,50 100,c_sup,13;50 0,50 67.778,c_inf,13" titolo="Distanze distinte dei lembi dall’asse baricentrico"}
:::

:::osservazione{#scala-sezioni titolo="Similitudine e conversione delle unità"}
Se tutte le dimensioni lineari di una sezione si moltiplicano per un fattore $\lambda>0$, l’area si moltiplica per $\lambda^2$. Ogni momento statico si moltiplica per $\lambda^3$, perché a ogni area si aggiunge una distanza. Ogni momento d’inerzia si moltiplica per $\lambda^4$, perché la distanza è al quadrato. Il modulo resistente si moltiplica per $\lambda^3$ e il raggio d’inerzia per $\lambda$. Queste potenze valgono quando si confrontano assi corrispondenti nelle due geometrie.

Le stesse potenze regolano le conversioni. Poiché $1\,\mathrm{cm}=10\,\mathrm{mm}$, si ha $1\,\mathrm{cm^4}=10^4\,\mathrm{mm^4}$. Per esempio, $864\,\mathrm{cm^4}$ equivalgono a $8{,}64\cdot10^6\,\mathrm{mm^4}$. Se un valore di area o di lunghezza deve entrare in un calcolo con quote in millimetri, lo si converte prima di applicare il teorema di Steiner. In questo modo entrambi i termini di $I_{z,G}+Ad^2$ risultano espressi nella stessa unità.
:::
