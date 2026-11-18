---
titolo: "Scomposizione dei polinomi"
sommario: "Raccoglimenti, prodotti notevoli letti in senso inverso, trinomi, zeri e verifica delle scomposizioni."
---

## Raccoglimento totale

::::teorema{#comune titolo="Raccogliere il fattore comune"}
Siano $M,Q_1,\ldots,Q_n$ polinomi. Se ogni addendo di $P$ è il prodotto di $M$ per un polinomio $Q_i$, allora $M$ è un **fattore comune** e vale l'identità

$$
P=M Q_1+\cdots+M Q_n=M(Q_1+\cdots+Q_n).
$$

Per un polinomio non nullo a coefficienti interi si può scegliere come parte numerica il massimo comune divisore dei coefficienti in valore assoluto. Per ogni lettera si prende il più piccolo esponente che compare nei monomi non nulli, contando come zero l'esponente di una lettera assente.

:::dimostrazione
Sviluppando $M(Q_1+\cdots+Q_n)$ per la proprietà distributiva si ottengono gli addendi di $P$ in ordine. Affinché un monomio divida tutti gli addendi a coefficienti interi, il suo coefficiente deve dividere tutti i coefficienti e l'esponente di ciascuna lettera deve essere al più quello presente in ogni addendo. Il MCD numerico e gli esponenti minimi soddisfano insieme queste condizioni. Ogni altro monomio comune divide quindi quello così costruito.
:::
::::

:::esempio{titolo="Un'altezza comune a due rettangoli"}
Nell'espressione $6x^2+9x$ il coefficiente comune massimo è $3$ e l'esponente minimo di $x$ è $1$. La parte residua del primo termine è $2x$ e la parte residua del secondo è $3$, quindi

$$
6x^2+9x=3x\cdot 2x+3x\cdot 3=3x(2x+3).
$$

Se $x>0$, i due addendi sono le aree di rettangoli alti $3x$. Affiancandoli si sommano le basi e si conserva l'altezza. Nel disegno si è scelto $x=2$, così i due pezzi hanno basi $4$ e $3$ e altezza $6$.

::struttura{linee="0,0 4,0 4,6 0,6 0,0" poligoni="4,0 7,0 7,6 4,6" riferimento=0 etichette="2,-0.55,2x;5.5,-0.55,3;-0.65,3,3x" titolo="Due rettangoli con la stessa altezza"}
:::

:::attenzione
Nell'identità $-4x^2-8x=-4x(x+2)$ il secondo membro vale zero anche quando $x=0$. Il quoziente $\dfrac{-4x^2-8x}{-4x}$ richiede invece $x\ne0$. L'identità è ottenuta riconoscendo prodotti tra polinomi e quindi comprende tutti i valori delle lettere.
:::

:::esempio{titolo="Una lettera presente in un solo addendo"}
In $12x^3y+18x^2+6x^2z$ il coefficiente comune massimo è $6$. La potenza minima di $x$ è $x^2$. La $y$ compare soltanto nel primo addendo e la $z$ soltanto nel terzo, quindi nessuna delle due entra nel fattore comune.

$$
12x^3y+18x^2+6x^2z=6x^2(2xy+3+z).
$$

Il termine costante $3$ del fattore residuo indica che uno degli addendi iniziali conteneva esattamente $x^2$. Se si raccogliesse $x^3$, il termine $18x^2$ richiederebbe un quoziente con $x$ al denominatore, che uscirebbe dall'insieme dei polinomi. Il fattore scelto conserva quindi la natura polinomiale di ogni termine residuo.
:::

## Raccoglimento parziale

::::teorema{#parziale titolo="Lo stesso fattore in gruppi diversi"}
Se i gruppi di una somma si scrivono come $UQ$ e $VQ$, la loro somma si scrive $Q(U+V)$. Il fattore $Q$ può essere un polinomio formato da più termini.

:::dimostrazione
I due gruppi si sviluppano mediante la stessa distributiva. La commutatività del prodotto dà $UQ=QU$ e $VQ=QV$, quindi

$$
UQ+VQ=QU+QV=Q(U+V).
$$

Questa uguaglianza vale anche quando $Q$ si annulla, perché il passaggio usa la moltiplicazione.
:::
::::

:::esempio{titolo="Quattro prodotti in una tavola"}
In $xy+3x+2y+6$ conviene accostare i termini in $x$. Nei due rimanenti si raccoglie $2$. I gruppi così scelti lasciano lo stesso binomio.

$$
\begin{aligned}
xy+3x+2y+6
&=x(y+3)+2(y+3)\\[6pt]
&=(x+2)(y+3).
\end{aligned}
$$

Il rettangolo per $x=4$ e $y=5$ ha quattro regioni. I due pezzi allineati in orizzontale hanno la stessa altezza, mentre i due pezzi della stessa colonna hanno la stessa base. Raggruppando per colonna si arriva allo stesso prodotto in ordine invertito.

::struttura{linee="0,0 5,0 5,4 0,4 0,0;0,4 5,4 5,6 0,6 0,4" poligoni="5,0 8,0 8,4 5,4;5,4 8,4 8,6 5,6" riferimento=0 etichette="2.5,-0.55,y;6.5,-0.55,3;-0.65,2,x;-0.65,5,2" titolo="Il prodotto delle dimensioni è la somma delle quattro aree"}
:::

:::esempio{titolo="Binomi opposti"}
In $3x(x-2)+4(2-x)$ i due binomi sono opposti. Poiché $2-x=-(x-2)$, il primo gruppo contiene $3x$ volte $x-2$ e il secondo contiene $-4$ volte lo stesso fattore.

$$
3x(x-2)+4(2-x)=(x-2)(3x-4).
$$

Se la scelta iniziale dei gruppi dà residui diversi, si può cambiare l'ordine degli addendi. In $xy+3x+2y+6$ i gruppi $xy+6$ e $3x+2y$ non evidenziano il fattore comune, mentre $xy+3x$ e $2y+6$ lo rendono immediato.
:::

## Differenze di quadrati e trinomi quadrati

::::teorema{#quadrati titolo="Prodotti notevoli in senso inverso"}
Per ogni coppia di polinomi $A,B$ valgono le identità

$$
\begin{aligned}
A^2-B^2&=(A-B)(A+B),\\[4pt]
A^2+2AB+B^2&=(A+B)^2,\\[4pt]
A^2-2AB+B^2&=(A-B)^2.
\end{aligned}
$$

Nel primo caso le basi dei quadrati determinano i due fattori coniugati. Negli altri due casi il termine centrale stabilisce se i quadrati estremi appartengono allo stesso quadrato di binomio.

:::dimostrazione
Per la prima identità i prodotti misti sono $AB$ e $-AB$, quindi la loro somma è zero. Sviluppando $(A+B)(A+B)$ si ottengono i quadrati $A^2$ e $B^2$ e due contributi uguali ad $AB$. Nel prodotto $(A-B)(A-B)$ i due contributi misti sono entrambi $-AB$, mentre $(-B)(-B)=B^2$.
:::
::::

:::esempio{titolo="La differenza di due aree"}
Per $A\ge B\ge0$, il numero $A^2-B^2$ è l'area che rimane togliendo un quadrato di lato $B$ da uno di lato $A$. Per $A=6$ e $B=2$ la regione rimanente si divide in un rettangolo inferiore con base $6$ e altezza $4$ e in un rettangolo superiore con base $4$ e altezza $2$. Ruotando il pezzo superiore di un quarto di giro, la sua altezza diventa $4$ e la sua base diventa $2$. Affiancando i due pezzi si ottiene un rettangolo alto $6-2$ e largo $6+2$.

::struttura{linee="0,0 6,0 6,6 0,6 0,0;6,4 4,4 4,6" poligoni="0,0 6,0 6,4 0,4;0,4 4,4 4,6 0,6" riferimento=0 etichette="3,-0.56,6;-0.65,2,4;5,5,2" titolo="Il quadrato piccolo occupa l'angolo superiore destro"}

La stessa relazione si applica al calcolo letterale. In $9x^2-16y^2$ le basi sono $3x$ e $4y$, perciò si ottiene $(3x-4y)(3x+4y)$.
:::

:::attenzione
Due estremi quadrati lasciano ancora da controllare il termine centrale. Le basi di $x^2-4x+9$ sono $x$ e $3$, quindi per ottenere $(x-3)^2$ servirebbe $-6x$. Per $x=3$ il trinomio vale $6$ mentre il quadrato vale $0$. La coppia di curve rende visibile la differenza tra le due espressioni.

::grafico{f="(x-3)^2;x^2-4*x+9" xmin=0 xmax=5 ymin=-1 ymax=11 punti="3,0,pieno;3,6,pieno" titolo="Il termine centrale diverso cambia il valore in x = 3"}
:::

## Trinomi con coefficiente principale uno

::::teorema{#trinomio titolo="Somma e prodotto nei fattori lineari"}
Siano $b,c,r,s$ numeri reali. Il trinomio $x^2+bx+c$ coincide con $(x+r)(x+s)$ esattamente quando $r+s=b$ e $rs=c$. Per cercare fattori con coefficienti interi e $c\ne0$, si esaminano le coppie di divisori interi di $c$.

:::dimostrazione
Sviluppando i due binomi si trova

$$
(x+r)(x+s)=x^2+(r+s)x+rs.
$$

Il coefficiente di $x$ riceve due contributi, uno da ciascun prodotto misto. Il termine noto riceve il solo contributo $rs$. Confrontare i coefficienti dà le due condizioni necessarie. Quando entrambe le condizioni valgono, la stessa espansione prova l'identità.
:::
::::

:::osservazione
Se $c>0$, i due addendi della somma $b$ hanno lo stesso segno. Per $b>0$ sono entrambi positivi e per $b<0$ sono entrambi negativi. Se $c<0$, i numeri hanno segni opposti. Il termine di valore assoluto maggiore determina allora il segno della somma. Se $c=0$, uno dei numeri può essere scelto uguale a zero e il raccoglimento dà $x(x+b)$.
:::

:::esempio{titolo="Coppie di divisori e scelta del segno"}
In $x^2-5x-14$ il prodotto richiesto è $-14$. Il divisore di valore assoluto maggiore deve essere negativo perché la somma è $-5$.

| Coppia | Somma | Prodotto |
|---|---:|---:|
| $1,-14$ | $-13$ | $-14$ |
| $2,-7$ | $-5$ | $-14$ |

Si ottiene $(x+2)(x-7)$. La forma sviluppata mostra il coefficiente lineare $-5$, mentre la forma a fattori permette di leggere gli zeri $-2$ e $7$.

::grafico{f="(x+2)*(x-7)" xmin=-4 xmax=9 ymin=-24 ymax=24 punti="-2,0,pieno;7,0,pieno" titolo="I due fattori prevedono dove la parabola incontra l'asse x"}
:::

:::attenzione
Un controllo finito consente anche di concludere che mancano fattori interi. Per $x^2+x+6$ i fattori numerici avrebbero entrambi segno positivo. Le sole coppie sono $1,6$ e $2,3$, con somme $7$ e $5$. Il coefficiente lineare richiesto è $1$, quindi il criterio esclude entrambi i prodotti.
:::

:::osservazione
Per $b=0$ e $c>0$ la coppia intera è impossibile, perché due interi non nulli dello stesso segno hanno somma diversa da zero. Per $b=0$ e $c<0$ i numeri devono essere opposti, quindi occorre che $-c$ sia il quadrato di un intero. Ad esempio $x^2-49$ dà le basi $x$ e $7$, mentre $x^2-2$ si scompone in $(x-\sqrt2)(x+\sqrt2)$ quando si ammettono coefficienti reali. L'indicazione dell'insieme dei coefficienti fa dunque parte della richiesta.
:::

## Trinomi con coefficiente principale diverso da uno

::::teorema{#trinomio-generale titolo="Spezzare il termine di primo grado"}
Siano $a,b,c$ interi con $a\ne0$. Per scomporre $ax^2+bx+c$ in due fattori lineari a coefficienti interi si cercano interi $m,n$ per cui $m+n=b$ e $mn=ac$. Trovata una coppia, si scrive $bx=mx+nx$ e si procede per gruppi.

:::dimostrazione
Da un prodotto $(ux+v)(wx+z)$ si ricavano $a=uw$, $b=uz+vw$ e $c=vz$. Quindi $m=uz$ e $n=vw$ hanno somma $b$ e prodotto $ac$. Viceversa, posto $d=\operatorname{MCD}(|a|,|m|)$, si scrive $a=da_1$ e $m=dm_1$. Poiché $m_1n=a_1c$ e $a_1,m_1$ sono coprimi, $a_1$ divide $n$. Se $n=a_1e$, dalla relazione segue $c=m_1e$. I gruppi $dx(a_1x+m_1)$ ed $e(a_1x+m_1)$ hanno lo stesso binomio residuo e dunque fattorizzano il trinomio.
:::
::::

:::esempio{titolo="La coppia che ricostruisce il coefficiente lineare"}
Per $2x^2+7x+3$ il prodotto $ac$ è $6$ e la coppia di somma $7$ è $6,1$. Separare $7x$ in $6x+x$ rende possibile il raccoglimento.

$$
\begin{aligned}
2x^2+7x+3&=2x^2+6x+x+3\\[6pt]
&=2x(x+3)+(x+3)\\[6pt]
&=(2x+1)(x+3).
\end{aligned}
$$

La verifica del coefficiente di $x$ dà $2\cdot3+1\cdot1=7$. Lo zero del primo fattore è $-\dfrac12$ perché il coefficiente di $x$ è $2$.

::grafico{f="(2*x+1)*(x+3)" xmin=-4 xmax=1 ymin=-4 ymax=12 punti="-3,0,pieno;-0.5,0,pieno" titolo="Uno zero intero e uno frazionario nello stesso trinomio"}
:::

:::esempio{titolo="Una scelta preliminare quando il coefficiente principale è negativo"}
Per $-4x^2+5x+6$ si può raccogliere $-1$ e lavorare con il trinomio $4x^2-5x-6$. Il prodotto dei coefficienti estremi è $-24$. Dei due numeri cercati, $-8$ e $3$ danno somma $-5$.

$$
\begin{aligned}
-4x^2+5x+6&=-(4x^2-8x+3x-6)\\[6pt]
&=-\bigl(4x(x-2)+3(x-2)\bigr)\\[6pt]
&=-(4x+3)(x-2).
\end{aligned}
$$

Il segno raccolto moltiplica il prodotto intero e va quindi conservato. Per $x=0$ il prodotto dà $-3\cdot(-2)=6$, che coincide con il termine noto iniziale. Il prodotto di $-4x$ per $x$ dà il termine principale di segno negativo.
:::

## Scomposizioni a più passaggi

:::esempio{#completa titolo="Togliere il monomio e studiare il fattore residuo"}
In $3x^3-3x$ si riconosce prima il monomio comune $3x$. Il fattore residuo ha due termini e la costante $1$ è un quadrato, quindi si applica la differenza di quadrati.

$$
\begin{aligned}
3x^3-3x&=3x(x^2-1)\\[6pt]
&=3x(x-1)(x+1).
\end{aligned}
$$

Si conserva il fattore raccolto al primo passaggio anche quando lo studio si concentra su $x^2-1$. I tre zeri sono $0$, $1$ e $-1$, ciascuno prodotto da un fattore differente.

::grafico{f="3*x^3-3*x" xmin=-1.7 xmax=1.7 ymin=-10 ymax=10 punti="-1,0,pieno;0,0,pieno;1,0,pieno" titolo="Il fattore raccolto dà lo zero all'origine"}
:::

:::osservazione
In $x^4-16$ si può leggere il primo termine come il quadrato di $x^2$ e il secondo come il quadrato di $4$. Dopo il primo passaggio $x^2-4$ è ancora una differenza di quadrati, mentre $x^2+4\ge4$ per ogni $x$ reale.

$$
\begin{aligned}
x^4-16&=(x^2-4)(x^2+4)\\[6pt]
&=(x-2)(x+2)(x^2+4).
\end{aligned}
$$

Un fattore lineare a coefficienti reali darebbe uno zero reale. La positività di $x^2+4$ esclude quindi ulteriori fattori lineari reali. La possibilità di proseguire dipende dall'insieme dei coefficienti ammessi e dal grado dei fattori rimasti.
:::

## Zeri e segno dei prodotti

::::teorema{#zeri titolo="Annullamento del prodotto e fattori ripetuti"}
Per un prodotto di polinomi a valori reali, uno zero del prodotto è uno zero di almeno un fattore. Per il segno su un intervallo si considerano i segni di tutti i fattori in quell'intervallo.

:::dimostrazione
Se un fattore si annulla, il prodotto vale zero. Se tutti i fattori sono diversi da zero, anche il loro prodotto è diverso da zero. Tra due zeri consecutivi un fattore lineare mantiene lo stesso segno, quindi il segno del prodotto resta quello dato dalla regola dei segni. Un fattore elevato a potenza pari è positivo a entrambi i lati del suo zero.
:::
::::

:::esempio{titolo="Una radice con e una senza cambio di segno"}
Per $P(x)=(x-1)^2(x+2)$ gli zeri sono $1$ e $-2$. Per capire dove il grafico attraversa l'asse basta esaminare i fattori fra gli zeri.

| Intervallo | $(x-1)^2$ | $x+2$ | $P(x)$ |
|---|---:|---:|---:|
| $x<-2$ | $+$ | $-$ | $-$ |
| $-2<x<1$ | $+$ | $+$ | $+$ |
| $x>1$ | $+$ | $+$ | $+$ |

A sinistra di $-2$ il fattore lineare è negativo, e a destra diventa positivo. A sinistra e a destra di $1$ entrambi i fattori sono positivi. La curva quindi attraversa l'asse in $-2$ e lo tocca in $1$.

::grafico{f="(x-1)^2*(x+2)" xmin=-3 xmax=2.4 ymin=-17 ymax=12 punti="-2,0,pieno;1,0,pieno" titolo="Il prodotto cambia segno soltanto in corrispondenza dello zero semplice"}
:::

## MCD e mcm di monomi

::::teorema{#mcd-mcm titolo="Confrontare coefficienti ed esponenti"}
Per due monomi con coefficienti interi positivi, il massimo comune divisore monomiale ha come coefficiente il MCD dei coefficienti e usa gli esponenti minimi. Il minimo comune multiplo monomiale ha come coefficiente il mcm dei coefficienti e usa gli esponenti massimi. Una lettera assente conta con esponente zero.

:::dimostrazione
Un divisore comune ha un coefficiente che divide entrambi i coefficienti e per ogni lettera un esponente al più uguale a entrambi quelli dati. Il MCD numerico e gli esponenti minimi soddisfano questi vincoli. Ogni multiplo comune ha invece un coefficiente multiplo di entrambi e per ogni lettera un esponente almeno uguale a entrambi. Il mcm numerico e gli esponenti massimi soddisfano anche questi vincoli.
:::
::::

:::esempio{titolo="Perché si usano il minimo e il massimo"}
Per $12x^3y^2$ e $18x^2y^4$, la lettera $x$ può comparire in un divisore comune al più alla seconda potenza. La lettera $y$ deve invece comparire alla quarta potenza in ogni multiplo comune. Il confronto completo è

$$
\begin{aligned}
\operatorname{MCD}(12x^3y^2,18x^2y^4)&=6x^2y^2,\\[4pt]
\operatorname{mcm}(12x^3y^2,18x^2y^4)&=36x^3y^4.
\end{aligned}
$$

I quozienti per il MCD sono $2x$ e $3y^2$, perciò il divisore trovato si ritrova in entrambi i monomi. Per ottenere il mcm si moltiplica il primo monomio per $3y^2$ e il secondo per $2x$. Questo confronto ricompare nella scelta del denominatore comune di due frazioni algebriche.
:::

:::osservazione{titolo="Ricavare il mcm dal prodotto e dal MCD"}
Per ogni fattore primo del coefficiente e per ogni lettera, la somma dell'esponente minimo con quello massimo è uguale alla somma dei due esponenti di partenza. Dunque, per monomi $M,N$ a coefficienti interi positivi,

$$
\operatorname{MCD}(M,N)\cdot\operatorname{mcm}(M,N)=MN.
$$

Per esempio, se il prodotto è $60x^5y^3$ e il MCD è $2x^2y$, il mcm si ricava dividendo i coefficienti e sottraendo gli esponenti. Si ottiene $30x^3y^2$. Il calcolo funziona anche quando una lettera compare soltanto in uno dei due monomi: il suo esponente minimo è zero e quello massimo ne conserva tutta la potenza.
:::

## Controllo di una scomposizione

:::osservazione{#controlli titolo="Verificare tutti i coefficienti"}
Sviluppare un prodotto permette di confrontare coefficiente principale, termini intermedi e termine noto con il polinomio dato. Per esempio, $(2x-1)(x+4)$ ha coefficiente principale $2$, termine lineare $8x-x=7x$ e termine noto $-4$. Si ottiene così esattamente $2x^2+7x-4$.
:::

:::attenzione
Una sostituzione può individuare un errore se i due valori sono diversi. Le espressioni $x^2-1$ e $x-1$ valgono entrambe $-1$ in $x=0$ e zero in $x=1$. In $x=2$ valgono rispettivamente $3$ e $1$, quindi i due controlli iniziali sono insufficienti per concludere che le espressioni siano identiche.

::grafico{f="x^2-1;x-1" xmin=-1.5 xmax=3 ymin=-3 ymax=8 punti="0,-1,pieno;1,0,pieno;2,3,pieno;2,1,pieno" titolo="Due punti comuni e valori distinti per x = 2"}
:::
