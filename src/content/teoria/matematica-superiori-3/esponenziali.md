---
titolo: Potenze e funzioni esponenziali
sommario: 'Esponenziali: definizioni, metodi, esempi e condizioni da usare negli esercizi del terzo anno.'
---

## Potenze e proprietà

:::teorema{#potenze titolo="Esponenti interi e razionali"}
Per $a>0$, valgono $a^u a^v=a^{u+v}$, $\dfrac{a^u}{a^v}=a^{u-v}$ e $(a^u)^v=a^{uv}$. Inoltre $a^{-u}=\dfrac1{a^u}$ e $a^{\frac mn}=\sqrt[n]{a^m}$ per interi $m,n$ con $n>0$. Per esempio $16^{\frac34}=8$. La base positiva permette di estendere le potenze agli esponenti reali conservando queste proprietà.
:::

## Funzione esponenziale

:::definizione{#funzione titolo="Base positiva diversa da uno"}
Per $a>0$, $a\neq1$, la **funzione esponenziale** $f(x)=a^x$ ha dominio $\mathbb R$, immagine $(0,+\infty)$ e passa per $(0,1)$. È crescente se $a>1$ e decrescente se $0<a<1$. La retta $y=0$ è un asintoto orizzontale. Per $a=1$ si ottiene invece la funzione costante $1$.

::grafico{f="2^x;0.5^x" xmin=-4 xmax=4 ymin=-1 ymax=8 titolo="Una base maggiore di uno dà crescita, una base tra zero e uno dà decrescita"}
:::

## Equazioni con la stessa base

:::teorema{#equazioni titolo="Uguaglianza degli esponenti"}
Poiché $a^x$ è iniettiva, per $a>0$, $a\neq1$, $a^{f(x)}=a^{g(x)}$ equivale a $f(x)=g(x)$ nel dominio comune. Per $2^{x+1}=8=2^3$ si trova $x=2$. Per $4^x=8$, si riscrive $2^{2x}=2^3$, quindi $x=\dfrac32$. Il cambio di base si fonda sulle proprietà delle potenze.
:::

## Disequazioni con base maggiore di uno

:::teorema{#crescenti titolo="Conservazione del verso"}
Se $a>1$, $a^{f(x)}>a^{g(x)}$ equivale a $f(x)>g(x)$. Per $3^{2x-1}\leq27$, si scrive $27=3^3$, quindi $2x-1\leq3$ e $x\leq2$. Se gli esponenti contengono frazioni o radicali, si mantiene anche il loro dominio.
:::

## Disequazioni con base minore di uno

:::teorema{#decrescenti titolo="Inversione del verso"}
Se $0<a<1$, la funzione è decrescente, quindi $a^{f(x)}>a^{g(x)}$ equivale a $f(x)<g(x)$. Per $\left(\dfrac12\right)^x\geq\dfrac18$, si ottiene $x\leq3$. Il verso cambia per la monotonia della funzione, anche se non si moltiplica la disequazione per un numero negativo.
:::

## Equazioni riconducibili al secondo grado

:::teorema{#sostituzione titolo="Incognita esponenziale positiva"}
In $a^{2x}-sa^x+p=0$ si pone $t=a^x>0$. Si risolve $t^2-st+p=0$ e si conservano solo le radici positive, poi si torna a $x$. Per $4^x-5\cdot2^x+4=0$, $t=2^x$ dà $(t-1)(t-4)=0$, quindi $x=0$ oppure $x=2$.
:::

## Grafici traslati

:::teorema{#trasformazioni titolo="Traslazione dell'esponenziale"}
Per $f(x)=a^{x-h}+k$, l'immagine è $(k,+\infty)$ e l'asintoto orizzontale è $y=k$. La traslazione orizzontale non cambia l'immagine né la monotonia. Per $f(x)=2^{x-1}-3$, il punto $(1,-2)$ appartiene al grafico e l'asintoto è $y=-3$. L'asintoto non viene raggiunto per alcun $x$ reale.
:::

## Crescita e decadimento

:::definizione{#modelli titolo="Fattore moltiplicativo costante"}
Il modello $N(t)=N_0q^t$, con $N_0>0$ e $q>0$, descrive una quantità moltiplicata per $q$ in ogni unità di tempo. Se cresce del $10\%$, $q=1{,}10$; se diminuisce del $20\%$, $q=0{,}80$. Un raddoppio ogni $T$ unità dà $N(t)=N_0\cdot2^{\frac tT}$. Per $N_0=80$ e $T=3$, dopo $6$ unità la quantità vale $320$.
:::
