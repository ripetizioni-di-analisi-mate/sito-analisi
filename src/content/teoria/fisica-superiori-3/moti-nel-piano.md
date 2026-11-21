---
titolo: "Moti nel piano"
sommario: "Componenti e velocità, lanci nel vuoto, traiettorie e accelerazione nel moto circolare."
---

## Descrivere il moto in due dimensioni

:::definizione{#componenti-moto titolo="Posizione, velocità e accelerazione nel piano"}
Un **punto materiale** è un corpo di cui interessa soltanto la posizione, perché le sue dimensioni sono piccole rispetto alle distanze che percorre. Nel piano si fissano due assi perpendicolari: l'asse $x$, orizzontale e orientato verso destra, e l'asse $y$, verticale e orientato verso l'alto. La posizione del punto è data dalle sue due **coordinate**, l'ascissa $x$ e l'ordinata $y$. Durante il moto entrambe dipendono dallo stesso tempo $t$. Le funzioni $x(t)$ e $y(t)$ si chiamano **leggi orarie**, e per ogni istante $t$ la coppia $(x(t),y(t))$ indica il punto in cui si trova il corpo. Con $x(t)=2t$ e $y(t)=t^2$, per esempio, all'istante $t=1\,\mathrm s$ il corpo è nel punto $(2\,;1)\,\mathrm m$.

La **traiettoria** è la curva formata da tutti i punti attraversati dal corpo. Si ricava eliminando $t$. Per farlo si risolve una legge oraria rispetto a $t$ e si sostituisce il risultato nell'altra. La traiettoria da sola non dice in quale istante il corpo passa per ciascun punto, né in quale verso percorre la curva.

La **velocità** è un vettore, cioè una grandezza con un modulo (la lunghezza della freccia), una direzione e un verso. Le sue **componenti** $v_x$ e $v_y$ indicano quanto rapidamente cambiano $x$ e $y$. Il simbolo $\Delta$ (delta) indica la variazione di una grandezza: $\Delta x$ è l'ascissa finale meno quella iniziale. Il vettore che va dalla posizione iniziale a quella finale si chiama **spostamento** e ha componenti $\Delta x$ e $\Delta y$. Su un intervallo di durata $\Delta t$ i rapporti $\dfrac{\Delta x}{\Delta t}$ e $\dfrac{\Delta y}{\Delta t}$ sono le componenti della **velocità media**, cioè dello spostamento diviso per $\Delta t$. Calcolati su intervalli sempre più brevi, gli stessi rapporti diventano le **pendenze** istantanee delle due leggi orarie, cioè le componenti $v_x$ e $v_y$ della velocità nell'istante considerato. La velocità è **tangente** alla traiettoria, cioè diretta come la retta che tocca la curva in quel punto, e punta nel verso del moto. Questo vale nei punti in cui la curva non ha spigoli e la velocità non è nulla.

Le due componenti sono perpendicolari, quindi il modulo della velocità si calcola con il teorema di Pitagora. Questo modulo si chiama **rapidità**:
$$
v=\sqrt{v_x^2+v_y^2}.
$$
Da $v_x=6\,\mathrm{m/s}$ e $v_y=-8\,\mathrm{m/s}$ si trova $v=\sqrt{36+64}\,\mathrm{m/s}=\sqrt{100}\,\mathrm{m/s}=10\,\mathrm{m/s}$. Il segno di $v_x$ indica che la freccia punta verso destra, quello di $v_y$ che punta verso il basso. Sommare $6$ e $-8$ mescolerebbe contributi lungo assi perpendicolari. La **rapidità media** su un tragitto è invece la lunghezza del percorso divisa per la durata. Supera il modulo della velocità media quando il percorso non è un segmento rettilineo percorso sempre nello stesso verso.

L'**accelerazione** è la variazione vettoriale della velocità nel tempo. Su un intervallo $\Delta t$ l'**accelerazione media** si calcola componente per componente:
$$
\vec a_m=\left(\frac{\Delta v_x}{\Delta t}\,;\frac{\Delta v_y}{\Delta t}\right).
$$
Se in $0{,}5\,\mathrm s$ la velocità passa da $(4\,;0)\,\mathrm{m/s}$ a $(4\,;-5)\,\mathrm{m/s}$, si ha $\Delta v_x=0$ e $\Delta v_y=-5\,\mathrm{m/s}$, quindi $\vec a_m=(0\,;-10)\,\mathrm{m/s^2}$, verticale e verso il basso.

Una velocità può cambiare sia di modulo sia di direzione. La parte dell'accelerazione parallela alla velocità, detta **componente tangenziale**, cambia la rapidità. La parte perpendicolare alla velocità, detta **componente normale**, cambia la direzione. Perciò un moto a rapidità costante può avere accelerazione diversa da zero, come accade quando un punto descrive una circonferenza. In un lancio senza resistenza dell'aria, invece, l'accelerazione è verticale, rivolta verso il basso e costante in prossimità del suolo.
:::

:::osservazione{titolo="Leggere un angolo e una proiezione"}
L'angolo $\theta$ (theta) di una velocità si misura a partire dal semiasse $x$ positivo e si considera positivo in senso antiorario. Il rapporto $\dfrac{v_y}{v_x}$ è la tangente di $\theta$, quindi l'angolo si ricava con la funzione $\arctan$ (arcotangente), che restituisce l'angolo di tangente assegnata. Per la velocità $(6\,;-8)\,\mathrm{m/s}$ l'angolo è
$$
\theta=\arctan\left(\frac{-8}{6}\right)=-\arctan\left(\frac{8}{6}\right)\simeq-53^\circ.
$$
L'angolo negativo si misura in senso orario, in accordo con la componente orizzontale positiva e quella verticale negativa.

Un **versore** è un vettore di modulo $1$, che indica soltanto una direzione e un verso. Il vettore $\hat e=\left(\dfrac35\,;\dfrac45\right)$ è un versore, perché $\dfrac{9}{25}+\dfrac{16}{25}=1$. Una telecamera orientata lungo $\hat e$ rileva la componente della velocità in quella direzione, cioè la proiezione della freccia $\vec v$ sulla retta di $\hat e$. Si moltiplicano le componenti della velocità per le componenti corrispondenti del versore e si sommano i due prodotti. Questa operazione si chiama **prodotto scalare** e si indica con un punto:
$$
\vec v\cdot\hat e=\left(6\cdot\frac35-8\cdot\frac45\right)\,\mathrm{m/s}=\left(\frac{18}{5}-\frac{32}{5}\right)\,\mathrm{m/s}=-2{,}8\,\mathrm{m/s}.
$$
Il segno indica che la proiezione si muove in verso opposto a $\hat e$.
:::

:::esempio{titolo="Una traiettoria percorsa con due ritmi"}
Due carrelli idealizzati seguono $A(t)=(2t\,;t^2)$ e $B(t)=(4t\,;4t^2)$ in unità SI (Sistema Internazionale: lunghezze in metri, tempi in secondi), per $t\geq0$. Per A, da $x=2t$ si ricava $t=\dfrac{x}{2}$, e la legge di $y$ diventa $y=\left(\dfrac x2\right)^2=\dfrac{x^2}{4}$. Per B, da $x=4t$ si ricava $t=\dfrac{x}{4}$, e si ottiene $y=4\left(\dfrac x4\right)^2=\dfrac{4x^2}{16}=\dfrac{x^2}{4}$. Entrambi i calcoli danno quindi $y=\dfrac{x^2}{4}$ per $x\geq0$, una parabola. Il punto $P=(2\,;1)\,\mathrm m$ appartiene alla curva. A lo raggiunge quando $2t=2$, cioè dopo un secondo, e B quando $4t=2$, cioè dopo mezzo secondo.

Le componenti della velocità sono le pendenze istantanee di $x(t)$ e $y(t)$. La pendenza di $2t$ vale $2$ in ogni istante. Per $t^2$ si calcola il rapporto su un intervallo breve $\delta$:
$$
\frac{(t+\delta)^2-t^2}{\delta}=\frac{2t\delta+\delta^2}{\delta}=2t+\delta,
$$
che tende a $2t$ quando $\delta$ diventa sempre più piccolo. Analogamente la pendenza di $4t^2$ è $8t$. In P le velocità valgono quindi $(2\,;2\cdot1)\,\mathrm{m/s}=(2\,;2)\,\mathrm{m/s}$ per A e $(4\,;8\cdot0{,}5)\,\mathrm{m/s}=(4\,;4)\,\mathrm{m/s}$ per B. Le due frecce hanno la stessa direzione tangente e B ha modulo doppio. Poiché la componente verticale cresce come $2t$ per A e come $8t$ per B, le accelerazioni sono verticali con moduli rispettivamente $2$ e $8\,\mathrm{m/s^2}$. La stessa curva può dunque essere percorsa con velocità e accelerazioni diverse.

::grafico{curve="t,t^2/4,0,3.7" punti="2,1,pieno" vettori="2,1,3,2;2,1,2.5,1.5" segmenti="2,0,2,1;0,1,2,1" etichette="1.73,1.24,P;2.46,1.81,v A;3.03,2.12,v B" xmin=-0.2 xmax=4.05 ymin=-0.3 ymax=3.8 uguale=1 nomi="x (m),y (m)" titolo="I due carrelli percorrono la stessa parabola. In P, le lunghezze delle frecce stanno come le rapidità."}
:::

## Il lancio orizzontale

:::teorema{#lancio-orizzontale titolo="Moti indipendenti lungo gli assi"}
Si suppone che la resistenza dell'aria sia trascurabile, che il suolo sia orizzontale e che l'accelerazione di gravità $g$ sia uniforme, cioè uguale in ogni punto, verticale e rivolta verso il basso. Vicino alla superficie terrestre $g\simeq9{,}8\,\mathrm{m/s^2}$, valore che negli esercizi si arrotonda spesso a $10\,\mathrm{m/s^2}$. Si prende $x$ orizzontale e $y$ verso l'alto. La gravità agisce soltanto lungo $y$, quindi la componente $v_x$ resta costante, mentre $v_y$ diminuisce di $g$ ogni secondo. Se il corpo parte da $(0,h)$ con velocità orizzontale $v_0>0$, le leggi sono
$$
x(t)=v_0t,\qquad y(t)=h-\tfrac12gt^2.
$$
La prima è la legge del moto rettilineo uniforme, la seconda quella del moto uniformemente accelerato con velocità iniziale nulla.

Il moto verticale parte da fermo e determina il tempo di arrivo $t_f$. Al suolo $y=0$, quindi
$$
h=\tfrac12gt_f^2\quad\Longrightarrow\quad t_f^2=\frac{2h}{g}\quad\Longrightarrow\quad t_f=\sqrt{\frac{2h}{g}},
$$
dove si prende la radice positiva perché il tempo di volo è positivo. Il moto orizzontale procede senza accelerazione durante lo stesso tempo. La distanza orizzontale fra il punto di lancio e quello di arrivo si chiama **gittata** e vale $R=v_0t_f=v_0\sqrt{\dfrac{2h}{g}}$. La gittata è quindi proporzionale a $v_0$ e alla radice quadrata di $h$. Quadruplicare $h$ moltiplica il tempo per $\sqrt4=2$ e, a $v_0$ fissata, raddoppia anche la distanza.

Con $h=5\,\mathrm m$, $v_0=6\,\mathrm{m/s}$ e $g=10\,\mathrm{m/s^2}$ si ha $t_f=\sqrt{\dfrac{2\cdot5}{10}}\,\mathrm s=1\,\mathrm s$ e $R=(6\cdot1)\,\mathrm m=6\,\mathrm m$. Poco prima dell'impatto $v_x=6\,\mathrm{m/s}$ e $v_y=-gt_f=-10\,\mathrm{m/s}$, quindi la velocità ha componenti $(6,-10)\,\mathrm{m/s}$. La sua direzione è obliqua perché la componente orizzontale rimane quella iniziale e quella verticale aumenta in modulo. Scrivendo $t=\dfrac{x}{v_0}$ nella legge verticale si ricava l'equazione della traiettoria, una parabola:
$$
y=h-\frac12g\left(\frac{x}{v_0}\right)^2=h-\frac{g}{2v_0^2}x^2.
$$
La parabola descrive il moto soltanto nel tratto da $x=0$ a $x=R$, perché al contatto con il suolo il volo termina.
:::

::grafico{curve="6*t,5-5*t^2,0,1" punti="0,5,pieno;6,0,pieno" vettori="0,5,2,5,v_0" xmin=-0.6 xmax=7 ymin=-0.5 ymax=6.5 nomi="x (m),y (m)" titolo="Il lancio orizzontale produce una parabola fino al suolo"}

:::esempio{titolo="Stimare l'accelerazione dai fotogrammi"}
Una telecamera misura la posizione di una sfera lanciata orizzontalmente. Ogni quota letta può differire da quella vera di circa $0{,}02\,\mathrm m$: questa è l'**incertezza** della lettura. Si prende come riferimento la prima lettura, con $x=0$ e $h=4{,}90\,\mathrm m$. Le ascisse aumentano di un metro ogni quinto di secondo, quindi la rapidità orizzontale è $\dfrac{1\,\mathrm m}{0{,}20\,\mathrm s}=5\,\mathrm{m/s}$. Le quote previste si calcolano con $g=9{,}80\,\mathrm{m/s^2}$, cioè con $y=4{,}90-4{,}90\,t^2$ in unità SI; per esempio, a $t=0{,}20\,\mathrm s$ si ha $y=4{,}90-4{,}90\cdot0{,}04=4{,}704$.

| $t$ (s) | $x$ (m) | $y$ letta (m) | $y$ prevista (m) |
| ---: | ---: | ---: | ---: |
| 0,00 | 0,00 | 4,90 | 4,900 |
| 0,20 | 1,00 | 4,70 | 4,704 |
| 0,40 | 2,00 | 4,10 | 4,116 |

La discesa $h-y$ vale $\tfrac12gt^2$. Perciò il grafico della discesa in funzione di $t^2$ è una retta che passa per l'origine con pendenza $\dfrac g2$. L'ultima lettura dà $h-y=(4{,}90-4{,}10)\,\mathrm m=0{,}80\,\mathrm m$ a $t^2=0{,}16\,\mathrm{s^2}$, da cui
$$
\frac g2=\frac{0{,}80}{0{,}16}\,\mathrm{m/s^2}=5\,\mathrm{m/s^2},\qquad g\simeq10\,\mathrm{m/s^2}.
$$
Con $9{,}80\,\mathrm{m/s^2}$ la differenza fra quota letta e prevista è al massimo $(4{,}116-4{,}10)\,\mathrm m=0{,}016\,\mathrm m$ in modulo, minore dell'incertezza. Con $10\,\mathrm{m/s^2}$ le quote previste, $4{,}70$ e $4{,}10\,\mathrm m$, coincidono con quelle lette. Entrambi i valori di $g$ sono quindi compatibili con queste letture. Per distinguerli servirebbero quote più precise oppure fotogrammi più distanti nel tempo, sempre prima del contatto.

La stima si può ottenere anche dagli ultimi due fotogrammi. Sottraendo le equazioni $y_1=h-\tfrac12gt_1^2$ e $y_2=h-\tfrac12gt_2^2$ si elimina $h$ e resta $y_1-y_2=\tfrac12g\left(t_2^2-t_1^2\right)$. Questo è utile se il lancio non compare tra i fotogrammi ma si conosce il tempo trascorso dalla partenza. La differenza delle quote è $(4{,}70-4{,}10)\,\mathrm m=0{,}60\,\mathrm m$ e quella dei quadrati dei tempi è $(0{,}16-0{,}04)\,\mathrm{s^2}=0{,}12\,\mathrm{s^2}$. Il rapporto $\dfrac{0{,}60}{0{,}12}\,\mathrm{m/s^2}=5\,\mathrm{m/s^2}$ è metà di $g$, quindi anche in questo caso $g\simeq10\,\mathrm{m/s^2}$.

::grafico{f="4.9*x" punti="0,0,pieno;0.04,0.2,pieno;0.16,0.8,pieno" segmenti="0.04,0,0.04,0.2;0.16,0,0.16,0.8" etichette="0.032,-0.069,0,04;0.152,-0.069,0,16;0.043,0.268,0,20;0.146,0.873,0,80" xmin=0 xmax=0.188 ymin=0 ymax=1 nomi="t² (s²),h − y (m)" legenda="g=9{,}80\,\mathrm{m/s^2}" titolo="Le misure della caduta in funzione del tempo al quadrato risultano vicine alla retta prevista."}
:::

## Il lancio obliquo

:::teorema{#lancio-obliquo titolo="Tempo di volo, quota massima e gittata"}
Sia $\theta$ l'angolo fra la velocità di lancio e il semiasse positivo $x$. La freccia $\vec v_0$ è l'ipotenusa di un triangolo rettangolo i cui cateti sono le componenti iniziali, quindi
$$
v_{0x}=v_0\cos\theta,\qquad v_{0y}=v_0\sin\theta,
$$
dove il coseno $\cos\theta$ e il seno $\sin\theta$ sono, rispettivamente, il rapporto fra il cateto adiacente all'angolo $\theta$ e l'ipotenusa e il rapporto fra il cateto opposto e l'ipotenusa. Con $v_0=10\,\mathrm{m/s}$ e un angolo di circa $37^\circ$, per cui $\cos\theta=0{,}8$ e $\sin\theta=0{,}6$, le componenti sono $8\,\mathrm{m/s}$ e $6\,\mathrm{m/s}$. Con partenza da $(0,h)$ e in assenza di resistenza dell'aria, le leggi orarie sono
$$
x=v_{0x}t,\qquad y=h+v_{0y}t-\tfrac12gt^2,
$$
e la componente verticale della velocità vale $v_y=v_{0y}-gt$. Se $v_{0y}>0$, il corpo sale fino al punto più alto, detto **apice**, in cui $v_y=0$. Questo accade all'istante $t_A=\dfrac{v_{0y}}{g}$. Sostituendo $t_A$ nella legge verticale si ottiene l'aumento di quota
$$
H=v_{0y}\cdot\frac{v_{0y}}{g}-\frac12g\left(\frac{v_{0y}}{g}\right)^2=\frac{v_{0y}^2}{g}-\frac{v_{0y}^2}{2g}=\frac{v_{0y}^2}{2g}.
$$
All'apice la velocità è orizzontale e vale $v_{0x}$, se $v_{0x}$ non è nullo.

Se partenza e arrivo sono alla stessa quota, si impone $y(t)=h$, cioè $v_{0y}t-\tfrac12gt^2=0$. Raccogliendo $t$ si ottiene $t\left(v_{0y}-\tfrac12gt\right)=0$. La prima soluzione è il lancio, $t=0$. La seconda è il tempo di volo $t_f=\dfrac{2v_{0y}}{g}$, doppio del tempo di salita. Moltiplicando per $v_{0x}$ e usando la formula di duplicazione $\sin(2\theta)=2\sin\theta\cos\theta$ si ricava la gittata
$$
R=\frac{2v_{0x}v_{0y}}g=\frac{2v_0^2\sin\theta\cos\theta}{g}=\frac{v_0^2\sin(2\theta)}g .
$$
Per $0<\theta<90^\circ$ e $v_0$ fissata, il seno vale al massimo $1$, e lo raggiunge per $2\theta=90^\circ$. La gittata è quindi massima per $\theta=45^\circ$. Due angoli si dicono complementari se la loro somma è $90^\circ$, come $30^\circ$ e $60^\circ$. Angoli complementari hanno la stessa gittata in queste condizioni, perché i loro doppi hanno somma $180^\circ$ e $\sin\alpha=\sin(180^\circ-\alpha)$. I tempi di volo e le altezze massime sono invece diversi, perché dipendono dalla componente verticale.

Se la quota di arrivo è diversa, si risolve la legge verticale con la nuova quota. Nel caso $x=8t$, $y=15+5t-5t^2$ in unità SI il suolo $y=0$ dà $5t^2-5t-15=0$, cioè $t^2-t-3=0$. La soluzione positiva è
$$
t=\frac{1+\sqrt{1+12}}{2}\,\mathrm s=\frac{1+\sqrt{13}}{2}\,\mathrm s\simeq2{,}30\,\mathrm s,
$$
e il punto di impatto I ha ascissa $x\simeq(8\cdot2{,}30)\,\mathrm m\simeq18{,}4\,\mathrm m$. La formula della stessa quota darebbe $t_f=\dfrac{2\cdot5}{10}\,\mathrm s=1\,\mathrm s$, che corrisponde invece al ritorno all'altezza iniziale di quindici metri, nel punto P di ascissa $8\,\mathrm m$. Nel grafico L è il punto di lancio e A l'apice, raggiunto a $t=0{,}5\,\mathrm s$ nel punto $(4\,;16{,}25)\,\mathrm m$.
:::

::grafico{curve="8*t,15+5*t-5*t^2,0,2.302775638" punti="0,15,pieno,L;4,16.25,pieno,A;8,15,pieno,P;18.4222051,0,pieno" etichette="17.85,1.2,I" segmenti="0,15,8,15" xmin=-0.5 xmax=21 ymin=-0.5 ymax=18.5 nomi="x (m),y (m)" titolo="Il ritorno alla quota iniziale precede l'impatto al suolo"}

:::esempio{titolo="Due passaggi alla stessa quota"}
Una pallina parte da quota $1{,}5\,\mathrm m$ a rapidità orizzontale $4\,\mathrm{m/s}$. A quota $5{,}25\,\mathrm m$ si osservano due passaggi, dopo $0{,}5\,\mathrm s$ e $1{,}5\,\mathrm s$. Si trascura l'aria e si usa $g=10\,\mathrm{m/s^2}$. Dato che $v_y$ diminuisce linearmente, i due passaggi alla stessa quota sono simmetrici rispetto all'apice. Infatti, uguagliando le quote $v_{0y}t_1-\tfrac12gt_1^2=v_{0y}t_2-\tfrac12gt_2^2$ si ottiene
$$
v_{0y}(t_2-t_1)=\frac12g\left(t_2^2-t_1^2\right)=\frac12g(t_2-t_1)(t_2+t_1),
$$
e dividendo per $t_2-t_1$
$$
v_{0y}=\frac{g(t_1+t_2)}{2}=\frac{10\cdot(0{,}5+1{,}5)}{2}\,\mathrm{m/s}=10\,\mathrm{m/s}.
$$
L'apice è a $t=\dfrac{v_{0y}}{g}=1\,\mathrm s$, a metà fra i due passaggi, perciò la quota massima è $(1{,}5+10\cdot1-5\cdot1^2)\,\mathrm m=6{,}5\,\mathrm m$. Alla prima osservazione $x=(4\cdot0{,}5)\,\mathrm m=2\,\mathrm m$ e la pallina sale a $v_y=(10-10\cdot0{,}5)\,\mathrm{m/s}=5\,\mathrm{m/s}$. Alla seconda $x=6\,\mathrm m$ e la pallina scende a $v_y=-5\,\mathrm{m/s}$. Due letture della stessa quota possono dunque identificare luoghi e versi diversi.

::grafico{curve="4*t,1.5+10*t-5*t^2,0,2.140175425" punti="0,1.5,pieno;2,5.25,pieno;4,6.5,pieno;6,5.25,pieno" segmenti="2,5.25,6,5.25;2,0,2,5.25;6,0,6,5.25" etichette="0.14,1.23,L;1.76,5.61,P;4.02,6.95,A;6.1,5.56,Q" xmin=-0.2 xmax=9.2 ymin=-0.5 ymax=8 nomi="x (m),y (m)" titolo="La stessa quota corrisponde a P in salita e Q in discesa. A è il punto più alto."}
:::

:::osservazione{titolo="Verificare entrambe le coordinate di un punto"}
Nel lancio precedente, entrambi gli istanti osservati danno la quota $5{,}25\,\mathrm m$. Si vuole sapere se la pallina attraversa a quella quota un'apertura posta a $x=5\,\mathrm m$. La legge orizzontale $x=4t$ dà $t=\dfrac54\,\mathrm s=1{,}25\,\mathrm s$. In quell'istante la pallina è a
$$
y=\left(1{,}5+10\cdot1{,}25-5\cdot1{,}25^2\right)\,\mathrm m\simeq6{,}19\,\mathrm m,
$$
quindi passa sopra l'apertura. Per raggiungere un punto assegnato occorre che le due coordinate coincidano nello stesso istante.
:::

:::esempio{titolo="Stessa gittata, apici diversi"}
Due lanci partono e terminano entrambi a quota zero. Le componenti iniziali sono $(8\,;6)\,\mathrm{m/s}$ e $(6\,;8)\,\mathrm{m/s}$. Entrambi partono a $\sqrt{64+36}\,\mathrm{m/s}=10\,\mathrm{m/s}$. Gli angoli sono complementari, perché scambiando le componenti il seno di un angolo diventa il coseno dell'altro. Con $g=10\,\mathrm{m/s^2}$ i tempi di volo sono
$$
t_A=\frac{2\cdot6}{10}\,\mathrm s=1{,}2\,\mathrm s,\qquad t_B=\frac{2\cdot8}{10}\,\mathrm s=1{,}6\,\mathrm s.
$$
La gittata è $(8\cdot1{,}2)\,\mathrm m=(6\cdot1{,}6)\,\mathrm m=9{,}6\,\mathrm m$ in entrambi i casi. Il lancio più inclinato sale di $\dfrac{8^2}{2\cdot10}\,\mathrm m=3{,}2\,\mathrm m$, mentre il primo sale di $\dfrac{6^2}{2\cdot10}\,\mathrm m=1{,}8\,\mathrm m$. Per valutare il passaggio sopra un ostacolo occorre conoscere anche la forma della traiettoria. L'apice si raggiunge a metà del tempo di volo, quindi a metà gittata, $x=4{,}8\,\mathrm m$, ciascun corpo si trova al proprio apice. Un bordo a quota $2{,}5\,\mathrm m$ in quella posizione viene perciò superato dal secondo corpo e non dal primo.

::grafico{curve="8*t,6*t-5*t^2,0,1.2;6*t,8*t-5*t^2,0,1.6" punti="4.8,1.8,pieno;4.8,3.2,pieno;9.6,0,pieno" segmenti="4.8,0,4.8,3.2" etichette="4.98,1.98,A;4.98,3.38,B;9.65,0.27,I" xmin=0 xmax=10.55 ymin=-0.15 ymax=4 nomi="x (m),y (m)" legenda="A;B" titolo="Le due traiettorie arrivano in I. Gli apici si trovano alla stessa ascissa e a quote diverse."}
:::

## Angoli e velocità angolare

:::definizione{#radianti titolo="Il radiante"}
Su una circonferenza di raggio $r$, un angolo con il vertice nel centro stacca un arco di lunghezza $s$. La misura dell'angolo in **radianti** (simbolo $\mathrm{rad}$) è il rapporto fra l'arco e il raggio: $\theta=\dfrac{s}{r}$. L'arco si considera con segno, positivo se percorso in senso antiorario. Su una circonferenza di raggio $4\,\mathrm m$, un arco di $6\,\mathrm m$ corrisponde a $\dfrac64\,\mathrm{rad}=1{,}5\,\mathrm{rad}$. Un giro intero ha arco $2\pi r$, quindi misura $\dfrac{2\pi r}{r}=2\pi$ radianti, con $\pi\simeq3{,}14$. Perciò $360^\circ=2\pi\,\mathrm{rad}$ e $180^\circ=\pi\,\mathrm{rad}$; un angolo retto vale $\dfrac\pi2\,\mathrm{rad}$.

La **velocità angolare** $\omega$ (omega) è la variazione di angolo divisa per il tempo, $\omega=\dfrac{\Delta\theta}{\Delta t}$, e si misura in $\mathrm{rad/s}$. Con il senso antiorario positivo, una rotazione oraria ha $\omega$ negativa; il suo modulo si chiama rapidità angolare. Il **periodo** $T$ è il tempo di un giro completo. La **frequenza** $f$ è il numero di giri al secondo e si misura in hertz ($1\,\mathrm{Hz}$ = un giro al secondo); vale $f=\dfrac1T$. Nel moto circolare uniforme, cioè a rapidità costante, in un periodo l'angolo aumenta di $2\pi$, quindi la rapidità angolare è
$$
\omega=\frac{2\pi}{T}=2\pi f.
$$
Se un rotore compie trenta giri al minuto, la frequenza è $\dfrac{30}{60}\,\mathrm{Hz}=0{,}5\,\mathrm{Hz}$, cioè mezzo giro al secondo, e il periodo è $2\,\mathrm s$. Quindi $\omega=2\pi\cdot0{,}5\,\mathrm{rad/s}=\pi\,\mathrm{rad/s}$.

Da $s=r\theta$ segue che in un intervallo $\Delta t$ il punto percorre l'arco $\Delta s=r\,\Delta\theta$. Dividendo per $\Delta t$ si ottiene la **velocità tangenziale**, cioè la rapidità lungo la circonferenza:
$$
v_t=\frac{\Delta s}{\Delta t}=r\,\frac{\Delta\theta}{\Delta t}=r\omega,
$$
valida quando $\theta$ si misura in radianti. A raggio doppio, con la stessa velocità angolare, il punto percorre un arco doppio nello stesso tempo. In un disco **rigido**, cioè che non si deforma, tutti i punti ruotano dello stesso angolo nello stesso tempo e compiono un giro in uno stesso periodo. Quelli più lontani dall'asse hanno però velocità tangenziale maggiore, e un punto sull'asse, con $r=0$, ha velocità tangenziale nulla. Due dischi che si toccano sui bordi e ruotano senza slittare hanno nel punto di contatto la stessa velocità tangenziale, quindi $r_1\omega_1=r_2\omega_2$. Con $r_1=0{,}30\,\mathrm m$, $\omega_1=4\,\mathrm{rad/s}$ e $r_2=0{,}10\,\mathrm m$ si ha $v_t=1{,}2\,\mathrm{m/s}$ e $\omega_2=\dfrac{1{,}2}{0{,}10}\,\mathrm{rad/s}=12\,\mathrm{rad/s}$. L'angolo misura quanto il corpo ruota, e moltiplicato per il raggio dà la distanza percorsa lungo la circonferenza.
:::

:::esempio{titolo="Ricostruire una rotazione da due foto"}
Due foto distanti $0{,}20\,\mathrm s$ mostrano una tacca, cioè un segno sul bordo del disco, prima a destra del centro (punto A) e poi direttamente sopra (punto B). Il disco gira uniformemente in senso antiorario. Fra le due immagini la tacca compie almeno un quarto di giro, cioè $\dfrac\pi2\,\mathrm{rad}$, e può aver percorso anche giri completi, ciascuno di $2\pi\,\mathrm{rad}$. La rotazione è quindi $\Delta\theta=\dfrac{\pi}{2}+2k\pi$, dove l'intero $k=0,1,2,\ldots$ conta i giri completi in più.

Se un'osservazione continua conferma che fra le due foto è trascorso meno di un giro, si ha $k=0$. Dividendo l'angolo per la durata si ottiene
$$
\omega=\frac{\frac{\pi}{2}}{0{,}20}\,\mathrm{rad/s}=\frac{\pi}{2}\cdot\frac{1}{0{,}20}\,\mathrm{rad/s}=\frac{5\pi}{2}\,\mathrm{rad/s}.
$$
Con $k=1$ l'angolo aumenta di $2\pi$ e la velocità angolare di $\dfrac{2\pi}{0{,}20}\,\mathrm{rad/s}=10\pi\,\mathrm{rad/s}$. Questa velocità maggiore produrrebbe quindi le stesse due immagini dopo un giro supplementare. Contare i passaggi intermedi oppure infittire le foto consente di risolvere questa ambiguità.

Se invece si conoscono soltanto le due posizioni e si esclude un giro intero, resta da determinare il verso di rotazione. Una rotazione oraria di tre quarti di giro collega gli stessi due punti. Con angoli positivi in senso antiorario si ha $\Delta\theta=-\dfrac{3\pi}{2}$ e quindi $\omega=-\dfrac{3\pi}{2}\cdot\dfrac{1}{0{,}20}\,\mathrm{rad/s}=-\dfrac{15\pi}{2}\,\mathrm{rad/s}$. Entrambi i calcoli si riferiscono allo stesso intervallo.

::grafico{curve="cos(t),sin(t),0,6.283185307;0.4*cos(t),0.4*sin(t),0,1.570796327" punti="1,0,pieno;0,1,pieno" segmenti="0,0,1,0;0,0,0,1" etichette="1.05,0.13,A;0.1,1.08,B;0.36,0.34,90°" xmin=-1.35 xmax=1.5 ymin=-1.35 ymax=1.48 uguale=1 nomi="x,y" titolo="Le due foto fissano A e B. L'arco interno indica il quarto di giro e la tacca può avere compiuto altri giri."}
:::

## Accelerazione centripeta

:::teorema{#centripeta titolo="Variazione della direzione della velocità"}
Su una circonferenza, la velocità è tangente e quindi perpendicolare al raggio. Nel moto circolare uniforme le frecce velocità hanno tutte la stessa lunghezza $v$, ma a istanti diversi hanno orientamenti diversi. Quando il raggio ruota di un angolo $\Delta\theta$, anche la velocità ruota dello stesso angolo, perché resta perpendicolare al raggio. Disegnate a partire dallo stesso punto, due velocità vicine formano un triangolo isoscele con due lati lunghi $v$ e angolo $\Delta\theta$ fra di essi. Il terzo lato è la differenza $\Delta\vec v$. Per un angolo molto piccolo, misurato in radianti, il terzo lato è quasi uguale all'arco di raggio $v$ e angolo $\Delta\theta$, quindi $|\Delta\vec v|\simeq v\,|\Delta\theta|$. Dividendo per $\Delta t$ si ottiene $v\,\dfrac{|\Delta\theta|}{\Delta t}=v\omega$. Usando $\omega=\dfrac vr$, oppure $v=\omega r$, si ottiene
$$
a_c=v\omega=\frac{v^2}r=\omega^2r .
$$
Quando l'intervallo diventa sempre più breve, la differenza $\Delta\vec v$ diventa perpendicolare alla velocità e punta verso il centro. Per questo l'accelerazione si chiama **centripeta**, cioè diretta verso il centro. Essa cambia la direzione della velocità, che diventa tangente alla circonferenza nella nuova posizione, e la traiettoria si incurva.

La forma più conveniente dipende dai dati. A velocità lineare fissata, una curva di raggio dimezzato richiede accelerazione doppia, perché $\dfrac{v^2}{\frac r2}=2\,\dfrac{v^2}{r}$. A velocità angolare fissata, invece, il punto su un disco a raggio doppio ha accelerazione doppia, perché $\omega^2(2r)=2\,\omega^2r$. L'apparente differenza è dovuta al fatto che nel secondo confronto anche il modulo della velocità raddoppia, dato che $v=\omega r$.
:::

::grafico{curve="2*cos(t),2*sin(t),0,6.2832" vettori="2,0,2,1.4,v;2,0,0.9,0,a_c" xmin=-2.5 xmax=2.8 ymin=-2.5 ymax=2.5 uguale=1 nomi="x (m),y (m)" titolo="Nel punto a destra l'accelerazione è rivolta verso il centro"}

:::osservazione{titolo="Approssimare l'accelerazione con due misure"}
Un punto gira su raggio $3\,\mathrm m$ a $6\,\mathrm{m/s}$. Dopo un quarto di giro antiorario a partire dal punto più a destra, la velocità cambia da $\vec v_1=(0\,;6)\,\mathrm{m/s}$ a $\vec v_2=(-6\,;0)\,\mathrm{m/s}$. La differenza è $\Delta\vec v=(-6-0\,;0-6)\,\mathrm{m/s}=(-6\,;-6)\,\mathrm{m/s}$, con modulo $\sqrt{36+36}\,\mathrm{m/s}=6\sqrt2\,\mathrm{m/s}$. La velocità angolare è $\omega=\dfrac63\,\mathrm{rad/s}=2\,\mathrm{rad/s}$, quindi il quarto di giro dura $\dfrac{\pi}{2}\cdot\dfrac12\,\mathrm s=\dfrac{\pi}{4}\,\mathrm s$. Si trova un'accelerazione media di modulo
$$
\left|\vec a_m\right|=6\sqrt2\cdot\frac{4}{\pi}\,\mathrm{m/s^2}=\frac{24\sqrt2}{\pi}\,\mathrm{m/s^2}\simeq10{,}8\,\mathrm{m/s^2},
$$
mentre il modulo istantaneo vale $a_c=\dfrac{6^2}{3}\,\mathrm{m/s^2}=12\,\mathrm{m/s^2}$.

Se tra le due letture passa meno di un giro, la differenza fra le due velocità è la base del triangolo isoscele con lati $v$ e angolo $|\Delta\theta|$. Una **corda** è un segmento che unisce due punti di una circonferenza, e questa base è la corda della circonferenza di raggio $v$ descritta dalle punte delle frecce. Dividendo il triangolo in due triangoli rettangoli si trova che la corda è lunga $2v\sin\left(\dfrac{|\Delta\theta|}{2}\right)$. Poiché la durata $\dfrac{|\Delta\theta|}{\omega}$ è proporzionale all'angolo, il rapporto fra il modulo dell'accelerazione media e quello istantaneo vale
$$
\frac{|\vec a_m|}{a_c}
=\frac{2\sin\left(\dfrac{|\Delta\theta|}{2}\right)}{|\Delta\theta|}.
$$
Per un quarto di giro, con $|\Delta\theta|=\dfrac\pi2$, questo rapporto è circa $0{,}900$. Su un arco di $10^\circ$ è circa $0{,}999$. L'approssimazione della corda con l'arco migliora quando si riduce la separazione fra le misure.

::grafico{vettori="0,0,0,6;0,0,-6,0;0,6,-6,0" punti="0,6,pieno;-6,0,pieno" etichette="0.35,3.4,v₁;-4.55,-0.66,v₂;-3.88,3.2,Δv" xmin=-7 xmax=1.6 ymin=-1.15 ymax=7 uguale=1 nomi="vₓ (m/s),vᵧ (m/s)" titolo="Con le due velocità applicate nell'origine, la variazione è il vettore dalla prima punta alla seconda."}
:::

## Moto circolare non uniforme

:::osservazione{#tangenziale titolo="Due componenti dell'accelerazione"}
Nel moto circolare non uniforme cambia anche il modulo della velocità. Si prende come verso positivo della tangente quello del moto. La componente tangenziale media vale $a_t=\dfrac{\Delta v}{\Delta t}$, dove $\Delta v$ è la variazione di rapidità lungo il tratto. Il valore istantaneo si ottiene su intervalli sempre più brevi ed è la pendenza del grafico rapidità-tempo in quell'istante. Un segno negativo indica che il corpo rallenta. La componente radiale resta $a_c=\dfrac{v^2}{r}$, rivolta verso il centro.

Le due direzioni sono perpendicolari, dunque per il teorema di Pitagora $a=\sqrt{a_c^2+a_t^2}$. Con $v=4\,\mathrm{m/s}$, $r=4\,\mathrm m$ e $a_t=3\,\mathrm{m/s^2}$, l'accelerazione radiale vale $\dfrac{4^2}{4}\,\mathrm{m/s^2}=4\,\mathrm{m/s^2}$ e il modulo totale è $\sqrt{16+9}\,\mathrm{m/s^2}=5\,\mathrm{m/s^2}$. Se il corpo rallenta con $a_t=-3\,\mathrm{m/s^2}$, il modulo rimane $5\,\mathrm{m/s^2}$, ma l'accelerazione è inclinata all'indietro rispetto al moto. Il segno conta quando si disegna la direzione.

Se la curva è sempre la stessa circonferenza, nell'istante in cui il corpo ha velocità nulla la componente radiale $\dfrac{v^2}{r}$ è nulla. Può comunque esserci accelerazione tangenziale, come per una ruota che parte aumentando la velocità angolare. A velocità non nulla, se l'accelerazione tangenziale è nulla, resta una componente centripeta di modulo positivo.
:::

::grafico{curve="4*cos(t),4*sin(t),0,6.2832" vettori="4,0,0.8,0,a_c;4,0,4,2.4,a_t;4,0,0.8,2.4,a" segmenti="0.8,0,0.8,2.4;0.8,2.4,4,2.4" xmin=-5 xmax=5.4 ymin=-5 ymax=5 uguale=1 nomi="x (m),y (m)" titolo="La risultante è la diagonale del parallelogramma delle componenti"}

:::osservazione{titolo="Accelerazione angolare fra immagini successive"}
L'**accelerazione angolare** $\alpha$ (alfa) è la variazione della velocità angolare divisa per il tempo, $\alpha=\dfrac{\Delta\omega}{\Delta t}$, e si misura in $\mathrm{rad/s^2}$. Poiché $v_t=r\omega$, la componente tangenziale dell'accelerazione è $a_t=r\alpha$. Se $\alpha$ è costante, si possono confrontare le velocità angolari medie in due intervalli successivi di $0{,}20\,\mathrm s$. Per avanzamenti di $0{,}30\,\mathrm{rad}$ e $0{,}70\,\mathrm{rad}$, le due medie sono $\dfrac{0{,}30}{0{,}20}\,\mathrm{rad/s}=1{,}5\,\mathrm{rad/s}$ e $\dfrac{0{,}70}{0{,}20}\,\mathrm{rad/s}=3{,}5\,\mathrm{rad/s}$. Poiché la velocità angolare varia linearmente, ciascuna media coincide con il valore istantaneo al centro del proprio intervallo. I due centri sono distanti $0{,}20\,\mathrm s$, perciò
$$
\alpha=\frac{3{,}5-1{,}5}{0{,}20}\,\mathrm{rad/s^2}=10\,\mathrm{rad/s^2}.
$$
A raggio $0{,}40\,\mathrm m$ l'accelerazione tangenziale è $r\alpha=(0{,}40\cdot10)\,\mathrm{m/s^2}=4\,\mathrm{m/s^2}$ nel verso degli angoli crescenti. Nello stesso tempo la componente radiale $\omega^2r$ cambia, perché dipende dal quadrato della velocità angolare istantanea.
:::

:::esempio{titolo="Ricavare rapidità e frenata da un sensore"}
Sul bordo di un disco di raggio $4\,\mathrm m$, un punto passa per l'estremo destro della circonferenza muovendosi verso l'alto. Un sensore ricostruisce $\vec a=(-4\,;-3)\,\mathrm{m/s^2}$ con $x$ verso destra e $y$ verso l'alto. In quel punto il centro è a sinistra, quindi la componente lungo $x$ è quella radiale e dà $a_c=4\,\mathrm{m/s^2}$. La tangente è verticale e il moto è verso l'alto, quindi la componente lungo $y$ è quella tangenziale e dà $a_t=-3\,\mathrm{m/s^2}$. Il segno negativo indica che il punto rallenta. Risolvendo $a_c=\dfrac{v^2}{r}$ rispetto a $v$ si ricava $v=\sqrt{a_cr}=\sqrt{4\cdot4}\,\mathrm{m/s}=4\,\mathrm{m/s}$.

Se la frenata tangenziale resta costante, con $t$ contato dal passaggio la rapidità in unità SI è $v(t)=4-3t$. Il punto si ferma quando $4-3t=0$, cioè a $t=\dfrac43\,\mathrm s$. La componente centripeta decresce come $a_c(t)=\dfrac{(4-3t)^2}{4}$ e si annulla all'arresto. Il modulo dell'accelerazione $\sqrt{a_c^2+3^2}$ tende quindi a $3\,\mathrm{m/s^2}$ appena prima che il punto si fermi. Il modello di frenata descrive l'intervallo in cui si conserva il verso iniziale del moto.

::grafico{curve="t,(4-3*t)^2/4,0,1.333333333;t,-3,0,1.333333333" punti="0,4,pieno;1.333333333,0,pieno;1.333333333,-3,pieno" segmenti="1.333333333,0,1.333333333,-3" etichette="1.28,0.57,4/3" xmin=0 xmax=1.58 ymin=-4 ymax=5 nomi="t (s),a (m/s²)" legenda="a_c;a_t" titolo="Durante la frenata la componente tangenziale resta costante e quella centripeta scende a zero."}
:::
