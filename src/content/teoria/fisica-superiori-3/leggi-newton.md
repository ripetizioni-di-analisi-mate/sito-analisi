---
titolo: "I principi della dinamica"
sommario: "Diagrammi delle forze, principi di Newton, sistemi collegati, peso apparente e risultante radiale."
---

## Forze e corpo da studiare

:::definizione{#risultante titolo="Diagramma delle forze"}
Una **forza** descrive un'interazione tra due corpi. Si misura in newton: $1\,\mathrm N=1\,\mathrm{kg\cdot m/s^2}$. Per studiare un corpo, si rappresentano le forze che altri corpi esercitano su di esso. Nel modello di punto materiale le loro frecce possono partire da un punto comune. Per controllare la rotazione occorre invece conservare il punto di applicazione, perché da esso dipende il momento.

Per un libro appoggiato su un tavolo, il peso è l'azione gravitazionale della Terra sul libro e la normale è l'azione del tavolo sul libro. La forza con cui il libro preme sul tavolo appartiene al diagramma del tavolo. Scelto il corpo, si raccolgono tutte le forze esterne e si sommano **vettorialmente**. Una forza di $8\,\mathrm N$ a destra e una di $3\,\mathrm N$ a sinistra danno risultante di $5\,\mathrm N$ a destra, quale che sia la velocità del libro in quell'istante.

Per un insieme di corpi, una forza tra due suoi componenti è interna e, sommando le equazioni delle componenti, si cancella con la reazione. La distinzione dipende dal sistema scelto. La tensione tra due carrelli è interna per la coppia ma esterna per ciascuno preso separatamente.
:::

::grafico{assi=0 uguale=1 poligoni="-0.6,-0.4 0.6,-0.4 0.6,0.4 -0.6,0.4" segmenti="-2,-0.4,2,-0.4" vettori="0,0,0,1.5,N;0,0,0,-1.5,P;0,0,1.8,0,F" xmin=-2.7 xmax=2.7 ymin=-2 ymax=2 titolo="Nel diagramma del libro compaiono soltanto le forze agenti sul libro"}

## Il primo principio

:::teorema{#inerzia titolo="Principio d’inerzia"}
Un riferimento è **inerziale** se i corpi liberi da una risultante mantengono la velocità vettoriale costante. La quiete è il caso particolare $v=0$. In un laboratorio, il riferimento terrestre si usa spesso come approssimazione inerziale per moti brevi. Nella cabina di un treno in accelerazione, un disco libero può invece muoversi rispetto alla cabina anche con risultante orizzontale nulla.

Il principio distingue il mantenimento del moto dalla sua variazione. Su un piano orizzontale ideale senza attrito, peso e normale si compensano e un disco già in movimento conserva il moto rettilineo uniforme dopo che cessa la spinta. In un esperimento reale il disco può rallentare per attrito. Il rallentamento indica una risultante opposta alla velocità, accertabile misurando la pendenza del grafico velocità-tempo.

Una curva percorsa a rapidità costante richiede una risultante, perché cambia direzione della velocità. Per decidere se il movimento è inerziale occorrono sia il modulo sia la direzione della velocità.
:::

## Il secondo principio

:::teorema{#secondo-principio titolo="Forza e accelerazione"}
Per un corpo di massa costante $m$ in un riferimento inerziale, la seconda legge dà
$$
\sum\vec F=m\vec a.
$$
In un piano si scrive $\sum F_x=ma_x$ e $\sum F_y=ma_y$ dopo aver fissato gli assi. La massa è positiva, quindi accelerazione e risultante hanno la stessa direzione e lo stesso verso. Una forza risultante opposta al moto riduce inizialmente la rapidità. Se la forza continua dopo che la velocità si annulla, il corpo riparte in verso opposto.

Per $m=4\,\mathrm{kg}$ e risultante $(12,-16)\,\mathrm{N}$ si trova $\vec a=(3,-4)\,\mathrm{m/s^2}$. Il modulo è $5\,\mathrm{m/s^2}$. Se si raddoppia la massa a forze invariate, entrambe le componenti si dimezzano e il verso resta uguale. Se invece si inverte soltanto una componente della forza, anche la corrispondente componente dell'accelerazione si inverte.

Vicino alla superficie terrestre, $\vec P=m\vec g$. Un oggetto di massa $2\,\mathrm{kg}$ ha peso di modulo $19{,}62\,\mathrm N$ con $g=9{,}81\,\mathrm{m/s^2}$. In un luogo a gravità diversa, massa e risposta alla stessa risultante restano le stesse, mentre cambia il peso. Una bilancia a molla rileva una forza di contatto. La sua lettura coincide col peso quando il moto verticale ha accelerazione nulla e agiscono solo peso e normale.
:::

::grafico{f="4*x;8*x" punti="3,12,pieno;3,24,pieno" xmin=0 xmax=5 ymin=0 ymax=38 nomi="a,F" titolo="A uguale accelerazione, la forza necessaria cresce con la massa"}

## Il terzo principio

:::teorema{#azione-reazione titolo="Forze fra due corpi"}
Se $A$ esercita su $B$ la forza $\vec F_{A\to B}$, allora $B$ esercita su $A$ la forza $\vec F_{B\to A}=-\vec F_{A\to B}$. Le due azioni sono simultanee, hanno uguale modulo e verso opposto, e compaiono nei diagrammi di corpi diversi. Per stabilire se due forze formano una coppia occorre identificare i corpi che interagiscono, oltre a confrontare modulo e verso.

Sul libro fermo, peso e normale possono essere uguali e opposti. Il reciproco del peso del libro è la sua attrazione gravitazionale sulla Terra. Il reciproco della normale è la pressione del libro sul tavolo. Per un camion e un'auto che si urtano, le forze di contatto hanno uguale modulo. Se la massa del camion è maggiore e quelle forze dominano le risultanti, il camion subisce un'accelerazione di modulo minore. L'uguaglianza delle forze reciproche è compatibile con risposte molto diverse.
:::

::grafico{assi=0 uguale=1 poligoni="-2,-0.5 -1,-0.5 -1,0.5 -2,0.5;1,-0.5 2,-0.5 2,0.5 1,0.5" vettori="-1.5,0,-0.2,0,F_BA;1.5,0,0.2,0,F_AB" xmin=-2.5 xmax=2.5 ymin=-1 ymax=1 titolo="Le due forze reciproche sono disegnate su corpi distinti"}

## Corpi collegati

:::osservazione{#sistemi-collegati titolo="Tensione e accelerazione comune"}
Un filo ideale, teso e inestensibile, mantiene fissa la sua lunghezza e quindi lega gli spostamenti delle due estremità. Per due carrelli sulla stessa guida li costringe ad avere la stessa accelerazione. Se le estremità si muovono su lati diversi di una carrucola, i versi spaziali possono essere opposti. La tensione ha lo stesso modulo nei due rami se filo e carrucola sono privi di massa e la carrucola non ha attrito.

Su un piano orizzontale liscio, una forza $F$ trascina il carrello $m_1$, unito a $m_2$. Considerando la coppia, $a=F/(m_1+m_2)$. Separando il secondo carrello, la sola forza orizzontale su di esso è $T$, dunque $T=m_2a$. Con $m_1=2\,\mathrm{kg}$, $m_2=3\,\mathrm{kg}$ e $F=10\,\mathrm{N}$ si trova $a=2\,\mathrm{m/s^2}$ e $T=6\,\mathrm N$. Sulla massa tirata agiscono $10-6=4\,\mathrm N$, che danno la stessa accelerazione. Applicando $F$ al secondo, l'accelerazione comune resta uguale ma cambia il corpo che la tensione trascina.

Per due masse sospese in una macchina di Atwood, con $m_2>m_1$, si sceglie positivo il verso del moto lungo ciascun ramo. Le equazioni sono
$$
m_2g-T=m_2a,\qquad T-m_1g=m_1a.
$$
Sommandole si ottiene $a=g(m_2-m_1)/(m_1+m_2)$. La tensione si recupera da una delle due equazioni. È maggiore del peso della massa che sale e minore del peso della massa che scende. Se si ottiene il contrario, va ricontrollato il segno di $a$ nel diagramma separato.
:::

::grafico{assi=0 uguale=1 poligoni="-1.8,0 -0.8,0 -0.8,0.8 -1.8,0.8;0.8,0 1.8,0 1.8,0.8 0.8,0.8" segmenti="-2.5,0,3.4,0;-0.8,0.4,0.8,0.4" vettori="1.8,0.4,3.0,0.4,F" etichette="-1.3,0.5,m_2;1.3,0.5,m_1" xmin=-2.6 xmax=3.4 ymin=-0.5 ymax=1.3 titolo="La tensione del collegamento è interna al sistema dei due carrelli"}

## Applicazioni verticali e circolari

:::teorema{#dinamica-circolare titolo="Peso apparente e forza radiale"}
Dentro un ascensore, finché la persona resta a contatto con la bilancia e le forze verticali sono peso e normale, con verso positivo verso l'alto si ha $N-mg=ma$. Quindi $N=m(g+a)$. Se l'ascensore sale rallentando, $a<0$ e la lettura è inferiore al peso. Se scende rallentando, $a>0$ e la lettura è superiore al peso. Conta il verso dell'accelerazione, che può essere diverso da quello della velocità.

Per $m=60\,\mathrm{kg}$, $g=10\,\mathrm{m/s^2}$ e accelerazione verso il basso di $2\,\mathrm{m/s^2}$, la normale misura $480\,\mathrm N$ mentre il peso resta $600\,\mathrm N$. In caduta libera $a=-g$ e $N=0$. Il modello di contatto con il pavimento non ammette una normale negativa. Se l'equazione la richiedesse, la persona avrebbe perso il contatto e occorrerebbe cambiare il modello.

Nel moto circolare con velocità non nulla, la componente radiale della risultante ha modulo $mv^2/r$ verso il centro. Si disegnano prima le forze effettive e poi si proiettano lungo il raggio. Per un'auto in una curva orizzontale senza slittare, il contributo orizzontale può venire dall'attrito statico degli pneumatici. In una curva verticale, peso e normale possono contribuire con segni diversi. Sul fondo di una conca il centro è verso l'alto, quindi $N-mg=mv^2/r$. Sulla sommità di una collina analoga il centro è verso il basso e vale $mg-N=mv^2/r$, finché sussiste il contatto.
:::

::grafico{f="60*(10+x)" punti="-10,0,pieno;-2,480,pieno;0,600,pieno" xmin=-10 xmax=4 ymin=0 ymax=860 nomi="a,N" titolo="La bilancia indica 480 N quando l'accelerazione è −2 m/s²"}
