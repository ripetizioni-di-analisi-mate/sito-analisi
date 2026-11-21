---
titolo: "Sistemi di riferimento e relatività galileiana"
sommario: "Posizioni, velocità e accelerazioni relative. Inseguimenti, navigazione con corrente e bilancio delle forze in una cabina accelerata."
---

## Posizione relativa

:::definizione{#posizioni-relative titolo="Due osservatori dello stesso moto"}
Un **sistema di riferimento** è l'insieme di un punto scelto come origine, di uno o più assi orientati (rette su cui è fissato un verso positivo e un'unità di misura) e di un orologio che segna l'istante di ogni evento. La **coordinata** di un punto è la sua posizione letta sull'asse: positiva dalla parte del verso positivo, negativa dall'altra. Chi usa un certo riferimento per descrivere un moto si chiama osservatore.

Lo stesso moto si descrive da due riferimenti diversi. Si sceglie come riferimento $S$ la stazione e come riferimento $S'$ il treno (l'apice $'$, che si legge «primo», indica le grandezze misurate nel treno). Dall'interno del vagone la posizione di un punto $P$ si misura a partire dalla porta, scelta come origine $O'$. Dalla stazione lo stesso punto si misura a partire da un segnale fisso $O$. Un passeggero seduto a due metri da $O'$ ha coordinata costante in $S'$. Mentre il treno avanza, la sua coordinata in $S$ aumenta insieme a quella della porta.

Si scelgono assi paralleli e orientati nello stesso verso (assi *concordi*). Si chiamano:
- $X(t)$ la coordinata di $O'$ in $S$ all'istante $t$;
- $x'(t)$ la coordinata di $P$ in $S'$;
- $x$ la coordinata di $P$ in $S$.

Per arrivare da $O$ a $P$ si può andare da $O$ a $O'$, poi da $O'$ a $P$. Perciò, se le due misure sono riferite allo stesso istante, le lunghezze dei due tratti si sommano con il loro segno:
$$
x=X(t)+x', \qquad x'=x-X(t).
$$
La seconda uguaglianza si ottiene dalla prima sottraendo $X(t)$ da entrambi i membri. Con $X=15\,\mathrm m$ e $x'=2\,\mathrm m$ risulta $x=15+2=17\,\mathrm m$. Un punto con $x'=-2\,\mathrm m$ si trova invece due metri dietro la porta, alla coordinata $x=15-2=13\,\mathrm m$. Il segno di $x'$ indica quindi il lato dell'origine mobile sul quale si trova il punto.

Nel grafico posizione-tempo le due rette sono la porta e il passeggero. Allo stesso istante $t=3\,\mathrm s$ la porta è a $15\,\mathrm m$ e il passeggero a $17\,\mathrm m$, perciò il segmento verticale fra le due rette misura $x'=2\,\mathrm m$.
:::

::grafico{f="5*x;5*x+2" xmin=0 xmax=4 ymin=0 ymax=23 nomi="t (s),x (m)" punti="3,15,pieno;3,17,pieno" segmenti="3,15,3,17" etichette="2.78,14.25,O′;3.11,18.15,P" legenda="\text{origine mobile};\text{passeggero}" titolo="Lo scarto verticale fra le due rette allo stesso istante dà la coordinata del passeggero nel vagone"}

