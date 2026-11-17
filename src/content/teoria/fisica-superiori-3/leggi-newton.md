---
titolo: "I principi della dinamica"
sommario: "Diagrammi delle forze, principi di Newton, sistemi collegati, peso apparente e risultante radiale."
---

## Forze e corpo da studiare

:::definizione{#risultante titolo="Diagramma delle forze"}
Una **forza** descrive un'interazione tra due corpi. Si misura in newton: $1\,\mathrm N=1\,\mathrm{kg\cdot m/s^2}$. Per studiare un corpo, si rappresentano le forze che altri corpi esercitano su di esso. Nel modello di punto materiale le loro frecce possono partire da un punto comune. Per controllare la rotazione occorre invece conservare il punto di applicazione, perché da esso dipende il momento.

Per un libro appoggiato su un tavolo, il peso è l'azione gravitazionale della Terra sul libro e la normale è l'azione del tavolo sul libro. La forza con cui il libro preme sul tavolo appartiene al diagramma del tavolo. Scelto il corpo, si raccolgono tutte le forze esterne e si sommano **vettorialmente**. Una forza di $8\,\mathrm N$ a destra e una di $3\,\mathrm N$ a sinistra danno risultante di $5\,\mathrm N$ a destra, quale che sia la velocità del libro in quell'istante.

Per un insieme di corpi, una forza tra due suoi componenti è interna e, sommando le equazioni delle componenti, si cancella con la reazione. La distinzione dipende dal sistema scelto. Se si studiano due carrelli collegati includendo il filo nel sistema, le azioni filo-carrello sono interne. La tensione compare come forza esterna nel diagramma di ciascun carrello isolato.
:::

::grafico{assi=0 uguale=1 poligoni="-0.6,-0.4 0.6,-0.4 0.6,0.4 -0.6,0.4" segmenti="-2,-0.4,2,-0.4" vettori="0,0,0,1.5,N;0,0,0,-1.5,P;0,0,1.8,0,F" xmin=-2.7 xmax=2.7 ymin=-2 ymax=2 titolo="Sul libro spinto a destra agiscono peso, normale e spinta. Il piano è liscio."}

:::esempio{#confine-sistema titolo="Quando i corpi non hanno la stessa accelerazione"}
Due carrelli di masse $2\,\mathrm{kg}$ e $4\,\mathrm{kg}$ interagiscono sulla stessa guida. Si misura, nello stesso istante, $a_1=+3\,\mathrm{m/s^2}$ e $a_2=-1\,\mathrm{m/s^2}$ sulla stessa ascissa. Per ricavare la risultante esterna sul sistema si sommano le due equazioni. Le forze reciproche si eliminano e risulta

$$
\sum F_{\mathrm{ext},x}=m_1a_1+m_2a_2=(2\cdot3+4\cdot(-1))\,\mathrm N=+2\,\mathrm N.
$$

La risultante è positiva anche se un carrello accelera verso sinistra. La massa totale si può moltiplicare per un'unica accelerazione comune solo se il vincolo rende uguali le accelerazioni. In generale si usa l'accelerazione del centro di massa, qui $a_{\mathrm{CM},x}=\dfrac{2}{6}\,\mathrm{m/s^2}$. È la media delle accelerazioni pesata con le masse.
:::

::grafico{assi=0 uguale=1 linee="-3.8,0 3.8,0" poligoni="-2.2,0 -1.2,0 -1.2,0.7 -2.2,0.7;0.7,0 2.3,0 2.3,0.7 0.7,0.7" vettori="-1.7,1,-0.2,1,a₁;1.5,1,1.0,1,a₂" etichette="-1.9,0.43,2 kg;1.29,0.43,4 kg" xmin=-3.2 xmax=3.2 ymin=-0.44 ymax=1.65 titolo="I due carrelli possono accelerare in versi opposti. Per sommare i contributi si adopera lo stesso asse."}

## Il primo principio

:::teorema{#inerzia titolo="Principio d’inerzia"}
Un riferimento è **inerziale** se i corpi liberi da una risultante mantengono la velocità vettoriale costante. La quiete è il caso particolare $v=0$. In un laboratorio, il riferimento terrestre si usa spesso come approssimazione inerziale per moti brevi. Nella cabina di un treno in accelerazione, un disco libero può invece muoversi rispetto alla cabina anche con risultante orizzontale nulla.

Il principio distingue il mantenimento del moto dalla sua variazione. Su un piano orizzontale ideale senza attrito, peso e normale si compensano e un disco già in movimento conserva il moto rettilineo uniforme dopo che cessa la spinta. In un esperimento reale il disco può rallentare per attrito. Il rallentamento indica una risultante opposta alla velocità, accertabile misurando la pendenza del grafico velocità-tempo.

Una curva percorsa a rapidità costante richiede una risultante, perché cambia direzione della velocità. Per decidere se il movimento è inerziale occorrono sia il modulo sia la direzione della velocità.
:::

:::esempio{#riferimenti titolo="Misurare lo stesso disco da terra e dalla cabina"}
Un disco resta fermo rispetto al laboratorio mentre una cabina, inizialmente in quiete, parte verso destra con accelerazione $2\,\mathrm{m/s^2}$. Il pavimento è orizzontale e liscio. Dal laboratorio il disco ha velocità orizzontale nulla perché non riceve forze orizzontali. Il suo moto rispetto alla cabina si ricava sottraendo le due posizioni, $x_{\mathrm{rel}}=x-x_{\mathrm c}$.

La velocità del disco misurata dalla cabina ha quindi pendenza $-2\,\mathrm{m/s^2}$. Dopo $3\,\mathrm s$ vale $-6\,\mathrm{m/s}$. Il disaccordo delle due misure nasce dall’accelerazione della cabina. Se questa proseguisse a velocità costante, la differenza delle velocità sarebbe costante e le due accelerazioni misurate coinciderebbero.
:::

::grafico{linee="0,0 3,0;0,0 3,-6" punti="3,-6,pieno" etichette="1.3,0.43,terra;1.2,-3.36,cabina" xmin=0 xmax=3.6 ymin=-7.1 ymax=1.7 nomi="t (s),vₓ (m/s)" titolo="La velocità orizzontale del disco è costante da terra e diminuisce di 2 m/s ogni secondo vista dalla cabina."}

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

::grafico{f="4*x;8*x" punti="3,12,pieno;3,24,pieno" etichette="3.42,11.6,4 kg;3.2,26.8,8 kg" xmin=0 xmax=5 ymin=0 ymax=38 nomi="a (m/s²),F (N)" titolo="A uguale accelerazione, la forza necessaria cresce con la massa"}

:::esempio{#proiezioni-rampa titolo="Leggere una rampa con gli assi del vincolo"}
Un blocco pesa $50\,\mathrm N$ e resta in quiete su una rampa liscia inclinata di $30^\circ$, trattenuto da un filo parallelo al piano. Lungo il piano, positivo verso l’alto, il peso ha componente $-50\sin30^\circ=-25\,\mathrm N$. Quindi il filo esercita $T=25\,\mathrm N$. Perpendicolarmente al piano l'accelerazione è nulla e la normale vale $N=50\cos30^\circ\simeq43{,}3\,\mathrm N$.

La normale si determina dalla proiezione di tutte le altre forze sull’asse perpendicolare. Sul piano orizzontale coincide col peso se nessun'altra forza ha componente verticale. Anche su un piano orizzontale, una trazione obliqua verso l’alto riduce la normale, quindi riduce il limite di attrito statico.
:::

::grafico{assi=0 uguale=1 linee="-2.5,-1.943376 2.5,0.943376" vettori="0,0,0,-2,P;0,0,0.866025,0.5,T;0,0,-0.866025,1.5,N" segmenti="0,-2,-0.866025,-0.5;0,0,-0.866025,-0.5" punti="0,0,pieno" xmin=-2.7 xmax=2.7 ymin=-2.5 ymax=1.97 titolo="Il cateto tratteggiato parallelo alla rampa ha lunghezza uguale alla freccia di T."}

:::osservazione{#attrito titolo="La soglia statica dipende dalla normale"}
L’attrito statico si trova imponendo l'assenza di scorrimento. Se il piano è fermo e il blocco è inizialmente in quiete, lungo il piano si impone accelerazione nulla. Il valore richiesto all’attrito è ammissibile se $|F_{\mathrm s}|\leq\mu_{\mathrm s}N$. Quando il valore richiesto supera il limite, bisogna passare al modello di scorrimento, con modulo $|F_{\mathrm d}|=\mu_{\mathrm d}N$ e verso opposto alla velocità relativa tra le superfici.

Per $m=4\,\mathrm{kg}$ su piano orizzontale, $g=10\,\mathrm{m/s^2}$, $\mu_{\mathrm s}=0{,}50$ e $\mu_{\mathrm d}=0{,}30$, il limite statico vale $20\,\mathrm N$. In scorrimento il modulo vale $12\,\mathrm N$. Indichiamo con $F$ il modulo della spinta orizzontale verso destra.

| Stato del blocco | Forza applicata | Esito |
| --- | --- | --- |
| Inizialmente fermo | $0\leq F\leq20\,\mathrm N$ | Quiete, attrito di modulo $F$ |
| Inizialmente fermo | $F>20\,\mathrm N$ | Inizia a scorrere verso destra |
| Scorre verso destra | $F>12\,\mathrm N$ | La rapidità aumenta |
| Scorre verso destra | $F=12\,\mathrm N$ | La rapidità resta costante |
| Scorre verso destra | $0\leq F<12\,\mathrm N$ | Rallenta fino a fermarsi se la spinta resta costante |

Una spinta di $16\,\mathrm N$ può quindi mantenere il blocco fermo oppure fargli aumentare la rapidità, a seconda dello stato iniziale. Nel secondo caso $a_x=\dfrac{16-12}{4}\,\mathrm{m/s^2}=1\,\mathrm{m/s^2}$. Se durante lo scorrimento si toglie la spinta, il blocco rallenta. All'arresto si verifica di nuovo il regime statico prima di prolungare il calcolo.
:::

::grafico{curve="t,t,0,20;t,12,0,31" segmenti="20,0,20,20" punti="20,20,pieno;16,16,pieno;16,12,pieno" etichette="11.8,17.4,quiete;24,12.9,scorrimento" xmin=0 xmax=31 ymin=0 ymax=25 nomi="F (N),|attrito| (N)" titolo="Per F = 16 N il modulo dell'attrito vale 16 N se il blocco è fermo e 12 N se sta scorrendo."}

:::esempio{#attrito-su-carrello titolo="Attrito statico con accelerazione diversa da zero"}
Un pacco di $5\,\mathrm{kg}$ è appoggiato sul pianale orizzontale di un carrello che accelera verso destra a $2\,\mathrm{m/s^2}$. Se non scivola, rispetto al pavimento del laboratorio il pacco ha la stessa accelerazione del carrello. La sua unica forza orizzontale è l’attrito statico, che deve valere $10\,\mathrm N$ verso destra.

Con $\mu_{\mathrm s}=0{,}30$ e $g=10\,\mathrm{m/s^2}$ il limite è $15\,\mathrm N$, quindi il vincolo può reggere. Se il carrello accelerasse oltre $3\,\mathrm{m/s^2}$, l’attrito disponibile non basterebbe ad accelerare insieme il pacco. Il pacco inizierebbe a scivolare all’indietro rispetto al pianale, pur potendo ancora accelerare verso destra rispetto al laboratorio.
:::

## Il terzo principio

:::teorema{#azione-reazione titolo="Forze fra due corpi"}
Se $A$ esercita su $B$ la forza $\vec F_{A\to B}$, allora $B$ esercita su $A$ la forza $\vec F_{B\to A}=-\vec F_{A\to B}$. Le due azioni sono simultanee, hanno uguale modulo e verso opposto, e compaiono nei diagrammi di corpi diversi. Per stabilire se due forze formano una coppia occorre identificare i corpi che interagiscono, oltre a confrontare modulo e verso.

Sul libro fermo, peso e normale possono essere uguali e opposti. Il reciproco del peso del libro è la sua attrazione gravitazionale sulla Terra. Il reciproco della normale è la pressione del libro sul tavolo. Per un camion e un'auto che si urtano, le forze di contatto hanno uguale modulo. Se la massa del camion è maggiore e quelle forze dominano le risultanti, il camion subisce un'accelerazione di modulo minore. L'uguaglianza delle forze reciproche è compatibile con risposte molto diverse.
:::

::grafico{assi=0 uguale=1 poligoni="-2,-0.5 -1,-0.5 -1,0.5 -2,0.5;1,-0.5 2,-0.5 2,0.5 1,0.5" vettori="-1.5,0,-0.2,0,F_BA;1.5,0,0.2,0,F_AB" etichette="-1.63,-0.27,A;1.35,-0.27,B" xmin=-2.5 xmax=2.5 ymin=-1 ymax=1 titolo="F_BA è la forza di B su A. F_AB è la forza di A su B."}

## Corpi collegati

:::osservazione{#sistemi-collegati titolo="Tensione e accelerazione comune"}
Un filo ideale, teso e inestensibile, mantiene fissa la sua lunghezza e quindi lega gli spostamenti delle due estremità. Per due carrelli sulla stessa guida li costringe ad avere la stessa accelerazione. Se le estremità si muovono su lati diversi di una carrucola, i versi spaziali possono essere opposti. La tensione ha lo stesso modulo nei due rami se filo e carrucola sono privi di massa e la carrucola non ha attrito.

Su un piano orizzontale liscio, una forza $F$ trascina il carrello $m_1$, unito a $m_2$. Considerando la coppia, $a=F/(m_1+m_2)$. Separando il secondo carrello, la sola forza orizzontale su di esso è $T$, dunque $T=m_2a$. Con $m_1=2\,\mathrm{kg}$, $m_2=3\,\mathrm{kg}$ e $F=10\,\mathrm{N}$ si trova $a=2\,\mathrm{m/s^2}$ e $T=6\,\mathrm N$. Sulla massa tirata agiscono $10-6=4\,\mathrm N$, che danno la stessa accelerazione. Mettendo il secondo carrello davanti e tirandolo con $F$, l’accelerazione comune resta uguale ma cambia il corpo che la tensione trascina.

Per due masse sospese in una macchina di Atwood, con $m_2>m_1$, si sceglie positivo verso il basso per la massa più pesante e verso l’alto per la più leggera. Le equazioni sono
$$
m_2g-T=m_2a,\qquad T-m_1g=m_1a.
$$
Sommandole si ottiene $a=g(m_2-m_1)/(m_1+m_2)$. La tensione si recupera da una delle due equazioni. È maggiore del peso della massa che sale e minore del peso della massa che scende. Se si ottiene il contrario, va ricontrollato il segno di $a$ nel diagramma separato.
:::

::grafico{assi=0 uguale=1 poligoni="-1.8,0 -0.8,0 -0.8,0.8 -1.8,0.8;0.8,0 1.8,0 1.8,0.8 0.8,0.8" segmenti="-2.5,0,3.4,0;-0.8,0.4,0.8,0.4" vettori="1.8,0.4,3.0,0.4,F" etichette="-1.3,0.5,m_2;1.3,0.5,m_1" xmin=-2.6 xmax=3.4 ymin=-0.5 ymax=1.3 titolo="La tensione del collegamento è interna al sistema dei due carrelli"}

:::osservazione{#massa-carrucola titolo="Quando le tensioni dei due rami differiscono"}
Se la carrucola ha massa, occorre un momento di forza per cambiarne la velocità angolare. Con momento d’inerzia $I$, raggio $R$ e asse senza attrito, la differenza fra le tensioni soddisfa $(T_2-T_1)R=I\alpha$. Se il filo non scivola sulla carrucola, $\alpha=a/R$. Inserendo la differenza di tensione nelle equazioni delle masse si ottiene

$$
(m_2-m_1)g=\left(m_1+m_2+\frac{I}{R^2}\right)a.
$$

Il termine $I/R^2$ ha unità di massa. Per gli stessi pesi aumenta la quantità che si oppone alla variazione del moto, quindi l’accelerazione diminuisce. Con $I=0$ si recupera il modello ideale e le due tensioni coincidono.
:::

:::osservazione{#contatto-unilaterale titolo="Controllare che il vincolo possa esercitare la forza"}
Due blocchi $A$ e $B$ sono a contatto su una guida liscia, con $A$ a sinistra. Una spinta verso destra applicata ad $A$ può accelerare entrambi. La compressione esercitata da $A$ spinge $B$ verso destra. Se la stessa spinta si applica solo a $B$, verificare l’ipotesi di accelerazione comune sul blocco $A$: per accelerarlo a destra servirebbe che $B$ lo tirasse. Senza adesione o collegamento, il contatto si apre e la forza di contatto si annulla.

Un filo teso trasmette invece trazione. Se la tensione ottenuta con la lunghezza fissata ha segno negativo, il filo dovrebbe spingere. Occorre permettere al filo di allentarsi e ricalcolare le accelerazioni dei due corpi separatamente.
:::

::grafico{assi=0 uguale=1 linee="-2.9,0 2.9,0;-2.9,1.8 2.9,1.8" poligoni="-0.9,0 0,0 0,0.65 -0.9,0.65;0.36,0 1.26,0 1.26,0.65 0.36,0.65;-0.9,1.8 0,1.8 0,2.45 -0.9,2.45;0,1.8 0.9,1.8 0.9,2.45 0,2.45" vettori="-2.3,2.125,-0.9,2.125,F;1.26,0.325,2.55,0.325,F" etichette="-0.55,2.24,A;0.38,2.24,B;-0.55,0.44,A;0.74,0.44,B" xmin=-3.1 xmax=3.1 ymin=-0.35 ymax=2.8 titolo="In alto la spinta su A si trasmette a B per compressione. In basso B si allontana da A."}

## Applicazioni verticali e circolari

:::teorema{#dinamica-circolare titolo="Peso apparente e forza radiale"}
Dentro un ascensore, finché la persona resta a contatto con la bilancia e le forze verticali sono peso e normale, con verso positivo verso l'alto si ha $N-mg=ma$. Quindi $N=m(g+a)$. Se l'ascensore sale rallentando, $a<0$ e la lettura è inferiore al peso. Se scende rallentando, $a>0$ e la lettura è superiore al peso. Conta il verso dell'accelerazione, che può essere diverso da quello della velocità.

Per $m=60\,\mathrm{kg}$, $g=10\,\mathrm{m/s^2}$ e accelerazione verso il basso di $2\,\mathrm{m/s^2}$, la normale misura $480\,\mathrm N$ mentre il peso resta $600\,\mathrm N$. In caduta libera $a=-g$ e $N=0$. Il modello di contatto con il pavimento non ammette una normale negativa. Se l'equazione la richiedesse, la persona avrebbe perso il contatto e occorrerebbe cambiare il modello.

Nel moto circolare con velocità non nulla, la componente radiale della risultante ha modulo $mv^2/r$ verso il centro. Si disegnano prima le forze effettive e poi si proiettano lungo il raggio. Per un'auto in una curva orizzontale senza slittare, il contributo orizzontale può venire dall'attrito statico degli pneumatici. In una curva verticale, peso e normale possono contribuire con segni diversi. Sul fondo di una conca il centro è verso l'alto, quindi $N-mg=mv^2/r$. Sulla sommità di una collina analoga il centro è verso il basso e vale $mg-N=mv^2/r$, finché sussiste il contatto.
:::

::grafico{f="60*(10+x)" punti="-10,0,pieno;-2,480,pieno;0,600,pieno" xmin=-10 xmax=4 ymin=0 ymax=860 nomi="a (m/s²),N (N)" titolo="La bilancia indica 480 N quando l'accelerazione è −2 m/s²"}

:::esempio{#soglia-curva titolo="La velocità compatibile con il contatto"}
Con $m=3\,\mathrm{kg}$, $r=4\,\mathrm m$, $v=4\,\mathrm{m/s}$ e $g=10\,\mathrm{m/s^2}$, la componente radiale richiesta vale $12\,\mathrm N$. Nella conca, $N$ supera il peso di $12\,\mathrm N$ e vale $42\,\mathrm N$. Sulla sommità, $N$ è minore del peso di $12\,\mathrm N$ e vale $18\,\mathrm N$.

Al crescere della rapidità, sulla sommità la normale diminuisce e si annulla per $v=\sqrt{gr}$. Per velocità più alte la traiettoria della strada richiederebbe una normale diretta verso il basso, impossibile per un semplice appoggio. Il corpo si stacca. Per una pista orizzontale la verifica riguarda invece l’attrito disponibile: la condizione $mv^2/r\leq\mu_{\mathrm s}mg$ dà $v\leq\sqrt{\mu_{\mathrm s}gr}$.
:::

::grafico{assi=0 uguale=1 curve="-2.4+t,-0.18+0.275*t^2,-1.6,1.6;2.4+t,-0.18-0.275*t^2,-1.6,1.6" vettori="-2.4,0,-2.4,1.68,N;-2.4,0,-2.4,-1.2,P;2.4,0,2.4,0.72,N;2.4,0,2.4,-1.2,P" punti="-2.4,0,pieno;2.4,0,pieno" etichette="-3.6,-1.6,conca;2.65,-1.6,sommità" xmin=-4.3 xmax=4.3 ymin=-1.93 ymax=2.08 titolo="Peso uguale nei due punti e normali diverse. Il centro è sopra nella conca e sotto alla sommità."}
