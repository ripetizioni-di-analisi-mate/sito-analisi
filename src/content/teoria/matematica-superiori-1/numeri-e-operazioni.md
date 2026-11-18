---
titolo: "Numeri, operazioni e frazioni"
sommario: "Insiemi numerici, ordinamento, operazioni con segno, divisibilità e scritture dei razionali."
---

## Naturali, interi e razionali

:::definizione{#insiemi-numerici titolo="Insiemi numerici e scritture equivalenti"}
I **numeri naturali** sono $0,1,2,\ldots$. In questo corso lo zero appartiene a $\mathbb N$. Gli **interi** comprendono i naturali e i loro opposti, quindi $\mathbb Z=\{\ldots,-2,-1,0,1,2,\ldots\}$. I **razionali** sono i numeri scrivibili nella forma $\dfrac ab$, con $a,b\in\mathbb Z$ e $b\ne0$. Si può sempre scegliere $b>0$, perché cambiare segno a numeratore e denominatore conserva il quoziente.

Si ha $\mathbb N\subsetneq\mathbb Z\subsetneq\mathbb Q$. La prima inclusione è stretta, perché $-1$ è intero e sta a sinistra dello zero. La seconda è stretta, perché $\dfrac12$ è razionale e si trova fra due interi consecutivi. Ogni intero $a$ si scrive come $\dfrac a1$.
:::

:::osservazione{titolo="Quando un’operazione resta nello stesso insieme"}
La differenza $5-8=-3$ richiede gli interi, perché il secondo termine supera il primo. Anche negli interi la divisione può portare fuori dall’insieme. Infatti $6:3=2$ è intero, mentre $7:3=\dfrac73$ cade fra $2$ e $3$. In $\mathbb Q$ si possono sommare, sottrarre e moltiplicare due razionali ottenendo ancora un razionale. Lo stesso vale per il quoziente quando il divisore è diverso da zero. Per verificare una di queste appartenenze basta ottenere la scrittura con numeratore e denominatore interi.
:::

:::esempio{titolo="Collocare frazioni fra interi consecutivi"}
Per collocare $-\dfrac32$ si divide ciascuna unità in due parti uguali. A partire da zero, tre mezze unità verso sinistra portano a $P$, fra $-2$ e $-1$. Due mezze unità porterebbero esattamente a $-1$. A destra dello zero, una mezza unità porta a $Q$, che rappresenta $\dfrac12$. Nessun intero si trova strettamente fra $0$ e $1$, mentre fra questi estremi ci sono, per esempio, anche $\dfrac13$ e $\dfrac23$.

::grafico{xmin=-2.65 xmax=2.55 ymin=-0.62 ymax=0.67 uguale=1 assi=0 vettori="-2.43,0,2.28,0" linee="-2,-0.08 -2,0.08;-1,-0.08 -1,0.08;0,-0.08 0,0.08;1,-0.08 1,0.08;2,-0.08 2,0.08" punti="-1.5,0,pieno,P;0.5,0,pieno,Q" etichette="-2.11,-0.27,−2;-1.11,-0.27,−1;-0.05,-0.27,0;0.97,-0.27,1;1.97,-0.27,2;2.35,0.09,x" titolo="P rappresenta meno tre mezzi e Q rappresenta un mezzo"}
:::

## Ordine, valore assoluto e distanza

:::definizione{#retta titolo="Ordine e distanza sulla retta numerica"}
Fra due punti della retta numerica ha coordinata maggiore quello più a destra. Perciò $-5<-2$, sebbene $-5$ disti di più dall’origine. Il **valore assoluto** $|a|$ è la distanza dall’origine e vale $a$ se $a\ge0$, $-a$ se $a<0$. Il secondo caso cambia il segno della coordinata per ottenere una lunghezza positiva. I punti di coordinate $-4$ e $4$ hanno uguale distanza da zero e rappresentano numeri opposti.

::grafico{xmin=-5.45 xmax=5.45 ymin=-0.82 ymax=1.15 uguale=1 assi=0 vettori="-5.17,0,5.06,0;0,0.51,-4,0.51;0,0.51,4,0.51" punti="-4,0,pieno;0,0,pieno;4,0,pieno" segmenti="-4,0.05,-4,0.53;0,0.05,0,0.53;4,0.05,4,0.53" etichette="-4.18,-0.38,−4;-0.07,-0.38,0;3.91,-0.38,4;-2.13,0.78,4;1.88,0.78,4;5.13,0.12,x" titolo="I punti di coordinate −4 e 4 distano entrambi 4 unità da zero"}
:::

::::teorema{titolo="Formula del punto medio"}
Siano $a,b$ due coordinate con $a\le b$. Il punto medio ha coordinata $m=\dfrac{a+b}{2}$. La sua distanza da ciascun estremo è metà di $b-a$. La distanza fra $a$ e $b$ si può scrivere $|b-a|$, perché questa espressione resta la stessa quando si scambiano gli estremi.
:::dimostrazione
Il punto cercato si ottiene partendo da $a$ e andando verso $b$ per metà della distanza. La sua coordinata è

$$
m=a+\frac{b-a}{2}=\frac{a+b}{2}.
$$

Poiché $m-a=\dfrac{b-a}{2}$ e $b-m=\dfrac{b-a}{2}$, il punto soddisfa entrambe le condizioni di distanza. Se $a=b$, la formula restituisce quella coordinata e le due distanze sono nulle.
:::
::::

:::esempio{titolo="Stessa distanza, coordinate diverse"}
I punti $A$ e $B$ hanno coordinate $-3$ e $5$. La distanza è $5-(-3)=8$. Il punto medio $M$ si trova quattro unità a destra di $A$, perciò $m=-3+4=1$. Rimane sul lato destro dello zero, perché l’estremo destro è più lontano dall’origine. In generale i punti a distanza $d>0$ da un centro $m$ hanno coordinate $m-d$ e $m+d$.

::grafico{xmin=-5 xmax=7 ymin=-1 ymax=1 uguale=1 assi=0 vettori="-4.6,0,6.5,0" punti="-3,0,pieno,A;1,0,pieno,M;5,0,pieno,B" linee="0,-0.08 0,0.08" segmenti="-3,0.09,-3,0.45;-3,0.45,1,0.45;1,0.09,1,0.45;1,0.45,5,0.45;5,0.09,5,0.45" etichette="-3.12,-0.28,−3;-0.11,-0.28,0;0.89,-0.28,1;4.89,-0.28,5;-1.05,0.59,4;2.95,0.59,4;6.63,0.08,x" titolo="Il punto medio M divide la distanza fra A e B in due tratti di 4 unità"}
:::

:::esempio{titolo="Confrontare due frazioni negative"}
Per confrontare $-\dfrac56$ e $-\dfrac79$ si sceglie il denominatore positivo comune $18$. I numeratori equivalenti sono rispettivamente $-15$ e $-14$. Poiché $-15<-14$, la prima frazione è minore. La stessa conclusione si ottiene confrontando le distanze da zero e tenendo conto che entrambe le coordinate sono negative.

::grafico{xmin=-0.908 xmax=-0.697 ymin=-0.067 ymax=0.084 uguale=1 assi=0 vettori="-0.894,0,-0.712,0" punti="-0.833333333,0,pieno,P;-0.777777778,0,pieno,Q" etichette="-0.844,-0.035,−5⁄6;-0.787,-0.035,−7⁄9;-0.71,0.018,x" titolo="Il numero meno cinque sesti si trova a sinistra di meno sette noni"}

Per $0<a<b$, i reciproci invece soddisfano $\dfrac1a>\dfrac1b$. Infatti la loro differenza è $\dfrac{b-a}{ab}>0$, perché sono positivi sia il numeratore sia il denominatore. Questo confronto permette di ordinare in modo diretto frazioni positive con lo stesso numeratore.
:::

## Segni, raggruppamenti e priorità

:::definizione{#operazioni titolo="Somma, differenza e ordine dei calcoli"}
Sommare un numero positivo equivale a uno spostamento verso destra. Un addendo negativo corrisponde invece a uno spostamento verso sinistra. La differenza fra $a$ e $b$ è il numero che, sommato a $b$, restituisce $a$. Poiché $(a+(-b))+b=a$, sottrarre $b$ equivale a sommare il suo opposto. Per esempio $5-(-3)=5+3=8$.

I raggruppamenti stabiliscono quali parti dell’espressione calcolare insieme. All’interno di un raggruppamento, le potenze precedono prodotti e divisioni. Seguono addizioni e sottrazioni. Una catena di prodotti e quozienti va letta da sinistra, allo stesso modo di una catena di somme e differenze.
:::

:::definizione{#proprieta-operazioni titolo="Commutativa, associativa e distributiva"}
La proprietà **commutativa** consente di scambiare gli addendi o i fattori: $a+b=b+a$ e $ab=ba$. Con la **associativa** cambia il raggruppamento: $(a+b)+c=a+(b+c)$ e $(ab)c=a(bc)$. La proprietà **distributiva** lega prodotto e somma: $a(b+c)=ab+ac$. Si può leggere anche al contrario per raccogliere un fattore comune.

La sottrazione non consente gli stessi scambi o raggruppamenti. Per esempio $(9-5)-2=2$, mentre $9-(5-2)=6$. Per calcolare una differenza usando le proprietà della somma si scrive prima ogni sottrazione come addizione dell’opposto. Da $(a+(-b))+(-c)$ si arriva così a $a+((-b)+(-c))$.
:::

:::esempio{titolo="Due spostamenti successivi"}
Si parte da $-5$, si aggiunge $8$ e poi si sottrae $2$. Il primo spostamento supera lo zero di tre unità, quindi si arriva a $3$. Il secondo porta a $1$. Algebricamente si può prima sommare la variazione complessiva $8-2=6$ e poi ottenere $-5+6=1$.

::grafico{xmin=-6.5 xmax=4.5 ymin=-0.65 ymax=1.55 uguale=1 assi=0 vettori="-6.1,0,4.18,0;-5,0.54,3,0.54;3,1.13,1,1.13" punti="-5,0,pieno;1,0,pieno;3,0,pieno" segmenti="-5,0.05,-5,0.56;1,0.05,1,1.13;3,0.05,3,1.13" etichette="-5.17,-0.29,−5;0.92,-0.29,1;2.93,-0.29,3;-1.24,0.77,+8;1.84,1.35,−2;4.24,0.09,x" titolo="Somma con segno sulla retta numerica"}
:::

::::teorema{titolo="Segno del prodotto e del quoziente"}
Per fattori entrambi non nulli, il prodotto è positivo se i segni sono uguali ed è negativo se sono diversi. Per il quoziente vale lo stesso criterio quando entrambi i termini sono diversi da zero.
:::dimostrazione
Siano $a,b>0$. Dato che $b+(-b)=0$, la distributiva dà $ab+a(-b)=a\cdot0=0$. Quindi $a(-b)$ è l’opposto di $ab$. Si ricava allo stesso modo $(-a)b=-ab$. Applicando di nuovo la distributiva a $(-a)(b+(-b))$, il prodotto $(-a)(-b)$ risulta l’opposto di $(-a)b$, cioè $ab$. Il segno del quoziente segue da quello del prodotto, perché $a:b$ moltiplicato per $b$ deve dare $a$.
:::
::::

:::attenzione{titolo="Divisore zero e precedenza"}
Per $b\ne0$ si ha $0:b=0$. Il quoziente $a:0$ è sempre escluso. Quando $a\ne0$, nessun numero moltiplicato per zero restituisce $a$. Quando $a=0$, ogni numero moltiplicato per zero dà zero, quindi il quoziente non sarebbe univoco.

Nella catena $24:6\cdot2$ si calcola $(24:6)\cdot2=8$. Se il divisore deve essere $6\cdot2$, serve la scrittura $24:(6\cdot2)$ e il risultato è $2$. I due gruppi determinano calcoli diversi.
:::

:::esempio{titolo="Distribuire il segno a una somma"}
Si vuole calcolare $14-(9-2(4-7))$. Il gruppo più interno vale $-3$, perciò $2(4-7)=-6$ e $9-2(4-7)=15$. Il risultato è $-1$. Si può arrivare allo stesso numero distribuendo il segno meno al gruppo sottratto. Si ottiene $14-9+2(4-7)=5-6=-1$.
:::

## Divisibilità e multipli comuni

:::definizione{#divisibilita titolo="Divisori, massimo comune divisore e minimo comune multiplo"}
Un intero positivo $d$ è un **divisore** dell’intero positivo $a$ quando $a=dq$ per un intero $q$. Il **massimo comune divisore** $\operatorname{MCD}(a,b)$ è il maggiore fra i divisori positivi comuni. Il **minimo comune multiplo** $\operatorname{mcm}(a,b)$ è il minore fra i multipli positivi comuni. Se il MCD vale $1$, i due numeri sono **coprimi**. Per esempio $9$ e $10$ sono coprimi, anche se ciascuno ha divisori propri.

Nelle scomposizioni in fattori primi, un divisore comune può prendere ogni primo al massimo con l’esponente minore. Un multiplo comune deve invece contenerlo almeno con l’esponente maggiore. Per $72=2^3\cdot3^2$ e $120=2^3\cdot3\cdot5$ si ottiene

$$
\operatorname{MCD}(72,120)=2^3\cdot3=24,\qquad
\operatorname{mcm}(72,120)=2^3\cdot3^2\cdot5=360.
$$

I quozienti $72:24=3$ e $120:24=5$ sono coprimi, quindi le due parti rimaste dopo aver tolto il fattore comune sono già ridotte.
:::

::::teorema{titolo="Algoritmo di Euclide"}
Siano $a,b$ interi positivi e sia $a=bq+r$ con $0\le r<b$. Se $r>0$, il MCD di $a$ e $b$ coincide con il MCD di $b$ e $r$. Se $r=0$, il MCD è $b$.
:::dimostrazione
Un divisore di $a$ e $b$ divide anche la differenza $a-bq=r$. Viceversa, un divisore di $b$ e $r$ divide $bq+r=a$. Le due coppie hanno dunque gli stessi divisori comuni. Ripetendo la divisione, i resti positivi diminuiscono ogni volta, quindi a un certo passo il resto vale zero. L’ultimo divisore usato è il MCD.
:::
::::

:::esempio{titolo="Calcolare il MCD con i resti"}
Per $132$ e $84$ si calcolano le divisioni

$$
\begin{aligned}
132&=84+48\\
84&=48+36\\
48&=36+12\\
36&=3\cdot12.
\end{aligned}
$$

Il resto dell’ultima divisione è zero, quindi il massimo comune divisore vale $12$. I numeri $11$ e $7$, ottenuti dividendo i dati iniziali per $12$, hanno come unico divisore comune $1$.
:::

:::esempio{titolo="Ritrovare un istante comune"}
Due segnali partono insieme e si ripetono ogni $8$ e $12$ secondi. I primi istanti positivi del primo segnale sono $8$, $16$ e $24$, mentre quelli del secondo sono $12$ e $24$. L’incontro richiede un istante comune alle due sequenze. Il primo è $24\,\mathrm{s}$ e corrisponde a tre periodi del primo segnale e due del secondo.

::grafico{xmin=-2 xmax=27 ymin=-1.2 ymax=3.2 assi=0 vettori="-1,0,25.9,0" linee="0,2 24,2;0,1 24,1" punti="0,2,pieno;8,2,pieno;16,2,pieno;24,2,pieno;0,1,pieno;12,1,pieno;24,1,pieno" segmenti="24,0.05,24,2.13" etichette="-1,2.56,A;-1,1.47,B;0,-0.67,0;7.65,-0.67,8;11.5,-0.67,12;15.55,-0.67,16;23.5,-0.67,24;26,0.25,t" titolo="Il primo incontro dopo la partenza avviene a 24 secondi"}
:::

## Frazioni equivalenti e operazioni

::::teorema{#frazioni titolo="Equivalenza e confronto fra frazioni"}
Per $a,b,c,d\in\mathbb Z$, con $b,d\ne0$, vale $\dfrac ab=\dfrac cd$ se e solo se $ad=bc$. Se inoltre i due denominatori sono positivi, l’ordine fra le frazioni è lo stesso ordine fra $ad$ e $bc$.
:::dimostrazione
Moltiplicando entrambi i membri per $bd\ne0$ si passa dall’uguaglianza fra frazioni all’uguaglianza fra prodotti. Dividendo per $bd$ si torna alla scrittura iniziale. Quando $b,d>0$, anche $bd$ è positivo, quindi la moltiplicazione conserva il verso del confronto.
:::
::::

:::esempio{titolo="Ridurre e scegliere un denominatore comune"}
La frazione $\dfrac{18}{24}$ si riduce a $\dfrac34$ dividendo entrambi i termini per $6$. Numeratore e denominatore diventano coprimi. Per sommare $\dfrac23$ e $\dfrac14$ si sceglie una partizione dell’unità comune ai due addendi. I dodicesimi vanno bene perché $12$ è multiplo di $3$ e di $4$. Due terzi occupano otto dodicesimi e un quarto ne occupa tre. Si ottiene

$$
\frac23+\frac14=\frac8{12}+\frac3{12}=\frac{11}{12}.
$$

Nella figura le due quantità sono affiancate nella stessa unità. L’ultima parte resta vuota, perché serve ancora un dodicesimo per raggiungere uno.

::grafico{xmin=-0.8 xmax=12.8 ymin=-0.65 ymax=2.25 assi=0 poligoni="0,0.68 8,0.68 8,1.45 0,1.45;8,0.68 11,0.68 11,1.45 8,1.45" linee="0,0.68 12,0.68 12,1.45 0,1.45 0,0.68;1,0.68 1,1.45;2,0.68 2,1.45;3,0.68 3,1.45;4,0.68 4,1.45;5,0.68 5,1.45;6,0.68 6,1.45;7,0.68 7,1.45;8,0.68 8,1.45;9,0.68 9,1.45;10,0.68 10,1.45;11,0.68 11,1.45" etichette="3.31,1.84,8 parti;8.71,1.84,3 parti;0,-0.05,0;11.79,-0.05,1" titolo="Somma di otto dodicesimi e tre dodicesimi nella stessa unità"}
:::

::::teorema{titolo="Prodotto e divisione di frazioni"}
Siano $\dfrac ab$ e $\dfrac cd$ due razionali con $b,d\ne0$. Il prodotto è $\dfrac{ac}{bd}$. Se $c\ne0$, il quoziente è $\dfrac ab\cdot\dfrac dc$. Il numero $\dfrac dc$ è il reciproco del divisore.
:::dimostrazione
Per calcolare il prodotto si possono raggruppare i numeratori e i reciproci dei denominatori, perché il prodotto è associativo e commutativo. Si ottiene così il prodotto dei numeratori diviso quello dei denominatori. Per la divisione si cerca un razionale $q$ che soddisfi $q\cdot\dfrac cd=\dfrac ab$. Poiché $\dfrac cd\cdot\dfrac dc=1$, la moltiplicazione di entrambi i membri per $\dfrac dc$ isola $q$. Il controllo inverso del prodotto conferma che il valore trovato restituisce il dividendo.
:::
::::

:::esempio{titolo="Una frazione di una frazione"}
Si prendano tre quarti di due terzi di un rettangolo unitario. Si divide il rettangolo in tre colonne e quattro righe. Due colonne rappresentano $\dfrac23$ del rettangolo. Se si prendono tre righe in quelle due colonne, si selezionano sei delle dodici celle complessive. L’area selezionata è quindi $\dfrac{6}{12}=\dfrac12$.

::grafico{xmin=-0.45 xmax=3.45 ymin=-0.35 ymax=4.65 uguale=1 assi=0 poligoni="0,0 2,0 2,3 0,3" linee="0,0 3,0 3,4 0,4 0,0;1,0 1,4;2,0 2,4;0,1 3,1;0,2 3,2;0,3 3,3" titolo="Due colonne per tre righe danno sei delle dodici celle"}
:::

:::attenzione{titolo="Semplificare un fattore comune a tutti i termini"}
Nella frazione $\dfrac{6+9}{3}$ il fattore $3$ si può raccogliere da tutta la somma, ottenendo $\dfrac{3(2+3)}3=5$. Il calcolo $\dfrac{6+9}{6}=1+9$ è errato. Dividere per sei significa dividere ciascun addendo per sei, quindi il valore è $\dfrac{15}{6}$. Verificare che il fattore moltiplichi tutta l’espressione evita di conservare un addendo senza averlo diviso.
:::

## Decimali finiti e periodici

::::teorema{#decimali titolo="Resto della divisione e scrittura decimale"}
Un razionale ha scrittura decimale finita oppure periodica. Per una frazione ridotta con denominatore positivo, la scrittura è finita esattamente quando il denominatore è della forma $2^u5^v$, con $u,v$ interi non negativi. Anche il denominatore $1$ soddisfa la condizione.
:::dimostrazione
Dopo la parte intera, ogni cifra decimale si ottiene moltiplicando il resto per $10$ e dividendo per il denominatore $b$. I resti possibili sono $0,1,\ldots,b-1$. Se compare zero, la divisione termina. Se compare un resto già ottenuto, i passi successivi si ripetono perché partono dallo stesso valore.

Un decimale con $k$ cifre dopo la virgola è una frazione con denominatore $10^k=2^k5^k$. Dopo la riduzione il denominatore è un divisore di $10^k$, quindi i primi ammessi sono $2$ e $5$. Viceversa, se il denominatore è $2^u5^v$, si sceglie $k\ge\max(u,v)$. Il denominatore divide $10^k$ e si può ottenere una frazione equivalente con quel denominatore, quindi la scrittura è finita.
:::
::::

:::esempio{titolo="Riconoscere un periodo dai resti"}
Per $\dfrac7{24}$ la parte intera è zero. La divisione continua come nella tabella. Il resto $16$ ricompare, perciò la cifra $6$ è prodotta a ogni passo successivo. La scrittura è $0{,}291\overline6$. Le cifre $291$ formano la parte decimale che precede il periodo.

| Resto in ingresso | Dieci volte il resto | Cifra | Nuovo resto |
| --- | --- | --- | --- |
| $7$ | $70$ | $2$ | $22$ |
| $22$ | $220$ | $9$ | $4$ |
| $4$ | $40$ | $1$ | $16$ |
| $16$ | $160$ | $6$ | $16$ |
:::

:::esempio{titolo="Dalla scrittura periodica alla frazione"}
Sia $z=0{,}2\overline{15}$. Il prodotto per $10$ porta la virgola all’inizio del periodo. Un’ulteriore moltiplicazione per $100$ sposta due cifre e lascia dopo la virgola la stessa successione. Perciò

$$
\begin{aligned}
10z&=2{,}\overline{15}\\
1000z&=215{,}\overline{15}\\
990z&=213\\
z&=\frac{213}{990}=\frac{71}{330}.
\end{aligned}
$$

Le parti periodiche si cancellano nella differenza. Il valore ottenuto è maggiore di $0{,}2$ ed è minore di $0{,}22$, in accordo con le prime due cifre della scrittura iniziale.
:::

## Operazioni e interpretazione nei problemi

:::esempio{#problemi titolo="Scegliere il quoziente e interpretare il resto"}
Una scatola contiene $31$ penne rosse e $23$ blu. Ogni pacchetto completo contiene $4$ rosse e $3$ blu. Le divisioni $31=7\cdot4+3$ e $23=7\cdot3+2$ consentono entrambe sette pacchetti. Un ottavo richiederebbe $32$ penne rosse e $24$ blu, oltre le quantità presenti. Restano dunque tre rosse e due blu fuori dai pacchetti.

Se si regalano due pacchetti rimangono cinque pacchetti e le cinque penne sciolte. Il totale è $5\cdot7+5=40$ penne. Si ottiene lo stesso risultato sottraendo le $14$ penne regalate dalle $54$ iniziali. Il quoziente conta i pacchetti completi e il resto conta penne singole. Le due unità di misura distinguono anche i passaggi del controllo.
:::

:::esempio{titolo="Riconoscere l’intero a cui si riferisce una frazione"}
Un recipiente è pieno per $\dfrac34$ della capacità. Si preleva $\dfrac13$ dell’acqua presente. Poiché il terzo è riferito all’acqua, la quantità prelevata corrisponde a $\dfrac13\cdot\dfrac34=\dfrac14$ della capacità totale. La parte che resta è

$$
\frac34-\frac14=\frac12.
$$

Si può controllare il risultato osservando che resta $\dfrac23$ dell’acqua iniziale. Il prodotto $\dfrac23\cdot\dfrac34=\dfrac12$ restituisce la stessa frazione di capacità.

::grafico{xmin=-0.6 xmax=4.6 ymin=-0.65 ymax=1.85 assi=0 poligoni="0,0.08 2,0.08 2,0.86 0,0.86;2,0.08 3,0.08 3,0.86 2,0.86" linee="0,0.08 4,0.08 4,0.86 0,0.86 0,0.08;1,0.08 1,0.86;2,0.08 2,0.86;3,0.08 3,0.86" etichette="0.48,1.22,Resta;2.14,1.22,Prelievo" titolo="La terza parte rappresenta l’acqua prelevata"}
:::
