---
titolo: Carica elettrica e circuiti
sommario: La carica elettrica, il significato di corrente e tensione, la legge di Ohm, i collegamenti in serie e in parallelo e il calcolo di potenza ed energia nei circuiti.
---

## La carica elettrica

:::definizione{#carica-elettrica titolo="Carica elettrica"}
La **carica elettrica** è una proprietà delle particelle che costituiscono la materia. Si indica con $q$ e si misura in coulomb, con simbolo $\mathrm{C}$. Esistono cariche di segno positivo e cariche di segno negativo. Due corpi con cariche dello stesso segno si respingono; due corpi con cariche di segno opposto si attraggono, nelle condizioni elettrostatiche qui considerate.

Gli elettroni hanno carica negativa, i protoni carica positiva. Un corpo è **elettricamente neutro** quando la somma delle sue cariche è nulla. Può quindi contenere molte particelle cariche e avere carica totale zero. Per esempio, una carica positiva di $3\,\mathrm{\mu C}$ e una negativa di $-3\,\mathrm{\mu C}$ hanno somma nulla. Il prefisso micro indica un milionesimo, quindi $1\,\mathrm{\mu C}=10^{-6}\,\mathrm{C}$.

Un corpo inizialmente neutro che acquista elettroni acquista carica netta negativa; un corpo inizialmente neutro che perde elettroni acquista carica netta positiva. Il segno descrive il tipo di carica, mentre il valore assoluto ne indica la quantità.
:::

:::teorema{#conservazione-carica titolo="Conservazione della carica"}
La carica elettrica totale di un sistema isolato dal punto di vista degli scambi di carica resta costante. È una legge sperimentale. La carica può passare da un corpo all'altro, mentre la somma delle cariche del sistema conserva il proprio valore.

Due corpi inizialmente neutri hanno carica totale zero. Se dopo uno scambio il primo ha carica $+2\,\mathrm{\mu C}$ e il secondo è l'unico altro corpo coinvolto, il secondo deve avere carica $-2\,\mathrm{\mu C}$, perché
$$
+2\,\mathrm{\mu C}-2\,\mathrm{\mu C}=0.
$$
La legge permette di calcolare una carica finale anche senza conoscere in dettaglio come sia avvenuto lo scambio.
:::

## Conduttori e circuiti

:::definizione{#circuito-elettrico titolo="Circuito elettrico"}
Un **conduttore** contiene cariche che possono muoversi attraverso il materiale; nei metalli si tratta di elettroni. Un **isolante** ostacola questo movimento su grandi distanze. Il rame è un conduttore, mentre il rivestimento plastico di un filo svolge la funzione di isolante.

Un **circuito elettrico** è un insieme di componenti collegati mediante conduttori. Un generatore, come una pila, può trasferire energia alle cariche; un utilizzatore, come un resistore, riceve energia elettrica. Un **resistore** è un componente costruito per avere una determinata resistenza elettrica, grandezza che verrà definita con la legge di Ohm.

Nel circuito elementare in corrente continua, il percorso conduttore deve essere chiuso perché possa circolare una corrente permanente. Un interruttore aperto interrompe il percorso; un interruttore chiuso lo completa. Per esempio, nel modello con pila e resistore, aprendo l'unico interruttore la corrente permanente si annulla in tutto il circuito.

Negli esercizi i fili e gli interruttori chiusi hanno resistenza trascurabile, mentre il generatore è ideale e mantiene la tensione dichiarata ai suoi morsetti. Queste ipotesi permettono di concentrare il calcolo sulle resistenze indicate.

::grafico{assi=0 uguale=1 linee="0,0 0,1.3;0,1.7 0,3 2,3;3,3 5,3 5,0 0,0;-0.4,1.7 0.4,1.7;-0.2,1.3 0.2,1.3;2,2.7 3,2.7 3,3.3 2,3.3 2,2.7" vettori="3.5,3.65,4.5,3.65" etichette="-0.8,1.7,+;-0.8,1.2,−;0.35,1.45,V;2.3,3.8,R;4,4.05,I" xmin=-1.3 xmax=5.8 ymin=-0.6 ymax=4.5 titolo="Un generatore ideale e un resistore formano un percorso chiuso; la freccia indica il verso convenzionale della corrente nel circuito esterno"}
:::

:::osservazione{titolo="Regime costante"}
Un circuito è in **regime costante** quando le correnti e le tensioni considerate mantengono lo stesso valore nel tempo. I brevi processi che seguono la chiusura di un interruttore sono esclusi da questo modello. Per esempio, in un circuito con generatore ideale a tensione costante e un resistore a resistenza costante, si descrive lo stato stabilito dopo la chiusura. Questa ipotesi permette di confrontare correnti e tensioni usando un solo valore per ogni grandezza.
:::

## La corrente in un circuito

:::definizione{#corrente-elettrica titolo="Intensità di corrente"}
La **corrente elettrica** descrive un movimento ordinato di cariche. Per misurarla si considera una sezione del conduttore e si conta la carica che la attraversa in un intervallo di tempo.

Se la carica netta $\Delta q$ attraversa la sezione nel verso scelto durante l'intervallo $\Delta t>0$, la corrente media è
$$
I=\frac{\Delta q}{\Delta t}.
$$
La corrente si misura in ampere, con simbolo $\mathrm{A}$; $1\,\mathrm{A}=1\,\mathrm{C/s}$. Negli esercizi considereremo correnti costanti e useremo $q$ per la quantità positiva di carica transitata nel verso convenzionale. In tal caso $q=I\Delta t$.

Il **verso convenzionale** è il verso del moto di cariche positive. Nei fili metallici gli elettroni si muovono nel verso opposto. Nel circuito esterno di una pila che alimenta un resistore la corrente convenzionale va dal morsetto positivo a quello negativo.
:::

:::esempio{titolo="Carica che attraversa un filo"}
In $4\,\mathrm{s}$ una sezione è attraversata dalla carica di $12\,\mathrm{C}$. La corrente media vale
$$
I=\frac{12\,\mathrm{C}}{4\,\mathrm{s}}=3\,\mathrm{A}.
$$
Se la corrente è costante, in ogni secondo attraversano la sezione $3\,\mathrm{C}$. Il grafico della carica transitata in funzione del tempo è allora una retta passante per l'origine.

::grafico{f="3*x" xmin=0 xmax=6 ymin=0 ymax=20 nomi="t,q" legenda=0 punti="4,12,pieno" titolo="Con corrente costante di $3\,\mathrm{A}$ la carica $q$, in coulomb, cresce di $3\,\mathrm{C}$ per ogni secondo"}
:::

:::osservazione{titolo="Carica ed energia lungo il circuito"}
In regime costante, la carica che entra in un utilizzatore in un intervallo di tempo è uguale a quella che ne esce nello stesso intervallo. La carica totale dell'utilizzatore rimane quindi costante. L'energia elettrica trasferita può invece trasformarsi in altre forme, come l'energia interna di un resistore. Nei tratti senza diramazioni la corrente ha perciò lo stesso valore prima e dopo il componente, anche se il componente ha ricevuto energia.
:::

## La tensione tra due punti

:::definizione{#tensione-elettrica titolo="Differenza di potenziale"}
La **tensione elettrica**, o differenza di potenziale, tra due punti esprime l'energia trasferibile per unità di carica nel passaggio tra quei punti. In questo capitolo indichiamo con $V$ il valore positivo della tensione ai capi di un utilizzatore, orientato secondo la corrente che lo attraversa.

Se il campo elettrico trasferisce all'utilizzatore l'energia $W$ durante il passaggio della carica positiva $q$, si ha
$$
V=\frac{W}{q},
\qquad
W=qV.
$$
L'unità è il volt, con simbolo $\mathrm{V}$, e $1\,\mathrm{V}=1\,\mathrm{J/C}$. Per esempio, una tensione di $6\,\mathrm{V}$ corrisponde a $6\,\mathrm{J}$ per ogni coulomb. Il passaggio di $2\,\mathrm{C}$ attraverso l'utilizzatore trasferisce quindi $12\,\mathrm{J}$.

La tensione si riferisce a *due punti*. Una pila ideale può mantenere una tensione ai suoi morsetti anche quando il circuito è aperto; in quel caso manca un percorso chiuso e la corrente permanente è nulla. Tensione e corrente misurano dunque due aspetti distinti del circuito.
:::

## Resistenza e legge di Ohm

:::definizione{#resistenza titolo="Resistenza elettrica"}
La **resistenza elettrica** $R$ di un componente, nelle condizioni considerate e per corrente diversa da zero, è il rapporto tra la tensione ai suoi capi e la corrente che lo attraversa:
$$
R=\frac{V}{I}.
$$
Si misura in ohm, con simbolo $\Omega$; $1\,\Omega=1\,\mathrm{V/A}$. Un componente ai cui capi si misurano $6\,\mathrm{V}$ e nel quale passa una corrente di $2\,\mathrm{A}$ presenta, in quelle condizioni, una resistenza di $3\,\Omega$.
:::

:::teorema{#legge-ohm titolo="Prima legge di Ohm"}
Per un **conduttore ohmico**, mantenuto a temperatura costante nell'intervallo di funzionamento considerato, tensione e corrente sono direttamente proporzionali:
$$
V=RI.
$$
La resistenza $R$ resta costante al variare della tensione. La legge è sperimentale e permette di calcolare la corrente con $I=\dfrac{V}{R}$, quando $R>0$.

Per un resistore di $4\,\Omega$, una tensione di $4\,\mathrm{V}$ produce $1\,\mathrm{A}$ e una tensione di $8\,\mathrm{V}$ produce $2\,\mathrm{A}$. Raddoppiando la tensione, quindi, raddoppia la corrente. Il grafico di $V$ in funzione di $I$ è una retta passante per l'origine.

::grafico{f="4*x" xmin=0 xmax=3 ymin=0 ymax=12 nomi="I,V" legenda=0 punti="1,4,pieno;2,8,pieno" titolo="Per un resistore ohmico di $4\,\Omega$, la tensione $V$, in volt, è proporzionale alla corrente $I$, in ampere"}
:::

:::attenzione
La proporzionalità non vale per ogni componente. Per esempio, se un componente assorbe $1\,\mathrm{A}$ a $2\,\mathrm{V}$ e $1{,}5\,\mathrm{A}$ a $4\,\mathrm{V}$, i rapporti sono $2\,\Omega$ e circa $2{,}67\,\Omega$. Poiché sono diversi, quei dati non descrivono una resistenza costante.
:::

:::osservazione{titolo="Lettura del grafico di Ohm"}
Nel grafico con la corrente sull'asse orizzontale e la tensione su quello verticale, ogni punto rappresenta una coppia di misure sul componente. Il rapporto tra la coordinata verticale e quella orizzontale, per corrente diversa da zero, fornisce la resistenza. A parità di corrente, un resistore con resistenza maggiore richiede una tensione maggiore; la sua retta è quindi più inclinata rispetto all'asse orizzontale. Il confronto presuppone che si usino gli stessi assi e le stesse scale.
:::

## Resistori in serie

::::teorema{#resistori-serie titolo="Collegamento in serie"}
Due resistori sono **in serie** quando sono attraversati dalla stessa corrente e tra essi non vi sono diramazioni. La tensione totale è la somma delle tensioni sui due resistori. La **resistenza equivalente** è il valore di un unico resistore che, collegato agli stessi morsetti, assorbirebbe la stessa corrente totale.

Per due resistori in serie si ha
$$
R_{\mathrm{eq}}=R_1+R_2.
$$
La relazione si estende a più resistori sommando tutte le resistenze. Per esempio, $2\,\Omega$ e $4\,\Omega$ in serie equivalgono a $6\,\Omega$. Con un generatore ideale da $12\,\mathrm{V}$ la corrente è $2\,\mathrm{A}$; le tensioni sono $4\,\mathrm{V}$ e $8\,\mathrm{V}$ e la loro somma è $12\,\mathrm{V}$.

:::dimostrazione
La corrente $I$ è la stessa nei due resistori. Applicando la legge di Ohm a ciascuno e sommando le tensioni, si ottiene
$$
V=R_1I+R_2I=(R_1+R_2)I.
$$
Confrontando questa relazione con $V=R_{\mathrm{eq}}I$ si ricava la somma delle resistenze.
:::
::::

:::esempio{titolo="Schema di due resistori in serie"}
Nel disegno il percorso tra i morsetti $A$ e $B$ contiene due resistori e nessuna diramazione. In regime costante, la carica che attraversa il primo in un secondo attraversa anche il secondo nello stesso intervallo; perciò le correnti sono uguali.

::grafico{assi=0 uguale=1 linee="0,0 1,0;2,0 3,0;4,0 5,0;1,-0.3 2,-0.3 2,0.3 1,0.3 1,-0.3;3,-0.3 4,-0.3 4,0.3 3,0.3 3,-0.3" punti="0,0,pieno,A;5,0,pieno,B" vettori="0.3,0.8,1.1,0.8;3.8,0.8,4.6,0.8" etichette="1.3,-0.9,R₁;3.3,-0.9,R₂;0.6,1.15,I;4.1,1.15,I" xmin=-0.6 xmax=5.6 ymin=-1.4 ymax=1.6 titolo="Due resistori in serie tra i morsetti $A$ e $B$: la corrente è la stessa in entrambi"}
:::

## Resistori in parallelo

::::teorema{#resistori-parallelo titolo="Collegamento in parallelo"}
Due resistori sono **in parallelo** quando i loro capi sono collegati alla stessa coppia di punti. Hanno quindi la stessa tensione. La corrente totale si divide nei rami e vale $I=I_1+I_2$, perché in regime costante la carica non si accumula nel punto di diramazione, detto nodo.

Per resistenze positive,
$$
\frac{1}{R_{\mathrm{eq}}}=\frac{1}{R_1}+\frac{1}{R_2},
\qquad
R_{\mathrm{eq}}=\frac{R_1R_2}{R_1+R_2}.
$$
L'ultima formula riguarda due resistori. Per esempio, $6\,\Omega$ e $3\,\Omega$ in parallelo equivalgono a $2\,\Omega$. Con $6\,\mathrm{V}$ ai capi, le correnti nei rami sono $1\,\mathrm{A}$ e $2\,\mathrm{A}$; la corrente totale è $3\,\mathrm{A}$.

:::dimostrazione
Si applica la legge di Ohm a ogni ramo, poi si sommano le correnti:
$$
I=\frac{V}{R_1}+\frac{V}{R_2}
=V\left(\frac{1}{R_1}+\frac{1}{R_2}\right).
$$
Poiché per il resistore equivalente vale $I=\dfrac{V}{R_{\mathrm{eq}}}$, si ottiene la relazione tra i reciproci. Riducendo al denominatore comune si ricava la seconda espressione.
:::
::::

:::osservazione
La resistenza equivalente del parallelo è minore di ciascuna resistenza. Infatti aggiungere un ramo offre un ulteriore percorso alla corrente; a parità di tensione, la corrente totale aumenta. Questa conclusione riguarda il generatore ideale e le resistenze costanti del modello.

::grafico{assi=0 uguale=1 linee="0,0 1,0 1,1.5 2,1.5;3,1.5 4,1.5 4,0 5,0;1,0 1,-1.5 2,-1.5;3,-1.5 4,-1.5 4,0;2,1.2 3,1.2 3,1.8 2,1.8 2,1.2;2,-1.8 3,-1.8 3,-1.2 2,-1.2 2,-1.8" punti="0,0,pieno,A;5,0,pieno,B;1,0,pieno;4,0,pieno" vettori="1.4,2.2,2.2,2.2;1.4,-2.2,2.2,-2.2" etichette="2.25,0.75,R₁;2.25,-0.85,R₂;1.5,2.65,I₁;1.5,-2.7,I₂" xmin=-0.5 xmax=5.5 ymin=-3.1 ymax=3.1 titolo="Due resistori in parallelo: ciascun ramo collega gli stessi morsetti $A$ e $B$, quindi ha la stessa tensione"}
:::

:::osservazione{titolo="Riconoscere i collegamenti"}
Il tipo di collegamento dipende dai punti ai quali sono connessi i componenti. Le dimensioni e la forma del disegno possono cambiare lasciando invariato il circuito. Nei fili ideali la tensione tra due punti dello stesso tratto è nulla, quindi quei punti hanno lo stesso potenziale. Per esempio, i due rami del parallelo disegnato hanno i capi collegati ad $A$ e a $B$: ciascun ramo ha la tensione tra $A$ e $B$, qualunque sia la lunghezza dei fili ideali rappresentati.
:::

## Potenza ed energia elettrica

::::teorema{#potenza-elettrica titolo="Potenza assorbita"}
La **potenza elettrica** $P_e$ è l'energia ricevuta nell'unità di tempo. Per tensione e corrente costanti, con l'orientamento dell'utilizzatore già introdotto,
$$
P_e=VI.
$$
Si misura in watt, con simbolo $\mathrm{W}$. Per un resistore ohmico si può anche scrivere $P_e=RI^2$ oppure $P_e=\dfrac{V^2}{R}$. Nel resistore l'energia elettrica si trasforma in energia interna; questo fenomeno è detto **effetto Joule**.

Un utilizzatore alimentato a $12\,\mathrm{V}$ e percorso da $0{,}50\,\mathrm{A}$ assorbe $6\,\mathrm{W}$. Riceve quindi $6\,\mathrm{J}$ ogni secondo.

:::dimostrazione
In un intervallo $\Delta t$ transita la carica $q=I\Delta t$. L'energia trasferita è $W=qV=VI\Delta t$. Dividendo per $\Delta t$ si ottiene $P_e=VI$.
:::
::::

:::definizione{#energia-elettrica titolo="Energia e kilowattora"}
Con potenza costante, l'energia ricevuta in un intervallo di tempo è
$$
E=P_e\Delta t.
$$
Se la potenza è in watt e il tempo in secondi, l'energia è in joule. Per l'utilizzatore da $6\,\mathrm{W}$, in $10\,\mathrm{s}$ si ha $E=60\,\mathrm{J}$.

Il **kilowattora**, con simbolo $\mathrm{kWh}$, è l'energia corrispondente a una potenza di un kilowatt mantenuta per un'ora. Poiché $1\,\mathrm{kW}=1000\,\mathrm{W}$ e $1\,\mathrm{h}=3600\,\mathrm{s}$,
$$
1\,\mathrm{kWh}=3\,600\,000\,\mathrm{J}.
$$
Per esempio, un dispositivo da $24\,\mathrm{W}$ acceso per $2\,\mathrm{h}$ assorbe $48\,\mathrm{Wh}=0{,}048\,\mathrm{kWh}$. Il watt esprime una potenza; il wattora e il kilowattora esprimono energie, perché comprendono anche il tempo di funzionamento.
:::
