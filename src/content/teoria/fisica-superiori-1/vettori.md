---
titolo: "Vettori"
sommario: "Componenti, somme, differenze, moduli e forze equilibranti, con costruzioni geometriche e controlli dei segni."
---

Due spostamenti della stessa lunghezza possono portare in punti diversi. Per descriverli occorrono una lunghezza e informazioni sull'orientamento, che si possono rappresentare con una freccia oppure con due componenti.

## Modulo, direzione e verso

:::definizione{#definizione titolo="Rappresentare una grandezza orientata"}
Il **modulo** di un vettore è la sua lunghezza ed è sempre non negativo. La **direzione** è l'orientamento della retta che contiene la freccia, per esempio orizzontale. Il **verso** distingue le due possibilità lungo quella retta, per esempio verso destra o verso sinistra. Due spostamenti di $4\,\mathrm m$ verso est e $4\,\mathrm m$ verso ovest hanno modulo e direzione uguali, ma versi opposti. La distanza percorsa, invece, è una grandezza scalare: in ciascuno di questi casi vale quattro metri e si descrive con il solo numero e la sua unità.
:::

:::osservazione{#traslazione titolo="Spostare una freccia parallelamente"}
Per descrivere uno spostamento contano la differenza fra posizione finale e iniziale e la scala. Due frecce della stessa lunghezza, parallele e concordi rappresentano il medesimo vettore di spostamento, anche se tracciate in punti diversi. Questo permette di usare una freccia più volte in una costruzione geometrica. Nei problemi in cui conta il punto di applicazione di una forza, si conserva separatamente l'informazione su dove essa agisce. Il vettore nullo ha modulo zero e ogni sua componente è zero. In quel caso la freccia è ridotta a un punto e non fissa una direzione o un verso.
:::

::grafico{uguale=1 xmin=-1 xmax=8 ymin=-1 ymax=5 vettori="0,0,4,0,u;3,2,7,2,u;4,4,0,4,−u" punti="0,0,pieno;3,2,pieno;4,4,pieno" nomi="x (m),y (m)" titolo="Due frecce uguali traslate e una freccia di verso opposto"}

:::esempio{titolo="Percorso chiuso e spostamento nullo"}
Su una mappa, una persona va da $A$ a $B$ camminando per $6\,\mathrm m$ verso est. Poi raggiunge $C$ camminando per $8\,\mathrm m$ verso nord. Il vettore da $A$ a $C$ ha modulo $10\,\mathrm m$, perché è l'ipotenusa di un triangolo con cateti di sei e otto metri. La distanza percorsa è invece $14\,\mathrm m$. La persona torna direttamente da $C$ ad $A$ lungo la diagonale, quindi in tutto cammina per $24\,\mathrm m$. Alla fine lo spostamento ha modulo zero perché il punto finale coincide con quello iniziale.

In un piano con ascissa a est e ordinata a nord si può usare il segmento da $A$ a $B$ come riferimento per la scala. Ciascuna unità dei due assi deve rappresentare la stessa lunghezza sul foglio se si vuole leggere il modulo con un righello. In una mappa con scale diverse, le coordinate restano significative ma la lunghezza della freccia disegnata non si converte con un solo fattore.
:::

::grafico{uguale=1 xmin=-1.4 xmax=8.2 ymin=-1.2 ymax=9.4 nomi="est (m),nord (m)" vettori="0,0,6,0,AB;6,0,6,8,BC;6,8,0,0" punti="0,0,pieno;6,0,pieno,B;6,8,pieno,C" etichette="0.38,-0.45,A;3.42,3.76,CA" titolo="Il cammino chiuso ha tre lati di 6 m, 8 m e 10 m. Punto iniziale e finale coincidono."}

## Componenti cartesiane

:::definizione{#componenti titolo="Proiezioni con segno"}
Scelti gli assi, la **componente** $u_x$ è lo spostamento con segno lungo l'asse orizzontale e $u_y$ è quello lungo l'asse verticale. Con assi positivi a destra e in alto, il vettore $(3;-2)\,\mathrm m$ va di tre metri a destra e due metri in basso. Se una componente vale zero, il vettore resta parallelo all'altro asse, purché l'altra componente sia diversa da zero. Cambiare l'orientamento di un asse può cambiare un segno, perché muta la convenzione di lettura. Lo spostamento fisico rimane lo stesso.
:::

::grafico{uguale=1 xmin=-1 xmax=5 ymin=-3.6 ymax=2 vettori="0,0,3,-2,u" segmenti="3,0,3,-2;0,-2,3,-2" punti="3,-2,pieno,B" etichette="2.95,0.35,3;-0.55,-1.9,−2" nomi="x (m),y (m)" titolo="Le componenti di u si leggono da B proiettando sugli assi"}

:::esempio{#punti-estremi titolo="Da due punti a uno spostamento"}
Se $A=(2;1)\,\mathrm m$ e $B=(5;3)\,\mathrm m$, dal punto $A$ al punto $B$ la posizione orizzontale aumenta di $5-2=3\,\mathrm m$ e quella verticale di $3-1=2\,\mathrm m$. Perciò $\overrightarrow{AB}=(3;2)\,\mathrm m$. Il punto di arrivo $(5;3)\,\mathrm m$ fornisce una posizione, mentre la coppia $(3;2)\,\mathrm m$ fornisce la variazione di posizione. Per il percorso in senso inverso si scambiano inizio e fine, perciò si cambiano entrambi i segni.
:::

::grafico{uguale=1 xmin=0 xmax=6 ymin=0 ymax=4 vettori="2,1,5,3" punti="2,1,pieno;5,3,pieno,B" etichette="1.70,1.29,A;3.50,2.28,AB" segmenti="2,1,5,1;5,1,5,3" nomi="x (m),y (m)" titolo="La variazione da A a B è di 3 m in orizzontale e 2 m in verticale"}

:::esempio{titolo="Un asse verticale orientato verso il basso"}
In una palestra, la posizione di un bersaglio passa da $A=(2;5)\,\mathrm m$ a $B=(7;3)\,\mathrm m$, con quote misurate verso l'alto. Sottraendo le coordinate si trova $\overrightarrow{AB}=(5;-2)\,\mathrm m$. Entrambe le quote sono positive, eppure la componente verticale dello spostamento è negativa perché la quota finale è minore. Una telecamera adotta gli stessi riferimenti orizzontali ma misura la coordinata verticale verso il basso a partire da uno zero fissato alla quota $6\,\mathrm m$. Le quote lette dalla telecamera sono quindi $1\,\mathrm m$ e $3\,\mathrm m$, e la sua componente verticale è $+2\,\mathrm m$.

Lo zero della scala si cancella nella differenza. Invece il ribaltamento dell'asse inverte il segno, perché una diminuzione della quota verso l'alto diventa un aumento della coordinata verso il basso. Il modulo $\sqrt{5^2+2^2}\,\mathrm m$ è lo stesso nelle due descrizioni. Scambiare inizio e fine darebbe l'opposto di entrambe le componenti anche per la telecamera. In ogni caso si legge prima la convenzione degli assi e poi si esegue la sottrazione.
:::

:::esempio{titolo="Dalle letture dei punti agli incrementi"}
Un carrello passa per $A$, $B$ e $C$ nell'ordine indicato. La tabella riporta posizioni lette su due righelli. La componente verticale del tratto da A a B si ottiene confrontando i due valori nella colonna delle ordinate, mentre la distanza da A a B richiederebbe anche l'ascissa.

| Punto | x (cm) | y (cm) |
| --- | ---: | ---: |
| A | 6 | 4 |
| B | 4 | 9 |
| C | 8 | 5 |

Da A a B si ottiene $(4-6;9-4)=(-2;5)\,\mathrm{cm}$. Da B a C il segno della componente orizzontale cambia perché la coordinata passa da quattro a otto. Il vettore vale $(8-4;5-9)=(4;-4)\,\mathrm{cm}$. Per ricavare la variazione complessiva si possono ignorare le letture intermedie e sottrarre la prima riga dall'ultima, ottenendo $(2;1)\,\mathrm{cm}$. La somma dei due spostamenti dà la stessa coppia. Il ritorno lungo $CA$ invertirebbe entrambi questi segni.
:::

## Somme, differenze e prodotti per numeri

::::teorema{#operazioni titolo="Operazioni componente per componente"}
Per $\vec u=(u_x;u_y)$ e $\vec v=(v_x;v_y)$ espressi nella stessa unità,
$$
\vec u+\vec v=(u_x+v_x;u_y+v_y),\qquad
\vec u-\vec v=(u_x-v_x;u_y-v_y).
$$

:::dimostrazione
Si disegna prima $\vec u$ e si pone la coda di $\vec v$ sulla punta della prima freccia. Lo spostamento orizzontale complessivo è quello della prima freccia seguito da quello della seconda. La stessa somma vale lungo l'asse verticale. Questa è la **regola punta-coda**. Per sottrarre $\vec v$ si aggiunge il vettore opposto $-\vec v$. Poiché l'opposto cambia il segno di entrambe le componenti, le somme diventano differenze.
:::
::::

::grafico{uguale=1 xmin=-1 xmax=5 ymin=-1 ymax=5 vettori="0,0,3,1,u;3,1,2,4,v;0,0,2,4,R" punti="3,1,pieno;2,4,pieno" nomi="x (m),y (m)" titolo="La somma di (3; 1) e (−1; 3) parte dall'origine e arriva a (2; 4)"}

:::esempio{#differenza-punte titolo="La differenza con la stessa coda"}
Si disegnano $\vec u=(3;2)\,\mathrm m$ e $\vec v=(1;4)\,\mathrm m$ con la stessa coda. Per andare dalla punta di $\vec v$ a quella di $\vec u$ occorre lo spostamento $(3-1;2-4)=(2;-2)\,\mathrm m$. Questa freccia è $\vec u-\vec v$. Per controllare il verso si aggiunge quella differenza a $\vec v$. Il percorso raggiunge la punta di $\vec u$ e ricostruisce la prima misura.
:::

::grafico{uguale=1 xmin=-1 xmax=5 ymin=-1 ymax=5 vettori="0,0,3,2,u;0,0,1,4,v;1,4,3,2,u−v" punti="3,2,pieno;1,4,pieno" nomi="x (m),y (m)" titolo="Con la coda comune, la differenza u − v va dalla punta di v alla punta di u"}

:::osservazione{#scalare titolo="Moltiplicare per uno scalare"}
Se $k$ è un numero, $k\vec u=(ku_x;ku_y)$. Il modulo viene moltiplicato per $\lvert k\rvert$. Con $k>0$ il verso resta concorde con quello di $\vec u$; con $k<0$ diventa opposto. Per $\vec u=(3;-1)\,\mathrm m$, il prodotto $-2\vec u=(-6;2)\,\mathrm m$ inverte entrambe le componenti e raddoppia il modulo. Con $k=0$ si ottiene il vettore nullo. In questa operazione lo scalare è adimensionale, quindi le componenti mantengono la loro unità.
:::

::grafico{uguale=1 xmin=-7 xmax=4 ymin=-2.5 ymax=3.5 vettori="0,0,3,-1,u;0,0,-6,2,−2u" punti="3,-1,pieno;-6,2,pieno" nomi="x (m),y (m)" titolo="Il fattore −2 inverte il verso e raddoppia la lunghezza della freccia"}

:::esempio{titolo="Disegnare entrambe le somme e una differenza"}
Si prendono $\vec u=(4;1)\,\mathrm m$ e $\vec v=(-1;2)\,\mathrm m$. Con la costruzione punta-coda, applicare $\vec u$ prima di $\vec v$ conduce a $(4-1;1+2)\,\mathrm m=(3;3)\,\mathrm m$. Applicare le frecce nell'ordine opposto conduce allo stesso punto, passando prima da $(-1;2)\,\mathrm m$. Le due costruzioni sono i lati di un parallelogramma. I punti intermedi cambiano con l'ordine. La diagonale tra inizio e fine rimane uguale e rappresenta la somma.

Se vogliamo l'incremento che porta dalla punta di $\vec v$ alla punta di $\vec u$, occorre invece $(4-(-1);1-2)\,\mathrm m=(5;-1)\,\mathrm m$. Percorrere la diagonale della somma partirebbe dalla coda e risponderebbe a un'altra domanda. Il controllo è $\vec v+(\vec u-\vec v)=\vec u$. L'ascissa risultante è $-1+5=4$, l'ordinata $2-1=1$. Per sommare misure in centimetri e in metri, si compie la stessa costruzione soltanto dopo aver espresso entrambe nella stessa unità.
:::

::grafico{uguale=1 xmin=-2.2 xmax=5.4 ymin=-1 ymax=5.4 vettori="0,0,4,1,u;0,0,-1,2,v;4,1,3,3,v;-1,2,3,3,u;0,0,3,3" punti="4,1,pieno;-1,2,pieno;3,3,pieno" etichette="1.51,1.20,u+v" nomi="x (m),y (m)" titolo="I cammini hanno punti intermedi diversi e la stessa risultante (3; 3)."}

:::esempio{titolo="Compensare un contributo nella stessa unità"}
Uno spostamento $\vec u=(0{,}60;-0{,}20)\,\mathrm m$ è seguito da $\vec v=(-20;10)\,\mathrm{cm}$. Per trovare le coordinate finali rispetto alla coda iniziale, si converte la seconda coppia in metri. Con $\vec v=(-0{,}20;0{,}10)\,\mathrm m$ si ottiene $\vec u+\vec v=(0{,}40;-0{,}10)\,\mathrm m$. Il contributo orizzontale resta positivo perché i venti centimetri verso sinistra compensano soltanto una parte dei sessanta percorsi verso destra.

Se una terza freccia deve riportare all'altezza iniziale conservando l'ascissa già raggiunta, deve aggiungere $0{,}10\,\mathrm m$ in verticale e zero in orizzontale. Per tornare invece esattamente al punto di partenza, deve avere anche componente orizzontale $-0{,}40\,\mathrm m$. Sono due richieste distinte, quindi danno frecce diverse anche se condividono lo stesso contributo verticale.
:::

## Moduli e Pitagora

::::teorema{#modulo titolo="Componenti perpendicolari"}
Con assi perpendicolari, il modulo di $\vec u$ vale
$$
\lVert\vec u\rVert=\sqrt{u_x^2+u_y^2}.
$$

:::dimostrazione
Le lunghezze dei due cateti sono $\lvert u_x\rvert$ e $\lvert u_y\rvert$. La freccia tra origine e punta forma l'ipotenusa. Il teorema di Pitagora dà il quadrato del modulo sommando i quadrati dei cateti. Si prende la radice non negativa perché un modulo è una lunghezza. Se uno dei due cateti è zero, la formula restituisce il valore assoluto della componente non nulla.
:::
::::

::grafico{uguale=1 xmin=-1 xmax=9 ymin=-2 ymax=10 nomi="uₓ (N),uᵧ (N)" vettori="0,0,6,8" etichette="3.17,3.75,u" segmenti="6,0,6,8;0,8,6,8" punti="6,8,pieno,P" titolo="Cateti di 6 N e 8 N danno un modulo di 10 N"}

:::esempio{#componente-mancante titolo="Dalla lunghezza a una componente"}
Con modulo $5\,\mathrm m$ e componente orizzontale $3\,\mathrm m$, il quadrato della componente verticale vale $5^2-3^2=16\,\mathrm m^2$. Quindi la sua **ampiezza** è $4\,\mathrm m$. Sono possibili la componente $+4\,\mathrm m$ e quella $-4\,\mathrm m$, perché entrambe danno lo stesso quadrato. Se la traccia indica che la freccia va verso il basso, si sceglie il segno negativo. Una componente di modulo $6\,\mathrm m$ sarebbe invece incompatibile con il modulo complessivo di cinque metri.
:::

:::esempio{titolo="Due frecce possibili e una misura che le distingue"}
Un rilevatore indica per $\vec u$ componente $u_x=-5\,\mathrm m$ e modulo $13\,\mathrm m$. Dal teorema di Pitagora si ricava $u_y^2=13^2-5^2=144\,\mathrm{m^2}$. I punti $(-5;12)$ e $(-5;-12)$ soddisfano entrambi i dati disponibili. Sul grafico sono le intersezioni tra la retta di ascissa $-5$ e la circonferenza di raggio $13$ centrata nell'origine. Se una seconda fotografia mostra che la punta è sopra la coda, allora $u_y=+12\,\mathrm m$. L'informazione sceglie una delle due intersezioni senza modificare la misura del modulo.

Se fosse stato assegnato un modulo di $5\,\mathrm m$ con la stessa componente orizzontale, le due possibilità coinciderebbero in $(-5;0)$. La freccia sarebbe tutta orizzontale. Con un modulo minore di $5\,\mathrm m$ non si troverebbe alcun punto perché il valore assoluto di ogni componente è al più il modulo. Questi controlli si possono fare prima di calcolare una radice.
:::

::grafico{uguale=1 xmin=-15 xmax=15 ymin=-15 ymax=15 nomi="x (m),y (m)" curve="13*cos(t),13*sin(t),0,6.283185307" vettori="0,0,-5,12,u₁;0,0,-5,-12,u₂" segmenti="-5,-13,-5,13" punti="-5,12,pieno;-5,-12,pieno" titolo="Entrambe le frecce hanno componente orizzontale −5 m e modulo 13 m."}

## Vettori sulla stessa retta

:::teorema{#collineari titolo="Somme algebriche e limiti della risultante"}
Per vettori **collineari** si sceglie un verso positivo sulla loro retta e si sommano le componenti con segno. Due spostamenti di $8\,\mathrm m$ a destra e $3\,\mathrm m$ a sinistra hanno somma di componente $8-3=5\,\mathrm m$ orientata a destra. Il modulo della somma è cinque metri. La lunghezza totale del cammino è invece $8+3=11\,\mathrm m$, perché si percorrono entrambi i tratti, anche quello in verso opposto.
:::

:::osservazione{#limiti-modulo titolo="Il minimo e il massimo a moduli fissati"}
Se due frecce hanno moduli $a$ e $b$, il modulo della risultante è compreso fra $\lvert a-b\rvert$ e $a+b$. Per vedere il limite superiore si usa la costruzione punta-coda: il lato diretto del triangolo è al massimo lungo come il cammino sui due lati consecutivi. Per il limite inferiore, ciascun lato iniziale è a sua volta al massimo lungo come la risultante più l'altro lato. Il massimo si ottiene allineando le frecce con lo stesso verso; il minimo allineandole in verso opposto. Con moduli $7$ e $4\,\mathrm N$ i limiti sono $3$ e $11\,\mathrm N$.
:::

:::esempio{titolo="Verificare due misure candidate senza conoscere l'angolo"}
Due forze applicate allo stesso punto hanno moduli $10\,\mathrm N$ e $6\,\mathrm N$. Se sono concordi, la risultante ha modulo $16\,\mathrm N$. Se sono opposte, il modulo è $4\,\mathrm N$. Una misura di $17\,\mathrm N$ sarebbe incompatibile con i dati, perché supera la somma dei moduli. Una misura di $3\,\mathrm N$ sarebbe anch'essa incompatibile. Se una freccia ha modulo dieci, infatti, nemmeno una freccia di sei in direzione opposta riesce a ridurla sotto quattro.

Se le forze sono perpendicolari, il modulo vale $\sqrt{10^2+6^2}\,\mathrm N=\sqrt{136}\,\mathrm N$, fra gli estremi trovati. Per scegliere se la risultante punta verso un quadrante preciso servono le direzioni delle due forze. Dal solo modulo non si può sapere quale componente prevalga. Per descrivere uno spostamento lungo una retta, invece, un segno fissato per ciascuna freccia determina tutta l'informazione sul verso.
:::

## Il vettore equilibrante

:::definizione{#equilibrante titolo="Annullare una risultante"}
L'**equilibrante** di una risultante $\vec R$ è $-\vec R$. Per ottenere somma nulla, ciascuna componente aggiunta deve annullare quella corrispondente di $\vec R$. Se $\vec R=(-4;2)\,\mathrm N$, l'equilibrante vale $(4;-2)\,\mathrm N$. Le due frecce hanno lo stesso modulo e versi opposti. Questo controllo riguarda la somma vettoriale. Nello studio di corpi estesi occorrerà considerare anche i punti di applicazione.
:::

::grafico{uguale=1 xmin=-5.4 xmax=5.4 ymin=-3.6 ymax=3.6 vettori="0,0,-4,2,R;0,0,4,-2,E" nomi="x (N),y (N)" titolo="R ed E hanno componenti opposte su entrambi gli assi"}

:::esempio{titolo="Più di due contributi"}
Sono date $\vec a=(5;-2)\,\mathrm N$ e $\vec b=(-3;4)\,\mathrm N$. Prima si trovano le componenti della risultante, $\vec R=(2;2)\,\mathrm N$. Per annullarla si aggiunge $\vec c=(-2;-2)\,\mathrm N$. Controllando la somma orizzontale si ottiene $5-3-2=0$; quella verticale vale $-2+4-2=0$. I due controlli sono distinti, perché una risultante può essere nulla lungo un asse e diversa da zero lungo l'altro.
:::

:::esempio{titolo="Due vincoli orientati lungo assi diversi"}
Un anello viene tirato nello stesso punto da una forza $\vec R=(8;-6)\,\mathrm N$. Due corde aggiuntive possono tirare rispettivamente verso sinistra e verso l'alto. La prima produce una forza di componenti $(-T_1;0)$, la seconda una forza di componenti $(0;T_2)$, con $T_1,T_2\geq0$. Per l'equilibrio occorre
$$
8-T_1=0,\qquad -6+T_2=0
$$
quando le forze sono espresse in newton. Si ottiene $T_1=8\,\mathrm N$ e $T_2=6\,\mathrm N$. Le corde esercitano insieme la forza $(-8;6)\,\mathrm N$. Il suo modulo è $10\,\mathrm N$ e si potrebbe ottenere con una sola corda tirata lungo la direzione di quell'equilibrante.

Se entrambe le corde potessero tirare soltanto in orizzontale, nessuna scelta di tensioni annullerebbe la componente verticale $-6\,\mathrm N$. Prima del calcolo si controlla quindi quali componenti ciascuna corda può fornire. Quando il calcolo richiede un valore negativo per un cavo che può solo tirare nella direzione data, il vincolo ipotizzato non può mantenere l'equilibrio.
:::

::grafico{uguale=1 xmin=-11 xmax=10.3 ymin=-8.4 ymax=8.2 nomi="Fₓ (N),Fᵧ (N)" vettori="0,0,8,-6,R;0,0,-8,0,T₁;0,0,0,6,T₂;0,0,-8,6,E" segmenti="-8,0,-8,6;-8,6,0,6" titolo="Le due corde forniscono −8 N lungo x e 6 N lungo y. La diagonale E è l'equilibrante."}
