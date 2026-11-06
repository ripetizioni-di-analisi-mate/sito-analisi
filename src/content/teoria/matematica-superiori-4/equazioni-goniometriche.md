---
titolo: Equazioni goniometriche
sommario: Equazioni elementari, argomenti lineari, prodotti, equazioni quadratiche, omogenee e lineari in seno e coseno, con soluzioni generali e in intervalli assegnati.
---

## Soluzioni e periodicità

:::definizione{#soluzioni titolo="Equazione goniometrica"}
Un'**equazione goniometrica** contiene l'incognita nell'argomento di una funzione goniometrica. Una soluzione è un valore reale che appartiene al dominio di tutte le espressioni e rende uguali i due membri. Per esempio $x=\dfrac\pi6$ risolve $2\sin x=1$, perché $2\cdot\dfrac12=1$.

Seno e coseno hanno periodo $2\pi$, quindi da una soluzione se ne ottengono altre aggiungendo multipli di $2\pi$. Nelle formule generali $k\in\mathbb Z$ significa che $k$ può essere qualsiasi intero, positivo, negativo o nullo. Le soluzioni in un intervallo assegnato si ricavano scegliendo i valori di $k$ che appartengono all'intervallo.
:::

:::esempio
L'equazione $\sin x=0$ ha soluzioni $x=k\pi$. Nell'intervallo $[0,2\pi)$ si ottengono $0$ e $\pi$. Se l'intervallo fosse $[0,2\pi]$, sarebbe compreso anche $2\pi$, perché l'estremo destro sarebbe incluso.
:::

## Equazioni elementari in seno e coseno

:::teorema{#elementari titolo="Equazioni del seno e del coseno"}
Se $|a|>1$, le equazioni $\sin x=a$ e $\cos x=a$ non hanno soluzioni reali. Se $|a|\leq1$, posto $\alpha=\arcsin a$, le soluzioni di $\sin x=a$ sono
$$
x=\alpha+2k\pi\quad\text{oppure}\quad x=\pi-\alpha+2k\pi.
$$
Posto invece $\beta=\arccos a$, le soluzioni di $\cos x=a$ sono
$$
x=\beta+2k\pi\quad\text{oppure}\quad x=-\beta+2k\pi.
$$
Le due famiglie possono coincidere nei casi estremi $a=1$ e $a=-1$. Per esempio $\cos x=-1$ dà la sola famiglia $x=\pi+2k\pi$.

::grafico{f="sin(x);0.5" punti="0.523598776,0.5,pieno;2.617993878,0.5,pieno" xmin=0 xmax=7 ymin=-2 ymax=2 titolo="In un giro $\sin x=\dfrac12$ ha due soluzioni"}
:::

:::esempio
Da $2\cos x+1=0$ segue $\cos x=-\dfrac12$. Poiché $\arccos\left(-\dfrac12\right)=\dfrac{2\pi}{3}$, le soluzioni sono $x=\pm\dfrac{2\pi}{3}+2k\pi$. In $[0,2\pi)$ diventano $\dfrac{2\pi}{3}$ e $\dfrac{4\pi}{3}$.
:::

## Tangente e uguaglianze tra funzioni

:::teorema{#tangente titolo="Equazioni della tangente e confronti di angoli"}
Per ogni $a$ reale l'equazione $\tan x=a$ ha soluzioni $x=\arctan a+k\pi$. Più in generale
$$
\begin{aligned}
\sin u=\sin v&\iff u=v+2k\pi\ \text{oppure}\ u=\pi-v+2k\pi,\\
\cos u=\cos v&\iff u=v+2k\pi\ \text{oppure}\ u=-v+2k\pi,\\
\tan u=\tan v&\iff u=v+k\pi,
\end{aligned}
$$
con entrambe le tangenti definite nell'ultima equivalenza. Per esempio $\sin x=\cos x$ si scrive $\sin x=\sin\left(\dfrac\pi2-x\right)$. Si ottiene $2x=\dfrac\pi2+2k\pi$, mentre l'altra famiglia non dà soluzioni; la forma raccolta è $x=\dfrac\pi4+k\pi$.
:::

## Argomenti lineari e intervalli

:::teorema{#argomenti titolo="Sostituzione dell'argomento"}
Per un'equazione in $\sin(ax+b)$, con $a\neq0$, si pone $t=ax+b$. Dopo aver trovato tutte le famiglie di $t$, si risolve ciascuna equazione lineare rispetto a $x$. Il periodo rispetto a $x$ è $\dfrac{2\pi}{|a|}$ per seno e coseno, $\dfrac\pi{|a|}$ per la tangente.

Per esempio $\sin\left(2x-\dfrac\pi6\right)=\dfrac12$ dà
$$
\begin{aligned}
2x-\frac\pi6&=\frac\pi6+2k\pi &&\Longrightarrow x=\frac\pi6+k\pi,\\
2x-\frac\pi6&=\frac{5\pi}{6}+2k\pi &&\Longrightarrow x=\frac\pi2+k\pi.
\end{aligned}
$$
In $[0,\pi)$ restano $\dfrac\pi6$ e $\dfrac\pi2$. La divisione per $2$ riguarda anche il termine periodico $2k\pi$.
:::

## Prodotti e rapporti

:::teorema{#prodotti titolo="Annullamento del prodotto"}
Un prodotto di espressioni reali è nullo se e solo se almeno un fattore è nullo. Perciò
$$
\sin x(2\cos x-1)=0
$$
equivale a $\sin x=0$ oppure $\cos x=\dfrac12$. Le soluzioni sono $x=k\pi$ oppure $x=\pm\dfrac\pi3+2k\pi$. Dividere direttamente per $\sin x$ eliminerebbe la prima famiglia.

Per un rapporto $\dfrac{N(x)}{D(x)}=0$, invece, devono valere insieme $N(x)=0$ e $D(x)\neq0$. Se $\dfrac{\sin x}{1-\cos x}=0$, gli zeri $x=2k\pi$ sono esclusi dal denominatore, quindi restano $x=\pi+2k\pi$.
:::

## Equazioni di secondo grado

:::teorema{#quadratiche titolo="Equazioni polinomiali in una funzione goniometrica"}
Un'equazione di secondo grado nel seno si trasforma ponendo $t=\sin x$. Si risolve l'equazione in $t$, si mantengono soltanto le radici in $[-1,1]$ e si risolvono le corrispondenti equazioni elementari. Per il coseno vale lo stesso procedimento; per la tangente ogni radice reale è ammissibile, nel suo dominio.

Per esempio
$$
2\sin^2x-\sin x-1=0
\iff(2\sin x+1)(\sin x-1)=0.
$$
Si ottengono $\sin x=-\dfrac12$ oppure $\sin x=1$. In $[0,2\pi)$ le soluzioni sono $\dfrac{7\pi}{6}$, $\dfrac{11\pi}{6}$ e $\dfrac\pi2$.
:::

:::esempio
Per $\sin^2x+\cos x-1=0$ si sostituisce $\sin^2x=1-\cos^2x$. Segue $-\cos^2x+\cos x=0$, cioè $\cos x(1-\cos x)=0$. In $[0,2\pi)$ si ottengono $0$, $\dfrac\pi2$ e $\dfrac{3\pi}{2}$. La sostituzione ha ricondotto entrambe le funzioni al coseno.
:::

## Equazioni omogenee e lineari

:::teorema{#omogenee titolo="Equazioni omogenee di secondo grado"}
Nell'equazione $a\sin^2x+b\sin x\cos x+c\cos^2x=0$, tutti i termini hanno grado $2$ in seno e coseno. Per $\cos x\neq0$ si divide per $\cos^2x$ e si ricava $a\tan^2x+b\tan x+c=0$. I punti con $\cos x=0$ si verificano separatamente nell'equazione iniziale.

Per $2\sin^2x-3\sin x\cos x+\cos^2x=0$, i punti con $\cos x=0$ danno $2\neq0$ e sono esclusi. Per gli altri punti si ottiene $(2\tan x-1)(\tan x-1)=0$, quindi $x=\arctan\dfrac12+k\pi$ oppure $x=\dfrac\pi4+k\pi$.
:::

:::teorema{#lineari titolo="Equazioni lineari in seno e coseno"}
Nell'equazione $a\sin x+b\cos x=c$, con $(a,b)\neq(0,0)$, il metodo dell'angolo aggiunto trasforma il primo membro in $R\sin(x+\varphi)$, dove $R=\sqrt{a^2+b^2}$. Esistono soluzioni se e solo se $|c|\leq R$.

Per $\sin x+\cos x=1$ si ha $\sqrt2\sin\left(x+\dfrac\pi4\right)=1$, da cui $x=2k\pi$ oppure $x=\dfrac\pi2+2k\pi$. La stessa equazione si può trattare con le formule parametriche, controllando i valori esclusi dalla sostituzione.
:::

## Parametri e controllo delle soluzioni

:::esempio{#parametri titolo="Numero di soluzioni al variare di un parametro"}
Si considera $2\sin x=m$ in $[0,2\pi)$. Se $|m|>2$ non ci sono soluzioni; se $m=2$ oppure $m=-2$ c'è una sola soluzione; se $-2<m<2$ ce ne sono due. Per $m=0$ sono $0$ e $\pi$, quindi gli estremi dell'intervallo richiedono attenzione nel conteggio.

Per un'equazione trasformata elevando al quadrato, ogni candidato si sostituisce nell'equazione originale. Da $\sin x+\cos x=1$, per esempio, il quadrato porta a $\sin2x=0$, che ammette anche $x=\pi$. Nell'equazione iniziale quel valore dà $-1=1$, quindi si scarta. Il quadrato rende uguali anche espressioni con segno opposto.
:::
