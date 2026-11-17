---
titolo: "Luce, riflessione e specchi"
sommario: "Propagazione rettilinea, ombre, camera oscura, riflessione e formazione delle immagini."
---

## Raggi luminosi

:::definizione{#raggi titolo="Il modello dell’ottica geometrica"}
Un **raggio luminoso** indica la direzione e il verso in cui si propaga la luce. In un mezzo omogeneo, lontano da ostacoli di dimensioni confrontabili con la lunghezza d’onda, il modello rappresenta la propagazione con segmenti rettilinei. Un fascio è un insieme di raggi. Un ostacolo molto piccolo o una fenditura stretta può produrre diffrazione e richiedere un modello ondulatorio.
:::

:::esempio{#tempo-luce titolo="Distanza, tempo e percorso di ritorno"}
Nel vuoto la velocità della luce è approssimativamente $c=3{,}0\cdot10^8\,\mathrm{m/s}$. Se un impulso percorre solo $d=900\,\mathrm m$, il tempo è $\dfrac{900}{3{,}0\cdot10^8}\,\mathrm s=3{,}0\,\mathrm{\mu s}$. In un metodo a eco, l’impulso percorre $900\,\mathrm m$ all’andata e altri $900\,\mathrm m$ al ritorno. Il cronometro registrerebbe $6{,}0\,\mathrm{\mu s}$. Per ottenere la distanza dal bersaglio si divide per due l’intero cammino misurato.

::grafico{linee="0,0 3,900 6,0" punti="3,900,pieno" xmin=0 xmax=6.7 ymin=0 ymax=1050 nomi="t (μs),x (m)" titolo="La posizione torna a zero dopo 6 μs. Il cammino totale è 1800 m."}
:::

:::osservazione{titolo="Separare il tempo di volo dal ritardo del rivelatore"}
Un rivelatore presso la sorgente registra l'eco dopo $8{,}4\,\mathrm{\mu s}$. Il suo circuito aggiunge $0{,}4\,\mathrm{\mu s}$ al tempo che intercorre fra emissione e ritorno. La propagazione richiede quindi $8{,}0\,\mathrm{\mu s}$. Con la stessa velocità del caso precedente, il cammino nel vuoto misura $2400\,\mathrm m$, quindi un bersaglio fermo sulla linea di andata dista $1200\,\mathrm m$. La divisione per due viene dopo la sottrazione del ritardo.

Se si confrontano due echi registrati con lo stesso ritardo fisso, il ritardo del circuito si annulla nella differenza. Per esempio due letture distanziate di $2{,}0\,\mathrm{\mu s}$ corrispondono a una differenza di $600\,\mathrm m$ fra i cammini completi. I bersagli differiscono in distanza di $300\,\mathrm m$. Nel grafico della posizione, al ritorno verso la sorgente cambia il segno della pendenza, mentre la velocità della luce conserva il suo modulo.

Se si rappresenta il tempo di sola andata in funzione della distanza, la pendenza è il reciproco di $c$. I due grafici rispondono a domande diverse. Dal grafico della posizione in funzione del tempo si legge la velocità lungo l'asse. Dal grafico del tempo in funzione del cammino si legge quanto tempo serve per ogni metro aggiunto al percorso.
:::

## Ombre e camera oscura

:::teorema{#ombre titolo="Triangoli simili lungo i raggi"}
Con una sorgente puntiforme, i bordi geometrici dell’ombra si ricavano tracciando i raggi che toccano l’ostacolo. Con una sorgente estesa, in una zona di **penombra** arriva luce da una parte della sorgente e il bordo è meno netto. Nel modello della camera oscura con foro puntiforme, per ciascun punto dell'oggetto passa il raggio diretto al foro. Lo schermo raccoglie un’immagine invertita.

$$
\frac{|h_i|}{h_o}=\frac{q}{p}.
$$

Qui $p$ è la distanza dell’oggetto dal foro, $q$ la distanza dello schermo dal foro, $h_o$ l’altezza dell’oggetto e $|h_i|$ il modulo dell’altezza dell’immagine. I due triangoli condividono l’angolo al foro e sono rettangoli, quindi hanno i cateti in proporzione. La cima dell’oggetto sopra l’asse arriva sotto l’asse sullo schermo.

::grafico{assi=0 linee="-120,0 30,0;-120,0 -120,48;30,-24 30,24" vettori="-120,48,30,-12" punti="-120,48,pieno,O;0,0,pieno,F;30,-12,pieno,I" xmin=-128.4 xmax=36 ymin=-24 ymax=52.8 titolo="Il foro F separa due triangoli simili. Per 48 cm di altezza il modulo dell’immagine è 12 cm."}
:::

:::esempio{titolo="Confrontare due schermi"}
Un oggetto alto $40\,\mathrm{cm}$ dista $160\,\mathrm{cm}$ dal foro. Con $q=20\,\mathrm{cm}$ l’immagine misura $5\,\mathrm{cm}$ in modulo. Spostando lo schermo a $30\,\mathrm{cm}$ si moltiplica l’altezza per $\dfrac{30}{20}=1{,}5$, ottenendo $7{,}5\,\mathrm{cm}$. La forma geometrica si ricava dai raggi. La nitidezza dipende anche dalla larghezza del foro e dai limiti del modello.
:::

:::esempio{titolo="L'ombra di un disco"}
Una sorgente puntiforme $S$ illumina un disco opaco di diametro $4\,\mathrm{cm}$ posto a distanza $4\,\mathrm{cm}$. Uno schermo parallelo al disco dista $10\,\mathrm{cm}$ da $S$. Nella sezione per l'asse del disco, i raggi di confine passano per i due bordi a quote $+2\,\mathrm{cm}$ e $-2\,\mathrm{cm}$. I raggi proseguirebbero in linea retta e delimitano sullo schermo la regione che l'ostacolo sottrae all'illuminazione.

Il fattore di scala è il rapporto fra distanza sorgente-schermo e distanza sorgente-disco. Si ottiene $4\cdot\dfrac{10}{4}\,\mathrm{cm}=10\,\mathrm{cm}$ per il diametro dell'ombra. Le distanze partono entrambe da $S$. La distanza di $6\,\mathrm{cm}$ fra il disco e lo schermo rappresenta soltanto l'ultimo tratto dei raggi.

::grafico{assi=0 uguale=1 linee="0,0 10,5;0,0 10,-5;4,-2 4,2;10,-5.5 10,5.5" segmenti="0,0,10,0" punti="0,0,pieno;4,2,pieno;4,-2,pieno;10,5,pieno;10,-5,pieno" etichette="-0.75,0.65,S;3.45,2.45,disco;8.35,5.55,schermo" xmin=-1.3 xmax=11.7 ymin=-6 ymax=6.3 titolo="I raggi di confine passano per i bordi del disco. L'ombra è il tratto dello schermo compreso fra i due bordi."}
:::

:::osservazione{titolo="Penombra e apertura finita"}
Per stabilire se un punto dello schermo è illuminato, si risale dal punto verso la sorgente lungo le rette possibili. Se ogni retta attraversa l'ostacolo, il punto è in ombra piena. Se soltanto alcune rette lo attraversano, è in penombra. La transizione da una zona all'altra è più larga quando la sorgente occupa un angolo maggiore vista dall'ostacolo.

Nella camera oscura, un foro più largo lascia passare più raggi dallo stesso punto dell'oggetto. Poiché attraversano punti diversi dell'apertura, raggiungono posizioni leggermente diverse sullo schermo. Si forma così una piccola macchia al posto del punto ideale. Ridurre molto il foro può rendere importante la diffrazione. Il modello geometrico da solo descrive il primo effetto.
:::

## Legge della riflessione

:::teorema{#riflessione titolo="Angoli rispetto alla normale"}
La **normale** è la retta perpendicolare alla superficie nel punto d’incidenza. Il raggio incidente, la normale e il raggio riflesso sono complanari. L’angolo d’incidenza $\theta_i$ è misurato fra il ramo incidente e la normale diretta nel mezzo da cui proviene il raggio. L’angolo di riflessione $\theta_r$ è misurato dalla stessa normale, dall’altro lato.

$$
\theta_r=\theta_i.
$$

Se si fornisce l’angolo $\varphi$ rispetto alla superficie, prima si calcola $\theta_i=90^\circ-\varphi$. Con $\varphi=35^\circ$, l’angolo riflesso rispetto alla normale è $55^\circ$. L’angolo fra i due rami, misurato nel mezzo sopra lo specchio, vale $110^\circ$.

::grafico{assi=0 uguale=1 linee="-3.6,0 3.6,0;0.671705,0.470333 0.601103,0.557742 0.519214,0.634678 0.427577,0.699699 0.327911,0.751581 0.222089,0.789352 0.112097,0.812302 0.000000,0.820000;0.000000,0.820000 -0.112097,0.812302 -0.222089,0.789352 -0.327911,0.751581 -0.427577,0.699699 -0.519214,0.634678 -0.601103,0.557742 -0.671705,0.470333" segmenti="0,-0.4,0,3.5" vettori="-2.457456,1.720729,0,0;0,0,2.457456,1.720729" xmin=-4 xmax=4 ymin=-0.6 ymax=3.8 etichette="-2.1,3.4,incidente;2.1,3.4,riflesso;-0.822596,1.095205,55°;0.442596,1.095205,55°" titolo="Entrambi gli angoli con la normale tratteggiata valgono 55°."}
:::

:::osservazione{titolo="Apertura dei rami e deviazione"}
Nel disegno i rami si aprono di $2\theta_i$ se entrambi si fanno partire dal punto d'incidenza. La freccia incidente, però, percorre il suo ramo verso il punto d'incidenza. Per confrontare i versi di propagazione si inverte quindi uno dei rami. L'angolo di deviazione fra le due frecce, traslate con la stessa origine, vale $180^\circ-2\theta_i$. Nell'incidenza normale i rami occupano la stessa retta e la propagazione inverte il verso. Questo caso permette di distinguere l'apertura geometrica di zero gradi dalla deviazione di $180^\circ$.
:::

:::esempio{titolo="Ruotare uno specchio mantenendo fisso il raggio"}
Uno specchio riceve un raggio lungo la normale iniziale. Ruotando lo specchio di $15^\circ$ nel piano dei raggi intorno al punto d'incidenza, anche la normale ruota di $15^\circ$. Il ramo incidente rimane fisso. La nuova normale divide quindi i rami in due angoli che misurano entrambi $15^\circ$. Il ramo riflesso ruota di $30^\circ$ rispetto alla direzione riflessa iniziale. Con lo stesso raggio in ingresso, una variazione dell'orientamento dello specchio produce una variazione doppia dell'orientamento riflesso, finché il raggio continua a colpire la faccia riflettente.

::grafico{assi=0 uguale=1 linee="-2.6,0 2.6,0;-2.5,-0.669873 2.5,0.669873" segmenti="0,0,-0.776457,2.897777" vettori="0,4.1,0,3.15;0,0,0,2.75;0,0,-1.65,2.857884" etichette="0.2,3.7,ingresso;0.15,2.3,prima;-2.55,2.8,dopo;-1.02,2.64,n′" xmin=-3.1 xmax=3.2 ymin=-1.1 ymax=4.5 titolo="La nuova normale n′ è tratteggiata. Il raggio in uscita ruota di 30°."}
:::

:::osservazione{#ruggosita titolo="Riflessione speculare e diffusa"}
Una superficie liscia rispetto alla lunghezza d’onda ha normali quasi parallele su una zona piccola. Un fascio parallelo può allora restare ordinato dopo la riflessione. Su una superficie ruvida le normali locali sono diverse e i raggi riflessi si distribuiscono in più direzioni. La legge degli angoli continua a valere per ciascuna riflessione locale.
:::

## Specchi piani

:::teorema{#piano titolo="Posizione dell’immagine"}
Per uno specchio piano, il punto immagine è il simmetrico dell’oggetto rispetto al piano dello specchio. Se l’oggetto è a distanza $p$ davanti allo specchio, l’immagine è a distanza $p$ dietro, mantiene l’altezza e l’orientamento verticale. La separazione fra oggetto e immagine è $2p$. I raggi osservati restano davanti al piano. Prolungati all’indietro, sembrano venire dal punto immagine.

Un’immagine ottenuta per prolungamento è detta **virtuale**. Uno schermo dietro lo specchio non riceve il fascio fisico corrispondente al punto immagine.

::grafico{assi=0 linee="-1.3,0 1.7,0;0,-0.4 0,0.6" segmenti="-1,0,-1,0.35;0,0.15,-1,0.35" vettori="1,0,1,0.35;1,0.35,0,0.15;0,0.15,1.48,-0.146" punti="-1,0.35,vuoto,I;1,0.35,pieno,O;1.48,-0.146,pieno,E" xmin=-1.43 xmax=1.86 ymin=-0.51 ymax=0.7 titolo="O e I distano entrambi 1 m dal piano. Il tratto tratteggiato prolunga il raggio verso I."}
:::

:::esempio{titolo="Effetto dello spostamento dell’oggetto"}
Un oggetto a $0{,}80\,\mathrm m$ dal piano si avvicina di $0{,}15\,\mathrm m$. La nuova distanza dal piano è $0{,}65\,\mathrm m$ e l’immagine avanza verso il piano dalla parte opposta di $0{,}15\,\mathrm m$. La distanza oggetto-immagine scende da $1{,}60$ a $1{,}30\,\mathrm m$. La variazione è doppia dello spostamento dell’oggetto.
:::

:::esempio{titolo="Quanto deve essere alto lo specchio?"}
Una persona alta $1{,}70\,\mathrm m$ sta davanti a uno specchio verticale e ha gli occhi a quota $1{,}60\,\mathrm m$. Occhi, cima della testa e piedi sono alla stessa distanza dal piano. Per capire dove il raggio proveniente dai piedi si rifletta verso gli occhi, si congiunge l'occhio con l'immagine del piede. Il tratto dietro il piano è il prolungamento del raggio riflesso. Poiché questi due punti sono alla stessa distanza dal piano su lati opposti, la retta attraversa il piano a metà delle loro quote, cioè a $0{,}80\,\mathrm m$. Per la cima della testa l'intersezione si trova a $1{,}65\,\mathrm m$.

Un tratto riflettente da $0{,}80$ a $1{,}65\,\mathrm m$ basta a mostrare l'intera figura in questa geometria. L'altezza minima è $0{,}85\,\mathrm m$. Allontanarsi senza cambiare postura conserva le quote dei punti di riflessione perché il piano rimane a metà delle due distanze orizzontali. Uno specchio più alto ma montato troppo in alto può comunque lasciare invisibili i piedi.

::grafico{assi=0 uguale=1 linee="-1.5,0 -1.5,1.7;1.5,0 1.5,1.7;0,0.8 0,1.65" segmenti="-1.5,0,0,0.8;-1.5,1.7,0,1.65" vettori="1.5,0,0,0.8;0,0.8,1.5,1.6;1.5,1.7,0,1.65;0,1.65,1.5,1.6" punti="0,0.8,pieno;0,1.65,pieno;1.5,1.6,pieno" etichette="1.59,1.48,E;-0.66,0.72,0,80 m;-0.67,1.78,1,65 m" xmin=-1.9 xmax=2 ymin=-0.2 ymax=2.1 titolo="E è l'occhio. Le due intersezioni sul piano delimitano il tratto minimo riflettente."}
:::

## Specchi sferici

:::definizione{#fuoco titolo="Asse principale e fuoco"}
Uno specchio sferico è parte di una superficie sferica. L’asse principale attraversa il vertice e il centro di curvatura. In uno specchio **concavo** la faccia riflettente è quella interna e i raggi vicini all’asse, inizialmente paralleli ad esso, convergono verso il fuoco reale. In uno specchio **convesso** i raggi riflessi divergono da un fuoco virtuale individuato dai loro prolungamenti.

$$
|f|\simeq\frac{R}{2}.
$$

Usiamo $f>0$ per il fuoco reale di uno specchio concavo e $f<0$ per il fuoco virtuale di uno specchio convesso. Il valore $R$ è il modulo del raggio di curvatura. L’approssimazione è **parassiale** perché vale per raggi a piccola apertura intorno all’asse. Raggi molto lontani dall’asse possono incontrarlo in punti diversi.
:::

:::osservazione{titolo="Scegliere due raggi per una costruzione"}
Per trovare l'immagine della cima di un oggetto, si possono usare due raggi con lo stesso punto di partenza. Sul concavo, un raggio parallelo all'asse torna verso il fuoco e un raggio diretto al centro di curvatura torna lungo la stessa retta. Nel secondo caso la retta passa per il centro della sfera e individua la normale locale nel punto colpito. Un altro raggio facile da costruire è quello diretto al vertice, dove la normale coincide con l'asse. Si può usare anche quando il centro di curvatura sarebbe fuori dal foglio. Due raggi bastano nel modello parassiale. La loro intersezione, oppure quella dei prolungamenti, individua la quota dell'immagine.
:::

## Equazione degli specchi e ingrandimento

::::teorema{#equazione titolo="Trovare l’immagine"}
Nel modello parassiale, $p$ è la distanza dell’oggetto dal vertice. Per un oggetto reale davanti allo specchio, $p>0$. La distanza con segno $q$ vale positiva per un’immagine reale davanti allo specchio e negativa per un’immagine virtuale dietro lo specchio. L’ingrandimento trasversale $M$ è il rapporto con segno fra l’altezza dell’immagine e quella dell’oggetto.

$$
\frac1f=\frac1p+\frac1q,\qquad q=\frac{fp}{p-f},\qquad M=-\frac qp.
$$

Con un concavo e $p>f$, l’immagine è reale e $M<0$, quindi è capovolta. Quando $p=f$, i raggi riflessi escono paralleli e manca un’immagine a distanza finita. Se $0<p<f$, l’immagine è virtuale e diritta. Per un convesso con oggetto reale, $q<0$ e $0<M<1$.

:::dimostrazione
Un raggio dalla cima dell’oggetto colpisce il vertice. La sua retta riflessa ha pendenza $-\dfrac{h_o}{p}$ in una coordinata positiva davanti allo specchio. Nella rappresentazione parassiale, un raggio parallelo all’asse raggiunge il piano del vertice a quota $h_o$ e la sua retta riflessa passa per il fuoco, con equazione $y=h_o\left(1-\dfrac{x}{f}\right)$. Uguagliando i valori a $x=q$ si ottiene $-\dfrac{q}{p}=1-\dfrac{q}{f}$, da cui segue l’equazione dei reciproci. Per un’immagine virtuale si uguagliano i prolungamenti.
:::
::::

:::esempio{titolo="Un’immagine reale e una virtuale"}
Sia $f=8\,\mathrm{cm}$ e $p=24\,\mathrm{cm}$. Si calcola $q=\dfrac{8\cdot24}{24-8}\,\mathrm{cm}=12\,\mathrm{cm}$ e $M=-0{,}50$. L’immagine reale è capovolta e alta la metà dell’oggetto. Con $f=-8\,\mathrm{cm}$ a parità di oggetto, si ricavano invece $q=-6\,\mathrm{cm}$ e $M=0{,}25$. L’immagine è dietro, diritta e rimpicciolita.

::grafico{assi=0 linee="-1.846154,0 25.846154,0;0,-6.24 0,6.24" vettori="24,0,24,4.8;24,4.8,0,4.8;24,4.8,0,0;0,4.8,12,-2.4;0,0,12,-2.4;12,0,12,-2.4" punti="8,0,pieno,F;12,-2.4,pieno,I;24,4.8,pieno,O" xmin=-3.692308 xmax=27.692308 ymin=-6.864 ymax=6.864 titolo="Nel concavo, I si forma dall’incontro dei raggi davanti allo specchio. I segmenti verticali rappresentano le altezze."}
:::

:::esempio{titolo="Uno specchio concavo usato da vicino"}
Uno specchio concavo ha $f=10\,\mathrm{cm}$ e l'oggetto è a $p=6\,\mathrm{cm}$. Poiché $p-f=-4\,\mathrm{cm}$, l'equazione dà $q=-15\,\mathrm{cm}$ e $M=+2{,}5$. Per un oggetto alto $2\,\mathrm{cm}$, l'immagine appare alta $5\,\mathrm{cm}$. I raggi riflessi escono divergenti e nel diagramma si incontrano soltanto le loro continuazioni dietro il piano. La focale positiva da sola, quindi, non stabilisce se l'immagine sia reale. Conta la posizione dell'oggetto rispetto al fuoco.

::grafico{assi=0 linee="-18,0 18,0;0,-4 0,6;6,0 6,2" vettori="6,2,0,2;6,2,0,0;0,2,16,-1.2;0,0,16,-5.333333" segmenti="0,2,-15,5;0,0,-15,5;-15,0,-15,5" punti="6,2,pieno,O;10,0,pieno,F;-15,5,vuoto,I" xmin=-19 xmax=19 ymin=-6 ymax=7 titolo="Con l'oggetto dentro il fuoco, i prolungamenti tratteggiati si incontrano in I, dietro lo specchio."}
:::

:::osservazione{titolo="Posizione e orientamento nei diversi regimi"}
Nella tabella si assume un oggetto reale con $p>0$. Per il concavo il centro di curvatura dista $2f$ dal vertice.

| Oggetto | Posizione dell'immagine | Altezza e orientamento |
|---|---|---|
| $p>2f$ | Reale tra fuoco e centro | Capovolta e ridotta |
| $p=2f$ | Reale al centro | Capovolta e di pari altezza |
| $f<p<2f$ | Reale oltre il centro | Capovolta e ingrandita |
| $p=f$ | Raggi paralleli | Nessuna immagine finita |
| $0<p<f$ | Virtuale dietro lo specchio | Diritta e ingrandita |
| Convesso, ogni $p>0$ | Virtuale tra vertice e fuoco | Diritta e ridotta |

Per il concavo, la forma $q=f+\dfrac{f^2}{p-f}$ chiarisce perché l'immagine si sposti rapidamente quando l'oggetto passa vicino al fuoco. Un piccolo cambiamento di $p$ produce una grande differenza nel secondo termine, perché il denominatore è piccolo. Con un oggetto molto lontano quel termine diventa trascurabile e l'immagine tende al fuoco. Il grafico usa le variabili senza unità $\dfrac{p}{f}$ e $\dfrac{q}{f}$, così vale per qualsiasi focale positiva nel modello parassiale.

::grafico{f="1+1/(x-1)" asintoti="x=1;y=1" punti="0.5,-1,pieno;2,2,pieno,C;3,1.5,pieno" xmin=0 xmax=4.35 ymin=-4 ymax=5 nomi="p/f,q/f" titolo="Il ramo con p/f minore di 1 dà q negativo. A grande distanza l'immagine si avvicina al fuoco."}
:::

:::osservazione{#controllo-specchi titolo="Controllare i segni con i raggi"}
In uno specchio convesso, la retta riflessa di un raggio inizialmente parallelo diverge come se provenisse dal fuoco dietro lo specchio. Nel diagramma si prolungano indietro le due rette fino al punto immagine. Il risultato $q<0$ concorda con questa costruzione.

::grafico{assi=0 linee="-10.461538,0 26.461538,0;0,-15.6 0,15.6" vettori="24,0,24,4.8;24,4.8,0,4.8;24,4.8,0,0;0,4.8,12,12;0,0,12,-2.4" segmenti="0,4.8,-6,1.2;0,0,-6,1.2;-6,0,-6,1.2" punti="-8,0,pieno,F;-6,1.2,vuoto,I;24,4.8,pieno,O" xmin=-12.923077 xmax=28.923077 ymin=-17.16 ymax=17.16 titolo="Nel convesso, i prolungamenti tratteggiati si incontrano dietro il piano del vertice."}
:::
