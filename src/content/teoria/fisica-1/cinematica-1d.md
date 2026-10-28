---
titolo: Cinematica in una dimensione
sommario: Come si descrive il moto di un punto lungo una retta con la legge oraria, la velocità e l'accelerazione, come si risolvono il moto uniforme, il moto uniformemente accelerato e la caduta dei gravi, e come si ricava la posizione dai grafici e dall'accelerazione.
---

## Sistema di riferimento e legge oraria

:::definizione{#punto-materiale titolo="Punto materiale"}
Un corpo si descrive come **punto materiale** quando le sue dimensioni sono trascurabili rispetto alle distanze percorse, così che la sua posizione è individuata da un solo punto. Un'automobile che percorre $100\,\mathrm{km}$ di autostrada è un punto materiale; la stessa automobile che fa manovra in un parcheggio largo pochi metri non lo è. La **cinematica** descrive il moto del punto materiale con la posizione, la velocità e l'accelerazione, senza occuparsi delle cause del moto, che sono l'oggetto della dinamica (si rimanda all'argomento sulle leggi di Newton).
:::

:::definizione{#sistema-di-riferimento titolo="Sistema di riferimento"}
Un moto è **rettilineo** se il punto si muove lungo una retta. Per descriverlo si fissa un **sistema di riferimento** formato da

- un asse $x$ sovrapposto alla retta del moto, con un'origine $O$, un verso positivo e un'unità di lunghezza, il metro;
- un orologio che misura il tempo $t$ in secondi a partire da un istante iniziale scelto.

La posizione del punto all'istante $t$ è la sua coordinata $x$ sull'asse, positiva o negativa secondo il lato di $O$ in cui si trova. L'origine, il verso e l'istante iniziale si scelgono liberamente, e una scelta adatta semplifica i conti: per un sasso che cade si può orientare l'asse verso l'alto con l'origine al suolo, oppure verso il basso con l'origine nel punto di partenza. Posizione, spostamento, velocità e accelerazione sono vettori, e nel moto rettilineo hanno tutti la direzione dell'asse; perciò ciascuno è descritto dalla sola componente lungo l'asse, un numero con segno. Per i vettori nel piano si rimanda all'argomento sul moto nel piano.
:::

:::definizione{#legge-oraria titolo="Legge oraria"}
La **legge oraria** del moto è la funzione $t \mapsto x(t)$ che a ogni istante associa la posizione del punto. Il suo grafico nel piano $(t, x)$, con il tempo in ascissa e la posizione in ordinata, è il **grafico orario**. Il grafico orario è diverso dalla traiettoria, che nel moto rettilineo è un tratto dell'asse $x$: il grafico mostra *quando* il punto occupa ciascuna posizione. Per esempio la legge $x(t) = 4t - t^2$, con $x$ in metri e $t$ in secondi, descrive un punto che parte dall'origine, avanza fino a $x = 4\,\mathrm{m}$ all'istante $t = 2\,\mathrm{s}$ e poi torna indietro, ripassando per l'origine all'istante $t = 4\,\mathrm{s}$. In una legge scritta con i soli numeri i coefficienti hanno le unità che rendono omogenei i termini; qui $4\,\mathrm{m/s}$ e $1\,\mathrm{m/s^2}$.

::grafico{f="4*x-x^2+0*sqrt(x*(5-x))" punti="0,0,pieno;2,4,pieno;5,-5,pieno" segmenti="2,0,2,4;5,0,5,-5" xmin=-1 xmax=6 ymin=-6 ymax=5 nomi="t,x" titolo="Grafico orario di $x(t) = 4t - t^2$, con $x$ in metri e $t$ in secondi: il punto avanza fino a $x = 4\,\mathrm{m}$, è fermo all'istante $t = 2\,\mathrm{s}$ e poi torna indietro fino a $x = -5\,\mathrm{m}$"}

:::

:::definizione{#spostamento titolo="Spostamento e distanza percorsa"}
Lo **spostamento** del punto tra gli istanti $t_1$ e $t_2$ è la differenza delle posizioni
$$
\Delta x = x(t_2) - x(t_1) .
$$
È positivo se la posizione finale si trova dalla parte positiva dell'asse rispetto a quella iniziale, negativo nel caso opposto, e dipende solo dalle due posizioni estreme. La **distanza percorsa** è la lunghezza totale del cammino, e coincide con $|\Delta x|$ solo se il punto non inverte mai il verso del moto tra $t_1$ e $t_2$. Per la legge $x(t) = 4t - t^2$ tra $0$ e $5\,\mathrm{s}$ lo spostamento è $x(5) - x(0) = -5\,\mathrm{m}$, mentre la distanza percorsa è $4\,\mathrm{m}$ all'andata più $9\,\mathrm{m}$ al ritorno, cioè $13\,\mathrm{m}$.
:::

## Velocità media e velocità istantanea

:::definizione{#velocita-media titolo="Velocità media"}
La **velocità media** tra gli istanti $t_1$ e $t_2 > t_1$ è il rapporto tra lo spostamento e l'intervallo di tempo:
$$
v_m = \frac{\Delta x}{\Delta t} = \frac{x(t_2) - x(t_1)}{t_2 - t_1} .
$$
Si misura in $\mathrm{m/s}$; per passare dai $\mathrm{km/h}$ ai $\mathrm{m/s}$ si divide per $3{,}6$, poiché $1\,\mathrm{km/h} = \dfrac{1000\,\mathrm{m}}{3600\,\mathrm{s}}$. Il segno di $v_m$ indica il verso dello spostamento complessivo, e nel grafico orario $v_m$ è la pendenza della retta secante per i punti $(t_1, x(t_1))$ e $(t_2, x(t_2))$. Il rapporto tra la distanza percorsa e il tempo impiegato si chiama **velocità scalare media** ed è sempre positivo. Per la legge $x(t) = 4t - t^2$ tra $0$ e $5\,\mathrm{s}$ si ha $v_m = \dfrac{-5\,\mathrm{m}}{5\,\mathrm{s}} = -1\,\mathrm{m/s}$, mentre la velocità scalare media vale $\dfrac{13\,\mathrm{m}}{5\,\mathrm{s}} = 2{,}6\,\mathrm{m/s}$.
:::

:::richiamo{titolo="Derivata"}
Una funzione $f$ è derivabile in $t_0$ se esiste finito il limite del rapporto incrementale
$$
f'(t_0) = \lim_{h \to 0} \frac{f(t_0 + h) - f(t_0)}{h} ,
$$
che è la pendenza della retta tangente al grafico nel punto $(t_0, f(t_0))$. Per le regole di derivazione si rimanda all'argomento sul calcolo differenziale di Analisi 1.
:::

:::definizione{#velocita-istantanea titolo="Velocità istantanea"}
La **velocità istantanea** all'istante $t$ è il limite della velocità media su intervalli di tempo sempre più brevi che iniziano in $t$:
$$
v(t) = \lim_{\Delta t \to 0} \frac{x(t + \Delta t) - x(t)}{\Delta t} = \frac{dx}{dt} ,
$$
cioè la derivata della legge oraria. Nel grafico orario $v(t)$ è la pendenza della retta tangente. Perciò il punto si muove nel verso positivo dell'asse dove $x(t)$ cresce ($v > 0$), nel verso negativo dove $x(t)$ decresce ($v < 0$), ed è fermo per un istante dove la tangente è orizzontale ($v = 0$). Il modulo $|v|$ misura la rapidità del moto, ed è il valore indicato dal tachimetro. Per $x(t) = 4t - t^2$ si ha $v(t) = 4 - 2t$, quindi $v(0) = 4\,\mathrm{m/s}$, $v(2) = 0$ e $v(5) = -6\,\mathrm{m/s}$; all'istante $t = 2\,\mathrm{s}$ il punto **inverte il verso** del moto.

::grafico{f="x^2+0*sqrt(x);4*x-4;5*x-6" punti="2,4,pieno;3,9,pieno" etichette="2.12,3.1,P;3.12,8.1,Q" xmin=-1 xmax=4 ymin=-2 ymax=12 nomi="t,x" titolo="Per $x(t) = t^2$ la secante per $P$ e $Q$, in rosso, ha pendenza $5$, la velocità media tra $t = 2$ e $t = 3$; la tangente in $P$, tratteggiata, ha pendenza $4$, la velocità istantanea $v(2)$"}

:::

## Accelerazione

:::definizione{#accelerazione-media titolo="Accelerazione media"}
L'**accelerazione media** tra gli istanti $t_1$ e $t_2 > t_1$ è il rapporto tra la variazione di velocità e l'intervallo di tempo:
$$
a_m = \frac{\Delta v}{\Delta t} = \frac{v(t_2) - v(t_1)}{t_2 - t_1} .
$$
Si misura in $\mathrm{m/s^2}$, e un'accelerazione costante di $1\,\mathrm{m/s^2}$ corrisponde a una variazione di velocità di $1\,\mathrm{m/s}$ in ogni secondo. Un'automobile che passa da ferma a $100\,\mathrm{km/h}$, cioè a $27{,}8\,\mathrm{m/s}$, in $10\,\mathrm{s}$ ha un'accelerazione media di $2{,}78\,\mathrm{m/s^2}$.
:::

:::definizione{#accelerazione-istantanea titolo="Accelerazione istantanea"}
L'**accelerazione istantanea** è la derivata della velocità rispetto al tempo, e quindi la derivata seconda della legge oraria:
$$
a(t) = \frac{dv}{dt} = \frac{d^2 x}{dt^2} .
$$
Nel grafico di $v(t)$ l'accelerazione è la pendenza della tangente; nel grafico orario il segno di $a$ dà la concavità, rivolta verso l'alto dove $a > 0$ e verso il basso dove $a < 0$. Per $x(t) = 4t - t^2$ si ha $v(t) = 4 - 2t$ e $a(t) = -2\,\mathrm{m/s^2}$ per ogni $t$, e infatti il grafico orario è una parabola con la concavità rivolta verso il basso.
:::

:::osservazione{#segno-accelerazione titolo="Moto accelerato e moto decelerato"}
Il segno dell'accelerazione dipende dal verso scelto per l'asse; per stabilire se il punto va più veloce o più piano si confrontano i segni di $v$ e di $a$. Poiché
$$
\frac{d}{dt}\left(v^2\right) = 2\,v\,a ,
$$
il modulo della velocità cresce dove $v$ e $a$ hanno lo stesso segno, e il moto si dice **accelerato**, e decresce dove hanno segno opposto, e il moto si dice **decelerato**. Per $x(t) = 4t - t^2$, nell'intervallo $0 < t < 2\,\mathrm{s}$ si ha $v > 0$ e $a < 0$, quindi il punto rallenta fino a fermarsi; per $t > 2\,\mathrm{s}$ velocità e accelerazione sono entrambe negative, quindi il punto torna indietro sempre più veloce.
:::

## Moto rettilineo uniforme

:::richiamo{titolo="Funzioni con derivata nulla"}
Se $f$ è derivabile su un intervallo e $f'(t) = 0$ per ogni $t$ dell'intervallo, allora $f$ è costante su quell'intervallo.
:::

:::definizione{#moto-rettilineo-uniforme titolo="Moto rettilineo uniforme"}
Un moto rettilineo è **uniforme** se la velocità è costante, $v(t) = v$ per ogni $t$, e quindi l'accelerazione è nulla. Se all'istante $t_0$ il punto si trova in $x_0$, la legge oraria è
$$
x(t) = x_0 + v\,(t - t_0) ,
$$
che per $t_0 = 0$ diventa $x(t) = x_0 + v\,t$. La formula segue dal fatto che la funzione $x(t) - v\,t$ ha derivata $v - v = 0$, quindi è costante, e il suo valore costante è $x_0 - v\,t_0$. Il grafico orario è una retta di pendenza $v$ per il punto $(t_0, x_0)$, e uno spostamento $\Delta x$ richiede il tempo $\Delta t = \dfrac{\Delta x}{v}$. Il moto rettilineo uniforme descrive un'automobile a velocità di crociera, un nastro trasportatore, la propagazione del suono in aria ferma.
:::

:::osservazione{#problemi-di-incontro titolo="Problemi di incontro"}
Quando due punti si muovono sulla stessa retta, si descrivono entrambi nello *stesso* sistema di riferimento, con leggi orarie $x_A(t)$ e $x_B(t)$. I due punti si incontrano negli istanti in cui occupano la stessa posizione, cioè nelle soluzioni dell'equazione
$$
x_A(t) = x_B(t) ,
$$
e la posizione dell'incontro si ottiene sostituendo l'istante trovato in una delle due leggi. Un punto che si muove nel verso negativo dell'asse ha velocità negativa, e un punto che parte con un ritardo $t_0$ ha una legge che contiene $t - t_0$ e vale per $t \geq t_0$. Per esempio, con $x$ in metri e $t$ in secondi, l'automobile $A$ parte da $x = 0$ a $10\,\mathrm{m/s}$ e nello stesso istante l'automobile $B$ parte da $x = 300\,\mathrm{m}$ verso $A$ a $5\,\mathrm{m/s}$. Allora $x_A(t) = 10\,t$ e $x_B(t) = 300 - 5\,t$; l'equazione $10\,t = 300 - 5\,t$ ha la soluzione $t = 20\,\mathrm{s}$, e l'incontro avviene in $x = 200\,\mathrm{m}$.

::grafico{f="10*x+0*sqrt(x);300-5*x+0*sqrt(x)" punti="20,200,pieno" segmenti="20,0,20,200" xmin=-5 xmax=45 ymin=-50 ymax=450 nomi="t,x" titolo="Leggi orarie $x_A(t) = 10\,t$ e $x_B(t) = 300 - 5\,t$: le due rette si intersecano nel punto $(20, 200)$, quindi l'incontro avviene dopo $20\,\mathrm{s}$ nella posizione $x = 200\,\mathrm{m}$"}

:::

## Moto uniformemente accelerato

:::definizione{#moto-uniformemente-accelerato titolo="Moto uniformemente accelerato"}
Un moto rettilineo è **uniformemente accelerato** se l'accelerazione è costante, $a(t) = a$ per ogni $t$. In tal caso la velocità varia della stessa quantità in intervalli di tempo uguali, e l'accelerazione media su ogni intervallo coincide con $a$. Il moto uniformemente accelerato descrive con buona approssimazione la partenza e la frenata di un veicolo, la caduta di un sasso quando la resistenza dell'aria è trascurabile e la discesa di un corpo lungo un piano inclinato liscio; per le forze che producono un'accelerazione costante si rimanda all'argomento sulle leggi di Newton.
:::

::::teorema{#leggi-del-moto-uniformemente-accelerato titolo="Leggi del moto uniformemente accelerato"}
Sia $a$ costante e siano $x_0$ e $v_0$ la posizione e la velocità all'istante $t = 0$. Allora per ogni $t$
$$
v(t) = v_0 + a\,t ,
\qquad
x(t) = x_0 + v_0\,t + \frac{1}{2}\,a\,t^2 .
$$
Il grafico della velocità è una retta di pendenza $a$, il grafico orario è una parabola con la concavità verso l'alto se $a > 0$ e verso il basso se $a < 0$. Con le due leggi si risponde a ogni domanda sul moto, scrivendo la grandezza cercata in funzione di $t$ e imponendo la condizione richiesta. Un'automobile che viaggia a $v_0 = 20\,\mathrm{m/s}$ e frena con $a = -5{,}0\,\mathrm{m/s^2}$ si ferma quando $v(t) = 0$, cioè dopo $t = \dfrac{v_0}{|a|} = 4{,}0\,\mathrm{s}$, e in quel tempo percorre $v_0\,t + \dfrac{1}{2}\,a\,t^2 = 80\,\mathrm{m} - 40\,\mathrm{m} = 40\,\mathrm{m}$.

::grafico{f="20*x-2.5*x^2+0*sqrt(x*(4-x))" punti="4,40,pieno" segmenti="0,40,4,40;4,0,4,40" xmin=-1 xmax=6 ymin=-5 ymax=45 nomi="t,x" titolo="Grafico orario della frenata, $x(t) = 20\,t - 2{,}5\,t^2$: la parabola ha la tangente orizzontale all'istante di arresto $t = 4\,\mathrm{s}$, nella posizione $x = 40\,\mathrm{m}$"}

:::dimostrazione
La funzione $v(t) - a\,t$ ha derivata $a - a = 0$, quindi è costante; poiché in $t = 0$ vale $v_0$, si ha $v(t) = v_0 + a\,t$. Allo stesso modo la funzione
$$
x(t) - v_0\,t - \frac{1}{2}\,a\,t^2
$$
ha derivata $v(t) - v_0 - a\,t = 0$, quindi è costante e uguale al suo valore in $t = 0$, cioè $x_0$. Perciò $x(t) = x_0 + v_0\,t + \dfrac{1}{2}\,a\,t^2$.
:::
::::

::::teorema{#relazione-velocita-spazio titolo="Relazione tra velocità e spostamento"}
Nel moto uniformemente accelerato, con le notazioni delle leggi del moto, per ogni istante vale
$$
v^2 = v_0^2 + 2\,a\,(x - x_0) ,
$$
dove $x$ e $v$ sono la posizione e la velocità nello stesso istante. Inoltre la velocità media tra l'istante $0$ e l'istante $t$ è la media aritmetica della velocità iniziale e di quella finale, $v_m = \dfrac{v_0 + v}{2}$. La prima formula non contiene il tempo, e si usa quando il tempo non è né un dato né un'incognita del problema. Per esempio un aereo che parte da fermo con accelerazione $2{,}0\,\mathrm{m/s^2}$ e decolla a $80\,\mathrm{m/s}$ ha bisogno di una pista lunga almeno
$$
\frac{v^2}{2a} = \frac{(80\,\mathrm{m/s})^2}{2 \cdot 2{,}0\,\mathrm{m/s^2}} = 1600\,\mathrm{m} .
$$

:::dimostrazione
Se $a = 0$ la velocità è costante e la formula si riduce a $v^2 = v_0^2$. Se $a \neq 0$, dalla legge della velocità si ricava $t = \dfrac{v - v_0}{a}$, e sostituendo nella legge oraria si ottiene
$$
\begin{aligned}
x - x_0 &= v_0\,\frac{v - v_0}{a} + \frac{1}{2}\,a\,\frac{(v - v_0)^2}{a^2} \\[6pt]
&= \frac{2 v_0 (v - v_0) + (v - v_0)^2}{2a} \\[6pt]
&= \frac{(v - v_0)(v + v_0)}{2a} = \frac{v^2 - v_0^2}{2a} ;
\end{aligned}
$$
moltiplicando per $2a$ si ottiene la prima tesi. Per la seconda, dalla legge oraria si ha $\dfrac{x - x_0}{t} = v_0 + \dfrac{1}{2}\,a\,t$, e poiché $a\,t = v - v_0$ questa velocità media vale $v_0 + \dfrac{v - v_0}{2} = \dfrac{v_0 + v}{2}$.
:::
::::

## Caduta libera e lancio verticale

:::teorema{#legge-caduta-dei-gravi titolo="Legge della caduta dei gravi"}
È una legge sperimentale, stabilita da Galileo: in prossimità della superficie terrestre e quando la resistenza dell'aria è trascurabile, tutti i corpi cadono con la stessa accelerazione costante, diretta verso il basso, di modulo
$$
g = 9{,}81\,\mathrm{m/s^2} .
$$
Il moto lungo la verticale di un corpo lasciato cadere o lanciato verso l'alto è quindi uniformemente accelerato, e si applicano le leggi del moto uniformemente accelerato con $a = -g$ se l'asse è orientato verso l'alto, con $a = +g$ se è orientato verso il basso. L'accelerazione è la stessa per ogni massa, perciò un sasso e una sfera di piombo lasciati cadere insieme arrivano al suolo insieme, finché la resistenza dell'aria è trascurabile. Il valore di $g$ varia di poco con la latitudine e con la quota, e per la sua origine si rimanda all'argomento sulla gravitazione. Un corpo lasciato cadere da fermo da un'altezza $h = 20\,\mathrm{m}$ tocca il suolo dopo $t = \sqrt{\dfrac{2h}{g}} = 2{,}0\,\mathrm{s}$, con velocità di modulo $\sqrt{2gh} = 19{,}8\,\mathrm{m/s}$.
:::

:::teorema{#lancio-verticale titolo="Leggi del lancio verticale"}
Si orienta l'asse $y$ lungo la verticale verso l'alto. Un corpo che all'istante $t = 0$ si trova alla quota $y_0$ con velocità $v_0$, positiva se è lanciato verso l'alto e negativa se è lanciato verso il basso, si muove con
$$
v(t) = v_0 - g\,t ,
\qquad
y(t) = y_0 + v_0\,t - \frac{1}{2}\,g\,t^2 ,
$$
fino all'istante in cui tocca il suolo. Le due leggi sono le leggi del moto uniformemente accelerato con $a = -g$, e il caso $v_0 = 0$ è la caduta da fermo. L'istante di arrivo al suolo è la soluzione positiva dell'equazione di secondo grado $y(t) = 0$, e la velocità di arrivo si ottiene anche senza il tempo dalla relazione $v^2 = v_0^2 + 2g\,y_0$.
:::

::::teorema{#altezza-massima titolo="Tempo di salita e altezza massima"}
Un corpo lanciato verso l'alto dalla quota $y_0$ con velocità $v_0 > 0$, con resistenza dell'aria trascurabile, raggiunge il punto più alto all'istante $t_s$ e alla quota $h_{\max}$ dati da
$$
t_s = \frac{v_0}{g} ,
\qquad
h_{\max} = y_0 + \frac{v_0^2}{2g} .
$$
Il moto è simmetrico: il corpo ripassa per la quota di partenza all'istante $2\,t_s$ con velocità $-v_0$, e passa per ogni quota intermedia due volte, con velocità opposte. Per $v_0 = 15\,\mathrm{m/s}$ si ha $t_s = 1{,}53\,\mathrm{s}$, e il corpo sale di $\dfrac{v_0^2}{2g} = 11{,}5\,\mathrm{m}$ sopra il punto di lancio.

::grafico{f="15*x-4.905*x^2+0*sqrt(x*(3.0581-x))" punti="1.529,11.47,pieno" segmenti="1.529,0,1.529,11.47" xmin=-1 xmax=4 ymin=-2 ymax=14 nomi="t,y" titolo="Lancio dal suolo con $v_0 = 15\,\mathrm{m/s}$: la quota $y(t) = v_0\,t - \dfrac{1}{2}\,g\,t^2$ è massima, $11{,}5\,\mathrm{m}$, all'istante $t_s = 1{,}53\,\mathrm{s}$, e il grafico è simmetrico rispetto alla retta $t = t_s$"}

:::dimostrazione
Nel punto più alto la velocità passa da positiva a negativa, quindi si annulla, e l'equazione $v_0 - g\,t_s = 0$ dà $t_s = \dfrac{v_0}{g}$. Sostituendo nella legge oraria si ottiene
$$
y(t_s) = y_0 + v_0\,\frac{v_0}{g} - \frac{1}{2}\,g\,\frac{v_0^2}{g^2} = y_0 + \frac{v_0^2}{2g} .
$$
Completando il quadrato, la legge oraria si scrive $y(t) = h_{\max} - \dfrac{1}{2}\,g\,(t - t_s)^2$, quindi le quote negli istanti $t_s - \tau$ e $t_s + \tau$ coincidono, mentre le velocità $v(t) = -g\,(t - t_s)$ in quegli istanti sono opposte. Con $\tau = t_s$ si ottiene il ritorno alla quota $y_0$ all'istante $2\,t_s$ con velocità $-g\,t_s = -v_0$.
:::
::::

## Grafici orari e aree

:::osservazione{#grafici-orari titolo="Lettura dei grafici orari"}
I grafici $x(t)$, $v(t)$ e $a(t)$ di uno stesso moto sono legati dalle derivate. La pendenza del grafico di $x(t)$ è la velocità, e la pendenza del grafico di $v(t)$ è l'accelerazione. Nel moto uniforme il grafico di $x(t)$ è una retta, quello di $v(t)$ una retta orizzontale e quello di $a(t)$ coincide con l'asse dei tempi; nel moto uniformemente accelerato $x(t)$ è una parabola, $v(t)$ una retta inclinata e $a(t)$ una retta orizzontale. Dal grafico della velocità si leggono quindi gli istanti in cui il punto è fermo ($v = 0$), quelli in cui inverte il moto ($v$ cambia segno) e le fasi a velocità costante (tratti orizzontali). Il passaggio inverso, dal grafico della velocità alla posizione, si fa con le aree.
:::

:::richiamo{titolo="Teorema fondamentale del calcolo"}
Se $f$ è continua su $[a, b]$ e $F$ è una sua primitiva, allora $\displaystyle\int_a^b f(t)\,dt = F(b) - F(a)$. Per una funzione positiva l'integrale è l'area della regione compresa tra il grafico e l'asse delle ascisse; per il calcolo degli integrali si rimanda all'argomento sul calcolo integrale di Analisi 1.
:::

::::teorema{#area-sotto-il-grafico-della-velocita titolo="Spostamento come area sotto il grafico della velocità"}
Sia $v(t)$ continua sull'intervallo $[t_1, t_2]$, con un numero finito di cambiamenti di segno. Allora lo spostamento e la distanza percorsa tra $t_1$ e $t_2$ sono
$$
\Delta x = \int_{t_1}^{t_2} v(t)\,dt ,
\qquad
d = \int_{t_1}^{t_2} |v(t)|\,dt .
$$
Nel grafico della velocità lo spostamento è l'area con segno compresa tra il grafico e l'asse dei tempi, in cui le parti sopra l'asse contano positivamente e quelle sotto negativamente; la distanza percorsa è la somma delle aree prese tutte con segno positivo. Allo stesso modo la variazione di velocità è l'area con segno sotto il grafico dell'accelerazione, $\Delta v = \displaystyle\int_{t_1}^{t_2} a(t)\,dt$. Quando il grafico di $v(t)$ è formato da tratti rettilinei le aree sono triangoli, rettangoli e trapezi, e si calcolano con la geometria elementare. Per la legge $x(t) = 4t - t^2$, la cui velocità è $v(t) = 4 - 2t$, tra $0$ e $3\,\mathrm{s}$ si ottengono $\Delta x = 3\,\mathrm{m}$ e $d = 5\,\mathrm{m}$, in accordo con $x(3) - x(0) = 3\,\mathrm{m}$.

::grafico{f="4-2*x+0*sqrt(x*(3-x))" area="4-2*x;0;0;2|0;4-2*x;2;3" xmin=-1 xmax=4 ymin=-3 ymax=5 nomi="t,v" titolo="Per $v(t) = 4 - 2t$ tra $0$ e $3\,\mathrm{s}$ il triangolo sopra l'asse ha area $4$ e quello sotto ha area $1$: lo spostamento è $4 - 1 = 3\,\mathrm{m}$, la distanza percorsa $4 + 1 = 5\,\mathrm{m}$"}

:::dimostrazione
Poiché $\dfrac{dx}{dt} = v$, la legge oraria è una primitiva della velocità, e per il **teorema fondamentale del calcolo** $\displaystyle\int_{t_1}^{t_2} v(t)\,dt = x(t_2) - x(t_1) = \Delta x$. Per la distanza si divide $[t_1, t_2]$ negli intervalli in cui $v$ non cambia segno. In ciascuno di essi il punto non inverte il moto, quindi la distanza percorsa è il valore assoluto dello spostamento, cioè $\left|\displaystyle\int v\,dt\right| = \displaystyle\int |v|\,dt$; sommando sugli intervalli si ottiene la seconda formula. La formula per $\Delta v$ si dimostra allo stesso modo, perché $v$ è una primitiva di $a$.
:::
::::

:::esempio{titolo="Spazio percorso da un ascensore"}
Un ascensore parte da fermo, accelera in modo uniforme per $2{,}0\,\mathrm{s}$ fino a $3{,}0\,\mathrm{m/s}$, sale a velocità costante per $6{,}0\,\mathrm{s}$ e poi rallenta in modo uniforme fino a fermarsi in $2{,}0\,\mathrm{s}$. Il grafico della velocità delimita con l'asse dei tempi un trapezio, e lo spazio percorso è la sua area: $3{,}0\,\mathrm{m}$ nella prima fase (triangolo), $18\,\mathrm{m}$ nella seconda (rettangolo) e $3{,}0\,\mathrm{m}$ nella terza, in totale $24\,\mathrm{m}$. Le accelerazioni delle tre fasi sono le pendenze dei tre tratti, cioè $1{,}5\,\mathrm{m/s^2}$, $0$ e $-1{,}5\,\mathrm{m/s^2}$.

::grafico{f="min(1.5*x,3,1.5*(10-x))+0*sqrt(x*(10-x))" area="min(1.5*x,3,1.5*(10-x));0;0;10" xmin=-2 xmax=12 ymin=-1 ymax=4 nomi="t,v" titolo="Velocità dell'ascensore in $\mathrm{m/s}$ in funzione del tempo in secondi: l'area del trapezio, $3 + 18 + 3 = 24$, è lo spazio percorso in metri"}

:::

## Dall'accelerazione alla legge oraria

::::teorema{#integrazione-della-legge-oraria titolo="Legge oraria a partire dall'accelerazione"}
Sia $a(t)$ continua e siano $x_0$ e $v_0$ la posizione e la velocità all'istante $t_0$. Allora il moto è determinato in modo unico, e per ogni $t$
$$
v(t) = v_0 + \int_{t_0}^{t} a(s)\,ds ,
\qquad
x(t) = x_0 + \int_{t_0}^{t} v(s)\,ds .
$$
Si integra due volte, prima l'accelerazione per ottenere la velocità e poi la velocità per ottenere la legge oraria, e a ogni integrazione la costante è fissata dalla condizione iniziale corrispondente. Per esempio, con $a(t) = 2t$ ($a$ in $\mathrm{m/s^2}$, $t$ in secondi), $v_0 = 1\,\mathrm{m/s}$ e $x_0 = 0$ all'istante $t_0 = 0$, si ottiene
$$
v(t) = 1 + t^2 ,
\qquad
x(t) = t + \frac{t^3}{3} ,
$$
quindi all'istante $t = 3\,\mathrm{s}$ il punto si trova in $x = 12\,\mathrm{m}$ con velocità $10\,\mathrm{m/s}$. Le leggi del moto uniformemente accelerato sono il caso particolare di $a$ costante.

:::dimostrazione
La funzione $w(t) = v_0 + \displaystyle\int_{t_0}^{t} a(s)\,ds$ ha derivata $a(t)$ per il **teorema fondamentale del calcolo** e vale $v_0$ in $t_0$. La differenza $v(t) - w(t)$ ha quindi derivata nulla ed è nulla in $t_0$, perciò è identicamente nulla e $v = w$. Lo stesso ragionamento applicato alla legge oraria, che ha derivata $v$ e vale $x_0$ in $t_0$, dà la seconda formula. In particolare due moti con la stessa accelerazione e le stesse condizioni iniziali coincidono.
:::
::::

:::osservazione{#condizioni-iniziali titolo="Condizioni iniziali"}
Due punti con la stessa accelerazione possono partire da posizioni diverse con velocità diverse, e allora hanno leggi orarie diverse. Per individuare la legge oraria servono quindi, oltre all'accelerazione, due dati: la posizione $x_0$ e la velocità $v_0$ in un istante $t_0$, dette **condizioni iniziali**. In dinamica l'accelerazione è determinata dalle forze tramite il secondo principio della dinamica, e il moto si ricava integrando con le condizioni iniziali (si rimanda all'argomento sulle leggi di Newton). Quando l'accelerazione è nota come funzione del tempo bastano due integrali definiti; quando dipende dalla velocità o dalla posizione si usano le equazioni differenziali.
:::

## Accelerazione dipendente dalla velocità

:::richiamo{titolo="Equazioni differenziali a variabili separabili"}
Se $f$ è continua e $f(v_0) \neq 0$, la soluzione dell'equazione $\dfrac{dv}{dt} = f(v)$ con $v(t_0) = v_0$ soddisfa, finché $f(v)$ non si annulla, l'uguaglianza $\displaystyle\int_{v_0}^{v} \frac{du}{f(u)} = t - t_0$. Per la teoria si rimanda all'argomento sulle equazioni differenziali di Analisi 1.
:::

::::teorema{#accelerazione-proporzionale-alla-velocita titolo="Moto con accelerazione proporzionale alla velocità"}
Sia $a = -k\,v$ con $k > 0$ costante, e siano $x_0$ e $v_0$ la posizione e la velocità all'istante $t = 0$. Allora
$$
v(t) = v_0\,e^{-k t} ,
\qquad
x(t) = x_0 + \frac{v_0}{k}\left(1 - e^{-k t}\right) .
$$
È il modello di un corpo frenato da una resistenza viscosa, come una barca a motore spento o una sferetta che si muove lentamente in un liquido; la costante $k$ si misura in $\mathrm{s^{-1}}$. La velocità decresce in modo esponenziale e si dimezza ogni $\dfrac{\ln 2}{k}$ secondi, mentre la posizione tende a $x_0 + \dfrac{v_0}{k}$; perciò il corpo percorre in tutto la distanza finita $\dfrac{v_0}{k}$. Per una barca con $v_0 = 5{,}0\,\mathrm{m/s}$ e $k = 0{,}50\,\mathrm{s^{-1}}$ la velocità si dimezza ogni $1{,}4\,\mathrm{s}$ e lo spazio totale percorso è $10\,\mathrm{m}$.

::grafico{f="5*exp(-0.5*x)+0*sqrt(x)" area="5*exp(-0.5*x);0;0;9" xmin=-1 xmax=9 ymin=-1 ymax=6 nomi="t,v" titolo="Velocità della barca, $v(t) = 5\,e^{-0{,}5\,t}$: la regione sotto il grafico, prolungata a tutti i tempi positivi, ha area $\dfrac{v_0}{k} = 10\,\mathrm{m}$, lo spazio totale percorso"}

:::dimostrazione
Se $v_0 = 0$ la funzione costante $v = 0$ risolve l'equazione $\dfrac{dv}{dt} = -k\,v$ con la condizione iniziale, e il punto resta fermo. Se $v_0 \neq 0$, per l'unicità della soluzione del problema di Cauchy la velocità non si annulla mai e mantiene il segno di $v_0$, quindi si possono separare le variabili:
$$
\int_{v_0}^{v} \frac{du}{u} = -\int_0^t k\,ds
\quad\Longrightarrow\quad
\ln\frac{v}{v_0} = -k\,t
\quad\Longrightarrow\quad
v(t) = v_0\,e^{-k t} .
$$
Integrando la velocità con la condizione $x(0) = x_0$ si ottiene
$$
x(t) = x_0 + \int_0^t v_0\,e^{-k s}\,ds = x_0 + \frac{v_0}{k}\left(1 - e^{-k t}\right) .
$$
:::
::::

:::osservazione{#velocita-limite titolo="Velocità limite"}
Se alla resistenza viscosa si aggiunge un'accelerazione costante $A > 0$, come per un corpo che cade in un fluido, l'accelerazione è $a = A - k\,v$. Partendo da fermo, la separazione delle variabili dà $\displaystyle\int_0^{v} \frac{du}{A - k\,u} = t$, cioè $-\dfrac{1}{k}\ln\dfrac{A - k\,v}{A} = t$, e quindi
$$
v(t) = \frac{A}{k}\left(1 - e^{-k t}\right) .
$$
La velocità cresce e tende alla **velocità limite** $v_L = \dfrac{A}{k}$, il valore per cui l'accelerazione si annulla; dopo un tempo pari ad alcune volte $\dfrac{1}{k}$ il moto è in pratica uniforme. Per $A = 8{,}0\,\mathrm{m/s^2}$ e $k = 2{,}0\,\mathrm{s^{-1}}$ la velocità limite è $4{,}0\,\mathrm{m/s}$, e dopo $1{,}5\,\mathrm{s}$ la velocità ne ha raggiunto il $95\%$.

::grafico{f="4*(1-exp(-2*x))+0*sqrt(x)" asintoti="y=4" segmenti="1.5,0,1.5,3.8" xmin=-1 xmax=4 ymin=-1 ymax=5 nomi="t,v" titolo="Con $a = A - k\,v$ e partenza da fermo la velocità tende alla velocità limite $v_L = \dfrac{A}{k}$; per $A = 8\,\mathrm{m/s^2}$ e $k = 2\,\mathrm{s^{-1}}$ si ha $v_L = 4\,\mathrm{m/s}$"}

:::

:::osservazione{#accelerazione-funzione-della-posizione titolo="Accelerazione in funzione della posizione"}
Quando l'accelerazione è data come funzione della posizione, $a = a(x)$, oppure interessa la velocità in funzione della posizione, si usa la regola della catena. Se il punto non inverte il moto, la velocità si può considerare funzione di $x$, e
$$
a = \frac{dv}{dt} = \frac{dv}{dx}\,\frac{dx}{dt} = v\,\frac{dv}{dx} = \frac{d}{dx}\left(\frac{1}{2}\,v^2\right) .
$$
Integrando tra $x_0$ e $x$ si ottiene
$$
\frac{1}{2}\,v^2 - \frac{1}{2}\,v_0^2 = \int_{x_0}^{x} a(\xi)\,d\xi ,
$$
che per $a$ costante è la relazione $v^2 = v_0^2 + 2a\,(x - x_0)$ del moto uniformemente accelerato. Moltiplicata per la massa, la stessa uguaglianza è il teorema dell'energia cinetica, per il quale si rimanda all'argomento sul lavoro e l'energia. Con $a = -c\,v^2$ e $v > 0$ si ottiene $v\,\dfrac{dv}{dx} = -c\,v^2$, cioè $\dfrac{dv}{dx} = -c\,v$, e quindi $v = v_0\,e^{-c\,(x - x_0)}$.
:::
