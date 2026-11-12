---
titolo: Lavori virtuali, potenziale ed equilibrio
sommario: Il lavoro di una forza, il potenziale delle forze conservative, le componenti lagrangiane della sollecitazione e il principio dei lavori virtuali, con cui si trovano le configurazioni di equilibrio di un sistema vincolato e si calcolano le reazioni dei vincoli.
---

## Lavoro di una forza

:::richiamo{titolo="Integrale di linea di un campo vettoriale"}
Sia $\vec{F}$ un campo vettoriale continuo e sia $\gamma$ una curva regolare di estremi $P_1$ e $P_2$, descritta dalla parametrizzazione $P(u)$ con $u \in [u_1, u_2]$. L'integrale di linea di $\vec{F}$ lungo $\gamma$ è
$$
\int_\gamma \vec{F} \cdot dP = \int_{u_1}^{u_2} \vec{F}\big(P(u)\big) \cdot \frac{dP}{du}\,du ,
$$
e il suo valore non dipende dalla parametrizzazione scelta, purché resti lo stesso il verso di percorrenza. Si rimanda all'argomento sugli integrali curvilinei e le forme differenziali di Analisi 2.
:::

:::definizione{#lavoro-di-una-forza titolo="Lavoro di una forza"}
Sia $\vec{F}$ una forza applicata al punto $P$ e sia $dP$ lo spostamento infinitesimo del suo punto di applicazione. Il **lavoro elementare** della forza è il prodotto scalare
$$
dL = \vec{F} \cdot dP .
$$
Il lavoro elementare risulta positivo quando la forza e lo spostamento formano un angolo acuto, nullo quando i due vettori sono ortogonali e negativo quando l'angolo è ottuso. Se il punto di applicazione percorre la curva $\gamma$ dalla posizione $P_1$ alla posizione $P_2$, il **lavoro** della forza lungo $\gamma$ è
$$
L = \int_\gamma \vec{F} \cdot dP ,
$$
misurato in joule, con $1\,\mathrm{J} = 1\,\mathrm{N}\,\mathrm{m}$. Per una forza costante l'integrale dipende soltanto dagli estremi, perciò $L = \vec{F} \cdot (P_2 - P_1)$. Il peso $-mg\,\hat{\jmath}$ di un punto che passa dalla quota $y_1$ alla quota $y_2$ compie quindi il lavoro $mg\,(y_1 - y_2)$, positivo quando il punto scende.

::struttura{linee="0,0 0.8,0.55 1.6,0.9 2.4,1.1 3.2,1.25 4,1.5" punti="2.4,1.1,P" forze="2.4 1.1,1,0.75,F" frecce="2.4,1.1,3.18,1.25,dP" etichette="0.05,-0.4,P_1;4.05,1.75,P_2" titolo="Il lavoro elementare $dL = \vec{F} \cdot dP$ dipende dall'angolo fra la forza e lo spostamento del punto di applicazione"}

:::

:::definizione{#lavoro-di-un-sistema-di-forze titolo="Lavoro di un sistema di forze e potenza"}
Sia un sistema materiale su cui agiscono le forze $\vec{F}_1, \dots, \vec{F}_n$, applicate rispettivamente nei punti $P_1, \dots, P_n$. Il **lavoro elementare del sistema di forze** è la somma dei lavori elementari,
$$
dL = \sum_{i=1}^{n} \vec{F}_i \cdot dP_i ,
$$
e la **potenza** della sollecitazione è
$$
\Pi = \sum_{i=1}^{n} \vec{F}_i \cdot \vec{v}_{P_i} ,
$$
cosicché $dL = \Pi\,dt$ e la potenza si misura in watt. Una coppia di momento $\mathcal{M}\,\hat{k}$ applicata a un corpo rigido che ruota con velocità angolare $\dot{\vartheta}\,\hat{k}$ ha potenza $\mathcal{M}\,\dot{\vartheta}$ e lavoro elementare $\mathcal{M}\,d\vartheta$, perché la sua risultante è nulla e il suo momento è lo stesso rispetto a ogni polo.
:::

## Forze conservative e potenziale

:::definizione{#forza-conservativa titolo="Forza conservativa e potenziale"}
Sia $\vec{F}(P)$ una forza che dipende dalla sola posizione del punto di applicazione, definita in una regione connessa $D$ dello spazio. La forza è **conservativa** se esiste una funzione $U : D \to \mathbb{R}$, detta **potenziale**, tale che
$$
\vec{F} = \operatorname{grad} U .
$$
In tutta la Meccanica razionale si adotta questa convenzione, con il segno più davanti al gradiente, e si chiama **energia potenziale** la funzione $V = -U$, cosicché $\vec{F} = -\operatorname{grad} V$; l'energia meccanica di un sistema è $E = T + V$, dove $T$ è l'energia cinetica. Il potenziale è determinato a meno di una costante additiva, poiché due funzioni con lo stesso gradiente su una regione connessa differiscono per una costante. La costante si scarta senza conseguenze, perché il lavoro e le configurazioni di equilibrio dipendono solo dalle derivate di $U$.
:::

::::teorema{#lavoro-di-una-forza-conservativa titolo="Lavoro di una forza conservativa"}
Sia $\vec{F} = \operatorname{grad} U$ una forza conservativa nella regione $D$ e sia $\gamma \subset D$ una curva regolare di estremi $P_1$ e $P_2$. Allora
$$
L = U(P_2) - U(P_1) = V(P_1) - V(P_2) ,
$$
quindi il lavoro dipende soltanto dalla posizione iniziale e dalla posizione finale, e non dalla curva percorsa; su una curva chiusa il lavoro è perciò nullo. Noto il potenziale, il lavoro si ottiene allora senza calcolare l'integrale di linea. La forza elastica di costante $k$ che richiama un punto verso l'origine ha potenziale $U = -\dfrac{1}{2}\,k\,r^2$, dove $r$ è la distanza dall'origine; il suo lavoro da $r_1 = \ell$ a $r_2 = 2\ell$ vale quindi $-\dfrac{3}{2}\,k\,\ell^2$, qualunque sia il cammino seguito.

:::dimostrazione
Sia $P(u)$, con $u \in [u_1, u_2]$, una parametrizzazione regolare di $\gamma$, con $P(u_1) = P_1$ e $P(u_2) = P_2$. La funzione composta $u \mapsto U\big(P(u)\big)$ è derivabile e, per la regola di derivazione della funzione composta,
$$
\frac{d}{du}\,U\big(P(u)\big) = \operatorname{grad} U\big(P(u)\big) \cdot \frac{dP}{du} = \vec{F}\big(P(u)\big) \cdot \frac{dP}{du} .
$$
L'integrando del lavoro è dunque la derivata di $U\big(P(u)\big)$, perciò per il teorema fondamentale del calcolo integrale
$$
L = \int_{u_1}^{u_2} \frac{d}{du}\,U\big(P(u)\big)\,du = U(P_2) - U(P_1) .
$$
L'espressione ottenuta contiene solo gli estremi, quindi il lavoro non dipende dalla curva; se $P_2 = P_1$ la differenza è nulla.
:::
::::

:::osservazione{#potenziale-di-un-sistema titolo="Potenziale di un sistema di forze"}
Siano $\vec{F}_1, \dots, \vec{F}_n$ forze conservative di potenziali $U_1, \dots, U_n$. Il lavoro elementare della sollecitazione è la somma dei lavori elementari, dunque la sollecitazione complessiva è conservativa e il suo potenziale è
$$
U = \sum_{i=1}^{n} U_i .
$$
Per un sistema formato da aste, dischi, punti materiali e molle si scrive quindi un addendo per il peso di ogni corpo e un addendo per ogni molla. La resistenza viscosa $-h\,\vec{v}$ non è conservativa, poiché non è una funzione della sola posizione.
:::

## Potenziali notevoli

I tre potenziali che seguono coprono quasi tutte le sollecitazioni degli esercizi.

::::teorema{#potenziale-del-peso titolo="Potenziale del peso"}
Sia un sistema materiale di massa totale $M$ e centro di massa $G$, soggetto al campo di gravità $-g\,\hat{\jmath}$ con $\hat{\jmath}$ verticale verso l'alto. Il peso del sistema è conservativo e ha potenziale
$$
U = -M g\,y_G ,
$$
dove $y_G$ è la quota del centro di massa, e energia potenziale $V = M g\,y_G$. Per scrivere il potenziale del peso basta quindi la quota del centro di massa in funzione delle coordinate lagrangiane. Un'asta omogenea di massa $m$ e lunghezza $\ell$, incernierata nell'origine e inclinata dell'angolo $\vartheta$ rispetto alla verticale discendente, ha il centro di massa nel punto medio, alla quota $y_G = -\dfrac{\ell}{2}\cos\vartheta$, quindi $U = \dfrac{m g \ell}{2}\cos\vartheta$.

::struttura{nodi="O,0,0;A,1.6,-2.2" aste="O-A" vincoli="O,cerniera,90" punti="0.8,-1.1,G,baricentro" tratteggi="0,0 0,-2.6;-1.1,-1.1 0.8,-1.1" forze="0.8 -1.1,0,-0.9,mg" etichette="0.32,-1,ϑ;-1.45,-1.1,y_G" titolo="Il potenziale del peso di un'asta dipende dalla sola quota $y_G$ del centro di massa"}

:::dimostrazione
Il peso del punto $P_i$ di massa $m_i$ è $-m_i g\,\hat{\jmath}$, e la funzione $-m_i g\,y_i$ ha gradiente $-m_i g\,\hat{\jmath}$, quindi il peso di ogni singolo punto è conservativo con potenziale $-m_i g\,y_i$. Per l'additività dei potenziali di un sistema di forze
$$
U = -g \sum_{i=1}^{N} m_i\,y_i .
$$
La definizione di centro di massa dà $M\,y_G = \sum_i m_i\,y_i$, come si vede nell'argomento sulla geometria delle masse; sostituendo si ottiene $U = -M g\,y_G$. Per un sistema continuo la somma è un integrale e il passaggio è lo stesso.
:::
::::

::::teorema{#potenziale-della-molla titolo="Potenziale di una molla"}
Una **molla ideale** di costante elastica $k$ e lunghezza a riposo $\ell_0$, con gli estremi nei punti $A$ e $B$ del sistema, esercita su $A$ la forza
$$
\vec{F}_A = -k\,(\ell - \ell_0)\,\frac{A - B}{\ell} ,
\qquad
\ell = |A - B| ,
$$
e su $B$ la forza opposta. La coppia di forze è conservativa con potenziale
$$
U = -\frac{1}{2}\,k\,(\ell - \ell_0)^2 ,
$$
funzione della sola distanza $\ell$ fra gli estremi. Negli esercizi si calcola $\ell$ in funzione delle coordinate lagrangiane e si sostituisce. Con $\ell_0 = 0$ il potenziale diventa $U = -\dfrac{1}{2}\,k\,\ell^2$, e la stessa espressione vale quando uno dei due estremi è un punto fisso, perché in quel caso la forza applicata al punto fisso compie lavoro nullo.

::struttura{nodi="A,0,0;B,4,0" linee="0,0 0.5,0 0.75,0.35 1.25,-0.35 1.75,0.35 2.25,-0.35 2.75,0.35 3.25,-0.35 3.5,0 4,0" forze="A,0.95,0,F_A;B,-0.95,0,F_B" quote="A,B,ℓ,1" etichette="2,0.75,k" titolo="Molla di costante $k$ fra i punti $A$ e $B$: il potenziale $U = -\dfrac{1}{2}\,k\,(\ell - \ell_0)^2$ dipende dalla sola distanza $\ell$"}

:::dimostrazione
Si pone $\vec{w} = A - B$, cosicché $\ell = |\vec{w}|$ e $\vec{F}_A = -k\,\dfrac{\ell - \ell_0}{\ell}\,\vec{w}$. Il lavoro elementare della coppia di forze è
$$
dL = \vec{F}_A \cdot dA + \vec{F}_B \cdot dB = -k\,\frac{\ell - \ell_0}{\ell}\,\vec{w} \cdot (dA - dB) = -k\,\frac{\ell - \ell_0}{\ell}\,\vec{w} \cdot d\vec{w} ,
$$
poiché $\vec{F}_B = -\vec{F}_A$ e $dA - dB = d\vec{w}$. Dall'uguaglianza $\vec{w} \cdot \vec{w} = \ell^2$, differenziata, segue $\vec{w} \cdot d\vec{w} = \ell\,d\ell$, perciò
$$
dL = -k\,(\ell - \ell_0)\,d\ell = d\!\left[ -\frac{1}{2}\,k\,(\ell - \ell_0)^2 \right] .
$$
Il lavoro elementare è dunque il differenziale della funzione $-\dfrac{1}{2}\,k\,(\ell - \ell_0)^2$, che è quindi il potenziale della coppia di forze elastiche.
:::
::::

:::teorema{#potenziale-forza-centrale titolo="Potenziale di una forza centrale"}
Sia $O$ un punto fisso, sia $r = |P - O|$ e sia $\hat{u} = \dfrac{P - O}{r}$. Una forza della forma $\vec{F} = f(r)\,\hat{u}$, con $f$ continua, si dice **centrale** ed è conservativa con potenziale una primitiva di $f$,
$$
U(r) = \int f(r)\,dr ,
$$
poiché $\operatorname{grad} U(r) = U'(r)\,\operatorname{grad} r = f(r)\,\hat{u}$. La forza elastica di richiamo verso $O$ ha $f(r) = -k\,r$, quindi $U = -\dfrac{1}{2}\,k\,r^2$; l'attrazione gravitazionale di una massa $M$ posta in $O$ ha $f(r) = -\dfrac{G\,m\,M}{r^2}$, quindi $U = \dfrac{G\,m\,M}{r}$. Questi potenziali si usano nella dinamica del punto materiale per i moti unidimensionali conservativi e per i moti kepleriani.
:::

:::esempio{titolo="Potenziale di un'asta con una molla"}
Un'asta omogenea $OA$, di massa $m$ e lunghezza $\ell$, è incernierata nell'origine $O$ e si muove nel piano verticale $Oxy$. Una molla di costante $k$ e lunghezza a riposo nulla collega l'estremo $A$ al punto fisso $B = (0, \ell)$. Si prende come coordinata lagrangiana l'angolo $\vartheta$ fra l'asta e la verticale discendente, misurato in verso antiorario, cosicché
$$
A - O = \ell\,(\sin\vartheta\,\hat{\imath} - \cos\vartheta\,\hat{\jmath}) ,
\qquad
y_G = -\frac{\ell}{2}\cos\vartheta .
$$
La lunghezza della molla si ottiene dal quadrato della distanza,
$$
\ell_{AB}^{\,2} = \ell^2\sin^2\vartheta + (-\ell\cos\vartheta - \ell)^2 = \ell^2\,(2 + 2\cos\vartheta) ,
$$
quindi, sommando il potenziale del peso e quello della molla,
$$
U(\vartheta) = \frac{m g \ell}{2}\cos\vartheta - \frac{1}{2}\,k\,\ell^2\,(2 + 2\cos\vartheta) = \left( \frac{m g \ell}{2} - k\,\ell^2 \right)\cos\vartheta - k\,\ell^2 .
$$
L'ultimo addendo è costante e si può scartare. Il sistema ricompare nelle configurazioni di equilibrio e nel calcolo della reazione della cerniera.

::struttura{nodi="O,0,0;A,1.3,-1.8;B,0,2.2" aste="O-A" vincoli="O,cerniera,90" punti="0.65,-0.9,G,baricentro" linee="0.00,2.20 0.12,1.82 0.40,1.69 0.11,1.14 0.66,0.88 0.37,0.33 0.93,0.07 0.64,-0.48 1.19,-0.74 0.90,-1.29 1.18,-1.42 1.30,-1.80" tratteggi="0,0 0,-2.2" forze="0.65 -2,0,-0.7,mg" etichette="0.3,-0.85,ϑ;1.25,0.8,k" titolo="Asta incernierata in $O$ con una molla fra $A$ e il punto fisso $B = (0, \ell)$"}

:::

## Spostamenti virtuali e lavoro virtuale

:::richiamo{titolo="Spostamenti virtuali"}
Sia un sistema a vincoli olonomi, con $n$ gradi di libertà e coordinate lagrangiane $q_1, \dots, q_n$, cosicché la posizione di ogni suo punto è $P_i = P_i(q_1, \dots, q_n, t)$. Lo **spostamento virtuale** del punto $P_i$ a partire da una configurazione assegnata è
$$
\delta P_i = \sum_{h=1}^{n} \frac{\partial P_i}{\partial q_h}\,\delta q_h ,
$$
dove il tempo si tiene fermo e le variazioni $\delta q_h$ sono arbitrarie e indipendenti se i vincoli sono bilaterali. Con vincoli fissi gli spostamenti virtuali coincidono con gli spostamenti possibili, mentre con vincoli mobili le due famiglie sono diverse. Si rimanda all'argomento sui vincoli e le coordinate lagrangiane.
:::

:::definizione{#lavoro-virtuale titolo="Lavoro virtuale"}
Sia un sistema di forze $\vec{F}_1, \dots, \vec{F}_N$ applicate nei punti $P_1, \dots, P_N$ di un sistema vincolato. Il **lavoro virtuale** della sollecitazione, relativo a un fissato spostamento virtuale, è
$$
\delta L = \sum_{i=1}^{N} \vec{F}_i \cdot \delta P_i .
$$
Le forze si valutano nella configurazione da cui si parte, perciò $\delta L$ è una funzione lineare delle variazioni $\delta q_h$. Si distinguono le **forze attive**, note in funzione della configurazione, e le **reazioni vincolari**, incognite; i rispettivi lavori virtuali si indicano con $\delta L^{(a)}$ e $\delta L^{(v)}$.

::struttura{nodi="A,0,2.4;B,3.2,0" aste="A-B" vincoli="A,carrello,180;B,carrello" linee="0,-0.2 0,3.1;-0.3,0 4.1,0" tratteggi="0,1.9 3.6,0" punti="1.6,1.2,G,baricentro" frecce="0,2.4,0,1.9,δA;3.2,0,3.62,0,δB" titolo="Spostamento virtuale di un'asta con gli estremi su due guide: la configurazione tratteggiata è quella spostata"}

:::

:::definizione{#componenti-lagrangiane titolo="Componenti lagrangiane della sollecitazione"}
Sia un sistema a vincoli olonomi con coordinate lagrangiane $q_1, \dots, q_n$. Sostituendo nell'espressione del lavoro virtuale gli spostamenti virtuali dei punti di applicazione si ottiene
$$
\delta L = \sum_{i=1}^{N} \vec{F}_i \cdot \sum_{h=1}^{n} \frac{\partial P_i}{\partial q_h}\,\delta q_h = \sum_{h=1}^{n} Q_h\,\delta q_h ,
$$
dove il numero
$$
Q_h = \sum_{i=1}^{N} \vec{F}_i \cdot \frac{\partial P_i}{\partial q_h}
$$
si chiama **componente lagrangiana della sollecitazione** relativa alla coordinata $q_h$. Il lavoro virtuale si scrive dunque come somma di $n$ termini, uno per grado di libertà, e le $Q_h$ sono le grandezze che compaiono nelle equazioni di equilibrio e nelle equazioni di Lagrange. Se $q_h$ è un angolo, la corrispondente $Q_h$ ha le dimensioni di un momento; se $q_h$ è una lunghezza, ha le dimensioni di una forza.
:::

::::teorema{#componenti-lagrangiane-conservative titolo="Componenti lagrangiane di una sollecitazione conservativa"}
Sia la sollecitazione attiva conservativa, con potenziale $U$, e siano i vincoli fissi, cosicché il potenziale, espresso nelle coordinate lagrangiane, è la funzione $U(q_1, \dots, q_n)$. Allora
$$
Q_h = \frac{\partial U}{\partial q_h} ,
\qquad h = 1, \dots, n .
$$
Le componenti lagrangiane si ottengono perciò derivando una sola funzione, e questo rende il potenziale lo strumento più rapido per scrivere le equazioni di equilibrio di un sistema conservativo.

:::dimostrazione
Sia $U$ il potenziale della sollecitazione come funzione delle posizioni dei punti, cosicché $\vec{F}_i = \operatorname{grad}_{P_i} U$. La funzione composta $U\big(P_1(q), \dots, P_N(q)\big)$ si deriva rispetto a $q_h$ con la regola di derivazione della funzione composta,
$$
\frac{\partial U}{\partial q_h} = \sum_{i} \operatorname{grad}_{P_i} U \cdot \frac{\partial P_i}{\partial q_h} = \sum_{i} \vec{F}_i \cdot \frac{\partial P_i}{\partial q_h} = Q_h .
$$
:::
::::

::::teorema{#lavoro-virtuale-di-un-rigido titolo="Lavoro virtuale di un sistema di forze su un corpo rigido"}
Sia un corpo rigido, sia $\Omega$ un suo punto e sia $\delta\vec{\vartheta}$ la rotazione virtuale infinitesima. Gli spostamenti virtuali dei punti del rigido sono
$$
\delta P = \delta\Omega + \delta\vec{\vartheta} \wedge (P - \Omega) ,
$$
e il lavoro virtuale di un sistema di forze di risultante $\vec{R}$ e momento risultante $\vec{M}_\Omega$ vale
$$
\delta L = \vec{R} \cdot \delta\Omega + \vec{M}_\Omega \cdot \delta\vec{\vartheta} .
$$
Il lavoro virtuale su un rigido dipende quindi dalle forze solo attraverso $\vec{R}$ e $\vec{M}_\Omega$, perciò due sistemi di forze equivalenti compiono lo stesso lavoro virtuale. Nel piano, con $\delta\vec{\vartheta} = \delta\vartheta\,\hat{k}$, l'espressione diventa $\delta L = \vec{R} \cdot \delta\Omega + M_\Omega\,\delta\vartheta$: per un'asta che ruota attorno alla cerniera fissa $\Omega$ si ha $\delta\Omega = \vec{0}$ e $\delta L = M_\Omega\,\delta\vartheta$.

:::dimostrazione
La formula degli spostamenti virtuali di un rigido segue dalla formula fondamentale della cinematica rigida, moltiplicata per l'intervallo di tempo e con il tempo tenuto fermo; si rimanda all'argomento sulla cinematica del corpo rigido. Sostituendola nel lavoro virtuale si ottiene
$$
\delta L = \sum_{i} \vec{F}_i \cdot \delta\Omega + \sum_{i} \vec{F}_i \cdot \big( \delta\vec{\vartheta} \wedge (P_i - \Omega) \big) .
$$
La prima somma vale $\vec{R} \cdot \delta\Omega$. Nella seconda si usa l'identità del prodotto misto $\vec{a} \cdot (\vec{b} \wedge \vec{c}) = \vec{b} \cdot (\vec{c} \wedge \vec{a})$ con $\vec{a} = \vec{F}_i$, $\vec{b} = \delta\vec{\vartheta}$ e $\vec{c} = P_i - \Omega$, da cui
$$
\sum_{i} \vec{F}_i \cdot \big( \delta\vec{\vartheta} \wedge (P_i - \Omega) \big) = \delta\vec{\vartheta} \cdot \sum_{i} (P_i - \Omega) \wedge \vec{F}_i = \vec{M}_\Omega \cdot \delta\vec{\vartheta} .
$$
:::
::::

## Vincoli ideali

:::definizione{#vincolo-ideale titolo="Vincolo ideale"}
Un vincolo si dice **ideale**, oppure perfetto, se le reazioni che esso può esplicare sono tutti e soli i sistemi di forze il cui lavoro virtuale soddisfa
$$
\delta L^{(v)} \geq 0
$$
per ogni spostamento virtuale del sistema vincolato. Se il vincolo è bilaterale, ogni spostamento virtuale è invertibile, cioè $-\delta P_i$ è ancora virtuale, quindi valgono insieme $\delta L^{(v)} \geq 0$ e $-\delta L^{(v)} \geq 0$, perciò $\delta L^{(v)} = 0$: le reazioni di un vincolo bilaterale ideale compiono lavoro virtuale nullo. La definizione individua le reazioni senza conoscerle una per una, e questo permette di eliminarle dalle equazioni di equilibrio.
:::

:::osservazione{#vincoli-ideali-esempi titolo="Quali vincoli sono ideali"}
Sono ideali l'appoggio liscio, il carrello liscio, la cerniera liscia, l'incastro, il manicotto liscio, il filo inestensibile e il contatto con puro rotolamento. Nella cerniera liscia la reazione è applicata in un punto fisso, il cui spostamento virtuale è nullo, perciò il lavoro virtuale è nullo; nell'appoggio liscio la reazione è normale alla superficie e lo spostamento virtuale è tangente, dunque i due vettori sono ortogonali; nel puro rotolamento la reazione è applicata nel punto di contatto, che ha velocità nulla e quindi spostamento virtuale nullo. Anche le reazioni interne di un vincolo di rigidità e quelle di una cerniera interna liscia hanno lavoro virtuale complessivamente nullo, perché le due forze che si scambiano i corpi sono opposte e agiscono su punti che si spostano allo stesso modo.
:::

:::attenzione
L'attrito radente rende il vincolo non ideale. Un punto appoggiato su un piano scabro riceve una reazione con componente tangenziale opposta allo spostamento, quindi $\delta L^{(v)} < 0$ per gli spostamenti virtuali diversi da quello nullo, e il principio dei lavori virtuali non si applica. L'equilibrio di un corpo appoggiato con attrito si studia con le equazioni cardinali della statica e la legge di Coulomb-Morin, come si vede nell'argomento sui vincoli e le coordinate lagrangiane.
:::

## Il principio dei lavori virtuali

::::teorema{#principio-dei-lavori-virtuali titolo="Principio dei lavori virtuali"}
Sia un sistema materiale con vincoli olonomi fissi e ideali, soggetto alla sollecitazione attiva $\vec{F}_1, \dots, \vec{F}_N$. Una configurazione $C$ è di equilibrio se e solo se
$$
\delta L^{(a)} \leq 0
$$
per ogni spostamento virtuale a partire da $C$. Se tutti i vincoli sono bilaterali la condizione diventa
$$
\delta L^{(a)} = 0 ,
$$
e questa è la forma che si usa nella grande maggioranza dei problemi. Il principio fornisce le equazioni di equilibrio senza che compaiano le reazioni vincolari, perciò permette di trovare le configurazioni di equilibrio di un sistema con molti vincoli scrivendo una sola equazione scalare per grado di libertà.

::struttura{poligoni="0,0 3.4,0 3.4,1.9 0,1.9" nodi="Ω,0.6,0.6" punti="2.4,1.2,P" forze="2.4 1.2,0.9,0.6,F_i" frecce="0.6,0.6,1.3,0.95,δΩ" coppie="1.75 0.55,1,δϑ" titolo="Spostamento virtuale di un corpo rigido: la traslazione $\delta\Omega$ e la rotazione $\delta\vartheta$ determinano $\delta P$ in ogni punto"}

:::dimostrazione
Si dimostra l'enunciato per un corpo rigido vincolato, caso in cui le equazioni cardinali della statica sono necessarie e sufficienti per l'equilibrio, come si vede nell'argomento sulla statica dei sistemi. Sia $\Omega$ un punto del rigido, e siano $\vec{R}^{(a)}$, $\vec{M}_\Omega^{(a)}$ la risultante e il momento risultante delle forze attive, $\vec{R}^{(v)}$, $\vec{M}_\Omega^{(v)}$ quelli delle reazioni.

Si supponga che $C$ sia di equilibrio. Allora le equazioni cardinali sono soddisfatte,
$$
\begin{cases}
\vec{R}^{(a)} + \vec{R}^{(v)} = \vec{0} \\[4pt]
\vec{M}_\Omega^{(a)} + \vec{M}_\Omega^{(v)} = \vec{0}
\end{cases}
$$
Per il lavoro virtuale di un sistema di forze su un corpo rigido, moltiplicando scalarmente la prima equazione per $\delta\Omega$ e la seconda per $\delta\vec{\vartheta}$ e sommando, si ottiene $\delta L^{(a)} + \delta L^{(v)} = 0$ per ogni spostamento virtuale. I vincoli sono ideali, quindi $\delta L^{(v)} \geq 0$, perciò $\delta L^{(a)} = -\delta L^{(v)} \leq 0$.

Si supponga viceversa che $\delta L^{(a)} \leq 0$ per ogni spostamento virtuale, e si consideri il sistema di forze di risultante $-\vec{R}^{(a)}$ e momento $-\vec{M}_\Omega^{(a)}$. Il suo lavoro virtuale vale
$$
-\vec{R}^{(a)} \cdot \delta\Omega - \vec{M}_\Omega^{(a)} \cdot \delta\vec{\vartheta} = -\delta L^{(a)} \geq 0 ,
$$
dunque è un sistema di reazioni che il vincolo ideale può esplicare. Con queste reazioni le due equazioni cardinali sono soddisfatte, e poiché per un corpo rigido esse sono sufficienti per l'equilibrio, la configurazione $C$ è di equilibrio. Per un sistema di più corpi rigidi collegati si ripete il ragionamento su ciascun corpo, tenendo conto che il lavoro virtuale delle reazioni interne dei vincoli ideali di collegamento è nullo.
:::
::::

:::osservazione{#plv-e-equazioni-cardinali titolo="Confronto con le equazioni cardinali"}
Le equazioni cardinali della statica e il principio dei lavori virtuali danno le stesse configurazioni di equilibrio, ma richiedono conti diversi. Le equazioni cardinali contengono anche le reazioni vincolari, perciò per un sistema di $c$ corpi nel piano si scrivono $3c$ equazioni e si risolve il sistema nelle reazioni e nelle coordinate. Il principio dei lavori virtuali elimina le reazioni e dà $n$ equazioni, una per grado di libertà. Per un sistema a un grado di libertà formato da tre aste il primo metodo porta a nove equazioni, il secondo a una sola.
:::

## Configurazioni di equilibrio

::::teorema{#equilibrio-stazionarieta-del-potenziale titolo="Equilibrio e stazionarietà del potenziale"}
Sia un sistema a vincoli olonomi fissi, ideali e bilaterali, con $n$ gradi di libertà e coordinate lagrangiane $q_1, \dots, q_n$, e sia la sollecitazione attiva conservativa con potenziale $U(q_1, \dots, q_n)$ di classe $C^1$. Una configurazione è di equilibrio se e solo se è un punto stazionario del potenziale, cioè
$$
\begin{cases}
\dfrac{\partial U}{\partial q_1} = 0 \\[6pt]
\;\;\vdots \\[4pt]
\dfrac{\partial U}{\partial q_n} = 0
\end{cases}
$$
Le configurazioni di equilibrio di un sistema conservativo si trovano perciò scrivendo il potenziale e annullandone le derivate parziali, e sono anche i punti stazionari dell'energia potenziale $V = -U$. Per $n = 1$ si risolve l'unica equazione $U'(q) = 0$.

:::dimostrazione
I vincoli sono ideali e bilaterali, perciò per il principio dei lavori virtuali la configurazione è di equilibrio se e solo se $\delta L^{(a)} = 0$ per ogni spostamento virtuale. La sollecitazione è conservativa e i vincoli sono fissi, dunque per le componenti lagrangiane di una sollecitazione conservativa
$$
\delta L^{(a)} = \sum_{h=1}^{n} Q_h\,\delta q_h = \sum_{h=1}^{n} \frac{\partial U}{\partial q_h}\,\delta q_h .
$$
I vincoli sono bilaterali, quindi le variazioni $\delta q_1, \dots, \delta q_n$ sono arbitrarie e indipendenti. Scegliendo $\delta q_h = 1$ e nulle tutte le altre si ottiene $\dfrac{\partial U}{\partial q_h} = 0$ per ogni $h$; viceversa, se tutte le derivate parziali sono nulle la somma è nulla per ogni scelta delle variazioni.
:::
::::

:::esempio{titolo="Configurazioni di equilibrio dell'asta con la molla"}
Per l'asta incernierata in $O$ con la molla fra $A$ e $B = (0, \ell)$ il potenziale calcolato in precedenza è
$$
U(\vartheta) = \left( \frac{m g \ell}{2} - k\,\ell^2 \right)\cos\vartheta - k\,\ell^2 ,
$$
quindi
$$
U'(\vartheta) = -\left( \frac{m g \ell}{2} - k\,\ell^2 \right)\sin\vartheta .
$$
Se $k \neq \dfrac{m g}{2 \ell}$ il coefficiente è diverso da zero, perciò l'equazione $U'(\vartheta) = 0$ equivale a $\sin\vartheta = 0$ e le configurazioni di equilibrio sono due, $\vartheta = 0$ con l'asta verticale verso il basso e $\vartheta = \pi$ con l'asta verticale verso l'alto. Se invece $k = \dfrac{m g}{2 \ell}$ il potenziale è costante, dunque **ogni configurazione è di equilibrio**: in quel caso il momento della molla rispetto a $O$ bilancia il momento del peso per ogni valore di $\vartheta$.

::grafico{f="0.6*cos(x)-1.2;-0.6*cos(x)-1.2;-1.2" xmin=-3.4 xmax=3.4 ymin=-2.1 ymax=-0.3 nomi="ϑ,U" legenda="k < \dfrac{mg}{2\ell};k > \dfrac{mg}{2\ell};k = \dfrac{mg}{2\ell}" titolo="Il potenziale $U(\vartheta)$ in unità di $k\,\ell^2$: i punti stazionari sono $\vartheta = 0$ e $\vartheta = \pi$, e nel caso $k = \dfrac{mg}{2\ell}$ il potenziale è costante"}

:::

:::attenzione
L'equazione $U'(\vartheta) = 0$ individua le configurazioni di equilibrio e non dice nulla sulla loro stabilità. Nell'esempio dell'asta con la molla, con $k < \dfrac{m g}{2 \ell}$ le due configurazioni $\vartheta = 0$ e $\vartheta = \pi$ sono entrambe di equilibrio, ma la prima è stabile e la seconda instabile. La stabilità si studia con il teorema di Lagrange-Dirichlet e con la matrice hessiana dell'energia potenziale, nell'argomento sull'equilibrio, la stabilità e le piccole oscillazioni.
:::

## Reazioni vincolari con i lavori virtuali

::::teorema{#reazione-vincolare-con-il-plv titolo="Calcolo di una reazione vincolare"}
Sia un sistema in equilibrio nella configurazione $C$, con vincoli ideali e bilaterali, e sia incognita la reazione $\vec{\Phi}$ di uno dei vincoli, applicata nel punto $P$. Si sopprime quel vincolo e si applica al sistema, in $P$, la forza $\vec{\Phi}$ come forza attiva. Il sistema così ottenuto ha più gradi di libertà, i suoi vincoli residui sono ancora ideali e bilaterali, e la configurazione $C$ è di equilibrio anche per esso; il principio dei lavori virtuali dà perciò
$$
\delta L^{(a)} + \vec{\Phi} \cdot \delta P = 0
$$
per ogni spostamento virtuale del sistema svincolato. Scegliendo gli spostamenti virtuali che le coordinate aggiunte rendono possibili si ottengono tante equazioni scalari quante sono le componenti incognite di $\vec{\Phi}$. Il metodo calcola una reazione alla volta, senza scrivere le equazioni cardinali di tutti i corpi del sistema.

:::dimostrazione
Si indichi con $S$ il sistema originario e con $S'$ quello privo del vincolo in esame. Nella configurazione $C$ il sistema $S$ è in equilibrio, dunque ogni suo punto ha risultante nulla delle forze che lo sollecitano. In $S'$ agiscono le stesse forze, perché la reazione soppressa è stata rimessa come forza attiva $\vec{\Phi}$; perciò in $C$ anche $S'$ è in equilibrio. I vincoli residui di $S'$ sono ideali e bilaterali, quindi il principio dei lavori virtuali si applica a $S'$ e dà l'annullarsi del lavoro virtuale di tutte le sue forze attive, che sono quelle di partenza insieme a $\vec{\Phi}$.
:::
::::

:::esempio{titolo="Reazione della cerniera dell'asta con la molla"}
Si calcola la reazione $\vec{\Phi}_O$ della cerniera nella configurazione di equilibrio $\vartheta = 0$ dell'asta con la molla. Si sopprime la cerniera e si applica in $O$ la forza $\vec{\Phi}_O$: l'asta libera nel piano ha tre gradi di libertà, e si considerano gli spostamenti virtuali di traslazione $\delta O = \delta x\,\hat{\imath} + \delta y\,\hat{\jmath}$, per i quali ogni punto dell'asta si sposta di $\delta O$. Nella configurazione $\vartheta = 0$ si ha $A = (0, -\ell)$ e $B = (0, \ell)$, perciò la molla ha lunghezza $2\ell$ ed esercita su $A$ la forza
$$
-k\,(A - B) = 2\,k\,\ell\,\hat{\jmath} ,
$$
diretta verso l'alto. Il peso $-m g\,\hat{\jmath}$ agisce in $G$. Il lavoro virtuale delle forze attive e di $\vec{\Phi}_O$ per la traslazione è
$$
\delta L = \Phi_{Ox}\,\delta x + \big( \Phi_{Oy} + 2\,k\,\ell - m g \big)\,\delta y = 0 ,
$$
e poiché $\delta x$ e $\delta y$ sono arbitrari e indipendenti si ottiene
$$
\Phi_{Ox} = 0 ,
\qquad
\Phi_{Oy} = m g - 2\,k\,\ell .
$$
La reazione è **verticale**, diretta verso l'alto se $k < \dfrac{m g}{2 \ell}$ e verso il basso se $k > \dfrac{m g}{2 \ell}$, perché nel secondo caso la molla tira l'asta verso l'alto più di quanto pesi e la cerniera la trattiene. Le equazioni cardinali della statica danno lo stesso risultato: la traslazione verticale è $\Phi_{Oy} - m g + 2\,k\,\ell = 0$, mentre la rotazione attorno a $O$ è identicamente soddisfatta, poiché peso e forza elastica hanno retta d'azione passante per $O$.

::struttura{nodi="O,0,0;A,0,-4" aste="O-A" punti="0,-2,G,baricentro" forze="0 -2,0,-0.55,mg;A,0,0.8,2kℓ" reazioni="O,0,0.7,Φ_Oy" titolo="Diagramma di corpo libero dell'asta nella configurazione $\vartheta = 0$, con la reazione della cerniera nel secondo colore"}

:::

## Equilibrio con vincoli unilaterali

:::definizione{#configurazioni-di-confine titolo="Configurazioni ordinarie e di confine"}
Sia un sistema con vincoli unilaterali, espressi da disuguaglianze $f_j(q) \geq 0$. Una configurazione si dice **ordinaria** se in essa tutte le disuguaglianze sono soddisfatte in senso stretto, e **di confine** se almeno una di esse è soddisfatta con l'uguaglianza. In una configurazione ordinaria gli spostamenti virtuali sono tutti invertibili, perché le piccole variazioni delle coordinate in entrambi i versi mantengono le disuguaglianze; in una configurazione di confine gli spostamenti che abbandonano il vincolo attivo sono virtuali, mentre quelli opposti non lo sono. Un'asta appoggiata su un piano sta in una configurazione di confine, e lo spostamento che la solleva è virtuale e non invertibile.
:::

::::teorema{#equilibrio-vincoli-unilaterali titolo="Equilibrio con vincoli unilaterali"}
Sia un sistema a vincoli olonomi fissi e ideali, con vincoli anche unilaterali, e sia la sollecitazione attiva conservativa con potenziale $U$. Una configurazione è di equilibrio se e solo se
$$
\sum_{h=1}^{n} \frac{\partial U}{\partial q_h}\,\delta q_h \leq 0
$$
per ogni spostamento virtuale. In una configurazione ordinaria la condizione equivale all'annullarsi di tutte le derivate parziali di $U$; in una configurazione di confine resta la disuguaglianza, che si traduce in una condizione sui dati del problema. Negli esercizi la disuguaglianza fornisce la **condizione di non distacco** di un appoggio unilaterale, e il valore dei dati che la rende un'uguaglianza individua il distacco.

:::dimostrazione
Per il principio dei lavori virtuali la configurazione è di equilibrio se e solo se $\delta L^{(a)} \leq 0$ per ogni spostamento virtuale. La sollecitazione è conservativa e i vincoli sono fissi, quindi $\delta L^{(a)} = \sum_h \dfrac{\partial U}{\partial q_h}\,\delta q_h$, da cui la condizione dell'enunciato. In una configurazione ordinaria ogni spostamento virtuale è invertibile, perciò dalla disuguaglianza applicata a $\delta q$ e a $-\delta q$ segue l'uguaglianza a zero, e si ricade sul caso bilaterale.
:::
::::

:::esempio{titolo="Distacco di un appoggio"}
Un'asta omogenea $AB$, di massa $m$ e lunghezza $2\ell$, è incernierata in $A$ e appoggiata in $B$ su un piano orizzontale che può solo spingerla verso l'alto; sull'asta agisce una coppia di momento $\mathcal{M}$ in verso antiorario. Il sistema ha un grado di libertà, l'angolo $\vartheta$ di rotazione attorno ad $A$, e gli spostamenti virtuali a partire dalla configurazione orizzontale sono quelli con $\delta\vartheta \geq 0$, perché l'appoggio impedisce a $B$ di scendere. Il centro di massa si trova a distanza $\ell$ da $A$, quindi $\delta y_G = \ell\,\delta\vartheta$ e
$$
\delta L^{(a)} = -m g\,\ell\,\delta\vartheta + \mathcal{M}\,\delta\vartheta = (\mathcal{M} - m g \ell)\,\delta\vartheta .
$$
La condizione $\delta L^{(a)} \leq 0$ per ogni $\delta\vartheta \geq 0$ equivale a
$$
\mathcal{M} \leq m g \ell ,
$$
e per $\mathcal{M} = m g \ell$ l'appoggio è sul punto di distaccarsi, perché la sua reazione si annulla. Le equazioni cardinali danno la stessa conclusione: la rotazione attorno ad $A$ è $2\ell\,\Phi_B - m g \ell + \mathcal{M} = 0$, quindi $\Phi_B = \dfrac{m g \ell - \mathcal{M}}{2\ell}$, e la reazione dell'appoggio è diretta verso l'alto se e solo se $\mathcal{M} \leq m g \ell$.

::struttura{nodi="A,0,0;B,3.4,0" aste="A-B" vincoli="A,cerniera" linee="2.85,-0.16 3.95,-0.16" punti="1.7,0,G,baricentro" forze="1.7 0,0,-0.9,mg" coppie="2.55 0.6,1,ℳ" frecce="3.4,0,3.4,0.65,δy_B" quote="A,1.7 0,ℓ,0.95;1.7 0,B,ℓ,0.95" titolo="Asta incernierata in $A$ e appoggiata in $B$: lo spostamento virtuale solleva $B$ e la condizione $\delta L^{(a)} \leq 0$ dà $\mathcal{M} \leq m g \ell$"}

:::
