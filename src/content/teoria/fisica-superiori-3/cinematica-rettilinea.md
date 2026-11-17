---
titolo: "Cinematica rettilinea"
sommario: "Posizione, velocità e accelerazione. Grafici, leggi orarie, frenate e moti a tratti."
---

## Posizione e spostamento

:::definizione{#posizione titolo="Coordinata e intervallo di tempo"}
Per descrivere il moto su una retta fissiamo un'origine, un verso positivo e un orologio. La **posizione** $x(t)$ è la coordinata del punto materiale al tempo $t$. Se si sposta l'origine senza ruotare l'asse, tutte le coordinate cambiano della stessa quantità. La differenza tra due coordinate, invece, resta uguale.

Tra gli istanti $t_i$ e $t_f>t_i$, lo **spostamento** è $\Delta x=x(t_f)-x(t_i)$ e il tempo trascorso è $\Delta t=t_f-t_i$. Il segno di $\Delta x$ dice da quale parte della posizione iniziale si trova il punto alla fine. La distanza percorsa somma invece la lunghezza effettiva dei tratti. Un punto va da $x=2\,\mathrm m$ a $x=9\,\mathrm m$ e torna a $x=5\,\mathrm m$. Lo spostamento totale vale $3\,\mathrm m$ e la distanza percorsa è $7+4=11\,\mathrm m$.

Quando l'asse viene orientato al contrario, spostamento, velocità e accelerazione cambiano segno. La distanza e la durata non dipendono da questa scelta. Nei conti basta fissare il verso all'inizio e mantenerlo fino a quando si interpreta il risultato.
:::

::grafico{curve="t,2+3.5*t,0,2;t,13-2*t,2,4" punti="0,2,pieno;2,9,pieno;4,5,pieno" xmin=-0.2 xmax=4.4 ymin=0 ymax=10 nomi="t (s),x (m)" titolo="A 2 s il verso cambia. La distanza percorsa è 11 m e lo spostamento finale è 3 m"}

:::esempio{titolo="Lo stesso moto da due origini"}
Un sensore A registra il passaggio di un carrello da $x=3\,\mathrm m$ a $x=11\,\mathrm m$ in $4\,\mathrm s$. Il sensore B ha l'origine in $x=5\,\mathrm m$ e usa lo stesso verso positivo. Nel suo riferimento il carrello va da $x'=-2\,\mathrm m$ a $x'=6\,\mathrm m$. Le coordinate dei due estremi cambiano di $-5\,\mathrm m$ ciascuna. Sottraendo le coordinate finali e iniziali si trova invece $8\,\mathrm m$ in entrambi i casi, quindi la velocità media è sempre $2\,\mathrm{m/s}$. Se B orienta il suo asse nel verso opposto, si ottengono $x'_i=2\,\mathrm m$ e $x'_f=-6\,\mathrm m$. La velocità media diventa $-2\,\mathrm{m/s}$ e descrive lo stesso moto con la convenzione di segno del sensore B.

::grafico{curve="t,3+2*t,0,4;t,-2+2*t,0,4;t,2-2*t,0,4" legenda="x_A;x_B^{(+)};x_B^{(-)}" punti="0,3,pieno;0,-2,pieno;0,2,pieno;4,11,pieno;4,6,pieno;4,-6,pieno" xmin=0 xmax=4.55 ymin=-8 ymax=12 nomi="t (s),x (m)" titolo="Le tre rette descrivono un solo moto. Invertendo l'asse si inverte la pendenza."}
:::

## Velocità media e istantanea

:::definizione{#velocita titolo="Variazione della posizione"}
La **velocità media** è $v_m=\dfrac{\Delta x}{\Delta t}$. In un grafico posizione-tempo corrisponde alla pendenza del segmento che unisce i due punti registrati. La **rapidità media** usa la distanza percorsa al numeratore. Per un percorso di andata e ritorno la velocità media è zero, mentre la rapidità media è positiva.

La **velocità istantanea** si ottiene considerando intervalli sempre più piccoli attorno all'istante studiato, quando questo processo dà un unico valore. Geometricamente è la pendenza della tangente al grafico di $x(t)$ in quell'istante. Se il grafico ha un angolo, la pendenza del tratto a sinistra e quella del tratto a destra possono essere diverse. Un modello a spigolo descrive bene le posizioni prima e dopo una manovra rapida, ma non assegna un'unica velocità all'istante ideale del cambio.

Consideriamo $x(t)=2t^2$, con $x$ in metri e $t$ in secondi. Per valutare la pendenza a $t=1\,\mathrm s$ si può usare il rapporto da $1$ a $1+h$:
$$
\frac{x(1+h)-x(1)}h
=\frac{2(1+h)^2-2}h=4+2h.
$$
Per $h$ sempre più vicino a zero il rapporto si avvicina a $4\,\mathrm{m/s}$. Lasciare $h$ piccolo ma diverso da zero evita di dividere per zero.
:::

::grafico{f="2*x^2;4*x-2" punti="1,2,pieno" xmin=0 xmax=2 ymin=0 ymax=8.5 nomi="t (s),x (m)" titolo="La tangente nel punto con t uguale a 1 s ha pendenza 4 m/s"}

:::esempio{titolo="Stimare la velocità da un campionamento"}
Un sensore registra posizioni di $4\,\mathrm m$, $9\,\mathrm m$ e $16\,\mathrm m$ ai tempi $2\,\mathrm s$, $3\,\mathrm s$ e $4\,\mathrm s$. La pendenza del tratto precedente a $3\,\mathrm s$ vale $(9-4)\,\mathrm{m/s}=5\,\mathrm{m/s}$. La pendenza del tratto successivo vale $(16-9)\,\mathrm{m/s}=7\,\mathrm{m/s}$. Usando i due punti agli estremi si ottiene la stima centrata $\dfrac{16-4}{4-2}\,\mathrm{m/s}=6\,\mathrm{m/s}$. Nel modello con accelerazione costante le velocità cambiano linearmente, quindi la media sull'intervallo coincide con il valore all'istante centrale. Per un moto qualsiasi il campionamento da solo fornisce solo velocità medie. Una fermata o un cambio di verso tra due letture potrebbe restare invisibile. Per decidere quanto è affidabile la stima istantanea servono misure più ravvicinate o un modello del moto.

Un altro fotogramma a $t=3{,}5\,\mathrm s$ dà la posizione $12{,}4\,\mathrm m$ con incertezza $0{,}2\,\mathrm m$. Il modello $x=t^2$ prevede $12{,}25\,\mathrm m$. L'interpolazione rettilinea tra $3$ e $4\,\mathrm s$ prevede $12{,}5\,\mathrm m$. Entrambe le previsioni rientrano nell'intervallo dichiarato. Il fotogramma aggiuntivo migliora la risoluzione temporale. La precisione della misura lascia ancora compatibili entrambi i modelli su questo breve intervallo.

Se ciascuna lettura agli estremi, a $2\,\mathrm s$ e $4\,\mathrm s$, ha errore massimo di posizione di $0{,}2\,\mathrm m$, lo spostamento stimato può sbagliare al massimo di $0{,}4\,\mathrm m$. L'effetto più grande si ha con una lettura in eccesso e l'altra in difetto. Su $2\,\mathrm s$ l'errore nella velocità media può quindi raggiungere $0{,}2\,\mathrm{m/s}$. Un errore di azzeramento comune al sensore si eliminerebbe nella differenza. L'incertezza riguarda la misura della velocità media. Per identificarla con la velocità istantanea occorre anche il modello.

::grafico{f="x^2" curve="t,6*t-8,2,4;t,6*t-9,2.3,3.88" legenda="\text{Moto};\text{Secante};\text{Tangente}" punti="2,4,pieno;3,9,pieno;4,16,pieno" segmenti="3,3,3,9" xmin=1.8 xmax=4.3 ymin=2 ymax=18.5 nomi="t (s),x (m)" titolo="La secante agli estremi è parallela alla tangente all'istante centrale."}
:::

## Moto uniforme

:::teorema{#uniforme titolo="Legge oraria a velocità costante"}
A velocità costante, intervalli di tempo uguali producono spostamenti uguali. Se $x_0$ è la posizione a $t_0$, allora
$$
x(t)=x_0+v(t-t_0).
$$
Nel grafico $x$ in funzione di $t$, la pendenza è $v$. A velocità negativa la retta scende, perché la coordinata diminuisce. Una retta parallela all'asse del tempo rappresenta il riposo. L'intercetta sull'asse verticale coincide con $x_0$ soltanto se $t_0=0$.

Per individuare l'incontro di due punti si scrivono entrambe le leggi orarie nello stesso riferimento e con lo stesso orologio. Si uguagliano poi le coordinate. Se $x_A(t)=4+3t$ e $x_B(t)=22-t$, si ottiene $4t=18$ e quindi $t=4{,}5\,\mathrm s$. Sostituire questo istante in entrambe le equazioni restituisce $17{,}5\,\mathrm m$. Il controllo evita di confondere un incontro nello spazio con due passaggi nella stessa posizione a tempi differenti.
:::

::grafico{f="4+3*x;22-x" punti="4.5,17.5,pieno" xmin=0 xmax=6 ymin=0 ymax=26 nomi="t (s),x (m)" titolo="L'intersezione indica la stessa posizione nello stesso istante"}

:::osservazione{#moto-a-tratti titolo="Tratti successivi"}
Se il moto ha più tratti, ogni tratto ha la propria durata e i propri dati iniziali. Il secondo tratto riparte dalla posizione raggiunta nel primo. Per tre secondi a $4\,\mathrm{m/s}$ si percorrono $12\,\mathrm m$. Nei due secondi successivi con velocità $-2\,\mathrm{m/s}$ lo spostamento è $-4\,\mathrm m$. Il risultato totale è $8\,\mathrm m$, dunque la velocità media è $1{,}6\,\mathrm{m/s}$. La media aritmetica delle due velocità vale invece $1\,\mathrm{m/s}$ perché assegna loro lo stesso peso, pur essendo mantenute per durate diverse.

Quando una legge oraria usa il tempo dal cambio di tratto, il secondo tratto comincia con $t-t_1$, dove $t_1$ è l'istante del cambio. Una soluzione ottenuta con quel ramo rappresenta un evento solo se il tempo calcolato appartiene al suo intervallo.
:::

:::esempio{titolo="Durate diverse su distanze uguali"}
Una ciclista percorre $600\,\mathrm m$ a $6\,\mathrm{m/s}$, poi altri $600\,\mathrm m$ nello stesso verso a $3\,\mathrm{m/s}$. Nel primo tratto impiega $\dfrac{600}{6}\,\mathrm s=100\,\mathrm s$, nel secondo $\dfrac{600}{3}\,\mathrm s=200\,\mathrm s$. In tutto percorre $1200\,\mathrm m$ in $300\,\mathrm s$, dunque la velocità media vale $4\,\mathrm{m/s}$. La media aritmetica delle due velocità sarebbe $4{,}5\,\mathrm{m/s}$ e corrisponderebbe a tratti percorsi per tempi uguali. A parità di distanza, il tratto più lento occupa più tempo. Se la ciclista percorresse il secondo tratto in senso opposto, ritornerebbe alla partenza dopo $300\,\mathrm s$. La rapidità media resterebbe $4\,\mathrm{m/s}$, mentre la velocità media sarebbe zero.
:::

:::esempio{titolo="Un incontro durante una sosta"}
Il carrello A parte da $2\,\mathrm m$ e avanza a $4\,\mathrm{m/s}$ fino a $3\,\mathrm s$, quando raggiunge $14\,\mathrm m$. Resta fermo fino a $6\,\mathrm s$ e poi torna indietro a $-2\,\mathrm{m/s}$. Il carrello B segue $x_B(t)=26-3t$ in unità SI. Uguagliando $2+4t$ a $x_B(t)$ si ottiene $t=\dfrac{24}{7}\,\mathrm s$. L'istante supera la durata del primo tratto di A, quindi i due carrelli non si incontrano in quel tratto.

Durante la sosta si pone $x_A=14$ e si ricava $t=4\,\mathrm s$, che appartiene all'intervallo della sosta. Al ritorno A segue $x_A=26-2t$. Uguagliare a $x_B$ dà $t=0$, che è fuori dal ramo. L'unico incontro avviene a quattro secondi, con A fermo. Verificare ogni intervallo permette di scartare anche l'apparente secondo incontro ottenuto prolungando la retta del ritorno.

::grafico{f="2+4*x-2*((x-3)+abs(x-3))-((x-6)+abs(x-6));26-3*x" legenda="x_A;x_B" punti="3,14,pieno;4,14,pieno;6,14,pieno" segmenti="4,0,4,14" etichette="4.12,14.97,I" xmin=0 xmax=8.4 ymin=0 ymax=26.9 nomi="t (s),x (m)" titolo="A si ferma a 3 s e riparte a 6 s. L'intersezione I è a 4 s, durante la sosta."}
:::

## Accelerazione

:::definizione{#accelerazione titolo="Variazione della velocità"}
L'**accelerazione media** sull'intervallo è $a_m=\dfrac{v_f-v_i}{t_f-t_i}$. La sua unità è $\mathrm{m/s^2}$, cioè una variazione di metri al secondo per ogni secondo. L'accelerazione istantanea è la pendenza della tangente al grafico velocità-tempo. Da $v_i=4\,\mathrm{m/s}$ a $v_f=-2\,\mathrm{m/s}$ in $3\,\mathrm s$ si ricava $a_m=-2\,\mathrm{m/s^2}$. La velocità cambia di segno all'interno dell'intervallo se è continua, ma il suo valore finale non specifica in quale istante passa per zero.

Il segno dell'accelerazione descrive come cambia la velocità orientata. Se $v$ e $a$ hanno lo stesso segno, il modulo di $v$ cresce. Se hanno segni opposti, il modulo diminuisce. Con $v<0$ e $a<0$, il punto accelera in modulo verso il lato negativo. Un'istantanea con $v=0$ può corrispondere a un cambio di verso con accelerazione non nulla.
:::

::grafico{f="4-2*x" punti="2,0,pieno;3,-2,pieno" xmin=0 xmax=3.3 ymin=-3 ymax=5 nomi="t (s),v (m/s)" titolo="Prima di 2 s la rapidità diminuisce. Poi cresce nel verso negativo"}

:::esempio{titolo="Accelerazione costante da tre posizioni"}
Per un carrello vale $x(0)=0\,\mathrm m$. Due fotografie scattate dopo $1\,\mathrm s$ e $2\,\mathrm s$ danno posizioni $7\,\mathrm m$ e $20\,\mathrm m$. I due spostamenti di un secondo valgono $7\,\mathrm m$ e $13\,\mathrm m$, quindi le velocità medie sono $7\,\mathrm{m/s}$ e $13\,\mathrm{m/s}$. Se l'accelerazione è costante, queste sono le velocità agli istanti centrali $0{,}5\,\mathrm s$ e $1{,}5\,\mathrm s$. La differenza di $6\,\mathrm{m/s}$ maturata in $1\,\mathrm s$ dà $a=6\,\mathrm{m/s^2}$. Tornando di mezzo secondo fino a $t=0$ si sottraggono $3\,\mathrm{m/s}$ e si trova $v_0=4\,\mathrm{m/s}$. Con tali dati la legge oraria riproduce entrambe le fotografie. Una quarta fotografia permetterebbe di controllare la validità del modello su un nuovo intervallo.

Il modello ricavato dalle prime tre posizioni è $x(t)=4t+3t^2$ in unità SI. Supponiamo che la quarta foto a $t=3\,\mathrm s$ dia $38{,}7\,\mathrm m$ con incertezza $0{,}1\,\mathrm m$. In questa verifica si prendono come riferimento per il modello le letture precedenti.

| $t$ (s) | $x$ misurata (m) | $x$ prevista (m) |
| ---: | ---: | ---: |
| 0 | 0 | 0 |
| 1 | 7 | 7 |
| 2 | 20 | 20 |
| 3 | $38{,}7\pm0{,}1$ | 39 |

Il modello prevede $39\,\mathrm m$ per la nuova misura. Lo scarto di $0{,}3\,\mathrm m$ supera l'incertezza dichiarata. Se gli istanti sono corretti e si considerano esatte le letture precedenti, la quarta foto è incompatibile con l'estrapolazione. Verificare gli orologi e aggiungere altre misure aiuta a distinguere un errore di tempo da una variazione dell'accelerazione.

::grafico{f="4*x+3*x^2" legenda="x=4t+3t^2" punti="3,38.7,pieno;3,39,vuoto" linee="3,38.6 3,38.8;2.994,38.6 3.006,38.6;2.994,38.8 3.006,38.8" etichette="3.012,38.72,38,7 m;2.964,39.09,39 m" xmin=2.93 xmax=3.07 ymin=37.5 ymax=40.6 nomi="t (s),x (m)" titolo="Vicino a 3 s il modello passa sopra la barra d'incertezza della quarta lettura."}
:::

## Leggi del moto uniformemente accelerato

:::teorema{#uniformemente-accelerato titolo="Posizione e velocità con accelerazione costante"}
Per accelerazione costante, con $t$ misurato dall'inizio del tratto, valgono
$$
v=v_0+at,\qquad x=x_0+v_0t+\tfrac12at^2,\qquad
v^2=v_0^2+2a(x-x_0).
$$
La prima relazione traduce l'incremento di velocità, che in $t$ secondi è $at$. Per la seconda si osserva che la velocità varia linearmente e ha valore medio $\dfrac{v_0+v}{2}$. Moltiplicando per $t$ e sostituendo $v=v_0+at$ si ottiene lo spostamento. Infine, moltiplicando $(v-v_0)=at$ per $(v+v_0)$ e usando $(v+v_0)t=2(x-x_0)$ si ottiene la relazione senza tempo.

Nell'ultima equazione appare $v^2$. Una radice quadrata determina il modulo ma non il segno. Per esempio, un corpo lanciato verso l'alto può attraversare la stessa quota mentre sale e mentre scende. Per distinguere i due eventi occorrono il tempo o altre indicazioni sul verso.

Per una frenata da $v_0=20\,\mathrm{m/s}$ a $v=0$, con accelerazione $-5\,\mathrm{m/s^2}$, il tempo di frenata è $4\,\mathrm s$ e lo spazio è $40\,\mathrm m$. Se prima della frenata passa un secondo di reazione a velocità costante, si aggiungono altri $20\,\mathrm m$. Dopo l'arresto il modello di frenata va sostituito con il tratto a riposo, se il veicolo resta fermo.
:::

::grafico{curve="t,20,0,1;t,25-5*t,1,5" area="20;0;0;1|25-5*x;0;1;5" segmenti="1,0,1,20;5,0,6,0" punti="1,20,pieno;5,0,pieno" xmin=0 xmax=6.2 ymin=-0.5 ymax=24 nomi="t (s),v (m/s)" titolo="Prima della frenata c'è il rettangolo del tempo di reazione. Il triangolo rappresenta la frenata"}

:::esempio{titolo="Due passaggi alla stessa quota"}
Una pallina parte dal suolo con velocità $15\,\mathrm{m/s}$ verso l'alto, con $g=10\,\mathrm{m/s^2}$. La quota in metri è $x(t)=15t-5t^2$ quando il tempo è espresso in secondi. Per sapere quando raggiunge $10\,\mathrm m$ si risolve
$$
15t-5t^2=10,\qquad (t-1)(t-2)=0.
$$
I due passaggi avvengono a $t=1\,\mathrm s$ e $t=2\,\mathrm s$. Dalla legge della velocità $v(t)=15-10t$ si ottengono rispettivamente $5\,\mathrm{m/s}$ verso l'alto e $-5\,\mathrm{m/s}$ nel verso scelto. Alla stessa quota i moduli sono uguali, mentre la pendenza della curva cambia segno. Se la pallina viene intercettata al primo passaggio, il modello di volo termina lì e la seconda radice descrive solo la traiettoria che avrebbe seguito senza l'intercettazione.

::grafico{curve="t,15*t-5*t^2,0,3" punti="1,10,pieno;2,10,pieno;1.5,11.25,pieno" segmenti="1,0,1,10;2,0,2,10;1,10,2,10" etichette="0.81,10.53,P;2.16,10.05,Q;1.52,11.8,A" xmin=0 xmax=3.32 ymin=0 ymax=12.8 nomi="t (s),x (m)" titolo="La quota è la stessa in P e Q. La tangente sale in P e scende in Q."}
:::

## Leggere i grafici e la caduta libera

:::osservazione{#grafici-caduta titolo="Pendenze e aree"}
Nel grafico velocità-tempo, l'**area orientata** tra la curva e l'asse del tempo restituisce lo spostamento. L'area sopra l'asse è positiva e quella sotto l'asse è negativa. Per la distanza percorsa si sommano i moduli delle aree. Se $v$ diminuisce linearmente da $4$ a $-2\,\mathrm{m/s}$ in $3\,\mathrm s$, passa per zero a $2\,\mathrm s$. Il triangolo positivo ha area $4\,\mathrm m$, quello negativo $-1\,\mathrm m$. Lo spostamento vale $3\,\mathrm m$ e la distanza $5\,\mathrm m$.

Vicino al suolo e trascurando l'aria, un corpo in **caduta libera** accelera verso il basso con modulo $g$. Se l'asse punta verso l'alto, $a=-g$. Per un corpo lasciato da fermo all'altezza $h$, si pone $y(0)=h$ e $v_0=0$. L'equazione $0=h-\tfrac12gt^2$ dà $t=\sqrt{\dfrac{2h}{g}}$ scegliendo la radice positiva. Il modello vale fino al contatto con il suolo.

Due oggetti lasciati cadere dalla stessa quota con le stesse condizioni iniziali arrivano insieme nel modello. Se uno parte un secondo dopo, invece, al secondo rilascio il primo ha già acquistato velocità e ha una quota più bassa. Da quel momento i due hanno la stessa accelerazione e la velocità relativa resta costante. Confrontare soltanto le accelerazioni non basta per concludere che la separazione rimanga costante.
:::

:::esempio{titolo="Area con segno quando la velocità si inverte"}
Su una guida, la velocità varia linearmente da $6\,\mathrm{m/s}$ a $-2\,\mathrm{m/s}$ in $4\,\mathrm s$. Poiché perde $2\,\mathrm{m/s}$ ogni secondo, si annulla al terzo secondo. Il triangolo sopra l'asse ha base $3\,\mathrm s$ e altezza $6\,\mathrm{m/s}$, pari a uno spostamento di $9\,\mathrm m$. Il triangolo sotto l'asse ha base $1\,\mathrm s$ e altezza di modulo $2\,\mathrm{m/s}$, pari a uno spostamento di $-1\,\mathrm m$. Lo spostamento totale vale $8\,\mathrm m$ e la distanza percorsa $10\,\mathrm m$. Si ottiene ancora $8\,\mathrm m$ moltiplicando la media delle velocità iniziale e finale per la durata, poiché l'andamento è lineare. Per ricavare la distanza occorre invece spezzare il calcolo dove la velocità si annulla.

L'area dà la posizione finale quando si conosce la coordinata iniziale. Se il punto parte da $x(0)=2\,\mathrm m$, termina a $10\,\mathrm m$. All'inversione la coordinata è $11\,\mathrm m$, perché fino a quell'istante si è accumulato il solo triangolo positivo. La posizione raggiunge quindi un massimo a $t=3\,\mathrm s$ con accelerazione ancora costante.

::grafico{curve="t,6-2*t,0,4" area="6-2*x;0;0;3|0;6-2*x;3;4" punti="0,6,pieno;3,0,pieno;4,-2,pieno" segmenti="4,0,4,-2" etichette="0.91,1.25,+9 m;3.42,-0.38,−1 m" xmin=0 xmax=4.23 ymin=-3 ymax=7 nomi="t (s),v (m/s)" titolo="I due triangoli contribuiscono allo spostamento con 9 m e −1 m."}
:::
