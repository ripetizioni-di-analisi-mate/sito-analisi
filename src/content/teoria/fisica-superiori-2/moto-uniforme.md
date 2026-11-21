---
titolo: Moto rettilineo uniforme e grafici
sommario: Come si ricavano posizione, velocità e tempi di incontro lungo una retta e come si leggono le leggi del moto nei grafici.
---

## Posizione e spostamento

:::definizione{#posizione titolo="Descrivere la posizione di un corpo"}
Per descrivere un moto lungo una strada rettilinea servono tre scelte:
- un'**origine**, cioè un punto della strada da cui si misurano le distanze;
- un **verso positivo**, cioè una delle due direzioni di marcia, indicata con una freccia;
- un'unità di lunghezza, di solito il metro ($\mathrm m$).

La strada con queste tre scelte si chiama **asse** e le tre scelte insieme formano il **riferimento**. La **posizione** $x$ di un corpo è la sua **coordinata** su questo asse: un numero con segno, che dice a quanti metri dall'origine si trova il corpo e da quale parte. Per esempio, $x=5\,\mathrm m$ indica un punto a $5$ metri dall'origine nel verso positivo. Una coordinata negativa, come $x=-3\,\mathrm m$, indica che il corpo si trova dalla parte dell'origine opposta al verso positivo.

La **legge oraria** assegna una posizione a ogni **istante** $t$, cioè a ogni lettura dell'orologio, misurata in secondi ($\mathrm s$). La posizione in un solo istante non dice in quale verso il corpo si muove. Per stabilire il verso del moto si confrontano le posizioni in almeno due istanti, oppure si usa la velocità, se è nota. Un corpo a $-4\,\mathrm m$, per esempio, può spostarsi verso $-1\,\mathrm m$ oppure verso $-7\,\mathrm m$.
:::

:::definizione{#distanza titolo="Spostamento e distanza percorsa"}
In un intervallo di tempo lo **spostamento** è
$$
\Delta x=x_f-x_i,
$$
dove $x_i$ è la posizione iniziale e $x_f$ è quella finale (i pedici $i$ e $f$ stanno per «iniziale» e «finale»). Il simbolo $\Delta$ è la lettera greca delta maiuscola; davanti a una grandezza indica la differenza fra il valore finale e quello iniziale. Lo spostamento è positivo quando la coordinata finale è maggiore di quella iniziale e negativo quando è minore.

Lo spostamento dipende dal riferimento in due modi.
- Se si sposta l'origine lungo l'asse, entrambe le coordinate cambiano della stessa quantità, quindi la loro differenza rimane uguale.
- Se si inverte il verso dell'asse, ogni coordinata cambia segno, quindi cambia segno anche lo spostamento.

La **distanza percorsa** è la lunghezza del tragitto, cioè quanti metri il corpo ha effettivamente percorso; è sempre positiva o nulla. Se il corpo si muove sempre nello stesso verso, la distanza è $|\Delta x|$. Le sbarrette indicano il **valore assoluto** (o **modulo**), cioè il numero preso senza segno: $|-12|=12$. Quando il corpo compie un'inversione di marcia, il percorso si divide in tratti percorsi in un solo verso e la distanza è la somma delle lunghezze dei tratti. Nello spostamento, invece, i tratti in versi opposti contano con segni opposti.
:::

:::esempio{titolo="Una consegna con ritorno"}
Un corriere parte da $x_i=-2\,\mathrm{m}$, arriva a $x=6\,\mathrm{m}$ e torna a $x_f=1\,\mathrm{m}$. Il primo tratto misura $6-(-2)=8\,\mathrm{m}$, il secondo $6-1=5\,\mathrm{m}$. Lo spostamento totale è
$$
\Delta x=x_f-x_i=1-(-2)=3\,\mathrm{m},
$$
mentre la distanza percorsa è $8+5=13\,\mathrm{m}$. Lo spostamento si ritrova anche sommando i contributi dei due tratti con il loro segno: il tratto di andata conta $+8\,\mathrm m$, quello di ritorno $1-6=-5\,\mathrm{m}$, e $8+(-5)=3\,\mathrm m$. Nel passaggio da $-2\,\mathrm{m}$ a $1\,\mathrm{m}$ il corriere attraversa anche l'origine. La posizione finale si trova a un metro dall'origine, mentre la distanza percorsa dipende da tutta la successione dei tratti.

Il grafico mette il tempo in orizzontale e la posizione in verticale, con due secondi per ciascun tratto: la linea sale da P a Q e scende da Q a R.

::grafico{f="(-2+4*x)*(x<=2)+(11-2.5*x)*(x>2)" xmin=0 xmax=4 ymin=-3 ymax=7 punti="0,-2,pieno;2,6,pieno,Q;4,1,pieno,R" etichette="0.15,-2.25,P" nomi="t (s),x (m)" titolo="Sul primo tratto la posizione cresce da −2 m a 6 m, sul secondo decresce a 1 m."}
:::

:::esempio{titolo="Posizioni negative nella stessa origine"}
Su un binario un carrello va da $-18\,\mathrm m$ a $-6\,\mathrm m$ senza invertire il moto. Lo spostamento è la differenza fra la lettura finale e quella iniziale:
$$
\Delta x=-6-(-18)=-6+18=12\,\mathrm m.
$$
Lo spostamento è positivo, quindi il carrello si muove nel verso positivo, anche se rimane dal lato negativo dell'origine.

Si sposta ora l'origine di $4\,\mathrm m$ nel verso positivo, senza cambiare il verso dell'asse. Ogni punto si trova $4\,\mathrm m$ più indietro rispetto alla nuova origine, quindi a ogni lettura si sottrae $4\,\mathrm m$: le due letture diventano $-18-4=-22\,\mathrm m$ e $-6-4=-10\,\mathrm m$. La loro differenza è $-10-(-22)=12\,\mathrm m$, perché la stessa correzione è stata sottratta da entrambe. Lo spostamento dipende quindi dal movimento del carrello e non dalla posizione scelta per l'origine.
:::

## Velocità media e unità di misura

:::definizione{#velocita titolo="Variazione della posizione nel tempo"}
La **velocità media** è lo spostamento diviso per il tempo impiegato a compierlo. Per due istanti $t_i<t_f$ vale
$$
v_m=\frac{x_f-x_i}{t_f-t_i}=\frac{\Delta x}{\Delta t},
$$
dove $\Delta t=t_f-t_i$ è la durata dell'intervallo e il pedice $m$ sta per «media». Se un corpo passa da $20\,\mathrm m$ a $8\,\mathrm m$ in $4\,\mathrm s$, si ha
$$
v_m=\frac{8-20}{4}\,\mathrm{m/s}=\frac{-12}{4}\,\mathrm{m/s}=-3\,\mathrm{m/s}.
$$
La durata è positiva, perciò il segno di $v_m$ coincide con quello dello spostamento. Quindi una velocità media negativa indica che la posizione finale è minore di quella iniziale. La velocità media riguarda l'intero intervallo e non dice come il corpo si sia mosso al suo interno.

La **rapidità** è la velocità presa senza segno, cioè il suo modulo; indica quanti metri si percorrono ogni secondo, in qualunque verso. La **rapidità media** è la distanza totale percorsa divisa per la durata totale. La distanza percorsa è sempre almeno $|\Delta x|$, quindi anche la rapidità media è almeno $|v_m|$. In un viaggio con ritorno al punto di partenza lo spostamento è zero, quindi la velocità media vale zero; la rapidità media invece è positiva, se la distanza percorsa è positiva.
:::

:::esempio{titolo="Rapporti con lo stesso tempo totale"}
Una persona si allontana di $60\,\mathrm{m}$ in $20\,\mathrm{s}$, sosta per $10\,\mathrm{s}$ e compie il ritorno in $30\,\mathrm{s}$. La durata totale è $20+10+30=60\,\mathrm{s}$. La persona torna al punto di partenza, quindi lo spostamento totale vale zero e $v_m=0$. La distanza percorsa è $60+60=120\,\mathrm{m}$ e la rapidità media è
$$
\frac{120\,\mathrm m}{60\,\mathrm s}=2\,\mathrm{m/s}.
$$
La sosta fa parte dell'intervallo richiesto, perciò i suoi $10\,\mathrm s$ entrano nella durata. Escludendola si risponderebbe a una domanda diversa, relativa ai soli periodi di movimento.

Nel grafico la posizione sale fino ad A, resta ferma a $60\,\mathrm m$ fra A e B durante la sosta e torna a zero in C.

::grafico{linee="0,0 20,60 30,60 60,0" xmin=0 xmax=64 ymin=-7 ymax=67 punti="0,0,pieno;20,60,pieno,A;30,60,pieno,B;60,0,pieno" etichette="59,7,C" nomi="t (s),x (m)" titolo="Spostamento complessivo nullo. La sosta è il tratto orizzontale tra A e B."}
:::

:::osservazione{#conversione titolo="Convertire metri al secondo e chilometri orari"}
Il **Sistema Internazionale** di unità di misura (in sigla **SI**) è l'insieme di unità usato in fisica: il metro per le lunghezze, il secondo per i tempi. L'unità SI della velocità è quindi il metro al secondo ($\mathrm{m/s}$). Sulle strade si usa invece il chilometro orario ($\mathrm{km/h}$), cioè i chilometri percorsi in un'ora. Per convertire si trasformano sia la lunghezza al numeratore sia il tempo al denominatore:
$$
54\,\frac{\mathrm{km}}{\mathrm{h}}
=\frac{54\cdot1000\,\mathrm{m}}{3600\,\mathrm{s}}
=15\,\mathrm{m/s}.
$$
Un chilometro vale $1000\,\mathrm{m}$ e un'ora vale $3600\,\mathrm{s}$, quindi passare da chilometri orari a metri al secondo equivale a moltiplicare per $\dfrac{1000}{3600}$, cioè a dividere il valore numerico per $\dfrac{3600}{1000}=3{,}6$. Il passaggio inverso, da metri al secondo a chilometri orari, si fa moltiplicando per $3{,}6$: per esempio $12\,\mathrm{m/s}=12\cdot3{,}6\,\mathrm{km/h}=43{,}2\,\mathrm{km/h}$. Il numero in chilometri orari è sempre maggiore, perché il chilometro orario è un'unità più piccola: $1\,\mathrm{km/h}$ corrisponde a $\dfrac{1}{3{,}6}\,\mathrm{m/s}$.

Le due scritture descrivono la stessa velocità. Lo si controlla calcolando lo spazio percorso in uno stesso tempo. A $54\,\mathrm{km/h}$ in un minuto, che è $\dfrac{1}{60}$ di ora, si percorrono $\dfrac{54}{60}\,\mathrm{km}=0{,}9\,\mathrm{km}$. A $15\,\mathrm{m/s}$ in $60\,\mathrm{s}$ si percorrono $15\cdot60=900\,\mathrm{m}$, cioè la stessa distanza.
:::

:::osservazione{titolo="Misure compatibili con un intervallo di velocità"}
Una **fotocellula** è un sensore che registra il passaggio di un oggetto in un punto. Due fotocellule danno le posizioni $8\,\mathrm m$ e $18\,\mathrm m$ a distanza di $2\,\mathrm s$. Ogni posizione può differire dal valore reale di al più $1\,\mathrm m$, mentre la durata si considera esatta. La prima posizione vera è quindi compresa fra $7$ e $9\,\mathrm m$, la seconda fra $17$ e $19\,\mathrm m$.
- Lo spostamento minimo si ottiene con la seconda posizione più piccola possibile e la prima più grande possibile: $17-9=8\,\mathrm m$.
- Lo spostamento massimo si ottiene nel modo opposto: $19-7=12\,\mathrm m$.

Dividendo per la stessa durata di $2\,\mathrm s$, la velocità media è compresa fra $\dfrac{8}{2}=4\,\mathrm{m/s}$ e $\dfrac{12}{2}=6\,\mathrm{m/s}$. Il valore centrale $\dfrac{18-8}{2}=5\,\mathrm{m/s}$, da solo, non indica quanto la velocità possa variare.

Questo calcolo vale perché le due letture sono indipendenti, quindi possono trovarsi contemporaneamente agli estremi indicati. Se invece entrambe fossero sbagliate dello stesso errore fisso, per esempio perché il metro è stato posato con lo zero spostato (errore di azzeramento), quell'errore si cancellerebbe nella differenza. Per costruire l'intervallo della velocità si distingue quindi l'incertezza di ogni singola lettura dall'errore comune ai due rilevamenti.

Nel grafico le due barre verticali sono gli intervalli $[7,9]$ e $[17,19]$; le tre rette che li attraversano hanno pendenze $4$, $5$ e $6\,\mathrm{m/s}$.

::grafico{f="4*x+9;5*x+8;6*x+7" xmin=0 xmax=2.4 ymin=4 ymax=22 linee="0,7 0,9;2,17 2,19" punti="0,8,pieno;2,18,pieno" etichette="0.12,11,[7, 9];1.75,21,[17, 19]" nomi="t (s),x (m)" titolo="Le bande delle due misure permettono pendenze medie da 4 a 6 m/s."}
:::

## La legge del moto uniforme

::::teorema{#uniforme titolo="Posizione a velocità costante"}
Il **moto rettilineo uniforme** è il moto lungo una retta con velocità costante. La velocità $v$ si intende con segno, cioè come **componente** lungo l'asse: è positiva se il corpo si muove nel verso positivo, negativa nel verso opposto. Se il corpo occupa la posizione $x_0$ all'istante iniziale $t_0$ (il pedice $0$ indica i valori iniziali), allora in tutto l'intervallo in cui la velocità resta costante vale
$$
x(t)=x_0+v(t-t_0).
$$
In questa formula:
- $t-t_0$ è il tempo trascorso dall'istante iniziale;
- $v(t-t_0)$ è lo spostamento compiuto in quel tempo;
- sommando lo spostamento a $x_0$ si ottiene la coordinata all'istante $t$.

Per esempio, un carrello che parte da $3\,\mathrm m$ a $3\,\mathrm{m/s}$ dopo $2\,\mathrm s$ si trova a $3+3\cdot2=9\,\mathrm m$. In intervalli di uguale durata il corpo compie spostamenti uguali; se invece in due intervalli di uguale durata si misurano spostamenti diversi, il moto non è uniforme. Se $t_0=0$, la formula diventa $x(t)=x_0+vt$.

Dalla stessa formula si ricava la durata di un tragitto. Lo spostamento è $\Delta x=v\,\Delta t$; dividendo per $v$ entrambi i lati dell'uguaglianza si ottiene $\Delta t=\dfrac{\Delta x}{v}$; per un tragitto di lunghezza $d$ percorso a rapidità $u$ la durata è $\dfrac{d}{u}$. Un ciclista che percorre $180\,\mathrm m$ a $6\,\mathrm{m/s}$ impiega $\dfrac{180}{6}\,\mathrm s=30\,\mathrm s$.

:::dimostrazione
Nell'intervallo fra $t_0$ e $t$ la velocità è costante, quindi coincide con la velocità media in quell'intervallo. Per $t>t_0$ la definizione di velocità media dà
$$
v=\frac{x(t)-x_0}{t-t_0}.
$$
Si moltiplicano entrambi i membri per $t-t_0$, cioè le due espressioni a sinistra e a destra dell'uguale, e si ottiene $v(t-t_0)=x(t)-x_0$. Si somma poi $x_0$ a entrambi i membri e si ottiene $x(t)=x_0+v(t-t_0)$. Per $t=t_0$ la formula restituisce $x(t_0)=x_0+v\cdot0=x_0$, come richiesto dalla condizione iniziale.
:::
::::

:::esempio{titolo="Un corpo che attraversa l'origine"}
Un carrello parte da $x_0=6\,\mathrm{m}$ con $v=-2\,\mathrm{m/s}$ all'istante $t_0=0$. La posizione in metri, con $t$ in secondi, è
$$
x(t)=6-2t.
$$
Il carrello attraversa l'origine quando la sua posizione è zero. Si pone quindi $6-2t=0$, cioè $2t=6$, da cui $t=3\,\mathrm{s}$. Dopo $5\,\mathrm{s}$ il carrello si trova a $6-2\cdot5=-4\,\mathrm{m}$. Il passaggio per lo zero riguarda la posizione, mentre la velocità resta $-2\,\mathrm{m/s}$ anche in quell'istante.

Nel grafico la retta parte da A, tocca la posizione zero in Z e arriva in B.

::grafico{f="6-2*x" xmin=0 xmax=6 ymin=-8 ymax=8 punti="0,6,pieno,A;3,0,pieno,Z;5,-4,pieno,B" nomi="t (s),x (m)" titolo="La retta attraversa la posizione zero in Z e continua con la stessa pendenza."}
:::

:::esempio{titolo="Un orologio che segna già cinque secondi"}
Una fotocellula rileva il corpo a $x_0=4\,\mathrm{m}$ quando l'orologio segna $t_0=5\,\mathrm{s}$. La velocità è $3\,\mathrm{m/s}$. Al tempo $t=9\,\mathrm{s}$ sono trascorsi $9-5=4$ secondi dalla misura, perciò
$$
x(9)=4+3\cdot(9-5)=4+3\cdot4=16,
$$
in metri. La somma $4+3\cdot9=31$ conterebbe anche i $5\,\mathrm s$ precedenti a $t_0$, mentre $4\,\mathrm{m}$ è proprio la posizione registrata a $5\,\mathrm{s}$. Un controllo immediato consiste nel sostituire $t=t_0$ nella formula: si deve ritrovare $x_0$.
:::

## Il grafico posizione-tempo

:::osservazione{#grafico-posizione titolo="La pendenza rappresenta la velocità"}
Il **grafico posizione-tempo** riporta il tempo sull'asse orizzontale (asse dei tempi) e la posizione sull'asse verticale. Ogni punto del grafico ha come ascissa, cioè coordinata orizzontale, un istante e come ordinata, cioè coordinata verticale, la posizione in quell'istante. Il moto uniforme è rappresentato da una retta nel periodo studiato, perché la posizione cambia della stessa quantità in tempi uguali.

La **pendenza** della retta è la variazione verticale divisa per la variazione orizzontale fra due suoi punti distinti, ciascuna con la sua unità. Fra $(t_1,x_1)$ e $(t_2,x_2)$ vale
$$
\frac{x_2-x_1}{t_2-t_1},
$$
cioè uno spostamento diviso per una durata, misurato in metri al secondo; perciò la pendenza è la velocità.
- Una retta crescente indica velocità positiva.
- Una retta decrescente indica velocità negativa.
- Una retta orizzontale indica la quiete, cioè il corpo fermo.

L'altezza di un punto sul grafico indica la posizione, misurata in metri; la pendenza indica la velocità, misurata in metri al secondo. L'**intercetta** è l'ordinata del punto in cui la retta incontra l'asse verticale, cioè la posizione all'istante $t=0$.

L'angolo con cui la retta appare sullo schermo non basta a leggere la velocità, perché una scala diversa su uno degli assi modifica l'angolo apparente. La retta per $(0\,\mathrm s,0\,\mathrm m)$ e $(1\,\mathrm s,2\,\mathrm m)$ ha pendenza $2\,\mathrm{m/s}$ sia se un metro occupa un quadretto sia se ne occupa due; nel secondo disegno la retta sembra più ripida. Inoltre una retta obliqua indica moto uniforme soltanto se sull'asse verticale c'è la posizione: in un grafico velocità-tempo la stessa retta indica una velocità che cambia.
:::

:::esempio{titolo="Leggere la pendenza tra due rilevamenti"}
Due punti del grafico sono $A=(2\,\mathrm{s},7\,\mathrm{m})$ e $B=(6\,\mathrm{s},15\,\mathrm{m})$. Fra le due letture lo spostamento è $15-7=8\,\mathrm{m}$ e la durata è $6-2=4\,\mathrm{s}$, quindi
$$
v=\frac{8\,\mathrm m}{4\,\mathrm s}=2\,\mathrm{m/s}.
$$
Se la legge del moto uniforme vale già a $t=0$, la posizione a $t=0$ si trova tornando indietro di $2\,\mathrm s$ da A: $x(0)=7-2\cdot2=3$, in metri. Questo valore è l'intercetta della retta. Se l'osservazione inizia a $t=2\,\mathrm{s}$, il valore ottenuto per $t=0$ è un'**estrapolazione**, cioè una stima fuori dall'intervallo osservato, e richiede l'ipotesi che il moto fosse uniforme anche prima.

::grafico{f="2*x+3" xmin=0 xmax=7 ymin=0 ymax=19 punti="2,7,pieno,A;6,15,pieno,B" nomi="t (s),x (m)" titolo="Tra A e B il rapporto tra 8 m e 4 s è 2 m/s."}
:::

:::attenzione
Il grafico posizione-tempo non raffigura la forma della strada. Una retta discendente può descrivere un veicolo su una strada pianeggiante che percorre l'asse verso coordinate decrescenti. Allo stesso modo, due rette posizione-tempo parallele a quote diverse descrivono due oggetti con la stessa velocità lungo la strada e posizioni differenti.
:::

:::esempio{titolo="Controllare la velocità fra tre misure"}
Un sensore rileva $x=1\,\mathrm m$ a $t=1\,\mathrm s$, $x=7\,\mathrm m$ a $t=3\,\mathrm s$ e $x=10\,\mathrm m$ a $t=5\,\mathrm s$. Le velocità medie nei due intervalli sono
$$
\frac{7-1}{3-1}\,\mathrm{m/s}=3\,\mathrm{m/s},\qquad
\frac{10-7}{5-3}\,\mathrm{m/s}=1{,}5\,\mathrm{m/s}.
$$
Nel grafico i tre punti sono A, B e C. Le pendenze dei segmenti AB e BC sono diverse, quindi una sola retta non passa per i tre punti e il moto non è uniforme. Il segmento che unisce il primo e l'ultimo punto si chiama **corda** AC; la sua pendenza è
$$
\frac{10-1}{5-1}\,\mathrm{m/s}=\frac{9}{4}\,\mathrm{m/s}=2{,}25\,\mathrm{m/s},
$$
cioè la velocità media sull'intera osservazione. La pendenza di una corda dà la velocità media fra due misure anche quando la **velocità istantanea**, cioè la velocità in ogni singolo istante, resta sconosciuta fra quei punti.

::grafico{linee="1,1 3,7 5,10" segmenti="1,1,5,10" punti="1,1,pieno;3,7,pieno,B;5,10,pieno,C" etichette="0.8,1.75,A" xmin=0 xmax=6 ymin=0 ymax=12 nomi="t (s),x (m)" titolo="B è sopra la corda AC. Le pendenze di AB e BC sono diverse."}
:::

## Incontri e inseguimenti

:::teorema{#incontri titolo="Stessa posizione allo stesso istante"}
Due corpi si incontrano se nello stesso istante occupano la stessa posizione. Le due leggi orarie devono quindi essere scritte nello stesso riferimento e con lo stesso orologio. Se entrambe valgono a partire da $t=0$, con posizioni iniziali $x_{A0}$, $x_{B0}$ e velocità $v_A$, $v_B$, l'istante dell'incontro risolve l'equazione
$$
x_{A0}+v_A t=x_{B0}+v_B t.
$$
Si portano i termini con $t$ a sinistra e gli altri a destra, $(v_A-v_B)\,t=x_{B0}-x_{A0}$. Per $v_A\ne v_B$ si divide per $v_A-v_B$ e si ottiene
$$
t=\frac{x_{B0}-x_{A0}}{v_A-v_B}.
$$
Il numeratore è il **distacco** iniziale, cioè la differenza fra le due posizioni; il denominatore $v_A-v_B$ è la **velocità relativa**, cioè la quantità di cui il distacco diminuisce ogni secondo. Per due corpi che vanno l'uno verso l'altro le rapidità si sommano; per due corpi nello stesso verso si sottraggono. Due corpi distanti $140\,\mathrm m$ che si avvicinano a $4$ e $3\,\mathrm{m/s}$ si incontrano dopo $\dfrac{140}{4+3}\,\mathrm s=20\,\mathrm s$.

Se un corpo parte all'istante $t_B$ dalla posizione $x_{B0}$, la sua legge è $x_B=x_{B0}+v_B(t-t_B)$ per $t\geq t_B$. Per $t=t_B$ si ottiene $x_B=x_{B0}$, quindi $x_{B0}$ è la coordinata di B alla partenza; se B è fermo prima di partire, quella è anche la sua posizione fino a $t_B$.

Ogni legge oraria vale soltanto in un intervallo di tempo, il suo **dominio**. Il risultato dell'equazione deve appartenere al tratto di tempo in cui valgono entrambe le leggi. Un valore negativo indica un incontro precedente a $t=0$ soltanto se il moto si può estendere anche a quel periodo. Due corpi che hanno la stessa velocità mantengono il loro distacco, quindi non si incontrano se partono da punti diversi. Quando partono dalla stessa posizione con uguale velocità, le leggi coincidono per tutta la durata del moto e i corpi restano sempre insieme.
:::

:::esempio{titolo="Due corpi che si avvicinano"}
$A$ parte da $1\,\mathrm{m}$ con velocità $2\,\mathrm{m/s}$; $B$ parte da $7\,\mathrm{m}$ con velocità $-1\,\mathrm{m/s}$. All'istante iniziale il distacco è $7-1=6\,\mathrm{m}$ e diminuisce di $2+1=3\,\mathrm{m}$ ogni secondo. Si uguagliano le due leggi:
$$
1+2t=7-t,\qquad 2t+t=7-1,\qquad 3t=6,\qquad t=2\,\mathrm{s}.
$$
Il punto d'incontro, dalla legge di $A$, è $x=1+2\cdot2=5\,\mathrm{m}$. Con la legge di $B$ si ottiene $7-2=5\,\mathrm m$, lo stesso valore.

::grafico{f="2*x+1;-x+7" xmin=0 xmax=4 ymin=0 ymax=10 punti="2,5,pieno,I" nomi="t (s),x (m)" legenda="A;B" titolo="Le rette si incontrano in I. I due corpi hanno la stessa posizione a 2 s."}
:::

:::esempio{titolo="Inseguimento con partenza ritardata"}
$A$ parte da $x=0$ a $3\,\mathrm{m/s}$ al tempo $t=0$. $B$ parte dallo stesso punto a $5\,\mathrm{m/s}$ al tempo $t=4\,\mathrm{s}$. Quando parte $B$, $A$ ha già percorso $3\cdot4=12\,\mathrm{m}$, che sono il suo vantaggio. In seguito il vantaggio diminuisce di $5-3=2\,\mathrm{m}$ ogni secondo, quindi si annulla dopo $\dfrac{12}{2}=6\,\mathrm{s}$ dalla partenza di $B$. Sull'orologio comune l'incontro è a $t=4+6=10\,\mathrm{s}$. Le leggi orarie danno $x_A=3\cdot10=30\,\mathrm{m}$ e $x_B=5\cdot(10-4)=30\,\mathrm{m}$.

::grafico{f="3*x;5*max(0,x-4)" xmin=0 xmax=12 ymin=0 ymax=41 punti="4,0,pieno,B;10,30,pieno,I" nomi="t (s),x (m)" legenda="A;B" titolo="B resta all'origine fino a 4 s. I indica l'incontro dopo la partenza di B."}
:::

:::esempio{titolo="Due corpi allo stesso posto in tempi diversi"}
A $t=0$ due carrelli partono dalle coordinate $0$ e $10\,\mathrm m$, con velocità rispettivamente $2$ e $3\,\mathrm{m/s}$ nel verso positivo. Il primo passa da $x=20\,\mathrm m$ dopo $\dfrac{20}{2}=10\,\mathrm s$, il secondo dopo $\dfrac{20-10}{3}=\dfrac{10}{3}\,\mathrm s$. Entrambi passano per quel punto, ma in istanti diversi, quindi non si incontrano lì. Uguagliando le leggi orarie si ottiene $2t=10+3t$, da cui $t=-10\,\mathrm s$. Questo istante precede la partenza, quindi appartiene solo al prolungamento delle rette e non a un incontro reale. Dopo la partenza la separazione è $(10+3t)-2t=10+t$ in metri, quindi cresce per tutto l'intervallo osservato.
:::

:::esempio{titolo="Il tratto utile in un inseguimento"}
Su una pista, un carrello $A$ passa per l'origine a $t=0$ e mantiene $3\,\mathrm{m/s}$. Il carrello $B$ attende fermo all'origine, parte a $t=2\,\mathrm{s}$ con $5\,\mathrm{m/s}$ e si ferma a $t=4\,\mathrm{s}$ su una piattaforma. Le due leggi $x_A=3t$ e $x_B=5(t-2)$, espresse in metri, danno $3t=5t-10$, cioè $t=5\,\mathrm{s}$. Questo valore usa la legge di $B$ oltre l'istante in cui $B$ si ferma, quindi non descrive un incontro. A $t=4\,\mathrm{s}$, infatti, $B$ si trova a $5\cdot(4-2)=10\,\mathrm{m}$ e $A$ è già a $3\cdot4=12\,\mathrm{m}$.

Si controllano allora i tratti uno per uno.
- Fra $2$ e $4\,\mathrm{s}$ il distacco $x_A-x_B$ passa da $6-0=6\,\mathrm m$ a $12-10=2\,\mathrm{m}$ e diminuisce sempre della stessa quantità ogni secondo, quindi resta positivo in tutto il tratto.
- Dopo $4\,\mathrm{s}$ si confronta $x_A$ con la coordinata fissa $10\,\mathrm{m}$ di $B$. L'equazione $3t=10$ dà $t=\dfrac{10}{3}\,\mathrm{s}$, che precede l'inizio della sosta, quindi non appartiene a questo tratto.

I due carrelli condividono l'origine all'istante iniziale e dopo la partenza di $B$ non si incontrano. La verifica del dominio va ripetuta per ogni tratto, perché da un tratto all'altro cambiano sia la pendenza sia le equazioni valide.

::grafico{f="3*x;5*min(max(0,x-2),2)" xmin=0 xmax=6 ymin=0 ymax=20 punti="2,0,pieno;4,10,pieno;4,12,pieno" segmenti="4,10,4,12" legenda="A;B" nomi="t (s),x (m)" titolo="Alla sosta di B dopo 4 s, A ha già 2 m di vantaggio. Le leggi valide dopo la partenza di B non si intersecano."}
:::

## Moti a tratti

:::osservazione{#tratti titolo="Un intervallo per ogni velocità"}
Un moto è **a tratti** quando la velocità resta costante per un certo tempo, poi cambia e resta costante su un altro intervallo. In ogni tratto lo spostamento è la velocità moltiplicata per la durata del tratto; lo spostamento totale è la somma degli spostamenti con i loro segni. La posizione alla fine di un tratto è la posizione iniziale del successivo, quindi nel grafico posizione-tempo i tratti di retta si uniscono senza salti e formano una **spezzata**.

Nel **grafico velocità-tempo** il tempo sta in orizzontale e la velocità in verticale; ogni tratto a velocità costante è un segmento orizzontale. Lo spostamento del tratto corrisponde all'**area con segno** del rettangolo compreso fra il segmento e l'asse dei tempi. La base misura il tempo e l'altezza misura la velocità, quindi il prodotto ha l'unità $\mathrm{m/s}\cdot\mathrm s=\mathrm m$, cioè una lunghezza. Un rettangolo sotto l'asse dei tempi corrisponde a una velocità negativa e produce uno spostamento negativo. Per ricavare la distanza percorsa si sommano invece le aree senza segno, cioè i loro moduli.
:::

:::esempio{titolo="Due rettangoli sopra e sotto l'asse"}
Un veicolo mantiene $v_1=4\,\mathrm{m/s}$ per $3\,\mathrm{s}$ e poi $v_2=-2\,\mathrm{m/s}$ per $4\,\mathrm{s}$. I due contributi sono
$$
\Delta x_1=4\cdot3=12\,\mathrm{m},\qquad \Delta x_2=(-2)\cdot4=-8\,\mathrm{m},
$$
quindi lo spostamento totale è $\Delta x=12+(-8)=4\,\mathrm{m}$. La distanza percorsa è $12+8=20\,\mathrm{m}$. La durata totale è $3+4=7\,\mathrm{s}$, perciò la velocità media è $\dfrac{4}{7}\,\mathrm{m/s}$ e la rapidità media è $\dfrac{20}{7}\,\mathrm{m/s}$. La velocità media è positiva, come lo spostamento totale.

::grafico{linee="0,4 3,4;3,-2 7,-2" segmenti="3,0,3,4;3,0,3,-2;7,0,7,-2" etichette="1,2.15,+12 m;4.6,-1.23,−8 m" xmin=0 xmax=7 ymin=-3 ymax=5 nomi="t (s),v (m/s)" titolo="L'area del primo rettangolo è +12 m. Il secondo rettangolo contribuisce con −8 m."}
:::

:::osservazione{#media-tratti titolo="Media su distanze o tempi uguali"}
Nei moti a due tratti la media si calcola sempre come spostamento (o distanza) totale diviso per la durata totale. Due casi particolari hanno una formula propria.

**Tratti di uguale durata.** Si indica con $\tau$ (lettera greca tau) la durata comune e con $v_1$, $v_2$ le velocità con segno. Lo spostamento totale è $v_1\tau+v_2\tau$ e la durata totale è $2\tau$, quindi
$$
v_m=\frac{v_1\tau+v_2\tau}{2\tau}=\frac{(v_1+v_2)\,\tau}{2\tau}=\frac{v_1+v_2}{2}.
$$
In questo caso la velocità media è la media aritmetica delle due velocità: per $6\,\mathrm{m/s}$ e $-2\,\mathrm{m/s}$ vale $\dfrac{6+(-2)}{2}=2\,\mathrm{m/s}$.

**Tratti di uguale lunghezza.** Si indica con $d$ la lunghezza comune e con $u_1$, $u_2$ le rapidità, entrambe positive. Poiché durata è uguale a distanza diviso rapidità, le durate dei tratti valgono $\dfrac{d}{u_1}$ e $\dfrac{d}{u_2}$. La rapidità media è la distanza totale $2d$ divisa per la somma delle durate:
$$
\frac{2d}{\frac{d}{u_1}+\frac{d}{u_2}}
=\frac{2u_1u_2}{u_1+u_2}.
$$
Il secondo passaggio si ottiene scrivendo il denominatore come $\dfrac{d\,u_2+d\,u_1}{u_1u_2}$ e semplificando $d$. Per due tratti lunghi $100\,\mathrm{m}$ percorsi a $2$ e $4\,\mathrm{m/s}$, il primo dura $\dfrac{100}{2}=50\,\mathrm{s}$ e il secondo $\dfrac{100}{4}=25\,\mathrm{s}$. La rapidità media è
$$
\frac{200\,\mathrm m}{75\,\mathrm s}=\frac{8}{3}\,\mathrm{m/s}\approx2{,}67\,\mathrm{m/s},
$$
e la formula dà lo stesso valore, $\dfrac{2\cdot2\cdot4}{2+4}=\dfrac{16}{6}=\dfrac{8}{3}$. Il risultato è più vicino a $2\,\mathrm{m/s}$ che a $4\,\mathrm{m/s}$, perché a $2\,\mathrm{m/s}$ si trascorrono $50$ secondi su $75$, cioè due terzi del tempo. Su distanze uguali, quindi, la rapidità media è minore della media aritmetica $\dfrac{2+4}{2}=3\,\mathrm{m/s}$.

Quando si conosce la rapidità media $u_m$ e una delle due rapidità, l'altra si ricava dai **reciproci** (il reciproco di un numero $a$ è $\dfrac{1}{a}$). Si divide per $d$ l'uguaglianza fra le durate, $\dfrac{2d}{u_m}=\dfrac{d}{u_1}+\dfrac{d}{u_2}$, e si ottiene $\dfrac{2}{u_m}=\dfrac{1}{u_1}+\dfrac{1}{u_2}$. Sottraendo $\dfrac{1}{u_1}$ da entrambi i membri risulta
$$
\frac{1}{u_2}=\frac{2}{u_m}-\frac{1}{u_1}.
$$
Con $u_1=8\,\mathrm{m/s}$ e $u_m=6\,\mathrm{m/s}$ risulta $\dfrac{1}{u_2}=\dfrac{2}{6}-\dfrac{1}{8}=\dfrac{8}{24}-\dfrac{3}{24}=\dfrac{5}{24}\,\mathrm{s/m}$, quindi $u_2=\dfrac{24}{5}\,\mathrm{m/s}=4{,}8\,\mathrm{m/s}$.
:::

:::esempio{titolo="Semaforo incluso nella velocità media"}
Un ciclista procede per $40\,\mathrm s$ a $5\,\mathrm{m/s}$, resta fermo per $10\,\mathrm s$ e poi prosegue nello stesso verso per $20\,\mathrm s$ a $2\,\mathrm{m/s}$. Gli spostamenti dei tre tratti sono $5\cdot40=200\,\mathrm m$, $0\,\mathrm m$ e $2\cdot20=40\,\mathrm m$, quindi lo spostamento totale è $200+0+40=240\,\mathrm m$. La durata dell'intera osservazione è $40+10+20=70\,\mathrm s$ e la velocità media vale
$$
v_m=\frac{240}{70}\,\mathrm{m/s}=\frac{24}{7}\,\mathrm{m/s}.
$$
La sosta entra nella durata perché l'intervallo richiesto la comprende. Dividendo per i soli $60\,\mathrm s$ di marcia si otterrebbe $\dfrac{240}{60}=4\,\mathrm{m/s}$, che è la media limitata ai tempi di marcia e risponde a un'altra domanda.

La tabella riporta la posizione a ogni istante in cui il moto cambia. Fra $40$ e $50\,\mathrm s$ due righe consecutive hanno la stessa posizione, $200\,\mathrm m$: durante la sosta la durata cresce di dieci secondi mentre la variazione di coordinata è nulla. Sul grafico la sosta è il tratto orizzontale fra due tratti crescenti, e la posizione finale $240\,\mathrm m$ risulta dalla somma dei due tratti in salita.

| Istante (s) | Posizione (m) |
| ---: | ---: |
| 0 | 0 |
| 40 | 200 |
| 50 | 200 |
| 70 | 240 |

::grafico{linee="0,0 40,200 50,200 70,240" xmin=0 xmax=74 ymin=0 ymax=260 punti="0,0,pieno;40,200,pieno;50,200,pieno;70,240,pieno" etichette="41,206,200 m" nomi="t (s),x (m)" titolo="La posizione è costante da 40 a 50 s. Il tratto finale ha pendenza 2 m/s."}
:::
