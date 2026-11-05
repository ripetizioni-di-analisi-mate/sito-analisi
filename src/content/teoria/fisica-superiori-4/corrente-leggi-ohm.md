---
titolo: Corrente elettrica, leggi di Ohm ed effetto Joule
sommario: Intensità e verso della corrente, resistenza e resistività, dipendenza dalla temperatura, potenza elettrica e consumo energetico.
---

## Intensità della corrente

:::definizione{#corrente titolo="Carica che attraversa una sezione"}
La **corrente elettrica** è il moto ordinato di cariche. L'intensità media attraverso una sezione del conduttore è
$$
I=\frac{\Delta q}{\Delta t}.
$$
Si misura in ampere, con $1\,\mathrm A=1\,\mathrm{C/s}$. In regime continuo stazionario il valore è costante nel tempo, quindi $q=I\Delta t$. Una corrente da $0{,}50\,\mathrm A$ trasporta $30\,\mathrm C$ in un minuto. Questo è il valore netto della carica che attraversa la sezione, non la carica contenuta in tutto il filo.

Il verso convenzionale della corrente è quello del moto delle cariche positive. Nei metalli gli elettroni di conduzione si muovono mediamente nel verso opposto. Se $1{,}0\,\mathrm C$ attraversa una sezione, il numero di elettroni corrispondente è $N=\dfrac{1{,}0}{1{,}60\cdot10^{-19}}\simeq6{,}25\cdot10^{18}$. L'intensità si riferisce al trasferimento di carica per tempo, mentre il numero di elettroni è una quantità totale.
:::

## Modello microscopico

:::teorema{#deriva titolo="Velocità media di deriva"}
In un conduttore con portatori tutti dello stesso tipo, la corrente in modulo è
$$
I=n|q|Av_d,
$$
dove $n$ è il numero di portatori per unità di volume, $A$ l'area della sezione e $v_d$ il modulo della velocità media di deriva. Nel tempo $\Delta t$ i portatori contenuti nel cilindro di volume $Av_d\Delta t$ attraversano la sezione. Moltiplicando quel volume per $n|q|$ e dividendo per $\Delta t$ si ottiene la formula.

Con $n=8{,}0\cdot10^{28}\,\mathrm{m^{-3}}$, $|q|=1{,}60\cdot10^{-19}\,\mathrm C$, $A=1{,}0\cdot10^{-6}\,\mathrm{m^2}$ e $I=1{,}0\,\mathrm A$, si trova $v_d\simeq7{,}81\cdot10^{-5}\,\mathrm{m/s}$. La velocità di deriva è piccola. Il rapido effetto della chiusura di un circuito è legato alla propagazione del campo elettromagnetico nel circuito, non al viaggio di un singolo elettrone dal generatore alla lampadina.
:::

## Resistenza e prima legge di Ohm

:::teorema{#ohm titolo="Conduttori ohmici"}
Un componente è **ohmico**, nell'intervallo e nelle condizioni considerati, se la tensione ai suoi capi è proporzionale alla corrente che lo attraversa,
$$
\Delta V=RI.
$$
La costante $R$ è la resistenza e si misura in ohm, con $1\,\Omega=1\,\mathrm{V/A}$. Un resistore da $12\,\Omega$ collegato a $6{,}0\,\mathrm V$ è attraversato da $0{,}50\,\mathrm A$. Se la tensione raddoppia e la temperatura resta la stessa, la corrente raddoppia.

Nel grafico $\Delta V$ in funzione di $I$ un resistore ohmico ha una retta per l'origine con pendenza $R$. Nel grafico $I$ in funzione di $\Delta V$ la pendenza è invece $\dfrac1R$. La legge di Ohm è sperimentale e dipende dal materiale e dalle condizioni. Un diodo o una lampadina con filamento che si riscalda possono avere una caratteristica non lineare. Il rapporto fra tensione e corrente in un singolo punto non dimostra da solo che il componente sia ohmico su tutto l'intervallo.
:::

::grafico{f="2*x;4*x" xmin=0 xmax=3 ymin=0 ymax=13 nomi="I,V" legenda="R = 2 Ω;R = 4 Ω" titolo="Caratteristiche tensione-corrente di due resistori ohmici: la retta più inclinata corrisponde alla resistenza maggiore"}

## Resistività e forma del conduttore

:::teorema{#resistivita titolo="Seconda legge di Ohm"}
Per un filo omogeneo uniforme di lunghezza $L$ e area della sezione $A$, a temperatura fissata,
$$
R=\rho\frac LA.
$$
$\rho$ è la resistività del materiale e si misura in $\Omega\,\mathrm m$. La resistenza dipende quindi sia dal materiale sia dalla geometria. Un filo più lungo oppone una resistenza maggiore; uno con sezione maggiore oppone una resistenza minore.

Con $\rho=1{,}7\cdot10^{-8}\,\Omega\,\mathrm m$, $L=10\,\mathrm m$ e $A=1{,}0\,\mathrm{mm^2}=1{,}0\cdot10^{-6}\,\mathrm{m^2}$, si ottiene $R=0{,}17\,\Omega$. Raddoppiare il diametro di un filo circolare quadruplica la sezione e divide la resistenza per quattro. Se il filo viene allungato mantenendo costante il volume e senza cambiare la resistività, una lunghezza doppia comporta sezione dimezzata e resistenza quadrupla.

Le unità di area richiedono il quadrato del fattore di conversione. Un millimetro quadrato è un milionesimo di metro quadrato; convertire usando solo $10^{-3}$ darebbe una resistenza mille volte troppo piccola.
:::

## Effetto della temperatura

:::teorema{#temperatura-resistenza titolo="Variazione approssimativamente lineare"}
In un intervallo limitato, la resistenza di molti metalli si può descrivere con
$$
R(T)=R_0[1+\alpha(T-T_0)],
$$
dove $R_0$ è la resistenza a $T_0$ e $\alpha$ il coefficiente termico riferito a quella temperatura. La variazione di temperatura può essere espressa in kelvin o in gradi Celsius, perché le differenze coincidono.

Un filo con $R_0=10\,\Omega$ a $20\,{}^\circ\mathrm C$ e $\alpha=4{,}0\cdot10^{-3}\,\mathrm{K^{-1}}$, portato a $70\,{}^\circ\mathrm C$, ha $R=12\,\Omega$. A tensione costante la corrente diminuisce da $\dfrac{\Delta V}{10\,\Omega}$ a $\dfrac{\Delta V}{12\,\Omega}$. Il modello lineare richiede l'intervallo in cui $\alpha$ è approssimativamente costante. Semiconduttori e altri materiali possono mostrare dipendenze differenti; il segno positivo del coefficiente non è universale.
:::

::grafico{f="10*(1+0.004*(x-20))" xmin=20 xmax=120 ymin=8 ymax=16 nomi="t,R" titolo="Resistenza del filo dell'esempio: da $10\,\Omega$ a $20\,{}^\circ\mathrm C$ a $12\,\Omega$ a $70\,{}^\circ\mathrm C$ nel modello lineare"}

## Potenza elettrica ed effetto Joule

::::teorema{#joule titolo="Energia trasferita a un componente"}
In corrente continua un componente attraversato dalla corrente $I$ e con caduta di tensione $\Delta V$ assorbe potenza
$$
P=\Delta V\,I.
$$
Per un resistore ohmico,
$$
P=RI^2=\frac{(\Delta V)^2}{R}.
$$
L'energia elettrica viene trasformata in energia interna del resistore e può essere ceduta come calore all'ambiente. Un resistore da $12\,\Omega$ a $6{,}0\,\mathrm V$ dissipa $3{,}0\,\mathrm W$. In $20\,\mathrm s$ riceve $60\,\mathrm J$.

:::dimostrazione
Una carica $\Delta q$ che attraversa una caduta di potenziale $\Delta V$ trasferisce energia $\Delta E=\Delta q\,\Delta V$. Dividendo per il tempo si ottiene $P=\dfrac{\Delta q}{\Delta t}\Delta V=I\Delta V$. Sostituendo $\Delta V=RI$ si ricava $RI^2$; sostituendo $I=\dfrac{\Delta V}{R}$ si ricava l'altra espressione.
:::
::::

:::attenzione
L'effetto di un cambiamento della resistenza dipende da quale grandezza resta costante. A corrente costante $P=RI^2$ cresce con $R$. A tensione costante $P=\dfrac{(\Delta V)^2}{R}$ diminuisce con $R$. Le due affermazioni riguardano condizioni diverse e non sono in contraddizione.
:::

## Energia e kilowattora

:::definizione{#energia-consumo titolo="Energia consumata a potenza costante"}
Per un dispositivo con potenza media costante,
$$
E=P\Delta t.
$$
Il joule si ottiene usando watt e secondi. In ambito domestico si usa il kilowattora,
$$
1\,\mathrm{kWh}=1000\,\mathrm W\cdot3600\,\mathrm s
=3{,}6\cdot10^6\,\mathrm J.
$$
Un apparecchio da $1{,}5\,\mathrm{kW}$ acceso per $2{,}0\,\mathrm h$ assorbe $3{,}0\,\mathrm{kWh}$, cioè $1{,}08\cdot10^7\,\mathrm J$. Il kilowatt misura potenza, mentre il kilowattora misura energia. Se un problema assegna un costo unitario, il costo energetico è quel valore moltiplicato per l'energia espressa in kilowattora.

Per un riscaldatore che trasferisce all'acqua soltanto una frazione $\eta$ dell'energia elettrica, il bilancio è $mc\Delta T=\eta P\Delta t$. Con $m=1{,}0\,\mathrm{kg}$, $c=4180\,\mathrm{J/(kg\,K)}$, $\Delta T=20\,\mathrm K$, $P=1000\,\mathrm W$ e $\eta=0{,}80$, il tempo è circa $105\,\mathrm s$. La frazione restante viene trasferita al recipiente e all'ambiente nel modello del problema.
:::

## Generatori e misure elettriche

:::definizione{#misure titolo="Amperometro, voltmetro e generatore"}
Un generatore mantiene una differenza di potenziale trasformando altre forme di energia in energia elettrica. In un circuito stazionario la carica non viene consumata dal resistore; viene trasferita energia. Il generatore ideale mantiene una tensione fissata indipendentemente dalla corrente richiesta entro il modello. Un generatore reale ha anche una resistenza interna, trattata nel capitolo sui circuiti.

Un amperometro misura la corrente ed è inserito in serie nel ramo. Nel modello ideale ha resistenza nulla, così non modifica la corrente. Un voltmetro misura una differenza di potenziale e si collega in parallelo al componente; idealmente ha resistenza infinita e non assorbe corrente. Gli strumenti reali introducono piccoli cambiamenti che dipendono dalle loro resistenze.

Nella lettura di uno schema, la corrente si riferisce a un ramo mentre la tensione si riferisce a due nodi. Scrivere entrambe senza indicare dove si misurano può confondere le grandezze totali del circuito con quelle del singolo resistore. Le associazioni e le leggi di Kirchhoff permettono di collegarle in modo sistematico.
:::
