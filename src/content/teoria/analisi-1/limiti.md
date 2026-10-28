---
titolo: Limiti e continuità
sommario: Che cosa significa che una funzione tende a un valore, come si calcolano i limiti, quali teoremi li governano, e che cosa aggiunge la continuità.
---

:::percorso
Si usano gli intervalli e il valore assoluto letto come distanza (Precorso e capitolo sugli insiemi), l'estremo superiore con la completezza di $\mathbb{R}$ e i grafici delle funzioni elementari. Qui si rende precisa l'idea che $f(x)$ si avvicina a un valore quando $x$ si avvicina a un punto, si ricavano le regole per calcolare i limiti, comprese le forme indeterminate, e si definisce la continuità. Nel capitolo sul calcolo differenziale la derivata è il limite del rapporto incrementale: i limiti notevoli danno le derivate di $\sin x$, $e^x$ e $\ln x$, e i teoremi sulle funzioni continue tornano nei teoremi di Rolle e di Lagrange. Asintoti e limiti agli estremi del dominio sono un passo dello studio di funzione; integrali impropri e serie sono definiti come limiti.
:::

## Intorni e punti di accumulazione

Dire che $x$ è vicino a $x_0$ significa che la distanza $|x - x_0|$ è piccola; gli intorni danno un nome a questa idea.

