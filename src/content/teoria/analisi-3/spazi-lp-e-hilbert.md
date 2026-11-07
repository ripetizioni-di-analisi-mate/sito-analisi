---
titolo: "Spazi Lᵖ e spazi di Hilbert"
sommario: "Norme integrali, Hölder, convergenza in Lᵖ, prodotto scalare, proiezioni, basi ortonormali, Riesz e convergenza debole."
---

## Spazi Lᵖ

:::definizione{#spazi-lp titolo="Norme integrali e classi di equivalenza"}
Su uno spazio di misura, per $1\le p<\infty$ si definisce
$$
L^p=\{f\text{ misurabile}:\int|f|^p\,d\mu<\infty\}\big/\sim,
\qquad \|f\|_p=\left(\int|f|^p\,d\mu\right)^{\frac1p},
$$
dove $f\sim g$ significa uguaglianza quasi ovunque. Gli elementi sono quindi classi di funzioni. In $L^\infty$ la norma è $\operatorname{ess\,sup}|f|$, che ignora gli insiemi nulli.

Su $(0,1)$, $x^{-\alpha}$ con $\alpha>0$ appartiene a $L^p$ esattamente quando $\alpha p<1$. Infatti l'integrale di $x^{-\alpha p}$ converge soltanto in questo caso.
:::

## Hölder e Minkowski

:::teorema{#holder titolo="Disuguaglianze integrali e completezza"}
Per $\dfrac1p+\dfrac1q=1$, con $1\le p,q\le\infty$, vale
$$
\int|fg|\,d\mu\le\|f\|_p\|g\|_q.
$$
Per $p=q=2$ è Cauchy-Schwarz. La disuguaglianza di Minkowski dà $\|f+g\|_p\le\|f\|_p+\|g\|_p$. Ogni $L^p$, per $1\le p\le\infty$, è completo.

Per $1<p<\infty$, Hölder segue dalla disuguaglianza di Young $ab\le\dfrac{a^p}p+\dfrac{b^q}q$ applicata alle funzioni normalizzate. Minkowski segue applicando Hölder a $|f+g|^{p-1}|f|$ e $|f+g|^{p-1}|g|$. Per la completezza si estrae da una successione di Cauchy una sottosuccessione con differenze di norme sommabili, ottenendo un limite quasi ovunque e poi in norma.
:::

## Inclusioni e convergenze

:::teorema{#convergenze-lp titolo="Inclusioni su spazi di misura finita"}
Se $\mu(X)<\infty$ e $1\le p<q\le\infty$, allora
$$
L^q\subseteq L^p,\qquad
\|f\|_p\le\mu(X)^{\frac1p-\frac1q}\|f\|_q.
$$
È un'applicazione di Hölder a $|f|^p$ e $1$. Su spazi di misura infinita questa inclusione non vale in generale.

Per $p<\infty$, convergere in norma $L^p$ implica convergere in misura, poiché $\mu\{|f_n-f|>\varepsilon\}\le\dfrac{\|f_n-f\|_p^p}{\varepsilon^p}$, e implica una sottosuccessione convergente quasi ovunque. Non assicura in generale la convergenza quasi ovunque dell'intera successione.
:::

:::esempio{titolo="Successioni concentrate"}
Per $f_n=n^\alpha\mathbf1_{(0,\frac1n)}$,
$$
\|f_n\|_p^p=n^{\alpha p-1},\qquad
\|f_n\|_p=n^{\alpha-\frac1p}.
$$
Quindi la convergenza in $L^p$ a zero vale se e solo se $\alpha<\dfrac1p$. Per $\alpha=\dfrac1p$ la norma resta $1$, mentre il limite puntuale su $(0,1)$ è zero.
:::

## Spazi di Hilbert

:::definizione{#hilbert titolo="Prodotto scalare e completezza"}
Un prodotto scalare complesso è lineare nel primo argomento, coniugato-lineare nel secondo, hermitiano e definito positivo. Induce $\|x\|=\sqrt{\langle x,x\rangle}$. Uno spazio completo per questa norma è uno **spazio di Hilbert**.

In $L^2$ si pone $\langle f,g\rangle=\int f\overline g\,d\mu$; in $\ell^2$, $\langle x,y\rangle=\sum_nx_n\overline{y_n}$. Valgono Cauchy-Schwarz e l'identità del parallelogramma
$$
\|x+y\|^2+\|x-y\|^2=2\|x\|^2+2\|y\|^2.
$$
Quest'ultima permette di riconoscere se una norma proviene da un prodotto scalare.
:::

## Proiezione ortogonale

::::teorema{#proiezione titolo="Migliore approssimazione su un sottospazio chiuso"}
Se $M$ è un sottospazio lineare chiuso di un Hilbert $H$, per ogni $x\in H$ esiste un unico $p\in M$ che minimizza $\|x-p\|$. La caratterizzazione è $x-p\perp M$. Per una base ortonormale finita $(e_j)$ di $M$,
$$
P_Mx=\sum_j\langle x,e_j\rangle e_j.
$$

:::dimostrazione
L'identità del parallelogramma rende di Cauchy una successione minimizzante. Completezza e chiusura danno un limite $p\in M$. Minimizzando $\|x-p-ty\|^2$ per $y\in M$ e per scalari prima reali e poi immaginari si ottiene ortogonalità. Infine
$$
\|x-y\|^2=\|x-p\|^2+\|p-y\|^2
$$
dà minimalità e unicità.
:::
::::

:::esempio{titolo="Approssimazione con una costante"}
In $L^2(0,1)$ la proiezione di $x$ sulle costanti è la media $\dfrac12$. L'errore quadratico minimo è $\int_0^1(x-\frac12)^2\,dx=\dfrac1{12}$.
:::

## Basi ortonormali e Parseval

:::teorema{#basi-hilbert titolo="Bessel e Parseval"}
Per un sistema ortonormale $(e_n)$ si ha $\sum_n|\langle x,e_n\rangle|^2\le\|x\|^2$ (Bessel). Se il sottospazio generato è denso, il sistema è una base ortonormale e
$$
x=\sum_n\langle x,e_n\rangle e_n\quad\text{in norma},\qquad
\|x\|^2=\sum_n|\langle x,e_n\rangle|^2.
$$
La seconda identità è Parseval. Ogni Hilbert separabile ha una base ortonormale finita o numerabile. In $L^2(-\pi,\pi)$ le funzioni $\dfrac{e^{inx}}{\sqrt{2\pi}}$, con $n\in\mathbb Z$, formano una base ortonormale: si ottiene la convergenza in norma delle serie di Fourier.
:::

## Rappresentazione di Riesz e convergenza debole

:::teorema{#riesz-debole titolo="Funzionali e convergenza debole"}
Per ogni funzionale lineare continuo $\ell:H\to\mathbb C$ esiste un unico $y\in H$ tale che $\ell(x)=\langle x,y\rangle$, e $\|\ell\|=\|y\|$. È il teorema di Riesz. Per $\ell(f)=\int_0^1f(x)x\,dx$, il vettore rappresentante è $y(x)=x$ e la norma è $\dfrac1{\sqrt3}$.

Si scrive $x_n\rightharpoonup x$ se $\langle x_n,y\rangle\to\langle x,y\rangle$ per ogni $y\in H$. Una successione ortonormale tende debolmente a zero per Bessel, pur avendo norma costante $1$. La convergenza debole unita a $\|x_n\|\to\|x\|$ implica quella in norma, espandendo il quadrato di $\|x_n-x\|$.
:::
