---
titolo: "Spazi di Banach e operatori lineari"
sommario: "Completezza, norme di operatori, duale, punto fisso, Baire, uniforme limitatezza, applicazione aperta, Hahn-Banach e compattezza."
---

## Spazi normati e completezza

:::definizione{#banach titolo="Spazio di Banach"}
Una norma su uno spazio vettoriale reale o complesso soddisfa positività, omogeneità e disuguaglianza triangolare. Una successione $(x_n)$ è di Cauchy se per ogni $\varepsilon>0$ si ha $\|x_n-x_m\|<\varepsilon$ per $n,m$ sufficientemente grandi. Uno spazio normato in cui ogni successione di Cauchy converge è uno **spazio di Banach**.

Gli spazi $\mathbb R^d$, $L^p$ per $1\le p\le\infty$ e $C([a,b])$ con la norma del massimo sono Banach. Lo spazio dei polinomi con la norma del massimo su $[0,1]$ non è completo: le somme di Taylor dell'esponenziale sono di Cauchy e convergono uniformemente a una funzione che non è un polinomio.
:::

## Operatori lineari continui

:::teorema{#operatori titolo="Limitatezza e norma di un operatore"}
Per un operatore lineare $T:X\to Y$, continuità in zero, continuità ovunque e esistenza di $C$ con $\|Tx\|_Y\le C\|x\|_X$ sono equivalenti. La norma è
$$
\|T\|=\sup_{\|x\|\le1}\|Tx\|.
$$
La linearità trasporta la continuità in zero in ogni punto. Se $T$ è continua in zero, una dilatazione di un intorno limitato fornisce la stima globale. Gli operatori limitati formano $\mathcal L(X,Y)$, completo se $Y$ è Banach; vale $\|ST\|\le\|S\|\|T\|$.

Per $Tf(x)=\int_0^x f(t)\,dt$ su $C([0,1])$, $|Tf(x)|\le x\|f\|_\infty$, quindi $\|T\|\le1$. La funzione $f=1$ realizza l'uguaglianza e dà $\|T\|=1$.
:::

## Funzionali e duale

:::definizione{#duale titolo="Spazio duale"}
Il **duale** $X^*$ è lo spazio dei funzionali lineari continui $\ell:X\to\mathbb K$, con norma $\|\ell\|=\sup_{\|x\|\le1}|\ell(x)|$. È sempre Banach. Il funzionale $\ell(f)=f(t_0)$ su $C([0,1])$ ha norma $1$. Su $L^p$, dove le funzioni coincidono come classi quasi ovunque, la valutazione puntuale non è in generale ben definita.

Per $\ell(f)=\int_0^1f(t)g(t)\,dt$ e $g\in L^q$, con esponenti coniugati, Hölder dà $|\ell(f)|\le\|f\|_p\|g\|_q$. Nel caso reale $1<p<\infty$, la funzione proporzionale a $\operatorname{sgn}(g)|g|^{q-1}$ realizza l'uguaglianza, quindi $\|\ell\|=\|g\|_q$.
:::

## Contrazioni e serie di Neumann

::::teorema{#punto-fisso titolo="Teorema del punto fisso di Banach"}
Sia $X$ uno spazio metrico completo e $T:X\to X$ una contrazione, cioè $d(Tx,Ty)\le qd(x,y)$ con $0\le q<1$. Esiste un unico punto fisso $x_*$, e le iterate $x_{n+1}=Tx_n$ convergono a esso. Vale
$$
d(x_n,x_*)\le\frac{q^n}{1-q}d(x_1,x_0).
$$

:::dimostrazione
Le distanze consecutive sono al più $q^nd(x_1,x_0)$. Sommando la serie geometrica si dimostra che le iterate sono di Cauchy. La completezza dà un limite, la continuità di $T$ lo rende fisso, e $d(x_*,y_*)\le qd(x_*,y_*)$ dà unicità.
:::
::::

:::teorema{#neumann titolo="Serie di Neumann"}
Se $A\in\mathcal L(X)$, $X$ è Banach e $\|A\|<1$, allora
$$
(I-A)^{-1}=\sum_{n=0}^{\infty}A^n,\qquad
\|(I-A)^{-1}\|\le\frac1{1-\|A\|}.
$$
La serie converge in norma di operatori; moltiplicando le somme parziali per $I-A$ si ottiene $I-A^{N+1}$, che tende a $I$. Serve per risolvere $x=Ax+b$.
:::

## Baire e uniforme limitatezza

:::teorema{#baire titolo="Baire e principio di uniforme limitatezza"}
In uno spazio metrico completo, un'unione numerabile di chiusi con interno vuoto ha interno vuoto. È il teorema di Baire.

Se $X$ è Banach, $Y$ normato e $(T_\alpha)\subset\mathcal L(X,Y)$ è puntualmente limitata, cioè $\sup_\alpha\|T_\alpha x\|<\infty$ per ogni $x$, allora $\sup_\alpha\|T_\alpha\|<\infty$. È il principio di **uniforme limitatezza**. Si applica Baire ai chiusi $E_n=\{x:\sup_\alpha\|T_\alpha x\|\le n\}$; uno contiene una palla, e per linearità si ottiene una stima sull'intera palla unitaria.

In particolare, una successione debolmente convergente in un Banach è limitata in norma. La limitatezza puntuale degli operatori è una condizione su ogni vettore fissato, distinta dalla stima uniforme sulla palla unitaria.
:::

## Applicazione aperta, grafico chiuso e Hahn-Banach

:::teorema{#teoremi-banach titolo="Applicazione aperta e grafico chiuso"}
Un operatore lineare continuo e suriettivo tra Banach è aperto. Quindi, se è anche iniettivo, l'inverso è continuo. Un operatore lineare $T:X\to Y$, definito su tutto un Banach $X$ e a valori in un Banach $Y$, è continuo se e solo se il grafico è chiuso in $X\times Y$. Entrambi i risultati si deducono da Baire.

La completezza e il dominio dell'operatore sono ipotesi necessarie da verificare. La derivazione $D:C^1([0,1])\to C([0,1])$ è limitata per la norma $\|f\|_\infty+\|f'\|_\infty$, ma è illimitata se sul dominio si usa soltanto $\|f\|_\infty$: per $f_n(x)=\sin(nx)$ si ha $\|f_n\|_\infty\le1$ e $\|f_n'\|_\infty=n$.
:::

:::teorema{#hahn-banach titolo="Estensione di Hahn-Banach"}
Se $M$ è un sottospazio di uno spazio normato $X$ e $\ell:M\to\mathbb K$ è lineare e continuo, esiste un'estensione continua $\widetilde\ell:X\to\mathbb K$ con la stessa norma. In particolare, per ogni $x\ne0$ esiste $\ell\in X^*$ con $\|\ell\|=1$ e $\ell(x)=\|x\|$.

Si parte dal sottospazio generato da $x$, dove si pone $\ell(\alpha x)=\alpha\|x\|$, e si applica il teorema. I funzionali continui separano quindi i punti dello spazio.
:::

## Operatori compatti e Ascoli-Arzelà

:::definizione{#compatti titolo="Compattezza e criterio di Ascoli-Arzelà"}
Un operatore lineare è **compatto** se manda insiemi limitati in insiemi relativamente compatti. Equivalentemente, dalle immagini di ogni successione limitata si può estrarre una sottosuccessione convergente. Gli operatori limitati di rango finito sono compatti. L'identità su un Banach di dimensione infinita non è compatta.

Per $K$ metrico compatto, una famiglia in $C(K)$ è relativamente compatta per la norma uniforme se e solo se è equicontinua e puntualmente limitata: è **Ascoli-Arzelà**. L'operatore $Tf(x)=\int_0^x f(t)\,dt$ manda la palla unitaria in funzioni uniformemente limitate e con costante di Lipschitz al più $1$, quindi è compatto. Su $\ell^2$, un operatore diagonale $(x_n)\mapsto(a_nx_n)$ è compatto se e solo se $a_n\to0$, perché si approssima in norma mediante i troncamenti di rango finito.
:::