:::definizione{#intorno titolo="Intorno di un punto"}
Per $x_0 \in \mathbb{R}$ e $r > 0$, l'**intorno** di $x_0$ di raggio $r$ è l'intervallo aperto
$$
I(x_0, r) = (x_0 - r,\; x_0 + r) = \{ x \in \mathbb{R} : |x - x_0| < r \}.
$$
Poiché $|x - x_0|$ è la distanza tra $x$ e $x_0$, l'intorno è l'insieme dei punti che distano da $x_0$ meno di $r$, e le scritture $|x - x_0| < r$ e $x \in (x_0 - r, x_0 + r)$ dicono *la stessa cosa*. Un intorno di $+\infty$ è una semiretta $(a, +\infty)$, cioè l'insieme dei numeri maggiori di una soglia $a$; un intorno di $-\infty$ è una semiretta $(-\infty, a)$.
:::

:::definizione{#punto-di-accumulazione titolo="Punto di accumulazione"}
Per studiare $f(x)$ quando $x$ si avvicina a $x_0$ servono punti del dominio vicini quanto si vuole a $x_0$. $x_0 \in \mathbb{R}$ è **di accumulazione** per $A \subseteq \mathbb{R}$ se *ogni* intorno di $x_0$ contiene *almeno un* punto di $A$ diverso da $x_0$. Il punto può appartenere ad $A$ oppure no, perché il limite non usa il valore in $x_0$. Il limite per $x \to x_0$ ha senso *solo* in un punto di accumulazione del dominio.

- $A = (0, 1)$: di accumulazione sono tutti i punti di $[0, 1]$, compresi $0$ e $1$ che non stanno in $A$.
- $A = \{1, 2, 3\}$: nessun punto di accumulazione, perché un intorno abbastanza piccolo di un numero qualunque non contiene altri punti di $A$.
- $A = \mathbb{N}$: nessun punto di accumulazione in $\mathbb{R}$, per lo stesso motivo (due naturali distano almeno $1$); ha senso solo $x \to +\infty$.
:::

## Definizione di limite

:::definizione{#limite-finito titolo="Limite finito in un punto"}
Si vuole esprimere che $f(x)$ è vicino quanto si vuole a $L$ pur di prendere $x$ abbastanza vicino a $x_0$. Le due vicinanze si misurano con due numeri: $\varepsilon$ è la distanza ammessa tra $f(x)$ e $L$, $\delta$ quanto ci si può allontanare da $x_0$.

Siano $f : A \to \mathbb{R}$ e $x_0$ un punto di accumulazione per $A$. Si scrive $\displaystyle\lim_{x \to x_0} f(x) = L$, con $L \in \mathbb{R}$, se per ogni $\varepsilon > 0$ esiste $\delta > 0$ tale che, per ogni $x \in A$,
$$
0 < |x - x_0| < \delta \implies |f(x) - L| < \varepsilon .
$$
In parole: fissata una tolleranza $\varepsilon$, piccola a piacere, esiste un intorno di $x_0$ in cui *tutti* i valori $f(x)$ distano da $L$ meno di $\varepsilon$. Sul grafico, la striscia orizzontale tra $L - \varepsilon$ e $L + \varepsilon$ contiene il tratto di grafico sopra l'intervallo $(x_0 - \delta, x_0 + \delta)$. Prima si fissa $\varepsilon$ e poi si cerca $\delta$, perciò il raggio $\delta$ **dipende da** $\varepsilon$: quando la striscia si restringe, in generale si restringe anche l'intervallo. La struttura *per ogni $\varepsilon > 0$ esiste* è la stessa della caratterizzazione dell'estremo superiore vista nel capitolo sugli insiemi.

La condizione $0 < |x - x_0|$ esclude $x_0$, quindi il valore $f(x_0)$, anche quando esiste, **non ha alcun ruolo** nel limite.

::grafico{f="x^2" xmin=-0.4 xmax=2 ymin=-0.4 ymax=2.4 area="1.5;0.5;0.7753;1.2247" punti="1,1,pieno" segmenti="0,1.5,2,1.5;0,0.5,2,0.5;0.7753,0,0.7753,1.5;1.2247,0,1.2247,1.5;1,0,1,1" etichette="0.04,1.58,L + ε;0.04,0.36,L − ε;0.5,-0.25,x₀ − δ;1.27,-0.25,x₀ + δ" legenda=0 titolo="$f(x) = x^2$, $x_0 = 1$, $L = 1$, $\varepsilon = \dfrac{1}{2}$: il grafico esce dalla striscia in $\dfrac{\sqrt{2}}{2}$ a sinistra e in $\dfrac{\sqrt{6}}{2}$ a destra; $\delta = \dfrac{\sqrt{6}}{2} - 1$ è la più piccola delle due distanze da $1$"}

:::

:::esempio{titolo="Verifica con la definizione"}
$\displaystyle\lim_{x \to 2} (3x - 1) = 5$. La distanza di $f(x)$ da $5$ è tre volte la distanza di $x$ da $2$, perché $|(3x - 1) - 5| = |3x - 6| = 3|x - 2|$. Quindi, fissato $\varepsilon > 0$, basta $\delta = \dfrac{\varepsilon}{3}$: se $|x - 2| < \dfrac{\varepsilon}{3}$ allora $3|x - 2| < \varepsilon$. Con $\varepsilon = \dfrac{3}{2}$ si ottiene $\delta = \dfrac{1}{2}$, con $\varepsilon = \dfrac{3}{10}$ serve $\delta = \dfrac{1}{10}$.

::grafico{f="3*x-1" xmin=-1 xmax=4 ymin=-2 ymax=9 area="6.5;3.5;1.5;2.5" punti="2,5,pieno" segmenti="0,6.5,1.5,6.5;0,3.5,1.5,3.5;1.5,0,1.5,3.5;2.5,0,2.5,6.5" etichette="0.1,7,L + ε;0.1,2.8,L − ε" titolo="Con $\varepsilon = \dfrac{3}{2}$ e $\delta = \dfrac{\varepsilon}{3} = \dfrac{1}{2}$: per $|x - 2| < \delta$ il grafico di $y = 3x - 1$ resta nella striscia $|y - 5| < \varepsilon$ (riquadro colorato)"}

:::

:::esempio{titolo="Il limite non dipende dal valore nel punto"}
$f(x) = \dfrac{\sin x}{x}$ è definita per $x \neq 0$ e $0$ è di accumulazione per il dominio. Per $x \to 0$ si ha $f(x) \to 1$ (**limite notevole del seno**, che si dimostra con il teorema del confronto), anche se $f(0)$ *non esiste*: il grafico ha un punto vuoto in $(0, 1)$.

::grafico{f="sin(x)/x" xmin=-12 xmax=12 ymin=-0.5 ymax=1.3 punti="0,1,vuoto" titolo="$y = \dfrac{\sin x}{x}$: il punto $(0, 1)$ non appartiene al grafico"}

:::

:::definizione{#limite-infinito titolo="Limite infinito e limite all'infinito"}
Lo schema è lo stesso, con intorni di forma diversa: $f(x)$ vicino a $+\infty$ significa $f(x) > M$ con $M$ grande a piacere, e $x$ vicino a $+\infty$ significa $x > K$ per una soglia $K$ opportuna.

- $\displaystyle\lim_{x \to x_0} f(x) = +\infty$ se per ogni $M > 0$ esiste $\delta > 0$ tale che $0 < |x - x_0| < \delta \implies f(x) > M$.
- $\displaystyle\lim_{x \to +\infty} f(x) = L$ (con $A$ illimitato superiormente) se per ogni $\varepsilon > 0$ esiste $K > 0$ tale che $x > K \implies |f(x) - L| < \varepsilon$.
- $\displaystyle\lim_{x \to +\infty} f(x) = +\infty$ se per ogni $M > 0$ esiste $K > 0$ tale che $x > K \implies f(x) > M$.

Per $-\infty$ si scrive $f(x) < -M$ oppure $x < -K$. In tutti i casi: per ogni intorno $V$ del valore limite esiste un intorno $U$ di $x_0$ tale che $f(x) \in V$ per ogni $x \in U \cap A$, $x \neq x_0$.
:::

:::esempio
$f(x) = \dfrac{1}{x^2}$. Per $x \to 0$: fissato $M > 0$, la disuguaglianza $\dfrac{1}{x^2} > M$ equivale a $x^2 < \dfrac{1}{M}$, cioè a $0 < |x| < \dfrac{1}{\sqrt{M}}$; quindi $\delta = \dfrac{1}{\sqrt{M}}$ soddisfa la definizione e $f(x) \to +\infty$. Per $x \to +\infty$: fissato $\varepsilon > 0$, per $x > \dfrac{1}{\sqrt{\varepsilon}}$ si ha $x^2 > \dfrac{1}{\varepsilon}$, cioè $\dfrac{1}{x^2} < \varepsilon$; quindi $K = \dfrac{1}{\sqrt{\varepsilon}}$ soddisfa la definizione e $f(x) \to 0$.

::grafico{f="1/x^2" xmin=-4 xmax=4 ymin=-1 ymax=8 asintoti="x=0" titolo="$y = \dfrac{1}{x^2}$: i valori crescono senza limite per $x \to 0$ e si avvicinano a $0$ per $x \to \pm\infty$"}

:::

:::definizione{#limite-destro-sinistro titolo="Limite destro e limite sinistro"}
Il **limite destro** $\displaystyle\lim_{x \to x_0^+} f(x)$ è il limite calcolato usando solo i punti $x > x_0$, cioè il limite della restrizione di $f$ a questi punti; il **limite sinistro** $\displaystyle\lim_{x \to x_0^-} f(x)$ usa solo i punti $x < x_0$. Se $x_0$ è di accumulazione da entrambi i lati, il limite esiste *se e solo se* i due limiti laterali esistono e **coincidono**. Servono quando la funzione ha espressioni diverse a destra e a sinistra, oppure quando un denominatore cambia segno nel punto.
:::

:::esempio
$\displaystyle\lim_{x \to 0^+} \frac{1}{x} = +\infty$ e $\displaystyle\lim_{x \to 0^-} \frac{1}{x} = -\infty$, quindi il limite per $x \to 0$ non esiste.

::grafico{f="1/x" xmin=-4 xmax=4 ymin=-4 ymax=4 asintoti="x=0" titolo="$y = \dfrac{1}{x}$: i due limiti laterali in $0$ sono diversi"}

:::

## Primi teoremi sui limiti

La definizione permette di verificare un valore già noto e non indica come trovarlo. I teoremi che seguono si dimostrano dalla definizione una volta per tutte, e da essi si ricavano le regole di calcolo che evitano di tornare a $\varepsilon$ e $\delta$.

::::teorema{#unicita-del-limite titolo="Unicità del limite"}
Se il limite di $f$ per $x \to x_0$ esiste, è **unico**. Per questo si scrive $\lim f(x) = L$ con il segno di uguale e nei calcoli il limite si tratta come un numero.

:::dimostrazione
L'idea: attorno a due valori diversi si prendono due strisce così strette da non toccarsi, e $f(x)$ non può stare in entrambe. Siano per assurdo $L_1 \neq L_2$ due limiti finiti e $\varepsilon = \dfrac{|L_1 - L_2|}{2} > 0$, metà della loro distanza. Esistono $\delta_1, \delta_2$ con $|f(x) - L_i| < \varepsilon$ per $0 < |x - x_0| < \delta_i$; per $\delta = \min\{\delta_1, \delta_2\}$ valgono entrambe le disuguaglianze, ed esiste $x \in A$ con $0 < |x - x_0| < \delta$, perché $x_0$ è di accumulazione. Per questo $x$, dalla disuguaglianza triangolare $|a + b| \leq |a| + |b|$ segue
$$
|L_1 - L_2| \leq |L_1 - f(x)| + |f(x) - L_2| < 2\varepsilon = |L_1 - L_2| ,
$$
che è **assurdo**. Con un limite infinito si ragiona allo stesso modo con gli intorni corrispondenti.
:::
::::

::::teorema{#permanenza-del-segno titolo="Permanenza del segno"}
Se $\displaystyle\lim_{x \to x_0} f(x) = L > 0$ (anche $L = +\infty$), esiste un intorno $U$ di $x_0$ con $f(x) > 0$ per ogni $x \in U \cap A$, $x \neq x_0$. Analogamente con $L < 0$ e $f(x) < 0$. Serve per dedurre il **segno** di una funzione vicino a un punto dal suo limite; viene usato nel teorema degli zeri e nello studio della monotonia.

:::dimostrazione
L'idea: se $f(x)$ si avvicina a un numero positivo, una striscia attorno a $L$ abbastanza stretta sta tutta sopra l'asse $x$. Per $L$ finito si applica la definizione con $\varepsilon = \dfrac{L}{2} > 0$: esiste $\delta$ tale che $|f(x) - L| < \dfrac{L}{2}$ per $0 < |x - x_0| < \delta$, da cui $f(x) > L - \dfrac{L}{2} = \dfrac{L}{2} > 0$. Per $L = +\infty$ si applica la definizione con $M = 1$.
:::
::::

:::attenzione
Il teorema va dal limite al segno, *non* dal segno al limite. Da $f(x) > 0$ in un intorno e limite esistente segue *soltanto* $L \geq 0$: $f(x) = x^2 > 0$ per $x \neq 0$ e il limite in $0$ è $0$.
:::

::::teorema{#teorema-del-confronto titolo="Teorema del confronto"}
Se $g(x) \leq f(x) \leq h(x)$ in un intorno di $x_0$ (escluso al più $x_0$) e $g(x) \to L$, $h(x) \to L$ con $L \in \mathbb{R}$, allora $f(x) \to L$. Con i limiti infiniti basta *una* disuguaglianza: se $f(x) \geq g(x)$ e $g(x) \to +\infty$, allora $f(x) \to +\infty$. Il teorema (detto anche *dei carabinieri*) permette di calcolare un limite stringendo la funzione tra due funzioni con limite noto; con questo teorema si dimostrano i **limiti notevoli**.

::grafico{f="x*sin(1/x);abs(x);-abs(x)" xmin=-1 xmax=1 ymin=-1 ymax=1 titolo="$-|x| \leq x \sin \dfrac{1}{x} \leq |x|$: le due funzioni esterne (tratteggiata e rossa) tendono a $0$ per $x \to 0$, quindi anche $x \sin \dfrac{1}{x}$ tende a $0$"}

:::dimostrazione
Fissato $\varepsilon > 0$, per definizione di limite esistono $\delta_1$ con $L - \varepsilon < g(x)$ per $0 < |x - x_0| < \delta_1$ e $\delta_2$ con $h(x) < L + \varepsilon$ per $0 < |x - x_0| < \delta_2$. Sia $\delta$ il minimo tra $\delta_1$, $\delta_2$ e il raggio dell'intorno in cui valgono le disuguaglianze dell'ipotesi. Per $0 < |x - x_0| < \delta$ si ha
$$
L - \varepsilon < g(x) \leq f(x) \leq h(x) < L + \varepsilon ,
$$
cioè $|f(x) - L| < \varepsilon$.
:::
::::

:::teorema{#limitata-per-infinitesima titolo="Limitata per infinitesima"}
Se $|f(x)| \leq C$ in un intorno di $x_0$ e $g(x) \to 0$ (cioè $g$ è *infinitesima*), allora $f(x)\,g(x) \to 0$. Segue dal **confronto**: $0 \leq |f(x) g(x)| \leq C\,|g(x)| \to 0$.
$$
\lim_{x \to +\infty} \frac{\sin x}{x} = 0 \qquad\text{perché } |\sin x| \leq 1 \text{ e } \frac{1}{x} \to 0 .
$$
Il limite di $\sin x$ per $x \to +\infty$ non esiste; il teorema richiede *soltanto* che $\sin x$ sia **limitata**.

::grafico{f="sin(x)/x;1/x;-1/x" xmin=0 xmax=20 ymin=-0.6 ymax=1.2 titolo="$y = \dfrac{\sin x}{x}$ resta tra $-\dfrac{1}{x}$ (rossa) e $\dfrac{1}{x}$ (tratteggiata), che tendono a $0$ per $x \to +\infty$"}

:::

## Operazioni con i limiti e forme indeterminate

Per calcolare un limite si scompone la funzione in parti di cui il limite è noto. Il teorema seguente dice quando i limiti delle parti bastano; le forme indeterminate sono i casi in cui non bastano.

:::teorema{#algebra-dei-limiti titolo="Limiti di somma, prodotto e quoziente"}
Se $f(x) \to L$ e $g(x) \to M$ con $L, M \in \mathbb{R}$, allora
$$
\begin{gathered}
f(x) + g(x) \to L + M, \qquad f(x)\,g(x) \to L M, \\[4pt]
\frac{f(x)}{g(x)} \to \frac{L}{M} \quad \text{se } M \neq 0 .
\end{gathered}
$$
Si dimostra dalla definizione, con stime simili a quella dell'unicità. Ne segue che il limite per $x \to x_0$ di un polinomio, o di un rapporto di polinomi con denominatore non nullo in $x_0$, è il suo valore in $x_0$ (proprietà detta *continuità*).

Con limiti infiniti valgono le regole seguenti ($L \in \mathbb{R}$; $0^{+}$ indica una quantità che tende a $0$ restando positiva; i casi con i segni cambiati sono simmetrici). Ogni riga abbrevia un enunciato: $L + \infty = +\infty$ significa che se $f(x) \to L$ e $g(x) \to +\infty$, allora $f(x) + g(x) \to +\infty$.
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
In questi casi il valore del limite *non* è determinato dai limiti delle parti e dipende dalle funzioni: per $x \to +\infty$ i rapporti $\dfrac{x}{x}$, $\dfrac{x^2}{x}$, $\dfrac{x}{x^2}$ sono tutti del tipo $\dfrac{\infty}{\infty}$ e tendono a $1$, $+\infty$, $0$. Il calcolo prosegue trasformando l'espressione: scomposizione, raccoglimento del termine dominante, razionalizzazione, limiti notevoli; nel capitolo sulle derivate, formula di Taylor e teorema di de l'Hôpital. Le tre forme esponenziali si riconducono a $0 \cdot \infty$ con la scrittura $f(x)^{g(x)} = e^{g(x) \ln f(x)}$, valida per $f(x) > 0$.

Il rapporto incrementale $\dfrac{f(x) - f(x_0)}{x - x_0}$, il cui limite è la derivata nel capitolo sul calcolo differenziale, per una funzione continua è sempre una forma $\dfrac{0}{0}$.
:::

:::attenzione
$\dfrac{L}{0}$ con $L \neq 0$ *non* è una forma indeterminata: il limite è **infinito** e il segno dipende dal segno di $L$ e da quello con cui il denominatore tende a $0$. Per esempio $\displaystyle\lim_{x \to 1^{+}} \frac{2}{x - 1} = +\infty$ e $\displaystyle\lim_{x \to 1^{-}} \frac{2}{x - 1} = -\infty$.
:::

:::esempio{titolo="Raccoglimento del termine dominante"}
Per $x$ grande, in un polinomio il termine di grado massimo prevale sugli altri, quindi lo si mette in evidenza sopra e sotto:
$$
\lim_{x \to +\infty} \frac{2x^3 - x}{5x^3 + x^2 + 1}
= \lim_{x \to +\infty} \frac{x^3\left(2 - \dfrac{1}{x^2}\right)}{x^3\left(5 + \dfrac{1}{x} + \dfrac{1}{x^3}\right)}
= \frac{2}{5}
$$
Dopo la semplificazione di $x^3$ i termini $\dfrac{1}{x^2}$, $\dfrac{1}{x}$, $\dfrac{1}{x^3}$ tendono a $0$. In un rapporto di polinomi per $x \to \pm\infty$ contano *solo* i **termini di grado massimo**.
:::

:::teorema{#limite-funzione-composta titolo="Limite di una funzione composta"}
Se $g(x) \to y_0$ per $x \to x_0$, $f(y) \to L$ per $y \to y_0$, e $g(x) \neq y_0$ in un intorno di $x_0$ (condizione *non necessaria* se $f$ è continua in $y_0$), allora $f(g(x)) \to L$ per $x \to x_0$. La condizione $g(x) \neq y_0$ serve perché il limite di $f$ in $y_0$ non usa il valore $f(y_0)$, che invece compare nei punti in cui $g(x) = y_0$; se $f$ è continua in $y_0$, quel valore è $L$.

Il teorema autorizza la sostituzione $y = g(x)$ dentro un limite, cioè il **cambio di variabile** con cui si usano i limiti notevoli. Nell'esempio $y = 3x$ tende a $0$ ed è diverso da $0$ per $x \neq 0$:
$$
\lim_{x \to 0} \frac{\sin 3x}{x}
= \lim_{x \to 0} 3 \cdot \frac{\sin 3x}{3x}
= 3 \cdot \lim_{y \to 0} \frac{\sin y}{y}
= 3
\qquad (y = 3x \to 0)
$$
:::

## Limiti notevoli

Con funzioni trigonometriche, esponenziali e logaritmiche le forme indeterminate di solito non si risolvono scomponendo o razionalizzando. I limiti notevoli sono forme $\dfrac{0}{0}$ calcolate una volta per tutte, a cui molti altri limiti si riconducono con il cambio di variabile.

::::teorema{#limite-notevole-seno titolo="Limite notevole del seno"}
$$
\lim_{x \to 0} \frac{\sin x}{x} = 1, \qquad
\lim_{x \to 0} \frac{1 - \cos x}{x^2} = \frac{1}{2}, \qquad
\lim_{x \to 0} \frac{\tan x}{x} = 1
$$
Il primo dice che per $x$ vicino a $0$, misurato in radianti, $\sin x$ e $x$ sono quasi uguali; nel capitolo sul calcolo differenziale dà la derivata di $\sin x$. Il secondo segue dal primo moltiplicando numeratore e denominatore per $1 + \cos x$: poiché $(1 - \cos x)(1 + \cos x) = 1 - \cos^2 x = \sin^2 x$, si ha $\dfrac{1 - \cos x}{x^2} = \left(\dfrac{\sin x}{x}\right)^2 \dfrac{1}{1 + \cos x} \to \dfrac{1}{2}$. Il terzo da $\dfrac{\tan x}{x} = \dfrac{\sin x}{x} \cdot \dfrac{1}{\cos x}$.

:::dimostrazione
L'idea: si confrontano $\sin x$, $x$ e $\tan x$ come aree di tre figure contenute l'una nell'altra, poi si applica il teorema del confronto.

::grafico{curve="cos(t),sin(t),0,1.5708" xmin=-0.2 xmax=1.4 ymin=-0.2 ymax=1.2 uguale=1 segmenti="0,0,1,0.8423;1,0,1,0.8423;0.7648,0.6442,0.7648,0;0.7648,0.6442,1,0" punti="0.7648,0.6442,pieno,P;1,0.8423,pieno,T;1,0,pieno,A" etichette="0.6,0.25,sin x;1.04,0.4,tan x;0.2,0.06,x" titolo="Per $0 < x < \dfrac{\pi}{2}$ il triangolo $OAP$ sta nel settore circolare $OAP$ di angolo $x$, che sta nel triangolo $OAT$"}

Sia $0 < x < \dfrac{\pi}{2}$ e, nella circonferenza di raggio $1$, siano $A = (1, 0)$, $P = (\cos x, \sin x)$, $T = (1, \tan x)$. Il triangolo $OAP$ ha base $OA = 1$ e altezza $\sin x$, quindi area $\dfrac{\sin x}{2}$. Il settore circolare di angolo $x$ ha area $\dfrac{x}{2}$, perché è la frazione $\dfrac{x}{2\pi}$ del cerchio, che ha area $\pi$. Il triangolo $OAT$ ha base $1$ e altezza $\tan x$, quindi area $\dfrac{\tan x}{2}$. Il primo triangolo sta nel settore e il settore nel secondo triangolo, quindi $\sin x \leq x \leq \tan x$. Dividendo per $\sin x > 0$ si ottiene $1 \leq \dfrac{x}{\sin x} \leq \dfrac{1}{\cos x}$, cioè, passando ai reciproci,
$$
\cos x \leq \frac{\sin x}{x} \leq 1 .
$$
Per $x \to 0^+$ si ha $\cos x \to 1$, quindi per il **confronto** $\dfrac{\sin x}{x} \to 1$; la funzione è **pari**, perciò lo stesso vale per $x \to 0^-$.
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
Il numero $e = 2{,}71828\ldots$ è il limite della successione $\left(1 + \dfrac{1}{n}\right)^{n}$, richiamata nel capitolo sulle serie; il primo limite estende questo fatto dalla variabile intera $n$ alla variabile reale $x$ e si *assume*. Con la sostituzione $x = \dfrac{1}{u}$ diventa
$$
\lim_{u \to 0} (1 + u)^{\frac{1}{u}} = e ,
$$
la forma che si usa per le forme $1^{\infty}$.

::grafico{f="(1+1/x)^x" xmin=0 xmax=20 ymin=0 ymax=3.2 asintoti="y=2.71828" etichette="15,2.95,y = e" legenda=0 titolo="$y = \left(1 + \dfrac{1}{x}\right)^{x}$ per $x > 0$: i valori crescono e si avvicinano a $e \approx 2{,}718$ (retta tratteggiata)"}

Gli altri tre seguono dal primo. Per le proprietà del logaritmo $\dfrac{\ln(1 + x)}{x} = \ln\left((1 + x)^{\frac{1}{x}}\right)$; per $x \to 0$ l'argomento tende a $e$ e, per la **continuità del logaritmo**, l'espressione tende a $\ln e = 1$. Per il terzo si pone $y = e^x - 1$: per $x \to 0$ si ha $y \to 0$ con $y \neq 0$, e $x = \ln(1 + y)$, quindi $\dfrac{e^x - 1}{x} = \dfrac{y}{\ln(1 + y)}$, reciproco del secondo, tende a $1$. Il quarto, per $\alpha \neq 0$, scrivendo $(1 + x)^{\alpha} = e^{\alpha \ln(1 + x)}$:
$$
\frac{(1 + x)^{\alpha} - 1}{x}
= \frac{e^{\alpha \ln(1 + x)} - 1}{\alpha \ln(1 + x)} \cdot \alpha \cdot \frac{\ln(1 + x)}{x}
\to 1 \cdot \alpha \cdot 1 ,
$$
dove il primo fattore è il terzo limite con la variabile $\alpha \ln(1 + x) \to 0$; per $\alpha = 0$ il rapporto è identicamente nullo. Nel capitolo sul calcolo differenziale il secondo e il terzo danno le derivate di $\ln x$ e di $e^x$.
:::

:::esempio
$$
\lim_{x \to 0} \frac{e^{2x} - 1}{\sin x}
= \lim_{x \to 0} \frac{e^{2x} - 1}{2x} \cdot \frac{x}{\sin x} \cdot 2
= 1 \cdot 1 \cdot 2 = 2
$$
Ogni fattore è ricondotto a un **limite notevole** con la sostituzione adatta: $2x \to 0$ nel primo, il reciproco del limite del seno nel secondo.
:::

:::esempio{titolo="Una forma 1 elevato a infinito"}
$\displaystyle\lim_{x \to 0} (1 + 2x)^{\frac{1}{x}}$: la base tende a $1$ e l'esponente all'infinito. Si scrive la potenza come esponenziale,
$$
(1 + 2x)^{\frac{1}{x}} = e^{\frac{\ln(1 + 2x)}{x}} ,
$$
e l'esponente $\dfrac{\ln(1 + 2x)}{x} = 2 \cdot \dfrac{\ln(1 + 2x)}{2x}$ tende a $2$ per il limite notevole del logaritmo con $y = 2x$. La funzione esponenziale è **continua**, quindi il limite è $e^{2}$. Per lo stesso motivo la funzione $u^{v} = e^{v \ln u}$ è continua per $u > 0$: se $u \to a > 0$ e $v \to b$, allora $u^{v} \to a^{b}$.
:::

:::attenzione
I limiti notevoli valgono quando l'argomento tende a $0$ (o all'infinito, per il limite di $e$). Il rapporto $\dfrac{\sin x}{x}$ per $x \to \pi$ *non* è un limite notevole: il numeratore tende a $0$ e il denominatore a $\pi$, quindi il limite è $0$ senza forma indeterminata.
:::

## Infinitesimi, infiniti e simboli di Landau

I limiti notevoli confrontano due funzioni che tendono a $0$: per esempio $\sin x$ e $x$ hanno rapporto che tende a $1$. I simboli seguenti danno un nome a questi confronti; sono il linguaggio della formula di Taylor e dei criteri di confronto per integrali impropri e serie.

:::definizione{#infinitesimo-infinito titolo="Infinitesimo, infinito, o-piccolo"}
$f$ è **infinitesima** per $x \to x_0$ se $f(x) \to 0$; è **infinita** se $|f(x)| \to +\infty$. Con $g(x) \neq 0$ vicino a $x_0$, si scrive $f(x) = o(g(x))$ ($f$ è **o-piccolo** di $g$) se
$$
\lim_{x \to x_0} \frac{f(x)}{g(x)} = 0 .
$$
Tra infinitesimi, $f = o(g)$ significa che $f$ tende a $0$ più rapidamente di $g$: per esempio $x^2 = o(x)$ per $x \to 0$, perché $\dfrac{x^2}{x} = x \to 0$. Tra infiniti, significa che $f$ tende all'infinito più lentamente di $g$. La scrittura $\sin x = x + o(x)$ per $x \to 0$ dice che approssimando $\sin x$ con $x$ si commette un errore $\sin x - x$ trascurabile rispetto a $x$; segue dal limite notevole del seno, perché $\dfrac{\sin x - x}{x} = \dfrac{\sin x}{x} - 1 \to 0$.
:::

:::definizione{#funzioni-asintotiche titolo="Funzioni asintotiche"}
$f(x) \sim g(x)$ per $x \to x_0$ se $\dfrac{f(x)}{g(x)} \to 1$. In un prodotto o in un quoziente una funzione si può sostituire con una **asintotica** senza cambiare il limite: se $f \sim f_1$, allora $f\,h = \dfrac{f}{f_1} \cdot f_1\,h$, e poiché il primo fattore tende a $1$, il limite di $f\,h$ coincide con quello di $f_1\,h$ (lo stesso per i quozienti). I limiti notevoli in questa forma, per $x \to 0$:
$$
\begin{gathered}
\sin x \sim x, \qquad 1 - \cos x \sim \frac{x^2}{2}, \qquad e^x - 1 \sim x, \\[6pt]
\ln(1 + x) \sim x, \qquad (1 + x)^{\alpha} - 1 \sim \alpha x .
\end{gathered}
$$
:::

:::attenzione
La sostituzione con una funzione asintotica è lecita nei prodotti e nei quozienti, *non* nelle somme e differenze. Per $x \to 0$ si ha $\sin x \sim x$, ma $\sin x - x$ non è asintotico a $x - x = 0$: il limite di $\dfrac{\sin x - x}{x^3}$ vale $-\dfrac{1}{6}$ (**formula di Taylor**), mentre la sostituzione darebbe $0$.
:::

:::teorema{#gerarchia-degli-infiniti titolo="Gerarchia degli infiniti"}
Per $\alpha > 0$, $\beta > 0$, $a > 1$:
$$
\lim_{x \to +\infty} \frac{(\ln x)^{\beta}}{x^{\alpha}} = 0, \qquad
\lim_{x \to +\infty} \frac{x^{\alpha}}{a^{x}} = 0 .
$$
Per $x \to +\infty$ i logaritmi crescono più lentamente di *ogni* potenza, le potenze più lentamente di ogni esponenziale con base maggiore di $1$. Permette di calcolare forme $\dfrac{\infty}{\infty}$ con funzioni di tipo diverso, dove il raccoglimento del grado massimo non si applica. La dimostrazione usa il teorema di de l'Hôpital e si rimanda al capitolo sul calcolo differenziale.
$$
\lim_{x \to +\infty} \frac{x^3 + \ln x}{2^{x} + x^{5}}
= \lim_{x \to +\infty} \frac{x^{3}\left(1 + \dfrac{\ln x}{x^{3}}\right)}{2^{x}\left(1 + \dfrac{x^{5}}{2^{x}}\right)}
= \lim_{x \to +\infty} \frac{x^{3}}{2^{x}} \cdot \frac{1 + 0}{1 + 0} = 0
$$
In ciascun membro si raccoglie il termine che cresce più in fretta secondo la **gerarchia**.
:::

## Asintoti

Con i limiti infiniti e i limiti all'infinito si descrive il grafico vicino ai bordi del dominio; le rette a cui il grafico si avvicina sono gli asintoti.

:::definizione{#definizione-asintoti titolo="Asintoti"}
- $x = x_0$ è **asintoto verticale** se *almeno uno* dei limiti laterali di $f$ in $x_0$ è infinito.
- $y = L$ è **asintoto orizzontale** per $x \to +\infty$ se $f(x) \to L \in \mathbb{R}$; analogamente per $x \to -\infty$.
- $y = mx + q$ con $m \neq 0$ è **asintoto obliquo** per $x \to +\infty$ se
$$
\begin{cases}
\displaystyle m = \lim_{x \to +\infty} \frac{f(x)}{x} \in \mathbb{R}, \ m \neq 0 \\[10pt]
\displaystyle q = \lim_{x \to +\infty} \bigl( f(x) - m x \bigr) \in \mathbb{R}
\end{cases}
$$
e analogamente per $x \to -\infty$.

Le formule di $m$ e $q$ vengono dalla richiesta che la distanza verticale $f(x) - (mx + q)$ tra grafico e retta tenda a $0$. Dividendo questa differenza per $x$ si ottiene $\dfrac{f(x)}{x} - m - \dfrac{q}{x} \to 0$, quindi $\dfrac{f(x)}{x} \to m$; trovato $m$, resta $f(x) - mx \to q$. Le due condizioni vanno verificate *entrambe*: se $m$ esiste finito ma $q$ è infinito oppure non esiste, l'asintoto obliquo non esiste. Gli asintoti vengono ripresi nello studio di funzione.

::grafico{f="x^2/(x-1);x+1" xmin=-5 xmax=6 ymin=-8 ymax=10 asintoti="x=1" titolo="$y = \dfrac{x^2}{x - 1}$: asintoto verticale $x = 1$ e asintoto obliquo $y = x + 1$ (tratteggiata)"}

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
quindi $y = x$ è **asintoto obliquo** da entrambe le parti; $x = 0$ è **asintoto verticale** perché $f(x) \to +\infty$ per $x \to 0^+$.

::grafico{f="(x*x+1)/x;x" xmin=-5 xmax=5 ymin=-6 ymax=6 asintoti="x=0" titolo="$y = \dfrac{x^2 + 1}{x}$ con l'asintoto verticale $x = 0$ e l'asintoto obliquo $y = x$ (tratteggiata)"}

:::

## Funzioni continue

Nei calcoli precedenti, quando non c'era una forma indeterminata, il limite coincideva con il valore della funzione nel punto. Le funzioni per cui questo accade si dicono continue.

:::definizione{#funzione-continua titolo="Funzione continua"}
Siano $f : A \to \mathbb{R}$ e $x_0 \in A$ un punto di accumulazione per $A$. La funzione $f$ è **continua** in $x_0$ se
$$
\lim_{x \to x_0} f(x) = f(x_0) ,
$$
cioè se $f(x_0)$ esiste, il limite esiste finito e i due valori coincidono. In parole: il valore in $x_0$ è proprio quello a cui si avvicinano i valori nei punti vicini, e il grafico passa per $(x_0, f(x_0))$ senza salti né buchi. $f$ è continua in $A$ se lo è in *ogni* punto. Per una funzione continua il limite si calcola per **sostituzione**, perciò il calcolo di un limite richiede lavoro *soltanto* nelle forme indeterminate. Nel capitolo sul calcolo differenziale la continuità risulta una condizione necessaria per la derivabilità.
:::

:::teorema{#continuita-funzioni-elementari titolo="Continuità delle funzioni elementari"}
Polinomi, funzioni razionali, potenze, esponenziali, logaritmi, funzioni trigonometriche e loro inverse sono **continue** in ogni punto del proprio dominio. Somma, prodotto, quoziente (con denominatore non nullo) e composizione di funzioni continue sono continue. La parte sulle operazioni segue dal teorema sui limiti di somma, prodotto e quoziente con $L = f(x_0)$ e $M = g(x_0)$; la continuità delle funzioni elementari discende dalla loro costruzione e si assume. La continuità di una funzione assegnata si riconosce dalla sua espressione: $\dfrac{e^{x} \sin x}{x^2 + 1}$ è **continua** in $\mathbb{R}$ perché quoziente di funzioni continue con denominatore mai nullo.
:::

:::definizione{#discontinuita titolo="Punti di discontinuità"}
Sia $x_0$ un punto di accumulazione per il dominio di $f$. Se $x_0$ non appartiene al dominio, oppure vi appartiene e $f$ non è continua in $x_0$, il punto è una discontinuità

- **eliminabile**, se il limite esiste finito ed è diverso da $f(x_0)$, oppure $f(x_0)$ non è definito; si toglie assegnando in $x_0$ il valore del limite;
- **di salto** (prima specie), se i limiti laterali esistono finiti e sono diversi;
- **di seconda specie**, in ogni altro caso: almeno un limite laterale è infinito oppure non esiste.

::grafico{f="(x^2-1)/(x-1)" xmin=-2 xmax=3 ymin=-1 ymax=4 punti="1,2,vuoto" titolo="$y = \dfrac{x^2 - 1}{x - 1}$ non è definita in $x = 1$ e il limite vale $2$: discontinuità eliminabile"}

:::

:::esempio
$\dfrac{\sin x}{x}$ in $0$: **eliminabile**, il limite vale $1$. La funzione segno, $\operatorname{sgn}(x) = \pm 1$ per $x \gtrless 0$, in $0$: **salto**, i limiti laterali valgono $1$ e $-1$. $\dfrac{1}{x}$ in $0$: **seconda specie**, i limiti laterali sono infiniti.

::grafico{f="x/abs(x)" xmin=-3 xmax=3 ymin=-2 ymax=2 punti="0,1,vuoto;0,-1,vuoto" titolo="$y = \operatorname{sgn}(x)$: in $0$ i limiti laterali valgono $1$ e $-1$, discontinuità di salto"}

:::

## Teoremi sulle funzioni continue

I tre teoremi seguenti garantiscono che un punto *esiste* (uno zero, un massimo, un punto in cui si assume un valore dato) senza dire come trovarlo. Valgono per $f$ continua su un intervallo chiuso e limitato $[a, b]$, e senza una delle due ipotesi le conclusioni *possono* non valere. Nel capitolo sul calcolo differenziale tornano nei teoremi di Rolle e di Lagrange e nella ricerca dei massimi e minimi assoluti.

::::teorema{#teorema-degli-zeri titolo="Teorema degli zeri"}
Il grafico di una funzione continua su un intervallo si traccia senza staccare la penna: se parte sotto l'asse $x$ e arriva sopra, lo attraversa.

Se $f$ è continua in $[a, b]$ e $f(a)\, f(b) < 0$, esiste $c \in (a, b)$ con $f(c) = 0$. La condizione $f(a)\,f(b) < 0$ dice che $f(a)$ e $f(b)$ hanno segni opposti. Il teorema garantisce una soluzione di $f(x) = 0$ *senza* risolvere l'equazione: localizza le radici di equazioni non risolubili per via algebrica, come $x = \cos x$, e conta gli zeri nello studio di funzione.
$$
x^3 + x - 1 = 0 \text{ ha una soluzione in } (0, 1): \quad f(0) = -1 < 0, \ f(1) = 1 > 0 .
$$

::grafico{f="x^3+x-1" xmin=-0.5 xmax=1.5 ymin=-2 ymax=2 punti="0,-1,pieno;1,1,pieno;0.6823,0,pieno,c" titolo="$f(x) = x^3 + x - 1$ è continua, $f(0) = -1 < 0$ e $f(1) = 1 > 0$: il grafico attraversa l'asse $x$ in un punto $c \in (0, 1)$"}

:::dimostrazione
L'idea: lo zero si costruisce come estremo superiore dell'insieme dei punti in cui $f$ è negativa. Sia $f(a) < 0 < f(b)$ (il caso opposto è analogo) e sia
$$
E = \{ x \in [a, b] : f(x) < 0 \} .
$$
$E$ contiene $a$ ed è limitato superiormente da $b$, quindi per la **completezza** di $\mathbb{R}$ esiste $c = \sup E$, con $a \leq c \leq b$. Poiché $f$ è continua in $c$, se $f(c) \neq 0$ la permanenza del segno si applica con $L = f(c)$; così si escludono i casi $f(c) < 0$ e $f(c) > 0$.

::grafico{f="(x-1)*(x-2)*(x-3)+0*sqrt(x*(4-x))" xmin=-0.6 xmax=4.6 ymin=-6.8 ymax=6.8 poligoni="0,-0.2 1,-0.2 1,0.2 0,0.2;2,-0.2 3,-0.2 3,0.2 2,0.2" punti="0,-6,pieno;4,6,pieno;3,0,pieno,c" etichette="0.35,0.7,E;2.35,0.7,E" legenda=0 titolo="$f(x) = (x - 1)(x - 2)(x - 3)$ su $[0, 4]$: l'insieme $E$ dei punti in cui $f(x) < 0$ (in colore sull'asse $x$) è $[0, 1) \cup (2, 3)$, e $c = \sup E = 3$ è uno zero di $f$"}

- Se fosse $f(c) < 0$, allora $c < b$, perché $f(b) > 0$. Per la **permanenza del segno** esiste $\delta > 0$ tale che $f(x) < 0$ per ogni $x \in [a, b]$ con $|x - c| < \delta$. Allora i punti di $[a, b]$ compresi tra $c$ e $c + \delta$ appartengono a $E$ e sono maggiori di $c$, e ciò contraddice il fatto che $c$ sia un maggiorante di $E$.
- Se fosse $f(c) > 0$, allora $c > a$, perché $f(a) < 0$. Per la permanenza del segno esiste $\delta$, con $0 < \delta < c - a$, tale che $f(x) > 0$ per $c - \delta < x \leq c$. Quindi nessun punto di $(c - \delta, c]$ sta in $E$, e nessun punto maggiore di $c$ vi appartiene perché $c$ è un maggiorante. Perciò $c - \delta$ è un maggiorante di $E$ minore di $c$, e ciò contraddice il fatto che $c$ sia il minimo dei maggioranti.

Esclusi i due casi, $f(c) = 0$. Inoltre $c \neq a$ e $c \neq b$, perché $f(a) \neq 0$ e $f(b) \neq 0$, quindi $c \in (a, b)$.
:::
::::

:::richiamo{titolo="Permanenza del segno"}
Se $f(x) \to L \neq 0$ per $x \to x_0$, in un intorno di $x_0$ la funzione ha il segno di $L$ (nei punti diversi da $x_0$).
:::

:::attenzione
Senza continuità il teorema **non si applica**: $f(x) = -1$ per $x \in [0, 1)$ e $f(x) = 1$ per $x \in [1, 2]$ cambia segno in $[0, 2]$ e non si annulla mai.

::grafico{f="(x-1)/abs(x-1)+0*sqrt(x*(2-x))" xmin=-0.5 xmax=2.5 ymin=-1.6 ymax=1.6 punti="0,-1,pieno;1,-1,vuoto;1,1,pieno;2,1,pieno" titolo="La funzione vale $-1$ in $[0, 1)$ e $1$ in $[1, 2]$: cambia segno senza annullarsi, perché non è continua in $x = 1$"}

:::

:::teorema{#teorema-di-weierstrass titolo="Teorema di Weierstrass"}
Una funzione continua su un intervallo chiuso e limitato raggiunge un valore più alto e uno più basso di tutti gli altri, eventualmente negli estremi.

Se $f$ è continua in $[a, b]$, ammette **massimo e minimo**: esistono $x_m, x_M \in [a, b]$ con $f(x_m) \leq f(x) \leq f(x_M)$ per ogni $x \in [a, b]$. Garantisce che il problema di massimo e minimo su un intervallo chiuso e limitato ha soluzione; con il calcolo differenziale si stabilisce dove cercarla. La dimostrazione, che usa il teorema di Bolzano-Weierstrass sulle successioni, non è riportata.

::grafico{f="x^3-3*x+0*sqrt((x+1.8)*(2.2-x))" xmin=-2.4 xmax=2.8 ymin=-3 ymax=5 punti="-1.8,-0.432,pieno;2.2,4.048,pieno,massimo;1,-2,pieno,minimo" segmenti="0,4.048,2.2,4.048;0,-2,1,-2" legenda=0 titolo="$f(x) = x^3 - 3x$ su $[-1{,}8;\ 2{,}2]$: il massimo si raggiunge nell'estremo destro $x_M = 2{,}2$, il minimo nel punto interno $x_m = 1$"}

- $f(x) = x$ su $(0, 1)$: continua, senza massimo né minimo, perché l'intervallo *non* è chiuso.
- $f(x) = \dfrac{1}{x}$ su $(0, 1]$: continua, senza massimo, perché l'intervallo non è chiuso in $0$ e la funzione è illimitata.
- $f(x) = x$ per $0 \leq x < 1$ e $f(1) = 0$, sull'intervallo chiuso $[0, 1]$: senza massimo, perché *non* è continua in $1$ (i valori si avvicinano a $1$ senza raggiungerlo).
:::

::::teorema{#valori-intermedi titolo="Teorema dei valori intermedi"}
Per passare da un valore a un altro, una funzione continua su un intervallo assume tutti i valori intermedi: ogni retta $y = k$ compresa tra minimo e massimo incontra il grafico.

Se $f$ è continua in $[a, b]$ con minimo $m$ e massimo $M$, per ogni $y \in [m, M]$ esiste $x \in [a, b]$ con $f(x) = y$: l'**immagine** di $[a, b]$ è l'intervallo $[m, M]$. Così si determina l'immagine di una funzione e si contano le soluzioni di $f(x) = k$. Senza continuità non vale: la funzione uguale a $-1$ in $[0, 1)$ e a $1$ in $[1, 2]$ assume i valori $-1$ e $1$ ma non il valore $0$. Non vale neppure se il dominio non è un intervallo: $\dfrac{1}{x}$ è continua sull'insieme $[-1, 1] \setminus \{0\}$, assume i valori $-1$ e $1$ e non assume il valore $0$.

::grafico{f="x^3-3*x+0*sqrt((x+1.8)*(2.2-x))" xmin=-2.4 xmax=2.8 ymin=-3 ymax=5 asintoti="y=1" poligoni="-0.07,-2 0.07,-2 0.07,4.048 -0.07,4.048" punti="-1.5321,1,pieno;-0.3473,1,pieno;1.8794,1,pieno" segmenti="0,4.048,2.2,4.048;0,-2,1,-2" etichette="2.3,1.25,y = 1" legenda=0 titolo="La stessa funzione: l'immagine di $[-1{,}8;\ 2{,}2]$ è $[m, M] = [-2;\ 4{,}048]$ (in colore sull'asse $y$), e la retta $y = 1$ incontra il grafico in tre punti"}

:::dimostrazione
Per $y = m$ o $y = M$ la tesi è il **teorema di Weierstrass**. Per $m < y < M$ si pone $g(x) = f(x) - y$, continua, con $g(x_m) = m - y < 0$ e $g(x_M) = M - y > 0$. L'intervallo di estremi $x_m$ e $x_M$ (in un ordine o nell'altro) è contenuto in $[a, b]$, e su di esso $g$ cambia segno, quindi per il **teorema degli zeri** esiste $x$ con $g(x) = 0$, cioè $f(x) = y$.
:::
::::

:::richiamo{titolo="Teorema degli zeri"}
Se $f$ è continua in $[a, b]$ e $f(a)\, f(b) < 0$, esiste $c \in (a, b)$ con $f(c) = 0$.
:::
