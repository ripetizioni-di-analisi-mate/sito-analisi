---
titolo: "Moto nel piano: proiettile e moto circolare"
sommario: Come posizione, velocità e accelerazione diventano vettori nel piano, come si descrivono il moto del proiettile e il moto circolare uniforme e non uniforme, e come cambiano velocità e traiettorie passando da un sistema di riferimento a un altro in moto traslatorio.
---

## Vettori posizione, velocità e accelerazione

:::definizione{#vettore-posizione titolo="Vettore posizione e traiettoria"}
Si fissa nel piano del moto un riferimento cartesiano $Oxy$ con versori $\hat{\imath}$ e $\hat{\jmath}$. La posizione di un punto materiale $P$ all'istante $t$ è individuata dal **vettore posizione**
$$
\vec{r}(t) = \overrightarrow{OP} = x(t)\,\hat{\imath} + y(t)\,\hat{\jmath} .
$$
La funzione $t \mapsto \vec{r}(t)$ è la **legge oraria** del moto, e le funzioni scalari $x(t)$ e $y(t)$ sono le leggi orarie delle proiezioni di $P$ sui due assi. L'insieme dei punti occupati da $P$ al variare di $t$ è la **traiettoria**. Eliminando $t$ tra $x(t)$ e $y(t)$ si ottiene l'equazione cartesiana della traiettoria; per esempio, con $x$ e $y$ in metri e $t$ in secondi, da $x = 2t$ e $y = t^2$ si ricava $t = \dfrac{x}{2}$, quindi la traiettoria è la parabola $y = \dfrac{x^2}{4}$.
:::

:::definizione{#velocita-media titolo="Spostamento e velocità media"}
Lo **spostamento** tra gli istanti $t$ e $t + \Delta t$ è il vettore $\Delta\vec{r} = \vec{r}(t + \Delta t) - \vec{r}(t)$, che va dalla posizione iniziale alla posizione finale. La **velocità media** nell'intervallo è
$$
\vec{v}_m = \frac{\Delta\vec{r}}{\Delta t} ,
$$
un vettore con la direzione e il verso dello spostamento, misurato in $\mathrm{m/s}$. Lo spostamento dipende solo dalle posizioni iniziale e finale, perciò il suo modulo è in generale minore della lunghezza del tratto di traiettoria percorso. Dopo un giro completo su una circonferenza lo spostamento è nullo, e quindi è nulla anche la velocità media.
:::

:::definizione{#velocita-istantanea titolo="Velocità istantanea"}
La **velocità** all'istante $t$ è il limite della velocità media per $\Delta t \to 0$, cioè la derivata del vettore posizione:
$$
\vec{v}(t) = \lim_{\Delta t \to 0} \frac{\Delta\vec{r}}{\Delta t} = \frac{d\vec{r}}{dt} = \frac{dx}{dt}\,\hat{\imath} + \frac{dy}{dt}\,\hat{\jmath} .
$$
Quando $\Delta t$ tende a zero la corda $\Delta\vec{r}$ tende alla direzione della retta tangente, quindi la velocità è **tangente alla traiettoria** nel punto occupato e ha il verso del moto. Il modulo $v = |\vec{v}| = \sqrt{v_x^2 + v_y^2}$ è la velocità scalare, cioè la derivata rispetto al tempo della lunghezza dell'arco percorso. Per $\vec{r}(t) = 2t\,\hat{\imath} + t^2\,\hat{\jmath}$ si ha $\vec{v}(t) = 2\,\hat{\imath} + 2t\,\hat{\jmath}$, e all'istante $t = 1\,\mathrm{s}$ la velocità ha modulo $\sqrt{8}\,\mathrm{m/s} \approx 2{,}83\,\mathrm{m/s}$.

::grafico{f="x^2/4" vettori="0,0,2,1,r(t);0,0,4,4,r(t+Δt);2,1,4,4,Δr;2,1,3.2,2.2,v" punti="2,1,pieno;4,4,pieno" xmin=-0.6 xmax=5 ymin=-0.6 ymax=5 uguale=1 titolo="Sulla traiettoria $y = \dfrac{x^2}{4}$ lo spostamento $\Delta\vec{r}$ è la corda tra le posizioni agli istanti $t = 1\,\mathrm{s}$ e $t = 2\,\mathrm{s}$; la velocità $\vec{v}$ in $(2, 1)$ è tangente alla traiettoria"}

:::

:::richiamo{titolo="Derivata di un vettore"}
Se $\vec{r}(t) = x(t)\,\hat{\imath} + y(t)\,\hat{\jmath}$, con versori $\hat{\imath}$ e $\hat{\jmath}$ fissi e componenti derivabili, allora $\dfrac{d\vec{r}}{dt} = \dfrac{dx}{dt}\,\hat{\imath} + \dfrac{dy}{dt}\,\hat{\jmath}$, cioè si deriva componente per componente. Per le regole di derivazione si rimanda all'argomento sulle derivate di Analisi 1, per la derivata di un vettore all'argomento sulle grandezze fisiche e i vettori.
:::

:::definizione{#accelerazione titolo="Accelerazione"}
L'**accelerazione media** nell'intervallo $[t, t + \Delta t]$ è $\vec{a}_m = \dfrac{\Delta\vec{v}}{\Delta t}$, e l'**accelerazione** all'istante $t$ è la derivata della velocità:
$$
\vec{a}(t) = \frac{d\vec{v}}{dt} = \frac{d^2\vec{r}}{dt^2} = \frac{dv_x}{dt}\,\hat{\imath} + \frac{dv_y}{dt}\,\hat{\jmath} ,
$$
misurata in $\mathrm{m/s^2}$. L'accelerazione registra ogni variazione del vettore velocità, sia del modulo sia della direzione; perciò un punto che percorre una curva con velocità scalare costante ha accelerazione diversa da zero. Per $\vec{r}(t) = 2t\,\hat{\imath} + t^2\,\hat{\jmath}$ si ottiene $\vec{a} = 2\,\hat{\jmath}\ \mathrm{m/s^2}$, costante, mentre la velocità cambia sia in modulo sia in direzione.
:::

:::osservazione{#indipendenza-dei-moti titolo="Moti delle proiezioni"}
Poiché le derivate si calcolano componente per componente, le relazioni $v_x = \dfrac{dx}{dt}$ e $a_x = \dfrac{dv_x}{dt}$ coinvolgono solo grandezze lungo l'asse $x$, e lo stesso vale lungo l'asse $y$. Quindi il moto nel piano equivale a due moti rettilinei simultanei, quello della proiezione su $x$ e quello della proiezione su $y$, che hanno in comune solo il tempo. Su ciascun asse valgono le leggi della cinematica in una dimensione, per le quali si rimanda all'argomento sulla cinematica in una dimensione. Il tempo è la variabile che collega i due moti, perciò in genere lo si ricava da un'equazione su un asse e lo si sostituisce nell'equazione dell'altro.
:::

## Moto con accelerazione costante

::::teorema{#moto-accelerazione-costante titolo="Leggi orarie con accelerazione costante"}
Sia $\vec{a}$ costante e siano $\vec{r}_0$ e $\vec{v}_0$ la posizione e la velocità all'istante $t = 0$. Allora per ogni $t$
$$
\vec{v}(t) = \vec{v}_0 + \vec{a}\,t, \qquad \vec{r}(t) = \vec{r}_0 + \vec{v}_0\,t + \frac{1}{2}\,\vec{a}\,t^2 .
$$
In componenti si hanno due moti uniformemente accelerati, $x(t) = x_0 + v_{0x}\,t + \dfrac{1}{2}\,a_x t^2$ e $y(t) = y_0 + v_{0y}\,t + \dfrac{1}{2}\,a_y t^2$, e su ciascun asse vale la relazione senza il tempo $v_x^2 = v_{0x}^2 + 2a_x\,(x - x_0)$, e analogamente per $y$. Le formule descrivono ogni moto con accelerazione costante; il caso più importante è il moto dei corpi vicino alla superficie terrestre, con $\vec{a} = -g\,\hat{\jmath}$.

:::dimostrazione
Per definizione di accelerazione $\dfrac{dv_x}{dt} = a_x$, con $a_x$ costante. Per il **teorema fondamentale del calcolo integrale**
$$
v_x(t) - v_{0x} = \int_0^t a_x\,dt' = a_x\,t ,
$$
quindi $v_x(t) = v_{0x} + a_x t$. Poiché $\dfrac{dx}{dt} = v_x$, integrando di nuovo si ottiene
$$
x(t) - x_0 = \int_0^t \left( v_{0x} + a_x t' \right) dt' = v_{0x}\,t + \frac{1}{2}\,a_x t^2 .
$$
Lo stesso calcolo vale per la componente $y$, e ricomponendo le componenti con i versori si ottengono le formule vettoriali. Per la relazione senza il tempo, se $a_x \neq 0$ si ricava $t = \dfrac{v_x - v_{0x}}{a_x}$ dalla legge della velocità e lo si sostituisce nella legge della posizione; svolgendo i calcoli si ottiene $x - x_0 = \dfrac{v_x^2 - v_{0x}^2}{2a_x}$, che è la tesi. Se $a_x = 0$ la relazione si riduce a $v_x = v_{0x}$, che è vera.
:::
::::

:::richiamo{titolo="Teorema fondamentale del calcolo integrale"}
Se $f$ è continua su $[a, b]$ e $F$ è una sua primitiva, cioè $F' = f$, allora $\displaystyle\int_a^b f(t)\,dt = F(b) - F(a)$. Si rimanda all'argomento sugli integrali di Analisi 1.
:::

:::osservazione{#forma-della-traiettoria titolo="Forma della traiettoria"}
Con accelerazione costante e non nulla la traiettoria è un segmento di retta oppure un arco di parabola. Se $\vec{v}_0$ è nulla oppure parallela ad $\vec{a}$, il moto avviene lungo la retta per il punto iniziale con la direzione di $\vec{a}$, ed è un moto rettilineo uniformemente accelerato. Se $\vec{v}_0$ e $\vec{a}$ non sono paralleli, si sceglie l'asse $y$ parallelo ad $\vec{a}$; allora $a_x = 0$ e $v_{0x} \neq 0$, quindi $x$ è una funzione di primo grado di $t$ e $y$ una funzione di secondo grado. Ricavando $t$ da $x$ e sostituendo, $y$ risulta un polinomio di secondo grado in $x$, perciò la traiettoria è una **parabola** con asse parallelo ad $\vec{a}$. Il moto del proiettile è l'esempio principale di questo caso.
:::

## Moto del proiettile

:::definizione{#moto-del-proiettile titolo="Moto del proiettile"}
Si chiama **moto del proiettile** il moto di un corpo lanciato vicino alla superficie terrestre nelle ipotesi seguenti: il corpo è assimilabile a un punto materiale, la resistenza dell'aria è trascurabile e l'accelerazione di gravità $\vec{g}$ è costante, diretta verso il basso e di modulo $g = 9{,}81\,\mathrm{m/s^2}$. L'ultima ipotesi è accettabile quando le distanze percorse sono piccole rispetto al raggio terrestre. Si sceglie l'asse $x$ orizzontale nel verso del lancio, l'asse $y$ verticale verso l'alto e l'origine nel punto di lancio. La velocità iniziale $\vec{v}_0$ ha modulo $v_0$ e forma l'angolo $\theta$ con l'orizzontale, perciò
$$
v_{0x} = v_0\cos\theta, \qquad v_{0y} = v_0\sin\theta ,
$$
e l'accelerazione è $\vec{a} = -g\,\hat{\jmath}$ in ogni istante del volo, nella salita come nella discesa.
:::

:::teorema{#leggi-orarie-del-proiettile titolo="Leggi orarie del proiettile"}
Nelle ipotesi del moto del proiettile, con il lancio dall'origine all'istante $t = 0$, valgono
$$
x(t) = v_0\cos\theta\; t, \qquad y(t) = v_0\sin\theta\; t - \frac{1}{2}\,g\,t^2 ,
$$
$$
v_x(t) = v_0\cos\theta, \qquad v_y(t) = v_0\sin\theta - g\,t .
$$
Le formule seguono dalle **leggi orarie con accelerazione costante** con $a_x = 0$ e $a_y = -g$. La proiezione orizzontale si muove di moto rettilineo uniforme, la proiezione verticale di moto uniformemente accelerato, come un corpo lanciato in verticale con velocità $v_0\sin\theta$. Quindi la componente orizzontale della velocità resta costante per tutto il volo, mentre la componente verticale diminuisce di $9{,}81\,\mathrm{m/s}$ ogni secondo.

::grafico{curve="6*t,8*t-4.905*t^2,0,1.631" vettori="0,0,1.5,2,v₀;4.893,3.262,6.393,3.262,v;9.786,0,11.286,-2,v" segmenti="4.893,0,4.893,3.262" punti="4.893,3.262,pieno;9.786,0,pieno" etichette="4.3,1.5,H" xmin=-0.8 xmax=12 ymin=-2.6 ymax=4.4 uguale=1 titolo="Proiettile con $v_{0x} = 6\,\mathrm{m/s}$ e $v_{0y} = 8\,\mathrm{m/s}$, velocità disegnate in scala: la componente orizzontale resta costante, la componente verticale si annulla nel punto più alto e poi diventa negativa"}

:::

::::teorema{#traiettoria-parabolica titolo="Traiettoria parabolica"}
Nelle ipotesi del moto del proiettile, con $-\dfrac{\pi}{2} < \theta < \dfrac{\pi}{2}$, la traiettoria è la parabola
$$
y = \tan\theta\; x - \frac{g}{2\,v_0^2\cos^2\theta}\; x^2 ,
$$
con asse verticale e concavità verso il basso. L'equazione dà la quota del proiettile in funzione della distanza orizzontale dal punto di lancio, senza passare per il tempo; perciò serve a stabilire se il proiettile supera un ostacolo o raggiunge un bersaglio di coordinate assegnate. Per $\theta = \dfrac{\pi}{2}$ il lancio è verticale e la traiettoria è un segmento dell'asse $y$.

:::dimostrazione
Poiché $-\dfrac{\pi}{2} < \theta < \dfrac{\pi}{2}$, si ha $\cos\theta > 0$, e dalla legge oraria di $x$ si ricava $t = \dfrac{x}{v_0\cos\theta}$. Sostituendo nella legge oraria di $y$ si ottiene
$$
\begin{aligned}
y &= v_0\sin\theta\,\frac{x}{v_0\cos\theta} - \frac{1}{2}\,g\,\frac{x^2}{v_0^2\cos^2\theta} \\[6pt]
&= \tan\theta\; x - \frac{g}{2\,v_0^2\cos^2\theta}\; x^2 ,
\end{aligned}
$$
che è un polinomio di secondo grado in $x$ con coefficiente di $x^2$ negativo.
:::
::::

## Altezza massima, tempo di volo e gittata

::::teorema{#altezza-massima titolo="Altezza massima"}
Nelle ipotesi del moto del proiettile, con $0 < \theta \le \dfrac{\pi}{2}$, il proiettile raggiunge il punto più alto della traiettoria all'istante $t_H = \dfrac{v_0\sin\theta}{g}$, e l'**altezza massima** rispetto al punto di lancio è
$$
H = \frac{v_0^2\sin^2\theta}{2g} .
$$
L'altezza massima dipende solo dalla componente verticale della velocità iniziale, $H = \dfrac{v_{0y}^2}{2g}$, ed è la stessa che si avrebbe lanciando il corpo in verticale con velocità $v_{0y}$. Per $v_{0x} = 6\,\mathrm{m/s}$ e $v_{0y} = 8\,\mathrm{m/s}$ si ottiene $t_H = 0{,}815\,\mathrm{s}$ e $H = 3{,}26\,\mathrm{m}$.

:::dimostrazione
Nel punto più alto la quota $y(t)$ ha un massimo, quindi la sua derivata $v_y(t) = v_0\sin\theta - g\,t$ si annulla. Ciò accade per $t_H = \dfrac{v_0\sin\theta}{g}$, che è positivo perché $\sin\theta > 0$; prima di $t_H$ si ha $v_y > 0$ e il proiettile sale, dopo si ha $v_y < 0$ e scende. Sostituendo $t_H$ nella legge oraria di $y$ si ottiene
$$
\begin{aligned}
H = y(t_H) &= v_0\sin\theta\,\frac{v_0\sin\theta}{g} - \frac{1}{2}\,g\,\frac{v_0^2\sin^2\theta}{g^2} \\[6pt]
&= \frac{v_0^2\sin^2\theta}{g} - \frac{v_0^2\sin^2\theta}{2g} = \frac{v_0^2\sin^2\theta}{2g} .
\end{aligned}
$$
:::
::::

::::teorema{#tempo-di-volo-e-gittata titolo="Tempo di volo e gittata"}
Nelle ipotesi del moto del proiettile, con $0 < \theta < \dfrac{\pi}{2}$ e il punto di arrivo alla stessa quota del punto di lancio, il **tempo di volo** e la **gittata**, cioè la distanza orizzontale tra il punto di lancio e il punto di arrivo, sono
$$
T = \frac{2\,v_0\sin\theta}{g}, \qquad R = \frac{v_0^2\sin 2\theta}{g} .
$$
Il tempo di volo è il doppio di $t_H$, quindi la salita e la discesa durano lo stesso tempo e la traiettoria è simmetrica rispetto alla retta verticale per il punto più alto. Con $v_{0x} = 6\,\mathrm{m/s}$ e $v_{0y} = 8\,\mathrm{m/s}$ si ha $T = 1{,}63\,\mathrm{s}$ e $R = v_{0x}\,T = 9{,}79\,\mathrm{m}$. Le formule valgono *solo* se la quota di arrivo coincide con quella di lancio; negli altri casi l'istante di arrivo si ricava dall'equazione $y(t) = y_f$, con $y_f$ quota di arrivo.

:::dimostrazione
Il proiettile torna alla quota di lancio quando $y(t) = 0$, cioè quando
$$
v_0\sin\theta\; t - \frac{1}{2}\,g\,t^2 = t \left( v_0\sin\theta - \frac{1}{2}\,g\,t \right) = 0 .
$$
La soluzione $t = 0$ è l'istante del lancio, quindi l'istante di arrivo è $T = \dfrac{2\,v_0\sin\theta}{g}$. In quell'istante la coordinata orizzontale vale
$$
R = x(T) = v_0\cos\theta\,\frac{2\,v_0\sin\theta}{g} = \frac{v_0^2 \cdot 2\sin\theta\cos\theta}{g} = \frac{v_0^2\sin 2\theta}{g} ,
$$
per la **formula di duplicazione** $\sin 2\theta = 2\sin\theta\cos\theta$.
:::
::::

:::osservazione{#gittata-massima titolo="Gittata massima e angoli complementari"}
A parità di $v_0$, la gittata dipende da $\theta$ attraverso $\sin 2\theta$, che vale al massimo $1$ per $2\theta = 90^\circ$. Quindi la **gittata massima** si ottiene con $\theta = 45^\circ$ e vale $R_{\max} = \dfrac{v_0^2}{g}$. Inoltre $\sin(180^\circ - 2\theta) = \sin 2\theta$, perciò gli angoli complementari $\theta$ e $90^\circ - \theta$ danno la stessa gittata. Il lancio con l'angolo maggiore sale più in alto e resta in volo più a lungo, con una componente orizzontale della velocità minore. Con $v_0 = 20\,\mathrm{m/s}$ i lanci a $30^\circ$ e a $60^\circ$ hanno gittata $35{,}3\,\mathrm{m}$, mentre il lancio a $45^\circ$ arriva a $40{,}8\,\mathrm{m}$.

::grafico{curve="14.142*t,14.142*t-4.905*t^2,0,2.8832;17.3205*t,10*t-4.905*t^2,0,2.0387;10*t,17.3205*t-4.905*t^2,0,3.5312" punti="35.31,0,pieno;40.77,0,pieno" etichette="21,11.2,45°;24,5.4,30°;19.5,15.8,60°" xmin=-5 xmax=45 ymin=-2 ymax=18 uguale=1 titolo="Lanci con $v_0 = 20\,\mathrm{m/s}$ a $30^\circ$, $45^\circ$ e $60^\circ$: gli angoli complementari danno la stessa gittata $35{,}3\,\mathrm{m}$, il lancio a $45^\circ$ arriva più lontano"}

:::

## Lanci da una quota

:::osservazione{#lancio-orizzontale titolo="Lancio orizzontale"}
Se il corpo è lanciato in orizzontale da una quota $h$ sopra il suolo, si pone l'origine al suolo sulla verticale del punto di lancio, e le leggi orarie sono
$$
x(t) = v_0\,t, \qquad y(t) = h - \frac{1}{2}\,g\,t^2 .
$$
Il corpo tocca il suolo quando $y = 0$, quindi il **tempo di caduta** e la distanza orizzontale percorsa sono
$$
t_c = \sqrt{\frac{2h}{g}}, \qquad d = v_0\,\sqrt{\frac{2h}{g}} .
$$
Il tempo di caduta non dipende da $v_0$, perché in ogni caso il moto verticale parte con velocità verticale nulla; un corpo lanciato in orizzontale e uno lasciato cadere dalla stessa quota nello stesso istante toccano il suolo insieme. Nell'istante dell'impatto $v_x = v_0$ e $v_y = -g\,t_c$, e l'angolo $\beta$ della velocità sotto l'orizzontale soddisfa $\tan\beta = \dfrac{|v_y|}{v_x}$. Per $h = 20\,\mathrm{m}$ e $v_0 = 8{,}0\,\mathrm{m/s}$ si ha $t_c = 2{,}02\,\mathrm{s}$ e $d = 16{,}2\,\mathrm{m}$.

::grafico{curve="8*t,20-4.905*t^2,0,2.0193" punti="0,20,pieno;4,18.774,pieno;8,15.095,pieno;12,8.964,pieno;16,0.38,pieno" segmenti="4,18.774,4,0;8,15.095,8,0;12,8.964,12,0;16,0.38,16,0;4,18.774,0,18.774;8,15.095,0,15.095;12,8.964,0,8.964" xmin=-2 xmax=18 ymin=-3 ymax=24 uguale=1 titolo="Lancio orizzontale da $h = 20\,\mathrm{m}$ con $v_0 = 8{,}0\,\mathrm{m/s}$, posizioni ogni $0{,}5\,\mathrm{s}$: gli spostamenti orizzontali sono uguali, quelli verticali crescono nel tempo"}

:::

:::osservazione{#lancio-da-quota titolo="Lancio da una quota con angolo qualsiasi"}
Se il punto di arrivo è a una quota $y_f$ diversa da quella di lancio $y_0$, le formule del tempo di volo e della gittata non si applicano. L'istante di arrivo si ottiene risolvendo l'equazione di secondo grado
$$
y_0 + v_0\sin\theta\; t - \frac{1}{2}\,g\,t^2 = y_f ,
$$
e sostituendo la soluzione in $x(t)$ si ottiene la distanza orizzontale. Se il punto di arrivo è più in basso del punto di lancio, il prodotto delle soluzioni è negativo, quindi l'equazione ha una sola soluzione positiva, che è quella cercata. Se il punto di arrivo è più in alto ed è raggiungibile, le soluzioni positive sono due, e la prima corrisponde al passaggio durante la salita, la seconda al passaggio durante la discesa. Quando è nota la distanza orizzontale di un bersaglio, l'equazione della **traiettoria parabolica** dà direttamente la quota a cui passa il proiettile.
:::

::::teorema{#velocita-e-quota titolo="Velocità in funzione della quota"}
Nelle ipotesi del moto del proiettile, se il corpo parte dalla quota $y_0$ con velocità di modulo $v_0$, nell'istante in cui si trova alla quota $y$ il modulo della sua velocità è
$$
v = \sqrt{v_0^2 - 2g\,(y - y_0)} ,
$$
qualunque sia la direzione del lancio. Il modulo della velocità dipende quindi solo dal dislivello. Un corpo lanciato da $h = 20\,\mathrm{m}$ con $v_0 = 8{,}0\,\mathrm{m/s}$ arriva al suolo con $v = \sqrt{64 + 2 \cdot 9{,}81 \cdot 20}\,\mathrm{m/s} = 21{,}4\,\mathrm{m/s}$, sia nel lancio orizzontale sia in qualunque altra direzione. La stessa relazione si ritrova come conservazione dell'energia meccanica, per cui si rimanda all'argomento sul lavoro e l'energia.

:::dimostrazione
La componente orizzontale della velocità è costante, $v_x = v_{0x}$. Per la componente verticale vale la relazione senza il tempo delle **leggi orarie con accelerazione costante** con $a_y = -g$, cioè $v_y^2 = v_{0y}^2 - 2g\,(y - y_0)$. Sommando i quadrati delle componenti si ottiene
$$
v^2 = v_x^2 + v_y^2 = v_{0x}^2 + v_{0y}^2 - 2g\,(y - y_0) = v_0^2 - 2g\,(y - y_0) ,
$$
da cui la tesi, estraendo la radice.
:::
::::

## Moto circolare uniforme

:::definizione{#posizione-angolare titolo="Posizione angolare e ascissa curvilinea"}
Un punto si muove di **moto circolare** se la sua traiettoria è una circonferenza. Con l'origine nel centro e raggio $R$, la posizione del punto è individuata dall'angolo $\theta(t)$ che il vettore posizione forma con l'asse $x$, misurato in radianti e positivo in verso antiorario:
$$
\vec{r}(t) = R\cos\theta(t)\,\hat{\imath} + R\sin\theta(t)\,\hat{\jmath} .
$$
La lunghezza dell'arco compreso tra l'asse $x$ e il punto è l'**ascissa curvilinea** $s = R\,\theta$; la relazione vale perché la misura in radianti di un angolo è il rapporto tra l'arco e il raggio. Così un punto su una circonferenza di raggio $2\,\mathrm{m}$ che ruota di $1\,\mathrm{rad}$ percorre un arco di $2\,\mathrm{m}$.

::grafico{curve="2*cos(t),2*sin(t),0,1;2*cos(t),2*sin(t),1,6.29" segmenti="0,0,2,0;0,0,1.081,1.683" punti="1.081,1.683,pieno,P" etichette="0.45,0.18,θ;2.02,1.08,s;0.2,1.05,R" xmin=-2.6 xmax=2.8 ymin=-2.6 ymax=2.6 uguale=1 titolo="La posizione angolare $\theta$ individua il punto $P$ sulla circonferenza di raggio $R$, e l'arco colorato ha lunghezza $s = R\,\theta$"}

:::

:::definizione{#velocita-angolare titolo="Velocità angolare"}
La **velocità angolare** è la derivata della posizione angolare,
$$
\omega = \frac{d\theta}{dt} ,
$$
misurata in $\mathrm{rad/s}$. Per un moto in verso antiorario $\omega > 0$ e, derivando $s = R\,\theta$, la velocità scalare è $v = \dfrac{ds}{dt} = \omega R$; in verso orario $\omega < 0$ e $v = |\omega|\,R$. Il moto circolare si dice **uniforme** se $\omega$ è costante; in questo caso $\theta(t) = \theta_0 + \omega\,t$, e il punto percorre archi uguali in tempi uguali. Tutti i punti di un disco rigido in rotazione hanno la stessa velocità angolare, mentre la loro velocità scalare cresce in proporzione alla distanza dall'asse.
:::

:::definizione{#periodo-e-frequenza titolo="Periodo e frequenza"}
Nel moto circolare uniforme il **periodo** $T$ è il tempo impiegato a compiere un giro completo, e la **frequenza** $f$ è il numero di giri compiuti in un secondo:
$$
T = \frac{2\pi}{\omega} = \frac{2\pi R}{v}, \qquad f = \frac{1}{T} = \frac{\omega}{2\pi} .
$$
La frequenza si misura in hertz, con $1\,\mathrm{Hz} = 1\,\mathrm{s^{-1}}$; nella tecnica si usano anche i giri al minuto, e un giro al minuto corrisponde a $\dfrac{1}{60}\,\mathrm{Hz}$. Un punto a $0{,}50\,\mathrm{m}$ dall'asse di una ruota che compie un giro in $2{,}0\,\mathrm{s}$ ha $f = 0{,}50\,\mathrm{Hz}$, $\omega = \pi\,\mathrm{rad/s} \approx 3{,}14\,\mathrm{rad/s}$ e $v = \omega R = 1{,}57\,\mathrm{m/s}$.
:::

::::teorema{#accelerazione-centripeta titolo="Accelerazione centripeta"}
Nel moto circolare uniforme di raggio $R$ e velocità angolare $\omega$, l'accelerazione è diretta in ogni istante verso il centro della circonferenza e ha modulo
$$
a_n = \omega^2 R = \frac{v^2}{R} .
$$
In forma vettoriale, con l'origine nel centro, $\vec{a} = -\omega^2\,\vec{r}$. Questa accelerazione si chiama **accelerazione centripeta**. Il modulo della velocità resta costante, e l'accelerazione misura la rapidità con cui ruota la direzione della velocità. Per la ruota che compie un giro in $2{,}0\,\mathrm{s}$, a $0{,}50\,\mathrm{m}$ dall'asse si ha $a_n = \pi^2 \cdot 0{,}50\,\mathrm{m/s^2} = 4{,}93\,\mathrm{m/s^2}$. Un corpo si muove di moto circolare uniforme solo se la forza risultante che agisce su di esso è diretta verso il centro, e per questo aspetto si rimanda all'argomento sulle leggi di Newton.

::grafico{curve="2*cos(t),2*sin(t),0,6.29" vettori="1.732,1,1.032,2.212,v;1.732,1,0.693,0.4,a" segmenti="0,0,1.732,1" punti="1.732,1,pieno,P;0,0,pieno" xmin=-2.6 xmax=2.8 ymin=-2.6 ymax=2.6 uguale=1 titolo="Nel moto circolare uniforme la velocità è tangente alla circonferenza e l'accelerazione è diretta lungo il raggio verso il centro"}

:::dimostrazione
Si pone $\varphi(t) = \omega t + \theta_0$, così che la legge oraria è $\vec{r}(t) = R\cos\varphi\,\hat{\imath} + R\sin\varphi\,\hat{\jmath}$. Derivando componente per componente con la regola della funzione composta si ottiene
$$
\vec{v}(t) = -\omega R\sin\varphi\,\hat{\imath} + \omega R\cos\varphi\,\hat{\jmath} ,
$$
che ha modulo $|\omega|\,R$ ed è ortogonale a $\vec{r}$, poiché $\vec{r} \cdot \vec{v} = -\omega R^2\cos\varphi\sin\varphi + \omega R^2\sin\varphi\cos\varphi = 0$. Derivando ancora si ottiene
$$
\vec{a}(t) = -\omega^2 R\cos\varphi\,\hat{\imath} - \omega^2 R\sin\varphi\,\hat{\jmath} = -\omega^2\,\vec{r}(t) .
$$
Quindi $\vec{a}$ ha verso opposto a $\vec{r}$, cioè punta verso il centro, e il suo modulo è $\omega^2 R$. Poiché $v = |\omega|\,R$, si ha anche $\omega^2 R = \dfrac{v^2}{R}$.
:::
::::

:::richiamo{titolo="Derivate di seno e coseno composte"}
Per la regola di derivazione della funzione composta, $\dfrac{d}{dt}\cos(\omega t + \theta_0) = -\omega\sin(\omega t + \theta_0)$ e $\dfrac{d}{dt}\sin(\omega t + \theta_0) = \omega\cos(\omega t + \theta_0)$. Si rimanda all'argomento sulle derivate di Analisi 1.
:::

## Moto circolare non uniforme

:::definizione{#accelerazione-angolare titolo="Accelerazione angolare"}
Se la velocità angolare varia nel tempo, il moto circolare è **non uniforme**, e l'**accelerazione angolare** è
$$
\alpha = \frac{d\omega}{dt} = \frac{d^2\theta}{dt^2} ,
$$
misurata in $\mathrm{rad/s^2}$. Se $\alpha$ ha lo stesso segno di $\omega$ la rotazione accelera, se ha segno opposto rallenta. Un disco che passa in modo uniforme dalla quiete a $\omega = 12\,\mathrm{rad/s}$ in $4{,}0\,\mathrm{s}$ ha accelerazione angolare $\alpha = 3{,}0\,\mathrm{rad/s^2}$.
:::

:::teorema{#moto-circolare-uniformemente-accelerato titolo="Moto circolare uniformemente accelerato"}
Se $\alpha$ è costante e all'istante $t = 0$ la posizione angolare è $\theta_0$ e la velocità angolare è $\omega_0$, allora
$$
\begin{aligned}
\omega(t) &= \omega_0 + \alpha\,t \\[6pt]
\theta(t) &= \theta_0 + \omega_0\,t + \frac{1}{2}\,\alpha\,t^2 \\[6pt]
\omega^2 &= \omega_0^2 + 2\alpha\,(\theta - \theta_0) .
\end{aligned}
$$
Sono le leggi del moto rettilineo uniformemente accelerato con $\theta$, $\omega$, $\alpha$ al posto di $x$, $v$, $a$, e si ricavano con la stessa integrazione delle **leggi orarie con accelerazione costante**. Il numero di giri compiuti è $\dfrac{\theta - \theta_0}{2\pi}$. Il disco che parte da fermo con $\alpha = 3{,}0\,\mathrm{rad/s^2}$ ruota in $4{,}0\,\mathrm{s}$ di $\dfrac{1}{2} \cdot 3{,}0 \cdot 4{,}0^2\,\mathrm{rad} = 24\,\mathrm{rad}$, cioè di $3{,}8$ giri.
:::

::::teorema{#accelerazione-tangenziale-e-normale titolo="Accelerazione tangenziale e accelerazione centripeta"}
Si consideri un punto in moto circolare di raggio $R$ in verso antiorario, con velocità angolare $\omega(t) > 0$ e accelerazione angolare $\alpha(t)$. Detti $\hat{u}_t$ il versore tangente nel verso del moto e $\hat{u}_n$ il versore diretto dal punto verso il centro, l'accelerazione è
$$
\vec{a} = a_t\,\hat{u}_t + a_n\,\hat{u}_n, \qquad a_t = \frac{dv}{dt} = \alpha R, \qquad a_n = \frac{v^2}{R} = \omega^2 R ,
$$
e il suo modulo è $|\vec{a}| = \sqrt{a_t^2 + a_n^2}$. L'**accelerazione tangenziale** $a_t$ misura la variazione del modulo della velocità, l'**accelerazione centripeta** $a_n$ la variazione della sua direzione. Per un punto a $R = 0{,}40\,\mathrm{m}$ dall'asse, nell'istante in cui $\omega = 5{,}0\,\mathrm{rad/s}$ e $\alpha = 2{,}0\,\mathrm{rad/s^2}$, si ha $a_t = 0{,}80\,\mathrm{m/s^2}$, $a_n = 10\,\mathrm{m/s^2}$ e $|\vec{a}| = 10{,}0\,\mathrm{m/s^2}$.

::grafico{curve="2*cos(t),2*sin(t),0,6.29" vettori="1,1.732,0.221,2.182,aₜ;1,1.732,0.25,0.433,aₙ;1,1.732,-0.529,0.883,a" segmenti="0.221,2.182,-0.529,0.883;0.25,0.433,-0.529,0.883" punti="1,1.732,pieno;0,0,pieno" xmin=-2.6 xmax=2.8 ymin=-2.6 ymax=2.6 uguale=1 titolo="In un moto circolare che accelera in verso antiorario, l'accelerazione $\vec{a}$ è la somma della componente tangenziale $a_t$ e della componente centripeta $a_n$"}

:::dimostrazione
Con l'origine nel centro, il versore radiale è $\hat{u}_r = \cos\theta\,\hat{\imath} + \sin\theta\,\hat{\jmath}$, quindi $\hat{u}_n = -\hat{u}_r$, e il versore tangente nel verso antiorario è $\hat{u}_t = -\sin\theta\,\hat{\imath} + \cos\theta\,\hat{\jmath}$. Derivando $\vec{r} = R\,\hat{u}_r$, con $R$ costante e $\theta = \theta(t)$, si ottiene $\vec{v} = R\,\omega\,\hat{u}_t = v\,\hat{u}_t$. Derivando il prodotto $v\,\hat{u}_t$ si ha
$$
\vec{a} = \frac{dv}{dt}\,\hat{u}_t + v\,\frac{d\hat{u}_t}{dt} ,
$$
e per la regola della funzione composta
$$
\frac{d\hat{u}_t}{dt} = -\omega\cos\theta\,\hat{\imath} - \omega\sin\theta\,\hat{\jmath} = -\omega\,\hat{u}_r = \omega\,\hat{u}_n ,
$$
perciò $\vec{a} = \dfrac{dv}{dt}\,\hat{u}_t + v\,\omega\,\hat{u}_n$. Infine da $v = \omega R$ seguono $\dfrac{dv}{dt} = \alpha R$ e $v\,\omega = \omega^2 R = \dfrac{v^2}{R}$. Poiché $\hat{u}_t$ e $\hat{u}_n$ sono ortogonali, il modulo segue dal teorema di Pitagora.
:::
::::

:::osservazione{#raggio-di-curvatura titolo="Componenti intrinseche su una traiettoria qualsiasi"}
La scomposizione vale per ogni traiettoria piana regolare, e in ogni punto si ha $\vec{a} = \dfrac{dv}{dt}\,\hat{u}_t + \dfrac{v^2}{\rho}\,\hat{u}_n$, dove $\rho$ è il **raggio di curvatura**, cioè il raggio della circonferenza che meglio approssima la traiettoria vicino al punto, e $\hat{u}_n$ è diretto verso il centro di quella circonferenza. In generale $a_t$ e $a_n$ si calcolano proiettando $\vec{a}$ sulla direzione di $\vec{v}$, con $a_t = \dfrac{\vec{a} \cdot \vec{v}}{v}$ e $a_n = \sqrt{|\vec{a}|^2 - a_t^2}$, e poi $\rho = \dfrac{v^2}{a_n}$. Nel punto più alto della traiettoria di un proiettile la velocità è orizzontale e vale $v_{0x}$, mentre l'accelerazione $g$ è verticale e quindi tutta centripeta; perciò in quel punto $\rho = \dfrac{v_{0x}^2}{g}$, che per $v_{0x} = 6{,}0\,\mathrm{m/s}$ vale $3{,}67\,\mathrm{m}$.
:::

## Moti relativi e trasformazioni di Galileo

:::definizione{#sistemi-in-moto-relativo titolo="Sistemi di riferimento in moto relativo"}
Posizione, velocità e traiettoria di un punto dipendono dal **sistema di riferimento** dell'osservatore. Si considerano due sistemi, $S$ con origine $O$ e assi $x$, $y$, e $S'$ con origine $O'$ e assi $x'$, $y'$. Si dice che $S'$ è in **moto traslatorio** rispetto a $S$ se i suoi assi restano paralleli a quelli di $S$; la velocità $\vec{V}$ dell'origine $O'$ misurata in $S$ si chiama **velocità di trascinamento**. Il vagone di un treno su un binario rettilineo e la banchina della stazione sono due sistemi di questo tipo, e un passeggero seduto è fermo nel sistema del vagone e in moto nel sistema della banchina.
:::

::::teorema{#trasformazioni-di-galileo titolo="Trasformazioni di Galileo"}
Sia $S'$ in moto traslatorio rispetto a $S$ con velocità $\vec{V}$ costante, e le origini coincidano all'istante $t = 0$. Allora un punto $P$ che in $S'$ ha vettore posizione $\vec{r}\,'$ ha in $S$ vettore posizione
$$
\vec{r} = \vec{r}\,' + \vec{V}\,t, \qquad t = t' .
$$
Se $\vec{V}$ è diretta lungo l'asse $x$, in componenti le trasformazioni sono $x = x' + V t$ e $y = y'$. L'uguaglianza $t = t'$ esprime l'ipotesi che il tempo scorra allo stesso modo per i due osservatori; l'ipotesi è verificata con ottima approssimazione per velocità piccole rispetto alla velocità della luce, mentre per velocità confrontabili le trasformazioni di Galileo sono sostituite da quelle della relatività ristretta.

::grafico{vettori="0,0,3,1,V t;0,0,6,3.5,r;3,1,6,3.5,r'" segmenti="3,1,7.6,1;3,1,3,4.6" punti="6,3.5,pieno,P" etichette="7.35,0.62,x';2.55,4.45,y';2.45,0.62,O'" xmin=-0.5 xmax=8 ymin=-0.5 ymax=5 uguale=1 titolo="Il punto $P$ ha posizione $\vec{r}$ nel sistema $S$ e $\vec{r}\,'$ nel sistema $S'$, la cui origine si è spostata di $\vec{V}\,t$, quindi $\vec{r} = \vec{r}\,' + \vec{V}\,t$"}

:::dimostrazione
Per la regola punta-coda della somma di vettori si ha $\overrightarrow{OP} = \overrightarrow{OO'} + \overrightarrow{O'P}$. Il vettore $\overrightarrow{O'P}$ è la posizione di $P$ in $S'$, cioè $\vec{r}\,'$, perché gli assi dei due sistemi sono paralleli e quindi un vettore ha le stesse componenti in $S$ e in $S'$. L'origine $O'$ si muove in $S$ di moto rettilineo uniforme con velocità $\vec{V}$ partendo da $O$, quindi $\overrightarrow{OO'} = \vec{V}\,t$; sostituendo si ottiene la tesi.
:::
::::

::::teorema{#composizione-delle-velocita titolo="Composizione delle velocità"}
Nelle ipotesi delle trasformazioni di Galileo, la velocità e l'accelerazione di un punto misurate in $S$ e in $S'$ sono legate da
$$
\vec{v} = \vec{v}\,' + \vec{V}, \qquad \vec{a} = \vec{a}\,' .
$$
La velocità rispetto a $S$ è la somma vettoriale della velocità rispetto a $S'$ e della velocità di trascinamento. In particolare, se $A$ e $B$ sono due corpi con velocità $\vec{v}_A$ e $\vec{v}_B$, scegliendo $S'$ solidale con $A$ si ottiene la **velocità relativa** di $B$ rispetto ad $A$, $\vec{v}_{B,A} = \vec{v}_B - \vec{v}_A$. Un passeggero che cammina verso la testa del treno a $1{,}5\,\mathrm{m/s}$ rispetto al vagone, mentre il treno viaggia a $20\,\mathrm{m/s}$, ha rispetto ai binari velocità $21{,}5\,\mathrm{m/s}$.

:::dimostrazione
Si deriva rispetto al tempo l'uguaglianza $\vec{r} = \vec{r}\,' + \vec{V}\,t$. Poiché $\vec{V}$ è costante e $t' = t$, si ottiene $\dfrac{d\vec{r}}{dt} = \dfrac{d\vec{r}\,'}{dt} + \vec{V}$, cioè $\vec{v} = \vec{v}\,' + \vec{V}$. Derivando ancora, la derivata di $\vec{V}$ è nulla, quindi $\vec{a} = \vec{a}\,'$.
:::
::::

:::esempio{titolo="Barca che attraversa un fiume"}
Una barca punta perpendicolarmente alle rive con velocità $v' = 4{,}0\,\mathrm{m/s}$ rispetto all'acqua, e la corrente ha velocità $V = 3{,}0\,\mathrm{m/s}$ parallela alle rive. Nel sistema della riva la velocità della barca è $\vec{v} = \vec{v}\,' + \vec{V}$; poiché i due vettori sono ortogonali, il modulo è $v = \sqrt{4{,}0^2 + 3{,}0^2}\,\mathrm{m/s} = 5{,}0\,\mathrm{m/s}$, e la direzione forma con la perpendicolare alle rive l'angolo $\varphi$ con $\tan\varphi = \dfrac{3{,}0}{4{,}0}$, cioè $\varphi \approx 36{,}9^\circ$. Il tempo di attraversamento dipende solo dalla componente della velocità perpendicolare alle rive, che è $v'$, mentre la corrente sposta il punto di arrivo a valle.

::grafico{vettori="0,0,0,4,v';0,4,3,4,V;0,0,3,4,v" etichette="0.25,1.5,φ" xmin=-0.8 xmax=4.2 ymin=-0.8 ymax=4.8 uguale=1 titolo="Velocità in $\mathrm{m/s}$, con l'asse $x$ lungo la corrente: la velocità $\vec{v}$ della barca rispetto alla riva è la somma di $\vec{v}\,'$, rispetto all'acqua, e della velocità $\vec{V}$ della corrente"}

:::

:::osservazione{#invarianza-dell-accelerazione titolo="Invarianza dell'accelerazione"}
Due sistemi in moto traslatorio uniforme l'uno rispetto all'altro misurano per ogni corpo la stessa accelerazione, anche se misurano velocità e traiettorie diverse. Un sasso lasciato cadere da un passeggero di un treno in moto rettilineo uniforme cade in verticale nel sistema del vagone e descrive un arco di parabola nel sistema dei binari, con la stessa accelerazione $\vec{g}$ nei due sistemi. Su questa invarianza si basa il principio di relatività galileiana, per cui si rimanda all'argomento sulle leggi di Newton e sui sistemi inerziali. Se invece $S'$ trasla con velocità $\vec{V}(t)$ variabile, vale ancora $\vec{v} = \vec{v}\,' + \vec{V}(t)$, e derivando si ottiene $\vec{a} = \vec{a}\,' + \dfrac{d\vec{V}}{dt}$; le accelerazioni misurate nei due sistemi differiscono allora per l'accelerazione di trascinamento.
:::
