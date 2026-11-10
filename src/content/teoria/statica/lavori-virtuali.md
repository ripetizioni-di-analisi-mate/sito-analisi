---
titolo: Principio dei lavori virtuali
sommario: Come si esprime l'equilibrio di un sistema di corpi rigidi con il lavoro dei carichi per spostamenti compatibili con i vincoli, e come se ne ricavano una reazione vincolare, il momento flettente, il taglio o lo sforzo normale in una sezione e i carichi che equilibrano un meccanismo.
---

## Spostamenti virtuali

Le equazioni cardinali scrivono l'equilibrio con le forze e coinvolgono di solito tutte le reazioni insieme. Il principio dei lavori virtuali scrive la stessa condizione con il lavoro dei carichi per spostamenti immaginari della struttura, e con una scelta opportuna dello spostamento isola una sola incognita.

:::richiamo{titolo="Spostamenti infinitesimi di un corpo rigido piano"}
Ipotesi: corpo rigido nel piano, spostamento infinitesimo individuato dallo spostamento $(u_O, v_O)$ di un punto $O$ e dalla rotazione $\varphi$, positiva in verso antiorario.

Tesi: il punto $P = (x, y)$ si sposta di
$$
u = u_O - \varphi\,(y - y_O) ,
\qquad
v = v_O + \varphi\,(x - x_O) ;
$$
se $\varphi \neq 0$ esiste un solo punto fermo, il centro di rotazione $C = (x_C, y_C)$, e $u = -\varphi\,(y - y_C)$, $v = \varphi\,(x - x_C)$. Si rimanda all'argomento sulla cinematica dei sistemi rigidi piani.
:::

