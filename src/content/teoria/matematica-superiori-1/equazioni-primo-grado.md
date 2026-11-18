---
titolo: "Equazioni di primo grado"
sommario: "Principi di equivalenza, forma normale, dominio e scelta dell’incognita nei problemi."
---

## Incognita, dominio e principi di equivalenza

:::definizione{titolo="Equazione e insieme delle soluzioni"}
Un’equazione chiede per quali valori dell’incognita $x$ le espressioni a sinistra e a destra del segno di uguaglianza hanno lo stesso valore. Sono i due **membri**. Si stabilisce prima il dominio $D$, cioè l’insieme dei valori nei quali si cerca una soluzione e per i quali i due membri sono definiti. Per esempio, con $D=\mathbb R$ il valore $\dfrac52$ risolve $2x=5$. Se si richiedono solo soluzioni intere, la stessa equazione non ne ha.
:::

::::teorema{#equivalenza titolo="Trasformazioni reversibili"}
Due equazioni sono **equivalenti** se hanno lo stesso insieme di soluzioni. In un dominio fissato, si possono aggiungere a entrambi i membri la stessa espressione, purché sia definita in quel dominio, oppure moltiplicare entrambi per uno stesso numero diverso da zero.
:::dimostrazione
Per ogni $x\in D$, aggiungere $H(x)$ a entrambi i membri conserva l’uguaglianza. Il passaggio inverso consiste nel sottrarre $H(x)$. Analogamente, moltiplicare entrambi i membri per $c\ne0$ conserva l’uguaglianza e si torna indietro dividendo per $c$. Ciascuna trasformazione vale nei due versi, quindi conserva anche i valori per i quali i membri sono diversi.
:::
::::

:::esempio{titolo="Lo stesso cambiamento sui due piatti"}
Se due scatole uguali e tre unità pesano in tutto undici unità, il peso di una scatola soddisfa $2x+3=11$. Si possono rimuovere tre unità da ciascun piatto della figura. Rimangono due scatole da un lato e otto unità dall’altro. Dividendo entrambi i pesi per due si trova $x=4$, e infatti $2\cdot4+3=11$. Sottraendo tre unità da un solo piatto si perderebbe l’equilibrio.

::grafico{xmin=-5.2 xmax=5.2 ymin=-0.45 ymax=3.75 assi=0 uguale=1 poligoni="0,1.48 -0.75,0 0.75,0;-4.2,1.28 -1.1,1.28 -1.28,1.04 -4.02,1.04;1.1,1.28 4.2,1.28 4.02,1.04 1.28,1.04;-3.92,1.28 -2.37,1.28 -2.37,2.01 -3.92,2.01;-2.16,1.28 -1.42,1.28 -1.42,1.82 -2.16,1.82;2.04,1.28 3.33,1.28 3.33,2.15 2.04,2.15" linee="-2.65,2.85 2.65,2.85;-2.65,2.85 -4.2,1.28;-2.65,2.85 -1.1,1.28;2.65,2.85 1.1,1.28;2.65,2.85 4.2,1.28;0,1.48 0,2.85" etichette="-3.35,1.54,2x;-1.98,1.46,3;2.48,1.57,11" titolo="La bilancia rappresenta l’equazione 2x + 3 = 11"}
:::

:::attenzione{titolo="Un passaggio che perde soluzioni"}
In $x(x-2)=0$ si può dividere per $x$ solo quando $x\ne0$. Resterebbe $x-2=0$, che dà $x=2$. L’equazione iniziale ha anche la soluzione $x=0$. Per recuperarla si esamina il caso escluso prima della divisione. Analogamente, moltiplicare un’equazione per zero produce $0=0$ qualunque fossero i suoi membri e non permette di tornare indietro.
:::

:::osservazione{titolo="Il dominio fa parte dell’equazione"}
Si consideri $x=0$ e si provi ad aggiungere $\dfrac1x$ a entrambi i membri. La nuova uguaglianza è definita solo per $x\ne0$: proprio il valore che prima risolveva l’equazione ora è escluso. Con un’espressione definita in tutto il dominio, come $x-1$, il problema non si presenta. Si otterrebbe $2x-1=x-1$ e sottrarre $x-1$ riporterebbe a $x=0$.
:::

## Forma normale e lettura grafica

::::teorema{#lineari titolo="Riduzione alla forma ax = b"}
Un’equazione con membri $\alpha x+\beta$ e $\gamma x+\delta$ si riduce ad $ax=b$, dove $a=\alpha-\gamma$ e $b=\delta-\beta$. Se $a\ne0$, l’unico candidato è $x=\dfrac ba$. È soluzione se appartiene al dominio.
:::dimostrazione
Si sottraggono $\gamma x$ e $\beta$ da entrambi i membri. Rimane $(\alpha-\gamma)x=\delta-\beta$. Quando $a\ne0$, la divisione per $a$ è ammessa e produce una sola uguaglianza $x=\dfrac ba$. Tutti i passaggi sono equivalenti. La formula copre anche $b=0$, che dà $x=0$ se il coefficiente è diverso da zero.
:::
::::

:::esempio{titolo="La stessa ordinata all’incrocio delle rette"}
Si consideri $3x-2=x+4$. Dopo aver sottratto $x$ e aggiunto $2$ a entrambi i membri resta $2x=6$, da cui $x=3$. Verificando nel problema di partenza si trova $3\cdot3-2=7$ e $3+4=7$. I grafici di $y=3x-2$ e $y=x+4$ si incontrano in $(3,7)$. L’ascissa è la soluzione, mentre l’ordinata è il valore comune dei due membri.

::grafico{f="3*x-2;x+4" xmin=-1 xmax=6 ymin=-4 ymax=15 punti="3,7,pieno,P" segmenti="3,0,3,7;0,7,3,7" titolo="In P l’ascissa è la soluzione e l’ordinata è il valore comune"}
:::

## Parentesi e segni

:::esempio{#parentesi titolo="Sviluppare il membro con coefficiente negativo"}
Per risolvere $-3(2x-5)+4=2(x+1)+1$, il fattore $-3$ si distribuisce su $2x$ e su $-5$. Il prodotto con $-5$ è positivo. Nel membro destro si combina il $2$ dello sviluppo con il termine fisso $1$.

$$
\begin{aligned}
-3(2x-5)+4&=2(x+1)+1\\[6pt]
-6x+19&=2x+3\\[6pt]
16&=8x\\[6pt]
x&=2.
\end{aligned}
$$

Nella terza riga sono stati aggiunti $6x$ e sottratti $3$ in entrambi i membri. Nella sostituzione iniziale, la parentesi sinistra vale $-1$ e il membro vale $-3\cdot(-1)+4=7$. A destra si trova $2\cdot3+1=7$. Prima dell’incrocio, la retta del membro sinistro è più in alto, perché la sua pendenza è negativa e quella dell’altra retta è positiva.

::grafico{f="-6*x+19;2*x+3" xmin=-0.2 xmax=4.2 ymin=-6 ymax=20 punti="2,7,pieno" titolo="I membri coincidono a x = 2 e cambiano ordine attraversando quel punto"}
:::

:::osservazione{titolo="Lasciare intera una parentesi"}
In $4(x-3)=2(x-3)+10$ conviene riconoscere il gruppo comune $x-3$. Sottraendo $2(x-3)$ da entrambi i membri rimane $2(x-3)=10$, che dà $x-3=5$ e $x=8$. Sviluppare entrambe le parentesi conduce allo stesso risultato. La prima via evita di dover controllare due segni negativi nello sviluppo.
:::

:::esempio{titolo="Sottrarre l’intero valore di un gruppo"}
Per risolvere $11-[2(x+1)-3(x-2)]=17$ si può prima chiamare $G$ il valore nel gruppo. Da $11-G=17$ segue $G=-6$. Sviluppando il gruppo si ha $G=2x+2-3x+6=8-x$, quindi $8-x=-6$ e $x=14$. Nella verifica, $2(x+1)$ vale $30$ e $3(x-2)$ vale $36$. Il gruppo è negativo e sottrarlo fa aumentare il valore iniziale $11$ fino a $17$. Scrivere prima $G=-6$ permette di prevedere questo segno.
:::

## Denominatori e condizioni di esistenza

::::teorema{#frazioni titolo="Eliminazione dei denominatori"}
Si può moltiplicare entrambi i membri per un multiplo comune dei denominatori quando esso è definito e diverso da zero per ogni $x$ del dominio iniziale. Così si ottiene un’equazione equivalente nello stesso dominio.
:::dimostrazione
Denotato il multiplo con $M(x)$, per ogni valore ammesso il prodotto per $M(x)$ è invertibile mediante la divisione per $M(x)$. Per i denominatori numerici basta scegliere un multiplo comune positivo. Per quelli letterali si escludono prima i valori che li annullano e si conserva quell’esclusione anche se dopo la moltiplicazione le frazioni scompaiono.
:::
::::

:::esempio{titolo="Moltiplicare tutti i termini"}
In $\dfrac{x-1}{4}-\dfrac{x+2}{6}=1$ il minimo comune multiplo è $12$. Il fattore $12$ deve moltiplicare anche il termine $1$ del secondo membro.

$$
\begin{aligned}
3(x-1)-2(x+2)&=12\\[6pt]
3x-3-2x-4&=12\\[6pt]
x&=19.
\end{aligned}
$$

Controllando l’equazione iniziale si trova $\dfrac{18}{4}-\dfrac{21}{6}=\dfrac92-\dfrac72=1$. Il segno meno davanti alla seconda frazione si è applicato a entrambi i termini di $2(x+2)$.
:::

:::esempio{titolo="Candidato ammesso e valore escluso"}
In $\dfrac{x-3}{x+1}=\dfrac13$ si esclude subito $x=-1$. Moltiplicando per $3(x+1)$ rimane $3x-9=x+1$, quindi $2x=10$ e $x=5$. Il candidato appartiene al dominio e la sostituzione restituisce $\dfrac{5-3}{5+1}=\dfrac13$.

::grafico{xmin=-3 xmax=7 ymin=-0.7 ymax=0.75 uguale=1 assi=0 vettori="-2.75,0,6.61,0" punti="-1,0,vuoto;5,0,pieno" etichette="-1.15,-0.34,−1;4.88,-0.34,5;6.7,0.13,x" titolo="Il cerchio vuoto marca il valore escluso, il punto pieno la soluzione"}
:::

:::attenzione{titolo="La semplificazione conserva il dominio iniziale"}
In $\dfrac{x-3}{x-3}=0$ il dominio esclude $x=3$. La frazione vale $1$ per ogni $x$ ammesso, quindi l’equazione è impossibile. Moltiplicando per $x-3$ nella stessa equazione si trova il candidato $x=3$, escluso dal dominio. La figura mostra il membro sinistro con un punto mancante e il membro destro sulla retta $y=0$.

::grafico{f="1;0" xmin=-1 xmax=6 ymin=-0.75 ymax=1.85 punti="3,1,vuoto" titolo="Il membro sinistro vale 1 fuori da x = 3 e non raggiunge mai quota zero"}
:::

:::esempio{titolo="I prodotti incrociati in una proporzione"}
In $\dfrac{x}{x+2}=\dfrac34$ il denominatore variabile impone $x\ne-2$. Moltiplicare i due membri per $4(x+2)$ produce $4x=3(x+2)$. Il passaggio si può invertire nel dominio ammesso, perciò $x=6$ è l’unico candidato. Il controllo $\dfrac6{6+2}=\dfrac68=\dfrac34$ verifica sia la definizione sia l’uguaglianza. L’espressione «prodotti incrociati» descrive il risultato di quella moltiplicazione. Il passaggio diventa giustificato dopo aver escluso gli zeri dei denominatori.
:::

## Equazione determinata, impossibile e identità

::::teorema{#classificazione titolo="I tre esiti della riduzione"}
Dopo trasformazioni equivalenti nel dominio $D$, la forma $ax=b$ ha al massimo una soluzione se $a\ne0$. Se $a=0$ e $b\ne0$ la soluzione non esiste. Se $a=b=0$, ogni elemento di $D$ è soluzione e si ha un’identità in $D$.
:::dimostrazione
Nel primo caso rimane il solo candidato $\dfrac ba$, che è soluzione se appartiene a $D$. Quando $a=0$ il prodotto a sinistra vale zero per ogni $x$. L’uguaglianza è quindi sempre falsa se $b\ne0$, sempre vera se $b=0$. L’equivalenza riporta questi esiti all’equazione iniziale.
:::
::::

:::esempio{titolo="Rette parallele oppure coincidenti"}
In $2(x+1)=2x+3$ i due membri hanno coefficiente $2$ ma termini noti diversi. Rimane $2=3$, e le rette corrispondenti restano separate da una distanza verticale di un’unità. In $2(x+1)=2x+2$, invece, il secondo membro coincide con lo sviluppo del primo. Le rette sono sovrapposte: per ogni ascissa i due membri hanno la stessa ordinata.

::grafico{f="2*x+2;2*x+3" xmin=-3.2 xmax=3 ymin=-4.5 ymax=8.8 punti="0,2,pieno;0,3,pieno" titolo="I membri di un’equazione impossibile descrivono due rette parallele"}

::grafico{f="2*x+2" xmin=-3.2 xmax=3 ymin=-4.5 ymax=8.8 punti="-1,0,pieno;0,2,pieno;1,4,pieno" titolo="Per un’identità, un’unica retta rappresenta entrambi i membri"}
:::

:::osservazione{titolo="Due soluzioni distinte per membri lineari"}
Se un’uguaglianza fra due membri lineari vale per due $x$ diversi, la loro differenza è della forma $ax-b$ e si annulla in due punti. Il caso $a\ne0$ ammetterebbe un solo zero. Quindi $a=0$, e poiché esiste almeno una soluzione deve valere anche $b=0$. L’uguaglianza è un’identità nel dominio. L’ipotesi sui membri è essenziale: $x^2=x$ vale per $x=0$ e $x=1$, ma in $x=2$ si ottiene $4\ne2$.
:::

## Equazioni con un parametro

:::esempio{#parametri titolo="Studiare prima il valore che annulla il coefficiente"}
Nel problema $mx+4=2x+1$, l’incognita è $x$ e $m$ è un numero fissato di cui si vuole studiare l’effetto. La forma ridotta è $(m-2)x=-3$.

- Per $m=2$ si ottiene $0x=-3$, senza soluzioni.
- Per $m\ne2$ l’unica soluzione è $x=\dfrac{-3}{m-2}$.

Per esempio, se $m=1$, il coefficiente è $-1$ e si trova $x=3$. I membri iniziali valgono $7$. Dividere subito per $m-2$ eliminerebbe la possibilità di classificare il caso $m=2$.
:::

:::esempio{titolo="Un caso particolare con tutte le soluzioni"}
Nell’equazione $(m-2)x=m-2$, sia il coefficiente sia il termine fisso si annullano a $m=2$. Per quel valore si ha $0x=0$ e ogni reale risolve l’equazione. Per $m\ne2$ si può dividere per $m-2$ e resta $x=1$. Sostituire $1$ restituisce $m-2$ in entrambi i membri per ogni $m$, ma l’unicità vale solo per $m\ne2$.
:::

:::esempio{titolo="Scegliere il parametro che produce una soluzione assegnata"}
Si cerchi $m$ affinché $x=2$ risolva $(m+1)x=3m-1$. Sostituendo il valore assegnato, l’equazione da risolvere diventa $2m+2=3m-1$, che dà $m=3$. Con quel parametro, l’equazione iniziale è $4x=8$ e la soluzione richiesta è effettivamente l’unica. Per il parametro $m=-1$ si avrebbe $0x=-4$, senza soluzioni. Conviene dichiarare quale lettera è da trovare a ogni passaggio: nella prima sostituzione il valore noto è $x$, nell’ultima verifica è $m$.
:::

## Modelli e verifica delle condizioni del problema

:::esempio{#problemi titolo="Una soluzione algebrica deve essere un valore possibile"}
Un laboratorio richiede $8$ euro di iscrizione e $3$ euro per ogni attività. Se $n$ è il numero di attività, il costo è $8+3n$ euro e il dominio del problema è quello degli interi non negativi. Con un totale di $26$ euro si ottiene $3n=18$ e quindi $n=6$. Il controllo è $8+3\cdot6=26$.

Con un totale di $25$ euro la stessa formula darebbe $n=\dfrac{17}{3}$. Questo valore è fra $5$ e $6$, mentre si possono acquistare solo attività intere. Cinque attività costano $23$ euro e sei ne costano $26$: il totale di $25$ euro non è ottenibile.

::grafico{xmin=3.25 xmax=7.55 ymin=17.2 ymax=32 assi=0 linee="3.65,18.25 7.3,18.25;3.65,18.25 3.65,31.25;3.65,18.95 7.25,29.75;4,18.12 4,18.38;5,18.12 5,18.38;6,18.12 6,18.38;7,18.12 7,18.38" segmenti="3.65,25,7.25,25" punti="4,20,pieno;5,23,pieno;6,26,pieno;7,29,pieno;5.666666667,25,vuoto" etichette="3.32,24.91,25;3.52,31.36,C;7.36,18.3,n;3.94,17.62,4;4.94,17.62,5;5.94,17.62,6;6.94,17.62,7" titolo="La retta del modello incontra quota 25 tra due conteggi ammessi"}
:::

:::esempio{titolo="Numeri consecutivi e parità"}
Se $n$ è il minore di due interi consecutivi, l’altro è $n+1$. Richiedendo somma $19$ si ricava $2n+1=19$, quindi $n=9$. I numeri sono $9$ e $10$. Una somma di $20$ darebbe invece $n=\dfrac{19}{2}$, non intero. Più in generale $2n+1$ è sempre dispari per $n$ intero. La richiesta di una somma pari si può quindi escludere anche prima di risolvere.
:::

:::esempio{titolo="Verificare quando un modello è valido"}
Due recipienti contengono inizialmente $3$ e $15$ litri. Il primo riceve $2$ litri al minuto e il secondo ne perde $1$ al minuto. Finché i due flussi restano attivi, dopo $t$ minuti i volumi sono $3+2t$ e $15-t$. L’uguaglianza dà $3t=12$, quindi $t=4$ e i due volumi sono $11$ litri. Se il primo recipiente ha capacità $10$ litri, il suo flusso deve fermarsi già a $t=\dfrac72$. In tal caso $t=4$ non appartiene all’intervallo in cui valgono entrambe le espressioni.
:::

## Formule inverse

:::esempio{#formule titolo="Ricavare un lato dal perimetro"}
Il perimetro $P$ di un rettangolo con base $b$ e altezza $h$ soddisfa $P=2b+2h$. Se sono noti $P$ e $b$, si sottrae $2b$ da entrambi i membri e si divide per $2$.

$$
2h=P-2b,\qquad h=\frac P2-b.
$$

Con $P=30\,\mathrm{cm}$ e $b=6\,\mathrm{cm}$ si trova $h=9\,\mathrm{cm}$. Il perimetro calcolato con i due lati è $2(6+9)=30$ centimetri. Il modello richiede $b>0$ e $P>2b$, perché l’altezza deve essere positiva. Per $P=2b$ la formula darebbe altezza zero, che non descrive un rettangolo.

::grafico{xmin=-1.5 xmax=7.45 ymin=-1.03 ymax=10.28 uguale=1 assi=0 poligoni="0,0 6,0 6,9 0,9" etichette="2.8,-0.58,b;-0.75,4.4,h;2.29,9.45,6 cm;6.3,4.4,9 cm" titolo="Il semiperimetro somma la base e l’altezza"}
:::

:::esempio{titolo="Ricavare il tempo da una misura"}
Una vasca contiene $V_0$ litri quando si apre un rubinetto. Mentre la portata costante $q$ rimane attiva, il volume al tempo $t$ è $V=V_0+qt$, con $t$ in minuti e $q$ in litri al minuto. La differenza $V-V_0$ misura l’acqua aggiunta. Se $q>0$, il tempo necessario per raggiungere il volume $V$ è

$$
t=\frac{V-V_0}{q}.
$$

Per $V_0=5$, $q=3$ e $V=17$, si ottiene $t=4$ minuti e la verifica è $5+3\cdot4=17$. Dividere il solo volume finale per la portata darebbe invece il tempo per riempire la vasca a partire da zero. Se $q=0$, il volume resta $V_0$: un volume diverso è irraggiungibile, mentre osservare proprio $V_0$ non permette di ricavare un tempo unico.
:::

:::osservazione{titolo="Proporzione per le variazioni"}
Con $V=V_0+qt$ il rapporto $\dfrac Vt$ dipende da $t$ se $V_0\ne0$. Si usa invece la differenza tra due misure $V_1$ e $V_2$ prese ai tempi $t_1$ e $t_2$. Sottraendo le due formule si ottiene $V_2-V_1=q(t_2-t_1)$. Se i tempi sono distinti, il quoziente tra differenza di volume e differenza di tempo permette di ricavare $q$. Per esempio, aumentare di $9$ litri in $3$ minuti indica $3$ litri al minuto, qualunque fosse il volume iniziale. Una volta trovata la portata, una delle misure consente di ricavare $V_0=V_1-qt_1$.
:::
