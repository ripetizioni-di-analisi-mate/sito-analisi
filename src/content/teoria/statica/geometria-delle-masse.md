---
titolo: "Geometria delle masse: baricentri e momenti d'inerzia"
sommario: Come si calcolano area, momenti statici, baricentro e momenti d'inerzia delle sezioni delle travi, anche composte o con fori, e come si trovano gli assi e i momenti principali d'inerzia.
---

## Figure piane e momento statico

:::definizione{#figura-piana titolo="Sezione e figura piana"}
La **sezione** di una trave è la parte di piano occupata dal materiale quando si taglia la trave con un piano perpendicolare al suo asse. Nella geometria delle masse la sezione si tratta come una figura piana, indicata con $A$ come la sua area, e si fissa nel suo piano un riferimento cartesiano con gli assi $x$ e $y$. Si pensa la figura divisa in elementi di area $dA$ così piccoli che di ciascuno conta solo la posizione $(x, y)$.

Le grandezze di questo argomento dipendono soltanto dalla forma e dalle dimensioni della sezione. Il nome viene dall'analogia con una lamina omogenea, nella quale la massa di ogni parte è proporzionale alla sua area. Le lunghezze si misurano in $\mathrm{cm}$ (o in $\mathrm{mm}$), le aree in $\mathrm{cm^2}$.
:::

:::richiamo{titolo="Integrale definito"}
Per una funzione $f$ continua su $[a, b]$, l'integrale $\displaystyle\int_a^b f(t)\,dt$ è il limite delle somme $\sum_k f(t_k)\,\Delta t_k$ quando l'ampiezza degli intervalli $\Delta t_k$ tende a zero; se $F$ è una primitiva di $f$, vale $\displaystyle\int_a^b f(t)\,dt = F(b) - F(a)$. Si rimanda all'argomento sul calcolo integrale di Analisi 1.
:::

:::definizione{#momento-statico titolo="Momento statico"}
I **momenti statici** della figura $A$ rispetto agli assi $x$ e $y$ sono
$$
S_x = \int_A y\,dA ,
\qquad
S_y = \int_A x\,dA ,
$$
e si misurano in $\mathrm{cm^3}$. Ogni elemento contribuisce con la sua area moltiplicata per la distanza con segno dall'asse: per $S_x$ conta l'ordinata $y$, cioè la distanza dall'asse $x$. Gli elementi dalle due parti dell'asse danno contributi di segno opposto, quindi un momento statico può essere positivo, negativo o nullo. Il momento statico è **additivo**: se la figura è divisa in parti senza sovrapposizioni, il suo momento statico è la somma di quelli delle parti.

Quando la quantità da integrare dipende solo da $y$, l'integrale sulla figura si calcola dividendo la figura in strisce sottili parallele all'asse $x$. La striscia all'ordinata $y$ ha larghezza $b(y)$ e altezza $dy$, quindi area $dA = b(y)\,dy$, e l'integrale sulla figura diventa un integrale in una variabile. Per un rettangolo di base $b$ e altezza $h$ con la base sull'asse $x$ la larghezza è costante, perciò
$$
S_x = \int_0^h y\,b\,dy = \frac{b h^2}{2} .
$$
Per un rettangolo largo $6\,\mathrm{cm}$ e alto $10\,\mathrm{cm}$ si ottiene $S_x = 300\,\mathrm{cm^3}$. Il momento statico serve a trovare il baricentro e, in Scienza delle costruzioni, a calcolare le tensioni tangenziali dovute al taglio.

::struttura{poligoni="1,1 7,0.5 8.6,3.6 6,6.2 2,5.6" punti="5.5,3.2,dA;0,0,O" tratteggi="5.5,3.2 5.5,0;5.5,3.2 0,3.2" frecce="0,0,10,0,x;0,0,0,7.6,y" etichette="5.85,1.5,y;2.6,3.55,x" riferimento=0 titolo="Ogni elemento di area $dA$ nel punto $(x, y)$ contribuisce a $S_x$ con $y\,dA$ e a $S_y$ con $x\,dA$"}

:::

## Baricentro

:::definizione{#baricentro titolo="Baricentro"}
Il **baricentro** della figura è il punto $G$ di coordinate
$$
x_G = \frac{S_y}{A} ,
\qquad
y_G = \frac{S_x}{A} .
$$
In altre parole, $G$ è il punto in cui si può concentrare tutta l'area della figura senza cambiare i suoi momenti statici, perché $S_x = A\,y_G$ e $S_y = A\,x_G$. Per il rettangolo di base $6\,\mathrm{cm}$ e altezza $10\,\mathrm{cm}$ con un vertice nell'origine e i lati sugli assi si ha $S_y = 180\,\mathrm{cm^3}$ e $S_x = 300\,\mathrm{cm^3}$, quindi $G = (3, 5)\,\mathrm{cm}$, il centro del rettangolo. Gli assi passanti per $G$ e paralleli a $x$ e $y$ si chiamano **assi baricentrici** e si indicano con $x_G$ e $y_G$.
:::

::::teorema{#momento-statico-baricentro titolo="Momento statico rispetto a un asse baricentrico"}
Sia $r$ una retta del piano della figura e sia $d_G$ la distanza con segno del baricentro da $r$. Allora il momento statico della figura rispetto a $r$ vale
$$
S_r = A\,d_G .
$$
In particolare il momento statico rispetto a una retta passante per $G$ è nullo, e una retta rispetto alla quale il momento statico è nullo passa per $G$. Questa proprietà dà un controllo immediato del baricentro calcolato: la somma dei momenti statici delle parti rispetto all'asse baricentrico trovato deve risultare zero.

:::dimostrazione
Si sceglie il riferimento con l'asse $x$ sulla retta $r$, orientato in modo che le distanze positive siano quelle con $y > 0$. Allora la distanza con segno di $G$ da $r$ è $d_G = y_G$, e per la definizione di baricentro $S_r = S_x = A\,y_G = A\,d_G$. Se $r$ passa per $G$, allora $d_G = 0$ e quindi $S_r = 0$. Viceversa, se $S_r = 0$, allora $A\,d_G = 0$, e poiché $A > 0$ si ha $d_G = 0$, cioè $G$ sta su $r$.
:::
::::

::::teorema{#simmetria-baricentro titolo="Baricentro di una figura simmetrica"}
Se una figura ha un asse di simmetria, il suo baricentro sta sull'asse di simmetria. Se ne ha due, il baricentro è il loro punto d'intersezione. Così il baricentro di un rettangolo, di un cerchio, di una corona circolare e di una sezione a doppio T con ali uguali è il centro della figura, e per una sezione a T o a C basta calcolare una sola coordinata del baricentro.

:::dimostrazione
Si sceglie l'asse $y$ sull'asse di simmetria. Allora per ogni elemento $dA$ nel punto $(x, y)$ la figura contiene l'elemento simmetrico, di uguale area, nel punto $(-x, y)$. I due elementi danno a $S_y$ i contributi $x\,dA$ e $-x\,dA$, la cui somma è nulla, quindi $S_y = 0$. Perciò $x_G = \dfrac{S_y}{A} = 0$ e $G$ sta sull'asse $y$. Con due assi di simmetria $G$ sta su entrambi, quindi coincide con il loro punto d'intersezione.
:::
::::

::::teorema{#baricentro-per-composizione titolo="Baricentro di una figura composta"}
Sia la figura divisa in parti $A_1, \ldots, A_n$ senza sovrapposizioni, e sia $(x_i, y_i)$ il baricentro della parte $A_i$. Allora
$$
x_G = \frac{\sum_i A_i\,x_i}{\sum_i A_i} ,
\qquad
y_G = \frac{\sum_i A_i\,y_i}{\sum_i A_i} .
$$
Un foro si tratta come una parte di area negativa: la figura con il foro è la figura piena meno il foro, e l'area e il momento statico del foro si sottraggono. Con questa formula il baricentro di una sezione fatta di rettangoli si trova senza integrali.

:::dimostrazione
Per l'additività del momento statico $S_x = \sum_i S_{x,i}$, e per la definizione di baricentro applicata a ogni parte $S_{x,i} = A_i\,y_i$. L'area totale è $A = \sum_i A_i$, quindi $y_G = \dfrac{S_x}{A} = \dfrac{\sum_i A_i\,y_i}{\sum_i A_i}$; per $x_G$ il ragionamento è lo stesso con $S_y$. Se la figura è $A_1$ privata del foro $A_2$, la figura piena è l'unione della figura con il foro e del foro stesso, quindi i momenti statici della figura con il foro si ottengono sottraendo quelli di $A_2$ da quelli di $A_1$.
:::
::::

:::esempio{titolo="Baricentro di una sezione a T"}
La sezione a T in figura è formata da un'ala di $8 \times 2\,\mathrm{cm}$ e da un'anima di $2 \times 8\,\mathrm{cm}$. L'asse $y$ è asse di simmetria, quindi $x_G = 0$. Si prende l'asse $x$ sul lembo inferiore: l'anima ha area $16\,\mathrm{cm^2}$ e baricentro alla quota $4\,\mathrm{cm}$, l'ala ha area $16\,\mathrm{cm^2}$ e baricentro alla quota $9\,\mathrm{cm}$. Perciò
$$
y_G = \frac{16 \cdot 4 + 16 \cdot 9}{16 + 16}\,\mathrm{cm} = \frac{208}{32}\,\mathrm{cm} = 6{,}5\,\mathrm{cm} .
$$
Come controllo, rispetto all'asse $x_G$ i momenti statici delle due parti sono $16 \cdot (4 - 6{,}5) = -40\,\mathrm{cm^3}$ e $16 \cdot (9 - 6{,}5) = 40\,\mathrm{cm^3}$, e la loro somma è nulla.

::struttura{poligoni="-1,0 1,0 1,8 4,8 4,10 -4,10 -4,8 -1,8" punti="0,6.5,G,baricentro" tratteggi="-5.5,6.5 5.5,6.5" frecce="-5.5,0,6,0,x;0,-0.6,0,11.6,y" etichette="6.1,6.8,x_G" quote="-4 10,4 10,8 cm,-1.9;-1 0,1 0,2 cm,1.1;4 0,4 10,10 cm,1.3;-4 8,-4 10,2 cm,-0.8" riferimento=0 titolo="Sezione a T con l'asse di simmetria $y$: il baricentro $G$ dista $y_G = 6{,}5\,\mathrm{cm}$ dal lembo inferiore"}

:::

::::teorema{#baricentri-notevoli titolo="Baricentri del triangolo e del semicerchio"}
- Il baricentro di un triangolo dista da ogni lato un terzo dell'altezza relativa a quel lato; coincide con il punto d'incontro delle mediane. Per un triangolo rettangolo con i cateti $b$ e $h$ sugli assi $x$ e $y$ e l'angolo retto nell'origine si ha $G = \left( \dfrac{b}{3}, \dfrac{h}{3} \right)$.
- Il baricentro di un semicerchio di raggio $r$ sta sull'asse di simmetria, alla distanza $\dfrac{4r}{3\pi}$ dal diametro.

Per un triangolo rettangolo con i cateti di $6\,\mathrm{cm}$ lungo $x$ e $9\,\mathrm{cm}$ lungo $y$ il baricentro è $G = (2, 3)\,\mathrm{cm}$; per un semicerchio di raggio $6\,\mathrm{cm}$ il baricentro dista $\dfrac{8}{\pi}\,\mathrm{cm} = 2{,}55\,\mathrm{cm}$ dal diametro. Questi valori servono nelle sezioni composte che contengono parti triangolari o semicircolari.

::struttura{poligoni="0,0 6,0 2,9" frecce="0,0,8,0,x;0,0,0,10.4,y" tratteggi="0.89,4 4.22,4;0.8,3.6 4.4,3.6;-0.6,3 6.6,3" punti="2.67,3,G,baricentro" etichette="2.55,4.35,b(y);4.9,3.85,dy" quote="0 0,6 0,b,0.8;6 0,6 9,h,1" riferimento=0 titolo="La striscia all'altezza $y$ ha larghezza $b(y) = b\left(1 - \dfrac{y}{h}\right)$; il baricentro sta a $\dfrac{h}{3}$ dalla base"}

:::dimostrazione
Si pone la base $b$ del triangolo sull'asse $x$, con il vertice opposto alla quota $h$. La striscia alla quota $y$ è un segmento parallelo alla base, e per la similitudine dei triangoli la sua larghezza è $b(y) = b\left(1 - \dfrac{y}{h}\right)$. Quindi
$$
S_x = \int_0^h y\,b\left(1 - \frac{y}{h}\right) dy = b\left( \frac{h^2}{2} - \frac{h^2}{3} \right) = \frac{b h^2}{6} ,
\qquad
y_G = \frac{S_x}{A} = \frac{\dfrac{b h^2}{6}}{\dfrac{b h}{2}} = \frac{h}{3} .
$$
Lo stesso calcolo vale per ciascuno dei tre lati preso come base. Il semicerchio ha il diametro sull'asse $x$ e il centro nell'origine; la striscia alla quota $y$ ha larghezza $2\sqrt{r^2 - y^2}$, perciò
$$
S_x = \int_0^r 2y\sqrt{r^2 - y^2}\,dy = \left[ -\frac{2}{3}\,(r^2 - y^2)^{\frac{3}{2}} \right]_0^r = \frac{2r^3}{3} ,
\qquad
y_G = \frac{\dfrac{2r^3}{3}}{\dfrac{\pi r^2}{2}} = \frac{4r}{3\pi} .
$$
:::
::::

## Momenti d'inerzia

Il baricentro individua la posizione media dell'area; i momenti d'inerzia misurano quanto l'area è lontana da un asse.

:::definizione{#momenti-d-inerzia titolo="Momenti d'inerzia assiali, centrifugo e polare"}
I **momenti d'inerzia** della figura rispetto agli assi $x$ e $y$, il **momento centrifugo** e il **momento polare** rispetto all'origine $O$ sono
$$
I_x = \int_A y^2\,dA ,
\qquad
I_y = \int_A x^2\,dA ,
\qquad
I_{xy} = \int_A x y\,dA ,
\qquad
I_p = \int_A (x^2 + y^2)\,dA = I_x + I_y ,
$$
e si misurano in $\mathrm{cm^4}$. In $I_p$ compare il quadrato della distanza $\sqrt{x^2 + y^2}$ dell'elemento da $O$. I momenti $I_x$, $I_y$ e $I_p$ sono sempre positivi, perché integrano quadrati; il momento centrifugo può avere qualsiasi segno. Tutti sono additivi, come il momento statico.

Il momento d'inerzia cresce quanto più l'area è lontana dall'asse, perché ogni elemento conta con il quadrato della distanza. In Scienza delle costruzioni si vede che la rigidezza di una trave inflessa è proporzionale al momento d'inerzia della sezione rispetto all'asse baricentrico attorno a cui la sezione ruota; per questo le travi d'acciaio hanno sezione a doppio T, con gran parte dell'area nelle ali, lontano dall'asse. Per un rettangolo di base $b$ e altezza $h$ con la base sull'asse $x$, le strisce orizzontali danno
$$
I_x = \int_0^h y^2\,b\,dy = \frac{b h^3}{3} .
$$
:::

::::teorema{#centrifugo-simmetria titolo="Momento centrifugo e simmetria"}
Se uno dei due assi $x$ e $y$ è asse di simmetria della figura, allora $I_{xy} = 0$. Ne segue che nelle sezioni a T, a doppio T e a C, che hanno un asse di simmetria, il momento centrifugo rispetto agli assi baricentrici paralleli ai lati è nullo; nelle sezioni a L e a Z, prive di assi di simmetria, va calcolato.

:::dimostrazione
Si supponga che l'asse $y$ sia asse di simmetria. Allora a ogni elemento $dA$ nel punto $(x, y)$ corrisponde l'elemento simmetrico, di uguale area, nel punto $(-x, y)$. I loro contributi a $I_{xy}$ sono $x y\,dA$ e $-x y\,dA$, e la loro somma è nulla, quindi $I_{xy} = 0$. Se l'asse di simmetria è $x$, si scambiano i ruoli di $x$ e $y$.
:::
::::

:::attenzione
Il momento centrifugo dipende dalla coppia di assi, e un rettangolo ha momento centrifugo diverso da zero rispetto ad assi che non sono di simmetria. Per il rettangolo di base $b$ e altezza $h$ con un vertice nell'origine e i lati sugli assi positivi, la striscia alla quota $y$ va da $x = 0$ a $x = b$, quindi
$$
I_{xy} = \int_0^h y \left( \int_0^b x\,dx \right) dy = \frac{b^2}{2} \cdot \frac{h^2}{2} = \frac{b^2 h^2}{4} > 0 .
$$
:::

## Teorema di Huygens-Steiner

Il teorema seguente collega il momento d'inerzia rispetto a un asse qualsiasi a quello rispetto all'asse baricentrico parallelo, che per le figure elementari è noto.

::::teorema{#huygens-steiner titolo="Teorema di Huygens-Steiner"}
Sia $G = (x_G, y_G)$ il baricentro della figura di area $A$, e siano $x_G$ e $y_G$ gli assi baricentrici paralleli agli assi $x$ e $y$. Allora
$$
I_x = I_{x_G} + A\,y_G^2 ,
\qquad
I_y = I_{y_G} + A\,x_G^2 ,
\qquad
I_{xy} = I_{x_G y_G} + A\,x_G\,y_G .
$$
Il momento d'inerzia rispetto a un asse è quindi quello rispetto all'asse baricentrico parallelo più l'area per il quadrato della distanza tra i due assi; fra tutti gli assi paralleli a una direzione, quello baricentrico ha il momento d'inerzia minimo. Nel termine di trasporto del momento centrifugo $x_G$ e $y_G$ sono coordinate con segno. Per il rettangolo di base $12\,\mathrm{cm}$ e altezza $20\,\mathrm{cm}$, rispetto alla base, $I_x = 8000 + 240 \cdot 10^2 = 32\,000\,\mathrm{cm^4}$, che coincide con $\dfrac{b h^3}{3}$.

::struttura{poligoni="1,2 5,2 5,8 1,8" punti="3,5,G,baricentro" tratteggi="-0.5,5 7,5" frecce="-0.5,0,7.5,0,x" etichette="7.4,5.3,x_G" quote="6 0,6 5,y_G,0.8" riferimento=0 titolo="Gli assi $x$ e $x_G$ sono paralleli e distano $y_G$, quindi $I_x = I_{x_G} + A\,y_G^2$"}

:::dimostrazione
Si scrivono le coordinate di ogni elemento come $x = x_G + u$ e $y = y_G + v$, dove $(u, v)$ sono le coordinate rispetto agli assi baricentrici. Allora
$$
I_x = \int_A (y_G + v)^2\,dA = y_G^2 \int_A dA + 2y_G \int_A v\,dA + \int_A v^2\,dA .
$$
Il primo addendo è $A\,y_G^2$ e l'ultimo è $I_{x_G}$. L'integrale $\displaystyle\int_A v\,dA$ è il momento statico rispetto all'asse baricentrico $x_G$, che è nullo per il teorema sul momento statico rispetto a un asse baricentrico; quindi $I_x = I_{x_G} + A\,y_G^2$. Per $I_y$ il calcolo è lo stesso con $u$. Per il momento centrifugo
$$
I_{xy} = \int_A (x_G + u)(y_G + v)\,dA = A\,x_G\,y_G + x_G \int_A v\,dA + y_G \int_A u\,dA + \int_A u v\,dA ,
$$
e i due integrali centrali sono momenti statici rispetto agli assi baricentrici, perciò sono nulli. Resta $I_{xy} = I_{x_G y_G} + A\,x_G\,y_G$.
:::
::::

:::attenzione
Il teorema collega un asse qualsiasi all'asse baricentrico parallelo. Fra due assi paralleli che non passano per $G$ si passa attraverso l'asse baricentrico. Per il rettangolo di base $b$ e altezza $h$ il momento d'inerzia rispetto al lato superiore è $\dfrac{b h^3}{3}$, uguale a quello rispetto alla base; sommando $A h^2$ al momento rispetto alla base si otterrebbe invece $\dfrac{4 b h^3}{3}$, valore errato.
:::

## Momenti d'inerzia delle figure elementari

::::teorema{#momenti-notevoli titolo="Momenti d'inerzia di rettangolo, triangolo, cerchio e corona"}
Rispetto agli assi baricentrici indicati valgono i seguenti momenti d'inerzia.

- Rettangolo di base $b$ (lungo $x$) e altezza $h$: $I_{x_G} = \dfrac{b h^3}{12}$, $I_{y_G} = \dfrac{h b^3}{12}$, $I_{x_G y_G} = 0$; rispetto alla base $I = \dfrac{b h^3}{3}$.
- Triangolo di base $b$ e altezza $h$: rispetto all'asse baricentrico parallelo alla base $I = \dfrac{b h^3}{36}$; rispetto alla base $I = \dfrac{b h^3}{12}$. Triangolo rettangolo con il cateto $b$ parallelo a $x$, il cateto $h$ parallelo a $y$ e l'angolo retto in basso a sinistra: $I_{x_G y_G} = -\dfrac{b^2 h^2}{72}$.
- Cerchio di raggio $r$: $I_{x_G} = I_{y_G} = \dfrac{\pi r^4}{4}$ e momento polare rispetto al centro $I_p = \dfrac{\pi r^4}{2}$.
- Corona circolare di raggi $R$ e $r < R$: $I_{x_G} = I_{y_G} = \dfrac{\pi (R^4 - r^4)}{4}$.

Il rettangolo di base $12\,\mathrm{cm}$ e altezza $20\,\mathrm{cm}$ ha $I_{x_G} = \dfrac{12 \cdot 20^3}{12} = 8000\,\mathrm{cm^4}$ e $I_{y_G} = \dfrac{20 \cdot 12^3}{12} = 2880\,\mathrm{cm^4}$: la stessa sezione, inflessa attorno all'asse parallelo al lato corto, è quasi tre volte più rigida. Una corona di raggi $6\,\mathrm{cm}$ e $5\,\mathrm{cm}$ ha $I_{x_G} = \dfrac{\pi (1296 - 625)}{4} = 527\,\mathrm{cm^4}$ con area $34{,}6\,\mathrm{cm^2}$, mentre il cerchio pieno di uguale area, di raggio $3{,}32\,\mathrm{cm}$, ha $I_{x_G} = 95\,\mathrm{cm^4}$.

::struttura{poligoni="0,0 4,0 4,6 0,6;9,0 13,0 9,6" cerchi="19,3,2.2;26.5,3,2.2;26.5,3,1.6,foro" punti="2,3,G,baricentro;10.33,2,G,baricentro;19,3,G,baricentro;26.5,3,G,baricentro" frecce="-0.6,3,5,3,x_G;2,-0.6,2,7.2,y_G;8.4,2,14,2,x_G;10.33,-0.6,10.33,7.2,y_G;16.3,3,21.9,3,x_G;19,0.3,19,6.2,y_G;23.8,3,29.4,3,x_G;26.5,0.3,26.5,6.2,y_G" quote="0 0,4 0,b,0.8;0 0,0 6,h,-0.8;9 0,13 0,b,0.8;9 0,9 6,h,-0.8" riferimento=0 titolo="Rettangolo, triangolo rettangolo, cerchio e corona circolare con gli assi baricentrici paralleli agli assi $x$ e $y$"}

:::dimostrazione
Per il rettangolo con gli assi baricentrici la striscia alla quota $y$ ha larghezza $b$, quindi $I_{x_G} = \displaystyle\int_{-\frac{h}{2}}^{\frac{h}{2}} y^2\,b\,dy = \dfrac{b h^3}{12}$; scambiando i ruoli di $b$ e $h$ si ottiene $I_{y_G}$, e $I_{x_G y_G} = 0$ per il teorema sul momento centrifugo e la simmetria. Per il **teorema di Huygens-Steiner** rispetto alla base $I = \dfrac{b h^3}{12} + b h \left( \dfrac{h}{2} \right)^2 = \dfrac{b h^3}{3}$.

Per il triangolo con la base sull'asse $x$ la striscia alla quota $y$ ha larghezza $b\left(1 - \dfrac{y}{h}\right)$, perciò
$$
I_{\text{base}} = \int_0^h y^2\,b\left(1 - \frac{y}{h}\right) dy = b\left( \frac{h^3}{3} - \frac{h^3}{4} \right) = \frac{b h^3}{12} .
$$
Il baricentro dista $\dfrac{h}{3}$ dalla base, quindi per il teorema di Huygens-Steiner $I = \dfrac{b h^3}{12} - \dfrac{b h}{2} \cdot \dfrac{h^2}{9} = \dfrac{b h^3}{36}$. Per il triangolo rettangolo con l'angolo retto nell'origine e i cateti sugli assi positivi la striscia alla quota $y$ va da $x = 0$ a $x = b\left(1 - \dfrac{y}{h}\right)$, quindi
$$
I_{xy} = \int_0^h y\,\frac{b^2}{2}\left(1 - \frac{y}{h}\right)^2 dy = \frac{b^2}{2}\left( \frac{h^2}{2} - \frac{2h^2}{3} + \frac{h^2}{4} \right) = \frac{b^2 h^2}{24} ;
$$
il baricentro è $\left( \dfrac{b}{3}, \dfrac{h}{3} \right)$, e il teorema di Huygens-Steiner dà $I_{x_G y_G} = \dfrac{b^2 h^2}{24} - \dfrac{b h}{2} \cdot \dfrac{b}{3} \cdot \dfrac{h}{3} = -\dfrac{b^2 h^2}{72}$.

Per il cerchio si calcola prima il momento polare, dividendo il cerchio in anelli sottili di raggio $\rho$ e spessore $d\rho$, di area $2\pi\rho\,d\rho$, i cui punti distano tutti $\rho$ dal centro:
$$
I_p = \int_0^r \rho^2 \cdot 2\pi\rho\,d\rho = \frac{\pi r^4}{2} .
$$
Il cerchio è simmetrico rispetto a ogni diametro, quindi $I_{x_G} = I_{y_G}$; poiché $I_{x_G} + I_{y_G} = I_p$, ciascuno vale $\dfrac{\pi r^4}{4}$. La corona è il cerchio di raggio $R$ privato del cerchio concentrico di raggio $r$, e il suo momento d'inerzia è la differenza dei due.
:::
::::

## Sezioni composte: a T, a L, a doppio T, a C

Le sezioni delle travi si scompongono quasi sempre in rettangoli; il procedimento è lo stesso per ogni forma.

:::osservazione{#sezioni-composte titolo="Procedimento per le sezioni composte"}
Per calcolare baricentro e momenti d'inerzia baricentrici di una sezione composta si procede così.

1. Si divide la sezione in figure elementari $A_i$ senza sovrapposizioni; i fori sono figure di area negativa.
2. Si trova il baricentro $G$ con la formula del baricentro di una figura composta, dopo aver usato le eventuali simmetrie.
3. Per ogni parte si scrivono i momenti rispetto ai propri assi baricentrici e si trasportano sugli assi baricentrici $x_G$, $y_G$ dell'intera sezione con il teorema di Huygens-Steiner, usando le distanze $y_i - y_G$ e $x_i - x_G$.
4. Si sommano i contributi delle parti, sottraendo quelli dei fori.

Le distanze del passo 3 si misurano dal baricentro dell'intera sezione; il loro segno conta solo nel momento centrifugo.
:::

:::esempio{titolo="Momenti d'inerzia della sezione a T"}
Per la sezione a T dell'esempio sul baricentro, con $y_G = 6{,}5\,\mathrm{cm}$, il baricentro dell'ala dista $9 - 6{,}5 = 2{,}5\,\mathrm{cm}$ dall'asse $x_G$ e quello dell'anima $4 - 6{,}5 = -2{,}5\,\mathrm{cm}$. Quindi
$$
\begin{aligned}
I_{x_G} &= \left( \frac{8 \cdot 2^3}{12} + 16 \cdot 2{,}5^2 \right) + \left( \frac{2 \cdot 8^3}{12} + 16 \cdot 2{,}5^2 \right) \\[6pt]
&= (5{,}33 + 100) + (85{,}33 + 100) = 290{,}67\,\mathrm{cm^4} ,
\end{aligned}
$$
mentre rispetto a $y_G$, che passa per i baricentri di entrambe le parti, non ci sono termini di trasporto:
$$
I_{y_G} = \frac{2 \cdot 8^3}{12} + \frac{8 \cdot 2^3}{12} = 85{,}33 + 5{,}33 = 90{,}67\,\mathrm{cm^4} .
$$
:::

:::esempio{titolo="Sezione a doppio T come differenza di rettangoli"}
Una sezione a doppio T alta $16\,\mathrm{cm}$, con ali di $8 \times 2\,\mathrm{cm}$ e anima spessa $2\,\mathrm{cm}$, ha due assi di simmetria, quindi $G$ è il centro. Rispetto a $x_G$ la sezione è il rettangolo pieno $8 \times 16\,\mathrm{cm}$ meno i due rettangoli vuoti di $3 \times 12\,\mathrm{cm}$ ai lati dell'anima, che hanno il baricentro sull'asse $x_G$. Perciò
$$
I_{x_G} = \frac{8 \cdot 16^3}{12} - 2 \cdot \frac{3 \cdot 12^3}{12} = 2730{,}67 - 864 = 1866{,}67\,\mathrm{cm^4} .
$$
Rispetto a $y_G$ i rettangoli vuoti non hanno il baricentro sull'asse, perciò conviene sommare le tre parti piene, tutte con il baricentro su $y_G$:
$$
I_{y_G} = 2 \cdot \frac{2 \cdot 8^3}{12} + \frac{12 \cdot 2^3}{12} = 170{,}67 + 8 = 178{,}67\,\mathrm{cm^4} .
$$
:::

:::esempio{titolo="Sezione a L"}
La sezione a L in figura è formata da un rettangolo orizzontale di $10 \times 2\,\mathrm{cm}$, con baricentro $(5, 1)$, e da un rettangolo verticale di $2 \times 10\,\mathrm{cm}$, con baricentro $(1, 7)$; entrambi hanno area $20\,\mathrm{cm^2}$. Allora
$$
x_G = \frac{20 \cdot 5 + 20 \cdot 1}{40} = 3\,\mathrm{cm} ,
\qquad
y_G = \frac{20 \cdot 1 + 20 \cdot 7}{40} = 4\,\mathrm{cm} .
$$
Le distanze dei baricentri delle parti da $G$ sono $(2, -3)\,\mathrm{cm}$ e $(-2, 3)\,\mathrm{cm}$, e ogni rettangolo ha momento centrifugo nullo rispetto ai propri assi baricentrici; quindi
$$
\begin{aligned}
I_{x_G} &= \left( \frac{10 \cdot 2^3}{12} + 20 \cdot 3^2 \right) + \left( \frac{2 \cdot 10^3}{12} + 20 \cdot 3^2 \right) = \frac{1600}{3}\,\mathrm{cm^4} = 533{,}33\,\mathrm{cm^4} , \\[6pt]
I_{y_G} &= \left( \frac{2 \cdot 10^3}{12} + 20 \cdot 2^2 \right) + \left( \frac{10 \cdot 2^3}{12} + 20 \cdot 2^2 \right) = \frac{1000}{3}\,\mathrm{cm^4} = 333{,}33\,\mathrm{cm^4} , \\[6pt]
I_{x_G y_G} &= 20 \cdot 2 \cdot (-3) + 20 \cdot (-2) \cdot 3 = -240\,\mathrm{cm^4} .
\end{aligned}
$$
Il momento centrifugo è negativo perché l'area sta soprattutto nel secondo e nel quarto quadrante degli assi baricentrici.

::struttura{poligoni="0,0 10,0 10,2 2,2 2,12 0,12" punti="3,4,G,baricentro" tratteggi="-1,4 11.5,4;3,-1 3,13.5" frecce="0,0,12.5,0,x;0,0,0,14,y" etichette="12,4.3,x_G;3.4,13.6,y_G" quote="0 0,10 0,10 cm,0.9;0 0,0 12,12 cm,-0.9;10 0,10 2,2 cm,0.8;0 12,2 12,2 cm,-0.8" riferimento=0 titolo="Sezione a L con il baricentro $G = (3, 4)\,\mathrm{cm}$ e gli assi baricentrici $x_G$ e $y_G$"}

:::

## Rotazione degli assi

:::richiamo{titolo="Formule di duplicazione"}
Per ogni angolo $\alpha$ valgono $\cos^2\alpha = \dfrac{1 + \cos 2\alpha}{2}$, $\sin^2\alpha = \dfrac{1 - \cos 2\alpha}{2}$ e $2\sin\alpha\cos\alpha = \sin 2\alpha$. Si rimanda all'argomento sulle funzioni goniometriche del Precorso.
:::

::::teorema{#rotazione-degli-assi titolo="Momenti d'inerzia rispetto ad assi ruotati"}
Siano $\xi$ e $\eta$ gli assi con la stessa origine di $x$ e $y$, ruotati di un angolo $\alpha$ in verso antiorario. Allora
$$
\begin{aligned}
I_\xi &= \frac{I_x + I_y}{2} + \frac{I_x - I_y}{2}\cos 2\alpha - I_{xy}\sin 2\alpha , \\[6pt]
I_\eta &= \frac{I_x + I_y}{2} - \frac{I_x - I_y}{2}\cos 2\alpha + I_{xy}\sin 2\alpha , \\[6pt]
I_{\xi\eta} &= \frac{I_x - I_y}{2}\sin 2\alpha + I_{xy}\cos 2\alpha .
\end{aligned}
$$
Sommando le prime due si trova $I_\xi + I_\eta = I_x + I_y$: la somma dei momenti d'inerzia rispetto a due assi ortogonali non dipende dalla rotazione, perché è il momento polare rispetto all'origine. Le formule danno il momento d'inerzia rispetto a un asse obliquo senza rifare gli integrali. Per un quadrato di lato $a$ con gli assi baricentrici paralleli ai lati $I_x = I_y = \dfrac{a^4}{12}$ e $I_{xy} = 0$, quindi $I_\xi = \dfrac{a^4}{12}$ per ogni $\alpha$.

::struttura{poligoni="-3,-2 2.5,-2.6 4,0.5 2,3.2 -2.2,2.4" punti="0,0,O" frecce="0,0,5.5,0,x;0,0,0,5,y;0,0,4.76,2.75,ξ;0,0,-2.5,4.33,η" linee="1.6,0 1.6,0.08 1.59,0.17 1.58,0.25 1.57,0.33 1.55,0.41 1.52,0.49 1.49,0.57 1.46,0.65 1.43,0.73 1.39,0.8" etichette="1.95,0.45,α" riferimento=0 titolo="Gli assi $\xi$ e $\eta$ sono ruotati di $\alpha$ in verso antiorario rispetto agli assi $x$ e $y$"}

:::dimostrazione
Le coordinate di un elemento rispetto agli assi ruotati sono
$$
\xi = x\cos\alpha + y\sin\alpha ,
\qquad
\eta = -x\sin\alpha + y\cos\alpha .
$$
Il momento d'inerzia rispetto all'asse $\xi$ integra il quadrato della distanza da quell'asse, cioè $\eta^2$:
$$
I_\xi = \int_A (-x\sin\alpha + y\cos\alpha)^2\,dA = I_x\cos^2\alpha + I_y\sin^2\alpha - 2 I_{xy}\sin\alpha\cos\alpha .
$$
Con le formule di duplicazione si ottiene la prima formula. Allo stesso modo $I_\eta = \displaystyle\int_A \xi^2\,dA = I_x\sin^2\alpha + I_y\cos^2\alpha + 2 I_{xy}\sin\alpha\cos\alpha$, e infine
$$
I_{\xi\eta} = \int_A \xi\,\eta\,dA = (I_x - I_y)\sin\alpha\cos\alpha + I_{xy}(\cos^2\alpha - \sin^2\alpha) ,
$$
che con le formule di duplicazione diventa la terza.
:::
::::

## Assi e momenti principali d'inerzia

:::definizione{#assi-principali titolo="Assi principali d'inerzia"}
Due assi ortogonali $\xi$ e $\eta$ si dicono **assi principali d'inerzia** se il momento centrifugo rispetto a essi è nullo, $I_{\xi\eta} = 0$. Gli assi principali passanti per il baricentro si chiamano **assi principali baricentrici**, e i momenti d'inerzia rispetto a essi sono i **momenti principali d'inerzia**, indicati con $I_\xi$ e $I_\eta$, oppure con $I_1 \geq I_2$. Per il teorema sul momento centrifugo e la simmetria, un asse di simmetria della figura e l'asse a esso perpendicolare sono assi principali; nelle sezioni a T, a doppio T e a C gli assi principali baricentrici sono quindi $x_G$ e $y_G$.
:::

::::teorema{#momenti-principali titolo="Direzione degli assi principali e momenti principali"}
Siano noti $I_x$, $I_y$ e $I_{xy}$ rispetto a due assi ortogonali per un punto $O$, con $I_x \neq I_y$. Allora gli assi principali per $O$ sono ruotati rispetto a $x$ e $y$ dell'angolo $\alpha_0$ tale che
$$
\tan 2\alpha_0 = -\frac{2 I_{xy}}{I_x - I_y} ,
$$
e i momenti principali sono
$$
I_{1,2} = \frac{I_x + I_y}{2} \pm \sqrt{\left( \frac{I_x - I_y}{2} \right)^2 + I_{xy}^2} .
$$
Al variare della direzione dell'asse per $O$, $I_1$ è il massimo e $I_2$ il minimo dei momenti d'inerzia. Se $I_x = I_y$ e $I_{xy} \neq 0$ gli assi principali sono le bisettrici, $\alpha_0 = 45^\circ$; se $I_x = I_y$ e $I_{xy} = 0$ ogni coppia di assi ortogonali per $O$ è principale. Per sapere quale dei due assi ha il momento $I_1$ si calcola $I_\xi$ con $\alpha = \alpha_0$ nella formula di rotazione degli assi.

:::dimostrazione
Per le formule di rotazione degli assi la condizione $I_{\xi\eta} = 0$ si scrive $\dfrac{I_x - I_y}{2}\sin 2\alpha + I_{xy}\cos 2\alpha = 0$, che per $I_x \neq I_y$ equivale alla formula di $\tan 2\alpha_0$. Derivando la formula di $I_\xi$ si ottiene
$$
\frac{dI_\xi}{d\alpha} = -(I_x - I_y)\sin 2\alpha - 2 I_{xy}\cos 2\alpha = -2 I_{\xi\eta} ,
$$
quindi $I_\xi$ ha massimo e minimo proprio nelle direzioni in cui $I_{\xi\eta} = 0$. Si pongono $C = \dfrac{I_x + I_y}{2}$ e $D = \dfrac{I_x - I_y}{2}$. Dalle formule di rotazione
$$
(I_\xi - C)^2 + I_{\xi\eta}^2 = (D\cos 2\alpha - I_{xy}\sin 2\alpha)^2 + (D\sin 2\alpha + I_{xy}\cos 2\alpha)^2 = D^2 + I_{xy}^2 ,
$$
perché i doppi prodotti si cancellano. Dove $I_{\xi\eta} = 0$ si ha quindi $I_\xi = C \pm \sqrt{D^2 + I_{xy}^2}$.
:::
::::

:::esempio{titolo="Assi principali della sezione a L"}
Per la sezione a L dell'esempio precedente $I_{x_G} = 533{,}33\,\mathrm{cm^4}$, $I_{y_G} = 333{,}33\,\mathrm{cm^4}$ e $I_{x_G y_G} = -240\,\mathrm{cm^4}$. Allora $C = 433{,}33\,\mathrm{cm^4}$, $D = 100\,\mathrm{cm^4}$ e
$$
\sqrt{D^2 + I_{x_G y_G}^2} = \sqrt{100^2 + 240^2} = 260\,\mathrm{cm^4} ,
\qquad
I_1 = 693{,}33\,\mathrm{cm^4} ,
\qquad
I_2 = 173{,}33\,\mathrm{cm^4} .
$$
La direzione è data da $\tan 2\alpha_0 = \dfrac{480}{200} = \dfrac{12}{5}$, quindi $2\alpha_0 = 67{,}38^\circ$ e $\alpha_0 = 33{,}69^\circ$. Con $\cos 2\alpha_0 = \dfrac{5}{13}$ e $\sin 2\alpha_0 = \dfrac{12}{13}$ la formula di rotazione dà $I_\xi = 433{,}33 + 100 \cdot \dfrac{5}{13} + 240 \cdot \dfrac{12}{13} = 693{,}33\,\mathrm{cm^4}$, perciò l'asse $\xi$ inclinato di $33{,}69^\circ$ è l'asse del momento massimo. La somma $I_1 + I_2 = 866{,}67\,\mathrm{cm^4}$ è uguale a $I_{x_G} + I_{y_G}$.

::struttura{poligoni="0,0 10,0 10,2 2,2 2,12 0,12" punti="3,4,G,baricentro" tratteggi="-1,4 11,4;3,-1 3,13;-1.16,1.23 3,4;5.77,-0.16 3,4" frecce="3,4,8.82,7.88,ξ;3,4,-0.69,9.53,η" linee="5,4 5,4.12 4.99,4.23 4.97,4.35 4.94,4.47 4.91,4.58 4.88,4.69 4.83,4.8 4.78,4.91 4.73,5.01 4.66,5.11" etichette="5.6,4.55,α_0;11.4,4.3,x_G;3.4,13.2,y_G" riferimento=0 titolo="Assi principali baricentrici $\xi$ e $\eta$ della sezione a L, ruotati di $\alpha_0 = 33{,}69^\circ$ rispetto agli assi $x_G$ e $y_G$"}

:::

## Cerchio di Mohr d'inerzia

::::teorema{#cerchio-di-mohr titolo="Cerchio di Mohr d'inerzia"}
In un piano con il momento d'inerzia in ascissa e il momento centrifugo in ordinata, si associ a ogni asse $\xi$ ruotato di $\alpha$ rispetto a $x$ il punto $P(\alpha) = (I_\xi, I_{\xi\eta})$. Allora, al variare di $\alpha$, il punto $P(\alpha)$ descrive la circonferenza di centro $\left( \dfrac{I_x + I_y}{2}, 0 \right)$ e raggio $\sqrt{\left( \dfrac{I_x - I_y}{2} \right)^2 + I_{xy}^2}$, detta **cerchio di Mohr**. Inoltre:

- all'asse $x$ corrisponde il punto $X = (I_x, I_{xy})$, all'asse $y$ il punto $Y = (I_y, -I_{xy})$, diametralmente opposto;
- se gli assi ruotano di $\alpha$ in verso antiorario, il punto ruota sul cerchio di $2\alpha$ in verso antiorario;
- le intersezioni con l'asse delle ascisse sono i momenti principali $I_1$ e $I_2$.

Il cerchio riassume le formule di rotazione in un disegno. Si segnano $X$ e $Y$, il centro è il punto medio di $XY$ e il raggio è la distanza del centro da $X$; i momenti principali si leggono sull'asse delle ascisse, e l'angolo al centro tra $X$ e il punto $(I_1, 0)$ è il doppio dell'angolo di cui ruotare l'asse $x$ per ottenere l'asse del momento massimo. Altri testi riportano in ordinata $-I_{\xi\eta}$; in quel caso il verso di rotazione sul cerchio si inverte.

::struttura{linee="6.93,0 6.92,0.23 6.89,0.45 6.84,0.67 6.78,0.89 6.69,1.1 6.58,1.3 6.46,1.49 6.33,1.67 6.17,1.84 6,1.99 5.82,2.13 5.63,2.25 5.43,2.36 5.22,2.44 5.01,2.51 4.78,2.56 4.56,2.59 4.33,2.6 4.11,2.59 3.88,2.56 3.66,2.51 3.44,2.44 3.23,2.36 3.03,2.25 2.84,2.13 2.66,1.99 2.49,1.84 2.34,1.67 2.2,1.49 2.08,1.3 1.98,1.1 1.89,0.89 1.82,0.67 1.77,0.45 1.74,0.23 1.73,0 1.74,-0.23 1.77,-0.45 1.82,-0.67 1.89,-0.89 1.98,-1.1 2.08,-1.3 2.2,-1.49 2.34,-1.67 2.49,-1.84 2.66,-1.99 2.84,-2.13 3.03,-2.25 3.23,-2.36 3.44,-2.44 3.66,-2.51 3.88,-2.56 4.11,-2.59 4.33,-2.6 4.56,-2.59 4.78,-2.56 5.01,-2.51 5.22,-2.44 5.43,-2.36 5.63,-2.25 5.82,-2.13 6,-1.99 6.17,-1.84 6.33,-1.67 6.46,-1.49 6.58,-1.3 6.69,-1.1 6.78,-0.89 6.84,-0.67 6.89,-0.45 6.92,-0.23 6.93,0;4.64,-0.74 4.71,-0.7 4.78,-0.66 4.84,-0.62 4.9,-0.56 4.95,-0.51 5,-0.44 5.04,-0.38 5.07,-0.31 5.1,-0.23 5.12,-0.16 5.13,-0.08 5.13,0" frecce="0,0,8,0,I;0,-3.2,0,3.3,I_ξη" tratteggi="5.33,-2.4 3.33,2.4;5.33,-2.4 5.33,0;3.33,2.4 3.33,0" punti="5.33,-2.4,X;3.33,2.4,Y;4.33,0,C;6.93,0,I_1;1.73,0,I_2" etichette="5.55,-0.75,2α_0" riferimento=0 titolo="Cerchio di Mohr della sezione a L: $X = (I_{x_G}, I_{x_G y_G})$, $Y = (I_{y_G}, -I_{x_G y_G})$, centro $C$ di ascissa $\dfrac{I_{x_G} + I_{y_G}}{2}$"}

:::dimostrazione
Si pongono $C = \dfrac{I_x + I_y}{2}$ e $D = \dfrac{I_x - I_y}{2}$. Le formule di rotazione degli assi danno
$$
\begin{cases}
I_\xi - C = D\cos 2\alpha - I_{xy}\sin 2\alpha \\[4pt]
I_{\xi\eta} = D\sin 2\alpha + I_{xy}\cos 2\alpha
\end{cases}
$$
cioè il vettore $(I_\xi - C, I_{\xi\eta})$ è il vettore $(D, I_{xy})$ ruotato dell'angolo $2\alpha$ in verso antiorario. Una rotazione conserva la lunghezza, quindi $P(\alpha)$ dista sempre $\sqrt{D^2 + I_{xy}^2}$ dal punto $(C, 0)$. Per $\alpha = 0$ si ottiene $X = (I_x, I_{xy})$; per $\alpha = 90^\circ$ il vettore $(D, I_{xy})$ ruota di $180^\circ$ e si ottiene $Y = (I_y, -I_{xy})$. I punti con ordinata nulla corrispondono agli assi principali, e le loro ascisse sono $C \pm \sqrt{D^2 + I_{xy}^2}$.
:::
::::

## Raggi d'inerzia ed ellisse centrale d'inerzia

:::definizione{#raggi-d-inerzia titolo="Raggi d'inerzia"}
Il **raggio d'inerzia** della figura rispetto a un asse $r$ è la lunghezza
$$
\rho_r = \sqrt{\frac{I_r}{A}} ,
\qquad\text{cioè}\qquad
I_r = A\,\rho_r^2 .
$$
È la distanza dall'asse alla quale si dovrebbe concentrare tutta l'area per avere lo stesso momento d'inerzia. Per gli assi $x$ e $y$ si scrive $\rho_x$ e $\rho_y$, per gli assi principali $\rho_\xi$ e $\rho_\eta$. Per un rettangolo di altezza $h$ si ha $\rho_{x_G} = \sqrt{\dfrac{b h^3}{12\,b h}} = \dfrac{h}{2\sqrt{3}}$, e per $h = 20\,\mathrm{cm}$ si ottiene $\rho_{x_G} = 5{,}77\,\mathrm{cm}$. Il raggio d'inerzia minimo della sezione compare nella snellezza delle aste compresse, nello studio dell'instabilità in Scienza delle costruzioni.
:::

:::osservazione{#ellisse-centrale titolo="Ellisse centrale d'inerzia"}
L'**ellisse centrale d'inerzia** ha il centro nel baricentro $G$ e gli assi lungo gli assi principali baricentrici $\xi$ e $\eta$; il semiasse lungo $\xi$ è $\rho_\eta$ e il semiasse lungo $\eta$ è $\rho_\xi$:
$$
\frac{\xi^2}{\rho_\eta^2} + \frac{\eta^2}{\rho_\xi^2} = 1 .
$$
Per ogni retta $r$ passante per $G$, la distanza da $r$ di ciascuna delle due tangenti all'ellisse parallele a $r$ è il raggio d'inerzia $\rho_r$, e quindi $I_r = A\,\rho_r^2$. L'ellisse riassume così tutti i momenti d'inerzia baricentrici; è allungata nella direzione in cui l'area della sezione è più distribuita. Per il rettangolo di $12 \times 20\,\mathrm{cm}$ i semiassi sono $\rho_{y_G} = 3{,}46\,\mathrm{cm}$ lungo il lato corto e $\rho_{x_G} = 5{,}77\,\mathrm{cm}$ lungo il lato lungo.

::struttura{poligoni="-6,-10 6,-10 6,10 -6,10" tratteggi="3.46,0 3.45,0.5 3.41,1 3.35,1.49 3.26,1.97 3.14,2.44 3,2.89 2.84,3.31 2.65,3.71 2.45,4.08 2.23,4.42 1.99,4.73 1.73,5 1.46,5.23 1.18,5.43 0.9,5.58 0.6,5.69 0.3,5.75 0,5.77 -0.3,5.75 -0.6,5.69 -0.9,5.58 -1.18,5.43 -1.46,5.23 -1.73,5 -1.99,4.73 -2.23,4.42 -2.45,4.08 -2.65,3.71 -2.84,3.31 -3,2.89 -3.14,2.44 -3.26,1.97 -3.35,1.49 -3.41,1 -3.45,0.5 -3.46,0 -3.45,-0.5 -3.41,-1 -3.35,-1.49 -3.26,-1.97 -3.14,-2.44 -3,-2.89 -2.84,-3.31 -2.65,-3.71 -2.45,-4.08 -2.23,-4.42 -1.99,-4.73 -1.73,-5 -1.46,-5.23 -1.18,-5.43 -0.9,-5.58 -0.6,-5.69 -0.3,-5.75 0,-5.77 0.3,-5.75 0.6,-5.69 0.9,-5.58 1.18,-5.43 1.46,-5.23 1.73,-5 1.99,-4.73 2.23,-4.42 2.45,-4.08 2.65,-3.71 2.84,-3.31 3,-2.89 3.14,-2.44 3.26,-1.97 3.35,-1.49 3.41,-1 3.45,-0.5 3.46,0" frecce="-6.7,0,8.5,0,x_G;0,-10.5,0,12.5,y_G" punti="0,0,G,baricentro" quote="0 0,3.46 0,ρ_y,7;0 0,0 5.77,ρ_x,-4.5;-6 -10,6 -10,12 cm,0.9;-6 -10,-6 10,20 cm,-1.2" riferimento=0 titolo="Ellisse centrale d'inerzia del rettangolo di $12 \times 20\,\mathrm{cm}$: semiassi $\rho_{y_G}$ lungo $x_G$ e $\rho_{x_G}$ lungo $y_G$"}

:::
