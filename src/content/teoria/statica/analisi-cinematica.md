---
titolo: "Vincoli e analisi cinematica: labilità e isostaticità"
sommario: Come si classificano i vincoli piani in base agli spostamenti che impediscono e alle reazioni che esplicano, e come si stabilisce, con il conteggio dei vincoli, con la matrice cinematica e con i centri di rotazione, se una struttura è labile, isostatica o iperstatica.
---

## Vincoli esterni

Nell'argomento sulla cinematica dei sistemi rigidi piani i vincoli sono comparsi solo per l'effetto che hanno sul centro di rotazione. Qui si classificano, si contano e si usano per stabilire se una struttura può muoversi.

:::definizione{#vincolo titolo="Vincolo, vincolo semplice e molteplicità"}
Un **vincolo** è un dispositivo che impedisce alcuni spostamenti di un corpo rigido. È un vincolo *esterno* se impedisce spostamenti rispetto al suolo, un vincolo *interno* se impedisce spostamenti rispetto a un altro corpo. Un **vincolo semplice** impedisce una sola componente di spostamento, cioè lo spostamento di un punto in una direzione assegnata oppure la rotazione. La **molteplicità** di un vincolo è il numero di vincoli semplici a cui equivale, ossia il numero di condizioni indipendenti che impone agli spostamenti.

Si assume che i vincoli siano lisci e bilaterali e che gli spostamenti siano infinitesimi. Con queste ipotesi un vincolo esplica una componente di reazione per ogni componente di spostamento che impedisce: una forza nella direzione dello spostamento impedito, oppure un momento se impedisce la rotazione. Un vincolo di molteplicità $m$ introduce quindi $m$ reazioni incognite nelle equazioni di equilibrio.
:::

:::definizione{#vincoli-esterni titolo="Vincoli esterni del piano"}
- **Carrello** (o appoggio scorrevole) in $A$: il punto $A$ può scorrere lungo il piano di scorrimento e il corpo può ruotare attorno ad $A$, mentre lo spostamento di $A$ normale al piano è impedito. Molteplicità $1$. La reazione $R_A$ è normale al piano di scorrimento e la sua retta d'azione passa per $A$.
- **Pendolo** (o biella) in $A$: asta rigida scarica, incernierata al corpo in $A$ e al suolo. Impedisce lo spostamento di $A$ lungo l'asse della biella. Molteplicità $1$, con la reazione diretta lungo l'asse. Per gli spostamenti infinitesimi il pendolo equivale a un carrello con il piano di scorrimento perpendicolare all'asse.
- **Cerniera** in $A$: impedisce le due componenti dello spostamento di $A$ e lascia libera la rotazione. Molteplicità $2$. La reazione passa per $A$ e ha direzione qualsiasi, con componenti $H_A$ e $V_A$.
- **Doppio pendolo** (o bipendolo) in $A$: due bielle parallele. Impedisce la rotazione e la traslazione parallela alle bielle e lascia libera la traslazione perpendicolare alle bielle. Molteplicità $2$. La reazione è una forza parallela alle bielle con retta d'azione qualsiasi, cioè una forza parallela alle bielle applicata in $A$ e un momento.
- **Incastro** in $A$: impedisce ogni spostamento del corpo. Molteplicità $3$, con le reazioni $H_A$, $V_A$ e il momento $M_A$.

Dal simbolo del vincolo si leggono quindi le reazioni incognite. Una trave con una cerniera in $A$ e un carrello in $B$ su un piano orizzontale riceve dal suolo $H_A$, $V_A$ e la reazione verticale $R_B$, tre incognite in tutto.

::struttura{nodi="A,0,0,-;A2,1.4,0,-;B,2.6,0,-;B2,4,0,-;C,5.2,0,-;C2,6.6,0,-;D,7.8,0,-;D2,9.2,0,-;E,10.4,0,-;E2,11.8,0,-" aste="A-A2;B-B2;C-C2;D-D2;E-E2" vincoli="A,carrello;B,pendolo;C,cerniera;D,doppio-pendolo;E,incastro,180" etichette="0.7,-1.5,carrello;3.3,-1.5,pendolo;5.9,-1.5,cerniera;8.5,-1.5,doppio pendolo;11.1,-1.5,incastro" riferimento=0 titolo="Vincoli esterni: carrello e pendolo (molteplicità $1$), cerniera e doppio pendolo (molteplicità $2$), incastro (molteplicità $3$)"}

:::

## Vincoli interni

:::definizione{#vincoli-interni titolo="Vincoli interni"}
Un vincolo interno collega due corpi e impedisce alcuni dei loro spostamenti *relativi*.
- **Cerniera interna** in $C$: il punto $C$ ha lo stesso spostamento come punto del primo corpo e come punto del secondo, mentre la rotazione relativa resta libera. Molteplicità $2$. I due corpi si scambiano in $C$ una forza di direzione qualsiasi, di componenti $X_C$ e $Y_C$, uguale e opposta sui due corpi.
- **Pendolo interno**: biella scarica incernierata a un punto $P_1$ del primo corpo e a un punto $P_2$ del secondo. Impedisce la variazione della distanza tra $P_1$ e $P_2$, cioè la componente dello spostamento relativo lungo l'asse della biella. Molteplicità $1$, con la forza scambiata diretta lungo l'asse.
- **Doppio pendolo interno**: due bielle parallele tra i due corpi. Impedisce la rotazione relativa e lo spostamento relativo parallelo alle bielle e lascia libero lo scorrimento relativo perpendicolare alle bielle. Molteplicità $2$.
- **Incastro interno**: impedisce ogni spostamento relativo, quindi i due tratti formano un solo corpo. Molteplicità $3$. Due aste saldate in un nodo rigido, come il traverso e il pilastro di un telaio, fanno parte dello stesso corpo.

::struttura{nodi="P,0,0,-;C,2,0,-;Q,4,0,-;P1,0,-1.6,-;R1,1.6,-1.6,-;R2,2.4,-1.6,-;Q1,4,-1.6,-;P3,0,-3.2,-;S1,1.8,-3.2,-;U1,1.8,-3,-;U2,1.8,-3.4,-;W1,2.2,-3,-;W2,2.2,-3.4,-;S2,2.2,-3.2,-;Q3,4,-3.2,-" aste="P-C;C-Q;P1-R1;R1-R2;R2-Q1;P3-S1;U1-U2;U1-W1;U2-W2;W1-W2;S2-Q3" cerniere="C;R1;R2;U1;U2;W1;W2" etichette="2,0.55,cerniera interna;2,-1.05,pendolo interno;2,-2.55,doppio pendolo interno" riferimento=0 titolo="Vincoli interni tra due tratti di trave: cerniera interna (molteplicità $2$), pendolo interno (molteplicità $1$), doppio pendolo interno con bielle orizzontali (molteplicità $2$)"}

:::

::::teorema{#cerniera-tra-piu-corpi titolo="Cerniera che collega più corpi"}
Una cerniera interna che collega $k$ corpi equivale a $k - 1$ cerniere semplici, quindi ha molteplicità $2(k - 1)$. Una cerniera fissa a cui sono collegati $k$ corpi ha molteplicità $2k$.

Il caso tipico è il nodo di un telaio o di una travatura in cui si incontrano più aste incernierate. Tre aste che convergono in un nodo con una cerniera danno $s = 2 \cdot (3 - 1) = 4$ vincoli semplici, e due aste collegate alla stessa cerniera fissa danno $s = 4$.

:::dimostrazione
Il punto comune $P$ ha uno spostamento come punto di ciascuno dei $k$ corpi, e la cerniera impone che questi spostamenti siano tutti uguali. Si sceglie il primo corpo come riferimento e si impone che lo spostamento di $P$ in ciascuno degli altri $k - 1$ corpi coincida con quello del primo; si ottengono $k - 1$ uguaglianze tra vettori, cioè $2(k - 1)$ condizioni scalari. Le condizioni sono indipendenti, perché ciascuna coppia di uguaglianze contiene i parametri di un corpo diverso. Le rotazioni restano libere, quindi la molteplicità è $2(k - 1)$. Se la cerniera è fissa, lo spostamento di $P$ deve essere nullo in ciascuno dei $k$ corpi, quindi le condizioni sono $k$ uguaglianze tra vettori, cioè $2k$ condizioni scalari.
:::
::::

## Conteggio dei vincoli e classificazione delle strutture

:::definizione{#gradi-di-liberta titolo="Gradi di libertà e vincoli semplici di una struttura"}
Un corpo rigido nel piano ha $3$ gradi di libertà: lo spostamento è individuato dalle due componenti $u_O$, $v_O$ dello spostamento di un suo punto $O$, detto polo, e dalla rotazione $\varphi$. Una struttura formata da $n$ corpi rigidi ha quindi $3n$ gradi di libertà prima di essere vincolata. Si indica con $s$ il numero di vincoli semplici della struttura, cioè la somma delle molteplicità di tutti i vincoli, esterni e interni.

Per contare i corpi si separano le parti della struttura nei vincoli interni diversi dall'incastro, mentre le aste unite da nodi rigidi appartengono allo stesso corpo. Il portale con due pilastri e un traverso a nodi rigidi, incastrato al piede sinistro e appoggiato con un carrello al piede destro, è un solo corpo con $s = 3 + 1 = 4$.
:::

:::definizione{#grado-di-labilita titolo="Grado di labilità e grado di iperstaticità"}
Il **grado di labilità** $l$ è il numero di parametri indipendenti da cui dipendono gli spostamenti infinitesimi compatibili con i vincoli; se $l = 0$ l'unico spostamento compatibile è quello nullo. Il **grado di iperstaticità** $i$ è il numero di sistemi indipendenti di reazioni vincolari che sono in equilibrio da soli, in assenza di carichi. Se $i > 0$ le equazioni di equilibrio non determinano le reazioni, perché a una soluzione si può sommare uno di questi sistemi moltiplicato per un numero qualsiasi.

In altre parole, $l$ conta i movimenti che i vincoli lasciano possibili e $i$ conta i vincoli semplici in eccesso. Una mensola con un carrello all'estremo libero ha $l = 0$, perché l'incastro da solo impedisce ogni spostamento, e ha $i = 1$, perché la reazione del carrello e le reazioni dell'incastro che la equilibrano formano un sistema in equilibrio senza carichi.
:::

:::definizione{#classificazione-strutture titolo="Strutture labili, isostatiche e iperstatiche"}
Una struttura è
- **labile** se $l > 0$: i vincoli lasciano almeno un movimento, e la struttura è in equilibrio solo per carichi particolari;
- **isostatica** se $l = 0$ e $i = 0$: nessun movimento è possibile e, per qualsiasi carico, le equazioni di equilibrio danno le reazioni con una soluzione unica;
- **iperstatica** se $l = 0$ e $i > 0$: nessun movimento è possibile, ma le equazioni di equilibrio non determinano le reazioni.

Una struttura labile può avere anche $i > 0$, e allora si dice labile e iperstatica. Le reazioni delle strutture isostatiche si calcolano nell'argomento sulle equazioni cardinali della statica.
:::

## Matrice cinematica e relazione tra labilità e iperstaticità

Ogni vincolo semplice impone un'equazione lineare ai parametri dello spostamento. Il sistema di queste equazioni contiene tutta l'analisi cinematica di una struttura.

:::definizione{#matrice-cinematica titolo="Matrice cinematica"}
Per il corpo $j$ si sceglie un polo $O_j$ e si usano come parametri le componenti $u_j$, $v_j$ dello spostamento del polo e la rotazione $\varphi_j$. Come si è visto nell'argomento sulla cinematica dei sistemi rigidi piani, il punto $P$ del corpo $j$ si sposta di
$$
u_P = u_j - \varphi_j\,(y_P - y_{O_j}) ,
\qquad
v_P = v_j + \varphi_j\,(x_P - x_{O_j}) .
$$
Un carrello o un pendolo in $P$ con la reazione diretta secondo il versore $\hat n = (n_x, n_y)$ impone $n_x u_P + n_y v_P = 0$. Un vincolo che impedisce la rotazione impone $\varphi_j = 0$. Un vincolo interno impone le stesse condizioni allo spostamento relativo dei due corpi. Si ottengono $s$ equazioni lineari omogenee nei $3n$ parametri, che si scrivono $A\,\mathbf{q} = \mathbf{0}$. La matrice $A$, con $s$ righe e $3n$ colonne, è la **matrice cinematica** della struttura.

Per la trave $AB$ di luce $L$, con una cerniera in $A$, un carrello in $B$ su un piano orizzontale e il polo in $A$, le condizioni sono $u_A = 0$, $v_A = 0$ e $v_B = v_A + \varphi L = 0$. Quindi
$$
A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 1 & L \end{pmatrix} ,
\qquad
\det A = L \neq 0 ,
$$
e il sistema ha solo la soluzione nulla, quindi la trave non può muoversi.
:::

:::richiamo{titolo="Rango e sistemi lineari omogenei"}
Sia $A$ una matrice con $m$ righe, $k$ colonne e rango $r$. Le soluzioni del sistema $A\,\mathbf{q} = \mathbf{0}$ formano un sottospazio di dimensione $k - r$, e la trasposta $A^{T}$ ha lo stesso rango $r$. Si rimanda all'argomento sui sistemi lineari e sul rango di Algebra lineare.
:::

::::teorema{#relazione-labilita-iperstaticita titolo="Relazione tra gradi di libertà, vincoli, labilità e iperstaticità"}
Sia una struttura piana formata da $n$ corpi rigidi con $s$ vincoli semplici lisci e bilaterali, e sia $r$ il rango della sua matrice cinematica $A$. Allora
$$
l = 3n - r ,
\qquad
i = s - r ,
$$
e quindi
$$
3n - s = l - i .
$$
In particolare la struttura è isostatica se e solo se $s = 3n$ e $\det A \neq 0$.

La relazione permette di ricavare uno dei due gradi quando l'altro è noto. Una trave con un incastro in $A$ e una cerniera in $B$ ha $3n - s = 3 - 5 = -2$; l'incastro da solo impedisce ogni spostamento, quindi $l = 0$ e perciò $i = 2$.

:::dimostrazione
L'idea è che le equazioni di equilibrio abbiano come matrice dei coefficienti la trasposta di $A$.

Gli spostamenti compatibili con i vincoli sono le soluzioni di $A\,\mathbf{q} = \mathbf{0}$, che formano un sottospazio di dimensione $3n - r$; quindi $l = 3n - r$.

Si considera la reazione $R$ di un carrello in un punto $P$ del corpo $j$, diretta secondo $\hat n$. Nelle equazioni di equilibrio del corpo $j$, cioè la traslazione orizzontale, la traslazione verticale e la rotazione attorno al polo $O_j$, la reazione compare con i coefficienti
$$
n_x ,
\qquad
n_y ,
\qquad
n_y\,(x_P - x_{O_j}) - n_x\,(y_P - y_{O_j}) ,
$$
dove il terzo è il braccio con segno della forza rispetto al polo. La condizione cinematica dello stesso carrello è
$$
n_x u_P + n_y v_P = n_x u_j + n_y v_j + \big[\, n_y\,(x_P - x_{O_j}) - n_x\,(y_P - y_{O_j}) \,\big]\,\varphi_j = 0 ,
$$
quindi la riga di $A$ che gli corrisponde ha gli stessi coefficienti nelle colonne di $u_j$, $v_j$, $\varphi_j$ e zero nelle altre. Lo stesso accade per un vincolo che impedisce la rotazione, la cui reazione è un momento che compare solo nell'equazione di rotazione, e per un vincolo interno, la cui riga ha coefficienti opposti sui due corpi, così come la sua reazione agisce con versi opposti sui due corpi. Perciò, indicato con $\mathbf{R}$ il vettore delle $s$ reazioni e con $\mathbf{f}$ il vettore che raccoglie le risultanti e i momenti dei carichi, le $3n$ equazioni di equilibrio si scrivono
$$
A^{T}\,\mathbf{R} + \mathbf{f} = \mathbf{0} .
$$
I sistemi di reazioni in equilibrio senza carichi sono le soluzioni di $A^{T}\mathbf{R} = \mathbf{0}$. La matrice $A^{T}$ ha $s$ colonne e rango $r$, quindi queste soluzioni formano un sottospazio di dimensione $s - r$ e $i = s - r$. Sottraendo le due uguaglianze si ottiene $l - i = 3n - s$.

Se la struttura è isostatica, allora $l = i = 0$, quindi $r = 3n = s$ e $A$ è quadrata con determinante non nullo. Viceversa, se $s = 3n$ e $\det A \neq 0$, allora $r = 3n$ e quindi $l = i = 0$.
:::
::::

:::osservazione{#condizione-necessaria titolo="Il conteggio dà una condizione necessaria"}
Poiché $l \ge 0$ e $i \ge 0$, dalla relazione $3n - s = l - i$ segue che $l \ge 3n - s$ e $i \ge s - 3n$. Ne seguono tre casi.
- Se $s < 3n$, la struttura è labile, con $l \ge 3n - s$.
- Se $s > 3n$, la struttura ha $i \ge s - 3n$ ed è iperstatica oppure labile e iperstatica.
- Se $s = 3n$, vale $l = i$, quindi la struttura è isostatica se $l = 0$ e labile e iperstatica se $l > 0$.

La condizione $s = 3n$ è perciò *necessaria* per l'isostaticità, ma non *sufficiente*. Per concludere occorre verificare che $l = 0$, con il rango della matrice cinematica oppure con il metodo dei centri.
:::

:::attenzione
Il conteggio $s = 3n$ da solo non stabilisce che una struttura è isostatica. Una trave appoggiata su tre carrelli con il piano di scorrimento orizzontale ha $n = 1$ e $s = 3 = 3n$, ma può traslare in orizzontale, perché nessuno dei tre carrelli impedisce gli spostamenti orizzontali. Quindi $l = 1$ e, dalla relazione, $i = 1$. Le tre reazioni verticali compaiono infatti in due sole equazioni utili, la traslazione verticale e la rotazione, e una forza orizzontale applicata alla trave non può essere equilibrata.
:::

## Il centro di rotazione imposto dai vincoli

Per le strutture con più corpi la matrice cinematica diventa grande. Il metodo dei centri arriva alla stessa conclusione con costruzioni geometriche, a partire dalla posizione che ogni vincolo impone al centro di rotazione.

:::richiamo{titolo="Centro di rotazione ed effetto dei vincoli"}
Uno spostamento rigido infinitesimo con $\varphi \neq 0$ è una rotazione attorno a un unico punto $C$, il centro di rotazione, e lo spostamento di un punto $P$ è perpendicolare a $CP$. Una traslazione è una rotazione attorno al punto improprio della direzione perpendicolare agli spostamenti. Per un corpo con uno spostamento non nullo:
- una cerniera in $A$ impone che il centro sia $A$;
- un carrello o un pendolo in $A$ impone che il centro stia sulla retta d'azione della reazione, eventualmente nel suo punto improprio;
- un doppio pendolo impone la traslazione perpendicolare alle bielle, cioè il centro nel punto improprio della direzione delle bielle;
- un incastro non consente spostamenti non nulli.

Si rimanda all'argomento sulla cinematica dei sistemi rigidi piani.
:::

::::teorema{#corpo-con-due-centri titolo="Corpo con due centri distinti"}
Se i vincoli richiedono che il centro di rotazione di un corpo rigido si trovi in due punti distinti, propri o impropri, il corpo è fermo.

Una trave con una cerniera in $A$ e un carrello in $B$ su un piano orizzontale è ferma, perché il suo centro dovrebbe essere $A$ e dovrebbe stare sulla verticale per $B$, che non passa per $A$.

:::dimostrazione
Uno spostamento non nullo ha un solo centro. Se $\varphi \neq 0$, il centro è l'unico punto con spostamento nullo. Se $\varphi = 0$, il corpo trasla con uno spostamento $\vec{t} \neq \vec{0}$ e il centro è l'unico punto improprio della direzione perpendicolare a $\vec{t}$. Quindi due centri distinti sono possibili solo per lo spostamento nullo.
:::
::::

::::teorema{#tre-vincoli-semplici titolo="Corpo con tre vincoli semplici"}
Un corpo rigido vincolato da tre carrelli o pendoli, con le rette d'azione delle reazioni $r_1$, $r_2$, $r_3$, è isostatico se e solo se le tre rette non passano per uno stesso punto, proprio o improprio, cioè se non sono concorrenti e non sono tutte parallele.

Una cerniera equivale a due pendoli di direzioni diverse le cui rette passano per la cerniera, e un doppio pendolo equivale a due pendoli paralleli. Ne seguono due casi molto frequenti:
- un corpo con una cerniera in $A$ e un carrello in $B$ è isostatico se e solo se la retta d'azione della reazione del carrello non passa per $A$;
- un corpo con un doppio pendolo e un carrello è isostatico se e solo se la reazione del carrello non è parallela alle bielle.

:::dimostrazione
Se le tre rette passano per un punto proprio $C$, la rotazione attorno a $C$ sposta ogni punto vincolato perpendicolarmente alla retta che lo congiunge con $C$, cioè lungo il suo piano di scorrimento; quindi è compatibile con i tre vincoli e il corpo è labile. Se le tre rette sono parallele, la traslazione perpendicolare a esse è compatibile con i tre vincoli e il corpo è ancora labile.

Viceversa, si supponga che le tre rette non abbiano un punto comune e che il corpo abbia uno spostamento non nullo. Per l'effetto dei carrelli e dei pendoli sul centro di rotazione, il centro sta su $r_1$, su $r_2$ e su $r_3$, quindi è un punto comune alle tre rette, contro l'ipotesi. Perciò $l = 0$, e poiché $s = 3 = 3n$ la relazione $3n - s = l - i$ dà $i = 0$.
:::
::::

## Vincoli mal disposti

:::definizione{#vincoli-mal-disposti titolo="Vincoli mal disposti"}
I vincoli di una struttura sono **mal disposti** quando, pur essendo in numero sufficiente, con $s \ge 3n$, lasciano uno spostamento non nullo. La matrice cinematica ha allora rango $r < 3n$; con $s = 3n$ si ha $\det A = 0$ e la struttura è labile e iperstatica, con $l = i \ge 1$. Per un corpo singolo i casi tipici seguono dal teorema sul corpo con tre vincoli semplici:
- tre carrelli o pendoli con le rette d'azione parallele;
- tre carrelli o pendoli con le rette d'azione concorrenti in un punto;
- una cerniera e un carrello la cui retta d'azione passa per la cerniera;
- un doppio pendolo e un carrello con la reazione parallela alle bielle.

Per le strutture di più corpi il caso tipico è l'arco con le tre cerniere allineate.

::struttura{nodi="A,0,0;B,5,0" aste="A-B" vincoli="A,cerniera;B,carrello,0" tratteggi="0,0 5,0.9;-0.6,0 5.8,0" frecce="5,0,5,0.85,v_B" titolo="Cerniera in $A$ e carrello in $B$ con la reazione orizzontale, la cui retta d'azione passa per $A$: la trave può ruotare attorno ad $A$, perché $B$ si sposta in verticale lungo il piano di scorrimento"}

::struttura{nodi="A,0,0;D,4,0;B,8,0" aste="A-D;D-B" vincoli="A,pendolo,225;B,pendolo,315;D,carrello" tratteggi="0,0 4,4;8,0 4,4;4,0 4,4" punti="4,4,C,centro" titolo="Tre vincoli semplici con le rette d'azione concorrenti nel punto $C$: la trave può ruotare attorno a $C$"}

:::

## Catene di corpi e metodo dei centri

:::richiamo{titolo="Teoremi delle catene cinematiche"}
Se due corpi $1$ e $2$ hanno uno spostamento con rotazioni non entrambe nulle, i centri assoluti $C_1$, $C_2$ e il centro relativo $C_{12}$ sono allineati, e con i centri assoluti propri vale $\varphi_1\,\overrightarrow{C_1 C_{12}} = \varphi_2\,\overrightarrow{C_2 C_{12}}$ (primo teorema). Per tre corpi $1$, $2$, $3$ i centri relativi $C_{12}$, $C_{23}$, $C_{13}$ sono allineati (secondo teorema). Si rimanda all'argomento sulla cinematica dei sistemi rigidi piani.
:::

:::teorema{#centri-relativi titolo="Centro relativo imposto da un vincolo interno"}
Siano $1$ e $2$ due corpi con uno spostamento relativo non nullo.
- Se sono collegati da una cerniera interna in $C$, il centro relativo è $C_{12} = C$.
- Se sono collegati da un pendolo interno, $C_{12}$ sta sull'asse della biella.
- Se sono collegati da un doppio pendolo interno, $C_{12}$ è il punto improprio della direzione delle bielle, perché lo spostamento relativo è una traslazione perpendicolare alle bielle.

L'enunciato segue dall'effetto dei vincoli esterni sul centro di rotazione, applicato allo spostamento relativo dei due corpi.
:::

::::teorema{#metodo-dei-centri titolo="Metodo dei centri"}
Si supponga che una struttura di più corpi abbia uno spostamento e si ricavino i centri assoluti dai vincoli esterni e i centri relativi dai vincoli interni. Se queste condizioni, insieme ai teoremi delle catene cinematiche, richiedono che ogni corpo abbia due centri distinti, allora ogni corpo è fermo e la struttura non è labile.

In pratica si scrivono, corpo per corpo, i luoghi in cui può trovarsi il centro: punti, rette, rette per centri già noti. Un corpo i cui luoghi non hanno punti in comune è fermo.

:::dimostrazione
Per il teorema sul corpo con due centri distinti ogni corpo ha lo spostamento nullo. Quindi l'unico spostamento compatibile con i vincoli è quello nullo, e $l = 0$.
:::
::::

:::osservazione{#corpo-fermo-come-suolo titolo="Un corpo fermo si comporta come il suolo"}
Quando un corpo risulta fermo, i vincoli interni che lo collegano agli altri corpi agiscono su questi come vincoli esterni: una cerniera interna con un corpo fermo è, per l'altro corpo, una cerniera fissa, e un doppio pendolo interno diventa un doppio pendolo esterno. L'analisi procede allora per passi. Si individua una parte della struttura vincolata al suolo in modo isostatico, che quindi è ferma, la si considera parte del suolo e si prosegue con i corpi collegati a essa.

Se invece si trova una disposizione dei centri compatibile con tutti i vincoli, la struttura è labile, e le rotazioni dei corpi si legano con il primo teorema delle catene cinematiche.
:::

:::esempio{titolo="Trave Gerber a due corpi"}
La trave in figura è formata dalla mensola $AC$, incastrata in $A = (0, 0)$, e dalla trave $CD$, collegata alla mensola dalla cerniera interna $C = (3, 0)$ e appoggiata in $D = (7, 0)$ su un carrello con il piano di scorrimento orizzontale. Si ha $n = 2$ e $s = 3 + 2 + 1 = 6 = 3n$. La mensola è ferma, perché è incastrata. Il punto $C$ è quindi fermo e la cerniera interna è, per il corpo $CD$, una cerniera fissa: il centro di $CD$ dovrebbe essere $C$ e dovrebbe stare sulla verticale per $D$, che non passa per $C$. Perciò anche $CD$ è fermo, $l = 0$ e, dalla relazione $3n - s = l - i$, $i = 0$: la trave è **isostatica**.

::struttura{nodi="A,0,0;C,3,0;D,7,0" aste="A-C;C-D" vincoli="A,incastro,180;D,carrello" cerniere="C" quote="A,C,3 m;C,D,4 m" titolo="Trave Gerber: mensola $AC$ incastrata e trave portata $CD$"}

:::

## Archi a tre cerniere, travi Gerber e portali

::::teorema{#arco-a-tre-cerniere titolo="Arco a tre cerniere"}
Siano due corpi rigidi $1$ e $2$, collegati al suolo dalle cerniere $A$ e $B$ e tra loro dalla cerniera interna $C$. La struttura è isostatica se e solo se $A$, $B$ e $C$ non sono allineati. Se sono allineati, la struttura è labile e iperstatica, con $l = i = 1$.

La forma dei due corpi non conta, quindi il teorema vale per gli archi, per i portali a tre cerniere e per le travi inclinate.

::struttura{nodi="A,0,0;D,0,4;C,3,4;E,6,4;B,6,0" aste="A-D;D-C;C-E;E-B" vincoli="A,cerniera;B,cerniera" cerniere="C" tratteggi="0,0 3,4 6,0" quote="A,B,6 m,0.9;B,E,4 m" titolo="Portale a tre cerniere: $A$, $B$ e $C$ non sono allineati, quindi il portale è isostatico"}

::struttura{nodi="A,0,0;C,4,0;B,8,0" aste="A-C;C-B" vincoli="A,cerniera;B,cerniera" cerniere="C" tratteggi="0,0 4,1.2 8,0" frecce="4,0,4,1.15,v_C" quote="A,C,4 m;C,B,4 m" titolo="Tre cerniere allineate: con $\varphi_2 = -\varphi_1$ i due tratti si spostano nella configurazione tratteggiata, quindi la trave è labile"}


:::dimostrazione
Si ha $n = 2$ e $s = 2 + 2 + 2 = 6 = 3n$, quindi basta stabilire se $l = 0$. Si supponga uno spostamento non nullo. Se il corpo $1$ è fermo, il punto $C$ è fermo e il corpo $2$ ha due centri distinti, $B$ e $C$; quindi anche il corpo $2$ è fermo. Lo stesso accade scambiando i due corpi. Se entrambi i corpi si muovono, i centri assoluti sono $C_1 = A$ e $C_2 = B$, il centro relativo è $C_{12} = C$, e per il primo teorema delle catene cinematiche i tre punti sono allineati. Perciò, se $A$, $B$ e $C$ non sono allineati, l'unico spostamento è quello nullo e la struttura è isostatica.

Se invece $A$, $B$ e $C$ stanno su una retta $r$, si fanno ruotare i due corpi attorno ad $A$ e a $B$ con rotazioni $\varphi_1$ e $\varphi_2$. Come punto di ciascun corpo, $C$ si sposta perpendicolarmente a $r$. Indicate con $a$ e $b$ le ascisse con segno di $C$ lungo $r$ misurate da $A$ e da $B$, lo spostamento di $C$ vale $\varphi_1 a$ come punto del corpo $1$ e $\varphi_2 b$ come punto del corpo $2$. Con $\varphi_2 = \dfrac{a}{b}\,\varphi_1$ i due spostamenti coincidono, quindi esiste uno spostamento non nullo, che dipende dal solo parametro $\varphi_1$. Perciò $l = 1$ e, dalla relazione $3n - s = l - i$, $i = 1$.
:::
::::

:::definizione{#trave-gerber titolo="Trave Gerber"}
Una **trave Gerber** è una trave rettilinea su più appoggi resa isostatica con cerniere interne. Una trave continua con una cerniera e $k - 1$ carrelli, cioè su $k$ appoggi, è un corpo con $s = k + 1$ ed è iperstatica con $i = k - 2$. Ogni cerniera interna aggiunge un corpo e due vincoli semplici, quindi aumenta $3n - s$ di uno; per arrivare a $3n - s = 0$ servono perciò $k - 2$ cerniere interne.

Il numero di cerniere dà soltanto la condizione necessaria. La loro posizione deve permettere di analizzare la trave per passi, partendo da una parte vincolata al suolo in modo isostatico, la trave *portante*, e proseguendo con le parti che vi si appoggiano, le travi *portate*. Una trave su quattro appoggi con la cerniera fissa all'estremo sinistro e le due cerniere interne nella prima campata, per esempio, è labile.
:::

:::osservazione{#maglia-chiusa titolo="Telai con maglie chiuse"}
Il conteggio presuppone che nessun corpo contenga anelli chiusi. Un telaio a maglia chiusa con tutti i nodi rigidi si apre con un taglio in una sezione qualsiasi: il taglio toglie un incastro interno, cioè tre vincoli semplici, e lascia un corpo aperto. I due lembi del taglio appartengono allo stesso corpo rigido, quindi i tre vincoli dell'incastro non impediscono alcuno spostamento in più e aumentano di tre il grado di iperstaticità. Un portale chiuso a quattro lati, con una cerniera e un carrello, ha quindi $l = 0$ e $i = 3$. Ogni cerniera interna inserita nella maglia riduce $i$ di uno, e con tre cerniere non allineate la maglia è internamente isostatica, come un triangolo di tre aste incernierate.

::struttura{nodi="A,0,0;B,5,0;C,5,3;D,0,3" aste="A-B;B-C;C-D;D-A" vincoli="A,cerniera;B,carrello" quote="A,B,5 m,0.9;B,C,3 m" titolo="Portale chiuso con i nodi rigidi: $n = 1$, $s = 3$ vincoli esterni più i $3$ dell'incastro che chiude la maglia, quindi $l = 0$ e $i = 3$"}

:::
