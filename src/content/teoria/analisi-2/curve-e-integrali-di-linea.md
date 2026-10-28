---
titolo: Curve e integrali di linea
sommario: Curve parametriche nel piano e nello spazio, regolarità e vettore tangente, lunghezza e ascissa curvilinea, integrali di linea di prima e di seconda specie con le applicazioni a massa, baricentro e lavoro.
---

## Curve parametriche

:::definizione{#curva-parametrica titolo="Curva parametrica e sostegno"}
Una **curva parametrica** è una funzione continua $\gamma : [a, b] \to \mathbb{R}^2$ (curva piana) oppure $\gamma : [a, b] \to \mathbb{R}^3$ (curva nello spazio). In componenti si scrive $\gamma(t) = (x(t), y(t))$ oppure $\gamma(t) = (x(t), y(t), z(t))$; la variabile $t$ si chiama parametro. Il **sostegno** di $\gamma$ è l'immagine $\gamma([a, b])$, cioè l'insieme dei punti percorsi. La curva è la *funzione*, non l'insieme di punti: la parametrizzazione contiene anche il verso e la legge con cui il sostegno viene percorso, e per questo due curve diverse possono avere lo stesso sostegno. Tutti gli integrali di questo capitolo si calcolano a partire da una parametrizzazione.
:::

:::esempio{titolo="Stesso sostegno, parametrizzazioni diverse"}
Le curve
$$
\gamma(t) = (\cos t, \sin t), \quad t \in [0, 2\pi],
\qquad
\delta(t) = (\cos 2t, \sin 2t), \quad t \in [0, \pi],
$$
hanno lo **stesso sostegno**, la circonferenza unitaria, percorsa in senso antiorario a partire dal punto $(1, 0)$. La seconda la percorre in metà tempo, quindi con velocità doppia.

::grafico{xmin=-2.5 xmax=2.5 ymin=-1.5 ymax=2.5 uguale=1 curve="cos(t),sin(t),0,6.29" vettori="1,0,1,2,δ′(0);1,0,1,1,γ′(0)" punti="1,0" titolo="La circonferenza unitaria: nel punto $(1, 0)$ il vettore velocità di $\delta$ è il doppio di quello di $\gamma$"}

:::

:::definizione{#curva-semplice-chiusa titolo="Curve semplici e curve chiuse"}
Una curva $\gamma : [a, b] \to \mathbb{R}^n$ è **chiusa** se $\gamma(a) = \gamma(b)$, cioè se il punto finale coincide con quello iniziale. È **semplice** se non attraversa due volte lo stesso punto, cioè se $\gamma$ è iniettiva su $[a, b]$; per una curva chiusa si richiede l'iniettività su $[a, b)$, poiché la coincidenza degli estremi è prevista dalla definizione. La circonferenza $(\cos t, \sin t)$ su $[0, 2\pi]$ è chiusa e semplice. Le curve chiuse semplici delimitano regioni del piano e compaiono nel capitolo sul teorema di Green.

::grafico{xmin=-5 xmax=5 ymin=-1.8 ymax=2.2 uguale=1 curve="-3.2+1.1*cos(t),1.1*sin(t),0,6.29;t-0.1,0.9*sin(2.5*t),-1,1;3.2+1.4*sin(t),1.1*sin(2*t),0,6.29" punti="-1.1,-0.539;0.9,0.539" etichette="-4.6,1.6,chiusa e semplice;-1.7,1.6,non chiusa;1.8,1.6,chiusa, non semplice" titolo="Una curva chiusa e semplice, una curva non chiusa e una curva chiusa che passa due volte per lo stesso punto"}

:::

:::osservazione
Il grafico di una funzione $f : [a, b] \to \mathbb{R}$ è il sostegno della curva $\gamma(t) = (t, f(t))$, detta **curva cartesiana**. Ogni risultato sulle curve parametriche si applica quindi anche ai grafici; per le curve cartesiane le formule del capitolo assumono una forma più semplice, perché $x'(t) = 1$.
:::

## Curve regolari e vettore tangente

:::definizione{#curva-regolare titolo="Curva regolare"}
Una curva $\gamma : [a, b] \to \mathbb{R}^n$ è **regolare** se è di classe $C^1$ e $\gamma'(t) \neq \mathbf{0}$ per *ogni* $t \in (a, b)$, dove
$$
\gamma'(t) = (x'(t), y'(t)) \qquad \text{oppure} \qquad \gamma'(t) = (x'(t), y'(t), z'(t)).
$$
Se $\gamma(t)$ è la posizione di un punto all'istante $t$, il vettore $\gamma'(t)$ è la sua velocità. La condizione $\gamma'(t) \neq \mathbf{0}$ garantisce che in ogni punto la curva ha una direzione di avanzamento ben definita, quindi una retta tangente; è questa condizione che rende possibile la costruzione degli integrali di linea.
:::

:::definizione{#vettore-tangente titolo="Vettore tangente e retta tangente"}
Sia $\gamma$ regolare e sia $t_0 \in (a, b)$. Il vettore $\gamma'(t_0)$ si chiama **vettore tangente** a $\gamma$ in $\gamma(t_0)$; il **versore tangente** è
$$
T(t_0) = \frac{\gamma'(t_0)}{\lVert \gamma'(t_0) \rVert}.
$$
La **retta tangente** alla curva nel punto $\gamma(t_0)$ è la retta passante per $\gamma(t_0)$ con direzione $\gamma'(t_0)$, di equazione parametrica
$$
r(s) = \gamma(t_0) + s\, \gamma'(t_0), \qquad s \in \mathbb{R}.
$$
Il versore tangente indica la direzione e il verso di percorrenza; compare nel legame tra le due specie di integrali di linea.

::grafico{xmin=-3 xmax=3.5 ymin=-1.5 ymax=2.2 uguale=1 curve="2*cos(t),sin(t),0,6.29;1.414-1.414*t,0.707+0.707*t,-1.2,1.6" vettori="1.414,0.707,0,1.414,γ′(t₀)" punti="1.414,0.707,pieno,γ(t₀)" titolo="L'ellisse $\gamma(t) = (2\cos t, \sin t)$ con il vettore tangente e la retta tangente nel punto $\gamma(t_0)$, per $t_0 = \dfrac{\pi}{4}$"}

:::

:::esempio{titolo="L'elica circolare"}
La curva $\gamma(t) = (\cos t, \sin t, t)$, $t \in [0, 2\pi]$, è l'elica circolare: la proiezione sul piano $xy$ percorre la circonferenza unitaria mentre la quota cresce linearmente. Poiché
$$
\gamma'(t) = (-\sin t, \cos t, 1), \qquad \lVert \gamma'(t) \rVert = \sqrt{\sin^2 t + \cos^2 t + 1} = \sqrt{2},
$$
il vettore tangente *non* è mai nullo, quindi la curva è **regolare**. La norma costante del vettore velocità rende l'elica un esempio ricorrente negli esercizi su lunghezze e integrali di linea.
:::

:::definizione{#curva-regolare-a-tratti titolo="Curva regolare a tratti"}
Una curva $\gamma : [a, b] \to \mathbb{R}^n$ continua è **regolare a tratti** se esiste una suddivisione $a = t_0 < t_1 < \dots < t_k = b$ tale che la restrizione di $\gamma$ a ciascun intervallo $[t_{i-1}, t_i]$ è regolare. Sono regolari a tratti le spezzate, formate da segmenti consecutivi, e le concatenazioni di archi di curve regolari. Lunghezza e integrali di linea di una curva regolare a tratti si calcolano **sommando i contributi** dei singoli tratti; nei punti di giunzione la curva può avere uno spigolo.
:::

:::esempio{titolo="Una cuspide"}
La curva $\gamma(t) = (t^2, t^3)$, $t \in [-1, 1]$, ha $\gamma'(t) = (2t, 3t^2)$, che si annulla per $t = 0$. La curva **non è regolare** su $[-1, 1]$, ma è **regolare a tratti**, con la suddivisione nei due intervalli $[-1, 0]$ e $[0, 1]$. Il sostegno presenta una cuspide nell'origine: la curva arriva nell'origine lungo il ramo con $y < 0$ muovendosi verso sinistra, poiché $x'(t) = 2t < 0$ per $t < 0$, e riparte lungo il ramo con $y > 0$ muovendosi verso destra, con un'inversione del verso di avanzamento orizzontale.

::grafico{xmin=-0.8 xmax=1.8 ymin=-1.2 ymax=1.2 uguale=1 curve="t^2,t^3,-1,1" vettori="0.72,-0.61,0.38,-0.18;0.72,0.61,1.06,1.05" punti="0,0;1,-1,pieno,γ(−1);1,1,pieno,γ(1)" titolo="La curva $\gamma(t) = (t^2, t^3)$: la velocità si annulla per $t = 0$ e il sostegno ha una cuspide nell'origine"}

:::

:::attenzione
L'annullarsi di $\gamma'$ in un punto *non* implica che il sostegno abbia lì un punto singolare. La curva $\gamma(t) = (t^3, t^3)$, $t \in [-1, 1]$, ha $\gamma'(0) = (0, 0)$, ma il suo sostegno è il segmento della retta $y = x$ tra $(-1, -1)$ e $(1, 1)$, privo di spigoli: lo stesso segmento è il sostegno della curva regolare $\delta(t) = (t, t)$. La regolarità è una **proprietà della parametrizzazione**, non del sostegno.
:::

## Curve equivalenti e orientazione

:::definizione{#curve-equivalenti titolo="Curve equivalenti"}
Due curve regolari $\gamma : [a, b] \to \mathbb{R}^n$ e $\delta : [c, d] \to \mathbb{R}^n$ sono **equivalenti** se esiste una funzione $\varphi : [c, d] \to [a, b]$ di classe $C^1$, biiettiva e con $\varphi'(u) \neq 0$ per ogni $u$, tale che
$$
\delta(u) = \gamma(\varphi(u)) \qquad \text{per ogni } u \in [c, d].
$$
La funzione $\varphi$ si chiama **cambiamento di parametro** e la curva $\delta$ una **riparametrizzazione** di $\gamma$. Due curve equivalenti hanno lo stesso sostegno, percorso con leggi diverse. La nozione serve a dare senso agli integrali di linea: le grandezze geometriche e fisiche del capitolo, come la lunghezza e la massa, *non* dipendono dalla parametrizzazione scelta, e questa indipendenza va verificata.
:::

:::definizione{#orientazione titolo="Orientazione e curva opposta"}
Poiché $\varphi'$ è continua e mai nulla su un intervallo, il suo segno è costante. Se $\varphi' > 0$, le due curve equivalenti percorrono il sostegno nello stesso verso e si dicono **equiorientate**; se $\varphi' < 0$, lo percorrono in versi opposti. La **curva opposta** di $\gamma : [a, b] \to \mathbb{R}^n$ è
$$
-\gamma(t) = \gamma(a + b - t), \qquad t \in [a, b],
$$
che percorre lo stesso sostegno dal punto finale a quello iniziale. L'orientazione è *irrilevante* per gli integrali di prima specie e determina il segno di quelli di seconda specie.

::grafico{xmin=-1.8 xmax=1.8 ymin=-0.5 ymax=1.8 uguale=1 curve="cos(t),sin(t),0,3.1416" vettori="0.707,0.707,0,1.414,γ′;0.707,0.707,1.414,0,(−γ)′" punti="1,0,pieno,γ(a);-1,0,pieno,γ(b)" titolo="Una curva e la sua opposta: stesso sostegno, vettori tangenti di verso opposto"}

:::

## Lunghezza di una curva

:::definizione{#lunghezza-di-una-curva titolo="Lunghezza di una curva"}
Sia $\gamma : [a, b] \to \mathbb{R}^n$ una curva. A ogni suddivisione $a = t_0 < t_1 < \dots < t_k = b$ si associa la poligonale di vertici $\gamma(t_0), \gamma(t_1), \dots, \gamma(t_k)$, la cui lunghezza è la somma delle lunghezze dei segmenti. La curva è **rettificabile** se l'insieme delle lunghezze di queste poligonali è limitato superiormente, e in tal caso la sua **lunghezza** $L(\gamma)$ è l'estremo superiore di tale insieme. La definizione formalizza l'idea di approssimare la curva con spezzate sempre più fitte; per il calcolo effettivo si usa la formula della lunghezza.

::grafico{xmin=-0.5 xmax=4 ymin=-0.5 ymax=3.6 uguale=1 curve="3*cos(t),3*sin(t),0,1.5708" segmenti="3,0,2.598,1.5;2.598,1.5,1.5,2.598;1.5,2.598,0,3" punti="3,0,pieno,γ(t₀);2.598,1.5,pieno,γ(t₁);1.5,2.598,pieno,γ(t₂);0,3,pieno,γ(t₃)" titolo="Un arco di circonferenza e una poligonale inscritta: la lunghezza della curva è l'estremo superiore delle lunghezze di queste poligonali"}

:::

:::teorema{#formula-della-lunghezza titolo="Formula della lunghezza"}
Se $\gamma : [a, b] \to \mathbb{R}^n$ è regolare a tratti, allora $\gamma$ è **rettificabile** e
$$
L(\gamma) = \int_a^b \lVert \gamma'(t) \rVert \, dt ,
$$
cioè, in componenti,
$$
L(\gamma) = \int_a^b \sqrt{x'(t)^2 + y'(t)^2} \, dt
\qquad \text{oppure} \qquad
L(\gamma) = \int_a^b \sqrt{x'(t)^2 + y'(t)^2 + z'(t)^2} \, dt .
$$
Per una curva cartesiana $\gamma(t) = (t, f(t))$, $t \in [a, b]$, la formula diventa
$$
L(\gamma) = \int_a^b \sqrt{1 + f'(t)^2} \, dt .
$$
La dimostrazione confronta la lunghezza delle poligonali inscritte con l'integrale della velocità e si rimanda ai testi di riferimento. La formula dice che la lunghezza è l'**integrale del modulo della velocità**, in accordo con l'interpretazione cinematica: spazio percorso uguale integrale della velocità scalare.
:::

:::esempio{titolo="Lunghezza della circonferenza"}
Per la circonferenza di raggio $r$, $\gamma(t) = (r \cos t, r \sin t)$ con $t \in [0, 2\pi]$, si ha $\gamma'(t) = (-r \sin t, r \cos t)$, quindi $\lVert \gamma'(t) \rVert = r$ e
$$
L(\gamma) = \int_0^{2\pi} r \, dt = 2\pi r ,
$$
in accordo con la geometria elementare.
:::

::::teorema{#invarianza-della-lunghezza titolo="Invarianza della lunghezza per riparametrizzazione"}
Se $\gamma$ e $\delta$ sono curve regolari equivalenti, allora $L(\gamma) = L(\delta)$. La lunghezza è quindi una **proprietà geometrica** della curva, indipendente dalla parametrizzazione e dal verso di percorrenza, e si può calcolare con la parametrizzazione più comoda.

:::dimostrazione
Sia $\delta(u) = \gamma(\varphi(u))$ con $\varphi : [c, d] \to [a, b]$ cambiamento di parametro e $\varphi' > 0$. Per la **regola della catena** $\delta'(u) = \gamma'(\varphi(u))\, \varphi'(u)$, quindi $\lVert \delta'(u) \rVert = \lVert \gamma'(\varphi(u)) \rVert\, \varphi'(u)$. Con la sostituzione $t = \varphi(u)$, $dt = \varphi'(u)\, du$, si ottiene
$$
L(\delta) = \int_c^d \lVert \gamma'(\varphi(u)) \rVert\, \varphi'(u) \, du
= \int_a^b \lVert \gamma'(t) \rVert \, dt = L(\gamma).
$$
Nel caso $\varphi' < 0$ si ha $\lVert \delta'(u) \rVert = -\lVert \gamma'(\varphi(u)) \rVert\, \varphi'(u)$ e la stessa sostituzione scambia gli estremi di integrazione, perciò i due segni meno si compensano e la **conclusione non cambia**.
:::
::::

:::attenzione
La formula misura il **cammino percorso** dalla parametrizzazione, *non* la lunghezza del sostegno. La curva $\gamma(t) = (\cos t, \sin t)$ su $[0, 4\pi]$ percorre due volte la circonferenza unitaria e la formula restituisce $4\pi$, il doppio della lunghezza del sostegno. L'uguaglianza tra le due quantità è garantita per le **curve semplici**.
:::

## Ascissa curvilinea

:::definizione{#ascissa-curvilinea titolo="Ascissa curvilinea"}
Sia $\gamma : [a, b] \to \mathbb{R}^n$ regolare. L'**ascissa curvilinea** è la funzione
$$
s(t) = \int_a^t \lVert \gamma'(\tau) \rVert \, d\tau , \qquad t \in [a, b],
$$
cioè la lunghezza dell'arco percorso dall'istante iniziale fino all'istante $t$. Per il teorema fondamentale del calcolo $s'(t) = \lVert \gamma'(t) \rVert > 0$, quindi $s$ è strettamente crescente e invertibile da $[a, b]$ su $[0, L(\gamma)]$. La riparametrizzazione $\tilde{\gamma}(s) = \gamma(t(s))$, dove $t(s)$ è l'inversa, si chiama **parametrizzazione per lunghezza d'arco** e ha velocità di modulo costante uguale a $1$: il parametro coincide con la distanza percorsa lungo la curva. La scrittura $ds = \lVert \gamma'(t) \rVert \, dt$ è l'**elemento di lunghezza** e dà il nome al simbolo $ds$ negli integrali di linea.
:::

:::esempio
Per la circonferenza di raggio $r$, $\gamma(t) = (r\cos t, r\sin t)$, si ha $\lVert \gamma'(t) \rVert = r$, quindi $s(t) = rt$ e $t(s) = \dfrac{s}{r}$. La parametrizzazione per lunghezza d'arco è
$$
\tilde{\gamma}(s) = \left( r\cos \frac{s}{r},\; r\sin \frac{s}{r} \right), \qquad s \in [0, 2\pi r],
$$
e infatti $\lVert \tilde{\gamma}'(s) \rVert = 1$ per *ogni* $s$.
:::

## Integrali di linea di prima specie

:::definizione{#integrale-prima-specie titolo="Integrale di linea di prima specie"}
Siano $\gamma : [a, b] \to \mathbb{R}^n$ una curva regolare e $f$ una funzione scalare continua sul sostegno di $\gamma$. L'**integrale di linea di prima specie** di $f$ lungo $\gamma$ è
$$
\int_\gamma f \, ds = \int_a^b f(\gamma(t))\, \lVert \gamma'(t) \rVert \, dt .
$$
Se $\gamma$ è regolare a tratti, l'integrale è la somma degli integrali sui singoli tratti. Il calcolo segue sempre lo stesso schema: si sostituiscono le componenti della parametrizzazione nella funzione, si calcola $\lVert \gamma'(t) \rVert$ e si integra in $t$. Per $f = 1$ l'integrale restituisce la lunghezza della curva. Con lo stesso cambio di variabile usato per la lunghezza si verifica che l'integrale **non dipende dalla parametrizzazione** scelta tra quelle equivalenti.
:::

:::esempio
Si calcola $\displaystyle\int_\gamma y \, ds$ sul segmento $\gamma(t) = (t, 2t)$, $t \in [0, 1]$, che congiunge l'origine al punto $(1, 2)$. Poiché $\gamma'(t) = (1, 2)$ e $\lVert \gamma'(t) \rVert = \sqrt{5}$, si ottiene
$$
\int_\gamma y \, ds = \int_0^1 2t \cdot \sqrt{5} \, dt = \sqrt{5}.
$$
:::

:::definizione{#massa-e-baricentro titolo="Massa e baricentro di un filo"}
Un filo materiale è descritto da una curva regolare a tratti $\gamma$ con una densità lineare $\delta(P) \geq 0$, continua sul sostegno. La **massa** del filo è
$$
m = \int_\gamma \delta \, ds ,
$$
e il **baricentro** è il punto $G = (\bar{x}, \bar{y})$ di coordinate
$$
\bar{x} = \frac{1}{m} \int_\gamma x\, \delta \, ds , \qquad
\bar{y} = \frac{1}{m} \int_\gamma y\, \delta \, ds ,
$$
con la terza coordinata analoga per le curve nello spazio. Se il filo è omogeneo, cioè $\delta$ è costante, la densità si semplifica e le coordinate diventano $\bar{x} = \dfrac{1}{L} \displaystyle\int_\gamma x \, ds$, con $L$ lunghezza della curva. Il baricentro di un filo *non* appartiene in generale al sostegno: per una semicirconferenza omogenea si trova sull'asse di simmetria, all'interno dell'arco.

::grafico{xmin=-1.6 xmax=1.6 ymin=-0.4 ymax=1.4 uguale=1 curve="cos(t),sin(t),0,3.1416" punti="0,0.6366,pieno,G" titolo="Una semicirconferenza omogenea: il baricentro $G$ appartiene all'asse di simmetria e non appartiene all'arco"}

:::

:::osservazione
Le simmetrie riducono il calcolo del baricentro. Se il sostegno di un filo omogeneo è simmetrico rispetto a una retta, il baricentro **appartiene a quella retta**, poiché nell'integrale i contributi simmetrici della coordinata ortogonale alla retta si compensano. Negli esercizi conviene individuare le simmetrie prima di impostare gli integrali.
:::

## Integrali di linea di seconda specie

:::definizione{#campo-vettoriale titolo="Campo vettoriale"}
Un **campo vettoriale** su $A \subseteq \mathbb{R}^2$ è una funzione $F : A \to \mathbb{R}^2$, $F(x, y) = \bigl( F_1(x, y),\, F_2(x, y) \bigr)$, che associa a ogni punto un vettore; nello spazio il campo ha tre componenti. Il campo è continuo (o di classe $C^1$) se lo sono le sue componenti. L'esempio fisico di riferimento è un campo di forze: in ogni punto dello spazio agisce una forza che dipende dal punto, come il campo gravitazionale.
:::

:::definizione{#integrale-seconda-specie titolo="Integrale di linea di seconda specie e lavoro"}
Siano $\gamma : [a, b] \to \mathbb{R}^n$ una curva regolare e $F$ un campo vettoriale continuo sul sostegno di $\gamma$. L'**integrale di linea di seconda specie** di $F$ lungo $\gamma$ è
$$
\int_\gamma F \cdot d\gamma = \int_a^b F(\gamma(t)) \cdot \gamma'(t) \, dt ,
$$
dove il punto indica il prodotto scalare; nel piano l'integrando è $F_1(\gamma(t))\, x'(t) + F_2(\gamma(t))\, y'(t)$. Per una curva regolare a tratti si sommano i contributi dei tratti. Se $F$ è un campo di forze, l'integrale è il **lavoro** compiuto dal campo sul punto che percorre la curva: in ogni istante conta *solo* la componente della forza nella direzione del moto, e infatti l'integrando è il prodotto scalare tra forza e velocità.
:::

:::definizione{#forma-differenziale titolo="Notazione con le forme differenziali"}
L'espressione $\omega = F_1 \, dx + F_2 \, dy$ si chiama **forma differenziale** associata al campo $F = (F_1, F_2)$, e l'integrale di seconda specie si scrive anche
$$
\int_\gamma F_1 \, dx + F_2 \, dy = \int_a^b \bigl( F_1(\gamma(t))\, x'(t) + F_2(\gamma(t))\, y'(t) \bigr) \, dt ,
$$
con il termine $F_3\, dz$ in più nello spazio. La notazione ricorda la regola di calcolo, poiché $dx$ si sostituisce con $x'(t)\, dt$ e $dy$ con $y'(t)\, dt$. È la scrittura usata nel **teorema di Green** e nello studio delle **forme esatte**, per cui si rimanda ai capitoli successivi.
:::

:::esempio
Si calcola il lavoro del campo $F(x, y) = (y, x)$ lungo il segmento $\gamma(t) = (t, t)$, $t \in [0, 1]$. Poiché $\gamma'(t) = (1, 1)$ e $F(\gamma(t)) = (t, t)$, si ottiene
$$
\int_\gamma F \cdot d\gamma = \int_0^1 (t \cdot 1 + t \cdot 1) \, dt = \int_0^1 2t \, dt = 1 .
$$
:::

:::osservazione
Le due specie di integrali sono legate dal **versore tangente**. Poiché $\gamma'(t) = \lVert \gamma'(t) \rVert \, T(t)$, si ha
$$
\int_\gamma F \cdot d\gamma = \int_a^b \bigl( F(\gamma(t)) \cdot T(t) \bigr) \lVert \gamma'(t) \rVert \, dt = \int_\gamma (F \cdot T) \, ds ,
$$
quindi l'integrale di seconda specie è l'integrale di prima specie della **componente tangenziale** del campo. La dipendenza dal verso di percorrenza entra attraverso $T$, che cambia segno con l'orientazione.

::grafico{xmin=-1 xmax=3 ymin=-0.4 ymax=3.4 uguale=1 curve="t,t^2,-0.6,1.8" vettori="1,1,0,2,F;1,1,2,3,γ′(1);1,1,1.2,1.4" segmenti="0,2,1.2,1.4" punti="1,1" titolo="Per esempio, il campo $F(x, y) = (-y, x)$ nel punto $(1, 1)$ della parabola $\gamma(t) = (t, t^2)$: nell'integrale di seconda specie conta solo la proiezione di $F$ sulla direzione tangente, in grigio"}

:::

## Orientazione e segno degli integrali

:::osservazione{#orientazione-e-segno titolo="Comportamento rispetto all'orientazione"}
I due tipi di integrale rispondono in modo diverso al cambio di orientazione.

- L'integrale di prima specie è **invariante** per riparametrizzazioni, *anche* con cambio di verso: nell'integrando compare il modulo $\lVert \gamma'(t) \rVert$, che non risente del segno di $\varphi'$, e vale lo stesso cambio di variabile visto per la lunghezza. In particolare $\displaystyle\int_{-\gamma} f \, ds = \int_\gamma f \, ds$: la massa di un filo non dipende dal verso in cui lo si percorre.
- L'integrale di seconda specie **cambia segno** sulla curva opposta: nell'integrando compare il vettore $\gamma'(t)$, che si inverte con il verso di percorrenza, quindi $\displaystyle\int_{-\gamma} F \cdot d\gamma = -\int_\gamma F \cdot d\gamma$. Il lavoro compiuto dal campo lungo il percorso inverso è l'opposto del lavoro lungo il percorso diretto.

Per questa ragione un integrale di seconda specie è assegnato su una **curva orientata**: la traccia dell'esercizio specifica il verso, per esempio indicando punto iniziale e punto finale oppure il senso antiorario su una curva chiusa.
:::
