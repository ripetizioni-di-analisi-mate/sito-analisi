---
titolo: Cinematica dei fluidi, portata ed equazione di continuità
sommario: Il campo di velocità, le linee di corrente e i tubi di flusso, la portata e la velocità media di una corrente, l'equazione di continuità per un tubo di flusso e per un nodo, i coefficienti di ragguaglio, il numero di Reynolds e la forma locale della continuità.
---

## Il campo di velocità

Nella statica dei fluidi il liquido è in quiete e la pressione dipende solo dalla quota. In un fluido in moto la velocità cambia da punto a punto e, in generale, anche nel tempo; la cinematica descrive questo cambiamento, senza introdurre le forze che lo producono.

:::definizione{#campo-di-velocita titolo="Campo di velocità"}
Sia un fluido in moto in una regione dello spazio. Si chiama **campo di velocità** la funzione che a ogni punto $P = (x, y, z)$ della regione e a ogni istante $t$ associa la velocità della particella di fluido che in quell'istante occupa quel punto:
$$
\vec{v}(x, y, z, t) = v_x\,\hat{i} + v_y\,\hat{j} + v_z\,\hat{k} .
$$
Questa descrizione si dice **euleriana**, perché fissa i punti dello spazio e osserva il fluido che li attraversa; la descrizione *lagrangiana* segue invece nel tempo ogni singola particella. In Idraulica si usa la prima, dato che le grandezze misurate e progettate (portata, pressione, carico) sono riferite a sezioni fisse di una condotta o di un canale. In una condotta rettilinea percorsa da una portata costante la velocità in un punto fissato non cambia nel tempo e dipende solo dalla distanza di quel punto dall'asse.
:::

:::definizione{#traiettoria-e-linea-di-corrente titolo="Traiettoria e linea di corrente"}
La **traiettoria** di una particella è la curva che essa descrive nel tempo, cioè la soluzione del problema di Cauchy
$$
\frac{d\vec{x}}{dt} = \vec{v}(\vec{x}, t), \qquad \vec{x}(t_0) = \vec{x}_0 .
$$
La **linea di corrente** relativa all'istante $t$ è invece una curva che in ogni suo punto è tangente alla velocità in quell'istante. Per un moto piano la condizione di tangenza si scrive
$$
\frac{dx}{v_x} = \frac{dy}{v_y} ,
$$
cioè $\dfrac{dy}{dx} = \dfrac{v_y}{v_x}$, che è un'equazione differenziale del primo ordine nella funzione $y(x)$, con $t$ tenuto fisso come parametro. La traiettoria riguarda una particella e un intervallo di tempo; la linea di corrente riguarda un istante e tutto il campo. Le linee di corrente si rendono visibili seminando nel fluido particelle galleggianti e fotografandole con un tempo breve di esposizione, poiché ogni particella lascia un trattino diretto come la sua velocità. Il filetto di colorante immesso in un punto fisso disegna invece la stessa curva solo se il moto è permanente.
:::

:::esempio{titolo="Linee di corrente di un campo assegnato"}
Sia $\vec{v} = (k\,x,\,-k\,y)$ con $k = 0{,}5\,\mathrm{s^{-1}}$, in moto piano, con le coordinate in metri. L'equazione delle linee di corrente è
$$
\frac{dy}{dx} = \frac{-k\,y}{k\,x} = -\frac{y}{x} ,
$$
che è a variabili separabili, quindi $\dfrac{dy}{y} = -\dfrac{dx}{x}$ e, integrando, $\ln|y| = -\ln|x| + c$. Le linee di corrente sono perciò le iperboli $x\,y = \mathrm{costante}$. Nel punto $(2;\,1)$ la velocità ha componenti $1{,}00\,\mathrm{m/s}$ e $-0{,}50\,\mathrm{m/s}$, quindi modulo $1{,}12\,\mathrm{m/s}$, e la linea di corrente che passa per quel punto è $x\,y = 2$.
:::

## Moto permanente, moto vario e moto uniforme

Le due classificazioni che seguono separano i casi in cui le grandezze dipendono dal tempo da quelli in cui dipendono dalla posizione lungo la corrente, e ricorrono in tutti gli argomenti successivi.

:::definizione{#moto-permanente titolo="Moto permanente e moto vario"}
Il moto si dice **permanente** (o stazionario) se in ogni punto fissato dello spazio la velocità, e con essa la pressione, non cambiano nel tempo:
$$
\frac{\partial \vec{v}}{\partial t} = \vec{0} .
$$
Si dice **vario** nel caso opposto. In moto permanente una particella cambia velocità mentre si sposta, perché la velocità dipende dal punto, ma ciò che si misura in una sezione fissata resta lo stesso in ogni istante. Il moto in una condotta alimentata da un serbatoio a livello costante è permanente; lo svuotamento di un serbatoio, la manovra di una saracinesca e il passaggio di un'onda di piena sono moti vari. Quasi tutto il calcolo delle condotte e dei canali si svolge in moto permanente, perciò questa ipotesi va dichiarata in ogni problema.
:::

:::osservazione{#traiettorie-nel-permanente titolo="Traiettorie e linee di corrente in moto permanente"}
Se il moto è permanente, il campo $\vec{v}$ non dipende da $t$, quindi le linee di corrente sono le stesse in ogni istante. Una particella che parte da un punto di una linea di corrente ha in quel punto velocità tangente alla linea e la mantiene tangente mentre avanza, perciò la sua traiettoria coincide con la linea di corrente. In moto vario le due famiglie di curve sono in generale distinte, dato che la linea di corrente cambia forma mentre la particella si muove.
:::

:::definizione{#moto-uniforme titolo="Moto uniforme e moto non uniforme"}
Fissata una direzione $s$ lungo la corrente, il moto si dice **uniforme** se la velocità non cambia al variare di $s$:
$$
\frac{\partial \vec{v}}{\partial s} = \vec{0} ,
$$
cioè se tutte le sezioni trasversali hanno la stessa forma, la stessa area e la stessa distribuzione di velocità. Si dice **non uniforme** nel caso opposto. In una condotta cilindrica di diametro costante, lontano dall'imbocco e dalle curve, il moto permanente è anche uniforme, e le linee di corrente sono rette parallele all'asse. In un canale a sezione costante e pendenza costante il moto uniforme corrisponde a un'altezza d'acqua costante lungo il percorso, trattata nell'argomento sulle correnti a pelo libero.
:::

## Tubi di flusso e correnti lineari

:::definizione{#tubo-di-flusso titolo="Tubo di flusso"}
Sia $\ell$ una curva chiusa tracciata nel fluido, non tangente alle linee di corrente. L'insieme delle linee di corrente che passano per i punti di $\ell$ forma una superficie, detta **superficie laterale**, e la regione di fluido da essa racchiusa si chiama **tubo di flusso**. In ogni punto della superficie laterale la velocità è tangente alla superficie, quindi la sua componente normale è nulla e attraverso quella superficie non passa fluido. Il tubo di flusso si comporta perciò come un condotto con pareti impermeabili, e tutto il fluido che entra da una sua sezione esce dall'altra. Questa proprietà è l'ipotesi su cui si ricava l'equazione di continuità; una condotta in pressione, con il tubo che fa da superficie laterale, è un tubo di flusso.

::schema{acqua="0,0.5 2,0.7 4,1.1 6,1.5 6,3.1 4,2.9 2,2.6 0,2.4" tratteggi="0,0.5 0,2.4;6,1.5 6,3.1" linee="0,1.1 2,1.3 4,1.7 6,2.1;0,1.8 2,2.0 4,2.3 6,2.6" frecce="0.2,1.2,1.4,1.3,v_1;5.0,2.4,6.3,2.5,v_2" etichette="-0.7,1.45,A_1;6.8,1.25,A_2" riferimento=0 titolo="Tubo di flusso tra le sezioni di area $A_1$ e $A_2$: attraverso la superficie laterale, formata da linee di corrente, non passa fluido"}
:::

:::definizione{#corrente-lineare titolo="Corrente lineare e sezione trasversale"}
Una corrente si dice **lineare** (o gradualmente variata) se le linee di corrente sono rette parallele, oppure curve a grande raggio di curvatura e poco divergenti fra loro. Si chiama **sezione trasversale** una superficie piana normale alle linee di corrente; in una condotta circolare è il cerchio di diametro $D$, in un canale è la sezione bagnata. In una corrente lineare l'accelerazione normale alle linee di corrente è trascurabile, perciò nella sezione trasversale la pressione varia con la quota secondo la legge di Stevin, come in un fluido in quiete. Questa proprietà rende il carico piezometrico $h = z + \dfrac{p}{\gamma}$ costante su tutta la sezione e permette di scrivere il teorema di Bernoulli per la corrente, come si vede nell'argomento sul teorema di Bernoulli. Nelle sezioni in cui le linee di corrente sono fortemente curve, come in un gomito o subito a valle di una luce, la corrente non è lineare e la pressione nella sezione non segue la legge di Stevin.

::schema{nodi="A,0,0,-;B,7,0,-" condotte="A-B,1.0" tratteggi="3.5,-0.5 3.5,0.5" frecce="1.0,0,2.2,0,v" etichette="3.5,0.82,A" riferimento=0 titolo="Corrente lineare in una condotta cilindrica: la sezione trasversale di area $A$ è normale alle linee di corrente"}
:::

## Portata e velocità media

:::richiamo{titolo="Flusso di un campo vettoriale attraverso una superficie"}
Sia $A$ una superficie regolare orientata dal versore normale $\hat{n}$ e sia $\vec{v}$ un campo vettoriale continuo su $A$. Il flusso di $\vec{v}$ attraverso $A$ è
$$
\Phi = \int_A \vec{v} \cdot \hat{n}\,dA .
$$
Si rimanda all'argomento sulle superfici, i flussi e i teoremi di Gauss e Stokes di Analisi 2.
:::

:::definizione{#portata titolo="Portata"}
Sia $A$ una superficie attraversata da un fluido e sia $\hat{n}$ il versore normale ad $A$ orientato nel verso del moto. Si chiama **portata** (volumetrica) il volume di fluido che attraversa $A$ nell'unità di tempo, cioè il flusso della velocità attraverso $A$:
$$
Q = \int_A \vec{v} \cdot \hat{n}\,dA ,
$$
misurato in $\mathrm{m^3/s}$; per le portate piccole si usa il litro al secondo, con $1\,\mathrm{L/s} = 10^{-3}\,\mathrm{m^3/s}$. Se $A$ è una sezione trasversale di una corrente lineare, la velocità è normale alla sezione in ogni punto, quindi $\vec{v} \cdot \hat{n} = v$ e
$$
Q = \int_A v\,dA .
$$
Il prodotto $v\,dA$ è il volume che attraversa l'elemento $dA$ in un secondo, perché in un secondo le particelle che partono da $dA$ percorrono il cammino $v$ e descrivono un cilindro di base $dA$ e altezza $v$. La portata è la grandezza di progetto di ogni opera idraulica, dato che fissa le dimensioni delle condotte e dei canali.
:::

:::definizione{#portata-massica titolo="Portata massica"}
Si chiama **portata massica** la massa di fluido che attraversa la superficie $A$ nell'unità di tempo:
$$
Q_m = \int_A \rho\,\vec{v} \cdot \hat{n}\,dA ,
$$
misurata in $\mathrm{kg/s}$. Se la densità è la stessa in tutti i punti della sezione, risulta $Q_m = \rho\,Q$; per l'acqua, con $\rho = 1000\,\mathrm{kg/m^3}$, una portata di $45\,\mathrm{L/s}$ corrisponde a una portata massica di $45\,\mathrm{kg/s}$. La portata massica serve nei bilanci di massa dei fluidi comprimibili e nel calcolo delle forze che una corrente esercita sulle pareti, trattato nell'argomento sull'equazione globale.
:::

:::definizione{#velocita-media titolo="Velocità media"}
Si chiama **velocità media** nella sezione di area $A$ il rapporto
$$
v = \frac{Q}{A} = \frac{1}{A}\int_A v\,dA .
$$
È la velocità uniforme che, distribuita su tutta la sezione, darebbe la stessa portata. Nei calcoli delle condotte e dei canali il simbolo $v$ indica sempre questa velocità media, e la velocità nel singolo punto si indica con $u$ quando le due compaiono insieme. Da $Q = A\,v$ si ricava la velocità nota la portata, oppure l'area necessaria a smaltire una portata assegnata con una velocità data: per $Q = 120\,\mathrm{L/s}$ e una velocità di $1{,}50\,\mathrm{m/s}$ serve $A = 0{,}0800\,\mathrm{m^2}$, cioè un diametro di almeno $0{,}319\,\mathrm{m}$.
:::

:::attenzione
La relazione $Q = A\,v$ vale per una sezione normale alle linee di corrente. Attraverso una sezione obliqua passa la stessa portata, perché il fluido che entra dalla sezione normale esce da quella obliqua, mentre il prodotto dell'area obliqua per la velocità è maggiore della portata. In una condotta di diametro $200\,\mathrm{mm}$ con velocità media $1{,}43\,\mathrm{m/s}$ la portata è $0{,}0450\,\mathrm{m^3/s}$; una sezione inclinata di $30^\circ$ sulla normale ha area $\dfrac{0{,}0314}{\cos 30^\circ} = 0{,}0363\,\mathrm{m^2}$ e il prodotto per la velocità dà $0{,}0519\,\mathrm{m^3/s}$. Il flusso attraverso quella sezione resta $0{,}0450\,\mathrm{m^3/s}$, perché la velocità forma con la sua normale l'angolo di $30^\circ$ e il prodotto scalare introduce il fattore $\cos 30^\circ$.

::schema{nodi="A,0,0,-;B,7,0,-" condotte="A-B,1.0" tratteggi="2.6,-0.5 2.6,0.5;5.18,-0.5 4.6,0.5" frecce="1.0,0,2.0,0,v" etichette="2.6,0.82,A;5.0,0.82,A′" riferimento=0 titolo="La sezione normale di area $A$ e la sezione obliqua di area $A'$ sono attraversate dalla stessa portata"}
:::

## L'equazione di continuità

::::teorema{#equazione-di-continuita titolo="Equazione di continuità per un tubo di flusso"}
Sia un fluido incomprimibile in moto permanente in un tubo di flusso, e siano $A_1$ e $A_2$ le aree di due sezioni trasversali, con velocità medie $v_1$ e $v_2$. Allora la portata è la stessa nelle due sezioni:
$$
Q = A_1 v_1 = A_2 v_2 .
$$
Di conseguenza le velocità medie sono inversamente proporzionali alle aree: dove la sezione si restringe la velocità aumenta, dove si allarga diminuisce. Per una condotta circolare, con $A = \dfrac{\pi D^2}{4}$, risulta
$$
\frac{v_2}{v_1} = \frac{A_1}{A_2} = \left(\frac{D_1}{D_2}\right)^{\!2} ,
$$
quindi un dimezzamento del diametro quadruplica la velocità media. In una condotta di diametro $300\,\mathrm{mm}$ con velocità media $0{,}700\,\mathrm{m/s}$ la portata è $0{,}0495\,\mathrm{m^3/s}$ e nel tratto di diametro $150\,\mathrm{mm}$ la velocità media diventa $2{,}80\,\mathrm{m/s}$.

:::dimostrazione
L'idea è contare il volume che entra e quello che esce dalla regione compresa fra le due sezioni in un intervallo di tempo $dt$, e usare il fatto che il volume della regione non cambia.

Si prenda come volume di controllo la regione $V$ racchiusa dalla superficie laterale del tubo e dalle due sezioni. Nell'intervallo $dt$ attraversa la sezione $1$ il volume $A_1 v_1\,dt$, perché le particelle che si trovano su quella sezione avanzano di $v_1\,dt$; analogamente dalla sezione $2$ esce il volume $A_2 v_2\,dt$. Attraverso la superficie laterale non passa fluido, poiché in ogni suo punto la velocità è tangente alla superficie.

Il fluido è incomprimibile, quindi la sua densità è costante e la massa contenuta in $V$ è proporzionale al volume di fluido contenuto in $V$, che è il volume di $V$ stesso, costante nel tempo. Il moto è permanente, perciò la massa contenuta in $V$ non cambia da un istante all'altro. Ne segue che il volume entrato e il volume uscito nello stesso intervallo $dt$ sono uguali:
$$
A_1 v_1\,dt = A_2 v_2\,dt ,
$$
e dividendo per $dt$ si ottiene $A_1 v_1 = A_2 v_2$. Le due sezioni sono arbitrarie, quindi la portata ha lo stesso valore in ogni sezione del tubo di flusso.
:::
::::

:::esempio{titolo="Condotta con un restringimento"}
Una condotta porta $Q = 80\,\mathrm{L/s}$ con diametro $300\,\mathrm{mm}$ e termina con un boccaglio dal quale l'acqua esce con velocità $8{,}00\,\mathrm{m/s}$. Nella condotta la velocità media è
$$
v_1 = \frac{Q}{A_1} = \frac{0{,}0800}{0{,}0707}\,\mathrm{m/s} = 1{,}13\,\mathrm{m/s} ,
$$
mentre l'area della sezione di uscita è $A_2 = \dfrac{Q}{v_2} = \dfrac{0{,}0800}{8{,}00} = 0{,}0100\,\mathrm{m^2}$, cioè un diametro di $0{,}113\,\mathrm{m}$. La portata resta $80\,\mathrm{L/s}$ in entrambe le sezioni, mentre la velocità media cresce di sette volte.

::schema{nodi="A,0,0,-;B,3,0,-;C,3.8,0,-;D,7,0,-" condotte="A-B,1.2,D_1;C-D,0.6,D_2" linee="3,0.6 3.8,0.3;3,-0.6 3.8,-0.3" frecce="1.7,0,2.9,0,v_1;4.9,0,6.1,0,v_2" tratteggi="0.6,-0.65 0.6,0.65;6.6,-0.35 6.6,0.35" etichette="0.6,0.92,1;6.6,0.62,2" riferimento=0 titolo="Restringimento: la portata nelle sezioni $1$ e $2$ è la stessa, quindi $A_1 v_1 = A_2 v_2$"}
:::

::::teorema{#continuita-piu-rami titolo="Continuità in un nodo"}
Sia un nodo nel quale confluiscono più tubi di flusso, percorsi da un fluido incomprimibile in moto permanente, e sia nullo l'accumulo di fluido nel nodo. Allora la somma delle portate entranti uguaglia la somma delle portate uscenti:
$$
\sum_i Q_{i,\,\mathrm{entranti}} = \sum_j Q_{j,\,\mathrm{uscenti}} .
$$
Con la convenzione di contare positive le portate entranti e negative quelle uscenti, la condizione si scrive $\sum_k Q_k = 0$. Questa equazione è una delle due famiglie di equazioni con cui si risolvono le reti di condotte, insieme a quelle delle perdite di carico lungo le maglie, come si vede nell'argomento sui sistemi di condotte. In un nodo che riceve $120\,\mathrm{L/s}$ e ne manda $70\,\mathrm{L/s}$ in un primo ramo, il secondo ramo porta $50\,\mathrm{L/s}$.

::schema{nomi=0 nodi="N,0,0;A,-3.2,0;B,3,1.7;C,3,-1.7" condotte="A-N,0.7,D_1;N-B,0.5,D_2;N-C,0.45,D_3" frecce="-2.8,0,-1.6,0,Q_1;2.0,1.13,2.9,1.64,Q_2;2.0,-1.13,2.9,-1.64,Q_3" riferimento=0 titolo="Nodo con un ramo entrante e due uscenti: $Q_1 = Q_2 + Q_3$"}

:::dimostrazione
Si prenda come volume di controllo una regione $V$ che contiene il nodo e taglia ogni ramo in una sezione trasversale. In un intervallo $dt$ entra in $V$ il volume $\sum_i A_i v_i\,dt$ dalle sezioni di ingresso ed esce il volume $\sum_j A_j v_j\,dt$ da quelle di uscita, mentre attraverso le pareti non passa fluido. Il fluido è incomprimibile e il moto è permanente, quindi il volume di fluido contenuto in $V$ non cambia nel tempo, e perciò i due volumi sono uguali. Dividendo per $dt$ e ricordando che $Q = A\,v$ si ottiene l'uguaglianza delle somme delle portate.
:::
::::

:::osservazione{#continuita-comprimibile titolo="Correnti di fluidi comprimibili"}
Se la densità cambia da una sezione all'altra, il bilancio di massa sostituisce quello di volume e la grandezza che si conserva lungo un tubo di flusso in moto permanente è la portata massica:
$$
Q_m = \rho_1 A_1 v_1 = \rho_2 A_2 v_2 .
$$
La portata volumetrica $Q = A\,v$ invece cambia da sezione a sezione, perché lo stesso chilogrammo di fluido occupa volumi diversi dove la densità è diversa. In un condotto d'aria che passa da $300\,\mathrm{mm}$ a $250\,\mathrm{mm}$ di diametro, con $\rho_1 = 1{,}20\,\mathrm{kg/m^3}$, $v_1 = 12{,}0\,\mathrm{m/s}$ e $\rho_2 = 1{,}60\,\mathrm{kg/m^3}$, la portata massica è $1{,}02\,\mathrm{kg/s}$ e la velocità nella seconda sezione è $13{,}0\,\mathrm{m/s}$. Nell'Idraulica dell'acqua la densità si considera costante, quindi si usa la forma volumetrica; la forma massica serve per i gas e per i liquidi con forti variazioni di temperatura.
:::

## Distribuzione della velocità e coefficienti di ragguaglio

La velocità media riassume la sezione in un solo numero. Nelle espressioni dell'energia e della quantità di moto compaiono invece il cubo e il quadrato della velocità puntuale, le cui medie sulla sezione superano il cubo e il quadrato della velocità media.

:::osservazione{#distribuzione-della-velocita titolo="Distribuzione della velocità nella sezione"}
Per la viscosità, il fluido aderisce alle pareti, quindi la velocità è nulla sul contorno e massima sull'asse di una condotta o vicino alla superficie libera di un canale. In moto laminare, in una condotta circolare, la distribuzione è parabolica con il massimo sull'asse. In moto turbolento il mescolamento trasversale rende la distribuzione molto più appiattita, con una variazione rapida in un sottile strato vicino alla parete e valori quasi uniformi nella parte centrale; una forma spesso usata per rappresentarla è $u = u_{\max}\left(1 - \dfrac{r}{r_0}\right)^{1/n}$, dove $r_0$ è il raggio della condotta e $n$ è compreso fra $6$ e $10$. Le due distribuzioni sono misurate in laboratorio con tubi di Pitot o con anemometri; la loro forma si ricava per via teorica solo nel caso laminare, nell'argomento sulle perdite di carico.

::grafico{f="1-x^2;(1-abs(x))^(1/7)" xmin=-1 xmax=1 ymin=0 ymax=1.2 nomi="r/r_0,u/uₘₐₓ" titolo="Distribuzione della velocità in una condotta circolare: parabolica in moto laminare (curva piena), appiattita in moto turbolento (curva tratteggiata)"}
:::

:::definizione{#coefficienti-di-ragguaglio titolo="Coefficienti di ragguaglio"}
Sia $u$ la velocità nel punto generico della sezione di area $A$ e sia $v = \dfrac{Q}{A}$ la velocità media. Si chiamano **coefficienti di ragguaglio** i due numeri
$$
\alpha = \frac{1}{A\,v^3}\int_A u^3\,dA ,
\qquad
\beta = \frac{1}{A\,v^2}\int_A u^2\,dA .
$$
Il primo compare nell'altezza cinetica della corrente, che vale $\alpha\,\dfrac{v^2}{2g}$, e corregge l'energia cinetica calcolata con la velocità media; il secondo compare nel flusso di quantità di moto attraverso la sezione, che vale $\beta\,\rho\,Q\,v$. Entrambi valgono $1$ se la velocità è uniforme sulla sezione e sono maggiori di $1$ in ogni altro caso, per la disuguaglianza fra la media di una potenza e la potenza della media. Servono a scrivere il teorema di Bernoulli e l'equazione globale per una corrente reale, nella quale la velocità non è uniforme.
:::

:::esempio{titolo="Distribuzione parabolica in moto laminare"}
In una condotta circolare di raggio $R$, in moto laminare, la velocità a distanza $r$ dall'asse è $u = u_{\max}\left(1 - \dfrac{r^2}{R^2}\right)$. Con l'elemento d'area dell'anello $dA = 2\pi r\,dr$ la portata è
$$
Q = \int_0^{r_0} u_{\max}\left(1 - \frac{r^2}{r_0^2}\right) 2\pi r\,dr = 2\pi u_{\max}\left[\frac{r^2}{2} - \frac{r^4}{4 r_0^2}\right]_0^{r_0} = \frac{\pi r_0^2 u_{\max}}{2} ,
$$
quindi la velocità media è $v = \dfrac{Q}{\pi r_0^2} = \dfrac{u_{\max}}{2}$. Con gli stessi integrali si ottengono
$$
\alpha = 2 , \qquad \beta = \frac{4}{3} ,
$$
valori che valgono per ogni condotta circolare in moto laminare, poiché non dipendono né da $r_0$ né da $u_{\max}$.
:::

:::osservazione{#valori-dei-coefficienti titolo="Valori dei coefficienti nelle correnti reali"}
Le misure nelle condotte in moto turbolento danno $\alpha$ fra $1{,}03$ e $1{,}10$ e $\beta$ fra $1{,}01$ e $1{,}05$, perché la distribuzione appiattita è vicina a quella uniforme; nei canali con distribuzione poco regolare $\alpha$ arriva a $1{,}3$. Nei problemi di condotte in pressione si assume perciò $\alpha = \beta = 1$, e in tutta la materia questa è la convenzione, salvo indicazione contraria del testo. Il moto laminare, con $\alpha = 2$, è l'unico caso in cui l'approssimazione introduce un errore grande; lo si incontra negli oli e nelle condotte di piccolo diametro.
:::

## Moto laminare e moto turbolento

:::osservazione{#esperienza-di-reynolds titolo="Esperienza di Reynolds"}
Nell'esperienza di Reynolds un serbatoio a livello costante alimenta un tubo di vetro orizzontale, nel cui imbocco un ago immette un filetto di liquido colorato; una valvola di scarico regola la portata. A portate piccole il filetto resta rettilineo e sottile per tutta la lunghezza del tubo, cioè le particelle si muovono su traiettorie parallele all'asse e gli strati di fluido scorrono senza mescolarsi: il moto si dice **laminare**. Aumentando la portata, oltre un certo valore il filetto comincia a oscillare e poi si disperde rapidamente in tutta la sezione, perché alla velocità media si sovrappongono fluttuazioni disordinate nelle tre direzioni: il moto si dice **turbolento**. Il passaggio da un regime all'altro avviene allo stesso valore di una combinazione adimensionale di velocità, diametro e viscosità, qualunque siano il liquido e il tubo usati.

::schema{acqua="0,0.6 3,0.6 3,3.4 0,3.4" solidi="-0.25,0.35 0,0.35 0,3.6 -0.25,3.6;-0.25,0.35 3.25,0.35 3.25,0.6 -0.25,0.6;3,1.75 3.25,1.75 3.25,3.6 3,3.6;3,0.6 3.25,0.6 3.25,1.25 3,1.25" pelo="0,3,3.4" nodi="A,3,1.5,-;B,9,1.5,-" condotte="A-B,0.5" linee="1.2,4.1 1.2,1.56 9,1.56" frecce="6.3,1.36,7.6,1.36,v" etichette="1.2,4.45,colorante;6.2,2.3,filetto colorato" riferimento=0 titolo="Apparecchio di Reynolds: in moto laminare il filetto colorato resta rettilineo lungo tutto il tubo"}
:::

:::definizione{#numero-di-reynolds titolo="Numero di Reynolds"}
Sia una condotta circolare di diametro $D$ percorsa con velocità media $v$ da un fluido di viscosità cinematica $\nu$. Si chiama **numero di Reynolds** il rapporto adimensionale
$$
Re = \frac{v\,D}{\nu} .
$$
Esso misura il peso delle forze d'inerzia rispetto a quelle viscose: valori piccoli indicano una corrente governata dalla viscosità, valori grandi una corrente nella quale prevale l'inerzia. Dato che $v = \dfrac{4Q}{\pi D^2}$, il numero di Reynolds si calcola anche direttamente dalla portata:
$$
Re = \frac{4\,Q}{\pi\,D\,\nu} .
$$
Per l'acqua a $20\,^\circ\mathrm{C}$, con $\nu = 10^{-6}\,\mathrm{m^2/s}$, una condotta di diametro $200\,\mathrm{mm}$ percorsa da $45\,\mathrm{L/s}$ ha velocità media $1{,}43\,\mathrm{m/s}$ e $Re = 2{,}86 \cdot 10^5$.
:::

:::osservazione{#valori-critici titolo="Valori critici del numero di Reynolds"}
Le misure nelle condotte circolari danno questi intervalli:

- $Re < 2000$: moto laminare stabile;
- $2000 < Re < 4000$: regime di transizione, nel quale il moto passa da un regime all'altro ed è sensibile ai disturbi dell'imbocco e alle vibrazioni;
- $Re > 4000$: moto turbolento.

Il valore $2000$ è il limite inferiore oltre il quale un disturbo si amplifica; con tubi molto lisci e imbocchi accurati il moto laminare è stato mantenuto fino a $Re$ dell'ordine di $10^4$, perciò il valore critico dipende dalle condizioni dell'esperienza e i tre intervalli si usano come riferimento pratico. Le condotte d'acqua degli acquedotti hanno $Re$ fra $10^5$ e $10^6$, quindi lavorano in regime turbolento; il moto laminare si incontra negli oli, nei filtri e nei mezzi porosi. Dal regime dipende la formula con cui si calcolano le perdite di carico, come si vede nell'argomento sulle perdite di carico.
:::

:::osservazione{#diametro-equivalente titolo="Sezioni non circolari"}
Per una sezione non circolare, di area $A$ e contorno bagnato $C$, si definisce il raggio idraulico $R = \dfrac{A}{C}$, che per una condotta circolare piena vale $\dfrac{D}{4}$. Nelle sezioni non circolari si usa perciò come lunghezza di riferimento il **diametro equivalente** $D_e = 4R$, e il numero di Reynolds diventa
$$
Re = \frac{v\,D_e}{\nu} = \frac{4\,v\,R}{\nu} .
$$
Un condotto rettangolare di lati $0{,}600\,\mathrm{m}$ e $0{,}400\,\mathrm{m}$ ha $A = 0{,}240\,\mathrm{m^2}$, $C = 2{,}00\,\mathrm{m}$, $R = 0{,}120\,\mathrm{m}$ e $D_e = 0{,}480\,\mathrm{m}$; percorso da $200\,\mathrm{L/s}$ d'acqua ha velocità media $0{,}833\,\mathrm{m/s}$ e $Re = 4{,}00 \cdot 10^5$. La sostituzione del diametro con $4R$ è un criterio pratico, verificato dalle misure per sezioni compatte; per sezioni molto allungate dà risultati meno precisi.
:::

## L'equazione di continuità in forma locale

L'equazione $A_1 v_1 = A_2 v_2$ lega fra loro due sezioni di una corrente. La stessa conservazione del volume si può scrivere come condizione sul campo di velocità in ogni punto.

:::richiamo{titolo="Teorema della divergenza"}
Sia $V$ un dominio regolare di $\mathbb{R}^3$ con frontiera $\partial V$ orientata dalla normale esterna $\hat{n}$, e sia $\vec{v}$ un campo vettoriale di classe $C^1$ su $V$. Allora
$$
\int_{\partial V} \vec{v} \cdot \hat{n}\,dA = \int_V \operatorname{div}\vec{v}\;dV ,
\qquad
\operatorname{div}\vec{v} = \frac{\partial v_x}{\partial x} + \frac{\partial v_y}{\partial y} + \frac{\partial v_z}{\partial z} .
$$
Si rimanda all'argomento sulle superfici, i flussi e i teoremi di Gauss e Stokes di Analisi 2.
:::

::::teorema{#continuita-locale titolo="Equazione di continuità in forma locale"}
Sia $\vec{v}$ il campo di velocità di un fluido incomprimibile, di classe $C^1$ in una regione $\Omega$. Allora in ogni punto di $\Omega$
$$
\operatorname{div}\vec{v} = \frac{\partial v_x}{\partial x} + \frac{\partial v_y}{\partial y} + \frac{\partial v_z}{\partial z} = 0 .
$$
La condizione vale anche in moto vario, perché il volume di una porzione di fluido incomprimibile non cambia in nessun istante. Serve a riconoscere se un campo di velocità assegnato può rappresentare il moto di un fluido incomprimibile, e a ricavare una componente della velocità quando le altre sono note.

:::dimostrazione
L'idea è scrivere il bilancio di volume su un volume di controllo qualsiasi e poi farlo diventare una condizione punto per punto.

Sia $V \subseteq \Omega$ un dominio regolare qualsiasi, fisso nello spazio. Il fluido è incomprimibile, quindi il volume che entra in $V$ attraverso la sua frontiera in un intervallo di tempo uguaglia il volume che ne esce, e perciò il flusso netto della velocità uscente dalla frontiera è nullo:
$$
\int_{\partial V} \vec{v} \cdot \hat{n}\,dA = 0 .
$$
Per il teorema della divergenza l'integrale di superficie uguaglia $\displaystyle\int_V \operatorname{div}\vec{v}\;dV$, che risulta quindi nullo per ogni dominio regolare $V$ contenuto in $\Omega$. Sia ora $P$ un punto di $\Omega$ e si supponga $\operatorname{div}\vec{v}(P) > 0$. La funzione $\operatorname{div}\vec{v}$ è continua, perché $\vec{v}$ è di classe $C^1$, quindi esiste una palla $B$ di centro $P$ sulla quale $\operatorname{div}\vec{v} > 0$; su quella palla l'integrale sarebbe positivo, contro quanto si è dimostrato. Lo stesso ragionamento esclude $\operatorname{div}\vec{v}(P) < 0$, perciò $\operatorname{div}\vec{v}(P) = 0$ in ogni punto.
:::
::::

:::esempio{titolo="Verifica su un campo assegnato"}
Sia $\vec{v} = (2k\,x\,y,\;-k\,y^2)$ con $k = 0{,}100\,\mathrm{m^{-1}s^{-1}}$. Risulta
$$
\operatorname{div}\vec{v} = \frac{\partial}{\partial x}(2k\,x\,y) + \frac{\partial}{\partial y}(-k\,y^2) = 2k\,y - 2k\,y = 0 ,
$$
quindi il campo è compatibile con il moto di un fluido incomprimibile. Le sue linee di corrente si ottengono da
$$
\frac{dy}{dx} = \frac{-k\,y^2}{2k\,x\,y} = -\frac{y}{2x} ,
$$
equazione a variabili separabili la cui soluzione è $y = \dfrac{c}{\sqrt{x}}$, cioè la famiglia di curve $x\,y^2 = \mathrm{costante}$. Il moto è permanente, poiché il campo non dipende da $t$, perciò le traiettorie coincidono con le linee di corrente.
:::
