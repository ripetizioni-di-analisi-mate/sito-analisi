---
titolo: "I principi della dinamica"
sommario: "Diagrammi delle forze, principi di Newton, sistemi collegati, peso apparente e risultante radiale."
---

## Forze e corpo da studiare

:::definizione{#risultante titolo="Diagramma delle forze"}
Una **forza** è l'azione che un corpo esercita su un altro, per esempio una spinta, una trazione o l'attrazione della Terra. È un vettore, cioè una grandezza con modulo (l'intensità), direzione e verso. Si misura in newton (simbolo $\mathrm N$). Una forza di $1\,\mathrm N$ dà a una massa di $1\,\mathrm{kg}$ un'accelerazione di $1\,\mathrm{m/s^2}$, quindi $1\,\mathrm N=1\,\mathrm{kg\cdot m/s^2}$.

Il **diagramma delle forze** di un corpo è il disegno di tutte le forze che gli *altri* corpi esercitano su di esso. Se il corpo si tratta come un punto materiale, cioè come un punto che ha la massa del corpo e di cui si trascurano le dimensioni, le frecce possono partire da un punto comune. Se invece si studia anche la rotazione, ogni freccia parte dal suo punto di applicazione, perché da quel punto dipende il momento della forza, cioè la sua capacità di far ruotare il corpo.

Per un libro appoggiato su un tavolo agiscono due forze.
- Il **peso** è l'attrazione gravitazionale della Terra sul libro.
- La **normale** è la spinta del tavolo sul libro, perpendicolare alla superficie del tavolo («normale» significa perpendicolare).

La forza con cui il libro preme sul tavolo agisce sul tavolo, quindi appartiene al diagramma del tavolo.

La **risultante** è la somma **vettoriale** delle forze esterne che agiscono sul corpo scelto. Per forze sulla stessa retta si fissa un verso positivo e si sommano i valori con il segno. Con destra positiva, una forza di $8\,\mathrm N$ a destra e una di $3\,\mathrm N$ a sinistra danno $8-3=5\,\mathrm N$, cioè una risultante di $5\,\mathrm N$ a destra. La somma dipende solo dalle forze, perciò vale qualunque sia la velocità del libro in quell'istante.

Un **sistema** è un insieme di corpi che si sceglie di studiare insieme. Una forza fra due corpi del sistema è **interna**, una forza esercitata da un corpo che sta fuori è **esterna**. Le forze interne si presentano a coppie uguali e opposte (terzo principio), quindi si cancellano quando si sommano le equazioni dei singoli corpi. La distinzione dipende dal sistema scelto. Per due carrelli collegati da un filo, se il sistema comprende carrelli e filo, le forze fra filo e carrelli sono interne. Se invece si isola un solo carrello, la **tensione**, cioè la forza con cui il filo tira, compare come forza esterna nel suo diagramma.

Nella figura il libro è spinto a destra dalla forza $F$ su un piano liscio, cioè con attrito trascurabile. Peso $P$ e normale $N$ hanno la stessa lunghezza e versi opposti, quindi si compensano e la risultante è $F$.
:::

::grafico{assi=0 uguale=1 poligoni="-0.6,-0.4 0.6,-0.4 0.6,0.4 -0.6,0.4" segmenti="-2,-0.4,2,-0.4" vettori="0,0,0,1.5,N;0,0,0,-1.5,P;0,0,1.8,0,F" xmin=-2.7 xmax=2.7 ymin=-2 ymax=2 titolo="Sul libro spinto a destra agiscono peso, normale e spinta. Il piano è liscio."}

:::esempio{#confine-sistema titolo="Quando i corpi non hanno la stessa accelerazione"}
Due carrelli di masse $m_1=2\,\mathrm{kg}$ e $m_2=4\,\mathrm{kg}$ si spingono o si tirano a vicenda sulla stessa guida, per esempio tramite una molla. Nello stesso istante si misurano, lungo lo stesso asse orientato verso destra, $a_1=+3\,\mathrm{m/s^2}$ e $a_2=-1\,\mathrm{m/s^2}$. Il primo carrello accelera quindi verso destra e il secondo verso sinistra.

Per ciascun carrello la seconda legge (sezione «Il secondo principio») dice che la risultante è la massa per l'accelerazione. Si sommano le due equazioni. La forza del primo carrello sul secondo e quella del secondo sul primo sono uguali e opposte, perciò si cancellano e resta la risultante delle sole forze esterne:

$$
\sum F_{\mathrm{ext},x}=m_1a_1+m_2a_2=(2\cdot3+4\cdot(-1))\,\mathrm N=+2\,\mathrm N.
$$

Il simbolo $\sum$ (sigma maiuscola) si legge «somma di»; il pedice $\mathrm{ext},x$ indica che si sommano le componenti lungo $x$ delle forze esterne.

La risultante esterna è positiva anche se un carrello accelera verso sinistra. Il prodotto della massa totale per un'unica accelerazione ha senso solo quando un collegamento, come un filo teso, rende uguali le accelerazioni. Nel caso generale si usa l'accelerazione del **centro di massa**, che è la media delle accelerazioni pesata con le masse:

$$
a_{\mathrm{CM},x}=\frac{m_1a_1+m_2a_2}{m_1+m_2}=\frac{2}{6}\,\mathrm{m/s^2}.
$$

Perciò $\sum F_{\mathrm{ext},x}=(m_1+m_2)\,a_{\mathrm{CM},x}$. Nella figura le frecce $a_1$ e $a_2$, misurate sullo stesso asse, hanno versi opposti.
:::

::grafico{assi=0 uguale=1 linee="-3.8,0 3.8,0" poligoni="-2.2,0 -1.2,0 -1.2,0.7 -2.2,0.7;0.7,0 2.3,0 2.3,0.7 0.7,0.7" vettori="-1.7,1,-0.2,1,a₁;1.5,1,1.0,1,a₂" etichette="-1.9,0.43,2 kg;1.29,0.43,4 kg" xmin=-3.2 xmax=3.2 ymin=-0.44 ymax=1.65 titolo="I due carrelli possono accelerare in versi opposti. Per sommare i contributi si adopera lo stesso asse."}

## Il primo principio

:::teorema{#inerzia titolo="Principio d’inerzia"}
Un **sistema di riferimento** è il punto di vista da cui si misurano posizioni e velocità, per esempio il laboratorio o la cabina di un treno. Un riferimento è **inerziale** se in esso ogni corpo con risultante nulla mantiene costante la velocità vettoriale, cioè modulo, direzione e verso. Il **principio d'inerzia** afferma che, in un riferimento inerziale, un corpo con risultante nulla resta fermo oppure si muove di moto rettilineo uniforme (in linea retta, a velocità costante). La quiete è il caso particolare $v=0$.

Il riferimento solidale con la Terra si tratta come inerziale per moti brevi in laboratorio, anche se la Terra ruota. Il riferimento di una cabina di treno che accelera invece non è inerziale. Un disco appoggiato sul pavimento liscio della cabina, senza forze orizzontali, si muove rispetto alla cabina (esempio seguente).

Una risultante serve a cambiare la velocità; un moto a velocità costante avviene con risultante nulla. Su un piano orizzontale ideale senza attrito, peso e normale si compensano; perciò un disco già in movimento prosegue di moto rettilineo uniforme anche dopo la fine della spinta. In un esperimento reale il disco rallenta per l'attrito. Il rallentamento indica una risultante opposta alla velocità. Si misura dalla pendenza del grafico velocità-tempo, che è l'accelerazione.

Una curva percorsa a rapidità costante (la **rapidità** è il modulo della velocità) richiede una risultante non nulla, perché cambia la direzione della velocità. Per decidere se un moto avviene con risultante nulla si controllano quindi sia il modulo sia la direzione della velocità.
:::

:::esempio{#riferimenti titolo="Misurare lo stesso disco da terra e dalla cabina"}
Un disco è fermo rispetto al laboratorio, appoggiato sul pavimento orizzontale e liscio di una cabina. La cabina, inizialmente in quiete, parte verso destra con accelerazione $2\,\mathrm{m/s^2}$. Dal laboratorio il disco ha velocità orizzontale nulla, perché sul pavimento liscio non riceve forze orizzontali.

La posizione del disco rispetto alla cabina è la differenza fra la posizione del disco e quella della cabina, entrambe misurate dal laboratorio: $x_{\mathrm{rel}}=x-x_{\mathrm c}$. Allo stesso modo la velocità rispetto alla cabina è la differenza delle velocità. Dopo il tempo $t$ la cabina ha velocità $2t$ (in $\mathrm{m/s}$, con $t$ in secondi) e il disco ha velocità nulla, quindi

$$
v_{\mathrm{rel}}=0-2t=-2t.
$$

La velocità del disco misurata dalla cabina ha quindi pendenza $-2\,\mathrm{m/s^2}$, cioè il disco si muove all'indietro rispetto alla cabina sempre più rapidamente. Dopo $3\,\mathrm s$ vale $-2\cdot3=-6\,\mathrm{m/s}$, il punto pieno della figura. Le due misure non concordano perché la cabina accelera. Se la cabina proseguisse a velocità costante, la differenza delle velocità sarebbe costante e le due accelerazioni misurate coinciderebbero.
:::

::grafico{linee="0,0 3,0;0,0 3,-6" punti="3,-6,pieno" etichette="1.3,0.43,terra;1.2,-3.36,cabina" xmin=0 xmax=3.6 ymin=-7.1 ymax=1.7 nomi="t (s),vₓ (m/s)" titolo="La velocità orizzontale del disco è costante da terra e diminuisce di 2 m/s ogni secondo vista dalla cabina."}

## Il secondo principio

:::teorema{#secondo-principio titolo="Forza e accelerazione"}
Per un corpo di massa costante $m$, in un riferimento inerziale, vale la seconda legge di Newton:
$$
\sum\vec F=m\vec a.
$$
A sinistra c'è la risultante, a destra la massa per l'accelerazione. In un piano si fissano due assi perpendicolari $x$ e $y$ e si scrive l'uguaglianza per ciascuna componente, cioè per la proiezione con segno di ogni vettore sull'asse: $\sum F_x=ma_x$ e $\sum F_y=ma_y$. La massa è positiva, quindi accelerazione e risultante hanno la stessa direzione e lo stesso verso. Una risultante opposta al moto all'inizio riduce la rapidità. Se la forza continua ad agire dopo che la velocità si è annullata, il corpo riparte in verso opposto.

Per $m=4\,\mathrm{kg}$ e risultante $(12,-16)\,\mathrm{N}$, cioè $12\,\mathrm N$ lungo $x$ e $-16\,\mathrm N$ lungo $y$, si divide ogni componente per la massa:
$$
a_x=\frac{12}{4}\,\mathrm{m/s^2}=3\,\mathrm{m/s^2},\qquad a_y=\frac{-16}{4}\,\mathrm{m/s^2}=-4\,\mathrm{m/s^2}.
$$
Quindi $\vec a=(3,-4)\,\mathrm{m/s^2}$. Per il teorema di Pitagora il modulo è $\sqrt{3^2+(-4)^2}\,\mathrm{m/s^2}=\sqrt{25}\,\mathrm{m/s^2}=5\,\mathrm{m/s^2}$. Se si raddoppia la massa a forze invariate, entrambe le componenti si dimezzano e il verso resta uguale. Se invece si inverte soltanto una componente della forza, anche la corrispondente componente dell'accelerazione si inverte.

Vicino alla superficie terrestre il peso è $\vec P=m\vec g$, dove $\vec g$ è l'accelerazione di gravità, diretta verso il basso, di modulo $g=9{,}81\,\mathrm{m/s^2}$ (negli esercizi spesso $10\,\mathrm{m/s^2}$). Un oggetto di massa $2\,\mathrm{kg}$ ha quindi peso di modulo $2\cdot9{,}81\,\mathrm N=19{,}62\,\mathrm N$. La massa misura l'inerzia del corpo, cioè quanto è difficile cambiarne la velocità, e non dipende dal luogo; il peso invece dipende da $g$. In un luogo a gravità diversa, perciò, la massa e l'accelerazione prodotta dalla stessa risultante restano le stesse, mentre cambia il peso. Una bilancia a molla (dinamometro) misura la forza di contatto che esercita sul corpo. La sua lettura coincide con il peso quando agiscono solo peso e normale e il moto verticale ha accelerazione nulla.

Nel grafico della forza $F$ in funzione dell'accelerazione $a$ la retta passa per l'origine e la sua pendenza è la massa. A $3\,\mathrm{m/s^2}$ servono $4\cdot3=12\,\mathrm N$ per $4\,\mathrm{kg}$ e $8\cdot3=24\,\mathrm N$ per $8\,\mathrm{kg}$.
:::

::grafico{f="4*x;8*x" punti="3,12,pieno;3,24,pieno" etichette="3.42,11.6,4 kg;3.2,26.8,8 kg" xmin=0 xmax=5 ymin=0 ymax=38 nomi="a (m/s²),F (N)" titolo="A uguale accelerazione, la forza necessaria cresce con la massa"}

:::esempio{#proiezioni-rampa titolo="Leggere una rampa con gli assi del vincolo"}
Una rampa liscia è inclinata di $30^\circ$ rispetto all'orizzontale. Un blocco che pesa $50\,\mathrm N$ vi resta in quiete, trattenuto da un filo parallelo al piano. Si sceglie un asse lungo il piano e uno perpendicolare al piano, perché su questi assi tensione e normale hanno una sola componente. Il peso, verticale, si scompone in due parti. Con $\alpha$ (alfa) angolo della rampa, la componente lungo il piano ha modulo $P\sin\alpha$ e quella perpendicolare ha modulo $P\cos\alpha$; seno e coseno sono i rapporti fra il cateto opposto e l'ipotenusa e fra il cateto adiacente e l'ipotenusa in un triangolo rettangolo.

Lungo il piano, con verso positivo verso l'alto, il peso ha componente $-50\sin30^\circ=-50\cdot\dfrac12=-25\,\mathrm N$. Il blocco è fermo, quindi la somma lungo il piano è zero e il filo esercita $T=25\,\mathrm N$. Perpendicolarmente al piano l'accelerazione è nulla, perciò la normale bilancia l'altra componente: $N=50\cos30^\circ=50\cdot\dfrac{\sqrt3}{2}\simeq43{,}3\,\mathrm N$. Nella figura i due cateti tratteggiati sono le componenti del peso. Quello parallelo alla rampa è lungo quanto la freccia di $T$, quello perpendicolare quanto la freccia di $N$.

La normale si determina dalla proiezione di tutte le altre forze sull'asse perpendicolare. Sul piano orizzontale coincide col peso se nessun'altra forza ha componente verticale. Anche su un piano orizzontale, una trazione obliqua verso l'alto con componente verticale $F_y$ riduce la normale a $N=P-F_y$; quindi riduce il limite dell'attrito statico.
:::

::grafico{assi=0 uguale=1 linee="-2.5,-1.943376 2.5,0.943376" vettori="0,0,0,-2,P;0,0,0.866025,0.5,T;0,0,-0.866025,1.5,N" segmenti="0,-2,-0.866025,-0.5;0,0,-0.866025,-0.5" punti="0,0,pieno" xmin=-2.7 xmax=2.7 ymin=-2.5 ymax=1.97 titolo="Il cateto tratteggiato parallelo alla rampa ha lunghezza uguale alla freccia di T."}

:::osservazione{#attrito titolo="La soglia statica dipende dalla normale"}
L'**attrito** è la forza che una superficie esercita su un corpo a contatto, parallela alla superficie. È **statico** se il corpo non scivola e **dinamico** se scivola. I coefficienti $\mu_{\mathrm s}$ e $\mu_{\mathrm d}$ ($\mu$ si legge «mi») sono numeri senza unità di misura che dipendono dalle due superfici.

L'attrito statico vale quanto serve perché il corpo non scivoli, fino a un valore massimo. Si trova quindi imponendo l'assenza di scorrimento. Se il piano è fermo e il blocco è inizialmente in quiete, lungo il piano si impone accelerazione nulla. Il valore così ottenuto è possibile se $|F_{\mathrm s}|\leq\mu_{\mathrm s}N$, dove $|F_{\mathrm s}|$ è il modulo dell'attrito e $\mu_{\mathrm s}N$ è il limite statico. Quando il valore richiesto supera il limite, il blocco scivola e vale il modello di scorrimento: l'attrito ha modulo $|F_{\mathrm d}|=\mu_{\mathrm d}N$ e verso opposto alla velocità relativa tra le superfici.

Per $m=4\,\mathrm{kg}$ su piano orizzontale, $g=10\,\mathrm{m/s^2}$, $\mu_{\mathrm s}=0{,}50$ e $\mu_{\mathrm d}=0{,}30$, la normale è $N=mg=40\,\mathrm N$. Il limite statico vale quindi $0{,}50\cdot40\,\mathrm N=20\,\mathrm N$ e in scorrimento il modulo dell'attrito vale $0{,}30\cdot40\,\mathrm N=12\,\mathrm N$. Si indica con $F$ il modulo della spinta orizzontale verso destra.

| Stato del blocco | Forza applicata | Esito |
| --- | --- | --- |
| Inizialmente fermo | $0\leq F\leq20\,\mathrm N$ | Quiete, attrito di modulo $F$ |
| Inizialmente fermo | $F>20\,\mathrm N$ | Inizia a scorrere verso destra |
| Scorre verso destra | $F>12\,\mathrm N$ | La rapidità aumenta |
| Scorre verso destra | $F=12\,\mathrm N$ | La rapidità resta costante |
| Scorre verso destra | $0\leq F<12\,\mathrm N$ | Rallenta fino a fermarsi se la spinta resta costante |

Una spinta di $16\,\mathrm N$ può quindi mantenere il blocco fermo oppure fargli aumentare la rapidità, a seconda dello stato iniziale. Nel secondo caso la risultante è $16-12=4\,\mathrm N$ e
$$
a_x=\frac{16-12}{4}\,\mathrm{m/s^2}=1\,\mathrm{m/s^2}.
$$
Se durante lo scorrimento si toglie la spinta, il blocco rallenta. Quando si ferma, si controlla di nuovo con il limite statico se resta fermo, prima di prolungare il calcolo. Nella figura il segmento obliquo è l'attrito in quiete, uguale alla spinta fino a $20\,\mathrm N$; il segmento orizzontale è l'attrito in scorrimento, costante a $12\,\mathrm N$.
:::

::grafico{curve="t,t,0,20;t,12,0,31" segmenti="20,0,20,20" punti="20,20,pieno;16,16,pieno;16,12,pieno" etichette="11.8,17.4,quiete;24,12.9,scorrimento" xmin=0 xmax=31 ymin=0 ymax=25 nomi="F (N),|attrito| (N)" titolo="Per F = 16 N il modulo dell'attrito vale 16 N se il blocco è fermo e 12 N se sta scorrendo."}

:::esempio{#attrito-su-carrello titolo="Attrito statico con accelerazione diversa da zero"}
Un pacco di $5\,\mathrm{kg}$ è appoggiato sul pianale orizzontale (il piano di carico) di un carrello che accelera verso destra a $2\,\mathrm{m/s^2}$. Se non scivola, rispetto al pavimento del laboratorio il pacco ha la stessa accelerazione del carrello. La sua unica forza orizzontale è l'attrito statico, che deve quindi valere $5\cdot2=10\,\mathrm N$ verso destra.

Con $\mu_{\mathrm s}=0{,}30$ e $g=10\,\mathrm{m/s^2}$ il limite è $0{,}30\cdot5\cdot10\,\mathrm N=15\,\mathrm N$. Poiché $10\,\mathrm N\leq15\,\mathrm N$, il pacco resta fermo sul pianale. L'accelerazione massima che l'attrito può dare al pacco è $\dfrac{15}{5}\,\mathrm{m/s^2}=3\,\mathrm{m/s^2}$. Se il carrello accelerasse oltre $3\,\mathrm{m/s^2}$, l'attrito disponibile non basterebbe ad accelerare insieme il pacco. Il pacco inizierebbe a scivolare all'indietro rispetto al pianale; rispetto al laboratorio accelererebbe ancora verso destra, perché l'attrito dinamico su di esso punta ancora verso destra.
:::

## Il terzo principio

:::teorema{#azione-reazione titolo="Forze fra due corpi"}
Se $A$ esercita su $B$ la forza $\vec F_{A\to B}$ (il pedice si legge «di $A$ su $B$»), allora $B$ esercita su $A$ la forza $\vec F_{B\to A}=-\vec F_{A\to B}$. Le due azioni sono simultanee, hanno uguale modulo e verso opposto, e compaiono nei diagrammi di corpi diversi, una in quello di $B$ e l'altra in quello di $A$. Per stabilire se due forze formano una coppia di azione e reazione si identificano i due corpi che interagiscono, oltre a confrontare modulo e verso.

Sul libro fermo, peso e normale possono essere uguali e opposti, ma agiscono entrambi sul libro, quindi non sono una coppia del terzo principio. La reazione del peso del libro è l'attrazione gravitazionale del libro sulla Terra. La reazione della normale è la forza con cui il libro preme sul tavolo.

Per un camion e un'auto che si urtano, le forze di contatto hanno uguale modulo. Se quelle forze sono molto più grandi delle altre, e quindi costituiscono quasi tutta la risultante su ciascun mezzo, l'accelerazione di ciascuno è la forza divisa per la sua massa. Il camion ha massa maggiore, perciò subisce un'accelerazione di modulo minore. Forze reciproche uguali producono quindi accelerazioni molto diverse.
:::

::grafico{assi=0 uguale=1 poligoni="-2,-0.5 -1,-0.5 -1,0.5 -2,0.5;1,-0.5 2,-0.5 2,0.5 1,0.5" vettori="-1.5,0,-0.2,0,F_BA;1.5,0,0.2,0,F_AB" etichette="-1.63,-0.27,A;1.35,-0.27,B" xmin=-2.5 xmax=2.5 ymin=-1 ymax=1 titolo="F_BA è la forza di B su A. F_AB è la forza di A su B."}

## Corpi collegati

:::osservazione{#sistemi-collegati titolo="Tensione e accelerazione comune"}
Un filo **ideale** ha massa trascurabile ed è **inestensibile**, cioè la sua lunghezza non cambia. Finché è teso, quindi, se un'estremità si sposta di $1\,\mathrm{cm}$ anche l'altra si sposta di $1\,\mathrm{cm}$. Per due carrelli sulla stessa guida questo vincolo dà la stessa accelerazione. Una **carrucola** è una ruota su cui il filo passa e cambia direzione. Se le estremità si muovono su lati diversi di una carrucola, una può salire mentre l'altra scende, quindi i versi del moto possono essere opposti. La tensione ha lo stesso modulo nei due rami se filo e carrucola hanno massa trascurabile e la carrucola gira senza attrito.

Su un piano orizzontale liscio una forza $F$ trascina il carrello $m_1$, unito con un filo al carrello $m_2$.
- Nel sistema dei due carrelli la tensione è interna, quindi $F=(m_1+m_2)a$ e $a=\dfrac{F}{m_1+m_2}$.
- Sul secondo carrello, separato dal primo, la sola forza orizzontale è $T$, dunque $T=m_2a$.

Con $m_1=2\,\mathrm{kg}$, $m_2=3\,\mathrm{kg}$ e $F=10\,\mathrm{N}$ si trova $a=\dfrac{10}{2+3}\,\mathrm{m/s^2}=2\,\mathrm{m/s^2}$ e $T=3\cdot2\,\mathrm N=6\,\mathrm N$. Sulla massa tirata agiscono $F$ in avanti e $T$ all'indietro, cioè una risultante di $10-6=4\,\mathrm N$, che su $2\,\mathrm{kg}$ dà la stessa accelerazione. Se si mette il secondo carrello davanti e lo si tira con $F$, l'accelerazione comune resta uguale ma la tensione trascina l'altro carrello e vale $T=m_1a=4\,\mathrm N$.

Una **macchina di Atwood** è formata da due masse appese ai capi di un filo che passa su una carrucola. Con $m_2>m_1$ la massa più pesante scende e la più leggera sale. Per ciascuna massa si sceglie positivo il verso in cui si muove, cioè verso il basso per la più pesante e verso l'alto per la più leggera; così le due accelerazioni hanno lo stesso valore $a$. Su ogni massa agiscono il peso verso il basso e la tensione verso l'alto, quindi le equazioni sono
$$
m_2g-T=m_2a,\qquad T-m_1g=m_1a.
$$
Sommandole, $T$ si cancella e resta $(m_2-m_1)g=(m_1+m_2)a$, cioè $a=g\dfrac{m_2-m_1}{m_1+m_2}$. Poiché $m_2-m_1$ è minore di $m_1+m_2$, l'accelerazione è minore di $g$. La tensione si recupera da una delle due equazioni: $T=m_1(g+a)$ è maggiore del peso della massa che sale, e $T=m_2(g-a)$ è minore del peso della massa che scende. Se si ottiene il contrario, va ricontrollato il segno di $a$ nel diagramma separato.
:::

::grafico{assi=0 uguale=1 poligoni="-1.8,0 -0.8,0 -0.8,0.8 -1.8,0.8;0.8,0 1.8,0 1.8,0.8 0.8,0.8" segmenti="-2.5,0,3.4,0;-0.8,0.4,0.8,0.4" vettori="1.8,0.4,3.0,0.4,F" etichette="-1.3,0.5,m_2;1.3,0.5,m_1" xmin=-2.6 xmax=3.4 ymin=-0.5 ymax=1.3 titolo="La tensione del collegamento è interna al sistema dei due carrelli"}

:::osservazione{#massa-carrucola titolo="Quando le tensioni dei due rami differiscono"}
Se la carrucola ha massa, per cambiarne la velocità angolare (quanto rapidamente gira) serve un momento di forza. Il momento d'inerzia $I$ misura quanto la carrucola si oppone a una variazione della rotazione, come la massa si oppone a una variazione della velocità. Con raggio $R$ e asse senza attrito, le tensioni $T_1$ e $T_2$ dei due rami danno il momento $(T_2-T_1)R$, che soddisfa $(T_2-T_1)R=I\alpha$, dove $\alpha$ è l'accelerazione angolare. Se il filo non scivola sulla carrucola, il bordo si muove come il filo, quindi $\alpha=\dfrac{a}{R}$ e $T_2-T_1=\dfrac{I}{R^2}\,a$. Le equazioni delle masse diventano $m_2g-T_2=m_2a$ e $T_1-m_1g=m_1a$. Sommandole e inserendo la differenza di tensione si ottiene

$$
(m_2-m_1)g=\left(m_1+m_2+\frac{I}{R^2}\right)a.
$$

Il termine $\dfrac{I}{R^2}$ si misura in $\mathrm{kg\cdot m^2/m^2}=\mathrm{kg}$, cioè ha unità di massa. A parità di pesi aumenta la quantità che si oppone alla variazione del moto, quindi l'accelerazione diminuisce. Con $I=0$ si recupera il modello ideale e le due tensioni coincidono.
:::

:::osservazione{#contatto-unilaterale titolo="Controllare che il vincolo possa esercitare la forza"}
Due blocchi $A$ e $B$ sono a contatto su una guida liscia, con $A$ a sinistra. Un contatto semplice può solo spingere, cioè esercitare una compressione. Una spinta verso destra applicata ad $A$ può quindi accelerare entrambi, perché la compressione esercitata da $A$ spinge $B$ verso destra (figura in alto). Se la stessa spinta si applica solo a $B$, si verifica l'ipotesi di accelerazione comune sul blocco $A$. Per accelerare $A$ verso destra servirebbe che $B$ lo tirasse. Senza colla o aggancio il contatto non può tirare, perciò il contatto si apre, la forza di contatto si annulla e $B$ si allontana da $A$ con accelerazione $\dfrac{F}{m_B}$ (figura in basso).

Un filo teso invece può solo tirare, cioè trasmette trazione. Se la tensione calcolata supponendo fissa la lunghezza del filo ha segno negativo, il filo dovrebbe spingere. In quel caso il filo si allenta, la tensione è zero e le accelerazioni dei due corpi si ricalcolano separatamente.
:::

::grafico{assi=0 uguale=1 linee="-2.9,0 2.9,0;-2.9,1.8 2.9,1.8" poligoni="-0.9,0 0,0 0,0.65 -0.9,0.65;0.36,0 1.26,0 1.26,0.65 0.36,0.65;-0.9,1.8 0,1.8 0,2.45 -0.9,2.45;0,1.8 0.9,1.8 0.9,2.45 0,2.45" vettori="-2.3,2.125,-0.9,2.125,F;1.26,0.325,2.55,0.325,F" etichette="-0.55,2.24,A;0.38,2.24,B;-0.55,0.44,A;0.74,0.44,B" xmin=-3.1 xmax=3.1 ymin=-0.35 ymax=2.8 titolo="In alto la spinta su A si trasmette a B per compressione. In basso B si allontana da A."}

## Applicazioni verticali e circolari

:::teorema{#dinamica-circolare titolo="Peso apparente e forza radiale"}
Una persona sta su una bilancia dentro un ascensore. Finché resta a contatto con la bilancia, le forze verticali su di lei sono il peso $mg$ verso il basso e la normale $N$ verso l'alto. La bilancia indica $N$, detta anche **peso apparente**. Con verso positivo verso l'alto la seconda legge dà $N-mg=ma$, quindi $N=m(g+a)$.
- Se l'ascensore sale rallentando, la velocità è verso l'alto e diminuisce, quindi l'accelerazione è verso il basso, $a<0$, e la lettura è inferiore al peso.
- Se l'ascensore scende rallentando, $a>0$ e la lettura è superiore al peso.
- Se l'ascensore sale o scende a velocità costante, $a=0$ e la lettura è uguale al peso.

Conta quindi il verso dell'accelerazione, che può essere diverso da quello della velocità.

Per $m=60\,\mathrm{kg}$, $g=10\,\mathrm{m/s^2}$ e accelerazione verso il basso di $2\,\mathrm{m/s^2}$, cioè $a=-2\,\mathrm{m/s^2}$, la normale misura $60\cdot(10-2)\,\mathrm N=480\,\mathrm N$, mentre il peso resta $60\cdot10\,\mathrm N=600\,\mathrm N$. In caduta libera agisce solo il peso, quindi $a=-g$ e $N=m(g-g)=0$. Il pavimento può solo spingere, perciò il modello di contatto non ammette una normale negativa. Se l'equazione la richiedesse, la persona avrebbe perso il contatto e il modello andrebbe cambiato. Nella figura la retta $N=60\,(10+a)$ passa per $480\,\mathrm N$ ad $a=-2\,\mathrm{m/s^2}$, per $600\,\mathrm N$ ad $a=0$ e si annulla ad $a=-10\,\mathrm{m/s^2}$.

Nel moto circolare con velocità non nulla, la componente radiale della risultante, cioè quella lungo il raggio verso il centro, ha modulo $\dfrac{mv^2}{r}$. È la massa per l'**accelerazione centripeta** $\dfrac{v^2}{r}$ del moto circolare; con la velocità angolare $\omega$ (omega, misurata in radianti al secondo, $\mathrm{rad/s}$) vale $v=\omega r$, quindi l'accelerazione centripeta si scrive anche $\omega^2r$. La componente radiale è la somma lungo il raggio delle forze reali, perciò si disegnano prima le forze effettive e poi si proiettano lungo il raggio. Se la rapidità cambia, la risultante ha anche una componente tangente alla traiettoria, e il suo modulo supera quello della componente radiale.

Per un'auto in una curva orizzontale percorsa senza slittare, la forza verso il centro può venire dall'attrito statico degli pneumatici. In una curva verticale, peso e normale possono contribuire con segni diversi, prendendo positivo il verso del centro.
- Sul fondo di una conca il centro è verso l'alto, quindi $N-mg=\dfrac{mv^2}{r}$.
- Sulla sommità di una collina analoga il centro è verso il basso, quindi $mg-N=\dfrac{mv^2}{r}$, finché sussiste il contatto.
:::

::grafico{f="60*(10+x)" punti="-10,0,pieno;-2,480,pieno;0,600,pieno" xmin=-10 xmax=4 ymin=0 ymax=860 nomi="a (m/s²),N (N)" titolo="La bilancia indica 480 N quando l'accelerazione è −2 m/s²"}

:::esempio{#soglia-curva titolo="La velocità compatibile con il contatto"}
Con $m=3\,\mathrm{kg}$, $r=4\,\mathrm m$, $v=4\,\mathrm{m/s}$ e $g=10\,\mathrm{m/s^2}$, la componente radiale richiesta vale $\dfrac{mv^2}{r}=\dfrac{3\cdot4^2}{4}\,\mathrm N=12\,\mathrm N$ e il peso vale $30\,\mathrm N$. Nella conca $N$ supera il peso di $12\,\mathrm N$ e vale $30+12=42\,\mathrm N$. Sulla sommità $N$ è minore del peso di $12\,\mathrm N$ e vale $30-12=18\,\mathrm N$. Nella figura il peso è uguale nei due punti e la freccia della normale è più lunga nella conca.

Al crescere della rapidità, sulla sommità la normale $N=mg-\dfrac{mv^2}{r}$ diminuisce. Si annulla quando $mg=\dfrac{mv^2}{r}$, cioè, semplificando la massa, per $v=\sqrt{gr}$; qui $\sqrt{10\cdot4}\,\mathrm{m/s}\simeq6{,}3\,\mathrm{m/s}$. Per velocità più alte la traiettoria della strada richiederebbe una normale diretta verso il basso, impossibile per un semplice appoggio, quindi il corpo si stacca. Per una pista orizzontale la verifica riguarda invece l'attrito disponibile, che vale al massimo $\mu_{\mathrm s}mg$. La condizione $\dfrac{mv^2}{r}\leq\mu_{\mathrm s}mg$ dà quindi $v\leq\sqrt{\mu_{\mathrm s}gr}$.
:::

::grafico{assi=0 uguale=1 curve="-2.4+t,-0.18+0.275*t^2,-1.6,1.6;2.4+t,-0.18-0.275*t^2,-1.6,1.6" vettori="-2.4,0,-2.4,1.68,N;-2.4,0,-2.4,-1.2,P;2.4,0,2.4,0.72,N;2.4,0,2.4,-1.2,P" punti="-2.4,0,pieno;2.4,0,pieno" etichette="-3.6,-1.6,conca;2.65,-1.6,sommità" xmin=-4.3 xmax=4.3 ymin=-1.93 ymax=2.08 titolo="Peso uguale nei due punti e normali diverse. Il centro è sopra nella conca e sotto alla sommità."}
