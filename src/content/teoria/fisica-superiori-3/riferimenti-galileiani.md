---
titolo: "Sistemi di riferimento e relatività galileiana"
sommario: "Posizioni, velocità e accelerazioni relative. Inseguimenti, navigazione con corrente e bilancio delle forze in una cabina accelerata."
---

## Posizione relativa

:::definizione{#posizioni-relative titolo="Due osservatori dello stesso moto"}
Un **sistema di riferimento** associa alle posizioni un'origine e degli assi orientati e agli eventi un istante segnato da un orologio. Si può scegliere come riferimento $S$ la stazione e come riferimento $S'$ il treno. Per descrivere un punto $P$ dall'interno del vagone si misura la sua posizione a partire dalla porta scelta come origine $O'$. Per descrivere lo stesso punto dalla stazione si misura a partire da un segnale fisso $O$. Un passeggero seduto a due metri da $O'$ ha coordinata costante in $S'$. Mentre il treno avanza, la sua coordinata in $S$ aumenta insieme a quella della porta.

Si scelgono assi paralleli e orientati nello stesso verso. Chiamiamo $X(t)$ la coordinata di $O'$ in $S$ e $x'(t)$ la coordinata di $P$ in $S'$. Per arrivare da $O$ a $P$ si può andare da $O$ a $O'$, poi da $O'$ a $P$. Se le due misure sono riferite allo stesso istante,
$$
x=X(t)+x', \qquad x'=x-X(t).
$$
Con $X=15\,\mathrm m$ e $x'=2\,\mathrm m$ risulta $x=17\,\mathrm m$. Un punto con $x'=-2\,\mathrm m$ si trova invece due metri dietro la porta, alla coordinata $x=13\,\mathrm m$. Il segno di $x'$ indica il lato dell'origine mobile sul quale si trova il punto.
:::

::grafico{f="5*x;5*x+2" xmin=0 xmax=4 ymin=0 ymax=23 nomi="t (s),x (m)" punti="3,15,pieno;3,17,pieno" segmenti="3,15,3,17" etichette="2.78,14.25,O′;3.11,18.15,P" legenda="\text{origine mobile};\text{passeggero}" titolo="Lo scarto verticale fra le due rette allo stesso istante dà la coordinata del passeggero nel vagone"}

:::esempio{#origine-e-orologio titolo="Origini separate all’istante iniziale"}
Con velocità costante $u$ lungo $x$, vale $X(t)=X_0+ut$. $X_0$ si legge all'istante scelto come zero. Se gli orologi classici partono dallo stesso istante, $t'=t$. Nelle direzioni in cui l'origine mobile non si sposta, le coordinate coincidono quando le origini hanno lo stesso valore iniziale su quegli assi.

Se le letture iniziali degli orologi differiscono di $\tau$, si ha $t'=t+\tau$. L'intervallo $\Delta t$ rimane lo stesso. Prima di usare una legge oraria si esprime la lettura nell'orologio con cui sono stati dati l'intercetta e gli altri parametri.

La porta è inizialmente a $X_0=9\,\mathrm m$ e procede a $u=3\,\mathrm{m/s}$. Un segnale fisso si trova a $30\,\mathrm m$. Dopo $4\,\mathrm s$ il passeggero misura $x'=30-(9+3\cdot4)=9\,\mathrm m$ per il segnale. Il segnale passa per l'origine $O'$ quando $30=9+3t$, quindi dopo $7\,\mathrm s$. Prima di quell'istante è davanti alla porta. Dopo il passaggio la sua coordinata relativa è negativa, benché la sua coordinata alla stazione sia rimasta $30\,\mathrm m$.
:::

::grafico{f="9+3*x;30" xmin=0 xmax=9 ymin=0 ymax=39 nomi="t (s),x (m)" punti="7,30,pieno,I" legenda="\text{porta};\text{segnale}" titolo="L’uguaglianza delle coordinate individua il passaggio del segnale per la porta"}

:::esempio{#dati-due-riferimenti titolo="Due posizioni misurate nello stesso istante"}
Una videocamera misura da terra la posizione $X$ della porta e la posizione $x$ di un carrello di servizio. I moti sono uniformi. In ogni riga si usano due coordinate dello stesso fotogramma per trovare la coordinata relativa $x'=x-X$.

| $t$ (s) | $X$ (m) | $x$ (m) | $x'$ (m) |
| ---: | ---: | ---: | ---: |
| 0 | 8 | 14 | 6 |
| 2 | 12 | 12 | 0 |
| 4 | 16 | 10 | −6 |

La porta avanza di $4\,\mathrm m$ ogni $2\,\mathrm s$ e il carrello arretra di $2\,\mathrm m$. La coordinata relativa diminuisce quindi di $6\,\mathrm m$ nello stesso intervallo. Si ricava $v'=-3\,\mathrm{m/s}$. La riga in cui le due coordinate al suolo coincidono indica il passaggio del carrello davanti alla porta.
:::

## Composizione delle velocità

:::teorema{#velocita-relative titolo="Legge galileiana delle velocità"}
Quando $S'$ trasla con velocità costante $\vec u$ rispetto a $S$ e gli assi sono paralleli e concordi, la velocità di $P$ in $S$ è
$$
\vec v=\vec v'+\vec u.
$$
La relazione vale anche per la velocità media sullo stesso intervallo. Si parte dalle coordinate a due istanti $t_1$ e $t_2$. Sottraendole si ottiene $\Delta x=\Delta x'+\Delta X$. La traslazione uniforme dà $\Delta X=u\Delta t$. Dividendo per $\Delta t$ entrambe le componenti descrivono velocità medie e la componente attribuita all'origine vale $u$. Per la velocità istantanea si considera un intervallo sempre più breve intorno all'istante di misura. Lo stesso ragionamento si applica alle altre componenti.

Se l'origine accelera mantenendo fermi i versi degli assi, alla velocità media relativa si somma la velocità media dell'origine nello stesso intervallo. La relazione istantanea usa invece $\vec u(t)$ valutata insieme a $\vec v'(t)$. È l'accelerazione, quindi, a richiedere una correzione rispetto alla sola invarianza, non la composizione delle velocità.

La somma è **vettoriale**. Nel problema su una retta si sceglie una volta per tutte il verso positivo e si sommano componenti con segno. Se un passeggero cammina a $1{,}5\,\mathrm{m/s}$ verso la testa di un treno che procede a $12\,\mathrm{m/s}$, la stazione misura $13{,}5\,\mathrm{m/s}$. Se cammina verso la coda, si ha $v'=-1{,}5\,\mathrm{m/s}$, quindi $v=10{,}5\,\mathrm{m/s}$. In entrambi i casi l'osservatore a terra vede il passeggero avanzare nel verso del treno.
:::

::grafico{f="12*x;13.5*x;10.5*x" xmin=0 xmax=4 ymin=0 ymax=57 nomi="t (s),x (m)" legenda="\text{treno};\text{verso la testa};\text{verso la coda}" titolo="Le pendenze mostrano le tre velocità misurate dalla stazione"}

:::osservazione{#catena-riferimenti titolo="Pedici e trasformazione inversa"}
Nella scrittura $\vec v_{P/S}$ il pedice dopo la barra indica il riferimento e quello prima indica il corpo. Una catena leggibile è
$$
\vec v_{P/S}=\vec v_{P/S'}+\vec v_{S'/S}.
$$
Per invertire la relazione si sottrae la velocità del vagone. Se il suolo misura $10{,}5\,\mathrm{m/s}$ e il treno procede a $12\,\mathrm{m/s}$, il risultato relativo è $10{,}5-12=-1{,}5\,\mathrm{m/s}$. Una volta fissato il verso positivo, il segno fornisce la direzione del cammino nel vagone. Se cambia l'ordine dei due riferimenti, $\vec v_{S/S'}=-\vec v_{S'/S}$.

Un rover misura la velocità di un drone come $(1,2)\,\mathrm{m/s}$. Il rover è su un ponte mobile e si muove rispetto al ponte a $(2,-1)\,\mathrm{m/s}$. Il ponte trasla rispetto al suolo a $(-1,1)\,\mathrm{m/s}$. In assi paralleli e concordi, sommare lungo ogni asse dà $(2,2)\,\mathrm{m/s}$ per il drone rispetto al suolo.

La composizione galileiana usa lo stesso tempo nei due sistemi. È adeguata alle velocità di treni, barche e oggetti di laboratorio, molto inferiori alla velocità della luce.
:::

## Incontri e inseguimenti

:::teorema{#incontri titolo="Velocità di avvicinamento"}
Si rappresentano due corpi $A$ e $B$ sullo stesso asse e si scrivono le posizioni allo stesso istante. L'incontro richiede $x_A(t)=x_B(t)$. Per moti uniformi, con $A$ dietro $B$ all'istante iniziale, la separazione con segno è
$$
x_B(t)-x_A(t)=d+(v_B-v_A)t.
$$
Se $d>0$ e $v_A>v_B$, l'azzeramento della separazione dà $t=\dfrac d{v_A-v_B}$. L'unità è il secondo, poiché si divide una distanza per una velocità. Con $d=60\,\mathrm m$, $v_A=8\,\mathrm{m/s}$ e $v_B=5\,\mathrm{m/s}$ la distanza diminuisce di $3\,\mathrm m$ al secondo. Quindi occorrono $20\,\mathrm s$. La verifica nelle due leggi orarie dà $x_A=8\cdot20=160\,\mathrm m$ e $x_B=60+5\cdot20=160\,\mathrm m$.

Sull'asse orientato da $A$ verso $B$, se i due corpi si muovono l'uno verso l'altro si ha $v_A>0$ e $v_B<0$. In questo caso $v_A-v_B=\lvert v_A\rvert+\lvert v_B\rvert$. Se $v_A=v_B$ e la separazione iniziale è positiva, la distanza rimane costante. Se la soluzione algebrica ha $t<0$, il punto d'intersezione cade prima dell'istante iniziale scelto. Va verificato l'intervallo in cui ciascuna legge oraria rappresenta il moto effettivo.
:::

::grafico{f="8*x;60+5*x" xmin=0 xmax=24 ymin=0 ymax=200 nomi="t (s),x (m)" punti="20,160,pieno,I" legenda="\text{A};\text{B}" titolo="Le rette si incontrano a 20 s e 160 m"}

:::esempio{#partenze-differite titolo="Modello dopo una partenza ritardata"}
Il corpo $B$ parte all'istante $t=0$ da $8\,\mathrm m$ e procede a $2\,\mathrm{m/s}$. $A$ parte dall'origine solo a $t=3\,\mathrm s$ e prosegue a $4\,\mathrm{m/s}$. Per $t\geq3\,\mathrm s$, le leggi da uguagliare sono $x_B=8+2t$ e $x_A=4(t-3)$, con le coordinate in metri e il tempo in secondi. Da $4(t-3)=8+2t$ segue $t=10\,\mathrm s$. Per $A$ il tempo in moto è $10-3=7\,\mathrm s$ e la coordinata comune è $28\,\mathrm m$.

Si può rifare il conto azzerando l'orologio quando parte $A$. In quell'istante $B$ è già a $8+2\cdot3=14\,\mathrm m$. La separazione diminuisce a $4-2=2\,\mathrm{m/s}$ e si annulla dopo $\dfrac{14}{2}=7\,\mathrm s$ dalla nuova origine temporale. La coerenza dei due conti dipende dalla scelta di un istante iniziale comune.
:::

::grafico{f="4*(x-3);8+2*x" xmin=3 xmax=12 ymin=0 ymax=38 nomi="t (s),x (m)" punti="10,28,pieno,I" legenda="\text{A};\text{B}" titolo="Le rette sono mostrate dall’istante in cui entrambi i corpi sono in moto"}

## Attraversare un fiume

:::osservazione{#moto-fiume titolo="Somma vettoriale e deriva"}
Si orienta l'asse $x$ a valle e l'asse $y$ da una riva all'altra. La velocità dell'acqua è $(u,0)$ rispetto alla riva. La velocità della barca rispetto all'acqua ha componenti $(v'_x,v'_y)$. Rispetto alla riva si ha $(u+v'_x,v'_y)$. La componente trasversale controlla il tempo per percorrere la larghezza $d$. La componente longitudinale, moltiplicata per lo stesso tempo, fornisce lo spostamento a valle o a monte.

Se la barca punta perpendicolarmente alle rive, $(v'_x,v'_y)=(0,v_b)$. Con $d=40\,\mathrm m$, $v_b=4\,\mathrm{m/s}$ e $u=3\,\mathrm{m/s}$, il tempo è $\dfrac d{v_b}=10\,\mathrm s$. Il punto di approdo è a valle della partenza di $ut=30\,\mathrm m$. Le componenti della velocità al suolo sono $3\,\mathrm{m/s}$ e $4\,\mathrm{m/s}$, perciò il modulo è $5\,\mathrm{m/s}$. Come controllo, la distanza percorsa nella traiettoria rettilinea è $\sqrt{30^2+40^2}=50\,\mathrm m$. Dividendo per $10\,\mathrm s$ si ritrova $5\,\mathrm{m/s}$.
:::

::grafico{vettori="0,0,3,0,u;3,0,3,4,v′;0,0,3,4" etichette="1.24,2.2,v" xmin=-1 xmax=5 ymin=-1 ymax=5 uguale=1 nomi="vₓ (m/s),vᵧ (m/s)" titolo="La corrente sposta soltanto la componente parallela alle rive"}

:::esempio{#rotta-attraversamento titolo="Arrivare esattamente di fronte"}
Per approdare di fronte alla partenza si impone $u+v'_x=0$. La barca punta in parte verso monte, così $v'_x=-u$. Se il suo motore mantiene una rapidità $v_b$ rispetto all'acqua, la componente utile ad attraversare è $v'_y=\sqrt{v_b^2-u^2}$. Per attraversare con questa rotta serve $v_b>u$. Al limite $v_b=u$ tutto il modulo disponibile è impiegato per contrastare la corrente e la componente trasversale si annulla.

Con $v_b=5\,\mathrm{m/s}$ e $u=3\,\mathrm{m/s}$ si ottiene $v'_y=\sqrt{25-9}=4\,\mathrm{m/s}$. Un fiume largo $40\,\mathrm m$ si attraversa in $10\,\mathrm s$. Puntando perpendicolarmente alle rive, la stessa barca ottiene $v'_y=5\,\mathrm{m/s}$ e attraversa in $8\,\mathrm s$, con deriva $24\,\mathrm m$. La scelta della rotta dipende da quale dato del problema è fissato, la rapidità di attraversamento o il punto di arrivo.
:::

::grafico{vettori="0,0,3,0,u;3,0,0,4,v′;0,0,0,4,v" xmin=-2 xmax=5 ymin=-1 ymax=5 uguale=1 nomi="vₓ (m/s),vᵧ (m/s)" titolo="Puntare a monte annulla la componente della velocità al suolo parallela alla riva"}

## Riferimenti inerziali

:::definizione{#inerziali titolo="Invarianza dell’accelerazione"}
In un **riferimento inerziale** un corpo isolato conserva la propria velocità vettoriale, compreso il caso della quiete. Un riferimento che trasla a velocità costante rispetto a uno inerziale è anch'esso inerziale. Se $\vec v=\vec v'+\vec u$ e $\vec u$ è costante, sottraendo le velocità agli estremi di un intervallo si ottiene $\Delta\vec v=\Delta\vec v'$. Dividendo per lo stesso tempo si ottiene la stessa accelerazione media. Considerando intervalli brevi si arriva a $\vec a=\vec a'$ per l'accelerazione istantanea.

La descrizione di una traiettoria può cambiare anche con accelerazione uguale. Una pallina viene lasciata cadere da ferma rispetto a un treno a velocità costante $u$. Trascurando la resistenza dell'aria, il vagone misura velocità orizzontale nulla e osserva una caduta verticale. Il suolo misura componente orizzontale $u$, costante, mentre verticalmente osserva la stessa caduta. La pallina conserva la velocità orizzontale che aveva al rilascio e rimane sopra lo stesso punto del vagone fino all'urto. Entrambi gli osservatori misurano accelerazione verticale $g$ verso il basso.
:::

::grafico{f="4.9-4.9*x^2/36" xmin=0 xmax=7.3 ymin=0 ymax=6 nomi="x (m),y (m)" punti="0,4.9,pieno,P;6,0,pieno,I" titolo="Dal suolo, una pallina lasciata da 4,9 m mentre il vagone avanza a 6 m/s percorre un arco di parabola con g = 9,8 m/s²"}

:::osservazione{#principio-relativita titolo="Leggi nello stesso laboratorio"}
Le leggi della meccanica hanno la stessa forma in tutti i riferimenti inerziali. Per un corpo di massa costante la somma delle forze è $m\vec a$, e l'accelerazione coincide nelle due descrizioni. Una misura interna al vagone chiuso a velocità costante, come il tempo di caduta fra due segni fissi al vagone, dà lo stesso risultato che si avrebbe sul pavimento della stazione con la stessa altezza. Una misura che coinvolge il mondo esterno, per esempio il tempo fra il passaggio davanti a due segni della stazione, permette invece di risalire alla velocità relativa.

Lo stesso ragionamento separa grandezze che dipendono dal riferimento da altre che si conservano nella trasformazione. Le velocità dei singoli corpi cambiano. La differenza $\vec v_A-\vec v_B$ è uguale, perché a ciascuna velocità si somma lo stesso $\vec u$. Per questo due osservatori inerziali calcolano la stessa velocità di avvicinamento e lo stesso tempo trascorso prima dell'incontro.
:::

## Sistemi accelerati

:::osservazione{#apparenti titolo="Forza apparente in una traslazione"}
Consideriamo una cabina che accelera rispetto al suolo mantenendo assi paralleli. Se l'origine mobile ha accelerazione $\vec A$ e il corpo ha accelerazione $\vec a$ al suolo, il cambiamento di velocità relativa dà $\vec a'=\vec a-\vec A$. Allora, da $\sum\vec F=m\vec a$ nel sistema inerziale e da $\vec a=\vec a'+\vec A$, si ottiene
$$
m\vec a'=\sum\vec F-m\vec A.
$$
Nel bilancio scritto nella cabina il termine $-m\vec A$ si chiama **forza apparente**. Si introduce per rappresentare gli effetti dell'accelerazione degli assi. Direzione e verso si trovano proiettando $-\vec A$ sugli assi scelti.

Se la cabina accelera verso destra a $1{,}5\,\mathrm{m/s^2}$ e la massa è $2{,}0\,\mathrm{kg}$, il termine apparente nella cabina è $-3{,}0\,\mathrm N$ con destra positiva. Un corpo orizzontalmente libero ha $a=0$ nel riferimento del suolo, dunque $a'=-1{,}5\,\mathrm{m/s^2}$. Una persona che rimane ferma rispetto alla cabina ha invece $a'=0$. Su di lei agisce una forza orizzontale reale verso destra, fornita per esempio dal pavimento, di modulo $mA$. Nel bilancio della cabina i due termini si compensano. La formula qui ricavata riguarda assi in pura traslazione. Per assi in rotazione il bilancio richiede altri contributi.

Una prova di laboratorio usa un disco lasciato libero su un piano orizzontale con attrito trascurabile. Il disco parte sopra una tacca sul pavimento con la stessa velocità della cabina. Se la cabina procede a velocità costante, il disco resta sopra la tacca. Con accelerazione della cabina $0{,}80\,\mathrm{m/s^2}$ verso destra, dopo $2{,}0\,\mathrm s$ il disco si trova $1{,}6\,\mathrm m$ a sinistra della tacca. Il calcolo usa $x'=-\dfrac12 At^2$, perché la velocità relativa iniziale è nulla.
:::

::grafico{f="0.75*x^2;-0.75*x^2" xmin=0 xmax=4.22 ymin=-15 ymax=15 nomi="t (s),posizione (m)" legenda="\text{origine della cabina al suolo};\text{oggetto nella cabina}" titolo="Un oggetto libero fermo al suolo arretra nel riferimento della cabina che accelera a 1,5 m/s²"}

:::esempio{#cabina-frenata titolo="Direzione durante una frenata"}
Una cabina procede verso destra, ma rallenta con accelerazione $A=-2\,\mathrm{m/s^2}$. Il termine apparente su una borsa di $3\,\mathrm{kg}$ è $-mA=+6\,\mathrm N$, verso destra. Se il pavimento è liscio e la borsa condivide inizialmente la velocità del veicolo, essa prosegue a velocità costante nel riferimento del suolo. Nella cabina parte da ferma e acquista velocità relativa $+2\,\mathrm{m/s}$ dopo $1\,\mathrm s$. La direzione è quella dell'accelerazione relativa, che in questo caso punta verso la parte anteriore della cabina.

Nell'esame di un caso bisogna quindi distinguere il verso della velocità della cabina dal verso della sua accelerazione. Dal grafico velocità-tempo si ricava il secondo verso dal segno della pendenza. Una velocità positiva che diminuisce dà pendenza negativa e forza apparente positiva.
:::

::grafico{f="8-2*x;8" xmin=0 xmax=3 ymin=0 ymax=10 nomi="t (s),v (m/s)" legenda="\text{cabina};\text{borsa}" titolo="La velocità iniziale di 8 m/s è un dato d’esempio. Durante la frenata la borsa conserva questa velocità orizzontale al suolo."}

## Confronto fra due descrizioni

:::esempio{#confronto-due-descrizioni titolo="Raggiungere l’origine mobile durante una frenata"}
Consideriamo un'origine mobile con legge oraria $X(t)=2+3t$ e una particella con legge al suolo $x(t)=6+2t-\dfrac{1}{2}t^2$, usando metri e secondi. Gli assi sono paralleli e gli orologi segnano lo stesso tempo. All'inizio la particella è avanti rispetto all'origine di $6-2=4\,\mathrm m$. La sua velocità iniziale al suolo è positiva, $2\,\mathrm{m/s}$, mentre la velocità iniziale relativa è $2-3=-1\,\mathrm{m/s}$. Al suolo comincia muovendosi in avanti e nel vagone arretra già quando comincia la misura.

Per descrivere l'incontro si può uguagliare $x(t)$ a $X(t)$ oppure annullare la coordinata relativa
$$
x'(t)=4-t-\dfrac{1}{2}t^2.
$$
L'annullamento dà $t^2+2t-8=0$, con radici $2$ e $-4$ in secondi. Il tratto di moto considerato inizia a $t=0$, quindi l'incontro avviene dopo $2\,\mathrm s$. Sostituendo nella legge del riferimento mobile si trova la coordinata comune $2+3\cdot2=8\,\mathrm m$.

All'incontro la particella ha velocità al suolo $2-2=0\,\mathrm{m/s}$ e velocità relativa $-3\,\mathrm{m/s}$. Avere la stessa posizione in un istante è compatibile con velocità diverse, proprio come nel passaggio di una porta davanti a un segnale fermo. Nelle due leggi orarie il coefficiente di $t^2$ resta $-\dfrac{1}{2}$, e l'accelerazione è $-1\,\mathrm{m/s^2}$ in entrambi i riferimenti. La trasformazione ha modificato solo intercetta e coefficiente del termine lineare.
:::

::grafico{f="2+3*x;6+2*x-0.5*x^2" xmin=0 xmax=4 ymin=0 ymax=15 nomi="t (s),x (m)" punti="2,8,pieno,I" legenda="\text{origine mobile};\text{particella}" titolo="All’incontro le posizioni coincidono e le pendenze sono diverse"}
