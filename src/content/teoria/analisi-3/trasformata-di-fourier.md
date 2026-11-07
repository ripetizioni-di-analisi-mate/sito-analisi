---
titolo: "Trasformata di Fourier e convoluzione"
sommario: "Convenzione della trasformata, proprietà, convoluzione, inversione, Plancherel, distribuzioni e applicazioni alle equazioni."
---

## Convenzione e trasformabilità

:::definizione{#fourier titolo="Trasformata di Fourier"}
Per $f\in L^1(\mathbb R)$ si adotta la convenzione
$$
\widehat f(\xi)=\int_{\mathbb R}f(x)e^{-i\xi x}\,dx.
$$
La frequenza $\xi$ è angolare. La trasformata è limitata e continua, con $\|\widehat f\|_\infty\le\|f\|_1$, e tende a zero per $|\xi|\to\infty$ (lemma di Riemann-Lebesgue). La continuità segue dalla convergenza dominata; la decrescenza si prova prima sulle funzioni a gradini di supporto compatto e poi per densità in $L^1$.

La convenzione determina i fattori $2\pi$ di inversione e Plancherel. Negli esercizi del capitolo si usa sempre questa definizione.
:::

## Trasformate elementari

:::esempio{#esempi-fourier titolo="Intervalli, esponenziali e gaussiane"}
Per $a>0$,
$$
\widehat{\mathbf1_{[-a,a]}}(\xi)=\frac{2\sin(a\xi)}{\xi},\qquad
\widehat{\mathbf1_{[-a,a]}}(0)=2a.
$$
Si integra l'esponenziale tra $-a$ e $a$; il valore in zero è il limite continuo. Separando le due semirette si ottiene
$$
\widehat{e^{-a|x|}}(\xi)=\frac1{a+i\xi}+\frac1{a-i\xi}
=\frac{2a}{a^2+\xi^2}.
$$
Per la gaussiana vale
$$
\widehat{e^{-ax^2}}(\xi)=\sqrt{\frac\pi a}\,e^{-\frac{\xi^2}{4a}}.
$$
Una dimostrazione deriva la trasformata in $\xi$, integra per parti e ricava l'equazione $F'=-\dfrac{\xi}{2a}F$; il dato iniziale è l'integrale gaussiano $F(0)=\sqrt{\dfrac\pi a}$.
:::

## Traslazioni, modulazioni e dilatazioni

:::teorema{#proprieta-fourier titolo="Proprietà algebriche"}
Per $f\in L^1$, $a,b\in\mathbb R$ e $c\ne0$,
$$
\begin{aligned}
\mathcal F[f(x-a)](\xi)&=e^{-ia\xi}\widehat f(\xi),\\
\mathcal F[e^{ibx}f(x)](\xi)&=\widehat f(\xi-b),\\
\mathcal F[f(cx)](\xi)&=\frac1{|c|}\widehat f\left(\frac\xi c\right).
\end{aligned}
$$
Le formule seguono da cambi di variabile nell'integrale. La trasformata è lineare. Se $f$ è reale e pari, la trasformata è reale e pari; se è reale e dispari, è immaginaria pura e dispari. Una traslazione nello spazio introduce quindi una fase, mentre una modulazione trasla le frequenze.
:::

## Derivate e moltiplicazioni

:::teorema{#derivate-fourier titolo="Derivazione e frequenza"}
Se $f$ è assolutamente continua su ogni compatto e $f,f'\in L^1(\mathbb R)$, allora
$$
\widehat{f'}(\xi)=i\xi\widehat f(\xi).
$$
I termini al bordo sono nulli: l'integrabilità di $f'$ dà limiti finiti alle estremità e quella di $f$ li impone nulli. Se $xf\in L^1$, la convergenza dominata dà
$$
\frac d{d\xi}\widehat f(\xi)=-i\,\widehat{xf}(\xi),\qquad
\widehat{xf}(\xi)=i\,\widehat f'(\xi).
$$
Per funzioni di Schwartz si possono ripetere le operazioni a ogni ordine. In particolare $\widehat{f''}=-\xi^2\widehat f$.
:::

## Convoluzione

:::definizione{#convoluzione titolo="Convoluzione e trasformata"}
Per $f,g\in L^1(\mathbb R)$, la **convoluzione** è
$$
(f*g)(x)=\int_{\mathbb R}f(x-y)g(y)\,dy.
$$
Esiste quasi ovunque, appartiene a $L^1$ e $\|f*g\|_1\le\|f\|_1\|g\|_1$. Fubini e il cambio $u=x-y$ danno
$$
\widehat{f*g}=\widehat f\,\widehat g.
$$
Per funzioni di Schwartz vale anche $\widehat{fg}=\dfrac1{2\pi}\widehat f*\widehat g$. La convoluzione di due indicatori di intervalli è la lunghezza della loro sovrapposizione traslata: per $\mathbf1_{[0,a]}*\mathbf1_{[0,a]}$ si ottiene la funzione triangolare $x$ su $[0,a]$, $2a-x$ su $[a,2a]$ e zero altrove.
:::

## Inversione e Plancherel

:::teorema{#inversione-fourier titolo="Inversione e identità di Plancherel"}
Se $f,\widehat f\in L^1$, allora
$$
f(x)=\frac1{2\pi}\int_{\mathbb R}\widehat f(\xi)e^{i\xi x}\,d\xi
$$
quasi ovunque, e in ogni punto in cui $f$ è continua. La trasformata si estende per densità da $L^1\cap L^2$ a tutto $L^2$, e vale
$$
\|\widehat f\|_2^2=2\pi\|f\|_2^2,\qquad
\langle\widehat f,\widehat g\rangle=2\pi\langle f,g\rangle.
$$
È il teorema di Plancherel. Per una funzione soltanto in $L^2$, la trasformata si definisce mediante limite in norma, senza supporre convergente l'integrale ordinario. Con fattore $\dfrac1{\sqrt{2\pi}}$ la trasformata è un operatore unitario.
:::

## Distribuzioni temperate

:::definizione{#distribuzioni titolo="Distribuzioni e delta di Dirac"}
Lo spazio di Schwartz $\mathcal S$ contiene funzioni lisce le cui derivate decrescono più rapidamente di ogni potenza. Una distribuzione temperata è un funzionale lineare continuo su $\mathcal S$. La delta di Dirac è $\langle\delta_a,\varphi\rangle=\varphi(a)$, e la derivata distribuzionale si definisce con
$$
\langle T',\varphi\rangle=-\langle T,\varphi'\rangle.
$$
La trasformata si estende per dualità, $\langle\widehat T,\varphi\rangle=\langle T,\widehat\varphi\rangle$, usando la convenzione bilineare delle distribuzioni. Si ottiene $\widehat{\delta_a}(\xi)=e^{-ia\xi}$, $\widehat1=2\pi\delta_0$ e $\widehat{T'}=i\xi\widehat T$. La funzione di Heaviside ha derivata distribuzionale $\delta_0$: il salto diventa una massa concentrata.
:::

## Applicazione all'equazione del calore

:::esempio{#calore-fourier titolo="Trasformazione di un problema di Cauchy"}
Per $u_t=\kappa u_{xx}$ sulla retta, con $\kappa>0$ e dato iniziale $u_0$ di Schwartz, si trasforma nella variabile $x$:
$$
\partial_t\widehat u=-\kappa\xi^2\widehat u,\qquad
\widehat u(t,\xi)=e^{-\kappa t\xi^2}\widehat u_0(\xi).
$$
L'inversione e il teorema di convoluzione danno
$$
u(t,x)=G_t*u_0(x),\qquad
G_t(x)=\frac1{\sqrt{4\pi\kappa t}}e^{-\frac{x^2}{4\kappa t}}.
$$
Il nucleo ha integrale $1$ e si concentra in zero quando $t\downarrow0$. La soluzione è liscia per $t>0$ e riassume il dato iniziale nel limite.
:::
