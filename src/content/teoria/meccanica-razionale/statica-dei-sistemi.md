---
titolo: "Statica del punto e dei sistemi: equazioni cardinali"
sommario: Quando un punto materiale e un sistema di corpi rigidi restano in quiete, come si scrivono le equazioni cardinali della statica, perché per il corpo rigido sono anche sufficienti e come si usano per calcolare le reazioni vincolari e le configurazioni di equilibrio.
---

## Equilibrio del punto materiale

:::definizione{#configurazione-di-equilibrio titolo="Configurazione di equilibrio"}
Si consideri un sistema materiale soggetto a vincoli fissi e a forze che dipendono dalla sola configurazione. Una configurazione compatibile con i vincoli si dice **configurazione di equilibrio** se il sistema, posto in quella configurazione con velocità nulle, vi permane a ogni istante successivo.

La definizione riguarda la quiete, perciò in tutto l'argomento le velocità e le accelerazioni dei punti sono nulle e le equazioni che si scrivono contengono solo le forze e le loro posizioni. Le configurazioni di equilibrio di un sistema a un grado di libertà si trovano risolvendo un'equazione nella coordinata lagrangiana, e le reazioni vincolari si ottengono dalle equazioni restanti.
:::

:::teorema{#equilibrio-punto-libero titolo="Equilibrio del punto materiale libero"}
Sia $P$ un punto materiale libero soggetto alle forze $\vec{F}_1, \dots, \vec{F}_n$. Allora $P$ è in equilibrio nella posizione considerata se e solo se la risultante delle forze è nulla:
$$
\vec{R} = \sum_{i=1}^{n} \vec{F}_i = \vec{0} .
$$
La condizione segue dalla legge di Newton $m\,\vec{a}_P = \vec{R}$. Infatti, se $\vec{R} = \vec{0}$, l'accelerazione è nulla e il punto in quiete permane in quiete; se viceversa il punto è in quiete, allora $\vec{a}_P = \vec{0}$ e perciò $\vec{R} = \vec{0}$. Nel piano la condizione vettoriale equivale alle due equazioni scalari $R_x = 0$ e $R_y = 0$. Un punto di massa $m$ appeso a una molla verticale di costante $k$ e lunghezza a riposo $\ell_0$ è in equilibrio quando la forza elastica equilibra il peso, quindi quando la molla è lunga $\ell_0 + \dfrac{m g}{k}$.
:::

:::definizione{#reazione-vincolare titolo="Forze attive e reazioni vincolari"}
Le forze applicate a un punto si dividono in **forze attive**, note in funzione della posizione (il peso, la forza di una molla, una forza assegnata), e **reazioni vincolari** $\vec{\Phi}$, esercitate dai vincoli e incognite. Se $\vec{F}$ indica la risultante delle forze attive, l'equilibrio del punto vincolato si scrive
$$
\vec{F} + \vec{\Phi} = \vec{0} .
$$
Un vincolo si dice **liscio** quando la reazione che esplica è ortogonale alla curva o alla superficie su cui il punto è obbligato a restare; in tutto l'argomento i vincoli sono lisci e bilaterali, salvo indicazione contraria. L'equazione precedente contiene le due componenti incognite di $\vec{\Phi}$ nel piano, quindi da sola non determina l'equilibrio, e occorre perciò separare la parte che riguarda le sole forze attive. Per un punto appoggiato su un piano orizzontale liscio e soggetto al solo peso, la reazione vale $\vec{\Phi} = m g\,\hat{\jmath}$ ed è normale al piano, come il vincolo liscio richiede.
:::

::::teorema{#equilibrio-punto-vincolato titolo="Equilibrio del punto su una curva o su una superficie liscia"}
Sia $P$ un punto materiale vincolato a una curva liscia e fissa $\gamma$, e sia $\vec{F}$ la risultante delle forze attive. Allora $P$ è in equilibrio se e solo se
$$
\vec{F} \cdot \hat{t} = 0 ,
$$
dove $\hat{t}$ è il versore tangente a $\gamma$ in $P$; in tal caso la reazione vincolare vale $\vec{\Phi} = -\,\vec{F}$. Per un punto vincolato a una superficie liscia la condizione è che $\vec{F}$ sia ortogonale alla superficie, cioè che le sue due componenti tangenziali siano nulle.

La condizione $\vec{F} \cdot \hat{t} = 0$ è un'unica equazione scalare nella coordinata che individua $P$ su $\gamma$, perciò determina le configurazioni di equilibrio senza che le reazioni compaiano. Trovata la configurazione, la reazione si legge dall'equazione $\vec{\Phi} = -\,\vec{F}$. Per un punto di massa $m$ su una guida rettilinea liscia inclinata di $\alpha$ sull'orizzontale, con una molla di costante $k$ e lunghezza a riposo nulla che lo collega all'estremo superiore della guida, la condizione dà $mg\sin\alpha - k s = 0$, quindi la distanza di equilibrio dall'estremo è $s = \dfrac{mg\sin\alpha}{k}$.

::grafico{assi=0 uguale=1 curve="2*cos(t),2*sin(t),0,6.29" vettori="1.41,-1.41,1.41,-2.61,F;1.41,-1.41,0.56,-0.56,Φ;1.41,-1.41,2.26,-0.56,t" punti="1.41,-1.41,pieno,P;0,0,pieno,O" etichette="2.45,-0.35,t" xmin=-2.8 xmax=3.4 ymin=-3.2 ymax=2.6 titolo="Punto su una guida circolare liscia: la reazione $\vec{\Phi}$ è ortogonale alla guida, quindi non ha componente lungo il versore tangente $\hat{t}$; l'equilibrio richiede che anche la forza attiva $\vec{F}$ non ne abbia"}

:::dimostrazione
Il punto è in quiete se e solo se la risultante di tutte le forze è nulla, cioè $\vec{F} + \vec{\Phi} = \vec{0}$. Poiché il vincolo è liscio, la reazione è ortogonale a $\gamma$, perciò $\vec{\Phi} \cdot \hat{t} = 0$. Proiettando l'equazione di equilibrio su $\hat{t}$ si ottiene allora
$$
\vec{F} \cdot \hat{t} + \vec{\Phi} \cdot \hat{t} = \vec{F} \cdot \hat{t} = 0 ,
$$
che è la condizione cercata, necessaria perché ricavata dall'equilibrio.

Viceversa, sia $\vec{F} \cdot \hat{t} = 0$. Si ponga $\vec{\Phi} = -\,\vec{F}$. Questo vettore è ortogonale a $\hat{t}$, dato che $\vec{\Phi} \cdot \hat{t} = -\,\vec{F} \cdot \hat{t} = 0$, quindi è una reazione che il vincolo liscio può esplicare. Con tale reazione la risultante di tutte le forze è nulla, perciò il punto in quiete permane in quiete e la configurazione è di equilibrio.
:::
::::

## Vincoli unilaterali e distacco

I vincoli che impediscono lo spostamento in un solo verso, come l'appoggio su un piano, aggiungono una disuguaglianza alle equazioni di equilibrio.

:::teorema{#vincolo-unilaterale titolo="Equilibrio con un vincolo unilaterale"}
Sia $P$ un punto appoggiato su una superficie liscia che può soltanto spingere, e sia $\hat{n}$ il versore normale alla superficie diretto verso il lato in cui il punto è libero di muoversi. La reazione è allora della forma $\vec{\Phi} = \Phi\,\hat{n}$ con $\Phi \ge 0$, e la configurazione è di equilibrio se e solo se
$$
\begin{cases}
\vec{F} \cdot \hat{t} = 0 \\[4pt]
\Phi = -\,\vec{F} \cdot \hat{n} \ge 0
\end{cases}
$$
La prima condizione individua le configurazioni in cui le forze attive sono ortogonali alla superficie; la seconda dice che in quelle configurazioni la forza attiva deve premere contro la superficie. Quando $\Phi$ risulta negativa il punto si stacca dal vincolo, e il valore dei dati che annulla $\Phi$ è il **valore di distacco**.

::struttura{linee="0,0 6,0" punti="2,0,P;4.6,0,P′" forze="2 0,0,-1.1,mg;4.6 0,0,-1.1,mg;4.6 0,0.9,0.9,F" reazioni="2 0,0,1.1,Φ" titolo="A sinistra la forza attiva preme sull'appoggio e la reazione $\Phi = mg$ è positiva; a destra la forza $\vec{F}$ solleva il punto e per $F\sin\alpha > mg$ la reazione richiesta sarebbe negativa, perciò il punto si distacca"}
:::

:::richiamo{titolo="Legge di Coulomb-Morin per l'attrito statico"}
Un vincolo di appoggio scabro esercita una reazione $\vec{\Phi} = \Phi_n\,\hat{n} + \vec{\Phi}_t$, con $\Phi_n \ge 0$ e con la componente tangenziale limitata da
$$
|\vec{\Phi}_t| \le f\,\Phi_n ,
$$
dove $f$ è il coefficiente di attrito statico. Le reazioni ammissibili formano il cono di semiapertura $\varphi = \arctan f$ attorno alla normale, detto cono d'attrito. Si rimanda all'argomento sui vincoli, i gradi di libertà e le coordinate lagrangiane.
:::

:::teorema{#equilibrio-con-attrito titolo="Equilibrio con attrito"}
Sia $P$ un punto appoggiato su una superficie scabra di coefficiente di attrito statico $f$, e sia $\vec{F}$ la risultante delle forze attive, con componenti $F_n = \vec{F} \cdot \hat{n}$ e $\vec{F}_t$. La configurazione è di equilibrio se e solo se
$$
\begin{cases}
F_n \le 0 \\[4pt]
|\vec{F}_t| \le f\,|F_n|
\end{cases}
$$
La prima condizione dice che la forza attiva preme contro la superficie; la seconda che la componente tangenziale che il vincolo deve equilibrare rientra nel cono d'attrito. In presenza di attrito l'equilibrio non si realizza in una sola configurazione ma in un *insieme* di configurazioni, perciò la risposta di un problema con attrito è una disuguaglianza. Per un punto appoggiato su un piano inclinato di $\alpha$ si ottiene $mg\sin\alpha \le f\,mg\cos\alpha$, cioè $\tan\alpha \le f$.

::grafico{assi=0 uguale=1 linee="-2.4,0 2.4,0" segmenti="0,0,0,2.6;0,0,-1.2,2.4;0,0,1.2,2.4" vettori="0,0,0.5,1.4,Φ;0,0,-0.5,-1.4,F" punti="0,0,pieno,P" etichette="0.5,1.95,φ;-1.75,2.75,cono d'attrito" xmin=-2.8 xmax=2.8 ymin=-2 ymax=3.2 titolo="Cono d'attrito di semiapertura $\varphi = \arctan f$: l'equilibrio è possibile se la reazione richiesta, opposta alla forza attiva $\vec{F}$, cade dentro il cono"}
:::

## Le equazioni cardinali della statica

:::definizione{#forze-interne-ed-esterne titolo="Forze interne ed esterne"}
Si consideri un sistema di $N$ punti materiali $P_1, \dots, P_N$. Le forze applicate si dividono in **forze interne**, esercitate fra punti del sistema, e **forze esterne**, esercitate da corpi che non appartengono al sistema. Si pone
$$
\vec{R}^{(e)} = \sum_{i=1}^{N} \vec{F}_i^{(e)} ,
\qquad
\vec{M}_O^{(e)} = \sum_{i=1}^{N} (P_i - O) \wedge \vec{F}_i^{(e)} ,
$$
e analogamente $\vec{R}^{(i)}$ e $\vec{M}_O^{(i)}$ per le forze interne. La divisione dipende da quale insieme di punti si sceglie come sistema. In un sistema di due aste incernierate fra loro, per esempio, la forza che un'asta esercita sull'altra è interna se il sistema è formato dalle due aste ed è esterna se il sistema è una sola asta.
:::

::::teorema{#forze-interne-nulle titolo="Risultante e momento delle forze interne"}
Per ogni sistema materiale le forze interne hanno risultante e momento risultante nulli rispetto a ogni polo $O$:
$$
\vec{R}^{(i)} = \vec{0} ,
\qquad
\vec{M}_O^{(i)} = \vec{0} .
$$
Il risultato permette di scrivere le equazioni di equilibrio di un sistema senza conoscere le forze interne, che negli esercizi sono le azioni nelle cerniere interne e le tensioni dei fili. Tali forze scompaiono dalle equazioni del sistema complessivo e ricompaiono quando si scrivono le equazioni di un suo sottosistema.

:::dimostrazione
Per il principio di azione e reazione, la forza $\vec{F}_{ij}$ che il punto $P_j$ esercita su $P_i$ e la forza $\vec{F}_{ji}$ che $P_i$ esercita su $P_j$ soddisfano $\vec{F}_{ij} = -\,\vec{F}_{ji}$ e hanno la stessa retta d'azione, la retta $P_i P_j$. Sommando su tutte le coppie, i termini si cancellano a due a due, quindi $\vec{R}^{(i)} = \vec{0}$. Per i momenti si sommano i contributi di una singola coppia:
$$
(P_i - O) \wedge \vec{F}_{ij} + (P_j - O) \wedge \vec{F}_{ji} = (P_i - P_j) \wedge \vec{F}_{ij} ,
$$
dove si è usato $\vec{F}_{ji} = -\,\vec{F}_{ij}$. Il vettore $P_i - P_j$ è parallelo a $\vec{F}_{ij}$, poiché la retta d'azione è la retta $P_i P_j$, perciò il prodotto vettoriale è nullo. Sommando su tutte le coppie si ottiene $\vec{M}_O^{(i)} = \vec{0}$.
:::
::::

::::teorema{#equazioni-cardinali titolo="Equazioni cardinali della statica"}
Se un sistema materiale è in equilibrio, allora per ogni polo $O$ le forze esterne soddisfano le **equazioni cardinali della statica**
$$
\begin{cases}
\vec{R}^{(e)} = \vec{0} \\[4pt]
\vec{M}_O^{(e)} = \vec{0}
\end{cases}
$$
Le due equazioni sono condizioni *necessarie* per ogni sistema, qualunque siano i vincoli e la natura dei corpi. Nei problemi piani esse danno tre equazioni scalari, $R_x^{(e)} = 0$, $R_y^{(e)} = 0$ e $M_O^{(e)} = 0$, e nello spazio sei. Sono lo strumento con cui si calcolano le reazioni vincolari e si scrivono le equazioni di equilibrio di un sistema di corpi rigidi. Per un'asta omogenea di massa $m$ e lunghezza $\ell$, incernierata in $A$ e appoggiata su un carrello in $B$, le tre equazioni scalari con il polo in $A$ sono
$$
\begin{cases}
\Phi_{Ax} = 0 \\[4pt]
\Phi_{Ay} + \Phi_B - m g = 0 \\[4pt]
\ell\,\Phi_B - \dfrac{\ell}{2}\,m g = 0
\end{cases}
$$
e danno $\Phi_B = \dfrac{m g}{2}$, $\Phi_{Ay} = \dfrac{m g}{2}$ e $\Phi_{Ax} = 0$.

:::dimostrazione
Sia il sistema in equilibrio. Ogni punto $P_i$ è in quiete, perciò la risultante di tutte le forze che agiscono su di esso è nulla:
$$
\vec{F}_i^{(e)} + \vec{F}_i^{(i)} = \vec{0} ,
\qquad i = 1, \dots, N .
$$
Sommando le $N$ relazioni si ottiene $\vec{R}^{(e)} + \vec{R}^{(i)} = \vec{0}$, e poiché $\vec{R}^{(i)} = \vec{0}$ per il teorema sulle forze interne, segue $\vec{R}^{(e)} = \vec{0}$.

Moltiplicando vettorialmente a sinistra la relazione relativa a $P_i$ per $P_i - O$ e sommando si ottiene
$$
\sum_{i=1}^{N} (P_i - O) \wedge \vec{F}_i^{(e)} + \sum_{i=1}^{N} (P_i - O) \wedge \vec{F}_i^{(i)} = \vec{M}_O^{(e)} + \vec{M}_O^{(i)} = \vec{0} ,
$$
e poiché $\vec{M}_O^{(i)} = \vec{0}$, segue $\vec{M}_O^{(e)} = \vec{0}$.
:::
::::

:::osservazione{#scelta-del-polo titolo="Scelta del polo"}
Se $\vec{R}^{(e)} = \vec{0}$, per la formula del cambiamento di polo si ha $\vec{M}_{O'}^{(e)} = \vec{M}_O^{(e)}$ per ogni coppia di poli, quindi l'equazione dei momenti scritta rispetto a un polo e quella scritta rispetto a un altro non sono indipendenti, e nel piano le equazioni scalari indipendenti restano tre. Il polo si scegli perciò dove conviene, e la scelta standard è un punto in cui si incontrano le rette d'azione di più reazioni incognite, perché quelle reazioni hanno momento nullo e non compaiono nell'equazione. In un'asta con una cerniera in $A$ e un carrello in $B$ il polo si prende in $A$, e l'equazione dei momenti contiene allora la sola reazione del carrello.
:::

## Sufficienza per il corpo rigido

:::attenzione
Per un sistema che non è un corpo rigido le equazioni cardinali sono necessarie e non sufficienti. Si considerino due punti $P_1$ e $P_2$ liberi di scorrere su una retta orizzontale liscia e collegati da una molla di costante $k$ e lunghezza a riposo $\ell_0$, con le forze $-\,F\,\hat{\imath}$ applicata in $P_1$ e $F\,\hat{\imath}$ applicata in $P_2$. Le due forze hanno la stessa retta d'azione e sono opposte, quindi $\vec{R}^{(e)} = \vec{0}$ e $\vec{M}_O^{(e)} = \vec{0}$ *qualunque* sia la distanza $d$ fra i due punti. L'equilibrio si ha però solo per
$$
d = \ell_0 + \frac{F}{k} ,
$$
cioè quando la forza elastica su ciascun punto equilibra la forza applicata a quel punto.
:::

:::richiamo{titolo="Unicità della soluzione del problema di Cauchy"}
Sia $\dot{\vec{y}} = \vec{g}(t, \vec{y})$ un sistema di equazioni differenziali con $\vec{g}$ continua e localmente lipschitziana rispetto a $\vec{y}$. Allora per ogni dato iniziale $\vec{y}(t_0) = \vec{y}_0$ esiste una sola soluzione in un intorno di $t_0$. Si rimanda all'argomento sulle equazioni differenziali di Analisi 1.
:::

::::teorema{#sufficienza-corpo-rigido titolo="Le equazioni cardinali sono sufficienti per il corpo rigido"}
Sia $C$ un corpo rigido e sia data una sua configurazione compatibile con i vincoli. Allora la configurazione è di equilibrio se e solo se in essa
$$
\begin{cases}
\vec{R}^{(e)} = \vec{0} \\[4pt]
\vec{M}_G^{(e)} = \vec{0}
\end{cases}
$$
dove $G$ è il centro di massa. Per un corpo rigido nel piano si ottengono così tre equazioni scalari, e per un corpo rigido libero nello spazio sei, tante quante sono i gradi di libertà. Il teorema è la ragione per cui negli esercizi si ragiona sempre su corpi rigidi e le equazioni cardinali bastano a risolverli.

:::dimostrazione
La necessità è il teorema sulle equazioni cardinali della statica. Per la sufficienza si usano le equazioni cardinali della dinamica, enunciate nell'argomento sulla dinamica dei sistemi, secondo le quali per ogni sistema materiale valgono
$$
M\,\vec{a}_G = \vec{R}^{(e)} ,
\qquad
\frac{d\vec{K}_G}{dt} = \vec{M}_G^{(e)} ,
$$
e per un corpo rigido $\vec{K}_G = \mathbb{I}_G\,\vec{\omega}$. Il moto rigido è individuato dalla posizione di $G$ e dall'orientamento della terna solidale, cioè da sei funzioni del tempo, e le due equazioni precedenti sono sei equazioni differenziali del secondo ordine in tali funzioni, risolubili rispetto alle derivate seconde perché la massa $M$ è positiva e il tensore d'inerzia $\mathbb{I}_G$ è invertibile.

Si consideri ora la quiete nella configurazione assegnata, cioè $\vec{v}_G \equiv \vec{0}$, $\vec{\omega} \equiv \vec{0}$ e configurazione costante. Questa funzione del tempo soddisfa le sei equazioni, poiché il primo membro è identicamente nullo e il secondo è nullo per ipotesi, dato che nella configurazione assegnata risultante e momento risultante delle forze esterne sono nulli. Dato che il problema di Cauchy con dato iniziale di quiete ha una sola soluzione, la quiete è *la* soluzione del moto, perciò la configurazione è di equilibrio.
:::
::::

:::osservazione{#corpo-rigido-vincolato titolo="Corpo rigido vincolato: incognite ed equazioni"}
Un corpo rigido piano vincolato ha $n$ gradi di libertà residui e un certo numero $r$ di componenti di reazione incognite. Le equazioni cardinali danno tre equazioni scalari, quindi il conteggio è $3 = n + r$ quando il problema è ben posto. Tre casi si presentano negli esercizi:

- $n = 0$ e $r = 3$: la configurazione è assegnata e le tre equazioni determinano le tre reazioni, come per l'asta con una cerniera e un carrello.
- $n = 1$ e $r = 2$: una coordinata lagrangiana è incognita; una delle tre equazioni la determina e le altre due danno le reazioni, come per l'asta incernierata in un estremo.
- $r > 3$: le reazioni non sono determinate dalle sole equazioni cardinali, e il corpo si dice iperstaticamente vincolato.
:::

## Corpi rigidi vincolati e diagramma di corpo libero

:::definizione{#diagramma-di-corpo-libero titolo="Diagramma di corpo libero"}
Il **diagramma di corpo libero** di un corpo è il disegno del corpo isolato dai vincoli e dagli altri corpi, con tutte le forze attive e tutte le reazioni che i vincoli e i corpi rimossi esercitano su di esso, ciascuna disegnata in un verso scelto a priori. Le equazioni cardinali si scrivono leggendo il diagramma, e un valore negativo di una componente significa che il verso vero è opposto a quello disegnato.

::struttura{nodi="A,0,0;B,5,0" aste="A-B" vincoli="A,cerniera;B,carrello" forze="5 0,0,-1.2,F" quote="A,B,ℓ" titolo="Asta con cerniera in $A$ e carrello in $B$, caricata dalla forza $\vec{F}$ nell'estremo"}

::struttura{nodi="A,0,0;B,5,0" aste="A-B" reazioni="A,1.2,0,Φ_Ax;A,0,1.2,Φ_Ay;B,0,1.2,Φ_B" forze="2.5 0,0,-1.2,mg;5 0,0,-1.2,F" quote="A,B,ℓ" titolo="Diagramma di corpo libero: tre componenti di reazione incognite e tre equazioni cardinali"}
:::

:::richiamo{titolo="Reazioni esplicate dai vincoli piani"}
Nel piano i vincoli usati negli esercizi esplicano le reazioni seguenti: la cerniera fissa in $A$ una forza di componenti $\Phi_{Ax}$ e $\Phi_{Ay}$ applicata in $A$; il carrello e il manicotto su guida liscia una forza ortogonale alla guida; l'incastro una forza di due componenti e una coppia $\Gamma_A$; il pendolo una forza diretta come la biella; l'appoggio unilaterale liscio una forza normale di verso assegnato. Si rimanda all'argomento sui vincoli, i gradi di libertà e le coordinate lagrangiane.
:::

## Molle e fili

:::definizione{#forza-elastica titolo="Molla ideale e forza elastica"}
Una **molla ideale** di costante elastica $k$ e lunghezza a riposo $\ell_0$, che collega i punti $A$ e $B$, esercita su $B$ la forza
$$
\vec{F}_B = -\,k\,\big(|B - A| - \ell_0\big)\,\frac{B - A}{|B - A|}
$$
e su $A$ la forza opposta. La forza è diretta lungo la congiungente, è attrattiva quando la molla è allungata e repulsiva quando è compressa; la sua intensità è $k$ per la variazione di lunghezza. Nel caso $\ell_0 = 0$, ricorrente negli esercizi perché semplifica i conti, la forza su $B$ diventa $\vec{F}_B = -\,k\,(B - A)$, cioè è proporzionale al vettore che congiunge i due punti. Il lavoro e il potenziale della forza elastica si trattano nell'argomento sui lavori virtuali, il potenziale e l'equilibrio.

::struttura{nodi="A,0,0;B,5,0" aste="A-B" vincoli="A,cerniera" linee="5,0 5.3,0.35 5.9,-0.35 6.5,0.35 7.1,-0.35 7.4,0 8,0" punti="8,0,D" forze="B,0.9,0,F_B" etichette="6.3,0.75,k" titolo="Molla ideale fra l'estremo $B$ dell'asta e il punto fisso $D$: la forza su $B$ è diretta lungo $BD$ e vale $k$ per l'allungamento"}
:::

:::definizione{#filo-inestensibile titolo="Filo inestensibile e tensione"}
Un **filo ideale** è inestensibile, privo di massa e perfettamente flessibile. Esercita sui corpi a cui è attaccato due forze dirette lungo il filo, di intensità uguale $T$, detta **tensione**, orientate da ciascun estremo verso l'altro; la tensione soddisfa $T \ge 0$, perché un filo tira e non spinge. Una **carrucola ideale**, priva di massa e con il perno liscio, cambia la direzione del filo lasciandone invariata la tensione.

Il filo è quindi un vincolo unilaterale, perciò la condizione $T \ge 0$ va verificata alla fine del calcolo; un valore negativo significa che nella configurazione considerata il filo si allenta e l'equilibrio va riesaminato senza di esso. Un punto di massa $m$ appeso a un filo verticale fissato al soffitto è in equilibrio con $T = m g$, e la stessa tensione agisce sul soffitto, diretta verso il basso.
:::

## Sistemi di più corpi rigidi

:::teorema{#equazioni-cardinali-per-sottosistemi titolo="Equazioni cardinali per ogni sottosistema"}
Sia un sistema materiale in equilibrio e sia $S$ un qualunque sottoinsieme dei suoi punti. Allora $S$ è in equilibrio, perciò le equazioni cardinali valgono per $S$ con le forze esterne *a* $S$, fra le quali compaiono le azioni che i punti rimanenti esercitano su $S$. Il risultato segue dal teorema sulle equazioni cardinali applicato a $S$, dato che ogni punto di $S$ è in quiete.

Da qui nasce il metodo di calcolo dei sistemi di più corpi, nel quale si scrivono prima le equazioni cardinali del sistema complessivo, dove le azioni interne non compaiono, e poi quelle di un singolo corpo, dove le azioni dei corpi vicini compaiono.
:::

:::definizione{#smontaggio titolo="Smontaggio del sistema"}
**Smontare** un sistema di corpi rigidi significa scrivere il diagramma di corpo libero di ciascun corpo, sostituendo ogni collegamento interno con le reazioni che i due corpi si scambiano. Per un sistema piano di $c$ corpi rigidi si ottengono $3c$ equazioni scalari. Le incognite sono le componenti delle reazioni esterne, le componenti delle reazioni interne e le coordinate lagrangiane della configurazione, e il problema è ben posto quando il loro numero è $3c$.

::struttura{nodi="A,0,0;B,2.5,2;C,5,0" aste="A-B;B-C" vincoli="A,cerniera;C,cerniera" cerniere="B" forze="1.25 1,0,-1,mg;3.75 1,0,-1,mg" quote="A,C,2ℓcosϑ,-1.3" titolo="Due aste incernierate fra loro in $B$ e incernierate a terra in $A$ e in $C$: il sistema ha sei incognite di reazione e sei equazioni"}

::struttura{nodi="A,0,0;B,2.5,2" aste="A-B" vincoli="A,cerniera" forze="1.25 1,0,-1,mg" reazioni="B,-0.9,0,X_B;B,0,-0.9,Y_B" titolo="Diagramma di corpo libero dell'asta $AB$: in $B$ agisce l'azione dell'asta $BC$, di componenti $-X_B$ e $-Y_B$"}

::struttura{nodi="B,2.5,2;C,5,0" aste="B-C" vincoli="C,cerniera" forze="3.75 1,0,-1,mg" reazioni="B,0.9,0,X_B;B,0,0.9,Y_B" titolo="Diagramma di corpo libero dell'asta $BC$: in $B$ agisce l'azione dell'asta $AB$, di componenti $X_B$ e $Y_B$"}
:::

:::osservazione{#azione-e-reazione-interna titolo="Azione e reazione in una cerniera interna"}
In una cerniera interna in $B$ fra due corpi $C_1$ e $C_2$, la forza che $C_1$ esercita su $C_2$ ha componenti $X_B$ e $Y_B$ applicate in $B$, e la forza che $C_2$ esercita su $C_1$ ha componenti $-X_B$ e $-Y_B$ applicate nello stesso punto. La cerniera interna trasmette una forza e non una coppia, poiché i due corpi possono ruotare l'uno rispetto all'altro.

Nei diagrammi di corpo libero conviene disegnare le due forze in versi opposti e usare gli stessi simboli, così che il segno trovato risolvendo le equazioni di un corpo valga automaticamente anche per l'altro.
:::

## Equilibrio di un sistema a un grado di libertà

:::teorema{#equilibrio-un-grado-di-liberta titolo="Equazione di equilibrio di un sistema a un grado di libertà"}
Sia un sistema piano di corpi rigidi con un grado di libertà, con coordinata lagrangiana $q$, e con vincoli lisci. Allora fra le $3c$ equazioni cardinali dei corpi che lo compongono se ne può scegliere una in cui non compare alcuna reazione vincolare incognita, e tale equazione ha la forma
$$
h(q) = 0 ;
$$
le sue soluzioni compatibili con i vincoli sono le configurazioni di equilibrio, e le equazioni rimanenti determinano le reazioni.

L'equazione si ottiene scegliendo il polo nel punto in cui si incontrano le rette d'azione delle reazioni, oppure proiettando la prima equazione cardinale sulla direzione ortogonale alle reazioni. Per un'asta incernierata in un estremo l'equazione è quella dei momenti rispetto alla cerniera; per un disco che rotola senza strisciare su una guida è quella dei momenti rispetto al punto di contatto, dove passa la retta d'azione della reazione del contatto.
:::

:::esempio{titolo="Asta incernierata con una forza orizzontale"}
Un'asta omogenea $OA$ di massa $m$ e lunghezza $\ell$ è incernierata in $O$ in un piano verticale e all'estremo $A$ agisce la forza orizzontale $\vec{F} = F\,\hat{\imath}$, con $F > 0$. Sia $\vartheta$ l'angolo che $OA$ forma con la verticale discendente, misurato in verso antiorario, cosicché
$$
A - O = \ell\sin\vartheta\,\hat{\imath} - \ell\cos\vartheta\,\hat{\jmath} ,
\qquad
G - O = \frac{\ell}{2}\sin\vartheta\,\hat{\imath} - \frac{\ell}{2}\cos\vartheta\,\hat{\jmath} .
$$
L'equazione dei momenti rispetto a $O$ non contiene la reazione della cerniera, poiché la sua retta d'azione passa per $O$, e dà
$$
-\,\frac{mg\,\ell}{2}\sin\vartheta + F\,\ell\cos\vartheta = 0 ,
\qquad\text{quindi}\qquad
\tan\vartheta = \frac{2F}{mg} .
$$
Le configurazioni di equilibrio sono due, $\vartheta_1 = \arctan\dfrac{2F}{mg}$ e $\vartheta_2 = \vartheta_1 + \pi$. La prima equazione cardinale dà poi $\vec{\Phi}_O = -\,F\,\hat{\imath} + mg\,\hat{\jmath}$, la stessa in entrambe le configurazioni.

::struttura{nodi="O,0,0;A,2.1,-2.5" aste="O-A" vincoli="O,cerniera,90" tratteggi="0,0 0,-3.3" forze="A,1,0,F;1.05 -1.25,0,-1,mg" etichette="0.45,-2.6,ϑ" titolo="Asta incernierata in $O$: all'equilibrio $\tan\vartheta = \dfrac{2F}{mg}$"}
:::

:::attenzione
Una soluzione dell'equazione di equilibrio va accettata solo se è compatibile con i vincoli. Per un punto appoggiato all'interno di una guida circolare liscia limitata all'arco $|\vartheta| \le \dfrac{\pi}{3}$, con una forza orizzontale $F$ e il peso $mg$, l'equazione dà $\tan\vartheta = \dfrac{F}{mg}$; se $F > \sqrt{3}\,mg$ la soluzione cade fuori dall'arco e il punto non ha configurazioni di equilibrio sulla guida.
:::

## Verifica del risultato

:::osservazione{#verifica-equazione-indipendente titolo="Verifica con un'equazione indipendente"}
Dopo aver calcolato reazioni e configurazioni conviene sostituirle in un'equazione che non è stata usata per ricavarle. Tre controlli sono di uso corrente:

- l'equazione dei momenti rispetto a un secondo polo, scritta con le reazioni trovate, deve dare $0$;
- le equazioni cardinali di un corpo del sistema diverso da quello usato devono essere soddisfatte dalle stesse reazioni interne;
- un caso limite deve riprodurre un risultato noto, come accade per $k \to 0$, dove la molla non agisce e l'asta incernierata torna verticale, e per $f \to 0$, dove la condizione di equilibrio con attrito diventa quella del vincolo liscio.

La verifica con il secondo polo è una vera verifica quando nel calcolo compaiono reazioni incognite, perché l'equazione dei momenti rispetto al nuovo polo le contiene con bracci diversi. In un sistema a un grado di libertà senza reazioni incognite nell'equazione di configurazione, invece, il cambiamento di polo riproduce la stessa equazione, e allora si ricorre a un caso limite o al confronto fra due sottosistemi.
:::
