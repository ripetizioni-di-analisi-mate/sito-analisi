---
titolo: Campo magnetico e forza di Lorentz
sommario: Che cosa sono i magneti e il campo magnetico, come si misura il campo con la forza su un filo percorso da corrente, come si ricava da questa la forza di Lorentz su una carica in moto, perché la forza di Lorentz non compie lavoro, e come il momento torcente su una spira spiega il motore elettrico e l'amperometro a bobina mobile.
---

## Magneti e linee di campo

:::definizione{#magneti-e-poli titolo="Magneti e poli magnetici"}
Un **magnete** è un corpo che attira il ferro, il nichel e il cobalto. Una calamita a forma di sbarra, appesa per il centro e libera di ruotare in un piano orizzontale, si dispone lungo la direzione nord-sud geografica. L'estremità rivolta verso il nord geografico si chiama **polo nord** del magnete, l'altra **polo sud**. Avvicinando due magneti si osserva che poli dello stesso nome si respingono e poli di nome diverso si attraggono.

I poli di un magnete non si separano. Se si spezza una calamita a metà, ciascuna metà ha un polo nord e un polo sud, e lo stesso accade continuando a spezzare i pezzi. In questo i poli magnetici sono diversi dalle cariche elettriche, perché una carica positiva e una carica negativa si possono separare. Per esempio, una calamita lunga $10\,\mathrm{cm}$ spezzata in due dà due calamite lunghe $5\,\mathrm{cm}$, ciascuna con i suoi due poli.
:::

:::definizione{#linee-di-campo titolo="Campo magnetico e linee di campo"}
Lo spazio attorno a un magnete in cui un altro magnete subisce forze si dice sede di un **campo magnetico**. Il campo magnetico in un punto è un vettore $\vec{B}$, la cui direzione e il cui verso sono quelli in cui si dispone un piccolo **ago magnetico**, dal polo sud al polo nord dell'ago. Il modulo di $\vec{B}$ si definisce con la forza su un filo percorso da corrente, come si vede nella definizione operativa del campo magnetico.

Le **linee di campo** sono le linee orientate tangenti in ogni punto a $\vec{B}$ e con lo stesso verso. Si visualizzano con la limatura di ferro, perché ogni granello si comporta come un piccolo ago magnetico e si allinea con il campo. Dove le linee sono più fitte il campo è più intenso. Fuori da una calamita le linee escono dal polo nord ed entrano nel polo sud; dentro la calamita proseguono dal polo sud al polo nord. Le linee del campo magnetico sono quindi **linee chiuse**, e questa proprietà corrisponde al fatto che i poli non si separano.

::grafico{assi=0 uguale=1 unicolore=1 poligoni="-1,-0.25 1,-0.25 1,0.25 -1,0.25" linee="1.01,0.04 1.28,0.1 1.55,0.17 1.82,0.24 2.09,0.31 2.36,0.39 2.63,0.47 2.9,0.55 3.16,0.64 3.39,0.71;-3.39,0.71 -3.13,0.62 -2.86,0.54 -2.59,0.45 -2.32,0.37 -2.05,0.3 -1.78,0.23 -1.51,0.16 -1.24,0.1 -1.01,0.04;1.01,-0.04 1.28,-0.1 1.55,-0.17 1.82,-0.24 2.09,-0.31 2.36,-0.39 2.63,-0.47 2.9,-0.55 3.16,-0.64 3.39,-0.71;-3.39,-0.71 -3.13,-0.62 -2.86,-0.54 -2.59,-0.45 -2.32,-0.37 -2.05,-0.3 -1.78,-0.23 -1.51,-0.16 -1.24,-0.1 -1.01,-0.04;1.01,0.12 1.25,0.27 1.48,0.42 1.71,0.58 1.93,0.76 2.14,0.94 2.35,1.13 2.55,1.32 2.74,1.53 2.92,1.74 3.09,1.96 3.27,2.19;-3.27,2.19 -3.1,1.97 -2.93,1.75 -2.74,1.54 -2.55,1.33 -2.36,1.13 -2.15,0.94 -1.94,0.76 -1.72,0.59 -1.49,0.43 -1.25,0.27 -1.01,0.12;1.01,-0.12 1.25,-0.27 1.48,-0.42 1.71,-0.58 1.93,-0.76 2.14,-0.94 2.35,-1.13 2.55,-1.32 2.74,-1.53 2.92,-1.74 3.09,-1.96 3.27,-2.19;-3.27,-2.19 -3.1,-1.97 -2.93,-1.75 -2.74,-1.54 -2.55,-1.33 -2.36,-1.13 -2.15,-0.94 -1.94,-0.76 -1.72,-0.59 -1.49,-0.43 -1.25,-0.27 -1.01,-0.12;0.97,0.26 1.12,0.49 1.25,0.74 1.35,1 1.43,1.27 1.48,1.55 1.51,1.83 1.49,2.2;-1.49,2.2 -1.51,1.92 -1.49,1.64 -1.45,1.36 -1.38,1.09 -1.28,0.83 -1.16,0.57 -0.97,0.26;0.97,-0.26 1.12,-0.49 1.25,-0.74 1.35,-1 1.43,-1.27 1.48,-1.55 1.51,-1.83 1.49,-2.2;-1.49,-2.2 -1.51,-1.92 -1.49,-1.64 -1.45,-1.36 -1.38,-1.09 -1.28,-0.83 -1.16,-0.57 -0.97,-0.26;0.82,0.26 0.82,0.54 0.78,0.82 0.69,1.08 0.54,1.32 0.33,1.49 0.06,1.57 -0.22,1.54 -0.46,1.41 -0.64,1.2 -0.76,0.94 -0.82,0.67 -0.83,0.39 -0.82,0.26;0.82,-0.26 0.82,-0.54 0.78,-0.82 0.69,-1.08 0.54,-1.32 0.33,-1.49 0.06,-1.57 -0.22,-1.54 -0.46,-1.41 -0.64,-1.2 -0.76,-0.94 -0.82,-0.67 -0.83,-0.39 -0.82,-0.26;0.65,0.26 0.48,0.48 0.26,0.65 -0.01,0.71 -0.28,0.64 -0.5,0.46 -0.65,0.26;0.65,-0.26 0.48,-0.48 0.26,-0.65 -0.01,-0.71 -0.28,-0.64 -0.5,-0.46 -0.65,-0.26" vettori="2.09,0.31,2.43,0.41;-2.32,0.37,-1.98,0.28;2.25,1.03,2.5,1.27;-2.25,1.04,-1.99,0.81;1.4,1.14,1.48,1.48;-1.42,1.22,-1.32,0.89;0.06,1.57,-0.29,1.53;0.12,0.7,-0.23,0.69;2.09,-0.31,2.43,-0.41;-2.32,-0.37,-1.98,-0.28;2.25,-1.03,2.5,-1.27;-2.25,-1.04,-1.99,-0.81;1.4,-1.14,1.48,-1.48;-1.42,-1.22,-1.32,-0.89;0.06,-1.57,-0.29,-1.53;0.12,-0.7,-0.23,-0.69" etichette="0.6,-0.08,N;-0.8,-0.08,S" xmin=-3.4 xmax=3.4 ymin=-2.2 ymax=2.2 titolo="Linee di campo di una calamita a sbarra: fuori dalla calamita vanno dal polo nord $N$ al polo sud $S$ e sono più fitte vicino ai poli, dove il campo è più intenso"}

:::

:::osservazione{#campo-magnetico-terrestre titolo="Campo magnetico terrestre"}
La Terra produce un campo magnetico simile a quello di una grande calamita a sbarra posta al suo interno. L'ago di una bussola indica il nord geografico perché il suo polo nord è attratto da un polo sud magnetico; perciò vicino al polo nord geografico si trova il **polo sud magnetico** della Terra. L'asse magnetico è inclinato di circa $10^\circ$ rispetto all'asse di rotazione, quindi la bussola indica il nord geografico solo in modo approssimato.

Sulla superficie terrestre il campo ha modulo compreso tra circa $2{,}5 \cdot 10^{-5}\,\mathrm{T}$ e $6{,}5 \cdot 10^{-5}\,\mathrm{T}$, dove il tesla $\mathrm{T}$ è l'unità del campo magnetico definita nella definizione operativa del campo. In Italia il campo vale circa $4{,}5 \cdot 10^{-5}\,\mathrm{T}$ e non è orizzontale. Esso punta verso nord e verso il basso, e forma con il piano orizzontale un angolo detto **inclinazione magnetica**, di circa $55^\circ$. La bussola si orienta lungo la componente orizzontale del campo, perché il suo ago ruota solo in un piano orizzontale.

::grafico{assi=0 uguale=1 unicolore=1 curve="cos(t),sin(t),0,6.29" segmenti="0,-1.7,0,1.7" linee="0.78,0.64 0.99,0.65 1.19,0.62 1.37,0.54 1.52,0.42 1.63,0.27 1.69,0.1 1.7,-0.07 1.64,-0.25 1.54,-0.4 1.4,-0.52 1.22,-0.61 1.02,-0.65 0.78,-0.64;-0.78,0.64 -0.99,0.65 -1.19,0.62 -1.37,0.54 -1.52,0.42 -1.63,0.27 -1.69,0.1 -1.7,-0.07 -1.64,-0.25 -1.54,-0.4 -1.4,-0.52 -1.22,-0.61 -1.02,-0.65 -0.78,-0.64;0.63,0.79 0.9,0.91 1.19,0.98 1.51,1 1.81,0.94 2.09,0.82 2.33,0.65 2.49,0.42 2.59,0.16 2.59,-0.11 2.52,-0.38 2.36,-0.61 2.14,-0.8 1.86,-0.93 1.56,-0.99 1.25,-0.99 0.94,-0.93 0.63,-0.79;-0.63,0.79 -0.9,0.91 -1.19,0.98 -1.51,1 -1.81,0.94 -2.09,0.82 -2.33,0.65 -2.49,0.42 -2.59,0.16 -2.59,-0.11 -2.52,-0.38 -2.36,-0.61 -2.14,-0.8 -1.86,-0.93 -1.56,-0.99 -1.25,-0.99 -0.94,-0.93 -0.63,-0.79;0.52,0.86 0.83,1.1 1.21,1.29 1.63,1.42 2.09,1.46 2.54,1.41 2.96,1.26 3.32,1.02 3.59,0.7 3.76,0.33 3.8,-0.07 3.72,-0.46 3.52,-0.81 3.21,-1.11 2.83,-1.32 2.39,-1.44 1.94,-1.46 1.49,-1.39 1.07,-1.23 0.72,-1.02 0.52,-0.86;-0.52,0.86 -0.83,1.1 -1.21,1.29 -1.63,1.42 -2.09,1.46 -2.54,1.41 -2.96,1.26 -3.32,1.02 -3.59,0.7 -3.76,0.33 -3.8,-0.07 -3.72,-0.46 -3.52,-0.81 -3.21,-1.11 -2.83,-1.32 -2.39,-1.44 -1.94,-1.46 -1.49,-1.39 -1.07,-1.23 -0.72,-1.02 -0.52,-0.86" vettori="1.7,-0.3,1.7,0.3;-1.7,-0.3,-1.7,0.3;2.6,-0.3,2.6,0.3;-2.6,-0.3,-2.6,0.3;3.8,-0.3,3.8,0.3;-3.8,-0.3,-3.8,0.3" etichette="0.12,1.55,nord geografico;0.12,-1.75,sud geografico" xmin=-4 xmax=4 ymin=-2 ymax=2 titolo="Linee del campo magnetico terrestre, con l'asse magnetico disegnato lungo l'asse di rotazione: fuori dalla Terra il campo va dall'emisfero sud verso l'emisfero nord, dove si trova il polo sud magnetico"}

:::

:::osservazione{#versi-perpendicolari-al-foglio titolo="Vettori perpendicolari al foglio"}
Nei disegni piani un vettore perpendicolare al foglio si rappresenta con un simbolo. Il simbolo $\otimes$ indica un vettore **entrante** nel foglio e rappresenta la coda di una freccia che si allontana da chi guarda; il simbolo $\odot$ indica un vettore **uscente** e rappresenta la punta di una freccia che si avvicina. Gli stessi simboli si usano per una corrente che entra o esce dal foglio. Un campo magnetico uniforme entrante si disegna perciò come una griglia regolare di simboli $\otimes$, tutti uguali, perché il campo ha lo stesso modulo, la stessa direzione e lo stesso verso in ogni punto.
:::

## Le esperienze di Oersted, Faraday e Ampère

:::osservazione{#esperienza-oersted titolo="Esperienza di Oersted"}
Nel 1820 Oersted dispose un filo rettilineo sopra un ago magnetico, parallelo all'ago. Quando nel filo passa corrente, l'ago ruota e si dispone perpendicolarmente al filo; se si inverte il verso della corrente, l'ago ruota nel verso opposto; quando la corrente si interrompe, l'ago torna nella direzione nord-sud. Da questa esperienza si conclude che **una corrente elettrica produce un campo magnetico**. Il campo prodotto dalle correnti si studia nell'argomento sulle sorgenti del campo magnetico.
:::

:::osservazione{#esperienza-faraday titolo="Esperienza di Faraday"}
Nel 1821 Faraday osservò l'effetto inverso. Un filo percorso da corrente, libero di muoversi vicino a un magnete, subisce una forza; nel suo apparecchio il filo ruotava con continuità attorno al polo di una calamita. Un filo teso tra i poli di una calamita a ferro di cavallo viene spinto fuori dalla calamita o verso il suo interno, secondo il verso della corrente. Da questa esperienza si conclude che **un campo magnetico esercita una forza su un filo percorso da corrente**. Su questa forza si basano la definizione operativa del campo magnetico e il motore elettrico.
:::

:::osservazione{#esperienza-ampere titolo="Esperienza di Ampère"}
Sempre nel 1820 Ampère studiò due fili rettilinei paralleli, vicini, percorsi da corrente. I fili si attraggono se le correnti hanno lo stesso verso e si respingono se le correnti hanno versi opposti; se in uno dei due fili non passa corrente, non c'è alcuna forza. Da questa esperienza si conclude che due correnti interagiscono tra loro anche in assenza di magneti, perché ciascuna produce un campo magnetico che agisce sull'altra.

Le tre esperienze mostrano che i fenomeni magnetici sono legati alle cariche elettriche in moto. Ampère ipotizzò che anche il campo di una calamita sia prodotto da correnti, che circolano all'interno della materia su scala microscopica. La forza tra due fili paralleli si calcola nell'argomento sulle sorgenti del campo magnetico, dove serve a definire l'ampere.
:::

## Definizione operativa del campo magnetico

:::definizione{#campo-magnetico titolo="Definizione operativa del campo magnetico"}
Si pone un tratto di filo rettilineo, lungo $\ell$ e percorso dalla corrente $I$, in un punto in cui c'è un campo magnetico, e si misura la forza sul filo al variare della sua orientazione. Le misure danno questi risultati.

- Esiste una direzione per la quale la forza è nulla, ed è la direzione indicata da un ago magnetico.
- Quando il filo è perpendicolare a quella direzione la forza ha il modulo massimo $F_{\max}$, e $F_{\max}$ è direttamente proporzionale sia a $I$ sia a $\ell$.

Il rapporto $\dfrac{F_{\max}}{I \ell}$ non dipende quindi dal filo e misura l'intensità del campo nel punto. Il campo magnetico $\vec{B}$ è il vettore che ha la direzione e il verso dell'ago magnetico e modulo
$$
B = \frac{F_{\max}}{I \ell} .
$$
Nel Sistema Internazionale il campo magnetico si misura in **tesla**, $1\,\mathrm{T} = 1\,\mathrm{N/(A\cdot m)}$: un campo di $1\,\mathrm{T}$ esercita la forza di $1\,\mathrm{N}$ su un filo lungo $1\,\mathrm{m}$, percorso da $1\,\mathrm{A}$ e perpendicolare al campo. Per esempio, un filo lungo $20\,\mathrm{cm}$, percorso da $3{,}0\,\mathrm{A}$ e perpendicolare al campo, subisce la forza $0{,}36\,\mathrm{N}$; quindi
$$
B = \frac{0{,}36\,\mathrm{N}}{3{,}0\,\mathrm{A} \cdot 0{,}20\,\mathrm{m}} = 0{,}60\,\mathrm{T} .
$$
:::

:::esempio{titolo="Ordini di grandezza del campo magnetico"}
Il tesla è un'unità grande. Il campo terrestre vale circa $5 \cdot 10^{-5}\,\mathrm{T}$, una calamita da laboratorio produce vicino ai poli campi dell'ordine di $0{,}1\,\mathrm{T}$, e i magneti delle apparecchiature per la risonanza magnetica arrivano a qualche tesla. Un filo lungo $1{,}0\,\mathrm{m}$, percorso da $10\,\mathrm{A}$ e perpendicolare al campo terrestre, subisce perciò la forza
$$
F = B I \ell = 5 \cdot 10^{-5} \cdot 10 \cdot 1{,}0\,\mathrm{N} = 5 \cdot 10^{-4}\,\mathrm{N} ,
$$
pari al peso di un corpo di circa $0{,}05\,\mathrm{g}$. Per questo motivo negli esperimenti di laboratorio si usano calamite o bobine, che producono campi migliaia di volte più intensi.
:::

## Forza su un filo percorso da corrente

:::richiamo{titolo="Prodotto vettoriale"}
Siano $\vec{a}$ e $\vec{b}$ due vettori che formano l'angolo $\alpha$, con $0 \leq \alpha \leq 180^\circ$. Il prodotto vettoriale $\vec{a} \times \vec{b}$ è il vettore perpendicolare sia ad $\vec{a}$ sia a $\vec{b}$, di modulo $a\,b \sin\alpha$, con il verso dato dalla regola della mano destra. Inoltre $\vec{b} \times \vec{a} = -\,\vec{a} \times \vec{b}$, e il prodotto è nullo se i due vettori sono paralleli.
:::

:::teorema{#forza-su-un-filo titolo="Forza su un filo rettilineo"}
Un filo rettilineo di lunghezza $\ell$, percorso dalla corrente $I$ e immerso in un campo magnetico uniforme $\vec{B}$, subisce la forza
$$
\vec{F} = I\,\vec{\ell} \times \vec{B} ,
\qquad
F = I \ell B \sin\alpha ,
$$
dove $\vec{\ell}$ è il vettore di modulo $\ell$ diretto lungo il filo nel verso della corrente e $\alpha$ è l'angolo tra il filo e il campo. È una legge sperimentale, che estende la definizione operativa del campo magnetico a un filo con orientazione qualsiasi. La forza è perpendicolare sia al filo sia al campo; è nulla quando il filo è parallelo a $\vec{B}$, perché $\sin 0^\circ = 0$, ed è massima, $I \ell B$, quando il filo è perpendicolare a $\vec{B}$.

La legge serve a calcolare la forza su ogni tratto rettilineo di un circuito immerso in un campo uniforme. Per esempio, un filo lungo $0{,}50\,\mathrm{m}$, percorso da $2{,}0\,\mathrm{A}$ e inclinato di $30^\circ$ rispetto a un campo di $0{,}20\,\mathrm{T}$, subisce la forza
$$
F = 2{,}0 \cdot 0{,}50 \cdot 0{,}20 \cdot \sin 30^\circ\,\mathrm{N} = 0{,}10\,\mathrm{N} .
$$

::grafico{assi=0 uguale=1 linee="-3,0 3,0" vettori="-1.6,0.3,-0.2,0.3,I;0.6,0,0.6,1.6,F" etichette="-2.7,-1.9,⊗;-2.7,-0.9,⊗;-2.7,1.1,⊗;-2.7,2.1,⊗;-1.7,-1.9,⊗;-1.7,-0.9,⊗;-1.7,1.1,⊗;-1.7,2.1,⊗;-0.6,-1.9,⊗;-0.6,-0.9,⊗;-0.6,1.1,⊗;-0.6,2.1,⊗;1.4,-1.9,⊗;1.4,-0.9,⊗;1.4,1.1,⊗;1.4,2.1,⊗;2.4,-1.9,⊗;2.4,-0.9,⊗;2.4,1.1,⊗;2.4,2.1,⊗" xmin=-3.2 xmax=3.2 ymin=-2.2 ymax=2.4 titolo="Filo percorso dalla corrente $I$ verso destra in un campo uniforme entrante nel foglio ($\otimes$): la forza $\vec{F} = I\,\vec{\ell} \times \vec{B}$ è perpendicolare al filo e rivolta verso l'alto"}

:::

:::osservazione{#regola-mano-destra titolo="Regola della mano destra"}
Il verso di $\vec{\ell} \times \vec{B}$ si trova con la mano destra aperta. Si dispone il pollice nel verso della corrente e le altre dita nel verso del campo; la forza esce dal palmo, perpendicolarmente alla mano. Nella figura del filo la corrente va verso destra e il campo entra nel foglio. Con il pollice verso destra e le dita rivolte dentro il foglio, il palmo è rivolto verso l'alto, quindi la forza è diretta verso l'alto. Se si inverte la corrente, oppure il campo, la forza cambia verso; se si invertono entrambi, la forza resta la stessa.
:::

:::attenzione
La forza magnetica su un filo è perpendicolare al campo. Questo la distingue dalla forza elettrica su una carica positiva, che ha la direzione del campo elettrico. Per esempio, un filo orizzontale percorso da corrente verso est, in un campo diretto verso nord, subisce una forza verticale, verso l'alto, e *nessuna* forza nella direzione nord-sud.
:::

## Forza di Lorentz

:::richiamo{titolo="Intensità di corrente"}
Se attraverso una sezione di un conduttore passa la carica $\Delta q$ nell'intervallo di tempo $\Delta t$, l'intensità di corrente è $I = \dfrac{\Delta q}{\Delta t}$. Il verso della corrente è quello in cui si muovono le cariche positive, ed è opposto al moto degli elettroni.
:::

::::teorema{#forza-di-lorentz titolo="Forza di Lorentz"}
Una carica puntiforme $q$ che si muove con velocità $\vec{v}$ in un campo magnetico $\vec{B}$ subisce la forza
$$
\vec{F} = q\,\vec{v} \times \vec{B} ,
\qquad
F = |q|\,v B \sin\alpha ,
$$
dove $\alpha$ è l'angolo tra $\vec{v}$ e $\vec{B}$. Questa forza si chiama **forza di Lorentz**. È perpendicolare sia alla velocità sia al campo; è nulla per una carica ferma e per una carica che si muove parallelamente a $\vec{B}$, ed è massima, $|q|\,vB$, quando la velocità è perpendicolare al campo. Per una carica positiva il verso si trova con la regola della mano destra, con il pollice lungo $\vec{v}$; per una carica negativa il verso è opposto.

La forza di Lorentz serve a descrivere il moto delle particelle cariche nei campi magnetici, che si studia nell'argomento sul moto delle cariche nei campi elettrico e magnetico. Per esempio, un protone che si muove a $3{,}0 \cdot 10^5\,\mathrm{m/s}$ perpendicolarmente a un campo di $0{,}40\,\mathrm{T}$ subisce la forza
$$
F = e v B = 1{,}60 \cdot 10^{-19} \cdot 3{,}0 \cdot 10^5 \cdot 0{,}40\,\mathrm{N} = 1{,}9 \cdot 10^{-14}\,\mathrm{N} ,
$$
con $e = 1{,}60 \cdot 10^{-19}\,\mathrm{C}$.

:::dimostrazione
L'idea è vedere la forza sul filo come la somma delle forze sulle cariche che si muovono nel filo. Si considera un tratto di filo lungo $\ell$, perpendicolare al campo, che contiene $N$ portatori di carica $q > 0$, tutti con velocità $v$ lungo il filo.

Un portatore impiega il tempo $\Delta t = \dfrac{\ell}{v}$ a percorrere il tratto. In questo tempo tutti gli $N$ portatori del tratto attraversano la sezione finale, quindi passa la carica $\Delta q = N q$. Per la definizione di intensità di corrente si ha perciò
$$
I = \frac{\Delta q}{\Delta t} = \frac{N q}{\dfrac{\ell}{v}} = \frac{N q v}{\ell} ,
\qquad
\text{cioè}
\qquad
I \ell = N q v .
$$
Per la legge della **forza su un filo rettilineo**, il tratto subisce la forza $F = I \ell B = N q v B$. Questa forza è la somma delle forze sugli $N$ portatori, che sono uguali tra loro, quindi ciascun portatore subisce la forza
$$
\frac{F}{N} = q v B .
$$
Se il filo forma l'angolo $\alpha$ con il campo, lo stesso conto con $F = I \ell B \sin\alpha$ dà $q v B \sin\alpha$. Anche la direzione e il verso coincidono, perché la velocità dei portatori positivi ha il verso della corrente; perciò $I\,\vec{\ell} = N q\,\vec{v}$ e la forza su un portatore è $\dfrac{1}{N}\,I\,\vec{\ell} \times \vec{B} = q\,\vec{v} \times \vec{B}$.

Se i portatori sono negativi, come gli elettroni nei metalli, si muovono nel verso opposto alla corrente. Il prodotto $q\,\vec{v}$ ha allora di nuovo il verso della corrente, quindi la formula $\vec{F} = q\,\vec{v} \times \vec{B}$ vale anche per loro.
:::
::::

:::esempio{titolo="Verso della forza su un protone e su un elettrone"}
Un protone si muove nel piano del foglio verso destra con velocità $v = 2{,}0 \cdot 10^6\,\mathrm{m/s}$, in un campo uniforme di $5{,}0\,\mathrm{mT}$ entrante nel foglio. Con il pollice verso destra e le dita dentro il foglio, il palmo della mano destra è rivolto verso l'alto, quindi la forza sul protone è diretta verso l'alto e vale
$$
F = e v B = 1{,}60 \cdot 10^{-19} \cdot 2{,}0 \cdot 10^6 \cdot 5{,}0 \cdot 10^{-3}\,\mathrm{N} = 1{,}6 \cdot 10^{-15}\,\mathrm{N} .
$$
Un elettrone con la stessa velocità ha carica $-e$, quindi subisce una forza dello stesso modulo diretta verso il basso. La massa dell'elettrone è $m_e = 9{,}11 \cdot 10^{-31}\,\mathrm{kg}$, perciò la sua accelerazione è $a = \dfrac{F}{m_e} \approx 1{,}8 \cdot 10^{15}\,\mathrm{m/s^2}$, mentre il suo peso, circa $9 \cdot 10^{-30}\,\mathrm{N}$, è del tutto trascurabile rispetto alla forza magnetica.

::grafico{assi=0 uguale=1 vettori="0,0,1.8,0,v;0,0,0,1.5,F" punti="0,0,pieno" etichette="-0.5,-0.4,+e;-2.4,-1.6,⊗;-2.4,-0.5,⊗;-2.4,0.9,⊗;-2.4,2,⊗;-1.3,-1.6,⊗;-1.3,-0.5,⊗;-1.3,0.9,⊗;-1.3,2,⊗;1,-1.6,⊗;1,0.9,⊗;1,2,⊗;2.3,-1.6,⊗;2.3,-0.5,⊗;2.3,0.9,⊗;2.3,2,⊗" xmin=-2.8 xmax=2.8 ymin=-2 ymax=2.4 titolo="Protone con velocità $\vec{v}$ verso destra in un campo entrante nel foglio ($\otimes$): la forza di Lorentz $\vec{F} = e\,\vec{v} \times \vec{B}$ è perpendicolare a $\vec{v}$ e rivolta verso l'alto"}

:::

:::attenzione
Un campo magnetico non agisce su una carica ferma. Per esempio, una sferetta carica appesa a un filo isolante tra i poli di una calamita resta ferma nella sua posizione di equilibrio, perché $v = 0$ e quindi $q\,\vec{v} \times \vec{B} = \vec{0}$. Una carica ferma risente invece di un campo elettrico, con la forza $q\vec{E}$.
:::

## Lavoro della forza di Lorentz

:::richiamo{titolo="Lavoro e teorema dell'energia cinetica"}
Una forza costante $\vec{F}$ che agisce su un corpo durante uno spostamento $\Delta\vec{s}$ compie il lavoro $W = F\,\Delta s \cos\theta$, dove $\theta$ è l'angolo tra la forza e lo spostamento. Il lavoro totale delle forze che agiscono su un corpo di massa $m$ è uguale alla variazione della sua energia cinetica $K = \dfrac{1}{2} m v^2$, cioè $W = \Delta K$.
:::

::::teorema{#lavoro-forza-lorentz titolo="Lavoro nullo della forza di Lorentz"}
La forza di Lorentz su una carica in moto in un campo magnetico compie lavoro nullo lungo qualsiasi traiettoria. Di conseguenza, se sulla carica agisce solo la forza di Lorentz, l'energia cinetica e il modulo della velocità restano costanti; varia solo la direzione della velocità. In questo argomento il lavoro si indica con $W$, perché nella materia la lettera $L$ indica l'induttanza.

Il teorema serve a capire che un campo magnetico curva la traiettoria delle particelle cariche senza accelerarle né frenarle. Per esempio, un elettrone con velocità $1{,}0 \cdot 10^7\,\mathrm{m/s}$ ha energia cinetica
$$
K = \frac{1}{2} m_e v^2 = \frac{1}{2} \cdot 9{,}11 \cdot 10^{-31} \cdot \left( 1{,}0 \cdot 10^7 \right)^2\,\mathrm{J} \approx 4{,}6 \cdot 10^{-17}\,\mathrm{J} ,
$$
cioè circa $285\,\mathrm{eV}$, con $1\,\mathrm{eV} = 1{,}60 \cdot 10^{-19}\,\mathrm{J}$. Dopo aver attraversato un campo magnetico, l'elettrone ha la stessa energia cinetica e la stessa velocità in modulo, con una direzione diversa. Per cambiare l'energia di una particella carica serve un campo elettrico.

:::dimostrazione
Si divide la traiettoria in tratti percorsi in intervalli di tempo $\Delta t$ molto piccoli. In ciascun intervallo la velocità è praticamente costante, quindi lo spostamento è $\Delta\vec{s} = \vec{v}\,\Delta t$ e ha la direzione e il verso della velocità.

La forza di Lorentz $q\,\vec{v} \times \vec{B}$ è perpendicolare a $\vec{v}$, per la definizione di prodotto vettoriale, quindi è perpendicolare anche a $\Delta\vec{s}$. L'angolo tra forza e spostamento è perciò $\theta = 90^\circ$, e il lavoro nel tratto è
$$
W = F\,\Delta s \cos 90^\circ = 0 .
$$
Il lavoro lungo tutta la traiettoria è la somma dei lavori nei singoli tratti, e quindi è nullo. Se la forza di Lorentz è l'unica forza, per il **teorema dell'energia cinetica** si ha $\Delta K = W = 0$, perciò $\dfrac{1}{2} m v^2$ resta costante, e con esso il modulo $v$ della velocità.
:::
::::

## Momento torcente su una spira

:::richiamo{titolo="Momento di una coppia di forze"}
Due forze con lo stesso modulo $F$, versi opposti e rette d'azione parallele a distanza $d$ formano una **coppia**. La risultante della coppia è nulla e il suo momento ha modulo $M = F d$, dove $d$ si chiama braccio della coppia.
:::

::::teorema{#momento-su-una-spira titolo="Momento torcente su una spira rettangolare"}
Una spira rettangolare rigida, di lati $a$ e $b$ e area $S = ab$, è percorsa dalla corrente $I$ e può ruotare attorno a un asse parallelo ai lati di lunghezza $a$. La spira è immersa in un campo magnetico uniforme $\vec{B}$ perpendicolare all'asse. Sia $\hat{n}$ il versore perpendicolare al piano della spira, orientato con la regola della mano destra: con le dita piegate nel verso della corrente, il pollice indica $\hat{n}$. Sia $\theta$ l'angolo tra $\hat{n}$ e $\vec{B}$. Allora la forza totale sulla spira è nulla e il momento torcente $\vec{M}$ ha modulo
$$
M = I S B \sin\theta .
$$
Il momento fa ruotare la spira verso la posizione in cui $\hat{n}$ ha la direzione e il verso di $\vec{B}$. È massimo, $I S B$, quando il campo è parallelo al piano della spira ($\theta = 90^\circ$), ed è nullo quando il campo è perpendicolare alla spira ($\theta = 0^\circ$ oppure $\theta = 180^\circ$). Il momento torcente si indica con $\vec{M}$, perché nella materia la lettera $\tau$ indica la costante di tempo. Su questo momento si basano il motore elettrico e l'amperometro a bobina mobile. Per esempio, una spira di $10\,\mathrm{cm} \times 5{,}0\,\mathrm{cm}$, percorsa da $2{,}0\,\mathrm{A}$ in un campo di $0{,}40\,\mathrm{T}$ parallelo al suo piano, subisce il momento
$$
M = 2{,}0 \cdot 0{,}10 \cdot 0{,}050 \cdot 0{,}40\,\mathrm{N\cdot m} = 4{,}0 \cdot 10^{-3}\,\mathrm{N\cdot m} .
$$

::grafico{assi=0 uguale=1 linee="-0.75,1.3 0.75,-1.3" vettori="-0.75,1.3,-0.75,2.3,F;0.75,-1.3,0.75,-2.3,−F;0,0,0.87,0.5,n̂;-2.6,-2.3,-1.2,-2.3,B" segmenti="0,0,1.4,0;-0.75,1.3,-0.75,-0.4;0.75,-1.3,0.75,0.4" punti="0,0,pieno" etichette="-1.25,1.2,⊙;0.95,-1.45,⊗;0.45,0.08,θ" xmin=-2.8 xmax=2.8 ymin=-2.6 ymax=2.6 titolo="Spira vista lungo l'asse di rotazione: la corrente esce dal foglio ($\odot$) in un lato ed entra ($\otimes$) nell'altro; le forze $\vec{F}$ e $-\vec{F}$ formano una coppia di braccio $b \sin\theta$, che fa ruotare $\hat{n}$ verso $\vec{B}$"}

:::dimostrazione
L'idea è calcolare la forza su ciascuno dei quattro lati con la legge della **forza su un filo rettilineo** e poi sommare i loro effetti.

I due lati di lunghezza $b$ sono percorsi da correnti opposte, quindi subiscono forze opposte. Ciascuna di queste forze è perpendicolare al lato e al campo, perciò è parallela all'asse di rotazione. Le due forze sono applicate nei punti medi dei lati, che stanno entrambi sull'asse, quindi hanno la stessa retta d'azione; perciò la loro somma è nulla e il loro momento complessivo è nullo.

I due lati di lunghezza $a$ sono paralleli all'asse e quindi perpendicolari al campo. Ciascuno subisce una forza di modulo
$$
F = I a B ,
$$
perpendicolare al campo. Le correnti nei due lati hanno versi opposti, quindi le due forze sono opposte e formano una coppia, come mostra la figura. La risultante delle forze sulla spira è dunque nulla.

Il braccio della coppia è la distanza tra le rette d'azione delle due forze, cioè la proiezione del lato di lunghezza $b$ sulla direzione di $\vec{B}$. Il lato $b$ è perpendicolare a $\hat{n}$, e $\hat{n}$ forma l'angolo $\theta$ con $\vec{B}$; perciò il lato $b$ forma l'angolo $90^\circ - \theta$ con $\vec{B}$, e la sua proiezione vale $b \cos(90^\circ - \theta) = b \sin\theta$. Per il momento di una coppia si ottiene quindi
$$
M = F \cdot b \sin\theta = I a B \cdot b \sin\theta = I S B \sin\theta .
$$
:::
::::

:::definizione{#momento-magnetico titolo="Momento magnetico"}
Il **momento magnetico** di una spira piana di area $S$, percorsa dalla corrente $I$, è il vettore
$$
\vec{\mu} = I S\,\hat{n} ,
$$
dove $\hat{n}$ è il versore normale alla spira orientato con la regola della mano destra. Una bobina di $N$ spire uguali avvolte strettamente ha momento magnetico $\vec{\mu} = N I S\,\hat{n}$, perché i momenti delle singole spire si sommano. Il momento magnetico si misura in $\mathrm{A\cdot m^2}$. Con questa grandezza il momento torcente su una spira in un campo uniforme si scrive
$$
\vec{M} = \vec{\mu} \times \vec{B} ,
\qquad
M = \mu B \sin\theta ,
$$
e la formula vale per spire piane di forma qualsiasi, anche circolari. Il momento magnetico riassume in un solo vettore le proprietà della spira che contano nel campo: corrente, area, numero di spire e orientazione. Per esempio, una bobina di $50$ spire circolari di raggio $2{,}0\,\mathrm{cm}$, percorsa da $0{,}50\,\mathrm{A}$, ha
$$
\mu = N I \pi r^2 = 50 \cdot 0{,}50 \cdot \pi \cdot \left( 0{,}020 \right)^2\,\mathrm{A\cdot m^2} \approx 3{,}1 \cdot 10^{-2}\,\mathrm{A\cdot m^2} ,
$$
e in un campo di $0{,}20\,\mathrm{T}$ subisce al massimo il momento $\mu B \approx 6{,}3 \cdot 10^{-3}\,\mathrm{N\cdot m}$.
:::

:::osservazione{#equilibrio-spira titolo="Posizioni di equilibrio e ago magnetico"}
Il momento torcente si annulla per $\theta = 0^\circ$ e per $\theta = 180^\circ$, quindi in queste due posizioni la spira è in equilibrio. Per $\theta = 0^\circ$ il momento magnetico ha il verso del campo; se la spira viene ruotata di poco, il momento torcente la riporta indietro, perché fa sempre ruotare $\vec{\mu}$ verso $\vec{B}$, quindi l'equilibrio è **stabile**. Per $\theta = 180^\circ$ il momento magnetico è opposto al campo; una piccola rotazione allontana la spira da questa posizione, e l'equilibrio è **instabile**. Per esempio, la bobina con $\mu = 3{,}1 \cdot 10^{-2}\,\mathrm{A\cdot m^2}$ ruotata di $10^\circ$ dalla posizione stabile, in un campo di $0{,}20\,\mathrm{T}$, subisce un momento di richiamo $\mu B \sin 10^\circ \approx 1{,}1 \cdot 10^{-3}\,\mathrm{N\cdot m}$.

Anche un ago magnetico ha un momento magnetico, diretto dal suo polo sud al suo polo nord. In un campo esterno l'ago ruota fino alla posizione di equilibrio stabile, con $\vec{\mu}$ nel verso di $\vec{B}$; questo è il motivo per cui l'ago di una bussola indica la direzione e il verso del campo magnetico.
:::

## Motore elettrico e amperometro a bobina mobile

:::osservazione{#motore-elettrico titolo="Motore elettrico a corrente continua"}
Un **motore elettrico a corrente continua** trasforma energia elettrica in energia meccanica. È formato da una bobina di $N$ spire che può ruotare in un campo magnetico, prodotto da una calamita fissa, e da un **commutatore**. Il commutatore è un anello diviso in due metà, saldate agli estremi della bobina, su cui strisciano due contatti fissi collegati al generatore.

Con la corrente sempre nello stesso verso, la bobina ruoterebbe fino alla posizione di equilibrio stabile e oscillerebbe attorno a essa, perché dopo quella posizione il momento torcente cambia verso. Il commutatore inverte la corrente nella bobina ogni mezzo giro, nell'istante in cui $\vec{\mu}$ passa per la direzione di $\vec{B}$. Così anche $\vec{\mu}$ cambia verso, il momento torcente mantiene sempre lo stesso verso di rotazione, e il suo modulo vale $N I S B\,|\sin\theta|$.

Per esempio, una bobina di $100$ spire di area $20\,\mathrm{cm^2}$, percorsa da $3{,}0\,\mathrm{A}$ in un campo di $0{,}50\,\mathrm{T}$, subisce un momento massimo
$$
M_{\max} = N I S B = 100 \cdot 3{,}0 \cdot 20 \cdot 10^{-4} \cdot 0{,}50\,\mathrm{N\cdot m} = 0{,}30\,\mathrm{N\cdot m} .
$$
Nei motori reali ci sono più bobine, inclinate tra loro, così che il momento complessivo sia quasi costante durante la rotazione.

::grafico{f="sin(x);abs(sin(x))" xmin=-0.5 xmax=7 ymin=-1.5 ymax=1.5 nomi="θ,M" legenda="M = \mu B \sin\theta;M = \mu B\,|\sin\theta|" etichette="3,-0.3,π;6.15,-0.3,2π" titolo="Momento torcente sulla bobina in funzione dell'angolo, in unità $\mu B$: senza commutatore cambia segno ogni mezzo giro, con il commutatore ha sempre lo stesso verso"}

:::

:::osservazione{#amperometro-bobina-mobile titolo="Amperometro a bobina mobile"}
Nell'**amperometro a bobina mobile** una bobina di $N$ spire di area $S$ ruota attorno a un asse tra le espansioni polari di una calamita, che hanno la forma di due superfici cilindriche concave. All'interno della bobina c'è un cilindro fisso di ferro. Con questa forma il campo nello spazio in cui si muovono i lati della bobina è **radiale**, cioè diretto lungo i raggi del cilindro, e ha lo stesso modulo $B$ in ogni posizione della bobina.

Il campo radiale è sempre parallelo al piano della bobina, quindi $\theta = 90^\circ$ e il momento torcente ha il valore massimo $N I S B$ per ogni angolo di rotazione. Alla bobina sono collegati un indice e una molla a spirale, che esercita un momento di richiamo proporzionale all'angolo di rotazione $\varphi$, di modulo $k \varphi$, con $\varphi$ in radianti. L'indice si ferma quando i due momenti sono uguali, cioè quando
$$
N I S B = k \varphi
\qquad
\Longrightarrow
\qquad
\varphi = \frac{N S B}{k}\,I .
$$
L'angolo di rotazione è quindi direttamente proporzionale alla corrente, e la scala dello strumento ha tacche equidistanti. Per esempio, con $N = 100$, $S = 1{,}0\,\mathrm{cm^2}$, $B = 0{,}20\,\mathrm{T}$ e $k = 1{,}0 \cdot 10^{-6}\,\mathrm{N\cdot m/rad}$, una corrente di $0{,}20\,\mathrm{mA}$ fa ruotare l'indice di
$$
\varphi = \frac{100 \cdot 1{,}0 \cdot 10^{-4} \cdot 0{,}20}{1{,}0 \cdot 10^{-6}} \cdot 2{,}0 \cdot 10^{-4}\,\mathrm{rad} = 0{,}40\,\mathrm{rad} \approx 23^\circ .
$$

::grafico{assi=0 uguale=1 unicolore=1 poligoni="0.85,0 0.83,0.19 0.77,0.37 0.66,0.53 0.53,0.66 0.37,0.77 0.19,0.83 0,0.85 -0.19,0.83 -0.37,0.77 -0.53,0.66 -0.66,0.53 -0.77,0.37 -0.83,0.19 -0.85,0 -0.83,-0.19 -0.77,-0.37 -0.66,-0.53 -0.53,-0.66 -0.37,-0.77 -0.19,-0.83 0,-0.85 0.19,-0.83 0.37,-0.77 0.53,-0.66 0.66,-0.53 0.77,-0.37 0.83,-0.19;-1,1.43 -1.24,1.24 -1.43,1 -1.59,0.74 -1.69,0.45 -1.74,0.15 -1.74,-0.15 -1.69,-0.45 -1.59,-0.74 -1.43,-1 -1.24,-1.24 -1,-1.43 -3,-1.45 -3,1.45;1,-1.43 1.24,-1.24 1.43,-1 1.59,-0.74 1.69,-0.45 1.74,-0.15 1.74,0.15 1.69,0.45 1.59,0.74 1.43,1 1.24,1.24 1,1.43 3,1.45 3,-1.45" vettori="-1.68,0.61,-0.92,0.34;-1.68,-0.61,-0.92,-0.34;0.92,-0.34,1.68,-0.61;0.92,0.34,1.68,0.61;-1.22,0.44,-1.02,1,F;1.22,-0.44,1.02,-1,F" segmenti="-1.22,0.44,1.22,-0.44" etichette="-2.5,-0.1,N;2.3,-0.1,S;-1.62,0.15,⊙;1.36,-0.75,⊗" xmin=-3 xmax=3 ymin=-1.8 ymax=1.8 titolo="Amperometro a bobina mobile visto dall'alto: tra le espansioni polari $N$ e $S$ e il cilindro di ferro il campo è radiale, quindi è sempre parallelo al piano della bobina (tratteggiata) e il momento torcente vale $N I S B$ in ogni posizione"}

:::
