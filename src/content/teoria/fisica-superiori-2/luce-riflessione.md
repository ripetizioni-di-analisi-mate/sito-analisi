---
titolo: "Luce, riflessione e specchi"
sommario: "Propagazione rettilinea, ombre, camera oscura, riflessione e formazione delle immagini."
---

## Raggi luminosi

:::definizione{#raggi titolo="Il modello dell’ottica geometrica"}
Un **raggio luminoso** indica la direzione e il verso in cui si propaga la luce. In un mezzo omogeneo, lontano da ostacoli di dimensioni confrontabili con la lunghezza d’onda, il modello rappresenta la propagazione con segmenti rettilinei. Un fascio è un insieme di raggi. Un ostacolo molto piccolo o una fenditura stretta può produrre diffrazione e richiedere un modello ondulatorio.
:::

:::esempio{#tempo-luce titolo="Distanza, tempo e percorso di ritorno"}
Nel vuoto la velocità della luce è approssimativamente $c=3{,}0\cdot10^8\,\mathrm{m/s}$. Se un impulso percorre solo $d=900\,\mathrm m$, il tempo è $\dfrac{900}{3{,}0\cdot10^8}\,\mathrm s=3{,}0\,\mathrm{\mu s}$. In un metodo a eco, invece, l’impulso percorre $900\,\mathrm m$ all’andata e altrettanti al ritorno. Il cronometro registrerebbe $6{,}0\,\mathrm{\mu s}$. Per ottenere la distanza dal bersaglio si divide per due l’intero cammino misurato.

::grafico{linee="0,0 3,900 6,0" punti="3,900,pieno" xmin=0 xmax=6.7 ymin=0 ymax=1050 nomi="t (μs),x (m)" titolo="La posizione torna a zero dopo 6 μs. Il cammino totale è 1800 m."}
:::

## Ombre e camera oscura

:::teorema{#ombre titolo="Triangoli simili lungo i raggi"}
Con una sorgente puntiforme, i bordi geometrici dell’ombra si ricavano tracciando i raggi che toccano l’ostacolo. Con una sorgente estesa, in una zona di **penombra** arriva luce da una parte della sorgente e il bordo è meno netto. Nella camera oscura un piccolo foro lascia passare un raggio per ciascuna direzione e lo schermo raccoglie un’immagine invertita.

$$
\frac{|h_i|}{h_o}=\frac{q}{p}.
$$

Qui $p$ è la distanza dell’oggetto dal foro, $q$ la distanza dello schermo dal foro, $h_o$ l’altezza dell’oggetto e $|h_i|$ il modulo dell’altezza dell’immagine. I due triangoli condividono l’angolo al foro e sono rettangoli, quindi hanno i cateti in proporzione. La cima dell’oggetto sopra l’asse arriva sotto l’asse sullo schermo.

::grafico{assi=0 linee="-120,0 30,0;-120,0 -120,48;30,-24 30,24" vettori="-120,48,30,-12" punti="-120,48,pieno,O;0,0,pieno,F;30,-12,pieno,I" xmin=-128.4 xmax=36 ymin=-24 ymax=52.8 titolo="Il foro F separa due triangoli simili. Per 48 cm di altezza il modulo dell’immagine è 12 cm."}
:::

:::esempio{titolo="Confrontare due schermi"}
Un oggetto alto $40\,\mathrm{cm}$ dista $160\,\mathrm{cm}$ dal foro. Con $q=20\,\mathrm{cm}$ l’immagine misura $5\,\mathrm{cm}$ in modulo. Spostando lo schermo a $30\,\mathrm{cm}$ si moltiplica l’altezza per $30/20=1{,}5$, ottenendo $7{,}5\,\mathrm{cm}$. La forma geometrica si ricava dai raggi. La nitidezza dipende anche dalla larghezza del foro e dai limiti del modello.
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

## Specchi sferici

:::definizione{#fuoco titolo="Asse principale e fuoco"}
Uno specchio sferico è parte di una superficie sferica. L’asse principale attraversa il vertice e il centro di curvatura. In uno specchio **concavo** la faccia riflettente è quella interna e i raggi vicini all’asse, inizialmente paralleli ad esso, convergono verso il fuoco reale. In uno specchio **convesso** i raggi riflessi divergono da un fuoco virtuale individuato dai loro prolungamenti.

$$
|f|\simeq\frac{R}{2}.
$$

Usiamo $f>0$ per il fuoco reale di uno specchio concavo e $f<0$ per il fuoco virtuale di uno specchio convesso. Il valore $R$ è il modulo del raggio di curvatura. L’approssimazione è **parassiale** perché vale per raggi a piccola apertura intorno all’asse. Raggi molto lontani dall’asse possono incontrarlo in punti diversi.
:::

## Equazione degli specchi e ingrandimento

::::teorema{#equazione titolo="Trovare l’immagine"}
Nel modello parassiale, $p$ è la distanza dell’oggetto dal vertice. Per un oggetto reale davanti allo specchio, $p>0$. La distanza con segno $q$ vale positiva per un’immagine reale davanti allo specchio e negativa per un’immagine virtuale dietro lo specchio. L’ingrandimento trasversale $M$ è il rapporto con segno fra l’altezza dell’immagine e quella dell’oggetto.

$$
\frac1f=\frac1p+\frac1q,\qquad q=\frac{fp}{p-f},\qquad M=-\frac qp.
$$

Con un concavo e $p>f$, l’immagine è reale e $M<0$, quindi è capovolta. Quando $p=f$, i raggi riflessi escono paralleli e manca un’immagine a distanza finita. Se $0<p<f$, l’immagine è virtuale e diritta. Per un convesso con oggetto reale, $q<0$ e $0<M<1$.

:::dimostrazione
Un raggio dalla cima dell’oggetto passa vicino al vertice e la sua retta riflessa ha pendenza $-h_o/p$ in una coordinata positiva davanti allo specchio. Un raggio inizialmente parallelo all’asse arriva al vertice della rappresentazione parassiale a quota $h_o$ e torna passando per il fuoco, con retta $y=h_o(1-x/f)$. Uguagliando i valori a $x=q$ si ottiene $-q/p=1-q/f$, da cui segue l’equazione dei reciproci. Per un’immagine virtuale si uguagliano i prolungamenti.
:::
::::

:::esempio{titolo="Un’immagine reale e una virtuale"}
Sia $f=8\,\mathrm{cm}$ e $p=24\,\mathrm{cm}$. Si calcola $q=\dfrac{8\cdot24}{24-8}\,\mathrm{cm}=12\,\mathrm{cm}$ e $M=-0{,}50$. L’immagine reale è capovolta e alta la metà dell’oggetto. Con $f=-8\,\mathrm{cm}$ a parità di oggetto, si ricavano invece $q=-6\,\mathrm{cm}$ e $M=0{,}25$. L’immagine è dietro, diritta e rimpicciolita.

::grafico{assi=0 linee="-1.846154,0 25.846154,0;0,-6.24 0,6.24" vettori="24,0,24,4.8;24,4.8,0,4.8;24,4.8,0,0;0,4.8,12,-2.4;0,0,12,-2.4;12,0,12,-2.4" punti="8,0,pieno,F;12,-2.4,pieno,I;24,4.8,pieno,O" xmin=-3.692308 xmax=27.692308 ymin=-6.864 ymax=6.864 titolo="Nel concavo, I si forma dall’incontro dei raggi davanti allo specchio. I segmenti verticali rappresentano le altezze."}
:::

:::osservazione{#controllo-specchi titolo="Controllare i segni con i raggi"}
In uno specchio convesso, la retta riflessa di un raggio inizialmente parallelo diverge come se provenisse dal fuoco dietro lo specchio. Nel diagramma si prolungano indietro le due rette fino al punto immagine. Il risultato $q<0$ concorda con questa costruzione.

::grafico{assi=0 linee="-10.461538,0 26.461538,0;0,-15.6 0,15.6" vettori="24,0,24,4.8;24,4.8,0,4.8;24,4.8,0,0;0,4.8,12,12;0,0,12,-2.4" segmenti="0,4.8,-6,1.2;0,0,-6,1.2;-6,0,-6,1.2" punti="-8,0,pieno,F;-6,1.2,vuoto,I;24,4.8,pieno,O" xmin=-12.923077 xmax=28.923077 ymin=-17.16 ymax=17.16 titolo="Nel convesso, i prolungamenti tratteggiati si incontrano dietro il piano del vertice."}
:::
