---
titolo: "Proporzionalità e grafici"
sommario: "Lettura di tabelle, scale e grafici. Modelli diretti, inversi, affini e quadratici."
---

In questo capitolo si impara a leggere un grafico e una tabella di misure e a riconoscere la formula che collega due grandezze, per esempio $V=3t$ per il volume $V$ d'acqua che un rubinetto versa nel tempo $t$.

## Assi e scale

:::definizione{#assi titolo="Associare coordinate e grandezze"}
Una **grandezza** è una proprietà che si misura, come una lunghezza, un tempo o una forza. Il risultato di una misura è un numero seguito da un'**unità di misura**, per esempio $4\,\mathrm{cm}$ (centimetri) oppure $10\,\mathrm N$. Il simbolo $\mathrm N$ si legge *newton* ed è l'unità di misura della forza.

Un grafico ha due **assi**, cioè due rette graduate, una orizzontale e una verticale. Accanto a ogni asse sono scritte la grandezza e la sua unità. Un punto del grafico rappresenta una coppia di valori misurati insieme e si scrive $(x;y)$. Il primo numero, $x$, si chiama **ascissa** e si legge sull'asse orizzontale. Il secondo numero, $y$, si chiama **ordinata** e si legge sull'asse verticale. In un grafico con la lunghezza in centimetri sull'asse orizzontale e la forza in newton sull'asse verticale, il punto $(4;15)$ indica che alla lunghezza di $4\,\mathrm{cm}$ corrisponde una forza di $15\,\mathrm N$. L'espressione «grafico di $y$ contro $x$», oppure «di $y$ in funzione di $x$», indica che $y$ è sull'asse verticale e $x$ sull'asse orizzontale.

La **scala** di un asse è il valore che corrisponde a un quadretto. Le due scale si scelgono in modo indipendente. Per questo una distanza di due quadretti rappresenta $4\,\mathrm{cm}$ su un asse in cui un quadretto vale $2\,\mathrm{cm}$ e rappresenta $10\,\mathrm N$ su un asse in cui un quadretto vale $5\,\mathrm N$. Se un asse va da $10\,\mathrm s$ a $30\,\mathrm s$ (secondi) in cinque quadretti uguali, ogni quadretto vale $\dfrac{30-10}{5}\,\mathrm s=4\,\mathrm s$. Tre quadretti dopo l'inizio dell'asse si legge $10+3\cdot4=22\,\mathrm s$.

Due punti si confrontano con i valori letti sulle scale. L'angolo che una linea forma sulla carta dipende dalle due scale scelte per il disegno.
:::

:::esempio{#unita-pendenza titolo="Dai quadretti alle grandezze"}
La **pendenza** di una retta su un grafico è un rapporto, cioè il risultato di una divisione, fra due differenze. Al numeratore (sopra la linea di frazione) c'è l'aumento della grandezza sull'asse verticale, al denominatore (sotto) l'aumento della grandezza sull'asse orizzontale. Una differenza fra due valori si indica con la lettera greca $\Delta$, che si legge *delta*. La scrittura $\Delta l$ indica la differenza fra due lunghezze e $\Delta F$ la differenza fra due forze.

Nel grafico di una forza $F$ rispetto a una lunghezza $l$, ogni quadretto vale $2\,\mathrm{cm}$ in orizzontale e $5\,\mathrm N$ in verticale. Da un punto $P$ a un punto $Q$ della retta si avanza di due quadretti e si sale di tre quadretti. Con le scale si ottiene
$$
\Delta l=2\cdot2\,\mathrm{cm}=4\,\mathrm{cm},\qquad \Delta F=3\cdot5\,\mathrm N=15\,\mathrm N.
$$
La pendenza è $\dfrac{\Delta F}{\Delta l}=\dfrac{15}{4}\,\mathrm{N/cm}=3{,}75\,\mathrm{N/cm}$. L'unità $\mathrm{N/cm}$ si legge *newton al centimetro*.

Il rapporto fra i quadretti, $\dfrac32$, descrive soltanto l'inclinazione della retta sulla carta. Per ottenere la pendenza, i quadretti si trasformano in newton e in centimetri con le scale.

Il valore numerico di una pendenza dipende dalle unità usate. In un metro ci sono $100\,\mathrm{cm}$, quindi la stessa retta ha pendenza $3{,}75\cdot100=375\,\mathrm{N/m}$ (newton al metro).
:::

::grafico{f="15*x/4" xmin=0 xmax=6 ymin=0 ymax=24 punti="0,0,pieno,P;4,15,pieno,Q" segmenti="0,0,4,0;4,0,4,15" nomi="l (cm),F (N)" titolo="Il rapporto fra le differenze di coordinate vale 15 N divisi per 4 cm"}

:::esempio{titolo="Due scale verticali per gli stessi dati"}
Un **dinamometro** è uno strumento che misura le forze. Un dinamometro indica $18\,\mathrm N$ all'istante $1\,\mathrm s$ e $20\,\mathrm N$ all'istante $5\,\mathrm s$. La **pendenza media** fra le due letture è la differenza delle forze divisa per la differenza dei tempi:
$$
\dfrac{20-18}{5-1}\,\mathrm{N/s}=\dfrac{2}{4}\,\mathrm{N/s}=0{,}50\,\mathrm{N/s}.
$$
Gli stessi due punti si disegnano in due modi.

- Se l'asse verticale parte da $17\,\mathrm N$, il segmento fra le due letture occupa una buona parte del disegno e la salita si nota.
- Se l'asse verticale parte da zero, l'aumento di $2\,\mathrm N$ è piccolo rispetto ai $20\,\mathrm N$ dell'asse e il segmento appare quasi orizzontale.

Il valore da cui parte la scala cambia l'aspetto della figura. In entrambi i disegni la variazione della forza resta $20-18=2\,\mathrm N$ e la pendenza media resta $0{,}50\,\mathrm{N/s}$, perché si calcolano con i valori letti sulle scale.

Se si scambiano gli assi, con la forza in orizzontale e il tempo in verticale, la pendenza diventa $\dfrac{5-1}{20-18}\,\mathrm{s/N}=\dfrac42\,\mathrm{s/N}=2\,\mathrm{s/N}$. Le due pendenze hanno significati diversi. La prima indica di quanti newton aumenta in media la forza in un secondo. La seconda indica quanti secondi passano in media per un aumento di un newton.
:::

::grafico{segmenti="1,18,5,20" punti="1,18,pieno,A;5,20,pieno,B" xmin=0 xmax=6 ymin=17 ymax=22 nomi="t (s),F (N)" titolo="La forza aumenta di 2 N fra 1 s e 5 s. La scala verticale parte da 17 N."}

## Proporzionalità diretta

:::definizione{#diretta titolo="Rapporto costante"}
Un rubinetto versa $3$ litri d'acqua al minuto. In $1\,\mathrm{min}$ si raccolgono $3\,\mathrm L$, in $2\,\mathrm{min}$ si raccolgono $6\,\mathrm L$ e in $4\,\mathrm{min}$ si raccolgono $12\,\mathrm L$ ($\mathrm L$ è il simbolo del litro, $\mathrm{min}$ quello del minuto). Dividendo ogni volume per il suo tempo si ottiene sempre lo stesso numero:
$$
\frac31=\frac62=\frac{12}{4}=3.
$$
Due grandezze $x$ e $y$ sono in **proporzionalità diretta** quando $y=kx$. Il numero $k$ è una **costante**, cioè resta lo stesso per tutte le coppie, e si chiama **coefficiente di proporzionalità**. Per $x\neq0$ ($x$ diverso da zero) il rapporto $\dfrac yx$ vale $k$. Nell'esempio il volume $V$ e il tempo $t$ soddisfano $V=3t$, con $k=3\,\mathrm{L/min}$ (litri al minuto). Una formula che descrive un fenomeno, come $V=3t$, si chiama anche **legge** o **modello**.

- Le unità di $k$ sono quelle di $y$ divise per quelle di $x$.
- Il **dominio** è l'insieme dei valori di $x$ per i quali si usa la formula. Quando lo zero appartiene al dominio, per $x=0$ la formula dà $y=k\cdot0=0$. Il grafico è allora una retta che passa per l'origine, cioè per il punto $(0;0)$.
- Se si moltiplica $x$ per un numero, anche $y$ viene moltiplicata per quel numero. La **portata** è il volume di liquido che esce in ogni unità di tempo. Quando si raccoglie acqua a portata costante, il doppio del tempo dall'inizio dà il doppio del volume raccolto. Nella figura si passa dal punto $A=(1;3)$ al punto $B=(2;6)$.
:::

::grafico{f="3*x" xmin=0 xmax=4 ymin=0 ymax=12 nomi="t (min),V (L)" punti="1,3,pieno,A;2,6,pieno,B" titolo="Con portata 3 L/min, raddoppiare il tempo raddoppia il volume raccolto"}

:::esempio{#diretta-inversa titolo="Dal volume al tempo"}
Il volume raccolto segue la legge $V=3t$, con $V$ in litri e $t$ in minuti. Si cerca il tempo necessario per raccogliere $7{,}5\,\mathrm L$. I **membri** di un'uguaglianza sono le due espressioni a sinistra e a destra del segno di uguale. Nella legge il tempo è moltiplicato per $3$, quindi per ricavarlo si dividono i due membri per $3$:
$$
\begin{aligned}
7{,}5&=3t\\[6pt]
t&=\frac{7{,}5}{3}=2{,}5\,\mathrm{min}.
\end{aligned}
$$
Sul grafico si parte da $7{,}5$ sull'asse verticale, ci si sposta in orizzontale fino alla retta e si legge l'ascissa del punto raggiunto. Sostituendo $2{,}5$ nella legge si ritrova il volume richiesto, perché $3\cdot2{,}5=7{,}5\,\mathrm L$.
:::

:::esempio{titolo="Cambiare unità conserva la legge fisica"}
Una pompa eroga, cioè fornisce, $1{,}2\,\mathrm L$ ogni $30\,\mathrm s$. Il volume erogato è direttamente proporzionale al tempo e il coefficiente di proporzionalità è la portata della pompa.

- In litri e secondi il coefficiente è $\dfrac{1{,}2}{30}\,\mathrm{L/s}=0{,}04\,\mathrm{L/s}$ (litri al secondo).
- In millilitri e minuti il coefficiente è $2400\,\mathrm{mL/min}$. Un litro contiene $1000\,\mathrm{mL}$ (millilitri), quindi $1{,}2\,\mathrm L=1200\,\mathrm{mL}$. Un minuto è formato da due intervalli di $30\,\mathrm s$, quindi in un minuto la pompa eroga $2\cdot1200=2400\,\mathrm{mL}$.

I due coefficienti descrivono la stessa pompa, come mostra il volume erogato in $90\,\mathrm s$.

- Con il primo coefficiente si ottiene $0{,}04\cdot90=3{,}6\,\mathrm L$.
- Con il secondo coefficiente il tempo si scrive in minuti, $90\,\mathrm s=1{,}5\,\mathrm{min}$, e si ottiene $2400\cdot1{,}5=3600\,\mathrm{mL}$.

Poiché $3600\,\mathrm{mL}=3{,}6\,\mathrm L$, i due risultati indicano lo stesso volume. Il coefficiente in litri al secondo si moltiplica per un tempo in secondi. Usato con un tempo in minuti, lascerebbe nelle unità un rapporto fra minuti e secondi ancora da convertire.

Se il recipiente contiene già $2\,\mathrm L$ prima che la pompa inizi, il volume aggiunto dalla pompa resta direttamente proporzionale al tempo e vale $0{,}04\,t$. Il volume totale è $2+0{,}04\,t$ e all'istante $t=0$ vale $2\,\mathrm L$, quindi non è direttamente proporzionale al tempo. In un esperimento, la domanda precisa quale dei due volumi si misura.
:::

## Proporzionalità inversa

:::definizione{#inversa titolo="Prodotto costante"}
Con $12\,\mathrm{cm}^3$ (centimetri cubi) di un materiale si forma uno strato di spessore uniforme, cioè uguale in ogni punto. Il volume dello strato è l'area $A$ della base moltiplicata per lo spessore $h$, quindi $A\cdot h=12\,\mathrm{cm}^3$.

- Con un'area di $2\,\mathrm{cm}^2$ (centimetri quadrati) lo spessore è $\dfrac{12}{2}=6\,\mathrm{cm}$.
- Con un'area di $4\,\mathrm{cm}^2$ lo spessore è $\dfrac{12}{4}=3\,\mathrm{cm}$.

L'area è raddoppiata e lo spessore si è dimezzato, mentre il prodotto è rimasto $2\cdot6=4\cdot3=12$.

Due grandezze positive $x$ e $y$ sono in **proporzionalità inversa** quando il loro prodotto è costante, cioè $xy=c$ con $c>0$ ($c$ maggiore di zero). Dividendo i due membri per $x$ si ottiene la legge esplicita, cioè con $y$ da sola al primo membro, $y=\dfrac{c}{x}$, con $x>0$. Il valore $x=0$ è escluso perché la divisione per zero non è definita. Raddoppiare la prima grandezza dimezza la seconda, perché il prodotto resta uguale a $c$. Nel grafico la curva scende al crescere di $x$. Il rapporto $\dfrac yx$ cambia da un punto all'altro. Nell'esempio vale $\dfrac62=3$ nel primo punto e $\dfrac34=0{,}75$ nel secondo.
:::

::grafico{f="12/x" xmin=1 xmax=7 ymin=0 ymax=13 nomi="A (cm²),h (cm)" punti="2,6,pieno,A;4,3,pieno,B" titolo="Raddoppiando l'area lo spessore si dimezza. In entrambi i punti il volume è 12 cm³"}

:::attenzione{#calo-non-inverso titolo="Una diminuzione da sola"}
Una grandezza che diminuisce mentre l'altra aumenta non è per questo inversamente proporzionale all'altra. Nella legge $y=12-2x$ si calcolano tre coppie e il loro prodotto.

- Per $x=2$ si ha $y=12-2\cdot2=8$ e il prodotto è $2\cdot8=16$.
- Per $x=4$ si ha $y=12-2\cdot4=4$ e il prodotto è $4\cdot4=16$.
- Per $x=3$ si ha $y=12-2\cdot3=6$ e il prodotto è $3\cdot6=18$.

I tre prodotti non sono uguali, quindi la legge $y=12-2x$ non è una proporzionalità inversa. Nei soli punti $x=2$ e $x=4$ essa dà gli stessi valori della legge inversa $y=\dfrac{16}{x}$. Due osservazioni sono dunque in accordo con più di un modello. Per distinguere una discesa a pendenza costante da una proporzionalità inversa si confrontano i valori anche in altri punti, oppure si parte dalla legge fisica del fenomeno.
:::

:::esempio{titolo="La variazione percentuale si ricava dal fattore reciproco"}
Una **percentuale** è una frazione con denominatore $100$. Per esempio $25\%=\dfrac{25}{100}=0{,}25$.

Un percorso di $120\,\mathrm{km}$ (chilometri) è fatto a velocità costante. La velocità $v$, in chilometri all'ora ($\mathrm{km/h}$), moltiplicata per il tempo $t$, in ore ($\mathrm h$), dà la distanza. La distanza è fissata, quindi $vt=120\,\mathrm{km}$ e le due grandezze sono inversamente proporzionali.

- Con velocità $60\,\mathrm{km/h}$ il tempo è $\dfrac{120}{60}\,\mathrm h=2\,\mathrm h$.
- Aumentando la velocità del $25\%$ si passa a $60+0{,}25\cdot60=75\,\mathrm{km/h}$. Il nuovo tempo è $\dfrac{120}{75}\,\mathrm h=1{,}6\,\mathrm h$.

Poiché $\dfrac{1{,}6}{2}=0{,}80$, il nuovo tempo è l'$80\%$ del precedente, quindi il tempo diminuisce del $20\%$.

Il **reciproco** di una frazione si ottiene scambiando numeratore e denominatore. La velocità è stata moltiplicata per $\dfrac{75}{60}=\dfrac54$. Il prodotto $vt$ resta uguale, quindi il tempo è stato moltiplicato per il reciproco $\dfrac45=0{,}80$. Dal rapporto fra le due velocità si ottiene così direttamente il rapporto fra i tempi.

Una diminuzione del $25\%$ darebbe un tempo di $2-0{,}25\cdot2=1{,}5\,\mathrm h$. A $75\,\mathrm{km/h}$ in $1{,}5\,\mathrm h$ si percorrono $75\cdot1{,}5=112{,}5\,\mathrm{km}$, meno dei $120\,\mathrm{km}$ del percorso. Le percentuali delle due variazioni coincidono soltanto se il valore iniziale e quello finale coincidono, e in quel caso valgono entrambe $0\%$.

In un viaggio con una sosta fissa di mezz'ora, il prodotto fra velocità e tempo di marcia resta la distanza. Il tempo totale comprende anche la sosta e vale $\dfrac{120}{v}+0{,}5$, cioè la somma di un termine inversamente proporzionale alla velocità e di una costante. A $60\,\mathrm{km/h}$ il tempo totale è $2{,}5\,\mathrm h$ e a $75\,\mathrm{km/h}$ è $2{,}1\,\mathrm h$. Nella figura la curva del tempo totale sta $0{,}5\,\mathrm h$ sopra quella del tempo di marcia.
:::

::grafico{f="120/x;120/x+0.5" xmin=35 xmax=93 ymin=0 ymax=4 punti="60,2,pieno;75,1.6,pieno;60,2.5,pieno;75,2.1,pieno" legenda="\text{tempo in marcia};\text{con sosta}" nomi="v (km/h),t (h)" titolo="A 75 km/h si viaggia per 1,6 h. Una sosta fissa aggiunge 0,5 h."}

:::esempio{titolo="Progettare una misura che separi due modelli"}
L'**incertezza** di una misura indica di quanto il valore vero si discosta al massimo dal valore letto. La scrittura $5{,}5\pm0{,}4$ (il simbolo $\pm$ si legge *più o meno*) indica l'intervallo dei valori compresi fra $5{,}5-0{,}4=5{,}1$ e $5{,}5+0{,}4=5{,}9$.

Le leggi $y=12-2x$ e $y=\dfrac{16}{x}$ coincidono per $x=2$, dove valgono entrambe $8$, e per $x=4$, dove valgono entrambe $4$. Una misura più precisa ripetuta in uno di quei due punti darebbe ancora lo stesso valore previsto dai due modelli. Per distinguerli si sceglie $x=3$, dove la prima legge prevede $12-2\cdot3=6$ e la seconda prevede $\dfrac{16}{3}\simeq5{,}33$ (il simbolo $\simeq$ si legge *circa uguale a*).

La nuova lettura in $x=3$ sia $5{,}5\pm0{,}4$. L'intervallo va da $5{,}1$ a $5{,}9$, quindi contiene il valore $5{,}33$ previsto dalla legge inversa e non contiene il valore $6$ previsto dalla legge $y=12-2x$.

Se l'incertezza fosse $0{,}6$, l'intervallo andrebbe da $5{,}5-0{,}6=4{,}9$ a $5{,}5+0{,}6=6{,}1$ e conterrebbe entrambi i valori previsti. Per distinguere le due leggi servono dunque un'ascissa in cui le previsioni sono diverse e una misura abbastanza precisa. L'accordo trovato riguarda l'ascissa $x=3$. Da solo non dimostra che la legge inversa valga per tutte le ascisse.
:::

## Relazioni affini

:::definizione{#affine titolo="Pendenza e valore iniziale"}
Un recipiente contiene già $4\,\mathrm L$ d'acqua e ne riceve $2\,\mathrm L$ ogni minuto. Dopo $t$ minuti il volume è $V=2t+4$. All'istante $t=0$ vale $4\,\mathrm L$, dopo un minuto $6\,\mathrm L$, dopo due minuti $8\,\mathrm L$.

Una **relazione affine** è una legge della forma $y=mx+q$, con $m$ e $q$ costanti. Il suo grafico è una retta.

- Il coefficiente $m$ è la **pendenza**, detta anche **coefficiente angolare**. Misura la variazione di $y$ quando $x$ aumenta di una unità. Nell'esempio $m=2\,\mathrm{L/min}$.
- Il numero $q$ è l'**intercetta**, cioè il valore dato dal modello in $x=0$. Sul grafico è l'ordinata del punto in cui la retta incontra l'asse verticale. Se lo zero è osservabile, l'intercetta rappresenta il dato iniziale. Nell'esempio $q=4\,\mathrm L$.

Con $q=0$ si ritrova la proporzionalità diretta $y=mx$. Se $q$ è diverso da zero, il rapporto $\dfrac yx$ dipende da $x$. Nell'esempio vale $\dfrac61=6$ dopo un minuto e $\dfrac82=4$ dopo due minuti. Due punti con ascisse diverse bastano per trovare $m$ e $q$ nel modello affine.

Se $y$ diminuisce al crescere di $x$, la pendenza è negativa. La legge $y=12-2x$ ha $m=-2$ e $q=12$. La sua retta incontra l'asse orizzontale nel punto in cui $y=0$. Da $0=12-2x$ si ottiene $2x=12$ e quindi $x=6$. Una retta orizzontale, come $y=6$, ha pendenza zero.
:::

::::teorema{#due-punti titolo="Ricavare pendenza e intercetta"}
Una retta $y=mx+q$ passa per i punti $(x_1;y_1)$ e $(x_2;y_2)$, con $x_1\neq x_2$. I numeri piccoli scritti in basso, detti indici, distinguono il primo punto dal secondo. Allora vale
$$
m=\frac{y_2-y_1}{x_2-x_1},\qquad q=y_1-mx_1.
$$
La pendenza è la differenza delle ordinate divisa per la differenza delle ascisse, prese nello stesso ordine.

Per i punti $(0;4)$ e $(3;10)$ si ottiene
$$
m=\frac{10-4}{3-0}=\frac63=2,\qquad q=4-2\cdot0=4,
$$
quindi la retta è $y=2x+4$. Per i punti $(0;0)$ e $(3;6)$ si ottiene $m=\dfrac{6-0}{3-0}=2$ e $q=0$, quindi la retta è $y=2x$. Nella figura le due rette rappresentano i volumi di due recipienti che ricevono entrambi $2\,\mathrm{L/min}$. Il recipiente A parte vuoto e il recipiente B parte con $4\,\mathrm L$.

:::dimostrazione
I due punti appartengono alla retta, quindi le loro coordinate soddisfano la legge:
$$
y_1=mx_1+q,\qquad y_2=mx_2+q.
$$
Si sottrae la prima uguaglianza dalla seconda, membro a membro. L'intercetta si cancella perché $q-q=0$ e rimane
$$
y_2-y_1=mx_2-mx_1=m(x_2-x_1).
$$
Nell'ultimo passaggio si è raccolto il fattore comune $m$. La differenza delle ascisse $x_2-x_1$ è diversa da zero, quindi si dividono i due membri per $x_2-x_1$ e si ottiene la formula di $m$. Sottraendo $mx_1$ dai due membri della prima uguaglianza si ricava $q=y_1-mx_1$.
:::
::::

::grafico{f="2*x;2*x+4" xmin=0 xmax=4 ymin=0 ymax=13 nomi="t (min),V (L)" legenda="\text{recipiente A};\text{recipiente B}" punti="0,0,pieno;0,4,pieno;3,6,pieno;3,10,pieno" titolo="I recipienti iniziano con volumi diversi e si riempiono alla stessa portata"}

:::esempio{#confronti-modelli titolo="L'incontro di due rette"}
In un'altra prova due recipienti contengono $V_A=2t+4$ e $V_B=4t$, con volumi in litri e tempi in minuti.

All'inizio A ha un vantaggio di quattro litri. Ogni minuto B raccoglie $4-2=2$ litri più di A, quindi il vantaggio si annulla dopo $\dfrac42=2\,\mathrm{min}$. Lo stesso risultato si ottiene chiedendo che i due volumi siano uguali:
$$
\begin{aligned}
2t+4&=4t\\[6pt]
4&=4t-2t=2t\\[6pt]
t&=2\,\mathrm{min}.
\end{aligned}
$$
A quell'istante entrambi i recipienti contengono $8\,\mathrm L$. L'**intersezione** di due rette è il punto che appartiene a entrambe, e l'uguaglianza $2t+4=4t$ ne esprime la condizione. Sul grafico è il punto $P=(2;8)$. Nel calcolo compare la differenza delle pendenze, $4-2$, perché entrambi i volumi cambiano nel tempo.
:::

::grafico{f="2*x+4;4*x" xmin=0 xmax=4 ymin=0 ymax=16 punti="2,8,pieno,P" nomi="t (min),V (L)" legenda="A;B" titolo="Le rette si incontrano quando i volumi sono uguali per lo stesso istante"}

:::esempio{titolo="Una retta incontra un limite di capacità"}
La **capacità** di un recipiente è il volume massimo che esso contiene. Un recipiente contiene $4\,\mathrm L$ e riceve $3\,\mathrm{L/min}$. La sua capacità è $16\,\mathrm L$ e, una volta pieno, il liquido in ingresso trabocca, cioè esce dal bordo. Prima di quel momento il volume $V$ in litri segue $V=4+3t$, con $t$ in minuti. Il recipiente è pieno quando
$$
\begin{aligned}
4+3t&=16\\[6pt]
3t&=16-4=12\\[6pt]
t&=\frac{12}{3}=4\,\mathrm{min}.
\end{aligned}
$$
A partire dal quarto minuto il volume contenuto rimane $16\,\mathrm L$. Dopo $6\,\mathrm{min}$ la pompa ha fornito $3\cdot6=18\,\mathrm L$. Nel recipiente si sono aggiunti soltanto $16-4=12\,\mathrm L$ ai quattro iniziali. Gli altri $18-12=6\,\mathrm L$ sono fuoriusciti.

Il grafico del volume contenuto è formato da due tratti, che descrivono lo stesso recipiente in condizioni diverse.

- Da $0$ a $4\,\mathrm{min}$ il tratto è un segmento che sale da $(0;4)$ a $(4;16)$, con pendenza $3\,\mathrm{L/min}$.
- Da $4$ a $6\,\mathrm{min}$ il tratto è orizzontale, con pendenza zero.

Il punto $(4;16)$ è comune ai due tratti. La pendenza si legge separatamente prima e dopo il raggiungimento della capacità. Il volume fornito dalla pompa, $3t$, continua a crescere secondo la portata assegnata anche quando il livello nel recipiente ha smesso di salire.
:::

::grafico{segmenti="0,4,4,16;4,16,6,16" punti="0,4,pieno;4,16,pieno;6,16,pieno" xmin=0 xmax=6.4 ymin=0 ymax=21 nomi="t (min),V (L)" titolo="Dopo 4 min il volume contenuto è quello massimo. I due tratti hanno pendenze diverse."}

## Leggere una tabella

:::osservazione{#tabelle titolo="Scegliere una relazione compatibile con i dati"}
Una tabella di misure riporta delle coppie $(x;y)$. Il controllo da fare dipende dal modello.

- **Modello diretto.** Si calcola il rapporto $\dfrac yx$ per le coppie con $x$ diverso da zero. Il modello è verificato se il rapporto è sempre lo stesso. Per $(1;7)$, $(2;14)$, $(3;21)$ i rapporti valgono tutti $7$, quindi $y=7x$.
- **Modello inverso.** Si calcola il prodotto $xy$. Il modello è verificato se il prodotto è sempre lo stesso. Per $(2;12)$, $(3;8)$, $(6;4)$ i prodotti valgono tutti $24$, quindi $y=\dfrac{24}{x}$.
- **Modello affine.** Si passa da ogni coppia alla successiva e si divide la differenza delle ordinate per la differenza delle ascisse. Il modello è verificato se questi rapporti sono tutti uguali. Per $(1;3)$, $(2;5)$, $(5;11)$ si ottiene $\dfrac{5-3}{2-1}=2$ e $\dfrac{11-5}{5-2}=2$, quindi i punti stanno su una retta di pendenza $2$.

Le ascisse sono **equispaziate** quando la differenza fra un'ascissa e la successiva è sempre la stessa, come in $1$, $2$, $3$. In questo caso, per il modello affine basta che le differenze fra ordinate successive siano uguali.

Le misure sperimentali hanno un'incertezza. Per questo rapporti non esattamente uguali possono rappresentare la stessa legge. Lo **scarto** è la differenza fra un valore misurato e il valore dato dalla legge. La legge è in accordo con i dati se gli scarti sono più piccoli delle incertezze delle misure.
:::

:::esempio{#residui titolo="Uno scarto rispetto al modello"}
Il **residuo** di una misura è il valore misurato meno il valore previsto dal modello.

Il volume previsto da $V=2t+1$ a $t=4\,\mathrm{min}$ è $2\cdot4+1=9\,\mathrm L$. Una misura di $8{,}8\,\mathrm L$ ha residuo $8{,}8-9=-0{,}2\,\mathrm L$. Il residuo è negativo perché la lettura è più bassa della previsione.

Con incertezza $0{,}3\,\mathrm L$ la lettura è $8{,}8\pm0{,}3\,\mathrm L$ e il suo intervallo va da $8{,}5$ a $9{,}1\,\mathrm L$. Il valore previsto, $9\,\mathrm L$, è dentro l'intervallo, quindi la misura è in accordo con il modello.

La verifica su un singolo punto controlla quella sola osservazione. Confrontando i residui di tutti i punti del grafico si stabilisce se gli scarti hanno un andamento riconoscibile.
:::

:::osservazione{#dominio titolo="Prevedere all'interno e all'esterno dei dati"}
Le ascisse delle misure vanno da un valore minimo a un valore massimo.

- Un'**interpolazione** è una previsione del modello per un'ascissa compresa fra quelle osservate.
- Un'**estrapolazione** è una previsione per un'ascissa esterna a quell'intervallo. Essa è attendibile soltanto se il fenomeno segue la stessa legge anche fuori dalle misure.

Per esempio, un modello di riempimento continuo descrive il volume finché nel recipiente c'è spazio. Con $V=4+3t$ e capacità $16\,\mathrm L$ la retta raggiunge il limite a $t=4\,\mathrm{min}$, quindi il modello si usa per $t$ fra $0$ e $4\,\mathrm{min}$.
:::

:::esempio{titolo="Una tabella separa pendenza e rapporto"}
Si misura una forza $F$ in diverse posizioni $x$ e si considerano esatti i numeri della tabella. La terza colonna riporta il rapporto fra forza e posizione.

| x (cm) | F (N) | F/x (N/cm) |
| ---: | ---: | ---: |
| 1 | 7 | 7 |
| 2 | 11 | 5,50 |
| 4 | 19 | 4,75 |
| 5 | 23 | 4,60 |

Le posizioni sono distanziate in modo irregolare, perché da $2$ a $4\,\mathrm{cm}$ il passo è doppio. Perciò la pendenza si controlla dividendo ogni aumento di forza per il corrispondente aumento di posizione.

- Dal primo al secondo punto: $\dfrac{11-7}{2-1}=\dfrac41=4\,\mathrm{N/cm}$.
- Dal secondo al terzo punto: $\dfrac{19-11}{4-2}=\dfrac82=4\,\mathrm{N/cm}$.
- Dal terzo al quarto punto: $\dfrac{23-19}{5-4}=\dfrac41=4\,\mathrm{N/cm}$.

I tre rapporti fra incrementi valgono tutti $4\,\mathrm{N/cm}$, quindi i punti sono **allineati**, cioè appartengono a una stessa retta di pendenza $m=4\,\mathrm{N/cm}$. Una relazione che ha per grafico una retta si dice **lineare**. I valori della terza colonna sono diversi fra loro, quindi la relazione non è una proporzionalità diretta.

Dalla prima riga si ricava l'intercetta $q=7-4\cdot1=3\,\mathrm N$. Il modello è $F=4x+3$. A $3\,\mathrm{cm}$, fra due ascisse osservate, il modello prevede $4\cdot3+3=15\,\mathrm N$ e questa previsione è un'interpolazione. Prevedere $4\cdot7+3=31\,\mathrm N$ a $7\,\mathrm{cm}$ sarebbe un'estrapolazione e richiederebbe di controllare che la relazione resti lineare oltre le misure.
:::

::grafico{f="4*x+3" punti="1,7,pieno;2,11,pieno;3,15,vuoto;4,19,pieno;5,23,pieno" xmin=0 xmax=6 ymin=0 ymax=27 nomi="x (cm),F (N)" titolo="Quattro punti sono misurati. Il punto vuoto a 3 cm rappresenta l'interpolazione a 15 N."}

:::esempio{titolo="L'andamento dei residui suggerisce quale parametro rivedere"}
Per un modello $V=3t+2$, con volume in litri e tempo in minuti, si trovano letture di $6$, $14$ e $22\,\mathrm L$ a $t=1$, $3$ e $5\,\mathrm{min}$.

- A $t=1$ la previsione è $3\cdot1+2=5\,\mathrm L$ e il residuo è $6-5=1\,\mathrm L$.
- A $t=3$ la previsione è $3\cdot3+2=11\,\mathrm L$ e il residuo è $14-11=3\,\mathrm L$.
- A $t=5$ la previsione è $3\cdot5+2=17\,\mathrm L$ e il residuo è $22-17=5\,\mathrm L$.

I residui $1$, $3$ e $5\,\mathrm L$ crescono con il tempo. Aggiungere o sottrarre una quantità fissa a tutte le previsioni cambierebbe i tre residui della stessa quantità e lascerebbe quindi invariata la differenza di $2\,\mathrm L$ fra un residuo e il successivo. Le misure crescono di $14-6=8$ litri ogni due minuti, cioè di $\dfrac82=4\,\mathrm{L/min}$, mentre il modello ha pendenza $3\,\mathrm{L/min}$.

Se si assume ancora un modello affine, si mantiene l'intercetta a due litri e si aumenta la pendenza da tre a quattro. Il modello $V=4t+2$ dà $6$, $14$ e $22\,\mathrm L$ e riproduce tutte e tre le letture.

Il caso è diverso da quello di residui tutti uguali, nel quale si rivede l'intercetta. Residui tutti uguali potrebbero dipendere da una **tara**, cioè da una quantità fissa che entra in ogni lettura, come il peso del contenitore vuoto su una bilancia. Con dati reali, prima di cambiare il modello si confronta la grandezza dei residui con la precisione delle letture.
:::

## Dipendenze dal quadrato

:::osservazione{#quadratica titolo="Fattori di scala"}
L'area di un quadrato di lato $x$ è $x^2$, cioè $x\cdot x$. Con lato $1$, $2$, $3$ e $4\,\mathrm{cm}$ l'area vale $1$, $4$, $9$ e $16\,\mathrm{cm^2}$. Quando il lato raddoppia da $2$ a $4\,\mathrm{cm}$, l'area passa da $4$ a $16\,\mathrm{cm^2}$ e quindi viene moltiplicata per quattro. Il numero per cui viene moltiplicata una grandezza si chiama **fattore di scala**.

- Quando $y=cx^2$ e $c>0$, raddoppiare $x>0$ moltiplica $y$ per quattro, perché $c(2x)^2=4cx^2$. Questo caso si riconosce dal rapporto $\dfrac{y}{x^2}$, che è costante e vale $c$. Il grafico di $y=cx^2$ è una curva chiamata **parabola**.
- Quando $y=\dfrac{c}{x^2}$, legge detta **inverso quadratico**, lo stesso raddoppio divide $y$ per quattro, perché $\dfrac{c}{(2x)^2}=\dfrac14\cdot\dfrac{c}{x^2}$. Questo caso si riconosce dal prodotto $yx^2$, che è costante e vale $c$.

L'area del quadrato è un esempio del primo caso, con $c=1$. Se il lato aumenta da $x$ a $x+1$, l'aumento di area è
$$
(x+1)^2-x^2=(x+1)(x+1)-x^2=x^2+2x+1-x^2=2x+1.
$$
L'aumento dipende da $x$. In una relazione affine, invece, incrementi uguali dell'ascissa danno sempre lo stesso aumento verticale.
:::

::grafico{f="x^2" xmin=0 xmax=4 ymin=0 ymax=16 nomi="l (cm),A (cm²)" punti="1,1,pieno;2,4,pieno;3,9,pieno" titolo="Aumenti uguali del lato producono aumenti di area diversi"}

:::esempio{titolo="Leggere una legge trasformando l'ascissa"}
Per la legge $y=2x^2$ si definisce una nuova grandezza $u=x^2$ e si disegna $y$ in funzione di $u$.

La legge diventa $y=2u$, che è una proporzionalità diretta. Il nuovo grafico è una retta per l'origine e la sua pendenza è il coefficiente $2$ della legge.

Le unità dell'asse orizzontale cambiano. Se $x$ è in centimetri, $u$ è in centimetri quadrati. Il grafico trasformato serve a controllare il modello, purché sui nuovi assi siano scritte la grandezza $u=x^2$ e la sua unità. Per una legge $y=\dfrac{c}{x^2}$ la grandezza da usare in ascissa è $u=\dfrac{1}{x^2}$, perché allora $y=cu$.
:::

:::esempio{titolo="Lo stesso lato controlla area e perimetro in modo diverso"}
Una piastrella quadrata ha lato $\ell$. Il perimetro è $4\ell$ e l'area è $\ell^2$.

- Con $\ell=4\,\mathrm{cm}$ il perimetro è $4\cdot4=16\,\mathrm{cm}$ e l'area è $4^2=16\,\mathrm{cm^2}$.
- Se si triplica il lato, $\ell=12\,\mathrm{cm}$. Il perimetro diventa $4\cdot12=48\,\mathrm{cm}$ e l'area diventa $12^2=144\,\mathrm{cm^2}$.

Il perimetro è stato moltiplicato per $3$ e l'area per $\dfrac{144}{16}=9$, cioè per $3^2$. Il coefficiente quattro nella legge del perimetro conta i lati. L'esponente due (il numero piccolo in alto) nella legge dell'area indica che si moltiplicano due lunghezze, entrambe triplicate.

Il rapporto fra area e perimetro ha come unità $\dfrac{\mathrm{cm^2}}{\mathrm{cm}}=\mathrm{cm}$, quindi è una lunghezza. Vale $\dfrac{16}{16}=1\,\mathrm{cm}$ per il quadrato piccolo e $\dfrac{144}{48}=3\,\mathrm{cm}$ per il grande.

Si cerca ora una piastrella di area doppia rispetto a quella piccola, cioè di $32\,\mathrm{cm^2}$. Il lato deve soddisfare $\ell^2=32\,\mathrm{cm^2}$. La radice quadrata di $32$, scritta $\sqrt{32}$, è il numero positivo che ha per quadrato $32$. Poiché $32=16\cdot2$, si ottiene
$$
\ell=\sqrt{32}=\sqrt{16}\cdot\sqrt2=4\sqrt2\,\mathrm{cm}\simeq5{,}66\,\mathrm{cm}.
$$
Sul grafico dell'area si legge l'ascissa del punto in cui la curva incontra la retta orizzontale di altezza $32\,\mathrm{cm^2}$. Un lato di otto centimetri produrrebbe invece un'area di $64\,\mathrm{cm^2}$, che è il quadruplo di $16\,\mathrm{cm^2}$. Il rapporto fra le aree è il quadrato del rapporto fra i lati. Per passare dal rapporto fra le aree al rapporto fra i lati si prende la radice positiva.
:::

::grafico{f="x^2;32" punti="4,16,pieno;5.65685425,32,pieno" segmenti="5.65685425,0,5.65685425,32" xmin=0 xmax=8 ymin=0 ymax=65 nomi="l (cm),A (cm²)" titolo="Aumentare l'area da 16 cm² a 32 cm² richiede un lato lungo circa 5,66 cm."}

:::esempio{titolo="Pendenze su tratti della stessa larghezza"}
Nel modello $A=\ell^2$ per un quadrato si confrontano due aumenti del lato, entrambi di un centimetro.

- Passare da $1$ a $2\,\mathrm{cm}$ aumenta l'area di $4-1=3\,\mathrm{cm^2}$.
- Passare da $3$ a $4\,\mathrm{cm}$ aumenta l'area di $16-9=7\,\mathrm{cm^2}$.

Allungando di $1\,\mathrm{cm}$ il lato di un quadrato si aggiungono due strisce lunghe quanto il lato e larghe $1\,\mathrm{cm}$, più un quadratino di lato $1\,\mathrm{cm}$ nell'angolo. Il secondo aumento è maggiore perché le due strisce sono più lunghe. Le pendenze medie si misurano in $\mathrm{cm^2/cm}$ e valgono numericamente tre e sette.

In una relazione affine i due incrementi darebbero pendenze uguali. Nel grafico che rappresenta l'area in funzione di $u=\ell^2$, le ascisse dei lati $1$, $2$, $3$ e $4\,\mathrm{cm}$ diventano $1$, $4$, $9$ e $16\,\mathrm{cm^2}$. Ora anche gli incrementi orizzontali sono $4-1=3$ e $16-9=7$, quindi le pendenze valgono $\dfrac33=1$ e $\dfrac77=1$. La legge è diventata lineare perché sull'asse orizzontale si è messo $\ell^2$ al posto di $\ell$.
:::
