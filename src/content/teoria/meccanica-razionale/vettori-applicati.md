---
titolo: Vettori applicati, momenti e sistemi di forze
sommario: Momento di un vettore applicato rispetto a un polo e a un asse, invariante scalare, riduzione di un sistema all'asse centrale, teorema di Varignon, centro dei vettori paralleli e carichi distribuiti su un'asta.
---

## Vettori applicati e momento rispetto a un polo

:::definizione{#vettore-applicato titolo="Vettore applicato e retta d'azione"}
Una forza che agisce su un corpo è individuata da un'intensità, una direzione, un verso e dal punto del corpo su cui agisce. Si rappresenta perciò con una coppia $(P, \vec{v})$ formata da un punto $P$ dello spazio e da un vettore $\vec{v}$, e una tale coppia si chiama **vettore applicato**; il punto $P$ è il **punto di applicazione**. La **retta d'azione** di $(P, \vec{v})$, per $\vec{v} \neq \vec{0}$, è la retta che passa per $P$ ed è parallela a $\vec{v}$.

Il riferimento fisso è $(O; x, y, z)$ con versori $\hat{\imath}$, $\hat{\jmath}$, $\hat{k}$; la posizione di un punto $P$ si scrive come differenza di punti, $P - O$. Quando il problema è piano si lavora nel piano $Oxy$, con $x$ orizzontale verso destra, $y$ verticale verso l'alto e $z$ uscente dal foglio. Un **sistema di vettori applicati** è un insieme finito $(P_1, \vec{v}_1), \dots, (P_n, \vec{v}_n)$. Le forze, le reazioni vincolari e le quantità di moto elementari dei punti di un corpo sono tutti sistemi di vettori applicati, perciò i risultati di questo capitolo si usano in tutta la Meccanica razionale, dalla statica dei sistemi alle equazioni cardinali della dinamica.
:::

:::richiamo{titolo="Prodotto vettoriale e prodotto misto"}
Il prodotto vettoriale $\vec{u} \wedge \vec{w}$ di due vettori che formano l'angolo $\varphi$ è ortogonale a entrambi, ha modulo $|\vec{u}|\,|\vec{w}|\sin\varphi$ e verso dato dalla regola della mano destra; è nullo se e solo se i due vettori sono paralleli, vale $\vec{w} \wedge \vec{u} = -\,\vec{u} \wedge \vec{w}$ ed è distributivo rispetto alla somma. Il prodotto misto $\vec{u} \wedge \vec{w} \cdot \vec{t}$ è nullo se e solo se i tre vettori sono complanari, e in particolare se due di essi sono paralleli. Vale inoltre l'identità del doppio prodotto vettoriale
$$
\vec{u} \wedge (\vec{w} \wedge \vec{t}) = (\vec{u} \cdot \vec{t})\,\vec{w} - (\vec{u} \cdot \vec{w})\,\vec{t} .
$$
Si rimanda all'argomento sui vettori nello spazio di Algebra lineare.
:::

:::definizione{#momento-polare titolo="Momento rispetto a un polo"}
Il momento misura la tendenza di un vettore applicato a produrre una rotazione attorno a un punto. Siano $(P, \vec{v})$ un vettore applicato e $O$ un punto, detto **polo**. Il **momento** di $(P, \vec{v})$ rispetto a $O$ è il vettore
$$
\vec{M}_O = (P - O) \wedge \vec{v} .
$$
Per una forza misurata in $\mathrm{N}$ e una lunghezza in $\mathrm{m}$ il momento si misura in $\mathrm{N\,m}$. Nel piano $Oxy$ il momento è parallelo a $\hat{k}$, quindi si riduce al numero $M_O$ definito da $\vec{M}_O = M_O\,\hat{k}$, e dal prodotto vettoriale in componenti si ottiene
$$
M_O = (x_P - x_O)\,v_y - (y_P - y_O)\,v_x .
$$
Il numero $M_O$ è positivo quando il vettore tende a produrre una rotazione antioraria attorno a $O$. Per $P - O = a\,(2\hat{\imath} + \hat{\jmath})$ e $\vec{v} = v\,(\hat{\imath} - \hat{\jmath})$ si ottiene $M_O = a v\,[2 \cdot (-1) - 1 \cdot 1] = -3\,a v$, quindi la rotazione tende a essere oraria.
:::

::::teorema{#momento-e-braccio titolo="Momento e braccio"}
Siano $(P, \vec{v})$ un vettore applicato con $\vec{v} \neq \vec{0}$ e $b$ la distanza del polo $O$ dalla retta d'azione, detta **braccio**. Allora
$$
|\vec{M}_O| = |\vec{v}|\,b ,
$$
e il momento resta lo stesso se il punto di applicazione viene spostato in un altro punto della retta d'azione. In particolare $\vec{M}_O = \vec{0}$ se e solo se la retta d'azione passa per $O$. Il teorema serve a calcolare il momento senza componenti, misurando il braccio sul disegno, e a riconoscere subito i vettori che hanno momento nullo rispetto al polo scelto. Per il vettore applicato della definizione di momento si ha $|\vec{v}| = v\sqrt{2}$, quindi
$$
b = \frac{3\,a v}{v\sqrt{2}} = \frac{3\sqrt{2}}{2}\,a .
$$

::struttura{nodi="O,0,0;P,4,2;H,3.52,2.64" forze="4.9 0.8,0.9,-1.2,v" tratteggi="2.8,3.6 5.5,0;0,0 3.52,2.64" etichette="1.55,1.6,b" punti="0,0;4,2;3.52,2.64" titolo="Il braccio $b$ è la distanza del polo $O$ dalla retta d'azione di $\vec{v}$, misurata sulla perpendicolare $OH$"}

:::dimostrazione
Sia $H$ il piede della perpendicolare condotta da $O$ alla retta d'azione, cosicché $|H - O| = b$. Il vettore $P - H$ è parallelo a $\vec{v}$, perciò $(P - H) \wedge \vec{v} = \vec{0}$ e per la proprietà distributiva
$$
\vec{M}_O = \big[ (H - O) + (P - H) \big] \wedge \vec{v} = (H - O) \wedge \vec{v} .
$$
I vettori $H - O$ e $\vec{v}$ sono ortogonali, quindi il modulo del loro prodotto vettoriale vale $b\,|\vec{v}|$. L'ultima espressione dipende dal punto di applicazione soltanto attraverso la retta d'azione, che individua $H$; perciò tutti i punti della retta d'azione danno lo stesso momento. Infine, poiché $|\vec{v}| \neq 0$, il prodotto $b\,|\vec{v}|$ è nullo se e solo se $b = 0$, cioè se e solo se $O$ appartiene alla retta d'azione.
:::
::::

## Momento rispetto a un asse

:::definizione{#momento-assiale titolo="Momento assiale"}
Nei problemi con un asse di rotazione fisso interessa soltanto la componente del momento lungo quell'asse. Siano $r$ una retta orientata, $\hat{u}$ il suo versore e $A$ un punto di $r$. Il **momento assiale** del vettore applicato $(P, \vec{v})$ rispetto a $r$ è il numero
$$
M_r = \hat{u} \cdot \vec{M}_A = \hat{u} \cdot (P - A) \wedge \vec{v} ,
$$
cioè la componente lungo $\hat{u}$ del momento calcolato rispetto a un punto dell'asse. Il momento assiale rispetto all'asse $z$ coincide quindi con la terza componente di $\vec{M}_O$. Per $P - O = a\,(\hat{\imath} + \hat{\jmath})$ e $\vec{v} = F\,(2\hat{\imath} - \hat{\jmath} + 2\hat{k})$ si ottiene $\vec{M}_O = a F\,(2\hat{\imath} - 2\hat{\jmath} - 3\hat{k})$, quindi $M_z = -3\,a F$. Il momento assiale è la grandezza che compare nell'equazione del moto di un corpo rigido con asse fisso, trattata nell'argomento sulla dinamica del corpo rigido.

::struttura{frecce="0,0,-1.0,-0.72,x;0,0,2,0,y;0,0,0,2,z" punti="-0.7,-0.504,P" tratteggi="0,0 -0.7,-0.504" forze="0.5 -0.504,1.2,0,v" reazioni="0 1.8,0,1.2,M_O" etichette="0.14,-0.32,O" riferimento=0 titolo="Il vettore $\vec{v} = v\,\hat{\jmath}$ applicato in $P - O = a\,\hat{\imath}$ ha momento $\vec{M}_O = a v\,\hat{k}$, quindi momento assiale $M_z = a v$"}

:::

::::teorema{#momento-assiale-indipendente titolo="Indipendenza del momento assiale dal punto dell'asse"}
Il momento assiale $M_r$ non dipende dal punto $A$ scelto sull'asse $r$. La definizione è quindi ben posta, e nel calcolo si prende come polo il punto dell'asse che rende i conti più brevi, per esempio il piede della perpendicolare condotta da $P$.

:::dimostrazione
Siano $A$ e $A'$ due punti di $r$. Dalla decomposizione $P - A' = (P - A) + (A - A')$ e dalla proprietà distributiva del prodotto vettoriale segue
$$
\vec{M}_{A'} = \vec{M}_A + (A - A') \wedge \vec{v} ,
$$
e moltiplicando scalarmente per $\hat{u}$ si ottiene
$$
\hat{u} \cdot \vec{M}_{A'} = \hat{u} \cdot \vec{M}_A + \hat{u} \wedge (A - A') \cdot \vec{v} .
$$
Il vettore $A - A'$ è parallelo a $\hat{u}$, poiché $A$ e $A'$ appartengono entrambi a $r$; quindi il prodotto misto a secondo membro è nullo e i due momenti assiali coincidono.
:::
::::

:::attenzione
Un momento assiale nullo non dà informazioni sul momento rispetto ai punti dell'asse. Per il vettore applicato $(P, \vec{v})$ con $P - O = a\,(\hat{\imath} + \hat{\jmath} + \hat{k})$ e $\vec{v} = F\,(\hat{\imath} - \hat{\jmath})$ si ottiene $\vec{M}_O = a F\,(\hat{\imath} + \hat{\jmath} - 2\hat{k})$, che è diverso dal vettore nullo, mentre il momento assiale rispetto alla retta per $O$ di versore $\hat{u} = \dfrac{\hat{\imath} + \hat{\jmath} + \hat{k}}{\sqrt{3}}$ vale
$$
M_r = \frac{a F\,(1 + 1 - 2)}{\sqrt{3}} = 0 .
$$
Il momento assiale si annulla perché la retta d'azione e l'asse sono complanari, dato che $P$ appartiene all'asse.
:::

## Risultante, momento risultante e invariante scalare

:::definizione{#risultante-momento-risultante titolo="Risultante e momento risultante"}
Dato il sistema di vettori applicati $(P_1, \vec{v}_1), \dots, (P_n, \vec{v}_n)$, la **risultante** è la somma dei vettori e il **momento risultante** rispetto al polo $O$ è la somma dei momenti:
$$
\vec{R} = \sum_{i=1}^{n} \vec{v}_i ,
\qquad
\vec{M}_O = \sum_{i=1}^{n} (P_i - O) \wedge \vec{v}_i .
$$
La risultante è un vettore libero, perché dipende soltanto dai vettori $\vec{v}_i$ e non dai punti di applicazione; il momento risultante dipende invece dal polo. Queste due grandezze sono le sole che compaiono nelle equazioni cardinali della statica e della dinamica, perciò due sistemi che hanno gli stessi $\vec{R}$ e $\vec{M}_O$ producono gli stessi effetti su un corpo rigido.
:::

::::teorema{#cambiamento-di-polo titolo="Formula del cambiamento di polo"}
Per ogni coppia di poli $O$ e $O'$ vale
$$
\vec{M}_{O'} = \vec{M}_O + (O - O') \wedge \vec{R} .
$$
Noti $\vec{R}$ e il momento rispetto a un polo, il momento rispetto a ogni altro polo si ottiene quindi con un solo prodotto vettoriale, senza ripetere la somma su tutti i vettori del sistema. Se $\vec{R} = \vec{0}$, il momento risultante è lo stesso per tutti i poli.

:::dimostrazione
Per ogni indice $i$ vale $P_i - O' = (P_i - O) + (O - O')$. Dalla proprietà distributiva del prodotto vettoriale segue
$$
\begin{aligned}
\vec{M}_{O'} &= \sum_{i=1}^{n} \big[ (P_i - O) + (O - O') \big] \wedge \vec{v}_i \\[6pt]
&= \sum_{i=1}^{n} (P_i - O) \wedge \vec{v}_i + (O - O') \wedge \sum_{i=1}^{n} \vec{v}_i \\[6pt]
&= \vec{M}_O + (O - O') \wedge \vec{R} .
\end{aligned}
$$
:::
::::

::::teorema{#invariante-scalare titolo="Invariante scalare"}
Il numero
$$
I = \vec{R} \cdot \vec{M}_O
$$
non dipende dal polo $O$ e si chiama **invariante scalare** del sistema, o trinomio invariante. L'invariante serve a riconoscere subito se un sistema si può ridurre a un solo vettore applicato, poiché la riduzione è possibile, quando $\vec{R} \neq \vec{0}$, se e solo se $I = 0$.

:::dimostrazione
Dalla formula del cambiamento di polo segue
$$
\vec{R} \cdot \vec{M}_{O'} = \vec{R} \cdot \vec{M}_O + \vec{R} \cdot (O - O') \wedge \vec{R} .
$$
Il prodotto misto a secondo membro contiene due volte il vettore $\vec{R}$, quindi è nullo; perciò $\vec{R} \cdot \vec{M}_{O'} = \vec{R} \cdot \vec{M}_O$.
:::
::::

:::osservazione{#invariante-sistemi-piani titolo="Sistemi piani e sistemi di vettori paralleli"}
Se tutti i punti $P_i$ appartengono al piano $Oxy$ e tutti i vettori $\vec{v}_i$ sono paralleli a quel piano, allora $\vec{R}$ è parallelo al piano e $\vec{M}_O$ è parallelo a $\hat{k}$, perciò $I = 0$. Lo stesso accade per un sistema di vettori tutti paralleli a un versore $\hat{u}$: la risultante è parallela a $\hat{u}$ e ogni momento $(P_i - O) \wedge \vec{v}_i$ è ortogonale a $\hat{u}$, quindi anche $\vec{M}_O$ lo è e il prodotto scalare $\vec{R} \cdot \vec{M}_O$ è nullo. Nei due casi, se $\vec{R} \neq \vec{0}$, il sistema è equivalente a un solo vettore applicato.
:::

## Coppie

:::definizione{#coppia titolo="Coppia di vettori applicati"}
Una **coppia** è un sistema formato da due vettori applicati $(A, \vec{v})$ e $(B, -\vec{v})$ con $\vec{v} \neq \vec{0}$ e rette d'azione parallele e distinte; la distanza $d$ fra le due rette è il **braccio della coppia**. La risultante di una coppia è nulla, quindi una coppia tende a produrre una rotazione senza produrre traslazione. In una struttura o in un sistema meccanico una coppia concentrata applicata si indica con il solo suo momento $\mathcal{M}$.
:::

::::teorema{#momento-di-una-coppia titolo="Momento di una coppia"}
Il momento di una coppia è lo stesso rispetto a ogni polo e vale
$$
\vec{M} = (A - B) \wedge \vec{v} ,
$$
con modulo $|\vec{v}|\,d$ e direzione ortogonale al piano delle due rette d'azione. Una coppia è quindi individuata completamente dal suo momento, e due coppie con lo stesso momento sono equivalenti, qualunque siano i bracci e le intensità. Nel disegno una coppia si rappresenta con una freccia curva, positiva in verso antiorario quando il momento è parallelo e concorde con $\hat{k}$.

::struttura{nodi="A,0,0;B,2,0" forze="A,0,-1,v;B,0,1,v" coppie="1 0.6,1,ℳ" quote="A,B,d,1.4" tratteggi="0,-1.2 0,1.4;2,-1.2 2,1.4" punti="0,0;2,0" titolo="Coppia di braccio $d$: la risultante è nulla e il momento vale $|\vec{v}|\,d$ rispetto a ogni polo"}

:::dimostrazione
La risultante della coppia è $\vec{v} - \vec{v} = \vec{0}$, quindi per la formula del cambiamento di polo il momento risultante è lo stesso per ogni polo. Si calcola allora rispetto a $B$: il vettore applicato in $B$ ha momento nullo rispetto a $B$, mentre $(A, \vec{v})$ ha momento $(A - B) \wedge \vec{v}$. Per il teorema sul momento e il braccio il modulo di questo momento è il prodotto di $|\vec{v}|$ per la distanza di $B$ dalla retta d'azione di $(A, \vec{v})$, cioè $|\vec{v}|\,d$. La direzione è ortogonale a $A - B$ e a $\vec{v}$, quindi al piano che contiene le due rette d'azione.
:::
::::

## Sistemi equivalenti, trasporto e riduzione

:::definizione{#sistemi-equivalenti titolo="Sistemi equivalenti"}
Due sistemi di vettori applicati sono **equivalenti** se hanno la stessa risultante e lo stesso momento risultante rispetto a un polo $O$:
$$
\begin{cases}
\vec{R}' = \vec{R} \\[4pt]
\vec{M}'_O = \vec{M}_O
\end{cases}
$$
Un sistema equivalente al sistema vuoto, cioè con $\vec{R} = \vec{0}$ e $\vec{M}_O = \vec{0}$, si dice **equilibrato**. Poiché le equazioni cardinali contengono le forze soltanto attraverso $\vec{R}$ e $\vec{M}_O$, due sistemi equivalenti producono sullo stesso corpo rigido le stesse reazioni vincolari e lo stesso moto; un sistema complicato si può perciò sostituire con un sistema equivalente più semplice.
:::

:::teorema{#equivalenza-ogni-polo titolo="Equivalenza rispetto a ogni polo"}
Se due sistemi hanno la stessa risultante e lo stesso momento risultante rispetto a un polo $O$, allora hanno lo stesso momento risultante rispetto a ogni altro polo $O'$. La verifica dell'equivalenza si può perciò fare con il polo più comodo, per esempio nel punto di applicazione di uno dei vettori. Il risultato segue applicando ai due sistemi la formula del cambiamento di polo e sostituendo le uguaglianze $\vec{R}' = \vec{R}$ e $\vec{M}'_O = \vec{M}_O$.
:::

::::teorema{#trasporto titolo="Scorrimento e trasporto di un vettore applicato"}
Sia $(P, \vec{v})$ un vettore applicato.

- Scorrimento: per ogni punto $P'$ della retta d'azione, il sistema formato da $(P', \vec{v})$ è equivalente a quello formato da $(P, \vec{v})$.
- Trasporto: per ogni punto $Q$, il sistema formato da $(P, \vec{v})$ è equivalente al sistema formato da $(Q, \vec{v})$ e dalla coppia di momento
$$
\mathcal{\vec{M}}_t = (P - Q) \wedge \vec{v} ,
$$
che è il momento di $(P, \vec{v})$ rispetto al punto di arrivo $Q$.

Il trasporto serve a portare tutti i vettori di un sistema in uno stesso punto, scelto una volta per tutte, e ottenere così un sistema equivalente formato da un solo vettore applicato e da una sola coppia.

::struttura{nodi="Q,0,0;P,2,0" aste="Q-P" forze="P,0,-1.2,v" quote="Q,P,ℓ" titolo="Il vettore $\vec{v}$ applicato in $P$"}

::struttura{nodi="Q,0,0;P,2,0" aste="Q-P" forze="Q,0,-1.2,v" coppie="Q,-1,ℳ_t" quote="Q,P,ℓ" titolo="Il sistema equivalente in $Q$: lo stesso vettore e la coppia di trasporto di momento $-\ell\,|\vec{v}|\,\hat{k}$"}

:::dimostrazione
In entrambi i casi la risultante è $\vec{v}$. Nello scorrimento il momento rispetto a ogni polo resta lo stesso, per il teorema sul momento e il braccio. Nel trasporto si confrontano i momenti rispetto a $Q$: il sistema di partenza ha momento $(P - Q) \wedge \vec{v}$, mentre nel sistema di arrivo il vettore applicato in $Q$ ha momento nullo rispetto a $Q$ e la coppia ha momento $\mathcal{\vec{M}}_t = (P - Q) \wedge \vec{v}$ rispetto a ogni polo. I due sistemi hanno quindi la stessa risultante e lo stesso momento rispetto a $Q$, perciò sono equivalenti.
:::
::::

::::teorema{#riduzione titolo="Riduzione di un sistema di vettori applicati"}
Ogni sistema di vettori applicati con risultante $\vec{R}$ e momento risultante $\vec{M}_O$ è equivalente al sistema formato dal solo vettore applicato $(O, \vec{R})$ e da una coppia di momento $\vec{M}_O$. Si presentano quattro casi.

- $\vec{R} = \vec{0}$ e $\vec{M}_O = \vec{0}$: il sistema è equilibrato.
- $\vec{R} = \vec{0}$ e $\vec{M}_O \neq \vec{0}$: il sistema è equivalente a una coppia di momento $\vec{M}_O$.
- $\vec{R} \neq \vec{0}$ e $I = 0$: il sistema è equivalente a un solo vettore applicato, di vettore $\vec{R}$, applicato in un punto dell'asse centrale.
- $\vec{R} \neq \vec{0}$ e $I \neq 0$: il sistema è equivalente a un vettore applicato di vettore $\vec{R}$ e a una coppia con momento parallelo a $\vec{R}$.

:::dimostrazione
Si trasporta ogni vettore $(P_i, \vec{v}_i)$ in $O$. Per il teorema sul trasporto si ottiene il sistema formato dai vettori $(O, \vec{v}_i)$ e dalle coppie di momento $(P_i - O) \wedge \vec{v}_i$. I vettori applicati nello stesso punto $O$ si sommano in $(O, \vec{R})$ e le coppie si sommano in una coppia di momento $\vec{M}_O$, poiché risultante e momento risultante sono additivi. I primi due casi seguono dalle definizioni di sistema equilibrato e di coppia. Gli altri due si ottengono dalle proprietà dell'asse centrale.
:::
::::

## Asse centrale

:::definizione{#asse-centrale titolo="Asse centrale"}
Sia un sistema di vettori applicati con $\vec{R} \neq \vec{0}$. L'**asse centrale** è l'insieme dei punti $Q$ rispetto ai quali il momento risultante è parallelo alla risultante:
$$
\vec{M}_Q \wedge \vec{R} = \vec{0} .
$$
L'asse centrale individua i poli rispetto ai quali la riduzione del sistema è la più semplice possibile, e nel caso $I = 0$ è la retta d'azione del vettore unico equivalente al sistema.
:::

::::teorema{#equazione-asse-centrale titolo="Equazione dell'asse centrale e momento minimo"}
Sia un sistema con risultante $\vec{R} \neq \vec{0}$, momento risultante $\vec{M}_O$ e invariante $I$. L'asse centrale è la retta parallela a $\vec{R}$ di equazione
$$
Q - O = \frac{\vec{R} \wedge \vec{M}_O}{|\vec{R}|^2} + \lambda\,\vec{R} ,
\qquad \lambda \in \mathbb{R} ,
$$
e per ogni punto $Q$ dell'asse centrale vale
$$
\vec{M}_Q = \frac{I}{|\vec{R}|^2}\,\vec{R} ,
\qquad
|\vec{M}_Q| = \frac{|I|}{|\vec{R}|} .
$$
Il momento risultante rispetto ai punti dell'asse centrale ha modulo minimo fra tutti i poli. In particolare, se $I = 0$ il momento rispetto ai punti dell'asse centrale è nullo, quindi il sistema è equivalente al solo vettore applicato $(Q, \vec{R})$ con $Q$ sull'asse centrale.

:::dimostrazione
Si pone $\vec{r} = Q - O$. Per la formula del cambiamento di polo vale $\vec{M}_Q = \vec{M}_O + \vec{R} \wedge \vec{r}$. Scegliendo
$$
\vec{r} = \frac{\vec{R} \wedge \vec{M}_O}{|\vec{R}|^2}
$$
e applicando l'identità del doppio prodotto vettoriale si ottiene
$$
\vec{R} \wedge \vec{r} = \frac{\vec{R} \wedge (\vec{R} \wedge \vec{M}_O)}{|\vec{R}|^2} = \frac{(\vec{R} \cdot \vec{M}_O)\,\vec{R} - |\vec{R}|^2\,\vec{M}_O}{|\vec{R}|^2} = \frac{I}{|\vec{R}|^2}\,\vec{R} - \vec{M}_O ,
$$
quindi $\vec{M}_Q = \dfrac{I}{|\vec{R}|^2}\,\vec{R}$, che è parallelo a $\vec{R}$. Aggiungere a $\vec{r}$ un vettore $\lambda\,\vec{R}$ non cambia $\vec{M}_Q$, poiché $\vec{R} \wedge \lambda\,\vec{R} = \vec{0}$; perciò tutti i punti della retta indicata appartengono all'asse centrale. Viceversa, se $\vec{M}_{Q'}$ è parallelo a $\vec{R}$, dall'invarianza di $I$ segue $\vec{M}_{Q'} = \dfrac{I}{|\vec{R}|^2}\,\vec{R} = \vec{M}_Q$, quindi $\vec{R} \wedge (Q - Q') = \vec{0}$ e $Q'$ sta sulla retta per $Q$ parallela a $\vec{R}$. Per la minimalità si prende un polo qualsiasi $Q'$ e si scrive $\vec{M}_{Q'} = \vec{M}_Q + \vec{R} \wedge (Q - Q')$: il secondo addendo è ortogonale a $\vec{R}$ e il primo è parallelo a $\vec{R}$, perciò
$$
|\vec{M}_{Q'}|^2 = |\vec{M}_Q|^2 + |\vec{R} \wedge (Q - Q')|^2 \geq |\vec{M}_Q|^2 .
$$
:::
::::

:::esempio{titolo="Due vettori sghembi"}
Siano $(P_1, \vec{v}_1)$ con $P_1 = O$ e $\vec{v}_1 = v\,\hat{\imath}$, e $(P_2, \vec{v}_2)$ con $P_2 - O = h\,\hat{k}$ e $\vec{v}_2 = v\,\hat{\jmath}$. Le due rette d'azione sono sghembe. Si ottiene
$$
\vec{R} = v\,(\hat{\imath} + \hat{\jmath}) ,
\qquad
\vec{M}_O = h\,\hat{k} \wedge v\,\hat{\jmath} = -\,h v\,\hat{\imath} ,
\qquad
I = -\,h v^2 \neq 0 ,
$$
quindi il sistema non è equivalente a un solo vettore applicato. L'asse centrale passa per il punto
$$
Q - O = \frac{\vec{R} \wedge \vec{M}_O}{|\vec{R}|^2} = \frac{v\,(\hat{\imath} + \hat{\jmath}) \wedge (-\,h v\,\hat{\imath})}{2 v^2} = \frac{h}{2}\,\hat{k}
$$
ed è parallelo a $\hat{\imath} + \hat{\jmath}$; il momento minimo vale
$$
\vec{M}_Q = \frac{I}{|\vec{R}|^2}\,\vec{R} = -\,\frac{h v}{2}\,(\hat{\imath} + \hat{\jmath}) ,
\qquad
|\vec{M}_Q| = \frac{\sqrt{2}}{2}\,h v .
$$

::struttura{frecce="0,0,-1,-0.72,x;0,0,2,0,y;0,0,0,2,z" forze="-0.6 -0.432,-0.6,-0.432,v_1;1.2 1.6,1.2,0,v_2" tratteggi="-0.8,1.376 1.2,-0.064" punti="0,0;0,1.6;0,0.8,Q,centro" etichette="0.16,-0.32,O;0.18,1.42,P_2;0.95,-0.5,asse centrale" riferimento=0 titolo="I due vettori sghembi e l'asse centrale, parallelo a $\vec{R}$ e passante per $Q$ con $Q - O = \dfrac{h}{2}\,\hat{k}$"}

:::

## Vettori concorrenti e sistemi piani

::::teorema{#teorema-di-varignon titolo="Teorema di Varignon"}
Siano $(P_1, \vec{v}_1), \dots, (P_n, \vec{v}_n)$ vettori applicati le cui rette d'azione passano tutte per uno stesso punto $K$, e sia $\vec{R} \neq \vec{0}$ la loro risultante. Allora per ogni polo $O$
$$
\vec{M}_O = (K - O) \wedge \vec{R} ,
$$
cioè il momento risultante coincide con il momento della risultante applicata in $K$, e il sistema è equivalente al solo vettore applicato $(K, \vec{R})$. Ne segue $I = 0$, e l'asse centrale è la retta per $K$ parallela a $\vec{R}$. Il caso di gran lunga più usato è quello di un singolo vettore scomposto nelle sue componenti, applicate nello stesso punto, e allora il momento del vettore è la somma dei momenti delle componenti, ciascuno calcolato con il proprio braccio.

:::dimostrazione
Per lo scorrimento ogni vettore $(P_i, \vec{v}_i)$ si porta nel punto $K$ della propria retta d'azione senza che il momento cambi, quindi $(P_i - O) \wedge \vec{v}_i = (K - O) \wedge \vec{v}_i$. Sommando su $i$ e usando la proprietà distributiva si ottiene
$$
\vec{M}_O = \sum_{i=1}^{n} (K - O) \wedge \vec{v}_i = (K - O) \wedge \vec{R} .
$$
Il momento rispetto a $K$ è perciò nullo e il sistema è equivalente a $(K, \vec{R})$. Infine $I = \vec{R} \cdot (K - O) \wedge \vec{R} = 0$, perché il prodotto misto contiene due volte $\vec{R}$.
:::
::::

:::teorema{#retta-d-azione-risultante titolo="Retta d'azione della risultante di un sistema piano"}
Sia un sistema piano, con tutti i punti e tutti i vettori nel piano $Oxy$, e sia $\vec{R} = (R_x, R_y) \neq \vec{0}$. Poiché $I = 0$, il sistema è equivalente al solo vettore $\vec{R}$ applicato in un punto qualsiasi della retta
$$
x\,R_y - y\,R_x = M_O ,
$$
detta **retta d'azione della risultante**, che è parallela a $\vec{R}$ e dista $\dfrac{|M_O|}{|\vec{R}|}$ da $O$. L'equazione si ottiene imponendo che il momento di $\vec{R}$ applicata in $(x, y)$ rispetto a $O$ valga $M_O$. Per carichi verticali, con $R_x = 0$ e $R_y \neq 0$, la retta d'azione è la verticale di ascissa $x = \dfrac{M_O}{R_y}$.
:::

:::esempio{titolo="Tre vettori su una lamina"}
Su una lamina rettangolare agiscono $\vec{v}_1 = F\,\hat{\imath}$ in $O$, $\vec{v}_2 = -2F\,\hat{\jmath}$ nel punto di coordinate $(2a, 0)$ e $\vec{v}_3 = F\,(-\hat{\imath} + \hat{\jmath})$ nel punto di coordinate $(2a, a)$. Si ottengono
$$
\vec{R} = -F\,\hat{\jmath} ,
\qquad
M_O = 2a \cdot (-2F) + \big[ 2a \cdot F - a \cdot (-F) \big] = -\,a F ,
$$
quindi la retta d'azione della risultante ha equazione $-x F = -\,a F$, cioè $x = a$. Il sistema è equivalente al solo vettore $-F\,\hat{\jmath}$ applicato in un punto della verticale di ascissa $a$, e rispetto a quel punto il momento risultante è nullo.

::struttura{poligoni="0,0 2,0 2,1 0,1" nodi="O,0,0;B,2,0;C,2,1" forze="O,1.1,0,v_1;B,0,-1.1,v_2;C,-0.78,0.78,v_3" reazioni="1 -1.5,0,-1,R" tratteggi="1,-1.7 1,1.5" punti="1,0" quote="O,B,2a,-2" titolo="I tre vettori e, nel secondo colore, la risultante sulla retta d'azione di ascissa $x = a$"}

:::

## Sistemi di vettori paralleli e loro centro

::::teorema{#centro-vettori-paralleli titolo="Centro di un sistema di vettori paralleli"}
Siano $\vec{v}_i = c_i\,\hat{u}$ vettori paralleli al versore $\hat{u}$, applicati nei punti $P_i$, dove ciascun $c_i$ è un numero con segno. Se $\displaystyle\sum_i c_i \neq 0$, il sistema è equivalente al solo vettore $\vec{R} = \Big( \sum_i c_i \Big)\,\hat{u}$ applicato nel **centro del sistema**, il punto $C$ definito da
$$
C - O = \frac{\displaystyle\sum_{i=1}^{n} c_i\,(P_i - O)}{\displaystyle\sum_{i=1}^{n} c_i} .
$$
Il punto $C$ dipende dai coefficienti $c_i$ e dai punti di applicazione, e non dipende dal versore $\hat{u}$: se tutti i vettori ruotano dello stesso angolo attorno ai rispettivi punti di applicazione, la retta d'azione della risultante ruota attorno a $C$. Con lo stesso calcolo, applicato ai pesi delle parti di un corpo, si ottiene il centro di massa, trattato nell'argomento sulla geometria delle masse.

::struttura{tratteggi="0,0 4,0 4,2 0,2 0,0" punti="0,0;4,0;4,2;0,2;2,1.4,C,centro" forze="0 0.6,0,0.6,;4 1.2,0,1.2,;4 3.8,0,1.8,;0 4.4,0,2.4," reazioni="2 3.6,0,2.2," etichette="0.2,0.62,F;4.2,1.22,2F;4.2,3.82,3F;0.2,4.42,4F;2.2,3.5,R;-0.45,-0.3,P_1;4.2,-0.3,P_2;4.2,1.7,P_3;-0.45,1.7,P_4" titolo="Quattro vettori paralleli di coefficienti $F$, $2F$, $3F$, $4F$ e la risultante applicata nel centro $C$ di coordinate $\left( 2a, \dfrac{7a}{5} \right)$"}

:::dimostrazione
La risultante è $\sum_i c_i\,\hat{u}$. Si pone $c = \sum_i c_i$ e si indica con $C$ il punto definito nell'enunciato, cosicché $\sum_i c_i\,(P_i - O) = c\,(C - O)$. Per la proprietà distributiva del prodotto vettoriale il momento risultante rispetto a $O$ è
$$
\begin{aligned}
\vec{M}_O &= \sum_{i=1}^{n} (P_i - O) \wedge c_i\,\hat{u} = \Big[ \sum_{i=1}^{n} c_i\,(P_i - O) \Big] \wedge \hat{u} \\[6pt]
&= c\,(C - O) \wedge \hat{u} = (C - O) \wedge c\,\hat{u} = (C - O) \wedge \vec{R} .
\end{aligned}
$$
Il vettore $\vec{R}$ applicato in $C$ ha quindi lo stesso momento del sistema rispetto a $O$, oltre alla stessa risultante, perciò i due sistemi sono equivalenti. Il punto $C$ è definito senza che $\hat{u}$ intervenga, quindi non dipende dalla direzione comune dei vettori.
:::
::::

:::osservazione{#proprieta-del-centro titolo="Proprietà del centro"}
Dalla formula del centro seguono tre proprietà usate in tutti i calcoli.

- Additività: se il sistema si spezza in due gruppi, con coefficienti totali $c'$ e $c''$ e centri $C'$ e $C''$, allora il centro del sistema completo è il centro dei due vettori $c'\,\hat{u}$ in $C'$ e $c''\,\hat{u}$ in $C''$.
- Simmetria: se i punti e i coefficienti sono simmetrici rispetto a un piano o a una retta, il centro appartiene a quel piano o a quella retta.
- Appartenenza: se tutti i coefficienti sono positivi, $C$ appartiene al più piccolo insieme convesso che contiene i punti $P_i$; con un coefficiente negativo il centro può cadere fuori da quell'insieme. Per $c_1 = F$ in $O$, $c_2 = -2F$ in $P_2 - O = a\,\hat{\imath}$ e $c_3 = \dfrac{3}{2}\,F$ in $P_3 - O = 3a\,\hat{\imath}$ il coefficiente totale è $\dfrac{F}{2}$ e il centro è il punto di ascissa $5a$, esterno al segmento che contiene i tre punti di applicazione.
:::

## Carichi distribuiti su un'asta

:::richiamo{titolo="Integrale definito"}
Per una funzione $f$ continua su $[a, b]$ l'integrale $\displaystyle\int_a^b f(s)\,ds$ è il limite delle somme $\sum_k f(s_k)\,\Delta s_k$ quando l'ampiezza massima degli intervalli $\Delta s_k$ tende a zero, e se $F$ è una primitiva di $f$ vale $\displaystyle\int_a^b f(s)\,ds = F(b) - F(a)$. Si rimanda all'argomento sul calcolo integrale di Analisi 1.
:::

:::definizione{#carico-distribuito titolo="Carico distribuito su un'asta"}
Un **carico distribuito** è una forza ripartita con continuità lungo un'asta. Sia $s$ l'ascissa misurata da un estremo dell'asta e sia $\hat{u}$ la direzione comune delle forze elementari. L'**intensità** del carico è la funzione $q(s)$, forza per unità di lunghezza misurata in $\mathrm{N/m}$, tale che sul tratto di lunghezza $ds$ agisce la forza $q(s)\,\hat{u}\,ds$. Il peso proprio di un'asta omogenea di densità lineare $\lambda$ è un carico uniforme di intensità $q = \lambda\,g$ diretto verso il basso. Un carico distribuito è un sistema di infiniti vettori applicati paralleli, perciò il suo centro si calcola come quello di un sistema di vettori paralleli, con gli integrali al posto delle somme.
:::

::::teorema{#risultante-carico-distribuito titolo="Risultante di un carico distribuito"}
Sia $q$ continua, o continua a tratti, sul tratto $0 \leq s \leq \ell$ di un'asta rettilinea, e sia
$$
R = \int_0^\ell q(s)\,ds \neq 0 .
$$
Allora il carico è equivalente alla sola forza $R\,\hat{u}$ applicata nel punto di ascissa
$$
s_C = \frac{1}{R}\int_0^\ell s\,q(s)\,ds .
$$
Con questa riduzione i carichi distribuiti entrano nelle equazioni di equilibrio e nelle equazioni cardinali come forze concentrate. Se invece $R = 0$ il carico è equivalente a una coppia, di momento $\displaystyle - \hat{k}\int_0^\ell s\,q(s)\,ds$ per un carico diretto secondo $-\hat{\jmath}$ su un'asta parallela a $\hat{\imath}$.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" carichi="A,B,0,1.2,q_0" reazioni="4 1.35,0,-1.3,R" quote="A,4 0,s_C,0.9" riferimento=0 titolo="Carico triangolare di intensità $q(s) = q_0\,\dfrac{s}{\ell}$: la risultante vale $\dfrac{q_0\,\ell}{2}$ e passa per il punto di ascissa $\dfrac{2\ell}{3}$"}

:::dimostrazione
Si divide $[0, \ell]$ in intervalli di ampiezza $\Delta s_k$ e si sostituisce il carico su ciascun intervallo con la forza $q(s_k)\,\hat{u}\,\Delta s_k$ applicata in un suo punto di ascissa $s_k$. Si ottiene un sistema di vettori paralleli, quindi per il teorema sul centro dei vettori paralleli la sua risultante vale $\big( \sum_k q(s_k)\,\Delta s_k \big)\,\hat{u}$ ed è applicata nel punto di ascissa
$$
\frac{\sum_k s_k\,q(s_k)\,\Delta s_k}{\sum_k q(s_k)\,\Delta s_k} .
$$
Quando l'ampiezza massima degli intervalli tende a zero le due somme tendono agli integrali dell'enunciato, perciò la risultante e la sua ascissa sono quelle indicate. Se $R = 0$ la risultante è nulla, quindi per il teorema di riduzione il sistema è equivalente a una coppia di momento $\vec{M}_O = \displaystyle\int_0^\ell s\,\hat{\imath} \wedge \big( -q(s)\,\hat{\jmath} \big)\,ds$, che è il momento indicato.
:::
::::

:::esempio{titolo="Carichi notevoli"}
Sul tratto $0 \leq s \leq \ell$ si ottengono i valori seguenti.

- Carico uniforme $q(s) = q_0$: $R = q_0\,\ell$ e $s_C = \dfrac{\ell}{2}$.
- Carico triangolare $q(s) = q_0\,\dfrac{s}{\ell}$: $R = \dfrac{q_0\,\ell}{2}$ e $s_C = \dfrac{2\ell}{3}$.
- Carico parabolico $q(s) = q_0\,\Big( 1 - \dfrac{s^2}{\ell^2} \Big)$: $R = \dfrac{2\,q_0\,\ell}{3}$ e $s_C = \dfrac{3\ell}{8}$.

Per il carico parabolico, per esempio,
$$
R = q_0 \int_0^\ell \Big( 1 - \frac{s^2}{\ell^2} \Big)\,ds = q_0\,\Big( \ell - \frac{\ell}{3} \Big) = \frac{2\,q_0\,\ell}{3} ,
\qquad
\int_0^\ell s\,q(s)\,ds = q_0\,\Big( \frac{\ell^2}{2} - \frac{\ell^2}{4} \Big) = \frac{q_0\,\ell^2}{4} ,
$$
e dividendo il secondo risultato per il primo si trova $s_C = \dfrac{3\ell}{8}$.
:::

## Sistemi equilibrati

:::definizione{#sistema-equilibrato titolo="Sistema equilibrato"}
Un sistema di vettori applicati è **equilibrato** se
$$
\begin{cases}
\vec{R} = \vec{0} \\[4pt]
\vec{M}_O = \vec{0}
\end{cases}
$$
per un polo $O$, e quindi, per la formula del cambiamento di polo, per ogni polo. Nello spazio le due condizioni vettoriali sono sei equazioni scalari, nel piano tre. Un corpo rigido inizialmente in quiete resta in equilibrio se e solo se il sistema di tutte le forze che agiscono su di esso, comprese le reazioni vincolari, è equilibrato; è il contenuto delle equazioni cardinali della statica, trattate nell'argomento sulla statica dei sistemi.
:::

:::teorema{#due-vettori-equilibrati titolo="Sistemi equilibrati di due e di tre vettori"}
Due vettori applicati non nulli formano un sistema equilibrato se e solo se sono opposti e hanno la stessa retta d'azione. Tre vettori applicati non nulli e non paralleli formano un sistema equilibrato soltanto se le tre rette d'azione sono complanari e passano per uno stesso punto. Il primo enunciato segue dalla condizione $\vec{R} = \vec{0}$, che rende i due vettori opposti, e dal teorema sul momento di una coppia, che per rette d'azione distinte darebbe momento non nullo. Il secondo si ottiene scegliendo come polo il punto $K$ in cui si incontrano due delle rette d'azione: i due vettori corrispondenti hanno momento nullo rispetto a $K$, perciò anche il terzo ha momento nullo e la sua retta d'azione passa per $K$.
:::

:::osservazione{#equilibratura-con-un-vettore titolo="Equilibrare un sistema"}
Per equilibrare un sistema di risultante $\vec{R}$ e momento $\vec{M}_O$ occorre aggiungere un sistema di risultante $-\vec{R}$ e momento $-\vec{M}_O$, per esempio il vettore applicato $(O, -\vec{R})$ insieme alla coppia di momento $-\vec{M}_O$. Un solo vettore applicato $(Q, -\vec{R})$ basta se e solo se $\vec{M}_O = (Q - O) \wedge \vec{R}$, e questa condizione richiede $\vec{M}_O$ ortogonale a $\vec{R}$, cioè $I = 0$; in tal caso $Q$ è un punto dell'asse centrale. Un sistema con $I \neq 0$ si equilibra perciò con un vettore applicato e una coppia, e la coppia di momento minimo è quella di momento $-\dfrac{I}{|\vec{R}|^2}\,\vec{R}$, da aggiungere a un vettore applicato in un punto dell'asse centrale.
:::
