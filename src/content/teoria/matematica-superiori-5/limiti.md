---
titolo: Limiti
sommario: Che cosa sono gli intorni e i punti di accumulazione, come si definisce il limite di una funzione nei quattro casi, che cosa dicono i teoremi di unicità, della permanenza del segno e del confronto, come si calcolano i limiti con le regole delle operazioni e con i limiti notevoli, come si confrontano infinitesimi e infiniti e che cos'è il limite di una successione.
---

## Intervalli e intorni

:::definizione{#intervalli titolo="Intervalli"}
Siano $a$ e $b$ due numeri reali con $a < b$. Un **intervallo** è l'insieme dei numeri reali compresi tra $a$ e $b$, con o senza gli estremi:

| simbolo | numeri $x$ che contiene | nome |
| --- | --- | --- |
| $[a, b]$ | $a \leq x \leq b$ | intervallo chiuso |
| $(a, b)$ | $a < x < b$ | intervallo aperto |
| $[a, b)$ | $a \leq x < b$ | chiuso a sinistra e aperto a destra |
| $(a, b]$ | $a < x \leq b$ | aperto a sinistra e chiuso a destra |

I numeri $a$ e $b$ sono gli **estremi** dell'intervallo, e la differenza $b - a$ è la sua ampiezza. Gli intervalli illimitati si scrivono con i simboli $+\infty$ e $-\infty$. Per esempio $[a, +\infty)$ è l'insieme dei numeri $x \geq a$, $(-\infty, b)$ è l'insieme dei numeri $x < b$, e l'insieme $\mathbb{R}$ si scrive anche $(-\infty, +\infty)$.

Con gli intervalli si scrivono i domini delle funzioni e le soluzioni delle disequazioni. La disequazione $x^2 < 4$ ha per soluzioni l'intervallo aperto $(-2, 2)$, di ampiezza $4$, e la disequazione $2x - 6 \geq 0$ ha per soluzioni l'intervallo illimitato $[3, +\infty)$.
:::

:::definizione{#intorni titolo="Intorni di un punto"}
Sia $x_0$ un numero reale e sia $\delta$ un numero positivo. L'**intorno circolare** di $x_0$ di raggio $\delta$ è l'intervallo aperto $(x_0 - \delta, x_0 + \delta)$, che ha centro $x_0$. I suoi punti sono i numeri $x$ che distano da $x_0$ meno di $\delta$, cioè quelli che soddisfano la disequazione
$$
|x - x_0| < \delta .
$$
Più in generale si chiama **intorno** di $x_0$, e si indica con $I(x_0)$, ogni intervallo aperto che contiene $x_0$. L'intervallo $[x_0, x_0 + \delta)$ si chiama intorno destro di $x_0$, e l'intervallo $(x_0 - \delta, x_0]$ si chiama intorno sinistro.

Gli intorni servono a dire in modo preciso che un numero $x$ è vicino a $x_0$. Più il raggio $\delta$ è piccolo, più i punti dell'intorno sono vicini a $x_0$. Per esempio l'intorno circolare di $3$ di raggio $0{,}1$ è l'intervallo $(2{,}9;\ 3{,}1)$, perché la disequazione $|x - 3| < 0{,}1$ equivale a $-0{,}1 < x - 3 < 0{,}1$, cioè a $2{,}9 < x < 3{,}1$.
:::

:::definizione{#intorni-infinito titolo="Intorni di infinito"}
Sia $a$ un numero reale. Un **intorno di più infinito** è un intervallo $(a, +\infty)$, e un intorno di meno infinito è un intervallo $(-\infty, a)$. Con $a > 0$, l'insieme $(-\infty, -a) \cup (a, +\infty)$ si chiama intorno di infinito, senza segno; i suoi punti sono i numeri che soddisfano $|x| > a$.

Questi intorni servono a dire in modo preciso che un numero $x$ è molto grande, oppure molto grande in valore assoluto. Per esempio l'intervallo $(1000, +\infty)$ è un intorno di $+\infty$, e i numeri con $|x| > 10$ formano un intorno di infinito.
:::

:::definizione{#punti-accumulazione titolo="Punti di accumulazione e punti isolati"}
Sia $A$ un insieme di numeri reali. Un numero $x_0$ è un **punto di accumulazione** di $A$ se ogni intorno di $x_0$ contiene almeno un punto di $A$ diverso da $x_0$; il numero $x_0$ può appartenere ad $A$ oppure no. Un punto $x_0$ di $A$ è un **punto isolato** di $A$ se esiste un intorno di $x_0$ che non contiene altri punti di $A$. Per esempio, per l'insieme $A = (0, 1] \cup \{2\}$:

- $0$ è un punto di accumulazione di $A$ che non appartiene ad $A$, perché ogni intorno $(-\delta, \delta)$ con $\delta < 1$ contiene il punto $\dfrac{\delta}{2}$, che sta in $(0, 1]$;
- $2$ è un punto isolato di $A$, perché l'intorno $(1{,}5;\ 2{,}5)$ non contiene altri punti di $A$.

Il limite di una funzione per $x$ che tende a $x_0$ si definisce solo quando $x_0$ è un punto di accumulazione del dominio $D$, perché $x$ deve potersi avvicinare a $x_0$ restando in $D$. Per esempio la funzione $f(x) = \sqrt{x^3 - x^2}$ è definita quando $x^2 (x - 1) \geq 0$, cioè per $x = 0$ e per $x \geq 1$. Il suo dominio è quindi $D = \{0\} \cup [1, +\infty)$. Il punto $0$ è isolato, perciò per $x \to 0$ il limite non ha senso, mentre il punto $1$ è di accumulazione.
:::

## Limite finito per x che tende a un numero

:::definizione{#limite-finito titolo="Limite finito in un punto"}
L'idea è che i valori $f(x)$ si avvicinano quanto si vuole a un numero $\ell$ quando $x$ si avvicina a $x_0$. Per dirlo in modo preciso si fissa una distanza $\varepsilon$, piccola a piacere, e si chiede che $f(x)$ disti da $\ell$ meno di $\varepsilon$ per tutti gli $x$ abbastanza vicini a $x_0$.

Sia $f$ una funzione con dominio $D$, sia $x_0$ un punto di accumulazione di $D$ e sia $\ell$ un numero reale. Si dice che $f(x)$ **tende** a $\ell$ per $x$ che tende a $x_0$, e si scrive
$$
\lim_{x \to x_0} f(x) = \ell ,
$$
se per ogni numero $\varepsilon > 0$ esiste un numero $\delta > 0$ tale che
$$
|f(x) - \ell| < \varepsilon \qquad \text{per ogni } x \text{ di } D \text{ con } 0 < |x - x_0| < \delta .
$$
In altre parole, la distanza di $f(x)$ da $\ell$ è minore del numero $\varepsilon$ scelto, purché la distanza di $x$ da $x_0$ sia minore di un opportuno $\delta$. La condizione $0 < |x - x_0|$ esclude il punto $x_0$, quindi il valore $f(x_0)$ non interviene nella definizione, e la funzione può anche non essere definita in $x_0$. Nel grafico la disuguaglianza $|f(x) - \ell| < \varepsilon$ significa che il punto $\big( x, f(x) \big)$ sta nella striscia orizzontale $\ell - \varepsilon < y < \ell + \varepsilon$.

Per $f(x) = 2x + 1$ e $x_0 = 1$ il limite è $\ell = 3$. Infatti $|f(x) - 3| = |2x - 2| = 2\,|x - 1|$, e la disequazione $2\,|x - 1| < \varepsilon$ equivale a $|x - 1| < \dfrac{\varepsilon}{2}$. Quindi, per ogni $\varepsilon > 0$, il numero $\delta = \dfrac{\varepsilon}{2}$ soddisfa la definizione. Con $\varepsilon = 1$ si ha $\delta = \dfrac{1}{2}$, e per $\dfrac{1}{2} < x < \dfrac{3}{2}$ i valori di $f$ sono compresi tra $2$ e $4$.

::grafico{f="2*x+1" area="4;2;0.5;1.5" segmenti="-1,2,3,2;-1,4,3,4;0.5,0,0.5,2;1.5,0,1.5,4" punti="1,3,pieno" xmin=-1 xmax=3 ymin=-1 ymax=7 legenda="y = 2x + 1" titolo="Con $\varepsilon = 1$ e $\delta = \dfrac{1}{2}$, per $\dfrac{1}{2} < x < \dfrac{3}{2}$ il grafico di $y = 2x + 1$ sta nella striscia $2 < y < 4$"}

:::

:::esempio{titolo="Un limite in un punto escluso dal dominio"}
La funzione $f(x) = \dfrac{x^2 - 4}{x - 2}$ ha dominio $D = \mathbb{R} \setminus \{2\}$, e $2$ è un punto di accumulazione di $D$. Per $x \neq 2$ si scompone il numeratore e si semplifica:
$$
\frac{x^2 - 4}{x - 2} = \frac{(x - 2)(x + 2)}{x - 2} = x + 2 .
$$
Si verifica che il limite per $x \to 2$ è $4$. Per $x \neq 2$ si ha $|f(x) - 4| = |x + 2 - 4| = |x - 2|$, quindi la disuguaglianza $|f(x) - 4| < \varepsilon$ vale per $0 < |x - 2| < \varepsilon$, e si può prendere $\delta = \varepsilon$. Il grafico di $f$ è la retta $y = x + 2$ privata del punto $(2, 4)$. La funzione non è definita in $2$, e tuttavia il limite esiste e vale $4$.

::grafico{f="(x^2-4)/(x-2)" punti="2,4,vuoto" segmenti="2,0,2,4;0,4,2,4" xmin=-3 xmax=4 ymin=-2 ymax=7 legenda="y = \dfrac{x^2 - 4}{x - 2}" titolo="Il grafico di $f(x) = \dfrac{x^2 - 4}{x - 2}$ è la retta $y = x + 2$ senza il punto $(2, 4)$, e il limite di $f$ per $x \to 2$ vale $4$"}

:::

:::definizione{#limite-destro-sinistro titolo="Limite destro e limite sinistro"}
Se nella definizione di limite si considerano solo i punti con $x > x_0$, cioè la condizione $x_0 < x < x_0 + \delta$, si ottiene il **limite destro**, che si scrive $\displaystyle\lim_{x \to x_0^+} f(x)$. Con i soli punti $x < x_0$, cioè con la condizione $x_0 - \delta < x < x_0$, si ottiene il **limite sinistro** $\displaystyle\lim_{x \to x_0^-} f(x)$. Il limite per $x \to x_0$ esiste e vale $\ell$ se e *solo se* il limite destro e il limite sinistro esistono e valgono entrambi $\ell$.

Per esempio la funzione che vale $x + 1$ per $x < 1$ e $4 - x$ per $x \geq 1$ ha in $x_0 = 1$ limite sinistro $2$, perché per $x < 1$ i valori $x + 1$ si avvicinano a $2$, e limite destro $3$, perché per $x > 1$ i valori $4 - x$ si avvicinano a $3$. I due limiti sono diversi, quindi il limite per $x \to 1$ *non* esiste.

::grafico{linee="-2,-1 1,2;1,3 4,0" punti="1,2,vuoto;1,3,pieno" segmenti="1,0,1,3" xmin=-2 xmax=4 ymin=-2 ymax=4 titolo="La funzione vale $x + 1$ per $x < 1$ e $4 - x$ per $x \geq 1$, quindi in $x_0 = 1$ il limite sinistro è $2$ e il limite destro è $3$"}

:::

## Limite infinito per x che tende a un numero

:::definizione{#limite-infinito titolo="Limite infinito in un punto"}
L'idea è che i valori $f(x)$ diventano più grandi di qualsiasi numero quando $x$ si avvicina a $x_0$. Sia $f$ una funzione con dominio $D$ e sia $x_0$ un punto di accumulazione di $D$. Si scrive
$$
\lim_{x \to x_0} f(x) = +\infty
$$
se per ogni numero $M > 0$ esiste un numero $\delta > 0$ tale che $f(x) > M$ per ogni $x$ di $D$ con $0 < |x - x_0| < \delta$. Il numero $M$ è una soglia grande a piacere, che i valori di $f$ superano quando $x$ è abbastanza vicino a $x_0$. Il limite è $-\infty$ se, nella stessa definizione, si sostituisce la condizione $f(x) > M$ con $f(x) < -M$.

Per $f(x) = \dfrac{1}{x^2}$ e $x_0 = 0$ il limite è $+\infty$. Infatti, per $x \neq 0$, la disequazione $\dfrac{1}{x^2} > M$ equivale a $x^2 < \dfrac{1}{M}$, cioè a $|x| < \dfrac{1}{\sqrt{M}}$, quindi si può prendere $\delta = \dfrac{1}{\sqrt{M}}$. Con $M = 4$ si ottiene $\delta = \dfrac{1}{2}$, e con $M = 100$ si ottiene $\delta = \dfrac{1}{10}$.

::grafico{f="1/x^2" asintoti="x=0" segmenti="-3,4,3,4;-0.5,0,-0.5,4;0.5,0,0.5,4" xmin=-3 xmax=3 ymin=-1 ymax=9 legenda="y = \dfrac{1}{x^2}" titolo="Con $M = 4$ e $\delta = \dfrac{1}{2}$, per $0 < |x| < \dfrac{1}{2}$ il grafico di $y = \dfrac{1}{x^2}$ sta sopra la retta $y = 4$"}

Considerando solo $x > x_0$ oppure solo $x < x_0$ si ottengono i limiti infiniti destro e sinistro. Per esempio $\dfrac{1}{x}$ tende a $+\infty$ per $x \to 0^+$ e a $-\infty$ per $x \to 0^-$, perché per $x$ positivo e vicino a $0$ il quoziente $\dfrac{1}{x}$ è positivo e grande, mentre per $x$ negativo è negativo. Quando almeno uno dei due limiti in $x_0$ è infinito, la retta $x = x_0$ si chiama asintoto verticale del grafico; gli asintoti si studiano nell'argomento sulla continuità e gli asintoti.
:::

## Limiti per x che tende all'infinito

:::definizione{#limite-finito-all-infinito titolo="Limite finito all'infinito"}
Sia $f$ una funzione il cui dominio $D$ contiene un intorno di $+\infty$. Si scrive
$$
\lim_{x \to +\infty} f(x) = \ell
$$
se per ogni numero $\varepsilon > 0$ esiste un numero $N > 0$ tale che $|f(x) - \ell| < \varepsilon$ per ogni $x$ di $D$ con $x > N$. Il numero $N$ ha il ruolo che $\delta$ aveva nel limite in un punto, perché la condizione $x > N$ dice che $x$ sta nell'intorno $(N, +\infty)$. Per $x \to -\infty$ la condizione $x > N$ si sostituisce con $x < -N$. Quando $f(x)$ tende a un numero $\ell$ per $x \to +\infty$ oppure per $x \to -\infty$, la retta $y = \ell$ è un asintoto orizzontale del grafico.

Per $f(x) = \dfrac{2x + 1}{x}$ il limite per $x \to +\infty$ è $2$. Infatti $f(x) = 2 + \dfrac{1}{x}$, e per $x > 0$ si ha $|f(x) - 2| = \dfrac{1}{x}$. La disequazione $\dfrac{1}{x} < \varepsilon$ equivale a $x > \dfrac{1}{\varepsilon}$, quindi si può prendere $N = \dfrac{1}{\varepsilon}$. Con $\varepsilon = \dfrac{1}{2}$ si ha $N = 2$, e per $x > 2$ i valori di $f$ sono compresi tra $2$ e $\dfrac{5}{2}$.

::grafico{f="(2*x+1)/x" area="2.5;1.5;2;10" asintoti="y=2" segmenti="0,2.5,10,2.5;0,1.5,10,1.5;2,0,2,2.5" xmin=0 xmax=10 ymin=0 ymax=5 legenda="y = \dfrac{2x + 1}{x}" titolo="Con $\varepsilon = \dfrac{1}{2}$ e $N = 2$, per $x > 2$ il grafico di $y = \dfrac{2x + 1}{x}$ sta nella striscia $\dfrac{3}{2} < y < \dfrac{5}{2}$"}

:::

:::definizione{#limite-infinito-all-infinito titolo="Limite infinito all'infinito"}
Sia $f$ una funzione il cui dominio $D$ contiene un intorno di $+\infty$. Si scrive
$$
\lim_{x \to +\infty} f(x) = +\infty
$$
se per ogni numero $M > 0$ esiste un numero $N > 0$ tale che $f(x) > M$ per ogni $x$ di $D$ con $x > N$. Le definizioni con $-\infty$ si ottengono sostituendo $f(x) > M$ con $f(x) < -M$, oppure $x > N$ con $x < -N$.

Per esempio $\sqrt{x}$ tende a $+\infty$ per $x \to +\infty$. La disequazione $\sqrt{x} > M$ equivale infatti a $x > M^2$, quindi si può prendere $N = M^2$. Con $M = 10$ si ottiene $N = 100$, e per $x > 100$ si ha $\sqrt{x} > 10$.
:::

:::osservazione{#quattro-definizioni titolo="Le quattro definizioni a confronto"}
Le quattro definizioni hanno la stessa struttura. Si fissa per prima la condizione su $f(x)$, con $\varepsilon$ oppure con $M$ arbitrari, e poi si cerca la condizione su $x$, con $\delta$ oppure con $N$, che la garantisce.

| limite | condizione su $f(x)$ | condizione su $x$ |
| --- | --- | --- |
| $\displaystyle\lim_{x \to x_0} f(x) = \ell$ | $\lvert f(x) - \ell \rvert < \varepsilon$ | $0 < \lvert x - x_0 \rvert < \delta$ |
| $\displaystyle\lim_{x \to x_0} f(x) = +\infty$ | $f(x) > M$ | $0 < \lvert x - x_0 \rvert < \delta$ |
| $\displaystyle\lim_{x \to +\infty} f(x) = \ell$ | $\lvert f(x) - \ell \rvert < \varepsilon$ | $x > N$ |
| $\displaystyle\lim_{x \to +\infty} f(x) = +\infty$ | $f(x) > M$ | $x > N$ |

Nella verifica di un limite si parte dalla disequazione su $f(x)$ e la si risolve rispetto a $x$. Il limite è verificato se le soluzioni contengono un intorno di $x_0$, escluso al più $x_0$, oppure un intorno di $+\infty$.
:::

## Teoremi sui limiti

::::teorema{#unicita-limite titolo="Teorema di unicità del limite"}
Se esiste il limite di $f(x)$ per $x \to x_0$, allora questo limite è unico.

Il teorema permette di parlare de *il* limite di una funzione. Ne segue anche un modo per dimostrare che un limite non esiste. Se avvicinandosi a $x_0$ in due modi diversi si ottengono due valori diversi, il limite non esiste. Per esempio $\dfrac{|x|}{x}$ vale $1$ per $x > 0$ e $-1$ per $x < 0$, quindi in $0$ il limite destro è $1$ e il limite sinistro è $-1$, e il limite per $x \to 0$ non esiste. Il teorema vale anche per $x \to +\infty$, per $x \to -\infty$ e per i limiti infiniti.

:::dimostrazione
L'idea è che due strisce orizzontali abbastanza strette, attorno a due numeri diversi, non hanno punti in comune. Si dimostra il caso di due limiti finiti, ragionando per assurdo. Si supponga che $f(x)$ tenda sia a $\ell_1$ sia a $\ell_2$, con $\ell_1 < \ell_2$, e si scelga
$$
\varepsilon = \frac{\ell_2 - \ell_1}{2} ,
$$
cioè metà della distanza tra i due numeri. Poiché $f(x)$ tende a $\ell_1$, esiste $\delta_1 > 0$ tale che $|f(x) - \ell_1| < \varepsilon$ per $0 < |x - x_0| < \delta_1$, e in particolare $f(x) < \ell_1 + \varepsilon$. Poiché $f(x)$ tende a $\ell_2$, esiste $\delta_2 > 0$ tale che $|f(x) - \ell_2| < \varepsilon$ per $0 < |x - x_0| < \delta_2$, e in particolare $f(x) > \ell_2 - \varepsilon$.

Sia $\delta$ il minore tra $\delta_1$ e $\delta_2$. Siccome $x_0$ è un punto di accumulazione del dominio, esiste un punto $x$ del dominio con $0 < |x - x_0| < \delta$, e per questo punto valgono entrambe le disuguaglianze. Con la scelta fatta di $\varepsilon$ si ha
$$
\ell_1 + \varepsilon = \ell_2 - \varepsilon = \frac{\ell_1 + \ell_2}{2} ,
$$
quindi dovrebbe valere sia $f(x) < \dfrac{\ell_1 + \ell_2}{2}$ sia $f(x) > \dfrac{\ell_1 + \ell_2}{2}$, il che è impossibile. Perciò $\ell_1 = \ell_2$.
:::
::::

::::teorema{#permanenza-segno titolo="Teorema della permanenza del segno"}
Se $\displaystyle\lim_{x \to x_0} f(x) = \ell$ con $\ell \neq 0$, allora esiste un intorno $I(x_0)$ in cui $f(x)$ ha lo stesso segno di $\ell$, per ogni $x$ del dominio diverso da $x_0$.

Il teorema permette di conoscere il segno di una funzione vicino a $x_0$ dal segno del limite, senza risolvere una disequazione. Per esempio $\displaystyle\lim_{x \to 2} \left( x^3 - 3x \right) = 8 - 6 = 2$, che è positivo, quindi $x^3 - 3x > 0$ in un intorno di $2$. Il teorema vale anche per $x \to \pm\infty$.

:::dimostrazione
Si dimostra il caso $\ell > 0$. L'idea è usare nella definizione di limite una distanza $\varepsilon$ minore di $\ell$, così che la striscia attorno a $\ell$ stia tutta sopra l'asse $x$. Con $\varepsilon = \dfrac{\ell}{2}$ esiste $\delta > 0$ tale che, per ogni $x$ del dominio con $0 < |x - x_0| < \delta$,
$$
|f(x) - \ell| < \frac{\ell}{2} ,
\qquad
\text{cioè}
\qquad
\ell - \frac{\ell}{2} < f(x) < \ell + \frac{\ell}{2} .
$$
In particolare $f(x) > \dfrac{\ell}{2} > 0$, quindi $f(x)$ è positivo nell'intorno $(x_0 - \delta, x_0 + \delta)$, escluso al più $x_0$. Nel caso $\ell < 0$ si sceglie $\varepsilon = -\dfrac{\ell}{2}$, e allo stesso modo si ottiene $f(x) < \dfrac{\ell}{2} < 0$.
:::
::::

:::attenzione
Una funzione positiva vicino a $x_0$ può avere limite $0$. La funzione $x^2$ è positiva per ogni $x \neq 0$, e $\displaystyle\lim_{x \to 0} x^2 = 0$. Perciò, se $f(x) > 0$ in un intorno di $x_0$ e il limite $\ell$ esiste, si può concludere soltanto che $\ell \geq 0$. Infatti, se fosse $\ell < 0$, per il teorema della permanenza del segno la funzione sarebbe negativa vicino a $x_0$.
:::

::::teorema{#teorema-confronto titolo="Teorema del confronto"}
Siano $f$, $g$ e $h$ tre funzioni definite in un intorno di $x_0$, escluso al più $x_0$, tali che
$$
g(x) \leq f(x) \leq h(x)
$$
per ogni $x$ dell'intorno diverso da $x_0$. Se $\displaystyle\lim_{x \to x_0} g(x) = \lim_{x \to x_0} h(x) = \ell$, allora anche $\displaystyle\lim_{x \to x_0} f(x) = \ell$.

Il teorema, detto anche teorema dei due carabinieri, permette di calcolare il limite di una funzione compresa tra due funzioni che hanno lo stesso limite. Vale anche per $x \to \pm\infty$. Per esempio, per calcolare $\displaystyle\lim_{x \to +\infty} \frac{\sin x}{x}$ si parte da $-1 \leq \sin x \leq 1$. Per $x > 0$ si dividono i tre membri per $x$, e si ottiene
$$
-\frac{1}{x} \leq \frac{\sin x}{x} \leq \frac{1}{x} .
$$
Le due funzioni esterne tendono a $0$ per $x \to +\infty$, quindi, per il **teorema del confronto**, anche $\dfrac{\sin x}{x}$ tende a $0$.

::grafico{f="sin(x)/x;1/x;-1/x" xmin=0 xmax=20 ymin=-1 ymax=1.5 legenda="y = \dfrac{\sin x}{x};y = \dfrac{1}{x};y = -\dfrac{1}{x}" titolo="Per $x > 0$ il grafico di $y = \dfrac{\sin x}{x}$ sta tra quelli di $y = -\dfrac{1}{x}$ e $y = \dfrac{1}{x}$, che tendono a $0$ per $x \to +\infty$"}

:::dimostrazione
L'idea è che $f$ è compresa tra due funzioni che, vicino a $x_0$, stanno entrambe nella striscia $\ell - \varepsilon < y < \ell + \varepsilon$. Si fissa $\varepsilon > 0$. Poiché $g(x)$ tende a $\ell$, esiste $\delta_1 > 0$ tale che $\ell - \varepsilon < g(x)$ per $0 < |x - x_0| < \delta_1$. Poiché $h(x)$ tende a $\ell$, esiste $\delta_2 > 0$ tale che $h(x) < \ell + \varepsilon$ per $0 < |x - x_0| < \delta_2$. Si sceglie $\delta$ non maggiore di $\delta_1$ e di $\delta_2$, e abbastanza piccolo perché l'intervallo $(x_0 - \delta, x_0 + \delta)$ sia contenuto nell'intorno dell'ipotesi. Per $0 < |x - x_0| < \delta$ valgono allora insieme le tre disuguaglianze, e
$$
\ell - \varepsilon < g(x) \leq f(x) \leq h(x) < \ell + \varepsilon .
$$
Quindi $|f(x) - \ell| < \varepsilon$. Il numero $\varepsilon$ è arbitrario, perciò $f(x)$ tende a $\ell$.
:::
::::

:::osservazione{#confronto-infinito titolo="Confronto con un limite infinito"}
Se $f(x) \geq g(x)$ in un intorno di $x_0$ e $g(x)$ tende a $+\infty$, allora anche $f(x)$ tende a $+\infty$. Infatti, quando $g(x) > M$, si ha anche $f(x) \geq g(x) > M$. In questo caso basta una sola funzione di confronto. Per esempio $x + \sin x \geq x - 1$, perché $\sin x \geq -1$, e $x - 1$ tende a $+\infty$ per $x \to +\infty$, quindi $\displaystyle\lim_{x \to +\infty} (x + \sin x) = +\infty$. Allo stesso modo, se $f(x) \leq g(x)$ e $g(x)$ tende a $-\infty$, anche $f(x)$ tende a $-\infty$.
:::

## Calcolo dei limiti e forme indeterminate

:::teorema{#limiti-funzioni-elementari titolo="Limiti delle funzioni elementari"}
Sia $f$ una funzione elementare (polinomio, funzione razionale, radice, esponenziale, logaritmo, funzione goniometrica), oppure una funzione ottenuta da queste con somme, prodotti, quozienti e composizioni. Se $x_0$ appartiene al dominio di $f$ ed è un suo punto di accumulazione, allora
$$
\lim_{x \to x_0} f(x) = f(x_0) .
$$
In questi casi il limite si calcola quindi sostituendo $x_0$ al posto di $x$. Per esempio
$$
\lim_{x \to 2} \left( x^3 - x + 1 \right) = 7 ,
\qquad
\lim_{x \to \frac{\pi}{3}} \cos x = \frac{1}{2} ,
\qquad
\lim_{x \to e} \ln x = 1 .
$$
Questa proprietà si chiama continuità, e si studia nell'argomento sulla continuità e gli asintoti. Agli estremi del dominio i limiti si leggono dai grafici delle funzioni elementari, studiati nell'argomento sulle funzioni e loro proprietà:

| $f(x)$ | limiti agli estremi del dominio |
| --- | --- |
| $x^n$, con $n$ naturale, $n \geq 1$ | $+\infty$ per $x \to +\infty$; per $x \to -\infty$, $+\infty$ se $n$ è pari e $-\infty$ se $n$ è dispari |
| $\sqrt{x}$ | $+\infty$ per $x \to +\infty$ |
| $a^{x}$, con $a > 1$ | $+\infty$ per $x \to +\infty$, $0$ per $x \to -\infty$ |
| $a^{x}$, con $0 < a < 1$ | $0$ per $x \to +\infty$, $+\infty$ per $x \to -\infty$ |
| $\log_a x$, con $a > 1$ | $+\infty$ per $x \to +\infty$, $-\infty$ per $x \to 0^+$ |
| $\log_a x$, con $0 < a < 1$ | $-\infty$ per $x \to +\infty$, $+\infty$ per $x \to 0^+$ |
| $\tan x$ | $+\infty$ per $x \to \left( \dfrac{\pi}{2} \right)^-$, $-\infty$ per $x \to \left( \dfrac{\pi}{2} \right)^+$ |
| $\arctan x$ | $\dfrac{\pi}{2}$ per $x \to +\infty$, $-\dfrac{\pi}{2}$ per $x \to -\infty$ |

Le funzioni $\sin x$ e $\cos x$ non hanno limite per $x \to \pm\infty$, perché assumono infinite volte tutti i valori compresi tra $-1$ e $1$.
:::

:::teorema{#operazioni-limiti titolo="Limiti della somma, del prodotto e del quoziente"}
Siano $\displaystyle\lim_{x \to x_0} f(x) = \ell$ e $\displaystyle\lim_{x \to x_0} g(x) = m$, con $\ell$ e $m$ numeri reali. Allora
$$
\lim_{x \to x_0} \big( f(x) + g(x) \big) = \ell + m ,
\qquad
\lim_{x \to x_0} f(x)\,g(x) = \ell\,m ,
\qquad
\lim_{x \to x_0} \frac{f(x)}{g(x)} = \frac{\ell}{m} \quad \text{se } m \neq 0 .
$$
Gli stessi risultati valgono per $x \to \pm\infty$. Il teorema permette di calcolare il limite di un'espressione a partire dai limiti delle sue parti. Per esempio
$$
\lim_{x \to 0} \frac{e^{x} + \cos x}{x + 2} = \frac{1 + 1}{0 + 2} = 1 .
$$
Le dimostrazioni usano la definizione di limite e si studiano all'università.
:::

:::teorema{#operazioni-infinito titolo="Operazioni con i limiti infiniti"}
Quando almeno uno dei limiti di $f$ e di $g$ è infinito, valgono le regole seguenti, dove $\ell$ è un numero reale e il segno del risultato si ottiene con la regola dei segni.

- Somma: $\ell + (\pm\infty) = \pm\infty$, $\ (+\infty) + (+\infty) = +\infty$, $\ (-\infty) + (-\infty) = -\infty$.
- Prodotto: $\ell \cdot (\pm\infty) = \pm\infty$ se $\ell > 0$, con il segno opposto se $\ell < 0$; $\ (\pm\infty) \cdot (\pm\infty) = \pm\infty$, con la regola dei segni.
- Quoziente: $\dfrac{\ell}{\pm\infty} = 0$, $\ \dfrac{\pm\infty}{\ell} = \pm\infty$ se $\ell \neq 0$, $\ \dfrac{\ell}{0} = \infty$ se $\ell \neq 0$.

Queste scritture sono abbreviazioni. Per esempio $\dfrac{\ell}{\pm\infty} = 0$ significa che, se $f(x)$ tende a $\ell$ e $g(x)$ tende a $+\infty$ oppure a $-\infty$, allora $\dfrac{f(x)}{g(x)}$ tende a $0$. Nella regola $\dfrac{\ell}{0}$ il segno dipende dal segno di $g(x)$ vicino a $x_0$. Si scrive $0^+$ se $g(x)$ tende a $0$ con valori positivi e $0^-$ se tende a $0$ con valori negativi. Per esempio
$$
\lim_{x \to 1^+} \frac{2}{x - 1} = \frac{2}{0^+} = +\infty ,
\qquad
\lim_{x \to 1^-} \frac{2}{x - 1} = \frac{2}{0^-} = -\infty ,
\qquad
\lim_{x \to +\infty} \frac{3}{x^2 + 1} = \frac{3}{+\infty} = 0 .
$$
:::

:::teorema{#limite-funzione-composta titolo="Limite della funzione composta"}
Sia $\displaystyle\lim_{x \to x_0} g(x) = t_0$, con $g(x) \neq t_0$ per ogni $x \neq x_0$ di un intorno di $x_0$, e sia $\displaystyle\lim_{t \to t_0} F(t) = L$. Allora
$$
\lim_{x \to x_0} F\big( g(x) \big) = L .
$$
Il teorema vale anche quando $x_0$, $t_0$ oppure $L$ sono infiniti. Permette di calcolare un limite con il **cambio di variabile** $t = g(x)$, e la sua dimostrazione si studia all'università. Per esempio, per $x \to 0^+$ si pone $t = \dfrac{1}{x}$, che tende a $+\infty$; poiché $e^{t}$ tende a $+\infty$, si ha $\displaystyle\lim_{x \to 0^+} e^{\frac{1}{x}} = +\infty$. Per $x \to 0^-$ invece $t = \dfrac{1}{x}$ tende a $-\infty$ e $e^{t}$ tende a $0$, quindi $\displaystyle\lim_{x \to 0^-} e^{\frac{1}{x}} = 0$.
:::

:::definizione{#forme-indeterminate titolo="Forme indeterminate"}
In alcuni casi le regole delle operazioni non determinano il risultato, perché il limite dipende dalle funzioni particolari. Questi casi si chiamano **forme indeterminate**, e sono sette:
$$
+\infty - \infty ,
\qquad
0 \cdot \infty ,
\qquad
\frac{0}{0} ,
\qquad
\frac{\infty}{\infty} ,
\qquad
1^{\infty} ,
\qquad
0^{0} ,
\qquad
\infty^{0} .
$$
Per esempio, per $x \to 0$ i quozienti $\dfrac{x}{x}$, $\dfrac{x^2}{x}$ e $\dfrac{x}{x^3}$ si presentano tutti nella forma $\dfrac{0}{0}$, ma i loro limiti sono $1$, $0$ e $+\infty$. Per calcolare un limite che si presenta in forma indeterminata si trasforma l'espressione, con una scomposizione, un raccoglimento o una razionalizzazione, oppure si usano i limiti notevoli. Il teorema di De L'Hôpital, che si applica alle forme $\dfrac{0}{0}$ e $\dfrac{\infty}{\infty}$, si studia nell'argomento sui teoremi del calcolo differenziale.
:::

:::esempio{titolo="Una forma indeterminata risolta con una scomposizione"}
Il limite
$$
\lim_{x \to 3} \frac{x^2 - 9}{x^2 - 2x - 3}
$$
si presenta nella forma $\dfrac{0}{0}$, perché numeratore e denominatore si annullano per $x = 3$. Per il teorema di Ruffini entrambi i polinomi sono divisibili per $x - 3$, e si ha
$$
\frac{x^2 - 9}{x^2 - 2x - 3} = \frac{(x - 3)(x + 3)}{(x - 3)(x + 1)} = \frac{x + 3}{x + 1} \qquad \text{per } x \neq 3 .
$$
La semplificazione è lecita, perché nel calcolo del limite il punto $x = 3$ è escluso. L'ultima espressione è una funzione razionale definita in $3$, quindi il limite vale $\dfrac{6}{4} = \dfrac{3}{2}$.
:::

:::teorema{#limiti-razionali-infinito titolo="Limiti all'infinito di polinomi e funzioni razionali"}
Per $x \to \pm\infty$ un polinomio ha lo stesso limite del suo termine di grado massimo. Per una funzione razionale $\dfrac{P(x)}{Q(x)}$, con $P$ di grado $p$ e coefficiente direttore $a$, e $Q$ di grado $q$ e coefficiente direttore $b$:

- se $p < q$, il limite è $0$;
- se $p = q$, il limite è $\dfrac{a}{b}$;
- se $p > q$, il limite è infinito, con il segno di $\dfrac{a\,x^{p}}{b\,x^{q}}$.

Le regole si ottengono raccogliendo la potenza di grado massimo. Per esempio, per $x \to +\infty$,
$$
x^3 - 5x^2 + 2 = x^3 \left( 1 - \frac{5}{x} + \frac{2}{x^3} \right) \to +\infty ,
\qquad
\frac{3x^2 - x}{2x^2 + 5} = \frac{x^2 \left( 3 - \dfrac{1}{x} \right)}{x^2 \left( 2 + \dfrac{5}{x^2} \right)} \to \frac{3}{2} .
$$
Nel primo caso la forma $+\infty - \infty$ scompare, perché il fattore $1 - \dfrac{5}{x} + \dfrac{2}{x^3}$ tende a $1$. Nel secondo la forma $\dfrac{\infty}{\infty}$ scompare dopo la semplificazione di $x^2$. Allo stesso modo $\dfrac{x + 1}{x^2 + 4}$ tende a $0$.
:::

:::esempio{titolo="Forme indeterminate con i radicali"}
Il limite $\displaystyle\lim_{x \to 4} \frac{\sqrt{x} - 2}{x - 4}$ si presenta nella forma $\dfrac{0}{0}$. Si moltiplicano numeratore e denominatore per $\sqrt{x} + 2$, e al numeratore si ottiene la differenza di quadrati $x - 4$:
$$
\frac{\sqrt{x} - 2}{x - 4} = \frac{(\sqrt{x} - 2)(\sqrt{x} + 2)}{(x - 4)(\sqrt{x} + 2)} = \frac{x - 4}{(x - 4)(\sqrt{x} + 2)} = \frac{1}{\sqrt{x} + 2} ,
$$
quindi il limite vale $\dfrac{1}{4}$.

Il limite $\displaystyle\lim_{x \to +\infty} \left( \sqrt{x^2 + 4x} - x \right)$ si presenta nella forma $+\infty - \infty$. Si moltiplica e si divide per $\sqrt{x^2 + 4x} + x$, e poi si raccoglie $x$, che è positivo:
$$
\begin{aligned}
\sqrt{x^2 + 4x} - x
&= \frac{x^2 + 4x - x^2}{\sqrt{x^2 + 4x} + x} \\[6pt]
&= \frac{4x}{x \left( \sqrt{1 + \dfrac{4}{x}} + 1 \right)} \\[6pt]
&= \frac{4}{\sqrt{1 + \dfrac{4}{x}} + 1} .
\end{aligned}
$$
Per $x \to +\infty$ il denominatore tende a $2$, perciò il limite vale $2$.
:::

:::attenzione
Per portare $x$ fuori da una radice quadrata si usa l'uguaglianza $\sqrt{x^2} = |x|$, che per $x < 0$ dà $\sqrt{x^2} = -x$. Per esempio, per $x \to -\infty$ si ha $\sqrt{x^2 + 1} = |x| \sqrt{1 + \dfrac{1}{x^2}} = -x \sqrt{1 + \dfrac{1}{x^2}}$, quindi
$$
\lim_{x \to -\infty} \frac{\sqrt{x^2 + 1}}{x} = \lim_{x \to -\infty} \left( -\sqrt{1 + \frac{1}{x^2}} \right) = -1 ,
$$
mentre per $x \to +\infty$ lo stesso limite vale $1$. Il risultato $-1$ è coerente con il segno della funzione, che per $x < 0$ è negativa.
:::

## Limiti notevoli

::::teorema{#limite-notevole-seno titolo="Limite notevole del seno"}
Con $x$ misurato in radianti vale
$$
\lim_{x \to 0} \frac{\sin x}{x} = 1 .
$$
Il limite si presenta nella forma $\dfrac{0}{0}$, e le trasformazioni algebriche non permettono di calcolarlo. Il risultato dice che, per $x$ vicino a $0$, il seno di $x$ è quasi uguale a $x$; per esempio $\sin 0{,}1 = 0{,}0998\ldots$ Questo limite serve per calcolare la derivata di $\sin x$, nell'argomento sulle derivate.

::grafico{f="sin(x)/x" punti="0,1,vuoto" xmin=-10 xmax=10 ymin=-1 ymax=2 legenda="y = \dfrac{\sin x}{x}" titolo="La funzione $y = \dfrac{\sin x}{x}$ non è definita in $0$, e il suo limite per $x \to 0$ è $1$"}

:::dimostrazione
Si considera prima $0 < x < \dfrac{\pi}{2}$. Nella circonferenza goniometrica, di centro $O$ e raggio $1$, sia $A(1, 0)$ e sia $P(\cos x, \sin x)$ il punto della circonferenza per cui l'angolo $A\widehat{O}P$ misura $x$ radianti. Sia poi $T(1, \tan x)$ il punto in cui la retta $OP$ incontra la retta tangente alla circonferenza in $A$. L'idea è confrontare le aree di tre figure, ciascuna contenuta nella successiva: il triangolo $OAP$, il settore circolare $OAP$ e il triangolo $OAT$.

::grafico{curve="cos(t),sin(t),0,1.5708" segmenti="0,0,1,0.8423;1,0,1,0.8423;0.7648,0.6442,1,0;0.7648,0.6442,0.7648,0" punti="0,0,pieno,O;1,0,pieno,A;0.7648,0.6442,pieno,P;1,0.8423,pieno,T" etichette="0.62,0.3,sin x;1.05,0.42,tan x" xmin=-0.2 xmax=1.4 ymin=-0.2 ymax=1.2 uguale=1 legenda=0 titolo="Per $0 < x < \dfrac{\pi}{2}$ il triangolo $OAP$ è contenuto nel settore circolare $OAP$, che è contenuto nel triangolo $OAT$"}

- Il triangolo $OAP$ ha base $OA = 1$ e altezza uguale all'ordinata di $P$, cioè $\sin x$, quindi ha area $\dfrac{\sin x}{2}$.
- Il settore circolare ha raggio $1$ e angolo $x$. L'area di un settore è proporzionale all'angolo, e l'intero cerchio, di angolo $2\pi$, ha area $\pi$; quindi il settore ha area $\dfrac{x}{2}$.
- Il triangolo $OAT$ ha base $OA = 1$ e altezza $AT = \tan x$, quindi ha area $\dfrac{\tan x}{2}$.

Ciascuna figura è contenuta nella successiva, quindi $\dfrac{\sin x}{2} < \dfrac{x}{2} < \dfrac{\tan x}{2}$. Moltiplicando per $2$ si ottiene
$$
\sin x < x < \frac{\sin x}{\cos x} .
$$
Poiché $\sin x > 0$, si possono dividere tutti i membri per $\sin x$ senza cambiare il verso delle disuguaglianze:
$$
1 < \frac{x}{\sin x} < \frac{1}{\cos x} .
$$
I tre membri sono positivi, e passando ai reciproci le disuguaglianze cambiano verso:
$$
\cos x < \frac{\sin x}{x} < 1 .
$$
Per $x \to 0^+$ si ha $\cos x \to 1$, e la costante $1$ tende a $1$. Per il **teorema del confronto** si ottiene quindi $\displaystyle\lim_{x \to 0^+} \frac{\sin x}{x} = 1$.

Per $x < 0$ si osserva che $\dfrac{\sin(-x)}{-x} = \dfrac{-\sin x}{-x} = \dfrac{\sin x}{x}$, perché il seno è una funzione dispari. La funzione $\dfrac{\sin x}{x}$ è quindi pari, e il suo limite sinistro in $0$ è uguale al limite destro. Perciò il limite per $x \to 0$ vale $1$.
:::
::::

:::teorema{#limiti-goniometrici titolo="Limiti che derivano dal limite del seno"}
Con $x$ in radianti valgono
$$
\lim_{x \to 0} \frac{1 - \cos x}{x^2} = \frac{1}{2} ,
\qquad
\lim_{x \to 0} \frac{1 - \cos x}{x} = 0 ,
\qquad
\lim_{x \to 0} \frac{\tan x}{x} = 1 .
$$
Per il primo si moltiplicano numeratore e denominatore per $1 + \cos x$, e si usa l'identità $1 - \cos^2 x = \sin^2 x$:
$$
\frac{1 - \cos x}{x^2} = \frac{1 - \cos^2 x}{x^2 (1 + \cos x)} = \left( \frac{\sin x}{x} \right)^2 \cdot \frac{1}{1 + \cos x} ,
$$
che tende a $1^2 \cdot \dfrac{1}{2} = \dfrac{1}{2}$. Il secondo segue dal primo, perché $\dfrac{1 - \cos x}{x} = \dfrac{1 - \cos x}{x^2} \cdot x$ tende a $\dfrac{1}{2} \cdot 0 = 0$. Il terzo segue da $\dfrac{\tan x}{x} = \dfrac{\sin x}{x} \cdot \dfrac{1}{\cos x}$, che tende a $1 \cdot 1 = 1$.

Per il teorema sul limite della funzione composta, i limiti notevoli valgono anche quando al posto di $x$ c'è una funzione $g(x)$ che tende a $0$. Per esempio, con $t = 5x$,
$$
\lim_{x \to 0} \frac{\sin (5x)}{x} = \lim_{x \to 0} 5 \cdot \frac{\sin (5x)}{5x} = 5 \cdot 1 = 5 .
$$
:::

:::esempio{titolo="Un limite con due limiti notevoli goniometrici"}
Il limite $\displaystyle\lim_{x \to 0} \frac{1 - \cos (2x)}{x \sin x}$ si presenta nella forma $\dfrac{0}{0}$. Si moltiplica e si divide per $4x^2 = (2x)^2$, così che compaia il limite notevole del coseno con $t = 2x$:
$$
\frac{1 - \cos (2x)}{x \sin x} = \frac{1 - \cos (2x)}{(2x)^2} \cdot \frac{4x^2}{x \sin x} = \frac{1 - \cos (2x)}{(2x)^2} \cdot 4 \cdot \frac{x}{\sin x} .
$$
Il primo fattore tende a $\dfrac{1}{2}$ e l'ultimo tende a $1$, quindi il limite vale $\dfrac{1}{2} \cdot 4 \cdot 1 = 2$.
:::

:::teorema{#limite-notevole-e titolo="Limite notevole del numero e"}
Vale
$$
\lim_{x \to +\infty} \left( 1 + \frac{1}{x} \right)^{x} = e ,
\qquad
\lim_{x \to -\infty} \left( 1 + \frac{1}{x} \right)^{x} = e ,
$$
dove $e = 2{,}71828\ldots$ è il numero di Nepero, la base dei logaritmi naturali. Il limite si presenta nella forma $1^{\infty}$, perché la base tende a $1$ e l'esponente tende a infinito. I valori della funzione si avvicinano a $e$ al crescere di $x$:

| $x$ | $1$ | $10$ | $100$ | $1000$ |
| --- | --- | --- | --- | --- |
| $\left( 1 + \dfrac{1}{x} \right)^{x}$ | $2$ | $2{,}5937\ldots$ | $2{,}7048\ldots$ | $2{,}7169\ldots$ |

La dimostrazione si studia all'università. Da questo limite si ricavano i limiti notevoli degli esponenziali e dei logaritmi, che servono per calcolare le derivate di $e^{x}$ e di $\ln x$.

::grafico{f="(1+1/x)^x" asintoti="y=2.71828" xmin=0 xmax=20 ymin=0 ymax=4 legenda="y = \left( 1 + \dfrac{1}{x} \right)^{x}" titolo="Per $x \to +\infty$ la funzione $y = \left( 1 + \dfrac{1}{x} \right)^{x}$ cresce e si avvicina alla retta $y = e$"}

:::

:::teorema{#limiti-esponenziali-logaritmici titolo="Limiti che derivano dal limite del numero e"}
Per ogni numero reale $k$ e per ogni $a > 0$ valgono
$$
\lim_{x \to \pm\infty} \left( 1 + \frac{k}{x} \right)^{x} = e^{k} ,
\qquad
\lim_{x \to 0} (1 + x)^{\frac{1}{x}} = e ,
$$
$$
\lim_{x \to 0} \frac{\ln (1 + x)}{x} = 1 ,
\qquad
\lim_{x \to 0} \frac{e^{x} - 1}{x} = 1 ,
\qquad
\lim_{x \to 0} \frac{a^{x} - 1}{x} = \ln a ,
\qquad
\lim_{x \to 0} \frac{(1 + x)^{k} - 1}{x} = k .
$$
Si ricavano con il cambio di variabile.

- Per $k \neq 0$ si pone $t = \dfrac{x}{k}$, che tende a infinito, e si ha $\left( 1 + \dfrac{k}{x} \right)^{x} = \left[ \left( 1 + \dfrac{1}{t} \right)^{t} \right]^{k}$, che tende a $e^{k}$. Per $k = 0$ la funzione vale $1 = e^{0}$.
- Con $t = \dfrac{1}{x}$, che tende a infinito per $x \to 0$, si ha $(1 + x)^{\frac{1}{x}} = \left( 1 + \dfrac{1}{t} \right)^{t}$, che tende a $e$.
- Per le proprietà dei logaritmi $\dfrac{\ln(1 + x)}{x} = \ln (1 + x)^{\frac{1}{x}}$, che tende a $\ln e = 1$.
- Con $t = e^{x} - 1$, che tende a $0$, si ha $x = \ln (1 + t)$, quindi $\dfrac{e^{x} - 1}{x} = \dfrac{t}{\ln(1 + t)}$, che tende a $1$.
- Poiché $a^{x} = e^{x \ln a}$, per $a \neq 1$ si ha $\dfrac{a^{x} - 1}{x} = \dfrac{e^{x \ln a} - 1}{x \ln a} \cdot \ln a$, che tende a $\ln a$; per $a = 1$ la funzione vale $0 = \ln 1$.
- Poiché $(1 + x)^{k} = e^{k \ln (1 + x)}$, per $k \neq 0$ si ha $\dfrac{(1 + x)^{k} - 1}{x} = \dfrac{e^{k \ln(1 + x)} - 1}{k \ln (1 + x)} \cdot k \cdot \dfrac{\ln (1 + x)}{x}$, che tende a $1 \cdot k \cdot 1 = k$.

Per esempio $\displaystyle\lim_{x \to 0} \frac{\ln (1 + 3x)}{x} = \lim_{x \to 0} 3 \cdot \frac{\ln (1 + 3x)}{3x} = 3$, e $\displaystyle\lim_{x \to 0} \frac{\sqrt{1 + x} - 1}{x} = \frac{1}{2}$, con $k = \dfrac{1}{2}$.
:::

:::esempio{titolo="Una forma indeterminata del tipo uno elevato a infinito"}
Il limite $\displaystyle\lim_{x \to +\infty} \left( \frac{x + 2}{x} \right)^{3x}$ si presenta nella forma $1^{\infty}$, perché la base tende a $1$. Si scrive la base come $1 + \dfrac{2}{x}$ e si usano le proprietà delle potenze:
$$
\left( \frac{x + 2}{x} \right)^{3x} = \left( 1 + \frac{2}{x} \right)^{3x} = \left[ \left( 1 + \frac{2}{x} \right)^{x} \right]^{3} .
$$
Per il limite notevole con $k = 2$ la potenza $\left( 1 + \dfrac{2}{x} \right)^{x}$ tende a $e^{2}$, quindi il limite vale $\left( e^{2} \right)^{3} = e^{6}$.
:::

## Infinitesimi e infiniti

:::definizione{#infinitesimi titolo="Infinitesimi e infiniti"}
Una funzione $f$ è un **infinitesimo** per $x \to x_0$ se $\displaystyle\lim_{x \to x_0} f(x) = 0$, ed è un **infinito** per $x \to x_0$ se il limite è $+\infty$, $-\infty$ oppure infinito senza segno. La stessa definizione vale per $x \to \pm\infty$. Per esempio, per $x \to 0$, le funzioni $x^2$, $\sin x$, $1 - \cos x$ ed $e^{x} - 1$ sono infinitesimi, mentre $\dfrac{1}{x^2}$ è un infinito. Per $x \to +\infty$ le funzioni $e^{x}$ e $\ln x$ sono infiniti, e $\dfrac{1}{x}$ è un infinitesimo. Il quoziente di due infinitesimi è una forma $\dfrac{0}{0}$, e il quoziente di due infiniti è una forma $\dfrac{\infty}{\infty}$; per questo motivo si confrontano infinitesimi e infiniti con il limite del loro quoziente.
:::

:::definizione{#confronto-infinitesimi titolo="Confronto tra infinitesimi"}
Siano $f$ e $g$ due infinitesimi per $x \to x_0$, con $g(x) \neq 0$ per $x \neq x_0$ vicino a $x_0$. Si calcola il limite $\displaystyle\lim_{x \to x_0} \frac{f(x)}{g(x)}$.

- Se il limite è $0$, $f$ è un infinitesimo di **ordine superiore** a $g$, cioè tende a $0$ più rapidamente.
- Se il limite è un numero $\ell \neq 0$, $f$ e $g$ sono infinitesimi dello stesso ordine. Se in particolare $\ell = 1$, $f$ e $g$ si dicono **equivalenti**, e si scrive $f(x) \sim g(x)$.
- Se il limite è infinito, $f$ è un infinitesimo di ordine inferiore a $g$.
- Se il limite non esiste, i due infinitesimi non sono confrontabili.

Un infinitesimo $f$ ha ordine $\alpha > 0$ rispetto a $x$, per $x \to 0$, se $\dfrac{f(x)}{x^{\alpha}}$ tende a un numero diverso da $0$. Dai limiti notevoli segue che, per $x \to 0$,
$$
\sin x \sim x ,
\qquad
\tan x \sim x ,
\qquad
\ln (1 + x) \sim x ,
\qquad
e^{x} - 1 \sim x ,
\qquad
1 - \cos x \sim \frac{x^2}{2} .
$$
Quindi $1 - \cos x$ è un infinitesimo di ordine $2$, cioè di ordine superiore a $x$, e $\sin x$ è un infinitesimo di ordine $1$.

::grafico{f="x;1-cos(x)" xmin=-2 xmax=2 ymin=-2 ymax=2 uguale=1 legenda="y = x;y = 1 - \cos x" titolo="Per $x$ vicino a $0$ i valori di $1 - \cos x$ sono molto più piccoli di quelli di $x$, perché $1 - \cos x$ è un infinitesimo di ordine $2$"}

:::

:::teorema{#sostituzione-infinitesimi titolo="Principio di sostituzione degli infinitesimi"}
Siano $f \sim f_1$ e $g \sim g_1$ per $x \to x_0$. Allora
$$
\lim_{x \to x_0} \frac{f(x)}{g(x)} = \lim_{x \to x_0} \frac{f_1(x)}{g_1(x)} ,
$$
nel senso che, se uno dei due limiti esiste, esiste anche l'altro e i due limiti sono uguali. Infatti
$$
\frac{f(x)}{g(x)} = \frac{f(x)}{f_1(x)} \cdot \frac{f_1(x)}{g_1(x)} \cdot \frac{g_1(x)}{g(x)} ,
$$
e il primo e l'ultimo fattore tendono a $1$. Inoltre, in una somma di infinitesimi, quelli di ordine superiore si possono trascurare: per esempio $x + 3x^2 \sim x$ per $x \to 0$, perché $\dfrac{x + 3x^2}{x} = 1 + 3x$ tende a $1$.

Il principio permette di sostituire ogni infinitesimo con uno più semplice. Per esempio, poiché $\sin (3x) \sim 3x$ ed $e^{2x} - 1 \sim 2x$,
$$
\lim_{x \to 0} \frac{\sin (3x)}{e^{2x} - 1} = \lim_{x \to 0} \frac{3x}{2x} = \frac{3}{2} .
$$
:::

:::attenzione
La sostituzione si applica ai fattori di un prodotto o di un quoziente, e non ai termini di una differenza. Nel limite $\displaystyle\lim_{x \to 0} \frac{\tan x - \sin x}{x^3}$, sostituendo $\tan x$ e $\sin x$ con $x$ si otterrebbe $\dfrac{0}{x^3} = 0$, che è sbagliato. Il numeratore si scrive invece come prodotto:
$$
\tan x - \sin x = \frac{\sin x}{\cos x} - \sin x = \frac{\sin x \, (1 - \cos x)}{\cos x} = \tan x \, (1 - \cos x) \sim x \cdot \frac{x^2}{2} ,
$$
quindi il limite vale $\dfrac{1}{2}$.
:::

:::definizione{#confronto-infiniti titolo="Confronto tra infiniti"}
Siano $f$ e $g$ due infiniti per $x \to x_0$ oppure per $x \to \pm\infty$. Se $\dfrac{f(x)}{g(x)}$ tende a infinito, $f$ è un infinito di **ordine superiore** a $g$; se tende a un numero diverso da $0$, i due infiniti sono dello stesso ordine; se tende a $0$, $f$ è di ordine inferiore. Per $x \to +\infty$ un polinomio di grado $n$ è un infinito di ordine $n$ rispetto a $x$. Per esempio $x^2 + 1$ è di ordine superiore a $x$, perché $\dfrac{x^2 + 1}{x}$ tende a $+\infty$.

In una somma di infiniti si possono trascurare quelli di ordine inferiore. La regola sui limiti delle funzioni razionali all'infinito è un caso particolare di questo principio. Per esempio, per $x \to +\infty$, la funzione $\dfrac{x^3 + x}{2x^3 - 5}$ ha lo stesso limite di $\dfrac{x^3}{2x^3} = \dfrac{1}{2}$.
:::

:::teorema{#gerarchia-infiniti titolo="Gerarchia degli infiniti"}
Per $x \to +\infty$, con $\alpha > 0$ e $a > 1$, valgono
$$
\lim_{x \to +\infty} \frac{\ln x}{x^{\alpha}} = 0 ,
\qquad
\lim_{x \to +\infty} \frac{x^{\alpha}}{a^{x}} = 0 .
$$
Quindi, per $x \to +\infty$, il logaritmo è un infinito di ordine inferiore a ogni potenza di $x$, e ogni potenza di $x$ è un infinito di ordine inferiore a ogni esponenziale con base maggiore di $1$. Tra due esponenziali con $1 < a < b$ prevale quello con la base maggiore, perché $\dfrac{a^{x}}{b^{x}} = \left( \dfrac{a}{b} \right)^{x}$ tende a $0$. I due limiti si dimostrano con il teorema di De L'Hôpital, nell'argomento sui teoremi del calcolo differenziale.

Per esempio, dividendo numeratore e denominatore per $2^{x}$,
$$
\lim_{x \to +\infty} \frac{x^3 + 2^{x}}{3 \cdot 2^{x} - x^5} = \lim_{x \to +\infty} \frac{\dfrac{x^3}{2^{x}} + 1}{3 - \dfrac{x^5}{2^{x}}} = \frac{0 + 1}{3 - 0} = \frac{1}{3} .
$$
:::

## Limiti di successioni

:::definizione{#successioni titolo="Successioni"}
Una **successione** è una funzione che associa a ogni numero naturale $n$ un numero reale $a_n$, detto termine $n$-esimo della successione. Di solito $n$ parte da $0$ oppure da $1$. Per esempio la successione $a_n = \dfrac{1}{n}$, con $n \geq 1$, ha termini $1, \dfrac{1}{2}, \dfrac{1}{3}, \dfrac{1}{4}, \ldots$, e la successione $a_n = (-1)^n$ ha termini che valgono alternativamente $1$ e $-1$.
:::

:::definizione{#limite-successione titolo="Limite di una successione"}
La variabile $n$ assume solo valori naturali, quindi per una successione si studia soltanto il limite per $n \to +\infty$. Si scrive $\displaystyle\lim_{n \to +\infty} a_n = \ell$ se per ogni $\varepsilon > 0$ esiste un numero $N$ tale che $|a_n - \ell| < \varepsilon$ per ogni $n > N$. In questo caso la successione si dice **convergente**. Se $a_n$ tende a $+\infty$ oppure a $-\infty$, con la definizione analoga, la successione si dice **divergente**; se il limite non esiste, la successione si dice irregolare.

Per esempio $a_n = \dfrac{2n + 1}{n} = 2 + \dfrac{1}{n}$ converge a $2$. Infatti $|a_n - 2| = \dfrac{1}{n}$, e la disuguaglianza $\dfrac{1}{n} < \varepsilon$ vale per $n > \dfrac{1}{\varepsilon}$; con $\varepsilon = \dfrac{1}{100}$, tutti i termini con $n > 100$ distano da $2$ meno di un centesimo. La successione $(-1)^n$ è irregolare, perché i suoi termini continuano a passare da $1$ a $-1$.
:::

:::teorema{#successioni-funzioni titolo="Limiti di successioni e limiti di funzioni"}
Sia $a_n = f(n)$, dove $f$ è una funzione definita in un intorno di $+\infty$. Se $\displaystyle\lim_{x \to +\infty} f(x) = L$, finito o infinito, allora $\displaystyle\lim_{n \to +\infty} a_n = L$.

Il teorema permette di calcolare il limite di una successione con le regole e i limiti notevoli delle funzioni; la dimostrazione si studia all'università. Per esempio
$$
\lim_{n \to +\infty} \frac{n^2 + 1}{3n^2} = \frac{1}{3} ,
\qquad
\lim_{n \to +\infty} \left( 1 + \frac{1}{n} \right)^{n} = e ,
\qquad
\lim_{n \to +\infty} \frac{\ln n}{n} = 0 .
$$
:::

:::teorema{#progressioni titolo="Limiti delle progressioni"}
Una progressione aritmetica di ragione $d$ ha termini $a_n = a_1 + (n - 1)\,d$. Per $n \to +\infty$ diverge a $+\infty$ se $d > 0$, diverge a $-\infty$ se $d < 0$ ed è costante se $d = 0$.

Una progressione geometrica di primo termine $a_1 \neq 0$ e ragione $q$ ha termini $a_n = a_1\,q^{\,n-1}$, quindi il suo limite dipende dal limite di $q^n$:

- se $q > 1$, $q^n$ tende a $+\infty$;
- se $q = 1$, $q^n = 1$ per ogni $n$;
- se $-1 < q < 1$, $q^n$ tende a $0$;
- se $q \leq -1$, $q^n$ non ha limite, perché i suoi termini cambiano segno a ogni passo.

Per $q \neq 1$ la somma dei primi $n$ termini di una progressione geometrica è
$$
S_n = a_1 \cdot \frac{1 - q^n}{1 - q} .
$$
Se $-1 < q < 1$, il termine $q^n$ tende a $0$, e quindi $S_n$ tende a $\dfrac{a_1}{1 - q}$. Per esempio, con $a_1 = 1$ e $q = \dfrac{1}{2}$, la somma $1 + \dfrac{1}{2} + \dfrac{1}{4} + \ldots + \dfrac{1}{2^{n-1}}$ vale $S_n = 2 \left( 1 - \dfrac{1}{2^n} \right)$, e tende a $2$ per $n \to +\infty$.
:::
