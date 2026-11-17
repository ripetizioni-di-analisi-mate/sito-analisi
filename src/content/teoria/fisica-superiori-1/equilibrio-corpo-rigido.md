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

:::esempio{titolo="Usare entrambe le componenti della forza"}
Il perno è in $O$. Il punto $A$ si trova a $x=0{,}40\,\mathrm m$ verso destra e a $y=0{,}30\,\mathrm m$ verso l'alto. Per una forza obliqua, la componente verticale $F_y$ ha braccio $x$ e tende a ruotare in senso antiorario se $F_y>0$. La componente orizzontale $F_x$ ha braccio $y$ e tende a ruotare in senso orario se $F_x>0$. Con questa scelta del verso positivo si ha
$$
M_O=xF_y-yF_x.
$$
Con $F_x=40\,\mathrm N$ e $F_y=30\,\mathrm N$ entrambi i prodotti valgono $12\,\mathrm{N\,m}$, quindi il momento è nullo. La figura mostra che in questo caso la retta della forza attraversa $O$. Se si dimezza solo $F_y$, il primo prodotto vale $6\,\mathrm{N\,m}$ e il secondo resta $12\,\mathrm{N\,m}$. Il momento diventa $-6\,\mathrm{N\,m}$, perciò prevale il verso orario.

::grafico{assi=0 uguale=1 linee="0,0 .4,0 .4,.3;0,0 .75,.5625" vettori=".4,.3,.75,.5625,F" punti="0,0,pieno,O;.4,.3,pieno,A" etichette=".2,-.06,0,40 m;.49,.13,0,30 m" xmin=-.12 xmax=.93 ymin=-.14 ymax=.69 titolo="La risultante delle componenti è lungo OA quando i rapporti tra le componenti e tra le coordinate coincidono"}
:::

## Segni dei momenti

