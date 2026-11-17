---
titolo: "Moti nel piano"
sommario: "Componenti e velocità, lanci nel vuoto, traiettorie e accelerazione nel moto circolare."
---

## Descrivere il moto in due dimensioni

:::definizione{#componenti-moto titolo="Posizione, velocità e accelerazione nel piano"}
La posizione ha due coordinate che dipendono dallo stesso tempo. Nel piano, $(x(t),y(t))$ determina il punto materiale. Eliminando $t$ si può ricavare la **traiettoria**, ossia la curva dei punti attraversati. La traiettoria da sola non dice quando il corpo passa per ciascun punto o in quale verso lo percorre.

La **velocità** ha componenti $v_x$ e $v_y$, stimate con le pendenze delle due leggi orarie in intervalli sempre più brevi. È tangente alla traiettoria nei punti regolari con velocità non nulla e punta nel verso del moto. Da $v_x=6\,\mathrm{m/s}$ e $v_y=-8\,\mathrm{m/s}$ si trova un modulo di $10\,\mathrm{m/s}$ e un verso verso destra e in basso. Sommare $6$ e $-8$ mescolerebbe contributi lungo assi perpendicolari.

L'accelerazione è la variazione vettoriale della velocità nel tempo. Una velocità può cambiare sia di modulo sia di direzione. Perciò un moto a rapidità costante può avere accelerazione diversa da zero, come accade quando un punto descrive una circonferenza. In un lancio senza resistenza dell'aria, invece, l'accelerazione è verticale e costante in prossimità del suolo.
:::

## Il lancio orizzontale

:::teorema{#lancio-orizzontale titolo="Moti indipendenti lungo gli assi"}
Supponiamo che la resistenza dell'aria sia trascurabile, che il suolo sia orizzontale e che $g$ sia uniforme. Si prende $x$ orizzontale e $y$ verso l'alto. Se il corpo parte da $(0,h)$ con velocità orizzontale $v_0>0$, le leggi sono
$$
x(t)=v_0t,\qquad y(t)=h-\tfrac12gt^2.
$$
Il moto verticale parte da fermo e determina il tempo di arrivo $t_f=\sqrt{2h/g}$. Il moto orizzontale procede senza accelerazione durante lo stesso tempo. La distanza di arrivo è $R=v_0t_f$, quindi dipende linearmente da $v_0$ e come radice quadrata da $h$. Quadruplicare $h$ raddoppia il tempo e, a $v_0$ fissata, anche la distanza.

Con $h=5\,\mathrm m$, $v_0=6\,\mathrm{m/s}$ e $g=10\,\mathrm{m/s^2}$ si ha $t_f=1\,\mathrm s$ e $R=6\,\mathrm m$. La velocità poco prima dell'impatto ha componenti $(6,-10)\,\mathrm{m/s}$. La sua direzione è obliqua perché la componente orizzontale rimane quella iniziale e quella verticale aumenta in modulo. Scrivendo $t=x/v_0$ nella legge verticale si ricava $y=h-\dfrac{g}{2v_0^2}x^2$. Si usa il tratto da $x=0$ a $x=R$, fino al contatto.
:::

::grafico{curve="6*t,5-5*t^2,0,1" punti="0,5,pieno;6,0,pieno" vettori="0,5,2,5,v_0" xmin=-0.6 xmax=7 ymin=-0.5 ymax=6.5 titolo="Il lancio orizzontale produce una parabola fino al suolo"}

## Il lancio obliquo

:::teorema{#lancio-obliquo titolo="Tempo di volo, quota massima e gittata"}
Sia $\theta$ l'angolo del lancio dal semiasse positivo $x$. Con partenza da $(0,h)$ e assenza di resistenza, le componenti iniziali sono $v_{0x}=v_0\cos\theta$ e $v_{0y}=v_0\sin\theta$. Pertanto $x=v_{0x}t$ e $y=h+v_{0y}t-\frac12gt^2$. Se $v_{0y}>0$, all'apice si ha $v_y=v_{0y}-gt=0$. L'aumento di quota è $H=v_{0y}^2/(2g)$. A quell'istante la velocità è ancora orizzontale se $v_{0x}$ non è nullo.

Se partenza e arrivo sono alla stessa quota, la prima soluzione di $y(t)=h$ è il lancio, $t=0$. La seconda dà $t_f=2v_{0y}/g$. Si ricava la gittata
$$
R=\frac{2v_{0x}v_{0y}}g=\frac{v_0^2\sin(2\theta)}g .
$$
Per $0<\theta<90^\circ$ e $v_0$ fissata, il seno raggiunge il massimo a $2\theta=90^\circ$. Angoli complementari hanno la stessa gittata in queste condizioni, perché $\sin\alpha=\sin(180^\circ-\alpha)$. I tempi di volo e le altezze massime sono invece diversi, perché dipendono dalla componente verticale.

Se la quota di arrivo è diversa, si deve risolvere la legge verticale con la nuova quota. Nel caso $x=8t$, $y=15+5t-5t^2$ si raggiunge il suolo a $t=(1+\sqrt{13})/2\,\mathrm s\simeq2{,}30\,\mathrm s$. Usare la formula della stessa quota darebbe $1\,\mathrm s$, che corrisponde invece al ritorno all'altezza iniziale di quindici metri.
:::

::grafico{curve="8*t,15+5*t-5*t^2,0,2.30277564" punti="0,15,pieno;4,16.25,pieno;8,15,pieno" segmenti="0,15,8,15" xmin=-0.5 xmax=20 ymin=-1 ymax=18.5 titolo="Il ritorno alla quota iniziale precede l'impatto al suolo"}

## Angoli e velocità angolare

:::definizione{#radianti titolo="Il radiante"}
Un angolo in radianti è il rapporto tra l'arco orientato $s$ e il raggio $r$: $\theta=s/r$. Un giro è $2\pi$ radianti, quindi $180^\circ=\pi\,\mathrm{rad}$. La velocità angolare misura la variazione di angolo per unità di tempo. In moto circolare uniforme $\omega=2\pi/T=2\pi f$, dove $T$ è il periodo e $f$ la frequenza. Se un rotore compie trenta giri al minuto, la frequenza è mezzo giro al secondo, quindi $\omega=\pi\,\mathrm{rad/s}$.

Da $s=r\theta$ segue $v_t=r\omega$ quando $\theta$ si misura in radianti. A raggio doppio, con la stessa velocità angolare, il punto percorre un arco doppio nello stesso tempo. Tutti i punti di un disco rigido compiono un giro in uno stesso periodo, ma quelli più lontani dall'asse hanno velocità tangenziale maggiore. L'angolo esprime quanto il corpo ruota e il raggio trasforma quella rotazione in una distanza.
:::

## Accelerazione centripeta

:::teorema{#centripeta titolo="Variazione della direzione della velocità"}
Su una circonferenza, la velocità è tangente e perpendicolare al raggio. Nel moto circolare uniforme le frecce velocità hanno tutte la stessa lunghezza, ma a istanti diversi hanno orientamenti diversi. La differenza fra due velocità vicine ha modulo circa $v\,\Delta\theta$ per un angolo molto piccolo $\Delta\theta$, misurato in radianti. Dividendo per il tempo e usando $\omega=v/r$ si ottiene
$$
a_c=v\omega=\frac{v^2}r=\omega^2r .
$$
Nel limite la direzione della variazione punta verso il centro. Per effetto dell'accelerazione, la velocità segue il passaggio alla nuova tangente e la traiettoria si piega.

La forma più conveniente dipende dai dati. A velocità lineare fissata, una curva di raggio dimezzato richiede accelerazione doppia. A velocità angolare fissata, invece, il punto su un disco a raggio doppio ha accelerazione doppia. L'apparente differenza è dovuta al fatto che nel secondo confronto anche il modulo della velocità raddoppia.
:::

::grafico{curve="2*cos(t),2*sin(t),0,6.2832" vettori="2,0,2,1.4,v;2,0,0.9,0,a_c" xmin=-2.5 xmax=2.8 ymin=-2.5 ymax=2.5 uguale=1 titolo="Nel punto a destra l'accelerazione è rivolta verso il centro"}

## Moto circolare non uniforme

:::osservazione{#tangenziale titolo="Due componenti dell'accelerazione"}
Nel moto circolare non uniforme cambia anche il modulo della velocità. La componente tangenziale vale $a_t=\Delta v/\Delta t$ come media della variazione di rapidità lungo il tratto. Istante per istante si considera il limite su intervalli piccoli. Un segno negativo, prendendo positiva la tangente lungo il moto, indica che il corpo rallenta. La componente radiale resta $a_c=v^2/r$ verso il centro.

Le due direzioni sono perpendicolari, dunque $a=\sqrt{a_c^2+a_t^2}$. Con $v=4\,\mathrm{m/s}$, $r=4\,\mathrm m$ e $a_t=3\,\mathrm{m/s^2}$, l'accelerazione radiale vale $4\,\mathrm{m/s^2}$ e il modulo totale è $5\,\mathrm{m/s^2}$. Se il corpo rallenta con $a_t=-3\,\mathrm{m/s^2}$, il modulo rimane cinque ma si inclina all'indietro rispetto al moto. Il segno conta quando si disegna la direzione.

Se la curva è sempre la stessa circonferenza, nel momento in cui il corpo passa da velocità nulla la componente radiale è nulla. Può comunque esserci accelerazione tangenziale, come per una ruota che parte aumentando la velocità angolare. A velocità non nulla, annullare l'accelerazione tangenziale lascia una componente centripeta positiva in modulo.
:::

::grafico{curve="2*cos(t),2*sin(t),0,6.2832" vettori="2,0,0.4,0,a_c;2,0,2,1.2,a_t;2,0,0.4,1.2,a" segmenti="0.4,0,0.4,1.2;0.4,1.2,2,1.2" xmin=-2.5 xmax=2.8 ymin=-2.5 ymax=2.5 uguale=1 titolo="La risultante è la diagonale del parallelogramma delle componenti"}
