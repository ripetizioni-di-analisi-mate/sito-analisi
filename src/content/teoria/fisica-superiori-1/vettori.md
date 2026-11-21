---
titolo: "Vettori"
sommario: "Componenti, somme, differenze, moduli e forze equilibranti, con costruzioni geometriche e controlli dei segni."
---

Due spostamenti di $4$ metri, uno verso est e uno verso ovest, hanno la stessa lunghezza e portano in punti diversi. In questo capitolo si descrivono le grandezze di questo tipo con una freccia oppure con una coppia di numeri, e con quei numeri si calcolano somme, differenze e lunghezze.

## Modulo, direzione e verso

:::definizione{#definizione titolo="Rappresentare una grandezza orientata"}
Una **grandezza** è una proprietà che si misura, come una lunghezza o un tempo. Il risultato della misura è un numero seguito da un'unità di misura. In $4\,\mathrm m$ il numero è $4$ e l'unità è il metro, che ha simbolo $\mathrm m$. Lo **spostamento** di un oggetto è il suo cambiamento di posizione, dal punto di partenza al punto di arrivo.

Un **vettore** è una grandezza descritta da tre informazioni, che sono il modulo, la direzione e il verso. Si disegna come una freccia: il punto da cui la freccia parte si chiama *coda*, l'estremo con la punta disegnata si chiama *punta*. Un vettore si indica con una lettera sormontata da una freccia, per esempio $\vec u$, che si legge «vettore u».

- Il **modulo** è la lunghezza della freccia. È un numero positivo o nullo, seguito dall'unità di misura.
- La **direzione** è l'orientamento della retta su cui giace la freccia, per esempio orizzontale oppure verticale.
- Il **verso** è uno dei due modi di percorrere quella retta, per esempio verso destra oppure verso sinistra.

Uno spostamento di $4\,\mathrm m$ verso est e uno di $4\,\mathrm m$ verso ovest hanno lo stesso modulo, cioè $4\,\mathrm m$, e la stessa direzione, perché entrambi giacciono sulla retta est-ovest. Hanno versi opposti.

Una grandezza **scalare** è una grandezza descritta per intero da un numero e dalla sua unità. La distanza percorsa è scalare. Nei due spostamenti precedenti essa vale $4\,\mathrm m$ in entrambi i casi, e questo dato non contiene alcuna informazione sul verso.
:::

:::osservazione{#traslazione titolo="Spostare una freccia parallelamente"}
Uno spostamento dipende soltanto dalla differenza fra la posizione finale e quella iniziale. Sul foglio conta anche la scala del disegno, cioè quanti metri rappresenta ogni quadretto.

Due rette sono *parallele* quando hanno la stessa direzione. Due frecce parallele sono *concordi* se hanno lo stesso verso e *discordi* se hanno versi opposti. Due frecce parallele, concordi e della stessa lunghezza rappresentano lo stesso vettore, anche se sono disegnate in punti diversi del foglio. Nella figura le due frecce con il nome $u$ partono da $(0;0)$ e da $(3;2)$, sono entrambe orizzontali, puntano a destra e sono lunghe $4\,\mathrm m$, quindi sono lo stesso vettore. La terza freccia ha la stessa lunghezza e punta a sinistra, quindi è il vettore opposto $-\vec u$. Grazie a questa proprietà, in una costruzione geometrica una freccia viene ridisegnata nel punto in cui serve.

Una **forza** è una spinta o una trazione esercitata su un oggetto. La sua unità di misura è il newton, che ha simbolo $\mathrm N$. Il *punto di applicazione* di una forza è il punto dell'oggetto in cui essa agisce. Nei problemi in cui il punto di applicazione conta, esso è un dato in più, che si conserva accanto alla freccia.

Il **vettore nullo** ha modulo zero. Scritto con le componenti cartesiane, che sono i due numeri con segno con cui si descrive una freccia, ha entrambe le componenti uguali a zero. La sua freccia si riduce a un punto, quindi il vettore nullo è privo di direzione e di verso.
:::

::grafico{uguale=1 xmin=-1 xmax=8 ymin=-1 ymax=5 vettori="0,0,4,0,u;3,2,7,2,u;4,4,0,4,−u" punti="0,0,pieno;3,2,pieno;4,4,pieno" nomi="x (m),y (m)" titolo="Due frecce uguali traslate e una freccia di verso opposto"}

:::esempio{titolo="Percorso chiuso e spostamento nullo"}
Su una mappa, una persona va da $A$ a $B$ camminando per $6\,\mathrm m$ verso est. Poi raggiunge $C$ camminando per $8\,\mathrm m$ verso nord. La distanza percorsa fino a $C$ è $6+8=14\,\mathrm m$.

Lo spostamento da $A$ a $C$ è la freccia che unisce direttamente i due punti. Le direzioni est e nord formano un angolo retto, cioè un angolo di $90^\circ$, quindi $A$, $B$ e $C$ sono i vertici di un triangolo rettangolo. I due lati che formano l'angolo retto si chiamano *cateti* e misurano $6\,\mathrm m$ e $8\,\mathrm m$. Il lato opposto all'angolo retto si chiama *ipotenusa* ed è il segmento $AC$. Per il teorema di Pitagora il quadrato dell'ipotenusa è la somma dei quadrati dei cateti:
$$
\begin{aligned}
AC^2&=6^2+8^2=36+64=100\,\mathrm{m^2},\\[6pt]
AC&=\sqrt{100}\,\mathrm m=10\,\mathrm m.
\end{aligned}
$$
La radice quadrata di $100$ è il numero positivo che ha quadrato $100$, cioè $10$. Il vettore da $A$ a $C$ ha quindi modulo $10\,\mathrm m$, mentre la distanza percorsa è $14\,\mathrm m$.

La persona torna poi direttamente da $C$ ad $A$ lungo la diagonale, che è lunga $10\,\mathrm m$. In tutto ha camminato per $14+10=24\,\mathrm m$. Il punto finale coincide con quello iniziale, quindi lo spostamento complessivo è il vettore nullo e ha modulo zero.

Nella figura l'asse orizzontale punta a est e quello verticale punta a nord. Il segmento $AB$ rappresenta $6\,\mathrm m$, quindi la sua lunghezza sul foglio fissa la scala: se $AB$ occupa $6$ quadretti, ogni quadretto vale $1\,\mathrm m$. Il modulo di una freccia si misura con il righello soltanto se un'unità ha la stessa lunghezza sul foglio lungo entrambi gli assi. Se le due scale sono diverse, per esempio un quadretto vale $1\,\mathrm m$ in orizzontale e $2\,\mathrm m$ in verticale, le coordinate dei punti restano corrette. In quel caso la lunghezza della freccia disegnata non si trasforma in metri moltiplicandola per un solo numero.
:::

::grafico{uguale=1 xmin=-1.4 xmax=8.2 ymin=-1.2 ymax=9.4 nomi="est (m),nord (m)" vettori="0,0,6,0,AB;6,0,6,8,BC;6,8,0,0" punti="0,0,pieno;6,0,pieno,B;6,8,pieno,C" etichette="0.38,-0.45,A;3.42,3.76,CA" titolo="Il cammino chiuso ha tre lati di 6 m, 8 m e 10 m. Punto iniziale e finale coincidono."}

## Componenti cartesiane

:::definizione{#componenti titolo="Proiezioni con segno"}
Gli **assi cartesiani** sono due rette numerate che si incontrano formando un angolo retto. L'asse orizzontale si chiama asse $x$, quello verticale asse $y$, e il punto in cui si incontrano è l'*origine*. Ogni punto del piano è individuato da due numeri, le sue *coordinate*: la prima, detta *ascissa*, si legge sull'asse $x$; la seconda, detta *ordinata*, si legge sull'asse $y$. Il punto $(3;-2)$ ha ascissa $3$ e ordinata $-2$.

Le **componenti** di un vettore $\vec u$ sono due numeri con segno. La componente $u_x$, che si legge «u con x», è lo spostamento lungo l'asse orizzontale. La componente $u_y$ è lo spostamento lungo l'asse verticale. Il vettore si scrive $\vec u=(u_x;u_y)$, seguito dall'unità di misura.

Se l'asse $x$ è positivo verso destra e l'asse $y$ è positivo verso l'alto, il vettore $(3;-2)\,\mathrm m$ va di tre metri a destra e di due metri in basso. Nella figura la sua coda è nell'origine e la sua punta è il punto $B=(3;-2)$. Dal punto $B$ partono due segmenti che arrivano sugli assi formando con essi un angolo retto. Questa operazione si chiama *proiezione*. Il segmento verticale incontra l'asse $x$ nel valore $3$, che è $u_x$. Il segmento orizzontale incontra l'asse $y$ nel valore $-2$, che è $u_y$.

Se una componente vale zero e l'altra è diversa da zero, il vettore è parallelo all'asse dell'altra componente. Per esempio $(3;0)\,\mathrm m$ è orizzontale.

Il segno di una componente dipende dal verso scelto per l'asse. Se l'asse verticale fosse positivo verso il basso, lo stesso vettore si scriverebbe $(3;2)\,\mathrm m$. Lo spostamento fisico rimane lo stesso, cioè tre metri a destra e due metri in basso.
:::

::grafico{uguale=1 xmin=-1 xmax=5 ymin=-3.6 ymax=2 vettori="0,0,3,-2,u" segmenti="3,0,3,-2;0,-2,3,-2" punti="3,-2,pieno,B" etichette="2.95,0.35,3;-0.55,-1.9,−2" nomi="x (m),y (m)" titolo="Le componenti di u si leggono da B proiettando sugli assi"}

:::esempio{#punti-estremi titolo="Da due punti a uno spostamento"}
Il simbolo $\overrightarrow{AB}$ si legge «vettore AB» e indica la freccia che ha la coda in $A$ e la punta in $B$. Le sue componenti si ottengono sottraendo le coordinate del punto iniziale da quelle del punto finale.

Siano $A=(2;1)\,\mathrm m$ e $B=(5;3)\,\mathrm m$. Passando da $A$ a $B$ l'ascissa aumenta di $5-2=3\,\mathrm m$ e l'ordinata aumenta di $3-1=2\,\mathrm m$. Perciò $\overrightarrow{AB}=(3;2)\,\mathrm m$.

La coppia $(5;3)\,\mathrm m$ è una *posizione*, perché dice dove si trova il punto di arrivo. La coppia $(3;2)\,\mathrm m$ è una *variazione di posizione*, perché dice di quanto ci si è spostati.

Nel percorso inverso, da $B$ ad $A$, il punto iniziale e quello finale si scambiano, quindi entrambe le componenti cambiano segno: $\overrightarrow{BA}=(2-5;1-3)\,\mathrm m=(-3;-2)\,\mathrm m$.
:::

::grafico{uguale=1 xmin=0 xmax=6 ymin=0 ymax=4 vettori="2,1,5,3" punti="2,1,pieno;5,3,pieno,B" etichette="1.70,1.29,A;3.50,2.28,AB" segmenti="2,1,5,1;5,1,5,3" nomi="x (m),y (m)" titolo="La variazione da A a B è di 3 m in orizzontale e 2 m in verticale"}

:::esempio{titolo="Un asse verticale orientato verso il basso"}
In una palestra, un bersaglio passa dalla posizione $A=(2;5)\,\mathrm m$ alla posizione $B=(7;3)\,\mathrm m$. La seconda coordinata è la *quota*, cioè l'altezza dal pavimento, misurata verso l'alto. Sottraendo le coordinate iniziali da quelle finali si trova
$$
\overrightarrow{AB}=(7-2;3-5)\,\mathrm m=(5;-2)\,\mathrm m.
$$
Entrambe le quote sono positive. La componente verticale dello spostamento è negativa perché la quota finale, $3\,\mathrm m$, è minore di quella iniziale, $5\,\mathrm m$.

Una telecamera usa le stesse coordinate orizzontali e misura la coordinata verticale verso il basso, a partire da uno zero posto alla quota di $6\,\mathrm m$. La lettura della telecamera è quindi $6$ meno la quota. Per $A$ essa vale $6-5=1\,\mathrm m$ e per $B$ vale $6-3=3\,\mathrm m$. La componente verticale secondo la telecamera è $3-1=+2\,\mathrm m$.

Nella differenza lo zero della scala si elimina, perché $(6-3)-(6-5)=5-3=2$. Il segno è invece opposto a quello di prima, perché una diminuzione della quota misurata verso l'alto è un aumento della coordinata misurata verso il basso. Il modulo è lo stesso nelle due descrizioni e vale $\sqrt{5^2+2^2}\,\mathrm m=\sqrt{29}\,\mathrm m$, cioè circa $5{,}4\,\mathrm m$. Scambiando il punto iniziale con quello finale, entrambe le componenti cambiano segno anche per la telecamera. Il segno di una componente ha quindi significato soltanto insieme al verso dell'asse su cui è misurata.
:::

:::esempio{titolo="Dalle letture dei punti agli incrementi"}
Un carrello passa per i punti $A$, $B$ e $C$, in questo ordine. La tabella riporta le posizioni lette su due righelli, in centimetri (simbolo $\mathrm{cm}$). L'*incremento* di una coordinata è la sua variazione, cioè il valore finale meno il valore iniziale.

| Punto | x (cm) | y (cm) |
| --- | ---: | ---: |
| A | 6 | 4 |
| B | 4 | 9 |
| C | 8 | 5 |

La componente verticale del tratto da A a B si ottiene dalla sola colonna delle ordinate e vale $9-4=5\,\mathrm{cm}$. Per la distanza fra A e B serve anche la colonna delle ascisse.

Da A a B il vettore è $(4-6;9-4)=(-2;5)\,\mathrm{cm}$ e da B a C è $(8-4;5-9)=(4;-4)\,\mathrm{cm}$. La componente orizzontale cambia segno, perché l'ascissa prima diminuisce da $6$ a $4$ e poi aumenta da $4$ a $8$.

La variazione complessiva da A a C si ottiene sottraendo la prima riga dall'ultima, senza usare la lettura intermedia, e vale $(8-6;5-4)=(2;1)\,\mathrm{cm}$. La somma dei due spostamenti dà la stessa coppia, perché $(-2+4;5-4)=(2;1)\,\mathrm{cm}$. Il ritorno da $C$ ad $A$ ha entrambi i segni cambiati, quindi è $(-2;-1)\,\mathrm{cm}$.
:::

## Somme, differenze e prodotti per numeri

::::teorema{#operazioni titolo="Operazioni componente per componente"}
Si considerino gli spostamenti $\vec u=(3;1)\,\mathrm m$ e $\vec v=(-1;3)\,\mathrm m$, eseguiti uno dopo l'altro partendo dall'origine. In orizzontale ci si sposta di $3\,\mathrm m$ a destra e poi di $1\,\mathrm m$ a sinistra, quindi in tutto di $3+(-1)=2\,\mathrm m$. In verticale ci si sposta di $1+3=4\,\mathrm m$. Il punto di arrivo è $(2;4)$. Il vettore che va dalla partenza all'arrivo è la **somma** dei due vettori e si chiama anche **risultante**. Nella figura è la freccia $R$.

La regola vale per ogni coppia di vettori $\vec u=(u_x;u_y)$ e $\vec v=(v_x;v_y)$ espressi nella stessa unità di misura. La somma e la differenza si calcolano una componente alla volta:
$$
\vec u+\vec v=(u_x+v_x;u_y+v_y),\qquad
\vec u-\vec v=(u_x-v_x;u_y-v_y).
$$

:::dimostrazione
Si disegna prima $\vec u$. Poi si disegna $\vec v$ con la coda sulla punta di $\vec u$. Questa costruzione si chiama **regola punta-coda**. Lo spostamento orizzontale complessivo è quello della prima freccia seguito da quello della seconda, quindi vale $u_x+v_x$. Lungo l'asse verticale vale lo stesso ragionamento, quindi lo spostamento complessivo è $u_y+v_y$.

Il vettore *opposto* di $\vec v$ si indica con $-\vec v$ e ha lo stesso modulo, la stessa direzione e il verso contrario. Le sue componenti sono $(-v_x;-v_y)$. Sottrarre $\vec v$ significa sommare $-\vec v$. Poiché l'opposto ha entrambe le componenti con il segno cambiato, le somme diventano differenze e si ottiene $(u_x-v_x;u_y-v_y)$.
:::
::::

::grafico{uguale=1 xmin=-1 xmax=5 ymin=-1 ymax=5 vettori="0,0,3,1,u;3,1,2,4,v;0,0,2,4,R" punti="3,1,pieno;2,4,pieno" nomi="x (m),y (m)" titolo="La somma di (3; 1) e (−1; 3) parte dall'origine e arriva a (2; 4)"}

:::esempio{#differenza-punte titolo="La differenza con la stessa coda"}
Si disegnano $\vec u=(3;2)\,\mathrm m$ e $\vec v=(1;4)\,\mathrm m$ con la stessa coda, posta nell'origine. La punta di $\vec u$ è allora il punto $(3;2)$ e la punta di $\vec v$ è il punto $(1;4)$. Lo spostamento che porta dalla punta di $\vec v$ alla punta di $\vec u$ si calcola come finale meno iniziale:
$$
(3-1;2-4)\,\mathrm m=(2;-2)\,\mathrm m.
$$
Le stesse sottrazioni definiscono $\vec u-\vec v$, quindi questa freccia è la differenza $\vec u-\vec v$.

Il verso si controlla sommando la differenza a $\vec v$. Si ottiene $(1+2;4-2)\,\mathrm m=(3;2)\,\mathrm m$, che è $\vec u$, quindi la freccia $\vec u-\vec v$ arriva sulla punta di $\vec u$.
:::

::grafico{uguale=1 xmin=-1 xmax=5 ymin=-1 ymax=5 vettori="0,0,3,2,u;0,0,1,4,v;1,4,3,2,u−v" punti="3,2,pieno;1,4,pieno" nomi="x (m),y (m)" titolo="Con la coda comune, la differenza u − v va dalla punta di v alla punta di u"}

:::osservazione{#scalare titolo="Moltiplicare per uno scalare"}
In questo contesto uno *scalare* è un semplice numero, indicato con $k$. Moltiplicare un vettore per $k$ significa moltiplicare per $k$ entrambe le componenti:
$$
k\vec u=(ku_x;ku_y).
$$
Per $\vec u=(3;-1)\,\mathrm m$ e $k=-2$ si ottiene $-2\vec u=(-2\cdot3;-2\cdot(-1))\,\mathrm m=(-6;2)\,\mathrm m$.

Il *valore assoluto* di un numero è il numero privato del segno e si scrive fra due barre verticali: $\lvert-2\rvert=2$ e $\lvert2\rvert=2$. Il modulo di $k\vec u$ è il modulo di $\vec u$ moltiplicato per $\lvert k\rvert$.

- Se $k>0$, il vettore $k\vec u$ ha lo stesso verso di $\vec u$.
- Se $k<0$, il vettore $k\vec u$ ha verso opposto a quello di $\vec u$.
- Se $k=0$, si ottiene il vettore nullo.

Per $k\neq0$ il vettore $k\vec u$ è parallelo a $\vec u$. Per esempio $(4;6)=2\cdot(2;3)$ è parallelo a $(2;3)$. Il vettore $(3;2)$ invece non è parallelo a $(2;3)$, perché il fattore che porta $2$ in $3$ è $\dfrac32$ e quello che porta $3$ in $2$ è $\dfrac23$.

Nell'esempio $k=-2$ è negativo e $\lvert-2\rvert=2$. Il prodotto $-2\vec u$ ha quindi entrambe le componenti di segno cambiato, verso opposto e modulo doppio, come mostra la figura.

Lo scalare $k$ è *adimensionale*, cioè è un numero senza unità di misura. Per questo le componenti di $k\vec u$ conservano l'unità di $\vec u$.
:::

::grafico{uguale=1 xmin=-7 xmax=4 ymin=-2.5 ymax=3.5 vettori="0,0,3,-1,u;0,0,-6,2,−2u" punti="3,-1,pieno;-6,2,pieno" nomi="x (m),y (m)" titolo="Il fattore −2 inverte il verso e raddoppia la lunghezza della freccia"}

:::esempio{titolo="Disegnare entrambe le somme e una differenza"}
Si prendono $\vec u=(4;1)\,\mathrm m$ e $\vec v=(-1;2)\,\mathrm m$. Con la costruzione punta-coda, applicando prima $\vec u$ e poi $\vec v$ si passa dal punto $(4;1)$ e si arriva in
$$
(4-1;1+2)\,\mathrm m=(3;3)\,\mathrm m.
$$
Applicando prima $\vec v$ e poi $\vec u$ si passa dal punto $(-1;2)$ e si arriva in $(-1+4;2+1)\,\mathrm m=(3;3)\,\mathrm m$. I punti intermedi dipendono dall'ordine, il punto di arrivo è lo stesso.

Le quattro frecce delle due costruzioni formano un *parallelogramma*, cioè un quadrilatero con i lati opposti paralleli. La sua diagonale, dalla partenza comune al punto $(3;3)$, è la somma $\vec u+\vec v$.

Lo spostamento che porta dalla punta di $\vec v$ alla punta di $\vec u$ è invece la differenza:
$$
\vec u-\vec v=(4-(-1);1-2)\,\mathrm m=(5;-1)\,\mathrm m.
$$
La diagonale della somma parte invece dalla coda comune, quindi è una freccia diversa dalla differenza.

Il controllo della differenza è $\vec v+(\vec u-\vec v)=\vec u$. L'ascissa risulta $-1+5=4$ e l'ordinata risulta $2-1=1$, che sono le componenti di $\vec u$.

Se un vettore è dato in centimetri e l'altro in metri, la stessa costruzione si esegue dopo aver espresso entrambi nella stessa unità.
:::

::grafico{uguale=1 xmin=-2.2 xmax=5.4 ymin=-1 ymax=5.4 vettori="0,0,4,1,u;0,0,-1,2,v;4,1,3,3,v;-1,2,3,3,u;0,0,3,3" punti="4,1,pieno;-1,2,pieno;3,3,pieno" etichette="1.51,1.20,u+v" nomi="x (m),y (m)" titolo="I cammini hanno punti intermedi diversi e la stessa risultante (3; 3)."}

:::esempio{titolo="Compensare un contributo nella stessa unità"}
Uno spostamento $\vec u=(0{,}60;-0{,}20)\,\mathrm m$ è seguito da $\vec v=(-20;10)\,\mathrm{cm}$. Le due coppie hanno unità diverse, quindi prima della somma si converte la seconda in metri. Un metro contiene $100$ centimetri, perciò si divide per $100$:
$$
-20\,\mathrm{cm}=-\frac{20}{100}\,\mathrm m=-0{,}20\,\mathrm m,\qquad
10\,\mathrm{cm}=\frac{10}{100}\,\mathrm m=0{,}10\,\mathrm m.
$$
Con $\vec v=(-0{,}20;0{,}10)\,\mathrm m$ la somma è
$$
\vec u+\vec v=(0{,}60-0{,}20;-0{,}20+0{,}10)\,\mathrm m=(0{,}40;-0{,}10)\,\mathrm m.
$$
Queste sono le coordinate del punto finale rispetto alla coda iniziale. La componente orizzontale resta positiva perché i $20\,\mathrm{cm}$ verso sinistra annullano soltanto una parte dei $60\,\mathrm{cm}$ percorsi verso destra.

Una terza freccia che riporta all'altezza iniziale lasciando invariata l'ascissa raggiunta ha componenti $(0;0{,}10)\,\mathrm m$, perché $-0{,}10+0{,}10=0$. Una terza freccia che riporta esattamente al punto di partenza ha componenti $(-0{,}40;0{,}10)\,\mathrm m$, perché deve annullare anche gli $0{,}40\,\mathrm m$ orizzontali. Le due richieste sono diverse, quindi le due frecce sono diverse, pur avendo la stessa componente verticale.
:::

## Moduli e Pitagora

::::teorema{#modulo titolo="Componenti perpendicolari"}
Due rette sono *perpendicolari* quando si incontrano formando un angolo retto, come gli assi cartesiani. Il modulo di $\vec u$ si indica con $\lVert\vec u\rVert$, che si legge «modulo di u». Negli esercizi si trova scritto anche $\lvert\vec u\rvert$ oppure con la sola lettera, per esempio $R$ per il modulo di $\vec R$.

Nella figura la forza $\vec u=(6;8)\,\mathrm N$ ha la coda nell'origine e la punta in $P=(6;8)$. Con le sue due proiezioni la freccia forma un triangolo rettangolo di cui è l'ipotenusa, con cateti di $6\,\mathrm N$ e $8\,\mathrm N$. Per il teorema di Pitagora
$$
\lVert\vec u\rVert=\sqrt{6^2+8^2}\,\mathrm N=\sqrt{36+64}\,\mathrm N=\sqrt{100}\,\mathrm N=10\,\mathrm N.
$$

Per ogni vettore $\vec u=(u_x;u_y)$ riferito ad assi perpendicolari, il modulo vale
$$
\lVert\vec u\rVert=\sqrt{u_x^2+u_y^2}.
$$

:::dimostrazione
Si disegna $\vec u$ con la coda nell'origine. La freccia, la sua proiezione sull'asse $x$ e il segmento verticale che scende dalla punta formano un triangolo rettangolo, perché gli assi sono perpendicolari. I cateti sono lunghi $\lvert u_x\rvert$ e $\lvert u_y\rvert$. Si usa il valore assoluto perché una lunghezza è positiva anche quando la componente è negativa. La freccia è l'ipotenusa.

Per il teorema di Pitagora, il quadrato dell'ipotenusa è la somma dei quadrati dei cateti, quindi $\lVert\vec u\rVert^2=u_x^2+u_y^2$. Il quadrato di un numero e quello del suo valore assoluto coincidono, perciò nella formula compaiono direttamente le componenti. Fra i due numeri che hanno quel quadrato si prende la radice positiva o nulla, perché il modulo è una lunghezza.

Se una delle due componenti è zero, il triangolo si riduce a un segmento. La formula dà allora il valore assoluto dell'altra componente: per $(0;-3)$ si ottiene $\sqrt{0+9}=3$.
:::
::::

::grafico{uguale=1 xmin=-1 xmax=9 ymin=-2 ymax=10 nomi="uₓ (N),uᵧ (N)" vettori="0,0,6,8" etichette="3.17,3.75,u" segmenti="6,0,6,8;0,8,6,8" punti="6,8,pieno,P" titolo="Cateti di 6 N e 8 N danno un modulo di 10 N"}

:::esempio{#componente-mancante titolo="Dalla lunghezza a una componente"}
Un vettore ha modulo $5\,\mathrm m$ e componente orizzontale $3\,\mathrm m$. Dalla relazione $5^2=3^2+u_y^2$ si ricava il quadrato della componente verticale, sottraendo $3^2$ da entrambe le parti dell'uguaglianza:
$$
u_y^2=5^2-3^2=25-9=16\,\mathrm{m^2}.
$$
La radice quadrata di $16$ è $4$, quindi la componente verticale, presa senza segno, vale $4\,\mathrm m$. Questo valore senza segno è la sua **ampiezza**.

Sia $+4$ sia $-4$ hanno quadrato $16$, quindi i dati sono soddisfatti da $u_y=+4\,\mathrm m$ e da $u_y=-4\,\mathrm m$. Se il testo dell'esercizio dice che la freccia va verso il basso, con l'asse $y$ positivo verso l'alto vale $u_y=-4\,\mathrm m$.

Una componente di ampiezza $6\,\mathrm m$ è impossibile per un vettore di modulo $5\,\mathrm m$, perché $6^2=36$ supera $5^2=25$ e il quadrato dell'altra componente risulterebbe negativo.
:::

:::esempio{titolo="Due frecce possibili e una misura che le distingue"}
Un rilevatore indica per $\vec u$ la componente $u_x=-5\,\mathrm m$ e il modulo $13\,\mathrm m$. Dal teorema di Pitagora si ricava
$$
u_y^2=13^2-5^2=169-25=144\,\mathrm{m^2},
$$
e la radice quadrata di $144$ è $12$. Le punte $(-5;12)$ e $(-5;-12)$ soddisfano entrambe i dati.

Nella figura la *circonferenza* di centro l'origine e raggio $13$ contiene tutti i punti che distano $13$ dall'origine, cioè tutte le punte possibili di una freccia di modulo $13\,\mathrm m$. La retta verticale contiene tutti i punti di ascissa $-5$. Le due punte trovate sono i punti in cui la retta incontra la circonferenza.

Se una seconda fotografia mostra che la punta è più in alto della coda, allora $u_y=+12\,\mathrm m$. Questa informazione sceglie uno dei due punti e lascia invariato il modulo misurato.

Con un modulo di $5\,\mathrm m$ e la stessa componente orizzontale si avrebbe $u_y^2=25-25=0$. Le due possibilità coinciderebbero nel punto $(-5;0)$ e la freccia sarebbe orizzontale. Con un modulo minore di $5\,\mathrm m$ nessun punto soddisferebbe i dati, perché il valore assoluto di una componente è sempre minore o uguale al modulo. Questo confronto fra componente e modulo si esegue prima di calcolare la radice.
:::

::grafico{uguale=1 xmin=-15 xmax=15 ymin=-15 ymax=15 nomi="x (m),y (m)" curve="13*cos(t),13*sin(t),0,6.283185307" vettori="0,0,-5,12,u₁;0,0,-5,-12,u₂" segmenti="-5,-13,-5,13" punti="-5,12,pieno;-5,-12,pieno" titolo="Entrambe le frecce hanno componente orizzontale −5 m e modulo 13 m."}

## Vettori sulla stessa retta

:::teorema{#collineari titolo="Somme algebriche e limiti della risultante"}
Due vettori sono **collineari** quando giacciono sulla stessa retta oppure su rette parallele, cioè quando hanno la stessa direzione. Per sommarli basta un numero con segno per ciascuno. Si sceglie un verso positivo sulla retta, si scrive con il segno $+$ la componente dei vettori che hanno quel verso e con il segno $-$ quella dei vettori di verso opposto. La componente della risultante è la somma di questi numeri.

Uno spostamento di $8\,\mathrm m$ verso destra è seguito da uno di $3\,\mathrm m$ verso sinistra. Scelta la destra come verso positivo, le componenti sono $+8\,\mathrm m$ e $-3\,\mathrm m$. La somma ha componente $8-3=5\,\mathrm m$. Il risultato è positivo, quindi la risultante è diretta verso destra e ha modulo $5\,\mathrm m$.

La lunghezza totale del cammino è $8+3=11\,\mathrm m$, perché si percorrono entrambi i tratti, compreso quello in verso opposto.
:::

:::osservazione{#limiti-modulo titolo="Il minimo e il massimo a moduli fissati"}
Due forze hanno moduli $7\,\mathrm N$ e $4\,\mathrm N$ e direzioni qualsiasi. Se sono allineate e concordi, la risultante ha modulo $7+4=11\,\mathrm N$. Se sono allineate e discordi, la risultante ha modulo $7-4=3\,\mathrm N$. In tutte le altre posizioni il modulo della risultante è compreso fra $3\,\mathrm N$ e $11\,\mathrm N$.

Per due frecce di moduli $a$ e $b$, il modulo della risultante è compreso fra $\lvert a-b\rvert$ e $a+b$. Il valore assoluto serve perché la differenza $a-b$ è negativa quando $b$ supera $a$.

Il motivo si legge nella costruzione punta-coda, in cui le due frecce e la risultante sono i tre lati di un triangolo. In un triangolo ogni lato è lungo al massimo quanto la somma degli altri due, perché il segmento è il cammino più breve fra due punti.

- La risultante è il lato che unisce direttamente partenza e arrivo, quindi è lunga al massimo $a+b$. Questo è il limite superiore.
- La freccia di modulo $a$ è a sua volta lunga al massimo quanto la risultante più l'altra freccia, quindi la risultante è lunga almeno $a-b$. Lo stesso ragionamento sulla freccia di modulo $b$ dà almeno $b-a$. Questo è il limite inferiore.
:::

:::esempio{titolo="Verificare due misure candidate senza conoscere l'angolo"}
Due forze applicate allo stesso punto hanno moduli $10\,\mathrm N$ e $6\,\mathrm N$. Se sono concordi, la risultante ha modulo $10+6=16\,\mathrm N$. Se sono opposte, il modulo è $10-6=4\,\mathrm N$. Qualunque sia l'angolo fra le due forze, il modulo della risultante è quindi compreso fra $4\,\mathrm N$ e $16\,\mathrm N$.

Una misura di $17\,\mathrm N$ è impossibile con questi dati, perché supera la somma dei moduli. Anche una misura di $3\,\mathrm N$ è impossibile, perché è minore di $4\,\mathrm N$. Una freccia di modulo $6$ rivolta in verso opposto a una di modulo $10$ ne annulla al massimo $6$, e ne restano $4$.

Se le forze sono perpendicolari, il modulo si calcola con il teorema di Pitagora:
$$
\sqrt{10^2+6^2}\,\mathrm N=\sqrt{136}\,\mathrm N=\sqrt{4\cdot34}\,\mathrm N=2\sqrt{34}\,\mathrm N,
$$
cioè circa $11{,}7\,\mathrm N$. Vale anche il contrario: se una misura dà $R^2=10^2+6^2$, le due forze sono perpendicolari. È l'inverso del teorema di Pitagora, per cui un triangolo con $c^2=a^2+b^2$ ha un angolo retto fra i lati $a$ e $b$.

Gli assi dividono il piano in quattro regioni, dette *quadranti*. Il primo contiene i punti con entrambe le coordinate positive e gli altri si contano in senso antiorario. Per stabilire in quale quadrante punta la risultante servono le direzioni e i versi delle due forze. Il solo modulo non indica quale delle due componenti è maggiore. Per i vettori su una stessa retta, invece, il segno assegnato a ciascuna freccia contiene tutta l'informazione sul verso.
:::

## Il vettore equilibrante

:::definizione{#equilibrante titolo="Annullare una risultante"}
Un punto è in *equilibrio* quando la somma delle forze applicate su di esso è il vettore nullo. L'**equilibrante** di una risultante $\vec R$ è il vettore che, sommato a $\vec R$, dà il vettore nullo. È quindi il vettore opposto $-\vec R$.

La somma è nulla quando lo è su ciascun asse, perciò ogni componente dell'equilibrante è l'opposto della componente corrispondente di $\vec R$. Se $\vec R=(-4;2)\,\mathrm N$, l'equilibrante è $\vec E=(4;-2)\,\mathrm N$. Infatti
$$
\vec R+\vec E=(-4+4;2-2)\,\mathrm N=(0;0)\,\mathrm N.
$$
Le due frecce hanno lo stesso modulo e versi opposti, come mostra la figura.

Questo controllo riguarda soltanto la somma dei vettori. Per un *corpo esteso*, cioè un oggetto di cui contano le dimensioni, come un'asta o una porta, nello studio dell'equilibrio entrano anche i punti di applicazione delle forze.
:::

::grafico{uguale=1 xmin=-5.4 xmax=5.4 ymin=-3.6 ymax=3.6 vettori="0,0,-4,2,R;0,0,4,-2,E" nomi="x (N),y (N)" titolo="R ed E hanno componenti opposte su entrambi gli assi"}

:::esempio{titolo="Più di due contributi"}
Sono date le forze $\vec a=(5;-2)\,\mathrm N$ e $\vec b=(-3;4)\,\mathrm N$. Per prima cosa si calcola la risultante:
$$
\vec R=\vec a+\vec b=(5-3;-2+4)\,\mathrm N=(2;2)\,\mathrm N.
$$
La forza che la annulla è l'equilibrante $\vec c=-\vec R=(-2;-2)\,\mathrm N$.

Il controllo si esegue sommando le tre forze, un asse alla volta. La somma orizzontale è $5-3-2=0$ e la somma verticale è $-2+4-2=0$. I due controlli sono separati, perché le somme sui due assi sono indipendenti. Con $\vec c=(-2;0)\,\mathrm N$, per esempio, la somma orizzontale varrebbe zero e quella verticale $-2+4=2\,\mathrm N$.
:::

:::esempio{titolo="Due vincoli orientati lungo assi diversi"}
Un anello è tirato da una forza $\vec R=(8;-6)\,\mathrm N$. Allo stesso anello sono legate due corde. Una corda esercita forza soltanto tirando, lungo la propria direzione. La prima corda tira verso sinistra e la seconda verso l'alto. Questa limitazione sulla direzione e sul verso è il *vincolo* di ciascuna corda.

La *tensione* di una corda è il modulo della forza con cui essa tira. Le tensioni si indicano con $T_1$ e $T_2$ e sono numeri positivi o nulli, in simboli $T_1\geq0$ e $T_2\geq0$. La prima corda esercita la forza $(-T_1;0)$ e la seconda la forza $(0;T_2)$. L'anello è in equilibrio quando la somma delle tre forze è nulla su entrambi gli assi. Con le forze espresse in newton, le due condizioni valgono insieme:
$$
\begin{cases}
8-T_1=0\\
-6+T_2=0
\end{cases}
$$
Dalla prima si ottiene $T_1=8\,\mathrm N$ e dalla seconda $T_2=6\,\mathrm N$. Le due corde esercitano insieme la forza $(-8;6)\,\mathrm N$, che è l'equilibrante di $\vec R$. Il suo modulo è
$$
\sqrt{(-8)^2+6^2}\,\mathrm N=\sqrt{64+36}\,\mathrm N=\sqrt{100}\,\mathrm N=10\,\mathrm N.
$$
Lo stesso effetto si ottiene con una sola corda tesa a $10\,\mathrm N$ nella direzione e nel verso dell'equilibrante, che nella figura è la freccia $E$.

Se entrambe le corde tirassero soltanto in orizzontale, la componente verticale $-6\,\mathrm N$ resterebbe non annullata per qualunque valore delle tensioni. L'esame delle componenti che ciascuna corda fornisce precede quindi il calcolo. Quando il calcolo dà una tensione negativa per una corda che tira soltanto nel verso assegnato, quelle corde non mantengono l'equilibrio.
:::

::grafico{uguale=1 xmin=-11 xmax=10.3 ymin=-8.4 ymax=8.2 nomi="Fₓ (N),Fᵧ (N)" vettori="0,0,8,-6,R;0,0,-8,0,T₁;0,0,0,6,T₂;0,0,-8,6,E" segmenti="-8,0,-8,6;-8,6,0,6" titolo="Le due corde forniscono −8 N lungo x e 6 N lungo y. La diagonale E è l'equilibrante."}
