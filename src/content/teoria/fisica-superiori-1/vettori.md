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

## Componenti cartesiane

:::definizione{#componenti titolo="Proiezioni con segno"}
Scelti gli assi, la **componente** $u_x$ è lo spostamento con segno lungo l'asse orizzontale e $u_y$ è quello lungo l'asse verticale. Con assi positivi a destra e in alto, il vettore $(3;-2)\,\mathrm m$ va di tre metri a destra e due metri in basso. Se una componente vale zero, il vettore resta parallelo all'altro asse, purché l'altra componente sia diversa da zero. Cambiare l'orientamento di un asse può cambiare un segno, perché muta la convenzione di lettura. Lo spostamento fisico rimane lo stesso.
:::

::grafico{uguale=1 xmin=-1 xmax=5 ymin=-3.6 ymax=2 vettori="0,0,3,-2,u" segmenti="3,0,3,-2;0,-2,3,-2" punti="3,-2,pieno,B" etichette="2.95,0.35,3;-0.55,-1.9,−2" nomi="x (m),y (m)" titolo="Le componenti di u si leggono da B proiettando sugli assi"}

:::esempio{#punti-estremi titolo="Da due punti a uno spostamento"}
Se $A=(2;1)\,\mathrm m$ e $B=(5;3)\,\mathrm m$, dal punto $A$ al punto $B$ la posizione orizzontale aumenta di $5-2=3\,\mathrm m$ e quella verticale di $3-1=2\,\mathrm m$. Perciò $\overrightarrow{AB}=(3;2)\,\mathrm m$. Il punto di arrivo $(5;3)\,\mathrm m$ fornisce una posizione, mentre la coppia $(3;2)\,\mathrm m$ fornisce la variazione di posizione. Per il percorso in senso inverso si scambiano inizio e fine, perciò si cambiano entrambi i segni.
:::

::grafico{uguale=1 xmin=0 xmax=6 ymin=0 ymax=4 vettori="2,1,5,3,AB" punti="2,1,pieno,A;5,3,pieno,B" segmenti="2,1,5,1;5,1,5,3" nomi="x (m),y (m)" titolo="La variazione da A a B è di 3 m in orizzontale e 2 m in verticale"}

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

::grafico{uguale=1 xmin=-1 xmax=9 ymin=-1 ymax=10 nomi="uₓ (N),uᵧ (N)" vettori="0,0,6,8,u" segmenti="6,0,6,8;0,8,6,8" punti="6,8,pieno,P" titolo="Cateti di 6 N e 8 N danno un modulo di 10 N"}

:::esempio{#componente-mancante titolo="Dalla lunghezza a una componente"}
Con modulo $5\,\mathrm m$ e componente orizzontale $3\,\mathrm m$, il quadrato della componente verticale vale $5^2-3^2=16\,\mathrm m^2$. Quindi la sua **ampiezza** è $4\,\mathrm m$. Sono possibili la componente $+4\,\mathrm m$ e quella $-4\,\mathrm m$, perché entrambe danno lo stesso quadrato. Se la traccia indica che la freccia va verso il basso, si sceglie il segno negativo. Una componente di modulo $6\,\mathrm m$ sarebbe invece incompatibile con il modulo complessivo di cinque metri.
:::

## Vettori sulla stessa retta

:::teorema{#collineari titolo="Somme algebriche e limiti della risultante"}
Per vettori **collineari** si sceglie un verso positivo sulla loro retta e si sommano le componenti con segno. Due spostamenti di $8\,\mathrm m$ a destra e $3\,\mathrm m$ a sinistra hanno somma di componente $8-3=5\,\mathrm m$ orientata a destra. Il modulo della somma è cinque metri. La lunghezza totale del cammino è invece $8+3=11\,\mathrm m$, perché si percorrono entrambi i tratti, anche quello in verso opposto.
:::

:::osservazione{#limiti-modulo titolo="Il minimo e il massimo a moduli fissati"}
Se due frecce hanno moduli $a$ e $b$, il modulo della risultante è compreso fra $\lvert a-b\rvert$ e $a+b$. Per vedere il limite superiore si usa la costruzione punta-coda: il lato diretto del triangolo è al massimo lungo come il cammino sui due lati consecutivi. Per il limite inferiore, ciascun lato iniziale è a sua volta al massimo lungo come la risultante più l'altro lato. Il massimo si ottiene allineando le frecce con lo stesso verso; il minimo allineandole in verso opposto. Con moduli $7$ e $4\,\mathrm N$ i limiti sono $3$ e $11\,\mathrm N$.
:::

## Il vettore equilibrante

:::definizione{#equilibrante titolo="Annullare una risultante"}
L'**equilibrante** di una risultante $\vec R$ è $-\vec R$. Per ottenere somma nulla, ciascuna componente aggiunta deve annullare quella corrispondente di $\vec R$. Se $\vec R=(-4;2)\,\mathrm N$, l'equilibrante vale $(4;-2)\,\mathrm N$. Le due frecce hanno lo stesso modulo e versi opposti. Questo controllo riguarda la somma vettoriale. Nello studio di corpi estesi occorrerà considerare anche i punti di applicazione.
:::

::grafico{uguale=1 xmin=-5.4 xmax=5.4 ymin=-3.6 ymax=3.6 vettori="0,0,-4,2,R;0,0,4,-2,E" nomi="x (N),y (N)" titolo="R ed E hanno componenti opposte su entrambi gli assi"}

:::esempio{titolo="Più di due contributi"}
Sono date $\vec a=(5;-2)\,\mathrm N$ e $\vec b=(-3;4)\,\mathrm N$. Prima si trovano le componenti della risultante, $\vec R=(2;2)\,\mathrm N$. Per annullarla si aggiunge $\vec c=(-2;-2)\,\mathrm N$. Controllando la somma orizzontale si ottiene $5-3-2=0$; quella verticale vale $-2+4-2=0$. I due controlli sono distinti, perché una risultante può essere nulla lungo un asse e diversa da zero lungo l'altro.
:::
