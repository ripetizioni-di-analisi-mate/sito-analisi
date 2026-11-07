---
titolo: "Equazioni alle derivate parziali"
sommario: "Classificazione, caratteristiche, separazione delle variabili, calore, onde, Laplace e formulazione debole."
---

## Equazioni e dati

:::definizione{#classificazione titolo="Equazione alle derivate parziali"}
Un'equazione alle derivate parziali lega una funzione di più variabili e le sue derivate. È lineare se l'incognita e le sue derivate compaiono al primo grado con coefficienti indipendenti dall'incognita. In due variabili, la parte principale
$$
A u_{xx}+2B u_{xy}+C u_{yy}
$$
è ellittica se $B^2-AC<0$, parabolica se è zero e iperbolica se è positiva, nei punti in cui si effettua la classificazione. Laplace è ellittica, il calore è parabolica e le onde sono iperboliche.

Un problema comprende anche dominio e dati iniziali o al bordo. Per l'equazione delle onde servono posizione e velocità iniziali; per il calore basta una distribuzione iniziale insieme alle condizioni al bordo.
:::

## Caratteristiche e trasporto

:::teorema{#trasporto titolo="Equazione del trasporto"}
Per $u_t+c u_x=0$ sulla retta e $u(0,x)=f(x)$, con $f\in C^1$, vale
$$
u(t,x)=f(x-ct).
$$
Lungo le curve $x(t)=x_0+ct$, la regola della catena dà $\dfrac d{dt}u(t,x(t))=u_t+cu_x=0$. Il valore resta quindi quello iniziale nel punto $x_0=x-ct$.

Con una sorgente continua $g$, la formula diventa
$$
u(t,x)=f(x-ct)+\int_0^t g(s,x-c(t-s))\,ds.
$$
Per $f(x)=e^{-x^2}$ il dato si trasla senza cambiare forma.
:::

## Separazione delle variabili

:::definizione{#separazione titolo="Autofunzioni e condizioni al bordo"}
Per cercare soluzioni di un'equazione lineare omogenea si pone $u(t,x)=T(t)X(x)$. Sul segmento $(0,L)$ con condizioni di Dirichlet omogenee, il problema spaziale è
$$
-X''=\lambda X,\qquad X(0)=X(L)=0.
$$
Le soluzioni non nulle corrispondono a $\lambda_n=\left(\dfrac{n\pi}L\right)^2$ e $X_n(x)=\sin\left(\dfrac{n\pi x}L\right)$, con $n\ge1$. Per $\lambda\le0$ le condizioni impongono la soluzione nulla; per $\lambda>0$ impongono $\sqrt\lambda L=n\pi$.

Il dato iniziale si espande in questa base, con coefficienti $b_n=\dfrac2L\int_0^L f(x)\sin\left(\dfrac{n\pi x}L\right)\,dx$. Le serie si interpretano almeno in $L^2$ per dati in $L^2$; la derivazione termine a termine richiede regolarità o stime ulteriori.
:::

## Equazione del calore

:::teorema{#calore titolo="Calore su un segmento"}
Per $u_t=\kappa u_{xx}$, con $\kappa>0$, $0<x<L$, $u(t,0)=u(t,L)=0$ e $u(0,x)=f(x)$, la soluzione per $f\in L^2(0,L)$ è
$$
u(t,x)=\sum_{n=1}^{\infty}b_n
e^{-\kappa\left(\frac{n\pi}L\right)^2t}
\sin\left(\frac{n\pi x}L\right).
$$
La serie converge al dato in $L^2$ quando $t\downarrow0$ ed è regolare per $t>0$. Ogni modo soddisfa $T_n'=-\kappa\lambda_nT_n$ e quindi decade esponenzialmente. Per $L=\pi$ e $f=\sin(2x)$ si ottiene $e^{-4\kappa t}\sin(2x)$.

Per una soluzione classica sufficientemente regolare, integrando per parti si ha
$$
\frac d{dt}\frac12\int_0^L u^2\,dx
=-\kappa\int_0^L u_x^2\,dx.
$$
L'energia decresce; applicando l'identità alla differenza di due soluzioni con stessi dati si ottiene unicità.
:::

## Equazione delle onde

:::teorema{#onde titolo="Formula di d'Alembert e modi su un segmento"}
Sulla retta, per $u_{tt}=c^2u_{xx}$ con $c>0$, $u(0,x)=f(x)$ e $u_t(0,x)=g(x)$, con $f\in C^2$ e $g\in C^1$,
$$
u(t,x)=\frac{f(x-ct)+f(x+ct)}2+
\frac1{2c}\int_{x-ct}^{x+ct}g(s)\,ds.
$$
La verifica deriva la formula e controlla i dati. Sul segmento con estremi fissi,
$$
u(t,x)=\sum_{n=1}^{\infty}
\left[a_n\cos(\omega_nt)+\frac{g_n}{\omega_n}\sin(\omega_nt)\right]
\sin\left(\frac{n\pi x}L\right),
\quad \omega_n=\frac{cn\pi}L,
$$
dove $a_n,g_n$ sono i coefficienti di Fourier di posizione e velocità. Per somme finite la verifica è diretta; per dati generali occorre precisare il senso di soluzione.

L'energia $\dfrac12\int_0^L(u_t^2+c^2u_x^2)\,dx$ è costante per soluzioni classiche con estremi fissi; l'identità segue integrando per parti.
:::

## Laplace e problemi di Dirichlet

:::teorema{#laplace-edp titolo="Equazione di Laplace e unicità"}
Una funzione $C^2$ è armonica se $\Delta u=0$. Il principio del massimo implica unicità per il problema di Dirichlet su un dominio limitato con dati continui al bordo, nella classe delle funzioni continue sulla chiusura e armoniche all'interno.

Nel rettangolo $0<x<\pi$, $0<y<H$, con dato $\sin(nx)$ sul bordo superiore e zero sugli altri bordi, la soluzione è
$$
u(x,y)=\frac{\sinh(ny)}{\sinh(nH)}\sin(nx).
$$
Infatti $u_{xx}=-n^2u$, $u_{yy}=n^2u$ e i valori al bordo coincidono con quelli prescritti. Nel disco unitario, il dato $\cos(n\theta)$, con $n\ge1$, dà $u(r,\theta)=r^n\cos(n\theta)$.
:::

## Equazione di Poisson e soluzioni deboli

:::definizione{#debole titolo="Derivata debole e spazio H¹"}
Una funzione $v\in L^1_{\mathrm{loc}}(\Omega)$ è la derivata debole $\partial_j u$ se
$$
\int_\Omega u\,\partial_j\varphi\,dx=-\int_\Omega v\varphi\,dx
\qquad\text{per ogni }\varphi\in C_c^\infty(\Omega).
$$
Lo spazio $H^1(\Omega)$ contiene funzioni $L^2$ con tutte le derivate prime deboli in $L^2$; la norma al quadrato è $\int(|u|^2+|\nabla u|^2)$. Lo spazio $H_0^1$ è la chiusura delle funzioni lisce a supporto compatto in questa norma. Per $-\,\Delta u=f$ con dato nullo al bordo, la formulazione debole è
$$
\int_\Omega\nabla u\cdot\nabla v\,dx=\int_\Omega fv\,dx
\qquad \text{per ogni }v\in H_0^1(\Omega).
$$
Si ottiene moltiplicando l'equazione per una funzione test e integrando per parti; questa formulazione dà senso alla soluzione anche senza derivate seconde classiche.
:::

## Esistenza e metodo dell'energia

:::teorema{#lax-milgram titolo="Lax-Milgram per Poisson"}
Su un Hilbert reale $H$, se una forma bilineare $a$ è continua e coerciva, cioè $|a(u,v)|\le C\|u\|\|v\|$ e $a(u,u)\ge\alpha\|u\|^2$ con $\alpha>0$, allora per ogni funzionale continuo $\ell$ esiste un unico $u$ con $a(u,v)=\ell(v)$ per ogni $v$.

Su un dominio limitato Lipschitz, la disuguaglianza di Poincaré rende $\|\nabla u\|_2$ una norma equivalente su $H_0^1$. Per $f\in L^2$, la forma $a(u,v)=\int\nabla u\cdot\nabla v$ e il funzionale $\ell(v)=\int fv$ soddisfano le ipotesi. Quindi il problema debole di Poisson ha un'unica soluzione, che minimizza l'energia $\dfrac12\int|\nabla u|^2-\int fu$.
:::
