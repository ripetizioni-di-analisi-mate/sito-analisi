---
titolo: "Stabilità elastica e carico critico"
sommario: "Il carico critico di Eulero si ricava dall’equilibrio dell’asta inflessa e si usa per confrontare vincoli, piani di flessione e imperfezioni."
---

## Dalla compressione all’equilibrio inflesso

:::definizione{#instabilita titolo="Instabilità per carico di punta"}
Si consideri un’asta inizialmente rettilinea, con asse $x$, soggetta a una forza centrata di compressione di modulo $P$. Lo spostamento trasversale $v(x)$ si assume positivo verso il basso e la rigidezza flessionale è il prodotto $EI$ del modulo elastico $E$ e del momento d’inerzia $I$ rispetto all’asse di flessione. Nel modello di Eulero–Bernoulli le sezioni restano piane e ortogonali all’asse deformato. Si studiano piccoli spostamenti, un materiale elastico lineare e una forza di direzione fissa.

Quando l’asse è rettilineo, la retta del carico coincide con l’asse. Se una perturbazione sposta lateralmente una sezione, la stessa forza ha un braccio rispetto al centro di quella sezione. Nasce così un momento del secondo ordine, perché la sua espressione contiene la deformazione stessa. L’asta resiste alla curvatura con il momento elastico. Il **carico critico** è il più piccolo valore positivo di $P$ per il quale l’equilibrio linearizzato ammette uno spostamento trasversale diverso da zero anche in assenza di forze trasversali assegnate.
:::

:::esempio{titolo="Il braccio nella configurazione inflessa"}
Per un’asta appoggiata, gli estremi rimangono sull’asse originario. Se al centro compare uno spostamento $v(\dfrac L2)$, la distanza tra il centro della sezione e la retta del carico è il modulo di quello spostamento. Lo stesso spostamento produce un momento maggiore quando aumenta $P$. Perciò una forza assiale può rendere instabile la configurazione rettilinea anche se le tensioni restano nel campo elastico.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" forze="B,-1.25,0,P" tratteggi="0,0 1,-0.4 2,-0.68 3,-0.79 4,-0.68 5,-0.4 6,0" frecce="3,0,3,-0.79,v" quote="A,B,L,1.22" titolo="La retta del carico resta sull’asse originario, mentre la sezione centrale si sposta"}
:::

:::osservazione{titolo="Equilibrio e stabilità"}
Un equilibrio è stabile, nel modello conservativo e nel senso energetico locale, se la configurazione corrisponde a un minimo stretto dell’energia potenziale totale. Una perturbazione piccola richiede allora energia. Aumentando $P$, il contributo della forza assiale riduce l’incremento energetico associato alla flessione. Al primo valore critico la variazione di secondo ordine si annulla lungo una forma di inflessione. La ricerca di quella forma permette di riconoscere l’inizio dell’instabilità. Il calcolo lineare riguarda il punto di biforcazione e lascia indeterminata l’ampiezza del modo.
:::

:::esempio{titolo="Inflessione laterale di un elemento compresso"}
Le asticelle compresse hanno vincoli diversi. Le forme curve visibili dipendono dalle traslazioni e dalle rotazioni ammesse alle estremità. Il modello di Eulero studia la soglia di biforcazione di un’asta ideale. Per ricavare tale soglia servono i vincoli, la lunghezza libera e la rigidezza flessionale.

<figure class="grafico foto-tecnica"><img src="/immagini/scienza-delle-costruzioni/instabilita-provino.webp" alt="Modello didattico con asticelle compresse e diversi vincoli alle estremità" width="1280" height="960" loading="lazy" decoding="async"><figcaption>Inflessione laterale di un elemento compresso. Foto ridimensionata di <a href="https://commons.wikimedia.org/wiki/File:Buckledmodel.JPG">Grahams Child</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>.</figcaption></figure>
:::

## Asta incernierata e formula di Eulero

::::teorema{#eulero titolo="Formula di Eulero"}
Per un’asta di lunghezza $L$ e rigidezza costante $EI$, incernierata agli estremi e compressa da una forza centrata di direzione fissa, il primo carico critico è
$$
P_{\mathrm{cr}}=\frac{\pi^2 EI}{L^2}.
$$
La forma associata è $v(x)=C\sin\!\left(\dfrac{\pi x}{L}\right)$, dove $C$ è un coefficiente di ampiezza. L’asta ha due nodi agli estremi e la freccia massima del primo modo si trova in mezzeria. A parità di rigidezza, se la lunghezza raddoppia il carico critico si riduce a un quarto.

:::dimostrazione
Si isola il tratto a sinistra della sezione di ascissa $x$. La reazione longitudinale in $A$ ha modulo $P$ e la sua distanza dalla sezione spostata è $v(x)$ con segno. Con momento positivo quando tende le fibre inferiori, l’equilibrio fornisce $M=Pv$. La legge momento–curvatura per $v$ positiva verso il basso è $EI v''=-M$. Ne segue
$$
EI v''+Pv=0.
$$
Posto $k=\sqrt{\dfrac{P}{EI}}$, le soluzioni sono $v(x)=C_1\cos(kx)+C_2\sin(kx)$. La condizione $v(0)=0$ implica $C_1=0$. La condizione $v(L)=0$ implica $C_2\sin(kL)=0$. Una deformata di ampiezza diversa da zero richiede $\sin(kL)=0$, quindi $kL=n\pi$, con $n$ intero positivo. Il minimo valore corrisponde a $n=1$. Dalla relazione $P=EI k^2$ segue la formula.
:::
::::

:::osservazione{#modi-superiori titolo="Modi superiori e nodi"}
Il carico associato al modo $n$ vale $P_n=n^2P_{\mathrm{cr}}$. Il modo ha $n$ semionde e $n-1$ zeri interni, alle ascisse $\dfrac{jL}{n}$ con $j=1,\ldots,n-1$. Il secondo modo ha quindi un nodo in mezzeria e richiede un carico quattro volte maggiore del primo. Nel modello libero di assumere qualunque forma ammissibile, l’instabilità comincia al primo modo. Un vincolo ideale aggiunto in mezzeria, che impedisce solo lo spostamento trasversale, elimina il primo modo. Per un’asta uniforme con due campate uguali il secondo modo dell’asta intera soddisfa il vincolo aggiunto.

::grafico{f="sin(pi*x);sin(2*pi*x)" legenda="\mathrm{modo}\ 1;\mathrm{modo}\ 2" xmin=0 xmax=1 ymin=-1.2 ymax=1.2 titolo="Primo e secondo modo normalizzati in funzione dell’ascissa relativa"}
:::

## Vincoli e lunghezza libera d’inflessione

:::teorema{#lunghezza-efficace titolo="Lunghezza efficace per vincoli ideali"}
Per gli schemi classici di asta uniforme il primo carico critico si può scrivere usando la **lunghezza efficace** $L_{\mathrm{eff}}=KL$. Il numero $K$ è il coefficiente di lunghezza efficace del piano in esame. Vale
$$
P_{\mathrm{cr}}=\frac{\pi^2 EI}{L_{\mathrm{eff}}^2}.
$$

- Cerniera e cerniera, $K=1$.
- Incastro ed estremo libero, $K=2$.
- Incastro e cerniera, $K\simeq0{,}699$.
- Incastro e incastro flessionale, $K=\dfrac12$.

Per flessione, la cerniera impone spostamento trasversale nullo e lascia libera la rotazione. L’incastro impone entrambi nulli. Nel modello compresso l’estremo caricato può scorrere lungo l’asse originario senza che tale libertà cambi il tipo di vincolo flessionale. La guida trasversale che impedisce anche la rotazione rappresenta quindi, per il calcolo di instabilità, un incastro flessionale.
:::

:::esempio{titolo="Mensola e lunghezza equivalente"}
Per una mensola si impone $v(0)=v'(0)=0$. In punta il momento è nullo. La condizione sul taglio efficace all’estremo libero è $EI v'''(L)+Pv'(L)=0$. Per una forza assiale conservativa queste condizioni ammettono una forma proporzionale a $1-\cos(kx)$, con $k=\sqrt{\dfrac{P}{EI}}$. Infatti l’equazione differenziale generale è $EI v^{(4)}+Pv''=0$. La condizione di taglio elimina il termine lineare della soluzione generale e i due vincoli all’origine fissano la forma rimanente. Dalla condizione $v''(L)=0$ segue $\cos(kL)=0$. Il primo valore è $kL=\dfrac{\pi}{2}$, quindi $P_{\mathrm{cr}}=\dfrac{\pi^2 EI}{4L^2}$ e $L_{\mathrm{eff}}=2L$.

::struttura{nodi="A,0,0;B,5,0" aste="A-B" vincoli="A,incastro,180" forze="B,-1.05,0,P" quote="A,B,L,1.15" tratteggi="0,0 1,-0.04 2,-0.18 3,-0.38 4,-0.62 5,-0.9" titolo="Mensola compressa con pendenza nulla alla base e spostamento libero in punta"}
:::

:::esempio{titolo="Incastro flessionale a entrambe le estremità"}
Si usano $v(0)=v'(0)=v(L)=v'(L)=0$. La soluzione generale ha termini costante, lineare, sinusoidale e cosinusoidale. Sostituendo le quattro condizioni si ottiene, per $u=kL>0$,
$$
2(1-\cos u)-u\sin u=0.
$$
Il primo valore positivo è $u=2\pi$. Infatti l’equazione si fattorizza in due termini proporzionali a $\sin(\dfrac{u}{2})$ e $2\sin(\dfrac{u}{2})-u\cos(\dfrac{u}{2})$. Il primo si annulla in $2\pi$. Il secondo richiede $\tan(\dfrac{u}{2})=\dfrac{u}{2}$ nei punti in cui il coseno è diverso da zero. La prima radice positiva di quest’ultima relazione ha $\dfrac{u}{2}>\pi$. Si ottiene quindi $P_{\mathrm{cr}}=\dfrac{4\pi^2EI}{L^2}$ e la forma $1-\cos\!\left(\dfrac{2\pi x}{L}\right)$.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,incastro,180;B,doppio-pendolo,270" forze="B,-1.25,0,P" quote="A,B,L,1.2" tratteggi="0,0 1,-0.15 2,-0.45 3,-0.6 4,-0.45 5,-0.15 6,0" titolo="La guida in B blocca spostamento trasversale e rotazione e lascia libero lo scorrimento assiale"}
:::

:::osservazione{titolo="Incastro e cerniera"}
Per la combinazione mista valgono $v(0)=v'(0)=v(L)=v''(L)=0$. Il momento nullo in $L$ è la condizione aggiuntiva rispetto allo spostamento nullo. Le condizioni applicate alla soluzione generale danno $\sin(kL)-kL\cos(kL)=0$. La prima radice positiva è $kL\simeq4{,}4934$, quindi $K=\dfrac{\pi}{4{,}4934}\simeq0{,}699$. Questo valore vale per cerniera e incastro ideali. Se la rotazione al vincolo incontra una rigidezza finita o se la sezione terminale trasla, le condizioni cinematiche cambiano e il coefficiente dipende dallo schema complessivo.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,incastro,180;B,carrello" forze="B,-1.25,0,P" quote="A,B,L" titolo="Incastro in A e cerniera flessionale in B"}
:::

## Equazione generale e azioni di estremità

:::osservazione{titolo="La forma differenziale dell’equilibrio"}
Per un’asta con rigidezza flessionale variabile si indichi con $w$ un piccolo spostamento virtuale. Le variazioni cinematiche ai vincoli soddisfano le stesse condizioni omogenee dello spostamento. Dall’equilibrio energetico si ottiene
$$
\int_0^L EI(x)v''w''\,dx-P\int_0^L v'w'\,dx=0.
$$
Si applica due volte l’integrazione per parti al primo termine e una volta al secondo. L’integrando che moltiplica $w$ è $(EI v'')''+Pv''$. I termini di estremità sono
$$
\left[EI v'' w'-\big((EI v'')'+Pv'\big)w\right]_0^L.
$$
La parte integrale deve annullarsi per ogni variazione $w$ nulla vicino agli estremi. Ne segue l’equazione generale $(EI v'')''+Pv''=0$. La parte agli estremi distingue i dati cinematici dalle azioni naturali. Quando la rotazione virtuale è libera, il coefficiente di $w'$ deve annullarsi e quindi il momento è nullo. Quando lo spostamento trasversale virtuale è libero, deve annullarsi anche il coefficiente di $w$. Quest’ultimo contiene il termine dovuto alla compressione.
:::

:::esempio{titolo="Applicazione ai vincoli flessionali"}
A una cerniera lo spostamento virtuale è nullo e la rotazione virtuale è libera. Perciò si impongono $v=0$ ed $EI v''=0$. A un incastro flessionale si annullano $w$ e $w'$, perciò il termine di estremità si annulla senza imporre né momento né taglio efficace. Si assegnano invece $v=0$ e $v'=0$. A un estremo libero sono liberi sia $w$ sia $w'$, quindi si assegnano due condizioni sulle azioni. Nella mensola compressa, imporre $v'''(L)=0$ al posto del taglio efficace significherebbe trascurare la proiezione della forza associata alla pendenza. Quel termine è dello stesso ordine delle altre azioni incrementali.
:::

:::osservazione{titolo="Raccordo tra due rigidezze"}
Se la rigidezza cambia bruscamente in una sezione priva di cerniera e priva di azioni concentrate, lo spostamento e la rotazione sono continui. Dividendo l’integrale di equilibrio nei due tratti, i termini di estremità alla sezione di raccordo devono compensarsi. Poiché le variazioni $w,w'$ sono comuni ai due tratti e possono essere arbitrarie in quella sezione, devono coincidere i valori di $EI v''$ e di $(EI v'')'+Pv'$ calcolati dai due lati. La curvatura può invece saltare. Per esempio, se la rigidezza raddoppia passando al secondo tratto, la stessa azione flettente richiede una curvatura di modulo dimezzato nella sezione dal lato più rigido. Una sinusoide di prova con curvatura continua soddisfa la compatibilità cinematica, quindi resta utilizzabile nel quoziente di Rayleigh, ma in generale non soddisfa esattamente le condizioni del raccordo.
:::


:::osservazione{titolo="Il ruolo della direzione del carico"}
Il contributo energetico del carico discende dal lavoro compiuto da una forza la cui direzione resta fissa. In una mensola, per esempio, la punta può inclinarsi e traslare mentre la forza rimane parallela alla direzione iniziale. La rotazione della sezione non cambia il verso della forza applicata. Un dispositivo che orienti la spinta seguendo invece la tangente alla punta definisce un altro problema. In quel caso la direzione dipende dalla deformata e le condizioni terminali della mensola con forza conservativa non si trasferiscono direttamente. Per distinguere i due modelli si guarda quindi al modo in cui il carico è applicato, oltre che al simbolo dell’incastro. Il coefficiente $K=2$ si riferisce alla mensola ideale con forza centrata e direzione fissa.
:::

## Due piani di inflessione

:::osservazione{#asse-debole titolo="Confronto tra i piani principali"}
Sia $x$ l’asse longitudinale dell’asta e siano $y,z$ gli assi principali della sezione. Uno spostamento lungo $y$ produce flessione attorno a $z$. In quel piano compare la rigidezza $EI_z$. Viceversa uno spostamento lungo $z$ produce flessione attorno a $y$ e usa $EI_y$. Se le condizioni ai vincoli permettono di studiare i piani separatamente, si confrontano
$$
P_{\mathrm{cr},y}=\frac{\pi^2 E I_y}{(K_yL)^2},
\qquad
P_{\mathrm{cr},z}=\frac{\pi^2 E I_z}{(K_zL)^2}.
$$
I pedici indicano l’asse intorno al quale si flette la sezione. Il valore minore è il primo carico critico tra i due piani. Con gli stessi vincoli prevale il minore dei due momenti d’inerzia. Se i vincoli differiscono, il confronto riguarda i rapporti $\dfrac{I_y}{K_y^2}$ e $\dfrac{I_z}{K_z^2}$. Un ritegno può quindi cambiare il piano che governa.
:::

:::esempio{titolo="Il rettangolo e il vincolo più rigido"}
Per una sezione rettangolare di altezza $h$ misurata lungo $y$ e larghezza $b$ misurata lungo $z$ si hanno $I_y=\dfrac{hb^3}{12}$ e $I_z=\dfrac{bh^3}{12}$. Se $h=2b$, allora $I_z=4I_y$. Con due cerniere in entrambi i piani governa la flessione attorno a $y$. Se invece $K_y=\dfrac12$ e $K_z=1$, i due carichi coincidono. Basta che $I_z$ sia un po’ minore di $4I_y$ perché diventi determinante la flessione attorno a $z$.

::struttura{poligoni="0,0 2,0 2,4 0,4" punti="1,2,G,baricentro" frecce="1,2,1,4.9,y;1,2,3.2,2,z" quote="0 0,2 0,b;0 0,0 4,h,-0.7" riferimento=0 titolo="Assi principali di un rettangolo con altezza doppia della larghezza"}
:::

## Snellezza e campo elastico

:::definizione{#snellezza titolo="Snellezza geometrica"}
Sia $A$ l’area della sezione. Il **raggio d’inerzia** relativo all’asse esaminato è $i=\sqrt{\dfrac{I}{A}}$. Il rapporto $\lambda=\dfrac{L_{\mathrm{eff}}}{i}$ si chiama **snellezza**. Poiché numeratore e denominatore sono lunghezze, $\lambda$ è adimensionale. La tensione media di compressione associata al carico critico si ricava dividendo il carico per l’area. Sostituendo $I=Ai^2$ si ottiene
$$
\sigma_{\mathrm{cr}}=\frac{P_{\mathrm{cr}}}{A}
=\frac{\pi^2 E}{\lambda^2}.
$$
Per lo stesso materiale, una snellezza maggiore significa una tensione critica elastica minore. A parità di area, distribuire più materiale lontano dall’asse aumenta $I$, quindi aumenta il raggio d’inerzia e riduce la snellezza.
:::

:::esempio{titolo="Controllo del campo di validità"}
Per $E=200\,000\,\mathrm{MPa}$ e $\lambda=100$, la tensione di Eulero vale $20\pi^2\,\mathrm{MPa}$, circa $197\,\mathrm{MPa}$. Se invece $\lambda=50$, il calcolo dà $80\pi^2\,\mathrm{MPa}$, circa $790\,\mathrm{MPa}$. Se la soglia elastica assegnata è $250\,\mathrm{MPa}$, il primo valore appartiene al campo elastico assunto. Il secondo lo supera. Il secondo valore indica quindi che le ipotesi della previsione elastica cessano di valere prima del carico calcolato. L’intersezione con una soglia di tensione si ricava imponendo $\sigma_{\mathrm{cr}}=\sigma_{\mathrm e}$ e risolvendo per $\lambda$.

::grafico{f="200000*pi^2/x^2;250" legenda="\sigma_{\mathrm{cr}};\sigma_{\mathrm e}=250\,\mathrm{MPa}" xmin=45 xmax=180 ymin=0 ymax=1050 titolo="Tensione di Eulero in MPa e soglia elastica di 250 MPa"}
:::

## Lettura dei risultati di stabilità

:::esempio{titolo="La rigidezza richiesta nel modello"}
Si consideri un’asta incernierata di lunghezza $5\,\mathrm m$. Si cerca la rigidezza che nel modello dia un carico critico di $60\pi^2\,\mathrm{kN}$. Si risolve la formula di Eulero rispetto a $EI$. Il prodotto del carico per il quadrato della lunghezza è $1500\pi^2\,\mathrm{kN\,m^2}$. La divisione per $\pi^2$ dà $EI=1500\,\mathrm{kN\,m^2}$. L’operazione conserva l’unità di una rigidezza flessionale perché moltiplica una forza per il quadrato di una lunghezza. Un cambio di vincolo richiede la stessa operazione con la nuova lunghezza efficace.
:::

:::osservazione{titolo="Sensibilità al vincolo e alle dimensioni"}
La dipendenza quadratica dalla lunghezza efficace ha una conseguenza diretta. Se il valore assegnato a $K$ aumenta del dieci per cento a parità di $L$ ed $EI$, il rapporto fra il nuovo carico e il precedente è $\dfrac{1}{(1{,}1)^2}$, circa $0{,}826$. Il carico si riduce quindi di circa il diciassette per cento. Il rapporto è diverso dalla variazione di $K$ perché il coefficiente compare al quadrato nel denominatore. Se invece si aumenta soltanto $E$ del dieci per cento, il carico cresce nella stessa proporzione.

Quando è assegnata una sezione rettangolare, il momento d’inerzia cresce con il cubo della dimensione perpendicolare all’asse di flessione. A parità dell’altra dimensione, raddoppiare quella perpendicolare aumenta di otto volte la rigidezza del piano. Aumenta anche l’area di due volte. Di conseguenza il carico critico cresce di otto volte, mentre la tensione media associata cresce di quattro. Distinguere carico e tensione evita di attribuire alle due grandezze lo stesso fattore di scala.
:::

:::attenzione{titolo="Primo carico critico e verifiche della sezione"}
Il carico di Eulero riguarda l’asta intera e il modo di inflessione descritto. Una parete sottile può avere un proprio modo locale, nel quale si deforma soprattutto la parete della sezione. Anche una sezione incapace di mantenere il legame elastico al livello di tensione calcolato richiede un modello diverso. Per esempio, se il limite elastico assegnato è $250\,\mathrm{MPa}$ e il calcolo restituisce $790\,\mathrm{MPa}$, l’equilibrio rettilineo esce dal campo del materiale assunto prima di raggiungere quel valore. Il risultato di Eulero rimane il valore del problema elastico ideale, mentre le altre verifiche rispondono a ipotesi differenti.
:::

## Energia e stima di Rayleigh

::::teorema{#rayleigh titolo="Quoziente di Rayleigh"}
Per una forza compressiva conservativa costante lungo l’asta, sia $\varphi$ una funzione di prova che rispetta i vincoli cinematici omogenei. Si assuma $\varphi'$ non identicamente nulla e rigidezza $EI(x)>0$. Il quoziente
$$
P_{\mathrm R}=
\frac{\displaystyle\int_0^L EI(x)[\varphi''(x)]^2\,dx}
{\displaystyle\int_0^L [\varphi'(x)]^2\,dx}
$$
è una stima superiore o uguale al primo carico critico. L’uguaglianza vale se $\varphi$ è una forma critica del primo modo. La funzione di prova deve soddisfare i vincoli su spostamenti e rotazioni, mentre le condizioni naturali sulle azioni di estremità discendono dall’equilibrio.

:::dimostrazione
Per una deformata $v=\alpha\varphi$ di ampiezza $\alpha$, l’energia elastica di flessione è $\dfrac{\alpha^2}{2}\int_0^L EI(x)(\varphi'')^2\,dx$. Il contributo della forza è $-\dfrac{\alpha^2 P}{2}\int_0^L(\varphi')^2\,dx$, perché la perdita di proiezione della lunghezza vale al secondo ordine $\dfrac12\int_0^L(v')^2\,dx$. La somma si annulla per un’ampiezza diversa da zero quando $P$ è uguale al quoziente. Il primo carico critico si ottiene minimizzando quel rapporto su tutte le forme ammissibili. Valutarlo su una sola forma produce quindi un valore maggiore o uguale al minimo.
:::
::::

:::esempio{titolo="Rigidezza diversa nelle due metà"}
Per un’asta incernierata con rigidezza $EI_1$ nella prima metà ed $EI_2$ nella seconda, la prova $\varphi=\sin\!\left(\dfrac{\pi x}{L}\right)$ soddisfa i vincoli agli estremi. La seconda derivata è proporzionale al seno, quindi il suo quadrato ha integrali uguali nelle due metà. La prima derivata è proporzionale al coseno, il cui quadrato ha integrale $\dfrac L2$ sull’intera asta. Segue
$$
P_{\mathrm R}=\frac{\pi^2}{L^2}\frac{EI_1+EI_2}{2}.
$$
La media aritmetica deriva dalla forma scelta. Con una discontinuità fuori mezzeria i due integrali al numeratore hanno generalmente pesi differenti.

::struttura{nodi="A,0,0;C,3,0;B,6,0" aste="A-C;C-B" vincoli="A,cerniera;B,carrello" forze="B,-1.2,0,P" etichette="1.4,0.35,EI_1;4.5,0.35,EI_2" quote="A,C,L metà;C,B,L metà" titolo="Asta di rigidezza flessionale costante su ciascuna metà"}
:::

## Imperfezioni e amplificazione della freccia

:::teorema{#amplificazione-imperfezioni titolo="Imperfezione iniziale nel primo modo"}
Per un’asta incernierata di rigidezza costante, si supponga che la forma iniziale priva di tensioni sia $v_0(x)=e_0\sin\!\left(\dfrac{\pi x}{L}\right)$. Il numero $e_0$ è l’ampiezza dell’imperfezione geometrica. Con un carico centrato $P<P_{\mathrm{cr}}$, la freccia totale rispetto alla retta che congiunge le cerniere ha ampiezza
$$
v_{\max}=\frac{e_0}{1-\dfrac{P}{P_{\mathrm{cr}}}}.
$$
La freccia aggiuntiva rispetto alla forma iniziale vale $v_{\max}-e_0$. Il momento elastico dipende dalla variazione di curvatura rispetto a $v_0$, mentre il braccio della forza dipende dalla deviazione totale $v$. Perciò l’equazione è $EI(v-v_0)''+Pv=0$. Sostituendo la forma sinusoidale si ottiene $(P_{\mathrm{cr}}-P)v_{\max}=P_{\mathrm{cr}}e_0$, da cui segue la formula.
:::

:::esempio{titolo="Freccia totale e incremento"}
Se $e_0=2\,\mathrm{mm}$ e $P=\dfrac34P_{\mathrm{cr}}$, il denominatore è $\dfrac14$. La freccia totale vale $8\,\mathrm{mm}$ e l’incremento rispetto alla configurazione iniziale vale $6\,\mathrm{mm}$. L’amplificazione cresce rapidamente al crescere di $P$. Vicino al valore critico il modello lineare può predire spostamenti incompatibili con l’ipotesi di piccoli spostamenti. Le imperfezioni geometriche e i carichi eccentrici possono entrambi produrre un braccio già all’inizio del carico, ma il valore e la forma di quel braccio dipendono dalle condizioni assegnate.

::grafico{f="1/(1-x)" xmin=0 xmax=0.9 ymin=0 ymax=11 titolo="Rapporto fra freccia totale e freccia iniziale in funzione di $\dfrac{P}{P_{\mathrm{cr}}}$"}
:::

:::osservazione{titolo="Eccentricità costante della retta di carico"}
In un esempio diverso dall’asta imperfetta, si può partire da un’asta rettilinea e introdurre una forza compressiva la cui retta d’azione ha eccentricità costante $e$ rispetto alla retta dei centri delle sezioni terminali. Si assumono due appoggi senza spostamento trasversale e la trasmissione della coppia di eccentricità alle estremità. Se il segno di $e$ è scelto in modo che si sommi a $v$, il momento è $P(e+v)$. L’equazione diventa $EI v''+Pv=-Pe$. Usando la simmetria e imponendo $v(0)=v(L)=0$, si ottiene
$$
v(x)=e\left[\frac{\cos(k(x-\dfrac L2))}{\cos(\dfrac{kL}{2})}-1\right],
\qquad k=\sqrt{\frac{P}{EI}}.
$$
La freccia in mezzeria è $e\left[\dfrac{1}{\cos(\dfrac{kL}{2})}-1\right]$. Si ritrova il primo carico di Eulero come valore per cui il denominatore tende a zero. Qui $e$ è una distanza della forza dall’asse all’inizio del carico. Nell’asta con imperfezione iniziale $e_0$ è invece un’ampiezza della forma scarica. Le due condizioni producono leggi di amplificazione distinte.
:::

:::esempio{titolo="Due componenti dell’imperfezione iniziale"}
Per due cerniere e rigidezza costante, una forma iniziale può contenere sia il primo sia il secondo modo. Si consideri una forma scarica con coefficienti $e_1=2\,\mathrm{mm}$ ed $e_2=1\,\mathrm{mm}$. L’equazione della linea elastica è lineare, quindi si può applicare il principio di sovrapposizione ai due contributi. Nella prima sinusoide la derivata seconda restituisce la stessa funzione con un fattore $-\dfrac{\pi^2}{L^2}$. Nella seconda il fattore è $-\dfrac{4\pi^2}{L^2}$. Di conseguenza ciascuna componente ha la propria amplificazione
$$
a_1=\frac{e_1}{1-\dfrac{P}{P_1}},\qquad
a_2=\frac{e_2}{1-\dfrac{P}{P_2}},\qquad P_2=4P_1.
$$
Con $P=\dfrac12P_1$, si ottengono $a_1=4\,\mathrm{mm}$ e $a_2=\dfrac87\,\mathrm{mm}$. Alla mezzeria il secondo modo si annulla, quindi lo spostamento vale $4\,\mathrm{mm}$. A un quarto della luce il secondo modo vale uno e il primo vale $\dfrac{\sqrt2}{2}$. Lo spostamento totale vale allora $\left(2\sqrt2+\dfrac87\right)\,\mathrm{mm}$. La mezzeria permette dunque di misurare direttamente la prima ampiezza in questo caso, mentre per riconoscere la seconda occorre osservare la deformata anche lontano dal centro.
:::

:::osservazione{titolo="Il peso del primo modo"}
Per un carico positivo inferiore a $P_1$, il coefficiente di amplificazione del primo modo è maggiore di quello del secondo perché il denominatore del primo è minore. Perciò una piccola componente iniziale nella forma più bassa può diventare dominante con la crescita del carico. Nel caso ideale in cui $e_1=0$, l’equazione lineare con forzante composta soltanto dal secondo modo dà $a_1=0$ finché $P<P_1$. La stabilità dell’equilibrio rispetto a perturbazioni arbitrarie continua però a dipendere dal primo carico critico. Il modo presente nella geometria scarica e il modo che determina l’inizio dell’instabilità descrivono due aspetti distinti del problema.
:::
