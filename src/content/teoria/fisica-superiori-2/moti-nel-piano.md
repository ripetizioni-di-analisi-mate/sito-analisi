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

::grafico{vettori="0,0,4,0,Δx;4,0,4,3,Δy;0,0,4,3" etichette="1.8,1.68,Δr" xmin=-1 xmax=6 ymin=-1 ymax=5 uguale=1 nomi="x (m),y (m)" titolo="Le due tappe lungo gli assi misurano 7 m. La diagonale misura 5 m."}
:::

:::esempio{titolo="Leggere il verso dalla coppia di componenti"}
Una bicicletta ha componenti $v_x=-4\,\mathrm{m/s}$ e $v_y=3\,\mathrm{m/s}$. Se $x$ cresce verso est e $y$ cresce verso nord, la bicicletta avanza verso nord-ovest. La rapidità è $\sqrt{(-4)^2+3^2}\,\mathrm{m/s}=5\,\mathrm{m/s}$. Perciò sostituendo $v_x=+4\,\mathrm{m/s}$ la rapidità resterebbe uguale, mentre il verso cambierebbe. Il modulo da solo lascia aperta l'orientazione del vettore.
:::

:::esempio{titolo="Dalle posizioni alla velocità media"}
Un punto passa da $A=(-2;1)\,\mathrm m$ a $B=(4;-2)\,\mathrm m$ in $3\,\mathrm s$. Si sottraggono le coordinate nello stesso ordine, quindi lo spostamento vale $(6;-3)\,\mathrm m$. Dividendo entrambe le componenti per la durata si ottiene la velocità media $(2;-1)\,\mathrm{m/s}$, con modulo $\sqrt5\,\mathrm{m/s}$. La stessa velocità media si ottiene percorrendo prima sei metri verso destra e poi tre metri verso il basso, purché la durata totale sia di tre secondi.

Nel primo caso, se il tragitto è il segmento diretto, la distanza è $\sqrt{45}\,\mathrm m$. Nel secondo è $9\,\mathrm m$. La rapidità media del tragitto spezzato è quindi $3\,\mathrm{m/s}$. Il vettore velocità media indica come cambia la posizione fra le due osservazioni. Per ricavare la rapidità media occorre conoscere anche la lunghezza effettiva del tragitto.

::grafico{segmenti="-2,1,4,1;4,1,4,-2" vettori="-2,1,4,-2" punti="-2,1,pieno;4,-2,pieno" etichette="-2.45,1.42,A;4.16,-1.8,B;0.7,0.03,Δr" xmin=-3 xmax=5.2 ymin=-3 ymax=2 uguale=1 nomi="x (m),y (m)" titolo="Il percorso tratteggiato e quello diretto collegano gli stessi punti A e B."}
:::

## Composizione dei moti

