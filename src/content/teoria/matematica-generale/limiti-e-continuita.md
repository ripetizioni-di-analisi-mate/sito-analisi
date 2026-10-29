---
titolo: Limiti e continuità
sommario: Che cosa significa che una funzione si avvicina a un valore, come si calcolano i limiti e si risolvono le forme indeterminate, come si trovano gli asintoti, che cos'è una funzione continua e che cosa garantiscono i teoremi degli zeri e di Weierstrass.
---

## Limite finito in un punto

:::definizione{#limite-finito titolo="Limite finito in un punto"}
Sia $f$ definita in un intervallo aperto che contiene $x_0$, escluso al più il punto $x_0$. Si scrive
$$
\lim_{x \to x_0} f(x) = L
$$
se per ogni $\varepsilon > 0$ esiste $\delta > 0$ tale che, per ogni $x$ del dominio,
$$
0 < |x - x_0| < \delta \implies |f(x) - L| < \varepsilon .
$$
In altre parole, $f(x)$ è vicino a $L$ quanto si vuole, entro la tolleranza $\varepsilon$, purché $x$ sia abbastanza vicino a $x_0$, entro la distanza $\delta$. La condizione $0 < |x - x_0|$ esclude il punto $x_0$, quindi il valore $f(x_0)$, se esiste, non conta. Per $\displaystyle\lim_{x \to 1} (2x + 3) = 5$, fissato $\varepsilon$, si ha $|(2x + 3) - 5| = 2\,|x - 1|$, che è minore di $\varepsilon$ quando $|x - 1| < \dfrac{\varepsilon}{2}$; basta quindi $\delta = \dfrac{\varepsilon}{2}$.

::grafico{f="2*x+3" area="6;4;0.5;1.5" segmenti="-1,4,3,4;-1,6,3,6;0.5,0,0.5,4;1.5,0,1.5,6" punti="1,5,pieno" xmin=-1 xmax=3 ymin=-1 ymax=9 legenda="y = 2x + 3" titolo="Con $\varepsilon = 1$ e $\delta = \dfrac{1}{2}$, per $0 < |x - 1| < \dfrac{1}{2}$ il valore $2x + 3$ sta nella striscia $4 < y < 6$"}

:::

:::definizione{#limite-destro-sinistro titolo="Limite destro e limite sinistro"}
Se nella definizione di limite si considerano solo gli $x > x_0$ si ottiene il **limite destro**, $\displaystyle\lim_{x \to x_0^+} f(x)$; con i soli $x < x_0$ si ottiene il **limite sinistro**, $\displaystyle\lim_{x \to x_0^-} f(x)$. Il limite esiste *se e solo se* esistono il limite destro e il limite sinistro e sono uguali. Servono per le funzioni definite a tratti, nei punti in cui si passa da una formula all'altra. Per la funzione che vale $5$ per $0 < x \leq 2$ e $8$ per $x > 2$, il limite sinistro in $2$ è $5$ e il limite destro è $8$, quindi il limite in $2$ non esiste.

::grafico{linee="0,5 2,5;2,8 5,8" punti="0,5,vuoto;2,5,pieno;2,8,vuoto" segmenti="2,0,2,5" xmin=-1 xmax=5 ymin=-1 ymax=9 titolo="La funzione vale $5$ per $0 < x \leq 2$ e $8$ per $x > 2$, quindi in $x = 2$ il limite sinistro è $5$ e il limite destro è $8$"}

:::

## Limiti infiniti e limiti all'infinito

:::definizione{#limiti-infiniti titolo="Limiti infiniti e all'infinito"}
Le altre situazioni si descrivono allo stesso modo, sostituendo agli intorni di un numero le semirette.

- $\displaystyle\lim_{x \to x_0} f(x) = +\infty$ se per ogni $M$ esiste $\delta > 0$ tale che $f(x) > M$ per $0 < |x - x_0| < \delta$, cioè se vicino a $x_0$ i valori di $f$ superano qualunque soglia. Allo stesso modo si definisce il limite $-\infty$.
- $\displaystyle\lim_{x \to +\infty} f(x) = L$ se per ogni $\varepsilon > 0$ esiste $N$ tale che $|f(x) - L| < \varepsilon$ per $x > N$, cioè se per valori grandi della variabile i valori di $f$ restano vicini a $L$. Allo stesso modo si definisce il limite per $x \to -\infty$.
- $\displaystyle\lim_{x \to +\infty} f(x) = +\infty$ se per ogni $M$ esiste $N$ tale che $f(x) > M$ per $x > N$.

Per esempio $\dfrac{1}{x} \to 0$ per $x \to +\infty$, $\dfrac{1}{x^2} \to +\infty$ per $x \to 0$, mentre $\dfrac{1}{x}$ tende a $+\infty$ per $x \to 0^+$ e a $-\infty$ per $x \to 0^-$. Nei modelli economici il limite per $x \to +\infty$ descrive che cosa accade per grandi quantità; per esempio il costo medio $\dfrac{200}{q} + 12$ tende a $12$ per $q \to +\infty$.

::grafico{f="1/x" xmin=-5 xmax=5 ymin=-5 ymax=5 legenda="y = \dfrac{1}{x}" titolo="$\dfrac{1}{x}$ tende a $0$ per $x \to \pm\infty$, quindi l'asse $x$ è un asintoto orizzontale; tende a $+\infty$ per $x \to 0^+$ e a $-\infty$ per $x \to 0^-$"}

:::

## Regole di calcolo e forme indeterminate

:::teorema{#algebra-dei-limiti titolo="Regole di calcolo dei limiti"}
Se $f(x) \to A$ e $g(x) \to B$, con $A$ e $B$ numeri reali, allora
$$
f(x) \pm g(x) \to A \pm B,
\qquad
f(x)\,g(x) \to A\,B,
\qquad
\frac{f(x)}{g(x)} \to \frac{A}{B} \quad (B \neq 0) .
$$
Le regole si estendono ai limiti infiniti con le convenzioni $+\infty + \infty = +\infty$, $a + \infty = +\infty$ per $a$ reale, $a \cdot (+\infty) = +\infty$ per $a > 0$, $\dfrac{a}{\pm\infty} = 0$ e $\dfrac{a}{0^{+}} = +\infty$ per $a > 0$. Restano escluse le **forme indeterminate**
$$
+\infty - \infty, \qquad 0 \cdot \infty, \qquad \frac{0}{0}, \qquad \frac{\infty}{\infty}, \qquad 1^{\infty}, \qquad 0^{0}, \qquad \infty^{0},
$$
per le quali il risultato dipende dalle funzioni e va trovato trasformando l'espressione. Le funzioni elementari (polinomi, radici, esponenziali, logaritmi, funzioni goniometriche) nei punti interni al loro dominio hanno per limite il loro valore, quindi in quei punti il limite si calcola per **sostituzione**, come in $\displaystyle\lim_{x \to 2} (x^2 + 1) = 5$.
:::

:::osservazione{#tecniche-forme-indeterminate titolo="Tecniche per le forme indeterminate"}
Le forme più frequenti si risolvono con tre tecniche.

- **Scomposizione** per $\dfrac{0}{0}$ con quozienti di polinomi. Numeratore e denominatore si annullano in $x_0$, quindi entrambi contengono il fattore $x - x_0$, che si semplifica. Per esempio $\dfrac{x^2 - 9}{x - 3} = \dfrac{(x - 3)(x + 3)}{x - 3} = x + 3$ per $x \neq 3$, e il limite per $x \to 3$ è $6$.
- **Raccoglimento** della potenza più alta per $\dfrac{\infty}{\infty}$ con $x \to \pm\infty$, come in $\dfrac{2x^2 + 1}{x^2 - 3x} = \dfrac{2 + \dfrac{1}{x^2}}{1 - \dfrac{3}{x}} \to 2$. Come per le successioni, il limite di un quoziente di polinomi all'infinito dipende dal confronto dei gradi.
- **Razionalizzazione** per $+\infty - \infty$ con radici. Si moltiplica e si divide per la somma, così il numeratore diventa una differenza di quadrati. Per esempio
$$
\sqrt{x^2 + x} - x = \frac{x}{\sqrt{x^2 + x} + x} = \frac{1}{\sqrt{1 + \dfrac{1}{x}} + 1} \to \frac{1}{2} \quad (x \to +\infty) .
$$
:::

## Limiti notevoli e confronto tra infiniti

:::teorema{#limiti-notevoli titolo="Limiti notevoli"}
Valgono i limiti
$$
\lim_{x \to \pm\infty} \left( 1 + \frac{1}{x} \right)^{x} = e,
\qquad
\lim_{x \to 0} \frac{\ln(1 + x)}{x} = 1,
\qquad
\lim_{x \to 0} \frac{e^{x} - 1}{x} = 1,
\qquad
\lim_{x \to 0} \frac{\sin x}{x} = 1 .
$$
Il primo estende alle funzioni il limite che definisce $e$ nell'argomento sulle successioni e le serie, e si assume; il secondo segue dal primo ponendo $x = \dfrac{1}{t}$, e il terzo dal secondo ponendo $y = e^{x} - 1$; per il quarto si rimanda all'argomento sui limiti di Analisi 1. Si usano riconducendo l'espressione a uno di essi con una sostituzione; per esempio, per $r > 0$ e con $t = \dfrac{x}{r}$,
$$
\lim_{x \to +\infty} \left( 1 + \frac{r}{x} \right)^{x} = \lim_{t \to +\infty} \left[ \left( 1 + \frac{1}{t} \right)^{t} \right]^{r} = e^{r} ,
$$
che è il fattore di capitalizzazione continua al tasso $r$. I limiti notevoli serviranno per calcolare le derivate di $\ln x$, $e^{x}$ e $\sin x$.
:::

:::teorema{#gerarchia-infiniti titolo="Confronto tra infiniti"}
Per $x \to +\infty$, con $a > 1$, $\alpha > 0$ e $\beta > 0$,
$$
\lim_{x \to +\infty} \frac{(\ln x)^{\beta}}{x^{\alpha}} = 0,
\qquad
\lim_{x \to +\infty} \frac{x^{\alpha}}{a^{x}} = 0 .
$$
In altre parole, ogni esponenziale di base maggiore di $1$ cresce più in fretta di ogni potenza, e ogni potenza più in fretta di ogni potenza del logaritmo. In un quoziente o in una somma di infiniti si raccoglie il termine che cresce più in fretta, come in $\dfrac{x^3 + 2^{x}}{3 \cdot 2^{x}} = \dfrac{\dfrac{x^3}{2^{x}} + 1}{3} \to \dfrac{1}{3}$.

::grafico{f="x^3;exp(x)" punti="1.857,6.406,pieno;4.536,93.35,pieno" segmenti="4.536,0,4.536,93.35" xmin=-1 xmax=6 ymin=-20 ymax=180 legenda="y = x^3;y = e^{x}" titolo="I grafici di $x^3$ e di $e^{x}$ si incontrano in $x \approx 1{,}86$ e in $x \approx 4{,}54$; per $x > 4{,}54$ circa $e^{x}$ è maggiore di $x^3$, e $\dfrac{x^3}{e^{x}} \to 0$"}

:::

## Asintoti

:::definizione{#asintoti titolo="Asintoti verticali, orizzontali e obliqui"}
Un **asintoto** è una retta a cui il grafico si avvicina indefinitamente.

- La retta $x = x_0$ è un **asintoto verticale** se almeno uno dei limiti di $f$ per $x \to x_0^+$ e per $x \to x_0^-$ è infinito. Si cerca nei punti esclusi dal dominio e negli estremi aperti del dominio.
- La retta $y = L$ è un **asintoto orizzontale** (destro) se $\displaystyle\lim_{x \to +\infty} f(x) = L$; allo stesso modo a $-\infty$.
- La retta $y = m x + q$ con $m \neq 0$ è un **asintoto obliquo** (destro) se $\displaystyle\lim_{x \to +\infty} \big( f(x) - m x - q \big) = 0$.

Per trovare l'asintoto obliquo, quando $f(x) \to \pm\infty$ per $x \to +\infty$, si calcolano
$$
m = \lim_{x \to +\infty} \frac{f(x)}{x},
\qquad
q = \lim_{x \to +\infty} \big( f(x) - m x \big) ,
$$
e l'asintoto esiste se entrambi i limiti sono finiti e $m \neq 0$. Le formule seguono dalla definizione, perché se $f(x) - m x - q \to 0$, dividendo per $x$ si ottiene $\dfrac{f(x)}{x} - m \to 0$.
:::

:::esempio{titolo="Asintoti di una funzione razionale"}
La funzione $f(x) = \dfrac{x^2 + 1}{x - 1}$ è definita per $x \neq 1$. Nel punto escluso il numeratore vale $2$ e il denominatore tende a $0$, positivo da destra e negativo da sinistra, quindi $f(x) \to +\infty$ per $x \to 1^+$ e $f(x) \to -\infty$ per $x \to 1^-$, perciò la retta $x = 1$ è un asintoto verticale. Per $x \to \pm\infty$ la funzione diverge, perché il numeratore ha grado maggiore, quindi non ci sono asintoti orizzontali. Per l'asintoto obliquo
$$
m = \lim_{x \to \pm\infty} \frac{x^2 + 1}{x\,(x - 1)} = 1,
\qquad
q = \lim_{x \to \pm\infty} \left( \frac{x^2 + 1}{x - 1} - x \right) = \lim_{x \to \pm\infty} \frac{x + 1}{x - 1} = 1 ,
$$
quindi la retta $y = x + 1$ è un asintoto obliquo sia a destra sia a sinistra.

::grafico{f="(x^2+1)/(x-1)" asintoti="x=1" segmenti="-6,-5,8,9" xmin=-6 xmax=8 ymin=-12 ymax=16 titolo="Il grafico di $f(x) = \dfrac{x^2 + 1}{x - 1}$ con l'asintoto verticale $x = 1$ e l'asintoto obliquo $y = x + 1$ (tratteggiati)"}

:::

## Continuità

:::definizione{#continuita titolo="Funzione continua"}
Una funzione $f$ definita in un intervallo che contiene $x_0$ è **continua** in $x_0$ se
$$
\lim_{x \to x_0} f(x) = f(x_0) ,
$$
cioè se il limite esiste, è finito e coincide con il valore della funzione. La funzione è continua in un intervallo se è continua in ogni suo punto; negli estremi chiusi dell'intervallo si usa il limite destro o sinistro. Le funzioni elementari sono continue nel loro dominio, e somme, prodotti, quozienti (dove il denominatore non si annulla) e composizioni di funzioni continue sono continue. Il grafico di una funzione continua su un intervallo si traccia senza staccare la matita dal foglio.
:::

:::definizione{#discontinuita titolo="Punti di discontinuità"}
Se $f$ non è continua in $x_0$, il punto è di **discontinuità**, e si distinguono tre casi.

- **Eliminabile**: il limite esiste finito e $f$ in $x_0$ ha un valore diverso dal limite oppure non è definita. Ridefinendo $f(x_0)$ come il limite la funzione diventa continua. Per esempio $\dfrac{x^2 - 1}{x - 1}$ non è definita in $1$, ma il suo limite è $2$.
- **Di salto**: i limiti destro e sinistro esistono finiti e sono diversi; la loro differenza è l'ampiezza del salto.
- **Di seconda specie**: almeno uno dei limiti destro e sinistro è infinito o non esiste, come per $\dfrac{1}{x}$ in $0$.

La funzione che vale $5$ per $0 < x \leq 2$ e $8$ per $x > 2$ ha in $x = 2$ una discontinuità di salto di ampiezza $8 - 5 = 3$.

::grafico{f="x+1" punti="1,2,vuoto" segmenti="1,0,1,2" xmin=-2 xmax=4 ymin=-1 ymax=5 legenda="y = \dfrac{x^2 - 1}{x - 1}" titolo="Il grafico di $\dfrac{x^2 - 1}{x - 1}$ è la retta $y = x + 1$ privata del punto $(1, 2)$, perciò la discontinuità in $x = 1$ è eliminabile"}

:::

## Teoremi sulle funzioni continue

:::teorema{#teorema-degli-zeri titolo="Teorema degli zeri"}
Sia $f$ continua sull'intervallo chiuso $[a, b]$, con $f(a)$ e $f(b)$ di segno opposto. Allora esiste almeno un punto $c \in (a, b)$ tale che $f(c) = 0$.

Il grafico è una curva senza interruzioni che unisce un punto da una parte dell'asse $x$ a un punto dall'altra parte, quindi incontra l'asse. Il teorema garantisce che un'equazione ha una soluzione anche quando non si sa risolverla, e su di esso si basa il **metodo di bisezione** per approssimarla. Si calcola $f$ nel punto medio dell'intervallo, si tiene la metà ai cui estremi $f$ ha segno opposto, e si ripete. Per $f(x) = x^3 + x - 1$ si ha $f(0) = -1$ e $f(1) = 1$, quindi c'è uno zero in $(0, 1)$; poiché $f\left( \dfrac{1}{2} \right) = -\dfrac{3}{8}$ e $f\left( \dfrac{3}{4} \right) = \dfrac{11}{64}$, lo zero sta in $\left( \dfrac{1}{2}, \dfrac{3}{4} \right)$, e vale circa $0{,}682$. Il teorema si dimostra con la completezza dei numeri reali, per la quale si rimanda all'argomento sugli insiemi di Analisi 1.

::grafico{f="x^3+x-1" punti="0,-1,pieno;1,1,pieno;0.5,-0.375,pieno;0.75,0.1719,pieno;0.6823,0,vuoto" segmenti="0.5,0,0.5,-0.375;0.75,0,0.75,0.1719" xmin=-0.5 xmax=1.5 ymin=-1.5 ymax=2 titolo="$f(x) = x^3 + x - 1$ cambia segno tra $0$ e $1$, e poi tra $\dfrac{1}{2}$ e $\dfrac{3}{4}$; lo zero è circa $0{,}682$"}

:::

:::teorema{#valori-intermedi titolo="Teorema dei valori intermedi"}
Sia $f$ continua sull'intervallo $[a, b]$. Allora $f$ assume tutti i valori compresi tra $f(a)$ e $f(b)$.

Segue dal teorema degli zeri, perché se $y_0$ sta tra $f(a)$ e $f(b)$, la funzione $f(x) - y_0$ è continua e ha segni opposti agli estremi, quindi si annulla in un punto $c$, dove $f(c) = y_0$. Per esempio $f(x) = x^2$ è continua su $[1, 3]$, con $f(1) = 1$ e $f(3) = 9$, quindi assume il valore $5$ in un punto di $(1, 3)$, che è $\sqrt{5}$.
:::

:::teorema{#weierstrass titolo="Teorema di Weierstrass"}
Sia $f$ continua sull'intervallo chiuso e limitato $[a, b]$. Allora $f$ ha massimo e minimo su $[a, b]$, cioè esistono $x_1, x_2 \in [a, b]$ tali che
$$
f(x_1) \leq f(x) \leq f(x_2) \qquad \text{per ogni } x \in [a, b] .
$$
Nessuna delle ipotesi si può togliere. Su un intervallo aperto il massimo può non esistere; per esempio $f(x) = x$ su $(0, 1)$ assume valori vicini a $1$ quanto si vuole, ma mai il valore $1$. Senza la continuità il massimo può non esistere anche su un intervallo chiuso, come per la funzione che vale $x$ per $0 \leq x < 1$ e $0$ in $x = 1$. Il teorema garantisce che il massimo e il minimo esistono, e il modo di trovarli con le derivate è trattato nell'argomento sullo studio di funzione e l'ottimizzazione. Anche questo teorema si dimostra con la completezza dei numeri reali.

::grafico{f="x+0*sqrt(x*(1-x))" punti="0,0,vuoto;1,1,vuoto" segmenti="0,1,1,1;1,0,1,1" xmin=-1 xmax=2 ymin=-1 ymax=2 legenda="y = x" titolo="Su $(0, 1)$ la funzione $f(x) = x$ assume valori vicini a $1$ quanto si vuole, ma non il valore $1$, quindi non ha massimo; non ha nemmeno minimo"}

:::
