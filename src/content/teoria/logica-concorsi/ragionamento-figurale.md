---
titolo: Ragionamento figurale e spaziale
sommario: Come si descrivono le trasformazioni di una figura (rotazione, simmetria, riempimento, numero, posizione) e come si risolvono i quesiti su serie e matrici di figure, figura estranea, figure ruotate o allo specchio, sviluppi del cubo e conteggio di triangoli, quadrati e cubetti.
---

## Le trasformazioni di una figura

:::definizione{#caratteristiche-di-una-figura titolo="Cella e caratteristiche di una figura"}
Nei quesiti di ragionamento figurale ogni disegno sta in un riquadro, detto **cella**. Il contenuto di una cella si descrive con poche **caratteristiche**:

- la *forma* delle figure (cerchio, quadrato, triangolo, freccia, lettera);
- il *riempimento* (vuoto, grigio, pieno, a righe);
- il *numero* di copie di una figura;
- la *posizione* della figura nella cella (al centro, in alto a sinistra, a destra, …);
- l'*orientamento*, cioè il verso in cui la figura è girata (una freccia verso l'alto o verso destra).

Il passaggio da una cella alla successiva cambia una o più caratteristiche e lascia invariate le altre. Nella serie qui sotto la forma, il numero e il riempimento restano uguali, e cambia soltanto l'orientamento della freccia.

::figura{tipo="serie" celle="freccia pieno | freccia pieno r90 | freccia pieno r180" titolo="Tre celle in cui cambia soltanto l'orientamento della freccia"}
:::

