---
titolo: "Grandezze fisiche e unità di misura"
sommario: "Misure nel SI, fattori di conversione, notazione scientifica e controllo dimensionale delle formule."
---

Una misura è formata da un numero e da una unità, come in $2{,}4\,\mathrm m$. In questo capitolo si vede come si scrive una misura, come si passa da una unità a un'altra (per esempio da $250\,\mathrm{cm}$ a $2{,}5\,\mathrm m$) e come le unità servono a controllare una formula.

## Grandezze e Sistema Internazionale

:::definizione{#si titolo="Valore numerico e unità"}
Una **grandezza fisica** è una proprietà di un oggetto o di un fenomeno che si può misurare. La lunghezza di un tavolo e la durata di una lezione sono grandezze fisiche. **Misurare** significa confrontare la grandezza con una **unità di misura**, cioè con una quantità di riferimento uguale per tutti, e contare quante volte l'unità è contenuta nella grandezza. Un tavolo è lungo $2{,}4$ metri quando il metro è contenuto nella sua lunghezza due volte intere, più quattro decimi di metro.

Il risultato si scrive $l=2{,}4\,\mathrm m$. In questa scrittura:

- $l$ è la lettera scelta per indicare la lunghezza;
- $2{,}4$ è il **valore numerico**, cioè quante volte l'unità è contenuta nella grandezza;
- $\mathrm m$ è il simbolo dell'unità, che qui è il metro.

Il numero $2{,}4$ scritto da solo lascia indeterminata la lunghezza, perché $2{,}4\,\mathrm{cm}$ e $2{,}4\,\mathrm{km}$ sono lunghezze molto diverse. Cambiando unità cambia il valore numerico, mentre la lunghezza resta la stessa.
:::

:::osservazione{#unita-base titolo="Unità di base e unità derivate"}
Il **Sistema Internazionale** (sigla **SI**) è l'insieme di unità di misura adottato nella scienza e in quasi tutti i paesi. Il SI fissa sette **unità di base**, una per ciascuna di sette grandezze. In questo corso se ne usano spesso tre:

- il metro (simbolo $\mathrm m$) per la lunghezza;
- il chilogrammo (simbolo $\mathrm{kg}$) per la massa, cioè per la quantità di materia di un corpo;
- il secondo (simbolo $\mathrm s$) per il tempo.

Le altre quattro unità di base riguardano la corrente elettrica (ampere), la temperatura termodinamica, cioè la temperatura misurata in kelvin, la quantità di sostanza (mole) e l'intensità luminosa (candela).

Un'unità **derivata** si costruisce moltiplicando o dividendo fra loro unità di base. Per esempio, la velocità media su un tratto di strada è la lunghezza del tratto divisa per il tempo impiegato a percorrerlo. Con $100\,\mathrm m$ percorsi in $20\,\mathrm s$ si calcola
$$
\frac{100\,\mathrm m}{20\,\mathrm s}=5\,\mathrm{m/s}.
$$
L'unità $\mathrm{m/s}$ si legge «metri al secondo» ed è derivata, perché è il metro diviso per il secondo.
:::

:::esempio{titolo="Leggere una bilancia"}
Una bilancia indica $0{,}350\,\mathrm{kg}$. Questa lettura è la **massa** dell'oggetto e il chilogrammo è l'unità di base della massa. L'ultima cifra indicata dalla bilancia è quella dei millesimi di chilogrammo, cioè dei grammi.

La **forza peso** è la forza con cui un pianeta attira l'oggetto verso il proprio centro e si misura in **newton** (simbolo $\mathrm N$). Il **campo gravitazionale** di un pianeta indica con quanta forza il pianeta attira ogni chilogrammo di massa. Se l'oggetto viene portato su un pianeta con un diverso campo gravitazionale, la sua massa resta $0{,}350\,\mathrm{kg}$ e la sua forza peso cambia. Le due grandezze si distinguono quindi anche dall'unità.
:::

:::osservazione{#simboli titolo="Come si scrivono i simboli"}
Una misura si scrive con il numero, uno spazio e il simbolo dell'unità, come in $7\,\mathrm{km}$. Le lettere di uno stesso simbolo restano unite. Il simbolo è lo stesso al singolare e al plurale, quindi si scrive $1\,\mathrm{km}$ e $7\,\mathrm{km}$.

Maiuscole e minuscole indicano cose diverse. In $\mathrm{mL}$, che significa millilitro, la L maiuscola indica il litro, mentre la lettera minuscola in $\mathrm m$ indica il metro.

Uno spazio o un punto di moltiplicazione tra due simboli indica un prodotto di unità. Perciò $\mathrm{ms}$ indica un millisecondo, cioè un millesimo di secondo, e $\mathrm{m\,s}$ indica il prodotto di un metro per un secondo.
:::

## Prefissi e conversioni lineari

:::definizione{#prefissi titolo="Multipli e sottomultipli"}
Una **potenza di dieci** è un prodotto di fattori tutti uguali a $10$. L'**esponente**, scritto in alto a destra, indica quanti sono i fattori. Per esempio $10^3=10\cdot10\cdot10=1000$. Con un esponente negativo si divide $1$ per la potenza con l'esponente positivo, quindi $10^{-2}=\dfrac{1}{10^2}=\dfrac{1}{100}=0{,}01$.

Un **prefisso** è una parte di parola messa davanti al nome di un'unità. Il prefisso indica una potenza di dieci che moltiplica l'unità. Si ottiene un **multiplo** quando la nuova unità è più grande di quella di partenza e un **sottomultiplo** quando è più piccola.

| Prefisso | Simbolo | Vale | Esempio con il metro |
| --- | --- | --- | --- |
| chilo | $\mathrm k$ | $10^3=1000$ | $1\,\mathrm{km}=1000\,\mathrm m$ |
| deci | $\mathrm d$ | $10^{-1}=0{,}1$ | $1\,\mathrm{dm}=0{,}1\,\mathrm m$ |
| centi | $\mathrm c$ | $10^{-2}=0{,}01$ | $1\,\mathrm{cm}=0{,}01\,\mathrm m$ |
| milli | $\mathrm m$ | $10^{-3}=0{,}001$ | $1\,\mathrm{mm}=0{,}001\,\mathrm m$ |
| micro | $\mathrm{\mu}$ | $10^{-6}=0{,}000001$ | $1\,\mathrm{\mu m}=0{,}000001\,\mathrm m$ |

Il simbolo $\mathrm{\mu}$ è la lettera greca «mi». Un simbolo si legge per intero. La prima lettera è il prefisso e il resto è l'unità. Per esempio, in $\mathrm{mm}$ la prima lettera significa milli, mentre la seconda significa metro. In un millimetro è contenuto un millesimo di metro.

Lo stesso prefisso si applica a ogni unità. Davanti al grammo (simbolo $\mathrm g$) il prefisso chilo dà il chilogrammo, quindi $1\,\mathrm{kg}=1000\,\mathrm g$. Una massa di $700\,\mathrm g$ vale perciò $\dfrac{700}{1000}\,\mathrm{kg}=0{,}7\,\mathrm{kg}$.
:::

::::teorema{#fattore-conversione titolo="Conversione mediante un rapporto unitario"}
Un metro contiene cento centimetri, cioè $1\,\mathrm m=100\,\mathrm{cm}$. Una lunghezza di $2{,}5\,\mathrm m$ è formata da $2{,}5$ tratti da $100\,\mathrm{cm}$, quindi vale $2{,}5\cdot100\,\mathrm{cm}=250\,\mathrm{cm}$. Nel verso opposto si divide per $100$.

Siano $U$ e $W$ due unità della stessa grandezza e sia $c$ il numero di unità $W$ contenute in una unità $U$. Se $1\,U=c\,W$, il valore numerico di una grandezza espresso in $W$ è il suo valore in $U$ moltiplicato per $c$. Nel passaggio da $W$ a $U$ si usa il fattore **reciproco** $\dfrac{1}{c}$, cioè si divide per $c$. Il numero $c$ è il **fattore di conversione**. Nell'esempio $U$ è il metro, $W$ è il centimetro e $c=100$.

Un **rapporto** è il risultato di una divisione. La frazione $\dfrac{100\,\mathrm{cm}}{1\,\mathrm m}$ ha al numeratore e al denominatore la stessa lunghezza, quindi vale uno e si chiama **rapporto unitario**. Moltiplicando una misura per un rapporto unitario la grandezza resta la stessa e cambia l'unità in cui è scritta.
$$
2{,}5\,\mathrm m\cdot\frac{100\,\mathrm{cm}}{1\,\mathrm m}=250\,\mathrm{cm}.
$$
Il metro si semplifica e resta il centimetro.

:::dimostrazione
Le due scritture $1\,U$ e $c\,W$ indicano la stessa quantità, quindi il loro rapporto è uno. Una misura $a\,U$ è formata da $a$ unità $U$. Sostituire $c\,W$ a $1\,U$ in $a\,U$ dà $a\cdot c\,W$, quindi il valore numerico in $W$ è $a\cdot c$. Per il passaggio inverso si dividono per $c$ entrambi i **membri** dell'uguaglianza $1\,U=c\,W$, cioè le due espressioni a sinistra e a destra del segno di uguale. Si ottiene $1\,W=\dfrac{1}{c}\,U$, che è il valore di $1\,W$ espresso in $U$.
:::
::::

:::esempio{titolo="Misurare la stessa lunghezza su due scale"}
Una striscia di $250\,\mathrm{cm}$ misura $2{,}5\,\mathrm m$, perché $250\cdot\dfrac{1}{100}=2{,}5$. Il verso della conversione si controlla confrontando le due unità. Il metro è più grande del centimetro, quindi per coprire la stessa striscia occorrono meno metri che centimetri e il numero diminuisce.

Il millimetro è invece più piccolo del metro. Un metro contiene $1000\,\mathrm{mm}$, quindi il prodotto $2{,}5\cdot1000$ dà i millimetri a partire dalla scrittura in metri. La striscia misura $2500\,\mathrm{mm}$ e il numero aumenta. Nel grafico il punto A rappresenta la striscia.
:::

::grafico{f="0.01*x" xmin=0 xmax=300 ymin=0 ymax=3.1 punti="250,2.5,pieno,A" nomi="l (cm),l (m)" titolo="Letture della stessa lunghezza in centimetri e in metri"}

:::osservazione{#catena-unita titolo="Controllare una catena di conversioni"}
Una **catena di conversioni** è una conversione eseguita in più passaggi, con un rapporto unitario per ogni passaggio. La scelta dei fattori si verifica sulle unità, prima del calcolo. Per esempio, un calibro, cioè uno strumento per misurare piccoli spessori, dà $\ell=350\,\mathrm{\mu m}$. Il simbolo $\ell$ è una elle corsiva e indica una lunghezza. Il risultato deve entrare in una tabella in centimetri. Si usano di seguito due rapporti unitari, ricavati da $1\,\mathrm{mm}=1000\,\mathrm{\mu m}$ e da $1\,\mathrm{cm}=10\,\mathrm{mm}$.
$$
\begin{aligned}
\ell
&=350\,\mathrm{\mu m}\cdot\dfrac{1\,\mathrm{mm}}{1000\,\mathrm{\mu m}}\\
&=0{,}350\,\mathrm{mm}\cdot\dfrac{1\,\mathrm{cm}}{10\,\mathrm{mm}}\\
&=0{,}0350\,\mathrm{cm}.
\end{aligned}
$$
A ogni passaggio l'unità in ingresso compare anche nel denominatore, quindi si semplifica. Alla fine resta soltanto il centimetro, che è l'unità richiesta.

Il calcolo si ripete in un solo passaggio osservando che un centimetro contiene $10\cdot1000=10000$ micrometri. Dividendo $350$ per $10000$ si ritrova $0{,}0350$. Il centimetro è più grande del micrometro, perciò nella tabella in centimetri il numero è più piccolo che nella colonna in micrometri. Lo schema riporta i tre valori e le due divisioni.

::grafico{assi=0 xmin=-1.2 xmax=22.4 ymin=-1.3 ymax=2.5 vettori="3.2,0,7.8,0,;12.3,0,17.0,0," punti="1,0,pieno;10,0,pieno;19.5,0,pieno" etichette="1,0.60,350 µm;10,0.60,0,350 mm;19.5,0.60,0,0350 cm;5.5,-0.60,÷ 1000;14.5,-0.60,÷ 10" titolo="Il valore numerico diminuisce mentre l’unità scelta aumenta"}

Nel quaderno di una prova di laboratorio la stessa grandezza compare con unità adatte a strumenti diversi. Prima di copiare un dato nella colonna richiesta, si riconosce il tipo di unità, perché da esso dipende il fattore:

- un'unità **lineare** misura una lunghezza, come $\mathrm{cm}$;
- un'unità **quadrata** misura un'area, come $\mathrm{cm}^2$ (centimetro quadrato);
- un'unità **cubica** misura un volume, come $\mathrm{cm}^3$ (centimetro cubo);
- un'unità è un **rapporto** quando è una divisione fra due unità, come $\mathrm{m/min}$ (metri al minuto).

La tabella applica tale scelta a quattro misure che richiedono fattori diversi.

| Dato letto | Passaggio da eseguire | Valore nella colonna di arrivo |
| --- | --- | --- |
| $350\,\mathrm{\mu m}$ | Un centimetro contiene $10000$ micrometri. | $0{,}0350\,\mathrm{cm}$ |
| $3\,\mathrm{cm}^2$ | Un centimetro vale $10^{-2}\,\mathrm m$ in ciascuna delle due direzioni. | $3\cdot10^{-4}\,\mathrm m^2$ |
| $40\,\mathrm{mL}$ | Ogni millilitro vale un centimetro cubo, cioè $10^{-6}\,\mathrm m^3$. | $4\cdot10^{-5}\,\mathrm m^3$ |
| $360\,\mathrm{m/min}$ | Gli stessi $360\,\mathrm m$ sono percorsi in $60\,\mathrm s$. | $6\,\mathrm{m/s}$ |

Nell'ultima riga il metro è già l'unità richiesta per il numeratore. La conversione riguarda il minuto al denominatore. Un minuto è formato da sessanta secondi, quindi in un secondo si percorre la sessantesima parte dei $360\,\mathrm m$, cioè $\dfrac{360}{60}=6$ metri. Il numero diminuisce perché l'intervallo di riferimento è ora una sola delle sessanta parti in cui si divide il minuto.
:::

## Superfici e volumi

::::teorema{#superfici-volumi titolo="Elevare anche il fattore di conversione"}
Per ricavare un'area si moltiplicano due lunghezze e per ricavare un volume se ne moltiplicano tre. Poiché $1\,\mathrm{cm}=10^{-2}\,\mathrm m$, si ottiene $1\,\mathrm{cm}^2=10^{-4}\,\mathrm m^2$ e $1\,\mathrm{cm}^3=10^{-6}\,\mathrm m^3$.

Il centimetro quadrato $\mathrm{cm}^2$ è l'area di un quadrato con il lato di un centimetro. Il centimetro cubo $\mathrm{cm}^3$ è il volume di un cubo con lo spigolo di un centimetro. Per esempio, un cartoncino di $50\,\mathrm{cm}^2$ ha area
$$
50\cdot10^{-4}\,\mathrm m^2=\frac{50}{10000}\,\mathrm m^2=0{,}005\,\mathrm m^2.
$$
Nel verso opposto, $1\,\mathrm m^2=100\cdot100\,\mathrm{cm}^2=10000\,\mathrm{cm}^2$.

:::dimostrazione
In $1\,\mathrm{cm}^2$ si moltiplicano due lati di un centimetro. Sostituendo $10^{-2}\,\mathrm m$ a ogni lato si ottiene $10^{-2}\cdot10^{-2}\,\mathrm m^2$. Le potenze di dieci si moltiplicano sommando i loro esponenti, quindi $10^{-2}\cdot10^{-2}=10^{-2-2}=10^{-4}$. Nel volume si ripete la stessa operazione con il terzo lato e si ottiene $10^{-2}\cdot10^{-2}\cdot10^{-2}=10^{-6}$. Gli esponenti finali sono quindi rispettivamente $-4$ e $-6$.
:::
::::

:::esempio{titolo="Due modi di calcolare un'area"}
Un foglio rettangolare misura $20\,\mathrm{cm}$ per $15\,\mathrm{cm}$. La sua area in metri quadrati si calcola in due modi.

- Un primo metodo calcola l'area in centimetri quadrati, $A=20\,\mathrm{cm}\cdot15\,\mathrm{cm}=300\,\mathrm{cm}^2$, e usa il fattore $10^{-4}$ per ottenere $300\cdot10^{-4}\,\mathrm m^2=0{,}0300\,\mathrm m^2$.
- Un secondo metodo converte separatamente i lati in $0{,}20\,\mathrm m$ e $0{,}15\,\mathrm m$. Il loro prodotto è $0{,}20\cdot0{,}15=0{,}0300$, quindi dà lo stesso valore in metri quadrati.

L'accordo fra i due risultati verifica che il fattore ha agito su entrambi i lati del rettangolo.
:::

::grafico{assi=0 uguale=1 xmin=-3 xmax=24 ymin=-4 ymax=20 poligoni="0,0 20,0 20,15 0,15" etichette="10,-1.7,20 cm;22.1,7.5,15 cm;9.3,7.5,300 cm²" titolo="L'area si ricava dal prodotto dei due lati misurati nella stessa unità"}

:::definizione{#capacita titolo="Litri e unità cubiche"}
La **capacità** di un recipiente è il volume che il recipiente contiene quando è pieno. Il **litro** (simbolo $\mathrm L$) è uguale a un decimetro cubo, cioè al volume di un cubo con lo spigolo di un decimetro. Poiché $1\,\mathrm{dm}=0{,}1\,\mathrm m$, un decimetro cubo vale $0{,}1\cdot0{,}1\cdot0{,}1\,\mathrm m^3=0{,}001\,\mathrm m^3$. Segue che $1\,\mathrm L=10^{-3}\,\mathrm m^3$ e che un metro cubo contiene $1000$ litri.

Il **millilitro** (simbolo $\mathrm{mL}$) è un millesimo di litro. Un decimetro contiene $10\,\mathrm{cm}$, quindi un litro vale $10\cdot10\cdot10\,\mathrm{cm}^3=1000\,\mathrm{cm}^3$. Il millilitro è la millesima parte di questo volume, perciò corrisponde esattamente a un centimetro cubo. Vale quindi $250\,\mathrm{mL}=250\,\mathrm{cm}^3=0{,}250\,\mathrm L$.

Con queste uguaglianze si confronta una lettura di capacità fatta con un recipiente graduato, cioè con le tacche dei millilitri, e il volume geometrico di un oggetto, calcolato dalle sue misure. Nel grafico il punto A ha lo stesso valore sui due assi.
:::

::grafico{f="x" xmin=0 xmax=400 ymin=0 ymax=400 punti="250,250,pieno,A" nomi="V (mL),V (cm³)" titolo="La stessa lettura ha lo stesso valore numerico in millilitri e in centimetri cubi"}

:::esempio{#capienza-gradini titolo="Una vasca con due sezioni"}
La **sezione** orizzontale della vasca è la figura che si ottiene tagliandola con un piano orizzontale. La **quota** è l'altezza misurata dal fondo. L'area della sezione è $300\,\mathrm{cm}^2$ per i primi $5\,\mathrm{cm}$ di altezza e $500\,\mathrm{cm}^2$ a quote superiori. Vi si versano $2{,}5\,\mathrm L$ d'acqua, cioè $2500\,\mathrm{cm}^3$, e si cerca il livello $h$ raggiunto dall'acqua.

In un tratto in cui la sezione è la stessa a ogni quota, il volume è l'area della sezione moltiplicata per l'altezza del tratto. Per scegliere l'area con cui calcolare il livello, si cerca prima il volume $V_1$ necessario a riempire il tratto inferiore. Il volume rimanente $V_2$ occupa il tratto superiore fino a un'altezza $h_2$, che si ottiene dividendo $V_2$ per l'area superiore.
$$
\begin{aligned}
V_1 &= (300\,\mathrm{cm}^2)(5\,\mathrm{cm})=1500\,\mathrm{cm}^3,\\
V_2 &= 2500\,\mathrm{cm}^3-1500\,\mathrm{cm}^3=1000\,\mathrm{cm}^3,\\
h_2 &= \dfrac{1000\,\mathrm{cm}^3}{500\,\mathrm{cm}^2}=2\,\mathrm{cm}.
\end{aligned}
$$
Il livello finale è quindi $h=5\,\mathrm{cm}+2\,\mathrm{cm}=7\,\mathrm{cm}$. Il primo volume è più piccolo di quello versato, perciò l'acqua raggiunge davvero la sezione superiore.

Il prodotto di una sola area per l'intera altezza sarebbe valido solo se la vasca avesse la stessa sezione a ogni quota. Il controllo cambia se il volume totale è inferiore a $1500\,\mathrm{cm}^3$, perché in quel caso interviene soltanto l'area della prima sezione.

Il grafico riporta il volume contenuto, in litri, per ogni livello. Fino a $5\,\mathrm{cm}$ ogni centimetro di livello corrisponde a $0{,}3\,\mathrm L$ e più in alto a $0{,}5\,\mathrm L$, quindi la linea sale più rapidamente, cioè ha una **pendenza** maggiore.
:::

::grafico{linee="0,0 5,1.5 9,3.5" punti="5,1.5,pieno;7,2.5,pieno" xmin=0 xmax=10 ymin=0 ymax=4 nomi="h (cm),V (L)" titolo="La pendenza cambia dopo 5 cm perché la sezione della vasca aumenta"}

## Intervalli di tempo

:::osservazione{#tempo titolo="Ore, minuti e secondi"}
I simboli dell'ora, del minuto e del secondo sono $\mathrm h$, $\mathrm{min}$ e $\mathrm s$. Un minuto contiene $60\,\mathrm s$ e un'ora contiene $60\,\mathrm{min}$, perciò $1\,\mathrm h=60\cdot60\,\mathrm s=3600\,\mathrm s$.

Quando una durata contiene ore e minuti, si moltiplica il numero delle ore per $3600$ e quello dei minuti per $60$. I due risultati sono secondi e si sommano. Per esempio, una durata di 2 ore e 15 minuti vale
$$
2\cdot3600\,\mathrm s+15\cdot60\,\mathrm s=7200\,\mathrm s+900\,\mathrm s=8100\,\mathrm s.
$$
Ore e minuti procedono di sessanta in sessanta, mentre i prefissi seguono la scala decimale, cioè le potenze di dieci. Perciò $1\,\mathrm{ms}=10^{-3}\,\mathrm s$ e un secondo contiene mille millisecondi.
:::

:::esempio{titolo="Frazioni di ora e letture dell'orologio"}
Il tempo $1{,}25\,\mathrm h$ contiene un'ora e $0{,}25$ ore. Il numero $0{,}25$ è uguale a $\dfrac{25}{100}=\dfrac14$, quindi $0{,}25$ ore sono un quarto di ora. Poiché $0{,}25\cdot60=15$, la durata è di un'ora e quindici minuti, cioè di $60+15=75\,\mathrm{min}$.

Una lettura come 1 h 25 min rappresenta invece $60+25=85\,\mathrm{min}$. La parte dopo la virgola nella scrittura $1{,}25\,\mathrm h$ misura una frazione di ora in centesimi, mentre un orologio riporta ore e minuti separati e ogni minuto è un sessantesimo di ora.
:::

::grafico{assi=0 xmin=-5 xmax=100 ymin=-1 ymax=2 segmenti="0,0,60,0;60,0,75,0;75,0,85,0" punti="0,0;60,0;75,0;85,0" etichette="30,0.4,1 ora;66.8,0.7,15 min;80.4,-0.42,10 min" titolo="Un quarto di ora porta a 75 minuti. Con 25 minuti aggiunti si arriva a 85"}

:::esempio{#tempo-campioni titolo="Letture e intervalli fra le letture"}
Un sensore è uno strumento che registra misure in modo automatico. Il sensore salva una lettura all'avvio e un'altra ogni $250\,\mathrm{ms}$. L'ultima lettura salvata è la tredicesima.

Si indica con $n$ il numero d'ordine di una lettura e con $t_n$ l'istante in cui viene salvata, contato dall'avvio. La prima cade a $t_1=0$, la seconda a $t_2=250\,\mathrm{ms}$ e la terza a $t_3=500\,\mathrm{ms}$. Ogni lettura segue la precedente dopo un intervallo, quindi prima della lettura numero $n$ sono passati $n-1$ intervalli e l'istante generico è $t_n=(n-1)\cdot250\,\mathrm{ms}$. Tra la prima e l'ultima lettura passano quindi
$$
t_{13}-t_1=12\cdot250\,\mathrm{ms}=3000\,\mathrm{ms}=3\,\mathrm s.
$$
Ogni intervallo separa due istanti consecutivi. Per questo il numero di intervalli è inferiore di uno al numero di letture.

Se il sensore aspettasse il primo intervallo prima di salvare la lettura iniziale, ogni lettura sarebbe spostata di $250\,\mathrm{ms}$. La prima cadrebbe a $250\,\mathrm{ms}$ e la tredicesima a $13\cdot250\,\mathrm{ms}=3250\,\mathrm{ms}$ dall'avvio. Il tempo fra la prima e l'ultima resterebbe $3250\,\mathrm{ms}-250\,\mathrm{ms}=3000\,\mathrm{ms}$. Nel grafico sono segnate le prime tre letture e la tredicesima.

::grafico{segmenti="1,0,13,3" xmin=0 xmax=14 ymin=0 ymax=4 punti="1,0,pieno;2,.25,pieno;3,.5,pieno;13,3,pieno" nomi="n,t (s)" titolo="La prima lettura ha indice 1 e tempo zero. La tredicesima segue dopo 3 s"}
:::

## Notazione scientifica

:::definizione{#scientifica titolo="Separare coefficiente e potenza di dieci"}
La **notazione scientifica** è la scrittura di un numero come prodotto di due fattori. Il primo è un numero $a$, detto **coefficiente**, e il secondo è una potenza di dieci $10^n$. Per esempio
$$
42000=4{,}2\cdot10000=4{,}2\cdot10^4,\qquad
0{,}00042=\frac{4{,}2}{10000}=4{,}2\cdot10^{-4}.
$$
L'esponente conta di quanti posti si sposta la virgola per passare dal numero al coefficiente. In $42000$ la virgola si sposta di quattro posti verso sinistra e l'esponente è $4$. In $0{,}00042$ si sposta di quattro posti verso destra e l'esponente è $-4$.

Un numero diverso da zero in **notazione scientifica normalizzata** ha forma $a\cdot10^n$, con $1\leq \lvert a\rvert<10$ e $n$ intero. Il simbolo $\lvert a\rvert$ è il valore assoluto di $a$, cioè il numero $a$ scritto senza il segno. Un numero intero è un numero senza cifre dopo la virgola, come $-4$, $0$ o $4$. La condizione richiede quindi che il coefficiente abbia una sola cifra prima della virgola e che questa cifra sia diversa da zero.

Le **cifre significative** di una misura sono le cifre che portano informazione sul suo valore. Il coefficiente dà le cifre significative conservate nella scrittura e la potenza di dieci colloca la virgola. Se il numero è negativo, il coefficiente è negativo e la potenza resta positiva come moltiplicatore. Per esempio $-42000=-4{,}2\cdot10^4$.
:::

:::osservazione{#calcoli-decimali titolo="Prodotti, rapporti e somme"}
- **Prodotto.** Per moltiplicare due numeri in notazione scientifica si moltiplicano i coefficienti e si sommano gli esponenti. Per esempio $(2\cdot10^3)(4\cdot10^2)=(2\cdot4)\cdot10^{3+2}=8\cdot10^5$.
- **Rapporto.** Per dividerli si dividono i coefficienti e si sottraggono gli esponenti. Per esempio $\dfrac{8\cdot10^5}{2\cdot10^3}=\dfrac82\cdot10^{5-3}=4\cdot10^2$.
- **Normalizzazione.** Se il coefficiente esce dall'intervallo di normalizzazione, cioè è minore di $1$ oppure è almeno $10$, si sposta la virgola e si compensa nell'esponente. Per esempio $(5\cdot10^3)(6\cdot10^2)=30\cdot10^5$. Spostando la virgola di un posto verso sinistra il coefficiente $30$ diventa $3$, cioè viene diviso per dieci. Aumentando l'esponente di uno la potenza viene moltiplicata per dieci, quindi $30\cdot10^5=3\cdot10^6$.
- **Somma.** Per sommare due numeri si riscrivono prima con la stessa potenza di dieci. In questo modo la somma dei coefficienti combina quantità espresse nella medesima scala.
:::

:::esempio{titolo="Un esponente comune"}
Si sommano $3{,}4\cdot10^4$ e $8\cdot10^2$, cioè $34000$ e $800$. Gli **addendi**, cioè i numeri da sommare, hanno potenze di dieci diverse. Si esprime il secondo numero come $0{,}08\cdot10^4$, spostando la virgola di due posti verso sinistra e aumentando l'esponente di due. La somma dei coefficienti è $3{,}4+0{,}08=3{,}48$, quindi il risultato è $3{,}48\cdot10^4$, cioè $34800$.

L'**ordine di grandezza** di un numero è la potenza di dieci della sua notazione scientifica normalizzata. Il secondo addendo ha ordine di grandezza $10^2$, cento volte più piccolo di quello del primo, che è $10^4$. Il risultato rimane quindi vicino a $3{,}4\cdot10^4$.
:::

:::esempio{#scarto-scientifico titolo="Sottrarre valori quasi uguali"}
Un nastro intero misura $1{,}205\cdot10^4\,\mathrm{mm}$. Dopo un prelievo, cioè dopo che ne è stato tagliato un pezzo, il tratto che rimane misura $1{,}197\cdot10^4\,\mathrm{mm}$. Lo **scarto** fra due letture è la loro differenza e qui è la lunghezza prelevata. Una differenza fra due valori di una grandezza si indica con la lettera greca $\Delta$ («delta» maiuscola) davanti al simbolo della grandezza. Per esempio, se $s$ è uno spessore, $\Delta s$ è la differenza fra due spessori. Le due letture hanno la stessa potenza di dieci, quindi si sottraggono direttamente i coefficienti.
$$
(1{,}205-1{,}197)\cdot10^4\,\mathrm{mm}
=0{,}008\cdot10^4\,\mathrm{mm}
=8\cdot10^1\,\mathrm{mm}.
$$
Il pezzo tagliato è lungo $80\,\mathrm{mm}$.

**Arrotondare** un numero al centesimo significa sostituirlo con il numero a due cifre decimali più vicino. In caso di parità si sceglie il maggiore. Il risultato precedente si confronta con quello che si ottiene arrotondando prima i coefficienti. Il coefficiente $1{,}205$ è a metà fra $1{,}20$ e $1{,}21$ e diventa $1{,}21$, mentre $1{,}197$ diventa $1{,}20$. In tal caso si calcola $1{,}21-1{,}20=0{,}01$ e si ottengono $0{,}01\cdot10^4\,\mathrm{mm}=100\,\mathrm{mm}$.

L'arrotondamento sposta le due misure di $50\,\mathrm{mm}$ e di $30\,\mathrm{mm}$, che sono poco rispetto a circa $12000\,\mathrm{mm}$. Lo scarto è molto più piccolo delle misure, quindi i $20\,\mathrm{mm}$ di differenza fra i due spostamenti lo cambiano da $80\,\mathrm{mm}$ a $100\,\mathrm{mm}$. Rimandando l'arrotondamento al risultato finale, la sottrazione si esegue con tutte le cifre delle letture.
:::

## Unità derivate e dimensioni

:::definizione{#dimensioni titolo="Le unità seguono le operazioni"}
La **dimensione** di una grandezza è il suo tipo (lunghezza, massa, tempo o una loro combinazione), indipendentemente dalla scelta dell'unità. Un'area ha dimensione di lunghezza al quadrato, in metri quadrati come in centimetri quadrati. Una velocità ha dimensione di lunghezza divisa per tempo, sia in metri al secondo sia in chilometri all'ora.

Le unità seguono le stesse operazioni dei numeri accanto a cui sono scritte. La **densità** di un corpo è la sua massa divisa per il suo volume. Per un corpo di massa $10\,\mathrm{kg}$ e volume $2\,\mathrm m^3$ si calcola
$$
\frac{10\,\mathrm{kg}}{2\,\mathrm m^3}=5\,\mathrm{kg/m^3}.
$$
Nel rapporto tra una massa in chilogrammi e un volume in metri cubi le unità danno $\mathrm{kg/m^3}$, che si legge «chilogrammi al metro cubo». Questo è il modo di ricavare l'unità SI della densità.

La **frequenza** è il numero di eventi che avvengono in un secondo. Si misura in **hertz** (simbolo $\mathrm{Hz}$) e $1\,\mathrm{Hz}$ corrisponde a un evento al secondo. Per esempio, $12$ battiti in $4\,\mathrm s$ danno $\dfrac{12}{4}=3\,\mathrm{Hz}$.

La **portata** è il volume di liquido raccolto in un secondo, cioè il volume diviso per il tempo. Per esempio, $6\,\mathrm L$ raccolti in $3\,\mathrm s$ danno $\dfrac{6\,\mathrm L}{3\,\mathrm s}=2\,\mathrm{L/s}$. Nel SI la portata si misura in $\mathrm{m^3/s}$.

Un numero che conta oggetti o ripetizioni è privo di unità e si dice **adimensionale**. Per esempio, con $5$ giri di un filo lunghi $2\,\mathrm m$ ciascuno la lunghezza totale è $5\cdot2\,\mathrm m=10\,\mathrm m$. L'unità del risultato viene dai metri di un giro.
:::

:::esempio{#unit-composte titolo="Una velocità con un numeratore e un denominatore"}
Una velocità di $72\,\mathrm{km/h}$ corrisponde a $72\,\mathrm{km}$ percorsi in un'ora. Per convertirla in metri al secondo si sostituisce al chilometro $1000\,\mathrm m$ e all'ora $3600\,\mathrm s$.
$$
72\,\frac{\mathrm{km}}{\mathrm h}
=\frac{72\cdot1000\,\mathrm m}{3600\,\mathrm s}
=\frac{72000}{3600}\,\mathrm{m/s}
=20\,\mathrm{m/s}.
$$
Il fattore dell'ora va al denominatore perché l'ora vi compariva in partenza. Come controllo, un moto a $20\,\mathrm{m/s}$ percorre $20\cdot3600=72000\,\mathrm m$ in un'ora, cioè $72\,\mathrm{km}$.
:::

:::attenzione{#test-dimensionale titolo="Una condizione necessaria"}
Un'uguaglianza fisica vale solo se i due membri hanno la stessa dimensione. Il **controllo dimensionale** di una formula consiste nel verificare questa proprietà.

Siano $b$ la base e $h$ l'altezza di un rettangolo, che sono due lunghezze. Per l'area $A$ è da escludere una formula come $A=b+h$, perché la somma di due lunghezze è una lunghezza, in metri, mentre un'area si misura in metri quadrati.

La formula $A=2bh$ ha invece la dimensione di un'area, perché il prodotto di due lunghezze è in metri quadrati e il numero $2$ è privo di unità. Per un rettangolo darebbe però il doppio del valore corretto. Con $b=3\,\mathrm m$ e $h=2\,\mathrm m$ si otterrebbero $12\,\mathrm m^2$, mentre l'area è $3\,\mathrm m\cdot2\,\mathrm m=6\,\mathrm m^2$.

La stessa dimensione nei due membri è quindi una condizione *necessaria*. Ogni formula corretta la soddisfa e la soddisfano anche alcune formule sbagliate. Il controllo dimensionale segnala gli errori nella struttura della formula, come una somma al posto di un prodotto. Il fattore numerico è stabilito dalla geometria o dalla legge fisica.
:::

:::osservazione{#termini-omogenei titolo="Le unità dei coefficienti di una somma"}
Due grandezze sono **omogenee** quando sono dello stesso tipo, come due lunghezze o due tempi. In una somma tutti i **termini**, cioè gli addendi, sono grandezze omogenee.

Un modello, cioè una formula che descrive come varia una grandezza, esprime una lunghezza con $\ell=\ell_0+bt+ct^2$, dove $t$ è il tempo. Il simbolo $\ell_0$ si legge «elle con zero» e indica la lunghezza all'istante $t=0$. Le lettere $b$ e $c$ sono i **coefficienti**, cioè numeri fissati che moltiplicano $t$ e $t^2$. Le scritture $bt$ e $ct^2$ indicano i prodotti $b\cdot t$ e $c\cdot t^2$.

Ogni termine della somma deve avere dimensione di lunghezza. Il termine iniziale $\ell_0$ è già una lunghezza. Nel termine $bt$ l'unità di $b$ è moltiplicata per secondi e il risultato deve essere in metri. Affinché ciò accada, $b$ deve avere unità $\mathrm{m/s}$. Per lo stesso motivo, $c$ ha unità $\mathrm{m/s^2}$, cioè metri divisi per secondi al quadrato.
$$
[\ell_0]=\mathrm m,\qquad
[bt]=\dfrac{\mathrm m}{\mathrm s}\cdot\mathrm s=\mathrm m,\qquad
[ct^2]=\dfrac{\mathrm m}{\mathrm s^2}\cdot\mathrm s^2=\mathrm m.
$$
Le parentesi quadre indicano qui l'unità di ciascun termine. Con $\ell_0=3\,\mathrm m$, $b=2\,\mathrm{m/s}$ e $c=1\,\mathrm{m/s^2}$, dopo $2\,\mathrm s$ i tre contributi valgono $3\,\mathrm m$, $2\,\mathrm{m/s}\cdot2\,\mathrm s=4\,\mathrm m$ e $1\,\mathrm{m/s^2}\cdot4\,\mathrm s^2=4\,\mathrm m$. La somma $11\,\mathrm m$ ha senso perché si sommano tre lunghezze. Se nella scheda dei dati $c$ fosse espresso in $\mathrm{m/s}$, il termine finale avrebbe unità $\dfrac{\mathrm m}{\mathrm s}\cdot\mathrm s^2=\mathrm{m\,s}$, che è diversa dal metro. Il modello e la scheda sarebbero quindi incoerenti.

Nel grafico sono tracciati i tre termini e la loro somma.

::grafico{f="3+2*x+x*x;2*x;x*x" xmin=0 xmax=3 ymin=0 ymax=19 linee="0,3 3,3" punti="2,11,pieno" nomi="t (s),l (m)" etichette="2.25,2.16,termine iniziale 3 m" legenda="\text{somma};\text{termine lineare};\text{termine quadratico}" titolo="Tre contributi espressi in metri danno 11 m a 2 s"}
:::

## Somme e confronti

:::osservazione{#confronti titolo="Prima una stessa unità"}
Due misure della stessa grandezza si sommano o si confrontano direttamente quando sono espresse nella stessa unità. Per aggiungere $35\,\mathrm{cm}$ a $2\,\mathrm m$, si convertono i centimetri in $0{,}35\,\mathrm m$. La somma è $2\,\mathrm m+0{,}35\,\mathrm m=2{,}35\,\mathrm m$. Allo stesso modo $0{,}8\,\mathrm m$ è maggiore di $75\,\mathrm{cm}$, perché vale $80\,\mathrm{cm}$.

Nei rapporti tra grandezze omogenee le unità si cancellano dopo la conversione e resta un numero adimensionale. Per esempio, $50\,\mathrm{cm}$ è un quarto di $2\,\mathrm m$, perché in metri il rapporto è $\dfrac{0{,}5}{2}=0{,}25=\dfrac14$.
:::

:::esempio{titolo="Dalla misura alla porzione utilizzata"}
Da un rotolo lungo $3\,\mathrm m$ si tagliano prima $70\,\mathrm{cm}$ e poi $800\,\mathrm{mm}$. Entrambi i tagli rappresentano lunghezze. In metri valgono $0{,}70$ e $0{,}80$, quindi la parte usata è $0{,}70\,\mathrm m+0{,}80\,\mathrm m=1{,}50\,\mathrm m$. La parte rimasta è $3\,\mathrm m-1{,}50\,\mathrm m=1{,}50\,\mathrm m$, ossia metà del rotolo.

La divisione per la lunghezza iniziale dà una frazione adimensionale, perché i metri si semplificano, e vale $\dfrac{1{,}50}{3}=0{,}50$. Una **percentuale** è una frazione con denominatore cento. Il fattore cento esprime la frazione come percentuale, quindi $0{,}50=\dfrac{50}{100}=50\%$.
:::

::grafico{assi=0 xmin=-0.1 xmax=3.2 ymin=-0.8 ymax=2 segmenti="0,0,0.7,0;0.7,0,1.5,0;1.5,0,3,0" punti="0,0;0.7,0;1.5,0;3,0" etichette="0.37,0.38,70 cm;1.1,0.38,800 mm;2.24,0.38,1,50 m rimasti" titolo="Due tagli e il tratto rimanente, rappresentati tutti sulla scala in metri"}

:::osservazione{#rapporto-percentuale titolo="Separare frazione e unità"}
Una bottiglia da $750\,\mathrm{mL}$ contiene $0{,}45\,\mathrm L$. La frazione riempita $f$ è il volume presente diviso per la capacità. Per calcolarla si esprimono volume presente e capacità nella stessa unità, quindi si scrive $0{,}45\,\mathrm L=450\,\mathrm{mL}$.
$$
f=\dfrac{450\,\mathrm{mL}}{750\,\mathrm{mL}}=0{,}60=60\%.
$$
Nel rapporto il simbolo dell'unità si semplifica. Se si cambia unità nel numeratore e nel denominatore, entrambi i valori numerici vengono moltiplicati per lo stesso fattore e la frazione resta invariata.

Il volume disponibile corrisponde alla frazione complementare, cioè a quanto manca a $1$, che è $1-0{,}60=0{,}40$. Per passare dal $40\%$ a un volume, si moltiplica questa frazione per la capacità, ottenendo $0{,}40\cdot750\,\mathrm{mL}=300\,\mathrm{mL}$. Il rapporto indica quanta parte resta libera ed è un numero adimensionale, mentre il prodotto restituisce la misura fisica del volume, in millilitri.

::grafico{assi=0 xmin=-2 xmax=13 ymin=-1 ymax=11 poligoni="0,0 6,0 6,10 0,10;0,0 6,0 6,6 0,6" segmenti="6,6,9,6;6,10,9,10" etichette="3,3,450 mL;3,8,300 mL;10,10,750 mL;10,6,450 mL" titolo="Lo schema rappresenta un recipiente a sezione costante con 450 mL su una capacità di 750 mL"}
:::
