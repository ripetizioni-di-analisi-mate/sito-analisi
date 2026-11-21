---
titolo: "Circonferenza, cerchio e poligoni"
sommario: "Corde, angoli, tangenti, poligoni regolari, archi e aree con dimostrazioni e problemi inversi."
---

## Circonferenza e cerchio

:::definizione{#definizione titolo="Il ruolo della distanza dal centro"}

Si fissano un punto $O$, il **centro**, e una lunghezza $r>0$, il **raggio**. La **circonferenza** è la linea formata da tutti i punti $P$ che distano dal centro esattamente $r$, cioè per cui $OP=r$. Il **cerchio** è la parte di piano racchiusa dalla circonferenza, bordo compreso, quindi è formato dai punti per cui $OP\le r$.

Rispetto alla circonferenza un punto $P$ si trova in una di queste tre posizioni.

- È **interno** se $OP<r$.
- Sta **sulla circonferenza** se $OP=r$.
- È **esterno** se $OP>r$.

Per esempio, con $r=6$ cm un punto a $5$ cm dal centro è interno, uno a $6$ cm sta sulla circonferenza e uno a $7$ cm è esterno. Il punto a $6$ cm appartiene sia alla circonferenza sia al cerchio. In questo capitolo si calcolano la lunghezza della circonferenza e l'area del cerchio.

Si chiamano raggio anche i segmenti che uniscono il centro a un punto della circonferenza; tutti misurano $r$. Una **corda** è un segmento che unisce due punti distinti della circonferenza. Una corda che passa per il centro è un **diametro** e misura $2r$, perché il centro sta fra i suoi due estremi e ciascuna metà è un raggio. Gli estremi di una corda dividono la circonferenza in due **archi**, cioè due tratti di circonferenza. Se le due parti sono diverse, la più corta si chiama arco minore e la più lunga arco maggiore. Un diametro divide la circonferenza in due archi uguali, detti **semicirconferenze**.

In figura $AB$ è un diametro e $OP$ è un raggio. Il punto $Q$ è interno e il punto $S$ è esterno.

::grafico{assi=0 uguale=1 xmin=-4.1 xmax=4.5 ymin=-3.75 ymax=3.75 curve="3*cos(t),3*sin(t),0.000000000000,6.283185307180" linee="-3,0 3,0;0,0 0,-3" punti="0,0;-3,0;3,0;0,-3;1,1.2;3.55,1.4" etichette="-0.28,0.36,O;-3.32,-0.25,A;3.34,-0.26,B;0,-3.43,P;1.25,1.5,Q;3.76,1.7,S" titolo="$P$ è sulla circonferenza, $Q$ è interno e $S$ esterno"}

:::

## Corde e distanze

::::teorema{#corde titolo="La perpendicolare dal centro"}

Si traccia dal centro $O$ la perpendicolare alla retta di una corda $AB$, cioè la retta che la incontra formando un angolo retto. Il punto $H$ in cui la incontra si chiama **piede** della perpendicolare, e la lunghezza $d=OH$ è la **distanza** della corda dal centro.

Il piede $H$ è il **punto medio** della corda, quindi $AH=HB$. Se $0\le d<r$, la corda è lunga

$$
AB=2\sqrt{r^2-d^2}.
$$

Nella figura $r=5$, $d=3$ e la mezza corda $AH$ misura $\sqrt{5^2-3^2}=\sqrt{16}=4$, quindi $AB=8$.

:::dimostrazione

La dimostrazione usa il **teorema di Pitagora**. In un triangolo rettangolo il lato opposto all'angolo retto si chiama ipotenusa e gli altri due lati si chiamano cateti. Il quadrato dell'ipotenusa è uguale alla somma dei quadrati dei cateti.

Se la corda passa per $O$, il piede è $H=O$ e la corda è un diametro, quindi $AB=2r$. La formula dà lo stesso valore, perché con $d=0$ si ottiene $2\sqrt{r^2}=2r$.

Negli altri casi i triangoli $OHA$ e $OHB$ sono rettangoli in $H$. Le loro ipotenuse sono i raggi $OA$ e $OB$. Per il teorema di Pitagora

$$
\begin{aligned}
AH^2&=OA^2-OH^2=r^2-d^2,\\[6pt]
BH^2&=OB^2-OH^2=r^2-d^2.
\end{aligned}
$$

I due secondi membri sono uguali, quindi $AH=BH=\sqrt{r^2-d^2}$. Il punto $H$ sta sulla retta $AB$ ed è alla stessa distanza da $A$ e da $B$, perciò è il punto medio della corda. Allora $AB=2AH=2\sqrt{r^2-d^2}$.

Vale anche il viceversa. Sia $H$ il punto medio di una corda che non passa per $O$. I triangoli $OHA$ e $OHB$ hanno $OA=OB$ (raggi), $AH=HB$ ($H$ è il punto medio) e il lato $OH$ in comune. Due triangoli con i tre lati rispettivamente congruenti, cioè lunghi uguali, sono congruenti, cioè sovrapponibili (terzo criterio di congruenza). Quindi gli angoli $\widehat{OHA}$ e $\widehat{OHB}$ sono uguali. Questi due angoli insieme formano un angolo piatto, che misura $180^\circ$, perciò ciascuno misura $90^\circ$ e $OH$ è perpendicolare alla corda.

:::

::grafico{assi=0 uguale=1 xmin=-5.7 xmax=5.7 ymin=-5.5 ymax=5.7 curve="5*cos(t),5*sin(t),0.000000000000,6.283185307180" linee="-4,3 4,3;0,0 0,3;0,0 4,3;0,2.7 0.3,2.7 0.3,3" punti="0,0;-4,3;4,3;0,3" etichette="-0.42,-0.32,O;-4.24,3.42,A;4.25,3.42,B;0,3.43,H;2.16,1.35,5;-0.38,1.44,3;2.05,3.4,4" titolo="Il raggio, la distanza $OH$ e la mezza corda formano un triangolo rettangolo"}

::::

:::esempio{titolo="Leggere la formula anche al contrario"}

La formula collega tre lunghezze: raggio, distanza dal centro e corda. Conoscendone due si ricava la terza.

Nella stessa circonferenza il raggio $r$ è fisso. Due corde con la stessa lunghezza hanno quindi la stessa distanza dal centro. Se la distanza $d$ aumenta, il numero $r^2-d^2$ sotto la radice diminuisce, perciò la corda è più corta. La corda più lunga è il diametro, che ha $d=0$. Con $d=r$ la retta tocca la circonferenza in un solo punto, quindi i due estremi della corda coincidono e la corda non esiste più.

Una corda lunga $16$ cm sta in una circonferenza di raggio $10$ cm. Si cerca la sua distanza dal centro. Il triangolo rettangolo ha per ipotenusa il raggio e per cateto la metà della corda:

$$
\begin{aligned}
AH&=\frac{16}{2}=8\,\mathrm{cm},\\[6pt]
d&=\sqrt{10^2-8^2}=\sqrt{100-64}=\sqrt{36}=6\,\mathrm{cm}.
\end{aligned}
$$

:::

:::attenzione

Il cateto del triangolo rettangolo è la metà della corda. Usando l'intera corda di $16$ cm si otterrebbe $10^2-16^2=100-256=-156$, un numero negativo sotto la radice, che non dà nessuna lunghezza.

:::

## Angoli che insistono su un arco

::::teorema{#angoli titolo="Angolo al centro e alla circonferenza"}

Un **angolo al centro** ha il vertice nel centro $O$ e i lati lungo due raggi. La parte di cerchio compresa fra i due raggi si chiama **settore circolare**, e il suo bordo curvo è un arco. L'ampiezza dell'arco è, per definizione, l'ampiezza dell'angolo al centro corrispondente. L'arco può anche superare una semicirconferenza. In quel caso l'angolo al centro supera $180^\circ$ e si dice **concavo**.

Un **angolo alla circonferenza** ha il vertice $C$ sulla circonferenza, e i suoi due lati incontrano di nuovo la circonferenza in due punti distinti $A$ e $B$. Si dice che l'angolo **insiste** sull'arco fra $A$ e $B$ che non contiene $C$ (oppure che intercetta quell'arco).

L'angolo alla circonferenza $\widehat{ACB}$ misura la metà dell'angolo al centro che insiste sullo stesso arco:

$$
\widehat{ACB}=\frac{\widehat{AOB}}{2}.
$$

Per esempio, un arco di $100^\circ$ corrisponde a un angolo alla circonferenza di $\dfrac{100^\circ}{2}=50^\circ$. Al contrario, un angolo alla circonferenza di $20^\circ$ insiste su un arco di $2\cdot20^\circ=40^\circ$. I due estremi di una corda individuano due archi con ampiezze diverse, perciò la stessa corda può dare due angoli alla circonferenza diversi.

:::dimostrazione

Si traccia il diametro che parte da $C$ e si chiama $D$ il suo secondo estremo. Ci sono tre casi, secondo la posizione del diametro $CD$ rispetto all'angolo.

*Primo caso: un lato dell'angolo sta sul diametro* (prima figura). Si chiama $A$ l'estremo dell'altro lato. Il triangolo $OCA$ è isoscele, cioè ha due lati uguali, perché $OC$ e $OA$ sono raggi. In un triangolo isoscele gli angoli alla base sono uguali, quindi $\widehat{CAO}=\widehat{OCA}=\widehat{ACD}$. L'angolo $\widehat{AOD}$ è un **angolo esterno** del triangolo, cioè l'angolo formato da un lato e dal prolungamento del lato vicino. Un angolo esterno di un triangolo è uguale alla somma dei due angoli interni non adiacenti, perciò

$$
\widehat{AOD}=\widehat{OCA}+\widehat{CAO}=2\,\widehat{ACD}.
$$

L'angolo al centro è quindi il doppio dell'angolo alla circonferenza.

*Secondo caso: il diametro è interno all'angolo* (seconda figura). Il diametro $CD$ divide $\widehat{ACB}$ nei due angoli $\widehat{ACD}$ e $\widehat{DCB}$, e divide nel punto $D$ anche l'arco intercettato in due archi. Per il primo caso ciascuno dei due archi ha ampiezza doppia dell'angolo corrispondente. Sommando, l'arco intero ha ampiezza doppia di $\widehat{ACD}+\widehat{DCB}=\widehat{ACB}$.

*Terzo caso: il diametro è esterno all'angolo* (terza figura). L'angolo $\widehat{ACB}$ è la differenza fra $\widehat{ACD}$ e $\widehat{BCD}$, il maggiore meno il minore. Anche l'arco intercettato è la differenza fra i due archi che non contengono $C$, perché uno è contenuto nell'altro. Per il primo caso ogni arco è il doppio del suo angolo, quindi anche la differenza degli archi è il doppio della differenza degli angoli.

:::

::grafico{assi=0 uguale=1 xmin=-3.8 xmax=3.8 ymin=-3.6 ymax=3.65 curve="3*cos(t),3*sin(t),0.000000000000,6.283185307180" linee="-3,0 3,0;-3,0 1.5,2.598076 0,0" punti="-3,0;0,0;3,0;1.5,2.598076" etichette="-3.35,-0.28,C;0,-0.39,O;3.32,-0.28,D;1.67,2.89,A" titolo="Con un lato sul diametro si usa l’angolo esterno in $O$"}

::grafico{assi=0 uguale=1 xmin=-3.8 xmax=3.8 ymin=-3.8 ymax=3.6 curve="3*cos(t),3*sin(t),0.000000000000,6.283185307180" linee="-3,0 1.5,2.598076; -3,0 0,-3;0,0 1.5,2.598076;0,0 0,-3" segmenti="-3,0,3,0" punti="-3,0;0,0;3,0;1.5,2.598076;0,-3" etichette="-3.36,-0.22,C;0.29,-0.28,O;3.35,-0.24,D;1.71,2.91,A;0,-3.39,B" titolo="Il diametro è interno all’angolo e divide in due l’arco intercettato"}

::grafico{assi=0 uguale=1 xmin=-3.8 xmax=3.8 ymin=-3.6 ymax=3.6 curve="3*cos(t),3*sin(t),0.000000000000,6.283185307180" linee="-3,0 1.5,2.598076;-3,0 -1.5,2.598076;1.5,2.598076 0,0 -1.5,2.598076" segmenti="-3,0,3,0" punti="-3,0;0,0;3,0;1.5,2.598076;-1.5,2.598076" etichette="-3.34,-0.27,C;0,-0.4,O;3.3,-0.25,D;1.63,2.93,A;-1.65,2.93,B" titolo="Il diametro è esterno all’angolo e si sottraggono due ampiezze"}

::::

:::esempio{titolo="La stessa corda da lati diversi"}

La corda $AB$ divide la circonferenza in un arco minore di $90^\circ$ e in un arco maggiore di $360^\circ-90^\circ=270^\circ$. In figura $C$ sta sull'arco maggiore e $D$ sull'arco minore. Ogni angolo insiste sull'arco che non contiene il suo vertice:

$$
\begin{aligned}
\widehat{ACB}&=\frac{90^\circ}{2}=45^\circ,\\[6pt]
\widehat{ADB}&=\frac{270^\circ}{2}=135^\circ.
\end{aligned}
$$

Le due ampiezze sommano $180^\circ$, perché i due archi insieme formano l'intera circonferenza. Se il vertice si sposta lungo lo stesso arco, l'arco intercettato resta lo stesso e quindi l'angolo alla circonferenza resta uguale.

::grafico{assi=0 uguale=1 xmin=-4.7 xmax=4.7 ymin=-4.45 ymax=4.82 curve="4*cos(t),4*sin(t),0.000000000000,6.283185307180" linee="4,0 0,4;-4,0 0,4;-4,0 4,0;4,0 2.828427,2.828427 0,4" punti="4,0;0,4;-4,0;2.828427,2.828427" etichette="4.31,-0.28,A;0,4.46,B;-4.32,-0.29,C;3.12,3.12,D" titolo="$C$ e $D$ vedono archi diversi della corda $AB$"}

:::

## Diametri e quadrilateri inscritti

:::teorema{#semicirconferenza titolo="Il diametro determina un angolo retto"}

Se $AB$ è un diametro e $C$ è un altro punto della circonferenza, l'angolo $\widehat{ACB}$ è **retto**. Infatti l'angolo insiste su una semicirconferenza, che ha ampiezza $180^\circ$, e quindi misura $\dfrac{180^\circ}{2}=90^\circ$.

Vale anche il teorema inverso. Siano $A$, $B$, $C$ tre punti della circonferenza con $\widehat{ACB}=90^\circ$. L'arco che non contiene $C$ misura $2\cdot90^\circ=180^\circ$. Allora i raggi $OA$ e $OB$ stanno sulla stessa retta, da parti opposte di $O$, perciò $AB$ è un diametro.

In entrambe le direzioni serve che tutti e tre i punti stiano sulla circonferenza. Per esempio, la circonferenza che passa per i tre vertici di un triangolo rettangolo ha per diametro l'ipotenusa. Con cateti di $9$ cm e $12$ cm l'ipotenusa misura $\sqrt{9^2+12^2}=\sqrt{225}=15$ cm, quindi il raggio è $\dfrac{15}{2}$ cm.

:::

::::teorema{#inscritti titolo="Gli angoli opposti di un quadrilatero inscritto"}

Un poligono è **inscritto** in una circonferenza se tutti i suoi vertici stanno sulla circonferenza. Un quadrilatero è **convesso** se ogni suo angolo interno è minore di $180^\circ$. Due angoli sono **supplementari** se la loro somma è $180^\circ$.

Se un quadrilatero convesso $ABCD$ è inscritto in una circonferenza, i suoi angoli opposti sono supplementari:

$$
\begin{aligned}
\widehat{A}+\widehat{C}&=180^\circ,\\[6pt]
\widehat{B}+\widehat{D}&=180^\circ.
\end{aligned}
$$

Per esempio, se un angolo misura $110^\circ$, l'angolo opposto misura $180^\circ-110^\circ=70^\circ$.

:::dimostrazione

Gli angoli $\widehat{ABC}$ e $\widehat{ADC}$ sono angoli alla circonferenza che insistono sui due archi di estremi $A$ e $C$. L'angolo in $B$ insiste sull'arco che passa per $D$, l'angolo in $D$ su quello che passa per $B$. I due archi insieme formano la circonferenza, quindi le loro ampiezze sommano $360^\circ$. Ciascun angolo è la metà del suo arco, perciò la somma dei due angoli è $\dfrac{360^\circ}{2}=180^\circ$. Con la corda $BD$ al posto di $AC$ lo stesso ragionamento vale per gli angoli in $A$ e in $C$.

:::

::grafico{assi=0 uguale=1 xmin=-4.65 xmax=4.65 ymin=-4.7 ymax=4.7 curve="4*cos(t),4*sin(t),0.000000000000,6.283185307180" linee="4.000000,0.000000 2.000000,3.464102 -3.064178,2.571150 -1.368081,-3.758770 4.000000,0.000000" segmenti="4.000000,0.000000,-3.064178,2.571150" punti="4.000000,0.000000;2.000000,3.464102;-3.064178,2.571150;-1.368081,-3.758770" etichette="4.29,-0.25,A;2.32,3.71,B;-3.37,2.81,C;-1.52,-4.13,D" titolo="Gli angoli in $B$ e $D$ insistono sui due archi della corda $AC$"}

::::

:::esempio{titolo="Verificare se i dati possono appartenere a un inscritto"}

In un quadrilatero si ha $\widehat{ABC}=112^\circ$ e $\widehat{ADC}=71^\circ$. I due angoli sono opposti e la loro somma è $112^\circ+71^\circ=183^\circ$, diversa da $180^\circ$. La proprietà degli angoli opposti vale per *ogni* quadrilatero inscritto, quindi i quattro vertici non possono stare tutti sulla stessa circonferenza.

In un rettangolo i quattro angoli sono retti e gli angoli opposti sommano $90^\circ+90^\circ=180^\circ$. Si trova anche il centro della circonferenza che passa per i quattro vertici. Le due diagonali di un rettangolo sono lunghe uguali e si tagliano a metà nel loro punto comune $M$. Perciò $M$ dista da ciascun vertice metà della diagonale, ed è il centro cercato.

:::

## Tangenti e punto di contatto

::::teorema{#tangenti titolo="Distanza della retta e perpendicolarità"}

Una retta è **tangente** alla circonferenza se ha con essa *esattamente un* punto in comune, detto punto di contatto o di tangenza. Si indica con $H$ il piede della perpendicolare dal centro alla retta. Il numero dei punti comuni dipende dalla distanza $OH$ della retta dal centro.

- Se $OH<r$, la retta incontra la circonferenza in due punti (retta **secante**).
- Se $OH=r$, la retta ha un solo punto in comune, $H$, ed è tangente.
- Se $OH>r$, la retta non ha punti in comune (retta **esterna**).

Nella retta tangente il punto di contatto $T$ è il piede $H$, quindi il raggio $OT$ è **perpendicolare** alla tangente.

Per esempio, con $r=4$ cm le rette che distano dal centro $2$ cm, $4$ cm e $6$ cm hanno rispettivamente $2$, $1$ e $0$ punti comuni con la circonferenza.

:::dimostrazione

Sia $Q$ un punto della retta. Il triangolo $OHQ$ è rettangolo in $H$, quindi per il teorema di Pitagora $OQ^2=OH^2+HQ^2$. Il punto $Q$ sta sulla circonferenza quando $OQ=r$, cioè quando

$$
HQ^2=r^2-OH^2.
$$

- Se $OH<r$, il secondo membro è positivo e ci sono due punti $Q$, uno da ciascun lato di $H$, alla distanza $\sqrt{r^2-OH^2}$.
- Se $OH=r$, il secondo membro è zero, quindi $HQ=0$ e l'unico punto è $Q=H$.
- Se $OH>r$, il secondo membro è negativo. Un quadrato non è mai negativo, perciò non c'è nessun punto comune.

Il ragionamento vale anche per una retta che passa per il centro, che ha $OH=0$.

:::

::grafico{assi=0 uguale=1 xmin=-4.5 xmax=4.5 ymin=-3.6 ymax=5.03 curve="3*cos(t),3*sin(t),0.000000000000,6.283185307180" linee="-4.1,1 4.1,1;-4.1,3 4.1,3;-4.1,4.22 4.1,4.22;0,2.76 0.24,2.76 0.24,3" segmenti="0,0,0,4.22" punti="0,0;-2.828427,1;2.828427,1;0,3" etichette="-0.34,-0.36,O;-3.88,1.32,s;-3.88,3.35,t;-3.88,4.55,e;0,3.37,T" titolo="$s$ ha due intersezioni, $t$ è tangente ed $e$ è esterna"}

::::

:::esempio{titolo="Le due tangenti da uno stesso punto"}

Il numero di tangenti che passano per un punto $P$ dipende dalla posizione di $P$.

- Da un punto $P$ esterno passano due tangenti.
- Da un punto sulla circonferenza passa una sola tangente, la perpendicolare al raggio in quel punto.
- Da un punto interno non passa nessuna tangente.

Per un punto $P$ esterno i punti di contatto $S$ e $T$ si trovano come intersezioni della circonferenza data con la circonferenza che ha per diametro $OP$. In ciascun punto comune l'angolo che insiste sul diametro $OP$ è retto, quindi il raggio è perpendicolare alla retta che lo unisce a $P$. I due punti sono simmetrici rispetto alla retta $OP$.

I triangoli $OSP$ e $OTP$ sono rettangoli in $S$ e in $T$. Hanno la stessa ipotenusa $OP$ e i cateti $OS$ e $OT$ uguali al raggio. Per il teorema di Pitagora i due **segmenti tangenti** sono uguali:

$$
PS=PT=\sqrt{OP^2-r^2}.
$$

Con $OP=5$ e $r=3$ ciascun segmento tangente misura $\sqrt{25-9}=\sqrt{16}=4$. La distanza $OP$ va dal centro al punto esterno ed è l'ipotenusa, perché sta di fronte all'angolo retto.

Dal segmento tangente si ricava anche il raggio. Se $PT=12$ cm e $OP=13$ cm, si ha

$$
OT^2=OP^2-PT^2=13^2-12^2=169-144=25,
$$

quindi $r=5$ cm. Le due rette perpendicolari sono $OT$ e $PT$, che si incontrano nel punto di contatto $T$. La retta $OP$ passa per il centro ed è diversa da entrambe le tangenti.

::grafico{assi=0 uguale=1 xmin=-3.6 xmax=5.8 ymin=-3.5 ymax=3.65 curve="3*cos(t),3*sin(t),0.000000000000,6.283185307180" linee="0,0 1.8,2.4 5,0 1.8,-2.4 0,0" segmenti="0,0,5,0" punti="0,0;5,0;1.8,2.4;1.8,-2.4" etichette="-0.34,-0.33,O;5.3,-0.32,P;1.96,2.73,T;1.93,-2.83,S" titolo="I due punti di tangenza sono speculari rispetto alla retta $OP$"}

:::

## Poligoni regolari e apotema

::::teorema{#poligoni titolo="Angoli, raggi e area di un regolare"}

Un poligono è **regolare** se ha *tutti* i lati congruenti e *tutti* gli angoli interni congruenti. Le due condizioni servono insieme. Un rombo con un angolo di $75^\circ$ ha i quattro lati uguali, ma i suoi angoli misurano $75^\circ$ e $105^\circ$, quindi non è regolare. Qui si considerano poligoni regolari convessi con $n\ge3$ lati.

Ogni poligono regolare ha un centro $O$ con queste proprietà.

- I vertici stanno su una circonferenza di centro $O$, la **circonferenza circoscritta**. Il suo raggio $R$ è il segmento dal centro a un vertice.
- I lati sono tangenti a una circonferenza di centro $O$, la **circonferenza inscritta**.
- L'**apotema** $a$ è il segmento perpendicolare dal centro a un lato, cioè la distanza del centro da un lato. È lungo quanto il raggio della circonferenza inscritta.

Gli angoli e l'area si calcolano dal numero dei lati $n$, dal **perimetro** $p$ (la somma dei lati) e dall'apotema:

$$
\begin{aligned}
\text{angolo al centro fra due vertici consecutivi}&=\frac{360^\circ}{n},\\[6pt]
\text{angolo interno}&=180^\circ-\frac{360^\circ}{n},\\[6pt]
\text{area}&=\frac{p\,a}{2}.
\end{aligned}
$$

L'**angolo esterno** in un vertice è l'angolo che, sommato all'angolo interno, dà $180^\circ$. Nel poligono regolare vale $180^\circ$ meno l'angolo interno, quindi $\dfrac{360^\circ}{n}$. Gli $n$ angoli esterni sommano perciò $n\cdot\dfrac{360^\circ}{n}=360^\circ$. Infatti, percorrendo il bordo, a ogni vertice si svolta dell'angolo esterno e alla fine si è compiuto un giro completo. Per esempio, con angolo interno di $156^\circ$ l'angolo esterno è $180^\circ-156^\circ=24^\circ$ e i lati sono $\dfrac{360^\circ}{24^\circ}=15$.

La somma degli angoli interni di un poligono convesso di $n$ lati è $(n-2)\cdot180^\circ$, perché le diagonali uscenti da un vertice lo dividono in $n-2$ triangoli. Per $n=9$ si ottiene $7\cdot180^\circ=1260^\circ$ e ogni angolo del poligono regolare misura $\dfrac{1260^\circ}{9}=140^\circ$.

:::dimostrazione

Una **rotazione** di centro $O$ è il movimento che fa girare ogni punto del piano attorno a $O$ di uno stesso angolo. Una rotazione non cambia le distanze.

Si considera il movimento che porta un lato del poligono sul lato successivo, con lo stesso verso di percorrenza. I lati hanno tutti la stessa lunghezza e a ogni vertice si svolta dello stesso angolo. Quindi lo stesso movimento porta ogni lato sul lato successivo e il poligono su se stesso. Questo movimento cambia la direzione dei lati, perciò è una rotazione, con un centro che si chiama $O$.

Il centro $O$ resta fermo nella rotazione, che porta ogni vertice nel successivo. Quindi $O$ ha la stessa distanza da tutti i vertici e la stessa distanza da tutti i lati. Per questo i vertici stanno su una circonferenza di centro $O$ e i lati sono tangenti a un'altra circonferenza di centro $O$.

Unendo $O$ con i vertici si ottengono $n$ triangoli isosceli uguali. I loro angoli in $O$ dividono l'angolo giro, che misura $360^\circ$, in $n$ parti uguali, quindi ciascuno misura $\dfrac{360^\circ}{n}$. Ciascun triangolo ha due angoli alla base uguali, che sommano $180^\circ-\dfrac{360^\circ}{n}$. In ogni vertice del poligono si incontrano due angoli alla base, uno per ciascuno dei due triangoli vicini. La loro somma è uguale alla somma dei due angoli alla base di un solo triangolo, perciò l'angolo interno misura $180^\circ-\dfrac{360^\circ}{n}$.

Ciascun triangolo ha per base un lato $\ell$ e per altezza l'apotema $a$, quindi la sua area è $\dfrac{\ell\,a}{2}$. Sommando le $n$ aree, le basi danno il perimetro, quindi l'area del poligono è $\dfrac{p\,a}{2}$.

:::

::grafico{assi=0 uguale=1 xmin=-4.6 xmax=4.65 ymin=-4.55 ymax=4.65 curve="4*cos(t),4*sin(t),0.000000000000,6.283185307180;3.464101615*cos(t),3.464101615*sin(t),0.000000000000,6.283185307180" linee="4.000000,0.000000 2.000000,3.464102 -2.000000,3.464102 -4.000000,0.000000 -2.000000,-3.464102 2.000000,-3.464102 4.000000,0.000000;0,0 4,0;0,0 2,3.464102;0,0 3,1.732051" punti="0,0;4,0;2,3.464102;3,1.732051" etichette="-0.27,-0.35,O;4.32,-0.24,A;2.17,3.79,B;3.22,1.98,H;1.76,-0.31,R;1.33,1.03,a" titolo="$OA$ è un raggio della circoscritta, $OH$ è l’apotema"}

::::

:::esempio{titolo="Esagono e ottagono"}

In un esagono regolare l'angolo al centro è $\dfrac{360^\circ}{6}=60^\circ$. Ciascun triangolo isoscele centrale ha quindi gli angoli alla base che sommano $180^\circ-60^\circ=120^\circ$, cioè di $60^\circ$ ciascuno. Il triangolo ha tre angoli di $60^\circ$ ed è equilatero, perciò il lato dell'esagono è lungo quanto il raggio della circonferenza circoscritta.

Con lato $8$ cm il perimetro è $6\cdot8=48$ cm. L'apotema è un cateto del triangolo rettangolo che ha per ipotenusa il raggio di $8$ cm e per altro cateto metà lato, $4$ cm:

$$
a=\sqrt{8^2-4^2}=\sqrt{48}=4\sqrt3\,\mathrm{cm}.
$$

In un ottagono regolare l'angolo al centro misura $\dfrac{360^\circ}{8}=45^\circ$ e quello interno $180^\circ-45^\circ=135^\circ$. L'angolo esterno vale $180^\circ-135^\circ=45^\circ$. L'angolo esterno e l'angolo al centro hanno la stessa misura, ma sono angoli diversi, perché l'angolo al centro ha il vertice in $O$ e l'angolo esterno ha il vertice in un vertice del poligono.

:::

## Poligoni inscritti e circoscritti

:::osservazione{#circoscritti titolo="Vertici sulla circonferenza e lati tangenti"}

Un poligono è **inscritto** in una circonferenza se tutti i suoi vertici stanno sulla circonferenza. È **circoscritto** a una circonferenza se tutti i suoi lati sono tangenti alla circonferenza, che allora sta all'interno del poligono. In un poligono regolare la circonferenza circoscritta passa per i vertici, quella inscritta tocca i lati, quindi sono due circonferenze diverse con lo stesso centro. Anche un quadrilatero con lati di lunghezze diverse può essere circoscritto a una circonferenza.

In un quadrilatero circoscritto $ABCD$ le somme dei lati opposti sono uguali:

$$
AB+CD=BC+DA.
$$

Il motivo sono i segmenti tangenti. Da ogni vertice partono due segmenti tangenti uguali, fino ai punti di contatto dei due lati che escono da quel vertice. Si indicano con $u$, $v$, $w$, $z$ le loro lunghezze a partire da $A$, $B$, $C$, $D$. Ogni lato è formato da un segmento di ciascuno dei suoi due estremi:

$$
\begin{aligned}
AB+CD&=(u+v)+(w+z)=u+v+w+z,\\[6pt]
BC+DA&=(v+w)+(z+u)=u+v+w+z.
\end{aligned}
$$

Per esempio, se $AB=8$, $BC=6$ e $CD=5$, allora $DA=AB+CD-BC=8+5-6=7$.

::grafico{assi=0 uguale=1 xmin=-3.08 xmax=2.8 ymin=-2.66 ymax=3.72 curve="2*cos(t),2*sin(t),0.000000000000,6.283185307180" linee="2,-2 2,1.400415 -2.571150,3.064178 -1.678199,-2 2,-2" punti="2,-2;2,1.400415;-2.571150,3.064178;-1.678199,-2;2,0;0.684040,1.879385;-1.969616,-0.347296;0,-2" etichette="2.15,-2.36,A;2.31,1.58,B;-2.78,3.4,C;-1.8,-2.35,D" titolo="Ogni lato è diviso dal contatto nei segmenti provenienti dai due vertici"}

:::

## Lunghezze di circonferenze e archi

:::teorema{#lunghezze titolo="La frazione del giro"}

Il numero $\pi$ (si legge «pi greco») è il rapporto fra la lunghezza di una circonferenza e il suo diametro, e vale circa $3{,}14$. La lunghezza della circonferenza è quindi

$$
C=2\pi r=\pi d,
$$

dove $d=2r$ è il diametro. Per esempio, con $r=3$ cm si ha $C=6\pi$ cm. Nei risultati esatti si lascia scritto $\pi$. Una ruota che rotola senza slittare avanza a ogni giro di una lunghezza uguale alla sua circonferenza.

Un arco con angolo al centro $\alpha$ è la frazione $\dfrac{\alpha}{360^\circ}$ dell'intera circonferenza. Per $0<\alpha<360^\circ$ la sua lunghezza è

$$
\ell=\dfrac{\alpha}{360^\circ}\,2\pi r.
$$

Nella stessa circonferenza archi con la stessa ampiezza hanno la stessa lunghezza, perché una rotazione attorno al centro porta l'uno sull'altro. Quindi una certa frazione del giro corrisponde alla stessa frazione della lunghezza totale. Con $\alpha=60^\circ$ e $r=6$ cm l'arco è $\dfrac{60^\circ}{360^\circ}=\dfrac16$ della circonferenza:

$$
\ell=\frac16\cdot2\pi\cdot6=2\pi\,\mathrm{cm}.
$$

Se è dato l'angolo alla circonferenza, prima si raddoppia la sua ampiezza per trovare quella dell'arco.

La relazione si usa anche per ricavare l'angolo. Un arco di $5\pi$ cm sta in una circonferenza di raggio $10$ cm, che è lunga $2\pi\cdot10=20\pi$ cm. Il rapporto fra le due lunghezze, espresse nella stessa unità, è

$$
\frac{5\pi}{20\pi}=\frac14,
$$

quindi l'angolo al centro è $\dfrac14\cdot360^\circ=90^\circ$.

:::

## Aree di cerchi, settori e corone

:::teorema{#aree titolo="Superficie e bordo del settore"}

L'area del cerchio di raggio $r$ è $\pi r^2$. Per esempio, con $r=3$ cm l'area è $9\pi$ cm$^2$. L'area dipende dal quadrato del raggio, quindi se il raggio raddoppia l'area diventa $2^2=4$ volte più grande, mentre la circonferenza raddoppia.

Un settore circolare con angolo al centro $\alpha$ è la frazione $\dfrac{\alpha}{360^\circ}$ del cerchio. Il suo bordo è formato dall'arco $\ell$ e dai due raggi. Per $0<\alpha<360^\circ$ area e perimetro sono

$$
\begin{aligned}
A_{\mathrm{s}}&=\dfrac{\alpha}{360^\circ}\,\pi r^2,\\[6pt]
P_{\mathrm{s}}&=\ell+2r .
\end{aligned}
$$

In figura c'è un quarto di cerchio con $r=4$ cm, cioè $\alpha=90^\circ$ e frazione $\dfrac14$. Si calcolano l'arco, il perimetro, che comprende l'arco $AB$ e i due raggi, e l'area:

$$
\begin{aligned}
\ell&=\frac14\cdot2\pi\cdot4=2\pi\,\mathrm{cm},\\[6pt]
P_{\mathrm{s}}&=(2\pi+8)\,\mathrm{cm},\\[6pt]
A_{\mathrm{s}}&=\frac14\cdot\pi\cdot4^2=4\pi\,\mathrm{cm^2}.
\end{aligned}
$$

Le formule dell'arco e dell'area contengono la stessa frazione $\dfrac{\alpha}{360^\circ}$. Dalla formula dell'arco si ricava $\dfrac{\alpha}{360^\circ}=\dfrac{\ell}{2\pi r}$ e, sostituendo nella formula dell'area,

$$
A_{\mathrm{s}}=\frac{\ell}{2\pi r}\cdot\pi r^2=\frac{r\ell}{2}.
$$

Con un arco di $9$ cm e un raggio di $6$ cm l'area è $\dfrac{6\cdot9}{2}=27$ cm$^2$, senza calcolare l'angolo.

::grafico{assi=0 uguale=1 xmin=-0.8 xmax=4.65 ymin=-0.74 ymax=4.65 curve="4*cos(t),4*sin(t),0.000000000000,1.570796326795" poligoni="0,0 4.000000,0.000000 3.984779,0.348623 3.939231,0.694593 3.863703,1.035276 3.758770,1.368081 3.625231,1.690473 3.464102,2.000000 3.276608,2.294306 3.064178,2.571150 2.828427,2.828427 2.571150,3.064178 2.294306,3.276608 2.000000,3.464102 1.690473,3.625231 1.368081,3.758770 1.035276,3.863703 0.694593,3.939231 0.348623,3.984779 0.000000,4.000000" linee="4,0 0,0 0,4" punti="0,0;4,0;0,4" etichette="-0.19,-0.37,O;4.16,-0.37,A;-0.18,4.32,B;2,-0.37,4;-0.3,2,4" titolo="Per il settore il bordo comprende i due raggi e l’arco $AB$"}

:::

:::esempio{titolo="Una corona e una sua parte"}

Due circonferenze sono **concentriche** se hanno lo stesso centro. La **corona circolare** è la parte di piano compresa fra due circonferenze concentriche di raggi $R>r$. La sua area è la differenza delle aree dei due cerchi:

$$
\pi R^2-\pi r^2=\pi(R^2-r^2).
$$

Una parte di corona compresa fra due raggi si calcola applicando la stessa frazione di giro ai due cerchi. Con $R=8$ cm, $r=5$ cm e $\alpha=120^\circ$ la frazione è $\dfrac{120^\circ}{360^\circ}=\dfrac13$ e l'area è

$$
\frac13\,\pi\,(64-25)=\frac13\cdot39\pi=13\pi\,\mathrm{cm^2}.
$$

Il bordo di questa parte è formato da due archi, uno su ciascuna circonferenza, e da due segmenti lunghi $R-r$ ciascuno.

:::
