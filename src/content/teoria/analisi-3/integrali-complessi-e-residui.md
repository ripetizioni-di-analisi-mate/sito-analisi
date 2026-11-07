---
titolo: "Analisi complessa: Cauchy, Laurent e residui"
sommario: "Cammini orientati, teorema e formula di Cauchy, serie di Laurent, singolarità, residui e calcolo di integrali reali."
---

## Integrale su un cammino

:::definizione{#integrale-complesso titolo="Integrale complesso e orientazione"}
Per un cammino $\gamma:[a,b]\to\mathbb C$, $C^1$ a tratti, e $f$ continua sulla sua immagine, si definisce
$$
\int_\gamma f(z)\,dz=\int_a^b f(\gamma(t))\gamma'(t)\,dt.
$$
Invertire il verso cambia il segno. Vale la stima $\left|\int_\gamma f\,dz\right|\le L(\gamma)\max_\gamma|f|$. Per $\gamma(t)=a+re^{it}$, $0\le t\le2\pi$, si ha $dz=ire^{it}dt$ e $\int_\gamma\dfrac{dz}{z-a}=2\pi i$. Il verso è antiorario.
:::

## Primitive e teorema di Cauchy

:::teorema{#cauchy titolo="Primitive e teorema di Cauchy"}
Se $F'=f$ su un aperto contenente il cammino, la regola della catena e il teorema fondamentale reale danno
$$
\int_\gamma f\,dz=F(\gamma(b))-F(\gamma(a)).
$$
Quindi su un cammino chiuso l'integrale è nullo. Se $f$ è olomorfa su un aperto semplicemente connesso $\Omega$, il **teorema di Cauchy** assicura integrale nullo su ogni cammino chiuso contenuto in $\Omega$. Ne segue l'esistenza di una primitiva: si fissa $z_*$ e si definisce $F(z)$ come integrale da $z_*$ a $z$; la nullità degli integrali chiusi rende il valore indipendente dal cammino. Il risultato locale da cui si deduce il teorema è il lemma di Goursat sugli integrali triangolari.

Per $f(z)=z^2$, la primitiva è $\dfrac{z^3}3$. Per $\dfrac1z$ sul piano bucato, l'integrale sulla circonferenza unitaria vale $2\pi i$: il dominio non è semplicemente connesso.
:::

## Formula di Cauchy e conseguenze

:::teorema{#formula-cauchy titolo="Formula integrale di Cauchy"}
Sia $\gamma$ semplice, chiusa, positiva e $C^1$ a tratti. Se $f$ è olomorfa su un aperto contenente la curva e il suo interno, per ogni $a$ interno e intero $n\ge0$ vale
$$
\int_\gamma\frac{f(z)}{(z-a)^{n+1}}\,dz=\frac{2\pi i}{n!}f^{(n)}(a).
$$
Il caso $n=0$ si ottiene sottraendo il valore $f(a)$ e usando il teorema di Cauchy; derivando rispetto ad $a$ si ottengono gli altri casi. Per $f(z)=e^{2z}$ su $|z|=1$, l'integrale di $\dfrac{e^{2z}}{z^3}$ vale $4\pi i$.

Le **stime di Cauchy** danno $|f^{(n)}(a)|\le\dfrac{n!M_R}{R^n}$, dove $M_R=\max_{|z-a|=R}|f(z)|$. Una funzione intera limitata è costante, perché per $n=1$ la stima tende a zero quando $R\to\infty$: è il teorema di Liouville.
:::

:::teorema{#identita-massimo titolo="Principio d'identità e principio del massimo"}
Su un dominio connesso, due funzioni olomorfe che coincidono su un insieme con punto di accumulazione interno coincidono ovunque. Una funzione olomorfa non costante non ha massimi locali del modulo. Questi risultati seguono dall'espansione locale di Taylor e dalla formula di Cauchy.

Per una funzione olomorfa su un intorno di un disco chiuso, il massimo del modulo si cerca quindi sul bordo. La condizione di accumulazione interna è necessaria nel principio d'identità: accumulare zeri soltanto su un punto del bordo non basta.
:::

## Sviluppi di Taylor e Laurent

:::teorema{#laurent titolo="Serie di Laurent"}
Se $f$ è olomorfa nell'anello $r<|z-a|<R$, ammette l'unico sviluppo
$$
f(z)=\sum_{n=-\infty}^{\infty}c_n(z-a)^n,\qquad
c_n=\frac1{2\pi i}\int_{|\zeta-a|=\rho}\frac{f(\zeta)}{(\zeta-a)^{n+1}}\,d\zeta,
$$
con $r<\rho<R$ e circonferenza positiva. Le due parti della serie convergono uniformemente sui compatti dell'anello. Nel disco di olomorfia i coefficienti negativi sono nulli e $c_n=\dfrac{f^{(n)}(a)}{n!}$: si ottiene Taylor.

Per $0<|z|<2$,
$$
\frac1{z(z-2)}=-\frac1{2z}\frac1{1-\frac z2}
=-\sum_{n=0}^{\infty}\frac{z^{n-1}}{2^{n+1}}.
$$
Per $|z|>2$ si espande invece in potenze di $\dfrac2z$. Ogni sviluppo deve riportare il proprio anello di convergenza.
:::

## Singolarità e residui

:::definizione{#singolarita titolo="Singolarità isolate e residui"}
Per $f$ olomorfa in un disco bucato intorno ad $a$, la serie di Laurent classifica la singolarità.

- Tutti i coefficienti negativi nulli: singolarità eliminabile.
- Un numero finito di termini negativi, con potenza minima $-m$: polo d'ordine $m$.
- Infinite potenze negative: singolarità essenziale.

Il **residuo** è $c_{-1}$. Per un polo semplice di $g/h$, con $g,h$ olomorfe, $h(a)=0$, $h'(a)\ne0$ e $g(a)\ne0$, vale $\operatorname{Res}(g/h,a)=\dfrac{g(a)}{h'(a)}$. Per un polo d'ordine $m$,
$$
\operatorname{Res}(f,a)=\frac1{(m-1)!}
\left[\frac{d^{m-1}}{dz^{m-1}}\big((z-a)^mf(z)\big)\right]_{z=a}.
$$
In zero, $\dfrac{\sin z}z$ è eliminabile, $\dfrac1{z^3}$ ha un polo triplo con residuo zero, ed $e^{1/z}$ è essenziale con residuo $1$. Per $e^{a/z}$ la serie $\sum_{n=0}^\infty\dfrac{a^n}{n!z^n}$ mostra che, per $a\ne0$, la singolarità è essenziale e il residuo è $a$.
:::

## Teorema dei residui e integrali reali

::::teorema{#residui titolo="Teorema dei residui"}
Sia $\gamma$ semplice, chiusa, positiva e $C^1$ a tratti. Se $f$ è olomorfa su un intorno della curva e del suo interno, salvo un numero finito di singolarità isolate interne $a_j$, allora
$$
\int_\gamma f(z)\,dz=2\pi i\sum_j\operatorname{Res}(f,a_j).
$$
Nessuna singolarità può appartenere al cammino. Con orientazione negativa cambia il segno.

:::dimostrazione
Si eliminano piccoli dischi disgiunti attorno alle singolarità. Cauchy sulla regione rimanente identifica l'integrale esterno con la somma di quelli sulle piccole circonferenze positive. Nelle serie di Laurent, l'unico monomio con integrale non nullo è $(z-a_j)^{-1}$, che dà $2\pi i$. Restano quindi i residui.
:::
::::

:::esempio{titolo="Un integrale razionale sulla retta"}
Per $a>0$ si integra $\dfrac1{z^2+a^2}$ sul segmento $[-R,R]$ e sul semicerchio superiore. Il polo interno $ia$ ha residuo $\dfrac1{2ia}$. L'integrale sull'arco ha modulo al più $\dfrac{\pi R}{R^2-a^2}$, che tende a zero. Quindi
$$
\int_{-\infty}^{\infty}\frac{dx}{x^2+a^2}=\frac\pi a.
$$
Per un fattore $e^{ibz}$, il segno di $b$ determina il semipiano in cui l'esponenziale decresce; l'eliminazione dell'arco richiede una stima, per esempio il lemma di Jordan nelle sue ipotesi. Un polo sul cammino richiede una prescrizione ulteriore, come il valore principale.
:::

## Conteggio degli zeri

:::teorema{#argomento-rouche titolo="Principio dell'argomento e Rouché"}
Se $f$ è meromorfa su un intorno di una curva semplice positiva e del suo interno, senza zeri o poli sulla curva,
$$
\frac1{2\pi i}\int_\gamma\frac{f'}f\,dz=N-P,
$$
dove zeri e poli sono contati con molteplicità. Se $f,g$ sono olomorfe e $|g|<|f|$ sul bordo, il teorema di **Rouché** dà lo stesso numero di zeri per $f$ e $f+g$ all'interno.

Su $|z|=2$, $|z+1|\le3<8=|z^3|$. Quindi $z^3+z+1$ ha tre zeri nel disco, senza bisogno di calcolare le radici.
:::
