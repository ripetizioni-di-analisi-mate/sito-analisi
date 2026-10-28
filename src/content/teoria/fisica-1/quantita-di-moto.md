---
titolo: Sistemi di punti, quantità di moto e urti
sommario: Come quantità di moto, impulso e centro di massa descrivono i sistemi di più corpi, perché in assenza di forze esterne la quantità di moto totale si conserva e come questa legge, insieme all'energia, risolve urti, esplosioni e il moto di un razzo.
---

## Quantità di moto di un punto materiale

:::definizione{#quantita-di-moto titolo="Quantità di moto"}
Sia $P$ un punto materiale di massa $m$ che si muove con velocità $\vec{v}$. La **quantità di moto** di $P$ è il vettore
$$
\vec{p} = m\,\vec{v} .
$$
Ha la direzione e il verso della velocità e si misura in $\mathrm{kg\cdot m/s}$, unità che coincide con $\mathrm{N\cdot s}$. Due corpi con la stessa velocità hanno quantità di moto proporzionali alle masse; per esempio un'automobile di $1200\,\mathrm{kg}$ a $15\,\mathrm{m/s}$ ha $p = 1{,}8 \cdot 10^4\,\mathrm{kg\cdot m/s}$, una palla da tennis di $0{,}058\,\mathrm{kg}$ a $30\,\mathrm{m/s}$ ha $p \approx 1{,}7\,\mathrm{kg\cdot m/s}$. La quantità di moto è la grandezza che si scambiano i corpi quando interagiscono, e nei problemi di urto è la prima a essere scritta.
:::

:::teorema{#secondo-principio-quantita-di-moto titolo="Secondo principio della dinamica in termini di quantità di moto"}
Il secondo principio della dinamica, che è un principio sperimentale e per il quale si rimanda all'argomento sulle leggi di Newton, si può scrivere nella forma
$$
\vec{F} = \frac{d\vec{p}}{dt} ,
$$
dove $\vec{F}$ è la risultante delle forze che agiscono sul punto. Se la massa è costante si ha $\dfrac{d\vec{p}}{dt} = m\,\dfrac{d\vec{v}}{dt} = m\,\vec{a}$, quindi la scrittura coincide con $\vec{F} = m\vec{a}$. La forma con $\vec{p}$ dice che la forza misura la rapidità con cui cambia la quantità di moto, e da questa forma partono il teorema dell'impulso e l'equazione dei sistemi a massa variabile. Per esempio, se su un corpo la quantità di moto cresce in modo uniforme di $6{,}0\,\mathrm{kg\cdot m/s}$ ogni $2{,}0\,\mathrm{s}$, la forza risultante ha modulo $3{,}0\,\mathrm{N}$.
:::

## Impulso e teorema dell'impulso

:::definizione{#impulso titolo="Impulso di una forza"}
Sia $\vec{F}(t)$ una forza che agisce su un punto nell'intervallo di tempo $[t_1, t_2]$. L'**impulso** della forza nell'intervallo è il vettore
$$
\vec{J} = \int_{t_1}^{t_2} \vec{F}(t)\,dt ,
$$
calcolato componente per componente. Per una forza costante l'impulso è $\vec{J} = \vec{F}\,\Delta t$, con $\Delta t = t_2 - t_1$. Se la forza ha direzione fissa, il modulo dell'impulso è l'area sotto il grafico di $F(t)$, e questo permette di calcolarlo anche quando la forza è nota solo per punti o con un grafico.

::grafico{f="3*sin(pi*min(max(x,0),4)/4)" area="3*sin(pi*x/4);0;0;4" segmenti="0,1.91,4,1.91;4,0,4,1.91" etichette="4.15,1.85,Fₘ" xmin=-0.3 xmax=5.2 ymin=-0.4 ymax=3.6 nomi="t,F" titolo="L'impulso della forza $F(t) = F_{\max} \sin \dfrac{\pi t}{\tau}$, con $F_{\max} = 3\,\mathrm{kN}$ e $\tau = 4\,\mathrm{ms}$, è l'area colorata $J = \dfrac{2 F_{\max} \tau}{\pi} \approx 7{,}6\,\mathrm{N\cdot s}$; il rettangolo tratteggiato di base $\tau$ e altezza $F_m \approx 1{,}9\,\mathrm{kN}$ ha la stessa area"}

:::

::::teorema{#teorema-dell-impulso titolo="Teorema dell'impulso"}
Sia $\vec{F}(t)$ la risultante delle forze che agiscono su un punto materiale nell'intervallo $[t_1, t_2]$. Allora l'impulso della risultante è uguale alla variazione della quantità di moto:
$$
\vec{J} = \vec{p}(t_2) - \vec{p}(t_1) = \Delta \vec{p} .
$$
Il teorema collega una grandezza che dipende da tutta la storia della forza, l'impulso, a una differenza tra due istanti. Serve quando la forza è intensa, breve e non misurabile istante per istante, come nel colpo di una racchetta o nell'urto contro un muro; in questi casi dalla variazione della velocità si ricava l'impulso, e da questo la forza media.

:::dimostrazione
Per il secondo principio in termini di quantità di moto, in ogni istante $\vec{F}(t) = \dfrac{d\vec{p}}{dt}$. Integrando i due membri tra $t_1$ e $t_2$, componente per componente, e applicando il **teorema fondamentale del calcolo integrale** al secondo membro si ottiene
$$
\int_{t_1}^{t_2} \vec{F}(t)\,dt = \int_{t_1}^{t_2} \frac{d\vec{p}}{dt}\,dt = \vec{p}(t_2) - \vec{p}(t_1) ,
$$
cioè la tesi.
:::
::::

:::richiamo{titolo="Teorema fondamentale del calcolo integrale"}
Se $g$ ha derivata continua in $[a, b]$, allora $\displaystyle\int_a^b g'(t)\,dt = g(b) - g(a)$. Si rimanda all'argomento di Analisi 1 sul calcolo integrale.
:::

:::definizione{#forza-media titolo="Forza media"}
La **forza media** nell'intervallo $[t_1, t_2]$ è la forza costante che nello stesso intervallo produce lo stesso impulso:
$$
\vec{F}_{m} = \frac{\vec{J}}{\Delta t} = \frac{\Delta \vec{p}}{\Delta t} .
$$
Nel grafico di $F(t)$ è l'altezza del rettangolo di base $\Delta t$ con la stessa area. A parità di variazione della quantità di moto, la forza media è tanto più piccola quanto più lungo è il tempo di contatto; per questo un airbag o un tappeto di gommapiuma riducono la forza sul corpo che si arresta.
:::

:::esempio{titolo="Palla da tennis contro un muro"}
Una palla da tennis di massa $m = 0{,}058\,\mathrm{kg}$ arriva perpendicolarmente a un muro con velocità di modulo $30\,\mathrm{m/s}$ e rimbalza all'indietro a $25\,\mathrm{m/s}$; il contatto dura $\Delta t = 4{,}0\,\mathrm{ms}$. Con l'asse $x$ orientato dal muro verso l'esterno, $v_1 = -30\,\mathrm{m/s}$ e $v_2 = 25\,\mathrm{m/s}$, quindi
$$
J_x = m\,(v_2 - v_1) = 0{,}058 \cdot 55\,\mathrm{kg\cdot m/s} \approx 3{,}2\,\mathrm{N\cdot s},
\qquad
F_m = \frac{J_x}{\Delta t} \approx 8{,}0 \cdot 10^{2}\,\mathrm{N} .
$$
La variazione di velocità è la somma dei due moduli, perché la velocità cambia verso. La forza media del muro è circa $1400$ volte il peso della palla, che vale $0{,}57\,\mathrm{N}$.
:::

:::osservazione{#forze-impulsive titolo="Forze impulsive"}
Si dicono **impulsive** le forze molto intense che agiscono per un tempo molto breve, come quelle di contatto in un urto. Durante un intervallo $\Delta t$ piccolo, una forza di modulo limitato, come il peso o l'attrito, produce un impulso di modulo al più $F_{\max}\,\Delta t$, che tende a zero con $\Delta t$; le forze impulsive invece producono un impulso finito. Perciò nell'intervallo dell'urto si possono trascurare tutte le forze non impulsive. Nell'esempio della palla da tennis l'impulso del peso durante il contatto vale $0{,}57 \cdot 0{,}004\,\mathrm{N\cdot s} \approx 2 \cdot 10^{-3}\,\mathrm{N\cdot s}$, contro $3{,}2\,\mathrm{N\cdot s}$ dell'impulso del muro.
:::

## Sistemi di punti e centro di massa

:::definizione{#sistema-di-punti titolo="Sistema di punti materiali"}
Un **sistema di punti materiali** è un insieme di $N$ punti $P_1, \dots, P_N$ con masse $m_1, \dots, m_N$, posizioni $\vec{r}_i$ e velocità $\vec{v}_i$; la **massa totale** è $M = m_1 + \dots + m_N$. Le forze che agiscono sul punto $P_i$ si dividono in **forze interne**, esercitate dagli altri punti del sistema, e **forze esterne**, esercitate da corpi che non fanno parte del sistema. La **quantità di moto totale** del sistema è
$$
\vec{P} = \sum_{i=1}^{N} m_i\,\vec{v}_i .
$$
La divisione tra interne ed esterne dipende dalla scelta del sistema; per esempio, per due carrelli che si urtano, la forza dell'uno sull'altro è interna se il sistema è formato da entrambi, esterna se il sistema è un carrello solo.
:::

:::definizione{#centro-di-massa titolo="Centro di massa"}
Il **centro di massa** di un sistema di punti è il punto di posizione
$$
\vec{r}_{cm} = \frac{1}{M} \sum_{i=1}^{N} m_i\,\vec{r}_i ,
$$
cioè, in componenti,
$$
x_{cm} = \frac{\sum_i m_i x_i}{M},
\qquad
y_{cm} = \frac{\sum_i m_i y_i}{M},
\qquad
z_{cm} = \frac{\sum_i m_i z_i}{M} .
$$
Ogni coordinata del centro di massa è la media delle coordinate dei punti, pesata con le masse; perciò il centro di massa è più vicino ai punti di massa maggiore. Per due punti sull'asse $x$ il centro di massa sta sul segmento che li unisce e divide il segmento in parti inversamente proporzionali alle masse.

::grafico{punti="1,1,pieno,m₁ = 2 kg;5,1,pieno,m₂ = 1 kg;3,5,pieno,m₃ = 1 kg;2.5,2,vuoto,CM" segmenti="1,1,5,1;5,1,3,5;3,5,1,1" xmin=-0.6 xmax=6.4 ymin=-0.6 ymax=5.8 uguale=1 titolo="Il centro di massa delle masse $m_1 = 2\,\mathrm{kg}$ in $(1, 1)$, $m_2 = 1\,\mathrm{kg}$ in $(5, 1)$, $m_3 = 1\,\mathrm{kg}$ in $(3, 5)$ ha $x_{cm} = \dfrac{2 + 5 + 3}{4} = 2{,}5\,\mathrm{m}$ e $y_{cm} = \dfrac{2 + 1 + 5}{4} = 2\,\mathrm{m}$, ed è più vicino alla massa maggiore"}

:::

:::definizione{#centro-di-massa-corpi-continui titolo="Centro di massa di un corpo continuo"}
Per un corpo esteso la somma diventa un integrale. Si divide il corpo in elementi di massa $dm$ e si pone
$$
\vec{r}_{cm} = \frac{1}{M} \int \vec{r}\,dm .
$$
Per un'asta disposta sull'asse $x$ tra $0$ e $L$, con densità lineare $\lambda(x)$, si ha $dm = \lambda(x)\,dx$, quindi
$$
x_{cm} = \frac{\displaystyle\int_0^L x\,\lambda(x)\,dx}{\displaystyle\int_0^L \lambda(x)\,dx} .
$$
Per un'asta omogenea, con $\lambda$ costante, risulta $x_{cm} = \dfrac{L}{2}$; per $\lambda(x) = kx$, con $k > 0$, il numeratore vale $\dfrac{kL^3}{3}$ e il denominatore $\dfrac{kL^2}{2}$, quindi $x_{cm} = \dfrac{2L}{3}$, spostato verso l'estremo più denso. Se un corpo omogeneo ha un centro o un asse di simmetria, il centro di massa sta su di esso, poiché gli elementi simmetrici danno contributi opposti alle coordinate misurate dal centro o dall'asse; il centro di massa di una sfera, di un disco o di un rettangolo omogenei è quindi il centro geometrico.
:::

::::teorema{#centro-di-massa-corpi-composti titolo="Centro di massa di un corpo composto"}
Sia un sistema diviso in due parti di masse $M_1$ e $M_2$, con centri di massa $\vec{r}_1$ e $\vec{r}_2$. Allora il centro di massa del sistema è
$$
\vec{r}_{cm} = \frac{M_1\,\vec{r}_1 + M_2\,\vec{r}_2}{M_1 + M_2} ,
$$
cioè si ottiene trattando ciascuna parte come un punto materiale posto nel suo centro di massa. La regola vale per un numero qualsiasi di parti e permette di calcolare il centro di massa di lastre a forma di L, di corpi con fori (togliendo la parte mancante con massa negativa) e di sistemi formati da aste e sfere.

::grafico{area="1;0;0;4|4;1;0;1" punti="2,0.5,pieno,C₁;0.5,2.5,pieno,C₂;1.357,1.357,vuoto,CM" segmenti="2,0.5,0.5,2.5" xmin=-0.6 xmax=4.6 ymin=-0.6 ymax=4.6 uguale=1 titolo="Lastra omogenea a L formata da un rettangolo $4 \times 1$ (centro $C_1$) e da un rettangolo $1 \times 3$ (centro $C_2$): il centro di massa sta sul segmento $C_1C_2$ e ha coordinate $x_{cm} = y_{cm} = \dfrac{4 \cdot 2 + 3 \cdot 0{,}5}{7} = \dfrac{19}{14}$"}

:::dimostrazione
Siano $I_1$ e $I_2$ gli insiemi degli indici dei punti delle due parti. Per la definizione di centro di massa di ciascuna parte si ha $\sum_{i \in I_1} m_i\,\vec{r}_i = M_1\,\vec{r}_1$ e $\sum_{i \in I_2} m_i\,\vec{r}_i = M_2\,\vec{r}_2$. Spezzando la somma che definisce $\vec{r}_{cm}$ nelle due parti si ottiene
$$
\vec{r}_{cm} = \frac{1}{M_1 + M_2}\left( \sum_{i \in I_1} m_i\,\vec{r}_i + \sum_{i \in I_2} m_i\,\vec{r}_i \right) = \frac{M_1\,\vec{r}_1 + M_2\,\vec{r}_2}{M_1 + M_2} .
$$
Per un corpo continuo la dimostrazione è la stessa, con gli integrali sulle due parti al posto delle somme.
:::
::::

## Moto del centro di massa

::::teorema{#quantita-di-moto-del-sistema titolo="Quantità di moto totale e velocità del centro di massa"}
Per un sistema di punti di massa totale $M$ costante, la velocità del centro di massa è $\vec{v}_{cm} = \dfrac{d\vec{r}_{cm}}{dt}$ e vale
$$
\vec{P} = M\,\vec{v}_{cm} .
$$
La quantità di moto totale del sistema è quindi quella di un unico punto di massa $M$ che si muove con il centro di massa. Per due carrelli di $2{,}0\,\mathrm{kg}$ e $1{,}0\,\mathrm{kg}$ con velocità $3{,}0\,\mathrm{m/s}$ e $0$ si ha $P = 6{,}0\,\mathrm{kg\cdot m/s}$, quindi $v_{cm} = 2{,}0\,\mathrm{m/s}$.

:::dimostrazione
Le masse sono costanti, quindi derivando rispetto al tempo la definizione $M\,\vec{r}_{cm} = \sum_i m_i\,\vec{r}_i$ si ottiene $M\,\vec{v}_{cm} = \sum_i m_i\,\vec{v}_i = \vec{P}$.
:::
::::

::::teorema{#moto-del-centro-di-massa titolo="Teorema del moto del centro di massa"}
Sia un sistema di punti di massa totale $M$ costante e sia $\vec{F}_{\mathrm{est}}$ la risultante delle sole forze esterne. Allora
$$
\frac{d\vec{P}}{dt} = \vec{F}_{\mathrm{est}},
\qquad\text{cioè}\qquad
M\,\vec{a}_{cm} = \vec{F}_{\mathrm{est}} .
$$
L'equazione è la **prima equazione cardinale** della dinamica dei sistemi. Il centro di massa si muove come un punto materiale di massa $M$ su cui agisce la risultante delle forze esterne, qualunque siano le forze interne. Per esempio, il centro di massa di un proiettile che esplode in volo continua a percorrere la parabola che avrebbe seguito senza l'esplosione, finché nessun frammento tocca terra, perché le forze dell'esplosione sono interne e la risultante delle forze esterne resta il peso totale $M\vec{g}$.

:::dimostrazione
Sia $\vec{F}_i$ la risultante delle forze esterne su $P_i$ e sia $\vec{F}_{ij}$ la forza che il punto $P_j$ esercita su $P_i$, con $j \neq i$. Il secondo principio applicato al punto $P_i$ dà
$$
m_i\,\vec{a}_i = \vec{F}_i + \sum_{j \neq i} \vec{F}_{ij} .
$$
Sommando su tutti gli indici $i$ si ottiene
$$
\sum_i m_i\,\vec{a}_i = \sum_i \vec{F}_i + \sum_i \sum_{j \neq i} \vec{F}_{ij} .
$$
Nella somma doppia le forze interne compaiono a coppie $\vec{F}_{ij} + \vec{F}_{ji}$, e per il **terzo principio della dinamica** $\vec{F}_{ji} = -\vec{F}_{ij}$, quindi ogni coppia ha somma nulla e la somma doppia vale $\vec{0}$. Il primo membro è la derivata di $\sum_i m_i\,\vec{v}_i = \vec{P}$, e il primo addendo del secondo membro è $\vec{F}_{\mathrm{est}}$. Perciò $\dfrac{d\vec{P}}{dt} = \vec{F}_{\mathrm{est}}$, e poiché $\vec{P} = M\,\vec{v}_{cm}$ con $M$ costante si ha $M\,\vec{a}_{cm} = \vec{F}_{\mathrm{est}}$.
:::
::::

:::richiamo{titolo="Terzo principio della dinamica"}
Se il corpo $A$ esercita sul corpo $B$ la forza $\vec{F}_{BA}$, allora $B$ esercita su $A$ la forza $\vec{F}_{AB} = -\vec{F}_{BA}$, con la stessa retta d'azione. Si rimanda all'argomento sulle leggi di Newton.
:::

:::esempio{titolo="Proiettile che esplode in volo"}
Un proiettile viene lanciato dal suolo e la sua traiettoria raggiungerebbe terra a distanza $R$ dal punto di lancio. Nel punto più alto esplode in due frammenti di uguale massa: il primo, subito dopo l'esplosione, ha velocità nulla e cade in verticale, quindi tocca terra a distanza $\dfrac{R}{2}$. Il secondo ha velocità orizzontale, quindi i due frammenti cadono dalla stessa quota con velocità verticale iniziale nulla e toccano terra nello stesso istante. In quell'istante il centro di massa, che segue la parabola originaria, si trova a distanza $R$; poiché le masse sono uguali, $R = \dfrac{1}{2}\left(\dfrac{R}{2} + x_2\right)$, perciò il secondo frammento tocca terra a $x_2 = \dfrac{3R}{2}$.

::grafico{curve="t,t-t^2/20,0,10;t,t-t^2/20,10,20;t,5-(t-10)^2/80,10,30" vettori="10,5,10,0.15" punti="10,5,pieno;10,0,vuoto,A;20,0,vuoto,CM;30,0,vuoto,B" xmin=-0.5 xmax=33 ymin=-0.6 ymax=7 titolo="Con $R = 20\,\mathrm{m}$ il frammento $A$ cade in verticale e tocca terra a $10\,\mathrm{m}$, il frammento $B$ tocca terra a $30\,\mathrm{m}$ e il centro di massa (curva tratteggiata) prosegue la parabola fino a $20\,\mathrm{m}$, punto medio tra $A$ e $B$"}

:::

## Conservazione della quantità di moto

::::teorema{#conservazione-quantita-di-moto titolo="Conservazione della quantità di moto"}
Sia un sistema di punti su cui la risultante delle forze esterne è nulla in ogni istante di un intervallo di tempo. Allora in quell'intervallo la quantità di moto totale è costante:
$$
\vec{P} = \sum_i m_i\,\vec{v}_i = \text{costante},
\qquad
\vec{v}_{cm} = \text{costante} .
$$
Un sistema su cui non agiscono forze esterne si dice **isolato**, e la conservazione vale in particolare per i sistemi isolati. La legge non richiede di conoscere le forze interne, che negli urti e nelle esplosioni sono complicate e ignote; basta uguagliare la quantità di moto totale prima e dopo l'interazione. Le forze interne possono dissipare energia, perciò l'energia cinetica totale può cambiare anche quando $\vec{P}$ si conserva.

:::dimostrazione
Per il **teorema del moto del centro di massa** $\dfrac{d\vec{P}}{dt} = \vec{F}_{\mathrm{est}} = \vec{0}$ in ogni istante dell'intervallo. Una funzione vettoriale con derivata nulla su un intervallo è costante, perché lo è ciascuna componente; quindi $\vec{P}$ è costante e, per $\vec{P} = M\,\vec{v}_{cm}$, anche $\vec{v}_{cm}$ è costante.
:::
::::

:::osservazione{#conservazione-per-componenti titolo="Conservazione di una sola componente"}
Se la risultante delle forze esterne ha componente nulla lungo una direzione fissa, per esempio $F_{\mathrm{est},x} = 0$, la prima equazione cardinale letta lungo $x$ dà $\dfrac{dP_x}{dt} = 0$, quindi si conserva la sola componente $P_x$. Su un piano orizzontale liscio, per esempio, il peso e la reazione normale sono verticali, quindi si conserva la componente orizzontale della quantità di moto, mentre quella verticale può cambiare. La conservazione vale anche in forma approssimata durante un urto o un'esplosione, perché le forze esterne non impulsive, come il peso, producono in quell'intervallo un impulso trascurabile; quindi $\vec{P}$ subito dopo è uguale a $\vec{P}$ subito prima.
:::

:::esempio{titolo="Rinculo"}
Un fucile di massa $M = 4{,}0\,\mathrm{kg}$, libero di muoversi, spara orizzontalmente un proiettile di massa $m = 10\,\mathrm{g}$ a $v = 400\,\mathrm{m/s}$. Prima dello sparo il sistema è fermo e le forze dei gas sono interne, quindi la componente orizzontale della quantità di moto resta nulla: $m\,v + M\,V = 0$, da cui
$$
V = -\frac{m}{M}\,v = -\frac{0{,}010}{4{,}0} \cdot 400\,\mathrm{m/s} = -1{,}0\,\mathrm{m/s} .
$$
Il segno meno indica che il fucile **rincula** in verso opposto al proiettile, con velocità tanto minore quanto maggiore è la sua massa.
:::

:::esempio{titolo="Persona su una barca"}
Una persona di massa $m = 70\,\mathrm{kg}$ cammina da un estremo all'altro di una barca di massa $M = 140\,\mathrm{kg}$ e lunghezza $L = 3{,}0\,\mathrm{m}$, inizialmente ferma; la resistenza orizzontale dell'acqua si trascura. Le forze esterne sono verticali e il sistema parte da fermo, quindi il centro di massa resta fermo in orizzontale. Se la barca si sposta di $d$ in un verso, la persona si sposta di $L - d$ rispetto all'acqua nel verso opposto, e la posizione del centro di massa non cambia se $m\,(L - d) - M\,d = 0$, cioè
$$
d = \frac{m\,L}{m + M} = \frac{70 \cdot 3{,}0}{210}\,\mathrm{m} = 1{,}0\,\mathrm{m} .
$$
:::

## Urti in una dimensione

:::definizione{#urto titolo="Urto"}
Un **urto** è un'interazione tra due corpi che dura un tempo molto breve, durante il quale i corpi si scambiano forze impulsive; si assume che nell'intervallo dell'urto le posizioni non cambino. Se le forze esterne non sono impulsive, la quantità di moto totale subito dopo l'urto è uguale a quella subito prima, per la **conservazione della quantità di moto** in forma approssimata. Fanno eccezione gli urti contro un vincolo fisso, come un muro o il pavimento, la cui reazione è impulsiva. In base all'energia cinetica gli urti si dividono in tre classi:

- **elastici**, se l'energia cinetica totale si conserva;
- **anelastici**, se l'energia cinetica totale diminuisce;
- **completamente anelastici**, se dopo l'urto i due corpi restano uniti e si muovono con la stessa velocità.

L'urto tra due palle da biliardo è con buona approssimazione elastico; un proiettile che si conficca in un blocco di legno dà un urto completamente anelastico.
:::

::::teorema{#urto-completamente-anelastico titolo="Urto completamente anelastico"}
Due corpi di masse $m_1$ e $m_2$ si muovono lungo una retta con velocità $v_1$ e $v_2$ (componenti con segno) e si urtano restando uniti, senza forze esterne impulsive. Allora la velocità comune dopo l'urto e la variazione dell'energia cinetica sono
$$
V = \frac{m_1 v_1 + m_2 v_2}{m_1 + m_2},
\qquad
\Delta K = -\frac{1}{2}\,\frac{m_1 m_2}{m_1 + m_2}\,(v_1 - v_2)^2 .
$$
La velocità $V$ è la velocità del centro di massa, che l'urto lascia invariata. L'energia cinetica diminuisce sempre, salvo il caso $v_1 = v_2$ in cui non c'è urto, e la perdita dipende solo dalla velocità relativa. Per $m_1 = 2{,}0\,\mathrm{kg}$ a $3{,}0\,\mathrm{m/s}$ contro $m_2 = 1{,}0\,\mathrm{kg}$ fermo si ottiene $V = 2{,}0\,\mathrm{m/s}$, e l'energia cinetica passa da $9{,}0\,\mathrm{J}$ a $6{,}0\,\mathrm{J}$, con $\Delta K = -3{,}0\,\mathrm{J}$.

:::dimostrazione
La conservazione della quantità di moto dà $m_1 v_1 + m_2 v_2 = (m_1 + m_2)\,V$, da cui la prima formula. Per la seconda si sostituisce $V$ nell'energia finale:
$$
\begin{aligned}
\Delta K &= \frac{(m_1 v_1 + m_2 v_2)^2}{2\,(m_1 + m_2)} - \frac{1}{2}\,m_1 v_1^2 - \frac{1}{2}\,m_2 v_2^2 \\[6pt]
&= \frac{m_1^2 v_1^2 + 2 m_1 m_2 v_1 v_2 + m_2^2 v_2^2 - (m_1 + m_2)(m_1 v_1^2 + m_2 v_2^2)}{2\,(m_1 + m_2)} \\[6pt]
&= \frac{-m_1 m_2\,(v_1^2 - 2 v_1 v_2 + v_2^2)}{2\,(m_1 + m_2)} = -\frac{1}{2}\,\frac{m_1 m_2}{m_1 + m_2}\,(v_1 - v_2)^2 .
\end{aligned}
$$
:::
::::

::::teorema{#pendolo-balistico titolo="Pendolo balistico"}
Un proiettile di massa $m$ e velocità orizzontale $v$ si conficca in un blocco di massa $M$ appeso a fili inestensibili e di massa trascurabile, fermo nella posizione di equilibrio; dopo l'urto il blocco con il proiettile sale fino a un'altezza massima $h$ rispetto alla posizione iniziale. Allora, trascurando gli attriti con l'aria,
$$
v = \frac{m + M}{m}\,\sqrt{2 g h} .
$$
Il pendolo balistico misura velocità grandi, come quella di un proiettile, attraverso un'altezza di pochi centimetri. Con $m = 10\,\mathrm{g}$, $M = 2{,}0\,\mathrm{kg}$ e $h = 5{,}0\,\mathrm{cm}$ si ottiene $v \approx 2{,}0 \cdot 10^{2}\,\mathrm{m/s}$; l'energia cinetica che resta dopo l'urto è la frazione $\dfrac{m}{m + M} \approx 0{,}5\,\%$ di quella del proiettile.

::grafico{curve="1+2.4*t,4.5-3.2*t,0,1;1+4*sin(t),4.5-4*cos(t),0,0.6435" vettori="-1.6,0.5,0.6,0.5,v" segmenti="1,4.5,1,0.5;1,0.5,3.4,0.5;3.4,0.5,3.4,1.3" punti="1,4.5,vuoto;1,0.5,pieno;3.4,1.3,pieno" etichette="3.55,0.8,h;1.15,0.05,M" xmin=-2 xmax=4.6 ymin=-0.4 ymax=5 uguale=1 titolo="Il proiettile si conficca nel blocco fermo (urto completamente anelastico), poi il sistema sale lungo l'arco tratteggiato fino all'altezza $h$ (conservazione dell'energia meccanica)"}

:::dimostrazione
Il moto si divide in due fasi con leggi diverse. Durante l'urto i fili sono verticali, quindi le forze esterne, cioè i pesi e le tensioni, non hanno componente orizzontale, e la componente orizzontale della quantità di moto si conserva: $m v = (m + M)\,V$. Poiché l'urto è **completamente anelastico**, in questa fase l'energia meccanica *non* si conserva. Dopo l'urto la tensione è perpendicolare alla velocità e non compie lavoro, e l'unica forza che compie lavoro è il peso, che è conservativo; perciò si conserva l'energia meccanica: $\dfrac{1}{2}\,(m + M)\,V^2 = (m + M)\,g h$, da cui $V = \sqrt{2 g h}$. Sostituendo nella prima relazione si ottiene $v = \dfrac{m + M}{m}\,\sqrt{2 g h}$.
:::
::::

:::richiamo{titolo="Conservazione dell'energia meccanica"}
Se le sole forze che compiono lavoro sono conservative, allora $K + U$ è costante durante il moto. Si rimanda all'argomento sul lavoro e l'energia.
:::

::::teorema{#urto-elastico titolo="Urto elastico in una dimensione"}
Due corpi di masse $m_1$ e $m_2$ si muovono lungo una retta con velocità $v_1$ e $v_2$ e si urtano elasticamente, senza forze esterne impulsive. Allora le velocità dopo l'urto sono
$$
v_1' = \frac{(m_1 - m_2)\,v_1 + 2 m_2 v_2}{m_1 + m_2},
\qquad
v_2' = \frac{(m_2 - m_1)\,v_2 + 2 m_1 v_1}{m_1 + m_2} ,
$$
e la velocità relativa cambia segno: $v_2' - v_1' = -(v_2 - v_1)$. Le formule danno direttamente le velocità finali; la relazione sulla velocità relativa, insieme alla conservazione della quantità di moto, forma un sistema lineare più semplice da risolvere a mano. Per $m_1 = 1{,}0\,\mathrm{kg}$ a $3{,}0\,\mathrm{m/s}$ contro $m_2 = 2{,}0\,\mathrm{kg}$ fermo si ottiene $v_1' = -1{,}0\,\mathrm{m/s}$ e $v_2' = 2{,}0\,\mathrm{m/s}$.

::grafico{f="min(3*x,8-x);x+4;max(6,2*x+2)" punti="2,6,pieno" etichette="4.7,2.0,corpo 1;3.3,11.6,corpo 2;4.9,8.0,CM" xmin=-0.3 xmax=5.6 ymin=-0.6 ymax=14 nomi="t,x" titolo="Leggi orarie nell'urto elastico tra $m_1 = 1\,\mathrm{kg}$ con $v_1 = 3\,\mathrm{m/s}$ e $m_2 = 2\,\mathrm{kg}$ fermo in $x = 6\,\mathrm{m}$; dopo l'urto $v_1' = -1\,\mathrm{m/s}$ e $v_2' = 2\,\mathrm{m/s}$, mentre il centro di massa (retta tratteggiata) si muove con velocità costante $v_{cm} = 1\,\mathrm{m/s}$"}

:::dimostrazione
La conservazione della quantità di moto e quella dell'energia cinetica, dopo aver raccolto i termini di ciascun corpo, si scrivono
$$
\begin{cases}
m_1\,(v_1 - v_1') = m_2\,(v_2' - v_2) \\[6pt]
m_1\,(v_1 - v_1')(v_1 + v_1') = m_2\,(v_2' - v_2)(v_2' + v_2)
\end{cases}
$$
dove la seconda equazione si ottiene da $m_1 v_1^2 + m_2 v_2^2 = m_1 v_1'^2 + m_2 v_2'^2$ moltiplicata per $\dfrac{1}{2}$ e scomponendo le differenze di quadrati. La soluzione $v_1' = v_1$, $v_2' = v_2$ corrisponde all'assenza di urto e si scarta; quindi $v_1' \neq v_1$, il primo membro della prima equazione è diverso da zero e si può dividere la seconda equazione per la prima, ottenendo $v_1 + v_1' = v_2' + v_2$, cioè $v_2' - v_1' = -(v_2 - v_1)$. Ricavando $v_2' = v_1 + v_1' - v_2$ e sostituendo nella prima equazione si ottiene $(m_1 + m_2)\,v_1' = (m_1 - m_2)\,v_1 + 2 m_2 v_2$, che è la formula di $v_1'$; quella di $v_2'$ segue scambiando gli indici.
:::
::::

:::osservazione{#casi-particolari-urto-elastico titolo="Casi particolari dell'urto elastico"}
Con il secondo corpo fermo, $v_2 = 0$, le formule danno $v_1' = \dfrac{m_1 - m_2}{m_1 + m_2}\,v_1$ e $v_2' = \dfrac{2 m_1}{m_1 + m_2}\,v_1$, e si distinguono tre situazioni.

- Masse uguali: $v_1' = 0$ e $v_2' = v_1$, quindi i corpi si scambiano le velocità, come nelle palline del pendolo di Newton.
- Bersaglio molto più pesante, $m_2 \gg m_1$: $v_1' \approx -v_1$ e $v_2' \approx 0$, quindi il corpo leggero rimbalza con velocità quasi invariata in modulo, come una palla contro un muro.
- Proiettile molto più pesante, $m_1 \gg m_2$: $v_1' \approx v_1$ e $v_2' \approx 2 v_1$, quindi il corpo pesante prosegue quasi indisturbato e quello leggero parte con velocità quasi doppia.
:::

:::osservazione{#coefficiente-di-restituzione titolo="Coefficiente di restituzione"}
Per un urto lungo una retta si definisce il **coefficiente di restituzione**
$$
e = -\frac{v_2' - v_1'}{v_2 - v_1} ,
$$
rapporto tra la velocità relativa di allontanamento e quella di avvicinamento. Vale $e = 1$ negli urti elastici, per la relazione sulla velocità relativa, ed $e = 0$ negli urti completamente anelastici, perché $v_1' = v_2'$; gli urti anelastici hanno $0 < e < 1$. Per una pallina che urta il pavimento fermo si ha $e = \dfrac{v'}{v}$, rapporto tra i moduli delle velocità dopo e prima dell'urto; se la pallina cade da un'altezza $h$ e rimbalza fino a $h'$, la conservazione dell'energia meccanica nel volo dà $e = \sqrt{\dfrac{h'}{h}}$.
:::

## Urti in due dimensioni

:::osservazione{#urti-nel-piano titolo="Urti nel piano"}
Quando le velocità non stanno su una stessa retta, la conservazione della quantità di moto è un'uguaglianza tra vettori, e nel piano equivale a due equazioni scalari:
$$
\begin{cases}
m_1 v_{1x} + m_2 v_{2x} = m_1 v_{1x}' + m_2 v_{2x}' \\[6pt]
m_1 v_{1y} + m_2 v_{2y} = m_1 v_{1y}' + m_2 v_{2y}'
\end{cases}
$$
In un urto completamente anelastico le incognite sono le due componenti della velocità comune, quindi il sistema le determina. In un urto elastico le incognite sono quattro, le componenti di $\vec{v}_1'$ e di $\vec{v}_2'$, mentre le equazioni sono tre, le due componenti della quantità di moto e la conservazione dell'energia cinetica; perciò serve un dato in più, di solito la direzione di uno dei due corpi dopo l'urto, che dipende dal punto in cui i corpi si toccano.
:::

::::teorema{#urto-elastico-masse-uguali titolo="Urto elastico obliquo tra masse uguali"}
Un corpo di massa $m$ con velocità $\vec{v}_1$ urta elasticamente un corpo di uguale massa fermo, senza forze esterne impulsive. Allora, se dopo l'urto entrambi i corpi si muovono, le loro velocità sono perpendicolari:
$$
\vec{v}_1' \cdot \vec{v}_2' = 0 .
$$
Le velocità $\vec{v}_1'$ e $\vec{v}_2'$ sono quindi i cateti di un triangolo rettangolo con ipotenusa $\vec{v}_1$. Se il primo corpo devia di un angolo $\theta$, si ha $v_1' = v_1 \cos\theta$ e $v_2' = v_1 \sin\theta$, e il secondo corpo parte a un angolo $\dfrac{\pi}{2} - \theta$ dall'altra parte della direzione iniziale. Le palle da biliardo dopo un colpo di striscio si separano con buona approssimazione ad angolo retto.

::grafico{vettori="0,0,4,0,v₁;0,0,1,1.732,v₁';0,0,3,-1.732,v₂'" segmenti="1,1.732,4,0" xmin=-0.6 xmax=4.8 ymin=-2.2 ymax=2.4 uguale=1 titolo="Con $v_1 = 4\,\mathrm{m/s}$ e deviazione $\theta = 60^\circ$ si ha $v_1' = 2\,\mathrm{m/s}$ e $v_2' = 2\sqrt{3}\,\mathrm{m/s}$ a $30^\circ$ dall'altra parte; il segmento tratteggiato è $\vec{v}_2'$ applicato nella punta di $\vec{v}_1'$, e $\vec{v}_1' + \vec{v}_2' = \vec{v}_1$"}

:::dimostrazione
Le masse sono uguali, quindi dividendo per $m$ la conservazione della quantità di moto e quella dell'energia cinetica si ottiene
$$
\begin{cases}
\vec{v}_1 = \vec{v}_1' + \vec{v}_2' \\[6pt]
v_1^2 = v_1'^2 + v_2'^2
\end{cases}
$$
Facendo il prodotto scalare della prima equazione con sé stessa si ha $v_1^2 = v_1'^2 + v_2'^2 + 2\,\vec{v}_1' \cdot \vec{v}_2'$, e confrontando con la seconda equazione si ottiene $\vec{v}_1' \cdot \vec{v}_2' = 0$. Poiché i due vettori sono non nulli, sono perpendicolari.
:::
::::

## Teorema di König

:::definizione{#sistema-del-centro-di-massa titolo="Sistema del centro di massa"}
Il **sistema del centro di massa** è il sistema di riferimento con origine nel centro di massa e assi paralleli a quelli di un sistema inerziale; si muove di moto traslatorio con velocità $\vec{v}_{cm}$. Per le trasformazioni di Galileo, alle quali si rimanda nell'argomento sul moto nel piano, la velocità del punto $P_i$ in questo sistema è
$$
\vec{v}_i^{\,*} = \vec{v}_i - \vec{v}_{cm} .
$$
Nel sistema del centro di massa la quantità di moto totale è nulla, poiché $\sum_i m_i\,\vec{v}_i^{\,*} = \vec{P} - M\,\vec{v}_{cm} = \vec{0}$. Per questo gli urti si descrivono in modo semplice nel sistema del centro di massa; in particolare, in un urto elastico in una dimensione ogni corpo inverte la propria velocità $\vec{v}_i^{\,*}$ senza cambiarne il modulo.
:::

::::teorema{#teorema-di-konig titolo="Teorema di König per l'energia cinetica"}
Sia un sistema di punti di massa totale $M$, con centro di massa che si muove con velocità $\vec{v}_{cm}$. Allora l'energia cinetica del sistema è
$$
K = \frac{1}{2}\,M v_{cm}^2 + K^{*},
\qquad
K^{*} = \sum_i \frac{1}{2}\,m_i\,(v_i^{*})^2 ,
$$
dove $K^{*}$ è l'energia cinetica calcolata nel sistema del centro di massa. L'energia cinetica si divide in una parte dovuta al moto d'insieme, come se tutta la massa fosse concentrata nel centro di massa, e in una parte dovuta al moto relativo al centro di massa. Il teorema si usa anche per il corpo rigido, dove $K^{*}$ è l'energia cinetica di rotazione, e si rimanda all'argomento sulla dinamica del corpo rigido.

:::dimostrazione
Si sostituisce $\vec{v}_i = \vec{v}_{cm} + \vec{v}_i^{\,*}$ in $K = \sum_i \dfrac{1}{2}\,m_i\,\vec{v}_i \cdot \vec{v}_i$ e si sviluppa il prodotto scalare:
$$
\begin{aligned}
K &= \sum_i \frac{1}{2}\,m_i\,\big( v_{cm}^2 + 2\,\vec{v}_{cm} \cdot \vec{v}_i^{\,*} + (v_i^{*})^2 \big) \\[6pt]
&= \frac{1}{2}\,M v_{cm}^2 + \vec{v}_{cm} \cdot \sum_i m_i\,\vec{v}_i^{\,*} + K^{*} .
\end{aligned}
$$
La somma $\sum_i m_i\,\vec{v}_i^{\,*}$ è la quantità di moto totale nel sistema del centro di massa, che è nulla, quindi il termine centrale vale zero e resta la tesi.
:::
::::

:::osservazione{#energia-disponibile-negli-urti titolo="Energia dissipabile in un urto"}
In un urto senza forze esterne impulsive $\vec{v}_{cm}$ non cambia, quindi per il teorema di König il termine $\dfrac{1}{2}\,M v_{cm}^2$ è lo stesso prima e dopo l'urto, e l'urto può modificare solo $K^{*}$. Nell'urto completamente anelastico i corpi restano uniti e fermi rispetto al centro di massa, quindi $K^{*}$ dopo l'urto è nulla; perciò l'energia dissipata è tutta la $K^{*}$ iniziale, ed è la massima perdita possibile. Per due corpi si ottiene
$$
K^{*} = \frac{1}{2}\,\mu\,(v_1 - v_2)^2,
\qquad
\mu = \frac{m_1 m_2}{m_1 + m_2} ,
$$
dove $\mu$ si chiama **massa ridotta**; la formula coincide con la perdita di energia dell'urto completamente anelastico. Per $m_1 = 1{,}0\,\mathrm{kg}$ a $3{,}0\,\mathrm{m/s}$ e $m_2 = 2{,}0\,\mathrm{kg}$ fermo si ha $K = 4{,}5\,\mathrm{J}$, $v_{cm} = 1{,}0\,\mathrm{m/s}$ e $\dfrac{1}{2}\,M v_{cm}^2 = 1{,}5\,\mathrm{J}$, quindi $K^{*} = 3{,}0\,\mathrm{J}$.
:::

## Sistemi a massa variabile e razzo

::::teorema{#sistemi-a-massa-variabile titolo="Equazione dei sistemi a massa variabile"}
Un corpo di massa $M(t)$ si muove con velocità $\vec{v}$ e in ogni intervallo $dt$ acquista o perde la massa $|dM|$, che ha velocità $\vec{u}$ relativa al corpo. Sia $\vec{F}_{\mathrm{est}}$ la risultante delle forze esterne sul corpo. Allora
$$
M\,\frac{d\vec{v}}{dt} = \vec{F}_{\mathrm{est}} + \vec{u}\,\frac{dM}{dt} .
$$
Il termine $\vec{u}\,\dfrac{dM}{dt}$ ha le dimensioni di una forza e si chiama **spinta**. In un razzo i gas escono all'indietro con velocità relativa di modulo $u$, mentre $\dfrac{dM}{dt} < 0$, quindi la spinta è in avanti e ha modulo $u\,\left|\dfrac{dM}{dt}\right|$. Un vagone che riceve sabbia caduta in verticale ha $\dfrac{dM}{dt} > 0$ e $\vec{u} = -\vec{v}$, quindi per mantenerlo a velocità costante serve una forza esterna $\vec{v}\,\dfrac{dM}{dt}$.

:::dimostrazione
Si applica il **teorema dell'impulso** al sistema formato dal corpo e dalla massa $|dM|$ scambiata nell'intervallo $dt$; le forze tra il corpo e quella massa sono interne. Nel caso in cui il corpo acquista massa ($dM > 0$), all'istante $t$ la quantità di moto del sistema è $M\vec{v} + dM\,(\vec{v} + \vec{u})$, all'istante $t + dt$ è $(M + dM)(\vec{v} + d\vec{v})$. Trascurando il prodotto $dM\,d\vec{v}$, che è un infinitesimo di ordine superiore, la variazione è
$$
(M + dM)(\vec{v} + d\vec{v}) - M\vec{v} - dM\,(\vec{v} + \vec{u}) = M\,d\vec{v} - \vec{u}\,dM ,
$$
e per il teorema dell'impulso è uguale a $\vec{F}_{\mathrm{est}}\,dt$. Nel caso in cui il corpo perde massa ($dM < 0$), all'istante $t$ la quantità di moto è $M\vec{v}$ e all'istante $t + dt$ è $(M + dM)(\vec{v} + d\vec{v}) + (-dM)(\vec{v} + \vec{u})$, e la variazione ha la stessa espressione $M\,d\vec{v} - \vec{u}\,dM$. In entrambi i casi, dividendo per $dt$, si ottiene la tesi.
:::
::::

::::teorema{#equazione-del-razzo titolo="Equazione del razzo"}
Un razzo espelle gas con velocità relativa di modulo costante $u$, diretta in verso opposto al moto, e non è soggetto a forze esterne. Allora, se la massa passa da $M_i$ a $M_f$, la velocità passa da $v_i$ a
$$
v_f = v_i + u \ln \frac{M_i}{M_f} .
$$
L'aumento di velocità dipende solo dalla velocità di espulsione e dal rapporto tra le masse, e il rapporto necessario cresce in modo esponenziale con la velocità richiesta, poiché $\dfrac{M_i}{M_f} = \exp\left(\dfrac{v_f - v_i}{u}\right)$. Con $u = 2{,}5\,\mathrm{km/s}$ e $\dfrac{M_i}{M_f} = 4$ si ottiene $v_f - v_i = 2{,}5 \ln 4\,\mathrm{km/s} \approx 3{,}5\,\mathrm{km/s}$; per raddoppiare questo valore il rapporto tra le masse deve passare da $4$ a $16$. In presenza del peso, per un lancio verticale si aggiunge il termine $-g\,t$, dove $t$ è la durata della combustione.

:::dimostrazione
Lungo la direzione del moto l'**equazione dei sistemi a massa variabile** con $\vec{F}_{\mathrm{est}} = \vec{0}$ e $u_x = -u$ dà $M\,\dfrac{dv}{dt} = -u\,\dfrac{dM}{dt}$. Dividendo per $M$ e integrando nel tempo dall'istante iniziale a quello finale si ottiene
$$
v_f - v_i = -u \int_{M_i}^{M_f} \frac{dM}{M} = -u\,(\ln M_f - \ln M_i) = u \ln \frac{M_i}{M_f} .
$$
:::
::::

:::richiamo{titolo="Integrale di una funzione e cambio di variabile"}
Una primitiva di $\dfrac{1}{x}$ per $x > 0$ è $\ln x$; inoltre, con il cambio di variabile $M = M(t)$, si ha $\displaystyle\int_{t_1}^{t_2} \frac{1}{M(t)}\,\frac{dM}{dt}\,dt = \int_{M(t_1)}^{M(t_2)} \frac{dM}{M}$. Si rimanda all'argomento di Analisi 1 sul calcolo integrale.
:::
