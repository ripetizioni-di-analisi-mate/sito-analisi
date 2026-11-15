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
