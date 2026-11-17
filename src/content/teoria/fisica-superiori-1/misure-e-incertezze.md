---
titolo: "Misure, strumenti e incertezze"
sommario: "Letture, misure ripetute, intervalli e propagazione delle incertezze con criteri espliciti."
---

Due strumenti possono dare letture diverse della stessa lunghezza. Per decidere se la differenza è rilevante servono la risoluzione, il criterio di lettura e, se ci sono più letture, la loro dispersione.

## Strumenti e risoluzione

:::definizione{#strumenti titolo="Portata, divisioni e lettura"}
La **portata** indica il campo utile dello strumento. Su una scala che inizia a zero, il suo estremo superiore è il valore massimo misurabile. La **risoluzione** è la più piccola variazione distinguibile; su una scala analogica è in genere associata alla distanza tra due tacche consecutive. Se i valori $2\,\mathrm N$ e $6\,\mathrm N$ sono separati da otto intervalli uguali, la risoluzione è $\dfrac{6-2}{8}\,\mathrm N=0{,}5\,\mathrm N$. Per il conteggio si usano gli spazi tra le tacche, perché otto intervalli hanno nove estremi.
:::

:::osservazione{#criterio-lettura titolo="Risoluzione e incertezza assegnata"}
La risoluzione è una proprietà dello strumento, mentre l'**incertezza strumentale** dipende anche dal criterio adottato. Un esperimento scolastico può scegliere metà divisione per una scala analogica. Un altro può assegnare una divisione intera o usare il dato del costruttore, che include effetti ulteriori. Uno strumento digitale con ultima cifra al centesimo può cambiare lettura a passi di $0{,}01$ senza garantire uno scarto massimo di $0{,}01$ rispetto al riferimento. Nei calcoli si usa il criterio dichiarato per l'esperienza.
:::

::grafico{assi=0 xmin=1.6 xmax=6.4 ymin=-0.8 ymax=1.1 linee="2,0 6,0;2,-0.12 2,0.12;2.5,-0.08 2.5,0.08;3,-0.12 3,0.12;3.5,-0.08 3.5,0.08;4,-0.12 4,0.12;4.5,-0.08 4.5,0.08;5,-0.12 5,0.12;5.5,-0.08 5.5,0.08;6,-0.12 6,0.12" etichette="2,0.35,2 N;4,0.35,4 N;6,0.35,6 N;2.25,-0.31,0,5 N" titolo="Otto intervalli uguali separano 2 N da 6 N"}

:::esempio{titolo="Leggere senza spostare lo zero"}
Per misurare un segmento si possono usare due tacche qualsiasi dello stesso righello. Se l'estremo iniziale è sulla tacca $1{,}2\,\mathrm{cm}$ e quello finale sulla tacca $5{,}8\,\mathrm{cm}$, la lunghezza è $4{,}6\,\mathrm{cm}$. È la differenza tra due posizioni. Se il righello ha uno scarto costante dello zero e si misurano gli estremi senza cambiare configurazione, lo stesso scarto di entrambe le posizioni si cancella nella differenza.
:::

:::esempio{#scelta-strumento titolo="Scegliere lo strumento prima di leggere"}
Si deve misurare una forza prevista fra $8$ e $12\,\mathrm N$ con incertezza di lettura entro $0{,}25\,\mathrm N$. Un primo dinamometro arriva a $10\,\mathrm N$ con divisioni da $0{,}2\,\mathrm N$. Un secondo arriva a $20\,\mathrm N$ con divisioni da $0{,}5\,\mathrm N$. Il protocollo assegna metà divisione. Il primo strumento avrebbe incertezza $0{,}1\,\mathrm N$, ma la sua portata comprende solo una parte dei valori previsti. Il secondo copre tutto l'intervallo e la sua incertezza vale proprio $0{,}25\,\mathrm N$. Le due richieste sono indipendenti. Per questo si verifica prima che lo strumento possa leggere tutti i valori attesi. Poi si confronta l'incertezza con il limite richiesto.

::grafico{assi=0 xmin=-1 xmax=23 ymin=-0.7 ymax=3.2 linee="8,2.5 12,2.5;0,1.5 10,1.5;0,.5 20,.5" punti="8,2.5,pieno;12,2.5,pieno;10,1.5,pieno;20,.5,pieno" etichette="10,2.95,Valori attesi da 8 a 12 N;5,1.95,Scala 1 fino a 10 N;10,.95,Scala 2 fino a 20 N" titolo="Solo la seconda scala comprende tutto l’intervallo fra 8 e 12 N"}
:::

## Misure ripetute

:::definizione{#ripetute titolo="Media e semidispersione"}
Se si misura più volte la stessa grandezza con la stessa procedura, la **media aritmetica** delle $n$ letture è $\bar x=\dfrac{x_1+\cdots+x_n}{n}$. La **semidispersione massima** è $s=\dfrac{x_{\max}-x_{\min}}2$. La prima esprime un valore centrale campionario; la seconda usa solo le letture estreme e indica metà della loro distanza. Le letture $9{,}8$, $10{,}0$ e $10{,}2\,\mathrm{cm}$ danno una media di $10{,}0\,\mathrm{cm}$ e una semidispersione di $0{,}2\,\mathrm{cm}$.
:::

:::esempio{titolo="Media e punto medio degli estremi"}
Le letture $8$, $8$ e $14\,\mathrm{cm}$ danno media $10\,\mathrm{cm}$. Il punto medio tra $8$ e $14$ è invece $11\,\mathrm{cm}$. Le due letture uguali a $8$ entrano separatamente nella media e spostano il risultato verso $8$. La semidispersione resta $3\,\mathrm{cm}$. Con letture asimmetriche, l'intervallo centrato sulla media con raggio pari alla semidispersione può lasciare fuori una lettura: qui darebbe $[7;13]\,\mathrm{cm}$. Per descrivere l'intera escursione osservata si riportano gli estremi $[8;14]\,\mathrm{cm}$.
:::

::grafico{assi=0 xmin=6.5 xmax=15 ymin=-0.8 ymax=2 linee="8,0 14,0" punti="8,0,pieno;10,0,pieno;11,0,pieno;14,0,pieno" etichette="8,0.34,8 due volte;10,-0.34,media 10;11,0.60,mezzeria 11;14,0.34,14" titolo="Media campionaria e punto medio degli estremi in centimetri"}

:::osservazione{#dispersione-strumentale titolo="Quando le letture coincidono"}
Se una serie di misure dà sempre lo stesso valore, la semidispersione è zero. La risoluzione dello strumento continua a limitare ciò che possiamo distinguere. Quando il metodo richiede il maggiore fra l'incertezza strumentale e la semidispersione, si confrontano valori nella stessa unità e si adotta il maggiore. Per esempio, $0{,}05\,\mathrm{cm}$ di semidispersione è metà di $1\,\mathrm{mm}$, quindi con $1\,\mathrm{mm}$ di incertezza di lettura si assegna $1\,\mathrm{mm}$.
:::

:::osservazione{#intervallo-osservato titolo="Descrivere la serie e racchiudere tutti i dati"}
La media usa tutte le letture. Se serve la più piccola fascia simmetrica che racchiuda i dati, invece, bastano gli estremi. Per misure di $3$, $4$, $5$ e $10\,\mathrm{mm}$, ogni intervallo contenente tutti i dati deve includere l'intero segmento fra $3$ e $10\,\mathrm{mm}$. Il centro del segmento è quindi $(3+10)\div2=6{,}5\,\mathrm{mm}$ e il raggio vale $3{,}5\,\mathrm{mm}$. La media della serie è $5{,}5\,\mathrm{mm}$. Un intervallo centrato su questa media avrebbe bisogno di raggio $4{,}5\,\mathrm{mm}$, perché la lettura più distante è $10\,\mathrm{mm}$. La scelta del centro dipende dalla domanda. Si può voler descrivere la posizione media dei dati oppure racchiudere gli estremi con la minore estensione.

In un'altra serie si ordinano i valori per distinguere la media dal valore che occupa il posto centrale, chiamato **mediana** quando il numero di letture è dispari. La tabella presenta cinque indicazioni prima e dopo una variazione dell'ultima lettura.

| Lettura | A (g) | B (g) |
| --- | ---: | ---: |
| 1 | 4 | 4 |
| 2 | 4 | 4 |
| 3 | 5 | 5 |
| 4 | 11 | 11 |
| 5 | 16 | 36 |

Le medie sono $8$ e $12\,\mathrm g$, perché nella seconda somma compaiono $20\,\mathrm g$ in più e il divisore è cinque. In ciascuna serie la terza voce è $5\,\mathrm g$, quindi la mediana resta uguale. Questo confronto mostra la diversa sensibilità a un estremo spostato. Per decidere se l'ultima lettura sia utilizzabile occorre risalire alle condizioni che l'hanno prodotta.

::grafico{linee="1,4 2,4 3,5 4,11 5,16;1,4 2,4 3,5 4,11 5,36" xmin=0 xmax=6 ymin=0 ymax=40 punti="3,5,pieno;5,16,pieno;5,36,pieno" nomi="ordine,m (g)" etichette="3.9,6,5 g;5,19,16 g;4.3,36,36 g" titolo="Variando l’ultimo dato ordinato, il terzo valore della serie resta 5 g"}
:::

## Scrivere un risultato e il suo intervallo

:::definizione{#intervalli titolo="Valore centrale e incertezza assoluta"}
In $x=(x_m\pm\Delta x)$, $x_m$ è il valore centrale e $\Delta x\geq 0$ è l'**incertezza assoluta**. Entrambi hanno la stessa unità. Per $l=(12{,}0\pm0{,}2)\,\mathrm{cm}$ l'intervallo simmetrico associato va da $11{,}8$ a $12{,}2\,\mathrm{cm}$. L'incertezza è metà della sua larghezza. Il simbolo $\pm$ raccoglie i due estremi e il valore centrale; la sua interpretazione statistica richiederebbe informazioni sul metodo con cui è stata assegnata l'incertezza.
:::

:::osservazione{#compatibilita titolo="Compatibilità per sovrapposizione"}
Secondo il criterio di sovrapposizione, due misure sono **compatibili** se i loro intervalli chiusi condividono almeno un punto. Per esempio, $[11{,}8;12{,}2]$ e $[12{,}1;12{,}5]$ si intersecano tra $12{,}1$ e $12{,}2$. Anche due intervalli che si toccano a un estremo risultano compatibili secondo questo criterio. La compatibilità dice che i dati con quelle incertezze consentono un valore in comune; valutare la qualità del metodo richiede anche informazioni sulla lettura e sulla taratura.
:::

::grafico{assi=0 xmin=11.7 xmax=12.6 ymin=-0.3 ymax=1.5 linee="11.8,0.83 12.2,0.83;12.1,0.38 12.5,0.38" punti="11.8,0.83;12.2,0.83;12.1,0.38;12.5,0.38" segmenti="12.1,0.25,12.1,0.95;12.2,0.25,12.2,0.95" etichette="11.94,1.05,misura A;12.36,0.15,misura B" titolo="Gli intervalli in centimetri condividono il tratto da 12,1 a 12,2"}

:::esempio{#intervallo-tolleranza titolo="Verificare un limite di accettazione"}
Un pezzo rispetta una specifica se ha lunghezza compresa fra $49$ e $53\,\mathrm{mm}$, estremi inclusi. La misura è $(50\pm2)\,\mathrm{mm}$ e si adotta la regola prudenziale secondo cui ogni valore del suo intervallo è possibile. Il limite superiore della misura, $52\,\mathrm{mm}$, è ammesso. Quello inferiore, $48\,\mathrm{mm}$, è sotto la soglia. I due intervalli si intersecano, quindi la misura è compatibile con la specifica. Per concludere che il pezzo la rispetta senza eccezioni nell'intervallo stimato, servirebbe invece che entrambi gli estremi fossero ammessi. Con valore centrale $50\,\mathrm{mm}$, la tolleranza verso il basso limita l'incertezza assoluta a $1\,\mathrm{mm}$.

::grafico{assi=0 xmin=46.8 xmax=54.2 ymin=-0.1 ymax=2.65 linee="49,1.8 53,1.8;48,.7 52,.7" punti="49,1.8,pieno;53,1.8,pieno;48,.7,pieno;52,.7,pieno" segmenti="49,.55,49,1.93;52,.55,52,1.93" etichette="51,2.15,Specifica da 49 a 53 mm;50,.28,Misura da 48 a 52 mm" titolo="La misura condivide una parte della specifica e raggiunge 48 mm al di fuori di essa"}
:::

## Incertezza relativa e percentuale

:::definizione{#relativa titolo="Confrontare l'incertezza con la misura"}
Per un valore centrale positivo, l'**incertezza relativa** è $\varepsilon=\dfrac{\Delta x}{x_m}$. Il suo valore percentuale è $100\varepsilon$. Nel rapporto le unità si semplificano, purché i due termini siano espressi nella stessa unità. Se $m=(50\pm1)\,\mathrm g$, il rapporto è $0{,}02$ e la percentuale è $2\%$. Per ricavare l'incertezza assoluta a partire dalla percentuale si divide quest'ultima per cento e si moltiplica per la misura.
:::

:::esempio{titolo="Confrontare risoluzioni relative"}
Due strumenti misurano lunghezze di $(10\pm1)\,\mathrm{mm}$ e $(100\pm1)\,\mathrm{mm}$. Entrambi hanno intervalli di larghezza $2\,\mathrm{mm}$, ma l'incertezza rappresenta il $10\%$ del primo valore e l'$1\%$ del secondo. L'incertezza relativa misura il peso dell'incertezza rispetto alla quantità in esame. Quando il valore centrale è zero, il rapporto è indefinito. In quel caso si può ancora riportare un'incertezza assoluta.
:::

## Propagazione delle incertezze

::::teorema{#propagazione titolo="Stime prudenziali e approssimazioni lineari"}
Se per ogni ingresso si usa un intervallo simmetrico e si ammettono tutte le combinazioni dei due intervalli, la massima deviazione dalla somma o dalla differenza dei valori centrali è $\Delta a+\Delta b$. Per un prodotto o un quoziente di grandezze positive con piccole incertezze relative, la stima prudenziale **al primo ordine** è la somma delle incertezze relative. Per la potenza $z=x^n$ con $x>0$ vale al primo ordine $\varepsilon_z\simeq\lvert n\rvert\varepsilon_x$.

:::dimostrazione
La somma è maggiore quando entrambi gli ingressi sono agli estremi superiori. La differenza è maggiore quando il primo è all'estremo superiore e il secondo a quello inferiore. In entrambi i casi l'aumento rispetto al valore centrale è $\Delta a+\Delta b$. Per il prodotto, scrivere i fattori agli estremi superiori come $a(1+\varepsilon_a)$ e $b(1+\varepsilon_b)$ mostra che l'aumento relativo contiene $\varepsilon_a+\varepsilon_b+\varepsilon_a\varepsilon_b$. La circa uguaglianza di primo ordine conserva i due termini lineari. Per il quoziente il caso di aumento usa il denominatore più basso, quindi il fattore al denominatore è $1-\varepsilon_b$. Se $\varepsilon_b$ è piccolo, il reciproco è circa $1+\varepsilon_b$ e porta alla stessa somma.
:::
::::

:::esempio{#limiti-esatti titolo="Dagli intervalli ai limiti esatti"}
Per un quadrato il lato nominale è $10\,\mathrm{cm}$ e l'incertezza assoluta è $1\,\mathrm{cm}$. Il lato è compreso tra $9$ e $11\,\mathrm{cm}$, dunque l'area è compresa tra $81$ e $121\,\mathrm{cm}^2$. La stima lineare intorno a $100\,\mathrm{cm}^2$ dà il $20\%$, ossia un intervallo approssimato da $80$ a $120\,\mathrm{cm}^2$. La differenza dagli estremi esatti è il termine quadratico di $1\,\mathrm{cm}^2$. Se serve un limite superiore garantito da quel modello a intervalli, si usa quello esatto.
:::

:::attenzione{titolo="Vincoli fra gli ingressi"}
Quando la stessa lettura compare due volte in una formula, i suoi due scarti sono lo stesso scarto. In $a-a$ si cancellano anche se $a$ ha una incertezza. La somma delle incertezze assolute per una differenza tratta invece come possibili due scarti opposti. Va scelta in base a ciò che si conosce sugli ingressi. Per un rapporto si richiede inoltre che l'intervallo del denominatore rimanga lontano da zero.
:::

:::esempio{#rapporto-asimmetrico titolo="Un quoziente con scarti diversi ai due lati"}
Si misurano una massa $(50\pm2)\,\mathrm g$ e un volume $(10\pm1)\,\mathrm{cm}^3$. Si assumono ammesse tutte le combinazioni dei due intervalli. La densità nominale è $5\,\mathrm{g/cm^3}$. A volume fissato la densità cresce con la massa, mentre a massa fissata diminuisce al crescere del volume. Il minimo usa quindi la massa minore e il volume maggiore. Il massimo usa la coppia opposta.
$$
\rho_{\min}=\dfrac{48}{11}\,\mathrm{g/cm^3},
\qquad
\rho_{\max}=\dfrac{52}{9}\,\mathrm{g/cm^3}.
$$
Lo scarto verso il basso è circa $0{,}64\,\mathrm{g/cm^3}$. Quello verso l'alto è circa $0{,}78\,\mathrm{g/cm^3}$. La stima lineare dà invece $4\%+10\%=14\%$ e quindi uno scarto simmetrico di $0{,}70\,\mathrm{g/cm^3}$. Questa approssimazione è utile a colpo d'occhio. Se il risultato deve racchiudere tutti i valori del modello a intervalli, il limite superiore esatto è quello da conservare.
:::

:::esempio{#ingressi-vincolati titolo="Il vincolo fra le misure cambia gli estremi"}
Un rettangolo ha lati $a$ e $b$ legati da $a+b=10\,\mathrm{cm}$. Se $a$ è fra $4$ e $6\,\mathrm{cm}$, lo è anche $b$, ma al crescere di un lato l'altro diminuisce. Usando valori numerici in centimetri, l'area si può scrivere come
$$
A=a(10-a)=25-(a-5)^2.
$$
L'area massima è $25\,\mathrm{cm}^2$ e si raggiunge per $a=b=5\,\mathrm{cm}$. Con entrambi i lati a $6\,\mathrm{cm}$ si violerebbe il dato sulla loro somma. Se invece le due misure fossero indipendenti e avessero lo stesso intervallo, la coppia $(6;6)$ sarebbe ammessa e darebbe il massimo $36\,\mathrm{cm}^2$. Prima di scegliere gli estremi si stabilisce quindi quali combinazioni sono fisicamente possibili.

::grafico{f="25-(x-5)^2" xmin=4 xmax=6 ymin=23 ymax=26 punti="4,24,pieno;5,25,pieno;6,24,pieno" nomi="a (cm),A (cm²)" titolo="Con somma dei lati fissata, la curva raggiunge 25 cm² al centro dell’intervallo"}
:::

## Arrotondare senza aggiungere precisione

:::osservazione{#cifre titolo="Cifre utili nel risultato"}
Il valore centrale e l'incertezza riportata vanno espressi a posizioni decimali coerenti. Se l'incertezza finale è $0{,}2\,\mathrm{cm}$, una lettura centrale di $12{,}347\,\mathrm{cm}$ si riporta come $(12{,}3\pm0{,}2)\,\mathrm{cm}$ adottando l'arrotondamento al più vicino del valore centrale. Si conservano più cifre durante i passaggi. Arrotondamenti intermedi si sommano o si amplificano nei calcoli successivi. Per un limite che deve restare prudenziale, il protocollo può richiedere di arrotondare l'incertezza verso l'alto.
:::

:::esempio{titolo="Arrotondare al decimo"}
Nel valore $12{,}45$, la prima cifra eliminata per arrotondare al decimo è il cinque dei centesimi. Con la convenzione verso l'alto in caso di parità si ottiene $12{,}5$. Nel valore $12{,}44$ i centesimi sono quattro, quindi si ottiene $12{,}4$. Il criterio di parità va indicato, perché esistono protocolli che lo trattano in modo diverso.
:::

:::esempio{#arrotondamento-intervallo titolo="Arrotondare mantenendo la copertura"}
Una stima va da $3{,}17$ a $3{,}57\,\mathrm{cm}$. Il centro esatto è $3{,}37\,\mathrm{cm}$ e il raggio è $0{,}20\,\mathrm{cm}$. Il protocollo vuole una scrittura simmetrica ai decimi che contenga tutto l'intervallo. Il centro arrotondato diventa $3{,}4\,\mathrm{cm}$. Con raggio $0{,}2\,\mathrm{cm}$ l'estremo inferiore sarebbe $3{,}2\,\mathrm{cm}$ e perderebbe il tratto fino a $3{,}17\,\mathrm{cm}$. Per conservare la copertura occorre almeno $3{,}40-3{,}17=0{,}23\,\mathrm{cm}$ verso il basso, mentre verso l'alto bastano $0{,}17\,\mathrm{cm}$. Il minore raggio in decimi che rispetta entrambe le condizioni è quindi $0{,}3\,\mathrm{cm}$.

::grafico{assi=0 xmin=3.02 xmax=3.76 ymin=0 ymax=3.1 linee="3.17,2.3 3.57,2.3;3.2,1.4 3.6,1.4;3.1,.5 3.7,.5" punti="3.17,2.3,pieno;3.57,2.3,pieno;3.2,1.4,pieno;3.6,1.4,pieno;3.1,.5,pieno;3.7,.5,pieno" segmenti="3.17,.35,3.17,2.45" etichette="3.37,2.7,Stima iniziale;3.42,1.79,Raggio 0,2 cm;3.42,.91,Raggio 0,3 cm" titolo="Il raggio 0,2 cm lascia scoperto l’estremo iniziale a 3,17 cm"}
:::

## Errori casuali e sistematici

:::definizione{#errori titolo="Dispersione e taratura"}
Gli **errori casuali** si manifestano attraverso variazioni fra letture ripetute. Uno **scarto sistematico** sposta le letture rispetto a un riferimento in modo ripetibile. Una bilancia che mostra sempre $3\,\mathrm g$ in più nell'intervallo di massa considerato ha uno scarto positivo. Confrontare più campioni noti aiuta a stabilire se lo scarto sia un offset costante o vari lungo la scala. La ripetizione sullo stesso oggetto descrive la dispersione di lettura; per accorgersi di una taratura errata serve invece un riferimento.
:::

::grafico{f="x;x+3" xmin=0 xmax=12 ymin=0 ymax=15 nomi="massa di riferimento (g),lettura (g)" legenda="\text{lettura ideale};\text{lettura con offset}" punti="6,6,pieno,A;6,9,pieno,B" titolo="Un offset di 3 g dà una retta parallela alla lettura ideale"}

:::esempio{titolo="Letture vicine, riferimento lontano"}
Su un campione da $100\,\mathrm g$ una bilancia indica $105{,}0$, $104{,}9$ e $105{,}1\,\mathrm g$. Le letture sono vicine tra loro e distano circa $5\,\mathrm g$ dal campione. Una media più stabile aiuterebbe a stimare lo scarto, che rimane anche se si riduce l'effetto delle oscillazioni casuali. Una correzione di $5\,\mathrm g$ si estende ad altre masse solo dopo aver controllato che l'offset si mantenga nel loro intervallo.
:::

:::esempio{#taratura-due-punti titolo="Taratura con sensibilità e zero"}
Una bilancia si comporta secondo $r=am+b$ nell'intervallo di prova, dove $r$ è la lettura e $m$ la massa di riferimento in grammi. Segna $52\,\mathrm g$ per $50\,\mathrm g$ e $154\,\mathrm g$ per $150\,\mathrm g$. Sottrarre le due letture elimina l'offset e restituisce $a=(154-52)\div(150-50)=1{,}02$. Sostituendo il primo campione si trova $b=52-1{,}02\cdot50=1\,\mathrm g$. Quindi a una lettura $r=103\,\mathrm g$ corrisponde
$$
m=\dfrac{r-b}{a}=\dfrac{103-1}{1{,}02}\,\mathrm g=100\,\mathrm g.
$$
Sottrarre lo scarto osservato a $50\,\mathrm g$ da ogni lettura correggerebbe solo quel campione. Il coefficiente di scala fa crescere lo scarto con la massa. Un terzo riferimento nella zona di utilizzo permette di controllare se la relazione ricostruita è adeguata.

::grafico{f=".02*x+1;2" xmin=0 xmax=160 ymin=0 ymax=5 punti="50,2,pieno;150,4,pieno" nomi="m (g),r−m (g)" legenda="\text{scarto osservato};\text{scarto fisso}" titolo="Lo scarto sale da 2 g a 4 g. Un offset costante darebbe una retta orizzontale"}
:::
