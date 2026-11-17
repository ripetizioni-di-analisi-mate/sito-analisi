---
titolo: "Forze, peso, elasticità e attrito"
sommario: "Peso e massa, legge di Hooke, reazioni di contatto e attrito statico e dinamico."
---

## Interazioni e rappresentazione

:::definizione{#forza titolo="La forza come grandezza vettoriale"}
Una **forza** descrive l'interazione di un corpo con un altro. Una porta subisce una forza dalla mano quando la mano la spinge. Un sasso lasciato nel vuoto subisce la forza gravitazionale della Terra. La prima interazione richiede contatto. La seconda agisce anche a distanza.

Si rappresenta la forza con una freccia. La lunghezza, quando si disegna in scala, indica il **modulo**. La retta lungo la quale è tracciata dà la direzione. La punta indica il verso. Si specifica anche il corpo che riceve la forza. Per esempio, la forza della mano sulla porta e la forza della porta sulla mano appartengono a due diagrammi distinti. Nel capitolo sull'equilibrio di un corpo rigido si userà la posizione della retta d'azione rispetto al perno.

Il **newton**, di simbolo $\mathrm N$, è l'unità SI della forza. Un dinamometro associa a ogni allungamento di un elemento elastico, nel suo intervallo di misura, il modulo della forza che lo produce.
:::

:::esempio{titolo="Due trazioni sullo stesso anello"}
Due corde orizzontali tirano un anello. La prima tira verso destra con $8\,\mathrm N$, la seconda verso sinistra con $5\,\mathrm N$. Si prende verso destra come verso positivo dell'asse $x$. Le componenti hanno segno opposto, quindi
$$
R_x=8\,\mathrm N-5\,\mathrm N=3\,\mathrm N.
$$
Il segno positivo indica che la risultante punta verso destra. La somma di moduli $8+5$ descriverebbe due trazioni concordi. In un disegno in scala, la freccia verso destra ha lunghezza $8$ e quella verso sinistra lunghezza $5$ nelle stesse unità grafiche.
:::

::grafico{assi=0 uguale=1 vettori="0,0,8,0,8 N;0,0,-5,0,5 N" punti="0,0,pieno,O" xmin=-7 xmax=10 ymin=-1.5 ymax=1.5 titolo="Trazioni opposte applicate all'anello O, con lunghezze proporzionali ai moduli"}

:::esempio{titolo="Due carrelli e il confine del sistema"}
Due carrelli $A$ e $B$ sono collegati da un filo teso di massa trascurabile. Un traino esercita su $A$ una forza di $14\,\mathrm N$ verso destra. Il pavimento esercita resistenze di $2\,\mathrm N$ su $A$ e $3\,\mathrm N$ su $B$, entrambe verso sinistra. Il filo tira $A$ verso sinistra e $B$ verso destra con tensione $T$. Con verso positivo uguale al traino, i due diagrammi danno i bilanci

$$
R_{A,x}=(14-2)\,\mathrm N-T,\qquad
R_{B,x}=T-3\,\mathrm N.
$$

Se il sistema è formato da entrambi i carrelli, i due contributi del filo si annullano nella somma. La risultante orizzontale delle forze esterne vale $9\,\mathrm N$ verso destra. Per la risultante su un solo carrello serve invece il valore della tensione. Se un sensore misura $T=6\,\mathrm N$, le risultanti sui due carrelli valgono $6\,\mathrm N$ e $3\,\mathrm N$. Le due frecce di tensione agiscono su corpi distinti e possono essere sommate soltanto quando il confine del sistema comprende entrambi i corpi.
:::

## Peso e massa

:::definizione{#peso titolo="Il campo gravitazionale locale"}
La massa $m$ si misura in chilogrammi. Il **peso** è la forza gravitazionale che un corpo riceve nel luogo considerato. Vicino alla superficie del pianeta, in una regione abbastanza piccola, il campo gravitazionale si descrive con un valore locale $g$ pressoché uniforme. Il peso ha direzione verticale, verso il basso, e modulo
$$
P=mg.
$$
Il valore $g$ si esprime in $\mathrm{N/kg}$. Indica il peso di un chilogrammo in quel luogo. Siccome $\mathrm{kg}\cdot\mathrm{N/kg}=\mathrm N$, il risultato del prodotto è una forza. Per un corpo di massa $2\,\mathrm{kg}$, usando $g=10\,\mathrm{N/kg}$, si trova $P=20\,\mathrm N$. Il valore $10\,\mathrm{N/kg}$ è un'approssimazione spesso usata negli esercizi. Nei conti si adotta il valore indicato o misurato.
:::

:::esempio{titolo="Stessa massa in due luoghi"}
Un campione ha massa $3\,\mathrm{kg}$. Sulla Terra, con $g=10\,\mathrm{N/kg}$, pesa $30\,\mathrm N$. In un luogo dove $g=4\,\mathrm{N/kg}$, pesa $12\,\mathrm N$. Poiché la massa è comune, il rapporto dei pesi è uguale al rapporto dei campi, $\dfrac{12}{30}=\dfrac{4}{10}$. Una bilancia a due piatti confronta due pesi nel medesimo campo e permette di risalire al rapporto tra le masse. Un dinamometro graduato in newton indica la forza che lo allunga.
:::

::grafico{f="10*x;4*x" nomi="m (kg),P (N)" punti="3,30,pieno,A;3,12,pieno,B" xmin=0 xmax=5 ymin=0 ymax=55 titolo="Peso in funzione della massa in due luoghi. Per 3 kg si leggono 30 N in A e 12 N in B"}

:::esempio{titolo="Stimare il campo con uno zero spostato"}
Un dinamometro fornisce una lettura $P_\mathrm{lett}=gm+b$, dove $b$ è uno scarto fisso dello zero. Con masse di $0{,}50\,\mathrm{kg}$ e $1{,}50\,\mathrm{kg}$ sospese una per volta, si leggono rispettivamente $7\,\mathrm N$ e $17\,\mathrm N$. Poiché lo scarto è lo stesso nelle due prove, il campo si ottiene dividendo la variazione di lettura per la massa aggiunta

$$
g=\frac{17-7}{1{,}50-0{,}50}\,\mathrm{N/kg}=10\,\mathrm{N/kg}.
$$

Dalla prima prova segue $b=7\,\mathrm N-0{,}50\,\mathrm{kg}\cdot g=2\,\mathrm N$. In questo modello la pendenza misura il campo e l'intercetta misura lo scarto dello strumento. Il rapporto fra lettura e massa di un solo campione confonderebbe i due effetti.

::grafico{f="10*x+2;10*x" nomi="m (kg),P (N)" punti="0,2,pieno;0.5,7,pieno,A;1.5,17,pieno,B" legenda="\text{lettura};\text{peso}" xmin=0 xmax=2 ymin=0 ymax=24 titolo="Lo scarto di 2 N sposta la retta verso l'alto e lascia invariata la pendenza."}
:::

## Molle e legge di Hooke

::::teorema{#hooke titolo="Forza proporzionale alla deformazione"}
Sia $L_0$ la lunghezza libera di una molla priva di precarico e $L$ la lunghezza sotto carico. La **deformazione** è $x=L-L_0$. Si orienta l'asse nel verso in cui si muove l'estremità se si allunga la molla. Nel tratto elastico lineare, la componente della forza elastica sull'estremità mobile e il suo modulo valgono
$$
F_{e,x}=-kx,\qquad F_e=k\lvert x\rvert,
$$
con $k>0$ in $\mathrm{N/m}$. Per $x>0$ la molla tira verso la lunghezza naturale. Per $x<0$ spinge verso la lunghezza naturale. La relazione è un modello sperimentale. Il suo intervallo di validità si determina per la molla esaminata.

:::dimostrazione
L'osservazione sperimentale nel tratto lineare dà la proporzionalità fra il modulo della forza e quello della deformazione. Se si sceglie $x$ positivo per l'allungamento, la forza punta nel verso negativo quando $x>0$ e nel verso positivo quando $x<0$. La componente con questi segni e con modulo $k\lvert x\rvert$ è $-kx$.
:::
::::

:::esempio{titolo="Allungamento, compressione e scala"}
Si consideri una molla con $L_0=12\,\mathrm{cm}$ e $k=100\,\mathrm{N/m}$. Portata a $15\,\mathrm{cm}$, ha deformazione $x=3\,\mathrm{cm}=0{,}03\,\mathrm m$ e tira con componente $-3\,\mathrm N$. Portata a $10\,\mathrm{cm}$, ha deformazione $x=-2\,\mathrm{cm}=-0{,}02\,\mathrm m$ e spinge con componente $+2\,\mathrm N$. Il centimetro va convertito prima del prodotto con $k$, perché il dato della molla è espresso per metro.
:::

::grafico{f="-x" nomi="x (cm),Fₑ (N)" punti="-2,2,pieno,C;3,-3,pieno,A" xmin=-4 xmax=5 ymin=-5 ymax=5 titolo="Componente elastica con k uguale a 100 N/m. C rappresenta la compressione e A l'allungamento"}

:::osservazione{titolo="Due molle tese ai lati di un anello"}
Un anello è tirato verso sinistra da una molla di rigidezza $k_\mathrm s$ e verso destra da una di rigidezza $k_\mathrm d$. In una posizione di equilibrio le due trazioni hanno lo stesso modulo $T_0$. Spostando l'anello di $u>0$ verso destra, la molla a sinistra si allunga di altri $u$ e quella a destra si accorcia di $u$. Se entrambe restano tese e nel tratto lineare, la componente della forza totale è

$$
F_x=(T_0-k_\mathrm d u)-(T_0+k_\mathrm s u)
=-(k_\mathrm s+k_\mathrm d)u.
$$

Per $T_0=6\,\mathrm N$, $k_\mathrm s=100\,\mathrm{N/m}$, $k_\mathrm d=300\,\mathrm{N/m}$ e $u=0{,}01\,\mathrm m$, le trazioni hanno moduli $7\,\mathrm N$ a sinistra e $3\,\mathrm N$ a destra. La risultante di $4\,\mathrm N$ punta verso la posizione iniziale.

::grafico{curve="t,6+t,0,2;t,6-3*t,0,2" nomi="u (cm),T (N)" punti="0,6,pieno;1,7,pieno,A;1,3,pieno,B" legenda="T_\mathrm s;T_\mathrm d" xmin=0 xmax=2.35 ymin=0 ymax=9 titolo="Spostando l'anello, il tiro a sinistra cresce e il tiro a destra cala. A e B indicano i moduli dopo 1 cm."}
:::

## Confrontare e tarare molle

:::osservazione{#taratura titolo="Pendenza del grafico forza-allungamento"}
Il grafico del modulo della forza rispetto all'allungamento, per $x\geq 0$ e nel tratto lineare, è una retta passante per l'origine. Il rapporto $\dfrac{F}{x}$ fra ordinata e ascissa si può calcolare da un punto con $x\ne0$. Usando due punti distanti si misura **la pendenza**, $k=\dfrac{\Delta F}{\Delta x}$. Un piccolo errore di lettura incide meno sulla pendenza se le differenze misurate sono grandi rispetto alla risoluzione dello strumento.

Se sull'asse orizzontale si indica la lunghezza $L$, la legge è $F=k(L-L_0)$ per $L\geq L_0$. La pendenza resta $k$ e l'intersezione con l'asse orizzontale è in $L_0$. La costante registra la rigidezza. A uguale forza, la molla più rigida si deforma meno.
:::

:::esempio{titolo="Taratura senza misura diretta della lunghezza libera"}
Una molla ha lunghezza $14\,\mathrm{cm}$ quando la trazione è $4\,\mathrm N$, e $17\,\mathrm{cm}$ a $10\,\mathrm N$. Le due misure sono nel tratto lineare. La forza aumenta di $6\,\mathrm N$ per un aumento di lunghezza di $0{,}03\,\mathrm m$. Si ottiene $k=200\,\mathrm{N/m}$. Con $4\,\mathrm N$ la deformazione è $0{,}02\,\mathrm m$. La lunghezza libera è dunque $14\,\mathrm{cm}-2\,\mathrm{cm}=12\,\mathrm{cm}$. Si verifica il valore sostituendo la seconda lunghezza, per cui $0{,}05\,\mathrm m\cdot200\,\mathrm{N/m}=10\,\mathrm N$.
:::

::grafico{f="2*(x-12)" nomi="L (cm),F (N)" punti="12,0,pieno,O;14,4,pieno,A;17,10,pieno,B" xmin=12 xmax=18 ymin=0 ymax=13 titolo="Taratura con due misure A e B. La lunghezza libera si legge all'intercetta orizzontale O"}

:::attenzione
La costante ottenuta da due punti descrive la pendenza della secante fra quei punti. Per estendere il modello a carichi diversi si controlla che altre misure siano coerenti con la stessa retta entro la risoluzione dello strumento. A $2\,\mathrm{cm}$ e $4\,\mathrm{cm}$ di allungamento si misurano rispettivamente trazioni di $6\,\mathrm N$ e $12\,\mathrm N$. Quel modello prevede $18\,\mathrm N$ a $6\,\mathrm{cm}$. Una lettura di $15\,\mathrm N$ con risoluzione di $0{,}1\,\mathrm N$ è incompatibile con la previsione. Se al termine della prova si recupera la lunghezza libera, la deformazione misurata è reversibile. Il recupero della lunghezza libera, da solo, non dimostra la proporzionalità.

::grafico{f="3*x" nomi="x (cm),F (N)" punti="2,6,pieno;4,12,pieno;6,15,pieno,M;6,18,vuoto,R" legenda="\text{modello lineare}" xmin=0 xmax=7 ymin=0 ymax=23 titolo="M è la misura a 6 cm. R è la previsione che si ottiene prolungando la retta dei primi due dati."}
:::

## Reazione normale e tensione

:::definizione{#contatto titolo="Forze dei vincoli"}
La **reazione normale** è la componente della forza di contatto perpendicolare alla superficie. Per un appoggio senza adesione, la superficie può spingere il corpo verso l'esterno. La normale ha quindi modulo $N\geq0$. Una corda ideale tesa esercita invece una forza di trazione diretta lungo la corda, dal corpo verso il vincolo. Il suo modulo si chiama **tensione** e si indica con $T$.

Se un oggetto è fermo su un tavolo orizzontale e riceve soltanto peso e normale, le due forze verticali si equilibrano e $N=P$. Se una corda lo tira verso l'alto, la normale diminuisce a $N=P-T$ finché questo valore è positivo. Se si aggiunge invece una spinta verticale verso il basso di modulo $S$, si ottiene $N=P+S$. Nelle equazioni entrano le componenti di *tutte* le forze verticali sul corpo studiato.
:::

:::esempio{titolo="Quando la corda sostiene parte del carico"}
Una cassa ferma pesa $60\,\mathrm N$. Una corda verticale esercita sulla cassa una tensione di $25\,\mathrm N$. Scelto positivo il verso verso l'alto, $N+25\,\mathrm N-60\,\mathrm N=0$, quindi $N=35\,\mathrm N$. Il tavolo porta $35\,\mathrm N$ del carico e la corda ne porta $25\,\mathrm N$. Con una tensione di $60\,\mathrm N$ la normale si annullerebbe. Oltre quella soglia il tavolo non può mantenere la cassa appoggiata entro il modello descritto.
:::

::grafico{linee="0,60 60,0" nomi="T (N),N (N)" punti="0,60,pieno;25,35,pieno,A;60,0,pieno,B" xmin=0 xmax=70 ymin=0 ymax=65 titolo="Normale per una cassa ferma di peso 60 N. In B la corda sostiene tutto il peso e termina il tratto di equilibrio con appoggio."}

:::esempio{titolo="La lettura sotto due scatole"}
Una scatola di peso $40\,\mathrm N$ poggia su una piattaforma orizzontale. La scatola sovrapposta pesa $18\,\mathrm N$ e una fune la tira verticalmente verso l'alto con $6\,\mathrm N$. Per la sola scatola superiore l'equilibrio dà $N_\mathrm{tra}=18\,\mathrm N-6\,\mathrm N=12\,\mathrm N$. Per entrambe le scatole la forza di contatto fra loro è interna. Dalla somma dei pesi si sottrae la tensione per trovare il carico sulla piattaforma

$$
N_\mathrm{base}=(40+18-6)\,\mathrm N=52\,\mathrm N.
$$

La normale fra le scatole vale $12\,\mathrm N$ e quella alla base $52\,\mathrm N$. Sommando il peso della scatola inferiore ai $12\,\mathrm N$ che riceve da quella superiore si ritrova la lettura della piattaforma.

Se si aumenta la tensione fino a $18\,\mathrm N$, la forza fra le scatole si annulla. In quell'istante la piattaforma sostiene soltanto la scatola inferiore. Le rette nel grafico valgono fino a questa soglia, quando il corpo superiore può perdere il contatto.

::grafico{f="58-x;18-x" nomi="T (N),N (N)" punti="6,52,pieno,A;6,12,pieno,B;18,40,pieno;18,0,pieno" legenda="N_\mathrm{base};N_\mathrm{tra}" xmin=0 xmax=18 ymin=0 ymax=63 titolo="Le normali diminuiscono al crescere della trazione verso l'alto. Il loro scarto è il peso di 40 N della scatola inferiore."}
:::

## Attrito radente

:::definizione{#attrito titolo="Valore effettivo e limite statico"}
L'**attrito radente** è la componente di contatto parallela alla superficie. Quando non c'è scorrimento, l'attrito statico si orienta contro la tendenza allo scorrimento. Nel modello di Coulomb il suo modulo $f_s$ è limitato da
$$
0\leq f_s\leq\mu_s N.
$$
Qui $\mu_s$ è il coefficiente statico, privo di unità perché è il rapporto fra due forze. Il valore effettivo si ricava dal bilancio delle componenti tangenziali. Il prodotto $\mu_sN$ si raggiunge alla soglia di scorrimento. Se serve un attrito superiore al limite, la quiete non è possibile.

Quando le superfici scorrono una rispetto all'altra, il modello dell'**attrito dinamico** dà il modulo $f_d=\mu_d N$. Il verso si oppone alla velocità di scorrimento relativa. Il piano di un nastro che scorre sotto un corpo può esercitare sul corpo un attrito diretto nello stesso verso in cui si muove il nastro visto da terra. Conta il moto del corpo *rispetto al nastro*.
:::

:::esempio{titolo="Misura dell'attrito statico e dinamico"}
Un blocco ha $N=40\,\mathrm N$, $\mu_s=0{,}4$ e $\mu_d=0{,}25$. Una trazione orizzontale di $6\,\mathrm N$ richiede un attrito statico di $6\,\mathrm N$, in verso opposto. Il limite è $0{,}4\cdot40\,\mathrm N=16\,\mathrm N$, quindi il blocco può restare fermo. Aumentando l'intensità della trazione quasi staticamente, l'attrito segue la trazione fino a $16\,\mathrm N$. Quando il blocco scorre rispetto al piano, il modello prevede $0{,}25\cdot40\,\mathrm N=10\,\mathrm N$ di attrito dinamico. Il secondo valore si misura durante lo scorrimento, il primo immediatamente prima che inizi.
:::

::grafico{f="x" nomi="F (N),fₛ (N)" punti="6,6,pieno,A;16,16,pieno,B" xmin=0 xmax=16 ymin=0 ymax=18 titolo="Attrito statico per il blocco con normale di 40 N. B indica il limite di 16 N"}

:::esempio{titolo="Un intervallo di forze ammissibili"}
Su un blocco fermo agisce una molla che tira verso sinistra con $10\,\mathrm N$. Una fune orizzontale tira verso destra con forza regolabile $F$. Il limite statico al contatto è $4\,\mathrm N$. Prendendo positiva la destra, per la quiete l'attrito deve avere componente $f_x=10\,\mathrm N-F$. Il vincolo $|f_x|\leq4\,\mathrm N$ dà

$$
6\,\mathrm N\leq F\leq14\,\mathrm N.
$$

A $F=10\,\mathrm N$ si equilibrano già molla e fune, quindi l'attrito è nullo. Al limite inferiore l'attrito punta verso destra e al limite superiore verso sinistra. La possibilità che cambi verso nasce dal fatto che si oppone alla tendenza relativa allo scorrimento.

::grafico{f="10-x" nomi="F (N),fₓ (N)" segmenti="6,-5,6,4;14,-4,14,5" punti="6,4,pieno,A;10,0,pieno;14,-4,pieno,B" xmin=4 xmax=16 ymin=-6 ymax=6 titolo="Attrito richiesto dalla quiete. Solo il tratto fra A e B è ammissibile."}
:::

## Usare correttamente un modello

:::osservazione{#modelli titolo="Ipotesi e controlli fisici"}
Per scegliere la legge, si individua prima quale interazione produce la forza. Nella legge del peso si usa il campo del luogo. Nella legge della molla si usa una deformazione entro il tratto lineare. Nei contatti si verifica il verso ammissibile della normale. Per l'attrito si decide se le superfici sono ferme l'una rispetto all'altra oppure scorrono. Lo stesso oggetto può avere peso, normale e attrito nello stesso diagramma poiché riceve azioni da corpi diversi.

Il controllo delle unità aiuta a individuare un errore di modello o conversione. In $F=kx$ si deve ottenere un newton, quindi $k$ e $x$ vanno espressi con la stessa unità di lunghezza. Il controllo del segno è distinto. Una forza elastica con componente negativa può essere fisicamente corretta. Una normale negativa per un semplice appoggio segnala invece che l'equilibrio ipotizzato con quel contatto non è ammissibile.
:::

:::attenzione
L'attrito statico massimo e quello effettivo coincidono soltanto alla soglia. Per esempio, con $\mu_s N=16\,\mathrm N$ e trazione orizzontale di $6\,\mathrm N$, un attrito di $16\,\mathrm N$ lascerebbe una risultante di $10\,\mathrm N$ opposta alla trazione. L'equilibrio richiede invece un attrito di $6\,\mathrm N$.
:::
