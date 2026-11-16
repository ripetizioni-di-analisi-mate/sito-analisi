---
titolo: "Ragionamento numerico"
sommario: "Lettura di tabelle e grafici, confronto di dati, percentuali, indici, medie e stime."
---

## Intestazioni, unità e perimetro dei dati

:::definizione{#intestazioni-e-unita titolo="Lettura di un dato"}
Una cella di una tabella associa un numero a una grandezza, a una categoria e a un periodo. L'intestazione indica la grandezza e l'unità. I nomi della riga e della colonna identificano il gruppo a cui si riferisce il numero. Le note precisano quali osservazioni rientrano nel conteggio.

La stessa cifra può quindi descrivere quantità diverse. Un valore di $18$ in una colonna in migliaia di euro equivale a $18\,000\,\mathrm{EUR}$. Un tasso del $18\%$ indica invece $18$ unità ogni $100$ unità della popolazione che fa da riferimento.
:::

:::esempio{titolo="Stessa riga, grandezze diverse"}
Il registro riporta le attività di aprile di due sale civiche.

| Sala | Eventi | Accessi (centinaia) | Giorni di apertura |
| --- | ---: | ---: | ---: |
| Viola | 12 | 9 | 20 |
| Cedro | 16 | 8 | 25 |

Nella sala Viola si contano $9\cdot 100=900$ accessi. Dividendo $900$ per $12$ si ottengono $75$ accessi per evento, purché tutti gli accessi registrati siano riferiti agli eventi. Dividendo $900$ per $20$ si ottiene invece una media di $45$ accessi per giorno di apertura. Il denominatore segue la domanda. Un accesso è un ingresso conteggiato, quindi la stessa persona può comparire più volte se frequenta più eventi.
:::

:::osservazione
Per confrontare numeri espressi su scale diverse, si convertono nella stessa unità. Un costo di $1{,}4$ migliaia di euro vale $1\,400\,\mathrm{EUR}$. La differenza rispetto a $950\,\mathrm{EUR}$ è quindi $450\,\mathrm{EUR}$. Se il quesito chiede un rapporto tra due costi entrambi dati in migliaia di euro, il fattore comune $1\,000$ si semplifica.

Anche il periodo fa parte del dato. Un conteggio trimestrale e uno mensile possono descrivere lo stesso fenomeno, ma il confronto dei loro valori assoluti risponde a una domanda diversa dal confronto delle rispettive medie mensili.
:::

:::attenzione
Una nota di legenda può distinguere uno zero da un dato assente. Se il trattino indica «non rilevato», una tabella con $80$ ingressi il lunedì e un trattino il martedì documenta $80$ ingressi nel solo giorno rilevato. Per calcolare il totale dei due giorni serve anche il valore di martedì. Uno zero dichiarato, invece, entra nella somma come dato.
:::

## Tabelle, filtri e totali

:::definizione{#tabelle-e-totali titolo="Incrocio tra categorie"}
Una tabella a doppia entrata incrocia due criteri. Il valore interno appartiene contemporaneamente alla categoria di riga e a quella di colonna. Un **totale marginale** raccoglie tutti i valori di una riga o di una colonna quando le categorie sommate sono disgiunte. Se la tabella contiene già i totali, i valori interni sono già inclusi nelle rispettive somme.
:::

:::esempio{titolo="Quote con perimetri diversi"}
Un laboratorio registra $48$ iscrizioni con due modalità di frequenza.

| Fascia | In presenza | A distanza | Totale |
| --- | ---: | ---: | ---: |
| Mattina | 18 | 6 | 24 |
| Sera | 8 | 16 | 24 |
| Totale | 26 | 22 | 48 |

Tra gli iscritti **della sera**, la quota di chi segue a distanza è $\dfrac{16}{24}=\dfrac{2}{3}$. Tra chi segue **a distanza**, la quota di iscrizioni serali è $\dfrac{16}{22}=\dfrac{8}{11}$. Il numeratore è lo stesso perché in entrambi i casi si contano le $16$ iscrizioni serali a distanza. I denominatori sono diversi perché cambia l'insieme su cui si calcola la quota.

Per selezionare chi frequenta la mattina **o** in presenza, si includono i due margini e si sottrae l'incrocio, presente in entrambi. Si ottiene $24+26-18=32$.
:::

:::osservazione
Un valore mancante si può ricavare da una somma vincolata. Se $72$ pacchi sono ripartiti in tre classi di peso disgiunte e le prime due ne contengono $18$ e $24$, la terza ne contiene $72-18-24=30$. La sottrazione è giustificata dalla ripartizione completa. Se la terza categoria può sovrapporsi alle altre, la stessa operazione perde quella giustificazione.
:::

:::attenzione
Quando le quote sono arrotondate separatamente, la loro somma può discostarsi dal $100\%$. Tre categorie con frequenze esatte $\dfrac{1}{3}$ hanno quote del $33\%$ ciascuna se arrotondate all'intero. Il loro $99\%$ complessivo deriva dall'arrotondamento. Per ricostruire conteggi esatti si usano le frequenze originali o si esplicita l'intervallo compatibile con la precisione dichiarata.
:::

## Grafici a barre e serie nel tempo

:::definizione{#grafici-e-scale titolo="Scala e confronto visivo"}
La legenda associa colori, simboli o tratti alle serie. Gli assi indicano variabile, unità e scala. In un grafico a barre con asse lineare a partire da zero, la lunghezza della barra è proporzionale al valore. In un grafico a linee, un punto associa un istante a un valore osservato. Il segmento tra due punti mostra una variazione lineare tra le osservazioni. I valori interni al segmento sono stime, salvo che i dati dichiarino un tasso costante nell'intervallo.

Con una scala lineare, tacche consecutive a distanza grafica uguale rappresentano incrementi numerici uguali. Se sull'asse verticale sono indicati $40$, $50$ e $60$, il punto a metà tra le prime due tacche ha ordinata $45$.
:::

:::esempio{titolo="Variazione su intervalli diversi"}
Si rileva la quantità d'acqua in una vasca a intervalli irregolari. Sull'asse orizzontale $x$ è il tempo in ore. L'ordinata $y$ è il volume in litri.

::grafico{xmin=0 xmax=7 ymin=0 ymax=50 linee="0,12 2,24 6,36" punti="0,12,pieno;2,24,pieno;6,36,pieno" titolo="Volume in litri a 0, 2 e 6 ore"}

Tra la prima e la seconda rilevazione il volume cresce di $24-12=12\,\mathrm{L}$ in $2\,\mathrm{h}$. Quindi il tasso medio è $\dfrac{12}{2}=6\,\mathrm{L/h}$. Tra la seconda e la terza cresce di altri $12\,\mathrm{L}$, ma in $4\,\mathrm{h}$, quindi il tasso medio è $3\,\mathrm{L/h}$. I due incrementi assoluti sono uguali, mentre le velocità medie differiscono per la durata degli intervalli.
:::

:::esempio{titolo="Serie cumulativa e produzione giornaliera"}
Un archivio ha digitalizzato complessivamente $30$ documenti a fine lunedì, $80$ a fine martedì e $110$ a fine mercoledì. Per ottenere il numero del solo mercoledì si sottraggono i due cumulati consecutivi. Il valore è $110-80=30$. La stessa operazione per martedì dà $80-30=50$, quindi tra questi due giorni il maggiore incremento è quello di martedì, anche se il cumulato più alto è quello di mercoledì.
:::

:::osservazione
Alcuni grafici accostano due scale verticali. Ogni serie si legge sull'asse indicato in legenda. Se a una tacca corrispondono $6\,\mathrm{km}$ sulla scala della distanza e $12$ minuti su quella della durata, un punto alla seconda tacca vale rispettivamente $12\,\mathrm{km}$ o $24$ minuti, in base alla serie a cui appartiene. Il confronto tra le altezze richiede quindi prima la conversione nelle grandezze misurate.
:::

:::attenzione
Se la parte visibile dell'asse parte da $90$, una barra che arriva a $110$ appare lunga il doppio di una che arriva a $100$. I valori rappresentati sono $110$ e $100$ e il loro rapporto è $\dfrac{110}{100}=1{,}1$. Per giudicare di quanto il primo supera il secondo, si leggono le tacche e si calcola la differenza o il rapporto tra i valori.
:::

## Dati pertinenti e confronto coerente

:::definizione{#dati-pertinenti titolo="Grandezza richiesta e base del confronto"}
La **base del confronto** è l'insieme o l'unità rispetto alla quale si esprime un risultato. Per confrontare la produttività di due gruppi si possono usare pezzi per addetto, per macchina o per ora. Il significato dipende dalla base indicata nel quesito. Se si chiede un valore per addetto e per ora, la base è il numero di ore-persona dedicate al lavoro.

Un modo per individuare le colonne pertinenti consiste nello scrivere l'unità attesa. Per ottenere euro per chilometro servono il costo in euro e la distanza in chilometri. Una colonna sul numero di passeggeri entra nel calcolo se l'unità richiesta è euro per passeggero oppure euro per passeggero-chilometro.
:::

:::esempio{titolo="Conteggio e frequenza per unità"}
Due centri di assistenza usano lo stesso criterio per definire una richiesta risolta al primo contatto.

| Centro | Richieste | Risolte al primo contatto | Addetti |
| --- | ---: | ---: | ---: |
| Alfa | 300 | 210 | 12 |
| Beta | 180 | 144 | 9 |

Alfa ha il numero maggiore di richieste risolte al primo contatto, perché $210>144$. La quota del centro Alfa è $\dfrac{210}{300}=70\%$. Per Beta vale $\dfrac{144}{180}=80\%$. Quindi la probabilità che una richiesta scelta a caso *all'interno del centro* sia stata risolta al primo contatto è maggiore per Beta. Il numero di addetti riguarda un eventuale quesito di produttività.
:::

:::esempio{titolo="Stessa popolazione di riferimento"}
Un rapporto riporta $150$ risposte raccolte in una settimana, di cui $60$ da nuovi utenti. Il portale ha registrato $400$ nuovi utenti nello stesso periodo. La domanda sulla percentuale di nuovi utenti *tra chi ha risposto* usa $\dfrac{60}{150}=40\%$. Se ogni nuovo utente può rispondere una sola volta, la percentuale di nuovi utenti *che hanno risposto* è $\dfrac{60}{400}=15\%$. Le due frasi individuano popolazioni distinte.
:::

:::osservazione
Quando un conteggio riguarda un sottoinsieme, numeratore e denominatore devono riferirsi alla stessa finestra temporale e alla stessa definizione di unità. Un numero di reclami per ordine riferito alla prima metà del mese richiede anche il numero di ordini della prima metà. Una tabella che fornisce solo gli ordini dell'intero mese permette di calcolare un rapporto diverso. Se servono gli ordini del sottoperiodo, occorre quel dato oppure una condizione sufficiente per ricavarlo.
:::

## Percentuali, scarti e punti percentuali

:::definizione{#rapporti-e-percentuali titolo="Quota, scarto e variazione relativa"}
Siano $V_0>0$ il valore di partenza e $V_1$ il valore successivo. Lo **scarto assoluto** è $V_1-V_0$ e conserva l'unità dei dati. La **variazione relativa** usa come base il valore di partenza e vale
$$
r=\frac{V_1-V_0}{V_0}.
$$
Il numero percentuale corrispondente è $100r$. Se $V_0$ e $V_1$ sono già quote percentuali, la loro differenza espressa in **punti percentuali** descrive lo scarto tra le quote.
:::

:::esempio{titolo="Una differenza tra tassi"}
La quota di ordini consegnati in un giorno passa dal $32\%$ al $40\%$. La differenza è di $40-32=8$ punti percentuali. Dividendo gli $8$ punti per la quota iniziale del $32\%$ si ottiene $\dfrac{8}{32}=\dfrac{1}{4}$. Quindi la quota è aumentata del $25\%$ rispetto a quella di partenza. Per conoscere la variazione del numero di ordini consegnati in un giorno servono anche i totali su cui sono state calcolate le quote.
:::

:::esempio{titolo="Variazioni consecutive"}
Una città riduce del $20\%$ il consumo d'acqua rispetto alle $500$ unità dell'anno precedente. Il nuovo consumo è $500\cdot 0{,}8=400$. Se nell'anno successivo il consumo cresce del $20\%$, la base dell'aumento è $400$. Si ottiene $400\cdot 1{,}2=480$. Rispetto alle $500$ unità iniziali lo scarto è $-20$ unità, pari al $-4\%$. Il prodotto dei fattori $0{,}8\cdot 1{,}2=0{,}96$ fornisce lo stesso confronto senza conoscere il consumo iniziale.
:::

:::attenzione
Una quota può crescere mentre diminuisce il conteggio corrispondente. Se gli ordini consegnati in giornata passano dal $25\%$ di $1\,200$ al $30\%$ di $900$, i conteggi sono $300$ e $270$. La quota sale di $5$ punti percentuali e il numero di ordini consegnati in giornata scende di $30$ unità. Il confronto da svolgere dipende da quale delle due grandezze richiede il quesito.
:::

## Indici e percentuali inverse

:::definizione{#indici-e-valori-inversi titolo="Indice a base 100 e valore di partenza"}
Dato il valore di riferimento $V_b>0$, l'**indice a base 100** di un valore $V_t$ è
$$
I_t = 100\frac{V_t}{V_b}.
$$
Un indice pari a $108$ corrisponde a un valore pari al $108\%$ della base, quindi superiore alla base dell'$8\%$. Il rapporto tra due valori della stessa serie si ottiene dividendo i loro indici, perché il fattore $100$ e la base $V_b$ sono comuni.

Una variazione relativa $r$ trasforma il valore iniziale $V_0$ in $V_1=(1+r)V_0$. Se il fattore $1+r$ è diverso da zero, si ricava il valore iniziale dividendo $V_1$ per quel fattore.
:::

:::esempio{titolo="Da un indice intermedio a un altro"}
Il costo indicizzato di un servizio vale $125$ in giugno e $115$ in settembre, rispetto alla stessa base. Il rapporto tra settembre e giugno è $\dfrac{115}{125}=0{,}92$. Quindi il costo è diminuito dell'$8\%$ rispetto a giugno. La diminuzione dell'indice è di $10$ punti indice e la base di quel confronto è l'indice $125$ di giugno.

Se il costo del periodo base è $240\,\mathrm{EUR}$, l'indice $115$ corrisponde a $240\cdot 1{,}15=276\,\mathrm{EUR}$. Il significato dell'indice determina quale dei due problemi si sta risolvendo.
:::

:::esempio{titolo="Ricostruzione di un totale e inversione"}
In un sondaggio il $12\%$ dei partecipanti, pari a $42$ persone, sceglie una fascia oraria anticipata. Il totale $N$ soddisfa $0{,}12N=42$, quindi $N=\dfrac{42}{0{,}12}=350$. Lo stesso principio vale per una riduzione. Se un importo ridotto del $30\%$ vale $126\,\mathrm{EUR}$, allora $126\,\mathrm{EUR}$ è il $70\%$ del valore iniziale. Si divide per $0{,}7$ e si ricavano $180\,\mathrm{EUR}$.
:::

:::osservazione
Se due serie partono da basi reali differenti, due indici uguali indicano la stessa variazione rispetto alle rispettive basi. Per confrontare i valori reali si moltiplica ogni indice per la sua base e si divide per $100$. Un indice $110$ per un comune con base $2\,000$ presenze vale $2\,200$ presenze. Lo stesso indice con base $800$ vale $880$ presenze.
:::

## Medie ponderate e rapporti aggregati

:::definizione{#medie-e-aggregati titolo="Pesi e media di gruppi"}
La **media ponderata** unisce valori che rappresentano quantità diverse di osservazioni. Se il valore $a_i$ rappresenta il gruppo $i$ e il suo peso è $w_i\ge 0$, con somma dei pesi positiva, la media è
$$
\overline{a}=\frac{\sum_i w_i a_i}{\sum_i w_i}.
$$
Nel caso delle medie di gruppi disgiunti, i pesi sono i conteggi delle osservazioni. Il prodotto tra la media di un gruppo e il suo conteggio ricostruisce il totale del gruppo. Se tutte le numerosità sono uguali, il fattore comune si semplifica e si ottiene la media aritmetica delle medie.
:::

:::esempio{titolo="Valori ricostruiti dai gruppi"}
Una scatola di $12$ confezioni pesa in media $90\,\mathrm{g}$ a confezione. Un'altra contiene $8$ confezioni da $140\,\mathrm{g}$ in media. Il peso totale è
$$
12\cdot 90+8\cdot 140=1\,080+1\,120=2\,200\,\mathrm{g}.
$$
Poiché le confezioni sono $20$, il peso medio è $\dfrac{2\,200}{20}=110\,\mathrm{g}$. È più vicino a $90\,\mathrm{g}$ perché il primo gruppo contiene più confezioni. La media riguarda il peso delle confezioni e quindi ciascuna confezione ha lo stesso peso statistico.
:::

:::esempio{titolo="Un rapporto sull'insieme"}
La sede Nord evade $36$ di $40$ richieste entro la scadenza. La sede Sud ne evade $96$ di $120$. Il tasso complessivo usa la somma dei casi favorevoli e la somma delle richieste. Si ottiene $\dfrac{36+96}{40+120}=\dfrac{132}{160}=82{,}5\%$. Il numero di richieste assegna più peso alla sede Sud, perciò il dato complessivo è più vicino al suo tasso dell'$80\%$.
:::

:::osservazione
La media ponderata con pesi positivi è compresa tra il minimo e il massimo dei valori usati. Per ricostruire una media mancante si procede in senso inverso. Se $20$ misure hanno media $14$ e le prime $12$ hanno media $10$, il totale completo è $280$ e quello noto è $120$. Le altre $8$ misure hanno quindi somma $160$ e media $20$.
:::

## Stima, soglie e controllo del risultato

:::definizione{#stime-e-controlli titolo="Stima e confronto esatto"}
Una **stima** sostituisce uno o più dati con valori vicini e produce un risultato approssimato. Serve per controllare l'ordine di grandezza oppure per confrontare fasce di valori separate. Quando il quesito chiede se una quota raggiunge una soglia, il confronto esatto può essere più breve del calcolo della percentuale. Per $b>0$, la condizione $\dfrac{a}{b}\ge r$ equivale a $a\ge rb$, perché la moltiplicazione per $b$ conserva il verso della disuguaglianza.
:::

:::esempio{titolo="Soglia e arrotondamento"}
Una biblioteca vuole che almeno l'$80\%$ di $444$ richieste sia trattato in un giorno. La soglia numerica è $0{,}8\cdot 444=355{,}2$. Poiché il conteggio è intero, servono almeno $356$ richieste. Un risultato di $355$ può essere visualizzato come $80\%$ dopo arrotondamento all'intero, ma resta sotto la soglia esatta.
:::

:::esempio{titolo="Quale affermazione segue dai dati"}
Si hanno $196$ ingressi paganti e ogni biglietto costa tra $18\,\mathrm{EUR}$ e $22\,\mathrm{EUR}$. Il ricavo è quindi compreso tra $196\cdot 18=3\,528\,\mathrm{EUR}$ e $196\cdot 22=4\,312\,\mathrm{EUR}$. I dati garantiscono che il ricavo supera $3\,500\,\mathrm{EUR}$, mentre restano compatibili sia con un ricavo inferiore sia con uno superiore a $4\,000\,\mathrm{EUR}$. Una stima centrale di circa $4\,000\,\mathrm{EUR}$ si ottiene arrotondando $196$ a $200$ e usando il prezzo intermedio di $20\,\mathrm{EUR}$. L'intervallo chiarisce quale affermazione ha valore certo.
:::

:::osservazione
Per valutare la coerenza di un risultato, si controllano unità, intervallo e segno. Il tasso relativo a un sottoinsieme cade tra $0\%$ e $100\%$, mentre un indice a base $100$ può superare $100$. Se un costo scende, il fattore finale è inferiore a $1$ e la sua variazione relativa rispetto al costo iniziale è negativa.

In un quesito a scelta multipla, la forma del risultato determina inoltre l'ultima operazione. Se la richiesta è «per ora», una durata di $45$ minuti va espressa come $\dfrac{3}{4}\,\mathrm{h}$. Se la richiesta è «quanti in più», si cerca uno scarto. Se è «di quale percentuale in più», si divide lo scarto per il valore di riferimento.
:::
