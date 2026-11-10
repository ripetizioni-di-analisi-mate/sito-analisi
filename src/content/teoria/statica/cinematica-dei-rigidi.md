---
titolo: Cinematica dei sistemi rigidi piani e centro di rotazione
sommario: Come si descrivono gli spostamenti infinitesimi di un corpo rigido piano e di una catena di corpi rigidi per mezzo dei centri di rotazione assoluti e relativi, dei teoremi delle catene cinematiche e dei diagrammi degli spostamenti.
---

## Gradi di libertà del corpo rigido nel piano

:::definizione{#corpo-rigido-piano titolo="Corpo rigido piano"}
Un **corpo rigido piano** è un insieme di punti del piano $xy$ le cui distanze reciproche restano costanti in ogni spostamento. Travi, pilastri e lastre delle strutture piane si schematizzano come corpi rigidi quando le loro deformazioni sono trascurabili rispetto agli spostamenti d'insieme, e in tutta la Statica si adotta questa ipotesi. Il riferimento ha l'asse $x$ orizzontale verso destra, l'asse $y$ verticale verso l'alto e l'asse $z$ uscente dal foglio; le rotazioni sono positive in verso antiorario.
:::

:::definizione{#spostamento-rigido titolo="Spostamento rigido"}
Uno spostamento porta ogni punto $P$ del corpo nella posizione $P'$. Lo spostamento è **rigido** se esistono un punto $O$ del corpo e un angolo $\theta$ tali che, per ogni punto $P$,
$$
P' = O' + R(\theta)\,(P - O) ,
\qquad
R(\theta) = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix} .
$$
In altre parole il corpo trasla insieme a $O$ e ruota dell'angolo $\theta$ attorno a $O$. La matrice $R(\theta)$ è quella della rotazione attorno all'origine, trattata nell'argomento sulle applicazioni lineari di Algebra lineare; poiché $R(\theta)$ conserva le lunghezze, le distanze tra i punti del corpo restano costanti. Si dimostra che ogni spostamento che conserva le distanze senza ribaltare il corpo è di questa forma. Il vettore $\vec{s}_P = P' - P$, di componenti $u_P$ (orizzontale) e $v_P$ (verticale), è lo **spostamento** del punto $P$.
:::

:::definizione{#gradi-di-liberta titolo="Gradi di libertà"}
I **gradi di libertà** di un sistema sono i parametri indipendenti che ne individuano gli spostamenti. Uno spostamento rigido piano è individuato dalle componenti $u_O$, $v_O$ dello spostamento di un punto $O$ e dall'angolo di rotazione, quindi un corpo rigido piano libero ha **tre gradi di libertà**, due traslazioni e una rotazione. Un sistema di $n$ corpi rigidi non collegati tra loro ha $3n$ gradi di libertà. I vincoli (appoggi, cerniere, incastri) impongono condizioni agli spostamenti e riducono i gradi di libertà; la loro classificazione e il conteggio dei vincoli semplici sono trattati nell'argomento sui vincoli e sull'analisi cinematica. In questo argomento i vincoli si considerano solo per l'effetto che hanno sul centro di rotazione.
:::

## Spostamenti rigidi infinitesimi

Le strutture si studiano per spostamenti piccoli rispetto alle dimensioni dei corpi, e per spostamenti piccoli le formule dello spostamento rigido diventano lineari.

:::richiamo{titolo="Formula di Taylor al primo ordine"}
Per $\theta \to 0$, con l'angolo in radianti, valgono $\sin\theta = \theta + o(\theta)$ e $\cos\theta = 1 + o(\theta)$. Si rimanda all'argomento sul calcolo differenziale e Taylor di Analisi 1.
:::

:::richiamo{titolo="Prodotto vettoriale con il versore dell'asse z"}
Per i versori degli assi valgono $\hat{k} \times \hat{\imath} = \hat{\jmath}$ e $\hat{k} \times \hat{\jmath} = -\hat{\imath}$, quindi per un vettore del piano $\hat{k} \times (a\,\hat{\imath} + b\,\hat{\jmath}) = -b\,\hat{\imath} + a\,\hat{\jmath}$: il vettore ruotato di un angolo retto in verso antiorario. Si rimanda all'argomento sui vettori nel piano e nello spazio di Algebra lineare.
:::

::::teorema{#spostamenti-infinitesimi titolo="Spostamenti rigidi infinitesimi"}
Sia $O = (x_O, y_O)$ un punto del corpo con spostamento $(u_O, v_O)$, e sia $\varphi$ la rotazione del corpo. Trascurando i termini di ordine superiore al primo in $\varphi$, lo spostamento del punto $P = (x, y)$ è
$$
u = u_O - \varphi\,(y - y_O) ,
\qquad
v = v_O + \varphi\,(x - x_O) ,
$$
e in forma vettoriale $\vec{s}_P = \vec{s}_O + \varphi\,\hat{k} \times \overrightarrow{OP}$. Gli spostamenti di questa forma si chiamano **spostamenti rigidi infinitesimi** (o atti di moto rigido). Sono lineari nelle coordinate del punto e nei tre parametri $u_O$, $v_O$, $\varphi$, perciò la somma di due spostamenti rigidi infinitesimi è ancora uno spostamento rigido infinitesimo. Per esempio, se $O = (0, 0)$ ha $u_O = 2\,\mathrm{mm}$, $v_O = 0$ e il corpo ruota di $\varphi = 0{,}001\,\mathrm{rad}$, il punto $P = (3, 4)\,\mathrm{m}$ ha $u = 2\,\mathrm{mm} - 0{,}001 \cdot 4\,\mathrm{m} = -2\,\mathrm{mm}$ e $v = 0{,}001 \cdot 3\,\mathrm{m} = 3\,\mathrm{mm}$.

:::dimostrazione
Si scrive la definizione di spostamento rigido con $\theta = \varphi$ e si sottrae $P$ ai due membri. Poiché $O' = O + \vec{s}_O$, si ottiene
$$
\vec{s}_P = P' - P = \vec{s}_O + \big( R(\varphi) - I \big)(P - O) ,
\qquad
R(\varphi) - I = \begin{pmatrix} \cos\varphi - 1 & -\sin\varphi \\ \sin\varphi & \cos\varphi - 1 \end{pmatrix} .
$$
Per la formula di Taylor $\cos\varphi - 1 = o(\varphi)$ e $\sin\varphi = \varphi + o(\varphi)$, quindi al primo ordine
$$
R(\varphi) - I = \begin{pmatrix} 0 & -\varphi \\ \varphi & 0 \end{pmatrix} .
$$
Il prodotto di questa matrice per il vettore $P - O$, di componenti $x - x_O$ e $y - y_O$, ha componenti $-\varphi\,(y - y_O)$ e $\varphi\,(x - x_O)$; sommando $\vec{s}_O$ si ottengono le due formule. Per il richiamo sul prodotto vettoriale, $\hat{k} \times \overrightarrow{OP}$ ha proprio le componenti $-(y - y_O)$ e $x - x_O$, da cui la forma vettoriale.
:::
::::

:::teorema{#proiezioni-uguali titolo="Spostamenti di due punti lungo la congiungente"}
In uno spostamento rigido infinitesimo due punti $P$ e $Q$ del corpo hanno spostamenti con la stessa componente lungo la retta $PQ$:
$$
(\vec{s}_P - \vec{s}_Q) \cdot \overrightarrow{QP} = 0 .
$$
Segue dal teorema degli spostamenti rigidi infinitesimi con $O = Q$, perché $\vec{s}_P - \vec{s}_Q = \varphi\,\hat{k} \times \overrightarrow{QP}$ è perpendicolare a $\overrightarrow{QP}$. È la forma infinitesima della condizione che la distanza tra $P$ e $Q$ resti costante. Per una trave orizzontale significa che tutti i suoi punti hanno lo stesso spostamento orizzontale; se un estremo ha $u = 0$, l'intera trave ha $u = 0$.
:::

## Centro di rotazione

Uno spostamento rigido infinitesimo con $\varphi \neq 0$ è una rotazione attorno a un punto. Trovato questo punto, gli spostamenti di tutti gli altri si scrivono subito.

::::teorema{#centro-di-rotazione titolo="Esistenza del centro di rotazione"}
Sia dato uno spostamento rigido infinitesimo con rotazione $\varphi \neq 0$. Allora esiste uno e un solo punto $C$ del piano con spostamento nullo, detto **centro di rotazione**, di coordinate
$$
x_C = x_O - \frac{v_O}{\varphi} ,
\qquad
y_C = y_O + \frac{u_O}{\varphi} ,
$$
e lo spostamento di ogni punto $P = (x, y)$ è
$$
u = -\varphi\,(y - y_C) ,
\qquad
v = \varphi\,(x - x_C) .
$$
Lo spostamento di $P$ è perpendicolare al segmento $CP$, ha modulo $|\varphi|\,\overline{CP}$ e ha il verso della rotazione. Il centro può stare fuori dal corpo, perché le formule degli spostamenti valgono in tutto il piano, come se il corpo fosse esteso da una lastra rigida a esso solidale.

:::dimostrazione
Un punto $(x, y)$ ha spostamento nullo se e solo se
$$
\begin{cases}
u_O - \varphi\,(y - y_O) = 0 \\
v_O + \varphi\,(x - x_O) = 0
\end{cases}
$$
Poiché $\varphi \neq 0$, la prima equazione ha l'unica soluzione $y = y_O + \dfrac{u_O}{\varphi}$ e la seconda l'unica soluzione $x = x_O - \dfrac{v_O}{\varphi}$. Il punto $C$ così trovato ha spostamento nullo, quindi il teorema degli spostamenti rigidi infinitesimi, applicato con $C$ al posto di $O$, dà $\vec{s}_P = \varphi\,\hat{k} \times \overrightarrow{CP}$, cioè le formule della tesi. Il vettore $\hat{k} \times \overrightarrow{CP}$ è $\overrightarrow{CP}$ ruotato di un angolo retto in verso antiorario, perciò è perpendicolare a $CP$ e ha la sua stessa lunghezza.
:::
::::

:::esempio{titolo="Spostamenti di una trave a ginocchio"}
La trave a ginocchio $ABD$ in figura ruota di $\varphi = 0{,}002\,\mathrm{rad}$ attorno al centro $C = (1, 3)\,\mathrm{m}$. Con le formule del centro di rotazione, in millimetri,
$$
\begin{aligned}
A = (0, 0) &: \quad u_A = -0{,}002 \cdot (0 - 3)\,\mathrm{m} = 6\,\mathrm{mm} , \quad v_A = 0{,}002 \cdot (0 - 1)\,\mathrm{m} = -2\,\mathrm{mm} \\[4pt]
B = (4, 0) &: \quad u_B = 6\,\mathrm{mm} , \quad v_B = 0{,}002 \cdot (4 - 1)\,\mathrm{m} = 6\,\mathrm{mm} \\[4pt]
D = (4, 2) &: \quad u_D = -0{,}002 \cdot (2 - 3)\,\mathrm{m} = 2\,\mathrm{mm} , \quad v_D = 6\,\mathrm{mm}
\end{aligned}
$$
I punti $A$ e $B$ hanno la stessa ordinata e quindi lo stesso $u$; i punti $B$ e $D$ hanno la stessa ascissa e quindi lo stesso $v$. Come controllo, $|\vec{s}_A| = \sqrt{6^2 + 2^2}\,\mathrm{mm} \approx 6{,}32\,\mathrm{mm}$ coincide con $\varphi\,\overline{CA} = 0{,}002 \cdot \sqrt{10}\,\mathrm{m} \approx 6{,}32\,\mathrm{mm}$.

::struttura{nodi="A,0,0;B,4,0;D,4,2" aste="A-B;B-D" punti="1,3,C,centro" linee="1,3 0,0;1,3 4,0;1,3 4,2" frecce="0,0,1.05,-0.35,s_A;4,0,4.9,0.9,s_B;4,2,4.3,2.9,s_D" tratteggi="0.36,-0.12 4.36,0.36 4.12,2.36" titolo="Gli spostamenti di $A$, $B$, $D$ sono perpendicolari ai segmenti che li congiungono con il centro $C$; tratteggiata la configurazione spostata, con gli spostamenti amplificati"}

:::

:::definizione{#centro-improprio titolo="Traslazione e centro improprio"}
Se $\varphi = 0$ lo spostamento rigido infinitesimo è una **traslazione**: tutti i punti hanno lo stesso spostamento $(u_O, v_O)$, e se questo è diverso da zero nessun punto resta fermo. Quando $\varphi \to 0$ con $(u_O, v_O)$ fissato, il centro $C = O + \dfrac{1}{\varphi}(-v_O,\ u_O)$ si allontana all'infinito nella direzione del vettore $(-v_O,\ u_O)$, che è perpendicolare allo spostamento. Per questo si dice che una traslazione è una rotazione attorno a un **centro improprio**, il punto all'infinito della direzione perpendicolare agli spostamenti. Una trave che trasla verticalmente, per esempio, ha il centro improprio nella direzione orizzontale. Con questa convenzione ogni spostamento rigido infinitesimo non nullo ha un centro, proprio o improprio, e nelle costruzioni con i centri la retta per un centro improprio è la retta parallela alla sua direzione.
:::

## Costruzione del centro di rotazione

Nelle strutture il centro di rotazione si trova quasi sempre per via geometrica, a partire dalle direzioni degli spostamenti che i vincoli consentono.

:::teorema{#centro-da-due-direzioni titolo="Centro dalle direzioni degli spostamenti di due punti"}
Siano $A$ e $B$ due punti del corpo con spostamenti non nulli di direzioni note. Allora il centro di rotazione sta sulla retta per $A$ perpendicolare a $\vec{s}_A$ e sulla retta per $B$ perpendicolare a $\vec{s}_B$. Se queste due rette sono distinte, il centro è il loro punto d'intersezione, proprio se le rette si incontrano e improprio se sono parallele. Segue dal teorema di esistenza del centro di rotazione, per il quale ogni spostamento è perpendicolare al segmento che congiunge il punto con il centro; quando le due rette sono parallele gli spostamenti sono paralleli e il corpo trasla. Se le due rette coincidono, cioè se $A$, $B$ e il centro sono allineati, le direzioni non bastano e serve anche il rapporto fra i moduli degli spostamenti, che sono proporzionali alle distanze dal centro.

::struttura{nodi="A,0,0;B,5,0" aste="A-B" punti="2,3,C,centro" frecce="0,0,1.2,-0.8,s_A;5,0,6,1,s_B" tratteggi="0,0 2.4,3.6;5,0 1.6,3.4" titolo="Il centro $C$ è l'intersezione delle rette per $A$ e per $B$ perpendicolari ai rispettivi spostamenti"}

:::

:::osservazione{#vincoli-e-centro titolo="Effetto dei vincoli esterni sul centro"}
Un vincolo esterno prescrive la direzione dello spostamento di un punto, e quindi una retta su cui sta il centro del corpo vincolato.

- **Cerniera fissa** in $A$: lo spostamento di $A$ è nullo, quindi se il corpo ruota il centro è $A$.
- **Carrello** in $A$: il punto $A$ si sposta lungo il piano di scorrimento, quindi il centro sta sulla retta per $A$ normale al piano di scorrimento.
- **Pendolo** (biella con le cerniere agli estremi, l'altro estremo fisso) in $A$: il punto $A$ si sposta perpendicolarmente alla biella, quindi il centro sta sulla retta della biella.
- **Doppio pendolo**: il corpo non può ruotare e può solo traslare perpendicolarmente alle bielle, quindi il centro è il punto improprio della direzione delle bielle.

Con due carrelli, o con un carrello e un pendolo, il centro è l'intersezione delle due rette. Con una cerniera fissa in $A$ e un carrello in $B$ il centro dovrebbe essere $A$ e stare sulla normale per $B$; se la normale per $B$ non passa per $A$, il corpo resta fermo. Su queste considerazioni si basa l'analisi cinematica, trattata nell'argomento sui vincoli e sulla labilità.
:::

:::esempio{titolo="Asta appoggiata al pavimento e alla parete"}
L'asta $AB$ in figura ha in $A = (4, 0)$ un carrello che scorre sul pavimento orizzontale e in $B = (0, 3)$ un carrello che scorre sulla parete verticale. La normale al pavimento per $A$ è la retta $x = 4$, la normale alla parete per $B$ è la retta $y = 3$, perciò il centro è $C = (4, 3)$. Se $A$ si sposta verso destra di $u_A = 6\,\mathrm{mm}$, dalla formula $u_A = -\varphi\,(y_A - y_C) = 3\,\mathrm{m} \cdot \varphi$ si ricava $\varphi = 0{,}002\,\mathrm{rad}$, antiorario. Allora $v_B = \varphi\,(x_B - x_C) = 0{,}002 \cdot (-4)\,\mathrm{m} = -8\,\mathrm{mm}$, quindi $B$ scende di $8\,\mathrm{mm}$. I due spostamenti hanno la stessa componente lungo l'asta, come richiede il teorema sulle componenti lungo la congiungente: $(\vec{s}_A - \vec{s}_B) \cdot \overrightarrow{BA} = 6 \cdot 4 + 8 \cdot (-3) = 0$.

::struttura{nodi="A,4,0;B,0,3" aste="A-B" vincoli="A,carrello;B,carrello,180" punti="4,3,C,centro" tratteggi="4,0 4,3.5;0,3 4.5,3" frecce="4,0,5.3,0,s_A;0,3,0,1.6,s_B" titolo="Le normali ai piani di scorrimento dei due carrelli si incontrano nel centro $C$"}

:::

## Sistemi di corpi rigidi e centri relativi

Una struttura formata da più corpi collegati da vincoli interni che può muoversi si chiama **catena cinematica**. Ogni corpo ha il proprio spostamento rigido infinitesimo, con la propria rotazione e il proprio centro.

:::definizione{#centro-relativo titolo="Centro di rotazione relativo"}
Siano $i$ e $j$ due corpi di un sistema, con spostamenti rigidi infinitesimi $\vec{s}_i$ e $\vec{s}_j$ di rotazioni $\varphi_i$ e $\varphi_j$, estesi a tutto il piano. Il **centro di rotazione relativo** $C_{ij}$ è il punto del piano in cui i due spostamenti coincidono:
$$
\vec{s}_i(C_{ij}) = \vec{s}_j(C_{ij}) .
$$
La differenza $\vec{s}_j - \vec{s}_i$ è uno spostamento rigido infinitesimo con rotazione $\varphi_j - \varphi_i$, cioè lo spostamento del corpo $j$ visto da un osservatore solidale con il corpo $i$, e $C_{ij}$ ne è il centro. Per il teorema di esistenza del centro di rotazione $C_{ij}$ esiste ed è unico se $\varphi_i \neq \varphi_j$, ed è improprio se $\varphi_i = \varphi_j$; inoltre $C_{ij} = C_{ji}$. Per distinguerli dai centri relativi, i centri $C_1$, $C_2$, … dei singoli corpi si chiamano **centri assoluti**.
:::

:::osservazione{#vincoli-interni-e-centro titolo="Effetto dei vincoli interni sul centro relativo"}
- Una **cerniera interna** in $B$ tra i corpi $i$ e $j$ impone a $B$ lo stesso spostamento come punto dei due corpi, quindi $C_{ij} = B$.
- Un **pendolo interno**, cioè una biella che collega i due corpi, consente solo spostamenti relativi perpendicolari alla biella, quindi $C_{ij}$ sta sulla retta della biella.
- Un **doppio pendolo interno** impedisce la rotazione relativa, quindi $\varphi_i = \varphi_j$ e $C_{ij}$ è il punto improprio della direzione delle bielle.
:::

## Teoremi delle catene cinematiche

I centri di una catena si trovano con due teoremi di allineamento, che seguono dalla definizione di centro relativo.

::::teorema{#primo-teorema-catene titolo="Primo teorema delle catene cinematiche"}
Siano $1$ e $2$ due corpi rigidi con centri assoluti $C_1$, $C_2$ e centro relativo $C_{12}$, in uno spostamento con rotazioni $\varphi_1$, $\varphi_2$ non entrambe nulle. Allora $C_1$, $C_2$ e $C_{12}$ sono allineati. Se i centri assoluti sono propri, le rotazioni soddisfano
$$
\varphi_1\,\overrightarrow{C_1 C_{12}} = \varphi_2\,\overrightarrow{C_2 C_{12}} .
$$
Il teorema serve a trovare un centro quando gli altri due sono noti, oppure quando sono noti uno di essi e una retta su cui sta il terzo. La relazione fra i vettori dà il rapporto fra le rotazioni: se $C_{12}$ è interno al segmento $C_1 C_2$ i due corpi ruotano in versi opposti, se è esterno ruotano nello stesso verso. Con un centro assoluto improprio l'allineamento significa che la retta per $C_{12}$ e per l'altro centro ha la direzione del centro improprio.

:::dimostrazione
L'idea è scrivere in due modi lo spostamento del punto $C_{12}$. Si supponga prima che entrambi i centri assoluti siano propri. Come punto del corpo $1$, che ruota attorno a $C_1$, e come punto del corpo $2$, che ruota attorno a $C_2$, il punto $C_{12}$ ha spostamenti
$$
\vec{s}_1(C_{12}) = \varphi_1\,\hat{k} \times \overrightarrow{C_1 C_{12}} ,
\qquad
\vec{s}_2(C_{12}) = \varphi_2\,\hat{k} \times \overrightarrow{C_2 C_{12}} .
$$
Per definizione di centro relativo i due spostamenti sono uguali, quindi $\hat{k} \times \big( \varphi_1\,\overrightarrow{C_1 C_{12}} - \varphi_2\,\overrightarrow{C_2 C_{12}} \big) = \vec{0}$. Il prodotto $\hat{k} \times \vec{w}$ è il vettore $\vec{w}$ ruotato di un angolo retto e si annulla solo per $\vec{w} = \vec{0}$; perciò $\varphi_1\,\overrightarrow{C_1 C_{12}} = \varphi_2\,\overrightarrow{C_2 C_{12}}$. Se le due rotazioni sono non nulle, i vettori $\overrightarrow{C_1 C_{12}}$ e $\overrightarrow{C_2 C_{12}}$ sono paralleli e hanno l'estremo $C_{12}$ in comune, quindi $C_1$, $C_2$ e $C_{12}$ stanno su una retta. Se invece $\varphi_2 = 0$, la relazione dà $\varphi_1\,\overrightarrow{C_1 C_{12}} = \vec{0}$ con $\varphi_1 \neq 0$, quindi $C_{12} = C_1$ e i tre punti sono ancora allineati.

Si supponga ora che il corpo $2$ trasli con spostamento $\vec{d} \neq \vec{0}$, cioè che $C_2$ sia improprio. L'uguaglianza degli spostamenti in $C_{12}$ diventa $\varphi_1\,\hat{k} \times \overrightarrow{C_1 C_{12}} = \vec{d}$, quindi $\overrightarrow{C_1 C_{12}}$ è perpendicolare a $\vec{d}$ e la retta $C_1 C_{12}$ ha la direzione perpendicolare agli spostamenti del corpo $2$, che è la direzione del centro improprio $C_2$.
:::
::::

:::osservazione{#centri-non-allineati titolo="Centri non allineati"}
Se i vincoli impongono a $C_1$, $C_2$ e $C_{12}$ tre posizioni proprie non allineate, il primo teorema delle catene cinematiche è soddisfatto solo con $\varphi_1 = \varphi_2 = 0$, quindi i due corpi possono al più traslare. Nell'arco a tre cerniere, con le cerniere fisse $A$, $B$ e la cerniera interna $C$ non allineate, i centri sono $C_1 = A$, $C_2 = B$, $C_{12} = C$, e l'arco resta fermo, perché le cerniere fisse impediscono anche le traslazioni. Su questo si basa il metodo dei centri dell'analisi cinematica, per il quale si rimanda all'argomento sui vincoli e sulla labilità.
:::

:::esempio{titolo="Portale con una cerniera interna"}
Il portale in figura è formato dal corpo $1$, con il ritto $AB$ e il tratto di traverso $BD$, e dal corpo $2$, con il tratto di traverso $DE$ e il ritto $EF$; $A = (0, 0)$ è una cerniera fissa, $D = (3, 4)$ una cerniera interna, $F = (6, 0)$ un carrello che scorre su un piano orizzontale. La cerniera fissa dà $C_1 = A$ e la cerniera interna dà $C_{12} = D$. Il centro $C_2$ sta sulla verticale per $F$, normale al piano di scorrimento, e, per il primo teorema delle catene cinematiche, sulla retta $AD$ di equazione $y = \dfrac{4}{3}x$; quindi $C_2 = (6, 8)$. La relazione fra le rotazioni dà
$$
\varphi_1 \begin{pmatrix} 3 \\ 4 \end{pmatrix} = \varphi_2 \begin{pmatrix} 3 - 6 \\ 4 - 8 \end{pmatrix}
\quad\Longrightarrow\quad
\varphi_2 = -\varphi_1 .
$$
I corpi ruotano in versi opposti, perché $D$ è interno al segmento $C_1 C_2$. Il carrello $F$ si sposta di $u_F = -\varphi_2\,(y_F - y_{C_2}) = -8\,\mathrm{m} \cdot \varphi_1$, cioè verso sinistra se $\varphi_1 > 0$.

::struttura{nodi="A,0,0;B,0,4;D,3,4;E,6,4;F,6,0" aste="A-B;B-D;D-E;E-F" cerniere="D" vincoli="A,cerniera;F,carrello" punti="6,8,C_2,centro" etichette="-1,0.5,C_1;2.4,4.6,C_12" tratteggi="0,0 6.3,8.4;6,0 6,8.5" titolo="Il centro $C_2$ è l'intersezione della verticale per il carrello $F$ con la retta che congiunge $C_1 = A$ e $C_{12} = D$"}

:::

::::teorema{#secondo-teorema-catene titolo="Secondo teorema delle catene cinematiche"}
Siano $1$, $2$, $3$ tre corpi rigidi in uno spostamento con rotazioni $\varphi_1$, $\varphi_2$, $\varphi_3$ non tutte uguali. Allora i tre centri relativi $C_{12}$, $C_{13}$, $C_{23}$ sono allineati. Il teorema dà il centro relativo di due corpi non collegati direttamente, come i due ritti di un portale; insieme al primo teorema, applicato a ciascuna delle tre coppie di corpi, fornisce le rette su cui stanno i centri di una catena di tre corpi.

:::dimostrazione
Si considerano gli spostamenti relativi al corpo $1$, cioè $\vec{s}_2 - \vec{s}_1$ e $\vec{s}_3 - \vec{s}_1$: sono spostamenti rigidi infinitesimi con rotazioni $\varphi_2 - \varphi_1$ e $\varphi_3 - \varphi_1$, non entrambe nulle. Per definizione di centro relativo, il centro di $\vec{s}_2 - \vec{s}_1$ è $C_{12}$ e quello di $\vec{s}_3 - \vec{s}_1$ è $C_{13}$. I due spostamenti relativi coincidono nel punto in cui $\vec{s}_2 - \vec{s}_1 = \vec{s}_3 - \vec{s}_1$, cioè dove $\vec{s}_2 = \vec{s}_3$, quindi il loro centro relativo è $C_{23}$. Il primo teorema delle catene cinematiche, applicato ai due spostamenti relativi come se fossero quelli di due corpi, assicura perciò che $C_{12}$, $C_{13}$ e $C_{23}$ sono allineati.
:::
::::

:::esempio{titolo="Quadrilatero articolato"}
Nel portale in figura i corpi $1 = AB$, $2 = BC$, $3 = CD$ sono collegati dalle cerniere interne $B = (0, 4)$ e $C = (3, 4)$, e $A = (0, 0)$, $D = (6, 0)$ sono cerniere fisse. Quindi $C_1 = A$, $C_3 = D$, $C_{12} = B$, $C_{23} = C$. Per il primo teorema delle catene cinematiche $C_2$ sta sulla retta $C_1 C_{12}$, cioè $x = 0$, e sulla retta $C_3 C_{23}$, di equazione $y = -\dfrac{4}{3}(x - 6)$; perciò $C_2 = (0, 8)$. Il centro $C_{13}$ sta sulla retta $C_1 C_3$, cioè $y = 0$, e, per il secondo teorema, sulla retta $C_{12} C_{23}$, cioè $y = 4$. Le due rette sono parallele, quindi $C_{13}$ è il punto improprio della direzione orizzontale e i due ritti hanno la stessa rotazione, $\varphi_3 = \varphi_1$. Dal primo teorema applicato ai corpi $1$ e $2$, $\varphi_1 \cdot (0, 4) = \varphi_2 \cdot (0, -4)$, quindi $\varphi_2 = -\varphi_1$.

::struttura{nodi="A,0,0;B,0,4;C,3,4;D,6,0" aste="A-B;B-C;C-D" cerniere="B;C" vincoli="A,cerniera;D,cerniera" punti="0,8,C_2,centro" tratteggi="0,4 0,8.4;6,0 -0.3,8.4" titolo="Il centro $C_2$ del traverso è l'intersezione delle rette dei due ritti; il centro relativo $C_{13}$ dei ritti è improprio, perché le rette $AD$ e $BC$ sono parallele"}

:::

## Diagrammi degli spostamenti

Per i corpi di una catena gli spostamenti verticali dipendono solo dall'ascissa e quelli orizzontali solo dall'ordinata, e si rappresentano con diagrammi rettilinei a tratti.

:::teorema{#diagrammi-spostamenti titolo="Spostamenti verticali e orizzontali di un corpo"}
Sia $i$ un corpo con centro proprio $C_i = (x_{C_i}, y_{C_i})$ e rotazione $\varphi_i$. Allora lo spostamento verticale di un suo punto dipende solo dall'ascissa e quello orizzontale solo dall'ordinata:
$$
v = \varphi_i\,(x - x_{C_i}) ,
\qquad
u = -\varphi_i\,(y - y_{C_i}) .
$$
Segue dalle formule del teorema di esistenza del centro di rotazione. Il **diagramma degli spostamenti verticali** $v(x)$ di una catena, disegnato su una retta orizzontale di riferimento, è quindi formato da un segmento per ogni corpo, con pendenza $\varphi_i$ e valore nullo sulla verticale del centro $C_i$. Il **diagramma degli spostamenti orizzontali** $u(y)$, disegnato su una retta verticale, ha per ogni corpo pendenza $-\varphi_i$ e valore nullo sull'orizzontale del centro. Un corpo che trasla ha $u$ e $v$ costanti. In una cerniera interna i diagrammi sono continui, perché il punto ha lo stesso spostamento come punto dei due corpi.
:::

:::osservazione{#spostamenti-di-una-catena titolo="Spostamenti di una catena a un grado di libertà"}
In una catena a un grado di libertà gli spostamenti dipendono da un solo parametro, di solito la rotazione $\varphi_1$ di un corpo. Trovati i centri assoluti e relativi, le rotazioni degli altri corpi si ricavano da $\varphi_1$ con la relazione $\varphi_i\,\overrightarrow{C_i C_{ij}} = \varphi_j\,\overrightarrow{C_j C_{ij}}$ del primo teorema delle catene cinematiche, procedendo da un corpo al successivo; gli spostamenti dei punti si scrivono poi con le formule del centro. Lo spostamento di una cerniera interna calcolato con i due corpi che essa collega deve venire uguale, e questo è il controllo dei conti. Il diagramma degli spostamenti verticali di un meccanismo è lo strumento con cui si calcolano i lavori virtuali dei carichi verticali e, con il metodo cinematico, le linee di influenza: si rimanda agli argomenti sul principio dei lavori virtuali e sulle linee di influenza.
:::

:::esempio{titolo="Trave a due corpi"}
La trave in figura ha una cerniera fissa in $A = (0, 0)$, una cerniera interna in $B = (4, 0)$ e un carrello in $C = (7, 0)$ che scorre su un piano orizzontale. I centri sono $C_1 = A$ e $C_{12} = B$; il centro $C_2$ sta sulla verticale per $C$ e sulla retta $AB$, quindi $C_2 = C$. Dal primo teorema delle catene cinematiche $\varphi_1 \cdot 4\,\mathrm{m} = \varphi_2 \cdot (4 - 7)\,\mathrm{m}$, perciò $\varphi_2 = -\dfrac{4}{3}\varphi_1$. Gli spostamenti verticali sono
$$
v(x) = \varphi_1\,x \quad (0 \le x \le 4) ,
\qquad
v(x) = -\frac{4}{3}\varphi_1\,(x - 7) \quad (4 \le x \le 7) ,
$$
e nella cerniera $B$ i due tratti danno lo stesso valore $v_B = 4\,\mathrm{m} \cdot \varphi_1$.

::struttura{nodi="A,0,0;B,4,0;C,7,0" aste="A-B;B-C" cerniere="B" vincoli="A,cerniera;C,carrello" tratteggi="0,0 4,1 7,0" titolo="Trave a due corpi e configurazione spostata (tratteggiata) per $\varphi_1 > 0$"}

::struttura{nodi="A,0,0;B,4,0;C,7,0" aste="A-B;B-C" cerniere="B" vincoli="A,cerniera;C,carrello" diagramma="0,0,4,0,s;4,0,7,0,4-4*s/3" titolo="Diagramma degli spostamenti verticali $\dfrac{v}{\varphi_1}$ ($\mathrm{m}$)"}

:::

:::esempio{titolo="Trave con un doppio pendolo"}
Nella trave in figura il corpo $1$ ha una cerniera fissa in $A = (0, 0)$, la cerniera interna $B = (4, 0)$ lo collega al corpo $2$, e in $C = (7, 0)$ il corpo $2$ ha un doppio pendolo con le bielle orizzontali. Il doppio pendolo impedisce al corpo $2$ di ruotare e di traslare orizzontalmente, quindi $C_2$ è il punto improprio della direzione orizzontale. La retta $C_1 C_{12}$ è la retta $AB$, orizzontale, perciò i tre centri sono allineati e la catena si muove. Il corpo $1$ ruota attorno ad $A$ e il corpo $2$ trasla verticalmente con lo spostamento di $B$, $v = 4\,\mathrm{m} \cdot \varphi_1$. Il diagramma degli spostamenti verticali è un segmento inclinato su $AB$ e un segmento orizzontale su $BC$.

::struttura{nodi="A,0,0;B,4,0;C,7,0" aste="A-B;B-C" cerniere="B" vincoli="A,cerniera;C,doppio-pendolo,0" tratteggi="0,0 4,1 7,1" titolo="Il corpo $BC$, con il centro improprio orizzontale, trasla verticalmente (configurazione spostata tratteggiata)"}

:::
