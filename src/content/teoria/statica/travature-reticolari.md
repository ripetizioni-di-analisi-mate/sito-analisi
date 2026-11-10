---
titolo: "Travature reticolari: metodo dei nodi e sezioni di Ritter"
sommario: Come si riconosce una travatura reticolare isostatica e come si calcolano gli sforzi nelle aste con l'equilibrio dei nodi e con le sezioni di Ritter.
---

## Il modello della travatura reticolare

Le travature reticolari sono strutture leggere formate da aste sottili disposte a triangoli: capriate di copertura, ponti, tralicci, gru. Il modello che segue riduce il loro calcolo all'equilibrio di punti.

:::definizione{#travatura-reticolare titolo="Travatura reticolare"}
Una **travatura reticolare** piana è un sistema di aste collegate fra loro agli estremi, in punti detti **nodi**, che soddisfa le ipotesi seguenti.

- Le aste sono rettilinee e il loro peso proprio è trascurabile, oppure è già ripartito sui nodi.
- I nodi sono cerniere ideali, senza attrito: ogni asta può ruotare liberamente attorno ai suoi estremi.
- I carichi e i vincoli esterni sono applicati solo nei nodi.

Si indicano con $n$ il numero dei nodi, con $a$ il numero delle aste e con $v$ il numero dei vincoli semplici esterni (una cerniera esterna conta $2$, un carrello o un pendolo conta $1$). Le travature reali hanno nodi saldati o bullonati; il modello a cerniere dà comunque una buona stima degli sforzi quando le aste sono snelle e i carichi arrivano nei nodi, e su di esso si basa il progetto delle aste.

::struttura{nodi="A,0,0;B,3,0;C,6,0;D,9,0;E,12,0;F,3,4;G,6,4;H,9,4" aste="A-B;B-C;C-D;D-E;F-G;G-H;A-F;E-H;B-F;C-G;D-H;F-C;H-C" reticolare=1 vincoli="A,cerniera;E,carrello" forze="F,0,-1.5,P;G,0,-1.5,P;H,0,-1.5,P" quote="A,B,3 m,1.3;B,C,3 m,1.3;C,D,3 m,1.3;D,E,3 m,1.3;12 0,12 4,4 m,0.8" titolo="Travatura reticolare con $n = 8$ nodi, $a = 13$ aste e $v = 3$ vincoli semplici esterni, caricata nei nodi del corrente superiore"}

:::

::::teorema{#aste-solo-sforzo-normale titolo="Le aste sono soggette solo a sforzo normale"}
Nelle ipotesi del modello, ogni asta di una travatura in equilibrio è soggetta a due forze uguali e opposte, applicate agli estremi e dirette lungo l'asse dell'asta. L'asta è quindi tesa o compressa, e in ogni sua sezione agisce soltanto lo sforzo normale, costante lungo l'asta. Un'asta di questo tipo si chiama **biella**. Il risultato riduce lo stato di sollecitazione di ogni asta a un solo numero.

:::dimostrazione
L'idea è che un corpo in equilibrio sotto due sole forze le ha sulla stessa retta. Si isola l'asta $AB$. Poiché non ci sono carichi lungo l'asta e il peso è trascurabile, sull'asta agiscono solo le forze che le cerniere $A$ e $B$ le trasmettono; poiché le cerniere sono senza attrito, esse non trasmettono coppie. Sull'asta agiscono quindi due forze, $\vec{F}_A$ in $A$ e $\vec{F}_B$ in $B$. L'equilibrio alla traslazione dà $\vec{F}_B = -\vec{F}_A$. L'equilibrio alla rotazione attorno ad $A$ richiede che il momento di $\vec{F}_B$ rispetto ad $A$ sia nullo, perciò la retta d'azione di $\vec{F}_B$ passa per $A$. Allora entrambe le forze agiscono sulla retta $AB$, che per un'asta rettilinea è il suo asse. Tagliando l'asta in una sezione qualsiasi, l'equilibrio di uno dei due tronchi richiede nella sezione una forza assiale uguale a $|\vec{F}_A|$, e quindi lo sforzo normale è lo stesso in tutte le sezioni.
:::
::::

:::definizione{#sforzo-nelle-aste titolo="Sforzo nell'asta e convenzione di segno"}
Lo **sforzo** $N_{AB}$ nell'asta $AB$ è lo sforzo normale costante dell'asta, positivo se l'asta è **tesa** (trazione) e negativo se è **compressa**. Sul nodo $A$ l'asta esercita la forza
$$
\vec{N}_{AB} \text{ applicata in } A = N_{AB}\,\hat{e}_{AB} ,
\qquad
\hat{e}_{AB} = \frac{\overrightarrow{AB}}{L_{AB}} ,
$$
dove $\hat{e}_{AB}$ è il versore che va da $A$ verso $B$ e $L_{AB}$ è la lunghezza dell'asta. In altre parole, un'asta tesa *tira* i suoi nodi verso di sé e un'asta compressa li *spinge* lontano. Con questa scrittura le equazioni dei nodi si impostano sempre con gli sforzi incogniti supposti di trazione, e il segno del risultato dice se l'asta è tesa o compressa. Per esempio $N_{AB} = -20\,\mathrm{kN}$ significa che l'asta $AB$ è compressa con $20\,\mathrm{kN}$.

::struttura{nodi="A,0,0;B,4,0" aste="A-B" reticolare=1 forze="-1.3 0,-1.3,0,;5.3 0,1.3,0," etichette="-1.1,0.35,N_AB;4.6,0.35,N_AB" riferimento=0 titolo="Asta tesa: i nodi la tirano agli estremi con forze uscenti di modulo $N_{AB} > 0$, e l'asta esercita su ciascun nodo una forza uguale e opposta, diretta verso l'asta"}

:::

## Conteggio di aste e vincoli

Prima di calcolare gli sforzi si controlla che la travatura sia isostatica. Il conteggio si ricava da quello dei sistemi di corpi rigidi.

:::richiamo{titolo="Conteggio dei vincoli per un sistema di corpi rigidi"}
Un sistema piano di $c$ corpi rigidi ha $3c$ gradi di libertà; se $s$ è il numero dei vincoli semplici, $l$ il grado di labilità e $i$ il grado di iperstaticità, vale $3c - s = l - i$. Una cerniera che collega $k$ corpi equivale a $2(k - 1)$ vincoli semplici. Si rimanda all'argomento sui vincoli e sull'analisi cinematica, dove il numero dei corpi si indica con $n$; qui $n$ indica il numero dei nodi.
:::

::::teorema{#regola-2n titolo="Condizione 2n = a + v"}
Sia data una travatura con $n$ nodi, $a$ aste e $v$ vincoli semplici esterni, e siano $l$ e $i$ i suoi gradi di labilità e di iperstaticità. Allora
$$
2n - (a + v) = l - i .
$$
Ne segue che la condizione $2n = a + v$ è *necessaria* perché la travatura sia isostatica ($l = i = 0$). Se $2n > a + v$ la travatura è labile; se $2n < a + v$ è iperstatica. Per la travatura della figura iniziale $2n = 16$ e $a + v = 13 + 3 = 16$, quindi la condizione è soddisfatta.

:::dimostrazione
Si considera ogni asta come un corpo rigido, quindi i corpi sono $c = a$ e i gradi di libertà sono $3a$. Si contano i vincoli semplici. Nel nodo $j$ concorrono $k_j$ aste, collegate da una cerniera interna che equivale a $2(k_j - 1)$ vincoli semplici; a questi si aggiungono i $v$ vincoli esterni. Ogni asta ha due estremi, perciò $\sum_j k_j = 2a$, e quindi
$$
s = \sum_{j = 1}^{n} 2(k_j - 1) + v = 4a - 2n + v .
$$
Sostituendo nella relazione $3c - s = l - i$ si ottiene $3a - 4a + 2n - v = l - i$, cioè $2n - (a + v) = l - i$. Se $2n > a + v$, allora $l - i > 0$ e quindi $l \geq 1$; se $2n < a + v$, allora $i \geq 1$.
:::
::::

:::attenzione
La condizione $2n = a + v$ non è sufficiente. Nella travatura in figura $n = 6$, $a = 9$, $v = 3$, quindi $2n = a + v = 12$. Il primo riquadro ha due diagonali e il secondo nessuna: il quadrilatero $BCGE$ può deformarsi con le aste che ruotano attorno ai nodi, e la travatura è labile ($l = 1$); nel primo riquadro un'asta è in più, e la travatura è anche iperstatica ($i = 1$). Il conteggio va sempre accompagnato dal controllo della disposizione delle aste e dei vincoli.

::struttura{nodi="A,0,0;B,3,0;C,6,0;D,0,3;E,3,3;G,6,3" aste="A-B;B-C;D-E;E-G;A-D;B-E;C-G;A-E;B-D" reticolare=1 vincoli="A,cerniera;C,carrello" quote="A,B,3 m,1.3;B,C,3 m,1.3" titolo="$2n = a + v$, ma il riquadro $BCGE$ è un quadrilatero articolato: la travatura è labile e iperstatica"}

:::

:::definizione{#travatura-semplice titolo="Travatura semplice"}
Una travatura si dice **semplice** se si costruisce partendo da un triangolo di tre aste e aggiungendo un nodo alla volta, collegato ai nodi già presenti con due aste *non allineate*. Il triangolo ha $3$ nodi e $3$ aste e ogni passo aggiunge un nodo e due aste, quindi in una travatura semplice
$$
a = 2n - 3 .
$$
Le travature della figura iniziale e quelle di tipo Pratt, Howe e Warren sono semplici: si costruiscono partendo dal triangolo vicino a un appoggio e procedendo verso l'altro.
:::

::::teorema{#travatura-semplice-isostatica titolo="Isostaticità delle travature semplici"}
Una travatura semplice si comporta come un unico corpo rigido. Se è vincolata all'esterno con $v = 3$ vincoli semplici ben disposti, cioè con rette d'azione delle reazioni non tutte parallele e non concorrenti in uno stesso punto, è isostatica. La condizione $2n = a + v$ è allora soddisfatta, perché $a + v = 2n - 3 + 3$.

:::dimostrazione
Il triangolo iniziale è indeformabile, perché tre lunghezze fissate individuano un triangolo. Si supponga indeformabile la parte già costruita e si aggiunga un nodo $P$ collegato a due suoi nodi $Q_1$ e $Q_2$ da aste non allineate. Uno spostamento di $P$ rispetto alla parte già costruita che non allunghi l'asta $PQ_1$ è perpendicolare a $PQ_1$, e uno che non allunghi $PQ_2$ è perpendicolare a $PQ_2$. Poiché le due aste non sono allineate, le due direzioni perpendicolari sono diverse, e quindi l'unico spostamento ammesso è quello nullo. Per induzione l'intera travatura è indeformabile, cioè è un corpo rigido con tre gradi di libertà, e tre vincoli semplici ben disposti la rendono isostatica, come per il corpo rigido dell'argomento sull'analisi cinematica.
:::
::::

## Reazioni vincolari della travatura

Una travatura semplice vincolata in modo isostatico è un corpo rigido, perciò le reazioni si calcolano prima degli sforzi, con le equazioni cardinali della travatura intera.

:::osservazione{#reazioni-travatura titolo="Equazioni cardinali per la travatura intera"}
Per una travatura internamente rigida e vincolata con tre vincoli semplici, le tre equazioni cardinali scritte per la travatura intera determinano le tre reazioni, come per una trave; per la scelta delle equazioni e dei poli si rimanda all'argomento sulle equazioni cardinali e sulle reazioni vincolari. Gli sforzi delle aste sono forze interne e non compaiono in queste equazioni. Per la travatura della figura iniziale, con $P = 20\,\mathrm{kN}$, cerniera in $A$ e carrello in $E$,
$$
\begin{cases}
H_A = 0 \\[4pt]
12\,V_E - 20 \cdot 3 - 20 \cdot 6 - 20 \cdot 9 = 0 \\[4pt]
V_A + V_E - 3 \cdot 20 = 0
\end{cases}
$$
sono le equazioni di traslazione orizzontale, di rotazione attorno ad $A$ e di traslazione verticale. Si ottiene $V_E = 30\,\mathrm{kN}$ e $V_A = 30\,\mathrm{kN}$, entrambe verso l'alto, come si poteva prevedere dalla simmetria.

::struttura{nodi="A,0,0;B,3,0;C,6,0;D,9,0;E,12,0;F,3,4;G,6,4;H,9,4" aste="A-B;B-C;C-D;D-E;F-G;G-H;A-F;E-H;B-F;C-G;D-H;F-C;H-C" reticolare=1 forze="F,0,-1.5,P;G,0,-1.5,P;H,0,-1.5,P" reazioni="A,1.5,0,H_A;A,0,1.5,V_A;E,0,1.5,V_E" quote="A,B,3 m,1.3;B,C,3 m,1.3;C,D,3 m,1.3;D,E,3 m,1.3" titolo="Diagramma di corpo libero della travatura: i vincoli sono sostituiti dalle reazioni $H_A$, $V_A$ e $V_E$"}

:::

## Metodo dei nodi

Note le reazioni, ogni nodo è un punto in equilibrio sotto le forze delle aste che vi concorrono, i carichi e le reazioni applicati in esso.

::::teorema{#equilibrio-del-nodo titolo="Equilibrio del nodo"}
Sia $A$ un nodo di coordinate $(x_A, y_A)$, nel quale concorrono le aste $AB_1, \dots, AB_k$ e sono applicati i carichi e le reazioni di risultante $(F_x, F_y)$. Allora gli sforzi soddisfano le due equazioni
$$
\begin{cases}
\displaystyle\sum_{j = 1}^{k} N_{AB_j}\,\frac{x_{B_j} - x_A}{L_{AB_j}} + F_x = 0 \\[12pt]
\displaystyle\sum_{j = 1}^{k} N_{AB_j}\,\frac{y_{B_j} - y_A}{L_{AB_j}} + F_y = 0
\end{cases}
$$
di traslazione orizzontale e verticale. I rapporti $\dfrac{x_{B_j} - x_A}{L_{AB_j}}$ e $\dfrac{y_{B_j} - y_A}{L_{AB_j}}$ sono i coseni direttori dell'asta presi da $A$ verso $B_j$; per un'asta di proiezioni $3\,\mathrm{m}$ e $4\,\mathrm{m}$ e lunghezza $5\,\mathrm{m}$ valgono $\pm\dfrac{3}{5}$ e $\pm\dfrac{4}{5}$.

:::dimostrazione
Si isola il nodo tagliando le aste che vi concorrono. Sul nodo agiscono le forze delle aste, che per la definizione di sforzo valgono $N_{AB_j}\,\hat{e}_{AB_j}$, e i carichi e le reazioni applicati in $A$. Tutte queste forze passano per $A$, quindi il loro momento rispetto ad $A$ è nullo e l'equazione di rotazione è soddisfatta identicamente. Restano le due equazioni di traslazione, che proiettate sugli assi sono quelle dell'enunciato.
:::
::::

:::osservazione{#metodo-dei-nodi titolo="Metodo dei nodi"}
Il **metodo dei nodi** consiste nello scrivere l'equilibrio dei nodi uno dopo l'altro, scegliendo ogni volta un nodo in cui le incognite sono al più due e le aste incognite non sono allineate; il sistema di due equazioni del nodo dà allora i due sforzi. Di solito si parte da un nodo vincolato, dopo aver calcolato le reazioni, oppure da un nodo libero in cui concorrono due sole aste. Le equazioni dei nodi sono $2n$ e le incognite sono $a + v$; in una travatura isostatica, se le $v = 3$ reazioni sono già note dall'equilibrio globale, tre equazioni dei nodi restano non usate e servono come **verifica**. Il metodo conviene quando si vogliono gli sforzi in tutte le aste.
:::

:::esempio{titolo="Travatura triangolare"}
La travatura in figura ha la cerniera in $A$, il carrello in $B$ e la forza $P = 24\,\mathrm{kN}$ verso il basso in $C$. Le aste $AC$ e $BC$ sono lunghe $5\,\mathrm{m}$. Per la simmetria $H_A = 0$ e $V_A = V_B = 12\,\mathrm{kN}$. Nel nodo $A$ concorrono le aste $AB$, di versore $(1, 0)$, e $AC$, di versore $\left(\dfrac{4}{5}, \dfrac{3}{5}\right)$, quindi
$$
\begin{cases}
N_{AB} + \dfrac{4}{5}\,N_{AC} = 0 \\[8pt]
\dfrac{3}{5}\,N_{AC} + 12 = 0
\end{cases}
\qquad\Longrightarrow\qquad
N_{AC} = -20\,\mathrm{kN},
\quad
N_{AB} = 16\,\mathrm{kN} .
$$
L'asta $AC$ è **compressa** e il corrente $AB$ è **teso**; per la simmetria $N_{BC} = -20\,\mathrm{kN}$. Il nodo $C$ non è stato usato e fornisce la verifica: in verticale $-\dfrac{3}{5}(-20) - \dfrac{3}{5}(-20) - 24 = 12 + 12 - 24 = 0$.

::struttura{nodi="A,0,0;B,8,0;C,4,3" aste="A-B;A-C;B-C" reticolare=1 vincoli="A,cerniera;B,carrello" forze="C,0,-1.6,P" quote="A,B,8 m,1;8 0,8 3,3 m,0.8" titolo="Travatura triangolare con la forza $P$ nel vertice $C$"}

:::

## Aste scariche

In molte travature alcune aste hanno sforzo nullo per la condizione di carico considerata. Riconoscerle prima del calcolo riduce il numero delle incognite.

::::teorema{#aste-scariche titolo="Aste scariche"}
Sia $K$ un nodo in cui non sono applicati carichi né vincoli esterni.

- Se in $K$ concorrono due sole aste non allineate, entrambe sono **scariche**: $N = 0$.
- Se in $K$ concorrono tre aste, di cui due allineate, la terza è scarica e le due allineate hanno lo stesso sforzo.
- Se in $K$ concorrono due sole aste allineate, esse hanno lo stesso sforzo.

Le stesse conclusioni valgono quando nel nodo agisce una forza, esterna o reattiva, diretta lungo una delle aste: la si tratta come un'asta in più con la stessa direzione. Per esempio, nella travatura della figura iniziale i nodi $B$ e $D$ hanno due aste orizzontali allineate e un montante, senza carichi, perciò i montanti $BF$ e $DH$ sono scarichi.

:::dimostrazione
Nel primo caso si scrive l'equilibrio del nodo nella direzione perpendicolare alla prima asta: vi compare solo la seconda asta, con il coefficiente $\sin\theta \neq 0$, dove $\theta$ è l'angolo fra le due aste, quindi il suo sforzo è nullo; allo stesso modo è nullo lo sforzo della prima. Nel secondo caso, proiettando l'equilibrio sulla perpendicolare alle due aste allineate, compare solo la terza asta, con coefficiente non nullo perché non è allineata con le altre due, e perciò essa è scarica; la proiezione lungo le due aste allineate dà allora $N_1 - N_2 = 0$. Il terzo caso segue dalla proiezione lungo le due aste.
:::
::::

::struttura{nodi="K,0,0;A,-2.4,0;B,1.6,2.2;L,6,0;C,3.6,0;D,8.4,0;E,6,2.4" aste="K-A;K-B;L-C;L-D;L-E" reticolare=1 nomi=0 punti="0,0,K;6,0,K" etichette="-1.7,0.35,N_1 = 0;1.5,0.6,N_2 = 0;4.3,0.35,N_1;7.4,0.35,N_2 = N_1;6.4,1.6,N_3 = 0" riferimento=0 titolo="Nodi scarichi: a sinistra due aste non allineate, a destra tre aste di cui due allineate"}

:::osservazione{#aste-scariche-necessarie titolo="Ruolo delle aste scariche"}
Un'asta scarica per una condizione di carico ha sforzo non nullo per altre condizioni di carico. Inoltre, togliendo un'asta da una travatura isostatica, il numero $a + v$ scende a $2n - 1$ e per la condizione $2n = a + v$ la travatura diventa labile. Nella travatura della figura iniziale, senza il montante $BF$ il nodo $B$ resterebbe collegato solo da due aste allineate e potrebbe spostarsi in verticale.
:::

## Metodo delle sezioni di Ritter

Quando serve lo sforzo in poche aste, conviene un metodo che dia ciascuno sforzo con una sola equazione, senza risolvere i nodi uno dopo l'altro.

:::definizione{#sezione-di-ritter titolo="Sezione di Ritter e punti di Ritter"}
Una **sezione di Ritter** è una linea che divide la travatura in due parti tagliando tre aste le cui rette non passano per uno stesso punto e non sono tutte parallele. Il **punto di Ritter** di una delle tre aste è il punto d'intersezione delle rette delle altre due; se le altre due sono parallele, il punto di Ritter è il loro punto improprio. Nella figura iniziale la sezione verticale fra $x = 3\,\mathrm{m}$ e $x = 6\,\mathrm{m}$ taglia le aste $FG$, $FC$ e $BC$: il punto di Ritter di $BC$ è $F$, quello di $FG$ è $C$, quello di $FC$ è il punto improprio delle orizzontali.
:::

::::teorema{#metodo-di-ritter titolo="Metodo delle sezioni di Ritter"}
Si consideri una sezione di Ritter e una delle due parti in cui essa divide la travatura. Lo sforzo $N_k$ di una delle aste tagliate si ottiene dalla sola equazione di rotazione della parte attorno al punto di Ritter $R_k$ dell'asta:
$$
M_{R_k}^{\text{est}} + M_{R_k}(N_k) = 0 ,
$$
dove i momenti sono positivi in verso antiorario, $M_{R_k}^{\text{est}}$ è il momento rispetto a $R_k$ dei carichi e delle reazioni che agiscono sulla parte e $M_{R_k}(N_k)$ è il momento della forza dell'asta tagliata, supposta di trazione, cioè diretta dalla parte verso la sezione. Ogni equazione contiene un solo sforzo incognito, e uno sforzo calcolato male non si propaga agli altri.

:::dimostrazione
L'idea è scegliere un polo per cui le altre due incognite abbiano braccio nullo. La parte isolata è in equilibrio, quindi soddisfa le equazioni cardinali per qualunque polo. Le forze che agiscono su di essa sono i carichi e le reazioni applicati nei suoi nodi e le tre forze delle aste tagliate, ciascuna diretta lungo la propria asta. Le rette delle due aste diverse da $k$ passano per $R_k$, quindi i loro momenti rispetto a $R_k$ sono nulli. Perciò nell'equazione di rotazione attorno a $R_k$ resta soltanto l'incognita $N_k$, che ha braccio non nullo perché la sua retta non passa per $R_k$.
:::
::::

:::osservazione{#ritter-aste-parallele titolo="Due aste tagliate parallele"}
Se due delle tre aste tagliate sono parallele, il punto di Ritter della terza è improprio e l'equazione di rotazione è sostituita dall'equazione di traslazione della parte nella direzione *perpendicolare* alle due aste parallele: in essa le due aste parallele non compaiono e resta solo la terza. Nelle travature a correnti orizzontali questa è l'equazione di traslazione verticale, che dà lo sforzo nella diagonale.
:::

:::esempio{titolo="Sforzi nel secondo riquadro della travatura iniziale"}
Con $P = 20\,\mathrm{kN}$ e $V_A = 30\,\mathrm{kN}$ si considera la parte a sinistra della sezione, formata dai nodi $A$, $B$, $F$. Le forze delle aste tagliate, supposte di trazione, sono $N_{FG}$ in $F$ verso destra, $N_{FC}$ in $F$ diretta verso $C$ con versore $\left(\dfrac{3}{5}, -\dfrac{4}{5}\right)$ e $N_{BC}$ in $B$ verso destra. Con i momenti positivi in verso antiorario,
$$
\begin{cases}
-30 \cdot 3 + 4\,N_{BC} = 0 \\[6pt]
-30 \cdot 6 + 20 \cdot 3 - 4\,N_{FG} = 0 \\[6pt]
30 - 20 - \dfrac{4}{5}\,N_{FC} = 0
\end{cases}
$$
sono le equazioni di rotazione attorno a $F$, di rotazione attorno a $C$ e di traslazione verticale. Ne segue $N_{BC} = 22{,}5\,\mathrm{kN}$ (trazione), $N_{FG} = -30\,\mathrm{kN}$ (compressione) e $N_{FC} = 12{,}5\,\mathrm{kN}$ (trazione).

::struttura{nodi="A,0,0;B,3,0;C,6,0;D,9,0;E,12,0;F,3,4;G,6,4;H,9,4" aste="A-B;B-C;C-D;D-E;F-G;G-H;A-F;E-H;B-F;C-G;D-H;F-C;H-C" reticolare=1 forze="F,0,-1.5,P;G,0,-1.5,P;H,0,-1.5,P" reazioni="A,0,1.5,V_A;E,0,1.5,V_E" tratteggi="4.6,-0.9 4.6,5.4" etichette="4.75,5.3,s" punti="3,4,,centro;6,0,,centro" titolo="Sezione $s$ e punti di Ritter: $F$ per l'asta $BC$, $C$ per l'asta $FG$; per la diagonale $FC$ il punto di Ritter è improprio"}

:::

## Travature a correnti paralleli

Nelle travature a correnti paralleli le equazioni di Ritter assumono una forma che mostra subito quali aste sono tese e quali compresse.

::::teorema{#correnti-e-diagonali titolo="Sforzi nei correnti e nelle diagonali"}
Si consideri una travatura con correnti orizzontali a distanza $h$, soggetta a carichi verticali, e una sezione verticale che taglia il corrente superiore, il corrente inferiore e una diagonale inclinata dell'angolo $\alpha$ sull'orizzontale. Si indichino con $V_s$ la somma delle forze verticali esterne (carichi e reazioni) a sinistra della sezione, positive verso l'alto, e con $M_R$ il momento delle stesse forze rispetto a un punto $R$, preso positivo quando è *orario*. Allora

- il corrente inferiore ha sforzo $N_{\text{inf}} = \dfrac{M_{R_s}}{h}$, dove $R_s$ è il nodo del corrente superiore da cui parte la diagonale tagliata;
- il corrente superiore ha sforzo $N_{\text{sup}} = -\dfrac{M_{R_i}}{h}$, dove $R_i$ è il nodo del corrente inferiore da cui parte la diagonale tagliata;
- la diagonale ha sforzo $N_d = \dfrac{V_s}{\sin\alpha}$ se, andando dalla parte sinistra alla parte destra, scende, e $N_d = -\dfrac{V_s}{\sin\alpha}$ se sale.

Per una travatura appoggiata con carichi verso il basso $M_R > 0$, quindi il corrente inferiore è teso e quello superiore compresso. Il numero $M_R$ coincide con il momento flettente della trave appoggiata con la stessa luce e gli stessi carichi nella sezione di ascissa $x_R$, che si studia nell'argomento sulle caratteristiche della sollecitazione: i correnti portano il momento come una coppia di forze a braccio $h$, la diagonale porta le forze verticali. Il verso orario è quello della convenzione di segno di quell'argomento, in cui il momento flettente è positivo quando tende le fibre inferiori ed è uguale al momento orario, rispetto alla sezione, delle forze che agiscono a sinistra di essa. Il simbolo $M_R$ indica quindi un momento flettente; il momento reattivo di un incastro si indica con $M_A$ e la coppia applicata con $\mathcal{M}$.

:::dimostrazione
Si applica il metodo delle sezioni di Ritter alla parte sinistra. Per il corrente inferiore il punto di Ritter è $R_s$, che si trova a quota $h$ sopra il corrente. La forza di trazione del corrente inferiore sulla parte sinistra è orizzontale verso destra e ha rispetto a $R_s$ momento antiorario $h\,N_{\text{inf}}$; le forze esterne hanno momento antiorario $-M_{R_s}$. L'equazione di rotazione dà $h\,N_{\text{inf}} - M_{R_s} = 0$. Per il corrente superiore il punto di Ritter $R_i$ si trova a quota $h$ sotto il corrente, la forza di trazione verso destra ha momento antiorario $-h\,N_{\text{sup}}$ e l'equazione è $-h\,N_{\text{sup}} - M_{R_i} = 0$. Per la diagonale i correnti sono paralleli e si scrive la traslazione verticale. La forza di trazione della diagonale sulla parte sinistra è diretta verso la parte destra lungo la diagonale; la sua componente verticale vale $-N_d \sin\alpha$ se la diagonale scende e $N_d \sin\alpha$ se sale. L'equazione $V_s - N_d\sin\alpha = 0$, oppure $V_s + N_d\sin\alpha = 0$, dà la tesi.
:::
::::

:::esempio{titolo="Verifica sulla travatura iniziale"}
Nella sezione dell'esempio precedente $h = 4\,\mathrm{m}$, $R_s = F$ e $R_i = C$. Le forze a sinistra danno $M_{R_s} = 30 \cdot 3 = 90\,\mathrm{kN\,m}$, $M_{R_i} = 30 \cdot 6 - 20 \cdot 3 = 120\,\mathrm{kN\,m}$ e $V_s = 30 - 20 = 10\,\mathrm{kN}$. La diagonale $FC$ scende andando verso destra e $\sin\alpha = \dfrac{4}{5}$, quindi
$$
N_{BC} = \frac{90}{4} = 22{,}5\,\mathrm{kN},
\qquad
N_{FG} = -\frac{120}{4} = -30\,\mathrm{kN},
\qquad
N_{FC} = \frac{10}{\frac{4}{5}} = 12{,}5\,\mathrm{kN},
$$
come nell'esempio sul metodo di Ritter.
:::

## Schemi ricorrenti di travature

Gli schemi più usati si distinguono per la disposizione delle diagonali, e il teorema sugli sforzi nei correnti e nelle diagonali dice in ciascuno quali aste lavorano a trazione.

:::definizione{#travature-tipo titolo="Travature Pratt, Howe, Warren e a mensola"}
Si considerano travature a correnti paralleli, appoggiate agli estremi e soggette a carichi verso il basso disposti in modo simmetrico, per cui $V_s > 0$ nella metà sinistra e $V_s < 0$ in quella destra. Per il teorema sugli sforzi nei correnti e nelle diagonali, una diagonale interna che *scende* verso la mezzeria è tesa e una che *sale* verso la mezzeria è compressa.

- Nella travatura **Pratt** le diagonali interne scendono verso la mezzeria, quindi sono **tese**, e i montanti sono compressi o scarichi. È lo schema della figura iniziale, in cui le aste d'estremità $AF$ ed $EH$ sono inclinate e compresse.
- Nella travatura **Howe** le diagonali interne salgono verso la mezzeria, quindi sono **compresse**, e i montanti sono tesi o scarichi.
- Nella travatura **Warren** le diagonali salgono e scendono alternativamente e di solito mancano i montanti; procedendo da un appoggio verso la mezzeria le diagonali sono alternativamente compresse e tese.
- Nella travatura **a mensola** un estremo è vincolato a una parete e l'altro è libero; sotto carichi verso il basso il corrente superiore è teso e quello inferiore compresso.

Lo schema Pratt è conveniente in acciaio, perché le aste più lunghe, cioè le diagonali, sono tese e non sono soggette all'instabilità delle aste compresse.

::struttura{nodi="A,0,0;B,3,0;C,6,0;D,9,0;E,12,0;F,3,4;G,6,4;H,9,4" aste="A-B;B-C;C-D;D-E;F-G;G-H;A-F;E-H;B-F;C-G;D-H;B-G;D-G" reticolare=1 vincoli="A,cerniera;E,carrello" forze="F,0,-1.5,P;G,0,-1.5,P;H,0,-1.5,P" quote="A,B,3 m,1.3;B,C,3 m,1.3;C,D,3 m,1.3;D,E,3 m,1.3" titolo="Travatura Howe: le diagonali $BG$ e $DG$ salgono verso la mezzeria"}

::struttura{nodi="A,0,0;B,3,0;C,6,0;D,9,0;E,1.5,2;G,4.5,2;H,7.5,2" aste="A-B;B-C;C-D;E-G;G-H;A-E;E-B;B-G;G-C;C-H;H-D" reticolare=1 vincoli="A,cerniera;D,carrello" forze="E,0,-1.2,P;G,0,-1.2,P;H,0,-1.2,P" quote="A,B,3 m,1.3;B,C,3 m,1.3;C,D,3 m,1.3;9 0,9 2,2 m,0.8" titolo="Travatura Warren: diagonali alternate, senza montanti"}

::struttura{nodi="A,0,0;B,0,3;C,4,3;D,4,0;E,8,0" aste="A-B;B-C;C-E;A-D;D-E;C-D;A-C" reticolare=1 vincoli="A,cerniera,180;B,carrello,180" forze="E,0,-1.6,P" quote="A,D,4 m,1;D,E,4 m,1;0 0,0 3,3 m,-1.4" titolo="Travatura a mensola vincolata alla parete con la cerniera $A$ e il carrello $B$"}

:::

:::osservazione{#montanti titolo="Sforzo nei montanti"}
Lo sforzo in un montante si ricava dall'equilibrio alla traslazione verticale del suo nodo d'estremità in cui non concorrono diagonali. Nella travatura Pratt caricata sul corrente superiore il montante $CG$ si trova nel nodo $G$, dove concorrono le aste allineate $FG$ e $GH$ e il carico $P$, quindi $N_{CG} = -P$; i montanti $BF$ e $DH$ sono scarichi per il teorema sulle aste scariche. Se gli stessi carichi sono applicati al corrente inferiore, il montante $BF$ porta il carico del nodo $B$ ed è teso con $N_{BF} = P$.
:::
