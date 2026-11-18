---
titolo: Piano cartesiano e retta
sommario: Distanze, punto medio, equazioni della retta, coefficiente angolare, parallelismo,
  perpendicolarità e intersezioni.
---

Le coordinate traducono la posizione di un punto in due numeri, mentre un’equazione descrive tutti i punti di una retta. I calcoli con segmenti e pendenze usano Pitagora e i rapporti. I sistemi lineari individuano le intersezioni, che a loro volta permettono di verificare soglie e vincoli nei modelli.

## Assi, quadranti e lettura dei punti

:::definizione{#lettura-coordinate titolo="Due coordinate, due direzioni"}
L’ascissa si legge lungo l’asse orizzontale, con valori positivi verso destra. L’ordinata si legge lungo l’asse verticale, con valori positivi verso l’alto. Per individuare $A(-3;2)$ si parte dall’origine e ci si sposta di tre unità a sinistra e due in alto. Il punto si trova nel secondo quadrante. Il punto $B(2;-1)$ è invece a destra e in basso, nel quarto quadrante.

::grafico{xmin=-4.6 xmax=3.6 ymin=-2.4 ymax=3.7 uguale=1 punti="-3,2,pieno,A;2,-1,pieno,B" segmenti="-3,0,-3,2;-3,2,0,2;2,0,2,-1;0,-1,2,-1" titolo="Le proiezioni sugli assi danno le coordinate $A(-3;2)$ e $B(2;-1)$"}

Un punto sull’asse orizzontale ha ordinata zero, mentre sull’asse verticale ha ascissa zero. Riflettere $A$ rispetto all’asse verticale cambia soltanto l’ascissa e dà $(3;2)$. Rifletterlo rispetto all’asse orizzontale cambia soltanto l’ordinata e dà $(-3;-2)$. La distanza dall’asse verticale è il valore assoluto dell’ascissa. Quella dall’asse orizzontale è il valore assoluto dell’ordinata.
:::

## Coordinate e segmenti

:::definizione{#coordinate titolo="Distanza e punto medio"}
Un punto $P(x_P;y_P)$ è descritto dalla sua ascissa orizzontale e dalla sua ordinata verticale. Per due punti $A$ e $B$ valgono
$$
AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2},\qquad
M\left(\frac{x_A+x_B}2;\frac{y_A+y_B}2\right).
$$
La formula della distanza deriva dal teorema di Pitagora applicato alle proiezioni del segmento sugli assi. La formula del punto medio dimezza separatamente gli spostamenti orizzontale e verticale.

Per $A(1;2)$ e $B(4;6)$ si ottengono $AB=5$ e $M(\dfrac52;4)$. Per un segmento orizzontale si prende il valore assoluto della differenza delle ascisse. Per un segmento verticale si prende il valore assoluto della differenza delle ordinate.

::grafico{linee="1,2 4,6;1,2 4,2 4,6" punti="1,2,pieno,A;4,6,pieno,B;2.5,4,pieno,M" xmin=0 xmax=6 ymin=0 ymax=8 uguale=1 titolo="Le differenze di coordinate danno i cateti e $M$ è il punto medio"}
:::

:::esempio{titolo="Ricostruire un estremo dal punto medio"}
Sia $M(1;3)$ il punto medio di un segmento con estremo $A(-2;5)$. Da $A$ a $M$ l’ascissa aumenta di $3$ e l’ordinata diminuisce di $2$. Per arrivare fino a $B$ si ripete lo stesso spostamento, dunque $B(4;1)$. Le medie delle ascisse e delle ordinate restituiscono $1$ e $3$. Questo procedimento funziona anche quando lo spostamento ha una componente nulla. Se le ascisse di $A$ e $M$ coincidono, coincidono anche con l’ascissa di $B$.
:::

:::esempio{titolo="Una distanza assegnata può dare due punti"}
Si cerca un punto $Q(x;0)$ sull’asse orizzontale a distanza $5$ da $P(5;4)$. La distanza verticale da $P$ è sempre $4$. La formula della distanza dà $(x-5)^2+16=25$, da cui $(x-5)^2=9$. Perciò l’ascissa di $Q$ è $2$ oppure $8$. I due punti sono alla stessa distanza perché gli spostamenti orizzontali sono opposti e hanno lo stesso quadrato. Se si chiede anche $x>5$, rimane soltanto $(8;0)$.
:::

## Equazione esplicita

:::definizione{#pendenza titolo="Coefficiente angolare e intercetta"}
Una retta non verticale ha equazione $y=mx+q$. Il **coefficiente angolare** $m$ è il rapporto fra variazione di ordinata e variazione di ascissa. L’**intercetta** $q$ è l’ordinata del punto sull’asse verticale.

Per due punti con ascisse diverse,
$$
m=\frac{y_B-y_A}{x_B-x_A}.
$$
Per $A(0;1)$ e $B(2;5)$ risulta $m=2$, quindi la retta è $y=2x+1$. Quando $x$ aumenta di uno, $y$ aumenta di due.

Per $m>0$ la retta è crescente, per $m<0$ è decrescente e per $m=0$ è orizzontale. Una retta verticale ha equazione $x=k$ e non ha coefficiente angolare.

::grafico{f="2*x+1;-x+1" xmin=-3 xmax=4 ymin=-4 ymax=7 titolo="Rette crescente e decrescente con la stessa intercetta"}
:::

::::teorema{#pendenza-costante titolo="La variazione verticale per unità orizzontale è costante"}
Sulla retta $y=mx+q$ il rapporto delle variazioni fra due punti distinti vale sempre $m$. L’intercetta determina da quale quota si parte e si elimina quando si confrontano le quote.

:::dimostrazione
Se $y_A=mx_A+q$ e $y_B=mx_B+q$, per sottrazione si ottiene $y_B-y_A=m(x_B-x_A)$. Per due punti distinti della retta, le ascisse sono diverse perché l’equazione assegna una sola ordinata a ciascuna ascissa. Dividendo per $x_B-x_A$ si ritrova $m$. Il rapporto vale anche percorrendo la retta in senso opposto, perché si invertono entrambi gli spostamenti.
:::
::::

:::esempio{titolo="La pendenza con una variazione negativa"}
Sulla retta per $A(-2;4)$ e $B(2;2)$, procedere da $A$ a $B$ aumenta l’ascissa di $4$ e riduce l’ordinata di $2$. Il rapporto è

$$
m=\frac{2-4}{2-(-2)}=-\frac12.
$$

La retta scende di una unità ogni due unità verso destra. Per esempio a $x=0$, a metà tra le due ascisse, corrisponde $y=3$. Se si parte da $B$, entrambe le differenze cambiano segno e il rapporto resta uguale.

::grafico{f="-0.5*x+3" punti="-2,4,pieno,A;2,2,pieno,B;0,3,pieno,M" linee="-2,4 2,4 2,2" xmin=-4 xmax=4 ymin=0 ymax=6 uguale=1 titolo="Da A a B la retta avanza di 4 e scende di 2"}
:::

:::osservazione
L’intercetta si legge quando $x=0$, mentre la pendenza si misura confrontando due punti. Nelle rette $y=2x+1$ e $y=-x+1$ il punto $(0;1)$ è comune. Un passo verso destra porta alla quota $3$ sulla prima e alla quota $0$ sulla seconda. D’altra parte, due rette con pendenza uguale possono partire da quote differenti, quindi la stessa variazione di ordinata si aggiunge a valori iniziali diversi.
:::

## Forma generale

:::teorema{#generale titolo="Equazioni implicite e appartenenza"}
Una retta si scrive $ax+by+c=0$ con almeno uno fra $a$ e $b$ non nullo. Se $b\ne0$ si ricava $y=-\dfrac abx-\dfrac cb$. Se $b=0$, la retta è verticale.

Per $2x+3y-6=0$ si ottiene $y=-\dfrac23x+2$. Le intersezioni con gli assi sono $(3;0)$ e $(0;2)$, trovate ponendo rispettivamente $y=0$ e $x=0$.

Un punto appartiene alla retta quando sostituendo le sue coordinate si ottiene un'uguaglianza vera. Per esempio $(0;2)$ verifica $0+6-6=0$. Questa prova controlla anche l'equazione costruita a partire dai dati.
:::

:::esempio{titolo="Quando una coordinata rimane fissa"}
Da $3x-6=0$ si ottiene $x=2$. Qualsiasi ordinata è ammessa e tutti i punti sono sulla verticale di ascissa $2$. Da $4y+8=0$ si ricava $y=-2$. In questo caso l’ascissa può variare e la retta è orizzontale. La condizione su $a$ e $b$ serve perché, se entrambi fossero zero, l’equazione sarebbe $c=0$. Se $c=0$ la verificherebbe ogni punto del piano. Se $c\ne0$ nessun punto la verificherebbe.
:::

## Retta per punti assegnati

:::teorema{#per-un-punto titolo="Una direzione e un punto"}
La retta di coefficiente $m$ passante per $P(x_0;y_0)$ ha equazione
$$
y-y_0=m(x-x_0).
$$
Per $P(2;3)$ e $m=-1$ segue $y-3=-(x-2)$, quindi $y=-x+5$.

Per due punti con ascisse diverse si calcola prima $m$ e poi si usa uno dei punti. Se due punti distinti hanno la stessa ascissa, la retta è verticale e ha quell’ascissa costante.

Due punti distinti determinano una sola retta. Se i due punti coincidono, il dato non determina una direzione e occorre un'altra informazione.

::grafico{f="-x+5" punti="2,3,pieno,P" xmin=-1 xmax=7 ymin=-2 ymax=7 titolo="La retta $y=-x+5$ passa per $(2;3)$"}
:::

:::esempio{titolo="Un’unica costruzione anche per una verticale"}
Per punti distinti $A(x_A;y_A)$ e $B(x_B;y_B)$, si può costruire una forma generale senza dividere per la differenza delle ascisse.

$$
(x_B-x_A)(y-y_A)-(y_B-y_A)(x-x_A)=0.
$$

Se $x_B\ne x_A$, dividere per $x_B-x_A$ restituisce l’equazione con la pendenza. Se $x_B=x_A$, il primo termine scompare e il secondo impone $x=x_A$, poiché $y_B-y_A\ne0$. Per $A(2;5)$ e $B(2;-1)$ il secondo fattore numerico vale $-6$, dunque si ritrova $x=2$. Sostituendo le coordinate di ciascun estremo, l’espressione a sinistra vale zero.
:::

## Parallele e perpendicolari

:::teorema{#posizioni titolo="Confronto delle direzioni"}
Due rette non verticali con lo stesso coefficiente angolare e intercette diverse sono parallele distinte. Quando coincidono sia il coefficiente angolare sia l’intercetta, le equazioni descrivono la stessa retta.

Due rette non verticali sono perpendicolari se $m_1m_2=-1$. Per esempio una perpendicolare a $y=2x+1$ ha coefficiente $-\dfrac12$. La retta orizzontale e quella verticale sono perpendicolari e vanno trattate separatamente.

Per trovare la parallela a $y=3x-2$ passante per $(1;5)$ si scrive $y-5=3(x-1)$, quindi $y=3x+2$. La condizione di parallelismo fissa la direzione e il punto fissa la posizione.
:::

::::teorema{#prodotto-pendenze titolo="Perché il prodotto vale meno uno"}
Per due rette non verticali e perpendicolari i coefficienti angolari soddisfano $m_1m_2=-1$. La relazione consente di scegliere la pendenza della perpendicolare prima di imporre il passaggio per un punto.

:::dimostrazione
L’idea è confrontare uno spostamento lungo la prima retta con lo stesso spostamento ruotato di un quarto di giro. Lungo la prima retta si può avanzare di $1$ e variare l’ordinata di $m_1$. La coppia $(1;m_1)$ diventa $(-m_1;1)$ dopo una rotazione antioraria di $90^\circ$.

Poiché la seconda retta è non verticale, si ha $m_1\ne0$. Il rapporto fra variazione verticale e orizzontale dopo la rotazione è

$$
m_2=\frac{1}{-m_1}.
$$

Moltiplicando per $m_1$ si ottiene il risultato. Viceversa, una retta con questa pendenza ha la direzione dello spostamento ruotato ed è quindi perpendicolare alla prima.
:::

::grafico{f="0.5*x;-2*x" xmin=-2.7 xmax=3.4 ymin=-2.75 ymax=3.4 uguale=1 vettori="0,0,2,1;0,0,-1,2" punti="2,1,pieno;-1,2,pieno" legenda="m_1=\dfrac12;m_2=-2" titolo="Ruotando lo spostamento $(2;1)$ di un quarto di giro si ottiene $(-1;2)$"}
::::

:::osservazione
Il prodotto delle pendenze richiede che entrambe le rette abbiano una pendenza definita. Per $x=-1$ la perpendicolare passante per $(2;4)$ è l’orizzontale $y=4$. La parallela allo stesso dato è invece $x=2$, perché deve mantenere l’ascissa costante lungo tutta la retta. Si controllano così la direzione e la coordinata del punto imposto.
:::

## Intersezioni

:::teorema{#intersezioni titolo="Il sistema delle rette"}
Le coordinate del punto comune a due rette soddisfano entrambe le equazioni. Si risolve quindi il loro sistema lineare.

Per $y=2x+1$ e $y=-x+7$ si ottiene $2x+1=-x+7$, quindi $x=2$ e $y=5$. Il punto è $(2;5)$.

Se i coefficienti angolari coincidono ma le intercette sono diverse, il sistema è impossibile e le rette sono parallele distinte. Se coincidono anche le intercette, il sistema è indeterminato.

::grafico{f="2*x+1;-x+7" punti="2,5,pieno,P" xmin=-1 xmax=5 ymin=-1 ymax=9 titolo="Le coordinate di $P$ soddisfano entrambe le equazioni"}
:::

:::esempio{#intersezioni-con-vincoli titolo="Controllare se il punto comune appartiene ai segmenti"}
Il segmento sulla prima retta $y=2x+1$ comprende le ascisse da $0$ a $2$. Sulla seconda retta $y=7-x$ il tratto considerato comprende le ascisse da $3$ a $5$. Le rette complete si incontrano in $(2;5)$. Quel punto è un estremo del primo segmento e non appartiene al secondo, perché la sua ascissa è minore di $3$. L’intersezione dei segmenti è quindi vuota. Per stabilire l’appartenenza occorrono l’equazione della retta e il vincolo sulle coordinate del tratto.
:::

## Distanza da una retta

::::teorema{#distanza-retta titolo="Lunghezza della perpendicolare"}
Per $P(x_0;y_0)$ e la retta $ax+by+c=0$, la distanza è
$$
d(P,r)=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}.
$$
Il denominatore è positivo perché $a$ e $b$ non sono entrambi nulli. Il numeratore è nullo esattamente quando il punto appartiene alla retta.

Per l'origine e $3x+4y-10=0$ si ha $d=\dfrac{10}{5}=2$. Moltiplicare tutta l'equazione della retta per uno stesso numero non nullo non cambia la distanza, perché numeratore e denominatore vengono moltiplicati per lo stesso valore assoluto.

:::dimostrazione
Uno spostamento di componenti $(b;-a)$ mantiene costante $ax+by$, perché l’aumento $ab$ si annulla con $-ab$. Uno spostamento perpendicolare si ottiene ruotando di un quarto di giro e ha componenti $(a;b)$. Il piede $H$ si può quindi scrivere $(x_0-ta;y_0-tb)$ per un valore di $t$.

$$
a(x_0-ta)+b(y_0-tb)+c=0
\quad\Longrightarrow\quad
t=\frac{ax_0+by_0+c}{a^2+b^2}.
$$

Per Pitagora, la lunghezza dello spostamento è $|t|\sqrt{a^2+b^2}$, che dà la formula. Il calcolo vale anche se una delle componenti è nulla, quindi include rette orizzontali e verticali.
:::

::grafico{f="-0.75*x+2.5" linee="0,0 1.2,1.6" punti="0,0,pieno,O;1.2,1.6,pieno,H" xmin=-1 xmax=5 ymin=-1 ymax=4 uguale=1 titolo="Il segmento $OH$ è perpendicolare alla retta e misura $2$"}
::::

:::esempio{titolo="Distanza fra due parallele"}
Per misurare la distanza tra $3x+4y=5$ e $3x+4y=15$, si può prendere qualunque punto della prima retta. In quel punto $3x+4y$ vale $5$, quindi la formula per la distanza dalla seconda dà $\dfrac{|5-15|}{\sqrt{3^2+4^2}}=2$. Il risultato vale per ogni scelta del punto. Nelle forme generali occorre prima rendere uguali i coefficienti di $x$ e $y$, così i termini costanti sono confrontati nella stessa scala.
:::

## Aree e modelli lineari

:::osservazione{#applicazioni titolo="Dai dati al grafico"}
Per un triangolo con base orizzontale si usa la lunghezza della base e la distanza verticale del terzo vertice. Per $A(0;0)$, $B(6;0)$ e $C(2;4)$, base $6$ e altezza $4$ danno area $12$.

Una tariffa con costo iniziale $q$ e costo unitario $m$ può essere descritta da $C(x)=mx+q$. Il dominio deriva dal significato di $x$, per esempio $x\ge0$ se è una distanza percorsa.

L'intersezione di due rette di costo indica la quantità per cui le tariffe coincidono. La differenza dei costi consente poi di confrontarle sui due lati dell'intersezione.
:::

:::esempio{titolo="L’altezza di un triangolo con base inclinata"}
Siano $A(0;1)$, $B(3;5)$ e $C(4;-1)$. La base $AB$ ha lunghezza $5$ e giace sulla retta $4x-3y+3=0$. La distanza di $C$ dalla retta è $\dfrac{|16+3+3|}{5}=\dfrac{22}{5}$. Questa lunghezza è l’altezza relativa ad $AB$. L’area è $\dfrac12\cdot5\cdot\dfrac{22}{5}=11$. Poiché la base è inclinata, la sola differenza di ordinate tra due vertici non restituisce l’altezza perpendicolare.
:::

:::esempio{titolo="Due tariffe e una soglia intera"}
Due tariffe per il noleggio di una bici costano $C_A(n)=5+3n$ e $C_B(n)=11+n$ euro dopo $n$ ore intere, con $n\ge 1$. La differenza di costo vale

$$
\begin{aligned}
C_A(n)-C_B(n)&=(5+3n)-(11+n)\\
&=2n-6.
\end{aligned}
$$

Per $n=3$ entrambe le tariffe costano $14$ euro. Per $n<3$ la differenza è negativa, quindi A costa meno per una o due ore. Da quattro ore in poi la differenza è positiva e B costa meno. Il grafico mostra anche valori intermedi, mentre il problema ammette ore intere.

::grafico{f="5+3*x;11+x" punti="3,14,pieno,P" nomi="n,C" legenda="C_A(n)=5+3n;C_B(n)=11+n" xmin=0 xmax=6 ymin=0 ymax=24 titolo="Le tariffe coincidono dopo 3 ore"}
:::

:::osservazione
Se la quota fissa di B diventa $12$ euro, le rette si incontrano a $n=\dfrac72$. Questa ascissa cade fra due ore intere. Per tre ore A costa $14$ euro e B ne costa $15$. Per quattro ore A costa $17$ euro e B ne costa $16$. Le due verifiche determinano da quale conteggio conviene ciascuna tariffa, anche quando la parità algebrica cade fuori dal dominio.
:::
