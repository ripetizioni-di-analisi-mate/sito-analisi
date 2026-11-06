---
titolo: "Piano cartesiano e retta"
sommario: "Distanze, punto medio, equazioni della retta, coefficiente angolare, parallelismo, perpendicolarità e intersezioni."
---

## Coordinate e segmenti

:::definizione{#coordinate titolo="Distanza e punto medio"}
Un punto $P(x_P;y_P)$ è descritto dalla sua ascissa orizzontale e dalla sua ordinata verticale. Per due punti $A$ e $B$ valgono
$$
AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2},\qquad
M\left(\frac{x_A+x_B}2;\frac{y_A+y_B}2\right).
$$
La formula della distanza deriva dal teorema di Pitagora applicato alle proiezioni del segmento sugli assi. La formula del punto medio dimezza separatamente gli spostamenti orizzontale e verticale.

Per $A(1;2)$ e $B(4;6)$ si ottengono $AB=5$ e $M(\dfrac52;4)$. Per un segmento orizzontale la distanza è il valore assoluto della differenza delle ascisse; per uno verticale si usa la differenza delle ordinate.

::grafico{linee="1,2 4,6;1,2 4,2 4,6" punti="1,2,pieno,A;4,6,pieno,B;2.5,4,pieno,M" xmin=0 xmax=6 ymin=0 ymax=8 uguale=1 titolo="Le differenze di coordinate formano i cateti; $M$ è il punto medio"}
:::

## Equazione esplicita

:::definizione{#pendenza titolo="Coefficiente angolare e intercetta"}
Una retta non verticale ha equazione $y=mx+q$. Il **coefficiente angolare** $m$ è il rapporto fra variazione di ordinata e variazione di ascissa; l'**intercetta** $q$ è l'ordinata del punto sull'asse verticale.

Per due punti con ascisse diverse,
$$
m=\frac{y_B-y_A}{x_B-x_A}.
$$
Per $A(0;1)$ e $B(2;5)$ risulta $m=2$, quindi la retta è $y=2x+1$. Quando $x$ aumenta di uno, $y$ aumenta di due.

Per $m>0$ la retta è crescente, per $m<0$ è decrescente e per $m=0$ è orizzontale. Una retta verticale ha equazione $x=k$ e non ha coefficiente angolare.

::grafico{f="2*x+1;-x+1" xmin=-3 xmax=4 ymin=-4 ymax=7 titolo="Rette crescente e decrescente con la stessa intercetta"}
:::

## Forma generale

:::teorema{#generale titolo="Equazioni implicite e appartenenza"}
Una retta si scrive $ax+by+c=0$ con almeno uno fra $a$ e $b$ non nullo. Se $b\ne0$ si ricava $y=-\dfrac abx-\dfrac cb$. Se $b=0$, la retta è verticale.

Per $2x+3y-6=0$ si ottiene $y=-\dfrac23x+2$. Le intersezioni con gli assi sono $(3;0)$ e $(0;2)$, trovate ponendo rispettivamente $y=0$ e $x=0$.

Un punto appartiene alla retta quando sostituendo le sue coordinate si ottiene un'uguaglianza vera. Per esempio $(0;2)$ verifica $0+6-6=0$. Questa prova controlla anche l'equazione costruita a partire dai dati.
:::

## Retta per punti assegnati

:::teorema{#per-un-punto titolo="Una direzione e un punto"}
La retta di coefficiente $m$ passante per $P(x_0;y_0)$ ha equazione
$$
y-y_0=m(x-x_0).
$$
Per $P(2;3)$ e $m=-1$ segue $y-3=-(x-2)$, quindi $y=-x+5$.

Per due punti con ascisse diverse si calcola prima $m$ e poi si usa uno dei punti. Se le ascisse coincidono, la retta è verticale e ha quell'ascissa costante.

Due punti distinti determinano una sola retta. Se i due punti coincidono, il dato non determina una direzione e occorre un'altra informazione.

::grafico{f="-x+5" punti="2,3,pieno,P" xmin=-1 xmax=7 ymin=-2 ymax=7 titolo="La retta $y=-x+5$ passa per $(2;3)$"}
:::

## Parallele e perpendicolari

:::teorema{#posizioni titolo="Confronto delle direzioni"}
Due rette non verticali sono parallele se hanno uguale coefficiente angolare. Sono coincidenti se hanno anche lo stesso termine noto.

Due rette non verticali sono perpendicolari se $m_1m_2=-1$. Per esempio una perpendicolare a $y=2x+1$ ha coefficiente $-\dfrac12$. La retta orizzontale e quella verticale sono perpendicolari e vanno trattate separatamente.

Per trovare la parallela a $y=3x-2$ passante per $(1;5)$ si scrive $y-5=3(x-1)$, quindi $y=3x+2$. La condizione di parallelismo fissa la direzione e il punto fissa la posizione.
:::

## Intersezioni

:::teorema{#intersezioni titolo="Il sistema delle rette"}
Le coordinate del punto comune a due rette soddisfano entrambe le equazioni. Si risolve quindi il loro sistema lineare.

Per $y=2x+1$ e $y=-x+7$ si ottiene $2x+1=-x+7$, quindi $x=2$ e $y=5$. Il punto è $(2;5)$.

Se i coefficienti angolari coincidono ma le intercette sono diverse, il sistema è impossibile e le rette sono parallele distinte. Se coincidono anche le intercette, il sistema è indeterminato.

::grafico{f="2*x+1;-x+7" punti="2,5,pieno,P" xmin=-1 xmax=5 ymin=-1 ymax=9 titolo="Le coordinate di $P$ soddisfano entrambe le equazioni"}
:::

## Distanza da una retta

:::teorema{#distanza-retta titolo="Lunghezza della perpendicolare"}
Per $P(x_0;y_0)$ e la retta $ax+by+c=0$, la distanza è
$$
d(P,r)=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}.
$$
Il denominatore è positivo perché $a$ e $b$ non sono entrambi nulli. Il numeratore è nullo esattamente quando il punto appartiene alla retta.

Per l'origine e $3x+4y-10=0$ si ha $d=\dfrac{10}{5}=2$. Moltiplicare tutta l'equazione della retta per uno stesso numero non nullo non cambia la distanza, perché numeratore e denominatore vengono moltiplicati per lo stesso valore assoluto.

::grafico{f="-0.75*x+2.5" linee="0,0 1.2,1.6" punti="0,0,pieno,O;1.2,1.6,pieno,H" xmin=-1 xmax=5 ymin=-1 ymax=4 uguale=1 titolo="Il segmento $OH$ è perpendicolare alla retta e misura $2$"}
:::

## Aree e modelli lineari

:::osservazione{#applicazioni titolo="Dai dati al grafico"}
Per un triangolo con base orizzontale si usa la lunghezza della base e la distanza verticale del terzo vertice. Per $A(0;0)$, $B(6;0)$ e $C(2;4)$, base $6$ e altezza $4$ danno area $12$.

Una tariffa con costo iniziale $q$ e costo unitario $m$ può essere descritta da $C(x)=mx+q$. Il dominio deriva dal significato di $x$, per esempio $x\ge0$ se è una distanza percorsa.

L'intersezione di due rette di costo indica la quantità per cui le tariffe coincidono. La differenza dei costi consente poi di confrontarle sui due lati dell'intersezione.
:::
