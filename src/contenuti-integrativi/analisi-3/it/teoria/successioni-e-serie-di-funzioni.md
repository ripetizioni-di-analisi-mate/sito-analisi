## Il criterio uniforme di Cauchy

::::teorema{#cauchy-uniforme titolo="Criterio uniforme di Cauchy"}
Per stabilire se una successione converge uniformemente si possono confrontare due termini della successione prima di conoscere il limite. Una successione di funzioni reali $f_n$ su $A$ converge uniformemente a una funzione su $A$ se e solo se per ogni $\varepsilon>0$ esiste un indice $N$ tale che
$$
|f_n(x)-f_m(x)|<\varepsilon
\qquad \text{per ogni } n,m\geq N \text{ e per ogni } x\in A .
$$
La condizione richiede un unico indice per tutti i punti e per entrambe le code. Per una serie di funzioni si applica alle somme parziali: la differenza tra due somme parziali è la somma dei termini compresi fra i loro indici.

:::dimostrazione
Se $f_n$ converge uniformemente a $f$, si sceglie un indice a partire dal quale entrambi gli scarti da $f(x)$ sono minori di $\dfrac{\varepsilon}{2}$ per ogni $x$. La disuguaglianza triangolare dà allora la condizione. Nel verso opposto si fissa $x$ e si usa la completezza di $\mathbb{R}$. La successione numerica $f_n(x)$ è di Cauchy, quindi ammette un limite $f(x)$. Si sceglie ora $N$ nella condizione con $\dfrac{\varepsilon}{2}$. Per ogni $n\geq N$ e per ogni $x$, facendo tendere $m$ all'infinito nella stima si ottiene $|f_n(x)-f(x)|\leq\dfrac{\varepsilon}{2}<\varepsilon$. L'indice è rimasto lo stesso per ogni $x$, quindi la convergenza è uniforme.
:::
::::

:::esempio{titolo="Confronto tra due indici su un intervallo illimitato"}
Sia $f_n(x)=\dfrac{x}{x+n}$ per $x\geq0$. Si possono prendere indici arbitrariamente grandi nella coppia $n,2n$ e valutarli nel punto $x=n$. Lo scarto vale $\dfrac12-\dfrac13=\dfrac16$ per ogni $n$. Il criterio di Cauchy uniforme fallisce, perché per ogni $n$ nel punto $x=n$ lo scarto resta $\dfrac16$. Su ogni intervallo $[0,b]$ con $b$ finito, invece, $0\leq f_n(x)\leq\dfrac{b}{n+b}$, quindi la convergenza a zero è uniforme su quell'intervallo. Si dice che la convergenza è **uniforme sui compatti** di $[0,+\infty)$.

::grafico{f="x/(x+4);x/(x+8)" xmin=0 xmax=20 ymin=0 ymax=1.05 punti="4,0.5,pieno;4,0.3333333333333333,pieno" segmenti="4,0.3333333333333333,4,0.5" legenda="f_4;f_8" titolo="Le curve $f_4$ e $f_8$ hanno distanza verticale $\dfrac16$ nel punto $x=4$. In generale $f_n$ e $f_{2n}$ hanno la stessa distanza in $x=n$."}
:::

:::esempio{titolo="Distanza uniforme tra due termini della successione"}
Per le stesse funzioni si può calcolare la distanza uniforme tra due termini qualunque. Siano $m>n\geq1$. La differenza è positiva per $x>0$ e si può scrivere
$$
f_n(x)-f_m(x)=\frac{(m-n)x}{(x+n)(x+m)} .
$$
Per trovare l'estremo superiore si deriva la differenza rispetto a $x$. La regola del quoziente dà
$$
\frac{d}{dx}\bigl(f_n(x)-f_m(x)\bigr)
=\frac{(m-n)(nm-x^2)}{(x+n)^2(x+m)^2}.
$$
Il denominatore è positivo su tutta la semiretta. La derivata è positiva prima di $\sqrt{nm}$ e negativa dopo, quindi il massimo si raggiunge in quel punto. Sostituendo e semplificando si ottiene
$$
\sup_{x\geq0}|f_n(x)-f_m(x)|
=\frac{\sqrt m-\sqrt n}{\sqrt m+\sqrt n}.
$$
Con $m=n+1$ il massimo tende a zero, perché dividendo numeratore e denominatore per $\sqrt n$ compare il rapporto $\sqrt{1+\dfrac1n}$, che tende a uno. Con $m=2n$ la distanza è invece sempre uguale a $\dfrac{\sqrt2-1}{\sqrt2+1}$. La distanza uniforme dipende quindi da quanto gli indici sono lontani in proporzione, anche quando entrambi sono grandi. Il punto $x=n$ usato nel confronto precedente fornisce una stima dal basso, mentre $x=\sqrt{2}\,n$ fornisce il massimo esatto.
:::

:::attenzione
La distanza fra termini consecutivi può tendere a zero mentre la successione fallisce il criterio di Cauchy. Lo stesso accade per le somme parziali della serie armonica, viste come funzioni costanti su un insieme non vuoto. Se $S_n=\sum_{k=1}^{n}\dfrac1k$, si ha $S_{n+1}-S_n=\dfrac1{n+1}$. Tuttavia il blocco dei termini da $n+1$ a $2n$ contiene $n$ addendi e ciascuno è almeno $\dfrac1{2n}$. Pertanto $S_{2n}-S_n\geq\dfrac12$ per ogni $n$. La condizione di Cauchy sulle somme parziali controlla tutti questi blocchi, compresi quelli il cui numero di addendi cresce con l'indice.
:::

:::osservazione
Se le funzioni della successione sono continue, la convergenza uniforme su ogni sottoinsieme compatto del dominio è sufficiente per la continuità del limite puntuale. Sia $(x_j)$ una successione di punti del dominio con $x_j\to x$, dove anche $x$ appartiene al dominio. L'insieme costituito da tutti gli $x_j$ e dal loro limite $x$ è chiuso e limitato in $\mathbb R$, quindi è compatto. Su questo insieme il limite è continuo per il **teorema di continuità del limite uniforme**. Si ottiene allora $f(x_j)\to f(x)$. Poiché la conclusione vale per ogni successione che converge a $x$ nel dominio, $f$ è continua in $x$. Quando il dominio è un intervallo, per controllare tutti i suoi compatti basta verificare la convergenza uniforme sugli intervalli chiusi e limitati in esso contenuti. Ogni compatto non vuoto, infatti, è contenuto nell'intervallo tra il proprio minimo e il proprio massimo.
:::

## Concentrazione della massa e passaggio al limite

:::esempio{titolo="Una successione continua con integrale costante"}
Su $[0,1]$ si consideri, per $n\geq2$,
$$
u_n(x)=n\max\{1-|nx-1|,0\}.
$$
Il grafico è triangolare. Il supporto è $[0,\dfrac{2}{n}]$ e il vertice ha ascissa $\dfrac1n$ e altezza $n$. Per ogni $x>0$ il supporto esclude $x$ da un certo indice in poi. Anche in $x=0$ tutti i termini valgono zero, quindi il limite puntuale è la funzione nulla. L'area del triangolo è metà del prodotto tra base e altezza e vale $1$ per ogni $n$. Ne segue
$$
\lim_{n\to\infty}\int_0^1 u_n(x)\,dx=1,
\qquad
\int_0^1 \lim_{n\to\infty}u_n(x)\,dx=0 .
$$
La norma uniforme vale $n$, quindi il teorema di passaggio al limite sotto il segno di integrale non si applica. Il supporto che si restringe e l'altezza che cresce spiegano perché l'area resti costante.

::grafico{linee="0,0 0.25,4 0.5,0;0,0 0.125,8 0.25,0" punti="0.25,4,pieno;0.125,8,pieno" etichette="0.31,4,n = 4;0.22,8,n = 8" xmin=-0.05 xmax=0.8 ymin=-0.4 ymax=9 titolo="I triangoli per $n=4$ e $n=8$ hanno entrambi area $1$. Il secondo ha metà base e altezza doppia."}
:::

:::esempio{titolo="Integrali pesati con un triangolo concentrato"}
Si moltiplichi il triangolo $u_n$ per una funzione $g$ continua su $[0,1]$. I valori di $g$ che entrano nell'integrale hanno ascissa al più $\dfrac2n$. Per stimare l'effetto del peso si usa il fatto che l'area di $u_n$ vale uno. Si può dunque scrivere
$$
\begin{aligned}
\int_0^1 g(x)u_n(x)\,dx-g(0)
&=\int_0^{\frac2n}\bigl(g(x)-g(0)\bigr)u_n(x)\,dx,\\[6pt]
\left|\int_0^1 g(x)u_n(x)\,dx-g(0)\right|
&\leq \sup_{0\leq x\leq\frac2n}|g(x)-g(0)|.
\end{aligned}
$$
Per la continuità di $g$ in zero, l'estremo superiore tende a zero. L'integrale pesato tende quindi a $g(0)$ anche se il prodotto $g(x)u_n(x)$ tende a zero in ogni punto. Con $g(x)=1+x$, l'errore si può calcolare esattamente. Il triangolo è simmetrico rispetto a $x=\dfrac1n$, quindi l'integrale della funzione $(x-\dfrac1n)u_n(x)$ si annulla per simmetria. Di conseguenza $\int_0^1 xu_n(x)\,dx=\dfrac1n$ e l'integrale pesato vale $1+\dfrac1n$. Lo scarto tra l'integrale del prodotto e l'integrale del suo limite dipende dal valore del peso nel punto verso cui si concentra il supporto.
:::

:::attenzione
La lunghezza finita dell'intervallo è un'ipotesi nel teorema di scambio fondato sulla convergenza uniforme. Sulla semiretta $[0,+\infty)$ si consideri il triangolo
$$
w_n(x)=\frac1n\max\left\{1-\left|\frac{x}{n}-1\right|,0\right\}.
$$
Il massimo vale $\dfrac1n$, quindi $w_n$ converge uniformemente a zero su tutta la semiretta. Il supporto è $[0,2n]$ e l'altezza è $\dfrac1n$, perciò l'integrale improprio di $w_n$ vale $1$. Per un intervallo fissato $[0,b]$ l'integrale è al più $\dfrac bn$, che tende a zero. Si possono dunque prendere i limiti nell'ordine seguente e ottenere due valori distinti
$$
\begin{aligned}
\lim_{b\to+\infty}\lim_{n\to+\infty}\int_0^b w_n(x)\,dx&=0,\\[6pt]
\lim_{n\to+\infty}\lim_{b\to+\infty}\int_0^b w_n(x)\,dx&=1.
\end{aligned}
$$
Nel primo ordine, la stima vale per ogni $b$ fissato. Nel secondo, per ogni $n$ si integra su tutto il supporto facendo crescere $b$ oltre $2n$. Il controllo della sola altezza del grafico risulta insufficiente sulla semiretta, poiché la base del triangolo cresce con $n$.
:::

## Limiti uniformi e derivate

:::attenzione
Un limite uniforme di funzioni derivabili può perdere la derivabilità. Su $[-1,1]$ si consideri $v_n(x)=\sqrt{x^2+\dfrac1{n^2}}$. Vale
$$
0\leq v_n(x)-|x|=\frac{\frac{1}{n^2}}{\sqrt{x^2+\frac{1}{n^2}}+|x|}\leq\frac1n.
$$
Il limite è dunque $|x|$, che ha derivate laterali di segno opposto nell'origine. La successione delle derivate converge puntualmente a $-1$ per $x<0$, a $1$ per $x>0$ e a $0$ in $x=0$. Il suo limite è discontinuo, quindi le derivate, tutte continue, non convergono uniformemente su $[-1,1]$. È questa la condizione che manca per applicare il teorema di derivazione per successioni. Su ogni intervallo chiuso a distanza positiva dall'origine, lo scarto delle derivate si può invece stimare uniformemente, perché $|x|$ ha un minimo strettamente positivo.

::grafico{f="x/sqrt(x^2+0.25);x/sqrt(x^2+0.015625)" xmin=-1 xmax=1 ymin=-1.2 ymax=1.2 asintoti="y=1;y=-1" legenda="v_2';v_8'" titolo="Le derivate di $v_2$ e $v_8$ valgono zero nell'origine. Il passaggio tra i valori prossimi a $-1$ e a $1$ si concentra in intervalli sempre più stretti intorno a zero."}
:::

:::osservazione
Sia $\delta>0$. Su un sottoinsieme di $[-1,1]$ con $|x|\geq\delta$, la convergenza delle derivate nell'esempio precedente ha una stima esplicita. Indicando con $\operatorname{sgn}(x)$ il segno di $x$, per $x\ne0$ si ottiene
$$
\begin{aligned}
\left|v_n'(x)-\operatorname{sgn}(x)\right|
&=1-\frac{|x|}{\sqrt{x^2+\frac1{n^2}}}\\[6pt]
&=\frac{\frac1{n^2}}
{\sqrt{x^2+\frac1{n^2}}\left(\sqrt{x^2+\frac1{n^2}}+|x|\right)}
\leq \frac1{2n^2\delta^2}.
\end{aligned}
$$
L'ultima disuguaglianza usa $\sqrt{x^2+\dfrac1{n^2}}\geq |x|$ in entrambi i fattori. Per $\delta$ fissato la stima tende a zero e prova la convergenza uniforme fuori da $(-\delta,\delta)$. Sulla scala $x=\dfrac1n$, invece, si ha $v_n'(x)=\dfrac1{\sqrt2}$ e la derivata del limite vale uno. Questi punti si avvicinano all'origine, quindi lo scarto resta positivo proprio nella zona che ogni stima con $\delta$ fissato esclude.
:::

:::esempio{titolo="Il valore iniziale fissa la costante"}
Nel teorema di derivazione per successioni, il valore delle funzioni in un punto serve a determinare la costante d'integrazione. Su $[-1,1]$ si consideri
$$
p_n(x)=(-1)^n+x+\frac{1-\cos(nx)}{n^2}.
$$
Poiché $p_n'(x)=1+\dfrac{\sin(nx)}n$, le derivate convergono uniformemente alla funzione costante uno. In zero si ha però $p_n(0)=(-1)^n$, quindi la successione delle funzioni diverge in quel punto. Per ogni $x$ fissato, il termine con il coseno tende a zero. Le sottosuccessioni di indice pari e dispari hanno allora limiti distinti, rispettivamente $x+1$ e $x-1$. Se si sottrae $p_n(0)$, le nuove funzioni valgono tutte zero nell'origine e conservano la stessa derivata. Il teorema si applica a queste funzioni e dà come limite uniforme $x$. Si può anche stimare direttamente l'errore, perché $|p_n(x)-p_n(0)-x|\leq\dfrac2{n^2}$ su tutto l'intervallo. I due limiti possibili prima della sottrazione differiscono esattamente per le costanti iniziali.
:::