:::esempio{#origine-e-orologio titolo="Origini separate all’istante iniziale"}
La **legge oraria** di un corpo è la formula che dà la sua coordinata in funzione del tempo. Se l'origine mobile si muove lungo $x$ con velocità costante $u$, la sua legge oraria è
$$
X(t)=X_0+ut,
$$
dove $X_0$ è la posizione di $O'$ all'istante scelto come zero ($X_0$ è l'**intercetta** della retta nel grafico posizione-tempo, cioè il valore per $t=0$). Nella fisica classica, cioè quella di Galileo e Newton, gli orologi dei due riferimenti avanzano allo stesso ritmo; se partono dallo stesso istante, segnano lo stesso tempo, $t'=t$. Lungo gli assi nei quali l'origine mobile non si sposta, le coordinate nei due riferimenti coincidono se le due origini hanno lo stesso valore iniziale su quegli assi.

Se all'inizio i due orologi segnano letture diverse, con una differenza $\tau$ (lettera greca che si legge «tau»), si ha $t'=t+\tau$. La durata $\Delta t$ di un intervallo è la stessa per i due orologi, perché la differenza $\tau$ si cancella sottraendo due letture. In una legge oraria si inserisce la lettura dell'orologio con cui sono stati dati l'intercetta e la velocità. Per esempio, con $t'=t+2\,\mathrm s$ e una legge scritta con il tempo $t$ della stazione, la lettura $t'=7\,\mathrm s$ corrisponde a $t=7-2=5\,\mathrm s$, ed è $5\,\mathrm s$ il valore da sostituire.

La porta è inizialmente a $X_0=9\,\mathrm m$ e procede a $u=3\,\mathrm{m/s}$. Un segnale fisso si trova a $30\,\mathrm m$. Dopo $4\,\mathrm s$ la porta è a $9+3\cdot4=21\,\mathrm m$, quindi il passeggero misura per il segnale
$$
x'=30-21=9\,\mathrm m.
$$
Il segnale passa per l'origine $O'$ quando la porta raggiunge la sua coordinata, cioè quando $30=9+3t$. Da $3t=30-9=21$ segue $t=7\,\mathrm s$. Prima di quell'istante il segnale è davanti alla porta. Dopo il passaggio la sua coordinata relativa è negativa, benché la sua coordinata alla stazione sia rimasta $30\,\mathrm m$. Nel grafico il passaggio è il punto $I$ in cui la retta della porta incontra la retta orizzontale del segnale.
:::

::grafico{f="9+3*x;30" xmin=0 xmax=9 ymin=0 ymax=39 nomi="t (s),x (m)" punti="7,30,pieno,I" legenda="\text{porta};\text{segnale}" titolo="L’uguaglianza delle coordinate individua il passaggio del segnale per la porta"}

:::esempio{#dati-due-riferimenti titolo="Due posizioni misurate nello stesso istante"}
Una videocamera ferma a terra misura la posizione $X$ della porta e la posizione $x$ di un carrello di servizio. I due moti sono uniformi, cioè a velocità costante. In ogni riga si usano due coordinate dello stesso fotogramma per trovare la coordinata relativa $x'=x-X$.

| $t$ (s) | $X$ (m) | $x$ (m) | $x'$ (m) |
| ---: | ---: | ---: | ---: |
| 0 | 8 | 14 | 6 |
| 2 | 12 | 12 | 0 |
| 4 | 16 | 10 | −6 |

La porta avanza di $4\,\mathrm m$ ogni $2\,\mathrm s$ e il carrello arretra di $2\,\mathrm m$. La coordinata relativa diminuisce quindi di $4+2=6\,\mathrm m$ nello stesso intervallo. La velocità del carrello nel treno è perciò
$$
v'=\frac{-6\,\mathrm m}{2\,\mathrm s}=-3\,\mathrm{m/s}.
$$
Nella riga $t=2\,\mathrm s$ le due coordinate al suolo coincidono ($12\,\mathrm m$) e $x'=0$, quindi in quell'istante il carrello passa davanti alla porta.
:::

## Composizione delle velocità

:::teorema{#velocita-relative titolo="Legge galileiana delle velocità"}
Un riferimento **trasla** quando si sposta senza ruotare, cioè con gli assi che restano paralleli a sé stessi. Quando $S'$ trasla con velocità costante $\vec u$ rispetto a $S$ e gli assi sono paralleli e concordi, la velocità di $P$ in $S$ è la somma della sua velocità $\vec v'$ in $S'$ e della velocità $\vec u$ di $S'$:
$$
\vec v=\vec v'+\vec u.
$$
La freccia sopra la lettera indica un **vettore**, cioè una grandezza con modulo (intensità), direzione e verso.

La relazione vale anche per la **velocità media**, che è lo spostamento diviso per il tempo impiegato. Si parte dalle coordinate a due istanti $t_1$ e $t_2$:
$$
x_1=X_1+x'_1,\qquad x_2=X_2+x'_2.
$$
Sottraendo la prima uguaglianza dalla seconda si ottiene $\Delta x=\Delta X+\Delta x'$, dove $\Delta$ (si legge «delta») indica la differenza fra valore finale e valore iniziale. Poiché la traslazione è uniforme, $\Delta X=u\Delta t$. Dividendo tutto per $\Delta t$ si ottiene
$$
\frac{\Delta x}{\Delta t}=u+\frac{\Delta x'}{\Delta t},
$$
cioè la velocità media in $S$ è uguale a $u$ più la velocità media in $S'$. Per la velocità istantanea si considera un intervallo sempre più breve intorno all'istante di misura. Lo stesso ragionamento si applica alle altre componenti (la **componente** di un vettore lungo un asse è la sua proiezione su quell'asse, con il segno).

Se l'origine accelera mantenendo fermi i versi degli assi, il conto precedente vale ancora: alla velocità media relativa si somma la velocità media dell'origine nello stesso intervallo. La relazione istantanea usa la velocità $\vec u(t)$ dell'origine allo stesso istante in cui si misura $\vec v'(t)$. La composizione delle velocità resta quindi la stessa anche quando l'origine accelera; una correzione serve soltanto per le accelerazioni.

La somma è **vettoriale**. In un problema su una retta si sceglie una volta per tutte il verso positivo e si sommano componenti con segno. Un passeggero cammina a $1{,}5\,\mathrm{m/s}$ verso la testa di un treno che procede a $12\,\mathrm{m/s}$. Con positivo il verso del treno, la stazione misura $12+1{,}5=13{,}5\,\mathrm{m/s}$. Se il passeggero cammina verso la coda, si ha $v'=-1{,}5\,\mathrm{m/s}$, quindi $v=12-1{,}5=10{,}5\,\mathrm{m/s}$. Le due velocità al suolo sono positive, perciò in entrambi i casi l'osservatore a terra vede il passeggero avanzare nel verso del treno. La pendenza di una retta posizione-tempo è lo spostamento diviso per il tempo, cioè la velocità; perciò nel grafico le tre rette hanno pendenze $12$, $13{,}5$ e $10{,}5$.

Le velocità date in chilometri orari si portano in metri al secondo dividendo per $3{,}6$, perché
$$
1\,\mathrm{km/h}=\frac{1000\,\mathrm m}{3600\,\mathrm s}=\frac{1}{3{,}6}\,\mathrm{m/s};
$$
per esempio $54\,\mathrm{km/h}=\dfrac{54}{3{,}6}\,\mathrm{m/s}=15\,\mathrm{m/s}$. Le velocità si sommano dopo averle espresse tutte nella stessa unità.
:::

::grafico{f="12*x;13.5*x;10.5*x" xmin=0 xmax=4 ymin=0 ymax=57 nomi="t (s),x (m)" legenda="\text{treno};\text{verso la testa};\text{verso la coda}" titolo="Le pendenze mostrano le tre velocità misurate dalla stazione"}

:::osservazione{#catena-riferimenti titolo="Pedici e trasformazione inversa"}
Nella scrittura $\vec v_{P/S}$, che si legge «velocità di $P$ rispetto a $S$», il pedice prima della barra indica il corpo e quello dopo la barra indica il riferimento. Con questa notazione la legge delle velocità diventa una catena in cui il riferimento intermedio $S'$ compare una volta dopo la barra e una volta prima:
$$
\vec v_{P/S}=\vec v_{P/S'}+\vec v_{S'/S}.
$$
Per invertire la relazione, cioè per trovare la velocità nel vagone, si sottrae la velocità del vagone: $\vec v_{P/S'}=\vec v_{P/S}-\vec v_{S'/S}$. Se il suolo misura $10{,}5\,\mathrm{m/s}$ e il treno procede a $12\,\mathrm{m/s}$, la velocità relativa è $10{,}5-12=-1{,}5\,\mathrm{m/s}$. Una volta fissato il verso positivo, il segno meno indica che il passeggero cammina verso la coda. Se si scambia l'ordine dei due riferimenti, la velocità cambia segno, cioè $\vec v_{S/S'}=-\vec v_{S'/S}$. Per esempio, se il treno va a $+12\,\mathrm{m/s}$ rispetto alla stazione, la stazione va a $-12\,\mathrm{m/s}$ rispetto al treno.

La catena si allunga quando i riferimenti sono più di due. Un rover misura la velocità di un drone come $(1,2)\,\mathrm{m/s}$; le due cifre fra parentesi sono le componenti lungo $x$ e lungo $y$. Il rover è su un ponte mobile e si muove rispetto al ponte a $(2,-1)\,\mathrm{m/s}$. Il ponte trasla rispetto al suolo a $(-1,1)\,\mathrm{m/s}$. In assi paralleli e concordi si sommano le componenti asse per asse:
$$
\vec v_{\text{drone/suolo}}=(1+2-1,\;2-1+1)\,\mathrm{m/s}=(2,2)\,\mathrm{m/s}.
$$

La composizione galileiana usa lo stesso tempo nei due sistemi. Questa ipotesi è verificata con ottima approssimazione per treni, barche e oggetti di laboratorio, le cui velocità sono molto inferiori alla velocità della luce ($3\cdot10^8\,\mathrm{m/s}$).
:::

## Incontri e inseguimenti

:::teorema{#incontri titolo="Velocità di avvicinamento"}
Due corpi $A$ e $B$ si muovono sullo stesso asse. I due corpi si incontrano quando hanno la stessa coordinata nello stesso istante:
$$
x_A(t)=x_B(t).
$$
Per moti uniformi, con $A$ che parte dall'origine e $B$ che parte a distanza $d$ davanti ad $A$, le leggi orarie sono $x_A=v_At$ e $x_B=d+v_Bt$. La **separazione con segno** è la differenza delle coordinate:
$$
x_B(t)-x_A(t)=d+(v_B-v_A)t.
$$
Se $d>0$ e $v_A>v_B$, la separazione diminuisce di $v_A-v_B$ ogni secondo; la differenza $v_A-v_B$ si chiama **velocità di avvicinamento**. Ponendo la separazione uguale a zero si ottiene $(v_A-v_B)t=d$, quindi
$$
t=\frac{d}{v_A-v_B}.
$$
Il risultato è un tempo, poiché si divide una distanza per una velocità. Con $d=60\,\mathrm m$, $v_A=8\,\mathrm{m/s}$ e $v_B=5\,\mathrm{m/s}$ la distanza diminuisce di $8-5=3\,\mathrm m$ al secondo. Quindi occorrono $\dfrac{60}{3}=20\,\mathrm s$. Sostituendo nelle due leggi orarie si ha $x_A=8\cdot20=160\,\mathrm m$ e $x_B=60+5\cdot20=160\,\mathrm m$; nel grafico è il punto $I$ in cui le due rette si incrociano.

La stessa formula copre altri casi.
- Sull'asse orientato da $A$ verso $B$, se i due corpi si muovono l'uno verso l'altro si ha $v_A>0$ e $v_B<0$. In questo caso $v_A-v_B=\lvert v_A\rvert+\lvert v_B\rvert$, dove $\lvert v\rvert$ è il valore assoluto, cioè il numero senza segno. Per esempio, a $4\,\mathrm{m/s}$ e $3\,\mathrm{m/s}$ in versi opposti la distanza diminuisce di $7\,\mathrm m$ al secondo.
- Se $v_A=v_B$ e la separazione iniziale è positiva, la distanza rimane costante e l'incontro non avviene.
- Se la soluzione dell'equazione ha $t<0$, il punto d'intersezione delle rette cade prima dell'istante iniziale scelto, quindi nel tratto studiato l'incontro non avviene. Ogni legge oraria descrive il moto vero solo nell'intervallo di tempo in cui le velocità sono quelle date, perciò la soluzione va confrontata con quell'intervallo.
:::

::grafico{f="8*x;60+5*x" xmin=0 xmax=24 ymin=0 ymax=200 nomi="t (s),x (m)" punti="20,160,pieno,I" legenda="\text{A};\text{B}" titolo="Le rette si incontrano a 20 s e 160 m"}

:::esempio{#partenze-differite titolo="Modello dopo una partenza ritardata"}
Il corpo $B$ parte all'istante $t=0$ da $8\,\mathrm m$ e procede a $2\,\mathrm{m/s}$. $A$ parte dall'origine solo a $t=3\,\mathrm s$ e prosegue a $4\,\mathrm{m/s}$. All'istante $t$ il corpo $A$ è in moto da $t-3$ secondi, perciò la sua legge oraria è $x_A=4(t-3)$, valida per $t\geq3\,\mathrm s$. Con le coordinate in metri e il tempo in secondi si uguagliano le due leggi:
$$
\begin{aligned}
4(t-3)&=8+2t\\[4pt]
4t-12&=8+2t\\[4pt]
2t&=20\\[4pt]
t&=10\,\mathrm s.
\end{aligned}
$$
Il risultato è maggiore di $3\,\mathrm s$, quindi cade nell'intervallo in cui la legge di $A$ è valida. Per $A$ il tempo in moto è $10-3=7\,\mathrm s$ e la coordinata comune è $x_B=8+2\cdot10=28\,\mathrm m$.

Si può rifare il conto azzerando l'orologio quando parte $A$. In quell'istante $B$ è già a $8+2\cdot3=14\,\mathrm m$. La separazione diminuisce di $4-2=2\,\mathrm m$ al secondo e si annulla dopo $\dfrac{14}{2}=7\,\mathrm s$ dalla nuova origine dei tempi, cioè a $3+7=10\,\mathrm s$ sull'orologio iniziale. I due conti danno lo stesso istante perché in ciascuno le due leggi orarie usano lo stesso istante iniziale.
:::

::grafico{f="4*(x-3);8+2*x" xmin=3 xmax=12 ymin=0 ymax=38 nomi="t (s),x (m)" punti="10,28,pieno,I" legenda="\text{A};\text{B}" titolo="Le rette sono mostrate dall’istante in cui entrambi i corpi sono in moto"}

## Attraversare un fiume

:::osservazione{#moto-fiume titolo="Somma vettoriale e deriva"}
Una barca che attraversa un fiume ha due riferimenti naturali: l'acqua, che scorre, e la riva, ferma. **A valle** è il verso in cui scorre la corrente, **a monte** il verso opposto. Si orienta l'asse $x$ a valle e l'asse $y$ da una riva all'altra. Le velocità sono:
- la velocità dell'acqua rispetto alla riva, $(u,0)$, perché la corrente è parallela alle rive;
- la velocità della barca rispetto all'acqua, con componenti $(v'_x,v'_y)$;
- la velocità della barca rispetto alla riva, che per la legge delle velocità è $(u+v'_x,\;v'_y)$.

La componente trasversale $v'_y$ decide il tempo per percorrere la larghezza $d$ del fiume, $t=\dfrac{d}{v'_y}$, perché la corrente non la modifica. La componente lungo la riva, moltiplicata per lo stesso tempo, dà lo spostamento a valle (o a monte) fra partenza e approdo; questo spostamento si chiama **deriva**.

Se la barca punta perpendicolarmente alle rive, $(v'_x,v'_y)=(0,v_b)$, dove $v_b$ è la velocità della barca rispetto all'acqua. Con $d=40\,\mathrm m$, $v_b=4\,\mathrm{m/s}$ e $u=3\,\mathrm{m/s}$, il tempo è
$$
t=\frac{d}{v_b}=\frac{40}{4}\,\mathrm s=10\,\mathrm s.
$$
Il punto di approdo è a valle della partenza di $ut=3\cdot10=30\,\mathrm m$. Le componenti della velocità al suolo sono $3\,\mathrm{m/s}$ e $4\,\mathrm{m/s}$ e formano i cateti di un triangolo rettangolo, come nella figura: la freccia $u$ è orizzontale, la freccia $v'$ è verticale e la velocità $v$ al suolo è l'ipotenusa. Per il teorema di Pitagora il **modulo** (la lunghezza del vettore) è
$$
v=\sqrt{3^2+4^2}\,\mathrm{m/s}=\sqrt{25}\,\mathrm{m/s}=5\,\mathrm{m/s}.
$$
Come controllo, la distanza percorsa lungo la traiettoria rettilinea è $\sqrt{30^2+40^2}=50\,\mathrm m$; dividendo per $10\,\mathrm s$ si ritrova $5\,\mathrm{m/s}$.
:::

::grafico{vettori="0,0,3,0,u;3,0,3,4,v′;0,0,3,4" etichette="1.24,2.2,v" xmin=-1 xmax=5 ymin=-1 ymax=5 uguale=1 nomi="vₓ (m/s),vᵧ (m/s)" titolo="La corrente sposta soltanto la componente parallela alle rive"}

:::esempio{#rotta-attraversamento titolo="Arrivare esattamente di fronte"}
Per approdare di fronte alla partenza la deriva deve essere nulla, quindi la componente lungo la riva della velocità al suolo deve valere zero: $u+v'_x=0$. Ne segue $v'_x=-u$, cioè la barca punta in parte verso monte. Il motore mantiene una **rapidità** $v_b$ rispetto all'acqua (la rapidità è il modulo della velocità, senza direzione). Poiché $v_b$ è l'ipotenusa del triangolo di cateti $\lvert v'_x\rvert=u$ e $v'_y$, per il teorema di Pitagora la componente che serve ad attraversare è
$$
v'_y=\sqrt{v_b^2-u^2}.
$$
La radice è positiva solo se $v_b>u$, quindi questa rotta è possibile solo con una barca più rapida della corrente. Al limite $v_b=u$ tutta la rapidità della barca serve a contrastare la corrente e la componente trasversale si annulla, quindi la barca resta ferma rispetto alla riva.

Con $v_b=5\,\mathrm{m/s}$ e $u=3\,\mathrm{m/s}$ si ottiene $v'_y=\sqrt{25-9}=\sqrt{16}=4\,\mathrm{m/s}$, e un fiume largo $40\,\mathrm m$ si attraversa in $\dfrac{40}{4}=10\,\mathrm s$. Nella figura la freccia $v'$ punta a sinistra e in alto, e la somma $v$ è verticale. Puntando invece perpendicolarmente alle rive, la stessa barca ha $v'_y=5\,\mathrm{m/s}$ e attraversa in $\dfrac{40}{5}=8\,\mathrm s$, con deriva $3\cdot8=24\,\mathrm m$. La componente trasversale non supera mai $v_b$, quindi la rotta perpendicolare dà il tempo di attraversamento più breve, mentre la rotta verso monte dà l'approdo di fronte; la scelta dipende da quale dei due dati è fissato nel problema.
:::

::grafico{vettori="0,0,3,0,u;3,0,0,4,v′;0,0,0,4,v" xmin=-2 xmax=5 ymin=-1 ymax=5 uguale=1 nomi="vₓ (m/s),vᵧ (m/s)" titolo="Puntare a monte annulla la componente della velocità al suolo parallela alla riva"}

## Riferimenti inerziali

:::definizione{#inerziali titolo="Invarianza dell’accelerazione"}
Un corpo è **isolato** quando su di esso non agiscono forze, oppure le forze si compensano. Un **riferimento inerziale** è un riferimento nel quale un corpo isolato conserva la propria velocità (modulo, direzione e verso), compreso il caso della quiete; è il riferimento in cui vale il primo principio della dinamica. Un riferimento che trasla a velocità costante rispetto a uno inerziale è anch'esso inerziale.

Il motivo è che l'**accelerazione**, cioè la variazione di velocità divisa per il tempo, è la stessa nei due riferimenti. Se $\vec v=\vec v'+\vec u$ e $\vec u$ è costante, scrivendo la relazione all'inizio e alla fine di un intervallo e sottraendo si ottiene
$$
\Delta\vec v=\Delta\vec v'+\Delta\vec u=\Delta\vec v',
$$
perché $\Delta\vec u=\vec 0$. Dividendo per lo stesso tempo si ottiene la stessa accelerazione media. Considerando intervalli brevi si arriva a $\vec a=\vec a'$ per l'accelerazione istantanea. Una grandezza che ha lo stesso valore in tutti i riferimenti si dice **invariante**; l'accelerazione è quindi invariante per i riferimenti in traslazione uniforme.

Poiché la velocità è un vettore, l'accelerazione è diversa da zero anche quando cambia soltanto la direzione della velocità. Per esempio, un'origine che percorre una circonferenza a rapidità costante ha accelerazione rivolta verso il centro, perciò un riferimento con l'origine su di essa è accelerato anche se i suoi assi restano paralleli a quelli del suolo.

La forma della traiettoria invece può cambiare, anche con la stessa accelerazione. Una pallina viene lasciata cadere da ferma rispetto a un treno che procede a velocità costante $u$. Trascurando la resistenza dell'aria:
- il vagone misura velocità orizzontale nulla e osserva una caduta verticale;
- il suolo misura una componente orizzontale $u$, costante, e la stessa caduta lungo la verticale, quindi osserva un arco di parabola.

La pallina conserva la velocità orizzontale che aveva al rilascio, uguale a quella del treno, perciò rimane sopra lo stesso punto del vagone fino all'urto con il pavimento. Entrambi gli osservatori misurano accelerazione verticale $g$ verso il basso ($g=9{,}8\,\mathrm{m/s^2}$ è l'accelerazione di gravità). Nella figura la pallina parte da $4{,}9\,\mathrm m$ di altezza: con $\dfrac12gt^2=4{,}9\,\mathrm m$ la caduta dura $1\,\mathrm s$, e in quel secondo al suolo la pallina avanza di $6\,\mathrm m$ insieme al vagone.
:::

::grafico{f="4.9-4.9*x^2/36" xmin=0 xmax=7.3 ymin=0 ymax=6 nomi="x (m),y (m)" punti="0,4.9,pieno,P;6,0,pieno,I" titolo="Dal suolo, una pallina lasciata da 4,9 m mentre il vagone avanza a 6 m/s percorre un arco di parabola con g = 9,8 m/s²"}

:::osservazione{#principio-relativita titolo="Leggi nello stesso laboratorio"}
Il **principio di relatività galileiana** afferma che le leggi della meccanica hanno la stessa forma in tutti i riferimenti inerziali. Il secondo principio della dinamica dice che, per un corpo di massa costante $m$, la somma delle forze è $m\vec a$; poiché l'accelerazione coincide nelle due descrizioni, anche questa legge è la stessa nei due riferimenti. Perciò una misura fatta tutta dentro un vagone chiuso che viaggia a velocità costante, come il tempo di caduta di un oggetto fra due segni fissati al vagone, dà lo stesso risultato che si avrebbe sul pavimento della stazione con la stessa altezza. Una misura che usa il mondo esterno, per esempio il tempo fra il passaggio davanti a due segni della stazione, dà invece la velocità del treno rispetto alla stazione.

Lo stesso ragionamento distingue le grandezze che cambiano da un riferimento all'altro da quelle invarianti. Le velocità dei singoli corpi cambiano. La differenza $\vec v_A-\vec v_B$ resta uguale, perché a ciascuna velocità si somma lo stesso $\vec u$:
$$
(\vec v_A+\vec u)-(\vec v_B+\vec u)=\vec v_A-\vec v_B.
$$
Per questo due osservatori inerziali calcolano la stessa velocità di avvicinamento e lo stesso tempo trascorso prima dell'incontro.
:::

## Sistemi accelerati

:::osservazione{#apparenti titolo="Forza apparente in una traslazione"}
Si considera una cabina che accelera rispetto al suolo mantenendo gli assi paralleli. L'origine mobile ha accelerazione $\vec A$ e il corpo ha accelerazione $\vec a$ al suolo. Dalla legge delle velocità $\vec v=\vec v'+\vec u$, con $\vec u$ ora variabile, si sottraggono i valori all'inizio e alla fine di un intervallo e si divide per il tempo; si ottiene $\vec a=\vec a'+\vec A$, cioè
$$
\vec a'=\vec a-\vec A.
$$
Nel riferimento del suolo, che è inerziale, vale $\sum\vec F=m\vec a$, dove $\sum\vec F$ (il simbolo $\sum$, «sigma», indica la somma) è la **risultante** delle forze reali, cioè la somma vettoriale delle forze esercitate da altri corpi. Sostituendo $\vec a=\vec a'+\vec A$ si ha $\sum\vec F=m\vec a'+m\vec A$, quindi
$$
m\vec a'=\sum\vec F-m\vec A.
$$
Nel bilancio scritto nella cabina il termine $-m\vec A$ si chiama **forza apparente**. Non è esercitata da nessun corpo e si aggiunge alle forze reali per tenere conto dell'accelerazione degli assi. Ha la direzione di $\vec A$ e verso opposto; i segni delle sue componenti si trovano proiettando $-\vec A$ sugli assi scelti. Le forze si misurano in **newton** (simbolo $\mathrm N$): $1\,\mathrm N$ è la forza che dà a $1\,\mathrm{kg}$ un'accelerazione di $1\,\mathrm{m/s^2}$.

Se la cabina accelera verso destra a $1{,}5\,\mathrm{m/s^2}$ e la massa è $2{,}0\,\mathrm{kg}$, con destra positiva il termine apparente è
$$
-mA=-2{,}0\cdot1{,}5\,\mathrm N=-3{,}0\,\mathrm N.
$$
Un corpo libero di muoversi in orizzontale (nessuna forza orizzontale reale) ha $a=0$ nel riferimento del suolo, dunque $a'=0-1{,}5=-1{,}5\,\mathrm{m/s^2}$, e nella cabina il corpo arretra. Nella figura la cabina avanza al suolo con legge $\dfrac12\cdot1{,}5\,t^2=0{,}75\,t^2$, mentre l'oggetto fermo al suolo ha nella cabina la legge opposta, $-0{,}75\,t^2$. Una persona che rimane ferma rispetto alla cabina ha invece $a'=0$. Su di lei agisce una forza orizzontale reale verso destra, esercitata per esempio dal pavimento, di modulo $mA$. Nel bilancio della cabina la forza reale $+mA$ e il termine apparente $-mA$ si compensano.

Lo stesso bilancio vale in verticale, per esempio in un ascensore. Con l'alto positivo, su una persona ferma rispetto all'ascensore agiscono il peso $-mg$ e la forza $N$ della bilancia (la **forza normale**, perpendicolare al piatto); poiché $a'=0$,
$$
0=N-mg-mA,\qquad N=m(g+A).
$$
Con $m=40\,\mathrm{kg}$, $g$ arrotondato a $10\,\mathrm{m/s^2}$ e ascensore che accelera verso il basso, $A=-2\,\mathrm{m/s^2}$, la bilancia segna $N=40\cdot(10-2)=320\,\mathrm N$, meno del peso di $400\,\mathrm N$.

La formula qui ricavata riguarda assi in pura traslazione. Per assi che ruotano il bilancio richiede altri termini, che qui non si studiano.

Una prova di laboratorio usa un disco lasciato libero su un piano orizzontale con attrito trascurabile. Il disco parte sopra una tacca sul pavimento della cabina, con la stessa velocità della cabina. Se la cabina procede a velocità costante, il disco resta sopra la tacca. Se la cabina accelera di $0{,}80\,\mathrm{m/s^2}$ verso destra, nella cabina il disco ha $a'=-0{,}80\,\mathrm{m/s^2}$ e velocità relativa iniziale nulla, perciò la sua posizione rispetto alla tacca è $x'=-\dfrac12 At^2$. Dopo $2{,}0\,\mathrm s$:
$$
x'=-\frac12\cdot0{,}80\cdot2{,}0^2\,\mathrm m=-1{,}6\,\mathrm m,
$$
cioè il disco si trova $1{,}6\,\mathrm m$ a sinistra della tacca.
:::

::grafico{f="0.75*x^2;-0.75*x^2" xmin=0 xmax=4.22 ymin=-15 ymax=15 nomi="t (s),posizione (m)" legenda="\text{origine della cabina al suolo};\text{oggetto nella cabina}" titolo="Un oggetto libero fermo al suolo arretra nel riferimento della cabina che accelera a 1,5 m/s²"}

:::esempio{#cabina-frenata titolo="Direzione durante una frenata"}
Una cabina procede verso destra, ma rallenta con accelerazione $A=-2\,\mathrm{m/s^2}$; l'accelerazione è negativa perché la velocità, positiva, diminuisce. Con destra positiva, il termine apparente su una borsa di $3\,\mathrm{kg}$ è
$$
-mA=-3\cdot(-2)\,\mathrm N=+6\,\mathrm N,
$$
cioè $6\,\mathrm N$ verso destra. Il pavimento è liscio e la borsa ha inizialmente la stessa velocità del veicolo, perciò al suolo nessuna forza orizzontale la frena e la borsa prosegue a velocità costante. Nella cabina la borsa ha $a'=0-(-2)=+2\,\mathrm{m/s^2}$; parte da ferma e dopo $1\,\mathrm s$ ha velocità relativa $+2\,\mathrm{m/s}$. Il suo moto nella cabina ha il verso dell'accelerazione relativa, che in questo caso punta verso la parte anteriore della cabina.

Il verso della velocità della cabina e il verso della sua accelerazione sono quindi due dati distinti. Nel grafico velocità-tempo il secondo si ricava dal segno della pendenza. Nella figura la retta della cabina parte da $8\,\mathrm{m/s}$ e scende di $2\,\mathrm{m/s}$ ogni secondo, mentre la retta della borsa resta a $8\,\mathrm{m/s}$. Una velocità positiva che diminuisce dà pendenza negativa e forza apparente positiva.
:::

::grafico{f="8-2*x;8" xmin=0 xmax=3 ymin=0 ymax=10 nomi="t (s),v (m/s)" legenda="\text{cabina};\text{borsa}" titolo="La velocità iniziale di 8 m/s è un dato d’esempio. Durante la frenata la borsa conserva questa velocità orizzontale al suolo."}

## Confronto fra due descrizioni

:::esempio{#confronto-due-descrizioni titolo="Raggiungere l’origine mobile durante una frenata"}
Si considera un'origine mobile con legge oraria $X(t)=2+3t$ e una particella con legge al suolo $x(t)=6+2t-\dfrac{1}{2}t^2$, con le coordinate in metri e il tempo in secondi. Gli assi sono paralleli e gli orologi segnano lo stesso tempo. La legge della particella è quella di un moto uniformemente accelerato, $x=x_0+v_0t+\dfrac12at^2$, con $x_0=6\,\mathrm m$, $v_0=2\,\mathrm{m/s}$ e $a=-1\,\mathrm{m/s^2}$.

All'inizio la particella è avanti rispetto all'origine di $6-2=4\,\mathrm m$. La sua velocità iniziale al suolo è positiva, $2\,\mathrm{m/s}$, mentre la velocità iniziale relativa è $2-3=-1\,\mathrm{m/s}$. Perciò al suolo la particella comincia muovendosi in avanti, mentre nel vagone arretra fin dall'inizio della misura.

Per trovare l'incontro si può uguagliare $x(t)$ a $X(t)$ oppure annullare la coordinata relativa. Questa vale
$$
x'(t)=x(t)-X(t)=6+2t-\dfrac{1}{2}t^2-2-3t=4-t-\dfrac{1}{2}t^2.
$$
Ponendo $x'=0$ e moltiplicando per $-2$ si ottiene l'equazione di secondo grado
$$
t^2+2t-8=0,\qquad t=\frac{-2\pm\sqrt{4+32}}{2}=\frac{-2\pm6}{2},
$$
con radici $2$ e $-4$ in secondi. Il tratto di moto considerato inizia a $t=0$, quindi l'incontro avviene dopo $2\,\mathrm s$. Sostituendo nella legge dell'origine mobile si trova la coordinata comune $2+3\cdot2=8\,\mathrm m$.

La velocità della particella al suolo è $v=2-t$, perciò all'incontro vale $2-2=0\,\mathrm{m/s}$; la velocità relativa è $v'=v-3=-3\,\mathrm{m/s}$. Due corpi possono quindi avere la stessa posizione in un istante e velocità diverse, come la porta che passa davanti a un segnale fermo. Nelle due leggi orarie il coefficiente di $t^2$ resta $-\dfrac{1}{2}$, quindi l'accelerazione è $-1\,\mathrm{m/s^2}$ in entrambi i riferimenti. Il cambio di riferimento ha modificato solo l'intercetta (da $6$ a $4$) e il coefficiente del termine in $t$ (da $2$ a $-1$). Nel grafico, nel punto $I$ le posizioni coincidono e le pendenze delle due curve sono diverse.
:::

::grafico{f="2+3*x;6+2*x-0.5*x^2" xmin=0 xmax=4 ymin=0 ymax=15 nomi="t (s),x (m)" punti="2,8,pieno,I" legenda="\text{origine mobile};\text{particella}" titolo="All’incontro le posizioni coincidono e le pendenze sono diverse"}