:::osservazione{#segni titolo="Orario e antiorario"}
Guardando il piano da uno stesso lato, si può prendere come positivo il senso antiorario. Per assegnare il segno si immagina quale verso di rotazione tenderebbe a produrre la singola forza attorno al punto scelto. Una spinta verso il basso sul lato destro di un perno tende a ruotare in senso orario e ha momento negativo. Sul lato sinistro la stessa spinta ha momento positivo.

Per una trave sull'asse $x$ con perno nell'origine e forze solo verticali, si può scrivere $M_O=xF_y$, usando componenti con segno. Se una forza di $12\,\mathrm N$ verso il basso agisce a $x=-0{,}4\,\mathrm m$, il prodotto $(-0{,}4)(-12)$ vale $+4{,}8\,\mathrm{N\,m}$. Con un'altra forza verso il basso di $8\,\mathrm N$ a $x=+0{,}3\,\mathrm m$ si aggiunge $-2{,}4\,\mathrm{N\,m}$. Il momento totale è $+2{,}4\,\mathrm{N\,m}$.
:::

:::esempio{titolo="Lo stesso sistema rispetto a due punti"}
Su un'asta agiscono $10\,\mathrm N$ verso il basso in $x=-1\,\mathrm m$ e $20\,\mathrm N$ verso l'alto in $x=2\,\mathrm m$. Prendendo $O$ in $x=0$, i contributi sono $(-1)(-10)=10$ e $(2)(20)=40$, in newton metri. Hanno lo stesso segno, perché entrambe le forze tendono a ruotare l'asta in senso antiorario attorno a $O$. Se si prende come riferimento $O'$ in $x=1\,\mathrm m$, le coordinate dei punti di applicazione rispetto a $O'$ diventano $-2$ e $1\,\mathrm m$. I contributi diventano $20$ e $20\,\mathrm{N\,m}$. Spostare il riferimento di $1\,\mathrm m$ verso destra ha sottratto $10\,\mathrm{N\,m}$ al momento totale, pari al momento della risultante verticale di $10\,\mathrm N$ rispetto a quello spostamento.

::grafico{assi=0 uguale=1 linee="-1.7,0 2.7,0" vettori="-1,0,-1,-.8,10 N;2,0,2,1.6,20 N" punti="0,0,pieno,O;1,0,pieno,O′" etichette="-1,-1.1,x = −1 m;2,-.35,x = 2 m" xmin=-2 xmax=3.2 ymin=-1.4 ymax=2 titolo="Cambiare il riferimento da O a O′ modifica entrambi i bracci e il momento totale"}
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

:::osservazione{titolo="Leggere separatamente i due bilanci"}
La tabella confronta la risultante e il momento totale rispetto a $O$. I due casi con forze opposte assumono che queste abbiano lo stesso modulo. In ogni caso si considerano tutte le forze esterne, comprese le eventuali reazioni. Una reazione può annullare la risultante di un carico e lasciare un momento, se le rette d'azione sono distinte. Quando tutte le forze sono verticali, per un punto materiale basta controllarne la somma. Per l'equilibrio del corpo rigido si deve annullare anche il momento totale.

| Sistema di forze | Risultante | Momento in $O$ |
| --- | --- | --- |
| Due opposte sulla stessa retta | Nulla | Nullo |
| Una passante per $O$ | Non nulla | Nullo |
| Due opposte su rette distinte | Nulla | Non nullo |
| Una a braccio diverso da zero | Non nulla | Non nullo |

Se il disegno contiene una forza orizzontale e le altre sono verticali, il bilancio orizzontale richiede una seconda forza con componente opposta. L'equazione dei momenti da sola non determina quella componente, per esempio quando agisce lungo l'asse della trave.
:::

:::esempio{titolo="Cerniera e fune con reazioni su due assi"}
Una barra orizzontale di peso trascurabile è lunga $1{,}20\,\mathrm m$ e incernierata al muro in A. Un carico di $96\,\mathrm N$ agisce a metà barra. Una fune collega l'estremità libera a un punto più alto sul muro. Se il modulo della tensione è $T$, la sua componente orizzontale vale $-\dfrac45T$ e la componente verticale $\dfrac35T$. Prendendo i momenti in A, la reazione della cerniera scompare perché passa per A. Anche la componente orizzontale della tensione ha braccio nullo.
$$
\dfrac35T\cdot1{,}20=96\cdot0{,}60
\qquad\Longrightarrow\qquad T=80\,\mathrm N.
$$
Le componenti della tensione valgono $-64$ e $+48\,\mathrm N$. Perciò i bilanci orizzontale e verticale danno una reazione di $64\,\mathrm N$ verso destra e di $96-48=48\,\mathrm N$ verso l'alto. La cerniera e la fune sostengono ciascuna metà del peso in verticale. Le componenti orizzontali si elidono perché la fune tira verso il muro e la cerniera spinge verso l'esterno.

::grafico{assi=0 uguale=1 linee="0,-.21 0,1.03;0,0 1.2,0;0,.90 1.2,0" punti="0,0,pieno,A;1.2,0,pieno,B" vettori=".6,0,.6,-.42,96 N;1.2,0,.78,.315,T" etichette=".6,.12,0,60 m;1.13,-.13,1,20 m" xmin=-.24 xmax=1.43 ymin=-.5 ymax=1.12 titolo="La componente verticale di T equilibra il momento del carico rispetto alla cerniera A"}
:::

## Leve

:::teorema{#leve titolo="Uguaglianza dei momenti opposti"}
In una leva ideale con perno senza attrito, due forze che tendono a far ruotare in versi opposti si equilibrano rispetto al fulcro se $F_1b_1=F_2b_2$, a condizione che gli altri momenti siano nulli o già compensati. Il rapporto fra forza resistente e forza motrice è il rapporto inverso dei loro bracci. La reazione del fulcro va calcolata separatamente dall'equilibrio delle forze.
:::

:::esempio{titolo="Equilibrio con un fulcro che sostiene entrambe le forze"}
Una forza di $45\,\mathrm N$ agisce verso il basso a $0{,}2\,\mathrm m$ a sinistra del fulcro. A $0{,}6\,\mathrm m$ a destra si applicano $15\,\mathrm N$ verso il basso. I loro momenti sono $+9$ e $-9\,\mathrm{N\,m}$. Il fulcro fornisce $60\,\mathrm N$ verso l'alto per annullare la somma verticale. La sua retta d'azione passa per il fulcro, quindi la reazione non altera l'equazione appena usata.
:::

::grafico{assi=0 uguale=1 linee="-1.8,0 3.8,0;-0.32,-0.55 0,0 0.32,-0.55 -0.32,-0.55" vettori="-1,0,-1,-1.8,45 N;3,0,3,-0.6,15 N;0,0,0,2.4,60 N" etichette="-0.5,0.45,0,2 m;1.65,0.45,0,6 m" xmin=-2.5 xmax=4.4 ymin=-2.3 ymax=3 titolo="Leva con momenti opposti e reazione del fulcro verso l'alto"}

:::esempio{titolo="Forze opposte sullo stesso lato del fulcro"}
Un carico di $60\,\mathrm N$ agisce verso il basso a $0{,}30\,\mathrm m$ a destra del fulcro. Una mano solleva l'asta a $0{,}90\,\mathrm m$ dal fulcro, sullo stesso lato. Entrambi i punti di applicazione sono a destra del fulcro e le forze agiscono in versi opposti. Nel bilancio rotatorio la forza della mano ha quindi momento positivo.
$$
0{,}90F-0{,}30\cdot60=0,\qquad F=20\,\mathrm N.
$$
Controllando le forze verticali, la mano solleva con $20\,\mathrm N$ mentre il carico spinge verso il basso con $60\,\mathrm N$. Il fulcro deve fornire i restanti $40\,\mathrm N$ verso l'alto. È la direzione delle spinte su quel lato a rendere opposti i momenti.

::grafico{assi=0 uguale=1 linee="-.26,0 1.05,0;-.06,-.1 0,0 .06,-.1 -.06,-.1" vettori=".3,0,.3,-.3,60 N;.9,0,.9,.1,20 N;0,0,0,.2,40 N" etichette=".3,.07,0,30 m;.85,-.09,0,90 m" xmin=-.35 xmax=1.2 ymin=-.39 ymax=.32 titolo="Il carico e la mano sono dalla stessa parte del fulcro. Le loro forze verticali hanno versi opposti."}
:::

## Coppie di forze

::::teorema{#coppie titolo="Risultante nulla e momento non nullo"}
Una **coppia di forze** è formata da due forze parallele con modulo comune $F$, versi opposti e rette d'azione distinte. La risultante è nulla, mentre il modulo del momento è $F d$, dove $d$ è la distanza perpendicolare fra le rette.

:::dimostrazione
Per calcolare il momento si sceglie un punto sulla retta d'azione di una delle forze. Quella forza ha braccio zero, mentre l'altra ha braccio $d$. La risultante nulla della coppia rende il risultato indipendente dalla scelta del punto.
:::
::::

::grafico{assi=0 uguale=1 linee="-2,-2 -2,2;2,-2 2,2" vettori="-2,0,-2,1.6,F;2,0,2,-1.6,F" etichette="0,0.2,d" xmin=-3 xmax=3 ymin=-2.4 ymax=2.4 titolo="Forze verticali opposte a distanza d. Entrambe tendono a ruotare il corpo in senso orario rispetto al punto centrale"}

:::esempio{titolo="Sommare coppie di verso diverso"}
La prima coppia è formata da forze verticali di modulo $35\,\mathrm N$ distanti $0{,}40\,\mathrm m$. La forza di sinistra punta verso il basso e quella di destra verso l'alto, perciò il momento è antiorario e vale $+14\,\mathrm{N\,m}$. Una seconda coppia di forze di modulo $20\,\mathrm N$ distanti $0{,}30\,\mathrm m$ tende a ruotare in senso orario. Il suo contributo vale $-6\,\mathrm{N\,m}$. Insieme danno una risultante nulla con momento $+8\,\mathrm{N\,m}$. Una terza coppia oraria di $8\,\mathrm{N\,m}$ annullerebbe il momento totale.

::grafico{assi=0 uguale=1 linee="0,0 .4,0;.7,0 1,0" vettori="0,0,0,-.28,35 N;.4,0,.4,.28,35 N;.7,0,.7,.16,20 N;1,0,1,-.16,20 N" etichette=".2,.07,0,40 m;.85,-.08,0,30 m" xmin=-.13 xmax=1.14 ymin=-.37 ymax=.36 titolo="Coppia antioraria a sinistra e oraria a destra. I momenti si sommano con segno."}
:::

## Travi con due appoggi

:::osservazione{#travi titolo="Ricavare le reazioni"}
Per una trave orizzontale di lunghezza $L$ fra due appoggi, un singolo peso $P$ applicato a distanza $a$ dall'appoggio A dà reazione $R_B=\dfrac{Pa}{L}$ nell'altro appoggio se il peso della trave è trascurabile. Il momento rispetto ad A elimina $R_A$. Il bilancio verticale fornisce poi $R_A=P-R_B$. Se la trave ha peso proprio, lo si aggiunge come forza verticale applicata al suo baricentro.

Per $L=4\,\mathrm m$, $a=1\,\mathrm m$ e $P=100\,\mathrm N$ si trovano $R_B=25\,\mathrm N$ e $R_A=75\,\mathrm N$. Con un peso della trave omogenea di $40\,\mathrm N$ si aggiungono $20\,\mathrm N$ a ciascuna reazione, perché il peso proprio agisce al centro. Lo stesso risultato si può verificare calcolando i momenti rispetto a B.
:::

:::esempio{titolo="Appoggio che si stacca con un carico a sbalzo"}
Gli appoggi A e B distano $3\,\mathrm m$. Una trave di peso trascurabile sporge a destra di B. Un carico di $90\,\mathrm N$ è a $4\,\mathrm m$ da A. Il momento attorno ad A impone $3R_B=90\cdot4$, quindi $R_B=120\,\mathrm N$. Il bilancio verticale darebbe $R_A=90-120=-30\,\mathrm N$. In A servirebbe una forza verso il basso, perciò un semplice appoggio si stacca. Con un contrappeso di $60\,\mathrm N$ a $0{,}50\,\mathrm m$ da A, vale invece
$$
R_B=\frac{90\cdot4+60\cdot0{,}50}{3}\,\mathrm N=130\,\mathrm N,\qquad
R_A=150\,\mathrm N-130\,\mathrm N=20\,\mathrm N.
$$
Entrambe le reazioni ora possono essere fornite dagli appoggi perché sono rivolte verso l'alto. Un controllo indipendente consiste nel fare i momenti in B. Si ottiene la somma $-20\cdot3-90\cdot1+60\cdot2{,}50=0$, in newton metri.

::grafico{assi=0 uguale=1 linee="-.25,0 4.32,0;-.16,-.28 0,0 .16,-.28 -.16,-.28;2.84,-.28 3,0 3.16,-.28 2.84,-.28" vettori=".5,0,.5,-.56,60 N;4,0,4,-.84,90 N" punti="0,0,pieno,A;3,0,pieno,B" etichette=".62,.24,0,50 m;2.75,.24,3 m;4.05,.24,4 m" xmin=-.55 xmax=4.7 ymin=-1.07 ymax=.55 titolo="Con il contrappeso da 60 N il carico oltre B può essere sostenuto da entrambi gli appoggi"}
:::

## Baricentro

:::definizione{#baricentro titolo="Posizione della risultante dei pesi"}
In un campo uniforme il **baricentro** ha la stessa posizione del centro di massa. Per masse $m_i$ fissate lungo una retta nelle posizioni $x_i$, la sua coordinata è $x_G=\dfrac{\sum m_i x_i}{\sum m_i}$. Si ottiene imponendo che il peso totale applicato in $x_G$ abbia lo stesso momento della somma dei pesi individuali. Il campo $g$ si semplifica.

Il punto medio è il baricentro di un'asta omogenea di sezione costante, per simmetria. Se si aggiunge una massa a destra del baricentro iniziale, la media pesata si sposta verso destra. La nuova coordinata resta compresa fra la vecchia coordinata e quella della massa aggiunta.
:::

:::esempio{titolo="Riportare il baricentro al punto medio"}
Un'asta omogenea di massa $3\,\mathrm{kg}$ va da $x=0$ a $x=2\,\mathrm m$. Il suo baricentro è nel punto medio, $1\,\mathrm m$. Aggiungendo $1\,\mathrm{kg}$ all'estremità destra si ottiene
$$
x_G=\frac{3\cdot1+1\cdot2}{3+1}\,\mathrm m=1{,}25\,\mathrm m.
$$
Lo spostamento è di $25\,\mathrm{cm}$ verso la massa aggiunta. Per riportare il baricentro a $x=1\,\mathrm m$ si può aggiungere una massa in $x=0$. Verificando i momenti attorno al punto medio, il peso dell'asta ha braccio nullo e i due pesi aggiunti hanno bracci uguali da parti opposte. L'equilibrio richiede quindi un'altra massa di $1\,\mathrm{kg}$. Lo stesso risultato si ottiene imponendo alla media pesata di tornare al valore iniziale.

::grafico{assi=0 uguale=1 linee="-.12,0 2.12,0" vettori="1,0,1,-.45,P_a;2,0,2,-.15" punti="0,0,pieno,O;1,0,pieno,C;1.25,0,pieno,G;2,0,pieno,B" etichette=".94,.24,1 m;1.35,-.26,1,25 m;2,.22,2 m;2.07,-.19,P_m" xmin=-.25 xmax=2.43 ymin=-.6 ymax=.42 titolo="Prima del contrappeso, G è fra il punto medio C dell'asta e la massa aggiunta in B"}
:::

## Stabilità e ribaltamento

:::teorema{#stabilita titolo="La verticale del baricentro"}
Con il solo peso e le reazioni di un appoggio orizzontale, l'equilibrio richiede che la verticale del baricentro incontri la base d'appoggio. Se arriva al bordo, il sistema è alla soglia. Quando la verticale cade oltre il bordo, il peso produce un momento attorno allo spigolo che tende a ribaltare il corpo.

Una spinta orizzontale $F$ applicata ad altezza $h$ ha momento $Fh$ rispetto allo spigolo verso cui il corpo tende a ruotare. Se il peso è $P$ e la sua retta d'azione dista $b$ dallo spigolo, alla soglia vale $Fh=Pb$. Occorre anche che l'attrito disponibile sia sufficiente a evitare lo scorrimento prima di quella soglia.
:::

:::esempio{titolo="Confrontare scorrimento e ribaltamento"}
Una scatola di peso $200\,\mathrm N$ poggia su un piano orizzontale. La verticale del baricentro dista $0{,}20\,\mathrm m$ dallo spigolo di ribaltamento. Una spinta orizzontale applicata a $0{,}80\,\mathrm m$ di altezza fa raggiungere la soglia rotatoria a
$$
F_{\mathrm{rib}}=\frac{200\cdot0{,}20}{0{,}80}\,\mathrm N=50\,\mathrm N.
$$
Prima del movimento la reazione verticale vale $200\,\mathrm N$. Con coefficiente d'attrito statico $0{,}20$ l'attrito massimo è $40\,\mathrm N$. Aumentando lentamente la spinta, si raggiunge prima questa soglia e la scatola inizia a scorrere. Con coefficiente $0{,}40$ la soglia di scorrimento sale a $80\,\mathrm N$ e si raggiunge prima la soglia di ribaltamento. La formula dei momenti individua la possibile rotazione, mentre l'attrito determina se la scatola resta ferma abbastanza a lungo per raggiungerla.

::grafico{f="40/x;40;80" legenda="ribaltamento;attrito 0,20;attrito 0,40" punti=".8,50,pieno,R;.8,40,pieno,S;.8,80,pieno,T" xmin=.45 xmax=1.1 ymin=30 ymax=96 nomi="h (m),F (N)" titolo="A 0,80 m la soglia di rotazione è tra le due soglie di scorrimento"}
:::

:::osservazione{titolo="Quando si inclina il piano d'appoggio"}
Per una scatola su un piano inclinato si misura $h$ perpendicolarmente alla base, dal piano al baricentro, e $b$ lungo il piano, dalla proiezione ortogonale del baricentro al bordo a valle. Quando il piano si inclina di $\theta$, la verticale del peso incontra la base più a valle della proiezione ortogonale, a distanza $h\tan\theta$ da essa. La soglia di ribaltamento è quindi $h\tan\theta=b$. Con $h=0{,}30\,\mathrm m$ e $b=0{,}15\,\mathrm m$ la soglia richiede $\tan\theta=0{,}50$. Un attrito statico con coefficiente inferiore a $0{,}50$ farebbe iniziare lo scorrimento prima.
:::
