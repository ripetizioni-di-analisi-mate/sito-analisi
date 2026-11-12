---
titolo: Equilibrio, stabilità e piccole oscillazioni
sommario: Come si trovano le configurazioni di equilibrio di un sistema olonomo conservativo dal potenziale, come se ne studia la stabilità con il teorema di Lagrange-Dirichlet e con la matrice hessiana, e come si calcolano le pulsazioni proprie e i modi normali delle piccole oscillazioni.
---

## Equilibrio di un sistema olonomo conservativo

:::richiamo{#matrice-cinetica titolo="Energia cinetica di un sistema olonomo a vincoli fissi"}
Sia dato un sistema olonomo a vincoli fissi e bilaterali, con $n$ gradi di libertà e coordinate lagrangiane $q = (q_1, \dots, q_n)$. L'energia cinetica è la forma quadratica
$$
T = \frac{1}{2} \sum_{h,k=1}^{n} a_{hk}(q)\,\dot{q}_h\,\dot{q}_k = \frac{1}{2}\,\dot{q} \cdot \mathbb{A}(q)\,\dot{q} ,
$$
dove la **matrice cinetica** $\mathbb{A}(q)$ è simmetrica e definita positiva in ogni configurazione, perché $T$ è nulla solo ad atto di moto nullo. Si rimanda all'argomento sulle equazioni di Lagrange.
:::

:::definizione{#configurazione-di-equilibrio titolo="Configurazione di equilibrio"}
Una configurazione $q_0$ è di **equilibrio** quando il moto che parte da $q_0$ con velocità generalizzate nulle resta in $q_0$, cioè quando la funzione costante $q(t) = q_0$ è soluzione delle equazioni del moto. Un sistema abbandonato in una configurazione di equilibrio, senza velocità iniziale, vi permane.
:::

:::definizione{#potenziale-e-energia-potenziale titolo="Potenziale ed energia potenziale"}
Una sollecitazione è **conservativa** quando ammette un potenziale $U$, funzione delle sole coordinate lagrangiane, tale che le componenti lagrangiane della sollecitazione siano
$$
Q_h = \frac{\partial U}{\partial q_h} ,
\qquad h = 1, \dots, n .
$$
L'**energia potenziale** è $V = -U$. In tutta la materia si usa la convenzione $\vec{F} = \operatorname{grad} U$, perciò il potenziale del peso di un corpo di massa $m$ e baricentro $G$ è
$$
U = -m g\,y_G ,
$$
e il potenziale di una molla di costante elastica $k$, lunghezza $\ell$ e lunghezza a riposo $\ell_0$ è
$$
U = -\frac{1}{2}\,k\,(\ell - \ell_0)^2 .
$$
Il potenziale di un sistema di forze conservative è la somma dei potenziali delle singole forze. Per un'asta omogenea di massa $m$ e lunghezza $\ell$, incernierata in $A$ e inclinata di $\vartheta$ rispetto alla verticale discendente, il baricentro ha quota $y_G = -\dfrac{\ell}{2}\cos\vartheta$ rispetto ad $A$, quindi $U = \dfrac{m g \ell}{2}\cos\vartheta$.
:::

::::teorema{#stazionarieta-del-potenziale titolo="Le configurazioni di equilibrio sono i punti stazionari del potenziale"}
Sia dato un sistema olonomo a vincoli fissi, bilaterali e ideali, soggetto a una sollecitazione conservativa di potenziale $U$. Una configurazione $q_0$ interna al dominio delle coordinate è di equilibrio se e solo se
$$
\frac{\partial U}{\partial q_h}(q_0) = 0 ,
\qquad h = 1, \dots, n ,
$$
cioè se e solo se $q_0$ è un punto stazionario di $U$, ed equivalentemente di $V = -U$.

Il teorema trasforma la ricerca dell'equilibrio nel calcolo di un gradiente, perché basta scrivere il potenziale in funzione delle coordinate lagrangiane e risolvere il sistema $\operatorname{grad} U = 0$. Per l'asta omogenea incernierata in un estremo risulta $U'(\vartheta) = -\dfrac{m g \ell}{2}\sin\vartheta$, che si annulla per $\vartheta = 0$ e $\vartheta = \pi$, quindi le configurazioni di equilibrio sono le due verticali.

:::dimostrazione
Le equazioni di Lagrange del sistema sono
$$
\frac{d}{dt}\frac{\partial T}{\partial \dot{q}_h} - \frac{\partial T}{\partial q_h} = \frac{\partial U}{\partial q_h} ,
\qquad h = 1, \dots, n .
$$
Si sostituisce la funzione costante $q(t) = q_0$. Allora $\dot{q} = 0$ e $\ddot{q} = 0$ in ogni istante; poiché $T$ è una forma quadratica omogenea nelle $\dot{q}_h$, sia $\dfrac{\partial T}{\partial \dot{q}_h}$ sia $\dfrac{\partial T}{\partial q_h}$ sono nulle ad atto di moto nullo. Il primo membro è perciò nullo, e la funzione costante risolve le equazioni se e solo se $\dfrac{\partial U}{\partial q_h}(q_0) = 0$ per ogni $h$.

Viceversa, sia $q_0$ un punto stazionario di $U$. Le equazioni di Lagrange si scrivono nella forma $\mathbb{A}(q)\,\ddot{q} = b(q, \dot{q})$ con $b$ nullo quando $\dot{q} = 0$ e $\operatorname{grad} U(q) = 0$; poiché $\mathbb{A}(q_0)$ è invertibile, il problema di Cauchy con dati $q(0) = q_0$ e $\dot{q}(0) = 0$ ammette una sola soluzione, che è la funzione costante $q(t) = q_0$. Perciò $q_0$ è una configurazione di equilibrio.
:::
::::

:::esempio{titolo="Asta incernierata con una molla"}
L'asta omogenea $AB$ di massa $m$ e lunghezza $\ell$ è incernierata in $A$ e si muove nel piano verticale; una molla di costante $k$ e lunghezza a riposo nulla collega $B$ al punto fisso $C$, posto sulla verticale a distanza $\ell$ sotto $A$. Si prende come coordinata lagrangiana l'angolo $\vartheta$ fra l'asta e la verticale discendente.

::struttura{nodi="A,0,3;B,1.5,0.4" aste="A-B" vincoli="A,cerniera,90" tratteggi="0,3 0,0.65" linee="0,0 0.3,0.3 0.75,-0.2 1.2,0.3 1.5,0.4" punti="0,0,C;0.75,1.7,G,baricentro" forze="0.75 1.7,0,-0.9,mg" etichette="0.35,2,ϑ;0.8,-0.6,k" titolo="Asta incernierata in $A$ con la molla fra $B$ e il punto fisso $C$"}

La distanza fra $B$ e $C$ vale $\overline{BC}^2 = 2\ell^2\,(1 - \cos\vartheta)$, quindi
$$
U(\vartheta) = \frac{m g \ell}{2}\cos\vartheta - k\,\ell^2\,(1 - \cos\vartheta)
= \left( \frac{m g \ell}{2} + k\,\ell^2 \right)\cos\vartheta - k\,\ell^2 .
$$
Dalla condizione $U'(\vartheta) = 0$ segue $\sin\vartheta = 0$, perciò le configurazioni di equilibrio sono $\vartheta = 0$ e $\vartheta = \pi$.
:::

## Stabilità secondo Lyapunov

Sapere che una configurazione è di equilibrio dice che cosa accade con dati iniziali esatti. La stabilità riguarda invece i moti che partono vicino all'equilibrio, con una piccola velocità iniziale.

:::definizione{#stabilita-lyapunov titolo="Equilibrio stabile secondo Lyapunov"}
Una configurazione di equilibrio $q_0$ è **stabile** quando, per ogni $\varepsilon > 0$, esiste $\delta > 0$ tale che ogni moto con dati iniziali che soddisfano
$$
|q(0) - q_0| < \delta ,
\qquad
|\dot{q}(0)| < \delta
$$
verifica $|q(t) - q_0| < \varepsilon$ e $|\dot{q}(t)| < \varepsilon$ per ogni $t \ge 0$. In altre parole, basta partire abbastanza vicino alla configurazione, e abbastanza lentamente, per restare entro la tolleranza voluta per tutto il moto successivo. La definizione chiede che la condizione valga anche sulle velocità, perché una configurazione può essere attraversata con velocità grande.
:::

:::osservazione{#equilibrio-instabile titolo="Equilibrio instabile"}
Una configurazione di equilibrio che non soddisfa la definizione di stabilità si dice **instabile**: esiste allora una tolleranza $\varepsilon$ che viene superata da moti con dati iniziali arbitrariamente vicini all'equilibrio. L'asta incernierata in $A$ nella configurazione $\vartheta = \pi$, con l'estremo libero in alto, è instabile: per quanto piccolo sia lo scostamento iniziale, l'asta si allontana e arriva alla configurazione opposta.

::grafico{f="x^4-2*x^2;-0.6" xmin=-2 xmax=2 ymin=-1.5 ymax=1.5 punti="-1,-1,pieno;1,-1,pieno;0,0,pieno" nomi="q,V" etichette="-1.75,-0.35,E;0.12,0.25,instabile;0.75,-1.45,stabile" titolo="Un moto di energia $E$ minore del massimo di $V$ resta nella buca attorno al minimo"}
:::

:::attenzione{titolo="Stabilità non significa ritorno all'equilibrio"}
La definizione chiede che il moto resti vicino a $q_0$, e non che vi tenda. Un pendolo semplice scostato di un angolo piccolo oscilla indefinitamente attorno alla posizione più bassa senza avvicinarsi ad essa: la configurazione è stabile, e il moto non converge all'equilibrio. La convergenza compare quando è presente una dissipazione, come nelle oscillazioni smorzate.
:::

## Il teorema di Lagrange-Dirichlet

:::richiamo{#conservazione-energia titolo="Conservazione dell'energia meccanica"}
Per un sistema olonomo a vincoli fissi, bilaterali e ideali, soggetto a una sollecitazione conservativa di potenziale $U$, l'energia meccanica
$$
E = T + V ,
\qquad V = -U ,
$$
si mantiene costante lungo ogni moto. Si rimanda all'argomento sulla dinamica dei sistemi.
:::

::::teorema{#lagrange-dirichlet titolo="Teorema di Lagrange-Dirichlet"}
Sia dato un sistema olonomo a vincoli fissi, bilaterali e ideali, soggetto a una sollecitazione conservativa di energia potenziale $V$ di classe $C^2$. Se $q_0$ è un punto di **minimo relativo proprio** di $V$, cioè se esiste un intorno di $q_0$ in cui $V(q) > V(q_0)$ per ogni $q \neq q_0$, allora $q_0$ è una configurazione di equilibrio stabile.

Il teorema riduce lo studio della stabilità allo studio di un minimo di una funzione di $n$ variabili, che si affronta con gli strumenti dell'analisi, cioè la derivata seconda a un grado di libertà e la matrice hessiana a più gradi di libertà. L'idea della dimostrazione è che l'energia meccanica si conserva, e che una buca di potenziale attorno a $q_0$ non lascia uscire un moto che parte con energia piccola.

:::dimostrazione
Poiché $q_0$ è un punto di minimo interno di $V$, il gradiente di $V$ vi è nullo, perciò $q_0$ è una configurazione di equilibrio. Si può supporre $V(q_0) = 0$, dato che l'energia potenziale è definita a meno di una costante additiva.

Sia $\varepsilon > 0$ abbastanza piccolo perché la palla chiusa di centro $q_0$ e raggio $\varepsilon$ sia contenuta nell'intorno in cui $V(q) > 0$ per $q \neq q_0$. La frontiera $|q - q_0| = \varepsilon$ è un insieme chiuso e limitato e $V$ è continua, quindi $V$ vi ammette minimo
$$
\mu = \min_{|q - q_0| = \varepsilon} V(q) > 0 .
$$
La funzione $E(q, \dot{q}) = T(q, \dot{q}) + V(q)$ è continua e vale $E(q_0, 0) = 0$, perciò esiste $\delta > 0$ tale che $|q - q_0| < \delta$ e $|\dot{q}| < \delta$ implicano $E(q, \dot{q}) < \mu$.

Si consideri il moto con dati iniziali in tale intorno. L'energia si conserva, quindi $E(t) = E(0) < \mu$ per ogni $t$. Se esistesse un istante $t_1 > 0$ con $|q(t_1) - q_0| = \varepsilon$, allora, poiché $T \ge 0$,
$$
E(t_1) = T(t_1) + V(q(t_1)) \ge V(q(t_1)) \ge \mu ,
$$
contro $E(t_1) < \mu$. La funzione $t \mapsto |q(t) - q_0|$ è continua e parte da un valore minore di $\delta < \varepsilon$, perciò non può superare $\varepsilon$ senza assumere il valore $\varepsilon$; di conseguenza $|q(t) - q_0| < \varepsilon$ per ogni $t \ge 0$.

Resta da controllare le velocità. Sulla palla chiusa di raggio $\varepsilon$ la matrice $\mathbb{A}(q)$ è simmetrica, definita positiva e continua, perciò il suo autovalore minimo ha un estremo inferiore $\lambda > 0$ e vale $T \ge \dfrac{\lambda}{2}\,|\dot{q}|^2$. Dalle disuguaglianze $T \le E < \mu$ segue
$$
|\dot{q}(t)| < \sqrt{\frac{2\mu}{\lambda}}
$$
per ogni $t \ge 0$. Poiché $\mu$ tende a zero al tendere a zero di $\varepsilon$, la maggiorazione delle velocità si rende piccola quanto si vuole, e la configurazione $q_0$ è stabile.
:::
::::

:::osservazione{#inversione-parziale titolo="Condizione sufficiente e criterio di instabilità"}
Il teorema di Lagrange-Dirichlet dà una condizione sufficiente. Il risultato inverso vale nei casi che si incontrano negli esercizi, perché, se la matrice hessiana di $V$ in $q_0$ ammette un autovalore negativo, allora l'equilibrio è instabile per i teoremi di instabilità di Lyapunov. Negli esercizi si conclude quindi la stabilità dal segno dell'hessiana, e si lascia da parte il solo caso in cui l'hessiana è semidefinita e singolare.
:::

## Stabilità a un grado di libertà

:::richiamo{#richiamo-taylor titolo="Formula di Taylor con il resto di Peano"}
Sia $f$ una funzione di classe $C^2$ in un intorno di $x_0$. Allora
$$
f(x) = f(x_0) + f'(x_0)\,(x - x_0) + \frac{1}{2}\,f''(x_0)\,(x - x_0)^2 + o\big((x - x_0)^2\big)
$$
per $x \to x_0$. Si rimanda all'argomento sulle derivate e la formula di Taylor di Analisi 1.
:::

:::teorema{#criterio-un-grado-di-liberta titolo="Criterio della derivata seconda"}
Sia dato un sistema olonomo conservativo a un grado di libertà, con energia potenziale $V(q)$ di classe $C^2$, e sia $q_0$ una configurazione di equilibrio, cioè $V'(q_0) = 0$. Allora
$$
\begin{cases}
V''(q_0) > 0 & \text{equilibrio stabile} \\[4pt]
V''(q_0) < 0 & \text{equilibrio instabile}
\end{cases}
$$
Se $V''(q_0) > 0$, per la formula di Taylor $V(q) - V(q_0) = \dfrac{1}{2}\,V''(q_0)\,(q - q_0)^2 + o\big((q-q_0)^2\big)$ è positivo in un intorno bucato di $q_0$, quindi $q_0$ è un minimo proprio e il teorema di Lagrange-Dirichlet si applica. Se $V''(q_0) < 0$ la configurazione è un massimo proprio di $V$ e l'equilibrio è instabile. Nelle applicazioni conviene lavorare con il potenziale $U = -V$, perché l'equilibrio è stabile dove $U$ ha un massimo.
:::

:::esempio{titolo="Le due configurazioni verticali dell'asta"}
Per l'asta incernierata con la molla, da $U(\vartheta) = \left( \dfrac{m g \ell}{2} + k\,\ell^2 \right)\cos\vartheta - k\,\ell^2$ segue
$$
U''(\vartheta) = -\left( \frac{m g \ell}{2} + k\,\ell^2 \right)\cos\vartheta .
$$
In $\vartheta = 0$ risulta $U'' < 0$, quindi $V'' > 0$ e la configurazione con l'asta in basso è **stabile**; in $\vartheta = \pi$ risulta $V'' < 0$ e la configurazione con l'asta in alto è **instabile**. La molla, che tira $B$ verso il basso, rafforza l'effetto del peso in entrambe le configurazioni.

::grafico{f="-cos(x)" xmin=-3.6 xmax=3.6 ymin=-1.5 ymax=1.5 punti="0,-1,pieno;3.1416,1,pieno;-3.1416,1,pieno" nomi="ϑ,V" titolo="Energia potenziale dell'asta: minimo in $\vartheta = 0$, massimi in $\vartheta = \pm\pi$"}
:::

:::attenzione{#caso-degenere titolo="Derivata seconda nulla"}
Quando $V''(q_0) = 0$ il criterio non si applica e la natura dell'equilibrio si decide con le derivate successive. Per $V(q) = q^4$ la configurazione $q = 0$ è un minimo proprio, quindi è stabile; per $V(q) = -q^4$ è un massimo proprio ed è instabile; per $V(q) = q^3$ non è né l'uno né l'altro e l'equilibrio è instabile. In tutti e tre i casi $V'(0) = V''(0) = 0$.

::grafico{f="x^4;-x^4;x^3" xmin=-1.3 xmax=1.3 ymin=-1.3 ymax=1.3 punti="0,0,pieno" nomi="q,V" titolo="Tre energie potenziali con $V'(0) = V''(0) = 0$: $q^4$ (stabile), $-q^4$ e $q^3$ (instabili)"}
:::

## Stabilità a più gradi di libertà

:::definizione{#matrice-hessiana titolo="Matrice hessiana dell'energia potenziale"}
Sia $V$ di classe $C^2$ e sia $q_0$ una configurazione di equilibrio. La **matrice hessiana** di $V$ in $q_0$ è la matrice simmetrica di ordine $n$
$$
\mathbb{V} = \left[ \frac{\partial^2 V}{\partial q_h\,\partial q_k}(q_0) \right]_{h,k = 1,\dots,n} .
$$
È la matrice della forma quadratica che approssima $V - V(q_0)$ vicino a $q_0$, e compare anche nelle equazioni delle piccole oscillazioni.
:::

:::richiamo{#segno-forma-quadratica titolo="Segno di una forma quadratica"}
Una matrice simmetrica reale ha autovalori reali. La forma quadratica associata è definita positiva se e solo se tutti gli autovalori sono positivi, ed equivalentemente, per il criterio di Sylvester, se e solo se tutti i minori principali di nord-ovest sono positivi. Per una matrice di ordine due la condizione si scrive
$$
\begin{cases}
\det \mathbb{V} > 0 \\[4pt]
V_{11} > 0
\end{cases}
$$
mentre $\det \mathbb{V} < 0$ dice che i due autovalori hanno segno opposto. Si rimanda all'argomento sulle forme quadratiche e la diagonalizzazione di Algebra lineare.
:::

:::teorema{#criterio-hessiano titolo="Criterio dell'hessiana"}
Sia $q_0$ una configurazione di equilibrio di un sistema olonomo conservativo a vincoli fissi, bilaterali e ideali, e sia $\mathbb{V}$ la matrice hessiana di $V$ in $q_0$. Se $\mathbb{V}$ è definita positiva, allora $q_0$ è un minimo proprio di $V$ e l'equilibrio è stabile per il teorema di Lagrange-Dirichlet. Se $\mathbb{V}$ ammette un autovalore negativo, l'equilibrio è instabile.

A due gradi di libertà il criterio si usa nella forma data dal segno del determinante e del primo elemento. Un determinante negativo basta per concludere l'instabilità, perché gli autovalori hanno allora segno opposto, e non serve calcolarli.
:::

:::esempio{titolo="Doppio pendolo di due aste"}
Due aste omogenee uguali, di massa $m$ e lunghezza $\ell$, sono incernierate la prima in $O$ e la seconda all'estremo libero della prima; gli angoli $\vartheta_1$ e $\vartheta_2$ sono misurati dalla verticale discendente.

::struttura{nodi="O,0,3.4;A,0.9,1.74;B,2.5,1.1" aste="O-A;A-B" vincoli="O,cerniera,90" cerniere="A" tratteggi="0,3.4 0,1.6;0.9,1.74 0.9,0.3" etichette="0.25,2.5,ϑ_1;1.2,0.95,ϑ_2" punti="0.45,2.57,G_1,baricentro;1.7,1.42,G_2,baricentro" titolo="Doppio pendolo: la seconda asta è incernierata all'estremo libero della prima"}

L'energia potenziale è
$$
V = -m g \ell \left( \frac{3}{2}\cos\vartheta_1 + \frac{1}{2}\cos\vartheta_2 \right) ,
$$
e il suo gradiente si annulla nelle quattro configurazioni con $\vartheta_1, \vartheta_2 \in \{0, \pi\}$. L'hessiana è diagonale,
$$
\mathbb{V} = m g \ell
\begin{bmatrix}
\dfrac{3}{2}\cos\vartheta_1 & 0 \\[8pt]
0 & \dfrac{1}{2}\cos\vartheta_2
\end{bmatrix} ,
$$
quindi la sola configurazione **stabile** è $(0, 0)$, con entrambe le aste in basso; nelle altre tre almeno un autovalore è negativo.
:::

## Equilibrio al variare di un parametro

:::osservazione{#parametro-adimensionale titolo="Il parametro adimensionale di un sistema"}
Quando il potenziale contiene più costanti, la discussione si semplifica raccogliendo un fattore e introducendo un parametro adimensionale, cioè un numero puro che confronta due effetti. Nei sistemi formati da aste pesanti e molle il parametro è il rapporto fra l'azione del peso e quella elastica, per esempio $\lambda = \dfrac{m g}{2 k \ell}$. Le configurazioni di equilibrio e la loro stabilità dipendono allora solo da $\lambda$, e non dai quattro dati separatamente.
:::

:::esempio{#biforcazione titolo="Biforcazione di un'asta appoggiata a due guide"}
L'asta omogenea $AB$, di massa $m$ e lunghezza $\ell$, ha l'estremo $A$ su una guida verticale liscia e l'estremo $B$ su una guida orizzontale liscia; una molla di costante $k$ e lunghezza a riposo nulla collega $B$ all'origine $O$.

::struttura{nodi="A,0,2.6;B,3,0" aste="A-B" vincoli="A,carrello,180;B,carrello,270" linee="0,0 4,0;0,0 0,3.2;0,0 0.4,0.3 0.9,0 1.4,0.3 1.9,0 2.4,0.3 2.7,0.15 3,0" punti="1.5,1.3,G,baricentro" etichette="2.45,0.3,ϑ;1.5,0.75,k" forze="1.5 1.3,0,-0.8,mg" titolo="Asta con $A$ sulla guida verticale, $B$ su quella orizzontale e la molla fra $B$ e $O$"}

Con $\vartheta$ angolo fra l'asta e la guida orizzontale e $\lambda = \dfrac{m g}{2 k \ell}$ risulta
$$
U'(\vartheta) = \ell\,\cos\vartheta\,\left( k \ell \sin\vartheta - \frac{m g}{2} \right) ,
$$
quindi l'asta è in equilibrio per $\vartheta = \dfrac{\pi}{2}$, e inoltre, se $\lambda < 1$, nelle due configurazioni oblique con $\sin\vartheta = \lambda$. La configurazione verticale è stabile per $\lambda < 1$ e instabile per $\lambda > 1$, mentre le due oblique sono instabili. Il valore $\lambda = 1$ è un valore di **biforcazione**, perché attraversandolo cambia il numero delle configurazioni di equilibrio e la verticale perde la stabilità.

::grafico{f="pi/2" curve="cos(t),pi/2+t,-1.45,1.45" xmin=0 xmax=3 ymin=0 ymax=3.3 nomi="λ,ϑ" etichette="2.2,1.75,ϑ = π/2;0.5,3.05,sin ϑ = λ;1.08,0.2,λ = 1" segmenti="1,0,1,3.15" titolo="Configurazioni di equilibrio al variare di $\lambda$: dalla verticale $\vartheta = \dfrac{\pi}{2}$ si staccano in $\lambda = 1$ i due rami obliqui"}
:::

## Le equazioni delle piccole oscillazioni

::::teorema{#equazioni-delle-piccole-oscillazioni titolo="Equazioni delle piccole oscillazioni"}
Sia $q_0$ una configurazione di equilibrio di un sistema olonomo conservativo a vincoli fissi, bilaterali e ideali, e siano $\mathbb{A} = \mathbb{A}(q_0)$ la matrice cinetica calcolata nella configurazione di equilibrio e $\mathbb{V}$ la matrice hessiana di $V$ in $q_0$. Posto $x = q - q_0$, i moti che si svolgono vicino a $q_0$ con velocità piccole sono descritti, a meno di termini di ordine superiore, dal sistema lineare
$$
\mathbb{A}\,\ddot{x} + \mathbb{V}\,x = 0 .
$$
Il sistema linearizzato ha coefficienti costanti, perciò si risolve con i metodi delle equazioni differenziali lineari, e le sue soluzioni danno il periodo e la forma delle oscillazioni attorno all'equilibrio. Parlare di oscillazioni piccole significa che lo scostamento $x$ e la velocità $\dot{x}$ restano abbastanza piccoli perché i termini trascurati siano irrilevanti; il teorema di Lagrange-Dirichlet garantisce che, attorno a una configurazione di equilibrio stabile, dati iniziali piccoli producono moti che restano piccoli per ogni tempo.

:::dimostrazione
Si sviluppano $T$ e $V$ attorno a $q_0$. Nell'energia cinetica si sostituisce $\mathbb{A}(q) = \mathbb{A}(q_0) + O(|x|)$; poiché $T$ contiene già il fattore quadratico $\dot{x} \cdot \mathbb{A}\,\dot{x}$, i termini trascurati sono di ordine superiore al secondo nelle variabili $x$ e $\dot{x}$, quindi
$$
T = \frac{1}{2}\,\dot{x} \cdot \mathbb{A}\,\dot{x} + \cdots
$$
Nell'energia potenziale il termine di primo grado è nullo, perché $q_0$ è stazionaria, perciò per la formula di Taylor
$$
V = V(q_0) + \frac{1}{2}\,x \cdot \mathbb{V}\,x + o(|x|^2) .
$$
Si scrivono ora le equazioni di Lagrange della lagrangiana quadratica $\mathcal{L} = \dfrac{1}{2}\,\dot{x} \cdot \mathbb{A}\,\dot{x} - \dfrac{1}{2}\,x \cdot \mathbb{V}\,x$. Dato che $\mathbb{A}$ e $\mathbb{V}$ sono simmetriche e costanti,
$$
\frac{\partial \mathcal{L}}{\partial \dot{x}} = \mathbb{A}\,\dot{x} ,
\qquad
\frac{\partial \mathcal{L}}{\partial x} = -\,\mathbb{V}\,x ,
$$
e le equazioni $\dfrac{d}{dt}\dfrac{\partial \mathcal{L}}{\partial \dot{x}} - \dfrac{\partial \mathcal{L}}{\partial x} = 0$ diventano $\mathbb{A}\,\ddot{x} + \mathbb{V}\,x = 0$.
:::
::::

:::teorema{#pulsazioni-proprie titolo="Pulsazioni proprie"}
Siano $\mathbb{A}$ definita positiva e $\mathbb{V}$ definita positiva. Il sistema $\mathbb{A}\,\ddot{x} + \mathbb{V}\,x = 0$ ammette soluzioni della forma $x(t) = u\,\cos(\omega t + \varphi)$, con $u \neq 0$ vettore costante, se e solo se
$$
\det\big( \mathbb{V} - \omega^2\,\mathbb{A} \big) = 0 ,
\qquad
\big( \mathbb{V} - \omega^2\,\mathbb{A} \big)\,u = 0 .
$$
L'equazione $\det(\mathbb{V} - \omega^2 \mathbb{A}) = 0$, detta **equazione caratteristica**, è algebrica di grado $n$ in $\omega^2$ e ammette $n$ radici reali e positive $\omega_1^2, \dots, \omega_n^2$, dette **pulsazioni proprie** del sistema. Sostituendo $x = u\cos(\omega t + \varphi)$ nel sistema si ottiene $(-\omega^2 \mathbb{A} + \mathbb{V})\,u\,\cos(\omega t + \varphi) = 0$, che vale per ogni $t$ se e solo se il vettore $(\mathbb{V} - \omega^2\mathbb{A})\,u$ è nullo; tale sistema omogeneo ha soluzioni non nulle se e solo se il determinante della matrice dei coefficienti si annulla.

Le radici sono reali e positive perché $\mathbb{A}$ e $\mathbb{V}$ sono simmetriche e definite positive. Infatti $\omega^2$ è un autovalore della matrice $\mathbb{A}^{-1}\mathbb{V}$, che è simile a una matrice simmetrica definita positiva, e per ogni autovettore $u$ vale $\omega^2 = \dfrac{u \cdot \mathbb{V}\,u}{u \cdot \mathbb{A}\,u} > 0$. Se invece $\mathbb{V}$ ammette un autovalore negativo, cioè se l'equilibrio è instabile, l'equazione caratteristica ha una radice $\omega^2 < 0$ e la soluzione corrispondente contiene un esponenziale crescente, perciò il moto si allontana dalla configurazione.
:::

:::osservazione{#coordinate-dall-equilibrio titolo="Coordinate misurate dalla configurazione di equilibrio"}
Negli esercizi conviene prendere come origine delle coordinate la configurazione di equilibrio, perché il termine di primo grado dell'energia potenziale è allora nullo e nello sviluppo restano i soli termini quadratici. Un corpo di massa $m$ appeso a una molla di costante $k$ ha energia potenziale $V(s) = \dfrac{1}{2}\,k\,(s - \ell_0)^2 - m g s$, con $s$ distanza dal punto di sospensione; posto $s = s_0 + x$ con $s_0 = \ell_0 + \dfrac{m g}{k}$ risulta $V = \dfrac{1}{2}\,k\,x^2 + \text{costante}$, quindi il peso non compare più e la pulsazione vale $\sqrt{\dfrac{k}{m}}$, qualunque sia l'allungamento statico della molla. La stessa cosa accade in ogni sistema nel quale il peso produce solo uno spostamento della configurazione di equilibrio.
:::

:::teorema{#oscillazioni-un-grado-di-liberta titolo="Pulsazione e periodo a un grado di libertà"}
Per un sistema a un grado di libertà con energia cinetica $T = \dfrac{1}{2}\,a(q)\,\dot{q}^2$ e configurazione di equilibrio stabile $q_0$ con $V''(q_0) > 0$, l'equazione delle piccole oscillazioni è $a(q_0)\,\ddot{x} + V''(q_0)\,x = 0$, quindi il moto è armonico di pulsazione e periodo
$$
\omega = \sqrt{\frac{V''(q_0)}{a(q_0)}} ,
\qquad
\mathcal{T} = \frac{2\pi}{\omega} .
$$
Il coefficiente $a(q_0)$ è l'inerzia del sistema rispetto alla coordinata scelta e $V''(q_0)$ ne è la rigidezza, perciò a parità di inerzia un potenziale più curvo dà oscillazioni più rapide.
:::

:::esempio{titolo="Periodo del pendolo composto"}
Per l'asta omogenea incernierata in un estremo, $T = \dfrac{1}{2}\,\dfrac{m\ell^2}{3}\,\dot{\vartheta}^2$ e $V = -\dfrac{m g \ell}{2}\cos\vartheta$, quindi $V''(0) = \dfrac{m g \ell}{2}$ e
$$
\omega^2 = \frac{\dfrac{m g \ell}{2}}{\dfrac{m \ell^2}{3}} = \frac{3 g}{2 \ell} ,
\qquad
\mathcal{T} = 2\pi\sqrt{\frac{2\ell}{3g}} .
$$
Il confronto con il pendolo semplice, che ha $\omega^2 = \dfrac{g}{L}$, dà la **lunghezza ridotta** $L = \dfrac{2\ell}{3}$, quindi l'asta oscilla come un pendolo semplice lungo due terzi dell'asta.
:::

## Modi normali e coordinate normali

:::definizione{#modi-normali titolo="Modi normali"}
Un **modo normale** è una soluzione delle equazioni delle piccole oscillazioni nella quale tutte le coordinate oscillano con la stessa pulsazione e in fase,
$$
x(t) = u_r\,\cos(\omega_r t + \varphi_r) ,
$$
dove $\omega_r$ è una pulsazione propria e $u_r$ è una soluzione non nulla di $(\mathbb{V} - \omega_r^2\,\mathbb{A})\,u = 0$. Il vettore $u_r$ è definito a meno di un fattore e dice in quale rapporto si muovono le coordinate, poiché le componenti di segno concorde oscillano nello stesso verso e quelle di segno opposto oscillano in versi opposti. Il moto generale è la sovrapposizione degli $n$ modi,
$$
x(t) = \sum_{r=1}^{n} c_r\,u_r\,\cos(\omega_r t + \varphi_r) ,
$$
con le $2n$ costanti $c_r$ e $\varphi_r$ determinate dai dati iniziali.
:::

:::osservazione{#coordinate-normali titolo="Coordinate normali"}
Gli autovettori $u_1, \dots, u_n$ si possono scegliere ortogonali rispetto a $\mathbb{A}$, cioè con $u_r \cdot \mathbb{A}\,u_s = 0$ per $r \neq s$, e formano una base. Scrivendo $x = \sum_r \xi_r\,u_r$ si ottengono le **coordinate normali** $\xi_r$, che soddisfano le equazioni disaccoppiate
$$
\ddot{\xi}_r + \omega_r^2\,\xi_r = 0 ,
\qquad r = 1, \dots, n .
$$
Ogni coordinata normale si comporta quindi come un oscillatore armonico indipendente dagli altri.

L'ortogonalità rispetto a $\mathbb{A}$ serve anche a ricavare le costanti dai dati iniziali, perché moltiplicando scalarmente $x(0) = \sum_r \xi_r(0)\,u_r$ per $\mathbb{A}\,u_s$ restano solo i termini con $r = s$, da cui
$$
\xi_s(0) = \frac{u_s \cdot \mathbb{A}\,x(0)}{u_s \cdot \mathbb{A}\,u_s} ,
\qquad
\dot{\xi}_s(0) = \frac{u_s \cdot \mathbb{A}\,\dot{x}(0)}{u_s \cdot \mathbb{A}\,u_s} .
$$
Un moto che parte con $\dot{x}(0) = 0$ e con $x(0)$ parallelo a un solo autovettore eccita quel solo modo, e il sistema oscilla con la pulsazione corrispondente.
:::

:::esempio{titolo="Due masse e tre molle"}
Due punti materiali di massa $m$ scorrono su una guida orizzontale liscia e sono collegati alle pareti e fra loro da tre molle uguali di costante $k$. Dette $x_1$ e $x_2$ le ascisse misurate dalle rispettive posizioni di equilibrio,
$$
\mathbb{A} = m
\begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} ,
\qquad
\mathbb{V} = k
\begin{bmatrix} 2 & -1 \\ -1 & 2 \end{bmatrix} ,
$$
e l'equazione caratteristica $(2k - m\omega^2)^2 - k^2 = 0$ dà $\omega_1^2 = \dfrac{k}{m}$ e $\omega_2^2 = \dfrac{3k}{m}$. Il primo modo è $u_1 = (1, 1)$, nel quale le due masse si muovono insieme e la molla centrale resta scarica. Il secondo è $u_2 = (1, -1)$, nel quale le masse si avvicinano e si allontanano in opposizione e la molla centrale si deforma del doppio. Le coordinate normali sono $\xi_1 = \dfrac{x_1 + x_2}{2}$ e $\xi_2 = \dfrac{x_1 - x_2}{2}$.

::struttura{poligoni="2,0 3,0 3,1 2,1;5,0 6,0 6,1 5,1" linee="0,0 8,0;0,0 0,1.6;8,0 8,1.6;0,0.5 0.4,0.75 0.9,0.25 1.4,0.75 1.9,0.5 2,0.5;3,0.5 3.4,0.75 3.9,0.25 4.4,0.75 4.9,0.25 5,0.5;6,0.5 6.4,0.75 6.9,0.25 7.4,0.75 7.9,0.5 8,0.5" etichette="1,1.15,k;4,1.15,k;7,1.15,k;2.5,0.5,m;5.5,0.5,m" frecce="2.5,1.5,3.3,1.5,x_1;5.5,1.5,6.3,1.5,x_2" titolo="Le due masse e le tre molle, con le ascisse misurate dalle posizioni di equilibrio"}
:::

## Piccole oscillazioni smorzate

:::osservazione{#oscillazioni-smorzate titolo="Smorzamento viscoso"}
Quando al sistema a un grado di libertà si aggiunge una resistenza viscosa, cioè una sollecitazione di componente lagrangiana $-h\,\dot{q}$ con $h > 0$, l'equazione delle piccole oscillazioni attorno a una configurazione di equilibrio stabile diventa
$$
a\,\ddot{x} + h\,\dot{x} + V''\,x = 0 ,
$$
cioè $\ddot{x} + 2\beta\,\dot{x} + \omega_0^2\,x = 0$ con $\beta = \dfrac{h}{2a}$ e $\omega_0^2 = \dfrac{V''}{a}$. L'equazione caratteristica $s^2 + 2\beta s + \omega_0^2 = 0$ distingue i tre casi
$$
\begin{cases}
\beta < \omega_0 & x = C\,e^{-\beta t}\cos(\omega t + \varphi), \quad \omega = \sqrt{\omega_0^2 - \beta^2} \\[4pt]
\beta = \omega_0 & x = (C_1 + C_2 t)\,e^{-\beta t} \\[4pt]
\beta > \omega_0 & x = C_1 e^{s_1 t} + C_2 e^{s_2 t}, \quad s_{1,2} < 0
\end{cases}
$$
Nel primo caso il moto è oscillatorio con ampiezza che decresce come $e^{-\beta t}$ e pseudo-periodo $\dfrac{2\pi}{\omega}$; il valore $h = 2a\,\omega_0$ che separa il primo caso dagli altri è lo **smorzamento critico**. In tutti e tre i casi la soluzione tende a zero, perciò la configurazione di equilibrio è asintoticamente stabile. Si rimanda all'argomento sulla dinamica del punto materiale per l'oscillatore smorzato e per la risonanza.

::grafico{f="exp(-0.25*x)*cos(3*x);exp(-0.25*x)" xmin=0 xmax=12 ymin=-1.2 ymax=1.2 nomi="t,x" titolo="Oscillazione smorzata e la curva $C\,e^{-\beta t}$ che ne limita l'ampiezza"}
:::
