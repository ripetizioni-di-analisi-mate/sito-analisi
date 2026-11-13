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

:::esempio{titolo="Un picco isolato e il massimo essenziale"}
Su $[0,1]$ si ponga $f(x)=x$ per $x\ne\dfrac12$ e $f(\dfrac12)=3$. L'insieme in cui $|f|>1$ è un singoletto, quindi ha misura zero. Per ogni $0\le a<1$, l'insieme in cui $|f|>a$ contiene il tratto $(a,1]$ e ha quindi misura positiva. Il massimo essenziale è $1$, mentre il massimo puntuale è $3$. La norma della classe di $f$ è la stessa della classe del monomio $x$.

::grafico{linee="0,0 1,1" punti="0.5,0.5,vuoto;0.5,3,pieno;1,1,pieno" segmenti="0,1,1,1" xmin=-0.1 xmax=1.16 ymin=-0.1 ymax=3.4 titolo="Il punto a quota $3$ modifica il massimo puntuale. I livelli fra $0$ e $1$ sono superati su insiemi di misura positiva."}

:::

:::osservazione
Per $p<\infty$, l'uguaglianza $\|f-g\|_p=0$ significa che l'integrale di $|f-g|^p$ è zero. L'integranda è non negativa, quindi ciascun insieme in cui supera una soglia positiva ha misura nulla. L'unione numerabile degli insiemi corrispondenti alle soglie $\dfrac1k$ contiene tutti i punti in cui $f\ne g$. Perciò la distanza è zero esattamente per due rappresentanti della stessa classe.

La potenza singolare su $(0,1)$ mostra come l'esponente $p$ controlla la tolleranza ai picchi. Nel caso $f(x)=x^{-\dfrac13}$, l'integranda di $\|f\|_2^2$ cresce come $x^{-\dfrac23}$ e l'area vicino a zero è finita. L'integranda di $\|f\|_3^3$ cresce invece come $x^{-1}$ e la sua area diverge. Perciò $f\in L^2(0,1)$ ma $f\notin L^3(0,1)$.

::grafico{f="x^(-2/3);1/x" xmin=0.035 xmax=1.1 ymin=0 ymax=9 legenda="|f|^2;|f|^3" titolo="Entrambe le curve crescono verso zero, ma al livello critico $p=3$ la primitiva logaritmica dà un integrale divergente."}

:::

:::esempio{titolo="Una funzione a due livelli"}
Siano $A$ e $B$ due insiemi misurabili disgiunti, con $\mu(A)=1$ e $\mu(B)=4$. La funzione $f=3\mathbf1_A-\mathbf1_B$ vale tre sul primo insieme e meno uno sul secondo. Poiché la norma usa il modulo, i due contributi si sommano. Si ottiene $\|f\|_1=7$, mentre $\|f\|_2^2=9+4=13$. Per la norma uniforme essenziale conta il livello di modulo maggiore tra quelli assunti su insiemi di misura positiva, quindi $\|f\|_\infty=3$. La misura di $A$ e $B$ entra nel calcolo delle norme con esponente finito e serve per stabilire quali livelli concorrono al massimo essenziale.
:::

:::attenzione
La condizione $p\geq1$ serve per la disuguaglianza triangolare. Per $p=\dfrac12$ e due indicatori $f$ e $g$ di insiemi disgiunti di misura uno, l'espressione $\left(\int |f|^{\frac12}\,d\mu\right)^2$ vale uno per ciascuna funzione. Per la somma vale invece quattro, perché il suo modulo è uno su un insieme di misura due. L'espressione per la somma supera quindi la somma dei due valori. La stessa formula con esponente minore di uno definisce una quantità che, in generale, non è una norma.
:::

## Hölder e Minkowski

