---
titolo: "Vettori, componenti e prodotti"
sommario: "Rappresentare i vettori, calcolare componenti e risultanti e usare i prodotti scalare e vettoriale nei problemi di Fisica."
---

## Grandezze scalari e vettoriali

:::definizione{#scalari titolo="Valore scalare e vettore"}
Una **grandezza scalare** è descritta da un valore e, quando serve, da un’unità di misura. La massa di un corpo, per esempio, si può indicare con $2\,\mathrm{kg}$. Una **grandezza vettoriale** richiede anche una direzione e un verso. Uno spostamento di $2\,\mathrm{m}$ verso est è diverso da uno spostamento di $2\,\mathrm{m}$ verso ovest, pur avendo lo stesso modulo. La direzione è quella della retta est–ovest. Il verso distingue le due possibili orientazioni su quella retta.

Un vettore si rappresenta con un segmento orientato. La coda indica il punto di partenza della freccia e la punta indica il verso. Il **modulo** è la lunghezza della freccia nella scala scelta. Due frecce con lo stesso modulo, la stessa direzione e lo stesso verso rappresentano lo stesso vettore libero, anche se le code sono in punti diversi. Per una forza applicata a un corpo rigido, invece, il punto di applicazione entra nel calcolo dell’effetto di rotazione.
:::

:::esempio{titolo="Spostamento e distanza percorsa"}
Una persona si sposta da $P$ a $Q$ per $3\,\mathrm{m}$ verso est e da $Q$ a $R$ per $4\,\mathrm{m}$ verso nord. Gli assi positivi $x$ e $y$ sono orientati verso est e nord. La distanza percorsa vale $3\,\mathrm{m}+4\,\mathrm{m}=7\,\mathrm{m}$. Lo spostamento complessivo è invece rappresentato dalla freccia che va da $P$ a $R$. I suoi due spostamenti lungo gli assi sono $3$ e $4\,\mathrm{m}$, quindi il suo modulo è
$$
|\vec s|=\sqrt{(3\,\mathrm{m})^2+(4\,\mathrm{m})^2}
=5\,\mathrm{m}.
$$
La distanza percorsa dipende dal cammino. Lo spostamento dipende solo dalle posizioni iniziale e finale. Chi raggiunge $R$ in linea retta a partire da $P$ ha lo stesso spostamento complessivo e percorre $5\,\mathrm{m}$.

::grafico{uguale=1 xmin=-1.1 xmax=4.8 ymin=-1.3 ymax=5.4 vettori="0,0,3,0;3,0,3,4;0,0,3,4" punti="0,0,pieno;3,0,pieno;3,4,pieno,R" etichette="-0.45,0.35,P;3.2,0.25,Q;1.3,-0.6,3 m;3.24,2,4 m" titolo="Il percorso segue i due cateti. La freccia da $P$ a $R$ rappresenta lo spostamento."}
:::

:::osservazione{titolo="Vettore nullo"}
Un percorso che parte da un punto e vi ritorna ha spostamento $\vec 0$. Il vettore nullo ha modulo zero. Ogni sua componente è zero e perciò il suo verso resta indeterminato. Si può sommare ad altri vettori perché la somma si calcola tramite le componenti, anche quando tutte le componenti di un addendo sono nulle.
:::

:::esempio{titolo="Coordinate e scelta del riferimento"}
Un ascensore sale di $4\,\mathrm{m}$. Se il verso positivo dell’asse verticale è verso l’alto, la componente dello spostamento è $+4\,\mathrm{m}$. Se si orienta lo stesso asse verso il basso, la componente è $-4\,\mathrm{m}$. La freccia rappresenta in entrambi i casi lo stesso spostamento nello spazio. È cambiato solo il modo in cui lo si descrive. La scelta del riferimento deve quindi precedere l’assegnazione dei segni. Quando due osservazioni usano assi orientati in versi opposti, occorre riscriverle nello stesso riferimento prima di confrontare le loro componenti.
:::

## Coordinate, componenti e modulo

:::definizione{#componenti titolo="Componenti lungo assi cartesiani"}
Fissati due assi perpendicolari con unità di lunghezza uguali, si può traslare la coda di un vettore libero all’origine. Le coordinate della punta sono le **componenti cartesiane**. Per $\vec A=(A_x,A_y)$, $A_x$ rappresenta lo spostamento orientato lungo $x$ e $A_y$ quello lungo $y$. Una componente negativa indica un verso opposto a quello positivo dell’asse. Nello spazio si aggiunge $A_z$ lungo un terzo asse perpendicolare agli altri due.

Se la freccia va da $P=(x_P,y_P)$ a $Q=(x_Q,y_Q)$, le componenti sono le variazioni delle coordinate:
$$
\overrightarrow{PQ}=(x_Q-x_P,\;y_Q-y_P).
$$
Per esempio, da $P=(2,1)\,\mathrm{m}$ a $Q=(-1,5)\,\mathrm{m}$ si ottiene $\overrightarrow{PQ}=(-3,4)\,\mathrm{m}$. Si sottrae sempre la coordinata della coda da quella della punta. Scambiare i due punti cambia il segno di entrambe le componenti.
:::

:::definizione{#modulo titolo="Modulo dalle componenti"}
Il **modulo** di un vettore nel piano si ottiene con il teorema di Pitagora. I cateti del triangolo sono i valori assoluti delle componenti, quindi $|\vec A|=\sqrt{A_x^2+A_y^2}$. Nello spazio si applica una prima volta il teorema nel piano $xy$ e una seconda volta al triangolo che ha per cateti la lunghezza della proiezione sul piano e $|A_z|$. Si ottiene
$$
|\vec A|=\sqrt{A_x^2+A_y^2+A_z^2}.
$$
Per $\vec A=(-3,4)\,\mathrm{m}$ il modulo vale $5\,\mathrm{m}$ anche se la prima componente è negativa. Il segno descrive il verso della componente, mentre il quadrato misura il contributo della componente al modulo.

::grafico{uguale=1 xmin=-4.7 xmax=2 ymin=-1.3 ymax=5.4 vettori="0,0,-3,4,A" segmenti="-3,0,-3,4;0,4,-3,4" punti="-3,4,pieno" etichette="-3.5,-0.66,−3;0.2,4.2,4" titolo="Le proiezioni sugli assi individuano le componenti $-3$ e $4$. Il modulo del vettore vale $5$."}
:::

:::esempio{titolo="Dal modulo e dall’angolo alle componenti"}
Si consideri un vettore non nullo di modulo $A=|\vec A|$. L’angolo $\theta$ è misurato dal semiasse positivo $x$ in senso antiorario. La trigonometria fornisce $A_x=A\cos\theta$ e $A_y=A\sin\theta$. Un vettore di modulo $6\,\mathrm{N}$ a $120^\circ$ cade nel secondo quadrante, quindi la componente orizzontale è negativa e quella verticale è positiva.
$$
\begin{aligned}
A_x&=6\,\mathrm{N}\cdot\left(-\frac12\right)
=-3\,\mathrm{N}\\[6pt]
A_y&=6\,\mathrm{N}\cdot\frac{\sqrt3}{2}
=3\sqrt3\,\mathrm{N}.
\end{aligned}
$$
La verifica del modulo dà $\sqrt{9+27}\,\mathrm{N}=6\,\mathrm{N}$. Se si conoscono le componenti e si cerca l’angolo, il rapporto $\dfrac{A_y}{A_x}$ fornisce la tangente solo quando $A_x\ne 0$. Il segno delle due componenti determina il quadrante, perché gli angoli che differiscono di $180^\circ$ hanno la stessa tangente.
:::

:::esempio{titolo="Spostamento nello spazio"}
Una sonda passa dalla posizione $(1,2,3)\,\mathrm{m}$ alla posizione $(3,1,5)\,\mathrm{m}$. Sottraendo le coordinate della prima posizione da quelle della seconda si trova lo spostamento $(2,-1,2)\,\mathrm{m}$. La sua proiezione sul piano $xy$ ha modulo $\sqrt{2^2+(-1)^2}\,\mathrm{m}=\sqrt5\,\mathrm{m}$. Il modulo dello spostamento completo è $\sqrt{5+2^2}\,\mathrm{m}=3\,\mathrm{m}$. La differenza tra questi due risultati dipende dalla variazione della quota. Se il terzo valore delle due posizioni coincidesse, la componente verticale sarebbe zero e la proiezione sul piano avrebbe lo stesso modulo dello spostamento.
:::

## Somma e differenza

:::osservazione{#somma titolo="Somma per componenti e regola punta-coda"}
Spostarsi prima di $\vec A$ e poi di $\vec B$ significa eseguire due spostamenti lungo ciascun asse. Le variazioni delle coordinate si sommano, quindi
$$
\vec A+\vec B=(A_x+B_x,\;A_y+B_y)
$$
nel piano. Lo stesso calcolo vale per la terza componente nello spazio. Nel disegno si colloca la coda di $\vec B$ sulla punta di $\vec A$. La risultante va dalla coda iniziale alla punta finale. Poiché la somma delle componenti è commutativa, eseguire i due spostamenti nell’ordine inverso porta allo stesso punto finale.

Siano $\vec A=(3,1)$ e $\vec B=(-1,2)$. Le due componenti della somma valgono $3-1=2$ e $1+2=3$, quindi $\vec A+\vec B=(2,3)$. Nella figura la freccia che rappresenta $\vec B$ ha coda in $(3,1)$, ma le sue componenti sono sempre $(-1,2)$.

::grafico{uguale=1 xmin=-1.2 xmax=5.2 ymin=-1.1 ymax=4.5 vettori="0,0,3,1,A;3,1,2,3,B;0,0,2,3" punti="3,1;2,3" etichette="0.56,1.68,R" titolo="La risultante $R$ chiude la costruzione punta-coda per $A=(3,1)$ e $B=(-1,2)$."}
:::

:::osservazione{titolo="Differenza e verso del vettore opposto"}
Il vettore $-\vec B$ ha componenti $(-B_x,-B_y)$. Per $\vec B$ diverso da zero ha lo stesso modulo e la stessa direzione, con verso opposto. La differenza $\vec A-\vec B$ è la somma $\vec A+(-\vec B)$. Se i due vettori hanno coda comune, la differenza va dalla punta di $\vec B$ alla punta di $\vec A$. Il suo opposto, $\vec B-\vec A$, percorre lo stesso segmento nel verso contrario.

Con $\vec A=(3,1)$ e $\vec B=(-1,2)$ si ha $\vec A-\vec B=(4,-1)$. La prima componente aumenta perché si sottrae un valore negativo. La seconda diventa negativa perché la componente di $\vec B$ è maggiore di quella di $\vec A$.
:::

:::esempio{titolo="Risultante di due forze"}
Su un punto materiale agiscono due forze di componenti $(4,2)\,\mathrm{N}$ e $(-1,-6)\,\mathrm{N}$. Il segno negativo della seconda componente della seconda forza indica il verso lungo $-y$. La somma dà
$$
\begin{aligned}
\vec F_{\mathrm{ris}}&=(4-1,\;2-6)\,\mathrm{N}=(3,-4)\,\mathrm{N}\\[6pt]
|\vec F_{\mathrm{ris}}|&=\sqrt{3^2+(-4)^2}\,\mathrm{N}=5\,\mathrm{N}.
\end{aligned}
$$
Il modulo si calcola dalla risultante. La somma dei moduli delle forze darebbe il modulo della risultante solo se le forze agissero lungo la stessa direzione e nello stesso verso.
:::

:::esempio{titolo="Forza che annulla una risultante"}
Un punto materiale è soggetto a due forze $\vec F_1=(2,-3)\,\mathrm{N}$ e $\vec F_2=(1,5)\,\mathrm{N}$. La risultante vale $(3,2)\,\mathrm{N}$. Per ottenere una risultante totale nulla, una terza forza deve annullare entrambe le componenti. La terza forza ha quindi componenti $(-3,-2)\,\mathrm{N}$. La verifica consiste nel sommare tutte le componenti orizzontali e tutte quelle verticali. Si ottiene $(2+1-3,-3+5-2)\,\mathrm{N}=(0,0)\,\mathrm{N}$. In una situazione piana l’annullamento della risultante impone due condizioni simultanee. Se è nulla solo la componente orizzontale, rimane una forza risultante verticale.
:::

## Multipli e versori

:::definizione{#versori titolo="Multipli e normalizzazione"}
Per un numero reale $k$, il prodotto $k\vec A$ si ottiene moltiplicando ogni componente per $k$. Il modulo risultante è $|k||\vec A|$, perché ciascuna componente al quadrato contiene il fattore $k^2$. Per $\vec A\ne\vec 0$, con $k>0$ il verso si conserva e con $k<0$ si inverte. Con $k=0$ si ottiene il vettore nullo.

Un **versore** è un vettore di modulo uno. Dato $\vec A\ne\vec0$, il versore $\widehat A$ orientato come $\vec A$ è
$$
\widehat A=\frac{\vec A}{|\vec A|}.
$$
Il divisore è positivo, quindi la divisione conserva direzione e verso. Il nuovo modulo vale $\dfrac{|\vec A|}{|\vec A|}=1$. Se le componenti di $\vec A$ hanno un’unità, la stessa unità compare al numeratore e al denominatore. Le componenti del versore sono perciò numeri adimensionali.
:::

:::esempio{titolo="Un verso e un modulo assegnato"}
Il vettore $\vec A=(3,-4)$ ha modulo $5$. Il versore orientato come $\vec A$ è
$$
\widehat A=\left(\frac35,-\frac45\right).
$$
Per ottenere una forza di modulo $10\,\mathrm{N}$ nel verso opposto, si moltiplica il versore per $-10\,\mathrm{N}$. Si trova
$$
\vec F=(-6,8)\,\mathrm{N}.
$$
La prima componente è diventata negativa e la seconda positiva. Il modulo vale $\sqrt{36+64}\,\mathrm{N}=10\,\mathrm{N}$.

::grafico{uguale=1 xmin=-7.5 xmax=5.1 ymin=-5.5 ymax=9.4 vettori="0,0,3,-4,A;0,0,-6,8,F" punti="3,-4;-6,8" titolo="I due vettori giacciono sulla stessa retta e hanno versi opposti."}
:::

:::osservazione{titolo="Versori degli assi"}
I versori cartesiani $\hat\imath=(1,0,0)$, $\hat\jmath=(0,1,0)$ e $\hat k=(0,0,1)$ indicano i tre versi positivi. Ogni vettore dello spazio si scrive come $A_x\hat\imath+A_y\hat\jmath+A_z\hat k$. Nel piano $xy$ il coefficiente di $\hat k$ è zero. Questa notazione rende esplicito quale asse corrisponde a ogni componente. Per esempio, $(2,-3,0)\,\mathrm{m}$ significa $2\,\mathrm{m}$ lungo $\hat\imath$ e $-3\,\mathrm{m}$ lungo $\hat\jmath$.
:::

:::osservazione{titolo="Confronto tra due vettori paralleli"}
Due vettori non nulli sono paralleli se uno è un multiplo dell’altro. Per esempio, $\vec A=(2,6)$ e $\vec B=(-1,-3)$ soddisfano $\vec B=-\dfrac12\vec A$. Il loro verso è opposto perché il fattore è negativo. Si può verificare la relazione anche se una componente è zero. Per $\vec U=(0,4)$ e $\vec V=(0,8)$ basta il fattore $2$, perché esso trasforma entrambe le componenti di $\vec U$ in quelle di $\vec V$. Il confronto tramite un fattore comune evita rapporti con denominatore nullo.
:::

## Prodotto scalare e proiezione

:::definizione{#scalare titolo="Prodotto scalare"}
Il **prodotto scalare** si calcola moltiplicando le componenti corrispondenti e sommando i prodotti. Nello spazio vale
$$
\vec A\cdot\vec B=A_xB_x+A_yB_y+A_zB_z.
$$
Nel piano il terzo termine vale zero. Il risultato è un numero con l’unità che si ottiene moltiplicando quelle dei due vettori. Se entrambi sono non nulli, indicando con $\theta$ il loro angolo compreso tra $0$ e $180^\circ$, vale anche
$$
\vec A\cdot\vec B=|\vec A|\,|\vec B|\cos\theta.
$$
Le due scritture descrivono lo stesso numero. Infatti la somma dei quadrati delle componenti della differenza $\vec A-\vec B$ è $|\vec A|^2+|\vec B|^2-2\vec A\cdot\vec B$. Il teorema del coseno fornisce la stessa espressione con il termine finale $-2|\vec A||\vec B|\cos\theta$. Uguagliando le due espressioni si ottiene la formula geometrica.
:::

:::esempio{titolo="Condizione di perpendicolarità"}
Siano $\vec A=(1,-2)$ e $\vec B=(4,2)$. Il loro prodotto scalare vale
$$
\vec A\cdot\vec B=1\cdot4+(-2)\cdot2=0.
$$
I due moduli sono positivi, quindi la formula geometrica implica $\cos\theta=0$. Nell’intervallo degli angoli tra due vettori questo accade a $90^\circ$. Il prodotto scalare permette così di verificare la perpendicolarità senza ricavare separatamente l’inclinazione dei due vettori rispetto all’asse $x$.
:::

:::definizione{#proiezioni titolo="Proiezione scalare orientata"}
Dato $\vec B\ne\vec 0$, la **proiezione scalare** di $\vec A$ sul verso di $\vec B$ è $\vec A\cdot\widehat B$. La proiezione vettoriale è $(\vec A\cdot\widehat B)\widehat B$. La prima è un numero con segno, mentre la seconda è un vettore lungo la direzione di $\vec B$. Per $\vec B=(4,0)$, il versore è $(1,0)$. Il vettore $\vec A=(-2,3)$ ha quindi proiezione scalare $-2$ e proiezione vettoriale $(-2,0)$. Il segno negativo indica il verso opposto rispetto a $\vec B$.

::grafico{uguale=1 xmin=-3.7 xmax=5.5 ymin=-1.5 ymax=4.6 vettori="0,0,-2,3,A;0,0,4,0,B;0,-0.32,-2,-0.32" segmenti="-2,0,-2,3" punti="-2,0;-2,3" etichette="-2.95,-0.8,−2" titolo="La proiezione di $A$ lungo il verso di $B$ è negativa perché il piede della perpendicolare ha ascissa $-2$."}
:::

:::esempio{titolo="Angolo ricavato dalle componenti"}
I vettori $\vec A=(2,0)$ e $\vec B=(1,\sqrt3)$ hanno entrambi modulo $2$. Il prodotto scalare vale $2$, quindi
$$
\cos\theta=\frac{2}{2\cdot2}=\frac12.
$$
L’angolo tra i vettori appartiene all’intervallo da zero a centottanta gradi, quindi $\theta=60^\circ$. L’angolo è acuto perché il prodotto scalare è positivo. Un prodotto negativo darebbe un coseno negativo e un angolo ottuso. Questo controllo del segno è utile quando una calcolatrice restituisce l’angolo in radianti e si vuole confrontarlo con un disegno in gradi.
:::

:::esempio{titolo="Componente lungo una direzione obliqua"}
Siano $\vec A=(7,1)$ e $\vec B=(3,4)$. Il modulo di $\vec B$ vale $5$, quindi il versore è $\left(\dfrac35,\dfrac45\right)$. La proiezione scalare è
$$
\vec A\cdot\widehat B
=7\cdot\frac35+1\cdot\frac45
=5.
$$
Il vettore proiettato è dunque $5\widehat B=(3,4)$. Sottraendolo da $\vec A$ rimane $(4,-3)$. Il prodotto scalare di questo resto con $\vec B$ è $4\cdot3+(-3)\cdot4=0$, quindi il resto è perpendicolare alla direzione scelta. Ogni vettore si può scomporre in questo modo rispetto a una direzione. Una parte è parallela alla direzione e l’altra le è perpendicolare. Nella formula del lavoro conta la prima parte della forza, perché la seconda ha prodotto scalare nullo con lo spostamento.
:::

## Lavoro di una forza costante

:::osservazione{#lavoro titolo="Componente della forza lungo lo spostamento"}
Per una forza costante $\vec F$ e uno spostamento $\vec s$, il lavoro è $W=\vec F\cdot\vec s$. Il prodotto scalare seleziona la componente della forza orientata lungo lo spostamento. Se la forza e lo spostamento sono entrambi non nulli, quella componente vale $|\vec F|\cos\theta$, dove $\theta$ è l’angolo tra i due vettori. Il lavoro è positivo per $\theta<90^\circ$, nullo per $\theta=90^\circ$ e negativo per $\theta>90^\circ$. Se uno dei due vettori è nullo, anche il lavoro è nullo. L’unità è il joule, equivalente al prodotto di un newton per un metro.

Il segno può essere letto direttamente dalle componenti quando lo spostamento è parallelo a un asse. Se $\vec s=(s_x,0)$ con $s_x>0$, allora $W=F_xs_x$. La componente verticale della forza ha prodotto nullo con quella dello spostamento. Una forza verticale può avere un effetto fisico rilevante e compiere lavoro nullo durante uno spostamento orizzontale.
:::

:::esempio{titolo="Lavoro positivo e lavoro negativo"}
Una forza costante di modulo $10\,\mathrm{N}$ forma $60^\circ$ con uno spostamento orizzontale di $2\,\mathrm{m}$. Il coseno vale un mezzo, quindi la proiezione della forza lungo lo spostamento vale $5\,\mathrm{N}$.
$$
W=10\,\mathrm{N}\cdot 2\,\mathrm{m}\cdot\frac12
=10\,\mathrm{J}.
$$
Se una seconda forza ha lo stesso modulo e forma $120^\circ$ con lo stesso spostamento, il suo coseno vale $-\dfrac12$. La proiezione della seconda forza vale $-5\,\mathrm{N}$ e il suo lavoro è $-10\,\mathrm{J}$. La figura distingue la direzione della forza dal verso della componente lungo lo spostamento.

::grafico{uguale=1 xmin=-6.5 xmax=6.5 ymin=-1.5 ymax=10.5 vettori="0,0,5,8.660254;0,0,-5,8.660254;0,0,2,0,s" etichette="3.08,4.2,F₁;-4.02,4.6,F₂" segmenti="5,0,5,8.660254;-5,0,-5,8.660254" titolo="Le proiezioni lungo il moto sono $5\,\mathrm{N}$ e $-5\,\mathrm{N}$. La freccia dello spostamento indica solo il verso."}
:::

:::attenzione
Per calcolare il lavoro dalla forza costante e dallo spostamento si usa l’angolo tra questi due vettori. L’angolo della forza rispetto all’orizzontale coincide con quello richiesto quando lo spostamento ha verso orizzontale positivo. Se lo spostamento è orizzontale verso sinistra, una forza inclinata di $60^\circ$ rispetto al semiasse positivo forma invece $120^\circ$ con lo spostamento. Il cambio di angolo inverte il segno del lavoro.
:::

:::esempio{titolo="Lavoro di due forze nello stesso spostamento"}
Un corpo si sposta di $\vec s=(4,0)\,\mathrm{m}$. Agiscono una forza $\vec F_1=(8,2)\,\mathrm{N}$ e una forza $\vec F_2=(-3,0)\,\mathrm{N}$. I rispettivi lavori valgono $8\cdot4\,\mathrm{J}=32\,\mathrm{J}$ e $(-3)\cdot4\,\mathrm{J}=-12\,\mathrm{J}$. Il lavoro totale è quindi $20\,\mathrm{J}$. Si ottiene lo stesso valore calcolando prima la risultante $(5,2)\,\mathrm{N}$ e poi il suo prodotto scalare con lo spostamento. L’uguaglianza segue dalla proprietà distributiva del prodotto scalare rispetto alla somma. Il segno finale dipende dal bilancio tra i contributi lungo la direzione del moto.
:::

## Prodotto vettoriale e orientazione

:::definizione{#vettoriale titolo="Prodotto vettoriale nello spazio"}
Il **prodotto vettoriale** $\vec A\times\vec B$ è un vettore. Per due vettori non paralleli è perpendicolare al piano che li contiene. Il modulo vale $|\vec A||\vec B|\sin\theta$, cioè l’area del parallelogramma costruito sui due vettori. Per scegliere il verso, nella regola della mano destra si ruotano le dita dal primo vettore al secondo attraverso l’angolo minore. Il pollice indica il verso del prodotto. Scambiare l’ordine cambia il verso e lascia invariato il modulo. Per vettori paralleli o in presenza di un vettore nullo il risultato è $\vec0$.

In una terna cartesiana destrorsa le componenti sono
$$
\vec A\times\vec B=
\bigl(A_yB_z-A_zB_y,\;
A_zB_x-A_xB_z,\;
A_xB_y-A_yB_x\bigr).
$$
Se $\vec A$ e $\vec B$ giacciono nel piano $xy$, le componenti $x$ e $y$ sono nulle. Resta solo il termine $A_xB_y-A_yB_x$ lungo $z$. Con $x$ verso destra e $y$ verso l’alto, il verso positivo $z$ esce dal foglio.
:::

:::esempio{titolo="Area e orientazione nel piano"}
Per $\vec A=(3,0,0)$ e $\vec B=(1,2,0)$, la componente lungo $z$ vale $3\cdot2-0\cdot1=6$. Il parallelogramma ha base $3$ e altezza perpendicolare $2$, quindi la sua area è $6$. Nella costruzione in figura si passa da $\vec A$ a $\vec B$ con una rotazione antioraria vista dal lato positivo di $z$. Il prodotto è quindi $(0,0,6)$.

::grafico{uguale=1 xmin=-1.1 xmax=5.4 ymin=-1.2 ymax=4.1 vettori="0,0,3,0,A;0,0,1,2,B" poligoni="0,0 3,0 4,2 1,2" linee="3,0 4,2 1,2" segmenti="1,0,1,2" etichette="1.2,1.07,2;2.6,2.7,+z uscente" titolo="Il parallelogramma ha area $6$. L’ordine da $A$ a $B$ determina il verso positivo lungo $z$."}
:::

:::osservazione{titolo="Controllo con i prodotti scalari"}
Il prodotto vettoriale è ortogonale a entrambi i fattori. Per controllare un calcolo con componenti spaziali si possono quindi calcolare due prodotti scalari. Per esempio, con $\vec A=(1,2,0)$ e $\vec B=(0,1,1)$ si ottiene $\vec A\times\vec B=(2,-1,1)$. I prodotti scalari con $\vec A$ e con $\vec B$ valgono rispettivamente $2-2=0$ e $-1+1=0$. Il controllo conferma l’ortogonalità. Per verificare il verso si usa la regola della mano destra oppure si controlla il segno di una componente con la formula del prodotto.
:::

:::esempio{titolo="Prodotto vettoriale di due vettori con tre componenti"}
Siano $\vec A=(2,-1,3)$ e $\vec B=(1,4,-2)$. Poiché entrambe le componenti verticali sono diverse da zero, il prodotto può avere contributi lungo tutti e tre gli assi. Calcolando nell’ordine $x$, $y$, $z$ si ottiene
$$
\begin{aligned}
(\vec A\times\vec B)_x&=(-1)(-2)-3\cdot4=-10\\[6pt]
(\vec A\times\vec B)_y&=3\cdot1-2(-2)=7\\[6pt]
(\vec A\times\vec B)_z&=2\cdot4-(-1)\cdot1=9.
\end{aligned}
$$
Si può controllare il calcolo verificando che $2(-10)-7+3\cdot9=0$ e $(-10)+4\cdot7-2\cdot9=0$. Le due uguaglianze confermano che il risultato è perpendicolare a entrambi i vettori. Cambiando l’ordine dei fattori si ottiene $(10,-7,-9)$.
:::

## Momento di una forza

:::definizione{#momento titolo="Momento rispetto a un punto"}
Sia $O$ il punto rispetto al quale si vuole studiare la rotazione e sia $P$ il punto di applicazione della forza $\vec F$. Il vettore posizione $\vec r$ va da $O$ a $P$. Il **momento** rispetto a $O$ è $\vec M_O=\vec r\times\vec F$. Il suo modulo è il prodotto del modulo della forza per il braccio, cioè per la distanza perpendicolare di $O$ dalla retta d’azione della forza. Se la retta d’azione passa per $O$, il braccio vale zero e la forza ha momento nullo rispetto a quel punto.

Nel piano $xy$ si ottiene $M_{O,z}=r_xF_y-r_yF_x$. Un momento positivo è antiorario per chi osserva il piano dal lato positivo di $z$. Un momento negativo è orario dalla stessa posizione. L’unità è il newton metro. Sebbene abbia la stessa dimensione del joule, il newton metro indica qui un momento, che è un vettore.
:::

:::esempio{titolo="Forza inclinata applicata a una leva"}
Una forza di componenti $(3,-6,0)\,\mathrm{N}$ è applicata a $0{,}40\,\mathrm{m}$ dal perno lungo l’asse $x$ positivo. Il vettore posizione è $\vec r=(0{,}40;\,0;\,0)\,\mathrm{m}$. Il punto e la forza sono rappresentati in figura con scale distinte.
$$
\begin{aligned}
M_{O,z}&=r_xF_y-r_yF_x\\[6pt]
&=0{,}40\,\mathrm{m}\cdot(-6\,\mathrm{N})-0\\[6pt]
&=-2{,}4\,\mathrm{N\,m}.
\end{aligned}
$$
La componente orizzontale della forza ha retta d’azione passante per il perno e quindi momento nullo. La componente verticale è diretta verso il basso e agisce a destra del perno. Da questa posizione tende a far ruotare la leva in senso orario, in accordo con il segno del calcolo.

::grafico{assi=0 uguale=1 xmin=-1.2 xmax=6.2 ymin=-3.8 ymax=1.7 riferimento="0.45,-2.3,0,1,x,y" linee="0,0 4,0" vettori="4,0,5.5,-3,F;4,0,4,-3;4,0,5.5,0" segmenti="4,-3,5.5,-3;5.5,0,5.5,-3" punti="0,0,pieno;4,0,pieno,P" etichette="-0.4,0.38,O;0.9,0.3,0,40 m;4.2,-2.35,−6 N;4.5,0.6,3 N" titolo="La componente verticale contribuisce al momento. La componente orizzontale è parallela alla leva."}
:::

:::esempio{titolo="Momenti opposti rispetto allo stesso punto"}
Su una leva orizzontale agiscono due forze verticali verso il basso. Una forza di $12\,\mathrm{N}$ è applicata $0{,}30\,\mathrm{m}$ a sinistra del perno. Una forza di $8\,\mathrm{N}$ è applicata $0{,}45\,\mathrm{m}$ a destra. La prima ha $r_x<0$ e $F_y<0$, quindi il suo momento è positivo e vale $3{,}6\,\mathrm{N\,m}$. La seconda ha $r_x>0$ e $F_y<0$, quindi il suo momento è negativo e vale $-3{,}6\,\mathrm{N\,m}$. I due momenti si annullano rispetto al perno. Le due forze hanno però lo stesso verso, quindi la loro risultante verticale vale $20\,\mathrm{N}$ verso il basso. Il bilancio dei momenti e il bilancio delle forze riguardano effetti diversi e si verificano con equazioni separate.
:::

:::osservazione{titolo="Scelta del punto rispetto al quale calcolare il momento"}
La stessa forza può avere momenti differenti rispetto a punti diversi. Una forza verticale verso il basso, applicata a destra di un perno, ha momento orario rispetto al perno. Rispetto al punto di applicazione il momento è nullo, perché il vettore posizione vale zero. Se il punto scelto è sulla stessa retta verticale della forza, il braccio è ancora nullo. La scelta del punto fa quindi parte dei dati del problema, anche quando la forza e il suo punto di applicazione sono già noti.
:::
