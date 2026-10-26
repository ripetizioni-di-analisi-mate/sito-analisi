---
titolo: Limiti e continuità
sommario: Che cosa significa che una funzione tende a un valore, come si calcolano i limiti, quali teoremi li governano, e che cosa aggiunge la continuità.
---

## Intorni e punti di accumulazione

:::definizione{#intorno titolo="Intorno di un punto"}
Per $x_0 \in \mathbb{R}$ e $r > 0$, l'intorno di $x_0$ di raggio $r$ è l'intervallo aperto
$$
I(x_0, r) = (x_0 - r,\; x_0 + r) = \{ x \in \mathbb{R} : |x - x_0| < r \}.
$$
Un intorno di $+\infty$ è una semiretta $(a, +\infty)$; un intorno di $-\infty$ è una semiretta $(-\infty, a)$. Le scritture $|x - x_0| < r$ e $x \in (x_0 - r, x_0 + r)$ dicono la stessa cosa, e nelle definizioni di limite compaiono entrambe.
:::

:::definizione{#punto-di-accumulazione titolo="Punto di accumulazione"}
$x_0 \in \mathbb{R}$ è di accumulazione per $A \subseteq \mathbb{R}$ se ogni intorno di $x_0$ contiene almeno un punto di $A$ diverso da $x_0$. Il punto può appartenere ad $A$ oppure no. Il limite per $x \to x_0$ ha senso solo in un punto di accumulazione del dominio.

- $A = (0, 1)$: di accumulazione sono tutti i punti di $[0, 1]$, compresi $0$ e $1$ che non stanno in $A$.
- $A = \{1, 2, 3\}$: nessun punto di accumulazione.
- $A = \mathbb{N}$: nessun punto di accumulazione in $\mathbb{R}$; ha senso solo $x \to +\infty$.
:::

## Definizione di limite

:::definizione{#limite-finito titolo="Limite finito in un punto"}
$f : A \to \mathbb{R}$, $x_0$ di accumulazione per $A$. Si scrive $\displaystyle\lim_{x \to x_0} f(x) = L$, con $L \in \mathbb{R}$, se per ogni $\varepsilon > 0$ esiste $\delta > 0$ tale che, per ogni $x \in A$,
$$
0 < |x - x_0| < \delta \implies |f(x) - L| < \varepsilon .
$$
Fissata una distanza $\varepsilon$ da $L$, piccola a piacere, esiste un intorno di $x_0$ in cui tutti i valori $f(x)$ distano da $L$ meno di $\varepsilon$; il raggio $\delta$ dipende da $\varepsilon$. La condizione $0 < |x - x_0|$ esclude $x_0$, quindi il valore $f(x_0)$, anche quando esiste, non ha alcun ruolo.
:::

:::esempio{titolo="Verifica con la definizione"}
$\displaystyle\lim_{x \to 2} (3x - 1) = 5$. Fissato $\varepsilon > 0$, poiché $|(3x - 1) - 5| = 3|x - 2|$, basta $\delta = \dfrac{\varepsilon}{3}$: se $|x - 2| < \dfrac{\varepsilon}{3}$ allora $3|x - 2| < \varepsilon$.
:::

:::esempio{titolo="Il limite non dipende dal valore nel punto"}
$f(x) = \dfrac{\sin x}{x}$ è definita per $x \neq 0$ e $0$ è di accumulazione per il dominio. Per $x \to 0$ si ha $f(x) \to 1$ (limite notevole del seno), anche se $f(0)$ non esiste: il grafico ha un punto vuoto in $(0, 1)$.

::grafico{f="sin(x)/x" xmin=-12 xmax=12 ymin=-0.5 ymax=1.3 punti="0,1,vuoto" titolo="y = sin x / x; il punto (0, 1) non appartiene al grafico"}
:::

:::definizione{#limite-infinito titolo="Limite infinito e limite all'infinito"}
Stessa struttura, con intorni di tipo diverso.

- $\displaystyle\lim_{x \to x_0} f(x) = +\infty$ se per ogni $M > 0$ esiste $\delta > 0$ tale che $0 < |x - x_0| < \delta \implies f(x) > M$.
- $\displaystyle\lim_{x \to +\infty} f(x) = L$ (con $A$ illimitato superiormente) se per ogni $\varepsilon > 0$ esiste $K > 0$ tale che $x > K \implies |f(x) - L| < \varepsilon$.
- $\displaystyle\lim_{x \to +\infty} f(x) = +\infty$ se per ogni $M > 0$ esiste $K > 0$ tale che $x > K \implies f(x) > M$.

Per $-\infty$ si scrive $f(x) < -M$ oppure $x < -K$. In tutti i casi: per ogni intorno $V$ del valore limite esiste un intorno $U$ di $x_0$ tale che $f(x) \in V$ per ogni $x \in U \cap A$, $x \neq x_0$.
:::

:::esempio
$f(x) = \dfrac{1}{x^2}$. Per $x \to 0$: fissato $M > 0$, $\dfrac{1}{x^2} > M$ per $0 < |x| < \dfrac{1}{\sqrt{M}}$, quindi $f(x) \to +\infty$. Per $x \to +\infty$: fissato $\varepsilon > 0$, $\dfrac{1}{x^2} < \varepsilon$ per $x > \dfrac{1}{\sqrt{\varepsilon}}$, quindi $f(x) \to 0$.
:::

:::definizione{#limite-destro-sinistro titolo="Limite destro e limite sinistro"}
Il limite destro $\displaystyle\lim_{x \to x_0^+} f(x)$ è il limite della restrizione di $f$ ai punti $x > x_0$; il limite sinistro $\displaystyle\lim_{x \to x_0^-} f(x)$ ai punti $x < x_0$. Se $x_0$ è di accumulazione da entrambi i lati, il limite esiste se e solo se i due limiti laterali esistono e coincidono. Servono quando la funzione ha espressioni diverse a destra e a sinistra, oppure quando un denominatore cambia segno nel punto.
:::

:::esempio
$\displaystyle\lim_{x \to 0^+} \frac{1}{x} = +\infty$ e $\displaystyle\lim_{x \to 0^-} \frac{1}{x} = -\infty$, quindi il limite per $x \to 0$ non esiste.

::grafico{f="1/x" xmin=-4 xmax=4 ymin=-4 ymax=4 asintoti="x=0" titolo="y = 1/x: i due limiti laterali in 0 sono diversi"}
:::

## Primi teoremi sui limiti

::::teorema{#unicita-del-limite titolo="Unicità del limite"}
Se il limite di $f$ per $x \to x_0$ esiste, è unico. Per questo si scrive $\lim f(x) = L$ con il segno di uguale e nei calcoli il limite si tratta come un numero.

:::dimostrazione
Siano per assurdo $L_1 \neq L_2$ due limiti finiti e $\varepsilon = \dfrac{|L_1 - L_2|}{2} > 0$. Esistono $\delta_1, \delta_2$ con $|f(x) - L_i| < \varepsilon$ per $0 < |x - x_0| < \delta_i$; per $\delta = \min\{\delta_1, \delta_2\}$ esiste $x \in A$ con $0 < |x - x_0| < \delta$, perché $x_0$ è di accumulazione. Quindi
$$
|L_1 - L_2| \leq |L_1 - f(x)| + |f(x) - L_2| < 2\varepsilon = |L_1 - L_2| ,
$$
che è assurdo. Con un limite infinito si ragiona allo stesso modo con gli intorni corrispondenti.
:::
::::

::::teorema{#permanenza-del-segno titolo="Permanenza del segno"}
Se $\displaystyle\lim_{x \to x_0} f(x) = L > 0$ (anche $L = +\infty$), esiste un intorno $U$ di $x_0$ con $f(x) > 0$ per ogni $x \in U \cap A$, $x \neq x_0$. Analogamente con $L < 0$ e $f(x) < 0$. Serve per dedurre il segno di una funzione vicino a un punto dal suo limite; viene usato nel teorema degli zeri e nello studio della monotonia.

:::dimostrazione
Per $L$ finito si applica la definizione con $\varepsilon = \dfrac{L}{2} > 0$: esiste $\delta$ tale che $|f(x) - L| < \dfrac{L}{2}$ per $0 < |x - x_0| < \delta$, da cui $f(x) > L - \dfrac{L}{2} = \dfrac{L}{2} > 0$. Per $L = +\infty$ si applica la definizione con $M = 1$.
:::
::::

:::attenzione
Il teorema va dal limite al segno, non dal segno al limite. Da $f(x) > 0$ in un intorno e limite esistente segue soltanto $L \geq 0$: $f(x) = x^2 > 0$ per $x \neq 0$ e il limite in $0$ è $0$.
:::

::::teorema{#teorema-del-confronto titolo="Teorema del confronto"}
Se $g(x) \leq f(x) \leq h(x)$ in un intorno di $x_0$ (escluso al più $x_0$) e $g(x) \to L$, $h(x) \to L$ con $L \in \mathbb{R}$, allora $f(x) \to L$. Con i limiti infiniti basta una disuguaglianza: se $f(x) \geq g(x)$ e $g(x) \to +\infty$, allora $f(x) \to +\infty$. Permette di calcolare un limite senza un'espressione esplicita della funzione; con questo teorema si dimostrano i limiti notevoli.

:::dimostrazione
Fissato $\varepsilon > 0$, per $x$ abbastanza vicino a $x_0$ valgono $L - \varepsilon < g(x)$ e $h(x) < L + \varepsilon$, quindi
$$
L - \varepsilon < g(x) \leq f(x) \leq h(x) < L + \varepsilon ,
$$
cioè $|f(x) - L| < \varepsilon$.
:::
::::

:::teorema{#limitata-per-infinitesima titolo="Limitata per infinitesima"}
Se $|f(x)| \leq C$ in un intorno di $x_0$ e $g(x) \to 0$, allora $f(x)\,g(x) \to 0$. Segue dal confronto: $0 \leq |f(x) g(x)| \leq C\,|g(x)| \to 0$.
$$
\lim_{x \to +\infty} \frac{\sin x}{x} = 0 \qquad\text{perché } |\sin x| \leq 1 \text{ e } \frac{1}{x} \to 0 .
$$
Il limite di $\sin x$ per $x \to +\infty$ non esiste; il teorema richiede soltanto che $\sin x$ sia limitata.
:::

## Operazioni con i limiti e forme indeterminate

:::teorema{#algebra-dei-limiti titolo="Limiti di somma, prodotto e quoziente"}
Se $f(x) \to L$ e $g(x) \to M$ con $L, M \in \mathbb{R}$, allora
$$
\begin{gathered}
f(x) + g(x) \to L + M, \qquad f(x)\,g(x) \to L M, \\[4pt]
\frac{f(x)}{g(x)} \to \frac{L}{M} \quad \text{se } M \neq 0 .
\end{gathered}
$$
Con limiti infiniti valgono le regole seguenti ($L \in \mathbb{R}$; $0^{+}$ indica una quantità che tende a $0$ restando positiva; i casi con i segni cambiati sono simmetrici):
$$
\begin{gathered}
L + \infty = +\infty, \qquad +\infty + \infty = +\infty, \\[4pt]
L \cdot (+\infty) = +\infty \ \ (L > 0), \qquad \frac{L}{\pm\infty} = 0, \\[6pt]
\frac{L}{0^{+}} = +\infty \ \ (L > 0).
\end{gathered}
$$
:::

:::definizione{#forme-indeterminate titolo="Forme indeterminate"}
$$
\begin{gathered}
+\infty - \infty, \qquad 0 \cdot \infty, \qquad \frac{0}{0}, \qquad \frac{\infty}{\infty}, \\[6pt]
1^{\infty}, \qquad 0^{0}, \qquad \infty^{0}
\end{gathered}
$$
In questi casi il valore del limite non è determinato dai limiti delle parti e dipende dalle funzioni: per $x \to +\infty$ i rapporti $\dfrac{x}{x}$, $\dfrac{x^2}{x}$, $\dfrac{x}{x^2}$ sono tutti del tipo $\dfrac{\infty}{\infty}$ e tendono a $1$, $+\infty$, $0$. Il calcolo prosegue trasformando l'espressione: scomposizione, raccoglimento del termine dominante, razionalizzazione, limiti notevoli; nel capitolo sulle derivate, formula di Taylor e teorema di de l'Hôpital.
:::

:::attenzione
$\dfrac{L}{0}$ con $L \neq 0$ non è una forma indeterminata: il limite è infinito e il segno dipende dal segno di $L$ e da quello con cui il denominatore tende a $0$. Per esempio $\displaystyle\lim_{x \to 1^{+}} \frac{2}{x - 1} = +\infty$ e $\displaystyle\lim_{x \to 1^{-}} \frac{2}{x - 1} = -\infty$.
:::

:::esempio{titolo="Raccoglimento del termine dominante"}
$$
\lim_{x \to +\infty} \frac{2x^3 - x}{5x^3 + x^2 + 1}
= \lim_{x \to +\infty} \frac{x^3\left(2 - \dfrac{1}{x^2}\right)}{x^3\left(5 + \dfrac{1}{x} + \dfrac{1}{x^3}\right)}
= \frac{2}{5}
$$
Dopo la semplificazione di $x^3$ i termini $\dfrac{1}{x^2}$, $\dfrac{1}{x}$, $\dfrac{1}{x^3}$ tendono a $0$. In un rapporto di polinomi per $x \to \pm\infty$ contano solo i termini di grado massimo.
:::

:::teorema{#limite-funzione-composta titolo="Limite di una funzione composta"}
Se $g(x) \to y_0$ per $x \to x_0$, $f(y) \to L$ per $y \to y_0$, e $g(x) \neq y_0$ in un intorno di $x_0$ (condizione non necessaria se $f$ è continua in $y_0$), allora $f(g(x)) \to L$ per $x \to x_0$. Autorizza la sostituzione $y = g(x)$ dentro un limite, cioè il cambio di variabile con cui si usano i limiti notevoli.
$$
\lim_{x \to 0} \frac{\sin 3x}{x}
= \lim_{x \to 0} 3 \cdot \frac{\sin 3x}{3x}
= 3 \cdot \lim_{y \to 0} \frac{\sin y}{y}
= 3
\qquad (y = 3x \to 0)
$$
:::

## Limiti notevoli

::::teorema{#limite-notevole-seno titolo="Limite notevole del seno"}
$$
\lim_{x \to 0} \frac{\sin x}{x} = 1, \qquad
\lim_{x \to 0} \frac{1 - \cos x}{x^2} = \frac{1}{2}, \qquad
\lim_{x \to 0} \frac{\tan x}{x} = 1
$$
Il secondo segue dal primo moltiplicando per $1 + \cos x$: $\dfrac{1 - \cos x}{x^2} = \left(\dfrac{\sin x}{x}\right)^2 \dfrac{1}{1 + \cos x} \to \dfrac{1}{2}$. Il terzo da $\dfrac{\tan x}{x} = \dfrac{\sin x}{x} \cdot \dfrac{1}{\cos x}$.

:::dimostrazione
Per $0 < x < \dfrac{\pi}{2}$, nella circonferenza di raggio $1$ il triangolo di vertici $O$, $(1,0)$, $(\cos x, \sin x)$ ha area $\dfrac{\sin x}{2}$, il settore di angolo $x$ ha area $\dfrac{x}{2}$, il triangolo di vertici $O$, $(1,0)$, $(1, \tan x)$ ha area $\dfrac{\tan x}{2}$; il primo sta nel settore e il settore nel secondo triangolo, quindi $\sin x \leq x \leq \tan x$. Dividendo per $\sin x > 0$ si ottiene $1 \leq \dfrac{x}{\sin x} \leq \dfrac{1}{\cos x}$, cioè
$$
\cos x \leq \frac{\sin x}{x} \leq 1 .
$$
Per $x \to 0^+$ si ha $\cos x \to 1$, quindi per il confronto $\dfrac{\sin x}{x} \to 1$; la funzione è pari, perciò lo stesso vale per $x \to 0^-$.
:::
::::

:::richiamo{titolo="Teorema del confronto"}
Se $g(x) \leq f(x) \leq h(x)$ in un intorno di $x_0$ e $g(x) \to L$, $h(x) \to L$, allora $f(x) \to L$.
:::

:::teorema{#limiti-notevoli-esponenziale titolo="Limiti notevoli esponenziali e logaritmici"}
$$
\begin{gathered}
\lim_{x \to \pm\infty} \left(1 + \frac{1}{x}\right)^{x} = e, \qquad
\lim_{x \to 0} \frac{\ln(1 + x)}{x} = 1, \\[8pt]
\lim_{x \to 0} \frac{e^{x} - 1}{x} = 1, \qquad
\lim_{x \to 0} \frac{(1 + x)^{\alpha} - 1}{x} = \alpha \quad (\alpha \in \mathbb{R})
\end{gathered}
$$
Il primo è la definizione del numero $e$ estesa dalle successioni alle funzioni e si assume. Il secondo segue dal primo con $x = \dfrac{1}{t}$: $\dfrac{\ln(1 + x)}{x} = \ln\left(\left(1 + \dfrac{1}{t}\right)^{t}\right) \to \ln e = 1$, per la continuità del logaritmo. Il terzo dal secondo con $y = e^x - 1$, cioè $x = \ln(1 + y)$: $\dfrac{e^x - 1}{x} = \dfrac{y}{\ln(1 + y)} \to 1$. Il quarto, per $\alpha \neq 0$, scrivendo $(1 + x)^{\alpha} = e^{\alpha \ln(1 + x)}$:
$$
\frac{(1 + x)^{\alpha} - 1}{x}
= \frac{e^{\alpha \ln(1 + x)} - 1}{\alpha \ln(1 + x)} \cdot \alpha \cdot \frac{\ln(1 + x)}{x}
\to 1 \cdot \alpha \cdot 1 ;
$$
per $\alpha = 0$ il rapporto è identicamente nullo.
:::

:::esempio
$$
\lim_{x \to 0} \frac{e^{2x} - 1}{\sin x}
= \lim_{x \to 0} \frac{e^{2x} - 1}{2x} \cdot \frac{x}{\sin x} \cdot 2
= 1 \cdot 1 \cdot 2 = 2
$$
Ogni fattore è ricondotto a un limite notevole con la sostituzione adatta: $2x \to 0$ nel primo, il reciproco del limite del seno nel secondo.
:::

:::attenzione
I limiti notevoli valgono quando l'argomento tende a $0$ (o all'infinito, per il limite di $e$). Il rapporto $\dfrac{\sin x}{x}$ per $x \to \pi$ non è un limite notevole: il numeratore tende a $0$ e il denominatore a $\pi$, quindi il limite è $0$ senza forma indeterminata.
:::

## Infinitesimi, infiniti e simboli di Landau

:::definizione{#infinitesimo-infinito titolo="Infinitesimo, infinito, o-piccolo"}
$f$ è infinitesima per $x \to x_0$ se $f(x) \to 0$; è infinita se $|f(x)| \to +\infty$. Con $g(x) \neq 0$ vicino a $x_0$, si scrive $f(x) = o(g(x))$ ($f$ è o-piccolo di $g$) se
$$
\lim_{x \to x_0} \frac{f(x)}{g(x)} = 0 .
$$
Tra infinitesimi, $f = o(g)$ significa che $f$ tende a $0$ più rapidamente di $g$; tra infiniti, che $f$ tende all'infinito più lentamente di $g$. Il simbolo scrive un'approssimazione insieme all'ordine dell'errore: dal limite notevole del seno, $\sin x = x + o(x)$ per $x \to 0$, perché $\dfrac{\sin x - x}{x} = \dfrac{\sin x}{x} - 1 \to 0$.
:::

:::definizione{#funzioni-asintotiche titolo="Funzioni asintotiche"}
$f(x) \sim g(x)$ per $x \to x_0$ se $\dfrac{f(x)}{g(x)} \to 1$. In un prodotto o in un quoziente una funzione si può sostituire con una asintotica senza cambiare il limite. I limiti notevoli in questa forma, per $x \to 0$:
$$
\begin{gathered}
\sin x \sim x, \qquad 1 - \cos x \sim \frac{x^2}{2}, \qquad e^x - 1 \sim x, \\[6pt]
\ln(1 + x) \sim x, \qquad (1 + x)^{\alpha} - 1 \sim \alpha x .
\end{gathered}
$$
:::

:::attenzione
La sostituzione con una funzione asintotica è lecita nei prodotti e nei quozienti, non nelle somme e differenze. Per $x \to 0$ si ha $\sin x \sim x$, ma $\sin x - x$ non è asintotico a $x - x = 0$: il limite di $\dfrac{\sin x - x}{x^3}$ vale $-\dfrac{1}{6}$ (formula di Taylor), mentre la sostituzione darebbe $0$.
:::

:::teorema{#gerarchia-degli-infiniti titolo="Gerarchia degli infiniti"}
Per $\alpha > 0$, $\beta > 0$, $a > 1$:
$$
\lim_{x \to +\infty} \frac{(\ln x)^{\beta}}{x^{\alpha}} = 0, \qquad
\lim_{x \to +\infty} \frac{x^{\alpha}}{a^{x}} = 0 .
$$
Per $x \to +\infty$ i logaritmi crescono più lentamente di ogni potenza, le potenze più lentamente di ogni esponenziale con base maggiore di $1$. Permette di calcolare forme $\dfrac{\infty}{\infty}$ con funzioni di tipo diverso, dove il raccoglimento del grado massimo non si applica. La dimostrazione usa il calcolo differenziale e si rimanda a quel capitolo.
$$
\lim_{x \to +\infty} \frac{x^3 + \ln x}{2^{x} + x^{5}}
= \lim_{x \to +\infty} \frac{x^{3}\left(1 + \dfrac{\ln x}{x^{3}}\right)}{2^{x}\left(1 + \dfrac{x^{5}}{2^{x}}\right)}
= \lim_{x \to +\infty} \frac{x^{3}}{2^{x}} \cdot \frac{1 + 0}{1 + 0} = 0
$$
In ciascun membro si raccoglie il termine che cresce più in fretta secondo la gerarchia.
:::

## Asintoti

:::definizione{#definizione-asintoti titolo="Asintoti"}
- $x = x_0$ è asintoto verticale se almeno uno dei limiti laterali di $f$ in $x_0$ è infinito.
- $y = L$ è asintoto orizzontale per $x \to +\infty$ se $f(x) \to L \in \mathbb{R}$; analogamente per $x \to -\infty$.
- $y = mx + q$ con $m \neq 0$ è asintoto obliquo per $x \to +\infty$ se
$$
\begin{cases}
\displaystyle m = \lim_{x \to +\infty} \frac{f(x)}{x} \in \mathbb{R}, \ m \neq 0 \\[10pt]
\displaystyle q = \lim_{x \to +\infty} \bigl( f(x) - m x \bigr) \in \mathbb{R}
\end{cases}
$$
e analogamente per $x \to -\infty$.

Le due condizioni dell'asintoto obliquo vanno verificate entrambe: se $m$ esiste finito ma $q$ è infinito oppure non esiste, l'asintoto obliquo non esiste. Gli asintoti descrivono il grafico ai bordi del dominio e vengono ripresi nello studio di funzione.
:::

:::esempio
$f(x) = \dfrac{x^2 + 1}{x}$:
$$
\begin{gathered}
m = \lim_{x \to \pm\infty} \frac{x^2 + 1}{x^2} = 1, \\[6pt]
q = \lim_{x \to \pm\infty} \left( \frac{x^2 + 1}{x} - x \right)
= \lim_{x \to \pm\infty} \frac{1}{x} = 0 ,
\end{gathered}
$$
quindi $y = x$ è asintoto obliquo da entrambe le parti; $x = 0$ è asintoto verticale perché $f(x) \to +\infty$ per $x \to 0^+$.

::grafico{f="(x*x+1)/x" xmin=-5 xmax=5 ymin=-6 ymax=6 asintoti="x=0" titolo="y = (x² + 1)/x con l'asintoto verticale x = 0; l'asintoto obliquo è y = x"}
:::

## Funzioni continue

:::definizione{#funzione-continua titolo="Funzione continua"}
$f : A \to \mathbb{R}$, $x_0 \in A$ di accumulazione per $A$. $f$ è continua in $x_0$ se
$$
\lim_{x \to x_0} f(x) = f(x_0) ,
$$
cioè se $f(x_0)$ esiste, il limite esiste finito e i due valori coincidono. $f$ è continua in $A$ se lo è in ogni punto. Per una funzione continua il limite si calcola per sostituzione, perciò il calcolo di un limite richiede lavoro soltanto nelle forme indeterminate.
:::

:::teorema{#continuita-funzioni-elementari titolo="Continuità delle funzioni elementari"}
Polinomi, funzioni razionali, potenze, esponenziali, logaritmi, funzioni trigonometriche e loro inverse sono continue in ogni punto del proprio dominio. Somma, prodotto, quoziente (con denominatore non nullo) e composizione di funzioni continue sono continue. La parte sulle operazioni segue dal teorema sui limiti di somma, prodotto e quoziente con $L = f(x_0)$ e $M = g(x_0)$; la continuità delle funzioni elementari discende dalla loro costruzione e si assume. La continuità di una funzione assegnata si riconosce dalla sua espressione: $\dfrac{e^{x} \sin x}{x^2 + 1}$ è continua in $\mathbb{R}$ perché quoziente di funzioni continue con denominatore mai nullo.
:::

:::definizione{#discontinuita titolo="Punti di discontinuità"}
$x_0$ di accumulazione per il dominio di $f$. Se $x_0$ non appartiene al dominio, oppure vi appartiene e $f$ non è continua in $x_0$, il punto è una discontinuità

- eliminabile, se il limite esiste finito ed è diverso da $f(x_0)$, oppure $f(x_0)$ non è definito; si toglie assegnando in $x_0$ il valore del limite;
- di salto (prima specie), se i limiti laterali esistono finiti e sono diversi;
- di seconda specie, in ogni altro caso: almeno un limite laterale è infinito oppure non esiste.
:::

:::esempio
$\dfrac{\sin x}{x}$ in $0$: eliminabile, il limite vale $1$. La funzione segno, $\operatorname{sgn}(x) = \pm 1$ per $x \gtrless 0$, in $0$: salto, i limiti laterali valgono $1$ e $-1$. $\dfrac{1}{x}$ in $0$: seconda specie, i limiti laterali sono infiniti.
:::

## Teoremi sulle funzioni continue

Valgono per $f$ continua su un intervallo chiuso e limitato $[a, b]$; senza una delle due ipotesi le conclusioni non valgono, come mostrano gli esempi.

::::teorema{#teorema-degli-zeri titolo="Teorema degli zeri"}
Se $f$ è continua in $[a, b]$ e $f(a)\, f(b) < 0$, esiste $c \in (a, b)$ con $f(c) = 0$. Garantisce una soluzione di $f(x) = 0$ senza risolvere l'equazione: localizza le radici di equazioni non risolubili per via algebrica, come $x = \cos x$, e conta gli zeri nello studio di funzione.
$$
x^3 + x - 1 = 0 \text{ ha una soluzione in } (0, 1): \quad f(0) = -1 < 0, \ f(1) = 1 > 0 .
$$

:::dimostrazione
Sia $f(a) < 0 < f(b)$ (il caso opposto è analogo) e $E = \{ x \in [a, b] : f(x) < 0 \}$. $E$ contiene $a$ ed è limitato da $b$, quindi esiste $c = \sup E \in [a, b]$. Se fosse $f(c) < 0$, per la permanenza del segno $f < 0$ in un intorno di $c$; poiché $f(b) > 0$ si ha $c < b$, e l'intorno conterrebbe punti di $E$ maggiori di $c$, contro la definizione di estremo superiore. Se fosse $f(c) > 0$, $f > 0$ in un intorno $(c - \delta, c + \delta)$; poiché $f(a) < 0$ si ha $c > a$, nessun punto di $(c - \delta, c]$ sta in $E$, quindi $c - \delta$ sarebbe un maggiorante di $E$ minore di $c$, assurdo. Perciò $f(c) = 0$, e $c \neq a, b$ perché $f(a), f(b) \neq 0$.
:::
::::

:::richiamo{titolo="Permanenza del segno"}
Se $f(x) \to L \neq 0$ per $x \to x_0$, in un intorno di $x_0$ la funzione ha il segno di $L$ (nei punti diversi da $x_0$).
:::

:::attenzione
Senza continuità il teorema non si applica: $f(x) = -1$ per $x \in [0, 1)$ e $f(x) = 1$ per $x \in [1, 2]$ cambia segno in $[0, 2]$ e non si annulla mai.
:::

:::teorema{#teorema-di-weierstrass titolo="Teorema di Weierstrass"}
Se $f$ è continua in $[a, b]$, ammette massimo e minimo: esistono $x_m, x_M \in [a, b]$ con $f(x_m) \leq f(x) \leq f(x_M)$ per ogni $x \in [a, b]$. Garantisce che il problema di massimo e minimo su un intervallo chiuso e limitato ha soluzione; con il calcolo differenziale si stabilisce dove cercarla. La dimostrazione usa il teorema di Bolzano-Weierstrass sulle successioni e si rimanda all'appendice.

- $f(x) = x$ su $(0, 1)$: continua, senza massimo né minimo, perché l'intervallo non è chiuso.
- $f(x) = \dfrac{1}{x}$ su $(0, 1]$: continua, senza massimo, perché l'intervallo non è chiuso in $0$ e la funzione è illimitata.
:::

::::teorema{#valori-intermedi titolo="Teorema dei valori intermedi"}
Se $f$ è continua in $[a, b]$ con minimo $m$ e massimo $M$, per ogni $y \in [m, M]$ esiste $x \in [a, b]$ con $f(x) = y$: l'immagine di $[a, b]$ è l'intervallo $[m, M]$. Una funzione continua su un intervallo assume tutti i valori compresi tra due valori assunti; così si determina l'immagine di una funzione e si contano le soluzioni di $f(x) = k$. Senza continuità non vale; per esempio $\dfrac{1}{x}$ sull'insieme $[-1, 1] \setminus \{0\}$ assume i valori $-1$ e $1$ ma non assume il valore $0$.

:::dimostrazione
Per $y = m$ o $y = M$ la tesi è il teorema di Weierstrass. Per $m < y < M$ si pone $g(x) = f(x) - y$, continua, con $g(x_m) = m - y < 0$ e $g(x_M) = M - y > 0$; per il teorema degli zeri sull'intervallo di estremi $x_m$ e $x_M$ esiste $x$ con $g(x) = 0$, cioè $f(x) = y$.
:::
::::

:::richiamo{titolo="Teorema degli zeri"}
Se $f$ è continua in $[a, b]$ e $f(a)\, f(b) < 0$, esiste $c \in (a, b)$ con $f(c) = 0$.
:::
