---
titolo: "Relatività ristretta: spazio e tempo"
sommario: Che cosa affermano i postulati di Einstein e come da essi seguono la relatività della simultaneità, la dilatazione dei tempi, la contrazione delle lunghezze, le trasformazioni di Lorentz, la nuova legge di composizione delle velocità e l'intervallo invariante, con i diagrammi di Minkowski e il paradosso dei gemelli.
---

## Relatività galileiana

:::definizione{#sistema-inerziale titolo="Evento e sistema di riferimento inerziale"}
Un **evento** è un fatto che accade in un punto dello spazio e in un istante di tempo, come lo scoppio di un petardo o l'arrivo di un raggio di luce su uno specchio. Per descriverlo servono tre coordinate spaziali $x$, $y$, $z$ e il tempo $t$, misurati da un osservatore con regoli e orologi fermi rispetto a lui. L'insieme di questi regoli e orologi si chiama **sistema di riferimento**. Un sistema di riferimento si dice **inerziale** se in esso vale il principio di inerzia, cioè se un corpo su cui la forza risultante è nulla resta fermo oppure si muove di moto rettilineo uniforme.

Un sistema che si muove di moto rettilineo uniforme rispetto a un sistema inerziale è anch'esso inerziale. Per esempio, con buona approssimazione sono inerziali la banchina di una stazione e un treno che viaggia a velocità costante su un binario rettilineo; un treno che frena *non* è inerziale, perché in esso un oggetto appoggiato sul pavimento liscio scivola in avanti senza che nessuna forza lo spinga.
:::

:::definizione{#trasformazioni-galileo titolo="Trasformazioni di Galileo"}
Si considerano due sistemi inerziali $S$ e $S'$ con gli assi paralleli. Il sistema $S'$ si muove rispetto a $S$ con velocità costante $v$ nel verso positivo dell'asse $x$, e le due origini $O$ e $O'$ coincidono nell'istante $t = t' = 0$. In tutto l'argomento i due sistemi sono disposti in questo modo. Se il tempo scorre allo stesso modo nei due sistemi, un evento che in $S$ ha coordinate $(x, y, z, t)$ ha in $S'$ le coordinate
$$
\begin{cases}
x' = x - v t \\
y' = y \\
z' = z \\
t' = t
\end{cases}
$$
Queste relazioni si chiamano **trasformazioni di Galileo**. La prima afferma che all'istante $t$ l'origine $O'$ si è spostata di $vt$, quindi la distanza dell'evento da $O'$ è $x - vt$. L'ultima esprime l'ipotesi del **tempo assoluto**, secondo la quale tutti gli osservatori misurano lo stesso tempo. Per esempio, se un treno $S'$ viaggia a $v = 20\,\mathrm{m/s}$ e all'istante $t = 3{,}0\,\mathrm{s}$ un petardo scoppia nel punto $x = 100\,\mathrm{m}$ della banchina, nel treno lo scoppio avviene in $x' = 100\,\mathrm{m} - 20 \cdot 3{,}0\,\mathrm{m} = 40\,\mathrm{m}$.

::grafico{assi=0 uguale=1 unicolore=1 vettori="0,0,8.6,0;0,0,0,3.4;3,0.35,8.6,0.35;3,0.35,3,3.4;4.2,3.0,5.6,3.0" punti="6.5,2.2,pieno,P" segmenti="6.5,2.2,6.5,0;0,-0.45,3,-0.45;3,-0.85,6.5,-0.85" etichette="8.7,-0.25,x;-0.35,3.4,y;8.7,0.55,x′;3.15,3.4,y′;-0.35,-0.3,O;2.55,0.65,O′;1.25,-0.75,vt;4.5,-1.15,x′;4.75,3.3,v" xmin=-0.8 xmax=9.3 ymin=-1.5 ymax=3.8 titolo="Il sistema $S'$ si muove rispetto a $S$ con velocità $v$ lungo l'asse $x$; all'istante $t$ l'origine $O'$ dista $vt$ da $O$, quindi l'evento $P$ ha ascissa $x' = x - vt$"}

:::

:::osservazione{#composizione-galileiana titolo="Composizione galileiana delle velocità"}
Un corpo si muove lungo l'asse $x$ e in un intervallo di tempo $\Delta t$ percorre in $S$ lo spostamento $\Delta x$. Per le trasformazioni di Galileo $\Delta x' = \Delta x - v\,\Delta t$ e $\Delta t' = \Delta t$, quindi, dividendo, le velocità $u = \dfrac{\Delta x}{\Delta t}$ in $S$ e $u' = \dfrac{\Delta x'}{\Delta t'}$ in $S'$ sono legate da
$$
u = u' + v .
$$
Un passeggero che cammina a $u' = 1{,}5\,\mathrm{m/s}$ verso la testa di un treno che viaggia a $v = 20\,\mathrm{m/s}$ ha rispetto alla banchina la velocità $u = 21{,}5\,\mathrm{m/s}$. Applicata alla luce, la stessa legge darebbe una velocità della luce diversa nei due sistemi, perché un raggio emesso in avanti dal treno avrebbe rispetto alla banchina la velocità $c + v$.
:::

:::teorema{#principio-relativita-galileiana titolo="Principio di relatività galileiana"}
Le leggi della meccanica hanno la stessa forma in tutti i sistemi di riferimento inerziali. È un principio sperimentale, enunciato da Galileo. Ne segue che nessun esperimento di meccanica svolto dentro un sistema inerziale permette di stabilire se quel sistema è fermo o si muove di moto rettilineo uniforme. Per esempio, una pallina lasciata cadere da $1{,}0\,\mathrm{m}$ di altezza in un treno che viaggia a velocità costante tocca il pavimento dopo $\sqrt{\dfrac{2 \cdot 1{,}0}{9{,}8}}\,\mathrm{s} \approx 0{,}45\,\mathrm{s}$, nel punto sotto quello di partenza, esattamente come in un treno fermo.
:::

## Velocità della luce e postulati di Einstein

:::osservazione{#michelson-morley titolo="Esperimento di Michelson e Morley"}
Nell'Ottocento si pensava che la luce si propagasse in un mezzo, detto etere, e che $c$ fosse la sua velocità rispetto all'etere. La Terra si muove attorno al Sole a circa $3 \cdot 10^{4}\,\mathrm{m/s}$, quindi per la composizione galileiana la luce avrebbe dovuto avere velocità diverse nelle diverse direzioni rispetto alla Terra.

Nel 1887 Michelson e Morley confrontarono i tempi impiegati dalla luce a percorrere due bracci perpendicolari di uguale lunghezza, con un interferometro. Una differenza tra i due tempi avrebbe spostato le frange di interferenza quando l'apparato veniva ruotato. Lo spostamento previsto non fu osservato, entro la precisione dello strumento, e il risultato fu confermato da esperimenti successivi sempre più precisi. Se ne conclude che la velocità della luce è la stessa in tutte le direzioni per un osservatore sulla Terra, contro la previsione della composizione galileiana.
:::

:::teorema{#postulati-einstein titolo="Postulati di Einstein"}
Nel 1905 Einstein fondò la **relatività ristretta** su due postulati.

- **Principio di relatività**: tutte le leggi della fisica, quelle della meccanica e quelle dell'elettromagnetismo, hanno la stessa forma in tutti i sistemi di riferimento inerziali.
- **Invarianza della velocità della luce**: la luce si propaga nel vuoto con la stessa velocità $c = 3{,}00 \cdot 10^{8}\,\mathrm{m/s}$ in tutti i sistemi inerziali, qualunque sia il moto della sorgente.

Si tratta di postulati, che non si dimostrano; le loro conseguenze sono confermate da tutti gli esperimenti. Il secondo postulato è incompatibile con la composizione galileiana $u = u' + v$, quindi le trasformazioni di Galileo vanno sostituite, e con esse l'ipotesi del tempo assoluto. Per esempio, la luce emessa in avanti dai fari di un treno che viaggia a $20\,\mathrm{m/s}$ ha velocità $c$ sia rispetto al treno sia rispetto alla banchina, e non $c + 20\,\mathrm{m/s}$.
:::

## Relatività della simultaneità

:::definizione{#eventi-simultanei titolo="Eventi simultanei e orologi sincronizzati"}
Due eventi che accadono in punti diversi di un sistema inerziale sono **simultanei** in quel sistema se gli orologi fermi nei due punti segnano lo stesso istante. Gli orologi devono essere **sincronizzati**, e per sincronizzarli si usa la luce, che per il secondo postulato ha velocità $c$ in ogni direzione. Una lampada posta nel punto medio tra due orologi emette un lampo, e ciascun orologio viene avviato quando il lampo lo raggiunge. Il lampo raggiunge i due orologi nello stesso istante, perché percorre la stessa distanza con la stessa velocità. Per esempio, due orologi distanti $600\,\mathrm{m}$ ricevono il lampo emesso dal punto medio dopo $\dfrac{300}{3{,}00 \cdot 10^{8}}\,\mathrm{s} = 1{,}00\,\mu\mathrm{s}$, entrambi.
:::

:::esempio{#treno-di-einstein titolo="Il vagone di Einstein"}
Un vagone si muove con velocità $v = 0{,}60\,c$ rispetto alla banchina, e una lampada al centro del vagone emette un lampo verso le due estremità, la coda $A$ e la testa $B$. Nel sistema $S'$ del vagone la lampada è equidistante da $A$ e da $B$ e la luce ha velocità $c$ in entrambi i versi, quindi il lampo arriva in $A$ e in $B$ nello stesso istante, cioè i due arrivi sono **simultanei** in $S'$.

Nel sistema $S$ della banchina la luce ha ancora velocità $c$ in entrambi i versi, ma la coda $A$ va incontro alla luce e la testa $B$ si allontana da essa. Se in $S$ il vagone è lungo $48\,\mathrm{m}$, ciascuna estremità dista inizialmente $24\,\mathrm{m}$ dalla lampada. La luce e la coda si avvicinano con velocità relativa $c + v$, misurata da $S$, mentre la luce raggiunge la testa con velocità relativa $c - v$; perciò in $S$
$$
t_A = \frac{24\,\mathrm{m}}{c + v} = \frac{24}{1{,}60 \cdot 3{,}00 \cdot 10^{8}}\,\mathrm{s} = 5{,}0 \cdot 10^{-8}\,\mathrm{s} ,
\qquad
t_B = \frac{24\,\mathrm{m}}{c - v} = \frac{24}{0{,}40 \cdot 3{,}00 \cdot 10^{8}}\,\mathrm{s} = 2{,}0 \cdot 10^{-7}\,\mathrm{s} .
$$
Per la banchina il lampo arriva prima in coda e $1{,}5 \cdot 10^{-7}\,\mathrm{s}$ dopo in testa, quindi i due arrivi *non* sono simultanei in $S$.

::grafico{assi=0 uguale=1 poligoni="0,0 8,0 8,1.6 0,1.6" punti="4,0.8,pieno" vettori="3.6,0.8,0.4,0.8;4.4,0.8,7.6,0.8;5,2.3,7,2.3" linee="-1,-0.25 9.5,-0.25" etichette="-0.45,0.65,A;8.2,0.65,B;1.9,1.05,c;5.9,1.05,c;5.85,2.55,v" xmin=-1.2 xmax=9.7 ymin=-0.6 ymax=2.9 titolo="Il lampo emesso al centro del vagone raggiunge insieme la coda $A$ e la testa $B$ nel sistema del vagone; per la banchina, rispetto alla quale il vagone ha velocità $v$, la luce arriva prima in $A$, che le va incontro"}

:::

:::osservazione{#relativita-simultaneita titolo="Relatività della simultaneità"}
Due eventi che avvengono in punti diversi e sono simultanei in un sistema inerziale *non* sono simultanei in un altro sistema inerziale in moto rispetto al primo lungo la retta che li congiunge. La simultaneità dipende quindi dal sistema di riferimento. Il ritardo si calcola con le trasformazioni di Lorentz, ed è apprezzabile solo quando $v$ è vicina a $c$. Per esempio, per il vagone di Einstein con $v = 20\,\mathrm{m/s}$ i due arrivi sarebbero separati in $S$ da circa $10^{-14}\,\mathrm{s}$.
:::

## Dilatazione dei tempi

:::definizione{#fattore-di-lorentz titolo="Fattore di Lorentz"}
Per un sistema che si muove con velocità $v$ minore di $c$ si definiscono
$$
\beta = \frac{v}{c} ,
\qquad
\gamma = \frac{1}{\sqrt{1 - \dfrac{v^2}{c^2}}} = \frac{1}{\sqrt{1 - \beta^2}} .
$$
Il numero $\gamma$ si chiama **fattore di Lorentz**. È adimensionale, vale $1$ per $v = 0$, è sempre maggiore di $1$ per $0 < v < c$ e cresce senza limite quando $v$ si avvicina a $c$. Alcuni valori sono
$$
\beta = 0{,}60 \;\Rightarrow\; \gamma = 1{,}25 ,
\qquad
\beta = 0{,}80 \;\Rightarrow\; \gamma \approx 1{,}67 ,
\qquad
\beta = 0{,}99 \;\Rightarrow\; \gamma \approx 7{,}09 .
$$
Per esempio con $\beta = 0{,}80$ si ha $1 - \beta^2 = 1 - 0{,}64 = 0{,}36$, quindi $\gamma = \dfrac{1}{\sqrt{0{,}36}} = \dfrac{1}{0{,}60} \approx 1{,}67$.

::grafico{f="1/sqrt(1-x^2)" punti="0.6,1.25,pieno;0.8,1.667,pieno" asintoti="x=1" xmin=0 xmax=1.2 ymin=0 ymax=8 nomi="β,γ" legenda=0 titolo="Fattore di Lorentz $\gamma = \dfrac{1}{\sqrt{1 - \beta^2}}$ in funzione di $\beta = \dfrac{v}{c}$: resta vicino a $1$ fino a $\beta \approx 0{,}3$ e tende a $+\infty$ per $\beta \to 1$"}

:::

:::definizione{#tempo-proprio titolo="Tempo proprio"}
Si considerano due eventi che, in un sistema inerziale, avvengono *nello stesso punto*, per esempio due battiti di un orologio fermo in quel sistema. L'intervallo di tempo tra i due eventi misurato in quel sistema si chiama **tempo proprio** e si indica con $\Delta t_0$. Il tempo proprio si misura con un solo orologio; in ogni altro sistema inerziale i due eventi avvengono in punti diversi, e l'intervallo si misura con due orologi sincronizzati. Per esempio, la durata di un'ora segnata dall'orologio di un astronauta, fermo nella sua astronave, è un tempo proprio per l'astronave.
:::

::::teorema{#dilatazione-tempi titolo="Dilatazione dei tempi"}
Siano dati due eventi che in un sistema inerziale $S'$ avvengono nello stesso punto, separati dal tempo proprio $\Delta t_0$. In un sistema inerziale $S$, rispetto al quale $S'$ si muove con velocità $v$, l'intervallo di tempo tra i due eventi è
$$
\Delta t = \gamma\, \Delta t_0 .
$$
Poiché $\gamma > 1$, l'intervallo misurato in $S$ è più lungo del tempo proprio, quindi per l'osservatore di $S$ l'orologio in moto va più piano. Per esempio, se un'astronave viaggia a $v = 0{,}80\,c$ rispetto alla Terra, un'ora segnata dall'orologio di bordo dura per gli osservatori terrestri $\Delta t = 1{,}67 \cdot 60\,\mathrm{min} \approx 100\,\mathrm{min}$.

::grafico{assi=0 uguale=1 linee="-0.6,0 0.6,0;-0.6,3 0.6,3;2.4,0 3.6,0;4.4,3 5.6,3;6.4,0 7.6,0" vettori="0,0.05,0,2.95;3,0.05,4.97,2.95;5.03,2.95,7,0.05;3.4,-0.75,6.6,-0.75" segmenti="5,0,5,3" etichette="0.2,1.4,d;5.15,1.4,d;3.4,1.75,ℓ;6.2,1.75,ℓ;4.75,-1.2,vΔt" xmin=-1 xmax=8 ymin=-1.5 ymax=3.5 legenda=0 titolo="Orologio a luce fermo in $S'$ (a sinistra) e lo stesso orologio visto da $S$, rispetto al quale si muove con velocità $v$ (a destra): in $S$ la luce percorre i due lati obliqui, ciascuno lungo $\ell = \dfrac{c\,\Delta t}{2}$"}

:::dimostrazione
L'idea è misurare lo stesso intervallo con un **orologio a luce**, formato da due specchi paralleli a distanza $d$, fermi in $S'$ e disposti perpendicolarmente alla velocità $v$, tra i quali un impulso di luce va e torna. I due eventi sono la partenza dell'impulso dallo specchio inferiore e il suo ritorno allo stesso specchio.

In $S'$ l'impulso percorre la distanza $2d$ con velocità $c$, quindi
$$
\Delta t_0 = \frac{2d}{c} .
$$
In $S$ l'orologio si muove con velocità $v$. Mentre l'impulso va e torna, lo specchio inferiore avanza di $v\,\Delta t$, quindi l'impulso percorre i due lati obliqui della figura, ciascuno di lunghezza $\ell$. Per il secondo postulato anche in $S$ la luce ha velocità $c$, perciò $2\ell = c\,\Delta t$, cioè $\ell = \dfrac{c\,\Delta t}{2}$. La distanza $d$ tra gli specchi è perpendicolare al moto, ed è la stessa nei due sistemi. Ciascun lato obliquo è l'ipotenusa di un triangolo rettangolo con cateti $d$ e $\dfrac{v\,\Delta t}{2}$; per il **teorema di Pitagora**
$$
\left( \frac{c\,\Delta t}{2} \right)^2 = d^2 + \left( \frac{v\,\Delta t}{2} \right)^2 .
$$
Si moltiplicano i due membri per $4$ e si sostituisce $4d^2 = c^2 \Delta t_0^2$, che segue da $2d = c\,\Delta t_0$, e si ottiene
$$
c^2 \Delta t^2 = c^2 \Delta t_0^2 + v^2 \Delta t^2 .
$$
Portando a sinistra il termine con $\Delta t^2$ e dividendo per $c^2$ si ottiene
$$
\Delta t^2 \left( 1 - \frac{v^2}{c^2} \right) = \Delta t_0^2 .
$$
Si divide per $1 - \dfrac{v^2}{c^2}$, che è positivo perché $v < c$, e si estrae la radice quadrata. Poiché $\Delta t$ e $\Delta t_0$ sono positivi,
$$
\Delta t = \frac{\Delta t_0}{\sqrt{1 - \dfrac{v^2}{c^2}}} = \gamma\, \Delta t_0 .
$$
Per il principio di relatività ogni orologio fermo in $S'$, di qualunque tipo, deve rallentare nello stesso modo; altrimenti il confronto tra due orologi diversi permetterebbe di misurare il moto di $S'$.
:::
::::

:::attenzione
La dilatazione dei tempi è reciproca. Anche un orologio fermo in $S$ va più piano per l'osservatore di $S'$, perché per lui è l'orologio di $S$ a muoversi con velocità $v$. In ogni caso il tempo proprio è quello misurato nel sistema in cui i due eventi avvengono nello stesso punto. Per l'ora segnata dall'orologio dell'astronave il tempo proprio è $60\,\mathrm{min}$, misurato a bordo, e $100\,\mathrm{min}$ è l'intervallo misurato sulla Terra.
:::

## Contrazione delle lunghezze

:::definizione{#lunghezza-propria titolo="Lunghezza propria"}
La **lunghezza propria** $L_0$ di un oggetto è la sua lunghezza misurata nel sistema inerziale in cui l'oggetto è fermo. In un sistema in cui l'oggetto si muove, la lunghezza si misura segnando le posizioni dei due estremi *nello stesso istante* di quel sistema. Per la relatività della simultaneità questa misura dà un risultato diverso da $L_0$. Per esempio, un'astronave lunga $L_0 = 100\,\mathrm{m}$, misurata dall'equipaggio, è lunga soltanto $60\,\mathrm{m}$ per gli osservatori terrestri, se si muove rispetto a essi con $v = 0{,}80\,c$, come afferma il teorema sulla contrazione delle lunghezze.
:::

::::teorema{#contrazione-lunghezze titolo="Contrazione delle lunghezze"}
Un oggetto di lunghezza propria $L_0$ si muove con velocità $v$ rispetto a un sistema inerziale $S$, lungo la direzione della propria lunghezza. La lunghezza dell'oggetto misurata in $S$ è
$$
L = \frac{L_0}{\gamma} = L_0 \sqrt{1 - \frac{v^2}{c^2}} .
$$
Poiché $\gamma > 1$, la lunghezza misurata in $S$ è minore della lunghezza propria. Le dimensioni perpendicolari alla velocità *non* cambiano. Con $L_0 = 100\,\mathrm{m}$ e $v = 0{,}80\,c$ si ha $\sqrt{1 - 0{,}64} = 0{,}60$, quindi $L = 60\,\mathrm{m}$.

:::dimostrazione
L'idea è misurare il tempo che l'oggetto impiega a passare davanti a un punto fisso $P$ di $S$, nei due sistemi. I due eventi sono il passaggio della testa dell'oggetto davanti a $P$ e il passaggio della coda davanti a $P$.

In $S$ i due eventi avvengono nello stesso punto $P$, quindi l'intervallo tra essi è un tempo proprio $\Delta t_0$. In questo tempo l'oggetto, lungo $L$ in $S$, avanza della propria lunghezza, perciò
$$
L = v\, \Delta t_0 .
$$
Nel sistema $S'$ dell'oggetto il punto $P$ si muove con velocità $v$ in verso opposto e percorre tutta la lunghezza propria $L_0$, dalla testa alla coda; i due eventi avvengono in punti diversi di $S'$ e sono separati dall'intervallo $\Delta t$, quindi
$$
L_0 = v\, \Delta t .
$$
Per la **dilatazione dei tempi** $\Delta t = \gamma\, \Delta t_0$. Dividendo membro a membro le due uguaglianze si ottiene
$$
\frac{L}{L_0} = \frac{v\, \Delta t_0}{v\, \gamma\, \Delta t_0} = \frac{1}{\gamma} ,
$$
cioè $L = \dfrac{L_0}{\gamma}$.
:::
::::

:::esempio{#muoni titolo="I muoni dei raggi cosmici"}
I **muoni** sono particelle instabili prodotte negli strati alti dell'atmosfera dagli urti dei raggi cosmici con le molecole dell'aria. Un muone fermo decade con **vita media** $\tau = 2{,}2\,\mu\mathrm{s}$, nel senso che, per una legge sperimentale, di un gruppo di muoni fermi dopo il tempo $t$ sopravvive la frazione $e^{-\frac{t}{\tau}}$. Si considerano muoni prodotti a $h = 6{,}0\,\mathrm{km}$ di quota, che scendono verticalmente con $v = 0{,}995\,c$, per cui $\gamma \approx 10{,}0$.

- Nel sistema della Terra il viaggio dura $\Delta t = \dfrac{h}{v} = \dfrac{6000}{0{,}995 \cdot 3{,}00 \cdot 10^{8}}\,\mathrm{s} \approx 20\,\mu\mathrm{s}$, circa $9$ vite medie. Senza la dilatazione dei tempi arriverebbe al suolo la frazione $e^{-9{,}1} \approx 1 \cdot 10^{-4}$ dei muoni, circa uno ogni diecimila.
- Per la **dilatazione dei tempi** il viaggio dura per i muoni il tempo proprio $\Delta t_0 = \dfrac{\Delta t}{\gamma} \approx 2{,}0\,\mu\mathrm{s}$, meno di una vita media, quindi arriva al suolo la frazione $e^{-\frac{2{,}0}{2{,}2}} \approx 0{,}40$.
- Nel sistema dei muoni la Terra viene loro incontro con velocità $v$, e lo spessore di atmosfera da attraversare è contratto a $\dfrac{h}{\gamma} \approx 600\,\mathrm{m}$, che si percorre in $\dfrac{600\,\mathrm{m}}{v} \approx 2{,}0\,\mu\mathrm{s}$. La **contrazione delle lunghezze** dà quindi lo stesso risultato.

Al livello del mare si misura effettivamente un flusso di muoni molto maggiore di quello previsto senza la relatività, e il confronto tra i conteggi in quota e al suolo è una verifica sperimentale della dilatazione dei tempi.
:::

## Trasformazioni di Lorentz

:::teorema{#trasformazioni-lorentz titolo="Trasformazioni di Lorentz"}
Con i sistemi $S$ e $S'$ disposti come nelle trasformazioni di Galileo, un evento che in $S$ ha coordinate $(x, y, z, t)$ ha in $S'$ le coordinate
$$
\begin{cases}
x' = \gamma \left( x - v t \right) \\[4pt]
y' = y \\[4pt]
z' = z \\[4pt]
t' = \gamma \left( t - \dfrac{v\, x}{c^2} \right)
\end{cases}
$$
Queste relazioni si chiamano **trasformazioni di Lorentz**. Sono le uniche trasformazioni lineari compatibili con i due postulati di Einstein, e si ricavano da essi, qui senza dimostrazione. Le trasformazioni inverse si ottengono scambiando le coordinate con apice e senza apice e cambiando il segno di $v$, perché $S$ si muove rispetto a $S'$ con velocità $-v$; per esempio $x = \gamma \left( x' + v t' \right)$.

Le trasformazioni servono a passare da un sistema all'altro le coordinate di qualunque evento, e da esse seguono la dilatazione dei tempi, la contrazione delle lunghezze e la relatività della simultaneità. Per esempio, con $v = 0{,}60\,c$ e $\gamma = 1{,}25$, l'evento con $x = 3000\,\mathrm{m}$ e $t = 10\,\mu\mathrm{s}$ ha in $S'$ le coordinate
$$
x' = 1{,}25 \left( 3000 - 1{,}80 \cdot 10^{8} \cdot 1{,}0 \cdot 10^{-5} \right) \mathrm{m} = 1{,}25 \cdot 1200\,\mathrm{m} = 1500\,\mathrm{m} ,
$$
$$
t' = 1{,}25 \left( 1{,}0 \cdot 10^{-5} - \frac{0{,}60 \cdot 3000}{3{,}00 \cdot 10^{8}} \right) \mathrm{s} = 1{,}25 \cdot 4{,}0 \cdot 10^{-6}\,\mathrm{s} = 5{,}0\,\mu\mathrm{s} .
$$
:::

:::osservazione{#lorentz-intervalli titolo="Trasformazioni per le differenze di coordinate"}
Le trasformazioni di Lorentz sono lineari, quindi valgono anche per le differenze di coordinate tra due eventi, che diventano $\Delta x' = \gamma \left( \Delta x - v\, \Delta t \right)$ e $\Delta t' = \gamma \left( \Delta t - \dfrac{v\, \Delta x}{c^2} \right)$. Da queste formule si ritrovano la relatività della simultaneità e la dilatazione dei tempi.

- Se due eventi sono **simultanei** in $S$, cioè $\Delta t = 0$, e distano $\Delta x \neq 0$, in $S'$ sono separati da $\Delta t' = -\gamma\, \dfrac{v\, \Delta x}{c^2} \neq 0$, quindi non sono simultanei. Con $v > 0$ e $\Delta x > 0$ si ha $\Delta t' < 0$, quindi in $S'$ avviene prima l'evento che si trova più avanti lungo l'asse $x$.
- Con la trasformazione inversa $\Delta t = \gamma \left( \Delta t' + \dfrac{v\, \Delta x'}{c^2} \right)$, due eventi che in $S'$ avvengono nello stesso punto, $\Delta x' = 0$, sono separati in $S$ da $\Delta t = \gamma\, \Delta t'$, che è la dilatazione dei tempi.

Per il vagone di Einstein la lunghezza propria è $L_0 = \gamma \cdot 48\,\mathrm{m} = 60\,\mathrm{m}$, e i due arrivi del lampo, simultanei in $S'$, sono separati in $S$ da $\Delta t = \gamma\, \dfrac{v\, L_0}{c^2} = 1{,}25 \cdot \dfrac{0{,}60 \cdot 60}{3{,}00 \cdot 10^{8}}\,\mathrm{s} = 1{,}5 \cdot 10^{-7}\,\mathrm{s}$, lo stesso valore trovato con le velocità relative.
:::

:::osservazione{#limite-classico titolo="Limite classico"}
Quando $v \ll c$, cioè quando $v$ è molto minore di $c$, il fattore $\gamma$ è praticamente uguale a $1$ e il termine $\dfrac{v\, x}{c^2}$ è trascurabile, quindi le trasformazioni di Lorentz si riducono alle trasformazioni di Galileo $x' = x - vt$ e $t' = t$. La meccanica classica è perciò un caso limite della relatività ristretta, valido per velocità piccole rispetto a quella della luce. Per un aereo con $v = 300\,\mathrm{m/s}$ si ha $\gamma - 1 \approx 5 \cdot 10^{-13}$, e per un evento a $x = 3000\,\mathrm{m}$ il termine $\dfrac{v\, x}{c^2}$ vale $\dfrac{300 \cdot 3000}{9{,}00 \cdot 10^{16}}\,\mathrm{s} = 1{,}0 \cdot 10^{-11}\,\mathrm{s}$. Nessun cronometro ordinario può rilevare correzioni così piccole.
:::

## Composizione relativistica delle velocità

:::teorema{#composizione-velocita titolo="Composizione relativistica delle velocità"}
Un corpo si muove lungo l'asse $x$ con velocità $u'$ rispetto al sistema $S'$, che a sua volta si muove con velocità $v$ rispetto a $S$. La velocità del corpo rispetto a $S$ è
$$
u = \frac{u' + v}{1 + \dfrac{u'\, v}{c^2}} .
$$
La formula si ricava dalle trasformazioni di Lorentz inverse, dividendo $\Delta x = \gamma \left( \Delta x' + v\, \Delta t' \right)$ per $\Delta t = \gamma \left( \Delta t' + \dfrac{v\, \Delta x'}{c^2} \right)$ e poi numeratore e denominatore per $\Delta t'$. Le velocità $u'$ e $v$ hanno segno, positivo nel verso dell'asse $x$. Quando $u' \ll c$ oppure $v \ll c$ il denominatore è praticamente $1$ e si ritrova la composizione galileiana $u = u' + v$.

Per esempio, un'astronave che si allontana dalla Terra a $v = 0{,}60\,c$ lancia in avanti una sonda con velocità $u' = 0{,}80\,c$ rispetto a sé. Rispetto alla Terra la sonda ha velocità
$$
u = \frac{0{,}60\,c + 0{,}80\,c}{1 + 0{,}60 \cdot 0{,}80} = \frac{1{,}40\,c}{1{,}48} \approx 0{,}95\,c ,
$$
mentre la composizione galileiana darebbe $1{,}40\,c$, una velocità maggiore di quella della luce.

::grafico{f="(x+0.5)/(1+0.5*x);x+0.5" asintoti="y=1;y=-1" xmin=-1 xmax=1 ymin=-1 ymax=1.6 uguale=1 nomi="u′,u" legenda="u = \dfrac{u' + 0{,}5\,c}{1 + 0{,}5\,\frac{u'}{c}};u = u' + 0{,}5\,c" titolo="Velocità $u$ rispetto a $S$ in funzione della velocità $u'$ rispetto a $S'$, entrambe in unità di $c$, per $v = 0{,}5\,c$: la composizione relativistica resta tra $-c$ e $c$, quella galileiana supera $c$"}

:::

:::osservazione{#velocita-luce-composta titolo="La velocità della luce composta con un'altra velocità"}
Se in $S'$ si muove un raggio di luce, con $u' = c$, la formula di composizione dà
$$
u = \frac{c + v}{1 + \dfrac{c\, v}{c^2}} = \frac{c + v}{1 + \dfrac{v}{c}} = \frac{c + v}{\dfrac{c + v}{c}} = c ,
$$
qualunque sia $v$. La legge di composizione è quindi coerente con il secondo postulato, secondo il quale la luce ha velocità $c$ in tutti i sistemi inerziali. Inoltre, se $u'$ e $v$ sono minori di $c$ in modulo, anche $u$ è minore di $c$ in modulo, e $c$ è perciò la velocità limite dei corpi materiali, come si vede nell'argomento sulla dinamica relativistica. Per esempio, due velocità di $0{,}90\,c$ nello stesso verso si compongono in $\dfrac{1{,}80\,c}{1{,}81} \approx 0{,}994\,c$.
:::

## Intervallo invariante e diagrammi di Minkowski

:::teorema{#intervallo-invariante titolo="Intervallo invariante"}
Due eventi sono separati in $S$ dall'intervallo di tempo $\Delta t$ e dalla distanza $\Delta x$ lungo l'asse $x$, con $\Delta y = \Delta z = 0$. La grandezza
$$
(\Delta s)^2 = (c\, \Delta t)^2 - (\Delta x)^2
$$
si chiama **intervallo** tra i due eventi, e ha lo stesso valore in tutti i sistemi inerziali, cioè $(c\, \Delta t')^2 - (\Delta x')^2 = (c\, \Delta t)^2 - (\Delta x)^2$. L'uguaglianza si verifica sostituendo le trasformazioni di Lorentz per le differenze di coordinate. Se le distanze hanno componenti anche lungo $y$ e $z$, si sottraggono anche $(\Delta y)^2$ e $(\Delta z)^2$.

L'intervallo permette di confrontare le misure di osservatori diversi senza scrivere le trasformazioni. Per esempio, due eventi con $\Delta x = 1200\,\mathrm{m}$ e $\Delta t = 5{,}0\,\mu\mathrm{s}$, cioè $c\, \Delta t = 1500\,\mathrm{m}$, hanno $(\Delta s)^2 = \left( 1500^2 - 1200^2 \right) \mathrm{m^2} = 8{,}1 \cdot 10^{5}\,\mathrm{m^2}$. In un sistema $S'$ con $v = 0{,}60\,c$ le trasformazioni danno $\Delta x' = 375\,\mathrm{m}$ e $c\, \Delta t' = 975\,\mathrm{m}$, e infatti $975^2 - 375^2 = 8{,}1 \cdot 10^{5}$.
:::

:::definizione{#tipi-di-intervallo titolo="Intervalli di tipo tempo, spazio e luce"}
Secondo il segno dell'intervallo si distinguono tre casi.

- **Tipo tempo**, $(\Delta s)^2 > 0$. Un corpo che si muove più piano della luce può essere presente a entrambi gli eventi. Esiste un sistema in cui i due eventi avvengono nello stesso punto, e in esso il loro intervallo di tempo è il tempo proprio $\Delta t_0 = \dfrac{\Delta s}{c}$.
- **Tipo luce**, $(\Delta s)^2 = 0$. Un segnale luminoso partito dal primo evento arriva esattamente nel luogo e nell'istante del secondo.
- **Tipo spazio**, $(\Delta s)^2 < 0$. Nemmeno la luce può andare da un evento all'altro. Esiste un sistema in cui i due eventi sono simultanei, e in esso la loro distanza è $\sqrt{(\Delta x)^2 - (c\, \Delta t)^2}$.

Il tipo di un intervallo è lo stesso in tutti i sistemi inerziali, perché $(\Delta s)^2$ è invariante. Nell'esempio con $\Delta x = 1200\,\mathrm{m}$ e $c\, \Delta t = 1500\,\mathrm{m}$ l'intervallo è di tipo tempo, con $\Delta s = 900\,\mathrm{m}$, quindi esiste un sistema in cui i due eventi accadono nello stesso punto a distanza di $\Delta t_0 = \dfrac{900}{3{,}00 \cdot 10^{8}}\,\mathrm{s} = 3{,}0\,\mu\mathrm{s}$.
:::

:::definizione{#diagramma-minkowski titolo="Diagramma di Minkowski e linea di universo"}
Un **diagramma di Minkowski** rappresenta gli eventi di un sistema $S$ come punti di un piano, con la coordinata $x$ in orizzontale e la grandezza $ct$ in verticale, misurate nella stessa unità. La successione degli eventi che costituiscono la storia di un corpo forma una linea, detta **linea di universo** del corpo.

- Un corpo fermo in $S$ ha come linea di universo una retta verticale.
- Un corpo con velocità costante $v$ ha come linea di universo una retta con $ct = \dfrac{c}{v}\, x + \text{costante}$, che forma con l'asse $ct$ un angolo $\alpha$ con $\tan \alpha = \beta$.
- Un raggio di luce ha come linea di universo una retta inclinata di $45^\circ$, perché $\beta = 1$.

Nel diagramma si disegnano anche gli assi del sistema $S'$. L'asse $ct'$ è la linea di universo dell'origine $O'$, cioè la retta $ct = \dfrac{x}{\beta}$; l'asse $x'$ è formato dagli eventi con $t' = 0$, cioè con $t = \dfrac{v\, x}{c^2}$, ed è la retta $ct = \beta x$. I due assi sono simmetrici rispetto alla linea di universo della luce. Per esempio, con $\beta = 0{,}5$ l'asse $ct'$ forma con l'asse $ct$ un angolo di circa $27^\circ$, perché $\tan \alpha = 0{,}5$. Le rette parallele all'asse $x'$ uniscono eventi simultanei in $S'$, che in $S$ avvengono in istanti diversi; in questo modo il diagramma rende visibile la relatività della simultaneità.

::grafico{f="2*x;0.5*x" segmenti="0,0,4,4" punti="2,4,pieno,A" xmin=0 xmax=5 ymin=0 ymax=5 uguale=1 nomi="x,ct" etichette="2.15,4.8,ct′;4.3,1.8,x′;3.5,3.85,luce" legenda="ct = 2x;ct = 0{,}5\,x" titolo="Diagramma di Minkowski del sistema $S$ con gli assi del sistema $S'$ per $\beta = 0{,}5$; la linea punteggiata a $45^\circ$ è la linea di universo di un raggio di luce, e l'evento $A$ si trova sull'asse $ct'$"}

:::

:::definizione{#cono-di-luce titolo="Cono di luce e causalità"}
Le due rette $ct = x$ e $ct = -x$ passanti per un evento $O$ sono le linee di universo dei raggi di luce che passano per $O$, e dividono il diagramma in tre regioni. Considerando anche le direzioni $y$ e $z$, queste rette formano una superficie conica, detta **cono di luce** dell'evento $O$.

- Gli eventi con $ct > |x|$ formano il **futuro** di $O$. Sono separati da $O$ da un intervallo di tipo tempo e seguono $O$ in tutti i sistemi inerziali.
- Gli eventi con $ct < -|x|$ formano il **passato** di $O$, e precedono $O$ in tutti i sistemi inerziali.
- Gli eventi con $|ct| < |x|$ formano l'**altrove**. Sono separati da $O$ da un intervallo di tipo spazio, e il loro ordine temporale rispetto a $O$ dipende dal sistema di riferimento.

Un evento può essere causa di un altro solo se il secondo si trova nel futuro del primo o sul suo cono di luce, perché un segnale non può viaggiare più veloce della luce. Per questo l'ordine tra causa ed effetto è lo stesso per tutti gli osservatori. Per esempio, l'evento $B$ con $x = 3\,\mathrm{m}$ e $ct = 1\,\mathrm{m}$ si trova nell'altrove dell'origine, perché $1 < 3$; nessun segnale partito dall'origine può raggiungerlo.

::grafico{f="x;-x" area="4;abs(x);-4;4|-abs(x);-4;-4;4" punti="1,3,pieno,A;3,1,pieno,B;2,2,pieno,C" etichette="-1.1,3.5,futuro;-1.1,-3.5,passato;-3.9,0.4,altrove;2.3,-0.6,altrove" xmin=-4 xmax=4 ymin=-4 ymax=4 uguale=1 nomi="x,ct" legenda="ct = x;ct = -x" titolo="Cono di luce dell'origine: l'evento $A$ è nel futuro (intervallo di tipo tempo), l'evento $B$ nell'altrove (tipo spazio), l'evento $C$ sul cono (tipo luce)"}

:::

## Paradosso dei gemelli

:::osservazione{#paradosso-gemelli titolo="Paradosso dei gemelli"}
Due gemelli hanno la stessa età. Il primo resta sulla Terra; il secondo parte su un'astronave verso una stella distante $4{,}0$ anni luce, dove un **anno luce** è la distanza che la luce percorre in un anno, viaggia a $v = 0{,}80\,c$ e, appena arrivato, torna indietro con la stessa velocità. Il tempo e la velocità del viaggio sono misurati dalla Terra, e la Terra si considera un sistema inerziale.

- Per il gemello sulla Terra il viaggio dura $\Delta t = \dfrac{2 \cdot 4{,}0\,\text{anni luce}}{0{,}80\,c} = 10$ anni.
- Il gemello viaggiatore è presente alla partenza, al giro di boa e al ritorno, quindi il suo orologio misura il tempo proprio di ciascuna tratta; per la dilatazione dei tempi la durata totale per lui è $\Delta t_0 = \dfrac{10\ \text{anni}}{\gamma} = 10 \cdot 0{,}60\ \text{anni} = 6{,}0$ anni.

Al ritorno il gemello viaggiatore è perciò più giovane di $4{,}0$ anni. Il **paradosso** sta nel ragionamento opposto, secondo il quale per il viaggiatore è la Terra a muoversi, e quindi dovrebbe essere il gemello terrestre a invecchiare meno.
:::

:::osservazione{#gemelli-spiegazione titolo="Spiegazione con il cambio di sistema di riferimento"}
La situazione dei due gemelli non è simmetrica. Il gemello terrestre resta per tutto il tempo nello stesso sistema inerziale. Il gemello viaggiatore usa due sistemi inerziali diversi, quello dell'andata e quello del ritorno, e al giro di boa cambia sistema, subendo un'accelerazione che può avvertire. La formula della dilatazione dei tempi si applica alle misure fatte in un sistema inerziale, quindi il calcolo corretto è quello fatto nel sistema della Terra.

Il diagramma di Minkowski del sistema della Terra, con $x$ e $ct$ in anni luce, mostra che cosa accade; il valore di $ct$ in anni luce è uguale a quello di $t$ in anni. Le rette tratteggiate uniscono il giro di boa agli eventi sulla Terra che il viaggiatore considera simultanei a esso. Nel sistema dell'andata la retta ha pendenza $\beta$ e incontra l'asse $ct$ in $ct = 5{,}0 - 0{,}80 \cdot 4{,}0 = 1{,}8$ anni luce, cioè all'istante terrestre $t = 1{,}8$ anni; nel sistema del ritorno ha pendenza $-\beta$ e lo incontra all'istante $t = 5{,}0 + 3{,}2 = 8{,}2$ anni. Ciascuna tratta dura per il viaggiatore $3{,}0$ anni; durante una tratta egli considera rallentato l'orologio terrestre, e calcola che segni $\dfrac{3{,}0\ \text{anni}}{\gamma} = 1{,}8$ anni; al cambio di sistema, invece, gli eventi terrestri simultanei al giro di boa passano da $1{,}8$ a $8{,}2$ anni. Sommando $1{,}8 + 6{,}4 + 1{,}8 = 10$ anni anche il viaggiatore ritrova il tempo misurato sulla Terra.

::grafico{linee="0,0 4,5 0,10" segmenti="4,5,0,1.8;4,5,0,8.2" punti="4,5,pieno,G;0,1.8,pieno;0,8.2,pieno;0,10,pieno" etichette="0.2,1.4,1,8;0.2,7.7,8,2;2.35,2.2,andata;2.35,7.9,ritorno" xmin=-1 xmax=5 ymin=0 ymax=11 nomi="x,ct" legenda=0 titolo="Viaggio del gemello nel sistema della Terra, con $x$ e $ct$ in anni luce; i due assi hanno scale diverse (un anno luce sull'asse $ct$ è disegnato più corto che sull'asse $x$), perciò le linee di universo della luce non appaiono inclinate di $45^\circ$. La linea di universo della Terra è l'asse $ct$; dal giro di boa $G$ le rette tratteggiate raggiungono gli eventi terrestri simultanei a $G$ per il viaggiatore all'andata e al ritorno"}

L'effetto è stato verificato con orologi atomici portati in volo su aerei e confrontati al ritorno con orologi rimasti a terra, e con particelle instabili che percorrono orbite chiuse negli acceleratori.
:::
