---
titolo: "Prodotti notevoli"
sommario: "Identità, dimostrazioni e applicazioni di quadrati e cubi per riconoscere e trasformare un'espressione."
---

## Identità e uguaglianze particolari

:::definizione{#identita titolo="Identità fra espressioni"}

Un'**identità** è un'uguaglianza che vale per tutti i valori ammessi delle lettere. Nei prodotti notevoli le espressioni sono polinomi, quindi le lettere possono assumere qualunque valore reale. Per esempio, $x(x+2)=x^2+2x$ segue dalla distributiva e vale anche per $x=0$ e per valori negativi.

Se due scritture sono identiche, si può sostituire l'una all'altra all'interno di una somma, di un prodotto o di una formula. Il criterio che giustifica la sostituzione è l'uguaglianza per ogni valore, perché il calcolo che contiene le scritture può essere valutato in qualunque punto del dominio.

:::

:::attenzione{titolo="Un valore favorevole e un controesempio"}

In $x=0$ entrambe le scritture $(x+2)^2$ e $x^2+4$ valgono $4$. Per $x=1$ valgono rispettivamente $9$ e $5$. L'uguaglianza in $0$ vale in un singolo punto, mentre il disaccordo in $1$ basta a escludere che le espressioni siano identiche. Il divario tra i secondi valori è $4$, cioè il doppio prodotto $2\cdot1\cdot2$.

::grafico{f="(x+2)^2;x^2+4" xmin=-1.5 xmax=2.5 ymin=-1 ymax=21 punti="0,4,pieno;1,9,pieno;1,5,pieno" segmenti="1,5,1,9" titolo="Le curve coincidono in $x=0$ e hanno valori diversi in $x=1$"}

:::

## Quadrato di un binomio

::::teorema{#quadrati titolo="Quadrato di una somma e di una differenza"}

Per $a,b\in\mathbb R$ valgono le due identità seguenti.

$$
\begin{aligned}
(a+b)^2&=a^2+2ab+b^2,\\[6pt]
(a-b)^2&=a^2-2ab+b^2.
\end{aligned}
$$

Nel primo sviluppo il termine misto $2ab$ è il **doppio prodotto**. Nel secondo il segno del termine misto cambia perché un solo fattore contiene $-b$. Il quadrato $b^2$ compare con lo stesso segno nelle due formule.

:::dimostrazione

La distributiva associa ciascun addendo del primo binomio a entrambi gli addendi del secondo.

$$
\begin{aligned}
(a+b)^2&=(a+b)(a+b)\\[6pt]
&=a^2+ab+ba+b^2\\[6pt]
&=a^2+2ab+b^2.
\end{aligned}
$$

L'ultimo passaggio usa $ab=ba$. Poiché $-b$ è reale, la stessa identità si applica alla somma $a+(-b)$ e dà la formula per $a-b$.

:::

::::

:::esempio{titolo="Il quadrato suddiviso in quattro regioni"}

Quando $a,b>0$, i due addendi possono rappresentare lunghezze. A partire da un vertice del quadrato di lato $a+b$, si segna un punto a distanza $a$ su ciascuno dei due lati adiacenti. Da ogni punto si traccia un segmento parallelo all'altro lato. Due regioni in angoli opposti sono quadrati di aree $a^2$ e $b^2$. Le altre due sono rettangoli con lati $a$ e $b$, quindi forniscono un contributo complessivo $2ab$. Per esempio, con $a=4$ e $b=2$ l'area è $16+8+8+4=36$. La dimostrazione per distributiva copre anche i casi in cui un addendo sia nullo o negativo.

::struttura{linee="0,0 6,0 6,6 0,6 0,0;4,0 4,6;0,4 6,4" poligoni="4,0 6,0 6,4 4,4;0,4 4,4 4,6 0,6" etichette="2,2,a²;5,2,ab;2,5,ab;5,5,b²;2,-0.65,a;5,-0.65,b;-0.65,2,a;-0.65,5,b" riferimento=0 titolo="I due rettangoli hanno la stessa area"}

:::

:::esempio{titolo="Due termini con coefficienti"}

In $(2x-3)^2$ i termini firmati sono $2x$ e $-3$. Il primo quadrato vale $4x^2$. L'unica occorrenza del fattore negativo nel doppio prodotto dà $2\cdot 2x\cdot(-3)=-12x$. Il quadrato del secondo termine è $9$, perché contiene due fattori negativi.

$$
(2x-3)^2=4x^2-12x+9.
$$

Con $x=1$ il binomio vale $-1$ e il quadrato vale $1$. Il valore $4-12+9=1$ conferma l'ordine e i segni dei contributi.

:::

:::attenzione{titolo="Opposto del quadrato e quadrato dell'opposto"}

In $-(x-3)^2$ il segno davanti alla parentesi agisce sul risultato del quadrato. In $(3-x)^2$ si eleva al quadrato il binomio opposto a $x-3$, ottenendo di nuovo $(x-3)^2$. L'opposto di un quadrato è non positivo, mentre il quadrato dell'opposto è non negativo. Se i due risultati sono uguali, devono valere entrambi zero. Questo accade solo in $x=3$.

L'accordo nello zero di un binomio è prevedibile anche quando si commette un errore di segno su tutto il quadrato. Per confrontare queste due forme conviene allora scegliere un valore che lasci il binomio diverso da zero. In $x=0$ i valori sono $-9$ e $9$, quindi le due forme si distinguono subito.

:::

## Somma per differenza

::::teorema{#somma-differenza titolo="Differenza di quadrati"}

Per $a,b\in\mathbb R$ vale l'identità

$$
(a+b)(a-b)=a^2-b^2.
$$

I due fattori hanno lo stesso primo addendo e secondi addendi opposti. La struttura si riconosce anche se l'ordine dei fattori è invertito. In senso inverso, l'identità trasforma la differenza fra due quadrati in un prodotto.

:::dimostrazione

Si calcolano i quattro prodotti della distributiva. Poiché $ab=ba$, i prodotti misti hanno lo stesso valore assoluto e segni opposti.

$$
\begin{aligned}
(a+b)(a-b)&=a^2-ab+ba-b^2\\[6pt]
&=a^2-b^2.
\end{aligned}
$$

:::

::::

:::esempio{titolo="Dalla figura a L a un rettangolo"}

Da un quadrato di lato $7$ si rimuove il quadrato di lato $2$ posto in un angolo. La regione rimasta si divide in un rettangolo di lati $7$ e $5$, più un rettangolo di lati $5$ e $2$. Ruotando il secondo rettangolo si possono unire i due pezzi lungo un lato di lunghezza $5$. Si forma un rettangolo di lati $7+2=9$ e $7-2=5$. La differenza iniziale di aree è quindi $45$. Lo stesso taglio si può eseguire per due lunghezze $a>b>0$.

::struttura{poligoni="0,0 7,0 7,5 0,5;0,5 5,5 5,7 0,7" tratteggi="5,5 7,5 7,7 5,7 5,5" etichette="3.5,2.5,35;2.5,6,10;3.5,-0.65,7;-0.65,2.5,5;6,6,4" riferimento=0 titolo="La zona tratteggiata di area $4$ è il quadrato tolto"}

::struttura{poligoni="0,0 7,0 7,5 0,5;7,0 9,0 9,5 7,5" etichette="3.5,2.5,35;8,2.5,10;3.5,-0.6,7;8,-0.6,2;-0.65,2.5,5" riferimento=0 titolo="I due pezzi formano un rettangolo di area $45$"}

:::

:::esempio{titolo="Termini interi in più lettere"}

Nei fattori $(3x+2y)(3x-2y)$ si prendono $a=3x$ e $b=2y$. Elevando al quadrato ciascun termine intero si ottiene $9x^2-4y^2$. Per i valori che soddisfano $3x=2y$, il secondo fattore è zero e i due quadrati coincidono. Questa verifica collega l'annullamento nella forma fattorizzata alla cancellazione nella forma sviluppata.

:::

## Cubo di un binomio

::::teorema{#cubi titolo="Quattro termini nello sviluppo del cubo"}

Per $a,b\in\mathbb R$ si hanno le identità seguenti.

$$
\begin{aligned}
(a+b)^3&=a^3+3a^2b+3ab^2+b^3,\\[6pt]
(a-b)^3&=a^3-3a^2b+3ab^2-b^3.
\end{aligned}
$$

Per ottenere la seconda formula si sostituisce $-b$ a $b$. I termini che contengono una oppure tre copie di $b$ diventano i loro opposti. Il termine con due copie resta invariato perché $(-b)^2=b^2$. Questo confronto vale per qualunque segno di $a$ e $b$.

:::dimostrazione

Si usa il quadrato del binomio per ridurre la moltiplicazione a due distribuzioni. I termini con gli stessi esponenti si sommano.

$$
\begin{aligned}
(a+b)^3
&=(a^2+2ab+b^2)(a+b)\\[6pt]
&=a^3+2a^2b+ab^2\\[-1pt]
&\quad{}+a^2b+2ab^2+b^3\\[6pt]
&=a^3+3a^2b+3ab^2+b^3.
\end{aligned}
$$

Sostituendo $-b$ a $b$ si ottiene lo sviluppo della differenza.

:::

::::

:::esempio{titolo="Dalle sezioni del cubo ai volumi"}

Si prenda un cubo di lato $4=3+1$. Una sezione quadrata è suddivisa in regioni di aree $9$, $3$, $3$ e $1$. Uno strato di spessore $3$ dà quindi volumi $27$, $9$, $9$ e $3$, mentre l'altro, di spessore $1$, dà $9$, $3$, $3$ e $1$. Riunendo i volumi uguali si ottengono $27+3\cdot9+3\cdot3+1=64$. In generale il numero di modi per scegliere un termine da uno dei tre fattori è lo stesso quando si sceglie da due fattori, perché resta un solo fattore escluso.

::struttura{linee="0,0 4,0 4,4 0,4 0,0;3,0 3,4;0,3 4,3" poligoni="0,0 3,0 3,3 0,3;3,3 4,3 4,4 3,4" etichette="1.5,1.5,9;3.5,1.5,3;1.5,3.5,3;3.5,3.5,1;1.5,-0.46,3;3.5,-0.46,1" riferimento=0 titolo="Aree della sezione da moltiplicare per lo spessore dello strato"}

:::

:::esempio{titolo="Perché il termine lineare del cubo può essere positivo"}

In $(2x-3)^3$ il termine in $x^2$ ha due fattori $2x$ e un fattore $-3$. Il termine lineare ha un fattore $2x$ e due fattori $-3$, il cui prodotto è positivo.

$$
\begin{aligned}
(2x-3)^3
&=8x^3-36x^2+54x-27.
\end{aligned}
$$

Il segno positivo del coefficiente $54$ riguarda il termine lineare scritto in funzione di $x$. Se $x<0$, il valore del termine $54x$ è negativo. Il segno del coefficiente e quello del valore del termine sono quindi due informazioni distinte.

:::

## Quadrato di una somma di tre termini

::::teorema{#trinomio titolo="Tre quadrati e tre doppi prodotti"}

Per $a,b,c\in\mathbb R$ vale l'identità

$$
\begin{aligned}
(a+b+c)^2&=a^2+b^2+c^2\\[6pt]
&\quad{}+2ab+2ac+2bc.
\end{aligned}
$$

Si formano le coppie $a,b$, $a,c$ e $b,c$. Ciascuna coppia contribuisce con due prodotti uguali, mentre ogni termine contribuisce anche con il proprio quadrato. Se un termine è negativo, si conserva il segno in ciascuna coppia che lo contiene.

:::dimostrazione

Si raggruppano $a$ e $b$ in un unico termine e si applica due volte il quadrato del binomio.

$$
\begin{aligned}
\bigl((a+b)+c\bigr)^2
&=(a+b)^2+2(a+b)c+c^2\\[6pt]
&=a^2+2ab+b^2+2ac+2bc+c^2.
\end{aligned}
$$

:::

::::

:::esempio{titolo="Le nove regioni e le coppie"}

Per $a,b,c>0$ un quadrato di lato $a+b+c$ si divide in una griglia di nove regioni. Le tre regioni sulla diagonale hanno aree $a^2$, $b^2$ e $c^2$. Scambiando riga e colonna di una regione fuori dalla diagonale si trova il secondo prodotto della stessa coppia, per esempio $bc$ e $cb$. Per $a=3$, $b=2$ e $c=1$ i tre quadrati contano $14$ e i doppi prodotti contano $22$, quindi l'area complessiva è $36$.

::struttura{linee="0,0 6,0 6,6 0,6 0,0;3,0 3,6;5,0 5,6;0,3 6,3;0,5 6,5" poligoni="0,0 3,0 3,3 0,3;3,3 5,3 5,5 3,5;5,5 6,5 6,6 5,6" etichette="1.5,1.5,9;4,1.5,6;5.5,1.5,3;1.5,4,6;4,4,4;5.5,4,2;1.5,5.5,3;4,5.5,2;5.5,5.5,1;1.5,-0.46,3;4,-0.46,2;5.5,-0.46,1" riferimento=0 titolo="Le aree nelle posizioni scambiate sono uguali"}

:::

:::esempio{titolo="Doppi prodotti con un termine negativo"}

In $(x-y+2)^2$ i termini sono $x$, $-y$ e $2$. Le coppie che contengono $-y$ danno $-2xy$ e $-4y$, mentre la coppia $x,2$ dà $4x$.

$$
(x-y+2)^2=x^2+y^2+4-2xy+4x-4y.
$$

Ponendo $x=y$ i due termini lineari si annullano e $x^2+y^2-2xy$ diventa zero. Resta $4$, il valore del quadrato di $2$ nella scrittura iniziale.

:::

## Riconoscere e completare un quadrato

:::osservazione{#riconoscimento titolo="Controllo del doppio prodotto"}

Per leggere un trinomio come un quadrato si individuano i due termini che possono generarne i quadrati agli estremi. Si controlla poi che il coefficiente del termine misto corrisponda al doppio prodotto, con il segno richiesto. In $9x^2-24x+16$ si prendono $3x$ e $-4$, perché $2\cdot 3x\cdot(-4)=-24x$. Si può quindi scrivere $(3x-4)^2$. Il quadrato del termine noto determina il suo valore assoluto e il segno del termine misto ne determina il segno una volta fissato $3x$ come primo termine.

:::

::::teorema{#coefficienti titolo="Confronto dei coefficienti fino al secondo grado"}

Due polinomi della forma $Ax^2+Bx+C$, con coefficienti reali, coincidono per ogni $x$ se e solo se coincidono i tre coefficienti corrispondenti. Di conseguenza, se due sviluppi hanno gli stessi termini estremi, per stabilire l'identità basta controllare il coefficiente centrale.

:::dimostrazione

Sottraendo i polinomi si ottiene un polinomio $ux^2+vx+w$. Se i due polinomi coincidono per ogni $x$, la differenza vale zero in $0$, $1$ e $-1$. Il valore in $0$ dà $w=0$. Gli altri due danno $u+v=0$ e $u-v=0$. Sommandoli si trova $u=0$, quindi anche $v=0$. Viceversa, se i coefficienti corrispondenti sono uguali, la differenza è zero per ogni $x$.

:::

::::

:::esempio{titolo="Il termine mancante e il suo segno"}

Per completare $4x^2-12x+c$ come quadrato si parte da $(2x+b)^2$. Il termine lineare è $4bx$, quindi $4b=-12$ e $b=-3$. Di conseguenza $c=b^2=9$. Il trinomio $4x^2-6x+9$ condivide gli stessi estremi con $(2x-3)^2$, mentre il suo coefficiente centrale è diverso. Per esempio in $x=1$ i due valori sono $7$ e $1$.

::grafico{f="(2*x-3)^2;4*x^2-6*x+9" xmin=-0.5 xmax=2.7 ymin=-1 ymax=23 punti="1,1,pieno;1,7,pieno;0,9,pieno" segmenti="1,1,1,7" titolo="Il valore in $x=0$ coincide e quello in $x=1$ distingue le espressioni"}

:::

:::esempio{titolo="Due possibili segni per il coefficiente"}

Per rendere $16x^2+px+25$ un quadrato di binomio, si può scegliere come primo termine $4x$. Il secondo termine ha quadrato $25$, quindi può valere $5$ oppure $-5$. Il doppio prodotto impone rispettivamente $p=40$ oppure $p=-40$. Entrambe le scelte sono ammesse se il problema chiede soltanto un quadrato perfetto.

Se si richiede anche che il quadrato valga zero per qualche $x>0$, rimane solo $p=-40$. Il binomio $4x-5$ si annulla a $\dfrac54$, mentre $4x+5$ si annulla a $-\dfrac54$. Quando il termine noto è zero esiste una sola scelta, perché il secondo termine del binomio deve valere zero e scompare anche il termine misto.

:::

## Differenze di aree e prodotti numerici

:::esempio{#applicazioni titolo="Interpretare il doppio prodotto"}

Un quadrato ha lato $x>0$. Se il lato cresce di $3$, si aggiungono due strisce di lati $3$ e $x$ e un angolo quadrato di lato $3$. La crescita dell'area è la somma dei tre contributi. Per recuperare la misura iniziale da un aumento di area, si può risolvere l'equazione di primo grado che resta dopo la cancellazione dei termini quadratici.

::struttura{linee="0,0 5,0 5,5 0,5 0,0" poligoni="5,0 8,0 8,5 5,5;0,5 5,5 5,8 0,8;5,5 8,5 8,8 5,8" etichette="2.5,-0.55,x;6.5,-0.55,3;-0.65,2.5,x;-0.65,6.5,3;6.5,2.5,3x;2.5,6.5,3x;6.5,6.5,9" riferimento=0 titolo="Le tre regioni sommano l’aumento di area $6x+9$"}

$$
\begin{aligned}
(x+3)^2-x^2&=6x+9,\\[6pt]
6x+9=51&\ \Longrightarrow\ x=7.
\end{aligned}
$$

Per $x=7$ la nuova area è $100$ e la vecchia area è $49$. La differenza $51$ conferma l'aumento assegnato.

:::

:::esempio{titolo="Calcolare con un centro comune"}

Per $103\cdot97$ la media dei due fattori è $100$ e la distanza di ciascuno dalla media è $3$. La formula somma per differenza dà $10000-9=9991$. Anche $105\cdot95$ ha centro $100$, con distanza $5$, e il prodotto vale $10000-25=9975$. A centro fissato, una distanza maggiore richiede di sottrarre un quadrato maggiore. Questa osservazione permette di ordinare i prodotti prima di calcolarli.

::grafico{f="100-x^2" xmin=-0.5 xmax=6.4 ymin=60 ymax=104 punti="3,91,pieno;5,75,pieno" nomi="d,P" legenda="P=100-d^2" titolo="Per i fattori $10+d$ e $10-d$ il prodotto cala al crescere di $d\geq0$"}

:::

:::attenzione{titolo="Fattori a distanze diverse"}

In $201\cdot198$ i due fattori distano $1$ e $2$ da $200$. Scritti come $(200+1)(200-2)$, danno prodotti misti $200$ e $-400$. Rimane quindi il contributo $-200$ oltre al prodotto costante $-2$. Il risultato corretto è $40000-200-2=39798$. La cancellazione dei prodotti misti attorno alla base scelta vale quando le due distanze sono uguali.

:::

:::esempio{titolo="Area a perimetro fissato"}

Un rettangolo di perimetro $80$ cm ha lati di somma $40$ cm. I due lati si scrivono come $20+d$ e $20-d$, dove $0\le d<20$ per avere due lunghezze positive. Il prodotto dà $400-d^2$ cm$^2$. L'area massima è quindi $400$ cm$^2$ e si raggiunge quando $d=0$, con entrambi i lati di $20$ cm. Lo scarto fra quest'area e quella di un rettangolo con lo stesso perimetro è esattamente $d^2$.

Il calcolo si può usare anche al contrario. Se l'area assegnata è $384$ cm$^2$, si ricava $d^2=16$. La distanza comune dalla media è $d=4$, quindi i lati sono $16$ e $24$ cm. La loro somma è $40$ e il loro prodotto conferma l'area. Un'area maggiore di $400$ cm$^2$ richiederebbe invece un valore negativo per $d^2$.

:::

## Sommare e sottrarre due quadrati collegati

:::osservazione{#confronto-quadrati titolo="Termini che si cancellano"}

I binomi $x+b$ e $x-b$ hanno quadrati con parti quadratiche e costanti uguali. Nella differenza queste parti si annullano. Nella somma, invece, si annullano i due termini misti, perché sono opposti.

$$
\begin{aligned}
(x+b)^2-(x-b)^2&=4bx,\\[6pt]
(x+b)^2+(x-b)^2&=2x^2+2b^2.
\end{aligned}
$$

Per ottenere la prima formula con una sola identità si scrive la differenza di quadrati come il prodotto della differenza dei binomi, $2b$, per la loro somma, $2x$. Questa forma spiega perché, fissato $b$, il valore della differenza sia proporzionale a $x$. Per $b=3$ la somma vale $2x^2+18$ e conserva il valore quando $x$ viene sostituito con $-x$.

::grafico{f="2*x^2+18;12*x" xmin=-3.5 xmax=3.5 ymin=-26 ymax=48 punti="-2,26,pieno;2,26,pieno;2,24,pieno;0,18,pieno" titolo="La somma per $b=3$ è uguale agli opposti valori di $x$"}

:::

:::esempio{titolo="Recuperare i quadrati da somma e differenza"}

Se $(x+b)^2+(x-b)^2=50$ e $(x+b)^2-(x-b)^2=30$, i due quadrati si determinano sommando e sottraendo le uguaglianze. La somma dà due volte il primo quadrato, cioè $80$. La sottrazione dà due volte il secondo, cioè $20$. I quadrati valgono $40$ e $10$. La questione si risolve sui valori dei quadrati e ammette ancora più possibilità per i segni di $x+b$ e $x-b$.

:::
