---
titolo: Posizione, spostamento e moto rettilineo uniforme
sommario: Descrivere il movimento lungo una retta mediante posizioni, tempi, velocità, leggi orarie e grafici, e risolvere problemi di incontro.
---

## Il sistema di riferimento

:::definizione{#riferimento titolo="Sistema di riferimento"}
Per descrivere il movimento di un corpo occorre specificare rispetto a che cosa si osservano le sue posizioni. Un passeggero seduto è fermo rispetto al sedile dell'autobus; rispetto alla strada si muove insieme all'autobus.

Un **sistema di riferimento** comprende le scelte necessarie a individuare le posizioni e a misurare i tempi. Per un movimento lungo una retta si scelgono un punto come origine, un verso positivo dell'asse e un'unità di lunghezza. Si sceglie inoltre un istante da indicare con $t=0$, e si misura il tempo con un orologio.

Per esempio, lungo una strada rettilinea l'origine può essere una fermata, il verso positivo quello verso la piazza e l'istante iniziale la partenza di una persona. Tutte le posizioni e tutti gli istanti del problema si riferiscono a queste scelte.
:::

:::definizione{#posizione-e-traiettoria titolo="Posizione e traiettoria"}
La **posizione** $x$ indica dove si trova il corpo rispetto all'origine. Se il verso positivo è verso destra, $x=5\,\mathrm{m}$ indica un punto a $5\,\mathrm{m}$ dall'origine verso destra; $x=-3\,\mathrm{m}$ indica un punto a $3\,\mathrm{m}$ verso sinistra.

La **traiettoria** è l'insieme dei punti occupati dal corpo durante il movimento. Il moto è **rettilineo** quando la traiettoria è contenuta in una retta. Per studiare un carrello lungo una guida si può seguirne un punto, trascurando le dimensioni del carrello rispetto alle distanze considerate.

La posizione dipende dall'origine scelta. Spostando l'origine cambiano i valori delle coordinate, mentre le distanze tra gli stessi punti restano uguali.

::grafico{vettori="-5,0,7,0,x" punti="-3,0,pieno,A;0,0,pieno,O;5,0,pieno,B" etichette="-3,-0.8,−3 m;0,-0.8,0;5,-0.8,5 m" assi=0 uguale=1 xmin=-6 xmax=8 ymin=-2 ymax=2 titolo="La posizione di $A$ è $-3\,\mathrm{m}$ e quella di $B$ è $5\,\mathrm{m}$ rispetto all'origine $O$."}
:::

## Spostamento e distanza percorsa

:::definizione{#spostamento titolo="Spostamento lungo una retta"}
Per sapere quanto è cambiata la posizione si confrontano la posizione finale $x_f$ e quella iniziale $x_i$. Lo **spostamento** lungo l'asse è la differenza
$$
\Delta x=x_f-x_i.
$$
Il simbolo $\Delta x$, letto delta x, indica la variazione della posizione. Se $x_i=2\,\mathrm{m}$ e $x_f=9\,\mathrm{m}$, lo spostamento è $7\,\mathrm{m}$. Se il corpo passa da $9\,\mathrm{m}$ a $2\,\mathrm{m}$, lo spostamento è $-7\,\mathrm{m}$.

Il segno descrive il verso dello spostamento complessivo. Il suo modulo è $|\Delta x|$, cioè la distanza tra la posizione iniziale e quella finale. Per calcolare lo spostamento bastano questi due estremi, anche se il corpo ha cambiato verso durante il percorso.
:::

:::definizione{#distanza-percorsa titolo="Distanza percorsa"}
La **distanza percorsa** $s$ è la lunghezza complessiva del percorso. Si ottiene sommando le lunghezze dei singoli tratti, considerate positive. Se il corpo percorre la retta senza cambiare verso, vale $s=|\Delta x|$.

Una persona parte da $x=0$, arriva a $x=6\,\mathrm{m}$ e torna a $x=2\,\mathrm{m}$. Il primo tratto è lungo $6\,\mathrm{m}$ e il secondo $4\,\mathrm{m}$, quindi
$$
s=6\,\mathrm{m}+4\,\mathrm{m}=10\,\mathrm{m},
\qquad
\Delta x=2\,\mathrm{m}-0\,\mathrm{m}=2\,\mathrm{m}.
$$
Il corpo ha percorso $10\,\mathrm{m}$ e si trova $2\,\mathrm{m}$ più avanti rispetto alla partenza. Se tornasse al punto iniziale, lo spostamento sarebbe zero e la distanza percorsa sarebbe positiva.
:::

## Gli intervalli di tempo

:::definizione{#intervallo-di-tempo titolo="Istante e durata"}
Un **istante** è un valore letto sull'orologio scelto per il problema. Un **intervallo di tempo**, o durata, è la differenza tra due istanti successivi:
$$
\Delta t=t_f-t_i.
$$
Se un movimento inizia a $t_i=4\,\mathrm{s}$ e termina a $t_f=11\,\mathrm{s}$, dura $7\,\mathrm{s}$. L'istante finale è $11\,\mathrm{s}$, mentre il tempo impiegato nel movimento è $7\,\mathrm{s}$.

Le durate usate nei rapporti di velocità sono positive. Le conversioni rispettano le relazioni $1\,\mathrm{min}=60\,\mathrm{s}$ e $1\,\mathrm{h}=3600\,\mathrm{s}$. Una durata di $2\,\mathrm{min}$ e $30\,\mathrm{s}$ vale quindi $150\,\mathrm{s}$. Espressa in minuti vale $2{,}5\,\mathrm{min}$, perché i $30\,\mathrm{s}$ corrispondono a mezzo minuto.
:::

## Velocità media e rapidità media

:::definizione{#velocita-media titolo="Velocità media"}
La **velocità media** lungo un asse confronta lo spostamento con il tempo impiegato. Si definisce mediante
$$
v_m=\frac{\Delta x}{\Delta t},
\qquad \Delta t>0.
$$
La sua unità nel Sistema Internazionale è il metro al secondo, $\mathrm{m/s}$. Uno spostamento di $12\,\mathrm{m}$ in $4\,\mathrm{s}$ dà $v_m=3\,\mathrm{m/s}$. Uno spostamento di $-12\,\mathrm{m}$ nello stesso tempo dà $v_m=-3\,\mathrm{m/s}$.

Il segno della velocità media è quello dello spostamento complessivo, perché la durata è positiva. La velocità media descrive l'intero intervallo considerato; da sola non specifica come si è mosso il corpo in ciascuna parte dell'intervallo.
:::

:::definizione{#rapidita-media titolo="Rapidità media"}
La **rapidità media**, chiamata anche velocità scalare media, è il rapporto tra la distanza percorsa e la durata totale:
$$
u_m=\frac{s}{\Delta t}.
$$
Il simbolo $u_m$ permette qui di distinguerla dalla velocità media con segno. La rapidità media è non negativa. Per un viaggio di andata e ritorno di $20\,\mathrm{m}$ complessivi in $10\,\mathrm{s}$ si ottiene $u_m=2\,\mathrm{m/s}$. Se il punto finale coincide con quello iniziale, la velocità media è invece zero.

Nei percorsi con soste, il tempo totale comprende anche il tempo trascorso da fermi. Per $30\,\mathrm{m}$ percorsi in $20\,\mathrm{s}$ seguiti da una sosta di $10\,\mathrm{s}$, la rapidità media sui $30\,\mathrm{s}$ complessivi è $1\,\mathrm{m/s}$.
:::

:::attenzione{titolo="La media delle velocità"}
La rapidità media non coincide in generale con la media aritmetica delle rapidità nei singoli tratti. Un corpo percorre $12\,\mathrm{m}$ a $2\,\mathrm{m/s}$ e altri $12\,\mathrm{m}$ a $4\,\mathrm{m/s}$. I due tratti durano rispettivamente $6\,\mathrm{s}$ e $3\,\mathrm{s}$, quindi
$$
u_m=\frac{24\,\mathrm{m}}{9\,\mathrm{s}}
=\frac{8}{3}\,\mathrm{m/s}
\approx2{,}67\,\mathrm{m/s}.
$$
La media aritmetica sarebbe $3\,\mathrm{m/s}$. Il corpo trascorre più tempo nel tratto a rapidità minore, quindi i due tratti contribuiscono alla durata in modo diverso.
:::

## Conversioni di velocità

:::teorema{#conversione-velocita titolo="Metri al secondo e chilometri all'ora"}
Poiché un chilometro contiene $1000$ metri e un'ora contiene $3600$ secondi, vale
$$
1\,\mathrm{km/h}
=\frac{1000\,\mathrm{m}}{3600\,\mathrm{s}}
=\frac{1}{3{,}6}\,\mathrm{m/s}.
$$
Pertanto il valore numerico in $\mathrm{km/h}$ si divide per $3{,}6$ per ottenere quello in $\mathrm{m/s}$. Nel passaggio inverso si moltiplica per $3{,}6$.

Per esempio $36\,\mathrm{km/h}=10\,\mathrm{m/s}$ e $5\,\mathrm{m/s}=18\,\mathrm{km/h}$. Una velocità espressa in metri al secondo si combina con tempi in secondi per ottenere spostamenti in metri. Una velocità espressa in chilometri all'ora si combina con tempi in ore per ottenere spostamenti in chilometri.
:::

## Il moto rettilineo uniforme

:::definizione{#moto-uniforme titolo="Moto rettilineo uniforme"}
Un corpo si muove di **moto rettilineo uniforme** se percorre una retta mantenendo costante la velocità. In intervalli di tempo uguali compie spostamenti uguali, con lo stesso verso.

Per esempio, un carrello che avanza di $2\,\mathrm{m}$ ogni secondo ha velocità costante $v=2\,\mathrm{m/s}$. Se procede nel verso negativo dell'asse di $2\,\mathrm{m}$ ogni secondo, la sua velocità è $v=-2\,\mathrm{m/s}$. La velocità con segno rimane costante per tutto l'intervallo in cui si applica il modello.

Un moto reale può essere descritto con questo modello quando le variazioni di velocità nell'intervallo studiato sono trascurabili. Le fasi di partenza e di arresto richiedono una descrizione diversa.
:::

::::teorema{#legge-oraria titolo="Legge oraria del moto uniforme"}
Se all'istante $t_0$ un corpo si trova nella posizione $x_0$ e da quell'istante mantiene la velocità costante $v$, la posizione all'istante $t$ è
$$
x=x_0+v(t-t_0).
$$
La relazione che esprime la posizione in funzione del tempo è chiamata **legge oraria**. Scegliendo $t_0=0$, diventa $x=x_0+vt$.

Un corpo che parte da $x_0=3\,\mathrm{m}$ con $v=2\,\mathrm{m/s}$ si trova a $x=11\,\mathrm{m}$ dopo $4\,\mathrm{s}$. Il prodotto $vt$ dà lo spostamento di $8\,\mathrm{m}$; aggiungendo la posizione iniziale si ottiene la posizione finale.

:::dimostrazione
Si ricava lo spostamento dalla definizione di velocità media. Poiché nel moto uniforme la velocità è costante, la velocità media in qualunque intervallo coincide con $v$. Per $t>t_0$ si ha quindi
$$
v=\frac{x-x_0}{t-t_0}.
$$
Moltiplicando per $t-t_0$ si ottiene $x-x_0=v(t-t_0)$. Aggiungendo $x_0$ ai due membri si ricava la legge oraria.
:::
::::

:::osservazione{#tempo-di-arrivo titolo="Tempo di arrivo"}
Per trovare la durata necessaria a raggiungere una posizione, con velocità costante diversa da zero, si usa
$$
t-t_0=\frac{x-x_0}{v}.
$$
Un corpo che parte da $x_0=10\,\mathrm{m}$ e procede con $v=-2\,\mathrm{m/s}$ raggiunge l'origine dopo $5\,\mathrm{s}$, perché lo spostamento è $-10\,\mathrm{m}$ e il rapporto tra due numeri negativi è positivo. Il risultato deve appartenere all'intervallo in cui il moto considerato è descritto dalla legge oraria.
:::

## I grafici posizione-tempo

:::definizione{#grafico-orario titolo="Grafico posizione-tempo"}
Nel **grafico posizione-tempo** il tempo è sull'asse orizzontale e la posizione su quello verticale. Ogni punto del grafico indica la posizione occupata a un certo istante. La retta $x=x_0+vt$ rappresenta un moto uniforme.

Una retta crescente corrisponde a velocità positiva, una decrescente a velocità negativa. Una retta orizzontale indica posizione costante, quindi il corpo è fermo. L'altezza del grafico a $t=0$ dà $x_0$.

La velocità si ricava da due punti dividendo la variazione di posizione per la variazione di tempo. Per una retta che passa per $(0\,\mathrm{s},3\,\mathrm{m})$ e $(4\,\mathrm{s},11\,\mathrm{m})$ si ottiene $v=2\,\mathrm{m/s}$. Il grafico descrive come cambia la posizione nel tempo; il disegno della traiettoria descrive invece i punti attraversati nello spazio.

::grafico{f="3+2*x" punti="0,3;4,11" segmenti="0,3,4,3;4,3,4,11" xmin=0 xmax=6 ymin=0 ymax=16 nomi="t,x" legenda=0 titolo="Legge oraria $x=3+2t$, con $t$ in secondi e $x$ in metri. In $4\,\mathrm{s}$ la posizione aumenta di $8\,\mathrm{m}$."}

::grafico{f="10-2*x;4" xmin=0 xmax=5 ymin=0 ymax=12 nomi="t,x" legenda="x_A=10-2t;x_B=4" titolo="Tempo in secondi e posizione in metri. Il corpo $A$ si muove nel verso negativo, mentre $B$ resta nella posizione $4\,\mathrm{m}$."}
:::

## Incontri e partenze ritardate

:::teorema{#incontro titolo="Condizione di incontro"}
Due corpi lungo la stessa retta si incontrano quando occupano la **stessa posizione nello stesso istante**. Le loro leggi orarie devono essere scritte rispetto alla stessa origine e allo stesso orologio. L'istante di incontro si trova quindi risolvendo
$$
x_A(t)=x_B(t).
$$
Se $A$ parte da $0$ con velocità $2\,\mathrm{m/s}$ e $B$ parte da $12\,\mathrm{m}$ con velocità $-1\,\mathrm{m/s}$, si ha $2t=12-t$. Perciò $3t=12$ e l'incontro avviene dopo $4\,\mathrm{s}$ nella posizione $8\,\mathrm{m}$. Le leggi sono valide per $t\geq0$, quindi l'istante trovato è ammissibile.

::grafico{f="2*x;12-x" punti="4,8,pieno,I" xmin=0 xmax=6 ymin=0 ymax=14 nomi="t,x" legenda="x_A=2t;x_B=12-t" titolo="Tempo in secondi e posizione in metri. L'intersezione delle rette indica l'incontro a $t=4\,\mathrm{s}$ e $x=8\,\mathrm{m}$."}
:::

:::osservazione{#partenza-ritardata titolo="Partenza ritardata"}
Se un corpo parte all'istante $t_0$, il suo tempo di movimento è $t-t_0$. Un corpo $A$ parte dall'origine a $t=0$ con $v_A=1\,\mathrm{m/s}$. Un corpo $B$ parte dalla stessa origine a $t=3\,\mathrm{s}$ con $v_B=2\,\mathrm{m/s}$. Dopo la partenza di $B$ le leggi sono
$$
x_A=t,
\qquad x_B=2(t-3),
\qquad t\geq3\,\mathrm{s},
$$
con le posizioni in metri e $t$ in secondi. L'equazione $t=2(t-3)$ dà $t=6\,\mathrm{s}$ e $x=6\,\mathrm{m}$. Il secondo corpo ha viaggiato per $3\,\mathrm{s}$, mentre il primo ha viaggiato per $6\,\mathrm{s}$.

Il controllo $6\geq3$ conferma che l'incontro avviene quando entrambe le leggi usate sono valide. La coincidenza iniziale, prima della partenza del secondo corpo, è un evento distinto dall'incontro cercato dopo la partenza.
:::
