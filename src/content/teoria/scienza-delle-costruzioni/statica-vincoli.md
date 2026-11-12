---
titolo: Vincoli ed equilibrio delle strutture piane
sommario: Dai vincoli al corpo libero, si calcolano le reazioni di travi e telai e si riconoscono le strutture labili, isostatiche e iperstatiche.
---

## Dal manufatto allo schema piano

:::definizione{#corpo-rigido titolo="Corpo rigido e gradi di libertà"}
Nel calcolo delle reazioni di una struttura isostatica si può descrivere la geometria iniziale mediante corpi rigidi. Un **corpo rigido** conserva la distanza fra ogni coppia di punti. Nel piano, la sua configurazione è descritta dalle due coordinate di un punto $O$ e dall’angolo di un segmento materiale che passa per $O$. Queste tre quantità sono i gradi di libertà del corpo. Un vincolo aggiunge una condizione che una configurazione ammissibile deve soddisfare.

Un modello piano si applica quando la geometria e le azioni da studiare sono rappresentabili nello stesso piano. L’asse $x$ è orientato verso destra, l’asse $y$ verso l’alto e l’asse $z$ esce dal foglio. Una forza obliqua viene rappresentata dalle sue componenti $F_x$ e $F_y$. Una coppia è positiva se tende a far ruotare il corpo in senso antiorario. Le distanze si misurano in metri, le forze in chilonewton e i momenti in chilonewton metro.
:::

:::definizione{#momento-forza-piana titolo="Momento di una forza rispetto a un polo"}
Il **momento** di una forza rispetto al punto $O$ misura l’effetto rotatorio della forza attorno a quel punto. Sia $P$ il punto di applicazione e siano $(x_P,y_P)$ e $(x_O,y_O)$ le coordinate dei due punti. La componente del prodotto vettoriale lungo $z$ vale
$$
M_O(F)=(x_P-x_O)F_y-(y_P-y_O)F_x.
$$
Una forza verticale verso il basso applicata a destra di $O$ ha momento negativo, perché il suo contributo è orario. Una forza orizzontale applicata a quota diversa da quella del polo ha un braccio pari al dislivello. La formula resta valida anche se $P$ viene spostato lungo la retta d’azione, perché si aggiunge al prodotto vettoriale un vettore parallelo alla forza.

::struttura{nodi="O,0,0;P,4,2" tratteggi="0,0 4,0 4,2" forze="P,1.4,-0.7,F" quote="0 0,4 0,4 m;4 0,4 2,2 m,0.65" titolo="Coordinate del punto di applicazione rispetto al polo O"}
:::

:::esempio{titolo="Una forza applicata sopra il polo"}
Nel punto $P=(4,2)$, con coordinate in metri, agisce una forza con $F_x=6\,\mathrm{kN}$ e $F_y=-3\,\mathrm{kN}$. Il contributo della componente verticale rispetto all’origine è $4\cdot(-3)=-12\,\mathrm{kN\,m}$. La componente orizzontale produce $-2\cdot6=-12\,\mathrm{kN\,m}$. Il momento totale è quindi $-24\,\mathrm{kN\,m}$, in senso orario. Se si prende come polo $P$, entrambe le componenti hanno braccio nullo e il momento diventa zero.
:::

:::esempio{titolo="Trasporto di una forza e coppia equivalente"}
Una forza di $10\,\mathrm{kN}$ verso il basso agisce a $3\,\mathrm{m}$ a destra di $O$. Il sistema ha risultante verticale di $10\,\mathrm{kN}$ verso il basso e momento rispetto a $O$ pari a $-30\,\mathrm{kN\,m}$. Se la forza viene applicata in $O$, la risultante resta la stessa, mentre il momento della forza rispetto a $O$ si annulla. L’equivalenza richiede allora di aggiungere una coppia oraria di $30\,\mathrm{kN\,m}$.

Il trasporto è utile quando un’azione è applicata attraverso una staffa sporgente. La geometria della staffa determina il braccio rispetto all’asse della trave. Sul corpo libero della trave si possono riportare la forza lungo l’asse e la coppia corrispondente. La forza trasferita e la coppia riproducono insieme le azioni iniziali. Il risultato si verifica rispetto a un polo diverso da $O$ perché i due sistemi hanno sia la stessa risultante sia lo stesso momento rispetto a $O$.
:::

:::esempio{titolo="Appoggio a rulli di un ponte"}
I rulli permettono uno scorrimento nella direzione di rotolamento. Il perno permette una rotazione relativa. Nello schema piano di un carrello ideale si rappresenta la reazione normale alla guida. La fotografia mostra l’origine di questa idealizzazione.

<figure class="grafico foto-tecnica"><img src="/immagini/scienza-delle-costruzioni/appoggio-rulli.webp" alt="Appoggio metallico con rulli paralleli sotto un perno di rotazione" width="1280" height="960" loading="lazy" decoding="async"><figcaption>Appoggio a rulli di un ponte. Foto ridimensionata di <a href="https://commons.wikimedia.org/wiki/File:BridgeBearing.jpg">Douglas W. Jones</a>, <a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0 1.0</a>.</figcaption></figure>
:::

## Vincoli esterni e corpo libero

:::definizione{#vincoli-piani titolo="Carrello, cerniera e incastro"}
Un **vincolo ideale** esercita una reazione associata al moto che impedisce. Il carrello su un piano liscio blocca la traslazione lungo la normale al piano. La sua reazione ha quindi una sola incognita scalare. Se il piano è orizzontale, la reazione è verticale. Se il piano è inclinato, le componenti orizzontale e verticale sono le proiezioni della stessa forza, quindi rimane una sola incognita.

Una cerniera esterna fissa il suo punto in entrambe le direzioni e lascia libera la rotazione del corpo attorno a quel punto. In una cerniera posta in $A$ si introducono le componenti $H_A$ e $V_A$. L’incastro fissa le due coordinate del punto e l’orientamento della sezione collegata. Perciò al sistema di due forze si aggiunge la coppia reattiva $M_A$.
:::

:::esempio{titolo="Dallo schema vincolato al corpo libero"}
La trave in figura è vincolata da una cerniera a sinistra e da un carrello su piano orizzontale a destra. Nel **diagramma di corpo libero** i vincoli vengono sostituiti dalle loro azioni. Le componenti incognite sono orientate secondo gli assi. Il segno ottenuto nel calcolo indica se il verso reale coincide con quello disegnato.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" forze="2 0,0,-1.1,P" quote="A,2 0,2 m;2 0,B,4 m" titolo="Trave vincolata con forza concentrata"}

::struttura{nodi="A,0,0;B,6,0" aste="A-B" forze="2 0,0,-1.1,P" reazioni="A,0,1,V_A;A,0.9,0,H_A;B,0,1,V_B" titolo="Corpo libero con le tre reazioni incognite"}

Se si studia l’intero sistema, sul diagramma compaiono le azioni applicate dall’esterno. Se si isola una parte, compaiono anche le azioni che le altre parti esercitano attraverso i collegamenti. La scelta del corpo da isolare determina quindi quali forze entrano nelle equazioni.
:::

:::osservazione{titolo="Normale di un carrello inclinato"}
Sia $\boldsymbol{n}=(n_x,n_y)$ il versore normale assegnato al piano di scorrimento. La reazione del carrello in $B$ è $R_B\boldsymbol{n}$. Se $\boldsymbol{n}=\left(-\dfrac{3}{5},\dfrac{4}{5}\right)$, le due componenti sono $-\dfrac{3}{5} R_B$ e $\dfrac{4}{5} R_B$. Il segno di $R_B$ determina il verso lungo la normale. Le due proiezioni vanno sostituite prima di scrivere il sistema, così il numero delle incognite rispetta quello dei vincoli.
:::

## Equazioni di equilibrio e scelta del polo

::::teorema{#equilibrio-piano titolo="Equazioni di equilibrio nel piano"}
Un corpo rigido piano è in equilibrio statico se la risultante delle forze applicate è nulla e il momento risultante rispetto a un polo $O$ è nullo. Nel momento risultante entrano sia i momenti delle forze sia le coppie applicate direttamente. Le condizioni sono
$$
\begin{cases}
\sum F_x=0,\\[4pt]
\sum F_y=0,\\[4pt]
\sum M_O=0.
\end{cases}
$$

:::dimostrazione
Si esprime lo spostamento virtuale rigido mediante due traslazioni e una rotazione infinitesima indipendenti. Se $\delta u_O$ e $\delta v_O$ sono le traslazioni del polo e $\delta\varphi$ è la rotazione antioraria, il punto di applicazione di una forza ha spostamento
$$
\delta x_P=\delta u_O-(y_P-y_O)\delta\varphi,\qquad
\delta y_P=\delta v_O+(x_P-x_O)\delta\varphi.
$$
Il lavoro della forza è $F_x\delta x_P+F_y\delta y_P$. Sommando anche il lavoro delle coppie si ottiene
$$
\delta L=\left(\sum F_x\right)\delta u_O+
\left(\sum F_y\right)\delta v_O+
\left(\sum M_O\right)\delta\varphi.
$$
Dopo aver sostituito i vincoli con le reazioni, il corpo libero è in equilibrio quando questo lavoro si annulla per tutti i moti rigidi virtuali. Le tre variazioni sono indipendenti, quindi il lavoro è nullo per ogni scelta se e solo se tutti e tre i coefficienti sono nulli.
:::
::::

:::esempio{titolo="Una forza fuori mezzeria"}
Sulla trave lunga $6\,\mathrm{m}$ del diagramma di corpo libero agisce $P=18\,\mathrm{kN}$ a $2\,\mathrm{m}$ da $A$. Se si sceglie $A$ come polo, entrambe le reazioni della cerniera hanno braccio nullo. Rimane quindi $6V_B-2\cdot18=0$, da cui $V_B=6\,\mathrm{kN}$. L’equilibrio verticale dà $V_A=18-6=12\,\mathrm{kN}$. La forza applicata è verticale e il carrello è orizzontale, quindi $H_A=0$.

La forza è più vicina ad $A$ che a $B$. Perciò il suo braccio rispetto a $B$ è maggiore e si ottiene una reazione maggiore in $A$. Prendendo $B$ come polo, il bilancio è $-6\cdot12+4\cdot18=0$, espresso in chilonewton metro.
:::

:::osservazione{titolo="Forza, coppia e cambiamento di polo"}
Il momento di una coppia è indipendente dal polo perché le due forze che la formano hanno risultante nulla. Per un sistema con risultante $\boldsymbol R$, invece, cambiando polo da $O$ a $B$ si ottiene
$$
M_B=M_O-(x_B-x_O)R_y+(y_B-y_O)R_x.
$$
Dunque, se $\boldsymbol R=\boldsymbol 0$, i momenti rispetto ai due poli coincidono. La scelta del polo può semplificare il calcolo delle reazioni. Scrivere i momenti rispetto a un secondo punto dà anche un controllo dei bracci e dei versi inseriti nel primo conto.
:::

## Carichi distribuiti e risultanti equivalenti

::::teorema{#risultante-carichi titolo="Risultante e punto di applicazione"}
Sia $q(x)\geq0$ l’intensità di un carico verticale verso il basso, espressa in chilonewton al metro. Sul tratto da $a$ a $b$ si suppone che $q$ sia integrabile e che la sua risultante abbia intensità positiva. Rispetto all’origine, il carico equivale a una forza verticale verso il basso di intensità $Q$, applicata alla coordinata $x_Q$, dove
$$
Q=\int_a^b q(x)\,\mathrm{d}x,\qquad
x_Q=\frac{\int_a^b xq(x)\,\mathrm{d}x}{Q}.
$$

:::dimostrazione
Si considerano la risultante delle forze e il momento rispetto all’origine. Un tratto di lunghezza $\mathrm{d}x$ produce una forza verticale elementare di intensità $q(x)\,\mathrm{d}x$ e un momento $-xq(x)\,\mathrm{d}x$. L’integrazione somma tutti i contributi, quindi il momento totale è $-\int_a^b xq(x)\,\mathrm{d}x$. La forza concentrata di intensità $Q$ ha momento $-Qx_Q$. Imponendo l’uguaglianza dei momenti si ricava la formula, e il cambiamento di polo garantisce l’equivalenza anche rispetto agli altri punti.
:::
::::

:::esempio{titolo="Rettangolo e triangolo sullo stesso tratto"}
L’intensità del carico cresce linearmente da $2\,\mathrm{kN/m}$ a $8\,\mathrm{kN/m}$ su un tratto di $6\,\mathrm{m}$. Si misura $x$ dall’inizio del tratto. Il diagramma è la somma di un rettangolo di altezza $2\,\mathrm{kN/m}$ e di un triangolo di altezza $6\,\mathrm{kN/m}$. Il primo contributo è $12\,\mathrm{kN}$ a $3\,\mathrm{m}$. Il secondo è $18\,\mathrm{kN}$ a $4\,\mathrm{m}$.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" carichi="A,B,0.35,1.4,q" quote="A,B,6 m" titolo="Carico trapezoidale crescente da 2 a 8 kN/m"}

La risultante totale vale $30\,\mathrm{kN}$. Il suo momento rispetto all’origine deve coincidere con la somma dei due momenti, quindi
$$
x_Q=\frac{12\cdot3+18\cdot4}{30}\,\mathrm{m}
=\frac{18}{5}\,\mathrm{m}=3{,}6\,\mathrm{m}.
$$
Il punto di applicazione è a destra della mezzeria perché la parte destra del diagramma ha intensità maggiore. La risultante è utile per l’equilibrio globale. Per le azioni interne in una sezione si considererà invece soltanto il carico presente sulla porzione isolata.
:::

:::osservazione{titolo="Verso di crescita e braccio del triangolo"}
Per un carico crescente da zero a $q_{\max}$ su una lunghezza $\ell$, si misura $x$ dal bordo a intensità nulla. Si ha $q(x)=\dfrac{q_{\max}}{\ell}x$. La risultante è $\dfrac{q_{\max}\ell}{2}$, mentre il primo momento del carico vale
$$
\int_0^\ell xq(x)\,\mathrm{d}x
=\frac{q_{\max}}{\ell}\int_0^\ell x^2\,\mathrm{d}x
=\frac{q_{\max}\ell^2}{3}.
$$
Dividendo il momento per la risultante si ottiene $x_Q=\dfrac{2\ell}{3}$. Se la rampa decresce da $q_{\max}$ a zero, il diagramma è il riflesso del precedente rispetto alla mezzeria. Perciò la risultante è invariata e il punto di applicazione diventa $x_Q=\dfrac{\ell}{3}$.

Se il triangolo inizia a un’ascissa $a$ diversa da zero, la distanza ricavata con origine sul bordo del carico si somma ad $a$. Per esempio, un triangolo crescente lungo $3\,\mathrm{m}$ che parte da $x=2\,\mathrm{m}$ ha il punto di applicazione a $x_Q=2+2=4\,\mathrm{m}$. Nell’equilibrio attorno all’origine il braccio vale quindi $4\,\mathrm{m}$. La distinzione fra ascissa assoluta e distanza dall’inizio del carico incide direttamente sulla reazione ricavata dall’equazione dei momenti.
:::

## Classificazione degli schemi vincolari

:::definizione{#classificazione-vincoli titolo="Isostaticità, iperstaticità e labilità"}
Una struttura è **isostatica** se i vincoli impediscono ogni moto rigido infinitesimo e l’equilibrio determina tutte le reazioni. È **iperstatica** se i moti rigidi sono impediti e l’equilibrio lascia alcune reazioni indeterminate. È **labile** se ammette almeno un moto rigido infinitesimo compatibile con i vincoli. Una struttura labile può avere anche vincoli ridondanti. Perciò confrontare il numero dei vincoli con il numero dei gradi di libertà dà una prima informazione, alla quale si aggiunge il controllo delle direzioni vincolate.
:::

::::teorema{#rango-vincoli titolo="Rango delle condizioni vincolari"}
Per un corpo rigido piano, si indichi con $K$ la matrice che associa ai tre moti rigidi infinitesimi le componenti di moto impedite. Se ci sono $m$ condizioni vincolari scalari e il rango di $K$ è $r$, lo spazio dei moti compatibili ha dimensione $3-r$. Lo spazio delle combinazioni di reazioni che si equilibrano da sole ha dimensione $m-r$.

:::dimostrazione
I moti compatibili risolvono $K\boldsymbol d=\boldsymbol 0$, dove $\boldsymbol d$ raccoglie le due traslazioni e la rotazione. Il teorema del rango dà la dimensione del nucleo come differenza fra il numero delle colonne e il rango. Le reazioni producono un lavoro virtuale pari al prodotto fra i loro valori e $K\boldsymbol d$. Le forze generalizzate equivalenti si leggono dunque dalla trasposta $K^{\mathsf T}$. Poiché una matrice e la sua trasposta hanno lo stesso rango, il nucleo della trasposta ha dimensione $m-r$.
:::
::::

:::esempio{titolo="Tre carrelli e una traslazione libera"}
Tre carrelli su piani orizzontali si trovano alle ascisse $0$, $2$ e $5\,\mathrm{m}$. Il moto verticale infinitesimo di un punto di ascissa $x$ è $\delta v_O+x\delta\varphi$. Le tre condizioni vincolari impongono che questo valore sia nullo in ciascuna posizione. Le prime due impongono $\delta v_O=0$ e $\delta\varphi=0$. La terza ripete una condizione già soddisfatta. Resta libera la traslazione $\delta u_O$, quindi il rango è due e lo schema è labile.

::struttura{nodi="A,0,0;C,2,0;B,5,0" aste="A-C;C-B" vincoli="A,carrello;C,carrello;B,carrello" frecce="1,0.9,3,0.9,u" titolo="Traslazione orizzontale compatibile con tre carrelli"}

Se il primo carrello è sostituito da una cerniera, il moto orizzontale viene impedito. Con tre condizioni verticali rimane una reazione verticale ridondante. Se si rimuove anche il carrello intermedio, restano tre condizioni indipendenti e lo schema diventa isostatico.
:::

:::esempio{titolo="Reazioni concorrenti e rotazione libera"}
Tre carrelli possono avere direzioni diverse e dare comunque uno schema labile. Nella figura le normali alle tre guide passano tutte per $O$. In una rotazione infinitesima attorno a $O$, la velocità del punto di ogni appoggio è perpendicolare al raggio che lo unisce a $O$. Poiché il raggio è parallelo alla normale della guida, ciascuna componente di velocità lungo la normale è nulla. La rotazione soddisfa quindi tutte le condizioni vincolari.

::struttura{nodi="A,-3,0;B,0,-2;C,2,2;O,0,0" aste="A-B;B-C" vincoli="A,carrello,180;B,carrello,270;C,carrello,45" tratteggi="-3,0 0,0;0,-2 0,0;2,2 0,0" titolo="Le rette delle tre reazioni passano per O"}

La stessa conclusione si ottiene dal corpo libero. Rispetto a $O$ le reazioni hanno tutte momento nullo, quindi una coppia applicata di momento non nullo resta senza equilibrio. La verifica cinematica individua il moto ammesso, mentre quella statica individua il tipo di carico incompatibile. Se si ruota una guida in modo che la sua normale passi fuori da $O$, la reazione acquista un braccio. Le altre due guide impediscono due componenti indipendenti del moto, quindi la nuova guida può impedire la rotazione residua.
:::

## Cerniere interne e campate portate

:::definizione{#cerniera-interna titolo="Forze scambiate alla cerniera"}
Una **cerniera interna** impone ai corpi collegati lo stesso spostamento del punto di collegamento e lascia libera la loro rotazione relativa. Può quindi trasmettere una forza con due componenti. La cerniera ideale trasmette momento nullo tra i due corpi. Se una coppia concentrata è applicata a uno dei corpi nel punto di collegamento, entra come azione esterna nel bilancio di quel corpo. Nel diagramma di un corpo si indicano le componenti scambiate con l’altro. Nel secondo diagramma compaiono le stesse componenti con segno opposto.

Una cerniera interna è diversa da una cerniera esterna perché collega due parti della struttura. La forza scambiata si cancella nell’equilibrio globale. Quando le sole equazioni globali lasciano una reazione indeterminata, isolare una delle parti fornisce un’equazione di momento attorno alla cerniera in cui le due componenti scambiate hanno braccio nullo.
:::

:::esempio{titolo="Reazioni di una trave Gerber"}
Sia $AC$ un tratto di $3\,\mathrm{m}$ incastrato in $A$. Il tratto $CB$, lungo $4\,\mathrm{m}$, è collegato in $C$ con una cerniera e poggia in $B$ su un carrello orizzontale. Una forza verso il basso di $20\,\mathrm{kN}$ agisce a $1\,\mathrm{m}$ da $C$.

::struttura{nodi="A,0,0;C,3,0;B,7,0" aste="A-C;C-B" vincoli="A,incastro,180;B,carrello" cerniere="C" forze="4 0,0,-1.15,P" quote="A,C,3 m;C,4 0,1 m;4 0,B,3 m" titolo="Trave Gerber con una forza sulla campata portata"}

Sul tratto $CB$ si scelgono come incognite verticali $Y_C$ e $V_B$, entrambe positive verso l’alto. Rispetto a $C$ l’equazione dei momenti è $4V_B-20\cdot1=0$, quindi $V_B=5\,\mathrm{kN}$. L’equilibrio verticale fornisce $Y_C=15\,\mathrm{kN}$. Sul tratto $AC$ agisce perciò una forza di $15\,\mathrm{kN}$ verso il basso. L’incastro esercita una forza verticale di $15\,\mathrm{kN}$ verso l’alto e una coppia antioraria di $45\,\mathrm{kN\,m}$. Poiché il carico è verticale, le reazioni orizzontali sono nulle.

::struttura{nodi="C,0,0;B,4,0" aste="C-B" forze="1 0,0,-1.2,P" reazioni="C,0,0.9,Y_C;B,0,0.9,V_B" quote="C,1 0,1 m;1 0,B,3 m" titolo="Corpo libero della campata portata CB"}

Le azioni in $C$ si elidono nell’equilibrio complessivo. Rispetto ad $A$ si ottiene $45+5\cdot7-20\cdot4=0$. Questo conto controlla insieme il braccio del carico, la coppia all’incastro e la reazione in $B$.
:::

:::osservazione{titolo="Conteggio per due corpi collegati"}
Due corpi rigidi piani, presi separatamente, hanno sei gradi di libertà. Nella trave Gerber in figura, l’incastro aggiunge tre condizioni, la cerniera interna due e il carrello una. Il conteggio dà sei condizioni, ma l’isostaticità richiede che siano indipendenti. Per verificarlo si considera prima il corpo $AC$. L’incastro impedisce tutti i suoi moti rigidi. La cerniera fissa quindi il punto $C$ del corpo $CB$. Rimane una possibile rotazione di $CB$ attorno a $C$. Poiché $B$ si trova a distanza orizzontale positiva da $C$, tale rotazione produce uno spostamento verticale in $B$. Il carrello lo impedisce e la rotazione è nulla.

Se il carrello in $B$ avesse normale orizzontale, la rotazione infinitesima di $CB$ produrrebbe ancora una velocità verticale in $B$, compatibile con il nuovo vincolo. Il conteggio delle condizioni resterebbe uguale. Cambierebbe invece l’indipendenza, quindi lo schema avrebbe un moto labile. La posizione della cerniera e la direzione della reazione devono perciò essere considerate insieme.
:::

## Reazioni negative e appoggi unilaterali

:::osservazione{#controllo-reazioni titolo="Interpretazione e verifica delle reazioni"}
Per controllare le reazioni si rilegge il corpo libero e si verificano separatamente unità, componenti e momenti. Una reazione di segno negativo è rivolta in verso opposto a quello scelto nel disegno. Se il vincolo è bilaterale, il risultato è compatibile con il modello. Se si tratta di un appoggio per contatto unilaterale, la reazione deve appartenere al verso che l’appoggio può esercitare. Il controllo del segno stabilisce quindi se il contatto ipotizzato può sussistere.

Su una trave con sbalzo la forza può avere un braccio più lungo di quello dell’ultimo appoggio. L’equilibrio può allora richiedere che il vincolo opposto tiri la trave verso il basso. Questo risultato permette di distinguere un appoggio semplice da un collegamento capace di trattenere la struttura.
:::

:::esempio{titolo="Sbalzo e perdita di contatto"}
La trave in figura ha cerniera in $A$ e carrello in $B$. Le distanze sono $AB=4\,\mathrm{m}$ e $BD=2\,\mathrm{m}$. All’estremo $D$ agisce $P=10\,\mathrm{kN}$ verso il basso.

::struttura{nodi="A,0,0;B,4,0;D,6,0" aste="A-B;B-D" vincoli="A,cerniera;B,carrello" forze="D,0,-1.1,P" quote="A,B,4 m;B,D,2 m" titolo="Forza all’estremità dello sbalzo BD"}

Il momento attorno ad $A$ è $4V_B-6\cdot10$, quindi $V_B=15\,\mathrm{kN}$. L’equilibrio verticale dà $V_A=-5\,\mathrm{kN}$. Prendendo $B$ come polo, il controllo fornisce $(-4)(-5)+2(-10)=0$. La cerniera in $A$ deve quindi esercitare una forza verso il basso. Un collegamento bilaterale può esercitarla. Se in $A$ ci fosse un semplice contatto appoggiato da sotto, il segno calcolato richiederebbe una forza che quell’appoggio è incapace di esercitare. Il problema andrebbe quindi riformulato con una diversa configurazione di contatto.
:::

## Forze orizzontali nei telai

:::esempio{titolo="Il braccio verticale di una forza orizzontale"}
Il portale rigido in figura ha altezza $3\,\mathrm{m}$ e larghezza $6\,\mathrm{m}$. Una forza $P=12\,\mathrm{kN}$ agisce verso destra a quota $3\,\mathrm{m}$. In $A$ c’è una cerniera e in $B$ un carrello orizzontale. La forza applicata è orizzontale, ma la sua retta d’azione si trova sopra gli appoggi. Produce quindi un momento orario rispetto ad $A$.

::struttura{nodi="A,0,0;C,0,3;D,6,3;B,6,0" aste="A-C;C-D;D-B" vincoli="A,cerniera;B,carrello" forze="C,1.1,0,P" quote="A,C,3 m;C,D,6 m,-0.65" titolo="Forza orizzontale applicata alla sommità del portale"}

Dalle equazioni dei momenti e delle forze si ricava
$$
\begin{cases}
6V_B-3\cdot12=0,\\[4pt]
V_A+V_B=0,\\[4pt]
H_A+12=0.
\end{cases}
$$
Ne segue che $V_B=6\,\mathrm{kN}$, $V_A=-6\,\mathrm{kN}$ e $H_A=-12\,\mathrm{kN}$. Le due reazioni verticali hanno uguale intensità e verso opposto, quindi formano la coppia che bilancia il momento della forza orizzontale. La componente $H_A$ equilibra invece la forza applicata nella direzione orizzontale.

Una volta ottenute le reazioni, per studiare una sezione del traverso si esegue un taglio e si isola una porzione del telaio. Le reazioni esterne sul corpo isolato diventano azioni note. Il passaggio da questo equilibrio globale a quello di una singola porzione serve a determinare sforzo normale, taglio e momento flettente.
:::
