---
titolo: "Forze, peso, elasticità e attrito"
sommario: "Peso e massa, legge di Hooke, reazioni di contatto e attrito statico e dinamico."
---

## Interazioni e rappresentazione

:::definizione{#forza titolo="La forza come grandezza vettoriale"}
Una **forza** è una spinta o una trazione che un corpo esercita su un altro corpo. La mano che spinge una porta esercita una forza sulla porta. La Terra attira verso il basso un sasso lasciato cadere, quindi esercita una forza sul sasso. Ogni forza nasce da un'**interazione**, cioè dall'azione fra due corpi.

- La forza della mano sulla porta è una **forza di contatto**, perché esiste soltanto mentre la mano tocca la porta.
- La forza della Terra sul sasso è una **forza a distanza**, perché la Terra attira il sasso senza toccarlo. Il sasso la riceve anche nel vuoto, dove non c'è aria. Anche una calamita attira una graffetta senza toccarla.

La forza è una **grandezza vettoriale**, cioè una grandezza che si descrive con tre informazioni. Per questo si disegna con una freccia.

- Il **modulo** è il valore della forza, espresso da un numero con l'unità di misura. In un disegno in scala è la lunghezza della freccia. Se $1\,\mathrm{cm}$ di disegno rappresenta $4\,\mathrm N$, una forza di $12\,\mathrm N$ è una freccia lunga $3\,\mathrm{cm}$.
- La **direzione** è la retta lungo la quale la freccia è tracciata, per esempio orizzontale o verticale. Questa retta si chiama retta d'azione.
- Il **verso** è indicato dalla punta. Su una retta orizzontale i versi sono due, verso destra e verso sinistra.

Di ogni forza si dice anche quale corpo la riceve. Il disegno di un solo corpo con le frecce delle forze che riceve si chiama **diagramma delle forze**. La forza della mano sulla porta sta nel diagramma della porta. La forza della porta sulla mano sta nel diagramma della mano. Nel capitolo sull'equilibrio di un corpo rigido si userà la posizione della retta d'azione rispetto al perno, che è il punto attorno a cui il corpo ruota, come il cardine di una porta.

Il **newton**, di simbolo $\mathrm N$, è l'unità di misura della forza nel Sistema Internazionale (SI), l'insieme delle unità di misura usato nelle scienze, al quale appartengono anche il metro e il chilogrammo.

Il **dinamometro** è lo strumento che misura le forze. Contiene una molla, e a ogni allungamento della molla corrisponde un valore in newton segnato sulla scala. La corrispondenza vale nell'intervallo di misura dello strumento, cioè fra lo zero e l'ultimo valore della scala.

Quando le forze stanno tutte sulla stessa retta, si sceglie su quella retta un verso positivo. La retta con il verso scelto si chiama asse e si indica con una lettera, per esempio $x$. La **componente** di una forza lungo l'asse è il suo modulo con il segno $+$ se la forza punta nel verso positivo, e con il segno $-$ se punta nel verso opposto. La **risultante** è la forza che da sola equivale a tutte le forze che agiscono sul corpo. La sua componente è la somma delle componenti delle singole forze e si scrive $R_x$.
:::

:::esempio{titolo="Due trazioni sullo stesso anello"}
Due corde orizzontali tirano un anello. La prima tira verso destra con $8\,\mathrm N$, la seconda verso sinistra con $5\,\mathrm N$. Si prende verso destra come verso positivo dell'asse $x$. La prima forza punta nel verso positivo e ha componente $+8\,\mathrm N$. La seconda punta nel verso opposto e ha componente $-5\,\mathrm N$. La componente della risultante è la loro somma.
$$
R_x=8\,\mathrm N-5\,\mathrm N=3\,\mathrm N.
$$
Il segno positivo indica che la risultante punta verso destra. La somma dei moduli, $8\,\mathrm N+5\,\mathrm N=13\,\mathrm N$, è la risultante di due trazioni concordi, cioè con lo stesso verso. In un disegno in scala, la freccia verso destra ha lunghezza $8$ e quella verso sinistra lunghezza $5$ nelle stesse unità grafiche.
:::

::grafico{assi=0 uguale=1 vettori="0,0,8,0,8 N;0,0,-5,0,5 N" punti="0,0,pieno,O" xmin=-7 xmax=10 ymin=-1.5 ymax=1.5 titolo="Trazioni opposte applicate all'anello O, con lunghezze proporzionali ai moduli"}

:::esempio{titolo="Due forze perpendicolari"}
Una slitta riceve una forza orizzontale di componente $F_x=6\,\mathrm N$ e una forza verticale di componente $F_y=-8\,\mathrm N$. Le due frecce sono perpendicolari, cioè formano un angolo retto. Esse sono i cateti di un triangolo rettangolo e la risultante ne è l'ipotenusa. Per il teorema di Pitagora, il modulo della risultante è
$$
R=\sqrt{(6\,\mathrm N)^2+(-8\,\mathrm N)^2}=\sqrt{36+64}\,\mathrm N=\sqrt{100}\,\mathrm N=10\,\mathrm N.
$$
:::

:::esempio{titolo="Due carrelli e il confine del sistema"}
Due carrelli $A$ e $B$ sono collegati da un filo teso. Il filo ha massa trascurabile, cioè così piccola che il suo peso non si conta. Un traino esercita su $A$ una forza di $14\,\mathrm N$ verso destra. Il pavimento esercita resistenze di $2\,\mathrm N$ su $A$ e $3\,\mathrm N$ su $B$, entrambe verso sinistra. Il filo tira $A$ verso sinistra e $B$ verso destra con una forza dello stesso modulo $T$, che si chiama tensione. Si prende come positivo il verso del traino. Il carrello $A$ riceve $+14\,\mathrm N$ dal traino, $-2\,\mathrm N$ dal pavimento e $-T$ dal filo, mentre il carrello $B$ riceve $+T$ dal filo e $-3\,\mathrm N$ dal pavimento. I diagrammi delle forze dei due carrelli danno quindi

$$
R_{A,x}=(14-2)\,\mathrm N-T,\qquad
R_{B,x}=T-3\,\mathrm N.
$$

Il **sistema** è l'insieme dei corpi che si sceglie di studiare. Se il sistema è formato da entrambi i carrelli, le forze del filo sono **forze interne**, perché sono scambiate fra parti del sistema. Il traino e le resistenze del pavimento sono **forze esterne**, perché provengono da corpi che non fanno parte del sistema. Sommando le due risultanti, i termini $-T$ e $+T$ si annullano e resta la risultante delle forze esterne, $(14-2-3)\,\mathrm N=9\,\mathrm N$ verso destra. Per la risultante su un solo carrello serve invece il valore della tensione. Se un sensore misura $T=6\,\mathrm N$, si ottiene $R_{A,x}=12\,\mathrm N-6\,\mathrm N=6\,\mathrm N$ e $R_{B,x}=6\,\mathrm N-3\,\mathrm N=3\,\mathrm N$. Le due frecce di tensione agiscono su corpi distinti, quindi si sommano soltanto quando il confine del sistema comprende entrambi i corpi.
:::

## Peso e massa

:::definizione{#peso titolo="Il campo gravitazionale locale"}
La **massa** $m$ è la quantità di materia di un corpo. Si misura in chilogrammi, di simbolo $\mathrm{kg}$, e resta la stessa in qualunque luogo. Il **peso** è la forza gravitazionale con cui il pianeta attira il corpo nel luogo in cui si trova. Il peso si misura in newton. La sua direzione è verticale e il suo verso è verso il basso.

Il **campo gravitazionale** $g$ di un luogo è il peso di un chilogrammo in quel luogo. Si misura in $\mathrm{N/kg}$, che si legge «newton al chilogrammo». Vicino alla superficie della Terra vale circa $9{,}81\,\mathrm{N/kg}$. Il valore è *locale*, cioè riferito a un luogo. In una regione piccola rispetto al pianeta, $g$ è pressoché *uniforme*, cioè ha lo stesso valore in tutti i punti.

Se un chilogrammo pesa $g$ newton, $m$ chilogrammi pesano $m$ volte tanto. Il modulo del peso è perciò il prodotto della massa per il campo.
$$
P=mg.
$$
Per un corpo di massa $2\,\mathrm{kg}$, usando $g=10\,\mathrm{N/kg}$, si trova $P=2\,\mathrm{kg}\cdot10\,\mathrm{N/kg}=20\,\mathrm N$. Siccome $\mathrm{kg}\cdot\mathrm{N/kg}=\mathrm N$, il risultato del prodotto è una forza. Dalla stessa formula si ricavano la massa, $m=\dfrac{P}{g}$, e il campo, $g=\dfrac{P}{m}$. Un corpo che pesa $60\,\mathrm N$ dove $g=10\,\mathrm{N/kg}$ ha massa $\dfrac{60\,\mathrm N}{10\,\mathrm{N/kg}}=6\,\mathrm{kg}$.

Il valore $10\,\mathrm{N/kg}$ è un'approssimazione di $9{,}81\,\mathrm{N/kg}$ usata in molti esercizi. Nei conti si adotta il valore indicato dal testo o misurato.
:::

:::esempio{titolo="Stessa massa in due luoghi"}
Un campione, cioè un oggetto usato per una misura, ha massa $3\,\mathrm{kg}$. Sulla Terra, con $g=10\,\mathrm{N/kg}$, pesa $3\,\mathrm{kg}\cdot10\,\mathrm{N/kg}=30\,\mathrm N$. In un luogo dove $g=4\,\mathrm{N/kg}$, pesa $3\,\mathrm{kg}\cdot4\,\mathrm{N/kg}=12\,\mathrm N$. La massa è la stessa nei due luoghi, quindi il rapporto dei pesi è uguale al rapporto dei campi.
$$
\frac{12\,\mathrm N}{30\,\mathrm N}=\frac{2}{5},\qquad
\frac{4\,\mathrm{N/kg}}{10\,\mathrm{N/kg}}=\frac{2}{5}.
$$
Una bilancia a due piatti confronta i pesi di due corpi nello stesso luogo. Nel rapporto dei due pesi il campo $g$ compare sia al numeratore sia al denominatore e si semplifica, quindi la bilancia confronta le masse e dà lo stesso risultato in ogni luogo. Un dinamometro graduato in newton indica invece la forza che lo allunga.
:::

::grafico{f="10*x;4*x" nomi="m (kg),P (N)" punti="3,30,pieno,A;3,12,pieno,B" xmin=0 xmax=5 ymin=0 ymax=55 titolo="Peso in funzione della massa in due luoghi. Per 3 kg si leggono 30 N in A e 12 N in B"}

:::esempio{titolo="Stimare il campo con uno zero spostato"}
Il dinamometro di questo esempio, senza alcun carico, segna un valore $b$ diverso da zero, che si chiama scarto dello zero e si aggiunge a ogni misura. La lettura $P_\mathrm{lett}$ è quindi la somma del peso $gm$ e dello scarto.
$$
P_\mathrm{lett}=gm+b.
$$
Con masse di $0{,}50\,\mathrm{kg}$ e $1{,}50\,\mathrm{kg}$ sospese una per volta, si leggono rispettivamente $7\,\mathrm N$ e $17\,\mathrm N$. Lo scarto è lo stesso nelle due prove, quindi l'aumento della lettura è il peso della sola massa aggiunta. Il campo si ottiene dividendo la variazione di lettura per la massa aggiunta.

$$
g=\frac{17-7}{1{,}50-0{,}50}\,\mathrm{N/kg}=\frac{10}{1{,}00}\,\mathrm{N/kg}=10\,\mathrm{N/kg}.
$$

Nella prima prova il peso è $0{,}50\,\mathrm{kg}\cdot10\,\mathrm{N/kg}=5\,\mathrm N$. Lo scarto è la differenza fra lettura e peso, quindi $b=7\,\mathrm N-5\,\mathrm N=2\,\mathrm N$.

Nel grafico la lettura è una retta. La **pendenza** di una retta è l'aumento della grandezza sull'asse verticale per ogni unità in più sull'asse orizzontale. Qui la pendenza è $10\,\mathrm{N/kg}$ e misura il campo. L'**intercetta** è il valore che si legge per $m=0$. Qui è $2\,\mathrm N$ e misura lo scarto dello strumento. Dividendo la sola prima lettura per la massa si ottiene $\dfrac{7\,\mathrm N}{0{,}50\,\mathrm{kg}}=14\,\mathrm{N/kg}$, un valore che contiene sia il campo sia lo scarto.

::grafico{f="10*x+2;10*x" nomi="m (kg),P (N)" punti="0,2,pieno;0.5,7,pieno,A;1.5,17,pieno,B" legenda="\text{lettura};\text{peso}" xmin=0 xmax=2 ymin=0 ymax=24 titolo="Lo scarto di 2 N sposta la retta verso l'alto e lascia invariata la pendenza."}
:::

## Molle e legge di Hooke

::::teorema{#hooke titolo="Forza proporzionale alla deformazione"}
La **legge di Hooke** dà la forza che una molla tirata o compressa esercita su ciò che la deforma. Le grandezze che servono sono tre.

- La **lunghezza libera** $L_0$ è la lunghezza della molla quando nessuna forza la tira o la comprime. Si chiama anche lunghezza naturale o lunghezza a riposo.
- $L$ è la lunghezza della molla sotto carico, cioè mentre una forza la deforma.
- La **deformazione** è la differenza $x=L-L_0$. È positiva se la molla è allungata e negativa se è compressa.

La molla considerata è priva di precarico, cioè alla lunghezza libera non esercita alcuna forza.

Un'estremità della molla è fissa e l'altra è mobile. Si orienta l'asse nel verso in cui si muove l'estremità mobile quando la molla si allunga. Il **tratto elastico lineare** è l'intervallo di deformazioni in cui la forza è direttamente proporzionale alla deformazione, cioè raddoppia quando la deformazione raddoppia. In questo tratto la forza elastica sull'estremità mobile ha componente $F_{e,x}$ e modulo $F_e$ dati da
$$
F_{e,x}=-kx,\qquad F_e=k\lvert x\rvert,
$$
con $k>0$ in $\mathrm{N/m}$. Il pedice $e$ sta per elastica. Il simbolo $\lvert x\rvert$ è il valore assoluto di $x$, cioè il numero $x$ senza il segno. La costante $k$ si chiama **costante elastica** o **rigidezza** e dice quanti newton servono per deformare la molla di un metro.

Il segno meno indica che la forza ha verso opposto alla deformazione. Per $x>0$ la molla tira verso la lunghezza naturale. Per $x<0$ spinge verso la lunghezza naturale. Per questo la forza elastica si chiama anche forza di richiamo.

Dal modulo si ricavano la deformazione, $\lvert x\rvert=\dfrac{F_e}{k}$, e la costante, $k=\dfrac{F_e}{\lvert x\rvert}$. Una molla con $k=200\,\mathrm{N/m}$ tirata con $10\,\mathrm N$ si allunga di $\dfrac{10\,\mathrm N}{200\,\mathrm{N/m}}=0{,}05\,\mathrm m$.

La relazione è un modello sperimentale, cioè una legge ricavata dalle misure. Il suo intervallo di validità si determina per la molla esaminata. Oltre il **limite elastico** la molla, una volta lasciata libera, resta più lunga di prima e la legge non la descrive più. Una molla ideale è una molla di massa trascurabile che segue esattamente la legge.

:::dimostrazione
Le misure nel tratto lineare mostrano che il modulo della forza è direttamente proporzionale al modulo della deformazione. Il rapporto fra i due moduli è quindi una costante positiva $k$, e si ha $F_e=k\lvert x\rvert$.

Si è scelto $x$ positivo per l'allungamento. Se $x>0$, la molla tira l'estremità all'indietro, quindi la forza punta nel verso negativo e la sua componente è $-k\lvert x\rvert=-kx$. Se $x<0$, la molla spinge l'estremità in avanti, quindi la forza punta nel verso positivo e la sua componente è $+k\lvert x\rvert$. Poiché per $x<0$ vale $\lvert x\rvert=-x$, anche in questo caso la componente è $-kx$.
:::
::::

:::esempio{titolo="Allungamento, compressione e scala"}
Si consideri una molla con $L_0=12\,\mathrm{cm}$ e $k=100\,\mathrm{N/m}$. La costante è espressa in newton al metro, quindi la deformazione si esprime in metri prima del prodotto con $k$, sapendo che $1\,\mathrm{cm}=0{,}01\,\mathrm m$.

Portata a $15\,\mathrm{cm}$, la molla è allungata e ha deformazione $x=15\,\mathrm{cm}-12\,\mathrm{cm}=3\,\mathrm{cm}=0{,}03\,\mathrm m$. La componente della forza è
$$
F_{e,x}=-100\,\mathrm{N/m}\cdot0{,}03\,\mathrm m=-3\,\mathrm N.
$$
La molla tira nel verso negativo.

Portata a $10\,\mathrm{cm}$, è compressa e ha deformazione $x=10\,\mathrm{cm}-12\,\mathrm{cm}=-2\,\mathrm{cm}=-0{,}02\,\mathrm m$. La componente della forza è
$$
F_{e,x}=-100\,\mathrm{N/m}\cdot(-0{,}02\,\mathrm m)=+2\,\mathrm N.
$$
La molla spinge nel verso positivo.

Nel grafico la deformazione è in centimetri. Una costante di $100\,\mathrm{N/m}$ equivale a $1\,\mathrm N$ per ogni centimetro, perché un metro contiene $100$ centimetri.
:::

::grafico{f="-x" nomi="x (cm),Fₑ (N)" punti="-2,2,pieno,C;3,-3,pieno,A" xmin=-4 xmax=5 ymin=-5 ymax=5 titolo="Componente elastica con k uguale a 100 N/m. C rappresenta la compressione e A l'allungamento"}

:::osservazione{titolo="Due molle tese ai lati di un anello"}
Un anello è tirato verso sinistra da una molla di rigidezza $k_\mathrm s$ e verso destra da una di rigidezza $k_\mathrm d$. I pedici $\mathrm s$ e $\mathrm d$ stanno per sinistra e destra. Entrambe le molle sono allungate. Nella posizione di equilibrio l'anello è fermo e le due trazioni hanno lo stesso modulo $T_0$.

Si sposta l'anello di $u$ verso destra. La molla a sinistra si allunga di altri $u$, quindi la sua trazione aumenta di $k_\mathrm s u$. La molla a destra si accorcia di $u$, quindi la sua trazione diminuisce di $k_\mathrm d u$.

Per $T_0=6\,\mathrm N$, $k_\mathrm s=100\,\mathrm{N/m}$, $k_\mathrm d=300\,\mathrm{N/m}$ e $u=0{,}01\,\mathrm m$ i moduli delle due trazioni sono
$$
T_\mathrm s=6\,\mathrm N+100\,\mathrm{N/m}\cdot0{,}01\,\mathrm m=7\,\mathrm N,\qquad
T_\mathrm d=6\,\mathrm N-300\,\mathrm{N/m}\cdot0{,}01\,\mathrm m=3\,\mathrm N.
$$
Con verso positivo a destra, la componente della forza totale è $3\,\mathrm N-7\,\mathrm N=-4\,\mathrm N$. La risultante di $4\,\mathrm N$ punta verso sinistra, cioè verso la posizione iniziale.

Con le lettere, se entrambe le molle restano tese e nel tratto lineare, lo stesso conto dà

$$
F_x=(T_0-k_\mathrm d u)-(T_0+k_\mathrm s u)
=-(k_\mathrm s+k_\mathrm d)u.
$$

Le due rigidezze si sommano, come per due molle affiancate fra gli stessi supporti (molle in parallelo), che si allungano della stessa quantità $x$ e tirano nello stesso verso.

::grafico{curve="t,6+t,0,2;t,6-3*t,0,2" nomi="u (cm),T (N)" punti="0,6,pieno;1,7,pieno,A;1,3,pieno,B" legenda="T_\mathrm s;T_\mathrm d" xmin=0 xmax=2.35 ymin=0 ymax=9 titolo="Spostando l'anello, il tiro a sinistra cresce e il tiro a destra cala. A e B indicano i moduli dopo 1 cm."}
:::

## Confrontare e tarare molle

:::osservazione{#taratura titolo="Pendenza del grafico forza-allungamento"}
**Tarare** una molla significa ricavare dalle misure la sua costante $k$, e quando serve anche la lunghezza libera. Si misurano coppie di valori, allungamento e forza, e si riportano in un grafico con l'allungamento $x$ sull'asse orizzontale e il modulo $F$ della forza sull'asse verticale.

Per $x\geq 0$ e nel tratto lineare il grafico è una retta passante per l'origine, perché $F=kx$ e per $x=0$ la forza è nulla. Il rapporto $\dfrac{F}{x}$ fra ordinata e ascissa ha lo stesso valore $k$ in ogni punto con $x\ne0$.

Con due punti si misura **la pendenza** della retta,
$$
k=\frac{\Delta F}{\Delta x}.
$$
La lettera greca $\Delta$, che si legge «delta», indica una differenza fra due valori della stessa grandezza. Per esempio, una forza che passa da $4\,\mathrm N$ a $10\,\mathrm N$ ha $\Delta F=10\,\mathrm N-4\,\mathrm N=6\,\mathrm N$.

La **risoluzione** di uno strumento è la più piccola differenza che esso distingue. Un piccolo errore di lettura incide meno sulla pendenza se i due punti sono distanti, cioè se le differenze misurate sono grandi rispetto alla risoluzione.

Se sull'asse orizzontale si indica la lunghezza $L$ al posto dell'allungamento, la legge è $F=k(L-L_0)$ per $L\geq L_0$. La pendenza resta $k$. La retta incontra l'asse orizzontale nel punto $L=L_0$, perché alla lunghezza libera la forza è nulla.

La costante $k$ misura la rigidezza. A uguale forza, la molla più rigida si deforma meno.

Se nel grafico l'allungamento è in centimetri, la pendenza è in $\mathrm{N/cm}$. Poiché $1\,\mathrm{cm}=0{,}01\,\mathrm m$, una pendenza di $2\,\mathrm{N/cm}$ vale $\dfrac{2\,\mathrm N}{0{,}01\,\mathrm m}=200\,\mathrm{N/m}$.
:::

:::esempio{titolo="Taratura senza misura diretta della lunghezza libera"}
Una molla ha lunghezza $14\,\mathrm{cm}$ quando la trazione è $4\,\mathrm N$, e $17\,\mathrm{cm}$ a $10\,\mathrm N$. Le due misure sono nel tratto lineare.

La forza aumenta di $10\,\mathrm N-4\,\mathrm N=6\,\mathrm N$ mentre la lunghezza aumenta di $17\,\mathrm{cm}-14\,\mathrm{cm}=3\,\mathrm{cm}=0{,}03\,\mathrm m$. La costante è la pendenza.
$$
k=\frac{6\,\mathrm N}{0{,}03\,\mathrm m}=200\,\mathrm{N/m}.
$$
Con $4\,\mathrm N$ la deformazione è
$$
x=\frac{4\,\mathrm N}{200\,\mathrm{N/m}}=0{,}02\,\mathrm m=2\,\mathrm{cm}.
$$
La lunghezza libera è dunque $14\,\mathrm{cm}-2\,\mathrm{cm}=12\,\mathrm{cm}$.

Si verifica il valore con la seconda misura. A $17\,\mathrm{cm}$ la deformazione è $17\,\mathrm{cm}-12\,\mathrm{cm}=5\,\mathrm{cm}=0{,}05\,\mathrm m$, per cui $0{,}05\,\mathrm m\cdot200\,\mathrm{N/m}=10\,\mathrm N$, che è la trazione misurata.
:::

::grafico{f="2*(x-12)" nomi="L (cm),F (N)" punti="12,0,pieno,O;14,4,pieno,A;17,10,pieno,B" xmin=12 xmax=18 ymin=0 ymax=13 titolo="Taratura con due misure A e B. La lunghezza libera si legge all'intercetta orizzontale O"}

:::attenzione
La costante ottenuta da due punti è la pendenza della secante, cioè della retta che passa per quei due punti. Per estendere il modello a carichi diversi si controlla che altre misure stiano sulla stessa retta entro la risoluzione dello strumento.

A $2\,\mathrm{cm}$ e $4\,\mathrm{cm}$ di allungamento si misurano rispettivamente trazioni di $6\,\mathrm N$ e $12\,\mathrm N$. La pendenza è $\dfrac{12\,\mathrm N-6\,\mathrm N}{4\,\mathrm{cm}-2\,\mathrm{cm}}=3\,\mathrm{N/cm}$. Quel modello prevede a $6\,\mathrm{cm}$ una trazione di $3\,\mathrm{N/cm}\cdot6\,\mathrm{cm}=18\,\mathrm N$. Lo strumento, che ha risoluzione di $0{,}1\,\mathrm N$, legge invece $15\,\mathrm N$. Una lettura è compatibile con una previsione quando la loro differenza non supera l'errore dello strumento. Qui la differenza è $3\,\mathrm N$, trenta volte la risoluzione, quindi la lettura è incompatibile con la previsione. A $6\,\mathrm{cm}$ la molla è fuori dal tratto lineare.

Se al termine della prova la molla recupera la lunghezza libera, la deformazione misurata è reversibile. Il recupero della lunghezza libera, da solo, non dimostra la proporzionalità.

::grafico{f="3*x" nomi="x (cm),F (N)" punti="2,6,pieno;4,12,pieno;6,15,pieno,M;6,18,vuoto,R" legenda="\text{modello lineare}" xmin=0 xmax=7 ymin=0 ymax=23 titolo="M è la misura a 6 cm. R è la previsione che si ottiene prolungando la retta dei primi due dati."}
:::

## Reazione normale e tensione

:::definizione{#contatto titolo="Forze dei vincoli"}
Un **vincolo** è un oggetto che impedisce a un corpo alcuni movimenti. Un tavolo impedisce al libro appoggiato di scendere. Una corda tesa impedisce al corpo legato di allontanarsi.

La **reazione normale** è la componente della forza di contatto perpendicolare alla superficie. Normale significa perpendicolare. Su un tavolo orizzontale è verticale e diretta verso l'alto. Su un piano inclinato è perpendicolare al piano inclinato.

Per un appoggio senza adesione, cioè senza colla o calamite, la superficie spinge il corpo verso l'esterno e non lo trattiene. La normale ha quindi modulo $N\geq0$, dove il simbolo $\geq$ si legge «maggiore o uguale».

La lettera $N$ in corsivo indica il modulo della normale. La lettera $\mathrm N$ diritta, scritta dopo un numero, è il simbolo del newton. Nella scrittura $N=35\,\mathrm N$ compaiono entrambe.

Una **corda ideale** ha massa trascurabile e non si allunga. Quando è tesa esercita una forza di trazione diretta lungo la corda, dal corpo verso il punto a cui la corda è fissata. Il modulo di questa forza si chiama **tensione** e si indica con $T$. Una corda lasca, cioè non tesa, ha tensione nulla.

Un corpo che resta fermo è in **equilibrio**, e la risultante delle forze che riceve è nulla. Per le forze verticali si prende come positivo il verso verso l'alto e si scrive che la somma delle componenti è zero. I casi sono tre, calcolati per un oggetto di peso $P=50\,\mathrm N$ fermo su un tavolo orizzontale.

- L'oggetto riceve soltanto peso e normale. L'equilibrio dà $N-P=0$, quindi $N=P=50\,\mathrm N$.
- Una corda lo tira verso l'alto con tensione $T=20\,\mathrm N$. L'equilibrio dà $N+T-P=0$, quindi la normale diminuisce a $N=P-T=30\,\mathrm N$. La formula vale finché questo valore è positivo.
- Una spinta verticale verso il basso di modulo $S=10\,\mathrm N$ si aggiunge al peso. L'equilibrio dà $N-P-S=0$, quindi $N=P+S=60\,\mathrm N$.

Nelle equazioni entrano le componenti di *tutte* le forze verticali sul corpo studiato.
:::

:::esempio{titolo="Quando la corda sostiene parte del carico"}
Una cassa ferma pesa $60\,\mathrm N$. Una corda verticale esercita sulla cassa una tensione di $25\,\mathrm N$ verso l'alto. La cassa è ferma, quindi, con il verso positivo verso l'alto, la somma delle componenti è zero.
$$
N+25\,\mathrm N-60\,\mathrm N=0,
$$
quindi $N=60\,\mathrm N-25\,\mathrm N=35\,\mathrm N$. Il tavolo porta $35\,\mathrm N$ del carico e la corda ne porta $25\,\mathrm N$.

Con una tensione di $60\,\mathrm N$ la normale si annullerebbe, perché $60\,\mathrm N-60\,\mathrm N=0$. Con una tensione maggiore, per esempio $70\,\mathrm N$, la stessa equazione darebbe $N=-10\,\mathrm N$. Un tavolo senza adesione non esercita una normale negativa, quindi oltre la soglia di $60\,\mathrm N$ la cassa non resta ferma sul tavolo e si solleva.
:::

::grafico{linee="0,60 60,0" nomi="T (N),N (N)" punti="0,60,pieno;25,35,pieno,A;60,0,pieno,B" xmin=0 xmax=70 ymin=0 ymax=65 titolo="Normale per una cassa ferma di peso 60 N. In B la corda sostiene tutto il peso e termina il tratto di equilibrio con appoggio."}

:::esempio{titolo="La lettura sotto due scatole"}
Una scatola di peso $40\,\mathrm N$ poggia su una piattaforma orizzontale. La piattaforma è una bilancia che indica la normale che essa esercita, $N_\mathrm{base}$. Una seconda scatola, di peso $18\,\mathrm N$, è sovrapposta alla prima e una fune la tira verticalmente verso l'alto con $6\,\mathrm N$. La normale fra le due scatole si indica con $N_\mathrm{tra}$. Il verso positivo è verso l'alto.

L'equilibrio della scatola superiore dà $N_\mathrm{tra}+6\,\mathrm N-18\,\mathrm N=0$, quindi
$$
N_\mathrm{tra}=18\,\mathrm N-6\,\mathrm N=12\,\mathrm N.
$$
Per il sistema delle due scatole la forza di contatto fra loro è interna. Le forze esterne sono la normale della piattaforma, la tensione e i due pesi. L'equilibrio dà $N_\mathrm{base}+6\,\mathrm N-40\,\mathrm N-18\,\mathrm N=0$. Dalla somma dei pesi si sottrae la tensione per trovare il carico sulla piattaforma.

$$
N_\mathrm{base}=(40+18-6)\,\mathrm N=52\,\mathrm N.
$$

Il risultato si controlla sulla sola scatola inferiore, che riceve il proprio peso di $40\,\mathrm N$ e i $12\,\mathrm N$ con cui la scatola superiore la preme. La somma $40\,\mathrm N+12\,\mathrm N=52\,\mathrm N$ è la lettura della piattaforma.

Con una tensione $T$ qualsiasi gli stessi conti danno $N_\mathrm{tra}=18\,\mathrm N-T$ e $N_\mathrm{base}=58\,\mathrm N-T$, che sono le due rette del grafico. Se si aumenta la tensione fino a $18\,\mathrm N$, la forza fra le scatole si annulla. In quell'istante la piattaforma sostiene soltanto la scatola inferiore e segna $40\,\mathrm N$. Le rette valgono fino a questa soglia, oltre la quale la scatola superiore si stacca.

::grafico{f="58-x;18-x" nomi="T (N),N (N)" punti="6,52,pieno,A;6,12,pieno,B;18,40,pieno;18,0,pieno" legenda="N_\mathrm{base};N_\mathrm{tra}" xmin=0 xmax=18 ymin=0 ymax=63 titolo="Le normali diminuiscono al crescere della trazione verso l'alto. Il loro scarto è il peso di 40 N della scatola inferiore."}
:::

## Attrito radente

:::definizione{#attrito titolo="Valore effettivo e limite statico"}
L'**attrito radente** è la componente della forza di contatto parallela alla superficie. Radente significa che striscia. Una superficie con attrito si dice ruvida e una superficie senza attrito si dice liscia.

La forza di contatto ha quindi due componenti perpendicolari fra loro, la normale e l'attrito. Il suo modulo si ottiene con il teorema di Pitagora. Con una normale di $12\,\mathrm N$ e un attrito di $5\,\mathrm N$ il modulo è $\sqrt{12^2+5^2}\,\mathrm N=\sqrt{169}\,\mathrm N=13\,\mathrm N$.

L'**attrito statico** è l'attrito che agisce quando le superfici non scorrono l'una sull'altra. Il verso dell'attrito statico è opposto alla tendenza allo scorrimento, cioè al verso in cui il corpo scivolerebbe se l'attrito mancasse.

Nel **modello di Coulomb**, una descrizione semplificata dell'attrito, il modulo $f_s$ dell'attrito statico è limitato da
$$
0\leq f_s\leq\mu_s N.
$$
Qui $N$ è il modulo della normale e $\mu_s$ è il **coefficiente di attrito statico**. La lettera greca $\mu$ si legge «mi» e il pedice $s$ sta per statico. Il coefficiente è un numero che dipende dai materiali delle due superfici. È privo di unità, perché è il rapporto fra due forze. Il modello non pone un limite superiore al coefficiente, che per alcune coppie di materiali è maggiore di $1$.

Il prodotto $\mu_sN$ è il **limite statico**, cioè l'attrito statico massimo. Dividendo il limite per la normale si ritrova il coefficiente.

Il valore effettivo dell'attrito statico si ricava dal bilancio delle componenti tangenziali, cioè parallele alla superficie. Il corpo è fermo, quindi la loro somma è zero. Il valore effettivo è uguale al limite $\mu_sN$ soltanto alla **soglia di scorrimento**, che è la situazione in cui il corpo sta per iniziare a scorrere. Se per l'equilibrio serve un attrito superiore al limite, la quiete non è possibile e il corpo scorre.

Quando le superfici scorrono una rispetto all'altra agisce l'**attrito dinamico**. Il modello dà il suo modulo,
$$
f_d=\mu_d N,
$$
dove $\mu_d$ è il coefficiente di attrito dinamico, anch'esso privo di unità. Per le coppie di materiali più comuni $\mu_d$ è minore di $\mu_s$. La normale $N$ si ricava dall'equilibrio delle forze verticali. Una cassa di peso $100\,\mathrm N$ tirata verso l'alto da una fune verticale con $20\,\mathrm N$ ha $N=80\,\mathrm N$. Con $\mu_d=0{,}5$ l'attrito dinamico è $0{,}5\cdot80\,\mathrm N=40\,\mathrm N$.

Nel modello di Coulomb il limite statico e l'attrito dinamico dipendono soltanto dal coefficiente e dalla normale, quindi restano gli stessi se cambia l'area della faccia appoggiata. L'attrito dinamico resta lo stesso anche se cambia la velocità di scorrimento.

Il verso dell'attrito dinamico è opposto alla velocità di scorrimento relativa, che è la velocità del corpo misurata rispetto alla superficie su cui striscia. Un nastro trasportatore avanza verso destra a $3$ metri al secondo e un pacco appena appoggiato sul nastro avanza, visto da terra, verso destra a $1$ metro al secondo. Rispetto al nastro il pacco scorre verso sinistra, quindi l'attrito del nastro sul pacco punta verso destra, nello stesso verso in cui si muove il nastro visto da terra. Conta il moto del corpo *rispetto al nastro*.
:::

:::esempio{titolo="Misura dell'attrito statico e dinamico"}
Un blocco ha $N=40\,\mathrm N$, $\mu_s=0{,}4$ e $\mu_d=0{,}25$. Il limite statico è
$$
\mu_sN=0{,}4\cdot40\,\mathrm N=16\,\mathrm N.
$$
Una trazione orizzontale di $6\,\mathrm N$ richiede, per l'equilibrio, un attrito statico di $6\,\mathrm N$ in verso opposto. Questo valore è minore del limite, quindi il blocco resta fermo e l'attrito effettivo è $6\,\mathrm N$.

Si aumenta la trazione quasi staticamente, cioè così lentamente che il blocco è in equilibrio in ogni istante. L'attrito ha sempre lo stesso modulo della trazione, fino a $16\,\mathrm N$ (punto $B$ del grafico).

Quando il blocco scorre rispetto al piano, il modello prevede un attrito dinamico di
$$
\mu_dN=0{,}25\cdot40\,\mathrm N=10\,\mathrm N.
$$
Il valore di $10\,\mathrm N$ si misura durante lo scorrimento. Il valore di $16\,\mathrm N$ si misura immediatamente prima che lo scorrimento inizi.
:::

::grafico{f="x" nomi="F (N),fₛ (N)" punti="6,6,pieno,A;16,16,pieno,B" xmin=0 xmax=16 ymin=0 ymax=18 titolo="Attrito statico per il blocco con normale di 40 N. B indica il limite di 16 N"}

:::esempio{titolo="Un intervallo di forze ammissibili"}
Su un blocco fermo agisce una molla che tira verso sinistra con $10\,\mathrm N$. Una fune orizzontale tira verso destra con forza regolabile $F$. Il limite statico al contatto è $4\,\mathrm N$. Si cercano i valori di $F$ per i quali il blocco resta fermo.

Si prende positiva la destra e si indica con $f_x$ la componente dell'attrito. La somma delle componenti orizzontali è zero, cioè $F-10\,\mathrm N+f_x=0$. Per la quiete l'attrito deve quindi avere componente $f_x=10\,\mathrm N-F$.

Il modulo dell'attrito non supera il limite, quindi $\lvert f_x\rvert\leq4\,\mathrm N$, cioè $f_x$ è compresa fra $-4\,\mathrm N$ e $+4\,\mathrm N$. Le due condizioni valgono insieme.

$$
\begin{cases}
10\,\mathrm N-F\leq4\,\mathrm N\\
10\,\mathrm N-F\geq-4\,\mathrm N
\end{cases}
$$

Dalla prima condizione si ricava $F\geq6\,\mathrm N$ e dalla seconda $F\leq14\,\mathrm N$. Il blocco resta fermo per

$$
6\,\mathrm N\leq F\leq14\,\mathrm N.
$$

A $F=10\,\mathrm N$ si equilibrano già molla e fune, quindi l'attrito è nullo. Al limite inferiore, $F=6\,\mathrm N$, si ha $f_x=+4\,\mathrm N$ e l'attrito punta verso destra, perché la molla prevale e il blocco tende a scorrere verso sinistra. Al limite superiore, $F=14\,\mathrm N$, si ha $f_x=-4\,\mathrm N$ e l'attrito punta verso sinistra, perché la fune prevale e il blocco tende a scorrere verso destra. L'attrito cambia verso perché si oppone alla tendenza allo scorrimento.

::grafico{f="10-x" nomi="F (N),fₓ (N)" segmenti="6,-5,6,4;14,-4,14,5" punti="6,4,pieno,A;10,0,pieno;14,-4,pieno,B" xmin=4 xmax=16 ymin=-6 ymax=6 titolo="Attrito richiesto dalla quiete. Solo il tratto fra A e B è ammissibile."}
:::

## Usare correttamente un modello

:::osservazione{#modelli titolo="Ipotesi e controlli fisici"}
Un **modello** è una descrizione semplificata di un fenomeno, che vale sotto certe condizioni, dette ipotesi. Per scegliere la legge, si individua prima quale interazione produce la forza.

- Per il peso si usa $P=mg$ con il campo $g$ del luogo.
- Per la molla si usa $F_e=k\lvert x\rvert$ con una deformazione entro il tratto lineare.
- Per un contatto si ricava la normale dall'equilibrio e si verifica il suo verso ammissibile, cioè che risulti $N\geq0$.
- Per l'attrito si decide se le superfici sono ferme l'una rispetto all'altra oppure scorrono.

Lo stesso oggetto ha peso, normale e attrito nello stesso diagramma, poiché riceve azioni da corpi diversi.

Il controllo delle unità aiuta a individuare un errore di modello o di conversione. In $F=kx$ si deve ottenere un newton, quindi $k$ e $x$ vanno espressi con la stessa unità di lunghezza. Con $k$ in $\mathrm{N/m}$ e $x$ in metri si ha $\mathrm{N/m}\cdot\mathrm m=\mathrm N$.

Il controllo del segno è distinto. Una forza elastica con componente negativa è fisicamente corretta, come la componente di $-3\,\mathrm N$ della molla allungata. Una normale negativa per un semplice appoggio, come $N=-10\,\mathrm N$, segnala invece che l'equilibrio ipotizzato con quel contatto non è ammissibile.
:::

:::attenzione
L'attrito statico massimo e quello effettivo coincidono soltanto alla soglia. Per esempio, con $\mu_s N=16\,\mathrm N$ e trazione orizzontale di $6\,\mathrm N$, un attrito di $16\,\mathrm N$ lascerebbe una risultante di $16\,\mathrm N-6\,\mathrm N=10\,\mathrm N$ opposta alla trazione, e il blocco fermo partirebbe all'indietro. L'equilibrio richiede invece un attrito di $6\,\mathrm N$.
:::
