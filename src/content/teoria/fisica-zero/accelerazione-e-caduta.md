---
titolo: Accelerazione e caduta dei corpi
sommario: Come varia la velocità, come si calcolano posizione e tempo nei moti con accelerazione costante e come si descrivono la frenata, la caduta e il lancio verticale.
---

## La variazione della velocità

:::definizione{#accelerazione-media titolo="Accelerazione media"}
Un corpo può percorrere una strada rettilinea cambiando velocità. Per descrivere questo cambiamento si confrontano la velocità finale e quella iniziale e si considera il tempo trascorso.

L'**accelerazione media** è il rapporto tra la variazione di velocità e l'intervallo di tempo in cui avviene. Indicando con $v_i$ la velocità iniziale, con $v_f$ quella finale e con $\Delta t$ il tempo trascorso, si ha
$$
a_m = \frac{v_f-v_i}{\Delta t},
\qquad \Delta t>0.
$$
Il simbolo $\Delta$ indica una differenza. Le velocità sono componenti lungo un asse orientato, quindi possono essere positive o negative. L'accelerazione si misura in $\mathrm{m/s^2}$, che si legge metri al secondo quadrato. Un'accelerazione di $2\,\mathrm{m/s^2}$ corrisponde a un aumento della velocità di $2\,\mathrm{m/s}$ ogni secondo, se rimane costante.

Per esempio, un carrello passa da $3\,\mathrm{m/s}$ a $11\,\mathrm{m/s}$ in $4\,\mathrm{s}$. La variazione di velocità è $8\,\mathrm{m/s}$, quindi
$$
a_m=\frac{11-3}{4}\,\mathrm{m/s^2}=2\,\mathrm{m/s^2}.
$$
Il dato descrive il cambiamento complessivo nell'intervallo. Per conoscere come varia la velocità durante quei quattro secondi occorrono altre informazioni sul moto.
:::

:::osservazione{#segni titolo="Segni della velocità e dell'accelerazione"}
Il segno della velocità indica il verso del moto. Il segno dell'accelerazione indica il verso della variazione di velocità. Per stabilire se un corpo aumenta o diminuisce la propria rapidità si confrontano la velocità e l’accelerazione nello stesso istante. Le regole seguenti descrivono un intero intervallo quando i due segni rimangono quelli indicati; il solo valore dell’accelerazione media non descrive tutte le variazioni interne all’intervallo.

- Con velocità e accelerazione dello stesso segno, il modulo della velocità aumenta.
- Con velocità e accelerazione di segno opposto, il modulo della velocità diminuisce, fino all'eventuale arresto.

Un carrello che passa da $-2\,\mathrm{m/s}$ a $-8\,\mathrm{m/s}$ in $3\,\mathrm{s}$ ha accelerazione media $-2\,\mathrm{m/s^2}$. Il modulo della velocità passa da $2$ a $8\,\mathrm{m/s}$, quindi la sua rapidità aumenta. Il segno negativo, da solo, non indica una frenata.
:::

## Il moto con accelerazione costante

:::definizione{#accelerazione-costante titolo="Moto uniformemente accelerato"}
Un moto rettilineo è **uniformemente accelerato** quando l'accelerazione rimane costante nell'intervallo considerato. La velocità varia allora della stessa quantità in intervalli di tempo uguali.

Si pone $t=0$ all'inizio dell'intervallo e si indica con $v_0$ la velocità iniziale. Dalla relazione $a=\dfrac{v-v_0}{t}$, per $t>0$, moltiplicando per $t$ e aggiungendo $v_0$ si ricava
$$
v=v_0+at.
$$
La formula vale anche a $t=0$, quando restituisce $v=v_0$. Il prodotto $at$ ha le unità di una velocità, perché $\mathrm{m/s^2}$ moltiplicato per $\mathrm{s}$ dà $\mathrm{m/s}$.

Per esempio, con $v_0=2\,\mathrm{m/s}$ e $a=3\,\mathrm{m/s^2}$, dopo $1$, $2$ e $3\,\mathrm{s}$ le velocità sono rispettivamente $5$, $8$ e $11\,\mathrm{m/s}$. Ogni secondo l'incremento è $3\,\mathrm{m/s}$. Il grafico velocità-tempo è una retta; la sua pendenza misura l'accelerazione.

::grafico{f="2+3*x+0*sqrt(x*(3-x))" punti="0,2,pieno;1,5,pieno;2,8,pieno;3,11,pieno" xmin=-1 xmax=4 ymin=-1 ymax=13 nomi="t,v" legenda="v=2+3t" titolo="Velocità in $\mathrm{m/s}$ e tempo in secondi: la velocità aumenta di $3\,\mathrm{m/s}$ ogni secondo, nell'intervallo da $0$ a $3\,\mathrm{s}$"}
:::

:::osservazione{#tempo-da-velocita titolo="Il tempo necessario per una variazione di velocità"}
Se $a$ è costante e diversa da zero, dalla legge della velocità si ricava
$$
t=\frac{v-v_0}{a}.
$$
Per un corpo che passa da $4\,\mathrm{m/s}$ a $10\,\mathrm{m/s}$ con accelerazione $2\,\mathrm{m/s^2}$, il tempo è $t=\dfrac{10-4}{2}\,\mathrm{s}=3\,\mathrm{s}$. Un tempo negativo descriverebbe un istante precedente all'origine temporale scelta; in un problema che riguarda il moto successivo alla partenza si considerano i tempi non negativi.
:::


:::osservazione{titolo="L'origine del tempo in un intervallo successivo"}
Quando il moto viene studiato a partire da un istante $t_0$ diverso da zero, nelle formule compare il tempo trascorso $t-t_0$. La velocità iniziale $v_0$ e la posizione iniziale $x_0$ si riferiscono entrambe a quell'istante:
$$
v=v_0+a(t-t_0),
\qquad
x=x_0+v_0(t-t_0)+\frac{1}{2}a(t-t_0)^2.
$$
Per esempio, se l'accelerazione comincia quando l'orologio segna $5\,\mathrm{s}$, all'istante $8\,\mathrm{s}$ sono trascorsi tre secondi di moto accelerato. Usare otto secondi descriverebbe un intervallo più lungo di quello assegnato. La scelta di azzerare l'orologio all'inizio del tratto permette di scrivere direttamente $t$ al posto di $t-t_0$; le due descrizioni danno gli stessi risultati se i dati iniziali corrispondono alla stessa situazione fisica.
:::

## La posizione nel moto accelerato

::::teorema{#legge-oraria titolo="Legge oraria con accelerazione costante"}
Se all'istante $t=0$ il corpo ha posizione $x_0$ e velocità $v_0$, e l'accelerazione $a$ è costante, la posizione al tempo $t$ è
$$
x=x_0+v_0t+\frac{1}{2}at^2.
$$
La differenza $x-x_0$ è lo spostamento. Il termine $v_0t$ descrive lo spostamento che si avrebbe mantenendo la velocità iniziale; il termine $\dfrac{1}{2}at^2$ tiene conto della sua variazione.

:::dimostrazione
Si usa il valore medio della velocità durante un intervallo in cui essa varia in modo lineare. In questo caso la velocità media è la media aritmetica dei valori iniziale e finale,
$$
v_m=\frac{v_0+v}{2}.
$$
Infatti, nel grafico velocità-tempo lo spostamento è l'area con segno del trapezio compreso fra la retta e l'asse del tempo. L'area si ottiene moltiplicando la media delle due altezze per la base. Sostituendo $v=v_0+at$, si ha
$$
\begin{aligned}
x-x_0 &= v_m t \\[6pt]
&=\frac{v_0+v_0+at}{2}\,t \\[6pt]
&=v_0t+\frac{1}{2}at^2.
\end{aligned}
$$
Se la velocità cambia segno, si sommano le aree sopra l'asse e si sottraggono quelle sotto; la stessa relazione resta valida per lo spostamento.
:::
::::

:::esempio{titolo="Un carrello che parte già in movimento"}
Un carrello si trova inizialmente in $x_0=1\,\mathrm{m}$, ha velocità $v_0=2\,\mathrm{m/s}$ e accelerazione costante $a=2\,\mathrm{m/s^2}$. Dopo $3\,\mathrm{s}$ si trova in
$$
\begin{aligned}
x&=1\,\mathrm{m}+2\,\mathrm{m/s}\cdot3\,\mathrm{s}
+\frac{1}{2}\cdot2\,\mathrm{m/s^2}\cdot(3\,\mathrm{s})^2\\[6pt]
&=1\,\mathrm{m}+6\,\mathrm{m}+9\,\mathrm{m}\\[6pt]
&=16\,\mathrm{m}.
\end{aligned}
$$
Lo spostamento è $16-1=15\,\mathrm{m}$. La posizione finale e lo spostamento differiscono perché il corpo parte da una posizione diversa dall'origine.

::grafico{f="1+2*x+x^2+0*sqrt(x*(3-x))" punti="0,1,pieno;1,4,pieno;2,9,pieno;3,16,pieno" xmin=-1 xmax=4 ymin=-1 ymax=18 nomi="t,x" legenda="x=1+2t+t^2" titolo="Posizione in metri e tempo in secondi: in intervalli di un secondo gli spostamenti sono $3$, $5$ e $7\,\mathrm{m}$"}
:::

## Velocità e spostamento senza conoscere il tempo

::::teorema{#velocita-spostamento titolo="Relazione fra le due velocità e lo spostamento"}
In un moto con accelerazione costante si possono mettere in relazione le velocità iniziale e finale con lo spostamento, anche quando il tempo non è assegnato. La relazione è
$$
v^2-v_0^2=2a\Delta x.
$$
Qui $\Delta x=x-x_0$ indica lo spostamento lungo l'asse scelto. Velocità e accelerazione mantengono il segno riferito a quell'asse. La relazione è utile, per esempio, quando si conosce la distanza disponibile per frenare e si cerca l'accelerazione necessaria.

:::dimostrazione
Si esprime lo spostamento attraverso la media aritmetica delle velocità, valida perché l'accelerazione è costante. Poi si moltiplica per $2a$ e si usa $at=v-v_0$:
$$
\begin{aligned}
\Delta x&=\frac{v_0+v}{2}\,t,\\[6pt]
2a\Delta x&=(v_0+v)at,\\[6pt]
&=(v_0+v)(v-v_0),\\[6pt]
&=v^2-v_0^2.
\end{aligned}
$$
Nell'ultimo prodotto, sviluppando i quattro termini, i due termini misti $v_0v$ e $-vv_0$ si annullano. Restano il quadrato della velocità finale e l'opposto del quadrato della velocità iniziale.
:::
::::

:::esempio{titolo="Accelerazione necessaria per fermarsi in una distanza assegnata"}
Un carrello procede a $8\,\mathrm{m/s}$ e si arresta dopo $16\,\mathrm{m}$ con accelerazione costante. Si sceglie positivo il verso del moto, quindi lo spostamento è positivo e la velocità finale è zero. Si ottiene
$$
\begin{aligned}
a&=\frac{v^2-v_0^2}{2\Delta x}\\[6pt]
&=\frac{0-(8\,\mathrm{m/s})^2}{2\cdot16\,\mathrm{m}}\\[6pt]
&=-2\,\mathrm{m/s^2}.
\end{aligned}
$$
Il segno negativo è coerente con la frenata. Dalla legge della velocità il tempo di arresto è $4\,\mathrm{s}$; la velocità media è $4\,\mathrm{m/s}$, quindi il prodotto restituisce i $16\,\mathrm{m}$ assegnati.
:::

:::osservazione{titolo="Il segno dopo una radice quadrata"}
Quando dalla relazione si ricava $v^2$, la radice quadrata ne dà il modulo. Il verso del moto determina poi il segno della componente $v$. Per esempio, in una caduta da fermo di $5\,\mathrm{m}$, usando $g=10\,\mathrm{m/s^2}$, il modulo della velocità finale vale $10\,\mathrm{m/s}$. Con un asse positivo verso il basso si scrive $v=10\,\mathrm{m/s}$; con un asse positivo verso l'alto si scrive $v=-10\,\mathrm{m/s}$. Il corpo ha lo stesso moto in entrambe le descrizioni. Cambiano i segni delle componenti perché cambia il verso dell'asse scelto.
:::

## Lo spostamento dal grafico velocità-tempo

:::osservazione{#area-grafico titolo="Area con segno e spostamento"}
Nel grafico velocità-tempo un rettangolo di base $\Delta t$ e altezza $v$ ha area $v\Delta t$. Le unità di misura del prodotto sono $\mathrm{m/s}\cdot\mathrm{s}=\mathrm{m}$, quindi l'area rappresenta uno spostamento. Per una velocità costante il rettangolo dà esattamente $\Delta x=v\Delta t$.

Se la velocità cresce linearmente da zero, la regione è un triangolo. La sua area è metà del prodotto fra base e altezza. Un corpo che passa uniformemente da $0$ a $6\,\mathrm{m/s}$ in $3\,\mathrm{s}$ compie lo spostamento
$$
\Delta x=\frac{3\,\mathrm{s}\cdot6\,\mathrm{m/s}}{2}=9\,\mathrm{m}.
$$
Le regioni sopra l'asse del tempo contribuiscono con segno positivo; quelle sotto contribuiscono con segno negativo. Per la distanza percorsa si sommano invece i valori positivi delle aree di ciascun tratto. Questo distingue lo spostamento dalla lunghezza del percorso quando il corpo torna indietro.

::grafico{f="2*x+0*sqrt(x*(3-x))" area="2*x;0;0;3" punti="0,0,pieno;3,6,pieno" segmenti="3,0,3,6" xmin=-1 xmax=4 ymin=-1 ymax=8 nomi="t,v" legenda="v=2t" titolo="L'area del triangolo, con tempo in secondi e velocità in $\mathrm{m/s}$, rappresenta lo spostamento di $9\,\mathrm{m}$"}
:::

## Frenata e arresto

:::teorema{#frenata titolo="Tempo e spazio di frenata"}
Si considera un corpo che inizialmente si muove nel verso positivo con velocità $v_0>0$ e rallenta con accelerazione costante $a<0$. All'arresto la velocità vale zero, quindi
$$
0=v_0+at_{\mathrm{arresto}},
\qquad
 t_{\mathrm{arresto}}=-\frac{v_0}{a}.
$$
Durante la frenata la velocità media è $\dfrac{v_0}{2}$, perciò lo spazio di frenata è
$$
s_{\mathrm{frenata}}=\frac{v_0}{2}\,t_{\mathrm{arresto}}
=-\frac{v_0^2}{2a}.
$$
Entrambi i risultati sono positivi perché $a$ è negativa. Con $v_0=12\,\mathrm{m/s}$ e $a=-3\,\mathrm{m/s^2}$ si ottengono $t_{\mathrm{arresto}}=4\,\mathrm{s}$ e $s_{\mathrm{frenata}}=24\,\mathrm{m}$. Queste relazioni descrivono la frenata *fino all'arresto*.
:::

:::attenzione{titolo="L'intervallo in cui vale la legge"}
Prolungando la formula $v=12-3t$, con velocità in $\mathrm{m/s}$ e tempo in secondi, a $t=5\,\mathrm{s}$ si trova $v=-3\,\mathrm{m/s}$. Questo valore descrive un moto all'indietro, mentre un veicolo che ha finito di frenare può rimanere fermo. In quel caso la legge di frenata termina a $4\,\mathrm{s}$ e per i tempi successivi la velocità è zero. Le formule del moto si applicano nell'intervallo in cui valgono le ipotesi assegnate.
:::

## Caduta da fermo

:::teorema{#caduta-libera titolo="Caduta libera vicino alla superficie terrestre"}
Un corpo in **caduta libera** è soggetto alla sola forza di gravità. Vicino alla superficie terrestre, per altezze piccole rispetto alle dimensioni della Terra e trascurando la resistenza dell'aria, la sua accelerazione è costante, verticale e diretta verso il basso. Il modulo è circa $g=9{,}81\,\mathrm{m/s^2}$.

Si orienta l'asse verso il basso, con origine nel punto di rilascio. Se il corpo parte da fermo, dopo un tempo $t$ ha velocità e distanza di caduta
$$
v=gt,
\qquad
h=\frac{1}{2}gt^2.
$$
La massa non compare nelle relazioni. Due corpi rilasciati insieme dalla stessa altezza cadono con lo stesso moto quando la resistenza dell'aria è trascurabile per entrambi. Una piuma nell'aria richiede un modello che tenga conto anche della resistenza dell'aria.
:::

:::esempio{titolo="Il tempo per cadere da un'altezza assegnata"}
Da $h=\dfrac{1}{2}gt^2$, moltiplicando per $2$ e dividendo per $g$, si ricava $t^2=\dfrac{2h}{g}$. Il tempo è non negativo, quindi
$$
t=\sqrt{\frac{2h}{g}}.
$$
La radice quadrata di un numero non negativo è il numero non negativo che, elevato al quadrato, restituisce il numero iniziale. Per $h=20\,\mathrm{m}$ e usando qui $g=10\,\mathrm{m/s^2}$, il quadrato del tempo vale $4\,\mathrm{s^2}$, quindi $t=2\,\mathrm{s}$. La velocità immediatamente prima dell'arrivo è $v=10\cdot2=20\,\mathrm{m/s}$ verso il basso. Il modello termina al primo contatto con il suolo.
:::

## Il lancio verso l'alto

:::teorema{#lancio-verticale titolo="Salita e discesa con lo stesso asse"}
Si sceglie l'asse verticale positivo verso l'alto, con origine nel punto di lancio. Un corpo lanciato verso l'alto con velocità iniziale $v_0>0$, trascurando la resistenza dell'aria, ha accelerazione $a=-g$ durante tutto il volo. Le leggi sono
$$
v=v_0-gt,
\qquad
 y=v_0t-\frac{1}{2}gt^2.
$$
Durante la salita la velocità è positiva e diminuisce. Nel punto più alto vale zero; durante la discesa è negativa. L'accelerazione resta $-g$ anche nel punto più alto, perché la gravità continua ad agire.

Ponendo $v=0$ si ottiene il tempo di salita $t_s=\dfrac{v_0}{g}$. Sostituendolo nella legge oraria, l'altezza massima rispetto al lancio è $h_{\max}=\dfrac{v_0^2}{2g}$. Il ritorno alla quota di lancio avviene a $t_r=\dfrac{2v_0}{g}$, se il corpo può arrivare a quella quota senza incontrare ostacoli.
:::

:::esempio{titolo="Un lancio con velocità iniziale di dieci metri al secondo"}
Usando $g=10\,\mathrm{m/s^2}$ e $v_0=10\,\mathrm{m/s}$, il tempo di salita è $1\,\mathrm{s}$ e l'altezza massima è $5\,\mathrm{m}$. Dopo $2\,\mathrm{s}$ il corpo torna alla quota iniziale con velocità $-10\,\mathrm{m/s}$. In questo intervallo lo spostamento totale è zero, mentre la distanza percorsa è $5+5=10\,\mathrm{m}$.

::grafico{f="10*x-5*x^2+0*sqrt(x*(2-x))" punti="0,0,pieno;1,5,pieno;2,0,pieno" xmin=-1 xmax=3 ymin=-1 ymax=7 nomi="t,y" legenda="y=10t-5t^2" titolo="Quota in metri e tempo in secondi: il corpo raggiunge $5\,\mathrm{m}$ a $1\,\mathrm{s}$ e torna alla quota iniziale a $2\,\mathrm{s}$"}
:::
