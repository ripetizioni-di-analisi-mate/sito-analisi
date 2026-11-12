---
titolo: Equazioni di Lagrange
sommario: Come si scrivono le equazioni del moto di un sistema olonomo a vincoli ideali partendo dall'energia cinetica e dal potenziale in coordinate lagrangiane, e come si riconoscono gli integrali primi del moto.
---

## Sistemi olonomi a vincoli ideali

Le equazioni cardinali della dinamica contengono le reazioni vincolari, che sono incognite, e per un sistema di più corpi vanno scritte corpo per corpo, perciò il numero delle equazioni cresce con il numero dei vincoli. Il metodo di Lagrange elimina fin dall'inizio le reazioni dei vincoli ideali e riduce il problema a tante equazioni quanti sono i gradi di libertà.

:::richiamo{titolo="Coordinate lagrangiane e spostamenti virtuali"}
Un sistema di $N$ punti $P_1, \dots, P_N$ soggetto a vincoli olonomi con $n$ gradi di libertà ammette coordinate lagrangiane $q_1, \dots, q_n$ tali che
$$
P_i = P_i(q_1, \dots, q_n, t) ,
\qquad i = 1, \dots, N ,
$$
con la matrice delle derivate $\dfrac{\partial P_i}{\partial q_h}$ di rango $n$. La velocità del punto $P_i$ e il suo spostamento virtuale sono
$$
\vec{v}_i = \sum_{h=1}^{n} \frac{\partial P_i}{\partial q_h}\,\dot{q}_h + \frac{\partial P_i}{\partial t} ,
\qquad
\delta P_i = \sum_{h=1}^{n} \frac{\partial P_i}{\partial q_h}\,\delta q_h ,
$$
dove gli incrementi $\delta q_1, \dots, \delta q_n$ sono arbitrari e indipendenti e il tempo resta fissato. Si rimanda all'argomento sui vincoli, i gradi di libertà e le coordinate lagrangiane.
:::

