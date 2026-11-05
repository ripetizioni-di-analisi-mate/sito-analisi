---
titolo: Angoli e funzioni goniometriche
sommario: Gradi e radianti, circonferenza goniometrica, seno, coseno, tangente, valori degli angoli notevoli, grafici e funzioni inverse.
---

## Angoli orientati e radianti

:::definizione{#radianti titolo="Misura di un angolo"}
Un **angolo orientato** descrive una rotazione da una semiretta iniziale a una finale. Il verso antiorario è positivo, quello orario è negativo. In gradi un giro completo misura $360^\circ$. Un **radiante** è l'angolo al centro che sottende un arco lungo quanto il raggio. Se l'arco ha lunghezza $s$ e il raggio è $r>0$, la misura in radianti è $\alpha=\dfrac{s}{r}$.

La circonferenza ha lunghezza $2\pi r$, quindi un giro completo misura $2\pi$ radianti. Ne segue la conversione
$$
\alpha_{\mathrm{rad}}=\alpha_{\mathrm{gradi}}\frac{\pi}{180},
\qquad
\alpha_{\mathrm{gradi}}=\alpha_{\mathrm{rad}}\frac{180}{\pi}.
$$
Per esempio $150^\circ=\dfrac{5\pi}{6}$, mentre $\dfrac{3\pi}{4}$ radianti corrispondono a $135^\circ$. Quando nella scrittura di un angolo manca il simbolo dei gradi, in questo corso la misura è in radianti.
:::

:::esempio{titolo="Archi e settori circolari"}
Per un angolo $\alpha\geq0$ misurato in radianti, l'arco e l'area del settore valgono
$$
s=r\alpha,\qquad A=\frac{r^2\alpha}{2}.
$$
Se $r=6\,\mathrm{cm}$ e $\alpha=\dfrac{\pi}{3}$, allora $s=2\pi\,\mathrm{cm}$ e $A=6\pi\,\mathrm{cm}^2$. La formula dell'area si ottiene moltiplicando $\pi r^2$ per la frazione di giro $\dfrac{\alpha}{2\pi}$.
:::

## Circonferenza goniometrica

:::definizione{#circonferenza titolo="Seno e coseno"}
La **circonferenza goniometrica** ha centro nell'origine e raggio $1$. Si parte dal punto $(1,0)$ e si compie una rotazione di angolo $\alpha$. Se il punto finale è $P$, le sue coordinate definiscono le due funzioni
$$
P=(\cos\alpha,\sin\alpha).
$$
Il **coseno** è quindi l'ascissa di $P$ e il **seno** è la sua ordinata. Per un quarto di giro si arriva a $(0,1)$, perciò $\cos\dfrac{\pi}{2}=0$ e $\sin\dfrac{\pi}{2}=1$. Ogni coordinata è compresa tra $-1$ e $1$, quindi $-1\leq\sin\alpha\leq1$ e $-1\leq\cos\alpha\leq1$.

::grafico{curve="cos(t),sin(t),0,6.283185307" vettori="0,0,0.6,0.8,P" segmenti="0.6,0,0.6,0.8;0,0.8,0.6,0.8" punti="0.6,0.8,pieno,P" xmin=-2 xmax=2 ymin=-2 ymax=2 uguale=1 titolo="Il punto $P$ ha coordinate $\cos\alpha$ e $\sin\alpha$"}
:::

:::osservazione
Il segno si legge dalla posizione di $P$. Nel primo quadrante seno e coseno sono positivi; nel secondo il seno è positivo e il coseno negativo; nel terzo entrambi sono negativi; nel quarto il seno è negativo e il coseno positivo. Per esempio $\dfrac{5\pi}{6}$ appartiene al secondo quadrante, quindi il suo seno è positivo e il suo coseno è negativo.
:::

## Relazioni tra le funzioni

::::teorema{#identita titolo="Identità goniometrica"}
Per ogni angolo reale $\alpha$ vale
$$
\sin^2\alpha+\cos^2\alpha=1.
$$
Qui $\sin^2\alpha$ significa $(\sin\alpha)^2$. La relazione permette di ricavare il valore assoluto di una funzione conoscendo l'altra. Il segno dipende dal quadrante.

:::dimostrazione
Il punto $P=(\cos\alpha,\sin\alpha)$ appartiene alla circonferenza di equazione $x^2+y^2=1$. Sostituendo le sue coordinate si ottiene l'identità.
:::
::::

:::esempio
Se $\sin\alpha=\dfrac{3}{5}$ e $\alpha$ è nel secondo quadrante, allora $\cos^2\alpha=1-\dfrac{9}{25}=\dfrac{16}{25}$. Il coseno è negativo in quel quadrante, quindi $\cos\alpha=-\dfrac{4}{5}$.
:::

:::definizione{#tangente titolo="Tangente e cotangente"}
La **tangente** è $\tan\alpha=\dfrac{\sin\alpha}{\cos\alpha}$ e richiede $\cos\alpha\neq0$. La **cotangente** è $\cot\alpha=\dfrac{\cos\alpha}{\sin\alpha}$ e richiede $\sin\alpha\neq0$. I domini sono pertanto
$$
D_{\tan}=\mathbb R\setminus\left\{\frac{\pi}{2}+k\pi\mid k\in\mathbb Z\right\},
\qquad
D_{\cot}=\mathbb R\setminus\{k\pi\mid k\in\mathbb Z\}.
$$
Per $\alpha=\dfrac{\pi}{4}$ seno e coseno sono uguali e diversi da zero, quindi tangente e cotangente valgono $1$.
:::

## Angoli notevoli e angoli associati

:::teorema{#notevoli titolo="Valori degli angoli notevoli"}
I triangoli rettangoli ottenuti da un quadrato e da un triangolo equilatero danno i seguenti valori.

| $\alpha$ | $0$ | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ |
| --- | --- | --- | --- | --- | --- |
| $\sin\alpha$ | $0$ | $\dfrac12$ | $\dfrac{\sqrt2}{2}$ | $\dfrac{\sqrt3}{2}$ | $1$ |
| $\cos\alpha$ | $1$ | $\dfrac{\sqrt3}{2}$ | $\dfrac{\sqrt2}{2}$ | $\dfrac12$ | $0$ |
| $\tan\alpha$ | $0$ | $\dfrac{\sqrt3}{3}$ | $1$ | $\sqrt3$ | non definita |

Nel triangolo equilatero di lato $2$, l'altezza divide la base in due parti di lunghezza $1$ e misura $\sqrt3$ per il teorema di Pitagora. Dividendo i cateti per l'ipotenusa si ricavano seno e coseno di $\dfrac{\pi}{6}$ e $\dfrac{\pi}{3}$.
:::

:::teorema{#associati titolo="Angoli associati"}
Le simmetrie della circonferenza danno
$$
\begin{aligned}
\sin(-\alpha)&=-\sin\alpha,&\cos(-\alpha)&=\cos\alpha,\\
\sin(\pi-\alpha)&=\sin\alpha,&\cos(\pi-\alpha)&=-\cos\alpha,\\
\sin(\pi+\alpha)&=-\sin\alpha,&\cos(\pi+\alpha)&=-\cos\alpha,\\
\sin\left(\frac\pi2-\alpha\right)&=\cos\alpha,&
\cos\left(\frac\pi2-\alpha\right)&=\sin\alpha.
\end{aligned}
$$
Per esempio $\sin\dfrac{5\pi}{6}=\sin\dfrac{\pi}{6}=\dfrac12$ e $\cos\dfrac{5\pi}{6}=-\dfrac{\sqrt3}{2}$. Le formule valgono per ogni $\alpha$ reale, perché derivano dalle coordinate dei punti simmetrici.
:::

## Grafici di seno e coseno

:::definizione{#periodo titolo="Periodicità"}
Una funzione è **periodica** se esiste $T>0$ tale che $f(x+T)=f(x)$ per ogni $x$ del dominio e la traslazione di $T$ conserva il dominio. Il più piccolo valore positivo con questa proprietà, quando esiste, è il **periodo fondamentale**. Seno e coseno hanno periodo fondamentale $2\pi$, perché un giro completo riporta allo stesso punto.

La funzione seno è dispari e la funzione coseno è pari. Gli zeri del seno sono $k\pi$, quelli del coseno sono $\dfrac\pi2+k\pi$, con $k\in\mathbb Z$.

::grafico{f="sin(x);cos(x)" xmin=-7 xmax=7 ymin=-2 ymax=2 legenda="\sin x;\cos x" titolo="Seno e coseno hanno lo stesso periodo e sono sfasati di $\dfrac\pi2$"}
:::

## Grafico della tangente

:::teorema{#grafico-tangente titolo="Periodo e asintoti della tangente"}
La tangente ha periodo fondamentale $\pi$, è dispari e ha zeri $k\pi$. In ogni intervallo $\left(-\dfrac\pi2+k\pi,\dfrac\pi2+k\pi\right)$ è crescente e assume tutti i valori reali. Le rette $x=\dfrac\pi2+k\pi$ sono asintoti verticali, cioè il grafico si avvicina a esse mentre i valori della funzione diventano arbitrariamente grandi in valore assoluto.

Per esempio $\tan\dfrac{5\pi}{4}=\tan\dfrac\pi4=1$, perché gli angoli differiscono di $\pi$.

::grafico{f="tan(x)" xmin=-5 xmax=5 ymin=-4 ymax=4 asintoti="x=-1.570796327;x=1.570796327" titolo="Rami del grafico di $y=\tan x$"}
:::

## Trasformazioni dei grafici

:::teorema{#trasformazioni titolo="Ampiezza, periodo e traslazioni"}
Nella funzione $y=A\sin(\omega x+\varphi)+b$, con $A\neq0$ e $\omega\neq0$, l'ampiezza è $|A|$, il periodo è $\dfrac{2\pi}{|\omega|}$ e l'insieme immagine è $[b-|A|,b+|A|]$. Scrivendo $\omega x+\varphi=\omega\left(x+\dfrac{\varphi}{\omega}\right)$ si riconosce una traslazione orizzontale di $-\dfrac{\varphi}{\omega}$. Le stesse regole valgono per il coseno.

Per $y=2\sin(2x)-1$ l'ampiezza è $2$, il periodo è $\pi$ e l'immagine è $[-3,1]$. I massimi si hanno quando $2x=\dfrac\pi2+2k\pi$, quindi per $x=\dfrac\pi4+k\pi$.

::grafico{f="2*sin(2*x)-1" xmin=-4 xmax=4 ymin=-4 ymax=2 titolo="Il grafico di $y=2\sin(2x)-1$"}
:::

## Funzioni goniometriche inverse

:::definizione{#inverse titolo="Arcoseno, arcocoseno e arcotangente"}
Il seno assume più volte lo stesso valore. Per definirne l'inversa si considera solo l'intervallo $\left[-\dfrac\pi2,\dfrac\pi2\right]$, in cui è crescente. Si ottiene $\arcsin x$, definita per $-1\leq x\leq1$ e con valori in quell'intervallo. Analogamente $\arccos x$ ha dominio $[-1,1]$ e valori in $[0,\pi]$; $\arctan x$ ha dominio $\mathbb R$ e valori in $\left(-\dfrac\pi2,\dfrac\pi2\right)$.

Per esempio $\arcsin\dfrac12=\dfrac\pi6$, $\arccos\left(-\dfrac12\right)=\dfrac{2\pi}{3}$ e $\arctan1=\dfrac\pi4$. Il risultato dell'inversa è *un* angolo nell'intervallo scelto. L'equazione $\sin x=\dfrac12$ ha invece infinite soluzioni, che si studiano nell'argomento sulle equazioni goniometriche.
:::
