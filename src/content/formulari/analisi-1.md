---
titolo: "Formulario di Analisi matematica 1"
sommario: "Le formule di Analisi matematica 1 con le loro ipotesi: funzioni elementari e goniometria, numeri complessi, limiti notevoli, derivate e sviluppi di Taylor, integrali e integrali impropri, serie ed equazioni differenziali."
descrizione: "Formulario di Analisi 1 in PDF: limiti notevoli, derivate, sviluppi di McLaurin, integrali immediati, serie ed equazioni differenziali, con le ipotesi."
---

## Insiemi, induzione e binomio di Newton

Le dimostrazioni e gli esempi sono nel capitolo [Insiemi, induzione e funzioni elementari](/analisi-1/insiemi/teoria).

:::formula{#caratterizzazione-sup-inf titolo="Estremo superiore e inferiore con epsilon"}
$$
L = \sup A \iff
\begin{cases}
a \leq L \quad \text{per ogni } a \in A \\[4pt]
\text{per ogni } \varepsilon > 0 \text{ esiste } a \in A \text{ con } a > L - \varepsilon
\end{cases}
$$
$$
\ell = \inf A \iff
\begin{cases}
a \geq \ell \quad \text{per ogni } a \in A \\[4pt]
\text{per ogni } \varepsilon > 0 \text{ esiste } a \in A \text{ con } a < \ell + \varepsilon
\end{cases}
$$
Vale per $A \subseteq \mathbb{R}$ non vuoto e $L, \ell \in \mathbb{R}$. Se $A$ non è limitato superiormente si pone $\sup A = +\infty$, e questo equivale a dire che per ogni $M > 0$ esiste $a \in A$ con $a > M$. Il massimo di $A$ esiste *se e solo se* $\sup A \in A$, e in tal caso coincide con $\sup A$.
:::

:::formula{#principio-di-induzione titolo="Principio di induzione"}
$$
\begin{cases}
P(n_0) \ \text{è vera} \\[4pt]
P(n) \implies P(n+1) \quad \text{per ogni } n \geq n_0
\end{cases}
\qquad \implies \qquad P(n) \ \text{è vera per ogni } n \geq n_0
$$
La prima condizione è la base, la seconda il passo induttivo, nel quale $P(n)$ è l'ipotesi induttiva. La conclusione richiede che siano soddisfatte *entrambe* le condizioni.
:::

:::formula{#somme-notevoli titolo="Somme notevoli"}
$$
\begin{gathered}
\sum_{k=1}^{n} k = \frac{n(n+1)}{2}, \qquad
\sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}, \\[8pt]
\sum_{k=1}^{n} k^3 = \left( \frac{n(n+1)}{2} \right)^{2}, \qquad
\sum_{k=0}^{n} q^k = \frac{1 - q^{n+1}}{1 - q} \quad (q \neq 1)
\end{gathered}
$$
Le prime tre valgono per ogni $n \geq 1$, la somma geometrica per ogni $n \in \mathbb{N}$ e ogni $q \neq 1$; per $q = 1$ la somma vale $n + 1$. Si dimostrano per induzione su $n$.
:::

:::formula{#disuguaglianza-di-bernoulli titolo="Disuguaglianza di Bernoulli"}
$$
(1 + x)^n \geq 1 + nx
$$
Vale per ogni $x \geq -1$ e ogni $n \in \mathbb{N}$. Con $x = 1$ si ottiene $2^n \geq 1 + n$.
:::

:::formula{#fattoriale-binomiale titolo="Fattoriale e coefficiente binomiale"}
$$
\begin{gathered}
n! = n \cdot (n-1) \cdots 2 \cdot 1, \qquad 0! = 1, \qquad (n+1)! = (n+1) \cdot n!, \\[8pt]
\binom{n}{k} = \frac{n!}{k!\,(n-k)!} = \frac{n(n-1)\cdots(n-k+1)}{k!}
\end{gathered}
$$
Il coefficiente binomiale è definito per $n, k \in \mathbb{N}$ con $0 \leq k \leq n$ e conta i sottoinsiemi di $k$ elementi di un insieme di $n$ elementi. Nei calcoli i fattoriali si semplificano con la formula ricorsiva, per esempio $\dfrac{10!}{8!} = 10 \cdot 9 = 90$.
:::

:::formula{#proprieta-coefficienti-binomiali titolo="Proprietà dei coefficienti binomiali"}
$$
\begin{gathered}
\binom{n}{0} = \binom{n}{n} = 1, \qquad \binom{n}{k} = \binom{n}{n-k}, \\[8pt]
\binom{n}{k} + \binom{n}{k+1} = \binom{n+1}{k+1} \quad (0 \leq k \leq n-1), \\[8pt]
\sum_{k=0}^{n} \binom{n}{k} = 2^n, \qquad \sum_{k=0}^{n} (-1)^k \binom{n}{k} = 0 \quad (n \geq 1)
\end{gathered}
$$
La seconda riga è la formula di Stifel, che genera il triangolo di Tartaglia. Le due somme della terza riga seguono dal binomio di Newton con $a = b = 1$ e con $a = 1$, $b = -1$.
:::

:::formula{#binomio-di-newton titolo="Binomio di Newton"}
$$
\begin{gathered}
(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^{k}
= a^n + n\,a^{n-1} b + \binom{n}{2} a^{n-2} b^2 + \cdots + b^n, \\[8pt]
(a+b)^2 = a^2 + 2ab + b^2, \qquad (a+b)^3 = a^3 + 3a^2 b + 3ab^2 + b^3
\end{gathered}
$$
Vale per ogni $a, b \in \mathbb{R}$ e ogni $n \in \mathbb{N}$. Il termine dello sviluppo che contiene $b^k$ è $\dbinom{n}{k} a^{n-k} b^k$.
:::

## Funzioni elementari e dominio naturale

Le proprietà delle funzioni elementari e le regole sul dominio si trovano nel capitolo [Insiemi, induzione e funzioni elementari](/analisi-1/insiemi/teoria).

:::formula{#proprieta-delle-potenze titolo="Proprietà delle potenze"}
$$
\begin{gathered}
a^{x}\,a^{y} = a^{x+y}, \qquad \frac{a^{x}}{a^{y}} = a^{x-y}, \qquad (a^{x})^{y} = a^{xy}, \\[8pt]
(ab)^{x} = a^{x}\,b^{x}, \qquad a^{-x} = \frac{1}{a^{x}}, \qquad a^{0} = 1, \qquad a^{\frac{m}{n}} = \sqrt[n]{a^{m}}
\end{gathered}
$$
Valgono per $a, b > 0$ e $x, y \in \mathbb{R}$; nell'ultima $m \in \mathbb{Z}$ e $n \geq 1$. Con esponenti interi le stesse regole valgono anche per basi negative; una base nulla richiede esponenti positivi.
:::

:::formula{#radici-e-valore-assoluto titolo="Radici e valore assoluto"}
$$
\begin{gathered}
\sqrt{x^2} = |x|, \qquad \left( \sqrt{x} \right)^2 = x \ \ (x \geq 0), \qquad \sqrt{a\,b} = \sqrt{a}\,\sqrt{b} \ \ (a, b \geq 0), \\[8pt]
\sqrt[n]{x^n} = |x| \ \ (n \text{ pari}), \qquad \sqrt[n]{x^n} = x \ \ (n \text{ dispari})
\end{gathered}
$$
La prima vale per ogni $x \in \mathbb{R}$; per $x = -3$ si ha $\sqrt{9} = 3 = |-3|$. Le radici di indice dispari sono definite su tutto $\mathbb{R}$, quelle di indice pari su $[0, +\infty)$.
:::

:::formula{#valore-assoluto titolo="Valore assoluto e disequazioni"}
$$
|x| =
\begin{cases}
x & \text{se } x \geq 0 \\[2pt]
-x & \text{se } x < 0
\end{cases}
\qquad
|xy| = |x|\,|y|, \qquad |x + y| \leq |x| + |y|
$$
$$
\begin{gathered}
|f(x)| < a \iff -a < f(x) < a, \\[6pt]
|f(x)| > a \iff f(x) < -a \ \ \text{oppure} \ \ f(x) > a
\end{gathered}
$$
Le due equivalenze valgono per $a > 0$. Per $a < 0$ la prima disequazione non ha soluzioni e la seconda è soddisfatta in ogni punto del dominio di $f$.
:::

:::formula{#logaritmo titolo="Logaritmo e sue proprietà"}
$$
\begin{gathered}
y = \log_a x \iff a^{y} = x, \qquad a^{\log_a x} = x, \qquad \log_a a^{x} = x, \\[8pt]
\log_a (xy) = \log_a x + \log_a y, \qquad \log_a \frac{x}{y} = \log_a x - \log_a y, \\[8pt]
\log_a x^{\alpha} = \alpha \log_a x, \qquad \log_a 1 = 0, \qquad \log_a a = 1
\end{gathered}
$$
Valgono per $a > 0$, $a \neq 1$, $x, y > 0$ e $\alpha \in \mathbb{R}$; nell'identità $\log_a a^x = x$ la variabile $x$ è un numero reale qualunque. Il logaritmo in base $e$ si indica con $\ln x$.
:::

:::formula{#cambio-di-base titolo="Cambio di base ed esponenziale in base e"}
$$
\log_a x = \frac{\log_b x}{\log_b a} = \frac{\ln x}{\ln a}, \qquad
a^{x} = e^{x \ln a}, \qquad
f(x)^{g(x)} = e^{\,g(x) \ln f(x)}
$$
Il cambio di base vale per $a, b > 0$, $a \neq 1$, $b \neq 1$ e $x > 0$. La scrittura di $f(x)^{g(x)}$ come esponenziale richiede $f(x) > 0$ e si usa nei limiti e nelle derivate delle potenze con base ed esponente variabili.
:::

:::attenzione
Il logaritmo di una somma è diverso dalla somma dei logaritmi. Per esempio $\ln(1 + 1) = \ln 2$, mentre $\ln 1 + \ln 1 = 0$. Inoltre l'uguaglianza $\log_a x^2 = 2 \log_a x$ richiede $x > 0$; per $x \neq 0$ si scrive $\log_a x^2 = 2 \log_a |x|$, perché con $x = -2$ si ha $\log_2 4 = 2$ e $\log_2(-2)$ non è definito.
:::

:::formula{#equazioni-esponenziali titolo="Equazioni e disequazioni esponenziali"}
$$
\begin{gathered}
a^{x} = b \iff x = \log_a b \quad (b > 0), \\[8pt]
a^{f(x)} > a^{g(x)} \iff f(x) > g(x) \quad (a > 1), \\[6pt]
a^{f(x)} > a^{g(x)} \iff f(x) < g(x) \quad (0 < a < 1)
\end{gathered}
$$
Valgono per $a > 0$, $a \neq 1$. Per $b \leq 0$ l'equazione $a^x = b$ non ha soluzioni, perché l'esponenziale assume solo valori positivi. Le equivalenze tra disequazioni seguono dalla stretta monotonia dell'esponenziale.
:::

:::formula{#disequazioni-logaritmiche titolo="Disequazioni logaritmiche"}
$$
a > 1: \quad \log_a f(x) > \log_a g(x) \iff
\begin{cases}
f(x) > g(x) \\[2pt]
g(x) > 0
\end{cases}
$$
$$
0 < a < 1: \quad \log_a f(x) > \log_a g(x) \iff
\begin{cases}
f(x) < g(x) \\[2pt]
f(x) > 0
\end{cases}
$$
Il sistema contiene la condizione di esistenza dell'argomento minore, e l'altra condizione di esistenza segue dalle due del sistema. Con un numero $c$ al secondo membro si scrive $c = \log_a a^{c}$, quindi per $a > 1$ la disequazione $\log_a f(x) > c$ equivale a $f(x) > a^{c}$.
:::

:::formula{#dominio-naturale titolo="Condizioni per il dominio naturale"}
$$
\begin{array}{ll}
\dfrac{N(x)}{D(x)} & D(x) \neq 0 \\[12pt]
\sqrt[n]{g(x)}, \ n \text{ pari} & g(x) \geq 0 \\[6pt]
\log_a g(x) & g(x) > 0 \\[6pt]
\tan g(x) & g(x) \neq \dfrac{\pi}{2} + k\pi, \ k \in \mathbb{Z} \\[12pt]
\arcsin g(x), \ \arccos g(x) & -1 \leq g(x) \leq 1 \\[6pt]
f(x)^{g(x)} & f(x) > 0
\end{array}
$$
Le condizioni relative alle diverse operazioni di un'espressione devono valere nello stesso punto, perciò si raccolgono in un sistema; il dominio naturale è l'insieme delle soluzioni del sistema. Le radici di indice dispari, gli esponenziali, $\sin$, $\cos$ e $\arctan$ non pongono condizioni sull'argomento.
:::

:::formula{#simmetrie-e-periodicita titolo="Simmetrie e periodicità"}
$$
\begin{gathered}
f(-x) = f(x) \ \ \text{(pari)}, \qquad f(-x) = -f(x) \ \ \text{(dispari)}, \\[6pt]
f(x + T) = f(x) \ \ \text{(periodica di periodo } T\text{)}, \\[8pt]
\sin(\omega x), \ \cos(\omega x) \ \text{hanno periodo} \ \frac{2\pi}{|\omega|}, \qquad \tan(\omega x) \ \text{ha periodo} \ \frac{\pi}{|\omega|}
\end{gathered}
$$
Pari e dispari richiedono un dominio simmetrico rispetto all'origine; il grafico di una funzione pari è simmetrico rispetto all'asse $y$, quello di una funzione dispari rispetto all'origine. I periodi della seconda riga sono i periodi minimi e valgono per $\omega \neq 0$.
:::

:::formula{#trasformazioni-del-grafico titolo="Trasformazioni del grafico"}
$$
\begin{array}{ll}
f(x) + k & \text{traslazione verticale di } k \\[4pt]
f(x - k) & \text{traslazione orizzontale di } k \\[4pt]
a\,f(x) & \text{dilatazione verticale di fattore } a \\[4pt]
f(ax) & \text{compressione orizzontale di fattore } a \\[4pt]
-f(x), \ \ f(-x) & \text{simmetria rispetto all'asse } x, \text{ rispetto all'asse } y \\[4pt]
|f(x)| & \text{la parte con } f(x) < 0 \text{ si riflette rispetto all'asse } x \\[4pt]
f(|x|) & \text{la parte con } x \geq 0 \text{ si conserva e si riflette rispetto all'asse } y
\end{array}
$$
Le traslazioni sono verso l'alto e verso destra per $k > 0$, verso il basso e verso sinistra per $k < 0$. Dilatazione e compressione sono riferite ad $a > 1$; per $0 < a < 1$ i due effetti si scambiano.
:::

## Formule goniometriche

Le definizioni delle funzioni trigonometriche e le identità principali sono nel capitolo [Insiemi, induzione e funzioni elementari](/analisi-1/insiemi/teoria).

:::formula{#valori-notevoli titolo="Valori notevoli di seno, coseno e tangente"}
$$
\begin{array}{c|cccccc}
x & 0 & \dfrac{\pi}{6} & \dfrac{\pi}{4} & \dfrac{\pi}{3} & \dfrac{\pi}{2} & \pi \\[8pt]
\hline
\sin x & 0 & \dfrac{1}{2} & \dfrac{\sqrt{2}}{2} & \dfrac{\sqrt{3}}{2} & 1 & 0 \\[10pt]
\cos x & 1 & \dfrac{\sqrt{3}}{2} & \dfrac{\sqrt{2}}{2} & \dfrac{1}{2} & 0 & -1 \\[10pt]
\tan x & 0 & \dfrac{\sqrt{3}}{3} & 1 & \sqrt{3} & \text{n.d.} & 0
\end{array}
$$
Gli angoli sono misurati in radianti, e l'angolo di $180^\circ$ corrisponde a $\pi$. I valori negli altri quadranti si ricavano con le formule degli archi associati.
:::

:::formula{#identita-pitagorica titolo="Identità pitagorica e tangente"}
$$
\sin^2 x + \cos^2 x = 1, \qquad
\tan x = \frac{\sin x}{\cos x}, \qquad
1 + \tan^2 x = \frac{1}{\cos^2 x}
$$
La prima vale per ogni $x \in \mathbb{R}$, le altre due per $x \neq \dfrac{\pi}{2} + k\pi$ con $k \in \mathbb{Z}$. Seno e coseno hanno valori in $[-1, 1]$ e periodo $2\pi$; la tangente ha periodo $\pi$.
:::

:::formula{#archi-associati titolo="Archi associati"}
$$
\begin{gathered}
\sin(-x) = -\sin x, \qquad \cos(-x) = \cos x, \qquad \tan(-x) = -\tan x, \\[6pt]
\sin(\pi - x) = \sin x, \qquad \cos(\pi - x) = -\cos x, \\[6pt]
\sin(\pi + x) = -\sin x, \qquad \cos(\pi + x) = -\cos x, \\[6pt]
\sin\left( \frac{\pi}{2} - x \right) = \cos x, \qquad \cos\left( \frac{\pi}{2} - x \right) = \sin x
\end{gathered}
$$
Valgono per ogni $x \in \mathbb{R}$, e per la tangente in ogni punto in cui è definita. Seno e tangente sono funzioni dispari, il coseno è una funzione pari.
:::

:::formula{#formule-di-addizione titolo="Formule di addizione e sottrazione"}
$$
\begin{gathered}
\sin(x \pm y) = \sin x \cos y \pm \cos x \sin y, \\[6pt]
\cos(x \pm y) = \cos x \cos y \mp \sin x \sin y, \\[6pt]
\tan(x \pm y) = \frac{\tan x \pm \tan y}{1 \mp \tan x \tan y}
\end{gathered}
$$
Le prime due valgono per ogni $x, y \in \mathbb{R}$, la terza quando $\tan x$, $\tan y$ e $\tan(x \pm y)$ sono definite.
:::

:::formula{#duplicazione-e-linearizzazione titolo="Duplicazione e linearizzazione"}
$$
\begin{gathered}
\sin 2x = 2 \sin x \cos x, \qquad
\cos 2x = \cos^2 x - \sin^2 x = 2\cos^2 x - 1 = 1 - 2\sin^2 x, \\[8pt]
\sin^2 x = \frac{1 - \cos 2x}{2}, \qquad \cos^2 x = \frac{1 + \cos 2x}{2}, \qquad
\tan 2x = \frac{2 \tan x}{1 - \tan^2 x}
\end{gathered}
$$
Valgono per ogni $x \in \mathbb{R}$, l'ultima quando $\tan x$ e $\tan 2x$ sono definite. Le formule di linearizzazione, $\sin^2 x$ e $\cos^2 x$ espressi con $\cos 2x$, abbassano il grado e si usano negli integrali.
:::

:::formula{#formule-parametriche titolo="Formule parametriche"}
$$
t = \tan \frac{x}{2}: \qquad
\sin x = \frac{2t}{1 + t^2}, \qquad
\cos x = \frac{1 - t^2}{1 + t^2}, \qquad
\tan x = \frac{2t}{1 - t^2}
$$
Valgono per $x \neq \pi + 2k\pi$ con $k \in \mathbb{Z}$; la terza richiede anche $t^2 \neq 1$, cioè $x \neq \dfrac{\pi}{2} + k\pi$. Trasformano un'espressione razionale in $\sin x$ e $\cos x$ in un'espressione razionale in $t$.
:::

:::formula{#combinazione-di-seno-e-coseno titolo="Combinazione lineare di seno e coseno"}
$$
a \sin x + b \cos x = R \sin(x + \varphi), \qquad
R = \sqrt{a^2 + b^2}, \quad \cos\varphi = \frac{a}{R}, \quad \sin\varphi = \frac{b}{R}
$$
Vale per $a, b \in \mathbb{R}$ non entrambi nulli. Riduce un'equazione lineare in seno e coseno, come $\sin x + \cos x = 1$, a un'equazione elementare; in questo caso $\sin x + \cos x = \sqrt{2} \sin\left( x + \dfrac{\pi}{4} \right)$.
:::

:::formula{#equazioni-goniometriche titolo="Equazioni goniometriche elementari"}
$$
\begin{gathered}
\sin x = m \iff x = \arcsin m + 2k\pi \ \ \text{oppure} \ \ x = \pi - \arcsin m + 2k\pi, \\[6pt]
\cos x = m \iff x = \pm \arccos m + 2k\pi, \qquad
\tan x = m \iff x = \arctan m + k\pi
\end{gathered}
$$
Le prime due hanno soluzioni *solo* per $-1 \leq m \leq 1$, la terza per ogni $m \in \mathbb{R}$; in tutte $k \in \mathbb{Z}$. Le disequazioni si risolvono sulla circonferenza unitaria in un intervallo di ampiezza uguale al periodo e si estendono per periodicità.
:::

:::formula{#funzioni-goniometriche-inverse titolo="Arcoseno, arcocoseno e arcotangente"}
$$
\begin{gathered}
\arcsin : [-1, 1] \to \left[ -\frac{\pi}{2}, \frac{\pi}{2} \right], \qquad
\arccos : [-1, 1] \to [0, \pi], \qquad
\arctan : \mathbb{R} \to \left( -\frac{\pi}{2}, \frac{\pi}{2} \right), \\[8pt]
\arcsin x + \arccos x = \frac{\pi}{2}, \qquad
\arctan x + \arctan \frac{1}{x} = \pm \frac{\pi}{2}
\end{gathered}
$$
La prima identità vale per $x \in [-1, 1]$; nella seconda il segno è $+$ per $x > 0$ e $-$ per $x < 0$. Inoltre $\sin(\arcsin x) = x$ per ogni $x \in [-1, 1]$, mentre $\arcsin(\sin x) = x$ vale *solo* per $x \in \left[ -\dfrac{\pi}{2}, \dfrac{\pi}{2} \right]$.
:::

:::formula{#funzioni-iperboliche titolo="Funzioni iperboliche"}
$$
\sinh x = \frac{e^{x} - e^{-x}}{2}, \qquad
\cosh x = \frac{e^{x} + e^{-x}}{2}, \qquad
\cosh^2 x - \sinh^2 x = 1
$$
Sono definite su $\mathbb{R}$. La funzione $\sinh x$ è dispari con immagine $\mathbb{R}$, la funzione $\cosh x$ è pari con immagine $[1, +\infty)$. L'inversa del seno iperbolico è $\ln\left( x + \sqrt{x^2 + 1} \right)$.
:::

## Numeri complessi

Il capitolo [Numeri complessi](/analisi-1/numeri-complessi/teoria) contiene le dimostrazioni e gli esempi.

:::formula{#operazioni-in-forma-algebrica titolo="Operazioni in forma algebrica"}
$$
\begin{gathered}
z = a + ib, \qquad i^2 = -1, \qquad \operatorname{Re}(z) = a, \qquad \operatorname{Im}(z) = b, \\[6pt]
(a + ib)(c + id) = (ac - bd) + i(ad + bc), \\[6pt]
\frac{a + ib}{c + id} = \frac{(a + ib)(c - id)}{c^2 + d^2} = \frac{ac + bd}{c^2 + d^2} + i\,\frac{bc - ad}{c^2 + d^2}
\end{gathered}
$$
Valgono per $a, b, c, d \in \mathbb{R}$, e il quoziente per $c + id \neq 0$. Le potenze di $i$ si ripetono con periodo $4$, dato che $i^2 = -1$, $i^3 = -i$, $i^4 = 1$; quindi $i^n = i^r$, dove $r$ è il resto della divisione di $n$ per $4$.
:::

:::formula{#coniugato-e-modulo titolo="Coniugato e modulo"}
$$
\begin{gathered}
\bar{z} = a - ib, \qquad |z| = \sqrt{a^2 + b^2}, \qquad z\,\bar{z} = |z|^2, \qquad \frac{1}{z} = \frac{\bar{z}}{|z|^2}, \\[6pt]
z + \bar{z} = 2\operatorname{Re}(z), \qquad z - \bar{z} = 2i\operatorname{Im}(z), \qquad
\overline{z + w} = \bar{z} + \bar{w}, \qquad \overline{zw} = \bar{z}\,\bar{w}, \\[6pt]
|zw| = |z|\,|w|, \qquad \left| \frac{z}{w} \right| = \frac{|z|}{|w|}, \qquad |z + w| \leq |z| + |w|
\end{gathered}
$$
Valgono per $z = a + ib$ e $w$ complessi qualunque, con $z \neq 0$ nella formula del reciproco e $w \neq 0$ nel quoziente. Il numero $z$ è reale *se e solo se* $z = \bar{z}$.
:::

:::formula{#forma-trigonometrica titolo="Forma trigonometrica e argomento principale"}
$$
z = \rho\,(\cos\theta + i \sin\theta), \qquad \rho = |z|, \qquad \cos\theta = \frac{a}{\rho}, \quad \sin\theta = \frac{b}{\rho}
$$
$$
\theta =
\begin{cases}
\arctan \dfrac{b}{a} & \text{se } a > 0 \\[10pt]
\arctan \dfrac{b}{a} + \pi & \text{se } a < 0, \ b \geq 0 \\[10pt]
\arctan \dfrac{b}{a} - \pi & \text{se } a < 0, \ b < 0 \\[10pt]
\dfrac{\pi}{2} & \text{se } a = 0, \ b > 0 \\[10pt]
-\dfrac{\pi}{2} & \text{se } a = 0, \ b < 0
\end{cases}
$$
Vale per $z = a + ib \neq 0$. La formula dà l'argomento principale $\theta \in (-\pi, \pi]$, e ogni altro argomento differisce da $\theta$ per un multiplo intero di $2\pi$.
:::

:::formula{#formula-di-eulero titolo="Formula di Eulero e forma esponenziale"}
$$
\begin{gathered}
e^{i\theta} = \cos\theta + i \sin\theta, \qquad z = \rho\, e^{i\theta}, \qquad \bar{z} = \rho\, e^{-i\theta}, \\[6pt]
\cos\theta = \frac{e^{i\theta} + e^{-i\theta}}{2}, \qquad \sin\theta = \frac{e^{i\theta} - e^{-i\theta}}{2i}
\end{gathered}
$$
Valgono per $\theta \in \mathbb{R}$ e $\rho = |z| > 0$. Le esponenziali $e^{i\theta}$ ed $e^{i\varphi}$ coincidono *se e solo se* $\theta - \varphi$ è un multiplo intero di $2\pi$. Valori di uso frequente sono $e^{i\pi} = -1$ ed $e^{i\frac{\pi}{2}} = i$.
:::

:::formula{#prodotto-e-de-moivre titolo="Prodotto, quoziente e formula di De Moivre"}
$$
\begin{gathered}
z\,w = \rho\sigma\, e^{i(\theta + \varphi)}, \qquad \frac{z}{w} = \frac{\rho}{\sigma}\, e^{i(\theta - \varphi)}, \\[6pt]
z^n = \rho^n e^{in\theta} = \rho^n \bigl( \cos(n\theta) + i \sin(n\theta) \bigr)
\end{gathered}
$$
Valgono per $z = \rho e^{i\theta}$ e $w = \sigma e^{i\varphi}$ con $\rho, \sigma > 0$, e per ogni intero $n \geq 1$. Nel prodotto i moduli si moltiplicano e gli argomenti si sommano.
:::

:::formula{#radici-n-esime titolo="Radici n-esime"}
$$
z^n = w \iff z = z_k = \sqrt[n]{\sigma}\; e^{\,i\frac{\varphi + 2k\pi}{n}}, \qquad k = 0, 1, \dots, n - 1
$$
Vale per $w = \sigma e^{i\varphi} \neq 0$ e $n \geq 1$ intero. Le soluzioni sono *esattamente* $n$, hanno modulo $\sqrt[n]{\sigma}$ e sono i vertici di un poligono regolare di $n$ lati con centro nell'origine. Le radici $n$-esime dell'unità sono $e^{\,i\frac{2k\pi}{n}}$; per $n = 4$ sono $1$, $i$, $-1$, $-i$.
:::

:::formula{#equazioni-di-secondo-grado titolo="Equazioni di secondo grado in campo complesso"}
$$
a z^2 + b z + c = 0, \qquad \Delta = b^2 - 4ac < 0, \qquad z = \frac{-b \pm i\sqrt{-\Delta}}{2a}
$$
Vale per $a, b, c \in \mathbb{R}$ con $a \neq 0$, e le due soluzioni sono complesse coniugate. Con coefficienti complessi le soluzioni sono $z = \dfrac{-b \pm \delta}{2a}$, dove $\delta$ è una qualunque delle due radici quadrate complesse di $\Delta$.
:::

:::formula{#equazioni-con-coniugato-e-modulo titolo="Equazioni con coniugato e modulo"}
$$
z = x + iy, \qquad \bar{z} = x - iy, \qquad |z| = \sqrt{x^2 + y^2}, \qquad
A = B \iff
\begin{cases}
\operatorname{Re}(A) = \operatorname{Re}(B) \\[2pt]
\operatorname{Im}(A) = \operatorname{Im}(B)
\end{cases}
$$
Si usa per le equazioni in cui compaiono $\bar{z}$, $|z|$, $\operatorname{Re}(z)$ o $\operatorname{Im}(z)$. Posto $z = x + iy$ con $x, y \in \mathbb{R}$, l'uguaglianza dei due membri $A$ e $B$ equivale al sistema di due equazioni reali nelle incognite $x$ e $y$.
:::

:::formula{#luoghi-geometrici titolo="Luoghi geometrici nel piano di Gauss"}
$$
\begin{gathered}
|z - z_0| = r \ \ \text{circonferenza di centro } z_0 \text{ e raggio } r, \\[6pt]
|z - z_0| \leq r \ \ \text{cerchio di centro } z_0 \text{ e raggio } r, \\[6pt]
|z - z_1| = |z - z_2| \ \ \text{asse del segmento di estremi } z_1, z_2, \\[6pt]
\operatorname{Re}(z) = k \ \ \text{retta } x = k, \qquad \operatorname{Im}(z) = k \ \ \text{retta } y = k
\end{gathered}
$$
Valgono per $r > 0$, $z_1 \neq z_2$ e $k \in \mathbb{R}$. Il numero $|z - w|$ è la distanza tra i punti $z$ e $w$.
:::

:::formula{#fattorizzazione-dei-polinomi titolo="Teorema fondamentale dell'algebra e fattorizzazione reale"}
$$
\begin{gathered}
p(z) = a_n (z - z_1)(z - z_2) \cdots (z - z_n), \\[6pt]
(z - z_0)(z - \bar{z}_0) = z^2 - 2\alpha z + \alpha^2 + \beta^2 \quad (z_0 = \alpha + i\beta)
\end{gathered}
$$
Ogni polinomio di grado $n \geq 1$ a coefficienti complessi ha $n$ radici $z_1, \dots, z_n$, contate con molteplicità. Se i coefficienti sono reali, le radici non reali compaiono a coppie coniugate con la stessa molteplicità, e il prodotto dei due fattori coniugati è un trinomio reale con discriminante $-4\beta^2 < 0$.
:::

## Limiti, forme indeterminate e continuità

Le definizioni e i teoremi sono nel capitolo [Limiti e continuità](/analisi-1/limiti/teoria).

:::formula{#operazioni-con-gli-infiniti titolo="Operazioni con i limiti infiniti"}
$$
\begin{gathered}
L + (\pm\infty) = \pm\infty, \qquad (+\infty) + (+\infty) = +\infty, \qquad (-\infty) + (-\infty) = -\infty, \\[6pt]
L \cdot (\pm\infty) = \pm\infty \ \ (L > 0), \qquad L \cdot (\pm\infty) = \mp\infty \ \ (L < 0), \qquad (+\infty) \cdot (\pm\infty) = \pm\infty, \\[6pt]
\frac{L}{\pm\infty} = 0, \qquad \frac{L}{0^{+}} = +\infty \ \ (L > 0), \qquad \frac{L}{0^{-}} = -\infty \ \ (L > 0)
\end{gathered}
$$
Qui $L \in \mathbb{R}$ è il limite di uno dei due termini, e $0^{+}$, $0^{-}$ indicano una funzione che tende a $0$ restando positiva o negativa; per $L < 0$ i segni delle ultime due si scambiano. Se $f \to L$ e $g \to M$ con $L, M \in \mathbb{R}$, i limiti di somma, prodotto e quoziente si calcolano con le operazioni su $L$ e $M$, con $M \neq 0$ nel quoziente.
:::

:::formula{#forme-indeterminate titolo="Forme indeterminate"}
$$
+\infty - \infty, \qquad 0 \cdot \infty, \qquad \frac{0}{0}, \qquad \frac{\infty}{\infty}, \qquad 1^{\infty}, \qquad 0^{0}, \qquad \infty^{0}
$$
In questi casi il limite dipende dalle funzioni e non soltanto dai limiti delle parti. Le ultime tre si riconducono a $0 \cdot \infty$ con $f(x)^{g(x)} = e^{\,g(x) \ln f(x)}$, valida per $f(x) > 0$. Il rapporto $\dfrac{L}{0}$ con $L \neq 0$ dà un limite infinito, con il segno determinato dal segno di $L$ e da quello del denominatore.
:::

:::formula{#limiti-delle-funzioni-elementari titolo="Limiti delle funzioni elementari"}
$$
\begin{gathered}
\lim_{x \to +\infty} e^{x} = +\infty, \qquad \lim_{x \to -\infty} e^{x} = 0, \qquad
\lim_{x \to 0^{+}} \ln x = -\infty, \qquad \lim_{x \to +\infty} \ln x = +\infty, \\[6pt]
\lim_{x \to +\infty} x^{\alpha} = +\infty \ \ (\alpha > 0), \qquad \lim_{x \to +\infty} x^{\alpha} = 0 \ \ (\alpha < 0), \qquad
\lim_{x \to \pm\infty} \arctan x = \pm\frac{\pi}{2}, \\[6pt]
\lim_{x \to +\infty} a^{x} = +\infty \ \ (a > 1), \qquad \lim_{x \to +\infty} a^{x} = 0 \ \ (0 < a < 1), \qquad
\lim_{x \to 0^{\pm}} \frac{1}{x} = \pm\infty
\end{gathered}
$$
Per $x \to -\infty$ si ha $a^x \to 0$ se $a > 1$ e $a^x \to +\infty$ se $0 < a < 1$. Ogni funzione elementare è continua nel proprio dominio, quindi in un punto del dominio il limite è il valore della funzione.
:::

:::formula{#rapporti-di-polinomi titolo="Polinomi e rapporti di polinomi all'infinito"}
$$
\lim_{x \to \pm\infty} \frac{a_n x^n + \cdots + a_0}{b_m x^m + \cdots + b_0}
= \lim_{x \to \pm\infty} \frac{a_n x^n}{b_m x^m}
=
\begin{cases}
\dfrac{a_n}{b_m} & \text{se } n = m \\[10pt]
0 & \text{se } n < m \\[4pt]
\pm\infty & \text{se } n > m
\end{cases}
$$
Vale per $a_n \neq 0$ e $b_m \neq 0$, perché per $x \to \pm\infty$ un polinomio è asintotico al suo termine di grado massimo. Per $n > m$ il segno dell'infinito è il segno di $\dfrac{a_n}{b_m}\, x^{\,n-m}$.
:::

:::formula{#scomposizioni-e-ruffini titolo="Scomposizioni e teorema di Ruffini"}
$$
\begin{gathered}
a^2 - b^2 = (a - b)(a + b), \qquad
a^3 \mp b^3 = (a \mp b)(a^2 \pm ab + b^2), \\[6pt]
a^n - b^n = (a - b)\left( a^{n-1} + a^{n-2} b + \cdots + a b^{n-2} + b^{n-1} \right), \\[6pt]
a x^2 + b x + c = a\,(x - x_1)(x - x_2)
\end{gathered}
$$
L'ultima vale per $a \neq 0$ e $\Delta = b^2 - 4ac \geq 0$, con $x_1$ e $x_2$ radici del trinomio, coincidenti se $\Delta = 0$. Per il **teorema di Ruffini**, se $P(x_0) = 0$ il polinomio $P(x)$ è divisibile per $x - x_0$; nei limiti $\dfrac{0}{0}$ di rapporti di polinomi per $x \to x_0$ si raccoglie e si semplifica il fattore $x - x_0$.
:::

:::formula{#razionalizzazione titolo="Razionalizzazione"}
$$
\begin{gathered}
\sqrt{A} - \sqrt{B} = \frac{A - B}{\sqrt{A} + \sqrt{B}}, \qquad
\sqrt[3]{A} - \sqrt[3]{B} = \frac{A - B}{\sqrt[3]{A^2} + \sqrt[3]{A B} + \sqrt[3]{B^2}}, \\[8pt]
\lim_{x \to +\infty} \left( \sqrt{x^2 + bx + c} - x \right) = \frac{b}{2}
\end{gathered}
$$
La prima vale per $A, B \geq 0$ non entrambi nulli, la seconda per $A, B$ reali non entrambi nulli; la terza per ogni $b, c \in \mathbb{R}$. Si usano per le forme $+\infty - \infty$ e $\dfrac{0}{0}$ con radici. Per $x \to -\infty$ si ha $\sqrt{x^2} = |x| = -x$, quindi $\sqrt{x^2 + bx + c} \sim -x$.
:::

:::formula{#cambio-di-variabile-nei-limiti titolo="Cambio di variabile nei limiti"}
$$
\lim_{x \to x_0} f(g(x)) = \lim_{y \to y_0} f(y) = L
$$
Vale se $g(x) \to y_0$ per $x \to x_0$, $f(y) \to L$ per $y \to y_0$ e $g(x) \neq y_0$ in un intorno di $x_0$, escluso al più $x_0$; l'ultima condizione si può omettere se $f$ è continua in $y_0$. Per esempio $\displaystyle\lim_{x \to 0} \frac{\sin 3x}{3x} = \lim_{y \to 0} \frac{\sin y}{y} = 1$ con $y = 3x$.
:::

:::formula{#teorema-del-confronto titolo="Teorema del confronto"}
$$
\begin{gathered}
g(x) \leq f(x) \leq h(x), \quad g(x) \to L, \quad h(x) \to L \implies f(x) \to L, \\[6pt]
|f(x)| \leq C, \quad g(x) \to 0 \implies f(x)\, g(x) \to 0
\end{gathered}
$$
Le disuguaglianze sono richieste in un intorno di $x_0$, escluso al più $x_0$, con $L \in \mathbb{R}$ e $C$ costante. Con un limite infinito basta una disuguaglianza, perché da $f(x) \geq g(x)$ e $g(x) \to +\infty$ segue $f(x) \to +\infty$. Dalla seconda riga segue, per esempio, $\dfrac{\sin x}{x} \to 0$ per $x \to +\infty$.
:::

:::formula{#continuita-e-discontinuita titolo="Continuità e punti di discontinuità"}
$$
f \ \text{continua in } x_0 \iff \lim_{x \to x_0} f(x) = f(x_0)
$$
Vale per $x_0$ appartenente al dominio e di accumulazione per esso. Un punto $x_0$ di discontinuità si dice

- eliminabile, se il limite esiste finito ed è diverso da $f(x_0)$, oppure $f(x_0)$ non è definito;
- di salto (o di prima specie), se i limiti laterali esistono finiti e sono diversi;
- di seconda specie, se *almeno uno* dei limiti laterali è infinito oppure non esiste.
:::

:::formula{#teoremi-sulle-funzioni-continue titolo="Teoremi degli zeri, di Weierstrass e dei valori intermedi"}
$$
\begin{gathered}
f(a)\, f(b) < 0 \implies \text{esiste } c \in (a, b) \text{ con } f(c) = 0, \\[6pt]
\text{esistono } x_m, x_M \in [a, b] \text{ con } f(x_m) \leq f(x) \leq f(x_M) \ \text{per ogni } x \in [a, b], \\[6pt]
f\bigl( [a, b] \bigr) = [m, M]
\end{gathered}
$$
I tre enunciati richiedono $f$ continua sull'intervallo chiuso e limitato $[a, b]$; nella terza riga $m$ e $M$ sono il minimo e il massimo di $f$ su $[a, b]$. Il teorema degli zeri localizza le soluzioni di $f(x) = 0$, il teorema di Weierstrass garantisce l'esistenza di massimo e minimo.
:::

:::formula{#asintoti titolo="Asintoti verticali, orizzontali e obliqui"}
$$
\begin{gathered}
x = x_0 \ \text{verticale:} \quad \lim_{x \to x_0^{+}} f(x) = \pm\infty \ \ \text{oppure} \ \ \lim_{x \to x_0^{-}} f(x) = \pm\infty, \\[8pt]
y = L \ \text{orizzontale:} \quad \lim_{x \to +\infty} f(x) = L \in \mathbb{R}, \\[8pt]
y = mx + q \ \text{obliquo:} \quad
\begin{cases}
\displaystyle m = \lim_{x \to +\infty} \frac{f(x)}{x} \in \mathbb{R}, \ m \neq 0 \\[10pt]
\displaystyle q = \lim_{x \to +\infty} \bigl( f(x) - mx \bigr) \in \mathbb{R}
\end{cases}
\end{gathered}
$$
Per $x \to -\infty$ le definizioni sono analoghe, e gli asintoti possono essere diversi dalle due parti. L'asintoto obliquo esiste *se e solo se* entrambi i limiti esistono finiti, con $m \neq 0$. Dalla stessa parte una funzione ha al più un asintoto orizzontale oppure obliquo.
:::

## Limiti notevoli e gerarchia degli infiniti

I limiti notevoli sono dimostrati nel capitolo [Limiti e continuità](/analisi-1/limiti/teoria).

:::formula{#limiti-notevoli-goniometrici titolo="Limiti notevoli goniometrici"}
$$
\begin{gathered}
\lim_{x \to 0} \frac{\sin x}{x} = 1, \qquad
\lim_{x \to 0} \frac{1 - \cos x}{x^2} = \frac{1}{2}, \qquad
\lim_{x \to 0} \frac{\tan x}{x} = 1, \\[8pt]
\lim_{x \to 0} \frac{\arcsin x}{x} = 1, \qquad
\lim_{x \to 0} \frac{\arctan x}{x} = 1
\end{gathered}
$$
Valgono con $x$ misurato in radianti. Al posto di $x$ si può scrivere una funzione $f(x)$ con $f(x) \to 0$ per $x \to x_0$ e $f(x) \neq 0$ vicino a $x_0$, per esempio $\displaystyle\lim_{x \to x_0} \frac{\sin f(x)}{f(x)} = 1$. Si usano per le forme $\dfrac{0}{0}$ con funzioni goniometriche.
:::

:::formula{#limiti-notevoli-con-e titolo="Limiti notevoli con il numero e"}
$$
\lim_{x \to \pm\infty} \left( 1 + \frac{1}{x} \right)^{x} = e, \qquad
\lim_{x \to \pm\infty} \left( 1 + \frac{a}{x} \right)^{x} = e^{a}, \qquad
\lim_{x \to 0} (1 + x)^{\frac{1}{x}} = e
$$
La seconda vale per ogni $a \in \mathbb{R}$. Il numero $e = 2{,}71828\ldots$ è la base dei logaritmi naturali. Si usano per le forme $1^{\infty}$.
:::

:::formula{#limiti-notevoli-esponenziali titolo="Limiti notevoli esponenziali e logaritmici"}
$$
\begin{gathered}
\lim_{x \to 0} \frac{\ln(1 + x)}{x} = 1, \qquad
\lim_{x \to 0} \frac{e^{x} - 1}{x} = 1, \qquad
\lim_{x \to 0} \frac{(1 + x)^{\alpha} - 1}{x} = \alpha, \\[8pt]
\lim_{x \to 0} \frac{a^{x} - 1}{x} = \ln a, \qquad
\lim_{x \to 0} \frac{\log_a (1 + x)}{x} = \frac{1}{\ln a}
\end{gathered}
$$
Valgono per $\alpha \in \mathbb{R}$ e $a > 0$, con $a \neq 1$ nell'ultima. Come per i limiti goniometrici, al posto di $x$ si può scrivere una funzione che tende a $0$ e non si annulla vicino al punto.
:::

:::formula{#forma-uno-alla-infinito titolo="Forma uno elevato a infinito"}
$$
\lim_{x \to x_0} f(x)^{g(x)} = e^{\,L}, \qquad L = \lim_{x \to x_0} g(x)\,\bigl( f(x) - 1 \bigr)
$$
Vale se $f(x) > 0$, $f(x) \to 1$, $g(x) \to \pm\infty$ e il limite $L$ esiste finito; se $L = +\infty$ il limite vale $+\infty$, se $L = -\infty$ vale $0$. La formula segue da $f(x)^{g(x)} = e^{\,g(x) \ln f(x)}$ e da $\ln f(x) \sim f(x) - 1$.
:::

:::formula{#funzioni-asintotiche titolo="Funzioni asintotiche per x che tende a 0"}
$$
\begin{gathered}
\sin x \sim x, \qquad \tan x \sim x, \qquad \arcsin x \sim x, \qquad \arctan x \sim x, \qquad 1 - \cos x \sim \frac{x^2}{2}, \\[8pt]
e^{x} - 1 \sim x, \qquad a^{x} - 1 \sim x \ln a, \qquad \ln(1 + x) \sim x, \qquad (1 + x)^{\alpha} - 1 \sim \alpha x
\end{gathered}
$$
Valgono per $x \to 0$, con $a > 0$, $a \neq 1$ e $\alpha \neq 0$, e al posto di $x$ si può scrivere una funzione infinitesima. In un prodotto o in un quoziente un fattore si può sostituire con una funzione asintotica senza cambiare il limite. La scrittura $f \sim g$ significa $\dfrac{f(x)}{g(x)} \to 1$, la scrittura $f = o(g)$ significa $\dfrac{f(x)}{g(x)} \to 0$.
:::

:::attenzione
Le funzioni asintotiche si sostituiscono nei prodotti e nei quozienti, e la sostituzione nelle somme e nelle differenze può dare un risultato sbagliato. Per $x \to 0$ si ha $\sin x \sim x$ e $\displaystyle\lim_{x \to 0} \frac{\sin x - x}{x^3} = -\frac{1}{6}$, mentre sostituendo $x$ al posto di $\sin x$ si otterrebbe $0$. In questi casi si usano gli sviluppi di Taylor.
:::

:::formula{#gerarchia-degli-infiniti titolo="Gerarchia degli infiniti"}
$$
\lim_{x \to +\infty} \frac{(\ln x)^{\beta}}{x^{\alpha}} = 0, \qquad
\lim_{x \to +\infty} \frac{x^{\alpha}}{a^{x}} = 0, \qquad
\lim_{x \to 0^{+}} x^{\alpha}\, |\ln x|^{\beta} = 0
$$
Valgono per $\alpha > 0$, $\beta > 0$ e $a > 1$. Per $x \to +\infty$ il logaritmo cresce più lentamente di *ogni* potenza, e ogni potenza più lentamente di ogni esponenziale con base maggiore di $1$. Nelle forme $\dfrac{\infty}{\infty}$ si raccoglie, al numeratore e al denominatore, il termine che cresce più in fretta.
:::

:::formula{#gerarchia-per-le-successioni titolo="Gerarchia degli infiniti per le successioni"}
$$
\lim_{n \to +\infty} \frac{(\ln n)^{\beta}}{n^{\alpha}} = 0, \qquad
\lim_{n \to +\infty} \frac{n^{\alpha}}{a^{n}} = 0, \qquad
\lim_{n \to +\infty} \frac{a^{n}}{n!} = 0, \qquad
\lim_{n \to +\infty} \frac{n!}{n^{n}} = 0
$$
Valgono per $\alpha > 0$, $\beta > 0$ e $a > 1$. In ordine di crescita gli infiniti sono $(\ln n)^{\beta}$, $n^{\alpha}$, $a^n$, $n!$, $n^n$.
:::

:::formula{#limiti-notevoli-di-successioni titolo="Limiti notevoli di successioni"}
$$
\begin{gathered}
\lim_{n \to +\infty} \sqrt[n]{n} = 1, \qquad
\lim_{n \to +\infty} \sqrt[n]{a} = 1, \qquad
\lim_{n \to +\infty} \left( 1 + \frac{a}{n} \right)^{n} = e^{a}, \\[8pt]
\lim_{n \to +\infty} q^{n} =
\begin{cases}
0 & \text{se } |q| < 1 \\[2pt]
1 & \text{se } q = 1 \\[2pt]
+\infty & \text{se } q > 1
\end{cases}
\end{gathered}
$$
La seconda vale per $a > 0$, la terza per ogni $a \in \mathbb{R}$. Per $q \leq -1$ la successione $q^n$ non ammette limite. Il primo limite segue da $\sqrt[n]{n} = e^{\frac{\ln n}{n}}$ e dalla gerarchia degli infiniti.
:::

## Derivate

Le regole di derivazione sono dimostrate nel capitolo [Calcolo differenziale e Taylor](/analisi-1/derivate/teoria).

:::formula{#derivata-e-retta-tangente titolo="Derivata, derivate laterali e retta tangente"}
$$
\begin{gathered}
f'(x_0) = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h}, \qquad
f'_{\pm}(x_0) = \lim_{h \to 0^{\pm}} \frac{f(x_0 + h) - f(x_0)}{h}, \\[8pt]
y = f(x_0) + f'(x_0)\,(x - x_0)
\end{gathered}
$$
La funzione $f$ è derivabile nel punto $x_0$, interno al dominio, se il primo limite esiste *finito*, e questo accade *se e solo se* le derivate laterali esistono finite e coincidono. La terza formula è la retta tangente al grafico nel punto $(x_0, f(x_0))$. Una funzione derivabile in $x_0$ è continua in $x_0$.
:::

:::formula{#regole-di-derivazione titolo="Regole di derivazione"}
$$
\begin{gathered}
(f + g)' = f' + g', \qquad (c\,f)' = c\,f', \qquad (f\,g)' = f'\,g + f\,g', \\[8pt]
\left( \frac{f}{g} \right)' = \frac{f'\,g - f\,g'}{g^2}, \qquad \left( \frac{1}{g} \right)' = -\frac{g'}{g^2}
\end{gathered}
$$
Valgono nei punti in cui $f$ e $g$ sono derivabili, con $c \in \mathbb{R}$ e $g \neq 0$ nelle ultime due.
:::

:::formula{#derivata-composta-e-inversa titolo="Derivata della funzione composta e dell'inversa"}
$$
(f \circ g)'(x) = f'(g(x))\, g'(x), \qquad (f^{-1})'(y_0) = \frac{1}{f'(x_0)} \quad (y_0 = f(x_0))
$$
La prima vale se $g$ è derivabile in $x$ e $f$ è derivabile in $g(x)$; con più composizioni si applica a catena, dall'esterno verso l'interno. La seconda vale se $f$ è invertibile e derivabile in $x_0$ con $f'(x_0) \neq 0$, e se $f^{-1}$ è continua in $y_0$.
:::

:::formula{#derivate-elementari titolo="Derivate delle funzioni elementari"}
$$
\begin{array}{ll|ll}
f(x) & f'(x) & f(x) & f'(x) \\
\hline
x^{\alpha} & \alpha\, x^{\alpha - 1} & \cos x & -\sin x \\[8pt]
e^{x} & e^{x} & \tan x & \dfrac{1}{\cos^2 x} = 1 + \tan^2 x \\[10pt]
a^{x} & a^{x} \ln a & \arcsin x & \dfrac{1}{\sqrt{1 - x^2}} \\[10pt]
\ln x & \dfrac{1}{x} & \arccos x & -\dfrac{1}{\sqrt{1 - x^2}} \\[10pt]
\sin x & \cos x & \arctan x & \dfrac{1}{1 + x^2}
\end{array}
$$
Ogni formula vale nei punti interni al dominio della funzione, con $a > 0$ e, per $\arcsin$ e $\arccos$, con $-1 < x < 1$. La formula per $x^{\alpha}$ vale per $x > 0$ e ogni $\alpha \in \mathbb{R}$, su tutto $\mathbb{R}$ per $\alpha$ intero positivo e per $x \neq 0$ con $\alpha$ intero negativo. La derivata di una costante è $0$.
:::

:::formula{#altre-derivate titolo="Altre derivate di uso frequente"}
$$
\begin{array}{ll|ll}
f(x) & f'(x) & f(x) & f'(x) \\
\hline
\sqrt{x} & \dfrac{1}{2\sqrt{x}} & \log_a x & \dfrac{1}{x \ln a} \\[10pt]
\dfrac{1}{x} & -\dfrac{1}{x^2} & \ln |x| & \dfrac{1}{x} \\[10pt]
|x| & \dfrac{x}{|x|} & \sinh x & \cosh x \\[10pt]
\sqrt[3]{x} & \dfrac{1}{3\sqrt[3]{x^2}} & \cosh x & \sinh x
\end{array}
$$
Valgono per $x > 0$ nella radice quadrata e in $\log_a x$, con $a > 0$ e $a \neq 1$; per $x \neq 0$ in $\dfrac{1}{x}$, $\ln|x|$, $|x|$ e $\sqrt[3]{x}$; per ogni $x$ nelle funzioni iperboliche. Nel punto $0$ le funzioni $|x|$ e $\sqrt[3]{x}$ non sono derivabili.
:::

:::formula{#derivate-di-funzioni-composte titolo="Derivate di funzioni composte frequenti"}
$$
\begin{gathered}
\left( [f(x)]^{\alpha} \right)' = \alpha\, [f(x)]^{\alpha - 1} f'(x), \qquad
\left( \sqrt{f(x)} \right)' = \frac{f'(x)}{2\sqrt{f(x)}}, \\[8pt]
\left( e^{f(x)} \right)' = e^{f(x)} f'(x), \qquad
\left( \ln |f(x)| \right)' = \frac{f'(x)}{f(x)}, \\[8pt]
\left( \sin f(x) \right)' = \cos f(x)\; f'(x), \qquad
\left( \arctan f(x) \right)' = \frac{f'(x)}{1 + [f(x)]^2}
\end{gathered}
$$
Sono la regola della funzione composta applicata alle derivate elementari e valgono dove $f$ è derivabile e la funzione esterna è derivabile in $f(x)$. In particolare la radice richiede $f(x) > 0$, il logaritmo $f(x) \neq 0$, la potenza con $\alpha$ reale qualunque $f(x) > 0$.
:::

:::formula{#derivata-di-f-alla-g titolo="Derivata di una potenza con base ed esponente variabili"}
$$
\left( f(x)^{g(x)} \right)' = f(x)^{g(x)} \left( g'(x) \ln f(x) + g(x)\, \frac{f'(x)}{f(x)} \right)
$$
Vale dove $f(x) > 0$ e $f$, $g$ sono derivabili. Si ottiene derivando $e^{\,g(x) \ln f(x)}$; per esempio $\left( x^{x} \right)' = x^{x} (\ln x + 1)$ per $x > 0$.
:::

:::formula{#derivate-n-esime titolo="Derivate n-esime notevoli"}
$$
\begin{gathered}
\left( e^{ax} \right)^{(n)} = a^{n} e^{ax}, \qquad
(\sin x)^{(n)} = \sin\left( x + \frac{n\pi}{2} \right), \qquad
(\cos x)^{(n)} = \cos\left( x + \frac{n\pi}{2} \right), \\[8pt]
\left( \frac{1}{1 - x} \right)^{(n)} = \frac{n!}{(1 - x)^{n+1}}, \qquad
\bigl( \ln(1 + x) \bigr)^{(n)} = \frac{(-1)^{n-1} (n-1)!}{(1 + x)^{n}}
\end{gathered}
$$
Valgono per ogni $n \geq 1$ e $a \in \mathbb{R}$, con $x \neq 1$ nella quarta e $x > -1$ nella quinta. Danno i coefficienti $\dfrac{f^{(n)}(0)}{n!}$ dei polinomi di McLaurin.
:::

:::formula{#punti-di-non-derivabilita titolo="Punti angolosi, cuspidi e flessi a tangente verticale"}
$$
\begin{gathered}
\text{punto angoloso:} \quad f'_{-}(x_0) \neq f'_{+}(x_0), \ \text{almeno una finita}, \\[6pt]
\text{cuspide:} \quad f'_{-}(x_0) = \pm\infty, \ \ f'_{+}(x_0) = \mp\infty, \\[6pt]
\text{flesso a tangente verticale:} \quad f'_{-}(x_0) = f'_{+}(x_0) = +\infty \ \ \text{oppure} \ \ -\infty
\end{gathered}
$$
La classificazione riguarda i punti in cui $f$ è continua e non derivabile, e le derivate laterali sono i limiti laterali del rapporto incrementale. Nel punto $0$ la funzione $|x|$ ha un punto angoloso, $\sqrt{|x|}$ una cuspide, $\sqrt[3]{x}$ un flesso a tangente verticale.
:::

## Teoremi del calcolo differenziale

I teoremi con le loro dimostrazioni sono nel capitolo [Calcolo differenziale e Taylor](/analisi-1/derivate/teoria).

:::formula{#teorema-di-fermat titolo="Teorema di Fermat"}
$$
x_0 \ \text{punto di massimo o di minimo locale} \implies f'(x_0) = 0
$$
Vale se $x_0$ è interno al dominio e $f$ è derivabile in $x_0$. La condizione $f'(x_0) = 0$ è *necessaria* e non sufficiente, perché $x^3$ ha derivata nulla in $0$ ed è strettamente crescente.
:::

:::formula{#teorema-di-rolle titolo="Teorema di Rolle"}
$$
f(a) = f(b) \implies \text{esiste } c \in (a, b) \text{ con } f'(c) = 0
$$
Vale per $f$ continua su $[a, b]$ e derivabile su $(a, b)$.
:::

:::formula{#teorema-di-lagrange titolo="Teorema di Lagrange"}
$$
\begin{gathered}
\text{esiste } c \in (a, b) \text{ con } f'(c) = \frac{f(b) - f(a)}{b - a}, \\[8pt]
|f'(x)| \leq K \ \text{su } (a, b) \implies |f(b) - f(a)| \leq K\,(b - a)
\end{gathered}
$$
Vale per $f$ continua su $[a, b]$ e derivabile su $(a, b)$. La stima della seconda riga segue dalla prima e si usa per dimostrare disuguaglianze.
:::

:::formula{#teorema-di-cauchy titolo="Teorema di Cauchy"}
$$
\text{esiste } c \in (a, b) \text{ con } \frac{f'(c)}{g'(c)} = \frac{f(b) - f(a)}{g(b) - g(a)}
$$
Vale per $f$ e $g$ continue su $[a, b]$ e derivabili su $(a, b)$, con $g'(x) \neq 0$ per ogni $x \in (a, b)$. Per $g(x) = x$ si ottiene il teorema di Lagrange.
:::

:::formula{#monotonia-e-segno-della-derivata titolo="Monotonia e segno della derivata"}
$$
\begin{gathered}
f' \geq 0 \ \text{su } I \iff f \ \text{crescente su } I, \\[6pt]
f' \leq 0 \ \text{su } I \iff f \ \text{decrescente su } I, \\[6pt]
f' > 0 \ \text{su } I \implies f \ \text{strettamente crescente su } I, \\[6pt]
f' = 0 \ \text{su } I \implies f \ \text{costante su } I
\end{gathered}
$$
Valgono per $f$ derivabile su un *intervallo* $I$. Su un'unione di intervalli si applicano a ciascun intervallo separatamente. Per esempio la funzione $\dfrac{1}{x}$ ha derivata negativa su $\mathbb{R} \setminus \{0\}$, ma soddisfa $f(-1) < f(1)$, quindi non è decrescente su $\mathbb{R} \setminus \{0\}$.
:::

:::formula{#limite-della-derivata titolo="Limite della derivata"}
$$
\lim_{x \to x_0} f'(x) = L \in \mathbb{R} \implies f \ \text{derivabile in } x_0 \ \text{e} \ f'(x_0) = L
$$
Vale per $f$ continua in $x_0$ e derivabile in un intorno di $x_0$, escluso al più $x_0$; con i limiti laterali di $f'$ si ottengono le derivate laterali. Si usa nei punti di raccordo delle funzioni definite a tratti. Se il limite di $f'$ non esiste, il criterio non dà informazioni e si calcola il limite del rapporto incrementale.
:::

:::formula{#teorema-di-de-l-hopital titolo="Teorema di de l'Hôpital"}
$$
\lim_{x \to x_0} \frac{f(x)}{g(x)} = \lim_{x \to x_0} \frac{f'(x)}{g'(x)}
$$
Vale se sono soddisfatte le condizioni
$$
\begin{cases}
f, g \ \text{derivabili in } U \setminus \{x_0\}, \ \ g'(x) \neq 0 \ \text{in } U \setminus \{x_0\} \\[4pt]
f, g \to 0 \ \ \text{oppure} \ \ |f|, |g| \to +\infty \\[4pt]
\text{il limite di } \dfrac{f'}{g'} \ \text{esiste, finito o infinito}
\end{cases}
$$
dove $U$ è un intorno di $x_0 \in \mathbb{R} \cup \{\pm\infty\}$; lo stesso vale per i limiti laterali. Le forme $0 \cdot \infty$ e $\infty - \infty$ si riconducono a un rapporto, le forme $1^{\infty}$, $0^{0}$, $\infty^{0}$ si riconducono a un rapporto con $f^{g} = e^{\,g \ln f}$.
:::

## Sviluppi di Taylor e McLaurin

Le formule di Taylor e gli sviluppi delle funzioni elementari sono ricavati nel capitolo [Calcolo differenziale e Taylor](/analisi-1/derivate/teoria).

:::formula{#formula-di-taylor-peano titolo="Formula di Taylor con resto di Peano"}
$$
f(x) = \sum_{k=0}^{n} \frac{f^{(k)}(x_0)}{k!}\,(x - x_0)^k + o\bigl( (x - x_0)^n \bigr) \qquad (x \to x_0)
$$
Vale se $f$ è derivabile $n$ volte in $x_0$. Per $x_0 = 0$ si parla di formula di McLaurin. Il resto è trascurabile rispetto all'ultima potenza scritta, e questa forma si usa nel calcolo dei limiti.
:::

:::formula{#resto-di-lagrange titolo="Resto di Lagrange e stima dell'errore"}
$$
\begin{gathered}
f(x) = \sum_{k=0}^{n} \frac{f^{(k)}(x_0)}{k!}\,(x - x_0)^k + \frac{f^{(n+1)}(c)}{(n+1)!}\,(x - x_0)^{n+1}, \\[8pt]
\bigl| f(x) - T_n(x) \bigr| \leq \frac{K}{(n+1)!}\,|x - x_0|^{n+1}
\end{gathered}
$$
Vale se $f$ è derivabile $n + 1$ volte su un intervallo $I$ che contiene $x_0$ e $x$, con $c$ compreso strettamente tra $x_0$ e $x$; $T_n$ è il polinomio di Taylor di ordine $n$. La stima della seconda riga richiede $|f^{(n+1)}| \leq K$ su $I$.
:::

:::formula{#mclaurin-esponenziale-seno-coseno titolo="McLaurin di esponenziale, seno e coseno"}
$$
\begin{aligned}
e^{x} &= 1 + x + \frac{x^2}{2} + \frac{x^3}{6} + \cdots + \frac{x^n}{n!} + o(x^n), \\[6pt]
\sin x &= x - \frac{x^3}{6} + \frac{x^5}{120} - \cdots + \frac{(-1)^n x^{2n+1}}{(2n+1)!} + o(x^{2n+2}), \\[6pt]
\cos x &= 1 - \frac{x^2}{2} + \frac{x^4}{24} - \cdots + \frac{(-1)^n x^{2n}}{(2n)!} + o(x^{2n+1})
\end{aligned}
$$
Valgono per $x \to 0$ e ogni $n \in \mathbb{N}$. Il seno contiene *solo* potenze dispari e il coseno solo potenze pari, perciò il resto si scrive di un ordine più alto dell'ultimo termine.
:::

:::formula{#mclaurin-iperboliche titolo="McLaurin di seno e coseno iperbolico"}
$$
\begin{aligned}
\sinh x &= x + \frac{x^3}{6} + \frac{x^5}{120} + \cdots + \frac{x^{2n+1}}{(2n+1)!} + o(x^{2n+2}), \\[6pt]
\cosh x &= 1 + \frac{x^2}{2} + \frac{x^4}{24} + \cdots + \frac{x^{2n}}{(2n)!} + o(x^{2n+1})
\end{aligned}
$$
Valgono per $x \to 0$ e ogni $n \in \mathbb{N}$, con gli stessi coefficienti di seno e coseno e tutti i segni positivi.
:::

:::formula{#mclaurin-logaritmo-e-geometrica titolo="McLaurin del logaritmo e della serie geometrica"}
$$
\begin{aligned}
\ln(1 + x) &= x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots + \frac{(-1)^{n+1} x^n}{n} + o(x^n), \\[6pt]
\frac{1}{1 - x} &= 1 + x + x^2 + \cdots + x^n + o(x^n), \\[6pt]
\frac{1}{1 + x} &= 1 - x + x^2 - \cdots + (-1)^n x^n + o(x^n)
\end{aligned}
$$
Valgono per $x \to 0$ e $n \geq 1$. Con $-x$ al posto di $x$ si ottiene $\ln(1 - x) = -x - \dfrac{x^2}{2} - \cdots - \dfrac{x^n}{n} + o(x^n)$.
:::

:::formula{#mclaurin-potenza-binomiale titolo="McLaurin della potenza binomiale"}
$$
\begin{gathered}
(1 + x)^{\alpha} = 1 + \alpha x + \frac{\alpha(\alpha - 1)}{2}\, x^2 + \cdots + \binom{\alpha}{n} x^n + o(x^n), \\[8pt]
\binom{\alpha}{n} = \frac{\alpha(\alpha - 1) \cdots (\alpha - n + 1)}{n!}, \\[8pt]
\sqrt{1 + x} = 1 + \frac{x}{2} - \frac{x^2}{8} + o(x^2), \qquad
\frac{1}{\sqrt{1 + x}} = 1 - \frac{x}{2} + \frac{3x^2}{8} + o(x^2)
\end{gathered}
$$
Valgono per $x \to 0$ e ogni $\alpha \in \mathbb{R}$. Il coefficiente binomiale generalizzato $\dbinom{\alpha}{n}$ coincide con quello ordinario per $\alpha \in \mathbb{N}$.
:::

:::formula{#mclaurin-arcotangente-tangente-arcoseno titolo="McLaurin di arcotangente, tangente e arcoseno"}
$$
\begin{aligned}
\arctan x &= x - \frac{x^3}{3} + \frac{x^5}{5} - \cdots + \frac{(-1)^n x^{2n+1}}{2n+1} + o(x^{2n+2}), \\[6pt]
\tan x &= x + \frac{x^3}{3} + \frac{2x^5}{15} + o(x^6), \\[6pt]
\arcsin x &= x + \frac{x^3}{6} + \frac{3x^5}{40} + o(x^6)
\end{aligned}
$$
Valgono per $x \to 0$. Le tre funzioni sono dispari, quindi i loro sviluppi contengono solo potenze dispari.
:::

:::formula{#algebra-degli-o-piccolo titolo="Algebra degli o-piccolo"}
$$
\begin{gathered}
o(x^n) \pm o(x^n) = o(x^n), \qquad c \cdot o(x^n) = o(x^n), \\[6pt]
x^m \cdot o(x^n) = o(x^{m+n}), \qquad o(x^m) \cdot o(x^n) = o(x^{m+n}), \\[6pt]
\frac{o(x^n)}{x^m} = o(x^{n-m}) \ \ (m \leq n), \qquad o(x^m) = o(x^n) \ \ (m > n)
\end{gathered}
$$
Valgono per $x \to 0$, con $m, n$ interi positivi e $c \neq 0$, e si leggono da sinistra a destra. L'ultima abbassa l'ordine di un resto per uniformarlo agli altri termini; per lo stesso motivo una potenza $x^m$ con $m > n$ è $o(x^n)$.
:::

:::formula{#sviluppi-composti-e-centrati titolo="Sviluppi di funzioni composte e centrati in un punto"}
$$
\begin{gathered}
f(t) = T_n(t) + o(t^n), \quad g(x) \to 0 \implies f(g(x)) = T_n(g(x)) + o\bigl( g(x)^n \bigr), \\[8pt]
\ln x = (x - 1) - \frac{(x - 1)^2}{2} + o\bigl( (x - 1)^2 \bigr) \quad (x \to 1), \\[8pt]
e^{x} = e^{x_0} \sum_{k=0}^{n} \frac{(x - x_0)^k}{k!} + o\bigl( (x - x_0)^n \bigr) \quad (x \to x_0)
\end{gathered}
$$
Nella prima riga $t \to 0$ e $x \to x_0$; se inoltre $x_0 = 0$ e $g(x) \sim c\,x^{k}$ per $x \to 0$, con $c \neq 0$, il resto $o\bigl( g(x)^n \bigr)$ è $o(x^{kn})$. Gli sviluppi centrati in $x_0 \neq 0$ si ottengono da quelli di McLaurin con la sostituzione $t = x - x_0$.
:::

## Studio di funzione

I criteri per massimi, minimi, convessità e flessi sono nel capitolo [Studio di funzione](/analisi-1/studio-di-funzione/teoria).

:::formula{#criterio-della-derivata-prima titolo="Criterio della derivata prima"}
$$
\begin{gathered}
f' > 0 \ \text{a sinistra}, \ \ f' < 0 \ \text{a destra di } x_0 \implies x_0 \ \text{di massimo relativo}, \\[6pt]
f' < 0 \ \text{a sinistra}, \ \ f' > 0 \ \text{a destra di } x_0 \implies x_0 \ \text{di minimo relativo}
\end{gathered}
$$
Vale per $f$ continua in $x_0$ e derivabile in un intorno di $x_0$, escluso al più $x_0$. Il criterio non richiede la derivabilità in $x_0$, perciò si applica anche ai punti angolosi e alle cuspidi. Se $f'$ ha lo stesso segno dalle due parti, $x_0$ non è né di massimo né di minimo.
:::

:::formula{#criterio-della-derivata-seconda titolo="Criterio della derivata seconda"}
$$
\begin{gathered}
f'(x_0) = 0, \ \ f''(x_0) > 0 \implies x_0 \ \text{punto di minimo relativo}, \\[6pt]
f'(x_0) = 0, \ \ f''(x_0) < 0 \implies x_0 \ \text{punto di massimo relativo}
\end{gathered}
$$
Vale per $f$ derivabile due volte in $x_0$. Per $f''(x_0) = 0$ il criterio non decide, come mostrano $x^4$, $-x^4$ e $x^3$, che in $0$ hanno un minimo, un massimo e un flesso.
:::

:::formula{#criterio-delle-derivate-successive titolo="Criterio delle derivate successive"}
$$
f'(x_0) = f''(x_0) = \cdots = f^{(n-1)}(x_0) = 0, \qquad f^{(n)}(x_0) \neq 0
$$
Vale per $f$ derivabile $n$ volte in $x_0$, con $n \geq 2$. Se $n$ è pari, $x_0$ è punto di minimo relativo per $f^{(n)}(x_0) > 0$ e di massimo relativo per $f^{(n)}(x_0) < 0$. Se $n$ è dispari, $x_0$ è un punto di flesso a tangente orizzontale.
:::

:::formula{#massimo-e-minimo-assoluto titolo="Massimo e minimo assoluto su un intervallo chiuso"}
$$
\begin{gathered}
\max_{[a, b]} f = \max \bigl\{ f(a),\ f(b),\ f(x_1), \dots, f(x_k) \bigr\}, \\[6pt]
\min_{[a, b]} f = \min \bigl\{ f(a),\ f(b),\ f(x_1), \dots, f(x_k) \bigr\}
\end{gathered}
$$
Vale per $f$ continua su $[a, b]$, dove $x_1, \dots, x_k$ sono i punti stazionari interni e i punti interni di non derivabilità; il teorema di Weierstrass garantisce l'esistenza di massimo e minimo. Su un dominio non chiuso o non limitato l'esistenza si decide con i limiti agli estremi del dominio.
:::

:::formula{#convessita-e-derivata-seconda titolo="Convessità e derivata seconda"}
$$
\begin{gathered}
f\bigl( (1 - t)\,x_1 + t\,x_2 \bigr) \leq (1 - t)\,f(x_1) + t\,f(x_2), \\[6pt]
f'' \geq 0 \ \text{su } I \iff f \ \text{convessa su } I, \qquad f'' \leq 0 \ \text{su } I \iff f \ \text{concava su } I, \\[6pt]
f \ \text{convessa su } I \iff f(x) \geq f(x_0) + f'(x_0)\,(x - x_0)
\end{gathered}
$$
La prima riga, richiesta per ogni $x_1, x_2 \in I$ e ogni $t \in [0, 1]$, è la definizione di funzione convessa sull'intervallo $I$. La seconda vale per $f$ derivabile due volte su $I$, e con $f'' > 0$ nei punti interni la convessità è stretta. La terza vale per $f$ derivabile su $I$, con la disuguaglianza richiesta per ogni $x, x_0 \in I$, e dice che il grafico di una funzione convessa sta sopra ogni retta tangente.
:::

:::formula{#punti-di-flesso titolo="Punti di flesso"}
$$
x_0 \ \text{punto di flesso}, \ \ f \ \text{derivabile due volte in } x_0 \implies f''(x_0) = 0
$$
I candidati sono gli zeri di $f''$ e i punti in cui $f''$ non esiste. Un candidato in cui $f$ è continua e il grafico ha retta tangente è un flesso se $f''$ cambia segno nel punto. La tangente nel flesso è $y = f(x_0) + f'(x_0)(x - x_0)$, e il grafico la attraversa.
:::

## Integrali immediati

Le primitive elementari sono ricavate nel capitolo [Calcolo integrale](/analisi-1/integrali/teoria).

:::formula{#primitiva-e-linearita titolo="Primitiva e linearità"}
$$
\begin{gathered}
\int f(x)\, dx = F(x) + c \iff F'(x) = f(x), \\[8pt]
\int \bigl( \alpha f(x) + \beta g(x) \bigr)\, dx = \alpha \int f(x)\, dx + \beta \int g(x)\, dx
\end{gathered}
$$
Valgono su un intervallo $I$, con $\alpha, \beta \in \mathbb{R}$ e $c \in \mathbb{R}$ costante arbitraria, perché due primitive della stessa funzione su un intervallo differiscono per una costante. Ogni funzione continua su un intervallo ammette primitive.
:::

:::formula{#integrali-elementari titolo="Integrali elementari"}
$$
\begin{gathered}
\int x^{\alpha}\, dx = \frac{x^{\alpha + 1}}{\alpha + 1} + c \ \ (\alpha \neq -1), \qquad
\int \frac{1}{x}\, dx = \ln |x| + c, \\[8pt]
\int e^{x}\, dx = e^{x} + c, \qquad
\int a^{x}\, dx = \frac{a^{x}}{\ln a} + c \ \ (a > 0,\ a \neq 1), \\[8pt]
\int \sin x\, dx = -\cos x + c, \qquad
\int \cos x\, dx = \sin x + c
\end{gathered}
$$
Ciascuna vale su ogni intervallo contenuto nel dominio dell'integranda; per $\dfrac{1}{x}$ gli intervalli sono $(-\infty, 0)$ e $(0, +\infty)$. Casi frequenti della prima sono $\displaystyle\int \sqrt{x}\, dx = \frac{2}{3}\, x^{\frac{3}{2}} + c$ e $\displaystyle\int \frac{1}{x^2}\, dx = -\frac{1}{x} + c$.
:::

:::formula{#integrali-elementari-goniometrici titolo="Integrali elementari goniometrici e iperbolici"}
$$
\begin{gathered}
\int \frac{1}{\cos^2 x}\, dx = \tan x + c, \qquad
\int \frac{1}{\sin^2 x}\, dx = -\frac{\cos x}{\sin x} + c, \\[8pt]
\int \frac{1}{1 + x^2}\, dx = \arctan x + c, \qquad
\int \frac{1}{\sqrt{1 - x^2}}\, dx = \arcsin x + c, \\[8pt]
\int \sinh x\, dx = \cosh x + c, \qquad
\int \cosh x\, dx = \sinh x + c
\end{gathered}
$$
Valgono sugli intervalli in cui l'integranda è definita, cioè con $\cos x \neq 0$ nella prima, $\sin x \neq 0$ nella seconda e $-1 < x < 1$ nella quarta.
:::

:::formula{#integrali-con-argomento-lineare titolo="Integrali con argomento lineare"}
$$
\begin{gathered}
\int f(ax + b)\, dx = \frac{1}{a}\, F(ax + b) + c, \\[8pt]
\int \frac{dx}{ax + b} = \frac{1}{a} \ln |ax + b| + c, \qquad
\int e^{ax}\, dx = \frac{e^{ax}}{a} + c, \\[8pt]
\int \sin(ax)\, dx = -\frac{\cos(ax)}{a} + c, \qquad
\int \cos(ax)\, dx = \frac{\sin(ax)}{a} + c
\end{gathered}
$$
Valgono per $a \neq 0$, con $F$ primitiva di $f$, e seguono dalla sostituzione $t = ax + b$.
:::

:::formula{#quasi-immediati-potenza-logaritmo-esponenziale titolo="Integrali quasi immediati con potenza, logaritmo ed esponenziale"}
$$
\begin{gathered}
\int f'(x)\, [f(x)]^{\alpha}\, dx = \frac{[f(x)]^{\alpha + 1}}{\alpha + 1} + c \ \ (\alpha \neq -1), \\[8pt]
\int \frac{f'(x)}{f(x)}\, dx = \ln |f(x)| + c, \qquad
\int f'(x)\, e^{f(x)}\, dx = e^{f(x)} + c, \\[8pt]
\int \frac{f'(x)}{\sqrt{f(x)}}\, dx = 2\sqrt{f(x)} + c
\end{gathered}
$$
Valgono per $f$ derivabile con derivata continua, sugli intervalli in cui l'integranda è definita. Nell'integranda compare la derivata della funzione interna, eventualmente a meno di una costante moltiplicativa, come in $\displaystyle\int x\, e^{x^2}\, dx = \frac{1}{2}\, e^{x^2} + c$.
:::

:::formula{#quasi-immediati-goniometrici titolo="Integrali quasi immediati con funzioni goniometriche e inverse"}
$$
\begin{gathered}
\int f'(x) \cos f(x)\, dx = \sin f(x) + c, \qquad
\int f'(x) \sin f(x)\, dx = -\cos f(x) + c, \\[8pt]
\int \frac{f'(x)}{\cos^2 f(x)}\, dx = \tan f(x) + c, \qquad
\int \frac{f'(x)}{1 + [f(x)]^2}\, dx = \arctan f(x) + c, \\[8pt]
\int \frac{f'(x)}{\sqrt{1 - [f(x)]^2}}\, dx = \arcsin f(x) + c
\end{gathered}
$$
Valgono per $f$ derivabile con derivata continua, sugli intervalli in cui l'integranda è definita. Per esempio $\displaystyle\int \frac{e^{x}}{1 + e^{2x}}\, dx = \arctan e^{x} + c$.
:::

:::formula{#integrali-con-una-costante-positiva titolo="Integrali con una costante positiva a"}
$$
\begin{gathered}
\int \frac{dx}{a^2 + x^2} = \frac{1}{a} \arctan \frac{x}{a} + c, \qquad
\int \frac{dx}{\sqrt{a^2 - x^2}} = \arcsin \frac{x}{a} + c, \\[8pt]
\int \frac{dx}{x^2 - a^2} = \frac{1}{2a} \ln \left| \frac{x - a}{x + a} \right| + c, \qquad
\int \frac{dx}{\sqrt{x^2 + k}} = \ln \left| x + \sqrt{x^2 + k} \right| + c
\end{gathered}
$$
Le prime tre valgono per $a > 0$, la seconda per $|x| < a$, la terza per $x \neq \pm a$. L'ultima vale per $k \neq 0$ sugli intervalli in cui $x^2 + k > 0$.
:::

:::formula{#altre-primitive titolo="Altre primitive di uso frequente"}
$$
\begin{gathered}
\int \tan x\, dx = -\ln |\cos x| + c, \qquad
\int \ln x\, dx = x \ln x - x + c, \\[8pt]
\int \sin^2 x\, dx = \frac{x - \sin x \cos x}{2} + c, \qquad
\int \cos^2 x\, dx = \frac{x + \sin x \cos x}{2} + c, \\[8pt]
\int \arctan x\, dx = x \arctan x - \frac{1}{2} \ln (1 + x^2) + c, \\[8pt]
\int \sqrt{1 - x^2}\, dx = \frac{\arcsin x + x\sqrt{1 - x^2}}{2} + c
\end{gathered}
$$
Valgono sugli intervalli in cui l'integranda è definita, cioè con $\cos x \neq 0$ nella prima, $x > 0$ nella seconda e $-1 \leq x \leq 1$ nell'ultima. Si ottengono per parti, per sostituzione o con le formule di linearizzazione.
:::

:::attenzione
L'integrale di un prodotto è diverso dal prodotto degli integrali. Si ha $\displaystyle\int x \cdot x\, dx = \frac{x^3}{3} + c$, mentre il prodotto delle primitive $\dfrac{x^2}{2} \cdot \dfrac{x^2}{2} = \dfrac{x^4}{4}$ ha derivata $x^3$. Per i prodotti si usano l'integrazione per parti o la sostituzione.
:::

## Metodi di integrazione

I metodi sono dimostrati, con esempi, nel capitolo [Calcolo integrale](/analisi-1/integrali/teoria).

:::formula{#integrazione-per-parti titolo="Integrazione per parti"}
$$
\begin{gathered}
\int f(x)\, g'(x)\, dx = f(x)\, g(x) - \int f'(x)\, g(x)\, dx, \\[8pt]
\int_a^b f(x)\, g'(x)\, dx = \bigl[ f(x)\, g(x) \bigr]_a^b - \int_a^b f'(x)\, g(x)\, dx
\end{gathered}
$$
Vale per $f$ e $g$ derivabili con derivata continua su un intervallo. Nei prodotti di un polinomio per $e^{x}$, $\sin x$ o $\cos x$ il fattore $f$ è il polinomio; con $\ln x$ e $\arctan x$ si prende $f(x) = \ln x$ oppure $f(x) = \arctan x$ e $g'(x) = 1$.
:::

:::formula{#esponenziale-per-seno-e-coseno titolo="Esponenziale per seno e coseno"}
$$
\begin{gathered}
\int e^{ax} \sin(bx)\, dx = \frac{e^{ax} \bigl( a \sin(bx) - b \cos(bx) \bigr)}{a^2 + b^2} + c, \\[8pt]
\int e^{ax} \cos(bx)\, dx = \frac{e^{ax} \bigl( a \cos(bx) + b \sin(bx) \bigr)}{a^2 + b^2} + c
\end{gathered}
$$
Valgono per $a, b \in \mathbb{R}$ non entrambi nulli. Si ottengono integrando per parti due volte; al secondo passaggio ricompare l'integrale di partenza, e l'uguaglianza ottenuta si risolve rispetto a esso.
:::

:::formula{#integrazione-per-sostituzione titolo="Integrazione per sostituzione"}
$$
\begin{gathered}
\int f(g(x))\, g'(x)\, dx = F(g(x)) + c \qquad \bigl( t = g(x), \ dt = g'(x)\, dx \bigr), \\[8pt]
\int f(x)\, dx = \int f(\varphi(t))\, \varphi'(t)\, dt \qquad \bigl( x = \varphi(t), \ dx = \varphi'(t)\, dt \bigr), \\[8pt]
\int_a^b f(g(x))\, g'(x)\, dx = \int_{g(a)}^{g(b)} f(t)\, dt
\end{gathered}
$$
Valgono per $f$ continua, con primitiva $F$, e per $g$, $\varphi$ derivabili con derivata continua. Nella sostituzione inversa $\varphi$ è invertibile, e calcolata la primitiva in $t$ si torna alla variabile $x$ con $t = \varphi^{-1}(x)$. Nell'integrale definito gli estremi si trasformano con la sostituzione e il calcolo si conclude nella variabile $t$.
:::

:::formula{#sostituzioni-tipiche titolo="Sostituzioni tipiche"}
$$
\begin{array}{ll}
\text{funzione di } e^{x} & t = e^{x}, \quad dx = \dfrac{dt}{t} \\[12pt]
\ln x \text{ con il fattore } \dfrac{1}{x} & t = \ln x, \quad dt = \dfrac{dx}{x} \\[12pt]
\sqrt[n]{ax + b} & t = \sqrt[n]{ax + b}, \quad dx = \dfrac{n\,t^{n-1}}{a}\, dt \\[12pt]
\sqrt{a^2 - x^2} & x = a \sin t, \quad dx = a \cos t\, dt \\[8pt]
\text{razionale in } \sin x, \ \cos x & t = \tan \dfrac{x}{2}, \quad dx = \dfrac{2}{1 + t^2}\, dt
\end{array}
$$
Nella terza riga $a \neq 0$. Nella quarta $a > 0$ e $t \in \left[ -\dfrac{\pi}{2}, \dfrac{\pi}{2} \right]$, così che $\sqrt{a^2 - x^2} = a \cos t$. Nell'ultima $x \in (-\pi, \pi)$, e seno e coseno si esprimono con le formule parametriche.
:::

:::formula{#decomposizione-in-fratti-semplici titolo="Decomposizione in fratti semplici"}
$$
\begin{array}{ll}
\text{fattore di } Q(x) & \text{addendi della decomposizione} \\
\hline
x - x_0 & \dfrac{A}{x - x_0} \\[12pt]
(x - x_0)^m & \dfrac{A_1}{x - x_0} + \dfrac{A_2}{(x - x_0)^2} + \cdots + \dfrac{A_m}{(x - x_0)^m} \\[12pt]
x^2 + px + q, \ \ p^2 - 4q < 0 & \dfrac{Ax + B}{x^2 + px + q}
\end{array}
$$
Vale per $\dfrac{P(x)}{Q(x)}$ con il grado di $P$ minore del grado di $Q$; altrimenti si esegue prima la divisione con resto, $\dfrac{P}{Q} = S + \dfrac{R}{Q}$. Le costanti si determinano con il principio di identità dei polinomi oppure sostituendo le radici di $Q$.
:::

:::formula{#integrali-dei-fratti-semplici titolo="Integrali dei fratti semplici"}
$$
\begin{gathered}
\int \frac{A}{x - x_0}\, dx = A \ln |x - x_0| + c, \qquad
\int \frac{A}{(x - x_0)^k}\, dx = -\frac{A}{(k - 1)(x - x_0)^{k-1}} + c \ \ (k \geq 2), \\[8pt]
\int \frac{Ax + B}{x^2 + px + q}\, dx = \frac{A}{2} \ln (x^2 + px + q) + \left( B - \frac{Ap}{2} \right) \int \frac{dx}{x^2 + px + q}
\end{gathered}
$$
La terza vale per $p^2 - 4q < 0$ e si ottiene scrivendo $Ax + B = \dfrac{A}{2}(2x + p) + B - \dfrac{Ap}{2}$, così che il primo addendo contenga la derivata del denominatore.
:::

:::formula{#integrale-del-reciproco-di-un-trinomio titolo="Integrale del reciproco di un trinomio di secondo grado"}
$$
\int \frac{dx}{x^2 + px + q} =
\begin{cases}
\dfrac{2}{\sqrt{-\Delta}} \arctan \dfrac{2x + p}{\sqrt{-\Delta}} + c & \text{se } \Delta < 0 \\[14pt]
-\dfrac{2}{2x + p} + c & \text{se } \Delta = 0 \\[14pt]
\dfrac{1}{\sqrt{\Delta}} \ln \left| \dfrac{2x + p - \sqrt{\Delta}}{2x + p + \sqrt{\Delta}} \right| + c & \text{se } \Delta > 0
\end{cases}
$$
Qui $\Delta = p^2 - 4q$. Il caso $\Delta < 0$ si ottiene completando il quadrato, $x^2 + px + q = \left( x + \dfrac{p}{2} \right)^2 + \dfrac{-\Delta}{4}$, e il caso $\Delta > 0$ con i fratti semplici.
:::

## Integrale definito e aree

Il teorema fondamentale e le proprietà dell'integrale sono nel capitolo [Calcolo integrale](/analisi-1/integrali/teoria).

:::formula{#proprieta-dell-integrale-definito titolo="Proprietà dell'integrale definito"}
$$
\begin{gathered}
\int_a^b \bigl( \alpha f + \beta g \bigr)\, dx = \alpha \int_a^b f\, dx + \beta \int_a^b g\, dx, \qquad
\int_a^b f\, dx = \int_a^c f\, dx + \int_c^b f\, dx, \\[8pt]
\int_b^a f\, dx = -\int_a^b f\, dx, \qquad
f \leq g \implies \int_a^b f\, dx \leq \int_a^b g\, dx, \qquad
\left| \int_a^b f\, dx \right| \leq \int_a^b |f|\, dx
\end{gathered}
$$
Valgono per $f$ e $g$ integrabili, con $\alpha, \beta \in \mathbb{R}$; la monotonia e la disuguaglianza del valore assoluto richiedono $a < b$. L'additività si usa per le funzioni definite a tratti e per quelle con il valore assoluto.
:::

:::formula{#integrali-di-funzioni-simmetriche titolo="Integrali di funzioni pari, dispari e periodiche"}
$$
\begin{gathered}
\int_{-a}^{a} f(x)\, dx = 0 \ \ (f \text{ dispari}), \qquad
\int_{-a}^{a} f(x)\, dx = 2 \int_0^{a} f(x)\, dx \ \ (f \text{ pari}), \\[8pt]
\int_{c}^{c + T} f(x)\, dx = \int_0^{T} f(x)\, dx \ \ (f \text{ periodica di periodo } T)
\end{gathered}
$$
Le prime due valgono per $f$ integrabile su $[-a, a]$ con $a > 0$, la terza per $f$ integrabile su un periodo e ogni $c \in \mathbb{R}$.
:::

:::formula{#teorema-della-media-integrale titolo="Teorema della media integrale"}
$$
\frac{1}{b - a} \int_a^b f(x)\, dx = f(c) \quad \text{per qualche } c \in [a, b]
$$
Vale per $f$ continua su $[a, b]$, con $a < b$. Il primo membro è la media integrale di $f$ su $[a, b]$.
:::

:::formula{#teorema-fondamentale-del-calcolo titolo="Teorema fondamentale del calcolo"}
$$
F(x) = \int_a^x f(t)\, dt \implies F'(x) = f(x), \qquad
\int_a^b f(x)\, dx = G(b) - G(a) = \bigl[ G(x) \bigr]_a^b
$$
Valgono per $f$ continua su $[a, b]$, e nella seconda $G$ è una qualunque primitiva di $f$. La funzione integrale $F$ è quindi una primitiva di $f$, con $F(a) = 0$.
:::

:::formula{#derivata-di-una-funzione-integrale titolo="Derivata di una funzione integrale con estremi variabili"}
$$
\frac{d}{dx} \int_{\alpha(x)}^{\beta(x)} f(t)\, dt = f(\beta(x))\, \beta'(x) - f(\alpha(x))\, \alpha'(x)
$$
Vale per $\alpha$ e $\beta$ derivabili e $f$ continua su un intervallo che contiene i valori di $\alpha$ e $\beta$. Per esempio $\dfrac{d}{dx} \displaystyle\int_0^{x^3} \cos(t^2)\, dt = 3x^2 \cos(x^6)$.
:::

:::formula{#area-tra-due-curve titolo="Area tra due curve"}
$$
\mathcal{A} = \int_a^b \bigl( f(x) - g(x) \bigr)\, dx, \qquad
\mathcal{A} = \int_a^b |f(x)|\, dx
$$
La prima è l'area della regione compresa tra i grafici di $f$ e $g$ e vale per $f$, $g$ continue su $[a, b]$ con $f(x) \geq g(x)$; la seconda è l'area tra il grafico di $f$ e l'asse $x$. Se i grafici si intersecano, l'intervallo si spezza nei punti in cui $f(x) = g(x)$ e in ogni tratto si integra la differenza tra la funzione maggiore e la minore.
:::

## Integrali impropri

Le definizioni e i criteri di convergenza sono nel capitolo [Integrali impropri](/analisi-1/integrali-impropri/teoria).

:::formula{#definizione-di-integrale-improprio titolo="Definizione di integrale improprio"}
$$
\begin{gathered}
\int_a^{+\infty} f(x)\, dx = \lim_{t \to +\infty} \int_a^{t} f(x)\, dx, \qquad
\int_a^{b} f(x)\, dx = \lim_{t \to a^{+}} \int_t^{b} f(x)\, dx, \\[8pt]
\int_{-\infty}^{+\infty} f(x)\, dx = \int_{-\infty}^{c} f(x)\, dx + \int_{c}^{+\infty} f(x)\, dx
\end{gathered}
$$
La prima vale per $f$ integrabile su ogni $[a, t]$; la seconda per $f$ illimitata vicino ad $a$ e integrabile su ogni $[t, b]$ con $a < t < b$. L'integrale converge se il limite esiste finito, diverge se è infinito, è indeterminato se il limite non esiste. Un estremo infinito, oppure un punto vicino al quale $f$ è illimitata, si chiama **punto critico** dell'integrale. Con più punti critici l'integrale si spezza in integrali con un solo punto critico e converge se convergono *tutti*; il carattere non dipende da $c$.
:::

:::formula{#integrali-campione titolo="Integrali campione delle potenze"}
$$
\int_1^{+\infty} \frac{dx}{x^{\alpha}} = \frac{1}{\alpha - 1} \ \ (\alpha > 1), \qquad
\int_0^{1} \frac{dx}{x^{\alpha}} = \frac{1}{1 - \alpha} \ \ (\alpha < 1)
$$
Il primo integrale converge *se e solo se* $\alpha > 1$, il secondo *se e solo se* $\alpha < 1$, e negli altri casi divergono a $+\infty$. Quindi $\displaystyle\int_0^{+\infty} \frac{dx}{x^{\alpha}}$ diverge per ogni $\alpha \in \mathbb{R}$.
:::

:::formula{#campioni-con-punto-critico-qualunque titolo="Campioni con il punto critico in un estremo qualunque"}
$$
\begin{gathered}
\int_a^{b} \frac{dx}{(x - a)^{\alpha}} \ \ \text{e} \ \ \int_a^{b} \frac{dx}{(b - x)^{\alpha}} \ \ \text{convergono} \iff \alpha < 1, \\[8pt]
\int_c^{+\infty} \frac{dx}{x^{\alpha}} \ \ \text{converge} \iff \alpha > 1
\end{gathered}
$$
Valgono per $a < b$ e $c > 0$. Lo spostamento dell'estremo lontano dal punto critico non cambia il carattere.
:::

:::formula{#campioni-con-esponenziale-e-logaritmo titolo="Campioni con esponenziale e logaritmo"}
$$
\begin{gathered}
\int_0^{+\infty} e^{-\lambda x}\, dx = \frac{1}{\lambda} \ \ (\lambda > 0), \qquad
\int_2^{+\infty} \frac{dx}{x\,(\ln x)^{\beta}} \ \ \text{converge} \iff \beta > 1, \\[8pt]
\int_0^{\frac{1}{2}} \frac{dx}{x\,|\ln x|^{\beta}} \ \ \text{converge} \iff \beta > 1
\end{gathered}
$$
Per $\lambda \leq 0$ il primo integrale diverge. I campioni con il logaritmo si riconducono a quelli delle potenze con la sostituzione $u = \ln x$, e servono quando il confronto con le potenze non decide.
:::

:::formula{#criterio-del-confronto-per-gli-integrali titolo="Criterio del confronto per gli integrali"}
$$
\begin{gathered}
0 \leq f(x) \leq g(x), \quad \int g \ \text{converge} \implies \int f \ \text{converge}, \\[8pt]
0 \leq f(x) \leq g(x), \quad \int f \ \text{diverge} \implies \int g \ \text{diverge}
\end{gathered}
$$
Vale con le disuguaglianze soddisfatte vicino al punto critico, per $f$ e $g$ integrabili su ogni intervallo chiuso e limitato che non contiene il punto critico. L'integrale di una funzione non negativa converge oppure diverge a $+\infty$.
:::

:::formula{#confronto-asintotico-per-gli-integrali titolo="Criterio del confronto asintotico per gli integrali"}
$$
f(x) \sim g(x) \ \ (x \to c) \implies \int f \ \text{e} \int g \ \text{hanno lo stesso carattere}
$$
Vale per $f$ e $g$ positive vicino al punto critico $c$, finito o infinito; nella pratica $g$ è un campione, ottenuto con i limiti notevoli o con gli sviluppi di Taylor. Più in generale, posto $L = \displaystyle\lim_{x \to c} \frac{f(x)}{g(x)}$,

- se $0 < L < +\infty$, gli integrali di $f$ e di $g$ hanno lo stesso carattere;
- se $L = 0$ e l'integrale di $g$ converge, converge anche l'integrale di $f$;
- se $L = +\infty$ e l'integrale di $g$ diverge, diverge anche l'integrale di $f$.
:::

:::formula{#ordine-di-infinitesimo-e-di-infinito titolo="Ordine di infinitesimo e di infinito dell'integranda"}
$$
f(x) \sim \frac{k}{x^{p}} \ \ (x \to +\infty), \qquad f(x) \sim \frac{k}{|x - x_0|^{p}} \ \ (x \to x_0)
$$
Vale per $f$ positiva, $k > 0$ e $p > 0$. Per $x \to +\infty$ l'integrale converge se $p > 1$ e diverge se $p \leq 1$; nel punto critico al finito $x_0$ l'integrale converge se $p < 1$ e diverge se $p \geq 1$.
:::

:::formula{#convergenza-assoluta-degli-integrali titolo="Convergenza assoluta degli integrali"}
$$
\int_a^{+\infty} |f(x)|\, dx \ \text{converge} \implies \int_a^{+\infty} f(x)\, dx \ \text{converge}, \qquad
\left| \int_a^{+\infty} f(x)\, dx \right| \leq \int_a^{+\infty} |f(x)|\, dx
$$
Vale per $f$ integrabile su ogni intervallo chiuso e limitato contenuto in $[a, +\infty)$, e lo stesso enunciato vale per i punti critici al finito. Si usa per le integrande di segno variabile, per esempio con $\left| \dfrac{\cos x}{x^2} \right| \leq \dfrac{1}{x^2}$ su $[1, +\infty)$. L'implicazione inversa è falsa, come mostra $\displaystyle\int_1^{+\infty} \frac{\sin x}{x}\, dx$, che converge mentre l'integrale del valore assoluto diverge.
:::

:::formula{#integrali-impropri-notevoli titolo="Integrali impropri notevoli"}
$$
\int_0^{+\infty} e^{-x}\, dx = 1, \qquad
\int_{-\infty}^{+\infty} e^{-x^2}\, dx = \sqrt{\pi}, \qquad
\int_0^{+\infty} \frac{\sin x}{x}\, dx = \frac{\pi}{2}
$$
Il terzo integrale converge e non converge assolutamente. In $0$ la funzione $\dfrac{\sin x}{x}$ tende a $1$, quindi $0$ non è un punto critico.
:::

:::attenzione
La formula fondamentale del calcolo integrale si applica a una funzione continua su tutto l'intervallo chiuso di integrazione. La funzione $\dfrac{1}{x^2}$ non è definita in $0$, e $-\dfrac{1}{x}$ è una sua primitiva soltanto sugli intervalli che non contengono $0$. Perciò la formula non si applica a $\displaystyle\int_{-1}^{1} \frac{dx}{x^2}$, e il calcolo $\left[ -\dfrac{1}{x} \right]_{-1}^{1} = -2$ darebbe un valore negativo per una funzione positiva. Il punto $0$ è un punto critico interno all'intervallo, quindi l'integrale si spezza negli integrali su $[-1, 0)$ e su $(0, 1]$; poiché entrambi divergono a $+\infty$, anche l'integrale di partenza diverge.
:::

## Serie numeriche e serie di potenze

I criteri e le serie di riferimento sono dimostrati nel capitolo [Serie numeriche](/analisi-1/serie/teoria).

:::formula{#somme-parziali-e-condizione-necessaria titolo="Somme parziali e condizione necessaria"}
$$
s_N = \sum_{n=1}^{N} a_n, \qquad \sum_{n=1}^{\infty} a_n = \lim_{N \to +\infty} s_N, \qquad
\sum_{n=1}^{\infty} a_n \ \text{converge} \implies \lim_{n \to +\infty} a_n = 0
$$
La serie converge se il limite delle somme parziali esiste finito, diverge se è infinito, è indeterminata se non esiste. La condizione $a_n \to 0$ è *necessaria* e non sufficiente, come mostra la serie armonica. Il carattere non cambia se si modifica un numero finito di termini.
:::

:::formula{#serie-geometrica titolo="Serie geometrica"}
$$
\sum_{n=0}^{\infty} q^{n} = \frac{1}{1 - q}, \qquad \sum_{n=n_0}^{\infty} q^{n} = \frac{q^{n_0}}{1 - q} \qquad (|q| < 1)
$$
La serie converge *se e solo se* $|q| < 1$, diverge a $+\infty$ per $q \geq 1$ ed è indeterminata per $q \leq -1$. La somma è il primo termine diviso $1 - q$.
:::

:::formula{#serie-telescopica titolo="Serie telescopica e serie di Mengoli"}
$$
\sum_{n=1}^{\infty} (b_n - b_{n+1}) = b_1 - \lim_{n \to +\infty} b_n, \qquad
\sum_{n=1}^{\infty} \frac{1}{n(n+1)} = \sum_{n=1}^{\infty} \left( \frac{1}{n} - \frac{1}{n+1} \right) = 1
$$
La serie telescopica converge *se e solo se* la successione $(b_n)$ converge, e in tal caso vale la prima formula. La scrittura $a_n = b_n - b_{n+1}$ si ottiene di solito con i fratti semplici.
:::

:::formula{#serie-armonica-generalizzata titolo="Serie armonica generalizzata"}
$$
\begin{gathered}
\sum_{n=1}^{\infty} \frac{1}{n^{\alpha}} \ \ \text{converge} \iff \alpha > 1, \\[8pt]
\sum_{n=2}^{\infty} \frac{1}{n^{\alpha} (\ln n)^{\beta}} \ \ \text{converge} \iff \alpha > 1 \ \ \text{oppure} \ \ \alpha = 1, \ \beta > 1
\end{gathered}
$$
Valgono per $\alpha, \beta \in \mathbb{R}$, e quando non convergono le due serie divergono a $+\infty$. Per $\alpha = 1$ la prima è la serie armonica, che diverge. Sono i termini di paragone del confronto asintotico.
:::

:::formula{#confronto-e-confronto-asintotico-per-le-serie titolo="Criteri del confronto e del confronto asintotico"}
$$
\begin{gathered}
0 \leq a_n \leq b_n, \quad \sum b_n \ \text{converge} \implies \sum a_n \ \text{converge}, \\[6pt]
0 \leq a_n \leq b_n, \quad \sum a_n \ \text{diverge} \implies \sum b_n \ \text{diverge}, \\[10pt]
a_n \sim b_n \implies \sum a_n \ \text{e} \ \sum b_n \ \text{hanno lo stesso carattere}
\end{gathered}
$$
Valgono per serie a termini definitivamente non negativi, con $b_n > 0$ nella terza riga. Più in generale, se $\dfrac{a_n}{b_n} \to \ell \in (0, +\infty)$ le due serie hanno lo stesso carattere; se $\ell = 0$ la convergenza di $\sum b_n$ implica quella di $\sum a_n$; se $\ell = +\infty$ la divergenza di $\sum b_n$ implica quella di $\sum a_n$.
:::

:::formula{#criteri-del-rapporto-e-della-radice titolo="Criteri del rapporto e della radice"}
$$
\ell = \lim_{n \to +\infty} \frac{a_{n+1}}{a_n} \ \ \text{oppure} \ \ \ell = \lim_{n \to +\infty} \sqrt[n]{a_n}, \qquad
\ell < 1 \implies \sum a_n \ \text{converge}, \qquad \ell > 1 \implies \sum a_n \ \text{diverge}
$$
Il criterio del rapporto vale per $a_n > 0$, quello della radice per $a_n \geq 0$ definitivamente, con $\ell$ finito oppure $+\infty$. Per $\ell = 1$ i criteri non danno informazioni, perché $\sum \dfrac{1}{n}$ e $\sum \dfrac{1}{n^2}$ danno entrambe $\ell = 1$. Il rapporto è adatto ai fattoriali, la radice alle potenze $n$-esime.
:::

:::formula{#criterio-dell-integrale titolo="Criterio dell'integrale"}
$$
\sum_{n=n_0}^{\infty} f(n) \ \text{converge} \iff \int_{n_0}^{+\infty} f(x)\, dx \ \text{converge}
$$
Vale per $f : [n_0, +\infty) \to \mathbb{R}$ non negativa e decrescente. Con $f(x) = \dfrac{1}{x^{\alpha}}$ dà il carattere della serie armonica generalizzata.
:::

:::formula{#criterio-di-leibniz titolo="Criterio di Leibniz"}
$$
\sum_{n=1}^{\infty} (-1)^{n}\, b_n \ \text{converge}, \qquad |s - s_N| \leq b_{N+1}
$$
Vale se sono soddisfatte per ogni $n$ le condizioni
$$
\begin{cases}
b_n \geq 0 \\[2pt]
b_{n+1} \leq b_n \\[2pt]
\displaystyle\lim_{n \to +\infty} b_n = 0
\end{cases}
$$
dove $s$ è la somma della serie e $s_N$ la somma parziale. L'errore commesso arrestandosi a $s_N$ non supera il primo termine trascurato.
:::

:::formula{#convergenza-assoluta-delle-serie titolo="Convergenza assoluta delle serie"}
$$
\sum_{n=1}^{\infty} |a_n| \ \text{converge} \implies \sum_{n=1}^{\infty} a_n \ \text{converge}, \qquad
\left| \sum_{n=1}^{\infty} a_n \right| \leq \sum_{n=1}^{\infty} |a_n|
$$
Riconduce una serie di segno qualunque a una serie a termini non negativi. L'implicazione inversa è falsa, perché $\sum \dfrac{(-1)^n}{n}$ converge per il criterio di Leibniz, mentre la serie dei moduli è la serie armonica.
:::

:::formula{#somme-di-serie-notevoli titolo="Somme di serie notevoli e linearità"}
$$
\begin{gathered}
\sum_{n=0}^{\infty} \frac{1}{n!} = e, \qquad
\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n} = \ln 2, \qquad
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6}, \\[8pt]
\sum_{n=1}^{\infty} (\alpha\, a_n + \beta\, b_n) = \alpha \sum_{n=1}^{\infty} a_n + \beta \sum_{n=1}^{\infty} b_n
\end{gathered}
$$
La linearità vale se $\sum a_n$ e $\sum b_n$ convergono, con $\alpha, \beta \in \mathbb{R}$. Le prime due somme seguono dalle serie di Taylor di $e^{x}$ e di $\ln(1 + x)$ con $x = 1$; la terza si assume.
:::

:::formula{#raggio-di-convergenza titolo="Serie di potenze e raggio di convergenza"}
$$
\sum_{n=0}^{\infty} c_n (x - x_0)^n, \qquad
R = \frac{1}{\ell}, \qquad \ell = \lim_{n \to +\infty} \frac{|c_{n+1}|}{|c_n|} \ \ \text{oppure} \ \ \ell = \lim_{n \to +\infty} \sqrt[n]{|c_n|}
$$
La serie converge assolutamente per $|x - x_0| < R$ e non converge per $|x - x_0| > R$; negli estremi $x_0 - R$ e $x_0 + R$ il carattere si studia sostituendo il valore. La formula del raggio vale se il limite $\ell$ esiste, finito oppure $+\infty$, con $R = +\infty$ per $\ell = 0$ e $R = 0$ per $\ell = +\infty$; il limite del rapporto richiede $c_n \neq 0$ definitivamente.
:::

:::formula{#serie-di-taylor-elementari titolo="Serie di Taylor elementari"}
$$
\begin{gathered}
e^{x} = \sum_{n=0}^{\infty} \frac{x^n}{n!}, \qquad
\sin x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!}, \qquad
\cos x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!}, \\[8pt]
\frac{1}{1 - x} = \sum_{n=0}^{\infty} x^n, \qquad
\ln(1 + x) = \sum_{n=1}^{\infty} \frac{(-1)^{n+1} x^n}{n}, \qquad
\arctan x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{2n+1}
\end{gathered}
$$
Le prime tre valgono per ogni $x \in \mathbb{R}$; la serie geometrica per $-1 < x < 1$, quella del logaritmo per $-1 < x \leq 1$, quella dell'arcotangente per $-1 \leq x \leq 1$.
:::

## Equazioni differenziali

I metodi risolutivi sono dimostrati nel capitolo [Equazioni differenziali](/analisi-1/equazioni-differenziali/teoria).

:::formula{#problema-di-cauchy titolo="Problema di Cauchy, esistenza e unicità"}
$$
\begin{cases}
y' = f(x, y) \\[2pt]
y(x_0) = y_0
\end{cases}
$$
Se $f$ e $\dfrac{\partial f}{\partial y}$ sono continue in un rettangolo aperto che contiene $(x_0, y_0)$, il problema ha una e una sola soluzione, definita in un intorno di $x_0$. La costante dell'integrale generale si ricava sostituendo $x_0$ e $y_0$.
:::

:::formula{#variabili-separabili titolo="Equazioni a variabili separabili"}
$$
y' = g(x)\, h(y) \implies \int \frac{dy}{h(y)} = \int g(x)\, dx + C
$$
Vale nelle regioni in cui $h(y) \neq 0$, con $g$ continua e $h$ di classe $C^1$. Ogni $\bar{y}$ con $h(\bar{y}) = 0$ dà la soluzione costante $y \equiv \bar{y}$, che si aggiunge a parte all'integrale generale.
:::

:::formula{#lineari-del-primo-ordine titolo="Equazioni lineari del primo ordine"}
$$
\begin{gathered}
y' + a(x)\, y = b(x) \implies y(x) = e^{-A(x)} \left( C + \int b(x)\, e^{A(x)}\, dx \right), \\[8pt]
y(x) = e^{-A(x)} \left( y_0 + \int_{x_0}^{x} b(t)\, e^{A(t)}\, dt \right)
\end{gathered}
$$
Valgono per $a$ e $b$ continue su un intervallo $I$, con $A$ primitiva di $a$ e $C \in \mathbb{R}$. La seconda riga è la soluzione del problema di Cauchy con $y(x_0) = y_0$, nella quale $A(x) = \displaystyle\int_{x_0}^{x} a(t)\, dt$ è la primitiva di $a$ nulla in $x_0$. Le soluzioni sono definite su tutto $I$ e hanno la forma $C e^{-A(x)} + y_p(x)$, con $y_p$ soluzione particolare.
:::

:::formula{#equazione-di-bernoulli titolo="Equazione di Bernoulli"}
$$
y' + a(x)\, y = b(x)\, y^{\alpha}, \qquad z = y^{1 - \alpha} \implies z' + (1 - \alpha)\, a(x)\, z = (1 - \alpha)\, b(x)
$$
Vale per $\alpha \neq 0$, $\alpha \neq 1$, nelle regioni in cui $y \neq 0$, con $y > 0$ se $\alpha$ non è intero. Per $\alpha > 0$ anche $y \equiv 0$ è soluzione.
:::

:::formula{#equazione-caratteristica titolo="Equazioni omogenee del secondo ordine a coefficienti costanti"}
$$
y'' + a y' + b y = 0, \qquad r^2 + a r + b = 0, \qquad \Delta = a^2 - 4b
$$
$$
y(x) =
\begin{cases}
C_1 e^{r_1 x} + C_2 e^{r_2 x} & \text{se } \Delta > 0 \\[4pt]
(C_1 + C_2 x)\, e^{r x} & \text{se } \Delta = 0 \\[4pt]
e^{\lambda x} \bigl( C_1 \cos(\mu x) + C_2 \sin(\mu x) \bigr) & \text{se } \Delta < 0
\end{cases}
$$
Valgono per $a, b \in \mathbb{R}$ e $C_1, C_2 \in \mathbb{R}$. Qui $r_1 \neq r_2$ sono le radici reali, $r = -\dfrac{a}{2}$ la radice doppia, $\lambda \pm i\mu$ le radici complesse coniugate, con $\lambda = -\dfrac{a}{2}$ e $\mu = \dfrac{\sqrt{-\Delta}}{2}$.
:::

:::formula{#struttura-dell-integrale-generale titolo="Struttura dell'integrale generale"}
$$
y = C_1 y_1 + C_2 y_2 + y_p
$$
Vale per $y'' + a y' + b y = f(x)$ con $f$ continua, dove $y_1$ e $y_2$ sono soluzioni non proporzionali dell'omogenea associata e $y_p$ è una qualunque soluzione particolare dell'equazione completa. Se $f = f_1 + f_2$, la somma delle soluzioni particolari relative a $f_1$ e a $f_2$ è una soluzione particolare relativa a $f$.
:::

:::formula{#metodo-di-somiglianza titolo="Metodo di somiglianza"}
$$
\begin{array}{lll}
f(x) & \text{tentativo } y_p & \text{numero associato} \\
\hline
p_n(x) & q_n(x) & 0 \\[4pt]
A\, e^{\gamma x} & a_0\, e^{\gamma x} & \gamma \\[4pt]
p_n(x)\, e^{\gamma x} & q_n(x)\, e^{\gamma x} & \gamma \\[4pt]
A \cos(\omega x) + B \sin(\omega x) & a_0 \cos(\omega x) + b_0 \sin(\omega x) & \pm i\omega \\[4pt]
e^{\gamma x} \bigl( A \cos(\omega x) + B \sin(\omega x) \bigr) & e^{\gamma x} \bigl( a_0 \cos(\omega x) + b_0 \sin(\omega x) \bigr) & \gamma \pm i\omega
\end{array}
$$
Qui $p_n$ è un polinomio di grado $n$ e $q_n$ un polinomio di grado $n$ con coefficienti da determinare. Se il numero associato è radice semplice dell'equazione caratteristica, il tentativo si moltiplica per $x$; se è radice doppia, per $x^2$. I coefficienti si trovano sostituendo $y_p$ nell'equazione.
:::

:::formula{#variazione-delle-costanti titolo="Variazione delle costanti"}
$$
y_p = -y_1 \int \frac{y_2\, f}{W}\, dx + y_2 \int \frac{y_1\, f}{W}\, dx, \qquad W = y_1 y_2' - y_1' y_2
$$
Vale per $f$ continua, con $y_1$ e $y_2$ soluzioni non proporzionali dell'omogenea associata a $y'' + a y' + b y = f(x)$; il wronskiano $W$ non si annulla mai. Si applica anche ai termini noti che non compaiono nella tabella del metodo di somiglianza.
:::

:::formula{#problema-di-cauchy-del-secondo-ordine titolo="Problema di Cauchy del secondo ordine"}
$$
\begin{cases}
y'' + a y' + b y = f(x) \\[2pt]
y(x_0) = y_0 \\[2pt]
y'(x_0) = v_0
\end{cases}
$$
Con $f$ continua su un intervallo $I$ e $x_0 \in I$ il problema ha una e una sola soluzione, definita su tutto $I$. Le costanti $C_1$ e $C_2$ si ricavano imponendo le due condizioni all'integrale generale e alla sua derivata.
:::

:::formula{#equazioni-di-ordine-n titolo="Equazioni lineari omogenee di ordine n"}
$$
\begin{gathered}
y^{(n)} + a_{n-1} y^{(n-1)} + \cdots + a_1 y' + a_0 y = 0, \\[6pt]
r^n + a_{n-1} r^{n-1} + \cdots + a_1 r + a_0 = 0
\end{gathered}
$$
Vale per coefficienti $a_0, \dots, a_{n-1}$ reali e costanti. Una radice reale $r$ di molteplicità $m$ dà le soluzioni $e^{rx}, x e^{rx}, \dots, x^{m-1} e^{rx}$; una coppia di radici $\lambda \pm i\mu$ di molteplicità $m$ dà $x^k e^{\lambda x} \cos(\mu x)$ e $x^k e^{\lambda x} \sin(\mu x)$ per $k = 0, \dots, m-1$. L'integrale generale è la combinazione lineare delle $n$ soluzioni così ottenute.
:::
