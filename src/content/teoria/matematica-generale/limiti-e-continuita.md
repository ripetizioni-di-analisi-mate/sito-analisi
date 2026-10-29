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
:::

:::definizione{#limite-destro-sinistro titolo="Limite destro e limite sinistro"}
Se nella definizione di limite si considerano solo gli $x > x_0$ si ottiene il **limite destro**, $\displaystyle\lim_{x \to x_0^+} f(x)$; con i soli $x < x_0$ si ottiene il **limite sinistro**, $\displaystyle\lim_{x \to x_0^-} f(x)$. Il limite esiste *se e solo se* esistono il limite destro e il limite sinistro e sono uguali. Servono per le funzioni definite a tratti e nei punti dove una formula cambia comportamento: per la funzione che vale $5$ per $0 < x \leq 2$ e $8$ per $x > 2$, il limite sinistro in $2$ è $5$ e il limite destro è $8$, quindi il limite in $2$ non esiste.
:::

## Limiti infiniti e limiti all'infinito

:::definizione{#limiti-infiniti titolo="Limiti infiniti e all'infinito"}
Le altre situazioni si descrivono allo stesso modo, sostituendo agli intorni di un numero le semirette.

- $\displaystyle\lim_{x \to x_0} f(x) = +\infty$ se per ogni $M$ esiste $\delta > 0$ tale che $f(x) > M$ per $0 < |x - x_0| < \delta$: vicino a $x_0$ la funzione supera qualunque soglia. Allo stesso modo si definisce il limite $-\infty$.
- $\displaystyle\lim_{x \to +\infty} f(x) = L$ se per ogni $\varepsilon > 0$ esiste $N$ tale che $|f(x) - L| < \varepsilon$ per $x > N$: per valori grandi della variabile la funzione si stabilizza vicino a $L$. Allo stesso modo si definisce il limite per $x \to -\infty$.
- $\displaystyle\lim_{x \to +\infty} f(x) = +\infty$ se per ogni $M$ esiste $N$ tale che $f(x) > M$ per $x > N$.

Per esempio $\dfrac{1}{x} \to 0$ per $x \to +\infty$, $\dfrac{1}{x^2} \to +\infty$ per $x \to 0$, mentre $\dfrac{1}{x}$ tende a $+\infty$ per $x \to 0^+$ e a $-\infty$ per $x \to 0^-$. Nei modelli economici il limite per $x \to +\infty$ descrive il comportamento per grandi quantità: il costo medio $\dfrac{200}{q} + 12$ tende a $12$ per $q \to +\infty$.
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
per le quali il risultato dipende dalle funzioni e va trovato trasformando l'espressione. Le funzioni elementari (polinomi, radici, esponenziali, logaritmi, funzioni goniometriche) nei punti interni al loro dominio hanno per limite il loro valore, quindi in quei punti il limite si calcola per **sostituzione**: $\displaystyle\lim_{x \to 2} (x^2 + 1) = 5$.
:::

:::osservazione{#tecniche-forme-indeterminate titolo="Tecniche per le forme indeterminate"}
Le forme più frequenti si risolvono con tre tecniche.

- **Scomposizione** per $\dfrac{0}{0}$ con quozienti di polinomi: numeratore e denominatore si annullano in $x_0$, quindi entrambi contengono il fattore $x - x_0$, che si semplifica. Per esempio $\dfrac{x^2 - 9}{x - 3} = \dfrac{(x - 3)(x + 3)}{x - 3} = x + 3$ per $x \neq 3$, e il limite per $x \to 3$ è $6$.
- **Raccoglimento** della potenza più alta per $\dfrac{\infty}{\infty}$ con $x \to \pm\infty$: $\dfrac{2x^2 + 1}{x^2 - 3x} = \dfrac{2 + \dfrac{1}{x^2}}{1 - \dfrac{3}{x}} \to 2$. Come per le successioni, il limite di un quoziente di polinomi all'infinito dipende dal confronto dei gradi.
- **Razionalizzazione** per $+\infty - \infty$ con radici: si moltiplica e si divide per la somma, così il numeratore diventa una differenza di quadrati. Per esempio
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
Il primo estende alle funzioni il limite che definisce $e$ nell'argomento sulle successioni e le serie, e si assume; il secondo segue dal primo ponendo $x = \dfrac{1}{t}$, e il terzo dal secondo ponendo $y = e^{x} - 1$. Si usano riconducendo l'espressione a uno di essi con una sostituzione: per esempio, con $t = \dfrac{x}{r}$,
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
In altre parole, ogni esponenziale di base maggiore di $1$ cresce più in fretta di ogni potenza, e ogni potenza più in fretta di ogni potenza del logaritmo. In un quoziente o in una somma di infiniti si raccoglie il termine che cresce più in fretta: $\dfrac{x^3 + 2^{x}}{3 \cdot 2^{x}} = \dfrac{\dfrac{x^3}{2^{x}} + 1}{3} \to \dfrac{1}{3}$. Per questo una grandezza che cresce in modo esponenziale, come un capitale a interesse composto, finisce per superare qualunque grandezza che cresce come una potenza.
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
e l'asintoto esiste se entrambi i limiti sono finiti e $m \neq 0$. Le formule seguono dalla definizione: se $f(x) - m x - q \to 0$, dividendo per $x$ si ottiene $\dfrac{f(x)}{x} - m \to 0$.
:::

:::esempio{titolo="Asintoti di una funzione razionale"}
La funzione $f(x) = \dfrac{x^2 + 1}{x - 1}$ è definita per $x \neq 1$. Nel punto escluso il numeratore vale $2$ e il denominatore tende a $0$, positivo da destra e negativo da sinistra, quindi $f(x) \to +\infty$ per $x \to 1^+$ e $f(x) \to -\infty$ per $x \to 1^-$: la retta $x = 1$ è un asintoto verticale. Per $x \to \pm\infty$ la funzione diverge, perché il numeratore ha grado maggiore, quindi non ci sono asintoti orizzontali. Per l'asintoto obliquo
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

- **Eliminabile**: il limite esiste finito ma è diverso da $f(x_0)$, oppure $f$ non è definita in $x_0$. Ridefinendo $f(x_0)$ come il limite la funzione diventa continua. Per esempio $\dfrac{x^2 - 1}{x - 1}$ non è definita in $1$, ma il suo limite è $2$.
- **Di salto**: i limiti destro e sinistro esistono finiti e sono diversi; la loro differenza è l'ampiezza del salto.
- **Di seconda specie**: almeno uno dei limiti destro e sinistro è infinito o non esiste, come per $\dfrac{1}{x}$ in $0$.

Le discontinuità di salto sono frequenti nei modelli economici con tariffe a scaglioni: una spedizione che costa $5$ euro fino a $2$ kg e $8$ euro oltre ha in $x = 2$ un salto di ampiezza $3$ euro.

::grafico{linee="0,5 2,5;2,8 5,8" punti="0,5,vuoto;2,5,pieno;2,8,vuoto" segmenti="2,0,2,5" xmin=-0.5 xmax=5 ymin=-2 ymax=10 nomi="kg,€" titolo="La tariffa vale $5$ euro fino a $2$ kg compresi e $8$ euro oltre: in $x = 2$ c'è una discontinuità di salto di ampiezza $3$"}

:::

## Teoremi sulle funzioni continue

:::teorema{#teorema-degli-zeri titolo="Teorema degli zeri"}
Sia $f$ continua sull'intervallo chiuso $[a, b]$, con $f(a)$ e $f(b)$ di segno opposto. Allora esiste almeno un punto $c \in (a, b)$ tale che $f(c) = 0$.

Il grafico parte da un lato dell'asse $x$ e arriva dall'altro senza interruzioni, quindi deve attraversarlo. Il teorema garantisce che un'equazione ha una soluzione anche quando non si sa risolverla, e suggerisce come approssimarla con il **metodo di bisezione**: si calcola $f$ nel punto medio dell'intervallo, si tiene la metà ai cui estremi $f$ ha segno opposto, e si ripete. Per $f(x) = x^3 + x - 1$ si ha $f(0) = -1$ e $f(1) = 1$, quindi c'è uno zero in $(0, 1)$; poiché $f\left( \dfrac{1}{2} \right) = -\dfrac{3}{8}$ e $f\left( \dfrac{3}{4} \right) = \dfrac{11}{64}$, lo zero sta in $\left( \dfrac{1}{2}, \dfrac{3}{4} \right)$, e vale circa $0{,}682$. Lo stesso procedimento si usa per calcolare il tasso interno di rendimento di un investimento, trattato nell'argomento sulla matematica finanziaria. Il teorema si dimostra con la completezza dei numeri reali, per la quale si rimanda all'argomento sugli insiemi di Analisi 1.

::grafico{f="x^3+x-1" punti="0,-1,pieno;1,1,pieno;0.5,-0.375,pieno;0.75,0.1719,pieno;0.6823,0,vuoto" segmenti="0.5,0,0.5,-0.375;0.75,0,0.75,0.1719" xmin=-0.5 xmax=1.5 ymin=-1.5 ymax=2 titolo="$f(x) = x^3 + x - 1$ cambia segno tra $0$ e $1$, e poi tra $\dfrac{1}{2}$ e $\dfrac{3}{4}$: lo zero è circa $0{,}682$"}

:::

:::teorema{#valori-intermedi titolo="Teorema dei valori intermedi"}
Sia $f$ continua sull'intervallo $[a, b]$. Allora $f$ assume tutti i valori compresi tra $f(a)$ e $f(b)$.

Segue dal teorema degli zeri: se $y_0$ sta tra $f(a)$ e $f(b)$, la funzione $f(x) - y_0$ è continua e ha segni opposti agli estremi, quindi si annulla in un punto $c$, dove $f(c) = y_0$. Per esempio, se un'impresa con produzione $0$ ha profitto $-100$ euro e con produzione $10$ ha profitto $100$ euro, e il profitto varia con continuità, esiste una quantità intermedia con profitto esattamente $0$, cioè un punto di pareggio.
:::

:::teorema{#weierstrass titolo="Teorema di Weierstrass"}
Sia $f$ continua sull'intervallo chiuso e limitato $[a, b]$. Allora $f$ ha massimo e minimo su $[a, b]$, cioè esistono $x_1, x_2 \in [a, b]$ tali che
$$
f(x_1) \leq f(x) \leq f(x_2) \qquad \text{per ogni } x \in [a, b] .
$$
Le ipotesi sono tutte necessarie. Su un intervallo aperto il massimo può mancare: $f(x) = x$ su $(0, 1)$ si avvicina a $1$ senza raggiungerlo. Senza continuità può mancare anche su un intervallo chiuso. Il teorema garantisce che un profitto continuo, su un intervallo di produzione $[0, K]$ limitato dalla capacità $K$, ha un valore massimo; dove si trova lo dicono le derivate, nell'argomento sullo studio di funzione e l'ottimizzazione. Anche questo teorema si dimostra con la completezza dei numeri reali.
:::
