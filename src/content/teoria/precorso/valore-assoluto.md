---
titolo: Equazioni e disequazioni con il valore assoluto
sommario: La definizione per casi del valore assoluto, le sue proprietà, e i sistemi che risolvono equazioni e disequazioni con uno o più moduli.
---

## Definizione e significato geometrico

:::definizione{#definizione-valore-assoluto titolo="Valore assoluto"}
Il **valore assoluto** di un numero reale $x$ è
$$
|x| =
\begin{cases}
x & \text{se } x \geq 0 \\
-x & \text{se } x < 0
\end{cases}
$$
Il risultato *non* è mai negativo: quando $x < 0$, il numero $-x$ è positivo. Per esempio $|7| = 7$ e $|-7| = -(-7) = 7$. Ogni regola risolutiva di questo capitolo discende da questa **definizione per casi**.

::grafico{f="abs(x)" xmin=-5 xmax=5 ymin=-1 ymax=5 titolo="$y = |x|$ coincide con $y = x$ per $x \geq 0$ e con $y = -x$ per $x < 0$"}
:::

:::esempio{titolo="Un modulo riscritto senza barre"}
Per scrivere $|2x - 6|$ senza barre si studia il segno dell'argomento: $2x - 6 \geq 0$ per $x \geq 3$. Applicando la definizione con $2x - 6$ al posto di $x$ si ottiene
$$
|2x - 6| =
\begin{cases}
2x - 6 & \text{se } x \geq 3 \\
6 - 2x & \text{se } x < 3
\end{cases}
$$
Per esempio in $x = 1$ vale $|2 - 6| = 4$, e infatti $6 - 2 \cdot 1 = 4$. Questa riscrittura è il primo passo dello studio per zone, dove si applica a ogni modulo presente.
:::

:::definizione{#modulo-come-distanza titolo="Il valore assoluto come distanza"}
Per $x, c \in \mathbb{R}$, il numero $|x - c|$ è la **distanza** tra $x$ e $c$ sulla retta reale; in particolare $|x|$ è la distanza di $x$ dall'origine. Questa lettura traduce equazioni e disequazioni in condizioni sui punti della retta e permette di controllare i risultati. Per esempio $|x - 3| = 2$ è soddisfatta dai punti a distanza $2$ da $3$, cioè $x = 1$ e $x = 5$.
:::

## Proprietà

:::teorema{#proprieta-valore-assoluto titolo="Proprietà del valore assoluto"}
Per ogni $a, b \in \mathbb{R}$ valgono
$$
|ab| = |a|\,|b|, \qquad |a|^2 = a^2, \qquad |a + b| \leq |a| + |b| .
$$
La prima si verifica esaminando i quattro casi sui segni di $a$ e $b$ e serve a scomporre un modulo, per esempio $|{-3x}| = 3\,|x|$. La seconda vale perché $a$ e $|a|$ differiscono al più per il segno, che il quadrato cancella; poiché i moduli non sono negativi, confrontare due moduli equivale a **confrontare i loro quadrati**, e su questa osservazione si fonda la risoluzione di $|A| > |B|$ per elevamento al quadrato. La terza è la **disuguaglianza triangolare** e viene usata nelle maggiorazioni, per esempio nel capitolo sui limiti: per $a = 5$ e $b = -3$ si ha $|5 + (-3)| = 2 \leq 8 = |5| + |-3|$, e l'uguaglianza vale se e solo se $ab \geq 0$.
:::

:::attenzione
Il modulo non si toglie riscrivendo $|A| = A$: l'uguaglianza vale *solo* dove $A \geq 0$. Per esempio $|x - 5| = x - 5$ è **falsa** in $x = 0$, poiché $|0 - 5| = 5$ mentre $0 - 5 = -5$. Dove $A < 0$ vale invece $|A| = -A$.

::grafico{f="abs(x-5);x-5" xmin=-1 xmax=9 ymin=-5 ymax=6 punti="0,5,pieno;0,-5,vuoto" titolo="$y = |x - 5|$ si ottiene da $y = x - 5$ (tratteggiata) ribaltando rispetto all'asse $x$ la parte che sta sotto l'asse; i due grafici coincidono soltanto per $x \geq 5$"}

:::

::::teorema{#valore-assoluto-quoziente titolo="Valore assoluto di un quoziente"}
Per ogni $a, b \in \mathbb{R}$ con $b \neq 0$ vale
$$
\left| \frac{a}{b} \right| = \frac{|a|}{|b|} .
$$
La proprietà permette di separare numeratore e denominatore di una frazione con il modulo. Per esempio
$$
\left| \frac{x - 2}{-4} \right| = \frac{|x - 2|}{4} ,
$$
e quindi l'equazione $\left| \dfrac{x - 2}{-4} \right| = 1$ equivale a $|x - 2| = 4$, che ha soluzioni $x = -2$ e $x = 6$.

:::dimostrazione
L'idea è scrivere $a$ come prodotto di $\dfrac{a}{b}$ e $b$ e applicare la regola del prodotto. Poiché $a = \dfrac{a}{b} \cdot b$, la proprietà $|ab| = |a|\,|b|$ dà
$$
|a| = \left| \frac{a}{b} \right| |b| .
$$
Poiché $b \neq 0$, si ha $|b| > 0$, quindi si possono dividere entrambi i membri per $|b|$ e si ottiene la tesi.
:::
::::

::::teorema{#disuguaglianza-triangolare titolo="Disuguaglianza triangolare"}
Per ogni $a, b \in \mathbb{R}$ vale
$$
|a + b| \leq |a| + |b| ,
$$
e l'uguaglianza vale se e solo se $ab \geq 0$, cioè se $a$ e $b$ non hanno segni opposti. La disuguaglianza dà una maggiorazione di un modulo che non si sa calcolare: per $|x| \leq 2$ si ha
$$
|x + 5| \leq |x| + 5 \leq 7 ,
$$
e il valore $7$ è raggiunto in $x = 2$.

:::dimostrazione
Si confrontano i quadrati dei due membri, che sono numeri non negativi. Poiché $|a + b|^2 = (a + b)^2$, sviluppando il quadrato si ha
$$
|a + b|^2 = a^2 + 2ab + b^2 .
$$
Poiché $ab \leq |ab| = |a|\,|b|$ e $a^2 = |a|^2$, $b^2 = |b|^2$, ne segue
$$
|a + b|^2 \leq |a|^2 + 2|a|\,|b| + |b|^2 = \left( |a| + |b| \right)^2 .
$$
Due numeri non negativi stanno nello stesso ordine dei loro quadrati, perciò $|a + b| \leq |a| + |b|$. L'uguaglianza vale quando $ab = |ab|$, e questo accade esattamente per $ab \geq 0$.
:::
::::

:::attenzione
Il modulo *non* si distribuisce su una somma o su una differenza: in generale $|x - 3| \neq |x| - 3$. Per $x = 1$ si ha $|1 - 3| = 2$, mentre $|1| - 3 = -2$. Per una somma vale soltanto la disuguaglianza triangolare.
:::

:::osservazione{#radice-del-quadrato titolo="Radice quadrata di un quadrato"}
Per ogni $a \in \mathbb{R}$ vale $\sqrt{a^2} = |a|$, perché $\sqrt{a^2}$ è il numero *non negativo* il cui quadrato è $a^2$, e $|a|$ ha entrambe le proprietà. L'uguaglianza $\sqrt{a^2} = a$ vale invece solo per $a \geq 0$: per $a = -2$ si ha $\sqrt{4} = 2$, che è diverso da $-2$. Per questo un'equazione irrazionale come $\sqrt{x^2 - 6x + 9} = 2x - 3$ diventa l'equazione con il modulo $|x - 3| = 2x - 3$, poiché $x^2 - 6x + 9 = (x - 3)^2$.
:::

## L'equazione |A| = k

:::teorema{#equazioni-con-modulo titolo="Equazione della forma |A| = k"}
$A$ è un'espressione nella variabile $x$ e $k$ una costante. I casi da distinguere dipendono dal segno di $k$.

- $k > 0$: $\ |A| = k \iff A = k \ \vee \ A = -k$, perché i *soli* numeri con valore assoluto $k$ sono $k$ e $-k$.
- $k = 0$: $\ |A| = 0 \iff A = 0$, perché il solo numero con valore assoluto nullo è $0$.
- $k < 0$: **nessuna soluzione**, perché $|A| \geq 0$ per ogni $x$.
:::

:::esempio
$|x - 4| = 6$. Poiché $6 > 0$, l'equazione equivale a
$$
x - 4 = 6 \ \vee \ x - 4 = -6 ,
$$
quindi $x = 10$ oppure $x = -2$: i due punti a **distanza** $6$ da $4$.

::grafico{f="abs(x-4);6" xmin=-4 xmax=12 ymin=-1 ymax=8 punti="-2,6,pieno;10,6,pieno" segmenti="-2,0,-2,6;10,0,10,6" titolo="La retta $y = 6$ incontra il grafico di $y = |x - 4|$ nei punti di ascissa $-2$ e $10$"}

:::

:::esempio{titolo="Argomento di secondo grado"}
$|x^2 - 4| = 5$. Poiché $5 > 0$, l'equazione equivale a
$$
x^2 - 4 = 5 \ \vee \ x^2 - 4 = -5 ,
$$
cioè $x^2 = 9 \ \vee \ x^2 = -1$. La prima equazione ha soluzioni $x = -3$ e $x = 3$; la seconda non ha soluzioni reali, perché un quadrato non è mai negativo. Le soluzioni sono quindi $x = \pm 3$.
:::

## L'equazione |A| = |B|

:::teorema{#equazione-due-moduli titolo="Equazione della forma |A| = |B|"}
Due numeri hanno lo stesso valore assoluto quando sono **uguali** oppure **opposti**, quindi
$$
|A| = |B| \iff A = B \ \vee \ A = -B .
$$
*Non* serve alcuna condizione aggiuntiva, perché i due membri non sono mai negativi.
:::

:::esempio
$|2x - 1| = |x + 5|$ equivale a
$$
2x - 1 = x + 5 \ \vee \ 2x - 1 = -(x + 5) ,
$$
quindi $x = 6$ oppure $3x = -4$, cioè $x = -\dfrac{4}{3}$.

::grafico{f="abs(2*x-1);abs(x+5)" xmin=-7 xmax=8 ymin=-1 ymax=13 punti="-1.3333,3.6667,pieno;6,11,pieno" segmenti="-1.3333,0,-1.3333,3.6667;6,0,6,11" titolo="Le soluzioni $x = -\dfrac{4}{3}$ e $x = 6$ di $|2x - 1| = |x + 5|$ sono le ascisse dei punti di intersezione tra $y = |2x - 1|$ e $y = |x + 5|$ (tratteggiata)"}

:::

## L'equazione |A| = B

:::teorema{#equazione-modulo-uguale-espressione titolo="Equazione della forma |A| = B"}
Se il secondo membro è un'espressione $B$ nella variabile, il primo membro non è mai negativo, quindi l'equazione impone *anche* la **condizione** $B \geq 0$:
$$
|A| = B \iff
\begin{cases}
B \geq 0 \\
A = B
\end{cases}
\ \cup \
\begin{cases}
B \geq 0 \\
A = -B
\end{cases}
$$
Le soluzioni delle due equazioni che non soddisfano la condizione $B \geq 0$ vanno **scartate**.
:::

:::esempio
$|x| = 2x - 3$:
$$
\begin{cases}
2x - 3 \geq 0 \\
x = 2x - 3
\end{cases}
\ \cup \
\begin{cases}
2x - 3 \geq 0 \\
x = -(2x - 3)
\end{cases}
$$
Il primo sistema dà $x = 3$, che soddisfa la condizione poiché $2 \cdot 3 - 3 = 3 \geq 0$; il secondo dà $x = 1$, che *non* la soddisfa, poiché $2 \cdot 1 - 3 = -1 < 0$. La soluzione è $x = 3$.

::grafico{f="abs(x);2*x-3" xmin=-3 xmax=5 ymin=-4 ymax=6 punti="3,3,pieno;1,-1,vuoto" titolo="$y = |x|$ e la retta $y = 2x - 3$ (tratteggiata) si incontrano soltanto in $x = 3$; in $x = 1$ la retta ha ordinata $-1 < 0$, quindi $x = 1$ è scartata"}

:::

:::osservazione
La stessa equazione $|A| = B$ si risolve anche studiando il segno dell'argomento $A$, come nella definizione:
$$
\begin{cases}
A \geq 0 \\
A = B
\end{cases}
\ \cup \
\begin{cases}
A < 0 \\
-A = B
\end{cases}
$$
Per $|x| = 2x - 3$ il primo sistema dà $x = 3$, che soddisfa $x \geq 0$; il secondo dà $-x = 2x - 3$, cioè $x = 1$, che non soddisfa $x < 0$. Il risultato $x = 3$ coincide con quello ottenuto con la condizione $B \geq 0$. Questa seconda forma è più comoda quando il segno di $A$ si studia più facilmente del segno di $B$.
:::

## Le disequazioni |A| < k e |A| ≤ k

:::teorema{#disequazioni-minore titolo="Disequazione della forma |A| < k"}
La disequazione $|A| < k$ chiede che $A$ disti dall'origine **meno di** $k$.

- $k > 0$: $\ |A| < k$ equivale alla **doppia disuguaglianza** $-k < A < k$, cioè al sistema
$$
\begin{cases}
A < k \\
A > -k
\end{cases}
$$
- $k \leq 0$: **nessuna soluzione**, perché $|A| \geq 0$.

Per $|A| \leq k$ con $k > 0$ si ha $-k \leq A \leq k$; per $k = 0$ resta la *sola* equazione $A = 0$; per $k < 0$ nessuna soluzione.
:::

:::esempio
$|x - 1| < 4$ equivale a $-4 < x - 1 < 4$, quindi $-3 < x < 5$: l'intervallo dei punti a **distanza minore** di $4$ da $1$.

::grafico{f="abs(x-1);4" xmin=-5 xmax=7 ymin=-1 ymax=7 area="4;abs(x-1);-3;5" punti="-3,4,vuoto;5,4,vuoto" titolo="$y = |x - 1|$ sta sotto la retta $y = 4$ per $-3 < x < 5$"}

:::

:::attenzione
Le due condizioni $A < k$ e $A > -k$ devono valere *insieme*, quindi formano un sistema. Per $|x| < 2$ l'unione $x < 2 \ \vee \ x > -2$ è soddisfatta da ogni numero reale, compreso $x = 5$, per il quale $|5| = 5 > 2$; il sistema dà invece l'intervallo corretto $-2 < x < 2$.
:::

## Le disequazioni |A| > k e |A| ≥ k

:::teorema{#disequazioni-maggiore titolo="Disequazione della forma |A| > k"}
La disequazione $|A| > k$ chiede che $A$ disti dall'origine **più di** $k$.

- $k > 0$: $\ |A| > k \iff A < -k \ \vee \ A > k$, **unione di due semirette**.
- $k = 0$: $\ |A| > 0 \iff A \neq 0$.
- $k < 0$: la disequazione è soddisfatta da *ogni* $x$ per cui $A$ è definita, perché $|A| \geq 0 > k$.

Per $|A| \geq k$ con $k > 0$ si ha $A \leq -k \ \vee \ A \geq k$; per $k \leq 0$ è **soddisfatta ovunque**.
:::

:::esempio
$|x + 2| > 3$ equivale a
$$
x + 2 < -3 \ \vee \ x + 2 > 3 ,
$$
quindi $x < -5 \ \vee \ x > 1$.

::grafico{f="abs(x+2);3" xmin=-9 xmax=5 ymin=-1 ymax=8 punti="-5,3,vuoto;1,3,vuoto" titolo="$y = |x + 2|$ sta sopra la retta $y = 3$ per $x < -5$ e per $x > 1$"}

:::

:::esempio{titolo="Secondo membro nullo o negativo"}
La disequazione $|x - 7| \geq -2$ è soddisfatta da ogni $x \in \mathbb{R}$, poiché $|x - 7| \geq 0 > -2$. Un modulo è nullo solo dove è nullo il suo argomento, perciò la disequazione $|x^2 - 1| > 0$ equivale a $x^2 - 1 \neq 0$; le soluzioni sono quindi tutti gli $x$ con $x \neq -1$ e $x \neq 1$.
:::

## Disequazioni con espressione al secondo membro

:::teorema{#disequazione-modulo-espressione titolo="Disequazioni della forma |A| < B e |A| > B"}
Quando il secondo membro è un'espressione $B$, le forme risolutive **restano le stesse** e i casi sul segno di $B$ risultano già incorporati:
$$
|A| < B \iff
\begin{cases}
A < B \\
A > -B
\end{cases}
\qquad\qquad
|A| > B \iff A > B \ \vee \ A < -B .
$$
Il sistema di sinistra impone *da solo* $B > 0$: dalle condizioni $A < B$ e $-B < A$ segue $-B < B$, cioè $B > 0$. L'unione di destra copre anche i punti in cui $B < 0$: se $A \geq 0$ allora $A > B$; se $A < 0$ allora $-A > 0 > B$, cioè $A < -B$. Perciò entrambe le forme si usano **senza discutere il segno** di $B$. Per $|A| \leq B$ e $|A| \geq B$ valgono le stesse forme con le **disuguaglianze larghe**.
:::

:::esempio{titolo="Modulo minore di un'espressione"}
$|x - 1| < 2x$:
$$
\begin{cases}
x - 1 < 2x \\
x - 1 > -2x
\end{cases}
\qquad
\begin{cases}
x > -1 \\
x > \dfrac{1}{3}
\end{cases}
$$
Le due condizioni valgono *insieme* per $x > \dfrac{1}{3}$.

::grafico{f="abs(x-1);2*x" xmin=-2 xmax=4 ymin=-3 ymax=7 punti="0.3333,0.6667,vuoto" titolo="La retta $y = 2x$ (tratteggiata) sta sopra $y = |x - 1|$ per $x > \dfrac{1}{3}$; dove $2x \leq 0$ nessun punto soddisfa la disequazione"}

:::

:::esempio{titolo="Modulo maggiore di un'espressione"}
$|x + 3| > 2x$ equivale a
$$
x + 3 > 2x \ \vee \ x + 3 < -2x ,
$$
cioè $x < 3 \ \vee \ x < -1$. L'**unione** delle due semirette è $x < 3$.
:::

:::esempio{titolo="Argomento di secondo grado e secondo membro con la variabile"}
$|x^2 - 2x| < x$ equivale al sistema
$$
\begin{cases}
x^2 - 2x < x \\
x^2 - 2x > -x
\end{cases}
\qquad
\begin{cases}
x(x - 3) < 0 \\
x(x - 1) > 0
\end{cases}
\qquad
\begin{cases}
0 < x < 3 \\
x < 0 \ \vee \ x > 1
\end{cases}
$$
Le due condizioni valgono insieme per $1 < x < 3$. In $x = 2$ si ha $|4 - 4| = 0 < 2$, mentre in $x = \dfrac{1}{2}$ si ha $\left| \dfrac{1}{4} - 1 \right| = \dfrac{3}{4}$, che è maggiore di $\dfrac{1}{2}$.

::grafico{f="abs(x^2-2*x);x" xmin=-1 xmax=4 ymin=-1 ymax=5 area="x;abs(x^2-2*x);1;3" punti="1,1,vuoto;3,3,vuoto" titolo="$y = |x^2 - 2x|$ sta sotto la retta $y = x$ (tratteggiata) per $1 < x < 3$"}

:::

## Due valori assoluti: lo studio per zone

:::teorema{#due-valori-assoluti titolo="Studio dei segni per zone"}
Quando compaiono due o più valori assoluti con argomenti diversi, si cercano i punti in cui gli argomenti **si annullano**; questi punti dividono la retta reale in **zone** e in ogni zona ciascun modulo si riscrive senza barre secondo il segno del proprio argomento. In ciascuna zona si risolve il sistema formato dalla condizione di zona e dall'equazione o disequazione riscritta; l'insieme delle soluzioni è l'**unione** dei risultati delle zone. Il procedimento segue dalla definizione di valore assoluto applicata a ogni argomento.
:::

:::esempio
$|x| + |x - 2| = 4$. Gli argomenti si annullano in $0$ e in $2$, quindi le zone sono tre:
$$
\begin{cases}
x < 0 \\
-x + (2 - x) = 4
\end{cases}
\ \cup \
\begin{cases}
0 \leq x < 2 \\
x + (2 - x) = 4
\end{cases}
\ \cup \
\begin{cases}
x \geq 2 \\
x + (x - 2) = 4
\end{cases}
$$
Nella prima zona $2 - 2x = 4$ dà $x = -1$, accettabile poiché $-1 < 0$; nella seconda l'equazione $2 = 4$ è **falsa**; nella terza $2x - 2 = 4$ dà $x = 3$, accettabile poiché $3 \geq 2$. Le soluzioni sono $x = -1$ e $x = 3$.

::grafico{f="abs(x)+abs(x-2);4" xmin=-3 xmax=5 ymin=-1 ymax=7 punti="-1,4,pieno;3,4,pieno" titolo="$y = |x| + |x - 2|$ vale costantemente $2$ nella zona $0 \leq x \leq 2$, dove l'equazione è impossibile; la retta $y = 4$ incontra il grafico in $x = -1$ e in $x = 3$"}

:::

:::osservazione{titolo="Gli estremi delle zone"}
Ciascun punto in cui un argomento si annulla si assegna a *una sola* zona, così nessun punto viene contato due volte. La scelta della zona è indifferente, perché in quel punto l'argomento vale $0$ e le due riscritture del modulo danno lo stesso valore: per $x = 2$ si ha $x - 2 = 0 = 2 - x$. Con $n$ punti distinti le zone sono $n + 1$.
:::

:::esempio{titolo="Differenza di due moduli"}
$|x - 1| - |x + 1| > 1$. Gli argomenti si annullano in $-1$ e in $1$:
$$
\begin{cases}
x < -1 \\
(1 - x) - (-x - 1) > 1
\end{cases}
\ \cup \
\begin{cases}
-1 \leq x < 1 \\
(1 - x) - (x + 1) > 1
\end{cases}
\ \cup \
\begin{cases}
x \geq 1 \\
(x - 1) - (x + 1) > 1
\end{cases}
$$
Nella prima zona il primo membro vale $2$ e la disuguaglianza $2 > 1$ è vera, quindi tutta la zona $x < -1$ è soluzione. Nella seconda si ottiene $-2x > 1$, cioè $x < -\dfrac{1}{2}$, che con la condizione di zona dà $-1 \leq x < -\dfrac{1}{2}$. Nella terza il primo membro vale $-2$ e la disuguaglianza è falsa. L'unione è $x < -\dfrac{1}{2}$.

::grafico{f="abs(x-1)-abs(x+1);1" xmin=-4 xmax=4 ymin=-3 ymax=3 punti="-0.5,1,vuoto" titolo="$y = |x - 1| - |x + 1|$ vale $2$ per $x \leq -1$ e $-2$ per $x \geq 1$; sta sopra la retta $y = 1$ per $x < -\dfrac{1}{2}$"}

:::
