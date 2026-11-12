---
titolo: "Il problema di De Saint Venant"
sommario: "Tensioni nelle travi prismatiche da sforzo normale, flessione, taglio e torsione, con sezioni piene, cave e a parete sottile."
---

## Dalle azioni interne alle tensioni

:::definizione{#sezione-prismatica titolo="Trave prismatica e azioni di sezione"}
In una trave prismatica le sezioni trasversali sono uguali e hanno la stessa orientazione lungo l’asse della trave. Si indica con $x$ la coordinata longitudinale. Nel piano della sezione si prendono $y$ verso l’alto e $z$ uscente dal foglio, con origine nel baricentro $G$. La terna è destrorsa. Nei disegni trasversali le frecce indicano direttamente le coordinate della sezione.

Sulla faccia con normale positiva $x$, il vettore di tensione ha componente normale $\sigma_x$ e due componenti tangenziali $\tau_{xy}$ e $\tau_{xz}$, dirette rispettivamente lungo $y$ e $z$. La forza risultante si ottiene integrando ciascuna componente sull’area $A$. Poiché il braccio di ogni forza elementare parte da $G$, il momento risultante si ottiene integrando il prodotto vettoriale del braccio per la forza.

$$
\begin{aligned}
N &= \int_A \sigma_x\,\mathrm dA,\\[4pt]
M_z &= -\int_A y\,\sigma_x\,\mathrm dA,\\[4pt]
M_y &= \int_A z\,\sigma_x\,\mathrm dA,\\[4pt]
M_t &= \int_A(y\tau_{xz}-z\tau_{xy})\,\mathrm dA.
\end{aligned}
$$

Lo sforzo normale $N$ è positivo a trazione. Il momento $M_z$ è positivo quando tende le fibre inferiori. Il momento torcente $M_t$ è positivo secondo la regola della mano destra attorno a $x$. Queste relazioni permettono anche il controllo inverso di un campo di tensione. Se il campo è corretto, le sue risultanti restituiscono le azioni interne assegnate.
:::

:::osservazione{#principio-saint-venant titolo="Principio di De Saint Venant"}
Si consideri un prisma omogeneo in elasticità lineare, con superficie laterale libera e carichi applicati alle basi. Due distribuzioni applicate su una stessa base si dicono staticamente equivalenti se hanno la stessa forza risultante e lo stesso momento risultante rispetto a un punto. La loro differenza è quindi un carico autoequilibrato. Il campo di tensioni dovuto a questa differenza si attenua allontanandosi dalla regione di applicazione. La distanza necessaria dipende dalla geometria e dal modo in cui si trasmette il carico.

::struttura{nodi="A,0,0,-;B,7,0,-" poligoni="0,-0.65 7,-0.65 7,0.65 0,0.65" tratteggi="1.2,-0.65 1.2,0.65;5.8,-0.65 5.8,0.65" forze="0 0.35,-0.45,0;0 0,-0.45,0;0 -0.35,-0.45,0;7 0,1.35,0,N" etichette="3.5,1.05,tratto lontano dalle basi" titolo="Carichi alle basi e regione in cui si studia la distribuzione delle tensioni"}

Un tirante afferrato da una ganascia trasmette la forza attraverso zone di contatto concentrate. Un tirante uguale caricato con una trazione distribuita su tutta la base riceve la stessa risultante in modo diverso. Nelle vicinanze della ganascia le tensioni dei due modelli differiscono. Lontano dall’estremità, la distribuzione uniforme rappresenta la trazione centrata del tirante.

Fori, intagli e brusche variazioni di sezione producono a loro volta perturbazioni locali. Il campo nominale della trave fornisce la tensione di riferimento attorno a cui si valuta l’effetto del dettaglio. In corrispondenza del dettaglio serve un modello che ne rappresenti la geometria.
:::

:::esempio{titolo="Sezione di un profilo d’acciaio"}
In un profilo di questo tipo le ali e l’anima hanno larghezze diverse alla stessa scala del disegno. Quando si applica la formula di Jourawski, la larghezza locale coincide con quella dell’elemento attraversato dal taglio. Il momento statico si calcola invece sulla parte di sezione separata dal taglio.

<figure class="grafico foto-tecnica"><img src="/immagini/scienza-delle-costruzioni/profilo-h.webp" alt="Estremità di un profilo d’acciaio con ali e anima" width="1211" height="1024" loading="lazy" decoding="async"><figcaption>Sezione di un profilo d’acciaio. Foto ridimensionata di <a href="https://commons.wikimedia.org/wiki/File:Balk6.jpg">Anders Lagerås</a>, <a href="https://creativecommons.org/licenses/by-sa/2.5/">CC BY-SA 2.5</a>.</figcaption></figure>
:::

## Trazione e compressione centrate

::::teorema{#sforzo-normale-centrato titolo="Tensione e deformazione assiali"}
Per un prisma omogeneo isotropo in elasticità lineare, con superficie laterale libera e solo sforzo normale centrato $N$, la tensione normale vale $\sigma_x=\dfrac{N}{A}$ lontano dalle basi. Se $E$ è il modulo di Young e $L$ la lunghezza del tratto considerato, la deformazione longitudinale è $\varepsilon_x=\dfrac{N}{EA}$ e la variazione di lunghezza è $\Delta L=\dfrac{NL}{EA}$, a $N$, $E$ e $A$ costanti.

:::dimostrazione
La distribuzione costante soddisfa l’equilibrio locale, poiché tutte le sue derivate sono nulle. Poiché le tensioni tangenziali e quelle normali trasversali sono nulle, la superficie laterale è libera. La forza risultante vale $\sigma_x A$. I momenti risultanti sono nulli perché i momenti statici rispetto agli assi baricentrici sono nulli. La legge di Hooke dà quindi $\varepsilon_x=\dfrac{\sigma_x}{E}$. Integrando la deformazione costante lungo il tratto si ricava $\Delta L$.
:::
::::

:::esempio{titolo="Allungamento e contrazione trasversale"}
Un tirante a sezione rettangolare di lati $30\,\mathrm{mm}$ e $40\,\mathrm{mm}$, lungo $1\,200\,\mathrm{mm}$, è soggetto a $48\,\mathrm{kN}$ di trazione. Il modulo di Young è $200\,000\,\mathrm{MPa}$ e il coefficiente di Poisson è $\nu=0{,}30$. La tensione è $\dfrac{48\,000}{1\,200}\,\mathrm{MPa}=40\,\mathrm{MPa}$ e la deformazione assiale è $2\cdot10^{-4}$. La variazione di lunghezza è quindi $0{,}24\,\mathrm{mm}$.

::struttura{nodi="A,0,0,-;B,8,0,-" poligoni="0,-0.5 8,-0.5 8,0.5 0,0.5" forze="A,-1.45,0,N;B,1.45,0,N" quote="A,B,1 200 mm,0.95" titolo="Tirante prismatico in trazione centrata"}

Poiché le tensioni trasversali sono nulle, la legge di Hooke isotropa dà $\varepsilon_y=\varepsilon_z=-\nu\varepsilon_x$. Il lato iniziale di $40\,\mathrm{mm}$ si accorcia di $0{,}0024\,\mathrm{mm}$. La variazione laterale è quindi piccola rispetto all’allungamento assiale, pur comparendo nella descrizione tridimensionale dello stato di deformazione.

Per la compressione centrata vale lo stesso conto con $N<0$. Se l’asta è snella, la soluzione rettilinea perde stabilità a un carico che dipende dalla rigidezza flessionale e dai vincoli. Questa condizione appartiene allo studio della stabilità elastica.
:::

## Flessione retta e formula di Navier

::::teorema{#navier titolo="Formula di Navier"}
Si consideri una trave prismatica omogenea in elasticità lineare. Gli assi $y$ e $z$ sono principali baricentrici. Se agiscono solo $N$ e $M_z$, la tensione è

$$
\sigma_x(y)=\frac{N}{A}-\frac{M_z y}{I_z},
\qquad
I_z=\int_A y^2\,\mathrm dA.
$$

:::dimostrazione
L’idea è partire dalla deformazione longitudinale delle fibre. Nella flessione pura le sezioni possono ruotare restando piane e la deformazione assiale varia linearmente con $y$. Nella convenzione adottata le fibre a quota positiva si accorciano per momento positivo. Indicando con $\varepsilon_0$ la deformazione assiale nel baricentro e con $\kappa$ il coefficiente che misura il gradiente di deformazione, si ottiene $\varepsilon_x=\varepsilon_0-\kappa y$. Poiché il materiale è elastico lineare omogeneo, la tensione vale $E(\varepsilon_0-\kappa y)$.

L’integrale della parte lineare in $y$ è nullo, perché l’asse è baricentrico. Pertanto $N=EA\varepsilon_0$. Nel momento rispetto a $z$, invece, la parte costante dà contributo nullo e la parte lineare dà $M_z=EI_z\kappa$. Sostituendo le due espressioni si ottiene la formula.
:::

Se $N=0$ e $M_z\ne0$, l’asse neutro è $y=0$. Per $M_z>0$, il lembo superiore è in compressione e l’inferiore è in trazione. Su una sezione priva di simmetria rispetto a $z$, i due lembi possono avere moduli di tensione diversi, perché la loro distanza da $z$ è diversa.
::::

:::esempio{titolo="Tensioni ai lembi di un rettangolo"}
Una sezione larga $60\,\mathrm{mm}$ e alta $100\,\mathrm{mm}$ ha $I_z=\dfrac{60\cdot100^3}{12}\,\mathrm{mm^4}=5\cdot10^6\,\mathrm{mm^4}$. Il modulo resistente è il rapporto fra $I_z$ e la distanza del lembo, qui $W_z=100\,000\,\mathrm{mm^3}$. Con $M_z=2\,\mathrm{kN\,m}$ la tensione superiore vale $-20\,\mathrm{MPa}$ e quella inferiore vale $20\,\mathrm{MPa}$.

::grafico{curve="t,-0.4*t,-50,50" xmin=-55 xmax=55 ymin=-25 ymax=25 nomi="y,σ" legenda="\sigma_x=-0{,}4y\quad(y\ \text{in mm},\ \sigma_x\ \text{in MPa})" punti="-50,20;0,0;50,-20" titolo="Distribuzione della tensione normale nella sezione rettangolare"}

Se alla stessa sezione si aggiunge una compressione centrata di $30\,\mathrm{kN}$, il contributo $\dfrac{N}{A}$ vale $-5\,\mathrm{MPa}$. La pendenza del diagramma resta invariata, mentre tutte le ordinate diminuiscono di $5\,\mathrm{MPa}$. La quota neutra si sposta a $-12{,}5\,\mathrm{mm}$. La parte compressa della sezione occupa così più di metà altezza.
:::

## Flessione deviata e pressoflessione

:::teorema{#flessione-deviata titolo="Flessione rispetto a due assi principali"}
Quando si sommano due flessioni rette attorno agli assi principali baricentrici $y$ e $z$, la tensione normale è una funzione affine nelle coordinate della sezione:

$$
\sigma_x(y,z)=\frac{N}{A}-\frac{M_z y}{I_z}+\frac{M_y z}{I_y},
\qquad
I_y=\int_A z^2\,\mathrm dA.
$$

Il segno del termine in $z$ segue dalla definizione $M_y=\int_A z\sigma_x\,\mathrm dA$. Poiché gli assi sono principali, $\int_A yz\,\mathrm dA=0$. Ogni termine di flessione restituisce quindi solo il proprio momento. La retta neutra si trova ponendo $\sigma_x=0$. L’asse può anche passare all’esterno della sezione, quando il contributo uniforme è abbastanza grande da rendere tutte le tensioni dello stesso segno.

::struttura{poligoni="-20,-30 20,-30 20,30 -20,30" tratteggi="-20,-20 20,20" frecce="-25,0,25,0,z;0,-35,0,35,y" punti="20,15,P" quote="-20 -30,20 -30,40 mm,5;20 -30,20 30,60 mm,13" riferimento=0 titolo="Retta neutra inclinata e punto P sulla sezione"}

Per esempio, con $N=0$, $I_z=720\,000\,\mathrm{mm^4}$, $I_y=320\,000\,\mathrm{mm^4}$, $M_z=1{,}44\,\mathrm{kN\,m}$ e $M_y=0{,}64\,\mathrm{kN\,m}$, i due coefficienti hanno lo stesso modulo. La retta neutra è quindi $y=z$. Nel punto $P$ con $y=15\,\mathrm{mm}$ e $z=20\,\mathrm{mm}$ la tensione vale $-30\,\mathrm{MPa}+40\,\mathrm{MPa}=10\,\mathrm{MPa}$. Su un poligono i valori estremi della funzione affine si cercano nei vertici, poiché sul segmento che unisce due punti la tensione varia linearmente.
:::

:::osservazione{titolo="Calcolo con assi baricentrici non principali"}
In una sezione a L, gli assi paralleli ai lati e passanti per il baricentro in generale hanno momento centrifugo diverso da zero. Si può ruotare il riferimento agli assi principali e scomporre il momento nel nuovo riferimento. L’altra possibilità è scrivere direttamente $\sigma_x=\dfrac{N}{A}+a y+b z$ e determinare insieme i coefficienti $a$ e $b$. Se $I_{yz}=\int_A yz\,\mathrm dA$, le condizioni sui momenti diventano

$$
\begin{cases}
a I_z+b I_{yz}=-M_z,\\
a I_{yz}+b I_y=M_y.
\end{cases}
$$

Il termine $I_{yz}$ collega le due equazioni. Per una sezione di area positiva estesa in due direzioni, $I_y I_z>I_{yz}^2$ per la disuguaglianza di Cauchy–Schwarz. Il sistema ha pertanto una sola soluzione. Nel caso di assi principali $I_{yz}=0$, quindi i due coefficienti si ricavano separatamente e si ritrova la formula della flessione deviata. Le coordinate del punto in cui si valuta la tensione devono riferirsi agli stessi assi usati per i momenti e le inerzie.
:::

:::esempio{#nocciolo titolo="Compressione eccentrica e nocciolo centrale"}
Una forza di compressione di modulo $P$ ha retta d’azione passante per $y=e_y$, $z=e_z$. La risultante assiale è $N=-P$. Il trasporto al baricentro conserva i momenti $M_z=Pe_y$ e $M_y=-Pe_z$. Per un rettangolo di altezza $h$ lungo $y$ e larghezza $b$ lungo $z$, la tensione massima si raggiunge al vertice opposto al punto di applicazione. Sostituendo $I_z=\dfrac{Ah^2}{12}$ e $I_y=\dfrac{Ab^2}{12}$ si ottiene

$$
\sigma_{\max}=\frac{P}{A}
\left(-1+\frac{6|e_y|}{h}+\frac{6|e_z|}{b}\right).
$$

::struttura{poligoni="-60,-90 60,-90 60,90 -60,90" linee="0,30 20,0 0,-30 -20,0 0,30" frecce="-75,0,75,0,z;0,-103,0,103,y" punti="10,15,P" riferimento=0 titolo="Nocciolo centrale per un rettangolo di lati 120 mm e 180 mm"}

Il **nocciolo centrale** è il luogo dei punti di applicazione per cui la compressione resta tale in tutta la sezione. Per il rettangolo è il rombo dato da $\dfrac{6|e_y|}{h}+\dfrac{6|e_z|}{b}\le1$. Se l’eccentricità è solo verticale, la condizione si riduce a $|e_y|\le\dfrac{h}{6}$. Se il carico passa su un lato del rombo, almeno un vertice ha tensione nulla. Una sezione non resistente a trazione può richiedere un modello di contatto parziale se la retta d’azione esce dal nocciolo.
:::

## Taglio e formula di Jourawski

::::teorema{#jourawski titolo="Flusso e tensione tangenziale media"}
Si consideri una trave prismatica snella, simmetrica rispetto a $y$, con taglio verticale. Si indica con $V_y$ la sua risultante sulla faccia di normale positiva $x$. Con la convenzione del diagramma di taglio adottata in questo corso vale $V_y=-T$. Alla quota $y$, si chiama $b(y)$ la larghezza del materiale sulla striscia orizzontale e $S_z(y)$ il momento statico, rispetto a $z$, dell’area sopra la striscia. La componente tangenziale media sulla striscia vale

$$
\overline{\tau}_{xy}(y)=\frac{V_y S_z(y)}{I_z b(y)}.
$$

:::dimostrazione
La tensione da flessione produce, nella parte di sezione sopra la striscia, una risultante assiale pari a $-\dfrac{M_z S_z}{I_z}$. Tra due sezioni a distanza $\mathrm dx$, questa risultante cambia di $-\dfrac{T S_z}{I_z}\,\mathrm dx$, perché $M_z'=T$. Il concio superiore è in equilibrio se sulla sua faccia inferiore agisce una forza longitudinale opposta a questa variazione. La faccia inferiore ha normale $-y$. Per la simmetria delle tensioni tangenziali, la trazione longitudinale su quella faccia ha segno opposto a $\tau_{xy}$. Dividendo la forza per $b\,\mathrm dx$ e usando $V_y=-T$ si ottiene la formula.
:::

Il prodotto $q_V=b\overline{\tau}_{xy}$ è il **flusso di taglio** e si misura in $\mathrm{N/mm}$. La divisione per la larghezza locale dà una tensione media in $\mathrm{MPa}$. La formula è utile per valutare quanta forza longitudinale deve trasmettere un collegamento lungo la trave.
::::

:::esempio{titolo="Taglio in una sezione rettangolare"}
In un rettangolo di larghezza $b$ e altezza $h$, l’area sopra la quota $y$ è un rettangolo di altezza $\dfrac h2-y$. Il suo baricentro ha quota $\dfrac{\frac h2+y}{2}$, quindi $S_z(y)=\dfrac b2(\dfrac{h^2}{4}-y^2)$. Sostituendo $I_z=\dfrac{bh^3}{12}$ si ottiene

$$
\overline{\tau}_{xy}(y)=\frac{3V_y}{2A}
\left(1-\frac{4y^2}{h^2}\right).
$$

::grafico{curve="t,1.875*(1-t^2/120^2),-120,120" xmin=-130 xmax=130 ymin=-0.15 ymax=2.3 nomi="y,τ" legenda="|\tau_{xy}|=1{,}875\left(1-\dfrac{y^2}{120^2}\right)\quad(y\ \text{in mm},\ \tau_{xy}\ \text{in MPa})" punti="-120,0;0,1.875;60,1.40625;120,0" titolo="Taglio medio per una sezione 120 × 240 mm e una forza di 36 kN"}

La parabola si annulla ai due lembi e raggiunge il massimo in mezzeria. Il valore medio sull’intera sezione è $\dfrac{V_y}{A}$, mentre il valore al baricentro è una volta e mezzo più grande. Per $b=120\,\mathrm{mm}$, $h=240\,\mathrm{mm}$ e $|V_y|=36\,\mathrm{kN}$, i moduli al baricentro e a $60\,\mathrm{mm}$ valgono rispettivamente $1{,}875\,\mathrm{MPa}$ e $1{,}40625\,\mathrm{MPa}$.
:::

:::osservazione{titolo="Taglio nell’ala e nell’anima"}
Per una sezione a doppia T, vicino al raccordo superiore il momento statico tende allo stesso valore da entrambi i lati del raccordo. Poiché la larghezza passa da quella dell’ala a quella dell’anima, il flusso rimane continuo nel modello e la tensione media cambia. Per esempio, se l’ala è larga $100\,\mathrm{mm}$ e l’anima è spessa $8\,\mathrm{mm}$, il rapporto fra le due tensioni medie in modulo è $12{,}5$, con valore maggiore nell’anima.

::struttura{poligoni="-50,-50 50,-50 50,-38 4,-38 4,38 50,38 50,50 -50,50 -50,38 -4,38 -4,-38 -50,-38" tratteggi="-50,38 50,38" frecce="-61,0,61,0,z;0,-58,0,58,y" etichette="37,24,attacco superiore" riferimento=0 titolo="Cambio di larghezza locale al passaggio fra ala e anima"}

Il modello restituisce la media su due strisce diverse. In un profilo reale il raccordo ha una propria geometria e il campo locale è tridimensionale. Perciò il rapporto tra le medie serve a confrontare ala e anima, mentre la tensione puntuale al raccordo richiede una rappresentazione locale.
:::

## Torsione della sezione circolare

::::teorema{#torsione-circolare titolo="Torsione di una sezione circolare"}
In un prisma circolare pieno o anulare, omogeneo e isotropo, le sezioni ruotano rigidamente in torsione pura. Si chiamino $R$ il raggio esterno, $r$ il raggio interno, $\rho$ la distanza dall’asse, $G$ il modulo di taglio e $\vartheta(x)$ la rotazione della sezione attorno a $x$. Per un tratto con rigidezza costante,

$$
\begin{aligned}
J&=\frac{\pi}{2}(R^4-r^4),\\[4pt]
|\tau(\rho)|&=\frac{|M_t|\rho}{J},\\[4pt]
\vartheta'(x)&=\frac{M_t}{GJ}.
\end{aligned}
$$

:::dimostrazione
Un punto a distanza $\rho$ si sposta di $\rho\,\mathrm d\vartheta$ fra due sezioni vicine. Dividendo per la loro distanza $\mathrm dx$ si ricava la deformazione tangenziale $\gamma=\rho\vartheta'$. La legge elastica dà $\tau=G\rho\vartheta'$. Ogni tensione tangenziale agisce lungo la circonferenza, quindi il suo braccio rispetto all’asse è $\rho$. Integrando si ottiene $M_t=G\vartheta'\int_A\rho^2\,\mathrm dA$. Per un anello, l’elemento di area integrato sull’angolo è $2\pi\rho\,\mathrm d\rho$. Pertanto $J=\int_r^R2\pi\rho^3\,\mathrm d\rho=\dfrac{\pi}{2}(R^4-r^4)$.
:::

La tensione cresce linearmente con il raggio nel materiale. Nel pieno è nulla sull’asse, mentre nell’anello la parete interna si trova già a distanza $r$. Il massimo cade sulla superficie esterna. L’angolo relativo fra gli estremi di un tratto di lunghezza $L$ vale $\varphi=\dfrac{M_t L}{GJ}$, con la frazione intesa come rapporto fra momento per lunghezza e rigidezza torsionale.
::::

:::esempio{titolo="Tubo soggetto a momento torcente"}
Un tubo di raggi $30\,\mathrm{mm}$ e $20\,\mathrm{mm}$ ha $J=325\,000\pi\,\mathrm{mm^4}$. Con $M_t=260\,\mathrm{N\,m}$ la tensione tangenziale esterna ha modulo $\dfrac{24}{\pi}\,\mathrm{MPa}$. Su una lunghezza di $400\,\mathrm{mm}$ e con $G=80\,000\,\mathrm{MPa}$, l’angolo relativo vale $\dfrac{0{,}004}{\pi}\,\mathrm{rad}$.

::struttura{cerchi="0,0,30;0,0,20,foro" frecce="-38,0,43,0,z;0,-38,0,38,y" punti="20,0,P_i;30,0,P_e" riferimento=0 titolo="Punti sulla superficie interna ed esterna del tubo circolare"}

Sulla superficie interna il modulo è pari a due terzi del valore esterno, perché il raggio interno è due terzi di quello esterno. Il foro riduce la rigidezza torsionale rispetto al pieno. La riduzione si valuta sottraendo il contributo del raggio interno alla quarta potenza, poiché le parti di materiale più lontane dall’asse partecipano maggiormente alla trasmissione del momento.
:::

## Profili sottili chiusi

::::teorema{#bredt titolo="Formula di Bredt per una cella chiusa"}
Una parete sottile ha spessore $t(s)$ piccolo rispetto alle dimensioni della sezione. Il parametro $s$ misura la distanza lungo la linea media e $A_m$ è l’area racchiusa da tale linea. In torsione pura, per una sola cella chiusa e un materiale omogeneo, il flusso $q_t$ e la costante torsionale $J_t$ sono

$$
q_t=\frac{M_t}{2A_m},
\qquad
\overline{\tau}_t(s)=\frac{q_t}{t(s)},
\qquad
J_t=\frac{4A_m^2}{\displaystyle\oint\frac{\mathrm ds}{t(s)}}.
$$

:::dimostrazione
L’equilibrio di un elemento longitudinale di parete senza forze tangenziali esterne rende uguale il flusso sulle due sezioni contigue del contorno. Quindi $q_t$ è costante. La forza elementare di modulo $q_t\,\mathrm ds$ è tangente alla linea media. Il suo momento rispetto a $x$ è $q_t(y\,\mathrm dz-z\,\mathrm dy)$. Integrando lungo il contorno orientato, l’integrale geometrico vale $2A_m$. Da qui segue $M_t=2A_m q_t$.

L’energia elastica per unità di lunghezza è $\oint\dfrac{q_t^2}{2Gt(s)}\,\mathrm ds$, poiché la tensione media è $\dfrac{q_t}{t(s)}$ e l’area elementare è $t(s)\,\mathrm ds$. Sostituendo il flusso appena trovato e confrontando con $\dfrac{M_t^2}{2GJ_t}$ si ricava la formula della costante torsionale.
:::
::::

:::esempio{titolo="Pareti di spessore differente"}
Per una cella con linea media rettangolare di lati $80\,\mathrm{mm}$ e $60\,\mathrm{mm}$, l’area racchiusa vale $4\,800\,\mathrm{mm^2}$. Se il momento torcente è $480\,\mathrm{N\,m}$, il flusso è $50\,\mathrm{N/mm}$. Nelle pareti verticali di spessore $2\,\mathrm{mm}$ la tensione media vale $25\,\mathrm{MPa}$. Nelle pareti orizzontali di spessore $4\,\mathrm{mm}$ vale $12{,}5\,\mathrm{MPa}$. La differenza dipende dallo spessore locale, mentre il flusso è lo stesso.

::struttura{poligoni="-41,-32 41,-32 41,32 -41,32" fori="-39,-28 39,-28 39,28 -39,28" tratteggi="-40,-30 40,-30 40,30 -40,30 -40,-30" frecce="-52,0,52,0,z;0,-40,0,40,y" quote="-40 -30,40 -30,80 mm,7;40 -30,40 30,60 mm,23" riferimento=0 titolo="Cella chiusa con quote riferite alla linea media tratteggiata"}

Il rapporto integrale $\oint\dfrac{\mathrm ds}{t(s)}$ si calcola sommando le lunghezze delle singole pareti divise per i rispettivi spessori. Per l’esempio vale $\dfrac{2\cdot80}{4}+\dfrac{2\cdot60}{2}=100$, da cui $J_t=921\,600\,\mathrm{mm^4}$. Per una sezione a più celle occorre invece introdurre un flusso circolante per ogni cella e imporre la stessa rotazione per unità di lunghezza.
:::

## Profili sottili aperti

:::teorema{#torsione-aperta titolo="Costante torsionale di un profilo aperto"}
Una sezione sottile aperta si può approssimare con strisce di lunghezza $b_i$ sulla linea media e spessore $t_i$, con $t_i$ piccolo rispetto a $b_i$. In torsione uniforme e con ingobbamento libero, la costante torsionale del profilo è

$$
J_t\simeq\sum_i\frac{b_i t_i^3}{3}.
$$

L’**ingobbamento** è lo spostamento longitudinale che rende la sezione deformata fuori piano. In una striscia sottile, lontano dai bordi corti e dai raccordi, la tensione tangenziale cresce in modulo con la distanza $|n|$ dalla linea media della parete. Il modello dà $|\tau(n)|\simeq2G|\vartheta'||n|$. Alle due facce della parete gli sforzi hanno versi opposti e il modulo massimo vale $G|\vartheta'|t_i=\dfrac{|M_t|t_i}{J_t}$.

Per ricavare $J_t$ si integra la densità di energia elastica $\dfrac{\tau^2}{2G}$ nello spessore. Il contributo della striscia è $\dfrac{G\vartheta'^2 b_i t_i^3}{6}$ per unità di lunghezza. La somma coincide con $\dfrac{GJ_t\vartheta'^2}{2}$. La rigidezza torsionale cresce dunque con il cubo dello spessore. Una parete molto sottile dà un contributo piccolo anche se la sua linea media è lunga.
:::

:::esempio{titolo="Confronto fra una cella e lo stesso profilo con un taglio"}
Si consideri un rettangolo chiuso di lati medi $80\,\mathrm{mm}$ e $60\,\mathrm{mm}$, con spessore uniforme $2\,\mathrm{mm}$. Il perimetro medio è $280\,\mathrm{mm}$ e la formula di Bredt dà $J_t\simeq658\,286\,\mathrm{mm^4}$. Si pratica ora un taglio longitudinale sottile che interrompe la continuità di una parete. La lunghezza complessiva delle strisce resta circa $280\,\mathrm{mm}$ e la formula del profilo aperto dà $J_t\simeq747\,\mathrm{mm^4}$.

::struttura{linee="-40,-30 40,-30 40,30 5,30;-5,30 -40,30 -40,-30" frecce="-49,0,49,0,z;0,-39,0,39,y" etichette="28,42,taglio longitudinale" riferimento=0 titolo="Linea media del profilo aperto da una fessura longitudinale"}

Il rapporto delle due costanti vale circa $882$. A parità di momento e materiale, la rotazione per unità di lunghezza è inversamente proporzionale a $J_t$, quindi cresce dello stesso fattore nel modello. Questo confronto spiega perché due profili di peso simile possono avere rigidezze torsionali molto diverse. Vicino a un incastro che ostacola l’ingobbamento possono sorgere tensioni longitudinali aggiuntive. Le formule della torsione uniforme si applicano alle regioni in cui tale effetto è trascurabile.
:::

## Combinazione delle tensioni in un punto

:::teorema{#von-mises-flessione-torsione titolo="Von Mises per una tensione normale e due tangenziali"}
Poiché il problema elastico è lineare, le tensioni delle singole azioni interne si sommano componente per componente. Per uno stato con sole componenti $\sigma_x$, $\tau_{xy}$ e $\tau_{xz}$, la tensione equivalente di von Mises è

$$
\sigma_{\mathrm{eq}}=
\sqrt{\sigma_x^2+3(\tau_{xy}^2+\tau_{xz}^2)}.
$$

Le due componenti tangenziali formano un vettore nel piano della sezione. Una rotazione attorno a $x$ può allineare un asse a quel vettore e portare l’altra componente a zero. Il modulo del vettore è $\sqrt{\tau_{xy}^2+\tau_{xz}^2}$ e il criterio di von Mises è indipendente dalla rotazione degli assi. Si ottiene così la formula piana con una sola componente di taglio equivalente.

La somma delle tensioni si esegue **nello stesso punto**. Se la trave è soggetta sia a taglio verticale sia a torsione, il contributo torsionale può avere verso concorde o discorde con quello del taglio, a seconda del punto. Prima si sommano le componenti con segno, quindi si calcola l’equivalente.
:::

:::esempio{titolo="Flessione e taglio in un rettangolo"}
In un rettangolo soggetto a sola flessione e taglio verticale, la tensione normale da flessione ha massimo modulo ai lembi, dove la tensione tangenziale di Jourawski si annulla. Al baricentro la tensione normale è nulla e il taglio raggiunge il massimo. Si supponga che le tensioni ai lembi siano $\pm30\,\mathrm{MPa}$ e che il massimo di taglio sia $12\,\mathrm{MPa}$. Ai lembi l’equivalente vale $30\,\mathrm{MPa}$. Al baricentro vale $12\sqrt3\,\mathrm{MPa}$.

Ponendo $\eta=\dfrac{2y}{h}$, il quadrato dell’equivalente vale $900\eta^2+432(1-\eta^2)^2$ in $\mathrm{MPa^2}$. Sviluppando si ottiene $432+36\eta^2+432\eta^4$. Poiché tutti i coefficienti non costanti sono positivi, l’espressione aumenta con $|\eta|$ e il massimo cade ai lembi. Sommare in un unico punto il massimo della tensione normale e il massimo del taglio darebbe invece $\sqrt{1\,332}\,\mathrm{MPa}$, valore che questa sezione non raggiunge.
:::
