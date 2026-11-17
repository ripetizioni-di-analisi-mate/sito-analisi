---
titolo: "Grandezze fisiche e unità di misura"
sommario: "Misure nel SI, fattori di conversione, notazione scientifica e controllo dimensionale delle formule."
---

Una misura dà un numero e una unità. Le due informazioni permettono di confrontare letture dello stesso oggetto, combinare misure diverse e controllare le formule usate per ottenere un risultato.

## Grandezze e Sistema Internazionale

:::definizione{#si titolo="Valore numerico e unità"}
Una **grandezza fisica** è una proprietà che si può misurare. Per esprimere una misura si stabilisce una unità e si determina quante volte quella unità è contenuta nella grandezza misurata. In $l=2{,}4\,\mathrm m$, il simbolo $l$ indica la lunghezza, il numero $2{,}4$ dà il suo valore quando si sceglie il metro e $\mathrm m$ identifica l'unità. Il solo numero $2{,}4$ sarebbe compatibile con lunghezze molto diverse, come $2{,}4\,\mathrm{cm}$ o $2{,}4\,\mathrm{km}$.
:::

:::osservazione{#unita-base titolo="Unità di base e unità derivate"}
In questo corso si usano spesso tre unità di base del Sistema Internazionale. Sono il metro per la lunghezza, il chilogrammo per la massa e il secondo per il tempo. Le altre unità di base riguardano corrente elettrica, temperatura termodinamica, quantità di sostanza e intensità luminosa. Un'unità **derivata** si costruisce combinando unità di base. Per esempio, una velocità media relativa a un tratto percorso si misura in metri al secondo, perché si divide la lunghezza del tratto per il tempo impiegato.
:::

:::esempio{titolo="Leggere una bilancia"}
Una lettura di $0{,}350\,\mathrm{kg}$ descrive la massa di un oggetto. Il chilogrammo è l'unità di base della massa e l'ultima cifra indicata dalla bilancia riguarda la lettura che lo strumento fornisce. Se l'oggetto passa su un pianeta con un diverso campo gravitazionale, la sua massa resta la stessa e la sua forza peso cambia. La forza peso si misura in newton. Le due quantità si distinguono quindi anche dall'unità.
:::

:::osservazione{#simboli titolo="Come si scrivono i simboli"}
In $7\,\mathrm{km}$ c'è uno spazio tra il numero e il simbolo dell'unità e le lettere del simbolo restano unite. Il simbolo resta uguale con valori singolari e plurali. Le maiuscole contano: $\mathrm{mL}$ significa millilitro, mentre la lettera minuscola in $\mathrm m$ indica il metro. Uno spazio o un punto di moltiplicazione tra simboli indica invece un prodotto. Perciò $\mathrm{ms}$ indica un millisecondo e $\mathrm{m\,s}$ il prodotto di un metro e un secondo.
:::

## Prefissi e conversioni lineari

:::definizione{#prefissi titolo="Multipli e sottomultipli"}
Un **prefisso** indica una potenza di dieci che moltiplica l'unità. Chilo ($\mathrm k$) vale $10^3$, deci ($\mathrm d$) vale $10^{-1}$, centi ($\mathrm c$) vale $10^{-2}$, milli ($\mathrm m$) vale $10^{-3}$ e micro ($\mathrm{\mu}$) vale $10^{-6}$. Si parte sempre dal simbolo intero. Per esempio, in $\mathrm{mm}$ la prima lettera significa milli, mentre la seconda significa metro. In un millimetro è contenuto un millesimo di metro.
:::

::::teorema{#fattore-conversione titolo="Conversione mediante un rapporto unitario"}
Se $1\,U=c\,W$, il valore numerico di una grandezza espresso in $W$ è il suo valore in $U$ moltiplicato per $c$. Nel passaggio da $W$ a $U$ si usa il fattore reciproco $\dfrac{1}{c}$.

:::dimostrazione
Le due scritture $1\,U$ e $c\,W$ indicano la stessa quantità, quindi il loro rapporto è uno. Sostituire $c\,W$ a $1\,U$ in $a\,U$ dà $a\cdot c\,W$. Per il passaggio inverso si divide entrambi i membri dell'uguaglianza $1\,U=c\,W$ per $c$. Questo dà il valore di $1\,W$ espresso in $U$.
:::
::::

:::esempio{titolo="Misurare la stessa lunghezza su due scale"}
Una striscia di $250\,\mathrm{cm}$ misura $2{,}5\,\mathrm m$. Per controllare il verso della conversione si pensa alla scala: il metro è più grande di un centimetro, quindi occorrono meno unità per coprire la stessa striscia. Al contrario, esprimerla in millimetri aumenta il numero a $2500$. Il prodotto $2{,}5\cdot1000$ dà i millimetri a partire dalla scrittura in metri.
:::

::grafico{f="0.01*x" xmin=0 xmax=300 ymin=0 ymax=3.1 punti="250,2.5,pieno,A" nomi="l (cm),l (m)" titolo="Letture della stessa lunghezza in centimetri e in metri"}

## Superfici e volumi

::::teorema{#superfici-volumi titolo="Elevare anche il fattore di conversione"}
Per ricavare un'area si moltiplicano due lunghezze e per ricavare un volume se ne moltiplicano tre. Poiché $1\,\mathrm{cm}=10^{-2}\,\mathrm m$, si ottiene $1\,\mathrm{cm}^2=10^{-4}\,\mathrm m^2$ e $1\,\mathrm{cm}^3=10^{-6}\,\mathrm m^3$.

:::dimostrazione
In $1\,\mathrm{cm}^2$ si moltiplicano due lati di un centimetro. Sostituendo $10^{-2}\,\mathrm m$ a ogni lato si ottiene $10^{-2}\cdot10^{-2}\,\mathrm m^2$. Nel volume si ripete la stessa operazione con il terzo lato. Le potenze di dieci si combinano sommando i loro esponenti, quindi gli esponenti finali sono rispettivamente $-4$ e $-6$.
:::
::::

:::esempio{titolo="Due modi di calcolare un'area"}
Un foglio rettangolare misura $20\,\mathrm{cm}$ per $15\,\mathrm{cm}$. Un primo metodo calcola $A=300\,\mathrm{cm}^2$ e usa il fattore $10^{-4}$ per ottenere $0{,}0300\,\mathrm m^2$. Un secondo metodo converte separatamente i lati in $0{,}20\,\mathrm m$ e $0{,}15\,\mathrm m$. Il loro prodotto dà lo stesso valore. L'accordo verifica che il fattore abbia agito su entrambe le dimensioni del rettangolo.
:::

::grafico{assi=0 uguale=1 xmin=-3 xmax=24 ymin=-4 ymax=20 poligoni="0,0 20,0 20,15 0,15" etichette="10,-1.7,20 cm;22.1,7.5,15 cm;9.3,7.5,300 cm²" titolo="L'area si ricava dal prodotto dei due lati misurati nella stessa unità"}

:::definizione{#capacita titolo="Litri e unità cubiche"}
Il **litro** è uguale a un decimetro cubo. Poiché $1\,\mathrm{dm}=0{,}1\,\mathrm m$, segue che $1\,\mathrm L=10^{-3}\,\mathrm m^3$. Il millilitro è un millesimo di litro e corrisponde esattamente a un centimetro cubo. Vale quindi $250\,\mathrm{mL}=250\,\mathrm{cm}^3=0{,}250\,\mathrm L$. Queste uguaglianze permettono di confrontare una lettura di capacità fatta con un recipiente graduato e il volume geometrico di un oggetto.
:::

::grafico{f="x" xmin=0 xmax=400 ymin=0 ymax=400 punti="250,250,pieno,A" nomi="V (mL),V (cm³)" titolo="La stessa lettura ha lo stesso valore numerico in millilitri e in centimetri cubi"}

## Intervalli di tempo

:::osservazione{#tempo titolo="Ore, minuti e secondi"}
Un minuto contiene $60\,\mathrm s$ e un'ora contiene $60\,\mathrm{min}$, perciò $1\,\mathrm h=3600\,\mathrm s$. Quando una durata contiene ore e minuti, si moltiplica il numero delle ore per $3600$ e quello dei minuti per $60$. I due risultati sono secondi e si possono sommare. Il prefisso milli segue la scala decimale. Perciò $1\,\mathrm{ms}=10^{-3}\,\mathrm s$ e un secondo contiene mille millisecondi.
:::

:::esempio{titolo="Frazioni di ora e letture dell'orologio"}
Il tempo $1{,}25\,\mathrm h$ contiene un'ora e un quarto di ora. Poiché $0{,}25\cdot60=15$, la durata è di un'ora e quindici minuti. Una lettura come 1 h 25 min rappresenta invece $60+25=85\,\mathrm{min}$. La parte dopo il separatore decimale nella scrittura $1{,}25\,\mathrm h$ misura una frazione di ora, mentre un orologio può riportare ore e minuti separati.
:::

::grafico{assi=0 xmin=-5 xmax=100 ymin=-1 ymax=2 segmenti="0,0,60,0;60,0,75,0;75,0,85,0" punti="0,0;60,0;75,0;85,0" etichette="30,0.4,1 ora;66.8,0.7,15 min;80.4,-0.42,10 min" titolo="Un quarto di ora porta a 75 minuti. Con 25 minuti aggiunti si arriva a 85"}

## Notazione scientifica

:::definizione{#scientifica titolo="Separare coefficiente e potenza di dieci"}
Un numero diverso da zero in **notazione scientifica normalizzata** ha forma $a\cdot10^n$, con $1\leq \lvert a\rvert<10$ e $n$ intero. Per esempio $42000=4{,}2\cdot10^4$ e $0{,}00042=4{,}2\cdot10^{-4}$. Il coefficiente dà le cifre significative conservate nella scrittura e la potenza di dieci ne colloca la virgola. Se il numero è negativo, il coefficiente è negativo e la potenza resta positiva come moltiplicatore.
:::

:::osservazione{#calcoli-decimali titolo="Prodotti, rapporti e somme"}
Per moltiplicare due numeri in notazione scientifica si moltiplicano i coefficienti e si sommano gli esponenti. Per dividerli si dividono i coefficienti e si sottraggono gli esponenti. Se il coefficiente esce dall'intervallo di normalizzazione, si sposta la virgola e si compensa nell'esponente. Per sommare due numeri si riscrivono prima con la stessa potenza di dieci. In questo modo la somma dei coefficienti combina quantità espresse nella medesima scala.
:::

:::esempio{titolo="Un esponente comune"}
Per sommare $3{,}4\cdot10^4$ e $8\cdot10^2$, si esprime il secondo numero come $0{,}08\cdot10^4$. La somma dei coefficienti è $3{,}4+0{,}08=3{,}48$, quindi il risultato è $3{,}48\cdot10^4$. Si può controllare l'ordine di grandezza: il secondo addendo è molto più piccolo del primo e il risultato rimane vicino a $3{,}4\cdot10^4$.
:::

## Unità derivate e dimensioni

:::definizione{#dimensioni titolo="Le unità seguono le operazioni"}
La **dimensione** descrive il tipo di grandezza indipendentemente dalla scelta dell'unità. Un'area ha dimensione di lunghezza al quadrato, in metri quadrati come in centimetri quadrati. Una velocità ha dimensione di lunghezza divisa per tempo, sia in metri al secondo sia in chilometri all'ora. Nel rapporto tra una massa in chilogrammi e un volume in metri cubi le unità danno $\mathrm{kg/m^3}$. Questo è il modo di ricavare l'unità SI della densità.
:::

:::esempio{#unit-composte titolo="Una velocità con un numeratore e un denominatore"}
Per convertire $72\,\mathrm{km/h}$ si sostituisce al chilometro $1000\,\mathrm m$ e all'ora $3600\,\mathrm s$. Si ottiene $\dfrac{72\cdot1000}{3600}\,\mathrm{m/s}=20\,\mathrm{m/s}$. Il fattore dell'ora va al denominatore perché l'ora vi compariva in partenza. Come controllo, un moto a $20\,\mathrm{m/s}$ percorre $20\cdot3600=72000\,\mathrm m$ in un'ora.
:::

:::attenzione{#test-dimensionale titolo="Una condizione necessaria"}
Un'uguaglianza fisica può valere solo se i due membri hanno la stessa dimensione. Per un'area è quindi da escludere una formula come $A=b+h$, dove $b$ e $h$ sono lunghezze. La formula $A=2bh$ ha invece la dimensione di un'area, ma per un rettangolo risulterebbe il doppio del valore corretto. Il controllo dimensionale fa emergere errori nella struttura; la geometria o la legge fisica stabilisce anche il fattore numerico.
:::

## Somme e confronti

:::osservazione{#confronti titolo="Prima una stessa unità"}
Due misure della stessa grandezza si possono sommare o confrontare direttamente quando sono espresse nella stessa unità. Per aggiungere $35\,\mathrm{cm}$ a $2\,\mathrm m$, si convertono i centimetri in $0{,}35\,\mathrm m$. La somma è $2{,}35\,\mathrm m$. Nei rapporti tra grandezze omogenee le unità si cancellano dopo la conversione. Per esempio, $50\,\mathrm{cm}$ è un quarto di $2\,\mathrm m$, perché in metri il rapporto è $\dfrac{0{,}5}{2}$.
:::

:::esempio{titolo="Dalla misura alla porzione utilizzata"}
Da un rotolo lungo $3\,\mathrm m$ si tagliano prima $70\,\mathrm{cm}$ e poi $800\,\mathrm{mm}$. Entrambi i tagli rappresentano lunghezze. In metri valgono $0{,}70$ e $0{,}80$, quindi la parte usata è $1{,}50\,\mathrm m$. La parte rimasta è $1{,}50\,\mathrm m$, ossia metà del rotolo. La divisione per la lunghezza iniziale dà una frazione adimensionale e il fattore cento la esprime come percentuale.
:::

::grafico{assi=0 xmin=-0.1 xmax=3.2 ymin=-0.8 ymax=2 segmenti="0,0,0.7,0;0.7,0,1.5,0;1.5,0,3,0" punti="0,0;0.7,0;1.5,0;3,0" etichette="0.37,0.38,70 cm;1.1,0.38,800 mm;2.24,0.38,1.50 m rimasti" titolo="Due tagli e il tratto rimanente, rappresentati tutti sulla scala in metri"}
