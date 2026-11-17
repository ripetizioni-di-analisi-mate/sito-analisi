---
titolo: "Proporzionalità e grafici"
sommario: "Lettura di tabelle, scale e grafici. Modelli diretti, inversi, affini e quadratici."
---

Le coppie di dati sperimentali collegano il valore di una grandezza a quello di un'altra. Un grafico permette di vedere la relazione, mentre un modello ne rende esplicita la legge e il campo di applicazione.

## Assi e scale

:::definizione{#assi titolo="Associare coordinate e grandezze"}
Un punto $(x;y)$ rappresenta una coppia. La coordinata $x$ si legge sull'asse orizzontale, quella $y$ sull'asse verticale. Occorre indicare quale grandezza e quale unità corrispondano a ogni asse. Una distanza di due quadretti può rappresentare $4\,\mathrm{cm}$ lungo un asse e $10\,\mathrm N$ lungo l'altro. Per confrontare in modo quantitativo due punti si usano i valori letti sulle scale. L'angolo che la linea forma sulla carta dipende dalla scelta grafica delle due scale.
:::

:::esempio{#unita-pendenza titolo="Dai quadretti alle grandezze"}
Nel grafico di una forza $F$ rispetto a una lunghezza $l$, ogni quadretto vale $2\,\mathrm{cm}$ in orizzontale e $5\,\mathrm N$ in verticale. Su una retta, avanzare di due quadretti e salire di tre significa $\Delta l=4\,\mathrm{cm}$ e $\Delta F=15\,\mathrm N$. La pendenza è $\dfrac{15}{4}\,\mathrm{N/cm}$. Il rapporto fra i quadretti, $\dfrac32$, descrive l'inclinazione sulla carta e va trasformato usando le scale.
:::

::grafico{f="15*x/4" xmin=0 xmax=6 ymin=0 ymax=24 punti="0,0,pieno,P;4,15,pieno,Q" segmenti="0,0,4,0;4,0,4,15" nomi="l (cm),F (N)" titolo="Il rapporto fra le differenze di coordinate vale 15 N divisi per 4 cm"}

:::esempio{titolo="Due scale verticali per gli stessi dati"}
Un dinamometro indica $18\,\mathrm N$ all'istante $1\,\mathrm s$ e $20\,\mathrm N$ all'istante $5\,\mathrm s$. In un grafico che parte da $17\,\mathrm N$, il segmento fra le letture si nota più facilmente. In un grafico che parte da zero può apparire quasi orizzontale. In entrambi i disegni la pendenza media fra i due punti è
$$
\dfrac{20-18}{5-1}\,\mathrm{N/s}=0{,}50\,\mathrm{N/s}.
$$
L'origine della scala cambia l'aspetto della figura. La variazione fisica della forza si ottiene sottraendo i valori alle estremità e quindi rimane di due newton. Se si scambiano gli assi, il nuovo rapporto diventa $\dfrac42\,\mathrm{s/N}=2\,\mathrm{s/N}$. Le due pendenze hanno significati diversi perché in una si misura l'aumento medio di forza per secondo e nell'altra il tempo per newton di aumento fra le letture.
:::

::grafico{segmenti="1,18,5,20" punti="1,18,pieno,A;5,20,pieno,B" xmin=0 xmax=6 ymin=17 ymax=22 nomi="t (s),F (N)" titolo="La forza aumenta di 2 N fra 1 s e 5 s. La scala verticale parte da 17 N."}

## Proporzionalità diretta

:::definizione{#diretta titolo="Rapporto costante"}
In una **proporzionalità diretta** vale $y=kx$, dove $k$ è un coefficiente costante. Per $x\neq0$ il rapporto $y/x$ vale $k$. Le unità di $k$ sono quelle di $y$ divise per quelle di $x$. Quando l'origine appartiene al dominio, il modello dà $y=0$ in corrispondenza di $x=0$. Se si moltiplica $x$ per un fattore, anche $y$ viene moltiplicata per quel fattore. Nel caso di una raccolta d'acqua a portata costante, il doppio del tempo dall'inizio dà il doppio del volume raccolto.
:::

::grafico{f="3*x" xmin=0 xmax=4 ymin=0 ymax=12 nomi="t (min),V (L)" punti="1,3,pieno,A;2,6,pieno,B" titolo="Con portata 3 L/min, raddoppiare il tempo raddoppia il volume raccolto"}

:::esempio{#diretta-inversa titolo="Dal volume al tempo"}
Assumiamo $V=3t$, con $V$ in litri e $t$ in minuti. Per ottenere $7{,}5\,\mathrm L$ occorrono $\dfrac{7{,}5}{3}=2{,}5\,\mathrm{min}$. La divisione è necessaria perché si cerca $t$, il fattore moltiplicato per tre. Sul grafico si parte da $7{,}5$ in ordinata, si raggiunge la retta e si legge l'ascissa. Sostituendo $2{,}5$ nella legge si ritrova il volume richiesto.
:::

:::esempio{titolo="Cambiare unità conserva la legge fisica"}
Una pompa eroga $1{,}2\,\mathrm L$ ogni $30\,\mathrm s$. In litri e secondi, il coefficiente della proporzionalità è $\dfrac{1{,}2}{30}\,\mathrm{L/s}=0{,}04\,\mathrm{L/s}$. Se si registra il volume in millilitri e il tempo in minuti, il coefficiente vale $2400\,\mathrm{mL/min}$, perché in un minuto la pompa eroga due volte $1200\,\mathrm{mL}$. In $90\,\mathrm s$ il primo modello dà $0{,}04\cdot90=3{,}6\,\mathrm L$. Il secondo, usando $1{,}5\,\mathrm{min}$, dà $2400\cdot1{,}5=3600\,\mathrm{mL}$. Le due letture descrivono lo stesso volume. Usare il coefficiente in litri al secondo con un tempo espresso in minuti lascerebbe nelle unità un rapporto di tempi che deve ancora essere convertito.

Se il recipiente contiene già $2\,\mathrm L$ prima che la pompa inizi, la proporzionalità riguarda il volume aggiunto. Il volume totale ha invece valore iniziale diverso da zero. In un esperimento, la domanda deve dire quale dei due volumi si misura.
:::

## Proporzionalità inversa

:::definizione{#inversa titolo="Prodotto costante"}
Due grandezze positive sono in **proporzionalità inversa** se $xy=c$ con $c>0$ costante. La legge esplicita è $y=\dfrac{c}{x}$ con $x>0$. Duplicare la prima grandezza dimezza la seconda, perché il prodotto deve restare uguale. Se si distribuiscono $12\,\mathrm{cm}^3$ di un materiale in uno strato di spessore uniforme, un'area di $2\,\mathrm{cm}^2$ richiede $6\,\mathrm{cm}$ di spessore e un'area di $4\,\mathrm{cm}^2$ ne richiede $3\,\mathrm{cm}$. Nel grafico il modello scende e il rapporto $y/x$ varia.
:::

::grafico{f="12/x" xmin=1 xmax=7 ymin=0 ymax=13 nomi="A (cm²),h (cm)" punti="2,6,pieno,A;4,3,pieno,B" titolo="Raddoppiando l'area lo spessore si dimezza. In entrambi i punti il volume è 12 cm³"}

:::attenzione{#calo-non-inverso titolo="Una diminuzione da sola"}
In $y=12-2x$, passare da $x=2$ a $x=4$ porta $y$ da $8$ a $4$. In questi due punti il prodotto vale $16$, ma in $x=3$ vale $18$. Due osservazioni possono coincidere con più modelli. Per distinguere una discesa a pendenza costante da una proporzionalità inversa, si controllano le previsioni anche in altri punti, oppure si parte dalla legge fisica del fenomeno.
:::

:::esempio{titolo="La variazione percentuale si ricava dal fattore reciproco"}
Consideriamo un percorso di $120\,\mathrm{km}$ fatto a velocità costante. Con velocità $60\,\mathrm{km/h}$ il tempo è $2\,\mathrm h$. Aumentando la velocità del $25\%$ si passa a $75\,\mathrm{km/h}$. Poiché distanza uguale significa $vt=120\,\mathrm{km}$, il nuovo tempo è $\dfrac{120}{75}\,\mathrm h=1{,}6\,\mathrm h$. È l'$80\%$ del tempo precedente, quindi il tempo diminuisce del $20\%$. Una diminuzione del $25\%$ darebbe $1{,}5\,\mathrm h$, che moltiplicato per la nuova velocità corrisponde a soli $112{,}5\,\mathrm{km}$.

Dal rapporto fra due velocità si ottiene direttamente il rapporto inverso fra i tempi. I numeri percentuali delle due variazioni coincidono soltanto se il valore iniziale e quello finale coincidono. In un viaggio con una sosta fissa di mezz'ora, il prodotto fra velocità e tempo di marcia resta la distanza. Il tempo totale include però anche la sosta e diventa la somma di un termine inverso e di una costante.
:::

::grafico{f="120/x;120/x+0.5" xmin=35 xmax=93 ymin=0 ymax=4 punti="60,2,pieno;75,1.6,pieno;60,2.5,pieno;75,2.1,pieno" legenda="\text{tempo in marcia};\text{con sosta}" nomi="v (km/h),t (h)" titolo="A 75 km/h si viaggia per 1,6 h. Una sosta fissa aggiunge 0,5 h."}

:::esempio{titolo="Progettare una misura che separi due modelli"}
Le leggi $y=12-2x$ e $y=\dfrac{16}{x}$ coincidono per $x=2$ e $x=4$. Una misura più precisa ripetuta in uno di quei punti darebbe ancora la stessa previsione per entrambi i modelli. Per distinguerli si può scegliere $x=3$, dove le previsioni sono $6$ e $\dfrac{16}{3}\simeq5{,}33$. Supponiamo che la nuova lettura sia $5{,}5\pm0{,}4$. L'intervallo va da $5{,}1$ a $5{,}9$, quindi contiene la previsione inversa ed esclude quella affine.

Se l'incertezza fosse $0{,}6$, l'intervallo diventerebbe da $4{,}9$ a $6{,}1$ e comprenderebbe entrambi i valori. Per discriminare le due leggi servono dunque un'ascissa in cui le previsioni differiscono e una misura con precisione adeguata. L'accordo con un intervallo non prova da solo che la relazione valga per tutte le ascisse.
:::

## Relazioni affini

:::definizione{#affine titolo="Pendenza e valore iniziale"}
Una **relazione affine** si scrive $y=mx+q$. Il coefficiente $m$ misura la variazione di $y$ per aumento unitario di $x$. L'intercetta $q$ è il valore dato dal modello in $x=0$. Se lo zero è osservabile, l'intercetta può rappresentare il dato iniziale. Due punti con ascisse diverse bastano per trovare $m$ e $q$ nel modello affine. Invece il rapporto $y/x$ dipende da $x$ se $q$ è diverso da zero.
:::

::::teorema{#due-punti titolo="Ricavare pendenza e intercetta"}
Per due punti della stessa retta con $x_1\neq x_2$, vale
$$
m=\frac{y_2-y_1}{x_2-x_1},\qquad q=y_1-mx_1.
$$

:::dimostrazione
Si scrivono $y_1=mx_1+q$ e $y_2=mx_2+q$. Sottraendo nel medesimo ordine le coordinate, l'intercetta si cancella e rimane $y_2-y_1=m(x_2-x_1)$. Si può dividere perché la differenza delle ascisse è diversa da zero. Sostituendo $m$ nella prima uguaglianza si ricava $q$.
:::
::::

::grafico{f="2*x;2*x+4" xmin=0 xmax=4 ymin=0 ymax=13 nomi="t (min),V (L)" legenda="\text{recipiente A};\text{recipiente B}" punti="0,0,pieno;0,4,pieno;3,6,pieno;3,10,pieno" titolo="I recipienti iniziano con volumi diversi e si riempiono alla stessa portata"}

:::esempio{#confronti-modelli titolo="L'incontro di due rette"}
Due recipienti contengono $V_A=2t+4$ e $V_B=4t$, con volumi in litri e tempi in minuti. Il primo parte con un vantaggio di quattro litri, mentre il secondo raccoglie due litri al minuto in più. Dopo $\dfrac42=2\,\mathrm{min}$ hanno lo stesso volume, $8\,\mathrm L$. Scrivere $2t+4=4t$ esprime la condizione di intersezione. Conta la differenza delle pendenze perché entrambe le quantità cambiano nel tempo.
:::

::grafico{f="2*x+4;4*x" xmin=0 xmax=4 ymin=0 ymax=16 punti="2,8,pieno,P" nomi="t (min),V (L)" legenda="A;B" titolo="Le rette si incontrano quando i volumi sono uguali per lo stesso istante"}

:::esempio{titolo="Una retta incontra un limite di capacità"}
Un recipiente contiene $4\,\mathrm L$ e riceve $3\,\mathrm{L/min}$. La capacità è $16\,\mathrm L$ e, una volta pieno, il liquido in ingresso trabocca. Prima di quel momento il volume $V$ in litri segue $V=4+3t$ con $t$ in minuti. Da $4+3t=16$ si ottiene $t=4\,\mathrm{min}$. A partire dal quarto minuto il volume contenuto rimane $16\,\mathrm L$ in questa descrizione. Dopo $6\,\mathrm{min}$ sono arrivati $18\,\mathrm L$ dalla pompa, ma solo $12\,\mathrm L$ si sono aggiunti ai quattro iniziali. Gli altri $6\,\mathrm L$ sono fuoriusciti.

Il tratto iniziale e quello successivo descrivono lo stesso recipiente in condizioni diverse. Il punto al quarto minuto è comune ai due tratti. La pendenza si legge separatamente prima e dopo il raggiungimento della capacità. Il volume della pompa continua a crescere secondo la portata assegnata anche quando il livello nel recipiente ha smesso di salire.
:::

::grafico{segmenti="0,4,4,16;4,16,6,16" punti="0,4,pieno;4,16,pieno;6,16,pieno" xmin=0 xmax=6.4 ymin=0 ymax=21 nomi="t (min),V (L)" titolo="Dopo 4 min il volume contenuto è quello massimo. I due tratti hanno pendenze diverse."}

## Leggere una tabella

:::osservazione{#tabelle titolo="Scegliere una relazione compatibile con i dati"}
Si verifica un modello diretto calcolando $y/x$ quando $x$ è non nullo, un modello inverso calcolando $xy$ e un modello affine confrontando i rapporti fra differenze successive. Se le ascisse sono equispaziate, per quest'ultimo bastano differenze verticali uguali. Quando i dati sperimentali hanno incertezze, rapporti non esattamente uguali possono rappresentare la stessa legge. Si valuta quindi la dimensione degli scarti rispetto alle incertezze disponibili.
:::

:::esempio{#residui titolo="Uno scarto rispetto al modello"}
Il volume previsto da $V=2t+1$ a $t=4\,\mathrm{min}$ è $9\,\mathrm L$. Una misura di $8{,}8\,\mathrm L$ ha **residuo** $8{,}8-9=-0{,}2\,\mathrm L$: la lettura è più bassa della previsione. Con incertezza $0{,}3\,\mathrm L$, il valore previsto è dentro l'intervallo associato alla lettura. La verifica su un singolo punto controlla quell'osservazione, mentre un confronto su tutto il grafico stabilisce se gli scarti hanno un andamento riconoscibile.
:::

:::osservazione{#dominio titolo="Prevedere all'interno e all'esterno dei dati"}
Un modello usato fra le ascisse osservate fornisce un'interpolazione. Usato oltre quell'intervallo dà una estrapolazione, che richiede di supporre che il meccanismo resti valido. Per esempio, un modello di riempimento continuo in un recipiente descrive il volume finché c'è spazio. Dopo la capacità massima il comportamento cambia. Si può calcolare l'istante in cui la retta raggiunge quel limite per capire fino a dove usarla.
:::

:::esempio{titolo="Una tabella separa pendenza e rapporto"}
Misuriamo una forza $F$ a diverse posizioni $x$ e assumiamo che i numeri della tabella siano esatti. Le posizioni sono distanziate in modo irregolare. Perciò si controlla la pendenza dividendo ogni variazione verticale per il corrispondente intervallo orizzontale.

| x (cm) | F (N) | F/x (N/cm) |
| ---: | ---: | ---: |
| 1 | 7 | 7 |
| 2 | 11 | 5,50 |
| 4 | 19 | 4,75 |
| 5 | 23 | 4,60 |

Dal primo al secondo punto la forza aumenta di $4\,\mathrm N$ in $1\,\mathrm{cm}$. Dal secondo al terzo aumenta di $8\,\mathrm N$ in $2\,\mathrm{cm}$. Dal terzo al quarto cresce di $4\,\mathrm N$ in $1\,\mathrm{cm}$. Tutti e tre i rapporti fra incrementi valgono $4\,\mathrm{N/cm}$, quindi i punti sono allineati. La terza colonna varia e quindi esclude la proporzionalità diretta. Dalla prima riga si ricava l'intercetta $7-4\cdot1=3\,\mathrm N$. Il modello prevede $15\,\mathrm N$ a $3\,\mathrm{cm}$, fra due ascisse osservate. Prevedere $31\,\mathrm N$ a $7\,\mathrm{cm}$ sarebbe un'estrapolazione e richiederebbe di controllare che la relazione resti lineare oltre le misure.
:::

::grafico{f="4*x+3" punti="1,7,pieno;2,11,pieno;3,15,vuoto;4,19,pieno;5,23,pieno" xmin=0 xmax=6 ymin=0 ymax=27 nomi="x (cm),F (N)" titolo="Quattro punti sono misurati. Il punto vuoto a 3 cm rappresenta l'interpolazione a 15 N."}

:::esempio{titolo="L'andamento dei residui suggerisce quale parametro rivedere"}
Per un modello $V=3t+2$, con volume in litri e tempo in minuti, si trovano letture di $6$, $14$ e $22\,\mathrm L$ a $t=1$, $3$ e $5\,\mathrm{min}$. Le previsioni sono $5$, $11$ e $17\,\mathrm L$, quindi i residui sono $1$, $3$ e $5\,\mathrm L$. Sottrarre o aggiungere una quantità fissa a tutte le previsioni lascerebbe la differenza fra questi scarti. Le misure crescono invece di otto litri ogni due minuti, pari a $4\,\mathrm{L/min}$.

Se si assume ancora un modello affine, mantenere l'intercetta a due litri e aumentare la pendenza da tre a quattro riproduce tutte e tre le letture. Il caso è diverso da quello di residui tutti uguali, che potrebbe dipendere da una tara. Con dati reali, prima di cambiare il modello occorre confrontare l'entità dello scarto con la precisione delle letture.
:::

## Dipendenze dal quadrato

:::osservazione{#quadratica titolo="Fattori di scala"}
Quando $y=cx^2$ e $c>0$, raddoppiare $x>0$ moltiplica $y$ per quattro. Vale invece l'inverso quadratico $y=c/x^2$ quando lo stesso raddoppio divide $y$ per quattro. Per riconoscere i due casi si controllano rispettivamente il rapporto $y/x^2$ e il prodotto $yx^2$. L'area del quadrato fornisce un esempio diretto. Per un incremento di lunghezza da $x$ a $x+1$ la nuova area aumenta di $2x+1$, mentre in una relazione affine incrementi uguali dell'ascissa danno sempre lo stesso aumento verticale.
:::

::grafico{f="x^2" xmin=0 xmax=4 ymin=0 ymax=16 nomi="l (cm),A (cm²)" punti="1,1,pieno;2,4,pieno;3,9,pieno" titolo="Aumenti uguali del lato producono aumenti di area diversi"}

:::esempio{titolo="Leggere una legge trasformando l'ascissa"}
Se $y=2x^2$, si definisce $u=x^2$ e si disegna $y$ in funzione di $u$. La legge diventa $y=2u$, una retta che permette di leggere il coefficiente. Le unità dell'asse cambiano: se $x$ è in centimetri, $u$ è in centimetri quadrati. Il grafico trasformato può aiutare a controllare il modello, purché i nuovi assi siano dichiarati.
:::

:::esempio{titolo="Lo stesso lato controlla area e perimetro in modo diverso"}
Una piastrella quadrata ha lato $4\,\mathrm{cm}$, area $16\,\mathrm{cm^2}$ e perimetro $16\,\mathrm{cm}$. Se si triplica il lato, il perimetro diventa $48\,\mathrm{cm}$ mentre l'area diventa $144\,\mathrm{cm^2}$. Il coefficiente quattro nella legge del perimetro conta i lati. La potenza due nella legge dell'area indica che si moltiplicano due lunghezze, entrambe triplicate. Il rapporto fra area e perimetro ha dimensione di una lunghezza. Vale $1\,\mathrm{cm}$ per il quadrato piccolo e $3\,\mathrm{cm}$ per il grande.

Supponiamo di volere una piastrella di area doppia rispetto a quella piccola. Il lato positivo deve soddisfare $\ell^2=32\,\mathrm{cm^2}$ e quindi misura $4\sqrt2\,\mathrm{cm}$. Sul grafico dell'area si legge l'ascissa all'intersezione con la quota $32\,\mathrm{cm^2}$. Un lato di otto centimetri produrrebbe invece un'area quadrupla. Il rapporto fra le aree esprime il quadrato del rapporto fra i lati e si inverte prendendo la radice positiva.
:::

::grafico{f="x^2;32" punti="4,16,pieno;5.65685425,32,pieno" segmenti="5.65685425,0,5.65685425,32" xmin=0 xmax=8 ymin=0 ymax=65 nomi="l (cm),A (cm²)" titolo="Aumentare l'area da 16 cm² a 32 cm² richiede un lato lungo circa 5,66 cm."}

:::esempio{titolo="Pendenze su tratti della stessa larghezza"}
Nel modello $A=\ell^2$ per un quadrato, passare da $1$ a $2\,\mathrm{cm}$ aumenta l'area di $4-1=3\,\mathrm{cm^2}$. Passare da $3$ a $4\,\mathrm{cm}$ la fa crescere di $16-9=7\,\mathrm{cm^2}$. Gli aumenti di lato sono entrambi di un centimetro. Il secondo aumento di area è maggiore perché l'incremento aggiunge due strisce più lunghe oltre al piccolo quadrato nell'angolo. Le pendenze medie si misurano in $\mathrm{cm^2/cm}$ e valgono numericamente tre e sette.

In una relazione affine i due incrementi darebbero pendenze uguali. Nel grafico che rappresenta l'area in funzione di $\ell^2$, invece, le ascisse diventano $1$, $4$, $9$ e $16\,\mathrm{cm^2}$. Ora anche gli incrementi orizzontali sono tre e sette e ogni pendenza è uno. È la trasformazione della variabile orizzontale a rendere lineare la legge.
:::
