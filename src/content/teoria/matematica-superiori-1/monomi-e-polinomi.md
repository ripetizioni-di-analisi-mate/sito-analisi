---
titolo: "Monomi e polinomi"
sommario: "Forma ridotta, grado, operazioni con i polinomi e uso delle espressioni letterali per dimostrare identità e calcolare misure."
---

## Coefficiente e parte letterale

:::definizione{#monomi titolo="Il monomio"}
Un **monomio** è il prodotto di un coefficiente reale e di potenze di lettere a esponenti interi non negativi. In $-3x^2y$ il coefficiente è $-3$, la parte letterale è $x^2y$ e l'esponente di $y$ è uno. Le lettere indicano i valori che si possono sostituire nel prodotto. La parte letterale, invece, indica quali fattori si moltiplicano prima di conoscere quei valori.

Due monomi sono **simili** se, dopo aver ordinato le lettere, hanno gli stessi esponenti per ciascuna lettera. Per esempio $5yx^2$ e $-3x^2y$ sono simili perché il prodotto $yx^2$ coincide con $x^2y$. I monomi $x^2y$ e $xy^2$ hanno lo stesso grado complessivo. In uno compare due volte il fattore $x$ e nell'altro due volte il fattore $y$, quindi le parti letterali sono diverse.
:::

:::esempio{titolo="Opposti e variazione del segno"}
Fissando $y=1$, i monomi $3x^2y$ e $-3x^2y$ diventano $3x^2$ e $-3x^2$. Per ogni $x$ il secondo valore è l'opposto del primo. A $x=2$ il punto della prima curva ha ordinata $12$ e quello della seconda ha ordinata $-12$. Le due ordinate distano ugualmente dall'asse orizzontale e stanno da parti opposte dell'asse.

::grafico{f="3*x^2;-3*x^2" xmin=-2.4 xmax=2.4 ymin=-14 ymax=14 punti="2,12;2,-12" legenda="y=3x^2;y=-3x^2" titolo="I monomi opposti hanno ordinate opposte"}
:::

:::osservazione{titolo="Le costanti e il monomio nullo"}
Una costante non nulla ha parte letterale $1$ e grado zero. Per esempio $-7$ assume lo stesso valore per ogni assegnazione delle lettere. Se il coefficiente si annulla, il prodotto vale zero per qualunque assegnazione. Dunque $0x^4$, $0y^2$ e $0$ indicano lo stesso monomio nullo. Qui il grado del monomio nullo resta indeterminato.

Il quoziente $\dfrac{x}{3}$ è un monomio di coefficiente $\dfrac13$. Nel quoziente $\dfrac{3}{x}$ la lettera è al denominatore, quindi l'espressione richiede $x\ne0$ e ha un esponente negativo nella forma $3x^{-1}$.
:::

## Forma ridotta e grado

:::definizione{#grado titolo="Il polinomio e il suo grado"}
Un **polinomio** è una somma finita di monomi. La **forma ridotta** contiene un solo termine per ogni parte letterale. Si ottiene sommando i coefficienti dei monomi simili e omettendo i termini di coefficiente zero. Il termine con parte letterale $1$ si chiama termine noto. Quando tale termine è assente, il suo coefficiente è zero.

Il grado complessivo di un monomio non nullo è la somma degli esponenti delle sue lettere. Il suo grado rispetto a una lettera è l'esponente di quella lettera, pari a zero se la lettera è assente. Per un polinomio non nullo si prendono i massimi corrispondenti fra i termini rimasti dopo la riduzione.
:::

:::esempio{titolo="Massimi per le singole lettere"}
Si consideri

$$
\begin{aligned}
P(x,y)&=2x^2y+5x^4-x^2y-5x^4+4\\[6pt]
      &=x^2y+4.
\end{aligned}
$$

Il grado complessivo è tre, dato dagli esponenti $2$ e $1$ di $x^2y$. Il grado rispetto a $x$ è due e quello rispetto a $y$ è uno. In questo esempio la somma dei gradi rispetto alle singole lettere coincide con il grado complessivo, perché i due massimi si trovano nello stesso monomio. Per $x^3+y^4$ i massimi tre e quattro si trovano in termini diversi. Il grado complessivo è quindi quattro.
:::

:::esempio{titolo="Cancellazione del termine dominante"}
Siano $P(x)=4x^3-2x+1$ e $Q(x)=-4x^3+x+6$. Il coefficiente di $x^3$ nella somma è $4-4=0$. Il coefficiente di $x$ è $-2+1=-1$ e il termine noto è $1+6=7$. Si ottiene $P(x)+Q(x)=-x+7$, di grado uno.

Nel grafico si leggono le tre ordinate in corrispondenza di $x=1$. Sono $3$, $3$ e $6$. Il fatto che la somma sia rappresentata da una retta dipende dalla cancellazione dei termini cubici per ogni $x$.

::grafico{f="4*x^3-2*x+1;-4*x^3+x+6;7-x" xmin=-1.45 xmax=1.45 ymin=-8 ymax=16 punti="1,3;1,6" legenda="P(x);Q(x);P(x)+Q(x)" titolo="La somma delle due cubiche è una retta"}
:::

:::osservazione{titolo="Quando la somma mantiene il grado maggiore"}
Per due polinomi non nulli in una variabile, il grado della somma, se la somma è non nulla, è al più il massimo dei due gradi. Infatti nessuna potenza nuova compare in una somma. Se i gradi differiscono, il termine dominante del polinomio di grado maggiore non ha un termine simile nell'altro polinomio. Il suo coefficiente resta invariato e il massimo è raggiunto.
:::

## Somme, differenze e opposti

::::teorema{#somme titolo="Somma di monomi simili"}
Se $L$ è una parte letterale e $a,b$ sono due coefficienti, la somma di $aL$ e $bL$ vale $(a+b)L$. Questa regola consente di raccogliere, in una somma di polinomi, ciascuna parte letterale in un unico termine.

:::dimostrazione
La proprietà distributiva dà $(a+b)L=aL+bL$. Leggendo l'uguaglianza da destra a sinistra si raccoglie il fattore comune $L$. Per esempio $4x^2y-7x^2y=(4-7)x^2y=-3x^2y$. Con parti letterali diverse, come in $4x^2y-7xy^2$, i coefficienti moltiplicano fattori diversi. L'espressione è già ridotta.
:::
::::

:::esempio{titolo="Sottrarre un polinomio intero"}
L'opposto di $Q(x)=x^2-4x+5$ si ottiene moltiplicando tutti i suoi termini per $-1$. Il contributo di $-4x$ diventa quindi $+4x$.

$$
\begin{aligned}
(3x^2+2x-1)-(x^2-4x+5)
&=3x^2+2x-1-x^2+4x-5\\[6pt]
&=2x^2+6x-6.
\end{aligned}
$$

I coefficienti della differenza sono confrontabili uno alla volta. Per esempio il termine noto vale $-1-5=-6$. Per controllare l'intero calcolo si somma $Q$ alla differenza. Si ricostruiscono così i coefficienti $2+1=3$, $6-4=2$ e $-6+5=-1$ del primo polinomio.

| Polinomio | Coefficiente di $x^2$ | Coefficiente di $x$ | Termine noto |
| --- | --- | --- | --- |
| $3x^2+2x-1$ | $3$ | $2$ | $-1$ |
| $-(x^2-4x+5)$ | $-1$ | $4$ | $-5$ |
| Differenza | $2$ | $6$ | $-6$ |
:::

:::esempio{titolo="Una differenza dentro un'altra differenza"}
Si consideri $P-(Q-R)$, dove $P=x^2+2x-3$, $Q=3x^2-x+1$ e $R=2x^2-x-4$. Per sottrarre $Q-R$ si moltiplica l'intera differenza per $-1$. Si ottiene $-Q+R$, quindi

$$
\begin{aligned}
P-(Q-R)&=P-Q+R\\[6pt]
&=(1-3+2)x^2+(2+1-1)x+(-3-1-4)\\[6pt]
&=2x-8.
\end{aligned}
$$

Il contributo di $-R$ all'interno della differenza diventa $+R$ quando si prende l'opposto. La cancellazione dei termini quadratici abbassa il grado a uno. Per controllare il termine noto con un calcolo a parte, si pongono tutte le occorrenze di $x$ uguali a zero. Si ricava $-3-(1-(-4))=-8$.
:::

## Prodotti e proprietà distributiva

::::teorema{#prodotti titolo="Prodotti di monomi e polinomi"}
Nel prodotto di due monomi si moltiplicano i coefficienti e si sommano, per ogni lettera, gli esponenti dei fattori. Nel prodotto di un monomio e un polinomio il monomio moltiplica ogni termine della somma. Nel prodotto di due polinomi ciascun termine del primo fattore moltiplica ciascun termine del secondo.

:::dimostrazione
Per due monomi si raggruppano i fattori numerici e le potenze della stessa lettera. Per esempio

$$
(3x^2y)(-2xy^3)=(3\cdot(-2))(x^2\cdot x)(y\cdot y^3)=-6x^3y^4.
$$

Il prodotto $x^2\cdot x$ contiene tre fattori $x$. È per questo che gli esponenti si sommano. Per due binomi si applica la distributiva una prima volta ai termini del primo fattore, poi una volta a ciascun prodotto ottenuto. Con quattro simboli $A,B,C,D$ il calcolo è

$$
\begin{aligned}
(A+B)(C+D)&=A(C+D)+B(C+D)\\[6pt]
          &=AC+AD+BC+BD.
\end{aligned}
$$
:::
::::

:::esempio{titolo="Una suddivisione in quattro aree"}
Per $x>0$, un rettangolo di lati $x+3$ e $x+2$ si divide lungo i due lati nei tratti indicati in figura. Le quattro aree sono $x^2$, $3x$, $2x$ e $6$. Il numero $6$ è il prodotto delle due misure costanti. Le due aree di primo grado si sommano perché entrambe sono multipli di $x$.

::struttura{poligoni="0,0 2,0 2,2 0,2;2,0 5,0 5,2 2,2;0,2 2,2 2,4 0,4;2,2 5,2 5,4 2,4" riferimento=0 etichette="1,-0.4,x;3.5,-0.4,3;-0.38,1,x;-0.38,3,2;1,1,x^2;3.5,1,3x;1,3,2x;3.5,3,6" titolo="Le quattro regioni corrispondono ai quattro prodotti"}
$$
(x+3)(x+2)=x^2+3x+2x+6=x^2+5x+6.
$$

La figura richiede lati positivi. L'uguaglianza fra le due espressioni è ottenuta con la distributiva e vale per ogni $x$ reale.
:::

::::teorema{titolo="Grado di un prodotto in una variabile"}
Per due polinomi non nulli in una variabile, di gradi $m$ e $n$, il prodotto ha grado $m+n$.

:::dimostrazione
Per ottenere l'esponente $m+n$ occorre scegliere in ciascun fattore il termine di esponente massimo. Se uno dei due esponenti è minore, anche la somma è minore di $m+n$. I coefficienti dei due termini dominanti sono non nulli, quindi il loro prodotto è non nullo. Il termine di grado $m+n$ rimane nella forma ridotta. Per esempio $(2x^2-1)(-3x+4)$ ha coefficiente di $x^3$ uguale a $2(-3)=-6$ e ha quindi grado tre.
:::
::::

## Divisione e valori esclusi

::::teorema{#quozienti titolo="Semplificare un quoziente di monomi"}
Nel quoziente di due monomi si dividono i coefficienti e si sottraggono gli esponenti delle lettere uguali. Il coefficiente del denominatore deve essere non nullo. Inoltre, ogni lettera del denominatore con esponente positivo deve assumere un valore diverso da zero. Se nel risultato un esponente è negativo, resta un fattore letterale al denominatore.

:::dimostrazione
Si separano i coefficienti dai fattori letterali e si cancellano le copie comuni di ciascuna lettera che vale un numero non nullo. Per $x\ne0$ e $a\ge b$, l'uguaglianza $x^a=x^b x^{a-b}$ mostra che $\dfrac{x^a}{x^b}=x^{a-b}$. Se $a<b$, si scrive $x^b=x^a x^{b-a}$. La cancellazione lascia $\dfrac1{x^{b-a}}$.
:::
::::

:::esempio{titolo="Il valore escluso dopo la cancellazione"}
Semplificando per $x\ne0$ si ottiene

$$
\frac{12x^2}{3x}=\frac{12}{3}\cdot\frac{x^2}{x}=4x.
$$

L'espressione $4x$ ha valore zero all'origine. Il quoziente iniziale ha denominatore zero in quel punto, quindi il grafico del quoziente presenta un punto vuoto. La semplificazione consente di calcolare i valori per $x$ ammesso e conserva la restrizione $x\ne0$.

::grafico{f="4*x" xmin=-2.2 xmax=2.2 ymin=-8 ymax=8 punti="0,0,vuoto;1,4" legenda="y=4x,\ x\ne0" titolo="La semplificazione lascia esclusa l'origine"}
:::

:::osservazione{titolo="Le condizioni dipendono dal denominatore"}
Nella frazione $\dfrac{18x^2y^3}{6y^2}$ si richiede soltanto $y\ne0$. Anche $x=0$ è ammesso, perché $x$ compare solo al numeratore. Il quoziente vale $3x^2y$ e si annulla per $x=0$. Nel quoziente $\dfrac{18x^2y}{6y^2}$, invece, l'esponente di $y$ diventa $1-2=-1$. Si ottiene $\dfrac{3x^2}{y}$, con la stessa condizione $y\ne0$.

In entrambi i casi il risultato si può controllare moltiplicandolo per il denominatore iniziale. Il prodotto ricostruisce il numeratore sui valori ammessi. La condizione su $y$ va stabilita prima di usare la cancellazione.
:::

## Potenze e segno

:::teorema{#potenze-di-monomi titolo="Potenza di un monomio"}
Sia $k$ un intero positivo. In $(ax^my^n)^k$ il coefficiente diventa $a^k$. L'esponente di $x$ diventa $mk$, perché si sommano $k$ copie di $m$. Allo stesso modo l'esponente di $y$ diventa $nk$. La regola segue dalla scrittura della potenza come prodotto di $k$ fattori uguali.

Nel quadrato di $-2x$ il coefficiente è $4$ e l'esponente di $x$ è due. Nel cubo il coefficiente è $-8$ e l'esponente è tre. Per $x=1$ le ordinate sono quindi $4$ e $-8$. Per $x=-1$ il cubo vale $8$, perché anche il fattore $x^3$ è negativo.

::grafico{f="4*x^2;-8*x^3" xmin=-1.3 xmax=1.3 ymin=-14 ymax=14 punti="1,4;1,-8;-1,8" legenda="y=(-2x)^2;y=(-2x)^3" titolo="Quadrato e cubo dello stesso monomio"}
:::

## Valori numerici

:::esempio{#valore titolo="Sostituire un valore in ogni termine"}
Per $P(x)=2x^2-3x+4$ si calcolano separatamente il quadrato, il prodotto lineare e il termine noto. Quando $x=-2$, il contributo quadratico è $2\cdot4=8$ e quello lineare è $(-3)\cdot(-2)=6$. Il valore finale è

$$
P(-2)=2(-2)^2-3(-2)+4=18.
$$

Per $x=2$ il contributo quadratico resta $8$, mentre quello lineare vale $-6$. Quindi $P(2)=6$. Il confronto isola l'effetto del termine lineare e spiega perché i due valori a uguale distanza dall'origine differiscono di $12$.

::grafico{f="2*x^2-3*x+4" xmin=-2.8 xmax=3 ymin=-1 ymax=22 punti="-2,18,pieno,A;2,6,pieno,B;0,4" legenda="y=P(x)" titolo="Lo stesso polinomio nei punti di ascissa $-2$ e $2$"}
:::

:::osservazione{titolo="Il valore in zero legge il termine noto"}
In una variabile il valore $P(0)$ è il termine noto, perché ogni termine di grado positivo contiene un fattore $x$. Se il polinomio è in forma di prodotto, la stessa sostituzione può trovare il termine noto senza sviluppare l'intero prodotto. Per esempio $Q(x)=(x-3)(x+5)+2$ dà $Q(0)=(-3)\cdot5+2=-13$.

Per più lettere occorre sostituire i valori negli argomenti corrispondenti. In $R(x,y)=3x^2y-2xy^2$, usando $x=-1$ e $y=2$, i due contributi sono $6$ e $8$. Quindi $R(-1,2)=14$. Scambiare gli argomenti dà un altro calcolo, $R(2,-1)=-16$.
:::

:::osservazione{titolo="Il valore in uno somma i coefficienti"}
In una variabile, per $x=1$ tutte le potenze valgono uno. Il valore $P(1)$ è quindi la somma dei coefficienti della forma ridotta. Per $P(x)=x(x-2)(x+4)$ la sostituzione dà $1\cdot(-1)\cdot5=-5$, in accordo con la somma $1+2-8$ dei coefficienti di $x^3+2x^2-8x$.
:::

## Modelli di area e perimetro

:::esempio{#modelli titolo="Misure per somma di regioni"}
Un rettangolo ha base $3x+2$ e altezza $x$, con $x>0$. Dividendo la base nei tratti $3x$ e $2$ si ottengono due regioni con la stessa altezza. Le aree parziali sono $3x^2$ e $2x$. Usando $x=2$ come misura rappresentativa, la figura mostra le regioni di area $12$ e $4$.

::struttura{poligoni="0,0 6,0 6,2 0,2;6,0 8,0 8,2 6,2" riferimento=0 etichette="3,-0.4,3x;7,-0.4,2;-0.45,1,x" titolo="Due regioni di uguale altezza nel rettangolo"}

$$
\begin{aligned}
A&=x(3x+2)=3x^2+2x,\\[6pt]
P&=2((3x+2)+x)=8x+4.
\end{aligned}
$$

Il perimetro si calcola sui quattro lati esterni. La linea che divide le regioni appartiene alla costruzione dell'area e non contribuisce al perimetro. Se le lunghezze sono espresse in centimetri, l'area è in centimetri quadrati e il perimetro in centimetri.
:::

:::esempio{titolo="Una differenza di aree con altezza comune"}
Due cartoncini hanno altezza $2x$ e basi $x+4$ e $x+1$, con $x>0$. Si allineano i due rettangoli sul lato sinistro. Rimane una striscia di base $(x+4)-(x+1)=3$ e altezza $2x$. L'area in più è quindi $6x$. Anche partendo dalle due aree sviluppate si ottiene $(2x^2+8x)-(2x^2+2x)=6x$. I termini quadratici si eliminano perché descrivono regioni uguali.

::struttura{linee="0,0 6,0 6,4 0,4 0,0;0,0 3,0 3,4 0,4 0,0" poligoni="3,0 6,0 6,4 3,4" riferimento=0 etichette="1.5,-0.45,x+1;4.5,-0.45,3;-0.55,2,2x" titolo="La differenza di area è la striscia di base $3$"}
:::

:::osservazione{titolo="L'effetto di un fattore di scala"}
Se entrambe le dimensioni di un rettangolo sono moltiplicate per $k>0$, il perimetro diventa $kP$, perché ogni lato nella somma riceve il fattore $k$. L'area diventa $k^2A$, perché i due fattori del prodotto ricevono entrambi $k$. Per esempio, raddoppiando i lati di un rettangolo di area $12$, la nuova area è $48$.
:::

## Identità e controesempi

:::definizione{#identita titolo="Identità polinomiali"}
Un'uguaglianza è un'**identità** se è vera per ogni valore delle lettere nel dominio considerato. Si può dimostrare un'identità portando entrambe le espressioni alla stessa forma ridotta. Per stabilire che l'uguaglianza fallisce basta invece un valore ammesso per il quale i due membri differiscono. Quel valore è un controesempio.
:::

:::attenzione
Le espressioni $x^2$ e $x$ hanno lo stesso valore sia in $x=0$ sia in $x=1$. In $x=2$ valgono rispettivamente $4$ e $2$. Quindi la coincidenza in due punti, da sola, è insufficiente per concludere che $x^2=x$ sia un'identità.

::grafico{f="x^2;x" xmin=-0.7 xmax=2.45 ymin=-1 ymax=5 punti="0,0;1,1;2,2;2,4" legenda="y=x^2;y=x" titolo="Due intersezioni e un controesempio a $x=2$"}
:::

:::osservazione{titolo="Due sostituzioni per espressioni lineari"}
Per confrontare $ax+b$ e $cx+d$ bastano le sostituzioni in $x=0$ e $x=1$. La prima impone $b=d$. La seconda impone $a+b=c+d$ e, poiché i termini noti sono uguali, si ottiene $a=c$. Con entrambi i coefficienti uguali le due espressioni coincidono per ogni $x$. Il grado al più uno è l'ipotesi che consente questo ragionamento. L'esempio $x^2$ e $x$ mostra che, per espressioni quadratiche, le stesse due sostituzioni lasciano aperta la possibilità di differire altrove.
:::

:::esempio{titolo="Un coefficiente che rende vera un'identità"}
Si vuole che $c(x+1)+2(x-1)=5x+1$ per ogni reale $x$. Sviluppando il primo membro si ottiene $(c+2)x+(c-2)$. L'identità in $x=0$ richiede $c-2=1$, quindi $c=3$. Con quel valore il coefficiente di $x$ è $c+2=5$. Entrambi i termini sono allora uguali a quelli del secondo membro e l'identità è verificata per ogni $x$.

Se a destra si scrive $5x+4$, la condizione sul termine noto impone $c=6$. In quel caso il coefficiente del termine lineare è $8$, quindi il primo membro vale $12$ in $x=1$ e il secondo vale $9$. Non esiste dunque un valore di $c$ che renda vera questa seconda uguaglianza per ogni $x$.
:::
