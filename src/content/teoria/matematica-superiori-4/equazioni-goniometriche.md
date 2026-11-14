---
titolo: Equazioni goniometriche
sommario: Come si risolvono le equazioni in seno, coseno e tangente, dalle equazioni elementari lette sulla circonferenza goniometrica alle equazioni riconducibili, lineari e omogenee, con le soluzioni scritte su tutto l'asse reale o in un intervallo assegnato.
---

## Equazioni goniometriche e loro soluzioni

:::definizione{#equazione-goniometrica titolo="Equazione goniometrica"}
Un'**equazione goniometrica** è un'equazione in cui l'incognita $x$ compare nell'argomento di almeno una funzione goniometrica, cioè di un seno, di un coseno, di una tangente o di una cotangente. Sono goniometriche, per esempio, le equazioni
$$
2\sin x = 1 ,
\qquad
\cos (2x) = \cos x ,
\qquad
\tan^2 x - 3 = 0 .
$$
Una **soluzione** è un numero reale che appartiene al dominio di tutte le espressioni dell'equazione e che, sostituito a $x$, rende uguali i due membri. Il numero $\dfrac{\pi}{6}$ è una soluzione di $2\sin x = 1$, perché $2 \sin \dfrac{\pi}{6} = 2 \cdot \dfrac{1}{2} = 1$. Il numero $\dfrac{\pi}{3}$ invece non lo è, perché $2\sin\dfrac{\pi}{3} = \sqrt{3}$ e $\sqrt{3} \neq 1$.

Quando l'equazione contiene una tangente o una frazione, prima di risolverla si scrivono le **condizioni di esistenza**. Nell'equazione $\tan x = 2\sin x$ serve $\cos x \neq 0$, cioè $x \neq \dfrac{\pi}{2} + k\pi$, perché in quei punti la tangente non è definita.
:::

:::osservazione{#soluzioni-periodiche titolo="Infinite soluzioni e periodicità"}
Seno e coseno hanno periodo $2\pi$, la tangente ha periodo $\pi$. Se $x_0$ risolve $2\sin x = 1$, allora anche $x_0 + 2\pi$, $x_0 + 4\pi$, $x_0 - 2\pi$ la risolvono, perché il seno assume in questi punti lo stesso valore. Un'equazione goniometrica che ha una soluzione ne ha quindi infinite.

Per scriverle tutte insieme si usa un numero intero $k$, che può essere positivo, negativo o nullo, e si scrive $k \in \mathbb{Z}$. Le soluzioni di $2\sin x = 1$ che si ottengono da $\dfrac{\pi}{6}$ sono
$$
x = \frac{\pi}{6} + 2k\pi , \qquad k \in \mathbb{Z} .
$$
Con $k = 0$ si trova $\dfrac{\pi}{6}$, con $k = 1$ si trova $\dfrac{13\pi}{6}$, con $k = -1$ si trova $-\dfrac{11\pi}{6}$. Una scrittura di questo tipo si chiama **famiglia di soluzioni**, e l'insieme di tutte le famiglie è la **soluzione generale** dell'equazione. In tutto l'argomento $k$ indica sempre un numero intero qualsiasi.
:::

:::richiamo{titolo="Funzioni goniometriche inverse"}
Per $-1 \leq m \leq 1$:
$$
\arcsin m \in \left[ -\frac{\pi}{2}, \frac{\pi}{2} \right] \text{ e } \sin(\arcsin m) = m ,
\qquad
\arccos m \in [0, \pi] \text{ e } \cos(\arccos m) = m .
$$
Per ogni $m$ reale:
$$
\arctan m \in \left( -\frac{\pi}{2}, \frac{\pi}{2} \right) \text{ e } \tan(\arctan m) = m .
$$
:::

## Equazioni elementari in seno

::::teorema{#equazione-seno titolo="Equazione elementare sin x = m"}
Sia $m$ un numero reale.
- Se $m < -1$ oppure $m > 1$, l'equazione $\sin x = m$ **non ha soluzioni**.
- Se $-1 \leq m \leq 1$, posto $\alpha = \arcsin m$, le soluzioni sono
$$
x = \alpha + 2k\pi
\qquad \text{oppure} \qquad
x = \pi - \alpha + 2k\pi ,
\qquad k \in \mathbb{Z} .
$$

Con il teorema la risoluzione si svolge in due passi. Si trova un angolo $\alpha$ che ha seno $m$, poi si scrivono le due famiglie. Per $\sin x = \dfrac{1}{2}$ si ha $\alpha = \dfrac{\pi}{6}$, quindi le soluzioni sono $x = \dfrac{\pi}{6} + 2k\pi$ oppure $x = \dfrac{5\pi}{6} + 2k\pi$, perché $\pi - \dfrac{\pi}{6} = \dfrac{5\pi}{6}$.

::grafico{curve="cos(t),sin(t),0,6.29" vettori="0,0,0.866,0.5,P₁;0,0,-0.866,0.5,P₂" segmenti="-1.4,0.5,1.4,0.5;0.866,0,0.866,0.5;-0.866,0,-0.866,0.5" punti="0.866,0.5,pieno;-0.866,0.5,pieno" xmin=-1.5 xmax=1.5 ymin=-1.5 ymax=1.5 uguale=1 legenda=0 titolo="La retta $y = \dfrac{1}{2}$ taglia la circonferenza goniometrica in $P_1$, di angolo $\dfrac{\pi}{6}$, e in $P_2$, di angolo $\dfrac{5\pi}{6}$: sono i due punti con seno $\dfrac{1}{2}$"}

:::dimostrazione
L'idea è leggere l'equazione sulla circonferenza goniometrica, dove il seno di un angolo è l'ordinata del punto corrispondente. Risolvere $\sin x = m$ significa quindi trovare i punti della circonferenza che hanno ordinata $m$, cioè i punti comuni alla circonferenza $X^2 + Y^2 = 1$ e alla retta orizzontale $Y = m$.

Se $|m| > 1$, la retta $Y = m$ si trova fuori dalla striscia $-1 \leq Y \leq 1$ che contiene la circonferenza, perciò non ha punti comuni con essa e l'equazione non ha soluzioni.

Se $|m| \leq 1$, l'angolo $\alpha = \arcsin m$ ha seno $m$, quindi il punto $P_1 = (\cos\alpha, \sin\alpha)$ sta sulla retta. Il punto $P_2$ simmetrico di $P_1$ rispetto all'asse $y$ ha la stessa ordinata e corrisponde all'angolo $\pi - \alpha$, perché $\sin(\pi - \alpha) = \sin\alpha$ per la formula degli archi supplementari. Una retta orizzontale taglia la circonferenza in al più due punti, quindi $P_1$ e $P_2$ sono gli unici punti con ordinata $m$. Ogni angolo che termina in $P_1$ differisce da $\alpha$ per un multiplo di $2\pi$, e ogni angolo che termina in $P_2$ differisce da $\pi - \alpha$ per un multiplo di $2\pi$. Ne seguono le due famiglie dell'enunciato.
:::
::::

:::esempio{titolo="Una equazione con un valore notevole"}
Si risolve $2\sin x + \sqrt{2} = 0$. Si isola il seno e si ottiene $\sin x = -\dfrac{\sqrt{2}}{2}$, che è compreso tra $-1$ e $1$. Si ha $\alpha = \arcsin\left(-\dfrac{\sqrt{2}}{2}\right) = -\dfrac{\pi}{4}$, quindi
$$
x = -\frac{\pi}{4} + 2k\pi
\qquad \text{oppure} \qquad
x = \pi + \frac{\pi}{4} + 2k\pi = \frac{5\pi}{4} + 2k\pi .
$$
La prima famiglia si può scrivere anche $x = \dfrac{7\pi}{4} + 2k\pi$, perché $-\dfrac{\pi}{4}$ e $\dfrac{7\pi}{4}$ differiscono di $2\pi$. In $[0, 2\pi)$ le soluzioni sono $\dfrac{5\pi}{4}$ e $\dfrac{7\pi}{4}$, la prima nel terzo quadrante e la seconda nel quarto, dove il seno è negativo.
:::

:::esempio{titolo="Una equazione con un valore non notevole"}
L'equazione $3\sin x = 1$ equivale a $\sin x = \dfrac{1}{3}$. Il numero $\dfrac{1}{3}$ è compreso tra $-1$ e $1$, ma non è il seno di un angolo notevole. Le soluzioni si scrivono con l'arcoseno:
$$
x = \arcsin\frac{1}{3} + 2k\pi
\qquad \text{oppure} \qquad
x = \pi - \arcsin\frac{1}{3} + 2k\pi .
$$
Con la calcolatrice in radianti si trova $\arcsin\dfrac{1}{3} \approx 0{,}340$, quindi in $[0, 2\pi)$ le soluzioni sono circa $0{,}340$ e $2{,}802$. L'equazione $3\sin x = 4$, invece, **non ha soluzioni**, perché equivale a $\sin x = \dfrac{4}{3}$ e $\dfrac{4}{3} > 1$.
:::

:::osservazione{titolo="La lettura sul grafico"}
Le soluzioni di $\sin x = m$ sono anche le ascisse dei punti in cui il grafico di $y = \sin x$ incontra la retta orizzontale $y = m$. Sul grafico si vedono tutte insieme le infinite soluzioni. Per $m = \dfrac{1}{2}$ i punti di una famiglia distano $2\pi$ l'uno dall'altro, e i punti delle due famiglie si alternano.

::grafico{f="sin(x);0.5" punti="-5.7596,0.5,pieno;-3.6652,0.5,pieno;0.5236,0.5,pieno;2.6180,0.5,pieno;6.8068,0.5,pieno;8.9012,0.5,pieno" xmin=-7 xmax=10 ymin=-1.5 ymax=1.5 legenda="y = \sin x;y = \dfrac{1}{2}" titolo="Il grafico di $\sin x$ incontra la retta $y = \dfrac{1}{2}$ nei punti $\dfrac{\pi}{6} + 2k\pi$ e $\dfrac{5\pi}{6} + 2k\pi$; qui si vedono quelli con $k = -1, 0, 1$"}

:::

:::teorema{#casi-particolari titolo="Casi particolari delle equazioni in seno e coseno"}
Per $m = 0$ e $m = \pm 1$ le due famiglie si possono raccogliere in una sola:
$$
\begin{aligned}
\sin x = 0 &\iff x = k\pi , \\[4pt]
\sin x = 1 &\iff x = \frac{\pi}{2} + 2k\pi , \\[4pt]
\sin x = -1 &\iff x = -\frac{\pi}{2} + 2k\pi , \\[4pt]
\cos x = 0 &\iff x = \frac{\pi}{2} + k\pi , \\[4pt]
\cos x = 1 &\iff x = 2k\pi , \\[4pt]
\cos x = -1 &\iff x = \pi + 2k\pi .
\end{aligned}
$$
Le formule seguono dal teorema sull'equazione elementare. Per $\sin x = 1$ si ha $\alpha = \dfrac{\pi}{2}$ e $\pi - \alpha = \dfrac{\pi}{2}$, quindi le due famiglie coincidono; sulla circonferenza la retta $Y = 1$ è tangente nel punto $(0, 1)$. Per $\sin x = 0$ le famiglie sono $2k\pi$ e $\pi + 2k\pi$, cioè tutti i multipli pari e dispari di $\pi$, che insieme formano $k\pi$. Per esempio $\sin (3x) = 0$ dà $3x = k\pi$, quindi $x = \dfrac{k\pi}{3}$.
:::

## Equazioni elementari in coseno e tangente

::::teorema{#equazione-coseno titolo="Equazione elementare cos x = m"}
Sia $m$ un numero reale.
- Se $m < -1$ oppure $m > 1$, l'equazione $\cos x = m$ **non ha soluzioni**.
- Se $-1 \leq m \leq 1$, posto $\beta = \arccos m$, le soluzioni sono
$$
x = \beta + 2k\pi
\qquad \text{oppure} \qquad
x = -\beta + 2k\pi ,
\qquad k \in \mathbb{Z} ,
$$
che si scrivono in breve $x = \pm \beta + 2k\pi$.

Per $\cos x = -\dfrac{1}{2}$ si ha $\beta = \arccos\left(-\dfrac{1}{2}\right) = \dfrac{2\pi}{3}$, quindi le soluzioni sono $x = \pm\dfrac{2\pi}{3} + 2k\pi$. In $[0, 2\pi)$ si ottengono $\dfrac{2\pi}{3}$ e $-\dfrac{2\pi}{3} + 2\pi = \dfrac{4\pi}{3}$.

::grafico{curve="cos(t),sin(t),0,6.29" vettori="0,0,-0.5,0.866,P₁;0,0,-0.5,-0.866,P₂" segmenti="-0.5,-1.4,-0.5,1.4" punti="-0.5,0.866,pieno;-0.5,-0.866,pieno" xmin=-1.5 xmax=1.5 ymin=-1.5 ymax=1.5 uguale=1 legenda=0 titolo="La retta $x = -\dfrac{1}{2}$ taglia la circonferenza goniometrica in $P_1$, di angolo $\dfrac{2\pi}{3}$, e in $P_2$, di angolo $-\dfrac{2\pi}{3}$, simmetrici rispetto all'asse $x$"}

:::dimostrazione
L'idea è la stessa dell'equazione in seno, con le ascisse al posto delle ordinate. Il coseno di un angolo è l'ascissa del punto corrispondente sulla circonferenza goniometrica, quindi si cercano i punti comuni alla circonferenza e alla retta verticale $X = m$.

Se $|m| > 1$, la retta è esterna alla circonferenza e non ci sono soluzioni. Se $|m| \leq 1$, l'angolo $\beta = \arccos m$ ha coseno $m$, quindi il punto $P_1 = (\cos\beta, \sin\beta)$ sta sulla retta. Il suo simmetrico $P_2$ rispetto all'asse $x$ ha la stessa ascissa e corrisponde all'angolo $-\beta$, perché $\cos(-\beta) = \cos\beta$ per la formula degli archi opposti. La retta verticale taglia la circonferenza in al più due punti, perciò le soluzioni sono gli angoli che terminano in $P_1$ o in $P_2$, cioè $\beta + 2k\pi$ e $-\beta + 2k\pi$.
:::
::::

:::attenzione
La seconda famiglia dell'equazione in coseno è $-\beta + 2k\pi$, mentre la seconda famiglia dell'equazione in seno è $\pi - \alpha + 2k\pi$. Scambiare le due formule porta a valori sbagliati. Per $\cos x = \dfrac{1}{2}$ la formula del seno darebbe $x = \pi - \dfrac{\pi}{3} = \dfrac{2\pi}{3}$, ma $\cos\dfrac{2\pi}{3} = -\dfrac{1}{2}$. Il valore corretto della seconda famiglia è $x = -\dfrac{\pi}{3}$, che ha coseno $\dfrac{1}{2}$.
:::

::::teorema{#equazione-tangente titolo="Equazione elementare tan x = m"}
Per ogni numero reale $m$ l'equazione $\tan x = m$ ha le soluzioni
$$
x = \arctan m + k\pi , \qquad k \in \mathbb{Z} .
$$

A differenza del seno e del coseno, la tangente assume tutti i valori reali, quindi non c'è nessuna condizione su $m$, e basta una sola famiglia, con periodo $\pi$. Per $\tan x = \sqrt{3}$ si ha $\arctan\sqrt{3} = \dfrac{\pi}{3}$, perciò $x = \dfrac{\pi}{3} + k\pi$. In $[0, 2\pi)$ le soluzioni sono $\dfrac{\pi}{3}$ e $\dfrac{4\pi}{3}$.

::grafico{curve="cos(t),sin(t),0,6.29" linee="1,-2 1,2" segmenti="-1.155,-2,1.155,2" punti="0.5,0.866,pieno,P₁;-0.5,-0.866,pieno,P₂;1,1.732,pieno,T" xmin=-2 xmax=2 ymin=-2 ymax=2 uguale=1 legenda=0 titolo="Il punto $T(1, \sqrt{3})$ sta sulla retta $x = 1$; la retta $OT$ taglia la circonferenza in $P_1$, di angolo $\dfrac{\pi}{3}$, e in $P_2$, di angolo $\dfrac{4\pi}{3}$, e i due angoli hanno tangente $\sqrt{3}$"}

:::dimostrazione
L'idea è usare la retta tangente alla circonferenza goniometrica nel punto $(1, 0)$, cioè la retta $X = 1$. Se il punto $P$ dell'angolo $x$ non sta sull'asse $y$, la retta $OP$ incontra la retta $X = 1$ nel punto $T(1, \tan x)$, perché la retta $OP$ ha coefficiente angolare $\dfrac{\sin x}{\cos x} = \tan x$. Risolvere $\tan x = m$ significa quindi trovare gli angoli il cui lato termina sulla retta per $O$ e per $T(1, m)$.

Questa retta taglia la circonferenza in due punti diametralmente opposti. Uno dei due corrisponde all'angolo $\arctan m$, che ha tangente $m$; l'altro corrisponde all'angolo $\arctan m + \pi$. Le soluzioni sono gli angoli che terminano in uno dei due punti, cioè $\arctan m + 2k\pi$ oppure $\arctan m + \pi + 2k\pi$. I numeri della forma $2k\pi$ e $\pi + 2k\pi$ sono, insieme, tutti i multipli interi di $\pi$, quindi le due famiglie si raccolgono in $x = \arctan m + k\pi$.
:::
::::

:::osservazione{titolo="Equazioni in cotangente"}
La cotangente si definisce come $\cot x = \dfrac{\cos x}{\sin x}$ per $x \neq k\pi$. Per $m \neq 0$ l'equazione $\cot x = m$ equivale a $\tan x = \dfrac{1}{m}$, perché in ogni punto in cui entrambe sono definite la cotangente è il reciproco della tangente. Per esempio $\cot x = -1$ equivale a $\tan x = -1$, che dà $x = -\dfrac{\pi}{4} + k\pi$. Per $m = 0$ l'equazione $\cot x = 0$ equivale a $\cos x = 0$, con $\sin x \neq 0$, quindi le soluzioni sono $x = \dfrac{\pi}{2} + k\pi$.
:::

## Equazioni con lo stesso seno, coseno o tangente

:::teorema{#stesso-seno titolo="Equazioni del tipo sin f(x) = sin g(x)"}
Siano $f(x)$ e $g(x)$ due espressioni nell'incognita $x$, definite per gli stessi valori. Valgono le equivalenze
$$
\begin{aligned}
\sin f(x) = \sin g(x) &\iff f(x) = g(x) + 2k\pi \ \text{ oppure } \ f(x) = \pi - g(x) + 2k\pi , \\[6pt]
\cos f(x) = \cos g(x) &\iff f(x) = g(x) + 2k\pi \ \text{ oppure } \ f(x) = -g(x) + 2k\pi , \\[6pt]
\tan f(x) = \tan g(x) &\iff f(x) = g(x) + k\pi ,
\end{aligned}
$$
dove nell'ultima riga le due tangenti devono essere definite. Le equivalenze seguono dai teoremi sulle equazioni elementari. Fissato $x$, il numero $m = \sin g(x)$ è il seno dell'angolo $g(x)$, e gli angoli che hanno quel seno sono $g(x) + 2k\pi$ e $\pi - g(x) + 2k\pi$.

Per esempio $\sin (3x) = \sin x$ dà due equazioni di primo grado in $x$:
$$
\begin{aligned}
3x = x + 2k\pi &\implies 2x = 2k\pi \implies x = k\pi , \\[6pt]
3x = \pi - x + 2k\pi &\implies 4x = \pi + 2k\pi \implies x = \frac{\pi}{4} + \frac{k\pi}{2} .
\end{aligned}
$$
Nella divisione per $2$ e per $4$ si divide anche il termine $2k\pi$, perciò il periodo delle famiglie cambia.

::grafico{f="sin(3*x);sin(x)" punti="0,0,pieno;0.7854,0.7071,pieno;2.3562,0.7071,pieno;3.1416,0,pieno;3.9270,-0.7071,pieno;5.4978,-0.7071,pieno;6.2832,0,pieno" xmin=0 xmax=7 ymin=-1.5 ymax=1.5 legenda="y = \sin 3x;y = \sin x" titolo="In $[0, 2\pi]$ i grafici di $\sin 3x$ e di $\sin x$ si incontrano in $0$, $\pi$, $2\pi$ e in $\dfrac{\pi}{4}$, $\dfrac{3\pi}{4}$, $\dfrac{5\pi}{4}$, $\dfrac{7\pi}{4}$"}

:::

:::esempio{titolo="Una equazione del tipo cos f(x) = cos g(x)"}
Si risolve $\cos (2x) = \cos\left(x + \dfrac{\pi}{3}\right)$. Per il teorema precedente si ha
$$
\begin{aligned}
2x = x + \frac{\pi}{3} + 2k\pi &\implies x = \frac{\pi}{3} + 2k\pi , \\[6pt]
2x = -x - \frac{\pi}{3} + 2k\pi &\implies 3x = -\frac{\pi}{3} + 2k\pi \implies x = -\frac{\pi}{9} + \frac{2k\pi}{3} .
\end{aligned}
$$
Nella seconda famiglia si cambia di segno l'intera espressione $x + \dfrac{\pi}{3}$. Per $x = \dfrac{\pi}{3}$, che appartiene alla prima famiglia, entrambi i membri valgono $\cos\dfrac{2\pi}{3} = -\dfrac{1}{2}$.
:::

:::teorema{#seno-uguale-coseno titolo="Equazioni che si riportano allo stesso seno o allo stesso coseno"}
Con le formule degli archi associati, un'equazione tra funzioni diverse o con un segno meno si riporta a una delle equivalenze precedenti:
$$
\begin{aligned}
\sin f(x) = \cos g(x) &\iff \sin f(x) = \sin\left( \frac{\pi}{2} - g(x) \right) , \\[6pt]
\sin f(x) = -\sin g(x) &\iff \sin f(x) = \sin\big( -g(x) \big) , \\[6pt]
\cos f(x) = -\cos g(x) &\iff \cos f(x) = \cos\big( \pi - g(x) \big) .
\end{aligned}
$$
La prima riga usa $\cos\alpha = \sin\left(\dfrac{\pi}{2} - \alpha\right)$, la seconda $-\sin\alpha = \sin(-\alpha)$, la terza $-\cos\alpha = \cos(\pi - \alpha)$. Per esempio $\sin x = \cos x$ diventa $\sin x = \sin\left(\dfrac{\pi}{2} - x\right)$. La prima famiglia dà $2x = \dfrac{\pi}{2} + 2k\pi$, cioè $x = \dfrac{\pi}{4} + k\pi$. La seconda dà $x = \pi - \dfrac{\pi}{2} + x + 2k\pi$, cioè $0 = \dfrac{\pi}{2} + 2k\pi$, che è falsa per ogni $k$ intero, quindi non fornisce soluzioni. Le soluzioni sono perciò $x = \dfrac{\pi}{4} + k\pi$.
:::

:::osservazione{#argomento-lineare titolo="Equazioni con argomento ax + b"}
Quando l'argomento è un'espressione di primo grado $ax + b$, con $a \neq 0$, si risolve prima l'equazione elementare rispetto all'angolo $t = ax + b$, poi si ricava $x$ da ogni famiglia. Il periodo delle soluzioni rispetto a $x$ diventa $\dfrac{2\pi}{|a|}$ per seno e coseno e $\dfrac{\pi}{|a|}$ per la tangente.

Per $\tan\left(2x - \dfrac{\pi}{4}\right) = 1$ si ha $2x - \dfrac{\pi}{4} = \dfrac{\pi}{4} + k\pi$, quindi $2x = \dfrac{\pi}{2} + k\pi$ e $x = \dfrac{\pi}{4} + \dfrac{k\pi}{2}$. Le condizioni di esistenza chiedono $2x - \dfrac{\pi}{4} \neq \dfrac{\pi}{2} + k\pi$, e sono soddisfatte da tutte le soluzioni trovate, perché per esse la tangente vale $1$.
:::

## Equazioni riconducibili a equazioni elementari

:::teorema{#sostituzione titolo="Equazioni risolte con una sostituzione"}
Se l'equazione contiene una sola funzione goniometrica dell'incognita, per esempio solo $\sin x$, si pone $t = \sin x$ e si risolve l'equazione algebrica in $t$. Per ogni soluzione $t_0$ si risolve poi l'equazione elementare $\sin x = t_0$. Con $t = \sin x$ oppure $t = \cos x$ servono solo le soluzioni che soddisfano la condizione $-1 \leq t \leq 1$; con $t = \tan x$ sono accettabili tutte le soluzioni reali.

Per esempio
$$
2\sin^2 x - \sin x - 1 = 0
\qquad \xrightarrow{\ t \, = \, \sin x \ } \qquad
2t^2 - t - 1 = 0 .
$$
Il discriminante è $\Delta = 1 + 8 = 9$, quindi $t = \dfrac{1 \pm 3}{4}$, cioè $t = 1$ oppure $t = -\dfrac{1}{2}$. Entrambi i valori sono compresi tra $-1$ e $1$. L'equazione $\sin x = 1$ dà $x = \dfrac{\pi}{2} + 2k\pi$, e l'equazione $\sin x = -\dfrac{1}{2}$ dà $x = -\dfrac{\pi}{6} + 2k\pi$ oppure $x = \dfrac{7\pi}{6} + 2k\pi$.
:::

:::esempio{titolo="Una sostituzione con un valore non accettabile"}
L'equazione $2\cos^2 x + 3\sin x - 3 = 0$ contiene due funzioni diverse. Con la relazione fondamentale $\cos^2 x = 1 - \sin^2 x$ diventa
$$
2 - 2\sin^2 x + 3\sin x - 3 = 0
\iff
2\sin^2 x - 3\sin x + 1 = 0 .
$$
Con $t = \sin x$ si ha $2t^2 - 3t + 1 = 0$, che ha $\Delta = 9 - 8 = 1$ e soluzioni $t = 1$ e $t = \dfrac{1}{2}$. Quindi $x = \dfrac{\pi}{2} + 2k\pi$, oppure $x = \dfrac{\pi}{6} + 2k\pi$, oppure $x = \dfrac{5\pi}{6} + 2k\pi$. Se invece si risolve $\sin^2 x - 3\sin x + 2 = 0$, si ottengono $t = 1$ e $t = 2$. Il valore $t = 2$ non è accettabile, perché il seno non supera $1$, e restano solo le soluzioni di $\sin x = 1$.
:::

:::teorema{#annullamento-prodotto titolo="Equazioni risolte per scomposizione"}
Per la **legge di annullamento del prodotto**, un prodotto di fattori è nullo se e solo se almeno un fattore è nullo. Un'equazione scritta nella forma $A(x) \cdot B(x) = 0$ si spezza quindi nelle equazioni $A(x) = 0$ e $B(x) = 0$, e le soluzioni sono l'unione delle soluzioni delle due.

Per esempio $2\sin x \cos x - \sin x = 0$ si scompone raccogliendo $\sin x$:
$$
\sin x \, (2\cos x - 1) = 0 .
$$
Il primo fattore si annulla per $x = k\pi$, il secondo per $\cos x = \dfrac{1}{2}$, cioè per $x = \pm\dfrac{\pi}{3} + 2k\pi$. Le soluzioni sono tutte e tre le famiglie.
:::

:::attenzione
Dividere entrambi i membri per un'espressione che contiene l'incognita può far perdere soluzioni. Nell'equazione $\sin x \cos x = \sin x$, la divisione per $\sin x$ porta a $\cos x = 1$, cioè a $x = 2k\pi$. I valori $x = \pi + 2k\pi$ però risolvono l'equazione iniziale, perché $\sin\pi \cos\pi = 0 = \sin\pi$, e sono stati persi nella divisione. Con il raccoglimento $\sin x\,(\cos x - 1) = 0$ si trovano tutte le soluzioni $x = k\pi$.
:::

:::teorema{#uso-formule titolo="Equazioni risolte con le formule goniometriche"}
Quando l'equazione contiene angoli diversi, come $x$ e $2x$, oppure somme di seni e coseni, le formule goniometriche la trasformano in un'equazione con un solo angolo o in un prodotto. Le più usate sono le formule di duplicazione e quelle di prostaferesi, che si studiano nell'argomento sulle formule goniometriche.

Per esempio $\cos (2x) + \cos x = 0$ contiene gli angoli $2x$ e $x$. Con $\cos (2x) = 2\cos^2 x - 1$ si ottiene
$$
2\cos^2 x + \cos x - 1 = 0
\iff
(2\cos x - 1)(\cos x + 1) = 0 ,
$$
quindi $\cos x = \dfrac{1}{2}$ oppure $\cos x = -1$, e le soluzioni sono $x = \pm\dfrac{\pi}{3} + 2k\pi$ oppure $x = \pi + 2k\pi$.
:::

:::richiamo{titolo="Formule di duplicazione e di prostaferesi"}
Per ogni $\alpha$, $p$ e $q$ reali:
$$
\sin (2\alpha) = 2\sin\alpha\cos\alpha ,
\qquad
\cos (2\alpha) = 2\cos^2\alpha - 1 = 1 - 2\sin^2\alpha ,
$$
$$
\sin p - \sin q = 2\cos\frac{p + q}{2}\sin\frac{p - q}{2} ,
\qquad
\sin p + \sin q = 2\sin\frac{p + q}{2}\cos\frac{p - q}{2} .
$$
:::

:::esempio{titolo="Una equazione risolta con la prostaferesi"}
Si risolve $\sin (3x) - \sin x = 0$. Con la formula della differenza di due seni, con $p = 3x$ e $q = x$, si ha $\dfrac{p + q}{2} = 2x$ e $\dfrac{p - q}{2} = x$, quindi
$$
2\cos (2x) \sin x = 0 .
$$
Il fattore $\sin x$ si annulla per $x = k\pi$. Il fattore $\cos (2x)$ si annulla per $2x = \dfrac{\pi}{2} + k\pi$, cioè per $x = \dfrac{\pi}{4} + \dfrac{k\pi}{2}$. Si ritrovano le soluzioni di $\sin (3x) = \sin x$, ottenute prima con il teorema sullo stesso seno.
:::

:::esempio{titolo="Una equazione con condizioni di esistenza"}
Nell'equazione $\tan x = 2\sin x$ la tangente esiste per $\cos x \neq 0$. Con questa condizione si scrive $\tan x = \dfrac{\sin x}{\cos x}$ e si moltiplicano i due membri per $\cos x$:
$$
\sin x = 2\sin x\cos x
\iff
\sin x\,(1 - 2\cos x) = 0 .
$$
Si ottengono $\sin x = 0$, cioè $x = k\pi$, e $\cos x = \dfrac{1}{2}$, cioè $x = \pm\dfrac{\pi}{3} + 2k\pi$. In tutti questi punti il coseno vale $\pm 1$ oppure $\dfrac{1}{2}$, quindi le condizioni di esistenza sono soddisfatte e le soluzioni sono tutte accettabili.
:::

## Equazioni lineari in seno e coseno

:::definizione{#equazioni-lineari titolo="Equazione lineare in seno e coseno"}
Un'**equazione lineare** in seno e coseno ha la forma
$$
a\sin x + b\cos x = c ,
$$
dove $a$, $b$, $c$ sono numeri reali e $a$, $b$ sono entrambi diversi da $0$. Se $c = 0$ l'equazione si dice **omogenea di primo grado** e si risolve dividendo per $\cos x$. La divisione è lecita, perché i punti con $\cos x = 0$ non sono soluzioni. In questi punti infatti $\sin x = \pm 1$, quindi $a\sin x \neq 0$. Per esempio $\sin x - \sqrt{3}\cos x = 0$ diventa $\tan x = \sqrt{3}$, e le soluzioni sono $x = \dfrac{\pi}{3} + k\pi$.

Se $c \neq 0$ l'equazione non si riduce a una sola funzione con una divisione. Per risolverla si usano tre metodi, mostrati sulla stessa equazione $\sin x + \cos x = 1$.
:::

:::richiamo{titolo="Angolo aggiunto"}
Siano $a$ e $b$ non entrambi nulli e sia $r = \sqrt{a^2 + b^2}$. Esiste un angolo $\varphi$ con $\cos\varphi = \dfrac{a}{r}$ e $\sin\varphi = \dfrac{b}{r}$, e per ogni $x$ reale vale
$$
a\sin x + b\cos x = r\sin(x + \varphi) .
$$
:::

:::teorema{#angolo-aggiunto titolo="Metodo dell'angolo aggiunto"}
Con l'angolo aggiunto l'equazione $a\sin x + b\cos x = c$ diventa
$$
r\sin(x + \varphi) = c
\iff
\sin(x + \varphi) = \frac{c}{r} ,
$$
che è un'equazione elementare con argomento $x + \varphi$. Ne segue che l'equazione lineare ha soluzioni se e solo se $|c| \leq r$, cioè se e solo se $c^2 \leq a^2 + b^2$.

Per $\sin x + \cos x = 1$ si ha $a = b = 1$ e $r = \sqrt{2}$, quindi $\cos\varphi = \sin\varphi = \dfrac{1}{\sqrt{2}}$ e $\varphi = \dfrac{\pi}{4}$. L'equazione diventa $\sin\left(x + \dfrac{\pi}{4}\right) = \dfrac{1}{\sqrt{2}} = \dfrac{\sqrt{2}}{2}$, perciò
$$
x + \frac{\pi}{4} = \frac{\pi}{4} + 2k\pi
\qquad \text{oppure} \qquad
x + \frac{\pi}{4} = \frac{3\pi}{4} + 2k\pi ,
$$
cioè $x = 2k\pi$ oppure $x = \dfrac{\pi}{2} + 2k\pi$. L'equazione $\sin x + \cos x = 2$ invece non ha soluzioni, perché $2 > \sqrt{2}$.
:::

:::richiamo{titolo="Formule parametriche"}
Se $x \neq \pi + 2k\pi$ e $t = \tan\dfrac{x}{2}$, allora
$$
\sin x = \frac{2t}{1 + t^2} ,
\qquad
\cos x = \frac{1 - t^2}{1 + t^2} .
$$
:::

::::teorema{#metodo-parametriche titolo="Metodo delle formule parametriche"}
Per risolvere $a\sin x + b\cos x = c$ si procede in due passi.
- Si controlla a parte se i valori $x = \pi + 2k\pi$ sono soluzioni, sostituendo $\sin x = 0$ e $\cos x = -1$. Questi valori sono soluzioni se e solo se $-b = c$.
- Per $x \neq \pi + 2k\pi$ si sostituiscono le formule parametriche con $t = \tan\dfrac{x}{2}$, si risolve l'equazione in $t$ e si ricava $x$ da $\tan\dfrac{x}{2} = t$.

Per $\sin x + \cos x = 1$ il controllo dà $0 + (-1) = -1 \neq 1$, quindi $x = \pi + 2k\pi$ non è soluzione. Con le formule parametriche, moltiplicando per $1 + t^2 > 0$, si ottiene
$$
2t + 1 - t^2 = 1 + t^2
\iff
2t^2 - 2t = 0
\iff
2t\,(t - 1) = 0 .
$$
Da $t = 0$ segue $\dfrac{x}{2} = k\pi$, cioè $x = 2k\pi$; da $t = 1$ segue $\dfrac{x}{2} = \dfrac{\pi}{4} + k\pi$, cioè $x = \dfrac{\pi}{2} + 2k\pi$.

:::dimostrazione
Il controllo separato serve perché le formule parametriche valgono solo dove $\tan\dfrac{x}{2}$ esiste, cioè per $\dfrac{x}{2} \neq \dfrac{\pi}{2} + k\pi$. Moltiplicando per $2$ si ottiene la condizione $x \neq \pi + 2k\pi$. I valori $x = \pi + 2k\pi$ sono quindi esclusi dalla sostituzione, e l'equazione in $t$ non può fornirli anche quando sono soluzioni. In questi punti $\sin x = 0$ e $\cos x = -1$, perciò il primo membro vale $-b$, e i punti sono soluzioni se e solo se $-b = c$. Per tutti gli altri valori di $x$ la sostituzione è un'uguaglianza, e l'equazione in $t$ è equivalente a quella iniziale.
:::
::::

:::esempio{titolo="Un caso in cui x = π + 2kπ è soluzione"}
Nell'equazione $\sin x - \cos x = 1$ si ha $b = -1$ e $c = 1$, quindi $-b = c$ e i valori $x = \pi + 2k\pi$ sono soluzioni, perché $\sin\pi - \cos\pi = 0 + 1 = 1$. Con le formule parametriche si ottiene $2t - 1 + t^2 = 1 + t^2$, cioè $t = 1$, da cui $x = \dfrac{\pi}{2} + 2k\pi$. Senza il controllo separato la famiglia $x = \pi + 2k\pi$ sarebbe andata persa. Le soluzioni sono quindi $x = \dfrac{\pi}{2} + 2k\pi$ oppure $x = \pi + 2k\pi$.
:::

:::teorema{#metodo-grafico titolo="Metodo grafico"}
Si pongono $X = \cos x$ e $Y = \sin x$. Il punto $(X, Y)$ appartiene alla circonferenza goniometrica, quindi l'equazione $a\sin x + b\cos x = c$ equivale al sistema
$$
\begin{cases}
bX + aY = c \\[4pt]
X^2 + Y^2 = 1
\end{cases}
$$
Le soluzioni del sistema sono i punti in cui la retta $bX + aY = c$ taglia la circonferenza. Per ogni punto trovato si legge l'angolo $x$ con $\cos x = X$ e $\sin x = Y$. La retta può essere secante, tangente o esterna, e corrispondentemente l'equazione ha due famiglie, una sola famiglia o nessuna soluzione.

Per $\sin x + \cos x = 1$ il sistema è formato da $X + Y = 1$ e $X^2 + Y^2 = 1$. Sostituendo $Y = 1 - X$ si ottiene $X^2 + 1 - 2X + X^2 = 1$, cioè $2X\,(X - 1) = 0$. Le soluzioni sono $A(1, 0)$ e $B(0, 1)$, che corrispondono agli angoli $x = 2k\pi$ e $x = \dfrac{\pi}{2} + 2k\pi$.

::grafico{curve="cos(t),sin(t),0,6.29" segmenti="-0.4,1.4,1.4,-0.4" punti="1,0,pieno,A;0,1,pieno,B" xmin=-1.5 xmax=1.5 ymin=-1.5 ymax=1.5 uguale=1 nomi="X,Y" legenda=0 titolo="La retta $X + Y = 1$ taglia la circonferenza goniometrica in $A(1, 0)$ e $B(0, 1)$, quindi $\sin x + \cos x = 1$ per $x = 2k\pi$ e per $x = \dfrac{\pi}{2} + 2k\pi$"}

:::

:::osservazione{titolo="Confronto tra i tre metodi"}
I tre metodi danno le stesse soluzioni. Il metodo dell'angolo aggiunto produce un'equazione elementare e dice subito se ci sono soluzioni, con la condizione $c^2 \leq a^2 + b^2$; è il più rapido quando $\dfrac{b}{a}$ è la tangente di un angolo notevole, come nei casi $\dfrac{b}{a} = 1$, $\sqrt{3}$, $\dfrac{1}{\sqrt{3}}$. Il metodo delle formule parametriche porta sempre a un'equazione di secondo grado in $t$, anche quando l'angolo $\varphi$ non è notevole, ma richiede il controllo di $x = \pi + 2k\pi$. Nel metodo grafico il numero delle soluzioni si legge dalla posizione della retta rispetto alla circonferenza.
:::

## Equazioni omogenee di secondo grado

:::definizione{#equazioni-omogenee titolo="Equazione omogenea di secondo grado"}
Un'equazione **omogenea di secondo grado** in seno e coseno ha la forma
$$
a\sin^2 x + b\sin x\cos x + c\cos^2 x = 0 ,
$$
con $a$, $b$, $c$ numeri reali non tutti nulli. Il nome indica che ogni termine ha grado $2$ complessivo in $\sin x$ e $\cos x$.

Se $a \neq 0$, i punti con $\cos x = 0$ non sono soluzioni, perché in essi $\sin^2 x = 1$ e il primo membro vale $a \neq 0$. Si può quindi dividere per $\cos^2 x$, e si ottiene un'equazione di secondo grado nella tangente:
$$
a\tan^2 x + b\tan x + c = 0 .
$$
Per esempio $\sin^2 x - (1 + \sqrt{3})\sin x\cos x + \sqrt{3}\cos^2 x = 0$ diventa $\tan^2 x - (1 + \sqrt{3})\tan x + \sqrt{3} = 0$. Le radici hanno somma $1 + \sqrt{3}$ e prodotto $\sqrt{3}$, quindi sono $\tan x = 1$ e $\tan x = \sqrt{3}$, e le soluzioni sono $x = \dfrac{\pi}{4} + k\pi$ oppure $x = \dfrac{\pi}{3} + k\pi$.
:::

:::attenzione
Se $a = 0$, i punti con $\cos x = 0$ sono soluzioni, e la divisione per $\cos^2 x$ li fa perdere. Nell'equazione $\sin x\cos x - \sqrt{3}\cos^2 x = 0$ il coefficiente di $\sin^2 x$ è $a = 0$. Per $x = \dfrac{\pi}{2}$ il primo membro vale $1 \cdot 0 - \sqrt{3} \cdot 0 = 0$, quindi $\dfrac{\pi}{2}$ è una soluzione. In questo caso si raccoglie $\cos x$:
$$
\cos x\,(\sin x - \sqrt{3}\cos x) = 0 ,
$$
e si ottengono $x = \dfrac{\pi}{2} + k\pi$ dal primo fattore e $x = \dfrac{\pi}{3} + k\pi$ dal secondo, che è omogeneo di primo grado.
:::

:::teorema{#riconducibili-omogenee titolo="Equazioni riconducibili a omogenee"}
L'equazione
$$
a\sin^2 x + b\sin x\cos x + c\cos^2 x = d ,
$$
con $d \neq 0$, si trasforma in un'equazione omogenea scrivendo il termine noto come $d = d\,(\sin^2 x + \cos^2 x)$. Questa scrittura è lecita perché $\sin^2 x + \cos^2 x = 1$ per ogni $x$. Portando tutto al primo membro si ottiene
$$
(a - d)\sin^2 x + b\sin x\cos x + (c - d)\cos^2 x = 0 .
$$
Per esempio $2\sin^2 x - \sqrt{3}\sin x\cos x + \cos^2 x = 1$ diventa
$$
2\sin^2 x - \sqrt{3}\sin x\cos x + \cos^2 x = \sin^2 x + \cos^2 x
\iff
\sin^2 x - \sqrt{3}\sin x\cos x = 0 .
$$
Il coefficiente di $\sin^2 x$ è $1 \neq 0$, quindi si divide per $\cos^2 x$ e si ottiene $\tan^2 x - \sqrt{3}\tan x = 0$, cioè $\tan x\,(\tan x - \sqrt{3}) = 0$. Le soluzioni sono $x = k\pi$ oppure $x = \dfrac{\pi}{3} + k\pi$. Per $x = 0$ il primo membro iniziale vale $0 - 0 + 1 = 1$, in accordo con il risultato.
:::

:::osservazione{titolo="Equazioni con il prodotto sin x cos x"}
Anche un'equazione che contiene $\sin x\cos x$ e un termine noto, come $\sin x\cos x = \dfrac{1}{4}$, si risolve in due modi. Con la formula di duplicazione $\sin x\cos x = \dfrac{1}{2}\sin(2x)$ diventa $\sin(2x) = \dfrac{1}{2}$, che è elementare. Con il metodo delle equazioni omogenee si scrive $4\sin x\cos x = \sin^2 x + \cos^2 x$, cioè $\tan^2 x - 4\tan x + 1 = 0$. La formula di duplicazione dà subito $2x = \dfrac{\pi}{6} + 2k\pi$ oppure $2x = \dfrac{5\pi}{6} + 2k\pi$, quindi $x = \dfrac{\pi}{12} + k\pi$ oppure $x = \dfrac{5\pi}{12} + k\pi$.
:::

## Soluzioni in un intervallo e parametri

:::teorema{#soluzioni-intervallo titolo="Soluzioni in un intervallo assegnato"}
Per trovare le soluzioni che appartengono a un intervallo $[p, q]$ si scrive la soluzione generale e, per ogni famiglia, si cercano gli interi $k$ per cui la soluzione appartiene all'intervallo. Per la famiglia $x = x_0 + kT$, con periodo $T > 0$, la condizione è la doppia disuguaglianza
$$
p \leq x_0 + kT \leq q ,
$$
che si risolve rispetto a $k$, scegliendo poi i valori interi.

Per esempio $\cos(2x) = \dfrac{1}{2}$ dà $2x = \pm\dfrac{\pi}{3} + 2k\pi$, cioè $x = \pm\dfrac{\pi}{6} + k\pi$. Nell'intervallo $[0, 2\pi]$ la famiglia $\dfrac{\pi}{6} + k\pi$ dà i valori $\dfrac{\pi}{6}$ e $\dfrac{7\pi}{6}$, per $k = 0$ e $k = 1$. La famiglia $-\dfrac{\pi}{6} + k\pi$ dà $\dfrac{5\pi}{6}$ e $\dfrac{11\pi}{6}$, per $k = 1$ e $k = 2$. Le soluzioni sono quindi quattro, e sono le ascisse dei punti comuni al grafico di $\cos(2x)$ e alla retta $y = \dfrac{1}{2}$.

::grafico{f="cos(2*x);0.5" punti="0.5236,0.5,pieno;2.6180,0.5,pieno;3.6652,0.5,pieno;5.7596,0.5,pieno" segmenti="6.2832,-1.5,6.2832,1.5" xmin=0 xmax=7 ymin=-1.5 ymax=1.5 legenda="y = \cos 2x;y = \dfrac{1}{2}" titolo="In $[0, 2\pi]$ l'equazione $\cos 2x = \dfrac{1}{2}$ ha le quattro soluzioni $\dfrac{\pi}{6}$, $\dfrac{5\pi}{6}$, $\dfrac{7\pi}{6}$, $\dfrac{11\pi}{6}$; la funzione $\cos 2x$ ha periodo $\pi$, quindi in $[0, 2\pi]$ il grafico contiene due periodi"}

:::

:::esempio{titolo="Scelta di k con la doppia disuguaglianza"}
Si cercano le soluzioni di $\sin\left(3x\right) = 1$ nell'intervallo $[0, \pi]$. Le soluzioni generali sono $3x = \dfrac{\pi}{2} + 2k\pi$, cioè $x = \dfrac{\pi}{6} + \dfrac{2k\pi}{3}$. La condizione è
$$
0 \leq \frac{\pi}{6} + \frac{2k\pi}{3} \leq \pi
\iff
-\frac{\pi}{6} \leq \frac{2k\pi}{3} \leq \frac{5\pi}{6}
\iff
-\frac{1}{4} \leq k \leq \frac{5}{4} .
$$
Nell'ultimo passaggio si è moltiplicato per $\dfrac{3}{2\pi} > 0$. Gli interi compresi tra $-\dfrac{1}{4}$ e $\dfrac{5}{4}$ sono $k = 0$ e $k = 1$, quindi le soluzioni nell'intervallo sono $\dfrac{\pi}{6}$ e $\dfrac{5\pi}{6}$.
:::

:::teorema{#discussione-parametro titolo="Numero di soluzioni al variare di un parametro"}
In un'equazione del tipo $\sin x = h(m)$, dove $h(m)$ dipende da un parametro reale $m$, il numero delle soluzioni in un intervallo si legge dal grafico di $y = \sin x$ in quell'intervallo e dalla retta orizzontale $y = h(m)$, perché ogni punto comune corrisponde a una soluzione. Lo stesso vale per il coseno e per la tangente.

Per esempio l'equazione $2\sin x = m$ nell'intervallo $[0, 2\pi)$ equivale a $\sin x = \dfrac{m}{2}$. Il grafico di $y = 2\sin x$ in $[0, 2\pi)$ e la retta $y = m$ mostrano che
- per $m < -2$ oppure $m > 2$ non ci sono soluzioni;
- per $m = 2$ c'è la sola soluzione $\dfrac{\pi}{2}$ e per $m = -2$ la sola soluzione $\dfrac{3\pi}{2}$;
- per $-2 < m < 2$ ci sono due soluzioni.

Per $m = 0$ le due soluzioni sono $0$ e $\pi$. Il punto $2\pi$ non appartiene all'intervallo, perché l'estremo destro è escluso, e per questo motivo non dà una terza soluzione.

::grafico{f="2*sin(x)" segmenti="0,1,6.2832,1;0,2,6.2832,2" punti="0.5236,1,pieno;2.6180,1,pieno;1.5708,2,pieno;6.2832,0,vuoto" xmin=0 xmax=7 ymin=-3 ymax=3 legenda="y = 2\sin x" titolo="Il grafico di $2\sin x$ in $[0, 2\pi)$: la retta $y = 1$ lo incontra in due punti, la retta $y = 2$ in un solo punto"}

:::

## Sistemi di equazioni goniometriche

:::definizione{#sistemi-goniometrici titolo="Sistema di equazioni goniometriche"}
Un **sistema di equazioni goniometriche** è formato da due o più equazioni, in due o più incognite, di cui almeno una è goniometrica. Una soluzione è una coppia $(x, y)$ che soddisfa insieme tutte le equazioni. Si risolve con i metodi dei sistemi algebrici, cioè sostituendo un'incognita oppure combinando le equazioni.

Nel sistema
$$
\begin{cases}
\sin x + \cos y = 1 \\[4pt]
\sin x - \cos y = 0
\end{cases}
$$
le incognite compaiono solo in $\sin x$ e in $\cos y$. Sommando le due equazioni si ha $2\sin x = 1$, e sottraendole si ha $2\cos y = 1$. Quindi $\sin x = \dfrac{1}{2}$ e $\cos y = \dfrac{1}{2}$, cioè $x = \dfrac{\pi}{6} + 2k\pi$ oppure $x = \dfrac{5\pi}{6} + 2k\pi$, e $y = \pm\dfrac{\pi}{3} + 2h\pi$, con $h$ e $k$ interi indipendenti. Ogni scelta di $x$ si accoppia con ogni scelta di $y$.
:::

:::esempio{titolo="Un sistema con la somma delle incognite"}
Si risolve, con $x$ e $y$ nell'intervallo $[0, \pi]$, il sistema
$$
\begin{cases}
\sin x + \sin y = \sqrt{3} \\[4pt]
x + y = \pi
\end{cases}
$$
Dalla seconda equazione si ricava $y = \pi - x$, e per la formula degli archi supplementari $\sin y = \sin(\pi - x) = \sin x$. La prima equazione diventa $2\sin x = \sqrt{3}$, cioè $\sin x = \dfrac{\sqrt{3}}{2}$. In $[0, \pi]$ si trovano $x = \dfrac{\pi}{3}$ e $x = \dfrac{2\pi}{3}$, e i valori corrispondenti $y = \pi - x$ appartengono anch'essi a $[0, \pi]$. Le soluzioni sono le coppie $\left(\dfrac{\pi}{3}, \dfrac{2\pi}{3}\right)$ e $\left(\dfrac{2\pi}{3}, \dfrac{\pi}{3}\right)$.
:::
