---
titolo: "Misure, incertezze e vettori"
sommario: "Conversioni e densità, controllo dimensionale, intervalli di misura, componenti e prodotti tra vettori."
---

## Grandezze e unità

:::definizione{#unita titolo="Misurare una grandezza"}
Una **grandezza** è una proprietà riproducibile di un corpo, cioè misurabile di nuovo con lo stesso risultato, come una lunghezza, una massa o un tempo. Misurarla significa confrontarla con un'**unità di misura**, una grandezza dello stesso tipo scelta come riferimento. La scrittura $\ell=2{,}40\,\mathrm{m}$ indica che la lunghezza $\ell$ è $2{,}40$ volte il metro. La stessa lunghezza è $240\,\mathrm{cm}$, perché un metro contiene $100$ centimetri. Il numero cambia, mentre il prodotto del numero per l'unità descrive la medesima lunghezza.

Nel **Sistema Internazionale** (SI), adottato in tutto il mondo scientifico, le unità di lunghezza, massa e tempo sono il metro ($\mathrm m$), il chilogrammo ($\mathrm{kg}$) e il secondo ($\mathrm s$). Una grandezza è **composta** quando la sua unità si forma combinando altre unità, come l'area in $\mathrm{m^2}$ o la velocità in $\mathrm{m/s}$. Per cambiarne l'unità si applica il **fattore di conversione**, cioè il numero per cui si moltiplica, a ciascuna unità che la compone. Un centimetro quadrato è l'area di un quadrato di lato $1\,\mathrm{cm}=10^{-2}\,\mathrm m$. L'area è lato per lato, quindi il fattore compare due volte.
$$
1\,\mathrm{cm^2}=(10^{-2}\,\mathrm m)^2=10^{-4}\,\mathrm{m^2}.
$$
Per il centimetro cubo il lato compare tre volte, quindi si usa una terza potenza e si ottiene $1\,\mathrm{cm^3}=(10^{-2})^3\,\mathrm{m^3}=10^{-6}\,\mathrm{m^3}$. Il **litro** è il volume di un cubo di lato $1\,\mathrm{dm}=10\,\mathrm{cm}$, quindi $1\,\mathrm L=10^3\,\mathrm{cm^3}$.

Una velocità in chilometri all'ora ($\mathrm{km/h}$) è una lunghezza in chilometri divisa per un tempo in ore. Per passare ai metri al secondo si sostituisce $1\,\mathrm{km}=1000\,\mathrm{m}$ al numeratore e $1\,\mathrm{h}=3600\,\mathrm{s}$ al denominatore.
$$
1\,\mathrm{km/h}=\frac{1000\,\mathrm m}{3600\,\mathrm s}=\frac{5}{18}\,\mathrm{m/s}.
$$
Quindi il valore in $\mathrm{km/h}$ si moltiplica per $\dfrac{5}{18}$. Per tornare da $\mathrm{m/s}$ a $\mathrm{km/h}$ si moltiplica per il **reciproco** $\dfrac{18}{5}=3{,}6$. Per esempio $20\,\mathrm{m/s}=20\cdot3{,}6\,\mathrm{km/h}=72\,\mathrm{km/h}$, perché $20\,\mathrm m$ ogni secondo equivalgono a $72\,\mathrm{km}$ in un'ora.
:::

:::esempio{#densita-grafico titolo="Densità e lettura di un grafico massa-volume"}
Un materiale è **omogeneo** quando ha la stessa composizione in ogni sua parte. Per un materiale omogeneo la massa $m$ è **direttamente proporzionale** al volume $V$, cioè raddoppiando il volume raddoppia anche la massa e il rapporto $\dfrac mV$ resta costante. Questo rapporto costante, il **coefficiente di proporzionalità**, è la **densità** $\rho$ (la lettera greca «rho»).
$$
\rho=\frac mV.
$$
Da $m=0{,}540\,\mathrm{kg}$ e $V=200\,\mathrm{cm^3}$ si converte prima il volume in metri cubi, $V=200\cdot10^{-6}\,\mathrm{m^3}=2{,}00\cdot10^{-4}\,\mathrm{m^3}$, poi si divide.
$$
\rho=\frac{0{,}540\,\mathrm{kg}}{2{,}00\cdot10^{-4}\,\mathrm{m^3}}=2700\,\mathrm{kg/m^3}.
$$
Se la massa si esprime in grammi e il volume in centimetri cubi, lo stesso rapporto vale $\dfrac{540\,\mathrm g}{200\,\mathrm{cm^3}}=2{,}70\,\mathrm{g/cm^3}$. Le due unità differiscono di un fattore $1000$, perché $1\,\mathrm{g/cm^3}=\dfrac{10^{-3}\,\mathrm{kg}}{10^{-6}\,\mathrm{m^3}}=1000\,\mathrm{kg/m^3}$.

Nel grafico il volume $V$ sta sull'asse orizzontale e la massa $m$ su quello verticale, e ogni punto è un campione del materiale. La **pendenza** della retta è l'aumento di $m$ diviso per il corrispondente aumento di $V$, quindi è proprio $\rho$, che nella figura vale $2{,}7\,\mathrm{g/cm^3}$. Se la bilancia pesa il materiale dentro un recipiente, registra anche la massa del recipiente, detta **tara**, e la retta non parte più dall'origine. L'**intercetta**, cioè il valore di $m$ per $V=0$, è la tara, che nella figura vale $100\,\mathrm g$. In un singolo punto il rapporto $\dfrac mV$ comprende anche il recipiente, come a $200\,\mathrm{cm^3}$, dove $\dfrac{640}{200}=3{,}2\,\mathrm{g/cm^3}$. La pendenza fra due punti rimane invece quella del materiale, perché sottraendo le due masse si annulla la stessa tara, e $\dfrac{640-100}{200-0}=2{,}7\,\mathrm{g/cm^3}$.
:::

::grafico{f="2.7*x;2.7*x+100" xmin=0 xmax=220 ymin=0 ymax=720 nomi="V (cm³),m (g)" punti="0,100,pieno;200,540,pieno;200,640,pieno" legenda="\mathrm{campione};\mathrm{campione+recipiente}" titolo="La tara di 100 g alza la retta senza alterarne la pendenza."}

:::esempio{titolo="Densità di una miscela di due liquidi"}
Si versano $80\,\mathrm{cm^3}$ di un liquido di densità $0{,}8\,\mathrm{g/cm^3}$ e $20\,\mathrm{cm^3}$ di un liquido di densità $1{,}2\,\mathrm{g/cm^3}$. Si suppone che non si perda massa e che il volume finale sia la somma dei due volumi versati. Le masse si ricavano da $m=\rho V$ e valgono $0{,}8\cdot80\,\mathrm g=64\,\mathrm g$ e $1{,}2\cdot20\,\mathrm g=24\,\mathrm g$. La miscela ha quindi massa $m=88\,\mathrm g$ e volume $V=100\,\mathrm{cm^3}$, da cui segue
$$
\rho=\frac{88\,\mathrm g}{100\,\mathrm{cm^3}}=0{,}88\,\mathrm{g/cm^3}.
$$
Questo valore è una **media pesata** delle due densità, in cui ciascuna conta in proporzione al suo volume. Il primo liquido occupa $\dfrac{80}{100}=\dfrac45$ del volume, quindi la densità finale è più vicina alla sua densità che a quella del secondo. Se i due volumi fossero uguali, si otterrebbe la loro **media aritmetica** $\dfrac{0{,}8+1{,}2}{2}=1{,}0\,\mathrm{g/cm^3}$. Il valore intermedio da solo non distingue una miscela da un singolo liquido della stessa densità.
:::

## Potenze di dieci e controllo delle formule

:::osservazione{#dimensioni titolo="Notazione scientifica e dimensioni"}
La **notazione scientifica** scrive un numero non nullo nella forma $a\cdot10^n$, dove il **coefficiente** $a$ soddisfa $1\leq |a|<10$ e l'**esponente** $n$ è un numero intero. Per esempio $0{,}002=2\cdot10^{-3}$. Quando si moltiplicano due fattori si moltiplicano i coefficienti e si sommano gli esponenti, perché $10^p\cdot10^q=10^{p+q}$.
$$
(2{,}0\cdot10^{-3})(3{,}0\cdot10^5)=(2{,}0\cdot3{,}0)\cdot10^{-3+5}=6{,}0\cdot10^2.
$$
Nella divisione si dividono i coefficienti e si sottraggono gli esponenti. Nelle somme, invece, si riportano entrambi i termini alla stessa potenza prima di sommare i coefficienti.

Le **dimensioni** di una grandezza indicano da quali **grandezze fondamentali** dipende. Qui sono lunghezza, massa e tempo, indicate con $L$, $M$ e $T$, e le parentesi quadre si leggono «dimensione di». Una velocità è una lunghezza divisa per un tempo e un'accelerazione è una velocità divisa per un tempo, quindi
$$
[v]=\frac{L}{T}=LT^{-1},\qquad [a]=\frac{LT^{-1}}{T}=LT^{-2}.
$$
Il **controllo dimensionale** usa il fatto che si sommano soltanto grandezze della stessa dimensione. Nel modello $x=x_0+v_0t+\dfrac12 at^2$, $x$ è la posizione, $x_0$ la posizione iniziale, $v_0$ la velocità iniziale (il pedice $0$ indica l'istante iniziale) e $a$ l'accelerazione. Ciascun **addendo**, cioè ciascun termine della somma, ha dimensione $L$, come mostrano i calcoli $[v_0t]=LT^{-1}\cdot T=L$ e $[at^2]=LT^{-2}\cdot T^2=L$. La verifica vale anche quando la formula contiene parametri sconosciuti. Se $x=kt^2$, il prodotto $kt^2$ è una lunghezza, quindi $[k]=LT^{-2}$, cioè l'unità SI di $k$ è $\mathrm{m/s^2}$.

La pendenza di un grafico è un aumento verticale diviso per un aumento orizzontale, quindi la sua unità è l'unità dell'asse verticale divisa per quella dell'asse orizzontale. Una curva $x$ in funzione di $t$ ha pendenza in $\mathrm{m/s}$, cioè una velocità. Un grafico velocità-tempo ha invece pendenza in $\dfrac{\mathrm{m/s}}{\mathrm s}=\mathrm{m/s^2}$, cioè un'accelerazione. L'area sotto una curva velocità-tempo si calcola come altezza per base, quindi ha unità $\mathrm{m/s}\cdot\mathrm{s}=\mathrm{m}$ ed è una lunghezza.
:::

:::attenzione{titolo="I limiti del controllo dimensionale"}
La dimensione esclude, per esempio, $x=x_0+v_0$ se $v_0$ è una velocità, perché somma una lunghezza e una velocità. L'espressione $x=x_0+at^2$ supera invece il controllo dimensionale, perché $at^2$ è una lunghezza. Con partenza da fermo e accelerazione costante, però, lo spostamento vero è $\dfrac12at^2$. Le unità sono compatibili in entrambi i casi, quindi il coefficiente numerico, $1$ oppure $\dfrac12$, non si ricava dalle dimensioni e si determina dalla legge fisica.
:::

:::esempio{titolo="Area con segno e spostamento"}
In un moto rettilineo la velocità passa da $4\,\mathrm{m/s}$ a zero nei primi $2\,\mathrm s$ e poi raggiunge $-2\,\mathrm{m/s}$ a $3\,\mathrm s$. Il segno meno indica il moto nel verso opposto. La pendenza costante è $\dfrac{-2-4}{3}\,\mathrm{m/s^2}=-2\,\mathrm{m/s^2}$. Lo **spostamento** è la variazione di posizione, posizione finale meno posizione iniziale, ed è uguale all'area fra il grafico e l'asse dei tempi, con il segno più sopra l'asse e il segno meno sotto. I due triangoli danno
$$
\frac{2\cdot4}{2}\,\mathrm m=+4\,\mathrm m,\qquad -\frac{1\cdot2}{2}\,\mathrm m=-1\,\mathrm m.
$$
Si sommano con i segni, ottenendo lo spostamento $(4-1)\,\mathrm m=3\,\mathrm m$. La posizione finale è la posizione iniziale più lo spostamento. La **distanza percorsa** è la lunghezza di tutto il tragitto, avanti e indietro, quindi si sommano i moduli delle aree, cioè i valori senza segno, e si ottiene $(4+1)\,\mathrm m=5\,\mathrm m$.

::grafico{linee="0,4 3,-2" area="4-2*x;0;0;2|0;4-2*x;2;3" segmenti="3,0,3,-2" punti="0,4,pieno;2,0,pieno;3,-2,pieno" xmin=0 xmax=3.6 ymin=-3 ymax=5 nomi="t (s),v (m/s)" titolo="Il tratto sotto l'asse contribuisce con −1 m allo spostamento."}
:::

## Misure ripetute e incertezza

:::definizione{#incertezze titolo="Valore misurato e intervallo"}
La scrittura $\ell=(12{,}4\pm0{,}1)\,\mathrm{cm}$ (si legge «più o meno») indica una **stima centrale** di $12{,}4\,\mathrm{cm}$ e un intervallo di valori possibili da $12{,}4-0{,}1=12{,}3$ a $12{,}4+0{,}1=12{,}5\,\mathrm{cm}$. Il numero $0{,}1\,\mathrm{cm}$ è l'**incertezza assoluta** $\Delta\ell$ (la lettera greca $\Delta$ si legge «delta») e si esprime nelle stesse unità della lunghezza. La sua scelta dipende da tre elementi.
- La **risoluzione** dello strumento, cioè la più piccola variazione leggibile.
- La **taratura**, cioè la regolazione dello strumento rispetto a un riferimento noto.
- La **dispersione** delle misure, cioè quanto differiscono fra loro le letture ripetute.

L'incertezza è il margine con cui si dichiara il risultato e può superare la risoluzione.

Con misure $x_1,x_2,\ldots,x_n$ della stessa quantità, dove il **pedice** numera le $n$ letture, si usa come stima centrale la **media aritmetica** $\bar x$ (si legge «x segnato»), cioè la somma delle letture divisa per il loro numero.
$$
\bar x=\frac{x_1+x_2+\cdots+x_n}{n}.
$$
Se la consegna adotta la **semidispersione**, si calcola metà della distanza fra la lettura massima $x_{\max}$ e la minima $x_{\min}$, cioè $\dfrac{x_{\max}-x_{\min}}2$. Il centro dell'intervallo degli estremi, il **punto medio**, è invece $\dfrac{x_{\max}+x_{\min}}2$. Con le letture $10{,}0$, $10{,}0$ e $10{,}6\,\mathrm{cm}$ si ha
$$
\bar x=\frac{10{,}0+10{,}0+10{,}6}{3}\,\mathrm{cm}=\frac{30{,}6}{3}\,\mathrm{cm}=10{,}2\,\mathrm{cm},\qquad \frac{10{,}6+10{,}0}{2}\,\mathrm{cm}=10{,}3\,\mathrm{cm}.
$$
Le due stime coincidono se la distribuzione delle misure è **simmetrica**, cioè con le letture disposte allo stesso modo sopra e sotto il centro.

Per coprire tutte le letture con un intervallo simmetrico attorno alla media, si usa la maggiore fra le due distanze della media dagli estremi. Nell'esempio queste distanze sono $10{,}2-10{,}0=0{,}2\,\mathrm{cm}$ e $10{,}6-10{,}2=0{,}4\,\mathrm{cm}$, quindi il margine è $0{,}4\,\mathrm{cm}$. La semidispersione $\dfrac{10{,}6-10{,}0}{2}\,\mathrm{cm}=0{,}3\,\mathrm{cm}$ copre tutti i dati se la si centra sul punto medio degli estremi, perché l'intervallo $(10{,}3\pm0{,}3)\,\mathrm{cm}$ va da $10{,}0$ a $10{,}6\,\mathrm{cm}$. La figura riporta le stesse letture in millimetri, con la media e il punto medio nelle due righe in alto.

::grafico{punti="100,1,pieno;100,2,pieno;106,1,pieno;102,3,pieno;103,4,pieno" etichette="102.16,3.1,Media;103.16,4.1,Punto medio" xmin=99 xmax=107 ymin=0 ymax=5 nomi="ℓ (mm),riga" titolo="I due punti a 100 mm indicano due letture uguali. Le due stime distano 1 mm."}

L'**incertezza relativa** $\varepsilon$ (la lettera greca «epsilon») è l'incertezza assoluta divisa per il valore assoluto della stima centrale.
$$
\varepsilon=\frac{\Delta x}{|\bar x|}.
$$
È **adimensionale**, cioè un numero puro senza unità, perché numeratore e denominatore hanno la stessa unità. Ha significato per una stima centrale diversa da zero, perché non si divide per zero. Per una misura $(20{,}0\pm0{,}2)\,\mathrm{cm}$ vale $\dfrac{0{,}2}{20{,}0}=0{,}010$, ossia, moltiplicando per $100$, l'$1{,}0\%$ (**incertezza percentuale**). Questa frazione serve a confrontare misure su scale diverse. L'incertezza si arrotonda tipicamente a una o due **cifre significative**, contate a partire dalla prima cifra diversa da zero ($0{,}16$ ne ha due). Il valore centrale si scrive con la stessa posizione dell'ultima cifra decimale dell'incertezza, come in $(18{,}00\pm0{,}16)\,\mathrm{cm}$ oppure $(18{,}0\pm0{,}2)\,\mathrm{cm}$.
:::

:::esempio{#compatibilita titolo="Intervalli che hanno un punto in comune"}
Due misure sono **compatibili** quando i loro intervalli hanno almeno un valore in comune. Le misure $(24{,}0\pm0{,}3)\,\mathrm{cm}$ e $(24{,}5\pm0{,}2)\,\mathrm{cm}$ hanno gli intervalli $[23{,}7;\,24{,}3]\,\mathrm{cm}$ e $[24{,}3;\,24{,}7]\,\mathrm{cm}$, dove le parentesi quadre indicano che gli estremi sono compresi. I due intervalli hanno in comune il valore $24{,}3\,\mathrm{cm}$. Nel modello a intervalli le due misure sono quindi compatibili, anche se hanno centri diversi. Il criterio equivale a confrontare la distanza tra i centri, $24{,}5-24{,}0=0{,}5\,\mathrm{cm}$, con la somma delle incertezze, $0{,}3+0{,}2=0{,}5\,\mathrm{cm}$, perché gli intervalli si toccano o si sovrappongono quando la distanza non supera la somma. Se la procedura introduce lo stesso errore di taratura in tutte le misure, anche due intervalli sovrapposti possono essere spostati rispetto al valore reale.
:::

::grafico{linee="23.7,1 24.3,1;24.3,2 24.7,2" segmenti="24.3,0,24.3,2" punti="23.7,1,pieno;24.3,1,pieno;24.3,2,pieno;24.7,2,pieno" etichette="23.66,0.57,23,7;24.26,0.57,24,3;24.64,0.57,24,7" xmin=23.55 xmax=24.85 ymin=-0.25 ymax=2.8 nomi="ℓ (cm),misura" titolo="I segmenti condividono il solo valore 24,3 cm."}

:::esempio{titolo="Una lettura a vuoto rivela lo scarto"}
Una bilancia ferma e priva di carico indica $3\,\mathrm g$ invece di zero. Questo **scarto** (in inglese *offset*) è un errore **sistematico**, uguale in ogni pesata. Lo stesso strumento indica $83\,\mathrm g$ per un campione e $115\,\mathrm g$ per un secondo campione. Si suppone che lo scarto sia **additivo**, cioè che si aggiunga alla massa vera, e costante in questo intervallo di carico. Per stimare le singole masse si sottraggono $3\,\mathrm g$ da ciascuna lettura.
$$
(83-3)\,\mathrm g=80\,\mathrm g,\qquad (115-3)\,\mathrm g=112\,\mathrm g.
$$
La differenza fra le masse vale $32\,\mathrm g$ anche usando direttamente le letture, $(115-83)\,\mathrm g=32\,\mathrm g$, poiché il termine comune di taratura compare in entrambe e nella sottrazione scompare. Ripetere molte volte la pesata può affinare la stima della dispersione, mentre la media contiene ancora lo scarto. Per stimare lo scarto comune occorre confrontare la lettura con una massa di riferimento nota, in questo caso zero.
:::

## Propagazione delle incertezze

:::teorema{#propagazione titolo="Stima massima al primo ordine"}
Quando si conoscono soltanto gli intervalli di due misure $x=x_0\pm\Delta x$ e $y=y_0\pm\Delta y$, con valori centrali $x_0$ e $y_0$, si può calcolare un margine prudente, cioè il margine del caso peggiore, senza ipotizzare che gli errori si compensino.

Nella somma $z=x+y$ la variazione massima rispetto a $x_0+y_0$ si ottiene prendendo due errori dello stesso segno, perché il valore più grande è $(x_0+\Delta x)+(y_0+\Delta y)=(x_0+y_0)+(\Delta x+\Delta y)$. Nella differenza $x-y$ il caso estremo usa invece errori opposti, perché il valore più grande è $(x_0+\Delta x)-(y_0-\Delta y)=(x_0-y_0)+(\Delta x+\Delta y)$. In entrambi i casi il margine massimo è $\Delta x+\Delta y$, quindi le incertezze assolute si sommano. Se le misure vengono dalla stessa taratura e hanno errori **correlati**, cioè legati fra loro, conoscere il legame può ridurre il margine effettivo. Per esempio, uno scarto comune alle due misure si annulla nella differenza.

Per un prodotto $A=xy$ si scrive ogni misura come valore centrale più un errore, $x=x_0+\delta x$ e $y=y_0+\delta y$. La lettera $\delta$ («delta» minuscola) indica l'errore effettivo, che in valore assoluto non supera $\Delta x$ o $\Delta y$. Sviluppando il prodotto si trova
$$
A=x_0y_0+y_0\,\delta x+x_0\,\delta y+\delta x\,\delta y.
$$
Il termine $\delta x\,\delta y$ è il prodotto di due errori piccoli, quindi è molto più piccolo degli altri. Si chiama termine **di secondo ordine** e si trascura, e per questo la stima si dice **al primo ordine**. Dividendo la variazione $A-x_0y_0$ per $|x_0y_0|$, il margine relativo stimato è
$$
\frac{\Delta A}{|A_0|}\simeq\frac{\Delta x}{|x_0|}+\frac{\Delta y}{|y_0|},
$$
dove $A_0=x_0y_0$ e il simbolo $\simeq$ si legge «circa uguale». Nel prodotto, quindi, si sommano le incertezze relative.

Per un quoziente $q=\dfrac{x}{y}$, con $x_0\ne0$ e $|y_0|\gg\Delta y$ (il simbolo $\gg$ si legge «molto maggiore di»), i due contributi relativi si sommano nella stima massima al primo ordine. Per valori positivi, il rapporto aumenta se cresce il numeratore oppure diminuisce il denominatore, quindi il caso peggiore combina il numeratore più grande con il denominatore più piccolo. Se l'intervallo del denominatore include zero, il rapporto può diventare grande quanto si vuole e non si può ricavare un intervallo finito con questa regola.
:::

:::esempio{titolo="Dagli estremi alla stima della densità"}
Siano $m=(200\pm2)\,\mathrm{g}$ e $V=(80\pm1)\,\mathrm{cm^3}$. Poiché tutti gli estremi sono positivi, la densità è minima con la massa più piccola e il volume più grande, ed è massima con la massa più grande e il volume più piccolo.
$$
\rho_{\min}=\frac{198}{81}\,\mathrm{g/cm^3}\simeq2{,}444\,\mathrm{g/cm^3},\qquad \rho_{\max}=\frac{202}{79}\,\mathrm{g/cm^3}\simeq2{,}557\,\mathrm{g/cm^3}.
$$
L'intervallo è approssimativamente da $2{,}444$ a $2{,}557\,\mathrm{g/cm^3}$. La stima massima al primo ordine parte dal valore **nominale**, cioè quello calcolato con i valori centrali, $\dfrac{200}{80}\,\mathrm{g/cm^3}=2{,}50\,\mathrm{g/cm^3}$, e somma le incertezze relative.
$$
\frac{2}{200}+\frac{1}{80}=1\%+1{,}25\%=2{,}25\%.
$$
Il margine è quindi il $2{,}25\%$ di $2{,}50\,\mathrm{g/cm^3}$, cioè circa $0{,}056\,\mathrm{g/cm^3}$. Gli estremi esatti distano dal valore nominale $0{,}056$ verso il basso e $0{,}057\,\mathrm{g/cm^3}$ verso l'alto, una lieve asimmetria che la stima al primo ordine trascura.

| Caso | Massa (g) | Volume (cm³) | Densità (g/cm³) |
| --- | --- | --- | --- |
| Minimo | 198 | 81 | 2,444 |
| Nominale | 200 | 80 | 2,500 |
| Massimo | 202 | 79 | 2,557 |

Nella figura il rettangolo contiene tutte le coppie possibili di volume e massa.

::grafico{poligoni="79,198 81,198 81,202 79,202" punti="81,198,pieno;80,200,pieno;79,202,pieno" etichette="79.09,202.22,Massimo;80.46,197.58,Minimo" xmin=78.5 xmax=82 ymin=197 ymax=203 nomi="V (cm³),m (g)" titolo="Gli estremi della densità sono nei due vertici opposti del rettangolo delle misure."}
:::

:::esempio{titolo="Una differenza piccola fra due lunghezze"}
Due tacche hanno coordinate lungo un asse $(50{,}2\pm0{,}2)\,\mathrm{cm}$ e $(49{,}9\pm0{,}2)\,\mathrm{cm}$. Per stimare la **distanza orientata**, cioè la distanza con il segno che indica quale tacca viene prima, si sottrae la seconda coordinata dalla prima. Il valore centrale è $(50{,}2-49{,}9)\,\mathrm{cm}=0{,}3\,\mathrm{cm}$. Se si conoscono solo i due intervalli, il più piccolo risultato possibile si ha con la prima coordinata minima e la seconda massima, il più grande con la prima massima e la seconda minima.
$$
d_{\min}=(50{,}0-50{,}1)\,\mathrm{cm}=-0{,}1\,\mathrm{cm},\qquad d_{\max}=(50{,}4-49{,}7)\,\mathrm{cm}=0{,}7\,\mathrm{cm}.
$$
L'intervallo contiene zero, quindi le misure non stabiliscono l'ordine delle tacche lungo l'asse. Le singole incertezze relative sono inferiori all'$1\%$, perché $\dfrac{0{,}2}{49{,}9}\simeq0{,}4\%$. La differenza $0{,}3\,\mathrm{cm}$ è però confrontabile con la somma delle incertezze assolute, $0{,}4\,\mathrm{cm}$. Se entrambe le coordinate hanno lo stesso errore additivo di origine, quell'errore si cancella nella sottrazione prima di stimare il margine residuo.
:::

## Componenti di un vettore

:::definizione{#componenti titolo="Modulo, direzione e verso"}
Una grandezza **scalare** è descritta da un solo numero con la sua unità, come una massa o un intervallo di tempo. Uno spostamento è un **vettore** perché conta anche la direzione del movimento, e $5\,\mathrm m$ verso nord portano in un punto diverso da $5\,\mathrm m$ verso est. Un vettore si rappresenta con una freccia.
- Il **modulo** è la lunghezza della freccia e si indica con la lettera senza freccia, $A$ per il vettore $\vec A$.
- La **direzione** è la retta lungo la quale avviene il moto.
- Il **verso** è il lato verso cui punta la freccia lungo quella retta.

Con assi cartesiani fissati, perpendicolari fra loro, il vettore è individuato dalle due **componenti** $A_x$ e $A_y$, cioè dalle sue **proiezioni orientate** sugli assi. La proiezione su un asse è il segmento fra i piedi delle perpendicolari all'asse tracciate dalla coda e dalla punta, con il segno più se va nel verso positivo dell'asse e con il segno meno altrimenti. Per un vettore non nullo, l'angolo $\theta$ (la lettera greca «theta») è misurato dal semiasse positivo $x$ in **senso antiorario**, cioè al contrario delle lancette dell'orologio. Le componenti sono i cateti di un triangolo rettangolo con ipotenusa $A$. Il coseno di un angolo acuto è il cateto adiacente diviso per l'ipotenusa e il seno è il cateto opposto diviso per l'ipotenusa, quindi valgono le prime due formule; la terza è il teorema di Pitagora.
$$
A_x=A\cos\theta,\qquad A_y=A\sin\theta,\qquad A=\sqrt{A_x^2+A_y^2}.
$$
Oltre $90^\circ$ seno e coseno possono essere negativi e danno il segno delle componenti, come $\cos120^\circ=-\dfrac12$.

Le componenti hanno le stesse unità del modulo. Una componente negativa indica il verso opposto a quello positivo dell'asse. I segni delle componenti indicano verso quale dei quattro **quadranti** punta la freccia, numerati in senso antiorario da quello in alto a destra. Se il vettore ha componenti $-3\,\mathrm{m}$ e $4\,\mathrm{m}$, il modulo vale $\sqrt{(-3)^2+4^2}\,\mathrm m=\sqrt{25}\,\mathrm m=5\,\mathrm{m}$ e il verso è nel secondo quadrante. L'angolo acuto di riferimento $\alpha$ («alfa») fra la freccia e l'asse $x$ soddisfa $\tan\alpha=\dfrac43$, dove la tangente è il cateto opposto diviso per il cateto adiacente, perciò $\alpha\simeq53{,}1^\circ$. La freccia punta a sinistra, quindi l'angolo riferito al semiasse positivo $x$ è $180^\circ-\alpha$, cioè circa $126{,}9^\circ$.

Un vettore **libero** è individuato solo da modulo, direzione e verso, quindi spostare la coda della sua freccia senza cambiarne lunghezza e orientamento lascia invariate le componenti. Per uno spostamento da $P=(x_1,y_1)$ a $Q=(x_2,y_2)$ si sottraggono le coordinate nell'ordine finale meno iniziale, e si ottiene $\overrightarrow{PQ}=(x_2-x_1,\;y_2-y_1)$. L'operazione inversa cambia il segno di entrambe le componenti. Il modulo resta invariato.
:::

::grafico{vettori="0,0,-3,4,A" segmenti="-3,0,-3,4;0,4,-3,4" xmin=-5 xmax=4 ymin=-1 ymax=5.5 nomi="x (m),y (m)" uguale=1 titolo="Il vettore ha componente orizzontale negativa e verticale positiva."}

:::osservazione{#assi-ruotati titolo="Assi ruotati"}
Se il nuovo asse $x'$ (si legge «x primo») forma un angolo $\phi$ (la lettera greca «fi») con il vecchio asse $x$, misurato in senso antiorario, la nuova componente orizzontale si ottiene proiettando il vettore su $x'$. Per esempio, il vettore $(5,0)\,\mathrm{N}$, dove $\mathrm N$ è il newton, l'unità di misura della forza, ha componenti $(0,-5)\,\mathrm{N}$ dopo una rotazione antioraria degli assi di $90^\circ$. Infatti $x'$ punta come il vecchio $y$, perpendicolare al vettore, e $y'$ nel verso opposto al vecchio $x$. Il suo modulo resta $5\,\mathrm{N}$. Nei problemi sul piano inclinato si sceglie l'asse $x'$ parallelo al piano, perché così una componente è parallela al **vincolo**, cioè alla superficie su cui il corpo si muove, e i conti si semplificano.

Un **versore** è un vettore di modulo $1$, che indica soltanto una direzione e un verso. I versori dei nuovi assi hanno componenti $(\cos\phi,\sin\phi)$ e $(-\sin\phi,\cos\phi)$ negli assi iniziali. La nuova proiezione è il **prodotto scalare** del vettore con il versore, cioè la somma dei prodotti delle componenti corrispondenti.

$$
\begin{aligned}
A_{x'}&=A_x\cos\phi+A_y\sin\phi\\[6pt]
A_{y'}&=-A_x\sin\phi+A_y\cos\phi.
\end{aligned}
$$

Una rotazione degli assi in **senso orario** corrisponde a un angolo $\phi$ negativo. Per $\phi=-90^\circ$ si ha $\cos\phi=0$ e $\sin\phi=-1$, quindi $A_{x'}=-A_y$ e $A_{y'}=A_x$. Per esempio, il vettore $(5,-12)\,\mathrm N$ diventa $(12,5)\,\mathrm N$.

Per $\vec A=(0,5)\,\mathrm m$ e una rotazione degli assi con $\cos\phi=\dfrac45$ e $\sin\phi=\dfrac35$, cioè $\phi\simeq36{,}9^\circ$, le formule danno
$$
A_{x'}=0\cdot\frac45+5\cdot\frac35=3\,\mathrm m,\qquad A_{y'}=-0\cdot\frac35+5\cdot\frac45=4\,\mathrm m.
$$
La figura mostra le due proiezioni sugli assi inclinati.

::grafico{vettori="0,0,0,5,A" segmenti="0,5,2.4,1.8;0,5,-2.4,3.2" punti="2.4,1.8,pieno;-2.4,3.2,pieno" riferimento="0,0,36.8699,4.6,x′,y′" xmin=-4 xmax=5 ymin=-1 ymax=6 nomi="x (m),y (m)" uguale=1 titolo="Le due guide tratteggiate sono perpendicolari ai rispettivi assi ruotati."}
:::

:::esempio{titolo="Cambio di assi nel piano"}
Un vettore $\vec A=(6,8)\,\mathrm m$ ha modulo $\sqrt{6^2+8^2}\,\mathrm m=\sqrt{100}\,\mathrm m=10\,\mathrm m$. Si ruotano gli assi di $90^\circ$ in senso antiorario. Il nuovo semiasse positivo $x'$ punta come il vecchio $y$, quindi $A_{x'}=8\,\mathrm m$. Il nuovo semiasse positivo $y'$ punta nel verso opposto al vecchio $x$, perciò $A_{y'}=-6\,\mathrm m$. I valori assoluti delle proiezioni si scambiano, mentre il segno dipende dai versi dei nuovi assi. Per verificare il risultato si calcola $\sqrt{8^2+(-6)^2}\,\mathrm m=10\,\mathrm m$. Se si ruotasse la freccia di $90^\circ$ in senso antiorario lasciando fermi gli assi, si avrebbero invece le componenti $(-8,6)\,\mathrm m$. Le due operazioni descrivono situazioni geometriche distinte, perché nella prima cambiano gli assi e nella seconda cambia il vettore.
:::

## Somme e prodotti

:::teorema{#operazioni titolo="Operazioni tra vettori"}
Nella somma **punta-coda** il secondo spostamento inizia al termine del primo. La **risultante** $\vec R=\vec A+\vec B$ va dalla coda iniziale alla punta finale, e le sue componenti si ottengono sommando asse per asse.
$$
R_x=A_x+B_x,\qquad R_y=A_y+B_y.
$$
Per $\vec A=(3,1)\,\mathrm{m}$ e $\vec B=(-1,3)\,\mathrm{m}$ si trova $\vec R=(3-1,\;1+3)\,\mathrm m=(2,4)\,\mathrm{m}$, quindi $R=\sqrt{2^2+4^2}\,\mathrm{m}=\sqrt{20}\,\mathrm{m}\simeq4{,}47\,\mathrm m$. Il modulo della risultante non supera la somma dei moduli, che rappresenta la lunghezza del percorso lungo i due segmenti. Il modulo vale $A+B$ quando i vettori sono paralleli e con lo stesso verso (**concordi**), ed è minimo, uguale alla differenza dei moduli, quando sono paralleli e di verso opposto (**discordi**).

Il **prodotto scalare** di due vettori restituisce un numero. In un piano **ortonormale**, cioè con assi perpendicolari e la stessa unità sui due assi, si calcola moltiplicando le componenti sullo stesso asse e sommando i prodotti, e vale anche il prodotto dei moduli per il coseno dell'angolo $\theta$ compreso fra i due vettori.
$$
\vec A\cdot\vec B=A_x B_x+A_y B_y=AB\cos\theta.
$$
Per esempio i vettori $(-3,4)$ e $(4,3)$ della seconda figura hanno prodotto scalare $(-3)\cdot4+4\cdot3=0$. Se $\vec B$ è non nullo, dividere per $B$ dà la proiezione orientata di $\vec A$ lungo $\vec B$, cioè $A\cos\theta$. Per vettori non nulli i moduli sono positivi, quindi il segno del prodotto è quello di $\cos\theta$. Il prodotto è positivo se l'angolo compreso è minore di $90^\circ$, nullo all'angolo retto (vettori perpendicolari) e negativo se l'angolo è maggiore di $90^\circ$. Anche il vettore nullo ha prodotto scalare nullo con ogni vettore, ma il suo angolo con un'altra direzione è indefinito. Il prodotto scalare dà anche il modulo della risultante, perché $R^2=\vec R\cdot\vec R=A^2+B^2+2\vec A\cdot\vec B=A^2+B^2+2AB\cos\theta$. Per vettori perpendicolari l'ultimo termine è nullo e si ritrova il teorema di Pitagora.

In un sistema **destrorso**, con $x$ verso destra e $y$ verso l'alto, l'asse $z$ esce dal foglio verso chi guarda. Nel piano $xy$ il **prodotto vettoriale** $\vec A\times\vec B$ è un vettore diretto lungo $z$, con componente
$$
(\vec A\times\vec B)_z=A_x B_y-A_y B_x.
$$
La **regola della mano destra** ne determina il verso. Se le dita della mano destra girano da $\vec A$ verso $\vec B$, il pollice indica il verso del prodotto, quindi la componente è positiva quando da $\vec A$ a $\vec B$ si gira in senso antiorario. Il modulo del prodotto è $AB|\sin\theta|$. Se i due vettori rappresentano lunghezze, esso è l'area del parallelogramma che ha i due vettori come lati. Infatti il fattore $B|\sin\theta|$ è l'altezza sulla base $A$. Il prodotto scalare usa la proiezione parallela $B\cos\theta$. La componente trasversale $B\sin\theta$ entra nel prodotto vettoriale e nel calcolo del **momento di una forza**, che misura l'effetto di rotazione della forza. Due vettori paralleli hanno prodotto vettoriale nullo, perché per loro $\sin\theta=0$.
:::

::grafico{vettori="0,0,3,1,A;3,1,2,4,B;0,0,2,4,R" xmin=-1 xmax=5 ymin=-1 ymax=5 nomi="x (m),y (m)" uguale=1 titolo="La risultante collega l'origine alla punta finale"}

::grafico{vettori="0,0,-3,4,A;0,0,4,3,B" xmin=-5 xmax=5 ymin=-1 ymax=5 uguale=1 titolo="I vettori sono perpendicolari perché il loro prodotto scalare è zero"}

:::esempio{#proiezione-orientata titolo="Proiezione negativa e lavoro"}
Il **lavoro** $W$ di una forza costante durante uno spostamento è il prodotto scalare $W=\vec F\cdot\vec s$. Si misura in joule, con $1\,\mathrm J=1\,\mathrm N\cdot\mathrm m$. Una forza $\vec F=(-2,5)\,\mathrm{N}$ agisce durante uno spostamento $\vec s=(3,0)\,\mathrm{m}$. Il prodotto scalare vale
$$
\vec F\cdot\vec s=(-2)\cdot3+5\cdot0=-6\,\mathrm{J}.
$$
Poiché $s=3\,\mathrm m$, la proiezione della forza lungo lo spostamento è $\dfrac{\vec F\cdot\vec s}{s}=\dfrac{-6}{3}\,\mathrm N=-2\,\mathrm{N}$. La componente verticale può influenzare altri aspetti del moto, ma qui non dà contributo al lavoro perché non c'è spostamento verticale. Il segno negativo segnala che la forza ha una proiezione opposta allo spostamento.

::grafico{vettori="0,0,-2,5,F;0,0,-2,0,Fₓ" segmenti="-2,0,-2,5" etichette="0.42,0.6,verso di s →" xmin=-3 xmax=4 ymin=-1 ymax=6 nomi="Fₓ (N),Fᵧ (N)" uguale=1 titolo="Il semiasse positivo orizzontale ha il verso di s. La proiezione della forza punta a sinistra."}
:::

:::esempio{titolo="Area e ordine dei vettori"}
Con $\vec A=(3,0)\,\mathrm m$ e $\vec B=(1,2)\,\mathrm m$ si ottiene
$$
(\vec A\times\vec B)_z=(3\cdot2-0\cdot1)\,\mathrm{m^2}=+6\,\mathrm{m^2}.
$$
La componente è positiva perché da $\vec A$ a $\vec B$ si gira in senso antiorario. Scambiando l'ordine, la componente diventa $(\vec B\times\vec A)_z=(1\cdot0-2\cdot3)\,\mathrm{m^2}=-6\,\mathrm{m^2}$. L'area geometrica resta $6\,\mathrm{m^2}$, perché usa il modulo, ed è uguale alla base $3\,\mathrm m$ per l'altezza $2\,\mathrm m$ della figura.

::grafico{poligoni="0,0 3,0 4,2 1,2" vettori="0,0,3,0,A;0,0,1,2,B" segmenti="1,0,1,2" xmin=-1 xmax=5 ymin=-1 ymax=3.8 nomi="x (m),y (m)" uguale=1 titolo="La base di 3 m e l'altezza di 2 m danno un'area di 6 m²."}
:::
