---
titolo: Travature reticolari piane
sommario: Si riconoscono le ipotesi del modello reticolare e si determinano le forze e le deformazioni delle aste con l’equilibrio dei nodi e delle sezioni.
---

## Dalla struttura alle aste incernierate

:::definizione{#aste-due-forze titolo="Aste soggette a due forze"}
Una **travatura reticolare piana ideale** è un insieme di aste rettilinee collegate ai nodi mediante cerniere. Gli assi delle aste incidenti a un nodo passano per lo stesso punto, che è anche il punto di applicazione dei carichi e delle reazioni. Il peso delle aste si trascura oppure, come approssimazione esplicitata nel modello, si rappresenta mediante carichi nodali equivalenti. Una cerniera permette alle aste collegate di ruotare l’una rispetto all’altra e quindi trasmette una forza senza trasmettere una coppia.

Si isola un’asta $AB$ sulla quale agiscono soltanto le forze applicate alle estremità. Il momento della forza in $A$ rispetto ad $A$ è nullo. Per l’equilibrio deve essere nullo anche il momento della forza in $B$, quindi la sua retta d’azione passa per $A$. Le due forze sono perciò lungo la retta $AB$ e hanno modulo uguale e verso opposto per l’equilibrio alla traslazione. L’asta così caricata è un’**asta a due forze**.

Un taglio ideale in una sezione intermedia mette in evidenza uno sforzo normale $N_{AB}$ uguale in ogni sezione, perché tra le due estremità non sono applicate altre forze. Il taglio e il momento flettente sono nulli. Il segno $N_{AB}>0$ indica trazione. In questo caso l’asta tira i nodi verso il proprio interno. Con $N_{AB}<0$ l’asta è compressa e spinge i nodi verso l’esterno.
:::

:::esempio{titolo="La triangolazione di un impalcato"}
In una campata schematizzata con aste orizzontali, verticali e diagonali, si distinguono il **corrente superiore** e quello inferiore. Le aste verticali sono i montanti. Un traverso può trasferire all’incrocio tra corrente e diagonale la parte di carico d’impalcato che gli compete. Nel modello il carico entra così dal nodo e il comportamento dei singoli elementi si studia con lo sforzo assiale. La distanza tra i correnti si chiama altezza della reticolare. Serve nel metodo delle sezioni, perché è il braccio tra due forze orizzontali.

::struttura{nodi="A,0,0;B,4,0;C,8,0;D,0,3;E,4,3;F,8,3" aste="A-B;B-C;A-D;B-E;C-F;D-E;E-F;D-B;E-C" vincoli="A,cerniera;C,carrello" reticolare=1 forze="B,0,-1.1,P_B;C,0,-1.1,P_C" quote="A,B,4 m;B,C,4 m;8.55 3,8.55 0,3 m,-0.55" titolo="Campata a due pannelli con forze applicate ai nodi inferiori"}
:::

:::attenzione{titolo="Una forza applicata tra i nodi"}
Una forza verticale applicata nel mezzo di un corrente orizzontale agisce direttamente sull’asta. Se il corrente è idealizzato come una trave con estremi incernierati, una forza centrale di modulo $P$ produce un momento in mezzeria di modulo $\dfrac{PL}{4}$, dove $L$ è la luce. Il modello a sole forze assiali non descrive quella flessione locale. Si può usare una reticolare per studiare il trasferimento dei carichi globali, a condizione di rappresentare a parte il comportamento delle aste che ricevono carichi trasversali tra i nodi.
:::

:::esempio{titolo="Nodi e correnti di un ponte ferroviario"}
La fotografia del ponte sul fiume Gauley mostra i correnti lungo i bordi della fiancata. I montanti e le diagonali si incontrano nei nodi. Per l’analisi globale si riconducono le azioni dell’impalcato ai nodi e si schematizzano le aste con i loro assi.

<figure class="grafico foto-tecnica"><img src="/immagini/scienza-delle-costruzioni/ponte-reticolare.webp" alt="Fiancata metallica di un ponte con correnti, montanti e diagonali" width="1280" height="960" loading="lazy" decoding="async"><figcaption>Nodi e correnti di un ponte ferroviario. Foto ridimensionata di <a href="https://commons.wikimedia.org/wiki/File:Railroad_Bridge-27527.jpg">Ken Thomas</a>, <a href="https://creativecommons.org/publicdomain/mark/1.0/">pubblico dominio</a>.</figcaption></figure>
:::

## Stabilità, vincoli e conteggio

:::osservazione{#stabilita-reticolare titolo="Numero di aste e disposizione dei nodi"}
Si indichino con $j$ il numero dei nodi, con $m$ quello delle aste e con $r$ quello delle componenti scalari delle reazioni. Ogni nodo fornisce due equazioni, perché le forze concorrenti nel piano hanno due componenti. Ogni asta introduce un solo sforzo assiale incognito, quindi il sistema di equilibrio ha $2j$ righe e $m+r$ colonne.

Una reticolare isostatica richiede $m+r=2j$ e la piena indipendenza delle equazioni. Il primo controllo riguarda i numeri. Il secondo riguarda la geometria effettiva. Se i due conti coincidono, la matrice di equilibrio è quadrata e si può concludere che esiste un’unica soluzione per ogni carico nodale se il suo rango è $2j$. Una matrice singolare ammette invece un vettore di forze interne e reazioni che equilibra carico nullo. Inoltre alcuni carichi nodali non appartengono all’immagine della matrice e quindi non possono essere equilibrati con le sole azioni previste dal modello.
:::

:::esempio{titolo="Pannelli con e senza diagonale"}
Si consideri un rettangolo di aste con cerniera in $A$ e carrello verticale in $B$, nel senso che il carrello reagisce verticalmente su piano orizzontale. Il lato inferiore $AB$ resta fermo. I due montanti possono inclinarsi insieme mantenendo la stessa lunghezza, mentre il lato superiore trasla restando parallelo al lato inferiore. Il rettangolo può quindi diventare un parallelogramma. In questa struttura $j=4$, $m=4$ e $r=3$, perciò $m+r=7<8=2j$.

::struttura{nodi="A,0,0;B,4,0;C,4,3;D,0,3" aste="A-B;B-C;C-D;D-A" vincoli="A,cerniera;B,carrello" reticolare=1 tratteggi="0,0 0.9,2.862 4.9,2.862 4,0" titolo="Il quadrilatero articolato può diventare un parallelogramma"}

Una diagonale con estremi in $A$ e $C$ mantiene fissa anche la distanza $AC$. I triangoli $ABC$ e $ACD$ hanno ora i lati di lunghezza assegnata. Sono entrambi rigidi, purché i tre vertici di ciascuno siano distinti e non allineati. Il pannello così triangolato ha $m=5$ e raggiunge $m+r=8$. Le tre componenti di vincolo impediscono i tre moti rigidi piani, perché la cerniera fissa $A$ e la reazione verticale in $B$ ha braccio $AB$ rispetto ad $A$.

::struttura{nodi="A,0,0;B,4,0;C,4,3;D,0,3" aste="A-B;B-C;C-D;D-A;A-C" vincoli="A,cerniera;B,carrello" reticolare=1 titolo="La diagonale comune divide il pannello in due triangoli"}
:::

:::esempio{titolo="Carrello con direzione inefficace"}
Si mantengono le cinque aste del pannello triangolato e si dispone il carrello in $B$ contro una guida verticale. La reazione in $B$ è quindi orizzontale. La sua retta d’azione coincide con $AB$ e passa per la cerniera $A$. Tutte le reazioni hanno momento nullo rispetto ad $A$. Una forza orizzontale applicata al vertice superiore ha invece braccio pari all’altezza del pannello. Quel carico richiede un momento esterno di verso opposto che le reazioni assegnate non possono fornire. Il conteggio resta esatto, ma la matrice è singolare. In termini cinematici una piccola rotazione intorno ad $A$ sposta $B$ verticalmente, che è proprio la direzione libera della guida.
:::

## Equilibrio e spostamenti ammissibili

:::definizione{#compatibilita-reticolare titolo="Allungamento compatibile con gli spostamenti nodali"}
Siano $\mathbf u_A$ e $\mathbf u_B$ gli spostamenti dei due nodi dell’asta $AB$. Per spostamenti infinitesimi, l’allungamento è la proiezione di $\mathbf u_B-\mathbf u_A$ sul versore $\mathbf e_{AB}$ dell’asta indeformata. Si ha quindi
$$
\delta L_{AB}=(\mathbf u_B-\mathbf u_A)\cdot \mathbf e_{AB}.
$$
Per ricavare la formula si scrive la lunghezza del segmento spostato come norma di $L_{AB}\mathbf e_{AB}+\mathbf u_B-\mathbf u_A$. Il termine lineare nello sviluppo di questa norma è la proiezione indicata. Poiché la formula usa il solo termine lineare, descrive il moto infinitesimo. Per uno spostamento finito si calcola invece la nuova distanza tra i nodi.

Se tutte le proiezioni sono nulle e gli spostamenti soddisfano i vincoli, un vettore di spostamenti non nullo descrive un meccanismo infinitesimo. Un esempio si ottiene con un nodo $B$ intermedio tra due nodi fissi $A$ e $C$ sulla stessa linea orizzontale. Uno spostamento verticale infinitesimo di $B$ ha proiezione nulla su entrambe le aste. Le lunghezze cambiano al secondo ordine nello spostamento. Una barra verticale in $B$ collegata a un nodo fermo, invece, riceverebbe una variazione già al primo ordine e impedirebbe quel meccanismo in un modello di aste inestensibili.
:::

:::osservazione{titolo="Le stesse direzioni nel sistema di equilibrio"}
La colonna di equilibrio associata a $AB$ contiene $\mathbf e_{AB}$ nelle righe di $A$ e $-\mathbf e_{AB}$ nelle righe di $B$. Il prodotto scalare con il vettore di tutti gli spostamenti nodali è perciò $-\delta L_{AB}$. Per una reazione di un carrello la colonna ha una sola coppia di componenti, pari al versore della reazione. Il prodotto scalare con gli spostamenti restituisce allora lo spostamento nella direzione impedita dal vincolo. Se la matrice di equilibrio è indicata con $Q$, la condizione $Q^{\mathsf T}\mathbf u=\mathbf 0$ raccoglie tutte le compatibilità di aste inestensibili e appoggi fissi. La trasposta lega dunque due letture della stessa geometria.

Se il rango di $Q$ è $\rho$, le incognite statiche indipendenti che possono equilibrarsi senza carichi esterni sono $m+r-\rho$. I gradi di labilità infinitesima sono $2j-\rho$. I due numeri possono essere entrambi positivi. Nel pannello triangolato con il carrello contro una guida verticale, una coppia di reazioni orizzontali uguali e opposte può essere equilibrata da una forza assiale nell’asta inferiore, anche senza carichi applicati. La stessa geometria ammette la rotazione infinitesima intorno alla cerniera. Si riconoscono così sia una forza interna ridondante sia un moto libero, pur avendo $m+r=2j$.
:::

## Reazioni e metodo dei nodi

::::teorema{#metodo-dei-nodi titolo="Metodo dei nodi"}
Si consideri una reticolare piana ideale in equilibrio. Per il nodo $A$, sia $\mathbf F_A$ la risultante dei carichi e delle reazioni applicati direttamente in $A$. Per ogni asta $AB$, sia $L_{AB}$ la sua lunghezza e sia $\mathbf e_{AB}$ il versore da $A$ verso $B$. La forza esercitata dall’asta sul nodo $A$ è $N_{AB}\mathbf e_{AB}$. Le componenti si ricavano dalle coordinate dei nodi, quindi
$$
L_{AB}=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2},\qquad
\mathbf e_{AB}=\frac{(x_B-x_A,\ y_B-y_A)}{L_{AB}}.
$$
Al nodo $A$ vale il sistema
$$
\begin{cases}
\displaystyle \sum_B N_{AB} e_{AB,x}+F_{A,x}=0,\\[6pt]
\displaystyle \sum_B N_{AB} e_{AB,y}+F_{A,y}=0.
\end{cases}
$$

:::dimostrazione
Si isola il nodo e si sostituisce ogni asta con la forza esercitata lungo il suo asse. Tutte le rette d’azione passano per il nodo, quindi il loro momento rispetto al nodo è nullo. Restano le due equazioni di traslazione, ottenute proiettando la somma delle forze sugli assi $x$ e $y$. Sul nodo $B$ la stessa asta ha versore opposto perché $\mathbf e_{BA}=-\mathbf e_{AB}$. Lo sforzo $N_{AB}$ è però lo stesso numero sui due nodi, perché positivo o negativo descrive lo stato dell’asta intera.
:::
::::

:::osservazione{titolo="Scelta dell’ordine di calcolo"}
Per ricavare le reazioni esterne si isola prima l’intera travatura. Le forze interne compaiono a coppie uguali, opposte e sulla stessa retta, quindi si elidono anche nella somma dei momenti. Per una cerniera in $A$ e un carrello verticale in $B$, un’equazione dei momenti rispetto ad $A$ contiene solo la reazione del carrello, purché la sua retta d’azione abbia braccio diverso da zero. Le equazioni di traslazione determinano poi le componenti orizzontale e verticale della cerniera.

Dopo il calcolo delle reazioni si cerca un nodo con al massimo due sforzi incogniti. Se gli sforzi sono due, le direzioni delle aste devono essere indipendenti. Se fossero parallele, le due colonne dei versori sarebbero proporzionali e l’equilibrio locale potrebbe dare al più un solo vincolo scalare sui due valori. Si passa quindi a un nodo adiacente, dove lo sforzo appena ricavato entra come dato. Alcune reticolari richiedono l’equilibrio simultaneo di più nodi. Il conteggio locale serve a individuare una sequenza breve, mentre la risoluzione del sistema completo resta applicabile quando quella sequenza non è disponibile.
:::

:::esempio{titolo="Nodo superiore con due diagonali"}
In una reticolare triangolare di luce $6\,\mathrm m$ e altezza $4\,\mathrm m$, il nodo superiore $C$ ha ascissa $3\,\mathrm m$. Si applica in $C$ un carico verticale di $40\,\mathrm{kN}$. Poiché il braccio del carico rispetto ad $A$ è la metà del braccio della reazione in $B$, entrambe le reazioni verticali valgono $20\,\mathrm{kN}$. I versori uscenti da $C$ sono $\left(-\dfrac35,-\dfrac45\right)$ verso $A$ e $\left(\dfrac35,-\dfrac45\right)$ verso $B$.

::struttura{nodi="A,0,0;B,6,0;C,3,4" aste="A-B;A-C;B-C" vincoli="A,cerniera;B,carrello" reticolare=1 forze="C,0,-1.25,40 kN" quote="A,3 0,3 m;3 0,B,3 m;6.5 4,6.5 0,4 m,-0.55" titolo="Dati del triangolo isoscele caricato al vertice"}

La componente orizzontale impone $N_{AC}=N_{BC}$. La componente verticale impone $-\dfrac45(N_{AC}+N_{BC})-40\,\mathrm{kN}=0$. Segue $N_{AC}=N_{BC}=-25\,\mathrm{kN}$. Al nodo $A$, la diagonale compressa esercita una forza con componente orizzontale di $-15\,\mathrm{kN}$. Poiché la reazione orizzontale è nulla, l’equilibrio richiede $N_{AB}=15\,\mathrm{kN}$. Il corrente inferiore tira quindi il nodo $A$ verso destra.

::struttura{nodi="C,0,0,-" reticolare=1 forze="C,0,-1.4,P" etichette="0.16,0.12,C" frecce="0,0,-1.8,-2.4,N_AC;0,0,1.8,-2.4,N_BC" titolo="I versori delle due azioni assiali sono inizialmente assunti uscenti dal nodo"}
:::

## Aste scariche e trasferimento dei carichi

::::teorema{#aste-scariche titolo="Riconoscimento degli sforzi nulli"}
Se un nodo senza carichi né reazioni è collegato a due aste di direzioni indipendenti, entrambe hanno sforzo nullo. Se a un nodo privo di azioni esterne convergono tre aste e due di esse sono allineate, la terza ha sforzo nullo, purché abbia direzione diversa dalle altre due.

:::dimostrazione
Nel primo caso la somma di due vettori di direzioni indipendenti è nulla solo se entrambi i coefficienti sono nulli. Nel secondo caso si proietta lungo una normale alla direzione delle due aste allineate. I contributi delle due aste hanno proiezione nulla. Poiché il versore della terza ha proiezione diversa da zero, il suo coefficiente deve essere nullo. Conoscere lo sforzo nullo riduce il numero di incognite da trattare negli altri nodi.
:::
::::

:::esempio{titolo="Il montante di una capriata"}
La figura mostra due correnti orizzontali $AB$ e $BC$ e il montante $BD$. Al nodo inferiore $B$ privo di carichi esterni, l’equilibrio verticale è $N_{BD}=0$ perché le altre due aste sono orizzontali. Se si appende invece al nodo $B$ una forza di intensità $P$ verso il basso, la stessa equazione diventa $N_{BD}-P=0$. Il montante è in trazione e trasmette il carico verso il nodo $D$. La geometria è identica nei due schemi e il risultato cambia perché è cambiato il vettore dei carichi.

::struttura{nodi="A,0,0;B,4,0;C,8,0;D,4,3" aste="A-B;B-C;A-D;B-D;C-D" vincoli="A,cerniera;C,carrello" reticolare=1 forze="D,0,-1.1,P_D" quote="A,B,4 m;B,C,4 m" titolo="Il montante $BD$ è scarico per questo solo caso di carico"}

L’asta che risulta scarica sotto un dato carico appartiene ancora allo schema geometrico. Nel caso della capriata, se si elimina il montante, le due aste allineate $AB$ e $BC$ consentono uno spostamento verticale infinitesimo del nodo $B$. In uno studio di equilibrio si può porre $N_{BD}=0$ per il caso indicato. In uno studio di stabilità, invece, la presenza del montante conta perché impedisce quel movimento.
:::

## Sezioni di Ritter e scelta del polo

::::teorema{#metodo-delle-sezioni titolo="Metodo delle sezioni di Ritter"}
Si scelga una sezione che separa la reticolare in due parti e taglia alcune aste. Per la parte isolata, ogni asta interrotta esercita una forza assiale lungo la propria retta. Se le rette d’azione di due sforzi incogniti si incontrano nel punto $O$, il momento rispetto a $O$ elimina questi due contributi. Una terza incognita si ricava direttamente quando la sua retta d’azione ha braccio diverso da zero rispetto a $O$. Se le due rette da eliminare sono parallele, si proiettano invece le forze lungo una loro normale.

:::dimostrazione
Si sommano le equazioni di equilibrio dei nodi appartenenti a una delle due parti. Le forze nelle aste interne a quella parte si elidono due a due perché hanno lo stesso modulo, verso opposto e la stessa retta d’azione. Rimangono i carichi e le reazioni esterni della parte e le azioni delle aste che attraversano il taglio. Poiché il momento di una forza è nullo rispetto a ogni punto della sua retta d’azione, il polo $O$ elimina le prime due incognite. La terza entra con un coefficiente pari al braccio orientato. Se invece le due rette sono parallele, la proiezione sulla normale elimina entrambe le forze e permette di ricavare la terza quando ha componente normale non nulla.
:::
::::

:::esempio{titolo="Tre aste tagliate nello stesso pannello"}
La sezione in figura attraversa il corrente inferiore $AB$, la diagonale $DB$ e il corrente superiore $DE$. Le rette d’azione di $AB$ e $DB$ passano per $B$. Il momento rispetto a $B$ consente quindi di trovare direttamente lo sforzo in $DE$, con braccio pari a $3\,\mathrm m$. Poiché i due correnti sono orizzontali, la proiezione verticale fornisce lo sforzo della diagonale. Una volta nota la componente orizzontale della diagonale, l’equilibrio orizzontale permette di calcolare anche lo sforzo del corrente inferiore. Si usa il principio dei nodi solo se occorre proseguire nelle altre aste.

::struttura{nodi="A,0,0;B,4,0;C,8,0;D,0,3;E,4,3;F,8,3" aste="A-B;B-C;A-D;B-E;C-F;D-E;E-F;D-B;E-C" vincoli="A,cerniera;C,carrello" reticolare=1 forze="E,0,-1.0,P_E;F,0,-1.0,P_F" tratteggi="2,-0.8 2,3.9" etichette="2.2,4,s" quote="A,B,4 m;B,C,4 m;8.55 3,8.55 0,3 m,-0.55" titolo="Sezione passante per due correnti e per una diagonale"}

Con $P_E=12\,\mathrm{kN}$ e $P_F=18\,\mathrm{kN}$ si ha $V_A=6\,\mathrm{kN}$. Isolando la parte sinistra si assumono le azioni tagliate rivolte verso destra lungo le rispettive rette. Il momento di $V_A$ rispetto a $B$ è orario e vale $-4V_A$ nelle unità indicate. Il momento della forza orizzontale $N_{DE}$ è $-3N_{DE}$. Dunque $N_{DE}=-8\,\mathrm{kN}$. La componente verticale della diagonale uscente è $-\dfrac35 N_{DB}$, quindi $6-\dfrac35N_{DB}=0$ e $N_{DB}=10\,\mathrm{kN}$. La componente orizzontale della diagonale è $8\,\mathrm{kN}$, che bilancia la forza del corrente superiore. Il corrente inferiore $AB$ risulta scarico.

::struttura{nodi="A,0,0;D,0,3;B,4,0;U,2,0,-;V,2,1.5,-;W,2,3,-" aste="A-D;A-U;D-V;D-W" reazioni="A,0,0.85,V_A" frecce="2,0,3.05,0,N_AB;2,1.5,3.05,0.7125,N_DB;2,3,3.05,3,N_DE" tratteggi="2,-0.65 2,3.75;3.05,0.7125 4,0" punti="4,0,O,centro" titolo="Corpo libero sinistro con le azioni di sezione e il polo $O=B$"}
:::

## Controlli delle forze ricavate

:::osservazione{titolo="Una verifica su un altro corpo libero"}
Un’equazione risolta per ottenere un’incognita torna soddisfatta quando vi si sostituisce il risultato. Per controllare il segno o il versore conviene isolare un altro corpo libero. Nel triangolo del metodo dei nodi si sono usati il nodo $C$ per le diagonali e la proiezione orizzontale al nodo $A$ per il corrente. Il nodo $B$ fornisce un controllo diretto. La diagonale $BC$ ha versore $\left(-\dfrac35,\dfrac45\right)$ da $B$ verso $C$. Si ha quindi
$$
\begin{cases}
-15-\dfrac35(-25)=0,\\[6pt]
20+\dfrac45(-25)=0,
\end{cases}
$$
dove le forze sono espresse in $\mathrm{kN}$. La prima equazione verifica l’equilibrio orizzontale del corrente e della diagonale. La seconda verifica il verso della componente verticale della diagonale rispetto alla reazione del carrello.

Quando si usa una sezione, un controllo analogo consiste nell’isolare il nodo terminale di una delle aste tagliate oppure la metà opposta del taglio. Nel secondo caso le forze assiali conservano il segno calcolato, ma i versori sulle aste cambiano verso. Se si scambia anche il segno dello sforzo, si ottiene la stessa forza vettoriale sulle due metà, che è incompatibile con l’azione e la reazione. La distinzione tra uno scalare con segno e la direzione del vettore evita questo errore.
:::

:::esempio{titolo="Quando il confronto per simmetria è utile"}
Con una cerniera a sinistra e un carrello verticale a destra, un sistema di forze soltanto verticali ha reazione orizzontale nulla. In una reticolare a geometria simmetrica, un carico verticale simmetrico produce reazioni verticali uguali e sforzi uguali nelle aste corrispondenti, se la soluzione è unica. L’uguaglianza si può usare per controllare il risultato, perché la riflessione delle azioni statiche fornisce un’altra soluzione con le stesse reazioni compatibili. Per un carico orizzontale applicato sopra gli appoggi la sua altezza entra invece nell’equilibrio dei momenti. Anche se il nodo caricato è in mezzeria, le reazioni verticali sono allora in generale diverse.
:::

## Tensioni e variazioni di lunghezza

:::osservazione{#variazione-lunghezza titolo="Dallo sforzo normale alla deformazione"}
Una volta determinato lo sforzo normale, si può descrivere come l’asta cambia lunghezza. Siano $A$ l’area della sezione, $L$ la lunghezza iniziale ed $E$ il modulo elastico longitudinale. Per un’asta prismatica soggetta a sola azione assiale, la tensione normale media vale $\sigma=\dfrac NA$. Per un materiale elastico lineare e per piccole deformazioni la deformazione unitaria longitudinale vale $\varepsilon=\dfrac{\sigma}{E}$. Se le grandezze sono costanti lungo l’asta, l’integrale della deformazione sulla lunghezza vale $\varepsilon L$. Si ottiene quindi
$$
\Delta L=\frac{NL}{EA}.
$$
Il prodotto $EA$ è la rigidezza assiale e ha le dimensioni di una forza. L’allungamento è positivo per trazione e negativo per compressione. La formula descrive la variazione della distanza tra i due nodi misurata nella direzione iniziale dell’asta. Per ottenere lo spostamento verticale di un nodo occorre collegare quella variazione alle direzioni delle altre aste e agli spostamenti ammessi dai vincoli.

::struttura{nodi="A,0,0,-;B,6,0,-" aste="A-B" frecce="0,0,-1.2,0,N;6,0,7.2,0,N" etichette="0,0.38,A;6,0.38,B" quote="A,B,L" titolo="Asta isolata in trazione con forze opposte alle estremità"}
:::

:::esempio{titolo="Un tirante e un puntone"}
Se il corrente inferiore di un triangolo ha $L=6\,\mathrm m$, $N=24\,\mathrm{kN}$ ed $EA=36\,000\,\mathrm{kN}$, la sua variazione di lunghezza è
$$
\Delta L=\frac{24\cdot 6}{36\,000}\,\mathrm m
=0{,}004\,\mathrm m=4\,\mathrm{mm}.
$$
Con $N=-15\,\mathrm{kN}$, $L=2\,\mathrm m$ ed $EA=30\,000\,\mathrm{kN}$ si ricava invece $\Delta L=-1\,\mathrm{mm}$. Il primo valore descrive l’allungamento di un tirante. Il secondo descrive l’accorciamento elastico di un puntone. Per un puntone snello si rimanda all’argomento sulla stabilità elastica, dove si studia il carico al quale può comparire un’inflessione laterale. La variazione assiale appena calcolata si riferisce alla configurazione rettilinea.
:::
