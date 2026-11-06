---
titolo: Disequazioni goniometriche
sommario: Archi soluzione sulla circonferenza, disequazioni elementari e composte, prodotti, rapporti e sistemi con attenzione a dominio ed estremi.
---

## Dal valore della funzione agli archi

:::definizione{#archi titolo="Insieme delle soluzioni"}
Una **disequazione goniometrica** chiede per quali angoli una funzione è maggiore o minore di un valore. Sulla circonferenza il seno è l'ordinata, quindi $\sin x>a$ individua i punti al di sopra della retta $y=a$. Il coseno è l'ascissa, quindi $\cos x>a$ individua i punti a destra della retta $x=a$.

Si descrivono prima gli archi di un periodo e poi si aggiungono i multipli del periodo. Un estremo è incluso soltanto se l'uguaglianza è ammessa e l'espressione è definita. Per esempio $\sin x\geq0$ equivale a $2k\pi\leq x\leq\pi+2k\pi$, con $k\in\mathbb Z$.
:::

:::esempio
Nell'intervallo $[0,2\pi)$ la disequazione $\sin x>0$ ha soluzione $(0,\pi)$. Per $\sin x\geq0$ la soluzione diventa $[0,\pi]$. Il valore $2\pi$ resta escluso perché appartiene all'estremo escluso dell'intervallo assegnato.

::grafico{f="sin(x);0" area="sin(x);0;0;3.141592654" xmin=0 xmax=7 ymin=-2 ymax=2 titolo="Il seno è positivo tra $0$ e $\pi$ in un periodo"}
:::

## Disequazioni elementari del seno

:::teorema{#seno titolo="Confronto del seno con una costante"}
Se $-1<a<1$ e $\alpha=\arcsin a$, allora
$$
\sin x>a\iff\alpha+2k\pi<x<\pi-\alpha+2k\pi.
$$
Per $\sin x\geq a$ si includono entrambi gli estremi. La soluzione di $\sin x<a$ è il complementare di quella di $\sin x\geq a$, mentre per $\sin x\leq a$ si prende il complementare di $\sin x>a$.

Per esempio $\sin x\geq\dfrac12$ dà $\dfrac\pi6+2k\pi\leq x\leq\dfrac{5\pi}{6}+2k\pi$. Se la costante è fuori da $[-1,1]$ si confronta con l'intervallo immagine del seno; per esempio $\sin x<2$ vale per ogni reale, mentre $\sin x>1$ è impossibile.
:::

:::esempio
Per $\sin x<-\dfrac12$, in $[0,2\pi)$ la retta $y=-\dfrac12$ incontra la circonferenza agli angoli $\dfrac{7\pi}{6}$ e $\dfrac{11\pi}{6}$. I punti con ordinata minore stanno tra questi angoli, quindi la soluzione è $\left(\dfrac{7\pi}{6},\dfrac{11\pi}{6}\right)$.
:::

## Disequazioni del coseno e della tangente

:::teorema{#coseno-tangente titolo="Confronti di coseno e tangente"}
Se $-1<a<1$ e $\beta=\arccos a$, allora
$$
\cos x>a\iff-\beta+2k\pi<x<\beta+2k\pi.
$$
L'arco può attraversare $0$, quindi nell'intervallo $[0,2\pi)$ viene diviso in due parti. Per $\cos x>\dfrac12$ si ottiene $\left[0,\dfrac\pi3\right)\cup\left(\dfrac{5\pi}{3},2\pi\right)$.

Poiché la tangente è crescente in ciascun ramo, per ogni $a$ reale
$$
\tan x>a\iff\arctan a+k\pi<x<\frac\pi2+k\pi.
$$
Il bordo destro è sempre escluso perché la tangente non è definita. Per $\tan x\geq1$ si include il bordo $\dfrac\pi4+k\pi$, mentre resta escluso $\dfrac\pi2+k\pi$.
:::

## Argomenti lineari

:::teorema{#argomenti titolo="Disequazioni con angolo trasformato"}
Per $\sin(ax+b)>c$ si pone $t=ax+b$, si trovano gli intervalli in $t$ e si risolvono le doppie disequazioni rispetto a $x$. Se si divide per un numero negativo, il verso cambia.

Per $\sin2x>\dfrac12$ si ha
$$
\frac\pi6+2k\pi<2x<\frac{5\pi}{6}+2k\pi
\iff
\frac\pi{12}+k\pi<x<\frac{5\pi}{12}+k\pi.
$$
In $[0,2\pi)$ restano due intervalli, $\left(\dfrac\pi{12},\dfrac{5\pi}{12}\right)$ e $\left(\dfrac{13\pi}{12},\dfrac{17\pi}{12}\right)$. Il periodo rispetto a $x$ è $\pi$, quindi in un intervallo lungo $2\pi$ la configurazione si ripete due volte.
:::

## Disequazioni di secondo grado

:::teorema{#quadratiche titolo="Sostituzione algebrica"}
Se una disequazione è polinomiale in $\sin x$, si pone $t=\sin x$ e si risolve in $t$, imponendo anche $-1\leq t\leq1$. Poi si torna alle disequazioni elementari del seno. Si procede analogamente per il coseno.

Per esempio
$$
2\sin^2x-\sin x-1\geq0
\iff
(2\sin x+1)(\sin x-1)\geq0.
$$
In $t$ si ottiene $t\leq-\dfrac12$ oppure $t\geq1$. Poiché $t\in[-1,1]$, la seconda condizione diventa $t=1$. In $[0,2\pi)$ la soluzione è
$$
\left[\frac{7\pi}{6},\frac{11\pi}{6}\right]\cup\left\{\frac\pi2\right\}.
$$
Il punto isolato deriva dal massimo del seno, che soddisfa l'uguaglianza.
:::

## Prodotti e tabella dei segni

:::teorema{#prodotti titolo="Segno di un prodotto"}
Per studiare un prodotto si trovano gli zeri di ogni fattore in un periodo comune. Questi valori dividono il periodo in intervalli; in ciascuno si calcola il segno dei fattori e poi quello del prodotto.

Per $\sin x\cos x<0$ in $[0,2\pi)$ i fattori hanno segni opposti nel secondo e nel quarto quadrante. La soluzione è dunque
$$
\left(\frac\pi2,\pi\right)\cup\left(\frac{3\pi}{2},2\pi\right).
$$
Gli angoli sugli assi danno prodotto nullo e sono esclusi. La formula $2\sin x\cos x=\sin2x$ fornisce un controllo indipendente degli stessi intervalli.
:::

## Rapporti e dominio

:::teorema{#rapporti titolo="Segno di un rapporto"}
Una frazione ha segno positivo quando numeratore e denominatore hanno lo stesso segno. Gli zeri del denominatore sono esclusi anche se la disequazione ammette l'uguaglianza. Moltiplicare per un denominatore di segno variabile richiederebbe distinguere i casi, quindi la tabella dei segni conserva direttamente tutte le condizioni.

Per esempio $\dfrac{\sin x}{\cos x}\geq0$ in $[0,2\pi)$ ha soluzione
$$
\left[0,\frac\pi2\right)\cup\left[\pi,\frac{3\pi}{2}\right).
$$
Gli angoli $0$ e $\pi$ annullano il numeratore e sono ammessi. Gli angoli $\dfrac\pi2$ e $\dfrac{3\pi}{2}$ annullano il denominatore e sono esclusi.
:::

:::attenzione
Semplificare una frazione conserva il dominio originale. Per $\dfrac{\sin x(1-\cos x)}{1-\cos x}>0$ rimane la condizione $x\neq2k\pi$. L'espressione semplificata è $\sin x$, ma il dominio continua a escludere i punti in cui la frazione iniziale non esiste.
:::

## Sistemi e controllo finale

:::definizione{#sistemi titolo="Intersezione delle soluzioni"}
In un sistema tutte le condizioni devono valere insieme, quindi la soluzione è la loro **intersezione**. Per esempio
$$
\begin{cases}\sin x\geq\dfrac12,\\\cos x>0\end{cases}
\quad\text{in }[0,2\pi)
$$
ha soluzione $\left[\dfrac\pi6,\dfrac\pi2\right)$. La prima condizione dà $\left[\dfrac\pi6,\dfrac{5\pi}{6}\right]$; la seconda seleziona i quadranti con ascissa positiva. L'estremo $\dfrac\pi2$ è escluso perché il coseno vale $0$.

Per controllare gli intervalli si sostituisce un angolo interno e si verificano separatamente i bordi. Nel sistema precedente $x=\dfrac\pi3$ soddisfa entrambe le condizioni; $x=\dfrac{2\pi}{3}$ soddisfa la prima e viola la seconda, quindi è escluso.
:::
