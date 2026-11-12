---
titolo: "Funzioni, proporzionalità e grafici"
sommario: "Leggere assi e scale, riconoscere le leggi di proporzionalità e calcolare pendenze e aree nei grafici del moto."
---

## Variabili, dominio e valori

:::definizione{#grafico titolo="Rappresentazione di una funzione"}
Una **funzione** associa a ogni valore ammesso della variabile indipendente $x$ un unico valore della variabile dipendente $y$. La scrittura $y=f(x)$ indica che il valore di $y$ si ottiene applicando a $x$ la regola $f$. Il **dominio** è l'insieme dei valori ammessi di $x$. Il grafico è l'insieme delle coppie $(x,f(x))$ disegnate nel piano cartesiano. Una verticale in corrispondenza di un valore del dominio incontra il grafico in un punto, perché l'ordinata associata a quel valore è unica.

Il dominio dipende sia dalla regola di calcolo sia dalla situazione descritta. Una formula può essere calcolabile per ogni numero reale e descrivere un esperimento soltanto per le concentrazioni comprese nell'intervallo di taratura. In questo caso il dominio del modello è l'intervallo di taratura.
:::

:::esempio{titolo="Una taratura con un intervallo dichiarato"}
Uno strumento ha una risposta adimensionale $A$ che dipende dalla concentrazione $c$ di una soluzione. La taratura fornisce $A(c)=(3\,\mathrm{L/mol})c+0{,}08$ per $0\le c\le 0{,}20\,\mathrm{mol/L}$. A $c=0{,}10\,\mathrm{mol/L}$ la risposta è

$$
A(0{,}10\,\mathrm{mol/L})
=(3\,\mathrm{L/mol})(0{,}10\,\mathrm{mol/L})+0{,}08
=0{,}38.
$$

Il prodotto tra $\mathrm{L/mol}$ e $\mathrm{mol/L}$ è adimensionale. È quindi possibile sommarlo alla risposta di base $0{,}08$. All'estremo superiore dell'intervallo si ottiene $A(0{,}20\,\mathrm{mol/L})=0{,}68$. Poiché la risposta cresce al crescere di $c$, il modello descrive risposte tra $0{,}08$ e $0{,}68$. La concentrazione ammissibile e la risposta ammissibile appartengono a due intervalli diversi.
:::

:::osservazione{titolo="Un valore in ingresso e un valore in uscita"}
La lettura diretta parte da un'ascissa e cerca la corrispondente ordinata. La lettura inversa parte da un'ordinata e cerca le ascisse che la producono. La prima è univoca per definizione di funzione. La seconda può produrre più valori. Per esempio, $f(x)=x^2$ sul dominio reale assume il valore $4$ per $x=-2$ e $x=2$. Se il dominio è limitato a $x\ge 0$, la stessa equazione ha una sola soluzione ammissibile. Nelle applicazioni, la scelta del dominio determina quindi anche il numero delle risposte fisicamente possibili.
:::

## Tabelle, punti e scale degli assi

:::definizione{#scala-assi titolo="Scala e unità di un asse"}
La **scala** indica quanto varia la grandezza tra due posizioni dell'asse. In una scala lineare, a intervalli uguali sul disegno corrispondono incrementi numerici uguali. I due assi possono avere scale diverse. In un grafico concentrazione-tempo, un intervallo sull'asse orizzontale può valere un minuto, mentre un intervallo di uguale lunghezza sull'asse verticale può valere $0{,}5\,\mathrm{mmol/L}$. La pendenza calcolata dai dati usa le differenze numeriche con le rispettive unità.
:::

:::esempio{titolo="Tre misure di concentrazione"}
Si misura la concentrazione $c$ a tre istanti. Ogni riga della tabella individua un punto del grafico.

| $t$ in minuti | $c$ in $\mathrm{mmol/L}$ |
|---:|---:|
| 0 | 4 |
| 2 | 3 |
| 5 | 1 |

Il punto intermedio ha ascissa $2$ e ordinata $3$. Per leggerlo a partire dal tempo si sale da $t=2\,\mathrm{min}$ fino al punto e si segue la direzione orizzontale fino a $c=3\,\mathrm{mmol/L}$. Tra la prima e la seconda misura la concentrazione diminuisce di $1\,\mathrm{mmol/L}$ in $2\,\mathrm{min}$. Tra la seconda e la terza diminuisce di $2\,\mathrm{mmol/L}$ in $3\,\mathrm{min}$. Le diminuzioni sono riferite a intervalli diversi, quindi il confronto delle variazioni per minuto richiede due divisioni.

::grafico{xmin=-0.5 xmax=6 ymin=-0.5 ymax=5 nomi="t,c" punti="0,4;2,3;5,1" segmenti="2,0,2,3;0,3,2,3" titolo="Concentrazione c in mmol/L al tempo t in minuti. Il punto centrale ha coordinate $(2,3)$."}
:::

:::attenzione{titolo="I punti misurati e la curva del modello"}
Una tabella di misure stabilisce il valore della grandezza agli istanti riportati. Per assegnare un valore intermedio serve un'ipotesi aggiuntiva. Se tra $2$ e $5\,\mathrm{min}$ si assume una variazione uniforme, dopo $3\,\mathrm{min}$ si stima $3-\dfrac{2}{3}=\dfrac{7}{3}\,\mathrm{mmol/L}$. Una variazione più rapida vicino alla fine potrebbe dare un valore diverso allo stesso istante e rispettare entrambe le misure. Il segmento descrive quindi un'interpolazione lineare. La distinzione conta quando la traccia chiede un valore letto sul grafico sperimentale oppure una stima ottenuta con un modello.
:::

## Retta, pendenza e intercetta

:::definizione{#retta titolo="Pendenza e intercetta di una retta"}
In una relazione affine $y=mx+q$, la **pendenza** $m$ indica di quanto varia $y$ per unità di incremento di $x$. L'**intercetta verticale** $q$ è il valore assegnato a $x=0$ dalla formula. Ha la stessa unità di $y$. Dati due punti distinti $P_1=(x_1,y_1)$ e $P_2=(x_2,y_2)$ con $x_1\ne x_2$, valgono

$$
m=\frac{y_2-y_1}{x_2-x_1},
\qquad q=y_1-mx_1.
$$

Sottraendo le due equazioni $y_2=mx_2+q$ e $y_1=mx_1+q$, il termine $q$ si elimina e resta $y_2-y_1=m(x_2-x_1)$. Dividendo per la variazione di ascissa si ricava $m$. Se si scambiano i punti, numeratore e denominatore cambiano entrambi di segno. Il rapporto conserva quindi lo stesso valore.
:::

:::esempio{titolo="Posizione iniziale e velocità costante"}
Un corpo si trova a $1\,\mathrm{m}$ al tempo zero e a $7\,\mathrm{m}$ dopo $3\,\mathrm{s}$. Si assume che il grafico posizione-tempo sia una retta tra le misure. Lo spostamento nel tratto è $7\,\mathrm{m}-1\,\mathrm{m}=6\,\mathrm{m}$. La durata è $3\,\mathrm{s}$, quindi la pendenza è $2\,\mathrm{m/s}$. Poiché il primo punto ha ascissa zero, l'intercetta è già nota e la formula è

$$
s(t)=1\,\mathrm{m}+(2\,\mathrm{m/s})t.
$$

A $t=2\,\mathrm{s}$ il corpo si trova a $5\,\mathrm{m}$ dall'origine nel verso positivo. La differenza rispetto alla posizione iniziale è $4\,\mathrm{m}$. Le due quantità hanno la stessa unità, ma misurano rispettivamente una posizione rispetto all'origine e una variazione tra due istanti.

::grafico{curve="t,2*t+1,0,4" legenda="s=2t+1" xmin=-0.5 xmax=4.5 ymin=-0.8 ymax=10 nomi="t,s" punti="0,1;3,7" segmenti="0,1,3,1;3,1,3,7" titolo="Posizione s in metri e tempo t in secondi. Al tratto orizzontale di 3 secondi corrisponde una salita di 6 metri."}
:::

:::osservazione{titolo="Il segno della pendenza e la scelta dello zero"}
Una pendenza positiva corrisponde a ordinate crescenti al crescere dell'ascissa. Se la pendenza è negativa, le ordinate diminuiscono. Quando $m=0$ il grafico è orizzontale e la funzione è costante. La posizione dell'origine influisce sull'intercetta. Per esempio, se la nuova origine è spostata di $4\,\mathrm{m}$ nel verso positivo rispetto a quella dell'esempio, si sottraggono $4\,\mathrm{m}$ a tutte le posizioni. La nuova intercetta è $-3\,\mathrm{m}$. Nella differenza tra due posizioni la sottrazione comune si elimina, quindi la pendenza resta $2\,\mathrm{m/s}$.
:::

## Proporzionalità diretta e contributo iniziale

:::definizione{#diretta titolo="Rapporto costante"}
Due grandezze sono **direttamente proporzionali** quando la loro relazione è $y=kx$ con un coefficiente costante $k$. Per ogni valore ammesso $x\ne 0$, il rapporto $\dfrac{y}{x}$ vale $k$. Se la grandezza in ingresso viene moltiplicata per un fattore $\lambda$ e il nuovo valore è ammesso, allora l'uscita è moltiplicata per lo stesso fattore. La legge si rappresenta con una retta che passa per l'origine quando il dominio comprende lo zero.

Per un liquido omogeneo a densità $\rho$ costante, il rapporto tra massa del liquido $m$ e volume $V$ è $\dfrac{m}{V}=\rho$ per $V>0$. Una volta nota la densità, la relazione $m=\rho V$ permette di passare da un volume a una massa e viceversa.
:::

:::esempio{titolo="Massa del liquido e massa sulla bilancia"}
Un recipiente vuoto ha massa $12\,\mathrm{g}$. Con $20\,\mathrm{mL}$ di liquido la bilancia indica $36\,\mathrm{g}$. La massa del liquido è $36\,\mathrm{g}-12\,\mathrm{g}=24\,\mathrm{g}$. Il rapporto con il volume determina $\rho=1{,}2\,\mathrm{g/mL}$. Se il liquido è lo stesso, al volume $V=40\,\mathrm{mL}$ corrisponde una massa del liquido di $48\,\mathrm{g}$. La bilancia indica pertanto $12\,\mathrm{g}+48\,\mathrm{g}=60\,\mathrm{g}$.

Indicando con $M$ la massa totale, si ottiene

$$
M(V)=12\,\mathrm{g}+(1{,}2\,\mathrm{g/mL})V.
$$

Il grafico di $M$ ha la stessa pendenza del grafico di $m$, perché una variazione di volume produce la stessa variazione di massa in entrambi. Le intercette sono diverse. A volume zero la massa del liquido vale zero, mentre la bilancia misura la massa del recipiente.

::grafico{f="1.2*x;1.2*x+12" xmin=0 xmax=43 ymin=0 ymax=60 nomi="V,m" legenda="m=1{,}2V;M=1{,}2V+12" punti="20,24;20,36;40,48;40,60" segmenti="20,24,20,36;40,48,40,60" titolo="Massa in grammi e volume in millilitri. La distanza verticale costante di 12 grammi è la massa del recipiente."}
:::

:::attenzione{titolo="Una retta con intercetta diversa da zero"}
Per i due volumi dell'esempio, i rapporti tra massa totale e volume sono $\dfrac{36}{20}=1{,}8$ e $\dfrac{60}{40}=1{,}5$, espressi in $\mathrm{g/mL}$. I rapporti sono diversi, quindi la massa totale e il volume non sono direttamente proporzionali. La densità del liquido si ottiene sottraendo la massa del recipiente oppure usando il rapporto tra variazione della massa totale e variazione del volume. Quest'ultimo rapporto vale $\dfrac{60-36}{40-20}=1{,}2$, in $\mathrm{g/mL}$.
:::

## Dipendenze inverse e quadratiche

:::definizione{#inversa-quadratica titolo="Prodotto costante e dipendenza dal quadrato"}
Nella **proporzionalità inversa** vale $y=\dfrac{k}{x}$, con $x\ne 0$ e costante $k\ne 0$. Il prodotto $xy$ rimane uguale a $k$. Per valori positivi di $x$ e $k$, aumentando $x$ diminuisce $y$. Se l'ingresso è moltiplicato per un fattore positivo $\lambda$, l'uscita è divisa per $\lambda$.

Nella **dipendenza quadratica** della forma $y=kx^2$, con $k\ne 0$, il rapporto $\dfrac{y}{x^2}$ è costante per $x\ne 0$. Un fattore $\lambda$ sull'ingresso produce un fattore $\lambda^2$ sull'uscita. Le due regole si distinguono confrontando prodotti o rapporti tra valori, oppure osservando come cambiano le ordinate quando cambia la scala delle ascisse.
:::

:::esempio{titolo="Pressione di un gas a temperatura costante"}
Una quantità fissa di gas ideale occupa $3\,\mathrm{L}$ alla pressione di $120\,\mathrm{kPa}$. A temperatura costante, il prodotto tra pressione e volume è $360\,\mathrm{kPa}\,\mathrm{L}$. Se il volume diventa $6\,\mathrm{L}$, la pressione è

$$
p=\frac{360\,\mathrm{kPa}\,\mathrm{L}}{6\,\mathrm{L}}
=60\,\mathrm{kPa}.
$$

Al volume di $2\,\mathrm{L}$ corrisponde una pressione di $180\,\mathrm{kPa}$. Il passaggio da $2$ a $3\,\mathrm{L}$ comporta una diminuzione di $60\,\mathrm{kPa}$. Il passaggio da $3$ a $4\,\mathrm{L}$ comporta una diminuzione di $30\,\mathrm{kPa}$. I due incrementi di volume sono uguali, mentre le diminuzioni di pressione differiscono. Il ramo del grafico ha quindi una pendenza variabile e il modello si usa soltanto per volumi positivi.

::grafico{f="360/x" xmin=0 xmax=8 ymin=0 ymax=200 nomi="V,p" legenda="p=\dfrac{360}{V}" punti="2,180;3,120;6,60" segmenti="3,0,3,120;0,120,3,120;6,0,6,60;0,60,6,60" titolo="Pressione p in kilopascal e volume V in litri. Raddoppiando il volume da 3 a 6 litri, la pressione si dimezza."}
:::

:::esempio{titolo="Energia cinetica e quadrato della velocità"}
Un corpo di massa $4\,\mathrm{kg}$ si muove con modulo della velocità $v=3\,\mathrm{m/s}$. L'energia cinetica è $E_c=\dfrac{1}{2}mv^2=18\,\mathrm{J}$. Se il modulo della velocità diventa $6\,\mathrm{m/s}$, allora

$$
\frac{E_{c,2}}{E_{c,1}}
=\frac{(6\,\mathrm{m/s})^2}{(3\,\mathrm{m/s})^2}
=4.
$$

L'energia finale vale $72\,\mathrm{J}$. La massa è la stessa nei due stati, quindi il fattore comune $\dfrac{1}{2}m$ si semplifica nel rapporto. In direzione inversa, per quadruplicare l'energia a massa fissata occorre raddoppiare il modulo della velocità. Si prende la radice positiva perché $v$ indica un modulo.
:::

## Identificare un modello dai dati

:::osservazione{#confronto-modelli titolo="Quattro controlli su una tabella"}
Per valutare una legge si calcolano quantità che il modello prevede costanti. Per una relazione affine, le pendenze tra coppie successive di punti devono coincidere. Per la proporzionalità diretta deve coincidere anche il rapporto tra ordinata e ascissa. Per una dipendenza inversa si controllano i prodotti $xy$. Per una dipendenza quadratica della forma $y=kx^2$ si confrontano i rapporti tra ordinate e quadrati delle ascisse. Questi test si eseguono su misure espresse nelle stesse unità, così i risultati sono confrontabili.
:::

:::esempio{titolo="Un incremento di ascissa, tre risposte"}
Si confrontano tre modelli adimensionali. Tutti producono il valore $4$ a $x=2$. Passando a $x=4$, il modello diretto $y=2x$ fornisce $8$. Il modello inverso $y=\dfrac{8}{x}$ fornisce $2$. Il modello quadratico $y=x^2$ fornisce $16$. Con un solo punto ciascuno dei tre modelli può essere compatibile con i dati, perché il coefficiente si può ricavare da quel punto. Una seconda misura distingue questi tre modelli candidati, perché le previsioni sono diverse.

::grafico{f="2*x;8/x;x^2" xmin=0 xmax=5 ymin=0 ymax=20 nomi="x,y" punti="2,4;4,8;4,2;4,16" segmenti="2,0,2,4;4,0,4,16" titolo="Tre modelli coincidono a x = 2. Le tre ordinate a x = 4 separano proporzionalità diretta, inversa e quadratica."}
:::

:::esempio{titolo="Una legge affine a partire da tempi diseguali"}
Un livello in un contenitore viene misurato a $t=1$, $3$ e $6\,\mathrm{s}$. I valori sono rispettivamente $7$, $11$ e $17\,\mathrm{cm}$. L'incremento è di $4\,\mathrm{cm}$ nel primo intervallo e di $6\,\mathrm{cm}$ nel secondo. Poiché le durate sono $2$ e $3\,\mathrm{s}$, i due rapporti valgono entrambi $2\,\mathrm{cm/s}$. I dati appartengono a una stessa retta. L'intercetta è $7\,\mathrm{cm}-(2\,\mathrm{cm/s})(1\,\mathrm{s})=5\,\mathrm{cm}$. I rapporti tra livello e tempo, invece, variano. Il modello affine è compatibile con i dati e ha un contributo iniziale di $5\,\mathrm{cm}$.
:::

:::osservazione{titolo="Compatibilità e precisione delle misure"}
Se i dati sono sperimentali, i rapporti possono differire per effetto dell'incertezza. Il confronto va condotto con la precisione delle misure. Per esempio, due pendenze stimate come $1{,}98$ e $2{,}02\,\mathrm{cm/s}$ sono compatibili con una pendenza comune se ciascuna ha un'incertezza di $0{,}03\,\mathrm{cm/s}$. Gli intervalli $[1{,}95,2{,}01]$ e $[1{,}99,2{,}05]$ hanno valori in comune. La compatibilità riguarda gli intervalli misurati e il modello scelto. Una previsione fuori dall'intervallo osservato richiede un'ipotesi sulla validità della legge anche in quella zona.
:::

## Intersezioni e valori soglia

:::definizione{#incroci titolo="Intersezione tra due grafici"}
Una coppia $(x,y)$ appartiene sia al grafico di $f$ sia a quello di $g$ quando $y=f(x)$ e $y=g(x)$. L'ascissa di un'intersezione si trova quindi risolvendo $f(x)=g(x)$ nel dominio comune. Dopo aver ricavato l'ascissa si sostituisce il valore in una delle due leggi per ottenere l'ordinata. Se una delle due leggi è costante, l'intersezione indica quando l'altra grandezza raggiunge quel valore.

Per due rette $f(x)=m_1x+q_1$ e $g(x)=m_2x+q_2$ con pendenze diverse, l'equazione equivale a $(m_1-m_2)x=q_2-q_1$. Esiste un'unica soluzione algebrica. Il punto appartiene ai grafici dei modelli se l'ascissa rispetta entrambi i domini.
:::

:::esempio{titolo="Due livelli che coincidono"}
In due recipienti il livello si misura dalla stessa quota. Nel primo cresce secondo $h_A(t)=2\,\mathrm{cm}+(2\,\mathrm{cm/min})t$. Nel secondo scende secondo $h_B(t)=11\,\mathrm{cm}-(1\,\mathrm{cm/min})t$. Le leggi valgono per $0\le t\le5\,\mathrm{min}$. Per trovare quando i livelli coincidono si scrive

$$
\begin{aligned}
2\,\mathrm{cm}+(2\,\mathrm{cm/min})t
  &=11\,\mathrm{cm}-(1\,\mathrm{cm/min})t,\\[6pt]
(3\,\mathrm{cm/min})t &=9\,\mathrm{cm},\\[6pt]
t&=3\,\mathrm{min}.
\end{aligned}
$$

L'istante è nell'intervallo ammesso. Sostituendolo in entrambe le leggi si ottiene $8\,\mathrm{cm}$. Prima di quell'istante il secondo livello è maggiore. Infatti la differenza $h_B(t)-h_A(t)=9\,\mathrm{cm}-(3\,\mathrm{cm/min})t$ è positiva per $t<3\,\mathrm{min}$ e negativa per $t>3\,\mathrm{min}$. L'intersezione individua dunque il passaggio tra due ordini diversi delle ordinate.

::grafico{f="2+2*x;11-x" xmin=0 xmax=5 ymin=0 ymax=14 nomi="t,h" legenda="h_A=2+2t;h_B=11-t" punti="0,2;0,11,pieno,11;3,8" segmenti="3,0,3,8;0,8,3,8" titolo="Livelli h in centimetri e tempo t in minuti. Le rette si incontrano dopo tre minuti, alla quota di otto centimetri."}
:::

:::osservazione{titolo="Rette parallele e misure su intervalli distinti"}
Se due rette hanno la stessa pendenza, la differenza tra le ordinate è costante. Con intercette diverse il valore della differenza è diverso da zero, quindi le rette non si incontrano. Con intercette uguali le rette coincidono. In questo caso le grandezze sono uguali a ogni ascissa del dominio comune. Se i modelli valgono su intervalli disgiunti, la loro equazione può avere una soluzione algebrica senza indicare alcun istante misurabile per entrambi.
:::

## Pendenze nei grafici del moto

:::definizione{#moto titolo="Velocità media e accelerazione media"}
In un moto rettilineo, la posizione $s(t)$ è una coordinata con segno rispetto a un'origine e a un verso positivo. Tra due istanti $t_1<t_2$, la **velocità media** è lo spostamento diviso per la durata. Nel grafico posizione-tempo è la pendenza della secante tra i due punti. Se è nota la velocità $v(t)$, l'**accelerazione media** è la variazione di velocità divisa per la stessa durata.

$$
v_m=\frac{s(t_2)-s(t_1)}{t_2-t_1},
\qquad
a_m=\frac{v(t_2)-v(t_1)}{t_2-t_1}.
$$

Con la posizione in metri e il tempo in secondi, la velocità media è in $\mathrm{m/s}$. Con la velocità in $\mathrm{m/s}$ e il tempo in secondi, l'accelerazione media è in $\mathrm{m/s^2}$. L'ordinata sull'asse verticale stabilisce quale grandezza si ricava dalla pendenza.
:::

:::esempio{titolo="Due pendenze in una stessa legge oraria"}
Un corpo ha legge oraria $s(t)=(1\,\mathrm{m/s^2})t^2$ tra $0$ e $4\,\mathrm{s}$. Ai tempi $0$, $2$ e $4\,\mathrm{s}$ le posizioni valgono $0$, $4$ e $16\,\mathrm{m}$. Nei primi due secondi la velocità media è $\dfrac{4-0}{2-0}\,\mathrm{m/s}=2\,\mathrm{m/s}$. Nei due secondi successivi vale $\dfrac{16-4}{4-2}\,\mathrm{m/s}=6\,\mathrm{m/s}$. Le durate coincidono e gli spostamenti sono diversi, quindi i tratti hanno pendenze medie diverse. Sull'intero intervallo lo spostamento è $16\,\mathrm{m}$ e la durata $4\,\mathrm{s}$. La velocità media complessiva è $4\,\mathrm{m/s}$.

::grafico{curve="t,t^2,0,4" legenda="s=t^2" xmin=0 xmax=4.8 ymin=0 ymax=20 nomi="t,s" punti="0,0;2,4;4,16" segmenti="0,0,2,4;2,4,4,16" titolo="Posizione s in metri e tempo t in secondi. Le secanti dei due intervalli hanno pendenze di 2 e 6 metri al secondo."}
:::

:::osservazione{titolo="Velocità con segno e accelerazione"}
Una velocità negativa indica un moto nel verso opposto a quello scelto. Un'accelerazione media positiva indica che il valore algebrico della velocità aumenta nell'intervallo. Se la velocità passa da $-5$ a $-1\,\mathrm{m/s}$ in $2\,\mathrm{s}$, la variazione è $+4\,\mathrm{m/s}$ e l'accelerazione media è $2\,\mathrm{m/s^2}$. Il modulo della velocità scende da $5$ a $1\,\mathrm{m/s}$, perché entrambi i valori sono negativi. Dato che segno della velocità e segno della sua variazione descrivono fatti diversi, i due segni possono essere opposti.
:::

## Aree nel grafico velocità-tempo

:::definizione{#area titolo="Spostamento e distanza percorsa"}
Nel grafico velocità-tempo, lo **spostamento** tra due istanti è l'area con segno tra il grafico e l'asse dei tempi. Una regione sopra l'asse contribuisce positivamente e una regione sotto l'asse contribuisce negativamente. La **distanza percorsa** si calcola sommando i valori assoluti delle aree. Base e altezza delle figure hanno unità di tempo e di velocità. Il loro prodotto ha quindi unità di lunghezza.

Per una velocità costante, la regione è un rettangolo. Se la velocità varia linearmente e i valori iniziale e finale hanno lo stesso segno, lo spostamento è il prodotto tra durata e media aritmetica delle due velocità. La formula segue dall'area del trapezio. Se il grafico attraversa l'asse, la suddivisione all'istante in cui $v=0$ consente di ricavare anche la distanza.
:::

:::esempio{titolo="Due regioni separate da un'inversione di marcia"}
La velocità diminuisce linearmente da $4\,\mathrm{m/s}$ a $-2\,\mathrm{m/s}$ tra $0$ e $6\,\mathrm{s}$. La pendenza è $-1\,\mathrm{m/s^2}$, quindi $v(t)=4\,\mathrm{m/s}-(1\,\mathrm{m/s^2})t$. La velocità si annulla al tempo $t=4\,\mathrm{s}$. Prima di quell'istante la regione ha forma triangolare, con base di $4\,\mathrm{s}$ e altezza di $4\,\mathrm{m/s}$. Dopo lo zero la regione è un triangolo con base di $2\,\mathrm{s}$ e altezza geometrica di $2\,\mathrm{m/s}$. Indicando con $S_+$ e $S_-$ le aree geometriche sopra e sotto l'asse, si ottiene

$$
\begin{aligned}
S_+ &= \frac{(4\,\mathrm{s})(4\,\mathrm{m/s})}{2}=8\,\mathrm{m},\\[6pt]
S_- &= \frac{(2\,\mathrm{s})(2\,\mathrm{m/s})}{2}=2\,\mathrm{m},\\[6pt]
\Delta s &= S_+-S_-=6\,\mathrm{m},\\[6pt]
d &= S_++S_-=10\,\mathrm{m}.
\end{aligned}
$$

Se la posizione iniziale è $3\,\mathrm{m}$, la posizione finale è $3\,\mathrm{m}+6\,\mathrm{m}=9\,\mathrm{m}$. La distanza di $10\,\mathrm{m}$ comprende i tratti percorsi in entrambi i versi.

::grafico{curve="t,4-t,0,6" legenda="v=4-t" xmin=-0.5 xmax=7 ymin=-3 ymax=5 nomi="t,v" punti="0,4;4,0;6,-2" area="4-x;0;0;4|0;4-x;4;6" segmenti="6,0,6,-2" titolo="Velocità v in metri al secondo e tempo t in secondi. Il triangolo sotto l'asse contribuisce con segno negativo allo spostamento."}
:::

:::osservazione{titolo="Velocità media ottenuta dall'area"}
Dopo aver calcolato lo spostamento, la divisione per la durata fornisce la velocità media. Nell'esempio vale $\dfrac{6\,\mathrm{m}}{6\,\mathrm{s}}=1\,\mathrm{m/s}$. Per una velocità che varia linearmente su un unico intervallo, coincide con la media aritmetica delle velocità agli estremi. Per un grafico a più tratti occorre sommare i contributi di ciascun tratto e poi dividere per la durata totale. Se due velocità costanti valgono $2\,\mathrm{m/s}$ per $1\,\mathrm{s}$ e $6\,\mathrm{m/s}$ per $3\,\mathrm{s}$, gli spostamenti sono rispettivamente $2$ e $18\,\mathrm{m}$. La velocità media è quindi $\dfrac{20\,\mathrm{m}}{4\,\mathrm{s}}=5\,\mathrm{m/s}$, perché il tratto più veloce dura più a lungo.
:::


:::esempio{titolo="Un tratto obliquo seguito da una sosta"}
Un corpo ha velocità $6\,\mathrm{m/s}$ al tempo zero. La velocità diminuisce linearmente fino a zero al tempo $4\,\mathrm{s}$. Tra $4$ e $7\,\mathrm{s}$ il corpo resta fermo. Durante la frenata, lo spostamento è l'area del triangolo di base $4\,\mathrm{s}$ e altezza $6\,\mathrm{m/s}$. Durante la sosta, il grafico coincide con l'asse e l'area vale zero. Si ottiene quindi

$$
\Delta s=\frac{(4\,\mathrm{s})(6\,\mathrm{m/s})}{2}=12\,\mathrm{m}.
$$

La velocità media nei primi quattro secondi è $3\,\mathrm{m/s}$. Nell'intervallo completo è $\dfrac{12}{7}\,\mathrm{m/s}$. I due valori differiscono perché la posizione finale è già raggiunta dopo quattro secondi, mentre nella seconda media il tempo di sosta entra nella durata totale. Nel grafico posizione-tempo la sosta corrisponde a un segmento orizzontale posto alla quota della posizione raggiunta, che può essere diversa da zero.
:::

:::osservazione{titolo="Distanza, spostamento e due tipi di media"}
Il rapporto tra distanza percorsa e durata è la rapidità media. Il rapporto tra spostamento e durata è la velocità media con segno. Un corpo che percorre $5\,\mathrm{m}$ in un verso e torna al punto di partenza lungo la stessa retta percorre complessivamente $10\,\mathrm{m}$. Se impiega $4\,\mathrm{s}$, la rapidità media è $2{,}5\,\mathrm{m/s}$, mentre la velocità media vale zero. L'uguaglianza tra rapidità media e valore assoluto della velocità media vale quando il corpo mantiene lo stesso verso nei tratti in cui si muove.
:::


:::attenzione{titolo="Le unità identificano il significato di un'area"}
Nel grafico posizione-tempo l'area sotto una curva ha unità di lunghezza per tempo. Per esempio, una posizione costante di $3\,\mathrm{m}$ per $2\,\mathrm{s}$ produce un rettangolo di area $6\,\mathrm{m}\,\mathrm{s}$. Il corpo resta nella stessa posizione, quindi lo spostamento è zero. Nel grafico velocità-tempo, invece, un rettangolo con altezza $3\,\mathrm{m/s}$ e base $2\,\mathrm{s}$ ha area $6\,\mathrm{m}$ e descrive uno spostamento. Prima del calcolo, la grandezza indicata sull'asse verticale permette quindi di stabilire il significato della figura.
:::

:::osservazione{titolo="Un controllo dell'area con la velocità media"}
Se la velocità resta compresa tra $2$ e $5\,\mathrm{m/s}$ per $4\,\mathrm{s}$, lo spostamento è compreso tra $8$ e $20\,\mathrm{m}$. Infatti la regione sotto il grafico contiene il rettangolo di altezza $2\,\mathrm{m/s}$ ed è contenuta nel rettangolo di altezza $5\,\mathrm{m/s}$. Questo controllo fornisce un intervallo anche quando il tratto non è rettilineo e la forma esatta dell'area è ignota.
:::
