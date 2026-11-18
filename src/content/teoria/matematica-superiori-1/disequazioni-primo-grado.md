---
titolo: Disequazioni di primo grado
sommario: Trasformazioni equivalenti, intervalli e vincoli di prezzo, capienza e quantità intere.
---

Nelle equazioni di primo grado si cercano i valori che rendono uguali due espressioni. Nelle disequazioni si cercano i valori che le dispongono in un certo ordine. Si usano ancora trasformazioni equivalenti e alla fine si rappresentano le soluzioni con intervalli. Il confronto fra condizioni simultanee servirà nelle disequazioni e nei sistemi del secondo anno.

## Ordine e trasformazioni equivalenti

::::teorema{#ordine titolo="Trasformazioni che conservano o invertono l’ordine"}
Una disuguaglianza confronta due numeri. I simboli $<$ e $>$ indicano un confronto stretto, mentre $\le$ e $\ge$ comprendono l’uguaglianza. Una **disequazione** richiede che un confronto fra espressioni valga per i valori di un’incognita nel dominio assegnato.

Due disequazioni sono **equivalenti** se hanno lo stesso insieme di soluzioni. Aggiungere la stessa espressione, definita nel dominio, ai due membri conserva il verso. Moltiplicare o dividere entrambi i membri per una costante positiva conserva il verso. Una costante negativa lo inverte.

:::dimostrazione
Si controlla il segno della differenza fra il termine di destra e quello di sinistra. Se $a<b$, la differenza $b-a$ è positiva. Aggiungendo uno stesso numero $d$, la differenza $(b+d)-(a+d)$ resta $b-a$. Dopo la moltiplicazione per $k$, la differenza è $kb-ka=k(b-a)$. È positiva per $k>0$ e negativa per $k<0$. Un’eventuale uguaglianza si conserva perché la differenza nulla resta nulla. I passaggi sono reversibili per sottrazione o divisione, dato che $k$ è diverso da zero.
:::

::grafico{assi=0 xmin=-5.1 xmax=5.1 ymin=-1.8 ymax=1.77 vettori="-4.7,0.86,4.75,0.86;-4.7,-0.82,4.75,-0.82" punti="1,0.86,pieno;4,0.86,pieno;-1,-0.82,pieno;-4,-0.82,pieno" etichette="1,1.36,1;4,1.36,4;-1,-1.32,−1;-4,-1.32,−4;-2.9,1.36,Valori iniziali;2.9,-1.32,Valori opposti" titolo="Da $1<4$ segue $-4<-1$. Il valore maggiore diventa quello più a sinistra"}
::::

:::attenzione
La moltiplicazione per zero cancella la differenza fra i due membri. Per esempio da $3<5$ si passerebbe a $0<0$, che è falso. Con $\le$ si avrebbe invece $0\le0$ per tutti i valori, anche quando il confronto iniziale è falso. La moltiplicazione per zero perde quindi la condizione che si voleva risolvere.
:::

## Coefficiente, soglia e verso

:::definizione{#coefficienti titolo="La soglia ottenuta isolando l’incognita"}
Dopo aver riunito i termini simili, una disequazione lineare si può scrivere confrontando $ax+b$ con zero. Se $a\ne0$, il numero $-\dfrac ba$ rende uguali i due membri ed è la **soglia**. Per ricavare l’insieme soluzione si isola $x$ e si controlla il segno del coefficiente usato per dividere. Il simbolo di confronto determina se la soglia appartiene all’insieme.
:::

:::esempio{titolo="Confrontare due espressioni con la stessa incognita"}
Si cerca quando $2x+6>x+9$. Sottraendo $x+6$ a entrambi i membri si ottiene $x>3$. Il confine $x=3$ dà $12=12$. Con $x=4$ si ha $14>13$, mentre con $x=2$ si ha $10<11$.

::grafico{f="2*x+6;x+9" xmin=-0.4 xmax=6.3 ymin=4.9 ymax=20.2 nomi="x,y" legenda="y=2x+6;y=x+9" punti="3,12,pieno;4,14,pieno;4,13,pieno" segmenti="3,5,3,12;4,13,4,14" titolo="Le rette si incontrano per $x=3$. A destra la prima espressione è maggiore della seconda"}

Nel confronto $-2x+1\le7$ si sottrae $1$ e si ottiene $-2x\le6$. La divisione per $-2$ inverte il verso, quindi $x\ge-3$. La sostituzione $x=-3$ dà $7$, che è ammesso dal simbolo $\le$. Un valore più piccolo, come $-4$, dà $9$ e supera il limite.
:::

::::teorema{#segno-lineare titolo="Il segno ai due lati della soglia"}
Sia $r=-\dfrac ba$ la soglia dell’espressione $ax+b$, con $a\ne0$. Se $a$ è positivo, l’espressione è negativa a sinistra di $r$ e positiva a destra. Se $a$ è negativo, i due segni si scambiano.

:::dimostrazione
Dato che $ar+b=0$, l’espressione si può riscrivere come $a(x-r)$. Per $x<r$ il fattore $x-r$ è negativo. Per $x>r$ è positivo. Il prodotto prende il segno risultante dalla moltiplicazione per $a$, quindi si può controllare un intero tratto dopo aver trovato la soglia.
:::

| Segno del coefficiente | $x<r$ | $x=r$ | $x>r$ |
| --- | --- | --- | --- |
| $a>0$ | $-$ | $0$ | $+$ |
| $a<0$ | $+$ | $0$ | $-$ |
::::

## Parentesi e denominatori numerici

:::esempio{#parentesi-e-frazioni titolo="Moltiplicare per un denominatore comune positivo"}
Per risolvere $\dfrac{-(2x-1)}3+\dfrac{x+5}6\ge1$ si può moltiplicare tutta la disequazione per $6$, che è positivo. I segni dei termini del primo numeratore cambiano nello sviluppo perché quel numeratore è moltiplicato per $-2$.

$$
\begin{aligned}
-2(2x-1)+(x+5)&\ge6,\\[6pt]
-4x+2+x+5&\ge6,\\[6pt]
-3x&\ge-1,\\[6pt]
x&\le\frac13.
\end{aligned}
$$

La divisione per $-3$ è il passaggio che inverte il verso. All’estremo $x=\dfrac13$ la somma iniziale vale $1$. In alternativa si possono prima combinare le frazioni, ottenendo $\dfrac{7-3x}{6}$. Il confronto con $1$ richiede un numeratore almeno pari a $6$ perché il denominatore è positivo.
:::

:::osservazione
Se un denominatore è negativo, si può spostare il segno al numeratore prima di eliminare la frazione. Per esempio $\dfrac{3-2x}{-4}<2$ equivale a $\dfrac{2x-3}{4}<2$. Moltiplicando per $4$ si ha $2x-3<8$, che dà $x<\dfrac{11}{2}$. Si può anche moltiplicare la disequazione iniziale per $-4$, ottenendo $3-2x>-8$. Si sottrae $3$ e si divide per $-2$, con una seconda inversione del verso. I due passaggi che invertono il verso si compensano. La soglia rende il termine a sinistra uguale a $2$ e il segno stretto la esclude.
:::

:::esempio{#cambio-di-variabile titolo="Tradurre un intervallo attraverso un cambio di variabile"}
Per rendere più leggibile $3<10-2x\le7$, si chiama $u$ il valore $10-2x$. Il vincolo è allora $3<u\le7$. Da $u=10-2x$ segue $x=\dfrac{10-u}{2}$. L’estremo $u=7$ dà $x=\dfrac32$ e resta incluso. L’estremo $u=3$ dà $x=\dfrac72$ e resta escluso. L’ordine si inverte perché al crescere di $u$ il numeratore $10-u$ diminuisce. La soluzione è $\left[\dfrac32,\dfrac72\right)$.

::grafico{assi=0 xmin=-0.7 xmax=8.2 ymin=-1.88 ymax=1.75 vettori="-0.25,0.88,7.9,0.88;-0.25,-0.84,7.9,-0.84" area="0.97;0.79;3;7|-0.75;-0.93;1.5;3.5" punti="3,0.88,vuoto;7,0.88,pieno;1.5,-0.84,pieno;3.5,-0.84,vuoto" etichette="0.36,1.31,u;3,1.31,3;7,1.31,7;0.36,-1.34,x;1.5,-1.34,3⁄2;3.5,-1.34,7⁄2" titolo="L’estremo chiuso di $u$ diventa l’estremo sinistro di $x$. L’estremo aperto si sposta a destra"}
:::

## Intervalli sulla retta reale

:::definizione{#intervalli titolo="Estremi inclusi, esclusi e illimitati"}
Per $a<b$, l’intervallo $(a,b)$ contiene i numeri strettamente compresi fra $a$ e $b$. In $[a,b]$ sono compresi anche gli estremi. Una parentesi quadra corrisponde a un estremo incluso, una tonda a uno escluso. In $(a,b]$ si include solo $b$.

::grafico{assi=0 xmin=-2.8 xmax=4 ymin=-0.8 ymax=0.86 area="0.075;-0.075;-1;2" vettori="-2.45,0,3.65,0" punti="-1,0,vuoto;2,0,pieno" etichette="-1,-0.3,−1;2,-0.3,2;3.55,-0.3,x" titolo="L’intervallo $(-1,2]$ include $2$. Il cerchio vuoto esclude $-1$"}

Una **semiretta** descrive un intervallo illimitato in una direzione. Il vincolo $x\le-2$ si scrive $(-\infty,-2]$. Il simbolo $-\infty$ indica che l’intervallo prosegue verso sinistra senza un primo valore. Analogamente, $+\infty$ indica che prosegue verso destra. Accanto a questi simboli si usa sempre la parentesi tonda.

::grafico{assi=0 xmin=-6.2 xmax=1.9 ymin=-0.8 ymax=0.86 area="0.075;-0.075;-5.8;-2" vettori="-5.45,0,-5.98,0;-5.5,0,1.6,0" punti="-2,0,pieno" etichette="-2,-0.3,−2;1.5,-0.3,x" titolo="La parte evidenziata include $-2$ e continua verso sinistra"}

Un solo punto si indica con le parentesi graffe, per esempio $\{2\}$. Questo insieme si ottiene quando un limite inferiore e uno superiore coincidono e sono entrambi inclusivi. Se almeno uno dei due confronti è stretto, resta l’insieme vuoto $\varnothing$.
:::

:::osservazione
Il complemento di un intervallo rispetto a $\mathbb R$ contiene i numeri lasciati fuori da quell’intervallo. Per esempio il complemento di $[-1,3)$ è $(-\infty,-1)\cup[3,+\infty)$. L’estremo $-1$ appartiene all’intervallo iniziale, quindi va escluso dal complemento. L’estremo $3$ resta fuori dall’intervallo iniziale e va incluso nel complemento. Ogni numero reale appartiene a uno solo dei due insiemi.
:::

## Condizioni simultanee e alternative

::::teorema{#sistemi titolo="Intersezione e unione degli insiemi soluzione"}
Siano $A$ e $B$ gli insiemi dei numeri che verificano due condizioni. Per verificare entrambe le condizioni si prende l’**intersezione** $A\cap B$. Per verificarne almeno una si prende l’**unione** $A\cup B$.

:::dimostrazione
Un valore che verifica le due condizioni appartiene ad $A$ e appartiene a $B$. Queste sono esattamente le richieste per appartenere ad $A\cap B$. Se è sufficiente verificare almeno una condizione, il valore deve appartenere ad almeno uno fra $A$ e $B$, cioè ad $A\cup B$. L’inclusione dei singoli estremi si determina con lo stesso criterio.
:::
::::

:::esempio{titolo="Leggere le soluzioni comuni su tre rette coordinate"}
Dalle condizioni $x\ge1$ e $x<4$ si ottiene l’intersezione $[1,+\infty)\cap(-\infty,4)=[1,4)$. Il vincolo inferiore include $1$, che rispetta anche il vincolo superiore. Il valore $4$ soddisfa il vincolo inferiore e viene escluso da quello superiore.

::grafico{assi=0 xmin=-0.9 xmax=6.7 ymin=-0.55 ymax=3.4 vettori="-0.55,2.63,6.3,2.63;-0.55,1.57,6.3,1.57;-0.55,0.51,6.3,0.51" area="2.71;2.55;1;6.05|1.65;1.49;-0.5;4|0.59;0.43;1;4" punti="1,2.63,pieno;4,1.57,vuoto;1,0.51,pieno;4,0.51,vuoto" segmenti="1,0.51,1,2.63;4,0.51,4,1.57" etichette="1,0.07,1;4,0.07,4;2.5,0.93,Intersezione" titolo="Le prime due righe mostrano i vincoli separati. La terza evidenzia il tratto in comune"}

Una doppia disuguaglianza esprime due condizioni simultanee. Da $0\le4-2x<6$ si sottrae $4$ a tutti e tre i membri e si ottiene $-4\le-2x<2$. Dividendo per $-2$ si ha $2\ge x>-1$. Riordinando dal limite inferiore al superiore si legge $-1<x\le2$. Il confine che produce $4-2x=0$ resta chiuso e quello che produce $4-2x=6$ resta aperto.
:::

:::osservazione
Se il limite inferiore è maggiore di quello superiore, nessun numero verifica entrambi. Se coincidono, si controlla direttamente quel valore. Per esempio $[-2,1]\cap[1,4)=\{1\}$, perché tutti i valori sotto $1$ sono esclusi dal secondo intervallo e quelli sopra $1$ dal primo. Se il primo intervallo diventasse $[-2,1)$, l’unico candidato sarebbe escluso. Questo controllo è necessario anche quando il resto dei due intervalli è già rappresentato sulla retta.
:::

:::esempio{titolo="Soluzioni ammesse da almeno una condizione"}
Le condizioni $x<-3$ oppure $x\ge2$ danno $(-\infty,-3)\cup[2,+\infty)$. Il valore $0$ è escluso perché nessuna condizione lo ammette. Se i due tratti si toccano, l’estremo di contatto entra nell’unione quando almeno un intervallo lo include. Per esempio $(-\infty,1)\cup[1,4) = (-\infty,4)$.

::grafico{assi=0 xmin=-6.2 xmax=5.3 ymin=-0.8 ymax=0.88 vettori="-5.42,0,-5.98,0;-5.5,0,4.95,0" area="0.075;-0.075;-5.8;-3|0.075;-0.075;2;4.72" punti="-3,0,vuoto;2,0,pieno" etichette="-3,-0.32,−3;2,-0.32,2;4.85,-0.32,x" titolo="L’unione comprende due semirette distinte. Il tratto fra $-3$ e $2$ resta escluso"}
:::

## Coefficiente nullo e parametro

:::osservazione{#casi titolo="Quando rimane un confronto fra costanti"}
Se la riduzione cancella i termini in $x$, resta un confronto numerico. Da $2x+1<2x+4$ segue $1<4$, vero per ogni $x$ del dominio. Da $3x+5\le3x+2$ segue $5\le2$, falso per ogni $x$. Se resta $0\le0$ il confronto è vero, mentre $0<0$ è falso. Il dominio iniziale determina quali valori si possono includere anche quando scompare l’incognita.
:::

:::esempio{titolo="Un coefficiente di cui si deve determinare il segno"}
Nella disequazione $a(x-2)\le0$, $x$ è l’incognita e il numero $a$ è un **parametro**, fissato per ciascuna risoluzione. Il segno di $a$ stabilisce che cosa si può fare.

- Per $a>0$, la divisione conserva il verso e si ha $x\le2$.
- Per $a<0$, la divisione inverte il verso e si ha $x\ge2$.
- Per $a=0$, resta $0\le0$, quindi ogni reale è soluzione.

Per ogni $a$, l’estremo $x=2$ dà un prodotto nullo ed è ammesso. Se il confronto fosse stretto, il ramo $a=0$ darebbe l’insieme vuoto. La divisione per $a$ è giustificata dopo aver distinto il suo segno ed escluso lo zero.
:::

:::esempio{titolo="Trovare il parametro che fa valere il vincolo per ogni reale"}
Si cerca per quali $b$ il confronto $(b-3)x\le3$ vale per ogni $x$. Per $b=3$ il primo membro vale sempre zero. Per $b\ne3$ si può scegliere $x=\dfrac4{b-3}$. Con questa scelta il primo membro vale $4$ e il confronto è falso. Un solo valore di $x$ che viola il vincolo basta a escludere il parametro. Quindi l’unico $b$ che rende il confronto vero per tutti i reali è $3$.
:::

## Confrontare due tariffe

:::esempio{#confronto-di-tariffe titolo="Costo fisso, consumo e punto di parità"}
Per una stampa di $n$ copie la tariffa A costa $5+3n$ euro e la tariffa B costa $11+2n$ euro. Il numero $n$ è un intero positivo. Per sapere quando A costa meno, si scrive $5+3n<11+2n$. Sottraendo $5+2n$ ai due membri si trova $n<6$. Le copie da una a cinque rispettano il vincolo.

::grafico{f="5+3*x;11+2*x" xmin=-0.5 xmax=9.7 ymin=3.2 ymax=34 nomi="n,C" legenda="A;B" punti="1,8,pieno;5,20,pieno;6,23,pieno;7,25,pieno" segmenti="6,3.5,6,23" titolo="Per sei copie entrambe le tariffe costano 23 euro. Prima della parità A è più economica"}

La soglia $n=6$ dà lo stesso costo, pari a $23$ euro. Per $n=5$ A costa $20$ euro e B $21$ euro. Per $n=7$ A costa $26$ euro e B $25$ euro. La quota iniziale più piccola favorisce A nei piccoli ordini. Il costo aggiuntivo per copia favorisce B man mano che aumenta il numero di copie.
:::

## Soglie e quantità intere

:::esempio{#problemi titolo="Verificare massimi e minimi nel dominio intero"}
Un pacco ammette al massimo $41\,\mathrm{kg}$. L’imballaggio pesa $4\,\mathrm{kg}$ e ogni pezzo pesa $3{,}5\,\mathrm{kg}$. Se $n$ è il numero di pezzi, si impongono $n\in\{0,1,2,\ldots\}$ e $4+3{,}5n\le41$. Il limite reale è $n\le\dfrac{74}{7}$, compreso fra $10$ e $11$. Si possono dunque caricare al massimo dieci pezzi. Dieci fanno pesare il pacco $39\,\mathrm{kg}$, mentre undici lo portano a $42{,}5\,\mathrm{kg}$.

Per un ordine si devono preparare più di $20$ matite e al massimo $36$ matite in confezioni intere da $4$. Il vincolo $20<4n\le36$ equivale a $5<n\le9$. Poiché $n$ conta confezioni, le soluzioni sono esattamente $6,7,8,9$. Il minimo è $6$, perché cinque confezioni contengono proprio $20$ matite. Il massimo è $9$, perché nove confezioni ne contengono $36$.

::grafico{assi=0 xmin=3.2 xmax=10.8 ymin=-0.95 ymax=1.44 vettori="3.5,0,10.5,0" area="0.075;-0.075;5;9" punti="5,0,vuoto;6,0,pieno;7,0,pieno;8,0,pieno;9,0,pieno" etichette="5,-0.36,5;6,-0.36,6;7,-0.36,7;8,-0.36,8;9,-0.36,9;10.38,-0.36,n" titolo="L’intervallo reale dà il tratto evidenziato. I punti pieni individuano i numeri di confezioni ammessi"}

Controllare il confine e l’intero vicino permette di verificare il massimo o il minimo. Se la soglia è già intera, il simbolo conta quanto la soglia stessa. Per esempio la condizione $n<9$ ammette al massimo $8$, mentre $n\le9$ ammette anche $9$.
:::

:::esempio{titolo="Verificare contemporaneamente un budget e una capienza"}
Per un laboratorio serve un gruppo di almeno quattro partecipanti. Il tavolo ha sei postazioni e il costo è $6$ euro fissi più $4$ per persona. Con $34$ euro si può pagare per $n$ persone solo se $6+4n\le34$, cioè $n\le7$. La capienza quindi impone il limite superiore più stretto. I tre vincoli ammettono gruppi da quattro, cinque o sei persone. Sette persone rientrerebbero nel budget perché costano $34$ euro, ma richiederebbero una postazione in più.
:::

:::esempio{titolo="Contare gli incrementi dal primo termine"}
Un’attività assegna $5$ punti alla prima tappa e $3$ punti in più a ogni tappa successiva rispetto alla precedente. Il punteggio nella tappa $n$, per $n$ intero positivo, è $5+3(n-1)$. Gli incrementi sono $n-1$ perché nella prima tappa si parte già da $5$. Per trovare in quale tappa il punteggio supera $20$ si risolve $5+3(n-1)>20$, da cui $n>6$. Nella sesta tappa si ottengono esattamente $20$ punti. Nella settima se ne ottengono $23$, quindi la settima è la prima tappa ammessa.
:::
