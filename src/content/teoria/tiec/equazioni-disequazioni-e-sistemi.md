---
titolo: Equazioni, disequazioni e sistemi
sommario: Come si risolvono le equazioni e le disequazioni di primo e di secondo grado, intere e fratte, i sistemi di equazioni e di disequazioni e i problemi che si traducono in equazioni, con i metodi rapidi per i quesiti del TIEC.
---

## Equazioni di primo grado

:::definizione{#equazione titolo="Equazione e soluzione"}
Un'**equazione** è un'uguaglianza tra due espressioni che contengono una lettera incognita, di solito $x$. Una **soluzione** è un numero che, sostituito al posto di $x$, rende vera l'uguaglianza. Risolvere un'equazione significa trovare tutte le sue soluzioni. Il numero $3$ è soluzione di $2x + 1 = 7$, perché $2 \cdot 3 + 1 = 7$; il numero $2$ non lo è, perché $2 \cdot 2 + 1 = 5$. La sostituzione serve anche a controllare in pochi secondi le opzioni di un quiz.
:::

:::teorema{#principi-di-equivalenza titolo="Principi di equivalenza"}
Due equazioni sono **equivalenti** se hanno le stesse soluzioni. Si ottiene un'equazione equivalente in due modi:
- aggiungendo o togliendo la stessa espressione a entrambi i membri;
- moltiplicando o dividendo entrambi i membri per lo stesso numero diverso da zero.

I due principi valgono perché un'uguaglianza vera resta vera se si esegue la stessa operazione sui due lati. Dal primo principio segue il **trasporto**: un termine passa da un membro all'altro cambiando segno. In $3x - 2 = x + 4$ si porta $x$ a sinistra e $-2$ a destra, quindi $2x = 6$; dividendo per $2$ si ottiene $x = 3$.

::grafico{f="3*x-2;x+4" punti="3,7,pieno" segmenti="3,0,3,7" xmin=-2 xmax=6 ymin=-4 ymax=12 legenda="y = 3x - 2;y = x + 4" titolo="I due membri di $3x - 2 = x + 4$ hanno lo stesso valore nel punto in cui le due rette si incontrano, cioè per $x = 3$, dove entrambi valgono $7$"}

:::

:::teorema{#equazione-primo-grado titolo="Equazione di primo grado ax = b"}
Ogni equazione di primo grado si riduce con i principi di equivalenza alla forma $ax = b$.
- Se $a \neq 0$, l'equazione è **determinata** e ha la sola soluzione $x = \dfrac{b}{a}$.
- Se $a = 0$ e $b \neq 0$, l'equazione è **impossibile**, perché $0 \cdot x$ vale $0$ per ogni $x$.
- Se $a = 0$ e $b = 0$, l'equazione è **indeterminata** e ogni numero reale è soluzione.

L'equazione $2(x - 1) = 2x + 3$ diventa $0 \cdot x = 5$, quindi è impossibile. L'equazione $3(x + 2) = 3x + 6$ diventa $0 \cdot x = 0$, quindi è indeterminata.
:::

:::definizione{#equazioni-fratte titolo="Equazioni fratte e condizioni di esistenza"}
Un'equazione è **fratta** quando l'incognita compare in un denominatore. Poiché la divisione per zero non è definita, prima di risolvere si scrivono le **condizioni di esistenza** (C.E.), cioè si impone che ogni denominatore sia diverso da zero. Poi si moltiplicano i due membri per il denominatore comune, si risolve l'equazione intera che si ottiene e si scartano le soluzioni che non soddisfano le condizioni di esistenza. Per $\dfrac{2}{x} = \dfrac{3}{x + 1}$ le condizioni sono
$$
\begin{cases}
x \neq 0 \\
x \neq -1
\end{cases}
$$
e, moltiplicando per $x(x + 1)$, si ottiene $2(x + 1) = 3x$, quindi $x = 2$, che soddisfa le condizioni ed è la soluzione.
:::

:::attenzione
Senza le condizioni di esistenza si accettano soluzioni che non lo sono. In $\dfrac{x + 2}{x - 1} = \dfrac{3}{x - 1}$, eliminando i denominatori, si ottiene $x + 2 = 3$, cioè $x = 1$. Per $x = 1$ però i denominatori valgono zero, quindi $x = 1$ va scartato e l'equazione è **impossibile**.
:::

## Equazioni di secondo grado

:::definizione{#discriminante titolo="Equazione di secondo grado e discriminante"}
Un'equazione di secondo grado in forma normale è $ax^2 + bx + c = 0$, con $a \neq 0$. Il numero
$$
\Delta = b^2 - 4ac
$$
si chiama **discriminante** e stabilisce quante soluzioni reali ha l'equazione:
- se $\Delta > 0$, ci sono due soluzioni reali distinte;
- se $\Delta = 0$, ci sono due soluzioni coincidenti, cioè una sola soluzione, detta doppia;
- se $\Delta < 0$, non ci sono soluzioni reali.

Le soluzioni sono le ascisse dei punti in cui la parabola $y = ax^2 + bx + c$ incontra l'asse $x$. Per $x^2 - 2x + 3 = 0$ si ha $\Delta = 4 - 12 = -8 < 0$, quindi l'equazione non ha soluzioni reali e la parabola non incontra l'asse $x$.

::grafico{f="x^2-2*x-3;x^2-2*x+1;x^2-2*x+3" punti="-1,0,pieno;3,0,pieno;1,0,pieno" xmin=-3 xmax=5 ymin=-5 ymax=10 legenda="y = x^2 - 2x - 3;y = x^2 - 2x + 1;y = x^2 - 2x + 3" titolo="Per $x^2 - 2x - 3$ si ha $\Delta = 16$ e la parabola taglia l'asse $x$ in $-1$ e $3$; per $x^2 - 2x + 1$ si ha $\Delta = 0$ e la parabola tocca l'asse in $1$; per $x^2 - 2x + 3$ si ha $\Delta = -8$ e la parabola non incontra l'asse"}

:::

::::teorema{#formula-risolutiva titolo="Formula risolutiva"}
Se $a \neq 0$ e $\Delta = b^2 - 4ac \geq 0$, le soluzioni di $ax^2 + bx + c = 0$ sono
$$
x_{1,2} = \frac{-b \pm \sqrt{\Delta}}{2a} .
$$
Per $2x^2 - 3x - 2 = 0$ si ha $\Delta = 9 + 16 = 25$, quindi $x = \dfrac{3 \pm 5}{4}$, cioè $x_1 = -\dfrac{1}{2}$ e $x_2 = 2$.

:::dimostrazione
L'idea è scrivere il primo membro come un quadrato. Moltiplicando per $4a$ si ottiene $4a^2x^2 + 4abx + 4ac = 0$. Aggiungendo $b^2$ ai due membri e portando $4ac$ a destra si ha $(2ax + b)^2 = b^2 - 4ac$. Se $\Delta \geq 0$, allora $2ax + b = \pm\sqrt{\Delta}$, e ricavando $x$ si ottiene la formula.
:::
::::

:::teorema{#formula-ridotta titolo="Formula ridotta"}
Se il coefficiente $b$ è pari, le soluzioni si calcolano anche con
$$
x_{1,2} = \frac{-\frac{b}{2} \pm \sqrt{\frac{\Delta}{4}}}{a},
\qquad
\frac{\Delta}{4} = \left(\frac{b}{2}\right)^2 - ac .
$$
La formula si ottiene dividendo per $2$ il numeratore e il denominatore della formula risolutiva, e serve a lavorare con numeri più piccoli. Per $x^2 - 6x + 7 = 0$ si ha $\dfrac{\Delta}{4} = 9 - 7 = 2$, quindi $x = 3 \pm \sqrt{2}$.
:::

:::teorema{#somma-e-prodotto titolo="Somma e prodotto delle soluzioni"}
Se $ax^2 + bx + c = 0$ ha soluzioni reali $x_1$ e $x_2$, anche coincidenti, allora
$$
x_1 + x_2 = -\frac{b}{a},
\qquad
x_1 \cdot x_2 = \frac{c}{a} .
$$
Le due relazioni seguono sommando e moltiplicando le due espressioni della formula risolutiva. Quando $a = 1$ permettono di trovare le soluzioni a mente: per $x^2 - 7x + 10 = 0$ si cercano due numeri con somma $7$ e prodotto $10$, cioè $2$ e $5$. Permettono anche di rispondere ai quiz che chiedono la somma o il prodotto delle soluzioni senza calcolarle: per $3x^2 - 12x + 5 = 0$ si ha $\Delta = 144 - 60 > 0$, quindi la somma delle soluzioni è $4$ e il prodotto è $\dfrac{5}{3}$.
:::

:::attenzione
Le due relazioni richiedono che le soluzioni reali esistano. L'equazione $x^2 + 2x + 5 = 0$ ha $\Delta = 4 - 20 < 0$, quindi non ha soluzioni reali, anche se il numero $-\dfrac{b}{a} = -2$ si può calcolare.
:::

:::teorema{#equazioni-pure-e-spurie titolo="Equazioni pure e spurie"}
Quando manca un coefficiente, la formula risolutiva non serve.
- Equazione **spuria** ($c = 0$): $ax^2 + bx = 0$ si scompone in $x(ax + b) = 0$. Un prodotto è zero se e solo se è zero almeno un fattore (**legge di annullamento del prodotto**), quindi $x = 0$ oppure $x = -\dfrac{b}{a}$. Per $3x^2 - 6x = 0$ le soluzioni sono $0$ e $2$.
- Equazione **pura** ($b = 0$): $ax^2 + c = 0$ diventa $x^2 = -\dfrac{c}{a}$. Se $-\dfrac{c}{a} > 0$, le soluzioni sono $x = \pm\sqrt{-\dfrac{c}{a}}$; se $-\dfrac{c}{a} < 0$, non ci sono soluzioni reali. Per $2x^2 - 18 = 0$ si ha $x^2 = 9$, quindi $x = \pm 3$; l'equazione $x^2 + 4 = 0$ non ha soluzioni reali.
:::

:::attenzione
Nell'equazione spuria i due membri non si dividono per $x$, perché la divisione è lecita solo per $x \neq 0$ e fa perdere la soluzione $x = 0$. Dividendo $3x^2 = 6x$ per $x$ si ottiene soltanto $x = 2$.
:::

## Equazioni fratte di secondo grado

:::teorema{#fratte-secondo-grado titolo="Equazioni fratte che si riducono al secondo grado"}
Il metodo è quello delle equazioni fratte di primo grado: condizioni di esistenza, denominatore comune, equazione intera, confronto delle soluzioni con le condizioni. Spesso l'equazione intera è di secondo grado e una delle sue soluzioni annulla un denominatore. Per trovare il denominatore comune si scompongono i denominatori, per esempio $x^2 - 4 = (x - 2)(x + 2)$; le scomposizioni sono trattate nel capitolo sul calcolo letterale e le frazioni algebriche.
:::

:::esempio{titolo="Una soluzione accettabile e una da scartare"}
Si risolve
$$
\frac{x}{x - 1} - \frac{2}{x + 1} = \frac{4}{x^2 - 1} .
$$
Poiché $x^2 - 1 = (x - 1)(x + 1)$, le condizioni di esistenza sono
$$
\begin{cases}
x \neq 1 \\
x \neq -1
\end{cases}
$$
Moltiplicando i due membri per $(x - 1)(x + 1)$ si ottiene
$$
x(x + 1) - 2(x - 1) = 4 ,
$$
cioè $x^2 - x - 2 = 0$, che ha soluzioni $x = 2$ e $x = -1$. La soluzione $x = -1$ non soddisfa le condizioni di esistenza, quindi l'equazione ha la **sola soluzione** $x = 2$.
:::

## Disequazioni di primo grado

:::definizione{#disequazione titolo="Disequazione e insieme delle soluzioni"}
Una **disequazione** è una disuguaglianza ($<$, $\leq$, $>$, $\geq$) tra due espressioni che contengono un'incognita. Di solito le soluzioni sono infinite e formano un intervallo o un'unione di intervalli. Le soluzioni di $x - 2 > 0$ sono i numeri maggiori di $2$, che si scrivono $x > 2$ oppure $(2, +\infty)$. Nella scrittura con gli intervalli il simbolo $($ o $)$ indica un estremo escluso e il simbolo $[$ o $]$ un estremo incluso, quindi $x \leq 5$ si scrive $(-\infty, 5]$.
:::

:::teorema{#principi-disequazioni titolo="Principi di equivalenza per le disequazioni"}
- Aggiungendo o togliendo la stessa espressione ai due membri, le soluzioni non cambiano.
- Moltiplicando o dividendo i due membri per un numero positivo, il verso resta lo stesso.
- Moltiplicando o dividendo i due membri per un numero negativo, il verso **si inverte**.

L'ultima regola vale perché il cambio di segno scambia l'ordine dei numeri, per esempio $2 < 5$ mentre $-2 > -5$. Per $6 - 3x \geq 0$ si ha $-3x \geq -6$; dividendo per $-3$ il verso si inverte, quindi $x \leq 2$.

::grafico{f="6-3*x" area="6-3*x;0;-1;2" punti="2,0,pieno" xmin=-2 xmax=5 ymin=-6 ymax=10 legenda="y = 6 - 3x" titolo="La retta $y = 6 - 3x$ sta sopra l'asse $x$, o lo tocca, per $x \leq 2$: sono le soluzioni di $6 - 3x \geq 0$"}

:::

:::attenzione
Dividendo per un numero negativo senza invertire il verso si ottiene un insieme sbagliato. Da $-2x < 8$ si ricava $x > -4$, mentre $x < -4$ è falso, perché per $x = -5$ si ha $-2 \cdot (-5) = 10$, che non è minore di $8$. Sostituire un numero dell'insieme trovato è un controllo rapido.
:::

## Disequazioni di secondo grado

:::teorema{#segno-trinomio titolo="Segno del trinomio di secondo grado"}
Il segno di $ax^2 + bx + c$ con $a > 0$ si legge sul grafico della parabola $y = ax^2 + bx + c$, che ha la concavità rivolta verso l'alto.
- Se $\Delta > 0$ e $x_1 < x_2$ sono le soluzioni dell'equazione associata, il trinomio è positivo per $x < x_1 \;\vee\; x > x_2$ (valori **esterni**) e negativo per $x_1 < x < x_2$ (valori **interni**).
- Se $\Delta = 0$ e $x_1$ è la soluzione doppia, il trinomio è positivo per ogni $x \neq x_1$ e vale zero in $x_1$.
- Se $\Delta < 0$, il trinomio è positivo per ogni $x$ reale.

Quando $a < 0$ si moltiplicano i due membri per $-1$, invertendo il verso, e ci si riporta al caso $a > 0$. Per risolvere una disequazione di secondo grado basta quindi trovare le soluzioni dell'equazione associata e scegliere i valori interni o esterni.
:::

:::esempio{titolo="I tre casi"}
- $x^2 - x - 6 > 0$: l'equazione associata ha soluzioni $-2$ e $3$, e si cercano i valori in cui il trinomio è positivo, quindi $x < -2 \;\vee\; x > 3$. La disequazione $x^2 - x - 6 \leq 0$ ha invece soluzioni $-2 \leq x \leq 3$.
- $-x^2 + 4x - 4 < 0$: moltiplicando per $-1$ si ottiene $x^2 - 4x + 4 > 0$, cioè $(x - 2)^2 > 0$, vera per ogni $x \neq 2$.
- $x^2 + x + 1 > 0$: si ha $\Delta = 1 - 4 < 0$, quindi è vera per ogni $x$ reale, mentre $x^2 + x + 1 \leq 0$ non ha soluzioni.

::grafico{f="x^2-x-6" area="x^2-x-6;0;-4;-2|x^2-x-6;0;3;5" punti="-2,0,vuoto;3,0,vuoto" xmin=-4 xmax=5 ymin=-8 ymax=14 legenda="y = x^2 - x - 6" titolo="La parabola $y = x^2 - x - 6$ sta sopra l'asse $x$ per $x < -2$ e per $x > 3$: sono le soluzioni di $x^2 - x - 6 > 0$"}

:::

:::attenzione
La disequazione $x^2 > 9$ ha soluzioni $x < -3 \;\vee\; x > 3$. Scrivere soltanto $x > 3$ fa perdere i valori negativi; infatti per $x = -4$ si ha $16 > 9$, quindi anche $-4$ è una soluzione.
:::

## Disequazioni prodotto e fratte

:::teorema{#disequazioni-prodotto titolo="Disequazioni prodotto e tabella dei segni"}
Una disequazione come $A(x) \cdot B(x) > 0$, in cui un prodotto di fattori si confronta con zero, si risolve con la **tabella dei segni**: si studia il segno di ogni fattore, si riportano i segni in una tabella divisa dagli zeri dei fattori e in ogni colonna si applica la regola dei segni del prodotto. Il metodo funziona perché il segno di un prodotto dipende solo dai segni dei fattori. Per $x(x - 2)(x + 1) \geq 0$ gli zeri sono $-1$, $0$ e $2$:
$$
\begin{array}{c|cccc}
x & (-\infty, -1) & (-1, 0) & (0, 2) & (2, +\infty) \\ \hline
x & - & - & + & + \\
x - 2 & - & - & - & + \\
x + 1 & - & + & + & + \\ \hline
x(x - 2)(x + 1) & - & + & - & +
\end{array}
$$
Poiché la disequazione non è stretta, gli zeri sono inclusi, e le soluzioni sono $[-1, 0] \cup [2, +\infty)$.
:::

:::teorema{#disequazioni-fratte titolo="Disequazioni fratte"}
Una disequazione $\dfrac{N(x)}{D(x)} > 0$ si risolve con la stessa tabella, perché un quoziente ha lo stesso segno del prodotto $N(x) \cdot D(x)$. Gli zeri del denominatore sono sempre esclusi; gli zeri del numeratore sono inclusi solo se la disequazione contiene $\geq$ o $\leq$. Per $\dfrac{x - 3}{x + 1} \geq 0$ il numeratore è positivo per $x > 3$ e il denominatore per $x > -1$; il quoziente è positivo o nullo per $x < -1 \;\vee\; x \geq 3$, con $-1$ escluso e $3$ incluso.

::grafico{f="(x-3)/(x+1)" asintoti="x=-1;y=1" punti="3,0,pieno" xmin=-6 xmax=8 ymin=-6 ymax=7 legenda="y = \dfrac{x - 3}{x + 1}" titolo="Il quoziente $\dfrac{x - 3}{x + 1}$ è positivo o nullo per $x < -1$ e per $x \geq 3$; in $x = -1$ non è definito"}

:::

:::attenzione
Prima di studiare il segno si porta tutto al primo membro, con il secondo membro uguale a zero. Il denominatore resta al suo posto, perché il suo segno cambia al variare di $x$ e non si sa se il verso vada invertito. Da $\dfrac{1}{x} > 1$, moltiplicando per $x$, si otterrebbe $x < 1$, che contiene $x = -1$, per cui $\dfrac{1}{-1} = -1$ non è maggiore di $1$. Il procedimento corretto porta a $\dfrac{1 - x}{x} > 0$, con soluzioni $0 < x < 1$.
:::

## Sistemi

:::definizione{#sistema-lineare titolo="Sistema di due equazioni di primo grado"}
Un **sistema** è un insieme di equazioni che devono essere soddisfatte insieme; si scrive con la graffa. Una soluzione di un sistema in $x$ e $y$ è una coppia $(x;y)$ che soddisfa tutte le equazioni. Ogni equazione di primo grado in $x$ e $y$ rappresenta una retta, quindi le soluzioni sono i punti comuni alle due rette:
- rette incidenti: una sola soluzione, il sistema è *determinato*;
- rette parallele distinte: nessuna soluzione, il sistema è *impossibile*;
- rette coincidenti: infinite soluzioni, il sistema è *indeterminato*.

Il sistema
$$
\begin{cases}
x + y = 7 \\
2x - y = 2
\end{cases}
$$
ha la sola soluzione $(3;4)$, punto d'incontro delle due rette.

::grafico{f="7-x;2*x-2" punti="3,4,pieno" segmenti="3,0,3,4;0,4,3,4" xmin=-1 xmax=8 ymin=-3 ymax=9 legenda="x + y = 7;2x - y = 2" titolo="Le rette $x + y = 7$ e $2x - y = 2$ si incontrano nel punto $(3;4)$, soluzione del sistema"}

:::

:::teorema{#metodo-sostituzione titolo="Metodo di sostituzione"}
Si ricava un'incognita da un'equazione e si sostituisce l'espressione trovata nell'altra, che diventa un'equazione in una sola incognita. Nel sistema precedente dalla prima equazione si ricava $y = 7 - x$; sostituendo nella seconda si ottiene $2x - (7 - x) = 2$, cioè $3x = 9$, quindi $x = 3$ e $y = 7 - 3 = 4$. Il metodo è comodo quando un'incognita ha coefficiente $1$ o $-1$.
:::

:::teorema{#metodo-riduzione titolo="Metodo di riduzione"}
Si sommano o si sottraggono membro a membro le due equazioni, eventualmente dopo averle moltiplicate per numeri opportuni, in modo che un'incognita sparisca. Il metodo vale perché sommando uguaglianze vere si ottiene un'uguaglianza vera. Nel sistema
$$
\begin{cases}
3x + 2y = 12 \\
5x - 2y = 4
\end{cases}
$$
sommando membro a membro si ottiene $8x = 16$, quindi $x = 2$; sostituendo nella prima equazione si ha $6 + 2y = 12$, quindi $y = 3$.
:::

:::teorema{#regola-di-cramer titolo="Regola di Cramer"}
Per il sistema
$$
\begin{cases}
ax + by = c \\
a'x + b'y = c'
\end{cases}
$$
si calcola il numero $D = ab' - a'b$, detto determinante del sistema. Se $D \neq 0$, il sistema è determinato e
$$
x = \frac{cb' - c'b}{D},
\qquad
y = \frac{ac' - a'c}{D} .
$$
Se $D = 0$, le due rette sono parallele o coincidenti, quindi il sistema è impossibile o indeterminato. Le formule si ottengono applicando il metodo di riduzione ai coefficienti scritti con le lettere. Sono utili nei quiz con un parametro: nel sistema con equazioni $kx + 2y = 1$ e $3x + y = 5$ si ha $D = k - 6$, quindi il sistema è determinato per $k \neq 6$; per $k = 6$ la prima equazione diventa $6x + 2y = 1$, mentre il doppio della seconda è $6x + 2y = 10$, perciò il sistema è impossibile.
:::

:::teorema{#sistemi-secondo-grado titolo="Sistemi di secondo grado"}
Un sistema formato da un'equazione di secondo grado e una di primo grado si risolve per sostituzione: si ricava un'incognita dall'equazione di primo grado e si ottiene un'equazione di secondo grado in una sola incognita. Il suo discriminante dice quante soluzioni ha il sistema, cioè quanti punti hanno in comune la retta e la curva. Nel sistema
$$
\begin{cases}
y = x^2 \\
y = x + 2
\end{cases}
$$
si ottiene $x^2 = x + 2$, cioè $x^2 - x - 2 = 0$, con soluzioni $x = -1$ e $x = 2$; le soluzioni del sistema sono $(-1;1)$ e $(2;4)$.

::grafico{f="x^2;x+2" punti="-1,1,pieno;2,4,pieno" xmin=-3 xmax=4 ymin=-1 ymax=8 legenda="y = x^2;y = x + 2" titolo="La parabola $y = x^2$ e la retta $y = x + 2$ hanno in comune i punti $(-1;1)$ e $(2;4)$"}

:::

:::esempio{titolo="Somma e prodotto assegnati"}
Il sistema
$$
\begin{cases}
x + y = 5 \\
xy = 6
\end{cases}
$$
chiede due numeri di somma $5$ e prodotto $6$. Per la relazione tra soluzioni e coefficienti questi numeri sono le soluzioni di $t^2 - 5t + 6 = 0$, cioè $2$ e $3$, quindi il sistema ha le soluzioni $(2;3)$ e $(3;2)$.
:::

:::teorema{#sistemi-disequazioni titolo="Sistemi di disequazioni"}
Le soluzioni di un sistema di disequazioni sono i numeri che soddisfano *tutte* le disequazioni, cioè l'intersezione degli insiemi delle soluzioni. Nel sistema
$$
\begin{cases}
2x - 4 > 0 \\
x^2 - 9 \leq 0
\end{cases}
$$
la prima disequazione ha soluzioni $x > 2$ e la seconda $-3 \leq x \leq 3$. I numeri comuni ai due insiemi sono quelli con $2 < x \leq 3$, quindi le soluzioni del sistema formano l'intervallo $(2, 3]$.

::grafico{assi=0 linee="-5,2 7,2;-5,0 7,0;-5,-2 7,-2;2,2.6 2,-2.6;-3,0.6 -3,-0.6;3,0.6 3,-2.6" poligoni="2,1.8 7,1.8 7,2.2 2,2.2;-3,-0.2 3,-0.2 3,0.2 -3,0.2;2,-2.2 3,-2.2 3,-1.8 2,-1.8" etichette="-3,-1,-3;2,-3.2,2;3,-3.2,3;6.2,2.7,x > 2;-1.5,0.7,−3 ≤ x ≤ 3;5,-1.5,2 < x ≤ 3" uguale=1 xmin=-6 xmax=8 ymin=-4 ymax=3.5 titolo="Le soluzioni di $2x - 4 > 0$ (in alto) e di $x^2 - 9 \leq 0$ (al centro) hanno in comune l'intervallo $(2, 3]$ (in basso)"}

:::

## Problemi che si traducono in equazioni

:::teorema{#problemi-equazioni titolo="Dal testo all'equazione"}
Un problema si risolve in quattro passi: si sceglie l'incognita e se ne dice il significato, con l'unità di misura; si traducono in formule le relazioni del testo; si risolve l'equazione, la disequazione o il sistema; si controlla che la soluzione abbia senso per il problema (un prezzo è positivo, un numero di pezzi è intero). Se il testo dice che un prezzo scontato del $20\%$ è $64$ euro, il prezzo iniziale $x$ soddisfa $0{,}8\,x = 64$, quindi $x = 80$ euro.
:::

:::esempio{titolo="Ricavi e costi"}
Un'impresa ha costi fissi di $1200$ euro, spende $8$ euro per ogni pezzo prodotto e vende ogni pezzo a $14$ euro. Con $q$ pezzi il ricavo è $14q$ e il costo è $1200 + 8q$. Il **punto di pareggio**, in cui ricavo e costo sono uguali, è la soluzione di
$$
14q = 1200 + 8q ,
$$
cioè $6q = 1200$, quindi $q = 200$. Il profitto $14q - (1200 + 8q)$ è positivo quando $6q > 1200$, cioè per $q > 200$. La traduzione è la stessa, con una disequazione al posto dell'equazione.
:::

:::esempio{titolo="Due incognite"}
Un cinema vende $120$ biglietti, interi a $9$ euro e ridotti a $6$ euro, e incassa $930$ euro. Indicando con $x$ gli interi e con $y$ i ridotti,
$$
\begin{cases}
x + y = 120 \\
9x + 6y = 930
\end{cases}
$$
Sostituendo $y = 120 - x$ nella seconda equazione si ottiene $9x + 720 - 6x = 930$, cioè $3x = 210$, quindi $x = 70$ e $y = 50$.
:::

:::esempio{titolo="Un problema di secondo grado"}
Un rettangolo ha perimetro $26$ cm e area $40$ cm². Se un lato misura $x$, l'altro misura $13 - x$, perché la somma dei due lati è metà del perimetro. L'area dà l'equazione $x(13 - x) = 40$, cioè $x^2 - 13x + 40 = 0$, con soluzioni $5$ e $8$. I lati misurano quindi $5$ cm e $8$ cm.
:::

## Metodi rapidi per i quiz

:::osservazione{#metodi-rapidi titolo="Sostituire ed eliminare"}
Con quattro opzioni e circa un minuto a quesito, spesso il modo più rapido è partire dalle risposte.
- **Sostituzione**: le soluzioni proposte per un'equazione si provano nell'equazione di partenza. Per una disequazione si sceglie un numero comodo che appartiene a qualche opzione e non ad altre, come $0$, $1$ o $-1$, e si controlla se la soddisfa; ogni prova elimina una o più opzioni.
- **Estremi**: in una disequazione stretta gli estremi sono esclusi; gli zeri di un denominatore sono sempre esclusi. Un'opzione con un estremo sbagliato si elimina senza altri calcoli.
- **Condizioni di esistenza**: in un'equazione fratta si scrivono per prime, perché un'opzione che annulla un denominatore è sbagliata.
:::

:::osservazione{#controlli-rapidi titolo="Controlli a colpo d'occhio"}
- Se $a > 0$ e $\Delta < 0$, il trinomio $ax^2 + bx + c$ è sempre positivo, quindi $ax^2 + bx + c > 0$ vale per ogni $x$ e $ax^2 + bx + c < 0$ non ha soluzioni.
- La somma $-\dfrac{b}{a}$ e il prodotto $\dfrac{c}{a}$ delle soluzioni controllano in pochi secondi una coppia di soluzioni proposta: per $x^2 + 4x - 21 = 0$ la coppia $3$ e $-7$ ha somma $-4$ e prodotto $-21$, quindi è quella giusta.
- Nei problemi il risultato si confronta con il testo: un prezzo di listino è maggiore del prezzo scontato, un numero di biglietti è intero e non supera il totale.
:::
