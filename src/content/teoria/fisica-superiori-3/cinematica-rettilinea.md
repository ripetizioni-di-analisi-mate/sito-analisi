---
titolo: "Cinematica rettilinea"
sommario: "Posizione, velocità e accelerazione. Grafici, leggi orarie, frenate e moti a tratti."
---

## Posizione e spostamento

:::definizione{#posizione titolo="Coordinata e intervallo di tempo"}
Il corpo che si muove si tratta come un **punto materiale**, cioè come un punto di cui si trascurano forma e dimensioni. Il punto si muove lungo una retta. Per descrivere il moto si fissano tre elementi.

- L'**origine** è il punto della retta da cui si misurano le distanze.
- Il **verso positivo** è il verso di percorrenza in cui le coordinate crescono. La retta con l'origine e il verso positivo si chiama asse $x$.
- L'orologio dà l'istante $t$, misurato in secondi.

Origine, verso e orologio formano il **sistema di riferimento**. La **posizione** $x(t)$, che si legge «$x$ di $t$», è la coordinata del punto materiale all'istante $t$. La coordinata è positiva se il punto sta dalla parte del verso positivo rispetto all'origine, ed è negativa se sta dalla parte opposta. Se si sposta l'origine lungo l'asse senza invertirne il verso, tutte le coordinate cambiano della stessa quantità. La differenza tra due coordinate, invece, resta uguale.

Il simbolo $\Delta$ è la lettera greca delta maiuscola e indica la differenza fra un valore finale e uno iniziale. I pedici $i$ e $f$ stanno per «iniziale» e «finale». Tra gli istanti $t_i$ e $t_f$, con $t_f>t_i$, si definiscono due grandezze.

- Lo **spostamento** è $\Delta x=x(t_f)-x(t_i)$, cioè la coordinata finale meno quella iniziale.
- Il tempo trascorso è $\Delta t=t_f-t_i$.

Il segno di $\Delta x$ dice da quale parte della posizione iniziale si trova il punto alla fine. Se $\Delta x>0$, il punto finisce dalla parte del verso positivo. Se $\Delta x<0$, finisce dalla parte opposta. La **distanza percorsa**, invece, è la somma delle lunghezze effettive dei tratti percorsi, ciascuna presa con il segno positivo.

Un punto va da $x=2\,\mathrm m$ a $x=9\,\mathrm m$ e poi torna a $x=5\,\mathrm m$. Lo spostamento totale vale $\Delta x=5\,\mathrm m-2\,\mathrm m=3\,\mathrm m$. L'andata misura $9-2=7\,\mathrm m$ e il ritorno $9-5=4\,\mathrm m$, quindi la distanza percorsa è $7+4=11\,\mathrm m$. Nel grafico posizione-tempo, con il tempo sull'asse orizzontale e la posizione su quello verticale, il punto sale da $2\,\mathrm m$ a $9\,\mathrm m$ nei primi $2\,\mathrm s$ e poi scende fino a $5\,\mathrm m$ all'istante $4\,\mathrm s$.

Quando l'asse viene orientato al contrario, lo spostamento cambia segno, e lo stesso accade alla velocità e all'accelerazione. La distanza e la durata non dipendono da questa scelta. Perciò nei conti si fissa il verso all'inizio e lo si mantiene fino a quando si interpreta il risultato.
:::

::grafico{curve="t,2+3.5*t,0,2;t,13-2*t,2,4" punti="0,2,pieno;2,9,pieno;4,5,pieno" xmin=-0.2 xmax=4.4 ymin=0 ymax=10 nomi="t (s),x (m)" titolo="A 2 s il verso cambia. La distanza percorsa è 11 m e lo spostamento finale è 3 m"}

:::esempio{titolo="Lo stesso moto da due origini"}
Un sensore A registra il passaggio di un carrello da $x=3\,\mathrm m$ a $x=11\,\mathrm m$ in $4\,\mathrm s$. Il sensore B ha l'origine nel punto che per A ha coordinata $5\,\mathrm m$ e usa lo stesso verso positivo. Ogni coordinata di B, indicata con l'apice $x'$, è quindi quella di A diminuita di $5\,\mathrm m$. Nel riferimento di B il carrello va da $x'=3-5=-2\,\mathrm m$ a $x'=11-5=6\,\mathrm m$. Le coordinate dei due estremi cambiano di $-5\,\mathrm m$ ciascuna. Sottraendo la coordinata iniziale da quella finale si trova invece lo stesso spostamento per i due sensori.
$$
\Delta x=11\,\mathrm m-3\,\mathrm m=8\,\mathrm m,\qquad
\Delta x'=6\,\mathrm m-(-2\,\mathrm m)=8\,\mathrm m.
$$
La velocità media, cioè lo spostamento diviso il tempo trascorso, è perciò $\dfrac{8\,\mathrm m}{4\,\mathrm s}=2\,\mathrm{m/s}$ per entrambi. Se B orienta il suo asse nel verso opposto, ogni coordinata diventa $x'=5\,\mathrm m-x$, e si ottengono $x'_i=2\,\mathrm m$ e $x'_f=-6\,\mathrm m$. La velocità media diventa $\dfrac{-6-2}{4}\,\mathrm{m/s}=-2\,\mathrm{m/s}$ e descrive lo stesso moto con la convenzione di segno del sensore B. Nel grafico le tre rette sono la legge vista da A ($x_A$), da B con lo stesso verso ($x_B^{(+)}$) e da B con il verso opposto ($x_B^{(-)}$).

::grafico{curve="t,3+2*t,0,4;t,-2+2*t,0,4;t,2-2*t,0,4" legenda="x_A;x_B^{(+)};x_B^{(-)}" punti="0,3,pieno;0,-2,pieno;0,2,pieno;4,11,pieno;4,6,pieno;4,-6,pieno" xmin=0 xmax=4.55 ymin=-8 ymax=12 nomi="t (s),x (m)" titolo="Le tre rette descrivono un solo moto. Invertendo l'asse si inverte la pendenza."}
:::

## Velocità media e istantanea

:::definizione{#velocita titolo="Variazione della posizione"}
La **velocità media** fra due istanti è lo spostamento diviso il tempo trascorso.
$$
v_m=\frac{\Delta x}{\Delta t}
$$
Si misura in metri al secondo, $\mathrm{m/s}$. In un grafico posizione-tempo la velocità media è la pendenza del segmento che unisce i due punti registrati. La **pendenza** di un segmento è il rapporto fra la variazione della coordinata verticale e la variazione di quella orizzontale, qui $\dfrac{\Delta x}{\Delta t}$. La retta che passa per due punti di un grafico si chiama **secante**.

La **rapidità media** è la distanza percorsa divisa il tempo trascorso, quindi non è mai negativa. Per un percorso di andata e ritorno la velocità media è zero, perché lo spostamento è zero, mentre la rapidità media è positiva. Nel moto da $2\,\mathrm m$ a $9\,\mathrm m$ e ritorno a $5\,\mathrm m$, durato $4\,\mathrm s$, la velocità media vale $\dfrac{3}{4}\,\mathrm{m/s}=0{,}75\,\mathrm{m/s}$ e la rapidità media vale $\dfrac{11}{4}\,\mathrm{m/s}=2{,}75\,\mathrm{m/s}$.

La **velocità istantanea** $v$ è la velocità in un singolo istante, come quella indicata dal tachimetro. Si ottiene calcolando la velocità media su intervalli sempre più piccoli attorno all'istante studiato, quando questi valori si avvicinano a un unico numero. La velocità istantanea è positiva se il punto si muove nel verso positivo e negativa nel verso opposto. Il suo valore senza segno si chiama **modulo** della velocità, o **rapidità**.

Geometricamente la velocità istantanea è la pendenza della **tangente** al grafico di $x(t)$ in quell'istante, cioè della retta che passa per quel punto del grafico con la stessa inclinazione del grafico. Se il grafico ha uno spigolo, cioè un punto in cui forma un angolo, la pendenza del tratto a sinistra e quella del tratto a destra possono essere diverse. Un **modello** è una descrizione semplificata del moto. Un modello a spigolo descrive bene le posizioni prima e dopo una manovra rapida, ma non assegna un'unica velocità all'istante ideale del cambio.

Si consideri $x(t)=2t^2$, con $x$ in metri e $t$ in secondi. Per valutare la pendenza a $t=1\,\mathrm s$ si calcola la velocità media fra l'istante $1$ e l'istante $1+h$, dove $h$ è una durata piccola.
$$
\frac{x(1+h)-x(1)}{h}
=\frac{2(1+h)^2-2}{h}
=\frac{2+4h+2h^2-2}{h}
=\frac{4h+2h^2}{h}=4+2h.
$$
Nell'ultimo passaggio si divide per $h$, e la divisione è possibile perché $h$ è piccolo ma diverso da zero. Per $h$ sempre più vicino a zero il rapporto $4+2h$ si avvicina a $4$, quindi la velocità istantanea a $1\,\mathrm s$ vale $4\,\mathrm{m/s}$. Il grafico mostra la parabola $x=2t^2$ e la sua tangente nel punto di coordinate $1\,\mathrm s$ e $2\,\mathrm m$.
:::

::grafico{f="2*x^2;4*x-2" punti="1,2,pieno" xmin=0 xmax=2 ymin=0 ymax=8.5 nomi="t (s),x (m)" titolo="La tangente nel punto con t uguale a 1 s ha pendenza 4 m/s"}

:::esempio{titolo="Stimare la velocità da un campionamento"}
Un sensore che registra la posizione solo in alcuni istanti esegue un **campionamento**. Il sensore registra posizioni di $4\,\mathrm m$, $9\,\mathrm m$ e $16\,\mathrm m$ ai tempi $2\,\mathrm s$, $3\,\mathrm s$ e $4\,\mathrm s$.

- La pendenza del tratto precedente a $3\,\mathrm s$ vale $\dfrac{9-4}{3-2}\,\mathrm{m/s}=5\,\mathrm{m/s}$.
- La pendenza del tratto successivo vale $\dfrac{16-9}{4-3}\,\mathrm{m/s}=7\,\mathrm{m/s}$.
- I due punti agli estremi danno la stima centrata sull'istante $3\,\mathrm s$, che vale $\dfrac{16-4}{4-2}\,\mathrm{m/s}=6\,\mathrm{m/s}$.

Nel modello con accelerazione costante la velocità cambia linearmente, cioè di quantità uguali in tempi uguali. Perciò la velocità media sull'intervallo coincide con la velocità all'istante centrale. Nel grafico questo si vede dal fatto che la secante per i punti a $2\,\mathrm s$ e $4\,\mathrm s$ è parallela alla tangente a $3\,\mathrm s$. Per un moto qualsiasi il campionamento da solo fornisce solo velocità medie. Una fermata o un cambio di verso tra due letture potrebbe non comparire nei dati. Per decidere quanto è affidabile la stima della velocità istantanea servono misure più ravvicinate o un modello del moto.

Un altro fotogramma, a $t=3{,}5\,\mathrm s$, dà la posizione $12{,}4\,\mathrm m$ con **incertezza** $0{,}2\,\mathrm m$. L'incertezza indica che la posizione vera sta fra $12{,}4-0{,}2=12{,}2\,\mathrm m$ e $12{,}4+0{,}2=12{,}6\,\mathrm m$.

- Il modello $x=t^2$ prevede $3{,}5^2=12{,}25\,\mathrm m$.
- L'**interpolazione** rettilinea, cioè il segmento che collega i dati a $3\,\mathrm s$ e a $4\,\mathrm s$, prevede a metà intervallo $\dfrac{9+16}{2}\,\mathrm m=12{,}5\,\mathrm m$.

Entrambe le previsioni rientrano nell'intervallo dichiarato, quindi sono entrambe **compatibili** con la misura. Il fotogramma aggiuntivo rende più fitte le letture nel tempo, ma la sua precisione lascia ancora compatibili entrambi i modelli su questo breve intervallo.

Se ciascuna lettura agli estremi, a $2\,\mathrm s$ e $4\,\mathrm s$, ha errore massimo di posizione di $0{,}2\,\mathrm m$, lo spostamento stimato può sbagliare al massimo di $0{,}2+0{,}2=0{,}4\,\mathrm m$. L'effetto più grande si ha con una lettura in eccesso e l'altra in difetto. Su $2\,\mathrm s$ l'errore nella velocità media può quindi raggiungere $\dfrac{0{,}4}{2}\,\mathrm{m/s}=0{,}2\,\mathrm{m/s}$. Un errore di azzeramento, cioè uno zero dello strumento spostato che aggiunge la stessa quantità a tutte le letture, si elimina nella differenza. L'incertezza calcolata riguarda la misura della velocità media. Per identificarla con la velocità istantanea a $3\,\mathrm s$ occorre anche il modello.

::grafico{f="x^2" curve="t,6*t-8,2,4;t,6*t-9,2.3,3.88" legenda="\text{Moto};\text{Secante};\text{Tangente}" punti="2,4,pieno;3,9,pieno;4,16,pieno" segmenti="3,3,3,9" xmin=1.8 xmax=4.3 ymin=2 ymax=18.5 nomi="t (s),x (m)" titolo="La secante agli estremi è parallela alla tangente all'istante centrale."}
:::

## Moto uniforme

:::teorema{#uniforme titolo="Legge oraria a velocità costante"}
Un moto è **uniforme** quando la velocità è costante. A velocità costante, intervalli di tempo uguali producono spostamenti uguali. Se $x_0$ è la posizione all'istante $t_0$, nel tempo $t-t_0$ il punto si sposta di $v(t-t_0)$, quindi
$$
x(t)=x_0+v(t-t_0).
$$
Questa formula si chiama **legge oraria**, perché dà la posizione in ogni istante. Per esempio, con $x_0=9\,\mathrm m$ a $t_0=3\,\mathrm s$ e $v=2\,\mathrm{m/s}$, all'istante $8\,\mathrm s$ si ha $x=9+2\cdot(8-3)=19\,\mathrm m$.

Nel grafico $x$ in funzione di $t$ la legge oraria è una retta di pendenza $v$. A velocità negativa la retta scende, perché la coordinata diminuisce. Una retta parallela all'asse del tempo ha pendenza zero e rappresenta il riposo. L'**intercetta** sull'asse verticale è il valore di $x$ per $t=0$, e coincide con $x_0$ soltanto se $t_0=0$. Nell'esempio precedente $x(t)=9+2(t-3)=3+2t$, quindi l'intercetta vale $3\,\mathrm m$ e non coincide con $x_0=9\,\mathrm m$.

Due punti si incontrano quando hanno la stessa posizione nello stesso istante. Per individuare l'incontro si scrivono entrambe le leggi orarie nello stesso riferimento e con lo stesso orologio. Si uguagliano poi le coordinate. Le leggi $x_A(t)=4+3t$ e $x_B(t)=22-t$ sono scritte in **unità SI**, cioè nelle unità del Sistema Internazionale: $x$ in metri e $t$ in secondi.
$$
4+3t=22-t\ \Longrightarrow\ 4t=18\ \Longrightarrow\ t=\frac{18}{4}\,\mathrm s=4{,}5\,\mathrm s.
$$
Sostituendo questo istante in entrambe le equazioni si ottiene $x_A=4+3\cdot4{,}5=17{,}5\,\mathrm m$ e $x_B=22-4{,}5=17{,}5\,\mathrm m$. Il controllo evita di confondere un incontro con due passaggi nella stessa posizione a tempi differenti. Lo stesso istante si trova dalla distanza fra i due punti. All'inizio essa vale $22-4=18\,\mathrm m$ e, poiché i punti si vengono incontro, diminuisce ogni secondo di $3+1=4\,\mathrm m$, cioè della somma delle due rapidità. Nel grafico l'incontro è il punto in cui le due rette si intersecano.
:::

::grafico{f="4+3*x;22-x" punti="4.5,17.5,pieno" xmin=0 xmax=6 ymin=0 ymax=26 nomi="t (s),x (m)" titolo="L'intersezione indica la stessa posizione nello stesso istante"}

:::osservazione{#moto-a-tratti titolo="Tratti successivi"}
Se il moto ha più tratti, ogni tratto ha la propria durata e i propri dati iniziali. Il secondo tratto riparte dalla posizione raggiunta nel primo. Un punto parte da $x=0$.

- Per tre secondi a $4\,\mathrm{m/s}$ si sposta di $4\cdot3=12\,\mathrm m$.
- Nei due secondi successivi con velocità $-2\,\mathrm{m/s}$ lo spostamento è $(-2)\cdot2=-4\,\mathrm m$.

Lo spostamento totale è $12-4=8\,\mathrm m$ in $5\,\mathrm s$, dunque la velocità media è $\dfrac{8}{5}\,\mathrm{m/s}=1{,}6\,\mathrm{m/s}$. La media aritmetica delle due velocità vale invece $\dfrac{4+(-2)}{2}\,\mathrm{m/s}=1\,\mathrm{m/s}$, perché assegna loro lo stesso peso, anche se sono mantenute per durate diverse.

Quando la legge oraria di un tratto usa il tempo misurato dal cambio di tratto, il secondo tratto comincia con $t-t_1$, dove $t_1$ è l'istante del cambio. Nel moto appena descritto $t_1=3\,\mathrm s$ e il secondo tratto ha legge $x=12-2(t-3)$, che a $t=5\,\mathrm s$ dà $8\,\mathrm m$. La legge di un singolo tratto si chiama **ramo**. Una soluzione ottenuta con un ramo rappresenta un evento solo se il tempo calcolato appartiene all'intervallo di quel ramo.
:::

:::esempio{titolo="Durate diverse su distanze uguali"}
Una ciclista percorre $600\,\mathrm m$ a $6\,\mathrm{m/s}$, poi altri $600\,\mathrm m$ nello stesso verso a $3\,\mathrm{m/s}$. Nel primo tratto impiega $\dfrac{600}{6}\,\mathrm s=100\,\mathrm s$, nel secondo $\dfrac{600}{3}\,\mathrm s=200\,\mathrm s$. In tutto percorre $1200\,\mathrm m$ in $300\,\mathrm s$, dunque la velocità media vale $\dfrac{1200}{300}\,\mathrm{m/s}=4\,\mathrm{m/s}$. La media aritmetica delle due velocità sarebbe $\dfrac{6+3}{2}\,\mathrm{m/s}=4{,}5\,\mathrm{m/s}$ e corrisponderebbe a tratti percorsi per tempi uguali. A parità di distanza, il tratto più lento occupa più tempo e pesa di più nella media. Se la ciclista percorresse il secondo tratto in senso opposto, ritornerebbe alla partenza dopo $300\,\mathrm s$. La rapidità media resterebbe $4\,\mathrm{m/s}$, mentre la velocità media sarebbe zero.
:::

:::esempio{titolo="Un incontro durante una sosta"}
Il carrello A parte da $2\,\mathrm m$ e avanza a $4\,\mathrm{m/s}$ fino a $3\,\mathrm s$, quando raggiunge $2+4\cdot3=14\,\mathrm m$. Resta fermo fino a $6\,\mathrm s$ e poi torna indietro a $-2\,\mathrm{m/s}$. Il carrello B segue $x_B(t)=26-3t$ in unità SI. Le leggi di A sono tre rami.

- Andata, per $0\leq t\leq3$: $x_A=2+4t$.
- Sosta, per $3\leq t\leq6$: $x_A=14$.
- Ritorno, per $t\geq6$: $x_A=14-2(t-6)=26-2t$.

Si uguaglia $x_B$ a ciascun ramo e si controlla l'intervallo.

- Andata: $2+4t=26-3t$ dà $7t=24$, cioè $t=\dfrac{24}{7}\,\mathrm s\simeq3{,}4\,\mathrm s$. L'istante supera la durata del primo tratto di A, quindi i due carrelli non si incontrano in quel tratto.
- Sosta: $14=26-3t$ dà $3t=12$, cioè $t=4\,\mathrm s$, che appartiene all'intervallo della sosta.
- Ritorno: $26-2t=26-3t$ dà $t=0$, che è fuori dal ramo.

L'unico incontro avviene a quattro secondi, con A fermo a $14\,\mathrm m$. Verificare ogni intervallo permette di scartare anche l'apparente secondo incontro ottenuto prolungando la retta del ritorno. Nel grafico la legge di A ha il tratto orizzontale della sosta, e il punto I è l'incontro.

::grafico{f="2+4*x-2*((x-3)+abs(x-3))-((x-6)+abs(x-6));26-3*x" legenda="x_A;x_B" punti="3,14,pieno;4,14,pieno;6,14,pieno" segmenti="4,0,4,14" etichette="4.12,14.97,I" xmin=0 xmax=8.4 ymin=0 ymax=26.9 nomi="t (s),x (m)" titolo="A si ferma a 3 s e riparte a 6 s. L'intersezione I è a 4 s, durante la sosta."}
:::

## Accelerazione

:::definizione{#accelerazione titolo="Variazione della velocità"}
L'**accelerazione media** sull'intervallo è la variazione di velocità divisa il tempo trascorso.
$$
a_m=\frac{v_f-v_i}{t_f-t_i}
$$
La sua unità è $\mathrm{m/s^2}$, che si legge «metri al secondo quadrato». Un'accelerazione di $2\,\mathrm{m/s^2}$ indica che la velocità cambia di $2\,\mathrm{m/s}$ ogni secondo. L'**accelerazione istantanea** $a$ è la pendenza della tangente al grafico velocità-tempo, che ha il tempo sull'asse orizzontale e la velocità su quello verticale. Da $v_i=4\,\mathrm{m/s}$ a $v_f=-2\,\mathrm{m/s}$ in $3\,\mathrm s$ si ricava
$$
a_m=\frac{-2-4}{3}\,\mathrm{m/s^2}=\frac{-6}{3}\,\mathrm{m/s^2}=-2\,\mathrm{m/s^2}.
$$
Se la velocità è continua, cioè cambia senza salti, essa passa per zero all'interno dell'intervallo, perché va da un valore positivo a uno negativo. Il valore finale, però, non specifica in quale istante passa per zero.

Il segno dell'accelerazione descrive come cambia la velocità orientata, cioè la velocità con il suo segno.

- Se $v$ e $a$ hanno lo stesso segno, il modulo di $v$ cresce.
- Se hanno segni opposti, il modulo diminuisce e il corpo rallenta. Un'accelerazione di verso opposto alla velocità si chiama **decelerazione**. Nei problemi di frenata se ne indica il modulo con $d$, e con l'asse nel verso del moto l'accelerazione vale $a=-d$.

Con $v<0$ e $a<0$, il punto accelera in modulo verso il lato negativo. Per esempio, la velocità può passare da $-3\,\mathrm{m/s}$ a $-9\,\mathrm{m/s}$. Un istante con $v=0$ può corrispondere a un cambio di verso con accelerazione non nulla. Nel grafico di $v=4-2t$ la velocità si annulla a $2\,\mathrm s$, mentre l'accelerazione vale sempre $-2\,\mathrm{m/s^2}$.
:::

::grafico{f="4-2*x" punti="2,0,pieno;3,-2,pieno" xmin=0 xmax=3.3 ymin=-3 ymax=5 nomi="t (s),v (m/s)" titolo="Prima di 2 s la rapidità diminuisce. Poi cresce nel verso negativo"}

:::esempio{titolo="Accelerazione costante da tre posizioni"}
Per un carrello vale $x(0)=0\,\mathrm m$. Due fotografie scattate dopo $1\,\mathrm s$ e $2\,\mathrm s$ danno posizioni $7\,\mathrm m$ e $20\,\mathrm m$.

- I due spostamenti di un secondo valgono $7-0=7\,\mathrm m$ e $20-7=13\,\mathrm m$, quindi le velocità medie sono $7\,\mathrm{m/s}$ e $13\,\mathrm{m/s}$.
- Se l'accelerazione è costante, queste sono le velocità agli istanti centrali $0{,}5\,\mathrm s$ e $1{,}5\,\mathrm s$.
- La velocità aumenta di $13-7=6\,\mathrm{m/s}$ in $1\,\mathrm s$, quindi $a=6\,\mathrm{m/s^2}$.
- Tornando di mezzo secondo fino a $t=0$ si sottraggono $6\cdot0{,}5=3\,\mathrm{m/s}$ e si trova $v_0=7-3=4\,\mathrm{m/s}$.

Con tali dati la legge oraria, ricavata nella sezione sul moto uniformemente accelerato, è $x(t)=4t+3t^2$ in unità SI. Essa riproduce entrambe le fotografie, perché $x(1)=4+3=7\,\mathrm m$ e $x(2)=8+12=20\,\mathrm m$. Una quarta fotografia permetterebbe di controllare la validità del modello su un nuovo intervallo.

Si supponga che la quarta foto a $t=3\,\mathrm s$ dia $38{,}7\,\mathrm m$ con incertezza $0{,}1\,\mathrm m$. In questa verifica si prendono come riferimento per il modello le letture precedenti, considerate esatte.

| $t$ (s) | $x$ misurata (m) | $x$ prevista (m) |
| ---: | ---: | ---: |
| 0 | 0 | 0 |
| 1 | 7 | 7 |
| 2 | 20 | 20 |
| 3 | $38{,}7\pm0{,}1$ | 39 |

Il modello prevede $4\cdot3+3\cdot3^2=12+27=39\,\mathrm m$ per la nuova misura. Lo **scarto**, cioè la differenza fra valore previsto e valore misurato, è $39-38{,}7=0{,}3\,\mathrm m$. Esso supera l'incertezza dichiarata, quindi $39\,\mathrm m$ cade fuori dall'intervallo da $38{,}6\,\mathrm m$ a $38{,}8\,\mathrm m$. Se gli istanti sono corretti, la quarta foto è incompatibile con l'**estrapolazione**, cioè con l'uso del modello fuori dall'intervallo dei dati da cui è stato ricavato. Controllando gli orologi e aggiungendo altre misure si distingue un errore sul tempo da una variazione dell'accelerazione. Il grafico ingrandisce la zona vicina a $3\,\mathrm s$, con la lettura di $38{,}7\,\mathrm m$, la sua barra d'incertezza e il valore previsto di $39\,\mathrm m$ indicato dal cerchio vuoto.

::grafico{f="4*x+3*x^2" legenda="x=4t+3t^2" punti="3,38.7,pieno;3,39,vuoto" linee="3,38.6 3,38.8;2.994,38.6 3.006,38.6;2.994,38.8 3.006,38.8" etichette="3.012,38.72,38,7 m;2.964,39.09,39 m" xmin=2.93 xmax=3.07 ymin=37.5 ymax=40.6 nomi="t (s),x (m)" titolo="Vicino a 3 s il modello passa sopra la barra d'incertezza della quarta lettura."}
:::

## Leggi del moto uniformemente accelerato

:::teorema{#uniformemente-accelerato titolo="Posizione e velocità con accelerazione costante"}
Un moto con accelerazione costante si chiama **uniformemente accelerato**. Con $t$ misurato dall'inizio del tratto, e con $x_0$ e $v_0$ posizione e velocità all'istante $t=0$, valgono
$$
v=v_0+at,\qquad x=x_0+v_0t+\tfrac12at^2,\qquad
v^2=v_0^2+2a(x-x_0).
$$
La prima relazione traduce l'incremento di velocità, che in $t$ secondi è $at$.

Per la seconda si osserva che la velocità varia linearmente, quindi il suo valore medio è $\dfrac{v_0+v}{2}$. Lo spostamento è la velocità media moltiplicata per $t$. Sostituendo $v=v_0+at$ si ottiene
$$
x-x_0=\frac{v_0+v}{2}\,t=\frac{v_0+v_0+at}{2}\,t=v_0t+\tfrac12at^2.
$$
Per la terza si moltiplicano membro a membro la prima relazione, scritta come $v-v_0=at$, e il fattore $v+v_0$. Il primo membro diventa $v^2-v_0^2$, perché il prodotto di una somma per una differenza è la differenza dei quadrati. Nel secondo membro compare $(v+v_0)t$, che per la seconda relazione vale $2(x-x_0)$.
$$
v^2-v_0^2=a\,(v+v_0)\,t=2a(x-x_0).
$$
Questa relazione non contiene il tempo e si chiama relazione senza tempo.

Nell'ultima equazione appare $v^2$. Una radice quadrata determina il modulo ma non il segno. Per esempio, $v^2=25\,\mathrm{m^2/s^2}$ vale sia per $v=5\,\mathrm{m/s}$ sia per $v=-5\,\mathrm{m/s}$. Un corpo lanciato verso l'alto attraversa la stessa quota mentre sale e mentre scende. Per distinguere i due eventi occorrono il tempo o altre indicazioni sul verso.

Per una frenata da $v_0=20\,\mathrm{m/s}$ a $v=0$, con accelerazione $-5\,\mathrm{m/s^2}$, valgono i due calcoli seguenti.

- Dalla prima relazione $0=20-5t$, quindi il tempo di frenata è $t=4\,\mathrm s$.
- Dalla relazione senza tempo $0=20^2+2\cdot(-5)\cdot(x-x_0)$, quindi lo spazio di frenata è $x-x_0=\dfrac{400}{10}\,\mathrm m=40\,\mathrm m$.

Il **tempo di reazione** è il tempo che passa fra il momento in cui il conducente vede l'ostacolo e l'inizio della frenata. Se dura un secondo, il veicolo lo percorre a velocità costante e aggiunge altri $20\cdot1=20\,\mathrm m$. Dopo l'arresto il modello di frenata va sostituito con il tratto a riposo, con $v=0$, se il veicolo resta fermo. Nel grafico velocità-tempo il rettangolo corrisponde al tempo di reazione e il triangolo alla frenata.
:::

::grafico{curve="t,20,0,1;t,25-5*t,1,5" area="20;0;0;1|25-5*x;0;1;5" segmenti="1,0,1,20;5,0,6,0" punti="1,20,pieno;5,0,pieno" xmin=0 xmax=6.2 ymin=-0.5 ymax=24 nomi="t (s),v (m/s)" titolo="Prima della frenata c'è il rettangolo del tempo di reazione. Il triangolo rappresenta la frenata"}

:::esempio{titolo="Due passaggi alla stessa quota"}
Una pallina parte dal suolo con velocità $15\,\mathrm{m/s}$ verso l'alto. Il simbolo $g$ indica il modulo dell'accelerazione di gravità, che vicino al suolo vale circa $9{,}81\,\mathrm{m/s^2}$; qui si usa $g=10\,\mathrm{m/s^2}$. Con l'asse verso l'alto l'accelerazione è $a=-10\,\mathrm{m/s^2}$, quindi la quota in metri è $x(t)=15t-5t^2$ quando il tempo è espresso in secondi. Per sapere quando raggiunge $10\,\mathrm m$ si risolve l'equazione, divisa per $-5$ nel secondo passaggio.
$$
15t-5t^2=10,\qquad t^2-3t+2=0,\qquad (t-1)(t-2)=0.
$$
I due passaggi avvengono a $t=1\,\mathrm s$ e $t=2\,\mathrm s$. Dalla legge della velocità $v(t)=15-10t$ si ottengono rispettivamente $5\,\mathrm{m/s}$ verso l'alto e $-5\,\mathrm{m/s}$ nel verso scelto. Alla stessa quota i moduli sono uguali, mentre la pendenza della curva cambia segno, positiva in P e negativa in Q. La quota massima A si raggiunge quando $v=0$, cioè a $t=1{,}5\,\mathrm s$, e vale $15\cdot1{,}5-5\cdot1{,}5^2=11{,}25\,\mathrm m$. L'istante $1{,}5\,\mathrm s$ è a metà fra i due passaggi, perché la parabola è simmetrica rispetto all'istante della quota massima. Se la pallina viene intercettata al primo passaggio, il modello di volo termina lì e la seconda radice descrive solo la traiettoria che avrebbe seguito senza l'intercettazione.

::grafico{curve="t,15*t-5*t^2,0,3" punti="1,10,pieno;2,10,pieno;1.5,11.25,pieno" segmenti="1,0,1,10;2,0,2,10;1,10,2,10" etichette="0.81,10.53,P;2.16,10.05,Q;1.52,11.8,A" xmin=0 xmax=3.32 ymin=0 ymax=12.8 nomi="t (s),x (m)" titolo="La quota è la stessa in P e Q. La tangente sale in P e scende in Q."}
:::

## Leggere i grafici e la caduta libera

:::osservazione{#grafici-caduta titolo="Pendenze e aree"}
Nel grafico velocità-tempo, l'**area orientata** tra la curva e l'asse del tempo restituisce lo spostamento. L'area sopra l'asse, dove $v>0$, è positiva, e quella sotto l'asse, dove $v<0$, è negativa. Il motivo si vede in un tratto a velocità costante, dove lo spostamento $v\,\Delta t$ è l'area del rettangolo di base $\Delta t$ e altezza $v$. Per la distanza percorsa si sommano i moduli delle aree.

Se $v$ diminuisce linearmente da $4$ a $-2\,\mathrm{m/s}$ in $3\,\mathrm s$, perde $2\,\mathrm{m/s}$ ogni secondo e quindi passa per zero a $2\,\mathrm s$.

- Il triangolo positivo ha area $\tfrac12\cdot2\cdot4=4\,\mathrm m$.
- Il triangolo negativo ha area $\tfrac12\cdot1\cdot(-2)=-1\,\mathrm m$.

Lo spostamento vale $4-1=3\,\mathrm m$ e la distanza $4+1=5\,\mathrm m$.

Vicino al suolo e trascurando la resistenza dell'aria, un corpo in **caduta libera** accelera verso il basso con modulo $g$, che vale circa $9{,}81\,\mathrm{m/s^2}$ e nei conti si arrotonda a volte a $10\,\mathrm{m/s^2}$. Se l'asse, indicato con $y$, punta verso l'alto, $a=-g$. Per un corpo lasciato da fermo all'altezza $h$, si pone $y(0)=h$ e $v_0=0$, quindi $y(t)=h-\tfrac12gt^2$. Al suolo la quota è zero.
$$
0=h-\tfrac12gt^2\ \Longrightarrow\ t^2=\frac{2h}{g}\ \Longrightarrow\ t=\sqrt{\frac{2h}{g}}
$$
Si sceglie la radice positiva, perché il tempo trascorso dal rilascio è positivo. Con $h=20\,\mathrm m$ e $g=10\,\mathrm{m/s^2}$ si ottiene $t=\sqrt{4}\,\mathrm s=2\,\mathrm s$. Il modello vale fino al contatto con il suolo.

Due oggetti lasciati cadere dalla stessa quota con le stesse condizioni iniziali arrivano insieme nel modello, perché la legge $y=h-\tfrac12gt^2$ non contiene la massa. Se uno parte un secondo dopo, al secondo rilascio il primo ha già velocità di modulo $g\cdot1\,\mathrm s$, circa $10\,\mathrm{m/s}$, ed è già sceso di circa $5\,\mathrm m$. Da quel momento i due hanno la stessa accelerazione, quindi la differenza delle loro velocità, cioè la **velocità relativa**, resta costante e la distanza fra loro continua a crescere. Confrontare soltanto le accelerazioni non basta per concludere che la separazione rimanga costante.
:::

:::esempio{titolo="Area con segno quando la velocità si inverte"}
Su una guida, la velocità varia linearmente da $6\,\mathrm{m/s}$ a $-2\,\mathrm{m/s}$ in $4\,\mathrm s$. La variazione è $-8\,\mathrm{m/s}$ in $4\,\mathrm s$, quindi la velocità perde $2\,\mathrm{m/s}$ ogni secondo e si annulla al terzo secondo.

- Il triangolo sopra l'asse ha base $3\,\mathrm s$ e altezza $6\,\mathrm{m/s}$, pari a uno spostamento di $\tfrac12\cdot3\cdot6=9\,\mathrm m$.
- Il triangolo sotto l'asse ha base $1\,\mathrm s$ e altezza di modulo $2\,\mathrm{m/s}$, pari a uno spostamento di $-\tfrac12\cdot1\cdot2=-1\,\mathrm m$.

Lo spostamento totale vale $9-1=8\,\mathrm m$ e la distanza percorsa $9+1=10\,\mathrm m$. Si ottiene ancora $8\,\mathrm m$ moltiplicando la media delle velocità iniziale e finale, $\dfrac{6+(-2)}{2}\,\mathrm{m/s}=2\,\mathrm{m/s}$, per la durata di $4\,\mathrm s$, poiché l'andamento è lineare. Per ricavare la distanza occorre invece spezzare il calcolo dove la velocità si annulla.

L'area dà la posizione finale quando si conosce la coordinata iniziale. Se il punto parte da $x(0)=2\,\mathrm m$, termina a $2+8=10\,\mathrm m$. All'inversione la coordinata è $2+9=11\,\mathrm m$, perché fino a quell'istante si è accumulato il solo triangolo positivo. La posizione raggiunge quindi un massimo a $t=3\,\mathrm s$ con accelerazione ancora costante.

::grafico{curve="t,6-2*t,0,4" area="6-2*x;0;0;3|0;6-2*x;3;4" punti="0,6,pieno;3,0,pieno;4,-2,pieno" segmenti="4,0,4,-2" etichette="0.91,1.25,+9 m;3.42,-0.38,−1 m" xmin=0 xmax=4.23 ymin=-3 ymax=7 nomi="t (s),v (m/s)" titolo="I due triangoli contribuiscono allo spostamento con 9 m e −1 m."}
:::
