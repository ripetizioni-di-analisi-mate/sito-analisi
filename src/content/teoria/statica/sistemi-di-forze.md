---
titolo: Vettori applicati, momenti e sistemi di forze equivalenti
sommario: Come si descrive una forza applicata a un corpo rigido, come si calcola il suo momento rispetto a un polo e come un sistema di forze, coppie e carichi distribuiti si sostituisce con un sistema equivalente più semplice.
---

## Forze e vettori applicati

:::definizione{#vettore-applicato titolo="Vettore applicato e retta d'azione"}
Una forza che agisce su un corpo è individuata da un'intensità, una direzione, un verso e dal punto del corpo in cui agisce. Si rappresenta perciò con un **vettore applicato** $(P, \vec{F})$, cioè con un vettore $\vec{F}$ associato a un punto $P$, detto punto di applicazione. La **retta d'azione** della forza è la retta che passa per $P$ ed è parallela a $\vec{F}$.

Le strutture della Statica sono piane, e si usa il riferimento con l'asse $x$ orizzontale verso destra, l'asse $y$ verticale verso l'alto e l'asse $z$ uscente dal foglio. Una forza di intensità $F$ che forma l'angolo $\alpha$ con l'asse $x$, misurato in verso antiorario, ha componenti
$$
F_x = F\cos\alpha ,
\qquad
F_y = F\sin\alpha .
$$
Le forze si misurano in $\mathrm{kN}$ e le lunghezze in $\mathrm{m}$. Una forza di $10\,\mathrm{kN}$ diretta verso destra e inclinata di $30^\circ$ sotto l'orizzontale ha $\alpha = -30^\circ$, quindi $F_x = 8{,}66\,\mathrm{kN}$ e $F_y = -5\,\mathrm{kN}$.
:::

:::osservazione{#forze-su-un-corpo-rigido titolo="Forze su un corpo rigido"}
In tutta la Statica i corpi sono rigidi, cioè le distanze fra i loro punti restano costanti, e i loro spostamenti sono trascurabili rispetto alle dimensioni della struttura; le forze si considerano quindi applicate alla configurazione iniziale. Due forze uguali come vettori ma con rette d'azione diverse hanno effetti diversi sul corpo: un carico verticale all'estremo libero di una mensola tende a farla ruotare attorno all'incastro più dello stesso carico applicato vicino all'incastro. Lo strumento che misura questa differenza è il momento della forza, e si vedrà con il teorema sullo scorrimento che per un corpo rigido il punto di applicazione conta solo attraverso la retta d'azione.
:::

## Momento di una forza rispetto a un polo

:::richiamo{titolo="Prodotto vettoriale"}
Il prodotto vettoriale $\vec{a} \times \vec{b}$ di due vettori che formano l'angolo $\varphi$ è ortogonale a entrambi, ha modulo $ab\sin\varphi$ e verso dato dalla regola della mano destra; è nullo se i vettori sono paralleli, vale $\vec{b} \times \vec{a} = -\,\vec{a} \times \vec{b}$ ed è distributivo rispetto alla somma. Per due vettori del piano $xy$
$$
(a_x\,\hat{\imath} + a_y\,\hat{\jmath}) \times (b_x\,\hat{\imath} + b_y\,\hat{\jmath}) = (a_x b_y - a_y b_x)\,\hat{k} .
$$
Si rimanda all'argomento sui vettori nel piano e nello spazio di Algebra lineare.
:::

:::definizione{#momento-di-una-forza titolo="Momento di una forza rispetto a un polo"}
Il momento esprime la tendenza di una forza a far ruotare il corpo attorno a un punto. Sia $(P, \vec{F})$ una forza e sia $O$ un punto, detto **polo**. Il **momento** della forza rispetto a $O$ è il vettore
$$
\vec{M}_O = \overrightarrow{OP} \times \vec{F} .
$$
Per una forza del piano $xy$ il momento è perpendicolare al piano, $\vec{M}_O = M_O\,\hat{k}$, e dal prodotto vettoriale in componenti si ottiene
$$
M_O = (x_P - x_O)\,F_y - (y_P - y_O)\,F_x .
$$
Il numero $M_O$ è positivo quando la forza tende a far ruotare il corpo attorno a $O$ in verso antiorario e negativo quando tende a farlo ruotare in verso orario; si misura in $\mathrm{kN\,m}$. Con $O$ nell'origine e le coordinate in metri, la forza con $F_x = 6\,\mathrm{kN}$ e $F_y = -8\,\mathrm{kN}$ applicata in $P = (4, 2)$ ha momento
$$
M_O = 4 \cdot (-8) - 2 \cdot 6 = -44\,\mathrm{kN\,m} ,
$$
quindi tende a far ruotare il corpo attorno a $O$ in verso orario.
:::

::::teorema{#momento-e-braccio titolo="Momento e braccio"}
Sia $(P, \vec{F})$ una forza di intensità $F$ e sia $b$ la distanza del polo $O$ dalla retta d'azione, detta **braccio**. Allora
$$
|M_O| = F\,b ,
$$
e il momento resta lo stesso se il punto di applicazione si sposta in un altro punto della retta d'azione. In particolare, per $\vec{F} \neq \vec{0}$, il momento è nullo se e solo se la retta d'azione passa per $O$. Il segno si legge sul disegno, guardando in che verso la forza tende a far ruotare il corpo attorno a $O$. La forza della definizione di momento ha intensità $\sqrt{6^2 + 8^2} = 10\,\mathrm{kN}$, quindi la sua retta d'azione dista $b = \dfrac{44}{10} = 4{,}4\,\mathrm{m}$ dall'origine. Per una forza verticale il braccio è la distanza orizzontale fra il polo e la retta d'azione: un carico di $15\,\mathrm{kN}$ verso il basso, a $3\,\mathrm{m}$ a destra di $O$, ha momento $-15 \cdot 3 = -45\,\mathrm{kN\,m}$.

::struttura{nodi="O,0,0;P,4,2;H,3.52,2.64" forze="4.9 0.8,0.9,-1.2,F" tratteggi="2.8,3.6 5.5,0;0,0 3.52,2.64" etichette="1.55,1.6,b" punti="0,0;4,2;3.52,2.64" titolo="Il braccio $b$ è la distanza del polo $O$ dalla retta d'azione di $\vec{F}$, misurata sulla perpendicolare $OH$"}

:::dimostrazione
Sia $H$ il piede della perpendicolare condotta da $O$ alla retta d'azione, quindi $|\overrightarrow{OH}| = b$. Il vettore $\overrightarrow{HP}$ è parallelo a $\vec{F}$, perciò $\overrightarrow{HP} \times \vec{F} = \vec{0}$ e
$$
\vec{M}_O = \big( \overrightarrow{OH} + \overrightarrow{HP} \big) \times \vec{F} = \overrightarrow{OH} \times \vec{F} .
$$
Il vettore $\overrightarrow{OH}$ è perpendicolare a $\vec{F}$, quindi il modulo del prodotto è $bF$. L'ultima espressione dipende dal punto di applicazione solo attraverso la retta d'azione, che individua $H$; perciò il momento è lo stesso per ogni punto della retta. Infine, se $\vec{F} \neq \vec{0}$, il prodotto $bF$ è nullo se e solo se $b = 0$, cioè se $O$ sta sulla retta d'azione.
:::
::::

## Risultante, momento risultante e cambiamento di polo

:::definizione{#risultante-e-momento-risultante titolo="Risultante e momento risultante"}
Un **sistema di forze** è un insieme finito di forze $(P_1, \vec{F}_1), \dots, (P_n, \vec{F}_n)$ applicate allo stesso corpo. La **risultante** è la somma dei vettori e il **momento risultante** rispetto al polo $O$ è la somma dei momenti:
$$
\vec{R} = \sum_{i=1}^{n} \vec{F}_i ,
\qquad
\vec{M}_O = \sum_{i=1}^{n} \overrightarrow{OP_i} \times \vec{F}_i .
$$
La risultante è un vettore libero, perché dipende solo dai vettori $\vec{F}_i$ e non dai punti di applicazione; il momento risultante dipende invece dal polo. Nel piano si calcolano le tre grandezze scalari $R_x = \sum_i F_{x,i}$, $R_y = \sum_i F_{y,i}$ e $M_O$, che sono quelle che compaiono nelle equazioni cardinali della statica, trattate nell'argomento sulle reazioni vincolari. Su una trave orizzontale, con il polo nell'estremo sinistro $A$, un carico di $8\,\mathrm{kN}$ verso il basso a $2\,\mathrm{m}$ da $A$ e una forza di $4\,\mathrm{kN}$ verso l'alto a $6\,\mathrm{m}$ da $A$ danno
$$
R_y = -8 + 4 = -4\,\mathrm{kN} ,
\qquad
M_A = 2 \cdot (-8) + 6 \cdot 4 = 8\,\mathrm{kN\,m} .
$$
:::

::::teorema{#cambiamento-di-polo titolo="Formula del cambiamento di polo"}
Siano $O$ e $O'$ due poli. Il momento risultante di un sistema di forze con risultante $\vec{R}$ soddisfa
$$
\vec{M}_{O'} = \vec{M}_O + \overrightarrow{O'O} \times \vec{R} ,
$$
che nel piano si scrive
$$
M_{O'} = M_O + (x_O - x_{O'})\,R_y - (y_O - y_{O'})\,R_x .
$$
Noti $\vec{R}$ e il momento rispetto a un polo, il momento rispetto a ogni altro polo si ottiene quindi senza ripetere la somma su tutte le forze. Se $\vec{R} = \vec{0}$, il momento risultante è lo stesso per tutti i poli. Per i due carichi sulla trave della definizione di risultante, con $R_y = -4\,\mathrm{kN}$ e $M_A = 8\,\mathrm{kN\,m}$, il momento rispetto all'estremo $B$, a $6\,\mathrm{m}$ da $A$, è $M_B = 8 + (0 - 6) \cdot (-4) = 32\,\mathrm{kN\,m}$; il calcolo diretto dà lo stesso valore, $(2 - 6) \cdot (-8) = 32\,\mathrm{kN\,m}$, perché la forza in $B$ ha momento nullo.

:::dimostrazione
Per ogni forza $\overrightarrow{O'P_i} = \overrightarrow{O'O} + \overrightarrow{OP_i}$. Per la proprietà distributiva del prodotto vettoriale
$$
\begin{aligned}
\vec{M}_{O'} &= \sum_i \big( \overrightarrow{O'O} + \overrightarrow{OP_i} \big) \times \vec{F}_i \\[6pt]
&= \overrightarrow{O'O} \times \sum_i \vec{F}_i + \sum_i \overrightarrow{OP_i} \times \vec{F}_i \\[6pt]
&= \overrightarrow{O'O} \times \vec{R} + \vec{M}_O .
\end{aligned}
$$
La forma piana segue dal prodotto vettoriale in componenti, con $\overrightarrow{O'O} = (x_O - x_{O'},\; y_O - y_{O'})$.
:::
::::

## Coppie

:::definizione{#coppia titolo="Coppia di forze"}
Una **coppia** è un sistema di due forze $(A, \vec{F})$ e $(B, -\vec{F})$ con rette d'azione parallele e distinte; la distanza $d$ fra le due rette è il **braccio della coppia**. La risultante di una coppia è nulla, quindi la coppia tende a far ruotare il corpo senza farlo traslare. Due forze di $5\,\mathrm{kN}$, una verso il basso e una verso l'alto, applicate su due verticali distanti $2\,\mathrm{m}$, formano una coppia di braccio $2\,\mathrm{m}$.
:::

::::teorema{#momento-di-una-coppia titolo="Momento di una coppia"}
Il momento di una coppia è lo stesso rispetto a ogni polo e vale
$$
\vec{M} = \overrightarrow{BA} \times \vec{F} ,
$$
con modulo $F d$; nel piano è positivo se la coppia tende a far ruotare il corpo in verso antiorario. Una coppia è quindi descritta completamente dal suo momento, e nei disegni si rappresenta con una freccia curva. Nelle strutture una **coppia concentrata** applicata si indica con $\mathcal{M}$, per distinguerla dal momento flettente $M$ dell'argomento sulle caratteristiche della sollecitazione. In un sistema di forze e coppie ogni coppia concentrata contribuisce al momento risultante con il proprio $\mathcal{M}$, qualunque sia il polo, e contribuisce con zero alla risultante. Le due forze di $5\,\mathrm{kN}$ della definizione, con la forza verso il basso a sinistra e quella verso l'alto a destra, formano una coppia di momento $\mathcal{M} = 5 \cdot 2 = 10\,\mathrm{kN\,m}$, antiorario.

::struttura{nodi="A,0,0;B,2,0" forze="A,0,-1,F;B,0,1,F" coppie="1 0.6,1,ℳ" quote="A,B,d = 2 m,1.4" tratteggi="0,-1.2 0,1.4;2,-1.2 2,1.4" punti="0,0;2,0" titolo="Coppia di braccio $d$: la risultante è nulla e il momento vale $\mathcal{M} = F d$ rispetto a ogni polo"}

:::dimostrazione
La risultante della coppia è $\vec{F} - \vec{F} = \vec{0}$, quindi per la formula del cambiamento di polo il momento è lo stesso per tutti i poli. Si calcola allora rispetto a $B$. La forza $-\vec{F}$, applicata in $B$, ha momento nullo, e la forza $\vec{F}$ ha momento $\overrightarrow{BA} \times \vec{F}$. Per il teorema sul momento e il braccio il modulo di questo momento è $F$ per la distanza di $B$ dalla retta d'azione di $\vec{F}$, cioè $F d$.
:::
::::

## Sistemi equivalenti e trasporto delle forze

:::definizione{#sistemi-equivalenti titolo="Sistemi di forze equivalenti"}
Due sistemi di forze e coppie applicati allo stesso corpo rigido sono **equivalenti** se hanno la stessa risultante e lo stesso momento risultante rispetto a un polo $O$:
$$
\begin{cases}
\vec{R}' = \vec{R} \\[4pt]
\vec{M}'_O = \vec{M}_O
\end{cases}
$$
Nel piano le condizioni sono le tre uguaglianze scalari $R'_x = R_x$, $R'_y = R_y$ e $M'_O = M_O$. Le equazioni di equilibrio di un corpo rigido contengono le forze solo attraverso $\vec{R}$ e $\vec{M}_O$, come si vede nell'argomento sulle equazioni cardinali della statica; perciò due sistemi equivalenti danno le stesse reazioni vincolari, e un sistema complicato si può sostituire con un sistema equivalente più semplice. Due carichi di $10\,\mathrm{kN}$ verso il basso, a $1\,\mathrm{m}$ e a $5\,\mathrm{m}$ dall'estremo $A$ di una trave, sono equivalenti a un carico di $20\,\mathrm{kN}$ verso il basso a $3\,\mathrm{m}$ da $A$, perché in entrambi i casi $R_y = -20\,\mathrm{kN}$ e $M_A = -60\,\mathrm{kN\,m}$.
:::

::::teorema{#equivalenza-rispetto-a-ogni-polo titolo="Equivalenza rispetto a ogni polo"}
Se due sistemi hanno la stessa risultante e lo stesso momento rispetto a un polo $O$, allora hanno lo stesso momento rispetto a ogni polo $O'$. Quindi l'equivalenza non dipende dal polo con cui la si verifica, e il polo si sceglie in modo da semplificare i conti, per esempio nel punto di applicazione di una delle forze.

:::dimostrazione
Si applica la formula del cambiamento di polo ai due sistemi e si usano le uguaglianze $\vec{R}' = \vec{R}$ e $\vec{M}'_O = \vec{M}_O$:
$$
\vec{M}'_{O'} = \vec{M}'_O + \overrightarrow{O'O} \times \vec{R}' = \vec{M}_O + \overrightarrow{O'O} \times \vec{R} = \vec{M}_{O'} .
$$
:::
::::

::::teorema{#scorrimento-e-trasporto titolo="Scorrimento e trasporto parallelo di una forza"}
Sia $(P, \vec{F})$ una forza applicata a un corpo rigido.

- **Scorrimento**: per ogni punto $P'$ della retta d'azione, la forza $(P', \vec{F})$ è equivalente a $(P, \vec{F})$.
- **Trasporto parallelo**: per ogni punto $Q$, la forza $(P, \vec{F})$ è equivalente al sistema formato dalla forza $(Q, \vec{F})$ e dalla coppia di momento
$$
\mathcal{M}_t = \overrightarrow{QP} \times \vec{F} ,
$$
detta **coppia di trasporto**, che è il momento della forza originaria rispetto al punto di arrivo $Q$.

Il trasporto serve a riportare le forze in un punto scelto, per esempio in un nodo di un telaio o nell'incastro di una mensola. Una forza di $6\,\mathrm{kN}$ verso il basso applicata in $P$, a $2\,\mathrm{m}$ a destra di $Q$, è equivalente alla stessa forza applicata in $Q$ insieme alla coppia $\mathcal{M}_t = 2 \cdot (-6) = -12\,\mathrm{kN\,m}$, oraria.

::struttura{nodi="Q,0,0;P,2,0" aste="Q-P" forze="P,0,-1,F" quote="Q,P,2 m" titolo="La forza $F = 6\,\mathrm{kN}$ applicata in $P$"}

::struttura{nodi="Q,0,0;P,2,0" aste="Q-P" forze="Q,0,-1,F" coppie="Q,-1,ℳ_t" quote="Q,P,2 m" titolo="Il sistema equivalente in $Q$: la stessa forza e la coppia di trasporto $\mathcal{M}_t = -12\,\mathrm{kN\,m}$"}

:::dimostrazione
In entrambi i casi la risultante è $\vec{F}$. Nello scorrimento il momento rispetto a ogni polo resta lo stesso per il teorema sul momento e il braccio. Nel trasporto si confrontano i momenti rispetto a $Q$. La forza originaria ha momento $\overrightarrow{QP} \times \vec{F}$; nel nuovo sistema la forza applicata in $Q$ ha momento nullo e la coppia ha momento $\mathcal{M}_t = \overrightarrow{QP} \times \vec{F}$. I due sistemi hanno quindi la stessa risultante e lo stesso momento rispetto a $Q$, perciò sono equivalenti.
:::
::::

:::osservazione{#da-forza-e-coppia-a-una-forza titolo="Da una forza e una coppia a una sola forza"}
Il trasporto si percorre anche al contrario. Una forza $(Q, \vec{F})$ con $\vec{F} \neq \vec{0}$ e una coppia di momento $\mathcal{M}$ sono equivalenti alla sola forza $\vec{F}$ spostata parallelamente a sé stessa della distanza $d = \dfrac{|\mathcal{M}|}{F}$, dalla parte in cui il momento di $\vec{F}$ rispetto a $Q$ ha il segno di $\mathcal{M}$. La forza di $6\,\mathrm{kN}$ verso il basso applicata in $Q$ e la coppia di $-12\,\mathrm{kN\,m}$ sono quindi equivalenti alla forza di $6\,\mathrm{kN}$ applicata a $2\,\mathrm{m}$ a destra di $Q$, dove un carico verso il basso ha momento orario rispetto a $Q$.
:::

## Riduzione di un sistema piano di forze

Le operazioni di scorrimento e trasporto permettono di sostituire un sistema qualsiasi del piano con un sistema equivalente formato al più da una forza o da una coppia.

::::teorema{#riduzione-sistema-piano titolo="Riduzione di un sistema piano di forze"}
Sia un sistema piano di forze e coppie con risultante $\vec{R} = (R_x, R_y)$ e momento $M_O$ rispetto all'origine $O$.

- Se $\vec{R} \neq \vec{0}$, il sistema è equivalente alla sola forza $\vec{R}$ applicata in un punto qualsiasi della retta di equazione
$$
x\,R_y - y\,R_x = M_O ,
$$
che è parallela a $\vec{R}$ e si chiama **retta d'azione della risultante**; la sua distanza da $O$ è $\dfrac{|M_O|}{R}$.
- Se $\vec{R} = \vec{0}$ e $M_O \neq 0$, il sistema è equivalente a una coppia di momento $M_O$.
- Se $\vec{R} = \vec{0}$ e $M_O = 0$, il sistema è equivalente al sistema nullo.

Per carichi verticali su una trave orizzontale si ha $R_x = 0$, e se $R_y \neq 0$ la retta d'azione della risultante è la verticale di ascissa $x = \dfrac{M_O}{R_y}$.

:::dimostrazione
Nel primo caso si cerca un punto $(x, y)$ in cui la forza $\vec{R}$ abbia momento $M_O$ rispetto a $O$. Il momento di $\vec{R}$ applicata in $(x, y)$ è $x R_y - y R_x$, quindi i punti cercati sono le soluzioni dell'equazione $x R_y - y R_x = M_O$. Poiché $\vec{R} \neq \vec{0}$, i coefficienti $R_y$ e $-R_x$ non sono entrambi nulli, e l'equazione rappresenta una retta. Il vettore $(R_x, R_y)$ soddisfa l'equazione omogenea $x R_y - y R_x = 0$, perciò è parallelo alla retta. La forza $\vec{R}$ applicata su questa retta ha la stessa risultante e lo stesso momento rispetto a $O$ del sistema, quindi è equivalente al sistema; per il teorema sul momento e il braccio la distanza di $O$ dalla retta è $\dfrac{|M_O|}{R}$. Nel secondo caso una coppia di momento $M_O$ ha risultante nulla e, per il teorema sul momento di una coppia, momento $M_O$ rispetto a ogni polo, quindi è equivalente al sistema. Nel terzo caso il sistema ha risultante e momento nulli come il sistema nullo.
:::
::::

::::teorema{#teorema-di-varignon titolo="Teorema di Varignon"}
Siano $(P_1, \vec{F}_1), \dots, (P_n, \vec{F}_n)$ forze con rette d'azione che passano tutte per uno stesso punto $K$, e sia $\vec{R}$ la loro risultante. Allora per ogni polo $O$
$$
\overrightarrow{OK} \times \vec{R} = \sum_{i=1}^{n} \overrightarrow{OP_i} \times \vec{F}_i ,
$$
cioè il momento della risultante applicata in $K$ è la somma dei momenti delle singole forze, e il sistema è equivalente alla risultante applicata in $K$. Il caso più usato è quello di una forza scomposta nelle componenti $F_x$ e $F_y$, applicate nel suo punto di applicazione; allora il momento della forza è la somma dei momenti delle due componenti, ciascuno calcolato con il proprio braccio. Per la forza con $F_x = 6\,\mathrm{kN}$ e $F_y = -8\,\mathrm{kN}$ applicata in $P = (4, 2)$, la componente verticale ha braccio $4\,\mathrm{m}$ e momento $-32\,\mathrm{kN\,m}$, la componente orizzontale ha braccio $2\,\mathrm{m}$ e momento $-12\,\mathrm{kN\,m}$, e la somma è il momento $-44\,\mathrm{kN\,m}$ già calcolato con il prodotto vettoriale.

:::dimostrazione
Per lo scorrimento ogni forza $\vec{F}_i$ si porta nel punto $K$ della sua retta d'azione senza cambiarne il momento, quindi $\overrightarrow{OP_i} \times \vec{F}_i = \overrightarrow{OK} \times \vec{F}_i$. Sommando su $i$ e usando la proprietà distributiva si ottiene $\sum_i \overrightarrow{OK} \times \vec{F}_i = \overrightarrow{OK} \times \vec{R}$.
:::
::::

:::esempio{titolo="Due forze e una coppia su una lastra"}
Su una lastra agiscono la forza $F_1 = 10\,\mathrm{kN}$ verso il basso, applicata in $(2, 0)$, la forza $F_2 = 6\,\mathrm{kN}$ verso destra, applicata in $(0, 3)$, e la coppia antioraria $\mathcal{M} = 8\,\mathrm{kN\,m}$, con le coordinate in metri. La risultante e il momento rispetto all'origine sono
$$
R_x = 6\,\mathrm{kN} ,
\qquad
R_y = -10\,\mathrm{kN} ,
\qquad
M_O = 2 \cdot (-10) - 3 \cdot 6 + 8 = -30\,\mathrm{kN\,m} .
$$
La retta d'azione della risultante ha equazione $-10x - 6y = -30$, cioè $5x + 3y = 15$, e taglia gli assi nei punti $(3, 0)$ e $(0, 5)$. Senza la coppia il momento sarebbe $-38\,\mathrm{kN\,m}$ e la retta d'azione sarebbe $5x + 3y = 19$, che passa per il punto $K = (2, 3)$ in cui si incontrano le rette d'azione di $F_1$ e $F_2$, come stabilisce il **teorema di Varignon**. Con la coppia la retta si sposta parallelamente a sé stessa della distanza $\dfrac{8}{\sqrt{6^2 + 10^2}} = 0{,}69\,\mathrm{m}$.

::struttura{poligoni="0,0 4,0 4,3 0,3" nodi="O,0,0;K,2,3" forze="2 -1.25,0,-1.25,F_1;0 3,1.2,0,F_2" coppie="3 1.5,1,ℳ" tratteggi="2,-1.4 2,4.2;-1.4,3 4.6,3;-0.6,6 4.2,-2" reazioni="3 0,0.75,-1.25,R" punti="2,3;3,0" titolo="Le forze $F_1$, $F_2$, la coppia $\mathcal{M}$ e, nel secondo colore, la risultante sulla retta $5x + 3y = 15$"}

:::

## Forze parallele

::::teorema{#centro-forze-parallele titolo="Centro delle forze parallele"}
Sia un sistema di forze parallele $\vec{F}_i = F_i\,\hat{u}$, applicate nei punti $P_i = (x_i, y_i)$, dove $\hat{u}$ è un versore comune e $F_i$ è un numero con segno, positivo se la forza ha il verso di $\hat{u}$. Se $\sum_i F_i \neq 0$, il sistema è equivalente alla risultante $\big( \sum_i F_i \big)\,\hat{u}$ applicata nel **centro delle forze parallele** $C$, di coordinate
$$
x_C = \frac{\sum_i F_i\,x_i}{\sum_i F_i} ,
\qquad
y_C = \frac{\sum_i F_i\,y_i}{\sum_i F_i} .
$$
Il punto $C$ dipende dalle intensità e dai punti di applicazione, e non dipende dalla direzione $\hat{u}$: se tutte le forze ruotano dello stesso angolo attorno ai loro punti di applicazione, la retta d'azione della risultante ruota attorno a $C$. Tre carichi verticali di $10$, $20$ e $30\,\mathrm{kN}$ verso il basso, applicati a $1$, $4$ e $6\,\mathrm{m}$ dall'estremo $A$ di una trave, hanno risultante di $60\,\mathrm{kN}$ verso il basso, con retta d'azione per
$$
x_C = \frac{10 \cdot 1 + 20 \cdot 4 + 30 \cdot 6}{60} = 4{,}5\,\mathrm{m} .
$$
Con lo stesso calcolo si trovano il baricentro di un corpo, come centro dei pesi delle sue parti, e la retta d'azione della risultante di un carico distribuito; per il baricentro si rimanda all'argomento sulla geometria delle masse.

::struttura{nodi="A,0,0;B,7,0;C,4.5,0" aste="A-B" forze="1 0,0,-0.6,10 kN;4 0,0,-1.2,20 kN;6 0,0,-1.8,30 kN" reazioni="4.5 -1.9,0,-1.6,60 kN" quote="A,4.5 0,4.5 m,2.4" punti="4.5,0" titolo="Tre carichi paralleli e, nel secondo colore, la loro risultante applicata nel centro $C$"}

:::dimostrazione
La risultante è $\sum_i F_i\,\hat{u}$. Si pone $R = \sum_i F_i$ e si indica con $C$ il punto tale che $\overrightarrow{OC} = \dfrac{1}{R}\sum_i F_i\,\overrightarrow{OP_i}$, le cui coordinate sono quelle dell'enunciato. Per la proprietà distributiva del prodotto vettoriale il momento rispetto all'origine $O$ è
$$
\begin{aligned}
\vec{M}_O &= \sum_i \overrightarrow{OP_i} \times F_i\,\hat{u} = \Big( \sum_i F_i\,\overrightarrow{OP_i} \Big) \times \hat{u} \\[6pt]
&= R\,\overrightarrow{OC} \times \hat{u} = \overrightarrow{OC} \times R\,\hat{u} .
\end{aligned}
$$
Quindi la risultante applicata in $C$ ha lo stesso momento rispetto a $O$ del sistema, e il sistema le è equivalente. Il punto $C$ è definito senza usare $\hat{u}$, perciò non dipende dalla direzione delle forze.
:::
::::

:::osservazione{#forze-parallele-a-risultante-nulla titolo="Forze parallele con risultante nulla"}
Se $\sum_i F_i = 0$ le formule del centro perdono significato, perché il denominatore è nullo. In questo caso la risultante è nulla e, per la riduzione di un sistema piano, il sistema è equivalente a una coppia oppure è equivalente al sistema nullo. L'esempio più semplice è una coppia: due forze parallele, opposte, su rette distinte.
:::

## Sistemi equilibrati

:::definizione{#sistema-equilibrato titolo="Sistema equilibrato"}
Un sistema di forze e coppie è **equilibrato** se è equivalente al sistema nullo, cioè se
$$
\begin{cases}
\vec{R} = \vec{0} \\[4pt]
\vec{M}_O = \vec{0}
\end{cases}
$$
per un polo $O$, e quindi, per la formula del cambiamento di polo, per ogni polo. Nel piano le condizioni sono le tre equazioni scalari $R_x = 0$, $R_y = 0$ e $M_O = 0$. Un corpo rigido fermo resta in equilibrio se e solo se il sistema di tutte le forze che agiscono su di esso, comprese le reazioni dei vincoli, è equilibrato; è il contenuto delle equazioni cardinali della statica, trattate nell'argomento sulle reazioni vincolari. Due forze formano un sistema equilibrato se e solo se sono opposte e hanno la stessa retta d'azione. Infatti la condizione $\vec{R} = \vec{0}$ dice che sono opposte, e allora formano una coppia oppure stanno sulla stessa retta, e il momento è nullo solo nel secondo caso.
:::

::::teorema{#tre-forze-in-equilibrio titolo="Tre forze in equilibrio"}
Sia equilibrato un sistema di tre forze non nulle del piano, e le rette d'azione di due di esse si incontrino nel punto $K$. Allora anche la retta d'azione della terza forza passa per $K$. Il teorema dà la direzione di una forza incognita applicata in un punto noto, quando sono note le rette d'azione delle altre due. Per esempio, un carico di $12\,\mathrm{kN}$ verso il basso applicato in $(2, 0)$, una forza applicata in $B = (6, 0)$ con retta d'azione inclinata di $45^\circ$, $y = 6 - x$, e una forza applicata in $A = (0, 0)$ sono in equilibrio solo se la forza in $A$ è diretta lungo la retta che congiunge $A$ con $K = (2, 4)$; le equazioni $R_x = 0$ e $R_y = 0$ danno poi $8{,}94\,\mathrm{kN}$ per la forza in $A$ e $5{,}66\,\mathrm{kN}$ per la forza in $B$.

:::dimostrazione
Il sistema è equilibrato, quindi il suo momento rispetto a $K$ è nullo. Le prime due forze hanno momento nullo rispetto a $K$, perché le loro rette d'azione passano per $K$; perciò anche la terza forza ha momento nullo rispetto a $K$. La terza forza è non nulla, quindi per il teorema sul momento e il braccio la sua retta d'azione passa per $K$.
:::
::::

## Carichi distribuiti

:::definizione{#carico-distribuito titolo="Carico distribuito"}
Un **carico distribuito** è una forza ripartita con continuità lungo un tratto di trave. Si descrive con la sua intensità $q(x)$, forza per unità di lunghezza misurata in $\mathrm{kN/m}$ e positiva verso il basso; sul tratto di lunghezza $dx$ nell'ascissa $x$ agisce la forza verticale $q(x)\,dx$. Il **diagramma del carico** è la regione compresa fra l'asse della trave e il grafico di $q$. Il peso proprio di una trave omogenea è un carico uniforme, mentre la spinta dell'acqua su una parete cresce linearmente con la profondità e dà un carico triangolare. Un carico distribuito è un sistema di infinite forze parallele, e la sua risultante si ottiene dal centro delle forze parallele sostituendo le somme con integrali.
:::

:::richiamo{titolo="Integrale definito"}
Per una funzione $f$ continua su $[a, b]$ l'integrale $\displaystyle\int_a^b f(x)\,dx$ è il limite delle somme $\sum_k f(x_k)\,\Delta x_k$ quando l'ampiezza massima degli intervalli $\Delta x_k$ tende a zero; per $f \geq 0$ è l'area della regione compresa fra il grafico e l'asse $x$. Se $F$ è una primitiva di $f$, vale $\displaystyle\int_a^b f(x)\,dx = F(b) - F(a)$. Si rimanda all'argomento sul calcolo integrale di Analisi 1.
:::

::::teorema{#risultante-carico-distribuito titolo="Risultante di un carico distribuito"}
Sia $q(x) \geq 0$ un carico continuo, o continuo a tratti, sul tratto $a \leq x \leq b$ di una trave orizzontale. Allora il carico è equivalente a una forza verticale verso il basso di intensità
$$
Q = \int_a^b q(x)\,dx ,
$$
uguale all'area del diagramma del carico, con retta d'azione verticale di ascissa
$$
x_Q = \frac{1}{Q}\int_a^b x\,q(x)\,dx ,
$$
che è l'ascissa del baricentro del diagramma del carico. Con la risultante, i carichi distribuiti entrano nelle equazioni di equilibrio come forze concentrate.

:::dimostrazione
Si divide $[a, b]$ in intervalli di ampiezza $\Delta x_k$ e si sostituisce il carico su ciascun intervallo con la forza $q(x_k)\,\Delta x_k$ applicata in un suo punto $x_k$. Queste forze sono verticali, quindi per il centro delle forze parallele la loro risultante vale $\sum_k q(x_k)\,\Delta x_k$ e ha retta d'azione di ascissa
$$
\frac{\sum_k x_k\,q(x_k)\,\Delta x_k}{\sum_k q(x_k)\,\Delta x_k} .
$$
Quando l'ampiezza degli intervalli tende a zero, le due somme tendono agli integrali dell'enunciato. Nel diagramma del carico la striscia di base $dx$ e altezza $q(x)$ ha area $q(x)\,dx$ e baricentro di ascissa $x$; perciò $\displaystyle\int_a^b x\,q(x)\,dx$ è il momento statico del diagramma rispetto all'asse $y$, e $x_Q$ è l'ascissa del suo baricentro, come si vede nell'argomento sulla geometria delle masse.
:::
::::

::::teorema{#carichi-notevoli titolo="Carichi uniforme, triangolare e trapezoidale"}
Sia $L$ la lunghezza del tratto caricato e sia $x$ misurata dal suo estremo sinistro.

- Carico **uniforme** $q$: $Q = qL$, con $x_Q = \dfrac{L}{2}$.
- Carico **triangolare**, nullo nell'estremo sinistro e pari a $q_0$ nell'estremo destro: $Q = \dfrac{q_0 L}{2}$, con $x_Q = \dfrac{2L}{3}$, cioè a un terzo del tratto dall'estremo in cui il carico è massimo.
- Carico **trapezoidale**, pari a $q_1$ nell'estremo sinistro e a $q_2$ nell'estremo destro:
$$
Q = \frac{(q_1 + q_2)\,L}{2} ,
\qquad
x_Q = \frac{(q_1 + 2q_2)\,L}{3\,(q_1 + q_2)} .
$$

Il carico trapezoidale si può anche scomporre in un carico uniforme $q_1$ e in un carico triangolare da $0$ a $q_2 - q_1$, e usare le due risultanti separatamente. Con $q_1 = 2\,\mathrm{kN/m}$, $q_2 = 8\,\mathrm{kN/m}$ e $L = 6\,\mathrm{m}$ la parte uniforme dà $12\,\mathrm{kN}$ a $3\,\mathrm{m}$ e la parte triangolare $18\,\mathrm{kN}$ a $4\,\mathrm{m}$; la formula dà $Q = 30\,\mathrm{kN}$ con
$$
x_Q = \frac{(2 + 16) \cdot 6}{3 \cdot 10} = 3{,}6\,\mathrm{m} ,
$$
che è il centro delle due forze parziali, $\dfrac{12 \cdot 3 + 18 \cdot 4}{30} = 3{,}6\,\mathrm{m}$.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" carichi="A,B,0,1.2,q_0" reazioni="4 1.35,0,-1.3,Q" quote="A,4 0,4 m,0.9;4 0,B,2 m,0.9" riferimento=0 titolo="Carico triangolare su $L = 6\,\mathrm{m}$: la risultante $Q = \dfrac{q_0 L}{2}$ passa a $4\,\mathrm{m}$ dall'estremo scarico"}

::struttura{nodi="A,0,0;B,6,0" aste="A-B" carichi="A,B,0.3,1.2,q" reazioni="3.6 1.35,0,-1.3,Q" quote="A,3.6 0,3.6 m,0.9" riferimento=0 titolo="Carico trapezoidale da $2$ a $8\,\mathrm{kN/m}$ su $6\,\mathrm{m}$: la risultante $Q = 30\,\mathrm{kN}$ passa a $3{,}6\,\mathrm{m}$ da $A$"}

:::dimostrazione
Il carico trapezoidale è $q(x) = q_1 + (q_2 - q_1)\,\dfrac{x}{L}$, e contiene gli altri due come casi particolari, $q_1 = q_2 = q$ e $q_1 = 0$, $q_2 = q_0$. Per la risultante di un carico distribuito
$$
Q = \int_0^L \Big( q_1 + (q_2 - q_1)\,\frac{x}{L} \Big)\,dx = q_1 L + (q_2 - q_1)\,\frac{L}{2} = \frac{(q_1 + q_2)\,L}{2} ,
$$
$$
\int_0^L x\,q(x)\,dx = q_1\,\frac{L^2}{2} + (q_2 - q_1)\,\frac{L^2}{3} = \frac{(q_1 + 2q_2)\,L^2}{6} ,
$$
e dividendo il secondo integrale per $Q$ si ottiene $x_Q$. Con $q_1 = q_2$ si trova $x_Q = \dfrac{L}{2}$; con $q_1 = 0$ si trovano $Q = \dfrac{q_2 L}{2}$ e $x_Q = \dfrac{2L}{3}$.
:::
::::

:::osservazione{#carichi-su-asta-inclinata titolo="Carichi su un'asta inclinata"}
Su un'asta inclinata di lunghezza $\ell$, con proiezione orizzontale $a$, un carico verticale uniforme si assegna in due modi. Il peso proprio è dato per unità di lunghezza dell'asta, $q_s$, e ha risultante $q_s\,\ell$. Il carico della neve è dato per unità di lunghezza della proiezione orizzontale, $q$, e ha risultante $q\,a$. In entrambi i casi la risultante è verticale e passa per il punto medio dell'asta. Per un'asta lunga $5\,\mathrm{m}$, con proiezione orizzontale di $4\,\mathrm{m}$, un peso proprio di $2\,\mathrm{kN/m}$ ha risultante $10\,\mathrm{kN}$, mentre un carico di neve di $2\,\mathrm{kN/m}$ ha risultante $8\,\mathrm{kN}$. Un carico uniforme $p$ perpendicolare all'asta, come la pressione del vento, ha risultante $p\,\ell$ perpendicolare all'asta, applicata nel punto medio.

::struttura{nodi="A,0,0;B,4,3" aste="A-B" carichi="A,B,0.6,0.6,q_s" reazioni="2 1.5,0,-1.3,q_s ℓ" quote="A,4 0,a = 4 m,0.5;A,B,ℓ = 5 m,-0.9" titolo="Peso proprio $q_s$ lungo un'asta inclinata: la risultante $q_s\,\ell$ è verticale e passa per il punto medio"}

:::

:::attenzione
Sostituire un carico con la sua risultante lascia invariate le reazioni vincolari e cambia invece gli sforzi all'interno della trave. Una trave appoggiata di luce $4\,\mathrm{m}$, caricata con $q = 5\,\mathrm{kN/m}$ su tutta la luce oppure con la risultante di $20\,\mathrm{kN}$ in mezzeria, ha in entrambi i casi reazioni di $10\,\mathrm{kN}$ negli appoggi; il momento flettente in mezzeria vale invece $10\,\mathrm{kN\,m}$ con il carico distribuito e $20\,\mathrm{kN\,m}$ con la forza concentrata. Il carico si sostituisce quindi con la sua risultante nelle equazioni di equilibrio di un corpo, o di una parte di corpo, che contiene per intero il tratto caricato; per una parte che ne contiene solo un tratto si usa la risultante di quel tratto, come si vede nell'argomento sulle caratteristiche della sollecitazione.
:::
