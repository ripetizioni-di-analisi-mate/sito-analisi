---
titolo: Linee di influenza
sommario: Come varia una reazione, un taglio o un momento flettente quando un carico si sposta lungo la trave, come si traccia la linea di influenza con l'equilibrio o con il teorema di Müller-Breslau e come la si usa per trovare i valori massimi e minimi prodotti dai carichi mobili.
---

## Carico unitario viaggiante e linea di influenza

Negli argomenti precedenti i carichi avevano una posizione assegnata. Qui il carico si sposta, e si studia come varia una grandezza fissata al variare della sua posizione.

:::definizione{#carico-unitario-viaggiante titolo="Carico unitario viaggiante"}
Su una trave ad asse orizzontale si considera una forza verticale diretta verso il basso, di intensità $1$, applicata nel punto di ascissa $\xi$. L'ascissa $\xi$ si misura lungo l'asse $x$ della trave e può assumere qualunque valore compreso fra le ascisse dei due estremi: per questo la forza si chiama **carico unitario viaggiante**. È il modello di un carico che cambia posizione, come un veicolo su un ponte, il carrello di un carroponte sulla sua via di corsa o la folla su una passerella.

La forza si assume adimensionale. Di conseguenza le grandezze che si ottengono con il carico unitario sono numeri puri quando sono forze (reazioni e tagli) e lunghezze, in $\mathrm{m}$, quando sono momenti. Moltiplicandole per l'intensità di un carico reale, in $\mathrm{kN}$, si ottengono rispettivamente $\mathrm{kN}$ e $\mathrm{kN\,m}$.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" forze="2.5 0,0,-1.5,1" quote="A,2.5 0,ξ,1;A,B,L,1.6" titolo="Trave appoggiata di luce $L$ con il carico unitario viaggiante nella posizione $\xi$"}
:::

:::definizione{#linea-di-influenza titolo="Linea di influenza"}
Sia $X$ una grandezza statica di una struttura isostatica: una reazione vincolare, oppure il taglio $T$ o il momento flettente $M$ in una sezione $S$ fissata. La **linea di influenza** di $X$ è la funzione
$$
\eta_X(\xi) = \text{valore di } X \text{ quando sulla struttura agisce solo il carico unitario in } \xi .
$$
Il suo grafico si disegna lungo l'asse della trave, con le ordinate positive sopra l'asse e negative sotto, e si chiama anch'esso linea di influenza. L'ordinata $\eta_X(\xi)$ dice quanto vale $X$ quando il carico unitario si trova in $\xi$; perciò un carico concentrato $P$ in $\xi$ produce il valore $P\,\eta_X(\xi)$, come assicura il teorema sul valore di una grandezza con la linea di influenza.

Per la trave appoggiata in figura, con la cerniera in $A$ e il carrello in $B$, l'equilibrio alla rotazione attorno ad $A$ con il carico in $\xi$ dà $V_B\,L - 1 \cdot \xi = 0$, quindi
$$
\eta_{V_B}(\xi) = \frac{\xi}{L} .
$$
La reazione del carrello è nulla con il carico sopra la cerniera, cresce linearmente e vale $1$ con il carico sopra il carrello.
:::

:::attenzione
La linea di influenza e il diagramma di una caratteristica della sollecitazione sono due funzioni diverse. Nel diagramma il carico è fermo e varia la sezione; nella linea di influenza la sezione è fissa e varia la posizione del carico. Per la trave appoggiata con $L = 6\,\mathrm{m}$ e la sezione $S$ in $x = 2\,\mathrm{m}$, la linea di influenza del taglio in $S$ vale in $\xi = 4\,\mathrm{m}$
$$
\eta_{T}(4) = \frac{1}{3} ,
$$
mentre il diagramma del taglio prodotto dal carico unitario fermo in $x = 2\,\mathrm{m}$, letto nella sezione $x = 4\,\mathrm{m}$, vale $-\dfrac{1}{3}$.
:::

## Metodo statico

Il modo più diretto per ricavare una linea di influenza è scrivere l'equilibrio con il carico in una posizione generica e lasciare $\xi$ come parametro.

::::teorema{#linee-lineari-a-tratti titolo="Linee di influenza delle travi isostatiche"}
Sia data una trave isostatica ad asse orizzontale, formata da uno o più corpi rigidi collegati da cerniere, con vincoli lisci e bilaterali, e sia $X$ una reazione vincolare oppure $M$ o $T$ in una sezione $S$ di ascissa $s$. Allora:

- $\eta_X$ è lineare in ogni intervallo in cui il carico resta sullo stesso corpo e dalla stessa parte di $S$;
- $\eta_X$ è continua, tranne $\eta_T$, che in $\xi = s$ ha un salto di ampiezza $1$:
$$
\lim_{\xi \to s^+} \eta_T(\xi) - \lim_{\xi \to s^-} \eta_T(\xi) = 1 .
$$

Il grafico di una linea di influenza è perciò una spezzata, e per disegnarlo bastano le ordinate nei punti in cui cambia pendenza: gli estremi, gli appoggi, le cerniere interne e la sezione $S$.

:::dimostrazione
L'idea è che il carico entra nelle equazioni di equilibrio solo attraverso la sua posizione, e vi entra linearmente.

Si scrivono le equazioni cardinali di ciascun corpo con il carico unitario in $\xi$ sul corpo $k$. Le incognite sono le reazioni e le forze nelle cerniere interne; i loro coefficienti dipendono solo dalla geometria, e la matrice del sistema è invertibile perché la struttura è isostatica. I termini noti sono nulli tranne quelli del corpo $k$: $-1$ nell'equazione di traslazione verticale e $-(\xi - x_k)$ nell'equazione di rotazione attorno a un punto $x_k$ del corpo. Il vettore dei termini noti è quindi una funzione affine di $\xi$ finché il carico resta sul corpo $k$, e perciò lo è anche la soluzione.

Con il carico in una cerniera interna il sistema delle forze esterne agenti sull'intera struttura è lo stesso, che il carico si consideri applicato al corpo di sinistra o a quello di destra; le reazioni vincolari coincidono, quindi le linee di influenza delle reazioni sono continue anche nelle cerniere.

Il momento e il taglio in $S$ si ricavano dall'equilibrio del tronco a sinistra di $S$. Contengono le reazioni del tronco, che sono affini in $\xi$, e il contributo del carico solo quando $\xi < s$: $-(s - \xi)$ nel momento e $-1$ nel taglio. Il termine $-(s - \xi)$ si annulla per $\xi = s$, perciò $\eta_M$ è continua. Il termine $-1$ è presente per $\xi < s$ e assente per $\xi > s$, perciò $\eta_T$ ha in $S$ un salto di ampiezza $1$ verso l'alto.
:::
::::

:::esempio{titolo="Reazioni della trave appoggiata"}
Per la trave appoggiata di luce $L$, con la cerniera in $A$ e il carrello in $B$, il carico unitario in $\xi$ è verticale e quindi $H_A = 0$. Le equazioni di traslazione verticale e di rotazione attorno ad $A$ sono
$$
\begin{cases}
V_A + V_B - 1 = 0 \\
V_B\,L - 1 \cdot \xi = 0
\end{cases}
$$
e danno
$$
\eta_{V_A}(\xi) = \frac{L - \xi}{L} ,
\qquad
\eta_{V_B}(\xi) = \frac{\xi}{L} .
$$
Le due linee sono segmenti: $\eta_{V_A}$ scende da $1$ sotto $A$ a $0$ sotto $B$, $\eta_{V_B}$ sale da $0$ a $1$. In ogni posizione la loro somma vale $1$, come richiede l'equilibrio alla traslazione verticale.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" diagramma="0,0,6,0,(1/6)*s" segni=1 titolo="Linea di influenza di $V_B$ per la trave appoggiata con $L = 6\,\mathrm{m}$: $\eta_{V_B}(\xi) = \dfrac{\xi}{6}$"}
:::

## Momento e taglio in una sezione della trave appoggiata

Per le caratteristiche della sollecitazione si usa la convenzione di segno dell'argomento sulle caratteristiche della sollecitazione: $M > 0$ quando tende le fibre inferiori, $T > 0$ quando tende a far ruotare il concio in verso orario.

::::teorema{#linee-trave-appoggiata titolo="Linee di influenza di M e T nella trave appoggiata"}
Sia data una trave appoggiata di luce $L$, con la cerniera in $A$ ($x = 0$) e il carrello in $B$ ($x = L$), e sia $S$ la sezione di ascissa $a$, con $0 < a < L$ e $b = L - a$. Allora
$$
\eta_M(\xi) =
\begin{cases}
\dfrac{b}{L}\,\xi & \text{se } 0 \le \xi \le a \\[8pt]
\dfrac{a}{L}\,(L - \xi) & \text{se } a \le \xi \le L
\end{cases}
\qquad
\eta_T(\xi) =
\begin{cases}
-\dfrac{\xi}{L} & \text{se } 0 \le \xi < a \\[8pt]
\dfrac{L - \xi}{L} & \text{se } a < \xi \le L
\end{cases}
$$
La linea di influenza del momento è un triangolo con il vertice sotto la sezione, di ordinata massima $\eta_M(a) = \dfrac{ab}{L}$; quella del taglio è formata da due segmenti paralleli, di pendenza $-\dfrac{1}{L}$, che passano da $-\dfrac{a}{L}$ a $\dfrac{b}{L}$ con un salto di $1$ in $S$. Per $L = 6\,\mathrm{m}$ e $a = 2\,\mathrm{m}$ l'ordinata massima di $\eta_M$ è $\dfrac{2 \cdot 4}{6} = \dfrac{4}{3}\,\mathrm{m}$, e $\eta_T$ salta da $-\dfrac{1}{3}$ a $\dfrac{2}{3}$.

:::dimostrazione
Si usa l'equilibrio del tronco che *non* contiene il carico, perché su quel tronco agisce una sola reazione.

Se il carico è a destra di $S$ ($\xi > a$), sul tronco $AS$ agiscono solo la reazione $V_A = \dfrac{L - \xi}{L}$ e le azioni interne in $S$. L'equilibrio alla rotazione attorno a $S$ e alla traslazione verticale del tronco dà
$$
M = V_A\,a = \frac{a}{L}\,(L - \xi) ,
\qquad
T = V_A = \frac{L - \xi}{L} ,
$$
poiché sul tronco di sinistra il taglio positivo agisce verso il basso. Se il carico è a sinistra di $S$ ($\xi < a$), si considera il tronco $SB$, su cui agiscono solo $V_B = \dfrac{\xi}{L}$ e le azioni interne in $S$. Sul tronco di destra il taglio positivo agisce verso l'alto, quindi
$$
M = V_B\,b = \frac{b}{L}\,\xi ,
\qquad
T + V_B = 0 \;\Longrightarrow\; T = -\frac{\xi}{L} .
$$
In $\xi = a$ le due espressioni del momento valgono entrambe $\dfrac{ab}{L}$, mentre quelle del taglio differiscono di $\dfrac{L - a}{L} + \dfrac{a}{L} = 1$.
:::
::::

::struttura{nodi="A,0,0;S,2,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" diagramma="0,0,2,0,(2/3)*s;2,0,6,0,4/3+(-1/3)*s" segni=1 titolo="Linea di influenza del momento in $S$ ($\mathrm{m}$), con $L = 6\,\mathrm{m}$ e $a = 2\,\mathrm{m}$: vertice $\dfrac{ab}{L} = \dfrac{4}{3}$"}

::struttura{nodi="A,0,0;S,2,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" diagramma="0,0,2,0,(-1/6)*s;2,0,6,0,2/3+(-1/6)*s" segni=1 titolo="Linea di influenza del taglio in $S$, con $L = 6\,\mathrm{m}$ e $a = 2\,\mathrm{m}$: salto di $1$ da $-\dfrac{1}{3}$ a $\dfrac{2}{3}$"}

:::osservazione{#costruzione-grafica titolo="Costruzione grafica delle linee di M e T"}
Il ramo destro di $\eta_M$, prolungato fino alla verticale per $A$, vi incontra l'ordinata $a$; il ramo sinistro, prolungato fino alla verticale per $B$, vi incontra l'ordinata $b$. Perciò la linea di influenza del momento si disegna riportando l'ordinata $a$ sulla verticale per $A$ e l'ordinata $b$ sulla verticale per $B$, congiungendo ciascuno dei due punti con l'appoggio opposto e conservando di ogni segmento il tratto che arriva alla verticale per $S$; i due tratti si incontrano nel vertice di ordinata $\dfrac{ab}{L}$. Allo stesso modo i due rami di $\eta_T$ sono le rette $\eta = -\dfrac{\xi}{L}$ e $\eta = \dfrac{L - \xi}{L}$, che passano per gli appoggi e hanno ordinate $-1$ sotto $B$ e $1$ sotto $A$.
:::

## Travi con sbalzi e mensole

:::osservazione{#travi-con-sbalzi titolo="Travi con sbalzi"}
In una trave con uno o due sbalzi, il carico sullo sbalzo si trova sullo stesso corpo rigido del carico in campata. Per il teorema sulle linee di influenza delle travi isostatiche, le espressioni trovate per $\xi$ fra gli appoggi valgono quindi anche sugli sbalzi: le linee di influenza delle reazioni, e quelle di $M$ e $T$ in una sezione della campata, si prolungano in linea retta oltre gli appoggi.

Si consideri la trave con la cerniera in $A$ ($x = 0$), il carrello in $B$ ($x = 6\,\mathrm{m}$) e lo sbalzo $BC$ lungo $2\,\mathrm{m}$. Allora $\eta_{V_A} = \dfrac{6 - \xi}{6}$ vale $-\dfrac{1}{3}$ con il carico in $C$, e $\eta_{V_B} = \dfrac{\xi}{6}$ vale $\dfrac{4}{3}$. Un carico sullo sbalzo tende a sollevare la trave in $A$, che deve quindi impedire anche lo spostamento verso l'alto: è il motivo per cui si assumono vincoli bilaterali.

::struttura{nodi="A,0,0;B,6,0;C,8,0" aste="A-C" vincoli="A,cerniera;B,carrello" diagramma="0,0,6,0,1+(-1/6)*s;6,0,8,0,(-1/6)*s" segni=1 titolo="Linea di influenza di $V_A$ per la trave con sbalzo: ordinata negativa $-\dfrac{1}{3}$ con il carico in $C$"}
:::

:::teorema{#sezione-sullo-sbalzo titolo="Sezione su uno sbalzo o su una mensola"}
Sia $S$ una sezione di ascissa $s$ su uno sbalzo destro, o su una mensola incastrata a sinistra, e sia libero l'estremo destro. Allora
$$
\eta_M(\xi) =
\begin{cases}
0 & \text{se } \xi < s \\
-(\xi - s) & \text{se } \xi > s
\end{cases}
\qquad
\eta_T(\xi) =
\begin{cases}
0 & \text{se } \xi < s \\
1 & \text{se } \xi > s
\end{cases}
$$
Segue dall'equilibrio del tronco a destra di $S$, che è libero: se il carico non sta su questo tronco, le azioni interne in $S$ sono nulle; se il carico sta in $\xi > s$, l'equilibrio alla rotazione attorno a $S$ dà $M = -1 \cdot (\xi - s)$ e quello alla traslazione verticale dà $T - 1 = 0$. Nella trave con sbalzo appena vista, per la sezione $D$ in $x = 7\,\mathrm{m}$ si ottiene $\eta_M = -1\,\mathrm{m}$ con il carico in $C$. I carichi nella campata $AB$ non influiscono sulle azioni interne dello sbalzo.
:::

:::esempio{titolo="Mensola"}
Per una mensola lunga $L$, incastrata in $A$ ($x = 0$) e libera a destra, l'equilibrio con il carico in $\xi$ dà
$$
\begin{cases}
V_A - 1 = 0 \\
M_A - 1 \cdot \xi = 0
\end{cases}
$$
quindi $\eta_{V_A}(\xi) = 1$ e $\eta_{M_A}(\xi) = \xi$, con $M_A$ antiorario. Il momento reattivo dell'incastro cresce linearmente con la distanza del carico dall'incastro. Per la sezione $S$ in $x = 1{,}5\,\mathrm{m}$ di una mensola lunga $4\,\mathrm{m}$ il teorema sulla sezione sullo sbalzo dà la linea in figura, con ordinata $-2{,}5\,\mathrm{m}$ all'estremo libero.

::struttura{nodi="A,0,0;S,1.5,0;B,4,0" aste="A-B" vincoli="A,incastro,180" diagramma="0,0,1.5,0,0;1.5,0,4,0,(-1)*s" segni=1 titolo="Linea di influenza del momento in $S$ per una mensola lunga $4\,\mathrm{m}$, con $S$ a $1{,}5\,\mathrm{m}$ dall'incastro ($\mathrm{m}$)"}
:::

## Metodo cinematico: teorema di Müller-Breslau

Il metodo statico richiede un'equazione per ogni tratto. Il principio dei lavori virtuali dà invece la forma dell'intera linea di influenza con un solo disegno.

:::richiamo{titolo="Principio dei lavori virtuali"}
Ipotesi: sistema di corpi rigidi con vincoli lisci e bilaterali, spostamenti virtuali infinitesimi compatibili con i vincoli.

Tesi: il sistema è in equilibrio se e solo se il lavoro virtuale delle forze attive è nullo per ogni spostamento virtuale compatibile. Si rimanda all'argomento sul principio dei lavori virtuali.
:::

:::definizione{#sconnessione-e-spostamento-coniugato titolo="Sconnessione e spostamento coniugato"}
Per applicare il principio dei lavori virtuali al calcolo di $X$, si toglie il vincolo che esplica $X$ e si tratta $X$ come una forza attiva. Lo **spostamento coniugato** $\delta_X$ è la grandezza cinematica per cui il lavoro virtuale di $X$ vale $X\,\delta_X$.

- Reazione verticale $V$ di un appoggio: si toglie il vincolo verticale; $\delta_X$ è lo spostamento verticale del punto, positivo verso l'alto.
- Momento reattivo $M_A$ di un incastro: si sostituisce l'incastro con una cerniera; $\delta_X$ è la rotazione $\varphi$ del corpo in $A$, positiva in verso antiorario.
- Momento flettente $M$ in $S$: si inserisce una cerniera in $S$; $\delta_X = \Delta\varphi = \varphi_s - \varphi_d$, rotazione del tronco sinistro meno rotazione del tronco destro.
- Taglio $T$ in $S$: si inserisce in $S$ un doppio pendolo con le bielle parallele all'asse della trave, che lascia libero solo lo scorrimento verticale relativo; $\delta_X = \Delta v = v_d - v_s$, spostamento verticale del tronco destro meno quello del tronco sinistro.

I segni seguono dalla convenzione su $M$ e $T$. Il momento positivo agisce sul tronco sinistro in verso antiorario e sul tronco destro in verso orario, quindi il suo lavoro è $M\,\varphi_s - M\,\varphi_d$. Il taglio positivo agisce sul tronco sinistro verso il basso e sul tronco destro verso l'alto, quindi il suo lavoro è $-T\,v_s + T\,v_d$.
:::

::::teorema{#teorema-di-muller-breslau titolo="Teorema di Müller-Breslau"}
Sia $X$ una reazione vincolare, oppure $M$ o $T$ in una sezione $S$, di una trave isostatica formata da corpi rigidi con vincoli lisci e bilaterali. Si opera la sconnessione corrispondente a $X$ e si considera l'atto di moto del meccanismo così ottenuto in cui lo spostamento coniugato vale $\delta_X = 1$. Allora
$$
\eta_X(\xi) = v(\xi) ,
$$
dove $v(\xi)$ è lo spostamento verticale, positivo verso l'alto, del punto della trave di ascissa $\xi$. In altre parole, la linea di influenza di $X$ è il diagramma degli spostamenti verticali del meccanismo con spostamento coniugato unitario.

:::dimostrazione
L'idea è applicare il principio dei lavori virtuali alla struttura privata del vincolo, usando come spostamento virtuale proprio l'atto di moto del meccanismo.

La struttura è isostatica, quindi togliendo il vincolo semplice che esplica $X$ si ottiene un meccanismo con un solo grado di libertà, e i suoi atti di moto sono tutti proporzionali a uno solo; si sceglie quello con $\delta_X = 1$. Con il carico unitario in $\xi$ la struttura originaria è in equilibrio. La struttura sconnessa, soggetta al carico e alla forza $X$ pensata come attiva, è in equilibrio con le stesse reazioni dei vincoli rimasti. L'atto di moto del meccanismo è compatibile con i vincoli rimasti, che sono lisci, perciò le loro reazioni compiono lavoro nullo. Il carico unitario è diretto verso il basso, quindi il suo lavoro è $-1 \cdot v(\xi)$. Per il principio dei lavori virtuali
$$
X \cdot 1 - 1 \cdot v(\xi) = 0 ,
$$
e quindi $X = v(\xi)$. Il valore di $X$ con il carico unitario in $\xi$ è per definizione $\eta_X(\xi)$, perciò $\eta_X(\xi) = v(\xi)$.
:::
::::

:::osservazione{#forma-della-linea-di-influenza titolo="Forma della linea di influenza dal meccanismo"}
Ogni corpo del meccanismo ruota attorno al proprio centro di rotazione assoluto, quindi i suoi spostamenti verticali sono $v = \varphi\,(x - x_C)$, con $x_C$ ascissa del centro. Ne seguono le proprietà che permettono di disegnare la linea di influenza a colpo d'occhio:

- su ogni corpo la linea è un segmento, con pendenza uguale alla rotazione $\varphi$ del corpo;
- la linea si annulla sotto le cerniere fisse e i carrelli rimasti, che sono centri di rotazione assoluti, e ha pendenza nulla sul tratto incastrato;
- nella sezione in cui si cerca $M$ la linea ha un punto angoloso, con le due pendenze che differiscono di $1$;
- nella sezione in cui si cerca $T$ i due tratti sono paralleli, perché il doppio pendolo impedisce la rotazione relativa, e la linea salta di $1$.

Per calcolare le ordinate si usano le rotazioni dei corpi, oppure il metodo statico in un solo punto per ciascun tratto.
:::

:::esempio{titolo="Momento in una sezione della trave appoggiata"}
Per il momento in $S$ ($x = a$) della trave appoggiata si inserisce una cerniera in $S$. Il tronco $AS$ ruota attorno ad $A$ di $\varphi_1$, il tronco $SB$ attorno a $B$ di $\varphi_2$, e i due tronchi devono avere lo stesso spostamento in $S$. Le condizioni da soddisfare insieme sono
$$
\begin{cases}
\varphi_1\,a = \varphi_2\,(a - L) \\
\varphi_1 - \varphi_2 = 1
\end{cases}
$$
e danno $\varphi_1 = \dfrac{b}{L}$, $\varphi_2 = -\dfrac{a}{L}$. Lo spostamento di $S$ è $v(a) = \varphi_1\,a = \dfrac{ab}{L}$, la stessa ordinata trovata con il metodo statico. La figura mostra il meccanismo per $L = 6\,\mathrm{m}$ e $a = 2\,\mathrm{m}$: la configurazione spostata, tratteggiata, coincide con la linea di influenza del momento in $S$.

::struttura{nodi="A,0,0;S,2,0;B,6,0" aste="A-S;S-B" cerniere="S" vincoli="A,cerniera;B,carrello" tratteggi="0,0 2,1.3333 6,0" punti="2,1.3333,S',pieno" etichette="0.9,1.05,φ_1;4.3,1.05,φ_2" titolo="Meccanismo con la cerniera in $S$ e rotazione relativa $\varphi_1 - \varphi_2 = 1$: lo spostamento di $S$ vale $\dfrac{ab}{L} = \dfrac{4}{3}\,\mathrm{m}$"}
:::

## Travi Gerber

In una trave Gerber i corpi sono disposti in sequenza: la trave portante è vincolata a terra in modo isostatico, la trave portata si appoggia a essa nella cerniera interna. Il teorema di Müller-Breslau rende immediata la forma delle linee di influenza.

:::teorema{#linee-trave-gerber titolo="Linee di influenza delle travi Gerber"}
Sia data una trave Gerber formata da una trave portante e da una trave portata, collegate da una cerniera interna $C$. Allora:

- la linea di influenza di una grandezza della trave portata (una sua reazione, oppure $M$ o $T$ in una sua sezione) è nulla su tutta la trave portante;
- la linea di influenza di una grandezza della trave portante, sul tratto della trave portata, è il segmento che congiunge l'ordinata in $C$ con lo zero sotto l'appoggio a terra della trave portata.

Segue dal teorema di Müller-Breslau. Una sconnessione nella trave portata lascia la portante vincolata a terra in modo isostatico, quindi ferma, e la linea è nulla sulla portante. Una sconnessione nella trave portante lascia la portata incernierata in $C$ e appoggiata a terra, quindi la portata ruota attorno al suo appoggio, e la linea vi è un segmento che si annulla sotto l'appoggio.
:::

:::esempio{titolo="Trave Gerber con una trave portata"}
Nella trave in figura la trave portante $AC$ ha la cerniera in $A$, il carrello in $B$ e lo sbalzo $BC$; la trave portata $CD$ è collegata in $C$ e appoggiata con un carrello in $D$.

::struttura{nodi="A,0,0;B,6,0;C,8,0;D,12,0" aste="A-C;C-D" cerniere="C" vincoli="A,cerniera;B,carrello;D,carrello" quote="A,B,6 m;B,C,2 m;C,D,4 m" titolo="Trave Gerber: trave portante $AC$ con sbalzo, trave portata $CD$"}

La reazione $V_D$ appartiene alla trave portata. Togliendo il carrello in $D$, la trave $AC$ resta ferma e $CD$ ruota attorno a $C$; con $v(D) = 1$ si ottiene $\eta_{V_D} = 0$ su $AC$ e $\eta_{V_D} = \dfrac{\xi - 8}{4}$ su $CD$.

Il momento in $B$ appartiene alla trave portante. Inserendo una cerniera in $B$, il tronco $AB$ resta fermo perché ha la cerniera in $A$ e il carrello in $B$; il tronco $BC$ ruota attorno a $B$ con $\varphi_d = -1$, perché $\varphi_s - \varphi_d = 1$ e $\varphi_s = 0$; la trave $CD$ ruota attorno a $D$. Lo spostamento di $C$ è $v(C) = -1 \cdot 2 = -2\,\mathrm{m}$, quindi
$$
\eta_{M_B}(\xi) =
\begin{cases}
0 & \text{se } 0 \le \xi \le 6 \\
-(\xi - 6) & \text{se } 6 \le \xi \le 8 \\
-\dfrac{12 - \xi}{2} & \text{se } 8 \le \xi \le 12
\end{cases}
$$
Il controllo statico con il carico in $C$ è immediato: il carico grava sullo sbalzo a $2\,\mathrm{m}$ da $B$, quindi $M_B = -2\,\mathrm{m}$.

::struttura{nodi="A,0,0;B,6,0;C,8,0;D,12,0" aste="A-C;C-D" cerniere="C" vincoli="A,cerniera;B,carrello;D,carrello" diagramma="0,0,6,0,0;6,0,8,0,(-1)*s;8,0,12,0,-2+(1/2)*s" segni=1 titolo="Linea di influenza del momento in $B$ ($\mathrm{m}$): nulla su $AB$, minima in $C$ con $-2$"}
:::

## Uso delle linee di influenza: valore per carichi assegnati

:::richiamo{titolo="Integrale definito"}
Ipotesi: $f$ continua a tratti su $[c, d]$.

Tesi: l'integrale $\displaystyle\int_c^d f(\xi)\,d\xi$ è l'area con segno compresa fra il grafico di $f$ e l'asse, positiva dove $f > 0$ e negativa dove $f < 0$. Si rimanda all'argomento sugli integrali definiti di Analisi 1.
:::

::::teorema{#valore-con-la-linea-di-influenza titolo="Valore di una grandezza con la linea di influenza"}
Sia $\eta_X$ la linea di influenza della grandezza $X$ di una trave isostatica. Se sulla trave agiscono le forze concentrate $P_1, \dots, P_n$, verso il basso, nelle ascisse $\xi_1, \dots, \xi_n$, e il carico distribuito $q(\xi)$, verso il basso, sul tratto $[c, d]$, allora
$$
X = \sum_{i=1}^{n} P_i\,\eta_X(\xi_i) + \int_c^d q(\xi)\,\eta_X(\xi)\,d\xi .
$$
Per un carico uniforme $q$ l'integrale vale $q\,\mathcal{A}$, dove $\mathcal{A}$ è l'area con segno della linea di influenza sul tratto caricato. Una coppia $\mathcal{M}$ antioraria applicata in $\xi_0$ contribuisce con $-\mathcal{M}\,\eta_X'(\xi_0)$, dove $\eta_X'$ è la pendenza della linea in $\xi_0$.

:::dimostrazione
Si applica il principio dei lavori virtuali al meccanismo del teorema di Müller-Breslau, con $\delta_X = 1$ e spostamenti $v(\xi) = \eta_X(\xi)$. La forza $P_i$ verso il basso compie il lavoro $-P_i\,\eta_X(\xi_i)$. Il carico distribuito equivale alle forze elementari $q(\xi)\,d\xi$, il cui lavoro complessivo è $-\displaystyle\int_c^d q(\xi)\,\eta_X(\xi)\,d\xi$. La coppia compie il lavoro $\mathcal{M}\,\varphi(\xi_0)$, dove la rotazione del corpo su cui agisce è la pendenza $\varphi(\xi_0) = \eta_X'(\xi_0)$. Il lavoro totale è nullo, quindi
$$
X - \sum_{i=1}^{n} P_i\,\eta_X(\xi_i) - \int_c^d q(\xi)\,\eta_X(\xi)\,d\xi + \mathcal{M}\,\eta_X'(\xi_0) = 0 ,
$$
che è la tesi.
:::
::::

:::esempio{titolo="Momento in una sezione per una forza e un carico uniforme"}
Sulla trave appoggiata con $L = 6\,\mathrm{m}$ agiscono la forza $P = 12\,\mathrm{kN}$ in $\xi = 4\,\mathrm{m}$ e il carico uniforme $q = 3\,\mathrm{kN/m}$ su tutta la luce. Per la sezione $S$ in $x = 2\,\mathrm{m}$ la linea di influenza del momento ha vertice $\dfrac{4}{3}\,\mathrm{m}$, ordinata $\eta_M(4) = \dfrac{2}{6}\,(6 - 4) = \dfrac{2}{3}\,\mathrm{m}$ e area $\mathcal{A} = \dfrac{1}{2} \cdot 6 \cdot \dfrac{4}{3} = 4\,\mathrm{m^2}$. Quindi
$$
M_S = 12 \cdot \frac{2}{3} + 3 \cdot 4 = 8 + 12 = 20\,\mathrm{kN\,m} .
$$
Con l'equilibrio diretto si ha $V_A = 12 \cdot \dfrac{2}{6} + 3 \cdot 3 = 13\,\mathrm{kN}$ e $M_S = 13 \cdot 2 - 3 \cdot 2 \cdot 1 = 20\,\mathrm{kN\,m}$, lo stesso valore.
:::

## Posizione più sfavorevole dei carichi mobili

Nel progetto di un ponte o di una trave di carroponte servono il valore massimo e il valore minimo che una grandezza può assumere al variare della posizione dei carichi mobili. Le linee di influenza permettono di trovarli senza provare tutte le posizioni.

:::teorema{#posizione-piu-sfavorevole titolo="Carico concentrato e carico ripartito di lunghezza variabile"}
Sia $\eta_X$ la linea di influenza di $X$, con massimo $\eta_{\max}$ e minimo $\eta_{\min}$.

- Una forza mobile $P$ produce il valore massimo $P\,\eta_{\max}$ quando si trova nel punto di massimo della linea e il valore minimo $P\,\eta_{\min}$ quando si trova nel punto di minimo.
- Un carico uniforme $q$ di lunghezza variabile, che può occupare qualunque insieme di tratti della trave, produce il valore massimo $q\,\mathcal{A}^+$ quando occupa tutti e soli i tratti in cui $\eta_X > 0$, e il valore minimo $q\,\mathcal{A}^-$ quando occupa tutti e soli i tratti in cui $\eta_X < 0$; $\mathcal{A}^+$ e $\mathcal{A}^-$ sono l'area positiva e l'area negativa della linea.

Segue dal teorema sul valore di una grandezza con la linea di influenza: ogni tratto caricato aggiunge a $X$ il contributo $q\displaystyle\int \eta_X\,d\xi$, che è positivo dove $\eta_X > 0$ e negativo dove $\eta_X < 0$. Il carico di lunghezza variabile è il modello della folla o della neve, che possono essere presenti su una parte qualsiasi della struttura. Per la trave con sbalzo e la sezione $S$ in campata il massimo del momento si ha con il carico sulla sola campata, il minimo con il carico sul solo sbalzo.
:::

:::richiamo{titolo="Teorema fondamentale del calcolo integrale"}
Ipotesi: $f$ continua su un intervallo $I$, $c \in I$.

Tesi: la funzione $F(z) = \displaystyle\int_c^z f(\xi)\,d\xi$ è derivabile in $I$ e $F'(z) = f(z)$. Si rimanda all'argomento sugli integrali definiti di Analisi 1.
:::

::::teorema{#carico-di-lunghezza-assegnata titolo="Carico ripartito di lunghezza assegnata"}
Sia $\eta_X$ continua e sia applicato un carico uniforme $q$ di lunghezza assegnata $c$, che occupa il tratto $[z, z + c]$ e si sposta lungo la trave al variare di $z$. Allora il valore
$$
X(z) = q \int_z^{z + c} \eta_X(\xi)\,d\xi
$$
è stazionario nelle posizioni in cui le ordinate della linea di influenza ai due estremi del carico sono uguali, $\eta_X(z) = \eta_X(z + c)$. Se la linea di influenza è un triangolo e $c$ è minore della sua base, il valore massimo si ha nell'unica posizione con le ordinate estreme uguali, con il carico a cavallo del vertice.

:::dimostrazione
Si scrive $X(z) = q\,\big(F(z + c) - F(z)\big)$, con $F$ primitiva di $\eta_X$. Per il teorema fondamentale del calcolo integrale
$$
X'(z) = q\,\big(\eta_X(z + c) - \eta_X(z)\big) ,
$$
che si annulla se e solo se le ordinate agli estremi sono uguali. Per la linea triangolare, finché il carico sta tutto sul ramo crescente $\eta_X(z + c) > \eta_X(z)$ e $X$ cresce; quando sta tutto sul ramo decrescente $X$ decresce. Con il carico a cavallo del vertice $\eta_X(z)$ cresce e $\eta_X(z + c)$ decresce al crescere di $z$, quindi $X'$ cambia segno una sola volta, da positivo a negativo, e il punto stazionario è il massimo.
:::
::::

:::esempio{titolo="Carico di lunghezza assegnata su una trave appoggiata"}
Una trave appoggiata con $L = 10\,\mathrm{m}$ porta un carico $q = 8\,\mathrm{kN/m}$ lungo $c = 5\,\mathrm{m}$. Per la sezione $S$ in $x = 4\,\mathrm{m}$ la linea di influenza del momento ha i rami $\eta = 0{,}6\,\xi$ e $\eta = 0{,}4\,(10 - \xi)$ e il vertice $2{,}4\,\mathrm{m}$. L'uguaglianza delle ordinate estreme dà
$$
0{,}6\,z = 0{,}4\,(10 - z - 5) \quad\Longrightarrow\quad z = 2\,\mathrm{m} ,
$$
quindi il carico occupa il tratto da $2\,\mathrm{m}$ a $7\,\mathrm{m}$, con ordinate estreme $1{,}2\,\mathrm{m}$. L'area della linea sul tratto è un trapezio diviso dalla verticale per $S$:
$$
\mathcal{A} = \frac{1{,}2 + 2{,}4}{2} \cdot 2 + \frac{2{,}4 + 1{,}2}{2} \cdot 3 = 3{,}6 + 5{,}4 = 9\,\mathrm{m^2} ,
$$
perciò $M_{S,\max} = 8 \cdot 9 = 72\,\mathrm{kN\,m}$. Con il carico centrato sulla sezione, da $1{,}5\,\mathrm{m}$ a $6{,}5\,\mathrm{m}$, si otterrebbe $71\,\mathrm{kN\,m}$.

::grafico{f="min(0.6*x,0.4*(10-x))+0*sqrt(x*(10-x))" xmin=-0.5 xmax=10.8 ymin=-0.4 ymax=3 area="min(0.6*x,0.4*(10-x));0;2;7" segmenti="2,0,2,1.2;7,0,7,1.2;4,0,4,2.4" punti="4,2.4,pieno" etichette="4,2.7,2,4;2,1.5,1,2;7,1.5,1,2" nomi="ξ,η" titolo="Linea di influenza del momento in $S$ e posizione del carico lungo $5\,\mathrm{m}$ che rende massimo $M_S$: ordinate uguali agli estremi"}
:::

:::osservazione{#convoglio-di-carichi titolo="Convoglio di carichi"}
Un **convoglio** è un gruppo di forze concentrate $P_1, \dots, P_n$ a distanze reciproche fisse, come gli assi di un veicolo. Se $z$ è la posizione della prima forza e $d_i$ la distanza della forza $i$-esima dalla prima, il valore della grandezza è
$$
X(z) = \sum_{i=1}^{n} P_i\,\eta_X(z + d_i) .
$$
Ogni addendo è lineare a tratti in $z$, perciò anche $X(z)$ lo è, e il suo massimo si ha in un estremo di un tratto lineare: quando una delle forze si trova su un vertice della linea di influenza, oppure entra o esce dalla trave. Per una linea triangolare si provano quindi le posizioni con ciascuna forza sul vertice. Due forze di $10\,\mathrm{kN}$ a $3\,\mathrm{m}$ di distanza sulla trave appoggiata dell'esempio precedente danno $10 \cdot 2{,}4 + 10 \cdot 1{,}2 = 36\,\mathrm{kN\,m}$ con la prima forza su $S$ e la seconda in $x = 7\,\mathrm{m}$, e $10 \cdot 0{,}6 + 10 \cdot 2{,}4 = 30\,\mathrm{kN\,m}$ con la seconda forza su $S$ e la prima in $x = 1\,\mathrm{m}$, perciò il massimo è $36\,\mathrm{kN\,m}$.
:::
