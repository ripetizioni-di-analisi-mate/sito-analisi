---
titolo: I principi della dinamica
sommario: Come isolare un corpo, costruire il diagramma delle forze e ricavare l'accelerazione su un piano o in curva.
---

## Forze e risultante

:::definizione{#risultante titolo="La somma delle forze"}
Una **forza** è una spinta o una trazione che un corpo esercita su un altro corpo, come la mano che spinge un carrello o la Terra che attira un sasso. Ogni forza nasce quindi da un'**interazione** fra due corpi. La forza è un **vettore**, cioè si disegna con una freccia che ha un **modulo** (il valore numerico), una **direzione** (la retta su cui sta) e un **verso** (indicato dalla punta). Si misura in **newton**, di simbolo $\mathrm N$, l'unità del Sistema Internazionale (SI). La lettera con la freccia, $\vec F$, indica il vettore; la lettera senza freccia, $F$, indica il modulo.

In questo capitolo si studia la **traslazione** di un corpo, cioè il moto in cui tutte le sue parti si spostano allo stesso modo, senza ruotare. Per studiarla si sceglie prima il corpo. Si disegnano poi soltanto le forze che altri corpi esercitano su quello scelto. Questo disegno è il **diagramma delle forze**. Per un libro sul tavolo contiene il peso (forza della Terra sul libro) e la forza del tavolo sul libro, mentre la forza del libro sul tavolo appartiene al diagramma del tavolo.

La **risultante** $\vec F_R$ (il pedice $R$ sta per «risultante») è la somma vettoriale delle frecce del diagramma, cioè la forza che da sola equivale a tutte. Per calcolarla si scelgono due assi perpendicolari $x$ e $y$, ciascuno con un verso positivo. La **componente** di una forza lungo un asse è la sua proiezione sull'asse, con segno $+$ se la forza punta nel verso positivo e $-$ nel caso opposto. Si possono sommare separatamente le componenti lungo i due assi.
$$
F_{Rx}=\sum_j F_{jx},\qquad F_{Ry}=\sum_j F_{jy}.
$$
Il simbolo $\sum$ (sigma maiuscola) indica una somma e l'indice $j$ numera le forze, quindi $F_{Rx}=F_{1x}+F_{2x}+\dots$

Il segno di ogni componente dipende dal verso scelto per l'asse. Una forza verso destra e una verso sinistra sulla stessa retta si sommano quindi con segni opposti. Su un tavolo orizzontale il peso e la **normale**, cioè la forza del tavolo perpendicolare alla sua superficie, sono verticali e contribuiscono soltanto lungo l'asse verticale. Due spinte orizzontali contribuiscono soltanto lungo l'altro asse. Una forza obliqua contribuisce lungo entrambi gli assi.

Il modulo della risultante si ottiene con il teorema di Pitagora, perché le due componenti sono i cateti di un triangolo rettangolo di cui la risultante è l'ipotenusa. Con $F_{Rx}=6\,\mathrm N$ e $F_{Ry}=8\,\mathrm N$ si ha $F_R=\sqrt{6^2+8^2}\,\mathrm N=10\,\mathrm N$.
:::

:::esempio{titolo="Carrello spinto da due lati"}
Scelto positivo il verso a destra, le spinte sono $+9\,\mathrm{N}$ e $-5\,\mathrm{N}$. La componente risultante orizzontale è $(9-5)\,\mathrm N=4\,\mathrm{N}$, positiva, quindi verso destra. In verticale agiscono il peso $P$ e la normale $N$. Se il carrello resta sul piano orizzontale e nessun'altra forza agisce in verticale, la normale compensa il peso. Sommando i vettori rimane quindi la sola componente orizzontale di $4\,\mathrm{N}$.

::grafico{assi=0 uguale=1 poligoni="-1,-0.5 1,-0.5 1,0.5 -1,0.5" linee="-3,-0.55 3,-0.55" vettori="0,0,2.7,0,F₁;0,0,-1.5,0,F₂;0,0,0,1.2,N;0,0,0,-1.2,P" xmin=-3.2 xmax=3.4 ymin=-1.7 ymax=1.7 titolo="Diagramma del carrello. Le due spinte hanno versi opposti, come peso e normale."}
:::

:::esempio{titolo="Compensare una sola componente"}
Una slitta su ghiaccio orizzontale riceve una spinta di $12\,\mathrm N$ verso est. Una seconda fune la tira in una direzione compresa fra nord e ovest, più vicina al nord. Negli assi orizzontali con est e nord positivi, le sue componenti valgono $(-3;4)\,\mathrm N$: la scrittura $(a;b)$ indica la componente $a$ verso est e la componente $b$ verso nord, quindi la fune tira di $3\,\mathrm N$ verso ovest e di $4\,\mathrm N$ verso nord. Il peso e la normale si compensano sull'asse verticale. Sommando le componenti lungo i due assi orizzontali si ottiene

$$
\vec F_R=\bigl(12-3;0+4\bigr)\,\mathrm N=(9;4)\,\mathrm N.
$$

La fune riduce la componente verso est da $12\,\mathrm N$ a $9\,\mathrm N$ e introduce una componente di $4\,\mathrm N$ verso nord. Per una risultante diretta esattamente verso est si aggiunge una trazione di $4\,\mathrm N$ verso sud, di componenti $(0;-4)\,\mathrm N$, che annulla la componente verso nord. Restano allora $9\,\mathrm N$ lungo l'asse est-ovest. Se si invertisse solo il verso di quell'asse, la componente diventerebbe $-9\,\mathrm N$ e la forza continuerebbe a puntare a est, perché è cambiato l'asse e non la forza. Per questo, insieme a ogni componente di forza o di accelerazione, si dichiara quale verso dell'asse è positivo.
:::

## Primo principio

:::teorema{#inerzia titolo="Equilibrio e velocità costante"}
In un **riferimento inerziale**, un corpo con risultante nulla mantiene la propria velocità vettoriale. Se è fermo rimane fermo. Se si muove, continua lungo una retta con velocità costante, cioè di **moto rettilineo uniforme**.

Un **riferimento** è il corpo, con i suoi assi, rispetto al quale si misurano posizioni e velocità, per esempio il pavimento dell'aula; si chiama **inerziale** se in esso vale questo principio. Mantenere la velocità vettoriale significa mantenerne modulo, direzione e verso. Il modulo della velocità si chiama **rapidità**.

Un laboratorio fermo rispetto al suolo si può trattare come inerziale in molti esperimenti di breve durata. Un sistema di assi solidale a un veicolo che accelera, frena o curva non è inerziale. Su un pianale liscio che accelera verso destra a $2\,\mathrm{m/s^2}$, per esempio, un disco con risultante nulla ha accelerazione $(0-2)\,\mathrm{m/s^2}=-2\,\mathrm{m/s^2}$ rispetto al pianale. Le leggi del capitolo si applicano nel riferimento inerziale scelto, di solito il suolo.
:::

:::esempio{titolo="Quiete e traslazione con risultante nulla"}
Un libro fermo sul tavolo riceve una forza verso il basso dalla Terra e una verso l'alto dal tavolo. Se i moduli coincidono, la somma vale zero e la velocità resta nulla. Su un binario orizzontale con attrito trascurabile, un carrello già in moto ha ugualmente risultante nulla, perché peso e normale si compensano e nessuna forza agisce in orizzontale. Il carrello continua allora con la velocità che possiede. In entrambi i casi la risultante è zero e le velocità sono diverse, perciò la risultante nulla stabilisce soltanto che la velocità non cambia.

Se il carrello passa davanti a un sensore a $2\,\mathrm{m/s}$ e la risultante resta nulla, nei successivi $3\,\mathrm s$ percorre $(2)(3)\,\mathrm m=6\,\mathrm m$. Nel grafico della velocità in funzione del tempo il carrello è la retta $v=2\,\mathrm{m/s}$ (punto $A$ a $3\,\mathrm s$) e il libro la retta $v=0$ (punto $B$). La **pendenza** di una retta è l'aumento della grandezza verticale diviso per l'aumento di quella orizzontale; in questo grafico è l'accelerazione, quindi vale zero per entrambe le rette. Il grafico della posizione, invece, avrebbe pendenza $2\,\mathrm{m/s}$, perché lì la pendenza è la velocità. Per riconoscere il moto uniforme si controlla quindi quale grandezza è sull'asse verticale. L'altezza del grafico della velocità indica quanto rapidamente avanza il carrello, mentre la pendenza indica l'accelerazione.

::grafico{f="2;0" punti="3,2,pieno,A;3,0,pieno,B" xmin=0 xmax=4 ymin=-1 ymax=4 nomi="t (s),v (m/s)" legenda="\text{carrello};\text{libro}" titolo="Il carrello e il libro hanno velocità diverse. Entrambe le rette hanno pendenza zero."}
:::

:::attenzione
Una forza costante orientata nel verso del moto fa variare la velocità, se le altre forze non la compensano. Su una strada reale una bicicletta riceve resistenze opposte al moto, come quella dell'aria. A velocità costante la risultante è nulla, quindi la spinta ha lo stesso modulo delle resistenze. Nel modello senza resistenze il moto uniforme si mantiene anche senza una spinta.
:::

## Secondo principio

:::teorema{#newton titolo="Risultante, massa e accelerazione"}
L'**accelerazione** è la variazione della velocità divisa per il tempo in cui avviene: $3\,\mathrm{m/s^2}$ significa che la velocità varia di $3\,\mathrm{m/s}$ ogni secondo. In un riferimento inerziale, per un corpo di massa $m$ costante, accelerazione e risultante sono legate da
$$
\vec F_R=m\vec a,\qquad F_{Rx}=ma_x,\qquad F_{Ry}=ma_y.
$$
La relazione vale in ogni istante, e da essa si ricavano $a=\dfrac{F_R}{m}$ e $m=\dfrac{F_R}{a}$. Poiché $m$ è positiva, $\vec a$ ha la stessa direzione e lo stesso verso di $\vec F_R$, perché moltiplicare un vettore per un numero positivo ne cambia solo il modulo. Una massa più grande richiede una risultante maggiore per ottenere la stessa accelerazione. Dalla relazione si legge anche l'unità $1\,\mathrm{N}=1\,\mathrm{kg\,m/s^2}$: un newton è la risultante che dà a un chilogrammo un'accelerazione di un metro al secondo quadrato.
:::

:::esempio{titolo="Accelerazione da una risultante con segno"}
Un carrello di $2\,\mathrm{kg}$ subisce una risultante orizzontale di $-6\,\mathrm{N}$, con destra positiva. La sua accelerazione è
$$
a_x=\frac{-6}{2}\,\mathrm{m/s^2}=-3\,\mathrm{m/s^2},
$$
cioè punta verso sinistra. Se il carrello inizialmente va verso destra, la velocità è positiva e l'accelerazione negativa, quindi in un primo intervallo il carrello rallenta. Se invece va verso sinistra, velocità e accelerazione hanno lo stesso segno, quindi la rapidità aumenta. La legge fissa l'accelerazione. Per sapere come cambia la rapidità serve anche la velocità di partenza.

Nel grafico della risultante in funzione dell'accelerazione, la retta $F=2a$ passa per l'origine con pendenza uguale alla massa; $A$ è questo esempio, $B$ una risultante di $4\,\mathrm N$ con $a=2\,\mathrm{m/s^2}$.

::grafico{f="2*x" punti="-3,-6,pieno,A;2,4,pieno,B" xmin=-4 xmax=4 ymin=-9 ymax=9 nomi="a (m/s²),F (N)" titolo="Per massa 2 kg il rapporto fra risultante e accelerazione è costante."}
:::

:::osservazione{titolo="Risultante e forza letta dal sensore"}
Un motore tira un carrello di $2\,\mathrm{kg}$ e un sensore di forza misura soltanto il tiro del motore. A un tiro di $6\,\mathrm N$ si misura $a=2\,\mathrm{m/s^2}$ e a un tiro di $10\,\mathrm N$ si misura $a=4\,\mathrm{m/s^2}$. Per il secondo principio la risultante vale $(2)(2)\,\mathrm N=4\,\mathrm N$ nella prima prova e $(2)(4)\,\mathrm N=8\,\mathrm N$ nella seconda. In entrambe la forza misurata supera la risultante di $2\,\mathrm N$, quindi sul carrello agisce anche una resistenza costante di $2\,\mathrm N$ opposta al tiro. L'**intercetta** di una retta è il valore in cui la retta incontra l'asse verticale. Nel grafico del tiro in funzione dell'accelerazione l'intercetta è $2\,\mathrm N$ e rappresenta la resistenza. Nel grafico della risultante in funzione dell'accelerazione l'intercetta è zero.
:::

:::esempio{titolo="La misura di una bilancia in ascensore"}
Una persona di massa $60\,\mathrm{kg}$ sale in ascensore. Negli ultimi istanti prima di fermarsi l'ascensore rallenta, quindi l'accelerazione, di modulo $0{,}5\,\mathrm{m/s^2}$, è opposta alla velocità e punta verso il basso. Scegliendo l'alto positivo e usando $g=10\,\mathrm{m/s^2}$, il peso ha modulo $600\,\mathrm N$. La bilancia esercita verso l'alto una normale $N$ e indica il suo modulo, uguale a quello della forza con cui la persona la preme (terzo principio, paragrafo seguente). Il bilancio verticale è

$$
\begin{aligned}
N-(60)(10)\,\mathrm N&=(60)(-0{,}5)\,\mathrm N,\\[6pt]
N-600\,\mathrm N&=-30\,\mathrm N,\\[6pt]
N&=(600-30)\,\mathrm N=570\,\mathrm N.
\end{aligned}
$$

La lettura della bilancia, in newton, è quindi $570\,\mathrm N$. Il peso gravitazionale conserva il valore di $600\,\mathrm N$. La differenza $30\,\mathrm N$ è il modulo della risultante, diretta verso il basso durante il rallentamento. Una salita a velocità costante darebbe invece $N=600\,\mathrm N$, come un ascensore fermo, perché in entrambi i casi l'accelerazione è nulla e quindi la risultante è zero.

::grafico{assi=0 uguale=1 poligoni="-0.35,-0.22 0.35,-0.22 0.35,0.55 -0.35,0.55" linee="-1,-0.25 1,-0.25" vettori="0,0,0,1.9,N;0,0,0,-2,P" xmin=-1.7 xmax=1.7 ymin=-2.5 ymax=2.5 titolo="La persona riceve una normale di 570 N verso l'alto e un peso di 600 N verso il basso."}
:::

## Terzo principio

:::teorema{#azione-reazione titolo="Le due forze di un'interazione"}
Se $A$ esercita una forza su $B$, allora $B$ esercita su $A$ una forza con pari modulo e verso opposto.
$$
\vec F_{A\to B}=-\vec F_{B\to A}.
$$
Il simbolo $\vec F_{A\to B}$ indica la forza di $A$ su $B$; il segno meno indica il vettore opposto. Le due forze sono dello stesso tipo (entrambe di contatto, oppure entrambe gravitazionali), sono simultanee, cioè esistono nello stesso istante, e interessano corpi differenti. Quindi nel diagramma relativo a un solo corpo compare un solo membro della coppia.

Un **sistema** è un insieme di corpi studiati insieme. Le forze **interne** sono scambiate fra corpi del sistema, quelle **esterne** provengono da corpi fuori dal sistema. Se si studia l'insieme dei due corpi, le due forze della coppia sono interne e la loro somma è nulla, quindi la risultante sul sistema è la somma delle sole forze esterne.
:::

:::esempio{titolo="Due pattinatori che si spingono"}
Su ghiaccio quasi privo di attrito, due pattinatori di $40\,\mathrm{kg}$ e $60\,\mathrm{kg}$ si spingono. Se la forza orizzontale di contatto è $60\,\mathrm{N}$, per il terzo principio ciascuno riceve una forza di quel modulo, in versi opposti. Le accelerazioni sono opposte e i moduli valgono
$$
a_{40}=\frac{60}{40}\,\mathrm{m/s^2}=1{,}5\,\mathrm{m/s^2},\qquad a_{60}=\frac{60}{60}\,\mathrm{m/s^2}=1\,\mathrm{m/s^2}.
$$
La forza è la stessa e le masse sono diverse, quindi il pattinatore di massa minore ha l'accelerazione maggiore.

::grafico{assi=0 uguale=1 poligoni="-2,-0.55 -1,-0.55 -1,0.55 -2,0.55;1,-0.55 2,-0.55 2,0.55 1,0.55" vettori="-1.5,0,-3.1,0,F;1.5,0,3.1,0,F" xmin=-3.7 xmax=3.7 ymin=-1.6 ymax=1.6 titolo="Le due frecce della forza orizzontale appartengono a due corpi distinti."}
:::

:::esempio{titolo="Due carrelli collegati da un filo"}
I carrelli $A$ e $B$, di masse $2\,\mathrm{kg}$ e $4\,\mathrm{kg}$, sono collegati da un filo ideale teso. Un **filo ideale** ha massa trascurabile e non si allunga. Il filo tira i due carrelli con forze dello stesso modulo $T$, che si chiama **tensione**. Il carrello $B$, davanti ad $A$, è trainato verso destra con $24\,\mathrm N$. Le resistenze orizzontali sono trascurabili. I due carrelli hanno la stessa accelerazione perché il filo mantiene costante la loro distanza.

Nel sistema dei due carrelli, di massa $6\,\mathrm{kg}$, la tensione è interna e i suoi due contributi si annullano, quindi resta il solo traino. Sul solo carrello $A$ l'unica forza orizzontale è la tensione verso destra. Il bilancio comune e quello del solo carrello $A$ danno

$$
\begin{aligned}
a&=\frac{24}{2+4}\,\mathrm{m/s^2}=4\,\mathrm{m/s^2},\\[6pt]
T&=(2)(4)\,\mathrm N=8\,\mathrm N.
\end{aligned}
$$

Come controllo, su $B$ il tiro del filo è verso sinistra. La risultante su $B$ è quindi $24\,\mathrm N-8\,\mathrm N=16\,\mathrm N$, uguale a $(4)(4)\,\mathrm N$, cioè massa di $B$ per accelerazione comune. Il sistema dei due carrelli dà l'accelerazione senza conoscere la tensione, e il solo carrello $A$ dà poi la tensione.

::grafico{assi=0 uguale=1 poligoni="-2.6,-0.45 -1.4,-0.45 -1.4,0.45 -2.6,0.45;0.6,-0.45 1.8,-0.45 1.8,0.45 0.6,0.45" linee="-1.4,0 0.6,0" vettori="-2,0,-1.2,0,T;1.2,0,0.4,0,T;1.2,0,3.6,0,24 N" etichette="-2.2,0.28,A;1,0.28,B" xmin=-3 xmax=4.2 ymin=-1.2 ymax=1.2 titolo="Il filo tira i carrelli l'uno verso l'altro. La forza di traino di 24 N agisce sul solo B."}
:::

:::attenzione
Peso e normale del tavolo su un libro possono avere moduli uguali e versi opposti. Non sono però una coppia del terzo principio, perché si applicano entrambi al libro. La forza accoppiata al peso è la forza gravitazionale del libro sulla Terra, applicata alla Terra. La forza accoppiata alla normale è la forza di contatto del libro sul tavolo, applicata al tavolo.

Per esempio, se il libro pesa $20\,\mathrm N$ e una mano lo preme verso il basso con $5\,\mathrm N$, la normale vale $25\,\mathrm N$ e non è più uguale al peso. I moduli delle due forze di una coppia del terzo principio, invece, sono sempre uguali.
:::

## Peso, molla e attrito

:::definizione{#forze titolo="Modelli delle forze più comuni"}
Il **peso** è la forza con cui la Terra attira un corpo. Vicino alla superficie, il suo modulo è $P=mg$ e il verso è verticale verso il basso. Qui $g$ è l'**accelerazione di gravità**, cioè l'accelerazione di un corpo soggetto al solo peso; dipende dal luogo e si usa il valore indicato nell'esercizio, spesso $9{,}81\,\mathrm{m/s^2}$ vicino al suolo o l'arrotondamento $10\,\mathrm{m/s^2}$. La massa si misura in chilogrammi e descrive l'**inerzia** del corpo, cioè quanto si oppone alle variazioni della sua velocità; è la stessa in ogni luogo. Il peso si misura in newton e dipende da $g$. Un corpo di $2\,\mathrm{kg}$ pesa $(2)(9{,}81)\,\mathrm N=19{,}62\,\mathrm N$ dove $g=9{,}81\,\mathrm{m/s^2}$ e $(2)(1{,}6)\,\mathrm N=3{,}2\,\mathrm N$ dove $g=1{,}6\,\mathrm{m/s^2}$, come sulla Luna. Dalla formula del peso si ricavano $m=\dfrac{P}{g}$ e $g=\dfrac{P}{m}$.

Una **molla ideale** è una molla di massa trascurabile. La sua **lunghezza naturale** è quella che ha quando nessuna forza la deforma. La **deformazione** $x$ è la lunghezza attuale meno quella naturale, quindi $x>0$ per un allungamento e $x<0$ per una compressione. Una molla di lunghezza naturale $18\,\mathrm{cm}$ compressa a $14\,\mathrm{cm}$ ha $x=(0{,}14-0{,}18)\,\mathrm m=-0{,}04\,\mathrm m$. Nel **regime lineare**, cioè per deformazioni abbastanza piccole, la molla esercita la forza data dalla **legge di Hooke**
$$
F_e=-kx.
$$
La lettera $k$ è la **costante elastica**, o **rigidezza**, in $\mathrm{N/m}$: con $k=160\,\mathrm{N/m}$ la molla esercita $1{,}6\,\mathrm N$ per ogni centimetro di deformazione. Il modulo $k\lvert x\rvert$ è direttamente proporzionale alla deformazione, e da esso si ricavano $k=\dfrac{\lvert F_e\rvert}{\lvert x\rvert}$ e $\lvert x\rvert=\dfrac{\lvert F_e\rvert}{k}$. Nel grafico di $F_e$ in funzione di $x$ la legge è una retta per l'origine di pendenza $-k$.

Il segno meno indica che la forza è di **richiamo**, cioè opposta alla deformazione. Con $x>0$ per un allungamento, la molla tira verso la configurazione naturale. Con $x<0$ per una compressione, spinge nel verso positivo: per la molla compressa di prima con $k=160\,\mathrm{N/m}$ si ha $F_e=-160\cdot(-0{,}04)\,\mathrm N=+6{,}4\,\mathrm N$. Se più molle agiscono sullo stesso corpo, le loro forze elastiche si sommano come le altre forze del diagramma.
:::

:::osservazione{#attrito titolo="Contatto, attrito statico e dinamico"}
La normale è la componente della forza di contatto perpendicolare alla superficie e si indica con $N$ (in corsivo, mentre il newton $\mathrm N$ è in tondo); la componente parallela, o tangenziale, è l'**attrito**. Su un piano orizzontale, senza altre forze verticali e con accelerazione verticale nulla, si ha $N-mg=0$, quindi $N=mg$. Se si tira verso l'alto o si cambia inclinazione, occorre rifare la somma delle forze perpendicolari: con una trazione verso l'alto $T$ si ha $N=mg-T$, con una spinta verso il basso $F$ si ha $N=mg+F$.

Quando il corpo **scivola** sul piano, cioè si muove rispetto alla superficie, agisce l'**attrito dinamico**. Il suo modulo è $\mu_dN$ e il suo verso è opposto allo scorrimento relativo, cioè al moto del corpo rispetto alla superficie. Il numero $\mu_d$ (la lettera greca $\mu$ si legge «mi») è il **coefficiente di attrito dinamico**; dipende dai materiali ed è privo di unità, perché è il rapporto $\dfrac{f_d}{N}$ fra due forze.

Quando il corpo resta fermo rispetto al piano, l'**attrito statico** assume il valore che rende nulla la somma delle forze parallele al piano, fino al **limite statico** $\mu_sN$ ($\mu_s$ è il coefficiente di attrito statico). Se una spinta di $5\,\mathrm{N}$ può essere bilanciata e il limite è $12\,\mathrm{N}$, l'attrito effettivo vale $5\,\mathrm{N}$, nel verso opposto alla spinta. Se la spinta supera il limite, quel contatto non può mantenere la quiete e il corpo scivola. Il coefficiente statico minimo per la quiete è l'attrito richiesto diviso per la normale. Con $8\,\mathrm N$ richiesti e $N=40\,\mathrm N$ si ha $\mu_s\ge\dfrac{8}{40}=0{,}20$.
:::

:::esempio{titolo="Una spinta crescente e la soglia di scorrimento"}
Si spinge orizzontalmente un blocco fermo. Il massimo attrito statico vale $12\,\mathrm{N}$. Prima dello scorrimento la somma delle forze orizzontali è zero, perciò ogni incremento della spinta richiede un incremento uguale del modulo dell'attrito (retta $f=F$ nel grafico). Nel punto $S$, la **soglia di scorrimento**, la spinta è $12\,\mathrm N$ e la quiete è appena possibile. Per una spinta maggiore il blocco scivola e l'attrito dinamico può avere un modulo differente. Per determinare l'accelerazione durante lo scorrimento occorre allora il coefficiente dinamico.

::grafico{linee="0,0 12,12" punti="12,12,pieno,S" xmin=0 xmax=14 ymin=0 ymax=14 nomi="F (N),f (N)" titolo="Fino al valore di soglia il modulo dell'attrito statico segue quello della spinta."}
:::

:::esempio{titolo="Dal contatto fermo allo scorrimento"}
Un blocco di $5\,\mathrm{kg}$ è inizialmente fermo su un piano orizzontale. Un filo verticale lo tira verso l'alto con $10\,\mathrm N$. Con $g=10\,\mathrm{m/s^2}$ e accelerazione verticale zero, il contatto esercita $N=(50-10)\,\mathrm N=40\,\mathrm N$. I coefficienti sono $\mu_s=0{,}30$ e $\mu_d=0{,}20$. Il limite statico è $0{,}30\cdot40\,\mathrm N=12\,\mathrm N$. Si confronta ogni spinta orizzontale verso destra con questa soglia, nell'ipotesi che il blocco parta da fermo.

| Spinta | Attrito in modulo | Accelerazione verso destra |
|---:|---:|---:|
| $8\,\mathrm N$ | $8\,\mathrm N$ | $0\,\mathrm{m/s^2}$ |
| $12\,\mathrm N$ | $12\,\mathrm N$ | $0\,\mathrm{m/s^2}$ |
| $15\,\mathrm N$ | $8\,\mathrm N$ durante lo scorrimento | $1{,}4\,\mathrm{m/s^2}$ |

Con $8\,\mathrm N$ e $12\,\mathrm N$ la spinta non supera la soglia, quindi il blocco resta fermo e l'attrito statico la bilancia. Nel terzo caso, una forza d'attrito di $15\,\mathrm N$ sarebbe necessaria per la quiete e supererebbe la soglia, perciò il blocco scivola. Quando il blocco si muove rispetto al piano, il modulo dell'attrito è $0{,}20\cdot40\,\mathrm N=8\,\mathrm N$, verso sinistra. Il bilancio lungo il piano diventa $a_x=\dfrac{15-8}{5}\,\mathrm{m/s^2}=1{,}4\,\mathrm{m/s^2}$. La condizione di scorrimento si stabilisce quindi prima di scegliere il coefficiente.

::grafico{assi=0 uguale=1 poligoni="-0.55,-0.4 0.55,-0.4 0.55,0.42 -0.55,0.42" linee="-1.6,-0.42 1.8,-0.42" vettori="0,0,0,-2,P;0,0,0,1.6,N;0.4,0,0.4,0.4;0,0,0.6,0;0,0,-0.32,0" etichette="0.48,0.54,T 10 N;0.7,0.03,F 15 N;-0.74,0.15,f 8 N" xmin=-2 xmax=2 ymin=-2.4 ymax=2.1 titolo="Nel caso della spinta di 15 N, la trazione verticale riduce la normale e l'attrito dinamico agisce verso sinistra."}
:::

## Piano inclinato e moto circolare

:::teorema{#applicazioni titolo="Scegliere gli assi lungo il moto"}
Un **piano inclinato** è una superficie piana che forma un angolo $\alpha$ (lettera greca «alfa») con l'orizzontale. L'asse parallelo al piano è comodo per lo scorrimento e l'altro asse è perpendicolare alla superficie. Con questa scelta la normale sta tutta sull'asse perpendicolare e l'accelerazione tutta su quello parallelo, perché il corpo resta sul piano.

Il peso si scompone lungo i due assi. In un triangolo rettangolo il **seno** di un angolo acuto è il cateto opposto diviso per l'ipotenusa, il **coseno** è il cateto adiacente diviso per l'ipotenusa. Il peso è l'ipotenusa del triangolo formato dalle sue due componenti, e l'angolo fra il peso e l'asse perpendicolare al piano è uguale ad $\alpha$. Quindi il peso ha componente $mg\sin\alpha$ verso valle e componente $mg\cos\alpha$ verso il piano.

In assenza di altre forze perpendicolari e con contatto mantenuto, la somma delle forze perpendicolari è zero, cioè $N-mg\cos\alpha=0$, quindi $N=mg\cos\alpha$. Il piano è **liscio** se l'attrito è trascurabile. Se il piano è liscio, lungo il piano agisce soltanto la componente del peso, e l'accelerazione verso valle è
$$
a=\frac{mg\sin\alpha}{m}=g\sin\alpha.
$$
La massa si semplifica perché appartengono allo stesso corpo sia il peso sia l'inerzia, quindi corpi di massa diversa hanno la stessa accelerazione sullo stesso piano liscio. Per $\alpha=0$ si ha $\sin0^\circ=0$, quindi l'accelerazione è nulla lungo il piano orizzontale. All'aumentare dell'angolo il seno si avvicina a $1$, perciò l'accelerazione si avvicina a $g$ nel limite verticale, mentre la componente del peso lungo il piano si avvicina al peso intero.
:::

:::esempio{titolo="Piano liscio a trenta gradi"}
Un blocco di $4\,\mathrm{kg}$ scivola su una pendenza liscia a $30^\circ$ e si assume $g=10\,\mathrm{m/s^2}$. Il peso vale $(4)(10)\,\mathrm N=40\,\mathrm{N}$. Poiché $\sin30^\circ=\dfrac12$, la componente lungo il piano è $40\sin30^\circ\,\mathrm{N}=20\,\mathrm{N}$. La normale compensa la componente perpendicolare al piano, che vale $40\cos30^\circ\,\mathrm N\simeq34{,}6\,\mathrm N$. Applicando il secondo principio in direzione di valle si ottiene $a=\dfrac{20}{4}\,\mathrm{m/s^2}=5\,\mathrm{m/s^2}$. Nella figura la normale $N$ è perpendicolare al piano e $P_\parallel$ è la componente del peso lungo la rampa.

::grafico{assi=0 uguale=1 linee="-3,-1.73 3,1.73" punti="0,0,pieno,B" vettori="0,0,0,-2,P;0,0,-0.866025,1.5,N;0,0,-0.866025,-0.5" etichette="-1.35,-0.5,P∥" xmin=-3.7 xmax=3.7 ymin=-2.5 ymax=2.3 titolo="N è perpendicolare al piano. P∥ è la proiezione del peso lungo la rampa."}
:::

:::esempio{titolo="Una spinta orizzontale su una rampa liscia"}
Una rampa ha altezza, base e lato inclinato in rapporto $3:4:5$, cioè l'altezza misura $3$ parti, la base $4$ e il lato inclinato $5$. Il lato inclinato è l'ipotenusa, quindi $\sin\alpha=\dfrac35$ e $\cos\alpha=\dfrac45$. Un blocco di $5\,\mathrm{kg}$ è spinto orizzontalmente verso la parte alta con una forza di $25\,\mathrm N$. Si prende $g=10\,\mathrm{m/s^2}$, quindi il peso vale $50\,\mathrm N$. La spinta è orizzontale e forma con il piano lo stesso angolo $\alpha$ che forma la base, perciò la sua componente parallela al piano si calcola con il coseno. Il peso è verticale e la sua componente parallela si calcola con il seno, come nel blocco precedente. I moduli delle componenti parallele valgono $25\cdot\dfrac45\,\mathrm N=20\,\mathrm N$ in salita per la spinta e $50\cdot\dfrac35\,\mathrm N=30\,\mathrm N$ in discesa per il peso.

Con salita positiva si ottiene $a_x=\dfrac{20-30}{5}\,\mathrm{m/s^2}=-2\,\mathrm{m/s^2}$, quindi l'accelerazione punta verso valle. La spinta ha anche una componente perpendicolare al piano, diretta verso il piano, di modulo $25\cdot\dfrac35\,\mathrm N=15\,\mathrm N$. Anche il peso preme verso il piano con $50\cdot\dfrac45\,\mathrm N=40\,\mathrm N$. Perché il blocco resti sulla rampa, la somma delle forze perpendicolari deve essere zero, quindi serve $N=(40+15)\,\mathrm N=55\,\mathrm N$. Con una spinta parallela di pari intensità, invece, il contributo perpendicolare della spinta sarebbe zero e la normale varrebbe $40\,\mathrm N$. Le due forze hanno uguale modulo e proiezioni diverse.

::grafico{assi=0 uguale=1 linee="-3,-2.25 3,2.25" vettori="0,0,0,-2.5,P;0,0,1.25,0,F;0,0,-1.65,2.2,N" punti="0,0,pieno" xmin=-3.5 xmax=3.5 ymin=-3 ymax=2.8 titolo="Il peso è verticale e la spinta è orizzontale. Nessuna delle due è parallela all'asse della rampa."}
:::

:::osservazione{#risultante-radiale titolo="La risultante che tiene il corpo in curva"}
Un corpo che percorre una circonferenza di raggio $r$ con rapidità costante $v$ è in **moto circolare uniforme**. La velocità ha modulo costante e cambia continuamente direzione, perché in ogni punto è tangente alla circonferenza. Per questo il corpo ha un'accelerazione, detta **accelerazione centripeta**, che vale $\dfrac{v^2}{r}$ e punta verso il centro. Per il secondo principio la somma delle componenti delle forze lungo il raggio, prese positive verso il centro, è quindi
$$
F_R=m\frac{v^2}{r}.
$$
Poiché $v$ compare al quadrato, a massa e raggio fissi una rapidità doppia richiede una risultante quattro volte maggiore. A rapidità fissa, un raggio minore richiede una risultante maggiore.

La risultante radiale può essere data dall'attrito della strada, dalla tensione di un filo o da una combinazione di più forze. In un diagramma si riportano le interazioni effettive, cioè le forze che altri corpi esercitano sul corpo. La parola *centripeta* significa «diretta verso il centro» e specifica il verso della risultante richiesta. Se la risultante radiale viene a mancare, per esempio perché il filo si spezza, per il primo principio il corpo prosegue in linea retta lungo la tangente.
:::

:::esempio{titolo="Ruota su un piano orizzontale"}
Un piccolo corpo di $1\,\mathrm{kg}$ percorre una circonferenza di raggio $2\,\mathrm{m}$ a $4\,\mathrm{m/s}$. Peso e normale si bilanciano in verticale. La forza orizzontale richiesta è $1\cdot\dfrac{4^2}{2}\,\mathrm{N}=8\,\mathrm{N}$, verso il centro. Il corpo è appoggiato su un disco che ruota ed è **solidale** al disco, cioè ruota con esso senza scivolare. Il corpo è fermo rispetto al disco, quindi la forza verso il centro è l'attrito statico. Se il limite di questo attrito è inferiore a $8\,\mathrm{N}$, il corpo non può restare solidale al disco a quella distanza e rapidità.

Con $\mu_s=0{,}5$ e $g=10\,\mathrm{m/s^2}$, la normale vale $(1)(10)\,\mathrm N=10\,\mathrm N$ e il limite di quel contatto vale $0{,}5\cdot10\,\mathrm N=5\,\mathrm N$. La rapidità massima del moto solidale è quella per cui la richiesta uguaglia il limite.
$$
\begin{aligned}
1\cdot\frac{v^2}{2}&=5,\\[6pt]
v^2&=10,\\[6pt]
v&=\sqrt{10}\,\mathrm{m/s}\simeq3{,}16\,\mathrm{m/s}.
\end{aligned}
$$
Nel grafico la curva della forza richiesta cresce con il quadrato della rapidità. Il punto $S$ in cui incontra la retta orizzontale del limite separa le rapidità ammissibili da quelle a cui il corpo comincia a scivolare; in $A$ la richiesta di $8\,\mathrm N$ supera il limite.

::grafico{f="x^2/2;5" punti="3.16227766,5,pieno;4,8,pieno" etichette="2.96,5.46,S;4.11,7.83,A" xmin=0 xmax=4.5 ymin=0 ymax=11 nomi="v (m/s),F (N)" legenda="\text{risultante richiesta};\text{limite statico}" titolo="La richiesta per la curva incontra il limite statico in S. In A la rapidità è 4 m/s e la richiesta supera il limite."}
:::
