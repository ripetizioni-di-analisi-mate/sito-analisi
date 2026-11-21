---
titolo: "Equilibrio del punto materiale"
sommario: "Diagrammi di corpo libero, bilancio delle componenti, piani inclinati, attrito e vincoli."
---

## Condizioni di equilibrio

:::teorema{#condizioni titolo="Risultante nulla"}
Una **forza** è una spinta o una trazione che un corpo esercita su un altro. La sua unità di misura è il **newton**, di simbolo $\mathrm N$. Un oggetto di massa $100$ grammi pesa circa $1\,\mathrm N$.

Un **punto materiale** è un corpo che si tratta come se fosse un solo punto. Questo modello è adatto quando la forma e le rotazioni del corpo non contano per la domanda. Di un anello tirato da tre funi interessa soltanto sapere se si sposta, quindi l'anello si tratta come un punto.

Un punto materiale è in **equilibrio statico** se resta fermo rispetto a un **riferimento inerziale**, cioè a un ambiente di osservazione nel quale un corpo su cui non agiscono forze resta fermo oppure si muove a velocità costante. In questo capitolo il riferimento è il pavimento dell'aula, che si considera inerziale.

La **risultante** è la somma vettoriale di tutte le forze esterne, cioè delle forze che gli altri corpi esercitano sul punto. Si indica con $\vec R$, dove la freccia segnala un vettore, cioè una grandezza con un modulo (qui l'intensità della forza, in newton), una direzione e un verso. La condizione di equilibrio è che la risultante sia il **vettore nullo** $\vec 0$, cioè il vettore di modulo zero.

Per calcolare la risultante si fissano due assi perpendicolari, $x$ e $y$, ciascuno con un verso positivo. La **componente** di una forza lungo un asse è la parte della forza che agisce lungo quell'asse. Ha il segno $+$ se è concorde con il verso positivo e il segno $-$ se è opposta. Con l'asse $x$ positivo verso destra, una forza di $6\,\mathrm N$ verso sinistra ha componente $F_x=-6\,\mathrm N$. Nel piano la condizione $\vec R=\vec 0$ equivale a due equazioni indipendenti, da soddisfare insieme:
$$
\begin{cases}
R_x=\sum F_x=0,\\
R_y=\sum F_y=0.
\end{cases}
$$
Il simbolo $\sum$ è la lettera greca sigma maiuscola e si legge «somma di». La scrittura $\sum F_x$ indica la somma delle componenti lungo $x$ di tutte le forze, ciascuna con il suo segno, e $R_x$ è la componente lungo $x$ della risultante.

Se il punto è già fermo e la risultante resta nulla, il punto resta fermo. Se è già in moto, una risultante nulla ne mantiene la velocità.
:::

:::esempio{titolo="Equilibrio di un anello lungo una guida"}
Un anello è infilato in una guida orizzontale, cioè in un'asta lungo la quale scorre. Due funi lo tirano lungo la guida. La prima esercita una forza di $11\,\mathrm N$ verso destra e la seconda una forza di $6\,\mathrm N$ verso sinistra. Si sceglie il verso positivo a destra, quindi la prima forza ha componente $+11\,\mathrm N$ e la seconda $-6\,\mathrm N$. La loro somma è
$$
R_x=11\,\mathrm N-6\,\mathrm N=5\,\mathrm N.
$$
Una terza fune porta la somma a zero se la sua componente $F_{3x}$ soddisfa $5\,\mathrm N+F_{3x}=0$, cioè $F_{3x}=-5\,\mathrm N$. La terza fune esercita quindi $5\,\mathrm N$ verso sinistra.

Tutte le forze agiscono lungo la guida orizzontale, quindi nessuna ha componente verticale e l'equazione $R_y=0$ è già soddisfatta.
:::

:::osservazione{titolo="Un bilancio nullo può mantenere velocità diverse"}
Un carrello si trova su una guida orizzontale priva di **attrito**, cioè della forza di contatto che ostacola lo scorrimento. Sul carrello agiscono una forza di $6\,\mathrm N$ verso destra e una di $6\,\mathrm N$ verso sinistra, perciò $R_x=6\,\mathrm N-6\,\mathrm N=0$. In verticale il peso è compensato dalla reazione della guida, cioè dalla forza con cui la guida sostiene il carrello. La risultante è quindi nulla.

Se il carrello parte fermo, rimane nella posizione iniziale. Se invece attraversa quel punto con velocità di $2\,\mathrm{m/s}$ verso destra, conserva quella velocità finché il bilancio delle forze rimane lo stesso. Nei $3\,\mathrm s$ successivi percorre quindi
$$
2\,\mathrm{m/s}\cdot3\,\mathrm s=6\,\mathrm m.
$$
La condizione $\vec R=\vec 0$ stabilisce che la velocità si conserva. Per concludere che il carrello resta fermo occorre quindi sapere anche che la sua velocità iniziale è zero.

::grafico{f="2*x;0" nomi="t (s),x (m)" punti="3,6,pieno,A;3,0,pieno,B" legenda="\text{carrello in movimento};\text{carrello fermo}" xmin=0 xmax=4 ymin=-1 ymax=9 titolo="Nel medesimo bilancio di forze, la pendenza dipende dalla velocità iniziale."}
:::

## Disegnare e proiettare le forze

:::osservazione{#componenti titolo="Un corpo alla volta"}
Il **diagramma di corpo libero** è il disegno di un solo corpo, isolato dagli altri, con una freccia per ogni forza esterna che agisce su di esso. Per un gancio appeso a una fune le frecce sono due. La prima è il **peso**, cioè la forza con cui la Terra attira il gancio, verticale e verso il basso. La seconda è la **tensione**, cioè la forza con cui la fune tesa tira il gancio. La forza che il gancio esercita sulla fune agisce sulla fune, quindi appartiene al diagramma della fune.

Scelti gli assi, si scompone ogni forza, cioè se ne calcolano le due componenti. La componente lungo un asse si chiama anche **proiezione** e ha segno positivo se il suo verso concorda con il verso positivo dell'asse. La scrittura $\vec R=(6;8)\,\mathrm N$ indica $R_x=6\,\mathrm N$ e $R_y=8\,\mathrm N$.

La forza che equilibra un gruppo di forze si chiama **equilibrante** ed è l'opposto della loro risultante, cioè ha le stesse componenti con il segno cambiato. Per $\vec R=(6;8)\,\mathrm N$ l'equilibrante è $\vec F=(-6;-8)\,\mathrm N$. Le due componenti sono i cateti di un triangolo rettangolo e la freccia della forza è l'ipotenusa. Per il teorema di Pitagora il modulo è
$$
F=\sqrt{6^2+8^2}\,\mathrm N=\sqrt{36+64}\,\mathrm N=\sqrt{100}\,\mathrm N=10\,\mathrm N.
$$
Il risultato si verifica sostituendo entrambe le componenti nella somma, che dà $6\,\mathrm N-6\,\mathrm N=0$ lungo $x$ e $8\,\mathrm N-8\,\mathrm N=0$ lungo $y$.
:::

::grafico{assi=0 uguale=1 vettori="0,0,6,0,6 N;0,0,0,8,8 N;0,0,-6,-8" punti="0,0,pieno,O" etichette="-2.1,-5,F" xmin=-8 xmax=8 ymin=-10 ymax=10 titolo="Equilibrante F dell'anello O. Le componenti della freccia obliqua sono opposte alle due forze assegnate"}

:::esempio{titolo="Un tirante di direzione assegnata"}
La risultante delle forze già presenti su un anello è $\vec R=(16;-18)\,\mathrm N$, cioè $16\,\mathrm N$ verso destra e $18\,\mathrm N$ verso il basso. Si aggiunge una fune orientata a sinistra e verso l'alto, che sale di $3$ unità ogni $4$ unità di spostamento orizzontale.

Un tratto di fune che avanza di $4$ in orizzontale e sale di $3$ è lungo $\sqrt{4^2+3^2}=\sqrt{25}=5$, per il teorema di Pitagora. La tensione $T$ è diretta lungo la fune, quindi le sue componenti stanno a $T$ come i lati $4$ e $3$ stanno alla lunghezza $5$. I moduli delle componenti sono $\dfrac45 T$ in orizzontale e $\dfrac35 T$ in verticale.

Il bilancio orizzontale, con il verso positivo a destra, è
$$
16\,\mathrm N-\frac45T=0
\quad\Longrightarrow\quad
T=16\,\mathrm N\cdot\frac54=20\,\mathrm N.
$$
La freccia $\Longrightarrow$ si legge «quindi». Con quella tensione la componente verticale della fune è $\dfrac35\cdot20\,\mathrm N=12\,\mathrm N$ verso l'alto, mentre l'equilibrio richiede $18\,\mathrm N$ verso l'alto. Mancano $18\,\mathrm N-12\,\mathrm N=6\,\mathrm N$. Si aggiunge perciò un **tirante**, cioè una seconda fune che lavora tirando, verticale e con $6\,\mathrm N$ verso l'alto. La somma di tutte le forze è
$$
\left(16-16;\,-18+12+6\right)\,\mathrm N=(0;0)\,\mathrm N,
$$
quindi l'anello è in equilibrio.

Nel disegno le forze sono disposte **testa-coda**, cioè ogni freccia parte dalla punta della precedente. La risultante è nulla quando le frecce formano un poligono chiuso. Partendo dall'origine si traccia la risultante assegnata. La tensione obliqua $T$, di componenti $(-16;12)\,\mathrm N$, riporta poi il percorso sull'asse verticale, a quota $-6\,\mathrm N$. Il tirante verticale $T_v$ chiude il percorso nell'origine. Se si toglie quel tirante, il poligono resta aperto di $6\,\mathrm N$ e la risultante punta verso il basso.

::grafico{uguale=1 nomi="Fₓ (N),Fᵧ (N)" vettori="0,0,16,-18,R;16,-18,0,-6,T;0,-6,0,0,Tᵥ" punti="16,-18,pieno;0,-6,pieno" xmin=-6 xmax=20 ymin=-21 ymax=7 titolo="La chiusura del poligono delle forze richiede il tratto verticale di 6 N."}
:::

## Corde verticali

::::teorema{#corde titolo="Ripartire un carico"}
Una **corda ideale** è una corda di massa trascurabile che non si allunga. Quando è tesa tira il corpo a cui è legata lungo la propria direzione, verso il punto di sospensione. Il modulo di questa forza è la tensione $T$.

Se un corpo fermo di peso $P$ è sostenuto da una sola corda verticale, la tensione è $T=P$. Con due corde verticali che lo sostengono dall'alto si ha $T_1+T_2=P$, dove $T_1$ e $T_2$ sono le tensioni delle due corde.

Quando il testo assegna la massa $m$ in chilogrammi ($\mathrm{kg}$), il peso si calcola con $P=mg$. Il numero $g$ è il peso di un chilogrammo e si misura in newton al chilogrammo ($\mathrm{N/kg}$). Sulla Terra vale circa $9{,}8\,\mathrm{N/kg}$, arrotondato a $10\,\mathrm{N/kg}$ in molti esercizi. Con questo valore un corpo di massa $9\,\mathrm{kg}$ pesa $9\,\mathrm{kg}\cdot10\,\mathrm{N/kg}=90\,\mathrm N$.

:::dimostrazione
Si sceglie positivo il verso verticale verso l'alto. Le tensioni hanno allora componenti $+T_1$ e $+T_2$ e il peso ha componente $-P$. La condizione di equilibrio $R_y=0$ diventa $T_1+T_2-P=0$, cioè $T_1+T_2=P$. Con una sola corda la stessa equazione è $T-P=0$, cioè $T=P$.
:::
::::

:::esempio{titolo="Dalla somma alla singola tensione"}
Due corde verticali sostengono un anello di peso $84\,\mathrm N$. La tensione misurata nella prima corda è $30\,\mathrm N$. Dalla relazione $T_1+T_2=P$ si ricava la seconda:
$$
T_2=P-T_1=84\,\mathrm N-30\,\mathrm N=54\,\mathrm N.
$$
Se si conoscesse soltanto il peso, la relazione avrebbe più coppie di soluzioni, come $40\,\mathrm N$ e $44\,\mathrm N$. Il valore di $\dfrac{84}{2}\,\mathrm N=42\,\mathrm N$ per ciascuna corda si ottiene aggiungendo l'ipotesi che le due tensioni siano uguali.
:::

:::esempio{titolo="Carico sostenibile sotto due limiti"}
Un punto di peso $90\,\mathrm N$ è sostenuto da due tiranti verticali. Il primo regge una tensione di $35\,\mathrm N$ al massimo e il secondo di $60\,\mathrm N$ al massimo. Le due tensioni hanno per somma il peso, quindi $T_1+T_2=90\,\mathrm N$ e $T_2=90\,\mathrm N-T_1$.

Il secondo tirante porta al massimo $60\,\mathrm N$, quindi il primo ne porta almeno $90\,\mathrm N-60\,\mathrm N=30\,\mathrm N$. Il primo porta al massimo $35\,\mathrm N$, quindi il secondo ne porta almeno $90\,\mathrm N-35\,\mathrm N=55\,\mathrm N$. Il simbolo $\leq$ si legge «minore o uguale a». Le due tensioni soddisfano

$$
30\,\mathrm N\leq T_1\leq35\,\mathrm N,\qquad
55\,\mathrm N\leq T_2=90\,\mathrm N-T_1\leq60\,\mathrm N.
$$

Questi intervalli contengono le ripartizioni ammissibili, cioè quelle che rispettano entrambi i limiti. Fra queste si sceglie se la regolazione dei tiranti lo consente. La coppia $T_1=32\,\mathrm N$ e $T_2=58\,\mathrm N$ ha somma $90\,\mathrm N$ e rispetta entrambe le soglie. La ripartizione uguale darebbe $45\,\mathrm N$ a ciascun tirante e supererebbe il limite di $35\,\mathrm N$ del primo.

::grafico{f="90-x" nomi="T₁ (N),T₂ (N)" punti="30,60,pieno,A;35,55,pieno,B" segmenti="27,60,30,60;35,52,35,55" xmin=27 xmax=39 ymin=50 ymax=64 titolo="L'equilibrio fissa la retta. I limiti meccanici dei tiranti restringono le scelte al segmento da A a B."}
:::

## Molle in equilibrio

:::teorema{#molla titolo="Deformazione richiesta dal carico"}
Una molla senza carichi ha una lunghezza propria, detta **lunghezza naturale**. L'**allungamento** $x$ è la differenza fra la lunghezza della molla tesa e la lunghezza naturale. Una molla allungata tira il corpo appeso con una forza detta **forza elastica** o forza di richiamo. Nel **tratto elastico lineare**, cioè finché la forza è direttamente proporzionale all'allungamento (se l'allungamento raddoppia, raddoppia anche la forza), il modulo della forza elastica è $kx$. Il numero $k$ è la **costante elastica** della molla, detta anche rigidezza. Si misura in newton al metro ($\mathrm{N/m}$) e indica quanti newton servono per allungare la molla di un metro.

Un corpo di peso $P$ appeso a una molla verticale è in quiete, cioè fermo, quando la forza elastica verso l'alto bilancia il peso verso il basso. Con $x\ge0$ (il simbolo $\ge$ si legge «maggiore o uguale a») si ottiene
$$
kx=P
\quad\Longrightarrow\quad
x=\frac Pk.
$$
Il rapporto $\dfrac{P}{k}$ è una lunghezza, perché si dividono newton per newton al metro e restano metri.

Con $P=16\,\mathrm N$ e $k=200\,\mathrm{N/m}$ risulta
$$
x=\frac{16\,\mathrm N}{200\,\mathrm{N/m}}=0{,}08\,\mathrm m=8\,\mathrm{cm}.
$$
Se per questa molla la proporzionalità è stata verificata con le misure soltanto fino a $0{,}06\,\mathrm m$, cioè fino a una forza di $200\,\mathrm{N/m}\cdot0{,}06\,\mathrm m=12\,\mathrm N$, il risultato di $8\,\mathrm{cm}$ è fuori dall'intervallo verificato. Per conoscere la deformazione reale serve una descrizione della molla oltre quel limite.

Lo stesso bilancio si applica in orizzontale, quando la forza elastica equilibra le altre forze lungo l'asse della molla. Vale anche per una molla compressa, cioè accorciata rispetto alla lunghezza naturale. In quel caso $x$ è l'accorciamento e la molla spinge. Due molle verticali affiancate, con la stessa lunghezza naturale, che sostengono lo stesso corpo hanno lo stesso allungamento $x$, e le loro forze si sommano. Con costanti $100\,\mathrm{N/m}$ e $300\,\mathrm{N/m}$ e un peso di $24\,\mathrm N$ si ha $(100+300)\,\mathrm{N/m}\cdot x=24\,\mathrm N$, quindi $x=0{,}06\,\mathrm m$.
:::

::grafico{f="16" linee="0,0 6,12" segmenti="6,12,8,16" nomi="x (cm),F (N)" punti="6,12,pieno,B;8,16,vuoto,A" xmin=0 xmax=10 ymin=0 ymax=23 titolo="B delimita il tratto verificato. Il prolungamento tratteggiato incontra il carico di 16 N in A, a 8 cm."}

:::esempio{titolo="Equilibrio di una molla con arresto"}
Una molla verticale di rigidezza $k=250\,\mathrm{N/m}$ sostiene un peso, che scende di una distanza $x$ a partire dalla lunghezza naturale della molla. Sotto il peso c'è un arresto, cioè un piano rigido orizzontale che ne ferma la discesa, alla distanza $x_s=0{,}04\,\mathrm m=4\,\mathrm{cm}$. L'arresto spinge il peso soltanto verso l'alto. Questa spinta è una **reazione normale**, cioè una forza di contatto perpendicolare alla superficie di appoggio. Il suo modulo si indica con $N$ in corsivo, mentre la $\mathrm N$ diritta è il simbolo del newton.

Senza l'arresto, un peso di $18\,\mathrm N$ sarebbe in equilibrio con
$$
x=\frac{18}{250}\,\mathrm m=0{,}072\,\mathrm m=7{,}2\,\mathrm{cm},
$$
che è oltre la posizione dell'arresto. Il peso si ferma quindi a $x_s$. In quella posizione la molla esercita $kx_s=250\,\mathrm{N/m}\cdot0{,}04\,\mathrm m=10\,\mathrm N$ verso l'alto. Il bilancio verticale $10\,\mathrm N+N-18\,\mathrm N=0$ dà $N=8\,\mathrm N$.

Il contatto comincia quando il peso vale $P=kx_s=10\,\mathrm N$. I due casi sono i seguenti.

- Per un peso minore di $10\,\mathrm N$ il corpo resta sopra l'arresto, quindi $x=\dfrac Pk$ e $N=0$.
- Per un peso maggiore di $10\,\mathrm N$ la posizione resta $x_s$ e la molla esercita sempre $10\,\mathrm N$. Aumenta soltanto la reazione dell'arresto, che vale $N=P-10\,\mathrm N$.

L'equazione di equilibrio cambia quando cambia il **vincolo** attivo, cioè l'oggetto che limita il movimento del corpo (qui l'arresto). Se il peso è a contatto e la sua massa viene diminuita lentamente, a $P=10\,\mathrm N$ la reazione torna nulla. Sotto questa soglia il peso si solleva dall'arresto.

::grafico{linee="0,0 10,4 24,4" nomi="P (N),x (cm)" punti="10,4,pieno,C;18,4,pieno" xmin=0 xmax=24 ymin=0 ymax=6 titolo="Nel punto C la normale è ancora nulla. Oltre C la reazione cresce mentre l'allungamento resta a 4 cm."}
:::

## Piani inclinati

::::teorema{#piano titolo="Assi parallelo e perpendicolare al piano"}
Un **piano inclinato** è una superficie piana in salita, come una rampa. Vista di lato la rampa è un triangolo rettangolo con altezza $h$, base orizzontale $b$ e lato inclinato $\ell$ (elle), che è l'ipotenusa. L'angolo fra il piano e l'orizzontale si indica con la lettera greca $\alpha$ (alfa), con $0\leq\alpha<90^\circ$.

In un triangolo rettangolo il **seno** di un angolo acuto, scritto $\sin\alpha$, è il rapporto fra il cateto opposto all'angolo e l'ipotenusa. Il **coseno**, scritto $\cos\alpha$, è il rapporto fra il cateto adiacente all'angolo e l'ipotenusa. Nel triangolo della rampa il cateto opposto ad $\alpha$ è l'altezza e quello adiacente è la base, quindi
$$
\sin\alpha=\frac{h}{\ell},\qquad\cos\alpha=\frac{b}{\ell}.
$$
Per una rampa con $h=3\,\mathrm m$, $b=4\,\mathrm m$ e $\ell=5\,\mathrm m$ si ha $\sin\alpha=\dfrac35$ e $\cos\alpha=\dfrac45$. Per un angolo di $30^\circ$ si ha $\sin30^\circ=\dfrac12$. Per un angolo di $45^\circ$ i due cateti sono uguali, quindi seno e coseno sono uguali.

Sul piano inclinato si scelgono un asse parallelo al piano e un asse perpendicolare al piano. Il peso $P$, che è verticale, si scompone lungo questi due assi. La componente parallela al piano si indica con $P_\parallel$, è diretta verso la discesa e ha modulo $P_\parallel=P\sin\alpha$. La componente perpendicolare si indica con $P_\perp$, è diretta verso il piano e ha modulo $P_\perp=P\cos\alpha$.

:::dimostrazione
La verticale si ottiene ruotando l'orizzontale di un angolo retto. La direzione perpendicolare al piano si ottiene ruotando la rampa di un angolo retto, nello stesso verso. Due rette ruotate dello stesso angolo formano fra loro lo stesso angolo che formavano prima. La rampa e l'orizzontale formano l'angolo $\alpha$, perciò anche la perpendicolare al piano e la verticale formano l'angolo $\alpha$. Il peso è verticale, quindi l'angolo fra il peso e la direzione verso il piano è $\alpha$.

Le due componenti e il peso formano un triangolo rettangolo, nel quale il peso $P$ è l'ipotenusa. Il cateto adiacente ad $\alpha$ è $P_\perp$, quindi $\cos\alpha=\dfrac{P_\perp}{P}$ e $P_\perp=P\cos\alpha$. Il cateto opposto ad $\alpha$ è $P_\parallel$, quindi $\sin\alpha=\dfrac{P_\parallel}{P}$ e $P_\parallel=P\sin\alpha$.
:::
::::

:::esempio{titolo="Normale e fune su una rampa liscia"}
Una rampa **liscia**, cioè senza attrito, ha $(h,b,\ell)=(3,4,5)\,\mathrm m$ e sostiene un corpo di peso $P=60\,\mathrm N$. Le componenti del peso sono
$$
P_\parallel=60\,\mathrm N\cdot\frac35=36\,\mathrm N,\qquad
P_\perp=60\,\mathrm N\cdot\frac45=48\,\mathrm N.
$$
Una fune parallela alla rampa tiene fermo il corpo. Lungo l'asse parallelo agiscono soltanto la tensione, in salita, e $P_\parallel$, in discesa, quindi $T=36\,\mathrm N$. Lungo l'asse perpendicolare agiscono soltanto la normale, che esce dal piano, e $P_\perp$, quindi $N=48\,\mathrm N$. Con la scomposizione ciascuna delle due forze incognite compare in una sola equazione.
:::

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 4,3" riferimento="2,1.5,36.87,1.5,x,y" vettori="2,1.5,2,-0.5,P" etichette="2.3,-0.3,4 m;4.4,1.5,3 m" xmin=-1 xmax=5.8 ymin=-1 ymax=4.4 titolo="Assi ruotati con la rampa. Il lato inclinato è 5 m e la freccia del peso resta verticale"}

:::esempio{titolo="Una spinta orizzontale su una rampa liscia"}
Una rampa liscia ha altezza $3\,\mathrm m$, base $4\,\mathrm m$ e lato inclinato $5\,\mathrm m$. Un blocco di peso $50\,\mathrm N$ è premuto con una forza orizzontale di $20\,\mathrm N$, diretta verso il lato alto della rampa. Una fune parallela alla rampa lo tiene in equilibrio.

La spinta è orizzontale e la rampa forma l'angolo $\alpha$ con l'orizzontale, quindi l'angolo fra la spinta e la rampa è $\alpha$. Le componenti della spinta sono
$$
20\,\mathrm N\cdot\frac45=16\,\mathrm N\ \text{in salita},\qquad
20\,\mathrm N\cdot\frac35=12\,\mathrm N\ \text{verso il piano}.
$$
Le componenti del peso sono
$$
50\,\mathrm N\cdot\frac35=30\,\mathrm N\ \text{in discesa},\qquad
50\,\mathrm N\cdot\frac45=40\,\mathrm N\ \text{verso il piano}.
$$
Lungo la rampa, con la salita positiva, il bilancio è $T+16\,\mathrm N-30\,\mathrm N=0$, quindi la fune esercita $T=(30-16)\,\mathrm N=14\,\mathrm N$. Lungo l'asse perpendicolare, con il verso positivo uscente dal piano, il bilancio è $N-40\,\mathrm N-12\,\mathrm N=0$, quindi la normale vale $N=(40+12)\,\mathrm N=52\,\mathrm N$.

Con gli assi orientati lungo la rampa e perpendicolarmente a essa, la forza orizzontale compare quindi in entrambe le equazioni.
:::

## Attrito e possibilità di quiete

:::teorema{#attrito-equilibrio titolo="Prima la forza richiesta, poi il limite"}
L'**attrito statico** è la forza, parallela alla superficie di contatto, con cui una superficie ruvida trattiene un corpo fermo. Il suo modulo ha un valore massimo, che è il prodotto $\mu_s N$. Qui $N$ è il modulo della normale e $\mu_s$ (lettera greca mi, con la $s$ di statico) è il **coefficiente di attrito statico**, un numero senza unità di misura che dipende dalle due superfici. Con $\mu_s=0{,}4$ e $N=40\,\mathrm N$ il massimo è $0{,}4\cdot40\,\mathrm N=16\,\mathrm N$.

Per un corpo che si suppone fermo, prima si ricava dalle equazioni di equilibrio l'attrito necessario, con il suo verso. Poi si confronta il suo modulo, indicato con $f_{\mathrm{rich}}$ (attrito richiesto), con $\mu_s N$. La quiete è ammissibile, cioè il corpo resta davvero fermo, se $f_{\mathrm{rich}}\leq\mu_sN$ e il corpo resta a contatto con la superficie. Su una rampa senza altre forze parallele al piano, l'attrito richiesto compensa la componente del peso verso la discesa, quindi è diretto verso la salita e vale $P_\parallel$.

Se una fune tira lungo la salita con tensione $T$, il bilancio lungo la rampa, con asse positivo in salita, è $T+f_x-P_\parallel=0$, dove $f_x$ è la componente dell'attrito. Si ricava $f_x=P_\parallel-T$. Il segno di $f_x$ cambia quando $T$ supera $P_\parallel$. Con $P_\parallel=12\,\mathrm N$ e $T=15\,\mathrm N$ il risultato è
$$
f_x=12\,\mathrm N-15\,\mathrm N=-3\,\mathrm N.
$$
Il segno negativo indica che l'attrito necessario è diretto verso la discesa, e il suo modulo è $3\,\mathrm N$. Se il limite $\mu_sN$ vale $4\,\mathrm N$, la quiete è ammissibile perché $3\,\mathrm N\leq4\,\mathrm N$. Con gli stessi dati la quiete è ammissibile per tutte le tensioni comprese fra $12\,\mathrm N-4\,\mathrm N=8\,\mathrm N$ e $12\,\mathrm N+4\,\mathrm N=16\,\mathrm N$.
:::

:::osservazione{titolo="Pendenza massima senza fune"}
Su una rampa dove agiscono soltanto peso, normale e attrito, l'attrito richiesto è $P\sin\alpha$ verso la salita. Il peso preme il corpo sul piano e la normale vale $N=P\cos\alpha$, quindi l'attrito massimo è $\mu_sP\cos\alpha$. Per $0\leq\alpha<90^\circ$ il numero $P\cos\alpha$ è positivo, quindi si dividono i due membri per $P\cos\alpha$ senza cambiare il verso della disuguaglianza. Il rapporto $\dfrac{\sin\alpha}{\cos\alpha}$ si chiama **tangente** dell'angolo e si scrive $\tan\alpha$. Il simbolo $\Longleftrightarrow$ indica che le due condizioni sono equivalenti.

$$
P\sin\alpha\leq\mu_s P\cos\alpha
\quad\Longleftrightarrow\quad
\tan\alpha\leq\mu_s.
$$

Nel triangolo della rampa la tangente è il rapporto fra altezza e base, perché $\tan\alpha=\dfrac{h}{\ell}\cdot\dfrac{\ell}{b}=\dfrac hb$. Con $\mu_s=0{,}5$ e base $4\,\mathrm m$ la condizione è $\dfrac{h}{4\,\mathrm m}\leq0{,}5$, quindi l'altezza massima è $0{,}5\cdot4\,\mathrm m=2\,\mathrm m$.

Il peso $P$ non compare nella condizione finale. Due blocchi di peso diverso, con lo stesso coefficiente, hanno quindi la stessa pendenza limite, perché il peso moltiplica sia l'attrito richiesto sia l'attrito massimo. Con una trazione o una spinta in più le due quantità cambiano in modo diverso e al posto di $\tan\alpha\leq\mu_s$ si usa il bilancio completo.

La stessa relazione serve per misurare $\mu_s$. Si alza lentamente un'estremità della rampa finché il blocco comincia a scorrere. Se questo accade a $h=1{,}8\,\mathrm m$, con base orizzontale di $4\,\mathrm m$ misurata in quell'istante, la stima è
$$
\mu_s=\frac{1{,}8\,\mathrm m}{4\,\mathrm m}=0{,}45,
$$
perché nell'istante in cui inizia lo scorrimento l'attrito richiesto è uguale al massimo. Una prova isolata in cui il blocco resta fermo, per esempio a $h=1{,}6\,\mathrm m$ con la stessa base, dà soltanto $\mu_s\geq\dfrac{1{,}6}{4}=0{,}40$.

Nel grafico la retta inclinata è il rapporto $\dfrac fN=\dfrac{h}{4\,\mathrm m}$ fra attrito richiesto e normale.

::grafico{f="x/4;0.5" nomi="h (m),f/N" punti="2,0.5,pieno,C" legenda="\text{rapporto richiesto};\mu_s" xmin=0 xmax=3 ymin=0 ymax=1 titolo="Con base fissa di 4 m e coefficiente 0,5, le due curve si incontrano a un'altezza di 2 m."}
:::

## Corde inclinate simmetriche

::::teorema{#corde-inclinate titolo="Somma delle componenti verticali"}
Un anello di peso $P$ è appeso a due corde, una che sale verso sinistra e una che sale verso destra. Le due corde sono inclinate dello stesso angolo $\alpha$ rispetto all'orizzontale, con $0<\alpha\leq90^\circ$, e tirano l'anello in versi orizzontali opposti. Se le due tensioni hanno lo stesso modulo $T$, la condizione verticale di equilibrio è
$$
2T\sin\alpha=P.
$$
:::dimostrazione
Ogni tensione è l'ipotenusa di un triangolo rettangolo che ha per cateti la componente orizzontale e quella verticale. Il cateto opposto all'angolo $\alpha$ è la componente verticale, che ha quindi modulo $T\sin\alpha$ ed è diretta verso l'alto.

Le componenti orizzontali delle due tensioni sono uguali in modulo e opposte in verso, quindi la loro somma è zero. In verticale, con il verso positivo in alto, le due tensioni danno $T\sin\alpha+T\sin\alpha$ e il peso dà $-P$. La condizione $R_y=0$ è $2T\sin\alpha-P=0$.
:::
::::

:::esempio{titolo="Sostegno con corde poco inclinate"}
Per $P=48\,\mathrm N$ e $\sin\alpha=\dfrac{3}{5}$ la condizione $2T\sin\alpha=P$ diventa
$$
2T\cdot\frac35=48\,\mathrm N
\quad\Longrightarrow\quad
T=48\,\mathrm N\cdot\frac56=40\,\mathrm N.
$$
La componente verticale di ciascuna corda è $40\,\mathrm N\cdot\dfrac35=24\,\mathrm N$.

Se si riduce l'angolo a peso invariato, $\sin\alpha$ diminuisce, cioè diminuisce la frazione della tensione che agisce in verticale. La tensione cresce allora per dare la stessa componente verticale di $24\,\mathrm N$. Per corde perfettamente orizzontali $\sin\alpha=0$, la componente verticale è nulla per qualunque tensione e il sostegno del peso è impossibile con il solo schema descritto.
:::

::grafico{assi=0 uguale=1 vettori="0,0,-4,3,T;0,0,4,3;0,0,0,-6,P" etichette="2.4,1.25,T" punti="0,0,pieno,O" xmin=-5 xmax=5 ymin=-7 ymax=4 titolo="Lati orizzontali opposti e lati verticali concordi. In scala, 1 unità grafica rappresenta 8 N"}

:::esempio{titolo="Corde inclinate ad angoli diversi"}
Un anello di peso $50\,\mathrm N$ è sostenuto da due corde con inclinazioni diverse. Le tensioni si indicano con $T_\mathrm s$ per la corda di sinistra e $T_\mathrm d$ per quella di destra. La corda di sinistra ha componente orizzontale $\dfrac45T_\mathrm s$ e verticale $\dfrac35T_\mathrm s$. La corda di destra ha componente orizzontale $\dfrac35T_\mathrm d$ e verticale $\dfrac45T_\mathrm d$.

In orizzontale le due componenti sono opposte, quindi sono uguali in modulo e $\dfrac45T_\mathrm s=\dfrac35T_\mathrm d$, cioè $4T_\mathrm s=3T_\mathrm d$ dopo aver moltiplicato per $5$. In verticale le due componenti sono verso l'alto e la loro somma è il peso. Le due equazioni valgono insieme:

$$
\begin{cases}
4T_\mathrm s=3T_\mathrm d,\\[2pt]
\dfrac35T_\mathrm s+\dfrac45T_\mathrm d=50\,\mathrm N.
\end{cases}
$$

Dalla prima equazione si ricava $T_\mathrm d=\dfrac43 T_\mathrm s$, quindi la tensione di destra è maggiore di quella di sinistra. Si sostituisce nella seconda:
$$
\begin{aligned}
\frac35T_\mathrm s+\frac45\cdot\frac43T_\mathrm s&=50\,\mathrm N\\[6pt]
\frac{9}{15}T_\mathrm s+\frac{16}{15}T_\mathrm s&=50\,\mathrm N\\[6pt]
\frac53T_\mathrm s&=50\,\mathrm N\\[6pt]
T_\mathrm s&=50\,\mathrm N\cdot\frac35=30\,\mathrm N.
\end{aligned}
$$
Quindi $T_\mathrm d=\dfrac43\cdot30\,\mathrm N=40\,\mathrm N$. Le componenti orizzontali valgono $\dfrac45\cdot30\,\mathrm N=24\,\mathrm N$ e $\dfrac35\cdot40\,\mathrm N=24\,\mathrm N$, uguali in modulo. Quelle verticali valgono $\dfrac35\cdot30\,\mathrm N=18\,\mathrm N$ e $\dfrac45\cdot40\,\mathrm N=32\,\mathrm N$, e la loro somma è $50\,\mathrm N$, cioè l'intero peso.

::grafico{assi=0 uguale=1 vettori="0,0,-24,18,Tₛ;0,0,24,32;0,0,0,-50,P" etichette="14.5,15.5,Tᵈ" punti="0,0,pieno,O" xmin=-28 xmax=28 ymin=-55 ymax=36 titolo="Le corde hanno tensioni diverse. I contributi orizzontali si compensano e quelli verticali sostengono 50 N."}
:::

## Contatto con un piano

:::osservazione{#contatto titolo="Normale e forze verticali"}
Un appoggio **senza adesione** è una superficie a cui il corpo non è incollato né agganciato. Una superficie di questo tipo spinge il corpo e non lo trattiene. Per un appoggio orizzontale senza adesione, come un tavolo, la normale è quindi diretta verso l'alto e il suo modulo è $N\geq0$.

Un corpo di peso $P$ è appoggiato su un tavolo e una corda verticale fissata al soffitto lo tira verso l'alto con tensione $T$. Con il verso positivo in alto il bilancio è $N+T-P=0$, quindi $N=P-T$. Con $P=60\,\mathrm N$ e $T=25\,\mathrm N$ la normale vale $35\,\mathrm N$. La formula dà $N\geq0$ soltanto per $0\leq T\leq P$. Con $T=P$ si trova il caso limite $N=0$. Per $T>P$ la formula darebbe una normale negativa, cioè una forza del tavolo verso il basso. Il semplice appoggio non esercita una forza di questo tipo, quindi per $T>P$ il corpo non resta fermo sul tavolo.

La normale è perpendicolare alla superficie nel punto di contatto. Se la superficie è inclinata, la normale è inclinata rispetto alla verticale. La normale non ha componente lungo un asse parallelo al piano, quindi non compare nell'equazione di equilibrio scritta lungo quell'asse.
:::

:::esempio{titolo="Una normale diretta verso il basso"}
Un corpo di peso $P=26\,\mathrm N$ viene premuto contro un soffitto orizzontale con una spinta verso l'alto di modulo $S$. Il soffitto sta sopra il corpo e lo spinge allontanandolo da sé, quindi la normale del soffitto è rivolta verso il basso. Con il verso positivo verso l'alto il bilancio è $S-P-N=0$, cioè $N=S-P$. Per $S=40\,\mathrm N$ si ottiene
$$
N=40\,\mathrm N-26\,\mathrm N=14\,\mathrm N,
$$
quindi il soffitto esercita $14\,\mathrm N$ verso il basso. Un appoggio posto sotto il corpo eserciterebbe la normale nel verso opposto, verso l'alto.

Se la spinta scende a $20\,\mathrm N$, la formula dà $N=20\,\mathrm N-26\,\mathrm N=-6\,\mathrm N$. Per mantenere la quiete il soffitto dovrebbe tirare il corpo verso l'alto con $6\,\mathrm N$. Un contatto senza adesione non fornisce quella forza, quindi il corpo si stacca dal soffitto. Per $S=26\,\mathrm N$ il contatto è alla soglia e la reazione vale zero.

::grafico{f="x-26" nomi="S (N),N (N)" punti="26,0,pieno,C;40,14,pieno,A" xmin=26 xmax=44 ymin=0 ymax=20 titolo="Per la spinta contro il soffitto, il ramo di equilibrio ha normale non negativa e inizia in C."}
:::

## Corpi premuti contro una parete

:::teorema{#parete titolo="Normale orizzontale e attrito verticale"}
Un corpo di peso $P$ è tenuto fermo contro una parete verticale da una forza orizzontale di modulo $S$, come un libro premuto con la mano contro il muro. La parete è verticale, quindi la sua normale è orizzontale. Se non agiscono altre forze orizzontali, l'equilibrio orizzontale dà $N=S$. L'attrito è parallelo alla parete, quindi è verticale. Se il peso è l'unica altra forza verticale, l'attrito richiesto è diretto verso l'alto e vale $P$. Il massimo dell'attrito statico è $\mu_sN=\mu_sS$, perciò la parete sostiene il corpo purché
$$
P\leq\mu_s S.
$$
Per $P=15\,\mathrm N$ e $\mu_s=0{,}25$ la condizione è $15\,\mathrm N\leq0{,}25\cdot S$, quindi la spinta minima è
$$
S=\frac{15\,\mathrm N}{0{,}25}=60\,\mathrm N.
$$
Se la spinta aumenta a $72\,\mathrm N$, il massimo dell'attrito cresce a $0{,}25\cdot72\,\mathrm N=18\,\mathrm N$, mentre l'attrito effettivo resta $15\,\mathrm N$, perché è fissato dal peso. La spinta orizzontale fa crescere la normale, e con la normale cresce il massimo dell'attrito verticale.
:::

:::esempio{titolo="Attrito verso il basso sulla parete"}
Un corpo pesa $18\,\mathrm N$ e riceve una spinta obliqua, con componente $S_x=32\,\mathrm N$ verso la parete e componente $S_y=24\,\mathrm N$ verso l'alto. In orizzontale la parete reagisce con una normale di $32\,\mathrm N$. In verticale, senza l'attrito, la somma è $24\,\mathrm N-18\,\mathrm N=6\,\mathrm N$ verso l'alto. Per mantenere la quiete serve quindi un attrito statico di modulo $6\,\mathrm N$ verso il basso. Con $\mu_s=0{,}25$ il massimo è $0{,}25\cdot32\,\mathrm N=8\,\mathrm N$. Poiché $6\,\mathrm N\leq8\,\mathrm N$, la configurazione è possibile.

Il verso dell'attrito si individua sommando tutte le altre componenti **tangenziali**, cioè parallele alla superficie di contatto. Qui sono il peso e $S_y$. Con il solo peso l'attrito sarebbe diretto verso l'alto. Poiché $S_y$ supera il peso, l'attrito è diretto verso il basso.
:::
