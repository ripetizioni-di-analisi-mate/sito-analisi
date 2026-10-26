---
titolo: Calcolo differenziale e Taylor
sommario: La derivata come limite del rapporto incrementale, le regole di calcolo, i teoremi di Fermat, Rolle e Lagrange con le loro conseguenze, il teorema di de l'Hôpital e la formula di Taylor.
---

## La derivata

:::definizione{#derivata titolo="Derivata e rapporto incrementale"}
Siano $f : A \to \mathbb{R}$ e $x_0$ un punto interno ad $A$. Il rapporto incrementale di $f$ in $x_0$ relativo all'incremento $h \neq 0$ è
$$
\frac{f(x_0 + h) - f(x_0)}{h} ,
$$
la pendenza della retta che passa per i punti $(x_0, f(x_0))$ e $(x_0 + h, f(x_0 + h))$ del grafico. $f$ è derivabile in $x_0$ se esiste finito il limite
$$
f'(x_0) = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h}
= \lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0} ;
$$
le due scritture coincidono con la sostituzione $x = x_0 + h$. Se $f$ è derivabile in ogni punto di un insieme, la funzione $x \mapsto f'(x)$ è la funzione derivata. La derivata misura la rapidità con cui $f$ varia vicino a $x_0$; con il suo segno si studiano monotonia, massimi e minimi, come mostrano i teoremi di questo capitolo.
:::

:::esempio{titolo="Derivata di x² con la definizione"}
$$
\lim_{h \to 0} \frac{(x + h)^2 - x^2}{h}
= \lim_{h \to 0} \frac{2xh + h^2}{h}
= \lim_{h \to 0} (2x + h)
= 2x
$$
Il limite esiste finito per ogni $x \in \mathbb{R}$, quindi $f(x) = x^2$ è derivabile su $\mathbb{R}$ e $f'(x) = 2x$.
:::

