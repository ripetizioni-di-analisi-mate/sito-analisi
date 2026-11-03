---
titolo: Autoinduzione, circuiti RL ed energia magnetica
sommario: Che cos'è l'induttanza di un circuito e come si calcola per un solenoide, come cresce e come si annulla la corrente in un circuito RL, quanta energia è immagazzinata in un induttore e nel campo magnetico, e che cos'è la mutua induzione tra due circuiti.
---

## Autoinduzione e induttanza

:::osservazione{#esperimento-autoinduzione titolo="Accensione ritardata di una lampadina"}
Due lampadine uguali sono collegate in parallelo allo stesso generatore. La prima è in serie con una bobina di molte spire avvolte su un nucleo di ferro, la seconda è in serie con un resistore che ha la stessa resistenza della bobina. Alla chiusura dell'interruttore la seconda lampadina si accende subito, mentre la prima raggiunge la stessa luminosità con un ritardo ben visibile. A regime le due lampadine sono ugualmente luminose, perché i due rami hanno la stessa resistenza.

Se ne conclude che nella bobina, mentre la corrente cresce, si genera una forza elettromotrice che si oppone alla crescita. La corrente della bobina genera un campo magnetico, e il flusso di questo campo attraverso le spire della bobina stessa varia insieme alla corrente. Per la legge di Faraday-Neumann-Lenz si genera quindi una f.e.m. indotta proprio nel circuito che produce il campo. Questo fenomeno si chiama **autoinduzione**.
:::

:::richiamo{titolo="Legge di Faraday-Neumann-Lenz"}
Se il flusso $\Phi_B$ del campo magnetico concatenato con un circuito varia nel tempo, nel circuito si genera la forza elettromotrice indotta $\mathcal{E} = -\dfrac{d\Phi_B}{dt}$. Il segno meno esprime la legge di Lenz, secondo cui la corrente indotta si oppone alla variazione del flusso che la genera.
:::

:::definizione{#induttanza titolo="Induttanza"}
Un circuito percorso dalla corrente $i$ genera un campo magnetico, e il flusso di questo campo attraverso il circuito stesso si chiama **flusso autoconcatenato**. In aria il campo generato è proporzionale alla corrente in ogni punto, come mostrano le formule del campo di un filo, di una spira e di un solenoide; perciò anche il flusso autoconcatenato è proporzionale a $i$. L'**induttanza** del circuito, detta anche coefficiente di autoinduzione, è il rapporto
$$
L = \frac{\Phi_B}{i} .
$$
In aria l'induttanza dipende solo dalla forma e dalle dimensioni del circuito, e non dalla corrente. Si misura in **henry**, con $1\,\mathrm{H} = 1\,\mathrm{Wb/A}$. Per esempio, se una bobina percorsa da $2{,}0\,\mathrm{A}$ ha un flusso autoconcatenato di $6{,}0 \cdot 10^{-3}\,\mathrm{Wb}$, la sua induttanza è
$$
L = \frac{6{,}0 \cdot 10^{-3}\,\mathrm{Wb}}{2{,}0\,\mathrm{A}} = 3{,}0 \cdot 10^{-3}\,\mathrm{H} = 3{,}0\,\mathrm{mH} .
$$
L'induttanza serve a calcolare la f.e.m. autoindotta, la durata dei transitori nei circuiti e l'energia immagazzinata in una bobina.
:::

::::teorema{#fem-autoindotta titolo="F.e.m. autoindotta"}
Sia $L$ l'induttanza, costante, di un circuito percorso dalla corrente $i(t)$. Allora nel circuito si genera la **f.e.m. autoindotta**
$$
\mathcal{E}_L = -L\,\frac{di}{dt} .
$$
Il prodotto di un henry per un ampere al secondo è un volt, perché $1\,\mathrm{H \cdot A/s} = 1\,\mathrm{Wb/s} = 1\,\mathrm{V}$. Se la corrente varia in modo uniforme di $\Delta i$ nell'intervallo $\Delta t$, la derivata è uguale al rapporto $\dfrac{\Delta i}{\Delta t}$ e si ha $\mathcal{E}_L = -L\,\dfrac{\Delta i}{\Delta t}$; se la variazione non è uniforme, questo rapporto dà la f.e.m. autoindotta media. Per esempio, se la corrente in una bobina con $L = 0{,}20\,\mathrm{H}$ cresce in modo uniforme da $0$ a $3{,}0\,\mathrm{A}$ in $50\,\mathrm{ms}$, si ha
$$
\frac{\Delta i}{\Delta t} = \frac{3{,}0\,\mathrm{A}}{0{,}050\,\mathrm{s}} = 60\,\mathrm{A/s} ,
\qquad
\mathcal{E}_L = -0{,}20 \cdot 60\,\mathrm{V} = -12\,\mathrm{V} .
$$
Il segno meno indica che la f.e.m. autoindotta agisce in verso opposto alla corrente.

:::dimostrazione
Per la definizione di induttanza il flusso autoconcatenato è $\Phi_B = L\,i$. Si applica la **legge di Faraday-Neumann-Lenz** e, poiché $L$ è costante, la si porta fuori dalla derivata:
$$
\mathcal{E}_L = -\frac{d\Phi_B}{dt} = -\frac{d\,(L\,i)}{dt} = -L\,\frac{di}{dt} .
$$
:::
::::

:::osservazione{#verso-fem-autoindotta titolo="Verso della f.e.m. autoindotta"}
Per la legge di Lenz la f.e.m. autoindotta si oppone alla *variazione* della corrente.

- Se la corrente cresce, $\dfrac{di}{dt} > 0$ e $\mathcal{E}_L < 0$, quindi la f.e.m. autoindotta agisce in verso opposto alla corrente e ne rallenta la crescita.
- Se la corrente diminuisce, $\dfrac{di}{dt} < 0$ e $\mathcal{E}_L > 0$, quindi la f.e.m. autoindotta agisce nello stesso verso della corrente e ne rallenta la diminuzione.
- Se la corrente è costante, la f.e.m. autoindotta è nulla.

In meccanica la massa di un corpo si oppone alle variazioni della sua velocità. Allo stesso modo l'induttanza di un circuito si oppone alle variazioni della corrente, e per questa analogia l'induttanza viene paragonata alla massa.
:::

:::esempio{titolo="Una corrente che cresce, resta costante e diminuisce"}
In una bobina con $L = 20\,\mathrm{mH}$ la corrente cresce in modo uniforme da $0$ a $3{,}0\,\mathrm{A}$ nei primi $5{,}0\,\mathrm{ms}$, resta costante per altri $5{,}0\,\mathrm{ms}$ e poi diminuisce in modo uniforme fino a $0$ in $10\,\mathrm{ms}$. In ogni tratto la derivata della corrente è il coefficiente angolare del segmento di grafico.

- Per $0 < t < 5{,}0\,\mathrm{ms}$ si ha $\dfrac{di}{dt} = \dfrac{3{,}0\,\mathrm{A}}{5{,}0 \cdot 10^{-3}\,\mathrm{s}} = 600\,\mathrm{A/s}$, quindi $\mathcal{E}_L = -0{,}020 \cdot 600\,\mathrm{V} = -12\,\mathrm{V}$.
- Per $5{,}0\,\mathrm{ms} < t < 10\,\mathrm{ms}$ la corrente è costante, quindi $\mathcal{E}_L = 0$.
- Per $10\,\mathrm{ms} < t < 20\,\mathrm{ms}$ si ha $\dfrac{di}{dt} = \dfrac{-3{,}0\,\mathrm{A}}{1{,}0 \cdot 10^{-2}\,\mathrm{s}} = -300\,\mathrm{A/s}$, quindi $\mathcal{E}_L = -0{,}020 \cdot (-300)\,\mathrm{V} = 6{,}0\,\mathrm{V}$.

La f.e.m. è negativa mentre la corrente cresce e positiva mentre la corrente diminuisce, come prevede la legge di Lenz. In modulo è maggiore nel primo tratto, dove la corrente varia più rapidamente.

::grafico{f="max(0,min(0.6*x,3,3-0.3*(x-10)))+0*sqrt(x)" segmenti="5,0,5,3;10,0,10,3" xmin=-3 xmax=24 ymin=-1 ymax=4 nomi="t,i" legenda=0 titolo="Corrente nella bobina, in ampere, con il tempo in millisecondi: la f.e.m. autoindotta vale $-12\,\mathrm{V}$ nel tratto in salita, $0$ nel tratto orizzontale e $6{,}0\,\mathrm{V}$ nel tratto in discesa"}

:::

:::attenzione
La f.e.m. autoindotta dipende dalla rapidità con cui varia la corrente, e *non* dal valore della corrente. Nella bobina con $L = 20\,\mathrm{mH}$ dell'esempio, all'istante iniziale la corrente è nulla e la f.e.m. vale $-12\,\mathrm{V}$, mentre tra $5{,}0\,\mathrm{ms}$ e $10\,\mathrm{ms}$ la corrente vale $3{,}0\,\mathrm{A}$ e la f.e.m. è nulla.
:::

## Induttanza di un solenoide

:::richiamo{titolo="Campo magnetico di un solenoide"}
All'interno di un solenoide in aria di lunghezza $\ell$, con $N$ spire, percorso dalla corrente $i$ e lungo rispetto al raggio delle spire, il campo magnetico è uniforme, parallelo all'asse e di modulo $B = \mu_0\,\dfrac{N}{\ell}\,i$; all'esterno il campo è trascurabile.
:::

::::teorema{#induttanza-solenoide titolo="Induttanza di un solenoide"}
Un solenoide in aria di lunghezza $\ell$ è formato da $N$ spire di area $S$ ed è lungo rispetto al raggio delle spire. Allora la sua induttanza è
$$
L = \frac{\mu_0 N^2 S}{\ell} .
$$
L'induttanza dipende solo dalla geometria del solenoide ed è proporzionale al *quadrato* del numero di spire. Per un solenoide lungo $25\,\mathrm{cm}$, con $500$ spire di raggio $1{,}0\,\mathrm{cm}$, l'area di una spira è $S = \pi \cdot (0{,}010\,\mathrm{m})^2 = 3{,}14 \cdot 10^{-4}\,\mathrm{m^2}$ e
$$
L = \frac{4\pi \cdot 10^{-7} \cdot 500^2 \cdot 3{,}14 \cdot 10^{-4}}{0{,}25}\,\mathrm{H} = 3{,}95 \cdot 10^{-4}\,\mathrm{H} \approx 0{,}39\,\mathrm{mH} .
$$

::grafico{assi=0 linee="0,1.2 6,1.2;0,-1.2 6,-1.2" vettori="0.6,0.5,2.2,0.5,B;0.6,-0.5,2.2,-0.5;3.4,0.5,5.0,0.5;3.4,-0.5,5.0,-0.5" etichette="0.25,1.2,⊙;0.75,1.2,⊙;1.25,1.2,⊙;1.75,1.2,⊙;2.25,1.2,⊙;2.75,1.2,⊙;3.25,1.2,⊙;3.75,1.2,⊙;4.25,1.2,⊙;4.75,1.2,⊙;5.25,1.2,⊙;5.75,1.2,⊙;0.25,-1.2,⊗;0.75,-1.2,⊗;1.25,-1.2,⊗;1.75,-1.2,⊗;2.25,-1.2,⊗;2.75,-1.2,⊗;3.25,-1.2,⊗;3.75,-1.2,⊗;4.25,-1.2,⊗;4.75,-1.2,⊗;5.25,-1.2,⊗;5.75,-1.2,⊗;6.5,0,ℓ" segmenti="6.2,1.2,6.2,-1.2" unicolore=1 xmin=-0.5 xmax=7 ymin=-1.9 ymax=1.9 uguale=1 titolo="Sezione di un solenoide: la corrente esce dal foglio nelle spire in alto ($\odot$) ed entra nel foglio in quelle in basso ($\otimes$); all'interno il campo $\vec{B}$ è uniforme e parallelo all'asse, e attraversa tutte le $N$ spire"}

:::dimostrazione
L'idea è calcolare il flusso autoconcatenato e dividerlo per la corrente. Sia $i$ la corrente nel solenoide. Per il campo di un solenoide, all'interno il campo è uniforme e vale $B = \mu_0\,\dfrac{N}{\ell}\,i$. Il campo è perpendicolare al piano di ogni spira, quindi il flusso attraverso una spira è il prodotto $B S$. Le spire sono $N$, perciò il flusso concatenato con tutto il solenoide è $N$ volte il flusso attraverso una spira:
$$
\Phi_B = N B S = N \cdot \mu_0\,\frac{N}{\ell}\,i \cdot S = \frac{\mu_0 N^2 S}{\ell}\,i .
$$
Per la definizione di induttanza si ottiene
$$
L = \frac{\Phi_B}{i} = \frac{\mu_0 N^2 S}{\ell} .
$$
Il numero $N$ compare due volte, una perché il campo è proporzionale a $N$ e una perché il flusso si somma su $N$ spire; da qui viene il fattore $N^2$.
:::
::::

:::osservazione{#nucleo-ferromagnetico titolo="Solenoide con nucleo di ferro"}
Se all'interno del solenoide si inserisce un nucleo di materiale ferromagnetico con permeabilità magnetica relativa $\mu_r$, il campo all'interno diventa $\mu_r$ volte più intenso, come si è visto nell'argomento sulle sorgenti del campo magnetico e il teorema di Ampère. Il flusso autoconcatenato aumenta dello stesso fattore, quindi anche l'induttanza:
$$
L = \frac{\mu_r \mu_0 N^2 S}{\ell} .
$$
Con un nucleo di $\mu_r = 200$ il solenoide di $500$ spire passa da $0{,}39\,\mathrm{mH}$ a circa $79\,\mathrm{mH}$. Il nucleo permette quindi di ottenere induttanze grandi con poche spire. Nei materiali ferromagnetici $\mu_r$ dipende dal campo, perciò la formula dà solo una stima dell'induttanza.
:::

## Induttore e circuito RL

:::definizione{#induttore titolo="Induttore"}
Un **induttore** è un componente di un circuito, di solito una bobina, costruito per avere un'induttanza non trascurabile; negli schemi si disegna come una linea a spirale. Un induttore si dice *ideale* se la sua resistenza è nulla. Una bobina reale di induttanza $L$ e resistenza $R_b$ si rappresenta come un induttore ideale $L$ in serie con un resistore $R_b$, e con questo modello anche le bobine reali si studiano con le leggi dei circuiti. I fili di collegamento e i resistori hanno un'induttanza molto più piccola di quella di una bobina, e nei problemi la si considera nulla. Per esempio una bobina con $L = 50\,\mathrm{mH}$, avvolta con un filo di resistenza $4{,}0\,\mathrm{\Omega}$, equivale a un induttore ideale di $50\,\mathrm{mH}$ in serie con un resistore di $4{,}0\,\mathrm{\Omega}$.
:::

:::osservazione{#equazione-circuito-rl titolo="Equazione del circuito RL"}
Un **circuito RL** è formato da un generatore ideale di f.e.m. $\mathcal{E}$ costante, da un resistore $R$ e da un induttore ideale $L$ in serie, con un interruttore; se la bobina ha una resistenza propria, $R$ è la somma delle resistenze del circuito. Quando la corrente varia, nel circuito agiscono due f.e.m., quella del generatore e la f.e.m. autoindotta $-L\,\dfrac{di}{dt}$. Per la legge delle maglie la somma delle f.e.m. è uguale alla caduta di tensione $R\,i$ sul resistore, quindi
$$
\mathcal{E} - L\,\frac{di}{dt} = R\,i .
$$
Questa è l'**equazione del circuito RL**. L'incognita è la funzione $i(t)$ e nell'equazione compare la sua derivata, quindi si tratta di un'equazione differenziale. Scritta nella forma $\mathcal{E} = R\,i + L\,\dfrac{di}{dt}$, l'equazione dice che la tensione del generatore è la somma della tensione $R\,i$ ai capi del resistore e della tensione $L\,\dfrac{di}{dt}$ ai capi dell'induttore. Per esempio, con $\mathcal{E} = 6{,}0\,\mathrm{V}$ e $R = 2{,}0\,\mathrm{\Omega}$, nell'istante in cui la corrente vale $1{,}0\,\mathrm{A}$ il resistore ha ai capi $2{,}0\,\mathrm{V}$, e quindi l'induttore ha ai capi $4{,}0\,\mathrm{V}$.

::grafico{assi=0 curve="5+0.35*abs(sin(t)),2.1-0.3*t/pi,0,12.566" linee="0,0 0,1.4;-0.22,1.4 0.22,1.4;-0.45,1.6 0.45,1.6;0,1.6 0,3 1.0,3;1.0,3 1.6,3.35;1.7,3 2.1,3 2.2,3.2 2.4,2.8 2.6,3.2 2.8,2.8 3.0,3.2 3.2,2.8 3.3,3 5,3 5,2.1;5,0.9 5,0 0,0" punti="1.0,3,pieno;1.7,3,pieno" vettori="3.2,-0.35,1.8,-0.35,i" etichette="0.75,1.5,ℰ;-0.7,1.8,+;-0.7,1.2,−;2.7,3.6,R;5.8,1.5,L;1.3,3.75,T" xmin=-1.2 xmax=6.6 ymin=-0.8 ymax=4.1 uguale=1 titolo="Circuito RL: generatore $\mathcal{E}$, interruttore $T$, resistore $R$ e induttore $L$ in serie; a interruttore chiuso la corrente circola in verso orario"}

:::

:::richiamo{titolo="Problema di Cauchy per un'equazione lineare a coefficienti costanti"}
Siano $a \neq 0$, $b$ e $y_0$ numeri reali. Il problema di Cauchy
$$
\begin{cases}
y'(t) + a\,y(t) = b \\
y(0) = y_0
\end{cases}
$$
ha una e una sola soluzione, che è $y(t) = \dfrac{b}{a} + \left( y_0 - \dfrac{b}{a} \right) e^{-a t}$. Si rimanda all'argomento sulle equazioni differenziali di Matematica 5° anno.
:::

## Chiusura del circuito RL

::::teorema{#chiusura-rl titolo="Corrente alla chiusura di un circuito RL"}
In un circuito RL l'interruttore viene chiuso all'istante $t = 0$, quando la corrente è nulla. Allora per $t \geq 0$ la corrente è
$$
i(t) = \frac{\mathcal{E}}{R} \left( 1 - e^{-\frac{t}{\tau}} \right) ,
\qquad
\tau = \frac{L}{R} .
$$
La grandezza $\tau$ si chiama **costante di tempo** del circuito. La corrente parte da $0$ e cresce verso il valore di regime $I = \dfrac{\mathcal{E}}{R}$, che è la corrente del circuito senza induttore. Per esempio, con $\mathcal{E} = 6{,}0\,\mathrm{V}$, $R = 2{,}0\,\mathrm{\Omega}$ e $L = 4{,}0\,\mathrm{mH}$ si ha
$$
\tau = \frac{4{,}0 \cdot 10^{-3}\,\mathrm{H}}{2{,}0\,\mathrm{\Omega}} = 2{,}0 \cdot 10^{-3}\,\mathrm{s} ,
\qquad
I = \frac{6{,}0\,\mathrm{V}}{2{,}0\,\mathrm{\Omega}} = 3{,}0\,\mathrm{A} ,
$$
e all'istante $t = \tau = 2{,}0\,\mathrm{ms}$ la corrente vale $3{,}0 \cdot \left( 1 - e^{-1} \right)\,\mathrm{A} = 1{,}9\,\mathrm{A}$.

::grafico{f="3*(1-exp(-x/2))+0*sqrt(x)" asintoti="y=3" segmenti="0,0,2,3;2,0,2,1.896" punti="2,1.896,pieno" xmin=-2 xmax=12 ymin=-1 ymax=4 nomi="t,i" legenda="i = 3{,}0 \left( 1 - e^{-\frac{t}{2{,}0}} \right)" titolo="Corrente alla chiusura per $\tau = 2{,}0\,\mathrm{ms}$ e $I = 3{,}0\,\mathrm{A}$, con il tempo in millisecondi: la tangente nell'origine incontra la retta $i = 3{,}0\,\mathrm{A}$ all'istante $t = \tau$, dove la corrente vale $1{,}9\,\mathrm{A}$"}

:::dimostrazione
L'idea è verificare per sostituzione che la funzione $i(t)$ soddisfa l'equazione del circuito e la condizione iniziale, e poi usare l'unicità della soluzione del problema di Cauchy. Dividendo per $L$ l'equazione del circuito RL, $\mathcal{E} - L\,\dfrac{di}{dt} = R\,i$, si ottiene il problema
$$
\frac{di}{dt} + \frac{R}{L}\,i = \frac{\mathcal{E}}{L} , \qquad i(0) = 0 .
$$
La funzione da verificare si scrive $i(t) = \dfrac{\mathcal{E}}{R} - \dfrac{\mathcal{E}}{R}\,e^{-\frac{t}{\tau}}$. Per la regola della funzione composta, e poiché $\dfrac{1}{\tau} = \dfrac{R}{L}$, la sua derivata è
$$
\frac{di}{dt} = -\frac{\mathcal{E}}{R} \cdot \left( -\frac{1}{\tau} \right) e^{-\frac{t}{\tau}} = \frac{\mathcal{E}}{R} \cdot \frac{R}{L}\,e^{-\frac{t}{\tau}} = \frac{\mathcal{E}}{L}\,e^{-\frac{t}{\tau}} .
$$
Si sostituiscono $i(t)$ e la sua derivata nel primo membro dell'equazione:
$$
\begin{aligned}
\frac{di}{dt} + \frac{R}{L}\,i
&= \frac{\mathcal{E}}{L}\,e^{-\frac{t}{\tau}} + \frac{R}{L} \cdot \frac{\mathcal{E}}{R} \left( 1 - e^{-\frac{t}{\tau}} \right) \\[6pt]
&= \frac{\mathcal{E}}{L}\,e^{-\frac{t}{\tau}} + \frac{\mathcal{E}}{L} - \frac{\mathcal{E}}{L}\,e^{-\frac{t}{\tau}} \\[6pt]
&= \frac{\mathcal{E}}{L} .
\end{aligned}
$$
Quindi la funzione soddisfa l'equazione. Inoltre $i(0) = \dfrac{\mathcal{E}}{R} \left( 1 - e^{0} \right) = 0$, perciò soddisfa anche la condizione iniziale. L'equazione è lineare a coefficienti costanti, con $a = \dfrac{R}{L} \neq 0$ e $b = \dfrac{\mathcal{E}}{L}$, e per il **problema di Cauchy** ha una sola soluzione con $i(0) = 0$. La corrente nel circuito è quindi proprio $i(t)$. La stessa funzione si ottiene dalla formula risolutiva del problema di Cauchy con $\dfrac{b}{a} = \dfrac{\mathcal{E}}{R}$ e $y_0 = 0$.
:::
::::

:::osservazione{#costante-di-tempo titolo="Significato della costante di tempo"}
La costante di tempo si misura in secondi, perché $1\,\mathrm{H} = 1\,\mathrm{V \cdot s/A}$ e $1\,\mathrm{\Omega} = 1\,\mathrm{V/A}$, quindi $1\,\mathrm{H/\Omega} = 1\,\mathrm{s}$. Dalla costante di tempo si leggono tre proprietà della corrente di chiusura.

- All'istante $t = 0$ la corrente è nulla, quindi $R\,i = 0$ e l'equazione del circuito dà $L\,\dfrac{di}{dt} = \mathcal{E}$. La corrente parte perciò con la rapidità $\dfrac{\mathcal{E}}{L}$, e tutta la f.e.m. del generatore si trova ai capi dell'induttore.
- Se la corrente crescesse sempre con la rapidità iniziale, raggiungerebbe il valore di regime all'istante $t_1$ tale che $\dfrac{\mathcal{E}}{L}\,t_1 = \dfrac{\mathcal{E}}{R}$, cioè $t_1 = \dfrac{L}{R} = \tau$. Nel grafico la tangente nell'origine incontra quindi la retta $i = \dfrac{\mathcal{E}}{R}$ nel punto di ascissa $\tau$.
- Dopo un tempo $\tau$ la corrente è il $63\,\%$ del valore di regime, perché $1 - e^{-1} \approx 0{,}63$; dopo $5\tau$ è più del $99\,\%$, perché $1 - e^{-5} \approx 0{,}993$. Per questo motivo, dopo alcune costanti di tempo, il circuito si considera a regime.

Nel circuito con $\mathcal{E} = 6{,}0\,\mathrm{V}$ e $L = 4{,}0\,\mathrm{mH}$ la corrente parte con la rapidità $\dfrac{6{,}0\,\mathrm{V}}{4{,}0 \cdot 10^{-3}\,\mathrm{H}} = 1{,}5 \cdot 10^3\,\mathrm{A/s}$, e dopo $5\tau = 10\,\mathrm{ms}$ differisce dal valore di regime di meno dell'$1\,\%$.
:::

:::esempio{titolo="Tensioni ai capi del resistore e dell'induttore"}
Durante la chiusura la tensione ai capi del resistore è $V_R = R\,i = \mathcal{E} \left( 1 - e^{-\frac{t}{\tau}} \right)$. Ai capi dell'induttore c'è la tensione $V_L = L\,\dfrac{di}{dt}$, e poiché $\dfrac{di}{dt} = \dfrac{\mathcal{E}}{L}\,e^{-\frac{t}{\tau}}$ si ottiene $V_L = \mathcal{E}\,e^{-\frac{t}{\tau}}$. La somma delle due tensioni è $\mathcal{E}$ in ogni istante, come prevede l'equazione del circuito. All'inizio la tensione si trova tutta ai capi dell'induttore, a regime tutta ai capi del resistore. Le due tensioni sono uguali quando $e^{-\frac{t}{\tau}} = \dfrac{1}{2}$, cioè all'istante $t = \tau \ln 2$; con $\tau = 2{,}0\,\mathrm{ms}$ questo accade dopo $1{,}4\,\mathrm{ms}$.
:::

## Apertura del circuito RL

::::teorema{#apertura-rl titolo="Corrente all'apertura di un circuito RL"}
In un circuito RL a regime circola la corrente $I_0$. All'istante $t = 0$ un deviatore esclude il generatore e chiude l'induttore sul resistore $R$. Allora per $t \geq 0$ la corrente è
$$
i(t) = I_0\,e^{-\frac{t}{\tau}} , \qquad \tau = \frac{L}{R} .
$$
La corrente non si annulla di colpo, perché la f.e.m. autoindotta si oppone alla sua diminuzione. Dopo un tempo $\tau$ la corrente si è ridotta al $37\,\%$ del valore iniziale, poiché $e^{-1} \approx 0{,}37$, e si dimezza nel tempo $\tau \ln 2$. Nel circuito con $I_0 = 3{,}0\,\mathrm{A}$, $R = 2{,}0\,\mathrm{\Omega}$ e $L = 4{,}0\,\mathrm{mH}$ la corrente si dimezza in $2{,}0 \cdot 0{,}693\,\mathrm{ms} = 1{,}4\,\mathrm{ms}$, e dopo $4{,}0\,\mathrm{ms}$, cioè dopo $2\tau$, vale
$$
i = 3{,}0 \cdot e^{-2}\,\mathrm{A} = 0{,}41\,\mathrm{A} .
$$

::grafico{f="3*exp(-x/2)+0*sqrt(x)" segmenti="0,3,2,0;2,0,2,1.104;4,0,4,0.406" punti="2,1.104,pieno;4,0.406,pieno" xmin=-2 xmax=12 ymin=-1 ymax=4 nomi="t,i" legenda="i = 3{,}0\,e^{-\frac{t}{2{,}0}}" titolo="Corrente all'apertura per $I_0 = 3{,}0\,\mathrm{A}$ e $\tau = 2{,}0\,\mathrm{ms}$, con il tempo in millisecondi: la tangente nell'origine incontra l'asse dei tempi in $t = \tau$, dove la corrente vale $1{,}1\,\mathrm{A}$; in $t = 2\tau$ vale $0{,}41\,\mathrm{A}$"}

:::dimostrazione
Dopo l'apertura, nella maglia formata dall'induttore e dal resistore l'unica f.e.m. è quella autoindotta. La legge delle maglie dà quindi
$$
-L\,\frac{di}{dt} = R\,i
\quad\Longrightarrow\quad
\frac{di}{dt} + \frac{R}{L}\,i = 0 .
$$
La condizione iniziale è $i(0) = I_0$, perché un salto della corrente renderebbe infinita la derivata $\dfrac{di}{dt}$ e quindi la f.e.m. autoindotta. La derivata della funzione $i(t) = I_0\,e^{-\frac{t}{\tau}}$ è $\dfrac{di}{dt} = -\dfrac{I_0}{\tau}\,e^{-\frac{t}{\tau}} = -\dfrac{R}{L}\,I_0\,e^{-\frac{t}{\tau}}$. Sostituendo nell'equazione si ottiene
$$
\frac{di}{dt} + \frac{R}{L}\,i = -\frac{R}{L}\,I_0\,e^{-\frac{t}{\tau}} + \frac{R}{L}\,I_0\,e^{-\frac{t}{\tau}} = 0 ,
$$
e inoltre $i(0) = I_0\,e^{0} = I_0$. Per il **problema di Cauchy**, con $a = \dfrac{R}{L}$ e $b = 0$, la soluzione è unica, perciò la corrente è $i(t) = I_0\,e^{-\frac{t}{\tau}}$.
:::
::::

:::osservazione{#extratensione titolo="Extratensione di apertura"}
All'istante dell'apertura la corrente nell'induttore vale ancora $I_0$, e attraversa il resistore su cui l'induttore viene chiuso. Se questo resistore ha resistenza $R'$, ai suoi capi compare la tensione $R' I_0$, che può essere molto maggiore della f.e.m. del generatore. Nel circuito con $L = 4{,}0\,\mathrm{mH}$ e $I_0 = 3{,}0\,\mathrm{A}$, alimentato con $6{,}0\,\mathrm{V}$, se all'apertura l'induttore si chiude su un resistore di $200\,\mathrm{\Omega}$, la tensione iniziale ai suoi capi è
$$
R' I_0 = 200 \cdot 3{,}0\,\mathrm{V} = 600\,\mathrm{V} ,
$$
cento volte la f.e.m. del generatore, e la nuova costante di tempo è $\dfrac{L}{R'} = 2{,}0 \cdot 10^{-5}\,\mathrm{s}$. Questa tensione si chiama **extratensione di apertura**. Quando un circuito con un induttore viene interrotto senza lasciare un percorso alla corrente, la resistenza tra i contatti che si separano è grandissima. La tensione che si genera può allora rendere conduttrice l'aria tra i contatti, e si osserva una scintilla.
:::

## Energia immagazzinata in un induttore

::::teorema{#energia-induttore titolo="Energia immagazzinata in un induttore"}
Un induttore di induttanza $L$ percorso dalla corrente $I$ immagazzina l'energia
$$
U = \frac{1}{2} L I^2 .
$$
L'energia è uguale al lavoro, indicato con $W$ perché $L$ è l'induttanza, che il generatore compie contro la f.e.m. autoindotta per portare la corrente da $0$ a $I$. Quando la corrente torna a zero, l'induttore restituisce questa energia al circuito. Per l'induttore con $L = 4{,}0\,\mathrm{mH}$ percorso da $3{,}0\,\mathrm{A}$ si ha
$$
U = \frac{1}{2} \cdot 4{,}0 \cdot 10^{-3} \cdot 3{,}0^2\,\mathrm{J} = 1{,}8 \cdot 10^{-2}\,\mathrm{J} = 18\,\mathrm{mJ} .
$$

::grafico{f="4*x+0*sqrt(x)" area="4*x;0;0;3" punti="3,12,pieno" segmenti="3,0,3,12;0,12,3,12" etichette="2.1,4,U" xmin=-1 xmax=5 ymin=-2 ymax=18 nomi="i,Φ" legenda="\Phi_B = 4{,}0\,i" titolo="Flusso autoconcatenato $\Phi_B = L\,i$ in milliweber, in funzione della corrente in ampere, per $L = 4{,}0\,\mathrm{mH}$: l'area del triangolo fino a $I = 3{,}0\,\mathrm{A}$ è $\dfrac{1}{2} \cdot 3{,}0 \cdot 12\,\mathrm{mJ} = 18\,\mathrm{mJ}$, cioè $\dfrac{1}{2} L I^2$"}

:::dimostrazione
L'idea è sommare i lavori compiuti dal generatore contro la f.e.m. autoindotta in tanti piccoli intervalli di tempo. Si consideri un intervallo $\Delta t$ in cui la corrente vale circa $i$ e aumenta di $\Delta i$. In questo intervallo attraversa il circuito la carica $\Delta q = i\,\Delta t$, e la f.e.m. autoindotta ha modulo $L\,\dfrac{\Delta i}{\Delta t}$. Il lavoro compiuto contro una f.e.m. per spostare una carica è il prodotto della f.e.m. per la carica, quindi
$$
\Delta W = L\,\frac{\Delta i}{\Delta t} \cdot i\,\Delta t = L\,i\,\Delta i .
$$
Nel grafico della funzione $L\,i$, con $i$ in ascissa, il prodotto $L\,i\,\Delta i$ è l'area di un rettangolo sottile di base $\Delta i$ e altezza $L\,i$. Si sommano i contributi mentre la corrente passa da $0$ a $I$ e si fanno tendere a zero gli intervalli. La somma diventa allora l'area sotto il grafico, cioè l'integrale definito
$$
W = \int_0^I L\,i\,di = L \left[ \frac{i^2}{2} \right]_0^I = \frac{1}{2} L I^2 .
$$
L'area è quella del triangolo di base $I$ e altezza $L I$. Il generatore fornisce anche il calore prodotto nel resistore per effetto Joule, che si disperde nell'ambiente. Il lavoro compiuto contro la f.e.m. autoindotta resta invece immagazzinato nell'induttore, e quindi $U = W = \dfrac{1}{2} L I^2$.
:::
::::

:::osservazione{#bilancio-energetico-rl titolo="Bilancio energetico del circuito RL"}
Moltiplicando per $i$ i due membri dell'equazione del circuito, $\mathcal{E} = R\,i + L\,\dfrac{di}{dt}$, si ottiene
$$
\mathcal{E}\,i = R\,i^2 + L\,i\,\frac{di}{dt} .
$$
Il primo membro è la potenza erogata dal generatore. Il termine $R\,i^2$ è la potenza dissipata nel resistore per effetto Joule. Il termine $L\,i\,\dfrac{di}{dt}$ è la derivata di $\dfrac{1}{2} L i^2$, per la regola della funzione composta, quindi è la rapidità con cui cresce l'energia dell'induttore. Durante la chiusura una parte dell'energia erogata dal generatore si trasforma in calore e una parte si accumula nell'induttore; a regime $\dfrac{di}{dt} = 0$, e tutta la potenza va nel resistore.

All'apertura l'energia dell'induttore si trasforma in calore nel resistore. Con $i(t) = I_0\,e^{-\frac{t}{\tau}}$ l'energia dissipata è l'integrale improprio
$$
\int_0^{+\infty} R\,I_0^2\,e^{-\frac{2t}{\tau}}\,dt = R\,I_0^2 \left[ -\frac{\tau}{2}\,e^{-\frac{2t}{\tau}} \right]_0^{+\infty} = R\,I_0^2\,\frac{\tau}{2} = \frac{1}{2} L I_0^2 ,
$$
dove nell'ultimo passaggio si è usato $R\,\tau = L$. Per $L = 4{,}0\,\mathrm{mH}$ e $I_0 = 3{,}0\,\mathrm{A}$ il resistore dissipa $18\,\mathrm{mJ}$, cioè proprio l'energia che era immagazzinata nell'induttore.
:::

## Densità di energia del campo magnetico

::::teorema{#densita-energia-magnetica titolo="Densità di energia del campo magnetico"}
In una regione in cui il campo magnetico ha modulo $B$, nel vuoto o in aria, l'energia per unità di volume è
$$
u_B = \frac{B^2}{2\mu_0} .
$$
L'energia di un induttore si trova quindi nel campo magnetico generato dalla corrente. La formula si ricava per il solenoide e si ammette che valga per ogni campo magnetico; se il campo è uniforme in un volume $V$, l'energia contenuta è $u_B\,V$. L'unità di misura è corretta, perché $\mathrm{T^2/(T \cdot m/A)} = \mathrm{T \cdot A/m}$ e $1\,\mathrm{T} = 1\,\mathrm{N/(A \cdot m)}$, quindi si ottiene $\mathrm{N/m^2} = \mathrm{J/m^3}$. Per esempio, un campo di $0{,}50\,\mathrm{T}$ ha densità di energia
$$
u_B = \frac{0{,}50^2}{2 \cdot 4\pi \cdot 10^{-7}}\,\mathrm{J/m^3} = 9{,}9 \cdot 10^4\,\mathrm{J/m^3} ,
$$
e un centimetro cubo, cioè $1{,}0 \cdot 10^{-6}\,\mathrm{m^3}$, di questo campo contiene $9{,}9 \cdot 10^{-2}\,\mathrm{J}$.

:::dimostrazione
Si consideri un solenoide di lunghezza $\ell$ con $N$ spire di area $S$, percorso dalla corrente $I$. Per i teoremi sull'**induttanza di un solenoide** e sull'**energia immagazzinata in un induttore**
$$
U = \frac{1}{2} L I^2 = \frac{1}{2} \cdot \frac{\mu_0 N^2 S}{\ell} \cdot I^2 .
$$
Il campo all'interno è $B = \mu_0\,\dfrac{N}{\ell}\,I$, quindi $N I = \dfrac{B \ell}{\mu_0}$ e $N^2 I^2 = \dfrac{B^2 \ell^2}{\mu_0^2}$. Sostituendo $N^2 I^2$ si ottiene
$$
U = \frac{1}{2} \cdot \frac{\mu_0 S}{\ell} \cdot \frac{B^2 \ell^2}{\mu_0^2} = \frac{B^2}{2\mu_0}\,S \ell .
$$
Il campo è uniforme all'interno del solenoide, che ha volume $S \ell$, ed è trascurabile all'esterno. L'energia è quindi distribuita in modo uniforme nel volume $S \ell$, e l'energia per unità di volume è $u_B = \dfrac{U}{S \ell} = \dfrac{B^2}{2\mu_0}$.
:::
::::

:::esempio{titolo="Energia nel solenoide di 500 spire"}
Il solenoide lungo $25\,\mathrm{cm}$, con $500$ spire di raggio $1{,}0\,\mathrm{cm}$ e induttanza $3{,}95 \cdot 10^{-4}\,\mathrm{H}$, è percorso dalla corrente $I = 4{,}0\,\mathrm{A}$. Il campo all'interno e la densità di energia sono
$$
B = 4\pi \cdot 10^{-7} \cdot \frac{500}{0{,}25} \cdot 4{,}0\,\mathrm{T} = 1{,}0 \cdot 10^{-2}\,\mathrm{T} ,
\qquad
u_B = \frac{\left( 1{,}0 \cdot 10^{-2} \right)^2}{2 \cdot 4\pi \cdot 10^{-7}}\,\mathrm{J/m^3} = 40\,\mathrm{J/m^3} .
$$
Il volume interno è $S \ell = 3{,}14 \cdot 10^{-4} \cdot 0{,}25\,\mathrm{m^3} = 7{,}9 \cdot 10^{-5}\,\mathrm{m^3}$, quindi l'energia è $U = 40 \cdot 7{,}9 \cdot 10^{-5}\,\mathrm{J} = 3{,}2 \cdot 10^{-3}\,\mathrm{J}$. Con l'induttanza si ottiene lo stesso valore, $U = \dfrac{1}{2} \cdot 3{,}95 \cdot 10^{-4} \cdot 4{,}0^2\,\mathrm{J} = 3{,}2 \cdot 10^{-3}\,\mathrm{J}$.
:::

:::osservazione{#confronto-energia-elettrica titolo="Confronto con l'energia del campo elettrico"}
Nello studio del condensatore si è visto che l'energia del campo elettrico ha densità $u_E = \dfrac{1}{2} \varepsilon_0 E^2$. In un campo elettrico di $1{,}0 \cdot 10^6\,\mathrm{V/m}$, inferiore al valore di circa $3 \cdot 10^6\,\mathrm{V/m}$ a cui l'aria diventa conduttrice, la densità di energia è
$$
u_E = \frac{1}{2} \cdot 8{,}85 \cdot 10^{-12} \cdot \left( 1{,}0 \cdot 10^6 \right)^2\,\mathrm{J/m^3} = 4{,}4\,\mathrm{J/m^3} ,
$$
mentre un campo magnetico di $0{,}50\,\mathrm{T}$, che si ottiene con un elettromagnete da laboratorio, ha densità di energia $9{,}9 \cdot 10^4\,\mathrm{J/m^3}$. Le due densità servono a calcolare l'energia trasportata da un'onda elettromagnetica, come si vede nell'argomento sulle equazioni di Maxwell e le onde elettromagnetiche.
:::

## Mutua induzione

:::definizione{#mutua-induttanza titolo="Mutua induttanza"}
Due circuiti fermi sono vicini, e nel primo circola la corrente $i_1$. Il campo magnetico generato da $i_1$ attraversa anche il secondo circuito, e il flusso $\Phi_{21}$ di questo campo concatenato con il secondo circuito è proporzionale a $i_1$. La costante di proporzionalità è la **mutua induttanza** $M$ dei due circuiti:
$$
\Phi_{21} = M\,i_1 .
$$
Se $i_1$ varia, per la legge di Faraday-Neumann-Lenz nel secondo circuito si genera la f.e.m.
$$
\mathcal{E}_2 = -M\,\frac{di_1}{dt} .
$$
Questo fenomeno si chiama **mutua induzione**. La mutua induttanza si misura in henry e dipende dalla forma dei due circuiti e dalla loro posizione. Vale inoltre la proprietà di *reciprocità*, che si ammette senza dimostrazione: se nel secondo circuito circola la corrente $i_2$, il flusso concatenato con il primo è $M\,i_2$, con la stessa costante $M$. Per esempio, se $M = 2{,}0\,\mathrm{mH}$ e la corrente nel primo circuito cresce in modo uniforme di $50\,\mathrm{A}$ al secondo, nel secondo circuito si genera una f.e.m. di modulo $2{,}0 \cdot 10^{-3} \cdot 50\,\mathrm{V} = 0{,}10\,\mathrm{V}$.
:::

::::teorema{#mutua-induttanza-solenoidi titolo="Mutua induttanza di due solenoidi coassiali"}
Un solenoide in aria di lunghezza $\ell_1$, con $N_1$ spire e lungo rispetto al raggio, contiene al suo interno, lontano dalle estremità, una bobina coassiale di $N_2$ spire di area $S_2$. Allora la mutua induttanza è
$$
M = \frac{\mu_0 N_1 N_2 S_2}{\ell_1} .
$$
Per esempio, con $2000$ spire per metro nel solenoide esterno, cioè $\dfrac{N_1}{\ell_1} = 2000\,\mathrm{m^{-1}}$, e una bobina interna di $100$ spire di raggio $1{,}5\,\mathrm{cm}$, si ha
$$
M = 4\pi \cdot 10^{-7} \cdot 2000 \cdot 100 \cdot \pi \cdot 0{,}015^2\,\mathrm{H} = 1{,}8 \cdot 10^{-4}\,\mathrm{H} .
$$
Se la corrente nel solenoide esterno cresce di $40\,\mathrm{A}$ al secondo, nella bobina interna si genera una f.e.m. di modulo $1{,}78 \cdot 10^{-4} \cdot 40\,\mathrm{V} = 7{,}1 \cdot 10^{-3}\,\mathrm{V}$.

::grafico{assi=0 linee="0,1.4 7,1.4;0,-1.4 7,-1.4;2.5,0.6 4.5,0.6;2.5,-0.6 4.5,-0.6" vettori="0.3,0,2.1,0,B₁;4.9,0,6.7,0" etichette="0.25,1.4,⊙;0.75,1.4,⊙;1.25,1.4,⊙;1.75,1.4,⊙;2.25,1.4,⊙;2.75,1.4,⊙;3.25,1.4,⊙;3.75,1.4,⊙;4.25,1.4,⊙;4.75,1.4,⊙;5.25,1.4,⊙;5.75,1.4,⊙;6.25,1.4,⊙;6.75,1.4,⊙;0.25,-1.4,⊗;0.75,-1.4,⊗;1.25,-1.4,⊗;1.75,-1.4,⊗;2.25,-1.4,⊗;2.75,-1.4,⊗;3.25,-1.4,⊗;3.75,-1.4,⊗;4.25,-1.4,⊗;4.75,-1.4,⊗;5.25,-1.4,⊗;5.75,-1.4,⊗;6.25,-1.4,⊗;6.75,-1.4,⊗;7.4,1.4,1;3.5,0.15,2" unicolore=1 xmin=-0.5 xmax=7.9 ymin=-2 ymax=2 uguale=1 titolo="Sezione di due solenoidi coassiali: il solenoide esterno $1$, percorso dalla corrente $i_1$, genera il campo uniforme $\vec{B}_1$, che attraversa tutte le spire della bobina interna $2$"}

:::dimostrazione
La corrente $i_1$ del solenoide esterno genera al suo interno il campo uniforme $B_1 = \mu_0\,\dfrac{N_1}{\ell_1}\,i_1$, parallelo all'asse. Il campo è perpendicolare al piano delle spire della bobina interna, quindi il flusso attraverso ciascuna spira è $B_1 S_2$, e il flusso concatenato con le $N_2$ spire è
$$
\Phi_{21} = N_2 B_1 S_2 = \frac{\mu_0 N_1 N_2 S_2}{\ell_1}\,i_1 .
$$
Per la definizione di mutua induttanza si ottiene $M = \dfrac{\Phi_{21}}{i_1} = \dfrac{\mu_0 N_1 N_2 S_2}{\ell_1}$.
:::
::::

:::osservazione{#verso-mutua-induzione titolo="Verso della corrente indotta e trasformatore"}
Se la bobina interna è chiusa su un circuito, il verso della corrente indotta si ricava con la legge di Lenz. Quando la corrente nel solenoide esterno cresce, il flusso attraverso la bobina aumenta, quindi la corrente indotta circola in verso opposto a $i_1$ e il suo campo si oppone all'aumento. Quando $i_1$ diminuisce, la corrente indotta circola nello stesso verso di $i_1$.

Se le due bobine sono avvolte sullo stesso tubo, con le spire della stessa area, ogni spira è attraversata dallo stesso flusso. La f.e.m. autoindotta nella prima bobina e la f.e.m. indotta nella seconda sono allora proporzionali ai numeri di spire, $\dfrac{\mathcal{E}_2}{\mathcal{E}_1} = \dfrac{N_2}{N_1}$. Su questo principio funziona il trasformatore, che si studia nell'argomento sulla corrente alternata e il trasformatore.
:::