:::definizione{#rotazione titolo="Rotazione"}
Una **rotazione** gira la figura attorno al centro della cella di un certo angolo, senza cambiarne la forma. Il verso è *orario* se la figura gira come le lancette di un orologio, *antiorario* nel verso opposto. Nei quesiti gli angoli sono quasi sempre $45°$, $90°$ e $180°$.

::figura{tipo="serie" celle="freccia pieno | freccia pieno r45 | freccia pieno r90 | freccia pieno r180 | freccia pieno r-90" titolo="La freccia di partenza e le sue rotazioni di $45°$, $90°$ e $180°$ in senso orario e di $90°$ in senso antiorario"}

Due rotazioni dello stesso angolo in versi opposti si annullano, e una rotazione di $360°$ riporta la figura nella posizione iniziale. Quindi una rotazione di $90°$ in senso antiorario coincide con una rotazione di $270°$ in senso orario, e una rotazione di $180°$ dà lo stesso risultato in entrambi i versi. La freccia verso l'alto, ruotata di $90°$ in senso antiorario, punta a sinistra, come se fosse ruotata di tre volte $90°$ in senso orario.
:::

:::definizione{#simmetria-assiale titolo="Simmetria rispetto a un asse"}
La **simmetria rispetto a un asse** produce l'*immagine allo specchio* della figura. Con l'asse verticale si scambiano la destra e la sinistra, con l'asse orizzontale si scambiano l'alto e il basso.

::figura{tipo="serie" celle="lettera:F | lettera:F specchio | lettera:F specchio-o" titolo="La lettera F, la sua immagine allo specchio rispetto all'asse verticale e quella rispetto all'asse orizzontale"}

Nella lettera F i due tratti orizzontali partono dall'asta verso destra. Nell'immagine rispetto all'asse verticale partono verso sinistra, mentre nell'immagine rispetto all'asse orizzontale l'asta resta a sinistra e i tratti si trovano in basso.
:::

:::definizione{#riempimento-numero-posizione titolo="Riempimento, numero e posizione"}
Le altre trasformazioni più frequenti sono tre.

- Il **cambio di riempimento** lascia la forma e cambia il colore interno, spesso in un ordine che si ripete (vuoto, grigio, pieno, vuoto, …).
- Il **cambio di numero** aggiunge o toglie copie della figura, spesso una alla volta.
- Lo **spostamento** porta una figura da una posizione della cella a un'altra; di solito la figura percorre le posizioni lungo il bordo della cella in senso orario o antiorario, di un passo alla volta.

::figura{tipo="serie" celle="stella | stella grigio | stella pieno | stella righe" titolo="Quattro riempimenti della stessa forma: vuoto, grigio, pieno e a righe"}

::figura{tipo="serie" celle="punto no | punto n | punto ne | punto e | punto se" titolo="Il punto si sposta di una posizione alla volta lungo il bordo della cella, in senso orario"}
:::

:::osservazione{#descrivere-la-trasformazione titolo="Descrivere a parole il passaggio da una cella alla successiva"}
Per trovare la regola si confrontano due celle vicine una caratteristica alla volta, nell'ordine forma, riempimento, numero, posizione, orientamento. Per ogni caratteristica si scrive a parole come cambia, e la regola è l'elenco dei cambiamenti. Nella serie qui sotto la forma e il riempimento restano uguali, l'orientamento cambia di $90°$ in senso orario a ogni passo e la posizione resta il centro. La regola è quindi "la squadra ruota di $90°$ in senso orario", e la quarta cella contiene la squadra ruotata di $270°$ in senso orario rispetto alla prima, cioè di $90°$ in senso antiorario.

::figura{tipo="serie" celle="squadra grigio | squadra grigio r90 | squadra grigio r180 | squadra grigio r-90" titolo="La squadra ruota di $90°$ in senso orario da una cella alla successiva"}
:::

## Serie di figure

:::definizione{#serie-di-figure titolo="Serie di figure"}
Una **serie di figure** è una fila di celle costruite con una regola che porta ogni cella nella successiva. Il quesito mostra le prime celle e una cella con il punto interrogativo, e chiede quale delle opzioni continua la serie. La risposta è la cella che si ottiene applicando la regola all'ultima cella disegnata.

::figura{tipo="serie" celle="cerchio piccolo x1 | cerchio piccolo x2 | cerchio piccolo x3 | cerchio piccolo x4 | ?" titolo="A ogni passo si aggiunge un cerchio, quindi la quinta cella contiene $5$ cerchi"}

Nella serie la forma e il riempimento non cambiano, mentre il numero di cerchi aumenta di uno a ogni passo. Perciò la cella mancante contiene cinque cerchi vuoti.
:::

:::teorema{#regole-indipendenti titolo="Più regole che agiscono insieme"}
Quando cambiano più caratteristiche, ognuna segue di solito una regola propria, indipendente dalle altre. La cella mancante si costruisce allora una caratteristica alla volta, applicando a ciascuna la sua regola. Il metodo funziona perché le regole riguardano caratteristiche diverse, e la scelta del valore di una caratteristica non influisce sulle altre.

::figura{tipo="serie" celle="freccia pieno; punto no | freccia pieno r90; punto no; punto ne | freccia pieno r180; punto no; punto ne; punto se | ?" titolo="La freccia ruota di $90°$ in senso orario e intanto il numero di punti aumenta di uno"}

Nella serie la freccia ruota di $90°$ in senso orario a ogni passo, quindi nella quarta cella punta a sinistra. Il numero di punti aumenta di uno, e i punti occupano gli angoli della cella in senso orario a partire da quello in alto a sinistra. Perciò la quarta cella contiene la freccia verso sinistra e quattro punti, uno in ciascun angolo.
:::

:::osservazione{#cicli titolo="Regole cicliche"}
Molte regole si ripetono dopo un certo numero di passi, detto *periodo*. Un riempimento che segue l'ordine vuoto, grigio, pieno ha periodo $3$; un punto che percorre i quattro angoli della cella ha periodo $4$. Per sapere che cosa contiene una cella lontana si usa il resto della divisione per il periodo. Se la prima cella ha il punto in alto a sinistra e il punto passa all'angolo successivo in senso orario a ogni cella, nella decima cella il punto ha fatto $9$ passi. Poiché $9 = 2 \cdot 4 + 1$, il punto ha fatto due giri completi e un passo in più, quindi si trova in alto a destra.
:::

:::attenzione{#rotazioni-invisibili titolo="Rotazioni che non si vedono"}
Una rotazione *non* sempre cambia l'aspetto di una figura. Un quadrato ruotato di $90°$ e una croce ruotata di $90°$ coincidono con la figura di partenza, quindi in una serie di quadrati la rotazione di $90°$ non si può riconoscere. Per questo le serie con rotazioni usano figure in cui l'orientamento si vede, come la freccia, la squadra o una figura con un punto vicino a un lato.
:::

## Matrici di figure

:::definizione{#matrice-di-figure titolo="Matrice di figure"}
Una **matrice di figure** è una griglia di celle, di solito $3 \times 3$, in cui l'ultima cella in basso a destra manca. Le celle seguono una regola lungo le righe, lungo le colonne o in entrambe le direzioni. Le prime due righe sono complete, quindi la regola si ricava da quelle e si applica alla terza riga.
:::

:::teorema{#regola-per-riga titolo="Regole per riga e per colonna"}
Nelle matrici si incontrano soprattutto due tipi di regola.

- **Tre valori in ogni riga.** Ogni riga contiene una volta sola ciascuno di tre valori di una caratteristica, per esempio le tre forme cerchio, quadrato e triangolo. Il valore mancante nella terza riga è quello che non vi compare ancora.
- **Progressione lungo la riga.** Da una cella alla successiva la caratteristica cambia sempre allo stesso modo, per esempio una rotazione di $90°$ oppure un elemento in più. A volte la terza cella si ottiene dalle prime due con un'operazione, come la somma del numero di elementi.

Le due regole possono valere insieme su caratteristiche diverse, una lungo le righe e l'altra lungo le colonne.

::figura{tipo="matrice" celle="cerchio | quadrato grigio | triangolo pieno | quadrato | triangolo grigio | cerchio pieno | triangolo | cerchio grigio | ?" titolo="Ogni riga contiene un cerchio, un quadrato e un triangolo, e ogni colonna ha il suo riempimento"}

Nella terza riga mancano il quadrato e il riempimento della terza colonna, che è pieno. Perciò la cella mancante contiene un quadrato pieno.
:::

:::definizione{#sovrapposizione titolo="Sovrapposizione: unione e differenza simmetrica"}
Nelle matrici a **sovrapposizione** la terza cella di ogni riga nasce dalla sovrapposizione delle prime due.

- Nell'**unione** la terza cella contiene tutti gli elementi presenti in almeno una delle prime due.
- Nella **differenza simmetrica** la terza cella contiene soltanto gli elementi presenti in una sola delle prime due; gli elementi comuni si cancellano.

Le due operazioni sono le stesse dell'argomento sugli insiemi e i diagrammi di Venn, applicate agli insiemi di segmenti o di punti disegnati nelle celle.

::figura{tipo="serie" celle="linea; linea r45 | linea; linea r90 | linea; linea r45; linea r90" titolo="Unione: il segmento verticale comune compare una volta sola, insieme agli altri due"}

::figura{tipo="serie" celle="linea; linea r45 | linea; linea r90 | linea r45; linea r90" titolo="Differenza simmetrica: il segmento verticale comune si cancella"}
:::

:::attenzione{#unione-o-differenza titolo="Controllare l'operazione su due righe"}
Unione e differenza simmetrica danno lo stesso risultato solo quando le prime due celle *non* hanno elementi comuni. Per distinguerle si cerca, nelle righe complete, un elemento presente sia nella prima sia nella seconda cella. Se l'elemento compare nella terza cella, l'operazione è l'unione; se manca, è la differenza simmetrica.
:::

## Figura estranea

:::definizione{#figura-estranea titolo="Figura estranea"}
Nei quesiti di **figura estranea** si mostrano cinque figure, di cui quattro seguono una regola comune e una no, e la risposta è quella che non la segue. La regola si cerca confrontando le figure una caratteristica alla volta, come nelle serie.

::figura{tipo="opzioni" celle="triangolo | quadrato grigio | pentagono | esagono pieno | stella" titolo="Quattro figure sono poligoni, mentre la stella ha il contorno che rientra verso il centro"}

Nelle cinque figure il riempimento e il numero di lati cambiano senza un ordine. Il triangolo, il quadrato, il pentagono e l'esagono hanno tutti gli angoli rivolti verso l'esterno; la stella ha invece cinque angoli rivolti verso l'interno. Quindi la figura estranea è la E.
:::

:::osservazione{#relazioni-interne titolo="Regole sulle relazioni tra le parti"}
Spesso la regola comune non riguarda una caratteristica da sola, ma un legame tra due parti della cella. I legami più frequenti sono tre.

- Un numero uguale a un altro, per esempio il numero di punti uguale al numero di lati del poligono.
- Una direzione, per esempio la freccia che punta verso il punto.
- Una simmetria, per esempio la presenza di un asse rispetto a cui la figura coincide con la propria immagine allo specchio.

::figura{tipo="opzioni" celle="freccia r45; punto ne | freccia r180; punto s | freccia r90; punto o | freccia r-90; punto o | freccia; punto n" titolo="In quattro celle la freccia punta verso il punto, nella cella C punta dalla parte opposta"}

Nelle celle A, B, D ed E la freccia punta verso il punto. Nella cella C la freccia punta a destra e il punto si trova a sinistra, perciò la cella C è la figura estranea.
:::

:::attenzione{#una-sola-regola titolo="Una regola che separa una sola figura"}
Una caratteristica che isola una figura *non* basta per indicarla come estranea. La regola deve valere per tutte le altre quattro figure. Se nell'esempio dei poligoni si scegliesse la regola "figura vuota", le figure da escludere sarebbero due, il quadrato grigio e l'esagono pieno, quindi la regola non risponde al quesito.
:::

## Rotazioni e simmetrie di figure piane

:::teorema{#rotazione-o-specchio titolo="Figura ruotata e figura allo specchio"}
Sia data una figura che non ha assi di simmetria, come le lettere F, R, G, L. Le rotazioni non trasformano mai la figura nella sua immagine allo specchio, mentre due simmetrie consecutive rispetto all'asse verticale e all'asse orizzontale equivalgono a una rotazione di $180°$.

::figura{tipo="opzioni" celle="lettera:F r90 | lettera:F r180 | lettera:F specchio | lettera:F specchio r90 | lettera:F r-90" titolo="Le figure A, B ed E sono la lettera F ruotata, le figure C e D sono la sua immagine allo specchio, nella D anche ruotata"}

Il motivo si vede seguendo il contorno della lettera. Percorrendo la F dal piede dell'asta verso l'alto, i due tratti orizzontali si trovano a destra; la rotazione gira tutta la lettera, e i tratti restano a destra di chi percorre l'asta. Nell'immagine allo specchio, invece, i tratti si trovano a sinistra di chi percorre l'asta, e nessuna rotazione li riporta a destra.
:::

:::osservazione{#riconoscere-lo-specchio titolo="Come si riconosce un'immagine allo specchio"}
Per decidere se una figura è ruotata oppure allo specchio si sceglie una parte di riferimento, come l'asta della F o la gamba della R, e la si riporta con il pensiero nella posizione originale ruotando la figura. Se dopo la rotazione anche il resto della figura coincide con l'originale, la figura è ruotata; se il resto si trova dalla parte opposta, la figura è allo specchio. Nella figura D dell'esempio l'asta è orizzontale. Ruotando la figura di $90°$ in senso antiorario l'asta torna verticale e i tratti risultano a sinistra, quindi la figura D è un'immagine allo specchio.
:::

:::attenzione{#figure-simmetriche titolo="Figure con un asse di simmetria"}
Per una figura che ha un asse di simmetria l'immagine allo specchio *non* si distingue da una rotazione. La freccia verso l'alto coincide con la propria immagine rispetto all'asse verticale, e la sua immagine rispetto all'asse orizzontale è la freccia verso il basso, cioè la freccia ruotata di $180°$. Per questo i quesiti su rotazioni e specchi usano lettere o figure composte senza assi di simmetria, come una freccia con un punto a fianco.
:::

## Sviluppi del cubo

:::definizione{#sviluppo-del-cubo titolo="Sviluppo del cubo"}
Lo **sviluppo** di un cubo è la figura piana che si ottiene aprendo il cubo lungo alcuni spigoli e stendendo le sei facce su un piano. È formato da sei quadrati uniti lungo i lati, e piegando i quadrati lungo i lati comuni si ricostruisce il cubo. Esistono $11$ sviluppi diversi del cubo, e il più noto è la croce latina.

::figura{tipo="sviluppo" schema=".x..|xxxx|.x.." celle="punto | cerchio | croce pieno | anello | quadrato grigio | x" titolo="Uno sviluppo a croce latina con un simbolo su ogni faccia"}

Nei quesiti le facce portano simboli che restano uguali ruotando di $90°$, come il cerchio, la croce o il quadrato. In questo modo conta soltanto quale faccia è vicina a quale, e il verso del disegno sulla faccia non ha importanza.
:::

:::teorema{#facce-opposte titolo="Facce opposte"}
In uno sviluppo che si chiude in un cubo valgono due regole.

- Se tre facce sono consecutive in linea retta, la prima e la terza sono **opposte**, perché la faccia centrale si piega fra le due come il fondo di una scatola fra due pareti.
- Se quattro facce formano una Z, cioè due facce in linea e altre due in linea che proseguono dopo un gradino, la prima e l'ultima sono opposte.

Nello sviluppo a croce latina la fila orizzontale contiene il cerchio, la croce piena, l'anello e il quadrato grigio. Il cerchio e l'anello sono la prima e la terza faccia di una fila di tre, quindi sono opposti; per lo stesso motivo sono opposti la croce piena e il quadrato grigio. Nella colonna verticale il punto, la croce piena e la croce obliqua sono in linea, perciò il punto e la croce obliqua sono opposti. Due facce opposte non compaiono mai insieme in un disegno del cubo, e questo basta a scartare molte opzioni.
:::

:::teorema{#sviluppi-che-non-si-chiudono titolo="Sviluppi che non si chiudono in un cubo"}
Sei quadrati uniti lungo i lati *non* formano sempre lo sviluppo di un cubo. Lo sviluppo non si chiude in tre casi frequenti:

- quattro quadrati formano un blocco $2 \times 2$;
- cinque quadrati sono in fila;
- quattro quadrati sono in fila e gli altri due sono attaccati dalla stessa parte della fila.

Nel primo caso quattro facce si incontrano in uno stesso punto, mentre in ogni vertice del cubo se ne incontrano tre. Nel secondo caso le quattro facce di una fila girano tutto intorno al cubo, e la quinta si sovrappone alla prima. Nel terzo caso i due quadrati attaccati dalla stessa parte finiscono sulla stessa faccia, e l'altra faccia resta scoperta.

::figura{tipo="sviluppo" schema="xx..|xxxx" celle="- | - | - | - | - | -" titolo="Sviluppo che non si chiude: le due facce in alto sono dalla stessa parte della fila di quattro"}

::figura{tipo="sviluppo" schema="x...|xxxx|..x." celle="- | - | - | - | - | -" titolo="Sviluppo che si chiude: le due facce fuori dalla fila sono da parti opposte"}
:::

:::teorema{#facce-attorno-a-un-vertice titolo="Facce che si incontrano in un vertice"}
Se nello sviluppo tre facce si toccano in uno stesso punto, nel cubo chiuso le tre facce si incontrano in un vertice e conservano il loro ordine, letto in senso orario guardando il cubo dall'esterno. Nel disegno del cubo le facce visibili sono quella in alto, quella davanti e quella a destra, e attorno al vertice più vicino all'osservatore il senso orario va dall'alto a destra e poi davanti.

Nello sviluppo a croce latina il punto, il cerchio e la croce si toccano nell'angolo in alto a sinistra della croce, e in senso orario l'ordine è cerchio, punto, croce. Quindi un cubo con il punto in alto può avere la croce a destra e il cerchio davanti, mentre il cubo con il punto in alto, la croce davanti e il cerchio a destra *non* si ottiene dallo sviluppo.

::figura{tipo="cubi" celle="punto / cerchio / croce pieno | punto / croce pieno / cerchio" etichette="sì,no" titolo="Il primo cubo si ottiene dallo sviluppo a croce latina, il secondo ha le stesse tre facce nell'ordine opposto"}
:::

:::osservazione{#metodo-per-i-cubi titolo="Metodo per i quesiti sui cubi"}
Nei quesiti "quale cubo si ottiene dallo sviluppo" il controllo procede in due passi.

1. Si scrivono a margine le tre coppie di facce opposte e si scartano i cubi che mostrano insieme due facce opposte.
2. Per i cubi rimasti si controlla l'ordine delle tre facce visibili attorno al vertice, confrontandolo con il punto dello sviluppo in cui le stesse tre facce si toccano.
:::

## Conteggio di figure

:::teorema{#contare-triangoli titolo="Triangoli con un vertice comune"}
Sia dato un triangolo in cui dal vertice in alto partono alcuni segmenti che dividono la base in $k$ parti. Ogni triangolo della figura ha il vertice in alto e due estremi sulla base, scelti fra i $k + 1$ punti di divisione. Le coppie di punti sono
$$
\frac{k\,(k + 1)}{2},
$$
quindi questo è il numero di triangoli. Con tre segmenti interni la base è divisa in $k = 4$ parti, e i triangoli sono $\dfrac{4 \cdot 5}{2} = 10$.

::figura{tipo="linee" segmenti="0,10,10,10;0,10,5,0;10,10,5,0;5,0,2.5,10;5,0,5,10;5,0,7.5,10" titolo="Tre segmenti dal vertice dividono la base in $4$ parti, e i triangoli sono $10$"}

Il conteggio si controlla anche per numero di parti. I triangoli formati da una sola parte sono $4$, quelli formati da due parti vicine sono $3$, da tre parti sono $2$, e c'è il triangolo intero, per un totale di $4 + 3 + 2 + 1 = 10$.
:::

:::teorema{#contare-quadrati titolo="Quadrati in una griglia"}
In una griglia quadrata di $n \times n$ quadretti i quadrati di lato $1$ sono $n^2$, quelli di lato $2$ sono $(n-1)^2$, e così via fino al quadrato intero. Il numero totale di quadrati è
$$
1^2 + 2^2 + \dots + n^2 .
$$
La regola vale perché un quadrato di lato $\ell$ ha l'angolo in alto a sinistra in $n - \ell + 1$ posizioni per riga e in altrettante per colonna. In una griglia $3 \times 3$ i quadrati sono $9 + 4 + 1 = 14$, e chi conta solo i quadretti risponde $9$.

::figura{tipo="linee" segmenti="1,1,10,1;1,4,10,4;1,7,10,7;1,10,10,10;1,1,1,10;4,1,4,10;7,1,7,10;10,1,10,10" titolo="Griglia $3 \times 3$: $9$ quadrati di lato $1$, $4$ di lato $2$ e $1$ di lato $3$"}
:::

:::osservazione{#conteggio-ordinato titolo="Conteggio ordinato"}
Nelle figure senza uno schema regolare si contano le figure per grandezza, partendo dalle più piccole, e si annotano a margine i totali parziali. Nel quadrato con le due diagonali ci sono $4$ triangoli piccoli, ciascuno con un lato del quadrato, e $4$ triangoli formati da due triangoli piccoli vicini, cioè metà quadrato. I triangoli sono quindi $8$.

::figura{tipo="linee" segmenti="1,1,10,1;10,1,10,10;10,10,1,10;1,10,1,1;1,1,10,10;10,1,1,10" titolo="Nel quadrato con le diagonali ci sono $4$ triangoli piccoli e $4$ triangoli che sono metà del quadrato"}
:::

:::definizione{#costruzioni-di-cubetti titolo="Costruzioni di cubetti a strati"}
Una costruzione di cubetti uguali si descrive con la **vista dall'alto**: una griglia in cui ogni casella riporta quanti cubetti sono impilati in quella colonna. I cubetti poggiano sul tavolo o su un altro cubetto, quindi il numero in una casella è l'altezza della pila. Il numero totale di cubetti è la somma dei numeri della griglia.

::figura{tipo="matrice" celle="lettera:2 | lettera:1 | lettera:3 | lettera:1 | lettera:0 | lettera:2 | lettera:3 | lettera:2 | lettera:1" titolo="Vista dall'alto di una costruzione su una base $3 \times 3$: il numero in ogni casella è l'altezza della pila"}

Nella costruzione della figura i cubetti sono $2 + 1 + 3 + 1 + 0 + 2 + 3 + 2 + 1 = 15$. Per completare un cubo $3 \times 3 \times 3$, che contiene $27$ cubetti, ne mancano $27 - 15 = 12$. Lo stesso numero si ottiene sommando per ogni casella la differenza tra $3$ e il numero scritto.
:::

## Metodi rapidi per i quiz

:::osservazione{#metodi-rapidi titolo="Schema a margine ed eliminazione delle opzioni"}
I quesiti figurali si risolvono più in fretta con alcune abitudini fisse.

- **Una caratteristica alla volta**: si confrontano le celle prima per forma, poi per riempimento, numero, posizione e orientamento, e si annota a margine la regola di ognuna.
- **Eliminazione**: per ogni caratteristica si scartano le opzioni che non hanno il valore richiesto. Di solito dopo due caratteristiche resta una sola opzione.
- **Periodo**: nelle regole cicliche si conta il periodo e si usa il resto della divisione per sapere dove si trova la figura in una cella lontana.
- **Matrici**: si ricava la regola dalle prime due righe e la si controlla anche sulle colonne; nelle sovrapposizioni si guarda che fine fanno gli elementi comuni.
- **Specchio**: si riporta con il pensiero una parte di riferimento nella posizione originale e si controlla da che parte si trova il resto della figura.
- **Cubi**: prima le coppie di facce opposte, poi l'ordine in senso orario delle facce attorno a un vertice.
- **Conteggi**: si contano le figure per grandezza o per numero di parti, e nelle griglie si usa la somma dei quadrati.
:::
