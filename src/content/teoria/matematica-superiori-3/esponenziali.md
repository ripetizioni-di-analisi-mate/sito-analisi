---
titolo: Potenze e funzioni esponenziali
sommario: Esponenti, grafici, equazioni e disequazioni esponenziali, con applicazioni alla crescita e al decadimento.
---

## Potenze a base positiva

:::teorema{#potenze titolo="Esponenti interi, razionali e reali"}
Con base $a>0$, la potenza $a^n$ per $n$ intero positivo è il prodotto di $n$ fattori uguali ad $a$. Si pone $a^0=1$. Un esponente negativo prende il reciproco della potenza con esponente opposto, mentre un esponente frazionario si esprime attraverso una radice.
$$
a^{-u}=\frac1{a^u},
\qquad
a^{\frac mn}=\sqrt[n]{a^m}
\quad (m,n\in\mathbb Z,\; n>0).
$$
L'estensione agli esponenti reali conserva le proprietà delle potenze. Per $u,v\in\mathbb R$ valgono
$$
\begin{aligned}
a^u\cdot a^v&=a^{u+v},\\[4pt]
\frac{a^u}{a^v}&=a^{u-v},\\[4pt]
(a^u)^v&=a^{uv}.
\end{aligned}
$$
Il quoziente è sempre definito perché $a^v>0$. Le leggi sono utili per riscrivere potenze diverse usando la stessa base.
:::

:::esempio{titolo="Radice, potenza e reciproco"}
Per calcolare $16^{\frac34}$ si può prendere la radice quarta di $16$ e poi elevare al cubo. Per calcolare $16^{-\frac34}$ si prende il reciproco del risultato.
$$
\begin{aligned}
16^{\frac34}&=\left(\sqrt[4]{16}\right)^3=2^3=8,\\[4pt]
16^{-\frac34}&=\frac1{16^{\frac34}}=\frac18.
\end{aligned}
$$
Scrivendo $16=2^4$ si ottiene lo stesso risultato da $16^{-\frac34}=\left(2^4\right)^{-\frac34}=2^{-3}$. La scelta dipende da quale base si riconosce più rapidamente.
:::

:::osservazione{titolo="Perché si può ridurre l'esponente ai minimi termini"}
La definizione di $a^{\frac mn}$ deve dare lo stesso valore se si scrive la frazione in modo equivalente. Sia $u=\sqrt[n]{a^m}$, che è positivo perché $a>0$. Per ogni intero $k>0$ si ha
$$
u^{kn}=(u^n)^k=(a^m)^k=a^{km}.
$$
Poiché $u$ è positivo, è proprio la radice $kn$-esima di $a^{km}$. Questo giustifica l'uguaglianza $a^{\frac mn}=a^{\frac{km}{kn}}$. Per esempio, $64^{\frac26}$ si può leggere come $\sqrt[6]{64^2}$ oppure come $64^{\frac13}=\sqrt[3]{64}=4$.
:::

:::attenzione{titolo="Una somma di potenze"}
Gli esponenti si sommano quando si moltiplicano potenze con la stessa base. In una somma, una potenza comune si può raccogliere come fattore. Per esempio $2^x+2^{x+1}=2^x(1+2)=3\cdot2^x$. Con $x=1$, la somma vale $6$, mentre $2^{x+x+1}$ darebbe $8$.
:::

::::teorema{titolo="Base reciproca e segno dell'esponente"}
Se $a>0$ e $u\in\mathbb R$, allora $\left(\dfrac1a\right)^u=a^{-u}$. Il passaggio permette di riscrivere una potenza di base frazionaria nella base reciproca. Se, per esempio, $a=3$, si può studiare $\left(\dfrac13\right)^{2-x}$ con la funzione crescente $3^v$ dopo aver scritto correttamente il nuovo esponente $x-2$.

:::dimostrazione
Si sostituisce $\dfrac1a=a^{-1}$ e si applica la potenza di potenza. Il prodotto degli esponenti è $(-1)u=-u$, quindi il risultato è $a^{-u}$.
:::
::::

:::esempio{titolo="Una potenza nell'ascissa e una nell'ordinata"}
Nella funzione $y=2^x$ l'incognita occupa il posto dell'esponente. Nella funzione $y=x^2$ occupa il posto della base. Entrambe passano per $(2,4)$ e $(4,16)$, ma il loro andamento è diverso. A $x=3$, fra quelle ascisse, si ha $2^3=8<9=3^2$. A $x=5$ si ha invece $2^5=32>25=5^2$. Le intersezioni indicate sono punti in cui coincidono le due quote e non implicano che le leggi delle due funzioni siano uguali.

::grafico{f="2^x;x^2" xmin=-0.15 xmax=5.3 ymin=-1 ymax=35 punti="2,4,pieno,A;4,16,pieno,B" legenda="2^x;x^2" titolo="La crescita di $2^x$ e di $x^2$ si confronta alle stesse ascisse"}

:::

## Funzione esponenziale e grafico

:::definizione{#funzione titolo="Base positiva diversa da uno"}
La **funzione esponenziale** di base $a>0$, $a\ne1$, è $f(x)=a^x$. L'esponente $x$ può essere qualsiasi numero reale, quindi il dominio è $\mathbb R$. I valori della funzione formano l'intervallo $(0,+\infty)$. Il grafico passa per $(0,1)$ perché $a^0=1$ e per $(1,a)$ perché $a^1=a$. Il secondo punto permette di ricavare la base se si conosce il grafico.
:::

::::teorema{#monotonia titolo="Monotonia dell'esponenziale"}
Se $a>1$, la funzione è strettamente crescente. Se $0<a<1$, la funzione è strettamente decrescente. In entrambi i casi è **iniettiva**, quindi a un valore assunto dalla funzione corrisponde un solo esponente.

:::dimostrazione
Siano $x_2>x_1$. Il rapporto dei valori è $a^{x_2-x_1}$. L'esponente della potenza nel rapporto è positivo, quindi il rapporto supera $1$ se $a>1$ ed è minore di $1$ se $0<a<1$. Siccome $a^{x_1}>0$, ciò equivale a $a^{x_2}>a^{x_1}$ nel primo caso e a $a^{x_2}<a^{x_1}$ nel secondo.
:::
::::

:::esempio{titolo="Grafici con basi reciproche"}
Poiché $\left(\dfrac12\right)^x=2^{-x}$, il grafico con base $\dfrac12$ si ottiene riflettendo quello con base $2$ rispetto all'asse $y$. Il punto $(2,4)$ della funzione crescente corrisponde a $(-2,4)$ della funzione decrescente. Entrambe le curve hanno l'asse $x$ come **asintoto orizzontale**, ciascuna dalla parte in cui la funzione assume valori sempre più piccoli. L'asse resta esterno ai grafici perché le due potenze sono positive per ogni $x$.

::grafico{f="2^x;0.5^x" xmin=-4 xmax=4 ymin=-0.7 ymax=6.2 punti="-2,4;0,1;2,4" legenda="2^x;\left(\frac12\right)^x" titolo="Lo scambio da $x$ a $-x$ riflette il grafico rispetto all'asse $y$"}

:::

:::osservazione{titolo="La base uguale a uno"}
La formula $f(x)=1^x=1$ è definita per ogni $x$, ma rappresenta una funzione costante. Per esempio $1^x=1$ è vera per ogni $x$, mentre $1^x=2$ è impossibile. Nell'uguaglianza fra potenze la condizione $a\ne1$ permette di concludere che gli esponenti coincidono.
:::

:::esempio{titolo="Leggere un fattore di crescita da due punti"}
Una curva della forma $y=C a^x$, con $C>0$ e $a>0$, passa per $(1,6)$ e $(3,54)$. Dividere le ordinate elimina il fattore $C$ e lascia la potenza associata alla differenza tra le ascisse.
$$
\begin{aligned}
\frac{54}{6}&=\frac{Ca^3}{Ca^1}=a^2,\\[4pt]
a&=3,\\[4pt]
6&=C\cdot3,\qquad C=2.
\end{aligned}
$$
Le ascisse differiscono di due unità. Il rapporto $9$ tra le ordinate è quindi il fattore complessivo di due passi. Il fattore per un solo passo è la radice quadrata positiva $3$. La funzione cercata è $y=2\cdot3^x$.
:::

::::teorema{titolo="Confronto fra due basi positive"}
Siano $a>b>0$. Per $x>0$ vale $a^x>b^x$, mentre per $x<0$ vale $a^x<b^x$. Per $x=0$ si ottiene $a^0=b^0=1$. Il risultato confronta potenze con lo stesso esponente e basi diverse.

:::dimostrazione
Poiché $b^x>0$, l'ordine fra le potenze si può leggere confrontando il rapporto con $1$. Si ha $\dfrac{a^x}{b^x}=\left(\dfrac ab\right)^x$ e la base del rapporto è maggiore di $1$. Risulta quindi un rapporto maggiore di $1$ se $x>0$, minore se $x<0$ e uguale a $1$ se $x=0$. Moltiplicando per il denominatore positivo si ottiene il confronto cercato.
:::
::::

:::esempio{titolo="Potenze di due e tre"}
Per $x=1$ le quote sono $2$ e $3$. Per $x=-1$ si ottengono i reciproci $\dfrac12$ e $\dfrac13$, il cui ordine è opposto. Le due curve hanno in comune solo $(0,1)$, perché alla stessa ascissa non nulla il rapporto $\left(\dfrac32\right)^x$ è diverso da $1$.

::grafico{f="2^x;3^x" xmin=-2.5 xmax=1.9 ymin=-0.35 ymax=7.8 punti="0,1,pieno,P;1,2;1,3" legenda="2^x;3^x" titolo="La curva di $3^x$ è sopra quella di $2^x$ a destra di $P$ e sotto a sinistra"}

:::

## Equazioni con base comune

:::teorema{#equazioni titolo="Uguaglianza degli esponenti"}
Siano $a>0$ e $a\ne1$. Per tutti i valori di $x$ per cui i due esponenti sono definiti, vale l'equivalenza
$$
a^{f(x)}=a^{g(x)} \quad\Longleftrightarrow\quad f(x)=g(x).
$$
L'iniettività giustifica il passaggio dagli stessi valori della potenza agli stessi esponenti. Se le basi sono diverse ma riconducibili a una base comune, si riscrivono prima le potenze usando le loro proprietà.
:::

:::esempio{titolo="Una base scritta come potenza dell'altra"}
Si risolva $4^{x-1}=8$ riscrivendo $4=2^2$ e $8=2^3$. La proprietà della potenza di potenza moltiplica l'esponente $x-1$ per $2$.
$$
\begin{aligned}
\left(2^2\right)^{x-1}&=2^3,\\[4pt]
2^{2(x-1)}&=2^3,\\[4pt]
2x-2&=3,\\[4pt]
x&=\frac52.
\end{aligned}
$$
Il risultato è coerente con l'equazione iniziale, poiché $4^{\frac52-1}=4^{\frac32}=8$.
:::

:::esempio{titolo="Raccoglimento di un fattore esponenziale"}
Per risolvere $3^{x+1}-3^x=18$ si scrive $3^{x+1}=3\cdot3^x$. I due termini contengono così lo stesso fattore.
$$
\begin{aligned}
3\cdot3^x-3^x&=18,\\[4pt]
(3-1)3^x&=18,\\[4pt]
3^x&=9=3^2.
\end{aligned}
$$
Dal confronto degli esponenti segue $x=2$. In un'equazione come $3^x=5$, in cui il secondo membro non si riconosce come potenza esatta, la soluzione si scrive $x=\log_3 5$.
:::

:::attenzione{titolo="Un logaritmo richiede un secondo membro positivo"}
L'equazione $2^x=k$ ha senso per ogni numero reale $k$. Per risolverla, si verifica prima che $k$ appartenga all'immagine dell'esponenziale. Se $k>0$, c'è una soluzione ed è $\log_2 k$. Se $k\leq0$, l'insieme delle soluzioni è vuoto. Per esempio $2^x+3=1$ porterebbe a $2^x=-2$, impossibile per ogni $x$ reale. Il tasto del logaritmo non è necessario per riconoscere questo caso.
:::

:::esempio{titolo="Un esponente con un denominatore"}
Per risolvere $2^{\frac1{x-2}}=\dfrac12$, si esclude prima $x=2$, dove l'esponente è indefinito. La soglia è $2^{-1}$. L'iniettività di $2^u$ dà
$$
\frac1{x-2}=-1
\quad\Longleftrightarrow\quad
1=-(x-2)
\quad\Longleftrightarrow\quad
x=1.
$$
Il passaggio si può invertire perché sul dominio $x-2\ne0$. Si controlla la soluzione sostituendo $x=1$, che dà esponente $-1$. Per $x>2$ l'esponente è positivo, quindi la curva ha quota maggiore di $1$ e non può incontrare la retta di quota $\dfrac12$. La posizione dei due rami fornisce così un controllo geometrico del risultato.

::grafico{f="2^(1/(x-2));0.5" xmin=-0.5 xmax=4.5 ymin=-0.2 ymax=4.2 asintoti="x=2" punti="1,0.5,pieno,P;3,2" legenda="2^{\frac1{x-2}};\frac12" titolo="L'intersezione $P$ si trova sul ramo a sinistra dell'ascissa esclusa $2$"}

:::

## Disequazioni con base maggiore di uno

:::teorema{#crescenti titolo="Conservazione del verso"}
Per $a>1$ e $x$ nel dominio comune, $a^{f(x)}>a^{g(x)}$ equivale a $f(x)>g(x)$. La stessa equivalenza vale con $\geq$, $<$ oppure $\leq$. Se in uno degli esponenti compare un quoziente o una radice, il dominio di quella espressione resta una condizione per la disequazione.
:::

:::esempio{titolo="Una radice nell'esponente"}
Per $3^{\sqrt{x-1}}\leq27$ serve $x-1\geq0$. Poiché $27=3^3$ e la base è maggiore di $1$, si conserva il verso nel confronto degli esponenti.
$$
\begin{aligned}
3^{\sqrt{x-1}}\leq3^3
 &\quad\Longleftrightarrow\quad \sqrt{x-1}\leq3\\[4pt]
 &\quad\Longleftrightarrow\quad x-1\leq9
 \quad (x\geq1).
\end{aligned}
$$
Elevare al quadrato conserva il confronto perché i due membri sono non negativi. Intersecando $x\leq10$ con il dominio si trova $[1,10]$. In $x=1$ l'esponente è zero e la potenza vale $1$, quindi l'estremo sinistro appartiene alla soluzione.
:::

:::esempio{titolo="Una disequazione con due basi diverse"}
Nel confronto $4^x\leq 2^{3-x}$ si riscrive $4^x$ con base $2$. Poiché le due potenze ottenute hanno una base maggiore di $1$, l'ordine degli esponenti è lo stesso di quello delle potenze.
$$
2^{2x}\leq2^{3-x}
\quad\Longleftrightarrow\quad
2x\leq3-x
\quad\Longleftrightarrow\quad
x\leq1.
$$
In $x=1$, i due membri valgono $4$. Per $x=0$, invece, valgono rispettivamente $1$ e $8$. In questo problema il secondo membro $2^{3-x}$ diminuisce con $x$ perché il suo esponente diminuisce. Il confronto diretto tra gli esponenti tiene conto anche di questa differenza.
:::

## Disequazioni con base tra zero e uno

:::teorema{#decrescenti titolo="Inversione del verso"}
Per $0<a<1$ e $x$ nel dominio comune, $a^{f(x)}>a^{g(x)}$ equivale a $f(x)<g(x)$. La funzione è decrescente perché a un esponente maggiore corrisponde un valore della potenza minore. Anche l'uguaglianza resta ammessa se la disequazione di partenza è larga.
:::

:::esempio{titolo="Una soglia con base decrescente"}
Si consideri $\left(\dfrac12\right)^x\geq\dfrac18$. Poiché $\dfrac18=\left(\dfrac12\right)^3$, il confronto si può fare tra potenze con la stessa base.
$$
\left(\frac12\right)^x\geq
\left(\frac12\right)^3
\quad\Longleftrightarrow\quad x\leq3.
$$
In $x=3$ si ha uguaglianza. Per $x=2$ il valore è $\dfrac14$, che supera la soglia, mentre $x=4$ produce $\dfrac1{16}$, che è sotto la soglia. Il grafico mostra da quale parte dell'intersezione la curva resta sopra la retta.

::grafico{f="0.5^x;0.125" xmin=-0.4 xmax=5.5 ymin=-0.2 ymax=1.2 punti="3,0.125,pieno,P" segmenti="3,0,3,0.125" legenda="\left(\frac12\right)^x;\frac18" titolo="La curva è sopra il livello $y=\dfrac18$ a sinistra di $P$"}

:::

:::esempio{titolo="Una disequazione con due inversioni del verso"}
Nella disequazione $\left(\dfrac12\right)^{4-2x}\geq\dfrac14$ la soglia è $\left(\dfrac12\right)^2$. La base frazionaria inverte il verso nel confronto tra gli esponenti. Quando si isola $x$, la divisione per il coefficiente negativo inverte nuovamente il verso.
$$
\begin{aligned}
4-2x&\leq 2,\\
-2x&\leq -2,\\
x&\geq 1.
\end{aligned}
$$
Il risultato è coerente con il grafico. Al crescere di $x$ diminuisce l'esponente $4-2x$. Una base minore di $1$ associa un valore maggiore a un esponente minore, quindi la funzione composta è crescente. In $x=0$ la quota è $\dfrac1{16}$ e in $x=2$ è $1$. L'intersezione avviene in $x=1$, incluso dalla disuguaglianza.

::grafico{f="0.5^(4-2*x);0.25" xmin=-0.5 xmax=2.7 ymin=-0.1 ymax=1.9 punti="0,0.0625;1,0.25,pieno,P;2,1" legenda="\left(\frac12\right)^{4-2x};\frac14" titolo="La funzione cresce e raggiunge la soglia $\dfrac14$ in $P$"}

:::

## Sostituzione con una potenza positiva

:::teorema{#sostituzione titolo="Quadratiche nell'esponenziale"}
Poiché $a^{2x}=(a^x)^2$, se $a>0$ e $a\ne1$ un'equazione della forma $a^{2x}-sa^x+p=0$ si riduce a $u^2-su+p=0$ ponendo $u=a^x$. Il vincolo $u>0$ viene dall'immagine dell'esponenziale. Si conserva ogni radice positiva e a ciascuna corrisponde un solo $x$. Per una disequazione nella stessa forma si intersecano prima gli intervalli di $u$ con $(0,+\infty)$, poi si torna a $x$ usando la monotonia.
:::

:::esempio{titolo="Una radice da scartare"}
In $4^x-2^x-2=0$ si sostituisce $u=2^x$ e si fattorizza il trinomio.
$$
\begin{aligned}
u^2-u-2&=(u-2)(u+1)=0,\\[4pt]
u=2 &\Longrightarrow x=1.
\end{aligned}
$$
L'altra radice è $u=-1$. Si scarta perché $2^x$ è positivo per ogni $x$. Per la stessa ragione, in un'equazione come $4^x-8\cdot2^x=0$ si scarta la radice $u=0$ e resta $u=8$, cioè $x=3$.
:::

:::esempio{titolo="Dall'intervallo della sostituzione all'intervallo di x"}
Si risolva $9^x-4\cdot3^x+3<0$. Con $u=3^x>0$ si ottiene $(u-1)(u-3)<0$. Il prodotto è negativo per $1<u<3$ perché in questo intervallo il primo fattore è positivo e il secondo negativo.
$$
1<3^x<3
\quad\Longleftrightarrow\quad
3^0<3^x<3^1
\quad\Longleftrightarrow\quad
0<x<1.
$$
Nell'ultimo passaggio si usa la crescita dell'esponenziale. I valori $1$ e $3$ sono quote della funzione $3^x$, perciò bisogna trovare le ascisse che producono quelle quote. I due estremi sono esclusi perché annullano il trinomio.
:::

:::osservazione{titolo="Coefficienti e numero di soluzioni"}
Per $4^x-c\cdot2^x+1=0$ si cerca il numero di radici *positive* di $u^2-cu+1=0$. Il discriminante è $c^2-4$ e il prodotto delle radici, quando sono reali, è $1$. Per $c>2$ le radici sono distinte, hanno lo stesso segno e somma $c>0$, quindi sono entrambe positive. Per $c=2$ la radice doppia $u=1$ corrisponde a un solo $x$. Se $|c|<2$ le radici non sono reali. Se $c\leq-2$, hanno somma negativa e prodotto positivo, quindi sono entrambe negative, anche nel caso della radice doppia $u=-1$.
:::

:::esempio{titolo="Ritornare a x con una sostituzione decrescente"}
Si consideri $4^{-x}-5\cdot2^{-x}+4\leq0$. Ponendo $u=2^{-x}=\left(\dfrac12\right)^x$ si ottiene il prodotto $(u-1)(u-4)\leq0$. Perciò $1\leq u\leq4$. I due estremi sono positivi, quindi rientrano nell'immagine della funzione scelta per la sostituzione.
$$
2^0\leq2^{-x}\leq2^2
\quad\Longleftrightarrow\quad
0\leq-x\leq2
\quad\Longleftrightarrow\quad
-2\leq x\leq0.
$$
Alla quota $1$ corrisponde l'ascissa $0$, mentre alla quota $4$ corrisponde $-2$. L'ordine nell'intervallo cambia perché la sostituzione è decrescente. Ad esempio, per $x=-1$ risulta $u=2$ e il prodotto vale $(2-1)(2-4)=-2$. Per $x=1$ si ha invece $u=\dfrac12$ e il prodotto è positivo.

::grafico{f="4^(-x)-5*2^(-x)+4" xmin=-2.4 xmax=1.4 ymin=-3 ymax=8 punti="-2,0,pieno,A;0,0,pieno,B;-1,-2" legenda="4^{-x}-5\cdot2^{-x}+4" titolo="Il primo membro è non positivo tra le ascisse di $A$ e $B$, estremi inclusi"}

:::

## Grafici traslati e riscalati

:::teorema{#trasformazioni titolo="Traslazione dell'esponenziale"}
Siano $a>0$, $a\ne1$ e $h,k\in\mathbb R$. Il grafico di $f(x)=a^{x-h}+k$ si ottiene spostando quello di $y=a^x$ di $h$ unità in orizzontale e $k$ in verticale. La traslazione porta $(0,1)$ in $(h,1+k)$ e l'asintoto $y=0$ in $y=k$. La funzione ha immagine $(k,+\infty)$ perché $a^{x-h}$ assume tutti i valori positivi.
:::

:::esempio{titolo="Asintoto e intercette di una traslazione"}
Per $f(x)=2^{x-1}-3$, il punto di riferimento è $(1,-2)$ e l'asintoto è $y=-3$. Si trovano due intercette diverse ponendo a turno $x=0$ e $y=0$.
$$
\begin{aligned}
f(0)&=2^{-1}-3=-\frac52,\\[4pt]
f(x)=0&\quad\Longleftrightarrow\quad 2^{x-1}=3\\[4pt]
 &\quad\Longleftrightarrow\quad x=1+\log_2 3.
\end{aligned}
$$
L'immagine è $(-3,+\infty)$, quindi comprende zero e il grafico interseca l'asse $x$. Poiché $2<3<4$, l'intercetta orizzontale ha ascissa compresa tra $2$ e $3$.

::grafico{f="2^(x-1)-3" xmin=-2 xmax=4 ymin=-4 ymax=4 asintoti="y=-3" punti="0,-2.5;1,-2;2.5849625,0" titolo="Il grafico di $f(x)=2^{x-1}-3$ resta sopra $y=-3$"}

:::

:::osservazione{titolo="Un fattore negativo davanti alla potenza"}
In $f(x)=C a^{x-h}+k$ con $C<0$, il termine $C a^{x-h}$ assume tutti i valori negativi. L'immagine diventa $(-\infty,k)$ e l'asintoto resta $y=k$. Il segno di $C$ inverte anche il verso di variazione della curva di partenza. Per esempio $3-2^x$ è decrescente, ha immagine $(-\infty,3)$ e passa per $(0,2)$.
:::

:::esempio{titolo="Un livello che il grafico non raggiunge"}
Si consideri $f(x)=5-3^x$. Per trovare se esiste un punto a quota $L$, si pone $5-3^x=L$. Da qui segue $3^x=5-L$. Poiché una potenza di $3$ è positiva per ogni $x$, la quota $L$ è raggiunta esattamente quando $L<5$.
$$
\begin{aligned}
L=4 &\quad\Longrightarrow\quad 3^x=1\quad\Longrightarrow\quad x=0,\\[4pt]
L=5 &\quad\Longrightarrow\quad 3^x=0.
\end{aligned}
$$
Il primo caso fornisce il punto $(0,4)$. Nel secondo nessuna ascissa reale soddisfa l'equazione. Il fatto che la curva si avvicini alla retta di asintoto non permette di includere la sua quota nell'immagine.
:::

::::teorema{titolo="Immagine dopo una riflessione e una traslazione"}
Siano $a>0$, $a\ne1$, $C\ne0$, e $h,k\in\mathbb R$. Per $G(x)=C a^{x-h}+k$ l'immagine è $(k,+\infty)$ se $C>0$ e $(-\infty,k)$ se $C<0$. La quota $k$ non appartiene all'immagine in nessuno dei due casi.

:::dimostrazione
Per trovare se la quota $y$ è raggiunta, si risolve $a^{x-h}=\dfrac{y-k}{C}$. Dato che l'immagine di $a^u$ è $(0,+\infty)$, esiste un'ascissa esattamente quando il rapporto è positivo. Con $C>0$ si richiede $y>k$, mentre con $C<0$ si richiede $y<k$. In $y=k$ il rapporto vale zero, che è fuori dall'immagine dell'esponenziale.
:::
::::

:::esempio{titolo="Curve sui due lati dello stesso asintoto"}
Le funzioni $2+2^x$ e $2-2^x$ hanno lo stesso asintoto $y=2$. Alla stessa ascissa si trovano a distanza $2^x$ dalla retta, una sopra e l'altra sotto. Il grafico della seconda è quindi il riflesso del primo rispetto a $y=2$. In $x=0$ le quote valgono $3$ e $1$, mentre a $x=1$ diventano $4$ e $0$.

::grafico{f="2+2^x;2-2^x" xmin=-3.5 xmax=2 ymin=-2.4 ymax=6.7 asintoti="y=2" punti="0,3;0,1;1,4;1,0" segmenti="1,0,1,4" legenda="2+2^x;2-2^x" titolo="Le due curve sono simmetriche rispetto a $y=2$"}

:::

## Crescita e decadimento

:::definizione{#modelli titolo="Fattore moltiplicativo costante"}
Il modello $N(t)=N_0q^t$ descrive una quantità con valore iniziale $N_0>0$ e fattore $q>0$ per unità di tempo. Infatti $N(0)=N_0$ e $N(t+1)=qN(t)$. Se la quantità cresce del $10\%$ in ogni unità, rimane il valore precedente più il suo $10\%$, quindi $q=1{,}10$. Se diminuisce del $20\%$, rimane l'$80\%$, quindi $q=0{,}80$. La percentuale di ogni passo si calcola sul valore all'inizio di quel passo.
:::

:::esempio{titolo="Due riduzioni percentuali successive"}
Una quantità iniziale pari a $200$ diminuisce del $20\%$ per due giorni consecutivi. Dopo il primo giorno vale $200\cdot0{,}80=160$. Dopo il secondo vale $160\cdot0{,}80=128$. Il rapporto finale rispetto al valore di partenza è
$$
\frac{128}{200}=(0{,}80)^2=0{,}64.
$$
Rimane quindi il $64\%$ della quantità iniziale, per una riduzione complessiva del $36\%$. Il secondo calo è di $32$ unità perché il nuovo valore di riferimento è $160$.
:::

:::esempio{titolo="Dimezzamento e raddoppio"}
Se una quantità raddoppia ogni $T>0$ unità di tempo, dopo $t$ unità sono trascorsi $\dfrac tT$ periodi, quindi $N(t)=N_0\cdot2^{\frac tT}$. Per un dimezzamento nello stesso intervallo si usa $N(t)=N_0\left(\dfrac12\right)^{\frac tT}$. Per esempio, da $80$ unità con un raddoppio ogni $3$ ore si arriva dopo $6$ ore a $80\cdot 2^{\frac63}=320$.
:::

:::esempio{titolo="Confronto tra crescita lineare ed esponenziale"}
Due quantità valgono inizialmente $100$. La prima aumenta di $20$ unità al giorno. La seconda aumenta ogni giorno del $20\%$. Chiamando $t$ il numero di giorni, si ottengono rispettivamente $A(t)=100+20t$ e $B(t)=100(1{,}20)^t$.

| $t$ | $A(t)$ | $B(t)$ |
|---|---|---|
| $0$ | $100$ | $100$ |
| $1$ | $120$ | $120$ |
| $2$ | $140$ | $144$ |
| $3$ | $160$ | $172{,}8$ |

Al primo giorno i due incrementi coincidono. In seguito la crescita percentuale si applica a una quantità maggiore di $100$, quindi il suo incremento aumenta. Nel primo modello la differenza $A(t+1)-A(t)$ resta uguale a $20$. Nel secondo, il rapporto $B(t+1)$ diviso $B(t)$ resta uguale a $1{,}20$. Le due proprietà consentono di scegliere un modello confrontando misure a intervalli di tempo uguali.
:::

:::osservazione{titolo="Ricavare il fattore per un periodo più breve"}
Un modello con fattore mensile costante passa da $100$ a $121$ in due mesi. Per trovare il fattore di un mese si risolve $q^2=\dfrac{121}{100}$ scegliendo la radice positiva, cioè $q=\dfrac{11}{10}$. L'aumento mensile è quindi del $10\%$. Per una variazione da $100$ a $81$ in due mesi la stessa procedura dà $q=\dfrac9{10}$, quindi si perde il $10\%$ ogni mese. In questo secondo caso, la perdita di $19$ unità si scompone in $10$ unità del primo mese e $9$ del secondo.
:::

:::esempio{titolo="Raffreddamento verso la temperatura ambiente"}
Una bevanda ha inizialmente temperatura $80\,\mathrm{^\circ C}$ e si trova in una stanza a $20\,\mathrm{^\circ C}$. Nel modello, ogni $5$ minuti si dimezza la differenza fra la temperatura della bevanda e quella ambiente. La differenza iniziale è $60\,\mathrm{^\circ C}$, quindi dopo $t$ minuti vale
$$
T(t)-20=60\left(\frac12\right)^{\frac t5}.
$$
Dopo $5$ minuti la differenza è $30$ e la temperatura è $50\,\mathrm{^\circ C}$. Dopo $10$ minuti la differenza è $15$ e la temperatura è $35\,\mathrm{^\circ C}$. Il rapporto fra le temperature complete in questi due istanti non è $\dfrac12$. Il dimezzamento si applica solo alla differenza dalla temperatura ambiente. Il valore di $T$ resta sopra $20\,\mathrm{^\circ C}$ e si avvicina a quella quota, che è l'asintoto del modello.

::grafico{f="20+60*0.5^(x/5)" xmin=-0.5 xmax=22 ymin=0 ymax=86 asintoti="y=20" nomi="t,T" punti="0,80;5,50,pieno,A;10,35,pieno,B" segmenti="5,20,5,50;10,20,10,35" legenda="20+60\left(\frac12\right)^{\frac{t}{5}}" titolo="Le distanze da $20$ nei punti $A$ e $B$ sono $30$ e $15$, una metà dell'altra"}

:::

:::esempio{titolo="Scegliere il modello dai rapporti"}
Una misura assume i valori $24$, $36$ e $54$ a intervalli di due ore. I due rapporti consecutivi sono uguali a $\dfrac32$, mentre le differenze sono $12$ e $18$. Un modello esponenziale con periodo di due ore che riproduce i dati è
$$
M(t)=24\left(\frac32\right)^{\frac t2}.
$$
Calcolare $M(1)$ significa usare metà periodo. Il fattore orario è $\sqrt{\dfrac32}$ e il modello prevede $M(1)=24\sqrt{\dfrac32}$. La retta che interpola i primi due dati darebbe invece $30$ a un'ora e resterebbe sotto il terzo dato. La lettura a intervalli uguali consente di riconoscere il fattore esponenziale. Il valore tra due misure è una previsione del modello e dipende dalla scelta di applicare la legge fra i tempi di misura.

::grafico{f="24*1.5^(x/2);24+6*x" xmin=-0.35 xmax=5.3 ymin=0 ymax=73 nomi="t,M" punti="0,24;2,36;4,54,pieno,P;4,48" legenda="24\left(\frac32\right)^{\frac{t}{2}};24+6t" titolo="A quattro ore il modello esponenziale riproduce il dato $54$, mentre la retta dà $48$"}

:::
