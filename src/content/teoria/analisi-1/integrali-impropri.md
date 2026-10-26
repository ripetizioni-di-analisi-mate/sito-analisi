---
titolo: Integrali impropri
sommario: Come si estende l'integrale a intervalli illimitati e a funzioni illimitate, quali integrali campione fanno da riferimento e come i criteri del confronto stabiliscono la convergenza senza calcolare una primitiva.
---

## Integrale su un intervallo illimitato

:::definizione{#integrale-su-intervallo-illimitato titolo="Integrale su un intervallo illimitato"}
Sia $f : [a, +\infty) \to \mathbb{R}$ integrabile su $[a, t]$ per ogni $t > a$. L'integrale improprio di $f$ su $[a, +\infty)$ è
$$
\int_a^{+\infty} f(x)\,dx = \lim_{t \to +\infty} \int_a^{t} f(x)\,dx .
$$
L'integrale si dice

- convergente, se il limite esiste finito;
- divergente, se il limite è $+\infty$ oppure $-\infty$;
- indeterminato, se il limite non esiste.

Su $(-\infty, b]$ la definizione usa il limite per $t \to -\infty$ dell'integrale su $[t, b]$. Stabilire in quale dei tre casi cade un integrale, cioè il suo carattere, è il problema del capitolo.
:::

:::esempio{titolo="I tre caratteri"}
$$
\int_1^{t} \frac{dx}{x^2} = 1 - \frac{1}{t} \to 1, \qquad
\int_1^{t} \frac{dx}{x} = \ln t \to +\infty, \qquad
\int_0^{t} \cos x \,dx = \sin t .
$$
Il primo integrale converge e vale $1$; il secondo diverge; il terzo è indeterminato, perché $\sin t$ per $t \to +\infty$ oscilla tra $-1$ e $1$ senza ammettere limite.
:::

:::osservazione
Il carattere dipende soltanto dal comportamento vicino al punto critico. Per $a < b$ gli integrali su $[a, +\infty)$ e su $[b, +\infty)$ differiscono per l'integrale ordinario su $[a, b]$, quindi hanno lo stesso carattere. Per questo i criteri di questo capitolo chiedono le ipotesi soltanto definitivamente, cioè da un certo punto in poi.
:::

## Integrale di una funzione illimitata

:::definizione{#integrale-di-funzione-illimitata titolo="Integrale di una funzione illimitata vicino a un estremo"}
Sia $f : (a, b] \to \mathbb{R}$ integrabile su $[t, b]$ per ogni $t \in (a, b]$ e illimitata vicino ad $a$. Si pone
$$
\int_a^{b} f(x)\,dx = \lim_{t \to a^{+}} \int_t^{b} f(x)\,dx ,
$$
con la stessa terminologia: convergente, divergente, indeterminato. Se $f$ è illimitata vicino a $b$ si usa il limite per $t \to b^{-}$ dell'integrale su $[a, t]$. Un estremo vicino al quale la funzione è illimitata, come pure un estremo infinito, si chiama punto critico dell'integrale.
:::

:::esempio
$$
\int_t^{1} \frac{dx}{x} = -\ln t \to +\infty \quad (t \to 0^{+}),
\qquad
\int_t^{1} \frac{dx}{\sqrt{x}} = 2 - 2\sqrt{t} \to 2 .
$$
L'integrale di $\dfrac{1}{x}$ su $(0, 1]$ diverge, mentre quello di $\dfrac{1}{\sqrt{x}}$ converge e vale $2$, anche se entrambe le integrande tendono a $+\infty$ per $x \to 0^{+}$.
:::

## Più punti critici

:::definizione{#piu-punti-critici titolo="Integrale con più punti critici"}
Se i punti critici sono più di uno (entrambi gli estremi, oppure punti interni vicino ai quali la funzione è illimitata), si fissano punti intermedi e l'integrale si spezza in una somma di integrali con un punto critico ciascuno. L'integrale converge se convergono tutti i pezzi, e il valore è la somma dei valori; se almeno un pezzo non converge, l'integrale non converge. Per l'additività dell'integrale, carattere e valore non dipendono dalla scelta dei punti intermedi.
$$
\int_0^{+\infty} \frac{dx}{\sqrt{x}\,(1 + x)}
= \int_0^{1} \frac{dx}{\sqrt{x}\,(1 + x)} + \int_1^{+\infty} \frac{dx}{\sqrt{x}\,(1 + x)}
$$
Il primo pezzo ha punto critico $0$, dove l'integranda è illimitata; il secondo ha punto critico $+\infty$.
:::

:::attenzione
La formula fondamentale del calcolo integrale si applica quando l'integranda è integrabile su tutto l'intervallo. Per $\displaystyle\int_{-1}^{1} \frac{dx}{x^2}$ il calcolo diretto con la primitiva $-\dfrac{1}{x}$ darebbe $-2$, un valore negativo per una funzione positiva; il punto critico $x = 0$ è interno, e ciascuno dei due integrali su $[-1, 0)$ e su $(0, 1]$ diverge.
:::

## Integrali campione

I criteri di confronto riconducono ogni integrale a pochi integrali di riferimento, calcolati una volta per tutte.

::::teorema{#integrali-campione titolo="Integrali campione delle potenze"}
Per $\alpha \in \mathbb{R}$:
$$
\int_1^{+\infty} \frac{dx}{x^{\alpha}}
\ \text{converge se e solo se } \alpha > 1,
\qquad
\int_0^{1} \frac{dx}{x^{\alpha}}
\ \text{converge se e solo se } \alpha < 1 .
$$
In caso di convergenza i valori sono $\dfrac{1}{\alpha - 1}$ e $\dfrac{1}{1 - \alpha}$. All'infinito convergono le potenze che tendono a $0$ più in fretta di $\dfrac{1}{x}$; vicino a $0$ convergono le potenze che tendono all'infinito più lentamente di $\dfrac{1}{x}$. Le due condizioni sono incompatibili, quindi $\displaystyle\int_0^{+\infty} \frac{dx}{x^{\alpha}}$ non converge per alcun valore di $\alpha$. Questi integrali sono i termini di paragone dei criteri di confronto.

:::dimostrazione
Per $\alpha \neq 1$ una primitiva di $x^{-\alpha}$ è $\dfrac{x^{1 - \alpha}}{1 - \alpha}$, quindi
$$
\int_1^{t} \frac{dx}{x^{\alpha}} = \frac{t^{1 - \alpha} - 1}{1 - \alpha} .
$$
Se $\alpha > 1$ l'esponente $1 - \alpha$ è negativo, perciò $t^{1 - \alpha} \to 0$ e l'integrale converge al valore $\dfrac{1}{\alpha - 1}$. Se $\alpha < 1$ l'esponente è positivo, perciò $t^{1 - \alpha} \to +\infty$ e l'integrale diverge. Per $\alpha = 1$ si ha $\displaystyle\int_1^{t} \frac{dx}{x} = \ln t \to +\infty$. Vicino a $0$, per $\alpha \neq 1$,
$$
\int_t^{1} \frac{dx}{x^{\alpha}} = \frac{1 - t^{1 - \alpha}}{1 - \alpha} ;
$$
per $t \to 0^{+}$ la potenza $t^{1 - \alpha}$ tende a $0$ se $\alpha < 1$, con convergenza al valore $\dfrac{1}{1 - \alpha}$, e tende a $+\infty$ se $\alpha > 1$, con divergenza. Per $\alpha = 1$ si ha $\displaystyle\int_t^{1} \frac{dx}{x} = -\ln t \to +\infty$.
:::
::::

:::esempio{titolo="Le aree sottese da y = 1/x e da y = 1/x²"}
L'area sottesa da $y = \dfrac{1}{x^{2}}$ su $[1, +\infty)$ è finita e vale $1$, mentre l'area sottesa da $y = \dfrac{1}{x}$ è infinita, anche se le due funzioni tendono entrambe a $0$. Il carattere dell'integrale misura la velocità con cui l'integranda tende a $0$.

::grafico{f="1/x" xmin=1 xmax=10 ymin=0 ymax=1.1 asintoti="y=0" titolo="y = 1/x su [1, +∞): l'integrale diverge"}

::grafico{f="1/x^2" xmin=1 xmax=10 ymin=0 ymax=1.1 asintoti="y=0" titolo="y = 1/x² su [1, +∞): l'integrale converge e vale 1"}
:::

::::teorema{#campione-logaritmico titolo="Integrale campione con il logaritmo"}
Per $\beta \in \mathbb{R}$:
$$
\int_2^{+\infty} \frac{dx}{x\,(\ln x)^{\beta}} \ \text{converge se e solo se } \beta > 1 .
$$
Per $\beta > 0$ l'integranda tende a $0$ più in fretta di $\dfrac{1}{x}$ e più lentamente di ogni $\dfrac{1}{x^{\alpha}}$ con $\alpha > 1$, quindi il confronto con le potenze lascia il carattere aperto; questo campione copre i casi intermedi.

:::dimostrazione
Con la sostituzione $u = \ln x$, $du = \dfrac{dx}{x}$,
$$
\int_2^{t} \frac{dx}{x\,(\ln x)^{\beta}} = \int_{\ln 2}^{\ln t} \frac{du}{u^{\beta}} ,
$$
e $\ln t \to +\infty$ per $t \to +\infty$, quindi l'integrale ha lo stesso carattere di $\displaystyle\int_{\ln 2}^{+\infty} \frac{du}{u^{\beta}}$. Lo spostamento dell'estremo inferiore da $1$ a $\ln 2$ non cambia il carattere, perciò dal campione delle potenze segue la convergenza se e solo se $\beta > 1$.
:::
::::

## Criterio del confronto

::::teorema{#criterio-del-confronto titolo="Criterio del confronto"}
Siano $f, g : [a, +\infty) \to \mathbb{R}$ integrabili su $[a, t]$ per ogni $t > a$, con $0 \leq f(x) \leq g(x)$ per ogni $x \geq a$.

- Se $\displaystyle\int_a^{+\infty} g(x)\,dx$ converge, allora $\displaystyle\int_a^{+\infty} f(x)\,dx$ converge.
- Se $\displaystyle\int_a^{+\infty} f(x)\,dx$ diverge, allora $\displaystyle\int_a^{+\infty} g(x)\,dx$ diverge.

L'enunciato vale anche per un punto critico al finito, con le disuguaglianze richieste vicino al punto critico. Il criterio stabilisce il carattere confrontando l'integranda con un campione, senza cercare una primitiva.

:::dimostrazione
La funzione integrale $F(t) = \displaystyle\int_a^{t} f(x)\,dx$ è crescente, poiché per $t_1 < t_2$ la differenza $F(t_2) - F(t_1) = \displaystyle\int_{t_1}^{t_2} f(x)\,dx$ è non negativa, dato che $f \geq 0$. Supponiamo che l'integrale di $g$ converga con valore $S$. Anche $G(t) = \displaystyle\int_a^{t} g(x)\,dx$ è crescente, perché $g \geq f \geq 0$; poiché $G$ è crescente e tende a $S$, vale $G(t) \leq S$ per ogni $t$. Dalla monotonia dell'integrale rispetto all'integranda segue allora
$$
F(t) \leq G(t) \leq S \qquad \text{per ogni } t > a ,
$$
quindi $F$ è crescente e limitata superiormente. Posto $\Lambda = \sup F \in \mathbb{R}$, per ogni $\varepsilon > 0$ esiste $t_0$ con $F(t_0) > \Lambda - \varepsilon$, e per ogni $t > t_0$ la monotonia dà
$$
\Lambda - \varepsilon < F(t_0) \leq F(t) \leq \Lambda ,
$$
perciò $F(t) \to \Lambda$ per $t \to +\infty$ e l'integrale di $f$ converge. La seconda parte è la contronominale della prima, poiché se l'integrale di $g$ convergesse, per quanto appena dimostrato convergerebbe anche quello di $f$.
:::
::::

:::osservazione
Per una funzione non negativa la funzione integrale è crescente, quindi il suo limite esiste sempre, finito oppure uguale a $+\infty$, con l'argomento di monotonia della dimostrazione precedente. L'integrale di una funzione non negativa dunque converge oppure diverge a $+\infty$; il carattere indeterminato può comparire soltanto con integrande che cambiano segno, come $\cos x$.
:::

:::esempio
$$
\int_1^{+\infty} \frac{2 + \sin x}{x^3}\,dx
$$
Per ogni $x$ vale $1 \leq 2 + \sin x \leq 3$, quindi $0 \leq \dfrac{2 + \sin x}{x^{3}} \leq \dfrac{3}{x^{3}}$. L'integrale di $\dfrac{3}{x^{3}}$ su $[1, +\infty)$ converge, perché è il campione con $\alpha = 3$ moltiplicato per la costante $3$, perciò l'integrale dato converge per il criterio del confronto.
:::

## Confronto asintotico

::::teorema{#confronto-asintotico titolo="Criterio del confronto asintotico"}
Siano $f$ e $g$ positive vicino al punto critico $c$ (un estremo infinito oppure un punto al finito) e integrabili sugli intervalli chiusi e limitati che non toccano $c$. Se $f(x) \sim g(x)$ per $x \to c$, allora gli integrali di $f$ e di $g$ vicino a $c$ hanno lo stesso carattere. Nella pratica $g$ è un campione, trovato con le funzioni asintotiche dei limiti notevoli o con gli sviluppi di Taylor.

:::dimostrazione
Poiché $\dfrac{f(x)}{g(x)} \to 1$, la definizione di limite con $\varepsilon = \dfrac{1}{2}$ dà un intorno di $c$ in cui $\dfrac{1}{2} < \dfrac{f(x)}{g(x)} < \dfrac{3}{2}$, cioè
$$
\frac{1}{2}\,g(x) < f(x) < \frac{3}{2}\,g(x) .
$$
Se l'integrale di $g$ converge, converge anche quello di $\dfrac{3}{2}\,g$, quindi quello di $f$ converge per il criterio del confronto. Se l'integrale di $g$ diverge, diverge anche quello di $\dfrac{1}{2}\,g$ e, poiché $f > \dfrac{1}{2}\,g$, sempre per confronto diverge quello di $f$. Per integrande positive i caratteri possibili sono soltanto convergenza e divergenza, per l'osservazione sulla monotonia della funzione integrale, quindi nei due casi gli integrali di $f$ e di $g$ hanno lo stesso carattere.
:::
::::

:::richiamo{titolo="Criterio del confronto"}
Se $0 \leq f(x) \leq g(x)$ vicino al punto critico, dalla convergenza dell'integrale di $g$ segue la convergenza dell'integrale di $f$, e dalla divergenza dell'integrale di $f$ segue la divergenza dell'integrale di $g$.
:::

:::osservazione
Se $f$ e $g$ sono positive e $\dfrac{f(x)}{g(x)} \to L$ per $x \to c$, il confronto si adatta ai tre casi.

- $L \in (0, +\infty)$. Allora $f \sim L\,g$ e gli integrali hanno lo stesso carattere, perché la costante $L$ non cambia il carattere.
- $L = 0$. Definitivamente $f(x) < g(x)$, quindi se l'integrale di $g$ converge, quello di $f$ converge.
- $L = +\infty$. Definitivamente $f(x) > g(x)$, quindi se l'integrale di $g$ diverge, quello di $f$ diverge.
:::

:::esempio
$$
\int_0^{1} \frac{dx}{\sin x}
$$
Per $x \to 0^{+}$ vale $\sin x \sim x$ (limite notevole), quindi $\dfrac{1}{\sin x} \sim \dfrac{1}{x}$. Il campione con $\alpha = 1$ su $(0, 1]$ diverge, perciò l'integrale diverge per confronto asintotico.
:::

## Ordine di infinitesimo e di infinito dell'integranda

:::definizione{#ordine-di-infinitesimo titolo="Ordine di infinitesimo e di infinito"}
Una funzione positiva $f$ è infinitesima di ordine $p > 0$ per $x \to +\infty$ se $f(x) \sim \dfrac{c}{x^{p}}$ con $c > 0$; è infinita di ordine $p > 0$ per $x \to x_0$ se $f(x) \sim \dfrac{c}{|x - x_0|^{p}}$. Dal confronto asintotico con i campioni segue il quadro completo.

- Per $x \to +\infty$ l'integrale converge se $p > 1$ e diverge se $p \leq 1$.
- Nel punto critico al finito l'integrale converge se $p < 1$ e diverge se $p \geq 1$.

L'ordine si determina sostituendo i fattori dell'integranda con funzioni asintotiche più semplici, ottenute dai limiti notevoli e dagli sviluppi di Taylor; per questi strumenti si rimanda al capitolo sui limiti e a quello sul calcolo differenziale.
:::

:::esempio{titolo="Ordine con uno sviluppo di Taylor"}
$$
\int_0^{1} \frac{x - \sin x}{x^{7/2}}\,dx
$$
Dallo sviluppo $\sin x = x - \dfrac{x^{3}}{6} + o(x^{3})$ segue $x - \sin x \sim \dfrac{x^{3}}{6}$ per $x \to 0^{+}$, quindi l'integranda è asintotica a $\dfrac{x^{3}}{6\,x^{7/2}} = \dfrac{1}{6\sqrt{x}}$. L'ordine di infinito nel punto critico $0$ è $\dfrac{1}{2} < 1$, perciò l'integrale converge.
:::

:::esempio{titolo="Ordine con un limite notevole"}
$$
\int_1^{+\infty} \ln\!\left(1 + \frac{1}{x^{2}}\right) dx
$$
Per $x \to +\infty$ si ha $\dfrac{1}{x^{2}} \to 0$, e $\ln(1 + t) \sim t$ per $t \to 0$, quindi l'integranda è asintotica a $\dfrac{1}{x^{2}}$. L'ordine di infinitesimo è $2 > 1$, perciò l'integrale converge.
:::

## Convergenza assoluta

:::teorema{#convergenza-assoluta titolo="La convergenza assoluta implica la convergenza"}
L'integrale di $f$ converge assolutamente se converge l'integrale di $|f|$. Se $\displaystyle\int_a^{+\infty} |f(x)|\,dx$ converge, allora $\displaystyle\int_a^{+\infty} f(x)\,dx$ converge e vale
$$
\left| \int_a^{+\infty} f(x)\,dx \right| \leq \int_a^{+\infty} |f(x)|\,dx .
$$
La dimostrazione applica il criterio del confronto alla funzione non negativa $f + |f| \leq 2\,|f|$ e scrive $f = (f + |f|) - |f|$; lo stesso enunciato vale per i punti critici al finito. I criteri di confronto richiedono integrande non negative, quindi con integrande di segno variabile si passa al valore assoluto e si applica questo teorema.
:::

:::esempio
$$
\int_1^{+\infty} \frac{\cos x}{x^{2}}\,dx
$$
Vale $\left| \dfrac{\cos x}{x^{2}} \right| \leq \dfrac{1}{x^{2}}$ e il campione con $\alpha = 2$ converge, quindi l'integrale converge assolutamente, e perciò converge.
:::

:::attenzione
L'implicazione inversa non vale: $\displaystyle\int_1^{+\infty} \frac{\sin x}{x}\,dx$ converge, ma $\displaystyle\int_1^{+\infty} \frac{|\sin x|}{x}\,dx$ diverge, quindi la convergenza non implica la convergenza assoluta.
:::

## Integrali notevoli

:::teorema{#integrali-notevoli titolo="Tre integrali notevoli"}
$$
\int_0^{+\infty} e^{-x}\,dx = 1, \qquad
\int_{-\infty}^{+\infty} e^{-x^{2}}\,dx = \sqrt{\pi}, \qquad
\int_0^{+\infty} \frac{\sin x}{x}\,dx = \frac{\pi}{2} .
$$
Il primo si calcola con la definizione, poiché $\displaystyle\int_0^{t} e^{-x}\,dx = 1 - e^{-t} \to 1$. Il secondo è l'integrale della gaussiana, alla base del calcolo delle probabilità; converge per confronto, dato che per $x \geq 1$ vale $x^{2} \geq x$ e quindi, per la crescenza dell'esponenziale, $e^{-x^{2}} \leq e^{-x}$; i punti critici sono due, l'integranda è pari e su $[0, 1]$ l'integrale è ordinario, perciò basta la convergenza su $[1, +\infty)$. Il valore $\sqrt{\pi}$ si ottiene con gli integrali doppi e si rimanda al corso di Analisi 2. Il terzo converge, come si dimostra con un'integrazione per parti, ma non converge assolutamente; il valore $\dfrac{\pi}{2}$ richiede strumenti più avanzati e si assume. In $0$ l'integranda $\dfrac{\sin x}{x}$ si prolunga con continuità, perché tende a $1$, quindi $0$ non è un punto critico.
:::
