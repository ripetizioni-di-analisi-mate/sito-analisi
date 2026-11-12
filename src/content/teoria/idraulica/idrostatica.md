---
titolo: Proprietà dei fluidi e statica dei fluidi
sommario: Le proprietà che caratterizzano un fluido, l'isotropia della pressione, l'equazione indefinita della statica e la legge di Stevin, il piano dei carichi idrostatici, la misura delle pressioni con i manometri a liquido e i liquidi in quiete relativa.
---

## Proprietà dei fluidi

Un fluido si distingue da un solido perché non ha una forma propria e, sotto uno sforzo tangenziale, si deforma indefinitamente. Le grandezze che seguono descrivono il fluido e compaiono in tutte le formule dell'Idraulica.

:::definizione{#densita-e-peso-specifico titolo="Densità e peso specifico"}
Sia un fluido omogeneo di massa $m$ che occupa il volume $V$. Si chiama **densità** il rapporto
$$
\rho = \frac{m}{V} ,
$$
misurato in $\mathrm{kg/m^3}$, e **peso specifico** il peso dell'unità di volume,
$$
\gamma = \frac{m\,g}{V} = \rho\,g ,
$$
misurato in $\mathrm{N/m^3}$ oppure in $\mathrm{kN/m^3}$. Il rapporto fra la densità del fluido e quella dell'acqua si chiama *densità relativa* $\delta$, ed è un numero puro. Per l'acqua a $20\,^\circ\mathrm{C}$ si assume $\rho = 1000\,\mathrm{kg/m^3}$, quindi $\gamma = 9810\,\mathrm{N/m^3} = 9{,}81\,\mathrm{kN/m^3}$; per il mercurio $\delta = 13{,}6$, da cui $\gamma_{\mathrm{Hg}} = 13{,}6 \cdot 9{,}81 = 133{,}4\,\mathrm{kN/m^3}$. Il peso specifico entra in tutte le formule della statica dei fluidi, perché la pressione in un punto dipende dal peso del liquido sovrastante. Un olio con $\delta = 0{,}88$ ha $\gamma = 8{,}63\,\mathrm{kN/m^3}$, quindi a pari profondità dà una pressione pari all'$88\%$ di quella dell'acqua.
:::

:::definizione{#comprimibilita titolo="Modulo di elasticità a compressione cubica"}
Sia un volume $V$ di fluido che, per l'incremento di pressione $\Delta p$, subisce la variazione di volume $\Delta V$. Le due quantità hanno segno opposto, quindi il loro rapporto si prende con il segno meno:
$$
\varepsilon = -\frac{\Delta p}{\dfrac{\Delta V}{V}} ,
$$
e $\varepsilon$ si chiama **modulo di elasticità a compressione cubica**, misurato in $\mathrm{Pa}$. Per l'acqua le misure di laboratorio danno $\varepsilon \simeq 2{,}1 \cdot 10^9\,\mathrm{Pa}$. Un incremento di pressione di $1\,\mathrm{MPa}$, pari a circa $100\,\mathrm{m}$ di colonna d'acqua, riduce il volume dello $0{,}048\%$; nei problemi di statica e di moto permanente l'acqua si considera perciò **incomprimibile**, con $\rho$ costante. La comprimibilità serve dove conta la celerità con cui una perturbazione di pressione si propaga nel liquido,
$$
c = \sqrt{\frac{\varepsilon}{\rho}} = \sqrt{\frac{2{,}1 \cdot 10^9}{1000}} = 1449\,\mathrm{m/s} ,
$$
come nel calcolo del colpo d'ariete nelle condotte.
:::

:::esempio{titolo="Prova idraulica di una condotta"}
Un tratto di condotta rigida contiene $0{,}50\,\mathrm{m^3}$ di acqua e viene portato alla pressione di prova $\Delta p = 20\,\mathrm{MPa}$. La variazione relativa di volume vale
$$
\frac{\Delta V}{V} = -\frac{\Delta p}{\varepsilon} = -\frac{20 \cdot 10^6}{2{,}1 \cdot 10^9} = -9{,}52 \cdot 10^{-3} ,
$$
cioè una riduzione dello $0{,}952\%$. Per raggiungere quella pressione occorre quindi immettere nel tratto
$$
0{,}00952 \cdot 500\,\mathrm{L} = 4{,}76\,\mathrm{L}
$$
di acqua, pur essendo il tratto già pieno.
:::

## Viscosità

:::definizione{#viscosita titolo="Legge di Newton e viscosità"}
Sia un fluido contenuto fra due lastre piane parallele distanti $s$, la inferiore ferma e la superiore in moto con velocità $V$ nel proprio piano. Le misure di laboratorio mostrano che il fluido aderisce a entrambe le lastre, che la velocità varia linearmente fra $0$ e $V$ e che la forza tangenziale necessaria a mantenere il moto è proporzionale a $V$ e all'area $A$ della lastra e inversamente proporzionale a $s$. Lo sforzo tangenziale che due strati contigui si scambiano vale perciò
$$
\tau = \mu\,\frac{dv}{dy} ,
$$
dove $y$ è la distanza dalla lastra ferma. La relazione si chiama **legge di Newton** e i fluidi che la soddisfano si dicono *newtoniani*; l'acqua e l'aria lo sono. Il coefficiente $\mu$ è la **viscosità dinamica**, misurata in $\mathrm{Pa\,s}$, e il rapporto
$$
\nu = \frac{\mu}{\rho}
$$
è la viscosità cinematica, misurata in $\mathrm{m^2/s}$. Per l'acqua a $20\,^\circ\mathrm{C}$ risulta $\mu = 1{,}0 \cdot 10^{-3}\,\mathrm{Pa\,s}$ e $\nu = 10^{-6}\,\mathrm{m^2/s}$, e i due valori diminuiscono al crescere della temperatura. La legge di Newton dà la forza resistente nei meati sottili, dove il gradiente di velocità è grande, mentre la viscosità cinematica compare nel numero di Reynolds, con cui si distinguono il moto laminare e il moto turbolento nell'argomento sulla cinematica dei fluidi.

::schema{solidi="0,-0.35 6,-0.35 6,0 0,0;0,1.2 6,1.2 6,1.55 0,1.55" acqua="0,0 6,0 6,1.2 0,1.2" frecce="0.7,1.2,2.7,1.2,V;0.7,0.9,2.2,0.9;0.7,0.6,1.7,0.6;0.7,0.3,1.2,0.3" tratteggi="0.7,0 2.7,1.2" quote="0 0,0 1.2,s,-0.5" etichette="4.4,1.9,lastra mobile;4.4,-0.65,lastra fissa;4.6,0.6,v(y)" riferimento=0 titolo="Distribuzione lineare della velocità fra due lastre piane: lo sforzo tangenziale vale $\tau = \mu\,\dfrac{V}{s}$ in ogni strato"}
:::

:::esempio{titolo="Forza su una lastra che scorre su un meato di olio"}
Una lastra di area $A = 0{,}60\,\mathrm{m^2}$ scorre alla velocità $V = 0{,}80\,\mathrm{m/s}$ su un meato di olio di spessore $s = 1{,}5\,\mathrm{mm}$ e viscosità $\mu = 0{,}20\,\mathrm{Pa\,s}$. Il gradiente di velocità è costante e vale $\dfrac{V}{s}$, quindi
$$
\tau = \mu\,\frac{V}{s} = 0{,}20 \cdot \frac{0{,}80}{0{,}0015} = 107\,\mathrm{Pa} ,
\qquad
F = \tau\,A = 107 \cdot 0{,}60 = 64{,}0\,\mathrm{N} .
$$
Lo stesso calcolo dà la coppia resistente nei cuscinetti e nei viscosimetri a cilindri coassiali.
:::

:::osservazione{#fluido-perfetto titolo="Fluido perfetto e fluido in quiete"}
Un fluido con $\mu = 0$ si dice **perfetto**, e in esso gli sforzi tangenziali sono nulli in ogni condizione. In un fluido reale in quiete il gradiente di velocità è nullo, quindi per la legge di Newton lo sforzo tangenziale è nullo in ogni punto. Perciò i risultati della statica dei fluidi valgono allo stesso modo per un fluido perfetto e per un fluido reale, e la viscosità distingue i due casi soltanto in moto, dove produce le perdite di carico studiate nell'argomento sulle perdite di carico distribuite e localizzate.
:::

## Tensione superficiale e capillarità

:::definizione{#tensione-superficiale titolo="Tensione superficiale"}
Nella superficie di separazione fra un liquido e un gas le molecole del liquido sono attratte dalle molecole vicine soltanto verso l'interno, perciò la superficie si comporta come una membrana in tensione. La forza che si trasmette attraverso una linea tracciata su tale superficie, per unità di lunghezza della linea, si chiama **tensione superficiale** $\sigma$ e si misura in $\mathrm{N/m}$. Per l'interfaccia acqua-aria a $20\,^\circ\mathrm{C}$ le misure danno $\sigma = 0{,}0728\,\mathrm{N/m}$. La tensione superficiale conta dove le dimensioni in gioco sono millimetriche, cioè nei tubi capillari e nelle gocce, mentre nei serbatoi e nelle condotte le forze di peso e di pressione sono di ordini di grandezza maggiori.
:::

:::osservazione{#capillarita titolo="Capillarità e legge di Jurin"}
Sia un tubo di vetro di diametro $D$ immerso in acqua. L'acqua bagna il vetro, quindi il menisco è concavo e la tensione superficiale agisce lungo la circonferenza di contatto, inclinata dell'angolo di contatto $\theta$ sulla verticale; la sua componente verticale vale $\sigma\,\pi D \cos\theta$ ed è diretta verso l'alto. Il liquido sale fino alla quota in cui il peso della colonna sollevata equilibra tale componente, cioè fino a quando
$$
\gamma\,\frac{\pi D^2}{4}\,h = \sigma\,\pi D \cos\theta ,
\qquad\text{da cui}\qquad
h = \frac{4\,\sigma\cos\theta}{\gamma\,D} .
$$
Per l'acqua su vetro pulito si assume $\theta = 0$. Con $D = 1{,}2\,\mathrm{mm}$ risulta $h = 24{,}7\,\mathrm{mm}$ e con $D = 10\,\mathrm{mm}$ si scende a $3{,}0\,\mathrm{mm}$, perciò i piezometri si costruiscono con diametro di almeno un centimetro. Il mercurio non bagna il vetro e ha $\theta \simeq 130^\circ$, quindi $\cos\theta$ è negativo e il livello nel tubo si abbassa.
:::

## La pressione in un fluido in quiete

:::definizione{#pressione titolo="Pressione"}
Sia un fluido in quiete e sia $\Delta A$ un elemento di superficie, appartenente a una parete oppure immaginato nell'interno del fluido, sul quale il fluido esercita la forza $\Delta \vec{F}$. In quiete gli sforzi tangenziali sono nulli, quindi $\Delta \vec{F}$ è perpendicolare a $\Delta A$ e diretta verso la superficie. Si chiama **pressione** nel punto il limite
$$
p = \lim_{\Delta A \to 0} \frac{\Delta F}{\Delta A} ,
$$
misurata in $\mathrm{Pa} = \mathrm{N/m^2}$. Nelle applicazioni si usano il $\mathrm{kPa}$, il $\mathrm{bar} = 10^5\,\mathrm{Pa}$ e l'altezza della colonna liquida equivalente $\dfrac{p}{\gamma}$, espressa in metri di acqua o in millimetri di mercurio; un metro di colonna d'acqua corrisponde a $9{,}81\,\mathrm{kPa}$.
:::

:::richiamo{titolo="Equazioni cardinali della statica"}
Un corpo inizialmente in quiete, soggetto a forze esterne di risultante $\vec{R}$ e momento risultante $\vec{M}_O$ rispetto a un polo $O$, resta in equilibrio se e solo se
$$
\begin{cases}
\vec{R} = \vec{0} \\[4pt]
\vec{M}_O = \vec{0}
\end{cases}
$$
Si rimanda all'argomento sulle equazioni cardinali della statica e le reazioni vincolari di Statica.
:::

::::teorema{#isotropia-della-pressione titolo="Isotropia della pressione"}
Sia un fluido in quiete. Allora in ogni punto la pressione ha lo stesso valore su elementi di superficie di orientamento qualsiasi.

Il teorema garantisce che la pressione è una funzione scalare del punto, $p = p(x, y, z)$, e che su una parete comunque inclinata agisce il valore della pressione calcolato per quel punto. Su tale conclusione si fonda il calcolo delle spinte sulle superfici piane e curve, trattato nell'argomento sulle spinte idrostatiche.

::schema{poligoni="0,0 2,0 0,1.5" forze="0 0.75,0.75,0,p_x;1 0,0,0.75,p_z;1 0.75,-0.55,-0.73,p_n" quote="0 0,2 0,dx,0.45;0 0,0 1.5,dz,-1.25" etichette="1.55,1.1,dl" riferimento=0 titolo="Cuneo elementare di spessore $b$: le spinte sulle tre facce"}

:::dimostrazione
L'idea è di scrivere l'equilibrio di un cuneo elementare di fluido e di far tendere a zero le sue dimensioni: il peso è un infinitesimo di ordine superiore rispetto alle forze di pressione, quindi resta solo l'uguaglianza fra le pressioni.

Sia un cuneo di fluido di spessore $b$, con i cateti $dx$ e $dz$ e l'ipotenusa di lunghezza $d\ell$, con il vertice nel punto considerato. Siano $p_x$ la pressione sulla faccia perpendicolare all'asse $x$, di area $b\,dz$, $p_z$ la pressione sulla faccia perpendicolare all'asse $z$, di area $b\,dx$, e $p_n$ la pressione sulla faccia inclinata, di area $b\,d\ell$. La forza sulla faccia inclinata è perpendicolare alla faccia e vale $p_n\,b\,d\ell$; le aree delle due facce ortogonali agli assi sono le proiezioni della faccia inclinata, perciò le componenti di tale forza sono $p_n\,b\,dz$ lungo $x$ e $p_n\,b\,dx$ lungo $z$, entrambe dirette verso l'interno del cuneo. Il peso del cuneo vale $\gamma\,b\,\dfrac{dx\,dz}{2}$ ed è diretto verso il basso.

L'equilibrio alla traslazione lungo $x$ dà
$$
p_x\,b\,dz - p_n\,b\,dz = 0 ,
$$
quindi $p_x = p_n$. L'equilibrio alla traslazione lungo $z$ dà
$$
p_z\,b\,dx - p_n\,b\,dx - \gamma\,b\,\frac{dx\,dz}{2} = 0 ,
$$
quindi $p_z = p_n + \gamma\,\dfrac{dz}{2}$. Al tendere a zero di $dz$ il secondo termine si annulla e resta $p_z = p_n$. Poiché l'inclinazione della faccia è stata scelta in modo arbitrario, le tre pressioni sono uguali per ogni orientamento, e il valore comune è la pressione nel punto.
:::
::::

## Equazione indefinita della statica e legge di Stevin

L'isotropia dice che in ogni punto la pressione è un solo numero; resta da trovare come questo numero varia da un punto all'altro.

:::richiamo{titolo="Gradiente di una funzione"}
Sia $p(x, y, z)$ una funzione derivabile in un insieme aperto e connesso. Il suo gradiente è il vettore
$$
\operatorname{grad} p = \left(\frac{\partial p}{\partial x},\; \frac{\partial p}{\partial y},\; \frac{\partial p}{\partial z}\right) ,
$$
e se il gradiente è nullo in ogni punto, allora la funzione è costante. Si rimanda all'argomento sulle derivate parziali e la differenziabilità di Analisi 2.
:::

::::teorema{#equazione-indefinita titolo="Equazione indefinita della statica dei fluidi"}
Sia un fluido in quiete di densità $\rho$, soggetto a forze di massa che per unità di massa valgono $\vec{f}$. Allora in ogni punto del fluido
$$
\operatorname{grad} p = \rho\,\vec{f} .
$$
Se le forze di massa sono il solo peso, con l'asse $z$ verticale rivolto verso l'alto risulta $\vec{f} = (0,\,0,\,-g)$, quindi
$$
\begin{cases}
\dfrac{\partial p}{\partial x} = 0 \\[6pt]
\dfrac{\partial p}{\partial y} = 0 \\[6pt]
\dfrac{\partial p}{\partial z} = -\gamma
\end{cases}
$$
L'equazione dice che la pressione cresce nella direzione delle forze di massa e che le superfici a pressione costante sono perpendicolari a $\vec{f}$; da essa si ricava la distribuzione delle pressioni in ogni caso di quiete, anche quando alle forze di peso si aggiungono le forze d'inerzia di un recipiente in movimento.

::schema{poligoni="0,0 1.2,0 1.2,1.2 0,1.2" forze="0.6 0,0,0.7,p;0.6 1.2,0,-0.7,p+∂p/∂z·dz" frecce="0.6,0.72,0.6,0.22,γ·dV" quote="0 0,1.2 0,dx,0.4;1.2 0,1.2 1.2,dz,0.4" riferimento=0 titolo="Equilibrio verticale di un elemento di fluido: le spinte sulle due facce orizzontali e il peso $\gamma\,dx\,dy\,dz$"}

:::dimostrazione
L'idea è di scrivere l'equilibrio alla traslazione di un parallelepipedo elementare di fluido, in cui le pressioni sulle facce opposte differiscono di un infinitesimo.

Sia un parallelepipedo di lati $dx$, $dy$, $dz$ paralleli agli assi e sia $p$ la pressione nel centro della faccia perpendicolare all'asse $x$ di ascissa minore. Sulla faccia opposta, distante $dx$, la pressione vale $p + \dfrac{\partial p}{\partial x}\,dx$ a meno di infinitesimi di ordine superiore. Le due forze di pressione sono dirette verso l'interno, perciò la loro somma lungo $x$ vale
$$
p\,dy\,dz - \left(p + \frac{\partial p}{\partial x}\,dx\right)dy\,dz = -\frac{\partial p}{\partial x}\,dx\,dy\,dz .
$$
Le forze di pressione sulle altre quattro facce sono perpendicolari all'asse $x$, quindi non hanno componente lungo $x$. La massa dell'elemento è $\rho\,dx\,dy\,dz$, perciò la componente lungo $x$ della forza di massa vale $\rho\,f_x\,dx\,dy\,dz$. L'equilibrio alla traslazione lungo $x$ dà
$$
\left(-\frac{\partial p}{\partial x} + \rho\,f_x\right)dx\,dy\,dz = 0 ,
$$
e poiché il volume è diverso da zero risulta $\dfrac{\partial p}{\partial x} = \rho\,f_x$. Lo stesso ragionamento lungo $y$ e lungo $z$ dà le altre due componenti, quindi $\operatorname{grad} p = \rho\,\vec{f}$.
:::
::::

::::teorema{#legge-di-stevin titolo="Legge di Stevin"}
Sia un liquido pesante e incomprimibile, di peso specifico $\gamma$ costante, in quiete in un recipiente, e sia $z$ la quota misurata da un piano orizzontale di riferimento su un asse verticale rivolto verso l'alto. Allora in tutti i punti della massa liquida
$$
z + \frac{p}{\gamma} = \text{costante} ,
$$
e la pressione in un punto che si trova alla profondità $h$ sotto una superficie libera su cui la pressione è nulla vale
$$
p = \gamma\,h .
$$
La **legge di Stevin** riduce il calcolo delle pressioni a una differenza di quote, perché il valore della costante si ricava da un punto in cui la pressione è nota. In un serbatoio aperto con $3{,}00\,\mathrm{m}$ di acqua la pressione sul fondo vale $9{,}81 \cdot 3{,}00 = 29{,}4\,\mathrm{kPa}$, qualunque sia la forma del recipiente.

:::dimostrazione
Dall'equazione indefinita con le sole forze di peso si ha $\dfrac{\partial p}{\partial x} = \dfrac{\partial p}{\partial y} = 0$, quindi la pressione dipende dalla sola $z$ e soddisfa
$$
\frac{dp}{dz} = -\gamma .
$$
Poiché $\gamma$ è costante, l'integrazione dà $p = -\gamma\,z + C$ con $C$ costante, cioè
$$
z + \frac{p}{\gamma} = \frac{C}{\gamma} ,
$$
che è lo stesso valore in tutti i punti della massa liquida. Sia ora $z_0$ la quota della superficie libera, su cui $p = 0$; sostituendo si ottiene $C = \gamma\,z_0$, perciò in un punto di quota $z$ risulta
$$
p = \gamma\,(z_0 - z) = \gamma\,h ,
$$
dove $h = z_0 - z$ è la profondità del punto sotto la superficie libera.
:::
::::

:::definizione{#carico-piezometrico titolo="Carico piezometrico"}
La somma
$$
h = z + \frac{p}{\gamma}
$$
si chiama **carico piezometrico** del punto. Il primo termine è la quota geodetica, misurata dal piano orizzontale di riferimento dichiarato nel problema, e il secondo è l'altezza piezometrica, cioè l'altezza della colonna di liquido che produce la pressione $p$; entrambi sono lunghezze, quindi il carico piezometrico si misura in metri. Per la legge di Stevin il carico piezometrico è lo stesso in tutti i punti di una massa liquida in quiete, perciò, noto il carico e nota la quota di un punto, la pressione segue da $p = \gamma\,(h - z)$. In un liquido in moto il carico piezometrico cambia da sezione a sezione, e la sua variazione misura la perdita di carico, come si vede nell'argomento sul teorema di Bernoulli.
:::

:::osservazione{#trasmissione-della-pressione titolo="Trasmissione della pressione"}
Se sulla superficie libera di un liquido in quiete agisce la pressione $p_0$, la legge di Stevin dà $p = p_0 + \gamma\,h$ in ogni punto alla profondità $h$. Un incremento di $p_0$ produce quindi lo stesso incremento della pressione in tutti i punti del liquido, ed è il contenuto del **principio di Pascal**, su cui si basa il torchio idraulico trattato nell'argomento sui fluidi di Fisica 1.
:::

:::attenzione
Il carico piezometrico è lo stesso in tutti i punti di *una sola* massa liquida continua e omogenea. Due serbatoi collegati da una condotta con la saracinesca chiusa contengono due masse separate, quindi i loro carichi piezometrici sono in generale diversi. Se il pelo libero del serbatoio di monte sta a quota $120{,}00\,\mathrm{m}$ e quello di valle a quota $94{,}00\,\mathrm{m}$, i due carichi valgono $120{,}00\,\mathrm{m}$ e $94{,}00\,\mathrm{m}$, perciò sulla saracinesca posta a quota $90{,}00\,\mathrm{m}$ la pressione è $9{,}81 \cdot 30 = 294\,\mathrm{kPa}$ sulla faccia di monte e $9{,}81 \cdot 4 = 39{,}2\,\mathrm{kPa}$ su quella di valle.
:::

## Piano dei carichi idrostatici

:::definizione{#piano-dei-carichi-idrostatici titolo="Piano dei carichi idrostatici"}
Sia $h$ il carico piezometrico di una massa liquida in quiete. Il piano orizzontale di quota $z = h$ si chiama **piano dei carichi idrostatici**, e su di esso la pressione relativa è nulla. Dalla legge di Stevin la pressione in un punto di quota $z$ vale
$$
p = \gamma\,(h - z) ,
$$
quindi la pressione relativa è positiva sotto il piano dei carichi, nulla su di esso e negativa sopra di esso, e il suo valore è $\gamma$ moltiplicato per la distanza verticale dal piano. Il piano dei carichi coincide con la superficie libera quando questa è a contatto con l'atmosfera; in un serbatoio chiuso in cui il gas sovrastante ha pressione relativa $p_0$ si trova invece a $\dfrac{p_0}{\gamma}$ sopra la superficie libera, e sotto di essa quando $p_0$ è negativa. Una sola quota riassume così lo stato di pressione di tutto il liquido, perciò nei problemi di idrostatica il piano dei carichi si traccia per primo.
:::

:::esempio{titolo="Serbatoio chiuso in pressione"}
Un serbatoio chiuso contiene acqua per $3{,}20\,\mathrm{m}$ di altezza e l'aria sovrastante ha pressione relativa $p_0 = 25\,\mathrm{kPa}$. L'altezza piezometrica dell'aria vale
$$
\frac{p_0}{\gamma} = \frac{25}{9{,}81} = 2{,}55\,\mathrm{m} ,
$$
quindi il piano dei carichi idrostatici sta $2{,}55\,\mathrm{m}$ sopra la superficie libera. La pressione sul fondo si ottiene moltiplicando per $\gamma$ la distanza del fondo da quel piano:
$$
p = 9{,}81 \cdot (3{,}20 + 2{,}55) = 56{,}4\,\mathrm{kPa} .
$$
Lo stesso valore si ritrova sommando la pressione dell'aria e il contributo della colonna d'acqua, $25 + 9{,}81 \cdot 3{,}20 = 56{,}4\,\mathrm{kPa}$.

::schema{acqua="0,0 5,0 5,3.2 0,3.2" solidi="-0.35,-0.35 5.35,-0.35 5.35,0 -0.35,0;-0.35,0 0,0 0,4 -0.35,4;5,0 5.35,0 5.35,4 5,4;-0.35,4 5.35,4 5.35,4.35 -0.35,4.35" pelo="0,5,3.2" pressioni="0 0,0 3.2,1.9,0.84,γ·(h−z)" tratteggi="-1.2,5.75 6.2,5.75" etichette="2.5,3.7,aria  p_0 = 25 kPa;4.4,6.05,piano dei carichi idrostatici" quote="5.35 3.2,5.35 5.75,2.55 m,0.75;0 3.2,0 0,3.20 m,-1.1" riferimento=0 titolo="Serbatoio chiuso: il piano dei carichi idrostatici sta $2{,}55\,\mathrm{m}$ sopra il pelo libero e il diagramma delle pressioni sulla parete è lineare"}
:::

:::osservazione{#diagramma-delle-pressioni titolo="Diagramma delle pressioni"}
Su una parete piana verticale la pressione varia linearmente con la quota, perciò il suo diagramma è un trapezio, e un triangolo quando la parete arriva fino al piano dei carichi. I segmenti si disegnano perpendicolari alla parete e proporzionali a $p$. Da questo diagramma si ricavano la spinta sulla parete e la posizione del centro di spinta nell'argomento sulle spinte idrostatiche.
:::

## Pressioni assolute e pressioni relative

:::definizione{#pressioni-assolute-e-relative titolo="Pressione assoluta e pressione relativa"}
La pressione misurata a partire dal vuoto si dice **assoluta**, quella misurata a partire dalla pressione atmosferica si dice **relativa**, perciò
$$
p_{\mathrm{rel}} = p_{\mathrm{ass}} - p_{\mathrm{atm}} .
$$
Al livello del mare si assume $p_{\mathrm{atm}} = 101{,}3\,\mathrm{kPa}$, pari a $10{,}33\,\mathrm{m}$ di colonna d'acqua e a circa $760\,\mathrm{mm}$ di mercurio. In Idraulica si lavora con le pressioni relative, perché l'atmosfera agisce anche sulla faccia esterna delle pareti e dei recipienti e quindi il suo contributo si elide nel calcolo delle spinte; le pressioni assolute servono dove conta il valore vero della pressione, come nella verifica della cavitazione e nel calcolo dell'altezza di aspirazione di una pompa.
:::

:::osservazione{#limite-di-depressione titolo="Pressioni relative negative"}
Una pressione relativa negativa, detta depressione, corrisponde a una pressione assoluta minore di quella atmosferica, e si trova nei punti che stanno sopra il piano dei carichi idrostatici. La pressione assoluta di un liquido ha come limite inferiore la tensione di vapore, che per l'acqua a $20\,^\circ\mathrm{C}$ vale $p_v = 2{,}34\,\mathrm{kPa}$ in valore assoluto; la minima pressione relativa ammissibile è quindi
$$
2{,}34 - 101{,}3 = -98{,}96\,\mathrm{kPa} ,
\qquad\text{cioè}\qquad
-\frac{98{,}96}{9{,}81} = -10{,}09\,\mathrm{m}
$$
di colonna d'acqua. Perciò una colonna d'acqua si solleva per aspirazione al massimo di circa dieci metri. Nelle verifiche delle condotte si resta ben al di sotto di questo limite, perché avvicinandosi alla tensione di vapore il liquido forma bolle di vapore e la corrente cavita, come si vede negli argomenti sul teorema di Bernoulli e sulle lunghe condotte.
:::

## Misura della pressione

:::osservazione{#piezometro titolo="Piezometro"}
Il piezometro è un tubo di vetro aperto all'atmosfera, innestato nella parete di un recipiente o di una condotta. Il liquido sale nel tubo fino alla quota del piano dei carichi idrostatici, perché sul menisco la pressione relativa è nulla; la lettura dà quindi direttamente il carico piezometrico del punto di presa, e la pressione segue da $p = \gamma\,(h - z)$. Il piezometro è adatto a pressioni modeste, perché già $100\,\mathrm{kPa}$ richiedono una colonna d'acqua di $10{,}2\,\mathrm{m}$.
:::

:::osservazione{#manometro-semplice titolo="Manometro semplice a liquido"}
Per pressioni maggiori si usa un tubo a U collegato alla presa e contenente un liquido manometrico più pesante, di solito mercurio, con il secondo ramo aperto all'atmosfera. Il calcolo si esegue percorrendo il tubo da un menisco all'altro con due regole: all'interno dello stesso liquido in quiete la pressione aumenta di $\gamma\,\Delta z$ scendendo di $\Delta z$ e diminuisce di $\gamma\,\Delta z$ salendo; sul menisco di separazione la pressione è la stessa nei due liquidi, perché sono a contatto. Detta $A$ la presa, $z_1$ la quota del menisco di separazione e $z_2$ la quota del pelo libero del mercurio nel ramo aperto, si ottiene
$$
p_A + \gamma\,(z_A - z_1) = \gamma_{\mathrm{Hg}}\,(z_2 - z_1) .
$$
Poiché $\gamma_{\mathrm{Hg}}$ è $13{,}6$ volte $\gamma$, un dislivello di mercurio di $0{,}50\,\mathrm{m}$ corrisponde a $6{,}80\,\mathrm{m}$ di colonna d'acqua, e il tubo resta di dimensioni maneggevoli.

::schema{nodi="A,0.6,0,-;B,6.6,0,-" condotte="A-B,0.5" acqua="1.4,0 1.6,0 1.6,3.4 1.4,3.4;4.4,0 4.6,0 4.6,-0.8 4.4,-0.8" poligoni="4.4,-0.8 4.4,-1.2 5.6,-1.2 5.6,0.5 5.4,0.5 5.4,-1.0 4.6,-1.0 4.6,-0.8" pelo="1.4,1.6,3.4;5.4,5.6,0.5" etichette="2.6,0.6,condotta;0.95,2.9,piezometro;5.0,-1.75,mercurio" quote="1.5 0,1.5 3.4,3.40 m,-0.7;5.6 -0.8,5.6 0.5,z_2 − z_1,0.8" riferimento=0 titolo="Piezometro e manometro semplice a mercurio innestati sulla stessa condotta"}
:::

::::teorema{#manometro-differenziale titolo="Manometro differenziale"}
Siano $A$ e $B$ due punti di un liquido di peso specifico $\gamma$, collegati ai due rami di un tubo a U che contiene un liquido manometrico di densità relativa $\delta$. Siano $z_1$ la quota del menisco dal lato di $A$ e $z_2$ quella del menisco dal lato di $B$, e sia $\Delta = z_2 - z_1$. Allora la differenza dei carichi piezometrici dei due punti vale
$$
h_A - h_B = \Delta\,(\delta - 1) .
$$
Il risultato non dipende dalle quote di $A$ e di $B$, perciò il manometro differenziale misura la differenza dei carichi piezometrici anche fra punti posti a quote diverse, ed è lo strumento con cui si misurano le perdite di carico fra due sezioni di una condotta. Con il mercurio, $\delta = 13{,}6$, un dislivello di $1\,\mathrm{cm}$ corrisponde a $12{,}6\,\mathrm{cm}$ di differenza di carico; con un liquido più leggero dell'acqua, montato in un tubo a U rovescio sopra le due prese, risulta $\delta < 1$ e la differenza di carico ha il segno opposto a $\Delta$.

::schema{nodi="A,0,2.2,-;B,6,2.2,-" condotte="A-B,0.45" acqua="0.9,2.2 1.1,2.2 1.1,0.9 0.9,0.9;4.9,2.2 5.1,2.2 5.1,1.3 4.9,1.3" poligoni="0.9,0.9 0.9,0.4 5.1,0.4 5.1,1.3 4.9,1.3 4.9,0.6 1.1,0.6 1.1,0.9" tratteggi="1.1,0.9 2.7,0.9;4.9,1.3 2.3,1.3" punti="1,2.2,A;5,2.2,B" etichette="3.0,0.05,liquido manometrico δ;0.45,1.55,acqua;5.55,1.55,acqua" quote="2.5 0.9,2.5 1.3,Δ,0.4" riferimento=0 titolo="Manometro differenziale fra i punti $A$ e $B$: il dislivello $\Delta$ dei menischi dà $h_A - h_B = \Delta\,(\delta - 1)$"}

:::dimostrazione
L'idea è di percorrere il tubo da $A$ a $B$ applicando la legge di Stevin in ciascuno dei tre tratti di liquido.

Nel tratto di acqua che scende da $A$ al primo menisco la legge di Stevin dà
$$
p_1 = p_A + \gamma\,(z_A - z_1) .
$$
Nel liquido manometrico, che ha peso specifico $\delta\gamma$, si passa dal primo al secondo menisco:
$$
p_2 = p_1 + \delta\gamma\,(z_1 - z_2) .
$$
Nel tratto di acqua che risale dal secondo menisco fino a $B$ si ottiene
$$
p_B = p_2 + \gamma\,(z_2 - z_B) .
$$
Sostituendo le prime due nella terza e dividendo per $\gamma$ risulta
$$
\frac{p_B}{\gamma} = \frac{p_A}{\gamma} + z_A - z_1 + \delta\,(z_1 - z_2) + z_2 - z_B ,
$$
quindi
$$
h_A - h_B = \left(z_A + \frac{p_A}{\gamma}\right) - \left(z_B + \frac{p_B}{\gamma}\right) = (z_2 - z_1)\,(\delta - 1) = \Delta\,(\delta - 1) .
$$
Le quote $z_A$ e $z_B$ si elidono, perciò il risultato dipende dal solo dislivello dei menischi.
:::
::::

:::osservazione{#manometro-metallico titolo="Manometro metallico"}
Il manometro metallico, o manometro di Bourdon, misura la deformazione di un tubo metallico a sezione ellittica avvolto a spirale: la pressione interna tende a raddrizzare il tubo e lo spostamento dell'estremità libera muove un indice su una scala graduata. Lo strumento si tara in laboratorio con un manometro a liquido e indica la pressione relativa nel punto in cui è installato, perciò la lettura si riporta al punto di interesse aggiungendo il termine $\gamma\,\Delta z$ dovuto al dislivello.
:::

:::osservazione{#barometro titolo="Barometro di Torricelli"}
Un tubo chiuso a un estremo, riempito di mercurio e capovolto in una bacinella, lascia il mercurio scendere fino a una quota di equilibrio; nello spazio chiuso che si forma sopra il menisco resta soltanto vapore di mercurio, a pressione trascurabile. La pressione assoluta sul pelo libero della bacinella è quella atmosferica, e la legge di Stevin applicata al mercurio dà
$$
p_{\mathrm{atm}} = \gamma_{\mathrm{Hg}}\,h = 133{,}4 \cdot 0{,}760 = 101{,}4\,\mathrm{kPa} ,
$$
dove $h$ è il dislivello fra il menisco nel tubo e il pelo libero nella bacinella. La misura di $p_{\mathrm{atm}}$ in millimetri di mercurio nasce da questo strumento.
:::

## Liquidi sovrapposti non miscibili

:::osservazione{#fluidi-sovrapposti titolo="Liquidi sovrapposti non miscibili"}
Due liquidi non miscibili in quiete si dispongono con il più pesante in basso e con la superficie di separazione orizzontale, perché tale superficie è isobarica e in un fluido pesante in quiete le superfici isobariche sono orizzontali. La legge di Stevin si applica a ciascun liquido con il proprio peso specifico, e sull'interfaccia la pressione calcolata nei due liquidi è la stessa. Con uno strato di spessore $s_1$ e peso specifico $\gamma_1$ sopra un liquido di peso specifico $\gamma_2$, la pressione a profondità $h_2$ sotto l'interfaccia vale
$$
p = \gamma_1\,s_1 + \gamma_2\,h_2 .
$$
Ciascun liquido ha il proprio piano dei carichi idrostatici: quello del liquido inferiore sta a $\dfrac{\gamma_1 s_1}{\gamma_2}$ sopra l'interfaccia, cioè più in basso della superficie libera quando il liquido superiore è il più leggero. La quantità $\dfrac{\gamma_1 s_1}{\gamma_2}$ è l'*altezza equivalente*, ossia lo spessore di liquido inferiore che produrrebbe la stessa pressione dello strato superiore.
:::

:::esempio{titolo="Olio sopra acqua in un serbatoio aperto"}
Un serbatoio aperto contiene uno strato di olio di densità relativa $0{,}82$ e spessore $1{,}80\,\mathrm{m}$ sopra uno strato di acqua di $2{,}50\,\mathrm{m}$. Sull'interfaccia la pressione vale
$$
p_i = 0{,}82 \cdot 9{,}81 \cdot 1{,}80 = 14{,}5\,\mathrm{kPa} ,
$$
e sul fondo
$$
p_f = 14{,}5 + 9{,}81 \cdot 2{,}50 = 39{,}0\,\mathrm{kPa} .
$$
L'altezza equivalente dello strato di olio è $0{,}82 \cdot 1{,}80 = 1{,}476\,\mathrm{m}$ di acqua, perciò il piano dei carichi idrostatici dell'acqua sta a $2{,}50 + 1{,}476 = 3{,}976\,\mathrm{m}$ sopra il fondo, cioè $0{,}32\,\mathrm{m}$ sotto la superficie libera dell'olio. Un piezometro collegato al fondo vede salire l'acqua fino a quella quota.

::schema{acqua="0,0 4,0 4,2.5 0,2.5" poligoni="0,2.5 4,2.5 4,4.3 0,4.3" solidi="-0.35,-0.35 4.35,-0.35 4.35,0 -0.35,0;-0.35,0 0,0 0,4.6 -0.35,4.6;4,0 4.35,0 4.35,4.6 4,4.6" linee="0,2.5 4,2.5" pelo="0,4,4.3" tratteggi="-0.9,3.976 4.9,3.976" etichette="2.0,3.4,olio δ = 0.82;2.0,1.25,acqua;2.6,4.85,piano dei carichi dell'acqua" quote="0 4.3,0 2.5,1.80 m,-0.8;0 2.5,0 0,2.50 m,-0.8" riferimento=0 titolo="Olio sopra acqua: il piano dei carichi idrostatici dell'acqua sta sotto la superficie libera dell'olio"}
:::

## Liquidi in quiete relativa

Un liquido può essere in quiete rispetto al recipiente che lo contiene mentre il recipiente si muove. Alle forze di peso si aggiungono allora le forze d'inerzia, e l'equazione indefinita si applica senza modifiche.

::::teorema{#traslazione-rigida titolo="Liquido in traslazione rigida"}
Sia un recipiente che trasla con accelerazione costante $\vec{a} = (a,\,0,\,0)$ orizzontale, e sia il liquido contenuto in quiete rispetto al recipiente. Allora le superfici a pressione costante sono piani paralleli inclinati di
$$
\tan\theta = \frac{a}{g}
$$
sull'orizzontale, con il livello più basso dalla parte verso cui il recipiente accelera, e la pressione vale
$$
p = p_0 - \rho\,a\,(x - x_0) - \gamma\,(z - z_0) ,
$$
dove $p_0$ è la pressione nel punto $(x_0,\,z_0)$. La superficie libera è uno di quei piani, perciò in un'autobotte che accelera il pelo libero si abbassa verso la parete anteriore e si alza verso quella posteriore, con un dislivello pari a $\tan\theta$ moltiplicato per la lunghezza della cisterna.

::schema{acqua="0,0 4,0 4,0.8 0,1.6" solidi="-0.3,-0.3 4.3,-0.3 4.3,0 -0.3,0;-0.3,0 0,0 0,2 -0.3,2;4,0 4.3,0 4.3,2 4,2" linee="0,1.6 4,0.8" tratteggi="0,1.2 4,1.2" frecce="1.2,2.5,2.6,2.5,a" etichette="3.2,1.03,θ;1.6,1.65,pelo libero" quote="4 0.8,4 1.6,Δz,0.95" riferimento=0 titolo="Cisterna in traslazione rigida: il pelo libero è un piano inclinato di $\tan\theta = \dfrac{a}{g}$ e il tratteggio indica il livello di quiete"}

:::dimostrazione
L'idea è di scrivere l'equilibrio nel riferimento solidale con il recipiente, dove il liquido è in quiete e alle forze di massa si aggiunge la forza d'inerzia.

Per l'osservatore solidale con il recipiente il liquido è in quiete, e la forza di massa per unità di massa è la somma del peso e della forza d'inerzia, cioè $\vec{f} = (-a,\,0,\,-g)$. L'equazione indefinita della statica dà allora
$$
\begin{cases}
\dfrac{\partial p}{\partial x} = -\rho\,a \\[6pt]
\dfrac{\partial p}{\partial z} = -\rho\,g
\end{cases}
$$
Le due derivate sono costanti, quindi l'integrazione dà
$$
p = p_0 - \rho\,a\,(x - x_0) - \rho\,g\,(z - z_0) .
$$
Su una superficie a pressione costante si ha $dp = 0$, perciò $a\,dx + g\,dz = 0$, cioè
$$
\frac{dz}{dx} = -\frac{a}{g} .
$$
Il rapporto è costante, quindi le superfici isobariche sono piani, e la loro pendenza in valore assoluto è $\dfrac{a}{g}$. Il segno meno dice che la quota diminuisce al crescere di $x$, cioè nel verso dell'accelerazione.
:::
::::

:::osservazione{#rotazione-rigida titolo="Liquido in rotazione rigida"}
Sia un recipiente cilindrico di raggio $R$, con asse verticale, che ruota con velocità angolare $\omega$ costante, e sia il liquido in rotazione rigida con esso. Nel riferimento rotante la forza d'inerzia per unità di massa è $\omega^2 r$, diretta verso l'esterno, quindi l'equazione indefinita dà $\dfrac{\partial p}{\partial r} = \rho\,\omega^2 r$ e $\dfrac{\partial p}{\partial z} = -\gamma$, e l'integrazione porta a
$$
p = p_0 + \rho\,\frac{\omega^2 r^2}{2} - \gamma\,(z - z_0) .
$$
Le superfici a pressione costante sono allora i paraboloidi di rotazione
$$
z = z_v + \frac{\omega^2 r^2}{2 g} ,
$$
dove $z_v$ è la quota del vertice sull'asse. La superficie libera è uno di questi paraboloidi, perciò il livello al bordo supera quello sull'asse di $\dfrac{\omega^2 R^2}{2 g}$. Il volume del liquido resta quello di partenza e il valore medio di $r^2$ sul cerchio di raggio $R$ vale
$$
\frac{1}{\pi R^2}\int_0^R r^2\,2\pi r\,dr = \frac{R^2}{2} ,
$$
quindi il livello medio della superficie libera coincide con quello di quiete; ne segue che il vertice si abbassa di $\dfrac{\omega^2 R^2}{4 g}$ rispetto al livello di quiete e il bordo si alza di altrettanto.

::schema{acqua="-1,0 1,0 1,0.8 0.8,0.62 0.6,0.48 0.4,0.38 0.2,0.32 0,0.3 -0.2,0.32 -0.4,0.38 -0.6,0.48 -0.8,0.62 -1,0.8" solidi="-1.12,-0.12 1.12,-0.12 1.12,0 -1.12,0;-1.12,0 -1,0 -1,1.05 -1.12,1.05;1,0 1.12,0 1.12,1.05 1,1.05" tratteggi="-1.3,0.55 1.3,0.55" frecce="0,1.75,0.55,1.75,ω" etichette="0,1.3,livello di quiete" quote="1.3 0.3,1.3 0.8,Δz,0.3" riferimento=0 titolo="Rotazione rigida: la superficie libera è un paraboloide, il bordo si alza di $\dfrac{\omega^2 R^2}{4g}$ e il vertice si abbassa di altrettanto"}
:::
