---
titolo: "Luce, riflessione e specchi"
sommario: "Propagazione rettilinea, ombre, camera oscura, riflessione e formazione delle immagini."
---

## Raggi luminosi

:::definizione{#raggi titolo="Il modello dell’ottica geometrica"}
Un **raggio luminoso** è una linea con una freccia che indica la direzione e il verso in cui si propaga la luce. La direzione è la retta lungo cui la luce si muove. Il verso è il senso di percorrenza su quella retta ed è indicato dalla punta della freccia. Un **fascio** è un insieme di raggi.

Il **mezzo** è il materiale in cui la luce viaggia, per esempio aria, acqua o vetro, oppure il vuoto. Un mezzo è **omogeneo** quando ha le stesse proprietà in tutti i suoi punti, come l'aria di una stanza. In un mezzo omogeneo la luce si propaga in linea retta, quindi i raggi si disegnano come segmenti rettilinei. Lo studio della luce con questi raggi si chiama **ottica geometrica**.

La luce è anche un'onda. La **lunghezza d'onda** è la distanza fra due creste successive dell'onda e per la luce visibile è compresa fra circa $4\cdot10^{-7}\,\mathrm m$ e $7\cdot10^{-7}\,\mathrm m$. Il modello dei raggi rettilinei vale lontano da ostacoli di dimensioni confrontabili con la lunghezza d'onda. Un ostacolo molto piccolo o una **fenditura** stretta, cioè una sottile apertura, può allargare il fascio e mandare luce anche di lato. Questo fenomeno si chiama **diffrazione** e per descriverlo serve un modello ondulatorio, che tratta la luce come un'onda.
:::

:::esempio{#tempo-luce titolo="Distanza, tempo e percorso di ritorno"}
Nel vuoto la luce viaggia a velocità costante. Questa velocità si indica con la lettera $c$ e vale approssimativamente $c=3{,}0\cdot10^8\,\mathrm{m/s}$. Un **impulso** è un lampo di luce molto breve. Se un impulso percorre solo $d=900\,\mathrm m$, il tempo impiegato è la distanza divisa per la velocità.
$$
t=\frac{d}{c}=\frac{900\,\mathrm m}{3{,}0\cdot10^8\,\mathrm{m/s}}=3{,}0\cdot10^{-6}\,\mathrm s=3{,}0\,\mathrm{\mu s}.
$$
Il simbolo $\mathrm{\mu s}$ si legge «microsecondo». La lettera greca $\mu$, che si legge «mi», indica un milionesimo, quindi $1\,\mathrm{\mu s}=10^{-6}\,\mathrm s$.

In un **metodo a eco** l'impulso parte dalla sorgente, colpisce un bersaglio e torna indietro fino a un **rivelatore**, cioè un apparecchio posto accanto alla sorgente che registra l'arrivo della luce. L'impulso percorre $900\,\mathrm m$ all'andata e altri $900\,\mathrm m$ al ritorno. Il suo **cammino**, cioè la lunghezza totale del percorso, è perciò $1800\,\mathrm m$. Il cronometro registrerebbe il doppio del tempo di sola andata, cioè $6{,}0\,\mathrm{\mu s}$. Per ottenere la distanza dal bersaglio si divide per due l'intero cammino misurato, cioè $\dfrac{1800\,\mathrm m}{2}=900\,\mathrm m$.

Il grafico riporta la posizione $x$ dell'impulso, cioè la sua distanza dalla sorgente, in funzione del tempo $t$. La posizione cresce fino al bersaglio e torna a zero dopo $6\,\mathrm{\mu s}$. Lo **spostamento** è la differenza fra la posizione finale e quella iniziale, quindi alla fine vale zero, mentre il cammino vale $1800\,\mathrm m$.

::grafico{linee="0,0 3,900 6,0" punti="3,900,pieno" xmin=0 xmax=6.7 ymin=0 ymax=1050 nomi="t (μs),x (m)" titolo="La posizione torna a zero dopo 6 μs. Il cammino totale è 1800 m."}
:::

:::osservazione{titolo="Separare il tempo di volo dal ritardo del rivelatore"}
Un rivelatore presso la sorgente registra l'eco dopo $8{,}4\,\mathrm{\mu s}$. Il suo circuito impiega $0{,}4\,\mathrm{\mu s}$ a segnalare l'arrivo, cioè aggiunge un **ritardo** di $0{,}4\,\mathrm{\mu s}$ al tempo che intercorre fra emissione e ritorno. Il tempo di volo della luce si ottiene sottraendo il ritardo.
$$
t_{\mathrm{volo}}=8{,}4\,\mathrm{\mu s}-0{,}4\,\mathrm{\mu s}=8{,}0\,\mathrm{\mu s}.
$$
Con la stessa velocità del caso precedente, il cammino nel vuoto misura
$$
s=c\,t_{\mathrm{volo}}=3{,}0\cdot10^8\,\mathrm{m/s}\cdot8{,}0\cdot10^{-6}\,\mathrm s=2400\,\mathrm m.
$$
Il cammino comprende andata e ritorno, quindi un bersaglio fermo sulla linea di andata dista $\dfrac{2400\,\mathrm m}{2}=1200\,\mathrm m$. La divisione per due viene dopo la sottrazione del ritardo.

Se due echi sono registrati con lo stesso ritardo fisso, il ritardo compare in entrambe le letture, quindi si annulla nella loro differenza. Per esempio due letture distanziate di $2{,}0\,\mathrm{\mu s}$ corrispondono a una differenza fra i cammini completi di
$$
\Delta s=3{,}0\cdot10^8\,\mathrm{m/s}\cdot2{,}0\cdot10^{-6}\,\mathrm s=600\,\mathrm m.
$$
La lettera greca $\Delta$ (delta maiuscola) indica una differenza. Ogni cammino è il doppio della distanza del suo bersaglio, perciò i bersagli differiscono in distanza di $300\,\mathrm m$.

Nel grafico della posizione, la **pendenza** è la variazione della posizione divisa per il tempo impiegato. All'andata la posizione cresce e la pendenza è positiva. Al ritorno verso la sorgente la posizione diminuisce e la pendenza cambia segno, mentre la velocità della luce conserva il suo modulo, cioè il suo valore senza segno.

Se si rappresenta il tempo di sola andata in funzione della distanza, ogni metro di percorso richiede un tempo $\dfrac{1\,\mathrm m}{c}$. La pendenza è quindi $\dfrac{1}{c}$, il **reciproco** di $c$, cioè il numero $1$ diviso per $c$. I due grafici rispondono a domande diverse. Dal grafico della posizione in funzione del tempo si legge la velocità lungo l'asse. Dal grafico del tempo in funzione del cammino si legge quanto tempo serve per ogni metro aggiunto al percorso.
:::

## Ombre e camera oscura

:::teorema{#ombre titolo="Triangoli simili lungo i raggi"}
Una **sorgente puntiforme** è una sorgente di luce così piccola, rispetto alle distanze in gioco, da potersi considerare un punto. L'**ombra** è la zona dove la luce della sorgente non arriva perché un ostacolo la blocca. Con una sorgente puntiforme, i bordi geometrici dell’ombra si ricavano tracciando i raggi che toccano il bordo dell’ostacolo. Una **sorgente estesa**, come il Sole, ha dimensioni non trascurabili. Con essa compare una zona di **penombra**, in cui arriva luce soltanto da una parte della sorgente, e il bordo dell'ombra è meno netto.

La **camera oscura**, detta anche camera stenopeica, è una scatola chiusa con un piccolo foro su una faccia e uno schermo sulla faccia opposta. Nel modello con foro puntiforme, da ciascun punto dell'oggetto arriva allo schermo un solo raggio, quello diretto al foro, che prosegue in linea retta. L'**asse** è la retta che passa per il foro ed è perpendicolare allo schermo. Un raggio da un punto sopra l'asse arriva sotto l'asse, quindi lo schermo raccoglie un’immagine **invertita**, cioè capovolta.

$$
\frac{|h_i|}{h_o}=\frac{q}{p}.
$$

Qui $p$ è la distanza dell’oggetto dal foro, $q$ la distanza dello schermo dal foro e $h_o$ l’altezza dell’oggetto. L'altezza dell'immagine $h_i$ ha un segno, positivo sopra l'asse e negativo sotto. Il simbolo $|h_i|$ indica il **modulo** dell’altezza dell’immagine, cioè il suo valore senza segno.

La formula si ricava da due triangoli. Il primo ha i vertici nel foro, nel piede e nella cima dell'oggetto, il secondo nel foro, nel piede e nella cima dell'immagine. I due triangoli sono rettangoli e hanno uguali gli angoli al foro, perché sono angoli opposti al vertice. Due triangoli con gli stessi angoli si dicono **simili** e hanno i lati corrispondenti in proporzione. Quindi i cateti verticali $|h_i|$ e $h_o$ stanno fra loro come i cateti orizzontali $q$ e $p$. La cima dell’oggetto sopra l’asse arriva sotto l’asse sullo schermo, in $I$.

Nella figura l'oggetto, con la cima in $O$, è alto $48\,\mathrm{cm}$ e dista $120\,\mathrm{cm}$ dal foro $F$, e lo schermo dista $30\,\mathrm{cm}$ dal foro.
$$
|h_i|=h_o\cdot\frac{q}{p}=48\,\mathrm{cm}\cdot\frac{30}{120}=12\,\mathrm{cm}.
$$

::grafico{assi=0 linee="-120,0 30,0;-120,0 -120,48;30,-24 30,24" vettori="-120,48,30,-12" punti="-120,48,pieno,O;0,0,pieno,F;30,-12,pieno,I" xmin=-128.4 xmax=36 ymin=-24 ymax=52.8 titolo="Il foro F separa due triangoli simili. Per 48 cm di altezza il modulo dell’immagine è 12 cm."}
:::

:::esempio{titolo="Confrontare due schermi"}
Un oggetto alto $40\,\mathrm{cm}$ dista $160\,\mathrm{cm}$ dal foro. Con $q=20\,\mathrm{cm}$ l’immagine misura in modulo
$$
|h_i|=40\,\mathrm{cm}\cdot\frac{20}{160}=5\,\mathrm{cm}.
$$
Spostando lo schermo a $30\,\mathrm{cm}$, la distanza $q$ si moltiplica per $\dfrac{30}{20}=1{,}5$ e l'altezza si moltiplica per lo stesso numero, quindi diventa $5\,\mathrm{cm}\cdot1{,}5=7{,}5\,\mathrm{cm}$. La forma geometrica dell'immagine si ricava dai raggi. La **nitidezza**, cioè quanto sono netti i contorni, dipende anche dalla larghezza del foro e dai limiti del modello.
:::

:::esempio{titolo="L'ombra di un disco"}
Una sorgente puntiforme $S$ illumina un disco **opaco**, cioè che non lascia passare la luce, di diametro $4\,\mathrm{cm}$ posto a distanza $4\,\mathrm{cm}$. Uno schermo parallelo al disco dista $10\,\mathrm{cm}$ da $S$. Nel taglio lungo l'asse del disco, cioè lungo la retta per $S$ e per il centro del disco, i raggi di confine passano per i due bordi del disco, a quote, cioè altezze, $+2\,\mathrm{cm}$ e $-2\,\mathrm{cm}$ rispetto all'asse. I raggi proseguirebbero in linea retta e delimitano sullo schermo la regione che l'ostacolo sottrae all'illuminazione.

Il fattore di scala è il rapporto fra la distanza sorgente-schermo e la distanza sorgente-disco, $\dfrac{10}{4}=2{,}5$. Il diametro dell'ombra è quindi
$$
4\,\mathrm{cm}\cdot\frac{10}{4}=10\,\mathrm{cm}.
$$
Le distanze del rapporto partono entrambe da $S$. La distanza di $6\,\mathrm{cm}$ fra il disco e lo schermo rappresenta soltanto l'ultimo tratto dei raggi.

::grafico{assi=0 uguale=1 linee="0,0 10,5;0,0 10,-5;4,-2 4,2;10,-5.5 10,5.5" segmenti="0,0,10,0" punti="0,0,pieno;4,2,pieno;4,-2,pieno;10,5,pieno;10,-5,pieno" etichette="-0.75,0.65,S;3.45,2.45,disco;8.35,5.55,schermo" xmin=-1.3 xmax=11.7 ymin=-6 ymax=6.3 titolo="I raggi di confine passano per i bordi del disco. L'ombra è il tratto dello schermo compreso fra i due bordi."}
:::

:::osservazione{titolo="Penombra e apertura finita"}
Per stabilire se un punto dello schermo è illuminato si tracciano le rette che lo congiungono ai vari punti della sorgente. Se ogni retta attraversa l'ostacolo, nessuna parte della sorgente illumina il punto, che è in ombra piena. Se soltanto alcune rette attraversano l'ostacolo, il punto riceve luce da una parte della sorgente ed è in penombra. Il passaggio dall'ombra alla zona illuminata è più largo quando la sorgente, vista dall'ostacolo, appare più grande, cioè occupa un angolo maggiore.

Nella camera oscura, un foro più largo lascia passare più raggi dallo stesso punto dell'oggetto. Poiché attraversano punti diversi dell'apertura, raggiungono posizioni leggermente diverse sullo schermo. Si forma così una piccola macchia al posto del punto ideale, e l'immagine è meno nitida. Con un foro molto stretto diventa invece apprezzabile la diffrazione, che allarga anch'essa la macchia. Il modello geometrico descrive soltanto il primo effetto.
:::

## Legge della riflessione

:::teorema{#riflessione titolo="Angoli rispetto alla normale"}
La **riflessione** è il fenomeno per cui la luce che colpisce una superficie torna indietro nel mezzo da cui proveniva. Il **punto d'incidenza** è il punto colpito dal raggio. La **normale** è la retta perpendicolare alla superficie nel punto d’incidenza, cioè che forma con essa un angolo retto. Il raggio che arriva è il **raggio incidente**, quello che riparte il **raggio riflesso**.

- Il raggio incidente, la normale e il raggio riflesso sono **complanari**, cioè stanno nello stesso piano.
- L’**angolo d’incidenza** $\theta_i$ è l'angolo fra il ramo incidente e la normale diretta nel mezzo da cui proviene il raggio. La lettera greca $\theta$ si legge «theta».
- L’**angolo di riflessione** $\theta_r$ è misurato dalla stessa normale, dall’altro lato.

La legge della riflessione afferma che i due angoli sono uguali.

$$
\theta_r=\theta_i.
$$

Se si fornisce l’angolo $\varphi$ (lettera greca «fi») misurato rispetto alla superficie, prima si calcola l'angolo con la normale. La normale e la superficie formano un angolo retto, quindi i due angoli sono **complementari**, cioè hanno somma $90^\circ$. Con $\varphi=35^\circ$ si ottiene
$$
\theta_i=90^\circ-\varphi=90^\circ-35^\circ=55^\circ,
$$
quindi anche l’angolo riflesso rispetto alla normale è $55^\circ$. L’angolo fra i due rami, misurato nel mezzo sopra lo specchio, vale $55^\circ+55^\circ=110^\circ$.

::grafico{assi=0 uguale=1 linee="-3.6,0 3.6,0;0.671705,0.470333 0.601103,0.557742 0.519214,0.634678 0.427577,0.699699 0.327911,0.751581 0.222089,0.789352 0.112097,0.812302 0.000000,0.820000;0.000000,0.820000 -0.112097,0.812302 -0.222089,0.789352 -0.327911,0.751581 -0.427577,0.699699 -0.519214,0.634678 -0.601103,0.557742 -0.671705,0.470333" segmenti="0,-0.4,0,3.5" vettori="-2.457456,1.720729,0,0;0,0,2.457456,1.720729" xmin=-4 xmax=4 ymin=-0.6 ymax=3.8 etichette="-2.1,3.4,incidente;2.1,3.4,riflesso;-0.822596,1.095205,55°;0.442596,1.095205,55°" titolo="Entrambi gli angoli con la normale tratteggiata valgono 55°."}
:::

:::osservazione{titolo="Apertura dei rami e deviazione"}
Nel disegno i rami si aprono di $2\theta_i$ se entrambi si fanno partire dal punto d'incidenza. La freccia incidente, però, percorre il suo ramo verso il punto d'incidenza. Per confrontare i versi di propagazione si inverte quindi uno dei rami. La **deviazione** è l'angolo fra la direzione di propagazione prima e quella dopo la riflessione, cioè fra le due frecce traslate con la stessa origine. Invertire un ramo sostituisce l'apertura con il suo **supplementare**, cioè l'angolo che sommato a essa dà $180^\circ$, quindi la deviazione vale $180^\circ-2\theta_i$. Con $\theta_i=55^\circ$ l'apertura è $110^\circ$ e la deviazione è $180^\circ-110^\circ=70^\circ$.

Nell'**incidenza normale** il raggio arriva lungo la normale e $\theta_i=0^\circ$. I rami occupano la stessa retta e la propagazione inverte il verso. In questo caso l'apertura geometrica fra i rami è di zero gradi, mentre la deviazione è di $180^\circ$.
:::

:::esempio{titolo="Ruotare uno specchio mantenendo fisso il raggio"}
Uno specchio riceve un raggio lungo la normale iniziale, quindi all'inizio il raggio riflesso torna indietro sulla stessa retta. Lo specchio ruota di $15^\circ$ nel piano dei raggi intorno al punto d'incidenza, e anche la normale ruota di $15^\circ$. Il ramo incidente rimane fisso, quindi forma ora un angolo di $15^\circ$ con la nuova normale. Per la legge della riflessione anche il ramo riflesso forma $15^\circ$ con la nuova normale. Il ramo riflesso dista perciò $15^\circ+15^\circ=30^\circ$ dalla direzione riflessa iniziale, che coincideva con il ramo incidente.

Con lo stesso raggio in ingresso, una rotazione dello specchio produce una rotazione doppia del raggio riflesso, finché il raggio continua a colpire la faccia riflettente.

::grafico{assi=0 uguale=1 linee="-2.6,0 2.6,0;-2.5,-0.669873 2.5,0.669873" segmenti="0,0,-0.776457,2.897777" vettori="0,4.1,0,3.15;0,0,0,2.75;0,0,-1.65,2.857884" etichette="0.2,3.7,ingresso;0.15,2.3,prima;-2.55,2.8,dopo;-1.02,2.64,n′" xmin=-3.1 xmax=3.2 ymin=-1.1 ymax=4.5 titolo="La nuova normale n′ è tratteggiata. Il raggio in uscita ruota di 30°."}
:::

:::osservazione{#ruggosita titolo="Riflessione speculare e diffusa"}
Una superficie è **liscia** quando le sue irregolarità sono molto più piccole della lunghezza d'onda. Su una zona piccola di una superficie liscia le normali sono quasi parallele. Un fascio parallelo, cioè fatto di raggi con la stessa direzione, incontra quindi lo stesso angolo d'incidenza in ogni punto e resta parallelo dopo la riflessione. Questa è la **riflessione speculare**.

Su una superficie ruvida, come un foglio di carta o un muro, ogni piccolo tratto ha una normale diversa, detta **normale locale**. I raggi riflessi si distribuiscono quindi in molte direzioni, e si parla di **riflessione diffusa**. La legge degli angoli continua a valere per ciascuna riflessione su un piccolo tratto, con la sua normale locale.
:::

## Specchi piani

:::teorema{#piano titolo="Posizione dell’immagine"}
Uno **specchio piano** è una superficie riflettente piatta. Il punto immagine è il **simmetrico** dell’oggetto rispetto al piano dello specchio, cioè il punto che sta dall'altra parte del piano, sulla stessa perpendicolare al piano e alla stessa distanza. Se l’oggetto è a distanza $p$ davanti allo specchio, l’immagine è a distanza $p$ dietro, mantiene l’altezza e l’orientamento verticale. La separazione fra oggetto e immagine è $p+p=2p$.

La simmetria cambia soltanto la distanza dal piano. Se l'oggetto si sposta di $0{,}3\,\mathrm m$ verso l'alto, parallelamente allo specchio, anche l'immagine si sposta di $0{,}3\,\mathrm m$ verso l'alto.

I raggi osservati restano davanti al piano. Prolungati all’indietro, cioè continuati oltre lo specchio, sembrano venire dal punto immagine. Un’immagine ottenuta per prolungamento è detta **virtuale**. Uno schermo dietro lo specchio non riceve il fascio fisico corrispondente al punto immagine, perché la luce non attraversa lo specchio.

Nella figura un raggio parte dall'oggetto $O$, si riflette e arriva all'occhio $E$.

::grafico{assi=0 linee="-1.3,0 1.7,0;0,-0.4 0,0.6" segmenti="-1,0,-1,0.35;0,0.15,-1,0.35" vettori="1,0,1,0.35;1,0.35,0,0.15;0,0.15,1.48,-0.146" punti="-1,0.35,vuoto,I;1,0.35,pieno,O;1.48,-0.146,pieno,E" xmin=-1.43 xmax=1.86 ymin=-0.51 ymax=0.7 titolo="O e I distano entrambi 1 m dal piano. Il tratto tratteggiato prolunga il raggio verso I."}
:::

:::esempio{titolo="Effetto dello spostamento dell’oggetto"}
Un oggetto a $0{,}80\,\mathrm m$ dal piano si avvicina di $0{,}15\,\mathrm m$. La nuova distanza dal piano è $0{,}80\,\mathrm m-0{,}15\,\mathrm m=0{,}65\,\mathrm m$. L’immagine resta alla stessa distanza dal piano dell'oggetto, quindi avanza verso il piano dalla parte opposta di $0{,}15\,\mathrm m$. La distanza oggetto-immagine scende da $2\cdot0{,}80\,\mathrm m=1{,}60\,\mathrm m$ a $2\cdot0{,}65\,\mathrm m=1{,}30\,\mathrm m$. La variazione è $1{,}60\,\mathrm m-1{,}30\,\mathrm m=0{,}30\,\mathrm m$, il doppio dello spostamento dell’oggetto.
:::

:::esempio{titolo="Quanto deve essere alto lo specchio?"}
Una persona alta $1{,}70\,\mathrm m$ sta davanti a uno specchio verticale e ha gli occhi a quota $1{,}60\,\mathrm m$, cioè a $1{,}60\,\mathrm m$ dal pavimento. Occhi, cima della testa e piedi sono alla stessa distanza dal piano. Per capire dove il raggio proveniente dai piedi si rifletta verso gli occhi, si congiunge l'occhio con l'immagine del piede. Il tratto dietro il piano è il prolungamento del raggio riflesso. L'occhio e l'immagine del piede sono alla stessa distanza dal piano su lati opposti, quindi la retta che li congiunge attraversa il piano a metà fra le loro quote.
$$
\frac{0\,\mathrm m+1{,}60\,\mathrm m}{2}=0{,}80\,\mathrm m.
$$
Per la cima della testa, a quota $1{,}70\,\mathrm m$, si ragiona allo stesso modo.
$$
\frac{1{,}70\,\mathrm m+1{,}60\,\mathrm m}{2}=1{,}65\,\mathrm m.
$$

Un tratto riflettente da $0{,}80$ a $1{,}65\,\mathrm m$ basta a mostrare l'intera figura in questa geometria. L'altezza minima è $1{,}65\,\mathrm m-0{,}80\,\mathrm m=0{,}85\,\mathrm m$, cioè metà dell'altezza della persona. Allontanarsi senza cambiare postura conserva le quote dei punti di riflessione, perché il piano rimane a metà fra l'occhio e le immagini. Uno specchio più alto ma montato troppo in alto può comunque lasciare invisibili i piedi.

::grafico{assi=0 uguale=1 linee="-1.5,0 -1.5,1.7;1.5,0 1.5,1.7;0,0.8 0,1.65" segmenti="-1.5,0,0,0.8;-1.5,1.7,0,1.65" vettori="1.5,0,0,0.8;0,0.8,1.5,1.6;1.5,1.7,0,1.65;0,1.65,1.5,1.6" punti="0,0.8,pieno;0,1.65,pieno;1.5,1.6,pieno" etichette="1.59,1.48,E;-0.66,0.72,0,80 m;-0.67,1.78,1,65 m" xmin=-1.9 xmax=2 ymin=-0.2 ymax=2.1 titolo="E è l'occhio. Le due intersezioni sul piano delimitano il tratto minimo riflettente."}
:::

## Specchi sferici

:::definizione{#fuoco titolo="Asse principale e fuoco"}
Uno **specchio sferico** è una parte di una superficie sferica, come una calotta di una palla cava.

- Il **centro di curvatura** $C$ è il centro della sfera.
- Il **raggio di curvatura** è il raggio della sfera. Il valore $R$ è il suo modulo.
- Il **vertice** è il punto centrale dello specchio.
- L'**asse principale** è la retta che attraversa il vertice e il centro di curvatura.

In uno specchio **concavo** la faccia riflettente è quella interna, incavata come l'interno di un cucchiaio. I raggi vicini all’asse, inizialmente paralleli ad esso, dopo la riflessione convergono, cioè si avvicinano fino a incontrarsi, in un punto dell'asse chiamato **fuoco** $F$. Questo fuoco è **reale**, perché la luce ci passa davvero.

In uno specchio **convesso** la faccia riflettente è quella esterna, rigonfia come il dorso di un cucchiaio. Dopo la riflessione i raggi paralleli all'asse divergono, cioè si allontanano fra loro. I loro prolungamenti dietro lo specchio si incontrano in un fuoco **virtuale**.

La **distanza focale** $f$, detta anche focale, è la distanza del fuoco dal vertice. Il simbolo $\simeq$ si legge «circa uguale».

$$
|f|\simeq\frac{R}{2}.
$$

Si usa $f>0$ per il fuoco reale di uno specchio concavo e $f<0$ per il fuoco virtuale di uno specchio convesso. Uno specchio concavo con $R=30\,\mathrm{cm}$ ha quindi $f\simeq15\,\mathrm{cm}$. Il fuoco sta a metà fra il vertice e il centro di curvatura. Il **piano focale** è il piano perpendicolare all'asse che passa per il fuoco, ed è lì che uno schermo raccoglie il punto d'incontro di un fascio parallelo all'asse.

L’approssimazione è **parassiale** perché vale per raggi a piccola apertura intorno all’asse, cioè vicini all'asse e poco inclinati rispetto a esso. Raggi molto lontani dall’asse colpiscono parti dello specchio con un'inclinazione diversa e possono incontrare l'asse in punti diversi dal fuoco.
:::

:::osservazione{titolo="Scegliere due raggi per una costruzione"}
Per trovare l'immagine della cima di un oggetto, si possono usare due raggi con lo stesso punto di partenza. Su uno specchio concavo tre raggi sono facili da costruire.

- Un raggio parallelo all'asse torna passando per il fuoco.
- Un raggio diretto al centro di curvatura torna lungo la stessa retta. La retta passa per il centro della sfera, quindi è la normale locale nel punto colpito, e l'angolo d'incidenza è zero.
- Un raggio diretto al vertice si riflette in modo simmetrico rispetto all'asse, perché nel vertice la normale coincide con l'asse. Si può usare anche quando il centro di curvatura sarebbe fuori dal foglio.

Due raggi bastano nel modello parassiale. La loro intersezione, oppure quella dei prolungamenti, individua la quota dell'immagine. Ogni parte dello specchio riceve raggi da tutti i punti dell'oggetto, quindi coprendo metà dello specchio l'immagine resta intera e riceve soltanto meno luce.
:::

## Equazione degli specchi e ingrandimento

::::teorema{#equazione titolo="Trovare l’immagine"}
Nel modello parassiale si usano distanze con segno, misurate dal vertice.

- $p$ è la distanza dell’oggetto dal vertice. Per un oggetto reale davanti allo specchio, $p>0$.
- $q$ è la distanza con segno dell'immagine. Vale positiva per un’immagine **reale**, che si forma davanti allo specchio dove i raggi si incontrano davvero, e negativa per un’immagine virtuale dietro lo specchio.
- $f$ è la focale, positiva per il concavo e negativa per il convesso.
- L’**ingrandimento trasversale** $M$ è il rapporto con segno fra l’altezza dell’immagine e quella dell’oggetto, $M=\dfrac{h_i}{h_o}$. Se $M<0$ l'immagine è capovolta, se $M>0$ è **diritta**, cioè orientata come l'oggetto. Se il modulo di $M$ è maggiore di $1$ l'immagine è ingrandita, se è minore di $1$ è rimpicciolita.

$$
\frac1f=\frac1p+\frac1q,\qquad q=\frac{fp}{p-f},\qquad M=-\frac qp.
$$

La prima uguaglianza è l'**equazione degli specchi**. La seconda si ottiene dalla prima isolando $\dfrac1q$ e facendo il denominatore comune.
$$
\frac1q=\frac1f-\frac1p=\frac{p-f}{fp},\qquad\text{quindi}\qquad q=\frac{fp}{p-f}.
$$

Con un concavo e $p>f$, il denominatore $p-f$ è positivo e $q>0$, quindi l’immagine è reale. Poiché $p$ e $q$ sono positivi, $M<0$ e l'immagine è capovolta. Quando $p=f$, il denominatore è zero e la formula non dà alcun valore di $q$. I raggi riflessi escono paralleli e manca un’immagine a distanza finita. Se $0<p<f$, il denominatore è negativo, quindi $q<0$ e $M>0$, e l’immagine è virtuale e diritta. Per un convesso con oggetto reale, il numeratore $fp$ è negativo e il denominatore $p-f=p+|f|$ è positivo, quindi $q<0$ e $M>0$. Inoltre $|q|=\dfrac{|f|}{p+|f|}\cdot p$ è minore di $p$, quindi $0<M<1$.

:::dimostrazione
Si mette il vertice nell'origine, con la coordinata $x$ lungo l'asse, positiva davanti allo specchio, e la quota $y$ perpendicolare all'asse. La cima dell'oggetto è nel punto di coordinate $(p;h_o)$.

Un raggio dalla cima dell’oggetto colpisce il vertice. Nel vertice la normale è l'asse, quindi il raggio riflesso è simmetrico rispetto all'asse e la sua retta passa per l'origine con pendenza $-\dfrac{h_o}{p}$. La sua equazione è $y=-\dfrac{h_o}{p}\,x$.

Nella rappresentazione parassiale, un raggio parallelo all’asse raggiunge il piano del vertice a quota $h_o$ e la sua retta riflessa passa per il fuoco $(f;0)$. Questa retta passa per $(0;h_o)$ e per $(f;0)$, quindi ha equazione $y=h_o\left(1-\dfrac{x}{f}\right)$.

La cima dell'immagine è il punto d'incontro delle due rette, che si trova a $x=q$. Uguagliando i valori di $y$ a $x=q$ si ha $-\dfrac{h_o}{p}\,q=h_o\left(1-\dfrac{q}{f}\right)$, e dividendo per $h_o$ si ottiene
$$
-\frac{q}{p}=1-\frac{q}{f}.
$$
Dividendo entrambi i membri per $q$ si ha $-\dfrac1p=\dfrac1q-\dfrac1f$, e aggiungendo $\dfrac1f+\dfrac1p$ a entrambi i membri segue l’equazione dei reciproci $\dfrac1f=\dfrac1p+\dfrac1q$. La quota della cima dell'immagine è $h_i=-\dfrac{h_o}{p}\,q$, quindi $M=\dfrac{h_i}{h_o}=-\dfrac{q}{p}$. Per un’immagine virtuale si uguagliano i prolungamenti delle due rette.
:::
::::

:::esempio{titolo="Un’immagine reale e una virtuale"}
Sia $f=8\,\mathrm{cm}$ e $p=24\,\mathrm{cm}$.
$$
q=\frac{8\cdot24}{24-8}\,\mathrm{cm}=\frac{192}{16}\,\mathrm{cm}=12\,\mathrm{cm},\qquad M=-\frac{12}{24}=-0{,}50.
$$
Il segno di $q$ è positivo, quindi l’immagine è reale. Il segno di $M$ è negativo e il suo modulo è $0{,}50$, quindi l'immagine è capovolta e alta la metà dell’oggetto.

Con $f=-8\,\mathrm{cm}$ a parità di oggetto, si ricavano invece
$$
q=\frac{(-8)\cdot24}{24-(-8)}\,\mathrm{cm}=\frac{-192}{32}\,\mathrm{cm}=-6\,\mathrm{cm},\qquad M=-\frac{-6}{24}=0{,}25.
$$
L’immagine è dietro, diritta e rimpicciolita.

Il grafico mostra il caso concavo.

::grafico{assi=0 linee="-1.846154,0 25.846154,0;0,-6.24 0,6.24" vettori="24,0,24,4.8;24,4.8,0,4.8;24,4.8,0,0;0,4.8,12,-2.4;0,0,12,-2.4;12,0,12,-2.4" punti="8,0,pieno,F;12,-2.4,pieno,I;24,4.8,pieno,O" xmin=-3.692308 xmax=27.692308 ymin=-6.864 ymax=6.864 titolo="Nel concavo, I si forma dall’incontro dei raggi davanti allo specchio. I segmenti verticali rappresentano le altezze."}
:::

:::esempio{titolo="Uno specchio concavo usato da vicino"}
Uno specchio concavo ha $f=10\,\mathrm{cm}$ e l'oggetto è a $p=6\,\mathrm{cm}$. Il denominatore è $p-f=6\,\mathrm{cm}-10\,\mathrm{cm}=-4\,\mathrm{cm}$, quindi l'equazione dà
$$
q=\frac{10\cdot6}{-4}\,\mathrm{cm}=-15\,\mathrm{cm},\qquad M=-\frac{-15}{6}=+2{,}5.
$$
Per un oggetto alto $2\,\mathrm{cm}$, l'immagine appare alta $2{,}5\cdot2\,\mathrm{cm}=5\,\mathrm{cm}$. I raggi riflessi escono divergenti e nel diagramma si incontrano soltanto le loro continuazioni dietro il piano, nel punto $I$. La focale positiva da sola, quindi, non stabilisce se l'immagine sia reale. Conta la posizione dell'oggetto rispetto al fuoco.

::grafico{assi=0 linee="-18,0 18,0;0,-4 0,6;6,0 6,2" vettori="6,2,0,2;6,2,0,0;0,2,16,-1.2;0,0,16,-5.333333" segmenti="0,2,-15,5;0,0,-15,5;-15,0,-15,5" punti="6,2,pieno,O;10,0,pieno,F;-15,5,vuoto,I" xmin=-19 xmax=19 ymin=-6 ymax=7 titolo="Con l'oggetto dentro il fuoco, i prolungamenti tratteggiati si incontrano in I, dietro lo specchio."}
:::

:::osservazione{titolo="Posizione e orientamento nei diversi regimi"}
Nella tabella si assume un oggetto reale con $p>0$. Per il concavo il centro di curvatura dista $2f$ dal vertice, perché $R\simeq2f$.

| Oggetto | Posizione dell'immagine | Altezza e orientamento |
|---|---|---|
| $p>2f$ | Reale tra fuoco e centro | Capovolta e ridotta |
| $p=2f$ | Reale al centro | Capovolta e di pari altezza |
| $f<p<2f$ | Reale oltre il centro | Capovolta e ingrandita |
| $p=f$ | Raggi paralleli | Nessuna immagine finita |
| $0<p<f$ | Virtuale dietro lo specchio | Diritta e ingrandita |
| Convesso, ogni $p>0$ | Virtuale tra vertice e fuoco | Diritta e ridotta |

Per il concavo la formula di $q$ si può riscrivere aggiungendo e togliendo $f$ al numeratore.
$$
q=\frac{fp}{p-f}=\frac{f(p-f)+f^2}{p-f}=f+\frac{f^2}{p-f}.
$$
Questa forma chiarisce perché l'immagine si sposti rapidamente quando l'oggetto passa vicino al fuoco. Un piccolo cambiamento di $p$ produce una grande differenza nel secondo termine, perché il denominatore $p-f$ è piccolo. Con un oggetto molto lontano quel termine diventa trascurabile e l'immagine tende al fuoco.

Il grafico usa le variabili senza unità di misura $\dfrac{p}{f}$ e $\dfrac{q}{f}$, così vale per qualsiasi focale positiva nel modello parassiale. Le rette tratteggiate sono **asintoti**, cioè rette a cui la curva si avvicina sempre di più senza toccarle. L'asintoto verticale $\dfrac{p}{f}=1$ corrisponde all'oggetto nel fuoco, quello orizzontale $\dfrac{q}{f}=1$ all'immagine nel fuoco. Il punto $C$ è il caso $p=q=2f$, con oggetto e immagine nel centro di curvatura.

::grafico{f="1+1/(x-1)" asintoti="x=1;y=1" punti="0.5,-1,pieno;2,2,pieno,C;3,1.5,pieno" xmin=0 xmax=4.35 ymin=-4 ymax=5 nomi="p/f,q/f" titolo="Il ramo con p/f minore di 1 dà q negativo. A grande distanza l'immagine si avvicina al fuoco."}
:::

:::osservazione{#controllo-specchi titolo="Controllare i segni con i raggi"}
In uno specchio convesso, la retta riflessa di un raggio inizialmente parallelo diverge come se provenisse dal fuoco dietro lo specchio. Nel diagramma si prolungano indietro le due rette riflesse fino al punto immagine $I$. Nella figura $f=-8\,\mathrm{cm}$ e $p=24\,\mathrm{cm}$, quindi l'equazione dà $q=-6\,\mathrm{cm}$. Il risultato $q<0$ concorda con questa costruzione, perché $I$ si trova dietro lo specchio.

::grafico{assi=0 linee="-10.461538,0 26.461538,0;0,-15.6 0,15.6" vettori="24,0,24,4.8;24,4.8,0,4.8;24,4.8,0,0;0,4.8,12,12;0,0,12,-2.4" segmenti="0,4.8,-6,1.2;0,0,-6,1.2;-6,0,-6,1.2" punti="-8,0,pieno,F;-6,1.2,vuoto,I;24,4.8,pieno,O" xmin=-12.923077 xmax=28.923077 ymin=-17.16 ymax=17.16 titolo="Nel convesso, i prolungamenti tratteggiati si incontrano dietro il piano del vertice."}
:::
