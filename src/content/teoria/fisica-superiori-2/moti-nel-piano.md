---
titolo: Moti nel piano e moto circolare
sommario: Componenti di posizione e velocità, lancio orizzontale, frequenza, velocità angolare e accelerazione centripeta.
---

## Vettori e componenti

:::definizione{#componenti titolo="Descrivere due direzioni"}
Per descrivere un moto su un piano (un pavimento, un foglio, una parete) si scelgono due **assi perpendicolari**, cioè due rette orientate che si incontrano ad angolo retto. L'asse $x$ è di solito orizzontale e l'asse $y$ verticale. La posizione di un corpo è la coppia di numeri $(x,y)$, le sue **coordinate**. La prima si chiama ascissa e la seconda ordinata. Assi perpendicolari con la stessa unità di misura su entrambi si dicono **cartesiani ortonormali**. Su questi assi un metro sull'asse $x$ ha la stessa lunghezza di un metro sull'asse $y$.

Lo **spostamento** è il vettore che va dalla posizione iniziale alla posizione finale. Un vettore è una grandezza rappresentata da una freccia, con un modulo (la lunghezza della freccia), una direzione (la retta su cui sta) e un verso (il lato verso cui punta). Lo spostamento si indica con $\Delta\vec r$. La freccia sopra la lettera indica un vettore e la lettera greca $\Delta$ (si legge «delta») indica una variazione, cioè valore finale meno valore iniziale. Le **componenti** dello spostamento sono le variazioni delle due coordinate, $\Delta x=x_f-x_i$ e $\Delta y=y_f-y_i$, dove i pedici $f$ e $i$ indicano la posizione finale e quella iniziale. Una componente è negativa quando il corpo si muove nel verso opposto a quello dell'asse, quindi le due componenti possono avere segni diversi.

Le due componenti sono i **cateti** (i lati che formano l'angolo retto) di un triangolo rettangolo, e lo spostamento ne è l'**ipotenusa** (il lato opposto all'angolo retto). Il **modulo** dello spostamento, cioè la sua lunghezza, si calcola quindi con il teorema di Pitagora, secondo cui il quadrato dell'ipotenusa è uguale alla somma dei quadrati dei cateti. Le sbarrette verticali indicano il modulo.
$$
\lvert \Delta\vec r\rvert=\sqrt{(\Delta x)^2+(\Delta y)^2}.
$$
Se si percorrono prima $4\,\mathrm{m}$ verso est e poi $3\,\mathrm{m}$ verso nord, con l'asse $x$ verso est e l'asse $y$ verso nord, le componenti sono $\Delta x=4\,\mathrm m$ e $\Delta y=3\,\mathrm m$. Il modulo dello spostamento è $\sqrt{4^2+3^2}\,\mathrm m=\sqrt{16+9}\,\mathrm m=\sqrt{25}\,\mathrm m=5\,\mathrm{m}$. La **distanza percorsa**, cioè la lunghezza del tragitto, è invece $4+3=7\,\mathrm{m}$. Nella figura le due tappe stanno lungo gli assi, e la diagonale $\Delta\vec r$ collega direttamente i due estremi. La lunghezza del tragitto dipende dalla **traiettoria**, cioè dalla linea seguita dal corpo, mentre lo spostamento dipende soltanto dal punto di partenza e dal punto di arrivo.

Gli assi dividono il piano in quattro zone, i **quadranti**. I segni delle componenti indicano il quadrante in cui punta la freccia. Per esempio $\Delta x<0$ e $\Delta y>0$ indicano il quadrante in alto a sinistra. Nel modulo le componenti compaiono al quadrato, e il quadrato di un numero negativo è positivo, come $(-3)^2=9$. Perciò il modulo è sempre un numero positivo o nullo.

::grafico{vettori="0,0,4,0,Δx;4,0,4,3,Δy;0,0,4,3" etichette="1.8,1.68,Δr" xmin=-1 xmax=6 ymin=-1 ymax=5 uguale=1 nomi="x (m),y (m)" titolo="Le due tappe lungo gli assi misurano 7 m. La diagonale misura 5 m."}
:::

:::esempio{titolo="Leggere il verso dalla coppia di componenti"}
Anche la velocità è un vettore, con componenti $v_x$ lungo l'asse $x$ e $v_y$ lungo l'asse $y$. Il suo modulo si chiama **rapidità** e indica quanti metri al secondo percorre il corpo, qualunque sia la direzione.

Una bicicletta ha componenti $v_x=-4\,\mathrm{m/s}$ e $v_y=3\,\mathrm{m/s}$. Se $x$ cresce verso est e $y$ cresce verso nord, la componente negativa indica un moto verso ovest e quella positiva un moto verso nord, quindi la bicicletta avanza verso nord-ovest. La rapidità è
$$
\sqrt{(-4)^2+3^2}\,\mathrm{m/s}=\sqrt{16+9}\,\mathrm{m/s}=5\,\mathrm{m/s}.
$$
Con $v_x=+4\,\mathrm{m/s}$ la bicicletta andrebbe verso nord-est, e la rapidità resterebbe $5\,\mathrm{m/s}$ perché $(+4)^2=(-4)^2=16$. Perciò il modulo da solo indica la lunghezza della freccia, e il verso del vettore si ricava dai segni delle componenti.
:::

:::esempio{titolo="Dalle posizioni alla velocità media"}
Un punto passa da $A=(-2;1)\,\mathrm m$ a $B=(4;-2)\,\mathrm m$ in $3\,\mathrm s$. Nelle coppie di coordinate si usa il punto e virgola, perché la virgola serve già per i numeri decimali. Si sottraggono le coordinate di $A$ da quelle di $B$, nello stesso ordine.
$$
\Delta\vec r=\bigl(4-(-2);\,-2-1\bigr)\,\mathrm m=(6;-3)\,\mathrm m.
$$
La **velocità media** è lo spostamento diviso per la durata del moto. Si divide ciascuna componente per $3\,\mathrm s$ e si ottiene la velocità media $(2;-1)\,\mathrm{m/s}$, con modulo $\sqrt{2^2+(-1)^2}\,\mathrm{m/s}=\sqrt5\,\mathrm{m/s}\approx2{,}24\,\mathrm{m/s}$. La stessa velocità media si ottiene percorrendo prima sei metri verso destra e poi tre metri verso il basso (il percorso tratteggiato della figura), purché la durata totale sia di tre secondi, perché lo spostamento e la durata sono gli stessi.

Nel primo caso, se il tragitto è il segmento diretto da $A$ a $B$, la distanza percorsa è $\sqrt{6^2+3^2}\,\mathrm m=\sqrt{45}\,\mathrm m\approx6{,}71\,\mathrm m$. Nel secondo è $6+3=9\,\mathrm m$. La **rapidità media** è la distanza percorsa divisa per la durata, quindi per il tragitto spezzato vale $\dfrac{9}{3}\,\mathrm{m/s}=3\,\mathrm{m/s}$. Il vettore velocità media dipende soltanto dalle posizioni di partenza e di arrivo. La rapidità media dipende invece anche dalla lunghezza del tragitto effettivamente percorso.

::grafico{segmenti="-2,1,4,1;4,1,4,-2" vettori="-2,1,4,-2" punti="-2,1,pieno;4,-2,pieno" etichette="-2.45,1.42,A;4.16,-1.8,B;0.7,0.03,Δr" xmin=-3 xmax=5.2 ymin=-3 ymax=2 uguale=1 nomi="x (m),y (m)" titolo="Il percorso tratteggiato e quello diretto collegano gli stessi punti A e B."}
:::

## Composizione dei moti

:::teorema{#composizione titolo="Studiare separatamente gli assi"}
Un moto nel piano si studia come due moti rettilinei che avvengono insieme, uno lungo l'asse $x$ e uno lungo l'asse $y$. Le **leggi orarie** $x(t)$ e $y(t)$ (si leggono «$x$ di $t$» e «$y$ di $t$») danno le due coordinate in funzione del tempo $t$. Lo spostamento lungo l'asse $x$ si ricava dai soli dati lungo $x$, e lo spostamento lungo $y$ dai soli dati lungo $y$. Le due coordinate si valutano poi allo **stesso istante**, perché insieme descrivono una sola posizione del corpo.

Se le componenti della velocità sono costanti, lo spostamento lungo ciascun asse è la componente della velocità per la durata, come nel moto rettilineo uniforme, cioè il moto in linea retta con velocità costante. Per esempio, con $v_x=3\,\mathrm{m/s}$ e $v_y=-2\,\mathrm{m/s}$, dopo $4\,\mathrm{s}$ si ha
$$
\Delta x=3\cdot4\,\mathrm m=+12\,\mathrm m,\qquad \Delta y=(-2)\cdot4\,\mathrm m=-8\,\mathrm m.
$$
Le due quantità si riuniscono poi nel vettore spostamento $(12;-8)\,\mathrm m$.
:::

:::esempio{titolo="Stessa durata, scale diverse"}
Un corpo ha leggi orarie $x=2+3t$ e $y=6-t^2$ in unità SI. SI è la sigla del Sistema Internazionale di unità di misura, quindi le coordinate sono in metri e il tempo in secondi. Dopo $2\,\mathrm{s}$ le coordinate valgono $x=2+3\cdot2=8$ e $y=6-2^2=2$, quindi il corpo si trova in $(8,2)$, in metri.

Il grafico di $x$ in funzione del tempo è una retta crescente con **pendenza** $3\,\mathrm{m/s}$. La pendenza è l'aumento della grandezza sull'asse verticale per ogni unità sull'asse orizzontale, quindi qui $x$ cresce di $3\,\mathrm m$ ogni secondo. Il grafico di $y$ in funzione del tempo è una parabola, perché $y$ contiene $t^2$. Nella figura le due curve hanno lo stesso asse dei tempi. Il punto $A$ della retta e il punto $B$ della parabola si leggono entrambi a $t=2\,\mathrm s$ e danno la coppia $(8,2)$. Il disegno nel piano $xy$, ottenuto variando l'istante, è ancora un altro grafico. Esso mostra i punti dello spazio attraversati dal corpo, con entrambi gli assi misurati in metri.

::grafico{f="2+3*x;6-x^2" punti="2,8,pieno,A;2,2,pieno,B" xmin=0 xmax=3 ymin=-4 ymax=12 nomi="t (s),componenti (m)" legenda="x(t);y(t)" titolo="A e B sono componenti lette a 2 s sullo stesso asse dei tempi."}
:::

:::esempio{titolo="Due traiettorie si incrociano"}
Due sensori seguono i punti $A$ e $B$ nello stesso riferimento e con lo stesso orologio, con $t\geq0$. Le posizioni sono $A(t)=(t;2t)$ e $B(t)=(4-t;3)$, con coordinate in metri e tempi in secondi. Per $A$ l'ordinata è sempre il doppio dell'ascissa, quindi la sua traiettoria è sulla retta $y=2x$. Per $B$ l'ordinata vale sempre $3$, quindi la sua traiettoria è sulla retta orizzontale $y=3$. Sulla prima retta il punto con $y=3$ ha $x=1{,}5$, perciò entrambe le traiettorie passano dal punto $P=(1{,}5;3)\,\mathrm m$.

Per conoscere l'istante di arrivo in $P$ si torna alle due leggi orarie. Il punto $A$ ha ascissa $1{,}5\,\mathrm m$ a $t=1{,}5\,\mathrm s$. Il punto $B$ ha la stessa ascissa quando $4-t=1{,}5$, cioè a $t=2{,}5\,\mathrm s$. L'incrocio delle traiettorie indica quindi soltanto un luogo per cui passano entrambi i punti, anche in istanti diversi. I due punti si **incontrano** se si trovano nello stesso luogo nello stesso istante, cioè se esiste un valore di $t$ che soddisfa insieme le due condizioni
$$
\begin{cases}
x_A(t)=x_B(t),\\
y_A(t)=y_B(t).
\end{cases}
$$
Qui le ascisse sono uguali quando $t=4-t$, cioè $2t=4$ e $t=2\,\mathrm s$. Le ordinate sono uguali quando $2t=3$, cioè $t=1{,}5\,\mathrm s$. I due istanti sono diversi, quindi nessun istante soddisfa entrambe le condizioni e i punti non si incontrano. Con la legge $B(t)=(3-t;3)$ le ascisse sarebbero uguali quando $t=3-t$, cioè a $t=1{,}5\,\mathrm s$, lo stesso istante delle ordinate. In quel caso i due punti si incontrerebbero in $P$. La traiettoria di $B$ resta la retta $y=3$, perciò cambiare la posizione iniziale di $B$ modifica soltanto l'orario di passaggio per $P$.

::grafico{vettori="0,0,2.4,4.8;4,3,0.3,3" punti="0,0,pieno;4,3,pieno;1.5,3,pieno" etichette="0.27,0.87,A;3.64,3.34,B;1.66,2.73,P" xmin=-0.6 xmax=4.6 ymin=-0.6 ymax=5.5 uguale=1 nomi="x (m),y (m)" titolo="P appartiene a entrambe le traiettorie. A transita a 1,5 s e B a 2,5 s."}
:::

## Lancio orizzontale

:::teorema{#lancio titolo="Dal bordo di un tavolo"}
Una pallina lascia un bordo di altezza $h$ con velocità iniziale orizzontale di modulo $u_0>0$ (si legge «u con zero»). Si sceglie l'asse $x$ nel verso di lancio e l'asse $y$ verso l'alto, con quota zero al suolo. La **quota** è l'altezza della pallina sopra il suolo. Trascurando la resistenza dell'aria, sulla pallina agisce soltanto il peso, che è verticale. L'accelerazione è la variazione della velocità in ogni secondo. Perciò l'accelerazione orizzontale è zero e quella verticale è l'accelerazione di gravità $g$, circa $9{,}81\,\mathrm{m/s^2}$, rivolta verso il basso. Poiché l'asse $y$ punta verso l'alto, la componente verticale dell'accelerazione è $-g$.

Lungo $x$ il moto è quindi rettilineo uniforme, con velocità costante $u_0$. Lungo $y$ il moto è uniformemente accelerato, cioè la velocità cambia della stessa quantità ogni secondo, e parte con velocità verticale nulla, perché il lancio è orizzontale. Le leggi orarie sono
$$
x(t)=u_0t,\quad y(t)=h-\frac12gt^2,\qquad
v_x(t)=u_0,\quad v_y(t)=-gt.
$$
L'urto con il suolo avviene quando $y=0$. Si risolve l'equazione $h-\dfrac12gt^2=0$ un passaggio alla volta.
$$
\frac12gt^2=h,\qquad t^2=\frac{2h}{g},\qquad t=\sqrt{\frac{2h}{g}}.
$$
Delle due soluzioni si prende la radice positiva, perché il tempo si conta dal lancio. Questa è la durata del volo $t_f=\sqrt{\dfrac{2h}{g}}$. La **gittata** è lo spostamento orizzontale fino all'impatto e vale $R=u_0t_f$. La velocità orizzontale influisce sulla gittata, mentre la durata del volo dipende soltanto da $h$ e $g$. Se aumenta il modulo di $u_0$, la pallina resta in aria per lo stesso tempo e percorre più spazio orizzontale in ciascun secondo.
:::

:::osservazione{#traiettoria titolo="La parabola nello spazio"}
La forma della traiettoria si trova eliminando il tempo dalle leggi orarie. Dalla legge orizzontale si ricava $t=\dfrac{x}{u_0}$, e lo si sostituisce nella legge verticale.
$$
y=h-\frac12g\left(\frac{x}{u_0}\right)^2=h-\frac{g}{2u_0^2}x^2.
$$
L'ascissa è ora una coordinata spaziale in metri, e la curva è una parabola. La curva si arresta al punto d'impatto, perché dopo l'urto le leggi orarie del volo non valgono più. Se dalla stessa quota e nello stesso istante si lascia cadere una pallina e se ne lancia un'altra orizzontalmente, entrambe partono con velocità verticale nulla. Hanno quindi la stessa coordinata $y(t)$ finché entrambe sono in volo. La seconda percorre anche una distanza orizzontale. Se le superfici d'arrivo sono alla stessa quota, le due palline le raggiungono nello stesso istante.
:::

:::esempio{titolo="Posizione all'impatto e direzione della velocità"}
Da $h=5\,\mathrm{m}$ si lancia una pallina a $3\,\mathrm{m/s}$, con $g=10\,\mathrm{m/s^2}$. Il tempo di volo è $t_f=\sqrt{\dfrac{2\cdot5}{10}}\,\mathrm s=\sqrt1\,\mathrm s=1\,\mathrm{s}$ e l'ascissa d'impatto è $x=3\cdot1\,\mathrm m=3\,\mathrm{m}$. In quell'istante $v_x=3\,\mathrm{m/s}$ e $v_y=-10\cdot1\,\mathrm{m/s}=-10\,\mathrm{m/s}$, quindi l'impatto avviene verso destra e verso il basso. La rapidità all'impatto è
$$
\sqrt{3^2+(-10)^2}\,\mathrm{m/s}=\sqrt{9+100}\,\mathrm{m/s}=\sqrt{109}\,\mathrm{m/s}\approx10{,}4\,\mathrm{m/s}.
$$
Il calcolo usa entrambe le componenti, perché una sola componente è insufficiente per conoscere il modulo. Nella figura la traiettoria va dal punto di lancio $L$, a quota $5\,\mathrm m$, al punto d'impatto $I$, a $3\,\mathrm m$ dalla verticale di lancio.

::grafico{curve="t,5-(5/9)*t^2,0,3" punti="0,5,pieno,L;3,0,pieno" etichette="3.04,0.57,I" xmin=0 xmax=3.5 ymin=0 ymax=6 nomi="x (m),y (m)" titolo="Da L a I la scia è una parabola. La gittata è 3 m."}
:::

:::esempio{titolo="Ricostruire il lancio dalle letture"}
Una biglia lanciata orizzontalmente ha $x=4\,\mathrm m$ e quota $y=15\,\mathrm m$ dopo $1\,\mathrm s$. L'ascissa iniziale è zero, l'aria è trascurabile e $g=10\,\mathrm{m/s^2}$. Dalla legge $x=u_0t$ si ricava $u_0=\dfrac{4\,\mathrm m}{1\,\mathrm s}=4\,\mathrm{m/s}$. In quel secondo la biglia ha perso $\dfrac{1}{2} gt^2=\dfrac12\cdot10\cdot1^2\,\mathrm m=5\,\mathrm m$ di quota, quindi è partita da $15+5=20\,\mathrm m$. Il tempo di volo è $\sqrt{\dfrac{2\cdot20}{10}}\,\mathrm s=\sqrt4\,\mathrm s=2\,\mathrm s$. La tabella confronta le coordinate con la componente verticale nei tre istanti.

| t (s) | x (m) | y (m) | $v_y$ (m/s) |
| ---: | ---: | ---: | ---: |
| 0 | 0 | 20 | 0 |
| 1 | 4 | 15 | -10 |
| 2 | 8 | 0 | -20 |

In un secondo la posizione orizzontale cresce sempre di quattro metri. Nel primo secondo la quota scende di cinque metri e nel secondo scende di quindici. Il grafico delle velocità spiega la differenza. In un grafico velocità-tempo l'area compresa fra la curva e l'asse dei tempi è uguale allo spostamento, e si conta con il segno meno quando la velocità è negativa. La curva di $v_x$ forma due rettangoli uguali, di area $4\cdot1=4\,\mathrm m$ ciascuno. Le aree fra la curva di $v_y$ e l'asse dei tempi sono invece negative e hanno moduli diversi nei due intervalli. Al tempo di volo di due secondi corrisponde la gittata di $4\cdot2=8\,\mathrm m$. Dopo $2\,\mathrm s$ la biglia è a terra, quindi le leggi orarie del volo valgono soltanto fino a quell'istante.

Le aree per la componente verticale si controllano con le velocità medie di ciascun secondo. In un moto uniformemente accelerato la velocità media in un intervallo è la media dei valori all'inizio e alla fine. Nel primo secondo la media vale $\dfrac{0-10}{2}\,\mathrm{m/s}=-5\,\mathrm{m/s}$. Nel secondo vale $\dfrac{-10-20}{2}\,\mathrm{m/s}=-15\,\mathrm{m/s}$. Moltiplicando per la durata di un secondo si ritrovano le perdite di quota di $5\,\mathrm m$ e di $15\,\mathrm m$.

::grafico{curve="t,4,0,2;t,-10*t,0,2" punti="0,0,pieno;1,-10,pieno;2,-20,pieno" segmenti="1,0,1,-10;2,0,2,-20" xmin=0 xmax=2.12 ymin=-24 ymax=8 nomi="t (s),v (m/s)" legenda="v_x;v_y" titolo="La componente orizzontale resta a 4 m/s. Ogni secondo quella verticale cala di 10 m/s."}
:::

## Periodo e frequenza

:::definizione{#periodo titolo="Contare i giri"}
Un corpo è in **moto circolare uniforme** quando percorre una circonferenza con rapidità costante, come un punto sul bordo di una ruota che gira sempre allo stesso modo. Il **periodo** $T$ è la durata di un giro. La **frequenza** $f$ è il numero di giri compiuti in un secondo. Se il moto ha frequenza costante e si osservano $N$ giri in un intervallo di tempo $\Delta t$, valgono
$$
f=\frac{N}{\Delta t},\qquad T=\frac{\Delta t}{N},\qquad fT=1.
$$
L'ultima uguaglianza segue dalle prime due, perché $\dfrac{N}{\Delta t}\cdot\dfrac{\Delta t}{N}=1$. Perciò $T=\dfrac1f$, cioè il periodo è il reciproco della frequenza. La frequenza si misura in hertz (Hz), con $\mathrm{Hz}=\mathrm{s^{-1}}$. Il simbolo $\mathrm{s^{-1}}$ significa $\dfrac{1}{\mathrm s}$, quindi $1\,\mathrm{Hz}$ è un giro al secondo. Se la ruota compie $24$ giri in $6\,\mathrm{s}$, allora $f=\dfrac{24}{6}\,\mathrm{Hz}=4\,\mathrm{Hz}$ e $T=\dfrac{6}{24}\,\mathrm{s}=0{,}25\,\mathrm{s}$. Un dato in giri al minuto si divide per $60$, perché un minuto contiene $60$ secondi. Per esempio, $120$ giri al minuto corrispondono a $\dfrac{120}{60}\,\mathrm{Hz}=2\,\mathrm{Hz}$. Se la frequenza aumenta, il periodo diminuisce perché il singolo giro richiede meno tempo.
:::

:::esempio{titolo="La coordinata orizzontale ritorna dopo un periodo"}
Il punto sul bordo di un disco di raggio $2\,\mathrm m$ parte dalla posizione più a destra e ruota uniformemente in senso antiorario (il verso opposto a quello delle lancette dell'orologio), compiendo un giro ogni $4\,\mathrm{s}$. Il centro del disco è l'origine degli assi. La coordinata orizzontale $x$ del punto è la sua **proiezione** sull'asse $x$, cioè il punto dell'asse che sta sulla sua stessa verticale.

Dopo un quarto di periodo, cioè dopo $1\,\mathrm s$, il punto ha fatto un quarto di giro ed è in cima al disco, sul semiasse verticale positivo. La coordinata orizzontale, inizialmente $2\,\mathrm{m}$, vale quindi zero a $1\,\mathrm{s}$. A $2\,\mathrm{s}$ il punto ha fatto mezzo giro ed è nella posizione più a sinistra, con $x=-2\,\mathrm{m}$. A $4\,\mathrm{s}$ ha completato il giro e $x$ ritorna al valore iniziale. Nel grafico i punti $A$, $B$, $C$ e $D$ sono le letture a $0$, $1$, $2$ e $4\,\mathrm s$.

::grafico{f="2*cos(PI*x/2)" punti="0,2,pieno,A;1,0,pieno,B;2,-2,pieno,C;4,2,pieno,D" xmin=0 xmax=4.3 ymin=-2.6 ymax=2.6 nomi="t (s),x (m)" titolo="La proiezione orizzontale si ripete dopo 4 s."}
:::

:::esempio{titolo="Due passaggi sulla stessa verticale"}
Sul disco del grafico precedente, a $1\,\mathrm s$ il punto occupa la posizione $(0;2)\,\mathrm m$. A $3\,\mathrm s$, dopo tre quarti di giro, è a $(0;-2)\,\mathrm m$. Un sensore che legge la proiezione orizzontale segna zero in entrambi i casi. Nel primo passaggio però la proiezione sta diminuendo, perché il punto si sposta verso sinistra, mentre nel secondo sta aumentando. Le due letture hanno la stessa ascissa e corrispondono a due posizioni diverse sulla circonferenza, mostrate nella figura.

Il periodo è il tempo dopo cui il punto torna nella stessa posizione con lo stesso verso di moto. Per misurarlo si può osservare il passaggio per la stessa posizione nella rotazione, oppure scegliere due massimi consecutivi della proiezione orizzontale, qui a $0\,\mathrm s$ e a $4\,\mathrm s$. Per un sensore che registra soltanto gli istanti in cui la proiezione vale zero, si scelgono due passaggi in cui la proiezione cambia nello stesso verso, entrambi in diminuzione o entrambi in aumento. In questo esempio fra due zeri consecutivi passano due secondi, cioè mezzo periodo, mentre il periodo è di quattro. Il verso del passaggio distingue perciò le due metà del giro.

::grafico{curve="2*cos(t),2*sin(t),0,6.2831853" punti="2,0,pieno;0,2,pieno;0,-2,pieno" etichette="1.31,0.36,0 s;0.23,2.2,1 s;0.23,-2.3,3 s" xmin=-2.65 xmax=2.92 ymin=-2.7 ymax=2.7 uguale=1 nomi="x (m),y (m)" titolo="Gli istanti 1 s e 3 s hanno la stessa ascissa x=0 e ordinate opposte."}
:::

## Velocità tangenziale e angolare

:::teorema{#circolare titolo="La lunghezza di un giro"}
La lunghezza di un giro a raggio $r$ è la lunghezza della circonferenza, $2\pi r$, dove $\pi$ (si legge «pi greco») vale circa $3{,}14$. Gli angoli si misurano qui in **radianti** (simbolo $\mathrm{rad}$). Un angolo al centro di $1\,\mathrm{rad}$ corrisponde a un arco lungo quanto il raggio. Per un arco di lunghezza $s$, quindi, l'ampiezza dell'angolo in radianti vale $\dfrac{s}{r}$. Per un giro completo l'arco è $2\pi r$ e l'angolo vale $\dfrac{2\pi r}{r}=2\pi$ radianti, cioè $360^\circ$.

La **velocità angolare** $\omega$ (lettera greca, si legge «omega») è l'angolo spazzato dal raggio in un secondo e si misura in $\mathrm{rad/s}$. Nel moto circolare uniforme il raggio spazza $2\pi$ radianti in un periodo, quindi il modulo della velocità angolare è $\omega=\dfrac{2\pi}{T}$. Poiché $\dfrac1T=f$, vale anche $\omega=2\pi f$. La **velocità tangenziale** è la velocità del punto lungo la circonferenza. Il suo modulo è la lunghezza di un giro divisa per la durata di un giro, e poiché $\dfrac{2\pi}{T}=\omega$ si ha
$$
v=\frac{2\pi r}{T}=\omega r.
$$
La direzione della velocità istantanea è tangente alla circonferenza, e il verso segue la rotazione. La **tangente** in un punto è la retta che tocca la circonferenza soltanto in quel punto ed è perpendicolare al raggio. Due punti solidali allo stesso disco, cioè fissati su di esso, compiono lo stesso angolo nello stesso tempo, quindi hanno lo stesso $\omega$. Il punto più lontano dal centro ha rapidità maggiore perché il suo arco è più lungo a parità di angolo.
:::

:::esempio{titolo="Punti a distanze diverse dal centro"}
Un disco gira con $f=2\,\mathrm{Hz}$. Due segni si trovano a distanze $0{,}20\,\mathrm{m}$ e $0{,}40\,\mathrm{m}$ dal centro. Per entrambi $\omega=2\pi\cdot2\,\mathrm{rad/s}=4\pi\,\mathrm{rad/s}$. Le rapidità sono
$$
v_A=4\pi\cdot0{,}20\,\mathrm{m/s}=0{,}8\pi\,\mathrm{m/s},\qquad v_B=4\pi\cdot0{,}40\,\mathrm{m/s}=1{,}6\pi\,\mathrm{m/s},
$$
cioè circa $2{,}51\,\mathrm{m/s}$ e $5{,}03\,\mathrm{m/s}$. Il rapporto delle rapidità coincide con quello dei raggi, perché $\dfrac{1{,}6\pi}{0{,}8\pi}=2$ e $\dfrac{0{,}40}{0{,}20}=2$. A frequenza fissata la rapidità è quindi direttamente proporzionale al raggio, cioè raddoppia quando il raggio raddoppia, e il suo grafico in funzione di $r$ è una retta che passa per l'origine, come nella figura.

::grafico{f="4*PI*x" punti="0.2,2.513274,pieno;0.4,5.026548,pieno" segmenti="0.2,0,0.2,2.513274;0.4,0,0.4,5.026548" etichette="0.185,-0.48,0,2;0.385,-0.48,0,4;0.2,2.99,A;0.4,5.51,B" xmin=0 xmax=0.5 ymin=0 ymax=7 nomi="r (m),v (m/s)" titolo="La rapidità tangenziale raddoppia passando da A a B."}
:::

:::osservazione{titolo="Verso della rotazione e lunghezza d'arco"}
Un angolo di rotazione si indica con $\Delta\theta$ ($\theta$ è la lettera greca «theta»). Se si sceglie positivo il verso antiorario, un quarto di giro orario corrisponde a $\Delta\theta=-\dfrac{\pi}{2}\,\mathrm{rad}$, perché un quarto di $2\pi$ è $\dfrac{\pi}{2}$. Su una ruota di raggio $0{,}60\,\mathrm m$ il punto percorre un arco lungo $0{,}60\cdot\dfrac{\pi}{2}\,\mathrm m=0{,}30\pi\,\mathrm m\approx0{,}94\,\mathrm m$. Per calcolare quella lunghezza si usa il modulo dell'angolo. Il segno conserva invece l'informazione sul verso.

Con rotazione uniforme, se il quarto di giro dura $0{,}50\,\mathrm s$, la rapidità angolare, cioè il modulo della velocità angolare, vale $\dfrac{\pi}{2}\cdot\dfrac{1}{0{,}50}\,\mathrm{rad/s}=\pi\,\mathrm{rad/s}$. La velocità angolare con segno è $-\pi\,\mathrm{rad/s}$ secondo la convenzione scelta, perché la rotazione è oraria. Un giro completo dura quattro quarti di giro, quindi il periodo vale $4\cdot0{,}50\,\mathrm s=2\,\mathrm s$. Se si inverte il verso mantenendo lo stesso periodo, cambia il segno della velocità angolare, mentre il punto percorre lo stesso arco in modulo e con la stessa rapidità tangenziale.
:::

## Accelerazione centripeta

:::teorema{#centripeta titolo="La direzione della velocità cambia"}
L'**accelerazione** è la variazione del vettore velocità divisa per il tempo in cui avviene. Il vettore velocità cambia quando cambia il suo modulo, ma anche quando cambia soltanto la sua direzione. Nel moto circolare uniforme la rapidità rimane costante, mentre tra due punti della circonferenza cambia la direzione della velocità, che è sempre tangente. Per trovare la variazione si disegnano i due vettori velocità con la stessa origine, e la variazione è la freccia che va dalla punta del primo alla punta del secondo. Quando i due punti sono molto vicini, questa freccia punta quasi verso il centro della circonferenza. Per l'accelerazione in un istante la direzione è esattamente **radiale**, cioè lungo il raggio, e il verso è verso il centro. Per questo si chiama **accelerazione centripeta** (che punta al centro) e si indica con $a_c$. Il suo modulo è
$$
a_c=\frac{v^2}{r}=\omega^2r.
$$
La formula si ottiene così. In un piccolo intervallo $\Delta t$ il raggio ruota di un angolo $\Delta\theta$. Le due velocità sono perpendicolari ai due raggi, quindi anche fra loro formano l'angolo $\Delta\theta$. I due vettori velocità, entrambi lunghi $v$, sono i lati di un triangolo con la stessa origine, e il terzo lato è la variazione della velocità. Quando l'angolo è piccolo, il terzo lato è quasi uguale all'arco di raggio $v$ e ampiezza $\lvert\Delta\theta\rvert$, quindi il modulo della variazione della velocità è circa $v\lvert\Delta\theta\rvert$. Dividendo per $\Delta t$ si ottiene circa $v\omega$, perché $\dfrac{\lvert\Delta\theta\rvert}{\Delta t}=\omega$. Prendendo intervalli sempre più piccoli l'approssimazione diventa esatta, e si ricava $a_c=v\omega$. Poiché $\omega=\dfrac{v}{r}$, si ha $v\omega=\dfrac{v^2}{r}$. Poiché $v=\omega r$, si ha anche $v\omega=\omega^2r$.

La stessa relazione dice due cose diverse a seconda di quale dato si tiene fisso. A parità di $v$, un raggio maggiore dà minore accelerazione, perché $r$ è al denominatore di $\dfrac{v^2}{r}$. A parità di $\omega$, un raggio maggiore dà maggiore accelerazione, perché $r$ moltiplica $\omega^2$.
:::

:::esempio{titolo="Velocità e accelerazione allo stesso punto"}
Un punto percorre una circonferenza di raggio $2\,\mathrm{m}$ con rapidità $4\,\mathrm{m/s}$. Nel punto $P$ a destra del centro $O$, se il punto ruota in senso antiorario, la velocità è tangente e rivolta verso l'alto. L'accelerazione punta verso il centro, cioè verso sinistra, con modulo $\dfrac{4^2}{2}\,\mathrm{m/s^2}=\dfrac{16}{2}\,\mathrm{m/s^2}=8\,\mathrm{m/s^2}$. Le due frecce della figura sono perpendicolari, perché la tangente è perpendicolare al raggio. Da un giro a quello successivo ritornano nelle stesse direzioni.

::grafico{curve="2*cos(t),2*sin(t),0,6.2831853" vettori="2,0,2,1.6,v;2,0,0.85,0,a" punti="0,0,pieno;2,0,pieno,P" xmin=-2.8 xmax=3 ymin=-2.8 ymax=2.8 uguale=1 nomi="x (m),y (m)" titolo="A destra del centro, la velocità è tangente e l'accelerazione punta verso O."}
:::

:::attenzione
La rapidità costante del moto circolare uniforme può far pensare ad accelerazione nulla. Se il vettore velocità fosse costante, avrebbe anche direzione costante e il moto sarebbe rettilineo. Nel moto circolare la direzione della velocità è tangente e cambia da punto a punto, quindi l'accelerazione è diversa da zero. Per esempio, a $2\,\mathrm{m}$ dal centro e a $4\,\mathrm{m/s}$ vale $8\,\mathrm{m/s^2}$.
:::

:::esempio{titolo="Confrontare il raggio a due condizioni"}
Si considera il punto a $r=2\,\mathrm m$ che si muove a $v=4\,\mathrm{m/s}$. La sua velocità angolare è $\omega=\dfrac{v}{r}=\dfrac{4}{2}\,\mathrm{rad/s}=2\,\mathrm{rad/s}$ e la sua accelerazione centripeta è $8\,\mathrm{m/s^2}$. Su una seconda circonferenza di raggio $4\,\mathrm m$ si può mantenere la rapidità di partenza. L'accelerazione diventa allora $\dfrac{4^2}{4}\,\mathrm{m/s^2}=\dfrac{16}{4}\,\mathrm{m/s^2}=4\,\mathrm{m/s^2}$. La traiettoria curva meno bruscamente a parità di metri percorsi ogni secondo.

Se si mantiene invece $\omega=2\,\mathrm{rad/s}$ a raggio $4\,\mathrm m$, il punto percorre il doppio dell'arco nello stesso intervallo. Si ottiene $v=\omega r=2\cdot4\,\mathrm{m/s}=8\,\mathrm{m/s}$ e $a_c=\omega^2r=4\cdot4\,\mathrm{m/s^2}=16\,\mathrm{m/s^2}$. Nel grafico la curva $a_c=\dfrac{16}{r}$ (rapidità fissata a $4\,\mathrm{m/s}$) e la retta $a_c=4r$ (velocità angolare fissata a $2\,\mathrm{rad/s}$) passano per lo stesso punto iniziale, $r=2\,\mathrm m$ e $a_c=8\,\mathrm{m/s^2}$, ma hanno andamenti diversi. Perciò, per stabilire se $a_c$ aumenta o diminuisce quando cambia il raggio, occorre sapere quale fra $v$ e $\omega$ resta fissata.

::grafico{f="16/x;4*x" punti="2,8,pieno;4,4,pieno;4,16,pieno" segmenti="4,4,4,16" xmin=1 xmax=5 ymin=0 ymax=21 nomi="r (m),a_c (m/s²)" legenda="\text{Rapidità fissata};\text{Velocità angolare fissata}" titolo="A raggio 4 m si ottengono 4 m/s² a rapidità fissata e 16 m/s² a velocità angolare fissata."}
:::

:::osservazione{titolo="Accelerazione media fra due fasi"}
L'**accelerazione media** è la variazione del vettore velocità divisa per il tempo trascorso. Per un punto che parte a destra del centro e ruota in senso antiorario, dopo mezzo giro il punto è a sinistra del centro e la velocità è verso il basso. Se all'inizio valeva $(0;4)\,\mathrm{m/s}$, alla fine vale $(0;-4)\,\mathrm{m/s}$. La variazione è $(0;-4-4)\,\mathrm{m/s}=(0;-8)\,\mathrm{m/s}$, e si divide per la durata del mezzo giro. Dopo un giro completo la velocità torna uguale a quella iniziale e la variazione è $(0;0)$. Perciò l'accelerazione media su quel giro è nulla, mentre l'accelerazione istantanea continua a puntare verso il centro.
:::