:::definizione{#derivate-laterali titolo="Derivate laterali"}
La derivata destra e la derivata sinistra di $f$ in $x_0$ sono i limiti laterali del rapporto incrementale:
$$
f'_{+}(x_0) = \lim_{h \to 0^{+}} \frac{f(x_0 + h) - f(x_0)}{h} , \qquad
f'_{-}(x_0) = \lim_{h \to 0^{-}} \frac{f(x_0 + h) - f(x_0)}{h} .
$$
$f$ è derivabile in $x_0$ se e solo se le due derivate laterali esistono finite e coincidono. Si usano nei punti di raccordo delle funzioni definite a tratti e nei punti in cui un valore assoluto cambia espressione.
:::

:::definizione{#retta-tangente titolo="Retta tangente al grafico"}
Se $f$ è derivabile in $x_0$, la retta tangente al grafico di $f$ nel punto $(x_0, f(x_0))$ è
$$
y = f(x_0) + f'(x_0)\,(x - x_0) .
$$
Per $h \to 0$ il punto $(x_0 + h, f(x_0 + h))$ si avvicina a $(x_0, f(x_0))$ e la retta secante per i due punti tende alla tangente; poiché la pendenza della secante è il rapporto incrementale, la pendenza della tangente è $f'(x_0)$. Questo è il significato geometrico della derivata.

::grafico{f="x*x" xmin=-2.5 xmax=2.5 ymin=-1 ymax=5 punti="1,1" titolo="y = x²: nel punto (1, 1) la retta tangente è y = 2x − 1, perché f′(1) = 2"}
:::

## Derivabilità e continuità

::::teorema{#derivabile-implica-continua titolo="Derivabile implica continua"}
Se $f$ è derivabile in $x_0$, allora $f$ è continua in $x_0$. Per questo lo studio della derivabilità comincia dalla continuità: in un punto in cui $f$ non è continua, $f$ non è derivabile.

:::dimostrazione
Per $x \neq x_0$ vale l'identità
$$
f(x) - f(x_0) = \frac{f(x) - f(x_0)}{x - x_0} \cdot (x - x_0) .
$$
Per $x \to x_0$ il primo fattore tende a $f'(x_0)$ e il secondo a $0$, quindi per il limite del prodotto $f(x) - f(x_0) \to f'(x_0) \cdot 0 = 0$, cioè $f(x) \to f(x_0)$, che è la definizione di continuità in $x_0$.
:::
::::

:::attenzione
L'implicazione non si inverte: $f(x) = |x|$ è continua in $0$ ma non è derivabile in $0$. Il rapporto incrementale $\dfrac{|h|}{h}$ vale $1$ per $h > 0$ e $-1$ per $h < 0$, quindi le derivate laterali esistono e sono diverse.
:::

:::definizione{#punti-di-non-derivabilita titolo="Punti angolosi, cuspidi, flessi a tangente verticale"}
Sia $f$ continua in $x_0$ ma non derivabile in $x_0$. Il punto si classifica con i limiti laterali del rapporto incrementale.

- Punto angoloso: le derivate laterali esistono, sono diverse e almeno una è finita. Esempio $f(x) = |x|$ in $0$, con derivate laterali $-1$ e $1$.
- Cuspide: il rapporto incrementale tende a $+\infty$ da una parte e a $-\infty$ dall'altra. Esempio $f(x) = \sqrt{|x|}$ in $0$: il rapporto vale $\dfrac{1}{\sqrt{h}}$ per $h > 0$ e $-\dfrac{1}{\sqrt{-h}}$ per $h < 0$.
- Flesso a tangente verticale: il rapporto incrementale tende a $+\infty$ oppure a $-\infty$ da entrambe le parti. Esempio $f(x) = \sqrt[3]{x}$ in $0$, dove il rapporto $\dfrac{\sqrt[3]{h}}{h} = \dfrac{1}{\sqrt[3]{h^2}}$ tende a $+\infty$; la tangente è la retta verticale $x = x_0$.

::grafico{f="abs(x)" xmin=-3 xmax=3 ymin=-0.8 ymax=3 punti="0,0" titolo="y = |x|: punto angoloso in 0"}

::grafico{f="sqrt(abs(x))" xmin=-4 xmax=4 ymin=-0.6 ymax=2.4 punti="0,0" titolo="y = √|x|: cuspide in 0"}

::grafico{f="sign(x)*abs(x)^(1/3)" xmin=-3 xmax=3 ymin=-2 ymax=2 punti="0,0" titolo="y = ∛x: flesso a tangente verticale in 0"}
:::

## Regole di derivazione

::::teorema{#regole-di-derivazione titolo="Derivata di somma, prodotto e quoziente"}
Se $f$ e $g$ sono derivabili in $x$, allora, con $c \in \mathbb{R}$:
$$
\begin{gathered}
(f + g)'(x) = f'(x) + g'(x), \qquad (c\,f)'(x) = c\, f'(x), \\[6pt]
(f\,g)'(x) = f'(x)\, g(x) + f(x)\, g'(x), \\[6pt]
\left( \frac{f}{g} \right)'(x) = \frac{f'(x)\, g(x) - f(x)\, g'(x)}{g(x)^2} \quad \text{se } g(x) \neq 0 .
\end{gathered}
$$
Con queste regole e con la tabella delle derivate elementari si deriva ogni funzione costruita con le quattro operazioni, senza tornare alla definizione.

:::dimostrazione
Per il prodotto si somma e si sottrae $f(x)\,g(x+h)$ al numeratore del rapporto incrementale:
$$
\frac{f(x+h)\,g(x+h) - f(x)\,g(x)}{h}
= \frac{f(x+h) - f(x)}{h}\; g(x+h) + f(x)\; \frac{g(x+h) - g(x)}{h} .
$$
Per $h \to 0$ il rapporto incrementale di $f$ tende a $f'(x)$ e quello di $g$ a $g'(x)$; inoltre $g$ è derivabile in $x$, quindi continua in $x$, perciò $g(x+h) \to g(x)$. Per l'algebra dei limiti l'espressione tende a $f'(x)\,g(x) + f(x)\,g'(x)$. La regola della somma si dimostra separando il rapporto incrementale nei due rapporti di $f$ e di $g$; quella del quoziente si ottiene applicando la regola del prodotto a $f \cdot \dfrac{1}{g}$, dove la derivata di $\dfrac{1}{g}$ si calcola con la regola della funzione composta.
:::
::::

:::richiamo{titolo="Derivabile implica continua"}
Se $f$ è derivabile in $x_0$, allora $f$ è continua in $x_0$.
:::

:::teorema{#derivata-della-composta titolo="Derivata della funzione composta"}
Se $g$ è derivabile in $x$ e $f$ è derivabile in $g(x)$, allora $f \circ g$ è derivabile in $x$ e
$$
(f \circ g)'(x) = f'(g(x)) \cdot g'(x) .
$$
Si deriva la funzione esterna lasciando intatto l'argomento, poi si moltiplica per la derivata dell'argomento: la derivata di $e^{x^2}$ è $e^{x^2} \cdot 2x$. Con composizioni ripetute la regola si applica a catena, dall'esterno verso l'interno.
:::

:::teorema{#derivata-dell-inversa titolo="Derivata della funzione inversa"}
Sia $f$ invertibile e derivabile in $x_0$ con $f'(x_0) \neq 0$, con inversa $f^{-1}$ continua in $y_0 = f(x_0)$. Allora $f^{-1}$ è derivabile in $y_0$ e
$$
(f^{-1})'(y_0) = \frac{1}{f'(x_0)} .
$$
Con questo teorema si derivano le inverse delle funzioni elementari. Per $f(x) = \tan x$ e $y = \tan x$ si ottiene
$$
(\arctan)'(y) = \frac{1}{1 + \tan^2 x} = \frac{1}{1 + y^2} .
$$
:::

:::teorema{#derivate-elementari titolo="Derivate delle funzioni elementari"}
$$
\begin{array}{ll|ll}
f(x) & f'(x) & f(x) & f'(x) \\
\hline
x^{\alpha} & \alpha\, x^{\alpha - 1} & \cos x & -\sin x \\[6pt]
e^{x} & e^{x} & \tan x & \dfrac{1}{\cos^2 x} = 1 + \tan^2 x \\[6pt]
a^{x} & a^{x} \ln a & \arcsin x & \dfrac{1}{\sqrt{1 - x^2}} \\[6pt]
\ln x & \dfrac{1}{x} & \arccos x & -\dfrac{1}{\sqrt{1 - x^2}} \\[6pt]
\sin x & \cos x & \arctan x & \dfrac{1}{1 + x^2}
\end{array}
$$
La derivata di una funzione costante è nulla, perché il rapporto incrementale è identicamente nullo. Ogni formula vale nei punti interni al dominio. Le derivate di esponenziale, logaritmo e seno si ottengono dalla definizione con i limiti notevoli; per esempio
$$
\frac{e^{x+h} - e^{x}}{h} = e^{x} \cdot \frac{e^{h} - 1}{h} \to e^{x} .
$$
Le derivate delle funzioni inverse seguono dal teorema precedente.
:::

## Massimi, minimi e teoremi del valore medio

:::definizione{#estremi-locali titolo="Massimo e minimo locale"}
$x_0 \in A$ è un punto di massimo locale per $f : A \to \mathbb{R}$ se esiste un intorno $U$ di $x_0$ tale che $f(x) \leq f(x_0)$ per ogni $x \in U \cap A$; è un punto di minimo locale se vale la disuguaglianza opposta. Un punto di massimo o di minimo assoluto, cioè in cui la disuguaglianza vale su tutto $A$, è anche locale. La ricerca degli estremi locali è uno degli scopi del calcolo differenziale; il teorema di Fermat dice dove cercarli.
:::

::::teorema{#teorema-di-fermat titolo="Teorema di Fermat"}
Se $x_0$ è un punto di massimo o di minimo locale per $f$, interno al dominio, e $f$ è derivabile in $x_0$, allora $f'(x_0) = 0$. I punti in cui la derivata si annulla si chiamano punti stazionari. Il teorema riduce la ricerca degli estremi su un intervallo a un elenco di candidati: i punti stazionari, i punti di non derivabilità e gli estremi dell'intervallo.

:::dimostrazione
Sia $x_0$ un punto di massimo locale; per il minimo si ragiona con le disuguaglianze opposte. Poiché $x_0$ è interno al dominio, per $|h|$ abbastanza piccolo il punto $x_0 + h$ appartiene al dominio e vale $f(x_0 + h) - f(x_0) \leq 0$. Per $h > 0$ il rapporto incrementale ha numeratore $\leq 0$ e denominatore $> 0$, quindi è $\leq 0$; poiché il limite conserva le disuguaglianze larghe, per $h \to 0^{+}$ si ottiene $f'(x_0) \leq 0$. Per $h < 0$ il rapporto ha numeratore $\leq 0$ e denominatore $< 0$, quindi è $\geq 0$, e per $h \to 0^{-}$ si ottiene $f'(x_0) \geq 0$. Dalle due disuguaglianze segue $f'(x_0) = 0$.
:::
::::

:::attenzione
La condizione $f'(x_0) = 0$ è necessaria per un estremo locale interno, non sufficiente: $f(x) = x^3$ ha derivata nulla in $0$ e in $0$ non ha né massimo né minimo locale, perché è strettamente crescente. Serve inoltre che $x_0$ sia interno: $f(x) = x$ su $[0, 1]$ ha massimo in $x = 1$ con $f'(1) = 1 \neq 0$.
:::

::::teorema{#teorema-di-rolle titolo="Teorema di Rolle"}
Sia $f$ continua in $[a, b]$, derivabile in $(a, b)$, con $f(a) = f(b)$. Allora esiste $c \in (a, b)$ tale che $f'(c) = 0$. Tra due punti del grafico alla stessa quota esiste quindi un punto a tangente orizzontale. Dal teorema di Rolle si deduce il teorema di Lagrange.

:::dimostrazione
Poiché $f$ è continua in $[a, b]$, per il teorema di Weierstrass $f$ assume su $[a, b]$ un valore massimo $M$ e un valore minimo $m$.

- Se $M = m$, la funzione è costante su $[a, b]$, quindi $f'(c) = 0$ per ogni $c \in (a, b)$.
- Se $M > m$, almeno uno dei due valori è diverso da $f(a) = f(b)$, quindi è assunto in un punto $c$ interno all'intervallo. Il punto $c$ è un estremo locale interno e $f$ è derivabile in $c$, perciò per il teorema di Fermat $f'(c) = 0$.
:::
::::

:::richiamo{titolo="Teorema di Weierstrass"}
Se $f$ è continua in $[a, b]$, allora $f$ assume massimo e minimo su $[a, b]$.
:::

::::teorema{#teorema-di-lagrange titolo="Teorema di Lagrange"}
Sia $f$ continua in $[a, b]$ e derivabile in $(a, b)$. Allora esiste $c \in (a, b)$ tale che
$$
f'(c) = \frac{f(b) - f(a)}{b - a} .
$$
Il rapporto a destra è la pendenza della retta per gli estremi del grafico: esiste un punto in cui la tangente è parallela a quella retta. Dal teorema seguono il legame tra segno della derivata e monotonia e le stime del tipo $|f(b) - f(a)| \leq K\,|b - a|$ quando $|f'| \leq K$ sull'intervallo.

:::dimostrazione
Si definisce la funzione ausiliaria
$$
g(x) = f(x) - f(a) - \frac{f(b) - f(a)}{b - a}\,(x - a) ,
$$
la differenza tra $f$ e la retta per i punti $(a, f(a))$ e $(b, f(b))$. $g$ è continua in $[a, b]$ e derivabile in $(a, b)$, perché somma di $f$ e di un polinomio di primo grado; inoltre $g(a) = 0$ e $g(b) = f(b) - f(a) - \bigl( f(b) - f(a) \bigr) = 0$. Le ipotesi del teorema di Rolle sono quindi soddisfatte ed esiste $c \in (a, b)$ con $g'(c) = 0$. Poiché
$$
g'(x) = f'(x) - \frac{f(b) - f(a)}{b - a} ,
$$
da $g'(c) = 0$ segue $f'(c) = \dfrac{f(b) - f(a)}{b - a}$.
:::
::::

:::richiamo{titolo="Teorema di Rolle"}
Se $f$ è continua in $[a, b]$, derivabile in $(a, b)$ e $f(a) = f(b)$, allora esiste $c \in (a, b)$ con $f'(c) = 0$.
:::

:::teorema{#teorema-di-cauchy titolo="Teorema di Cauchy"}
Siano $f$ e $g$ continue in $[a, b]$ e derivabili in $(a, b)$. Allora esiste $c \in (a, b)$ tale che
$$
\bigl( f(b) - f(a) \bigr)\, g'(c) = \bigl( g(b) - g(a) \bigr)\, f'(c) .
$$
Se inoltre $g'(x) \neq 0$ in $(a, b)$, allora $g(b) \neq g(a)$ per il teorema di Rolle e l'uguaglianza si scrive
$$
\frac{f'(c)}{g'(c)} = \frac{f(b) - f(a)}{g(b) - g(a)} .
$$
Per $g(x) = x$ si riottiene il teorema di Lagrange. La dimostrazione applica il teorema di Rolle alla funzione $h(x) = \bigl( f(b) - f(a) \bigr) g(x) - \bigl( g(b) - g(a) \bigr) f(x)$. Il teorema di Cauchy è il passo con cui si dimostra il teorema di de l'Hôpital.
:::

## Conseguenze del teorema di Lagrange

::::teorema{#monotonia-e-derivata titolo="Monotonia e segno della derivata"}
Sia $f$ derivabile su un intervallo $I$.

- $f'(x) \geq 0$ per ogni $x \in I$ se e solo se $f$ è crescente su $I$; analogamente, $f'(x) \leq 0$ su $I$ se e solo se $f$ è decrescente su $I$.
- Se $f'(x) > 0$ per ogni $x \in I$, allora $f$ è strettamente crescente su $I$. Questa condizione è sufficiente, non necessaria: $x^3$ è strettamente crescente su $\mathbb{R}$ e ha derivata nulla in $0$.

Lo studio del segno di $f'$ determina gli intervalli di monotonia e, con il teorema di Fermat, classifica i punti stazionari; così si costruisce lo studio di funzione.

:::dimostrazione
Sia $f'(x) \geq 0$ su $I$ e siano $x_1 < x_2$ in $I$. Per il teorema di Lagrange su $[x_1, x_2]$ esiste $c \in (x_1, x_2)$ con
$$
f(x_2) - f(x_1) = f'(c)\,(x_2 - x_1) \geq 0 ,
$$
quindi $f(x_1) \leq f(x_2)$ e $f$ è crescente su $I$; se $f' > 0$ su $I$ la disuguaglianza è stretta e la monotonia è stretta. Viceversa, sia $f$ crescente su $I$ e sia $x_0 \in I$: per ogni $x \neq x_0$ il rapporto $\dfrac{f(x) - f(x_0)}{x - x_0}$ ha numeratore e denominatore dello stesso segno, quindi è $\geq 0$, perciò anche il suo limite $f'(x_0)$ è $\geq 0$.
:::
::::

:::richiamo{titolo="Teorema di Lagrange"}
Se $f$ è continua in $[a, b]$ e derivabile in $(a, b)$, esiste $c \in (a, b)$ con $f'(c) = \dfrac{f(b) - f(a)}{b - a}$.
:::

::::teorema{#derivata-nulla-costante titolo="Derivata nulla su un intervallo"}
Se $f$ è derivabile su un intervallo $I$ e $f'(x) = 0$ per ogni $x \in I$, allora $f$ è costante su $I$. Di conseguenza due funzioni con la stessa derivata su un intervallo differiscono per una costante; su questo fatto si basa il calcolo delle primitive, trattato nel capitolo sugli integrali.

:::dimostrazione
Siano $x_1 < x_2$ due punti qualsiasi di $I$. Per il teorema di Lagrange su $[x_1, x_2]$ esiste $c \in (x_1, x_2)$ con $f(x_2) - f(x_1) = f'(c)\,(x_2 - x_1) = 0$, quindi $f(x_1) = f(x_2)$. I valori di $f$ in due punti qualsiasi coincidono, perciò $f$ è costante su $I$.
:::
::::

:::attenzione
L'ipotesi che il dominio sia un intervallo non si può togliere: $f(x) = \dfrac{|x|}{x}$ ha derivata nulla in ogni punto di $\mathbb{R} \setminus \{0\}$, vale $-1$ sui negativi e $1$ sui positivi, quindi non è costante. Il teorema si applica separatamente a ciascuno dei due intervalli $(-\infty, 0)$ e $(0, +\infty)$.
:::

:::teorema{#limite-della-derivata titolo="Limite della derivata"}
Sia $f$ continua in $x_0$ e derivabile in un intorno di $x_0$, tranne al più $x_0$. Se $f'(x) \to L \in \mathbb{R}$ per $x \to x_0$, allora $f$ è derivabile in $x_0$ e $f'(x_0) = L$; la versione con i limiti laterali dà le derivate laterali. Si dimostra applicando il teorema di Lagrange sull'intervallo di estremi $x_0$ e $x$. Con questo criterio si studia la derivabilità delle funzioni a tratti: si deriva ciascuna espressione e si calcolano i limiti laterali della derivata nei punti di raccordo. Se il limite di $f'$ non esiste, il criterio non dà informazioni e si torna al rapporto incrementale.
:::

## Il teorema di de l'Hôpital

:::teorema{#de-l-hopital titolo="Teorema di de l'Hôpital"}
Siano $x_0 \in \mathbb{R} \cup \{\pm\infty\}$ e $U$ un intorno di $x_0$. Se
$$
\begin{cases}
f \text{ e } g \text{ derivabili in } U \setminus \{x_0\}, \text{ con } g'(x) \neq 0 \text{ in } U \setminus \{x_0\} \\[4pt]
f(x) \to 0 \text{ e } g(x) \to 0 \text{ per } x \to x_0, \text{ oppure } |f(x)| \to +\infty \text{ e } |g(x)| \to +\infty \\[4pt]
\displaystyle \lim_{x \to x_0} \frac{f'(x)}{g'(x)} = L \in \mathbb{R} \cup \{\pm\infty\}
\end{cases}
$$
allora
$$
\lim_{x \to x_0} \frac{f(x)}{g(x)} = L .
$$
Lo stesso vale per i limiti laterali. Il teorema si usa sulle forme indeterminate $\dfrac{0}{0}$ e $\dfrac{\infty}{\infty}$; le forme $0 \cdot \infty$ e $\infty - \infty$ vi si riconducono con trasformazioni algebriche, le forme esponenziali $1^{\infty}$, $0^{0}$, $\infty^{0}$ con la scrittura $f(x)^{g(x)} = e^{g(x) \ln f(x)}$. La dimostrazione usa il teorema di Cauchy e si omette. Con questo teorema si dimostra la gerarchia degli infiniti enunciata nel capitolo sui limiti.
:::

:::esempio
Per $x \to +\infty$ il rapporto $\dfrac{x}{e^{x}}$ è nella forma $\dfrac{\infty}{\infty}$, con $f$ e $g$ derivabili e $g'(x) = e^{x} \neq 0$. Poiché il rapporto delle derivate soddisfa
$$
\lim_{x \to +\infty} \frac{1}{e^{x}} = 0 ,
$$
il teorema si applica e $\displaystyle\lim_{x \to +\infty} \frac{x}{e^{x}} = 0$.
:::

:::attenzione
Il teorema richiede tutte le ipotesi.

- Se il rapporto non è una forma indeterminata, la sostituzione con il rapporto delle derivate altera il risultato: $\displaystyle\lim_{x \to 0} \frac{x + 1}{x + 2} = \frac{1}{2}$, mentre il rapporto delle derivate vale $1$.
- Se il limite di $\dfrac{f'}{g'}$ non esiste, il teorema non si applica e il limite va calcolato per altra via: per $x \to +\infty$ si ha $\dfrac{x + \sin x}{x} \to 1$, mentre il rapporto delle derivate $\dfrac{1 + \cos x}{1}$ non ammette limite.
:::

## Derivate successive

:::definizione{#derivate-successive titolo="Derivate successive e classi di regolarità"}
Se la funzione derivata $f'$ è a sua volta derivabile, la sua derivata $f'' = (f')'$ è la derivata seconda di $f$; iterando si definisce la derivata $n$-esima $f^{(n)}$, con la convenzione $f^{(0)} = f$. $f$ è di classe $C^{n}$ su un intervallo se è derivabile $n$ volte e $f^{(n)}$ è continua; è di classe $C^{\infty}$ se ammette derivate di ogni ordine. Le funzioni elementari sono $C^{\infty}$ nei punti interni del proprio dominio. La derivata seconda interviene nello studio della concavità, trattato nel capitolo sullo studio di funzione; le derivate successive costruiscono il polinomio di Taylor.
:::

:::esempio
Per $f(x) = \sin x$ si ha $f'(x) = \cos x$, $f''(x) = -\sin x$, $f'''(x) = -\cos x$, $f^{(4)}(x) = \sin x$, e da qui le derivate si ripetono con periodo $4$. In $x = 0$ valgono $0, 1, 0, -1$, poi di nuovo $0, 1, 0, -1$: sono i coefficienti che compaiono nello sviluppo di McLaurin del seno.
:::

## La formula di Taylor

:::teorema{#formula-di-taylor titolo="Formula di Taylor con resto di Peano"}
Sia $f$ derivabile $n$ volte in $x_0$. Allora, per $x \to x_0$,
$$
f(x) = \sum_{k=0}^{n} \frac{f^{(k)}(x_0)}{k!}\,(x - x_0)^k + o\bigl((x - x_0)^n\bigr) .
$$
Il polinomio $T_n(x) = \displaystyle\sum_{k=0}^{n} \frac{f^{(k)}(x_0)}{k!}\,(x - x_0)^k$ è il polinomio di Taylor di ordine $n$ di $f$ centrato in $x_0$; per $x_0 = 0$ si parla di formula e di polinomio di McLaurin. Il resto $o\bigl((x - x_0)^n\bigr)$ dice che l'errore tende a $0$ più rapidamente di $(x - x_0)^n$, quindi il polinomio approssima $f$ vicino a $x_0$ a meno di un errore trascurabile rispetto all'ultima potenza scritta. Per $n = 1$ la formula diventa $f(x) = f(x_0) + f'(x_0)(x - x_0) + o(x - x_0)$, l'approssimazione con la retta tangente. Questa forma del resto serve nel calcolo dei limiti; la dimostrazione applica più volte il teorema di de l'Hôpital al rapporto tra $f(x) - T_n(x)$ e $(x - x_0)^n$ e si omette.
:::

:::teorema{#resto-di-lagrange titolo="Formula di Taylor con resto di Lagrange"}
Sia $f$ derivabile $n + 1$ volte in un intervallo $I$ e siano $x_0, x \in I$ con $x \neq x_0$. Allora esiste $c$ compreso strettamente tra $x_0$ e $x$ tale che
$$
f(x) = \sum_{k=0}^{n} \frac{f^{(k)}(x_0)}{k!}\,(x - x_0)^k + \frac{f^{(n+1)}(c)}{(n+1)!}\,(x - x_0)^{n+1} .
$$
Per $n = 0$ la formula è il teorema di Lagrange. Il punto $c$ non è noto; tuttavia, se $|f^{(n+1)}| \leq K$ su $I$, dalla formula segue la stima
$$
\bigl| f(x) - T_n(x) \bigr| \leq \frac{K}{(n+1)!}\,|x - x_0|^{n+1} ,
$$
con cui si calcolano valori approssimati di una funzione con un errore controllato.
:::

:::teorema{#sviluppi-di-mclaurin titolo="Sviluppi di McLaurin delle funzioni elementari"}
Per $x \to 0$:
$$
\begin{gathered}
e^{x} = 1 + x + \frac{x^2}{2} + \frac{x^3}{6} + \dots + \frac{x^n}{n!} + o(x^n) , \\[6pt]
\sin x = x - \frac{x^3}{6} + \frac{x^5}{120} + o(x^6) , \qquad
\cos x = 1 - \frac{x^2}{2} + \frac{x^4}{24} + o(x^5) , \\[6pt]
\ln(1 + x) = x - \frac{x^2}{2} + \frac{x^3}{3} + o(x^3) , \qquad
(1 + x)^{\alpha} = 1 + \alpha x + \frac{\alpha(\alpha - 1)}{2}\,x^2 + o(x^2) , \\[6pt]
\frac{1}{1 - x} = 1 + x + x^2 + \dots + x^n + o(x^n) , \qquad
\arctan x = x - \frac{x^3}{3} + \frac{x^5}{5} + o(x^6) .
\end{gathered}
$$
Ogni sviluppo si ottiene dalla formula di Taylor calcolando le derivate successive in $0$; i termini seguenti proseguono con lo stesso schema (per seno e arcotangente compaiono solo potenze dispari a segni alterni, per il coseno solo potenze pari). Arrestati al primo ordine utile, gli sviluppi restituiscono i limiti notevoli: $\sin x = x + o(x)$ equivale a $\dfrac{\sin x}{x} \to 1$.
:::

:::definizione{#algebra-degli-o-piccolo titolo="Algebra degli o-piccolo"}
Nei calcoli per $x \to 0$ i resti si combinano con regole fisse ($m, n$ interi positivi, $c \neq 0$):
$$
\begin{gathered}
o(x^n) + o(x^n) = o(x^n) , \qquad c \cdot o(x^n) = o(x^n) , \\[6pt]
x^m \cdot o(x^n) = o(x^{m+n}) , \qquad o(x^m) \cdot o(x^n) = o(x^{m+n}) , \\[6pt]
o(x^m) = o(x^n) \quad \text{per } m > n .
\end{gathered}
$$
Ogni uguaglianza si legge da sinistra a destra: la somma di due quantità trascurabili rispetto a $x^n$ è trascurabile rispetto a $x^n$, e così per le altre. L'ultima regola abbassa l'ordine di un resto per uniformarlo agli altri termini. Nelle funzioni composte si sostituisce lo sviluppo della funzione interna al posto della variabile dello sviluppo esterno, come mostrano le schede sugli sviluppi di funzioni composte.
:::

:::esempio{titolo="Limite con la formula di Taylor"}
$$
\lim_{x \to 0} \frac{e^{x} - 1 - x}{x^2}
= \lim_{x \to 0} \frac{\left( 1 + x + \dfrac{x^2}{2} + o(x^2) \right) - 1 - x}{x^2}
= \lim_{x \to 0} \frac{\dfrac{x^2}{2} + o(x^2)}{x^2}
= \frac{1}{2}
$$
I termini $1$ e $x$ dello sviluppo si cancellano con quelli sottratti, quindi il primo termine rimasto al numeratore è $\dfrac{x^2}{2}$; poiché $\dfrac{o(x^2)}{x^2} \to 0$, il limite vale $\dfrac{1}{2}$.
:::

:::attenzione
L'ordine dello sviluppo va scelto in modo che al numeratore resti un termine non nullo. Nel limite $\displaystyle\lim_{x \to 0} \frac{\sin x - x}{x^3}$, lo sviluppo $\sin x = x + o(x)$ lascia al numeratore solo $o(x)$, un'informazione insufficiente rispetto a $x^3$; con $\sin x = x - \dfrac{x^3}{6} + o(x^3)$ il numeratore diventa $-\dfrac{x^3}{6} + o(x^3)$ e il limite vale $-\dfrac{1}{6}$.
:::
