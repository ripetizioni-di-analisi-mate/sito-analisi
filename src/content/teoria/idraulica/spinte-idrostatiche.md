---
titolo: Spinte su superfici piane e curve e galleggiamento
sommario: La risultante delle pressioni su una superficie piana e la posizione del centro di spinta, il diagramma delle pressioni, le paratoie piane e incernierate, le componenti della spinta su una superficie curva, l'equilibrio dei muri di sponda e delle dighe, il principio di Archimede e la stabilità dei galleggianti.
---

## La spinta su una superficie piana

Un liquido in quiete preme su ogni parete che lo contiene. Le pressioni sui vari punti della parete non sono uguali, perché crescono con la profondità, perciò la loro risultante si calcola con un integrale.

:::richiamo{#stevin titolo="Legge di Stevin"}
Sia un liquido pesante, incomprimibile e in quiete, di peso specifico $\gamma$. Allora la pressione relativa in un punto posto alla profondità $h$ sotto il piano dei carichi idrostatici vale
$$
p = \gamma\,h .
$$
Si rimanda all'argomento sulle proprietà dei fluidi e la statica dei fluidi. In tutto quanto segue le pressioni sono relative e il piano dei carichi idrostatici coincide con la superficie libera, perché su di essa agisce la sola pressione atmosferica.
:::

:::definizione{#spinta titolo="Spinta su una superficie"}
Sia $A$ una superficie a contatto con un liquido in quiete e sia $\hat{n}$ il versore normale ad $A$ diretto verso il liquido. La pressione agisce su ogni elemento $dA$ con la forza elementare $-p\,\hat{n}\,dA$, perpendicolare alla superficie e diretta verso la parete. La **spinta** è la risultante di queste forze elementari,
$$
\vec{S} = -\int_A p\,\hat{n}\,dA ,
$$
e il suo punto di applicazione si chiama **centro di spinta**. Per una superficie piana tutte le forze elementari sono parallele, quindi la spinta ha la direzione della normale al piano e il modulo $S = \displaystyle\int_A p\,dA$. Su una superficie curva le normali cambiano da punto a punto, perciò le componenti si calcolano separatamente.
:::

::::teorema{#spinta-superficie-piana titolo="Spinta su una superficie piana"}
Sia $A$ una superficie piana, di forma qualsiasi, a contatto con un liquido pesante in quiete di peso specifico $\gamma$, e sia $h_G$ la profondità del baricentro $G$ di $A$ sotto il piano dei carichi idrostatici. Allora il modulo della spinta vale
$$
S = \gamma\,h_G\,A ,
$$
cioè il prodotto della pressione nel baricentro per l'area; la direzione è quella della normale al piano e il verso è quello che preme sulla parete.

La formula vale qualunque sia l'inclinazione della superficie, perciò una paratoia verticale, una inclinata e una orizzontale si trattano allo stesso modo, perché basta conoscere la profondità del baricentro. Una paratoia rettangolare larga $2\,\mathrm{m}$ e alta $3\,\mathrm{m}$, con il bordo superiore sulla superficie libera, ha $h_G = 1{,}5\,\mathrm{m}$ e $A = 6\,\mathrm{m}^2$, quindi $S = 9{,}81 \cdot 1{,}5 \cdot 6 = 88{,}3\,\mathrm{kN}$.

:::dimostrazione
L'idea è che la pressione è una funzione lineare della profondità, perciò il suo integrale sulla superficie si riduce al momento statico di $A$.

Sia $\alpha$ l'angolo che il piano della superficie forma con l'orizzontale e si prenda sul piano l'asse $y$ diretto secondo la linea di massima pendenza, con l'origine sulla retta in cui il piano incontra il piano dei carichi idrostatici. Un punto del piano che ha ascissa $y$ si trova allora alla profondità $h = y\,\sin\alpha$, quindi per la legge di Stevin la pressione in quel punto vale $p = \gamma\,y\,\sin\alpha$. Sostituendo nella definizione di spinta si ottiene
$$
S = \int_A \gamma\,y\,\sin\alpha\,dA = \gamma\,\sin\alpha\int_A y\,dA .
$$
L'integrale rimasto è il momento statico di $A$ rispetto all'asse per il quale $y = 0$, e per definizione di baricentro vale $y_G\,A$. Perciò $S = \gamma\,\sin\alpha\,y_G\,A$, e poiché $y_G \sin\alpha = h_G$ risulta $S = \gamma\,h_G\,A$.
:::
::::

::schema{nodi="A,1.5,0.5,-;B,3.5,2.5,-" aste="A-B" acqua="0,0 6,0 6,4 0,4" solidi="-0.4,-0.7 6.4,-0.7 6.4,0 -0.4,0" pelo="0,6,4,p.i.c." pressioni="A,B,1.4,0.6,p" punti="2.5,1.5,,baricentro" tratteggi="1.5,0.5 2.75,0.5" quote="2.5 1.5,2.5 4,h_G,1.4" etichette="2.05,0.72,α;2.9,1.12,G" riferimento=0 titolo="Superficie piana inclinata di $\alpha$ sull'orizzontale: la spinta dipende dalla profondità $h_G$ del baricentro e dall'area"}

:::osservazione{#fondo-orizzontale titolo="Superficie orizzontale e paradosso idrostatico"}
Su una superficie orizzontale posta alla profondità $h$ la pressione è la stessa in ogni punto, quindi $S = \gamma\,h\,A$ e il centro di spinta coincide con il baricentro. La spinta sul fondo dipende dalla profondità e dall'area del fondo, e non dal volume del liquido contenuto. Due recipienti con lo stesso fondo e lo stesso livello ricevono la stessa spinta sul fondo anche se uno è svasato e l'altro cilindrico. Questo risultato prende il nome di **paradosso idrostatico**, e si spiega osservando che le pareti inclinate ricevono dal liquido una componente verticale che equilibra la differenza di peso.
:::

## Il centro di spinta

La spinta è nota in modulo e direzione, ma per scrivere l'equilibrio di una paratoia serve anche la retta d'azione, che passa per il centro di spinta.

:::richiamo{#momento-dinerzia titolo="Momento d'inerzia di una figura piana"}
Sia $A$ una figura piana di baricentro $G$ e sia $I_G$ il suo momento d'inerzia rispetto all'asse baricentrico parallelo a un asse $t$ posto a distanza $d$. Allora, per il teorema di trasposizione,
$$
I_t = I_G + d^2 A .
$$
Per il rettangolo di base $b$ e altezza $\ell$, con l'asse baricentrico parallelo alla base, $I_G = \dfrac{b\,\ell^3}{12}$; per il cerchio di diametro $D$, $I_G = \dfrac{\pi D^4}{64}$; per il triangolo di base $b$ e altezza $\ell$, $I_G = \dfrac{b\,\ell^3}{36}$. Si rimanda all'argomento sulla geometria delle masse della Statica.
:::

::::teorema{#centro-di-spinta titolo="Centro di spinta di una superficie piana"}
Sia $A$ una superficie piana a contatto con un liquido pesante in quiete, inclinata di $\alpha$ sull'orizzontale, e si misurino le ascisse $y$ sul piano della superficie a partire dalla retta in cui esso incontra il piano dei carichi idrostatici. Siano $y_G$ l'ascissa del baricentro e $I_G$ il momento d'inerzia di $A$ rispetto all'asse baricentrico perpendicolare a $y$. Allora il centro di spinta ha ascissa
$$
y_C = y_G + \frac{I_G}{y_G\,A} .
$$

Poiché $I_G$, $y_G$ e $A$ sono positivi, risulta $y_C > y_G$: il centro di spinta sta sempre più in basso del baricentro, e il termine $\dfrac{I_G}{y_G A}$ misura di quanto. Per una paratoia circolare di diametro $D$ si ha $\dfrac{I_G}{y_G A} = \dfrac{D^2}{16\,y_G}$, quindi una paratoia di diametro $0{,}80\,\mathrm{m}$ con il centro a $2{,}5\,\mathrm{m}$ di profondità su una parete verticale ha il centro di spinta $16\,\mathrm{mm}$ sotto il centro.

:::dimostrazione
L'idea è di imporre che il momento della spinta rispetto alla retta $y = 0$ sia uguale al momento delle forze elementari di pressione, e di riconoscere nell'integrale che compare il momento d'inerzia della figura.

Con le posizioni del teorema sulla spinta su una superficie piana, la pressione nel punto di ascissa $y$ vale $p = \gamma\,y\,\sin\alpha$. Il momento delle forze elementari rispetto alla retta $y = 0$ è quindi
$$
M = \int_A y\,p\,dA = \gamma\,\sin\alpha \int_A y^2\,dA = \gamma\,\sin\alpha\,I_t ,
$$
dove $I_t$ è il momento d'inerzia di $A$ rispetto a quella retta. Il momento della spinta applicata nel centro di spinta è $S\,y_C = \gamma\,\sin\alpha\,y_G\,A\,y_C$, e i due momenti sono uguali, perciò
$$
y_C = \frac{I_t}{y_G\,A} .
$$
Per il teorema di trasposizione $I_t = I_G + y_G^2 A$, quindi
$$
y_C = \frac{I_G + y_G^2 A}{y_G A} = y_G + \frac{I_G}{y_G A} .
$$
:::
::::

:::attenzione
Il centro di spinta non coincide con il baricentro della superficie, salvo il caso della superficie orizzontale. Per una paratoia rettangolare verticale alta $3\,\mathrm{m}$ con il bordo superiore sulla superficie libera il baricentro sta a $1{,}50\,\mathrm{m}$ di profondità, mentre il centro di spinta sta a $2{,}00\,\mathrm{m}$. Calcolare il momento rispetto a una cerniera posta sul bordo superiore con il braccio del baricentro porterebbe a un risultato più piccolo di un quarto.
:::

:::osservazione{#momento-rispetto-al-baricentro titolo="Momento delle pressioni rispetto al baricentro"}
Il momento delle forze elementari di pressione rispetto all'asse baricentrico di $A$ perpendicolare a $y$ vale
$$
M_G = S\,(y_C - y_G) = \gamma\,\sin\alpha\,y_G\,A\cdot\frac{I_G}{y_G A} = \gamma\,\sin\alpha\,I_G ,
$$
quindi dipende solo dall'inclinazione e dalla forma della superficie, e non dalla profondità alla quale essa si trova. Una paratoia circolare incernierata lungo un suo diametro orizzontale richiede perciò lo stesso momento di tenuta a qualunque profondità sia collocata; per un diametro $D = 1\,\mathrm{m}$ su parete verticale il momento vale $\gamma\,I_G = 9{,}81 \cdot \dfrac{\pi}{64} = 0{,}482\,\mathrm{kN\,m}$.
:::

:::osservazione{#asse-di-simmetria titolo="Posizione trasversale del centro di spinta"}
La seconda coordinata del centro di spinta si ricava allo stesso modo, e vale $x_C = x_G + \dfrac{I_{xy}}{y_G A}$, dove $I_{xy}$ è il momento centrifugo rispetto agli assi baricentrici. Quando la superficie ammette un asse di simmetria parallelo a $y$ il momento centrifugo è nullo, perciò il centro di spinta sta su quell'asse. Rettangoli con i lati orizzontali e verticali, cerchi ed ellissi con gli assi orizzontale e verticale rientrano in questo caso, e per essi basta calcolare $y_C$.
:::

## Il diagramma delle pressioni

Per le superfici di larghezza costante la spinta si legge direttamente su un disegno, senza passare dal momento d'inerzia.

:::definizione{#diagramma-delle-pressioni titolo="Diagramma delle pressioni"}
Si chiama **diagramma delle pressioni** il grafico che riporta su ogni punto della traccia della superficie il valore $p = \gamma h$, misurato perpendicolarmente alla superficie stessa. Per la legge di Stevin il diagramma è lineare, quindi è un triangolo quando la superficie arriva fino alla superficie libera e un trapezio quando comincia più in basso. Per una superficie di larghezza costante $b$ la spinta vale
$$
S = b \cdot (\text{area del diagramma}) ,
$$
e la sua retta d'azione passa per il baricentro del diagramma. Il calcolo del centro di spinta si riduce così alla ricerca di un baricentro, e per il trapezio conviene scomporre il diagramma in un rettangolo e in un triangolo.
:::

:::esempio{titolo="Paratoia verticale che non arriva alla superficie libera"}
Una paratoia rettangolare larga $b = 1{,}50\,\mathrm{m}$ chiude un'apertura compresa fra le profondità $1{,}20\,\mathrm{m}$ e $3{,}20\,\mathrm{m}$.

::schema{nodi="A,0,0;B,0,2" aste="A-B" acqua="0,0 5,0 5,3.2 0,3.2" solidi="-0.5,-0.6 5.4,-0.6 5.4,0 -0.5,0;-0.5,0 0,0 0,3.6 -0.5,3.6" pelo="0,5,3.2,p.i.c." pressioni="B,A,0.6,1.6,γ·h" quote="0 0,0 2,2.00 m,-1.3" riferimento=0 titolo="Diagramma trapezio delle pressioni su una paratoia alta $2\,\mathrm{m}$"}

Le pressioni agli estremi valgono $p_1 = 9{,}81 \cdot 1{,}20 = 11{,}77\,\mathrm{kPa}$ e $p_2 = 9{,}81 \cdot 3{,}20 = 31{,}39\,\mathrm{kPa}$, quindi l'area del trapezio è $\dfrac{11{,}77 + 31{,}39}{2}\cdot 2{,}00 = 43{,}16\,\mathrm{kN/m}$ e la spinta vale $S = 1{,}50 \cdot 43{,}16 = 64{,}7\,\mathrm{kN}$. La stessa spinta si ottiene con la formula generale, dato che $h_G = 2{,}20\,\mathrm{m}$ e $A = 3{,}00\,\mathrm{m}^2$ danno $S = 9{,}81 \cdot 2{,}20 \cdot 3{,}00 = 64{,}7\,\mathrm{kN}$. Il centro di spinta si trova a $y_C = 2{,}20 + \dfrac{1{,}00}{2{,}20 \cdot 3{,}00} = 2{,}35\,\mathrm{m}$ di profondità, cioè a $0{,}849\,\mathrm{m}$ sopra il bordo inferiore.
:::

:::osservazione{#paratoia-rettangolare titolo="Paratoia rettangolare con il bordo sulla superficie libera"}
Quando il bordo superiore di una paratoia rettangolare larga $b$ e alta $h$ sta sulla superficie libera, il diagramma è un triangolo di base $\gamma h$ e altezza $h$, quindi
$$
S = \gamma\,\frac{b\,h^2}{2} ,
$$
e il centro di spinta sta nel baricentro del triangolo, cioè a $\dfrac{2h}{3}$ di profondità e a $\dfrac{h}{3}$ dal bordo inferiore. Questo caso ricorre in quasi tutti gli schemi di paratoia di un canale, perciò conviene tenerlo a memoria insieme alla posizione del centro di spinta.

::schema{nodi="A,0,0;B,0,3" aste="A-B" acqua="0,0 5,0 5,3 0,3" solidi="-0.5,-0.6 5.4,-0.6 5.4,0 -0.5,0" pelo="0,5,3,p.i.c." pressioni="B,A,0,1.6,γ·h" punti="0,1,C,pieno" forze="0 1,-1.5,0,S" quote="0 0,0 3,h,-1.6" riferimento=0 titolo="Diagramma triangolare: la spinta vale $\gamma\,\dfrac{b\,h^2}{2}$ e passa per il punto $C$ a $\dfrac{h}{3}$ dal fondo"}
:::

## Paratoie piane

Le paratoie si calcolano scrivendo l'equilibrio alla rotazione attorno alla cerniera, perciò servono sia il modulo della spinta sia la posizione del centro di spinta.

:::osservazione{#paratoia-incernierata titolo="Momento di una paratoia incernierata"}
Una paratoia incernierata lungo un bordo è tenuta chiusa da una forza o da un momento applicati dall'esterno. L'equilibrio alla rotazione attorno all'asse della cerniera dà
$$
M = S\,d ,
$$
dove $d$ è la distanza fra la cerniera e il centro di spinta misurata sul piano della paratoia. Se la forza di tenuta $F$ è applicata sul bordo opposto, a distanza $\ell$ dalla cerniera, allora $F = \dfrac{S\,d}{\ell}$. Per una paratoia rettangolare larga $2\,\mathrm{m}$ e alta $3\,\mathrm{m}$ con il bordo superiore sulla superficie libera e la cerniera su quel bordo risulta $S = 88{,}3\,\mathrm{kN}$, $d = 2{,}00\,\mathrm{m}$ e quindi $F = 58{,}9\,\mathrm{kN}$.

::schema{nodi="A,0,0;B,0,3" aste="A-B" cerniere="B" acqua="0,0 5,0 5,3 0,3" solidi="-0.6,-0.6 5.4,-0.6 5.4,0 -0.6,0" pelo="0,5,3,p.i.c." pressioni="B,A,0,1.5,γ·h" punti="0,1,C,pieno" forze="0 1,-1.4,0,S" reazioni="0 0,1.4,0,F" riferimento=0 titolo="Paratoia incernierata nel bordo superiore $B$ e trattenuta dalla forza $F$ nel bordo inferiore"}
:::

:::osservazione{#spinta-netta titolo="Paratoia con liquido su entrambe le facce"}
Quando la paratoia separa due volumi d'acqua a livelli diversi, le due spinte si calcolano separatamente, ciascuna con il proprio piano dei carichi idrostatici, e poi si compongono. La spinta netta è la differenza dei moduli,
$$
S = S_1 - S_2 ,
$$
diretta dal lato di monte verso quello di valle; la sua retta d'azione si ricava dall'equilibrio dei momenti rispetto a un punto scelto, per esempio il fondo, con la relazione $S\,z = S_1 z_1 - S_2 z_2$. La differenza dei diagrammi di pressione è ancora un diagramma lineare a tratti, perciò il risultato si può controllare calcolandone l'area.

::schema{nodi="A,0,0;B,0,2.5;D,0,1.5,-" aste="A-B" acqua="-2.6,0 0,0 0,4 -2.6,4;0,0 2.6,0 2.6,1.5 0,1.5" solidi="-3,-0.7 3,-0.7 3,0 -3,0" pelo="-2.6,-1.2,4,monte;1.2,2.6,1.5,valle" pressioni="A,B,1.5,0.56,γ·h_1;D,A,0,0.56,γ·h_2" quote="0 0,0 2.5,2.50 m,-2.3" riferimento=0 titolo="Paratoia con acqua su entrambe le facce: i due diagrammi premono in versi opposti"}
:::

## Spinte su superfici curve

Su una superficie curva le forze elementari non sono parallele, perciò la spinta si costruisce per componenti, e ciascuna di esse si riconduce a un calcolo già noto.

:::definizione{#volume-di-pressione titolo="Volume di pressione"}
Si chiama **volume di pressione** di una superficie il volume compreso fra la superficie stessa, il piano dei carichi idrostatici e le verticali condotte per il suo contorno. Quando il liquido sta sopra la superficie il volume è occupato da liquido ed è detto reale; quando il liquido sta sotto, il volume è quello che il liquido occuperebbe, ed è detto virtuale. La distinzione serve a stabilire il verso della componente verticale della spinta, che è diretta verso il basso nel primo caso e verso l'alto nel secondo.
:::

::::teorema{#spinta-superficie-curva titolo="Componenti della spinta su una superficie curva"}
Sia $A$ una superficie curva a contatto con un liquido pesante in quiete di peso specifico $\gamma$. Allora la componente orizzontale della spinta secondo una direzione $x$ vale
$$
S_x = \gamma\,h_G\,A_x ,
$$
dove $A_x$ è la proiezione di $A$ sul piano verticale perpendicolare a $x$ e $h_G$ è la profondità del baricentro di questa proiezione; la componente verticale vale
$$
S_z = \gamma\,V_p ,
$$
dove $V_p$ è il volume di pressione, e la sua retta d'azione passa per il baricentro di $V_p$.

Il calcolo di una superficie curva si riduce quindi a una spinta su superficie piana e a un volume, e il modulo della risultante è $S = \sqrt{S_x^2 + S_z^2}$. Per il raccordo a quarto di cerchio di raggio $R$ fra una parete verticale e il fondo, con acqua di profondità $H$, la proiezione verticale è un rettangolo alto $R$ e il volume di pressione per unità di larghezza vale $R(H - R) + \dfrac{\pi R^2}{4}$.

:::dimostrazione
L'idea è di applicare l'equilibrio a un volume di liquido scelto in modo che la superficie curva sia una delle sue facce, perché su tutte le altre facce le spinte sono note.

Per la componente orizzontale si consideri il volume di liquido compreso fra la superficie curva $A$ e la sua proiezione $A_x$, limitato lateralmente da superfici cilindriche con le generatrici parallele a $x$. Questo volume è in quiete, quindi la somma delle forze esterne che agiscono su di esso è nulla. Lungo $x$ agiscono la spinta che la superficie curva esercita sul liquido, di componente $-S_x$, e la spinta sulla faccia piana $A_x$, che per il teorema sulla spinta su una superficie piana vale $\gamma h_G A_x$; le superfici laterali hanno normale perpendicolare a $x$ e il peso è verticale, perciò nessuno dei due contribuisce. L'equilibrio dà quindi $S_x = \gamma h_G A_x$.

Per la componente verticale si consideri il volume di pressione $V_p$, limitato in basso dalla superficie curva, in alto dal piano dei carichi idrostatici e lateralmente dalla superficie cilindrica verticale condotta per il contorno di $A$. Anche questo volume è in quiete. Lungo la verticale agiscono il peso $\gamma V_p$, diretto verso il basso, la spinta sulla faccia superiore, nulla perché su di essa la pressione relativa è nulla, e la reazione della superficie curva, uguale e opposta alla componente verticale della spinta. Le pareti laterali sono verticali e non danno componente verticale. Perciò la superficie curva riceve dal liquido la componente $S_z = \gamma V_p$ diretta verso il basso. Quando il liquido sta dall'altra parte della superficie, lo stesso ragionamento applicato al volume di liquido che la sovrasta idealmente dà una componente di pari modulo diretta verso l'alto.
:::
::::

::schema{nodi="P0,0,1.5,-;P1,0.051,1.112,-;P2,0.201,0.75,-;P3,0.439,0.439,-;P4,0.75,0.201,-;P5,1.112,0.051,-;P6,1.5,0,-" aste="P0-P1;P1-P2;P2-P3;P3-P4;P4-P5;P5-P6" acqua="0,4 0,1.5 0.051,1.112 0.201,0.75 0.439,0.439 0.75,0.201 1.112,0.051 1.5,0 5.5,0 5.5,4" solidi="-0.8,-0.7 5.5,-0.7 5.5,0 1.5,0 1.112,0.051 0.75,0.201 0.439,0.439 0.201,0.75 0.051,1.112 0,1.5 0,4.4 -0.8,4.4" pelo="0,5.5,4,p.i.c." tratteggi="0,4 1.5,4 1.5,0" forze="0.25 0.9,-1.3,0,S_x;0.9 0.25,0,-1.3,S_z" etichette="0.62,2.6,V_p" titolo="Raccordo cilindrico fra parete e fondo: la componente orizzontale si calcola sulla proiezione verticale, quella verticale sul volume di pressione $V_p$"}

:::osservazione{#superficie-cilindrica titolo="Superfici cilindriche e paratoie a settore"}
Se la superficie è un settore di cilindro circolare, ogni forza elementare di pressione è perpendicolare alla superficie, quindi la sua retta d'azione passa per l'asse del cilindro. Tutte le forze elementari sono allora concorrenti nell'asse, perciò anche la risultante passa per l'asse e il suo momento rispetto a esso è nullo. Su questa proprietà si fondano le **paratoie a settore**, che ruotano attorno a un perno posto sull'asse del cilindro. In esse il momento della spinta rispetto al perno è nullo a qualunque livello dell'acqua, perciò la manovra richiede solo di vincere il peso e gli attriti.

::schema{nodi="Q0,0,3,-;Q1,0.102,2.224,-;Q2,0.402,1.5,-;Q3,0.879,0.879,-;Q4,1.5,0.402,-;Q5,2.224,0.102,-;Q6,3,0,-" aste="Q0-Q1;Q1-Q2;Q2-Q3;Q3-Q4;Q4-Q5;Q5-Q6" acqua="-3,0 3,0 2.224,0.102 1.5,0.402 0.879,0.879 0.402,1.5 0.102,2.224 0,3 -3,3" solidi="-3.4,-0.7 4.6,-0.7 4.6,0 -3.4,0" pelo="-3,-0.3,3,p.i.c." punti="3,3,O,centro" tratteggi="0.879,0.879 3,3" forze="3 3,1.2,1.885,S" titolo="Paratoia a settore di raggio $R$: la spinta passa per il perno $O$, quindi il suo momento rispetto al perno è nullo"}
:::

## Equilibrio dei muri di sponda e delle dighe

Le spinte calcolate finora entrano nell'equilibrio del manufatto che contiene l'acqua, insieme al suo peso.

:::definizione{#verifica-ribaltamento titolo="Verifica a ribaltamento"}
Si considera il manufatto per unità di lunghezza e si prende come polo lo spigolo di valle della base, attorno al quale il manufatto ruoterebbe. Si chiama **coefficiente di sicurezza al ribaltamento** il rapporto
$$
F_r = \frac{M_{\text{stabilizzante}}}{M_{\text{ribaltante}}} ,
$$
dove al numeratore stanno i momenti del peso proprio e delle componenti verticali delle spinte dirette verso il basso, e al denominatore il momento della componente orizzontale della spinta e quello della sottospinta. Nella pratica si richiede $F_r \geq 1{,}5$. Un muro a paramento verticale alto $4{,}00\,\mathrm{m}$ con base $2{,}20\,\mathrm{m}$ in calcestruzzo da $24\,\mathrm{kN/m^3}$, con acqua alta $3{,}50\,\mathrm{m}$, ha $M_{\text{stabilizzante}} = 232\,\mathrm{kN\,m/m}$ e $M_{\text{ribaltante}} = 70{,}1\,\mathrm{kN\,m/m}$, quindi $F_r = 3{,}31$.
:::

:::definizione{#verifica-scorrimento titolo="Verifica a scorrimento"}
Si chiama **coefficiente di sicurezza allo scorrimento** il rapporto fra la massima forza d'attrito disponibile sul piano di posa e la forza orizzontale che tende a far traslare il manufatto,
$$
F_s = \frac{f\,N}{S_x} ,
$$
dove $f$ è il coefficiente d'attrito fra la base e il terreno e $N$ è la risultante delle forze verticali effettivamente trasmesse al piano di posa, cioè il peso proprio più le componenti verticali delle spinte dirette verso il basso, meno la sottospinta. Nella pratica si richiede $F_s \geq 1{,}3$. Il valore di $N$ cambia molto con la sottospinta, perciò la verifica allo scorrimento è quella che di solito governa il dimensionamento della base.
:::

:::osservazione{#sottospinta titolo="Sottospinta"}
L'acqua che filtra sotto la fondazione esercita sulla base una pressione diretta verso l'alto, detta **sottospinta**. In assenza di drenaggio si assume un diagramma che vale $\gamma h$ sotto il tallone di monte e si annulla sotto lo spigolo di valle, quindi la risultante per unità di lunghezza è $U = \dfrac{\gamma\,h\,B}{2}$, applicata a $\dfrac{B}{3}$ dal tallone, dove $B$ è la larghezza della base. La sottospinta riduce sia $N$ sia il momento stabilizzante, perciò peggiora entrambe le verifiche; i dreni praticati vicino al tallone abbassano il diagramma e riducono $U$.

::schema{nodi="T,0,0;K,1.5,5,-;P,3.5,0" aste="T-K;K-P;T-P" acqua="-3,0 0,0 1.2,4 -3,4" solidi="-3.4,-0.9 6,-0.9 6,0 -3.4,0" pelo="-3,-0.3,4,p.i.c." pressioni="T,P,1.1,0,U,-1" forze="0.4 1.3333,1.5,0,S_x;0.4 1.3333,0,-1.2;1.6667 1.6667,0,-1.8" etichette="-0.05,2.8,S_z;1.33,2.95,W" quote="T,P,B = 3.50 m,1.5" riferimento=0 titolo="Diga a gravità con paramento di monte inclinato: spinta, peso proprio $W$ e sottospinta $U$"}
:::

:::osservazione{#terzo-medio titolo="Posizione della risultante sulla base"}
La risultante di tutte le forze interseca il piano di posa in un punto la cui ascissa $x_R$, misurata dal tallone di monte, si ricava dall'equilibrio alla rotazione attorno al tallone stesso. Detta $e$ la distanza fra questo punto e la mezzeria della base, la pressione trasmessa al terreno resta di compressione su tutta la base quando
$$
e \leq \frac{B}{6} ,
$$
cioè quando la risultante cade entro il terzo medio della base. Il controllo accompagna le due verifiche precedenti, perché una risultante fuori dal terzo medio comporta trazioni al tallone, che il contatto fra fondazione e terreno non è in grado di trasmettere.
:::

## Il principio di Archimede e il galleggiamento

Un corpo completamente circondato dal liquido riceve spinte su tutta la sua superficie, e la loro risultante si calcola con lo stesso metodo del volume di pressione.

::::teorema{#principio-di-archimede titolo="Principio di Archimede"}
Sia un corpo di volume $V$ immerso in un liquido pesante in quiete di peso specifico $\gamma$. Allora la risultante delle pressioni che il liquido esercita sul corpo è verticale, diretta verso l'alto, e vale
$$
S = \gamma\,V ,
$$
cioè è uguale al peso del liquido spostato; la sua retta d'azione passa per il baricentro del volume immerso.

Il principio permette di pesare un corpo in acqua per misurarne il volume, e di calcolare il tiro di un cavo che trattiene un corpo immerso. Un blocco di volume $0{,}015\,\mathrm{m}^3$ e densità $7850\,\mathrm{kg/m^3}$ pesa $1155\,\mathrm{N}$ in aria e riceve una spinta di $147\,\mathrm{N}$, quindi in acqua la bilancia segna $1008\,\mathrm{N}$.

:::dimostrazione
L'idea è di separare la superficie del corpo nella parte superiore e in quella inferiore, e di applicare a ciascuna il teorema sulle componenti della spinta su una superficie curva.

Le componenti orizzontali si elidono, perché la proiezione della superficie del corpo su un piano verticale è la stessa per la parte rivolta verso le $x$ crescenti e per quella rivolta verso le $x$ decrescenti, e le due spinte hanno moduli uguali e versi opposti.

Si consideri il piano orizzontale che separa la parte superiore $A_1$ dalla parte inferiore $A_2$ della superficie del corpo, cioè il contorno apparente visto dall'alto. Il liquido sta sopra $A_1$, quindi la componente verticale su $A_1$ è diretta verso il basso e vale $\gamma V_1$, con $V_1$ volume compreso fra $A_1$ e il piano dei carichi idrostatici. Il liquido sta sotto $A_2$, quindi la componente verticale su $A_2$ è diretta verso l'alto e vale $\gamma V_2$, con $V_2$ volume compreso fra $A_2$ e lo stesso piano. Il volume $V_2$ contiene $V_1$ e la differenza è il volume $V$ del corpo, perciò la risultante è diretta verso l'alto e vale
$$
S = \gamma V_2 - \gamma V_1 = \gamma V .
$$
Per determinarne la retta d'azione si osserva che, sostituendo al corpo lo stesso volume di liquido, le pressioni sul contorno restano immutate; quel liquido è in quiete sotto il proprio peso e la spinta, quindi le due forze hanno la stessa retta d'azione, che passa per il baricentro di $V$.
:::
::::

:::definizione{#carena titolo="Carena e centro di carena"}
Si chiama **carena** la parte del volume di un galleggiante che sta sotto il piano di galleggiamento, e **centro di carena** $C$ il baricentro della carena. Il piano di galleggiamento è il piano della superficie libera, e la sua intersezione con il galleggiante è la figura di galleggiamento. Per il principio di Archimede la spinta è applicata in $C$ ed è diretta verso l'alto, mentre il peso è applicato nel baricentro $G$ del galleggiante, che in generale è un punto diverso, perché dipende anche dalla parte emersa e dalla distribuzione dei carichi a bordo.
:::

::::teorema{#galleggiamento titolo="Condizione di galleggiamento"}
Sia un corpo di peso $P$ che galleggia in quiete in un liquido di peso specifico $\gamma$. Allora il volume di carena $V_c$ soddisfa
$$
\gamma\,V_c = P ,
$$
e il centro di carena $C$ sta sulla stessa verticale del baricentro $G$.

La prima condizione determina l'immersione. Per un pontone a sezione rettangolare lungo $8{,}00\,\mathrm{m}$ e largo $3{,}00\,\mathrm{m}$ di peso $120\,\mathrm{kN}$ si ha $V_c = \dfrac{120}{9{,}81} = 12{,}23\,\mathrm{m}^3$, quindi l'immersione vale $\dfrac{12{,}23}{8 \cdot 3} = 0{,}510\,\mathrm{m}$.

:::dimostrazione
Il galleggiante è in quiete, quindi la risultante e il momento risultante delle forze esterne sono nulli. Le forze esterne sono il peso $P$, verticale e diretto verso il basso, applicato in $G$, e la spinta, verticale e diretta verso l'alto, di modulo $\gamma V_c$ per il principio di Archimede, applicata in $C$. L'annullarsi della risultante dà $\gamma V_c = P$. Le due forze sono allora uguali e opposte, perciò il loro momento risultante è nullo se e solo se hanno la stessa retta d'azione, che essendo verticale contiene sia $G$ sia $C$.
:::
::::

:::osservazione{#immersione titolo="Immersione di un corpo prismatico"}
Per un corpo prismatico di area di base $A_f$ e altezza $a$, con densità $\rho_c$, la condizione di galleggiamento dà $\rho_c\,g\,A_f\,a = \rho\,g\,A_f\,d$, quindi l'immersione vale
$$
d = \frac{\rho_c}{\rho}\,a .
$$
La frazione immersa è perciò uguale al rapporto fra le densità, e il corpo galleggia solo se $\rho_c < \rho$. Un blocco di legno di densità $650\,\mathrm{kg/m^3}$ e altezza $0{,}50\,\mathrm{m}$ si immerge di $0{,}325\,\mathrm{m}$.

::schema{acqua="-3.2,0 3.2,0 3.2,2 -3.2,2" solidi="-3.6,-0.7 3.6,-0.7 3.6,0 -3.6,0" pelo="-3.2,-1.3,2,p.i.c." poligoni="-1.1,1.3 1.1,1.3 1.1,2.7 -1.1,2.7" punti="0,2.05,G,baricentro;0,1.65,C,centro" forze="0 2.05,0,-1.2,P" reazioni="0 1.65,0,1.1,S" quote="-1.1 1.3,-1.1 2,d,-0.8" riferimento=0 titolo="Galleggiante in quiete: il peso $P$ applicato in $G$ e la spinta $S$ applicata nel centro di carena $C$ stanno sulla stessa verticale"}
:::

## Stabilità del galleggiante

L'equilibrio del galleggiante esiste a qualunque altezza si trovi il baricentro, perciò la sua stabilità si studia a parte, esaminando che cosa accade dopo una piccola rotazione.

:::definizione{#metacentro titolo="Metacentro e raggio metacentrico"}
Si consideri un galleggiante in equilibrio e lo si ruoti di un angolo piccolo attorno a un asse contenuto nel piano di galleggiamento. La carena cambia forma e il suo baricentro si sposta in un nuovo punto $C'$. Si chiama **metacentro** $M$ il punto in cui la verticale condotta per $C'$ incontra l'asse di simmetria del galleggiante, e **raggio metacentrico** la distanza
$$
r = \overline{CM} = \frac{I}{V_c} ,
$$
dove $I$ è il momento d'inerzia della figura di galleggiamento rispetto all'asse di rotazione e $V_c$ è il volume di carena. La posizione del metacentro dipende quindi dalla forma della figura di galleggiamento, dato che una figura larga ha un momento d'inerzia grande e porta il metacentro in alto.
:::

:::osservazione{#stabilita-galleggiante titolo="Condizione di stabilità"}
Dopo la rotazione il peso e la spinta non sono più sulla stessa retta d'azione, perciò formano una coppia. Se il metacentro sta sopra il baricentro, cioè se
$$
\overline{CM} > \overline{CG} ,
$$
la coppia è diretta in verso opposto alla rotazione impressa e riporta il galleggiante nella posizione iniziale, quindi l'equilibrio è **stabile**; se il metacentro sta sotto il baricentro la coppia aumenta la rotazione e l'equilibrio è *instabile*. La distanza $\overline{GM}$ si chiama altezza metacentrica e misura quanto l'equilibrio è stabile. La rotazione va esaminata attorno all'asse per il quale $I$ è minimo, cioè l'asse longitudinale di un pontone rettangolare, perché è quello che dà il raggio metacentrico più piccolo.

::schema{acqua="-2.4,0 2.4,0 2.4,2 -2.4,2" solidi="-2.8,-0.7 2.8,-0.7 2.8,0 -2.8,0" pelo="1.5,2.4,2,p.i.c." poligoni="-1.2,1.2 1.2,1.2 1.2,2.9 -1.2,2.9" tratteggi="0,1.2 0,3.7;-1.4,1.7 1.4,2.3" punti="0,1.6,C,centro;0,2.3,G,baricentro;0,3.2,M,pieno" quote="0 1.6,0 3.2,r,-1.6" etichette="1.6,2.35,θ" riferimento=0 titolo="Il metacentro $M$ sta sopra il baricentro $G$, quindi la coppia fra peso e spinta raddrizza il galleggiante"}
:::

:::esempio{titolo="Stabilità di un pontone rettangolare"}
Un pontone lungo $8{,}00\,\mathrm{m}$ e largo $3{,}00\,\mathrm{m}$ si immerge di $0{,}80\,\mathrm{m}$ e ha il baricentro a $0{,}95\,\mathrm{m}$ sopra la chiglia. Il volume di carena vale $V_c = 8 \cdot 3 \cdot 0{,}80 = 19{,}2\,\mathrm{m}^3$ e il momento d'inerzia della figura di galleggiamento rispetto all'asse longitudinale vale $I = \dfrac{8 \cdot 3^3}{12} = 18{,}0\,\mathrm{m}^4$, quindi $r = \dfrac{18{,}0}{19{,}2} = 0{,}938\,\mathrm{m}$. Il centro di carena sta a metà dell'immersione, cioè a $0{,}40\,\mathrm{m}$ sopra la chiglia, perciò il metacentro sta a $0{,}40 + 0{,}938 = 1{,}338\,\mathrm{m}$. Poiché $1{,}338\,\mathrm{m} > 0{,}95\,\mathrm{m}$, il galleggiante è **stabile**, con altezza metacentrica $\overline{GM} = 0{,}388\,\mathrm{m}$.
:::
