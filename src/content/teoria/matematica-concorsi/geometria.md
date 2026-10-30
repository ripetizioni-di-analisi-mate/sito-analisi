---
titolo: Geometria piana e solida
sommario: Angoli, triangoli e teorema di Pitagora, perimetri e aree delle figure piane, cerchio, similitudine, superfici e volumi dei solidi e primi elementi del piano cartesiano, con i metodi per risolvere in fretta i quesiti dei concorsi.
---

## Angoli

:::definizione{#angolo titolo="Angolo e sua misura"}
Un **angolo** è ciascuna delle due parti di piano delimitate da due semirette che hanno la stessa origine; l'origine si chiama **vertice** e le semirette **lati**. Gli angoli si misurano in gradi: l'angolo giro, cioè l'intero piano attorno al vertice, misura $360^\circ$. Ne seguono le misure degli angoli che compaiono più spesso:

- l'angolo **piatto**, i cui lati formano una retta, è metà dell'angolo giro e misura $180^\circ$;
- l'angolo **retto** è metà dell'angolo piatto e misura $90^\circ$;
- un angolo è **acuto** se misura meno di $90^\circ$ e **ottuso** se misura più di $90^\circ$ e meno di $180^\circ$.

Le misure in gradi permettono di trattare gli angoli come numeri. Per esempio, l'angolo di cui ruota la lancetta dei minuti in $20$ minuti è $\dfrac{20}{60} \cdot 360^\circ = 120^\circ$, perché in $60$ minuti la lancetta compie un giro intero.
:::

:::definizione{#angoli-complementari-supplementari titolo="Angoli complementari e supplementari"}
Due angoli sono **complementari** se la loro somma è $90^\circ$ e **supplementari** se la loro somma è $180^\circ$. Il complementare di un angolo $\alpha$ misura quindi $90^\circ - \alpha$ e il supplementare misura $180^\circ - \alpha$. Il complementare di $35^\circ$ è $55^\circ$ e il supplementare di $35^\circ$ è $145^\circ$. Queste due definizioni servono in quasi tutti i quesiti sugli angoli, perché permettono di ricavare un angolo incognito da uno noto. Il supplementare di un angolo acuto supera il suo complementare di $90^\circ$, dato che $(180^\circ - \alpha) - (90^\circ - \alpha) = 90^\circ$.
:::

:::teorema{#angoli-opposti-al-vertice titolo="Angoli opposti al vertice"}
Due rette che si incontrano in un punto formano quattro angoli. Gli angoli che hanno i lati uno sul prolungamento dell'altro si dicono **opposti al vertice**, e due angoli opposti al vertice sono uguali. Infatti ciascuno dei due è supplementare dello stesso angolo vicino $\beta$, quindi entrambi misurano $180^\circ - \beta$. Se uno dei quattro angoli misura $50^\circ$, gli altri misurano $130^\circ$, $50^\circ$ e $130^\circ$.

::grafico{assi=0 uguale=1 linee="-2.82,-1.03 2.82,1.03;1.72,-2.46 -1.72,2.46;0.52,0.19 0.49,0.26 0.44,0.32 0.39,0.38 0.34,0.44 0.27,0.48 0.2,0.51 0.13,0.53 0.05,0.55 -0.03,0.55 -0.1,0.54 -0.18,0.52 -0.25,0.49 -0.32,0.45;-0.52,-0.19 -0.49,-0.26 -0.44,-0.32 -0.39,-0.38 -0.34,-0.44 -0.27,-0.48 -0.2,-0.51 -0.13,-0.53 -0.05,-0.55 0.03,-0.55 0.1,-0.54 0.18,-0.52 0.25,-0.49 0.32,-0.45;-0.4,0.57 -0.48,0.51 -0.55,0.43 -0.61,0.35 -0.65,0.26 -0.68,0.16 -0.7,0.06 -0.7,-0.04 -0.69,-0.14 -0.66,-0.24;0.4,-0.57 0.48,-0.51 0.55,-0.43 0.61,-0.35 0.65,-0.26 0.68,-0.16 0.7,-0.06 0.7,0.04 0.69,0.14 0.66,0.24" etichette="0.2,0.85,α;-0.4,-1.05,α;-1.05,0.2,β;0.85,-0.4,β" xmin=-3.2 xmax=3.2 ymin=-2.6 ymax=2.6 titolo="Due rette incidenti formano due coppie di angoli opposti al vertice; ogni angolo $\alpha$ è supplementare di ciascuno dei due angoli $\beta$ vicini"}

:::

::::teorema{#rette-parallele-trasversale titolo="Rette parallele tagliate da una trasversale"}
Due rette parallele $r$ e $s$ tagliate da una terza retta $t$, detta **trasversale**, formano otto angoli. Tra questi valgono le uguaglianze seguenti:

- gli angoli **alterni interni**, che stanno tra le due parallele e da parti opposte della trasversale, sono uguali;
- gli angoli **corrispondenti**, che occupano la stessa posizione rispetto a $r$ e rispetto a $s$, sono uguali;
- gli angoli **coniugati interni**, che stanno tra le due parallele e dalla stessa parte della trasversale, sono supplementari.

Di conseguenza gli otto angoli assumono soltanto due misure, $\alpha$ e $180^\circ - \alpha$. Se la trasversale forma con $r$ un angolo di $60^\circ$, ogni angolo della figura misura $60^\circ$ oppure $120^\circ$.

::grafico{assi=0 uguale=1 linee="-3,0 4,0;-3,2 4,2;-0.75,-1.3 1.91,3.3;0.45,0 0.44,0.07 0.43,0.13 0.41,0.2 0.37,0.25 0.33,0.31 0.28,0.35 0.23,0.39;0.7,2 0.71,1.93 0.72,1.87 0.75,1.8 0.78,1.75 0.82,1.69 0.87,1.65 0.93,1.61;1.6,2 1.6,2.07 1.58,2.13 1.56,2.2 1.53,2.25 1.48,2.31 1.44,2.35 1.38,2.39;0.3,0.52 0.22,0.56 0.15,0.58 0.06,0.6 -0.02,0.6 -0.1,0.59 -0.19,0.57 -0.26,0.54 -0.34,0.5 -0.4,0.45 -0.46,0.39 -0.51,0.32 -0.55,0.24 -0.58,0.17 -0.59,0.08 -0.6,0" etichette="0.6,0.12,α;0.15,1.65,α;1.7,2.15,α;-0.75,0.5,β;4.1,-0.1,r;4.1,1.9,s;2.01,3.2,t" xmin=-3.2 xmax=4.6 ymin=-1.5 ymax=3.5 titolo="Due rette parallele $r$ e $s$ tagliate dalla trasversale $t$: i tre angoli indicati con $\alpha$ sono uguali perché alterni interni o corrispondenti, mentre $\alpha$ e $\beta$ sono supplementari"}

:::dimostrazione
Una traslazione che porta $r$ su $s$ lungo la trasversale non cambia gli angoli, perciò gli angoli corrispondenti sono uguali. Un angolo alterno interno è opposto al vertice di un angolo corrispondente, quindi è uguale anch'esso. Un angolo coniugato interno è supplementare dell'angolo vicino, che è alterno interno dell'altro, perciò i due coniugati interni hanno somma $180^\circ$.
:::
::::

## Triangoli e poligoni

::::teorema{#somma-angoli-triangolo titolo="Somma degli angoli interni di un triangolo"}
In ogni triangolo la somma degli angoli interni è $180^\circ$. Noti due angoli, il terzo si ottiene per differenza: in un triangolo con angoli di $48^\circ$ e $77^\circ$ il terzo angolo misura $180^\circ - 48^\circ - 77^\circ = 55^\circ$.

:::dimostrazione
Si traccia per il vertice $C$ la retta parallela al lato $AB$. Gli angoli che questa retta forma con i lati $CA$ e $CB$ sono alterni interni degli angoli $\alpha$ in $A$ e $\beta$ in $B$, quindi sono uguali a $\alpha$ e a $\beta$. Insieme all'angolo $\gamma$ in $C$ formano un angolo piatto, perciò $\alpha + \beta + \gamma = 180^\circ$.
:::

::grafico{assi=0 uguale=1 poligoni="0,0 6.5,0 2.2,4" linee="0.7,0 0.69,0.11 0.67,0.21 0.63,0.31 0.57,0.4 0.51,0.48 0.43,0.55 0.34,0.61;5.99,0.48 5.92,0.39 5.87,0.3 5.83,0.21 5.81,0.1 5.8,0;1.5,4 1.51,3.89 1.53,3.79 1.57,3.69 1.63,3.6 1.69,3.52 1.77,3.45 1.86,3.39;2.71,3.52 2.78,3.61 2.83,3.7 2.87,3.79 2.89,3.9 2.9,4;1.98,3.61 2.04,3.58 2.11,3.56 2.17,3.55 2.24,3.55 2.3,3.56 2.37,3.58 2.43,3.61 2.48,3.65 2.53,3.69" segmenti="-1.2,4,6.5,4" etichette="0.85,0.2,α;5.55,0.2,β;1.05,3.55,α;3.05,3.55,β;2.05,3.2,γ;-0.4,-0.4,A;6.6,-0.4,B;2.1,4.25,C" xmin=-1.5 xmax=7.2 ymin=-0.8 ymax=4.7 titolo="La retta tratteggiata passa per $C$ ed è parallela ad $AB$; i suoi angoli con i lati $CA$ e $CB$ sono alterni interni di $\alpha$ e di $\beta$, quindi in $C$ si ha $\alpha + \gamma + \beta = 180^\circ$"}

::::

:::definizione{#classificazione-triangoli titolo="Classificazione dei triangoli"}
Rispetto ai lati, un triangolo è **equilatero** se ha tre lati uguali, **isoscele** se ne ha almeno due uguali, **scaleno** se ha i tre lati diversi. Rispetto agli angoli, un triangolo è **acutangolo** se ha tre angoli acuti, **rettangolo** se ha un angolo retto, **ottusangolo** se ha un angolo ottuso. In un triangolo rettangolo i due lati che formano l'angolo retto si chiamano **cateti** e il lato opposto **ipotenusa**.

Le due classificazioni danno informazioni sugli angoli. In un triangolo isoscele gli angoli alla base sono uguali, quindi se l'angolo al vertice misura $40^\circ$ ciascun angolo alla base misura $\dfrac{180^\circ - 40^\circ}{2} = 70^\circ$. In un triangolo equilatero i tre angoli sono uguali e perciò misurano $60^\circ$ ciascuno. In un triangolo rettangolo i due angoli acuti sono complementari.
:::

:::teorema{#somma-angoli-poligono titolo="Somma degli angoli interni di un poligono"}
In un poligono convesso con $n$ lati la somma degli angoli interni è
$$
(n - 2) \cdot 180^\circ .
$$
Le diagonali che partono da un vertice dividono infatti il poligono in $n - 2$ triangoli, e gli angoli di questi triangoli formano insieme gli angoli del poligono. Un esagono ha quindi angoli interni con somma $4 \cdot 180^\circ = 720^\circ$. In un poligono **regolare**, cioè con lati e angoli tutti uguali, ogni angolo interno misura $\dfrac{(n - 2) \cdot 180^\circ}{n}$: nell'esagono regolare è $\dfrac{720^\circ}{6} = 120^\circ$.

::grafico{assi=0 uguale=1 poligoni="0,2 -1.9,0.62 -1.18,-1.62 1.18,-1.62 1.9,0.62" segmenti="0,2,-1.18,-1.62;0,2,1.18,-1.62" etichette="-1.3,0.35,1;-0.15,-0.9,2;1.05,0.35,3" xmin=-2.6 xmax=2.6 ymin=-2.1 ymax=2.4 titolo="Le due diagonali uscenti da un vertice dividono il pentagono in $5 - 2 = 3$ triangoli, quindi la somma degli angoli interni è $3 \cdot 180^\circ = 540^\circ$"}

:::

:::osservazione{#angoli-esterni titolo="Angoli esterni di un poligono"}
In ogni vertice l'angolo esterno è il supplementare dell'angolo interno. La somma degli angoli esterni di un poligono convesso è $360^\circ$ per qualunque numero di lati, perché vale $n \cdot 180^\circ - (n - 2) \cdot 180^\circ = 360^\circ$. In un poligono regolare ogni angolo esterno misura quindi $\dfrac{360^\circ}{n}$. Questa uguaglianza dà il numero dei lati di un poligono regolare noto il suo angolo interno: se l'angolo interno è $150^\circ$, l'angolo esterno è $30^\circ$, e perciò il poligono ha $\dfrac{360}{30} = 12$ lati.
:::

## Teorema di Pitagora

:::teorema{#teorema-di-pitagora titolo="Teorema di Pitagora"}
In un triangolo rettangolo con cateti $a$ e $b$ e ipotenusa $c$ si ha
$$
a^2 + b^2 = c^2 .
$$
Geometricamente, il quadrato costruito sull'ipotenusa ha area uguale alla somma delle aree dei quadrati costruiti sui cateti. Il teorema serve a calcolare un lato di un triangolo rettangolo noti gli altri due:
$$
c = \sqrt{a^2 + b^2},
\qquad
a = \sqrt{c^2 - b^2} .
$$
Con cateti $6$ e $8$ l'ipotenusa è $\sqrt{36 + 64} = \sqrt{100} = 10$; con ipotenusa $17$ e un cateto $8$ l'altro cateto è $\sqrt{289 - 64} = \sqrt{225} = 15$. L'ipotenusa è sempre il lato maggiore, e questo dà un controllo immediato del risultato.

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 4,-4 0,-4;0,0 0,3 -3,3 -3,0;4,0 0,3 3,7 7,4" linee="0,0 4,0 0,3 0,0;0.35,0 0.35,0.35 0,0.35" etichette="1.6,-2.2,16;-1.75,1.3,9;3.2,3.4,25;1.8,0.25,4;0.15,1.3,3;2.15,1.75,5" xmin=-3.5 xmax=7.5 ymin=-4.5 ymax=7.5 titolo="Triangolo rettangolo di cateti $3$ e $4$ e ipotenusa $5$: il quadrato costruito sull'ipotenusa ha area $25$, uguale alla somma $9 + 16$ delle aree dei quadrati costruiti sui cateti"}

:::

:::attenzione
L'ipotenusa *non* è la somma dei cateti. Con cateti $3$ e $4$ la somma è $7$, mentre l'ipotenusa è $\sqrt{9 + 16} = 5$. Allo stesso modo $\sqrt{a^2 + b^2}$ è diverso da $a + b$ ogni volta che $a$ e $b$ sono positivi, e un'opzione uguale alla somma dei cateti nasce da questo errore.
:::

:::osservazione{#terne-pitagoriche titolo="Terne pitagoriche"}
Una **terna pitagorica** è una terna di numeri interi $a$, $b$, $c$ con $a^2 + b^2 = c^2$. Le più frequenti nei quesiti sono
$$
(3, 4, 5),
\qquad
(5, 12, 13),
\qquad
(8, 15, 17),
\qquad
(7, 24, 25),
$$
insieme ai loro multipli, perché moltiplicando i tre numeri per lo stesso fattore l'uguaglianza resta vera. Per esempio $(6, 8, 10)$ e $(9, 12, 15)$ sono multipli di $(3, 4, 5)$. Riconoscere una terna evita il calcolo della radice: un triangolo rettangolo con cateti $15$ e $20$ ha ipotenusa $25$, perché i cateti sono $5 \cdot 3$ e $5 \cdot 4$.
:::

:::teorema{#triangoli-rettangoli-particolari titolo="Triangoli rettangoli con angoli di 45°, 30° e 60°"}
I triangoli rettangoli con angoli acuti di $45^\circ$, oppure di $30^\circ$ e $60^\circ$, hanno lati in rapporti fissi, che si ricavano dal teorema di Pitagora.

- La diagonale divide un quadrato di lato $l$ in due triangoli rettangoli isosceli, con angoli acuti di $45^\circ$. L'ipotenusa, cioè la diagonale del quadrato, è $d = \sqrt{l^2 + l^2} = l\sqrt{2}$.
- L'altezza divide un triangolo equilatero di lato $l$ in due triangoli rettangoli con angoli di $30^\circ$ e $60^\circ$. Il cateto opposto all'angolo di $30^\circ$ è metà dell'ipotenusa, cioè $\dfrac{l}{2}$, e l'altro cateto, che è l'altezza del triangolo equilatero, è $h = \sqrt{l^2 - \dfrac{l^2}{4}} = \dfrac{l\sqrt{3}}{2}$.

Un quadrato di lato $5$ ha quindi diagonale $5\sqrt{2} \approx 7{,}07$, e un triangolo equilatero di lato $8$ ha altezza $4\sqrt{3} \approx 6{,}93$. Ne segue anche l'area del triangolo equilatero, $\dfrac{l \cdot h}{2} = \dfrac{l^2\sqrt{3}}{4}$.

::grafico{assi=0 uguale=1 poligoni="0,0 3,3 0,3" linee="0,0 3,0 3,3 0,3 0,0;0,0 3,3;0.42,0.42 0.35,0.49 0.27,0.53 0.19,0.57 0.09,0.59 0,0.6;2.4,3 2.41,2.91 2.43,2.81 2.47,2.73 2.51,2.65 2.58,2.58" etichette="1.35,-0.4,l;3.15,1.4,l;1.65,1.25,d;0.12,0.75,45°;1.75,2.6,45°" xmin=-0.6 xmax=3.8 ymin=-0.7 ymax=3.4 titolo="La diagonale divide il quadrato di lato $l$ in due triangoli rettangoli isosceli con angoli di $45^\circ$, e per il teorema di Pitagora $d = l\sqrt{2}$"}

::grafico{assi=0 uguale=1 poligoni="0,0 2,0 2,3.46" linee="0,0 4,0 2,3.46 0,0;2,0.3 1.7,0.3 1.7,0;0.6,0 0.59,0.09 0.57,0.18 0.54,0.26 0.5,0.34 0.44,0.41 0.37,0.47 0.3,0.52;1.65,2.86 1.73,2.82 1.82,2.79 1.91,2.77 2,2.76" segmenti="2,0,2,3.46" etichette="0.7,0.15,60°;1.65,2.55,30°;2.15,1.6,h;0.55,1.95,l;3.15,1.95,l" xmin=-0.6 xmax=4.6 ymin=-0.7 ymax=3.9 titolo="L'altezza divide il triangolo equilatero di lato $l$ in due triangoli rettangoli con angoli di $30^\circ$ e $60^\circ$; il cateto minore è $\dfrac{l}{2}$ e l'altezza è $h = \dfrac{l\sqrt{3}}{2}$"}

:::

## Quadrilateri, perimetri e aree

:::definizione{#quadrilateri titolo="Quadrilateri"}
Un **quadrilatero** è un poligono con quattro lati, e la somma dei suoi angoli interni è $360^\circ$. I quadrilateri dei quesiti sono i seguenti:

- il **trapezio** ha due lati paralleli, detti basi;
- il **parallelogramma** ha i lati opposti paralleli e uguali, e le diagonali che si dividono a metà;
- il **rettangolo** è un parallelogramma con quattro angoli retti;
- il **rombo** è un parallelogramma con quattro lati uguali, e le sue diagonali sono perpendicolari;
- il **quadrato** è un rettangolo con quattro lati uguali, quindi è anche un rombo.

Le proprietà delle diagonali servono a costruire triangoli rettangoli. In un rombo con diagonali $16$ e $12$ le semidiagonali $8$ e $6$ sono i cateti di un triangolo rettangolo che ha per ipotenusa il lato, e perciò il lato è $10$.
:::

:::teorema{#aree-poligoni titolo="Perimetri e aree dei poligoni"}
Il **perimetro** di un poligono è la somma delle lunghezze dei lati; l'**area** è la misura della superficie racchiusa. Con $b$ base, $h$ altezza relativa a quella base, $l$ lato, $D$ e $d$ diagonali, $B$ e $b$ basi del trapezio:
$$
\begin{aligned}
\text{rettangolo: } & A = b \cdot h, \qquad 2p = 2\,(b + h) \\[6pt]
\text{quadrato: } & A = l^2, \qquad 2p = 4\,l \\[6pt]
\text{parallelogramma: } & A = b \cdot h \\[6pt]
\text{triangolo: } & A = \frac{b \cdot h}{2} \\[6pt]
\text{rombo: } & A = \frac{D \cdot d}{2} \\[6pt]
\text{trapezio: } & A = \frac{(B + b) \cdot h}{2}
\end{aligned}
$$
Il simbolo $2p$ indica il perimetro e $p$ il semiperimetro. Le formule derivano tutte da quella del rettangolo. Un triangolo è metà di un parallelogramma con la stessa base e la stessa altezza, e un rombo è metà del rettangolo che ha per lati le sue diagonali. Un trapezio con basi $10$ e $6$ e altezza $4$ ha area $\dfrac{16 \cdot 4}{2} = 32$.

::grafico{assi=0 uguale=1 poligoni="0,0 6,0 4.5,2.5 1,2.5;8.1,1.25 9.5,3.25 10.9,1.25 9.5,-0.75" segmenti="1,2.5,1,0;8.1,1.25,10.9,1.25;9.5,3.25,9.5,-0.75" linee="1.25,0 1.25,0.25 1,0.25" etichette="2.8,-0.45,B;2.6,2.7,b;1.15,1.1,h;10.2,1.45,d;9.65,2.2,D" xmin=-0.5 xmax=11.5 ymin=-1.1 ymax=3.6 titolo="A sinistra un trapezio di basi $B$ e $b$ e altezza $h$, con area $\dfrac{(B + b) \cdot h}{2}$; a destra un rombo di diagonali $D$ e $d$, con area $\dfrac{D \cdot d}{2}$"}

:::

:::osservazione{#unita-di-superficie titolo="Unità di misura delle superfici"}
Un'area si misura in unità al quadrato, e ogni passaggio all'unità di lunghezza immediatamente inferiore moltiplica per $100$ la misura dell'area. Poiché $1\ \text{m} = 100\ \text{cm}$, si ha
$$
1\ \text{m}^2 = 100\ \text{cm} \cdot 100\ \text{cm} = 10\,000\ \text{cm}^2 .
$$
Allo stesso modo $1\ \text{km}^2 = 1\,000\,000\ \text{m}^2$ e $1\ \text{m}^3 = 1\,000\,000\ \text{cm}^3$. Un'area di $3{,}5\ \text{m}^2$ vale quindi $35\,000\ \text{cm}^2$. Per le altre conversioni si rimanda all'argomento sulle unità di misura.
:::

:::attenzione
Perimetro e area *non* variano insieme. Un rettangolo $9 \times 1$ e un quadrato $5 \times 5$ hanno lo stesso perimetro $20$, ma le aree sono $9$ e $25$. Due figure con lo stesso perimetro possono quindi avere aree molto diverse, e viceversa.
:::

## Circonferenza e cerchio

:::teorema{#circonferenza-e-cerchio titolo="Lunghezza della circonferenza e area del cerchio"}
La **circonferenza** di centro $O$ e raggio $r$ è l'insieme dei punti del piano che distano $r$ da $O$; il **cerchio** è la parte di piano che essa racchiude. Il diametro è $d = 2r$. Indicato con $\pi \approx 3{,}14$ il rapporto, uguale per tutte le circonferenze, tra la lunghezza della circonferenza e il diametro, si ha
$$
C = 2\pi r = \pi d,
\qquad
A = \pi r^2 .
$$
Con $\pi \approx 3{,}14$, un cerchio di raggio $5$ cm ha circonferenza $10\pi \approx 31{,}4$ cm e area $25\pi \approx 78{,}5\ \text{cm}^2$. Nota la circonferenza, il raggio si ricava dividendo per $2\pi$, e poi si calcola l'area: con $C = 12\pi$ si ottiene $r = 6$ e $A = 36\pi$. La formula dell'area richiede il raggio, perciò un dato espresso come diametro va dimezzato prima di elevarlo al quadrato.
:::

:::teorema{#arco-e-settore titolo="Arco e settore circolare"}
Un **angolo al centro** $\alpha$, cioè un angolo con il vertice nel centro, individua sulla circonferenza un **arco** e nel cerchio un **settore circolare**. Arco e settore sono la frazione $\dfrac{\alpha}{360^\circ}$ della circonferenza e del cerchio:
$$
\ell = \frac{\alpha}{360^\circ} \cdot 2\pi r,
\qquad
A_{\text{settore}} = \frac{\alpha}{360^\circ} \cdot \pi r^2 .
$$
Le due formule sono proporzioni: l'arco sta all'intera circonferenza come $\alpha$ sta a $360^\circ$. Con $r = 6$ e $\alpha = 60^\circ$ la frazione è $\dfrac{1}{6}$, quindi l'arco è $2\pi$ e il settore ha area $6\pi$.

::grafico{assi=0 uguale=1 poligoni="0,0 3,0 2.99,0.26 2.95,0.52 2.9,0.78 2.82,1.03 2.72,1.27 2.6,1.5 2.46,1.72 2.3,1.93 2.12,2.12 1.93,2.3 1.72,2.46 1.5,2.6" linee="3,0 2.99,0.26 2.95,0.52 2.9,0.78 2.82,1.03 2.72,1.27 2.6,1.5 2.46,1.72 2.3,1.93 2.12,2.12 1.93,2.3 1.72,2.46 1.5,2.6 1.27,2.72 1.03,2.82 0.78,2.9 0.52,2.95 0.26,2.99 0,3 -0.26,2.99 -0.52,2.95 -0.78,2.9 -1.03,2.82 -1.27,2.72 -1.5,2.6 -1.72,2.46 -1.93,2.3 -2.12,2.12 -2.3,1.93 -2.46,1.72 -2.6,1.5 -2.72,1.27 -2.82,1.03 -2.9,0.78 -2.95,0.52 -2.99,0.26 -3,0 -2.99,-0.26 -2.95,-0.52 -2.9,-0.78 -2.82,-1.03 -2.72,-1.27 -2.6,-1.5 -2.46,-1.72 -2.3,-1.93 -2.12,-2.12 -1.93,-2.3 -1.72,-2.46 -1.5,-2.6 -1.27,-2.72 -1.03,-2.82 -0.78,-2.9 -0.52,-2.95 -0.26,-2.99 0,-3 0.26,-2.99 0.52,-2.95 0.78,-2.9 1.03,-2.82 1.27,-2.72 1.5,-2.6 1.72,-2.46 1.93,-2.3 2.12,-2.12 2.3,-1.93 2.46,-1.72 2.6,-1.5 2.72,-1.27 2.82,-1.03 2.9,-0.78 2.95,-0.52 2.99,-0.26 3,0;0,0 3,0;0,0 1.5,2.6;0.6,0 0.59,0.09 0.57,0.18 0.54,0.26 0.5,0.34 0.44,0.41 0.37,0.47 0.3,0.52" punti="0,0,pieno,O" etichette="1.3,-0.35,r;0.65,0.25,α;2.85,2.0,arco" xmin=-3.4 xmax=3.6 ymin=-3.4 ymax=3.4 titolo="L'angolo al centro $\alpha$ individua un arco e un settore circolare; con $\alpha = 60^\circ$ arco e settore sono $\dfrac{60}{360} = \dfrac{1}{6}$ della circonferenza e del cerchio"}

:::

## Similitudine

:::definizione{#similitudine titolo="Figure simili e rapporto di similitudine"}
Due figure sono **simili** se una è un ingrandimento o una riduzione dell'altra: gli angoli corrispondenti sono uguali e i lati corrispondenti sono in proporzione. Il rapporto costante $k$ tra lati corrispondenti si chiama **rapporto di similitudine**. Anche i perimetri, le altezze e tutte le altre lunghezze stanno nel rapporto $k$. Due triangoli con due angoli uguali sono simili; il terzo angolo è uguale anch'esso, perché in entrambi i triangoli la somma degli angoli è $180^\circ$. Se un triangolo ha lati $3$, $4$, $5$ e un triangolo simile ha il lato minore uguale a $6$, allora $k = 2$ e gli altri lati sono $8$ e $10$. La scala di una carta geografica è un rapporto di similitudine, come si è visto nell'argomento sulle proporzioni.
:::

:::teorema{#rapporto-aree-volumi titolo="Rapporto tra aree e tra volumi di figure simili"}
Se due figure sono simili con rapporto $k$, le loro aree stanno nel rapporto $k^2$ e, per i solidi, i volumi stanno nel rapporto $k^3$. Il motivo è che un'area è il prodotto di due lunghezze, ciascuna moltiplicata per $k$, mentre un volume è il prodotto di tre lunghezze. Raddoppiando il lato di un quadrato l'area diventa $4$ volte maggiore; raddoppiando lo spigolo di un cubo il volume diventa $8$ volte maggiore. Un aumento del $10\%$ di tutte le dimensioni moltiplica l'area per $1{,}1^2 = 1{,}21$, cioè la aumenta del $21\%$.

::grafico{assi=0 uguale=1 poligoni="0,0 3,0 0,2;5,0 11,0 5,4" linee="0.3,0 0.3,0.3 0,0.3;5.3,0 5.3,0.3 5,0.3" etichette="1.4,-0.45,3;-0.4,0.9,2;7.9,-0.45,6;4.6,1.9,4" xmin=-0.8 xmax=11.6 ymin=-0.9 ymax=4.4 titolo="Due triangoli simili con rapporto di similitudine $k = 2$: i lati raddoppiano, le aree passano da $3$ a $12$ e quindi sono moltiplicate per $k^2 = 4$"}

:::

:::osservazione{#cambio-di-una-dimensione titolo="Variazione di una sola dimensione"}
Se cambia una sola dimensione la figura non resta simile, e l'area o il volume si moltiplicano soltanto per il fattore di quella dimensione. Raddoppiando la base di un rettangolo e lasciando invariata l'altezza l'area raddoppia. Nel cilindro e nel cono il raggio compare al quadrato, quindi raddoppiando il raggio e lasciando invariata l'altezza il volume diventa $4$ volte maggiore, mentre raddoppiando l'altezza e lasciando invariato il raggio il volume raddoppia.
:::

## Solidi: superfici e volumi

:::teorema{#prismi titolo="Cubo, parallelepipedo e prisma"}
Un **prisma retto** ha due basi poligonali uguali e parallele, e facce laterali rettangolari. La superficie laterale è il perimetro di base per l'altezza, la superficie totale aggiunge le due basi e il volume è l'area di base per l'altezza:
$$
S_{\text{lat}} = 2p \cdot h,
\qquad
S_{\text{tot}} = S_{\text{lat}} + 2\,A_{\text{base}},
\qquad
V = A_{\text{base}} \cdot h .
$$
Il **parallelepipedo rettangolo** di dimensioni $a$, $b$, $c$ è un prisma con base rettangolare, quindi ha volume $V = a \cdot b \cdot c$ e superficie totale $2\,(ab + bc + ac)$. Il **cubo** di spigolo $l$ ha sei facce quadrate, perciò $S_{\text{tot}} = 6\,l^2$ e $V = l^3$. Un parallelepipedo $5 \times 4 \times 3$ ha volume $60$ e superficie totale $2\,(20 + 12 + 15) = 94$.
:::

:::teorema{#diagonale-parallelepipedo titolo="Diagonale del parallelepipedo e del cubo"}
La diagonale di un parallelepipedo rettangolo di dimensioni $a$, $b$, $c$ è
$$
d = \sqrt{a^2 + b^2 + c^2} .
$$
La formula si ottiene applicando due volte il teorema di Pitagora. La diagonale della base è $e = \sqrt{a^2 + b^2}$; la diagonale del solido è l'ipotenusa del triangolo rettangolo di cateti $e$ e $c$, quindi $d = \sqrt{e^2 + c^2} = \sqrt{a^2 + b^2 + c^2}$. Per un cubo di spigolo $l$ si ottiene $d = l\sqrt{3}$. Un parallelepipedo $12 \times 4 \times 3$ ha diagonale $\sqrt{144 + 16 + 9} = \sqrt{169} = 13$.

::grafico{assi=0 uguale=1 poligoni="0,0 5.2,0.9 5.2,2.9" linee="0,0 4,0 4,2 0,2 0,0;0,2 1.2,2.9 5.2,2.9 4,2;4,0 5.2,0.9 5.2,2.9;0,0 5.2,2.9" segmenti="0,0,1.2,0.9;1.2,0.9,5.2,0.9;1.2,0.9,1.2,2.9;0,0,5.2,0.9" etichette="1.9,-0.4,a;4.75,0.25,b;5.35,1.8,c;2.3,1.55,d;2.9,0.2,e" xmin=-0.5 xmax=6 ymin=-0.7 ymax=3.3 titolo="Nel parallelepipedo di dimensioni $a$, $b$, $c$ la diagonale $e$ della base è $\sqrt{a^2 + b^2}$; il triangolo colorato è rettangolo, quindi la diagonale è $d = \sqrt{e^2 + c^2} = \sqrt{a^2 + b^2 + c^2}$"}

:::

:::teorema{#piramide titolo="Piramide"}
Una **piramide** ha per base un poligono e per facce laterali triangoli con un vertice comune $V$. Il suo volume è un terzo del volume del prisma con la stessa base e la stessa altezza:
$$
V = \frac{A_{\text{base}} \cdot h}{3} .
$$
In una piramide regolare la superficie laterale è $\dfrac{2p \cdot a}{2}$, dove $a$ è l'**apotema**, cioè l'altezza di una faccia laterale. Nella piramide regolare a base quadrata l'apotema si ricava con il teorema di Pitagora dall'altezza e da metà del lato di base. Con lato di base $6$ e altezza $4$ si ottiene $a = \sqrt{16 + 9} = 5$, superficie laterale $\dfrac{24 \cdot 5}{2} = 60$ e volume $\dfrac{36 \cdot 4}{3} = 48$.

::grafico{assi=0 uguale=1 poligoni="2.6,3.65 2.6,0.45 2,0" linee="0,0 4,0 5.2,0.9;2.6,3.65 0,0;2.6,3.65 4,0;2.6,3.65 5.2,0.9;2.6,3.65 2,0" segmenti="0,0,1.2,0.9;1.2,0.9,5.2,0.9;1.2,0.9,2.6,3.65;2.6,0.45,2.6,3.65;2.6,0.45,2,0" etichette="2.7,1.9,h;1.55,1.5,a;2.2,-0.4,l;2.7,3.8,V" xmin=-0.5 xmax=5.6 ymin=-0.7 ymax=4.3 titolo="Piramide regolare a base quadrata di lato $l$: l'altezza $h$, la distanza $\dfrac{l}{2}$ dal centro della base al lato e l'apotema $a$ formano un triangolo rettangolo, quindi $a = \sqrt{h^2 + \left(\dfrac{l}{2}\right)^2}$"}

:::

:::teorema{#solidi-rotondi titolo="Cilindro, cono e sfera"}
Per un cilindro e un cono con raggio di base $r$ e altezza $h$, e per una sfera di raggio $r$, valgono le formule seguenti:
$$
\begin{aligned}
\text{cilindro: } & S_{\text{lat}} = 2\pi r h, \qquad V = \pi r^2 h \\[6pt]
\text{cono: } & S_{\text{lat}} = \pi r a, \qquad V = \frac{\pi r^2 h}{3} \\[6pt]
\text{sfera: } & S = 4\pi r^2, \qquad V = \frac{4}{3}\pi r^3
\end{aligned}
$$
Nel cono $a = \sqrt{r^2 + h^2}$ è l'apotema, cioè l'ipotenusa del triangolo rettangolo di cateti $r$ e $h$. Il cilindro è un prisma con base circolare, quindi il suo volume è area di base per altezza, e il cono sta al cilindro come la piramide sta al prisma. Un cono con $r = 3$ e $h = 4$ ha apotema $5$, superficie laterale $15\pi$ e volume $12\pi$; una sfera di raggio $3$ ha superficie $36\pi$ e volume $36\pi$.

::grafico{assi=0 uguale=1 linee="2,4 1.97,4.09 1.88,4.17 1.73,4.25 1.53,4.32 1.29,4.38 1,4.43 0.68,4.47 0.35,4.49 0,4.5 -0.35,4.49 -0.68,4.47 -1,4.43 -1.29,4.38 -1.53,4.32 -1.73,4.25 -1.88,4.17 -1.97,4.09 -2,4 -1.97,3.91 -1.88,3.83 -1.73,3.75 -1.53,3.68 -1.29,3.62 -1,3.57 -0.68,3.53 -0.35,3.51 0,3.5 0.35,3.51 0.68,3.53 1,3.57 1.29,3.62 1.53,3.68 1.73,3.75 1.88,3.83 1.97,3.91 2,4;-2,0 -1.97,-0.09 -1.88,-0.17 -1.73,-0.25 -1.53,-0.32 -1.29,-0.38 -1,-0.43 -0.68,-0.47 -0.35,-0.49 0,-0.5 0.35,-0.49 0.68,-0.47 1,-0.43 1.29,-0.38 1.53,-0.32 1.73,-0.25 1.88,-0.17 1.97,-0.09 2,0;-2,0 -2,4;2,0 2,4;4,0 4.03,-0.09 4.12,-0.17 4.27,-0.25 4.47,-0.32 4.71,-0.38 5,-0.43 5.32,-0.47 5.65,-0.49 6,-0.5 6.35,-0.49 6.68,-0.47 7,-0.43 7.29,-0.38 7.53,-0.32 7.73,-0.25 7.88,-0.17 7.97,-0.09 8,0;4,0 6,4 8,0" segmenti="2,0,1.97,0.09;1.88,0.17,1.73,0.25;1.53,0.32,1.29,0.38;1,0.43,0.68,0.47;0.35,0.49,0,0.5;-0.35,0.49,-0.68,0.47;-1,0.43,-1.29,0.38;-1.53,0.32,-1.73,0.25;-1.88,0.17,-1.97,0.09;8,0,7.97,0.09;7.88,0.17,7.73,0.25;7.53,0.32,7.29,0.38;7,0.43,6.68,0.47;6.35,0.49,6,0.5;5.65,0.49,5.32,0.47;5,0.43,4.71,0.38;4.47,0.32,4.27,0.25;4.12,0.17,4.03,0.09;0,0,0,4;0,0,2,0;6,0,6,4;6,0,8,0" punti="0,0,pieno;6,0,pieno" etichette="0.8,0.15,r;-0.45,2,h;6.8,0.15,r;5.6,2,h;7.25,2.2,a" xmin=-2.6 xmax=8.6 ymin=-0.9 ymax=4.9 titolo="Un cilindro e un cono con raggio di base $r$ e altezza $h$; nel cono l'apotema $a$ è l'ipotenusa del triangolo rettangolo di cateti $r$ e $h$"}

:::

:::osservazione{#volumi-e-litri titolo="Volumi e capacità"}
Nei problemi su serbatoi e recipienti il volume si converte in litri con l'uguaglianza $1\ \text{dm}^3 = 1$ litro, quindi $1\ \text{m}^3 = 1000$ litri. Una vasca a forma di parallelepipedo $3\ \text{m} \times 1{,}5\ \text{m} \times 0{,}8\ \text{m}$ ha volume $3{,}6\ \text{m}^3$ e contiene perciò $3600$ litri. Per le altre conversioni tra volumi e capacità si rimanda all'argomento sulle unità di misura.
:::

## Il piano cartesiano

:::teorema{#distanza-e-punto-medio titolo="Distanza tra due punti e punto medio"}
Nel piano cartesiano ogni punto è individuato da una coppia di numeri $(x, y)$, l'ascissa e l'ordinata. La distanza tra $A(x_1, y_1)$ e $B(x_2, y_2)$ e il punto medio $M$ del segmento $AB$ sono
$$
\overline{AB} = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2},
\qquad
M = \left( \frac{x_1 + x_2}{2},\ \frac{y_1 + y_2}{2} \right) .
$$
La formula della distanza è il teorema di Pitagora applicato al triangolo rettangolo che ha i cateti paralleli agli assi, lunghi $|x_2 - x_1|$ e $|y_2 - y_1|$. Le coordinate del punto medio sono le medie delle coordinate degli estremi. Per $A(1, 1)$ e $B(5, 4)$ si ottiene $\overline{AB} = \sqrt{16 + 9} = 5$ e $M = (3;\ 2{,}5)$, dove il punto e virgola separa le coordinate perché la seconda contiene una virgola decimale.

::grafico{xmin=-1 xmax=6 ymin=-1 ymax=5 uguale=1 linee="1,1 5,4" punti="1,1,pieno,A;5,4,pieno,B" segmenti="1,1,5,1;5,1,5,4" etichette="2.9,0.55,4;5.15,2.4,3;2.6,2.55,5" titolo="La distanza tra $A(1, 1)$ e $B(5, 4)$ è l'ipotenusa del triangolo rettangolo di cateti $5 - 1 = 4$ e $4 - 1 = 3$, quindi $\overline{AB} = 5$"}

:::

:::definizione{#retta titolo="Retta y = mx + q"}
Ogni retta non verticale ha equazione $y = mx + q$. Il numero $q$ è l'**intercetta**, cioè l'ordinata del punto in cui la retta taglia l'asse $y$, perché per $x = 0$ si ottiene $y = q$. Il numero $m$ è la **pendenza**, cioè l'aumento di $y$ quando $x$ aumenta di $1$; se la retta passa per due punti $(x_1, y_1)$ e $(x_2, y_2)$ si ha
$$
m = \frac{y_2 - y_1}{x_2 - x_1} .
$$
Con $m > 0$ la retta sale, con $m < 0$ scende e con $m = 0$ è orizzontale. La retta $y = 2x - 1$ taglia l'asse $y$ in $(0, -1)$ e taglia l'asse $x$ nel punto in cui $2x - 1 = 0$, cioè in $\left( \dfrac{1}{2}, 0 \right)$. Nei quesiti una retta descrive una grandezza che cresce a ritmo costante a partire da una quota fissa, come il costo di un servizio con un canone fisso $q$ e una tariffa $m$ per unità.

::grafico{f="2*x-1" xmin=-2 xmax=4 ymin=-2 ymax=6 uguale=1 legenda="y = 2x - 1" punti="0,-1,pieno,q;0.5,0,pieno" segmenti="1,1,2,1;2,1,2,3" etichette="1.4,0.6,1;2.15,1.9,2" titolo="La retta $y = 2x - 1$ taglia l'asse $y$ nel punto di ordinata $q = -1$; spostandosi di $1$ verso destra la retta sale di $2$, quindi la pendenza è $m = 2$"}

:::

## Metodi rapidi per i quiz

:::osservazione{#metodi-rapidi titolo="Controlli e scorciatoie nei quesiti di geometria"}
Molti quesiti di geometria si risolvono in pochi secondi con alcune osservazioni.

- **Riconoscere le terne pitagoriche** e i triangoli con angoli di $30^\circ$, $45^\circ$ e $60^\circ$: con ipotenusa $26$ e un cateto $10$ l'altro cateto è $24$, perché $(10, 24, 26)$ è il doppio di $(5, 12, 13)$.
- **Controllare le dimensioni**: un perimetro è una lunghezza, un'area è il prodotto di due lunghezze e un volume di tre. Un'opzione in $\text{cm}^2$ per un volume si esclude subito.
- **Usare i fattori di similitudine** $k$, $k^2$ e $k^3$ invece di ricalcolare: se il raggio di una sfera triplica, il volume è moltiplicato per $27$.
- **Stimare** il risultato con $\pi \approx 3$: un cerchio di raggio $10$ ha area poco più grande di $300$, quindi tra $31{,}4$, $314$ e $3140$ la risposta è $314$.
- **Verificare l'ordine di grandezza**: l'ipotenusa è il lato più lungo ma è minore della somma dei cateti, e la diagonale di un parallelepipedo è minore della somma delle tre dimensioni.

Le opzioni sbagliate nascono di solito dal diametro usato al posto del raggio, dalla divisione per $2$ o per $3$ dimenticata nelle aree dei triangoli e nei volumi di coni e piramidi, e da un fattore $10$ o $100$ nelle conversioni delle superfici.
:::