::::teorema{#holder titolo="Disuguaglianze integrali e completezza"}
Per $f\in L^p$ e $g\in L^q$, con $1\le p,q\le\infty$ e $\dfrac1p+\dfrac1q=1$, vale
$$
\int|fg|\,d\mu\le\|f\|_p\|g\|_q.
$$
Per $p=q=2$ è Cauchy-Schwarz. La disuguaglianza di Minkowski dà $\|f+g\|_p\le\|f\|_p+\|g\|_p$. Ogni $L^p$, per $1\le p\le\infty$, è completo.

Hölder garantisce per esempio che il prodotto di due elementi di $L^2$ è integrabile. La completezza assicura che il limite in norma di una successione di Cauchy appartiene allo stesso spazio.

:::dimostrazione
Per Hölder con $1<p<\infty$ si normalizzano i fattori in modo che le loro potenze abbiano integrale uno. Se $\|f\|_p$ o $\|g\|_q$ è zero, il fattore corrispondente è nullo quasi ovunque e la disuguaglianza vale con uguaglianza. Altrimenti si pongono $a=\dfrac{|f|}{\|f\|_p}$ e $b=\dfrac{|g|}{\|g\|_q}$. Si applica la disuguaglianza di Young e si integra.
$$
\begin{aligned}
\int ab\,d\mu
&\le \int\left(\frac{a^p}{p}+\frac{b^q}{q}\right)d\mu \\[5pt]
&= \frac{1}{p}+\frac{1}{q} \\[5pt]
&=1.
\end{aligned}
$$
Moltiplicando per $\|f\|_p\|g\|_q$ si ottiene la stima. Per $p=1$ e $q=\infty$, si integra la disuguaglianza $|fg|\le |f|\|g\|_\infty$ valida quasi ovunque. Il caso $p=\infty$ si ottiene scambiando $f$ con $g$. Da Hölder segue Minkowski con la stima sui due prodotti mostrata nell'osservazione sulla norma della somma. La completezza si dimostra estraendo termini con differenze di norme sommabili.
:::
::::

:::esempio{titolo="Prodotto integrabile e uso degli esponenti coniugati"}
Su $(0,1)$, la funzione $x^{-\dfrac14}$ appartiene a $L^2$, perché il suo quadrato è $x^{-\dfrac12}$ e ha integrale $2$. Anche la funzione $x$ appartiene a $L^2$ e ha norma $\dfrac1{\sqrt3}$. Cauchy-Schwarz dà quindi $\int_0^1 x^{-\dfrac14}x\,dx\le\sqrt{\dfrac23}$. Il calcolo diretto dà $\dfrac47$. La disuguaglianza fornisce soprattutto una garanzia: il prodotto di due elementi di $L^2$ è in $L^1$, anche quando le due norme si stimano senza conoscere una primitiva del prodotto.
:::

:::osservazione{titolo="Normalizzazione e uguaglianza in Hölder"}
Per $1<p,q<\infty$ coniugati e norme positive, la condizione di uguaglianza in Hölder si ricava dalla disuguaglianza di Young per i fattori normalizzati $a=\dfrac{|f|}{\|f\|_p}$ e $b=\dfrac{|g|}{\|g\|_q}$. Nella stima puntuale l'uguaglianza vale quando $a^p=b^q$. Poiché la differenza fra i due membri è non negativa, l'uguaglianza dopo integrazione richiede che questa differenza sia zero quasi ovunque. Di conseguenza, per le due norme positive, Hölder dà uguaglianza esattamente quando le due potenze normalizzate coincidono quasi ovunque. Su $(0,1)$, per $p=3$ e $q=\dfrac32$, si possono prendere $f(x)=x$ e $g(x)=x^2$. Le potenze sono entrambe $x^3$ e l'integrale del prodotto vale $\dfrac14$, uguale al prodotto delle norme.
:::

:::osservazione
Siano $f,g\in L^p$ con $1<p<\infty$. Poiché $|f+g|^p\le 2^{p-1}(|f|^p+|g|^p)$, la somma appartiene a $L^p$. Si moltiplica $|f+g|\le |f|+|g|$ per $|f+g|^{p-1}$, poi si integra. Si applica Hölder ai due prodotti del membro destro. Il fattore comune ha norma $\big\||f+g|^{p-1}\big\|_q=\|f+g\|_p^{p-1}$, perché $(p-1)q=p$. Se $\|f+g\|_p>0$, la divisione per tale fattore lascia la disuguaglianza triangolare. Quando la norma è zero, la disuguaglianza segue dalla non negatività del membro destro.

Sui vettori con due componenti, la norma $L^p$ per la misura di conteggio dà un rombo per $p=1$, un cerchio per $p=2$ e un quadrato per $p=\infty$. La forma diversa delle palle unitarie spiega perché la stessa somma vettoriale può avere lunghezze diverse a seconda della norma.

::grafico{curve="cos(t),sin(t),0,6.283185307179586" linee="1,0 0,1 -1,0 0,-1 1,0;-1,-1 1,-1 1,1 -1,1 -1,-1" xmin=-1.28 xmax=1.28 ymin=-1.28 ymax=1.28 uguale=1 titolo="Bordi delle palle unitarie in $\mathbb R^2$. Il rombo corrisponde a $p=1$, il cerchio a $p=2$ e il quadrato a $p=\infty$."}

:::

:::osservazione
Per la completezza, da una successione di Cauchy in $L^p$, con $p<\infty$, si estraggano termini $g_k$ con $\|g_{k+1}-g_k\|_p\le 2^{-k}$. Le somme parziali delle differenze in modulo hanno norme uniformemente limitate per Minkowski. La convergenza monotona applicata alle loro potenze $p$ mostra che anche la somma infinita dei moduli è in $L^p$. Questa somma è quindi finita quasi ovunque, così $g_k$ converge puntualmente fuori da un insieme nullo. Il limite $g$ soddisfa $|g-g_k|\le\sum_{j\ge k}|g_{j+1}-g_j|$. Applicando ancora Minkowski alle somme finite e passando al limite, si ottiene $\|g-g_k\|_p\le\sum_{j\ge k}2^{-j}$. L'intera successione converge in norma allo stesso limite, perché era di Cauchy.

Per $p=\infty$ le differenze soddisfano le stesse stime uniformi fuori da un insieme nullo per ogni $k$. L'unione di questi insiemi resta nulla. Sul suo complemento le stime valgono simultaneamente e la sottosuccessione converge uniformemente. Il limite definisce una classe in $L^\infty$ e la successione converge in norma essenziale.
:::

## Inclusioni e convergenze

::::teorema{#convergenze-lp titolo="Inclusioni su spazi di misura finita"}
Se $\mu(X)<\infty$ e $1\le p<q\le\infty$, allora
$$
L^q\subseteq L^p,\qquad
\|f\|_p\le\mu(X)^{\frac1p-\frac1q}\|f\|_q.
$$
Per esempio, su uno spazio di misura uno la stima dà $\|f\|_1\le \|f\|_2$. Su spazi di misura infinita questa inclusione non vale in generale.

Per $p<\infty$, convergere in norma $L^p$ implica convergere in misura, poiché $\mu\{|f_n-f|>\varepsilon\}\le\dfrac{\|f_n-f\|_p^p}{\varepsilon^p}$, e implica una sottosuccessione convergente quasi ovunque.

:::dimostrazione
L'inclusione si ottiene stimando l'integrale di $|f|^p$. Per $p<q<\infty$, si applica Hölder con esponenti $\dfrac qp$ e $\dfrac q{q-p}$. Il primo fattore $|f|^p$ ha potenza integrabile perché $f\in L^q$, mentre la costante $1$ ha potenza integrabile perché $\mu(X)<\infty$. Segue
$$
\begin{aligned}
\int_X |f|^p\,d\mu
 &\le \left(\int_X |f|^q\,d\mu\right)^{\frac pq}
      \left(\int_X 1\,d\mu\right)^{1-\frac pq} \\[5pt]
 &=\|f\|_q^p\,\mu(X)^{1-\frac pq}.
\end{aligned}
$$
Il membro destro è finito, perciò $f\in L^p$. La radice di ordine $p$ dà la stima sulle norme. Per $q=\infty$ si integra la disuguaglianza $|f|^p\le\|f\|_\infty^p$ quasi ovunque. La stima di Markov dà la convergenza in misura. Per ottenere il limite quasi ovunque si seleziona una sottosuccessione con misure degli insiemi eccezionali sommabili.
:::
::::

:::esempio{titolo="La misura totale nel confronto fra norme"}
Su $(0,2)$ con la misura di Lebesgue, la funzione costante $f=4$ ha $\|f\|_1=8$ e $\|f\|_2=4\sqrt2$. Qui la norma con esponente minore è più grande. La stima di Hölder dà $\|f\|_1\leq\sqrt2\|f\|_2$ e l'uguaglianza mostra che il fattore $\sqrt2$ è necessario per un confronto valido per ogni funzione. Se $\mu(X)$ è positiva, si può dividere la misura per $\mu(X)$. Il nuovo spazio ha misura uno e il fattore nella stima diventa uno. Il confronto assume così la forma $\|f\|_p\leq\|f\|_q$ nella misura normalizzata.
:::

:::esempio{titolo="Successioni concentrate"}
Per $f_n=n^\alpha\mathbf1_{(0,\dfrac1n)}$,
$$
\|f_n\|_p^p=n^{\alpha p-1},\qquad
\|f_n\|_p=n^{\alpha-\frac1p}.
$$
Quindi la convergenza in $L^p$ a zero vale se e solo se $\alpha<\dfrac1p$. Per $\alpha=\dfrac1p$ la norma resta $1$, mentre il limite puntuale su $(0,1)$ è zero.
:::

:::osservazione
La stima per la convergenza in misura si ottiene integrando $|f_n-f|^p$ sull'insieme in cui il modulo della differenza supera $\varepsilon$. L'integranda lì è almeno $\varepsilon^p$. Per estrarre una sottosuccessione convergente quasi ovunque, si scelgono indici $n_k$ tali che la misura di $\{|f_{n_k}-f|>2^{-k}\}$ sia minore di $2^{-k}$. La misura dell'unione degli insiemi con $k\ge K$ è allora al più $\sum_{k\ge K}2^{-k}$ e tende a zero al crescere di $K$. Quasi ogni punto appartiene soltanto a un numero finito di questi insiemi, quindi la differenza converge a zero in quel punto.
:::

:::esempio{titolo="Indicatori di intervalli diadici"}
Si elenchino prima gli indicatori delle due metà di $[0,1)$, poi quelli dei quattro quarti e così via. Al livello $k$ ogni intervallo ha misura $2^{-k}$ e l'indicatore ha norma $2^{-\dfrac kp}$, quindi l'intera successione tende a zero in $L^p$ per $p<\infty$. Ogni $x\in[0,1)$ appartiene esattamente a un intervallo di ciascun livello. L'indicatore corrispondente vale uno, mentre gli altri del livello valgono zero. In ogni punto si vedono così infiniti zeri e infiniti uno, quindi manca il limite puntuale.

::grafico{linee="0,1 0.5,1;0.5,1.25 1,1.25;0,2 0.25,2;0.25,2.2 0.5,2.2;0.5,2.4 0.75,2.4;0.75,2.6 1,2.6" segmenti="0.65,0,0.65,2.8" punti="0.65,1.25,pieno;0.65,2.4,pieno" etichette="0.7,0.46,x = 0,65" xmin=-0.12 xmax=1.2 ymin=-0.1 ymax=3.05 titolo="I segmenti rappresentano i supporti dei primi due livelli. Il punto fissato appartiene a un solo supporto per livello."}

:::

:::teorema{#stima-convergenza-misura titolo="Convergenza in misura per funzioni limitate"}
Sia $X$ di misura finita. Si supponga che $f_n\to f$ in misura e che $|f_n|$ e $|f|$ siano quasi ovunque al più una stessa costante $M$. Allora $f_n\to f$ in $L^p$ per ogni $1\leq p<\infty$.

Per stimare la norma si fissa una soglia $\varepsilon>0$. Sull'insieme in cui la differenza supera la soglia si usa il limite superiore $2M$ per il modulo. Sul complemento si usa $\varepsilon$. Indicando con $E_n$ il primo insieme, si ottiene
$$
\|f_n-f\|_p^p\leq (2M)^p\mu(E_n)+\varepsilon^p\mu(X).
$$
Il primo termine tende a zero per la convergenza in misura. Per rendere piccolo il secondo si sceglie $\varepsilon$ sufficientemente piccolo, dato che la misura totale è finita. Per esempio, su $(0,1)$ la funzione $\mathbf1_{(0,\dfrac1n)}$ ha modulo al più uno e converge in misura a zero. In questo caso il calcolo diretto dà $\|f_n\|_p=n^{-\dfrac1p}$ e conferma la conclusione.
:::

:::attenzione
La misura finita del dominio interviene nella stima del contributo sotto soglia. Su $\mathbb R$, si consideri $f_n=\dfrac1n\mathbf1_{(0,n)}$. Per ogni soglia positiva l'insieme in cui il modulo la supera è vuoto per $n$ sufficientemente grande. Quindi le funzioni convergono in misura a zero e sono uniformemente limitate. Tuttavia, in $L^1$ la base di lunghezza $n$ compensa l'altezza $\dfrac1n$, quindi la norma resta uno. Per $p>1$ la norma vale $n^{\frac1p-1}$ e tende a zero.
:::

:::attenzione
Su un dominio di misura infinita le inclusioni possono fallire in entrambi i versi. Su $(1,\infty)$, $x^{-\dfrac34}$ è in $L^2$ ma non in $L^1$. Su $(0,\infty)$, la funzione $x^{-\dfrac34}\mathbf1_{(0,1)}$ è in $L^1$ ma non in $L^2$. Nel primo caso conta la coda infinita. Nel secondo caso conta l'integrabilità vicino all'origine.
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

:::esempio{titolo="Il parallelogramma e il caso quadratico"}
In $\mathbb R^2$ con la norma euclidea, si prendano $u=(2,0)$ e $v=(1,2)$. Si ha $\|u+v\|^2=13$ e $\|u-v\|^2=5$. La loro somma è $18$, uguale a $2\|u\|^2+2\|v\|^2=2\cdot4+2\cdot5$. Le due diagonali del parallelogramma hanno infatti vettori $u+v$ e $u-v$, a meno del verso.

::grafico{vettori="0,0,2,0,u;0,0,1,2,v" linee="0,0 2,0 3,2 1,2 0,0;0,0 3,2;1,2 2,0" punti="3,2,pieno" xmin=-0.35 xmax=3.55 ymin=-0.42 ymax=2.52 uguale=1 titolo="Le diagonali hanno vettori $u+v$ e $u-v$. L'identità riguarda i quadrati delle loro lunghezze."}

Con la norma $\ell^1$, per $u=(1,0)$ e $v=(0,1)$ si ottiene invece $\|u+v\|_1^2+\|u-v\|_1^2=8$ e $2\|u\|_1^2+2\|v\|_1^2=4$. Poiché ogni norma indotta da un prodotto scalare soddisfa l'identità, questa norma non può derivare da un prodotto scalare.
:::

:::osservazione{titolo="Dal quadrato della norma al prodotto scalare"}
La norma di uno spazio di Hilbert determina anche il prodotto scalare. Sviluppando i quadrati di $\|u+v\|$ e $\|u-v\|$, i contributi delle norme dei singoli vettori si cancellano. La differenza che rimane è quattro volte la parte reale di $\langle u,v\rangle$. In uno spazio reale questo basta per ricavare il prodotto scalare. In uno spazio complesso, con la convenzione lineare nel primo argomento, $\langle u,iv\rangle=-i\langle u,v\rangle$. La parte reale del secondo prodotto è quindi la parte immaginaria del primo. Perciò
$$
\begin{aligned}
\operatorname{Re}\langle u,v\rangle
 &=\frac{\|u+v\|^2-\|u-v\|^2}{4},\\[6pt]
\operatorname{Im}\langle u,v\rangle
 &=\frac{\|u+iv\|^2-\|u-iv\|^2}{4}.
\end{aligned}
$$
Nel caso $H=\mathbb C$, con $u=1$ e $v=i$, i primi due quadrati valgono entrambi due. Gli altri valgono zero e quattro, perché $iv=-1$. Le formule restituiscono $\langle 1,i\rangle=-i$, in accordo con la coniugazione del secondo argomento.
:::

## Proiezione ortogonale

::::teorema{#proiezione titolo="Migliore approssimazione su un sottospazio chiuso"}
Se $M$ è un sottospazio lineare chiuso di un Hilbert $H$, per ogni $x\in H$ esiste un unico $p\in M$ che minimizza $\|x-p\|$. La caratterizzazione è $x-p\perp M$. Per una base ortonormale finita $(e_j)$ di $M$,
$$
P_Mx=\sum_j\langle x,e_j\rangle e_j.
$$

:::dimostrazione
L'identità del parallelogramma rende di Cauchy una successione minimizzante. Completezza e chiusura danno un limite $p\in M$. Minimizzando $\|x-p-ty\|^2$ per $y\in M$ e per $t$ reale, e anche puramente immaginario se $H$ è complesso, si ottiene ortogonalità. Infine
$$
\|x-y\|^2=\|x-p\|^2+\|p-y\|^2
$$
dà minimalità e unicità.
:::
::::

:::esempio{titolo="Approssimazione con una costante"}
In $L^2(0,1)$ la proiezione di $x$ sulle costanti è la media $\dfrac12$. L'errore quadratico minimo è $\int_0^1(x-\dfrac12)^2\,dx=\dfrac1{12}$.
:::

:::esempio{titolo="Come il residuo determina l'errore minimo"}
In $\mathbb R^2$, per $x=(3,2)$ e $M=\operatorname{span}(1,0)$ si ha $p=(3,0)$. Per un altro candidato $q=(1,0)$, il segmento da $x$ a $q$ è l'ipotenusa del triangolo con cateti $x-p$ e $p-q$. La sua lunghezza quadrata è $8$, mentre il residuo ortogonale ha lunghezza quadrata $4$. L'identità pitagorica isola il costo aggiuntivo che si paga spostandosi lungo il sottospazio.

::grafico{vettori="0,0,3,2,x" linee="1,0 3,0 3,2 1,0;2.78,0 2.78,0.22 3,0.22" punti="1,0,pieno,q;3,0,pieno,p" xmin=-0.2 xmax=3.65 ymin=-0.42 ymax=2.6 uguale=1 titolo="Il residuo $x-p$ è ortogonale a $M$. Il tratto obliquo da $q$ a $x$ è più lungo del residuo."}

Per l'approssimazione di una funzione reale $f\in L^2(a,b)$ con una costante, con $a<b$, la condizione di ortogonalità è $\int_a^b(f-c)\,dx=0$. La costante migliore è dunque $\dfrac1{b-a}\int_a^b f(x)\,dx$. Le parti positiva e negativa del residuo hanno integrali uguali, mentre l'errore quadratico usa il quadrato del residuo e risulta positivo salvo quando $f$ è costante quasi ovunque.

::grafico{f="x;0.5" area="0.5;x;0;0.5|x;0.5;0.5;1" punti="0.5,0.5,pieno" xmin=0 xmax=1.12 ymin=0 ymax=1.14 legenda="x;\frac12" titolo="Il residuo $x-\dfrac12$ ha aree con segno opposto che si compensano. L'integrale del quadrato del residuo vale $\dfrac1{12}$."}

:::

:::osservazione
Nella dimostrazione del teorema di proiezione, sia $d$ l'estremo inferiore delle distanze e siano $p_j,p_k$ due elementi di una successione minimizzante. Il loro punto medio appartiene ancora a $M$ e dista da $x$ almeno $d$. Per il parallelogramma,
$$
\|p_j-p_k\|^2
=2\|x-p_j\|^2+2\|x-p_k\|^2-4\left\|x-\dfrac{p_j+p_k}{2}\right\|^2
\le 2\|x-p_j\|^2+2\|x-p_k\|^2-4d^2.
$$
Il membro destro tende a zero. La successione converge in $H$ e il limite appartiene a $M$ perché il sottospazio è chiuso. La chiusura è necessaria: in $\ell^2$ il sottospazio delle successioni a supporto finito è denso, quindi la distanza di $(2^{-n})_{n\ge1}$ da esso è zero. Il vettore ha però infinite componenti non nulle e nessuna successione a supporto finito realizza la distanza zero.
:::

:::esempio{titolo="Approssimazione affine con generatori non ortogonali"}
Si vuole proiettare $x^2$ sul sottospazio generato da $1$ e $x$ in $L^2(0,1)$. Il candidato ha forma $a+bx$. I generatori hanno prodotto scalare $\dfrac12$, quindi i due coefficienti si determinano insieme. Il residuo deve essere ortogonale a ciascun generatore. Integrando il residuo e il suo prodotto con $x$ si ottiene
$$
\begin{cases}
a+\dfrac b2=\dfrac13,\\[5pt]
\dfrac a2+\dfrac b3=\dfrac14.
\end{cases}
$$
Sottraendo dalla seconda equazione metà della prima, si ricava $\dfrac b{12}=\dfrac1{12}$. Quindi $b=1$ e $a=-\dfrac16$. Il residuo è $r(x)=x^2-x+\dfrac16$. Poiché la proiezione appartiene al sottospazio e il residuo è ortogonale a esso, il quadrato della distanza si calcola sottraendo $\int_0^1(x-\dfrac16)^2\,dx=\dfrac7{36}$ da $\int_0^1x^4\,dx=\dfrac15$. Si ottiene $\|r\|_2^2=\dfrac1{180}$. Lo stesso sistema si imposta con altri generatori sostituendo i prodotti scalari tra le funzioni scelte.
:::

## Basi ortonormali e Parseval

:::richiamo{titolo="Proiezione su un sottospazio chiuso"}
Sia $H$ uno spazio di Hilbert e sia $M$ un suo sottospazio lineare chiuso. Per ogni $x\in H$ esiste un unico $p\in M$ tale che $x-p\perp M$.
:::

::::teorema{#basi-hilbert titolo="Bessel e Parseval"}
Per un sistema ortonormale $(e_n)$ si ha $\sum_n|\langle x,e_n\rangle|^2\le\|x\|^2$ (Bessel). Se il sottospazio generato è denso, il sistema è una base ortonormale e
$$
x=\sum_n\langle x,e_n\rangle e_n\quad\text{in norma},\qquad
\|x\|^2=\sum_n|\langle x,e_n\rangle|^2.
$$
La seconda identità è Parseval. Ogni Hilbert separabile ha una base ortonormale finita o numerabile. In $L^2(-\pi,\pi)$ le funzioni $\dfrac{e^{inx}}{\sqrt{2\pi}}$, con $n\in\mathbb Z$, formano una base ortonormale, quindi si ottiene la convergenza in norma delle serie di Fourier.

:::dimostrazione
Si calcola la norma del residuo dopo aver conservato un numero finito di coefficienti. Il sottospazio $M_N$ generato da $e_1,\ldots,e_N$ ha dimensione finita ed è chiuso, quindi il teorema di proiezione si applica. La proiezione è la somma dei primi $N$ coefficienti per i rispettivi vettori. La norma quadrata di questa somma è la somma dei moduli quadrati dei coefficienti per ortonormalità. Poiché il residuo è ortogonale a $M_N$, Pitagora dà
$$
\left\|x-\sum_{n=1}^N\langle x,e_n\rangle e_n\right\|^2
=\|x\|^2-\sum_{n=1}^N|\langle x,e_n\rangle|^2.
$$
Il membro sinistro è non negativo, quindi le somme parziali dei coefficienti al quadrato sono maggiorate da $\|x\|^2$. Il loro limite dà Bessel. Se il sistema è completo, per ogni $\varepsilon>0$ esiste una combinazione finita dei vettori che dista da $x$ meno di $\varepsilon$. Tale combinazione appartiene a $M_N$ per $N$ sufficientemente grande. La proiezione minimizza la distanza, quindi il residuo tende a zero in norma. Passando al limite nell'identità si ottiene Parseval.
:::
::::

:::esempio{titolo="Una proiezione trigonometrica incompleta"}
In $L^2(-\pi,\pi)$ si consideri $f(t)=\cos t+\dfrac12\cos(2t)$. I due coseni sono ortogonali e hanno norma quadrata $\pi$. La proiezione sul sottospazio generato da $\cos t$ è $\cos t$. L'errore quadratico è $\dfrac{\pi}{4}$, dato dal secondo modo. Aggiungendo $\cos(2t)$ al sottospazio, la proiezione coincide con la funzione.

::grafico{f="cos(x)+cos(2*x)/2;cos(x)" xmin=-3.15 xmax=3.15 ymin=-1.1 ymax=1.62 legenda="f;\cos x" titolo="La proiezione conserva la prima armonica. La differenza è la seconda armonica, di ampiezza $\dfrac12$."}

:::

:::esempio{titolo="Energia conservata ed errore di troncamento"}
Nello spazio $\ell^2$ si consideri la successione $u_n=2^{-n}$ per $n\geq1$. Il quadrato della norma è la somma della serie geometrica $\sum_{n\geq1}4^{-n}$ e vale $\dfrac13$. La proiezione sui primi tre vettori della base canonica conserva le componenti $\dfrac12$, $\dfrac14$ e $\dfrac18$. La distanza al quadrato si ottiene sommando i quadrati delle componenti da $n=4$ in poi. Il primo termine della coda è $4^{-4}$ e la ragione è $\dfrac14$, quindi la somma vale $\dfrac1{192}$.

In questo esempio l'errore si calcola senza sommare di nuovo l'intera serie. Dopo i primi $N$ termini, la distanza è $\dfrac{2^{-N}}{\sqrt3}$. Conservare una componente in più dimezza la distanza, poiché anche la prima componente esclusa si dimezza e la forma della coda resta geometrica. Per una successione con un altro andamento il metodo di proiezione resta valido, mentre la velocità dipende dalla somma dei quadrati dei coefficienti esclusi.
:::

## Rappresentazione di Riesz e convergenza debole

::::teorema{#riesz-debole titolo="Funzionali e convergenza debole"}
Sia $H$ uno spazio di Hilbert sul campo scalare $\mathbb K$. Per ogni funzionale lineare continuo $\ell:H\to\mathbb K$ esiste un unico $y\in H$ tale che $\ell(x)=\langle x,y\rangle$, e $\|\ell\|=\|y\|$. È il teorema di Riesz. Per $\ell(f)=\int_0^1f(x)x\,dx$, il vettore rappresentante è $y(x)=x$ e la norma è $\dfrac1{\sqrt3}$.

Si scrive $x_n\rightharpoonup x$ se $\langle x_n,y\rangle\to\langle x,y\rangle$ per ogni $y\in H$. Una successione ortonormale tende debolmente a zero per Bessel, pur avendo norma costante $1$. La convergenza debole unita a $\|x_n\|\to\|x\|$ implica quella in norma, espandendo il quadrato di $\|x_n-x\|$.

:::dimostrazione
Il rappresentante si costruisce isolando la componente ortogonale al nucleo del funzionale. Se $\ell=0$, si prende $y=0$. Se $\ell\ne0$, si sceglie $v$ con $\ell(v)\ne0$. Il nucleo $K=\ker\ell$ è chiuso per continuità, quindi si può proiettare $v$ su $K$. Il residuo $u=v-P_Kv$ è ortogonale a $K$ e soddisfa $\ell(u)=\ell(v)\ne0$.

Per ogni $x$ il vettore $x-\dfrac{\ell(x)}{\ell(u)}u$ appartiene a $K$. Il suo prodotto scalare con $u$ è dunque zero. Si ricava
$$
\ell(x)=\frac{\ell(u)}{\|u\|^2}\langle x,u\rangle
       =\left\langle x,\frac{\overline{\ell(u)}}{\|u\|^2}u\right\rangle.
$$
L'ultimo passaggio usa la coniugazione nel secondo argomento. Se due vettori rappresentano $\ell$, il prodotto scalare con la loro differenza vale zero per ogni $x$. Scegliendo proprio la differenza come vettore di prova, la sua norma risulta zero. Il rappresentante è quindi unico. Cauchy-Schwarz dà $\|\ell\|\le\|y\|$ e, se $y\ne0$, il vettore $\dfrac{y}{\|y\|}$ realizza l'uguaglianza. Per $y=0$ entrambe le norme valgono zero.
:::
::::

:::osservazione
Il teorema di Riesz permette di calcolare una norma di operatore partendo da una norma di vettore. Per ogni $x$ unitario, Cauchy-Schwarz dà $|\ell(x)|\le\|y\|$. Se $y\ne0$, scegliendo $x=\dfrac{y}{\|y\|}$ si raggiunge l'uguaglianza. Nel caso complesso la posizione della coniugazione è essenziale. Con la convenzione adottata, il funzionale $f\mapsto\int f h$ ha rappresentante $\overline h$, mentre il funzionale $f\mapsto\int f\overline h$ ha rappresentante $h$.
:::

:::esempio{titolo="Un prodotto scalare di prova e la norma"}
In $\ell^2$ si scelga $y=(1,\dfrac12,\dfrac13,\ldots)$ e sia $e_n$ il vettore con l'unica componente non nulla in posizione $n$, pari a uno. Si ha $\langle e_n,y\rangle=\dfrac1n$. Per qualunque vettore di prova $z\in\ell^2$, le sue componenti $z_n$ tendono a zero, perché la serie dei loro moduli quadrati converge. Di conseguenza $\langle e_n,z\rangle\to0$, quindi $e_n$ converge debolmente a zero. Ogni $\|e_n\|$ vale invece uno.

::grafico{punti="1,1,pieno;2,0.5,pieno;3,0.3333333333333333,pieno;4,0.25,pieno;5,0.2,pieno;6,0.1666666666666667,pieno;7,0.1428571428571429,pieno" asintoti="y=0" xmin=0 xmax=7.7 ymin=-0.08 ymax=1.13 nomi="n,valore" titolo="Primi valori del prodotto scalare $\langle e_n,y\rangle=\dfrac1n$ per il vettore di prova scelto. Le norme $\|e_n\|$ valgono tutte $1$."}

Per vedere come il controllo delle norme completa quello debole, si sviluppa $\|x_n-x\|^2=\|x_n\|^2+\|x\|^2-2\operatorname{Re}\langle x_n,x\rangle$. La convergenza debole fa tendere l'ultimo prodotto a $\|x\|^2$. Se anche le norme tendono a $\|x\|$, il quadrato della distanza tende a zero.
:::

:::teorema{#norma-limite-debole titolo="Stima della norma del limite debole"}
Se $x_n\rightharpoonup x$ in uno spazio di Hilbert, allora $\|x\|\leq\liminf_n\|x_n\|$. Se $x=0$ la stima segue dalla non negatività della norma. Per $x\ne0$ si usa come vettore di prova $\dfrac{x}{\|x\|}$. I prodotti scalari con quel vettore tendono a $\|x\|$ e i loro moduli sono al più $\|x_n\|$ per Cauchy-Schwarz. Passando al limite inferiore si ottiene la tesi.

Per esempio, in $\ell^2$ si ponga $v_n=2e_1+3e_n$ per $n\geq2$. Il coefficiente nella direzione $e_n$ dà, con ogni vettore di prova fissato, un prodotto scalare che tende a zero. Quindi il limite debole è $2e_1$. Le norme dei termini valgono $\sqrt{13}$, perché le due componenti sono ortogonali. La norma del limite vale invece due. In questo caso la disuguaglianza è stretta e la distanza da $2e_1$ resta tre.
:::
