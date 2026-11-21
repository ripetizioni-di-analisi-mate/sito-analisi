---
titolo: "Misure, strumenti e incertezze"
sommario: "Letture, misure ripetute, intervalli e propagazione delle incertezze con criteri espliciti."
---

Il risultato di una misura si scrive con un numero, un'incertezza e un'unità, come $l=(12{,}0\pm0{,}2)\,\mathrm{cm}$, che indica una lunghezza compresa fra $11{,}8$ e $12{,}2$ centimetri. In questo capitolo si vede come si legge uno strumento, come si ricava l'incertezza da una o da più letture e come si calcola l'incertezza di una somma, di un prodotto o di un quoziente di misure.

## Strumenti e risoluzione

:::definizione{#strumenti titolo="Portata, divisioni e lettura"}
Una grandezza è una proprietà che si esprime con un numero e un'unità di misura, come una lunghezza di $12\,\mathrm{cm}$ (il centimetro ha simbolo $\mathrm{cm}$), una massa o una forza. Il valore che si legge sullo strumento si chiama **lettura**.

Molti strumenti hanno una scala, cioè una fila di trattini, detti tacche, con alcuni numeri scritti accanto. La posizione sulla scala è segnata da un indice, per esempio una lancetta. Uno strumento con la scala, come il righello, si dice analogico; la parte su cui è disegnata la scala si chiama anche quadrante. Uno strumento che mostra le cifre su un display si dice digitale.

- La **portata** è il campo dei valori che lo strumento misura. Su una scala che inizia da zero si indica con il valore più grande della scala, che è il massimo valore misurabile: un righello con la scala da $0$ a $30\,\mathrm{cm}$ ha portata $30\,\mathrm{cm}$.
- La **divisione**, detta anche passo della scala, è il valore dello spazio fra due tacche consecutive.
- La **risoluzione** è la più piccola variazione della grandezza che lo strumento distingue. Su una scala analogica di norma è uguale a una divisione.

Il dinamometro è lo strumento che misura le forze, la cui unità è il newton (simbolo $\mathrm N$). Sulla scala di un dinamometro le tacche con i numeri $2\,\mathrm N$ e $6\,\mathrm N$ sono separate da otto spazi uguali. Ogni spazio vale quindi
$$
\frac{6\,\mathrm N-2\,\mathrm N}{8}=\frac{4\,\mathrm N}{8}=0{,}5\,\mathrm N.
$$
La divisione, e con essa la risoluzione, è $0{,}5\,\mathrm N$. Nel conto entrano gli spazi fra le tacche, che sono uno in meno delle tacche: otto spazi sono delimitati da nove tacche.
:::

:::osservazione{#criterio-lettura titolo="Risoluzione e incertezza assegnata"}
L'indice cade di solito fra due tacche e la sua posizione è stimata a occhio, quindi una lettura è approssimata. L'**incertezza** di una misura è il numero che indica di quanto il valore della grandezza si discosta al massimo dalla lettura. La parte di incertezza dovuta allo strumento si chiama **incertezza strumentale**, o incertezza di lettura.

La risoluzione è una proprietà dello strumento. L'incertezza strumentale dipende anche dalla regola scelta per l'esperimento; l'insieme di queste regole si chiama **protocollo**. Le regole più usate sono tre.

- **Metà divisione**, la regola più comune a scuola per le scale analogiche. Sulla scala della figura, che ha divisioni da $0{,}5\,\mathrm N$, l'incertezza è $\dfrac{0{,}5\,\mathrm N}{2}=0{,}25\,\mathrm N$.
- **Una divisione intera.** Sulla stessa scala l'incertezza è $0{,}5\,\mathrm N$.
- **Il valore dichiarato dal costruttore** nelle istruzioni dello strumento. Questo valore comprende anche altre cause di incertezza, oltre alla lettura della scala.

Per uno strumento digitale la risoluzione è il valore di un'unità dell'ultima cifra del display. Un cronometro che mostra i centesimi di secondo (il secondo ha simbolo $\mathrm s$) cambia lettura a passi di $0{,}01\,\mathrm s$, quindi ha risoluzione $0{,}01\,\mathrm s$. La distanza fra la lettura e il valore di riferimento è un dato diverso. Se il costruttore dichiara un'incertezza di $0{,}03\,\mathrm s$, l'incertezza della lettura è $0{,}03\,\mathrm s$.

Nei calcoli si usa la regola dichiarata per l'esperimento.
:::

::grafico{assi=0 xmin=1.6 xmax=6.4 ymin=-0.8 ymax=1.1 linee="2,0 6,0;2,-0.12 2,0.12;2.5,-0.08 2.5,0.08;3,-0.12 3,0.12;3.5,-0.08 3.5,0.08;4,-0.12 4,0.12;4.5,-0.08 4.5,0.08;5,-0.12 5,0.12;5.5,-0.08 5.5,0.08;6,-0.12 6,0.12" etichette="2,0.35,2 N;4,0.35,4 N;6,0.35,6 N;2.25,-0.31,0,5 N" titolo="Otto intervalli uguali separano 2 N da 6 N"}

:::esempio{titolo="Leggere senza spostare lo zero"}
La lunghezza di un segmento è la differenza fra le posizioni dei suoi due estremi sul righello, quindi si misura a partire da una tacca qualsiasi. Se l'estremo iniziale è sulla tacca $1{,}2\,\mathrm{cm}$ e quello finale sulla tacca $5{,}8\,\mathrm{cm}$, la lunghezza è
$$
5{,}8\,\mathrm{cm}-1{,}2\,\mathrm{cm}=4{,}6\,\mathrm{cm}.
$$
Si supponga ora che lo zero del righello sia spostato, cioè che ogni posizione letta superi quella vera di una stessa quantità, per esempio $0{,}1\,\mathrm{cm}$. Uno spostamento uguale per tutte le letture si chiama **offset**, parola inglese che significa «scostamento». Le posizioni vere dei due estremi sono allora $1{,}1$ e $5{,}7\,\mathrm{cm}$ e la loro differenza è ancora $5{,}7-1{,}1=4{,}6\,\mathrm{cm}$. L'offset è lo stesso nelle due letture, quindi nella differenza si cancella. Questo vale quando i due estremi sono letti sullo stesso righello, tenuto fermo fra una lettura e l'altra.
:::

:::esempio{#scelta-strumento titolo="Scegliere lo strumento prima di leggere"}
Si misura una forza prevista fra $8$ e $12\,\mathrm N$, con incertezza di lettura di al più $0{,}25\,\mathrm N$. Il protocollo assegna metà divisione. Sono disponibili due dinamometri.

| Dinamometro | Portata | Divisione | Incertezza (metà divisione) |
| --- | ---: | ---: | ---: |
| Primo | $10\,\mathrm N$ | $0{,}2\,\mathrm N$ | $0{,}1\,\mathrm N$ |
| Secondo | $20\,\mathrm N$ | $0{,}5\,\mathrm N$ | $0{,}25\,\mathrm N$ |

Le due richieste, sulla portata e sull'incertezza, sono indipendenti. Si verifica prima la portata. Il primo dinamometro misura fino a $10\,\mathrm N$, quindi le forze fra $10$ e $12\,\mathrm N$ sono fuori dalla sua scala, anche se la sua incertezza è la più piccola. Il secondo misura fino a $20\,\mathrm N$ e comprende tutti i valori fra $8$ e $12\,\mathrm N$, come mostra la figura.

Si confronta poi l'incertezza con il limite richiesto. Il secondo dinamometro ha incertezza $0{,}25\,\mathrm N$, uguale al limite, quindi la richiesta è soddisfatta. Lo strumento adatto è il **secondo**.

::grafico{assi=0 xmin=-1 xmax=23 ymin=-0.7 ymax=3.2 linee="8,2.5 12,2.5;0,1.5 10,1.5;0,.5 20,.5" punti="8,2.5,pieno;12,2.5,pieno;10,1.5,pieno;20,.5,pieno" etichette="10,2.95,Valori attesi da 8 a 12 N;5,1.95,Scala 1 fino a 10 N;10,.95,Scala 2 fino a 20 N" titolo="Solo la seconda scala comprende tutto l’intervallo fra 8 e 12 N"}
:::

## Misure ripetute

:::definizione{#ripetute titolo="Media e semidispersione"}
Quando la stessa grandezza si misura più volte con lo stesso strumento e nello stesso modo, le letture risultano di solito un po' diverse. Si considerino tre letture di una lunghezza, $9{,}8$, $10{,}0$ e $10{,}2\,\mathrm{cm}$.

La **media aritmetica** è la somma delle letture divisa per il loro numero:
$$
\frac{9{,}8+10{,}0+10{,}2}{3}\,\mathrm{cm}=\frac{30{,}0}{3}\,\mathrm{cm}=10{,}0\,\mathrm{cm}.
$$
La **semidispersione massima**, o semplicemente semidispersione, è metà della differenza fra la lettura più grande e la più piccola:
$$
\frac{10{,}2-9{,}8}{2}\,\mathrm{cm}=\frac{0{,}4}{2}\,\mathrm{cm}=0{,}2\,\mathrm{cm}.
$$
La media è il valore che si prende come risultato della serie. La semidispersione si usa come incertezza della serie; nel suo calcolo entrano soltanto le due letture estreme.

Con le lettere, le $n$ letture si indicano con $x_1,x_2,\ldots,x_n$: il numero scritto in basso, detto pedice, indica il posto della lettura nella serie. La media si indica con $\bar x$, che si legge «x medio». La lettura più grande e la più piccola si indicano con $x_{\max}$ e $x_{\min}$, la semidispersione con $s$:
$$
\bar x=\frac{x_1+\cdots+x_n}{n},\qquad s=\frac{x_{\max}-x_{\min}}2.
$$
:::

:::esempio{titolo="Media e punto medio degli estremi"}
Le letture di una lunghezza sono $8$, $8$ e $14\,\mathrm{cm}$. La media è
$$
\frac{8+8+14}{3}\,\mathrm{cm}=\frac{30}{3}\,\mathrm{cm}=10\,\mathrm{cm}.
$$
Il **punto medio** degli estremi è il valore a metà strada fra la lettura più piccola e la più grande:
$$
\frac{8+14}{2}\,\mathrm{cm}=11\,\mathrm{cm}.
$$
Nella media la lettura $8$ compare due volte e la lettura $14$ una volta sola. Per questo la media è più vicina a $8$ di quanto lo sia il punto medio. La semidispersione è $\dfrac{14-8}{2}\,\mathrm{cm}=3\,\mathrm{cm}$.

Un **intervallo** è l'insieme di tutti i valori compresi fra due numeri, detti estremi. La scrittura $[7;13]$ indica i valori da $7$ a $13$, estremi compresi. Il valore a metà dell'intervallo è il centro e metà della larghezza è il **raggio**. L'intervallo che ha per centro la media $10\,\mathrm{cm}$ e per raggio la semidispersione $3\,\mathrm{cm}$ è
$$
[10-3;\,10+3]\,\mathrm{cm}=[7;13]\,\mathrm{cm}
$$
e la lettura $14\,\mathrm{cm}$ ne resta fuori. Questo accade quando le letture sono asimmetriche rispetto alla media. L'intervallo che contiene tutte le letture è quello fra le due estreme, $[8;14]\,\mathrm{cm}$. Nella figura il punto medio degli estremi è indicato come mezzeria.
:::

::grafico{assi=0 xmin=6.5 xmax=15 ymin=-0.8 ymax=2 linee="8,0 14,0" punti="8,0,pieno;10,0,pieno;11,0,pieno;14,0,pieno" etichette="8,0.34,8 due volte;10,-0.34,media 10;11,0.60,mezzeria 11;14,0.34,14" titolo="Media campionaria e punto medio degli estremi in centimetri"}

:::osservazione{#dispersione-strumentale titolo="Quando le letture coincidono"}
Se tutte le letture di una serie sono uguali, la lettura più grande e la più piccola coincidono e la semidispersione è zero. La misura ha comunque un'incertezza, perché lo strumento distingue soltanto variazioni grandi almeno quanto la sua risoluzione. Per questo molti protocolli assegnano come incertezza il **maggiore** fra l'incertezza strumentale e la semidispersione. Il confronto si fa dopo aver scritto i due valori nella stessa unità.

Una serie ha semidispersione $0{,}05\,\mathrm{cm}$ e l'incertezza di lettura è $1\,\mathrm{mm}$. Il simbolo $\mathrm{mm}$ indica il millimetro e $1\,\mathrm{cm}=10\,\mathrm{mm}$, quindi
$$
0{,}05\,\mathrm{cm}=0{,}05\cdot10\,\mathrm{mm}=0{,}5\,\mathrm{mm}.
$$
Poiché $0{,}5\,\mathrm{mm}<1\,\mathrm{mm}$, l'incertezza assegnata è $1\,\mathrm{mm}$. Il maggiore fra due valori si indica con $\max$ e il minore con $\min$: qui $\max(0{,}5\,\mathrm{mm};\,1\,\mathrm{mm})=1\,\mathrm{mm}$.
:::

:::osservazione{#intervallo-osservato titolo="Descrivere la serie e racchiudere tutti i dati"}
Una serie di letture si riassume in due modi, a seconda della domanda.

- Per indicare la posizione media delle letture si usa la media, nel cui calcolo entrano tutte le letture.
- Per indicare il più piccolo intervallo che racchiude tutte le letture bastano le due letture estreme.

Si considerino le letture $3$, $4$, $5$ e $10\,\mathrm{mm}$. Un intervallo che contiene tutte le letture contiene $3$ e $10$, quindi contiene tutti i valori fra $3$ e $10\,\mathrm{mm}$. Il più piccolo è $[3;10]\,\mathrm{mm}$, che ha centro e raggio
$$
\frac{3+10}{2}\,\mathrm{mm}=6{,}5\,\mathrm{mm},\qquad \frac{10-3}{2}\,\mathrm{mm}=3{,}5\,\mathrm{mm}.
$$
La media della serie è
$$
\frac{3+4+5+10}{4}\,\mathrm{mm}=\frac{22}{4}\,\mathrm{mm}=5{,}5\,\mathrm{mm}.
$$
Un intervallo con il centro nella media arriva a contenere tutte le letture quando raggiunge la più lontana. La lettura $10$ dista $10-5{,}5=4{,}5\,\mathrm{mm}$ dalla media e la lettura $3$ dista $5{,}5-3=2{,}5\,\mathrm{mm}$, quindi serve il raggio $4{,}5\,\mathrm{mm}$, maggiore di $3{,}5\,\mathrm{mm}$. Il punto medio degli estremi dà quindi l'intervallo più stretto.

La **mediana** di una serie con un numero dispari di letture è la lettura che occupa il posto centrale, dopo che le letture sono state messe in ordine dalla più piccola alla più grande. Le serie A e B della tabella contengono cinque masse in grammi (il grammo ha simbolo $\mathrm g$), già in ordine, e sono diverse soltanto nell'ultima lettura.

| Lettura | A (g) | B (g) |
| --- | ---: | ---: |
| 1 | 4 | 4 |
| 2 | 4 | 4 |
| 3 | 5 | 5 |
| 4 | 11 | 11 |
| 5 | 16 | 36 |

Le medie sono
$$
\frac{4+4+5+11+16}{5}\,\mathrm g=\frac{40}{5}\,\mathrm g=8\,\mathrm g,\qquad
\frac{4+4+5+11+36}{5}\,\mathrm g=\frac{60}{5}\,\mathrm g=12\,\mathrm g.
$$
L'ultima lettura di B supera di $20\,\mathrm g$ quella di A. La somma aumenta quindi di $20\,\mathrm g$ e la media aumenta di $\dfrac{20}{5}\,\mathrm g=4\,\mathrm g$. In entrambe le serie la lettura al terzo posto, quello centrale, è $5\,\mathrm g$, quindi la mediana è $5\,\mathrm g$ per tutte e due. Una lettura estrema molto diversa dalle altre sposta la media e lascia invariata la mediana. La figura riporta le due serie.

I soli numeri non bastano per stabilire se la lettura da $36\,\mathrm g$ sia utilizzabile. Per deciderlo si risale alle condizioni in cui è stata ottenuta.

::grafico{linee="1,4 2,4 3,5 4,11 5,16;1,4 2,4 3,5 4,11 5,36" xmin=0 xmax=6 ymin=0 ymax=40 punti="3,5,pieno;5,16,pieno;5,36,pieno" nomi="ordine,m (g)" etichette="3.9,6,5 g;5,19,16 g;4.3,36,36 g" titolo="Variando l’ultimo dato ordinato, il terzo valore della serie resta 5 g"}
:::

## Scrivere un risultato e il suo intervallo

:::definizione{#intervalli titolo="Valore centrale e incertezza assoluta"}
Il risultato di una misura si scrive con due numeri e un'unità, per esempio $l=(12{,}0\pm0{,}2)\,\mathrm{cm}$. Il simbolo $\pm$ si legge «più o meno».

- $12{,}0\,\mathrm{cm}$ è il **valore centrale**: la lettura, oppure la media di più letture.
- $0{,}2\,\mathrm{cm}$ è l'**incertezza assoluta**, detta anche errore assoluto, cioè l'incertezza espressa nella stessa unità della misura.

La scrittura indica l'intervallo che si ottiene togliendo e aggiungendo l'incertezza al valore centrale:
$$
12{,}0-0{,}2=11{,}8\,\mathrm{cm},\qquad 12{,}0+0{,}2=12{,}2\,\mathrm{cm}.
$$
L'intervallo è simmetrico rispetto al valore centrale. La sua larghezza è $12{,}2-11{,}8=0{,}4\,\mathrm{cm}$, il doppio dell'incertezza. L'incertezza assoluta è quindi il raggio dell'intervallo e il simbolo $\pm$ riassume il valore centrale e i due estremi.

Con le lettere il risultato si scrive $x=(x_m\pm\Delta x)$. Il simbolo $x_m$ indica il valore centrale. La lettera greca $\Delta$ (delta maiuscola) scritta davanti a $x$ forma un unico simbolo, $\Delta x$, che si legge «delta x» e indica l'incertezza assoluta di $x$. Vale $\Delta x\geq 0$, dove $\geq$ si legge «maggiore o uguale». Valore centrale e incertezza hanno la stessa unità.

Per dare all'intervallo un significato statistico, per esempio la probabilità che il valore della grandezza vi cada, serve conoscere il metodo con cui è stata assegnata l'incertezza.
:::

:::osservazione{#compatibilita titolo="Compatibilità per sovrapposizione"}
Per stabilire se due misure della stessa grandezza sono in accordo si confrontano i loro intervalli. Secondo il **criterio di sovrapposizione**, due misure sono **compatibili** se i loro intervalli hanno almeno un valore in comune.

La misura A è $(12{,}0\pm0{,}2)\,\mathrm{cm}$ e ha intervallo $[11{,}8;12{,}2]\,\mathrm{cm}$. La misura B è $(12{,}3\pm0{,}2)\,\mathrm{cm}$ e ha intervallo $[12{,}1;12{,}5]\,\mathrm{cm}$. I valori fra $12{,}1$ e $12{,}2\,\mathrm{cm}$ appartengono a entrambi gli intervalli, come mostra la figura. Le misure A e B sono quindi compatibili.

Gli intervalli comprendono i loro estremi, cioè sono intervalli chiusi. Due intervalli che si toccano in un estremo, come $[11{,}8;12{,}2]$ e $[12{,}2;12{,}6]$, hanno in comune il valore $12{,}2$. Anche queste misure sono compatibili secondo il criterio.

Due misure compatibili, con le loro incertezze, ammettono uno stesso valore della grandezza. Per valutare la qualità del metodo servono anche informazioni sulla lettura e sulla taratura dello strumento, cioè sul suo controllo con oggetti di valore noto.
:::

::grafico{assi=0 xmin=11.7 xmax=12.6 ymin=-0.3 ymax=1.5 linee="11.8,0.83 12.2,0.83;12.1,0.38 12.5,0.38" punti="11.8,0.83;12.2,0.83;12.1,0.38;12.5,0.38" segmenti="12.1,0.25,12.1,0.95;12.2,0.25,12.2,0.95" etichette="11.94,1.05,misura A;12.36,0.15,misura B" titolo="Gli intervalli in centimetri condividono il tratto da 12,1 a 12,2"}

:::esempio{#intervallo-tolleranza titolo="Verificare un limite di accettazione"}
Un pezzo è accettato se la sua lunghezza è compresa fra $49$ e $53\,\mathrm{mm}$, estremi inclusi. L'intervallo dei valori accettati si chiama **specifica**, o intervallo di tolleranza. La misura del pezzo è $(50\pm2)\,\mathrm{mm}$ e il suo intervallo è $[48;52]\,\mathrm{mm}$.

Una regola si dice **prudenziale** quando considera il caso più sfavorevole. Qui la regola prudenziale considera possibile ogni valore dell'intervallo della misura.

- L'estremo superiore della misura, $52\,\mathrm{mm}$, è minore di $53\,\mathrm{mm}$, quindi è ammesso.
- L'estremo inferiore della misura, $48\,\mathrm{mm}$, è minore di $49\,\mathrm{mm}$, quindi è sotto la soglia.

I due intervalli hanno in comune i valori da $49$ a $52\,\mathrm{mm}$, quindi la misura è compatibile con la specifica. Per concludere che il pezzo rispetta la specifica per ogni valore dell'intervallo della misura servirebbe che entrambi gli estremi fossero ammessi. Qui i valori fra $48$ e $49\,\mathrm{mm}$ restano fuori, come mostra la figura.

Con lo stesso valore centrale $50\,\mathrm{mm}$, il margine verso il basso è $50-49=1\,\mathrm{mm}$ e quello verso l'alto è $53-50=3\,\mathrm{mm}$. L'incertezza si toglie e si aggiunge nella stessa quantità, quindi è al più il minore dei due margini:
$$
\Delta_{\max}=\min(1\,\mathrm{mm};\,3\,\mathrm{mm})=1\,\mathrm{mm}.
$$

::grafico{assi=0 xmin=46.8 xmax=54.2 ymin=-0.1 ymax=2.65 linee="49,1.8 53,1.8;48,.7 52,.7" punti="49,1.8,pieno;53,1.8,pieno;48,.7,pieno;52,.7,pieno" segmenti="49,.55,49,1.93;52,.55,52,1.93" etichette="51,2.15,Specifica da 49 a 53 mm;50,.28,Misura da 48 a 52 mm" titolo="La misura condivide una parte della specifica e raggiunge 48 mm al di fuori di essa"}
:::

## Incertezza relativa e percentuale

:::definizione{#relativa titolo="Confrontare l'incertezza con la misura"}
Un'incertezza di $1\,\mathrm g$ è piccola per una massa di $1000\,\mathrm g$ ed è grande per una massa di $5\,\mathrm g$. L'**incertezza relativa** è il rapporto, cioè il quoziente, fra l'incertezza assoluta e il valore centrale. Si indica con la lettera greca $\varepsilon$ (epsilon) ed è definita per un valore centrale positivo:
$$
\varepsilon=\frac{\Delta x}{x_m}.
$$
Per la massa $m=(50\pm1)\,\mathrm g$ risulta
$$
\varepsilon=\frac{1\,\mathrm g}{50\,\mathrm g}=0{,}02.
$$
Numeratore e denominatore sono espressi nella stessa unità, quindi l'unità si semplifica e il risultato è un numero senza unità di misura. Un numero di questo tipo si dice **adimensionale**. Se le unità sono diverse, si portano alla stessa unità prima di dividere.

L'**incertezza percentuale** è l'incertezza relativa moltiplicata per cento, cioè $100\,\varepsilon$, e si scrive con il simbolo $\%$, che si legge «per cento». Per la massa dell'esempio è $0{,}02\cdot100=2\%$.

Il passaggio inverso ricava l'incertezza assoluta dalla percentuale: si divide la percentuale per cento e si moltiplica per il valore centrale. Per una massa di $50\,\mathrm g$ con incertezza del $2\%$ si ottiene
$$
\Delta m=\frac{2}{100}\cdot50\,\mathrm g=1\,\mathrm g.
$$
:::

:::esempio{titolo="Confrontare risoluzioni relative"}
Due strumenti misurano le lunghezze $(10\pm1)\,\mathrm{mm}$ e $(100\pm1)\,\mathrm{mm}$. L'incertezza assoluta è la stessa e gli intervalli, $[9;11]$ e $[99;101]\,\mathrm{mm}$, hanno entrambi larghezza $2\,\mathrm{mm}$. Le incertezze relative sono
$$
\frac{1\,\mathrm{mm}}{10\,\mathrm{mm}}=0{,}1=10\%,\qquad
\frac{1\,\mathrm{mm}}{100\,\mathrm{mm}}=0{,}01=1\%.
$$
Fra due misure si dice più **precisa** quella con l'incertezza relativa minore, qui la seconda.

Se il valore centrale è zero, la divisione $\dfrac{\Delta x}{0}$ è priva di significato e l'incertezza relativa è indefinita. La misura si scrive comunque con l'incertezza assoluta, per esempio $(0{,}0\pm0{,}1)\,\mathrm{mm}$.
:::

## Propagazione delle incertezze

::::teorema{#propagazione titolo="Stime prudenziali e approssimazioni lineari"}
Una grandezza calcolata a partire da altre grandezze misurate ha anch'essa un'incertezza. Il calcolo di questa incertezza a partire da quelle dei dati, detti anche ingressi, si chiama **propagazione delle incertezze**.

Le regole che seguono sono prudenziali. Ogni ingresso ha un intervallo simmetrico, $a=(a_m\pm\Delta a)$ e $b=(b_m\pm\Delta b)$, ed è libero di assumere qualsiasi valore del proprio intervallo, qualunque sia il valore dell'altro. Si cerca la massima distanza del risultato dal suo valore centrale.

- **Somma e differenza.** L'incertezza assoluta di $a+b$ e di $a-b$ è la somma delle incertezze assolute, $\Delta a+\Delta b$. Per $a=(12{,}0\pm0{,}2)\,\mathrm{cm}$ e $b=(5{,}0\pm0{,}1)\,\mathrm{cm}$ la somma è $(17{,}0\pm0{,}3)\,\mathrm{cm}$ e la differenza è $(7{,}0\pm0{,}3)\,\mathrm{cm}$.
- **Prodotto e quoziente** di grandezze positive con incertezze relative piccole. L'incertezza relativa del risultato è circa la somma delle incertezze relative, $\varepsilon\simeq\varepsilon_a+\varepsilon_b$. Il simbolo $\simeq$ si legge «circa uguale». Se la base di un rettangolo ha incertezza del $2\%$ e l'altezza del $3\%$, l'area ha incertezza di circa il $5\%$.
- **Potenza.** Per $z=x^n$ con $x>0$ vale $\varepsilon_z\simeq\lvert n\rvert\,\varepsilon_x$. La scrittura $\lvert n\rvert$ indica il valore assoluto di $n$, cioè $n$ senza il segno. Per l'area di un quadrato, che è il lato elevato alla seconda, è $n=2$.

Le regole per prodotto, quoziente e potenza sono approssimazioni **al primo ordine**, dette anche lineari, perché trascurano i prodotti fra due incertezze relative: con $0{,}02$ e $0{,}03$ il termine trascurato è $0{,}02\cdot0{,}03=0{,}0006$.

:::dimostrazione
*Somma.* La somma è massima quando entrambi i dati sono all'estremo superiore del proprio intervallo:
$$
(a_m+\Delta a)+(b_m+\Delta b)=(a_m+b_m)+(\Delta a+\Delta b).
$$
È minima quando entrambi sono all'estremo inferiore, e vale $(a_m+b_m)-(\Delta a+\Delta b)$. In entrambi i casi la distanza dal valore centrale $a_m+b_m$ è $\Delta a+\Delta b$.

*Differenza.* La differenza è massima quando $a$ è all'estremo superiore e $b$ all'estremo inferiore:
$$
(a_m+\Delta a)-(b_m-\Delta b)=(a_m-b_m)+(\Delta a+\Delta b).
$$
Anche qui la distanza dal valore centrale è $\Delta a+\Delta b$.

*Prodotto.* Dalla definizione $\varepsilon_a=\dfrac{\Delta a}{a_m}$ segue $\Delta a=\varepsilon_a\,a_m$, quindi l'estremo superiore di $a$ è $a_m+\varepsilon_a a_m=a_m(1+\varepsilon_a)$. Allo stesso modo l'estremo superiore di $b$ è $b_m(1+\varepsilon_b)$. Il prodotto dei due estremi superiori è
$$
a_m(1+\varepsilon_a)\cdot b_m(1+\varepsilon_b)=a_mb_m\,(1+\varepsilon_a+\varepsilon_b+\varepsilon_a\varepsilon_b).
$$
L'aumento relativo rispetto al valore centrale $a_mb_m$ è $\varepsilon_a+\varepsilon_b+\varepsilon_a\varepsilon_b$. L'approssimazione al primo ordine conserva i due termini lineari $\varepsilon_a+\varepsilon_b$ e trascura il prodotto $\varepsilon_a\varepsilon_b$.

*Quoziente.* Il quoziente è massimo con il numeratore più grande e il denominatore più piccolo:
$$
\frac{a_m(1+\varepsilon_a)}{b_m(1-\varepsilon_b)}.
$$
Se $\varepsilon_b$ è piccolo, il reciproco di $1-\varepsilon_b$ è circa $1+\varepsilon_b$. Infatti $(1-\varepsilon_b)(1+\varepsilon_b)=1-\varepsilon_b^2$, che differisce da $1$ soltanto per il termine $\varepsilon_b^2$, trascurabile al primo ordine. Il quoziente massimo è perciò circa $\dfrac{a_m}{b_m}(1+\varepsilon_a)(1+\varepsilon_b)$ e, come per il prodotto, l'aumento relativo è circa $\varepsilon_a+\varepsilon_b$.

*Potenza.* Il quadrato $x^2$ è il prodotto $x\cdot x$, quindi per la regola del prodotto la sua incertezza relativa è circa $\varepsilon_x+\varepsilon_x=2\varepsilon_x$. Con $n$ fattori uguali si ottiene $n\,\varepsilon_x$. Per un esponente negativo, come in $x^{-1}=\dfrac1x$, si applica la regola del quoziente, e per questo nella formula compare $\lvert n\rvert$.
:::
::::

:::esempio{#limiti-esatti titolo="Dagli intervalli ai limiti esatti"}
Il lato di un quadrato è $l=(10\pm1)\,\mathrm{cm}$. Il valore $10\,\mathrm{cm}$ è il valore **nominale**, cioè il valore centrale dichiarato. Il lato è compreso fra $9$ e $11\,\mathrm{cm}$. L'area è il quadrato del lato e cresce al crescere del lato, quindi i suoi estremi si calcolano dagli estremi del lato:
$$
9^2=81\,\mathrm{cm}^2,\qquad 11^2=121\,\mathrm{cm}^2.
$$
Il simbolo $\mathrm{cm}^2$ indica il centimetro quadrato, unità di misura dell'area. Il valore nominale dell'area è $10^2=100\,\mathrm{cm}^2$.

La stima lineare usa la regola della potenza. L'incertezza relativa del lato è $\dfrac{1}{10}=10\%$, quindi quella dell'area è circa $2\cdot10\%=20\%$. L'incertezza assoluta dell'area è allora $\dfrac{20}{100}\cdot100\,\mathrm{cm}^2=20\,\mathrm{cm}^2$ e l'intervallo approssimato va da $80$ a $120\,\mathrm{cm}^2$.

Gli estremi esatti superano di $1\,\mathrm{cm}^2$ quelli della stima lineare. La differenza è il termine quadratico trascurato:
$$
(10+1)^2=10^2+2\cdot10\cdot1+1^2=100+20+1.
$$
Il termine $20$ è lineare e il termine $1$ è quadratico. Quando serve un limite superiore dell'area garantito dagli intervalli dei dati, si usa quello esatto, $121\,\mathrm{cm}^2$.
:::

:::attenzione{titolo="Vincoli fra gli ingressi"}
La somma delle incertezze assolute vale per ingressi liberi di scostarsi ciascuno per conto proprio. Quando la stessa lettura compare due volte in una formula, i suoi due scostamenti sono lo stesso scostamento. Per $a=(5{,}0\pm0{,}1)\,\mathrm{cm}$ la differenza $a-a$ vale $0$ qualunque sia il valore di $a$, quindi la sua incertezza è zero. La regola della somma darebbe invece $0{,}1+0{,}1=0{,}2\,\mathrm{cm}$, perché tratta come possibili due scostamenti opposti. La regola si sceglie perciò in base a ciò che si conosce sugli ingressi.

Per un quoziente si richiede inoltre che l'intervallo del denominatore resti lontano da zero. Con un denominatore $(1\pm1)\,\mathrm{cm}$ l'intervallo va da $0$ a $2\,\mathrm{cm}$ e contiene lo zero, per il quale la divisione è priva di significato.
:::

:::esempio{#rapporto-asimmetrico titolo="Un quoziente con scarti diversi ai due lati"}
La **densità** di un corpo è il rapporto fra la sua massa e il suo volume. Si indica con la lettera greca $\rho$ (rho): $\rho=\dfrac mV$. Si misurano una massa $m=(50\pm2)\,\mathrm g$ e un volume $V=(10\pm1)\,\mathrm{cm}^3$, dove $\mathrm{cm}^3$ è il centimetro cubo, unità di misura del volume. Si considerano ammesse tutte le combinazioni dei valori dei due intervalli. La densità nominale è
$$
\rho=\frac{50\,\mathrm g}{10\,\mathrm{cm}^3}=5\,\mathrm{g/cm^3},
$$
che si legge «cinque grammi al centimetro cubo».

A volume fissato la densità cresce al crescere della massa. A massa fissata diminuisce al crescere del volume, perché il volume è al denominatore. La densità minima si ottiene quindi con la massa minore, $48\,\mathrm g$, e il volume maggiore, $11\,\mathrm{cm}^3$. La massima si ottiene con la coppia opposta, $52\,\mathrm g$ e $9\,\mathrm{cm}^3$.
$$
\rho_{\min}=\dfrac{48}{11}\,\mathrm{g/cm^3}\simeq4{,}36\,\mathrm{g/cm^3},
\qquad
\rho_{\max}=\dfrac{52}{9}\,\mathrm{g/cm^3}\simeq5{,}78\,\mathrm{g/cm^3}.
$$
Lo scarto è la differenza dal valore nominale. Verso il basso vale $5-4{,}36=0{,}64\,\mathrm{g/cm^3}$ e verso l'alto $5{,}78-5=0{,}78\,\mathrm{g/cm^3}$.

La stima lineare somma le incertezze relative:
$$
\varepsilon_m=\frac{2}{50}=4\%,\qquad \varepsilon_V=\frac{1}{10}=10\%,\qquad \varepsilon_\rho\simeq4\%+10\%=14\%.
$$
Lo scarto corrispondente è $\dfrac{14}{100}\cdot5\,\mathrm{g/cm^3}=0{,}70\,\mathrm{g/cm^3}$, uguale dai due lati, e l'intervallo approssimato va da $4{,}30$ a $5{,}70\,\mathrm{g/cm^3}$. Questa stima è rapida da calcolare, e il suo estremo superiore è minore di quello esatto. Se il risultato deve racchiudere tutti i valori ammessi dagli intervalli dei dati, si conserva il limite superiore esatto, $5{,}78\,\mathrm{g/cm^3}$.
:::

:::esempio{#ingressi-vincolati titolo="Il vincolo fra le misure cambia gli estremi"}
Un rettangolo ha i lati $a$ e $b$ legati dalla relazione $a+b=10\,\mathrm{cm}$. Una relazione che lega due grandezze si chiama **vincolo**. Dal vincolo segue $b=10-a$. Se $a$ è compreso fra $4$ e $6\,\mathrm{cm}$, anche $b$ lo è, ma al crescere di un lato l'altro diminuisce: per $a=4$ risulta $b=6$ e per $a=6$ risulta $b=4$.

L'area è il prodotto dei lati. Usando i valori numerici in centimetri, si scrive
$$
A=a(10-a)=25-(a-5)^2.
$$
La seconda uguaglianza si verifica sviluppando il quadrato: $25-(a-5)^2=25-(a^2-10a+25)=10a-a^2$, che è proprio $a(10-a)$. Il quadrato $(a-5)^2$ è positivo o nullo ed è nullo soltanto per $a=5$. L'area massima è quindi $25\,\mathrm{cm}^2$ e si raggiunge per $a=b=5\,\mathrm{cm}$. Agli estremi $a=4$ e $a=6$ l'area vale $25-1=24\,\mathrm{cm}^2$, come mostra la figura.

Due lati entrambi di $6\,\mathrm{cm}$ avrebbero somma $12\,\mathrm{cm}$, contro il vincolo. Se invece le due misure fossero indipendenti e avessero lo stesso intervallo, la coppia $(6;6)$ sarebbe ammessa e darebbe l'area massima $6\cdot6=36\,\mathrm{cm}^2$. Prima di cercare gli estremi di un risultato si stabilisce quindi quali combinazioni dei dati sono fisicamente possibili.

::grafico{f="25-(x-5)^2" xmin=4 xmax=6 ymin=23 ymax=26 punti="4,24,pieno;5,25,pieno;6,24,pieno" nomi="a (cm),A (cm²)" titolo="Con somma dei lati fissata, la curva raggiunge 25 cm² al centro dell’intervallo"}
:::

## Arrotondare senza aggiungere precisione

:::osservazione{#cifre titolo="Cifre utili nel risultato"}
**Arrotondare** un numero significa sostituirlo con il numero più vicino che ha meno cifre. In un risultato il valore centrale e l'incertezza si scrivono fino alla stessa posizione decimale, perché le cifre del valore centrale più piccole dell'incertezza sono prive di informazione.

Se l'incertezza finale è $0{,}2\,\mathrm{cm}$, che arriva ai decimi, e il calcolo dà il valore centrale $12{,}347\,\mathrm{cm}$, si arrotonda il valore centrale al decimo più vicino. Il numero $12{,}347$ è compreso fra $12{,}3$ e $12{,}4$ ed è più vicino a $12{,}3$. Il risultato si scrive $(12{,}3\pm0{,}2)\,\mathrm{cm}$.

Durante i passaggi si conservano più cifre, perché gli arrotondamenti intermedi si sommano o si amplificano nei calcoli successivi.

Quando l'incertezza è un limite che deve restare prudenziale, il protocollo a volte richiede di arrotondarla verso l'alto, cioè per eccesso. Un'incertezza di $0{,}23\,\mathrm{cm}$ diventa così $0{,}3\,\mathrm{cm}$.
:::

:::esempio{titolo="Arrotondare al decimo"}
Arrotondare al decimo significa conservare una sola cifra dopo la virgola. Si guarda la prima cifra eliminata, che è quella dei centesimi.

- In $12{,}44$ i centesimi sono quattro. Il numero è più vicino a $12{,}4$ che a $12{,}5$, quindi si ottiene $12{,}4$.
- In $12{,}45$ i centesimi sono cinque. Il numero dista $0{,}05$ sia da $12{,}4$ sia da $12{,}5$, cioè è a metà fra i due. Questo caso si chiama parità. Con la convenzione che in caso di parità arrotonda verso l'alto si ottiene $12{,}5$.

Esistono protocolli che trattano la parità in modo diverso, perciò il criterio usato si indica insieme al risultato.
:::

:::esempio{#arrotondamento-intervallo titolo="Arrotondare mantenendo la copertura"}
Una stima dà per una lunghezza l'intervallo da $3{,}17$ a $3{,}57\,\mathrm{cm}$. Il centro e il raggio esatti sono
$$
\frac{3{,}17+3{,}57}{2}\,\mathrm{cm}=3{,}37\,\mathrm{cm},\qquad
\frac{3{,}57-3{,}17}{2}\,\mathrm{cm}=0{,}20\,\mathrm{cm}.
$$
Il protocollo chiede una scrittura simmetrica, centro $\pm$ raggio, con i numeri ai decimi, che contenga tutto l'intervallo della stima. Questa proprietà si chiama copertura.

Il centro arrotondato al decimo è $3{,}4\,\mathrm{cm}$. Dal nuovo centro si calcolano le distanze dai due estremi della stima:
$$
3{,}40-3{,}17=0{,}23\,\mathrm{cm},\qquad 3{,}57-3{,}40=0{,}17\,\mathrm{cm}.
$$
Per conservare la copertura il raggio è almeno la maggiore delle due distanze, $0{,}23\,\mathrm{cm}$. Con il raggio $0{,}2\,\mathrm{cm}$ l'intervallo sarebbe $[3{,}2;3{,}6]\,\mathrm{cm}$ e i valori fra $3{,}17$ e $3{,}2\,\mathrm{cm}$ resterebbero fuori. Il più piccolo raggio in decimi che è almeno $0{,}23\,\mathrm{cm}$ è $0{,}3\,\mathrm{cm}$, che dà l'intervallo $[3{,}1;3{,}7]\,\mathrm{cm}$. Il risultato si scrive $(3{,}4\pm0{,}3)\,\mathrm{cm}$.

::grafico{assi=0 xmin=3.02 xmax=3.76 ymin=0 ymax=3.1 linee="3.17,2.3 3.57,2.3;3.2,1.4 3.6,1.4;3.1,.5 3.7,.5" punti="3.17,2.3,pieno;3.57,2.3,pieno;3.2,1.4,pieno;3.6,1.4,pieno;3.1,.5,pieno;3.7,.5,pieno" segmenti="3.17,.35,3.17,2.45" etichette="3.37,2.7,Stima iniziale;3.42,1.79,Raggio 0,2 cm;3.42,.91,Raggio 0,3 cm" titolo="Il raggio 0,2 cm lascia scoperto l’estremo iniziale a 3,17 cm"}
:::

## Errori casuali e sistematici

:::definizione{#errori titolo="Dispersione e taratura"}
Gli **errori casuali** cambiano da una lettura all'altra, a volte in più e a volte in meno. Si manifestano come differenze fra letture ripetute dello stesso oggetto, cioè come dispersione.

Uno **scarto sistematico**, o errore sistematico, sposta tutte le letture dalla stessa parte e si ripete uguale a ogni lettura dello stesso oggetto. Lo **scarto** di una lettura è la differenza fra la lettura e il valore di riferimento. Una bilancia che nell'intervallo di masse considerato mostra sempre $3\,\mathrm g$ in più ha uno scarto sistematico positivo di $3\,\mathrm g$: per una massa di $6\,\mathrm g$ indica $9\,\mathrm g$, come mostrano i punti A e B della figura.

Un **campione** è un oggetto di cui si conosce già il valore, per esempio una massa di $100\,\mathrm g$ garantita dal costruttore. La ripetizione della misura sullo stesso oggetto descrive la dispersione. Per riconoscere uno scarto sistematico serve invece il confronto con un campione, perché tutte le letture sono spostate insieme. Il confronto con più campioni di valore diverso mostra se lo scarto è un offset, cioè è costante lungo la scala, oppure cambia con il valore misurato. Il controllo di uno strumento con campioni noti si chiama **taratura**.

Sugli strumenti analogici uno scarto frequente è quello di **parallasse**. L'indice si trova un po' davanti al piano della scala, quindi chi lo guarda di lato lo vede spostato rispetto alle tacche. Lo scarto si riduce leggendo con l'occhio di fronte all'indice, lungo la direzione perpendicolare al piano della scala, cioè quella che forma con esso un angolo retto.
:::

::grafico{f="x;x+3" xmin=0 xmax=12 ymin=0 ymax=15 nomi="massa di riferimento (g),lettura (g)" legenda="\text{lettura ideale};\text{lettura con offset}" punti="6,6,pieno,A;6,9,pieno,B" titolo="Un offset di 3 g dà una retta parallela alla lettura ideale"}

:::esempio{titolo="Letture vicine, riferimento lontano"}
Su un campione da $100\,\mathrm g$ una bilancia indica $105{,}0$, $104{,}9$ e $105{,}1\,\mathrm g$. La media e la semidispersione sono
$$
\frac{105{,}0+104{,}9+105{,}1}{3}\,\mathrm g=105{,}0\,\mathrm g,\qquad
\frac{105{,}1-104{,}9}{2}\,\mathrm g=0{,}1\,\mathrm g.
$$
Le letture sono vicine fra loro, quindi gli errori casuali sono piccoli. La media dista $105{,}0-100=5{,}0\,\mathrm g$ dal valore del campione, quindi la bilancia ha uno scarto sistematico di circa $5\,\mathrm g$.

Con più letture la media diventa più stabile e lo scarto si stima meglio. Lo scarto rimane anche se si riduce l'effetto delle oscillazioni casuali, perché è presente in ogni lettura. La correzione di $5\,\mathrm g$ si estende ad altre masse soltanto dopo aver controllato, con altri campioni, che l'offset sia lo stesso anche nel loro intervallo.
:::

:::esempio{#taratura-due-punti titolo="Taratura con sensibilità e zero"}
Nell'intervallo di prova la lettura $r$ di una bilancia è legata alla massa $m$ del campione dalla relazione $r=am+b$, con $r$ e $m$ in grammi.

- Il numero $b$ è l'offset, cioè la lettura per $m=0$. È lo scarto dello zero.
- Il numero $a$ è la **sensibilità**: indica di quanti grammi aumenta la lettura quando la massa aumenta di un grammo. Per una bilancia senza scarti $a=1$ e $b=0$.

La bilancia segna $52\,\mathrm g$ per un campione da $50\,\mathrm g$ e $154\,\mathrm g$ per un campione da $150\,\mathrm g$. Le due condizioni valgono insieme:
$$
\begin{cases}
52=a\cdot50+b\\
154=a\cdot150+b
\end{cases}
$$
Sottraendo la prima uguaglianza dalla seconda l'offset $b$ si elimina e resta $154-52=a\,(150-50)$, da cui
$$
a=\frac{154-52}{150-50}=\frac{102}{100}=1{,}02.
$$
Sostituendo $a$ nella prima uguaglianza si trova $b=52-1{,}02\cdot50=52-51=1\,\mathrm g$.

Per correggere una lettura si ricava $m$ dalla relazione $r=am+b$: si sottrae $b$ e si divide per $a$. Alla lettura $r=103\,\mathrm g$ corrisponde quindi
$$
m=\dfrac{r-b}{a}=\dfrac{103-1}{1{,}02}\,\mathrm g=100\,\mathrm g.
$$
Lo scarto $r-m=0{,}02\,m+1$ cresce con la massa, perché $a$ è diverso da uno: vale $2\,\mathrm g$ per $m=50\,\mathrm g$ e $4\,\mathrm g$ per $m=150\,\mathrm g$. Nella figura lo scarto è una retta inclinata, mentre un offset costante darebbe una retta orizzontale. Sottrarre a ogni lettura i $2\,\mathrm g$ osservati a $50\,\mathrm g$ correggerebbe quindi solo quel campione: per il campione da $150\,\mathrm g$ darebbe $154-2=152\,\mathrm g$.

Un terzo campione nella zona di utilizzo controlla se la relazione ricostruita è adeguata.

::grafico{f=".02*x+1;2" xmin=0 xmax=160 ymin=0 ymax=5 punti="50,2,pieno;150,4,pieno" nomi="m (g),r−m (g)" legenda="\text{scarto osservato};\text{scarto fisso}" titolo="Lo scarto sale da 2 g a 4 g. Un offset costante darebbe una retta orizzontale"}
:::
