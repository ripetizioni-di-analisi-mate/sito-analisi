---
titolo: Perdite di carico distribuite e localizzate
sommario: La resistenza al moto nelle condotte in pressione, il legame fra sforzo alla parete e cadente, la formula di Darcy-Weisbach, il moto laminare e la legge di Hagen-Poiseuille, la formula di Colebrook-White con l'abaco di Moody, le formule monomie e le perdite localizzate con la perdita di Borda.
---

## La perdita di carico nelle condotte in pressione

Una corrente reale che percorre una condotta perde carico totale, perché la viscosità del fluido e il contatto con la parete producono sforzi tangenziali che dissipano energia meccanica. Questa sezione fissa le grandezze con cui la perdita si misura.

:::richiamo{#bernoulli-fluido-reale titolo="Teorema di Bernoulli per una corrente reale"}
Siano $1$ e $2$ due sezioni di una corrente lineare in moto permanente, con la sezione $2$ a valle della sezione $1$, e sia il fluido incomprimibile. Posto $\alpha = 1$, il carico totale nelle due sezioni è
$$
H_1 = z_1 + \frac{p_1}{\gamma} + \frac{v_1^2}{2g} ,
\qquad
H_2 = z_2 + \frac{p_2}{\gamma} + \frac{v_2^2}{2g} ,
$$
e vale $H_1 = H_2 + \Delta H$, dove $\Delta H \geq 0$ è la perdita di carico fra le due sezioni. Si rimanda all'argomento sul teorema di Bernoulli e il carico totale.
:::

:::definizione{#perdita-di-carico titolo="Perdita di carico continua e cadente"}
La **perdita di carico continua** (o distribuita) è la perdita di carico totale che si produce lungo un tratto rettilineo di condotta a sezione costante, per effetto degli sforzi tangenziali distribuiti su tutta la parete. Per un tratto di lunghezza $L$ si scrive
$$
\Delta H = J\,L ,
$$
dove $J$ è la **cadente**, cioè la perdita di carico per unità di lunghezza della condotta. La cadente è il rapporto fra due lunghezze, quindi è adimensionale.

In una condotta a sezione costante la velocità media è la stessa in ogni sezione, perciò l'altezza cinetica $\dfrac{v^2}{2g}$ è costante e la linea dei carichi totali e la piezometrica sono parallele: la cadente è la pendenza di entrambe. Per una condotta lunga $800\,\mathrm{m}$ con $J = 0{,}022$ la perdita è $\Delta H = 17{,}6\,\mathrm{m}$.

::schema{nodi="A,0,2;B,14,2" condotte="A-B,0.6" piezometrica="0,4.6 14,3.2" energia="0,5.1 14,3.7" tratteggi="0,4.6 14,4.6" linee="0,-0.6 14,-0.6" etichette="2.6,5.4,linea dei carichi totali;8.0,2.95,piezometrica;6.8,1.3,D;5.4,-0.3,piano di riferimento" quote="14 3.2,14 4.6,ΔH,0.9;A,B,L,1.3" riferimento=0 titolo="Condotta a sezione costante: la perdita di carico $\Delta H$ fra le due sezioni e la cadente $J = \dfrac{\Delta H}{L}$"}
:::

:::osservazione{#perdite-continue-e-localizzate titolo="Perdite continue e perdite localizzate"}
Lungo un impianto la perdita di carico si produce in due modi distinti.

- Nei tratti rettilinei a sezione costante la corrente è uniforme e la perdita cresce in proporzione alla lunghezza percorsa: è la perdita continua $\Delta H = J L$.
- In corrispondenza di un imbocco, di un cambiamento di sezione, di una curva o di un organo di regolazione la corrente si deforma, si distacca dalla parete e genera vortici che dissipano energia in un tratto breve: è la **perdita localizzata**, che si attribuisce a una sezione sola.

La perdita totale fra due sezioni è la somma delle perdite continue dei tratti e delle perdite localizzate dei pezzi speciali compresi fra le due sezioni.
:::

## Lo sforzo tangenziale alla parete

La cadente misura l'energia dissipata per unità di lunghezza; lo sforzo tangenziale misura l'azione della parete sul fluido. Il legame fra le due grandezze si ricava dall'equazione globale.

:::richiamo{#equazione-globale-richiamo titolo="Equazione globale in moto permanente"}
Sia dato un volume di controllo attraversato in moto permanente da una corrente di portata $Q$, con una sola sezione di ingresso e una sola sezione di uscita. Allora
$$
\rho\,Q\,(\vec{v}_2 - \vec{v}_1) = \vec{\Pi}_1 + \vec{\Pi}_2 + \vec{G} + \vec{R} ,
$$
dove $\vec{\Pi}_i = p_i A_i \hat{n}_i$ sono le spinte sulle due sezioni dirette verso l'interno del volume, $\vec{G}$ è il peso del fluido contenuto e $\vec{R}$ è la forza che le pareti esercitano sul fluido. Si rimanda all'argomento sull'equazione globale dell'equilibrio dinamico.
:::

::::teorema{#sforzo-alla-parete titolo="Sforzo tangenziale alla parete e cadente"}
Sia una corrente in moto uniforme in un condotto di area $A$, contorno bagnato $C$ e raggio idraulico $R = \dfrac{A}{C}$, e sia $\tau_0$ lo sforzo tangenziale che la parete esercita sul fluido, uguale in ogni punto del contorno. Allora
$$
\tau_0 = \gamma\,R\,J .
$$
Per una condotta circolare piena di diametro $D$ risulta $R = \dfrac{D}{4}$, quindi $\tau_0 = \dfrac{\gamma D J}{4}$.

La relazione permette di passare da una grandezza misurabile sulla linea piezometrica, la cadente, alla forza che la corrente scarica sulla tubazione. Per una condotta con $D = 0{,}25\,\mathrm{m}$ e $J = 0{,}0088$ si ottiene $\tau_0 = 9810 \cdot 0{,}0625 \cdot 0{,}0088 = 5{,}40\,\mathrm{Pa}$.

::schema{nodi="A,0,1;B,8,3" condotte="A-B,1.2" pressioni="-0.146 1.582,0.146 0.418,0.7,0.7,p_1;7.854 3.582,8.146 2.418,0.7,0.7,p_2,-1" frecce="2.654,2.282,1.684,2.040,τ_0;2.946,1.118,1.976,0.875,;5.854,3.082,4.884,2.840,;6.146,1.918,5.176,1.675,;2.4,1.6,3.6,1.9,v" forze="5 2.25,0,-1.7,G" etichette="0.25,2.3,1;7.3,1.45,2" linee="-1,-0.7 9.4,-0.7" quote="0.146 0.418,0.146 -0.7,z_1,0.9;8.146 2.418,8.146 -0.7,z_2,-0.9" titolo="Tronco di corrente fra le sezioni $1$ e $2$: le pressioni sulle due sezioni, il peso $G$ e lo sforzo tangenziale alla parete $\tau_0$"}

:::dimostrazione
L'idea è che nel moto uniforme la quantità di moto entrante e quella uscente sono uguali, quindi la risultante delle forze applicate al tronco di corrente è nulla.

Si prende come volume di controllo il tronco di corrente compreso fra due sezioni distanti $\Delta s$ lungo l'asse, inclinato dell'angolo $\theta$ sull'orizzontale, e si proietta l'equazione globale sull'asse della condotta, orientato nel verso del moto. Le due sezioni hanno la stessa area $A$ e sono percorse dalla stessa velocità media $v$, perciò $\vec{v}_2 - \vec{v}_1 = \vec{0}$ e il primo membro è nullo.

Le spinte sulle due sezioni, dirette verso l'interno del volume, danno le componenti $p_1 A$ e $-p_2 A$. Il peso $G = \gamma A \Delta s$ è verticale, quindi la sua componente lungo l'asse è $-\gamma A \Delta s \sin\theta$, negativa perché la corrente sale. La parete laterale esercita lo sforzo tangenziale $\tau_0$ su una superficie $C \Delta s$, in verso opposto al moto, quindi contribuisce con $-\tau_0 C \Delta s$. L'equazione globale proiettata sull'asse diventa
$$
0 = p_1 A - p_2 A - \gamma A \Delta s \sin\theta - \tau_0\,C\,\Delta s .
$$

Poiché $\Delta s \sin\theta = z_2 - z_1$, si raccoglie $\gamma A$ nei primi tre termini e si ottiene
$$
\gamma A \left[ \left( z_1 + \frac{p_1}{\gamma} \right) - \left( z_2 + \frac{p_2}{\gamma} \right) \right] = \tau_0\,C\,\Delta s .
$$

Le due altezze cinetiche sono uguali, quindi la differenza dei carichi piezometrici coincide con la differenza dei carichi totali, cioè con la perdita $\Delta H = J \Delta s$. Sostituendo si ricava $\gamma A J \Delta s = \tau_0 C \Delta s$, e dividendo per $C \Delta s$ si conclude che $\tau_0 = \gamma \dfrac{A}{C} J = \gamma R J$.
:::
::::

:::osservazione{#distribuzione-dello-sforzo titolo="Distribuzione dello sforzo sulla sezione"}
Lo stesso ragionamento, applicato al cilindro coassiale di raggio $r$ contenuto nella corrente, dà il valore dello sforzo tangenziale sulla sua superficie laterale. Quel cilindro ha area $\pi r^2$ e contorno $2\pi r$, quindi raggio idraulico $\dfrac{r}{2}$, e perciò
$$
\tau(r) = \gamma\,\frac{r}{2}\,J = \tau_0\,\frac{2r}{D} .
$$
Lo sforzo cresce linearmente dall'asse, dove è nullo, fino alla parete, dove vale $\tau_0$. La distribuzione vale sia nel moto laminare sia nel moto turbolento, poiché nella dimostrazione non si è usata alcuna ipotesi sul legame fra sforzo e velocità.
:::

## La formula di Darcy-Weisbach

Il legame $\tau_0 = \gamma R J$ non basta a calcolare la cadente, perché $\tau_0$ non è noto. Le misure di laboratorio mostrano che nelle condotte lo sforzo alla parete è proporzionale all'energia cinetica per unità di volume, e questa è la via che porta alla formula di uso corrente.

:::definizione{#indice-di-resistenza titolo="Indice di resistenza"}
L'**indice di resistenza** $\lambda$ è il coefficiente adimensionale definito da
$$
\tau_0 = \frac{\lambda}{8}\,\rho\,v^2 ,
$$
dove $v$ è la velocità media nella sezione. Il fattore $\dfrac{1}{8}$ è convenzionale e si sceglie perché rende la formula di Darcy-Weisbach priva di coefficienti numerici. Le misure mostrano che $\lambda$ dipende dal numero di Reynolds e dalla scabrezza relativa della parete.
:::

:::richiamo{#numero-di-reynolds titolo="Numero di Reynolds"}
Per una condotta circolare di diametro $D$ percorsa con velocità media $v$ da un fluido di viscosità cinematica $\nu$,
$$
Re = \frac{v\,D}{\nu} .
$$
Il moto è laminare per $Re < 2000$, turbolento per $Re > 4000$; fra i due valori si trova il campo di transizione. Si rimanda all'argomento sulla cinematica dei fluidi e l'equazione di continuità.
:::

::::teorema{#darcy-weisbach titolo="Formula di Darcy-Weisbach"}
Sia una corrente in moto uniforme in una condotta circolare piena di diametro $D$, con velocità media $v$ e indice di resistenza $\lambda$. Allora la cadente vale
$$
J = \lambda\,\frac{1}{D}\,\frac{v^2}{2g} ,
$$
e la perdita continua su un tratto di lunghezza $L$ è
$$
\Delta H = \lambda\,\frac{L}{D}\,\frac{v^2}{2g} .
$$

La formula lega la perdita a tre fattori separati: la lunghezza relativa $\dfrac{L}{D}$, l'altezza cinetica $\dfrac{v^2}{2g}$ e l'indice di resistenza $\lambda$, che raccoglie tutto ciò che dipende dal regime di moto e dalla parete. Con $D = 0{,}20\,\mathrm{m}$, $L = 800\,\mathrm{m}$, $v = 1{,}91\,\mathrm{m/s}$ e $\lambda = 0{,}0239$ si ottiene $\Delta H = 0{,}0239 \cdot 4000 \cdot 0{,}186 = 17{,}8\,\mathrm{m}$.

:::dimostrazione
Si uguagliano le due espressioni dello sforzo alla parete. Dallo sforzo tangenziale alla parete si ha $\tau_0 = \gamma R J$, e per una condotta circolare piena $R = \dfrac{D}{4}$, quindi $\tau_0 = \gamma \dfrac{D}{4} J$. Dalla definizione dell'indice di resistenza si ha $\tau_0 = \dfrac{\lambda}{8}\rho v^2$. Uguagliando,
$$
\gamma\,\frac{D}{4}\,J = \frac{\lambda}{8}\,\rho\,v^2 .
$$
Si divide per $\gamma \dfrac{D}{4}$ e si usa $\gamma = \rho g$:
$$
J = \frac{\lambda\,\rho\,v^2}{8}\cdot\frac{4}{\rho g D} = \lambda\,\frac{1}{D}\,\frac{v^2}{2g} .
$$
La perdita su un tratto di lunghezza $L$ si ottiene moltiplicando per $L$, poiché $\Delta H = J L$.
:::
::::

:::osservazione{#dipendenza-di-lambda titolo="Da che cosa dipende l'indice di resistenza"}
Le prove sistematiche di Nikuradse su tubi resi artificialmente scabri con granelli di sabbia incollati alla parete hanno mostrato che $\lambda$ è funzione di due soli gruppi adimensionali,
$$
\lambda = \lambda\!\left( Re,\ \frac{\varepsilon}{D} \right) ,
$$
dove $\varepsilon$ è l'altezza media delle asperità della parete. In regime laminare $\lambda$ dipende dal solo numero di Reynolds; in regime turbolento dipende da entrambi, e per numeri di Reynolds abbastanza grandi dipende dalla sola scabrezza relativa.
:::

## Il moto laminare

Nel moto laminare il legame fra sforzo e velocità è quello di Newton, perciò la distribuzione della velocità e l'indice di resistenza si ricavano per via teorica, senza coefficienti sperimentali.

:::richiamo{#legge-di-newton titolo="Legge di Newton per gli sforzi tangenziali"}
In un fluido newtoniano in moto laminare, lo sforzo tangenziale fra due strati contigui è proporzionale al gradiente della velocità nella direzione normale al moto:
$$
\tau = \mu\,\left|\frac{dv}{dr}\right| ,
$$
dove $\mu = \rho\,\nu$ è la viscosità dinamica. Si rimanda all'argomento sulle proprietà dei fluidi e la statica dei fluidi.
:::

::::teorema{#hagen-poiseuille titolo="Distribuzione della velocità e legge di Hagen-Poiseuille"}
Sia una corrente in moto laminare uniforme in una condotta circolare piena di raggio $r_0 = \dfrac{D}{2}$, con cadente $J$ e viscosità dinamica $\mu$. Allora la velocità alla distanza $r$ dall'asse vale
$$
v(r) = \frac{\gamma\,J}{4\mu}\left( r_0^2 - r^2 \right) ,
$$
quindi la distribuzione è parabolica, con il massimo sull'asse e velocità nulla alla parete. La portata e la velocità media valgono
$$
Q = \frac{\pi\,\gamma\,J\,D^4}{128\,\mu} ,
\qquad
v = \frac{\gamma\,J\,D^2}{32\,\mu} = \frac{v_{\max}}{2} .
$$

La **legge di Hagen-Poiseuille** dice che in regime laminare la portata è proporzionale alla cadente e alla quarta potenza del diametro, mentre in regime turbolento la portata cresce all'incirca con la radice quadrata della cadente. Scritta rispetto alla cadente, la legge diventa $J = \dfrac{32\,\nu\,v}{g\,D^2}$ e si usa per ricavare la perdita di un olio in una tubazione.

::grafico{curve="2*(1-t^2),t,-1,1" linee="0,1 3.2,1;0,-1 3.2,-1" vettori="0,0,2,0,v max;0,0.5,1.5,0.5;0,-0.5,1.5,-0.5;0,0.85,0.555,0.85;0,-0.85,0.555,-0.85" unicolore=1 assi=0 uguale=1 xmin=-0.9 xmax=3.4 ymin=-1.5 ymax=1.5 etichette="2.4,1.15,parete;-0.85,0.95,r = r₀;-0.85,0,r = 0;-0.85,-1.05,r = r₀" titolo="Moto laminare: distribuzione parabolica della velocità sulla sezione, con $v_{\max}$ sull'asse e velocità nulla alla parete"}

:::dimostrazione
L'idea è di scrivere lo sforzo in due modi, con la distribuzione ricavata dall'equilibrio e con la legge di Newton, e di integrare l'equazione differenziale che ne risulta.

Dalla distribuzione dello sforzo sulla sezione, sul cilindro coassiale di raggio $r$ agisce lo sforzo $\tau(r) = \dfrac{\gamma J r}{2}$. La velocità diminuisce al crescere di $r$, quindi $\dfrac{dv}{dr} \leq 0$ e la legge di Newton si scrive $\tau = -\mu\dfrac{dv}{dr}$. Uguagliando le due espressioni,
$$
-\mu\,\frac{dv}{dr} = \frac{\gamma\,J\,r}{2}
\qquad\Longrightarrow\qquad
\frac{dv}{dr} = -\frac{\gamma\,J}{2\mu}\,r .
$$

L'equazione è a variabili separabili e si integra direttamente:
$$
v(r) = -\frac{\gamma\,J}{4\mu}\,r^2 + c .
$$
Alla parete il fluido aderisce, quindi $v(r_0) = 0$ e perciò $c = \dfrac{\gamma J r_0^2}{4\mu}$. Sostituendo si ottiene l'espressione cercata, che è una parabola di vertice sull'asse con $v_{\max} = \dfrac{\gamma J r_0^2}{4\mu}$.

La portata si ottiene integrando la velocità sulla sezione, presa come corona circolare di raggio $r$ e spessore $dr$, di area $2\pi r\,dr$:
$$
Q = \int_0^{r_0} \frac{\gamma J}{4\mu}\left( r_0^2 - r^2 \right) 2\pi r\,dr
= \frac{\pi\gamma J}{2\mu}\left[ \frac{r_0^2 r^2}{2} - \frac{r^4}{4} \right]_0^{r_0}
= \frac{\pi\,\gamma\,J\,r_0^4}{8\mu} .
$$
Poiché $r_0 = \dfrac{D}{2}$, risulta $r_0^4 = \dfrac{D^4}{16}$ e quindi $Q = \dfrac{\pi \gamma J D^4}{128\mu}$. Dividendo per l'area $\dfrac{\pi D^2}{4}$ si ottiene $v = \dfrac{\gamma J D^2}{32\mu}$, che è la metà di $v_{\max}$.
:::
::::

::::teorema{#lambda-laminare titolo="Indice di resistenza nel moto laminare"}
Sia una corrente in moto laminare uniforme in una condotta circolare piena. Allora
$$
\lambda = \frac{64}{Re} .
$$
In regime laminare l'indice di resistenza dipende dal solo numero di Reynolds e non dalla scabrezza della parete, poiché le asperità restano immerse nel fluido che aderisce alla parete. Per $Re = 1061$ risulta $\lambda = 0{,}0603$, un valore molto maggiore di quelli del regime turbolento.

:::dimostrazione
Si confrontano le due espressioni della cadente. Dalla legge di Hagen-Poiseuille, scritta rispetto a $J$ e con $\mu = \rho\nu$ e $\gamma = \rho g$,
$$
J = \frac{32\,\nu\,v}{g\,D^2} .
$$
Dalla formula di Darcy-Weisbach $J = \lambda\dfrac{1}{D}\dfrac{v^2}{2g}$. Uguagliando e risolvendo rispetto a $\lambda$,
$$
\lambda = \frac{2\,g\,D\,J}{v^2} = \frac{2\,g\,D}{v^2}\cdot\frac{32\,\nu\,v}{g\,D^2} = \frac{64\,\nu}{v\,D} = \frac{64}{Re} .
$$
:::
::::

## Il moto turbolento: scabrezza, Colebrook-White e abaco di Moody

Nel moto turbolento il trasporto di quantità di moto avviene per rimescolamento, quindi la legge di Newton non basta a determinare $\lambda$ e si ricorre a formule ricavate da misure.

:::definizione{#scabrezza titolo="Scabrezza assoluta e relativa"}
La **scabrezza assoluta** $\varepsilon$ è l'altezza media delle asperità della parete interna del tubo, misurata in millimetri; la **scabrezza relativa** è il rapporto adimensionale $\dfrac{\varepsilon}{D}$. Valori di uso corrente, ricavati da misure su tubazioni in esercizio: vetro e materie plastiche $0{,}002$–$0{,}02\,\mathrm{mm}$, acciaio nuovo $0{,}05$–$0{,}10\,\mathrm{mm}$, ghisa nuova $0{,}25$–$0{,}50\,\mathrm{mm}$, ghisa incrostata $1$–$3\,\mathrm{mm}$, calcestruzzo $0{,}3$–$3\,\mathrm{mm}$. Una condotta in ghisa con $\varepsilon = 0{,}4\,\mathrm{mm}$ e $D = 200\,\mathrm{mm}$ ha scabrezza relativa $0{,}002$.
:::

:::osservazione{#colebrook-white titolo="Formula di Colebrook-White"}
Colebrook e White hanno interpolato le misure su tubi commerciali con la formula
$$
\frac{1}{\sqrt{\lambda}} = -2\,\log_{10}\!\left( \frac{2{,}51}{Re\,\sqrt{\lambda}} + \frac{\varepsilon}{3{,}71\,D} \right) ,
$$
valida in tutto il campo turbolento, cioè per $Re > 4000$. La formula è sperimentale e non si dimostra: riproduce le misure con uno scarto di pochi punti percentuali.

L'incognita $\lambda$ compare ai due membri, quindi la formula si risolve per tentativi: si assume un valore di primo tentativo, per esempio $\lambda = 0{,}025$, si calcola il secondo membro, si ricava il nuovo valore e si ripete finché due valori successivi differiscono meno della tolleranza scelta. Tre o quattro iterazioni bastano.
:::

:::osservazione{#tubi-lisci titolo="Tubi idraulicamente lisci"}
Quando le asperità sono piccole rispetto allo spessore dello strato di fluido aderente alla parete, la scabrezza non influenza la resistenza e il tubo si dice **idraulicamente liscio**. In questo campo il secondo addendo nella formula di Colebrook-White è trascurabile rispetto al primo, e la formula si riduce alla legge di Prandtl per i tubi lisci,
$$
\frac{1}{\sqrt{\lambda}} = 2\,\log_{10}\!\left( Re\,\sqrt{\lambda} \right) - 0{,}8 ,
$$
nella quale $\lambda$ dipende dal solo numero di Reynolds. Il confronto fra i due addendi si fa con i numeri del problema: se $\dfrac{\varepsilon}{3{,}71 D}$ vale meno di un decimo di $\dfrac{2{,}51}{Re\sqrt{\lambda}}$, la condotta si comporta come liscia.
:::

:::osservazione{#assolutamente-turbolento titolo="Campo di moto assolutamente turbolento"}
Al crescere del numero di Reynolds il termine $\dfrac{2{,}51}{Re\sqrt{\lambda}}$ diventa trascurabile rispetto a $\dfrac{\varepsilon}{3{,}71 D}$ e la formula di Colebrook-White si riduce alla legge di Prandtl-Nikuradse,
$$
\frac{1}{\sqrt{\lambda}} = 2\,\log_{10}\!\left( \frac{3{,}71\,D}{\varepsilon} \right) ,
$$
nella quale $\lambda$ dipende dalla sola scabrezza relativa. Questo è il **campo di moto assolutamente turbolento**, nel quale la cadente risulta proporzionale al quadrato della velocità. Il campo si riconosce dal valore del gruppo $\dfrac{u_*\varepsilon}{\nu}$, con $u_* = \sqrt{\dfrac{\tau_0}{\rho}} = v\sqrt{\dfrac{\lambda}{8}}$: il moto è assolutamente turbolento per $\dfrac{u_*\varepsilon}{\nu} > 70$, cioè per $Re\sqrt{\lambda}\,\dfrac{\varepsilon}{D} > 200$ circa. Le condotte di acquedotto in ghisa o in calcestruzzo, percorse alle velocità di esercizio, ricadono quasi sempre in questo campo, e questo giustifica l'uso delle formule monomie.
:::

:::osservazione{#abaco-di-moody titolo="Abaco di Moody e sua lettura"}
L'**abaco di Moody** è il diagramma che riporta $\lambda$ in funzione di $Re$, con la scabrezza relativa $\dfrac{\varepsilon}{D}$ come parametro, in scala logaritmica su entrambi gli assi. Vi si distinguono tre zone: la retta del moto laminare $\lambda = \dfrac{64}{Re}$ fino a $Re = 2000$; il fascio di curve del moto turbolento di transizione, che partono dalla curva dei tubi lisci e se ne staccano al crescere di $Re$; le rette orizzontali del campo assolutamente turbolento, una per ogni valore della scabrezza relativa.

Per leggerlo si calcolano $Re$ e $\dfrac{\varepsilon}{D}$, si entra con $Re$ sull'asse orizzontale, si sale fino alla curva della scabrezza relativa del problema e si legge $\lambda$ sull'asse verticale. La lettura dà lo stesso valore che si otterrebbe risolvendo la formula di Colebrook-White per tentativi, perché le curve dell'abaco sono il grafico di quella formula.

::grafico{f="1/(1.8*log(6.9/10^x)/log(10))^2;1/(1.8*log(6.9/10^x+0.00023573)/log(10))^2;1/(1.8*log(6.9/10^x+0.000018290)/log(10))^2" xmin=3 xmax=8 ymin=0 ymax=0.07 nomi=",λ" etichette="6.2,0.0265,ε/D = 0.002;6.2,0.0158,ε/D = 0.0002;6.2,0.0075,tubo liscio;6.9,0.0035,log₁₀ Re" titolo="Andamento qualitativo dell'indice di resistenza $\lambda$ nel moto turbolento, al variare di $Re$ e della scabrezza relativa $\dfrac{\varepsilon}{D}$"}
:::

:::attenzione
La legge del campo assolutamente turbolento si applica soltanto dove la condizione $Re\sqrt{\lambda}\,\dfrac{\varepsilon}{D} > 200$ è soddisfatta.

Per una condotta in materia plastica con $D = 250\,\mathrm{mm}$, $\varepsilon = 0{,}02\,\mathrm{mm}$ e $Q = 90\,\mathrm{L/s}$ si ha $v = 1{,}83\,\mathrm{m/s}$, $Re = 4{,}58 \cdot 10^5$ e $\dfrac{\varepsilon}{D} = 8 \cdot 10^{-5}$; la formula di Colebrook-White dà $\lambda = 0{,}0144$, mentre la legge di Prandtl-Nikuradse darebbe $\lambda = 0{,}0115$, con un errore del $20\,\%$ sulla perdita di carico. Il gruppo di controllo vale $4{,}4$, molto minore di $200$, quindi la condotta lavora nel campo di transizione.
:::

## Le formule pratiche monomie

Nel campo assolutamente turbolento $\lambda$ non dipende più dal numero di Reynolds, perciò la cadente si può esprimere con formule a un solo termine, più rapide da usare nei calcoli di progetto.

:::definizione{#chezy titolo="Formula di Chézy"}
La **formula di Chézy** esprime la velocità media di una corrente in moto uniforme come
$$
v = \chi\,\sqrt{R\,J} ,
$$
dove $R$ è il raggio idraulico e $\chi$ è il coefficiente di Chézy, che ha le dimensioni di $\mathrm{m^{1/2}/s}$ e cresce al diminuire della scabrezza. La formula si usa sia per le condotte in pressione sia per i canali, perché contiene il raggio idraulico e non il diametro.
:::

:::definizione{#gauckler-strickler titolo="Formula di Gauckler-Strickler"}
La **formula di Gauckler-Strickler** specifica la dipendenza del coefficiente di Chézy dal raggio idraulico:
$$
v = k_s\,R^{2/3}\,J^{1/2} ,
$$
dove $k_s$, in $\mathrm{m^{1/3}/s}$, è il coefficiente di scabrezza, tanto più grande quanto più la parete è liscia. Valori di uso corrente, ricavati da misure su condotte e canali in esercizio: materie plastiche $120$, acciaio $100$–$110$, ghisa nuova $90$–$100$, ghisa in esercizio da anni $70$–$80$, calcestruzzo lisciato $75$–$85$, calcestruzzo grezzo $60$–$70$. Il coefficiente $n$ di Manning, usato nei testi di lingua inglese, è il reciproco di $k_s$.

Risolvendo rispetto alla cadente si ottiene la forma di uso corrente
$$
J = \frac{v^2}{k_s^2\,R^{4/3}} ,
$$
che fornisce direttamente la perdita senza iterazioni. Per una condotta in calcestruzzo con $D = 0{,}40\,\mathrm{m}$, $k_s = 80\,\mathrm{m^{1/3}/s}$ e $Q = 120\,\mathrm{L/s}$ si ha $v = 0{,}955\,\mathrm{m/s}$, $R = 0{,}10\,\mathrm{m}$ e $J = 0{,}00307$.
:::

:::osservazione{#legame-monomie-lambda titolo="Legame con l'indice di resistenza"}
Le formule monomie e la formula di Darcy-Weisbach descrivono la stessa cadente, quindi i loro coefficienti sono legati fra loro. Uguagliando $v = \chi\sqrt{RJ}$ e $J = \lambda\dfrac{1}{4R}\dfrac{v^2}{2g}$, scritta con $D = 4R$, si ricava
$$
\chi = \sqrt{\frac{8g}{\lambda}} ,
\qquad
\chi = k_s\,R^{1/6} .
$$
Il confronto mostra il campo d'uso delle formule monomie: $\chi$ dipende dalla sola scabrezza, quindi le formule valgono dove $\lambda$ non dipende dal numero di Reynolds, cioè nel campo assolutamente turbolento. Nell'esempio precedente $\lambda = 0{,}0264$ dà $\chi = 54{,}5\,\mathrm{m^{1/2}/s}$, e $k_s R^{1/6} = 80 \cdot 0{,}681 = 54{,}5\,\mathrm{m^{1/2}/s}$.
:::

## Le perdite localizzate

Dove la corrente cambia direzione o sezione, il distacco dalla parete genera vortici che dissipano energia in un tratto breve. La perdita si esprime come frazione dell'altezza cinetica.

:::definizione{#perdita-localizzata titolo="Coefficiente di perdita localizzata"}
La **perdita localizzata** prodotta da un pezzo speciale si scrive
$$
\Delta H_{\mathrm{loc}} = \xi\,\frac{v^2}{2g} ,
$$
dove $\xi$ è un coefficiente adimensionale che dipende dalla geometria del pezzo e $v$ è la velocità in una sezione convenuta, di solito quella a valle del pezzo. Il valore di $v$ a cui $\xi$ si riferisce va dichiarato, perché il prodotto $\xi\dfrac{v^2}{2g}$ cambia se si cambia la sezione di riferimento.
:::

::::teorema{#borda titolo="Perdita di Borda nel brusco allargamento"}
Sia una condotta orizzontale che passa bruscamente dall'area $A_1$ all'area $A_2 > A_1$, percorsa dalla portata $Q$ con velocità medie $v_1 = \dfrac{Q}{A_1}$ e $v_2 = \dfrac{Q}{A_2}$. Si ammetta che sulla sezione di imbocco del tratto allargato la pressione sia distribuita secondo la legge idrostatica con il valore $p_1$ su tutta l'area $A_2$. Allora la perdita di carico vale
$$
\Delta H = \frac{(v_1 - v_2)^2}{2g} .
$$

Scritta rispetto alla velocità di monte, la **perdita di Borda** corrisponde al coefficiente $\xi = \left( 1 - \dfrac{A_1}{A_2} \right)^2$. Per $A_2 \to \infty$, cioè per una condotta che sbocca in un serbatoio, si ottiene $\xi = 1$: tutta l'altezza cinetica va perduta.

::schema{nodi="A,0,2,-;B,4,2,-;C,10,2,-" condotte="A-B,1;B-C,2" tratteggi="4.2,0.9 4.2,3.1;8.6,0.9 8.6,3.1" pressioni="4.2 1,4.2 3,0.8,0.8,p_1;8.6 3,8.6 1,0.8,0.8,p_2" frecce="1.0,2,2.2,2,v_1;6.0,2,7.2,2,v_2" etichette="4.2,3.45,1;8.6,3.45,2;5.9,2.72,ricircolazione" riferimento=0 titolo="Brusco allargamento: volume di controllo fra la sezione $1$, subito a valle del gradino, e la sezione $2$ in cui la corrente è di nuovo aderente alla parete"}

:::dimostrazione
L'idea è di usare l'equazione globale per ricavare la differenza di pressione, che l'attrito non permette di ottenere da Bernoulli, e poi di portare quella differenza nel bilancio dei carichi.

Si prende come volume di controllo il tratto di condotta compreso fra la sezione $1$, immediatamente a valle del gradino, e la sezione $2$, posta dove la corrente è di nuovo aderente alla parete, e si proietta l'equazione globale sull'asse, orientato nel verso del moto. Il peso è verticale, quindi non dà componente; la parete laterale è parallela all'asse e il tratto è breve, perciò lo sforzo tangenziale si trascura. Le spinte sulle due sezioni valgono $p_1 A_2$ e $-p_2 A_2$, poiché per ipotesi la pressione $p_1$ agisce su tutta l'area $A_2$. Si ottiene
$$
\rho\,Q\,(v_2 - v_1) = p_1 A_2 - p_2 A_2 .
$$

Si sostituisce $Q = A_2 v_2$ e si divide per $A_2$:
$$
\rho\,v_2\,(v_2 - v_1) = p_1 - p_2
\qquad\Longrightarrow\qquad
\frac{p_1 - p_2}{\gamma} = \frac{v_2\,(v_2 - v_1)}{g} .
$$

Il teorema di Bernoulli per una corrente reale, applicato fra le stesse due sezioni di una condotta orizzontale, dà
$$
\Delta H = \frac{p_1 - p_2}{\gamma} + \frac{v_1^2 - v_2^2}{2g} .
$$

Si sostituisce la differenza di pressione appena trovata e si riducono i termini allo stesso denominatore:
$$
\Delta H = \frac{2\,v_2^2 - 2\,v_1 v_2 + v_1^2 - v_2^2}{2g} = \frac{v_1^2 - 2\,v_1 v_2 + v_2^2}{2g} = \frac{(v_1 - v_2)^2}{2g} .
$$

Il risultato è positivo per $v_1 \neq v_2$, quindi il bilancio è coerente con il secondo principio della termodinamica.
:::
::::

:::osservazione{#restringimento titolo="Brusco restringimento e vena contratta"}
Nel passaggio da una sezione grande a una piccola la corrente non riempie subito la condotta di valle: si stacca dallo spigolo e si contrae fino a una sezione $c$ di area $A_c = C_c A_2$, dove $C_c \approx 0{,}6$–$0{,}65$ è il coefficiente di contrazione. Il tratto che precede la sezione contratta è un'accelerazione, nella quale la dissipazione è piccola; la perdita si produce nel riallargamento successivo, che è un brusco allargamento dalla sezione $A_c$ alla sezione $A_2$. Applicando la perdita di Borda fra quelle due sezioni, con $v_c = \dfrac{v_2}{C_c}$, si ottiene
$$
\Delta H = \frac{(v_c - v_2)^2}{2g} = \left( \frac{1}{C_c} - 1 \right)^2 \frac{v_2^2}{2g} ,
$$
cioè $\xi \approx 0{,}3$–$0{,}45$ riferito alla velocità di valle.

::schema{nodi="A,0,2,-;B,5,2,-;C,11,2,-" condotte="A-B,2;B-C,1" tratteggi="5,2.5 5.9,2.39 7.0,2.39 8.3,2.5;5,1.5 5.9,1.61 7.0,1.61 8.3,1.5" frecce="1.6,2,2.8,2,v_1;9.2,2,10.4,2,v_2" etichette="6.5,3.25,sezione contratta;6.45,1.15,c" riferimento=0 titolo="Brusco restringimento: la corrente si contrae fino alla sezione $c$ e poi si riallarga, e la perdita si produce nel riallargamento"}
:::

:::osservazione{#imbocco-e-sbocco titolo="Imbocco e sbocco"}
L'imbocco di una condotta in un serbatoio è un brusco restringimento dall'area del serbatoio a quella della condotta, quindi $\xi = 0{,}5$ per lo spigolo vivo e $\xi \approx 0{,}05$ per l'imbocco raccordato, dove la corrente non si distacca. Lo sbocco in un serbatoio è un brusco allargamento con $A_2 \to \infty$, quindi $\xi = 1$ riferito alla velocità nella condotta. Fra due serbatoi a quote $z_m$ e $z_v$, l'applicazione del teorema di Bernoulli fra i due peli liberi dà
$$
z_m - z_v = \left( \lambda\,\frac{L}{D} + \sum_i \xi_i \right)\frac{v^2}{2g} ,
$$
perché la velocità nei due serbatoi è nulla e le pressioni sui due peli liberi sono entrambe nulle in termini relativi.

::schema{nodi="A,1,5.2,-;B,1,1,-;C,10,1,-;D,10,3.2,-" condotte="A-B-C-D,0.4" acqua="-1.6,4.6 1.6,4.6 1.6,6.8 -1.6,6.8;8.6,2.8 11.8,2.8 11.8,4.4 8.6,4.4" pelo="-1.6,1.6,6.8,;8.6,11.8,4.4," solidi="-2.4,0.0 12.6,0.0 12.6,0.4 -2.4,0.4" linee="-1.6,7.2 -1.6,4.6 1.6,4.6 1.6,7.2;8.6,4.8 8.6,2.8 11.8,2.8 11.8,4.8" etichette="3.0,4.9,imbocco;2.1,1.5,curva;8.1,1.5,curva;5.2,1.5,saracinesca;7.2,3.3,sbocco" riferimento=0 titolo="Condotta fra due serbatoi: oltre alla perdita continua lungo i tratti rettilinei si producono le perdite localizzate nell'imbocco, nelle due curve, nella saracinesca e nello sbocco"}
:::

:::osservazione{#coefficienti-xi titolo="Coefficienti di perdita di uso corrente"}
I coefficienti dei pezzi speciali si ricavano da misure di laboratorio e dipendono dalla geometria e dalla lavorazione; i cataloghi dei costruttori ne danno i valori per i pezzi commerciali. Valori di uso corrente, riferiti alla velocità nella condotta:

- imbocco a spigolo vivo $0{,}5$, imbocco raccordato $0{,}05$, imbocco rientrante $1{,}0$;
- sbocco in un serbatoio $1{,}0$;
- curva a $90^\circ$ a grande raggio $0{,}15$–$0{,}25$, curva a $90^\circ$ a piccolo raggio $0{,}30$–$0{,}40$, gomito a spigolo vivo $1{,}1$;
- saracinesca tutta aperta $0{,}1$–$0{,}2$, aperta a metà $5$–$6$;
- valvola a farfalla tutta aperta $0{,}3$, valvola di ritegno $2$–$3$;
- derivazione a T sul ramo laterale $1{,}0$.

La saracinesca mostra il senso della regolazione: chiudendola si aumenta $\xi$, quindi la perdita, e la portata diminuisce a parità di carico disponibile.
:::

## Lunghezza equivalente e peso delle perdite

Per confrontare fra loro le due perdite conviene esprimerle nella stessa grandezza.

:::definizione{#lunghezza-equivalente titolo="Lunghezza equivalente"}
La **lunghezza equivalente** di un pezzo speciale è la lunghezza di condotta rettilinea dello stesso diametro che produce la stessa perdita di carico. Uguagliando $\xi\dfrac{v^2}{2g} = \lambda\dfrac{L_{\mathrm{eq}}}{D}\dfrac{v^2}{2g}$ si ricava
$$
L_{\mathrm{eq}} = \xi\,\frac{D}{\lambda} .
$$
Sommando le lunghezze equivalenti di tutti i pezzi alla lunghezza geometrica si ottiene una condotta rettilinea che dissipa quanto l'impianto reale, e il calcolo si svolge con la sola formula di Darcy-Weisbach. Per $D = 0{,}20\,\mathrm{m}$, $\lambda = 0{,}022$ e una saracinesca con $\xi = 0{,}2$ risulta $L_{\mathrm{eq}} = 1{,}82\,\mathrm{m}$, cioè circa $9$ diametri.
:::

:::osservazione{#peso-delle-perdite titolo="Peso relativo delle due perdite"}
Il rapporto fra le due perdite si legge nella forma $\left( \lambda\dfrac{L}{D} + \sum_i \xi_i \right)\dfrac{v^2}{2g}$: la perdita continua pesa come $\lambda\dfrac{L}{D}$, quella localizzata come $\sum_i \xi_i$, e il confronto dipende dal solo rapporto $\dfrac{L}{D}$.

Per una condotta con $D = 0{,}15\,\mathrm{m}$, $\lambda = 0{,}024$ e $\sum \xi_i = 2{,}2$ si ha $\lambda\dfrac{L}{D} = 3{,}2$ per $L = 20\,\mathrm{m}$, quindi le perdite localizzate valgono il $41\,\%$ del totale, e $\lambda\dfrac{L}{D} = 80$ per $L = 500\,\mathrm{m}$, quindi scendono al $2{,}7\,\%$. Nelle condotte di adduzione, lunghe migliaia di diametri, le perdite localizzate si trascurano e si parla di *lunghe condotte*; negli impianti interni, nelle stazioni di pompaggio e nelle centrali le due perdite sono dello stesso ordine e vanno calcolate entrambe. Lo schema della lunga condotta è trattato nell'argomento sulle lunghe condotte e gli impianti di sollevamento.

::schema{nodi="A,0,1,-;B,13,1,-" condotte="A-B,0.5" energia="0,5.4 2,5.06 2,4.46 7,3.61 7,3.26 13,2.24" piezometrica="0,4.9 2,4.56 2,3.96 7,3.11 7,2.76 13,1.74" tratteggi="2,1.3 2,3.9;7,1.3 7,2.7" etichette="3.4,5.55,linea dei carichi totali;10.4,1.55,piezometrica;2.0,0.35,curva;7.0,0.35,saracinesca" riferimento=0 titolo="Profilo delle linee lungo una condotta di diametro costante: le perdite continue danno i tratti inclinati, quelle localizzate i salti verticali"}
:::

:::esempio{titolo="Confronto fra le due perdite in una condotta breve"}
Una condotta in ghisa con $D = 150\,\mathrm{mm}$, lunga $60\,\mathrm{m}$, porta $Q = 30\,\mathrm{L/s}$ e comprende un imbocco a spigolo vivo, due curve a $90^\circ$ con $\xi = 0{,}25$, una saracinesca aperta con $\xi = 0{,}15$ e lo sbocco in un serbatoio. La velocità è $v = \dfrac{0{,}030}{0{,}01767} = 1{,}70\,\mathrm{m/s}$ e l'altezza cinetica è $\dfrac{v^2}{2g} = 0{,}147\,\mathrm{m}$.

La somma dei coefficienti vale $\sum \xi_i = 0{,}5 + 0{,}25 + 0{,}25 + 0{,}15 + 1 = 2{,}15$, quindi $\Delta H_{\mathrm{loc}} = 2{,}15 \cdot 0{,}147 = 0{,}316\,\mathrm{m}$. Con $\varepsilon = 0{,}1\,\mathrm{mm}$ si ha $Re = 2{,}55 \cdot 10^5$ e $\lambda = 0{,}0193$, quindi $\Delta H_{\mathrm{cont}} = 0{,}0193 \cdot 400 \cdot 0{,}147 = 1{,}13\,\mathrm{m}$. La perdita totale è $1{,}45\,\mathrm{m}$ e le perdite localizzate ne costituiscono il $22\,\%$: in una condotta di quattrocento diametri trascurarle sposterebbe il risultato di oltre un quinto.
:::
