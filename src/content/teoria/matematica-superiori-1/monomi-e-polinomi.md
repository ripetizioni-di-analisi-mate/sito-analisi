---
titolo: "Monomi e polinomi"
sommario: "Forma ridotta, grado, operazioni con i polinomi e uso delle espressioni letterali per dimostrare identità e calcolare misure."
---

## Coefficiente e parte letterale

:::definizione{#monomi titolo="Il monomio"}
In algebra una lettera, come $x$ o $y$, indica un numero che non è ancora stato scelto. Un **prodotto** è il risultato di una moltiplicazione e i numeri che si moltiplicano si chiamano **fattori**. Una **potenza** è un prodotto di fattori uguali. La scrittura $x^2$ si legge «$x$ alla seconda» e significa $x\cdot x$. In $x^2$ la lettera $x$ è la **base** e il numero $2$ è l'**esponente**, cioè il numero dei fattori. Una lettera scritta senza esponente ha esponente uno, perché $y=y^1$.

Un **monomio** è il prodotto di un numero e di potenze di lettere. Il numero si chiama **coefficiente** ed è un numero reale, cioè un numero qualsiasi: intero, frazione o numero con la virgola, positivo, negativo o uguale a zero. Gli esponenti delle lettere sono interi non negativi, cioè $0,1,2,3,\dots$ Il prodotto delle potenze delle lettere si chiama **parte letterale**.

Nel monomio $-3x^2y$:

- il coefficiente è $-3$;
- la parte letterale è $x^2y$;
- l'esponente di $x$ è due e l'esponente di $y$ è uno.

Il segno di moltiplicazione fra il numero e le lettere è sottinteso, quindi $-3x^2y$ significa $(-3)\cdot x\cdot x\cdot y$. Sostituendo dei numeri alle lettere si ottiene il valore del monomio. Con $x=2$ e $y=5$ si ha $(-3)\cdot2\cdot2\cdot5=-60$. La parte letterale indica quali fattori si moltiplicano prima ancora di conoscere quei numeri.

Due monomi sono **simili** se hanno la stessa parte letterale, cioè se ogni lettera ha lo stesso esponente nei due monomi. L'ordine in cui le lettere sono scritte non conta, perché in una moltiplicazione l'ordine dei fattori si può scambiare. Per esempio $5yx^2$ e $-3x^2y$ sono simili, perché il prodotto $yx^2$ coincide con $x^2y$.

Nel monomio $x^2y$ compare due volte il fattore $x$, in $xy^2$ compare due volte il fattore $y$. In entrambi la somma degli esponenti, che si chiama grado complessivo, è $2+1=3$. Le parti letterali però sono diverse, quindi i due monomi non sono simili.
:::

:::esempio{titolo="Opposti e variazione del segno"}
L'**opposto** di un numero è il numero con il segno cambiato. L'opposto di $12$ è $-12$. Due monomi sono **opposti** se hanno la stessa parte letterale e coefficienti opposti, come $3x^2y$ e $-3x^2y$.

Fissando $y=1$, i due monomi diventano $3x^2$ e $-3x^2$. Per ogni valore di $x$ il secondo vale l'opposto del primo.

La figura riporta i due monomi su un piano con due assi. Sull'asse orizzontale si legge il valore di $x$, che si chiama **ascissa**. Sull'asse verticale si legge il valore del monomio, che si chiama **ordinata**. Ogni curva è formata dai punti che hanno per ascissa un valore di $x$ e per ordinata il valore corrispondente del monomio. I due punti segnati hanno ascissa $2$. Il punto della prima curva ha ordinata $3\cdot2^2=12$ e quello della seconda ha ordinata $-3\cdot2^2=-12$. Le due ordinate distano ugualmente dall'asse orizzontale e stanno da parti opposte dell'asse.

::grafico{f="3*x^2;-3*x^2" xmin=-2.4 xmax=2.4 ymin=-14 ymax=14 punti="2,12;2,-12" legenda="y=3x^2;y=-3x^2" titolo="I monomi opposti hanno ordinate opposte"}
:::

:::osservazione{titolo="Le costanti e il monomio nullo"}
Una **costante** è un numero scritto senza lettere, come $-7$. Una costante diversa da zero è un monomio. La sua parte letterale è $1$, perché $-7=-7\cdot1$. Il suo grado è zero, perché non ci sono lettere.

Se il coefficiente è zero, il monomio vale zero qualunque numero si assegni alle lettere, perché un prodotto con un fattore uguale a zero vale zero. Dunque $0x^4$, $0y^2$ e $0$ indicano lo stesso monomio, che si chiama **monomio nullo**. In questo capitolo al monomio nullo non si assegna un grado.

Il **quoziente** è il risultato di una divisione e si scrive come frazione. Il quoziente $\dfrac{x}{3}$ è il prodotto $\dfrac13\cdot x$, quindi è un monomio di coefficiente $\dfrac13$.

Nel quoziente $\dfrac{3}{x}$ la lettera è al denominatore, cioè sotto la linea di frazione. La divisione per zero non è definita, quindi l'espressione ha un valore soltanto per $x\ne0$ (il simbolo $\ne$ si legge «diverso da»). Scritta come prodotto, l'espressione diventa $3x^{-1}$, dove $x^{-1}$ indica $\dfrac1x$. L'esponente $-1$ è negativo, mentre gli esponenti di un monomio sono interi non negativi. Per questo $\dfrac3x$ non è un monomio.
:::

## Forma ridotta e grado

:::definizione{#grado titolo="Il polinomio e il suo grado"}
Un **polinomio** è una somma di un numero finito di monomi, che si chiamano i suoi **termini**. Per esempio $3x^2+2x-1$ è la somma dei tre termini $3x^2$, $2x$ e $-1$. Un polinomio con due termini, come $x+3$, si chiama **binomio**. Uno con tre termini si chiama **trinomio**.

Un polinomio è in **forma ridotta** quando contiene un solo termine per ogni parte letterale. La forma ridotta si ottiene sommando i coefficienti dei monomi simili e omettendo i termini di coefficiente zero. In $5x+2x^2-3x$ i termini $5x$ e $-3x$ sono simili e $5-3=2$, quindi la forma ridotta è $2x^2+2x$.

Il **termine noto** è il termine senza lettere, cioè quello con parte letterale $1$. In $3x^2+2x-1$ il termine noto è $-1$. Quando il termine senza lettere è assente, come in $2x^2+2x$, il termine noto vale zero.

Il **grado complessivo** di un monomio non nullo è la somma degli esponenti delle sue lettere. Il suo **grado rispetto a una lettera** è l'esponente di quella lettera, ed è zero se la lettera è assente. Il monomio $x^2y$ ha grado complessivo $2+1=3$, grado due rispetto a $x$ e grado uno rispetto a $y$.

Per un polinomio non nullo i gradi si leggono sui termini rimasti dopo la riduzione. Il grado complessivo del polinomio è il più grande fra i gradi complessivi dei suoi termini. Il grado rispetto a una lettera è il più grande fra gli esponenti di quella lettera. Se tutti i coefficienti della forma ridotta sono zero, il polinomio è il **polinomio nullo** e, come per il monomio nullo, non gli si assegna un grado.

In un polinomio nella sola lettera $x$ i termini prendono il nome dal loro grado. Il termine con $x$ è il termine **lineare** (primo grado), quello con $x^2$ è il termine **quadratico** (secondo grado) e quello con $x^3$ è il termine **cubico** (terzo grado).

In alcuni polinomi compare, oltre a $x$, un **parametro**, cioè una lettera come $k$ che indica un numero fissato ma non ancora scelto. Discutere il grado «al variare di $k$» significa trovare il grado per ogni valore di $k$. Per esempio $(k-1)x^2+3x$ ha grado due per $k\ne1$ e grado uno per $k=1$, perché per $k=1$ il coefficiente $k-1$ vale zero.
:::

:::esempio{titolo="Massimi per le singole lettere"}
La scrittura $P(x,y)$ si legge «$P$ di $x$ e $y$» ed è il nome di un polinomio nelle lettere $x$ e $y$. Si consideri

$$
\begin{aligned}
P(x,y)&=2x^2y+5x^4-x^2y-5x^4+4\\[6pt]
      &=x^2y+4.
\end{aligned}
$$

Nel passaggio si sommano i monomi simili. Si ha $2x^2y-x^2y=(2-1)x^2y=x^2y$ e $5x^4-5x^4=0$. Il termine in $x^4$ ha coefficiente zero nella forma ridotta, quindi il suo esponente $4$ non entra nel calcolo dei gradi.

Il grado complessivo è tre, dato dagli esponenti $2$ e $1$ di $x^2y$. Il grado rispetto a $x$ è due e quello rispetto a $y$ è uno. In questo esempio la somma $2+1$ dei gradi rispetto alle singole lettere coincide con il grado complessivo, perché i due esponenti più grandi si trovano nello stesso monomio.

Nel polinomio $x^3+y^4$ gli esponenti più grandi, tre per $x$ e quattro per $y$, si trovano in termini diversi. Il primo termine ha grado complessivo tre e il secondo ha grado complessivo quattro. Il grado complessivo del polinomio è quindi quattro, mentre la somma dei gradi rispetto alle due lettere è $3+4=7$.
:::

:::esempio{titolo="Cancellazione del termine dominante"}
La scrittura $P(x)$ si legge «$P$ di $x$» ed è il nome di un polinomio nella lettera $x$. La scrittura $P(1)$ indica il valore che si ottiene sostituendo $1$ a $x$. In un polinomio in una sola lettera il **termine dominante** è il termine di grado più alto.

Siano $P(x)=4x^3-2x+1$ e $Q(x)=-4x^3+x+6$. I termini dominanti sono $4x^3$ e $-4x^3$, che sono opposti. La somma si calcola un grado alla volta:

- il coefficiente di $x^3$ è $4-4=0$;
- il coefficiente di $x$ è $-2+1=-1$;
- il termine noto è $1+6=7$.

Si ottiene $P(x)+Q(x)=-x+7$, di grado uno, mentre i due polinomi di partenza hanno grado tre.

Nel grafico si leggono le tre ordinate in corrispondenza di $x=1$. Si ha $P(1)=4-2+1=3$ e $Q(1)=-4+1+6=3$, mentre la somma vale $-1+7=6$. Il grafico di un polinomio di primo grado è una retta. La somma è rappresentata da una retta perché i termini cubici si cancellano per ogni valore di $x$.

::grafico{f="4*x^3-2*x+1;-4*x^3+x+6;7-x" xmin=-1.45 xmax=1.45 ymin=-8 ymax=16 punti="1,3;1,6" legenda="P(x);Q(x);P(x)+Q(x)" titolo="La somma delle due cubiche è una retta"}
:::

:::osservazione{titolo="Quando la somma mantiene il grado maggiore"}
Si considerano due polinomi non nulli in una sola lettera, che si chiama anche **variabile**. Se la loro somma è non nulla, il grado della somma è minore o uguale al più grande dei due gradi. Infatti nella somma compaiono soltanto potenze già presenti nei due polinomi.

Se i due gradi sono diversi, il grado della somma è uguale al più grande dei due. Il termine dominante del polinomio di grado maggiore non ha un termine simile nell'altro polinomio, quindi il suo coefficiente resta invariato nella somma. Per esempio $(4x^3-2x+1)+(x^2+5)=4x^3+x^2-2x+6$ ha grado tre.
:::

## Somme, differenze e opposti

::::teorema{#somme titolo="Somma di monomi simili"}
Due monomi simili si sommano sommando i coefficienti e lasciando invariata la parte letterale. Per esempio $4x^2y+3x^2y=(4+3)x^2y=7x^2y$.

Se $L$ è una parte letterale e $a,b$ sono due coefficienti, la somma di $aL$ e $bL$ vale $(a+b)L$. In una somma di polinomi questa regola riunisce in un unico termine tutti i monomi con la stessa parte letterale.

:::dimostrazione
Gli **addendi** sono i numeri che si sommano. Per la **proprietà distributiva**, moltiplicare una somma per un numero equivale a moltiplicare ogni addendo per quel numero e poi sommare i risultati. Per esempio $(4+3)\cdot5=4\cdot5+3\cdot5=35$.

Applicata alla somma $a+b$ e al fattore $L$, la proprietà distributiva dà $(a+b)L=aL+bL$. Leggendo l'uguaglianza da destra a sinistra, da $aL+bL$ si passa a $(a+b)L$. Questa operazione si chiama **raccogliere** il fattore comune $L$, cioè il fattore presente in entrambi i termini. Per esempio $4x^2y-7x^2y=(4-7)x^2y=-3x^2y$.

Con parti letterali diverse, come in $4x^2y-7xy^2$, i coefficienti $4$ e $-7$ moltiplicano fattori diversi. I due coefficienti quindi non si sommano e l'espressione è già ridotta.
:::
::::

:::esempio{titolo="Sottrarre un polinomio intero"}
Sottrarre un polinomio equivale a sommare il suo opposto. L'opposto di un polinomio si ottiene moltiplicando tutti i suoi termini per $-1$, cioè cambiando il segno di ogni termine. L'opposto di $Q(x)=x^2-4x+5$ è $-x^2+4x-5$. Il termine $-4x$ diventa quindi $+4x$.

$$
\begin{aligned}
(3x^2+2x-1)-(x^2-4x+5)
&=3x^2+2x-1-x^2+4x-5\\[6pt]
&=(3-1)x^2+(2+4)x+(-1-5)\\[6pt]
&=2x^2+6x-6.
\end{aligned}
$$

La tabella riporta i coefficienti uno alla volta e nella terza riga c'è la somma delle prime due. Per esempio il termine noto vale $-1-5=-6$.

| Polinomio | Coefficiente di $x^2$ | Coefficiente di $x$ | Termine noto |
| --- | --- | --- | --- |
| $3x^2+2x-1$ | $3$ | $2$ | $-1$ |
| $-(x^2-4x+5)$ | $-1$ | $4$ | $-5$ |
| Differenza | $2$ | $6$ | $-6$ |

Per controllare l'intero calcolo si somma $Q$ alla differenza e si ritrovano i coefficienti $2+1=3$, $6-4=2$ e $-6+5=-1$ di $3x^2+2x-1$.
:::

:::esempio{titolo="Una differenza dentro un'altra differenza"}
Si consideri $P-(Q-R)$, dove $P=x^2+2x-3$, $Q=3x^2-x+1$ e $R=2x^2-x-4$. Per sottrarre $Q-R$ si somma il suo opposto, cioè si moltiplica per $-1$ l'intera differenza, sia $Q$ sia $-R$. Si ottiene $-Q+R$, quindi

$$
\begin{aligned}
P-(Q-R)&=P-Q+R\\[6pt]
&=(1-3+2)x^2+(2+1-1)x+(-3-1-4)\\[6pt]
&=2x-8.
\end{aligned}
$$

Il termine $-R$ che si trova all'interno della differenza diventa $+R$ quando si prende l'opposto. I termini quadratici si cancellano, perché $1-3+2=0$, e il grado scende a uno. Il termine noto si controlla con un calcolo a parte, sostituendo zero a ogni $x$. Di $P$, $Q$ e $R$ restano i termini noti $-3$, $1$ e $-4$. Si ricava $-3-(1-(-4))=-3-5=-8$.
:::

## Prodotti e proprietà distributiva

::::teorema{#prodotti titolo="Prodotti di monomi e polinomi"}
I prodotti si calcolano con tre regole.

- **Monomio per monomio.** Si moltiplicano i coefficienti e, per ogni lettera, si sommano gli esponenti dei fattori.
- **Monomio per polinomio.** Il monomio moltiplica ogni termine della somma. Per esempio $2x(x+3)=2x\cdot x+2x\cdot3=2x^2+6x$.
- **Polinomio per polinomio.** Ciascun termine del primo fattore moltiplica ciascun termine del secondo.

Eseguire un prodotto e scrivere il risultato come somma di monomi si chiama **sviluppare** il prodotto.

:::dimostrazione
Per due monomi si raggruppano i fattori numerici e le potenze della stessa lettera. Il risultato non cambia, perché in un prodotto l'ordine dei fattori si può scambiare. Per esempio

$$
(3x^2y)(-2xy^3)=(3\cdot(-2))(x^2\cdot x)(y\cdot y^3)=-6x^3y^4.
$$

Il prodotto $x^2\cdot x$ è $(x\cdot x)\cdot x$ e contiene tre fattori $x$, quindi vale $x^3$. È per questo che gli esponenti si sommano.

Per due binomi si applica la proprietà distributiva una prima volta ai termini del primo fattore, poi una volta a ciascun prodotto ottenuto. Con quattro simboli $A,B,C,D$, che indicano quattro monomi qualsiasi, il calcolo è

$$
\begin{aligned}
(A+B)(C+D)&=A(C+D)+B(C+D)\\[6pt]
          &=AC+AD+BC+BD.
\end{aligned}
$$

Nella prima riga la somma $C+D$ è trattata come un unico fattore.
:::
::::

:::esempio{titolo="Una suddivisione in quattro aree"}
L'area di un rettangolo è il prodotto delle misure di due lati consecutivi. Per $x>0$ (il simbolo $>$ si legge «maggiore di») si considera un rettangolo di lati $x+3$ e $x+2$. Il lato orizzontale è diviso nei tratti $x$ e $3$, quello verticale nei tratti $x$ e $2$. Il rettangolo risulta così diviso nelle quattro regioni indicate in figura, che hanno aree:

- $x\cdot x=x^2$;
- $3\cdot x=3x$;
- $x\cdot2=2x$;
- $3\cdot2=6$.

Il numero $6$ è il prodotto delle due misure costanti. Le due aree di primo grado, $3x$ e $2x$, si sommano in $5x$ perché sono monomi simili.

::struttura{poligoni="0,0 2,0 2,2 0,2;2,0 5,0 5,2 2,2;0,2 2,2 2,4 0,4;2,2 5,2 5,4 2,4" riferimento=0 etichette="1,-0.4,x;3.5,-0.4,3;-0.38,1,x;-0.38,3,2;1,1,x^2;3.5,1,3x;1,3,2x;3.5,3,6" titolo="Le quattro regioni corrispondono ai quattro prodotti"}
$$
(x+3)(x+2)=x^2+3x+2x+6=x^2+5x+6.
$$

La figura richiede lati positivi. L'uguaglianza fra le due espressioni è ottenuta con la proprietà distributiva, senza usare la figura, e vale per ogni numero reale $x$.
:::

::::teorema{titolo="Grado di un prodotto in una variabile"}
Il grado del prodotto di due polinomi non nulli in una variabile è la somma dei gradi dei due fattori. Un polinomio di grado due moltiplicato per un polinomio di grado uno dà un polinomio di grado $2+1=3$. Con le lettere, se i due polinomi hanno gradi $m$ e $n$, il prodotto ha grado $m+n$.

:::dimostrazione
Nel prodotto ogni termine del primo polinomio moltiplica ogni termine del secondo, e gli esponenti si sommano. Per ottenere l'esponente $m+n$ occorre scegliere in ciascun fattore il termine di esponente massimo, cioè il termine dominante. Se uno dei due esponenti è minore, anche la somma è minore di $m+n$. Nessun altro prodotto è quindi simile al prodotto dei due termini dominanti.

I coefficienti dei due termini dominanti sono non nulli, quindi il loro prodotto è non nullo. Il termine di grado $m+n$ rimane perciò nella forma ridotta. Per esempio in $(2x^2-1)(-3x+4)$ i termini dominanti sono $2x^2$ e $-3x$. Il coefficiente di $x^3$ è $2\cdot(-3)=-6$, quindi il prodotto ha grado tre.
:::
::::

## Divisione e valori esclusi

::::teorema{#quozienti titolo="Semplificare un quoziente di monomi"}
Il quoziente di due monomi si scrive come frazione, con il primo monomio al numeratore (sopra la linea di frazione) e il secondo al denominatore (sotto). Per semplificarlo si dividono i coefficienti e, per ogni lettera presente sia sopra sia sotto, si sottrae l'esponente del denominatore dall'esponente del numeratore. Per esempio, per $x\ne0$,

$$
\frac{10x^5}{2x^2}=\frac{10}{2}\cdot x^{5-2}=5x^3.
$$

Il quoziente ha un valore soltanto se il denominatore è diverso da zero. Le richieste sono due e si chiamano **condizioni di esistenza** del quoziente:

- il coefficiente del denominatore è non nullo;
- ogni lettera del denominatore con esponente positivo assume un valore diverso da zero.

Se nel risultato un esponente è negativo, resta un fattore letterale al denominatore. Per esempio, per $x\ne0$, in $\dfrac{x^2}{x^5}$ la sottrazione dà $2-5=-3$ e il risultato è $\dfrac1{x^3}$.

:::dimostrazione
Si separano i coefficienti dai fattori letterali. Ogni lettera diversa da zero si semplifica come in una frazione numerica, cioè dividendo numeratore e denominatore per lo stesso fattore. Per $x\ne0$ si ha

$$
\frac{x^5}{x^2}=\frac{x\cdot x\cdot x\cdot x\cdot x}{x\cdot x}=x\cdot x\cdot x=x^3.
$$

I due fattori $x$ del denominatore si semplificano con due dei cinque fattori del numeratore, e ne restano $5-2=3$.

Con due esponenti qualsiasi $a$ e $b$ il ragionamento è lo stesso. Sia $x\ne0$ e sia $a\ge b$, cioè $a$ maggiore o uguale a $b$. Vale l'uguaglianza $x^a=x^b x^{a-b}$, perché in un prodotto gli esponenti si sommano e $b+(a-b)=a$. Dividendo per $x^b$ le espressioni ai due lati del segno $=$ si ottiene $\dfrac{x^a}{x^b}=x^{a-b}$. Se $a<b$, si scrive $x^b=x^a x^{b-a}$. La semplificazione del fattore $x^a$ lascia $\dfrac{x^a}{x^b}=\dfrac1{x^{b-a}}$.
:::
::::

:::esempio{titolo="Il valore escluso dopo la cancellazione"}
Il quoziente $\dfrac{12x^2}{3x}$ ha la lettera $x$ al denominatore, quindi la condizione di esistenza è $x\ne0$. Semplificando per $x\ne0$ si ottiene

$$
\frac{12x^2}{3x}=\frac{12}{3}\cdot\frac{x^2}{x}=4x.
$$

L'espressione $4x$ vale zero per $x=0$. Il quoziente iniziale ha invece denominatore $3\cdot0=0$ per $x=0$ e quindi non ha un valore. Il grafico del quoziente è la retta $y=4x$ privata dell'origine, cioè del punto in cui i due assi si incontrano. In figura l'origine è disegnata come punto vuoto e il punto pieno ha ascissa $1$ e ordinata $4$. La semplificazione consente di calcolare i valori del quoziente per ogni $x$ ammesso e conserva la condizione $x\ne0$.

::grafico{f="4*x" xmin=-2.2 xmax=2.2 ymin=-8 ymax=8 punti="0,0,vuoto;1,4" legenda="y=4x,\ x\ne0" titolo="La semplificazione lascia esclusa l'origine"}
:::

:::osservazione{titolo="Le condizioni dipendono dal denominatore"}
Nella frazione $\dfrac{18x^2y^3}{6y^2}$ al denominatore compare soltanto $y$, quindi si richiede soltanto $y\ne0$. Anche $x=0$ è ammesso, perché $x$ compare solo al numeratore. Il quoziente vale $\dfrac{18}{6}\,x^2y^{3-2}=3x^2y$ e si annulla per $x=0$.

Nel quoziente $\dfrac{18x^2y}{6y^2}$, invece, l'esponente di $y$ diventa $1-2=-1$, quindi un fattore $y$ resta al denominatore. Si ottiene $\dfrac{3x^2}{y}$, con la stessa condizione $y\ne0$.

In entrambi i casi il risultato si controlla moltiplicandolo per il denominatore iniziale. Sui valori ammessi il prodotto ricostruisce il numeratore. Nel primo caso, per esempio, $3x^2y\cdot6y^2=18x^2y^3$.

La condizione su $y$ si stabilisce prima di semplificare. La semplificazione divide infatti numeratore e denominatore per una potenza di $y$, e la divisione è definita soltanto per un numero diverso da zero.
:::

## Potenze e segno

:::teorema{#potenze-di-monomi titolo="Potenza di un monomio"}
La potenza di un monomio è il prodotto di più fattori uguali a quel monomio. Per esempio

$$
(2x^3y)^2=(2x^3y)(2x^3y)=(2\cdot2)(x^3\cdot x^3)(y\cdot y)=4x^6y^2.
$$

Il coefficiente $2$ è elevato alla seconda e ogni esponente è moltiplicato per due.

Con le lettere la regola è la seguente. Sia $k$ un intero positivo e sia $ax^my^n$ un monomio di coefficiente $a$, con esponenti $m$ e $n$. In $(ax^my^n)^k$:

- il coefficiente diventa $a^k$;
- l'esponente di $x$ diventa $mk$, perché nel prodotto di $k$ fattori uguali si sommano $k$ copie di $m$;
- allo stesso modo l'esponente di $y$ diventa $nk$.

Un coefficiente negativo elevato a un esponente pari dà un numero positivo. Elevato a un esponente dispari dà un numero negativo. Nel quadrato di $-2x$ il coefficiente è $(-2)\cdot(-2)=4$ e l'esponente di $x$ è due, quindi $(-2x)^2=4x^2$. Nel cubo il coefficiente è $(-2)\cdot(-2)\cdot(-2)=-8$ e l'esponente è tre, quindi $(-2x)^3=-8x^3$.

Se il coefficiente è una frazione, si elevano alla potenza sia il numeratore sia il denominatore. Per esempio $\left(-\dfrac23x\right)^3=-\dfrac{8}{27}x^3$, perché $2^3=8$ e $3^3=27$.

Il grafico riporta $4x^2$ e $-8x^3$. Per $x=1$ le ordinate sono $4$ e $-8$. Per $x=-1$ il cubo vale $-8\cdot(-1)^3=-8\cdot(-1)=8$, perché anche il fattore $x^3$ è negativo.

::grafico{f="4*x^2;-8*x^3" xmin=-1.3 xmax=1.3 ymin=-14 ymax=14 punti="1,4;1,-8;-1,8" legenda="y=(-2x)^2;y=(-2x)^3" titolo="Quadrato e cubo dello stesso monomio"}
:::

## Valori numerici

:::esempio{#valore titolo="Sostituire un valore in ogni termine"}
Il **valore** di un polinomio per un numero assegnato si calcola sostituendo quel numero alla lettera in ogni termine. Il valore di un singolo termine si chiama anche **contributo** di quel termine. Per $P(x)=2x^2-3x+4$ si calcolano separatamente il termine quadratico $2x^2$, il termine lineare $-3x$ e il termine noto $4$.

Quando $x=-2$:

- il contributo quadratico è $2\cdot(-2)^2=2\cdot4=8$;
- il contributo lineare è $(-3)\cdot(-2)=6$;
- il termine noto è $4$.

Il valore finale è

$$
P(-2)=2(-2)^2-3(-2)+4=8+6+4=18.
$$

Per $x=2$ il contributo quadratico resta $8$, perché $2^2=(-2)^2=4$. Il contributo lineare vale $(-3)\cdot2=-6$. Quindi $P(2)=8-6+4=6$.

I due valori $18$ e $6$ differiscono di $12$. La differenza dipende soltanto dal termine lineare, mentre gli altri due termini hanno lo stesso valore. Nel grafico i punti $A$ e $B$ hanno ascisse $-2$ e $2$, alla stessa distanza dall'origine, e ordinate $18$ e $6$.

::grafico{f="2*x^2-3*x+4" xmin=-2.8 xmax=3 ymin=-1 ymax=22 punti="-2,18,pieno,A;2,6,pieno,B;0,4" legenda="y=P(x)" titolo="Lo stesso polinomio nei punti di ascissa $-2$ e $2$"}
:::

:::osservazione{titolo="Il valore in zero legge il termine noto"}
In una variabile il valore $P(0)$ è il termine noto. Ogni termine di grado positivo contiene infatti un fattore $x$ e vale zero per $x=0$.

Se il polinomio è scritto come prodotto, la stessa sostituzione dà il termine noto senza sviluppare l'intero prodotto. Per esempio $Q(x)=(x-3)(x+5)+2$ dà $Q(0)=(-3)\cdot5+2=-15+2=-13$.

Con più lettere ogni valore si sostituisce alla lettera corrispondente. Nella scrittura $R(-1,2)$ il primo numero è il valore di $x$ e il secondo è il valore di $y$, nell'ordine in cui le lettere compaiono in $R(x,y)$. Per $R(x,y)=3x^2y-2xy^2$, usando $x=-1$ e $y=2$, i due contributi sono

$$
3x^2y=3\cdot(-1)^2\cdot2=6,\qquad -2xy^2=-2\cdot(-1)\cdot2^2=8.
$$

Quindi $R(-1,2)=6+8=14$. Scambiando i due valori si ottiene un altro calcolo, $R(2,-1)=3\cdot4\cdot(-1)-2\cdot2\cdot1=-12-4=-16$.
:::

:::osservazione{titolo="Il valore in uno somma i coefficienti"}
In una variabile, per $x=1$ tutte le potenze valgono uno, perché un prodotto di fattori uguali a uno vale uno. Ogni termine vale allora quanto il suo coefficiente. Il valore $P(1)$ è quindi la somma dei coefficienti della forma ridotta.

Per $P(x)=x(x-2)(x+4)$ la sostituzione nel prodotto dà $1\cdot(1-2)\cdot(1+4)=1\cdot(-1)\cdot5=-5$. Lo sviluppo è $x(x^2+2x-8)=x^3+2x^2-8x$ e la somma dei suoi coefficienti è $1+2-8=-5$, in accordo con il valore trovato.
:::

## Modelli di area e perimetro

Un modello è un'espressione con le lettere che dà una misura, per esempio un'area, per ogni valore di $x$.

:::esempio{#modelli titolo="Misure per somma di regioni"}
Il **perimetro** di un rettangolo è la somma delle lunghezze dei quattro lati. L'**area** è il prodotto della base per l'altezza.

Un rettangolo ha base $3x+2$ e altezza $x$, con $x>0$. Dividendo la base nei tratti $3x$ e $2$ si ottengono due regioni con la stessa altezza $x$. Le aree parziali sono $3x\cdot x=3x^2$ e $2\cdot x=2x$. La figura è disegnata con $x=2$. La base misura allora $8$ e le due regioni hanno aree $3\cdot2^2=12$ e $2\cdot2=4$.

::struttura{poligoni="0,0 6,0 6,2 0,2;6,0 8,0 8,2 6,2" riferimento=0 etichette="3,-0.4,3x;7,-0.4,2;-0.45,1,x" titolo="Due regioni di uguale altezza nel rettangolo"}

$$
\begin{aligned}
A&=x(3x+2)=3x^2+2x,\\[6pt]
P&=2((3x+2)+x)=8x+4.
\end{aligned}
$$

Nel perimetro $P$ la base e l'altezza compaiono due volte ciascuna, perché i lati opposti di un rettangolo sono uguali. La loro somma è $(3x+2)+x=4x+2$ e $2(4x+2)=8x+4$.

Il perimetro si calcola sui quattro lati esterni. La linea che divide le due regioni serve per calcolare l'area e non fa parte del perimetro. Se le lunghezze sono espresse in centimetri, il perimetro è in centimetri e l'area è in centimetri quadrati, perché è il prodotto di due lunghezze.
:::

:::esempio{titolo="Una differenza di aree con altezza comune"}
Due cartoncini rettangolari hanno la stessa altezza $2x$ e basi $x+4$ e $x+1$, con $x>0$. Si sovrappongono i due rettangoli allineandoli sul lato sinistro. Del rettangolo più largo rimane scoperta una striscia di base $(x+4)-(x+1)=x+4-x-1=3$ e altezza $2x$. L'area in più è quindi $3\cdot2x=6x$.

Lo stesso risultato si ottiene sviluppando le due aree e sottraendo la seconda dalla prima:

$$
\begin{aligned}
2x(x+4)&=2x^2+8x,\\[6pt]
2x(x+1)&=2x^2+2x,\\[6pt]
(2x^2+8x)-(2x^2+2x)&=6x.
\end{aligned}
$$

I termini quadratici si eliminano perché descrivono regioni uguali. Il termine $2x^2$ è l'area della regione di base $x$ e altezza $2x$, che è presente in entrambi i cartoncini.

::struttura{linee="0,0 6,0 6,4 0,4 0,0;0,0 3,0 3,4 0,4 0,0" poligoni="3,0 6,0 6,4 3,4" riferimento=0 etichette="1.5,-0.45,x+1;4.5,-0.45,3;-0.55,2,2x" titolo="La differenza di area è la striscia di base $3$"}
:::

:::osservazione{titolo="L'effetto di un fattore di scala"}
Un **fattore di scala** è un numero $k>0$ per il quale si moltiplicano tutte le lunghezze di una figura. Se la base $b$ e l'altezza $h$ di un rettangolo sono entrambe moltiplicate per $k$, le misure cambiano così:

- il perimetro $P=2(b+h)$ diventa $2(kb+kh)=k\cdot2(b+h)=kP$, perché ogni lato nella somma riceve il fattore $k$;
- l'area $A=bh$ diventa $(kb)(kh)=k^2bh=k^2A$, perché i due fattori del prodotto ricevono entrambi $k$.

Per esempio, raddoppiando i lati di un rettangolo di area $12$, la nuova area è $2^2\cdot12=4\cdot12=48$.
:::

## Identità e controesempi

:::definizione{#identita titolo="Identità polinomiali"}
In un'uguaglianza l'espressione a sinistra del segno $=$ si chiama **primo membro** e quella a destra si chiama **secondo membro**. Il **dominio** è l'insieme dei valori ammessi per le lettere. Per i polinomi il dominio è formato da tutti i numeri reali.

Un'uguaglianza è un'**identità** se è vera per ogni valore delle lettere nel dominio considerato. Per esempio $2(x+3)=2x+6$ è un'identità.

Un'identità fra polinomi si dimostra portando entrambe le espressioni alla stessa forma ridotta. Nell'esempio, sviluppando il primo membro si ottiene $2\cdot x+2\cdot3=2x+6$, che è il secondo membro.

Per stabilire che un'uguaglianza non è un'identità basta un solo valore ammesso per il quale i due membri sono diversi. Quel valore è un **controesempio**. L'uguaglianza $2(x+3)=2x+3$ non è un'identità, perché per $x=0$ il primo membro vale $6$ e il secondo vale $3$.
:::

:::attenzione
Le espressioni $x^2$ e $x$ hanno lo stesso valore per $x=0$ e per $x=1$. Per $x=2$ valgono rispettivamente $4$ e $2$. Il valore $x=2$ è un controesempio, quindi $x^2=x$ non è un'identità. La coincidenza in due punti, da sola, è insufficiente per concludere il contrario.

Nel grafico le due curve si incontrano nei punti di ascissa $0$ e $1$ e hanno ordinate diverse per l'ascissa $2$.

::grafico{f="x^2;x" xmin=-0.7 xmax=2.45 ymin=-1 ymax=5 punti="0,0;1,1;2,2;2,4" legenda="y=x^2;y=x" titolo="Due intersezioni e un controesempio a $x=2$"}
:::

:::osservazione{titolo="Due sostituzioni per espressioni lineari"}
Un'espressione **lineare** in $x$ ha la forma $ax+b$, dove $a$ e $b$ sono due numeri. Il suo grado è al più uno, cioè uno oppure zero. Per stabilire se $ax+b$ e $cx+d$ coincidono per ogni $x$ bastano le sostituzioni $x=0$ e $x=1$.

- Per $x=0$ le due espressioni valgono $b$ e $d$. La prima sostituzione impone quindi $b=d$.
- Per $x=1$ le due espressioni valgono $a+b$ e $c+d$. La seconda sostituzione impone $a+b=c+d$ e, poiché i termini noti sono uguali, si ottiene $a=c$.

Con entrambi i coefficienti uguali le due espressioni coincidono per ogni $x$.

Il grado al più uno è l'ipotesi che consente questo ragionamento, perché in quel caso i coefficienti da confrontare sono soltanto due. Per espressioni di secondo grado, come $x^2$ e $x$, le stesse due sostituzioni non bastano.
:::

:::esempio{titolo="Un coefficiente che rende vera un'identità"}
Si cerca un numero $c$ per il quale $c(x+1)+2(x-1)=5x+1$ sia vera per ogni numero reale $x$. Si sviluppa il primo membro:

$$
\begin{aligned}
c(x+1)+2(x-1)&=cx+c+2x-2\\[6pt]
&=(c+2)x+(c-2).
\end{aligned}
$$

Per $x=0$ l'uguaglianza diventa $c-2=1$, quindi $c=3$. Con quel valore il coefficiente di $x$ è $c+2=5$. Il primo membro è allora $5x+1$, uguale al secondo membro, e l'identità è verificata per ogni $x$.

Se a destra si scrive $5x+4$, la condizione sul termine noto è $c-2=4$ e impone $c=6$. In quel caso il coefficiente del termine lineare è $6+2=8$ e il primo membro è $8x+4$. Per $x=1$ il primo membro vale $12$ e il secondo vale $5+4=9$. Non esiste dunque un valore di $c$ che renda vera questa seconda uguaglianza per ogni $x$.
:::
