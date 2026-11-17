---
titolo: Moti nel piano e moto circolare
sommario: Componenti di posizione e velocità, lancio orizzontale, frequenza, velocità angolare e accelerazione centripeta.
---

## Vettori e componenti

:::definizione{#componenti titolo="Descrivere due direzioni"}
Nel piano si scelgono due assi perpendicolari $x$ e $y$. La posizione è la coppia delle coordinate $(x,y)$. Lo **spostamento** ha componenti $\Delta x=x_f-x_i$ e $\Delta y=y_f-y_i$. Le componenti possono avere segni diversi. In un triangolo rettangolo con questi cateti, il **modulo** dello spostamento è la lunghezza dell'ipotenusa.
$$
\lvert \Delta\vec r\rvert=\sqrt{(\Delta x)^2+(\Delta y)^2}.
$$
Se si percorrono prima $4\,\mathrm{m}$ verso est e poi $3\,\mathrm{m}$ verso nord, la distanza camminata è $7\,\mathrm{m}$ e il modulo dello spostamento è $5\,\mathrm{m}$. La diagonale collega direttamente i due estremi. La lunghezza del tragitto dipende dalla traiettoria, mentre lo spostamento dipende dai suoi estremi. Con componenti negative, i segni servono a individuare il quadrante. I quadrati nel modulo danno un risultato non negativo.

::grafico{vettori="0,0,4,0,Δx;4,0,4,3,Δy;0,0,4,3,Δr" xmin=-1 xmax=6 ymin=-1 ymax=5 uguale=1 nomi="x (m),y (m)" titolo="Le due tappe lungo gli assi misurano 7 m. La diagonale misura 5 m."}
:::

:::esempio{titolo="Leggere il verso dalla coppia di componenti"}
Una bicicletta ha componenti $v_x=-4\,\mathrm{m/s}$ e $v_y=3\,\mathrm{m/s}$. Se $x$ cresce verso est e $y$ cresce verso nord, la bicicletta avanza verso nord-ovest. La rapidità è $\sqrt{(-4)^2+3^2}\,\mathrm{m/s}=5\,\mathrm{m/s}$. Perciò sostituendo $v_x=+4\,\mathrm{m/s}$ la rapidità resterebbe uguale, mentre il verso cambierebbe. Il modulo da solo lascia aperta l'orientazione del vettore.
:::

## Composizione dei moti

:::teorema{#composizione titolo="Studiare separatamente gli assi"}
Le leggi lungo due assi perpendicolari descrivono i componenti dello stesso moto. Le due coordinate devono essere valutate allo **stesso istante**. Se gli assi hanno velocità costanti, ad esempio $v_x=3\,\mathrm{m/s}$ e $v_y=-2\,\mathrm{m/s}$, dopo $4\,\mathrm{s}$ gli spostamenti sono $+12\,\mathrm{m}$ e $-8\,\mathrm{m}$. Lo spostamento lungo l'asse $x$ si ricava dal dato lungo $x$. Lo spostamento lungo $y$ si ricava dal dato lungo $y$. Le due quantità si riuniscono poi nel vettore spostamento.
:::

:::esempio{titolo="Stessa durata, scale diverse"}
Supponiamo che un corpo abbia $x=2+3t$ e $y=6-t^2$, in unità SI. Dopo $2\,\mathrm{s}$ si trova in $(8,2)$, in metri. Il grafico di $x$ in funzione del tempo è una retta crescente con pendenza $3\,\mathrm{m/s}$. Il grafico di $y$ in funzione del tempo è una parabola. Le due letture all'istante di interesse formano la coppia $(8,2)$. Il disegno nel piano $xy$, ottenuto variando l'istante, è ancora un altro grafico: mostra i punti dello spazio attraversati dal corpo, con entrambi gli assi misurati in metri.

::grafico{f="2+3*x;6-x^2" punti="2,8,pieno,A;2,2,pieno,B" xmin=0 xmax=3 ymin=-4 ymax=12 nomi="t (s),r (m)" legenda="x(t);y(t)" titolo="A e B sono componenti lette a 2 s sullo stesso asse dei tempi."}
:::

## Lancio orizzontale

:::teorema{#lancio titolo="Dal bordo di un tavolo"}
Una pallina lascia un bordo di altezza $h$ con velocità iniziale orizzontale $u_0>0$. Si sceglie l'asse $x$ nel verso di lancio e l'asse $y$ verso l'alto, con quota zero al suolo. Trascurando l'aria, l'accelerazione orizzontale è zero e quella verticale è $-g$. Quindi
$$
x(t)=u_0t,\quad y(t)=h-\frac12gt^2,\qquad
v_x(t)=u_0,\quad v_y(t)=-gt.
$$
L'urto con il suolo avviene a $y=0$. La radice positiva dell'equazione dà la durata $t_f=\sqrt{\dfrac{2h}{g}}$. La **gittata** è lo spostamento orizzontale fino all'impatto e vale $R=u_0t_f$. La velocità orizzontale influisce sulla gittata, mentre nel modello la durata dipende soltanto da $h$ e $g$. Se aumenta il modulo di $u_0$, la pallina resta in aria per lo stesso tempo e percorre più spazio orizzontale in ciascun secondo.
:::

:::osservazione{#traiettoria titolo="La parabola nello spazio"}
Eliminando il tempo con $t=\dfrac{x}{u_0}$, si trova $y=h-\dfrac{g}{2u_0^2}x^2$. L'ascissa è ora una coordinata spaziale in metri. La curva si arresta al punto d'impatto. Due palline lasciate dalla stessa quota nello stesso istante, una lasciata cadere e una lanciata orizzontalmente, hanno la stessa coordinata $y(t)$. La seconda percorre anche una distanza orizzontale. La conclusione richiede un pavimento orizzontale alla stessa quota.
:::

:::esempio{titolo="Posizione all'impatto e direzione della velocità"}
Da $h=5\,\mathrm{m}$ si lancia una pallina a $3\,\mathrm{m/s}$, con $g=10\,\mathrm{m/s^2}$. Il suolo si raggiunge a $t=1\,\mathrm{s}$ e $x=3\,\mathrm{m}$. In quell'istante $v_x=3\,\mathrm{m/s}$ e $v_y=-10\,\mathrm{m/s}$, quindi l'impatto avviene verso destra e verso il basso. La rapidità è $\sqrt{109}\,\mathrm{m/s}$. Da una sola componente si avrebbe una misura insufficiente per il modulo.

::grafico{f="5-(5/9)*x^2" punti="0,5,pieno,L;3,0,pieno" etichette="2.86,0.75,I" xmin=0 xmax=3 ymin=0 ymax=6 nomi="x (m),y (m)" titolo="Da L a I la scia è una parabola. La gittata è 3 m."}
:::

## Periodo e frequenza

:::definizione{#periodo titolo="Contare i giri"}
Nel moto circolare uniforme il **periodo** $T$ è la durata di un giro; la **frequenza** $f$ conta i giri per unità di tempo. Se il moto ha frequenza costante e si osservano $N$ giri in $\Delta t$, valgono
$$
f=\frac{N}{\Delta t},\qquad T=\frac{\Delta t}{N},\qquad fT=1.
$$
La frequenza si misura in hertz, con $\mathrm{Hz}=\mathrm{s^{-1}}$. Se la ruota compie $24$ giri in $6\,\mathrm{s}$, allora $f=4\,\mathrm{Hz}$ e $T=0{,}25\,\mathrm{s}$. Un dato in giri al minuto va diviso per $60$ per passare ai giri al secondo. Per esempio, $120$ giri al minuto corrispondono a $2\,\mathrm{Hz}$. Se la frequenza aumenta, il periodo diminuisce perché il singolo giro richiede meno tempo.
:::

:::esempio{titolo="La coordinata orizzontale ritorna dopo un periodo"}
Il punto sul bordo di un disco di raggio $2\,\mathrm m$ parte dalla posizione più a destra e compie un giro ogni $4\,\mathrm{s}$. Un quarto di periodo dopo il punto è sul semiasse verticale positivo se ruota in senso antiorario. La coordinata orizzontale, inizialmente $2\,\mathrm{m}$, vale zero a $1\,\mathrm{s}$ e $-2\,\mathrm{m}$ a $2\,\mathrm{s}$. Ritorna al valore iniziale a $4\,\mathrm{s}$.

::grafico{f="2*cos(PI*x/2)" punti="0,2,pieno,A;1,0,pieno,B;2,-2,pieno,C;4,2,pieno,D" xmin=0 xmax=4.3 ymin=-2.6 ymax=2.6 nomi="t (s),x (m)" titolo="La proiezione orizzontale si ripete dopo 4 s."}
:::

## Velocità tangenziale e angolare

:::teorema{#circolare titolo="La lunghezza di un giro"}
La lunghezza di un giro a raggio $r$ è $2\pi r$. Una spazzata completa corrisponde all'angolo $2\pi$ radianti. Per un arco di lunghezza $s$, l'ampiezza in radianti vale $s/r$. Nel moto circolare uniforme, il modulo della velocità angolare è $\omega=\dfrac{2\pi}{T}=2\pi f$. La **velocità tangenziale** ha modulo
$$
v=\frac{2\pi r}{T}=\omega r.
$$
La direzione della velocità istantanea è tangente alla circonferenza, e il verso segue la rotazione. Due punti solidali allo stesso disco compiono lo stesso angolo nello stesso tempo, quindi hanno lo stesso $\omega$. Il punto più lontano dal centro ha rapidità maggiore perché il suo arco è più lungo a parità di angolo.
:::

:::esempio{titolo="Punti a distanze diverse dal centro"}
Un disco gira con $f=2\,\mathrm{Hz}$. Due segni si trovano a distanze $0{,}20\,\mathrm{m}$ e $0{,}40\,\mathrm{m}$ dal centro. Per entrambi $\omega=4\pi\,\mathrm{rad/s}$, mentre le rapidità sono $0{,}8\pi$ e $1{,}6\pi\,\mathrm{m/s}$. Il rapporto delle rapidità coincide con quello dei raggi. A frequenza fissata la dipendenza da $r$ è lineare.

::grafico{f="4*PI*x" punti="0.2,2.513274,pieno,A;0.4,5.026548,pieno,B" xmin=0 xmax=0.5 ymin=0 ymax=7 nomi="r (m),v (m/s)" titolo="La rapidità tangenziale raddoppia passando da A a B."}
:::

## Accelerazione centripeta

:::teorema{#centripeta titolo="La direzione della velocità cambia"}
Nel moto circolare uniforme la rapidità rimane costante. Tra due punti della circonferenza cambia la direzione della velocità. Per trovare la variazione si disegnano i due vettori velocità con la stessa origine: la variazione è la freccia dalla punta del primo alla punta del secondo. Quando i due punti sono molto vicini questa variazione punta quasi verso il centro. Nel calcolo istantaneo la direzione è esattamente radiale verso il centro. Il modulo dell'accelerazione centripeta è
$$
a_c=\frac{v^2}{r}=\omega^2r.
$$
Per motivare il valore, per un piccolo angolo $\Delta\theta$ il modulo della differenza delle velocità è circa $v\Delta\theta$, poiché la corda del triangolo delle velocità si avvicina all'arco. Dividendo per $\Delta t$ si ottiene circa $v\omega$. Nel limite di intervalli sempre più piccoli si ricava $v\omega=\dfrac{v^2}{r}$. La stessa relazione dice due cose diverse a seconda di quale dato si fissa. A parità di $v$, un raggio maggiore dà minore accelerazione. A parità di $\omega$, un raggio maggiore dà maggiore accelerazione.
:::

:::esempio{titolo="Velocità e accelerazione allo stesso punto"}
Un punto percorre una circonferenza di raggio $2\,\mathrm{m}$ con rapidità $4\,\mathrm{m/s}$. A destra del centro, se ruota in senso antiorario, la velocità è verso l'alto. L'accelerazione è verso sinistra, con modulo $\dfrac{4^2}{2}\,\mathrm{m/s^2}=8\,\mathrm{m/s^2}$. Le due frecce sono perpendicolari. Da un giro a quello successivo ritornano nelle stesse direzioni.

::grafico{curve="2*cos(t),2*sin(t),0,6.2831853" vettori="2,0,2,1.6,v;2,0,0.85,0,a" punti="0,0,pieno,O;2,0,pieno,P" xmin=-2.8 xmax=3 ymin=-2.8 ymax=2.8 uguale=1 nomi="x (m),y (m)" titolo="A destra del centro, la velocità è tangente e l'accelerazione punta verso O."}
:::

:::attenzione
La velocità scalare costante del moto circolare uniforme può far pensare ad accelerazione nulla. Se il vettore velocità fosse costante, avrebbe anche direzione costante e il moto sarebbe rettilineo. Nel moto circolare la direzione è tangente e cambia da punto a punto.
:::
