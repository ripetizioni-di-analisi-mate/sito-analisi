---
titolo: "Equilibrio del corpo rigido"
sommario: "Momenti, leve, coppie di forze, reazioni delle travi, baricentri e stabilità."
---

## Momento di una forza

:::definizione{#momento titolo="Forza e distanza perpendicolare"}
Un **corpo rigido** è un modello in cui le distanze fra i punti del corpo restano costanti. Per descriverne l'equilibrio bisogna considerare anche la possibilità di rotazione. La stessa forza apre una porta più efficacemente quando agisce lontano dai cardini. Conta inoltre la direzione della spinta. Una forza diretta lungo la porta verso i cardini ha effetto rotatorio nullo rispetto a essi.

Il **braccio** $b$ è la distanza perpendicolare dal punto di riferimento $O$ alla retta d'azione della forza. Il modulo del momento nel piano vale $\lvert M_O\rvert=Fb$, in newton metri. Se $r$ è la distanza da $O$ al punto di applicazione e $\theta$ è l'angolo fra il segmento $r$ e la forza, allora $b=r\lvert\sin\theta\rvert$. Il modulo si può anche ottenere moltiplicando $r$ per la componente della forza perpendicolare al segmento.
:::

:::esempio{titolo="Una chiave inclinata rispetto alla spinta"}
Su una chiave lunga $0{,}30\,\mathrm m$ si esercita una forza di $40\,\mathrm N$ con angolo $30^\circ$ rispetto alla chiave. La componente utile è $40\sin30^\circ\,\mathrm N=20\,\mathrm N$. Moltiplicandola per $0{,}30\,\mathrm m$ si ottiene $6\,\mathrm{N\,m}$. Il braccio è $0{,}15\,\mathrm m$. Usando la lunghezza intera come braccio si raddoppierebbe il risultato effettivo.
:::

::grafico{assi=0 uguale=1 linee="0,0 3,0;0,0 0.75,-1.3;0.75,-1.3 4.73,1" vettori="3,0,4.73,1,F" punti="0,0,pieno,O;3,0,pieno,A" etichette="1.6,0.35,r;0.2,-0.8,b" xmin=-1 xmax=5.4 ymin=-2 ymax=1.8 titolo="Il braccio b è perpendicolare alla retta d'azione. Il segmento OA dà invece la distanza dal bullone al punto di applicazione"}

## Segni dei momenti

:::osservazione{#segni titolo="Orario e antiorario"}
Guardando il piano da uno stesso lato, si può prendere come positivo il senso antiorario. Per assegnare il segno si immagina quale verso di rotazione tenderebbe a produrre la singola forza attorno al punto scelto. Una spinta verso il basso sul lato destro di un perno tende a ruotare in senso orario e ha momento negativo. Sul lato sinistro la stessa spinta ha momento positivo.

Per una trave sull'asse $x$ con perno nell'origine e forze solo verticali, si può scrivere $M_O=xF_y$, usando componenti con segno. Se una forza di $12\,\mathrm N$ verso il basso agisce a $x=-0{,}4\,\mathrm m$, il prodotto $(-0{,}4)(-12)$ vale $+4{,}8\,\mathrm{N\,m}$. Con un'altra forza verso il basso di $8\,\mathrm N$ a $x=+0{,}3\,\mathrm m$ si aggiunge $-2{,}4\,\mathrm{N\,m}$. Il momento totale è $+2{,}4\,\mathrm{N\,m}$.
:::

## Equilibrio del corpo rigido

::::teorema{#equilibrio-rigido titolo="Forze e momenti devono annullarsi"}
Un corpo rigido fermo, soggetto a forze nel piano, resta in equilibrio se sono nulle la risultante delle forze e la somma dei momenti rispetto a un medesimo punto $O$. Le condizioni sono
$$
\sum F_x=0,\qquad \sum F_y=0,\qquad \sum M_O=0.
$$
La scelta di $O$ è libera. Per semplificare i calcoli si sceglie spesso un punto sulla retta d'azione di una reazione incognita.

:::dimostrazione
Spostando il riferimento da $O$ a un altro punto $O'$ si sottrae a ciascun momento il contributo dato dal vettore $\overrightarrow{OO'}$ e dalla singola forza. I contributi sottratti si sommano al momento della risultante calcolato con lo stesso vettore di spostamento. Quando la risultante è zero, questa variazione è zero. Una somma dei momenti nulla rispetto a $O$ è dunque nulla anche rispetto a $O'$.
:::
::::

:::attenzione
Un sistema di due forze opposte con rette d'azione distinte ha risultante nulla e momento non nullo. Una singola forza la cui linea passa per il perno ha momento nullo rispetto al perno e risultante non nulla. Ciascuno dei due bilanci rileva un aspetto distinto dell'equilibrio.
:::

## Leve

:::teorema{#leve titolo="Uguaglianza dei momenti opposti"}
In una leva ideale con perno senza attrito, due forze che tendono a far ruotare in versi opposti si equilibrano rispetto al fulcro se $F_1b_1=F_2b_2$, a condizione che gli altri momenti siano nulli o già compensati. Il rapporto fra forza resistente e forza motrice è il rapporto inverso dei loro bracci. La reazione del fulcro va calcolata separatamente dall'equilibrio delle forze.
:::

:::esempio{titolo="Equilibrio con un fulcro che sostiene entrambe le forze"}
Una forza di $45\,\mathrm N$ agisce verso il basso a $0{,}2\,\mathrm m$ a sinistra del fulcro. A $0{,}6\,\mathrm m$ a destra si applicano $15\,\mathrm N$ verso il basso. I loro momenti sono $+9$ e $-9\,\mathrm{N\,m}$. Il fulcro fornisce $60\,\mathrm N$ verso l'alto per annullare la somma verticale. La sua retta d'azione passa per il fulcro, quindi la reazione non altera l'equazione appena usata.
:::

::grafico{assi=0 uguale=1 linee="-1.8,0 3.8,0;-0.32,-0.55 0,0 0.32,-0.55 -0.32,-0.55" vettori="-1,0,-1,-1.8,45 N;3,0,3,-0.6,15 N;0,0,0,2.4,60 N" etichette="-0.5,0.45,0.2 m;1.65,0.45,0.6 m" xmin=-2.5 xmax=4.4 ymin=-2.3 ymax=3 titolo="Leva con momenti opposti e reazione del fulcro verso l'alto"}

## Coppie di forze

::::teorema{#coppie titolo="Risultante nulla e momento non nullo"}
Una **coppia di forze** è formata da due forze parallele con modulo comune $F$, versi opposti e rette d'azione distinte. La risultante è nulla, mentre il modulo del momento è $F d$, dove $d$ è la distanza perpendicolare fra le rette.

:::dimostrazione
Per calcolare il momento si sceglie un punto sulla retta d'azione di una delle forze. Quella forza ha braccio zero, mentre l'altra ha braccio $d$. La risultante nulla della coppia rende il risultato indipendente dalla scelta del punto.
:::
::::

::grafico{assi=0 uguale=1 linee="-2,-2 -2,2;2,-2 2,2" vettori="-2,0,-2,1.6,F;2,0,2,-1.6,F" etichette="0,0.2,d" xmin=-3 xmax=3 ymin=-2.4 ymax=2.4 titolo="Forze verticali opposte a distanza d. Entrambe tendono a ruotare il corpo in senso orario rispetto al punto centrale"}

## Travi con due appoggi

:::osservazione{#travi titolo="Ricavare le reazioni"}
Per una trave orizzontale di lunghezza $L$ fra due appoggi, un singolo peso $P$ applicato a distanza $a$ dall'appoggio A dà reazione $R_B=Pa/L$ nell'altro appoggio se il peso della trave è trascurabile. Il momento rispetto ad A elimina $R_A$. Il bilancio verticale fornisce poi $R_A=P-R_B$. Se la trave ha peso proprio, lo si aggiunge come forza verticale applicata al suo baricentro.

Per $L=4\,\mathrm m$, $a=1\,\mathrm m$ e $P=100\,\mathrm N$ si trovano $R_B=25\,\mathrm N$ e $R_A=75\,\mathrm N$. Con un peso della trave omogenea di $40\,\mathrm N$ si aggiungono $20\,\mathrm N$ a ciascuna reazione, perché il peso proprio agisce al centro. Lo stesso risultato si può verificare calcolando i momenti rispetto a B.
:::

## Baricentro

:::definizione{#baricentro titolo="Posizione della risultante dei pesi"}
In un campo uniforme il **baricentro** ha la stessa posizione del centro di massa. Per masse $m_i$ fissate lungo una retta nelle posizioni $x_i$, la sua coordinata è $x_G=\dfrac{\sum m_i x_i}{\sum m_i}$. Si ottiene imponendo che il peso totale applicato in $x_G$ abbia lo stesso momento della somma dei pesi individuali. Il campo $g$ si semplifica.

Il punto medio è il baricentro di un'asta omogenea di sezione costante, per simmetria. Se si aggiunge una massa a destra del baricentro iniziale, la media pesata si sposta verso destra. La nuova coordinata resta compresa fra la vecchia coordinata e quella della massa aggiunta.
:::

## Stabilità e ribaltamento

:::teorema{#stabilita titolo="La verticale del baricentro"}
Con il solo peso e le reazioni di un appoggio piano, l'equilibrio richiede che la verticale del baricentro incontri la base d'appoggio. Se arriva al bordo, il sistema è alla soglia. Quando la verticale cade oltre il bordo, il peso ha momento attorno allo spigolo che tende a ribaltare il corpo.

Una spinta orizzontale $F$ applicata ad altezza $h$ ha momento $Fh$ rispetto allo spigolo verso cui il corpo tende a ruotare. Se il peso è $P$ e la sua retta d'azione dista $b$ dallo spigolo, alla soglia vale $Fh=Pb$. Occorre anche che l'attrito disponibile sia sufficiente a evitare lo scorrimento prima di quella soglia.
:::
