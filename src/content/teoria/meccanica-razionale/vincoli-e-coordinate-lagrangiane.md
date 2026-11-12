---
titolo: Vincoli, gradi di libertà e coordinate lagrangiane
sommario: Come si scrivono le equazioni dei vincoli di un sistema meccanico, come si contano i suoi gradi di libertà e si scelgono le coordinate lagrangiane, che differenza c'è fra spostamenti possibili e spostamenti virtuali e quali reazioni esplicano i vincoli più comuni.
---

## Configurazioni e vincoli

:::definizione{#configurazione titolo="Configurazione di un sistema"}
Sia dato un sistema di $N$ punti materiali $P_1, \dots, P_N$. La **configurazione** del sistema a un dato istante è l'insieme ordinato delle posizioni dei suoi punti, individuato nel riferimento fisso $(O; x, y, z)$ dalle $3N$ coordinate cartesiane
$$
x_1,\, y_1,\, z_1,\; \dots,\; x_N,\, y_N,\, z_N .
$$
Se i punti sono liberi, ogni punto di $\mathbb{R}^{3N}$ è una configurazione del sistema. Un corpo rigido è un continuo di punti, eppure si individua con un numero finito di parametri, poiché le distanze mutue dei suoi punti sono assegnate.
:::

:::definizione{#vincolo titolo="Vincolo ed equazione di vincolo"}
Un **vincolo** è una limitazione, imposta a priori, alle configurazioni che il sistema può assumere oppure alle velocità con cui i suoi punti possono muoversi. Una limitazione sulle configurazioni si scrive come **equazione di vincolo**
$$
f(P_1, \dots, P_N, t) = 0
$$
oppure come disequazione $f(P_1, \dots, P_N, t) \geq 0$, dove $f$ è una funzione regolare delle coordinate dei punti e, eventualmente, del tempo. Una limitazione sulle velocità si scrive invece come relazione fra le coordinate e le loro derivate.

Un punto obbligato a stare sulla circonferenza di centro $O$ e raggio $R$ del piano $Oxy$ soddisfa l'equazione $x^2 + y^2 - R^2 = 0$, e due punti collegati da un'asta rigida di lunghezza $\ell$ soddisfano $|P_2 - P_1|^2 - \ell^2 = 0$. Un punto appeso a un filo inestensibile di lunghezza $\ell$ fissato in $O$ soddisfa invece la disequazione $\ell^2 - |P - O|^2 \geq 0$, perché il filo impedisce di allontanarsi da $O$ oltre $\ell$ e lascia libero il punto di avvicinarsi.
:::

## Classificazione dei vincoli

:::definizione{#vincolo-olonomo titolo="Vincolo olonomo e vincolo anolonomo"}
Un vincolo è **olonomo** quando si esprime con una relazione fra le sole posizioni dei punti e il tempo, cioè con un'equazione o una disequazione della forma $f(P_1, \dots, P_N, t) = 0$ oppure $f(P_1, \dots, P_N, t) \geq 0$. Un vincolo sulle velocità è **anolonomo** quando non è riducibile a una relazione fra le sole posizioni, cioè quando non esiste alcuna funzione delle coordinate e del tempo che si conservi lungo tutti gli atti di moto consentiti.

La distinzione sta nelle configurazioni raggiungibili. Un vincolo olonomo riduce l'insieme delle configurazioni ammissibili, mentre un vincolo anolonomo lascia raggiungibili tutte le configurazioni e limita soltanto il modo di raggiungerle; le ruote di un'automobile impediscono lo spostamento laterale istantaneo, eppure ogni posizione del parcheggio si raggiunge con le manovre opportune. Un vincolo sulle velocità che si integra, come il puro rotolamento di un disco su una retta, è a tutti gli effetti un vincolo olonomo. I sistemi degli argomenti successivi, dalle equazioni cardinali alle equazioni di Lagrange, si suppongono olonomi.
:::

:::definizione{#vincolo-bilaterale titolo="Vincolo bilaterale e vincolo unilaterale"}
Un vincolo è **bilaterale** quando è espresso da un'equazione $f = 0$, e **unilaterale** quando è espresso da una disequazione $f \geq 0$. Una cerniera, un'asta rigida e un manicotto sono vincoli bilaterali; un appoggio, un filo inestensibile e un arresto sono vincoli unilaterali.

Con un vincolo unilaterale le configurazioni si distinguono in due famiglie. Nelle configurazioni **ordinarie** vale la disuguaglianza stretta $f > 0$, e allora il vincolo non esercita alcuna forza; nelle configurazioni **di confine** vale $f = 0$, e allora il vincolo agisce come il corrispondente vincolo bilaterale. Un punto appoggiato su un piano orizzontale e soggetto al proprio peso resta sul confine $y = 0$, dove il piano lo sostiene.
:::

:::definizione{#vincolo-fisso titolo="Vincolo fisso e vincolo mobile"}
Un vincolo è **fisso**, o indipendente dal tempo, quando la sua equazione non contiene esplicitamente $t$, cioè quando $\dfrac{\partial f}{\partial t} = 0$; è **mobile** quando $t$ compare esplicitamente. Una guida rettilinea immobile è un vincolo fisso; la stessa guida che ruota attorno a $O$ con velocità angolare costante $\omega$ assegnata è un vincolo mobile, di equazione
$$
x \sin(\omega t) - y \cos(\omega t) = 0 .
$$
La distinzione conta nella Meccanica lagrangiana: con vincoli fissi l'energia cinetica è una forma quadratica nelle velocità generalizzate e l'energia meccanica si conserva sotto sollecitazione conservativa, mentre con vincoli mobili compaiono termini di primo grado e di grado zero, come si vede nell'argomento sulle equazioni di Lagrange.
:::

:::definizione{#vincolo-liscio titolo="Vincolo liscio e vincolo scabro"}
Un vincolo è **liscio**, o privo di attrito, quando la forza che esercita sul sistema è ortogonale a ogni spostamento consentito dal vincolo stesso; è **scabro** quando ha anche una componente lungo gli spostamenti consentiti, cioè quando esercita attrito. Un anello che scorre senza attrito su una guida riceve dalla guida una forza ortogonale alla guida; un blocco appoggiato su un pavimento scabro riceve dal pavimento anche una forza tangenziale, che si oppone allo strisciamento.

Salvo indicazione contraria i vincoli si suppongono lisci, poiché in quel caso la forza del vincolo ha direzione nota e una sola incognita scalare.
:::

## Gradi di libertà e coordinate lagrangiane

:::richiamo{titolo="Teorema delle funzioni implicite"}
Sia $F : A \subseteq \mathbb{R}^{n+m} \to \mathbb{R}^m$ di classe $C^1$ sull'aperto $A$, sia $F(u_0, w_0) = 0$ con $u_0 \in \mathbb{R}^n$ e $w_0 \in \mathbb{R}^m$, e sia invertibile la matrice jacobiana $\dfrac{\partial F}{\partial w}(u_0, w_0)$, di ordine $m$. Allora esistono un intorno $U$ di $u_0$, un intorno $W$ di $w_0$ e un'unica funzione $g : U \to W$ di classe $C^1$ tale che, per $(u, w) \in U \times W$, l'uguaglianza $F(u, w) = 0$ vale se e solo se $w = g(u)$. Si rimanda all'argomento sulle funzioni implicite di Analisi 2.
:::

::::teorema{#gradi-di-liberta titolo="Gradi di libertà di un sistema olonomo"}
Sia dato un sistema di $N$ punti materiali soggetto a $m$ vincoli olonomi bilaterali
$$
f_\alpha(x_1, y_1, z_1, \dots, x_N, y_N, z_N, t) = 0 ,
\qquad \alpha = 1, \dots, m ,
$$
con le $f_\alpha$ di classe $C^1$ e con la matrice jacobiana $\Big( \dfrac{\partial f_\alpha}{\partial x_i} \Big)$, di $m$ righe e $3N$ colonne, di rango $m$ in una configurazione $\mathcal{C}_0$ ammissibile all'istante $t_0$. Posto
$$
n = 3N - m ,
$$
esistono allora un intorno di $\mathcal{C}_0$ e $n$ parametri $q_1, \dots, q_n$ tali che le configurazioni ammissibili di quell'intorno si scrivono
$$
P_i = P_i(q_1, \dots, q_n, t) ,
\qquad i = 1, \dots, N ,
$$
con corrispondenza biunivoca e con funzioni di classe $C^1$. Il numero $n$ è il numero di **gradi di libertà** del sistema.

Il numero di parametri da assegnare per fissare la configurazione si ottiene quindi sottraendo al numero delle coordinate il numero dei vincoli indipendenti. Due punti del piano collegati da un'asta rigida hanno $N = 2$, $m = 1$ e perciò $n = 4 - 1 = 3$ gradi di libertà, che sono le due coordinate di un estremo e l'angolo dell'asta.

:::dimostrazione
L'ipotesi sul rango dice che la matrice jacobiana possiede $m$ colonne linearmente indipendenti nella configurazione $\mathcal{C}_0$. Si indichino con $w = (w_1, \dots, w_m)$ le $m$ coordinate corrispondenti a quelle colonne e con $u = (u_1, \dots, u_n)$ le rimanenti $n = 3N - m$. La matrice $\dfrac{\partial f}{\partial w}$ è quindi invertibile in $\mathcal{C}_0$, perciò il teorema delle funzioni implicite si applica al sistema $f(u, w, t) = 0$ e assicura l'esistenza di un intorno di $\mathcal{C}_0$ e di una funzione $g$ di classe $C^1$ tale che in quell'intorno le configurazioni ammissibili sono tutte e sole quelle con $w = g(u, t)$. Le $n$ coordinate $u$ restano libere, dato che a ogni loro valore nell'intorno corrisponde una configurazione ammissibile e una sola; si pone allora $q_h = u_h$ per $h = 1, \dots, n$ e si ottiene la rappresentazione dell'enunciato, perché le coordinate di ciascun punto sono o una delle $u$ o una componente di $g(u, t)$.
:::
::::

:::definizione{#coordinate-lagrangiane titolo="Coordinate lagrangiane"}
I parametri $q_1, \dots, q_n$ che individuano la configurazione di un sistema olonomo a $n$ gradi di libertà si chiamano **coordinate lagrangiane**, o coordinate libere, e le loro derivate $\dot{q}_1, \dots, \dot{q}_n$ si chiamano **velocità generalizzate**. Le posizioni dei punti del sistema sono funzioni note delle coordinate lagrangiane e del tempo, $P_i = P_i(q, t)$, e le velocità si ottengono derivando:
$$
\vec{v}_i = \sum_{h=1}^{n} \frac{\partial P_i}{\partial q_h}\,\dot{q}_h + \frac{\partial P_i}{\partial t} .
$$
La scelta delle coordinate lagrangiane non è unica, e si fa in modo che le posizioni dei punti abbiano l'espressione più semplice: negli esercizi piani si usano gli angoli che le aste formano con una direzione fissa, le ascisse dei punti che scorrono su guide rettilinee e gli angoli di rotazione dei dischi. Con queste coordinate si scrivono l'energia cinetica e il potenziale, che sono i dati di partenza delle equazioni di Lagrange.
:::

:::osservazione{#gdl-corpo-rigido titolo="Gradi di libertà dei corpi rigidi e dei sistemi articolati"}
Un corpo rigido libero ha $6$ gradi di libertà nello spazio, che sono le tre coordinate di un suo punto e i tre angoli di Eulero, e ne ha $3$ nel piano, che sono le due coordinate di un suo punto e l'angolo di rotazione. Un'asta pensata come segmento ha $5$ gradi di libertà nello spazio, perché la rotazione attorno al proprio asse non cambia la posizione dei suoi punti.

Per un sistema piano formato da $c$ corpi rigidi si parte da $3c$ e si sottraggono le condizioni scalari imposte dai vincoli:
$$
\begin{aligned}
&\text{cerniera a terra: } 2 , \qquad \text{cerniera interna fra due corpi: } 2 , \\[4pt]
&\text{carrello: } 1 , \qquad \text{incastro a terra: } 3 , \\[4pt]
&\text{manicotto su guida fissa: } 2 , \qquad \text{disco che rotola senza strisciare: } 2 .
\end{aligned}
$$
Le due condizioni del disco che rotola sono il contatto con la guida e il non strisciamento. Due aste incernierate fra loro, con una cerniera a terra al primo estremo e un carrello al secondo, hanno $3 \cdot 2 - (2 + 2 + 1) = 1$ grado di libertà. Il conto vale quando i vincoli sono indipendenti, cioè quando la matrice jacobiana ha rango pari al loro numero; se non lo sono, come per due carrelli che impediscono lo stesso spostamento, il numero di gradi di libertà è maggiore di quello dato dal conto.
:::

## Sistemi piani notevoli

:::esempio{#punto-su-una-curva titolo="Punto su una curva e su una superficie"}
Un punto vincolato a una curva liscia e fissa del piano ha un grado di libertà, e come coordinata lagrangiana si prende un parametro della curva. Per la parabola di equazione $y = \dfrac{x^2}{2a}$ si prende $q = x$, quindi
$$
P - O = x\,\hat{\imath} + \frac{x^2}{2a}\,\hat{\jmath} ,
\qquad
\vec{v}_P = \dot{x}\,\Big( \hat{\imath} + \frac{x}{a}\,\hat{\jmath} \Big) .
$$
La velocità è parallela al vettore $\hat{\imath} + \dfrac{x}{a}\,\hat{\jmath}$, che è tangente alla curva; per un vincolo liscio la reazione è allora parallela a $-\dfrac{x}{a}\,\hat{\imath} + \hat{\jmath}$, che è ortogonale alla tangente.

::struttura{linee="-3.5,3.06 -3,2.25 -2.5,1.56 -2,1 -1.5,0.56 -1,0.25 -0.5,0.06 0,0 0.5,0.06 1,0.25 1.5,0.56 2,1 2.5,1.56 3,2.25 3.5,3.06" punti="2,1,P,pieno" reazioni="2 1,-0.85,0.85,Φ" frecce="2,1,2.95,1.95,δP" titolo="Punto su una guida liscia: lo spostamento virtuale $\delta P$ è tangente alla guida, la reazione $\vec{\Phi}$ è ortogonale"}

Un punto vincolato a una superficie fissa ha due gradi di libertà. Sulla superficie sferica di centro $O$ e raggio $R$ si prendono la colatitudine $\vartheta$ e la longitudine $\varphi$, quindi
$$
P - O = R\,\big( \sin\vartheta \cos\varphi\,\hat{\imath} + \sin\vartheta \sin\varphi\,\hat{\jmath} + \cos\vartheta\,\hat{k} \big) ,
$$
e il modulo della velocità risulta $|\vec{v}_P| = R\,\sqrt{\dot{\vartheta}^2 + \dot{\varphi}^2 \sin^2\vartheta}$.
:::

:::esempio{#asta-su-due-guide titolo="Asta con gli estremi su due guide ortogonali"}
Un'asta $AB$ di lunghezza $\ell$ ha l'estremo $A$ su una guida verticale e l'estremo $B$ su una guida orizzontale, e le due guide si incontrano in $O$. L'asta è un corpo rigido nel piano, quindi parte da tre gradi di libertà; i due manicotti impongono $x_A = 0$ e $y_B = 0$, perciò resta un grado di libertà. Come coordinata lagrangiana si prende l'angolo $\vartheta$ che l'asta forma con la guida orizzontale, e allora
$$
A - O = \ell \sin\vartheta\,\hat{\jmath} ,
\qquad
B - O = \ell \cos\vartheta\,\hat{\imath} ,
\qquad
G - O = \frac{\ell}{2}\,\big( \cos\vartheta\,\hat{\imath} + \sin\vartheta\,\hat{\jmath} \big) ,
$$
dove $G$ è il punto medio dell'asta. Poiché $|G - O| = \dfrac{\ell}{2}$ per ogni $\vartheta$, il punto medio percorre la circonferenza di centro $O$ e raggio $\dfrac{\ell}{2}$.

::struttura{nodi="A,0,3;B,4,0" aste="A-B" vincoli="A,carrello,180;B,carrello,270" linee="0,-0.4 0,4.2;-0.4,0 5,0" punti="2,1.5,G,baricentro" etichette="3.45,0.28,ϑ" quote="A,B,ℓ,-0.9" titolo="Asta con gli estremi su due guide ortogonali: un grado di libertà, coordinata lagrangiana $\vartheta$"}
:::

:::esempio{#biella-manovella titolo="Biella-manovella"}
La manovella $OA$, di lunghezza $r$, ruota attorno alla cerniera fissa $O$; la biella $AB$, di lunghezza $\ell > r$, è incernierata in $A$ all'altro estremo e ha l'estremo $B$ obbligato a scorrere sulla guida orizzontale per $O$. I due corpi rigidi danno $3 \cdot 2 = 6$, e i vincoli impongono $2 + 2 + 1 = 5$ condizioni, perciò il sistema ha un grado di libertà. Si prende come coordinata lagrangiana l'angolo $\vartheta$ della manovella e si ricava la posizione del piede di biella dall'equazione $|B - A| = \ell$:
$$
x_B = r \cos\vartheta + \sqrt{\ell^2 - r^2 \sin^2\vartheta} .
$$
L'angolo $\varphi$ della biella con la guida non è una coordinata indipendente, poiché la condizione $y_A = y_B + \ell \sin\varphi$ con $y_B = 0$ dà $\sin\varphi = \dfrac{r}{\ell}\,\sin\vartheta$. Con $\ell = 2r$ si ottiene $x_B = 3r$ per $\vartheta = 0$ e $x_B = r$ per $\vartheta = \pi$, quindi la corsa del piede di biella vale $2r$.

::struttura{nodi="O,0,0;A,0.75,1.3;B,3.45,0" aste="O-A;A-B" cerniere="A" vincoli="O,cerniera;B,carrello,270" linee="-0.6,0 4.4,0" quote="A,B,ℓ,-0.7" etichette="0.2,0.85,r;0.62,0.3,ϑ;3.05,0.3,φ" titolo="Biella-manovella: un grado di libertà, coordinata lagrangiana $\vartheta$"}
:::

:::esempio{#pendolo-doppio titolo="Pendolo doppio"}
Due aste $OA$ e $AB$, di lunghezze $\ell_1$ e $\ell_2$, sono incernierate fra loro in $A$, e l'asta $OA$ è incernierata al punto fisso $O$. Il conto dà $3 \cdot 2 - (2 + 2) = 2$ gradi di libertà. Si prendono come coordinate lagrangiane gli angoli $\vartheta_1$ e $\vartheta_2$ che le due aste formano con la verticale discendente, perciò
$$
A - O = \ell_1\,\big( \sin\vartheta_1\,\hat{\imath} - \cos\vartheta_1\,\hat{\jmath} \big) ,
\qquad
B - A = \ell_2\,\big( \sin\vartheta_2\,\hat{\imath} - \cos\vartheta_2\,\hat{\jmath} \big) .
$$
I due angoli sono indipendenti, dato che ogni coppia di valori individua una configurazione ammissibile. Il pendolo doppio è l'esempio standard di sistema a due gradi di libertà, e si ritrova nell'argomento sulle equazioni di Lagrange e in quello sulle piccole oscillazioni.

::struttura{nodi="O,0,0;A,1,-1.73;B,2.03,-2.96" aste="O-A;A-B" cerniere="A" vincoli="O,cerniera,90" tratteggi="0,0 0,-2.3;1,-1.73 1,-3.3" etichette="0.32,-1.05,ϑ_1;1.3,-2.6,ϑ_2" titolo="Pendolo doppio: due gradi di libertà, coordinate lagrangiane $\vartheta_1$ e $\vartheta_2$"}
:::

## Puro rotolamento e vincoli anolonomi

:::richiamo{titolo="Formula fondamentale della cinematica rigida"}
Sia un corpo rigido in moto e siano $\Omega$ e $P$ due suoi punti. Allora esiste un vettore $\vec{\omega}$, la velocità angolare, dipendente solo dall'istante e non dai due punti, tale che
$$
\vec{v}_P = \vec{v}_\Omega + \vec{\omega} \wedge (P - \Omega) .
$$
Nel moto rigido piano nel piano $Oxy$ vale $\vec{\omega} = \dot{\vartheta}\,\hat{k}$, dove $\vartheta$ è l'angolo di rotazione del corpo, positivo in verso antiorario. Si rimanda all'argomento sulla cinematica del corpo rigido.
:::

::::teorema{#puro-rotolamento titolo="Puro rotolamento di un disco su una retta"}
Un disco di raggio $R$ si muove nel piano $Oxy$ mantenendosi a contatto con la retta fissa $y = 0$; il suo centro ha quindi coordinate $C = (x_C, R)$ e la sua rotazione è misurata dall'angolo $\vartheta$, positivo in verso antiorario. La condizione di **puro rotolamento**, cioè la condizione che il punto del disco a contatto con la retta abbia velocità nulla, si scrive
$$
\dot{x}_C + R\,\dot{\vartheta} = 0 ,
$$
ed è equivalente al vincolo olonomo
$$
x_C + R\,\vartheta = \text{costante} .
$$
Il disco che rotola senza strisciare su una retta ha perciò un grado di libertà, e si prende come coordinata lagrangiana $x_C$ oppure $\vartheta$. Il segno dice che a una rotazione antioraria corrisponde un avanzamento verso le ascisse negative, in accordo con la convenzione sui versi positivi. Se il disco rotola verso destra, $\dot{x}_C > 0$, allora $\dot{\vartheta} < 0$ e il disco gira in verso orario.

::struttura{cerchi="3,1.2,1.2" linee="-0.3,0 6,0" punti="3,1.2,C,baricentro;3,0,H,centro" coppie="3 1.2,1,ϑ" tratteggi="0,-1.3 0,0.5" quote="0 0,3 0,x_C,0.9" etichette="3.3,0.6,R;-0.3,0.3,O" riferimento=0 titolo="Disco che rotola senza strisciare: il punto di contatto $H$ ha velocità nulla, quindi $\dot{x}_C = -R\,\dot{\vartheta}$"}

:::dimostrazione
Il punto del disco a contatto con la retta è $H = C - R\,\hat{\jmath}$. Il centro si muove su una parallela alla retta, perciò $\vec{v}_C = \dot{x}_C\,\hat{\imath}$. Per la formula fondamentale della cinematica rigida, applicata ai punti $C$ e $H$ del disco,
$$
\vec{v}_H = \vec{v}_C + \dot{\vartheta}\,\hat{k} \wedge (H - C) = \dot{x}_C\,\hat{\imath} + \dot{\vartheta}\,\hat{k} \wedge (-R\,\hat{\jmath}) = \big( \dot{x}_C + R\,\dot{\vartheta} \big)\,\hat{\imath} ,
$$
dove si è usato $\hat{k} \wedge \hat{\jmath} = -\hat{\imath}$. La condizione $\vec{v}_H = \vec{0}$ è quindi equivalente a $\dot{x}_C + R\,\dot{\vartheta} = 0$. Il primo membro è la derivata della funzione $x_C + R\,\vartheta$, perciò la condizione vale per ogni istante se e solo se quella funzione è costante lungo il moto, cioè se e solo se è soddisfatto il vincolo olonomo dell'enunciato.
:::
::::

::::teorema{#slitta-anolonoma titolo="Vincolo anolonomo della slitta"}
Un'asta $AB$ si muove nel piano $Oxy$ e il suo estremo $A$ è obbligato ad avere velocità parallela all'asta, come la lama di un pattino che non striscia di fianco. Posto $A = (x, y)$ e indicato con $\vartheta$ l'angolo dell'asta con l'asse $x$, il vincolo si scrive
$$
\dot{x} \sin\vartheta - \dot{y} \cos\vartheta = 0 ,
$$
e **non** è riducibile a una relazione fra $x$, $y$ e $\vartheta$: il vincolo è anolonomo. Il sistema ha tre coordinate libere e due gradi di libertà cinematici, perché le velocità ammissibili formano in ogni configurazione un sottospazio di dimensione $2$ dello spazio delle terne $(\dot{x}, \dot{y}, \dot{\vartheta})$.

:::dimostrazione
Il versore dell'asta è $\cos\vartheta\,\hat{\imath} + \sin\vartheta\,\hat{\jmath}$, perciò la velocità $\vec{v}_A = \dot{x}\,\hat{\imath} + \dot{y}\,\hat{\jmath}$ è parallela all'asta se e solo se si annulla il determinante
$$
\dot{x} \sin\vartheta - \dot{y} \cos\vartheta = 0 ,
$$
che è l'equazione dell'enunciato. Si supponga ora, per assurdo, che esistano una funzione $f(x, y, \vartheta)$ di classe $C^2$ e una funzione $\lambda$ mai nulla tali che
$$
\lambda\,\big( \dot{x} \sin\vartheta - \dot{y} \cos\vartheta \big) = \frac{df}{dt} = \frac{\partial f}{\partial x}\,\dot{x} + \frac{\partial f}{\partial y}\,\dot{y} + \frac{\partial f}{\partial \vartheta}\,\dot{\vartheta}
$$
per ogni terna $(\dot{x}, \dot{y}, \dot{\vartheta})$. Uguagliando i coefficienti delle tre velocità si ottiene il sistema
$$
\begin{cases}
\dfrac{\partial f}{\partial x} = \lambda \sin\vartheta \\[8pt]
\dfrac{\partial f}{\partial y} = -\lambda \cos\vartheta \\[8pt]
\dfrac{\partial f}{\partial \vartheta} = 0
\end{cases}
$$
Dalla terza equazione segue che le derivate seconde miste $\dfrac{\partial^2 f}{\partial \vartheta\,\partial x}$ e $\dfrac{\partial^2 f}{\partial \vartheta\,\partial y}$ sono nulle. Poiché $f$ è di classe $C^2$, le derivate seconde miste non dipendono dall'ordine di derivazione, quindi derivando rispetto a $\vartheta$ le prime due equazioni si ottiene
$$
\begin{cases}
\dfrac{\partial \lambda}{\partial \vartheta}\,\sin\vartheta + \lambda \cos\vartheta = 0 \\[8pt]
-\dfrac{\partial \lambda}{\partial \vartheta}\,\cos\vartheta + \lambda \sin\vartheta = 0
\end{cases}
$$
Si moltiplica la prima equazione per $\cos\vartheta$, la seconda per $\sin\vartheta$ e si sottrae la seconda dalla prima; i termini in $\dfrac{\partial \lambda}{\partial \vartheta}$ si cancellano e resta $\lambda\,(\cos^2\vartheta + \sin^2\vartheta) = 0$, cioè $\lambda = 0$. Questo contraddice l'ipotesi che $\lambda$ non sia mai nulla, perciò la funzione $f$ non esiste e il vincolo non è riducibile a una relazione fra le coordinate.
:::
::::

:::osservazione{#disco-su-un-piano titolo="Disco che rotola su un piano orizzontale"}
Un disco di raggio $R$ che si mantiene verticale e rotola senza strisciare su un piano orizzontale si individua con quattro parametri: le coordinate $x$ e $y$ del punto di contatto, l'angolo $\psi$ che il piano del disco forma con l'asse $x$ e l'angolo di rotazione propria $\varphi$. Il puro rotolamento impone allora le due condizioni
$$
\begin{cases}
\dot{x} + R\,\dot{\varphi} \cos\psi = 0 \\[4pt]
\dot{y} + R\,\dot{\varphi} \sin\psi = 0
\end{cases}
$$
che sono anolonome. Infatti il disco, rotolando in avanti di un tratto $s$, ruotando di mezzo giro attorno alla verticale per il punto di contatto e rotolando ancora di $s$, torna nella posizione iniziale con lo stesso $\psi$ e con $\varphi$ diminuito di $\dfrac{2s}{R}$; poiché $s$ è arbitrario, nessuna relazione fra i quattro parametri si conserva lungo i moti ammissibili. Il disco ha quindi quattro parametri di configurazione e due gradi di libertà cinematici, e il caso piano si ritrova ponendo $\psi$ costante.
:::

## Spostamenti possibili e spostamenti virtuali

:::definizione{#spostamento-possibile titolo="Spostamento possibile"}
Sia il sistema in una configurazione ammissibile all'istante $t$. Uno **spostamento possibile** è l'insieme degli spostamenti infinitesimi
$$
dP_i = \vec{v}_i\,dt ,
\qquad i = 1, \dots, N ,
$$
dove $(\vec{v}_1, \dots, \vec{v}_N)$ è un atto di moto compatibile con i vincoli nell'istante $t$. In coordinate lagrangiane, derivando $P_i = P_i(q, t)$,
$$
dP_i = \sum_{h=1}^{n} \frac{\partial P_i}{\partial q_h}\,dq_h + \frac{\partial P_i}{\partial t}\,dt .
$$
Lo spostamento possibile è quello che il sistema compie in un intervallo di tempo infinitesimo, e tiene conto del movimento dei vincoli attraverso il termine $\dfrac{\partial P_i}{\partial t}\,dt$.
:::

:::definizione{#spostamento-virtuale titolo="Spostamento virtuale"}
Uno **spostamento virtuale** del sistema nella configurazione e nell'istante considerati è un insieme di vettori
$$
\delta P_i = \sum_{h=1}^{n} \frac{\partial P_i}{\partial q_h}\,\delta q_h ,
\qquad i = 1, \dots, N ,
$$
con $\delta q_1, \dots, \delta q_n$ arbitrari. Lo spostamento virtuale è lo spostamento compatibile con i vincoli pensati immobili nell'istante $t$, cioè con il tempo bloccato, e serve come spostamento di prova per scrivere le condizioni di equilibrio.

Gli spostamenti virtuali di un sistema a vincoli bilaterali formano uno spazio vettoriale di dimensione $n$, poiché i $\delta q_h$ sono arbitrari; in particolare, se $(\delta P_i)$ è virtuale, anche $(-\delta P_i)$ lo è. Con un vincolo unilaterale $f \geq 0$ nella configurazione di confine $f = 0$ gli spostamenti virtuali sono invece quelli che soddisfano la disuguaglianza linearizzata $\sum_i \operatorname{grad}_{P_i} f \cdot \delta P_i \geq 0$, e formano un semispazio. Su questi spostamenti si costruisce il lavoro virtuale, con cui si trovano le configurazioni di equilibrio nell'argomento sui lavori virtuali.
:::

::::teorema{#spostamenti-virtuali-e-vincoli titolo="Spostamenti virtuali e equazioni di vincolo"}
Sia dato un sistema soggetto a $m$ vincoli olonomi bilaterali $f_\alpha(P_1, \dots, P_N, t) = 0$ indipendenti. Allora gli spostamenti virtuali nella configurazione e nell'istante considerati sono tutte e sole le soluzioni del sistema lineare omogeneo
$$
\sum_{i=1}^{N} \operatorname{grad}_{P_i} f_\alpha \cdot \delta P_i = 0 ,
\qquad \alpha = 1, \dots, m ,
$$
dove $\operatorname{grad}_{P_i} f_\alpha$ è il vettore delle derivate di $f_\alpha$ rispetto alle coordinate di $P_i$. Inoltre, se i vincoli sono fissi, gli spostamenti possibili coincidono con gli spostamenti virtuali, a meno del fattore $dt$; se almeno un vincolo è mobile, i due insiemi sono diversi.

Il teorema dà il modo pratico di calcolare gli spostamenti virtuali quando le coordinate lagrangiane non sono state ancora scelte: si differenziano le equazioni di vincolo tenendo fisso il tempo.

:::dimostrazione
Si sostituisce la rappresentazione $P_i = P_i(q, t)$ nelle equazioni di vincolo, che risultano soddisfatte identicamente in $q$ e in $t$. Derivando rispetto a $q_h$ si ottiene
$$
\sum_{i=1}^{N} \operatorname{grad}_{P_i} f_\alpha \cdot \frac{\partial P_i}{\partial q_h} = 0 ,
\qquad h = 1, \dots, n .
$$
Si moltiplica per $\delta q_h$ e si somma su $h$; per la definizione di spostamento virtuale si ottiene allora $\sum_i \operatorname{grad}_{P_i} f_\alpha \cdot \delta P_i = 0$, quindi ogni spostamento virtuale soddisfa il sistema lineare. Viceversa, il sistema lineare ha $3N$ incognite e $m$ equazioni indipendenti, perciò il suo spazio delle soluzioni ha dimensione $3N - m = n$; poiché gli spostamenti virtuali formano un sottospazio di dimensione $n$ contenuto in quello delle soluzioni, i due sottospazi coincidono.

Per la seconda parte si confrontano le due espressioni. Se i vincoli sono fissi, allora $P_i$ non dipende esplicitamente da $t$, quindi $\dfrac{\partial P_i}{\partial t} = \vec{0}$ e lo spostamento possibile $dP_i = \sum_h \dfrac{\partial P_i}{\partial q_h}\,dq_h$ è lo spostamento virtuale con $\delta q_h = dq_h$. Se invece un vincolo è mobile, lo spostamento possibile contiene il termine aggiuntivo $\dfrac{\partial P_i}{\partial t}\,dt$, che non è nullo e non è della forma $\sum_h \dfrac{\partial P_i}{\partial q_h}\,\delta q_h$.
:::
::::

:::attenzione
Con un vincolo mobile lo spostamento virtuale non è lo spostamento che il sistema compie. Un punto $P$ scorre su una guida rettilinea che ruota attorno a $O$ con velocità angolare costante $\omega$ assegnata, e si prende come coordinata lagrangiana la distanza $s = |P - O|$. Allora
$$
P - O = s\,\big( \cos(\omega t)\,\hat{\imath} + \sin(\omega t)\,\hat{\jmath} \big) ,
$$
quindi lo spostamento virtuale è diretto lungo la guida,
$$
\delta P = \delta s\,\big( \cos(\omega t)\,\hat{\imath} + \sin(\omega t)\,\hat{\jmath} \big) ,
$$
mentre lo spostamento possibile vale
$$
dP = ds\,\big( \cos(\omega t)\,\hat{\imath} + \sin(\omega t)\,\hat{\jmath} \big) + s\,\omega\,dt\,\big( -\sin(\omega t)\,\hat{\imath} + \cos(\omega t)\,\hat{\jmath} \big)
$$
e ha una componente ortogonale alla guida, dovuta alla rotazione della guida stessa. Nell'istante $t = 0$, con $s = 2\,\mathrm{m}$ e $\omega = 3\,\mathrm{rad/s}$, lo spostamento virtuale è $\delta s\,\hat{\imath}$ e lo spostamento possibile è $ds\,\hat{\imath} + 6\,dt\,\hat{\jmath}$.

::struttura{nodi="O,0,0;P,3,1.5,-" linee="-0.4,-0.2 4.4,2.2" tratteggi="-0.3,-0.55 4,3.6" vincoli="O,cerniera" punti="3,1.5,P,pieno" frecce="3,1.5,4.1,2.05,δP;3,1.5,2.45,2.6,dP" coppie="1.3 0.65,1,ω" titolo="Punto su una guida rotante: $\delta P$ è lungo la guida, lo spostamento possibile $dP$ ha anche la componente dovuta alla rotazione"}
:::

## Vincoli ideali e reazioni vincolari

:::definizione{#reazione-vincolare titolo="Reazione vincolare"}
Le forze che agiscono su un sistema vincolato si dividono in forze **attive**, assegnate in funzione delle posizioni, delle velocità e del tempo, e **reazioni vincolari**, cioè le forze con cui i vincoli agiscono sui punti del sistema. La reazione che il vincolo esercita sul punto $P_i$ si indica con $\vec{\Phi}_i$.

Le reazioni vincolari sono incognite del problema, poiché dipendono dalle forze attive e dal moto. Ciò che il vincolo determina a priori è la direzione lungo cui la reazione può agire.
:::

:::definizione{#vincolo-ideale titolo="Vincolo ideale"}
Un sistema di vincoli si dice **ideale**, o perfetto, quando il lavoro virtuale delle reazioni vincolari soddisfa
$$
\delta L^{(v)} = \sum_{i=1}^{N} \vec{\Phi}_i \cdot \delta P_i \geq 0
$$
per ogni spostamento virtuale del sistema. Se i vincoli sono bilaterali, allora assieme a $(\delta P_i)$ è virtuale anche $(-\delta P_i)$, e la disuguaglianza applicata ai due spostamenti dà $\delta L^{(v)} = 0$.

La condizione di vincolo ideale è l'ipotesi su cui si fondano il principio dei lavori virtuali e le equazioni di Lagrange, trattati negli argomenti corrispondenti, poiché essa elimina le reazioni vincolari dalle equazioni di equilibrio e del moto. I vincoli lisci e bilaterali sono ideali, e lo è anche il puro rotolamento, benché il contatto sia scabro.
:::

::::teorema{#reazione-di-un-vincolo-liscio titolo="Reazione di un vincolo liscio e bilaterale"}
Sia un punto $P$ vincolato alla superficie fissa e regolare di equazione $f(P) = 0$, e sia il vincolo liscio e bilaterale. Allora la reazione vincolare è parallela a $\operatorname{grad} f$, cioè ortogonale alla superficie:
$$
\vec{\Phi} = \Phi\,\frac{\operatorname{grad} f}{|\operatorname{grad} f|} ,
$$
con $\Phi$ incognita scalare. Lo stesso vale per un punto vincolato a una curva fissa e liscia, con la reazione ortogonale alla tangente. Il risultato riduce da tre a una le incognite della reazione, perciò il moto di un punto su una superficie liscia si determina con le tre equazioni di Newton nelle incognite date dai due parametri della superficie e da $\Phi$.

:::dimostrazione
Il vincolo è liscio e bilaterale, perciò è ideale e il lavoro virtuale della reazione è nullo, cioè $\vec{\Phi} \cdot \delta P = 0$ per ogni spostamento virtuale $\delta P$. Il vincolo è fisso, quindi per il teorema sugli spostamenti virtuali gli spostamenti virtuali sono tutti i vettori $\delta P$ con $\operatorname{grad} f \cdot \delta P = 0$, cioè tutti i vettori del piano tangente alla superficie in $P$. Il vettore $\vec{\Phi}$ è perciò ortogonale a ogni vettore di quel piano, dunque è parallelo a $\operatorname{grad} f$.
:::
::::

:::osservazione{#reazioni-dei-vincoli-elementari titolo="Reazioni esplicate dai vincoli elementari"}
Nei sistemi piani i vincoli lisci più usati esplicano le reazioni seguenti, che si disegnano nel diagramma di corpo libero del corpo svincolato.

- **Appoggio** semplice, unilaterale: una forza normale al piano, $\Phi_n \geq 0$, diretta dal piano verso il corpo; $\Phi_n = 0$ segnala il distacco.
- **Carrello** su una guida, bilaterale: una forza normale alla guida, di segno qualsiasi.
- **Cerniera** fissa: le due componenti $\Phi_{Ax}$ e $\Phi_{Ay}$ applicate nel perno e momento nullo, poiché la cerniera lascia libera la rotazione.
- **Incastro**: le due componenti di forza e il momento reattivo $\Gamma_A$, poiché l'incastro impedisce anche la rotazione.
- **Manicotto** su una guida rettilinea: una forza normale alla guida e un momento reattivo, poiché resta libera solo la traslazione lungo la guida.
- **Filo** inestensibile, unilaterale: una forza diretta lungo il filo verso il punto di attacco, di intensità $T \geq 0$; $T = 0$ segnala che il filo è lento.
- **Cerniera interna** fra due corpi: due forze opposte applicate nel perno, per il principio di azione e reazione.

::struttura{nodi="A,0,0;B,5,0" aste="A-B" vincoli="A,cerniera;B,carrello" reazioni="A,1.2,0,Φ_Ax;A,0,1.2,Φ_Ay;B,0,1.2,Φ_B" titolo="Reazioni di una cerniera e di un carrello: tre incognite scalari"}

::struttura{nodi="A,0,0;B,4,0" aste="A-B" vincoli="A,incastro,180" reazioni="A,1.2,0,Φ_Ax;A,0,1.2,Φ_Ay" coppie="0.9 0,1,Γ_A" titolo="Reazioni di un incastro: due componenti di forza e il momento reattivo $\Gamma_A$"}
:::

:::teorema{#rotolamento-ideale titolo="Il puro rotolamento è un vincolo ideale"}
Un disco che rotola senza strisciare su una guida fissa riceve dalla guida una reazione $\vec{\Phi}$ applicata nel punto di contatto $H$, con una componente normale e una componente tangenziale di attrito. Il lavoro virtuale di questa reazione è nullo, quindi il vincolo è ideale. Infatti il punto del disco a contatto ha velocità nulla in ogni atto di moto compatibile con il vincolo, e il vincolo è fisso; perciò il suo spostamento virtuale è nullo, $\delta H = \vec{0}$, e il lavoro virtuale vale $\vec{\Phi} \cdot \delta H = 0$. Il risultato segue dal teorema sul puro rotolamento e dal teorema sugli spostamenti virtuali, e permette di studiare con le equazioni di Lagrange i sistemi con dischi che rotolano senza strisciare, nonostante la presenza dell'attrito.
:::

:::attenzione
Un contatto scabro con strisciamento non è un vincolo ideale. Un blocco che striscia su un pavimento scabro riceve una forza di attrito tangenziale $\vec{\Phi}_t$ opposta allo strisciamento, e lo spostamento virtuale del punto di contatto è diretto lungo il pavimento; il lavoro virtuale $\vec{\Phi}_t \cdot \delta P$ è perciò negativo. Per questi sistemi l'attrito si tratta come una forza attiva assegnata.
:::

## Attrito statico e legge di Coulomb-Morin

:::definizione{#attrito-statico titolo="Componente normale e componente di attrito"}
Sia un corpo a contatto in un punto $A$ con una superficie fissa, di normale $\hat{n}$ nel punto di contatto. La reazione vincolare si scompone nella **componente normale** e nella **componente tangenziale**, detta forza di attrito:
$$
\vec{\Phi} = \Phi_n\,\hat{n} + \vec{\Phi}_t ,
\qquad
\Phi_n = \vec{\Phi} \cdot \hat{n} ,
\qquad
\vec{\Phi}_t = \vec{\Phi} - \Phi_n\,\hat{n} .
$$
Il contatto è unilaterale, perciò $\Phi_n \geq 0$, con il verso di $\hat{n}$ scelto dalla superficie verso il corpo. La componente di attrito è nulla per un contatto liscio ed è diversa da zero per un contatto scabro.
:::

::::teorema{#coulomb-morin titolo="Legge di Coulomb-Morin e cono d'attrito"}
Sia un corpo in quiete a contatto con una superficie scabra fissa, e sia $f_s > 0$ il **coefficiente di attrito statico** della coppia di materiali a contatto. La quiete è compatibile con il contatto se e solo se
$$
|\vec{\Phi}_t| \leq f_s\,\Phi_n ,
$$
e questa condizione è equivalente alla condizione geometrica che la reazione $\vec{\Phi}$ appartenga al **cono d'attrito**, cioè al cono di vertice $A$, asse $\hat{n}$ e semiapertura
$$
\rho = \arctan f_s ,
$$
detta angolo d'attrito. Quando vale l'uguaglianza il contatto è al limite dello strisciamento. La legge limita la direzione della reazione e non la determina, perciò nel piano le incognite restano due e si ricavano dalle equazioni di equilibrio, trattate nell'argomento sulla statica del punto e dei sistemi.

::struttura{linee="-0.3,0 6.3,0;3,0 1.4,2.8;3,0 4.6,2.8" tratteggi="3,0 3,3.1" reazioni="3 0,-0.5,1.4,Φ" etichette="3.22,1.95,ρ;2.8,2.95,n" punti="3,0,A,pieno" titolo="Cono d'attrito di semiapertura $\rho = \arctan f_s$: la quiete è possibile se e solo se $\vec{\Phi}$ sta dentro il cono"}

:::dimostrazione
Si indichi con $\phi \in \Big[ 0, \dfrac{\pi}{2} \Big)$ l'angolo che la reazione $\vec{\Phi}$ forma con la normale $\hat{n}$, angolo definito perché $\Phi_n > 0$. Dalla scomposizione della reazione segue
$$
\tan\phi = \frac{|\vec{\Phi}_t|}{\Phi_n} .
$$
La funzione tangente è strettamente crescente su $\Big[ 0, \dfrac{\pi}{2} \Big)$, quindi la disuguaglianza $\tan\phi \leq f_s = \tan\rho$ vale se e solo se $\phi \leq \rho$, cioè se e solo se $\vec{\Phi}$ sta dentro il cono di asse $\hat{n}$ e semiapertura $\rho$. Moltiplicando per $\Phi_n > 0$ la disuguaglianza $\tan\phi \leq f_s$ si ottiene infine $|\vec{\Phi}_t| \leq f_s\,\Phi_n$, perciò le due condizioni sono equivalenti.
:::
::::

:::esempio{#blocco-su-piano-inclinato titolo="Corpo appoggiato su un piano inclinato scabro"}
Un corpo di massa $m$ è appoggiato su un piano inclinato dell'angolo $\alpha$ sull'orizzontale, con coefficiente di attrito statico $f_s$, e le sole forze attive sono il peso e la reazione del piano. L'equilibrio del corpo richiede che la reazione sia opposta al peso, perciò le sue componenti valgono
$$
\Phi_n = m g \cos\alpha ,
\qquad
|\vec{\Phi}_t| = m g \sin\alpha .
$$
La legge di Coulomb-Morin dà allora $m g \sin\alpha \leq f_s\,m g \cos\alpha$, cioè
$$
\tan\alpha \leq f_s .
$$
La condizione non contiene la massa, dunque il corpo resta in quiete per ogni massa se e solo se l'inclinazione non supera l'angolo d'attrito $\rho = \arctan f_s$. Con $f_s = 0{,}5$ si ottiene $\alpha \leq 26{,}57^\circ$. Lo stesso risultato si legge sul cono d'attrito, poiché la reazione è opposta al peso e forma con la normale al piano l'angolo $\alpha$.
:::
