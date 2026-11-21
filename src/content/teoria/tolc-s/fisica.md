---
titolo: "Fisica per il TOLC-S"
sommario: "Misure, moti, forze, energia, fluidi, calore, onde, ottica ed elettromagnetismo con modelli, esempi e grafici e fisica moderna."
---

## Misure, unità e vettori

:::definizione{#misure titolo="Grandezza e unità di misura"}
Una **grandezza fisica** è una proprietà che si misura, come una lunghezza, una massa o una durata. Misurarla significa confrontarla con un campione, l'**unità di misura**: la misura $2\,\mathrm{m}$ indica che la lunghezza contiene due volte il metro. Le unità usate in fisica sono quelle del **Sistema Internazionale** (SI). Qui servono il metro ($\mathrm{m}$) per la lunghezza, il chilogrammo ($\mathrm{kg}$) per la massa, il secondo ($\mathrm{s}$) per il tempo, il kelvin ($\mathrm{K}$) per la temperatura e l'ampere ($\mathrm{A}$) per la corrente elettrica. Le altre unità sono loro prodotti e rapporti, come il metro al secondo per la velocità.

Un **prefisso** moltiplica l'unità per una potenza di dieci: chilo ($\mathrm{k}$) per $10^{3}$, centi ($\mathrm{c}$) per $10^{-2}$, milli ($\mathrm{m}$) per $10^{-3}$. Una **conversione** cambia insieme il numero e l'unità e lascia invariata la grandezza, come in $1{,}5\,\mathrm{km}=1500\,\mathrm{m}$. In un'area o in un volume l'unità è elevata al quadrato o al cubo, e così il fattore di conversione:
$$
1\,\mathrm{cm^2}=(10^{-2}\,\mathrm{m})^2=10^{-4}\,\mathrm{m^2},\qquad
1\,\mathrm{cm^3}=(10^{-2}\,\mathrm{m})^3=10^{-6}\,\mathrm{m^3}.
$$
Un litro è $1\,\mathrm{L}=1000\,\mathrm{cm^3}=10^{-3}\,\mathrm{m^3}$, quindi mezzo litro occupa $5\cdot10^{-4}\,\mathrm{m^3}$.
:::

:::esempio{titolo="Una conversione di velocità"}
Un'automobile viaggia a $72\,\mathrm{km/h}$. Un chilometro è $1000\,\mathrm{m}$ e un'ora è $3600\,\mathrm{s}$, quindi
$$
72\,\frac{\mathrm{km}}{\mathrm{h}}
=72\,\frac{1000\,\mathrm{m}}{3600\,\mathrm{s}}
=20\,\mathrm{m/s}.
$$
Il rapporto fra una lunghezza e un tempo ha l'unità di una velocità. Una formula corretta è **dimensionalmente coerente**, cioè somma e uguaglia soltanto grandezze con la stessa unità: una velocità e una distanza non si sommano.
:::

:::definizione{#vettori titolo="Scalari e vettori"}
Una grandezza **scalare** è descritta per intero da un numero con la sua unità: sono scalari la massa, la temperatura e l'energia. Un **vettore**, come lo spostamento, la velocità o la forza, ha tre elementi.

- Il **modulo** è il valore con l'unità, positivo o nullo.
- La **direzione** è la retta lungo cui il vettore è disposto.
- Il **verso** è uno dei due sensi di percorrenza di quella retta.

Un vettore si disegna come una freccia e si scrive $\vec F$; la lettera senza freccia, $F$, indica il modulo.

Un **asse orientato** è una retta con un verso positivo. La **componente** lungo l'asse di un vettore parallelo all'asse è il modulo con il segno $+$ se il vettore ha il verso dell'asse, con il segno $-$ se ha il verso opposto. Vettori sulla stessa retta si sommano sommando le componenti: uno spostamento di $10\,\mathrm{m}$ verso est e uno di $4\,\mathrm{m}$ verso ovest equivalgono a $10\,\mathrm{m}-4\,\mathrm{m}=6\,\mathrm{m}$ verso est. Due vettori perpendicolari di moduli $F_x$ e $F_y$ sono i cateti di un triangolo rettangolo e la loro somma è l'ipotenusa, di modulo $\sqrt{F_x^2+F_y^2}$: $3\,\mathrm{m}$ verso est e $4\,\mathrm{m}$ verso nord portano a $\sqrt{3^2+4^2}\,\mathrm{m}=5\,\mathrm{m}$ dalla partenza.

Il **prodotto scalare** è il numero $\vec F\cdot\vec s=Fs\cos\theta$, dove $\theta$ (theta) è l'angolo fra i due vettori e $F\cos\theta$ è la componente di $\vec F$ lungo $\vec s$. Serve a definire il lavoro.
:::

:::osservazione
Ogni misura ha un'**incertezza**. La scrittura $L=(12{,}0\pm0{,}2)\,\mathrm{cm}$, dove $\pm$ si legge «più o meno», indica una lunghezza fra $11{,}8\,\mathrm{cm}$ e $12{,}2\,\mathrm{cm}$. L'**incertezza relativa** è il rapporto fra l'incertezza e il valore misurato, $\dfrac{0{,}2\,\mathrm{cm}}{12{,}0\,\mathrm{cm}}\approx0{,}017$, cioè circa l'$1{,}7\%$; $\approx$ si legge «circa uguale a». Le cifre scritte indicano la precisione: $12{,}0\,\mathrm{cm}$ è una lettura al decimo di centimetro, e scrivere $12{,}00\,\mathrm{cm}$ dichiarerebbe una precisione al centesimo che la misura non ha.

Gli **errori casuali** spostano le letture ripetute a volte in più e a volte in meno, quindi la media ne riduce l'effetto. Un **errore sistematico**, come quello di una bilancia tarata male, sposta tutte le letture dalla stessa parte e resta nella media.
:::

## Posizione, velocità e accelerazione

:::definizione{#cinematica titolo="Spostamento e velocità media"}
Un moto lungo una retta si descrive fissando sulla retta un asse orientato e un'**origine**. La **posizione** $x$ è la distanza del corpo dall'origine, in metri, con il segno $+$ dalla parte verso cui punta l'asse e $-$ dall'altra; $x(t)$ è la posizione all'istante $t$.

La lettera $\Delta$ (delta) davanti a una grandezza ne indica la variazione, cioè il valore finale meno quello iniziale. Lo **spostamento** è $\Delta x=x_f-x_i$, positivo se il corpo si è mosso nel verso dell'asse e negativo nel caso contrario. La **distanza percorsa** è la lunghezza di tutto il tragitto ed è positiva o nulla. La **velocità media** è lo spostamento diviso per l'intervallo di tempo $\Delta t$ in cui avviene,
$$
v_m=\frac{\Delta x}{\Delta t},
$$
e si misura in metri al secondo. La velocità a un istante è la velocità media su un intervallo brevissimo attorno a quell'istante.

Un corpo che parte da $2\,\mathrm{m}$, arriva a $10\,\mathrm{m}$ e torna a $6\,\mathrm{m}$ in $4\,\mathrm{s}$ ha spostamento $6\,\mathrm{m}-2\,\mathrm{m}=4\,\mathrm{m}$, distanza percorsa $8\,\mathrm{m}+4\,\mathrm{m}=12\,\mathrm{m}$ e velocità media $\dfrac{4\,\mathrm{m}}{4\,\mathrm{s}}=1\,\mathrm{m/s}$. Chi compie un giro e torna alla partenza ha spostamento nullo, anche se ha percorso una distanza positiva.

Nel **grafico posizione-tempo**, con $t$ in orizzontale e $x$ in verticale, la velocità media fra due istanti è la pendenza del segmento che unisce i due punti. Una retta in salita rappresenta una velocità costante e positiva, cioè un **moto rettilineo uniforme**; una retta orizzontale rappresenta un corpo fermo. Dove i grafici di due corpi si incontrano, i corpi hanno la stessa posizione nello stesso istante.
:::

:::teorema{#moto-uniformemente-accelerato titolo="Moto con accelerazione costante"}
L'**accelerazione** è la variazione della velocità divisa per l'intervallo di tempo in cui avviene, $a=\dfrac{\Delta v}{\Delta t}$. Si misura in $\mathrm{m/s^2}$: con $a=2\,\mathrm{m/s^2}$ la velocità aumenta di $2\,\mathrm{m/s}$ a ogni secondo. Se $a$ è costante e $x_0$, $v_0$ sono posizione e velocità all'istante $t=0$, allora
$$
v=v_0+at,\qquad x=x_0+v_0t+\frac12at^2.
$$
Eliminando il tempo fra le due leggi si ottiene $v^2-v_0^2=2a(x-x_0)$. Le grandezze sono componenti lungo lo stesso asse, quindi hanno un segno. Se velocità e accelerazione hanno lo stesso segno il corpo diventa più veloce; se hanno segni opposti rallenta fino a fermarsi e poi, se l'accelerazione continua ad agire, riparte nel verso opposto.

Un'automobile che viaggia a $v_0=20\,\mathrm{m/s}$ e frena con $a=-4\,\mathrm{m/s^2}$ si ferma, cioè raggiunge $v=0$, dopo $t=\dfrac{20\,\mathrm{m/s}}{4\,\mathrm{m/s^2}}=5\,\mathrm{s}$. Nella frenata percorre $x-x_0=\dfrac{0-(20\,\mathrm{m/s})^2}{2\cdot(-4\,\mathrm{m/s^2})}=50\,\mathrm{m}$.
:::

:::esempio{titolo="Dal grafico velocità-tempo alla distanza"}
Un corpo parte da fermo, quindi $v_0=0$, e ha accelerazione $2\,\mathrm{m/s^2}$ per $3\,\mathrm{s}$. La velocità finale è $2\,\mathrm{m/s^2}\cdot3\,\mathrm{s}=6\,\mathrm{m/s}$ e lo spostamento è $\dfrac12\cdot2\,\mathrm{m/s^2}\cdot(3\,\mathrm{s})^2=9\,\mathrm{m}$. Nel grafico velocità-tempo lo spostamento è l'area fra il grafico e l'asse dei tempi, qui un triangolo di base $3\,\mathrm{s}$ e altezza $6\,\mathrm{m/s}$, di area $\dfrac12\cdot3\,\mathrm{s}\cdot6\,\mathrm{m/s}=9\,\mathrm{m}$. Il prodotto della velocità finale per il tempo, $18\,\mathrm{m}$, è il doppio dello spostamento, perché il corpo raggiunge $6\,\mathrm{m/s}$ soltanto alla fine.

::grafico{f="2*x" xmin=0 xmax=3.5 ymin=0 ymax=7 nomi="t,v" area="2*x;0;0;3" punti="3,6,pieno" legenda="v=2t" titolo="Tempo in secondi, velocità in m/s: l’area è lo spostamento di 9 m"}
:::

:::osservazione
Vicino alla superficie terrestre, se la resistenza dell'aria è trascurabile, tutti i corpi cadono con la stessa accelerazione, diretta verso il basso. È l'**accelerazione di gravità** $g\approx9{,}8\,\mathrm{m/s^2}$; nei conti rapidi si usa $10\,\mathrm{m/s^2}$. Con l'asse verticale orientato verso l'alto si ha $a=-g$, sia mentre il corpo sale sia mentre scende.

Un sasso lanciato verso l'alto a $20\,\mathrm{m/s}$ ha $v=20\,\mathrm{m/s}-10\,\mathrm{m/s^2}\cdot t$, quindi si ferma dopo $2\,\mathrm{s}$, alla quota $20\,\mathrm{m/s}\cdot2\,\mathrm{s}-\dfrac12\cdot10\,\mathrm{m/s^2}\cdot(2\,\mathrm{s})^2=20\,\mathrm{m}$. Nel punto più alto la velocità è nulla per un istante, mentre l'accelerazione vale ancora $-g$.
:::

## Forze, equilibrio e moto circolare

:::teorema{#dinamica titolo="Le leggi di Newton"}
Una **forza** è un'azione, come una spinta o una trazione, che un corpo esercita su un altro e che ne cambia la velocità o lo deforma. È un vettore e si misura in newton ($\mathrm{N}$). La **massa** $m$, in chilogrammi, misura quanto un corpo si oppone alle variazioni di velocità. La **risultante** $\sum\vec F$ è la somma vettoriale di tutte le forze applicate a un corpo; $\sum$ si legge «somma di». Le leggi di Newton valgono per un osservatore che non accelera, detto **riferimento inerziale**; con buona approssimazione lo è un osservatore fermo rispetto al suolo.

- **Prima legge.** Se la risultante è nulla, la velocità del corpo resta costante, cioè il corpo resta fermo oppure prosegue in linea retta con la stessa velocità.
- **Seconda legge.** Per un corpo di massa costante vale $\sum\vec F=m\vec a$, quindi l'accelerazione ha la direzione e il verso della risultante. La legge si scrive separatamente lungo ciascun asse. Ne segue che $1\,\mathrm{N}=1\,\mathrm{kg\,m/s^2}$.
- **Terza legge.** Se un corpo A esercita una forza su un corpo B, allora B esercita su A una forza di uguale modulo e verso opposto. Le due forze, dette azione e reazione, agiscono su corpi diversi.

Una cassa di $4\,\mathrm{kg}$ tirata verso destra con $18\,\mathrm{N}$ e frenata da una forza di attrito di $6\,\mathrm{N}$, opposta al moto, ha risultante $18\,\mathrm{N}-6\,\mathrm{N}=12\,\mathrm{N}$, non $18\,\mathrm{N}$, e accelerazione $\dfrac{12\,\mathrm{N}}{4\,\mathrm{kg}}=3\,\mathrm{m/s^2}$ verso destra. Su un libro fermo su un tavolo agiscono il peso e la forza del tavolo, che si equilibrano; la reazione al peso è invece la forza con cui il libro attira la Terra.
:::

:::definizione{#forze-usuali titolo="Peso, elasticità e attrito"}
- Il **peso** è la forza con cui la Terra attira un corpo, diretta verso il basso e di modulo $P=mg$. Un corpo di $2\,\mathrm{kg}$ pesa $2\,\mathrm{kg}\cdot10\,\mathrm{m/s^2}=20\,\mathrm{N}$ sulla Terra; sulla Luna, dove $g\approx1{,}6\,\mathrm{m/s^2}$, ha la stessa massa e pesa $3{,}2\,\mathrm{N}$.
- La **forza elastica** di una molla allungata o accorciata di $x$ è diretta verso la posizione di riposo e ha modulo $k|x|$. Le barre indicano il valore assoluto e $k$ è la **costante elastica**, in $\mathrm{N/m}$: con $k=200\,\mathrm{N/m}$ e $x=0{,}05\,\mathrm{m}$ la forza è $200\,\mathrm{N/m}\cdot0{,}05\,\mathrm{m}=10\,\mathrm{N}$.
- La **reazione normale** $N$ è la forza, perpendicolare alla superficie, con cui un piano sostiene il corpo appoggiato. Su un piano orizzontale, senza altre forze verticali, $N=mg$.
- L'**attrito** è la forza parallela alla superficie di contatto che si oppone allo scorrimento. Su un corpo fermo l'attrito statico è uguale alla forza che tende a muoverlo, fino al valore massimo $\mu_sN$, cioè $F_s\leq\mu_sN$. Su un corpo che scorre l'attrito dinamico vale $F_d=\mu_dN$ ed è opposto alla velocità. I coefficienti $\mu_s$ e $\mu_d$ (mu) sono numeri senza unità.

Una cassa di $5\,\mathrm{kg}$ su un pavimento con $\mu_s=0{,}4$ ha $N=5\,\mathrm{kg}\cdot10\,\mathrm{m/s^2}=50\,\mathrm{N}$ e attrito statico massimo $0{,}4\cdot50\,\mathrm{N}=20\,\mathrm{N}$. Spinta con $8\,\mathrm{N}$ resta ferma, e l'attrito vale $8\,\mathrm{N}$.

Il **momento** di una forza rispetto a un punto misura il suo effetto di rotazione e ha modulo $Fb$, dove il braccio $b$ è la distanza del punto dalla retta lungo cui la forza agisce. Un corpo esteso è in equilibrio se sono nulle la risultante e la somma dei momenti, presi con segni opposti se producono rotazioni opposte. Su un'altalena, $300\,\mathrm{N}$ a $2\,\mathrm{m}$ dal perno equilibrano $400\,\mathrm{N}$ a $1{,}5\,\mathrm{m}$ dall'altra parte, perché $300\,\mathrm{N}\cdot2\,\mathrm{m}=400\,\mathrm{N}\cdot1{,}5\,\mathrm{m}=600\,\mathrm{N\,m}$.
:::

:::definizione{#moto-circolare titolo="Accelerazione centripeta"}
Nel **moto circolare uniforme** un corpo percorre una circonferenza di raggio $r$ con velocità di modulo costante $v$. Il **periodo** $T$ è il tempo di un giro; la **frequenza** $f$ è il numero di giri al secondo, in hertz ($1\,\mathrm{Hz}=1\,\mathrm{s^{-1}}$). La velocità è tangente alla circonferenza e cambia direzione continuamente, quindi il corpo ha un'accelerazione, diretta verso il centro e detta **accelerazione centripeta** $a_c$. Valgono
$$
v=\frac{2\pi r}{T},\qquad f=\frac1T,\qquad a_c=\frac{v^2}{r}.
$$
Per la seconda legge di Newton la risultante è diretta verso il centro e vale $\dfrac{mv^2}{r}$: è la **forza centripeta**, fornita per esempio dalla tensione di un filo, dall'attrito in una curva o dalla gravitazione. Un sasso di $0{,}5\,\mathrm{kg}$ che percorre in $4\,\mathrm{s}$ una circonferenza di raggio $2\,\mathrm{m}$ ha $f=\dfrac1{4\,\mathrm{s}}=0{,}25\,\mathrm{Hz}$, $v=\dfrac{2\pi\cdot2\,\mathrm{m}}{4\,\mathrm{s}}\approx3{,}14\,\mathrm{m/s}$ e $a_c=\dfrac{(3{,}14\,\mathrm{m/s})^2}{2\,\mathrm{m}}\approx4{,}9\,\mathrm{m/s^2}$; il filo esercita la forza $0{,}5\,\mathrm{kg}\cdot4{,}9\,\mathrm{m/s^2}\approx2{,}5\,\mathrm{N}$.

Nel grafico, nel punto P, la velocità $v$ e l'accelerazione $a$ sono perpendicolari.

::grafico{curve="2*cos(t),2*sin(t),0,6.283185" xmin=-3 xmax=4 ymin=-3 ymax=4 uguale=1 vettori="2,0,2,2,v;2,0,0.5,0,a" punti="2,0,pieno,P" legenda="x^2+y^2=4" titolo="Nel punto P la velocità v è tangente e l'accelerazione a è centripeta"}
:::

## Lavoro, energia e quantità di moto

:::definizione{#energia titolo="Lavoro ed energia cinetica"}
Il **lavoro** di una forza costante $\vec F$ su un corpo che si sposta di $\vec s$ è
$$
W=Fs\cos\theta,
$$
dove $\theta$ è l'angolo fra la forza e lo spostamento. È il prodotto dello spostamento per la componente $F\cos\theta$ della forza lungo di esso, e si misura in joule, $1\,\mathrm{J}=1\,\mathrm{N\,m}$. Il lavoro è positivo se la forza è concorde con lo spostamento ($\cos0^\circ=1$), nullo se è perpendicolare ($\cos90^\circ=0$), negativo se è opposta ($\cos180^\circ=-1$), come per l'attrito. Una forza di $10\,\mathrm{N}$ a $60^\circ$ da uno spostamento di $4\,\mathrm{m}$ compie $10\,\mathrm{N}\cdot4\,\mathrm{m}\cdot\cos60^\circ=40\,\mathrm{J}\cdot\dfrac12=20\,\mathrm{J}$, perché la componente lungo lo spostamento è $5\,\mathrm{N}$.

L'**energia** è la capacità di compiere lavoro e si misura in joule. L'**energia cinetica** è l'energia di un corpo in moto, $K=\dfrac12mv^2$: un corpo di $2\,\mathrm{kg}$ a $3\,\mathrm{m/s}$ ha $K=\dfrac12\cdot2\,\mathrm{kg}\cdot(3\,\mathrm{m/s})^2=9\,\mathrm{J}$. Il lavoro totale, cioè quello della risultante, è uguale alla variazione dell'energia cinetica, $W_{\mathrm{tot}}=K_f-K_i$. Un lavoro totale negativo riduce l'energia cinetica, che resta comunque positiva o nulla. Se sul corpo precedente, a partire da fermo, la risultante compie $16\,\mathrm{J}$, la velocità finale è $\sqrt{\dfrac{2\cdot16\,\mathrm{J}}{2\,\mathrm{kg}}}=4\,\mathrm{m/s}$. La **potenza** è il lavoro nell'unità di tempo, $P=\dfrac W{\Delta t}$, in watt ($1\,\mathrm{W}=1\,\mathrm{J/s}$): un motore che compie $600\,\mathrm{J}$ in $3\,\mathrm{s}$ ha potenza $\dfrac{600\,\mathrm{J}}{3\,\mathrm{s}}=200\,\mathrm{W}$.
:::

:::teorema{#conservazione-energia titolo="Energia meccanica"}
L'**energia potenziale** è l'energia che un corpo possiede per la sua posizione. Un corpo di massa $m$ a quota $h$ sopra un livello di riferimento ha energia potenziale gravitazionale $U_g=mgh$; una molla di costante $k$ deformata di $x$ ha energia potenziale elastica $U_e=\dfrac12kx^2$. L'**energia meccanica** è la somma $K+U$ dell'energia cinetica e di quella potenziale. Il peso e la forza elastica sono forze **conservative**, cioè forze il cui lavoro dipende soltanto dalle posizioni iniziale e finale e vale $-\Delta U$; l'attrito è una forza non conservativa. Se le forze non conservative compiono lavoro nullo, l'energia meccanica si conserva. Per un corpo che parte da fermo e scende senza attrito di un dislivello $h$ vale quindi
$$
mgh=\frac12mv^2,\qquad v=\sqrt{2gh}.
$$
La massa si semplifica e la velocità dipende dal dislivello, non dalla lunghezza della discesa. Con attrito, la variazione dell'energia meccanica è uguale al lavoro delle forze non conservative, che per l'attrito è negativo.

Da uno scivolo alto $1{,}8\,\mathrm{m}$, con $g=10\,\mathrm{m/s^2}$, si arriva in fondo a $\sqrt{2\cdot10\,\mathrm{m/s^2}\cdot1{,}8\,\mathrm{m}}=6\,\mathrm{m/s}$. Per un bambino di $30\,\mathrm{kg}$ l'energia iniziale è $30\,\mathrm{kg}\cdot10\,\mathrm{m/s^2}\cdot1{,}8\,\mathrm{m}=540\,\mathrm{J}$. Se l'attrito compie $-300\,\mathrm{J}$, in fondo restano $240\,\mathrm{J}$ di energia cinetica e la velocità è $\sqrt{\dfrac{2\cdot240\,\mathrm{J}}{30\,\mathrm{kg}}}=4\,\mathrm{m/s}$.
:::

:::definizione{#quantita-di-moto titolo="Impulso e urti"}
La **quantità di moto** è il vettore $\vec p=m\vec v$, in $\mathrm{kg\,m/s}$. L'**impulso** di una forza costante è $\vec J=\vec F\Delta t$, in $\mathrm{N\,s}$; l'impulso della risultante è uguale alla variazione della quantità di moto. Una forza di $10\,\mathrm{N}$ che agisce per $0{,}5\,\mathrm{s}$ su un corpo fermo di $2\,\mathrm{kg}$ gli dà $p=10\,\mathrm{N}\cdot0{,}5\,\mathrm{s}=5\,\mathrm{kg\,m/s}$, cioè la velocità $\dfrac{5\,\mathrm{kg\,m/s}}{2\,\mathrm{kg}}=2{,}5\,\mathrm{m/s}$.

Un **sistema** è l'insieme dei corpi che si studiano. Se l'impulso delle forze esterne al sistema è trascurabile, la somma vettoriale delle quantità di moto si conserva. È il caso di un **urto**: i due corpi si scambiano forze uguali e opposte per la terza legge, quindi la quantità di moto persa da uno è acquistata dall'altro. Nell'urto **elastico** si conserva anche l'energia cinetica; nell'urto **anelastico** una parte di essa si trasforma in deformazione e calore. Se i corpi restano uniti, l'urto è completamente anelastico e la velocità comune $v_f$ soddisfa $m_1v_1+m_2v_2=(m_1+m_2)v_f$, con velocità dotate di segno.

Un carrello di $2\,\mathrm{kg}$ a $3\,\mathrm{m/s}$ aggancia un carrello fermo di $1\,\mathrm{kg}$, quindi $v_f=\dfrac{2\,\mathrm{kg}\cdot3\,\mathrm{m/s}+0}{3\,\mathrm{kg}}=2\,\mathrm{m/s}$. L'energia cinetica passa da $\dfrac12\cdot2\,\mathrm{kg}\cdot(3\,\mathrm{m/s})^2=9\,\mathrm{J}$ a $\dfrac12\cdot3\,\mathrm{kg}\cdot(2\,\mathrm{m/s})^2=6\,\mathrm{J}$, mentre la quantità di moto resta $6\,\mathrm{kg\,m/s}$.
:::

## Fluidi in quiete e in moto

:::definizione{#fluidi titolo="Densità e pressione"}
Un **fluido** è una sostanza senza forma propria, cioè un liquido o un gas. La **densità** è il rapporto fra la massa e il volume, $\rho=\dfrac mV$ ($\rho$ si legge rho), in $\mathrm{kg/m^3}$. L'acqua ha $\rho=1000\,\mathrm{kg/m^3}$, cioè un litro d'acqua ha massa $1\,\mathrm{kg}$. La **pressione** è il rapporto fra la forza che preme perpendicolarmente su una superficie e l'area della superficie, $p=\dfrac{F_\perp}{A}$, in pascal ($1\,\mathrm{Pa}=1\,\mathrm{N/m^2}$); $\perp$ si legge «perpendicolare». A parità di forza la pressione è maggiore su un'area minore: $600\,\mathrm{N}$ su $0{,}03\,\mathrm{m^2}$ danno $\dfrac{600\,\mathrm{N}}{0{,}03\,\mathrm{m^2}}=20000\,\mathrm{Pa}$. Per questo una punta, che ha un'area piccolissima, penetra con una forza modesta.

In un liquido fermo di densità uniforme la pressione aumenta con la profondità, perché ogni strato sostiene il peso del liquido soprastante. La **legge di Stevino** dà la pressione alla profondità $h$ sotto la superficie:
$$
p=p_0+\rho gh,
$$
dove $p_0$ è la pressione sulla superficie. Per un liquido all'aperto $p_0$ è la pressione atmosferica, cioè quella esercitata dall'aria, circa $10^5\,\mathrm{Pa}$. A parità di liquido e di $p_0$ la pressione dipende dalla profondità e non dalla forma del recipiente. Per questo nei vasi comunicanti, recipienti collegati in basso e aperti alla stessa pressione, uno stesso liquido raggiunge la stessa quota.
:::

:::esempio{titolo="Pressione assoluta e aumento di pressione"}
In acqua, con $g=10\,\mathrm{m/s^2}$, a $2\,\mathrm{m}$ di profondità l'aumento di pressione rispetto alla superficie è
$$
\rho gh=1000\,\mathrm{kg/m^3}\cdot10\,\mathrm{m/s^2}\cdot2\,\mathrm{m}=20000\,\mathrm{Pa}=20\,\mathrm{kPa}.
$$
Con $p_0=100000\,\mathrm{Pa}$ la pressione complessiva, detta **assoluta**, è $100000\,\mathrm{Pa}+20000\,\mathrm{Pa}=120000\,\mathrm{Pa}$. Il grafico riporta l'aumento $\Delta p=p-p_0$ in funzione di $h$: è una retta per l'origine, che sale di $10\,\mathrm{kPa}$ a ogni metro; il punto segnato corrisponde a $2\,\mathrm{m}$ e $20\,\mathrm{kPa}$.

::grafico{f="10*x" xmin=0 xmax=4 ymin=0 ymax=45 nomi="h,Δp" punti="2,20,pieno" legenda="p-p_0=10h" titolo="Profondità h in metri e aumento di pressione Δp in kPa: Δp indica la differenza rispetto alla superficie"}
:::

:::teorema{#archimede titolo="Spinta idrostatica"}
Un corpo immerso in un fluido riceve una spinta verso l'alto, perché la pressione è maggiore sulla sua faccia inferiore, più profonda. Il **principio di Archimede** afferma che la spinta è uguale al peso del fluido spostato:
$$
F_A=\rho_fgV_{\mathrm{imm}},
$$
dove $\rho_f$ è la densità del fluido e $V_{\mathrm{imm}}$ è il volume della parte immersa. Un sasso di $2\cdot10^{-3}\,\mathrm{m^3}$ immerso in acqua riceve $1000\,\mathrm{kg/m^3}\cdot10\,\mathrm{m/s^2}\cdot2\cdot10^{-3}\,\mathrm{m^3}=20\,\mathrm{N}$.

Un corpo di volume $V$ e densità media $\rho_c$ maggiore di $\rho_f$ affonda; se $\rho_c$ è minore di $\rho_f$ galleggia. Per un corpo che galleggia in equilibrio, senza altre forze verticali, la spinta è uguale al peso, $\rho_fgV_{\mathrm{imm}}=\rho_cgV$, quindi $\dfrac{V_{\mathrm{imm}}}{V}=\dfrac{\rho_c}{\rho_f}$. Il ghiaccio, di densità circa $920\,\mathrm{kg/m^3}$, galleggia in acqua con la frazione $\dfrac{920\,\mathrm{kg/m^3}}{1000\,\mathrm{kg/m^3}}=0{,}92$ del volume immersa, cioè il $92\%$; un corpo con densità pari a metà di quella del liquido galleggia immerso per metà.
:::

:::definizione{#continuita titolo="Portata e continuità"}
La **portata** è il volume di fluido che attraversa una sezione di un condotto nell'unità di tempo, $q_v=\dfrac{\Delta V}{\Delta t}$, in $\mathrm{m^3/s}$. Se la sezione ha area $A$ e il fluido ha velocità media $v$, allora $q_v=Av$: con $A=4\cdot10^{-4}\,\mathrm{m^2}$ e $v=2\,\mathrm{m/s}$ la portata è $8\cdot10^{-4}\,\mathrm{m^3/s}$. Un liquido è **incomprimibile**, cioè conserva il proprio volume. In un tubo senza perdite né diramazioni, percorso in moto **stazionario**, cioè costante nel tempo, la portata è quindi la stessa in ogni sezione. È l'**equazione di continuità** $A_1v_1=A_2v_2$, che esprime la conservazione della massa e non contiene la pressione. Dove il tubo si restringe il liquido è più veloce: se la sezione passa da $4\,\mathrm{cm^2}$ a $1\,\mathrm{cm^2}$, la velocità passa da $2\,\mathrm{m/s}$ a $2\,\mathrm{m/s}\cdot\dfrac{4\,\mathrm{cm^2}}{1\,\mathrm{cm^2}}=8\,\mathrm{m/s}$. Il moto è **laminare** se il fluido scorre in strati ordinati, **turbolento** se si formano vortici e gli strati si mescolano.

Il **principio di Pascal** afferma che un aumento di pressione prodotto in un punto di un liquido chiuso in un recipiente si trasmette a tutti i punti del liquido. Nel torchio idraulico due pistoni di aree $A_1$ e $A_2$, alla stessa quota, chiudono lo stesso liquido, quindi $\dfrac{F_1}{A_1}=\dfrac{F_2}{A_2}$. Con $A_2=10A_1$, una forza di $50\,\mathrm{N}$ sul pistone piccolo equilibra $10\cdot50\,\mathrm{N}=500\,\mathrm{N}$ sul pistone grande.
:::

## Temperatura, calore e gas

:::definizione{#calore titolo="Temperatura e trasferimento di energia"}
La **temperatura** è la grandezza che indica quanto un corpo è caldo. La scala kelvin ha gradi della stessa ampiezza della scala Celsius e parte dallo zero assoluto, la temperatura più bassa possibile, pari a $-273{,}15\,{}^\circ\mathrm{C}$. La **temperatura assoluta** è quindi $T=t_C+273{,}15$, con $T$ in kelvin e $t_C$ in gradi Celsius: $20\,{}^\circ\mathrm{C}$ corrispondono a $(20+273{,}15)\,\mathrm{K}=293{,}15\,\mathrm{K}$. Una differenza di temperatura ha lo stesso valore nelle due scale, perché la costante si elimina nella sottrazione: un aumento di $20\,{}^\circ\mathrm{C}$ è un aumento di $20\,\mathrm{K}$. Nei rapporti fra temperature, che compaiono nelle leggi dei gas, si usa la temperatura assoluta.

Il **calore** è l'energia che passa da un corpo a un altro per effetto di una differenza di temperatura, e si misura in joule. Passa spontaneamente dal corpo più caldo al più freddo, finché i due hanno la stessa temperatura: è l'**equilibrio termico**. Il calore si trasmette in tre modi.

- Per **conduzione** attraversa un materiale senza spostamento di materia.
- Per **convezione** è trasportato da un fluido in movimento.
- Per **irraggiamento** è trasportato da onde elettromagnetiche, come la luce, anche nel vuoto.
:::

:::teorema{#calorimetria titolo="Calore specifico e cambiamenti di stato"}
Il **calore specifico** $c$ di una sostanza è l'energia necessaria per aumentare di un kelvin la temperatura di un chilogrammo di quella sostanza, in $\mathrm{J/(kg\,K)}$; per l'acqua vale circa $4200\,\mathrm{J/(kg\,K)}$. Se non avvengono cambiamenti di stato e $c$ è costante, il calore scambiato da una massa $m$ la cui temperatura varia di $\Delta T$ è
$$
Q=mc\Delta T,
$$
positivo se il corpo assorbe calore e negativo se lo cede. Per scaldare $0{,}5\,\mathrm{kg}$ d'acqua di $3\,\mathrm{K}$ servono $0{,}5\,\mathrm{kg}\cdot4200\,\mathrm{J/(kg\,K)}\cdot3\,\mathrm{K}=6300\,\mathrm{J}$.

Un **cambiamento di stato** è il passaggio fra gli stati solido, liquido e gassoso, come la fusione. Mentre avviene, a pressione costante, la temperatura resta costante e il calore scambiato è $Q=mL$, dove il **calore latente specifico** $L$ è l'energia necessaria per un chilogrammo, in $\mathrm{J/kg}$. Per il ghiaccio $L\approx334000\,\mathrm{J/kg}$, quindi fondere $0{,}2\,\mathrm{kg}$ richiede $0{,}2\,\mathrm{kg}\cdot334000\,\mathrm{J/kg}=66800\,\mathrm{J}$. Durante la fusione, alla pressione atmosferica, il calore assorbito cambia le quantità di acqua e di ghiaccio, che restano a $0\,{}^\circ\mathrm{C}$.

Per piccole variazioni di temperatura una sbarra solida lunga $\ell_0$, scaldata di $\Delta T$, si allunga di $\Delta\ell=\alpha\ell_0\Delta T$, dove $\alpha$ (alfa) è il coefficiente di dilatazione lineare, in $\mathrm{K^{-1}}$. Per l'acciaio $\alpha\approx1{,}2\cdot10^{-5}\,\mathrm{K^{-1}}$: una rotaia di $10\,\mathrm{m}$ scaldata di $30\,\mathrm{K}$ si allunga di $1{,}2\cdot10^{-5}\,\mathrm{K^{-1}}\cdot10\,\mathrm{m}\cdot30\,\mathrm{K}=3{,}6\cdot10^{-3}\,\mathrm{m}$, cioè $3{,}6\,\mathrm{mm}$.
:::

:::teorema{#gas-ideali titolo="Equazione del gas ideale"}
Lo stato di un gas è descritto dalla pressione assoluta $p$, dal volume $V$ e dalla temperatura assoluta $T$. La quantità di gas si misura in moli: una mole contiene circa $6{,}02\cdot10^{23}$ particelle, e $n$ è il numero di moli. Un **gas ideale** è un gas le cui particelle hanno dimensioni trascurabili e interagiscono soltanto negli urti; l'aria ha queste proprietà con buona approssimazione. Per un gas ideale vale
$$
pV=nRT,
$$
con $R=8{,}31\,\mathrm{J/(mol\,K)}$. Per una quantità fissata di gas il rapporto $\dfrac{pV}{T}$ è costante, quindi due stati soddisfano $\dfrac{p_1V_1}{T_1}=\dfrac{p_2V_2}{T_2}$. In tre **trasformazioni**, cioè passaggi da uno stato a un altro, una grandezza resta costante.

- **Isoterma**, a temperatura costante: $p_1V_1=p_2V_2$.
- **Isocora**, a volume costante, come in un recipiente rigido: $\dfrac{p_1}{T_1}=\dfrac{p_2}{T_2}$.
- **Isobara**, a pressione costante, come sotto un pistone libero di muoversi: $\dfrac{V_1}{T_1}=\dfrac{V_2}{T_2}$.
:::

:::esempio{titolo="Una bombola scaldata"}
Una bombola rigida contiene gas a $2\cdot10^5\,\mathrm{Pa}$ e $27\,{}^\circ\mathrm{C}$, e viene scaldata fino a $177\,{}^\circ\mathrm{C}$. Il volume è costante, quindi la trasformazione è isocora. Le temperature assolute sono $T_1=(27+273)\,\mathrm{K}=300\,\mathrm{K}$ e $T_2=(177+273)\,\mathrm{K}=450\,\mathrm{K}$, perciò
$$
p_2=p_1\frac{T_2}{T_1}=2\cdot10^5\,\mathrm{Pa}\cdot\frac{450\,\mathrm{K}}{300\,\mathrm{K}}=3\cdot10^5\,\mathrm{Pa}.
$$
:::

:::attenzione
Nelle leggi dei gas la temperatura è in kelvin. Nell'esempio il rapporto fra le temperature in gradi Celsius, $\dfrac{177}{27}\approx6{,}6$, darebbe una pressione più di quattro volte quella corretta.
:::

## Bilanci termodinamici

:::teorema{#termodinamica titolo="Primo principio"}
Qui il sistema è un corpo, per esempio un gas in un cilindro con un pistone; tutto il resto è l'**ambiente**. L'**energia interna** $U$ è la somma delle energie delle particelle del sistema, in joule. Il sistema scambia energia con l'ambiente come calore $Q$ e come lavoro $W$. Il calore $Q$ è positivo se il sistema lo assorbe. Il lavoro $W$ è positivo se il sistema lo compie sull'ambiente, come un gas che si espande, ed è negativo se il sistema lo riceve, come un gas che viene compresso. Il **primo principio** afferma che
$$
\Delta U=Q-W,
$$
cioè che l'energia entrata come calore e non uscita come lavoro resta nel sistema. Un gas che assorbe $500\,\mathrm{J}$ e compie $200\,\mathrm{J}$ di lavoro ha $\Delta U=500\,\mathrm{J}-200\,\mathrm{J}=300\,\mathrm{J}$. Un gas compresso con $200\,\mathrm{J}$ di lavoro, senza scambi di calore, ha $W=-200\,\mathrm{J}$ e $\Delta U=0-(-200\,\mathrm{J})=200\,\mathrm{J}$. L'energia interna è una proprietà dello stato del sistema; calore e lavoro sono energie scambiate durante una trasformazione.
:::

:::esempio{titolo="Trasformazioni riconosciute dai vincoli"}
- In un recipiente rigido il gas non si espande, quindi $W=0$ e $\Delta U=Q$.
- In una trasformazione **adiabatica**, cioè senza scambio di calore, $Q=0$ e $\Delta U=-W$.
- In una isoterma di un gas ideale l'energia interna, che dipende soltanto dalla temperatura, resta costante, quindi $\Delta U=0$ e $Q=W$.

Un gas che si espande di $\Delta V$ contro una pressione esterna costante compie il lavoro $W=p_{\mathrm{est}}\Delta V$. Con $p_{\mathrm{est}}=2\cdot10^5\,\mathrm{Pa}$ e $\Delta V=10^{-3}\,\mathrm{m^3}$ si ha $W=2\cdot10^5\,\mathrm{Pa}\cdot10^{-3}\,\mathrm{m^3}=200\,\mathrm{J}$. Nel grafico pressione-volume il lavoro è l'area sotto la curva di una trasformazione quasi statica, cioè tanto lenta che il gas ha in ogni istante una pressione definita. L'area si conta positiva se la curva è percorsa verso i volumi crescenti (espansione) e negativa nel verso opposto (compressione).
:::

:::definizione{#rendimento titolo="Macchine termiche e rendimento"}
Una **macchina termica**, come un motore, trasforma calore in lavoro ripetendo un **ciclo**, cioè una successione di trasformazioni che riporta il sistema allo stato iniziale. A ogni ciclo assorbe il calore $Q_h$ da una sorgente calda, compie il lavoro $W$ e cede il calore $Q_c$ a una sorgente fredda; $Q_h$ e $Q_c$ sono qui quantità positive. In un ciclo $\Delta U=0$, quindi per il primo principio $W=Q_h-Q_c$. Il **rendimento** $\eta$ (eta) è la frazione del calore assorbito che diventa lavoro:
$$
\eta=\frac W{Q_h}=1-\frac{Q_c}{Q_h}.
$$
Con $Q_h=500\,\mathrm{J}$ e $Q_c=350\,\mathrm{J}$ il lavoro è $500\,\mathrm{J}-350\,\mathrm{J}=150\,\mathrm{J}$ e il rendimento è $\dfrac{150\,\mathrm{J}}{500\,\mathrm{J}}=0{,}30$, cioè il $30\%$. Il **secondo principio** afferma che nessuna macchina ciclica trasforma in lavoro tutto il calore assorbito da una sola sorgente, quindi $Q_c>0$ e $\eta<1$. Un frigorifero trasferisce calore da un ambiente freddo a uno caldo consumando lavoro fornito dall'esterno.
:::

## Oscillazioni, onde e suono

:::definizione{#onde titolo="Periodo, frequenza e lunghezza d'onda"}
Un'**oscillazione** è un moto che si ripete avanti e indietro attorno a una posizione di equilibrio, come quello di un pendolo. Il **periodo** $T$ è il tempo di un'oscillazione completa; la **frequenza** $f=\dfrac1T$ è il numero di oscillazioni al secondo, in hertz; l'**ampiezza** $A$ è la massima distanza dalla posizione di equilibrio. Un pendolo che compie $10$ oscillazioni in $20\,\mathrm{s}$ ha $T=2\,\mathrm{s}$ e $f=0{,}5\,\mathrm{Hz}$.

Nel **moto armonico**, che è quello di una massa attaccata a una molla, la posizione è $x=A\cos(\omega t+\varphi)$ e varia fra $-A$ e $A$. La pulsazione $\omega$ (omega) vale $2\pi f$, in radianti al secondo, e la fase iniziale $\varphi$ (fi) fissa la posizione all'istante $t=0$: con $\varphi=0$ il corpo parte da $x=A$. Un pendolo semplice di lunghezza $\ell$, per piccole oscillazioni, ha periodo $T=2\pi\sqrt{\dfrac{\ell}{g}}$, indipendente dalla massa; con $\ell=1\,\mathrm{m}$ si ottiene $T=2\pi\sqrt{\dfrac{1\,\mathrm{m}}{9{,}8\,\mathrm{m/s^2}}}\approx2{,}0\,\mathrm{s}$. Una forza periodica con frequenza vicina a quella propria di un sistema gli cede energia a ogni ciclo e ne aumenta l'ampiezza: è la **risonanza**, come in un'altalena spinta al ritmo delle sue oscillazioni.

Un'**onda** è una perturbazione che si propaga e trasporta energia senza trasportare materia. È **trasversale** se i punti del mezzo, cioè del materiale in cui si propaga, oscillano perpendicolarmente alla direzione di propagazione, come in una corda, e **longitudinale** se oscillano lungo di essa. La **lunghezza d'onda** $\lambda$ (lambda) è la distanza fra due creste successive, cioè fra due punti di massimo spostamento. In un periodo l'onda avanza di una lunghezza d'onda, quindi la velocità di propagazione è
$$
v=\frac{\lambda}{T}=\lambda f.
$$
Il **suono** è un'onda longitudinale. Si propaga in un mezzo materiale e non nel vuoto, e in aria ha velocità di circa $340\,\mathrm{m/s}$. La luce è un'onda elettromagnetica e si propaga anche nel vuoto.
:::

:::esempio{titolo="Leggere un profilo d'onda"}
Il grafico mostra un'onda a un istante fissato: in orizzontale c'è la posizione in metri, in verticale lo spostamento dei punti del mezzo in centimetri. Due creste successive si trovano in $x=1\,\mathrm{m}$ e in $x=5\,\mathrm{m}$, quindi $\lambda=5\,\mathrm{m}-1\,\mathrm{m}=4\,\mathrm{m}$; lo spostamento massimo, $1\,\mathrm{cm}$, è l'ampiezza. Il profilo non contiene informazioni sul tempo, quindi la frequenza è un dato in più. Con $f=3\,\mathrm{Hz}$ la velocità è $v=\lambda f=4\,\mathrm{m}\cdot3\,\mathrm{Hz}=12\,\mathrm{m/s}$.

::grafico{f="sin(pi*x/2)" xmin=0 xmax=8 ymin=-1.5 ymax=1.5 nomi="x,y" legenda="y=\sin(\pi x/2)" punti="1,1,pieno;5,1,pieno" titolo="Ascisse in metri e ordinate in cm: le creste distano 4 m e l’ampiezza è 1 cm"}
:::

:::osservazione
- Un'onda che passa da un mezzo a un altro conserva la frequenza, fissata dalla sorgente. Se la velocità cambia, cambia in proporzione $\lambda=\dfrac vf$: un suono di $340\,\mathrm{Hz}$ ha $\lambda=\dfrac{340\,\mathrm{m/s}}{340\,\mathrm{Hz}}=1\,\mathrm{m}$ in aria e, a circa $1500\,\mathrm{m/s}$, $\lambda=\dfrac{1500\,\mathrm{m/s}}{340\,\mathrm{Hz}}\approx4{,}4\,\mathrm{m}$ in acqua.
- Dove due onde si incontrano gli spostamenti si sommano: è la **sovrapposizione**. Onde in fase, con le creste sulle creste, si rafforzano; onde in opposizione di fase, con le creste sulle valli, si indeboliscono e, a pari ampiezza, si annullano.
- La **diffrazione** è l'allargamento di un'onda oltre un'apertura o un ostacolo; è marcata se le dimensioni dell'apertura sono vicine alla lunghezza d'onda.
- Per l'**effetto Doppler**, se una sorgente sonora si avvicina a un osservatore fermo le creste gli arrivano più ravvicinate e la frequenza percepita è maggiore di quella emessa; se si allontana è minore.
- L'**eco** è il suono riflesso da una parete. Per una parete a distanza $d$ il suono percorre $2d$, quindi con velocità $v$ e ritardo $\Delta t$ si ha $d=\dfrac{v\Delta t}{2}$.
:::

## Riflessione, rifrazione e lenti

:::teorema{#ottica titolo="Riflessione e legge di Snell"}
Un **raggio** è il percorso rettilineo della luce in un mezzo omogeneo, cioè con le stesse proprietà in ogni punto. Sulla superficie fra due mezzi la luce in parte torna indietro, ed è la **riflessione**, e in parte passa cambiando direzione, ed è la **rifrazione**. Gli angoli si misurano dalla **normale**, cioè dalla perpendicolare alla superficie nel punto di incidenza. Nella riflessione l'angolo riflesso è uguale a quello incidente. Uno specchio piano forma dietro di sé, alla stessa distanza dell'oggetto, un'immagine **virtuale**, dalla quale i raggi sembrano provenire senza passarvi. Chi sta a $1{,}5\,\mathrm{m}$ dallo specchio vede la propria immagine a $1{,}5\,\mathrm{m}+1{,}5\,\mathrm{m}=3\,\mathrm{m}$ da sé.

L'**indice di rifrazione** di un mezzo è $n=\dfrac cv$, rapporto fra la velocità della luce nel vuoto, $c=3{,}0\cdot10^8\,\mathrm{m/s}$, e quella nel mezzo; vale circa $1$ per l'aria, $1{,}33$ per l'acqua e $1{,}5$ per il vetro, in cui la luce ha velocità $\dfrac{3{,}0\cdot10^8\,\mathrm{m/s}}{1{,}5}=2{,}0\cdot10^8\,\mathrm{m/s}$. La **legge di Snell** lega l'angolo di incidenza $\theta_1$ e l'angolo di rifrazione $\theta_2$:
$$
n_1\sin\theta_1=n_2\sin\theta_2.
$$
Entrando in un mezzo di indice maggiore un raggio obliquo si avvicina alla normale. Dall'aria, con $n_1=1$, a un liquido con $n_2=1{,}41$, per $\theta_1=45^\circ$ si ha $\sin\theta_2=\dfrac{1\cdot\sin45^\circ}{1{,}41}=\dfrac{0{,}707}{1{,}41}\approx0{,}50$, quindi $\theta_2\approx30^\circ$. Nel passaggio la frequenza resta invariata, mentre cambiano la velocità e la lunghezza d'onda.
:::

:::definizione{#riflessione-totale titolo="Angolo critico e dispersione"}
Quando la luce passa a un mezzo di indice minore, cioè $n_2<n_1$, il raggio rifratto si allontana dalla normale. Aumentando l'angolo di incidenza, l'angolo di rifrazione arriva a $90^\circ$. L'angolo di incidenza per cui questo accade è l'**angolo critico** $\theta_c$; poiché $\sin90^\circ=1$, la legge di Snell dà
$$
\sin\theta_c=\frac{n_2}{n_1}.
$$
Per angoli di incidenza maggiori di $\theta_c$ il raggio rifratto non esiste e tutta la luce è riflessa: è la **riflessione totale**. Da un mezzo di indice $2$ all'aria si ha $\sin\theta_c=\dfrac12$, quindi $\theta_c=30^\circ$.

La **dispersione** è la dipendenza dell'indice di rifrazione dalla lunghezza d'onda, cioè dal colore. Per questo un prisma devia i colori di angoli diversi e separa la luce bianca.
:::

:::teorema{#lenti titolo="Lenti sottili"}
Una **lente** devia i raggi di luce per rifrazione. Una lente **convergente** fa incontrare in un punto, il **fuoco**, i raggi che arrivano paralleli al suo asse, la retta perpendicolare alla lente che passa per il suo centro; una lente **divergente** li allarga. La **distanza focale** $f$ è la distanza del fuoco dalla lente, presa positiva per le lenti convergenti e negativa per le divergenti. Siano $p$ la distanza dell'oggetto dalla lente e $q$ quella dell'immagine. Per una lente sottile, cioè di spessore trascurabile rispetto a $f$, e per raggi poco inclinati rispetto all'asse (approssimazione parassiale) valgono
$$
\frac1f=\frac1p+\frac1q,\qquad M=-\frac qp.
$$
L'**ingrandimento** $M$ è il rapporto fra l'altezza dell'immagine e quella dell'oggetto. Per un oggetto posto davanti alla lente $p$ è positiva, e i segni di $q$ e di $M$ descrivono l'immagine.

- Se $q>0$ l'immagine è **reale**: si forma oltre la lente e si raccoglie su uno schermo. Se $q<0$ è **virtuale** e si trova dalla parte dell'oggetto.
- Se $M<0$ l'immagine è capovolta; se $M>0$ è diritta.

Con $f=10\,\mathrm{cm}$ e $p=30\,\mathrm{cm}$ si ha $\dfrac1q=\dfrac1{10\,\mathrm{cm}}-\dfrac1{30\,\mathrm{cm}}=\dfrac{3-1}{30\,\mathrm{cm}}=\dfrac1{15\,\mathrm{cm}}$, quindi $q=15\,\mathrm{cm}$ e $M=-\dfrac{15\,\mathrm{cm}}{30\,\mathrm{cm}}=-\dfrac12$; l'immagine è quindi reale, capovolta e alta la metà dell'oggetto. Con l'oggetto fra il fuoco e la lente, a $p=5\,\mathrm{cm}$, si ha $\dfrac1q=\dfrac1{10\,\mathrm{cm}}-\dfrac1{5\,\mathrm{cm}}=-\dfrac1{10\,\mathrm{cm}}$, quindi $q=-10\,\mathrm{cm}$ e $M=-\dfrac{-10\,\mathrm{cm}}{5\,\mathrm{cm}}=2$; l'immagine è quindi virtuale, diritta e alta il doppio. Una lente divergente dà di un oggetto un'immagine virtuale, diritta e ridotta.
:::

## Cariche, circuiti e magnetismo

:::teorema{#campo-elettrico titolo="Forza elettrica e potenziale"}
La **carica elettrica** è una proprietà della materia, positiva o negativa, che si misura in coulomb ($\mathrm{C}$). Negli atomi i protoni hanno carica positiva e gli elettroni negativa, con lo stesso valore assoluto $1{,}6\cdot10^{-19}\,\mathrm{C}$, detto carica elementare. Cariche dello stesso segno si respingono, cariche di segno opposto si attraggono. Nei **conduttori**, come i metalli, una parte degli elettroni è libera di muoversi; negli **isolanti** gli elettroni restano legati agli atomi. Strofinio e contatto trasferiscono elettroni da un corpo all'altro, e in un sistema isolato la carica totale si conserva. Due sfere conduttrici identiche con cariche $6\cdot10^{-6}\,\mathrm{C}$ e $-2\cdot10^{-6}\,\mathrm{C}$, messe a contatto lontano da altri corpi, si dividono in parti uguali, per simmetria, la carica totale $4\cdot10^{-6}\,\mathrm{C}$, quindi ciascuna ha $2\cdot10^{-6}\,\mathrm{C}$.

Per la **legge di Coulomb**, due cariche $q_1$ e $q_2$ puntiformi, cioè di dimensioni trascurabili rispetto alla loro distanza $r$, ferme nel vuoto, si scambiano una forza diretta lungo la retta che le unisce, di modulo
$$
F=k\frac{|q_1q_2|}{r^2},
$$
con $k=9{,}0\cdot10^9\,\mathrm{N\,m^2/C^2}$. Due cariche di $2\cdot10^{-6}\,\mathrm{C}$ a $0{,}3\,\mathrm{m}$ si respingono con $9{,}0\cdot10^9\,\mathrm{N\,m^2/C^2}\cdot\dfrac{(2\cdot10^{-6}\,\mathrm{C})^2}{(0{,}3\,\mathrm{m})^2}=0{,}4\,\mathrm{N}$.

Il **campo elettrico** in un punto è la forza che agisce su una carica positiva $q$ posta in quel punto, divisa per $q$: $\vec E=\dfrac{\vec F}{q}$, in $\mathrm{N/C}$. Una carica nel campo subisce la forza $q\vec E$, concorde con il campo se è positiva e opposta se è negativa: in un campo di $500\,\mathrm{N/C}$ una carica di $2\cdot10^{-6}\,\mathrm{C}$ subisce $2\cdot10^{-6}\,\mathrm{C}\cdot500\,\mathrm{N/C}=10^{-3}\,\mathrm{N}$. I campi di più cariche si sommano come vettori. Dentro un conduttore con le cariche ferme, cioè in equilibrio elettrostatico, il campo è nullo.

Il **potenziale elettrico** $V$ in un punto è l'energia potenziale per unità di carica, in volt ($1\,\mathrm{V}=1\,\mathrm{J/C}$). La **differenza di potenziale** $\Delta V$ fra due punti, detta anche **tensione**, dà la variazione di energia potenziale di una carica $q$ che passa dall'uno all'altro, $\Delta U=q\Delta V$; il lavoro del campo è $-\Delta U$. Una carica di $2\,\mathrm{C}$ che attraversa $1{,}5\,\mathrm{V}$ varia la propria energia di $2\,\mathrm{C}\cdot1{,}5\,\mathrm{V}=3\,\mathrm{J}$. Un **condensatore** è formato da due lastre conduttrici, le armature, con cariche opposte di modulo $Q=C\Delta V$; la **capacità** $C$ si misura in farad ($1\,\mathrm{F}=1\,\mathrm{C/V}$). Con $C=2\cdot10^{-6}\,\mathrm{F}$ e $\Delta V=10\,\mathrm{V}$ si ha $Q=2\cdot10^{-5}\,\mathrm{C}$.
:::

:::definizione{#circuiti titolo="Corrente e resistenza"}
La **corrente elettrica** è un moto ordinato di cariche. L'**intensità di corrente** è la carica che attraversa una sezione del conduttore nell'unità di tempo, $I=\dfrac{\Delta Q}{\Delta t}$, in ampere ($1\,\mathrm{A}=1\,\mathrm{C/s}$): se in $10\,\mathrm{s}$ passano $5\,\mathrm{C}$, la corrente è $\dfrac{5\,\mathrm{C}}{10\,\mathrm{s}}=0{,}5\,\mathrm{A}$. Il verso convenzionale della corrente è quello del moto di cariche positive. Un **generatore**, come una pila, mantiene fra i suoi poli una tensione $V$; un **circuito** è un percorso chiuso di conduttori che collega i due poli. La **resistenza** $R$ di un conduttore è il rapporto fra la tensione ai suoi capi e la corrente che lo attraversa, in ohm ($1\,\Omega=1\,\mathrm{V/A}$). Per un conduttore metallico a temperatura costante $R$ non dipende dalla corrente, e vale la **legge di Ohm** $V=RI$. Un resistore, cioè un componente di resistenza fissata, di $20\,\Omega$ a $10\,\mathrm{V}$ è percorso da $\dfrac{10\,\mathrm{V}}{20\,\Omega}=0{,}5\,\mathrm{A}$.

La **potenza** assorbita è $P=VI=I^2R=\dfrac{V^2}{R}$, in watt, e in un resistore diventa calore; a potenza costante l'energia nel tempo $\Delta t$ è $P\Delta t$. Il resistore precedente assorbe $10\,\mathrm{V}\cdot0{,}5\,\mathrm{A}=5\,\mathrm{W}$, cioè $5\,\mathrm{W}\cdot60\,\mathrm{s}=300\,\mathrm{J}$ in un minuto.

- **In serie** i resistori sono percorsi dalla stessa corrente e $R_{\mathrm{eq}}=R_1+R_2$.
- **In parallelo** hanno la stessa tensione e $\dfrac1{R_{\mathrm{eq}}}=\dfrac1{R_1}+\dfrac1{R_2}$.

La resistenza equivalente $R_{\mathrm{eq}}$ è quella di un solo resistore che sostituisce i due lasciando la stessa corrente nel generatore. Con $20\,\Omega$ e $30\,\Omega$ si ottiene $50\,\Omega$ in serie e, poiché $\dfrac1{20\,\Omega}+\dfrac1{30\,\Omega}=\dfrac{3+2}{60\,\Omega}=\dfrac1{12\,\Omega}$, $12\,\Omega$ in parallelo. In un nodo, cioè in un punto in cui si uniscono tre o più fili, la somma delle correnti entranti è uguale a quella delle uscenti, perché la carica si conserva. Un interruttore aperto annulla la corrente nel proprio ramo, cioè nel tratto di circuito in cui è inserito. Un generatore ideale mantiene la stessa tensione qualunque corrente eroghi, quindi gli altri rami di un parallelo alimentato da un generatore ideale restano alla stessa tensione.

L'amperometro misura la corrente, si collega in serie e idealmente ha resistenza nulla. Il voltmetro misura la tensione, si collega in parallelo e idealmente ha resistenza infinita. La **forza elettromotrice** $\mathcal E$ è la tensione di un generatore che non eroga corrente. Se il generatore ha resistenza interna $r$ ed eroga la corrente $I$, la tensione ai poli è $V=\mathcal E-Ir$: con $9\,\mathrm{V}$, $1\,\Omega$ e $0{,}5\,\mathrm{A}$ vale $9\,\mathrm{V}-0{,}5\,\mathrm{A}\cdot1\,\Omega=8{,}5\,\mathrm{V}$.
:::

:::definizione{#magnetismo titolo="Campo magnetico e forza di Lorentz"}
Un **magnete** ha due poli, nord e sud: poli uguali si respingono e poli diversi si attraggono. Ogni pezzo di un magnete spezzato ha di nuovo due poli. Attorno a un magnete c'è un **campo magnetico** $\vec B$, un vettore che si misura in tesla ($\mathrm{T}$) e che in ogni punto ha la direzione dell'ago di una bussola. Nei materiali ferromagnetici, come il ferro, piccole regioni magnetizzate dette domini si orientano nello stesso verso e il materiale diventa un magnete. Anche una corrente genera un campo magnetico: attorno a un filo rettilineo le linee del campo, che in ogni punto hanno la direzione del campo, sono circonferenze con il centro sul filo.

Su una carica $q$ in moto con velocità $v$ agisce la **forza di Lorentz**, perpendicolare alla velocità e al campo, di modulo $F=|q|vB\sin\theta$, dove $\theta$ è l'angolo fra la velocità e il campo. È nulla se la velocità è parallela al campo e massima se è perpendicolare. Un protone, di carica $1{,}6\cdot10^{-19}\,\mathrm{C}$, che si muove a $2\cdot10^5\,\mathrm{m/s}$ perpendicolarmente a un campo di $0{,}5\,\mathrm{T}$ subisce $1{,}6\cdot10^{-19}\,\mathrm{C}\cdot2\cdot10^5\,\mathrm{m/s}\cdot0{,}5\,\mathrm{T}=1{,}6\cdot10^{-14}\,\mathrm{N}$. Poiché è perpendicolare alla velocità, la forza compie lavoro nullo e cambia soltanto la direzione del moto. In un campo uniforme, con velocità perpendicolare al campo e senza altre forze, il moto è circolare uniforme.

Il **flusso magnetico** attraverso un circuito misura quanto campo attraversa la superficie delimitata dal circuito; per un campo uniforme perpendicolare a una superficie di area $A$ vale $BA$. Quando il flusso varia, nel circuito si genera una forza elettromotrice: è l'**induzione elettromagnetica**. Per la legge di Lenz la corrente indotta genera un campo che si oppone alla variazione del flusso che l'ha prodotta.

Campi elettrici e magnetici variabili si generano a vicenda e si propagano insieme come **onde elettromagnetiche**. Nel vuoto hanno tutte la velocità $c$, quindi $c=\lambda f$: a $10^8\,\mathrm{Hz}$ la lunghezza d'onda è $\dfrac{3{,}0\cdot10^8\,\mathrm{m/s}}{10^8\,\mathrm{Hz}}=3\,\mathrm{m}$. In ordine di frequenza crescente, e di lunghezza d'onda decrescente, lo spettro, cioè l'insieme di queste onde, comprende onde radio, microonde, infrarosso, luce visibile, ultravioletto, raggi X e raggi gamma.
:::

:::definizione{#corpo-nero titolo="Radiazione termica e corpo nero"}
Ogni corpo emette onde elettromagnetiche a causa della propria temperatura: è la **radiazione termica**. Un **corpo nero** è un corpo ideale che assorbe tutta la radiazione che lo colpisce. La radiazione che emette dipende soltanto dalla temperatura assoluta $T$, contiene tutte le lunghezze d'onda, cioè ha uno spettro continuo, e ha intensità massima a una lunghezza d'onda $\lambda_{\max}$. La **legge di Wien** afferma che $\lambda_{\max}T=b$, con $b=2{,}9\cdot10^{-3}\,\mathrm{m\,K}$, quindi un corpo più caldo ha il massimo a una lunghezza d'onda minore. Per la superficie del Sole, a circa $5800\,\mathrm{K}$, si ha $\lambda_{\max}=\dfrac{2{,}9\cdot10^{-3}\,\mathrm{m\,K}}{5800\,\mathrm{K}}=5{,}0\cdot10^{-7}\,\mathrm{m}$, nella luce visibile. La **legge di Stefan-Boltzmann** dà la potenza emessa per unità di superficie, $\dfrac PA=\sigma T^4$, con $\sigma=5{,}67\cdot10^{-8}\,\mathrm{W/(m^2\,K^4)}$ ($\sigma$ è la lettera sigma): se $T$ raddoppia, la potenza diventa $2^4=16$ volte maggiore.

Per spiegare la forma dello spettro, nel 1900 Planck suppose che la materia scambi energia con la radiazione di frequenza $f$ soltanto in multipli di $hf$, dove $h=6{,}63\cdot10^{-34}\,\mathrm{J\,s}$ è la costante di Planck. Questa ipotesi è all'origine della fisica quantistica.
:::

:::definizione{#fisica-moderna titolo="Fotoni, livelli e radioattività"}
La luce di frequenza $f$ trasporta energia in pacchetti indivisibili, i **fotoni**, ciascuno di energia $E=hf=\dfrac{hc}{\lambda}$, quindi a frequenza maggiore corrisponde un fotone di energia maggiore. Un fotone di luce verde, con $f=6{,}0\cdot10^{14}\,\mathrm{Hz}$, ha $E=6{,}63\cdot10^{-34}\,\mathrm{J\,s}\cdot6{,}0\cdot10^{14}\,\mathrm{Hz}\approx4{,}0\cdot10^{-19}\,\mathrm{J}$. L'**effetto fotoelettrico** è l'emissione di elettroni da un metallo colpito dalla luce. Ogni elettrone assorbe un fotone ed esce soltanto se $hf$ supera il lavoro di estrazione $W_0$ del metallo, detto anche funzione lavoro; l'energia cinetica massima è $K_{\max}=hf-W_0$. Si supponga $W_0=3{,}0\cdot10^{-19}\,\mathrm{J}$: con la luce verde $K_{\max}=4{,}0\cdot10^{-19}\,\mathrm{J}-3{,}0\cdot10^{-19}\,\mathrm{J}=1{,}0\cdot10^{-19}\,\mathrm{J}$. Una luce più intensa della stessa frequenza porta più fotoni, quindi estrae più elettroni, ciascuno con la stessa energia massima.

In un atomo gli elettroni hanno soltanto alcuni valori dell'energia, i **livelli**. Passando da un livello $E_2$ a un livello più basso $E_1$ l'atomo emette un fotone con $hf=E_2-E_1$.

Il nucleo è formato da protoni e neutroni: il **numero atomico** $Z$ conta i protoni, il **numero di massa** $A$ conta protoni e neutroni. Un nucleo instabile si trasforma emettendo radiazione, e questo è il **decadimento radioattivo**.

- **Alfa.** Il nucleo emette un nucleo di elio, formato da due protoni e due neutroni, quindi $A$ diminuisce di $4$ e $Z$ di $2$. L'uranio-238, con $Z=92$, diventa torio-234, con $Z=90$.
- **Beta meno.** Un neutrone diventa un protone ed emette un elettrone e un antineutrino, una particella neutra di massa piccolissima, quindi $A$ resta invariato e $Z$ aumenta di $1$.
- **Gamma.** Il nucleo emette un fotone di alta energia e riduce la propria energia, mentre $A$ e $Z$ restano invariati.

Il **tempo di dimezzamento** è il tempo in cui decade la metà dei nuclei presenti. Dopo $n$ tempi di dimezzamento resta la frazione $\left(\dfrac12\right)^n$ dei nuclei iniziali: lo iodio-131, con tempo di dimezzamento di $8$ giorni, dopo $24$ giorni si riduce a $\left(\dfrac12\right)^3=\dfrac18$.
:::
