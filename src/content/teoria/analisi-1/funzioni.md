---
titolo: Funzioni elementari
sommario: Che cosa è una funzione, quali proprietà se ne studiano, come si trasformano i grafici e quali sono le funzioni elementari con cui si costruiscono tutte le funzioni del corso.
---

## Funzioni, dominio e immagine

:::definizione{#funzione titolo="Funzione, dominio, codominio e immagine"}
Una funzione $f : A \to B$ è una legge che associa a ogni elemento $x \in A$ uno e un solo elemento $f(x) \in B$. L'insieme $A$ è il dominio, $B$ è il codominio; l'immagine è l'insieme dei valori assunti,
$$
f(A) = \{ y \in B : y = f(x) \ \text{per qualche}\ x \in A \} \subseteq B .
$$
Il grafico di $f$ è l'insieme dei punti $(x, f(x))$ del piano, al variare di $x \in A$. Poiché a ogni $x$ corrisponde un solo valore, ogni retta verticale $x = c$ con $c \in A$ interseca il grafico in esattamente un punto. In questo corso $A$ e $B$ sono sottoinsiemi di $\mathbb{R}$; limiti, derivate e integrali si definiscono per funzioni di questo tipo, perciò dominio, immagine e grafico sono il punto di partenza di ogni capitolo successivo.
:::

:::esempio{titolo="Dominio e immagine di x²"}
$f(x) = x^2$ con dominio $\mathbb{R}$. Ogni valore assunto soddisfa $x^2 \geq 0$; viceversa ogni $y \geq 0$ è assunto, perché $f(\sqrt{y}) = y$. Quindi l'immagine è $[0, +\infty)$. Il grafico è una parabola con vertice nell'origine.

::grafico{f="x^2" xmin=-3 xmax=3 ymin=-1 ymax=6 titolo="y = x²: dominio ℝ, immagine [0, +∞)"}
:::

## Iniettività, funzione inversa e composizione

:::definizione{#iniettiva-suriettiva titolo="Funzione iniettiva, suriettiva, biiettiva"}
$f : A \to B$ è

- iniettiva se elementi distinti hanno immagini distinte, cioè se da $f(x_1) = f(x_2)$ segue $x_1 = x_2$;
- suriettiva se l'immagine coincide con il codominio, cioè se ogni $y \in B$ è della forma $f(x)$ per qualche $x \in A$;
- biiettiva se è iniettiva e suriettiva, cioè se ogni $y \in B$ proviene da uno e un solo $x \in A$.

Sul grafico l'iniettività si legge con le rette orizzontali: $f$ è iniettiva se ogni retta $y = c$ interseca il grafico al più in un punto. $f(x) = x^2$ su $\mathbb{R}$ assume lo stesso valore in $1$ e in $-1$, quindi su $\mathbb{R}$ la retta $y = 1$ interseca il grafico in due punti; la restrizione a $[0, +\infty)$ è iniettiva. L'iniettività decide se una funzione è invertibile, come precisato nel blocco seguente.
:::

:::definizione{#funzione-inversa titolo="Funzione inversa"}
Se $f : A \to B$ è biiettiva, per ogni $y \in B$ esiste uno e un solo $x \in A$ con $f(x) = y$; la funzione inversa $f^{-1} : B \to A$ associa a $y$ questo $x$. Valgono
$$
f^{-1}(f(x)) = x \ \text{per ogni}\ x \in A, \qquad f(f^{-1}(y)) = y \ \text{per ogni}\ y \in B .
$$
Il punto $(a, b)$ appartiene al grafico di $f$ se e solo se $(b, a)$ appartiene al grafico di $f^{-1}$, quindi il grafico di $f^{-1}$ è il simmetrico del grafico di $f$ rispetto alla bisettrice $y = x$. Quando $f$ è iniettiva ma il codominio è più grande dell'immagine, si restringe il codominio all'immagine e si inverte la funzione così ottenuta. Con questa costruzione si definiscono le radici, il logaritmo e le inverse trigonometriche di questo capitolo.
:::

:::esempio{titolo="Inversa di una funzione lineare"}
$f(x) = 2x - 3$, da $\mathbb{R}$ a $\mathbb{R}$. L'equazione $y = 2x - 3$ ha l'unica soluzione $x = \dfrac{y + 3}{2}$ per ogni $y$, quindi $f$ è biiettiva e $f^{-1}(y) = \dfrac{y + 3}{2}$. Verifica: $f^{-1}(f(x)) = \dfrac{(2x - 3) + 3}{2} = x$.
:::

:::definizione{#composizione titolo="Funzione composta"}
Date $f : A \to \mathbb{R}$ e $g : B \to \mathbb{R}$, la funzione composta $g \circ f$ è definita da $(g \circ f)(x) = g(f(x))$, sul dominio
$$
\{ x \in A : f(x) \in B \} .
$$
La composizione legge le funzioni complicate come catene di funzioni elementari: $h(x) = \sqrt{x^2 + 1}$ è la composta di $f(x) = x^2 + 1$ con $g(y) = \sqrt{y}$. Questa lettura guida il calcolo del dominio naturale e, nel capitolo sulle derivate, la regola di derivazione della funzione composta.
:::

:::attenzione
La composizione dipende dall'ordine dei fattori. Con $f(x) = x + 1$ e $g(x) = x^2$ si ha $(g \circ f)(x) = (x + 1)^2$ e $(f \circ g)(x) = x^2 + 1$: in $x = 1$ i valori sono $4$ e $2$, quindi $g \circ f \neq f \circ g$.
:::

## Simmetrie, periodicità, monotonia e limitatezza

:::definizione{#pari-dispari titolo="Funzione pari e funzione dispari"}
Sia $A$ simmetrico rispetto all'origine, cioè $-x \in A$ per ogni $x \in A$. $f : A \to \mathbb{R}$ è

- pari se $f(-x) = f(x)$ per ogni $x \in A$; il grafico è simmetrico rispetto all'asse $y$;
- dispari se $f(-x) = -f(x)$ per ogni $x \in A$; il grafico è simmetrico rispetto all'origine.

Sono pari $x^2$, $x^4$, $|x|$, $\cos x$; sono dispari $x$, $x^3$, $\sin x$, $\tan x$. Una simmetria dimezza il lavoro: negli studi di funzione si studia $f$ per $x \geq 0$ e si riflette il grafico.
:::

:::definizione{#periodica titolo="Funzione periodica"}
$f$ è periodica di periodo $T > 0$ se $f(x + T) = f(x)$ per ogni $x$ del dominio con $x + T$ nel dominio. Il più piccolo periodo positivo, quando esiste, è il periodo minimo. $\sin x$ e $\cos x$ hanno periodo minimo $2\pi$; $\tan x$ ha periodo minimo $\pi$. Il grafico si ripete per traslazione orizzontale di $T$, quindi lo studio di una funzione periodica si svolge su un solo intervallo di ampiezza $T$. Per lo stesso motivo le equazioni trigonometriche hanno infinite soluzioni, elencate con un intero $k$.
:::

:::definizione{#monotona titolo="Funzione monotona"}
$f$ è crescente su un insieme $I$ del dominio se da $x_1 < x_2$ segue $f(x_1) \leq f(x_2)$, strettamente crescente se segue $f(x_1) < f(x_2)$; decrescente e strettamente decrescente si definiscono con le disuguaglianze opposte. Una funzione strettamente monotona è iniettiva, perché punti distinti hanno immagini distinte, quindi è invertibile sulla sua immagine; l'inversa è strettamente monotona nello stesso verso. Applicare una funzione strettamente crescente ai due membri di una disuguaglianza conserva il verso; applicare una funzione strettamente decrescente lo rovescia. Su questa proprietà si fondano le disequazioni esponenziali e logaritmiche di questo capitolo.
:::

:::definizione{#limitata titolo="Funzione limitata"}
$f$ è limitata superiormente se esiste $M \in \mathbb{R}$ con $f(x) \leq M$ per ogni $x$ del dominio, limitata inferiormente se esiste $m \in \mathbb{R}$ con $f(x) \geq m$, limitata se valgono entrambe le condizioni, cioè se $|f(x)| \leq C$ per una costante $C$. $\sin x$ e $\cos x$ sono limitate, con valori in $[-1, 1]$; $x^2$ è limitata inferiormente e illimitata superiormente. La limitatezza si legge sull'immagine e ritorna nel capitolo sui limiti, nel teorema della funzione limitata per una infinitesima e nel teorema di Weierstrass.
:::

## Trasformazioni del grafico

:::teorema{#trasformazioni-del-grafico titolo="Trasformazioni del grafico"}
Dal grafico di $f$, per $k > 0$ e $a > 1$, si ottengono i grafici seguenti:

- $f(x) + k$: traslazione verticale verso l'alto di $k$; $f(x) - k$: verso il basso;
- $f(x - k)$: traslazione orizzontale verso destra di $k$; $f(x + k)$: verso sinistra;
- $a\,f(x)$: dilatazione verticale di fattore $a$; $\dfrac{f(x)}{a}$: compressione verticale;
- $f(a x)$: compressione orizzontale di fattore $a$; $f\!\left(\dfrac{x}{a}\right)$: dilatazione orizzontale;
- $-f(x)$: riflessione rispetto all'asse $x$; $f(-x)$: riflessione rispetto all'asse $y$;
- $|f(x)|$: la parte di grafico con $f(x) \geq 0$ resta al suo posto, la parte con $f(x) < 0$ si riflette sopra l'asse $x$;
- $f(|x|)$: la parte di grafico con $x \geq 0$ resta al suo posto e viene riflessa anche a sinistra dell'asse $y$; la funzione ottenuta è pari.

Le verifiche seguono dalla definizione di grafico: per esempio $(x_0, y_0)$ appartiene al grafico di $f$ se e solo se $(x_0 + k, y_0)$ appartiene al grafico di $f(x - k)$. Con queste regole il grafico di molte funzioni si traccia a partire dai grafici elementari, senza uno studio di funzione completo.
:::

:::esempio{titolo="Dal grafico di x² a quello di |x² − 1|"}
Da $x^2$ si passa a $x^2 - 1$ con la traslazione verticale verso il basso di $1$; poiché $x^2 - 1 < 0$ per $-1 < x < 1$, il valore assoluto riflette sopra l'asse $x$ l'arco compreso tra $-1$ e $1$ e lascia il resto al suo posto.

::grafico{f="abs(x^2-1)" xmin=-3 xmax=3 ymin=-1 ymax=4 titolo="y = |x² − 1|: l'arco con −1 < x < 1 è riflesso sopra l'asse x"}
:::

## Potenze e radici

:::definizione{#potenze titolo="Potenze a esponente naturale e intero negativo"}
Per $n \in \mathbb{N}$, $n \geq 1$, la potenza $f(x) = x^n$ ha dominio $\mathbb{R}$.

- $n$ pari: funzione pari, immagine $[0, +\infty)$, strettamente decrescente su $(-\infty, 0]$ e strettamente crescente su $[0, +\infty)$.
- $n$ dispari: funzione dispari, immagine $\mathbb{R}$, strettamente crescente su $\mathbb{R}$.

Per esponente intero negativo si pone $x^{-n} = \dfrac{1}{x^n}$, con dominio $\mathbb{R} \setminus \{0\}$. Il caso di riferimento è $x^{-1} = \dfrac{1}{x}$: funzione dispari, strettamente decrescente su $(-\infty, 0)$ e su $(0, +\infty)$, con immagine $\mathbb{R} \setminus \{0\}$. Polinomi e funzioni razionali si costruiscono con somme e quozienti di queste potenze, perciò i loro grafici ricorrono in tutti gli esempi del corso.

::grafico{f="x^3" xmin=-2.5 xmax=2.5 ymin=-6 ymax=6 titolo="y = x³: dispari, strettamente crescente, immagine ℝ"}

::grafico{f="1/x" xmin=-4 xmax=4 ymin=-4 ymax=4 asintoti="x=0;y=0" titolo="y = 1/x: il grafico si avvicina alle rette x = 0 e y = 0"}
:::

:::definizione{#radici titolo="Radici e potenze a esponente razionale"}
Per $n$ pari la potenza $x^n$ ristretta a $[0, +\infty)$ è strettamente crescente con immagine $[0, +\infty)$, quindi è invertibile: l'inversa è la radice $n$-esima $\sqrt[n]{x} : [0, +\infty) \to [0, +\infty)$, strettamente crescente. Per $n$ dispari la potenza $x^n$ è strettamente crescente su tutto $\mathbb{R}$, perciò la radice $n$-esima è definita su $\mathbb{R}$; per esempio $\sqrt[3]{-8} = -2$. Per $x > 0$, $m \in \mathbb{Z}$ e $n \geq 1$ si pone
$$
x^{\frac{m}{n}} = \sqrt[n]{x^m} ,
$$
in accordo con le proprietà delle potenze. Il grafico di $\sqrt{x}$ è il simmetrico rispetto alla bisettrice $y = x$ del ramo con $x \geq 0$ della parabola $y = x^2$, perché le due funzioni sono una l'inversa dell'altra.

::grafico{f="sqrt(x)" xmin=-1 xmax=9 ymin=-1 ymax=4 titolo="y = √x: dominio e immagine [0, +∞)"}
:::

:::attenzione
Per indice pari la radice di una potenza restituisce il valore assoluto della base: $\sqrt{x^2} = |x|$. Per $x = -3$ si ha $\sqrt{(-3)^2} = \sqrt{9} = 3 = |-3|$, mentre la base vale $-3$.
:::

## Esponenziale e logaritmo

:::definizione{#esponenziale titolo="Funzione esponenziale"}
Per $a > 0$, $a \neq 1$, la funzione esponenziale $f(x) = a^x$ ha dominio $\mathbb{R}$ e immagine $(0, +\infty)$; in particolare $a^x > 0$ per ogni $x$. Valgono le proprietà delle potenze:
$$
a^{x+y} = a^x\, a^y, \qquad a^{x-y} = \frac{a^x}{a^y}, \qquad (a^x)^y = a^{x y}, \qquad a^0 = 1 .
$$
Per $a > 1$ la funzione è strettamente crescente; per $0 < a < 1$ è strettamente decrescente. Poiché $a^x = \left(\dfrac{1}{a}\right)^{-x}$, i grafici relativi a basi reciproche sono simmetrici rispetto all'asse $y$. La base più usata nell'analisi è il numero $e = 2{,}71828\ldots$; il comportamento agli estremi del dominio e i limiti notevoli con $e$ si trovano nel capitolo sui limiti.

::grafico{f="exp(x)" xmin=-3 xmax=3 ymin=-1 ymax=8 asintoti="y=0" titolo="y = eˣ: immagine (0, +∞), strettamente crescente"}
:::

:::definizione{#logaritmo titolo="Logaritmo e cambio di base"}
Per $a > 0$, $a \neq 1$, l'esponenziale $a^x$ è strettamente monotona con immagine $(0, +\infty)$, quindi è invertibile: l'inversa è il logaritmo in base $a$,
$$
y = \log_a x \iff a^y = x \qquad (x > 0) .
$$
Il logaritmo ha dominio $(0, +\infty)$ e immagine $\mathbb{R}$; è strettamente crescente per $a > 1$ e strettamente decrescente per $0 < a < 1$. Dalle proprietà dell'esponenziale seguono, per $x, y > 0$ e $\alpha \in \mathbb{R}$:
$$
\log_a (x y) = \log_a x + \log_a y, \qquad \log_a \frac{x}{y} = \log_a x - \log_a y, \qquad \log_a x^{\alpha} = \alpha \log_a x ,
$$
con $\log_a 1 = 0$ e $\log_a a = 1$. Il cambio di base, per $b > 0$, $b \neq 1$, è
$$
\log_a x = \frac{\log_b x}{\log_b a} ,
$$
e si ottiene applicando $\log_b$ all'identità $a^{\log_a x} = x$, poiché $\log_b\!\left(a^{\log_a x}\right) = \log_a x \cdot \log_b a$. Il logaritmo in base $e$ si indica con $\ln x$; grazie al cambio di base ogni logaritmo si riconduce a questo. Il grafico di $\log_a x$ è il simmetrico di quello di $a^x$ rispetto alla bisettrice $y = x$.

::grafico{f="log(x)" xmin=-1 xmax=8 ymin=-3 ymax=3 asintoti="x=0" titolo="y = ln x: dominio (0, +∞), immagine ℝ"}
:::

:::attenzione
L'identità $\log_a x^{\alpha} = \alpha \log_a x$ richiede $x > 0$. Per esponente pari e base negativa la scrittura corretta usa il valore assoluto, $\log_a x^2 = 2 \log_a |x|$ per $x \neq 0$: con $x = -2$ si ha $\log_2 x^2 = \log_2 4 = 2$, mentre $\log_2(-2)$ non è definito.
:::

## Funzioni trigonometriche e loro inverse

:::definizione{#trigonometriche titolo="Seno, coseno e tangente"}
Sulla circonferenza di centro l'origine e raggio $1$, il punto raggiunto ruotando di un angolo $x$, misurato in radianti a partire da $(1, 0)$ in verso antiorario, ha coordinate $(\cos x, \sin x)$. Le due funzioni hanno dominio $\mathbb{R}$, immagine $[-1, 1]$ e periodo minimo $2\pi$; $\sin x$ è dispari e $\cos x$ è pari. La tangente è
$$
\tan x = \frac{\sin x}{\cos x} ,
$$
con dominio $x \neq \dfrac{\pi}{2} + k\pi$ ($k \in \mathbb{Z}$), immagine $\mathbb{R}$, periodo minimo $\pi$; è dispari. Valori notevoli:
$$
\begin{array}{c|ccccc}
x & 0 & \dfrac{\pi}{6} & \dfrac{\pi}{4} & \dfrac{\pi}{3} & \dfrac{\pi}{2} \\[8pt]
\hline
\sin x & 0 & \dfrac{1}{2} & \dfrac{\sqrt{2}}{2} & \dfrac{\sqrt{3}}{2} & 1 \\[10pt]
\cos x & 1 & \dfrac{\sqrt{3}}{2} & \dfrac{\sqrt{2}}{2} & \dfrac{1}{2} & 0 \\[10pt]
\tan x & 0 & \dfrac{\sqrt{3}}{3} & 1 & \sqrt{3} & \text{n.d.}
\end{array}
$$
Questi valori, insieme alle simmetrie e alla periodicità, permettono di scrivere in forma chiusa le soluzioni delle equazioni trigonometriche degli esercizi.

::grafico{f="sin(x)" xmin=-7 xmax=7 ymin=-1.5 ymax=1.5 titolo="y = sin x: periodica di periodo 2π, immagine [−1, 1]"}
:::

:::teorema{#identita-trigonometriche titolo="Identità principali"}
Per ogni $x, y \in \mathbb{R}$:
$$
\sin^2 x + \cos^2 x = 1 ,
$$
che è il teorema di Pitagora sulla circonferenza unitaria. Formule di addizione:
$$
\sin(x + y) = \sin x \cos y + \cos x \sin y, \qquad
\cos(x + y) = \cos x \cos y - \sin x \sin y .
$$
Con $y = x$ si ottengono le formule di duplicazione:
$$
\sin 2x = 2 \sin x \cos x, \qquad
\cos 2x = \cos^2 x - \sin^2 x = 2\cos^2 x - 1 = 1 - 2\sin^2 x .
$$
L'identità fondamentale e le duplicazioni riconducono molte equazioni trigonometriche a una sola funzione incognita, come negli esercizi svolti di questo argomento.
:::

:::definizione{#inverse-trigonometriche titolo="Arcoseno, arcocoseno e arcotangente"}
Le funzioni trigonometriche sono periodiche, quindi si invertono dopo una restrizione a un intervallo di stretta monotonia.

- $\sin x$ ristretto a $\left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right]$ è strettamente crescente con immagine $[-1, 1]$; l'inversa è $\arcsin : [-1, 1] \to \left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right]$, strettamente crescente e dispari.
- $\cos x$ ristretto a $[0, \pi]$ è strettamente decrescente con immagine $[-1, 1]$; l'inversa è $\arccos : [-1, 1] \to [0, \pi]$, strettamente decrescente.
- $\tan x$ ristretta a $\left(-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right)$ è strettamente crescente con immagine $\mathbb{R}$; l'inversa è $\arctan : \mathbb{R} \to \left(-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right)$, strettamente crescente e dispari.

Per definizione $\arcsin m$ è l'unico angolo in $\left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right]$ con seno uguale a $m$; con questi angoli si scrivono le soluzioni delle equazioni trigonometriche. L'arcotangente, definita su tutto $\mathbb{R}$ e limitata, ricorre negli esempi dei capitoli su limiti e derivate.

::grafico{f="atan(x)" xmin=-6 xmax=6 ymin=-2 ymax=2 asintoti="y=1.5708;y=-1.5708" titolo="y = arctan x: il grafico si avvicina alle rette y = π/2 e y = −π/2"}
:::

:::definizione{#iperboliche titolo="Funzioni iperboliche"}
Seno e coseno iperbolico sono definiti a partire dall'esponenziale:
$$
\sinh x = \frac{e^x - e^{-x}}{2}, \qquad \cosh x = \frac{e^x + e^{-x}}{2}, \qquad \tanh x = \frac{\sinh x}{\cosh x} .
$$
Tutte e tre hanno dominio $\mathbb{R}$. $\sinh x$ è dispari, strettamente crescente, con immagine $\mathbb{R}$; $\cosh x$ è pari, con immagine $[1, +\infty)$ e valore minimo $\cosh 0 = 1$. Identità fondamentale:
$$
\cosh^2 x - \sinh^2 x = 1 ,
$$
che si verifica sviluppando i quadrati: $\cosh^2 x - \sinh^2 x = \dfrac{e^{2x} + 2 + e^{-2x}}{4} - \dfrac{e^{2x} - 2 + e^{-2x}}{4} = 1$. Il punto $(\cosh t, \sinh t)$ appartiene quindi all'iperbole $x^2 - y^2 = 1$, da cui il nome. Le funzioni iperboliche compaiono nelle primitive di alcune funzioni irrazionali, nel capitolo sugli integrali.

::grafico{f="(exp(x)+exp(-x))/2" xmin=-3 xmax=3 ymin=-1 ymax=6 titolo="y = cosh x: pari, immagine [1, +∞)"}
:::

## Dominio naturale

:::definizione{#dominio-naturale titolo="Dominio naturale"}
Quando una funzione è assegnata con una sola espressione analitica, il dominio naturale è l'insieme dei numeri reali per cui ogni operazione dell'espressione è definita. Le condizioni da imporre:

- un denominatore è diverso da $0$;
- l'argomento di una radice di indice pari è maggiore o uguale a $0$;
- l'argomento di un logaritmo è maggiore di $0$;
- l'argomento della tangente è diverso da $\dfrac{\pi}{2} + k\pi$;
- l'argomento di $\arcsin$ e di $\arccos$ appartiene a $[-1, 1]$;
- in $f(x)^{g(x)}$ la base $f(x)$ è maggiore di $0$.

Le condizioni devono valere tutte nello stesso punto, perciò si raccolgono in un sistema e il dominio è l'insieme delle sue soluzioni. Il dominio naturale è il primo passo di ogni studio di funzione e di ogni calcolo di limite.
:::

:::esempio{titolo="Dominio con logaritmo e radice"}
$f(x) = \dfrac{\ln(x - 1)}{\sqrt{4 - x^2}}$. Il logaritmo richiede argomento positivo; la radice compare al denominatore, quindi il suo argomento è maggiore strettamente di $0$:
$$
\begin{cases}
x - 1 > 0 \\[4pt]
4 - x^2 > 0
\end{cases}
\qquad\text{cioè}\qquad
\begin{cases}
x > 1 \\[4pt]
-2 < x < 2
\end{cases}
$$
quindi $D = (1, 2)$.
:::

## Equazioni e disequazioni elementari

:::teorema{#equazioni-esponenziali-logaritmiche titolo="Equazioni e disequazioni esponenziali e logaritmiche"}
Per $a > 0$, $a \neq 1$, l'equazione $a^x = b$ ha soluzione se e solo se $b > 0$, perché l'immagine dell'esponenziale è $(0, +\infty)$; in tal caso l'unica soluzione è $x = \log_a b$, per l'iniettività. Per le disequazioni si applica la stretta monotonia:

- se $a > 1$, allora $a^{f(x)} > a^{g(x)} \iff f(x) > g(x)$;
- se $0 < a < 1$, allora $a^{f(x)} > a^{g(x)} \iff f(x) < g(x)$.

Per i logaritmi al confronto degli argomenti si aggiungono le condizioni di esistenza, che entrano in sistema: per $a > 1$,
$$
\log_a f(x) > \log_a g(x)
\iff
\begin{cases}
f(x) > g(x) \\[4pt]
g(x) > 0
\end{cases}
$$
dove la condizione $f(x) > 0$ segue dalle altre due; per $0 < a < 1$ il verso del confronto tra gli argomenti si rovescia. Questi criteri riducono ogni disequazione esponenziale o logaritmica elementare a una disequazione algebrica.
:::

:::esempio
$2^x \geq 8$. Poiché $8 = 2^3$ e la base $2$ è maggiore di $1$, la disequazione equivale a $x \geq 3$. Con base minore di $1$: da $\left(\dfrac{1}{2}\right)^{x} \geq 8 = \left(\dfrac{1}{2}\right)^{-3}$, poiché la base è minore di $1$, segue $x \leq -3$.
:::

:::teorema{#equazioni-trigonometriche titolo="Equazioni trigonometriche elementari"}
Le equazioni $\sin x = m$ e $\cos x = m$ hanno soluzione soltanto per $m \in [-1, 1]$, perché l'immagine di seno e coseno è $[-1, 1]$. In tal caso, con $k \in \mathbb{Z}$:

- $\sin x = m$ ha soluzioni $x = \arcsin m + 2k\pi$ oppure $x = \pi - \arcsin m + 2k\pi$;
- $\cos x = m$ ha soluzioni $x = \arccos m + 2k\pi$ oppure $x = -\arccos m + 2k\pi$;
- $\tan x = m$, per ogni $m \in \mathbb{R}$, ha soluzioni $x = \arctan m + k\pi$.

Le formule seguono dalle simmetrie e dalla periodicità: sulla circonferenza unitaria i punti con ordinata $m$ sono due in ogni giro, con angoli $\arcsin m$ e $\pi - \arcsin m$; i punti con ascissa $m$ hanno angoli opposti. Le equazioni più generali si riconducono a queste forme con le identità principali, come negli esercizi svolti.
:::

:::esempio
$\cos x = \dfrac{1}{2}$. Poiché $\arccos \dfrac{1}{2} = \dfrac{\pi}{3}$, le soluzioni sono $x = \dfrac{\pi}{3} + 2k\pi$ oppure $x = -\dfrac{\pi}{3} + 2k\pi$, con $k \in \mathbb{Z}$.
:::
