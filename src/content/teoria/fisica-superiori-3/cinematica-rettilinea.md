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

::grafico{segmenti="0,2,2,9;2,9,4,5" punti="0,2,pieno;2,9,pieno;4,5,pieno" xmin=-0.2 xmax=4.4 ymin=0 ymax=10 nomi="t,x" titolo="A 2 s il verso cambia. La distanza percorsa è 11 m e lo spostamento finale è 3 m"}

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

::grafico{f="2*x^2;4*x-2" punti="1,2,pieno" xmin=0 xmax=2 ymin=0 ymax=8.5 nomi="t,x" titolo="La tangente nel punto con t uguale a 1 s ha pendenza 4 m/s"}

## Moto uniforme

:::teorema{#uniforme titolo="Legge oraria a velocità costante"}
A velocità costante, intervalli di tempo uguali producono spostamenti uguali. Se $x_0$ è la posizione a $t_0$, allora
$$
x(t)=x_0+v(t-t_0).
$$
Nel grafico $x$ in funzione di $t$, la pendenza è $v$. A velocità negativa la retta scende, perché la coordinata diminuisce. Una retta parallela all'asse del tempo rappresenta il riposo. L'intercetta sull'asse verticale coincide con $x_0$ soltanto se $t_0=0$.

Per individuare l'incontro di due punti si scrivono entrambe le leggi orarie nello stesso riferimento e con lo stesso orologio. Si uguagliano poi le coordinate. Se $x_A(t)=4+3t$ e $x_B(t)=22-t$, si ottiene $4t=18$ e quindi $t=4{,}5\,\mathrm s$. Sostituire questo istante in entrambe le equazioni restituisce $17{,}5\,\mathrm m$. Il controllo evita di confondere un incontro nello spazio con due passaggi nella stessa posizione a tempi differenti.
:::

::grafico{f="4+3*x;22-x" punti="4.5,17.5,pieno" xmin=0 xmax=6 ymin=0 ymax=26 nomi="t,x" titolo="L'intersezione indica la stessa posizione nello stesso istante"}

:::osservazione{#moto-a-tratti titolo="Tratti successivi"}
Se il moto ha più tratti, ogni tratto ha la propria durata e i propri dati iniziali. Il secondo tratto riparte dalla posizione raggiunta nel primo. Per tre secondi a $4\,\mathrm{m/s}$ si percorrono $12\,\mathrm m$. Nei due secondi successivi con velocità $-2\,\mathrm{m/s}$ lo spostamento è $-4\,\mathrm m$. Il risultato totale è $8\,\mathrm m$, dunque la velocità media è $1{,}6\,\mathrm{m/s}$. La media aritmetica delle due velocità vale invece $1\,\mathrm{m/s}$ perché assegna loro lo stesso peso, pur essendo mantenute per durate diverse.

Quando una legge oraria usa il tempo dal cambio di tratto, il secondo tratto comincia con $t-t_1$, dove $t_1$ è l'istante del cambio. Una soluzione ottenuta con quel ramo rappresenta un evento solo se il tempo calcolato appartiene al suo intervallo.
:::

## Accelerazione

:::definizione{#accelerazione titolo="Variazione della velocità"}
L'**accelerazione media** sull'intervallo è $a_m=\dfrac{v_f-v_i}{t_f-t_i}$. La sua unità è $\mathrm{m/s^2}$, cioè una variazione di metri al secondo per ogni secondo. L'accelerazione istantanea è la pendenza della tangente al grafico velocità-tempo. Da $v_i=4\,\mathrm{m/s}$ a $v_f=-2\,\mathrm{m/s}$ in $3\,\mathrm s$ si ricava $a_m=-2\,\mathrm{m/s^2}$. La velocità cambia di segno all'interno dell'intervallo se è continua, ma il suo valore finale non specifica in quale istante passa per zero.

Il segno dell'accelerazione descrive come cambia la velocità orientata. Se $v$ e $a$ hanno lo stesso segno, il modulo di $v$ cresce. Se hanno segni opposti, il modulo diminuisce. Con $v<0$ e $a<0$, il punto accelera in modulo verso il lato negativo. Un'istantanea con $v=0$ può corrispondere a un cambio di verso con accelerazione non nulla.
:::

::grafico{f="4-2*x" punti="2,0,pieno;3,-2,pieno" xmin=0 xmax=3.3 ymin=-3 ymax=5 nomi="t,v" titolo="Prima di 2 s la rapidità diminuisce. Poi cresce nel verso negativo"}

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

::grafico{segmenti="0,20,1,20;1,20,5,0;5,0,6,0" punti="1,20,pieno;5,0,pieno" xmin=0 xmax=6.2 ymin=-1 ymax=24 nomi="t,v" titolo="Prima della frenata c'è il rettangolo del tempo di reazione. Il triangolo rappresenta la frenata"}

## Leggere i grafici e la caduta libera

:::osservazione{#grafici-caduta titolo="Pendenze e aree"}
Nel grafico velocità-tempo, l'**area orientata** tra la curva e l'asse del tempo restituisce lo spostamento. L'area sopra l'asse è positiva e quella sotto l'asse è negativa. Per la distanza percorsa si sommano i moduli delle aree. Se $v$ diminuisce linearmente da $4$ a $-2\,\mathrm{m/s}$ in $3\,\mathrm s$, passa per zero a $2\,\mathrm s$. Il triangolo positivo ha area $4\,\mathrm m$, quello negativo $-1\,\mathrm m$. Lo spostamento vale $3\,\mathrm m$ e la distanza $5\,\mathrm m$.

Vicino al suolo e trascurando l'aria, un corpo in **caduta libera** accelera verso il basso con modulo $g$. Se l'asse punta verso l'alto, $a=-g$. Per un corpo lasciato da fermo all'altezza $h$, si pone $y(0)=h$ e $v_0=0$. L'equazione $0=h-\tfrac12gt^2$ dà $t=\sqrt{2h/g}$ scegliendo la radice positiva. Il modello vale fino al contatto con il suolo.

Due oggetti lasciati cadere dalla stessa quota con le stesse condizioni iniziali arrivano insieme nel modello. Se uno parte un secondo dopo, invece, al secondo rilascio il primo ha già acquistato velocità e ha una quota più bassa. Da quel momento i due hanno la stessa accelerazione e la velocità relativa resta costante. Confrontare soltanto le accelerazioni non basta per concludere che la separazione rimanga costante.
:::
