---
titolo: Potenze, funzioni ed equazioni esponenziali
sommario: Potenze reali, grafici esponenziali, equazioni e disequazioni, sostituzioni algebriche e modelli di crescita e decadimento.
---

## Potenze e proprietà

:::definizione{#potenze titolo="Esponenti interi, razionali e reali"}
Per $a>0$, le potenze con esponente intero si estendono ponendo $a^0=1$ e $a^{-n}=\dfrac1{a^n}$. Per un esponente razionale $\dfrac mn$, con $n>0$, si pone $a^{\frac mn}=\sqrt[n]{a^m}$. L'estensione agli esponenti reali conserva queste definizioni e le proprietà delle potenze.

Per esempio $16^{\frac34}=(\sqrt[4]{16})^3=8$ e $4^{-\frac12}=\dfrac12$. In questo argomento la base è positiva, così la potenza è definita per *ogni* esponente reale.
:::

:::teorema{#proprieta titolo="Proprietà delle potenze"}
Per $a,b>0$ e $u,v$ reali valgono
$$
a^ua^v=a^{u+v},\quad\frac{a^u}{a^v}=a^{u-v},\quad
(a^u)^v=a^{uv},\quad(ab)^u=a^ub^u.
$$
Per esempio $2^{x+1}=2\cdot2^x$, mentre $4^x=(2^2)^x=2^{2x}$. Queste trasformazioni permettono di scrivere basi diverse come potenze di una base comune.
:::

## La funzione esponenziale

:::definizione{#funzione titolo="Funzione esponenziale"}
La **funzione esponenziale** di base $a$ è $f(x)=a^x$, con $a>0$ e $a\neq1$. Ha dominio $\mathbb R$, immagine $(0,+\infty)$ e passa per $(0,1)$. Se $a>1$ è strettamente crescente; se $0<a<1$ è strettamente decrescente. La retta $y=0$ è un asintoto orizzontale.

La base $a=1$ darebbe la funzione costante $1$, perciò viene esclusa quando si usano l'inversa e le equivalenze delle equazioni esponenziali. La base $e$, approssimativamente $2{,}71828$, dà l'esponenziale naturale $e^x$.

::grafico{f="2^x;0.5^x" xmin=-4 xmax=4 ymin=0 ymax=9 legenda="2^x;\left(\dfrac12\right)^x" titolo="Esponenziale crescente e decrescente"}
:::

## Trasformazioni del grafico

:::teorema{#grafici titolo="Traslazioni e immagine"}
Per $f(x)=A\,a^{x-h}+b$, con $A\neq0$, il grafico è traslato orizzontalmente di $h$ e verticalmente di $b$, e l'asintoto è $y=b$. Se $A>0$ l'immagine è $(b,+\infty)$; se $A<0$ è $(-\infty,b)$.

Per esempio $f(x)=2^{x-1}-3$ ha immagine $(-3,+\infty)$ e zero $x=1+\log_2 3$. La funzione $g(x)=-2^x+3$ ha immagine $(-\infty,3)$ ed è decrescente. Il segno negativo riguarda l'intera potenza $2^x$.

::grafico{f="2^(x-1)-3" asintoti="y=-3" xmin=-3 xmax=5 ymin=-4 ymax=8 titolo="Traslazioni di $y=2^x$"}
:::

## Equazioni con la stessa base

:::teorema{#equazioni titolo="Uguaglianza degli esponenti"}
Se $a>0$ e $a\neq1$, l'esponenziale è iniettiva, quindi
$$
a^{f(x)}=a^{g(x)}\iff f(x)=g(x),
$$
nel dominio comune degli esponenti. Per esempio $3^{2x-1}=27=3^3$ equivale a $2x-1=3$, da cui $x=2$. Per $4^{x+1}=8^{x-1}$ si usa la base $2$ e si ottiene $2x+2=3x-3$, quindi $x=5$.

Se un membro è non positivo e l'altro è una potenza con base positiva, l'equazione è impossibile. Per esempio $2^x=-4$ non ha soluzioni reali, perché $2^x>0$ per ogni reale.
:::

## Sostituzioni algebriche

:::teorema{#sostituzione titolo="Equazioni riconducibili a polinomi"}
Quando compaiono $a^{2x}$ e $a^x$, si pone $t=a^x>0$ e si usa $a^{2x}=t^2$. Si risolve l'equazione algebrica e si mantengono soltanto le radici positive di $t$.

Per esempio
$$
4^x-5\cdot2^x+4=0
\iff t^2-5t+4=0
\iff(t-1)(t-4)=0.
$$
Da $2^x=1$ segue $x=0$; da $2^x=4$ segue $x=2$. Nell'equazione $4^x+2^x-2=0$ le radici in $t$ sono $1$ e $-2$, quindi resta soltanto $x=0$.
:::

## Disequazioni esponenziali

:::teorema{#disequazioni titolo="Monotonia e verso della disequazione"}
Se $a>1$, la funzione è crescente e $a^{f(x)}>a^{g(x)}$ equivale a $f(x)>g(x)$. Se $0<a<1$, è decrescente e la stessa disequazione equivale a $f(x)<g(x)$. Le equivalenze valgono anche sostituendo $>$ con $\geq$.

Per esempio $2^{x-1}\leq8$ dà $x-1\leq3$, quindi $x\leq4$. Invece $\left(\dfrac13\right)^{2x+1}>\dfrac19$ dà $2x+1<2$, quindi $x<\dfrac12$.
:::

:::esempio
Per $4^x-5\cdot2^x+4\leq0$ si pone $t=2^x>0$. Il trinomio è non positivo per $1\leq t\leq4$, quindi $1\leq2^x\leq4$ e $0\leq x\leq2$. La soluzione si controlla per $x=1$, dove il primo membro vale $4-10+4=-2$.
:::

## Equazioni risolte con i logaritmi

:::teorema{#logaritmi titolo="Esponenti non immediati"}
Per $a>0$, $a\neq1$ e $b>0$, l'equazione $a^x=b$ ha unica soluzione $x=\log_a b=\dfrac{\ln b}{\ln a}$. Il logaritmo è la funzione inversa dell'esponenziale e viene approfondito nell'argomento sui logaritmi.

Per $5\cdot2^x=35$ si ricava $2^x=7$, quindi $x=\dfrac{\ln7}{\ln2}\approx2{,}807$. Il valore è compreso tra $2$ e $3$, perché $2^2<7<2^3$. L'approssimazione viene fatta solo dopo aver scritto il risultato esatto.
:::

## Crescita e decadimento

:::definizione{#modelli titolo="Modello esponenziale"}
Se una quantità positiva si moltiplica per lo stesso fattore $q>0$ a ogni unità di tempo, il modello discreto è $N_n=N_0q^n$. Se cresce del $p\%$, $q=1+\dfrac p{100}$; se diminuisce del $p\%$, con $0<p<100$, $q=1-\dfrac p{100}$.

Per esempio una popolazione iniziale di $800$ individui che cresce del $5\%$ all'anno è descritta da $N_n=800(1{,}05)^n$. Dopo due anni vale $882$. La crescita percentuale si applica ogni volta al valore aggiornato.

Nel modello continuo $N(t)=N_0e^{kt}$, $k>0$ descrive crescita e $k<0$ decadimento. Il tempo di raddoppio è $T=\dfrac{\ln2}{k}$ per $k>0$; il tempo di dimezzamento è $T=\dfrac{\ln2}{|k|}$ per $k<0$. Se una sostanza si dimezza ogni $6$ ore, $N(t)=N_0\left(\dfrac12\right)^{\frac t6}$ e dopo $18$ ore resta $\dfrac{N_0}{8}$. Il rapporto $\dfrac t6$ è privo di unità, perché numeratore e denominatore sono entrambi misurati in ore.
:::
