---
titolo: Piano cartesiano e retta
sommario: Distanze, punto medio, equazioni della retta, coefficiente angolare, parallelismo,
  perpendicolarità e intersezioni.
---

Nel piano cartesiano un punto si descrive con due numeri, le coordinate, e una retta con un'equazione; per esempio i punti $(0;1)$ e $(2;5)$ stanno sulla retta $y=2x+1$. Con le coordinate si calcolano lunghezze, punti medi, pendenze, intersezioni e distanze, fino al confronto fra due tariffe.

## Assi, quadranti e lettura dei punti

:::definizione{#lettura-coordinate titolo="Due coordinate, due direzioni"}
Il piano cartesiano è formato da due rette perpendicolari, cioè che si incontrano formando angoli retti. La retta orizzontale è l'asse $x$, o asse delle ascisse; la retta verticale è l'asse $y$, o asse delle ordinate. Il punto in cui si incontrano è l'**origine** $O(0;0)$. Ogni punto ha due coordinate, scritte fra parentesi e separate dal punto e virgola. La prima è l'**ascissa** e la seconda è l'**ordinata**.

L'ascissa si legge lungo l'asse orizzontale, con valori positivi verso destra e negativi verso sinistra. L'ordinata si legge lungo l'asse verticale, con valori positivi verso l'alto e negativi verso il basso. Per individuare $A(-3;2)$ si parte dall'origine e ci si sposta di tre unità a sinistra e due in alto.

I due assi dividono il piano in quattro **quadranti**, numerati in senso antiorario a partire da quello in alto a destra.

- Nel primo quadrante $x>0$ e $y>0$.
- Nel secondo quadrante $x<0$ e $y>0$.
- Nel terzo quadrante $x<0$ e $y<0$.
- Nel quarto quadrante $x>0$ e $y<0$.

Perciò $A$ è nel secondo quadrante e $B(2;-1)$, a destra e in basso, è nel quarto.

I segmenti che nella figura vanno da ciascun punto agli assi sono le proiezioni del punto sugli assi. Quelle di $A$ arrivano in $-3$ e in $2$, che sono le sue coordinate.

::grafico{xmin=-4.6 xmax=3.6 ymin=-2.4 ymax=3.7 uguale=1 punti="-3,2,pieno,A;2,-1,pieno,B" segmenti="-3,0,-3,2;-3,2,0,2;2,0,2,-1;0,-1,2,-1" titolo="Le proiezioni sugli assi danno le coordinate $A(-3;2)$ e $B(2;-1)$"}

Un punto sull'asse orizzontale ha ordinata zero, mentre un punto sull'asse verticale ha ascissa zero. Riflettere un punto rispetto a un asse significa prendere il punto simmetrico dall'altra parte dell'asse, alla stessa distanza. Riflettere $A$ rispetto all'asse verticale cambia soltanto il segno dell'ascissa e dà $(3;2)$. Rifletterlo rispetto all'asse orizzontale cambia soltanto il segno dell'ordinata e dà $(-3;-2)$.

Il valore assoluto di un numero è il numero preso senza segno, per esempio $|-3|=3$ e $|2|=2$. La distanza di un punto dall'asse verticale è il valore assoluto della sua ascissa, quindi $A$ dista $3$ dall'asse verticale. La distanza dall'asse orizzontale è il valore assoluto dell'ordinata, quindi $A$ dista $2$ dall'asse orizzontale.
:::

## Coordinate e segmenti

:::definizione{#coordinate titolo="Distanza e punto medio"}
Un punto generico si scrive $P(x_P;y_P)$, dove $x_P$ (si legge «x di P») è la sua ascissa e $y_P$ è la sua ordinata. Per due punti $A$ e $B$ le differenze $x_B-x_A$ e $y_B-y_A$ sono lo spostamento orizzontale e quello verticale da $A$ a $B$, e si indicano anche con $\Delta x$ e $\Delta y$ ($\Delta$ è la lettera greca delta maiuscola). Valgono
$$
AB=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2},\qquad
M\left(\frac{x_A+x_B}2;\frac{y_A+y_B}2\right).
$$
La prima formula dà la lunghezza del segmento $AB$, cioè la **distanza** fra i due punti. Il segmento $AB$ è l'ipotenusa di un triangolo rettangolo con i cateti paralleli agli assi, lunghi $|x_B-x_A|$ e $|y_B-y_A|$. Per il teorema di Pitagora il quadrato dell'ipotenusa è la somma dei quadrati dei cateti, quindi si ottiene la formula. Il valore assoluto si può omettere, perché un numero e il suo opposto hanno lo stesso quadrato.

La seconda formula dà il **punto medio** $M$, cioè il punto del segmento che sta a metà fra $A$ e $B$; $M$ è **equidistante** da $A$ e da $B$, cioè ha la stessa distanza da entrambi. Per arrivare in $M$ si percorre metà dello spostamento orizzontale e metà di quello verticale, perciò ciascuna coordinata di $M$ è la media delle coordinate degli estremi, cioè la loro somma divisa per $2$.

Per $A(1;2)$ e $B(4;6)$ si ottiene
$$
\begin{aligned}
AB&=\sqrt{(4-1)^2+(6-2)^2}=\sqrt{9+16}=\sqrt{25}=5,\\[6pt]
M&=\left(\frac{1+4}2;\frac{2+6}2\right)=\left(\frac52;4\right).
\end{aligned}
$$
Un segmento orizzontale ha gli estremi con la stessa ordinata, e la sua lunghezza è il valore assoluto della differenza delle ascisse. Un segmento verticale ha gli estremi con la stessa ascissa, e la sua lunghezza è il valore assoluto della differenza delle ordinate.

::grafico{linee="1,2 4,6;1,2 4,2 4,6" punti="1,2,pieno,A;4,6,pieno,B;2.5,4,pieno,M" xmin=0 xmax=6 ymin=0 ymax=8 uguale=1 titolo="Le differenze di coordinate danno i cateti e $M$ è il punto medio"}
:::

:::esempio{titolo="Ricostruire un estremo dal punto medio"}
Sia $M(1;3)$ il punto medio di un segmento con estremo $A(-2;5)$. Da $A$ a $M$ l'ascissa aumenta di $1-(-2)=3$ e l'ordinata diminuisce di $5-3=2$. Il punto medio divide il segmento in due parti uguali, quindi per arrivare fino a $B$ si ripete lo stesso spostamento. Si ottiene $B(1+3;3-2)$, cioè $B(4;1)$. Le medie restituiscono infatti $\dfrac{-2+4}2=1$ e $\dfrac{5+1}2=3$.

Questo procedimento funziona anche quando uno dei due spostamenti è zero. Se le ascisse di $A$ e $M$ coincidono, coincidono anche con l'ascissa di $B$.
:::

:::esempio{titolo="Una distanza assegnata può dare due punti"}
Si cerca un punto $Q(x;0)$ sull'asse orizzontale a distanza $5$ da $P(5;4)$. Lo spostamento verticale fra $Q$ e $P$ è sempre $4-0=4$, qualunque sia $x$. La formula della distanza, con entrambi i membri elevati al quadrato, dà
$$
(x-5)^2+16=25,\qquad (x-5)^2=9.
$$
I numeri che elevati al quadrato danno $9$ sono $3$ e $-3$, quindi $x-5=3$ oppure $x-5=-3$. Perciò l'ascissa di $Q$ è $8$ oppure $2$. I due punti sono alla stessa distanza da $P$ perché gli spostamenti orizzontali $3$ e $-3$ sono opposti e hanno lo stesso quadrato. Se si chiede anche $x>5$, rimane soltanto $(8;0)$.
:::

## Equazione esplicita

:::definizione{#pendenza titolo="Coefficiente angolare e intercetta"}
Una retta non verticale ha equazione $y=mx+q$, detta **forma esplicita** perché $y$ è isolata nel primo membro, cioè a sinistra dell'uguale. Un punto sta sulla retta quando le sue coordinate rendono vera l'uguaglianza. Il numero $m$ è il **coefficiente angolare**, o pendenza, cioè il rapporto fra la variazione dell'ordinata e la variazione dell'ascissa fra due punti della retta. Il numero $q$ è l'**intercetta**, cioè l'ordinata del punto in cui la retta incontra l'asse verticale, perché per $x=0$ si ha $y=m\cdot0+q=q$.

Per due punti con ascisse diverse,
$$
m=\frac{y_B-y_A}{x_B-x_A}.
$$
Per $A(0;1)$ e $B(2;5)$ risulta $m=\dfrac{5-1}{2-0}=\dfrac42=2$. Il punto $A$ ha ascissa $0$, quindi sta sull'asse verticale e $q=1$. La retta è perciò $y=2x+1$. Quando $x$ aumenta di uno, $y$ aumenta di due.

Una retta è crescente se sale andando verso destra e decrescente se scende.

- Per $m>0$ la retta è crescente.
- Per $m<0$ la retta è decrescente.
- Per $m=0$ la retta è orizzontale e ha equazione $y=q$.

I punti di una retta verticale hanno tutti la stessa ascissa $k$, quindi la retta ha equazione $x=k$. Fra due suoi punti la variazione dell'ascissa è zero e il rapporto non si può calcolare, perciò la retta verticale non ha coefficiente angolare.

Nella figura $y=2x+1$ sale e $y=-x+1$ scende; entrambe passano per $(0;1)$, perché hanno intercetta $1$.

::grafico{f="2*x+1;-x+1" xmin=-3 xmax=4 ymin=-4 ymax=7 titolo="Rette crescente e decrescente con la stessa intercetta"}
:::

::::teorema{#pendenza-costante titolo="La variazione verticale per unità orizzontale è costante"}
Sulla retta $y=mx+q$, per due punti distinti qualsiasi il rapporto fra la variazione dell'ordinata e la variazione dell'ascissa vale sempre $m$. L'intercetta $q$ fissa la quota, cioè l'ordinata, del punto della retta sull'asse verticale, e si elimina quando si sottraggono le ordinate di due punti.

:::dimostrazione
Siano $A$ e $B$ due punti distinti della retta. Le loro coordinate verificano l'equazione, quindi $y_A=mx_A+q$ e $y_B=mx_B+q$. Sottraendo la prima uguaglianza dalla seconda, $q$ si elimina e, raccogliendo $m$, si ottiene
$$
y_B-y_A=mx_B+q-mx_A-q=m(x_B-x_A).
$$
Le ascisse di $A$ e $B$ sono diverse, perché l'equazione assegna una sola ordinata a ciascuna ascissa e due punti della retta con la stessa ascissa coinciderebbero. Si può quindi dividere per $x_B-x_A$, e si ottiene $\dfrac{y_B-y_A}{x_B-x_A}=m$. Il rapporto vale anche percorrendo la retta da $B$ ad $A$, perché numeratore e denominatore cambiano entrambi segno.
:::
::::

:::esempio{titolo="La pendenza con una variazione negativa"}
Sulla retta per $A(-2;4)$ e $B(2;2)$, andando da $A$ a $B$ l'ascissa aumenta di $4$ e l'ordinata diminuisce di $2$. Il rapporto è

$$
m=\frac{2-4}{2-(-2)}=\frac{-2}{4}=-\frac12.
$$

La retta scende quindi di una unità ogni due unità verso destra. Il punto $M$ della figura ha ascissa $0$, a metà fra $-2$ e $2$; da $A$ si avanza di $2$ e si scende di $1$, quindi a $x=0$ corrisponde $y=3$. Se si parte da $B$, entrambe le differenze cambiano segno e il rapporto resta uguale, perché $\dfrac{4-2}{-2-2}=-\dfrac12$.

::grafico{f="-0.5*x+3" punti="-2,4,pieno,A;2,2,pieno,B;0,3,pieno,M" linee="-2,4 2,4 2,2" xmin=-4 xmax=4 ymin=0 ymax=6 uguale=1 titolo="Da A a B la retta avanza di 4 e scende di 2"}
:::

:::osservazione
L'intercetta si legge ponendo $x=0$, mentre la pendenza si misura confrontando due punti. Le rette $y=2x+1$ e $y=-x+1$ hanno in comune il punto $(0;1)$. Un passo di un'unità verso destra porta alla quota $2\cdot1+1=3$ sulla prima retta e $-1+1=0$ sulla seconda. Due rette con la stessa pendenza possono invece avere intercette diverse. In questo caso a ogni passo verso destra si aggiunge la stessa variazione di ordinata, ma a partire da valori iniziali diversi.
:::

## Forma generale

:::teorema{#generale titolo="Equazioni implicite e appartenenza"}
Ogni retta, anche verticale, si può scrivere nella **forma implicita**, o generale, $ax+by+c=0$. I numeri $a$ e $b$ sono i coefficienti di $x$ e di $y$, e almeno uno dei due è diverso da zero. Il numero $c$, che non moltiplica nessuna lettera, è il **termine noto**.

- Se $b\ne0$, si porta $ax+c$ nel secondo membro e si divide per $b$, ottenendo $y=-\dfrac abx-\dfrac cb$.
- Se $b=0$, l'equazione diventa $ax+c=0$, cioè $x=-\dfrac ca$, e la retta è verticale.

Per $2x+3y-6=0$ si ha
$$
\begin{aligned}
3y&=-2x+6,\\
y&=-\frac23x+2.
\end{aligned}
$$
Le intersezioni con gli assi sono $(3;0)$ e $(0;2)$. Si trovano ponendo $y=0$, che dà $2x-6=0$, e $x=0$, che dà $3y-6=0$.

Un punto appartiene alla retta quando, sostituendo le sue coordinate, si ottiene un'uguaglianza vera. Per esempio $(0;2)$ dà $2\cdot0+3\cdot2-6=0$, che è vera. Questa prova controlla anche l'equazione costruita a partire dai dati.

Moltiplicando tutti i termini per uno stesso numero diverso da zero si ottiene un'equazione **equivalente**, cioè vera per gli stessi punti, quindi della stessa retta; per esempio $2x+3y-6=0$ moltiplicata per $-2$ diventa $-4x-6y+12=0$. Per indicare che due equazioni sono equivalenti si usa il simbolo $\Longleftrightarrow$, che si legge «equivale a».
:::

:::esempio{titolo="Quando una coordinata rimane fissa"}
Da $3x-6=0$ si ottiene $x=2$. L'ordinata non compare, quindi può avere qualsiasi valore, e tutti i punti stanno sulla verticale di ascissa $2$. Da $4y+8=0$ si ricava $y=-2$; in questo caso l'ascissa può variare e la retta è orizzontale.

La condizione su $a$ e $b$ serve perché, se entrambi fossero zero, l'equazione diventerebbe $c=0$, che non contiene né $x$ né $y$.

- Se $c=0$, l'uguaglianza $0=0$ è verificata da ogni punto del piano.
- Se $c\ne0$, nessun punto la verifica.
:::

## Retta per punti assegnati

:::teorema{#per-un-punto titolo="Una direzione e un punto"}
La retta di coefficiente angolare $m$ passante per $P(x_0;y_0)$ ha equazione
$$
y-y_0=m(x-x_0).
$$
Qui $x_0$ e $y_0$ (si leggono «x zero» e «y zero») sono le coordinate del punto assegnato, mentre $x$ e $y$ sono le coordinate di un punto qualsiasi della retta. Per ogni punto $(x;y)$ della retta diverso da $P$ il rapporto delle variazioni è $m$, cioè $\dfrac{y-y_0}{x-x_0}=m$. Moltiplicando entrambi i membri per $x-x_0$ si ottiene l'equazione, che è verificata anche da $P$ perché dà $0=0$.

Per $P(2;3)$ e $m=-1$ segue $y-3=-(x-2)$, cioè $y-3=-x+2$, quindi $y=-x+5$, la retta della figura.

Per due punti con ascisse diverse si calcola prima $m$ con la formula del coefficiente angolare e poi si usa uno dei due punti al posto di $P$. Se due punti distinti hanno la stessa ascissa, la retta è verticale e quell'ascissa resta costante.

Due punti distinti determinano una sola retta. Se i due punti coincidono, il dato non determina una direzione, perché per un punto passano infinite rette, e occorre un'altra informazione.

::grafico{f="-x+5" punti="2,3,pieno,P" xmin=-1 xmax=7 ymin=-2 ymax=7 titolo="La retta $y=-x+5$ passa per $(2;3)$"}
:::

:::esempio{titolo="Un’unica costruzione anche per una verticale"}
Per due punti distinti $A(x_A;y_A)$ e $B(x_B;y_B)$ si può scrivere un'equazione in forma generale senza dividere per la differenza delle ascisse, e quindi valida anche quando le ascisse sono uguali.

$$
(x_B-x_A)(y-y_A)-(y_B-y_A)(x-x_A)=0.
$$

- Se $x_B\ne x_A$, dividendo per $x_B-x_A$ si ritrova $y-y_A=m(x-x_A)$ con $m=\dfrac{y_B-y_A}{x_B-x_A}$.
- Se $x_B=x_A$, il primo termine è zero, perché contiene il fattore $x_B-x_A=0$. Resta $-(y_B-y_A)(x-x_A)=0$. Poiché i punti sono distinti, $y_B-y_A\ne0$, quindi deve essere $x-x_A=0$, cioè $x=x_A$.

Per $A(2;5)$ e $B(2;-1)$ il primo fattore numerico vale $2-2=0$ e il secondo vale $-1-5=-6$. L'equazione diventa $6(x-2)=0$, dunque si ritrova $x=2$. Sostituendo le coordinate di ciascun estremo, l'espressione a sinistra vale zero, perché in entrambi i punti $x-2=0$.
:::

## Parallele e perpendicolari

:::teorema{#posizioni titolo="Confronto delle direzioni"}
Due rette sono **parallele** se hanno la stessa direzione. Per due rette non verticali si confrontano coefficienti angolari e intercette.

- Con lo stesso coefficiente angolare e intercette diverse, le rette sono parallele distinte e non hanno punti in comune.
- Con lo stesso coefficiente angolare e la stessa intercetta, le equazioni descrivono la stessa retta, e le rette si dicono coincidenti.
- Con coefficienti angolari diversi, le rette hanno un solo punto in comune e si dicono incidenti.

Due rette sono **perpendicolari** se si incontrano formando angoli retti. Due rette non verticali, con coefficienti angolari $m_1$ e $m_2$, sono perpendicolari se il prodotto $m_1m_2$ vale $-1$. Quindi il coefficiente della perpendicolare è l'**opposto del reciproco** di quello dato, cioè si scambiano numeratore e denominatore e si cambia il segno. Per esempio una perpendicolare a $y=2x+1$ ha coefficiente $-\dfrac12$, e infatti $2\cdot\left(-\dfrac12\right)=-1$. Una retta orizzontale e una verticale sono perpendicolari, ma la verticale non ha coefficiente angolare, quindi questo caso va trattato separatamente.

Per trovare la parallela a $y=3x-2$ passante per $(1;5)$ si tiene il coefficiente $3$ e si usa la formula della retta per un punto. Si ottiene $y-5=3(x-1)$, cioè $y=3x-3+5$, quindi $y=3x+2$. La condizione di parallelismo fissa la direzione e il punto fissa la posizione.
:::

::::teorema{#prodotto-pendenze titolo="Perché il prodotto vale meno uno"}
Per due rette non verticali e perpendicolari i coefficienti angolari soddisfano $m_1m_2=-1$. La relazione dà la pendenza della perpendicolare prima di imporre il punto.

:::dimostrazione
L'idea è confrontare uno spostamento lungo la prima retta con lo stesso spostamento ruotato di un quarto di giro ($90^\circ$). Uno spostamento si scrive come coppia $(u;v)$, con $u$ unità in orizzontale e $v$ in verticale. Ruotandolo di $90^\circ$ in senso antiorario, cioè nel verso opposto a quello delle lancette dell'orologio, si ottiene lo spostamento $(-v;u)$. Per esempio $(2;1)$ diventa $(-1;2)$.

Lungo la prima retta si può avanzare di $1$ in orizzontale, e allora l'ordinata varia di $m_1$. Lo spostamento è quindi $(1;m_1)$, che dopo la rotazione diventa $(-m_1;1)$. Questo spostamento ruotato è perpendicolare al primo, quindi è uno spostamento lungo la seconda retta.

Poiché la seconda retta non è verticale, la variazione orizzontale $-m_1$ non è zero, quindi $m_1\ne0$. Il rapporto fra variazione verticale e orizzontale dopo la rotazione è

$$
m_2=\frac{1}{-m_1}.
$$

Moltiplicando entrambi i membri per $m_1$ si ottiene $m_1m_2=-1$. Viceversa, una retta con questa pendenza ha la direzione dello spostamento ruotato ed è quindi perpendicolare alla prima.
:::

Nella figura la retta $y=\dfrac12x$ contiene lo spostamento $(2;1)$ e la retta $y=-2x$ contiene lo spostamento ruotato $(-1;2)$.

::grafico{f="0.5*x;-2*x" xmin=-2.7 xmax=3.4 ymin=-2.75 ymax=3.4 uguale=1 vettori="0,0,2,1;0,0,-1,2" punti="2,1,pieno;-1,2,pieno" legenda="m_1=\dfrac12;m_2=-2" titolo="Ruotando lo spostamento $(2;1)$ di un quarto di giro si ottiene $(-1;2)$"}
::::

:::osservazione
Il prodotto delle pendenze si usa solo quando entrambe le rette hanno una pendenza. Per la retta verticale $x=-1$, la perpendicolare passante per $(2;4)$ è orizzontale e mantiene l'ordinata del punto, quindi è $y=4$. La parallela passante per lo stesso punto è invece verticale e deve mantenere l'ascissa costante lungo tutta la retta, quindi è $x=2$. In entrambi i casi si controllano la direzione e la coordinata del punto imposto.
:::

## Intersezioni

:::teorema{#intersezioni titolo="Il sistema delle rette"}
Il **punto di intersezione** di due rette sta su entrambe, quindi le sue coordinate soddisfano entrambe le equazioni. Si risolve perciò il sistema delle due equazioni, cioè si cercano $x$ e $y$ che le rendono vere insieme.

Per $y=2x+1$ e $y=-x+7$ il sistema è
$$
\begin{cases}
y=2x+1\\
y=-x+7.
\end{cases}
$$
Nel punto comune le due espressioni di $y$ sono uguali, quindi $2x+1=-x+7$, da cui $3x=6$ e $x=2$. Sostituendo in $y=2x+1$ si ottiene $y=5$. Il punto è $P(2;5)$ della figura.

Se i coefficienti angolari coincidono ma le intercette sono diverse, il sistema è **impossibile**, cioè non ha soluzioni, e le rette sono parallele distinte. Se coincidono anche le intercette, il sistema è **indeterminato**, cioè ha infinite soluzioni, perché le due equazioni descrivono la stessa retta.

::grafico{f="2*x+1;-x+7" punti="2,5,pieno,P" xmin=-1 xmax=5 ymin=-1 ymax=9 titolo="Le coordinate di $P$ soddisfano entrambe le equazioni"}
:::

:::esempio{#intersezioni-con-vincoli titolo="Controllare se il punto comune appartiene ai segmenti"}
Sulla prima retta $y=2x+1$ si considera il segmento dei punti con ascissa da $0$ a $2$, cioè $0\le x\le2$. Sulla seconda retta $y=7-x$ si considera il segmento dei punti con $3\le x\le5$. Le rette complete si incontrano in $(2;5)$, perché $7-x$ e $-x+7$ sono la stessa espressione. Il punto $(2;5)$ ha ascissa $2$, quindi è un estremo del primo segmento. Non appartiene invece al secondo, perché la sua ascissa è minore di $3$. L'unico punto comune alle due rette non sta su entrambi i segmenti, quindi l'intersezione dei segmenti è vuota. Per l'appartenenza a un segmento servono perciò l'equazione della retta e il vincolo sulle coordinate del tratto.
:::

## Distanza da una retta

::::teorema{#distanza-retta titolo="Lunghezza della perpendicolare"}
La distanza di un punto $P$ da una retta $r$, indicata con $d(P,r)$, è la lunghezza del segmento che va da $P$ alla retta perpendicolarmente a essa. Il punto $H$ in cui questo segmento incontra la retta è il **piede** della perpendicolare, ed è il punto della retta più vicino a $P$. Per $P(x_0;y_0)$ e la retta $ax+by+c=0$ la distanza è
$$
d(P,r)=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}.
$$
Il denominatore è positivo perché $a$ e $b$ non sono entrambi nulli. Il numeratore è nullo esattamente quando il punto appartiene alla retta.

Per l'origine e la retta $3x+4y-10=0$ si ha
$$
d=\frac{|3\cdot0+4\cdot0-10|}{\sqrt{3^2+4^2}}=\frac{|-10|}{\sqrt{25}}=\frac{10}{5}=2.
$$
Moltiplicare tutta l'equazione della retta per uno stesso numero $k$ non nullo non cambia la distanza. Il numeratore viene infatti moltiplicato per $|k|$ e il denominatore per $\sqrt{k^2}=|k|$, cioè per lo stesso valore assoluto.

:::dimostrazione
Uno spostamento di componenti $(b;-a)$ lascia invariato il valore di $ax+by$, perché questo valore cambia di $a\cdot b+b\cdot(-a)=ab-ab=0$. Quindi $(b;-a)$ è uno spostamento lungo la retta. Ruotandolo di un quarto di giro con la regola $(u;v)\to(-v;u)$ si ottiene $(a;b)$, che è perciò uno spostamento perpendicolare alla retta. Il piede $H$ si raggiunge da $P$ con un multiplo di questo spostamento, quindi si può scrivere $H(x_0-ta;y_0-tb)$ per un opportuno numero $t$. Poiché $H$ sta sulla retta, le sue coordinate verificano l'equazione.

$$
\begin{aligned}
a(x_0-ta)+b(y_0-tb)+c&=0,\\
ax_0+by_0+c-t(a^2+b^2)&=0,\\
t&=\frac{ax_0+by_0+c}{a^2+b^2}.
\end{aligned}
$$

Lo spostamento da $P$ ad $H$ ha componenti $-ta$ e $-tb$, quindi per il teorema di Pitagora la sua lunghezza è
$$
PH=\sqrt{t^2a^2+t^2b^2}=|t|\sqrt{a^2+b^2}.
$$
Sostituendo il valore di $t$, e poiché $a^2+b^2=\left(\sqrt{a^2+b^2}\right)^2$, si ottiene
$$
PH=\frac{|ax_0+by_0+c|}{a^2+b^2}\,\sqrt{a^2+b^2}=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}.
$$
Il calcolo vale anche se una delle componenti è nulla, quindi include le rette orizzontali e verticali.
:::

Nella figura la retta $3x+4y-10=0$, cioè $y=-\dfrac34x+\dfrac52$, ha piede della perpendicolare da $O$ in $H(1{,}2;1{,}6)$, e $OH=2$.

::grafico{f="-0.75*x+2.5" linee="0,0 1.2,1.6" punti="0,0,pieno,O;1.2,1.6,pieno,H" xmin=-1 xmax=5 ymin=-1 ymax=4 uguale=1 titolo="Il segmento $OH$ è perpendicolare alla retta e misura $2$"}
::::

:::esempio{titolo="Distanza fra due parallele"}
Due rette parallele sono alla stessa distanza in ogni loro punto, quindi la distanza fra le rette è la distanza di un punto qualsiasi della prima dalla seconda. Per $3x+4y=5$ e $3x+4y=15$, in ogni punto della prima retta $3x+4y$ vale $5$, quindi la formula della distanza dalla seconda dà
$$
d=\frac{|5-15|}{\sqrt{3^2+4^2}}=\frac{10}{5}=2.
$$
Nelle forme generali occorre prima rendere uguali i coefficienti di $x$ e $y$, così i termini noti sono confrontati nella stessa scala; per esempio $6x+8y-12=0$ divisa per $2$ diventa $3x+4y-6=0$.
:::

## Aree e modelli lineari

:::osservazione{#applicazioni titolo="Dai dati al grafico"}
In un triangolo con base orizzontale la base è la distanza fra i due vertici che hanno la stessa ordinata, e l'altezza è la distanza verticale del terzo vertice dalla retta della base. Per $A(0;0)$, $B(6;0)$ e $C(2;4)$ la base $AB$ misura $6$ e l'altezza è l'ordinata $4$ di $C$, quindi l'area è $\dfrac{6\cdot4}{2}=12$.

Una tariffa con un costo iniziale fisso $q$ e un costo $m$ per ogni unità è descritta da $C(x)=mx+q$. La scrittura $C(x)$ si legge «C di x» e indica il costo per la quantità $x$. Il suo grafico è una retta con pendenza $m$ e intercetta $q$. Il **dominio**, cioè l'insieme dei valori ammessi per $x$, dipende dal significato di $x$: per esempio $x\ge0$ se $x$ è una distanza percorsa.

L'intersezione di due rette di costo dà la quantità per cui le tariffe costano uguale; il segno della differenza dei costi indica quale costa meno prima e dopo.
:::

:::esempio{titolo="L’altezza di un triangolo con base inclinata"}
Siano $A(0;1)$, $B(3;5)$ e $C(4;-1)$. La base $AB$ ha lunghezza $\sqrt{3^2+4^2}=5$. La retta $AB$ ha pendenza $\dfrac{5-1}{3-0}=\dfrac43$ e intercetta $1$, quindi è $y=\dfrac43x+1$. Moltiplicando per $3$ e portando tutti i termini nel primo membro si ottiene $4x-3y+3=0$. L'altezza relativa ad $AB$ è la distanza di $C$ da questa retta:
$$
d=\frac{|4\cdot4-3\cdot(-1)+3|}{\sqrt{4^2+(-3)^2}}=\frac{|16+3+3|}{5}=\frac{22}{5}.
$$
L'area è $\dfrac12\cdot5\cdot\dfrac{22}{5}=11$. Poiché la base è inclinata, la sola differenza di ordinate tra due vertici non dà l'altezza, che è perpendicolare alla base.
:::

:::esempio{titolo="Due tariffe e una soglia intera"}
Due tariffe per il noleggio di una bici costano $C_A(n)=5+3n$ e $C_B(n)=11+n$ euro dopo $n$ ore intere, con $n\ge 1$. La differenza di costo vale

$$
\begin{aligned}
C_A(n)-C_B(n)&=(5+3n)-(11+n)\\
&=2n-6.
\end{aligned}
$$

La differenza è zero quando $2n-6=0$, cioè per $n=3$, e infatti entrambe le tariffe costano $14$ euro. Per $n<3$ la differenza è negativa, quindi A costa meno per una o due ore. Per $n>3$ la differenza è positiva, quindi da quattro ore in poi B costa meno. Nel grafico, con le ore $n$ in orizzontale e il costo $C$ in verticale, le rette si incontrano in $P(3;14)$. Il grafico mostra anche valori intermedi, mentre il problema ammette ore intere.

::grafico{f="5+3*x;11+x" punti="3,14,pieno,P" nomi="n,C" legenda="C_A(n)=5+3n;C_B(n)=11+n" xmin=0 xmax=6 ymin=0 ymax=24 titolo="Le tariffe coincidono dopo 3 ore"}
:::

:::osservazione
Se la quota fissa di B diventa $12$ euro, cioè $C_B(n)=12+n$, le rette si incontrano dove $5+3n=12+n$, quindi $2n=7$ e $n=\dfrac72$. Questa ascissa non è intera, quindi si confrontano i due interi vicini.

- Per tre ore A costa $5+9=14$ euro e B ne costa $12+3=15$.
- Per quattro ore A costa $5+12=17$ euro e B ne costa $12+4=16$.

Le due verifiche stabiliscono da quale numero di ore ciascuna tariffa costa meno, anche quando la parità trovata con l'algebra cade fuori dal dominio.
:::
