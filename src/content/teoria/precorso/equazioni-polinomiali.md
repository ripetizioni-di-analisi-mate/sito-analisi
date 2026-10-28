---
titolo: Equazioni e disequazioni polinomiali e fratte
sommario: Come si risolvono le equazioni di primo e secondo grado, come si abbassa il grado con la fattorizzazione, come si trattano equazioni e disequazioni fratte a partire dalle condizioni di esistenza, e come si studiano le disequazioni con il segno della parabola, la tabella dei segni e i sistemi.
---

## Equazioni di primo grado

:::definizione{#equazioni-primo-grado titolo="Equazione di primo grado"}
L'equazione $ax + b = 0$ con $a \neq 0$ ha l'*unica* soluzione
$$
x = -\frac{b}{a} .
$$
A questa forma si arriva con i **principi di equivalenza**: sommare ai due membri la stessa quantità e moltiplicarli per la stessa quantità *diversa da zero* producono equazioni con le stesse soluzioni. Per $a = 0$ l'equazione si riduce a $b = 0$ e i casi sono due:

- $b \neq 0$: nessuna soluzione (equazione **impossibile**);
- $b = 0$: ogni $x$ è soluzione (**identità**).

Per esempio $3(x - 2) + 5 = 2x$ equivale a $3x - 1 = 2x$, da cui $x = 1$.
:::

## Equazioni di secondo grado

::::teorema{#equazioni-secondo-grado titolo="Formula risolutiva"}
L'equazione $ax^2 + bx + c = 0$ con $a \neq 0$ ha **discriminante** $\Delta = b^2 - 4ac$. Se $\Delta \geq 0$ le soluzioni sono
$$
x = \frac{-b \pm \sqrt{\Delta}}{2a} ;
$$
se $\Delta < 0$ **non esistono soluzioni reali**. La formula risolve *ogni* equazione di secondo grado, perciò ogni equazione polinomiale si considera risolta quando è ridotta a fattori di grado al più due.

:::dimostrazione
Poiché $a \neq 0$, moltiplicando i due membri per $4a$ si ottiene l'equazione equivalente $4a^2 x^2 + 4abx + 4ac = 0$. I primi due termini si **completano a un quadrato**, dato che $4a^2 x^2 + 4abx = (2ax + b)^2 - b^2$, quindi l'equazione si riscrive
$$
(2ax + b)^2 = b^2 - 4ac = \Delta .
$$
Se $\Delta < 0$ nessun $x$ la soddisfa, perché un quadrato *non è mai* negativo. Se $\Delta \geq 0$, l'uguaglianza vale quando $2ax + b = \pm\sqrt{\Delta}$, perciò
$$
x = \frac{-b \pm \sqrt{\Delta}}{2a} .
$$
:::
::::

:::definizione{#discriminante titolo="Discriminante"}
Il segno di $\Delta = b^2 - 4ac$ conta le soluzioni reali:

- $\Delta > 0$: **due soluzioni reali distinte** $x_1 \neq x_2$;
- $\Delta = 0$: **una soluzione reale doppia** $x = -\dfrac{b}{2a}$;
- $\Delta < 0$: **nessuna soluzione reale**.

Per $x^2 - 2x - 3 = 0$ si ha $\Delta = 4 + 12 = 16 > 0$ e le soluzioni sono $x = \dfrac{2 \pm 4}{2}$, cioè $3$ e $-1$. Per $x^2 + 2x + 1 = 0$ si ha $\Delta = 0$ e $x = -1$ doppia. Per $x^2 + x + 1 = 0$ si ha $\Delta = -3 < 0$ e nessuna soluzione reale.

::grafico{f="x^2-2*x-3;x^2+2*x+1;x^2+x+1" xmin=-4 xmax=4 ymin=-5 ymax=8 punti="3,0,pieno;-1,0,pieno" titolo="$y = x^2 - 2x - 3$ ($\Delta > 0$) incontra l'asse $x$ in $-1$ e in $3$; $y = x^2 + 2x + 1$ (tratteggiata, $\Delta = 0$) lo tocca soltanto in $-1$; $y = x^2 + x + 1$ (rossa, $\Delta < 0$) non lo incontra"}

:::

:::definizione{#equazioni-incomplete titolo="Equazioni incomplete"}
La formula risolutiva si applica anche alle equazioni con $b = 0$ oppure $c = 0$; questi casi si risolvono con meno calcoli per via diretta.

- **Equazione spuria** $ax^2 + bx = 0$: raccogliendo $x$ si ottiene $x\,(ax + b) = 0$, con soluzioni $x = 0$ e $x = -\dfrac{b}{a}$.
- **Equazione pura** $ax^2 + c = 0$: equivale a $x^2 = -\dfrac{c}{a}$; se $-\dfrac{c}{a} > 0$ le soluzioni sono $x = \pm\sqrt{-\dfrac{c}{a}}$, se $-\dfrac{c}{a} = 0$ l'unica soluzione è $x = 0$, se $-\dfrac{c}{a} < 0$ non ci sono soluzioni reali.

Per esempio $3x^2 - 12 = 0$ equivale a $x^2 = 4$, quindi $x = \pm 2$.
:::

:::teorema{#somma-e-prodotto titolo="Somma e prodotto delle radici"}
Se $\Delta \geq 0$, le radici $x_1$ e $x_2$ di $ax^2 + bx + c = 0$ (eventualmente coincidenti) soddisfano
$$
x_1 + x_2 = -\frac{b}{a}, \qquad x_1 \cdot x_2 = \frac{c}{a} ,
$$
e il trinomio si scompone come
$$
ax^2 + bx + c = a\,(x - x_1)(x - x_2) .
$$
Le due uguaglianze seguono dalla **formula risolutiva**, sommando e moltiplicando le espressioni delle radici; la scomposizione si verifica sviluppando $a\,(x - x_1)(x - x_2) = ax^2 - a\,(x_1 + x_2)\,x + a\,x_1 x_2$ e sostituendo la somma e il prodotto. Con esse si trovano a mente le radici intere e si scompongono i trinomi: per $x^2 - 7x + 12$ due numeri con somma $7$ e prodotto $12$ sono $3$ e $4$, quindi le radici sono $3$ e $4$ e il trinomio è $(x - 3)(x - 4)$. Quando le radici sono razionali, la stessa scomposizione si ottiene anche con la ricerca delle radici razionali e la regola di Ruffini del capitolo sulla fattorizzazione dei polinomi; la formula risolutiva la fornisce anche quando le radici sono irrazionali.
:::

## Equazioni di grado superiore

:::teorema{#legge-di-annullamento titolo="Legge di annullamento del prodotto"}
Un prodotto è nullo *se e solo se* *almeno uno* dei fattori è nullo:
$$
A \cdot B = 0 \iff A = 0 \ \text{ oppure } \ B = 0 .
$$
La legge trasforma un'equazione di grado alto in più equazioni di grado basso, perciò la risoluzione passa dalla **fattorizzazione**. Da $(x - 1)(x + 4) = 0$ segue $x = 1$ oppure $x = -4$.
:::

:::definizione{#grado-superiore titolo="Risoluzione per fattorizzazione"}
Un'equazione polinomiale $P(x) = 0$ di grado maggiore di due si risolve in tre passi: si porta ogni termine al primo membro, si scompone $P$ con la **strategia di fattorizzazione** (si rimanda al capitolo sulla fattorizzazione dei polinomi), si applica la **legge di annullamento del prodotto** a ciascun fattore. Un polinomio di grado $n$ ha *al più* $n$ radici reali, quindi le soluzioni trovate con una scomposizione completa sono tutte.
:::

:::esempio{titolo="Risoluzione con Ruffini"}
$x^3 - 3x + 2 = 0$. Poiché $P(1) = 1 - 3 + 2 = 0$, il binomio $x - 1$ divide $P$ e con la **regola di Ruffini** si ottiene
$$
x^3 - 3x + 2 = (x - 1)(x^2 + x - 2) = (x - 1)^2 (x + 2) ,
$$
dove $x^2 + x - 2 = (x - 1)(x + 2)$ è un **trinomio speciale**. Per la **legge di annullamento del prodotto** le soluzioni sono $x = 1$ (doppia) e $x = -2$.

::grafico{f="x^3-3*x+2" xmin=-2.8 xmax=2.4 ymin=-3 ymax=7 punti="-2,0,pieno;1,0,pieno" titolo="$y = x^3 - 3x + 2 = (x - 1)^2 (x + 2)$ attraversa l'asse $x$ nella soluzione semplice $-2$ e lo tocca nella soluzione doppia $1$"}

:::

:::definizione{#biquadratiche titolo="Equazioni biquadratiche"}
Un'equazione **biquadratica** ha la forma $ax^4 + bx^2 + c = 0$. Con la **sostituzione** $t = x^2$ diventa l'equazione di secondo grado $at^2 + bt + c = 0$. Per ogni soluzione $t_i$ si torna alla variabile $x$ risolvendo $x^2 = t_i$:

- se $t_i > 0$, le soluzioni sono $x = \pm\sqrt{t_i}$;
- se $t_i = 0$, l'unica soluzione è $x = 0$;
- se $t_i < 0$, nessun $x$ reale la soddisfa, perché un quadrato non è mai negativo.

Per esempio $x^4 - 5x^2 + 4 = 0$ diventa $t^2 - 5t + 4 = 0$, con soluzioni $t = 1$ e $t = 4$, quindi $x = \pm 1$ e $x = \pm 2$.

::grafico{f="x^4-5*x^2+4" xmin=-2.7 xmax=2.7 ymin=-3 ymax=6 punti="-2,0,pieno;-1,0,pieno;1,0,pieno;2,0,pieno" titolo="$y = x^4 - 5x^2 + 4$ è simmetrico rispetto all'asse $y$ e incontra l'asse $x$ nelle quattro soluzioni $-2$, $-1$, $1$, $2$"}

:::

## Disequazioni di primo grado

:::definizione{#disequazioni-primo-grado titolo="Disequazione di primo grado"}
Una disequazione del tipo $ax + b > 0$ (o con $\geq$, $<$, $\leq$), con $a \neq 0$, si risolve isolando $x$ con due regole: sommare ai due membri la stessa quantità conserva il verso; moltiplicare i due membri per una quantità positiva conserva il verso, per una quantità *negativa* **lo inverte**. Le soluzioni formano una **semiretta**. Da $5 - 2x > 1$ segue $-2x > -4$, e dividendo per $-2$, con il verso invertito, $x < 2$.
:::

## Disequazioni di secondo grado

:::teorema{#segno-della-parabola titolo="Segno del trinomio di secondo grado"}
Sia $y = ax^2 + bx + c$ con $a > 0$ e $\Delta = b^2 - 4ac$. Il grafico è una parabola con concavità verso l'alto, e il trinomio è **positivo** dove la parabola sta **sopra** l'asse $x$.

- $\Delta > 0$, radici $x_1 < x_2$: il trinomio è positivo per $x < x_1$ oppure $x > x_2$, nullo nelle radici, negativo per $x_1 < x < x_2$.
- $\Delta = 0$, radice doppia $x_0$: il trinomio è positivo per ogni $x \neq x_0$ e nullo in $x_0$.
- $\Delta < 0$: il trinomio è positivo per ogni $x$.

Per $a < 0$ i segni sono gli **opposti**; in alternativa si moltiplicano i due membri per $-1$ invertendo il verso, così da ricondursi al caso $a > 0$.

::grafico{f="x*x-2*x-3" xmin=-4 xmax=6 ymin=-5 ymax=7 punti="-1,0,pieno;3,0,pieno" titolo="$y = x^2 - 2x - 3$: la parabola sta sopra l'asse $x$ per $x < -1$ e per $x > 3$, sotto tra le radici"}
:::

:::esempio
$x^2 - 2x - 3 \geq 0$. Il discriminante è $\Delta = 4 + 12 = 16 > 0$ e le radici sono $-1$ e $3$. Poiché $a = 1 > 0$, il trinomio è positivo **fuori dall'intervallo delle radici** e nullo nelle radici, quindi le soluzioni sono $x \leq -1$ oppure $x \geq 3$. Per $x^2 + x + 1 > 0$ il discriminante è $\Delta = -3 < 0$ e $a > 0$, quindi *ogni* $x$ reale è soluzione.
:::

## Disequazioni di grado superiore

:::definizione{#tabella-dei-segni titolo="Tabella dei segni"}
Una disequazione $P(x) > 0$ (o con $\geq$, $<$, $\leq$) di grado maggiore di due si studia in tre passi: si porta ogni termine al primo membro, si scompone $P$ in fattori di grado al più due, si studia il segno di ciascun fattore. La **tabella dei segni** riporta una riga per fattore e una colonna per ciascun intervallo individuato dagli zeri dei fattori; il segno del prodotto su ogni intervallo è il **prodotto dei segni** della colonna. Con il verso $\geq$ oppure $\leq$ gli zeri di $P$ *appartengono* alle soluzioni, con il verso $>$ oppure $<$ ne sono *esclusi*.
:::

:::esempio{titolo="Una tabella dei segni"}
$x^3 - 4x > 0$. La scomposizione è $x\,(x - 2)(x + 2)$, con zeri $-2$, $0$, $2$. Il fattore $x + 2$ è positivo per $x > -2$, il fattore $x$ per $x > 0$, il fattore $x - 2$ per $x > 2$.
$$
\begin{array}{c|cccc}
 & x < -2 & -2 < x < 0 & 0 < x < 2 & x > 2 \\ \hline
x + 2 & - & + & + & + \\
x & - & - & + & + \\
x - 2 & - & - & - & + \\ \hline
x\,(x+2)(x-2) & - & + & - & +
\end{array}
$$
Il prodotto è positivo nelle colonne con un numero **pari** di segni meno, quindi le soluzioni sono $-2 < x < 0$ oppure $x > 2$.

::grafico{f="x^3-4*x" xmin=-2.8 xmax=2.8 ymin=-6 ymax=6 area="x^3-4*x;0;-2;0|x^3-4*x;0;2;2.8" punti="-2,0,vuoto;0,0,vuoto;2,0,vuoto" titolo="$y = x^3 - 4x$ sta sopra l'asse $x$ per $-2 < x < 0$ e per $x > 2$, gli intervalli colorati in cui il prodotto è positivo"}

:::

:::teorema{#segno-e-molteplicita titolo="Segno di un fattore elevato a potenza"}
Sia $c$ una radice di $P$ di molteplicità $m$, cioè $P(x) = (x - c)^m\, Q(x)$ con $Q(c) \neq 0$; la definizione di molteplicità si trova nel capitolo sulla fattorizzazione dei polinomi. Per $x \neq c$ il fattore $(x - c)^m$ ha segno:

- positivo, se $m = 2k$ è pari, poiché $(x - c)^m = \left( (x - c)^{k} \right)^2$ è il quadrato di un numero diverso da zero;
- uguale a quello di $x - c$, se $m$ è dispari, poiché $(x - c)^m = (x - c)^{m - 1}\,(x - c)$ e $(x - c)^{m - 1}$ è positivo, perché $m - 1$ è pari.

Nella tabella dei segni il fattore $(x - c)^m$ occupa quindi una *sola* riga, che cambia segno in $c$ *solo se* $m$ è dispari. I fattori di $Q$ non si annullano in $c$, quindi le loro righe non cambiano segno in $c$. Perciò $P$ cambia segno nelle radici di molteplicità dispari e conserva il segno in quelle di molteplicità pari, dove il grafico tocca l'asse $x$ senza attraversarlo. Nella disequazione $(x - 1)^2 (x + 3) < 0$ la riga di $(x - 1)^2$ porta soltanto segni più, quindi il segno del prodotto è quello di $x + 3$ e le soluzioni sono $x < -3$.
:::

## Equazioni fratte

:::definizione{#condizioni-di-esistenza titolo="Condizioni di esistenza"}
Un'espressione con l'incognita al denominatore è definita soltanto nei punti in cui *ogni* denominatore è diverso da zero. Le **condizioni di esistenza** sono le condizioni $D(x) \neq 0$ imposte a tutti i denominatori, e l'insieme dei numeri reali che le soddisfano è il **dominio** dell'equazione o della disequazione. Le condizioni si ricavano dall'espressione di partenza, perché la riduzione allo stesso denominatore e le semplificazioni possono far scomparire un denominatore. Per $\dfrac{1}{x} + \dfrac{3}{x^2 - 4}$ le condizioni di esistenza formano il sistema
$$
\begin{cases}
x \neq 0 \\[2pt]
x^2 - 4 \neq 0
\end{cases}
$$
e il dominio è l'insieme dei numeri reali diversi da $0$, da $2$ e da $-2$.
:::

:::definizione{#equazioni-fratte titolo="Equazione fratta"}
Un'equazione è **fratta** quando l'incognita compare in almeno un denominatore. Trasportando ogni termine al primo membro e riducendo allo stesso denominatore, l'equazione assume la forma
$$
\frac{N(x)}{D(x)} = 0 ,
$$
con $N$ e $D$ polinomi. Per esempio $\dfrac{x + 1}{x - 2} = 3$, con la condizione di esistenza $x \neq 2$, diventa $\dfrac{x + 1 - 3\,(x - 2)}{x - 2} = 0$, cioè $\dfrac{7 - 2x}{x - 2} = 0$.
:::

::::teorema{#annullamento-di-una-frazione titolo="Annullamento di una frazione"}
Siano $N$ e $D$ polinomi. La frazione $\dfrac{N(x)}{D(x)}$ è nulla *se e solo se* il numeratore è nullo e il denominatore è diverso da zero:
$$
\frac{N(x)}{D(x)} = 0 \iff
\begin{cases}
N(x) = 0 \\[2pt]
D(x) \neq 0
\end{cases}
$$
Il teorema riduce un'equazione fratta all'equazione polinomiale $N(x) = 0$; le sue soluzioni si confrontano poi con le condizioni di esistenza, e quelle che annullano un denominatore si **scartano**. Per $\dfrac{7 - 2x}{x - 2} = 0$ il numeratore si annulla in $x = \dfrac{7}{2}$, che è diverso da $2$, quindi $x = \dfrac{7}{2}$ è la **soluzione**.

:::dimostrazione
Se $D(x) = 0$, la frazione non è definita in $x$, quindi $x$ non è soluzione qualunque sia il valore di $N(x)$. Sia allora $D(x) \neq 0$. Se $\dfrac{N(x)}{D(x)} = 0$, moltiplicando i due membri per il numero $D(x)$, diverso da zero, si ottiene $N(x) = 0$. Viceversa, se $N(x) = 0$, la frazione vale $\dfrac{0}{D(x)} = 0$. Perciò le soluzioni sono i numeri che soddisfano *insieme* $N(x) = 0$ e $D(x) \neq 0$.
:::
::::

:::esempio{titolo="Una soluzione da scartare"}
$\dfrac{x^2}{x - 2} = \dfrac{4}{x - 2}$. La condizione di esistenza è $x \neq 2$. Trasportando il secondo membro si ottiene
$$
\frac{x^2 - 4}{x - 2} = 0 ,
$$
e il numeratore $x^2 - 4 = (x - 2)(x + 2)$ si annulla in $x = 2$ e in $x = -2$. Il valore $x = 2$ non soddisfa la condizione di esistenza, perciò si **scarta**; l'unica soluzione è $x = -2$.

::grafico{f="x^2/(x-2);4/(x-2)" xmin=-5 xmax=6 ymin=-6 ymax=11 asintoti="x=2" punti="-2,-1,pieno" titolo="I grafici di $y = \dfrac{x^2}{x - 2}$ e di $y = \dfrac{4}{x - 2}$ (tratteggiato) si incontrano soltanto nel punto di ascissa $-2$; in $x = 2$ nessuna delle due frazioni è definita"}

:::

:::attenzione
Moltiplicare i due membri per il denominatore elimina la condizione $D(x) \neq 0$ e può produrre valori esterni al dominio. L'equazione $\dfrac{x}{x - 1} = \dfrac{1}{x - 1}$, moltiplicata per $x - 1$, diventa $x = 1$; il valore $1$ annulla il denominatore, quindi l'equazione di partenza **non ha soluzioni**.

::grafico{f="x/(x-1);1/(x-1)" xmin=-4 xmax=5 ymin=-6 ymax=7 asintoti="x=1" titolo="Per $x \neq 1$ si ha $\dfrac{x}{x - 1} - \dfrac{1}{x - 1} = 1$: i due grafici distano sempre $1$ in verticale e non si incontrano mai"}

:::

## Disequazioni fratte

:::definizione{#disequazioni-fratte titolo="Disequazioni fratte"}
Una **disequazione fratta** si porta nella forma
$$
\frac{N(x)}{D(x)} > 0 \quad (\text{o con } \geq,\ <,\ \leq)
$$
trasportando ogni termine al primo membro e riducendo allo stesso denominatore. Il segno del quoziente si studia con la tabella dei segni, con una riga per il segno di $N$ e una per il segno di $D$ (o una per ciascuno dei loro fattori), poiché il quoziente ha lo **stesso segno del prodotto** $N \cdot D$. I punti che annullano il denominatore sono **esclusi** dalle soluzioni per *ogni* verso, perché non soddisfano le condizioni di esistenza; con il verso $\geq$ oppure $\leq$ gli zeri del numeratore sono inclusi.
:::

::::teorema{#segno-del-quoziente titolo="Segno di un quoziente"}
Siano $N$ e $D$ polinomi. Per ogni $x$ con $D(x) \neq 0$ il quoziente $\dfrac{N(x)}{D(x)}$ ha lo **stesso segno** del prodotto $N(x)\, D(x)$. Il teorema giustifica la tabella dei segni delle disequazioni fratte: i fattori del numeratore e quelli del denominatore occupano ciascuno una riga, e il segno della frazione su ogni intervallo è il **prodotto dei segni** della colonna. Per esempio $\dfrac{x - 3}{x + 1}$ e $(x - 3)(x + 1)$ sono entrambi negativi per $-1 < x < 3$ ed entrambi positivi per $x < -1$ e per $x > 3$.

:::dimostrazione
Poiché $D(x) \neq 0$, il quadrato $D(x)^2$ è positivo. Moltiplicando numeratore e denominatore per $D(x)$ si ottiene
$$
\frac{N(x)}{D(x)} = \frac{N(x)\, D(x)}{D(x)^2} ,
$$
che è il quoziente tra $N(x)\, D(x)$ e un numero positivo. Perciò la frazione ha il segno di $N(x)\, D(x)$.
:::
::::

:::attenzione
Moltiplicare i due membri per il denominatore ne presuppone il **segno**, che dipende da $x$. Da $\dfrac{1}{x} < 1$ *non* segue $1 < x$: il valore $x = -1$ soddisfa la prima disuguaglianza, poiché $-1 < 1$, e non la seconda. Le soluzioni corrette sono $x < 0$ oppure $x > 1$, e si ottengono dalla **tabella dei segni** di $\dfrac{1 - x}{x}$.

::grafico{f="1/x;1" xmin=-4 xmax=4 ymin=-4 ymax=4 punti="1,1,vuoto" titolo="$y = \dfrac{1}{x}$ sta sotto la retta $y = 1$ (tratteggiata) per $x < 0$ e per $x > 1$"}

:::

:::esempio
$\dfrac{x + 2}{x - 1} \leq 0$. Il numeratore è positivo per $x > -2$ e nullo in $-2$; il denominatore è positivo per $x > 1$. Il quoziente è negativo dove i segni sono **discordi**, cioè per $-2 < x < 1$. Il verso $\leq$ **include** lo zero del numeratore ed **esclude** quello del denominatore, quindi le soluzioni sono $-2 \leq x < 1$.

::grafico{f="(x+2)/(x-1)" xmin=-5 xmax=5 ymin=-6 ymax=6 asintoti="x=1;y=1" area="0;(x+2)/(x-1);-2;0.99" punti="-2,0,pieno" titolo="$y = \dfrac{x + 2}{x - 1}$ sta sotto l'asse $x$ o lo incontra per $-2 \leq x < 1$; in $x = 1$ la frazione non è definita (asintoto verticale)"}

:::

:::esempio{titolo="Una disequazione fratta con quattro fattori"}
$\dfrac{x}{x + 2} \geq \dfrac{1}{x}$. Le condizioni di esistenza sono $x \neq -2$ e $x \neq 0$. Trasportando il secondo membro e riducendo allo stesso denominatore si ottiene
$$
\frac{x^2 - (x + 2)}{x\,(x + 2)} \geq 0 \quad\Longrightarrow\quad \frac{(x + 1)(x - 2)}{x\,(x + 2)} \geq 0 ,
$$
dove il numeratore $x^2 - x - 2$ è un trinomio speciale. Ogni fattore di primo grado è negativo prima del proprio zero e positivo dopo.
$$
\begin{array}{c|ccccc}
 & x < -2 & -2 < x < -1 & -1 < x < 0 & 0 < x < 2 & x > 2 \\ \hline
x + 2 & - & + & + & + & + \\
x + 1 & - & - & + & + & + \\
x & - & - & - & + & + \\
x - 2 & - & - & - & - & + \\ \hline
\text{quoziente} & + & - & + & - & +
\end{array}
$$
Il quoziente è positivo nelle colonne con un numero **pari** di segni meno. Il verso $\geq$ include gli zeri $-1$ e $2$ del numeratore, mentre $-2$ e $0$ sono esclusi dalle condizioni di esistenza, quindi le soluzioni sono $x < -2$ oppure $-1 \leq x < 0$ oppure $x \geq 2$.

::grafico{f="x/(x+2);1/x" xmin=-6 xmax=5 ymin=-6 ymax=6 asintoti="x=-2;x=0" punti="-1,-1,pieno;2,0.5,pieno" titolo="Il grafico di $y = \dfrac{x}{x + 2}$ sta sopra quello di $y = \dfrac{1}{x}$ (tratteggiato) o lo incontra per $x < -2$, per $-1 \leq x < 0$ e per $x \geq 2$"}

:::

## Sistemi di disequazioni

:::definizione{#sistemi-di-disequazioni titolo="Sistema di disequazioni"}
Un sistema raccoglie disequazioni che devono valere *contemporaneamente*, perciò le sue soluzioni sono l'**intersezione** degli insiemi delle soluzioni delle singole disequazioni. Ogni disequazione si risolve separatamente; poi le soluzioni si rappresentano sulla stessa retta reale e si prendono gli intervalli **comuni a tutte**.
:::

:::esempio
$$
\begin{cases}
x^2 - 4 < 0 \\[2pt]
2x + 1 \geq 0
\end{cases}
$$
La prima disequazione equivale a $x^2 < 4$ e ha soluzioni $-2 < x < 2$. La seconda ha soluzioni $x \geq -\dfrac{1}{2}$. L'**intersezione** dei due insiemi è $-\dfrac{1}{2} \leq x < 2$, che è l'insieme delle soluzioni del sistema.
:::
