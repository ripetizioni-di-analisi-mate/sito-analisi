## Stime del resto, operazioni e singolarità

:::esempio{#resto-geometrico-uniforme titolo="Errore uniforme della somma geometrica troncata"}
La formula della somma finita permette di scegliere il grado necessario per una tolleranza fissata. Sia $N$ un intero non negativo e sia $P_N(x)=\displaystyle\sum_{n=0}^N x^n$ la somma parziale di grado $N$. Per $|x|<1$ il resto vale
$$
\frac{1}{1-x}-P_N(x)=\frac{x^{N+1}}{1-x}.
$$
Se $0<r<1$, su $[-r,r]$ il numeratore ha modulo al più $r^{N+1}$ e il denominatore è almeno $1-r$. Entrambi i valori si ottengono in $x=r$, quindi la norma uniforme dell'errore sul compatto è esattamente $\dfrac{r^{N+1}}{1-r}$. Al crescere di $r$ verso uno il fattore $1-r$ si riduce, perciò un grado adeguato su un compatto più piccolo può risultare insufficiente su quello più grande.

::grafico{f="1/(1-x);1+x+x^2;1+x+x^2+x^3+x^4+x^5" xmin=-0.85 xmax=0.85 ymin=0 ymax=7 segmenti="-0.5,0,-0.5,4;0.5,0,0.5,4" legenda="\dfrac{1}{1-x};P_2;P_5" titolo="Tra $-\dfrac12$ e $\dfrac12$, l'errore massimo di $P_2$ è $\dfrac14$ e quello di $P_5$ è $\dfrac{1}{32}$. Entrambi si raggiungono nell'estremo destro."}
:::

:::esempio{#logaritmo-convergenza-uniforme-bordo titolo="Convergenza uniforme fino a un estremo"}
Fissato $x\in[0,1]$, la successione dei moduli $\dfrac{x^n}{n}$ è non crescente e tende a zero. Il criterio di Leibniz maggiora l'errore della somma parziale $L_N(x)=\displaystyle\sum_{n=1}^N(-1)^{n+1}\dfrac{x^n}{n}$ con il modulo del primo termine omesso. Si ottiene
$$
|\log(1+x)-L_N(x)|\leq\frac{x^{N+1}}{N+1}\leq\frac1{N+1}.
$$
Il teorema di Abel identifica la somma in $x=1$ con il limite da sinistra di $\log(1+x)$, che vale $\log 2$. La maggiorazione è indipendente da $x$ e tende a zero, quindi la convergenza è uniforme su $[0,1]$.

::grafico{f="log(1+x);x-x^2/2;x-x^2/2+x^3/3-x^4/4+x^5/5" xmin=0 xmax=1.08 ymin=-0.05 ymax=0.9 punti="1,0.6931471805599453,pieno" legenda="\log(1+x);L_2;L_5" titolo="Le somme parziali $L_2$ e $L_5$ delimitano $\log(1+x)$ su $[0,1]$. Nel punto $x=1$ le due approssimazioni si trovano ai lati di $\log 2$."}
:::

:::attenzione
La convergenza uniforme può valere senza convergenza totale. Su $[0,1]$ il modulo del termine di indice $n$ raggiunge il massimo in $x=1$, quindi la serie dei massimi è la serie armonica e diverge. In $x=-1$ ciascun termine vale $-\dfrac1n$, perciò la serie diverge anche puntualmente in questo estremo.
:::

:::esempio{#primitiva-del-logaritmo titolo="Gli estremi possono cambiare dopo l'integrazione"}
Una primitiva di $\log(1+x)$ che si annulla in zero è $F(x)=(1+x)\log(1+x)-x$. Integrando la serie del logaritmo si trova, per $|x|<1$,
$$
F(x)=\sum_{n=1}^{\infty}\frac{(-1)^{n+1} x^{n+1}}{n(n+1)}.
$$
Il massimo del modulo del termine su $[-1,1]$ vale $\dfrac1{n(n+1)}$ e si raggiunge in entrambi gli estremi. Poiché $\dfrac1{n(n+1)}=\dfrac1n-\dfrac1{n+1}$, la serie dei massimi converge per telescopia. La serie di $F$ converge quindi totalmente su $[-1,1]$. In $x=-1$ i segni si compensano e la somma telescopica vale $1$. Il valore coincide con il limite destro di $F$ perché $t\log t$ tende a zero quando $t$ tende a zero da destra. Il logaritmo, che è la derivata nell'intervallo aperto, diverge a $-\infty$ verso lo stesso estremo. L'integrazione ha conservato il raggio $1$ e ha cambiato il comportamento in $x=-1$.

::grafico{f="(1+x)*log(1+x)-x;log(1+x)" xmin=-1.2 xmax=1.05 ymin=-2.4 ymax=1.25 asintoti="x=-1" punti="-1,1,pieno" legenda="F;F'" titolo="La primitiva $F$ ammette valore limite $1$ nell'estremo sinistro, mentre $F'(x)=\log(1+x)$ diverge a $-\infty$."}
:::

:::esempio{#prodotto-di-cauchy-potenze titolo="Coefficienti del prodotto di due serie"}
Nel tratto $|x|<1$ le serie geometriche di ragione $x$ e $-x$ convergono assolutamente, quindi il loro prodotto si ottiene raggruppando i termini per grado. Il coefficiente di $x^n$ è $\sum_{j=0}^n(-1)^j$, che vale $1$ per $n$ pari e $0$ per $n$ dispari. Di conseguenza
$$
\frac{1}{1-x}\cdot\frac{1}{1+x}
=\sum_{k=0}^{\infty} x^{2k}
=\frac{1}{1-x^2}.
$$
I due fattori si scambiano sotto la sostituzione $x\mapsto-x$, perciò il prodotto è pari. Il calcolo dei coefficienti mostra esattamente dove avviene la cancellazione dei gradi dispari. Negli estremi $x=\pm1$ i termini della serie prodotto valgono tutti uno, quindi la serie diverge. In altri problemi il prodotto può avere raggio maggiore di quello comune. Per esempio, moltiplicando la serie geometrica per $1-x$ si ottiene il polinomio costante $1$, la cui serie converge ovunque.

::grafico{f="1/(1-x^2);1/(1-x);1/(1+x)" xmin=-0.91 xmax=0.91 ymin=0 ymax=6 legenda="\dfrac{1}{1-x^2};\dfrac{1}{1-x};\dfrac{1}{1+x}" titolo="I due fattori si scambiano per riflessione rispetto all'asse verticale. Il loro prodotto è simmetrico e il suo sviluppo contiene soltanto potenze pari."}
:::

:::esempio{#poli-complessi-raggio-taylor titolo="Una singolarità complessa può determinare il raggio reale"}
La funzione $\dfrac1{1+x^2}$ è definita su tutto l'asse reale. Al centro $x_0=0$ la sostituzione di $-x^2$ nella serie geometrica dà raggio $1$. Per capire che cosa cambia spostando il centro a $x_0=1$, si usa la fattorizzazione complessa $1+z^2=(z-i)(z+i)$. Scrivendo $w=z-1$, entrambi i fattori reciproci hanno una serie geometrica in $w$, rispettivamente di ragione $-\dfrac{w}{1-i}$ e $-\dfrac{w}{1+i}$. I moduli di $1-i$ e $1+i$ sono uguali a $\sqrt2$. Il prodotto dà quindi la serie centrata in $1$ almeno per $|w|<\sqrt2$.

Un raggio maggiore di $\sqrt2$ farebbe convergere la serie anche in $z=i$. I coefficienti $a_n$ dello sviluppo soddisfano l'identità $(1+z^2)\sum_{n=0}^{\infty}a_n(z-1)^n=1$, perché moltiplicare le due serie geometriche per i rispettivi denominatori dà uno. Se la serie convergesse in $z=i$, l'identità tra le somme varrebbe in quel punto, dove il membro sinistro è zero e il destro è uno. Questa contraddizione dimostra che il raggio è esattamente $\sqrt2$. Nel capitolo sugli integrali complessi lo stesso legame compare nello studio degli sviluppi intorno a punti vicini a singolarità isolate.

::grafico{curve="cos(t),sin(t),0,6.283185307179586;1+sqrt(2)*cos(t),sqrt(2)*sin(t),0,6.283185307179586" punti="0,1,pieno,i;0,-1,pieno,−i;1,0,pieno;0,0,pieno" segmenti="1,0,0,1" xmin=-1.45 xmax=2.6 ymin=-1.65 ymax=1.65 uguale=1 nomi="Re,Im" legenda="|z|=1;|z-1|=\sqrt2" titolo="Le circonferenze centrate in $0$ e in $1$ passano entrambe per i poli $i$ e $-i$. I raggi sono rispettivamente $1$ e $\sqrt2$."}
:::
