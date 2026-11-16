---
titolo: "Numeri, insiemi e algebra"
sommario: "Numeri reali, percentuali, insiemi, formule, equazioni, disequazioni e sistemi."
---

## Numeri reali, ordine e operazioni

:::definizione{#numeri-reali titolo="Numeri sulla retta orientata"}
I punti della retta numerica rappresentano i **numeri reali**. Lo zero è l'origine e i numeri crescono verso destra. La scrittura $a<b$ indica che $a$ è a sinistra di $b$. Due numeri negativi si ordinano allo stesso modo. Per esempio, $-9<-4$ perché $-9$ è più a sinistra.

Un **intervallo** raccoglie tutti i numeri compresi tra due estremi. In $[a,b)$ si include $a$ e si esclude $b$, quindi $x\in[a,b)$ equivale a $a\le x<b$. Quando un estremo è infinito si usa sempre la parentesi tonda.
:::

:::osservazione{titolo="Operazioni con segno"}
Sommare un numero negativo corrisponde a spostarsi a sinistra. Sottrarre $b$ equivale a sommare il suo opposto $-b$. Per esempio, $2-(-5)=2+5=7$. Nel prodotto e nel quoziente, con entrambi i numeri diversi da zero, il risultato è positivo se i segni coincidono ed è negativo se i segni sono opposti. Se uno dei fattori è zero, il prodotto è zero. Nel quoziente il divisore deve essere diverso da zero.

Nel calcolo di $-3^2+10$ la potenza viene prima del segno meno, quindi il risultato è $-9+10=1$. In $(-3)^2+10$, invece, la base è $-3$, quindi il risultato è $19$.
:::

:::definizione{titolo="Frazioni e confronti"}
La frazione $\dfrac{a}{b}$ indica il quoziente tra $a$ e $b$, con $b\ne 0$. Moltiplicare numeratore e denominatore per lo stesso numero diverso da zero conserva il quoziente. Si può quindi usare un denominatore comune per sommare o confrontare frazioni.

Se $b$ e $d$ sono positivi, confrontare $\dfrac{a}{b}$ con $\dfrac{c}{d}$ equivale a confrontare $ad$ con $bc$, perché moltiplicare entrambi i numeri per $bd>0$ conserva l'ordine. Con denominatori di segno incerto conviene prima spostare l'eventuale segno meno al numeratore.

Dividere per $\dfrac{c}{d}\ne 0$ equivale a moltiplicare per il reciproco $\dfrac{d}{c}$. Nel calcolo $\dfrac{5}{6}\div\dfrac{10}{9}$ si ottiene $\dfrac{5}{6}\cdot\dfrac{9}{10}=\dfrac34$.
:::

:::esempio{titolo="Ordine tra frazioni negative"}
Per confrontare $-\dfrac{7}{12}$ e $-\dfrac{3}{5}$ si usa il denominatore $60$. Le due frazioni diventano $-\dfrac{35}{60}$ e $-\dfrac{36}{60}$. Poiché $-35>-36$, il numero $-\dfrac{7}{12}$ è il maggiore dei due.
:::

:::definizione{titolo="Valore assoluto e distanza"}
Il **valore assoluto** $|x|$ è la distanza di $x$ da zero. Vale $|x|=x$ per $x\ge 0$ e $|x|=-x$ per $x<0$. La distanza tra i punti di ascissa $x$ e $a$ è $|x-a|$, quindi $|4-(-2)|=6$.

Per esempio, $|x+1|\le 3$ descrive i punti che distano al più $3$ da $-1$. Gli estremi sono $-1-3=-4$ e $-1+3=2$, entrambi inclusi. Il grafico di $y=|x+1|$ mostra la stessa condizione tramite le altezze che si trovano sotto o sulla retta $y=3$.

::grafico{f="abs(x+1);3" xmin=-6 xmax=4 ymin=-1 ymax=6 punti="-4,3;2,3" titolo="La distanza da -1 vale 3 nei punti di ascissa -4 e 2"}
:::

## Rapporti, percentuali e unità

:::definizione{#rapporti-percentuali titolo="Rapporto, proporzione e base"}
Un **rapporto** mette in relazione due quantità. Se concentrato e acqua sono nel rapporto $2:7$, ogni $2$ parti di concentrato corrispondono a $7$ parti di acqua. Le parti totali sono $9$, quindi il concentrato occupa $\dfrac29$ della miscela. Il rapporto tra concentrato e acqua è invece $\dfrac27$.

In una **proporzione** i due rapporti sono uguali. Se $4$ quaderni uguali costano $7\,\mathrm{EUR}$, il costo unitario è $\dfrac74\,\mathrm{EUR}$. Con lo stesso prezzo unitario, $10$ quaderni costano $10\cdot\dfrac74=17{,}50\,\mathrm{EUR}$. Il prezzo cresce in proporzione al numero di quaderni perché il costo per pezzo resta costante.
:::

:::definizione{titolo="Percentuale e variazione relativa"}
La percentuale $p\,\%$ di una base $B$ vale $\dfrac{p}{100}B$. Se la base è il prezzo iniziale, un aumento del $p\,\%$ moltiplica il prezzo per $1+\dfrac{p}{100}$. Una diminuzione del $p\,\%$, con $0\le p\le 100$, usa il fattore $1-\dfrac{p}{100}$.

Per passare dal valore finale alla base si divide per il fattore, purché sia diverso da zero. In una variazione dal valore iniziale $B>0$ al valore finale $F$, la variazione relativa è $\dfrac{F-B}{B}$. Il segno indica se il valore è cresciuto o diminuito.
:::

:::esempio{titolo="Variazioni successive"}
Un prezzo di $80\,\mathrm{EUR}$ aumenta del $25\,\%$, quindi diventa $80\cdot 1{,}25=100\,\mathrm{EUR}$. Una riduzione del $20\,\%$ vale ora $20\,\mathrm{EUR}$ perché la base è $100\,\mathrm{EUR}$. Il prezzo torna dunque a $80\,\mathrm{EUR}$. I due passaggi si riassumono nel prodotto dei fattori $1{,}25\cdot 0{,}8=1$.
:::

:::osservazione{titolo="Percentuali e punti percentuali"}
Se una quota passa dal $30\,\%$ al $36\,\%$, la differenza è di $6$ **punti percentuali**. La crescita relativa della quota è $\dfrac{36-30}{30}=\dfrac15=20\,\%$. La base del secondo calcolo è la quota iniziale.
:::

:::definizione{titolo="Conversione delle unità"}
Il fattore che converte una lunghezza si eleva al quadrato per le aree e al cubo per i volumi. Poiché $1\,\mathrm{m}=100\,\mathrm{cm}$, per esempio, si ha
$$
\begin{aligned}
1\,\mathrm{m}^2 &= 10\,000\,\mathrm{cm}^2,\\[6pt]
1\,\mathrm{m}^3 &= 1\,000\,000\,\mathrm{cm}^3.
\end{aligned}
$$

Nelle unità composte si trattano separatamente numeratore e denominatore. Poiché $1\,\mathrm{km}=1\,000\,\mathrm{m}$ e $1\,\mathrm{h}=3\,600\,\mathrm{s}$, si ottiene $54\,\mathrm{km/h}=\dfrac{54\cdot 1\,000}{3\,600}\,\mathrm{m/s}=15\,\mathrm{m/s}$.
:::

## Insiemi e diagrammi

:::definizione{#insiemi titolo="Appartenenza e inclusione"}
Un **insieme** è una raccolta di elementi. Con $x\in A$ si dice che $x$ è un elemento di $A$. Si scrive $A\subseteq B$ se ogni elemento di $A$ appartiene anche a $B$. L'inclusione riguarda due insiemi, quindi un numero e l'insieme che contiene quel solo numero hanno ruoli diversi. Se $A=\{1,4\}$, allora $1\in A$ e $\{1\}\subseteq A$.

L'insieme vuoto $\varnothing$ è sottoinsieme di ogni insieme. Quando due insiemi sono ciascuno incluso nell'altro, hanno gli stessi elementi e quindi sono uguali.
:::

:::definizione{titolo="Unione, intersezione e complementare"}
L'**unione** $A\cup B$ contiene gli elementi che appartengono ad almeno uno dei due insiemi. L'**intersezione** $A\cap B$ contiene quelli che appartengono a entrambi. Il complementare di $A$ rispetto a un universo $U\supseteq A$ è $A^c=U\setminus A$ e contiene gli elementi di $U$ che sono fuori da $A$.

Per un dominio finito si può contare con quattro regioni disgiunte. Ogni elemento sta soltanto in $A$, soltanto in $B$, nella parte comune o fuori da entrambi. Poiché la somma $\lvert A\rvert+\lvert B\rvert$ conta due volte la parte comune, il numero di elementi dell'unione è $\lvert A\rvert+\lvert B\rvert-\lvert A\cap B\rvert$.
:::

:::esempio{titolo="Dall'elenco al diagramma"}
Siano $U=\{1,2,3,4,5,6,7,8\}$, $A=\{1,3,4,8\}$ e $B=\{3,5,8\}$. Si ha $A\cap B=\{3,8\}$ perché $3$ e $8$ sono gli elementi comuni. L'unione ha $4+3-2=5$ elementi. Fuori dall'unione restano quindi $2$, $6$ e $7$.

::venn{tipo="due" nomi="A,B" ambiente="U" universo=1 zone="ab" elementi="a:1,4;ab:3,8;b:5;u:2,6,7" titolo="Gli elementi 3 e 8 occupano la parte comune ad A e B"}
:::

:::definizione{titolo="Prodotto cartesiano"}
Il **prodotto cartesiano** $A\times B$ contiene le coppie ordinate $(a,b)$ con $a\in A$ e $b\in B$. Ogni elemento di $A$ si può combinare con ogni elemento di $B$, quindi, quando gli insiemi sono finiti, $\lvert A\times B\rvert=\lvert A\rvert\,\lvert B\rvert$.

Per esempio, se $A=\{p,q\}$ e $B=\{1,2\}$, si ha $A\times B=\{(p,1),(p,2),(q,1),(q,2)\}$. In $B\times A$ il primo elemento di ciascuna coppia è invece un numero. L'ordine della coppia indica quale ruolo occupa ciascuna scelta.
:::

:::osservazione{titolo="Complementari di unione e intersezione"}
Un elemento di $U$ è fuori dall'unione se è fuori da entrambi gli insiemi. Quindi $(A\cup B)^c=A^c\cap B^c$. Un elemento di $U$ è fuori dall'intersezione se è fuori da almeno uno dei due, da cui $(A\cap B)^c=A^c\cup B^c$.
:::

## Polinomi e scomposizioni

:::definizione{#polinomi titolo="Termini simili e operazioni"}
Un polinomio in $x$ è una somma finita di termini $ax^n$, con coefficienti reali $a$ ed esponenti interi $n\ge 0$. Si possono sommare i coefficienti dei termini che hanno la stessa potenza. Ad esempio, $3x^2-5x+2x^2=5x^2-5x$.

Per moltiplicare due polinomi, la distributività associa ogni termine del primo a ogni termine del secondo. Per esempio, $(x-6)(x+2)=x^2+2x-6x-12=x^2-4x-12$. I termini incrociati determinano il coefficiente di $x$.
:::

:::definizione{titolo="Identità e raccolta a fattor comune"}
La distributività consente sia di espandere sia di scomporre. Per esempio, $12x^3-8x^2=4x^2(3x-2)$ perché $4x^2$ divide entrambi i termini.

Le identità più utili sono
$$
\begin{aligned}
(a+b)^2 &= a^2+2ab+b^2,\\[6pt]
(a-b)^2 &= a^2-2ab+b^2,\\[6pt]
(a-b)(a+b) &= a^2-b^2.
\end{aligned}
$$
La prima e la seconda seguono moltiplicando due binomi uguali. Nella terza i termini incrociati si annullano, quindi una differenza di quadrati si riconosce anche in $25x^2-9=(5x-3)(5x+3)$.
:::

:::esempio{titolo="Scomposizione di un trinomio monico"}
Si vuole scomporre $x^2-x-20$. Per scriverlo come $(x+r)(x+s)$ le condizioni sono $r+s=-1$ e $rs=-20$. I numeri $4$ e $-5$ le soddisfano, quindi
$$
x^2-x-20=(x+4)(x-5).
$$
La scomposizione permette di risolvere l'equazione associata perché il prodotto si annulla esattamente quando $x=-4$ o $x=5$.
:::

:::attenzione{titolo="Dominio prima della semplificazione"}
La frazione $\dfrac{x^2-16}{x-4}$ è definita per $x\ne 4$. In questo dominio si può cancellare il fattore $x-4$ e ottenere $x+4$. L'espressione iniziale resta priva di valore in $x=4$ anche se $x+4$ lì vale $8$. Le esclusioni del dominio appartengono al problema di partenza.
:::

:::osservazione{titolo="Divisibilità per un fattore lineare"}
La divisione del polinomio $P(x)$ per $x-r$ dà un quoziente $Q(x)$ e un resto costante $k$. Quindi $P(x)=(x-r)Q(x)+k$. Sostituendo $x=r$ si ottiene $P(r)=k$. Di conseguenza $P(x)$ è divisibile per $x-r$ esattamente quando $P(r)=0$. Per esempio, $P(x)=x^3-2x+1$ ha il fattore $x-1$, perché $P(1)=1-2+1=0$.
:::

## Potenze e radicali

:::definizione{#potenze-radicali titolo="Esponenti interi"}
Per un intero positivo $n$, $a^n$ indica il prodotto di $n$ fattori uguali ad $a$. Per $a\ne 0$ si pone $a^0=1$ e $a^{-n}=\dfrac1{a^n}$. La base $0$ è ammessa con esponente intero positivo.

Quando le espressioni sono definite, valgono le regole
$$
a^m a^n=a^{m+n},\qquad
\frac{a^m}{a^n}=a^{m-n},\qquad
(a^m)^n=a^{mn}.
$$
Nel quoziente serve $a\ne0$. Per esempio, $\dfrac{2^7}{2^4}=2^{7-4}=8$. Nelle somme di potenze non c'è una regola analoga per sommare gli esponenti.
:::

:::definizione{titolo="Radici pari e radici dispari"}
La radice quadrata $\sqrt{u}$ è definita per $u\ge0$ e vale il **numero non negativo** il cui quadrato è $u$. Ne segue $\sqrt{x^2}=|x|$, anche se $x$ è negativo. Per esempio, $\sqrt{(-7)^2}=7$. L'equazione $x^2=49$ ha invece entrambe le soluzioni $7$ e $-7$.

Una radice reale a indice dispari ammette qualsiasi radicando reale. Si ha, per esempio, $\sqrt[3]{-27}=-3$ perché $(-3)^3=-27$. Per $a>0$ l'esponente razionale $a^{\frac{m}{n}}$ indica $\sqrt[n]{a^m}$, con $m$ intero e $n$ intero positivo.
:::

:::esempio{titolo="Radicali simili e dominio"}
Poiché $72=36\cdot 2$ e $8=4\cdot 2$, si ha
$$
\sqrt{72}-2\sqrt{8}
=6\sqrt{2}-4\sqrt{2}
=2\sqrt{2}.
$$

Per la frazione $\dfrac{1}{\sqrt{2x-6}}$ il radicando deve essere non negativo e il denominatore deve essere diverso da zero. Le due condizioni insieme danno $2x-6>0$, quindi $x>3$.
:::

:::attenzione{titolo="Radice di una somma"}
Per $u,v\ge 0$ il prodotto $\sqrt{u}\sqrt{v}$ equivale a $\sqrt{uv}$. La radice di una somma segue una regola diversa: con $u=9$ e $v=16$ si ha $\sqrt{9+16}=5$, mentre $\sqrt9+\sqrt{16}=7$. La distributività riguarda il prodotto rispetto alla somma.
:::

:::esempio{titolo="Razionalizzare un denominatore"}
Da $(\sqrt{11}+3)(\sqrt{11}-3)=11-9=2$ segue
$$
\frac{2}{\sqrt{11}+3}
=\frac{2(\sqrt{11}-3)}{(\sqrt{11}+3)(\sqrt{11}-3)}
=\sqrt{11}-3.
$$
L'espressione $\sqrt{11}-3$ è il coniugato del denominatore. Moltiplicando per il coniugato sopra e sotto, il nuovo denominatore è la differenza dei quadrati.
:::

:::esempio{titolo="Equazioni con una radice quadrata"}
Per $\sqrt{u}=v$ si richiedono $v\geq 0$ e $u=v^2$. Infatti il quadrato fornisce la seconda condizione e la radice quadrata ha valori non negativi. Per $\sqrt{5-x}=x-3$ si ha quindi $x\geq 3$ e $5-x=(x-3)^2$. La seconda condizione equivale a $(x-1)(x-4)=0$. Solo $x=4$ soddisfa $x\geq 3$, e lì entrambi i membri valgono $1$.
:::

## Formule ed equazioni

:::definizione{#formule-equazioni titolo="Condizioni di equivalenza"}
Un'**equazione** è un'uguaglianza che contiene un'incognita. I valori dell'incognita che rendono vera l'uguaglianza sono le soluzioni. Si possono aggiungere o sottrarre quantità uguali da entrambi i membri conservando le soluzioni. Si può dividere per una quantità solo dove è diversa da zero. Se dipende da un parametro o dall'incognita, si esamina separatamente il caso in cui si annulla.

In un'equazione $ax=b$ con $a\ne0$ si ha $x=\dfrac{b}{a}$. Se $a=0$, l'uguaglianza è soddisfatta da tutti i numeri reali per $b=0$ e da nessuno per $b\ne0$.
:::

:::esempio{titolo="Isolare una grandezza in una formula"}
La relazione $P=2(l+w)$ esprime il perimetro di un rettangolo di lati $l$ e $w$. Dividendo per $2$ si ottiene $\dfrac{P}{2}=l+w$, quindi
$$
w=\frac{P}{2}-l.
$$
Se $P=42\,\mathrm{cm}$ e $l=13\,\mathrm{cm}$, si ricava $w=8\,\mathrm{cm}$. Nel modello geometrico la larghezza è positiva, dunque in generale i dati devono soddisfare $P>2l$.
:::

:::esempio{titolo="Domini espliciti nelle formule"}
Nel modello $v=\dfrac{s}{t}$, con $t>0$, $v$ indica il rapporto tra la lunghezza $s$ del tragitto e il tempo impiegato. Moltiplicando per $t$ si ottiene $s=vt$, formula valida per qualunque dato iniziale ammesso. Per ricavare $t=\dfrac{s}{v}$ serve anche $v\ne0$. Se $s=v=0$, la relazione iniziale vale per ogni $t>0$. Le due inversioni richiedono quindi condizioni diverse.
:::

:::definizione{titolo="Equazioni di secondo grado"}
Un'equazione di secondo grado ha forma $ax^2+bx+c=0$ con $a\ne0$. Il **discriminante** è $\Delta=b^2-4ac$. Per $\Delta>0$ ci sono due radici reali distinte. Per $\Delta=0$ c'è una radice reale doppia. Per $\Delta<0$ l'equazione è priva di radici reali. Nei primi due casi si usa
$$
x=\frac{-b\pm\sqrt{\Delta}}{2a}.
$$

La formula segue moltiplicando l'equazione per $4a$ e completando il quadrato, perché si ottiene $(2ax+b)^2=\Delta$. Il quadrato di un numero reale è non negativo, quindi il segno di $\Delta$ determina i tre casi.
:::

:::esempio{titolo="Scelta della radice e verifica"}
Un rettangolo ha lati in centimetri $x$ e $x+5$ e area $36\,\mathrm{cm}^2$. Il modello impone $x>0$, quindi si risolve $x(x+5)=36$ con tale condizione. L'equazione si scompone come $(x+9)(x-4)=0$. Le radici sono $-9$ e $4$, quindi la larghezza è $4\,\mathrm{cm}$. Il secondo lato è $9\,\mathrm{cm}$ e il loro prodotto vale $36\,\mathrm{cm}^2$.
:::

## Disequazioni e valore assoluto

:::definizione{#disequazioni titolo="Ordine e cambiamento di verso"}
Una **disequazione** confronta due espressioni mediante $<$, $\leq$, $>$ o $\geq$. Le sue soluzioni sono i valori dell'incognita per cui il confronto è vero. Aggiungere la stessa quantità a entrambi i membri conserva il verso. Moltiplicare o dividere per un numero positivo lo conserva. Con un numero negativo il verso si inverte perché si inverte l'ordine sulla retta.

Per esempio, $5-3x>11$ equivale a $-3x>6$, quindi, dividendo per $-3$, si trova $x<-2$.
:::

:::definizione{titolo="Segno di un prodotto o di un quoziente"}
Gli zeri dei fattori dividono la retta in intervalli. Su ciascuno si può determinare il segno di ogni fattore e quindi del prodotto. Per un quoziente si aggiungono gli zeri del denominatore tra i punti di separazione e li si esclude sempre dalle soluzioni.

Un fattore $(x-a)^2$ è positivo da entrambi i lati di $a$ e vale zero in $a$, quindi in quel punto il suo segno non cambia tra gli intervalli adiacenti. Se una disequazione richiede anche l'uguaglianza, si includono gli zeri del numeratore nei quali il denominatore è diverso da zero.
:::

:::esempio{titolo="Trinomio di secondo grado"}
Si risolve $-x^2+3x+4\ge0$. Il trinomio è $-(x+1)(x-4)$, quindi si annulla per $x=-1$ e $x=4$. Tra questi valori $x+1$ è positivo e $x-4$ è negativo. Il segno meno davanti al prodotto rende positivo il trinomio. Negli intervalli esterni i due fattori hanno lo stesso segno, quindi il trinomio è negativo. La soluzione è $[-1,4]$ perché gli zeri sono ammessi.

::grafico{f="-x^2+3*x+4" xmin=-3 xmax=6 ymin=-10 ymax=8 punti="-1,0;4,0" titolo="Il trinomio è non negativo fra i due zeri, estremi compresi"}
:::

:::definizione{titolo="Equazioni e disequazioni con modulo"}
Per $r>0$, l'equazione $|u|=r$ equivale a $u=r$ oppure $u=-r$. La condizione $|u|\le r$ equivale a $-r\le u\le r$. La condizione $|u|>r$ equivale invece a $u<-r$ oppure $u>r$. Il primo intervallo raccoglie le distanze piccole da zero, i due intervalli esterni quelle grandi.

Per $r=0$, si ha $|u|\le0$ solo quando $u=0$. Per una soglia $r<0$, $|u|\le r$ è impossibile e $|u|>r$ vale in tutto il dominio. Quando entrambi i membri contengono l'incognita si possono dividere i casi in base al segno degli argomenti dei moduli.
:::

:::esempio{titolo="Distanza da un valore di riferimento"}
Si risolve $|2x-5|>3$. Nel primo caso $2x-5<-3$, quindi $x<1$. Nel secondo caso $2x-5>3$, quindi $x>4$. La soluzione è $(-\infty,1)\cup(4,+\infty)$. Gli estremi corrispondono a una distanza esattamente uguale alla soglia e sono esclusi.
:::

## Sistemi in due incognite

:::definizione{#sistemi titolo="Soluzioni come coppie ordinate"}
Una soluzione di un **sistema** è una coppia ordinata $(x,y)$ che soddisfa tutte le equazioni. La sostituzione isola un'incognita in una riga e la rimpiazza nell'altra. L'eliminazione combina opportunamente le due righe fino a cancellare un'incognita. Se ognuna delle equazioni di un sistema lineare in due incognite rappresenta una retta, le soluzioni sono i punti comuni delle rette. Due rette possono avere un solo punto comune, essere parallele distinte o coincidere.
:::

:::esempio{titolo="Eliminazione di una variabile"}
Si considera
$$
\begin{cases}
3x+2y=17,\\
x-2y=3.
\end{cases}
$$
Sommando le due equazioni si ottiene $4x=20$, quindi $x=5$. Dalla seconda si ricava $5-2y=3$, quindi $y=1$. Nella prima $3\cdot 5+2\cdot 1=17$, quindi la coppia $(5,1)$ soddisfa entrambe le equazioni.
:::

:::osservazione{titolo="Rette parallele e coincidenti"}
Le uguaglianze $2x+y=4$ e $4x+2y=9$ sono incompatibili perché raddoppiando la prima si otterrebbe $4x+2y=8$. Se invece il termine noto della seconda fosse $8$, basterebbe soddisfare la prima per soddisfarle entrambe. Le soluzioni sarebbero tutte le coppie $(x,4-2x)$ al variare di $x$.
:::

:::esempio{titolo="Sistema con una condizione quadratica"}
Si vuole trovare le coppie con somma $7$ e prodotto $10$. Dalla somma $x+y=7$ si ricava $y=7-x$. Con la seconda condizione $xy=10$ si ottiene $x(7-x)=10$, cioè $x^2-7x+10=0$. Si scompone
$$
(x-2)(x-5)=0.
$$
Per $x=2$ si trova $y=5$. Per $x=5$ si trova $y=2$. Entrambe le coppie soddisfano somma e prodotto, quindi l'insieme delle soluzioni è $\{(2,5),(5,2)\}$.
:::

:::osservazione{titolo="Verifica della coppia"}
In un sistema non lineare la sostituzione conduce spesso a un'equazione quadratica. In base al discriminante si possono ottenere due, una o zero possibilità per l'incognita rimasta. Ogni candidato determina una coppia da confrontare con entrambe le equazioni iniziali. Il controllo elimina eventuali soluzioni introdotte elevando al quadrato. Se nel calcolo si divide per un'espressione con l'incognita, si esaminano a parte i valori per cui il divisore si annulla.
:::
