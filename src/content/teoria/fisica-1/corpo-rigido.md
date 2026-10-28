---
titolo: Dinamica del corpo rigido
sommario: Come si descrive la rotazione di un corpo rigido, come momento delle forze, momento d'inerzia e momento angolare ne determinano il moto, e quando il corpo rotola senza strisciare o resta in equilibrio.
---

## Corpo rigido e grandezze angolari

:::definizione{#corpo-rigido titolo="Corpo rigido"}
Un **corpo rigido** è un sistema di punti materiali le cui distanze reciproche restano costanti durante il moto. È un modello, adeguato quando le deformazioni del corpo reale sono trascurabili rispetto alle sue dimensioni. La massa può essere concentrata in punti oppure distribuita con densità $\rho$; in questo caso un elemento di volume $dV$ ha massa $dm = \rho\,dV$ e le somme sui punti diventano integrali.

Il moto è di **traslazione** se ogni segmento che congiunge due punti del corpo resta parallelo a sé stesso, e allora tutti i punti hanno la stessa velocità. È di **rotazione attorno a un asse fisso** se i punti di una retta restano fermi e ogni altro punto descrive una circonferenza con centro sull'asse. Il moto più generale si scompone in una traslazione del centro di massa e in una rotazione attorno a un asse passante per il centro di massa.
:::

:::definizione{#grandezze-angolari titolo="Posizione, velocità e accelerazione angolare"}
Si consideri un corpo rigido che ruota attorno a un asse fisso, scelto come asse $z$. La configurazione del corpo è individuata da un solo numero, la **posizione angolare** $\theta$, cioè l'angolo in radianti che una semiretta solidale con il corpo e perpendicolare all'asse forma con una semiretta fissa. La velocità angolare e l'accelerazione angolare sono
$$
\omega = \frac{d\theta}{dt} ,
\qquad
\alpha = \frac{d\omega}{dt} = \frac{d^2\theta}{dt^2} ,
$$
e si misurano in $\mathrm{rad/s}$ e in $\mathrm{rad/s^2}$. Sono le stesse per *tutti* i punti del corpo, e per questo la rotazione si descrive con un'unica legge oraria $\theta(t)$. Si pone $\omega > 0$ quando il corpo, visto dalla parte positiva dell'asse $z$, ruota in verso antiorario; il **vettore velocità angolare** $\vec{\omega} = \omega\,\hat{k}$ è diretto lungo l'asse, con il verso dato dalla regola della mano destra.

Quando $\alpha$ è costante valgono le leggi del moto rettilineo uniformemente accelerato, per le quali si rimanda all'argomento sulla cinematica in una dimensione, con $\theta$ al posto di $x$:
$$
\omega = \omega_0 + \alpha t ,
\qquad
\theta = \theta_0 + \omega_0 t + \frac{1}{2}\alpha t^2 ,
\qquad
\omega^2 = \omega_0^2 + 2\alpha\,(\theta - \theta_0) .
$$
Una mola che parte da ferma con $\alpha = 4{,}0\,\mathrm{rad/s^2}$ dopo $5{,}0\,\mathrm{s}$ ruota a $\omega = 20\,\mathrm{rad/s}$ e ha descritto l'angolo $\theta - \theta_0 = 50\,\mathrm{rad}$, cioè $\dfrac{50}{2\pi} \approx 8{,}0$ giri.
:::

:::teorema{#velocita-dei-punti titolo="Velocità e accelerazione dei punti del corpo"}
Sia $P$ un punto del corpo a distanza $r$ dall'asse di rotazione. Allora $P$ descrive una circonferenza di raggio $r$ e
$$
v = \omega r ,
\qquad
a_t = \alpha r ,
\qquad
a_c = \omega^2 r = \frac{v^2}{r} ,
$$
dove $a_t$ è l'accelerazione tangenziale e $a_c$ l'accelerazione centripeta, diretta verso l'asse. Le formule seguono da quelle del moto circolare, per le quali si rimanda all'argomento sul moto nel piano: l'arco percorso da $P$ è $s = r\theta$, e derivando rispetto al tempo si ottengono $v$ e $a_t$. In forma vettoriale, con l'origine sull'asse, $\vec{v} = \vec{\omega} \times \vec{r}$. Perciò in un corpo che ruota la velocità cresce linearmente con la distanza dall'asse; un disco di raggio $0{,}20\,\mathrm{m}$ che ruota a $30\,\mathrm{rad/s}$ ha sul bordo $v = 6{,}0\,\mathrm{m/s}$ e $a_c = 180\,\mathrm{m/s^2}$.
:::

## Momento di una forza e momento angolare

:::richiamo{titolo="Prodotto vettoriale"}
Per due vettori $\vec{a}$ e $\vec{b}$ che formano l'angolo $\varphi$, il prodotto vettoriale $\vec{a} \times \vec{b}$ è ortogonale a entrambi, ha modulo $ab\sin\varphi$ e verso dato dalla regola della mano destra; inoltre $\vec{b} \times \vec{a} = -\,\vec{a} \times \vec{b}$, e il prodotto di due vettori paralleli è nullo. Si rimanda all'argomento sui vettori nel piano e nello spazio di Algebra lineare.
:::

:::definizione{#momento-di-una-forza titolo="Momento di una forza"}
Sia $\vec{F}$ una forza applicata nel punto $P$ e sia $O$ un punto fissato, detto **polo**. Il **momento della forza** rispetto a $O$ è
$$
\vec{M}_O = \vec{r} \times \vec{F} ,
\qquad
\vec{r} = \overrightarrow{OP} .
$$
Il suo modulo è $M_O = rF\sin\varphi = F b$, dove $\varphi$ è l'angolo tra $\vec{r}$ e $\vec{F}$ e $b = r\sin\varphi$ è il **braccio**, cioè la distanza di $O$ dalla retta d'azione della forza; si misura in $\mathrm{N\cdot m}$. A parità di forza il momento cresce con il braccio, ed è nullo quando la retta d'azione passa per $O$. Una chiave lunga $0{,}25\,\mathrm{m}$ spinta all'estremità con $40\,\mathrm{N}$ perpendicolari al manico produce un momento di $10\,\mathrm{N\cdot m}$; con la forza a $30^\circ$ dal manico il momento è $5{,}0\,\mathrm{N\cdot m}$.

Per un corpo che ruota attorno a un asse $z$ conta il **momento assiale** $M_z = \hat{k} \cdot \vec{M}_O$, con $O$ sull'asse; non dipende dalla posizione di $O$ sull'asse, perché spostando il polo lungo l'asse $\vec{r}$ cambia di un vettore parallelo a $\hat{k}$. Per una forza in un piano perpendicolare all'asse $M_z = \pm F b$, con il segno positivo quando la forza tende a far ruotare il corpo in verso antiorario.

::grafico{vettori="0,0,3,1,r;3,1,4.6,0.2,F" segmenti="0,0,1,2;1,2,3,1;3,1,4.5,1.5" punti="3,1,pieno,P;1,2,vuoto" etichette="0.2,1.2,b;3.65,0.95,φ" xmin=-0.6 xmax=5.2 ymin=-0.6 ymax=2.6 uguale=1 titolo="Il braccio $b$ è la distanza del polo $O$ dalla retta d'azione di $\vec{F}$, quindi $b = r\sin\varphi$ e $M_O = F b$"}

:::

:::definizione{#momento-angolare titolo="Momento angolare"}
Il **momento angolare** rispetto al polo $O$ di un punto materiale di massa $m$, posizione $\vec{r}$ e velocità $\vec{v}$ è
$$
\vec{L}_O = \vec{r} \times m\vec{v} = \vec{r} \times \vec{p} ,
$$
e si misura in $\mathrm{kg\cdot m^2/s}$; il momento angolare di un sistema di punti è la somma dei momenti angolari dei singoli punti. Ha nelle rotazioni il ruolo che la quantità di moto ha nelle traslazioni, e la sua variazione è legata al momento delle forze esterne dalla seconda equazione cardinale. Per un punto in moto circolare uniforme di raggio $r$, rispetto al centro, $\vec{r}$ è perpendicolare a $\vec{v}$, quindi $L_O = m v r = m r^2 \omega$ e $\vec{L}_O$ è diretto lungo l'asse della circonferenza.
:::

::::teorema{#momento-angolare-asse-fisso titolo="Momento angolare di un corpo rigido in rotazione"}
Sia un corpo rigido, formato da punti di massa $m_i$, che ruota con velocità angolare $\omega$ attorno all'asse fisso $z$, e sia $R_i$ la distanza del punto $i$-esimo dall'asse. Allora la componente lungo l'asse del momento angolare, calcolato rispetto a un polo dell'asse, è
$$
L_z = \Big( \sum_i m_i R_i^2 \Big)\,\omega .
$$
Il coefficiente di $\omega$ dipende solo da come la massa è distribuita attorno all'asse ed è il momento d'inerzia del corpo rispetto all'asse. Due masse di $0{,}50\,\mathrm{kg}$ agli estremi di un'asta leggera lunga $0{,}60\,\mathrm{m}$, che ruota a $4{,}0\,\mathrm{rad/s}$ attorno all'asse perpendicolare per il punto medio, hanno $L_z = 2 \cdot 0{,}50 \cdot 0{,}30^2 \cdot 4{,}0 = 0{,}36\,\mathrm{kg\cdot m^2/s}$.

:::dimostrazione
Si sceglie il polo $O$ sull'asse e si scrive la posizione del punto $i$-esimo come $\vec{r}_i = \vec{R}_i + z_i\,\hat{k}$, con $\vec{R}_i$ perpendicolare all'asse e di modulo $R_i$. Il punto descrive una circonferenza di raggio $R_i$, quindi la sua velocità $\vec{v}_i$ è perpendicolare sia a $\hat{k}$ sia a $\vec{R}_i$ e ha modulo $|\omega| R_i$. Allora
$$
\hat{k} \cdot (\vec{r}_i \times m_i\vec{v}_i) = \hat{k} \cdot (\vec{R}_i \times m_i\vec{v}_i) + z_i\,\hat{k} \cdot (\hat{k} \times m_i\vec{v}_i) .
$$
Il secondo addendo è nullo, perché $\hat{k} \times m_i\vec{v}_i$ è ortogonale a $\hat{k}$. Il vettore $\vec{R}_i \times m_i\vec{v}_i$ è parallelo a $\hat{k}$, poiché $\vec{R}_i$ e $\vec{v}_i$ sono perpendicolari all'asse, e ha modulo $m_i R_i \cdot |\omega| R_i$, poiché $\vec{R}_i$ e $\vec{v}_i$ sono ortogonali; il suo verso è quello di $\hat{k}$ per $\omega > 0$ e quello opposto per $\omega < 0$. Quindi il contributo del punto $i$-esimo a $L_z$ è $m_i R_i^2\,\omega$, e sommando su tutti i punti si ottiene la tesi.
:::
::::

::::teorema{#momento-della-forza-peso titolo="Momento della forza peso"}
In un campo di gravità uniforme il momento risultante, rispetto a un polo $O$, dei pesi dei singoli punti di un corpo di massa $M$ è uguale al momento del peso totale $M\vec{g}$ applicato nel centro di massa $C$:
$$
\sum_i \vec{r}_i \times m_i\vec{g} = \vec{r}_C \times M\vec{g} .
$$
Per questo il centro di massa si chiama anche **baricentro**, e nel calcolo dei momenti il peso si tratta come una sola forza applicata in $C$; in un'asta omogenea $C$ è il punto medio.

:::dimostrazione
Il vettore $\vec{g}$ è lo stesso per tutti i punti, quindi si raccoglie a destra: $\sum_i \vec{r}_i \times m_i\vec{g} = \big( \sum_i m_i\vec{r}_i \big) \times \vec{g}$. Per definizione di centro di massa $\sum_i m_i\vec{r}_i = M\vec{r}_C$, e perciò il momento è $\vec{r}_C \times M\vec{g}$.
:::
::::

## Momento d'inerzia

:::definizione{#momento-di-inerzia titolo="Momento d'inerzia"}
Il **momento d'inerzia** di un sistema di punti materiali rispetto a un asse è
$$
I = \sum_i m_i R_i^2 ,
$$
dove $R_i$ è la distanza dall'asse del punto di massa $m_i$; per un corpo con massa distribuita in modo continuo la somma diventa l'integrale $I = \displaystyle\int R^2\,dm$ esteso a tutto il corpo. Si misura in $\mathrm{kg\cdot m^2}$. Nelle rotazioni ha il ruolo che la massa ha nelle traslazioni: compare nel momento angolare $L_z = I\omega$, nell'equazione del moto $M_z = I\alpha$ e nell'energia cinetica $\dfrac{1}{2} I\omega^2$. Dipende dall'asse e cresce quanto più la massa è lontana dall'asse. È **additivo**: il momento d'inerzia di un corpo composto è la somma di quelli delle parti rispetto allo stesso asse.
:::

:::richiamo{titolo="Integrale definito"}
Per una funzione continua $f$ su $[a, b]$, l'integrale $\displaystyle\int_a^b f(x)\,dx$ è il limite delle somme $\sum_k f(x_k)\,\Delta x_k$ quando l'ampiezza degli intervalli $\Delta x_k$ tende a zero, e se $F$ è una primitiva di $f$ vale $\displaystyle\int_a^b f(x)\,dx = F(b) - F(a)$. Si rimanda all'argomento sul calcolo integrale di Analisi 1.
:::

::::teorema{#momenti-di-inerzia-notevoli titolo="Momenti d'inerzia di corpi omogenei"}
Per i corpi omogenei di massa $M$ seguenti valgono i momenti d'inerzia indicati.

- Asta sottile di lunghezza $L$, asse perpendicolare per il centro: $I = \dfrac{1}{12} M L^2$; asse perpendicolare per un estremo: $I = \dfrac{1}{3} M L^2$.
- Anello sottile o cilindro cavo a parete sottile di raggio $R$, asse di simmetria: $I = M R^2$.
- Disco o cilindro pieno di raggio $R$, asse di simmetria: $I = \dfrac{1}{2} M R^2$.
- Sfera piena di raggio $R$, asse per il centro: $I = \dfrac{2}{5} M R^2$.

Con questi valori e con l'additività si calcola il momento d'inerzia di corpi composti. Un disco di $2{,}0\,\mathrm{kg}$ e raggio $0{,}10\,\mathrm{m}$ ha $I = \dfrac{1}{2} \cdot 2{,}0 \cdot 0{,}10^2 = 0{,}010\,\mathrm{kg\cdot m^2}$, mentre un anello con la stessa massa e lo stesso raggio ha momento d'inerzia doppio, perché tutta la sua massa sta alla distanza massima dall'asse.

:::dimostrazione
Per l'asta si pone l'asse $x$ lungo l'asta, con l'origine nel centro. Il tratto di lunghezza $dx$ ha massa $dm = \dfrac{M}{L}\,dx$ e dista $|x|$ dall'asse, quindi
$$
I = \int_{-\frac{L}{2}}^{\frac{L}{2}} x^2\,\frac{M}{L}\,dx = \frac{M}{L}\left[ \frac{x^3}{3} \right]_{-\frac{L}{2}}^{\frac{L}{2}} = \frac{M}{L} \cdot \frac{L^3}{12} = \frac{1}{12} M L^2 .
$$
Con l'origine in un estremo l'integrale si estende da $0$ a $L$ e vale $\dfrac{M}{L} \cdot \dfrac{L^3}{3} = \dfrac{1}{3} M L^2$. Nell'anello tutti i punti distano $R$ dall'asse, quindi $I = \displaystyle\int R^2\,dm = R^2 \int dm = M R^2$. Il disco si scompone in anelli concentrici di raggio $r$ e spessore $dr$, di area $2\pi r\,dr$ e massa $dm = \dfrac{M}{\pi R^2}\,2\pi r\,dr$; per il risultato sull'anello ciascuno contribuisce con $r^2\,dm$, perciò
$$
I = \int_0^R r^2 \cdot \frac{2M}{R^2}\,r\,dr = \frac{2M}{R^2} \cdot \frac{R^4}{4} = \frac{1}{2} M R^2 .
$$
Il cilindro pieno è una pila di dischi coassiali e ha quindi lo stesso momento d'inerzia. La sfera si scompone in dischi perpendicolari all'asse: il disco alla quota $z$ ha raggio $\sqrt{R^2 - z^2}$ e massa $dm = \rho\,\pi(R^2 - z^2)\,dz$, con $\rho = \dfrac{3M}{4\pi R^3}$, e per il risultato sul disco contribuisce con $\dfrac{1}{2}(R^2 - z^2)\,dm$. Quindi
$$
I = \frac{\rho\pi}{2} \int_{-R}^{R} (R^2 - z^2)^2\,dz = \frac{\rho\pi}{2} \cdot \frac{16}{15} R^5 = \frac{2}{5} M R^2 .
$$
:::
::::

::::teorema{#teorema-di-steiner titolo="Teorema di Steiner"}
Sia $I_C$ il momento d'inerzia di un corpo di massa $M$ rispetto a un asse passante per il centro di massa $C$, e sia $I$ il momento d'inerzia rispetto a un asse parallelo al primo, a distanza $d$ da esso. Allora
$$
I = I_C + M d^2 .
$$
Il teorema riduce il calcolo rispetto a un asse qualsiasi a quello rispetto all'asse parallelo per il centro di massa, che si trova nella tabella dei corpi omogenei; mostra inoltre che, fra gli assi con una direzione assegnata, quello per il centro di massa ha il momento d'inerzia minimo. Per un'asta, con $d = \dfrac{L}{2}$, si ritrova $I = \dfrac{1}{12} M L^2 + \dfrac{1}{4} M L^2 = \dfrac{1}{3} M L^2$; per un disco, rispetto all'asse perpendicolare passante per un punto del bordo, $I = \dfrac{1}{2} M R^2 + M R^2 = \dfrac{3}{2} M R^2$.

::grafico{area="0.15;-0.15;0;6" asintoti="x=3" segmenti="0,1.5,3,1.5" punti="3,0,pieno,C" etichette="1.4,1.75,d" xmin=-1 xmax=7 ymin=-1 ymax=2.6 uguale=1 titolo="Per un'asta di lunghezza $L$ l'asse per l'estremo $O$ dista $d = \dfrac{L}{2}$ dall'asse parallelo per il centro di massa $C$"}

:::dimostrazione
Si sceglie l'origine in $C$, l'asse $z$ lungo l'asse per $C$ e l'asse $x$ in modo che il secondo asse passi per il punto $(d, 0, 0)$. Il punto di massa $m_i$ e coordinate $(x_i, y_i, z_i)$ dista $\sqrt{x_i^2 + y_i^2}$ dal primo asse e $\sqrt{(x_i - d)^2 + y_i^2}$ dal secondo. Quindi
$$
\begin{aligned}
I &= \sum_i m_i \big[ (x_i - d)^2 + y_i^2 \big] \\[6pt]
&= \sum_i m_i (x_i^2 + y_i^2) - 2d \sum_i m_i x_i + d^2 \sum_i m_i .
\end{aligned}
$$
Il primo addendo è $I_C$ e l'ultimo è $M d^2$. Il termine centrale è nullo, perché $\sum_i m_i x_i = M x_C$ e il centro di massa è nell'origine, cioè $x_C = 0$. Perciò $I = I_C + M d^2$.
:::
::::

## Seconda equazione cardinale e moto di rotazione

:::richiamo{titolo="Prima equazione cardinale"}
Il centro di massa di un sistema di punti di massa totale $M$ si muove come un punto materiale di massa $M$ soggetto alla risultante delle sole forze esterne: $M\vec{a}_C = \vec{R}^{(e)}$. Si rimanda all'argomento sui sistemi di punti, la quantità di moto e gli urti.
:::

::::teorema{#seconda-equazione-cardinale titolo="Seconda equazione cardinale"}
Sia dato un sistema di punti materiali in un riferimento inerziale, con forze interne che i punti si scambiano a coppie lungo la loro congiungente, e sia $O$ un polo fisso. Allora
$$
\frac{d\vec{L}_O}{dt} = \vec{M}_O^{(e)} ,
$$
dove $\vec{L}_O$ è il momento angolare del sistema e $\vec{M}_O^{(e)}$ è il momento risultante delle sole forze esterne. La stessa equazione vale prendendo come polo il centro di massa, anche quando questo è in moto; la verifica si omette. Le forze interne quindi non modificano il momento angolare totale. Per un corpo rigido la prima e la seconda equazione cardinale, insieme, determinano il moto.

:::dimostrazione
Sia $\vec{r}_i$ la posizione del punto $i$-esimo rispetto a $O$; poiché $O$ è fisso, $\dfrac{d\vec{r}_i}{dt} = \vec{v}_i$. Derivando $\vec{L}_O = \sum_i \vec{r}_i \times m_i\vec{v}_i$ con la regola del prodotto si ottiene
$$
\frac{d\vec{L}_O}{dt} = \sum_i \vec{v}_i \times m_i\vec{v}_i + \sum_i \vec{r}_i \times m_i\vec{a}_i .
$$
Il primo addendo è nullo, perché ogni termine è il prodotto vettoriale di due vettori paralleli. Per il secondo principio della dinamica $m_i\vec{a}_i = \vec{F}_i^{(e)} + \sum_{j \neq i} \vec{F}_{ij}$, dove $\vec{F}_{ij}$ è la forza esercitata dal punto $j$ sul punto $i$. Le forze interne compaiono a coppie e per il terzo principio $\vec{F}_{ji} = -\vec{F}_{ij}$, quindi
$$
\vec{r}_i \times \vec{F}_{ij} + \vec{r}_j \times \vec{F}_{ji} = (\vec{r}_i - \vec{r}_j) \times \vec{F}_{ij} = \vec{0} ,
$$
poiché $\vec{F}_{ij}$ è parallela a $\vec{r}_i - \vec{r}_j$. Perciò resta $\dfrac{d\vec{L}_O}{dt} = \sum_i \vec{r}_i \times \vec{F}_i^{(e)} = \vec{M}_O^{(e)}$.
:::
::::

::::teorema{#equazione-rotazione-asse-fisso titolo="Equazione del moto di rotazione attorno a un asse fisso"}
Sia un corpo rigido vincolato a ruotare attorno a un asse fisso $z$ privo di attrito, e sia $I$ il suo momento d'inerzia rispetto all'asse. Allora
$$
M_z = I\alpha ,
$$
dove $M_z$ è il momento assiale delle forze esterne diverse dalle reazioni dell'asse. È l'analogo per le rotazioni del secondo principio $F = ma$: noto il momento delle forze, l'equazione dà l'accelerazione angolare, e integrando si ottiene la legge oraria $\theta(t)$. Per una mola con $I = 0{,}20\,\mathrm{kg\cdot m^2}$ un momento di $1{,}0\,\mathrm{N\cdot m}$ produce $\alpha = 5{,}0\,\mathrm{rad/s^2}$.

:::dimostrazione
Si prende un polo $O$ sull'asse e si proietta la **seconda equazione cardinale** sul versore $\hat{k}$, che è costante; si ottiene $\dfrac{dL_z}{dt} = M_z^{(e)}$. Per il momento angolare di un corpo rigido in rotazione $L_z = I\omega$, e $I$ è costante perché le distanze dei punti dall'asse non cambiano, quindi $\dfrac{dL_z}{dt} = I\,\dfrac{d\omega}{dt} = I\alpha$. Un asse privo di attrito esercita forze applicate in punti dell'asse; per queste $\vec{r} = z\,\hat{k}$, e $\hat{k} \cdot (z\,\hat{k} \times \vec{F}) = 0$ perché $\hat{k} \times \vec{F}$ è ortogonale a $\hat{k}$. Perciò le reazioni dell'asse hanno momento assiale nullo, e $M_z^{(e)}$ si riduce al momento delle altre forze.
:::
::::

:::esempio{titolo="Blocco appeso a un disco"}
Un disco omogeneo di massa $M = 3{,}0\,\mathrm{kg}$ e raggio $R = 0{,}10\,\mathrm{m}$ ruota senza attrito attorno al proprio asse, orizzontale. Un filo inestensibile e di massa trascurabile, avvolto sul bordo, sostiene un blocco di massa $m = 0{,}50\,\mathrm{kg}$. Il filo non scivola sul disco, quindi l'accelerazione del blocco è uguale all'accelerazione tangenziale del bordo, $a = \alpha R$. Il secondo principio per il blocco, l'equazione del moto di rotazione per il disco e la condizione sul filo formano il sistema
$$
\begin{cases}
m g - T = m a \\[4pt]
T R = \dfrac{1}{2} M R^2\,\alpha \\[4pt]
a = \alpha R
\end{cases}
$$
Dalle ultime due equazioni $T = \dfrac{1}{2} M a$, e sostituendo nella prima
$$
a = \frac{m g}{m + \dfrac{1}{2} M} = \frac{0{,}50 \cdot 9{,}81}{0{,}50 + 1{,}5}\,\mathrm{m/s^2} = 2{,}45\,\mathrm{m/s^2} ,
\qquad
T = \frac{1}{2} M a = 3{,}68\,\mathrm{N} .
$$
Il blocco scende con accelerazione minore di $g$ e la tensione è minore del peso $m g = 4{,}91\,\mathrm{N}$, perché la differenza tra peso e tensione accelera il blocco e la tensione accelera la rotazione del disco.

::grafico{area="sqrt(1-x^2);-sqrt(1-x^2);-1;1|-2.3;-3.1;0.65;1.35" curve="cos(t),sin(t),0,6.29" segmenti="1,0,1,-2.3" vettori="1,0,1,-0.9,T;1,-2.3,1,-1.4,T;1,-2.7,1,-4,mg" xmin=-1.6 xmax=4.4 ymin=-4.3 ymax=1.5 uguale=1 titolo="Il filo esercita la tensione $\vec{T}$ verso il basso sul bordo del disco e verso l'alto sul blocco"}

:::

:::osservazione{#analogia-traslazione-rotazione titolo="Analogia tra traslazione e rotazione"}
Le grandezze della rotazione attorno a un asse fisso corrispondono una a una a quelle del moto rettilineo, e le leggi hanno la stessa forma.

- Posizione $x$ e posizione angolare $\theta$; velocità $v$ e velocità angolare $\omega$; accelerazione $a$ e accelerazione angolare $\alpha$.
- Massa $m$ e momento d'inerzia $I$; forza $F$ e momento assiale $M_z$.
- Quantità di moto $p = m v$ e momento angolare $L_z = I\omega$; secondo principio $F = m a$ ed equazione $M_z = I\alpha$.
- Energia cinetica $\dfrac{1}{2} m v^2$ e $\dfrac{1}{2} I\omega^2$; lavoro $F\,dx$ e $M_z\,d\theta$; potenza $F v$ e $M_z\,\omega$.

Per questo un problema di rotazione si imposta come il corrispondente problema di traslazione, con il momento d'inerzia al posto della massa.
:::

:::osservazione{#pendolo-fisico titolo="Pendolo fisico"}
Un **pendolo fisico** è un corpo rigido che oscilla in un piano verticale attorno a un asse orizzontale fisso, privo di attrito, che non passa per il centro di massa. Siano $d$ la distanza del centro di massa $C$ dall'asse, $I_O$ il momento d'inerzia rispetto all'asse e $\theta$ l'angolo che il segmento $OC$ forma con la verticale. Per il momento della forza peso, il peso agisce come una forza applicata in $C$, con braccio $d\sin\theta$, e tende a riportare il corpo verso $\theta = 0$; quindi l'equazione del moto di rotazione dà
$$
I_O\,\frac{d^2\theta}{dt^2} = -M g d\sin\theta .
$$
Per piccole oscillazioni $\sin\theta \approx \theta$, e l'equazione diventa quella del moto armonico con pulsazione $\omega_0 = \sqrt{\dfrac{M g d}{I_O}}$, per la quale si rimanda all'argomento sulle oscillazioni e il moto armonico. Per un'asta lunga $L = 1{,}0\,\mathrm{m}$ sospesa per un estremo $d = \dfrac{L}{2}$ e $I_O = \dfrac{1}{3} M L^2$, quindi il periodo delle piccole oscillazioni è $T = 2\pi\sqrt{\dfrac{2L}{3g}} = 1{,}64\,\mathrm{s}$.

::grafico{area="-1.7321*x+0.12;-1.7321*x-0.12;0;2" vettori="1,-1.732,1,-3.3,Mg" segmenti="0,-1.732,1,-1.732" punti="1,-1.732,pieno,C" etichette="0.12,-1.25,θ;0.75,-0.8,d" xmin=-1.5 xmax=3.5 ymin=-4 ymax=0.8 uguale=1 titolo="Il peso applicato in $C$ ha braccio $d\sin\theta$ rispetto al perno $O$ e momento $-M g d\sin\theta$"}

:::

## Energia nei moti di rotazione

::::teorema{#energia-cinetica-di-rotazione titolo="Energia cinetica di rotazione"}
L'energia cinetica di un corpo rigido che ruota con velocità angolare $\omega$ attorno a un asse fisso, rispetto al quale ha momento d'inerzia $I$, è
$$
K = \frac{1}{2} I\omega^2 .
$$
È la somma delle energie cinetiche di tutti i punti del corpo, espressa con la sola grandezza $\omega$, comune a tutti. Un volano con $I = 4{,}0\,\mathrm{kg\cdot m^2}$ che ruota a $100\,\mathrm{rad/s}$ ha energia cinetica $K = 2{,}0 \cdot 10^4\,\mathrm{J}$.

:::dimostrazione
Il punto di massa $m_i$ a distanza $R_i$ dall'asse ha velocità di modulo $v_i = |\omega| R_i$, quindi
$$
K = \sum_i \frac{1}{2} m_i v_i^2 = \frac{1}{2} \Big( \sum_i m_i R_i^2 \Big)\,\omega^2 = \frac{1}{2} I\omega^2 .
$$
:::
::::

::::teorema{#lavoro-e-potenza-rotazione titolo="Lavoro e potenza nelle rotazioni"}
Sia un corpo rigido che ruota attorno a un asse fisso e sia $M_z$ il momento assiale di una forza applicata al corpo. Quando il corpo ruota dell'angolo $d\theta$ la forza compie il lavoro $dW = M_z\,d\theta$, e la sua potenza è
$$
P = M_z\,\omega .
$$
In una rotazione da $\theta_1$ a $\theta_2$ il lavoro è $W = \displaystyle\int_{\theta_1}^{\theta_2} M_z\,d\theta$, che per un momento costante vale $M_z\,(\theta_2 - \theta_1)$. Se l'asse è privo di attrito, il lavoro di tutte le forze applicate è uguale alla variazione dell'energia cinetica di rotazione,
$$
W = \frac{1}{2} I\omega_2^2 - \frac{1}{2} I\omega_1^2 ,
$$
che è il teorema dell'energia cinetica, per il quale si rimanda all'argomento sul lavoro e l'energia, scritto per le rotazioni. Un motore che applica $12\,\mathrm{N\cdot m}$ a un albero che gira a $100\,\mathrm{rad/s}$ eroga una potenza di $1{,}2\,\mathrm{kW}$.

:::dimostrazione
Il punto di applicazione della forza, a distanza $R$ dall'asse, percorre l'arco $ds = R\,d\theta$ lungo la tangente alla sua circonferenza. Le componenti della forza radiale e assiale sono perpendicolari allo spostamento e non compiono lavoro, quindi $dW = F_t\,R\,d\theta$, dove $F_t$ è la componente tangenziale, presa positiva nel verso in cui $\theta$ cresce. Le stesse due componenti hanno momento assiale nullo, perciò $M_z = F_t R$ e $dW = M_z\,d\theta$; dividendo per $dt$ si ottiene $P = M_z\,\dfrac{d\theta}{dt} = M_z\,\omega$. Per l'ultima uguaglianza si somma su tutte le forze e si usa l'equazione del moto di rotazione $M_z = I\,\dfrac{d\omega}{dt}$:
$$
M_z\,d\theta = I\,\frac{d\omega}{dt}\,\omega\,dt = I\omega\,d\omega ,
$$
e integrando da $\omega_1$ a $\omega_2$ si ottiene $W = \dfrac{1}{2} I\omega_2^2 - \dfrac{1}{2} I\omega_1^2$.
:::
::::

:::richiamo{titolo="Teorema di König"}
L'energia cinetica di un sistema di punti di massa totale $M$ è la somma dell'energia cinetica del centro di massa e dell'energia cinetica $K'$ del moto relativo al centro di massa: $K = \dfrac{1}{2} M v_C^2 + K'$. Si rimanda all'argomento sui sistemi di punti, la quantità di moto e gli urti.
:::

::::teorema{#energia-cinetica-corpo-rigido titolo="Energia cinetica di un corpo rigido"}
Sia un corpo rigido di massa $M$ il cui centro di massa $C$ ha velocità $v_C$, e che ruota con velocità angolare $\omega$ attorno a un asse per $C$ di direzione fissa, rispetto al quale ha momento d'inerzia $I_C$. Allora
$$
K = \frac{1}{2} M v_C^2 + \frac{1}{2} I_C\,\omega^2 .
$$
L'energia cinetica si divide in una parte di traslazione e una parte di rotazione. La formula si applica ai corpi che rotolano e ai corpi che cadono ruotando, nei quali nessun punto resta fermo.

:::dimostrazione
Nel riferimento che trasla con il centro di massa l'asse per $C$ è fisso e il corpo ruota attorno a esso con velocità angolare $\omega$. Per l'energia cinetica di rotazione, l'energia cinetica del moto relativo al centro di massa è quindi $K' = \dfrac{1}{2} I_C\,\omega^2$, e il **teorema di König** dà la tesi.
:::
::::

::::teorema{#energia-potenziale-corpo-rigido titolo="Energia potenziale gravitazionale di un corpo rigido"}
In un campo di gravità uniforme, con l'asse $z$ verticale verso l'alto, l'energia potenziale di un corpo di massa $M$ è
$$
U = M g z_C ,
$$
dove $z_C$ è la quota del centro di massa. Nel calcolo dell'energia potenziale il corpo si tratta quindi come un punto materiale posto nel centro di massa. Un'asta di $2{,}0\,\mathrm{kg}$ lunga $1{,}0\,\mathrm{m}$, incernierata a un estremo e portata da orizzontale a verticale sopra la cerniera, alza il centro di massa di $0{,}50\,\mathrm{m}$ e aumenta la sua energia potenziale di $2{,}0 \cdot 9{,}81 \cdot 0{,}50\,\mathrm{J} = 9{,}81\,\mathrm{J}$.

:::dimostrazione
Sommando le energie potenziali dei singoli punti si ottiene $U = \sum_i m_i g z_i = g\sum_i m_i z_i = M g z_C$, perché per definizione di centro di massa $\sum_i m_i z_i = M z_C$.
:::
::::

:::osservazione{#conservazione-energia-corpo-rigido titolo="Conservazione dell'energia meccanica"}
Se le forze che compiono lavoro sono conservative e i vincoli sono ideali, l'energia meccanica $K + U$ di un corpo rigido si conserva. Un asse fisso privo di attrito e il contatto di rotolamento puro sono vincoli ideali, perché le loro reazioni sono applicate in punti fermi e quindi non compiono lavoro. Con le espressioni di $K$ e di $U$ del corpo rigido, la conservazione dell'energia dà la velocità angolare in funzione della posizione senza passare per le accelerazioni.
:::

:::esempio{titolo="Asta che cade ruotando attorno a un estremo"}
Un'asta omogenea di lunghezza $L = 1{,}2\,\mathrm{m}$, incernierata senza attrito a un estremo, viene lasciata ferma in posizione orizzontale. Quando passa per la verticale il centro di massa è sceso di $\dfrac{L}{2}$, quindi la conservazione dell'energia dà
$$
M g\,\frac{L}{2} = \frac{1}{2} \cdot \frac{1}{3} M L^2\,\omega^2
\quad\Longrightarrow\quad
\omega = \sqrt{\frac{3g}{L}} = 4{,}95\,\mathrm{rad/s} .
$$
L'estremo libero ha velocità $v = \omega L = \sqrt{3gL} = 5{,}94\,\mathrm{m/s}$, maggiore della velocità $\sqrt{2gL} = 4{,}85\,\mathrm{m/s}$ di un sasso che cade liberamente dalla stessa altezza. I due risultati sono compatibili con la conservazione dell'energia, perché nell'asta le forze interne trasferiscono energia dai punti vicini alla cerniera all'estremo libero.
:::

## Conservazione del momento angolare

::::teorema{#conservazione-momento-angolare titolo="Conservazione del momento angolare"}
Se il momento risultante delle forze esterne rispetto a un polo fisso $O$ è nullo, il momento angolare $\vec{L}_O$ del sistema è costante. Se è nulla soltanto la componente del momento lungo un asse fisso $z$, si conserva la componente $L_z$; in particolare, per un sistema che ruota attorno all'asse e cambia il proprio momento d'inerzia, avvicinando o allontanando delle masse dall'asse, risulta
$$
I_1\,\omega_1 = I_2\,\omega_2 .
$$
La legge si applica quando le forze esterne hanno momento nullo rispetto all'asse, come il peso quando è parallelo all'asse o le reazioni di un asse privo di attrito. Un sistema che riduce il proprio momento d'inerzia ruota più velocemente.

:::dimostrazione
Per la **seconda equazione cardinale** $\dfrac{d\vec{L}_O}{dt} = \vec{M}_O^{(e)}$. Se $\vec{M}_O^{(e)} = \vec{0}$ in ogni istante, la derivata di $\vec{L}_O$ è nulla, e quindi $\vec{L}_O$ è costante. Se è nulla soltanto $M_z^{(e)}$, proiettando sul versore costante $\hat{k}$ si ottiene $\dfrac{dL_z}{dt} = 0$, perciò $L_z$ è costante. Per un sistema che in ogni istante ruota rigidamente attorno all'asse vale $L_z = I\omega$, come per il momento angolare di un corpo rigido in rotazione, e da $L_z$ costante segue $I_1\omega_1 = I_2\omega_2$.
:::
::::

:::esempio{titolo="Pattinatrice che chiude le braccia"}
Una pattinatrice ruota su sé stessa con $\omega_1 = 2{,}0\,\mathrm{rad/s}$ e momento d'inerzia $I_1 = 3{,}0\,\mathrm{kg\cdot m^2}$ rispetto all'asse verticale; chiudendo le braccia porta il momento d'inerzia a $I_2 = 1{,}2\,\mathrm{kg\cdot m^2}$. L'attrito dei pattini sul ghiaccio è trascurabile, e il peso e la reazione del ghiaccio sono paralleli all'asse, quindi il momento delle forze esterne lungo l'asse è nullo e $L_z$ si conserva:
$$
\omega_2 = \frac{I_1}{I_2}\,\omega_1 = \frac{3{,}0}{1{,}2} \cdot 2{,}0\,\mathrm{rad/s} = 5{,}0\,\mathrm{rad/s} .
$$
L'energia cinetica passa da $\dfrac{1}{2} I_1\omega_1^2 = 6{,}0\,\mathrm{J}$ a $\dfrac{1}{2} I_2\omega_2^2 = 15\,\mathrm{J}$. L'aumento di $9{,}0\,\mathrm{J}$ è il lavoro dei muscoli delle braccia, che sono forze interne: il loro momento totale è nullo, quindi lasciano invariato $L_z$, mentre il loro lavoro cambia l'energia cinetica.
:::

:::osservazione{#urti-con-asse-fisso titolo="Urti con un corpo vincolato a un asse"}
Quando un proiettile urta un corpo rigido incernierato, durante l'urto l'asse esercita una reazione impulsiva, cioè una forza molto intensa per un tempo molto breve, che in generale cambia la quantità di moto del sistema proiettile più corpo. La quantità di moto quindi *non* si conserva. Il momento della reazione rispetto a un polo sull'asse è invece nullo, perché la reazione è applicata sull'asse, e il peso ha momento finito, che nel breve tempo dell'urto produce una variazione trascurabile del momento angolare. Perciò si conserva il momento angolare rispetto all'asse. Per un proiettile di massa $m$ e velocità $v_0$ perpendicolare all'asse, la cui retta d'azione dista $d$ dall'asse, che resta conficcato in un corpo fermo con momento d'inerzia $I_O$,
$$
m v_0 d = \left( I_O + m d^2 \right) \omega .
$$
L'urto è anelastico, quindi l'energia cinetica non si conserva durante l'urto; il moto successivo si studia con la conservazione dell'energia meccanica.
:::

## Rotolamento puro

:::definizione{#rotolamento-puro titolo="Rotolamento puro"}
Un corpo a sezione circolare di raggio $R$, come una ruota, un cilindro o una sfera, che si muove su una superficie ferma è in **rotolamento puro**, o rotola senza strisciare, se il punto del corpo a contatto con la superficie ha velocità nulla in ogni istante. La velocità di un punto del corpo è la somma della velocità $\vec{v}_C$ del centro e della velocità $\vec{\omega} \times \vec{r}\,'$ dovuta alla rotazione attorno al centro, dove $\vec{r}\,'$ è la posizione del punto rispetto a $C$. Nel punto di contatto le due velocità sono parallele al piano e hanno versi opposti, quindi la condizione di rotolamento puro equivale a
$$
v_C = \omega R ,
\qquad
a_C = \alpha R ,
$$
dove la seconda uguaglianza si ottiene derivando la prima. Il punto più alto ha velocità $2 v_C$, e in ogni istante il corpo ruota attorno al punto di contatto $P$, con velocità di ogni punto proporzionale alla sua distanza da $P$. In un giro il centro avanza di $2\pi R$, la lunghezza della circonferenza.

::grafico{curve="3+cos(t),1+sin(t),0,6.29" vettori="3,1,4.2,1,v;3,2,5.4,2,2v;2,1,3.2,2.2" segmenti="3,0,3,2;3,0,5.4,2;3,0,2,1" punti="3,0,pieno,P;3,1,pieno,C" xmin=-0.5 xmax=6 ymin=-0.6 ymax=2.8 uguale=1 titolo="Nel rotolamento puro il punto di contatto $P$ è fermo, il centro ha velocità $v_C = \omega R$ e il punto più alto $2 v_C$"}

:::

::::teorema{#energia-cinetica-rotolamento titolo="Energia cinetica nel rotolamento puro"}
Sia un corpo di massa $M$ e raggio $R$, con momento d'inerzia $I_C$ rispetto all'asse per il centro, che rotola senza strisciare con velocità del centro $v_C$. Allora
$$
K = \frac{1}{2}\left( M + \frac{I_C}{R^2} \right) v_C^2 .
$$
Per un cilindro pieno $K = \dfrac{3}{4} M v_C^2$, per una sfera piena $K = \dfrac{7}{10} M v_C^2$, per un anello $K = M v_C^2$. A parità di massa e di velocità, il corpo con la massa più lontana dall'asse ha più energia cinetica, perché ne ha di più nella rotazione.

:::dimostrazione
Per l'**energia cinetica di un corpo rigido** $K = \dfrac{1}{2} M v_C^2 + \dfrac{1}{2} I_C\,\omega^2$, e nel rotolamento puro $\omega = \dfrac{v_C}{R}$; sostituendo si ottiene la tesi. Lo stesso risultato segue considerando il moto come rotazione attorno al punto di contatto $P$, con momento d'inerzia $I_P = I_C + M R^2$ per il **teorema di Steiner**:
$$
K = \frac{1}{2} I_P\,\omega^2 = \frac{1}{2}\left( I_C + M R^2 \right) \frac{v_C^2}{R^2} .
$$
:::
::::

::::teorema{#rotolamento-piano-inclinato titolo="Rotolamento lungo un piano inclinato"}
Un corpo di massa $M$ e raggio $R$, con momento d'inerzia $I_C = k M R^2$ rispetto all'asse per il centro, rotola senza strisciare lungo un piano inclinato di un angolo $\theta$. Allora l'accelerazione del centro e la forza d'attrito statico valgono
$$
a_C = \frac{g\sin\theta}{1 + k} ,
\qquad
f = \frac{k}{1 + k}\,M g\sin\theta ,
$$
e il rotolamento puro è possibile solo se il coefficiente d'attrito statico soddisfa $\mu_s \geq \dfrac{k}{1 + k}\tan\theta$. Il coefficiente $k$ vale $\dfrac{2}{5}$ per la sfera piena, $\dfrac{1}{2}$ per il cilindro pieno e $1$ per l'anello, quindi le accelerazioni sono $\dfrac{5}{7} g\sin\theta$, $\dfrac{2}{3} g\sin\theta$ e $\dfrac{1}{2} g\sin\theta$. Sono tutte minori dell'accelerazione $g\sin\theta$ di un blocco che scivola senza attrito e non dipendono né dalla massa né dal raggio; in una gara lungo lo stesso piano la sfera arriva prima del cilindro e il cilindro prima dell'anello.

::grafico{area="3-0.57735*x;0;0;5.196" curve="2.5+cos(t),2.711+sin(t),0,6.29" vettori="2.5,2.711,2.5,1.111,Mg;2,1.845,2.4,2.538,N;2,1.845,1.48,2.145,f" punti="2.5,2.711,pieno" etichette="4.25,0.12,θ;2.6,2.85,C" xmin=-0.5 xmax=5.8 ymin=-0.5 ymax=4 uguale=1 titolo="Sul corpo che rotola agiscono il peso in $C$, la reazione normale $\vec{N}$ e l'attrito statico $\vec{f}$ nel punto di contatto"}

:::dimostrazione
Si orienta l'asse $x$ lungo il piano verso il basso. Sul corpo agiscono il peso $M\vec{g}$, applicato in $C$, e nel punto di contatto la reazione normale $\vec{N}$ e l'attrito statico $\vec{f}$, che si suppone diretto verso l'alto lungo il piano. La prima equazione cardinale lungo il piano, la seconda equazione cardinale rispetto al centro di massa, con il verso di rotazione concorde con la discesa, e la condizione di rotolamento formano il sistema
$$
\begin{cases}
M g\sin\theta - f = M a_C \\[4pt]
f R = k M R^2\,\alpha \\[4pt]
a_C = \alpha R
\end{cases}
$$
Il peso e la normale non compaiono nella seconda equazione, perché il peso è applicato in $C$ e la retta d'azione della normale passa per $C$. Dalla seconda e dalla terza equazione $f = k M a_C$, e sostituendo nella prima $M g\sin\theta = (1 + k) M a_C$, da cui seguono $a_C$ e $f$; poiché $f > 0$, il verso supposto è quello giusto. Perpendicolarmente al piano l'accelerazione è nulla, quindi $N = M g\cos\theta$. L'attrito statico soddisfa $f \leq \mu_s N$, cioè $\dfrac{k}{1 + k}\,M g\sin\theta \leq \mu_s M g\cos\theta$, che equivale alla condizione su $\mu_s$.
:::
::::

:::osservazione{#attrito-nel-rotolamento titolo="Attrito ed energia nel rotolamento"}
Nel rotolamento puro la forza d'attrito è statica e agisce sul punto di contatto, che ha velocità nulla; la sua potenza $\vec{f} \cdot \vec{v}_P$ è quindi nulla, e l'attrito *non* compie lavoro. Perciò l'energia meccanica si conserva, e per un corpo che parte da fermo e scende di un dislivello $h$
$$
M g h = \frac{1}{2}\left( M + \frac{I_C}{R^2} \right) v_C^2
\quad\Longrightarrow\quad
v_C = \sqrt{\frac{2 g h}{1 + k}} .
$$
L'attrito è comunque necessario, perché il suo momento rispetto al centro fa aumentare la velocità angolare. Su un piano liscio il momento delle forze rispetto al centro sarebbe nullo, quindi un corpo partito da fermo scenderebbe scivolando senza ruotare, con tutta l'energia nella traslazione e $v_C = \sqrt{2 g h}$.
:::

## Equilibrio statico del corpo rigido

::::teorema{#condizioni-di-equilibrio titolo="Condizioni di equilibrio del corpo rigido"}
Un corpo rigido inizialmente fermo resta in quiete se e solo se la risultante delle forze esterne e il loro momento risultante rispetto a un polo $O$ sono nulli:
$$
\begin{cases}
\vec{R}^{(e)} = \vec{0} \\[4pt]
\vec{M}_O^{(e)} = \vec{0}
\end{cases}
$$
Quando le forze stanno tutte in un piano $xy$ il sistema si riduce a tre equazioni scalari, $R_x = 0$, $R_y = 0$ e $M_z = 0$, che permettono di determinare al più tre incognite, per esempio le reazioni dei vincoli. La prima condizione è quella del punto materiale, la seconda esclude che il corpo cominci a ruotare. Due forze opposte applicate su rette d'azione distinte, per esempio, hanno risultante nulla ma formano una **coppia** di momento non nullo, e il corpo comincia a ruotare.

:::dimostrazione
Se il corpo resta fermo, la quantità di moto e il momento angolare sono nulli in ogni istante, e lo sono anche le loro derivate; per le due equazioni cardinali $\vec{R}^{(e)} = M\vec{a}_C = \vec{0}$ e $\vec{M}_O^{(e)} = \dfrac{d\vec{L}_O}{dt} = \vec{0}$. Viceversa, siano soddisfatte le due condizioni. Per la prima equazione cardinale il centro di massa, inizialmente fermo, resta fermo. Il momento rispetto al centro di massa è $\vec{M}_C^{(e)} = \vec{M}_O^{(e)} + \overrightarrow{CO} \times \vec{R}^{(e)} = \vec{0}$, quindi per la seconda equazione cardinale rispetto al centro di massa il momento angolare, inizialmente nullo, resta nullo. Per un corpo rigido il momento angolare rispetto al centro di massa è nullo solo se il corpo non ruota, perciò il corpo resta in quiete.
:::
::::

:::osservazione{#scelta-del-polo titolo="Scelta del polo"}
Se la risultante delle forze è nulla, il momento risultante è lo stesso rispetto a ogni polo. Infatti, passando dal polo $O$ al polo $O'$,
$$
\vec{M}_{O'} = \sum_i \big( \overrightarrow{O'O} + \overrightarrow{OP_i} \big) \times \vec{F}_i = \overrightarrow{O'O} \times \vec{R} + \vec{M}_O ,
$$
e il primo addendo è nullo quando $\vec{R} = \vec{0}$. Negli esercizi di statica il polo si sceglie quindi nel punto in cui è applicata una forza incognita: il momento di quella forza è nullo, e l'equazione dei momenti contiene un'incognita in meno.
:::

:::definizione{#leva titolo="Leva"}
Una **leva** è un corpo rigido, di solito un'asta, libero di ruotare attorno a un punto fisso detto fulcro, su cui agiscono una forza resistente $\vec{F}_1$ e una forza motrice $\vec{F}_2$ con bracci $b_1$ e $b_2$ rispetto al fulcro. Trascurando il peso della leva, l'equilibrio dei momenti rispetto al fulcro dà la **legge della leva**
$$
F_2\,b_2 = F_1\,b_1 ,
$$
mentre la reazione del fulcro equilibra la risultante di $\vec{F}_1$ e $\vec{F}_2$. La leva riduce la forza necessaria quando $b_2 > b_1$, perché allora $F_2 < F_1$. Per sollevare un masso che preme con $600\,\mathrm{N}$ su un palanchino, con braccio resistente di $0{,}30\,\mathrm{m}$ e braccio motore di $0{,}90\,\mathrm{m}$, basta una forza di $200\,\mathrm{N}$.

::grafico{area="1.7;1.5;-1.2;3.2|1.5-3*abs(x);0;-0.5;0.5" vettori="-1,3.4,-1,1.72,F₁;3,2.28,3,1.72,F₂" segmenti="-1,1.5,-1,1.1;3,1.5,3,1.1;-1,1.1,0,1.1;0,1.1,3,1.1" etichette="-0.65,0.75,b₁;1.4,0.75,b₂" xmin=-1.8 xmax=3.8 ymin=-0.4 ymax=3.6 uguale=1 titolo="Leva con il fulcro tra le due forze: con $b_2 = 3 b_1$ la forza motrice è un terzo della forza resistente"}

:::

:::esempio{titolo="Scala appoggiata a una parete"}
Una scala omogenea di massa $m$ e lunghezza $\ell$ è appoggiata a una parete verticale liscia e forma l'angolo $\theta$ con il pavimento, che ha coefficiente d'attrito statico $\mu_s$. Sulla scala agiscono il peso, applicato nel punto medio, la reazione normale $N$ e l'attrito $f$ del pavimento nel piede $A$, e la reazione $N_p$ della parete, orizzontale perché la parete è liscia. Con l'asse $x$ orizzontale, l'asse $y$ verticale e i momenti calcolati rispetto ad $A$, le condizioni di equilibrio sono
$$
\begin{cases}
N_p - f = 0 \\[4pt]
N - m g = 0 \\[4pt]
m g\,\dfrac{\ell}{2}\cos\theta - N_p\,\ell\sin\theta = 0
\end{cases}
$$
quindi $N = m g$ e $f = N_p = \dfrac{m g}{2\tan\theta}$. La scala resta ferma se $f \leq \mu_s N$, cioè se $\tan\theta \geq \dfrac{1}{2\mu_s}$: più l'angolo $\theta$ è piccolo, più attrito serve. Per $\theta = 60^\circ$ occorre $\mu_s \geq 0{,}29$.

::grafico{area="4.33-1.7321*x+0.1;4.33-1.7321*x-0.1;0;2.5" vettori="1.25,2.165,1.25,0.165,mg;2.5,0,2.5,2,N;2.5,0,1.923,0,f;0,4.33,0.577,4.33,Nₚ" punti="2.5,0,pieno,A;1.25,2.165,pieno" etichette="1.95,0.15,θ" xmin=-0.6 xmax=5.2 ymin=-0.6 ymax=5 uguale=1 titolo="Forze sulla scala appoggiata a una parete liscia: il peso nel punto medio, $\vec{N}$ e $\vec{f}$ nel piede $A$, $\vec{N}_p$ orizzontale in cima"}

:::
