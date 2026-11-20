---
titolo: "Meccanica del punto e dei sistemi"
sommario: "Posizione e moto, forze e vincoli, lavoro ed energia, impulsi e urti, centro di massa e leve: modelli, ipotesi e controlli."
---

:::osservazione
La meccanica studia il moto dei corpi e le sue cause. Risponde a tre domande: dove si trova un corpo in ogni istante, quali forze ne cambiano il moto e quali grandezze, come l'energia, restano uguali mentre il corpo si muove. Ogni problema comincia scegliendo il **sistema**, cioè il corpo o l'insieme di corpi che si studia. Una forza è interna se è esercitata da un corpo del sistema su un altro corpo del sistema, ed è esterna se viene da fuori. Poi si fissano il sistema di riferimento, cioè l'origine e gli assi, e le ipotesi semplificative, per esempio l'assenza di attrito.
:::

## Posizione, velocità e accelerazione

:::definizione{#cinematica titolo="Descrivere il moto"}
Un **punto materiale** è un corpo che si tratta come un punto, perché le sue dimensioni e le sue rotazioni non contano per il problema. Un'automobile che percorre cento chilometri si può trattare come un punto materiale.

La **posizione** del punto è il vettore $\vec r$ che va dall'origine al punto. La **legge oraria** $\vec r(t)$ dà la posizione in ogni istante $t$. La **traiettoria** è la linea formata da tutte le posizioni occupate.

Lo **spostamento** è la differenza fra posizione finale e posizione iniziale, $\Delta\vec r=\vec r_f-\vec r_i$. È un vettore e dipende solo dai due estremi. La **distanza percorsa** $s$ è la lunghezza del cammino effettivo ed è sempre positiva. Dopo un giro completo di pista, per esempio, lo spostamento è nullo e la distanza percorsa è la lunghezza della pista.

La **velocità** indica quanto rapidamente cambia la posizione, e l'**accelerazione** quanto rapidamente cambia la velocità. Di ciascuna esiste un valore medio, calcolato su un intervallo di tempo $\Delta t$, e un valore istantaneo, che è il limite del valore medio quando l'intervallo diventa piccolissimo, cioè la derivata.

$$
\vec v_{\mathrm m}=\dfrac{\Delta\vec r}{\Delta t},\qquad
\vec v=\dfrac{d\vec r}{dt},\qquad
\vec a_{\mathrm m}=\dfrac{\Delta\vec v}{\Delta t},\qquad
\vec a=\dfrac{d\vec v}{dt}.
$$

La velocità si misura in $\mathrm{m/s}$ e l'accelerazione in $\mathrm{m/s^2}$. Il modulo della velocità, $|\vec v|$, si chiama **rapidità**. La rapidità media è la distanza percorsa divisa per il tempo, $\dfrac{s}{\Delta t}$.

In un moto lungo una retta il segno della velocità $v_x$ indica il verso del moto. Il segno dell'accelerazione $a_x$, da solo, non dice se il corpo accelera o frena. Conta il confronto fra i due segni.

- Se $v_x$ e $a_x$ hanno lo stesso segno, la rapidità aumenta.
- Se hanno segni opposti, la rapidità diminuisce.

Un corpo con $v_x=-5\,\mathrm{m/s}$ e $a_x=-2\,\mathrm{m/s^2}$, per esempio, si muove nel verso negativo sempre più in fretta. In un moto curvo c'è accelerazione anche quando la rapidità è costante, perché cambia la direzione della velocità.
:::

:::osservazione
Il moto lungo una retta si legge su tre grafici.

- Nel grafico **posizione-tempo** la pendenza è la velocità. La pendenza della retta che unisce due punti del grafico è la velocità media, e la pendenza della tangente in un punto è la velocità istantanea.
- Nel grafico **velocità-tempo** la pendenza è l'accelerazione e l'area fra il grafico e l'asse del tempo è lo spostamento. Le aree sotto l'asse si contano negative. Sommando le aree tutte positive si ottiene la distanza percorsa.
- Nel grafico **accelerazione-tempo** l'area è la variazione di velocità $\Delta v$.

![Retta velocità-tempo da 4 a −2 m/s: aree +4 m e −1 m.](/figure/fisica-semestre-filtro/meccanica/grafici-moto-it.svg)

*Nella figura $v_x=4-2t$ in unità SI. La velocità si annulla a $t=2\,\mathrm{s}$, dove il corpo inverte il verso. L'area del primo triangolo è $\dfrac{2\cdot4}{2}=4\,\mathrm{m}$ e quella del secondo è $\dfrac{1\cdot2}{2}=1\,\mathrm{m}$, sotto l'asse. Fra $0$ e $3\,\mathrm{s}$ lo spostamento è $4-1=3\,\mathrm{m}$ e la distanza percorsa è $4+1=5\,\mathrm{m}$.*
:::

## Moti rettilinei e caduta libera

:::teorema{#moti-rettilinei titolo="Accelerazione costante e dominio del modello"}
I due moti rettilinei più semplici sono i seguenti.

Nel **moto rettilineo uniforme** la velocità è costante e l'accelerazione è nulla. La posizione cresce in proporzione al tempo: $x=x_0+v_0t$, dove $x_0$ è la posizione all'istante $t=0$.

Nel **moto uniformemente accelerato** l'accelerazione $a$ è costante. La velocità cambia della stessa quantità ogni secondo, e la posizione si ottiene dall'area sotto il grafico velocità-tempo. Le quattro formule sono:

$$
v=v_0+at,\qquad
x=x_0+v_0t+\dfrac12at^2.
$$
$$
x-x_0=\dfrac{v_0+v}{2}\,t,\qquad
v^2=v_0^2+2a(x-x_0).
$$

Le prime due danno velocità e posizione in funzione del tempo. La terza dice che lo spostamento è la velocità media $\dfrac{v_0+v}{2}$ moltiplicata per il tempo. Vale solo con accelerazione costante. La quarta lega velocità e posizione senza il tempo e si usa quando il tempo non è dato né richiesto. Da essa si ricava $v^2$, quindi il segno di $v$ va stabilito in base al verso del moto.
:::

:::osservazione
Un'automobile viaggia a $v_0=12\,\mathrm{m/s}$ e frena con accelerazione costante $a=-3\,\mathrm{m/s^2}$. Si ferma quando $v=0$, cioè quando $12-3t=0$, quindi dopo $t=4\,\mathrm{s}$. Lo spazio di frenata è $\dfrac{v_0+v}{2}\,t=\dfrac{12+0}{2}\cdot4=24\,\mathrm{m}$. Le formule valgono fino all'arresto. Per $t>4\,\mathrm{s}$ darebbero una velocità negativa, cioè un'automobile che riparte all'indietro. Se il guidatore impiega un tempo di reazione $t_r=1\,\mathrm{s}$ prima di frenare, in quel tempo l'automobile percorre a velocità costante $v_0t_r=12\,\mathrm{m}$, che si aggiungono ai $24\,\mathrm{m}$.

La **caduta libera** è il moto di un corpo soggetto solo alla forza di gravità, senza resistenza dell'aria. Vicino alla superficie terrestre tutti i corpi in caduta libera hanno la stessa accelerazione, diretta verso il basso, di modulo $g\simeq9{,}81\,\mathrm{m/s^2}$. Non dipende dalla massa. Con l'asse $y$ rivolto verso l'alto si pone $a_y=-g$ e si usano le formule del moto uniformemente accelerato. L'accelerazione è $-g$ in ogni istante: mentre il corpo sale, nel punto più alto e mentre scende. Nel punto più alto la velocità è nulla per un istante e l'accelerazione vale ancora $-g$. Nell'aria una piuma cade più lentamente di un sasso per effetto della resistenza dell'aria, che il modello trascura.
:::

## Moti nel piano e moto circolare

:::teorema{#moti-nel-piano titolo="Componenti indipendenti, tempo comune"}
Un corpo lanciato in aria con velocità iniziale $v_0$, inclinata di un angolo $\theta$ sopra l'orizzontale, compie un **moto parabolico**. Si trascura la resistenza dell'aria. Il moto si studia separando le due direzioni, con $x$ orizzontale e $y$ verso l'alto.

- In direzione orizzontale non agisce alcuna forza, quindi il moto è uniforme con velocità $v_0\cos\theta$.
- In direzione verticale agisce la gravità, quindi il moto è uniformemente accelerato con accelerazione $-g$ e velocità iniziale $v_0\sin\theta$.

I due moti sono indipendenti e hanno in comune il tempo $t$.

$$
\begin{cases}
x=x_0+v_0\cos\theta\,t,\\
y=y_0+v_0\sin\theta\,t-\dfrac12gt^2,
\end{cases}
\qquad
\begin{cases}
v_x=v_0\cos\theta,\\
v_y=v_0\sin\theta-gt.
\end{cases}
$$

La traiettoria è una parabola. Nel punto più alto, il vertice, la componente verticale della velocità è nulla e la velocità è orizzontale, uguale a $v_0\cos\theta$. Se il corpo ricade alla stessa quota da cui è partito, il **tempo di volo** $T$ e la **gittata** $R$, cioè la distanza orizzontale percorsa, sono:

$$
T=\dfrac{2v_0\sin\theta}{g},\qquad
R=\dfrac{v_0^2\sin(2\theta)}{g}.
$$

Il tempo di volo si ottiene ponendo $y=y_0$ nell'equazione verticale, e la gittata moltiplicando la velocità orizzontale per il tempo di volo. La gittata è massima per $\theta=45^\circ$, perché $\sin(2\theta)$ vale al massimo 1. Due angoli che sommati danno $90^\circ$, come $30^\circ$ e $60^\circ$, danno la stessa gittata. Queste due formule valgono solo con quote di partenza e di arrivo uguali. Se il corpo è lanciato da un balcone si risolve l'equazione verticale con la quota di arrivo, si sceglie la soluzione con $t>0$ e la si sostituisce nell'equazione orizzontale.
:::

:::osservazione
Nel **moto circolare uniforme** un corpo percorre una circonferenza di raggio $r$ con rapidità costante. La velocità è in ogni punto tangente alla circonferenza, quindi cambia continuamente direzione. Il **periodo** $T$ è il tempo impiegato per un giro. La **velocità angolare** $\omega=\dfrac{2\pi}{T}$ è l'angolo percorso in un secondo e si misura in radianti al secondo.

$$
v=\dfrac{2\pi r}{T}=\omega r,\qquad
a_c=\dfrac{v^2}{r}=\omega^2r.
$$

Poiché la direzione della velocità cambia, il corpo ha un'accelerazione anche se la rapidità è costante. Si chiama **accelerazione centripeta**, $a_c$, ed è diretta verso il centro della circonferenza. Dipende dal quadrato della rapidità, quindi a raggio fissato una rapidità doppia dà un'accelerazione quattro volte maggiore.

Per la seconda legge di Newton, la somma delle forze sul corpo è diretta verso il centro e ha modulo $\dfrac{mv^2}{r}$. Questa somma si chiama **forza centripeta**. È il nome dato alla risultante delle forze presenti, come la tensione di un filo, l'attrito delle ruote o la gravità, e non è una forza in più da aggiungere al disegno.

![Parabola di un lancio a 20 m/s e 30 gradi, vertice a 5,10 m e gittata 35,31 m.](/figure/fisica-semestre-filtro/meccanica/proiettile-it.svg)

*La figura usa $g=9{,}81\,\mathrm{m/s^2}$ e quote iniziale e finale uguali. Al vertice $v_x$ resta diverso da zero.*

![Velocità tangente e accelerazione radiale su un cerchio di raggio 0,80 m.](/figure/fisica-semestre-filtro/meccanica/circolare-it.svg)

*Con $v=4\,\mathrm{m/s}$ e $r=0{,}80\,\mathrm{m}$, $a_c=20\,\mathrm{m/s^2}$. Le frecce di velocità e accelerazione hanno unità diverse: le loro lunghezze non si confrontano numericamente.*
:::

## Le leggi della dinamica

:::teorema{#newton titolo="Newton e scelta del corpo"}
Le tre leggi di Newton legano le forze al moto. Valgono in un **sistema di riferimento inerziale**, cioè un sistema in cui un corpo non soggetto a forze resta fermo o si muove di moto rettilineo uniforme. Un laboratorio sulla Terra è con buona approssimazione inerziale. Un ascensore che accelera non lo è.

**Prima legge (principio di inerzia).** Se la somma delle forze su un corpo è nulla, la sua velocità resta costante. Il corpo resta fermo se era fermo e continua di moto rettilineo uniforme se era in moto. Una forza serve quindi a cambiare la velocità e non a mantenerla.

**Seconda legge.** La somma delle forze, detta **risultante**, è uguale alla massa per l'accelerazione. È un'equazione fra vettori, quindi vale separatamente lungo ogni asse.

$$
\sum\vec F=m\vec a,\qquad
\sum F_x=ma_x,\qquad \sum F_y=ma_y.
$$

Una forza di $1\,\mathrm{N}$ dà a una massa di $1\,\mathrm{kg}$ un'accelerazione di $1\,\mathrm{m/s^2}$.

**Terza legge (azione e reazione).** Se un corpo A esercita una forza su un corpo B, allora B esercita su A una forza uguale in modulo e direzione e opposta in verso. Le due forze agiscono su corpi diversi, quindi non si annullano fra loro quando si studia uno solo dei due corpi. Un libro appoggiato su un tavolo, per esempio, è soggetto a due forze: il peso, esercitato dalla Terra, e la forza normale, esercitata dal tavolo. Si equilibrano, ma non sono una coppia azione-reazione, perché agiscono entrambe sul libro. La reazione al peso è la forza con cui il libro attira la Terra. La reazione alla normale è la forza con cui il libro preme sul tavolo.
:::

:::osservazione
Per applicare la seconda legge si disegna il **diagramma di corpo libero**: il solo corpo studiato, con tutte le forze che gli altri corpi esercitano su di esso. Poi si scelgono gli assi, si scompone ogni forza nelle sue componenti e si scrive $\sum F=ma$ per ciascun asse. Le componenti sostituiscono la forza e non si aggiungono a essa. Su un piano inclinato conviene scegliere un asse lungo il piano e uno perpendicolare.

Un corpo con risultante nulla è in **equilibrio**, cioè ha accelerazione nulla. Avere velocità nulla in un istante è una condizione diversa. Una pallina lanciata verso l'alto, nel punto più alto, ha velocità nulla e non è in equilibrio, perché su di essa agisce il peso. In un problema con più corpi collegati si scrive la seconda legge per ciascun corpo. Le forze che i corpi si scambiano, come la tensione di un filo, compaiono nelle equazioni dei singoli corpi e si eliminano sommandole.

![Forze su un blocco tirato a 30 gradi: trazione 24 N, peso 39,24 N, normale 27,24 N.](/figure/fisica-semestre-filtro/meccanica/corpo-libero-it.svg)

*Un blocco di $4\,\mathrm{kg}$ è tirato da una forza di $24\,\mathrm{N}$ inclinata di $30^\circ$, su un pavimento senza attrito. In verticale il blocco non accelera, quindi $N+F\sin30^\circ-mg=0$ e $N=39{,}24-12=27{,}24\,\mathrm{N}$. La normale è minore del peso, perché la forza applicata solleva in parte il blocco.*
:::

## Forze di uso comune

:::definizione{#forze titolo="Identificare le interazioni"}
Le forze che compaiono più spesso nei problemi sono sei.

La **forza di gravità** è l'attrazione fra due masse. Fra due masse $m_1$ e $m_2$ a distanza $r$ vale $F=\dfrac{Gm_1m_2}{r^2}$, con $G\simeq6{,}67\cdot10^{-11}\,\mathrm{N\,m^2/kg^2}$. Per due sfere $r$ è la distanza fra i centri. La forza diminuisce con il quadrato della distanza, quindi a distanza doppia è un quarto.

Il **peso** è la forza di gravità che la Terra esercita su un corpo vicino alla sua superficie. Vale $\vec P=m\vec g$ ed è diretto verso il basso. Un corpo di $70\,\mathrm{kg}$ pesa $70\cdot9{,}81\simeq687\,\mathrm{N}$. Sulla Luna lo stesso corpo ha ancora massa $70\,\mathrm{kg}$ e pesa circa un sesto.

La **forza normale** $N$ è la forza con cui una superficie spinge un corpo appoggiato su di essa. È perpendicolare alla superficie. Una superficie spinge e non tira, quindi $N\ge0$. Se dal calcolo risulta $N<0$, il corpo si è staccato dalla superficie.

La **tensione** $T$ è la forza con cui un filo teso tira i corpi attaccati ai suoi estremi. È diretta lungo il filo. Se il filo ha massa trascurabile la tensione è la stessa ai due estremi, anche quando il filo passa su una carrucola ideale, cioè senza massa e senza attrito.

Le ultime due forze, attrito e forza elastica, sono descritte dalle formule seguenti.

$$
|F_s|\le\mu_sN,\qquad |F_d|=\mu_dN,\qquad F_{\mathrm{el},x}=-kx.
$$

L'**attrito** è la forza, parallela alla superficie di contatto, che si oppone allo scorrimento fra due corpi. È di due tipi.

- L'**attrito statico** $F_s$ agisce quando il corpo è fermo rispetto alla superficie. Non ha un valore fisso: è uguale e opposto alla forza che tende a far scorrere il corpo, fino a un valore massimo $\mu_sN$. Un corpo con attrito statico massimo di $12\,\mathrm{N}$, spinto con $5\,\mathrm{N}$, resta fermo e l'attrito vale $5\,\mathrm{N}$. Se la spinta supera $12\,\mathrm{N}$ il corpo si muove.
- L'**attrito dinamico** $F_d$ agisce quando il corpo scorre. Ha modulo costante $\mu_dN$ e verso opposto alla velocità del corpo rispetto alla superficie.

I numeri $\mu_s$ e $\mu_d$ si chiamano coefficienti di attrito. Sono numeri puri, dipendono dalle due superfici e di solito $\mu_d<\mu_s$.

La **forza elastica** è la forza esercitata da una molla deformata. Per la **legge di Hooke** è proporzionale alla deformazione $x$, cioè a quanto la molla è più lunga o più corta rispetto alla sua lunghezza a riposo. Il segno meno indica che la forza è diretta in verso opposto alla deformazione, quindi riporta la molla verso la lunghezza a riposo. La costante elastica $k$ si misura in $\mathrm{N/m}$ ed è maggiore per le molle più rigide. Due molle collegate una dopo l'altra (in serie) equivalgono a una molla più cedevole, con $\dfrac{1}{k_{\mathrm{eq}}}=\dfrac1{k_1}+\dfrac1{k_2}$. Due molle affiancate (in parallelo) equivalgono a una molla più rigida, con $k_{\mathrm{eq}}=k_1+k_2$.
:::

:::osservazione
Il **piano inclinato** riunisce queste forze. Un blocco di massa $m$ sta su un piano inclinato di un angolo $\theta$. Si scompone il peso in due componenti: $mg\sin\theta$ lungo il piano, verso il basso, e $mg\cos\theta$ perpendicolare al piano. In direzione perpendicolare il blocco non accelera, quindi $N=mg\cos\theta$.

Il blocco resta fermo se la componente del peso lungo il piano non supera l'attrito statico massimo, cioè se $mg\sin\theta\le\mu_smg\cos\theta$. Dividendo per $mg\cos\theta$ la condizione diventa $\tan\theta\le\mu_s$. Se il blocco scivola verso il basso, lungo il piano agiscono $mg\sin\theta$ verso il basso e l'attrito dinamico $\mu_dmg\cos\theta$ verso l'alto, quindi l'accelerazione è $a=g(\sin\theta-\mu_d\cos\theta)$.

![Blocco su piano inclinato con peso verticale, normale perpendicolare e attrito verso la salita.](/figure/fisica-semestre-filtro/meccanica/piano-inclinato-it.svg)

*L'attrito mostrato contrasta la discesa o la tendenza a scendere. Se lo scorrimento fosse verso la salita, il verso dell'attrito dinamico si invertirebbe. Schema delle direzioni, non dei moduli.*
:::

## Lavoro, potenza ed energia cinetica

:::teorema{#lavoro-energia titolo="Dalle forze alla variazione di energia cinetica"}
Il **lavoro** $W$ è l'energia che una forza trasferisce a un corpo mentre questo si sposta. Per una forza costante $F$ e uno spostamento $\Delta r$ vale $W=F\,\Delta r\cos\theta$, dove $\theta$ è l'angolo fra forza e spostamento. Si misura in joule, $1\,\mathrm{J}=1\,\mathrm{N\,m}$. Il segno dipende dall'angolo.

- Il lavoro è positivo se la forza ha una componente nel verso dello spostamento. La forza cede energia al corpo.
- Il lavoro è negativo se la forza ha una componente contraria allo spostamento, come l'attrito. La forza toglie energia al corpo.
- Il lavoro è nullo se la forza è perpendicolare allo spostamento, come la forza normale su un piano.

Se la forza cambia lungo il percorso, il lavoro è l'integrale della forza lungo lo spostamento, cioè l'area sotto il grafico della forza in funzione della posizione. L'**energia cinetica** $K$ è l'energia che un corpo possiede perché si muove.

$$
W=\int_i^f\vec F\cdot d\vec r,\qquad
K=\dfrac12mv^2,\qquad W_{\mathrm{tot}}=K_f-K_i.
$$

La terza formula è il **teorema dell'energia cinetica**: il lavoro totale di tutte le forze che agiscono su un corpo è uguale alla variazione della sua energia cinetica. Se il lavoro totale è positivo il corpo accelera, se è negativo rallenta. Un corpo di $2\,\mathrm{kg}$ fermo che riceve un lavoro totale di $16\,\mathrm{J}$, per esempio, raggiunge un'energia cinetica di $16\,\mathrm{J}$, quindi $v=\sqrt{\dfrac{2K}{m}}=\sqrt{16}=4\,\mathrm{m/s}$. L'energia cinetica è uno scalare ed è sempre positiva o nulla.
:::

:::osservazione
Una forza cresce con la posizione secondo $F_x=(4\,\mathrm{N/m})\,x$. Fra $x=0$ e $x=3\,\mathrm{m}$ passa da $0$ a $12\,\mathrm{N}$. Il lavoro è l'area del triangolo sotto il grafico, $\dfrac{3\cdot12}{2}=18\,\mathrm{J}$. È il lavoro che compirebbe una forza costante uguale al valore medio, $6\,\mathrm{N}$.

La **potenza** $P$ è il lavoro compiuto in un secondo. Si misura in watt.

$$
P_{\mathrm m}=\dfrac{W}{\Delta t},\qquad P=\vec F\cdot\vec v,\qquad
1\,\mathrm{W}=1\,\mathrm{J/s}.
$$

La prima formula dà la potenza media in un intervallo di tempo. La seconda dà la potenza in un istante, come prodotto della forza per la velocità. Un motore che compie un lavoro di $600\,\mathrm{J}$ in $20\,\mathrm{s}$ ha una potenza media di $30\,\mathrm{W}$.

Chi tiene fermo un peso con il braccio non compie lavoro sul peso, perché lo spostamento è nullo. I muscoli consumano comunque energia per restare contratti. Il **rendimento** $\eta=\dfrac{E_{\mathrm{utile}}}{E_{\mathrm{in}}}$ è la frazione dell'energia fornita che viene trasformata in energia utile. È un numero compreso fra 0 e 1. Un muscolo con rendimento $0{,}25$ consuma $400\,\mathrm{J}$ per compiere $100\,\mathrm{J}$ di lavoro, e il resto diventa calore.

![Grafico forza-posizione crescente da zero a 12 N su 3 m; area triangolare 18 J.](/figure/fisica-semestre-filtro/meccanica/lavoro-it.svg)

*L'area va calcolata usando la componente della forza lungo lo spostamento. Qui la forza cresce linearmente, quindi il suo valore medio spaziale è $6\,\mathrm{N}$.*
:::

## Energia potenziale e conservazione

:::teorema{#energia-meccanica titolo="Il lavoro conservativo e il bilancio del sistema"}
Una forza è **conservativa** se il lavoro che compie fra due punti dipende solo dai due punti e non dal percorso seguito. Il peso e la forza elastica sono conservative. L'attrito non lo è, perché su un percorso più lungo compie più lavoro.

A ogni forza conservativa si associa un'**energia potenziale** $U$, che dipende dalla posizione del corpo. È definita in modo che il lavoro della forza sia uguale alla diminuzione dell'energia potenziale, $W_c=-\Delta U$. Quando un corpo scende, per esempio, il peso compie lavoro positivo e l'energia potenziale diminuisce. Conta solo la variazione di $U$, quindi il livello a cui $U=0$ si sceglie liberamente.

$$
U_g=mgy,\qquad U_e=\dfrac12kx^2,\qquad
E_{\mathrm{mecc}}=K+U.
$$
$$
\Delta(K+U)=W_{\mathrm{non\,cons}}.
$$

Le prime due formule danno l'energia potenziale del peso, con $y$ quota rispetto al livello scelto, e l'energia potenziale elastica di una molla deformata di $x$. La molla accumula la stessa energia se è allungata o compressa della stessa quantità, perché $x$ è al quadrato.

L'**energia meccanica** è la somma di energia cinetica ed energia potenziale. L'ultima formula è il bilancio dell'energia: la variazione dell'energia meccanica è uguale al lavoro delle forze non conservative, come l'attrito. Ne segue il **principio di conservazione dell'energia meccanica**. Se le forze non conservative non compiono lavoro, l'energia meccanica resta costante, cioè $K_i+U_i=K_f+U_f$. Durante il moto l'energia passa da potenziale a cinetica e viceversa.

Un corpo che cade da fermo da un'altezza $h$, per esempio, ha all'inizio energia $mgh$ e alla fine energia $\dfrac12mv^2$. Uguagliandole si ottiene $v=\sqrt{2gh}$. Da $h=5\,\mathrm{m}$ la velocità finale è $\sqrt{2\cdot9{,}81\cdot5}\simeq9{,}9\,\mathrm{m/s}$. Il risultato è lo stesso su uno scivolo senza attrito di qualunque forma, perché la forza normale è perpendicolare al moto e non compie lavoro.
:::

:::osservazione
Quando c'è attrito l'energia meccanica diminuisce. Il lavoro dell'attrito dinamico su un corpo che percorre un tratto di lunghezza $s$ su una superficie ferma è $W_d=-\mu_dNs$. È negativo, perché l'attrito è opposto allo spostamento.

Un corpo parte da fermo in cima a una discesa con energia potenziale di $30\,\mathrm{J}$ rispetto al fondo. Lungo la discesa l'attrito compie un lavoro di $-10\,\mathrm{J}$. Dal bilancio, l'energia cinetica al fondo è $30-10=20\,\mathrm{J}$. I $10\,\mathrm{J}$ mancanti non sono scomparsi: sono diventati energia interna del corpo e del piano, che si sono scaldati. L'energia totale si conserva sempre.

Il metodo dell'energia dà la velocità in un punto senza studiare il moto istante per istante. Non dà il tempo impiegato né la direzione della velocità, per i quali servono le leggi del moto.

![Bilancio di 30 J: energia potenziale iniziale trasformata in 20 J cinetici e 10 J interni.](/figure/fisica-semestre-filtro/meccanica/energie-it.svg)

*Al fondo si sceglie $U_g=0$. Le altezze delle barre sono proporzionali alle energie; il sistema completo comprende corpo, Terra e piano.*
:::

## Impulso e quantità di moto

:::teorema{#quantita-di-moto titolo="Forze nel tempo e urti"}
La **quantità di moto** di un corpo è il prodotto della massa per la velocità, $\vec p=m\vec v$. È un vettore, con la direzione e il verso della velocità, e si misura in $\mathrm{kg\,m/s}$. L'**impulso** $\vec J$ di una forza è il prodotto della forza per il tempo durante il quale agisce. Se la forza varia, è l'integrale della forza nel tempo, cioè l'area sotto il grafico forza-tempo. Il **teorema dell'impulso** afferma che l'impulso della risultante è uguale alla variazione della quantità di moto.

$$
\vec J_{\mathrm{ext}}=\int_{t_i}^{t_f}\vec F_{\mathrm{ext}}\,dt
=\Delta\vec p,\qquad
\vec F_{\mathrm m}=\dfrac{\vec J}{\Delta t}.
$$

La seconda formula definisce la forza media, cioè la forza costante che nello stesso tempo darebbe lo stesso impulso. Il teorema spiega perché un urto più lungo è meno violento. Per fermare un corpo la variazione di quantità di moto è fissata, quindi se il tempo dell'urto aumenta la forza media diminuisce. Un airbag, per esempio, allunga il tempo in cui la testa si ferma. Una palla di $0{,}5\,\mathrm{kg}$ che arriva a $10\,\mathrm{m/s}$ e si ferma ha $\Delta p=-5\,\mathrm{kg\,m/s}$. Se si ferma in $0{,}01\,\mathrm{s}$ la forza media ha modulo $500\,\mathrm{N}$, se si ferma in $0{,}1\,\mathrm{s}$ ha modulo $50\,\mathrm{N}$.

In un sistema di più corpi le forze interne sono coppie di azione e reazione, uguali e opposte, quindi i loro impulsi si annullano. Ne segue il **principio di conservazione della quantità di moto**: se la risultante delle forze esterne è nulla, la quantità di moto totale del sistema resta costante. Vale anche per una sola direzione, se in quella direzione non agiscono forze esterne. Durante un urto le forze fra i corpi sono molto più intense di quelle esterne, quindi la quantità di moto totale subito prima e subito dopo l'urto è la stessa.
:::

:::osservazione
Gli **urti** si classificano secondo ciò che accade all'energia cinetica. La quantità di moto totale si conserva in tutti e tre i casi.

- In un urto **elastico** si conserva anche l'energia cinetica totale. I corpi rimbalzano senza deformarsi in modo permanente.
- In un urto **anelastico** una parte dell'energia cinetica diventa calore o deformazione.
- In un urto **completamente anelastico** i due corpi restano uniti dopo l'urto e si muovono con la stessa velocità $v_f$. È il caso in cui si perde più energia cinetica.

Per l'urto completamente anelastico la conservazione della quantità di moto, $m_1v_1+m_2v_2=(m_1+m_2)v_f$, dà:

$$
v_f=\dfrac{m_1v_1+m_2v_2}{m_1+m_2}.
$$

Un carrello di $2\,\mathrm{kg}$ a $3\,\mathrm{m/s}$ urta un carrello fermo di $1\,\mathrm{kg}$ e vi resta agganciato. La velocità finale è $\dfrac{2\cdot3+1\cdot0}{2+1}=2\,\mathrm{m/s}$. L'energia cinetica era $9\,\mathrm{J}$ prima dell'urto ed è $6\,\mathrm{J}$ dopo, quindi $3\,\mathrm{J}$ sono diventati calore e deformazione.

Alcuni problemi si risolvono in due fasi, con due principi diversi. Nel **pendolo balistico** un proiettile si conficca in un blocco appeso, che poi sale. Durante l'urto si conserva la quantità di moto e non l'energia meccanica, perché l'urto è completamente anelastico. Durante la salita si conserva l'energia meccanica. La prima fase dà la velocità del blocco subito dopo l'urto, la seconda dà l'altezza raggiunta.

![Impulso triangolare della forza risultante: base 0,10 s, altezza 100 N e area 5 N s.](/figure/fisica-semestre-filtro/meccanica/impulso-it.svg)

*L'area del triangolo è $\dfrac{0{,}10\cdot100}{2}=5\,\mathrm{N\,s}$ ed è l'impulso, uguale a $\Delta p$. La forza media è $\dfrac{5}{0{,}10}=50\,\mathrm{N}$, metà del valore massimo. Per ricavare $\Delta v$ si divide $\Delta p$ per la massa.*
:::

## Centro di massa e sistemi di corpi

:::definizione{#centro-di-massa titolo="Una posizione media pesata per descrivere il sistema"}
Il **centro di massa** di un sistema di corpi è il punto che ne rappresenta la posizione media, calcolata dando a ogni corpo un peso proporzionale alla sua massa. È quindi più vicino ai corpi di massa maggiore. In un corpo omogeneo e simmetrico coincide con il centro geometrico. Può trovarsi in un punto in cui non c'è materia, come il centro di un anello.

$$
\vec r_{\mathrm{CM}}=\dfrac{\sum_i m_i\vec r_i}{M},\qquad
M=\sum_i m_i.
$$
$$
\vec p_{\mathrm{tot}}=M\vec v_{\mathrm{CM}},\qquad
M\vec a_{\mathrm{CM}}=\sum\vec F_{\mathrm{ext}}.
$$

Le prime due formule definiscono il centro di massa, con $M$ massa totale. Le altre due ne descrivono il moto. La quantità di moto totale del sistema è uguale alla massa totale per la velocità del centro di massa. Inoltre il centro di massa si muove come un punto di massa $M$ su cui agisce la risultante delle sole forze esterne. Le forze interne cambiano il moto delle singole parti e non quello del centro di massa. Un tuffatore che ruota e si raggomitola, per esempio, cambia forma con forze interne, e il suo centro di massa segue comunque una parabola.
:::

:::osservazione
Una massa di $2\,\mathrm{kg}$ si trova in $x=0$ e una di $1\,\mathrm{kg}$ in $x=3\,\mathrm{m}$. Il centro di massa è in $x_{\mathrm{CM}}=\dfrac{2\cdot0+1\cdot3}{2+1}=1\,\mathrm{m}$. È più vicino alla massa maggiore, e sta sempre fra le due masse. Il punto medio, $1{,}5\,\mathrm{m}$, sarebbe il centro di massa solo se le masse fossero uguali.

Se la risultante delle forze esterne è nulla, il centro di massa ha velocità costante. Se inoltre il sistema parte da fermo, il centro di massa resta fermo. Una persona ferma su un carrello fermo, libero di scorrere, comincia a camminare verso destra. In orizzontale non agiscono forze esterne, quindi il centro di massa di persona e carrello non si sposta, e il carrello scorre verso sinistra.

La conservazione della quantità di moto non implica quella dell'energia cinetica. Due carrelli fermi, tenuti insieme con una molla compressa in mezzo, vengono liberati. Partono in versi opposti con quantità di moto uguali e opposte, e la quantità di moto totale resta nulla. L'energia cinetica totale passa invece da zero a un valore positivo, a spese dell'energia elastica della molla.

![Due masse di 2 kg e 1 kg a 0 e 3 m; centro di massa a 1 m.](/figure/fisica-semestre-filtro/meccanica/centro-massa-it.svg)

*Le distanze dal centro di massa sono $1\,\mathrm{m}$ e $2\,\mathrm{m}$: i prodotti massa per distanza risultano uguali.*
:::

## Equilibrio rotazionale e leve

:::teorema{#leve titolo="Forze, momenti e corpo rigido"}
Un **corpo rigido** è un corpo che non si deforma: le distanze fra i suoi punti restano costanti. A differenza del punto materiale può ruotare, quindi conta anche il punto in cui ogni forza è applicata.

L'effetto di rotazione di una forza è misurato dal suo **momento** rispetto a un punto $O$, detto polo, intorno al quale il corpo può ruotare. Il modulo del momento è $\tau=Fb$, dove $b$ è il **braccio**, cioè la distanza fra il polo e la retta lungo cui agisce la forza. Il momento si misura in $\mathrm{N\,m}$. Una forza la cui retta passa per il polo ha braccio nullo, quindi momento nullo, e non fa ruotare il corpo. Nel piano si assegna un segno al momento: positivo se la forza tende a far ruotare il corpo in verso antiorario, negativo se in verso orario.

Un corpo rigido fermo resta in **equilibrio** se sono soddisfatte due condizioni insieme. La somma delle forze è nulla, e allora il corpo non trasla. La somma dei momenti rispetto a un polo è nulla, e allora il corpo non ruota.

$$
\sum\vec F=0,\qquad \sum\vec\tau_O=0.
$$

Le due condizioni sono indipendenti. Due forze uguali e opposte applicate in punti diversi, su rette parallele, hanno somma nulla e momento totale diverso da zero. Formano una **coppia** e fanno ruotare il corpo, come le mani su un volante. Nei problemi il polo si sceglie liberamente. Conviene metterlo nel punto in cui agisce una forza incognita, per esempio in una cerniera. Quella forza ha braccio nullo e non compare nell'equazione dei momenti. Compare ancora nell'equazione delle forze.
:::

:::osservazione
Una **leva** è un'asta rigida che ruota intorno a un punto fisso, il fulcro. È in equilibrio quando i momenti delle due forze rispetto al fulcro sono uguali e opposti, cioè $F_1b_1=F_2b_2$. La forza con il braccio più corto è quindi la più intensa.

L'avambraccio è una leva con il fulcro nel gomito. Si tiene in mano un carico di $40\,\mathrm{N}$, a $0{,}30\,\mathrm{m}$ dal gomito, con l'avambraccio orizzontale. Il muscolo bicipite tira verso l'alto a $0{,}05\,\mathrm{m}$ dal gomito. Si trascura il peso dell'avambraccio. Dall'equilibrio dei momenti rispetto al gomito, $F_m\cdot0{,}05=40\cdot0{,}30$, quindi $F_m=\dfrac{12}{0{,}05}=240\,\mathrm{N}$. Il muscolo esercita una forza sei volte maggiore del carico, perché il suo braccio è sei volte più corto.

Dall'equilibrio delle forze in verticale si ricava la forza $R_y$ che l'articolazione esercita sull'avambraccio: $R_y+240-40=0$, quindi $R_y=-200\,\mathrm{N}$. Il segno meno indica che è diretta verso il basso. Se il muscolo tira in direzione inclinata, nel momento entra solo la componente della forza perpendicolare all'avambraccio. Se si tiene conto del peso dell'avambraccio, lo si applica nel suo centro di massa e si aggiunge il suo momento.

![Leva orizzontale: gomito a zero, muscolo a 5 cm e carico a 30 cm; reazione articolare verso il basso.](/figure/fisica-semestre-filtro/meccanica/leva-it.svg)

*Posizioni in scala lungo l'avambraccio; frecce schematiche. Il muscolo e il carico producono momenti opposti rispetto al gomito.*
:::
