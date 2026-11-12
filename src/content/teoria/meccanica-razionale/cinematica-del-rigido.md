---
titolo: Cinematica del corpo rigido
sommario: Come il vincolo di rigidità riduce il campo delle velocità alla formula fondamentale con la velocità angolare, come si classifica l'atto di moto con l'invariante cinematico e l'asse di Mozzi, e come si trovano il centro di istantanea rotazione, la base, la rulletta e le condizioni di rotolamento.
---

## Vincolo di rigidità e atto di moto

:::definizione{#corpo-rigido titolo="Corpo rigido e vincolo di rigidità"}
Un **corpo rigido** è un sistema di punti materiali tale che la distanza fra due suoi punti qualsiasi resta costante durante il moto. Il **vincolo di rigidità** è questa condizione, scritta per ogni coppia di punti $P$ e $Q$ del corpo:
$$
|P - Q| = \text{costante} .
$$
Il vincolo riduce di molto i parametri necessari a individuare la configurazione: per fissare la posizione di un corpo rigido libero nello spazio bastano sei numeri, tre per la posizione di un suo punto e tre per l'orientamento, mentre nel piano ne bastano tre. La classificazione dei vincoli e il conteggio dei gradi di libertà si vedono nell'argomento sui vincoli e le coordinate lagrangiane; qui interessa la conseguenza cinematica, cioè la forma che il vincolo impone al campo delle velocità.
:::

:::definizione{#atto-di-moto titolo="Atto di moto"}
L'**atto di moto** di un corpo rigido all'istante $t$ è il campo che a ogni punto $P$ del corpo associa la sua velocità $\vec{v}_P(t)$ in quell'istante. L'atto di moto riguarda un solo istante, perciò due moti diversi possono avere lo stesso atto di moto in un istante.

Si sceglie un riferimento fisso $(O; x, y, z)$ con versori $\hat{\imath}$, $\hat{\jmath}$, $\hat{k}$ e un riferimento **solidale** con il corpo $(\Omega; \xi, \eta, \zeta)$, i cui versori $\hat{e}_1$, $\hat{e}_2$, $\hat{e}_3$ dipendono dal tempo perché si muovono con il corpo. Un punto $P$ del corpo ha coordinate costanti nel riferimento solidale, quindi
$$
P - \Omega = \xi_P\,\hat{e}_1 + \eta_P\,\hat{e}_2 + \zeta_P\,\hat{e}_3
$$
con $\xi_P$, $\eta_P$, $\zeta_P$ indipendenti dal tempo. Tutta la cinematica del rigido si ricava derivando questa scrittura.

::struttura{poligoni="0,0 3,0.4 3.6,2 2,3 0.3,2.2" punti="1.2,1.2,Ω;2.8,2.2,P" frecce="1.2,1.2,2.4,0.5,v_Ω;2.8,2.2,4.1,2.6,v_P;1.2,1.2,1.7,2.6,ω" titolo="Atto di moto: a ogni punto del corpo è associata la sua velocità nell'istante considerato"}
:::

:::teorema{#rigidita-differenziale titolo="Forma differenziale del vincolo di rigidità"}
Per ogni coppia di punti $P$ e $Q$ di un corpo rigido vale
$$
(P - Q) \cdot (\vec{v}_P - \vec{v}_Q) = 0 .
$$
La condizione segue derivando rispetto al tempo l'uguaglianza $|P - Q|^2 = \text{costante}$, poiché $\dfrac{d}{dt}\,|P-Q|^2 = 2\,(P-Q) \cdot (\vec{v}_P - \vec{v}_Q)$. Si legge dicendo che la velocità relativa di due punti di un rigido è ortogonale alla loro congiungente, perciò nessuno dei due si avvicina all'altro.
:::

:::teorema{#equiproiettivita titolo="Equiproiettività del campo delle velocità"}
Siano $P$ e $Q$ due punti di un corpo rigido e sia $\hat{u} = \dfrac{P-Q}{|P-Q|}$ il versore della loro congiungente. Allora
$$
\vec{v}_P \cdot \hat{u} = \vec{v}_Q \cdot \hat{u} ,
$$
cioè le velocità di due punti hanno la *stessa* componente lungo la loro congiungente. L'uguaglianza segue dalla forma differenziale del vincolo di rigidità, dividendo per $|P-Q|$. L'equiproiettività è il controllo più rapido su un campo di velocità assegnato: se due punti hanno componenti diverse lungo la congiungente, il campo non è l'atto di moto di un corpo rigido.

::struttura{nodi="A,0,0;B,5,2.5" aste="A-B" punti="0,0;5,2.5" frecce="0,0,0.8,2.2,v_A;5,2.5,7.65,1,v_B" tratteggi="0.8,2.2 1.52,0.76;7.65,1 6.52,3.26" etichette="0.95,0.1,p;5.95,2.6,p" titolo="Le proiezioni $p$ di $\vec{v}_A$ e $\vec{v}_B$ sulla retta $AB$ sono uguali"}
:::

## La formula fondamentale della cinematica rigida

:::richiamo{titolo="Prodotto vettoriale"}
Il prodotto vettoriale $\vec{a} \wedge \vec{b}$ di due vettori che formano l'angolo $\varphi$ è ortogonale a entrambi, ha modulo $ab\sin\varphi$ e verso dato dalla regola della mano destra. È nullo se e solo se i due vettori sono paralleli, è antisimmetrico, $\vec{b} \wedge \vec{a} = -\,\vec{a} \wedge \vec{b}$, ed è distributivo rispetto alla somma. Vale inoltre l'identità
$$
\vec{a} \wedge (\vec{b} \wedge \vec{c}) = (\vec{a} \cdot \vec{c})\,\vec{b} - (\vec{a} \cdot \vec{b})\,\vec{c} .
$$
Si rimanda all'argomento sui vettori nello spazio di Algebra lineare.
:::

:::richiamo{titolo="Vettore associato a una matrice antisimmetrica"}
Sia $\mathbb{A}$ una matrice $3 \times 3$ antisimmetrica, cioè con $\mathbb{A}^T = -\mathbb{A}$. Allora esiste un unico vettore $\vec{w}$ tale che $\mathbb{A}\,\vec{u} = \vec{w} \wedge \vec{u}$ per ogni $\vec{u} \in \mathbb{R}^3$, e le sue componenti sono
$$
\vec{w} = (-a_{23},\; a_{13},\; -a_{12}) .
$$
Si rimanda all'argomento sulle matrici e le applicazioni lineari di Algebra lineare.
:::

::::teorema{#formula-fondamentale titolo="Formula fondamentale della cinematica rigida"}
Sia dato un corpo rigido in moto e sia $\Omega$ un suo punto. Allora in ogni istante esiste un vettore $\vec{\omega}$, detto **velocità angolare** del corpo, tale che per ogni punto $P$ del corpo
$$
\vec{v}_P = \vec{v}_\Omega + \vec{\omega} \wedge (P - \Omega) .
$$
Il vettore $\vec{\omega}$ dipende dall'istante ma non dal punto $\Omega$ scelto come riferimento. La formula dice che l'atto di moto di un rigido è individuato da due soli vettori, la velocità di un suo punto e la velocità angolare, quindi da sei numeri: la velocità di tutti gli altri punti si ottiene con un prodotto vettoriale. Nei problemi piani si pone $\vec{\omega} = \dot{\vartheta}\,\hat{k}$, con $\vartheta$ l'angolo che una retta solidale con il corpo forma con l'asse $x$ e con il verso antiorario positivo.

:::dimostrazione
L'idea è derivare la scrittura di $P - \Omega$ nella base solidale e usare l'ortonormalità della base per riconoscere una matrice antisimmetrica.

Si parte da
$$
P - \Omega = \xi_P\,\hat{e}_1 + \eta_P\,\hat{e}_2 + \zeta_P\,\hat{e}_3 ,
$$
dove le tre coordinate sono costanti. Derivando rispetto al tempo si ottiene
$$
\vec{v}_P - \vec{v}_\Omega = \xi_P\,\dot{\hat{e}}_1 + \eta_P\,\dot{\hat{e}}_2 + \zeta_P\,\dot{\hat{e}}_3 .
$$
Si considerino ora i nove numeri $a_{ij} = \dot{\hat{e}}_i \cdot \hat{e}_j$. La base è ortonormale in ogni istante, perciò $\hat{e}_i \cdot \hat{e}_j$ è costante e la sua derivata è nulla:
$$
\dot{\hat{e}}_i \cdot \hat{e}_j + \hat{e}_i \cdot \dot{\hat{e}}_j = 0 ,
\qquad \text{cioè} \qquad
a_{ij} + a_{ji} = 0 .
$$
La matrice $\mathbb{A} = (a_{ij})$ è quindi antisimmetrica, e per il richiamo esiste un unico vettore $\vec{\omega}$ con $\mathbb{A}\,\vec{u} = \vec{\omega} \wedge \vec{u}$ nella base solidale. Dato che $\dot{\hat{e}}_i = \sum_j a_{ij}\,\hat{e}_j$, ne segue
$$
\dot{\hat{e}}_i = \vec{\omega} \wedge \hat{e}_i
\qquad (i = 1, 2, 3) .
$$
Sostituendo nell'espressione di $\vec{v}_P - \vec{v}_\Omega$ e usando la distributività del prodotto vettoriale si ottiene
$$
\vec{v}_P - \vec{v}_\Omega = \vec{\omega} \wedge \big( \xi_P\,\hat{e}_1 + \eta_P\,\hat{e}_2 + \zeta_P\,\hat{e}_3 \big) = \vec{\omega} \wedge (P - \Omega) ,
$$
che è la tesi. Il vettore $\vec{\omega}$ è stato costruito a partire dalla sola base solidale, perciò non dipende dal punto $\Omega$.
:::
::::

::::teorema{#unicita-omega titolo="Unicità della velocità angolare"}
Sia dato l'atto di moto di un corpo rigido non degenere in un segmento. Se per ogni punto $P$ del corpo valgono
$$
\vec{v}_P = \vec{v}_\Omega + \vec{\omega} \wedge (P - \Omega)
\qquad \text{e} \qquad
\vec{v}_P = \vec{v}_\Omega + \vec{\omega}\,' \wedge (P - \Omega) ,
$$
allora $\vec{\omega} = \vec{\omega}\,'$. La velocità angolare è dunque una grandezza dell'atto di moto, e non dipende dal riferimento solidale usato per introdurla.

:::dimostrazione
Sottraendo le due uguaglianze si ottiene $(\vec{\omega} - \vec{\omega}\,') \wedge (P - \Omega) = \vec{0}$ per ogni punto $P$ del corpo. Il corpo non è contenuto in una retta, perciò fra i vettori $P - \Omega$ ce ne sono tre linearmente indipendenti. Il vettore $\vec{\omega} - \vec{\omega}\,'$ è allora parallelo a tre direzioni indipendenti, e questo è possibile soltanto se $\vec{\omega} - \vec{\omega}\,' = \vec{0}$.
:::
::::

## Il campo delle accelerazioni

::::teorema{#campo-accelerazioni titolo="Accelerazione dei punti di un corpo rigido"}
Siano $\Omega$ e $P$ due punti di un corpo rigido di velocità angolare $\vec{\omega}$. Allora
$$
\vec{a}_P = \vec{a}_\Omega + \dot{\vec{\omega}} \wedge (P - \Omega) + \vec{\omega} \wedge \big( \vec{\omega} \wedge (P - \Omega) \big) .
$$
Il campo delle accelerazioni è quindi determinato da $\vec{a}_\Omega$, da $\vec{\omega}$ e dalla sua derivata $\dot{\vec{\omega}}$, detta **accelerazione angolare**. La formula serve ogni volta che si scrivono le equazioni della dinamica per un punto che non sia il centro di massa, per esempio il punto di contatto di un disco che rotola.

:::dimostrazione
Si deriva rispetto al tempo la formula fondamentale. Il primo addendo dà $\vec{a}_\Omega$ e il secondo, per la regola di derivazione del prodotto vettoriale, dà
$$
\dot{\vec{\omega}} \wedge (P - \Omega) + \vec{\omega} \wedge \frac{d}{dt}\,(P - \Omega) .
$$
La derivata di $P - \Omega$ è $\vec{v}_P - \vec{v}_\Omega$, che per la formula fondamentale vale $\vec{\omega} \wedge (P - \Omega)$. Sostituendo si ottiene la tesi.
:::
::::

:::osservazione{#accelerazioni-nel-piano titolo="Il caso piano"}
In un moto piano si ha $\vec{\omega} = \dot{\vartheta}\,\hat{k}$ e il vettore $P - \Omega$ appartiene al piano $Oxy$, perciò è ortogonale a $\vec{\omega}$. Nell'identità del doppio prodotto vettoriale il termine $\vec{\omega} \cdot (P - \Omega)$ è nullo, quindi
$$
\vec{\omega} \wedge \big( \vec{\omega} \wedge (P - \Omega) \big) = -\,\dot{\vartheta}^{\,2}\,(P - \Omega)
$$
e la formula delle accelerazioni diventa
$$
\vec{a}_P = \vec{a}_\Omega + \ddot{\vartheta}\,\hat{k} \wedge (P - \Omega) - \dot{\vartheta}^{\,2}\,(P - \Omega) .
$$
Il secondo addendo è ortogonale a $P - \Omega$ e il terzo è diretto da $P$ verso $\Omega$: sono il termine tangenziale e il termine centripeto del moto circolare di $P$ attorno a $\Omega$, trattato nell'argomento sulla cinematica del punto.
:::

## Invariante cinematico e teorema di Mozzi

:::definizione{#invariante-cinematico titolo="Invariante cinematico"}
L'**invariante cinematico** di un atto di moto rigido è il numero
$$
I = \vec{\omega} \cdot \vec{v}_P ,
$$
che non dipende dal punto $P$ del corpo. Il nome è giustificato da questo conto: per due punti $P$ e $\Omega$ del corpo
$$
\vec{\omega} \cdot \vec{v}_P = \vec{\omega} \cdot \vec{v}_\Omega + \vec{\omega} \cdot \big( \vec{\omega} \wedge (P - \Omega) \big) = \vec{\omega} \cdot \vec{v}_\Omega ,
$$
perché il prodotto misto con due fattori uguali è nullo. L'invariante misura la componente della velocità lungo l'asse della rotazione, quindi dice se il corpo, oltre a ruotare, avanza lungo $\vec{\omega}$.
:::

::::teorema{#teorema-di-mozzi titolo="Teorema di Mozzi"}
Sia dato un atto di moto rigido con $\vec{\omega} \neq \vec{0}$ e sia $\Omega$ un punto del corpo. Allora i punti la cui velocità è parallela a $\vec{\omega}$ formano una retta parallela a $\vec{\omega}$, detta **asse di Mozzi**, passante per il punto
$$
P^* = \Omega + \frac{\vec{\omega} \wedge \vec{v}_\Omega}{|\vec{\omega}|^2} ,
$$
e la velocità comune dei suoi punti è
$$
\vec{v}_{\min} = \frac{I}{|\vec{\omega}|^2}\;\vec{\omega} .
$$
Per ogni altro punto $P$ vale $\vec{v}_P = \vec{v}_{\min} + \vec{\omega} \wedge (P - P^*)$, con i due addendi ortogonali, quindi $|\vec{v}_P| \ge |\vec{v}_{\min}|$. L'atto di moto più generale di un corpo rigido è perciò la somma di una traslazione lungo un asse e di una rotazione attorno allo stesso asse, cioè un atto di moto elicoidale; il numero $p = \dfrac{I}{|\vec{\omega}|^2}$ è il **passo** dell'elica e vale l'avanzamento per radiante di rotazione.

::struttura{linee="-0.4,0 3.6,0" tratteggi="0,1 0.18,1.01 0.34,0.86 0.46,0.59 0.55,0.22 0.59,-0.18 0.59,-0.55 0.55,-0.84 0.5,-1 0.45,-1.01 0.41,-0.86 0.41,-0.59 0.45,-0.22 0.54,0.18 0.66,0.55 0.82,0.84 1,1 1.18,1.01 1.34,0.86 1.46,0.59 1.55,0.22 1.59,-0.18 1.59,-0.55 1.55,-0.84 1.5,-1 1.45,-1.01 1.41,-0.86 1.41,-0.59 1.45,-0.22 1.54,0.18 1.66,0.55 1.82,0.84 2,1" punti="0.3,0,P*,centro" frecce="0.3,0,1,0,v_min;2.2,0,3.1,0,ω" etichette="3,-0.4,asse di Mozzi;2.15,1.2,P" riferimento=0 titolo="Asse di Mozzi: i suoi punti hanno velocità $\vec{v}_{\min}$ parallela a $\vec{\omega}$, mentre un punto $P$ fuori dall'asse descrive un'elica"}

:::dimostrazione
Si cercano i punti $P$ per cui $\vec{v}_P = \lambda\,\vec{\omega}$ per qualche numero $\lambda$. Si verifica prima che $P^*$ è uno di essi. Dalla formula fondamentale e dall'identità del doppio prodotto vettoriale
$$
\begin{aligned}
\vec{v}_{P^*} &= \vec{v}_\Omega + \vec{\omega} \wedge \frac{\vec{\omega} \wedge \vec{v}_\Omega}{|\vec{\omega}|^2} \\[6pt]
&= \vec{v}_\Omega + \frac{(\vec{\omega} \cdot \vec{v}_\Omega)\,\vec{\omega} - (\vec{\omega} \cdot \vec{\omega})\,\vec{v}_\Omega}{|\vec{\omega}|^2} \\[6pt]
&= \frac{I}{|\vec{\omega}|^2}\;\vec{\omega} ,
\end{aligned}
$$
quindi la velocità di $P^*$ è parallela a $\vec{\omega}$ e vale $\vec{v}_{\min}$. Se poi $P = P^* + t\,\vec{\omega}$, allora $\vec{\omega} \wedge (P - P^*) = \vec{0}$ e $\vec{v}_P = \vec{v}_{P^*}$, perciò tutta la retta per $P^*$ parallela a $\vec{\omega}$ ha la stessa velocità.

Resta da escludere che vi siano altri punti. Sia $\vec{v}_P$ parallela a $\vec{\omega}$ e si ponga $\vec{d} = P - P^*$. Dalla formula fondamentale $\vec{v}_P = \vec{v}_{\min} + \vec{\omega} \wedge \vec{d}$, e il vettore $\vec{\omega} \wedge \vec{d}$ è ortogonale a $\vec{\omega}$. Poiché $\vec{v}_P$ e $\vec{v}_{\min}$ sono entrambe parallele a $\vec{\omega}$, la loro differenza $\vec{\omega} \wedge \vec{d}$ è parallela a $\vec{\omega}$ e ortogonale a $\vec{\omega}$, dunque è nulla; allora $\vec{d}$ è parallelo a $\vec{\omega}$ e $P$ sta sulla retta trovata. La disuguaglianza $|\vec{v}_P| \ge |\vec{v}_{\min}|$ segue dal teorema di Pitagora applicato ai due addendi ortogonali $\vec{v}_{\min}$ e $\vec{\omega} \wedge (P - P^*)$.
:::
::::

:::osservazione{#atti-di-moto-notevoli titolo="Classificazione degli atti di moto"}
Il teorema di Mozzi, letto insieme al valore dell'invariante, dà i tre casi possibili per l'atto di moto di un corpo rigido in un istante assegnato.

- $\vec{\omega} = \vec{0}$: tutti i punti hanno la stessa velocità $\vec{v}_\Omega$ e l'atto di moto è **traslatorio**. L'asse di Mozzi non è definito.
- $\vec{\omega} \neq \vec{0}$ e $I = 0$: si ha $\vec{v}_{\min} = \vec{0}$, quindi i punti dell'asse di Mozzi sono fermi e l'atto di moto è **rotatorio**. L'asse si chiama allora asse di istantanea rotazione, e per ogni punto $\vec{v}_P = \vec{\omega} \wedge (P - P^*)$.
- $\vec{\omega} \neq \vec{0}$ e $I \neq 0$: l'atto di moto è **elicoidale**, con passo $p = \dfrac{I}{|\vec{\omega}|^2}$ e nessun punto fermo.

In un corpo rigido con un punto fisso $\Omega$ la velocità di $\Omega$ è nulla, perciò $I = 0$ e l'atto di moto è rotatorio in ogni istante: l'asse di istantanea rotazione passa per il punto fisso. Questo è il caso dei moti studiati nell'argomento sulla dinamica del corpo rigido con le equazioni di Eulero.
:::

## Moto rigido piano e centro di istantanea rotazione

:::definizione{#moto-rigido-piano titolo="Moto rigido piano"}
Un moto rigido è **piano** se esiste un piano fisso, che si prende come $Oxy$, tale che ogni punto del corpo si muove in un piano parallelo a esso. In un moto piano le velocità sono parallele a $Oxy$ e la velocità angolare è ortogonale al piano:
$$
\vec{\omega} = \dot{\vartheta}\,\hat{k} ,
$$
dove $\vartheta$ è l'angolo fra una retta solidale con il corpo e l'asse $x$, positivo in verso antiorario. L'invariante cinematico è allora $I = \vec{\omega} \cdot \vec{v}_P = 0$, perché $\vec{\omega}$ è ortogonale a tutte le velocità; perciò un atto di moto rigido piano è traslatorio oppure rotatorio. Il moto piano è il caso degli esercizi d'esame con aste, dischi e lamine nel piano verticale, e tutto si riduce allo studio della funzione $\vartheta(t)$ e del moto di un punto.
:::

::::teorema{#centro-di-istantanea-rotazione titolo="Centro di istantanea rotazione"}
Sia dato un atto di moto rigido piano con $\dot{\vartheta} \neq 0$ e sia $\Omega$ un punto del corpo. Allora esiste uno e un solo punto $C$ del piano del moto con velocità nulla, detto **centro di istantanea rotazione**, dato da
$$
C = \Omega + \frac{\hat{k} \wedge \vec{v}_\Omega}{\dot{\vartheta}} ,
$$
e per ogni punto $P$ del corpo vale
$$
\vec{v}_P = \dot{\vartheta}\,\hat{k} \wedge (P - C) .
$$
In particolare $\vec{v}_P$ è ortogonale al segmento $CP$ e ha modulo $|\dot{\vartheta}|\,|P - C|$. Il centro di istantanea rotazione riduce quindi il calcolo delle velocità a quello di un moto circolare: trovato $C$, ogni velocità si ottiene come prodotto di $|\dot{\vartheta}|$ per la distanza da $C$, con direzione ortogonale alla congiungente. Il punto $C$ non è in generale un punto del corpo, ma un punto del piano solidale con esso, e può cadere fuori dal corpo materiale.

:::dimostrazione
Il centro di istantanea rotazione è l'intersezione dell'asse di Mozzi con il piano del moto, perché l'invariante è nullo e l'asse è ortogonale a $Oxy$; si ricava però direttamente. Si cerca $C$ con $\vec{v}_C = \vec{0}$ e si pone $\vec{d} = C - \Omega$, vettore del piano $Oxy$. La formula fondamentale dà
$$
\vec{0} = \vec{v}_\Omega + \dot{\vartheta}\,\hat{k} \wedge \vec{d} .
$$
Si moltiplica vettorialmente a sinistra per $\hat{k}$ e si usa l'identità del doppio prodotto vettoriale con $\hat{k} \cdot \vec{d} = 0$:
$$
\hat{k} \wedge (\hat{k} \wedge \vec{d}) = (\hat{k} \cdot \vec{d})\,\hat{k} - (\hat{k} \cdot \hat{k})\,\vec{d} = -\,\vec{d} .
$$
Ne segue $\vec{0} = \hat{k} \wedge \vec{v}_\Omega - \dot{\vartheta}\,\vec{d}$, e poiché $\dot{\vartheta} \neq 0$ si ottiene $\vec{d} = \dfrac{\hat{k} \wedge \vec{v}_\Omega}{\dot{\vartheta}}$, che è l'espressione annunciata. Il punto così determinato è unico, perché $\vec{d}$ è l'unica soluzione dell'equazione. Infine, scrivendo la formula fondamentale con polo $C$ e $\vec{v}_C = \vec{0}$ si ottiene $\vec{v}_P = \dot{\vartheta}\,\hat{k} \wedge (P - C)$.
:::
::::

:::osservazione{#costruzione-del-centro titolo="Come si costruisce il centro di istantanea rotazione"}
Dalla relazione $\vec{v}_P = \dot{\vartheta}\,\hat{k} \wedge (P - C)$ segue che $C$ appartiene alla retta per $P$ ortogonale a $\vec{v}_P$. Conoscendo le direzioni delle velocità di due punti $A$ e $B$, il centro è quindi l'intersezione della retta per $A$ ortogonale a $\vec{v}_A$ con la retta per $B$ ortogonale a $\vec{v}_B$. Nei problemi le direzioni si leggono sui vincoli: un punto su una guida ha velocità parallela alla guida, un punto incernierato a terra è fermo e coincide con il centro, un corpo che rotola senza strisciare su una guida fissa ha il centro nel punto di contatto.

Le due rette ortogonali alle velocità possono anche risultare parallele e distinte. In quel caso le velocità di $A$ e di $B$ sono parallele fra loro, e per l'equiproiettività sono uguali, perciò $\dot{\vartheta} = 0$ e l'atto di moto è traslatorio: il centro di istantanea rotazione non esiste, e si dice che è all'infinito nella direzione ortogonale alle velocità.

::struttura{nodi="A,0,0;B,4.5,1.6" aste="A-B" punti="0,0;4.5,1.6;2.2,-2.2,C,centro" frecce="0,0,1.2,1.2,v_A;4.5,1.6,6.57,0.35,v_B" tratteggi="0,0 2.2,-2.2;4.5,1.6 2.2,-2.2" titolo="Il centro $C$ è l'intersezione delle rette ortogonali a $\vec{v}_A$ e a $\vec{v}_B$"}
:::

:::esempio{#esempio-guide-ortogonali titolo="Asta con gli estremi su due guide ortogonali"}
Un'asta $AB$ di lunghezza $\ell$ ha l'estremo $A$ su una guida orizzontale e l'estremo $B$ su una guida verticale, e forma con l'orizzontale l'angolo $\vartheta$. Allora
$$
A - O = \ell\cos\vartheta\;\hat{\imath} ,
\qquad
B - O = \ell\sin\vartheta\;\hat{\jmath} ,
$$
quindi $\vec{v}_A = -\,\ell\dot{\vartheta}\sin\vartheta\;\hat{\imath}$ e $\vec{v}_B = \ell\dot{\vartheta}\cos\vartheta\;\hat{\jmath}$. La velocità di $A$ è orizzontale e quella di $B$ è verticale, perciò il centro di istantanea rotazione è l'intersezione della verticale per $A$ con l'orizzontale per $B$:
$$
C - O = \ell\cos\vartheta\;\hat{\imath} + \ell\sin\vartheta\;\hat{\jmath} .
$$
La distanza $|A - C| = \ell\sin\vartheta$ moltiplicata per $|\dot{\vartheta}|$ restituisce $|\vec{v}_A|$, come deve essere. L'asta appartiene al piano solidale in cui $C$ è il quarto vertice del rettangolo $OACB$, e la velocità angolare dell'asta è $\vec{\omega} = -\,\dot{\vartheta}\,\hat{k}$: quando $\vartheta$ cresce, l'estremo $B$ sale e l'asta ruota in verso orario.

::struttura{nodi="A,2.6,0;B,0,1.5" aste="A-B" linee="-0.3,0 3.4,0;0,-0.3 0,2.3" punti="2.6,0;0,1.5;2.6,1.5,C,centro" frecce="2.6,0,1.7,0,v_A;0,1.5,0,2.1,v_B" tratteggi="2.6,0 2.6,1.5;0,1.5 2.6,1.5" etichette="2.15,0.22,ϑ" riferimento=0 titolo="L'asta fra due guide ortogonali: il centro $C$ chiude il rettangolo $OACB$"}
:::

## Base e rulletta

:::definizione{#base-e-rulletta titolo="Base e rulletta"}
In un moto rigido piano con $\dot{\vartheta} \neq 0$ il centro di istantanea rotazione cambia da istante a istante. La curva descritta da $C$ nel piano fisso si chiama **base**, o polare fissa; la curva descritta da $C$ nel piano solidale con il corpo si chiama **rulletta**, o polare mobile. La base si ottiene scrivendo le coordinate $x_C$, $y_C$ in funzione del parametro che individua la configurazione ed eliminando il parametro; la rulletta si ottiene calcolando le coordinate $\xi_C$, $\eta_C$ di $C$ nel riferimento solidale ed eliminando lo stesso parametro.
:::

:::richiamo{titolo="Composizione delle velocità"}
Dato un riferimento mobile, la velocità assoluta di un punto è la somma della velocità di trascinamento e della velocità relativa:
$$
\vec{v}_a = \vec{v}_\tau + \vec{v}_r .
$$
Si rimanda all'argomento sulla cinematica del punto e i moti relativi.
:::

::::teorema{#rotolamento-rulletta titolo="La rulletta rotola senza strisciare sulla base"}
In un moto rigido piano con $\dot{\vartheta} \neq 0$ la base e la rulletta sono tangenti nel punto $C$, e il moto del corpo si ottiene facendo rotolare senza strisciare la rulletta sulla base.

:::dimostrazione
Si consideri il punto geometrico $C(t)$. Come punto della base ha velocità $\vec{u}_b = \dfrac{dC}{dt}$, calcolata nel riferimento fisso. Come punto della rulletta ha una velocità $\vec{u}_r$ rispetto al riferimento solidale. Il teorema di composizione delle velocità, applicato al punto geometrico $C$, dà
$$
\vec{u}_b = \vec{v}_\tau + \vec{u}_r ,
$$
dove $\vec{v}_\tau$ è la velocità del punto del corpo che in quell'istante occupa la posizione $C$. Quel punto è il centro di istantanea rotazione, quindi $\vec{v}_\tau = \vec{0}$ e $\vec{u}_b = \vec{u}_r$. Le due curve hanno perciò nel punto comune $C$ lo stesso vettore tangente, dunque sono tangenti, e le lunghezze d'arco percorse nello stesso intervallo di tempo sono uguali, perché i moduli delle due velocità coincidono in ogni istante. Il contatto fra rulletta e base avviene allora senza strisciamento.
:::
::::

:::esempio{#esempio-base-rulletta titolo="Base e rulletta dell'asta fra due guide ortogonali"}
Per l'asta con gli estremi sulle due guide ortogonali si è trovato $C - O = \ell\cos\vartheta\;\hat{\imath} + \ell\sin\vartheta\;\hat{\jmath}$, quindi $x_C^2 + y_C^2 = \ell^2$: la **base** è la circonferenza di centro $O$ e raggio $\ell$.

Per la rulletta si prende il riferimento solidale con origine in $A$ e primo versore $\hat{e}_1 = \dfrac{B-A}{\ell}$, cioè $\hat{e}_1 = -\cos\vartheta\;\hat{\imath} + \sin\vartheta\;\hat{\jmath}$, e $\hat{e}_2 = -\sin\vartheta\;\hat{\imath} - \cos\vartheta\;\hat{\jmath}$. Da $C - A = \ell\sin\vartheta\;\hat{\jmath}$ si ricava
$$
\xi_C = (C-A) \cdot \hat{e}_1 = \ell\sin^2\vartheta ,
\qquad
\eta_C = (C-A) \cdot \hat{e}_2 = -\,\ell\sin\vartheta\cos\vartheta .
$$
Allora $\xi_C^2 + \eta_C^2 = \ell^2\sin^2\vartheta = \ell\,\xi_C$, cioè
$$
\left( \xi_C - \frac{\ell}{2} \right)^{2} + \eta_C^{2} = \frac{\ell^2}{4} :
$$
la **rulletta** è la circonferenza di diametro $\ell$ che ha centro nel punto medio dell'asta. Il moto dell'asta si ottiene perciò facendo rotolare una circonferenza di raggio $\dfrac{\ell}{2}$ dentro una circonferenza di raggio $\ell$.

::struttura{nodi="A,2.6,0;B,0,1.5" aste="A-B" linee="-0.4,0 3.3,0;0,-0.4 0,3.3;2.8,0.75 2.75,1.14 2.6,1.5 2.36,1.81 2.05,2.05 1.69,2.2 1.3,2.25 0.91,2.2 0.55,2.05 0.24,1.81 0,1.5 -0.15,1.14 -0.2,0.75 -0.15,0.36 0,0 0.24,-0.31 0.55,-0.55 0.91,-0.7 1.3,-0.75 1.69,-0.7 2.05,-0.55 2.36,-0.31 2.6,0 2.75,0.36 2.8,0.75" tratteggi="2.97,-0.42 2.99,-0.18 3,0.05 2.99,0.29 2.95,0.52 2.9,0.75 2.84,0.98 2.75,1.2 2.65,1.41 2.53,1.61 2.4,1.81 2.25,1.99 2.08,2.16 1.91,2.31 1.72,2.46 1.52,2.58 1.32,2.7 1.1,2.79 0.88,2.87 0.65,2.93 0.42,2.97 0.18,2.99 -0.05,3 -0.29,2.99 -0.52,2.95" punti="2.6,1.5,C,centro;1.3,0.75,M;0,0,O" etichette="0.35,3.2,base;1.2,-1.1,rulletta" riferimento=0 titolo="Base di raggio $\ell$ e rulletta di raggio $\dfrac{\ell}{2}$, tangenti nel centro $C$"}
:::

## Rotolamento senza strisciamento

:::definizione{#rotolamento-senza-strisciamento titolo="Rotolamento senza strisciamento"}
Due corpi rigidi a contatto in un punto $C$ **rotolano senza strisciare** se, in ogni istante, il punto del primo corpo e il punto del secondo corpo che occupano la posizione $C$ hanno la stessa velocità:
$$
\vec{v}_C^{\,(1)} = \vec{v}_C^{\,(2)} .
$$
Si tratta di una condizione sulle velocità dei punti materiali a contatto, non sul moto del punto geometrico di contatto, che in generale si sposta. Quando il secondo corpo è fisso la condizione diventa $\vec{v}_C^{\,(1)} = \vec{0}$, quindi $C$ è il centro di istantanea rotazione del primo corpo.
:::

:::teorema{#disco-su-guida-rettilinea titolo="Disco che rotola su una guida rettilinea fissa"}
Un disco di raggio $R$ e centro $G$ rotola senza strisciare su una guida orizzontale fissa, con $G - O = s\,\hat{\imath} + R\,\hat{\jmath}$. Allora
$$
\vec{\omega} = -\,\frac{\dot{s}}{R}\;\hat{k} ,
$$
e la velocità del punto $T$ diametralmente opposto al contatto è $\vec{v}_T = 2\dot{s}\;\hat{\imath}$. La prima uguaglianza segue dalla condizione $\vec{v}_C = \vec{0}$ scritta con la formula fondamentale: posto $\vec{\omega} = \omega\,\hat{k}$ e $C - G = -R\,\hat{\jmath}$, si ha
$$
\vec{v}_C = \dot{s}\,\hat{\imath} + \omega\,\hat{k} \wedge (-R\,\hat{\jmath}) = (\dot{s} + \omega R)\,\hat{\imath} ,
$$
che è nulla se e solo se $\omega = -\dfrac{\dot{s}}{R}$. Il segno meno dice che il disco che avanza verso destra ruota in verso orario. La velocità di $T$ si ottiene dalla stessa formula con $T - G = R\,\hat{\jmath}$, e vale il doppio di quella del centro perché $T$ dista da $C$ il doppio di $G$. La condizione $\dot{s} = -\omega R$ si integra in $s = -R\vartheta + \text{costante}$, con $\vec{\omega} = \dot{\vartheta}\,\hat{k}$: il vincolo di puro rotolamento su una guida rettilinea è perciò olonomo, e il disco ha un solo grado di libertà.

::struttura{cerchi="2,1,1" linee="-0.3,0 4.6,0" punti="2,1,G,baricentro;2,0,C,centro;2,2,T" frecce="2,1,2.9,1,v_G;2,2,3.8,2,v_T" coppie="1.4 0.5,-1,ω" titolo="Disco che rotola senza strisciare: $\vec{v}_C = \vec{0}$, $|\vec{v}_T| = 2\,|\vec{v}_G|$"}
:::

:::attenzione
Il punto di contatto di un disco che rotola senza strisciare ha velocità nulla, mentre la sua accelerazione non è nulla. Per il disco che rotola sulla guida orizzontale, con $\vec{a}_G = \ddot{s}\,\hat{\imath}$ e $\dot{\vec{\omega}} = -\dfrac{\ddot{s}}{R}\,\hat{k}$, la formula delle accelerazioni dà
$$
\vec{a}_C = \ddot{s}\,\hat{\imath} - \frac{\ddot{s}}{R}\,\hat{k} \wedge (-R\,\hat{\jmath}) - \frac{\dot{s}^{\,2}}{R^2}\,(-R\,\hat{\jmath}) = \frac{\dot{s}^{\,2}}{R}\;\hat{\jmath} ,
$$
diretta da $C$ verso il centro $G$. Un disco che avanza con velocità costante ha quindi accelerazione nulla nel centro e accelerazione $\dfrac{\dot{s}^{\,2}}{R}$ nel punto di contatto.
:::

## Angoli di Eulero e formule di Poisson

:::definizione{#angoli-di-eulero titolo="Angoli di Eulero"}
Sia dato un corpo rigido con un punto fisso $\Omega$, e si prendano il riferimento fisso $(\Omega; x, y, z)$ e il riferimento solidale $(\Omega; \xi, \eta, \zeta)$ con versori $\hat{e}_1$, $\hat{e}_2$, $\hat{e}_3$. Se $\hat{e}_3 \neq \pm\hat{k}$, i due piani $xy$ e $\xi\eta$ si intersecano in una retta detta **linea dei nodi**, di versore
$$
\hat{N} = \frac{\hat{k} \wedge \hat{e}_3}{|\hat{k} \wedge \hat{e}_3|} .
$$
Gli **angoli di Eulero** sono i tre angoli
$$
\psi = \widehat{\hat{\imath}\,\hat{N}} \quad (\text{precessione}) ,
\qquad
\vartheta = \widehat{\hat{k}\,\hat{e}_3} \quad (\text{nutazione}) ,
\qquad
\varphi = \widehat{\hat{N}\,\hat{e}_1} \quad (\text{rotazione propria}) ,
$$
misurati rispettivamente nel piano $xy$ attorno a $\hat{k}$, nel piano ortogonale a $\hat{N}$ attorno a $\hat{N}$ e nel piano $\xi\eta$ attorno a $\hat{e}_3$. I tre angoli individuano l'orientamento del corpo, e sono quindi tre coordinate lagrangiane per un rigido con un punto fisso: la configurazione si raggiunge dalla posizione iniziale con la rotazione di $\psi$ attorno a $\hat{k}$, poi quella di $\vartheta$ attorno alla linea dei nodi, poi quella di $\varphi$ attorno a $\hat{e}_3$.

::struttura{linee="0,0 3.2,0;0,0 0,2.8;0,0 -1.5,-1.1;0,0 1.1,2.3;0,0 2.6,-0.8" tratteggi="-1.5,-1.1 2.6,-0.8" punti="0,0,Ω" etichette="3.3,0.1,x;-1.9,-1.3,y;0.1,2.9,z;1.15,2.45,ζ;2.75,-0.85,N;0.45,0.5,ϑ;1.3,-0.35,ψ" riferimento=0 titolo="Linea dei nodi $\hat{N}$, nutazione $\vartheta$ fra $z$ e $\zeta$, precessione $\psi$ fra $x$ e $\hat{N}$"}
:::

:::teorema{#formule-di-poisson titolo="Formule di Poisson"}
Siano $\hat{e}_1$, $\hat{e}_2$, $\hat{e}_3$ i versori di un riferimento solidale con un corpo rigido di velocità angolare $\vec{\omega}$. Allora
$$
\dot{\hat{e}}_i = \vec{\omega} \wedge \hat{e}_i
\qquad (i = 1, 2, 3) .
$$
Le formule seguono dalla formula fondamentale applicata ai punti $P_i = \Omega + \hat{e}_i$, che sono punti del corpo: da una parte $\vec{v}_{P_i} = \vec{v}_\Omega + \vec{\omega} \wedge \hat{e}_i$, dall'altra $\vec{v}_{P_i} = \dfrac{d}{dt}\,(\Omega + \hat{e}_i) = \vec{v}_\Omega + \dot{\hat{e}}_i$; confrontando si ottiene la tesi. Servono ogni volta che si deriva un vettore solidale con il corpo, per esempio l'asse di un giroscopio o il versore di un'asta, e sono il passaggio chiave nel calcolo della velocità angolare dagli angoli di Eulero.
:::

:::teorema{#omega-con-gli-angoli-di-eulero titolo="Velocità angolare in funzione degli angoli di Eulero"}
Per un corpo rigido con un punto fisso, la velocità angolare si decompone lungo i tre assi delle tre rotazioni che definiscono gli angoli di Eulero:
$$
\vec{\omega} = \dot{\psi}\,\hat{k} + \dot{\vartheta}\,\hat{N} + \dot{\varphi}\,\hat{e}_3 .
$$
Le sue componenti nella base solidale sono
$$
\begin{aligned}
\omega_\xi &= \dot{\psi}\sin\vartheta\sin\varphi + \dot{\vartheta}\cos\varphi , \\[4pt]
\omega_\eta &= \dot{\psi}\sin\vartheta\cos\varphi - \dot{\vartheta}\sin\varphi , \\[4pt]
\omega_\zeta &= \dot{\psi}\cos\vartheta + \dot{\varphi} ,
\end{aligned}
$$
e il modulo vale
$$
|\vec{\omega}|^2 = \dot{\psi}^{\,2} + \dot{\vartheta}^{\,2} + \dot{\varphi}^{\,2} + 2\,\dot{\psi}\dot{\varphi}\cos\vartheta .
$$
La prima uguaglianza si ottiene applicando le formule di Poisson alla composizione delle tre rotazioni; le componenti seguono proiettando $\hat{k}$ e $\hat{N}$ sulla base solidale. Queste espressioni servono per scrivere l'energia cinetica di un rigido con punto fisso in coordinate lagrangiane, come si vede nell'argomento sulle equazioni di Lagrange.
:::

:::osservazione{#precessioni titolo="Precessioni regolari"}
Un moto rigido con un punto fisso si dice **precessione** se l'angolo di nutazione $\vartheta$ resta costante, cioè se l'asse $\zeta$ solidale con il corpo forma un angolo costante con l'asse fisso $z$; la precessione è **regolare** se anche $\dot{\psi}$ e $\dot{\varphi}$ sono costanti. In una precessione regolare $\dot{\vartheta} = 0$, perciò
$$
\vec{\omega} = \dot{\psi}\,\hat{k} + \dot{\varphi}\,\hat{e}_3 ,
\qquad
|\vec{\omega}| = \sqrt{\dot{\psi}^{\,2} + \dot{\varphi}^{\,2} + 2\,\dot{\psi}\dot{\varphi}\cos\vartheta} ,
$$
e il modulo della velocità angolare è costante. Il vettore $\vec{\omega}$ forma angoli costanti con $\hat{k}$ e con $\hat{e}_3$, quindi l'asse di istantanea rotazione descrive un cono attorno all'asse fisso, detto cono fisso, e un cono attorno all'asse solidale, detto cono mobile; il moto si realizza facendo rotolare senza strisciare il cono mobile sul cono fisso. Gli angoli $\alpha$ fra $\vec{\omega}$ e $\hat{k}$ e $\beta$ fra $\vec{\omega}$ e $\hat{e}_3$ soddisfano $\alpha + \beta = \vartheta$ quando $\vec{\omega}$ sta fra i due assi, e si calcolano con
$$
\cos\alpha = \frac{\dot{\psi} + \dot{\varphi}\cos\vartheta}{|\vec{\omega}|} ,
\qquad
\cos\beta = \frac{\dot{\psi}\cos\vartheta + \dot{\varphi}}{|\vec{\omega}|} .
$$
:::

## Sistemi di più corpi rigidi collegati

:::osservazione{#sistemi-collegati titolo="Corpi rigidi collegati"}
Un sistema formato da più corpi rigidi ha una velocità angolare per ciascun corpo, e i collegamenti impongono relazioni fra le velocità angolari e le velocità dei punti. Le relazioni ricorrenti negli esercizi sono queste.

- Cerniera interna in un punto $A$ comune a due corpi: il punto $A$ è dello stesso corpo $1$ e del corpo $2$, quindi $\vec{v}_A^{\,(1)} = \vec{v}_A^{\,(2)}$. La formula fondamentale si scrive per ogni corpo con polo $A$.
- Carrello o manicotto su una guida fissa: la velocità del punto vincolato è parallela alla guida.
- Contatto con rotolamento senza strisciamento: la velocità del punto di contatto è la stessa per i due corpi; se uno è fisso, il punto di contatto è il centro di istantanea rotazione dell'altro.
- Filo inestensibile teso fra due corpi: le componenti delle velocità dei due estremi lungo il filo sono uguali.

Il procedimento è sempre lo stesso: si scelgono i parametri che individuano la configurazione, si scrive la posizione dei punti notevoli in funzione di essi, si deriva e si impongono i collegamenti. Le velocità angolari si ricavano poi dalla formula fondamentale o, nei moti piani, dal centro di istantanea rotazione di ciascun corpo.
:::

:::esempio{#esempio-disco-asta titolo="Disco con un'asta incernierata nel centro"}
Un disco di raggio $R$ e centro $G$ rotola senza strisciare su una guida orizzontale fissa, e nel centro $G$ è incernierata un'asta $GB$ di lunghezza $\ell$, libera di ruotare nel piano verticale. Si prendono come parametri l'ascissa $s$ di $G$ e l'angolo $\vartheta$ fra l'asta e la verticale discendente, perciò il sistema ha due gradi di libertà. Allora
$$
G - O = s\,\hat{\imath} + R\,\hat{\jmath} ,
\qquad
B - O = (s + \ell\sin\vartheta)\,\hat{\imath} + (R - \ell\cos\vartheta)\,\hat{\jmath} ,
$$
e derivando si ottiene
$$
\vec{v}_B = (\dot{s} + \ell\dot{\vartheta}\cos\vartheta)\,\hat{\imath} + \ell\dot{\vartheta}\sin\vartheta\,\hat{\jmath} .
$$
Il rotolamento senza strisciamento del disco dà $\vec{\omega}_{\text{disco}} = -\dfrac{\dot{s}}{R}\,\hat{k}$, mentre l'asta ha $\vec{\omega}_{\text{asta}} = \dot{\vartheta}\,\hat{k}$, perché l'angolo fra l'asta e l'asse $x$ è $\vartheta - \dfrac{\pi}{2}$ e la sua derivata è $\dot{\vartheta}$. Le due velocità angolari sono indipendenti, come deve essere per un sistema a due gradi di libertà.

::struttura{cerchi="2,1.4,1.4" linee="-0.3,0 5,0" aste="G-B" nodi="G,2,1.4,-;B,3.46,0.18" punti="2,1.4,G,baricentro;2,0,C,centro" tratteggi="2,1.4 2,0.25" etichette="2.3,0.75,ϑ" frecce="2,1.4,2.9,1.4,v_G" titolo="Disco che rotola con l'asta $GB$ incernierata nel centro: due gradi di libertà, $s$ e $\vartheta$"}
:::
