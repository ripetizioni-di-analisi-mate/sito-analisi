---
titolo: I principi della dinamica
sommario: Come isolare un corpo, costruire il diagramma delle forze e ricavare l'accelerazione su un piano o in curva.
---

## Forze e risultante

:::definizione{#risultante titolo="La somma delle forze"}
Una **forza** descrive un'interazione fra corpi. Si rappresenta con un vettore e si misura in newton. Per studiare la traslazione si comincia scegliendo il corpo. Si disegnano soltanto le forze che altri corpi esercitano su quello scelto. Questa rappresentazione è il diagramma delle forze. La **risultante** $\vec F_R$ è la somma vettoriale delle frecce. Si possono sommare separatamente le componenti lungo due assi perpendicolari.
$$
F_{Rx}=\sum_j F_{jx},\qquad F_{Ry}=\sum_j F_{jy}.
$$
Il segno di ogni componente dipende dal verso dell'asse. Una forza verso destra e una verso sinistra sulla stessa retta si sommano quindi con segni opposti. Su un tavolo orizzontale, il peso e la normale contribuiscono lungo l'asse verticale. Due spinte orizzontali contribuiscono lungo l'altro asse.
:::

:::esempio{titolo="Carrello spinto da due lati"}
Scelto positivo il verso a destra, le spinte sono $+9\,\mathrm{N}$ e $-5\,\mathrm{N}$. La componente risultante orizzontale è $4\,\mathrm{N}$ verso destra. Se il corpo resta sul piano orizzontale e nessun'altra forza agisce in verticale, la normale compensa il peso. Sommando i vettori rimane quindi la sola componente orizzontale di $4\,\mathrm{N}$.

::grafico{assi=0 uguale=1 poligoni="-1,-0.5 1,-0.5 1,0.5 -1,0.5" linee="-3,-0.55 3,-0.55" vettori="0,0,2.7,0,F₁;0,0,-1.5,0,F₂;0,0,0,1.2,N;0,0,0,-1.2,P" xmin=-3.2 xmax=3.4 ymin=-1.7 ymax=1.7 titolo="Diagramma del carrello. Le due spinte hanno versi opposti, come peso e normale."}
:::

:::esempio{titolo="Compensare una sola componente"}
Una slitta su ghiaccio orizzontale riceve una spinta di $12\,\mathrm N$ verso est. Una seconda fune la tira verso nord-ovest. Negli assi orizzontali con est e nord positivi, le sue componenti valgono $(-3;4)\,\mathrm N$. Il peso e la normale si compensano sull'asse verticale. Sommando le forze nei due assi orizzontali si ottiene

$$
\vec F_R=\bigl(12-3;0+4\bigr)\,\mathrm N=(9;4)\,\mathrm N.
$$

La fune riduce la componente verso est e introduce una componente verso nord. Se occorre una risultante puramente orientata verso est, si può aggiungere una trazione di $4\,\mathrm N$ verso sud per annullare la componente settentrionale. Restano allora $9\,\mathrm N$ lungo l'asse est-ovest. Se si invertisse solo l'orientamento di quell'asse, la componente numerica diventerebbe $-9\,\mathrm N$ e la forza continuerebbe fisicamente a puntare a est. L'orientamento degli assi deve rimanere esplicito anche quando si passa dalla forza all'accelerazione.
:::

## Primo principio

:::teorema{#inerzia titolo="Equilibrio e velocità costante"}
In un **riferimento inerziale**, un corpo con risultante nulla mantiene la propria velocità vettoriale. Se è fermo rimane fermo. Se si muove, continua lungo una retta con velocità costante. Un laboratorio fermo rispetto al suolo si può trattare come inerziale in molti esperimenti di breve durata. Un sistema di assi solidale a un veicolo che accelera richiede invece altre considerazioni. Le leggi del capitolo si applicano nel riferimento inerziale scelto.
:::

:::esempio{titolo="Quiete e traslazione con risultante nulla"}
Un libro fermo sul tavolo riceve una forza verso il basso dalla Terra e una verso l'alto dal tavolo. Se i moduli coincidono, la somma vale zero e la velocità resta nulla. Su un binario orizzontale con attrito trascurabile, un carrello già in moto ha ugualmente risultante nulla. Continua allora con la velocità posseduta. In entrambi i casi lo stesso valore della risultante consente velocità iniziali differenti.

Se il carrello passa davanti a un sensore a $2\,\mathrm{m/s}$ e la risultante resta nulla, nei successivi $3\,\mathrm s$ percorre $6\,\mathrm m$. Il grafico della velocità ha pendenza zero. Il grafico della posizione, invece, avrebbe pendenza $2\,\mathrm{m/s}$. Per riconoscere il moto uniforme si controlla quale grandezza è riportata sull'asse verticale. L'altezza del grafico della velocità indica quanto rapidamente avanza il carrello, mentre la pendenza indica l'accelerazione.

::grafico{f="2;0" punti="3,2,pieno,A;3,0,pieno,B" xmin=0 xmax=4 ymin=-1 ymax=4 nomi="t (s),v (m/s)" legenda="\text{carrello};\text{libro}" titolo="Il carrello e il libro hanno velocità diverse. Entrambe le rette hanno pendenza zero."}
:::

:::attenzione
Una forza costante orientata nel verso del moto produce una variazione di velocità, se le altre forze non la compensano. Per mantenere una bicicletta a velocità costante su una strada reale, la spinta deve compensare le resistenze. Nel modello senza resistenze il moto uniforme si mantiene anche senza una spinta.
:::

## Secondo principio

:::teorema{#newton titolo="Risultante, massa e accelerazione"}
In un riferimento inerziale, per un corpo di massa $m$ costante, accelerazione e risultante sono legate da
$$
\vec F_R=m\vec a,\qquad F_{Rx}=ma_x,\qquad F_{Ry}=ma_y.
$$
Poiché $m$ è positiva, $\vec a$ ha la stessa direzione e lo stesso verso di $\vec F_R$. Una massa più grande richiede una risultante maggiore per ottenere la stessa accelerazione. Dalla relazione si legge anche l'unità $1\,\mathrm{N}=1\,\mathrm{kg\,m/s^2}$: un newton accelera un chilogrammo di un metro al secondo quadrato.
:::

:::esempio{titolo="Accelerazione da una risultante con segno"}
Un carrello di $2\,\mathrm{kg}$ subisce una risultante orizzontale di $-6\,\mathrm{N}$, con destra positiva. La sua accelerazione è $-3\,\mathrm{m/s^2}$. Se il carrello inizialmente va verso destra, in un primo intervallo rallenta. Se invece va verso sinistra, il modulo della sua velocità aumenta. La legge fissa l'accelerazione. Per sapere come cambia la rapidità serve anche la velocità di partenza.

::grafico{f="2*x" punti="-3,-6,pieno,A;2,4,pieno,B" xmin=-4 xmax=4 ymin=-9 ymax=9 nomi="a (m/s²),F (N)" titolo="Per massa 2 kg il rapporto fra risultante e accelerazione è costante."}
:::

:::osservazione{titolo="Risultante e forza letta dal sensore"}
Un sensore misura soltanto il tiro del motore su un carrello di $2\,\mathrm{kg}$. A un tiro di $6\,\mathrm N$ si misura $a=2\,\mathrm{m/s^2}$ e a un tiro di $10\,\mathrm N$ si misura $a=4\,\mathrm{m/s^2}$. La risultante vale $4\,\mathrm N$ nella prima prova e $8\,\mathrm N$ nella seconda. In entrambe la forza misurata supera la risultante di $2\,\mathrm N$. I dati sono compatibili con una resistenza costante di $2\,\mathrm N$ opposta al tiro. L'intercetta del grafico del tiro rispetto all'accelerazione rappresenta quella resistenza, mentre nel grafico della risultante l'intercetta è zero.
:::

:::esempio{titolo="La misura di una bilancia in ascensore"}
Una persona di massa $60\,\mathrm{kg}$ sale in ascensore. Negli ultimi istanti prima di fermarsi l'accelerazione ha modulo $0{,}5\,\mathrm{m/s^2}$ e punta verso il basso. Scegliendo l'alto positivo e usando $g=10\,\mathrm{m/s^2}$, il peso ha modulo $600\,\mathrm N$. La bilancia esercita verso l'alto una normale $N$. Il bilancio verticale è

$$
N-(60)(10)\,\mathrm N=(60)(-0{,}5)\,\mathrm N.
$$

La lettura della bilancia, in newton, è $N=570\,\mathrm N$. Il peso gravitazionale conserva il valore di $600\,\mathrm N$. La differenza $30\,\mathrm N$ rappresenta il modulo della risultante durante il rallentamento. Una salita a velocità costante darebbe invece $N=600\,\mathrm N$, come un arresto mantenuto, perché in entrambi i casi l'accelerazione è nulla.

::grafico{assi=0 uguale=1 poligoni="-0.35,-0.22 0.35,-0.22 0.35,0.55 -0.35,0.55" linee="-1,-0.25 1,-0.25" vettori="0,0,0,1.9,N;0,0,0,-2,P" xmin=-1.7 xmax=1.7 ymin=-2.5 ymax=2.5 titolo="La persona riceve una normale di 570 N verso l'alto e un peso di 600 N verso il basso."}
:::

## Terzo principio

:::teorema{#azione-reazione titolo="Le due forze di un'interazione"}
Se $A$ esercita una forza su $B$, allora $B$ esercita su $A$ una forza con pari modulo e verso opposto.
$$
\vec F_{A\to B}=-\vec F_{B\to A}.
$$
Le due forze sono simultanee e interessano corpi differenti. In un diagramma relativo a un solo corpo compare un solo membro della coppia. Se si studia invece l'insieme dei due corpi, le due forze sono interne e la loro somma sulle parti è nulla.
:::

:::esempio{titolo="Due pattinatori che si spingono"}
Su ghiaccio quasi privo di attrito, due pattinatori di $40\,\mathrm{kg}$ e $60\,\mathrm{kg}$ si spingono. Se la forza orizzontale di contatto è $60\,\mathrm{N}$, ciascuno riceve una forza di quel modulo. Le accelerazioni sono opposte; i moduli valgono rispettivamente $1{,}5\,\mathrm{m/s^2}$ e $1\,\mathrm{m/s^2}$. Dividere la stessa forza per masse differenti spiega perché gli effetti del contatto risultino diversi.

::grafico{assi=0 uguale=1 poligoni="-2,-0.55 -1,-0.55 -1,0.55 -2,0.55;1,-0.55 2,-0.55 2,0.55 1,0.55" vettori="-1.5,0,-3.1,0,F;1.5,0,3.1,0,F" xmin=-3.7 xmax=3.7 ymin=-1.6 ymax=1.6 titolo="Le due frecce della forza orizzontale appartengono a due corpi distinti."}
:::

:::esempio{titolo="Due carrelli collegati da un filo"}
I carrelli $A$ e $B$, di masse $2\,\mathrm{kg}$ e $4\,\mathrm{kg}$, sono collegati da un filo ideale teso. Il carrello $B$, davanti ad $A$, è trainato verso destra con $24\,\mathrm N$. Le resistenze orizzontali sono trascurabili. I due carrelli hanno la stessa accelerazione perché il filo mantiene costante la loro distanza. Nel sistema che li comprende entrambi, la trazione del filo compare con versi opposti. Il bilancio comune e quello del solo carrello $A$ danno

$$
\begin{aligned}
a&=\frac{24}{2+4}\,\mathrm{m/s^2}=4\,\mathrm{m/s^2},\\[6pt]
T&=(2)(4)\,\mathrm N=8\,\mathrm N.
\end{aligned}
$$

Come controllo, su $B$ il tiro del filo è verso sinistra. La risultante su $B$ è quindi $24\,\mathrm N-8\,\mathrm N=16\,\mathrm N$, coerente con la sua massa di $4\,\mathrm{kg}$ e l'accelerazione comune. La scelta del sistema permette prima di ricavare l'accelerazione e poi di ricostruire la tensione interna.

::grafico{assi=0 uguale=1 poligoni="-2.6,-0.45 -1.4,-0.45 -1.4,0.45 -2.6,0.45;0.6,-0.45 1.8,-0.45 1.8,0.45 0.6,0.45" linee="-1.4,0 0.6,0" vettori="-2,0,-1.2,0,T;1.2,0,0.4,0,T;1.2,0,3.6,0,24 N" etichette="-2.2,0.28,A;1,0.28,B" xmin=-3 xmax=4.2 ymin=-1.2 ymax=1.2 titolo="Il filo tira i carrelli l'uno verso l'altro. La forza di traino di 24 N agisce sul solo B."}
:::

:::attenzione
Peso e normale del tavolo su un libro possono avere moduli uguali e versi opposti. Si applicano però entrambi al libro. La forza accoppiata al peso è la forza gravitazionale del libro sulla Terra. La forza accoppiata alla normale è la forza di contatto del libro sul tavolo.
:::

## Peso, molla e attrito

:::definizione{#forze titolo="Modelli delle forze più comuni"}
Il **peso** è la forza esercitata dalla Terra. Vicino alla superficie, il suo modulo è $P=mg$ e il verso è verticale verso il basso. La massa si misura in chilogrammi e descrive l'inerzia del corpo. Il peso si misura in newton e dipende da $g$. Si usa il valore indicato nell'esercizio, spesso $9{,}81\,\mathrm{m/s^2}$ vicino al suolo.

Una **molla ideale** nel regime lineare esercita $F_e=-kx$, dove $x$ è lo spostamento dalla lunghezza naturale e $k$ è la costante elastica in $\mathrm{N/m}$. Il segno meno indica che la forza è di richiamo. Con $x>0$ per un allungamento, la molla tira verso la configurazione naturale. Con $x<0$ per una compressione, spinge nel verso positivo.
:::

:::osservazione{#attrito titolo="Contatto, attrito statico e dinamico"}
La normale è la componente della forza di contatto perpendicolare alla superficie. Su un piano orizzontale, senza altre forze verticali e con accelerazione verticale nulla, essa vale $N=mg$. Se si tira verso l'alto o si cambia inclinazione, occorre rifare la somma delle forze perpendicolari.

Quando il corpo scivola sul piano, l'**attrito dinamico** ha modulo $\mu_dN$ e si oppone allo scorrimento relativo. Quando il corpo resta fermo rispetto al piano, l'**attrito statico** si regola entro il limite $\mu_sN$ per impedire lo scorrimento. Se una spinta di $5\,\mathrm{N}$ può essere bilanciata e il limite è $12\,\mathrm{N}$, l'attrito effettivo vale $5\,\mathrm{N}$. Se la spinta supera il limite, quel contatto non può mantenere la quiete.
:::

:::esempio{titolo="Una spinta crescente e la soglia di scorrimento"}
Si spinge orizzontalmente un blocco fermo. Il massimo attrito statico vale $12\,\mathrm{N}$. Prima dello scorrimento, ogni incremento della spinta richiede un incremento uguale del modulo dell'attrito. Raggiunto il limite la quiete è appena possibile. Per una spinta maggiore, l'attrito dinamico può avere un modulo differente. Per determinare l'accelerazione durante lo scorrimento occorre allora il coefficiente dinamico.

::grafico{linee="0,0 12,12" punti="12,12,pieno,S" xmin=0 xmax=14 ymin=0 ymax=14 nomi="F (N),f (N)" titolo="Fino al valore di soglia il modulo dell'attrito statico segue quello della spinta."}
:::

:::esempio{titolo="Dal contatto fermo allo scorrimento"}
Un blocco di $5\,\mathrm{kg}$ è inizialmente fermo su un piano orizzontale. Un filo verticale lo tira verso l'alto con $10\,\mathrm N$. Con $g=10\,\mathrm{m/s^2}$ e accelerazione verticale zero, il contatto esercita $N=(50-10)\,\mathrm N=40\,\mathrm N$. I coefficienti sono $\mu_s=0{,}30$ e $\mu_d=0{,}20$. Si confronta ogni spinta orizzontale verso destra con la soglia di $12\,\mathrm N$ nell'ipotesi che il blocco parta da fermo.

| Spinta | Attrito in modulo | Accelerazione verso destra |
|---:|---:|---:|
| $8\,\mathrm N$ | $8\,\mathrm N$ | $0\,\mathrm{m/s^2}$ |
| $12\,\mathrm N$ | $12\,\mathrm N$ | $0\,\mathrm{m/s^2}$ |
| $15\,\mathrm N$ | $8\,\mathrm N$ durante lo scorrimento | $1{,}4\,\mathrm{m/s^2}$ |

Nel terzo caso, una forza d'attrito di $15\,\mathrm N$ sarebbe necessaria per la quiete e supererebbe la soglia. Quando il blocco si muove rispetto al piano, il modulo dell'attrito è $0{,}20\cdot40\,\mathrm N=8\,\mathrm N$. Il bilancio lungo il piano diventa $a_x=\dfrac{15-8}{5}\,\mathrm{m/s^2}=1{,}4\,\mathrm{m/s^2}$. La condizione di scorrimento va stabilita prima di scegliere il coefficiente.

::grafico{assi=0 uguale=1 poligoni="-0.55,-0.4 0.55,-0.4 0.55,0.42 -0.55,0.42" linee="-1.6,-0.42 1.8,-0.42" vettori="0,0,0,-2,P;0,0,0,1.6,N;0.4,0,0.4,0.4;0,0,0.6,0;0,0,-0.32,0" etichette="0.48,0.54,T 10 N;0.7,0.03,F 15 N;-0.74,0.15,f 8 N" xmin=-2 xmax=2 ymin=-2.4 ymax=2.1 titolo="Nel caso della spinta di 15 N, la trazione verticale riduce la normale e l'attrito dinamico agisce verso sinistra."}
:::

## Piano inclinato e moto circolare

:::teorema{#applicazioni titolo="Scegliere gli assi lungo il moto"}
Per un corpo su un piano inclinato l'asse parallelo al piano è comodo per lo scorrimento. L'altro asse è perpendicolare alla superficie. Se il piano forma un angolo $\alpha$ con l'orizzontale, il peso ha componente $mg\sin\alpha$ verso valle e componente $mg\cos\alpha$ verso il piano. In assenza di altre forze perpendicolari e con contatto mantenuto, $N=mg\cos\alpha$. Se il piano è liscio, l'accelerazione lungo il piano verso valle è
$$
a=\frac{mg\sin\alpha}{m}=g\sin\alpha.
$$
La massa si semplifica perché appartengono allo stesso corpo sia il peso sia l'inerzia. Per $\alpha=0$ si ottiene accelerazione nulla lungo il piano orizzontale. All'aumentare dell'angolo l'accelerazione si avvicina a $g$ nel limite verticale, mentre la componente del peso lungo il piano si avvicina al peso intero.
:::

:::esempio{titolo="Piano liscio a trenta gradi"}
Un blocco di $4\,\mathrm{kg}$ scivola su una pendenza a $30^\circ$ e si assume $g=10\,\mathrm{m/s^2}$. Il peso vale $40\,\mathrm{N}$. La componente lungo il piano è $40\sin30^\circ\,\mathrm{N}=20\,\mathrm{N}$. La normale compensa la componente perpendicolare al piano. Applicando il secondo principio in direzione di valle si ottiene $\dfrac{20}{4}=5$, in metri al secondo quadrato.

::grafico{assi=0 uguale=1 linee="-3,-1.73 3,1.73" punti="0,0,pieno,B" vettori="0,0,0,-2,P;0,0,-0.866025,1.5,N;0,0,-0.866025,-0.5" etichette="-1.35,-0.5,P∥" xmin=-3.7 xmax=3.7 ymin=-2.5 ymax=2.3 titolo="N è perpendicolare al piano. P∥ è la proiezione del peso lungo la rampa."}
:::

:::esempio{titolo="Una spinta orizzontale su una rampa liscia"}
Una rampa ha altezza, base e lato inclinato in rapporto $3:4:5$. Un blocco di $5\,\mathrm{kg}$ è spinto orizzontalmente verso la parte alta con una forza di $25\,\mathrm N$. Prendendo $g=10\,\mathrm{m/s^2}$, i moduli delle componenti parallele valgono $25\cdot\dfrac45\,\mathrm N=20\,\mathrm N$ in salita per la spinta e $50\cdot\dfrac35\,\mathrm N=30\,\mathrm N$ in discesa per il peso.

Con salita positiva si ottiene $a_x=\dfrac{20-30}{5}\,\mathrm{m/s^2}=-2\,\mathrm{m/s^2}$. La spinta penetra anche nella direzione perpendicolare al piano, con componente di modulo $25\cdot\dfrac35\,\mathrm N=15\,\mathrm N$. Per restare sulla rampa serve quindi $N=(40+15)\,\mathrm N=55\,\mathrm N$. Con una spinta parallela di pari intensità, invece, il contributo perpendicolare della spinta sarebbe zero. Le due forze hanno uguale modulo ma proiezioni diverse.

::grafico{assi=0 uguale=1 linee="-3,-2.25 3,2.25" vettori="0,0,0,-2.5,P;0,0,1.25,0,F;0,0,-1.65,2.2,N" punti="0,0,pieno" xmin=-3.5 xmax=3.5 ymin=-3 ymax=2.8 titolo="Il peso è verticale e la spinta è orizzontale. Nessuna delle due è parallela all'asse della rampa."}
:::

:::osservazione{#risultante-radiale titolo="La risultante che tiene il corpo in curva"}
In una curva circolare a rapidità costante $v$ e raggio $r$, l'accelerazione vale $\dfrac{v^2}{r}$ e punta verso il centro. La somma delle componenti delle forze lungo tale verso è quindi $m\dfrac{v^2}{r}$. La risultante radiale può essere data dall'attrito della strada, dalla tensione di un filo o da una combinazione di più forze. In un diagramma si riportano le interazioni effettive. La parola *centripeta* specifica il verso della risultante richiesta.
:::

:::esempio{titolo="Ruota su un piano orizzontale"}
Un piccolo corpo di $1\,\mathrm{kg}$ percorre una circonferenza di raggio $2\,\mathrm{m}$ a $4\,\mathrm{m/s}$. Peso e normale si bilanciano in verticale. La forza orizzontale richiesta è $1\cdot\dfrac{4^2}{2}\,\mathrm{N}=8\,\mathrm{N}$, verso il centro. Se su un disco che ruota il solo attrito statico ha limite inferiore a $8\,\mathrm{N}$, il corpo non può restare solidale al disco a quella distanza e rapidità.

Con $\mu_s=0{,}5$ e $g=10\,\mathrm{m/s^2}$, il limite di quel contatto vale $5\,\mathrm N$. La rapidità massima compatibile con il moto solidale soddisfa $\dfrac{v^2}{2}=5$ e vale $\sqrt{10}\,\mathrm{m/s}$, circa $3{,}16\,\mathrm{m/s}$. Nel grafico la curva della forza richiesta cresce con il quadrato della rapidità. Il punto in cui incontra la retta orizzontale del limite separa le rapidità ammissibili da quelle a cui il corpo comincia a scivolare.

::grafico{f="x^2/2;5" punti="3.16227766,5,pieno;4,8,pieno" etichette="2.96,5.46,S;4.11,7.83,A" xmin=0 xmax=4.5 ymin=0 ymax=11 nomi="v (m/s),F (N)" legenda="\text{risultante richiesta};\text{limite statico}" titolo="La richiesta per la curva incontra il limite statico in S. In A la rapidità è 4 m/s e la richiesta supera il limite."}
:::
