---
titolo: "Frazioni algebriche"
sommario: "Dominio, semplificazione e operazioni con quozienti di polinomi, con esempi sul segno e sui valori esclusi."
---

## Condizioni di esistenza

:::definizione{#dominio titolo="Dominio di una frazione algebrica"}
Un **polinomio** in $x$ è una somma di termini, ciascuno formato da un numero che moltiplica una potenza di $x$. Sono polinomi $x+1$, $x^2-4$ e il numero $3$. Una **frazione algebrica** è una frazione che ha un polinomio al numeratore, cioè sopra la linea, e un polinomio al denominatore, cioè sotto la linea. Un esempio è $\dfrac{x+1}{x-3}$.

Quando al posto di $x$ si scrive un numero, il numeratore e il denominatore diventano due numeri e la frazione vale il loro **quoziente**, cioè il risultato della divisione del primo per il secondo. Per $x=5$ la frazione $\dfrac{x+1}{x-3}$ vale $\dfrac62=3$.

La divisione per zero non ha risultato, perché nessun numero moltiplicato per $0$ dà un numero diverso da $0$. Per $x=3$ il denominatore vale $3-3=0$, cioè **si annulla**, quindi il quoziente non esiste. Si dice che in $x=3$ la frazione *non è definita*, oppure che è *indefinita*, e che $3$ è un valore escluso.

La **condizione di esistenza** di una frazione algebrica è la richiesta che il denominatore sia diverso da zero. Per $\dfrac{x+1}{x-3}$ la condizione è $x\ne3$, dove il simbolo $\ne$ si legge «diverso da». Il **dominio** è l’insieme dei numeri che soddisfano la condizione di esistenza, cioè dei valori ammessi per $x$.

Con le lettere, $P(x)$ e $Q(x)$ indicano i valori di due polinomi $P$ e $Q$ nel numero $x$. Il polinomio $Q$ è diverso dal polinomio nullo, che vale zero per ogni $x$. Il dominio di $\dfrac{P(x)}{Q(x)}$ è l’insieme
$$
D=\{x\in\mathbb R:Q(x)\ne0\}.
$$
Il simbolo $\mathbb R$ indica l’insieme dei **numeri reali**, cioè di tutti i numeri della retta numerica (interi, frazioni, numeri con la virgola). Il simbolo $\in$ si legge «appartiene a».

La condizione riguarda soltanto il denominatore. Per $\dfrac{x+1}{x-3}$ il valore $x=-1$ è ammesso, perché il denominatore vale $-1-3=-4$. In quel punto il numeratore vale $-1+1=0$ e la frazione vale $\dfrac{0}{-4}=0$. La stessa regola vale quando il denominatore contiene $x^2$ o potenze più alte di $x$.
:::

:::esempio{titolo="Denominatori con due radici, con una radice e senza radici reali"}
Uno **zero** di un polinomio, detto anche **radice**, è un valore di $x$ in cui il polinomio vale zero. I valori esclusi di una frazione algebrica sono quindi gli zeri del denominatore. Per trovarli si **scompone** il denominatore, cioè lo si scrive come prodotto. I termini di un prodotto si chiamano **fattori**.

Il denominatore $x^2-4$ è una differenza di quadrati e si scompone come $(x-2)(x+2)$. Un prodotto di due numeri è zero se almeno uno dei fattori è zero. Il fattore $x-2$ vale zero per $x=2$ e il fattore $x+2$ vale zero per $x=-2$. Si escludono quindi $2$ e $-2$.

Il denominatore $(x-2)^2$ è il prodotto $(x-2)(x-2)$. I due fattori sono uguali e si annullano entrambi per $x=2$, quindi l’unico valore escluso è $2$.

Il quadrato di un numero reale è maggiore o uguale a zero, quindi $x^2+1\ge 1$ per ogni reale. Il denominatore $x^2+1$ è perciò diverso da zero per qualsiasi $x$ e nessun valore viene escluso.

| Denominatore | Zeri reali | Dominio |
|---|---|---|
| $x^2-4$ | $-2,\ 2$ | $\mathbb R\setminus\{-2,2\}$ |
| $(x-2)^2$ | $2$ | $\mathbb R\setminus\{2\}$ |
| $x^2+1$ | nessuno | $\mathbb R$ |

La scrittura $\mathbb R\setminus\{-2,2\}$ si legge «tutti i numeri reali tranne $-2$ e $2$». Nel grafico di $x^2+1$ il punto più basso della curva ha altezza $1$, quindi la curva resta sopra l’asse orizzontale.

::grafico{f="x^2+1" xmin=-3 xmax=3 ymin=-1 ymax=7 titolo="Il valore minimo di x² + 1 è 1, quindi il denominatore resta positivo"}
:::

:::osservazione{titolo="Una condizione si scrive per ogni espressione di partenza"}
Nella somma $\dfrac1{x-2}+\dfrac1{x+2}$ ci sono due denominatori. Il primo si annulla per $x=2$ e il secondo per $x=-2$. La somma esiste quando esistono entrambe le frazioni, quindi le due condizioni valgono insieme:
$$
\begin{cases}
x\ne2\\
x\ne-2
\end{cases}
$$
Le condizioni si leggono sull’espressione di partenza, una per ciascun denominatore, prima dei calcoli. Se durante il calcolo un fattore del denominatore si semplifica, il valore che lo annulla resta escluso, perché nell’espressione iniziale in quel punto si dividerebbe per zero.
:::

:::esempio{titolo="Un coefficiente che può annullarsi"}
Nella frazione $\dfrac{x+1}{(a-1)x+3}$ compare, oltre a $x$, la lettera $a$. Essa è un **parametro**, cioè una lettera che indica un numero fissato di cui non si precisa il valore. Il **coefficiente** di $x$ è il numero che moltiplica $x$, quindi qui è $a-1$.

Per $a=1$ il coefficiente vale $1-1=0$. Il termine in $x$ scompare e il denominatore è il numero $3$, che è diverso da zero. Il dominio è quindi $\mathbb R$.

Per $a\ne1$ il valore di $x$ che annulla il denominatore si trova risolvendo l’**equazione** $(a-1)x+3=0$, cioè l’uguaglianza che chiede quando il denominatore vale zero. I **membri** di un’uguaglianza sono le due espressioni a sinistra e a destra del segno di uguale. Si sottrae $3$ da entrambi i membri e poi si dividono entrambi per $a-1$, che è diverso da zero.
$$
\begin{aligned}
(a-1)x+3&=0\\[6pt]
(a-1)x&=-3\\[6pt]
x&=-\frac{3}{a-1}.
\end{aligned}
$$
Questo è l’unico valore da escludere. Per esempio, per $a=4$ il denominatore è $3x+3$ e il valore escluso è $x=-\dfrac33=-1$. In $x=-1$ si annulla anche il numeratore $x+1$. Il valore $-1$ resta escluso, perché la condizione di esistenza dipende soltanto dal denominatore.

Il caso $a=1$ è trattato a parte perché la formula del valore escluso contiene la divisione per $a-1$, e per $a=1$ si dividerebbe per zero.
:::

## Semplificazione e uguaglianza sul dominio iniziale

::::teorema{#semplificare titolo="Semplificazione di un fattore comune"}
Una frazione numerica si semplifica dividendo numeratore e denominatore per un fattore comune:
$$
\frac{6}{10}=\frac{3\cdot2}{5\cdot2}=\frac35.
$$
Con i polinomi la regola è la stessa. Siano $A$, $B$ e $C$ tre polinomi. Il quoziente $\dfrac{A(x)C(x)}{B(x)C(x)}$ coincide con $\dfrac{A(x)}{B(x)}$ nei punti in cui $B(x)\ne0$ e $C(x)\ne0$.

Si conservano entrambe le condizioni quando si riscrive l’espressione. La condizione $C(x)\ne0$ non si legge più nella frazione semplificata, quindi si scrive accanto al risultato.

**Ridurre** una frazione algebrica significa semplificarla finché numeratore e denominatore non hanno più fattori comuni. La frazione ottenuta si dice *ridotta ai minimi termini*.

:::dimostrazione
Si fissa un valore di $x$ del dominio. I valori $A(x)$, $B(x)$ e $C(x)$ sono tre numeri, e $C(x)$ è diverso da zero. Per la proprietà invariantiva della divisione, un quoziente non cambia se si dividono il dividendo e il divisore per lo stesso numero diverso da zero. Si dividono quindi per $C(x)$ sia il numeratore sia il denominatore. Al numeratore rimane $A(x)$ e al denominatore rimane $B(x)$.
:::
::::

:::esempio{titolo="Una formula lineare con un punto escluso"}
La frazione $\dfrac{x^2-9}{x-3}$ ha condizione di esistenza $x\ne3$. Il numeratore $x^2-9$ è una differenza di quadrati, perché $9=3^2$, e si scrive $(x-3)(x+3)$. Pertanto
$$
\begin{aligned}
\frac{x^2-9}{x-3}&=\frac{(x-3)(x+3)}{x-3}\\[6pt]
&=x+3 \qquad (x\ne3).
\end{aligned}
$$
Il polinomio $x+3$ è **lineare**, cioè di primo grado, e il suo grafico è la retta $y=x+3$. In un grafico l’**ascissa** di un punto è la sua coordinata orizzontale $x$ e l’**ordinata** è la sua coordinata verticale $y$. Tutti i punti della retta appartengono al grafico della frazione tranne quello di ascissa $3$. La sua ordinata sulla retta sarebbe $3+3=6$, quindi nel punto $(3,6)$ si disegna un cerchio vuoto, che indica un punto escluso.

La forma $x+3$ è utile per calcolare i valori: in $x=4$ si ottiene $4+3=7$. Essa si usa soltanto per i valori del dominio iniziale, cioè per $x\ne3$.

::grafico{f="x+3" xmin=-4 xmax=7 ymin=-2 ymax=11 punti="3,6,vuoto" titolo="Il cerchio vuoto segnala l’esclusione del punto (3, 6)"}
:::

:::attenzione{titolo="La semplificazione riguarda i fattori"}
Un **addendo** è un termine di una somma, mentre un fattore è un termine di un prodotto. Nella frazione $\dfrac{x+3}{x}$, definita per $x\ne0$, il numeratore è la somma $x+3$. La lettera $x$ è un addendo del numeratore e non è un suo fattore. Perciò si divide ciascun addendo per $x$:
$$
\frac{x+3}{x}=\frac xx+\frac3x=1+\frac3x.
$$
In $x=2$ la frazione vale $\dfrac{2+3}{2}=\dfrac52$, e anche $1+\dfrac32$ vale $\dfrac52$. Cancellando il solo addendo $x$ al numeratore con la $x$ al denominatore resterebbe $3$, che è diverso da $\dfrac52$. Il controllo numerico distingue così la trasformazione corretta dalla cancellazione di un addendo.
:::

:::esempio{titolo="Un fattore cancellato e un fattore che rimane"}
Nella frazione $\dfrac{(x+4)(x-1)}{(x+4)(x+2)}$ il denominatore si annulla per $x=-4$ e per $x=-2$, quindi il dominio esclude $-4$ e $-2$. Per i valori ammessi si cancella il fattore comune $x+4$ e si ottiene $\dfrac{x-1}{x+2}$.

Le due esclusioni hanno effetti diversi.

- In $x=-4$ la formula semplificata fornisce il valore $\dfrac{-4-1}{-4+2}=\dfrac{-5}{-2}=\dfrac52$. La frazione iniziale resta indefinita in quel punto, perché lì il suo denominatore vale zero. Nel grafico il punto $\left(-4,\dfrac52\right)$ è un cerchio vuoto.
- In $x=-2$ il denominatore semplificato $x+2$ si annulla ancora, mentre il nuovo numeratore vale $-2-1=-3$. Nel grafico la retta verticale tratteggiata $x=-2$ separa la curva in due parti, dette **rami**.

Una retta tratteggiata del grafico è un **asintoto**, cioè una retta a cui la curva si avvicina senza toccarla. L’asintoto orizzontale $y=1$ indica il valore a cui si avvicina la frazione quando $x$ è molto grande, positivo o negativo: per esempio, per $x=100$ la frazione vale $\dfrac{99}{102}$, quasi $1$. L’esclusione di $-4$, indicata dal cerchio vuoto, resta soltanto nel dominio scritto accanto alla formula.

::grafico{f="(x-1)/(x+2)" xmin=-7 xmax=6 ymin=-4 ymax=6 asintoti="x=-2;y=1" punti="-4,2.5,vuoto" titolo="Il fattore cancellato lascia un punto vuoto in x = −4"}
:::

## Addizioni e sottrazioni

::::teorema{#somme titolo="Denominatore comune mediante fattori non nulli"}
Due frazioni numeriche con denominatori diversi si sommano dopo averle scritte con lo stesso denominatore, per esempio il prodotto dei due denominatori:
$$
\frac12+\frac13=\frac{1\cdot3}{2\cdot3}+\frac{1\cdot2}{3\cdot2}=\frac{3+2}{6}=\frac56.
$$
Con le frazioni algebriche si procede allo stesso modo. Siano $P$, $Q$, $R$ e $S$ polinomi. Nei punti in cui $Q(x)$ e $S(x)$ sono entrambi diversi da zero si ha
$$
\frac{P(x)}{Q(x)}\pm\frac{R(x)}{S(x)}
=\frac{P(x)S(x)\pm R(x)Q(x)}{Q(x)S(x)}.
$$
Il simbolo $\pm$ si legge «più o meno». La formula vale con il segno più in entrambi i membri oppure con il segno meno in entrambi.

Il prodotto $QS$ è un denominatore comune. Se $Q$ e $S$ hanno fattori comuni, si può scegliere un multiplo comune di grado minore, dove il **grado** di un polinomio è l’esponente più alto di $x$. Il denominatore comune di grado più basso è il **minimo comune multiplo** dei denominatori, abbreviato in mcm. Esso è il prodotto di tutti i fattori dei denominatori, comuni e non comuni, presi una sola volta con l’esponente più alto.

Un numero o un polinomio senza denominatore si scrive come frazione con il denominatore dell’altro termine. Per $x\ne4$,
$$
\frac{3x}{x-4}-3=\frac{3x}{x-4}-\frac{3(x-4)}{x-4}=\frac{3x-3x+12}{x-4}=\frac{12}{x-4}.
$$
Il segno meno davanti alla seconda frazione cambia il segno di tutti gli addendi del suo numeratore, quindi $-3(x-4)$ diventa $-3x+12$.

:::dimostrazione
Nel dominio $S(x)$ e $Q(x)$ sono diversi da zero, quindi $\dfrac{S(x)}{S(x)}=1$ e $\dfrac{Q(x)}{Q(x)}=1$. Moltiplicare un numero per $1$ non ne cambia il valore. Moltiplicando la prima frazione per $\dfrac{S(x)}{S(x)}$ e la seconda per $\dfrac{Q(x)}{Q(x)}$ si ottengono $\dfrac{P(x)S(x)}{Q(x)S(x)}$ e $\dfrac{R(x)Q(x)}{Q(x)S(x)}$, che hanno lo stesso denominatore. L’addizione o la sottrazione riguarda quindi i loro numeratori, ciascuno preso per intero.
:::
::::

:::esempio{titolo="Fattori comuni con molteplicità diversa"}
Per sommare $\dfrac{1}{(x-2)^2}$ e $\dfrac{2}{(x-2)(x+2)}$ si escludono $2$ e $-2$, che annullano i denominatori. La **molteplicità** di un fattore è il numero di volte in cui esso compare in un prodotto. Il primo denominatore contiene due copie di $x-2$ e il secondo una sola. Il denominatore comune di grado minimo contiene due copie di $x-2$ e una copia di $x+2$, quindi è $(x-2)^2(x+2)$.

Al primo denominatore manca il fattore $x+2$, quindi nella prima frazione si moltiplicano numeratore e denominatore per $x+2$. Al secondo manca una copia di $x-2$, quindi nella seconda si moltiplicano entrambi per $x-2$. Si ottiene
$$
\begin{aligned}
\frac{1}{(x-2)^2}+\frac{2}{(x-2)(x+2)}
&=\frac{(x+2)+2(x-2)}{(x-2)^2(x+2)}\\[6pt]
&=\frac{x+2+2x-4}{(x-2)^2(x+2)}\\[6pt]
&=\frac{3x-2}{(x-2)^2(x+2)}.
\end{aligned}
$$
Per $x=0$ i due addendi originali valgono $\dfrac{1}{(-2)^2}=\dfrac14$ e $\dfrac{2}{(-2)\cdot2}=-\dfrac12$, quindi la loro somma è $-\dfrac14$. Anche la frazione trasformata vale $\dfrac{-2}{4\cdot2}=-\dfrac14$.
:::

:::esempio{titolo="Denominatori opposti in una differenza"}
L’**opposto** di un’espressione si ottiene cambiando il segno di tutti i suoi addendi. L’opposto di $x-2$ è $-x+2$, cioè $2-x$, quindi $2-x=-(x-2)$. Perciò, per $x\ne2$, si ha
$$
\frac1{2-x}=\frac1{-(x-2)}=-\frac1{x-2}.
$$
Si sostituisce questa uguaglianza prima di eseguire la sottrazione. Sottrarre $-\dfrac1{x-2}$ equivale ad aggiungere $\dfrac1{x-2}$.
$$
\begin{aligned}
\frac1{x-2}-\frac1{2-x}
&=\frac1{x-2}+\frac1{x-2}\\[6pt]
&=\frac2{x-2}.
\end{aligned}
$$
Il grafico mostra che il risultato è negativo per $x<2$ e positivo per $x>2$. Infatti il numeratore vale $2$, mentre il denominatore $x-2$ cambia segno in $x=2$. Le due rette tratteggiate sono gli asintoti $x=2$ e $y=0$.

::grafico{f="2/(x-2)" xmin=-4 xmax=7 ymin=-5 ymax=5 asintoti="x=2;y=0" titolo="La differenza ha segno opposto nei due intervalli separati da x = 2"}
:::

:::attenzione{titolo="Un denominatore comune può introdurre un’esclusione"}
Nella somma $\dfrac1{x+1}+\dfrac1{x-1}$ i valori esclusi sono $-1$ e $1$. Il valore $0$ appartiene al dominio e in $x=0$ i due addendi valgono $1$ e $-1$, quindi la somma vale zero.

Usando $(x+1)(x-1)$ come denominatore comune, il numeratore è $(x-1)+(x+1)=2x$ e si ottiene $\dfrac{2x}{(x+1)(x-1)}$. Questa frazione si può valutare in $0$, dove vale $\dfrac{0}{-1}=0$.

Aggiungendo un fattore $x$ al denominatore comune si otterrebbe $\dfrac{2x^2}{x(x+1)(x-1)}$, che in $x=0$ ha denominatore zero. La nuova esclusione nasce dalla moltiplicazione per $\dfrac{x}{x}$, che vale uno soltanto per $x\ne0$. Un fattore aggiunto a numeratore e denominatore conserva il dominio soltanto se è diverso da zero in tutti i punti del dominio.
:::

## Prodotti e cancellazioni prima dello sviluppo

::::teorema{#prodotti titolo="Prodotto di due quozienti"}
Il prodotto di due frazioni numeriche ha per numeratore il prodotto dei numeratori e per denominatore il prodotto dei denominatori:
$$
\frac23\cdot\frac45=\frac{2\cdot4}{3\cdot5}=\frac{8}{15}.
$$
Per le frazioni algebriche, nei punti in cui $Q(x)\ne0$ e $S(x)\ne0$ si ha
$$
\frac{P(x)}{Q(x)}\cdot\frac{R(x)}{S(x)}
=\frac{P(x)R(x)}{Q(x)S(x)}.
$$
**Sviluppare** un prodotto di polinomi significa eseguire le moltiplicazioni, per esempio passare da $(x-2)(x+2)$ a $x^2-4$. I fattori comuni a un numeratore e a un denominatore si riconoscono quando i polinomi sono scomposti. Perciò si scompone e si semplifica prima di sviluppare.

:::dimostrazione
Si fissa un valore ammesso di $x$. L’**inverso** di un numero $n$ diverso da zero, detto anche **reciproco**, è il numero $\dfrac1n$, che moltiplicato per $n$ dà $1$. Dividere per $n$ equivale a moltiplicare per $\dfrac1n$. I due quozienti sono quindi i prodotti $P(x)\cdot\dfrac1{Q(x)}$ e $R(x)\cdot\dfrac1{S(x)}$.

Per le proprietà commutativa e associativa della moltiplicazione i quattro fattori si riordinano in $P(x)R(x)\cdot\dfrac1{Q(x)}\cdot\dfrac1{S(x)}$. Il prodotto dei due inversi è l’inverso di $Q(x)S(x)$, perché moltiplicato per $Q(x)S(x)$ dà $1$. Si ottiene quindi $P(x)R(x)$ diviso per $Q(x)S(x)$, cioè la formula.
:::
::::

:::esempio{titolo="Un prodotto costante con due punti esclusi"}
Nel prodotto $\dfrac{x-2}{x+2}\cdot\dfrac{x+2}{x-2}$ la prima frazione esclude $-2$ e la seconda esclude $2$. Una volta stabilito il dominio, il prodotto è $\dfrac{(x-2)(x+2)}{(x+2)(x-2)}$. Entrambi i fattori $x-2$ e $x+2$ si possono cancellare, quindi il risultato vale $1$ in ogni punto ammesso. Un risultato che non dipende da $x$ si dice *costante*.

I due punti esclusi provengono da frazioni diverse e restano entrambi esclusi nel prodotto. Il grafico è la retta orizzontale di altezza $1$ con due cerchi vuoti, nei punti $(-2,1)$ e $(2,1)$.

::grafico{f="1" xmin=-5 xmax=5 ymin=-1 ymax=3 punti="-2,1,vuoto;2,1,vuoto" titolo="Il prodotto vale 1 in tutti i punti ammessi e ha due esclusioni"}
:::

:::esempio{titolo="Cancellazioni parziali tra fattori ripetuti"}
I denominatori $x-1$ e $3x$ si annullano per $x=1$ e per $x=0$. Con $x\ne0$ e $x\ne1$ si calcola
$$
\begin{aligned}
\frac{x^2}{x-1}\cdot\frac{(x-1)^2}{3x}
&=\frac{x^2(x-1)^2}{3x(x-1)}\\[6pt]
&=\frac{x(x-1)}{3}.
\end{aligned}
$$
Il denominatore contiene una sola copia di $x$, quindi dal fattore $x^2$ si cancella una copia di $x$ e l’altra rimane al numeratore. Allo stesso modo, una copia di $x-1$ rimane al numeratore.

In $x=3$ il prodotto iniziale vale $\dfrac92\cdot\dfrac49=2$ e il risultato vale $\dfrac{3\cdot2}{3}=2$. Il calcolo si controlla quindi anche senza cancellare prima.
:::

:::esempio{titolo="Il segno di un fattore scritto in ordine opposto"}
Nella frazione $\dfrac{-3(x-2)^2}{6(2-x)(x+4)}$ si escludono $2$ e $-4$, che annullano il denominatore. Il fattore $2-x$ è l’opposto di $x-2$ e si riscrive come $-(x-2)$. Il segno meno passa così al coefficiente del denominatore, che da $6$ diventa $-6$. Si cancella poi una copia di $x-2$. Il rapporto dei coefficienti è $\dfrac{-3}{-6}=\dfrac12$.
$$
\begin{aligned}
\frac{-3(x-2)^2}{6(2-x)(x+4)}
&=\frac{-3(x-2)^2}{-6(x-2)(x+4)}\\[6pt]
&=\frac{x-2}{2(x+4)}.
\end{aligned}
$$
In $x=0$ la forma iniziale vale $-\dfrac{12}{48}=-\dfrac14$. La forma finale vale $\dfrac{-2}{2\cdot4}=-\dfrac14$, cioè lo stesso numero. Con un segno meno dimenticato si otterrebbe $-\dfrac{x-2}{2(x+4)}$, che in $x=0$ vale $\dfrac14$, perciò il controllo numerico segnala l’errore.

Il valore $2$ resta escluso, anche se annulla soltanto il numeratore della forma ottenuta.
:::

## Divisioni fra frazioni algebriche

::::teorema{#divisioni titolo="Il divisore è definito e diverso da zero"}
In una divisione il primo termine è il **dividendo** e il secondo è il **divisore**. Il **reciproco** di una frazione diversa da zero si ottiene scambiando numeratore e denominatore. Dividere per una frazione equivale a moltiplicare per il suo reciproco:
$$
\frac23:\frac45=\frac23\cdot\frac54=\frac{10}{12}=\frac56.
$$
Per dividere $\dfrac{P(x)}{Q(x)}$ per $\dfrac{R(x)}{S(x)}$ occorre che $Q(x)$, $S(x)$ e $R(x)$ siano tutti diversi da zero. Le prime due condizioni assicurano che le due frazioni esistano. La condizione $R(x)\ne0$ assicura che il divisore sia diverso da zero, perché una frazione vale zero quando si annulla il suo numeratore. Nel dominio la divisione si scrive
$$
\frac{P(x)}{Q(x)}:\frac{R(x)}{S(x)}
=\frac{P(x)}{Q(x)}\cdot\frac{S(x)}{R(x)}.
$$

:::dimostrazione
Nel dominio $R(x)$ e $S(x)$ sono diversi da zero, quindi le frazioni $\dfrac{R(x)}{S(x)}$ e $\dfrac{S(x)}{R(x)}$ sono entrambe definite. Il loro prodotto è $\dfrac{R(x)S(x)}{S(x)R(x)}$, che è uguale a uno. Il secondo fattore è quindi l’inverso del divisore. Dividere per un numero equivale a moltiplicare per il suo inverso, perciò moltiplicare il dividendo per $\dfrac{S(x)}{R(x)}$ dà il quoziente.
:::
::::

:::esempio{titolo="Due cause diverse di esclusione"}
Nel quoziente $\dfrac1{x+3}:\dfrac{x-1}{x+3}$ i denominatori escludono $-3$. In $x=1$ le due frazioni sono definite, ma il divisore vale $\dfrac{0}{4}=0$, quindi anche $1$ è escluso. Il dominio è $\mathbb R\setminus\{-3,1\}$. Nel dominio si moltiplica per il reciproco del divisore e si cancella $x+3$:
$$
\frac1{x+3}:\frac{x-1}{x+3}=\frac1{x+3}\cdot\frac{x+3}{x-1}=\frac1{x-1}.
$$
L’esclusione di $1$ si legge ancora nel nuovo denominatore. L’esclusione di $-3$ non si legge più nella formula, quindi il dominio si scrive accanto al risultato. Nel grafico essa è il cerchio vuoto di ascissa $-3$ e ordinata $\dfrac{1}{-3-1}=-\dfrac14$.

::grafico{f="1/(x-1)" xmin=-6 xmax=6 ymin=-3 ymax=3 asintoti="x=1;y=0" punti="-3,-0.25,vuoto" titolo="Una divisione può produrre un punto escluso in un ramo del grafico"}
:::

:::esempio{titolo="L’ordine delle frazioni cambia anche il dominio"}
Siano $A=\dfrac{x-2}{x-1}$ e $B=\dfrac{x+2}{x-1}$. Entrambe le frazioni richiedono $x\ne1$.

- Nel quoziente $A:B$ il divisore è $B$, che si annulla per $x=-2$. Occorre quindi anche $x\ne-2$.
- Nel quoziente $B:A$ il divisore è $A$, che si annulla per $x=2$. Occorre quindi anche $x\ne2$.

I due quozienti hanno perciò domini diversi. In $x=2$ si ha $A=\dfrac01=0$ e $B=\dfrac41=4$, quindi il primo quoziente vale $0:4=0$. Nella divisione in ordine opposto lo stesso zero è il divisore, quindi il secondo quoziente è indefinito in quel punto.
:::

## Valori numerici, zeri e segno

:::esempio{#valori titolo="Valore numerico e zero della frazione"}
Il **valore numerico** di una frazione algebrica in un numero è il risultato che si ottiene sostituendo quel numero a $x$. Per valutare $\dfrac{x+1}{x-3}$ in $x=5$ si calcola prima il denominatore, che vale $5-3=2$. La sostituzione è dunque ammessa e il risultato è $\dfrac{5+1}{2}=\dfrac62=3$. Quando la frazione ha un nome, per esempio $f(x)=\dfrac{x+1}{x-3}$, questo valore si indica con $f(5)$.

Uno **zero della frazione** è un valore ammesso di $x$ in cui la frazione vale zero. Un quoziente vale zero quando il numeratore è zero e il denominatore è diverso da zero. Per trovare gli zeri di $\dfrac{x-4}{x+1}$ si risolve quindi $x-4=0$, che dà $x=4$. In $x=4$ il denominatore vale $4+1=5$, quindi $4$ è uno zero della frazione.

La stessa procedura distingue gli zeri dai punti esclusi. Per $\dfrac{(x-4)^2}{x-4}$ l’unico zero del numeratore è $4$. In quel punto si annulla anche il denominatore, quindi $4$ è un valore escluso e la frazione resta priva di zeri.

Nel grafico di $\dfrac{x-4}{x+1}$ lo zero è il punto pieno $(4,0)$ e l’asintoto verticale è la retta $x=-1$.

::grafico{f="(x-4)/(x+1)" xmin=-6 xmax=8 ymin=-5 ymax=6 asintoti="x=-1" punti="4,0,pieno" titolo="Lo zero della frazione ha ascissa 4, mentre l’ascissa −1 è esclusa"}
:::

:::esempio{#segno titolo="Un denominatore quadrato conserva il segno del numeratore"}
Studiare il **segno** di una frazione significa stabilire per quali valori di $x$ essa è positiva, negativa o uguale a zero. Il quadrato di un numero diverso da zero è positivo, quindi per $x\ne-1$ il denominatore $(x+1)^2$ è positivo. Dividere per un numero positivo non cambia il segno. Il segno di $\dfrac{x-2}{(x+1)^2}$ è quindi il segno di $x-2$.

L’**intervallo** $(a,b)$ è l’insieme dei numeri compresi fra $a$ e $b$, estremi esclusi. I simboli $-\infty$ e $+\infty$ si leggono «meno infinito» e «più infinito» e indicano che l’intervallo prosegue senza fine da quel lato. La frazione è negativa nei due intervalli $(-\infty,-1)$ e $(-1,2)$, vale zero in $2$ ed è positiva nell’intervallo $(2,+\infty)$.

I valori minori di $2$ sono divisi in due intervalli perché $-1$ è escluso dal dominio. L’insieme in cui la frazione è negativa si scrive anche $(-\infty,-1)\cup(-1,2)$, dove il simbolo $\cup$ si legge «unito a». Nel grafico la curva sta sotto l’asse orizzontale da entrambi i lati dell’asintoto $x=-1$.

::grafico{f="(x-2)/(x+1)^2" xmin=-6 xmax=7 ymin=-6 ymax=2 asintoti="x=-1" punti="2,0,pieno" titolo="Il fattore quadrato al denominatore lascia invariato il segno nei punti ammessi"}
:::

:::esempio{titolo="Una tabella dei segni con numeratore e denominatore lineari"}
Nella frazione $\dfrac{x-1}{x+2}$ il numeratore si annulla per $x=1$ e il denominatore per $x=-2$. I valori $-2$ e $1$ dividono la retta in tre intervalli. Il fattore lineare $x-1$ è negativo per $x<1$ e positivo per $x>1$. Il fattore lineare $x+2$ è negativo per $x<-2$ e positivo per $x>-2$. In ciascun intervallo si conosce quindi il segno dei due fattori, perché nessuno dei due si annulla all’interno.

Il quoziente di due numeri con lo stesso segno è positivo e il quoziente di due numeri con segni diversi è negativo. Per esempio, se $-2<x<1$ allora $x-1$ è negativo e $x+2$ è positivo, quindi il rapporto è negativo.

| Intervallo | $x-1$ | $x+2$ | Quoziente |
|---|---|---|---|
| $x<-2$ | $-$ | $-$ | $+$ |
| $-2<x<1$ | $-$ | $+$ | $-$ |
| $x>1$ | $+$ | $+$ | $+$ |

Negli estremi degli intervalli si usano le condizioni iniziali. In $x=-2$ il denominatore è zero, quindi il valore è escluso e il quoziente non esiste. In $x=1$ si annulla soltanto il numeratore, quindi il quoziente vale zero.
:::

## Riconoscere frazioni equivalenti

::::teorema{#equivalenza titolo="Confronto mediante i prodotti incrociati"}
Due frazioni numeriche sono uguali quando sono uguali i **prodotti incrociati**, cioè il prodotto del numeratore di ciascuna per il denominatore dell’altra. Per esempio $\dfrac23=\dfrac46$, e infatti $2\cdot6=12$ e $4\cdot3=12$.

Il **dominio comune** di due frazioni algebriche è l’insieme dei valori di $x$ in cui sono definite entrambe. Nel dominio comune delle frazioni $\dfrac{P(x)}{Q(x)}$ e $\dfrac{R(x)}{S(x)}$ i due valori sono uguali se e solo se vale $P(x)S(x)=R(x)Q(x)$. L’espressione «se e solo se» indica che ciascuna delle due uguaglianze ha come conseguenza l’altra.

Se l’uguaglianza dei prodotti vale per ogni $x$ del dominio comune, le frazioni coincidono in tutti quei punti. Una **funzione** è una regola che a ogni valore ammesso di $x$ associa un solo numero. Per descrivere la stessa funzione le due frazioni devono avere anche lo stesso dominio.

:::dimostrazione
Si parte dall’uguaglianza delle due frazioni e si moltiplicano i due membri per $Q(x)S(x)$. Nel primo membro resta $P(x)S(x)$ e nel secondo resta $R(x)Q(x)$.

In senso inverso si parte dall’uguaglianza dei prodotti. Il prodotto $Q(x)S(x)$ è diverso da zero nel dominio comune. Si dividono quindi i due membri per quel numero e si ritrova l’uguaglianza dei due quozienti.
:::
::::

:::esempio{titolo="Quozienti uguali sul dominio comune, esclusioni diverse"}
La frazione $\dfrac{x+2}{x^2-4}$ ha denominatore $(x-2)(x+2)$ ed è definita per $x\ne2$ e $x\ne-2$. La frazione $\dfrac1{x-2}$ è definita per $x\ne2$. I prodotti incrociati sono $(x+2)(x-2)=x^2-4$ e $1\cdot(x^2-4)$, che sono uguali per ogni $x$. Le due frazioni coincidono quindi nel dominio comune, cioè per $x\ne2,-2$.

Nella prima frazione il numeratore e il denominatore condividono il fattore $x+2$. La formula semplificata è definita anche in $x=-2$, dove vale $\dfrac{1}{-2-2}=-\dfrac14$, mentre la prima frazione in quel punto è indefinita. Le due frazioni rappresentano perciò funzioni con domini diversi, benché il calcolo dia valori uguali in tutti i punti in comune. Il grafico della prima frazione è la curva di $\dfrac1{x-2}$ con il cerchio vuoto di ascissa $-2$.

::grafico{f="1/(x-2)" xmin=-6 xmax=7 ymin=-3 ymax=3 asintoti="x=2;y=0" punti="-2,-0.25,vuoto" titolo="La formula semplificata conserva il punto escluso dall’espressione di partenza"}
:::

:::esempio{titolo="Un’equazione che produce un candidato escluso"}
Una **soluzione** di un’equazione è un valore di $x$ che rende vera l’uguaglianza. Nell’equazione
$$
\frac{x+1}{x-2}=\frac{3}{x-2}
$$
il dominio comune è $x\ne2$. Per ogni valore del dominio il numero $x-2$ è diverso da zero, quindi si possono moltiplicare i due membri per $x-2$. Si ottiene $x+1=3$, da cui $x=3-1=2$. L’unico candidato è $x=2$. In quel punto le frazioni sono indefinite, perciò $2$ non è una soluzione. L’equazione è **impossibile**, cioè il suo insieme delle soluzioni è vuoto.

Si ottiene lo stesso esito studiando la differenza dei due membri. Il suo numeratore è $(x+1)-3=x-2$, quindi la differenza è $\dfrac{x-2}{x-2}$ e vale $1$ in tutto il dominio. I due membri sono uguali soltanto dove la differenza vale zero, e questo non accade in alcun punto.

Il primo metodo trova un candidato e controlla se è ammesso. Il secondo confronta direttamente i valori nel dominio in cui l’equazione ha senso.
:::

## Frazioni sovrapposte e applicazioni

:::esempio{#composte titolo="Dominio di una frazione sovrapposta"}
Una frazione **sovrapposta** ha altre frazioni al numeratore o al denominatore. Nell’espressione $\dfrac{1-\dfrac1x}{1+\dfrac1x}$ entrambe le frazioni interne $\dfrac1x$ richiedono $x\ne0$. Il numeratore e il denominatore complessivi si riscrivono come una sola frazione, usando $1=\dfrac xx$:
$$
1-\frac1x=\frac{x-1}{x},\qquad 1+\frac1x=\frac{x+1}{x}.
$$
Il denominatore complessivo $\dfrac{x+1}{x}$ è il divisore, quindi si richiede che sia diverso da zero. Esso si annulla quando si annulla il suo numeratore, perciò si esclude anche $x=-1$. Le condizioni sono
$$
\begin{cases}
x\ne0\\
x\ne-1
\end{cases}
$$
Nei punti ammessi si moltiplica il numeratore complessivo per il reciproco del divisore. La scrittura diventa
$$
\begin{aligned}
\frac{1-\frac1x}{1+\frac1x}
&=\frac{x-1}{x}\cdot\frac{x}{x+1}\\[6pt]
&=\frac{x-1}{x+1}.
\end{aligned}
$$
La verifica del dominio precede la cancellazione di $x$. Per $x=2$ il quoziente originale è $\dfrac{\frac12}{\frac32}$, cioè $\dfrac12\cdot\dfrac23=\dfrac13$, e la frazione finale restituisce lo stesso numero.
:::

:::esempio{#modello titolo="Una formula con un dominio legato al problema"}
Una ciclista percorre $18\,\mathrm{km}$ a velocità costante $v$, espressa in chilometri all’ora ($\mathrm{km/h}$). La durata di un viaggio si ottiene dividendo la distanza per la velocità, quindi il viaggio dura $t=\dfrac{18}{v}$ ore. Il quoziente è algebricamente definito per $v\ne0$. In questo problema $v$ rappresenta il valore positivo della velocità, quindi si studia soltanto il tratto con $v>0$.

Per $v=9$ si ottiene $t=\dfrac{18}{9}=2$, mentre per $v=18$ si ottiene $t=\dfrac{18}{18}=1$. Raddoppiare la velocità dimezza il tempo, perché $\dfrac{18}{2v}$ è la metà di $\dfrac{18}{v}$. Nel grafico l’asse orizzontale riporta $v$, l’asse verticale riporta $t$ e i due punti pieni sono $(9,2)$ e $(18,1)$.

::grafico{f="18/x" xmin=4 xmax=22 ymin=0 ymax=6 nomi="v,t" punti="9,2,pieno;18,1,pieno" titolo="Sul dominio del problema contano le velocità positive"}
:::

:::esempio{titolo="Da un’area alla misura del lato"}
Un’aiuola rettangolare ha area $24\,\mathrm{m^2}$, cioè $24$ metri quadrati. La lunghezza di un lato è $x-1$ metri, mentre $b$ indica la lunghezza dell’altro lato in metri. L’area di un rettangolo è il prodotto dei due lati, quindi $(x-1)b=24$. Dividendo i due membri per $x-1$ si ottiene $b=\dfrac{24}{x-1}$. La condizione algebrica è $x\ne1$.

Poiché $x-1$ rappresenta la misura di un lato, che è un numero positivo, nel problema deve valere $x>1$. Il valore $x=0$ darebbe $x-1=-1$ e $b=-24$. L’equazione iniziale sarebbe soddisfatta, perché $(-1)\cdot(-24)=24$, ma le due lunghezze sarebbero negative. Per $x=5$ i lati misurano $4$ e $6$ metri e il loro prodotto restituisce l’area data.
:::
