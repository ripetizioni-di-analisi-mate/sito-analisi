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

::grafico{assi=0 xmin=1.6 xmax=6.4 ymin=-0.8 ymax=1.1 linee="2,0 6,0;2,-0.12 2,0.12;2.5,-0.08 2.5,0.08;3,-0.12 3,0.12;3.5,-0.08 3.5,0.08;4,-0.12 4,0.12;4.5,-0.08 4.5,0.08;5,-0.12 5,0.12;5.5,-0.08 5.5,0.08;6,-0.12 6,0.12" etichette="2,0.35,2 N;4,0.35,4 N;6,0.35,6 N;2.25,-0.31,0.5 N" titolo="Otto intervalli uguali separano 2 N da 6 N"}

:::esempio{titolo="Leggere senza spostare lo zero"}
Per misurare un segmento si possono usare due tacche qualsiasi dello stesso righello. Se l'estremo iniziale è sulla tacca $1{,}2\,\mathrm{cm}$ e quello finale sulla tacca $5{,}8\,\mathrm{cm}$, la lunghezza è $4{,}6\,\mathrm{cm}$. È la differenza tra due posizioni. Se il righello ha uno scarto costante dello zero e si misurano gli estremi senza cambiare configurazione, lo stesso scarto di entrambe le posizioni si cancella nella differenza.
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

## Scrivere un risultato e il suo intervallo

:::definizione{#intervalli titolo="Valore centrale e incertezza assoluta"}
In $x=(x_m\pm\Delta x)$, $x_m$ è il valore centrale e $\Delta x\geq 0$ è l'**incertezza assoluta**. Entrambi hanno la stessa unità. Per $l=(12{,}0\pm0{,}2)\,\mathrm{cm}$ l'intervallo simmetrico associato va da $11{,}8$ a $12{,}2\,\mathrm{cm}$. L'incertezza è metà della sua larghezza. Il simbolo $\pm$ raccoglie i due estremi e il valore centrale; la sua interpretazione statistica richiederebbe informazioni sul metodo con cui è stata assegnata l'incertezza.
:::

:::osservazione{#compatibilita titolo="Compatibilità per sovrapposizione"}
Secondo il criterio di sovrapposizione, due misure sono **compatibili** se i loro intervalli chiusi condividono almeno un punto. Per esempio, $[11{,}8;12{,}2]$ e $[12{,}1;12{,}5]$ si intersecano tra $12{,}1$ e $12{,}2$. Anche due intervalli che si toccano a un estremo risultano compatibili secondo questo criterio. La compatibilità dice che i dati con quelle incertezze consentono un valore in comune; valutare la qualità del metodo richiede anche informazioni sulla lettura e sulla taratura.
:::

::grafico{assi=0 xmin=11.7 xmax=12.6 ymin=-0.3 ymax=1.5 linee="11.8,0.83 12.2,0.83;12.1,0.38 12.5,0.38" punti="11.8,0.83;12.2,0.83;12.1,0.38;12.5,0.38" segmenti="12.1,0.25,12.1,0.95;12.2,0.25,12.2,0.95" etichette="11.94,1.05,misura A;12.36,0.15,misura B" titolo="Gli intervalli in centimetri condividono il tratto da 12.1 a 12.2"}

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

## Arrotondare senza aggiungere precisione

:::osservazione{#cifre titolo="Cifre utili nel risultato"}
Il valore centrale e l'incertezza riportata vanno espressi a posizioni decimali coerenti. Se l'incertezza finale è $0{,}2\,\mathrm{cm}$, una lettura centrale di $12{,}347\,\mathrm{cm}$ si riporta come $(12{,}3\pm0{,}2)\,\mathrm{cm}$ adottando l'arrotondamento al più vicino del valore centrale. Si conservano più cifre durante i passaggi. Arrotondamenti intermedi si sommano o si amplificano nei calcoli successivi. Per un limite che deve restare prudenziale, il protocollo può richiedere di arrotondare l'incertezza verso l'alto.
:::

:::esempio{titolo="Arrotondare al decimo"}
Nel valore $12{,}45$, la prima cifra eliminata per arrotondare al decimo è il cinque dei centesimi. Con la convenzione verso l'alto in caso di parità si ottiene $12{,}5$. Nel valore $12{,}44$ i centesimi sono quattro, quindi si ottiene $12{,}4$. Il criterio di parità va indicato, perché esistono protocolli che lo trattano in modo diverso.
:::

## Errori casuali e sistematici

:::definizione{#errori titolo="Dispersione e taratura"}
Gli **errori casuali** si manifestano attraverso variazioni fra letture ripetute. Uno **scarto sistematico** sposta le letture rispetto a un riferimento in modo ripetibile. Una bilancia che mostra sempre $3\,\mathrm g$ in più nell'intervallo di massa considerato ha uno scarto positivo. Confrontare più campioni noti aiuta a stabilire se lo scarto sia un offset costante o vari lungo la scala. La ripetizione sullo stesso oggetto descrive la dispersione di lettura; per accorgersi di una taratura errata serve invece un riferimento.
:::

::grafico{f="x;x+3" xmin=0 xmax=12 ymin=0 ymax=15 nomi="massa di riferimento (g),lettura (g)" legenda="\text{lettura ideale};\text{lettura con offset}" punti="6,6,pieno,A;6,9,pieno,B" titolo="Un offset di 3 g dà una retta parallela alla lettura ideale"}

:::esempio{titolo="Letture vicine, riferimento lontano"}
Su un campione da $100\,\mathrm g$ una bilancia indica $105{,}0$, $104{,}9$ e $105{,}1\,\mathrm g$. Le letture sono vicine tra loro e distano circa $5\,\mathrm g$ dal campione. Una media più stabile aiuterebbe a stimare lo scarto, che rimane anche se si riduce l'effetto delle oscillazioni casuali. Una correzione di $5\,\mathrm g$ si estende ad altre masse solo dopo aver controllato che l'offset si mantenga nel loro intervallo.
:::
