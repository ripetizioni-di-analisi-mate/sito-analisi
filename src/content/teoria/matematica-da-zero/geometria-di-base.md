---
titolo: Figure piane, perimetri, aree e teorema di Pitagora
sommario: Punti, rette e angoli, triangoli e quadrilateri, perimetri e aree con le loro giustificazioni, il teorema di Pitagora, circonferenza e cerchio, unità di misura e volumi dei solidi più comuni.
---

## Punti, rette e angoli

:::definizione{#elementi-geometria titolo="Punto, retta, semiretta e segmento"}
Il **punto** e la **retta** sono gli oggetti di partenza della geometria. Il punto indica una posizione e si indica con una lettera maiuscola, come $A$. La retta è una linea dritta senza inizio e senza fine, e si indica con una lettera minuscola, come $r$. Per due punti distinti passa una sola retta.

- Un punto $O$ divide una retta in due parti. Ciascuna parte, insieme a $O$, si chiama semiretta di origine $O$. In parole semplici, una semiretta è una retta che ha un inizio ma non una fine.
- La parte di retta compresa tra due punti $A$ e $B$ si chiama segmento $AB$, e $A$ e $B$ sono i suoi estremi. Un segmento ha una lunghezza, che si misura con un righello.

Per esempio il lato lungo di un foglio A4 è un segmento lungo $29{,}7$ cm. I lati delle figure piane sono segmenti, e le loro lunghezze servono a calcolare perimetri e aree.
:::

:::definizione{#angolo titolo="Angolo e misura in gradi"}
Due semirette con la stessa origine dividono il piano in due parti, e ciascuna parte si chiama **angolo**. Le due semirette sono i lati dell'angolo e la loro origine comune è il **vertice**. In parole semplici, un angolo dice di quanto si deve ruotare una semiretta attorno al vertice per sovrapporla all'altra.

Gli angoli si misurano in gradi con il goniometro. Il giro completo attorno al vertice si chiama angolo giro e misura $360^\circ$, quindi un grado è la trecentosessantesima parte di un giro. Gli angoli si indicano spesso con lettere greche, come $\alpha$ (alfa), $\beta$ (beta) e $\gamma$ (gamma). Per esempio la lancetta dei minuti compie un giro in $60$ minuti, quindi in un minuto ruota di $\dfrac{360^\circ}{60} = 6^\circ$.
:::

:::definizione{#tipi-di-angoli titolo="Angoli retti, piatti, acuti e ottusi"}
Gli angoli si classificano secondo la loro misura.

- L'angolo **piatto** misura $180^\circ$, cioè mezzo giro, e i suoi lati formano una retta.
- L'angolo **retto** misura $90^\circ$, cioè metà di un angolo piatto. Nelle figure un angolo retto si segna con un piccolo quadrato.
- Un angolo è acuto se misura meno di $90^\circ$, ed è ottuso se misura più di $90^\circ$ e meno di $180^\circ$.

Per esempio un angolo di $35^\circ$ è acuto e un angolo di $120^\circ$ è ottuso. Alle $3$ in punto le lancette di un orologio formano un angolo retto.
:::

:::definizione{#angoli-complementari-supplementari titolo="Angoli complementari e supplementari"}
Due angoli sono **complementari** se la loro somma è un angolo retto, cioè $90^\circ$. Due angoli sono **supplementari** se la loro somma è un angolo piatto, cioè $180^\circ$. Il complementare di un angolo $\alpha$ misura quindi $90^\circ - \alpha$, e il supplementare misura $180^\circ - \alpha$.

Queste due definizioni permettono di calcolare un angolo quando è noto l'altro. Per esempio il complementare di $30^\circ$ è $90^\circ - 30^\circ = 60^\circ$, e il supplementare di $30^\circ$ è $180^\circ - 30^\circ = 150^\circ$.
:::

::::teorema{#angoli-opposti-al-vertice titolo="Angoli opposti al vertice"}
Due rette che si incontrano in un punto formano quattro angoli. Due di questi angoli si dicono **opposti al vertice** se i lati dell'uno sono il prolungamento dei lati dell'altro. Due angoli opposti al vertice sono uguali.

Per esempio, se uno dei quattro angoli misura $50^\circ$, anche l'angolo opposto misura $50^\circ$. Gli altri due angoli misurano $180^\circ - 50^\circ = 130^\circ$, perché ciascuno di essi forma un angolo piatto insieme all'angolo di $50^\circ$.

::grafico{assi=0 uguale=1 linee="-3,0 3,0;-1.93,-2.30 1.93,2.30;0.60,0.00 0.60,0.07 0.59,0.13 0.57,0.19 0.54,0.25 0.51,0.31 0.48,0.37 0.43,0.41 0.39,0.46;-0.60,0.00 -0.60,-0.07 -0.59,-0.13 -0.57,-0.19 -0.54,-0.25 -0.51,-0.31 -0.48,-0.37 -0.43,-0.41 -0.39,-0.46;0.55,0.65 0.47,0.71 0.39,0.75 0.31,0.79 0.22,0.82 0.13,0.84 0.04,0.85 -0.05,0.85 -0.14,0.84 -0.23,0.82 -0.32,0.79 -0.40,0.75 -0.48,0.70 -0.55,0.65 -0.62,0.58 -0.68,0.51 -0.73,0.44 -0.77,0.36 -0.81,0.27 -0.83,0.18 -0.85,0.09 -0.85,0.00;-0.55,-0.65 -0.47,-0.71 -0.39,-0.75 -0.31,-0.79 -0.22,-0.82 -0.13,-0.84 -0.04,-0.85 0.05,-0.85 0.14,-0.84 0.23,-0.82 0.32,-0.79 0.40,-0.75 0.48,-0.70 0.55,-0.65 0.62,-0.58 0.68,-0.51 0.73,-0.44 0.77,-0.36 0.81,-0.27 0.83,-0.18 0.85,-0.09 0.85,-0.00" punti="0,0,pieno" etichette="0.85,0.3,α;-0.75,1.05,β;-1.2,-0.6,α′;0.45,-1.3,β′" xmin=-3.2 xmax=3.2 ymin=-2.5 ymax=2.5 titolo="Due rette incidenti formano due coppie di angoli opposti al vertice; con $\alpha = 50^\circ$ si ha $\alpha' = 50^\circ$ e $\beta = \beta' = 130^\circ$"}

:::dimostrazione
Nella figura gli angoli $\alpha$ e $\beta$ hanno un lato in comune, e gli altri due lati formano una retta. Insieme formano quindi un angolo piatto, e perciò $\beta = 180^\circ - \alpha$. Anche $\beta$ e $\alpha'$ insieme formano un angolo piatto, quindi $\alpha' = 180^\circ - \beta$. Sostituendo $\beta = 180^\circ - \alpha$ si ottiene
$$
\alpha' = 180^\circ - (180^\circ - \alpha) = \alpha .
$$
Con i numeri dell'esempio si ha $\beta = 180^\circ - 50^\circ = 130^\circ$, e quindi $\alpha' = 180^\circ - 130^\circ = 50^\circ$.
:::
::::

:::definizione{#rette-parallele-perpendicolari titolo="Rette parallele e rette perpendicolari"}
Due rette del piano si dicono **parallele** se non hanno punti in comune, come i due binari di una ferrovia, oppure se coincidono. Due rette si dicono **perpendicolari** se si incontrano formando quattro angoli retti. Si scrive $r \parallel s$ per due rette parallele e $r \perp s$ per due rette perpendicolari.

Parallele e perpendicolari servono a descrivere le figure. Per esempio in un rettangolo i lati opposti stanno su rette parallele, e due lati vicini stanno su rette perpendicolari.
:::

:::teorema{#angoli-alterni-interni titolo="Angoli alterni interni"}
Due rette parallele $r$ e $s$ tagliate da una terza retta $t$, detta **trasversale**, formano otto angoli. Due di questi angoli si dicono alterni interni se stanno tra le due parallele e da parti opposte della trasversale. Due angoli alterni interni sono uguali.

Questa proprietà si accetta senza dimostrazione, e serve a calcolare la somma degli angoli di un triangolo. Per esempio, se la trasversale forma con $r$ un angolo di $55^\circ$, l'angolo alterno interno che forma con $s$ misura anch'esso $55^\circ$.
:::

## Poligoni e triangoli

:::definizione{#poligono-perimetro titolo="Poligono e perimetro"}
Un **poligono** è una figura piana delimitata da segmenti consecutivi che non si incrociano, in cui l'ultimo segmento termina nel punto in cui inizia il primo. I segmenti sono i lati del poligono e i loro estremi sono i vertici. Un poligono con tre lati è un triangolo, con quattro lati è un quadrilatero, con cinque un pentagono e con sei un esagono.

Il **perimetro** di un poligono è la somma delle lunghezze dei suoi lati, e si indica con $2p$. In parole semplici, il perimetro è la lunghezza del bordo della figura, e serve per esempio a calcolare quanta rete occorre per recintare un terreno. Un triangolo con lati $a = 5$ cm, $b = 7$ cm e $c = 9$ cm ha perimetro
$$
2p = 5 + 7 + 9 = 21\ \text{cm} .
$$
La metà del perimetro si chiama semiperimetro e si indica con $p$. In questo esempio $p = 10{,}5$ cm.
:::

::::teorema{#somma-angoli-triangolo titolo="Somma degli angoli interni di un triangolo"}
In ogni triangolo la somma dei tre angoli interni è $180^\circ$. Se due angoli sono noti, il terzo si ottiene sottraendo da $180^\circ$ la loro somma. Per esempio, in un triangolo con angoli di $50^\circ$ e $60^\circ$ il terzo angolo misura
$$
180^\circ - (50^\circ + 60^\circ) = 180^\circ - 110^\circ = 70^\circ .
$$

::grafico{assi=0 uguale=1 poligoni="0,0 6,0 2,3.5" linee="0.60,0.00 0.60,0.06 0.59,0.13 0.57,0.19 0.55,0.25 0.52,0.30 0.48,0.35 0.44,0.40 0.40,0.45 0.35,0.49 0.30,0.52;5.55,0.40 5.50,0.34 5.47,0.28 5.44,0.21 5.42,0.14 5.40,0.07 5.40,0.00;1.50,3.50 1.50,3.45 1.51,3.40 1.52,3.34 1.54,3.30 1.57,3.25 1.60,3.21 1.63,3.16 1.67,3.13 1.71,3.09 1.75,3.07;1.63,2.85 1.70,2.81 1.77,2.79 1.85,2.77 1.93,2.75 2.01,2.75 2.09,2.75 2.16,2.77 2.24,2.79 2.31,2.82 2.38,2.86 2.45,2.90 2.51,2.95 2.56,3.01;2.38,3.17 2.41,3.22 2.44,3.27 2.47,3.32 2.49,3.38 2.50,3.44 2.50,3.50" segmenti="-1.2,3.5,6.5,3.5" etichette="0.75,0.12,α;5.15,0.12,β;1.1,3.05,α;2.55,3.1,β;1.9,2.4,γ;-0.45,-0.45,A;6.1,-0.45,B;1.9,3.75,C" xmin=-1.5 xmax=7 ymin=-0.8 ymax=4.1 titolo="La retta tratteggiata passa per $C$ ed è parallela ad $AB$; gli angoli che forma con $CA$ e con $CB$ sono alterni interni di $\alpha$ e di $\beta$, quindi in $C$ si ha $\alpha + \gamma + \beta = 180^\circ$"}

:::dimostrazione
Sia $ABC$ un triangolo con angoli $\alpha$ in $A$, $\beta$ in $B$ e $\gamma$ in $C$. Si traccia per il vertice $C$ la retta parallela al lato $AB$. Il lato $AC$ è una trasversale di queste due parallele, quindi l'angolo che la nuova retta forma con $CA$ è alterno interno di $\alpha$, ed è perciò uguale ad $\alpha$. Allo stesso modo l'angolo che la nuova retta forma con $CB$ è alterno interno di $\beta$, ed è uguale a $\beta$. In $C$ i tre angoli $\alpha$, $\gamma$ e $\beta$ stanno uno accanto all'altro e formano insieme un angolo piatto. Ne segue che $\alpha + \beta + \gamma = 180^\circ$.
:::
::::

:::definizione{#classificazione-triangoli titolo="Classificazione dei triangoli"}
I triangoli si classificano in due modi.

- Rispetto ai lati, un triangolo è **equilatero** se ha i tre lati uguali, **isoscele** se ha almeno due lati uguali, **scaleno** se ha i tre lati diversi.
- Rispetto agli angoli, un triangolo è **acutangolo** se ha tre angoli acuti, **rettangolo** se ha un angolo retto, **ottusangolo** se ha un angolo ottuso.

Per esempio un triangolo con angoli di $30^\circ$, $60^\circ$ e $90^\circ$ è rettangolo, e un triangolo con angoli di $20^\circ$, $40^\circ$ e $120^\circ$ è ottusangolo. Un triangolo ha al massimo un angolo retto o ottuso, perché due angoli di almeno $90^\circ$ avrebbero già somma di almeno $180^\circ$.
:::

:::definizione{#triangoli-isosceli-rettangoli titolo="Lati e angoli dei triangoli isosceli e rettangoli"}
In un triangolo isoscele il lato diverso dagli altri due si chiama **base**, e i due lati uguali si chiamano lati obliqui. I due angoli vicini alla base, detti angoli alla base, sono uguali. In un triangolo equilatero anche i tre angoli sono uguali, quindi ciascuno misura $\dfrac{180^\circ}{3} = 60^\circ$.

In un triangolo rettangolo i due lati che formano l'angolo retto si chiamano **cateti**, e il lato opposto all'angolo retto si chiama **ipotenusa**. I due angoli acuti hanno somma $180^\circ - 90^\circ = 90^\circ$, quindi sono complementari. Per esempio, in un triangolo isoscele con l'angolo opposto alla base di $40^\circ$, i due angoli alla base insieme misurano $180^\circ - 40^\circ = 140^\circ$, e ciascuno misura $\dfrac{140^\circ}{2} = 70^\circ$.
:::

:::definizione{#altezza-triangolo titolo="Altezza di un triangolo"}
L'**altezza** di un triangolo relativa a un lato è il segmento che parte dal vertice opposto a quel lato e arriva sulla retta del lato formando un angolo retto. In parole semplici, se il triangolo è appoggiato su quel lato, che fa da base, l'altezza misura quanto è alto il triangolo. Ogni triangolo ha tre altezze, una per ogni lato.

In un triangolo rettangolo l'altezza relativa a un cateto è l'altro cateto. In un triangolo isoscele l'altezza relativa alla base arriva nel punto medio della base, e divide il triangolo in due triangoli rettangoli uguali. L'altezza serve per calcolare l'area del triangolo.
:::

## Quadrilateri

:::definizione{#quadrilateri titolo="Quadrilateri"}
Un **quadrilatero** è un poligono con quattro lati. Il segmento che unisce due vertici non consecutivi si chiama **diagonale**, e ogni quadrilatero ha due diagonali. I quadrilateri più comuni sono i seguenti.

- Il trapezio ha due lati paralleli, detti base maggiore e base minore.
- Il parallelogramma ha i lati opposti paralleli, e i lati opposti sono anche uguali.
- Il rettangolo è un parallelogramma con quattro angoli retti.
- Il rombo è un parallelogramma con quattro lati uguali. Le sue diagonali sono perpendicolari e si tagliano a metà.
- Il quadrato ha quattro lati uguali e quattro angoli retti, quindi è sia un rettangolo sia un rombo.

La distanza tra le due basi di un trapezio, oppure tra due lati opposti di un parallelogramma, si chiama altezza.

::grafico{assi=0 uguale=1 poligoni="0,3.2 2,3.2 2,5.2 0,5.2;3,3.2 6.5,3.2 6.5,5.2 3,5.2;7.5,3.2 10.5,3.2 11.3,5.2 8.3,5.2;2,1 3.3,2 4.6,1 3.3,0;5.5,0 9.5,0 8.8,2 6.3,2" linee="0.25,3.2 0.25,3.45 0,3.45;3.25,3.2 3.25,3.45 3,3.45" segmenti="2,1,4.6,1;3.3,0,3.3,2" etichette="0.05,2.6,quadrato;3.6,2.6,rettangolo;7.7,2.6,parallelogramma;2.75,-0.6,rombo;6.6,-0.6,trapezio" xmin=-0.4 xmax=11.8 ymin=-1.1 ymax=5.6 titolo="I quadrilateri più comuni; nel rombo sono tratteggiate le diagonali, che sono perpendicolari"}

:::

:::osservazione{#somma-angoli-quadrilatero titolo="Somma degli angoli di un quadrilatero"}
Una diagonale divide un quadrilatero in due triangoli, e gli angoli dei due triangoli formano insieme gli angoli del quadrilatero. Ciascun triangolo ha angoli con somma $180^\circ$, perciò la somma degli angoli interni di un quadrilatero è $2 \cdot 180^\circ = 360^\circ$. Per esempio, se un quadrilatero ha tre angoli di $80^\circ$, $95^\circ$ e $110^\circ$, la loro somma è $285^\circ$ e il quarto angolo misura $360^\circ - 285^\circ = 75^\circ$.
:::

## Perimetri e aree

:::definizione{#area titolo="Area di una figura"}
L'**area** di una figura piana è la misura della parte di piano che la figura occupa, e si indica con $A$. Si misura con il numero di quadratini di lato unitario che servono a ricoprire la figura. Un quadrato con lato $1$ cm ha area di un centimetro quadrato, che si scrive $1\ \text{cm}^2$, e un quadrato con lato $1$ m ha area $1\ \text{m}^2$.

In parole semplici, il perimetro misura il bordo di una figura e l'area misura lo spazio racchiuso dal bordo. Per esempio, per sapere quante piastrelle servono a coprire un pavimento si calcola l'area del pavimento, mentre per sapere quanto battiscopa serve si calcola il perimetro.
:::

:::teorema{#area-rettangolo titolo="Perimetro e area del rettangolo e del quadrato"}
Un rettangolo con base $b$ e altezza $h$ ha perimetro e area
$$
2p = 2 \cdot (b + h) , \qquad A = b \cdot h .
$$
Un quadrato con lato $l$ è un rettangolo con base e altezza uguali a $l$, quindi
$$
2p = 4 \cdot l , \qquad A = l \cdot l = l^2 .
$$
La formula dell'area si giustifica contando i quadratini. Un rettangolo con base $4$ cm e altezza $3$ cm si divide in $3$ file, ciascuna di $4$ quadratini con lato $1$ cm. Contiene quindi $3 \cdot 4 = 12$ quadratini, e la sua area è $12\ \text{cm}^2$. Il suo perimetro è $2 \cdot (4 + 3) = 14$ cm, perché ha due lati di $4$ cm e due lati di $3$ cm. Un quadrato con lato $5$ cm ha perimetro $4 \cdot 5 = 20$ cm e area $5^2 = 25\ \text{cm}^2$.

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 4,3 0,3" segmenti="1,0,1,3;2,0,2,3;3,0,3,3;0,1,4,1;0,2,4,2" etichette="1.55,-0.5,4 cm;4.15,1.4,3 cm" xmin=-0.5 xmax=5.4 ymin=-0.9 ymax=3.4 titolo="Un rettangolo con base $4$ cm e altezza $3$ cm contiene $3$ file di $4$ quadratini con lato $1$ cm, quindi ha area $3 \cdot 4 = 12\ \text{cm}^2$"}

:::

::::teorema{#area-parallelogramma-triangolo titolo="Area del parallelogramma e del triangolo"}
Un parallelogramma con base $b$ e altezza $h$ ha area $A = b \cdot h$. Un triangolo con base $b$ e altezza relativa $h$ ha area
$$
A = \frac{b \cdot h}{2} .
$$
Per esempio un parallelogramma con base $6$ cm e altezza $4$ cm ha area $6 \cdot 4 = 24\ \text{cm}^2$, e un triangolo con la stessa base e la stessa altezza ha area $\dfrac{24}{2} = 12\ \text{cm}^2$. Nell'area del parallelogramma compare l'altezza; il lato obliquo serve soltanto per il perimetro.

::grafico{assi=0 uguale=1 poligoni="0,0 5,0 6.5,3 1.5,3;8.5,0 13.5,0 10,3" segmenti="1.5,0,1.5,3;5,0,6.5,0;6.5,0,6.5,3;13.5,0,15,3;15,3,10,3;10,0,10,3" linee="1.5,0.25 1.75,0.25 1.75,0;10,0.25 10.25,0.25 10.25,0" etichette="2.4,-0.5,b;0.95,1.4,h;10.15,1.4,h;10.9,-0.5,b" xmin=-0.6 xmax=15.6 ymin=-0.9 ymax=3.6 titolo="A sinistra il triangolo staccato dal parallelogramma lungo l'altezza $h$ viene spostato sul lato destro (tratteggiato), e si ottiene un rettangolo con base $b$ e altezza $h$. A destra il triangolo e una sua copia capovolta (tratteggiata) formano un parallelogramma con base $b$ e altezza $h$"}

:::dimostrazione
Si taglia il parallelogramma lungo l'altezza che parte da un estremo del lato superiore, e si ottengono un triangolo rettangolo e un trapezio. Si sposta il triangolo dall'altra parte, contro il lato opposto. La figura che si ottiene è un rettangolo con la stessa base $b$ e la stessa altezza $h$. Il taglio e lo spostamento non cambiano la quantità di superficie, quindi il parallelogramma ha la stessa area del rettangolo, cioè $b \cdot h$.

Per il triangolo si prende una sua copia, la si ruota di mezzo giro e la si accosta a uno dei due lati obliqui. Si ottiene un parallelogramma con base $b$ e altezza $h$, formato da due triangoli uguali. Il triangolo è quindi metà del parallelogramma, e perciò la sua area è $\dfrac{b \cdot h}{2}$.
:::
::::

:::teorema{#area-rombo-trapezio titolo="Area del rombo e del trapezio"}
Un rombo con diagonali $D$ e $d$, e un trapezio con base maggiore $B$, base minore $b$ e altezza $h$, hanno aree
$$
A_{\text{rombo}} = \frac{D \cdot d}{2} , \qquad A_{\text{trapezio}} = \frac{(B + b) \cdot h}{2} .
$$
Anche queste formule si ricavano da quella del rettangolo. Il rombo occupa metà del rettangolo che ha per lati le sue diagonali, perché le diagonali dividono questo rettangolo in quattro rettangoli più piccoli e ciascuno di essi è tagliato a metà da un lato del rombo. Un trapezio e una sua copia ruotata di mezzo giro formano un parallelogramma con base $B + b$ e altezza $h$, quindi l'area del trapezio è metà di $(B + b) \cdot h$.

Per esempio un rombo con diagonali di $8$ cm e $6$ cm ha area $\dfrac{8 \cdot 6}{2} = 24\ \text{cm}^2$. Un trapezio con basi di $10$ cm e $6$ cm e altezza di $4$ cm ha area $\dfrac{(10 + 6) \cdot 4}{2} = \dfrac{64}{2} = 32\ \text{cm}^2$.

::grafico{assi=0 uguale=1 poligoni="0,1.5 2,3 4,1.5 2,0;5.5,0 9.5,0 8.5,3 6.5,3" linee="0,0 4,0 4,3 0,3 0,0" segmenti="0,1.5,4,1.5;2,0,2,3;9.5,0,11.5,0;11.5,0,12.5,3;12.5,3,8.5,3;6.5,0,6.5,3" etichette="2.9,1.7,D;2.15,2.4,d;7.3,-0.5,B;7.3,3.25,b;6.65,1.4,h;10.2,-0.5,b;10.2,3.25,B" xmin=-0.5 xmax=13 ymin=-0.9 ymax=3.7 titolo="A sinistra il rombo occupa metà del rettangolo con lati $D$ e $d$. A destra il trapezio e una sua copia capovolta (tratteggiata) formano un parallelogramma con base $B + b$ e altezza $h$"}

:::

:::attenzione
Due figure con lo stesso perimetro possono avere aree diverse. Un rettangolo con lati di $8$ cm e $2$ cm e un quadrato con lato di $5$ cm hanno entrambi perimetro $20$ cm. L'area del rettangolo è però $8 \cdot 2 = 16\ \text{cm}^2$, mentre l'area del quadrato è $5 \cdot 5 = 25\ \text{cm}^2$. Per questo motivo l'area di una figura non si ricava dal solo perimetro.
:::

## Teorema di Pitagora

:::richiamo{titolo="Radice quadrata"}
Per un numero $a \geq 0$, la radice quadrata $\sqrt{a}$ è il numero maggiore o uguale a zero il cui quadrato è $a$.
:::

::::teorema{#teorema-di-pitagora titolo="Teorema di Pitagora"}
In un triangolo rettangolo con cateti $a$ e $b$ e ipotenusa $c$ vale
$$
a^2 + b^2 = c^2 .
$$
In parole, il quadrato costruito sull'ipotenusa ha area uguale alla somma delle aree dei quadrati costruiti sui due cateti. Il teorema permette di calcolare l'ipotenusa quando sono noti i cateti, con la radice quadrata:
$$
c = \sqrt{a^2 + b^2} .
$$
Per esempio, con cateti $a = 3$ cm e $b = 4$ cm si ha $c^2 = 9 + 16 = 25$, quindi $c = \sqrt{25} = 5$ cm.

::grafico{assi=0 uguale=1 poligoni="3,0 7,3 4,7 0,4;9,0 12,0 12,3 9,3;12,3 16,3 16,7 12,7" linee="0,0 7,0 7,7 0,7 0,0;3,0 7,3 4,7 0,4 3,0;9,0 16,0 16,7 9,7 9,0;12,0 12,7;9,3 16,3;12,0 16,3;9,7 12,3" etichette="1.3,-0.6,a;4.9,-0.6,b;7.25,1.3,a;7.25,4.9,b;1.25,1.45,c;2.85,3.6,c²;10.3,1.35,a²;13.7,4.85,b²;10.3,-0.6,a;13.9,-0.6,b" xmin=-0.6 xmax=16.8 ymin=-1.1 ymax=7.6 titolo="Due quadrati con lato $a + b$; a sinistra quattro triangoli rettangoli lasciano libero il quadrato con area $c^2$, a destra gli stessi triangoli lasciano liberi i quadrati con aree $a^2$ e $b^2$; con $a = 3$ e $b = 4$ si ha $9 + 16 = 25 = 5^2$"}

:::dimostrazione
Si costruiscono due quadrati uguali, ciascuno con lato $a + b$, e in ciascuno si dispongono quattro copie del triangolo rettangolo, come nella figura.

- Nel primo quadrato i quattro triangoli stanno negli angoli e lasciano libero al centro un quadrato con lato $c$. La parte libera ha quindi area $c^2$.
- Nel secondo quadrato i quattro triangoli sono accostati a due a due e formano due rettangoli con lati $a$ e $b$. La parte libera è formata da un quadrato con lato $a$ e da un quadrato con lato $b$, e ha quindi area $a^2 + b^2$.

I due quadrati grandi hanno la stessa area, e in entrambi i quattro triangoli occupano la stessa superficie. Perciò anche le parti libere hanno la stessa area, cioè $c^2 = a^2 + b^2$. Con $a = 3$ e $b = 4$ i quadrati grandi hanno lato $7$ e area $49$. I quattro triangoli hanno area $4 \cdot \dfrac{3 \cdot 4}{2} = 24$, quindi la parte libera ha area $49 - 24 = 25$, che è uguale sia a $5^2$ sia a $9 + 16$.
:::
::::

:::esempio{titolo="Calcolo di un cateto"}
Dall'uguaglianza $a^2 + b^2 = c^2$ si ricava un cateto quando sono noti l'ipotenusa e l'altro cateto. Sottraendo $b^2$ da entrambi i membri si ottiene $a^2 = c^2 - b^2$, quindi
$$
a = \sqrt{c^2 - b^2} .
$$
Per esempio, in un triangolo rettangolo con ipotenusa $c = 13$ cm e cateto $b = 12$ cm l'altro cateto è
$$
a = \sqrt{13^2 - 12^2} = \sqrt{169 - 144} = \sqrt{25} = 5\ \text{cm} .
$$
:::

:::attenzione
In generale $\sqrt{a^2 + b^2}$ è diverso da $a + b$, quindi l'ipotenusa è diversa dalla somma dei cateti. Con cateti di $6$ cm e $8$ cm la somma dei cateti è $14$ cm, mentre l'ipotenusa è $\sqrt{36 + 64} = \sqrt{100} = 10$ cm.
:::

:::definizione{#terne-pitagoriche titolo="Terne pitagoriche"}
Una **terna pitagorica** è un gruppo di tre numeri naturali $a$, $b$, $c$ tali che $a^2 + b^2 = c^2$. In parole semplici, sono le misure dei lati di un triangolo rettangolo in cui tutti e tre i lati sono numeri interi. Le terne più comuni sono
$$
(3, 4, 5) , \qquad (5, 12, 13) , \qquad (8, 15, 17) .
$$
Per esempio $(5, 12, 13)$ è una terna pitagorica, perché $5^2 + 12^2 = 25 + 144 = 169$ e $13^2 = 169$. Moltiplicando i tre numeri di una terna per uno stesso numero naturale si ottiene un'altra terna, perché tutti e tre i quadrati vengono moltiplicati per lo stesso numero. Per esempio, moltiplicando per $2$ la terna $(3, 4, 5)$ si ottiene $(6, 8, 10)$, e infatti $36 + 64 = 100$. Le terne permettono di riconoscere l'ipotenusa o un cateto senza calcolare la radice quadrata.
:::

:::osservazione{#diagonale-altezza titolo="Diagonale del rettangolo e altezza del triangolo isoscele"}
Il teorema di Pitagora si applica ogni volta che in una figura c'è un triangolo rettangolo.

- La diagonale divide un rettangolo con base $b$ e altezza $h$ in due triangoli rettangoli con cateti $b$ e $h$. La diagonale è quindi $d = \sqrt{b^2 + h^2}$. Un rettangolo con lati di $12$ cm e $5$ cm ha diagonale $\sqrt{144 + 25} = \sqrt{169} = 13$ cm.
- L'altezza relativa alla base divide un triangolo isoscele in due triangoli rettangoli. In ciascuno l'ipotenusa è il lato obliquo, e i cateti sono l'altezza e metà della base. Un triangolo isoscele con base $10$ cm e lati obliqui di $13$ cm ha quindi altezza $\sqrt{13^2 - 5^2} = \sqrt{169 - 25} = \sqrt{144} = 12$ cm, e area $\dfrac{10 \cdot 12}{2} = 60\ \text{cm}^2$.
:::

## Circonferenza e cerchio

:::definizione{#circonferenza-cerchio titolo="Circonferenza e cerchio"}
Siano $O$ un punto del piano e $r$ una lunghezza. La **circonferenza** di centro $O$ e raggio $r$ è la linea formata da tutti i punti del piano che distano $r$ da $O$. Il **cerchio** è la parte di piano racchiusa dalla circonferenza, bordo compreso. In parole semplici, la circonferenza è il bordo e il cerchio è la figura piena. Per esempio il bordo di una moneta è una circonferenza, e la faccia della moneta è un cerchio.

Un segmento che unisce due punti della circonferenza passando per il centro si chiama diametro. La sua lunghezza è il doppio del raggio, $d = 2r$, quindi una circonferenza con raggio $3$ cm ha diametro $6$ cm.
:::

:::definizione{#pi-greco titolo="Il numero π e la lunghezza della circonferenza"}
Se si misura la lunghezza di una circonferenza, per esempio con un filo, e la si divide per il diametro, si ottiene sempre lo stesso numero, qualunque sia la circonferenza. Questo numero si indica con la lettera greca $\pi$ (pi greco) e vale circa $3{,}14$. Le sue cifre decimali sono infinite e non si ripetono con un periodo, perciò $\pi$ è un numero irrazionale, come $\sqrt{2}$ nell'argomento sulle potenze e radici.

La lunghezza $C$ della circonferenza è quindi $\pi$ volte il diametro:
$$
C = \pi \cdot d = 2\pi r .
$$
Per esempio una circonferenza con raggio $5$ cm è lunga $2 \cdot \pi \cdot 5 = 10\pi$ cm, cioè circa $10 \cdot 3{,}14 = 31{,}4$ cm. Una ruota di bicicletta con diametro di $70$ cm in un giro completo percorre circa $3{,}14 \cdot 70 = 219{,}8$ cm.
:::

::::teorema{#area-cerchio titolo="Area del cerchio"}
Un cerchio con raggio $r$ ha area
$$
A = \pi \cdot r^2 .
$$
Per esempio un cerchio con raggio $10$ cm ha area $\pi \cdot 10^2 = 100\pi\ \text{cm}^2$, cioè circa $314\ \text{cm}^2$. Un cerchio con diametro $6$ cm ha raggio $3$ cm, quindi la sua area è $9\pi\ \text{cm}^2$, cioè circa $28{,}26\ \text{cm}^2$.

::grafico{assi=0 uguale=1 poligoni="-3.60,0.95 -1.60,0.95 -1.61,1.15 -1.64,1.34 -1.69,1.53 -1.75,1.72 -1.84,1.89 -1.94,2.06 -2.05,2.22 -2.19,2.36;-3.60,0.95 -3.60,2.95 -3.80,2.94 -3.99,2.91 -4.18,2.86 -4.37,2.80 -4.54,2.71 -4.71,2.61 -4.87,2.50 -5.01,2.36;-3.60,0.95 -5.60,0.95 -5.59,0.75 -5.56,0.56 -5.51,0.37 -5.45,0.18 -5.36,0.01 -5.26,-0.16 -5.15,-0.32 -5.01,-0.46;-3.60,0.95 -3.60,-1.05 -3.40,-1.04 -3.21,-1.01 -3.02,-0.96 -2.83,-0.90 -2.66,-0.81 -2.49,-0.71 -2.33,-0.60 -2.19,-0.46;1.20,1.85 0.43,0.00 0.62,-0.07 0.81,-0.11 1.00,-0.14 1.20,-0.15 1.40,-0.14 1.59,-0.11 1.78,-0.07 1.97,0.00;2.73,1.85 1.97,0.00 2.15,-0.07 2.34,-0.11 2.53,-0.14 2.73,-0.15 2.93,-0.14 3.12,-0.11 3.31,-0.07 3.50,0.00;4.26,1.85 3.50,0.00 3.68,-0.07 3.87,-0.11 4.07,-0.14 4.26,-0.15 4.46,-0.14 4.65,-0.11 4.84,-0.07 5.03,0.00;5.79,1.85 5.03,0.00 5.21,-0.07 5.40,-0.11 5.60,-0.14 5.79,-0.15 5.99,-0.14 6.18,-0.11 6.37,-0.07 6.56,0.00" linee="-1.60,0.95 -1.61,1.12 -1.63,1.30 -1.67,1.47 -1.72,1.63 -1.79,1.80 -1.87,1.95 -1.96,2.10 -2.07,2.24 -2.19,2.36 -2.31,2.48 -2.45,2.59 -2.60,2.68 -2.75,2.76 -2.92,2.83 -3.08,2.88 -3.25,2.92 -3.43,2.94 -3.60,2.95 -3.77,2.94 -3.95,2.92 -4.12,2.88 -4.28,2.83 -4.45,2.76 -4.60,2.68 -4.75,2.59 -4.89,2.48 -5.01,2.36 -5.13,2.24 -5.24,2.10 -5.33,1.95 -5.41,1.80 -5.48,1.63 -5.53,1.47 -5.57,1.30 -5.59,1.12 -5.60,0.95 -5.59,0.78 -5.57,0.60 -5.53,0.43 -5.48,0.27 -5.41,0.10 -5.33,-0.05 -5.24,-0.20 -5.13,-0.34 -5.01,-0.46 -4.89,-0.58 -4.75,-0.69 -4.60,-0.78 -4.45,-0.86 -4.28,-0.93 -4.12,-0.98 -3.95,-1.02 -3.77,-1.04 -3.60,-1.05 -3.43,-1.04 -3.25,-1.02 -3.08,-0.98 -2.92,-0.93 -2.75,-0.86 -2.60,-0.78 -2.45,-0.69 -2.31,-0.58 -2.19,-0.46 -2.07,-0.34 -1.96,-0.20 -1.87,-0.05 -1.79,0.10 -1.72,0.27 -1.67,0.43 -1.63,0.60 -1.61,0.78 -1.60,0.95;-3.60,0.95 -1.60,0.95;-3.60,0.95 -2.19,2.36;-3.60,0.95 -3.60,2.95;-3.60,0.95 -5.01,2.36;-3.60,0.95 -5.60,0.95;-3.60,0.95 -5.01,-0.46;-3.60,0.95 -3.60,-1.05;-3.60,0.95 -2.19,-0.46;1.20,1.85 0.43,0.00 0.62,-0.07 0.81,-0.11 1.00,-0.14 1.20,-0.15 1.40,-0.14 1.59,-0.11 1.78,-0.07 1.97,0.00 1.20,1.85;1.97,0 2.73,1.85 2.55,1.91 2.36,1.96 2.16,1.99 1.97,2.00 1.77,1.99 1.58,1.96 1.38,1.91 1.20,1.85 1.97,0;2.73,1.85 1.97,0.00 2.15,-0.07 2.34,-0.11 2.53,-0.14 2.73,-0.15 2.93,-0.14 3.12,-0.11 3.31,-0.07 3.50,0.00 2.73,1.85;3.50,0 4.26,1.85 4.08,1.91 3.89,1.96 3.69,1.99 3.50,2.00 3.30,1.99 3.11,1.96 2.92,1.91 2.73,1.85 3.50,0;4.26,1.85 3.50,0.00 3.68,-0.07 3.87,-0.11 4.07,-0.14 4.26,-0.15 4.46,-0.14 4.65,-0.11 4.84,-0.07 5.03,0.00 4.26,1.85;5.03,0 5.79,1.85 5.61,1.91 5.42,1.96 5.22,1.99 5.03,2.00 4.83,1.99 4.64,1.96 4.45,1.91 4.26,1.85 5.03,0;5.79,1.85 5.03,0.00 5.21,-0.07 5.40,-0.11 5.60,-0.14 5.79,-0.15 5.99,-0.14 6.18,-0.11 6.37,-0.07 6.56,0.00 5.79,1.85;6.56,0 7.32,1.85 7.14,1.91 6.95,1.96 6.75,1.99 6.56,2.00 6.36,1.99 6.17,1.96 5.98,1.91 5.79,1.85 6.56,0" punti="-3.6,0.95,pieno,O" etichette="-2.75,0.55,r;3.35,-0.75,π · r;-0.2,0.85,r" xmin=-6 xmax=7.8 ymin=-1.4 ymax=3.4 titolo="Gli $8$ spicchi del cerchio, disposti alternando la punta in alto e in basso, formano una figura simile a un parallelogramma con altezza circa $r$ e base circa metà della circonferenza, cioè $\pi r$"}

:::dimostrazione
Si divide il cerchio in $8$ spicchi uguali e si dispongono gli spicchi uno accanto all'altro, alternando la punta verso l'alto e verso il basso. La figura che si ottiene è simile a un parallelogramma. La sua altezza è circa il raggio $r$, perché ogni spicchio è lungo $r$ dalla punta all'arco. La sua base è formata da metà degli archi, cioè da metà della circonferenza, e misura quindi circa $\dfrac{2\pi r}{2} = \pi r$. Con spicchi sempre più sottili la figura diventa sempre più simile a un rettangolo con base $\pi r$ e altezza $r$, perciò l'area del cerchio è $\pi r \cdot r = \pi r^2$.
:::
::::

## Unità di misura

:::definizione{#unita-lunghezza titolo="Unità di misura delle lunghezze"}
L'unità di misura delle lunghezze è il **metro**, che si indica con m. I suoi multipli e sottomultipli più usati sono il chilometro (km), il decimetro (dm), il centimetro (cm) e il millimetro (mm):
$$
1\ \text{km} = 1000\ \text{m} , \qquad 1\ \text{m} = 10\ \text{dm} = 100\ \text{cm} = 1000\ \text{mm} .
$$
Nella scala km, hm, dam, m, dm, cm, mm ogni unità è $10$ volte più grande della successiva. Per passare a un'unità più piccola si moltiplica per $10$ a ogni passo, e per passare a un'unità più grande si divide per $10$ a ogni passo. Per esempio $3{,}5\ \text{m} = 350\ \text{cm}$, perché dal metro al centimetro ci sono due passi e $3{,}5 \cdot 100 = 350$. Allo stesso modo $2400\ \text{m} = 2{,}4\ \text{km}$, perché dal metro al chilometro ci sono tre passi e $\dfrac{2400}{1000} = 2{,}4$. Nel calcolo di un perimetro o di un'area le lunghezze si esprimono tutte nella stessa unità.
:::

:::teorema{#unita-area titolo="Unità di misura delle aree"}
Le aree si misurano in unità al quadrato, come $\text{m}^2$, $\text{dm}^2$ e $\text{cm}^2$. Nella scala delle aree ogni unità è $100$ volte più grande della successiva, quindi a ogni passo si moltiplica o si divide per $100$.

Il motivo si vede su un quadrato con lato $1$ dm. Il suo lato misura $10$ cm, perciò il quadrato contiene $10$ file di $10$ quadratini con lato $1$ cm, cioè $10 \cdot 10 = 100$ quadratini. Ne segue che
$$
1\ \text{dm}^2 = 100\ \text{cm}^2 , \qquad 1\ \text{m}^2 = 100 \cdot 100\ \text{cm}^2 = 10\,000\ \text{cm}^2 .
$$
Per esempio $2{,}5\ \text{m}^2 = 2{,}5 \cdot 10\,000\ \text{cm}^2 = 25\,000\ \text{cm}^2$, e $600\ \text{cm}^2 = \dfrac{600}{100}\ \text{dm}^2 = 6\ \text{dm}^2$. Per i terreni si usa anche l'ettaro (ha), che è l'area di un quadrato con lato $100$ m, cioè $100 \cdot 100 = 10\,000\ \text{m}^2$.
:::

:::attenzione
Un metro quadrato è diverso da $100$ centimetri quadrati. Un quadrato con lato $1$ m ha lato $100$ cm, quindi la sua area è $100 \cdot 100 = 10\,000\ \text{cm}^2$. Il fattore $100$ vale per le lunghezze tra metro e centimetro, e per le aree diventa $100 \cdot 100$.
:::

## Solidi e volumi

:::definizione{#volume-parallelepipedo titolo="Volume del cubo e del parallelepipedo"}
Il **volume** di un solido è la misura dello spazio che il solido occupa. Si misura con il numero di cubetti di spigolo unitario che lo riempiono. Un cubetto con spigolo $1$ cm ha volume di un centimetro cubo, che si scrive $1\ \text{cm}^3$.

Un **parallelepipedo** rettangolo è un solido con sei facce rettangolari, come una scatola da scarpe. Le lunghezze dei tre spigoli che partono da uno stesso vertice sono le sue dimensioni $a$, $b$, $c$. Il cubo è un parallelepipedo con tutti gli spigoli uguali a $l$. I loro volumi sono
$$
V_{\text{parallelepipedo}} = a \cdot b \cdot c , \qquad V_{\text{cubo}} = l \cdot l \cdot l = l^3 .
$$
La formula si giustifica contando i cubetti. Un parallelepipedo con dimensioni $4$ cm, $3$ cm e $2$ cm ha sulla base $4 \cdot 3 = 12$ cubetti e contiene $2$ strati uguali, quindi il suo volume è $12 \cdot 2 = 24\ \text{cm}^3$. Un cubo con spigolo $5$ cm ha volume $5 \cdot 5 \cdot 5 = 125\ \text{cm}^3$.

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 5.35,1.05 5.35,3.05 1.35,3.05 0,2" linee="0,0 4,0 4,2 0,2 0,0;0,2 1.35,3.05 5.35,3.05 4,2;4,0 5.35,1.05 5.35,3.05" segmenti="1,0,1,2;2,0,2,2;3,0,3,2;0,1,4,1;1,2,2.35,3.05;2,2,3.35,3.05;3,2,4.35,3.05;0.45,2.35,4.45,2.35;0.90,2.70,4.90,2.70;4.45,0.35,4.45,2.35;4.90,0.70,4.90,2.70;4,1,5.35,2.05" etichette="1.55,-0.5,4 cm;5.05,0.25,3 cm;-1.05,0.9,2 cm" xmin=-1.3 xmax=6.2 ymin=-0.9 ymax=3.4 titolo="Un parallelepipedo con dimensioni $4$ cm, $3$ cm e $2$ cm è formato da $2$ strati di $4 \cdot 3 = 12$ cubetti con spigolo $1$ cm, quindi ha volume $24\ \text{cm}^3$"}

:::

:::teorema{#volume-cilindro titolo="Volume del cilindro"}
Un **cilindro** è un solido con due basi circolari uguali e parallele, come una lattina. Se il raggio di base è $r$ e l'altezza è $h$, il volume è l'area di base per l'altezza:
$$
V = \pi \cdot r^2 \cdot h .
$$
La formula è la stessa del parallelepipedo, in cui $a \cdot b$ è l'area della base e $c$ è l'altezza, perché in entrambi i solidi ogni sezione parallela alla base è uguale alla base. Per esempio un cilindro con raggio $3$ cm e altezza $10$ cm ha volume $\pi \cdot 3^2 \cdot 10 = 90\pi\ \text{cm}^3$, cioè circa $282{,}6\ \text{cm}^3$.
:::

:::osservazione{#volumi-e-litri titolo="Unità di volume e litri"}
Nella scala dei volumi ogni unità è $1000$ volte più grande della successiva, perché un cubo con spigolo $1$ dm contiene $10 \cdot 10 \cdot 10 = 1000$ cubetti con spigolo $1$ cm. Quindi $1\ \text{dm}^3 = 1000\ \text{cm}^3$ e $1\ \text{m}^3 = 1000\ \text{dm}^3$. La capacità dei recipienti si misura in litri, e un litro è il volume di un decimetro cubo:
$$
1\ \text{litro} = 1\ \text{dm}^3 = 1000\ \text{cm}^3 , \qquad 1\ \text{m}^3 = 1000\ \text{litri} .
$$
Per esempio una vasca a forma di parallelepipedo con dimensioni $2$ m, $1$ m e $0{,}5$ m ha volume $2 \cdot 1 \cdot 0{,}5 = 1\ \text{m}^3$, e contiene quindi $1000$ litri d'acqua.
:::
