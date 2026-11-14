---
titolo: Trigonometria e risoluzione dei triangoli
sommario: I teoremi che legano i lati e gli angoli di un triangolo (triangoli rettangoli, area con il seno, teorema della corda, teorema dei seni, teorema del coseno), la risoluzione dei triangoli nei quattro casi, compreso il caso ambiguo, e le applicazioni a distanze, altezze, forze e problemi con un angolo variabile.
---

## Elementi di un triangolo

:::definizione{#elementi-triangolo titolo="Lati e angoli di un triangolo"}
In un triangolo $ABC$ si indicano con $\alpha$, $\beta$, $\gamma$ le ampiezze degli angoli nei vertici $A$, $B$, $C$, e con $a$, $b$, $c$ le lunghezze dei lati **opposti** a quei vertici. Il lato $a = BC$ è quindi opposto all'angolo $\alpha$, il lato $b = CA$ all'angolo $\beta$ e il lato $c = AB$ all'angolo $\gamma$. Ogni angolo è invece **compreso** tra i due lati che hanno un estremo nel suo vertice; per esempio $\alpha$ è compreso tra $b$ e $c$.

::grafico{assi=0 curve="0+0.6*cos(t),0+0.6*sin(t),0,1.052;6+0.6*cos(t),0+0.6*sin(t),2.423,3.142;2+0.6*cos(t),3.5+0.6*sin(t),-2.09,-0.719" linee="0,0 6,0 2,3.5 0,0" etichette="0.986,0.572,α;4.933,0.401,β;2.189,2.376,γ;-0.412,-0.18,A;6.425,-0.149,B;1.876,3.933,C;4.366,1.91,a;0.622,1.882,b;3.11,-0.385,c" xmin=-1 xmax=7 ymin=-1 ymax=4.5 uguale=1 titolo="In un triangolo il lato $a$ è opposto al vertice $A$ e all'angolo $\alpha$, il lato $b$ a $\beta$ e il lato $c$ a $\gamma$"}

Gli angoli di un triangolo sono positivi e hanno somma $180^\circ$, cioè $\pi$ in radianti:
$$
\alpha + \beta + \gamma = 180^\circ .
$$
Perciò due angoli determinano il terzo. Se $\alpha = 40^\circ$ e $\beta = 65^\circ$, allora $\gamma = 180^\circ - 40^\circ - 65^\circ = 75^\circ$. Nei problemi sui triangoli gli angoli si danno spesso in gradi; nelle equazioni con un angolo incognito si usano i radianti.
:::

:::teorema{#disuguaglianza-triangolare titolo="Disuguaglianza triangolare e ordine dei lati"}
In ogni triangolo ciascun lato è minore della somma degli altri due e maggiore della loro differenza:
$$
|b - c| < a < b + c .
$$
Inoltre a lato maggiore si oppone angolo maggiore, e viceversa; in simboli, $a > b$ se e solo se $\alpha > \beta$.

Le due proprietà sono teoremi della geometria euclidea del biennio. La prima dice se tre numeri positivi possono essere le misure dei lati di un triangolo. I numeri $4$, $5$, $7$ lo sono, perché $7 < 4 + 5$; i numeri $2$, $3$, $6$ non lo sono, perché $6 > 2 + 3$. La seconda permette di sapere quale angolo è il più grande prima di calcolarlo. Nel triangolo di lati $4$, $5$, $7$ l'angolo maggiore è quello opposto al lato $7$.
:::

:::definizione{#risolvere-triangolo titolo="Risoluzione di un triangolo"}
**Risolvere un triangolo** significa calcolare le misure di tutti i lati e di tutti gli angoli a partire da quelle note. Per i criteri di congruenza dei triangoli bastano tre elementi, di cui almeno uno è un lato. Tre angoli fissano soltanto la forma del triangolo, perché i triangoli simili hanno gli stessi angoli e lati diversi.

La trigonometria fornisce le formule che legano i lati alle funzioni goniometriche degli angoli, e quindi trasforma i criteri di congruenza in calcoli. Per esempio, il primo criterio dice che due lati e l'angolo compreso determinano il triangolo; il teorema del coseno dà la formula per calcolare il terzo lato.
:::

## Triangoli rettangoli

:::richiamo{titolo="Seno e coseno sulla circonferenza goniometrica"}
Sia $P$ il punto della circonferenza goniometrica tale che il raggio $OP$ forma l'angolo $x$ con il semiasse positivo delle ascisse. Allora
$$
P = (\cos x, \sin x), \qquad \sin^2 x + \cos^2 x = 1, \qquad \tan x = \frac{\sin x}{\cos x} .
$$
:::

::::teorema{#primo-teorema-rettangoli titolo="Primo teorema sui triangoli rettangoli"}
Sia $ABC$ un triangolo rettangolo in $A$, con ipotenusa $a$ e cateti $b$ e $c$. Un cateto è uguale all'ipotenusa moltiplicata per il seno dell'angolo opposto al cateto, oppure per il coseno dell'angolo acuto adiacente al cateto:
$$
b = a\sin\beta = a\cos\gamma , \qquad c = a\sin\gamma = a\cos\beta .
$$
Il teorema dà i cateti quando sono noti l'ipotenusa e un angolo acuto. Se $a = 10$ e $\beta = 30^\circ$, allora $b = 10\sin 30^\circ = 5$ e $c = 10\cos 30^\circ = 5\sqrt{3}$. Il teorema di Pitagora conferma il risultato, perché $25 + 75 = 100$.

::grafico{assi=0 curve="2*cos(t),2*sin(t),0,1.5708;0+0.6*cos(t),0+0.6*sin(t),0,0.644" linee="4,0 0,0 4,3 4,0;3.65,0 3.65,0.35 4,0.35" segmenti="1.6,1.2,1.6,0" punti="1.6,1.2,pieno;1.6,0,pieno" etichette="1.081,0.36,β;4.36,-0.27,A;-0.421,-0.158,B;4.25,3.374,C;1.68,1.74,a;4.375,1.64,b;2.9,-0.333,c;1.45,1.5,P;1.6,-0.35,H;0.5,0.95,1" xmin=-1 xmax=5 ymin=-1 ymax=4 uguale=1 titolo="L'arco della circonferenza goniometrica di centro $B$, di raggio $1$: il punto $P$ ha coordinate $(\cos\beta, \sin\beta)$ e il triangolo $BHP$ è simile al triangolo $BAC$"}

:::dimostrazione
L'idea è confrontare il triangolo con un triangolo simile che ha l'ipotenusa uguale a $1$. Si traccia la circonferenza goniometrica con centro nel vertice $B$ e il primo asse lungo il cateto $BA$. La semiretta $BC$ forma con l'asse l'angolo $\beta$, quindi taglia la circonferenza nel punto $P = (\cos\beta, \sin\beta)$. Sia $H$ la proiezione di $P$ sul cateto $BA$. Allora $BP = 1$, $PH = \sin\beta$ e $BH = \cos\beta$.

I triangoli $BHP$ e $BAC$ sono rettangoli in $H$ e in $A$ e hanno in comune l'angolo $\beta$, quindi sono simili. Nei triangoli simili i lati corrispondenti sono in proporzione, perciò
$$
\frac{CA}{BC} = \frac{PH}{BP} = \frac{\sin\beta}{1} , \qquad \frac{BA}{BC} = \frac{BH}{BP} = \frac{\cos\beta}{1} .
$$
Poiché $CA = b$, $BA = c$ e $BC = a$, si ottiene $b = a\sin\beta$ e $c = a\cos\beta$. Gli angoli acuti di un triangolo rettangolo sono complementari, cioè $\gamma = 90^\circ - \beta$. Per gli archi associati $\sin\gamma = \cos\beta$ e $\cos\gamma = \sin\beta$, e da qui seguono le altre due uguaglianze.
:::
::::

::::teorema{#secondo-teorema-rettangoli titolo="Secondo teorema sui triangoli rettangoli"}
Sia $ABC$ un triangolo rettangolo in $A$. Un cateto è uguale all'altro cateto moltiplicato per la tangente dell'angolo opposto al primo cateto, oppure per la cotangente dell'angolo adiacente al primo cateto:
$$
b = c\tan\beta = c\cot\gamma , \qquad c = b\tan\gamma = b\cot\beta .
$$
Questo teorema collega i due cateti senza passare per l'ipotenusa. Se $c = 12$ e $\beta = 60^\circ$, allora $b = 12\tan 60^\circ = 12\sqrt{3}$; l'ipotenusa segue dal primo teorema, $a = \dfrac{c}{\cos\beta} = \dfrac{12}{\dfrac{1}{2}} = 24$.

:::dimostrazione
L'idea è dividere membro a membro le due formule del primo teorema. Poiché $b = a\sin\beta$ e $c = a\cos\beta$, con $c \neq 0$ e $\cos\beta \neq 0$ perché $\beta$ è acuto, si ha
$$
\frac{b}{c} = \frac{a\sin\beta}{a\cos\beta} = \tan\beta .
$$
Quindi $b = c\tan\beta$. Poiché $\gamma = 90^\circ - \beta$, vale $\tan\beta = \cot\gamma$, da cui $b = c\cot\gamma$. Le formule per $c$ si ottengono scambiando i ruoli di $b$ e $c$.
:::
::::

:::teorema{#risoluzione-rettangoli titolo="Risoluzione dei triangoli rettangoli"}
Sia $ABC$ rettangolo in $A$. Oltre all'angolo retto bastano due elementi, di cui almeno uno è un lato. I casi sono quattro.

- **Ipotenusa e un angolo acuto.** L'altro angolo è il complementare, e i cateti si ricavano con il primo teorema.
- **Un cateto e un angolo acuto.** L'altro cateto si ricava con il secondo teorema e l'ipotenusa con il primo, per esempio $a = \dfrac{b}{\sin\beta}$.
- **Due cateti.** L'ipotenusa si ricava con il teorema di Pitagora e l'angolo con il secondo teorema, $\tan\beta = \dfrac{b}{c}$, da cui $\beta = \arctan\dfrac{b}{c}$.
- **Ipotenusa e un cateto.** L'altro cateto si ricava con il teorema di Pitagora e l'angolo con il primo teorema, $\sin\beta = \dfrac{b}{a}$, da cui $\beta = \arcsin\dfrac{b}{a}$.

Negli ultimi due casi l'angolo è un numero che in generale si calcola con la calcolatrice. L'angolo $\beta$ è acuto, quindi è proprio quello dato da $\arctan$ o da $\arcsin$, che hanno valori compresi tra $0^\circ$ e $90^\circ$ quando l'argomento è positivo.
:::

:::esempio{titolo="Due cateti e ipotenusa con un cateto"}
Un triangolo rettangolo in $A$ ha cateti $b = 5$ e $c = 12$. Per il teorema di Pitagora $a = \sqrt{25 + 144} = 13$. Per il secondo teorema $\tan\beta = \dfrac{5}{12}$, quindi $\beta = \arctan\dfrac{5}{12} \approx 22{,}62^\circ$ e $\gamma = 90^\circ - \beta \approx 67{,}38^\circ$.

Un altro triangolo rettangolo in $A$ ha ipotenusa $a = 10$ e cateto $b = 6$. Per il teorema di Pitagora $c = \sqrt{100 - 36} = 8$. Per il primo teorema $\sin\beta = \dfrac{6}{10} = \dfrac{3}{5}$, quindi $\beta = \arcsin\dfrac{3}{5} \approx 36{,}87^\circ$ e $\gamma \approx 53{,}13^\circ$.
:::

:::attenzione
Le formule $\sin\beta = \dfrac{b}{a}$ e $\cos\beta = \dfrac{c}{a}$ valgono solo nei triangoli *rettangoli*, con $a$ ipotenusa. Nel triangolo di lati $a = 7$, $b = 5$, $c = 8$, che non è rettangolo, il rapporto $\dfrac{c}{a} = \dfrac{8}{7}$ è maggiore di $1$ e non può essere il coseno di un angolo. Nei triangoli qualsiasi si usano il teorema dei seni e il teorema del coseno.
:::

## Area di un triangolo

:::richiamo{titolo="Archi supplementari"}
Per ogni angolo $x$ vale $\sin(\pi - x) = \sin x$ e $\cos(\pi - x) = -\cos x$.
:::

::::teorema{#area-triangolo titolo="Area con due lati e l'angolo compreso"}
L'area $S$ di un triangolo è uguale al semiprodotto di due lati per il seno dell'angolo compreso:
$$
S = \frac{1}{2}\,ab\sin\gamma = \frac{1}{2}\,bc\sin\alpha = \frac{1}{2}\,ac\sin\beta .
$$
La formula dà l'area senza calcolare un'altezza. Se $a = 8$, $b = 5$ e $\gamma = 30^\circ$, allora $S = \dfrac{1}{2} \cdot 8 \cdot 5 \cdot \dfrac{1}{2} = 10$. Se invece $a = 6$, $b = 4$ e $\gamma = 120^\circ$, allora $S = \dfrac{1}{2} \cdot 6 \cdot 4 \cdot \dfrac{\sqrt{3}}{2} = 6\sqrt{3}$.

::grafico{assi=0 curve="0+0.6*cos(t),0+0.6*sin(t),0,1.052" linee="2,3.5 6,0 0,0 2,3.5;2.3,0 2.3,0.3 2,0.3" segmenti="2,3.5,2,0" etichette="0.986,0.572,γ;1.876,3.933,A;6.425,-0.149,B;-0.412,-0.18,C;3.11,-0.385,a;0.622,1.882,b;4.366,1.91,c;2.3,1.4,h;2,-0.45,H" xmin=-1 xmax=7 ymin=-1 ymax=4.5 uguale=1 titolo="Con $\gamma$ acuto il piede $H$ dell'altezza cade sul lato $a$, e $h = b\sin\gamma$"}

::grafico{assi=0 curve="0+0.7*cos(t),0+0.7*sin(t),0,2.159;0+1.2*cos(t),0+1.2*sin(t),2.159,3.142" linee="-3,4.5 7.5,0 0,0 -3,4.5;-2.6,0 -2.6,0.4 -3,0.4" segmenti="-3,4.5,-3,0;-3,0,0,0" etichette="0.52,0.97,γ;-3.35,4.85,A;7.9,-0.15,B;0.1,-0.45,C;3.75,-0.4,a;-2,2,b;2.43,2.66,c;-3.4,2.25,h;-3,-0.45,H;-2.3,0.45,π − γ" xmin=-5 xmax=8.5 ymin=-1.2 ymax=5.5 uguale=1 titolo="Con $\gamma$ ottuso il piede $H$ cade sul prolungamento di $a$, e $h = b\sin(\pi - \gamma) = b\sin\gamma$"}

:::dimostrazione
L'idea è scrivere l'altezza relativa al lato $a$ con il primo teorema sui triangoli rettangoli. Sia $h = AH$ l'altezza condotta da $A$ sulla retta $BC$, così che $S = \dfrac{1}{2}\,a\,h$.

- Se $\gamma$ è acuto, il triangolo $AHC$ è rettangolo in $H$, ha ipotenusa $AC = b$ e l'angolo in $C$ è $\gamma$. Per il primo teorema $h = b\sin\gamma$.
- Se $\gamma$ è ottuso, $H$ cade sul prolungamento del lato $BC$ oltre $C$. Il triangolo $AHC$ è rettangolo in $H$ e il suo angolo in $C$ è il supplementare $\pi - \gamma$. Per il primo teorema $h = b\sin(\pi - \gamma)$, e poiché $\sin(\pi - \gamma) = \sin\gamma$ si ottiene ancora $h = b\sin\gamma$.
- Se $\gamma$ è retto, $H = C$ e $h = b = b\sin 90^\circ$.

In tutti i casi $S = \dfrac{1}{2}\,a\,b\sin\gamma$. Le altre due formule si ottengono allo stesso modo con le altezze relative a $b$ e a $c$.
:::
::::

:::esempio{titolo="Parallelogramma ed esagono regolare"}
Una diagonale divide un parallelogramma in due triangoli congruenti, ciascuno con due lati uguali ai lati del parallelogramma e l'angolo compreso uguale a un angolo del parallelogramma. L'area del parallelogramma di lati $p$ e $q$ con angolo $\theta$ è quindi il doppio dell'area di uno dei triangoli:
$$
S = 2 \cdot \frac{1}{2}\,pq\sin\theta = pq\sin\theta .
$$
Con $p = 7$, $q = 4$ e $\theta = 45^\circ$ si ottiene $S = 28 \cdot \dfrac{\sqrt{2}}{2} = 14\sqrt{2}$.

Un esagono regolare di lato $\ell$ si divide, congiungendo il centro con i vertici, in sei triangoli con due lati $\ell$ e angolo compreso $60^\circ$. La sua area è perciò $6 \cdot \dfrac{1}{2}\,\ell^2 \sin 60^\circ = \dfrac{3\sqrt{3}}{2}\,\ell^2$; per $\ell = 2$ vale $6\sqrt{3}$.
:::

## Teorema della corda

:::richiamo{titolo="Angoli alla circonferenza"}
Gli angoli alla circonferenza che insistono sullo stesso arco sono uguali. Un angolo alla circonferenza che insiste su una semicirconferenza è retto. In un quadrilatero inscritto in una circonferenza gli angoli opposti sono supplementari.
:::

::::teorema{#teorema-corda titolo="Teorema della corda"}
In una circonferenza di raggio $r$ una corda $AB$ è uguale al diametro moltiplicato per il seno di un qualsiasi angolo alla circonferenza che insiste sulla corda:
$$
AB = 2r\sin\alpha .
$$
Gli angoli alla circonferenza che insistono su $AB$ hanno il vertice su uno dei due archi di estremi $A$ e $B$. Quelli con il vertice su un arco sono tutti uguali a $\alpha$, quelli con il vertice sull'altro arco sono uguali a $180^\circ - \alpha$, e i due valori hanno lo stesso seno. Per esempio, in una circonferenza di raggio $5$ una corda vista da un punto della circonferenza sotto un angolo di $30^\circ$ misura $AB = 10\sin 30^\circ = 5$, mentre una corda vista sotto un angolo di $120^\circ$ misura $10\sin 120^\circ = 5\sqrt{3}$.

::grafico{assi=0 curve="3*cos(t),3*sin(t),0,6.29;-2.598+0.6*cos(t),1.5+0.6*sin(t),-1.571,-0.524;0.776+0.6*cos(t),2.898+0.6*sin(t),-2.225,-1.178" linee="-2.598,-1.5 2.598,-1.5 -2.598,1.5 -2.598,-1.5;-2.298,-1.5 -2.298,-1.2 -2.598,-1.2" segmenti="0.776,2.898,-2.598,-1.5;0.776,2.898,2.598,-1.5" punti="0,0,pieno" etichette="-2.988,-1.725,A;2.988,-1.725,B;-2.988,1.725,A′;0.893,3.332,P;-2.028,0.513,α;0.628,1.768,α;0.25,0.35,O;-1.35,1.1,2r" xmin=-4 xmax=4 ymin=-4 ymax=4 uguale=1 titolo="La corda $AB$ e il diametro $BA'$: gli angoli in $P$ e in $A'$ insistono sull'arco $AB$ e sono uguali, e il triangolo $ABA'$ è rettangolo in $A$"}

:::dimostrazione
L'idea è sostituire l'angolo $\alpha$ con un angolo uguale che sta in un triangolo rettangolo. Sia $P$ il vertice dell'angolo $\alpha$ e sia $A'$ il punto diametralmente opposto a $B$, così che $BA' = 2r$.

- Se $\alpha$ è acuto, $A'$ sta sullo stesso arco di $P$. Infatti l'angolo $AA'B$ è acuto, perché è un angolo acuto del triangolo $ABA'$, rettangolo in $A$, mentre gli angoli alla circonferenza con il vertice sull'altro arco sono suoi supplementari e quindi ottusi. Gli angoli in $P$ e in $A'$ insistono sullo stesso arco, quindi l'angolo in $A'$ vale $\alpha$. Il triangolo $ABA'$ è rettangolo in $A$, perché l'angolo in $A$ insiste sulla semicirconferenza $BA'$. Per il primo teorema sui triangoli rettangoli il cateto $AB$ è uguale all'ipotenusa $BA'$ per il seno dell'angolo opposto, cioè $AB = 2r\sin\alpha$.
- Se $\alpha$ è ottuso, $P$ e $A'$ stanno su archi diversi, e $APBA'$ è un quadrilatero inscritto. Gli angoli in $P$ e in $A'$ sono opposti, quindi l'angolo in $A'$ vale $\pi - \alpha$. Come nel caso precedente $AB = 2r\sin(\pi - \alpha) = 2r\sin\alpha$.
- Se $\alpha$ è retto, la corda $AB$ è un diametro e $AB = 2r = 2r\sin 90^\circ$.
:::
::::

:::osservazione{#angolo-al-centro titolo="Corda e angolo al centro"}
L'angolo al centro che insiste sull'arco $AB$ è il doppio dell'angolo alla circonferenza che insiste sullo stesso arco. Se l'angolo al centro è $\theta$, con $0 < \theta < \pi$, la corda è perciò $AB = 2r\sin\dfrac{\theta}{2}$. Si arriva alla stessa formula tracciando l'altezza del triangolo isoscele $AOB$, che divide $\theta$ a metà e la corda a metà. In una circonferenza di raggio $4$ la corda che corrisponde a un angolo al centro di $90^\circ$ misura $8\sin 45^\circ = 4\sqrt{2}$, che è il lato del quadrato inscritto.
:::

## Teorema dei seni

::::teorema{#teorema-seni titolo="Teorema dei seni"}
In ogni triangolo i lati sono proporzionali ai seni degli angoli opposti, e il rapporto costante è il diametro $2R$ della circonferenza circoscritta:
$$
\frac{a}{\sin\alpha} = \frac{b}{\sin\beta} = \frac{c}{\sin\gamma} = 2R .
$$
Il teorema si usa quando sono noti un lato e l'angolo opposto, oppure due angoli e un lato. Se $a = 10$, $\alpha = 45^\circ$ e $\beta = 60^\circ$, allora
$$
b = \frac{a\sin\beta}{\sin\alpha} = \frac{10 \cdot \dfrac{\sqrt{3}}{2}}{\dfrac{\sqrt{2}}{2}} = \frac{10\sqrt{3}}{\sqrt{2}} = 5\sqrt{6} , \qquad 2R = \frac{10}{\dfrac{\sqrt{2}}{2}} = 10\sqrt{2} ,
$$
quindi il raggio della circonferenza circoscritta è $R = 5\sqrt{2}$.

:::dimostrazione
L'idea è leggere ogni lato come una corda della circonferenza circoscritta. Sia $R$ il raggio della circonferenza che passa per $A$, $B$, $C$. Il lato $a = BC$ è una corda di questa circonferenza, e l'angolo $\alpha$ ha il vertice $A$ sulla circonferenza e insiste sulla corda $BC$. Per il teorema della corda $a = 2R\sin\alpha$. Poiché $0 < \alpha < \pi$, si ha $\sin\alpha > 0$, quindi si può dividere e si ottiene $\dfrac{a}{\sin\alpha} = 2R$. Lo stesso ragionamento applicato alle corde $CA$ e $AB$ dà $\dfrac{b}{\sin\beta} = 2R$ e $\dfrac{c}{\sin\gamma} = 2R$.
:::
::::

:::esempio{titolo="Un lato e due angoli"}
Nel triangolo con $a = 10$, $\alpha = 45^\circ$, $\beta = 60^\circ$ il terzo angolo è $\gamma = 180^\circ - 45^\circ - 60^\circ = 75^\circ$. Il valore $\sin 75^\circ = \dfrac{\sqrt{6} + \sqrt{2}}{4}$ si ricava con la formula di addizione, come si vede nell'argomento sulle formule goniometriche. Per il teorema dei seni
$$
c = \frac{a\sin\gamma}{\sin\alpha} = 10 \cdot \frac{\sqrt{6} + \sqrt{2}}{4} \cdot \frac{2}{\sqrt{2}} = 5\left( \sqrt{3} + 1 \right) \approx 13{,}66 .
$$
Il lato maggiore è $c$, opposto all'angolo maggiore $\gamma$, come prevede l'ordine dei lati.
:::

:::teorema{#raggio-circoscritto titolo="Raggio della circonferenza circoscritta"}
Il raggio $R$ della circonferenza circoscritta a un triangolo di area $S$ è
$$
R = \frac{a}{2\sin\alpha} = \frac{abc}{4S} .
$$
La prima formula è il teorema dei seni. Per la seconda si sostituisce $\sin\gamma = \dfrac{c}{2R}$ nella formula dell'area, e si ottiene $S = \dfrac{1}{2}\,ab \cdot \dfrac{c}{2R} = \dfrac{abc}{4R}$; da questa uguaglianza si ricava $R$. Per il triangolo rettangolo di lati $6$, $8$, $10$ l'area è $24$, quindi $R = \dfrac{6 \cdot 8 \cdot 10}{4 \cdot 24} = 5$. Il risultato è la metà dell'ipotenusa, perché l'ipotenusa di un triangolo rettangolo è un diametro della circonferenza circoscritta.
:::

## Teorema del coseno

:::richiamo{titolo="Distanza tra due punti"}
La distanza tra i punti $P(x_1, y_1)$ e $Q(x_2, y_2)$ del piano cartesiano è
$$
PQ = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} .
$$
:::

::::teorema{#teorema-coseno titolo="Teorema del coseno"}
In ogni triangolo il quadrato di un lato è uguale alla somma dei quadrati degli altri due lati, diminuita del doppio prodotto di questi lati per il coseno dell'angolo compreso:
$$
a^2 = b^2 + c^2 - 2bc\cos\alpha , \qquad b^2 = a^2 + c^2 - 2ac\cos\beta , \qquad c^2 = a^2 + b^2 - 2ab\cos\gamma .
$$
Il teorema si chiama anche **teorema di Carnot**. Si usa quando sono noti due lati e l'angolo compreso, per trovare il terzo lato, e quando sono noti tre lati, per trovare un angolo. Se $b = 5$, $c = 8$ e $\alpha = 60^\circ$, allora
$$
a^2 = 25 + 64 - 2 \cdot 5 \cdot 8 \cdot \frac{1}{2} = 49 ,
$$
quindi $a = 7$.

::grafico{curve="0+0.6*cos(t),0+0.6*sin(t),0,1.047" linee="0,0 6,0 2,3.464 0,0" segmenti="2,3.464,2,0" punti="0,0,pieno,A;6,0,pieno,B;2,3.464,pieno,C" etichette="0.987,0.57,α;4.367,1.891,a;0.622,1.863,b;4.6,0.3,c" xmin=-1 xmax=7 ymin=-1 ymax=5 uguale=1 titolo="Con $A$ nell'origine e $B$ sull'asse $x$, il vertice $C$ ha coordinate $(b\cos\alpha, b\sin\alpha)$"}

:::dimostrazione
L'idea è mettere il triangolo nel piano cartesiano e calcolare il lato $a$ come distanza tra due vertici. Si sceglie il riferimento con $A$ nell'origine e $B$ sul semiasse positivo delle ascisse, quindi $A = (0, 0)$ e $B = (c, 0)$. Il lato $AC$ è lungo $b$ e forma l'angolo $\alpha$ con il semiasse positivo delle ascisse; per la definizione di seno e coseno il vertice $C$ ha coordinate $(b\cos\alpha, b\sin\alpha)$, anche quando $\alpha$ è ottuso. Per la formula della distanza
$$
\begin{aligned}
a^2 = BC^2 &= (b\cos\alpha - c)^2 + (b\sin\alpha)^2 \\[6pt]
&= b^2\cos^2\alpha - 2bc\cos\alpha + c^2 + b^2\sin^2\alpha \\[6pt]
&= b^2\left( \cos^2\alpha + \sin^2\alpha \right) + c^2 - 2bc\cos\alpha \\[6pt]
&= b^2 + c^2 - 2bc\cos\alpha ,
\end{aligned}
$$
dove nell'ultimo passaggio si è usata la relazione fondamentale $\cos^2\alpha + \sin^2\alpha = 1$. Le altre due formule si ottengono mettendo nell'origine il vertice $B$ oppure il vertice $C$.
:::
::::

:::teorema{#coseno-di-un-angolo titolo="Angolo di un triangolo dati i tre lati"}
Ricavando il coseno dalla formula del teorema del coseno si ottiene
$$
\cos\alpha = \frac{b^2 + c^2 - a^2}{2bc} ,
$$
e formule analoghe per $\beta$ e $\gamma$. Poiché $0 < \alpha < \pi$, il valore di $\cos\alpha$ determina un solo angolo, $\alpha = \arccos\dfrac{b^2 + c^2 - a^2}{2bc}$. Il segno del numeratore dice inoltre di che tipo è l'angolo:

- $\alpha$ è acuto se e solo se $a^2 < b^2 + c^2$;
- $\alpha$ è retto se e solo se $a^2 = b^2 + c^2$;
- $\alpha$ è ottuso se e solo se $a^2 > b^2 + c^2$.

Con $\alpha = 90^\circ$ si ha $\cos\alpha = 0$ e il teorema del coseno diventa il teorema di Pitagora; per questo motivo il teorema del coseno si considera una generalizzazione del teorema di Pitagora. Nel triangolo di lati $4$, $5$, $7$ il lato maggiore soddisfa $49 > 16 + 25$, quindi l'angolo opposto è ottuso, e vale $\arccos\left( -\dfrac{1}{5} \right) \approx 101{,}54^\circ$.
:::

:::attenzione
Un angolo ottuso e il suo supplementare hanno lo stesso seno, quindi il teorema dei seni da solo non distingue un angolo acuto da uno ottuso. Nel triangolo di lati $a = 3$, $b = 5$, $c = 7$ il coseno dà $\cos\gamma = \dfrac{9 + 25 - 49}{30} = -\dfrac{1}{2}$, quindi $\gamma = 120^\circ$. Con il teorema dei seni si trova $\sin\gamma = \dfrac{\sqrt{3}}{2}$, e la calcolatrice restituisce $\arcsin\dfrac{\sqrt{3}}{2} = 60^\circ$, che è un valore errato. Per questo l'angolo opposto al lato maggiore si calcola con il teorema del coseno.
:::

## Risoluzione dei triangoli qualsiasi

:::teorema{#quattro-casi titolo="I quattro casi di risoluzione"}
Un triangolo qualsiasi si risolve conoscendo tre elementi, di cui almeno uno è un lato. I casi sono quattro, e per ciascuno c'è un teorema adatto.

- **Un lato e due angoli.** Il terzo angolo è $180^\circ$ meno la somma degli altri due; gli altri lati si ricavano con il teorema dei seni.
- **Due lati e l'angolo compreso.** Il terzo lato si ricava con il teorema del coseno; poi si calcola con il teorema del coseno l'angolo opposto al lato maggiore, e il terzo angolo per differenza.
- **Tre lati.** Esiste un triangolo se e solo se vale la disuguaglianza triangolare. Due angoli si ricavano con il teorema del coseno, il terzo per differenza.
- **Due lati e l'angolo opposto a uno di essi.** Il teorema dei seni dà il seno di un secondo angolo, e i triangoli possono essere zero, uno o due. È il **caso ambiguo**.

Nei primi tre casi il triangolo, se esiste, è unico, in accordo con i criteri di congruenza.
:::

:::esempio{titolo="Due lati e l'angolo compreso"}
Si risolve il triangolo con $b = 5$, $c = 8$ e $\alpha = 60^\circ$. Per il teorema del coseno $a = 7$. Il lato maggiore è $c$, quindi si calcola per primo $\gamma$:
$$
\cos\gamma = \frac{a^2 + b^2 - c^2}{2ab} = \frac{49 + 25 - 64}{70} = \frac{1}{7} , \qquad \gamma = \arccos\frac{1}{7} \approx 81{,}79^\circ .
$$
Il terzo angolo è $\beta = 180^\circ - 60^\circ - \gamma \approx 38{,}21^\circ$. Come controllo, $\cos\beta = \dfrac{a^2 + c^2 - b^2}{2ac} = \dfrac{88}{112} = \dfrac{11}{14}$, e $\arccos\dfrac{11}{14} \approx 38{,}21^\circ$.
:::

:::esempio{titolo="Tre lati"}
Si risolve il triangolo con $a = 3$, $b = 5$, $c = 7$. La disuguaglianza triangolare è soddisfatta, perché $7 < 3 + 5$. L'angolo opposto al lato maggiore è $\gamma = 120^\circ$, come si è calcolato con il teorema del coseno. Per l'angolo $\alpha$ si ha
$$
\cos\alpha = \frac{b^2 + c^2 - a^2}{2bc} = \frac{25 + 49 - 9}{70} = \frac{13}{14} , \qquad \alpha \approx 21{,}79^\circ ,
$$
e quindi $\beta = 180^\circ - 120^\circ - \alpha \approx 38{,}21^\circ$.
:::

::::teorema{#caso-ambiguo titolo="Caso ambiguo"}
Siano noti i lati $a$ e $b$ e l'angolo $\alpha$, opposto ad $a$. Sia $h = b\sin\alpha$ la distanza del vertice $C$ dalla retta del lato $c$.

- Se $\alpha$ è acuto:
  - per $a < h$ non esiste alcun triangolo;
  - per $a = h$ esiste un solo triangolo, rettangolo in $B$;
  - per $h < a < b$ esistono due triangoli;
  - per $a \geq b$ esiste un solo triangolo.
- Se $\alpha$ è retto oppure ottuso, esiste un triangolo se e solo se $a > b$, e in questo caso è unico.

Il teorema dei seni dà $\sin\beta = \dfrac{b\sin\alpha}{a} = \dfrac{h}{a}$. Nel caso di due triangoli i valori di $\beta$ sono l'angolo acuto $\beta_1 = \arcsin\dfrac{h}{a}$ e il suo supplementare $\beta_2 = 180^\circ - \beta_1$.

::grafico{assi=0 curve="3.464+2.5*cos(t),2+2.5*sin(t),-2.564,-0.577;0+0.8*cos(t),0+0.8*sin(t),0,0.524" linee="0,0 3.464,2 1.964,0;3.464,2 4.964,0;0,0 5.6,0" segmenti="3.464,2,3.464,0" punti="1.964,0,pieno;4.964,0,pieno" etichette="1.391,0.373,α;-0.3,-0.3,A;3.464,2.35,C;1.964,-0.4,B₁;4.964,-0.4,B₂;1.432,1.3,b;3.714,1,h;2.364,1.1,a;4.564,1.1,a" xmin=-1 xmax=6 ymin=-1 ymax=3 uguale=1 titolo="Con $\alpha = 30^\circ$, $b = 8$ e $a = 5$ l'arco di centro $C$ e raggio $a$ taglia la semiretta di origine $A$ in due punti, perché $h = 4 < a < b$"}

:::dimostrazione
L'idea è costruire il triangolo con riga e compasso. Si disegnano l'angolo $\alpha$ con vertice $A$ e, su uno dei suoi lati, il punto $C$ con $AC = b$. Il vertice $B$ sta sull'altro lato dell'angolo, che è una semiretta di origine $A$, e dista $a$ da $C$; quindi $B$ è un punto in cui la circonferenza di centro $C$ e raggio $a$ taglia questa semiretta. La retta che contiene la semiretta dista $h = b\sin\alpha$ da $C$, per il primo teorema sui triangoli rettangoli.

Sia $\alpha$ acuto. Per $a < h$ la circonferenza non incontra la retta. Per $a = h$ la circonferenza è tangente alla retta nel piede $H$ della perpendicolare, che sta sulla semiretta perché $\alpha$ è acuto. Per $a > h$ la circonferenza taglia la retta in due punti, simmetrici rispetto a $H$. Entrambi stanno sulla semiretta, con $B \neq A$, se e solo se il raggio $a$ è minore di $CA = b$; per $a \geq b$ uno dei due punti sta sul prolungamento della semiretta oltre $A$, oppure coincide con $A$, e resta un solo triangolo.

Sia $\alpha$ retto oppure ottuso. Allora l'angolo in $B$ è acuto e minore di $\alpha$, quindi per l'ordine dei lati $a > b$ è necessario. Se $a > b$ la circonferenza taglia la retta in due punti, uno da ciascuna parte di $A$, e uno solo dei due sta sulla semiretta.
:::
::::

:::esempio{titolo="Un caso con due triangoli"}
Siano $\alpha = 30^\circ$, $b = 8$, $a = 5$. La distanza è $h = 8\sin 30^\circ = 4$, e vale $4 < 5 < 8$, quindi i triangoli sono due. Il teorema dei seni dà
$$
\sin\beta = \frac{8 \cdot \dfrac{1}{2}}{5} = \frac{4}{5} , \qquad \beta_1 = \arcsin\frac{4}{5} \approx 53{,}13^\circ , \qquad \beta_2 \approx 126{,}87^\circ .
$$
Il terzo lato si trova con il teorema del coseno, che dà un'equazione di secondo grado in $c$:
$$
25 = 64 + c^2 - 2 \cdot 8 \cdot c \cdot \frac{\sqrt{3}}{2} \quad \Longrightarrow \quad c^2 - 8\sqrt{3}\,c + 39 = 0 \quad \Longrightarrow \quad c = 4\sqrt{3} \pm 3 .
$$
Le due soluzioni sono positive e corrispondono ai due triangoli. Il triangolo $AB_2C$, con $c = 4\sqrt{3} + 3 \approx 9{,}93$, ha l'angolo acuto $\beta_1$; il triangolo $AB_1C$, con $c = 4\sqrt{3} - 3 \approx 3{,}93$, ha l'angolo ottuso $\beta_2$.
:::

## Distanze e altezze

:::definizione{#angolo-elevazione titolo="Angolo di elevazione e angolo di depressione"}
Un osservatore guarda un punto $T$. L'**angolo di elevazione** è l'angolo che la visuale verso $T$ forma con il piano orizzontale quando $T$ sta più in alto dell'osservatore; quando $T$ sta più in basso, lo stesso angolo si chiama **angolo di depressione**. Questi angoli si misurano con un teodolite e permettono di calcolare altezze e distanze che non si misurano direttamente.

Se il piede di un albero dista $30\,\mathrm{m}$ dall'osservatore, su un terreno orizzontale, e la cima si vede con un angolo di elevazione di $40^\circ$, l'altezza dell'albero sopra il livello dell'occhio è il cateto opposto all'angolo. Per il secondo teorema sui triangoli rettangoli si ha quindi $h = 30\tan 40^\circ \approx 25{,}17\,\mathrm{m}$.
:::

:::esempio{#altezza-torre titolo="Altezza di una torre con il piede inaccessibile"}
Il piede $O$ di una torre non si raggiunge. Da un punto $A$ la cima $T$ si vede con un angolo di elevazione di $30^\circ$; ci si avvicina di $20\,\mathrm{m}$ lungo la retta $AO$, fino al punto $B$, e da qui l'angolo di elevazione è $60^\circ$. Il terreno è orizzontale e le misure si considerano prese al livello del suolo.

::grafico{assi=0 curve="0+1*cos(t),0+1*sin(t),0,0.524;4+0.6*cos(t),0+0.6*sin(t),0,1.047" linee="0,0 6,0 6,3.464;0,0 6,3.464;4,0 6,3.464;5.7,0 5.7,0.3 6,0.3" etichette="1.642,0.44,30°;4.987,0.57,60°;-0.3,-0.35,A;4,-0.4,B;6.3,-0.35,O;6.3,3.6,T;2,-0.45,20 m;5,-0.45,d;6.35,1.7,h" xmin=-1 xmax=7.5 ymin=-1 ymax=4.2 uguale=1 titolo="Gli angoli di elevazione della cima $T$ della torre misurati da $A$ e da $B$, con $AB = 20\,\mathrm{m}$"}

Siano $h = OT$ l'altezza e $d = BO$. Per il secondo teorema sui triangoli rettangoli, nei triangoli $BOT$ e $AOT$, rettangoli in $O$, si ha
$$
h = d\tan 60^\circ = \sqrt{3}\,d , \qquad h = (d + 20)\tan 30^\circ = \frac{d + 20}{\sqrt{3}} .
$$
Le due espressioni danno la stessa altezza, quindi $\sqrt{3}\,d = \dfrac{d + 20}{\sqrt{3}}$, cioè $3d = d + 20$. Ne segue $d = 10\,\mathrm{m}$ e $h = 10\sqrt{3}\,\mathrm{m} \approx 17{,}32\,\mathrm{m}$.

Lo stesso risultato si ottiene con il teorema dei seni nel triangolo $ABT$. L'angolo in $B$ vale $180^\circ - 60^\circ = 120^\circ$, quindi l'angolo in $T$ vale $180^\circ - 30^\circ - 120^\circ = 30^\circ$, e il triangolo è isoscele con $BT = AB = 20\,\mathrm{m}$. Allora $h = BT\sin 60^\circ = 10\sqrt{3}\,\mathrm{m}$.
:::

:::esempio{#distanza-inaccessibile titolo="Distanza di un punto sull'altra riva di un fiume"}
Da una riva di un fiume si vuole la distanza di un punto $P$ sulla riva opposta. Si fissa sulla propria riva una base $AB = 100\,\mathrm{m}$ e si misurano gli angoli $\widehat{PAB} = 75^\circ$ e $\widehat{PBA} = 45^\circ$.

::grafico{assi=0 curve="0+0.6*cos(t),0+0.6*sin(t),0,1.309;5+0.6*cos(t),0+0.6*sin(t),2.356,3.142;1.057+0.6*cos(t),3.943+0.6*sin(t),-1.833,-0.785" linee="0,0 5,0 1.057,3.943 0,0" segmenti="-1,1.6,6,1.6;-1,2.8,6,2.8" etichette="0.904,0.694,75°;3.947,0.436,45°;1.352,2.842,60°;-0.377,-0.246,A;5.412,-0.182,B;0.902,4.366,P;2.637,-0.376,100 m;5.2,2.2,fiume" xmin=-1 xmax=6.5 ymin=-1 ymax=5 uguale=1 titolo="Dalla base $AB$ si misurano gli angoli verso il punto $P$ sull'altra riva; il terzo angolo vale $180^\circ - 75^\circ - 45^\circ = 60^\circ$"}

L'angolo in $P$ è $180^\circ - 75^\circ - 45^\circ = 60^\circ$. Il problema è nel primo caso di risoluzione, un lato e due angoli, quindi si applica il teorema dei seni:
$$
AP = \frac{AB\sin 45^\circ}{\sin 60^\circ} = 100 \cdot \frac{\sqrt{2}}{2} \cdot \frac{2}{\sqrt{3}} = \frac{100\sqrt{6}}{3} \approx 81{,}65\,\mathrm{m} .
$$
La distanza di $P$ dalla retta $AB$ è il cateto opposto all'angolo di $75^\circ$ nel triangolo rettangolo che ha ipotenusa $AP$, e vale $AP\sin 75^\circ \approx 78{,}87\,\mathrm{m}$.
:::

## Forze e piano inclinato

:::definizione{#componenti-forza titolo="Componenti di una forza"}
Una forza $\vec F$ di intensità $F$ che forma l'angolo $\theta$ con l'asse $x$ è la somma di due forze dirette come gli assi, dette **componenti**. Le componenti sono i cateti del triangolo rettangolo che ha per ipotenusa la forza, quindi per il primo teorema sui triangoli rettangoli
$$
F_x = F\cos\theta , \qquad F_y = F\sin\theta .
$$
Una cassa è trascinata con una fune che tira con una forza di $50\,\mathrm{N}$ inclinata di $30^\circ$ sull'orizzontale. La componente orizzontale, che sposta la cassa, è $F_x = 50\cos 30^\circ = 25\sqrt{3}\,\mathrm{N} \approx 43{,}3\,\mathrm{N}$; la componente verticale, che solleva in parte la cassa, è $F_y = 50\sin 30^\circ = 25\,\mathrm{N}$.
:::

:::esempio{#piano-inclinato titolo="Corpo su un piano inclinato"}
Un corpo di massa $m = 10\,\mathrm{kg}$ è appoggiato su un piano inclinato di $\alpha = 30^\circ$, senza attrito. Il peso ha intensità $P = mg = 10 \cdot 9{,}8 = 98\,\mathrm{N}$ ed è diretto verso il basso. Si scompone il peso lungo il piano e perpendicolarmente al piano. L'angolo tra il peso e la componente perpendicolare è uguale ad $\alpha$, perché i due angoli hanno i lati perpendicolari; perciò, per il primo teorema sui triangoli rettangoli,
$$
P_\parallel = P\sin\alpha = 98 \cdot \frac{1}{2} = 49\,\mathrm{N} , \qquad P_\perp = P\cos\alpha = 98 \cdot \frac{\sqrt{3}}{2} = 49\sqrt{3}\,\mathrm{N} \approx 84{,}9\,\mathrm{N} .
$$

::grafico{assi=0 curve="0+1*cos(t),0+1*sin(t),0,0.524;3.325+0.7*cos(t),2.324+0.7*sin(t),-1.571,-1.047" poligoni="0,0 6,0 6,3.464;3.197,1.846 3.803,2.196 3.453,2.802 2.847,2.452" segmenti="2.459,1.824,3.325,0.324;4.191,0.824,3.325,0.324" vettori="3.325,2.324,3.325,0.324,P;3.325,2.324,2.459,1.824,P∥;3.325,2.324,4.191,0.824,P⊥" etichette="1.545,0.414,α;3.615,1.242,α" xmin=-0.5 xmax=6.5 ymin=-0.5 ymax=4 uguale=1 titolo="Sul piano inclinato di un angolo $\alpha$ il peso $\vec P$ si scompone in $P_\parallel = P\sin\alpha$ lungo il piano e $P_\perp = P\cos\alpha$ perpendicolare al piano"}

La componente perpendicolare è bilanciata dalla reazione del piano. Per tenere fermo il corpo serve quindi una forza parallela al piano, diretta verso l'alto, di $49\,\mathrm{N}$.
:::

:::teorema{#risultante-due-forze titolo="Risultante di due forze"}
Siano $\vec F_1$ e $\vec F_2$ due forze applicate nello stesso punto, di intensità $F_1$ e $F_2$, che formano l'angolo $\theta$. L'intensità della risultante $\vec R = \vec F_1 + \vec F_2$ è
$$
R^2 = F_1^2 + F_2^2 + 2F_1F_2\cos\theta .
$$
Per la regola del parallelogramma $\vec R$ è la diagonale del parallelogramma costruito sulle due forze. Questa diagonale divide il parallelogramma in due triangoli con lati $F_1$, $F_2$, $R$, nei quali l'angolo opposto a $R$ è $\pi - \theta$. Per il teorema del coseno $R^2 = F_1^2 + F_2^2 - 2F_1F_2\cos(\pi - \theta)$, e poiché $\cos(\pi - \theta) = -\cos\theta$ si ottiene la formula.

::grafico{assi=0 curve="0+0.7*cos(t),0+0.7*sin(t),0,1.047;3+0.5*cos(t),0+0.5*sin(t),1.047,3.142" segmenti="3,0,5.5,4.33;2.5,4.33,5.5,4.33" vettori="0,0,3,0,F₁;0,0,2.5,4.33,F₂;0,0,5.5,4.33,R" etichette="1.031,0.595,θ;2.35,1.126,π − θ" xmin=-0.5 xmax=6.5 ymin=-1 ymax=5 uguale=1 titolo="La risultante $\vec R$ è la diagonale del parallelogramma costruito su $\vec F_1$ e $\vec F_2$; nel triangolo di lati $F_1$, $F_2$, $R$ l'angolo opposto a $R$ è $\pi - \theta$"}

Con $F_1 = 3\,\mathrm{N}$, $F_2 = 5\,\mathrm{N}$ e $\theta = 60^\circ$ si ha $R^2 = 9 + 25 + 15 = 49$, quindi $R = 7\,\mathrm{N}$. L'angolo $\varphi$ tra $\vec R$ e $\vec F_1$ si ricava con il teorema dei seni nello stesso triangolo, che dà $\sin\varphi = \dfrac{F_2\sin(\pi - \theta)}{R} = \dfrac{5\sqrt{3}}{14}$, da cui $\varphi \approx 38{,}21^\circ$. L'angolo $\varphi$ è acuto, perché il triangolo ha già l'angolo ottuso $\pi - \theta$.
:::

## Problemi con un angolo variabile

:::definizione{#problemi-angolo-variabile titolo="Problemi con un angolo variabile"}
In molti problemi di geometria la figura dipende da un angolo che può variare, e si chiede per quali valori dell'angolo una grandezza assume un valore assegnato. Si procede in quattro passi.

- Si sceglie come incognita un angolo $x$, in radianti, e si scrivono le **limitazioni** geometriche, cioè l'intervallo dei valori di $x$ per cui la figura esiste.
- Si esprimono le lunghezze che servono in funzione di $x$, con i teoremi sui triangoli.
- Si scrive la condizione del problema come equazione goniometrica in $x$.
- Si risolve l'equazione, come si vede nell'argomento sulle equazioni goniometriche, e si accettano solo le soluzioni che soddisfano le limitazioni.

Per esempio, un triangolo ha due lati di lunghezza $6$ e $10$ e l'angolo compreso $x$, con $0 < x < \pi$. La sua area è $S(x) = \dfrac{1}{2} \cdot 6 \cdot 10\sin x = 30\sin x$. L'area vale $15$ se $\sin x = \dfrac{1}{2}$, cioè per $x = \dfrac{\pi}{6}$ oppure $x = \dfrac{5\pi}{6}$; entrambi i valori soddisfano le limitazioni. Poiché $\sin x \leq 1$, l'area massima è $30$, e si ha per $x = \dfrac{\pi}{2}$.
:::

:::esempio{#triangolo-semicirconferenza titolo="Triangolo inscritto in una semicirconferenza"}
Una semicirconferenza ha diametro $AB = 2r$. Si cerca il punto $P$ della semicirconferenza tale che $AP + PB = (1 + \sqrt{3})\,r$. Si pone $x = \widehat{PAB}$. Il punto $P$ è diverso da $A$ e da $B$, quindi le limitazioni sono $0 < x < \dfrac{\pi}{2}$.

::grafico{assi=0 curve="3*cos(t),3*sin(t),0,3.1416;-3+0.8*cos(t),0+0.8*sin(t),0,0.524" linee="-3,0 3,0 1.5,2.598 -3,0;1.197,2.423 1.372,2.12 1.675,2.295" punti="0,0,pieno" etichette="-1.532,0.393,x;-3.437,-0.108,A;3.425,-0.147,B;1.725,2.988,P;0,-0.4,O;-1.4,1.9,2r cos x;2.95,1.6,2r sin x" xmin=-4 xmax=4 ymin=-1 ymax=4 uguale=1 titolo="Il triangolo $ABP$ inscritto nella semicirconferenza è rettangolo in $P$, con $AP = 2r\cos x$ e $BP = 2r\sin x$"}

Il triangolo $ABP$ è rettangolo in $P$, perché l'angolo in $P$ insiste su una semicirconferenza. Per il primo teorema sui triangoli rettangoli $AP = 2r\cos x$ e $PB = 2r\sin x$. La condizione diventa
$$
2r\cos x + 2r\sin x = (1 + \sqrt{3})\,r \quad \Longrightarrow \quad \sin x + \cos x = \frac{1 + \sqrt{3}}{2} .
$$
È un'equazione lineare in seno e coseno. Con il metodo dell'angolo aggiunto si ha $\sin x + \cos x = \sqrt{2}\sin\left( x + \dfrac{\pi}{4} \right)$, quindi
$$
\sin\left( x + \frac{\pi}{4} \right) = \frac{1 + \sqrt{3}}{2\sqrt{2}} = \frac{\sqrt{2} + \sqrt{6}}{4} = \sin\frac{5\pi}{12} .
$$
Nelle limitazioni l'angolo $x + \dfrac{\pi}{4}$ è compreso tra $\dfrac{\pi}{4}$ e $\dfrac{3\pi}{4}$, quindi le soluzioni sono $x + \dfrac{\pi}{4} = \dfrac{5\pi}{12}$ e $x + \dfrac{\pi}{4} = \pi - \dfrac{5\pi}{12} = \dfrac{7\pi}{12}$, cioè $x = \dfrac{\pi}{6}$ e $x = \dfrac{\pi}{3}$. Entrambe sono accettabili. Per $x = \dfrac{\pi}{6}$ si ha $AP = \sqrt{3}\,r$ e $PB = r$; per $x = \dfrac{\pi}{3}$ i due valori sono scambiati. Le due posizioni di $P$ sono quindi simmetriche rispetto all'asse del diametro $AB$.
:::