:::teorema{#composizione titolo="Studiare separatamente gli assi"}
Le leggi lungo due assi perpendicolari descrivono le componenti dello stesso moto. Le due coordinate devono essere valutate allo **stesso istante**. Se le componenti della velocità sono costanti, ad esempio $v_x=3\,\mathrm{m/s}$ e $v_y=-2\,\mathrm{m/s}$, dopo $4\,\mathrm{s}$ gli spostamenti sono $+12\,\mathrm{m}$ e $-8\,\mathrm{m}$. Lo spostamento lungo l'asse $x$ si ricava dal dato lungo $x$. Lo spostamento lungo $y$ si ricava dal dato lungo $y$. Le due quantità si riuniscono poi nel vettore spostamento.
:::

:::esempio{titolo="Stessa durata, scale diverse"}
Supponiamo che un corpo abbia $x=2+3t$ e $y=6-t^2$, in unità SI. Dopo $2\,\mathrm{s}$ si trova in $(8,2)$, in metri. Il grafico di $x$ in funzione del tempo è una retta crescente con pendenza $3\,\mathrm{m/s}$. Il grafico di $y$ in funzione del tempo è una parabola. Le due letture all'istante di interesse formano la coppia $(8,2)$. Il disegno nel piano $xy$, ottenuto variando l'istante, è ancora un altro grafico: mostra i punti dello spazio attraversati dal corpo, con entrambi gli assi misurati in metri.

::grafico{f="2+3*x;6-x^2" punti="2,8,pieno,A;2,2,pieno,B" xmin=0 xmax=3 ymin=-4 ymax=12 nomi="t (s),componenti (m)" legenda="x(t);y(t)" titolo="A e B sono componenti lette a 2 s sullo stesso asse dei tempi."}
:::

:::esempio{titolo="Due traiettorie si incrociano"}
Due sensori seguono i punti $A$ e $B$ nello stesso riferimento e con lo stesso orologio, con $t\geq0$. Le posizioni sono $A(t)=(t;2t)$ e $B(t)=(4-t;3)$, con coordinate in metri e tempi in secondi. La prima traiettoria è sulla retta $y=2x$, la seconda sulla retta $y=3$. Entrambe passano quindi dal punto $P=(1{,}5;3)\,\mathrm m$.

Per conoscere l'istante di arrivo in $P$ si torna alle due leggi orarie. Il punto $A$ ha ascissa $1{,}5\,\mathrm m$ a $t=1{,}5\,\mathrm s$. Il punto $B$ ha la stessa ascissa quando $4-t=1{,}5$, cioè a $t=2{,}5\,\mathrm s$. L'intersezione delle traiettorie identifica un luogo comune. Per un incontro occorre risolvere insieme
$$
\begin{cases}
x_A(t)=x_B(t),\\
y_A(t)=y_B(t).
\end{cases}
$$
Qui l'uguaglianza delle ascisse darebbe $t=2\,\mathrm s$, mentre quella delle ordinate dà $t=1{,}5\,\mathrm s$. I valori sono diversi, quindi i punti si trovano in posizioni diverse quando passano al livello dell'altro. Con la legge $B(t)=(3-t;3)$ entrambe le uguaglianze varrebbero invece a $t=1{,}5\,\mathrm s$. Cambiare la posizione iniziale di B modifica l'orario di passaggio pur lasciando la sua traiettoria sulla stessa retta.

::grafico{vettori="0,0,2.4,4.8;4,3,0.3,3" punti="0,0,pieno;4,3,pieno;1.5,3,pieno" etichette="0.27,0.87,A;3.64,3.34,B;1.66,2.73,P" xmin=-0.6 xmax=4.6 ymin=-0.6 ymax=5.5 uguale=1 nomi="x (m),y (m)" titolo="P appartiene a entrambe le traiettorie. A transita a 1,5 s e B a 2,5 s."}
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
Eliminando il tempo con $t=\dfrac{x}{u_0}$, si trova $y=h-\dfrac{g}{2u_0^2}x^2$. L'ascissa è ora una coordinata spaziale in metri. La curva si arresta al punto d'impatto. Se dalla stessa quota e nello stesso istante si lascia cadere una pallina e se ne lancia un'altra orizzontalmente, entrambe partono con velocità verticale nulla. Hanno quindi la stessa coordinata $y(t)$ finché entrambe sono in volo. La seconda percorre anche una distanza orizzontale. Se le superfici d'arrivo sono alla stessa quota, le due palline le raggiungono nello stesso istante.
:::

:::esempio{titolo="Posizione all'impatto e direzione della velocità"}
Da $h=5\,\mathrm{m}$ si lancia una pallina a $3\,\mathrm{m/s}$, con $g=10\,\mathrm{m/s^2}$. Il suolo si raggiunge a $t=1\,\mathrm{s}$ e $x=3\,\mathrm{m}$. In quell'istante $v_x=3\,\mathrm{m/s}$ e $v_y=-10\,\mathrm{m/s}$, quindi l'impatto avviene verso destra e verso il basso. La rapidità è $\sqrt{109}\,\mathrm{m/s}$. Da una sola componente si avrebbe una misura insufficiente per il modulo.

::grafico{curve="t,5-(5/9)*t^2,0,3" punti="0,5,pieno,L;3,0,pieno" etichette="3.04,0.57,I" xmin=0 xmax=3.5 ymin=0 ymax=6 nomi="x (m),y (m)" titolo="Da L a I la scia è una parabola. La gittata è 3 m."}
:::

:::esempio{titolo="Ricostruire il lancio dalle letture"}
Una biglia lanciata orizzontalmente ha $x=4\,\mathrm m$ e quota $y=15\,\mathrm m$ dopo $1\,\mathrm s$. L'ascissa iniziale è zero, l'aria è trascurabile e $g=10\,\mathrm{m/s^2}$. Dalla prima lettura si ricava $u_0=4\,\mathrm{m/s}$. In quel secondo la biglia ha perso $\dfrac{1}{2} gt^2=5\,\mathrm m$ di quota, quindi è partita da $20\,\mathrm m$. La tabella confronta le coordinate con la componente verticale nei tre istanti.

| t (s) | x (m) | y (m) | $v_y$ (m/s) |
| ---: | ---: | ---: | ---: |
| 0 | 0 | 20 | 0 |
| 1 | 4 | 15 | -10 |
| 2 | 8 | 0 | -20 |

In un secondo la posizione orizzontale cresce sempre di quattro metri. Nel primo secondo la quota scende di cinque metri e nel secondo scende di quindici. Il grafico delle velocità spiega la differenza. Le aree fra la curva di $v_y$ e l'asse dei tempi sono negative e hanno moduli diversi nei due intervalli. La curva di $v_x$ forma invece due rettangoli uguali. Al tempo di volo di due secondi corrisponde la gittata di otto metri. Una posizione calcolata dopo quell'istante prolungherebbe il modello oltre il contatto col pavimento.

Le aree per la componente verticale si controllano con le velocità medie di ciascun secondo. Nel primo la media vale $\dfrac{0-10}{2}\,\mathrm{m/s}=-5\,\mathrm{m/s}$. Nel secondo vale $\dfrac{-10-20}{2}\,\mathrm{m/s}=-15\,\mathrm{m/s}$. Moltiplicando per la durata di un secondo si ritrovano le perdite di quota.

::grafico{curve="t,4,0,2;t,-10*t,0,2" punti="0,0,pieno;1,-10,pieno;2,-20,pieno" segmenti="1,0,1,-10;2,0,2,-20" xmin=0 xmax=2.12 ymin=-24 ymax=8 nomi="t (s),v (m/s)" legenda="v_x;v_y" titolo="La componente orizzontale resta a 4 m/s. Ogni secondo quella verticale cala di 10 m/s."}
:::

## Periodo e frequenza

:::definizione{#periodo titolo="Contare i giri"}
Nel moto circolare uniforme il **periodo** $T$ è la durata di un giro. La **frequenza** $f$ conta i giri per unità di tempo. Se il moto ha frequenza costante e si osservano $N$ giri in $\Delta t$, valgono
$$
f=\frac{N}{\Delta t},\qquad T=\frac{\Delta t}{N},\qquad fT=1.
$$
La frequenza si misura in hertz, con $\mathrm{Hz}=\mathrm{s^{-1}}$. Se la ruota compie $24$ giri in $6\,\mathrm{s}$, allora $f=4\,\mathrm{Hz}$ e $T=0{,}25\,\mathrm{s}$. Un dato in giri al minuto va diviso per $60$ per passare ai giri al secondo. Per esempio, $120$ giri al minuto corrispondono a $2\,\mathrm{Hz}$. Se la frequenza aumenta, il periodo diminuisce perché il singolo giro richiede meno tempo.
:::

:::esempio{titolo="La coordinata orizzontale ritorna dopo un periodo"}
Il punto sul bordo di un disco di raggio $2\,\mathrm m$ parte dalla posizione più a destra e ruota uniformemente in senso antiorario, compiendo un giro ogni $4\,\mathrm{s}$. Un quarto di periodo dopo, il punto è sul semiasse verticale positivo. La coordinata orizzontale, inizialmente $2\,\mathrm{m}$, vale zero a $1\,\mathrm{s}$ e $-2\,\mathrm{m}$ a $2\,\mathrm{s}$. Ritorna al valore iniziale a $4\,\mathrm{s}$.

::grafico{f="2*cos(PI*x/2)" punti="0,2,pieno,A;1,0,pieno,B;2,-2,pieno,C;4,2,pieno,D" xmin=0 xmax=4.3 ymin=-2.6 ymax=2.6 nomi="t (s),x (m)" titolo="La proiezione orizzontale si ripete dopo 4 s."}
:::

:::esempio{titolo="Due passaggi sulla stessa verticale"}
Sul disco del grafico precedente, a $1\,\mathrm s$ il punto occupa la posizione $(0;2)\,\mathrm m$. A $3\,\mathrm s$ è a $(0;-2)\,\mathrm m$. Il sensore orizzontale in entrambi i casi legge zero, ma nel primo passaggio la proiezione decresce mentre nel secondo cresce. Le due letture hanno la stessa ascissa e rappresentano due fasi diverse della rotazione.

Per determinare il periodo si confrontano due fasi omologhe. Si può osservare il passaggio per la stessa posizione nella rotazione, oppure scegliere due massimi consecutivi della proiezione orizzontale. Per un sensore che registra gli zeri della proiezione, si selezionano due passaggi con lo stesso verso di attraversamento. In questo esempio la distanza temporale fra due zeri consecutivi è di due secondi, mentre il periodo è di quattro. Il verso separa le due metà del ciclo.

::grafico{curve="2*cos(t),2*sin(t),0,6.2831853" punti="2,0,pieno;0,2,pieno;0,-2,pieno" etichette="1.31,0.36,0 s;0.23,2.2,1 s;0.23,-2.3,3 s" xmin=-2.65 xmax=2.92 ymin=-2.7 ymax=2.7 uguale=1 nomi="x (m),y (m)" titolo="Gli istanti 1 s e 3 s hanno la stessa ascissa x=0 e ordinate opposte."}
:::

## Velocità tangenziale e angolare

:::teorema{#circolare titolo="La lunghezza di un giro"}
La lunghezza di un giro a raggio $r$ è $2\pi r$. Una spazzata completa corrisponde all'angolo $2\pi$ radianti. Per un arco di lunghezza $s$, l'ampiezza in radianti vale $\dfrac{s}{r}$. Nel moto circolare uniforme, il modulo della velocità angolare è $\omega=\dfrac{2\pi}{T}=2\pi f$. La **velocità tangenziale** ha modulo
$$
v=\frac{2\pi r}{T}=\omega r.
$$
La direzione della velocità istantanea è tangente alla circonferenza, e il verso segue la rotazione. Due punti solidali allo stesso disco compiono lo stesso angolo nello stesso tempo, quindi hanno lo stesso $\omega$. Il punto più lontano dal centro ha rapidità maggiore perché il suo arco è più lungo a parità di angolo.
:::

:::esempio{titolo="Punti a distanze diverse dal centro"}
Un disco gira con $f=2\,\mathrm{Hz}$. Due segni si trovano a distanze $0{,}20\,\mathrm{m}$ e $0{,}40\,\mathrm{m}$ dal centro. Per entrambi $\omega=4\pi\,\mathrm{rad/s}$, mentre le rapidità sono $0{,}8\pi$ e $1{,}6\pi\,\mathrm{m/s}$. Il rapporto delle rapidità coincide con quello dei raggi. A frequenza fissata la dipendenza da $r$ è lineare.

::grafico{f="4*PI*x" punti="0.2,2.513274,pieno;0.4,5.026548,pieno" segmenti="0.2,0,0.2,2.513274;0.4,0,0.4,5.026548" etichette="0.185,-0.48,0,2;0.385,-0.48,0,4;0.2,2.99,A;0.4,5.51,B" xmin=0 xmax=0.5 ymin=0 ymax=7 nomi="r (m),v (m/s)" titolo="La rapidità tangenziale raddoppia passando da A a B."}
:::

:::osservazione{titolo="Verso della rotazione e lunghezza d'arco"}
Se si sceglie positivo il verso antiorario, un quarto di giro orario corrisponde a $\Delta\theta=-\dfrac{\pi}{2}\,\mathrm{rad}$. Su una ruota di raggio $0{,}60\,\mathrm m$ il punto percorre un arco lungo $0{,}60\cdot\dfrac{\pi}{2}=0{,}30\pi\,\mathrm m$. Per calcolare quella lunghezza si usa il modulo dell'angolo. Il segno conserva invece l'informazione sul verso.

Con rotazione uniforme, se il quarto di giro dura $0{,}50\,\mathrm s$, la rapidità angolare vale $\pi\,\mathrm{rad/s}$. La velocità angolare con segno è $-\pi\,\mathrm{rad/s}$ secondo la convenzione scelta. Il periodo vale $2\,\mathrm s$. Se si inverte il verso mantenendo lo stesso periodo, cambia il segno della velocità angolare mentre il punto percorre lo stesso arco in modulo e con rapidità tangenziale invariata.
:::

## Accelerazione centripeta

:::teorema{#centripeta titolo="La direzione della velocità cambia"}
Nel moto circolare uniforme la rapidità rimane costante. Tra due punti della circonferenza cambia la direzione della velocità. Per trovare la variazione si disegnano i due vettori velocità con la stessa origine: la variazione è la freccia dalla punta del primo alla punta del secondo. Quando i due punti sono molto vicini questa variazione punta quasi verso il centro. Nel calcolo istantaneo la direzione è esattamente radiale verso il centro. Il modulo dell'accelerazione centripeta è
$$
a_c=\frac{v^2}{r}=\omega^2r.
$$
Per una piccola rotazione $\Delta\theta$ il modulo della differenza delle velocità è circa $v\lvert\Delta\theta\rvert$, poiché la corda del triangolo delle velocità si avvicina all'arco. Dividendo per $\Delta t$ si ottiene circa $v\omega$. Nel limite di intervalli sempre più piccoli si ricava $v\omega=\dfrac{v^2}{r}$. La stessa relazione dice due cose diverse a seconda di quale dato si fissa. A parità di $v$, un raggio maggiore dà minore accelerazione. A parità di $\omega$, un raggio maggiore dà maggiore accelerazione.
:::

:::esempio{titolo="Velocità e accelerazione allo stesso punto"}
Un punto percorre una circonferenza di raggio $2\,\mathrm{m}$ con rapidità $4\,\mathrm{m/s}$. A destra del centro, se ruota in senso antiorario, la velocità è verso l'alto. L'accelerazione è verso sinistra, con modulo $\dfrac{4^2}{2}\,\mathrm{m/s^2}=8\,\mathrm{m/s^2}$. Le due frecce sono perpendicolari. Da un giro a quello successivo ritornano nelle stesse direzioni.

::grafico{curve="2*cos(t),2*sin(t),0,6.2831853" vettori="2,0,2,1.6,v;2,0,0.85,0,a" punti="0,0,pieno;2,0,pieno,P" xmin=-2.8 xmax=3 ymin=-2.8 ymax=2.8 uguale=1 nomi="x (m),y (m)" titolo="A destra del centro, la velocità è tangente e l'accelerazione punta verso O."}
:::

:::attenzione
La rapidità costante del moto circolare uniforme può far pensare ad accelerazione nulla. Se il vettore velocità fosse costante, avrebbe anche direzione costante e il moto sarebbe rettilineo. Nel moto circolare la direzione è tangente e cambia da punto a punto.
:::

:::esempio{titolo="Confrontare il raggio a due condizioni"}
Consideriamo il punto a $r=2\,\mathrm m$ che si muove a $v=4\,\mathrm{m/s}$. Ha $\omega=2\,\mathrm{rad/s}$ e accelerazione centripeta $8\,\mathrm{m/s^2}$. Su una seconda circonferenza di raggio $4\,\mathrm m$ si può mantenere la rapidità di partenza. L'accelerazione diventa allora $\dfrac{16}{4}\,\mathrm{m/s^2}=4\,\mathrm{m/s^2}$. La traiettoria curva meno bruscamente a parità di metri percorsi ogni secondo.

Se si mantiene invece $\omega=2\,\mathrm{rad/s}$ a raggio $4\,\mathrm m$, il punto percorre il doppio dell'arco nello stesso intervallo. Si ottiene $v=8\,\mathrm{m/s}$ e $a_c=4\cdot4\,\mathrm{m/s^2}=16\,\mathrm{m/s^2}$. Nel grafico le due relazioni passano per lo stesso punto iniziale ma hanno andamenti diversi. Prima di confrontare due valori di accelerazione occorre stabilire quale velocità resta fissata. Dalla sola variazione del raggio non si ricava il verso della variazione di $a_c$.

::grafico{f="16/x;4*x" punti="2,8,pieno;4,4,pieno;4,16,pieno" segmenti="4,4,4,16" xmin=1 xmax=5 ymin=0 ymax=21 nomi="r (m),a_c (m/s²)" legenda="\text{Rapidità fissata};\text{Velocità angolare fissata}" titolo="A raggio 4 m si ottengono 4 m/s² a rapidità fissata e 16 m/s² a velocità angolare fissata."}
:::

:::osservazione{titolo="Accelerazione media fra due fasi"}
L'accelerazione media confronta la variazione del vettore velocità con il tempo trascorso. Per un punto che parte a destra del centro e ruota in senso antiorario, dopo mezzo giro la velocità è verso il basso. Se all'inizio valeva $(0;4)\,\mathrm{m/s}$, alla fine vale $(0;-4)\,\mathrm{m/s}$. La variazione è $(0;-8)\,\mathrm{m/s}$ e si divide per la durata del mezzo giro. Dopo un giro completo la velocità torna uguale a quella iniziale. Perciò l'accelerazione media su quel giro è nulla, mentre l'accelerazione istantanea continua a puntare verso il centro.
:::
