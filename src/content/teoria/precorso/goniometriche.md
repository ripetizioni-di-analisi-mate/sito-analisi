---
titolo: Equazioni e disequazioni goniometriche
sommario: Seno, coseno e tangente sulla circonferenza goniometrica, le identità che li legano e i metodi risolutivi per ogni tipo di equazione e disequazione goniometrica.
---

## La circonferenza goniometrica

:::definizione{#circonferenza-goniometrica titolo="Circonferenza goniometrica, seno e coseno"}
Nel piano cartesiano ogni punto è individuato da due coordinate: l'**ascissa**, che si legge sull'asse orizzontale, e l'**ordinata**, che si legge sull'asse verticale; l'origine è il punto di coordinate $(0, 0)$. La **circonferenza goniometrica** è la circonferenza di centro l'origine e raggio $1$. Un angolo $x$, misurato in radianti a partire dal semiasse positivo delle ascisse in verso antiorario, individua su di essa un punto $P$, e si pone
$$
\cos x = \text{ascissa di } P, \qquad \sin x = \text{ordinata di } P .
$$
Poiché $P$ appartiene alla circonferenza di raggio $1$, valgono $-1 \leq \sin x \leq 1$ e $-1 \leq \cos x \leq 1$. Aggiungendo $2\pi$ all'angolo il punto $P$ non cambia, quindi seno e coseno sono **periodici** di periodo $2\pi$:
$$
\sin(x + 2\pi) = \sin x, \qquad \cos(x + 2\pi) = \cos x .
$$
Per questa periodicità un'equazione goniometrica che ha una soluzione ne ha **infinite**, e le soluzioni si scrivono come famiglie dipendenti da un intero.

::grafico{curve="cos(t),sin(t),0,6.29;0.25*cos(t),0.25*sin(t),0,1.047" uguale=1 xmin=-1.4 xmax=1.4 ymin=-1.3 ymax=1.3 segmenti="0,0,0.5,0.866" vettori="0,0,0.5,0;0.5,0,0.5,0.866,sin x" punti="0.5,0.866,pieno,P" etichette="0.28,0.2,x;0.1,-0.17,cos x" titolo="Circonferenza goniometrica: l'angolo $x$ individua il punto $P$, di ascissa $\cos x$ e ordinata $\sin x$"}
:::

:::osservazione
La misura in radianti di un angolo è la lunghezza dell'arco che l'angolo individua sulla circonferenza goniometrica. Il giro completo misura $2\pi$, quindi all'angolo di $180°$ corrisponde $\pi$. Se $\alpha$ è la misura in gradi e $x$ quella in radianti, vale perciò la proporzione $\alpha : 180 = x : \pi$, cioè
$$
x = \frac{\pi}{180}\,\alpha .
$$
Per esempio l'angolo di $150°$ misura $\dfrac{150}{180}\,\pi = \dfrac{5\pi}{6}$, e l'angolo di $45°$ misura $\dfrac{\pi}{4}$. Le soluzioni delle equazioni goniometriche si scrivono in radianti, come il periodo $2\pi$ che compare nelle famiglie di soluzioni.
:::

:::definizione{#tangente titolo="Tangente"}
$$
\tan x = \frac{\sin x}{\cos x}, \qquad \text{per } \cos x \neq 0, \ \text{cioè } x \neq \frac{\pi}{2} + n\pi, \ n \in \mathbb{Z} .
$$
La tangente è **periodica** di periodo $\pi$: aggiungendo $\pi$ all'angolo, seno e coseno cambiano entrambi di segno, quindi il loro rapporto **non cambia**. Sulla circonferenza goniometrica $\tan x$ è l'ordinata del punto in cui la retta per l'origine e per $P$ interseca la retta tangente alla circonferenza nel punto $(1, 0)$.

::grafico{curve="cos(t),sin(t),0,6.29" uguale=1 xmin=-1.4 xmax=1.6 ymin=-1.3 ymax=1.4 segmenti="1,-1.3,1,1.4;0,0,1,1" vettori="1,0,1,1,tan x" punti="0.7071,0.7071,pieno,P;1,1,pieno,T" titolo="$\tan x$ è l'ordinata del punto $T$ in cui la retta $OP$ incontra la retta tangente alla circonferenza in $(1, 0)$; qui $x = \dfrac{\pi}{4}$ e $\tan x = 1$"}
:::

:::osservazione
Il segno di seno e coseno è il segno delle coordinate di $P$, quindi dipende dal quadrante in cui cade $P$; la tangente è positiva quando seno e coseno hanno lo stesso segno.

- Primo quadrante, $0 < x < \dfrac{\pi}{2}$: $\sin x > 0$, $\cos x > 0$, $\tan x > 0$.
- Secondo quadrante, $\dfrac{\pi}{2} < x < \pi$: $\sin x > 0$, $\cos x < 0$, $\tan x < 0$.
- Terzo quadrante, $\pi < x < \dfrac{3\pi}{2}$: $\sin x < 0$, $\cos x < 0$, $\tan x > 0$.
- Quarto quadrante, $\dfrac{3\pi}{2} < x < 2\pi$: $\sin x < 0$, $\cos x > 0$, $\tan x < 0$.

Per esempio $\dfrac{4\pi}{3} = \pi + \dfrac{\pi}{3}$ sta nel terzo quadrante, quindi $\sin\dfrac{4\pi}{3} = -\dfrac{\sqrt{3}}{2}$ e $\cos\dfrac{4\pi}{3} = -\dfrac{1}{2}$, mentre $\tan\dfrac{4\pi}{3} = \sqrt{3}$ è positiva. Il segno nei quadranti serve a scegliere il segno corretto quando un valore si ricava con l'identità fondamentale.
:::

:::definizione{#valori-notevoli titolo="Valori notevoli"}
| $x$ | $0$ | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ | $\pi$ | $\dfrac{3\pi}{2}$ |
|---|---|---|---|---|---|---|---|
| $\sin x$ | $0$ | $\dfrac{1}{2}$ | $\dfrac{\sqrt{2}}{2}$ | $\dfrac{\sqrt{3}}{2}$ | $1$ | $0$ | $-1$ |
| $\cos x$ | $1$ | $\dfrac{\sqrt{3}}{2}$ | $\dfrac{\sqrt{2}}{2}$ | $\dfrac{1}{2}$ | $0$ | $-1$ | $0$ |
| $\tan x$ | $0$ | $\dfrac{\sqrt{3}}{3}$ | $1$ | $\sqrt{3}$ | non definita | $0$ | non definita |

Questi valori, insieme alle simmetrie degli angoli associati, coprono *tutti* gli angoli notevoli della circonferenza. Le soluzioni delle equazioni goniometriche degli esercizi si esprimono quasi sempre con angoli di questa tabella.
:::

## Le identità

::::teorema{#identita-fondamentale titolo="Identità fondamentale"}
Per ogni $x \in \mathbb{R}$ vale
$$
\sin^2 x + \cos^2 x = 1 .
$$
È il **teorema di Pitagora** applicato al triangolo di cateti $|\cos x|$ e $|\sin x|$ e ipotenusa il raggio $1$. Serve per passare da una funzione all'altra: noto $\sin x$, il valore di $\cos x$ è determinato **a meno del segno**, e il segno si legge dal quadrante in cui sta l'angolo. Nelle equazioni permette di scrivere $\sin^2 x = 1 - \cos^2 x$, e con questa sostituzione un'equazione che contiene entrambe le funzioni si riduce a *una sola*.

:::dimostrazione
L'idea è scrivere che il punto $P$ dista $1$ dall'origine. Il punto $P = (\cos x, \sin x)$ appartiene alla circonferenza di centro $O = (0, 0)$ e raggio $1$, quindi $\overline{OP} = 1$. Per la formula della distanza tra due punti, che si trova nel capitolo di geometria analitica,
$$
\overline{OP} = \sqrt{(\cos x - 0)^2 + (\sin x - 0)^2} = \sqrt{\cos^2 x + \sin^2 x} .
$$
Perciò $\sqrt{\cos^2 x + \sin^2 x} = 1$. Entrambi i membri sono non negativi, quindi elevandoli al quadrato si ottiene l'uguaglianza equivalente $\cos^2 x + \sin^2 x = 1$.
:::
::::

:::esempio
Se $\sin x = \dfrac{3}{5}$ e $x$ appartiene al secondo quadrante, allora $\cos^2 x = 1 - \dfrac{9}{25} = \dfrac{16}{25}$. Nel secondo quadrante il coseno è **negativo**, quindi $\cos x = -\dfrac{4}{5}$.
:::

:::osservazione
Dividendo l'identità fondamentale per $\cos^2 x$, con $\cos x \neq 0$, si ottiene
$$
\frac{\sin^2 x}{\cos^2 x} + 1 = \frac{1}{\cos^2 x},
\qquad\text{cioè}\qquad
1 + \tan^2 x = \frac{1}{\cos^2 x} .
$$
Questa forma permette di ricavare il coseno quando è nota la tangente. Se $\tan x = 2$ e $x$ appartiene al terzo quadrante, allora $\cos^2 x = \dfrac{1}{1 + 4} = \dfrac{1}{5}$. Nel terzo quadrante il coseno è negativo, quindi $\cos x = -\dfrac{1}{\sqrt{5}} = -\dfrac{\sqrt{5}}{5}$, e da $\sin x = \tan x \cos x$ segue $\sin x = -\dfrac{2\sqrt{5}}{5}$.
:::

:::teorema{#angoli-associati titolo="Angoli associati"}
Per ogni $x \in \mathbb{R}$:

- $\sin(-x) = -\sin x$ e $\cos(-x) = \cos x$;
- $\sin(\pi - x) = \sin x$ e $\cos(\pi - x) = -\cos x$;
- $\sin(\pi + x) = -\sin x$ e $\cos(\pi + x) = -\cos x$;
- $\sin\left(\dfrac{\pi}{2} - x\right) = \cos x$ e $\cos\left(\dfrac{\pi}{2} - x\right) = \sin x$.

Seguono dalle **simmetrie** della circonferenza goniometrica rispetto agli assi e alla bisettrice del primo quadrante. Permettono di ricondurre *ogni* angolo al primo quadrante e di trasformare un coseno in un seno, ad esempio nelle equazioni del tipo $\sin A = \cos B$. Dalla seconda riga segue $\cos\dfrac{5\pi}{6} = \cos\left(\pi - \dfrac{\pi}{6}\right) = -\cos\dfrac{\pi}{6} = -\dfrac{\sqrt{3}}{2}$.

::grafico{curve="cos(t),sin(t),0,6.29" uguale=1 xmin=-1.7 xmax=1.7 ymin=-1.3 ymax=1.3 segmenti="0,0,0.866,0.5;0,0,-0.866,0.5;0,0,-0.866,-0.5;0,0,0.866,-0.5;-0.866,0.5,0.866,0.5;0.866,0.5,0.866,-0.5" punti="0.866,0.5;-0.866,0.5;-0.866,-0.5;0.866,-0.5" etichette="0.95,0.6,x;-1.35,0.62,π − x;-1.35,-0.72,π + x;0.95,-0.72,−x" titolo="Con $x = \dfrac{\pi}{6}$: il punto di $\pi - x$ è simmetrico rispetto all'asse $y$, quello di $-x$ rispetto all'asse $x$, quello di $\pi + x$ rispetto all'origine"}
:::

:::teorema{#formule-di-addizione titolo="Formule di addizione e duplicazione"}
Per ogni $a, b \in \mathbb{R}$:
$$
\begin{gathered}
\sin(a \pm b) = \sin a \cos b \pm \cos a \sin b, \\[4pt]
\cos(a \pm b) = \cos a \cos b \mp \sin a \sin b .
\end{gathered}
$$
Ponendo $b = a$ nelle formule con il segno più si ottengono le **formule di duplicazione**:
$$
\sin 2a = 2 \sin a \cos a, \qquad \cos 2a = \cos^2 a - \sin^2 a = 1 - 2\sin^2 a = 2\cos^2 a - 1 .
$$
Le due forme alternative di $\cos 2a$ seguono dall'**identità fondamentale** e servono quando un'equazione contiene $\cos 2x$ insieme a $\sin x$ oppure a $\cos x$: la forma giusta la trasforma in un'equazione di secondo grado in una sola funzione.
:::

:::esempio
Con la **formula di sottrazione del coseno**:
$$
\begin{aligned}
\cos\frac{\pi}{12} = \cos\left(\frac{\pi}{3} - \frac{\pi}{4}\right)
&= \cos\frac{\pi}{3}\cos\frac{\pi}{4} + \sin\frac{\pi}{3}\sin\frac{\pi}{4} \\[6pt]
&= \frac{1}{2}\cdot\frac{\sqrt{2}}{2} + \frac{\sqrt{3}}{2}\cdot\frac{\sqrt{2}}{2}
= \frac{\sqrt{2} + \sqrt{6}}{4} .
\end{aligned}
$$
:::

:::esempio
Sia $a$ un angolo del secondo quadrante con $\sin a = \dfrac{3}{5}$ e $\cos a = -\dfrac{4}{5}$. Con le **formule di duplicazione**:
$$
\begin{aligned}
\sin 2a &= 2 \cdot \frac{3}{5} \cdot \left(-\frac{4}{5}\right) = -\frac{24}{25}, \\[6pt]
\cos 2a &= 1 - 2 \cdot \frac{9}{25} = \frac{25 - 18}{25} = \frac{7}{25} .
\end{aligned}
$$
Il seno di $2a$ è negativo e il coseno è positivo, quindi il punto associato all'angolo $2a$ sta nel quarto quadrante.
:::

:::attenzione
Il seno di una somma è diverso, in generale, dalla somma dei seni. Con $a = b = \dfrac{\pi}{4}$ si ha
$$
\sin\left(\frac{\pi}{4} + \frac{\pi}{4}\right) = \sin\frac{\pi}{2} = 1,
\qquad
\sin\frac{\pi}{4} + \sin\frac{\pi}{4} = \sqrt{2} .
$$
Allo stesso modo $\sin 2x$ è diverso da $2\sin x$: per $x = \dfrac{\pi}{2}$ vale $\sin\pi = 0$, mentre $2\sin\dfrac{\pi}{2} = 2$.
:::

## I grafici di seno e coseno

:::osservazione
Il grafico del seno è la **sinusoide**: in un periodo parte da $0$, sale fino a $1$ in $\dfrac{\pi}{2}$, torna a $0$ in $\pi$, scende fino a $-1$ in $\dfrac{3\pi}{2}$ e risale a $0$ in $2\pi$. Il grafico del coseno ha la stessa forma, traslato di $\dfrac{\pi}{2}$ verso sinistra, poiché $\cos x = \sin\left(x + \dfrac{\pi}{2}\right)$.

::grafico{f="sin(x)" xmin=-6.3 xmax=6.3 ymin=-1.5 ymax=1.5 titolo="$y = \sin x$ su due periodi"}

::grafico{f="cos(x)" xmin=-6.3 xmax=6.3 ymin=-1.5 ymax=1.5 titolo="$y = \cos x$ su due periodi"}

Dal grafico si leggono le soluzioni delle equazioni elementari: per $|k| < 1$ la retta orizzontale $y = k$ interseca la sinusoide in **due punti** per ogni periodo, quindi le soluzioni formano **due famiglie**.
:::

## Equazioni elementari

:::teorema{#equazioni-elementari titolo="Equazioni elementari"}
Sia $k \in \mathbb{R}$ e sia $n \in \mathbb{Z}$.

- $\sin x = k$ con $|k| \leq 1$: detto $\alpha$ un angolo con $\sin \alpha = k$, le soluzioni sono
$$
x = \alpha + 2n\pi \quad \text{oppure} \quad x = \pi - \alpha + 2n\pi .
$$
- $\cos x = k$ con $|k| \leq 1$: detto $\alpha$ un angolo con $\cos \alpha = k$, le soluzioni sono
$$
x = \alpha + 2n\pi \quad \text{oppure} \quad x = -\alpha + 2n\pi .
$$
- $\tan x = k$, per ogni $k \in \mathbb{R}$: detto $\alpha$ un angolo con $\tan \alpha = k$, le soluzioni sono
$$
x = \alpha + n\pi .
$$
- $\sin x = k$ e $\cos x = k$ con $|k| > 1$ **non hanno soluzioni**, poiché seno e coseno assumono *soltanto* valori compresi tra $-1$ e $1$.

Sulla circonferenza goniometrica: i punti di ordinata $k$ sono i due punti di angoli $\alpha$ e $\pi - \alpha$, simmetrici rispetto all'asse delle ordinate; i punti di ascissa $k$ sono i due punti di angoli $\alpha$ e $-\alpha$, simmetrici rispetto all'asse delle ascisse. La tangente ha periodo $\pi$, perciò le sue soluzioni distano **mezzo giro** l'una dall'altra.

::grafico{curve="cos(t),sin(t),0,6.29" uguale=1 xmin=-1.4 xmax=1.4 ymin=-1.3 ymax=1.3 segmenti="-1.4,0.866,1.4,0.866;0,0,0.5,0.866;0,0,-0.5,0.866" punti="0.5,0.866,pieno,π/3;-0.5,0.866,pieno,2π/3" titolo="$\sin x = \dfrac{\sqrt{3}}{2}$: la retta $y = \dfrac{\sqrt{3}}{2}$ incontra la circonferenza nei due punti di angoli $\dfrac{\pi}{3}$ e $\dfrac{2\pi}{3}$"}
:::

:::esempio{titolo="Tre equazioni elementari"}
- $\sin x = \dfrac{\sqrt{3}}{2}$: dalla tabella $\alpha = \dfrac{\pi}{3}$, quindi $x = \dfrac{\pi}{3} + 2n\pi$ oppure $x = \dfrac{2\pi}{3} + 2n\pi$.
- $\cos x = -\dfrac{1}{2}$: un angolo con questo coseno è $\alpha = \dfrac{2\pi}{3}$, quindi $x = \pm\dfrac{2\pi}{3} + 2n\pi$.
- $\tan x = 1$: $\alpha = \dfrac{\pi}{4}$, quindi $x = \dfrac{\pi}{4} + n\pi$.
:::

:::attenzione
L'angolo $\alpha$ letto dalla tabella dà *una sola* delle due famiglie. Per $\sin x = \dfrac{1}{2}$ la famiglia $x = \dfrac{\pi}{6} + 2n\pi$ non contiene $\dfrac{5\pi}{6}$, che è soluzione perché $\sin\dfrac{5\pi}{6} = \sin\left(\pi - \dfrac{\pi}{6}\right) = \dfrac{1}{2}$. La seconda famiglia si ottiene dall'angolo supplementare $\pi - \alpha$ per il seno e dall'angolo opposto $-\alpha$ per il coseno.
:::

:::osservazione
Per i valori $0$, $1$ e $-1$ le due famiglie si riuniscono in una sola:

- $\sin x = 0$ per $x = n\pi$; $\sin x = 1$ per $x = \dfrac{\pi}{2} + 2n\pi$; $\sin x = -1$ per $x = -\dfrac{\pi}{2} + 2n\pi$;
- $\cos x = 0$ per $x = \dfrac{\pi}{2} + n\pi$; $\cos x = 1$ per $x = 2n\pi$; $\cos x = -1$ per $x = \pi + 2n\pi$.

Per $\sin x = 1$ si ha $\alpha = \dfrac{\pi}{2}$ e $\pi - \alpha = \dfrac{\pi}{2}$, quindi le due famiglie coincidono. Per $\sin x = 0$ le famiglie $x = 2n\pi$ e $x = \pi + 2n\pi$ contengono insieme tutti i multipli interi di $\pi$, perciò si scrivono come $x = n\pi$.
:::

:::esempio{titolo="Argomento multiplo dell'incognita"}
$\sin 2x = \dfrac{1}{2}$. L'equazione è elementare nell'incognita $2x$, quindi
$$
2x = \frac{\pi}{6} + 2n\pi \quad \text{oppure} \quad 2x = \frac{5\pi}{6} + 2n\pi .
$$
Dividendo per $2$ *tutto* il secondo membro, compreso il termine $2n\pi$, si ottiene
$$
x = \frac{\pi}{12} + n\pi \quad \text{oppure} \quad x = \frac{5\pi}{12} + n\pi .
$$
Le soluzioni si ripetono ogni $\pi$, quindi nell'intervallo $[0, 2\pi)$, cioè per $0 \leq x < 2\pi$, sono quattro: $\dfrac{\pi}{12}$, $\dfrac{5\pi}{12}$, $\dfrac{13\pi}{12}$ e $\dfrac{17\pi}{12}$.

::grafico{f="sin(2*x);0.5" xmin=-0.3 xmax=6.6 ymin=-1.5 ymax=1.5 punti="0.2618,0.5,pieno;1.309,0.5,pieno;3.4034,0.5,pieno;4.4506,0.5,pieno" titolo="Su $[0, 2\pi)$ il grafico di $y = \sin 2x$ incontra la retta $y = \dfrac{1}{2}$ in $\dfrac{\pi}{12}$, $\dfrac{5\pi}{12}$, $\dfrac{13\pi}{12}$ e $\dfrac{17\pi}{12}$"}
:::

## Equazioni riconducibili a elementari

:::teorema{#riconducibili-a-elementari titolo="Uguaglianza di due seni o di due coseni"}
Per $n \in \mathbb{Z}$:

- $\sin A = \sin B$ *se e solo se* $A = B + 2n\pi$ oppure $A = \pi - B + 2n\pi$;
- $\cos A = \cos B$ *se e solo se* $A = B + 2n\pi$ oppure $A = -B + 2n\pi$.

Le alternative sono le stesse delle equazioni elementari: due angoli hanno lo stesso seno quando coincidono a meno di giri oppure sono **supplementari** a meno di giri, lo stesso coseno quando coincidono oppure sono **opposti** a meno di giri. Un'equazione del tipo $\sin A = \cos B$ si porta in questa forma con gli **angoli associati**, scrivendo $\cos B = \sin\left(\dfrac{\pi}{2} - B\right)$.
:::

:::esempio
$\sin 2x = \sin\left(x + \dfrac{\pi}{3}\right)$. Le due alternative sono
$$
2x = x + \frac{\pi}{3} + 2n\pi \quad \text{oppure} \quad 2x = \pi - x - \frac{\pi}{3} + 2n\pi ,
$$
quindi dalla prima $x = \dfrac{\pi}{3} + 2n\pi$, e dalla seconda $3x = \dfrac{2\pi}{3} + 2n\pi$, cioè $x = \dfrac{2\pi}{9} + \dfrac{2n\pi}{3}$.
:::

## Equazioni di secondo grado in seno o coseno

:::teorema{#secondo-grado-goniometriche titolo="Equazioni di secondo grado in seno o coseno"}
Un'equazione della forma $a\sin^2 x + b\sin x + c = 0$ si risolve con la **sostituzione** $t = \sin x$, che la trasforma nel sistema
$$
\begin{cases}
a t^2 + b t + c = 0 \\[4pt]
-1 \leq t \leq 1
\end{cases}
$$
Ogni radice $t$ con $|t| \leq 1$ dà l'equazione elementare $\sin x = t$; una radice con $|t| > 1$ **va scartata**, perché la condizione $-1 \leq t \leq 1$ non è soddisfatta. Lo stesso procedimento vale con $t = \cos x$. Se l'equazione contiene sia $\sin^2 x$ sia $\cos x$, la sostituzione $\sin^2 x = 1 - \cos^2 x$, che segue dall'**identità fondamentale**, la porta in una sola funzione.
:::

:::esempio
$2\cos^2 x - \cos x - 1 = 0$. Posto $t = \cos x$, l'equazione $2t^2 - t - 1 = 0$ ha radici $t = 1$ e $t = -\dfrac{1}{2}$, entrambe **accettabili**. Da $\cos x = 1$ segue $x = 2n\pi$; da $\cos x = -\dfrac{1}{2}$ segue $x = \pm\dfrac{2\pi}{3} + 2n\pi$.
:::

:::esempio{titolo="Equazione senza termine noto"}
$2\sin^2 x - \sin x = 0$. Raccogliendo $\sin x$ l'equazione diventa $\sin x\,(2\sin x - 1) = 0$, e un prodotto è nullo se e solo se è nullo almeno un fattore. Da $\sin x = 0$ segue $x = n\pi$; da $\sin x = \dfrac{1}{2}$ segue $x = \dfrac{\pi}{6} + 2n\pi$ oppure $x = \dfrac{5\pi}{6} + 2n\pi$. La divisione per $\sin x$ avrebbe tolto la famiglia $x = n\pi$, che è soluzione perché per $x = n\pi$ entrambi i termini valgono $0$.
:::

## Equazioni omogenee e lineari

:::teorema{#omogenee-e-lineari titolo="Equazioni omogenee di secondo grado"}
Un'equazione della forma
$$
a\sin^2 x + b\sin x \cos x + c\cos^2 x = 0
$$
si dice **omogenea di secondo grado** in seno e coseno. Se $a \neq 0$, i punti con $\cos x = 0$ *non* sono soluzioni, perché per essi $\sin^2 x = 1$ e il primo membro vale $a \neq 0$. Si può quindi dividere per $\cos^2 x$, e si ottiene l'equazione di secondo grado
$$
a\tan^2 x + b\tan x + c = 0 ,
$$
le cui radici danno equazioni elementari nella tangente. Se $a = 0$ si raccoglie $\cos x$ e l'equazione **si spezza in due fattori**.
:::

:::esempio{titolo="Caso con $a = 0$"}
$\sin x \cos x - \sqrt{3}\cos^2 x = 0$. Manca il termine in $\sin^2 x$, quindi i punti con $\cos x = 0$ sono soluzioni e la divisione per $\cos^2 x$ li perderebbe. Raccogliendo $\cos x$ si ottiene
$$
\cos x\,\left(\sin x - \sqrt{3}\cos x\right) = 0 .
$$
Il primo fattore dà $x = \dfrac{\pi}{2} + n\pi$. Nel secondo fattore i punti con $\cos x = 0$ non lo annullano, perché lì $\sin x = \pm 1$; si divide quindi per $\cos x$ e si ottiene $\tan x = \sqrt{3}$, cioè $x = \dfrac{\pi}{3} + n\pi$.
:::

:::osservazione
Un'equazione del tipo $a\sin^2 x + b\sin x \cos x + c\cos^2 x = d$, con $d \neq 0$, si riconduce a un'equazione omogenea scrivendo $d = d\,(\sin^2 x + \cos^2 x)$, per l'identità fondamentale. Per esempio
$$
\begin{aligned}
\sin^2 x + \sin x \cos x &= 1 \\[4pt]
\sin^2 x + \sin x \cos x &= \sin^2 x + \cos^2 x \\[4pt]
\sin x \cos x - \cos^2 x &= 0 \\[4pt]
\cos x\,(\sin x - \cos x) &= 0 .
\end{aligned}
$$
Da $\cos x = 0$ segue $x = \dfrac{\pi}{2} + n\pi$; da $\sin x = \cos x$, cioè $\tan x = 1$, segue $x = \dfrac{\pi}{4} + n\pi$.
:::

::::teorema{#angolo-aggiunto titolo="Metodo dell'angolo aggiunto"}
Siano $a, b$ non entrambi nulli e $R = \sqrt{a^2 + b^2}$. *Esiste* un angolo $\varphi$ tale che
$$
\begin{cases}
\cos\varphi = \dfrac{a}{R} \\[8pt]
\sin\varphi = \dfrac{b}{R}
\end{cases}
$$
e per ogni $x$ vale
$$
a\sin x + b\cos x = R\sin(x + \varphi) .
$$
L'uguaglianza si verifica sviluppando $R\sin(x + \varphi)$ con la **formula di addizione del seno**. Con questa scrittura l'equazione lineare $a\sin x + b\cos x = c$ diventa l'equazione elementare $\sin(x + \varphi) = \dfrac{c}{R}$, che ha soluzioni *se e solo se* $|c| \leq R$.

:::dimostrazione
Si mostra che il punto di coordinate $\left(\dfrac{a}{R}, \dfrac{b}{R}\right)$ sta sulla circonferenza goniometrica, poi si sviluppa $R\sin(x + \varphi)$. Poiché $a$ e $b$ non sono entrambi nulli, $R > 0$ e le divisioni per $R$ sono lecite. Vale
$$
\left(\frac{a}{R}\right)^2 + \left(\frac{b}{R}\right)^2 = \frac{a^2 + b^2}{R^2} = 1 ,
$$
quindi il punto appartiene alla circonferenza goniometrica, ed esiste un angolo $\varphi$ di cui esso è il punto associato, cioè con $\cos\varphi = \dfrac{a}{R}$ e $\sin\varphi = \dfrac{b}{R}$. Per la formula di addizione del seno,
$$
\begin{aligned}
R\sin(x + \varphi) &= R\,(\sin x \cos\varphi + \cos x \sin\varphi) \\[6pt]
&= R\left(\sin x \cdot \frac{a}{R} + \cos x \cdot \frac{b}{R}\right) \\[6pt]
&= a\sin x + b\cos x .
\end{aligned}
$$
:::
::::

:::esempio
$\sin x + \sqrt{3}\cos x = 1$. Qui $R = \sqrt{1 + 3} = 2$, e da $\cos\varphi = \dfrac{1}{2}$, $\sin\varphi = \dfrac{\sqrt{3}}{2}$ segue $\varphi = \dfrac{\pi}{3}$. L'equazione diventa $2\sin\left(x + \dfrac{\pi}{3}\right) = 1$, cioè $\sin\left(x + \dfrac{\pi}{3}\right) = \dfrac{1}{2}$, quindi
$$
x + \frac{\pi}{3} = \frac{\pi}{6} + 2n\pi \quad \text{oppure} \quad x + \frac{\pi}{3} = \frac{5\pi}{6} + 2n\pi ,
$$
da cui $x = -\dfrac{\pi}{6} + 2n\pi$ oppure $x = \dfrac{\pi}{2} + 2n\pi$.

::grafico{f="sin(x)+sqrt(3)*cos(x);1" xmin=-3.5 xmax=6.5 ymin=-2.5 ymax=2.5 punti="-0.5236,1,pieno;1.5708,1,pieno,π/2;5.7596,1,pieno,11π/6" etichette="-1.75,1.3,−π/6" titolo="$y = \sin x + \sqrt{3}\cos x = 2\sin\left(x + \dfrac{\pi}{3}\right)$ oscilla tra $-2$ e $2$ e incontra la retta $y = 1$ in $-\dfrac{\pi}{6}$ e $\dfrac{\pi}{2}$, a meno di $2\pi$"}
:::

:::attenzione
La divisione per un fattore che può annullarsi fa **perdere soluzioni**. Nell'equazione $\sin x \cos x = \cos x$ il raccoglimento dà $\cos x\,(\sin x - 1) = 0$, con le famiglie $x = \dfrac{\pi}{2} + n\pi$ (dal primo fattore) e $x = \dfrac{\pi}{2} + 2n\pi$ (dal secondo, già comprese nella prima); la divisione per $\cos x$ avrebbe lasciato *soltanto* $\sin x = 1$.
:::

## Disequazioni elementari

:::teorema{#disequazioni-goniometriche titolo="Disequazioni elementari"}
La disequazione $\sin x > k$ con $|k| < 1$ si legge sulla circonferenza goniometrica: le soluzioni sono gli angoli il cui punto ha ordinata maggiore di $k$. Il procedimento su un periodo:

1. si risolve l'equazione $\sin x = k$ su un giro, trovando due angoli;
2. i due punti corrispondenti dividono la circonferenza in due archi;
3. l'arco i cui punti hanno ordinata maggiore di $k$ dà l'intervallo delle soluzioni;
4. la soluzione generale si ottiene aggiungendo $2n\pi$ agli estremi dell'intervallo.

Per $\cos x > k$ il procedimento è lo stesso con l'ascissa al posto dell'ordinata. Se $k \geq 1$ la disequazione $\sin x > k$ **non ha soluzioni**, perché il seno non supera $1$; se $k = -1$ sono soluzioni tutti gli $x$ tranne $x = \dfrac{3\pi}{2} + 2n\pi$, dove il seno vale $-1$; se $k < -1$ *ogni* $x \in \mathbb{R}$ è soluzione.
:::

:::esempio
$\sin x > \dfrac{1}{2}$. Su $[0, 2\pi)$ l'equazione $\sin x = \dfrac{1}{2}$ ha soluzioni $\dfrac{\pi}{6}$ e $\dfrac{5\pi}{6}$; l'arco di ordinata maggiore di $\dfrac{1}{2}$ è quello **superiore**, quindi le soluzioni su un periodo sono $\dfrac{\pi}{6} < x < \dfrac{5\pi}{6}$ e la soluzione generale è
$$
\frac{\pi}{6} + 2n\pi < x < \frac{5\pi}{6} + 2n\pi, \qquad n \in \mathbb{Z} .
$$

::grafico{curve="cos(t),sin(t),0.5236,2.618;cos(t),sin(t),2.618,6.8068" uguale=1 xmin=-1.4 xmax=1.4 ymin=-1.3 ymax=1.3 segmenti="-1.4,0.5,1.4,0.5;0,0,0.866,0.5;0,0,-0.866,0.5" punti="0.866,0.5,vuoto,π/6;-0.866,0.5,vuoto,5π/6" titolo="$\sin x > \dfrac{1}{2}$: l'arco a tratto continuo, di ordinata maggiore di $\dfrac{1}{2}$, va da $\dfrac{\pi}{6}$ a $\dfrac{5\pi}{6}$, estremi esclusi"}
:::

:::esempio
$\cos x > -\dfrac{\sqrt{2}}{2}$. Su $[0, 2\pi)$ l'equazione $\cos x = -\dfrac{\sqrt{2}}{2}$ ha soluzioni $\dfrac{3\pi}{4}$ e $\dfrac{5\pi}{4}$; l'arco di ascissa maggiore di $-\dfrac{\sqrt{2}}{2}$ è quello che contiene il punto di angolo $0$, quindi le soluzioni su $[0, 2\pi)$ sono $\left[0, \dfrac{3\pi}{4}\right) \cup \left(\dfrac{5\pi}{4}, 2\pi\right)$, cioè $0 \leq x < \dfrac{3\pi}{4}$ oppure $\dfrac{5\pi}{4} < x < 2\pi$, e la soluzione generale è
$$
-\frac{3\pi}{4} + 2n\pi < x < \frac{3\pi}{4} + 2n\pi, \qquad n \in \mathbb{Z} .
$$

::grafico{f="cos(x);-0.7071" xmin=-6.5 xmax=6.5 ymin=-1.5 ymax=1.5 area="cos(x);-0.7071;-2.356;2.356|cos(x);-0.7071;3.927;6.5|cos(x);-0.7071;-6.5;-3.927" punti="-2.356,-0.7071,vuoto,−3π/4;2.356,-0.7071,vuoto,3π/4" titolo="$\cos x > -\dfrac{\sqrt{2}}{2}$: il grafico del coseno sta sopra la retta $y = -\dfrac{\sqrt{2}}{2}$ per $-\dfrac{3\pi}{4} < x < \dfrac{3\pi}{4}$, a meno di $2\pi$"}
:::

:::attenzione
Se l'arco delle soluzioni contiene il punto di angolo $0$, gli angoli trovati su $[0, 2\pi)$, presi nell'ordine in cui l'arco li percorre, non formano un intervallo. Per $\cos x > -\dfrac{\sqrt{2}}{2}$ la scrittura $\dfrac{5\pi}{4} + 2n\pi < x < \dfrac{3\pi}{4} + 2n\pi$ descrive l'insieme vuoto, perché $\dfrac{5\pi}{4} > \dfrac{3\pi}{4}$. L'estremo $\dfrac{5\pi}{4}$ si sostituisce con l'angolo $\dfrac{5\pi}{4} - 2\pi = -\dfrac{3\pi}{4}$, che individua lo stesso punto, e si ottiene $-\dfrac{3\pi}{4} + 2n\pi < x < \dfrac{3\pi}{4} + 2n\pi$.
:::

:::esempio{titolo="Disequazione con la tangente"}
$\tan x > 1$. La tangente ha periodo $\pi$ ed è crescente nell'intervallo $\left(-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right)$, dove è definita. In questo intervallo $\tan x = 1$ per $x = \dfrac{\pi}{4}$, quindi la disequazione è soddisfatta per $\dfrac{\pi}{4} < x < \dfrac{\pi}{2}$. L'estremo $\dfrac{\pi}{2}$ è escluso perché lì la tangente non è definita. Aggiungendo $n\pi$ si ottiene la soluzione generale
$$
\frac{\pi}{4} + n\pi < x < \frac{\pi}{2} + n\pi, \qquad n \in \mathbb{Z} .
$$

::grafico{f="tan(x);1" xmin=-1.7 xmax=1.7 ymin=-3.5 ymax=3.5 asintoti="x=-1.5708;x=1.5708" segmenti="0.7854,0,0.7854,1" punti="0.7854,1,vuoto,π/4" titolo="$\tan x > 1$ in $\left(-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right)$: il grafico della tangente sta sopra la retta $y = 1$ per $\dfrac{\pi}{4} < x < \dfrac{\pi}{2}$"}
:::

## Disequazioni riconducibili a elementari

:::teorema{#disequazioni-riconducibili titolo="Disequazioni di secondo grado e fratte"}
Una disequazione di secondo grado in una sola funzione goniometrica, per esempio $a\sin^2 x + b\sin x + c > 0$, si risolve con la sostituzione $t = \sin x$:

1. si risolve la disequazione algebrica $a t^2 + b t + c > 0$, trovando uno o due intervalli di valori di $t$;
2. si intersecano questi intervalli con $[-1, 1]$, perché il seno assume solo valori in $[-1, 1]$;
3. ogni condizione su $t$ rimasta è una disequazione elementare in $\sin x$, che si risolve sulla circonferenza goniometrica;
4. le soluzioni di condizioni alternative si uniscono, quelle di condizioni da soddisfare insieme si intersecano.

In una disequazione fratta $\dfrac{N(x)}{D(x)} > 0$ si studiano separatamente il segno di $N(x)$ e quello di $D(x)$ su un periodo e si confrontano con la regola dei segni; i punti in cui $D(x) = 0$ sono esclusi in ogni caso, perché lì la frazione non è definita.
:::

:::esempio
$2\sin^2 x - \sin x - 1 < 0$ su $[0, 2\pi)$. Con $t = \sin x$ il trinomio $2t^2 - t - 1$ ha radici $t = -\dfrac{1}{2}$ e $t = 1$, e poiché il coefficiente di $t^2$ è positivo il trinomio è negativo tra le radici. La disequazione equivale quindi al sistema
$$
\begin{cases}
\sin x > -\dfrac{1}{2} \\[8pt]
\sin x < 1
\end{cases}
$$
La prima disequazione è soddisfatta su $\left[0, \dfrac{7\pi}{6}\right) \cup \left(\dfrac{11\pi}{6}, 2\pi\right)$, cioè per $0 \leq x < \dfrac{7\pi}{6}$ oppure $\dfrac{11\pi}{6} < x < 2\pi$. La seconda è soddisfatta per ogni $x$ tranne $x = \dfrac{\pi}{2}$, dove il seno vale $1$. Perciò le soluzioni sono
$$
0 \leq x < \frac{\pi}{2}, \qquad \frac{\pi}{2} < x < \frac{7\pi}{6}, \qquad \frac{11\pi}{6} < x < 2\pi .
$$

::grafico{f="sin(x);-0.5;1" xmin=-0.3 xmax=6.6 ymin=-1.5 ymax=1.5 area="sin(x);-0.5;0;3.6652|sin(x);-0.5;5.7596;6.2832" punti="1.5708,1,vuoto,π/2;3.6652,-0.5,vuoto,7π/6;5.7596,-0.5,vuoto,11π/6" titolo="$-\dfrac{1}{2} < \sin x < 1$ su $[0, 2\pi)$: il grafico del seno sta sopra la retta $y = -\dfrac{1}{2}$, e il punto $x = \dfrac{\pi}{2}$, dove $\sin x = 1$, è escluso"}
:::
