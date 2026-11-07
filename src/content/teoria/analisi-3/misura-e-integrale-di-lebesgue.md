---
titolo: "Misura e integrale di Lebesgue"
sommario: "Misurabilità, funzioni semplici, integrale, convergenza monotona, Fatou, convergenza dominata, Tonelli e Fubini."
---

## Sigma-algebre e misure

:::definizione{#misura titolo="Spazio di misura"}
Una sigma-algebra $\mathcal A$ su $X$ contiene $X$ ed è chiusa per complementare e unioni numerabili. Una **misura** è una funzione $\mu:\mathcal A\to[0,+\infty]$ con $\mu(\varnothing)=0$ e
$$
\mu\left(\bigcup_{n=1}^{\infty}E_n\right)=\sum_{n=1}^{\infty}\mu(E_n)
$$
per insiemi misurabili a due a due disgiunti. La terna $(X,\mathcal A,\mu)$ è uno spazio di misura. Seguono monotonia e subadditività numerabile. Una proprietà vale quasi ovunque se le eccezioni sono contenute in un insieme misurabile nullo. La misura di conteggio assegna il numero degli elementi; gli integrali diventano somme.
:::

## Misura di Lebesgue

:::definizione{#lebesgue titolo="Misura esterna e misurabilità"}
Per $E\subseteq\mathbb R$, si pone
$$
m^*(E)=\inf\left\{\sum_n|I_n|:E\subseteq\bigcup_n I_n,\ I_n\text{ intervalli aperti}\right\}.
$$
Un insieme $E$ è misurabile secondo Lebesgue se, per ogni $A\subseteq\mathbb R$, vale $m^*(A)=m^*(A\cap E)+m^*(A\setminus E)$. Sugli insiemi misurabili la restrizione $m=m^*$ è una misura completa: anche ogni sottoinsieme di un insieme nullo è misurabile e nullo.

Gli intervalli hanno misura uguale alla lunghezza. I singoletti sono nulli, quindi ogni insieme numerabile è nullo. In particolare $\mathbb Q\cap[0,1]$ ha misura zero pur essendo denso. In $\mathbb R^d$ la costruzione usa ricoprimenti mediante rettangoli.
:::

## Funzioni misurabili e semplici

:::definizione{#semplici titolo="Misurabilità e integrale delle funzioni semplici"}
Una funzione reale $f$ è misurabile se $\{x:f(x)>t\}\in\mathcal A$ per ogni $t\in\mathbb R$. Le funzioni continue sono misurabili, e i limiti puntuali conservano la misurabilità. Una funzione semplice è una somma finita $s=\sum_{j=1}^k a_j\mathbf1_{E_j}$, con insiemi misurabili disgiunti. Per $a_j\ge0$,
$$
\int s\,d\mu=\sum_{j=1}^k a_j\mu(E_j),
$$
con convenzione $0\cdot\infty=0$. Per esempio $2\mathbf1_{[0,1]}+3\mathbf1_{(1,3]}$ ha integrale $2+6=8$. Ogni funzione misurabile non negativa è limite crescente di funzioni semplici non negative.
:::

## Integrale di Lebesgue

:::definizione{#integrale-lebesgue titolo="Integrale di una funzione misurabile"}
Per $f\ge0$ misurabile si definisce
$$
\int f\,d\mu=\sup\left\{\int s\,d\mu:0\le s\le f,\ s\text{ semplice}\right\}.
$$
Per $f$ reale si scrive $f=f^+-f^-$, dove $f^+=\max(f,0)$ e $f^-=\max(-f,0)$. L'integrale è definito se almeno uno dei due integrali è finito. La funzione è **integrabile** se $\int|f|<\infty$, e allora $\int f=\int f^+-\int f^-$. Per funzioni complesse si integrano le componenti.

Cambiare i valori su un insieme nullo conserva l'integrale, quindi $\int_0^1\mathbf1_{\mathbb Q}\,dm=0$. Una funzione Riemann-integrabile su un compatto ha lo stesso integrale di Lebesgue. Un integrale improprio soltanto condizionatamente convergente non garantisce invece l'integrabilità assoluta richiesta da $L^1$.
:::

## Convergenza monotona e Fatou

::::teorema{#convergenza-monotona titolo="Convergenza monotona"}
Se $0\le f_n\le f_{n+1}$ sono misurabili e $f_n\to f$ quasi ovunque, allora
$$
\int f\,d\mu=\lim_n\int f_n\,d\mu,
$$
anche se il valore è infinito. Ne segue lo scambio tra integrale e somma di funzioni non negative.

:::dimostrazione
La monotonia dà $\lim\int f_n\le\int f$. Per una funzione semplice $0\le s\le f$ e $0<c<1$, gli insiemi $E_n=\{f_n\ge cs\}$ crescono e ricoprono quasi ovunque $\{s>0\}$. Quindi $\int f_n\ge c\int_{E_n}s\to c\int s$. Si prende il supremo su $s$ e poi si fa tendere $c$ a $1$.
:::
::::

:::teorema{#fatou titolo="Lemma di Fatou"}
Per funzioni misurabili non negative,
$$
\int\liminf_n f_n\,d\mu\le\liminf_n\int f_n\,d\mu.
$$
Si applica la convergenza monotona a $\inf_{k\ge n}f_k$. Per $f_n=n\mathbf1_{(0,\frac1n)}$ il limite è zero quasi ovunque e gli integrali valgono $1$: la disuguaglianza può essere stretta.
:::

## Convergenza dominata

:::teorema{#dominata titolo="Convergenza dominata"}
Se $f_n\to f$ quasi ovunque ed esiste $g\in L^1(\mu)$ con $|f_n|\le g$ quasi ovunque per ogni $n$, allora
$$
\int|f_n-f|\,d\mu\to0,\qquad \int f_n\,d\mu\to\int f\,d\mu.
$$
La dimostrazione applica Fatou a $2g-|f_n-f|$. Per $f_n(x)=\dfrac{e^{-x}}{1+\frac xn}$ su $(0,\infty)$, la dominante $e^{-x}$ è integrabile e il limite è $e^{-x}$; quindi gli integrali tendono a $1$.

La successione $n\mathbf1_{(0,\frac1n)}$ mostra che la sola convergenza quasi ovunque non basta: non può esistere una dominante integrabile comune.
:::

## Tonelli e Fubini

:::teorema{#fubini titolo="Integrali su spazi prodotto"}
Su spazi di misura sigma-finiti, **Tonelli** identifica integrale doppio e integrali iterati per funzioni misurabili non negative, anche con valore infinito. Se $\int|f|<\infty$, **Fubini** garantisce sezioni integrabili quasi ovunque e
$$
\int_{X\times Y}f\,d(\mu\otimes\nu)
=\int_X\left(\int_Y f\,d\nu\right)d\mu
=\int_Y\left(\int_X f\,d\mu\right)d\nu.
$$
Per $e^{-x-2y}$ sul quadrante positivo, Tonelli permette di separare gli integrali e dà $\dfrac12$. Per una funzione di segno variabile si verifica prima l'integrabilità assoluta.
:::

## Integrali dipendenti da un parametro

:::teorema{#parametri titolo="Derivazione sotto il segno di integrale"}
Sia $I$ un intervallo aperto. Si supponga che $F(t,x)$ sia misurabile in $x$, differenziabile in $t$ quasi ovunque e integrabile in $x$ per un valore $t_0$. Se, su ogni sottointervallo compatto di $I$, $|\partial_tF(t,x)|$ è maggiorata da una funzione integrabile indipendente da $t$, allora
$$
\frac d{dt}\int F(t,x)\,d\mu(x)=\int\partial_tF(t,x)\,d\mu(x).
$$
La convergenza dominata si applica ai rapporti incrementali, controllati dal teorema del valor medio. Per $t>0$, derivando $\int_0^\infty e^{-tx}\,dx=\dfrac1t$ si ottiene $\int_0^\infty xe^{-tx}\,dx=\dfrac1{t^2}$.
:::
