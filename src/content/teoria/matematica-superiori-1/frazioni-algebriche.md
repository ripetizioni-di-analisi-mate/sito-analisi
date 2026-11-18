---
titolo: "Frazioni algebriche"
sommario: "Dominio, semplificazione e operazioni con quozienti di polinomi, con esempi sul segno e sui valori esclusi."
---

## Condizioni di esistenza

:::definizione{#dominio titolo="Dominio di una frazione algebrica"}
Siano $P$ e $Q$ due polinomi reali in $x$, con $Q$ diverso dal polinomio nullo. La **frazione algebrica** $\dfrac{P(x)}{Q(x)}$ associa a ciascun valore ammesso di $x$ il quoziente dei due valori $P(x)$ e $Q(x)$. Il **dominio** è l’insieme
$$
D=\{x\in\mathbb R:Q(x)\ne0\}.
$$

La condizione riguarda il valore del denominatore nel punto scelto. Per $\dfrac{x+1}{x-3}$ si ammette $x=-1$, perché il numeratore vale zero e il denominatore vale $-4$. Per $x=3$ il denominatore si annulla, quindi manca il quoziente. La stessa regola vale quando l’espressione ha un denominatore di grado superiore.
:::

:::esempio{titolo="Denominatori con due radici, con una radice e senza radici reali"}
Il denominatore $x^2-4$ si scompone come $(x-2)(x+2)$. Un prodotto di due numeri è zero se almeno uno dei fattori è zero. Si escludono quindi $2$ e $-2$. Con $(x-2)^2$ l’unico valore escluso è $2$, perché al quadrato si annulla lo stesso fattore. Invece $x^2+1\ge 1$ per ogni reale, quindi si può usare qualsiasi $x$.

| Denominatore | Zeri reali | Dominio |
|---|---|---|
| $x^2-4$ | $-2,\ 2$ | $\mathbb R\setminus\{-2,2\}$ |
| $(x-2)^2$ | $2$ | $\mathbb R\setminus\{2\}$ |
| $x^2+1$ | nessuno | $\mathbb R$ |

::grafico{f="x^2+1" xmin=-3 xmax=3 ymin=-1 ymax=7 titolo="Il valore minimo di x² + 1 è 1, quindi il denominatore resta positivo"}
:::

:::osservazione{titolo="Una condizione si scrive per ogni espressione di partenza"}
Nel dominio della somma $\dfrac1{x-2}+\dfrac1{x+2}$ si impongono insieme $x\ne2$ e $x\ne-2$. Controllare le due frazioni separatamente serve anche quando il calcolo cancella un fattore. Il risultato del calcolo deve infatti essere utilizzabile negli stessi punti dell’espressione iniziale.
:::

:::esempio{titolo="Un coefficiente che può annullarsi"}
Nella frazione $\dfrac{x+1}{(a-1)x+3}$ si fissa il parametro reale $a$ e si cercano i valori ammessi di $x$. Per $a=1$ il termine in $x$ scompare e il denominatore è il numero $3$. Il dominio è quindi $\mathbb R$. Per $a\ne1$ si divide per $a-1$ nell’equazione $(a-1)x+3=0$. Si trova l’unico valore da escludere.
$$
x=-\frac{3}{a-1}.
$$
Per esempio, $a=4$ esclude $x=-1$. A quel punto si annulla anche il numeratore, ma la condizione di esistenza dipende ancora dal denominatore. Il caso $a=1$ è separato perché la formula per il valore escluso contiene la divisione per $a-1$.
:::

## Semplificazione e uguaglianza sul dominio iniziale

::::teorema{#semplificare titolo="Semplificazione di un fattore comune"}
Per polinomi $A$, $B$ e $C$, il quoziente $\dfrac{A(x)C(x)}{B(x)C(x)}$ coincide con $\dfrac{A(x)}{B(x)}$ nei punti in cui $B(x)\ne0$ e $C(x)\ne0$. Si conservano entrambe le condizioni quando si riscrive l’espressione.

:::dimostrazione
In un punto del dominio il numero $C(x)$ è diverso da zero. Si può quindi dividere per $C(x)$ sia il numeratore sia il denominatore. Al numeratore rimane $A(x)$ e al denominatore rimane $B(x)$. Dividere i due termini di un quoziente per lo stesso numero non nullo lascia invariato il valore.
:::
::::

:::esempio{titolo="Una formula lineare con un punto escluso"}
La differenza di quadrati $x^2-9$ si scrive $(x-3)(x+3)$. Pertanto
$$
\begin{aligned}
\frac{x^2-9}{x-3}&=\frac{(x-3)(x+3)}{x-3}\\[6pt]
&=x+3 \qquad (x\ne3).
\end{aligned}
$$
Nel grafico, tutti i punti della retta $y=x+3$ appartengono alla frazione tranne quello di ascissa $3$. La sua ordinata sulla retta sarebbe $6$, quindi si disegna un cerchio vuoto nel punto $(3,6)$. La forma $x+3$ è utile per calcolare il valore in $x=4$, dove si ottiene $7$, e il dominio iniziale continua a governare ogni sostituzione.

::grafico{f="x+3" xmin=-4 xmax=7 ymin=-2 ymax=11 punti="3,6,vuoto" titolo="Il cerchio vuoto segnala l’esclusione del punto (3, 6)"}
:::

:::attenzione{titolo="La semplificazione riguarda i fattori"}
Per $x\ne0$ la frazione $\dfrac{x+3}{x}$ ha una somma al numeratore. Perciò si divide ciascun addendo per $x$ e si ottiene $1+\dfrac3x$. In $x=2$ la frazione vale $\dfrac52$. Il controllo numerico distingue questa trasformazione dalla cancellazione isolata dell’addendo $x$.
:::

:::esempio{titolo="Un fattore cancellato e un fattore che rimane"}
La frazione $\dfrac{(x+4)(x-1)}{(x+4)(x+2)}$ esclude $-4$ e $-2$. Per i valori ammessi si cancella $x+4$ e si ottiene $\dfrac{x-1}{x+2}$. Le due esclusioni hanno effetti diversi. La formula semplificata fornisce il valore $\dfrac52$ in $x=-4$, ma la frazione iniziale resta indefinita in quel punto. Il denominatore semplificato si annulla ancora in $x=-2$, mentre il nuovo numeratore vale $-3$. Il grafico conserva lì la separazione tra i rami. Il cerchio vuoto indica quindi l’esclusione rimasta solo nel dominio scritto accanto alla formula.

::grafico{f="(x-1)/(x+2)" xmin=-7 xmax=6 ymin=-4 ymax=6 asintoti="x=-2;y=1" punti="-4,2.5,vuoto" titolo="Il fattore cancellato lascia un punto vuoto in x = −4"}
:::

## Addizioni e sottrazioni

::::teorema{#somme titolo="Denominatore comune mediante fattori non nulli"}
Siano $P$, $Q$, $R$ e $S$ polinomi. Nei punti in cui $Q(x)$ e $S(x)$ sono entrambi diversi da zero si ha
$$
\frac{P(x)}{Q(x)}\pm\frac{R(x)}{S(x)}
=\frac{P(x)S(x)\pm R(x)Q(x)}{Q(x)S(x)}.
$$
Il prodotto $QS$ è un denominatore comune. Se $Q$ e $S$ hanno fattori comuni, si può scegliere un multiplo comune di grado minore.

:::dimostrazione
La prima frazione si moltiplica per $\dfrac{S(x)}{S(x)}$ e la seconda per $\dfrac{Q(x)}{Q(x)}$. Entrambi i rapporti valgono uno nel dominio e le due frazioni ottenute hanno lo stesso denominatore. L’addizione o la sottrazione riguarda quindi i loro numeratori interi.
:::
::::

:::esempio{titolo="Fattori comuni con molteplicità diversa"}
Per sommare $\dfrac{1}{(x-2)^2}$ e $\dfrac{2}{(x-2)(x+2)}$ si escludono $2$ e $-2$. Il primo denominatore contiene due copie di $x-2$ e il secondo una sola. Il denominatore comune di grado minimo contiene due copie di $x-2$ e una copia di $x+2$. Nella prima frazione si moltiplicano numeratore e denominatore per $x+2$. Nella seconda si moltiplicano entrambi per $x-2$. Si ottiene
$$
\begin{aligned}
\frac{1}{(x-2)^2}+\frac{2}{(x-2)(x+2)}
&=\frac{(x+2)+2(x-2)}{(x-2)^2(x+2)}\\[6pt]
&=\frac{3x-2}{(x-2)^2(x+2)}.
\end{aligned}
$$
Per $x=0$ i due addendi originali valgono $\dfrac14$ e $-\dfrac12$. La loro somma è dunque $-\dfrac14$, che coincide con il valore della frazione trasformata.
:::

:::esempio{titolo="Denominatori opposti in una differenza"}
Poiché $2-x=-(x-2)$, per $x\ne2$ si ha $\dfrac1{2-x}=-\dfrac1{x-2}$. Si sostituisce questa uguaglianza prima di eseguire la sottrazione.
$$
\begin{aligned}
\frac1{x-2}-\frac1{2-x}
&=\frac1{x-2}+\frac1{x-2}\\[6pt]
&=\frac2{x-2}.
\end{aligned}
$$
Il grafico mostra che il risultato è negativo per $x<2$ e positivo per $x>2$. Infatti il numeratore vale $2$ in entrambi gli intervalli e il denominatore cambia segno attraversando $2$.

::grafico{f="2/(x-2)" xmin=-4 xmax=7 ymin=-5 ymax=5 asintoti="x=2;y=0" titolo="La differenza ha segno opposto nei due intervalli separati da x = 2"}
:::

:::attenzione{titolo="Un denominatore comune può introdurre un’esclusione"}
Nella somma $\dfrac1{x+1}+\dfrac1{x-1}$ il valore $0$ appartiene al dominio e i due addendi si sommano a zero. Usando $(x+1)(x-1)$ come denominatore comune si ottiene $\dfrac{2x}{(x+1)(x-1)}$, che si può valutare in $0$. Aggiungendo un fattore $x$ al denominatore comune si otterrebbe $\dfrac{2x^2}{x(x+1)(x-1)}$. L’apparente nuova esclusione nasce dalla moltiplicazione per $\dfrac{x}{x}$, che vale uno soltanto per $x\ne0$. Perciò i fattori aggiunti a una frazione devono essere non nulli in tutti i punti che si vogliono conservare.
:::

## Prodotti e cancellazioni prima dello sviluppo

::::teorema{#prodotti titolo="Prodotto di due quozienti"}
Per $Q(x)\ne0$ e $S(x)\ne0$ si ha
$$
\frac{P(x)}{Q(x)}\cdot\frac{R(x)}{S(x)}
=\frac{P(x)R(x)}{Q(x)S(x)}.
$$
La scomposizione dei polinomi permette di riconoscere i fattori comuni senza sviluppare i prodotti.

:::dimostrazione
Fissato un punto ammesso, i quozienti sono prodotti per gli inversi di $Q(x)$ e $S(x)$. Si riordinano i quattro fattori usando l’associatività e la commutatività. Il prodotto dei due inversi è l’inverso di $Q(x)S(x)$, quindi si ottiene la formula.
:::
::::

:::esempio{titolo="Un prodotto costante con due punti esclusi"}
Nel prodotto $\dfrac{x-2}{x+2}\cdot\dfrac{x+2}{x-2}$ la prima frazione esclude $-2$ e la seconda esclude $2$. Una volta stabilito il dominio entrambi i fattori $x-2$ e $x+2$ si possono cancellare, quindi il risultato vale $1$. I due punti esclusi provengono da frazioni diverse e restano entrambi esclusi nel prodotto.

::grafico{f="1" xmin=-5 xmax=5 ymin=-1 ymax=3 punti="-2,1,vuoto;2,1,vuoto" titolo="Il prodotto vale 1 in tutti i punti ammessi e ha due esclusioni"}
:::

:::esempio{titolo="Cancellazioni parziali tra fattori ripetuti"}
Con $x\ne0$ e $x\ne1$ si calcola
$$
\begin{aligned}
\frac{x^2}{x-1}\cdot\frac{(x-1)^2}{3x}
&=\frac{x^2(x-1)^2}{3x(x-1)}\\[6pt]
&=\frac{x(x-1)}{3}.
\end{aligned}
$$
Dal fattore $x^2$ si cancella una sola copia di $x$. Allo stesso modo, una copia di $x-1$ rimane al numeratore. In $x=3$ il prodotto iniziale vale $\dfrac92\cdot\dfrac49=2$, quindi il calcolo si controlla anche senza cancellare prima.
:::

:::esempio{titolo="Il segno di un fattore scritto in ordine opposto"}
Nella frazione $\dfrac{-3(x-2)^2}{6(2-x)(x+4)}$ si escludono $2$ e $-4$. Il fattore $2-x$ si riscrive come $-(x-2)$. Il segno meno passa così al prodotto al denominatore e si cancella con quello del numeratore. Si cancella poi una copia di $x-2$ e si riduce il rapporto dei coefficienti.
$$
\begin{aligned}
\frac{-3(x-2)^2}{6(2-x)(x+4)}
&=\frac{-3(x-2)^2}{-6(x-2)(x+4)}\\[6pt]
&=\frac{x-2}{2(x+4)}.
\end{aligned}
$$
In $x=0$ la forma iniziale vale $-\dfrac{12}{48}=-\dfrac14$, come la forma finale. Questo controllo intercetta un segno meno dimenticato. Il valore $2$ resta escluso, anche se annullerebbe il numeratore della forma ottenuta.
:::

## Divisioni fra frazioni algebriche

::::teorema{#divisioni titolo="Il divisore è definito e diverso da zero"}
Per dividere $\dfrac{P(x)}{Q(x)}$ per $\dfrac{R(x)}{S(x)}$ occorre che $Q(x)$, $S(x)$ e $R(x)$ siano tutti diversi da zero. Nel dominio la divisione si scrive
$$
\frac{P(x)}{Q(x)}:\frac{R(x)}{S(x)}
=\frac{P(x)}{Q(x)}\cdot\frac{S(x)}{R(x)}.
$$

:::dimostrazione
Il prodotto di $\dfrac{R(x)}{S(x)}$ e $\dfrac{S(x)}{R(x)}$ è uguale a uno perché entrambi i fattori sono definiti. Il secondo fattore è quindi l’inverso del divisore. Moltiplicare per questo inverso produce il quoziente.
:::
::::

:::esempio{titolo="Due cause diverse di esclusione"}
Nel quoziente $\dfrac1{x+3}:\dfrac{x-1}{x+3}$ i denominatori escludono $-3$. In $x=1$ le frazioni sono definite, ma il divisore vale zero. Nel dominio $\mathbb R\setminus\{-3,1\}$ si ottiene $\dfrac1{x-1}$ dopo avere cancellato $x+3$. Il nuovo denominatore rende ancora evidente l’esclusione di $1$. Per conservare l’informazione su $-3$ occorre indicare il dominio accanto alla formula.

::grafico{f="1/(x-1)" xmin=-6 xmax=6 ymin=-3 ymax=3 asintoti="x=1;y=0" punti="-3,-0.25,vuoto" titolo="Una divisione può produrre un punto escluso in un ramo del grafico"}
:::

:::esempio{titolo="L’ordine delle frazioni cambia anche il dominio"}
Siano $A=\dfrac{x-2}{x-1}$ e $B=\dfrac{x+2}{x-1}$. Entrambe le frazioni richiedono $x\ne1$. Nel quoziente $A:B$ occorre anche $x\ne-2$, perché il divisore è $B$. Nel quoziente $B:A$ occorre invece $x\ne2$, perché il divisore è $A$. I quozienti hanno quindi domini diversi. In $x=2$ si ha $A=0$ e $B=4$, perciò il primo quoziente vale zero. Nella divisione in ordine opposto lo stesso zero si trova al denominatore, quindi il secondo quoziente è indefinito in quel punto.
:::

## Valori numerici, zeri e segno

:::esempio{#valori titolo="Valore numerico e zero della frazione"}
Per valutare $\dfrac{x+1}{x-3}$ in $x=5$ il denominatore vale $2$. La sostituzione è dunque ammessa e il risultato è $\dfrac62=3$. Per trovare gli zeri di $\dfrac{x-4}{x+1}$ si risolve invece $x-4=0$. In $x=4$ il denominatore vale $5$, quindi $4$ è uno zero della frazione.

La stessa procedura distingue gli zeri dai punti esclusi. Per $\dfrac{(x-4)^2}{x-4}$ l’unico zero del numeratore è $4$. In quel punto si annulla anche il denominatore, quindi la frazione resta priva di zeri.

::grafico{f="(x-4)/(x+1)" xmin=-6 xmax=8 ymin=-5 ymax=6 asintoti="x=-1" punti="4,0,pieno" titolo="Lo zero della frazione ha ascissa 4, mentre l’ascissa −1 è esclusa"}
:::

:::esempio{#segno titolo="Un denominatore quadrato conserva il segno del numeratore"}
Per $x\ne-1$ il denominatore $(x+1)^2$ è positivo. Il segno di $\dfrac{x-2}{(x+1)^2}$ è quindi il segno di $x-2$. La frazione è negativa nei due intervalli $(-\infty,-1)$ e $(-1,2)$, vale zero in $2$ ed è positiva nell’intervallo $(2,+\infty)$. La separazione in due intervalli negativi conserva l’esclusione di $-1$.

::grafico{f="(x-2)/(x+1)^2" xmin=-6 xmax=7 ymin=-6 ymax=2 asintoti="x=-1" punti="2,0,pieno" titolo="Il fattore quadrato al denominatore lascia invariato il segno nei punti ammessi"}
:::

:::esempio{titolo="Una tabella dei segni con numeratore e denominatore lineari"}
Per $\dfrac{x-1}{x+2}$ i valori $-2$ e $1$ dividono la retta in tre intervalli. In ciascun intervallo si conosce il segno dei due fattori perché entrambi sono lineari e nessuno si annulla all’interno. Per esempio, se $-2<x<1$ allora $x-1$ è negativo e $x+2$ è positivo, quindi il rapporto è negativo.

| Intervallo | $x-1$ | $x+2$ | Quoziente |
|---|---|---|---|
| $x<-2$ | $-$ | $-$ | $+$ |
| $-2<x<1$ | $-$ | $+$ | $-$ |
| $x>1$ | $+$ | $+$ | $+$ |

Agli estremi si usano le condizioni iniziali. In $x=-2$ il denominatore è zero, quindi il quoziente è escluso. In $x=1$ si annulla soltanto il numeratore, quindi il quoziente vale zero.
:::

## Riconoscere frazioni equivalenti

::::teorema{#equivalenza titolo="Confronto mediante i prodotti incrociati"}
Nel dominio comune delle frazioni $\dfrac{P(x)}{Q(x)}$ e $\dfrac{R(x)}{S(x)}$ i due valori sono uguali se e solo se vale $P(x)S(x)=R(x)Q(x)$. Se questa uguaglianza vale per ogni $x$ del dominio comune, le frazioni coincidono in tutti quei punti. Per descrivere la stessa funzione devono avere anche lo stesso dominio.

:::dimostrazione
Moltiplicando l’uguaglianza delle due frazioni per $Q(x)S(x)$ si ottiene l’uguaglianza dei prodotti. In senso inverso, il prodotto $Q(x)S(x)$ è non nullo nel dominio comune. Si divide quindi l’uguaglianza dei prodotti per quel numero e si ritrova l’uguaglianza dei due quozienti.
:::
::::

:::esempio{titolo="Quozienti uguali sul dominio comune, esclusioni diverse"}
Le frazioni $\dfrac{x+2}{x^2-4}$ e $\dfrac1{x-2}$ coincidono per $x\ne2,-2$. Nella prima il numeratore e il denominatore condividono $x+2$. Dopo la semplificazione, la formula a destra è definita anche in $x=-2$. Le due frazioni rappresentano perciò funzioni con domini diversi, benché il calcolo dia valori uguali in tutti i punti in comune.

::grafico{f="1/(x-2)" xmin=-6 xmax=7 ymin=-3 ymax=3 asintoti="x=2;y=0" punti="-2,-0.25,vuoto" titolo="La formula semplificata conserva il punto escluso dall’espressione di partenza"}
:::

:::esempio{titolo="Un’equazione che produce un candidato escluso"}
Nell’equazione
$$
\frac{x+1}{x-2}=\frac{3}{x-2}
$$
il dominio comune è $x\ne2$. Per ogni valore del dominio si possono moltiplicare i due membri per $x-2$, ottenendo $x+1=3$. L’unico candidato è $x=2$. Proprio in quel punto le frazioni non hanno un valore, perciò l’insieme delle soluzioni è vuoto.

Si può ottenere lo stesso esito studiando la differenza dei due membri. Il suo numeratore è $(x+1)-3=x-2$, quindi la differenza vale $1$ in tutto il dominio. L’uguaglianza richiederebbe differenza zero. Il primo metodo trova un candidato e controlla se è ammesso. Il secondo confronta direttamente i valori nel dominio in cui l’equazione ha senso.
:::

## Frazioni sovrapposte e applicazioni

:::esempio{#composte titolo="Dominio di una frazione sovrapposta"}
Nell’espressione $\dfrac{1-\dfrac1x}{1+\dfrac1x}$ entrambe le formule interne richiedono $x\ne0$. Si riscrive il denominatore complessivo come $\dfrac{x+1}{x}$, perciò si esclude anche $x=-1$. Nei punti ammessi la scrittura diventa
$$
\begin{aligned}
\frac{1-\frac1x}{1+\frac1x}
&=\frac{x-1}{x}\cdot\frac{x}{x+1}\\[6pt]
&=\frac{x-1}{x+1}.
\end{aligned}
$$
La verifica del dominio precede la cancellazione di $x$. Per $x=2$ il quoziente originale è $\dfrac{\frac12}{\frac32}$, cioè $\dfrac13$, e la frazione finale restituisce lo stesso numero.
:::

:::esempio{#modello titolo="Una formula con un dominio legato al problema"}
Una ciclista percorre $18\,\mathrm{km}$ a velocità costante $v$, espressa in chilometri orari. La durata del viaggio è $t=\dfrac{18}{v}$ ore. Il quoziente è algebricamente definito per $v\ne0$. In questo problema $v$ rappresenta il valore positivo della velocità, quindi si studia soltanto il tratto con $v>0$. Raddoppiare la velocità dimezza il tempo. Per esempio, per $v=9$ si ottiene $t=2$, mentre per $v=18$ si ottiene $t=1$.

::grafico{f="18/x" xmin=4 xmax=22 ymin=0 ymax=6 nomi="v,t" punti="9,2,pieno;18,1,pieno" titolo="Sul dominio del problema contano le velocità positive"}
:::

:::esempio{titolo="Da un’area alla misura del lato"}
Un’aiuola rettangolare ha area $24\,\mathrm{m^2}$. La lunghezza di un lato è $x-1$ metri, mentre $b$ indica la lunghezza dell’altro lato in metri. Dall’equazione $(x-1)b=24$ si ottiene $b=\dfrac{24}{x-1}$. La condizione algebrica è $x\ne1$. Poiché $x-1$ rappresenta la misura di un lato, nel problema deve valere $x>1$. Il valore $x=0$ darebbe $b=-24$ e soddisferebbe l’equazione iniziale, ma produrrebbe due lunghezze negative. Per $x=5$ i lati misurano $4$ e $6$ metri e il loro prodotto restituisce l’area data.
:::
