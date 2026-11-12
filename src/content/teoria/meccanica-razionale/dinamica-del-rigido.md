---
titolo: Dinamica del corpo rigido ed equazioni di Eulero
sommario: Come si scrivono e si integrano le equazioni del moto di un corpo rigido con un asse fisso, nel moto piano e con un punto fisso, dal pendolo composto alle equazioni di Eulero, alle rotazioni permanenti e alle precessioni regolari del giroscopio.
---

## Le equazioni cardinali per un corpo rigido

:::richiamo{titolo="Equazioni cardinali della dinamica"}
Sia un sistema materiale soggetto a forze esterne di risultante $\vec{R}^{(e)}$ e di momento risultante $\vec{M}_O^{(e)}$ rispetto a un polo $O$ fisso. Allora
$$
\frac{d\vec{Q}}{dt} = \vec{R}^{(e)} ,
\qquad
\frac{d\vec{K}_O}{dt} = \vec{M}_O^{(e)} ,
$$
con $\vec{Q} = M\,\vec{v}_G$ la quantità di moto e $\vec{K}_O$ il momento angolare. La seconda equazione vale nella stessa forma con polo nel centro di massa $G$, anche quando $G$ si muove. Si rimanda all'argomento sulla dinamica dei sistemi.
:::

:::teorema{#momento-angolare-rigido titolo="Momento angolare ed energia cinetica di un corpo rigido"}
Sia un corpo rigido di massa $M$ e velocità angolare $\vec{\omega}$. Se il punto $O$ del corpo è fisso, allora
$$
\vec{K}_O = \mathbb{I}_O\,\vec{\omega} ,
\qquad
T = \frac{1}{2}\,\vec{\omega} \cdot \mathbb{I}_O\,\vec{\omega} ;
$$
in generale, con polo nel centro di massa,
$$
\vec{K}_G = \mathbb{I}_G\,\vec{\omega} ,
\qquad
T = \frac{1}{2}\,M\,v_G^2 + \frac{1}{2}\,\vec{\omega} \cdot \mathbb{I}_G\,\vec{\omega} .
$$
Le due scritture seguono dalla formula fondamentale della cinematica rigida e dal teorema di König, perciò si rimanda agli argomenti sulla cinematica del corpo rigido e sulla dinamica dei sistemi. Il tensore d'inerzia porta sulla diagonale i momenti d'inerzia e fuori dalla diagonale i prodotti d'inerzia cambiati di segno,
$$
\mathbb{I}_O =
\begin{pmatrix}
I_{xx} & -I_{xy} & -I_{xz} \\
-I_{xy} & I_{yy} & -I_{yz} \\
-I_{xz} & -I_{yz} & I_{zz}
\end{pmatrix} ,
\qquad
I_{xy} = \int xy\,dm .
$$
Quando la terna solidale $\xi$, $\eta$, $\zeta$ è principale d'inerzia in $O$ il tensore è diagonale, con momenti principali $A$, $B$, $C$. Dette $p$, $q$, $r$ le componenti di $\vec{\omega}$ su quella terna, le due formule diventano $\vec{K}_O = A\,p\,\hat{e}_\xi + B\,q\,\hat{e}_\eta + C\,r\,\hat{e}_\zeta$ e $T = \dfrac{1}{2}\big( A\,p^2 + B\,q^2 + C\,r^2 \big)$, ed è in questa forma che si usano in tutto l'argomento.
:::

:::osservazione{#incognite-del-moto titolo="Equazioni e incognite nel moto di un rigido"}
Un corpo rigido libero ha sei gradi di libertà, e le due equazioni cardinali danno sei equazioni scalari, perciò il moto è determinato dalle forze attive e dai dati iniziali. Quando il corpo è vincolato, i gradi di libertà scendono a $n$ e fra le forze esterne compaiono le reazioni vincolari, che sono incognite. Nel caso dell'asse fisso ($n = 1$), del moto piano ($n \le 3$) e del punto fisso ($n = 3$) si scelgono le componenti delle equazioni cardinali che contengono solo le coordinate lagrangiane, si integra il moto e solo dopo si ricavano le reazioni dalle equazioni rimaste.
:::

## Il corpo rigido con un asse fisso

:::definizione{#asse-fisso titolo="Corpo rigido con un asse fisso"}
Un corpo rigido ha un **asse fisso** quando due suoi punti distinti $O$ e $A$ restano fermi; allora resta ferma tutta la retta $a$ per $O$ e $A$, i punti del corpo descrivono circonferenze di centro sull'asse e il sistema ha un grado di libertà. Si prende l'asse $z$ coincidente con $a$ e si indica con $\vartheta$ l'angolo di rotazione, misurato in verso antiorario attorno a $\hat{k}$, cosicché $\vec{\omega} = \dot{\vartheta}\,\hat{k}$. Il momento d'inerzia rispetto all'asse si indica con $I_a = I_{zz}$ ed è costante nel tempo, poiché l'asse è fisso anche nel corpo. Un volano, una puleggia con asse orizzontale e una porta sui cardini sono corpi rigidi con asse fisso.
:::

::::teorema{#equazione-asse-fisso titolo="Equazione del moto attorno a un asse fisso"}
Sia un corpo rigido con asse fisso $a$, vincolato da vincoli ideali, e sia $M_a^{(e)}$ il momento assiale rispetto ad $a$ delle sole forze attive. Allora
$$
I_a\,\ddot{\vartheta} = M_a^{(e)} .
$$
L'equazione contiene la sola incognita $\vartheta$, quindi determina il moto senza che si conoscano le reazioni dell'asse; la stessa equazione descrive un punto materiale di massa $I_a$ in moto su una retta sotto la forza $M_a^{(e)}$. Per un volano frenato da una coppia costante $-\mathcal{M}$ si ottiene $\ddot{\vartheta} = -\dfrac{\mathcal{M}}{I_a}$, perciò la velocità angolare decresce linearmente nel tempo e il volano si ferma dopo $\dfrac{I_a\,\omega_0}{\mathcal{M}}$ secondi.

::struttura{poligoni="0,0 1.9,-1.1 1.5,-3 -0.7,-2.7 -1.1,-1" nodi="O,0,0" vincoli="O,cerniera,90" punti="0.45,-1.85,G,baricentro" tratteggi="0,0 0,-3.3" forze="0.45 -1.85,0,-1,Mg" quote="O,0.45 -1.85,d,-0.4" etichette="0.33,-1.15,ϑ" coppie="-0.75 -0.35,1,ω" titolo="Corpo rigido con asse fisso perpendicolare al foglio: un grado di libertà, l'angolo $\vartheta$, e il baricentro a distanza $d$ dall'asse"}

:::dimostrazione
Si proietta la seconda equazione cardinale con polo in $O$ sull'asse $z$. La velocità angolare è $\vec{\omega} = \dot{\vartheta}\,\hat{k}$, quindi la terza componente di $\vec{K}_O = \mathbb{I}_O\,\vec{\omega}$ vale $K_{Oz} = I_{zz}\,\dot{\vartheta} = I_a\,\dot{\vartheta}$. Il momento d'inerzia $I_a$ è costante, perciò
$$
\frac{dK_{Oz}}{dt} = I_a\,\ddot{\vartheta} .
$$
Il momento assiale delle forze esterne è la somma del momento delle forze attive e del momento delle reazioni dell'asse. I vincoli sono ideali, dunque le reazioni sono ortogonali agli spostamenti virtuali; l'unico spostamento virtuale è la rotazione attorno ad $a$, perciò il lavoro virtuale delle reazioni è nullo per ogni $\delta\vartheta$ e il loro momento assiale rispetto ad $a$ è nullo. Resta $I_a\,\ddot{\vartheta} = M_a^{(e)}$.
:::
::::

:::osservazione{#energia-asse-fisso titolo="Integrale primo dell'energia"}
L'energia cinetica di un rigido con asse fisso è $T = \dfrac{1}{2}\,I_a\,\dot{\vartheta}^2$. Se le forze attive sono conservative, con potenziale $U(\vartheta)$ ed energia potenziale $V = -U$, allora dall'equazione del moto segue l'integrale primo
$$
\frac{1}{2}\,I_a\,\dot{\vartheta}^2 + V(\vartheta) = E ,
$$
perché il lavoro delle reazioni di un vincolo ideale e fisso è nullo. Con il solo peso si ha $V = M g\,y_G$, e l'integrale primo dà la velocità angolare in funzione della quota del baricentro senza integrare l'equazione differenziale. Un'asta omogenea di massa $m$ e lunghezza $\ell$ incernierata in un estremo, lasciata da ferma in posizione orizzontale, ha $I_a = \dfrac{m\,\ell^2}{3}$ e abbassa il baricentro di $\dfrac{\ell}{2}$, quindi $\dfrac{1}{2}\cdot\dfrac{m\,\ell^2}{3}\,\omega^2 = \dfrac{m\,g\,\ell}{2}$ e la velocità angolare in posizione verticale è $\omega = \sqrt{\dfrac{3g}{\ell}}$.
:::

## Le reazioni dell'asse e il bilanciamento

Le reazioni dell'asse si ricavano dalle equazioni cardinali rimaste, una volta noto il moto, e dipendono in generale dalla velocità angolare.

::::teorema{#reazioni-asse titolo="Reazioni di un asse fisso"}
Sia un corpo rigido con asse fisso $z$, vincolato nei punti $O$ e $A = O + h\,\hat{k}$ da due vincoli ideali di reazioni $\vec{\Phi}_O$ e $\vec{\Phi}_A$, e siano $\vec{R}^{(a)}$ e $\vec{M}_O^{(a)}$ la risultante e il momento delle forze attive. Si prenda la terna solidale $\xi$, $\eta$, $\zeta = z$ con origine in $O$. Allora le componenti trasversali della reazione in $A$ si ottengono da
$$
\begin{cases}
-h\,\Phi_{A\eta} + M^{(a)}_{O\xi} = -I_{\xi\zeta}\,\ddot{\vartheta} + I_{\eta\zeta}\,\dot{\vartheta}^2 \\[6pt]
\phantom{-}h\,\Phi_{A\xi} + M^{(a)}_{O\eta} = -I_{\eta\zeta}\,\ddot{\vartheta} - I_{\xi\zeta}\,\dot{\vartheta}^2
\end{cases}
$$
e la reazione in $O$ dalla prima equazione cardinale $\vec{\Phi}_O + \vec{\Phi}_A + \vec{R}^{(a)} = M\,\vec{a}_G$, con
$$
\vec{a}_G = \ddot{\vartheta}\,\hat{k} \wedge (G - O) - \dot{\vartheta}^2\,(G - O)_\perp ,
$$
dove $(G - O)_\perp$ è la componente di $G - O$ ortogonale all'asse. Le reazioni sono quindi la somma di una parte che dipende solo dalle forze attive e di una parte proporzionale a $\ddot{\vartheta}$ e a $\dot{\vartheta}^2$, che si annulla per ogni moto se e solo se $(G-O)_\perp = \vec{0}$ e $I_{\xi\zeta} = I_{\eta\zeta} = 0$.

::struttura{nodi="O,0,0;A,0,4;D,1.7,3.15,-;E,-1.7,0.85,-" aste="O-A;D-E" vincoli="O,cerniera;A,cerniera,90" punti="0,2,G,baricentro" tratteggi="0,2 0,3.7" reazioni="O,1.1,0,Φ_O;A,-1.1,0,Φ_A" etichette="0.38,2.9,α" quote="O,A,h,-0.95" titolo="Corpo saldato a un albero fra i due cuscinetti $O$ e $A$: le reazioni trasversali dipendono da $\ddot{\vartheta}$ e da $\dot{\vartheta}^2$ attraverso i prodotti d'inerzia"}

:::dimostrazione
Si proiettano le equazioni cardinali sulla terna solidale. Dalla formula fondamentale della cinematica rigida, con $O$ fisso, si ha $\vec{v}_G = \vec{\omega} \wedge (G-O)$ e quindi
$$
\vec{a}_G = \dot{\vec{\omega}} \wedge (G - O) + \vec{\omega} \wedge \big( \vec{\omega} \wedge (G-O) \big) = \ddot{\vartheta}\,\hat{k} \wedge (G-O) - \dot{\vartheta}^2\,(G-O)_\perp ,
$$
che dà la prima equazione cardinale nella forma dell'enunciato. Per la seconda si parte da $\vec{K}_O = \mathbb{I}_O\,\vec{\omega}$ con $\vec{\omega} = \dot{\vartheta}\,\hat{e}_\zeta$, cioè
$$
\vec{K}_O = -I_{\xi\zeta}\,\dot{\vartheta}\,\hat{e}_\xi - I_{\eta\zeta}\,\dot{\vartheta}\,\hat{e}_\eta + I_a\,\dot{\vartheta}\,\hat{e}_\zeta ,
$$
dove i tre prodotti e momenti d'inerzia sono costanti, poiché la terna è solidale al corpo. La derivata di un vettore nel riferimento fisso si ottiene da quella nel riferimento solidale aggiungendo $\vec{\omega} \wedge \vec{K}_O$, perciò
$$
\frac{d\vec{K}_O}{dt} = \big( -I_{\xi\zeta}\,\ddot{\vartheta} + I_{\eta\zeta}\,\dot{\vartheta}^2 \big)\,\hat{e}_\xi + \big( -I_{\eta\zeta}\,\ddot{\vartheta} - I_{\xi\zeta}\,\dot{\vartheta}^2 \big)\,\hat{e}_\eta + I_a\,\ddot{\vartheta}\,\hat{e}_\zeta .
$$
Il momento delle forze esterne rispetto a $O$ è $\vec{M}_O^{(a)} + (A - O) \wedge \vec{\Phi}_A$, perché la reazione in $O$ ha momento nullo rispetto a $O$; dato che $A - O = h\,\hat{e}_\zeta$, il prodotto vettoriale vale $h\,(-\Phi_{A\eta}\,\hat{e}_\xi + \Phi_{A\xi}\,\hat{e}_\eta)$. Uguagliando le componenti su $\hat{e}_\xi$ e su $\hat{e}_\eta$ si ottiene il sistema dell'enunciato, mentre la componente su $\hat{e}_\zeta$ riproduce l'equazione del moto.
:::
::::

:::definizione{#bilanciamento titolo="Bilanciamento statico e dinamico"}
Un corpo rigido con asse fisso è **bilanciato staticamente** quando il suo baricentro sta sull'asse di rotazione, cosicché $\vec{a}_G = \vec{0}$ in ogni moto. È **bilanciato dinamicamente** quando l'asse di rotazione è asse principale d'inerzia in un suo punto, cioè quando $I_{\xi\zeta} = I_{\eta\zeta} = 0$. Quando valgono entrambe le condizioni, le reazioni dei cuscinetti coincidono con quelle che si calcolerebbero in statica, qualunque sia la velocità angolare, e questo è il motivo per cui alberi, ruote e rotori si equilibrano prima di metterli in rotazione. Una ruota con un difetto di massa $m$ a distanza $e$ dall'asse si bilancia staticamente aggiungendo una massa $m'$ diametralmente opposta con $m'e' = m\,e$, e alla velocità angolare $\omega$ il difetto non equilibrato produce reazioni proporzionali a $m\,e\,\omega^2$, che crescono con il quadrato del numero di giri.
:::

:::attenzione
Il bilanciamento statico non implica il bilanciamento dinamico. Un'asta omogenea di massa $m$ e lunghezza $\ell$ saldata per il suo punto medio $G$ a un albero verticale, con $G$ sull'asse e l'asta inclinata di $\alpha$ sull'asse, è bilanciata staticamente, perché $\vec{a}_G = \vec{0}$. Il prodotto d'inerzia rispetto alla terna solidale vale però
$$
I_{\xi\zeta} = \int \xi\,\zeta\,dm = \frac{m}{\ell}\int_{-\ell/2}^{\ell/2} s^2 \sin\alpha \cos\alpha \,ds = \frac{m\,\ell^2}{24}\,\sin 2\alpha ,
$$
che è diverso da zero per $0 < \alpha < \dfrac{\pi}{2}$. Con $\dot{\vartheta} = \omega$ costante i due cuscinetti, distanti $h$, esercitano allora due forze opposte di modulo
$$
\frac{m\,\ell^2\,\omega^2\,\sin 2\alpha}{24\,h} ,
$$
che ruotano con l'albero e sono massime per $\alpha = \dfrac{\pi}{4}$.
:::

## Il pendolo composto

::::teorema{#pendolo-composto titolo="Pendolo composto"}
Sia un corpo rigido di massa $M$ soggetto al solo peso, vincolato da vincoli ideali a un asse fisso orizzontale $a$ che non passa per il baricentro, e siano $d$ la distanza di $G$ dall'asse e $I_a$ il momento d'inerzia rispetto ad $a$. Detto $\vartheta$ l'angolo che il piano contenente $a$ e $G$ forma con il piano verticale, l'equazione del moto è
$$
I_a\,\ddot{\vartheta} = -M\,g\,d\,\sin\vartheta ,
$$
che è l'equazione di un pendolo semplice di lunghezza
$$
\ell_r = \frac{I_a}{M\,d} .
$$
Le piccole oscillazioni attorno a $\vartheta = 0$ hanno pulsazione e periodo
$$
\omega = \sqrt{\frac{M\,g\,d}{I_a}} ,
\qquad
\mathcal{T} = 2\pi\sqrt{\frac{I_a}{M\,g\,d}} .
$$
Il teorema serve a misurare $g$ e a confrontare corpi diversi, poiché due corpi con la stessa $\ell_r$ oscillano con lo stesso periodo, qualunque sia la loro forma. Per un'asta omogenea di lunghezza $\ell$ sospesa per un estremo si ha $I_a = \dfrac{m\,\ell^2}{3}$ e $d = \dfrac{\ell}{2}$, quindi $\ell_r = \dfrac{2\ell}{3}$ e il periodo è quello di un pendolo semplice lungo due terzi dell'asta.

:::dimostrazione
Il momento assiale del peso rispetto ad $a$ si calcola come momento della risultante $-M g\,\hat{\jmath}$ applicata in $G$. La distanza di $G$ dall'asse è $d$ e il braccio del peso rispetto all'asse è la proiezione orizzontale di tale distanza, cioè $d\,\sin\vartheta$; il momento tende a riportare il corpo verso $\vartheta = 0$, perciò ha il segno opposto a $\vartheta$ e vale $-M g\,d\,\sin\vartheta$. Il vincolo è ideale, dunque per l'equazione del moto attorno a un asse fisso si ottiene $I_a\,\ddot{\vartheta} = -M g\,d \sin\vartheta$. Dividendo per $I_a$ e introducendo $\ell_r = \dfrac{I_a}{M d}$ si ha $\ddot{\vartheta} = -\dfrac{g}{\ell_r}\,\sin\vartheta$, che è l'equazione del pendolo semplice di lunghezza $\ell_r$. Per $|\vartheta|$ piccolo si sostituisce $\sin\vartheta$ con $\vartheta$ e si ottiene l'equazione dell'oscillatore armonico $\ddot{\vartheta} + \dfrac{g}{\ell_r}\,\vartheta = 0$, di pulsazione $\sqrt{\dfrac{g}{\ell_r}} = \sqrt{\dfrac{M g d}{I_a}}$.
:::
::::

:::definizione{#lunghezza-ridotta titolo="Lunghezza ridotta e centro di oscillazione"}
La **lunghezza ridotta** di un pendolo composto è $\ell_r = \dfrac{I_a}{M\,d}$, cioè la lunghezza del pendolo semplice che oscilla con lo stesso periodo. Il punto $O^*$ della semiretta che parte dall'asse, passa per $G$ e dista $\ell_r$ dall'asse si chiama **centro di oscillazione**. Per il teorema di Huygens-Steiner si ha $I_a = I_G + M d^2$, quindi, detto $\rho$ il raggio d'inerzia baricentrico rispetto alla direzione dell'asse,
$$
\ell_r = d + \frac{\rho^2}{d} > d ,
$$
perciò il centro di oscillazione sta sempre oltre il baricentro.

::struttura{poligoni="-0.95,-1.9 0.95,-1.9 0.95,-3.5 -0.95,-3.5" nodi="A,0,0;B,0,-1.9,-" aste="A-B" vincoli="A,cerniera,90" punti="0,-2.7,G,baricentro;0,-3.8,O*,centro" tratteggi="0,0 0,-4.2" quote="A,0 -2.7,d,0.75;A,0 -3.8,ℓ_r,-1.5" titolo="Pendolo composto: il baricentro dista $d$ dall'asse e il centro di oscillazione $O^*$ dista $\ell_r = d + \dfrac{\rho^2}{d}$"}

:::

:::osservazione{#reversibilita titolo="Reversibilità e periodo minimo"}
Dalla scrittura $\ell_r = d + \dfrac{\rho^2}{d}$ seguono due proprietà. Sospendendo il corpo per il centro di oscillazione, cioè prendendo $d' = \ell_r - d = \dfrac{\rho^2}{d}$, la nuova lunghezza ridotta è
$$
\ell_r' = d' + \frac{\rho^2}{d'} = \frac{\rho^2}{d} + d = \ell_r ,
$$
quindi il periodo non cambia e i due punti si scambiano i ruoli; su questa proprietà è costruito il pendolo reversibile di Kater. Inoltre $\ell_r$ è minima per $d = \rho$, con $\ell_r = 2\rho$, perciò fra tutti gli assi paralleli a una direzione fissata il periodo è minimo quando la distanza di $G$ dall'asse è uguale al raggio d'inerzia baricentrico. Per un'asta omogenea $\rho^2 = \dfrac{\ell^2}{12}$, quindi il periodo è minimo per $d = \dfrac{\ell}{2\sqrt{3}}$ e vale $2\pi\sqrt{\dfrac{\ell}{g\sqrt{3}}}$.

::grafico{f="x+1/x" xmin=0 xmax=4 ymin=0 ymax=5 punti="1,2,pieno" nomi="d,ℓr" titolo="La lunghezza ridotta $\ell_r = d + \dfrac{\rho^2}{d}$, disegnata per $\rho = 1$: il minimo vale $2\rho$ e si ha per $d = \rho$, mentre due distanze $d$ e $d'$ con $d\,d' = \rho^2$ danno lo stesso periodo"}

:::

## Il moto rigido piano

:::teorema{#moto-rigido-piano titolo="Equazioni del moto rigido piano"}
Sia un corpo rigido che si muove nel piano $Oxy$, cioè con $\vec{\omega} = \dot{\vartheta}\,\hat{k}$ e con il baricentro nel piano, e sia $I_G$ il momento d'inerzia rispetto all'asse per $G$ perpendicolare al piano. Il sistema ha al più tre gradi di libertà, descritti da $x_G$, $y_G$ e $\vartheta$, e le equazioni cardinali si riducono alle tre equazioni scalari
$$
\begin{cases}
M\,\ddot{x}_G = R_x^{(e)} \\[4pt]
M\,\ddot{y}_G = R_y^{(e)} \\[4pt]
I_G\,\ddot{\vartheta} = M_{Gz}^{(e)}
\end{cases}
$$
Il sistema delle tre equazioni basta a determinare il moto e le reazioni. Si eliminano le reazioni fra le tre equazioni e le equazioni di vincolo fino a ottenere tante equazioni quanti sono i gradi di libertà, si integra il moto e si tornano poi a calcolare le reazioni. Per un'asta appoggiata per un estremo su un piano orizzontale liscio e lasciata cadere da ferma le forze orizzontali sono nulle, dunque $\ddot{x}_G = 0$ e il baricentro scende lungo una verticale.
:::

:::osservazione{#polo-nel-contatto titolo="Seconda equazione cardinale con polo nel punto di contatto"}
Per un disco che rotola senza strisciare su una guida rettilinea il punto di contatto $C$ è il centro di istantanea rotazione, ma non è un punto fisso, perciò la seconda equazione cardinale con polo $C$ va giustificata. Per un polo $P$ mobile vale $\dfrac{d\vec{K}_P}{dt} = \vec{M}_P^{(e)} + M\,\vec{v}_P \wedge \vec{v}_G$. Prendendo come $P$ il punto geometrico di contatto, la sua velocità è parallela alla guida e $\vec{v}_G$ è parallela alla guida, quindi il prodotto vettoriale è nullo; inoltre $\vec{K}_C = I_C\,\dot{\vartheta}\,\hat{k}$ con $I_C = I_G + M R^2$ costante, perché la distanza di $G$ dal contatto resta uguale al raggio. Per un disco su guida rettilinea si ottiene perciò $I_C\,\ddot{\vartheta} = M_{Cz}^{(e)}$, e scegliere questo polo conviene perché la reazione del contatto ha momento nullo.
:::

::::teorema{#rotolamento-su-piano-inclinato titolo="Rotolamento senza strisciamento su un piano inclinato"}
Sia un corpo di massa $m$ e raggio $R$, con il baricentro sull'asse di figura e momento d'inerzia baricentrico $I_G = \beta\,m\,R^2$, che rotola senza strisciare su un piano inclinato di $\alpha$ sull'orizzontale. Allora l'accelerazione del baricentro e la forza d'attrito valgono
$$
a_G = \frac{g\,\sin\alpha}{1 + \beta} ,
\qquad
F_a = \frac{\beta}{1 + \beta}\,m\,g\,\sin\alpha ,
$$
e il puro rotolamento è possibile, con coefficiente d'attrito statico $f_s$, finché
$$
\tan\alpha \le \frac{1 + \beta}{\beta}\,f_s .
$$
I corpi con $\beta$ più piccolo scendono più in fretta, indipendentemente da massa e raggio. Per il disco pieno $\beta = \dfrac{1}{2}$ e $a_G = \dfrac{2}{3}\,g\sin\alpha$, per la sfera piena $\beta = \dfrac{2}{5}$ e $a_G = \dfrac{5}{7}\,g\sin\alpha$, per l'anello sottile $\beta = 1$ e $a_G = \dfrac{1}{2}\,g\sin\alpha$.

::struttura{linee="0,0 6,3.46 6,0 0,0" cerchi="2.57,2.48,0.86" punti="2.57,2.48,G,baricentro;3,1.73,C,centro" forze="2.57 2.48,0,-1,mg" reazioni="3 1.73,-0.6,1.04,N;3 1.73,0.95,0.55,F_a" etichette="1.05,0.26,α" coppie="2.57 2.48,-1,ω" titolo="Disco che rotola senza strisciare: il peso in $G$, la reazione normale $N$ e la forza d'attrito $F_a$ nel punto di contatto $C$"}

:::dimostrazione
Si prende l'asse delle ascisse lungo il piano, orientato verso il basso, e si indica con $x$ l'ascissa di $G$. La condizione di puro rotolamento lega la rotazione alla traslazione, $\dot{x} = R\,\dot{\vartheta}$, quindi $a_G = \ddot{x} = R\,\ddot{\vartheta}$ e il sistema ha un grado di libertà. Le forze esterne sono il peso, la reazione normale $N$ e la forza d'attrito $F_a$, applicate nel punto di contatto. La proiezione della prima equazione cardinale lungo il piano e la seconda equazione cardinale con polo in $G$ danno
$$
\begin{cases}
m\,a_G = m\,g\,\sin\alpha - F_a \\[4pt]
\beta\,m\,R^2\,\dfrac{a_G}{R} = F_a\,R
\end{cases}
$$
Dalla seconda equazione si ricava $F_a = \beta\,m\,a_G$; sostituendo nella prima si ottiene $m\,a_G\,(1+\beta) = m g \sin\alpha$, da cui le due espressioni dell'enunciato. Il contatto è di puro rotolamento finché la forza d'attrito statico necessaria non supera il valore massimo $f_s\,N = f_s\,m\,g\cos\alpha$, cioè finché $\dfrac{\beta}{1+\beta}\,m g \sin\alpha \le f_s\,m g \cos\alpha$, che è la condizione sull'angolo.
:::
::::

:::osservazione{#attrito-volvente titolo="Attrito volvente"}
Nel rotolamento di un corpo deformabile il contatto avviene su una piccola area e la reazione del piano risulta spostata in avanti rispetto al punto geometrico di contatto. Si schematizza questa situazione aggiungendo alla reazione normale una coppia resistente, il cui momento ha modulo al più $f_v\,N$, con $f_v$ un **coefficiente di attrito volvente** che ha le dimensioni di una lunghezza e si misura in metri. La coppia si oppone alla rotazione, quindi per un corpo che rotola su un piano orizzontale l'equazione del moto attorno a $G$ diventa $I_G\,\ddot{\vartheta} = F_a\,R - f_v\,N$ e il corpo rallenta anche in assenza di strisciamento. I valori di $f_v$ sono piccoli, dell'ordine di $10^{-4}\,\mathrm{m}$ per acciaio su acciaio, e nei problemi di questo argomento si trascurano salvo indicazione esplicita.
:::

## Il corpo rigido con un punto fisso: equazioni di Eulero

:::richiamo{titolo="Derivata di un vettore in due riferimenti"}
Sia $\vec{w}(t)$ un vettore e sia $(\Omega; \xi, \eta, \zeta)$ un riferimento mobile di velocità angolare $\vec{\omega}$ rispetto al riferimento fisso. Allora
$$
\left( \frac{d\vec{w}}{dt} \right)_{\!\text{fisso}} = \left( \frac{d\vec{w}}{dt} \right)_{\!\text{mobile}} + \vec{\omega} \wedge \vec{w} ,
$$
dove la derivata nel riferimento mobile si calcola derivando le sole componenti su $\hat{e}_\xi$, $\hat{e}_\eta$, $\hat{e}_\zeta$. Si rimanda all'argomento sulla cinematica del punto e sui moti relativi.
:::

::::teorema{#equazioni-di-eulero titolo="Equazioni di Eulero"}
Sia un corpo rigido con il punto $O$ fisso, sia $\xi$, $\eta$, $\zeta$ una terna solidale principale d'inerzia in $O$, con momenti principali $A$, $B$, $C$, e siano $p$, $q$, $r$ le componenti di $\vec{\omega}$ su quella terna. Dette $M_\xi$, $M_\eta$, $M_\zeta$ le componenti del momento delle forze esterne rispetto a $O$, valgono le **equazioni di Eulero**
$$
\begin{cases}
A\,\dot{p} + (C - B)\,q\,r = M_\xi \\[4pt]
B\,\dot{q} + (A - C)\,r\,p = M_\eta \\[4pt]
C\,\dot{r} + (B - A)\,p\,q = M_\zeta
\end{cases}
$$
Il sistema contiene le tre incognite $p$, $q$, $r$ e non contiene la reazione del vincolo in $O$, che ha momento nullo rispetto a $O$, perciò le tre equazioni determinano la velocità angolare, e da questa si risale agli angoli di Eulero e alla reazione in $O$. I termini quadratici $(C-B)qr$ e gli altri due sono dovuti al fatto che la terna di riferimento ruota. Su un asse fisso, dove $p = q = 0$, essi si annullano e resta la sola $C\,\dot{r} = M_\zeta$.

::struttura{nodi="O,0,0" poligoni="0.6,0.5 3.3,1.1 3.9,2.9 1.4,3.3" frecce="0,0,3.1,2.1,ζ;0,0,2.6,-0.75,ξ;0,0,0.3,2.9,η" punti="2.4,1.95,G,baricentro" reazioni="0 0,1.1,-1.05,Φ_O" vincoli="O,cerniera" riferimento=0 titolo="Corpo rigido con il punto fisso $O$ e terna solidale principale d'inerzia $\xi$, $\eta$, $\zeta$: tre gradi di libertà e reazione $\vec{\Phi}_O$ di momento nullo rispetto a $O$"}

:::dimostrazione
Si parte dalla seconda equazione cardinale con polo nel punto fisso $O$, cioè $\dfrac{d\vec{K}_O}{dt} = \vec{M}_O^{(e)}$. La terna è solidale e principale d'inerzia in $O$, quindi
$$
\vec{K}_O = A\,p\,\hat{e}_\xi + B\,q\,\hat{e}_\eta + C\,r\,\hat{e}_\zeta ,
$$
dove $A$, $B$, $C$ sono costanti. La derivata nel riferimento solidale si ottiene derivando le sole componenti, perciò vale $A\,\dot{p}\,\hat{e}_\xi + B\,\dot{q}\,\hat{e}_\eta + C\,\dot{r}\,\hat{e}_\zeta$, e per la derivata di un vettore in due riferimenti si aggiunge $\vec{\omega} \wedge \vec{K}_O$. Il prodotto vettoriale ha componenti
$$
\vec{\omega} \wedge \vec{K}_O = (C - B)\,q\,r\,\hat{e}_\xi + (A - C)\,r\,p\,\hat{e}_\eta + (B - A)\,p\,q\,\hat{e}_\zeta ,
$$
come si ottiene calcolando il determinante formale con le righe $(\hat{e}_\xi, \hat{e}_\eta, \hat{e}_\zeta)$, $(p, q, r)$ e $(Ap, Bq, Cr)$. Uguagliando componente per componente alla derivata di $\vec{K}_O$ si ottengono le tre equazioni. La reazione del vincolo è applicata in $O$, quindi il suo momento rispetto a $O$ è nullo e in $\vec{M}_O^{(e)}$ compaiono solo le forze attive.
:::
::::

## Moti per inerzia e rotazioni permanenti

:::teorema{#integrali-primi-poinsot titolo="Moti alla Poinsot: integrali primi"}
Si chiama **moto alla Poinsot**, o moto per inerzia, il moto di un corpo rigido con un punto fisso in cui il momento delle forze attive rispetto a $O$ è nullo. In un tale moto il vettore $\vec{K}_O$ è costante e l'energia cinetica è costante, quindi
$$
A\,p^2 + B\,q^2 + C\,r^2 = 2T ,
\qquad
A^2 p^2 + B^2 q^2 + C^2 r^2 = |\vec{K}_O|^2 .
$$
La prima uguaglianza segue dal teorema dell'energia cinetica, perché il vincolo in $O$ è ideale e fisso e le forze attive hanno momento nullo; la seconda segue dalla seconda equazione cardinale. Le due relazioni limitano $|\vec{\omega}|$ a un intervallo. Fissati $T$ e $|\vec{K}_O|$, il vettore $\vec{\omega}$ si muove nella terna solidale sull'intersezione di un ellissoide e di una sfera, perciò $|\vec{\omega}|$ oscilla fra un valore minimo e un valore massimo calcolabili dai due integrali primi. Un satellite in volo libero e una moneta lanciata in aria si muovono alla Poinsot, perché il peso ha momento nullo rispetto al baricentro.
:::

::::teorema{#rotazioni-permanenti titolo="Rotazioni permanenti e loro stabilità"}
Sia un moto alla Poinsot di un corpo con momenti principali $A$, $B$, $C$ distinti. Il moto è una **rotazione permanente**, cioè $\vec{\omega}$ è costante in modulo, direzione e verso, se e solo se $\vec{\omega}$ è diretta lungo un asse principale d'inerzia in $O$. Inoltre le rotazioni permanenti attorno all'asse di momento d'inerzia massimo e attorno a quello di momento minimo sono stabili, nel senso che una piccola perturbazione iniziale di $\vec{\omega}$ resta piccola; la rotazione attorno all'asse di momento intermedio è instabile. Il risultato spiega perché i satelliti si stabilizzano facendoli ruotare attorno all'asse di massimo momento d'inerzia, e perché un corpo lanciato quasi attorno all'asse intermedio cambia orientamento dopo pochi giri.

::struttura{poligoni="-2,-1 2,-1 2,1 -2,1" nodi="G,0,0,-" frecce="0,0,2.9,0,ξ;0,0,0,1.9,η" punti="0,0,G,baricentro" etichette="0.42,-0.3,ζ uscente" quote="-2 -1,2 -1,2ℓ,0.75;2 -1,2 1,ℓ,0.75" titolo="Lamina rettangolare omogenea di lati $2\ell$ e $\ell$: i momenti principali in $G$ valgono $A = \dfrac{m\,\ell^2}{12}$, $B = \dfrac{m\,\ell^2}{3}$ e $C = \dfrac{5\,m\,\ell^2}{12}$, quindi $\eta$ è l'asse intermedio"}

:::dimostrazione
Si annulla il momento nelle equazioni di Eulero. Se $\vec{\omega} = p_0\,\hat{e}_\xi$ con $p_0$ costante, allora $q = r = 0$ e le tre equazioni sono soddisfatte, perciò la rotazione attorno a un asse principale è un moto possibile. Viceversa, se $\vec{\omega}$ è costante allora $\dot{p} = \dot{q} = \dot{r} = 0$ e le equazioni diventano $(C-B)qr = 0$, $(A-C)rp = 0$, $(B-A)pq = 0$; poiché $A$, $B$, $C$ sono distinti, i tre prodotti $qr$, $rp$, $pq$ sono nulli, quindi al più una delle tre componenti è diversa da zero e $\vec{\omega}$ è diretta lungo un asse principale.

Per la stabilità si studia la rotazione attorno a $\xi$, ponendo $p = p_0 + \varepsilon$ con $q$ ed $r$ piccoli. Trascurando i prodotti di due quantità piccole, la prima equazione dà $\dot{\varepsilon} = 0$ e le altre due diventano
$$
\begin{cases}
B\,\dot{q} = (C - A)\,r\,p_0 \\[4pt]
C\,\dot{r} = (A - B)\,p_0\,q
\end{cases}
$$
Derivando la prima e sostituendo la seconda si ottiene
$$
\ddot{q} = \frac{(C-A)(A-B)}{B\,C}\,p_0^2\,q .
$$
Se $A$ è il massimo o il minimo fra i tre momenti, i due fattori $(C-A)$ e $(A-B)$ hanno segni opposti, quindi il coefficiente è negativo e $q$ oscilla armonicamente con ampiezza dell'ordine del dato iniziale; lo stesso vale per $r$, perciò la rotazione è stabile. Se $A$ è il momento intermedio, i due fattori hanno lo stesso segno, il coefficiente è positivo e la soluzione generale contiene l'esponenziale crescente $e^{\lambda t}$ con $\lambda = p_0\sqrt{\dfrac{(C-A)(A-B)}{BC}}$, perciò la rotazione è instabile.
:::
::::

:::attenzione
L'instabilità della rotazione attorno all'asse intermedio riguarda il moto per inerzia, non la sola geometria delle masse. Per la lamina rettangolare di lati $2\ell$ e $\ell$ si ha $A = \dfrac{m\,\ell^2}{12}$, $B = \dfrac{m\,\ell^2}{3}$, $C = \dfrac{5\,m\,\ell^2}{12}$, e le equazioni di Eulero del moto per inerzia sono $\dot{p} = -q\,r$, $\dot{q} = r\,p$, $\dot{r} = -\dfrac{3}{5}\,p\,q$. Lanciando la lamina con $\vec{\omega}$ quasi parallela all'asse intermedio $\eta$, la perturbazione cresce con $\lambda = q_0\sqrt{\dfrac{3}{5}}$ e dopo qualche giro la lamina ruota attorno a una direzione del tutto diversa; con $\vec{\omega}$ quasi parallela a $\xi$ oppure a $\zeta$ la perturbazione resta invece piccola.
:::

## Precessioni regolari ed effetto giroscopico

:::definizione{#precessione-regolare titolo="Precessione regolare"}
Un corpo rigido con un punto fisso $O$ si dice **giroscopio** quando è a struttura giroscopica rispetto a $O$, cioè quando due momenti principali in $O$ sono uguali, $A = B$; l'asse del terzo momento principale $C$ si chiama asse di figura. Il moto del giroscopio è una **precessione regolare** quando l'asse di figura $\zeta$ forma un angolo costante $\vartheta$ con una retta fissa per $O$, detta asse di precessione, e gli angoli di Eulero $\psi$ e $\varphi$ variano uniformemente:
$$
\dot{\psi} = \Omega \ \text{costante} ,
\qquad
\dot{\varphi} \ \text{costante} ,
\qquad
\vartheta \ \text{costante} .
$$
La velocità angolare si decompone allora come $\vec{\omega} = \Omega\,\hat{k} + \dot{\varphi}\,\hat{e}_\zeta$, somma della velocità di precessione attorno all'asse fisso e della velocità di rotazione propria attorno all'asse di figura. La trottola che gira inclinata senza oscillare e l'asse terrestre, che descrive un cono in circa ventiseimila anni, si muovono di precessione regolare.
:::

::::teorema{#condizione-precessione-regolare titolo="Condizione di precessione regolare del giroscopio pesante"}
Sia un giroscopio pesante di massa $M$, con punto fisso $O$, momenti principali $A = B$ e $C$ in $O$ e baricentro sull'asse di figura a distanza $d$ da $O$. Una precessione regolare con nutazione $\vartheta \in (0, \pi)$, velocità di precessione $\Omega$ e componente assiale $r = \dot{\varphi} + \Omega\cos\vartheta$ è possibile se e solo se
$$
C\,\Omega\,r - A\,\Omega^2 \cos\vartheta = M\,g\,d .
$$
Con l'asse di figura orizzontale, cioè $\vartheta = \dfrac{\pi}{2}$, la condizione si riduce a $C\,\Omega\,\dot{\varphi} = M g d$, quindi
$$
\Omega = \frac{M\,g\,d}{C\,\dot{\varphi}} .
$$
La velocità di precessione è inversamente proporzionale alla velocità di rotazione propria, perciò una trottola veloce precede lentamente. Per un disco omogeneo di massa $m$ e raggio $R$ si ha $C = \dfrac{m\,R^2}{2}$ e la relazione diventa $\Omega = \dfrac{2\,g\,d}{R^2\,\dot{\varphi}}$.

::struttura{nodi="O,0,0" frecce="0,0,0,3.4,asse di precessione;0,0,1.95,2.4,ζ" tratteggi="0,0 2.6,3.2" cerchi="1.5,1.85,0.62" punti="1.5,1.85,G,baricentro" forze="1.5 1.85,0,-1,Mg" coppie="0 2.75,1,Ω;1.95 2.4,1,φ̇" etichette="0.42,2.05,ϑ" riferimento=0 titolo="Precessione regolare: l'asse di figura $\zeta$ forma l'angolo costante $\vartheta$ con l'asse di precessione e ruota attorno a esso con velocità angolare $\Omega$"}

:::dimostrazione
Si scrivono le componenti di $\vec{\omega}$ sulla terna solidale per mezzo degli angoli di Eulero, cioè $p = \dot{\psi}\sin\vartheta\sin\varphi + \dot{\vartheta}\cos\varphi$, $q = \dot{\psi}\sin\vartheta\cos\varphi - \dot{\vartheta}\sin\varphi$ e $r = \dot{\varphi} + \dot{\psi}\cos\vartheta$. Nella precessione regolare si ha $\dot{\vartheta} = 0$, $\dot{\psi} = \Omega$ e $\dot{\varphi}$ costante, perciò
$$
p = \Omega\sin\vartheta\sin\varphi ,
\qquad
q = \Omega\sin\vartheta\cos\varphi ,
\qquad
\dot{p} = \dot{\varphi}\,q ,
\qquad
\dot{q} = -\dot{\varphi}\,p .
$$
Il momento del peso rispetto a $O$ vale $\vec{M}_O = d\,\hat{e}_\zeta \wedge (-M g\,\hat{k})$. Esprimendo $\hat{k} = \sin\vartheta\sin\varphi\,\hat{e}_\xi + \sin\vartheta\cos\varphi\,\hat{e}_\eta + \cos\vartheta\,\hat{e}_\zeta$ si ottiene
$$
\vec{M}_O = M g d \sin\vartheta\cos\varphi\,\hat{e}_\xi - M g d \sin\vartheta\sin\varphi\,\hat{e}_\eta = \frac{M g d}{\Omega}\,\big( q\,\hat{e}_\xi - p\,\hat{e}_\eta \big) .
$$
Si sostituisce nella prima equazione di Eulero, con $B = A$:
$$
A\,\dot{\varphi}\,q + (C - A)\,q\,r = \frac{M g d}{\Omega}\,q .
$$
Poiché $\vartheta \in (0,\pi)$ e $\Omega \neq 0$, le componenti $p$ e $q$ non sono entrambe identicamente nulle, quindi si può dividere per $q$ nei tempi in cui $q \neq 0$ e si ottiene $A\,\dot{\varphi} + (C-A)\,r = \dfrac{M g d}{\Omega}$. Moltiplicando per $\Omega$ e sostituendo $\dot{\varphi} = r - \Omega\cos\vartheta$ si ricava
$$
A\,\Omega\,r - A\,\Omega^2\cos\vartheta + C\,\Omega\,r - A\,\Omega\,r = M g d ,
$$
cioè la relazione dell'enunciato. La seconda equazione di Eulero dà la stessa relazione, mentre la terza si riduce a $C\,\dot{r} = 0$, soddisfatta perché $r$ è costante. Viceversa, se la relazione vale, le tre equazioni di Eulero sono soddisfatte dalle funzioni scritte sopra, perciò la precessione regolare è un moto possibile.
:::
::::

:::osservazione{#effetto-giroscopico titolo="Effetto giroscopico"}
Un giroscopio che ruota velocemente attorno all'asse di figura ha $\vec{K}_O \simeq C\,r\,\hat{e}_\zeta$, cioè momento angolare quasi parallelo all'asse. Per la seconda equazione cardinale, un momento esterno $\vec{M}_O$ perpendicolare all'asse fa ruotare l'asse attorno alla direzione di $\hat{e}_\zeta \wedge \vec{M}_O$ con velocità $\Omega = \dfrac{|\vec{M}_O|}{C\,r}$, tanto più piccola quanto più la rotazione propria è veloce. La direzione in cui l'asse si sposta è quella del momento applicato, come mostra la relazione $\dfrac{d\hat{e}_\zeta}{dt} = \dfrac{\vec{M}_O}{C\,r}$. Simmetricamente, se un vincolo impone la precessione $\Omega$ a un asse di figura perpendicolare all'asse di precessione, i supporti devono esercitare una coppia di momento
$$
|\vec{M}_O| = C\,r\,\Omega ,
$$
detta coppia giroscopica, diretta perpendicolarmente ai due assi. Un rotore di momento assiale $C = 0{,}9\,\mathrm{kg\,m^2}$ che gira a $100\,\mathrm{rad/s}$ montato su due cuscinetti distanti $0{,}5\,\mathrm{m}$, costretto a precedere a $2\,\mathrm{rad/s}$, scarica sui cuscinetti una coppia di $180\,\mathrm{N\,m}$, cioè due forze opposte di $360\,\mathrm{N}$.

::struttura{nodi="A,-1.9,0;B,1.9,0" aste="A-B" vincoli="A,cerniera;B,cerniera" cerchi="0,0,0.8" frecce="-2.9,0,3.1,0,ζ;0,-1.9,0,2.3,asse di precessione" reazioni="A,0,1.1,Φ_A;B,0,-1.1,Φ_B" coppie="2.45 0,1,r;0 1.85,1,Ω" quote="A,B,b,-1.6" riferimento=0 titolo="Coppia giroscopica su due cuscinetti distanti $b$: le reazioni valgono $\dfrac{C\,r\,\Omega}{b}$ e sono opposte"}

:::