:::definizione{#vincoli-ideali titolo="Vincoli ideali"}
I vincoli di un sistema si dicono **ideali**, o *perfetti*, quando le reazioni vincolari $\vec{\Phi}_1, \dots, \vec{\Phi}_N$ che essi esercitano compiono lavoro virtuale nullo in ogni spostamento virtuale della configurazione occupata:
$$
\sum_{i=1}^{N} \vec{\Phi}_i \cdot \delta P_i = 0
\qquad
\text{per ogni } (\delta q_1, \dots, \delta q_n) .
$$
Sono ideali i vincoli lisci e bilaterali più comuni, perché in ciascuno di essi la reazione è ortogonale agli spostamenti virtuali consentiti: la reazione di una guida liscia è ortogonale alla guida, quella di una cerniera fissa è applicata in un punto che non si sposta, quella di un filo inestensibile ha componenti opposte nei due estremi di un tratto di lunghezza costante. Il puro rotolamento di un disco su una guida fissa è pure un vincolo ideale, poiché la reazione è applicata nel punto di contatto, che nell'atto di moto ha velocità nulla.

::grafico{assi=0 uguale=1 linee="-0.6,-0.2 5.4,1.8" vettori="2.4,0.8,3.75,1.25,δP;2.4,0.8,1.77,2.69,Φ" punti="2.4,0.8,pieno,P" etichette="4.4,1.1,guida liscia" xmin=-1 xmax=5.8 ymin=-0.8 ymax=3.2 titolo="Punto vincolato a una guida liscia: la reazione $\vec{\Phi}$ è ortogonale alla guida e lo spostamento virtuale $\delta P$ è tangente, quindi $\vec{\Phi} \cdot \delta P = 0$"}
:::

::::teorema{#relazione-simbolica titolo="Relazione simbolica della dinamica"}
Si consideri un sistema olonomo a vincoli ideali, con forze attive $\vec{F}_1, \dots, \vec{F}_N$ applicate nei punti $P_1, \dots, P_N$. Durante il moto, in ogni istante e per ogni spostamento virtuale della configurazione occupata vale
$$
\sum_{i=1}^{N} \big( \vec{F}_i - m_i \vec{a}_i \big) \cdot \delta P_i = 0 .
$$
La relazione contiene le sole forze attive, perciò è il punto di partenza per ottenere equazioni del moto libere dalle reazioni vincolari. Nel caso statico tutte le accelerazioni sono nulle e si ritrova il principio dei lavori virtuali, trattato nell'argomento sui lavori virtuali e il potenziale.

:::dimostrazione
Per ogni punto del sistema la legge di Newton si scrive separando le forze attive dalle reazioni vincolari,
$$
m_i \vec{a}_i = \vec{F}_i + \vec{\Phi}_i ,
\qquad i = 1, \dots, N .
$$
Si moltiplica scalarmente la $i$-esima uguaglianza per lo spostamento virtuale $\delta P_i$ e si somma su $i$, ottenendo
$$
\sum_{i=1}^{N} \big( \vec{F}_i - m_i \vec{a}_i \big) \cdot \delta P_i + \sum_{i=1}^{N} \vec{\Phi}_i \cdot \delta P_i = 0 .
$$
I vincoli sono ideali per ipotesi, quindi la seconda somma è nulla, e resta la relazione enunciata.
:::
::::

## Energia cinetica in coordinate lagrangiane

:::definizione{#matrice-cinetica titolo="Matrice cinetica e struttura dell'energia cinetica"}
Si sostituisce nell'energia cinetica $T = \dfrac{1}{2}\displaystyle\sum_{i=1}^{N} m_i\,v_i^2$ l'espressione della velocità in coordinate lagrangiane. Svolgendo i quadrati si ottiene
$$
T = T_2 + T_1 + T_0 ,
$$
dove i tre addendi sono rispettivamente di secondo, primo e grado zero nelle velocità generalizzate:
$$
T_2 = \frac{1}{2} \sum_{h,k=1}^{n} a_{hk}(q, t)\,\dot{q}_h\,\dot{q}_k ,
\qquad
T_1 = \sum_{h=1}^{n} b_h(q, t)\,\dot{q}_h ,
\qquad
T_0 = c(q, t) ,
$$
con i coefficienti
$$
a_{hk} = \sum_{i=1}^{N} m_i\,\frac{\partial P_i}{\partial q_h} \cdot \frac{\partial P_i}{\partial q_k} ,
\qquad
b_h = \sum_{i=1}^{N} m_i\,\frac{\partial P_i}{\partial q_h} \cdot \frac{\partial P_i}{\partial t} ,
\qquad
c = \frac{1}{2} \sum_{i=1}^{N} m_i \left| \frac{\partial P_i}{\partial t} \right|^2 .
$$
La matrice simmetrica $\mathbb{A}(q, t) = (a_{hk})$ è la **matrice cinetica** del sistema. Quando i vincoli sono fissi le funzioni $P_i$ non dipendono dal tempo, perciò $b_h = 0$ e $c = 0$ e l'energia cinetica si riduce alla forma quadratica $T = T_2$. I termini $T_1$ e $T_0$ compaiono quindi solo con vincoli mobili, come una guida che ruota con velocità angolare assegnata.
:::

::::teorema{#definita-positiva titolo="La matrice cinetica è definita positiva"}
Per ogni configurazione e per ogni istante la forma quadratica associata a $\mathbb{A}$ soddisfa
$$
\sum_{h,k=1}^{n} a_{hk}\,\lambda_h\,\lambda_k > 0
\qquad
\text{per ogni } (\lambda_1, \dots, \lambda_n) \neq (0, \dots, 0) .
$$
La matrice $\mathbb{A}$ è perciò invertibile, e questo permette di risolvere le equazioni di Lagrange rispetto alle accelerazioni $\ddot{q}_h$.

:::dimostrazione
Dalla definizione dei coefficienti $a_{hk}$ si ottiene, scambiando l'ordine delle somme,
$$
\sum_{h,k=1}^{n} a_{hk}\,\lambda_h\,\lambda_k
= \sum_{i=1}^{N} m_i \left( \sum_{h=1}^{n} \frac{\partial P_i}{\partial q_h}\,\lambda_h \right) \cdot \left( \sum_{k=1}^{n} \frac{\partial P_i}{\partial q_k}\,\lambda_k \right)
= \sum_{i=1}^{N} m_i \left| \sum_{h=1}^{n} \frac{\partial P_i}{\partial q_h}\,\lambda_h \right|^2 .
$$
Ogni addendo è non negativo, dunque la somma è nulla soltanto se il vettore $\displaystyle\sum_h \frac{\partial P_i}{\partial q_h}\,\lambda_h$ è nullo per ogni $i$. Questo vettore è lo spostamento virtuale che corrisponde agli incrementi $\delta q_h = \lambda_h$; poiché la matrice delle derivate $\dfrac{\partial P_i}{\partial q_h}$ ha rango $n$, l'unico modo di annullare tutti questi vettori è prendere $\lambda_1 = \dots = \lambda_n = 0$. Perciò la forma quadratica è positiva su ogni vettore non nullo.
:::
::::

:::esempio{titolo="Matrice cinetica di un'asta con un estremo su una guida"}
L'asta omogenea $AB$, di massa $m$ e lunghezza $2\ell$, ha l'estremo $A$ su una guida orizzontale liscia e ruota attorno ad $A$ nel piano verticale. Si scelgono come coordinate lagrangiane l'ascissa $x$ di $A$ e l'angolo $\vartheta$ che l'asta forma con la verticale discendente.

::struttura{nodi="A,2,0;B,3.376,-1.966" aste="A-B" vincoli="A,carrello,90" linee="-0.6,0 5.2,0" tratteggi="2,0 2,-2.3" punti="0,0,O;2.688,-0.983,G,baricentro" etichette="2.26,-1.1,ϑ" quote="0 0,A,x,-0.62" titolo="Asta con l'estremo $A$ su una guida orizzontale: due gradi di libertà, le coordinate lagrangiane $x$ e $\vartheta$"}

Il centro di massa $G$ è il punto medio dell'asta, quindi
$$
G - O = (x + \ell\sin\vartheta)\,\hat{\imath} - \ell\cos\vartheta\,\hat{\jmath} ,
\qquad
\vec{v}_G = (\dot{x} + \ell\dot{\vartheta}\cos\vartheta)\,\hat{\imath} + \ell\dot{\vartheta}\sin\vartheta\,\hat{\jmath} .
$$
Il momento d'inerzia dell'asta rispetto all'asse per $G$ ortogonale al piano del moto vale $I_G = \dfrac{1}{12}\,m\,(2\ell)^2 = \dfrac{1}{3}\,m\,\ell^2$, come si ricava nell'argomento sulla geometria delle masse. Per il teorema di König l'energia cinetica è la somma di quella del centro di massa e di quella del moto rotatorio relativo, perciò
$$
T = \frac{1}{2}\,m\,v_G^2 + \frac{1}{2}\,I_G\,\dot{\vartheta}^2
= \frac{1}{2}\,m\,\dot{x}^2 + \frac{2}{3}\,m\,\ell^2\,\dot{\vartheta}^2 + m\,\ell\,\dot{x}\,\dot{\vartheta}\cos\vartheta .
$$
I vincoli sono fissi, quindi $T = T_2$ e la matrice cinetica si legge direttamente dai coefficienti:
$$
\mathbb{A}(\vartheta) =
\begin{pmatrix}
m & m\,\ell\cos\vartheta \\[4pt]
m\,\ell\cos\vartheta & \dfrac{4}{3}\,m\,\ell^2
\end{pmatrix} .
$$
Il suo determinante vale $\dfrac{4}{3}\,m^2\,\ell^2 - m^2\,\ell^2\cos^2\vartheta$, che è positivo per ogni $\vartheta$ perché $\cos^2\vartheta \le 1 < \dfrac{4}{3}$, in accordo con il teorema sulla matrice cinetica.
:::

## Le equazioni di Lagrange

:::richiamo{titolo="Teorema di Schwarz"}
Se una funzione di più variabili ammette derivate seconde continue in un aperto, allora le derivate seconde miste non dipendono dall'ordine di derivazione. Si rimanda all'argomento sulle derivate parziali e la differenziabilità di Analisi 2.
:::

::::teorema{#equazioni-di-lagrange titolo="Equazioni di Lagrange"}
Si consideri un sistema olonomo a $n$ gradi di libertà, a vincoli ideali, con energia cinetica $T$ espressa nelle coordinate lagrangiane $q_1, \dots, q_n$. Si ponga
$$
Q_h = \sum_{i=1}^{N} \vec{F}_i \cdot \frac{\partial P_i}{\partial q_h} ,
\qquad h = 1, \dots, n ,
$$
dove $Q_h$ è la **componente lagrangiana della sollecitazione attiva** rispetto alla coordinata $q_h$. Allora durante il moto valgono le $n$ equazioni
$$
\begin{cases}
\dfrac{d}{dt}\dfrac{\partial T}{\partial \dot{q}_1} - \dfrac{\partial T}{\partial q_1} = Q_1 \\[8pt]
\phantom{xxxx} \vdots \\[4pt]
\dfrac{d}{dt}\dfrac{\partial T}{\partial \dot{q}_n} - \dfrac{\partial T}{\partial q_n} = Q_n
\end{cases}
$$
Il numero delle equazioni è uguale al numero dei gradi di libertà e le reazioni dei vincoli ideali non compaiono: per scrivere il moto bastano quindi l'energia cinetica e le forze attive. Per l'asta con l'estremo su una guida, con la sola forza peso, le due equazioni si ottengono derivando l'espressione di $T$ già calcolata.

:::dimostrazione
Si sostituisce nella relazione simbolica della dinamica l'espressione dello spostamento virtuale $\delta P_i = \displaystyle\sum_h \frac{\partial P_i}{\partial q_h}\,\delta q_h$ e si scambia l'ordine delle somme:
$$
\sum_{h=1}^{n} \left[ \sum_{i=1}^{N} \vec{F}_i \cdot \frac{\partial P_i}{\partial q_h} - \sum_{i=1}^{N} m_i \vec{a}_i \cdot \frac{\partial P_i}{\partial q_h} \right] \delta q_h = 0 .
$$
Gli incrementi $\delta q_h$ sono arbitrari e indipendenti, perciò ogni coefficiente della somma è nullo, cioè
$$
\sum_{i=1}^{N} m_i \vec{a}_i \cdot \frac{\partial P_i}{\partial q_h} = Q_h ,
\qquad h = 1, \dots, n .
$$
Resta da riconoscere nel primo membro un'espressione costruita con la sola energia cinetica. Dalla formula della velocità in coordinate lagrangiane, nella quale $\dfrac{\partial P_i}{\partial q_k}$ e $\dfrac{\partial P_i}{\partial t}$ dipendono da $q$ e da $t$ ma non dalle velocità generalizzate, si ricava derivando rispetto a $\dot{q}_h$
$$
\frac{\partial \vec{v}_i}{\partial \dot{q}_h} = \frac{\partial P_i}{\partial q_h} .
$$
Derivando invece $\dfrac{\partial P_i}{\partial q_h}$ rispetto al tempo lungo il moto e $\vec{v}_i$ rispetto a $q_h$ si ottengono le due espressioni
$$
\frac{d}{dt}\frac{\partial P_i}{\partial q_h} = \sum_{k=1}^{n} \frac{\partial^2 P_i}{\partial q_k \, \partial q_h}\,\dot{q}_k + \frac{\partial^2 P_i}{\partial t \, \partial q_h} ,
\qquad
\frac{\partial \vec{v}_i}{\partial q_h} = \sum_{k=1}^{n} \frac{\partial^2 P_i}{\partial q_h \, \partial q_k}\,\dot{q}_k + \frac{\partial^2 P_i}{\partial q_h \, \partial t} ,
$$
che coincidono per il **teorema di Schwarz**, dato che le derivate seconde miste sono uguali. Vale perciò anche
$$
\frac{d}{dt}\frac{\partial P_i}{\partial q_h} = \frac{\partial \vec{v}_i}{\partial q_h} .
$$
Si deriva adesso rispetto al tempo il prodotto $m_i \vec{v}_i \cdot \dfrac{\partial P_i}{\partial q_h}$ e si isola il termine con l'accelerazione:
$$
m_i \vec{a}_i \cdot \frac{\partial P_i}{\partial q_h}
= \frac{d}{dt}\left( m_i \vec{v}_i \cdot \frac{\partial P_i}{\partial q_h} \right) - m_i \vec{v}_i \cdot \frac{d}{dt}\frac{\partial P_i}{\partial q_h} .
$$
Nel primo addendo si usa $\dfrac{\partial P_i}{\partial q_h} = \dfrac{\partial \vec{v}_i}{\partial \dot{q}_h}$ e nel secondo $\dfrac{d}{dt}\dfrac{\partial P_i}{\partial q_h} = \dfrac{\partial \vec{v}_i}{\partial q_h}$, perciò
$$
m_i \vec{a}_i \cdot \frac{\partial P_i}{\partial q_h}
= \frac{d}{dt}\frac{\partial}{\partial \dot{q}_h}\left( \frac{1}{2}\,m_i\,v_i^2 \right) - \frac{\partial}{\partial q_h}\left( \frac{1}{2}\,m_i\,v_i^2 \right) .
$$
Si somma su $i$ da $1$ a $N$. La somma delle energie cinetiche dei singoli punti è l'energia cinetica $T$ del sistema, quindi il primo membro diventa $\dfrac{d}{dt}\dfrac{\partial T}{\partial \dot{q}_h} - \dfrac{\partial T}{\partial q_h}$, e l'uguaglianza con $Q_h$ dà la $h$-esima equazione.
:::
::::

:::osservazione{#struttura-equazioni titolo="Forma normale e problema di Cauchy"}
Nell'equazione di indice $h$ la derivata $\dfrac{d}{dt}\dfrac{\partial T}{\partial \dot{q}_h}$ produce i termini $\displaystyle\sum_k a_{hk}\,\ddot{q}_k$ e termini che contengono soltanto $q$, $\dot{q}$ e $t$. Il sistema si scrive perciò nella forma
$$
\mathbb{A}(q, t)\,\ddot{q} = \vec{g}(q, \dot{q}, t) ,
$$
e poiché $\mathbb{A}$ è invertibile per il teorema sulla matrice cinetica, si risolve rispetto alle accelerazioni:
$$
\ddot{q} = \mathbb{A}^{-1}(q, t)\,\vec{g}(q, \dot{q}, t) .
$$
Si ottiene così un sistema di $n$ equazioni differenziali del secondo ordine in forma normale, al quale si applica il teorema di esistenza e unicità per il problema di Cauchy: assegnate la configurazione $q(t_0)$ e le velocità generalizzate $\dot{q}(t_0)$, il moto è determinato. Questo giustifica il fatto che un sistema a $n$ gradi di libertà richieda $2n$ dati iniziali.
:::

## Sollecitazioni conservative e lagrangiana

:::definizione{#lagrangiana titolo="Sollecitazione conservativa e lagrangiana"}
La sollecitazione attiva si dice **conservativa** quando esiste una funzione $U(q_1, \dots, q_n)$, detta *potenziale*, tale che
$$
Q_h = \frac{\partial U}{\partial q_h} ,
\qquad h = 1, \dots, n .
$$
In tutta la Meccanica razionale il potenziale è legato alla forza da $\vec{F} = \operatorname{grad} U$ e l'energia potenziale è $V = -U$; per la forza peso di un corpo di massa $m$ e centro di massa $G$ si ha $U = -m\,g\,y_G$ e per una molla di costante $k$, lunghezza $\ell$ e lunghezza a riposo $\ell_0$ si ha $U = -\dfrac{1}{2}\,k\,(\ell - \ell_0)^2$. Posta la **lagrangiana**
$$
\mathcal{L} = T + U = T - V ,
$$
e osservato che $U$ non dipende dalle velocità generalizzate, le equazioni di Lagrange prendono la forma
$$
\frac{d}{dt}\frac{\partial \mathcal{L}}{\partial \dot{q}_h} - \frac{\partial \mathcal{L}}{\partial q_h} = 0 ,
\qquad h = 1, \dots, n .
$$
Il moto di un sistema conservativo è perciò determinato dalla sola funzione $\mathcal{L}$, e scriverlo si riduce a calcolare $T$ e $U$ nelle coordinate scelte.
:::

:::esempio{titolo="Pendolo composto"}
L'asta omogenea $OA$, di massa $m$ e lunghezza $\ell$, è incernierata nell'estremo $O$ con una cerniera fissa liscia e ruota nel piano verticale. Il sistema ha un grado di libertà e si assume come coordinata lagrangiana l'angolo $\vartheta$ fra l'asta e la verticale discendente.

::struttura{nodi="O,0,0;A,1.2,-2.078" aste="O-A" vincoli="O,cerniera,90" tratteggi="0,0 0,-2.4" punti="0.6,-1.039,G,baricentro" forze="0.6 -1.039,0,-0.85,mg" etichette="0.3,-1.08,ϑ" quote="O,A,ℓ,-0.55" titolo="Pendolo composto: l'asta ruota attorno alla cerniera fissa $O$ e la coordinata lagrangiana è l'angolo $\vartheta$"}

L'atto di moto è rotatorio attorno all'asse fisso per $O$, perciò, con $I_O = \dfrac{1}{3}\,m\,\ell^2$,
$$
T = \frac{1}{2}\,I_O\,\dot{\vartheta}^2 = \frac{1}{6}\,m\,\ell^2\,\dot{\vartheta}^2 ,
\qquad
U = -m\,g\,y_G = \frac{1}{2}\,m\,g\,\ell\cos\vartheta .
$$
Si calcolano le due derivate che compaiono nell'equazione,
$$
\frac{d}{dt}\frac{\partial T}{\partial \dot{\vartheta}} = \frac{1}{3}\,m\,\ell^2\,\ddot{\vartheta} ,
\qquad
\frac{\partial T}{\partial \vartheta} = 0 ,
\qquad
Q_\vartheta = \frac{\partial U}{\partial \vartheta} = -\frac{1}{2}\,m\,g\,\ell\sin\vartheta ,
$$
e l'equazione del moto risulta
$$
\frac{1}{3}\,m\,\ell^2\,\ddot{\vartheta} = -\frac{1}{2}\,m\,g\,\ell\sin\vartheta ,
\qquad \text{cioè} \qquad
\ddot{\vartheta} = -\frac{3\,g}{2\,\ell}\sin\vartheta .
$$
L'equazione coincide con quella del pendolo semplice di lunghezza $\dfrac{2}{3}\,\ell$, che è la **lunghezza ridotta** del pendolo composto, e coincide con la seconda equazione cardinale scritta con polo nella cerniera, $I_O\,\ddot{\vartheta} = M_O^{(e)}$, perché il momento del peso rispetto a $O$ vale $-\dfrac{1}{2}\,m\,g\,\ell\sin\vartheta$.
:::

:::osservazione{#sollecitazioni-mista titolo="Sollecitazioni in parte conservative"}
Quando alcune forze attive ammettono potenziale e altre no, si separa il contributo conservativo dal resto, ponendo
$$
Q_h = \frac{\partial U}{\partial q_h} + Q_h^{*} ,
$$
e le equazioni si scrivono con la lagrangiana a primo membro e la parte residua a secondo membro:
$$
\frac{d}{dt}\frac{\partial \mathcal{L}}{\partial \dot{q}_h} - \frac{\partial \mathcal{L}}{\partial q_h} = Q_h^{*} .
$$
La separazione conviene perché il peso e le molle, che compaiono in quasi tutti i problemi, danno il potenziale $U$ con un solo calcolo di quote e di lunghezze, mentre le componenti $Q_h^{*}$ delle poche forze restanti si calcolano dal lavoro virtuale.
:::

## Sollecitazioni non conservative: l'attrito viscoso

:::definizione{#dissipazione-rayleigh titolo="Funzione di dissipazione di Rayleigh"}
Si supponga che su alcuni punti del sistema agiscano resistenze viscose $\vec{F}_i = -h_i\,\vec{v}_i$, con $h_i > 0$. Posta la **funzione di dissipazione di Rayleigh**
$$
\mathcal{D} = \frac{1}{2} \sum_{i=1}^{N} h_i\,v_i^2 ,
$$
le componenti lagrangiane di queste forze si ottengono derivando $\mathcal{D}$ rispetto alle velocità generalizzate:
$$
Q_h^{*} = -\frac{\partial \mathcal{D}}{\partial \dot{q}_h} .
$$
L'uguaglianza segue dalla definizione di $Q_h^{*}$ e dall'identità $\dfrac{\partial \vec{v}_i}{\partial \dot{q}_h} = \dfrac{\partial P_i}{\partial q_h}$ dimostrata per le equazioni di Lagrange, poiché
$$
Q_h^{*} = \sum_i (-h_i \vec{v}_i) \cdot \frac{\partial P_i}{\partial q_h} = -\sum_i h_i \vec{v}_i \cdot \frac{\partial \vec{v}_i}{\partial \dot{q}_h} = -\frac{\partial}{\partial \dot{q}_h} \left( \frac{1}{2}\sum_i h_i v_i^2 \right) .
$$
La funzione $\mathcal{D}$ si calcola come l'energia cinetica, con $h_i$ al posto di $m_i$, perciò la resistenza viscosa entra nelle equazioni con lo stesso tipo di conto già svolto per $T$.
:::

:::esempio{titolo="Oscillatore con resistenza viscosa"}
Il punto materiale $P$ di massa $m$ scorre su una guida orizzontale liscia, è collegato al punto fisso $O$ della guida da una molla di costante $k$ e lunghezza a riposo nulla ed è immerso in un fluido che esercita la resistenza $-h\,\vec{v}_P$. Si assume come coordinata lagrangiana l'ascissa $x$ di $P$.

::struttura{nodi="O,0,0;P,3.2,0" linee="-0.4,0 5,0;0,0 0.45,0.26 1.1,-0.26 1.75,0.26 2.4,-0.26 2.85,0 3.2,0" etichette="1.5,-0.45,k" forze="3.2 0,-1,0,-h v_P" quote="O,P,x,-0.62" titolo="Punto su guida orizzontale con molla di costante $k$ e resistenza viscosa $-h\,\vec{v}_P$"}

Si calcolano l'energia cinetica, il potenziale della molla e la funzione di dissipazione:
$$
T = \frac{1}{2}\,m\,\dot{x}^2 ,
\qquad
U = -\frac{1}{2}\,k\,x^2 ,
\qquad
\mathcal{D} = \frac{1}{2}\,h\,\dot{x}^2 .
$$
L'equazione di Lagrange con la parte non conservativa dà
$$
m\,\ddot{x} = -k\,x - h\,\dot{x} ,
\qquad \text{cioè} \qquad
m\,\ddot{x} + h\,\dot{x} + k\,x = 0 ,
$$
che è l'equazione dell'oscillatore armonico smorzato studiata nell'argomento sulla dinamica del punto materiale.
:::

## Integrali primi del moto

Risolvere le equazioni di Lagrange in forma chiusa è possibile in pochi casi, mentre le funzioni che restano costanti lungo il moto si riconoscono dalla struttura della lagrangiana e danno informazioni sul moto senza integrare.

:::definizione{#momenti-cinetici titolo="Momenti cinetici e coordinate cicliche"}
Si dice **momento cinetico** coniugato alla coordinata $q_h$ la funzione
$$
p_h = \frac{\partial \mathcal{L}}{\partial \dot{q}_h} = \frac{\partial T}{\partial \dot{q}_h} .
$$
La coordinata $q_h$ si dice **ciclica**, o *assente*, quando la lagrangiana non dipende da $q_h$, cioè quando $\dfrac{\partial \mathcal{L}}{\partial q_h} = 0$. Nel caso di un sistema di corpi liberi di traslare lungo una direzione fissa, la coordinata che misura la traslazione è ciclica se le forze attive hanno componente nulla in quella direzione, e il momento coniugato è la componente della quantità di moto lungo la direzione stessa.
:::

:::teorema{#coordinata-ciclica titolo="Conservazione del momento cinetico"}
Se la coordinata $q_h$ è ciclica, allora il momento cinetico coniugato $p_h$ è costante lungo ogni moto del sistema. La conservazione segue immediatamente dall'equazione di Lagrange di indice $h$, che si riduce a $\dfrac{d p_h}{dt} = 0$. La costante $p_h$ si calcola con i dati iniziali e lega fra loro le velocità generalizzate, riducendo di uno il numero delle incognite: in un sistema a due gradi di libertà con una coordinata ciclica resta una sola equazione differenziale da studiare.
:::

::::teorema{#funzione-di-jacobi titolo="Integrale generalizzato dell'energia"}
Si consideri un sistema olonomo a vincoli ideali con sollecitazione conservativa e si ponga
$$
\mathcal{H} = \sum_{h=1}^{n} \dot{q}_h\,\frac{\partial \mathcal{L}}{\partial \dot{q}_h} - \mathcal{L} ,
$$
funzione detta **funzione di Jacobi**. Lungo ogni moto vale
$$
\frac{d\mathcal{H}}{dt} = -\frac{\partial \mathcal{L}}{\partial t} ,
$$
perciò se la lagrangiana non dipende esplicitamente dal tempo la funzione di Jacobi è costante. Inoltre, in termini dei tre addendi dell'energia cinetica,
$$
\mathcal{H} = T_2 - T_0 + V .
$$
La funzione di Jacobi è quindi un integrale primo anche per sistemi a vincoli mobili, purché la lagrangiana non dipenda esplicitamente dal tempo, come accade per una guida che ruota con velocità angolare costante, dove l'energia meccanica $T + V$ non si conserva.

:::dimostrazione
Si deriva $\mathcal{H}$ rispetto al tempo lungo il moto:
$$
\frac{d\mathcal{H}}{dt} = \sum_{h} \left( \ddot{q}_h\,\frac{\partial \mathcal{L}}{\partial \dot{q}_h} + \dot{q}_h\,\frac{d}{dt}\frac{\partial \mathcal{L}}{\partial \dot{q}_h} \right) - \sum_{h} \left( \frac{\partial \mathcal{L}}{\partial q_h}\,\dot{q}_h + \frac{\partial \mathcal{L}}{\partial \dot{q}_h}\,\ddot{q}_h \right) - \frac{\partial \mathcal{L}}{\partial t} .
$$
I termini con $\ddot{q}_h$ si cancellano, quindi
$$
\frac{d\mathcal{H}}{dt} = \sum_{h} \dot{q}_h \left( \frac{d}{dt}\frac{\partial \mathcal{L}}{\partial \dot{q}_h} - \frac{\partial \mathcal{L}}{\partial q_h} \right) - \frac{\partial \mathcal{L}}{\partial t} .
$$
Ogni parentesi è nulla per le equazioni di Lagrange, perciò resta $\dfrac{d\mathcal{H}}{dt} = -\dfrac{\partial \mathcal{L}}{\partial t}$.

Per la seconda espressione si osserva che $T_2$ è una forma quadratica nelle velocità generalizzate e $T_1$ è lineare, dunque per il teorema di Eulero sulle funzioni omogenee
$$
\sum_{h} \dot{q}_h\,\frac{\partial T}{\partial \dot{q}_h} = 2\,T_2 + T_1 .
$$
Poiché $U$ non dipende dalle velocità generalizzate, si ha $\dfrac{\partial \mathcal{L}}{\partial \dot{q}_h} = \dfrac{\partial T}{\partial \dot{q}_h}$ e quindi
$$
\mathcal{H} = 2\,T_2 + T_1 - (T_2 + T_1 + T_0 + U) = T_2 - T_0 - U = T_2 - T_0 + V .
$$
:::
::::

:::osservazione{#conservazione-energia titolo="Vincoli fissi: conservazione dell'energia meccanica"}
Con vincoli fissi l'energia cinetica si riduce a $T_2$, perciò $T_0 = 0$ e la funzione di Jacobi coincide con l'energia meccanica:
$$
\mathcal{H} = T + V = E .
$$
Se inoltre il potenziale non dipende dal tempo, la lagrangiana non dipende esplicitamente dal tempo e l'energia meccanica è costante. Si ritrova così, dalla sola struttura delle equazioni di Lagrange, la conservazione dell'energia meccanica dimostrata nell'argomento sulla dinamica dei sistemi. L'integrale dell'energia è quello che si usa negli esercizi a un grado di libertà per ricavare la velocità in una configurazione assegnata senza integrare l'equazione del moto.
:::

:::esempio{titolo="Punto su una guida rotante"}
Il punto materiale $P$ di massa $m$ scorre su una guida rettilinea orizzontale liscia, che ruota con velocità angolare costante $\omega$ attorno all'asse verticale passante per il suo punto $O$; una molla di costante $k$ e lunghezza a riposo nulla collega $P$ a $O$. Si assume come coordinata lagrangiana la distanza $r$ di $P$ da $O$.

::struttura{nodi="O,0,0;P,2.4,0" linee="-3,0 3.4,0;0,0 0.34,0.24 0.82,-0.24 1.3,0.24 1.78,-0.24 2.12,0 2.4,0" coppie="-2 0,1,ω" etichette="1.1,-0.45,k" quote="O,P,r,-0.62" titolo="Guida rotante con velocità angolare costante $\omega$: il vincolo è mobile, quindi l'energia cinetica contiene il termine $T_0$"}

La guida è orizzontale, quindi il peso è equilibrato dalla reazione della guida e compie lavoro virtuale nullo. La velocità di $P$ ha la componente $\dot{r}$ lungo la guida e la componente $\omega\,r$ ortogonale ad essa, perciò
$$
T = \frac{1}{2}\,m\,\dot{r}^2 + \frac{1}{2}\,m\,\omega^2\,r^2 ,
\qquad
T_2 = \frac{1}{2}\,m\,\dot{r}^2 ,
\qquad
T_0 = \frac{1}{2}\,m\,\omega^2\,r^2 ,
$$
mentre il potenziale della molla vale $U = -\dfrac{1}{2}\,k\,r^2$. L'equazione di Lagrange dà
$$
m\,\ddot{r} = m\,\omega^2\,r - k\,r ,
$$
dove il termine $m\,\omega^2 r$ viene da $\dfrac{\partial T}{\partial r}$ e si interpreta nel riferimento mobile come forza centrifuga. La lagrangiana non dipende esplicitamente dal tempo, quindi la funzione di Jacobi
$$
\mathcal{H} = T_2 - T_0 + V = \frac{1}{2}\,m\,\dot{r}^2 - \frac{1}{2}\,m\,\omega^2\,r^2 + \frac{1}{2}\,k\,r^2
$$
resta **costante** lungo il moto, mentre l'energia meccanica $T + V$ cresce o decresce, perché il vincolo mobile compie lavoro sul punto.
:::

## Esempi a uno e a due gradi di libertà

:::esempio{titolo="Disco che rotola su un piano inclinato"}
Il disco omogeneo di massa $m$ e raggio $R$ rotola senza strisciare su un piano inclinato di angolo $\alpha$, nel piano verticale. Si assume come coordinata lagrangiana l'ascissa curvilinea $s$ del centro $G$ lungo il piano, misurata verso il basso.

::struttura{poligoni="0,0 5,0 0,2.887" cerchi="2.132,2.580,0.8" punti="2.132,2.580,G,baricentro;1.732,1.887,C,centro" frecce="2.132,2.580,3.431,1.830,s" etichette="3.85,0.25,α" titolo="Disco che rotola senza strisciare: il vincolo di puro rotolamento lascia un solo grado di libertà"}

Il vincolo di puro rotolamento lega la velocità angolare alla velocità del centro con $|\dot{\varphi}| = \dfrac{\dot{s}}{R}$, come si ricava nell'argomento sulla cinematica del corpo rigido. Il momento d'inerzia del disco rispetto all'asse per $G$ ortogonale al piano del moto vale $I_G = \dfrac{1}{2}\,m\,R^2$, quindi per il teorema di König
$$
T = \frac{1}{2}\,m\,\dot{s}^2 + \frac{1}{2} \cdot \frac{1}{2}\,m\,R^2 \cdot \frac{\dot{s}^2}{R^2} = \frac{3}{4}\,m\,\dot{s}^2 .
$$
Il centro scende della quota $s\sin\alpha$, perciò $U = -m\,g\,y_G = m\,g\,s\sin\alpha$ a meno di una costante additiva, e l'equazione di Lagrange dà
$$
\frac{3}{2}\,m\,\ddot{s} = m\,g\sin\alpha ,
\qquad \text{cioè} \qquad
\ddot{s} = \frac{2}{3}\,g\sin\alpha .
$$
L'accelerazione è costante e minore di $g\sin\alpha$, che è il valore per un punto che scivola senza attrito sullo stesso piano, perché una parte dell'energia va nel moto rotatorio. La reazione del vincolo di rotolamento non compare nell'equazione, benché la sua componente tangenziale sia diversa da zero: il punto di contatto ha velocità nulla, quindi il lavoro virtuale della reazione è nullo e il vincolo è ideale.
:::

:::esempio{titolo="Pendolo doppio"}
Le aste omogenee $OA$ e $AB$, ciascuna di massa $m$ e lunghezza $\ell$, sono collegate da una cerniera liscia in $A$, mentre $OA$ è incernierata nel punto fisso $O$; il sistema si muove nel piano verticale. Si assumono come coordinate lagrangiane gli angoli $\vartheta_1$ e $\vartheta_2$ che le due aste formano con la verticale discendente.

::struttura{nodi="O,0,0;A,0.761,-1.631;B,2.235,-2.663" aste="O-A;A-B" vincoli="O,cerniera,90" cerniere="A" tratteggi="0,0 0,-1.95;0.761,-1.631 0.761,-3.1" punti="0.38,-0.816,G_1,baricentro;1.498,-2.147,G_2,baricentro" etichette="0.16,-0.98,ϑ_1;0.95,-2.33,ϑ_2" titolo="Pendolo doppio: due gradi di libertà e matrice cinetica dipendente dalla configurazione"}

La prima asta ruota attorno all'asse fisso per $O$, quindi la sua energia cinetica è $\dfrac{1}{6}\,m\,\ell^2\,\dot{\vartheta}_1^2$. Il centro di massa della seconda asta ha posizione e velocità
$$
G_2 - O = \left( \ell\sin\vartheta_1 + \frac{\ell}{2}\sin\vartheta_2 \right) \hat{\imath} - \left( \ell\cos\vartheta_1 + \frac{\ell}{2}\cos\vartheta_2 \right) \hat{\jmath} ,
\qquad
v_{G_2}^2 = \ell^2\,\dot{\vartheta}_1^2 + \frac{\ell^2}{4}\,\dot{\vartheta}_2^2 + \ell^2\,\dot{\vartheta}_1\,\dot{\vartheta}_2\cos(\vartheta_1 - \vartheta_2) ,
$$
e per il teorema di König, con $I_{G_2} = \dfrac{1}{12}\,m\,\ell^2$, l'energia cinetica totale risulta
$$
T = \frac{2}{3}\,m\,\ell^2\,\dot{\vartheta}_1^2 + \frac{1}{6}\,m\,\ell^2\,\dot{\vartheta}_2^2 + \frac{1}{2}\,m\,\ell^2\,\dot{\vartheta}_1\,\dot{\vartheta}_2\cos(\vartheta_1 - \vartheta_2) .
$$
Il potenziale del peso delle due aste vale
$$
U = -m\,g\,y_{G_1} - m\,g\,y_{G_2} = \frac{1}{2}\,m\,g\,\ell\,(3\cos\vartheta_1 + \cos\vartheta_2) ,
$$
e le due equazioni di Lagrange, divise per $m\,\ell$, sono
$$
\begin{cases}
\dfrac{4}{3}\,\ell\,\ddot{\vartheta}_1 + \dfrac{1}{2}\,\ell\cos(\vartheta_1 - \vartheta_2)\,\ddot{\vartheta}_2 + \dfrac{1}{2}\,\ell\sin(\vartheta_1 - \vartheta_2)\,\dot{\vartheta}_2^2 + \dfrac{3}{2}\,g\sin\vartheta_1 = 0 \\[8pt]
\dfrac{1}{3}\,\ell\,\ddot{\vartheta}_2 + \dfrac{1}{2}\,\ell\cos(\vartheta_1 - \vartheta_2)\,\ddot{\vartheta}_1 - \dfrac{1}{2}\,\ell\sin(\vartheta_1 - \vartheta_2)\,\dot{\vartheta}_1^2 + \dfrac{1}{2}\,g\sin\vartheta_2 = 0
\end{cases}
$$
Le due equazioni sono accoppiate attraverso i termini in $\cos(\vartheta_1 - \vartheta_2)$ e $\sin(\vartheta_1 - \vartheta_2)$, che vengono dal termine misto dell'energia cinetica. I vincoli sono fissi e la sollecitazione è conservativa, perciò l'energia meccanica $E = T - U$ è un integrale primo del moto.
:::

## Che cosa dà il metodo di Lagrange

:::osservazione{#confronto-cardinali titolo="Confronto con le equazioni cardinali"}
Per un sistema a un grado di libertà l'equazione di Lagrange e la seconda equazione cardinale scritta con un polo opportuno danno la stessa equazione del moto, come si vede nel pendolo composto e nel disco che rotola. La differenza si vede nei sistemi di più corpi: le equazioni cardinali vanno scritte per ogni corpo e contengono le reazioni delle cerniere interne, che poi si eliminano, mentre le equazioni di Lagrange sono già tante quante i gradi di libertà e non contengono quelle reazioni. Il metodo di Lagrange non fornisce le reazioni dei vincoli ideali; per calcolare una reazione si sopprime il vincolo corrispondente, lo si sostituisce con una forza attiva incognita e si usa il grado di libertà in più, come nell'argomento sui lavori virtuali e il potenziale, oppure si scrive un'equazione cardinale per il corpo interessato.
:::

:::attenzione
Le equazioni di Lagrange nella forma dimostrata richiedono che i vincoli siano olonomi e ideali: se un vincolo compie lavoro virtuale diverso da zero, le reazioni non si eliminano dalla relazione simbolica della dinamica e le equazioni non valgono.

Un disco che striscia su una guida scabra ne è un esempio: il punto di contatto ha velocità diversa da zero, l'attrito dinamico ha componente opposta a quella velocità e il suo lavoro virtuale è negativo. In quel caso l'attrito si tratta come una forza attiva, calcolandone la componente lagrangiana $Q^{*}$ dal lavoro virtuale, e si scrivono le equazioni nella forma con la sollecitazione non conservativa a secondo membro.
:::
