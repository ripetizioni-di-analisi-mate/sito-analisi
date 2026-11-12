---
titolo: "Indici di posizione e dispersione"
sommario: "Media, mediana, quantili e misure di dispersione per descrivere e confrontare gruppi di dati."
---

## Media aritmetica e medie ponderate

:::definizione{#media titolo="Media aritmetica"}
Siano $x_1,\ldots,x_n$ le $n\ge 1$ osservazioni numeriche di una grandezza. La **media aritmetica** $\bar x$ è il valore che si otterrebbe ripartendo la somma dei dati in parti uguali fra tutte le osservazioni.
$$
\bar x=\frac{1}{n}\sum_{i=1}^n x_i.
$$
La media ha la stessa unità di misura dei dati. Moltiplicandola per la numerosità si recupera il totale, anche quando i singoli valori sono ignoti. Per esempio, se quattro visite durano in media $30\,\mathrm{min}$, il tempo complessivo è $120\,\mathrm{min}$.
:::

:::definizione{#media-ponderata titolo="Media ponderata e frequenze"}
Siano $a_1,\ldots,a_k$ dei valori numerici con pesi $w_1,\ldots,w_k$ non negativi e con somma positiva. La **media ponderata** è
$$
\bar a_w=\frac{\sum_{j=1}^k w_j a_j}{\sum_{j=1}^k w_j}.
$$
Il denominatore normalizza i pesi. Se tutti vengono moltiplicati per la stessa costante positiva, la media resta uguale. Quando $w_j$ è la frequenza assoluta del valore $a_j$, il prodotto $w_j a_j$ rappresenta la somma delle osservazioni che hanno quel valore. La media della tabella di frequenze coincide allora con quella dei dati elencati singolarmente.
:::

:::esempio{titolo="Ricostruire il totale dai gruppi"}
Un laboratorio ha misurato una concentrazione media di $12\,\mathrm{mg/L}$ su dieci campioni e di $16\,\mathrm{mg/L}$ su trenta campioni. I due gruppi sono disgiunti e le misure sono nella stessa unità. La somma dei valori del primo gruppo è $10\cdot12=120$, mentre quella del secondo è $30\cdot16=480$. La media complessiva è quindi
$$
\bar x=\frac{120+480}{40}\,\mathrm{mg/L}=15\,\mathrm{mg/L}.
$$
Il risultato è più vicino a $16$ perché le osservazioni del secondo gruppo sono tre volte quelle del primo. La media semplice delle medie dei due gruppi darebbe $14\,\mathrm{mg/L}$ e assegnerebbe lo stesso peso ai due gruppi.
:::

:::osservazione
Se le osservazioni sono raccolte in classi di intervalli, la frequenza di ciascuna classe è nota, mentre i singoli valori della classe in genere sono ignoti. Sostituirli tutti con il punto medio produce una **media approssimata**. Per sei dati in $[0,10)$ e quattro in $[10,30)$, la media dei centri di classe ponderata per le frequenze vale $\dfrac{6\cdot5+4\cdot20}{10}=11$. Se però tutti i dati sono appena sopra gli estremi inferiori, la media effettiva è vicina a $4$. La precisione dell'approssimazione dipende dalla larghezza delle classi e dalla distribuzione dei valori al loro interno.
:::

:::osservazione
Se di una misura si conosce soltanto la classe, gli estremi degli intervalli danno comunque due limiti per la media. Una tabella riporta tre tempi in $[10,20)$ e due in $[20,25)$. Il totale dei cinque tempi è almeno $3\cdot10+2\cdot20=70$ minuti e strettamente minore di $3\cdot20+2\cdot25=110$ minuti. Pertanto la media è almeno $14\,\mathrm{min}$ e minore di $22\,\mathrm{min}$. La media dei punti medi dà $18\,\mathrm{min}$, che è il centro dell'intervallo appena trovato. Se si recupera un singolo tempo esatto, si può sostituire il suo intervallo con quel valore e restringere l'intervallo compatibile.
:::

:::osservazione
La formula della media permette di aggiornare una rilevazione senza conservare l'intero elenco. Se si aggiunge un valore $u$ a $n$ osservazioni di media $\bar x$, la nuova media è $\dfrac{n\bar x+u}{n+1}$. Sottraendo la media precedente si ottiene
$$
\bar x_{\rm nuova}-\bar x=\frac{u-\bar x}{n+1}.
$$
La media si sposta quindi nella direzione del nuovo valore e il movimento è tanto minore quanto più numeroso è il gruppo iniziale. Un tempo di $42\,\mathrm{min}$ aggiunto a cinque tempi di media $30\,\mathrm{min}$ porta la media a $32\,\mathrm{min}$. Se invece il tempo di $42\,\mathrm{min}$ sostituisce un tempo registrato di $36\,\mathrm{min}$, la numerosità resta cinque e la variazione è $\dfrac{42-36}{5}\,\mathrm{min}=1{,}2\,\mathrm{min}$. La distinzione fra aggiunta e sostituzione determina il denominatore.
:::

## Mediana, moda e quantili

:::definizione{#quantili titolo="Mediana e quantili empirici"}
Si ordinino le $n\ge1$ osservazioni e si indichi con $x_{(k)}$ il valore al posto $k$ nella lista ordinata. I valori ripetuti occupano posti distinti. La **mediana** è il valore centrale per $n$ dispari e la media dei due valori centrali per $n$ pari.
$$
\begin{aligned}
\operatorname{Med}(x)&=x_{(m+1)} &&\text{se }n=2m+1,\\[6pt]
\operatorname{Med}(x)&=\frac{x_{(m)}+x_{(m+1)}}{2} &&\text{se }n=2m.
\end{aligned}
$$
Almeno metà dei dati è minore o uguale alla mediana e almeno metà è maggiore o uguale. In questo corso, per gli altri **quantili empirici** di livello $0<p<1$ vale $q_p=x_{(\lceil np\rceil)}$. Il simbolo $\lceil np\rceil$ indica il più piccolo intero maggiore o uguale a $np$. Per $p=0{,}5$ si mantiene la convenzione della mediana. I livelli $0{,}25$ e $0{,}75$ danno il primo e il terzo quartile, indicati con $Q_1$ e $Q_3$.
:::

:::esempio{titolo="Rango e frequenze cumulate"}
I dati ordinati sono $2,2,4,5,7,7,8,10$. Il primo quartile occupa il posto $\lceil 8\cdot0{,}25\rceil=2$, quindi $Q_1=2$. Il terzo quartile occupa il posto $\lceil8\cdot0{,}75\rceil=6$, quindi $Q_3=7$. Per la mediana si usano i posti $4$ e $5$, perciò $\operatorname{Med}(x)=6$.

Se è disponibile una tabella di frequenze, il posto $6$ si trova cercando il primo valore la cui frequenza cumulata assoluta raggiunge almeno $6$. Al valore $5$ la cumulata è $4$, mentre al valore $7$ è $6$. Si ottiene così $Q_3=7$ senza espandere la tabella.
:::

:::attenzione
I software adottano convenzioni diverse, specialmente quando il rango cade fra due posti della lista. Nei dati $2,6,10,18,30$, il rango superiore dà $Q_1=6$ perché $\lceil5\cdot0{,}25\rceil=2$. Un metodo che usi il rango $(n+1)p$ e interpoli linearmente assegna il posto $1{,}5$, quindi dà $4$. Per confrontare i risultati occorre quindi conoscere la regola usata.
:::

:::definizione{#moda titolo="Moda"}
Una **moda** è una modalità di frequenza massima. È l'indice di posizione che si può calcolare anche per caratteri qualitativi privi di un ordinamento. Se i colori rosso, blu e verde compaiono rispettivamente $5$, $5$ e $2$ volte, rosso e blu sono entrambi mode. In un istogramma con classi di ampiezza diversa, si distingue la classe di frequenza massima da quella di densità di frequenza massima, che corrisponde alla barra più alta.
:::

:::osservazione
Per un quantile calcolato al rango superiore, la quota di osservazioni strettamente inferiori a $q_p$ è minore di $p$ e la quota di osservazioni minori o uguali a $q_p$ è almeno $p$. Infatti, se $k=\lceil np\rceil$, al più $k-1$ dati sono strettamente inferiori al valore al posto $k$, mentre almeno $k$ dati gli sono minori o uguali. Le due quote possono essere molto diverse in presenza di valori ripetuti. Nella serie $1,2,4,4,4,4,6,9$ il rango del terzo quartile è $6$ e il quartile vale $4$. Solo due dati sono strettamente inferiori a $4$, mentre sei sono minori o uguali. La frase «il terzo quartile lascia il settantacinque per cento dei dati sotto di sé» va quindi precisata distinguendo le due disuguaglianze.
:::

::::teorema{#centro-assoluto titolo="Minimo della somma delle distanze assolute"}
Per $n\ge1$ dati reali ordinati, la somma $\sum_i |x_i-c|$ è minima quando $c$ è la mediana. Se $n$ è pari, ogni valore fra i due dati centrali è un minimo. Questa proprietà caratterizza un centro ottenuto da distanze assolute e chiarisce perché in un campione pari la scelta della media dei due valori centrali è una convenzione. Per i dati $1,2,9$, la mediana $2$ dà una somma di distanze pari a $8$, mentre la media $4$ dà una somma pari a $10$.

:::dimostrazione
Si accoppia il dato più piccolo con il più grande, il secondo con il penultimo e così via. Per una coppia $a\le b$, la somma $|a-c|+|b-c|$ è almeno $b-a$ e raggiunge questo valore per $c\in[a,b]$. Gli intervalli delle coppie sono annidati, quindi per minimizzare tutti i contributi basta che $c$ appartenga all'intervallo della coppia centrale. Per $n$ pari questo è l'intervallo fra i due dati centrali. Per $n$ dispari rimane anche il contributo della sola osservazione centrale, che è minimo quando $c$ coincide con quel valore.
:::
::::

## Varianza descrittiva e varianza corretta

:::definizione{#varianza titolo="Varianza e deviazione standard"}
La differenza $x_i-\bar x$ misura quanto l'osservazione $i$ si trova sopra o sotto la media. Gli scarti con segno hanno somma zero, quindi per misurare la dispersione si possono sommare i loro quadrati. Indicata questa somma con $D$, si definiscono
$$
D=\sum_{i=1}^{n}(x_i-\bar x)^2,\qquad
v=\frac{D}{n},\qquad
s^2=\frac{D}{n-1}\quad(n>1).
$$
La **varianza descrittiva** $v$ è la media degli scarti quadratici osservati. La **varianza campionaria corretta** $s^2$ usa il divisore $n-1$. Per un campione casuale indipendente con varianza finita, la sua proprietà di correttezza viene studiata nel capitolo sulla stima puntuale. Se si dispone dei dati di un'intera popolazione finita di numerosità $N$, la sua varianza descrittiva usa il divisore $N$.
:::

:::esempio{titolo="Due divisori per gli stessi scarti"}
Tre tempi di lavorazione sono $2,4,6$ minuti. La media vale $4\,\mathrm{min}$, quindi gli scarti sono $-2,0,2$ minuti e la loro somma quadratica vale $8\,\mathrm{min^2}$. I due indici valgono
$$
v=\frac{8}{3}\,\mathrm{min^2},
\qquad
s^2=\frac{8}{2}\,\mathrm{min^2}=4\,\mathrm{min^2}.
$$
Le radici quadrate $\sqrt v$ e $s=\sqrt{s^2}$ sono le rispettive deviazioni standard e tornano a essere espresse in minuti. La deviazione standard corretta in questo esempio è $2\,\mathrm{min}$. Se tutti i tempi coincidessero, ogni scarto sarebbe zero, perciò entrambe le misure di dispersione sarebbero nulle.
:::

:::osservazione
Con una tabella di frequenze assolute, uno scarto quadratico relativo al valore $a_j$ compare $n_j$ volte. Si può quindi calcolare $D=\sum_j n_j(a_j-\bar x)^2$. Per una tabella con frequenze relative $f_j=\dfrac{n_j}{n}$ vale direttamente $v=\sum_j f_j(a_j-\bar x)^2$. Il divisore per ottenere $s^2$ è ancora $n-1$, dove $n$ è il numero delle osservazioni, mentre il numero di righe della tabella conta soltanto i valori distinti.
:::

## Identità di calcolo e cambi di scala

::::teorema{#trasformazioni titolo="Scarti, formula della varianza e trasformazioni"}
Per $n\ge1$ dati reali di media $\bar x$ si ha
$$
\sum_{i=1}^{n}(x_i-\bar x)=0,\qquad
v=\frac{1}{n}\sum_{i=1}^n x_i^2-\bar x^2.
$$
Se ogni dato è trasformato secondo $y_i=a+bx_i$ con $a,b$ reali, allora
$$
\bar y=a+b\bar x,\qquad
v_y=b^2v_x,\qquad
s_y=|b|s_x\quad(n>1).
$$
La formula con i quadrati permette di calcolare $v$ conoscendo solo la media e la media dei quadrati. Le regole di trasformazione consentono di convertire gli indici senza ricostruire tutti i dati.

:::dimostrazione
La somma degli scarti si ricava sostituendo $\sum_i x_i=n\bar x$, da cui $\sum_i(x_i-\bar x)=n\bar x-n\bar x=0$. Per la varianza si espande il quadrato e si usa la stessa identità.
$$
\begin{aligned}
D
&=\sum_i x_i^2-2\bar x\sum_i x_i+n\bar x^2\\[6pt]
&=\sum_i x_i^2-n\bar x^2.
\end{aligned}
$$
Dividendo per $n$ si ottiene la formula. Per i dati trasformati, la somma di $a+bx_i$ divisa per $n$ vale $a+b\bar x$. Segue che $y_i-\bar y=b(x_i-\bar x)$. Il quadrato di ogni scarto è moltiplicato per $b^2$, quindi lo stesso fattore si applica alle varianze. La radice quadrata dà il fattore $|b|$ per le deviazioni standard.
:::
::::

:::esempio{titolo="Spostare lo zero e cambiare l'unità"}
Tre temperature hanno media $20\,^\circ\mathrm{C}$ e deviazione standard corretta $5\,^\circ\mathrm{C}$. Nella scala Fahrenheit si usa $y=32+\dfrac{9}{5}x$. La nuova media è $68\,^\circ\mathrm{F}$ e la nuova deviazione standard è $9\,^\circ\mathrm{F}$. L'addendo $32$ interviene nel calcolo della media. Nella deviazione standard interviene solo il fattore $\dfrac{9}{5}$, perché una differenza fra due temperature elimina lo spostamento dello zero.
:::

:::osservazione
Se $b>0$, l'ordine delle osservazioni è conservato. Mediana e quantili si trasformano perciò con la stessa formula $a+bx$ e l'intervallo interquartile è moltiplicato per $b$. Se $b<0$, i posti nella lista ordinata si invertono. Per individuare un quantile si usa allora $y_{(k)}=a+bx_{(n+1-k)}$. La mediana continua a trasformarsi con $a+b\operatorname{Med}(x)$, perché i due valori centrali si scambiano e la loro media si trasforma allo stesso modo.
:::

:::attenzione
Con il rango superiore, una riflessione della scala può cambiare l'intervallo interquartile anche se il campo di variazione rimane uguale. Nei dati $0,1,2,10$, il primo e il terzo quartile occupano il primo e il terzo posto, quindi l'intervallo interquartile vale $2$. Dopo la trasformazione $y=-x$ i dati ordinati sono $-10,-2,-1,0$. I due posti danno ora quartili $-10$ e $-1$, con intervallo interquartile $9$. La riflessione scambia gli estremi e conserva il campo di variazione pari a $10$.
:::

:::osservazione
Per due gruppi disgiunti di numerosità $n_1,n_2$, medie $\bar x_1,\bar x_2$ e somme degli scarti quadratici interni $D_1,D_2$, sia $\bar x$ la media complessiva. La somma degli scarti quadratici rispetto a $\bar x$ è
$$
D=D_1+D_2+n_1(\bar x_1-\bar x)^2+n_2(\bar x_2-\bar x)^2.
$$
Per ricavare l'identità si scrive lo scarto dalla media complessiva come somma dello scarto dalla media del gruppo e della differenza fra le due medie. Nello sviluppo del quadrato il termine misto scompare, perché gli scarti interni a ciascun gruppo sommano a zero. La dispersione complessiva include quindi sia la dispersione interna sia la distanza fra le medie dei gruppi.
:::

::::teorema{#centro-quadratico titolo="Minimo della somma degli scarti quadratici"}
Siano $x_1,\ldots,x_n$ dati reali con $n\ge1$. Fra tutti i numeri reali $c$, la somma $\sum_i(x_i-c)^2$ assume il minimo in $c=\bar x$. La media è quindi il centro che meglio approssima tutti i dati con un solo valore se si misura l'errore come somma dei quadrati.

:::dimostrazione
Si scrive $x_i-c=(x_i-\bar x)+(\bar x-c)$ e si sviluppa il quadrato. La somma dei prodotti misti è zero, perché $2(\bar x-c)$ è costante e $\sum_i(x_i-\bar x)=0$. Si ottiene
$$
\sum_i(x_i-c)^2=D+n(\bar x-c)^2.
$$
Il termine aggiunto a $D$ è non negativo e si annulla solo per $c=\bar x$, quindi in quel punto si trova il minimo. Per i dati $0,1,5$, il centro $2$ produce la somma $4+1+9=14$, mentre il centro $1$ produce $1+0+16=17$.
:::
::::

## Misure di dispersione assolute e relative

:::definizione{#dispersione titolo="Campo di variazione, intervallo interquartile e coefficiente di variazione"}
Il **campo di variazione** è la differenza tra massimo e minimo. L'**intervallo interquartile** $\operatorname{IQR}=Q_3-Q_1$ è la distanza tra i due quartili e misura la dispersione nella parte centrale della distribuzione. Entrambi hanno la stessa unità dei dati. Il campo di variazione dipende solo da due estremi, mentre l'intervallo interquartile dipende da due ranghi interni alla lista ordinata.

Per misure su scala a rapporti, con zero significativo e media positiva, il coefficiente di variazione è $\operatorname{CV}=\dfrac{s}{\bar x}$. In questa formula $s$ è la deviazione standard corretta. Se si descrive l'intera popolazione, si usa invece la deviazione standard della popolazione. Il rapporto è adimensionale e può essere espresso anche in percentuale.
:::

:::esempio{titolo="Confrontare processi su livelli diversi"}
Due linee producono contenitori di capacità media rispettivamente $200\,\mathrm{mL}$ e $500\,\mathrm{mL}$. Le deviazioni standard corrette sono $8\,\mathrm{mL}$ e $15\,\mathrm{mL}$. I coefficienti di variazione sono
$$
\operatorname{CV}_1=\frac{8}{200}=0{,}04,\qquad
\operatorname{CV}_2=\frac{15}{500}=0{,}03.
$$
La seconda linea ha la deviazione standard maggiore in millilitri, mentre la prima ha la maggiore dispersione relativa alla propria media. Convertendo tutte le capacità in litri, numeratore e denominatore di ciascun rapporto vengono moltiplicati per la stessa costante, perciò i coefficienti restano uguali.
:::

:::attenzione
Il coefficiente di variazione dipende dallo zero della scala. Un insieme di temperature con media $20\,^\circ\mathrm{C}$ e deviazione standard $5\,^\circ\mathrm{C}$ darebbe il rapporto $0{,}25$ in Celsius. Le stesse misure in kelvin avrebbero media $293{,}15\,\mathrm{K}$ e deviazione standard $5\,\mathrm{K}$, quindi il rapporto sarebbe circa $0{,}017$. Lo spostamento dello zero cambia il rapporto anche se la variabilità fisica è la stessa. Inoltre, quando la media è molto vicina a zero, piccoli cambiamenti del denominatore possono produrre grandi cambiamenti del coefficiente.
:::

## Box plot e osservazioni oltre le barriere

:::definizione{#boxplot titolo="Box plot e regola delle barriere"}
Nel **box plot** la scatola va dal primo al terzo quartile e una linea interna indica la mediana. Con la regola di Tukey si calcolano le due barriere
$$
L=Q_1-1{,}5\operatorname{IQR},\qquad
U=Q_3+1{,}5\operatorname{IQR}.
$$
Il baffo inferiore raggiunge il minimo dato maggiore o uguale a $L$. Il baffo superiore raggiunge il massimo dato minore o uguale a $U$. I dati strettamente esterni a $[L,U]$ sono riportati come punti isolati. I baffi terminano dunque in corrispondenza di dati osservati. Una barriera che coincide con un dato può coincidere anche con l'estremo di un baffo.
:::

:::esempio{titolo="Dai quartili ai baffi"}
Per i dati $2,3,4,5,6,7,8,18$ i quartili valgono $Q_1=3$ e $Q_3=7$, mentre la mediana è $5{,}5$. Poiché $\operatorname{IQR}=4$, le barriere sono $-3$ e $13$. Il dato $18$ supera la barriera superiore. I baffi si fermano perciò in corrispondenza di $2$ e $8$, che sono le osservazioni più estreme comprese fra le barriere.

::grafico{xmin=0 xmax=20 ymin=-0.6 ymax=1.7 nomi="x,y" poligoni="3,0.65 7,0.65 7,1.35 3,1.35" linee="3,0.65 7,0.65 7,1.35 3,1.35 3,0.65;2,1 3,1;7,1 8,1;2,0.86 2,1.14;8,0.86 8,1.14;5.5,0.65 5.5,1.35" punti="18,1,pieno" titolo="Valori osservati sull'asse x."}
:::

:::osservazione
La lunghezza della scatola indica l'ampiezza interquartile. La posizione della mediana nella scatola e la lunghezza dei baffi aiutano a confrontare la distribuzione dei ranghi centrali con quella degli estremi. Due box plot uguali possono però provenire da liste diverse, perché il grafico conserva solo un insieme ridotto di informazioni. La presenza di un punto esterno alle barriere indica che il valore è lontano dalla parte centrale secondo questa regola. Per interpretarlo occorrono l'unità di misura, il contesto e la verifica di come è stato raccolto.
:::

:::esempio{titolo="Confronto fra due box plot"}
Due reparti producono lotti misurati nella stessa unità. Nel primo si osservano $Q_1=12$, mediana $14$ e $Q_3=18$. Nel secondo si osservano $Q_1=16$, mediana $18$ e $Q_3=20$. La mediana del secondo coincide con il terzo quartile del primo, quindi il centro e il quartile superiore delle due distribuzioni occupano posizioni diverse sulla stessa scala. L'intervallo interquartile del secondo vale $4$, contro $6$ del primo. Questo confronto riguarda la dispersione centrale. Per stabilire in quale reparto il massimo è più lontano dal minimo servono anche gli estremi osservati, compresi gli eventuali punti isolati. Inoltre, le lunghezze delle due scatole non indicano quanti lotti sono stati misurati.
:::

## Standardizzazione e forma della distribuzione

:::definizione{#standardizzazione titolo="Punteggio standardizzato"}
Per un insieme con $n>1$ osservazioni e deviazione standard corretta $s>0$, il **punteggio standardizzato** di $x_i$ è
$$
z_i=\frac{x_i-\bar x}{s}.
$$
Il segno di $z_i$ indica il lato della media e il suo valore assoluto esprime la distanza in unità di deviazione standard. Il punteggio è adimensionale. La formula inversa è $x_i=\bar x+s z_i$, utile per riportare una soglia sulla scala dei dati. Se tutti i valori coincidono, $s=0$ e la divisione è indefinita.
:::

:::esempio{titolo="Confronto fra due misure"}
Una prova ha media $64$ e deviazione standard $8$. Il punteggio $76$ si trova a $\dfrac{76-64}{8}=1{,}5$ deviazioni standard sopra la media. In una seconda prova con media $72$ e deviazione standard $4$, il punteggio $78$ ha lo stesso valore standardizzato. In entrambe le prove la distanza relativa dal centro è la stessa. La quota di risultati inferiori può comunque differire, perché dipende anche dalla forma della distribuzione dei punteggi.
:::

:::osservazione
La standardizzazione è un cambio affine con coefficiente positivo $b=\dfrac{1}{s}$. Perciò conserva l'ordine e trasforma la media in $0$ e la deviazione standard corretta in $1$. Gli eventuali vuoti fra gruppi di valori e la direzione di una coda rimangono riconoscibili. Per esempio, nella serie $1,2,2,3,22$ la media vale $6$ e la mediana $2$. Un solo dato molto alto contribuisce a creare una coda a destra. La standardizzazione sposta e riscala l'asse e quella coda resta a destra.
:::

:::osservazione
L'uso di media e deviazione standard è adatto quando interessa riassumere il livello medio e quantificare gli scarti quadratici. Mediana e intervallo interquartile descrivono il centro e la dispersione centrale tramite i ranghi, quindi risentono meno del valore numerico di pochi estremi. Nei due insiemi $2,3,4,5,6$ e $2,3,4,5,26$, mediana e quartili coincidono. Le medie valgono invece $4$ e $8$, e anche la dispersione quadratica è maggiore nel secondo insieme. Una descrizione che affianchi i due tipi di indici rende esplicito il contributo dell'osservazione più alta.
:::
