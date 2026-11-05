---
titolo: Formule goniometriche
sommario: Formule di addizione, sottrazione, duplicazione, bisezione, prostaferesi e parametriche, con dimostrazioni e applicazioni al calcolo esatto.
---

## Somma e differenza di due angoli

::::teorema{#addizione titolo="Formule di addizione e sottrazione"}
Per ogni coppia di angoli reali $\alpha$ e $\beta$ si ha
$$
\begin{aligned}
\cos(\alpha+\beta)&=\cos\alpha\cos\beta-\sin\alpha\sin\beta,\\
\cos(\alpha-\beta)&=\cos\alpha\cos\beta+\sin\alpha\sin\beta,\\
\sin(\alpha+\beta)&=\sin\alpha\cos\beta+\cos\alpha\sin\beta,\\
\sin(\alpha-\beta)&=\sin\alpha\cos\beta-\cos\alpha\sin\beta.
\end{aligned}
$$
Le formule permettono di calcolare funzioni di angoli ottenuti sommando o sottraendo angoli di cui si conoscono seno e coseno.

:::dimostrazione
Si confrontano due modi di calcolare una distanza sulla circonferenza. I punti $P=(\cos\alpha,\sin\alpha)$ e $Q=(\cos\beta,\sin\beta)$ soddisfano
$$
PQ^2=(\cos\alpha-\cos\beta)^2+(\sin\alpha-\sin\beta)^2
=2-2(\cos\alpha\cos\beta+\sin\alpha\sin\beta).
$$
Ruotando entrambi i punti di $-\beta$, la distanza resta uguale e si ottiene $PQ^2=2-2\cos(\alpha-\beta)$. Uguagliando le espressioni si ricava la formula del coseno della differenza. Sostituendo $-\beta$ si ricava quella della somma. Poiché $\sin t=\cos\left(\dfrac\pi2-t\right)$, dalle formule del coseno seguono quelle del seno.
:::
::::

:::esempio
Poiché $\dfrac{5\pi}{12}=\dfrac\pi4+\dfrac\pi6$, si ottiene
$$
\sin\frac{5\pi}{12}
=\frac{\sqrt2}{2}\frac{\sqrt3}{2}+\frac{\sqrt2}{2}\frac12
=\frac{\sqrt6+\sqrt2}{4}.
$$
La somma riguarda gli angoli, quindi si applica la formula di addizione prima di sostituire i valori notevoli.
:::

## Tangente della somma

:::teorema{#tangente-somma titolo="Formule di addizione della tangente"}
Quando $\tan\alpha$, $\tan\beta$ e la tangente del risultato sono definite, vale
$$
\tan(\alpha+\beta)=\frac{\tan\alpha+\tan\beta}{1-\tan\alpha\tan\beta},
\qquad
\tan(\alpha-\beta)=\frac{\tan\alpha-\tan\beta}{1+\tan\alpha\tan\beta}.
$$
Le formule si ricavano dividendo seno e coseno della somma per $\cos\alpha\cos\beta$. I denominatori scritti devono essere diversi da zero. Per esempio
$$
\tan\frac\pi{12}=\frac{1-\frac1{\sqrt3}}{1+\frac1{\sqrt3}}=2-\sqrt3.
$$
:::

:::attenzione
Il seno di una somma generalmente differisce dalla somma dei seni. Per $\alpha=\beta=\dfrac\pi6$ si ha $\sin(\alpha+\beta)=\dfrac{\sqrt3}{2}$, mentre $\sin\alpha+\sin\beta=1$. Anche la tangente richiede la propria formula di addizione.
:::

## Formule di duplicazione

::::teorema{#duplicazione titolo="Seno, coseno e tangente dell'angolo doppio"}
Per ogni $\alpha$ reale valgono
$$
\begin{aligned}
\sin2\alpha&=2\sin\alpha\cos\alpha,\\
\cos2\alpha&=\cos^2\alpha-\sin^2\alpha\\
&=1-2\sin^2\alpha=2\cos^2\alpha-1.
\end{aligned}
$$
Quando le tangenti coinvolte sono definite, vale inoltre $\tan2\alpha=\dfrac{2\tan\alpha}{1-\tan^2\alpha}$.

:::dimostrazione
Nelle formule di addizione si pone $\beta=\alpha$. Nell'espressione del coseno si sostituisce poi $\cos^2\alpha=1-\sin^2\alpha$ oppure $\sin^2\alpha=1-\cos^2\alpha$, ottenendo le due forme alternative.
:::
::::

:::esempio
Se $\sin\alpha=\dfrac35$ e $\alpha$ è acuto, allora $\cos\alpha=\dfrac45$. Ne segue $\sin2\alpha=\dfrac{24}{25}$ e $\cos2\alpha=\dfrac7{25}$. Inoltre
$$
\sin^2x=\frac{1-\cos2x}{2},\qquad \cos^2x=\frac{1+\cos2x}{2}.
$$
Queste ultime identità trasformano i quadrati in espressioni di primo grado nel coseno dell'angolo doppio.
:::

## Formule di bisezione

:::teorema{#bisezione titolo="Funzioni dell'angolo metà"}
Dalle formule di duplicazione del coseno si ricavano
$$
\sin\frac\alpha2=\pm\sqrt{\frac{1-\cos\alpha}{2}},
\qquad
\cos\frac\alpha2=\pm\sqrt{\frac{1+\cos\alpha}{2}}.
$$
I segni si scelgono separatamente dal quadrante di $\dfrac\alpha2$. Se $0<\alpha<\pi$, l'angolo metà appartiene al primo quadrante, quindi entrambi i segni sono positivi. Per esempio
$$
\cos\frac\pi8=\sqrt{\frac{1+\frac{\sqrt2}{2}}{2}}=\frac{\sqrt{2+\sqrt2}}{2}.
$$
Quando le espressioni sono definite, $\tan\dfrac\alpha2=\dfrac{\sin\alpha}{1+\cos\alpha}$; nell'ulteriore dominio $\sin\alpha\neq0$ si può anche scrivere $\tan\dfrac\alpha2=\dfrac{1-\cos\alpha}{\sin\alpha}$.
:::

## Somme trasformate in prodotti

:::teorema{#prostaferesi titolo="Formule di prostaferesi"}
Le formule di **prostaferesi** trasformano somme e differenze in prodotti.
$$
\begin{aligned}
\sin\alpha+\sin\beta&=2\sin\frac{\alpha+\beta}{2}\cos\frac{\alpha-\beta}{2},\\
\sin\alpha-\sin\beta&=2\cos\frac{\alpha+\beta}{2}\sin\frac{\alpha-\beta}{2},\\
\cos\alpha+\cos\beta&=2\cos\frac{\alpha+\beta}{2}\cos\frac{\alpha-\beta}{2},\\
\cos\alpha-\cos\beta&=-2\sin\frac{\alpha+\beta}{2}\sin\frac{\alpha-\beta}{2}.
\end{aligned}
$$
Per ricavare la prima, si pone $u=\dfrac{\alpha+\beta}{2}$ e $v=\dfrac{\alpha-\beta}{2}$, così $\alpha=u+v$ e $\beta=u-v$. Sommando le formule del seno i termini $\cos u\sin v$ si cancellano. Le altre identità si ottengono nello stesso modo, sommando o sottraendo le formule appropriate.
:::

:::esempio
Per scomporre $\sin3x+\sin x$ si calcolano semisomma $2x$ e semidifferenza $x$, quindi
$$
\sin3x+\sin x=2\sin2x\cos x.
$$
La scomposizione permette di studiare gli zeri imponendo $\sin2x=0$ oppure $\cos x=0$.

::grafico{f="sin(3*x)+sin(x)" xmin=-4 xmax=4 ymin=-3 ymax=3 titolo="Il grafico della somma $\sin3x+\sin x$"}
:::

## Prodotti trasformati in somme

:::teorema{#werner titolo="Formule di Werner"}
Per ogni $\alpha$ e $\beta$ valgono
$$
\begin{aligned}
2\sin\alpha\cos\beta&=\sin(\alpha+\beta)+\sin(\alpha-\beta),\\
2\cos\alpha\cos\beta&=\cos(\alpha+\beta)+\cos(\alpha-\beta),\\
2\sin\alpha\sin\beta&=\cos(\alpha-\beta)-\cos(\alpha+\beta).
\end{aligned}
$$
Si ottengono sommando o sottraendo le formule di addizione. Per esempio $2\sin3x\sin x=\cos2x-\cos4x$. Il termine con la differenza degli angoli precede quello con la somma nell'ultima formula; ciò fissa il segno del risultato.
:::

## Formule parametriche

:::teorema{#parametriche titolo="Sostituzione della tangente dell'angolo metà"}
Se $x\neq\pi+2k\pi$ si pone $t=\tan\dfrac x2$. Dividendo le formule di duplicazione per $\cos^2\dfrac x2$ si ottiene
$$
\sin x=\frac{2t}{1+t^2},\qquad
\cos x=\frac{1-t^2}{1+t^2}.
$$
Quando $\cos x\neq0$, si ha anche $\tan x=\dfrac{2t}{1-t^2}$. Le espressioni trasformano equazioni in seno e coseno in equazioni algebriche. Il denominatore $1+t^2$ è positivo per ogni $t$ reale.

Per $t=\dfrac12$ si ricavano $\sin x=\dfrac45$ e $\cos x=\dfrac35$. Nella risoluzione di un'equazione i valori $x=\pi+2k\pi$, esclusi dalla sostituzione, si controllano direttamente nell'equazione iniziale.

::grafico{curve="(1-t^2)/(1+t^2),2*t/(1+t^2),-12,12" punti="-1,0,vuoto" xmin=-2 xmax=2 ymin=-2 ymax=2 uguale=1 titolo="La parametrizzazione descrive la circonferenza tranne il punto $(-1,0)$"}
:::

## Combinazioni lineari di seno e coseno

:::teorema{#angolo-aggiunto titolo="Metodo dell'angolo aggiunto"}
Siano $a,b$ reali, non entrambi nulli, e $R=\sqrt{a^2+b^2}$. Si sceglie $\varphi$ tale che $\cos\varphi=\dfrac aR$ e $\sin\varphi=\dfrac bR$. Per la formula di addizione
$$
a\sin x+b\cos x=R\sin(x+\varphi).
$$
L'espressione assume quindi tutti i valori di $[-R,R]$. Per esempio
$$
\sqrt3\sin x+\cos x=2\sin\left(x+\frac\pi6\right).
$$
Il massimo è $2$ e si raggiunge per $x=\dfrac\pi3+2k\pi$. Nelle equazioni, la condizione $|c|\leq R$ è necessaria e sufficiente affinché $a\sin x+b\cos x=c$ abbia soluzioni reali.

::grafico{f="sqrt(3)*sin(x)+cos(x)" xmin=-4 xmax=4 ymin=-3 ymax=3 titolo="Ampiezza $2$ della funzione $\sqrt3\sin x+\cos x$"}
:::
