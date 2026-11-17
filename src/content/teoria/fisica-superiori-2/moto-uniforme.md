---
titolo: Moto rettilineo uniforme e grafici
sommario: Come si ricavano posizione, velocità e tempi di incontro lungo una retta e come si leggono le leggi del moto nei grafici.
---

## Posizione e spostamento

:::definizione{#posizione titolo="Descrivere la posizione di un corpo"}
Per descrivere un moto lungo una strada rettilinea si fissa un'origine, si orienta la strada con un verso positivo e si sceglie un'unità di lunghezza. La **posizione** $x$ è la coordinata del corpo in questo riferimento. La legge oraria assegna una posizione a ogni istante $t$. Una coordinata negativa indica che il corpo si trova dalla parte dell'origine opposta al verso positivo. Per stabilire in quale verso si stia muovendo, occorre confrontare le posizioni in almeno due istanti, oppure conoscere la sua velocità.
:::

:::definizione{#distanza titolo="Spostamento e distanza percorsa"}
In un intervallo di tempo lo **spostamento** è $\Delta x=x_f-x_i$, dove $x_i$ è la posizione iniziale e $x_f$ è quella finale. Lo spostamento è positivo quando la coordinata finale è maggiore di quella iniziale. Se si cambia origine traslando l'asse, entrambe le coordinate cambiano della stessa quantità, quindi la loro differenza rimane uguale. Invertendo il verso dell'asse si cambia invece il segno dello spostamento.

La **distanza percorsa** è la lunghezza del tragitto. Se il corpo si muove sempre nello stesso verso, la distanza è $|\Delta x|$. Quando compie un'inversione di marcia, la distanza è la somma delle lunghezze dei tratti. I tratti in versi opposti danno invece contributi di segno opposto allo spostamento.
:::

:::esempio{titolo="Una consegna con ritorno"}
Un corriere parte da $x_i=-2\,\mathrm{m}$, arriva a $x=6\,\mathrm{m}$ e torna a $x_f=1\,\mathrm{m}$. Il primo tratto misura $8\,\mathrm{m}$, il secondo $5\,\mathrm{m}$. Lo spostamento totale è $1-(-2)=3\,\mathrm{m}$ e la distanza percorsa è $8+5=13\,\mathrm{m}$. Controllando i segni, il tratto di ritorno contribuisce allo spostamento con $-5\,\mathrm{m}$. Il passaggio da $-2\,\mathrm{m}$ a $1\,\mathrm{m}$ rappresenta anche un attraversamento dell'origine. La posizione finale si trova a un metro dall'origine, mentre la distanza percorsa dipende da tutta la successione dei tratti.

::grafico{f="(-2+4*x)*(x<=2)+(11-2.5*x)*(x>2)" xmin=0 xmax=4 ymin=-3 ymax=7 punti="0,-2,pieno;2,6,pieno,Q;4,1,pieno,R" etichette="0.15,-2.25,P" nomi="t (s),x (m)" titolo="Sul primo tratto la posizione cresce da −2 m a 6 m, sul secondo decresce a 1 m."}
:::

:::esempio{titolo="Posizioni negative nella stessa origine"}
Su un binario un carrello va da $-18\,\mathrm m$ a $-6\,\mathrm m$ senza invertire il moto. La differenza fra lettura finale e iniziale è
$$
\Delta x=-6-(-18)=12\,\mathrm m.
$$
Il carrello si muove nel verso positivo anche se rimane dal lato negativo dell'origine. Se si sposta l'origine di $4\,\mathrm m$ nel verso positivo senza ruotare l'asse, le due letture diventano $-22\,\mathrm m$ e $-10\,\mathrm m$. La loro differenza resta $12\,\mathrm m$, perché la stessa correzione si sottrae da entrambe. Questo controllo separa la scelta del riferimento dal movimento misurato.
:::

## Velocità media e unità di misura

:::definizione{#velocita titolo="Variazione della posizione nel tempo"}
La **velocità media** confronta lo spostamento con il tempo trascorso. Per due istanti $t_i<t_f$ vale
$$
v_m=\frac{x_f-x_i}{t_f-t_i}=\frac{\Delta x}{\Delta t}.
$$
Il denominatore è positivo, perciò il segno di $v_m$ coincide con quello dello spostamento. L'informazione riguarda l'intero intervallo e lascia aperto come il corpo si sia mosso al suo interno. La rapidità media è invece la distanza totale divisa per la durata totale. Poiché la distanza percorsa è almeno $|\Delta x|$, anche la rapidità media è almeno $|v_m|$. Per un viaggio con ritorno al punto di partenza la velocità media vale zero e la rapidità media è positiva se la distanza percorsa è positiva.
:::

:::esempio{titolo="Rapporti con lo stesso tempo totale"}
Una persona si allontana di $60\,\mathrm{m}$ in $20\,\mathrm{s}$, sosta per $10\,\mathrm{s}$ e compie il ritorno in $30\,\mathrm{s}$. L'istante finale è $60\,\mathrm{s}$ dopo il primo. Poiché lo spostamento totale vale zero, $v_m=0$. La distanza percorsa è $120\,\mathrm{m}$ e la rapidità media è $\dfrac{120}{60}\,\mathrm{m/s}=2\,\mathrm{m/s}$. Anche la sosta fa parte dell'intervallo richiesto. Escludendola si risponderebbe a una domanda diversa, relativa ai soli periodi di movimento.

::grafico{linee="0,0 20,60 30,60 60,0" xmin=0 xmax=64 ymin=-7 ymax=67 punti="0,0,pieno;20,60,pieno,A;30,60,pieno,B;60,0,pieno" etichette="59,7,C" nomi="t (s),x (m)" titolo="Spostamento complessivo nullo. La sosta è il tratto orizzontale tra A e B."}
:::

:::osservazione{#conversione titolo="Convertire metri al secondo e chilometri orari"}
L'unità SI della velocità è il metro al secondo. La conversione coinvolge sia la lunghezza al numeratore sia il tempo al denominatore,
$$
54\,\frac{\mathrm{km}}{\mathrm{h}}
=\frac{54\cdot1000\,\mathrm{m}}{3600\,\mathrm{s}}
=15\,\mathrm{m/s}.
$$
Poiché un chilometro vale $1000\,\mathrm{m}$ e un'ora vale $3600\,\mathrm{s}$, per passare da chilometri orari a metri al secondo si divide il valore numerico per $3{,}6$. Il passaggio inverso richiede di moltiplicare per $3{,}6$. Il risultato descrive la stessa velocità. Un controllo rapido consiste nel calcolare quanto spazio si percorrerebbe nello stesso tempo con entrambe le scritture. A $54\,\mathrm{km/h}$ si percorrono $0{,}9\,\mathrm{km}$ in un minuto. A $15\,\mathrm{m/s}$ in $60\,\mathrm{s}$ si percorrono $900\,\mathrm{m}$.
:::

:::osservazione{titolo="Misure compatibili con un intervallo di velocità"}
Due fotocellule danno le posizioni $8\,\mathrm m$ e $18\,\mathrm m$ a distanza di $2\,\mathrm s$. Ogni posizione può differire dal valore reale di al più $1\,\mathrm m$, mentre la durata è assunta esatta. Il minimo spostamento compatibile si ottiene con la seconda lettura al suo limite inferiore e la prima al suo limite superiore, cioè $17-9=8\,\mathrm m$. Il massimo è $19-7=12\,\mathrm m$. Dividendo per la stessa durata, la velocità media compatibile è compresa fra $4$ e $6\,\mathrm{m/s}$. Una sola stima centrale di $5\,\mathrm{m/s}$ non esprime questo intervallo.
Le due posizioni possono raggiungere contemporaneamente gli estremi indicati. Se entrambe fossero alterate dallo stesso errore fisso di azzeramento, quello scarto si cancellerebbe nella differenza. Per costruire l'intervallo della velocità occorre quindi distinguere l'incertezza di ogni lettura dall'errore comune ai due rilevamenti.

::grafico{f="4*x+9;5*x+8;6*x+7" xmin=0 xmax=2.4 ymin=4 ymax=22 linee="0,7 0,9;2,17 2,19" punti="0,8,pieno;2,18,pieno" etichette="0.12,11,[7, 9];1.75,21,[17, 19]" nomi="t (s),x (m)" titolo="Le bande delle due misure permettono pendenze medie da 4 a 6 m/s."}
:::

## La legge del moto uniforme

::::teorema{#uniforme titolo="Posizione a velocità costante"}
Nel **moto rettilineo uniforme** la componente $v$ della velocità lungo l'asse è costante. Se il corpo occupa la posizione $x_0$ all'istante iniziale $t_0$, allora nell'intervallo in cui vale il modello
$$
x(t)=x_0+v(t-t_0).
$$
La quantità $t-t_0$ è il tempo trascorso dalla misura iniziale. Il prodotto $v(t-t_0)$ è lo spostamento, al quale si aggiunge $x_0$ per trovare la coordinata. In intervalli di uguale durata il corpo compie spostamenti uguali. Se $t_0=0$, la formula assume la forma $x(t)=x_0+vt$.

:::dimostrazione
Nell'intervallo tra $t_0$ e $t$ la velocità è costante, quindi coincide con la velocità media. Per $t>t_0$ si ha $v=\dfrac{x(t)-x_0}{t-t_0}$. Moltiplicando per $t-t_0$ e sommando $x_0$ ai due membri si ottiene la legge oraria. Per $t=t_0$ la formula restituisce $x(t_0)=x_0$, come richiesto dalla condizione iniziale.
:::
::::

:::esempio{titolo="Un corpo che attraversa l'origine"}
Un carrello parte da $x_0=6\,\mathrm{m}$ con $v=-2\,\mathrm{m/s}$ all'istante $t_0=0$. La posizione in metri è $x(t)=6-2t$, con $t$ in secondi. Per trovare quando attraversa l'origine si pone $x(t)=0$, da cui $t=3\,\mathrm{s}$. Dopo $5\,\mathrm{s}$ si trova a $-4\,\mathrm{m}$. Il passaggio per zero riguarda la posizione. La velocità resta $-2\,\mathrm{m/s}$ anche in quell'istante.

::grafico{f="6-2*x" xmin=0 xmax=6 ymin=-8 ymax=8 punti="0,6,pieno,A;3,0,pieno,Z;5,-4,pieno,B" nomi="t (s),x (m)" titolo="La retta attraversa la posizione zero in Z e continua con la stessa pendenza."}
:::

:::esempio{titolo="Un orologio che segna già cinque secondi"}
Una fotocellula rileva il corpo a $x_0=4\,\mathrm{m}$ quando $t_0=5\,\mathrm{s}$. La velocità è $3\,\mathrm{m/s}$. Al tempo $t=9\,\mathrm{s}$ sono trascorsi quattro secondi dalla misura, perciò $x(9)=4+3(9-5)=16$, in metri. Scrivendo $4+3\cdot9$ si conterebbe anche il tempo precedente a $t_0$, sebbene $4\,\mathrm{m}$ sia proprio la posizione registrata a $5\,\mathrm{s}$. Sostituire $t=t_0$ nella formula è un controllo immediato.
:::

## Il grafico posizione-tempo

:::osservazione{#grafico-posizione titolo="La pendenza rappresenta la velocità"}
L'asse orizzontale riporta il tempo e l'asse verticale la posizione. Il moto uniforme è rappresentato da una retta nel periodo studiato. La pendenza si ricava da due punti distinti della retta dividendo la variazione verticale per quella orizzontale, con le rispettive unità. Una retta crescente indica velocità positiva, una decrescente indica velocità negativa e una orizzontale indica la quiete. L'altezza di un punto sul grafico indica la posizione, misurata in metri, e la pendenza indica la velocità, misurata in metri al secondo. Guardare il solo angolo a schermo può trarre in inganno, perché una scala diversa su uno degli assi modifica l'angolo apparente.
:::

:::esempio{titolo="Leggere la pendenza tra due rilevamenti"}
Due punti del grafico sono $(2\,\mathrm{s},7\,\mathrm{m})$ e $(6\,\mathrm{s},15\,\mathrm{m})$. Lo spostamento tra le letture è $8\,\mathrm{m}$ e la durata è $4\,\mathrm{s}$, quindi $v=2\,\mathrm{m/s}$. Se la legge uniforme vale già a $t=0$, allora $x(0)=7-2\cdot2=3$, in metri. Se l'osservazione inizia a $t=2\,\mathrm{s}$, il valore ottenuto per $t=0$ è un'estrapolazione che richiede la stessa ipotesi di moto.

::grafico{f="2*x+3" xmin=0 xmax=7 ymin=0 ymax=19 punti="2,7,pieno,A;6,15,pieno,B" nomi="t (s),x (m)" titolo="Tra A e B il rapporto tra 8 m e 4 s è 2 m/s."}
:::

:::attenzione
Il grafico posizione-tempo non raffigura la forma della strada. Una retta discendente può descrivere un veicolo su una strada orizzontale che percorre l'asse verso coordinate decrescenti. Allo stesso modo, due rette posizione-tempo parallele a quote diverse descrivono due oggetti con la stessa velocità lungo la strada e posizioni differenti.
:::

:::esempio{titolo="Controllare la velocità fra tre misure"}
Un sensore rileva $x=1\,\mathrm m$ a $t=1\,\mathrm s$, $x=7\,\mathrm m$ a $t=3\,\mathrm s$ e $x=10\,\mathrm m$ a $t=5\,\mathrm s$. La velocità media nel primo intervallo è $3\,\mathrm{m/s}$ e nel secondo è $1{,}5\,\mathrm{m/s}$. Le pendenze sono diverse, quindi una sola retta non passa per i tre punti. La retta fra il primo e l'ultimo dà $2{,}25\,\mathrm{m/s}$, che è la velocità media complessiva. Il tratto che unisce due misure permette di calcolare una pendenza media anche quando la velocità istantanea fra quei punti resta sconosciuta.

::grafico{linee="1,1 3,7 5,10" segmenti="1,1,5,10" punti="1,1,pieno;3,7,pieno,B;5,10,pieno,C" etichette="0.8,1.75,A" xmin=0 xmax=6 ymin=0 ymax=12 nomi="t (s),x (m)" titolo="B è sopra la corda AC. Le pendenze di AB e BC sono diverse."}
:::

## Incontri e inseguimenti

:::teorema{#incontri titolo="Stessa posizione allo stesso istante"}
Due corpi si incontrano se nello stesso istante occupano la stessa posizione. Le due leggi orarie devono quindi essere scritte nello stesso riferimento e con lo stesso orologio. Se entrambe sono valide a partire da $t=0$, l'equazione è
$$
x_{A0}+v_A t=x_{B0}+v_B t.
$$
Per $v_A\ne v_B$ si ottiene
$$
t=\frac{x_{B0}-x_{A0}}{v_A-v_B}.
$$
Il risultato deve appartenere al tratto temporale in cui valgono entrambe le leggi. Un valore negativo indica un incontro precedente a $t=0$ soltanto se il modello si può estendere anche a quel periodo. Due corpi che hanno la stessa velocità mantengono il loro distacco. Quando partono dalla stessa posizione con uguale velocità, le leggi coincidono per tutta la durata del modello.
:::

:::esempio{titolo="Due corpi che si avvicinano"}
$A$ parte da $1\,\mathrm{m}$ a $2\,\mathrm{m/s}$; $B$ parte da $7\,\mathrm{m}$ a $-1\,\mathrm{m/s}$. All'istante iniziale la distanza è $6\,\mathrm{m}$ e diminuisce di $3\,\mathrm{m}$ ogni secondo. Si uguagliano le due leggi, $1+2t=7-t$, e si ottiene $t=2\,\mathrm{s}$. Il punto d'incontro è $x=5\,\mathrm{m}$. Per controllare, con la legge di $B$ si ottiene $7-2=5$, lo stesso valore.

::grafico{f="2*x+1;-x+7" xmin=0 xmax=4 ymin=0 ymax=10 punti="2,5,pieno,I" nomi="t (s),x (m)" legenda="A;B" titolo="Le rette si incontrano in I. I due corpi hanno la stessa posizione a 2 s."}
:::

:::esempio{titolo="Inseguimento con partenza ritardata"}
$A$ parte da $x=0$ a $3\,\mathrm{m/s}$ al tempo $t=0$. $B$ parte dallo stesso punto a $5\,\mathrm{m/s}$ al tempo $t=4\,\mathrm{s}$. Quando parte $B$, $A$ ha già un vantaggio di $12\,\mathrm{m}$. In seguito tale vantaggio diminuisce di $5-3=2\,\mathrm{m}$ ogni secondo, quindi si annulla dopo $6\,\mathrm{s}$ dalla partenza di $B$. Sul primo orologio l'incontro è a $t=10\,\mathrm{s}$. Le leggi danno $x_A=3\cdot10\,\mathrm{m}$ e $x_B=5(10-4)\,\mathrm{m}$, entrambe pari a $30\,\mathrm{m}$.

::grafico{f="3*x;5*max(0,x-4)" xmin=0 xmax=12 ymin=0 ymax=41 punti="4,0,pieno,B;10,30,pieno,I" nomi="t (s),x (m)" legenda="A;B" titolo="B resta all'origine fino a 4 s. I indica l'incontro dopo la partenza di B."}
:::

:::esempio{titolo="Due corpi allo stesso posto in tempi diversi"}
A $t=0$ due carrelli partono dalle coordinate $0$ e $10\,\mathrm m$, con velocità rispettivamente $2$ e $3\,\mathrm{m/s}$ nel verso positivo. Il primo passa da $x=20\,\mathrm m$ dopo $10\,\mathrm s$, il secondo dopo $\dfrac{10}{3}\,\mathrm s$. Entrambi attraversano quel punto, in istanti differenti. Uguagliando le leggi orarie si ottiene $2t=10+3t$, da cui $t=-10\,\mathrm s$. Il risultato appartiene solo al prolungamento delle rette prima della partenza. La separazione dopo la partenza è $10+t$ in metri, quindi cresce per tutto l'intervallo osservato.
:::

:::esempio{titolo="Il tratto utile in un inseguimento"}
Su una pista, un carrello $A$ passa per l'origine a $t=0$ e mantiene $3\,\mathrm{m/s}$. Il carrello $B$ attende fermo all'origine e parte a $t=2\,\mathrm{s}$ con $5\,\mathrm{m/s}$, ma si ferma a $t=4\,\mathrm{s}$ su una piattaforma. Le due leggi $x_A=3t$ e $x_B=5(t-2)$, espresse in metri, si uguagliano a $t=5\,\mathrm{s}$. Questo valore prolungava la legge di $B$ oltre il momento in cui si ferma. A $t=4\,\mathrm{s}$, $B$ si trova invece a $10\,\mathrm{m}$ e $A$ è già a $12\,\mathrm{m}$.

Fra $2$ e $4\,\mathrm{s}$ il distacco passa da $6$ a $2\,\mathrm{m}$ con pendenza costante, quindi resta positivo in tutto il tratto. Dopo $4\,\mathrm{s}$ si confronta $x_A$ con la coordinata fissa $10\,\mathrm{m}$. L'equazione $3t=10$ dà $t=\dfrac{10}{3}\,\mathrm{s}$, precedente all'inizio della sosta. I due carrelli condividono l'origine all'istante iniziale e dopo la partenza non si incontrano. La verifica del dominio va ripetuta per ogni tratto, perché cambiano sia la pendenza sia le equazioni valide.

::grafico{f="3*x;5*min(max(0,x-2),2)" xmin=0 xmax=6 ymin=0 ymax=20 punti="2,0,pieno;4,10,pieno;4,12,pieno" segmenti="4,10,4,12" legenda="A;B" nomi="t (s),x (m)" titolo="Alla sosta di B dopo 4 s, A ha già 2 m di vantaggio. Le leggi valide dopo la partenza di B non si intersecano."}
:::

## Moti a tratti

:::osservazione{#tratti titolo="Un intervallo per ogni velocità"}
Quando la velocità è costante a tratti, in ogni tratto si moltiplica la velocità per la durata effettiva, poi si sommano gli spostamenti con i loro segni. La posizione alla fine di un tratto è la posizione iniziale del successivo. Nel grafico velocità-tempo lo spostamento del tratto corrisponde all'area con segno di un rettangolo. La base misura il tempo e l'altezza misura la velocità, quindi il prodotto ha unità di lunghezza. Un rettangolo sotto l'asse dei tempi produce uno spostamento negativo. Per ricavare la distanza percorsa si sommano i moduli delle aree.
:::

:::esempio{titolo="Due rettangoli sopra e sotto l'asse"}
Un veicolo mantiene $v_1=4\,\mathrm{m/s}$ per $3\,\mathrm{s}$ e poi $v_2=-2\,\mathrm{m/s}$ per $4\,\mathrm{s}$. I contributi sono $\Delta x_1=12\,\mathrm{m}$ e $\Delta x_2=-8\,\mathrm{m}$, quindi $\Delta x=4\,\mathrm{m}$. La distanza percorsa è $20\,\mathrm{m}$. Essendo trascorsi $7\,\mathrm{s}$, la velocità media è $\dfrac{4}{7}\,\mathrm{m/s}$ e la rapidità media è $\dfrac{20}{7}\,\mathrm{m/s}$. Il segno positivo di $v_m$ è coerente con lo spostamento totale.

::grafico{linee="0,4 3,4;3,-2 7,-2" segmenti="3,0,3,4;3,0,3,-2;7,0,7,-2" etichette="1,2.15,+12 m;4.6,-1.23,−8 m" xmin=0 xmax=7 ymin=-3 ymax=5 nomi="t (s),v (m/s)" titolo="L'area del primo rettangolo è +12 m. Il secondo rettangolo contribuisce con −8 m."}
:::

:::osservazione{#media-tratti titolo="Media su distanze o tempi uguali"}
Su due tratti di uguale durata $\tau$ e velocità con segno $v_1,v_2$, la velocità media è $\dfrac{v_1\tau+v_2\tau}{2\tau}=\dfrac{v_1+v_2}{2}$. Su due tratti di uguale distanza $d$ percorsi con rapidità positive $u_1,u_2$, le durate valgono invece $\dfrac{d}{u_1}$ e $\dfrac{d}{u_2}$. La rapidità media è
$$
\frac{2d}{\frac{d}{u_1}+\frac{d}{u_2}}
=\frac{2u_1u_2}{u_1+u_2}.
$$
Per due tratti lunghi $100\,\mathrm{m}$ percorsi a $2$ e $4\,\mathrm{m/s}$, il primo dura $50\,\mathrm{s}$ e il secondo $25\,\mathrm{s}$. Si ottengono $\dfrac{200}{75}\,\mathrm{m/s}$, circa $2{,}67\,\mathrm{m/s}$. Il valore è più vicino a $2\,\mathrm{m/s}$ perché a quella rapidità si trascorrono due terzi del tempo.
:::

:::esempio{titolo="Semaforo incluso nella velocità media"}
Un ciclista procede per $40\,\mathrm s$ a $5\,\mathrm{m/s}$, resta fermo per $10\,\mathrm s$ e poi prosegue nello stesso verso per $20\,\mathrm s$ a $2\,\mathrm{m/s}$. Lo spostamento è $200+0+40=240\,\mathrm m$. La velocità media sull'intera osservazione vale $\dfrac{240}{70}\,\mathrm{m/s}=\dfrac{24}{7}\,\mathrm{m/s}$. La sosta entra nella durata perché l'intervallo richiesto la comprende. Dividere per $60\,\mathrm s$ darebbe $4\,\mathrm{m/s}$, che risponde invece a una media limitata ai tempi di marcia. Sul grafico della posizione la sosta occupa un tratto orizzontale lungo $10\,\mathrm s$, con la coordinata ferma a $200\,\mathrm m$.

La tabella associa a ogni istante di cambio la coordinata raggiunta. Fra $40$ e $50\,\mathrm s$ due righe consecutive hanno la stessa posizione. La variazione di coordinata è nulla mentre la durata cresce di dieci secondi. Il grafico mostra come lo stesso punto finale risulti dalla somma di due tratti crescenti e della sosta.

| Istante (s) | Posizione (m) |
| ---: | ---: |
| 0 | 0 |
| 40 | 200 |
| 50 | 200 |
| 70 | 240 |

::grafico{linee="0,0 40,200 50,200 70,240" xmin=0 xmax=74 ymin=0 ymax=260 punti="0,0,pieno;40,200,pieno;50,200,pieno;70,240,pieno" etichette="41,206,200 m" nomi="t (s),x (m)" titolo="La posizione è costante da 40 a 50 s. Il tratto finale ha pendenza 2 m/s."}
:::
