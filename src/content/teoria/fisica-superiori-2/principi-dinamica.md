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

## Primo principio

:::teorema{#inerzia titolo="Equilibrio e velocità costante"}
In un **riferimento inerziale**, un corpo con risultante nulla mantiene la propria velocità vettoriale. Se è fermo rimane fermo. Se si muove, continua lungo una retta con velocità costante. Un laboratorio fermo rispetto al suolo si può trattare come inerziale in molti esperimenti di breve durata. Un sistema di assi solidale a un veicolo che accelera richiede invece altre considerazioni. Le leggi del capitolo si applicano nel riferimento inerziale scelto.
:::

:::esempio{titolo="Quiete e traslazione con risultante nulla"}
Un libro fermo sul tavolo riceve una forza verso il basso dalla Terra e una verso l'alto dal tavolo. Se i moduli coincidono, la somma vale zero e la velocità resta nulla. Su un binario orizzontale con attrito trascurabile, un carrello già in moto ha ugualmente risultante nulla. Continua allora con la velocità posseduta. In entrambi i casi lo stesso valore della risultante consente velocità iniziali differenti.
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

::grafico{f="x" punti="0,0,pieno,O;12,12,pieno,S" xmin=0 xmax=12 ymin=0 ymax=13 nomi="F (N),f (N)" titolo="Fino al valore di soglia il modulo dell'attrito statico segue quello della spinta."}
:::

## Piano inclinato e moto circolare

:::teorema{#applicazioni titolo="Scegliere gli assi lungo il moto"}
Per un corpo su un piano inclinato l'asse parallelo al piano è comodo per lo scorrimento. L'altro asse è perpendicolare alla superficie. Se il piano forma un angolo $\alpha$ con l'orizzontale, il peso ha componente $mg\sin\alpha$ verso valle e componente $mg\cos\alpha$ verso il piano. In assenza di altre forze perpendicolari e con contatto mantenuto, $N=mg\cos\alpha$. Se il piano è liscio, l'accelerazione lungo il piano verso valle è
$$
a=\frac{mg\sin\alpha}{m}=g\sin\alpha.
$$
La massa si semplifica perché appartengono allo stesso corpo sia il peso sia l'inerzia. Per $\alpha=0$ si ottiene accelerazione nulla lungo il piano orizzontale. All'aumentare dell'angolo la componente lungo il piano aumenta, avvicinandosi a $g$ nel limite verticale.
:::

:::esempio{titolo="Piano liscio a trenta gradi"}
Un blocco di $4\,\mathrm{kg}$ scivola su una pendenza a $30^\circ$ e si assume $g=10\,\mathrm{m/s^2}$. Il peso vale $40\,\mathrm{N}$. La componente lungo il piano è $40\sin30^\circ\,\mathrm{N}=20\,\mathrm{N}$. La normale compensa la componente perpendicolare al piano. Applicando il secondo principio in direzione di valle si ottiene $\dfrac{20}{4}=5$, in metri al secondo quadrato.

::grafico{assi=0 uguale=1 linee="-3,-1.73 3,1.73" punti="0,0,pieno,B" vettori="0,0,0,-2,P;0,0,-0.78,1.35,N;0,0,-0.87,-0.5,P∥" xmin=-3.7 xmax=3.7 ymin=-2.5 ymax=2.3 titolo="La proiezione P∥ è parallela al piano, N è perpendicolare."}
:::

:::osservazione{#risultante-radiale titolo="La risultante che tiene il corpo in curva"}
In una curva circolare a rapidità costante $v$ e raggio $r$, l'accelerazione vale $\dfrac{v^2}{r}$ e punta verso il centro. La somma delle componenti delle forze lungo tale verso è quindi $m\dfrac{v^2}{r}$. La risultante radiale può essere data dall'attrito della strada, dalla tensione di un filo o da una combinazione di più forze. In un diagramma si riportano le interazioni effettive. La parola *centripeta* specifica il verso della risultante richiesta.
:::

:::esempio{titolo="Ruota su un piano orizzontale"}
Un piccolo corpo di $1\,\mathrm{kg}$ percorre una circonferenza di raggio $2\,\mathrm{m}$ a $4\,\mathrm{m/s}$. Peso e normale si bilanciano in verticale. La forza orizzontale richiesta è $1\cdot\dfrac{4^2}{2}\,\mathrm{N}=8\,\mathrm{N}$, verso il centro. Se su un disco che ruota il solo attrito statico ha limite inferiore a $8\,\mathrm{N}$, il corpo non può restare solidale al disco a quella distanza e rapidità.
:::
