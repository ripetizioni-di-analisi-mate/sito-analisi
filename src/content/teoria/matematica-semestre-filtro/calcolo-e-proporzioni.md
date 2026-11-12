---
titolo: "Calcolo, proporzioni e percentuali"
sommario: "Frazioni, rapporti, proporzioni e variazioni percentuali per confrontare quantità, misure e concentrazioni."
---

## Frazioni e unità di riferimento

:::definizione{#frazioni titolo="Frazione"}
Per due interi $a$ e $b$, con $b>0$, la **frazione** $\dfrac{a}{b}$ indica il quoziente di $a$ per $b$. Il denominatore $b$ stabilisce in quante parti uguali si divide l'unità. Il numeratore $a$ dice quante di quelle parti si prendono, con il loro segno. Per esempio, $\dfrac{3}{8}$ indica tre parti di un ottavo, mentre $-\dfrac{3}{8}$ indica il numero opposto.

L'unità può essere un litro, un intervallo di tempo o un intero campione. Se il campione ha massa $240\,\mathrm{g}$, ciascun ottavo ha massa $30\,\mathrm{g}$. Di conseguenza tre ottavi del campione hanno massa $90\,\mathrm{g}$. La frazione è priva di unità. La massa si ottiene moltiplicandola per la massa del campione.
:::

:::definizione{#equivalenza-frazioni titolo="Frazioni equivalenti"}
Due frazioni sono **equivalenti** se indicano lo stesso numero. Moltiplicando numeratore e denominatore per lo stesso intero positivo $k$, si ottiene
$$
\frac{a}{b}=\frac{ka}{kb}.
$$
Infatti la singola parte diventa $k$ volte più piccola e il numero di parti prese diventa $k$ volte più grande. Il prodotto tra numero di parti e dimensione della parte rimane invariato. La stessa uguaglianza permette di semplificare una frazione dividendo numeratore e denominatore per un loro divisore positivo comune.

Per esempio, $\dfrac{8}{12}=\dfrac{2}{3}$, poiché $8=4\cdot2$ e $12=4\cdot3$. La seconda scrittura è ridotta ai minimi termini perché $2$ e $3$ hanno come unico divisore positivo comune $1$. Una frazione ridotta agevola il confronto con una frazione già nota.
:::

:::esempio{titolo="Due terzi e quattro sesti dello stesso volume"}
Un contenitore graduato ha capacità $600\,\mathrm{mL}$. Riempirlo per due terzi significa prendere due parti da $200\,\mathrm{mL}$. Se si divide la capacità in sesti, ciascuna parte vale invece $100\,\mathrm{mL}$. Si prendono allora quattro parti per raggiungere lo stesso livello.
$$
2\cdot200\,\mathrm{mL}=4\cdot100\,\mathrm{mL}=400\,\mathrm{mL}.
$$

::grafico{assi=0 uguale=1 xmin=-0.6 xmax=6.8 ymin=-0.3 ymax=3.4 poligoni="0,2 4,2 4,2.6 0,2.6;0,0.5 4,0.5 4,1.1 0,1.1" linee="0,2 6,2 6,2.6 0,2.6 0,2;2,2 2,2.6;4,2 4,2.6;0,0.5 6,0.5 6,1.1 0,1.1 0,0.5;1,0.5 1,1.1;2,0.5 2,1.1;3,0.5 3,1.1;4,0.5 4,1.1;5,0.5 5,1.1" etichette="2,3,Due terzi;2,1.45,Quattro sesti" titolo="La stessa porzione di una capacità di $600\,\mathrm{mL}$ è divisa prima in terzi e poi in sesti."}
:::

## Confronto tra frazioni

::::teorema{#confronto-frazioni titolo="Confronto con denominatori positivi"}
Siano $\dfrac{a}{b}$ e $\dfrac{c}{d}$ due frazioni con $b,d>0$. Vale
$$
\frac{a}{b}<\frac{c}{d}
\quad\Longleftrightarrow\quad
ad<bc.
$$
La stessa equivalenza vale con i segni $=$ e $>$. Il confronto dei prodotti permette di stabilire l'ordine usando soltanto interi.

:::dimostrazione
Si riscrivono le frazioni con denominatore comune $bd$. La prima diventa $\dfrac{ad}{bd}$ e la seconda $\dfrac{bc}{bd}$. Poiché $bd$ è positivo, moltiplicare i due membri della disuguaglianza per $bd$ conserva l'ordine. L'operazione inversa consiste nel dividere per $bd$, che è ancora positivo. Si ottiene quindi l'equivalenza.
:::
::::

:::esempio{titolo="Sette decimi e due terzi"}
Per confrontare $\dfrac{7}{10}$ con $\dfrac{2}{3}$ si possono esprimere entrambi in trentesimi. Sette decimi corrispondono a ventuno trentesimi, mentre due terzi corrispondono a venti trentesimi. Poiché ventuno è maggiore di venti, si ha
$$
\frac{7}{10}=\frac{21}{30}>\frac{20}{30}=\frac{2}{3}.
$$
Le due frazioni differiscono di un trentesimo. Se si riferiscono a due campioni entrambi da $300\,\mathrm{g}$, le porzioni corrispondenti differiscono di $10\,\mathrm{g}$.
:::

:::esempio{titolo="Frazioni con segno"}
Sulla retta orientata i numeri crescono verso destra. Siccome $\dfrac{5}{6}>\dfrac{2}{3}$, passando ai loro opposti l'ordine si inverte. Si può controllare lo stesso confronto scrivendo $-\dfrac{2}{3}=-\dfrac{4}{6}$ e confrontando i numeratori $-5$ e $-4$. Il risultato è
$$
-\frac{5}{6}<-\frac{2}{3}<0<\frac{2}{3}<\frac{5}{6}.
$$
Questo ordine è utile, per esempio, quando una posizione viene indicata con una coordinata negativa rispetto a un'origine.

::grafico{assi=0 uguale=1 xmin=-1.23 xmax=1.42 ymin=-0.32 ymax=0.34 vettori="-1.13,0,1.21,0,x" punti="-0.833333333333,0;-0.666666666667,0;0,0;0.666666666667,0;0.833333333333,0" etichette="-0.88,0.14,−⅚;-0.61,-0.16,−⅔;0,-0.16,0;0.60,0.14,⅔;0.88,-0.16,⅚" titolo="Le frazioni con segno sono ordinate sulla retta orientata."}
:::

:::attenzione{titolo="L'unità cambia il confronto tra quantità"}
Il confronto tra due frazioni non basta a confrontare le quantità se cambia l'unità di riferimento. Per esempio, $\dfrac{3}{4}$ di un campione da $80\,\mathrm{g}$ equivale a $60\,\mathrm{g}$. Invece $\dfrac{2}{3}$ di un campione da $120\,\mathrm{g}$ equivale a $80\,\mathrm{g}$. Dunque la prima frazione è maggiore della seconda, mentre la quantità che rappresenta in questi campioni è minore.
:::

:::esempio{titolo="Confrontare una frazione con un numero decimale"}
Un campione A ha frazione in massa $\dfrac{3}{20}$ e un campione B ha frazione in massa $0{,}16$. Poiché $0{,}16$ corrisponde a sedici centesimi, si possono scrivere entrambe le frazioni con denominatore cento. Si ottiene $\dfrac{3}{20}=\dfrac{15}{100}<\dfrac{16}{100}$. Il campione B ha una frazione in massa maggiore.

La differenza fra le due frazioni è $\dfrac{1}{100}$. Due campioni da $500\,\mathrm{g}$, uno per ciascuna composizione, contengono quindi masse del componente che differiscono di $5\,\mathrm{g}$. Se le masse dei campioni sono diverse, la differenza tra le masse del componente si ottiene calcolando prima i due prodotti con le rispettive basi.
:::

## Somme e differenze

:::definizione{#somma-frazioni titolo="Denominatore comune"}
Somma e differenza richiedono di contare parti della stessa dimensione. Per frazioni con denominatori positivi $b$ e $d$, un denominatore comune è $bd$. Riscrivendo entrambe le frazioni con quel denominatore, si ottengono
$$
\begin{aligned}
\frac{a}{b}+\frac{c}{d}&=\frac{ad+bc}{bd},\\[6pt]
\frac{a}{b}-\frac{c}{d}&=\frac{ad-bc}{bd}.
\end{aligned}
$$
Ogni multiplo comune dei due denominatori dà lo stesso risultato. Il minimo comune multiplo riduce spesso il numero di passaggi perché mantiene i numeratori intermedi più piccoli.
:::

:::esempio{titolo="Metà più un terzo"}
Le due porzioni sono riferite alla stessa unità. Poiché il minimo comune multiplo di $2$ e $3$ è $6$, la metà vale tre sesti e il terzo vale due sesti. Pertanto
$$
\begin{aligned}
\frac{1}{2}+\frac{1}{3}
&=\frac{3}{6}+\frac{2}{6}\\[6pt]
&=\frac{5}{6}.
\end{aligned}
$$
Se l'unità è un litro, al volume di mezzo litro si aggiunge un terzo di litro e si ottengono cinque sesti di litro. La somma resta inferiore a un litro poiché la sesta porzione è ancora libera.

::grafico{assi=0 uguale=1 xmin=-0.5 xmax=6.7 ymin=-0.5 ymax=1.9 poligoni="0,0 3,0 3,0.7 0,0.7;3,0 5,0 5,0.7 3,0.7" linee="0,0 6,0 6,0.7 0,0.7 0,0;1,0 1,0.7;2,0 2,0.7;3,0 3,0.7;4,0 4,0.7;5,0 5,0.7" etichette="1.4,1.05,Metà;3.95,1.05,Un terzo;5.5,-0.25,Libero" titolo="Tre sesti e due sesti occupano insieme cinque delle sei parti uguali."}
:::

:::esempio{titolo="Spostamenti con segno"}
Lungo una guida rettilinea un cursore si sposta di $\dfrac{7}{10}\,\mathrm{m}$ nel verso positivo e poi di $\dfrac{3}{4}\,\mathrm{m}$ nel verso opposto. Lo spostamento complessivo è la somma con segno. Il denominatore comune è $20$, quindi
$$
\begin{aligned}
\Delta x
&=\left(\frac{7}{10}-\frac{3}{4}\right)\,\mathrm{m}\\[6pt]
&=\left(\frac{14}{20}-\frac{15}{20}\right)\,\mathrm{m}\\[6pt]
&=-\frac{1}{20}\,\mathrm{m}.
\end{aligned}
$$
Il segno negativo indica il verso dello spostamento risultante. Per ottenere la lunghezza del percorso si sommano le lunghezze dei due tratti. In questo esempio il percorso è lungo $\dfrac{29}{20}\,\mathrm{m}$.
:::

:::osservazione{titolo="Riduzione esatta e arrotondamento"}
Semplificare una frazione conserva il numero. Arrotondare una scrittura decimale in genere lo modifica. Per esempio, $\dfrac{5}{12}$ equivale esattamente a $\dfrac{10}{24}$, mentre $0{,}42$ ne è un'approssimazione. Nei calcoli con più operazioni si può conservare il valore esatto fino all'ultima riga. In tal modo l'errore di arrotondamento riguarda soltanto il risultato espresso con il numero di cifre richiesto.
:::

:::attenzione{titolo="Somma di parti e frazione complessiva"}
Sommare numeratori e denominatori separatamente non dà la somma delle frazioni. Per esempio, $\dfrac{1}{2}+\dfrac{1}{3}$ vale $\dfrac{5}{6}$, mentre $\dfrac{1+1}{2+3}=\dfrac{2}{5}$. La seconda espressione è pertinente a un'altra domanda. Se si prendono una pallina da un gruppo di due e una da un gruppo di tre, si scelgono in tutto due palline su cinque. In quel caso si confronta il totale delle palline scelte con il totale di quelle disponibili. Per sommare metà e un terzo di un'unica unità di riferimento, si esprimono invece entrambe le porzioni con la stessa suddivisione dell'unità.
:::

## Prodotti e quozienti

:::definizione{#operazioni titolo="Prodotto e quoziente di frazioni"}
Per $b,d>0$ il prodotto è
$$
\frac{a}{b}\cdot\frac{c}{d}=\frac{ac}{bd}.
$$
Quando anche $c\ne0$, il quoziente è
$$
\frac{a}{b}:\frac{c}{d}=\frac{a}{b}\cdot\frac{d}{c}=\frac{ad}{bc}.
$$
La **reciproca** di $\dfrac{c}{d}$ è $\dfrac{d}{c}$, poiché il loro prodotto vale $1$. La divisione chiede quale numero, moltiplicato per il divisore, restituisce il dividendo. Moltiplicando il dividendo per la reciproca si ottiene proprio quel numero.
:::

:::esempio{titolo="Una frazione di una porzione"}
Una vaschetta rettangolare ha superficie $240\,\mathrm{cm^2}$. Una striscia occupa tre quarti della larghezza. Si ricoprono due terzi dell'altezza di questa striscia. Poiché il rettangolo della parte ricoperta ha larghezza e altezza pari alle frazioni indicate delle dimensioni originali, la sua area è
$$
\begin{aligned}
A
&=\frac{3}{4}\cdot\frac{2}{3}\cdot240\,\mathrm{cm^2}\\[6pt]
&=\frac{1}{2}\cdot240\,\mathrm{cm^2}
=120\,\mathrm{cm^2}.
\end{aligned}
$$

::grafico{assi=0 uguale=1 xmin=-0.45 xmax=4.85 ymin=-0.45 ymax=3.65 poligoni="0,0 3,0 3,2 0,2" linee="0,0 4,0 4,3 0,3 0,0;1,0 1,3;2,0 2,3;3,0 3,3;0,1 4,1;0,2 4,2" etichette="1.45,3.28,Tre colonne su quattro;1.44,0.45,Parte ricoperta" titolo="La parte ricoperta comprende sei dei dodici rettangoli di uguale area."}
:::

:::esempio{titolo="Porzioni complete e avanzo"}
Un recipiente contiene $\dfrac{3}{4}\,\mathrm{L}$. Ciascuna porzione richiede $\dfrac{1}{5}\,\mathrm{L}$. Il rapporto tra volume disponibile e volume per porzione dà
$$
\begin{aligned}
\frac{\frac{3}{4}\,\mathrm{L}}{\frac{1}{5}\,\mathrm{L}}
&=\frac{3}{4}\cdot5
=\frac{15}{4}.
\end{aligned}
$$
Il valore è compreso tra $3$ e $4$, quindi si ottengono tre porzioni complete. Per calcolare l'avanzo si sottrae il volume delle tre porzioni dal volume iniziale.
$$
\begin{aligned}
V_{\mathrm{avanzo}}
&=\left(\frac{3}{4}-3\cdot\frac{1}{5}\right)\,\mathrm{L}\\[6pt]
&=\left(\frac{15}{20}-\frac{12}{20}\right)\,\mathrm{L}
=\frac{3}{20}\,\mathrm{L}.
\end{aligned}
$$
Il rapporto iniziale è un numero privo di unità. L'avanzo è un volume, quindi si esprime in litri.
:::

:::osservazione{titolo="Fattori comuni nei prodotti"}
In un prodotto di frazioni si può semplificare un fattore comune a un numeratore e a un denominatore, anche se appartengono a frazioni diverse. Per esempio,
$$
\begin{aligned}
\frac{14}{15}\cdot\frac{25}{21}
&=\frac{2\cdot7\cdot5\cdot5}{3\cdot5\cdot3\cdot7}\\[6pt]
&=\frac{2\cdot5}{3\cdot3}
=\frac{10}{9}.
\end{aligned}
$$
La semplificazione è possibile perché il prodotto si può scrivere come un'unica frazione. In questa forma il numeratore e il denominatore sono entrambi prodotti. La scomposizione è utile anche per un controllo di stima. Qui il primo fattore è poco minore di $1$ e il secondo è vicino a $1{,}2$. Il prodotto calcolato è coerentemente compreso tra $1$ e $1{,}2$.
:::

## Rapporti e proporzioni

:::definizione{#rapporto-unitario titolo="Rapporto e valore per unità"}
Il **rapporto** tra una quantità $a$ e una quantità $b$ diversa da zero si scrive $\dfrac{a}{b}$. Se entrambe hanno la stessa unità e sono espresse in quella unità, essa si semplifica. Per esempio, $\dfrac{50\,\mathrm{mL}}{200\,\mathrm{mL}}=\dfrac{1}{4}$ dice che $50\,\mathrm{mL}$ sono un quarto di $200\,\mathrm{mL}$.

Se le grandezze sono di tipo diverso, il rapporto conserva l'unità composta. Un moto uniforme che copre $18\,\mathrm{m}$ in $6\,\mathrm{s}$ ha velocità $3\,\mathrm{m/s}$. Il numero $3$ indica i metri percorsi in un secondo. Poiché la velocità è costante, il prodotto tra questo valore per unità di tempo e la durata fornisce lo spazio percorso nel tratto considerato.
:::

::::teorema{#proporzioni titolo="Proprietà fondamentale delle proporzioni"}
Per numeri reali $a,b,c,d$, con $b,d\ne0$, la **proporzione** $\dfrac{a}{b}=\dfrac{c}{d}$ è equivalente all'uguaglianza $ad=bc$. La proprietà permette di ricavare un valore incognito quando i due rapporti descrivono la stessa relazione.

:::dimostrazione
Moltiplicando entrambi i membri della proporzione per $bd$, il primo membro diventa $ad$ e il secondo $bc$. Poiché $b,d\ne0$, si può anche dividere entrambi i membri di $ad=bc$ per $bd$ e tornare alla proporzione. Le due condizioni sono quindi equivalenti.
:::
::::

:::esempio{titolo="Due prelievi dalla stessa soluzione"}
Una soluzione omogenea contiene $4\,\mathrm{g}$ di soluto in $200\,\mathrm{mL}$. L'omogeneità assicura lo stesso rapporto tra massa di soluto e volume in ciascun campione. Indicata con $m$ la massa di soluto contenuta in $50\,\mathrm{mL}$, si ha
$$
\begin{aligned}
\frac{m}{50\,\mathrm{mL}}&=\frac{4\,\mathrm{g}}{200\,\mathrm{mL}},\\[6pt]
m&=4\,\mathrm{g}\cdot\frac{50\,\mathrm{mL}}{200\,\mathrm{mL}}
=1\,\mathrm{g}.
\end{aligned}
$$
Il campione ha un quarto del volume indicato, quindi contiene un quarto della massa di soluto. Il punto di ascissa $50$ e ordinata $1$ appartiene alla stessa retta del punto di ascissa $200$ e ordinata $4$.

::grafico{f="x/50" xmin=0 xmax=249.9 ymin=0 ymax=5.2 nomi="V,m" punti="50,1;200,4" segmenti="50,0,50,1;0,1,50,1;200,0,200,4;0,4,200,4" etichette="57,0.81,(50, 1);153,4.16,(200, 4)" legenda="m=\dfrac{V}{50}" titolo="Massa di soluto in grammi in funzione del volume di soluzione in millilitri."}
:::

:::attenzione{titolo="Un rapporto variabile richiede un altro modello"}
Un rapporto misurato in un solo caso non prova che le grandezze siano direttamente proporzionali. Per esempio, un sensore registra $5\,\mathrm{cm}$ a $t=0\,\mathrm{s}$ e $11\,\mathrm{cm}$ a $t=3\,\mathrm{s}$. Se la posizione aumenta uniformemente, l'incremento è $2\,\mathrm{cm}$ al secondo. Raddoppiando il tempo da $3$ a $6\,\mathrm{s}$, la posizione passa a $17\,\mathrm{cm}$, non a $22\,\mathrm{cm}$. È l'incremento rispetto a $5\,\mathrm{cm}$ a raddoppiare.
:::

:::esempio{titolo="Proporzione diretta e proporzione inversa"}
Una quantità di liquido occupa $12\,\mathrm{L}$. Se la si ripartisce fra sei recipienti identici riempiti allo stesso livello, ciascun recipiente contiene $2\,\mathrm{L}$. Con otto recipienti la quantità per recipiente è $\dfrac{12}{8}\,\mathrm{L}=1{,}5\,\mathrm{L}$. Rimane costante il prodotto fra numero di recipienti e volume per recipiente. Il rapporto fra quelle grandezze cambia, quindi la dipendenza è inversa.

Per contro, se ogni recipiente deve sempre contenere $2\,\mathrm{L}$, aumentando il numero di recipienti aumenta il volume complessivo. In questo caso il rapporto fra volume complessivo e numero di recipienti vale sempre $2\,\mathrm{L}$ per recipiente. Prima di impostare una proporzione occorre identificare quale quantità si mantiene fissa nel problema.
:::

## Percentuali e basi di riferimento

:::definizione{#percentuali titolo="Percentuale e frazione della base"}
La **percentuale** $p\%$ è il numero $\dfrac{p}{100}$. Data una base $B>0$, la parte corrispondente è $A=\dfrac{p}{100}B$. Viceversa, se sono note la parte e la base, si divide la prima per la seconda e si scrive il rapporto in centesimi. La base si individua nel dato che rappresenta il totale di riferimento.

In una miscela, la percentuale in massa confronta la massa del componente con la massa dell'intera miscela. In una soluzione composta soltanto da un soluto e da un solvente, la massa totale è la somma delle loro masse. Perciò, se sono date separatamente, si sommano prima di calcolare il rapporto.
:::

:::esempio{titolo="Stessa massa di soluto e due totali"}
Una soluzione da $100\,\mathrm{g}$ e una da $25\,\mathrm{g}$ contengono ciascuna $5\,\mathrm{g}$ di soluto. Le due frazioni massiche sono
$$
\frac{5\,\mathrm{g}}{100\,\mathrm{g}}=\frac{5}{100}=5\%,
\qquad
\frac{5\,\mathrm{g}}{25\,\mathrm{g}}=\frac{20}{100}=20\%.
$$
La parte ha la stessa massa nei due casi. Nella seconda soluzione il totale è quattro volte più piccolo, quindi la frazione massica è quattro volte più grande.

::grafico{assi=0 uguale=1 xmin=-5 xmax=106 ymin=-6 ymax=46 poligoni="0,28 5,28 5,34 0,34;0,8 5,8 5,14 0,14" linee="0,28 100,28 100,34 0,34 0,28;5,28 5,34;0,8 25,8 25,14 0,14 0,8;5,8 5,14" etichette="24,38,Totale 100 g;27,11,Totale 25 g;8,3,In colore 5 g di soluto" titolo="La parte colorata ha uguale lunghezza su una scala comune, mentre i due totali hanno lunghezze diverse."}
:::

:::esempio{titolo="Ricavare la base dalla parte"}
In una soluzione $18\,\mathrm{g}$ di soluto sono il $12\%$ in massa. Indicata con $B$ la massa totale, il dato significa che dodici centesimi di $B$ valgono $18\,\mathrm{g}$. Il fattore $\dfrac{12}{100}$ è positivo, quindi si può dividere per esso.
$$
\begin{aligned}
\frac{12}{100}B&=18\,\mathrm{g},\\[6pt]
B&=18\,\mathrm{g}\cdot\frac{100}{12}=150\,\mathrm{g}.
\end{aligned}
$$
La massa del solvente è $150\,\mathrm{g}-18\,\mathrm{g}=132\,\mathrm{g}$ se la soluzione contiene soltanto il soluto e il solvente. La differenza usa quindi come base la massa totale appena calcolata.
:::

:::attenzione{titolo="Rapporto tra componenti e frazione del totale"}
Se in una miscela binaria il rapporto tra massa del soluto e massa del solvente è $\dfrac{2}{3}$, la massa totale corrisponde a cinque parti. Il soluto rappresenta allora $\dfrac{2}{5}=40\%$ del totale. La frazione $\dfrac{2}{3}$ ha per denominatore la sola massa del solvente.
:::

:::osservazione{titolo="Percentuali complementari e percentuali maggiori di cento"}
Se un materiale è composto da due sole sostanze, la somma delle loro frazioni in massa vale $1$. Di conseguenza, se la prima sostanza rappresenta il $37\%$ della massa totale, la seconda ne rappresenta il $63\%$. Le due percentuali possono essere sommate perché il denominatore è la stessa massa totale.

Una percentuale può superare cento se la quantità confrontata è maggiore della sua base. Per esempio, un campione da $120\,\mathrm{g}$ ha una massa pari al $150\%$ di quella di un campione da $80\,\mathrm{g}$. In questo caso si confrontano le masse di due oggetti distinti. Se invece si confronta un componente con il totale della propria miscela, la parte ha massa minore o uguale al totale, quindi la percentuale è compresa tra zero e cento.
:::

## Variazioni percentuali

:::definizione{#variazioni titolo="Variazione relativa e fattore di variazione"}
Se $x_0>0$ è il valore iniziale e $x_1$ è il valore finale espresso nella stessa unità, la **variazione relativa** è $r=\dfrac{x_1-x_0}{x_0}$. La sua scrittura percentuale è $(100r)\%$. Il segno positivo indica un aumento e il segno negativo una diminuzione. Dall'identità $x_1-x_0=rx_0$ segue $x_1=x_0(1+r)$. Il numero $1+r$ è il fattore di variazione.

Un aumento del $p\%$ corrisponde al fattore $1+\dfrac{p}{100}$. Una diminuzione del $p\%$ corrisponde al fattore $1-\dfrac{p}{100}$. Questi fattori moltiplicano l'intero valore di partenza. La sola differenza, espressa nell'unità della grandezza, si ottiene moltiplicando per $r$.
:::

:::esempio{titolo="Variazioni calcolate su basi successive"}
Un serbatoio contiene $100\,\mathrm{L}$. Il volume aumenta del $20\%$ e poi diminuisce del $20\%$ rispetto al valore raggiunto. Il primo fattore è $\dfrac{6}{5}$ e il secondo è $\dfrac{4}{5}$. Poiché il secondo fattore si applica al valore intermedio, il risultato è
$$
\begin{aligned}
V_1&=100\,\mathrm{L}\cdot\frac{6}{5}=120\,\mathrm{L},\\[6pt]
V_2&=120\,\mathrm{L}\cdot\frac{4}{5}=96\,\mathrm{L}.
\end{aligned}
$$
Il secondo passo sottrae $24\,\mathrm{L}$, perché il suo valore di riferimento è $120\,\mathrm{L}$. La variazione complessiva vale $\dfrac{96-100}{100}=-\dfrac{4}{100}$, quindi il volume finale è diminuito del $4\%$.

::grafico{assi=0 uguale=1 xmin=-0.65 xmax=3.55 ymin=-0.4 ymax=4.75 vettori="-0.2,0,3.35,0;-0.2,0,-0.2,4.55" unicolore=1 punti="0,2;1.4,4;2.8,1.6" linee="0,2 1.4,4 2.8,1.6" segmenti="-0.2,1,3.1,1;-0.2,2,3.1,2;-0.2,3,3.1,3;-0.2,4,3.1,4" etichette="-0.58,0,80;-0.58,1,90;-0.62,2,100;-0.62,3,110;-0.62,4,120;-0.18,4.61,V (L);-0.10,-0.27,Inizio;1.27,-0.27,Aumento;2.52,-0.27,Diminuzione;2.94,1.58,96 L" titolo="La scala verticale parte da $80\,\mathrm{L}$. I segmenti collegano i tre volumi calcolati."}
:::

:::esempio{titolo="Diminuzione che annulla un aumento"}
Una misura passa da $40$ a $50$. L'aumento relativo è $\dfrac{50-40}{40}=\dfrac{1}{4}$, quindi l'aumento è del $25\%$. Per tornare a $40$ occorre sottrarre $10$ a partire da $50$. La diminuzione relativa è quindi $\dfrac{10}{50}=\dfrac{1}{5}$, ossia il $20\%$. In termini di fattori, $\dfrac{5}{4}\cdot\dfrac{4}{5}=1$. Per annullare un cambiamento con fattore positivo, il fattore successivo deve essere la sua reciproca.
:::

:::osservazione{titolo="Punti percentuali e variazione relativa"}
Se la percentuale in massa passa dal $10\%$ al $12\%$, la differenza è di due **punti percentuali**. Calcolata rispetto al valore iniziale, la variazione relativa della frazione è invece $\dfrac{12-10}{10}=\dfrac{1}{5}$, quindi vale il $20\%$. I punti percentuali esprimono la differenza fra i due livelli. La variazione percentuale mette la differenza in rapporto con il primo livello.
:::

:::esempio{titolo="Ricavare il valore prima di una diminuzione"}
Dopo una perdita del $15\%$ una massa vale $68\,\mathrm{g}$. Poiché il valore finale rappresenta l'$85\%$ di quello iniziale, il fattore di variazione è $\dfrac{85}{100}$. La massa iniziale è
$$
\begin{aligned}
m_0
&=68\,\mathrm{g}\cdot\frac{100}{85}\\[6pt]
&=80\,\mathrm{g}.
\end{aligned}
$$
Il controllo si esegue sulla base originaria. Il $15\%$ di $80\,\mathrm{g}$ corrisponde a $12\,\mathrm{g}$, che sottratti da $80\,\mathrm{g}$ restituiscono $68\,\mathrm{g}$. Sommare il $15\%$ a $68\,\mathrm{g}$ darebbe invece $78{,}2\,\mathrm{g}$, perché userebbe la base finale.
:::

## Medie ponderate e composizione

:::definizione{#media titolo="Media ponderata"}
Per due valori $x_1,x_2$ espressi nella stessa unità e due pesi positivi $w_1,w_2$ espressi nella stessa unità tra loro, la **media ponderata** è
$$
\overline{x}=\frac{w_1x_1+w_2x_2}{w_1+w_2}.
$$
Il peso indica quanto ciascun valore contribuisce al risultato. Se i pesi sono uguali, si ottiene la media aritmetica. Invece se un valore ha un peso triplo dell'altro, contribuisce per tre quarti alla media. L'unità della media coincide con quella dei valori, perché l'unità comune dei pesi si semplifica.
:::

:::esempio{titolo="Miscela di due soluzioni"}
Si mescolano $100\,\mathrm{mL}$ di soluzione a $2\,\mathrm{g/L}$ e $300\,\mathrm{mL}$ di soluzione dello stesso soluto a $6\,\mathrm{g/L}$. Supponiamo che i volumi siano additivi e che il soluto si conservi. Il rapporto fra i volumi è $1$ a $3$. Pertanto il primo campione è un quarto del volume finale e il secondo è tre quarti.
$$
\begin{aligned}
c_f
&=\frac{1}{4}\cdot2\,\mathrm{g/L}
  +\frac{3}{4}\cdot6\,\mathrm{g/L}\\[6pt]
&=5\,\mathrm{g/L}.
\end{aligned}
$$
La concentrazione finale è più vicina a $6\,\mathrm{g/L}$, perché quel campione ha volume maggiore. Si può anche sommare la massa di soluto dei due campioni. I volumi in litri sono $0{,}1\,\mathrm{L}$ e $0{,}3\,\mathrm{L}$, quindi le masse di soluto sono rispettivamente $0{,}2\,\mathrm{g}$ e $1{,}8\,\mathrm{g}$. Il rapporto fra $2\,\mathrm{g}$ e $0{,}4\,\mathrm{L}$ conferma il risultato.

::grafico{assi=0 uguale=1 xmin=-0.4 xmax=4.5 ymin=-0.6 ymax=2.15 poligoni="1,0 4,0 4,0.8 1,0.8" linee="0,0 4,0 4,0.8 0,0.8 0,0;1,0 1,0.8" etichette="0.48,1.17,100 mL;2.50,1.17,300 mL;0.48,0.39,2 g/L;2.50,0.39,6 g/L" titolo="Le larghezze rappresentano i volumi. La concentrazione maggiore ha peso tre volte superiore."}
:::

:::esempio{titolo="Determinare la quota di un campione"}
Si vuole una miscela di $200\,\mathrm{mL}$ a $7\,\mathrm{g/L}$ partendo da due soluzioni dello stesso soluto a $4\,\mathrm{g/L}$ e $9\,\mathrm{g/L}$. Assumiamo volumi additivi e conservazione del soluto. Sia $q$ la quota del volume finale proveniente dalla soluzione a $9\,\mathrm{g/L}$. La quota restante è $1-q$. Esprimendo le concentrazioni in grammi per litro, la media ponderata dà
$$
\begin{aligned}
7&=4(1-q)+9q\\[6pt]
 &=4+5q,\\[6pt]
q&=\frac{7-4}{9-4}=\frac{3}{5}.
\end{aligned}
$$
Servono quindi $\dfrac{3}{5}\cdot200\,\mathrm{mL}=120\,\mathrm{mL}$ della seconda soluzione e $80\,\mathrm{mL}$ della prima. La quota si legge anche sulla scala delle concentrazioni. Il bersaglio dista tre unità dalla concentrazione più bassa, lungo un intervallo di cinque unità.
:::

::::teorema{#intervallo-medie titolo="Intervallo dei valori di una media ponderata"}
Siano $x_1\le x_2$ due valori e siano $w_1,w_2$ due pesi positivi. La media ponderata appartiene all'intervallo da $x_1$ a $x_2$. Se $x_1<x_2$, la media è strettamente compresa fra i due estremi. Questa proprietà permette di escludere un risultato incompatibile con i dati di una miscela.

:::dimostrazione
Si indica con $q=\dfrac{w_2}{w_1+w_2}$ il peso relativo del secondo valore. Poiché entrambi i pesi sono positivi, $0<q<1$. Si può scrivere $\overline{x}=x_1+q(x_2-x_1)$. La differenza $x_2-x_1$ è non negativa. Il suo prodotto per $q$ è quindi compreso tra zero e la differenza stessa. Sommando $x_1$ si ottiene l'intervallo desiderato, con disuguaglianze strette se la differenza è positiva.
:::
::::

:::osservazione{titolo="Verifica della concentrazione richiesta"}
Con due soluzioni rispettivamente a $2\,\mathrm{g/L}$ e $7\,\mathrm{g/L}$, una miscela con volume positivo di entrambe ha concentrazione maggiore di $2\,\mathrm{g/L}$ e minore di $7\,\mathrm{g/L}$, sotto le ipotesi del modello. Per ottenere esattamente $7\,\mathrm{g/L}$ occorre usare soltanto il secondo campione. Il volume totale stabilisce la quantità di ciascun campione, mentre la concentrazione richiesta stabilisce il loro rapporto.
:::

:::attenzione{titolo="I pesi dipendono dalla grandezza conservata"}
La percentuale in massa di una miscela si calcola pesando con le masse dei campioni. La concentrazione in massa per volume si calcola pesando con i volumi, se sono additivi e la massa di soluto si conserva. La media aritmetica delle due concentrazioni dell'esempio sarebbe $4\,\mathrm{g/L}$, quindi darebbe un valore diverso da $5\,\mathrm{g/L}$. In quel calcolo si attribuirebbe lo stesso peso a campioni con volumi differenti.
:::
