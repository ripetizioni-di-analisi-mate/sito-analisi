---
titolo: Lavoro ed energia
sommario: Come si calcola il lavoro di una forza costante o variabile, che cosa misura la potenza, come il teorema dell'energia cinetica e la conservazione dell'energia meccanica danno le velocità senza risolvere le equazioni del moto, e come una curva di energia potenziale descrive moto ed equilibrio.
---

## Lavoro di una forza costante

In tutto l'argomento il corpo è trattato come un punto materiale e il sistema di riferimento è inerziale.

:::richiamo{titolo="Prodotto scalare"}
Per due vettori $\vec{a}$ e $\vec{b}$ che formano l'angolo $\theta \in [0, \pi]$ vale $\vec{a} \cdot \vec{b} = a\,b\cos\theta = a_x b_x + a_y b_y + a_z b_z$. Si rimanda all'argomento sui vettori di Algebra lineare e all'argomento sulle grandezze fisiche e i vettori.
:::

:::definizione{#lavoro-forza-costante titolo="Lavoro di una forza costante"}
Si consideri un punto materiale che compie uno spostamento rettilineo $\vec{s}$ mentre su di esso agisce una forza costante $\vec{F}$. Il **lavoro** compiuto dalla forza è lo scalare
$$
L = \vec{F} \cdot \vec{s} = F\, s \cos\theta ,
$$
dove $\theta$ è l'angolo tra $\vec{F}$ e $\vec{s}$. Nel Sistema Internazionale il lavoro si misura in **joule**, $1\,\mathrm{J} = 1\,\mathrm{N \cdot m}$. In componenti cartesiane $L = F_x\,\Delta x + F_y\,\Delta y + F_z\,\Delta z$, dove $\Delta x$, $\Delta y$, $\Delta z$ sono le componenti dello spostamento.

Il lavoro dipende solo dalla componente $F\cos\theta$ della forza parallela allo spostamento, perché la componente perpendicolare ha prodotto scalare nullo con $\vec{s}$. Per esempio, un carrello tirato per $10\,\mathrm{m}$ su un piano orizzontale con una forza di $50\,\mathrm{N}$ inclinata di $30^\circ$ riceve dalla forza il lavoro $L = 50 \cdot 10 \cdot \cos 30^\circ\,\mathrm{J} \approx 433\,\mathrm{J}$.

::grafico{vettori="0,0,6,0,s;0,0,3.46,2,F" segmenti="3.46,0,3.46,2" etichette="0.75,0.18,θ;1.1,-0.45,F cos θ" xmin=-0.6 xmax=6.6 ymin=-0.9 ymax=2.6 uguale=1 titolo="Una forza costante $\vec{F}$ inclinata di $\theta$ sullo spostamento $\vec{s}$ compie il lavoro $F s \cos\theta$, che dipende solo dalla proiezione di $\vec{F}$ sulla direzione di $\vec{s}$"}

:::

:::osservazione{#segno-del-lavoro titolo="Segno del lavoro"}
Il segno del lavoro è il segno di $\cos\theta$.

- Se $0 \leq \theta < \dfrac{\pi}{2}$, il lavoro è positivo e la forza si dice **motrice**; per esempio il peso compie lavoro positivo su un corpo che scende.
- Se $\theta = \dfrac{\pi}{2}$, il lavoro è nullo; la reazione normale di un piano su cui il corpo scivola e la forza centripeta nel moto circolare uniforme sono perpendicolari allo spostamento e *non* compiono lavoro.
- Se $\dfrac{\pi}{2} < \theta \leq \pi$, il lavoro è negativo e la forza si dice **resistente**; l'attrito dinamico, opposto allo spostamento, ha $\theta = \pi$ e compie il lavoro $L = -f\,s$.

Una forza può quindi agire su un corpo in movimento senza compiere lavoro, quando è perpendicolare allo spostamento.
:::

:::teorema{#lavoro-della-risultante titolo="Lavoro della risultante"}
Se sul punto materiale agiscono le forze costanti $\vec{F}_1, \dots, \vec{F}_n$, con risultante $\vec{R} = \vec{F}_1 + \dots + \vec{F}_n$, il lavoro totale durante lo spostamento $\vec{s}$ è
$$
L_{\text{tot}} = L_1 + \dots + L_n = \vec{R} \cdot \vec{s} .
$$
L'uguaglianza segue dalla proprietà distributiva del prodotto scalare rispetto alla somma. Il lavoro totale si calcola quindi in due modi equivalenti, sommando i lavori delle singole forze oppure calcolando il lavoro della risultante; il primo è più comodo quando si chiede anche il contributo di ciascuna forza, e il lavoro totale è la grandezza che compare nel teorema dell'energia cinetica.
:::

## Lavoro di una forza variabile

:::richiamo{titolo="Integrale definito"}
Per una funzione $f$ continua su $[a, b]$, l'integrale $\displaystyle\int_a^b f(x)\,dx$ è il limite delle somme $\sum_i f(x_i)\,\Delta x_i$ quando l'ampiezza massima dei sottointervalli tende a zero, e misura l'area con segno compresa tra il grafico di $f$ e l'asse $x$. Si rimanda all'argomento sugli integrali di Analisi 1.
:::

:::definizione{#lavoro-forza-variabile titolo="Lavoro di una forza variabile"}
Si consideri un punto materiale che si muove lungo l'asse $x$ da $x_A$ a $x_B$, soggetto a una forza la cui componente $F_x(x)$ dipende dalla posizione. Si divide l'intervallo in tratti di ampiezza $\Delta x_i$ così piccoli che su ciascuno la forza si possa considerare costante; il lavoro sul tratto $i$-esimo è circa $F_x(x_i)\,\Delta x_i$, e la somma di questi contributi tende all'integrale quando i tratti si restringono. Si pone perciò
$$
L = \int_{x_A}^{x_B} F_x(x)\, dx .
$$
Il lavoro è l'**area con segno** sotto il grafico di $F_x$ in funzione di $x$, e per una forza costante la definizione restituisce $L = F_x\,(x_B - x_A)$. Per esempio, con $F_x(x) = 4 + 2x$, dove $x$ è in metri e $F_x$ in newton, il lavoro tra $x = 0$ e $x = 3\,\mathrm{m}$ è $\left[ 4x + x^2 \right]_0^3 = 21\,\mathrm{J}$.

::grafico{f="4+2*x" area="4+2*x;0;0;3" segmenti="3,0,3,10" xmin=-0.6 xmax=4.2 ymin=-1 ymax=12 nomi="x,F" titolo="Il lavoro di $F_x(x) = 4 + 2x$ tra $x = 0$ e $x = 3$ è l'area del trapezio colorato, $21\,\mathrm{J}$"}

:::

:::osservazione{#lavoro-lungo-una-curva titolo="Lavoro lungo una traiettoria curva"}
Se il punto descrive una traiettoria curva $\gamma$ da $A$ a $B$ e la forza dipende dalla posizione, il lavoro è
$$
L = \int_\gamma \vec{F} \cdot d\vec{r} ,
$$
dove $d\vec{r}$ è lo spostamento infinitesimo lungo la traiettoria. La definizione ripete il ragionamento precedente, sommando i contributi $\vec{F} \cdot \Delta\vec{r}$ dei piccoli tratti in cui si divide la curva. È un integrale di linea, per il quale si rimanda all'argomento sulle curve e gli integrali di linea di Analisi 2. Nei problemi di meccanica del punto la traiettoria è spesso rettilinea oppure la forza è conservativa, e il calcolo si riduce a un integrale in una variabile o a una differenza di energie potenziali.
:::

::::teorema{#lavoro-forza-elastica titolo="Lavoro della forza elastica"}
Si consideri una molla ideale di costante elastica $k$, con un estremo fisso e l'altro collegato a un corpo che si muove lungo l'asse $x$, con l'origine nella posizione di riposo; per la legge di Hooke la forza elastica è $F_x = -kx$. Quando la deformazione passa da $x_A$ a $x_B$ la forza elastica compie il lavoro
$$
L = \frac{1}{2} k x_A^2 - \frac{1}{2} k x_B^2 .
$$
Il lavoro è negativo quando la deformazione aumenta in valore assoluto, perché la forza si oppone allo spostamento, e positivo quando la molla torna verso la lunghezza di riposo. Per una molla con $k = 200\,\mathrm{N/m}$ che torna a riposo da un allungamento di $0{,}10\,\mathrm{m}$ si ha $L = \dfrac{1}{2} \cdot 200 \cdot 0{,}10^2\,\mathrm{J} = 1{,}0\,\mathrm{J}$.

::grafico{f="-2*x" area="0;-2*x;0;2" segmenti="2,0,2,-4" xmin=-2.6 xmax=2.8 ymin=-5 ymax=5 nomi="x,F" etichette="0.9,-0.9,area" titolo="La forza elastica $F_x = -kx$: quando la molla si allunga da $0$ a $x$ il lavoro è l'area con segno del triangolo, $-\dfrac{1}{2} k x^2$"}

:::dimostrazione
Per la definizione di lavoro di una forza variabile,
$$
L = \int_{x_A}^{x_B} (-kx)\,dx = \left[ -\frac{1}{2} k x^2 \right]_{x_A}^{x_B} = \frac{1}{2} k x_A^2 - \frac{1}{2} k x_B^2 .
$$
Il risultato dipende solo dalle deformazioni iniziale e finale.
:::
::::

## Potenza

:::definizione{#potenza titolo="Potenza"}
Se una forza compie il lavoro $L$ nell'intervallo di tempo $\Delta t$, la **potenza media** è $P_m = \dfrac{L}{\Delta t}$; la **potenza istantanea** è la derivata del lavoro rispetto al tempo,
$$
P = \frac{dL}{dt} .
$$
L'unità di misura è il watt, $1\,\mathrm{W} = 1\,\mathrm{J/s}$. La potenza misura la rapidità con cui una forza compie lavoro; due motori che sollevano lo stesso carico alla stessa quota compiono lo stesso lavoro, e il più potente impiega un tempo minore. Dalla definizione segue che il prodotto di una potenza per un tempo è un'energia, e per questo l'energia elettrica si misura anche in chilowattora, $1\,\mathrm{kWh} = 1000\,\mathrm{W} \cdot 3600\,\mathrm{s} = 3{,}6 \cdot 10^6\,\mathrm{J}$.
:::

:::teorema{#potenza-e-velocita titolo="Potenza e velocità"}
Se una forza $\vec{F}$ agisce su un punto materiale che ha velocità $\vec{v}$, la potenza istantanea della forza è
$$
P = \vec{F} \cdot \vec{v} = F\,v\cos\theta .
$$
Infatti nell'intervallo $dt$ lo spostamento è $d\vec{r} = \vec{v}\,dt$, quindi il lavoro è $dL = \vec{F} \cdot \vec{v}\,dt$, e dividendo per $dt$ si ottiene la formula. Per un veicolo che procede a velocità costante la forza motrice equilibra le forze resistenti, perciò la potenza richiesta al motore è il prodotto della forza resistente per la velocità. Un'automobile che viaggia a $25\,\mathrm{m/s}$ contro una forza resistente di $600\,\mathrm{N}$ richiede $P = 600 \cdot 25\,\mathrm{W} = 15\,\mathrm{kW}$.
:::

:::definizione{#rendimento titolo="Rendimento di un motore"}
Un motore assorbe la potenza $P_{\text{ass}}$ (elettrica o chimica) e ne fornisce solo una parte $P_{\text{u}}$ come lavoro utile, perché il resto si disperde in attriti e calore. Il **rendimento** è il rapporto
$$
\eta = \frac{P_{\text{u}}}{P_{\text{ass}}} , \qquad 0 < \eta < 1 .
$$
Un motore con $\eta = 0{,}80$ che deve fornire $4{,}0\,\mathrm{kW}$ assorbe $\dfrac{4{,}0}{0{,}80}\,\mathrm{kW} = 5{,}0\,\mathrm{kW}$. Il rendimento delle macchine termiche ha la stessa forma, e si rimanda all'argomento sul secondo principio della termodinamica.
:::

## Energia cinetica e teorema dell'energia cinetica

:::definizione{#energia-cinetica titolo="Energia cinetica"}
L'**energia cinetica** di un punto materiale di massa $m$ che ha velocità $\vec{v}$ è
$$
K = \frac{1}{2} m v^2 .
$$
È uno scalare positivo o nullo, che dipende dal modulo della velocità e non dalla sua direzione, e si misura in joule, poiché $1\,\mathrm{kg \cdot m^2/s^2} = 1\,\mathrm{N \cdot m}$. L'energia cinetica è proporzionale al quadrato della velocità, perciò raddoppiando la velocità quadruplica. Un'automobile di $1000\,\mathrm{kg}$ a $20\,\mathrm{m/s}$ ha $K = \dfrac{1}{2} \cdot 1000 \cdot 20^2\,\mathrm{J} = 2{,}0 \cdot 10^5\,\mathrm{J}$.
:::

::::teorema{#teorema-energia-cinetica titolo="Teorema dell'energia cinetica"}
Si consideri un punto materiale di massa $m$ che si muove da $A$ a $B$ in un sistema di riferimento inerziale. Il lavoro totale $L_{\text{tot}}$ compiuto da tutte le forze che agiscono su di esso è uguale alla variazione della sua energia cinetica:
$$
L_{\text{tot}} = K_B - K_A = \frac{1}{2} m v_B^2 - \frac{1}{2} m v_A^2 .
$$
Il teorema collega le forze alla velocità senza passare per l'accelerazione e per il tempo, e si usa quando i dati e le incognite sono velocità e spostamenti. Un lavoro totale positivo fa aumentare la velocità, un lavoro totale negativo la fa diminuire. Il teorema vale anche con forze variabili e traiettorie curve, dove il secondo principio della dinamica porterebbe a un'equazione differenziale.

:::dimostrazione
Sia $\vec{R}$ la risultante delle forze. Nell'intervallo di tempo $dt$ il punto compie lo spostamento $d\vec{r} = \vec{v}\,dt$, e per il **secondo principio della dinamica** $\vec{R} = m\,\dfrac{d\vec{v}}{dt}$. Quindi
$$
\vec{R} \cdot d\vec{r} = m\,\frac{d\vec{v}}{dt} \cdot \vec{v}\,dt .
$$
Poiché $v^2 = \vec{v} \cdot \vec{v}$, la regola di derivazione del prodotto scalare dà $\dfrac{d}{dt}\left( v^2 \right) = 2\,\vec{v} \cdot \dfrac{d\vec{v}}{dt}$, perciò
$$
m\,\frac{d\vec{v}}{dt} \cdot \vec{v} = \frac{d}{dt}\left( \frac{1}{2} m v^2 \right) .
$$
Integrando tra l'istante $t_A$ in cui il punto è in $A$ e l'istante $t_B$ in cui è in $B$ si ottiene
$$
L_{\text{tot}} = \int_{t_A}^{t_B} \frac{d}{dt}\left( \frac{1}{2} m v^2 \right) dt = \frac{1}{2} m v_B^2 - \frac{1}{2} m v_A^2 ,
$$
dove l'ultima uguaglianza segue dalla formula fondamentale del calcolo integrale.
:::
::::

:::richiamo{titolo="Secondo principio della dinamica"}
In un sistema di riferimento inerziale la risultante $\vec{R}$ delle forze che agiscono su un punto materiale di massa $m$ soddisfa $\vec{R} = m\vec{a} = m\,\dfrac{d\vec{v}}{dt}$. Si rimanda all'argomento sulle leggi di Newton e le forze.
:::

:::esempio{titolo="Spazio di frenata"}
Un'automobile che viaggia alla velocità $v_0$ su una strada orizzontale frena bloccando le ruote, e il coefficiente di attrito dinamico tra pneumatici e asfalto è $\mu_d$. Sull'automobile agiscono il peso, la reazione normale $N = mg$ e l'attrito $f = \mu_d\,m g$, opposto allo spostamento. Il peso e la normale sono perpendicolari allo spostamento, quindi il lavoro totale nello spazio di frenata $d$ è quello dell'attrito, $-\mu_d\,m g\,d$. Il **teorema dell'energia cinetica**, con velocità finale nulla, dà
$$
-\mu_d\, m g\, d = 0 - \frac{1}{2} m v_0^2
\quad\Longrightarrow\quad
d = \frac{v_0^2}{2 \mu_d\, g} .
$$
La massa si semplifica, e lo spazio di frenata è proporzionale al quadrato della velocità iniziale. Con $v_0 = 20\,\mathrm{m/s}$ e $\mu_d = 0{,}50$ si ottiene $d = \dfrac{400}{2 \cdot 0{,}50 \cdot 9{,}81}\,\mathrm{m} \approx 41\,\mathrm{m}$.
:::

## Forze conservative

:::definizione{#forza-conservativa titolo="Forza conservativa"}
Una forza che dipende solo dalla posizione si dice **conservativa** se il lavoro che compie quando il punto materiale si sposta da $A$ a $B$ dipende solo dalle posizioni $A$ e $B$, e non dal percorso seguito. Equivalentemente, una forza è conservativa se il suo lavoro lungo *ogni* percorso chiuso è nullo.

Le due formulazioni sono equivalenti perché un percorso chiuso che passa per $A$ e $B$ si spezza in un percorso $\gamma_1$ da $A$ a $B$ e in un percorso da $B$ ad $A$; indicando con $\gamma_2$ quest'ultimo percorso seguito da $A$ verso $B$, ogni spostamento cambia segno e con esso il lavoro, quindi il lavoro lungo il percorso chiuso è $L_{\gamma_1} - L_{\gamma_2}$. Questa differenza è nulla se e solo se i lavori lungo i due percorsi da $A$ a $B$ coincidono. Il peso e la forza elastica sono conservative; l'attrito dinamico non lo è.
:::

::::teorema{#lavoro-del-peso titolo="Lavoro del peso"}
Si consideri un punto materiale di massa $m$ in prossimità della superficie terrestre, dove il peso $\vec{P} = -mg\,\hat{\jmath}$ è costante, con l'asse $y$ verticale orientato verso l'alto. Lungo *qualunque* percorso da una posizione di quota $y_A$ a una posizione di quota $y_B$ il peso compie il lavoro
$$
L_P = -mg\,(y_B - y_A) = mg\,(y_A - y_B) .
$$
Il lavoro è positivo quando il corpo scende e negativo quando sale, e dipende solo dal dislivello; perciò il peso è una **forza conservativa**. Una cassa di $20\,\mathrm{kg}$ portata da terra su uno scaffale alto $1{,}5\,\mathrm{m}$, con una scala o lungo una rampa, subisce dal peso il lavoro $-20 \cdot 9{,}81 \cdot 1{,}5\,\mathrm{J} \approx -294\,\mathrm{J}$.

::grafico{curve="4*t,3-2*t,0,1;4*t,3-2*t+1.4*sin(pi*t),0,1" segmenti="0,3,4,3;4,3,4,1" punti="0,3,pieno,A;4,1,pieno,B" etichette="4.15,2.1,Δy;1.4,1.75,γ₁;1.6,3.85,γ₂" xmin=-0.6 xmax=5.2 ymin=-0.6 ymax=4.8 uguale=1 titolo="Lungo i percorsi $\gamma_1$ e $\gamma_2$ da $A$ a $B$ il peso compie lo stesso lavoro $-mg\,\Delta y$, con $\Delta y = y_B - y_A$"}

:::dimostrazione
Lo spostamento infinitesimo lungo il percorso è $d\vec{r} = dx\,\hat{\imath} + dy\,\hat{\jmath} + dz\,\hat{k}$, quindi $\vec{P} \cdot d\vec{r} = -mg\,dy$. Nel prodotto scalare intervengono solo gli spostamenti verticali, perciò sommando i contributi lungo il percorso si ottiene
$$
L_P = \int_\gamma \vec{P} \cdot d\vec{r} = \int_{y_A}^{y_B} (-mg)\,dy = -mg\,(y_B - y_A) .
$$
:::
::::

:::osservazione{#forza-elastica-conservativa titolo="Conservatività della forza elastica"}
Per il teorema sul lavoro della forza elastica, il lavoro $\dfrac{1}{2} k x_A^2 - \dfrac{1}{2} k x_B^2$ dipende solo dalle deformazioni iniziale e finale, quindi la forza elastica è conservativa. In particolare, se la molla torna alla deformazione di partenza, il lavoro totale è nullo anche se nel frattempo la molla si è allungata e accorciata più volte. Anche la forza di gravitazione universale è conservativa, e si rimanda all'argomento sulla gravitazione.
:::

:::attenzione
L'attrito dinamico *non* è una forza conservativa. Una cassa di massa $m = 2{,}0\,\mathrm{kg}$ viene trascinata su un pavimento orizzontale, con $\mu_d = 0{,}30$, per $d = 5{,}0\,\mathrm{m}$ in un verso e poi per $5{,}0\,\mathrm{m}$ nel verso opposto, fino al punto di partenza. L'attrito ha modulo $\mu_d\,mg$ ed è sempre opposto allo spostamento, quindi compie lavoro negativo in entrambi i tratti:
$$
L_{\text{att}} = -2\,\mu_d\, m g\, d = -2 \cdot 0{,}30 \cdot 2{,}0 \cdot 9{,}81 \cdot 5{,}0\,\mathrm{J} \approx -59\,\mathrm{J} .
$$
Il percorso è chiuso e il lavoro è diverso da zero. Inoltre il lavoro dell'attrito è proporzionale alla lunghezza del percorso, quindi dipende dalla traiettoria seguita.
:::

## Energia potenziale

:::definizione{#energia-potenziale titolo="Energia potenziale"}
Sia $\vec{F}$ una forza conservativa e sia $O$ una posizione di riferimento scelta arbitrariamente. L'**energia potenziale** associata a $\vec{F}$ nella posizione $A$ è
$$
U(A) = L_{A \to O} ,
$$
cioè il lavoro che la forza compie quando il punto va da $A$ alla posizione di riferimento. La definizione è ben posta perché il lavoro di una forza conservativa non dipende dal percorso. Andando da $A$ a $B$ attraverso $O$ si ha $L_{A \to B} = L_{A \to O} + L_{O \to B} = U(A) - U(B)$, quindi per ogni coppia di posizioni
$$
L_{A \to B} = U(A) - U(B) = -\Delta U .
$$
Cambiare la posizione di riferimento aggiunge a $U$ una costante, che non modifica le differenze; per questo hanno significato fisico solo le **variazioni** di energia potenziale.
:::

:::teorema{#energia-potenziale-gravitazionale titolo="Energia potenziale del peso"}
In prossimità della superficie terrestre, con l'asse $y$ verticale verso l'alto e il riferimento alla quota $y = 0$, l'energia potenziale associata al peso di un corpo di massa $m$ è
$$
U = m g y .
$$
La formula segue dal lavoro del peso, poiché da quota $y$ alla quota di riferimento il peso compie il lavoro $mg\,(y - 0) = mgy$. La quota zero si sceglie dove conviene, per esempio al suolo o nel punto più basso della traiettoria, e $y$ è negativa sotto quel livello. La formula vale finché il peso si può considerare costante, cioè per dislivelli piccoli rispetto al raggio terrestre; per distanze maggiori si rimanda all'argomento sulla gravitazione.
:::

:::teorema{#energia-potenziale-elastica titolo="Energia potenziale elastica"}
Per una molla ideale di costante $k$, con la posizione di riferimento nella lunghezza di riposo, l'energia potenziale elastica quando la deformazione è $x$ è
$$
U = \frac{1}{2} k x^2 .
$$
La formula segue dal lavoro della forza elastica con $x_A = x$ e $x_B = 0$. L'energia potenziale elastica è positiva sia per una molla allungata sia per una molla compressa e cresce con il quadrato della deformazione; una molla con $k = 800\,\mathrm{N/m}$ compressa di $0{,}10\,\mathrm{m}$ ha $U = \dfrac{1}{2} \cdot 800 \cdot 0{,}10^2\,\mathrm{J} = 4{,}0\,\mathrm{J}$.
:::

::::teorema{#forza-da-energia-potenziale titolo="Forza come derivata dell'energia potenziale"}
Si consideri un punto materiale che si muove lungo l'asse $x$, soggetto a una forza conservativa con componente $F_x(x)$ continua, e sia $U(x)$ l'energia potenziale associata. Allora
$$
F_x(x) = -\frac{dU}{dx} .
$$
La formula permette di ricavare la forza dall'energia potenziale, e mostra che la forza è diretta verso le posizioni in cui l'energia potenziale diminuisce. Per $U = mgy$ si ottiene $F_y = -mg$, cioè il peso, e per $U = \dfrac{1}{2} k x^2$ si ottiene $F_x = -kx$, cioè la legge di Hooke. Nello spazio la relazione diventa $\vec{F} = -\nabla U$, e per i campi conservativi si rimanda all'argomento sui campi vettoriali di Analisi 2.

:::dimostrazione
Sia $x_0$ la posizione di riferimento. Per la definizione di energia potenziale e per la definizione di lavoro di una forza variabile,
$$
U(x) = L_{x \to x_0} = -\int_{x_0}^{x} F_x(s)\,ds .
$$
Poiché $F_x$ è continua, per il **teorema fondamentale del calcolo integrale** la funzione integrale è derivabile con derivata $F_x(x)$, quindi $U'(x) = -F_x(x)$, che è la tesi.
:::
::::

:::richiamo{titolo="Teorema fondamentale del calcolo integrale"}
Se $f$ è continua su un intervallo $I$ e $x_0 \in I$, la funzione $G(x) = \displaystyle\int_{x_0}^{x} f(s)\,ds$ è derivabile in ogni punto di $I$ e $G'(x) = f(x)$. Si rimanda all'argomento sugli integrali di Analisi 1.
:::

## Conservazione dell'energia meccanica

:::definizione{#energia-meccanica titolo="Energia meccanica"}
L'**energia meccanica** di un punto materiale è la somma dell'energia cinetica e delle energie potenziali associate alle forze conservative che agiscono su di esso:
$$
E = K + U .
$$
Se agiscono il peso e una forza elastica, $U = mgy + \dfrac{1}{2} k x^2$. Il valore di $E$ dipende dalle posizioni di riferimento scelte per le energie potenziali, mentre le sue variazioni non ne dipendono.
:::

::::teorema{#conservazione-energia-meccanica titolo="Conservazione dell'energia meccanica"}
Si consideri un punto materiale soggetto a forze conservative ed eventualmente ad altre forze che non compiono lavoro, come la reazione normale di una superficie fissa liscia o la tensione di un filo inestensibile con un estremo fisso. Allora l'energia meccanica si conserva durante il moto, cioè per ogni coppia di posizioni $A$ e $B$
$$
K_A + U_A = K_B + U_B .
$$
Il teorema dà la velocità in funzione della posizione senza conoscere la forma della traiettoria né la durata del moto. Un corpo che scivola partendo da fermo lungo una guida liscia con un dislivello $h$ arriva in fondo con $mgh = \dfrac{1}{2} m v^2$, cioè con $v = \sqrt{2gh}$, qualunque sia il profilo della guida; per $h = 5{,}0\,\mathrm{m}$ si ottiene $v \approx 9{,}9\,\mathrm{m/s}$.

::grafico{f="5*max(0,1-x/4)^2" vettori="5,0,6.4,0,v" punti="0,5,pieno,A;5,0,pieno,B" etichette="0.2,2.6,h" xmin=-0.6 xmax=7 ymin=-0.6 ymax=5.8 uguale=1 titolo="Lungo una guida liscia il corpo partito da fermo in $A$ arriva in $B$ con $v = \sqrt{2gh}$, qualunque sia la forma del profilo"}

:::dimostrazione
Le forze che non compiono lavoro non contribuiscono al lavoro totale, quindi $L_{\text{tot}}$ coincide con il lavoro $L_c$ delle forze conservative. Per la definizione di energia potenziale $L_c = U_A - U_B$, e per il **teorema dell'energia cinetica** $L_{\text{tot}} = K_B - K_A$. Uguagliando le due espressioni si ottiene
$$
K_B - K_A = U_A - U_B
\quad\Longrightarrow\quad
K_A + U_A = K_B + U_B .
$$
:::
::::

:::richiamo{titolo="Teorema dell'energia cinetica"}
Per un punto materiale che si muove da $A$ a $B$ in un riferimento inerziale, il lavoro totale delle forze che agiscono su di esso è $L_{\text{tot}} = K_B - K_A$.
:::

:::esempio{titolo="Scambio tra energia cinetica e potenziale"}
Un corpo di massa $1{,}0\,\mathrm{kg}$ cade da fermo dalla quota $h_0 = 5{,}0\,\mathrm{m}$, con l'attrito dell'aria trascurabile. L'energia meccanica vale $E = m g h_0 \approx 49\,\mathrm{J}$ e resta costante. Alla quota $h$ l'energia potenziale è $U = mgh$ e l'energia cinetica è $K = E - U = mg\,(h_0 - h)$; quindi, mentre il corpo scende, l'energia potenziale si trasforma in energia cinetica. Al suolo $K = 49\,\mathrm{J}$, cioè $v = \sqrt{2 g h_0} \approx 9{,}9\,\mathrm{m/s}$.

::grafico{f="9.81*x+0*sqrt(x*(5-x));49.05-9.81*x+0*sqrt(x*(5-x));49.05+0*sqrt(x*(5-x))" segmenti="5,0,5,49.05" xmin=-0.5 xmax=6 ymin=-7 ymax=63 nomi="h,E" etichette="3.4,40,U = mgh;0.5,40,K;2.3,54,E = K + U" titolo="Energie in funzione della quota $h$ nella caduta da $h_0 = 5{,}0\,\mathrm{m}$: la somma di $K$ e di $U$ resta uguale a $E \approx 49\,\mathrm{J}$"}

:::

:::esempio{titolo="Velocità di un pendolo"}
Un pendolo semplice di lunghezza $\ell$ viene lasciato da fermo con il filo inclinato di $\theta_0$ sulla verticale. La tensione del filo è sempre perpendicolare alla velocità, quindi non compie lavoro, e l'energia meccanica si conserva. Nel passaggio dalla posizione iniziale al punto più basso il corpo scende del dislivello $\ell\,(1 - \cos\theta_0)$, perciò
$$
mg\,\ell\,(1 - \cos\theta_0) = \frac{1}{2} m v^2
\quad\Longrightarrow\quad
v = \sqrt{2 g \ell\,(1 - \cos\theta_0)} .
$$
Per $\ell = 1{,}0\,\mathrm{m}$ e $\theta_0 = 60^\circ$ si ottiene $v = \sqrt{9{,}81}\,\mathrm{m/s} \approx 3{,}1\,\mathrm{m/s}$.
:::

:::esempio{titolo="Molla che lancia un blocco"}
Un blocco di massa $0{,}50\,\mathrm{kg}$ è appoggiato a una molla con $k = 800\,\mathrm{N/m}$ compressa di $0{,}10\,\mathrm{m}$, su un piano orizzontale liscio, e viene lasciato libero. Il peso e la normale non compiono lavoro, quindi si conserva la somma dell'energia cinetica e dell'energia potenziale elastica. All'inizio il blocco è fermo, e quando la molla torna a riposo l'energia potenziale elastica è nulla; perciò
$$
\frac{1}{2} k x^2 = \frac{1}{2} m v^2
\quad\Longrightarrow\quad
v = x\sqrt{\frac{k}{m}} = 0{,}10 \cdot \sqrt{\frac{800}{0{,}50}}\,\mathrm{m/s} = 4{,}0\,\mathrm{m/s} .
$$
:::

## Forze non conservative e lavoro dell'attrito

::::teorema{#lavoro-forze-non-conservative titolo="Lavoro delle forze non conservative"}
Si consideri un punto materiale soggetto a forze conservative, con energia potenziale complessiva $U$, e ad altre forze che compiono complessivamente il lavoro $L_{\text{nc}}$ quando il punto va da $A$ a $B$. Allora
$$
L_{\text{nc}} = E_B - E_A = (K_B + U_B) - (K_A + U_A) .
$$
La variazione dell'energia meccanica è quindi uguale al lavoro delle forze non conservative, e la conservazione dell'energia meccanica è il caso particolare $L_{\text{nc}} = 0$. Il teorema si usa quando il lavoro dell'attrito si calcola direttamente, per esempio quando la forza di attrito ha modulo costante lungo un tratto di lunghezza nota.

:::dimostrazione
Il lavoro totale è la somma del lavoro $L_c$ delle forze conservative e del lavoro $L_{\text{nc}}$ delle altre forze. Per la definizione di energia potenziale $L_c = U_A - U_B$, e per il **teorema dell'energia cinetica** $L_c + L_{\text{nc}} = K_B - K_A$. Sostituendo $L_c$ si ottiene $L_{\text{nc}} = (K_B - K_A) + (U_B - U_A)$, cioè la tesi.
:::
::::

:::osservazione{#energia-dissipata titolo="Energia dissipata dall'attrito"}
L'attrito dinamico è sempre opposto alla velocità del corpo rispetto alla superficie, quindi compie lavoro negativo e l'energia meccanica **diminuisce**. Se il corpo striscia per un tratto $d$ su una superficie fissa con reazione normale costante $N$, l'attrito ha modulo $\mu_d N$ e
$$
L_{\text{att}} = -\mu_d\, N\, d .
$$
L'energia meccanica persa, uguale a $|L_{\text{att}}|$, si dice **dissipata**; si ritrova come aumento dell'energia interna dei corpi a contatto, che si scaldano, e si rimanda all'argomento sul primo principio della termodinamica. In assenza di altre forze perpendicolari alla superficie, la normale vale $mg$ su un piano orizzontale e $mg\cos\alpha$ su un piano inclinato di un angolo $\alpha$.
:::

:::esempio{titolo="Discesa lungo un piano inclinato scabro"}
Un blocco lasciato libero alla sommità di un piano inclinato di $\alpha = 30^\circ$, lungo $d = 4{,}0\,\mathrm{m}$, scende con coefficiente di attrito dinamico $\mu_d = 0{,}20$. Il dislivello è $h = d\sin\alpha = 2{,}0\,\mathrm{m}$, la normale vale $mg\cos\alpha$ e l'attrito compie il lavoro $-\mu_d\, mg\cos\alpha\, d$. Con la quota zero alla base del piano, il teorema del lavoro delle forze non conservative dà
$$
-\mu_d\, m g \cos\alpha\, d = \frac{1}{2} m v^2 - m g\, d \sin\alpha
\quad\Longrightarrow\quad
v = \sqrt{2 g d\,(\sin\alpha - \mu_d \cos\alpha)} ,
$$
e numericamente $v = \sqrt{2 \cdot 9{,}81 \cdot 4{,}0 \cdot (0{,}50 - 0{,}20 \cdot 0{,}866)}\,\mathrm{m/s} \approx 5{,}1\,\mathrm{m/s}$. Senza attrito la velocità sarebbe $\sqrt{2gh} \approx 6{,}3\,\mathrm{m/s}$.

::grafico{segmenti="0,0,6.93,4;6.93,0,6.93,4" vettori="3.46,2,2.36,3.91,N;3.46,2,3.46,-0.6,P;3.46,2,4.24,2.45,f" punti="3.46,2,pieno" etichette="1.3,0.25,α" xmin=-0.6 xmax=7.6 ymin=-1 ymax=4.6 uguale=1 titolo="Blocco che scende lungo un piano inclinato scabro: la normale $\vec{N}$ non compie lavoro, il peso $\vec{P}$ compie lavoro positivo e l'attrito $\vec{f}$, rivolto verso l'alto, lavoro negativo"}

:::

## Curve di energia potenziale ed equilibrio

:::osservazione{#curve-energia-potenziale titolo="Lettura di una curva di energia potenziale"}
Si consideri un punto materiale che si muove lungo l'asse $x$ soggetto solo a una forza conservativa con energia potenziale $U(x)$. Per la conservazione dell'energia meccanica $K = E - U(x)$, e poiché $K \geq 0$ il moto può avvenire solo dove
$$
U(x) \leq E .
$$
I punti in cui $U(x) = E$ si dicono **punti di inversione**, perché lì la velocità si annulla e, se la forza non è nulla, il verso del moto si inverte. Se la regione ammessa che contiene la posizione iniziale è un intervallo limitato, il moto è confinato tra due punti di inversione e il punto oscilla avanti e indietro; se la regione è illimitata, il punto può allontanarsi indefinitamente. Nel grafico di $U$ la distanza verticale tra la retta orizzontale di ordinata $E$ e la curva è l'energia cinetica, quindi la velocità è massima dove $U$ è minima.
:::

:::definizione{#posizione-di-equilibrio titolo="Posizione di equilibrio"}
Una posizione $x_0$ è di **equilibrio** se la forza in $x_0$ è nulla, cioè, per il legame tra forza ed energia potenziale, se $U'(x_0) = 0$. Un punto materiale fermo in una posizione di equilibrio vi resta indefinitamente. L'equilibrio si dice **stabile** se, spostando di poco il punto, la forza tende a riportarlo verso $x_0$, e *instabile* se tende ad allontanarlo.
:::

:::teorema{#stabilita-equilibrio titolo="Criterio di stabilità dell'equilibrio"}
Sia $x_0$ una posizione di equilibrio, con $U$ derivabile due volte e $U''$ continua.

- Se $U''(x_0) > 0$, cioè se $x_0$ è un punto di minimo locale di $U$, l'equilibrio è stabile.
- Se $U''(x_0) < 0$, cioè se $x_0$ è un punto di massimo locale di $U$, l'equilibrio è instabile.

Il criterio segue dal segno della forza vicino a $x_0$. Se $U''(x_0) > 0$, la derivata $U'$ è crescente vicino a $x_0$ e si annulla in $x_0$, quindi $U' > 0$ a destra di $x_0$ e $U' < 0$ a sinistra; perciò $F_x = -U'$ è negativa a destra e positiva a sinistra, cioè diretta verso $x_0$. Il caso $U''(x_0) < 0$ è analogo, con i segni scambiati. Vicino a un minimo la forza è approssimativamente $F_x \approx -U''(x_0)\,(x - x_0)$, come quella di una molla di costante $U''(x_0)$, e il punto compie piccole oscillazioni; si rimanda all'argomento sulle oscillazioni e il moto armonico.
:::

:::esempio{titolo="Equilibrio in un'energia potenziale cubica"}
Sia $U(x) = 2x^3 - 6x$, con $x$ in metri e $U$ in joule. La derivata $U'(x) = 6x^2 - 6$ si annulla per $x = -1\,\mathrm{m}$ e per $x = 1\,\mathrm{m}$, e $U''(x) = 12x$. Poiché $U''(1) = 12 > 0$, la posizione $x = 1\,\mathrm{m}$ è di **equilibrio stabile**, con $U(1) = -4\,\mathrm{J}$; poiché $U''(-1) = -12 < 0$, la posizione $x = -1\,\mathrm{m}$ è di equilibrio instabile, con $U(-1) = 4\,\mathrm{J}$.

Un punto con energia meccanica $E = 2\,\mathrm{J}$ che si trova vicino al minimo resta confinato tra i punti di inversione $x_1 \approx -0{,}35\,\mathrm{m}$ e $x_2 \approx 1{,}88\,\mathrm{m}$, soluzioni di $2x^3 - 6x = 2$. Con $E > 4\,\mathrm{J}$ il punto supera il massimo in $x = -1\,\mathrm{m}$ e prosegue verso sinistra, dove $U$ decresce senza limite.

::grafico{f="2*x^3-6*x;2" punti="1,-4,pieno;-1,4,pieno;-0.347,2,vuoto,x₁;1.879,2,vuoto,x₂" etichette="-2.5,2.6,E" xmin=-2.6 xmax=2.6 ymin=-6 ymax=7 nomi="x,U" titolo="Energia potenziale $U(x) = 2x^3 - 6x$: minimo stabile in $x = 1$, massimo instabile in $x = -1$; con $E = 2\,\mathrm{J}$ il moto vicino al minimo è confinato tra $x_1$ e $x_2$"}

:::
