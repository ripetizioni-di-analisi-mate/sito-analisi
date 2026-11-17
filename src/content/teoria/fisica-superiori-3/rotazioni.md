---
titolo: Rotazioni, momento angolare e rotolamento
sommario: Cinematica e dinamica angolare, lavoro, conservazione del momento angolare e rotolamento puro.
---

## Cinematica angolare

:::definizione{#cinematica-angolare titolo="Velocità e accelerazione angolari"}
Si fissi un asse di rotazione e si scelga un verso positivo. L’angolo $\theta$ si misura in radianti; un giro corrisponde a $2\pi$ radianti, e l’arco di raggio $R$ e angolo $\Delta\theta$ ha lunghezza orientata $R\Delta\theta$. Si può tenere il conto di più giri lasciando che $\theta$ cresca oltre $2\pi$. La **velocità angolare** $\omega$ è la variazione di angolo per tempo e l’**accelerazione angolare** $\alpha$ è la variazione di velocità angolare per tempo. Con $\alpha$ costante nell’intervallo di durata $t$,
$$
\omega=\omega_0+\alpha t,\qquad
\theta-\theta_0=\omega_0t+\frac12\alpha t^2.
$$
La seconda formula somma il contributo della velocità angolare iniziale e quello dell’accelerazione. Si ottiene anche come area orientata del trapezio sotto il grafico $\omega$-$t$. Quando $\omega$ attraversa zero, le due parti del grafico vanno contate con segni opposti per l’angolo netto. Per calcolare l’angolo totale percorso in modulo, invece, si sommano i moduli delle aree.

Due punti di uno stesso corpo rigido hanno gli stessi $\omega$ e $\alpha$ ma, a distanze diverse dall’asse, le loro velocità tangenziali hanno moduli diversi. A distanza $R$ valgono $v=|\omega|R$ e $a_t=|\alpha|R$ per i moduli tangenziali; l’accelerazione radiale di modulo $\omega^2R$ cambia la direzione della velocità. Anche quando $\omega$ è costante e $a_t=0$, il punto possiede accelerazione radiale.
:::

:::esempio{titolo="Accelerazioni in un punto del disco"}
Guardando il disco da un’estremità dell’asse, si sceglie il senso antiorario come positivo. Sul bordo destro a $R=0{,}35\,\mathrm m$, $\omega=-6\,\mathrm{rad/s}$ dà una velocità di $2{,}1\,\mathrm{m/s}$ verso il basso. Se $\alpha=+4\,\mathrm{rad/s^2}$, l’accelerazione tangenziale vale $1{,}4\,\mathrm{m/s^2}$ verso l’alto. In quell’istante il modulo della velocità diminuisce perché la componente tangenziale è opposta alla velocità. L’accelerazione radiale di $12{,}6\,\mathrm{m/s^2}$ è invece diretta verso il centro. I suoi effetti sulla direzione si aggiungono a quelli della componente tangenziale sul modulo.

::grafico{assi=0 uguale=1 curve="2*cos(t),2*sin(t),0,6.283185" linee="0,0 2,0" vettori="2,0,2,-1.45,v;2,0,2,1.05,a_t;2,0,.48,0,a_r" punti="0,0,pieno,O;2,0,pieno" xmin=-2.35 xmax=2.85 ymin=-2.35 ymax=2.35 titolo="Sul bordo destro, velocità e accelerazione tangenziale sono opposte. Le frecce mostrano le direzioni."}
:::

:::esempio{titolo="Arresto e inversione"}
Con $\omega_0=4\,\mathrm{rad/s}$ e $\alpha=-2\,\mathrm{rad/s^2}$, dopo $3\,\mathrm s$ si ottiene $\omega=-2\,\mathrm{rad/s}$. Il disco si arresta a $2\,\mathrm s$ e poi inverte. Il primo triangolo del grafico vale $4\,\mathrm{rad}$ e il secondo $-1\,\mathrm{rad}$. L’angolo netto è $3\,\mathrm{rad}$, mentre l’angolo percorso vale $5\,\mathrm{rad}$ in modulo.

::grafico{linee="0,4 3,-2" area="4-2*x;0;0;2|4-2*x;0;2;3" punti="2,0,pieno" xmin=0 xmax=3.6 ymin=-3 ymax=5 nomi="t (s),ω (rad/s)" titolo="Le aree sopra e sotto l’asse hanno segni opposti"}
:::

:::esempio{titolo="Dai dati di un sensore all’accelerazione"}
Un sensore rileva gli angoli $0{,}20$, $0{,}68$ e $1{,}28\,\mathrm{rad}$ ai tempi $0$, $0{,}20$ e $0{,}40\,\mathrm s$. Nei due intervalli l’angolo cresce di $0{,}48$ e $0{,}60\,\mathrm{rad}$. Le velocità medie sono quindi $2{,}40$ e $3{,}00\,\mathrm{rad/s}$. Con accelerazione angolare costante, ciascuna media è la velocità all’istante centrale del proprio intervallo.

I due istanti centrali sono separati da $0{,}20\,\mathrm s$, perciò $\alpha=\dfrac{3{,}00-2{,}40}{0{,}20}=3{,}0\,\mathrm{rad/s^2}$. Riportando la prima media indietro di $0{,}10\,\mathrm s$ si ottiene $\omega_0=2{,}10\,\mathrm{rad/s}$. Una quarta lettura permetterebbe di controllare l’ipotesi di accelerazione costante. Se il sensore riporta l’angolo sempre entro un giro, occorre ricostruire i giri interi prima di fare le differenze fra letture.
:::

## Momento d’inerzia

:::definizione{#inerzia-rotazione titolo="Distanza della massa dall’asse"}
Il **momento d’inerzia** rispetto a un asse è $I=\sum_i m_ir_i^2$ per masse puntiformi, dove $r_i$ è la distanza perpendicolare dall’asse. Si misura in $\mathrm{kg\cdot m^2}$. Una massa sull’asse dà contributo nullo, e spostare una massa al doppio della distanza quadruplica il suo contributo. Per corpi estesi si applica la stessa somma a porzioni di massa via via più piccole.

Rispetto all’asse centrale perpendicolare al piano, un anello sottile ha $I=mR^2$ e un disco pieno omogeneo $I=\dfrac12mR^2$. Rispetto a un diametro, una sfera piena omogenea ha $I=\dfrac25mR^2$. Le formule descrivono distribuzioni diverse. Per una macchina composta si sommano i momenti dei componenti riferiti tutti allo stesso asse; per un asse parallelo a quello del centro di massa e distante $d$ si usa il **teorema degli assi paralleli** $I=I_{CM}+md^2$.
:::

:::osservazione{titolo="Scelta dell’asse e distribuzione della massa"}
Il rapporto $b=\dfrac{I_{CM}}{mR^2}$ è adimensionale. Per i corpi della tabella, $R$ è il raggio esterno e $I_{CM}$ si riferisce all’asse indicato. Il coefficiente permette di confrontare corpi di massa e raggio uguali a partire dalla distribuzione della massa.

| Corpo | Asse | $b$ |
| --- | --- | ---: |
| Anello sottile | Centrale, perpendicolare al piano | $1$ |
| Disco pieno omogeneo | Centrale, perpendicolare al piano | $\dfrac{1}{2}$ |
| Sfera piena omogenea | Diametro | $\dfrac{2}{5}$ |

Per trasportare l’asse centrale di $d$ lungo la direzione $x$, il quadrato della distanza di ciascuna massa diventa $(x_i-d)^2+y_i^2$. La somma dei termini misti è $-2d\sum_i m_ix_i=0$ perché l’origine è il centro di massa. Il termine rimasto oltre a $I_{CM}$ è $d^2\sum_i m_i=md^2$. Il passaggio richiede assi paralleli.

::grafico{f="x^2/100" punti="20,4,pieno;40,16,pieno" etichette="21.2,3.4,4;40.8,15.1,16" xmin=0 xmax=50 ymin=0 ymax=25 nomi="r (cm),I (10⁻² kg·m²)" titolo="Per una massa puntiforme da 1 kg, passando da 0,20 a 0,40 m il contributo quadruplica"}
:::

:::esempio{titolo="Un disco rispetto a due assi"}
Un disco da $4\,\mathrm{kg}$ e raggio $0{,}50\,\mathrm m$ ha momento centrale $0{,}50\,\mathrm{kg\cdot m^2}$. Spostando l’asse parallelamente fino al bordo, si aggiunge $4\cdot0{,}50^2\,\mathrm{kg\cdot m^2}=1\,\mathrm{kg\cdot m^2}$. Il totale vale $1{,}50\,\mathrm{kg\cdot m^2}$. Il termine aggiunto è positivo perché in media aumenta il quadrato delle distanze dall’asse.

::grafico{uguale=1 assi=0 curve=".5*cos(t),.5*sin(t),0,6.283185" linee="0,0.5,0" punti="0,0,pieno,C;.5,0,pieno,B" xmin=-.7 xmax=.8 ymin=-.7 ymax=.7 titolo="Gli assi sono perpendicolari al disegno e passano per C e B"}
:::

## Equazione della rotazione

:::teorema{#dinamica-rotazione titolo="Momento risultante e accelerazione angolare"}
Per un corpo rigido che ruota attorno a un asse fisso e ha $I$ costante, la somma algebrica dei momenti delle forze rispetto all’asse è
$$
\sum_jM_j=I\alpha.
$$
Il momento di una forza applicata nel piano ortogonale all’asse ha modulo $M=rF\sin\phi$, con $\phi$ angolo tra raggio e forza. Equivale a $rF_t$, con $F_t$ componente tangenziale, o a $F d_\perp$, con $d_\perp$ distanza perpendicolare dall’asse alla retta d’azione. Si assegna poi il segno secondo il verso di rotazione indotto. Una forza lungo la retta passante per l’asse ha braccio nullo, anche se applicata lontano dall’asse.

Due momenti opposti si sottraggono. Un momento risultante nullo implica $\alpha=0$, ma il corpo può già ruotare con velocità angolare non nulla. Per una carrucola con inerzia e due tensioni tangenziali, il momento delle tensioni è $(T_1-T_2)R$ scegliendo positivo il verso di $T_1$. Se l’accelerazione è non nulla, le tensioni possono differire per fornire il momento necessario.
:::

:::esempio{titolo="Momento firmato e braccio perpendicolare"}
Si orienta l’asse $z$ verso chi osserva, così il momento antiorario è positivo. La componente assiale del prodotto vettoriale è $M_z=xF_y-yF_x$. Per una forza $\vec F=(3,-4)\,\mathrm N$ applicata in $A=(0{,}40,0)\,\mathrm m$, la componente orizzontale ha momento nullo e quella verticale dà $M_z=-1{,}6\,\mathrm{N\cdot m}$. La retta d’azione dista $0{,}32\,\mathrm m$ da $O$, perciò il prodotto $F d_\perp$ restituisce il modulo $5\cdot0{,}32=1{,}6\,\mathrm{N\cdot m}$.

::grafico{assi=0 uguale=1 linee="0,0.4,0" segmenti=".12,.373333,.64,-.32;0,0,.256,.192" vettori=".4,0,.58,-.24,F" punti="0,0,pieno,O;.4,0,pieno,A;.256,.192,pieno" etichette=".092,.14,d_⊥" xmin=-.07 xmax=.73 ymin=-.36 ymax=.45 titolo="Il braccio indicato è perpendicolare alla retta d’azione. Il momento della forza è orario."}
:::

:::esempio{titolo="Momenti di segno opposto"}
Una ruota con $I=2\,\mathrm{kg\cdot m^2}$ riceve due momenti, $+6\,\mathrm{N\cdot m}$ e $-2\,\mathrm{N\cdot m}$. La somma vale $+4\,\mathrm{N\cdot m}$ e l’accelerazione $+2\,\mathrm{rad/s^2}$. Se la ruota ruota inizialmente in senso negativo, questa accelerazione la rallenta fino all’arresto; dopo l’arresto, la velocità angolare cresce in senso positivo finché agiscono gli stessi momenti.
:::

:::osservazione{titolo="Le due tensioni di una carrucola"}
Una carrucola di raggio $0{,}20\,\mathrm m$ riceve una trazione di $30\,\mathrm N$ verso il basso sul lato sinistro e di $10\,\mathrm N$ verso il basso sul lato destro. Rispetto al perno le tensioni danno i momenti $+6$ e $-2\,\mathrm{N\cdot m}$. Se il perno esercita una reazione con retta d’azione passante per l’asse e l’attrito del perno è trascurabile, il momento risultante è $+4\,\mathrm{N\cdot m}$, come nell’esempio della ruota.

::grafico{assi=0 uguale=1 curve=".2*cos(t),.2*sin(t),0,6.283185" linee="-.2,0.2,0" vettori="-.2,0,-.2,-.3,T_1;.2,0,.2,-.1,T_2" punti="0,0,pieno,O" xmin=-.36 xmax=.43 ymin=-.37 ymax=.27 titolo="T1 e T2 sono entrambe dirette verso il basso e producono momenti opposti rispetto a O"}
:::

## Energia e lavoro nella rotazione

:::teorema{#energia-rotazione titolo="Energia cinetica rotazionale"}
Per rotazione attorno a un asse fisso, ogni massa ha velocità di modulo $|\omega|r_i$. Sommando $\dfrac12m_i\omega^2r_i^2$ e raccogliendo il fattore comune si ottiene $K_{\mathrm{rot}}=\dfrac12I\omega^2$. Allo stesso $I$, raddoppiare la velocità angolare quadruplica l’energia, e cambiare verso di rotazione lascia invariata l’energia.

Un momento costante rispetto all’asse compie lavoro $W=M\Delta\theta$, con angolo in radianti e con segno. Un momento variabile richiede invece l’area orientata nel grafico momento-angolo. La potenza meccanica istantanea vale $P=M\omega$. Il momento si misura in newton metri, ma è il prodotto con l’angolo percorso a rappresentare il lavoro in joule.

Nel moto piano di un corpo rigido, si separa la traslazione del centro di massa dalla rotazione attorno al centro di massa. L’energia complessiva è $\dfrac12mv_{CM}^2+\dfrac12I_{CM}\omega^2$. I termini misti si cancellano perché, rispetto al centro di massa, la somma pesata delle posizioni dei punti è zero.
:::

:::esempio{titolo="Lavoro per variare il modulo di rotazione"}
Un volano con $I=0{,}50\,\mathrm{kg\cdot m^2}$ passa da $4$ a $8\,\mathrm{rad/s}$. L’energia passa da $4$ a $16\,\mathrm J$, perciò il lavoro risultante è $12\,\mathrm J$. Se il momento lungo l’asse è costante e pari a $3\,\mathrm{N\cdot m}$, serve uno spostamento angolare di $4\,\mathrm{rad}$.
:::

:::esempio{titolo="Lavoro da un grafico momento-angolo"}
Un motore imprime un momento risultante di $4\,\mathrm{N\cdot m}$ mentre un albero percorre i primi $3\,\mathrm{rad}$ nel verso positivo. Nei successivi $2\,\mathrm{rad}$ il momento passa a $-2\,\mathrm{N\cdot m}$. Il lavoro vale $4\cdot3-2\cdot2=8\,\mathrm J$. Con energia cinetica iniziale di $10\,\mathrm J$ l’energia sale a $22\,\mathrm J$ e poi scende a $18\,\mathrm J$. Durante il secondo tratto la velocità rimane positiva anche mentre la potenza del momento è negativa.

::grafico{linee="0,4 3,4;3,-2 5,-2" segmenti="3,4,3,-2" area="4;0;0;3|-2;0;3;5" xmin=0 xmax=5.65 ymin=-3 ymax=5 nomi="θ (rad),M (N·m)" titolo="Il primo rettangolo rappresenta 12 J, il secondo −4 J"}
:::

:::esempio{titolo="Due modi di calcolare la stessa energia"}
Il disco di massa $4\,\mathrm{kg}$ e raggio $0{,}50\,\mathrm m$ può ruotare attorno a un perno fisso al bordo. Con $\omega=4\,\mathrm{rad/s}$ si può descrivere tutto il moto come rotazione attorno al perno. L’inerzia riferita al bordo vale $1{,}50\,\mathrm{kg\cdot m^2}$ e la cinetica risulta $12\,\mathrm J$.

Con la seconda descrizione il centro percorre una circonferenza attorno al perno con velocità di modulo $2\,\mathrm{m/s}$. La sua traslazione contribuisce con $8\,\mathrm J$ e la rotazione rispetto al centro con $4\,\mathrm J$. Nel teorema degli assi paralleli il termine $mR^2$ moltiplicato per $\dfrac12\omega^2$ produce proprio gli $8\,\mathrm J$. Aggiungerli all’energia già calcolata rispetto al perno li conterebbe due volte.
:::

## Momento angolare

:::teorema{#momento-angolare titolo="Bilancio rispetto a un asse"}
Per una particella il momento angolare relativo a un punto è $\vec L=\vec r\times\vec p$. Per rotazione attorno a un asse fisso si usa la componente lungo quell’asse, $L=I\omega$. Il **bilancio del momento angolare** lega la sua variazione all’impulso del momento esterno rispetto allo stesso asse. Con momento esterno risultante nullo, si ha $I_i\omega_i=I_f\omega_f$. In questa relazione $I$ può cambiare perché cambiano le posizioni delle masse, anche se la massa totale resta la stessa. Durante lo spostamento si può usare $L=I\omega$ se tutte le masse condividono la stessa velocità angolare. In quel caso la variazione di $L$ dipende sia dal cambiamento di $\omega$ sia dal cambiamento di $I$. La legge $\sum M=I\alpha$ si recupera quando l’inerzia è costante.

Un pattinatore che avvicina le braccia all’asse riduce $I$. Per mantenere lo stesso $L$, aumenta il modulo di $\omega$. Scrivendo $K_{\mathrm{rot}}=\dfrac{L^2}{2I}$ si vede che, a momento angolare fissato, l’energia cresce quando $I$ diminuisce. Il lavoro muscolare permette l’aumento di energia cinetica senza fornire un momento esterno al sistema.
:::

:::esempio{titolo="Controllo separato delle due grandezze"}
Per $I_i=3\,\mathrm{kg\cdot m^2}$, $\omega_i=2\,\mathrm{rad/s}$ e $I_f=1{,}5\,\mathrm{kg\cdot m^2}$, il momento angolare vale $6\,\mathrm{kg\cdot m^2/s}$. Segue $\omega_f=4\,\mathrm{rad/s}$. L’energia passa da $6$ a $12\,\mathrm J$. Il momento angolare resta costante mentre l’energia aumenta di $6\,\mathrm J$.

::grafico{f="6/x" punti="3,2,pieno,A;1.5,4,pieno,B" xmin=1 xmax=4 ymin=0 ymax=7 nomi="I (kg·m²),ω (rad/s)" titolo="Riducendo I si sale lungo la curva a momento angolare costante"}
:::

:::esempio{titolo="Variazione del momento angolare in due intervalli"}
L’area orientata del grafico $M$–$t$ è l’impulso angolare. Se un rotore ha $L_i=-2\,\mathrm{kg\cdot m^2/s}$, un momento di $+3\,\mathrm{N\cdot m}$ per $2\,\mathrm s$ porta $L$ a $+4\,\mathrm{kg\cdot m^2/s}$. Un momento di $-1\,\mathrm{N\cdot m}$ per i successivi $3\,\mathrm s$ lo riduce a $+1\,\mathrm{kg\cdot m^2/s}$. Nell’intero intervallo l’impulso è $+3\,\mathrm{N\cdot m\cdot s}$, un’unità equivalente a $\mathrm{kg\cdot m^2/s}$. Se due impulsi si compensano, il valore finale coincide con quello iniziale anche in presenza di variazioni intermedie.

::grafico{linee="0,3 2,3;2,-1 5,-1" segmenti="2,3,2,-1" area="3;0;0;2|-1;0;2;5" xmin=0 xmax=5.65 ymin=-2 ymax=4 nomi="t (s),M (N·m)" titolo="Le due aree danno impulsi di +6 e −3 N·m·s"}
:::

:::esempio{titolo="Due volani accoppiati da una frizione"}
Due volani coassiali di inerzia $0{,}80\,\mathrm{kg\cdot m^2}$ ciascuno iniziano a $10\,\mathrm{rad/s}$ e a riposo. Una frizione interna li accoppia e l’impulso dei momenti esterni lungo l’asse è trascurabile. Il momento angolare è inizialmente $8\,\mathrm{kg\cdot m^2/s}$. Quando i volani girano insieme, si divide questo valore per l’inerzia complessiva e si ottiene $5\,\mathrm{rad/s}$.

La cinetica iniziale è $40\,\mathrm J$ e quella finale $20\,\mathrm J$. Durante lo slittamento della frizione i momenti sui due volani sono opposti ma le velocità differiscono. Il lavoro complessivo della frizione è negativo. L’energia cinetica persa si trasforma in energia interna della frizione e dei volani, mentre il momento angolare totale resta costante.
:::

## Rotolamento senza slittamento

:::teorema{#rotolamento titolo="Vincolo fra traslazione e rotazione"}
Una ruota di raggio $R$ rotola senza slittare su un piano fermo quando il suo punto di contatto ha velocità istantanea nulla rispetto al piano. La traslazione del centro e la rotazione forniscono in quel punto velocità opposte e di uguale modulo. Per i moduli segue $v_{CM}=|\omega|R$. Nel punto superiore i due contributi hanno lo stesso verso, e il modulo vale $2v_{CM}$. La condizione riguarda la velocità del punto di contatto, che cambia di istante in istante; un punto materiale del bordo si allontana poi dal terreno.

Quando il rotolamento è puro e senza dissipazioni su un piano fisso, l’attrito statico può indurre un momento senza compiere lavoro al punto di contatto. Se il corpo parte da fermo e scende attraverso un dislivello $h$,
$$
mgh=\frac12 m v_{CM}^2+\frac12 I_{CM}\frac{v_{CM}^2}{R^2}.
$$
Ponendo $b=\dfrac{I_{CM}}{mR^2}$, risulta $v_{CM}=\sqrt{\dfrac{2gh}{1+b}}$. Per il disco pieno omogeneo $b=\dfrac12$, per l’anello $b=1$. Il disco arriva con velocità maggiore perché, a parità di massa, raggio e velocità, immagazzinerebbe meno energia nella rotazione. Il criterio vale quando l’attrito statico è sufficiente a mantenere il contatto senza slittamento lungo tutto il percorso.
:::

:::esempio{titolo="Velocità dei punti di una ruota"}
Con $R=0{,}40\,\mathrm m$ e $|\omega|=5\,\mathrm{rad/s}$, il centro avanza a $2\,\mathrm{m/s}$. Nel punto superiore la rotazione aggiunge altri $2\,\mathrm{m/s}$ nello stesso verso. Il punto inferiore ha invece contributo rotazionale di $2\,\mathrm{m/s}$ all’indietro e risulta istantaneamente fermo.

::grafico{uguale=1 assi=0 curve="0.4*cos(t),0.4+0.4*sin(t),0,6.283185" linee="-.6,0 1.05,0" vettori="0,.4,.3,.4,v_CM;0,.8,.6,.8,v" punti="0,0,pieno,C" xmin=-.65 xmax=1.1 ymin=-.2 ymax=1.05 titolo="Il vettore di velocità in alto è lungo il doppio di quello al centro"}
:::

:::esempio{titolo="Quanto attrito serve su una rampa"}
Un corpo scende su un piano fisso d’inclinazione $\beta$ con il centro di massa sull’asse geometrico. Dato che l’attrito statico $F_s$ diretto in salita genera il momento rispetto al centro, $F_sR=I_{CM}\dfrac aR$ quando il vincolo di rotolamento è soddisfatto. Lungo il piano vale $ma=mg\sin\beta-F_s$. Combinando le due equazioni si ottengono
$$
a=\frac{g\sin\beta}{1+b},\qquad
F_s=\frac{bmg\sin\beta}{1+b}.
$$
La normale vale $mg\cos\beta$, quindi l’attrito disponibile è sufficiente se $\mu_s\geq\dfrac{b}{1+b}\tan\beta$. Per $\beta=30^\circ$ il limite è circa $0{,}192$ per il disco e $0{,}289$ per l’anello. Se $\mu_s=0{,}22$, il disco può mantenere il rotolamento puro e l’anello inizia a slittare. Il bilancio senza dissipazioni si applica al disco per questa rampa.

::grafico{f="50*x/(1+x)" punti=".5,16.66667,pieno,D;1,25,pieno,A" xmin=0 xmax=1.2 ymin=0 ymax=31 nomi="b,100 F_s/(mg)" titolo="A 30°, l’attrito richiesto in percentuale del peso cresce con b. D indica il disco e A l’anello."}
:::
