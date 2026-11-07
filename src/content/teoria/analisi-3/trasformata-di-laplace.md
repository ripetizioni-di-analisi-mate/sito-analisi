---
titolo: "Trasformata di Laplace"
sommario: "Semipiano di convergenza, trasformate elementari, ritardi, convoluzione, antitrasformazione ed equazioni differenziali con dati iniziali."
---

## Trasformata unilatera e convergenza

:::definizione{#laplace titolo="Trasformata di Laplace"}
Per una funzione localmente integrabile su $[0,\infty)$ si definisce
$$
F(s)=\mathcal L[f](s)=\int_0^\infty e^{-st}f(t)\,dt,\qquad s\in\mathbb C,
$$
nei punti di convergenza assoluta. Se $|f(t)|\le Me^{at}$ per $t$ sufficientemente grande, l'integrale converge per $\operatorname{Re}s>a$. Sul semipiano di convergenza assoluta $F$ è olomorfa. Si usa la trasformata unilatera: i dati iniziali sono valori destri in $t=0$.

Per $f=1$, l'integrale vale $\dfrac1s$ per $\operatorname{Re}s>0$. La formula algebrica da sola non sostituisce l'indicazione del semipiano.
:::

## Trasformate elementari

:::teorema{#tabella-laplace titolo="Potenze, esponenziali e funzioni trigonometriche"}
Per interi $n\ge0$, $a\in\mathbb R$ e $b>0$,
$$
\begin{aligned}
\mathcal L[t^n](s)&=\frac{n!}{s^{n+1}}, &&\operatorname{Re}s>0,\\
\mathcal L[e^{at}](s)&=\frac1{s-a}, &&\operatorname{Re}s>a,\\
\mathcal L[\cos(bt)](s)&=\frac{s}{s^2+b^2}, &&\operatorname{Re}s>0,\\
\mathcal L[\sin(bt)](s)&=\frac b{s^2+b^2}, &&\operatorname{Re}s>0.
\end{aligned}
$$
Le potenze si trattano per integrazioni per parti, partendo da $\mathcal L[1]$. Per seno e coseno si usano gli esponenziali complessi. La linearità permette di combinare le formule su un semipiano comune. Per esempio $\mathcal L[t^2+3e^{-t}]=\dfrac2{s^3}+\dfrac3{s+1}$ per $\operatorname{Re}s>0$.
:::

## Derivate e dati iniziali

:::teorema{#derivate-laplace titolo="Trasformata delle derivate"}
Siano $f,f'$ localmente assolutamente continue e $f,f',f''$ di ordine esponenziale. Su un semipiano sufficientemente a destra, l'integrazione per parti dà
$$
\mathcal L[f']=sF(s)-f(0^+),\qquad
\mathcal L[f'']=s^2F(s)-sf(0^+)-f'(0^+).
$$
Inoltre $\mathcal L[t^nf]=(-1)^nF^{(n)}(s)$ nei punti interni al semipiano di convergenza. I termini iniziali rendono algebrica la trasformazione di un problema di Cauchy.

Per $y'+ay=0$, $y(0)=c$, si ha $(s+a)Y=c$ e quindi $y(t)=ce^{-at}$. Il dato iniziale compare nel numeratore.
:::

## Traslazioni e ritardi

:::teorema{#ritardi titolo="Traslazioni della frequenza e del tempo"}
Se $F=\mathcal L[f]$, allora $\mathcal L[e^{at}f(t)](s)=F(s-a)$. Per $\tau>0$ e la funzione di Heaviside $H$,
$$
\mathcal L[H(t-\tau)f(t-\tau)](s)=e^{-\tau s}F(s).
$$
La seconda formula segue dal cambio $u=t-\tau$ nell'integrale che inizia a $\tau$. Per esempio
$$
\mathcal L[H(t-2)(t-2)^2]=\frac{2e^{-2s}}{s^3}.
$$
Un ritardo modifica sia l'istante di attivazione sia l'argomento della funzione. Per trasformare $H(t-\tau)f(t)$ si riscrive $f(t)$ come funzione di $t-\tau$.
:::

## Convoluzione e antitrasformazione

:::teorema{#convoluzione-laplace titolo="Convoluzione causale"}
Per funzioni localmente integrabili di ordine esponenziale,
$$
(f*g)(t)=\int_0^t f(t-u)g(u)\,du,\qquad
\mathcal L[f*g](s)=F(s)G(s)
$$
su un semipiano di convergenza comune. Fubini permette di scambiare i due integrali. Per $a\ne b$,
$$
\mathcal L^{-1}\left[\frac1{(s+a)(s+b)}\right]
=\frac{e^{-at}-e^{-bt}}{b-a}.
$$
Il risultato segue anche dalle frazioni semplici. Un polo ripetuto di ordine $m$ in $-a$ corrisponde a $\dfrac{t^{m-1}}{(m-1)!}e^{-at}$.
:::

:::teorema{#inversione-laplace titolo="Unicità e formula di inversione"}
Per funzioni localmente integrabili di ordine esponenziale, l'uguaglianza delle trasformate su un semipiano implica uguaglianza quasi ovunque delle funzioni; se sono continue, l'uguaglianza vale in ogni punto. Per dati con regolarità e crescita sufficienti, per esempio funzioni $C^1$ a tratti di ordine esponenziale con analogo controllo della derivata sui tratti, l'inversione di Bromwich usa
$$
f(t)=\lim_{R\to\infty}\frac1{2\pi i}\int_{\gamma-iR}^{\gamma+iR}e^{st}F(s)\,ds
$$
nei punti di continuità, con $\gamma$ a destra delle singolarità e nel semipiano di convergenza. Nei casi razionali propri degli esercizi, frazioni semplici e tabella forniscono direttamente l'antitrasformata.
:::

## Problemi di Cauchy e forzanti

:::esempio{#cauchy-laplace titolo="Equazione del secondo ordine"}
Per $y''+y=1$, $y(0)=0$, $y'(0)=0$, si ottiene
$$
(s^2+1)Y(s)=\frac1s,\qquad
Y(s)=\frac1{s(s^2+1)}=\frac1s-\frac{s}{s^2+1}.
$$
Quindi $y(t)=1-\cos t$. Si verifica $y''+y=1$ e i due dati iniziali. Una forzante ritardata introduce un fattore $e^{-\tau s}$; dopo l'antitrasformazione si applica il ritardo allo svolgimento causale.
:::

## Valori iniziali e finali

:::osservazione{#valori-limite titolo="Condizioni dei teoremi del valore iniziale e finale"}
Per una funzione continua a destra nell'origine, di ordine esponenziale, vale $\lim_{s\to+\infty}sF(s)=f(0^+)$. Il teorema del valore finale, nel caso razionale proprio senza contributi impulsivi, richiede che tutti i poli di $sF(s)$ abbiano parte reale strettamente negativa; allora $\lim_{t\to\infty}f(t)=\lim_{s\to0^+}sF(s)$.

Per $F(s)=\dfrac1{s+2}$ il limite finale è zero, coerente con $e^{-2t}$. Per $F(s)=\dfrac1{s^2+1}$, il prodotto $sF(s)$ ha poli sull'asse immaginario: $\sin t$ non ha limite finale, anche se il limite algebrico in zero esiste.
:::