:::definizione{#spostamento-virtuale titolo="Spostamento virtuale"}
Sia data una struttura formata da corpi rigidi. Uno **spostamento virtuale** è un insieme di spostamenti infinitesimi rigidi, uno per ciascun corpo, che rispetta tutti i vincoli. Si indica con il simbolo $\delta$: $\delta u$ e $\delta v$ sono le componenti orizzontale e verticale dello spostamento di un punto, $\delta\varphi$ la rotazione di un corpo. Rispettare i vincoli significa che lo spostamento è **compatibile**: il punto di una cerniera fissa resta fermo, il punto di un carrello si sposta parallelamente al piano di scorrimento, un incastro annulla spostamento e rotazione del suo punto, e in una cerniera interna il punto ha lo stesso spostamento come punto dei due corpi che collega.

Lo spostamento è immaginato con i carichi fermi al loro valore e serve soltanto a scrivere una condizione di equilibrio. Una struttura isostatica ammette solo lo spostamento virtuale nullo. Togliendo un vincolo semplice a una struttura isostatica si ottiene invece un meccanismo con un grado di libertà, e i suoi spostamenti virtuali sono tutti multipli di uno solo.
:::

:::esempio{titolo="Trave con due carrelli"}
La trave in figura ha in $A = (0, 0)$ un carrello che scorre su un piano orizzontale e in $B = (6, 0)$ un carrello che scorre su un piano inclinato di $45^\circ$. Ha tre gradi di libertà e due vincoli semplici, quindi un grado di libertà. Lo spostamento di $A$ è orizzontale, perciò il centro $C$ sta sulla verticale per $A$; lo spostamento di $B$ è parallelo al piano inclinato, perciò $C$ sta anche sulla normale al piano condotta da $B$. Le due rette si incontrano in $C = (0, 6)$, e ogni spostamento virtuale è una rotazione $\delta\varphi$ attorno a questo punto: $\delta u_A = 6\,\delta\varphi$, $\delta v_A = 0$, e $B$ si sposta di $(6\,\delta\varphi, 6\,\delta\varphi)$, parallelamente al piano.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,carrello;B,carrello,315" tratteggi="0,0 0,6 6,0;0.72,0 6.72,0.72" punti="0,6,C,centro" titolo="Le normali ai piani di scorrimento dei due carrelli si incontrano nel centro di rotazione $C$; tratteggiata la configurazione spostata, con lo spostamento ingrandito"}

:::

:::attenzione
Gli spostamenti virtuali sono infinitesimi: un punto che ruota attorno al centro si sposta sulla perpendicolare al raggio, e il conto non segue l'arco di circonferenza. Per la trave $AB$ che ruota di $\delta\varphi$ attorno ad $A = (0, 0)$, il punto $B = (6, 0)$ ha $\delta u_B = 0$ e $\delta v_B = 6\,\delta\varphi$. Una rotazione finita di $10^\circ$ sposterebbe $B$ anche in orizzontale, di $6\,(1 - \cos 10^\circ) \approx 0{,}09\,\mathrm{m}$, ma questo termine è di secondo ordine nell'angolo e nel lavoro virtuale non compare.
:::

## Lavoro virtuale di forze e coppie

Per uno spostamento virtuale ogni carico compie un lavoro, che si calcola come il lavoro di una forza costante per uno spostamento piccolo.

:::definizione{#lavoro-virtuale titolo="Lavoro virtuale"}
Il **lavoro virtuale** di una forza $\vec{F} = (F_x, F_y)$ applicata nel punto $P$, per lo spostamento virtuale $(\delta u_P, \delta v_P)$ di $P$, è
$$
\delta L = F_x\,\delta u_P + F_y\,\delta v_P .
$$
Il lavoro virtuale di una coppia $\mathcal{M}$ applicata a un corpo che ruota di $\delta\varphi$ è $\delta L = \mathcal{M}\,\delta\varphi$, con $\mathcal{M}$ e $\delta\varphi$ positivi in verso antiorario. Il lavoro è positivo quando la forza e lo spostamento del suo punto sono concordi. Una forza di $10\,\mathrm{kN}$ verso il basso, $F_y = -10\,\mathrm{kN}$, applicata in un punto con $\delta v = -3\,\mathrm{m} \cdot \delta\varphi$, compie il lavoro $\delta L = (-10) \cdot (-3\,\delta\varphi) = 30\,\mathrm{kN\,m} \cdot \delta\varphi$, perché il punto si abbassa nel verso della forza quando $\delta\varphi > 0$.
:::

::::teorema{#lavoro-corpo-rigido titolo="Lavoro virtuale su un corpo rigido"}
Sia applicato a un corpo rigido un sistema di forze e coppie con risultante $(R_x, R_y)$ e momento risultante $M_O$ rispetto al punto $O$. Per lo spostamento rigido $(\delta u_O, \delta v_O, \delta\varphi)$ il lavoro virtuale complessivo è
$$
\delta L = R_x\,\delta u_O + R_y\,\delta v_O + M_O\,\delta\varphi .
$$
In particolare, se il corpo ruota attorno al centro $C$, allora $\delta L = M_C\,\delta\varphi$: il lavoro di tutti i carichi del corpo è il loro momento rispetto al centro di rotazione per la rotazione. Nei conti si usa questa forma. Per una trave che ruota attorno ad $A$, una forza di $12\,\mathrm{kN}$ verso il basso a $8\,\mathrm{m}$ da $A$ ha momento $M_A = -96\,\mathrm{kN\,m}$ e compie il lavoro $-96\,\mathrm{kN\,m} \cdot \delta\varphi$.

:::dimostrazione
Si sommano i lavori delle forze $\vec{F}_i$ applicate nei punti $(x_i, y_i)$ e delle coppie $\mathcal{M}_k$, scrivendo gli spostamenti con le formule dello spostamento rigido:
$$
\begin{aligned}
\delta L &= \sum_i \big[ F_{x,i}\,\big(\delta u_O - \delta\varphi\,(y_i - y_O)\big) + F_{y,i}\,\big(\delta v_O + \delta\varphi\,(x_i - x_O)\big) \big] + \sum_k \mathcal{M}_k\,\delta\varphi \\[6pt]
&= \Big( \sum_i F_{x,i} \Big) \delta u_O + \Big( \sum_i F_{y,i} \Big) \delta v_O + \Big[ \sum_i \big( (x_i - x_O)\,F_{y,i} - (y_i - y_O)\,F_{x,i} \big) + \sum_k \mathcal{M}_k \Big] \delta\varphi .
\end{aligned}
$$
I primi due coefficienti sono le componenti della risultante. Il terzo è il momento risultante rispetto a $O$, perché $(x_i - x_O)\,F_{y,i} - (y_i - y_O)\,F_{x,i}$ è il momento di $\vec{F}_i$ rispetto a $O$, positivo in verso antiorario. Se $O = C$ è il centro di rotazione, allora $\delta u_C = \delta v_C = 0$ e resta $\delta L = M_C\,\delta\varphi$.
:::
::::

:::osservazione{#lavoro-carico-distribuito titolo="Lavoro di un carico distribuito"}
Un carico verticale $q(x)$, positivo verso il basso, applicato su un tratto di un solo corpo, compie il lavoro
$$
\delta L = -\int q(x)\,\delta v(x)\,dx .
$$
Sul corpo $\delta v(x) = \delta\varphi\,(x - x_C)$ è una funzione di primo grado, quindi l'integrale vale $-Q\,\delta v(x_Q)$, dove $Q$ è la risultante del carico e $x_Q$ l'ascissa del baricentro del suo diagramma: il carico si sostituisce con la risultante, come nelle equazioni cardinali. Questo segue dal teorema sul lavoro virtuale su un corpo rigido. Un carico che si estende su due corpi si divide nelle due parti, una per corpo, perché i due corpi hanno spostamenti diversi. Per $q = 4\,\mathrm{kN/m}$ su un tratto lungo $6\,\mathrm{m}$ che ruota attorno a un estremo, $Q = 24\,\mathrm{kN}$ a $3\,\mathrm{m}$ dal centro e $\delta L = -24 \cdot 3\,\delta\varphi = -72\,\mathrm{kN\,m} \cdot \delta\varphi$.
:::

## Principio dei lavori virtuali per il corpo rigido

Il principio si dimostra prima per un corpo libero, poi per un corpo vincolato, dove le reazioni scompaiono dal conto.

::::teorema{#plv-corpo-libero titolo="Principio dei lavori virtuali per il corpo rigido libero"}
Sia un corpo rigido piano soggetto a un sistema di forze e coppie. Il sistema soddisfa le equazioni cardinali della statica se e solo se il suo lavoro virtuale è nullo per ogni spostamento rigido infinitesimo $(\delta u_O, \delta v_O, \delta\varphi)$.

Le tre equazioni cardinali e le tre condizioni sul lavoro sono quindi due modi di dire la stessa cosa. Lo spostamento $\delta u_O = 1$, $\delta v_O = 0$, $\delta\varphi = 0$, una traslazione orizzontale, riproduce l'equazione di traslazione orizzontale; una rotazione attorno ad $A$ riproduce l'equazione di rotazione attorno ad $A$.

:::dimostrazione
Per il teorema sul lavoro virtuale su un corpo rigido $\delta L = R_x\,\delta u_O + R_y\,\delta v_O + M_O\,\delta\varphi$. Se valgono le equazioni cardinali, allora $R_x = R_y = M_O = 0$, e quindi $\delta L = 0$ per ogni spostamento. Viceversa, se $\delta L = 0$ per ogni spostamento, si sceglie $(\delta u_O, \delta v_O, \delta\varphi) = (1, 0, 0)$ e si ottiene $R_x = 0$; con $(0, 1, 0)$ si ottiene $R_y = 0$ e con $(0, 0, 1)$ si ottiene $M_O = 0$. Le tre condizioni sono le equazioni cardinali.
:::
::::

:::definizione{#vincoli-lisci titolo="Vincoli lisci e bilaterali"}
Un vincolo semplice impedisce lo spostamento di un punto $P$ in una direzione $\vec{n}$, oppure impedisce la rotazione. È **bilaterale** se impedisce lo spostamento nei due versi di $\vec{n}$, ed è **liscio** se la sua reazione è diretta come $\vec{n}$, senza componente nella direzione in cui il punto è libero di muoversi. Il carrello è liscio quando non c'è attrito sul piano di scorrimento, e allora la reazione è normale al piano. In questo argomento tutti i vincoli sono lisci e bilaterali.
:::

::::teorema{#lavoro-reazioni titolo="Lavoro delle reazioni dei vincoli lisci"}
Siano i vincoli lisci e bilaterali. Allora le reazioni vincolari compiono lavoro nullo per ogni spostamento virtuale compatibile.

Per questo motivo le reazioni non compaiono nel principio dei lavori virtuali, e un'equazione di lavoro contiene solo le reazioni dei vincoli che si sono tolti.

:::dimostrazione
Si considera un vincolo semplice che impedisce lo spostamento del punto $P$ nella direzione $\vec{n}$. La sua reazione è $r\,\vec{n}$, perché il vincolo è liscio, e lo spostamento compatibile soddisfa $\vec{n} \cdot \delta\vec{s}_P = 0$, perché il vincolo è bilaterale. Il lavoro della reazione è quindi $r\,\vec{n} \cdot \delta\vec{s}_P = 0$. Un vincolo che impedisce la rotazione esplica una coppia reattiva $m$ e impone $\delta\varphi = 0$, perciò il suo lavoro $m\,\delta\varphi$ è nullo.
:::
::::

:::richiamo{titolo="Righe di una matrice e nucleo"}
Ipotesi: $C$ matrice con $m$ righe e $k$ colonne, $\vec{f}$ vettore di $\mathbb{R}^k$.

Tesi: $\vec{f}$ è combinazione lineare delle righe di $C$ se e solo se $\vec{f} \cdot \vec{q} = 0$ per ogni $\vec{q}$ con $C\vec{q} = \vec{0}$. In simboli, lo spazio delle righe è il complemento ortogonale del nucleo. Si rimanda agli argomenti di Algebra lineare sui sistemi lineari e il rango e sul prodotto scalare e l'ortogonalità.
:::

::::teorema{#plv-corpo-vincolato titolo="Principio dei lavori virtuali per il corpo rigido vincolato"}
Sia un corpo rigido piano con vincoli lisci e bilaterali, soggetto a forze e coppie assegnate. Il corpo è in equilibrio, cioè esistono reazioni vincolari che insieme ai carichi soddisfano le equazioni cardinali, se e solo se il lavoro virtuale dei carichi assegnati è nullo per ogni spostamento virtuale compatibile:
$$
\delta L = 0 .
$$
Le reazioni non compaiono nella condizione. Per un corpo isostatico l'unico spostamento compatibile è quello nullo e la condizione vale sempre, coerentemente con il fatto che le reazioni si trovano per qualsiasi carico. Il principio diventa uno strumento di calcolo quando si tolgono dei vincoli e si lavora sul meccanismo che ne nasce.

:::dimostrazione
Si raccolgono le tre componenti dello spostamento nel vettore $\vec{q} = (\delta u_O, \delta v_O, \delta\varphi)$ e la risultante e il momento dei carichi nel vettore $\vec{f} = (R_x, R_y, M_O)$, così che $\delta L = \vec{f} \cdot \vec{q}$ per il teorema sul lavoro virtuale su un corpo rigido. Il vincolo semplice $j$ impedisce lo spostamento del punto $P_j$ nella direzione $\vec{n}_j$. Lo spostamento $\vec{n}_j \cdot \delta\vec{s}_{P_j}$ è una funzione lineare di $\vec{q}$, che si scrive $\vec{a}_j \cdot \vec{q}$; i vettori $\vec{a}_j$ sono le righe della matrice $C$ dei vincoli, e lo spostamento è compatibile se e solo se $C\vec{q} = \vec{0}$.

La reazione $r_j\,\vec{n}_j$ ha lavoro $r_j\,\vec{a}_j \cdot \vec{q}$ per ogni $\vec{q}$. Per il teorema sul lavoro virtuale su un corpo rigido, lo stesso lavoro è il prodotto scalare di $\vec{q}$ con il vettore formato dalla risultante e dal momento della reazione. I due prodotti sono uguali per ogni $\vec{q}$, quindi quel vettore è $r_j\,\vec{a}_j$. Le equazioni cardinali per carichi e reazioni sono allora
$$
\vec{f} + \sum_j r_j\,\vec{a}_j = \vec{0} ,
$$
e hanno soluzione se e solo se $\vec{f}$ è combinazione lineare delle righe di $C$. Per il richiamo sulle righe di una matrice questo accade se e solo se $\vec{f} \cdot \vec{q} = 0$ per ogni $\vec{q}$ con $C\vec{q} = \vec{0}$, cioè se e solo se $\delta L = 0$ per ogni spostamento virtuale compatibile.
:::
::::

## Sistemi di corpi rigidi e meccanismi

Le strutture dell'esame sono formate da più corpi collegati da cerniere interne. Il principio vale anche per loro, e le forze scambiate nelle cerniere non compaiono.

::::teorema{#plv-sistemi titolo="Principio dei lavori virtuali per i sistemi di corpi rigidi"}
Sia un sistema piano di $n$ corpi rigidi con vincoli esterni e interni lisci e bilaterali, soggetto a forze e coppie assegnate. Il sistema è in equilibrio, cioè esistono reazioni esterne e forze nei vincoli interni che soddisfano le equazioni cardinali di ogni corpo, se e solo se
$$
\delta L = 0
$$
per ogni spostamento virtuale compatibile con tutti i vincoli, dove $\delta L$ è il lavoro virtuale dei soli carichi assegnati.

:::dimostrazione
Si ripete la dimostrazione per il corpo vincolato con il vettore $\vec{q}$ di $\mathbb{R}^{3n}$ che raccoglie le tre componenti dello spostamento di ogni corpo e con il vettore $\vec{f}$ delle risultanti e dei momenti dei carichi di ogni corpo. Ogni vincolo semplice, esterno o interno, impone una condizione lineare $\vec{a}_j \cdot \vec{q} = 0$. Nella cerniera interna $K$ tra i corpi $1$ e $2$, per esempio, la condizione sulla componente orizzontale è $\delta u_K^{(2)} - \delta u_K^{(1)} = 0$, e la forza scambiata è $X_K$ sul corpo $2$ e $-X_K$ sul corpo $1$; il suo lavoro $X_K\,(\delta u_K^{(2)} - \delta u_K^{(1)})$ è proprio $X_K\,\vec{a}_j \cdot \vec{q}$. Come per il corpo singolo, le equazioni cardinali di tutti i corpi si scrivono $\vec{f} + \sum_j r_j\,\vec{a}_j = \vec{0}$, e il richiamo sulle righe di una matrice dà la tesi.
:::
::::

:::osservazione{#forze-interne-cerniera titolo="Forze nelle cerniere interne"}
Nella dimostrazione compare il fatto che azione e reazione in una cerniera interna compiono lavoro complessivo nullo, perché il punto della cerniera ha lo stesso spostamento sui due corpi. Per questo il principio si scrive per l'intera struttura senza smontarla: le forze $X_K$, $Y_K$ servono solo se si cercano proprio loro, e allora si tolgono dalla cerniera come si tolgono le reazioni esterne.
:::

:::definizione{#meccanismo titolo="Meccanismo e diagramma degli spostamenti"}
Un **meccanismo** è una struttura labile con un grado di libertà. I suoi spostamenti virtuali dipendono da un solo parametro, di solito la rotazione $\delta\varphi_1$ di un corpo, e si descrivono con i centri di rotazione assoluti $C_1$, $C_2$, … e relativi $C_{12}$, $C_{23}$, …. Le rotazioni dei corpi si legano attraverso i centri relativi: il punto $C_{12}$ ha lo stesso spostamento come punto dei due corpi, quindi per i corpi su una retta orizzontale
$$
\delta\varphi_1\,(x_{C_{12}} - x_{C_1}) = \delta\varphi_2\,(x_{C_{12}} - x_{C_2}) .
$$
Sul corpo $k$ lo spostamento verticale è $\delta v = \delta\varphi_k\,(x - x_{C_k})$ e quello orizzontale è $\delta u = -\delta\varphi_k\,(y - y_{C_k})$. Il **diagramma degli spostamenti verticali** è perciò una spezzata, con un segmento per ogni corpo che si annulla sulla verticale del suo centro. Da questo diagramma si leggono gli spostamenti dei punti in cui agiscono i carichi verticali, e quindi il loro lavoro. Le costruzioni dei centri si trovano negli argomenti sulla cinematica dei sistemi rigidi piani e sull'analisi cinematica.
:::

:::esempio{titolo="Centri di un portale a tre cerniere senza una componente di reazione"}
Il portale in figura ha le cerniere fisse $A = (0, 0)$ e $B = (8, 0)$ e la cerniera interna $C = (4, 4)$. Se in $B$ si lascia libero lo spostamento orizzontale, al posto della cerniera c'è un carrello e la struttura diventa un meccanismo. Il centro $C_1$ del corpo di sinistra è $A$ e il centro relativo è la cerniera $C$; il centro $C_2$ sta sulla verticale per $B$ e, per il primo teorema delle catene cinematiche, sulla retta $AC$, di equazione $y = x$, quindi $C_2 = (8, 8)$. Il punto $C$ si sposta di $(-4\,\delta\varphi_1, 4\,\delta\varphi_1)$ come punto del corpo $1$ e di $(4\,\delta\varphi_2, -4\,\delta\varphi_2)$ come punto del corpo $2$, perciò $\delta\varphi_2 = -\delta\varphi_1$; allora $\delta u_B = -\delta\varphi_2\,(0 - 8) = -8\,\delta\varphi_1$. Il lavoro di una reazione orizzontale in $B$ è $H_B\,\delta u_B$.

::struttura{nodi="A,0,0;D,0,4;C,4,4;E,8,4;B,8,0" aste="A-D;D-C;C-E;E-B" cerniere="C" vincoli="A,cerniera;B,carrello" tratteggi="0,0 8,8;8,0 8,8" punti="8,8,C_2,centro" titolo="Il centro $C_2$ del corpo $CEB$ è l'intersezione della verticale per $B$ con la retta che passa per $C_1 = A$ e per $C_{12} = C$"}

:::

## Calcolo di una reazione vincolare

In una struttura isostatica ogni reazione si ricava da un'equazione sola, costruita togliendo il vincolo che la esplica.

:::definizione{#spostamento-coniugato titolo="Spostamento coniugato"}
Sia $X$ una reazione vincolare semplice, oppure un'azione interna in una sezione. Si toglie il vincolo che esplica $X$ e si applica $X$ come carico ai punti o ai corpi su cui agiva. Lo **spostamento coniugato** $\delta_X$ è la grandezza cinematica per cui il lavoro virtuale di $X$ vale $X\,\delta_X$. Per le reazioni:

- reazione $R_B$ di un carrello o di un pendolo: si toglie il vincolo e $\delta_X$ è lo spostamento di $B$ nel verso positivo di $R_B$; per una reazione verticale $\delta_X = \delta v_B$;
- componente $V_A$ di una cerniera: si sostituisce la cerniera con un carrello che scorre in verticale, e $\delta_X = \delta v_A$; per $H_A$ si usa un carrello che scorre in orizzontale, e $\delta_X = \delta u_A$;
- momento $M_A$ di un incastro: si sostituisce l'incastro con una cerniera, e $\delta_X = \delta\varphi_1$, rotazione del corpo incastrato;
- componente $V_A$ o $H_A$ di un incastro: si sostituisce l'incastro con un doppio pendolo che lascia libera la traslazione nella direzione della componente, e $\delta_X$ è lo spostamento di $A$ in quella direzione.
:::

::::teorema{#calcolo-reazione titolo="Reazione vincolare con il principio dei lavori virtuali"}
Sia una struttura isostatica di corpi rigidi con vincoli lisci e bilaterali, e sia $X$ una reazione semplice. Si toglie il vincolo che esplica $X$ e si considera uno spostamento virtuale non nullo del meccanismo che ne nasce. Allora
$$
X\,\delta_X + \delta L = 0 ,
\qquad\text{quindi}\qquad
X = -\frac{\delta L}{\delta_X} ,
$$
dove $\delta L$ è il lavoro dei carichi assegnati. Il valore di $X$ non dipende dallo spostamento scelto, perché $\delta L$ e $\delta_X$ sono proporzionali allo stesso parametro.

:::dimostrazione
La struttura privata del vincolo, soggetta ai carichi e alla forza $X$ trattata come carico, è in equilibrio con le reazioni dei vincoli rimasti, perché queste e $X$ sono le reazioni della struttura originaria. Per il principio dei lavori virtuali per i sistemi di corpi rigidi il lavoro di carichi e di $X$ è nullo per ogni spostamento compatibile con i vincoli rimasti, cioè $X\,\delta_X + \delta L = 0$. Lo spostamento coniugato non è nullo: se lo fosse, lo spostamento del meccanismo rispetterebbe anche il vincolo tolto, e la struttura originaria sarebbe labile. Quindi si può dividere per $\delta_X$.
:::
::::

:::esempio{titolo="Reazioni di una trave con sbalzo"}
La trave in figura ha una cerniera in $A = (0, 0)$, un carrello in $B = (6, 0)$ e lo sbalzo $BC$ lungo $2\,\mathrm{m}$, con $q = 4\,\mathrm{kN/m}$ su $AB$ e $F = 12\,\mathrm{kN}$ verso il basso in $C$.

::struttura{nodi="A,0,0;B,6,0;C,8,0" aste="A-C" vincoli="A,cerniera;B,carrello" carichi="A,B,0.6,0.6,q" forze="C,0,-1.8,F" quote="A,B,6 m,1;B,C,2 m,1" titolo="Trave con sbalzo: $q = 4\,\mathrm{kN/m}$ su $AB$, $F = 12\,\mathrm{kN}$ in $C$"}

Per $R_B$ si toglie il carrello: la trave ruota attorno ad $A$ di $\delta\varphi$, con $\delta v_B = 6\,\delta\varphi$ e $\delta v_C = 8\,\delta\varphi$. Il carico distribuito ha risultante $24\,\mathrm{kN}$ a $3\,\mathrm{m}$ da $A$. Allora
$$
R_B \cdot 6\,\delta\varphi - 24 \cdot 3\,\delta\varphi - 12 \cdot 8\,\delta\varphi = 0 ,
\qquad
R_B = \frac{72 + 96}{6} = 28\,\mathrm{kN} .
$$
Per $V_A$ si sostituisce la cerniera con un carrello che scorre in verticale: la trave ruota attorno a $B$, con $\delta v_A = -6\,\delta\varphi$, $\delta v_C = 2\,\delta\varphi$ e il baricentro del carico in $x = 3$ con $\delta v = -3\,\delta\varphi$. Allora $-6\,V_A\,\delta\varphi + 24 \cdot 3\,\delta\varphi - 12 \cdot 2\,\delta\varphi = 0$, da cui $V_A = 8\,\mathrm{kN}$, verso l'alto. Le due reazioni sommano $36\,\mathrm{kN}$, uguale al carico totale $24 + 12$, come richiede la traslazione verticale.

::struttura{nodi="A,0,0;B,6,0;C,8,0" aste="A-C" vincoli="A,cerniera" reazioni="B,0,1.8,R_B" carichi="A,B,0.6,0.6,q" forze="C,0,-1.8,F" tratteggi="0,0 8,-1.6" titolo="Tolto il carrello, la trave ruota attorno ad $A$: $\delta v_B = 6\,\delta\varphi$ e $\delta v_C = 8\,\delta\varphi$ (tratteggiata la configurazione per $\delta\varphi < 0$)"}

:::

## Caratteristiche della sollecitazione in una sezione

Lo stesso procedimento dà il momento flettente, il taglio o lo sforzo normale in una sezione $S$. Al posto di un vincolo esterno si toglie la parte di continuità della trave che trasmette l'azione cercata.

:::definizione{#sconnessioni titolo="Sconnessioni semplici"}
Una **sconnessione** nella sezione $S$ di una trave sostituisce la continuità con un vincolo interno doppio, che trasmette due delle tre azioni interne e lascia libero il movimento relativo coniugato alla terza:

- la **cerniera** in $S$ trasmette $N$ e $T$ e lascia libera la rotazione relativa; serve per $M$;
- il **doppio pendolo** con le bielle parallele all'asse della trave trasmette $N$ e $M$ e lascia libero lo scorrimento relativo perpendicolare all'asse; serve per $T$;
- il **doppio pendolo assiale**, con le bielle perpendicolari all'asse, trasmette $T$ e $M$ e lascia libero lo scorrimento relativo lungo l'asse; serve per $N$.

L'azione cercata si applica come coppia di carichi uguali e opposti sulle due facce di $S$, con il verso positivo della convenzione dell'argomento sulle caratteristiche della sollecitazione: $N > 0$ di trazione, $T > 0$ quando tende a far ruotare il concio in verso orario, $M > 0$ quando tende le fibre inferiori. Si indicano con gli indici $s$ e $d$ il tratto a sinistra e quello a destra di $S$.
:::

::::teorema{#momento-flettente-plv titolo="Momento flettente con il principio dei lavori virtuali"}
Sia una trave isostatica e sia $S$ una sua sezione. Si inserisce una cerniera in $S$ e si considera uno spostamento virtuale del meccanismo, con rotazioni $\delta\varphi_s$ e $\delta\varphi_d$ dei due tratti. Allora
$$
M\,\Delta\varphi + \delta L = 0 ,
\qquad
\Delta\varphi = \delta\varphi_s - \delta\varphi_d .
$$
Quando $\Delta\varphi < 0$ la cerniera si abbassa e i due tratti formano una cuspide rivolta verso il basso, la deformazione che corrisponde a fibre inferiori tese. Il momento in $S$ si ottiene allora come $M = -\dfrac{\delta L}{\Delta\varphi}$.

:::dimostrazione
Il momento positivo agisce sul tratto di sinistra in verso antiorario e sul tratto di destra in verso orario, quindi il suo lavoro è $M\,\delta\varphi_s - M\,\delta\varphi_d = M\,\Delta\varphi$. La trave con la cerniera, soggetta ai carichi e alle due coppie $M$, è in equilibrio con le reazioni della trave originaria; per il principio dei lavori virtuali per i sistemi di corpi rigidi il lavoro complessivo è nullo.
:::
::::

:::esempio{titolo="Momento in mezzeria della trave con sbalzo"}
Per la trave con sbalzo dell'esempio sulle reazioni si cerca $M$ in $S = (3, 0)$. Con la cerniera in $S$ il tratto $AS$ ruota attorno ad $A$ di $\delta\varphi_s$ e il tratto $SC$ attorno a $B$ di $\delta\varphi_d$. Il punto $S$ ha lo stesso spostamento sui due tratti, $3\,\delta\varphi_s = (3 - 6)\,\delta\varphi_d$, quindi $\delta\varphi_d = -\delta\varphi_s$ e $\Delta\varphi = 2\,\delta\varphi_s$. Il carico su $AS$ ha risultante $12\,\mathrm{kN}$ in $x = 1{,}5$, con $\delta v = 1{,}5\,\delta\varphi_s$; quello su $SB$ ha risultante $12\,\mathrm{kN}$ in $x = 4{,}5$, con $\delta v = -\delta\varphi_s\,(4{,}5 - 6) = 1{,}5\,\delta\varphi_s$; in $C$ si ha $\delta v_C = -2\,\delta\varphi_s$. Allora
$$
\delta L = -12 \cdot 1{,}5\,\delta\varphi_s - 12 \cdot 1{,}5\,\delta\varphi_s + 12 \cdot 2\,\delta\varphi_s = -12\,\delta\varphi_s ,
\qquad
M = -\frac{-12\,\delta\varphi_s}{2\,\delta\varphi_s} = 6\,\mathrm{kN\,m} ,
$$
e le fibre inferiori sono tese. Con l'equilibrio del tratto $AS$ si ritrova $M = V_A \cdot 3 - 12 \cdot 1{,}5 = 24 - 18 = 6\,\mathrm{kN\,m}$.

::struttura{nodi="A,0,0;S,3,0;B,6,0;C,8,0" aste="A-C" cerniere="S" vincoli="A,cerniera;B,carrello" coppie="2 0,1,M;4 0,-1,M" tratteggi="0,0 3,-0.9 6,0 8,0.6" titolo="Con la cerniera in $S$ il tratto $AS$ ruota attorno ad $A$ e il tratto $SC$ attorno a $B$, con $\delta\varphi_d = -\delta\varphi_s$ (tratteggiato lo spostamento per $\delta\varphi_s < 0$)"}

:::

::::teorema{#taglio-plv titolo="Taglio con il principio dei lavori virtuali"}
Sia una trave isostatica ad asse orizzontale e sia $S$ una sua sezione. Si inserisce in $S$ un doppio pendolo con le bielle parallele all'asse; i due tratti ruotano dello stesso angolo e si scostano in verticale. Allora
$$
T\,\Delta v + \delta L = 0 ,
\qquad
\Delta v = \delta v_d - \delta v_s ,
$$
dove $\delta v_s$ e $\delta v_d$ sono gli spostamenti verticali di $S$ come punto del tratto di sinistra e del tratto di destra.

:::dimostrazione
Il taglio positivo agisce sulla faccia del tratto di sinistra verso il basso e sulla faccia del tratto di destra verso l'alto, quindi il suo lavoro è $-T\,\delta v_s + T\,\delta v_d = T\,\Delta v$. Il doppio pendolo impedisce la rotazione relativa e lo scorrimento assiale, perciò le altre due azioni interne, trasmesse dal vincolo, non compiono lavoro. Il principio dei lavori virtuali per i sistemi di corpi rigidi dà la tesi.
:::
::::

:::esempio{titolo="Taglio nella trave con sbalzo"}
Nella stessa trave si cerca $T$ in $S = (3, 0)$. Il tratto $AS$ ruota attorno ad $A$ e il tratto $SC$ attorno a $B$ dello stesso angolo $\delta\varphi$. Allora $\delta v_s = 3\,\delta\varphi$ e $\delta v_d = (3 - 6)\,\delta\varphi = -3\,\delta\varphi$, perciò $\Delta v = -6\,\delta\varphi$. Il carico su $AS$ ha $\delta v = 1{,}5\,\delta\varphi$ nel baricentro, quello su $SB$ ha $\delta v = -1{,}5\,\delta\varphi$, e $\delta v_C = 2\,\delta\varphi$:
$$
\delta L = -12 \cdot 1{,}5\,\delta\varphi + 12 \cdot 1{,}5\,\delta\varphi - 12 \cdot 2\,\delta\varphi = -24\,\delta\varphi ,
\qquad
T = -\frac{-24\,\delta\varphi}{-6\,\delta\varphi} = -4\,\mathrm{kN} .
$$
Con l'equilibrio del tratto $AS$ si ritrova $T = V_A - 4 \cdot 3 = 8 - 12 = -4\,\mathrm{kN}$.

::struttura{nodi="A,0,0;S,3,0;B,6,0;C,8,0" aste="A-C" vincoli="A,cerniera;B,carrello" forze="2.9 0,0,-1.2,T;3.1 0,0,1.2,T" tratteggi="0,0 3,0.9;3,-0.9 6,0 8,0.6" titolo="Con il doppio pendolo in $S$ i due tratti restano paralleli e si scostano di $\Delta v = -6\,\delta\varphi$ (tratteggiato lo spostamento per $\delta\varphi > 0$)"}

:::

::::teorema{#sforzo-normale-plv titolo="Sforzo normale con il principio dei lavori virtuali"}
Sia una trave isostatica e sia $S$ una sua sezione. Si inserisce in $S$ un doppio pendolo assiale; i due tratti si scostano lungo l'asse. Allora
$$
N\,\Delta w + \delta L = 0 ,
\qquad
\Delta w = \delta w_s - \delta w_d ,
$$
dove $\delta w_s$ e $\delta w_d$ sono gli spostamenti di $S$ lungo l'asse, nel verso da sinistra a destra, come punto dei due tratti. Equivalentemente $N = \dfrac{\delta L}{\delta w_d - \delta w_s}$, con $\delta w_d - \delta w_s$ allungamento della trave in $S$.

:::dimostrazione
Lo sforzo normale di trazione tira il tratto di sinistra verso destra e il tratto di destra verso sinistra, quindi il suo lavoro è $N\,\delta w_s - N\,\delta w_d = N\,\Delta w$. Il doppio pendolo assiale impedisce la rotazione relativa e lo scorrimento perpendicolare all'asse, perciò $T$ e $M$ non compiono lavoro, e il principio dei lavori virtuali dà la tesi.
:::
::::

:::esempio{titolo="Sforzo normale per una forza orizzontale"}
La trave in figura ha una cerniera in $A = (0, 0)$ e un carrello in $B = (6, 0)$; in $x = 3$ agisce la forza verticale $F = 10\,\mathrm{kN}$ e in $B$ la forza orizzontale $H = 5\,\mathrm{kN}$ verso sinistra. Per $N$ in $S = (2, 0)$ si inserisce un doppio pendolo assiale. Il doppio pendolo assiale impone ai due tratti la stessa rotazione e lo stesso spostamento verticale in $S$, quindi $SB$ si muove come $AS$ più una traslazione orizzontale. Una rotazione $\delta\varphi$ di $AS$ attorno ad $A$ darebbe a $B$ lo spostamento verticale $6\,\delta\varphi$, che il carrello impedisce; perciò $\delta\varphi = 0$, il tratto $AS$ resta fermo e $SB$ trasla in orizzontale di $\delta w_d$. Allora $\Delta w = -\delta w_d$, la forza $F$ non compie lavoro e $H$ compie il lavoro $-5\,\delta w_d$. Il principio dei lavori virtuali dà
$$
N \cdot (-\delta w_d) - 5\,\delta w_d = 0 ,
\qquad
N = -5\,\mathrm{kN} ,
$$
cioè uno sforzo di compressione. Con l'equilibrio alla traslazione orizzontale di tutta la trave $H_A = 5\,\mathrm{kN}$, verso destra, e il tratto $AS$ è in equilibrio con $H_A + N = 0$.

::struttura{nodi="A,0,0;S,2,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" forze="B,-1.2,0,H;3 0,0,-1.2,F" frecce="3.8,0.5,5,0.5,δw_d" titolo="Con il doppio pendolo assiale in $S$ il tratto $SB$ trasla in orizzontale e solo la forza $H$ compie lavoro"}

:::

:::osservazione{#coppia-nella-sezione titolo="Coppia applicata nella sezione"}
Se nella sezione $S$ agisce una coppia concentrata $\mathcal{M}$, il momento flettente salta di $\mathcal{M}$ e si distingue la sezione subito a sinistra da quella subito a destra. Con la cerniera in $S$ la coppia si assegna al tratto di destra per la sezione di sinistra e al tratto di sinistra per la sezione di destra, e il suo lavoro è $\mathcal{M}\,\delta\varphi_d$ oppure $\mathcal{M}\,\delta\varphi_s$. Lo stesso accade per una forza concentrata nella sezione in cui si cerca il taglio.

Con uno spostamento coniugato unitario, $\Delta\varphi = 1$ o $\Delta v = 1$, il diagramma degli spostamenti verticali del meccanismo diventa la linea di influenza della grandezza cercata: è il teorema di Müller-Breslau, trattato nell'argomento sulle linee di influenza.
:::

## Equilibrio delle strutture labili

Una struttura labile ammette spostamenti virtuali non nulli anche senza togliere vincoli. Il principio dice allora per quali carichi c'è equilibrio.

::::teorema{#equilibrio-labili titolo="Equilibrio di una struttura labile"}
Sia una struttura di corpi rigidi con vincoli lisci e bilaterali, labile con grado di labilità $l$, e siano $\delta\vec{q}_1, \dots, \delta\vec{q}_l$ spostamenti virtuali compatibili linearmente indipendenti. La struttura è in equilibrio sotto i carichi assegnati se e solo se il lavoro dei carichi è nullo per ciascuno di essi:
$$
\delta L(\delta\vec{q}_1) = 0 , \quad \dots , \quad \delta L(\delta\vec{q}_l) = 0 .
$$
Per un meccanismo, con $l = 1$, la condizione è una sola equazione che lega i carichi. Un carico che la soddisfa si dice **carico equilibrante** del meccanismo.

:::dimostrazione
Ogni spostamento compatibile è combinazione lineare $\sum_k c_k\,\delta\vec{q}_k$, e il lavoro è lineare nello spostamento, quindi $\delta L = \sum_k c_k\,\delta L(\delta\vec{q}_k)$. Il lavoro è nullo per ogni spostamento compatibile se e solo se è nullo per ciascuno dei $\delta\vec{q}_k$, e il principio dei lavori virtuali per i sistemi di corpi rigidi dà la tesi.
:::
::::

:::esempio{titolo="Forza che equilibra una trave con una cerniera"}
La trave in figura ha una cerniera fissa in $A = (0, 0)$, una cerniera interna in $B = (4, 0)$ e un carrello in $C = (6, 0)$; lo sbalzo arriva in $D = (8, 0)$. Sono $n = 2$ corpi e $s = 5$ vincoli semplici, e i centri $C_1 = A$, $C_{12} = B$ e $C_2 = C$ sono allineati, quindi la struttura è un meccanismo. In $x = 2$ agisce $F_1 = 10\,\mathrm{kN}$ verso il basso; si cerca la forza verticale $F_2$ in $D$ che dà l'equilibrio. Lo spostamento di $B$ sui due corpi dà $4\,\delta\varphi_1 = (4 - 6)\,\delta\varphi_2$, quindi $\delta\varphi_2 = -2\,\delta\varphi_1$, $\delta v(2) = 2\,\delta\varphi_1$ e $\delta v_D = (8 - 6)\,\delta\varphi_2 = -4\,\delta\varphi_1$. Con $F_2$ positiva verso il basso
$$
-10 \cdot 2\,\delta\varphi_1 - F_2 \cdot (-4\,\delta\varphi_1) = 0 ,
\qquad
F_2 = 5\,\mathrm{kN} ,
$$
verso il basso. Con questo valore il corpo $BD$ ruota attorno a $C$ in equilibrio: la forza di $5\,\mathrm{kN}$ che riceve in $B$ dal corpo $AB$ ha braccio $2\,\mathrm{m}$ rispetto a $C$, come $F_2$.

::struttura{nodi="A,0,0;B,4,0;C,6,0;D,8,0" aste="A-D" cerniere="B" vincoli="A,cerniera;C,carrello" forze="2 0,0,-1.6,F_1;D,0,-1.6,F_2" tratteggi="0,0 4,1.2 6,0 8,-1.2" quote="A,B,4 m,1;B,C,2 m,1;C,D,2 m,1" titolo="Meccanismo con $C_1 = A$ e $C_2 = C$: per $\delta\varphi_1 > 0$ la cerniera $B$ si alza e lo sbalzo si abbassa"}

:::

:::attenzione
Tre cerniere allineate formano un meccanismo per spostamenti infinitesimi, e un carico che lavora su quello spostamento non ammette equilibrio. Nella trave con le cerniere fisse $A = (0, 0)$ e $B = (8, 0)$ e la cerniera interna $C = (4, 0)$, il meccanismo ha $\delta v_C = 4\,\delta\varphi_1$. Una forza $P$ verso il basso in $C$ compie il lavoro $-4P\,\delta\varphi_1$, diverso da zero per $\delta\varphi_1 \neq 0$; quindi la struttura non è in equilibrio. Il conto statico porta alla stessa conclusione: con $P$ applicata al corpo $AC$, la rotazione di $AC$ attorno ad $A$ richiede in $C$ una forza verticale $Y_C = P$ dal corpo $CB$, mentre la rotazione di $CB$ attorno a $B$ richiede $Y_C = 0$.
:::
