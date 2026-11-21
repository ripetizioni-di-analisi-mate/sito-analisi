---
titolo: "Equilibrio del corpo rigido"
sommario: "Momenti, leve, coppie di forze, reazioni delle travi, baricentri e stabilità."
---

## Momento di una forza

:::definizione{#momento titolo="Forza e distanza perpendicolare"}
Un **corpo rigido** è un oggetto che non si deforma, cioè un oggetto in cui la distanza fra due punti qualsiasi resta sempre la stessa. Una porta e una chiave inglese si trattano come corpi rigidi. Il corpo rigido è un *modello*, cioè una descrizione semplificata dell'oggetto reale, che sotto sforzo si deforma un poco.

Un corpo rigido, oltre a spostarsi, ruota, quindi per descriverne l'equilibrio si considera anche la rotazione. Una porta ruota attorno ai cardini, e la stessa spinta la apre con più facilità quando è applicata lontano dai cardini, vicino alla maniglia. Conta inoltre la direzione della spinta. Una forza diretta lungo la porta verso i cardini ha effetto rotatorio nullo rispetto a essi.

Il **momento** di una forza è la grandezza che misura l'effetto di rotazione della forza attorno a un punto scelto, detto punto di riferimento e indicato con $O$. Per calcolarlo si usano tre termini.

- Il *modulo* $F$ è l'intensità della forza. Si misura in newton ($\mathrm N$), l'unità di forza del Sistema Internazionale (SI), il sistema di unità usato in fisica.
- La **retta d'azione** è la retta che passa per il punto in cui la forza è applicata e ha la direzione della forza.
- Il **braccio** $b$ è la distanza perpendicolare dal punto $O$ alla retta d'azione. *Perpendicolare* significa che forma un angolo retto, cioè di $90^\circ$, con la retta d'azione.

Il modulo del momento nel piano vale $\lvert M_O\rvert=Fb$. Il simbolo $M_O$ si legge «momento rispetto a $O$» e le barre verticali indicano il valore senza segno. Poiché si moltiplica una forza in newton per una distanza in metri (simbolo $\mathrm m$), l'unità del momento è il newton metro, di simbolo $\mathrm{N\,m}$. Una forza di $25\,\mathrm N$ con braccio $0{,}3\,\mathrm m$ ha momento $25\,\mathrm N\cdot0{,}3\,\mathrm m=7{,}5\,\mathrm{N\,m}$.

In molti esercizi sono dati la distanza $r$ da $O$ al punto di applicazione della forza e l'angolo $\theta$ (lettera greca *teta*) fra il segmento $r$ e la forza. Il segmento $r$, il braccio $b$ e un tratto della retta d'azione formano un triangolo rettangolo. In questo triangolo $r$ è l'ipotenusa, cioè il lato di fronte all'angolo retto, e $b$ è il cateto di fronte all'angolo $\theta$. Il **seno** dell'angolo, scritto $\sin\theta$, è il rapporto fra il cateto di fronte all'angolo e l'ipotenusa, cioè $\sin\theta=\dfrac br$. Allora $b=r\lvert\sin\theta\rvert$, con le barre perché il braccio è una distanza. I valori più usati sono $\sin30^\circ=\dfrac12$, $\sin60^\circ=\dfrac{\sqrt3}{2}\approx0{,}87$ e $\sin90^\circ=1$.

Il modulo si ottiene anche moltiplicando $r$ per la componente della forza perpendicolare al segmento. Questa *componente perpendicolare* vale $F_\perp=F\lvert\sin\theta\rvert$. L'altra parte della forza è diretta lungo il segmento. La sua retta d'azione passa per $O$, quindi ha braccio zero e momento nullo.
:::

:::esempio{titolo="Una chiave inclinata rispetto alla spinta"}
Su una chiave lunga $0{,}30\,\mathrm m$ si esercita una forza di $40\,\mathrm N$ con angolo $30^\circ$ rispetto alla chiave. Il punto di riferimento $O$ è il bullone, a un'estremità della chiave. La forza è applicata all'altra estremità, quindi $r=0{,}30\,\mathrm m$.

La componente utile, cioè quella perpendicolare alla chiave, è $40\sin30^\circ\,\mathrm N=40\cdot\dfrac12\,\mathrm N=20\,\mathrm N$. Moltiplicandola per $0{,}30\,\mathrm m$ si ottiene il momento, che vale $6\,\mathrm{N\,m}$.

Il braccio è $b=0{,}30\,\mathrm m\cdot\dfrac12=0{,}15\,\mathrm m$. Usando la lunghezza intera come braccio si troverebbe $40\,\mathrm N\cdot0{,}30\,\mathrm m=12\,\mathrm{N\,m}$, cioè il doppio del risultato effettivo.
:::

::grafico{assi=0 uguale=1 linee="0,0 3,0;0,0 0.75,-1.3;0.75,-1.3 4.73,1" vettori="3,0,4.73,1,F" punti="0,0,pieno,O;3,0,pieno,A" etichette="1.6,0.35,r;0.2,-0.8,b" xmin=-1 xmax=5.4 ymin=-2 ymax=1.8 titolo="Il braccio b è perpendicolare alla retta d'azione. Il segmento OA dà invece la distanza dal bullone al punto di applicazione"}

:::esempio{titolo="Usare entrambe le componenti della forza"}
Il **perno** è il punto fisso attorno a cui un corpo ruota. Qui il perno è in $O$. Il punto $A$, in cui è applicata la forza, si trova a $x=0{,}40\,\mathrm m$ verso destra e a $y=0{,}30\,\mathrm m$ verso l'alto rispetto a $O$.

Una forza obliqua si scompone in due componenti, come nel capitolo sui vettori. La componente orizzontale $F_x$ è positiva verso destra e la componente verticale $F_y$ è positiva verso l'alto.

- La componente verticale $F_y$ ha retta d'azione verticale, che dista $x$ da $O$, quindi ha braccio $x$ e tende a ruotare in senso antiorario se $F_y>0$. Antiorario è il verso contrario a quello delle lancette dell'orologio.
- La componente orizzontale $F_x$ ha retta d'azione orizzontale, che dista $y$ da $O$, quindi ha braccio $y$ e tende a ruotare in senso orario, cioè nel verso delle lancette, se $F_x>0$.

Prendendo come positivo il senso antiorario si ha
$$
M_O=xF_y-yF_x.
$$
Con $F_x=40\,\mathrm N$ e $F_y=30\,\mathrm N$ i due prodotti $0{,}40\cdot30$ e $0{,}30\cdot40$ valgono entrambi $12\,\mathrm{N\,m}$, quindi il momento è nullo. La figura mostra che in questo caso la retta della forza attraversa $O$, perciò il braccio è zero. Questo accade perché la forza ha la stessa inclinazione del segmento $OA$. Infatti $\dfrac{F_y}{F_x}=\dfrac{30}{40}=\dfrac34$ e $\dfrac yx=\dfrac{0{,}30}{0{,}40}=\dfrac34$.

Se si dimezza solo $F_y$, che diventa $15\,\mathrm N$, il primo prodotto vale $0{,}40\,\mathrm m\cdot15\,\mathrm N=6\,\mathrm{N\,m}$ e il secondo resta $12\,\mathrm{N\,m}$. Il momento diventa $6-12=-6\,\mathrm{N\,m}$, perciò prevale il verso orario.

::grafico{assi=0 uguale=1 linee="0,0 .4,0 .4,.3;0,0 .75,.5625" vettori=".4,.3,.75,.5625,F" punti="0,0,pieno,O;.4,.3,pieno,A" etichette=".2,-.06,0,40 m;.49,.13,0,30 m" xmin=-.12 xmax=.93 ymin=-.14 ymax=.69 titolo="La risultante delle componenti è lungo OA quando i rapporti tra le componenti e tra le coordinate coincidono"}
:::

## Segni dei momenti

:::osservazione{#segni titolo="Orario e antiorario"}
Il momento ha un segno, che indica il verso in cui la forza tende a far ruotare il corpo. Guardando il piano da uno stesso lato, si può prendere come positivo il senso antiorario. Il senso orario è allora negativo. Per assegnare il segno si immagina quale verso di rotazione tenderebbe a produrre la singola forza attorno al punto scelto, come se le altre forze fossero assenti. Una spinta verso il basso sul lato destro di un perno abbassa il lato destro, quindi tende a ruotare in senso orario e ha momento negativo. Sul lato sinistro la stessa spinta abbassa il lato sinistro, tende a ruotare in senso antiorario e ha momento positivo.

Una **trave** è un'asta rigida lunga e diritta. Per una trave sull'asse $x$ con perno nell'origine, cioè nel punto $x=0$, e forze solo verticali, il segno si ottiene dal calcolo scrivendo $M_O=xF_y$, con componenti con segno. La coordinata $x$ del punto di applicazione è positiva a destra del perno e negativa a sinistra. La componente $F_y$ è positiva verso l'alto e negativa verso il basso.

Se una forza di $12\,\mathrm N$ verso il basso agisce a $x=-0{,}4\,\mathrm m$, allora $F_y=-12\,\mathrm N$ e il prodotto $(-0{,}4)(-12)$ vale $+4{,}8\,\mathrm{N\,m}$. Con un'altra forza verso il basso di $8\,\mathrm N$ a $x=+0{,}3\,\mathrm m$ si aggiunge $(+0{,}3)(-8)=-2{,}4\,\mathrm{N\,m}$. Il momento totale è $+4{,}8-2{,}4=+2{,}4\,\mathrm{N\,m}$, positivo, quindi prevale il senso antiorario.
:::

:::esempio{titolo="Lo stesso sistema rispetto a due punti"}
Su un'asta agiscono $10\,\mathrm N$ verso il basso in $x=-1\,\mathrm m$ e $20\,\mathrm N$ verso l'alto in $x=2\,\mathrm m$.

Prendendo $O$ in $x=0$, i contributi sono $(-1)(-10)=10$ e $(2)(20)=40$, in newton metri. Hanno lo stesso segno, perché entrambe le forze tendono a ruotare l'asta in senso antiorario attorno a $O$, e il momento totale è $50\,\mathrm{N\,m}$.

Se si prende come riferimento $O'$ in $x=1\,\mathrm m$, le coordinate dei punti di applicazione rispetto a $O'$ diventano $-1-1=-2$ e $2-1=1\,\mathrm m$. I contributi diventano $(-2)(-10)=20$ e $(1)(20)=20\,\mathrm{N\,m}$, con totale $40\,\mathrm{N\,m}$.

Spostare il riferimento di $1\,\mathrm m$ verso destra ha sottratto $50-40=10\,\mathrm{N\,m}$ al momento totale. La **risultante** è la somma di tutte le forze. Qui la risultante verticale è $-10\,\mathrm N+20\,\mathrm N=10\,\mathrm N$ verso l'alto. Il momento sottratto è pari al momento della risultante rispetto a quello spostamento, cioè $10\,\mathrm N\cdot1\,\mathrm m=10\,\mathrm{N\,m}$.

::grafico{assi=0 uguale=1 linee="-1.7,0 2.7,0" vettori="-1,0,-1,-.8,10 N;2,0,2,1.6,20 N" punti="0,0,pieno,O;1,0,pieno,O′" etichette="-1,-1.1,x = −1 m;2,-.35,x = 2 m" xmin=-2 xmax=3.2 ymin=-1.4 ymax=2 titolo="Cambiare il riferimento da O a O′ modifica entrambi i bracci e il momento totale"}
:::

## Equilibrio del corpo rigido

::::teorema{#equilibrio-rigido titolo="Forze e momenti devono annullarsi"}
Un corpo è in **equilibrio** quando resta fermo. Un corpo rigido fermo, soggetto a forze nel piano, resta in equilibrio se sono nulle la risultante delle forze e la somma dei momenti rispetto a un medesimo punto $O$. La prima condizione riguarda lo spostamento e la seconda la rotazione. Le condizioni sono
$$
\sum F_x=0,\qquad \sum F_y=0,\qquad \sum M_O=0.
$$
Il simbolo $\sum$ è la lettera greca *sigma* maiuscola e si legge «somma di». La scrittura $\sum F_x$ indica la somma delle componenti orizzontali di tutte le forze, $\sum F_y$ la somma delle componenti verticali e $\sum M_O$ la somma dei momenti rispetto a $O$, ciascuno con il suo segno.

La scelta di $O$ è libera. Una **reazione** è la forza che un sostegno, come un appoggio o un perno, esercita sul corpo. Per semplificare i calcoli si sceglie spesso un punto sulla retta d'azione di una reazione incognita. Rispetto a quel punto la reazione ha braccio zero, quindi è assente dall'equazione dei momenti.

:::dimostrazione
Si dimostra che, quando la risultante è nulla, la somma dei momenti ha lo stesso valore rispetto a qualunque punto.

Si considera un'asta sull'asse $x$ con forze verticali. Il punto $O$ è nell'origine e il punto $O'$ si trova a distanza $d$ a destra di $O$. Una forza di componente $F_y$ applicata nel punto di coordinata $x$ ha momento $xF_y$ rispetto a $O$. Rispetto a $O'$ la sua coordinata è $x-d$, quindi il momento è
$$
(x-d)F_y=xF_y-dF_y.
$$
Spostando il riferimento da $O$ a $O'$ si sottrae dunque a ciascun momento il contributo $dF_y$. Sommando su tutte le forze, i contributi sottratti danno $d\sum F_y$. Questo prodotto è il momento della risultante calcolato con lo stesso spostamento $d$. Quindi
$$
\sum M_{O'}=\sum M_O-d\sum F_y.
$$
Quando la risultante è zero, questa variazione è zero. Una somma dei momenti nulla rispetto a $O$ è dunque nulla anche rispetto a $O'$.

Per forze di direzione qualsiasi il ragionamento è lo stesso. Al posto di $d$ si usa il vettore $\overrightarrow{OO'}$, cioè la freccia che va da $O$ a $O'$, e a ciascun momento si sottrae il contributo dato da questo vettore e dalla singola forza.
:::
::::

:::attenzione
Un sistema di due forze opposte con rette d'azione distinte ha risultante nulla e momento non nullo. Per esempio, due forze di $10\,\mathrm N$, una verso l'alto e una verso il basso, applicate a $0{,}5\,\mathrm m$ l'una dall'altra, hanno risultante $10\,\mathrm N-10\,\mathrm N=0$. Rispetto al punto di applicazione della prima, il momento ha modulo $10\,\mathrm N\cdot0{,}5\,\mathrm m=5\,\mathrm{N\,m}$.

Una singola forza la cui linea passa per il perno ha momento nullo rispetto al perno e risultante non nulla. Ciascuno dei due bilanci rileva un aspetto distinto dell'equilibrio.
:::

:::osservazione{titolo="Leggere separatamente i due bilanci"}
La tabella confronta la risultante e il momento totale rispetto a $O$. I due casi con forze opposte assumono che queste abbiano lo stesso modulo. In ogni caso si considerano tutte le **forze esterne**, cioè le forze esercitate sul corpo da altri oggetti, comprese le eventuali reazioni.

| Sistema di forze | Risultante | Momento in $O$ |
| --- | --- | --- |
| Due opposte sulla stessa retta | Nulla | Nullo |
| Una passante per $O$ | Non nulla | Nullo |
| Due opposte su rette distinte | Nulla | Non nullo |
| Una a braccio diverso da zero | Non nulla | Non nullo |

Una reazione può annullare la risultante di un carico e lasciare un momento, se le rette d'azione sono distinte, come nel terzo caso della tabella.

Un **punto materiale** è un corpo così piccolo da essere trattato come un punto, quindi tutte le forze sono applicate in quel punto e la rotazione è esclusa. Quando tutte le forze sono verticali, per un punto materiale basta controllarne la somma. Per l'equilibrio del corpo rigido si deve annullare anche il momento totale.

Se il disegno contiene una forza orizzontale e le altre sono verticali, la somma $\sum F_x$ contiene un solo termine e risulta diversa da zero. Il bilancio orizzontale richiede allora una seconda forza con componente opposta, di solito la reazione di un perno. L'equazione dei momenti da sola non determina quella componente, per esempio quando agisce lungo l'asse della trave, perché allora ha braccio zero. Il suo valore si ricava da $\sum F_x=0$.
:::

:::esempio{titolo="Cerniera e fune con reazioni su due assi"}
Una **cerniera** è un perno fissato al muro, che tiene fermo un punto della barra e la lascia ruotare, perciò la sua reazione ha in generale una componente orizzontale e una verticale. La **tensione** è la forza, diretta lungo la fune, con cui una fune tesa tira l'oggetto a cui è legata.

Una barra orizzontale di peso trascurabile è lunga $1{,}20\,\mathrm m$ e incernierata al muro in A. Un carico di $96\,\mathrm N$ agisce a metà barra, cioè a $0{,}60\,\mathrm m$ da A. Una fune collega l'estremità libera B a un punto più alto sul muro, che nella figura si trova $0{,}90\,\mathrm m$ sopra A.

La barra, il muro e la fune formano un triangolo rettangolo con cateti $1{,}20\,\mathrm m$ e $0{,}90\,\mathrm m$. Per il teorema di Pitagora la fune, che è l'ipotenusa, è lunga
$$
\sqrt{1{,}20^2+0{,}90^2}\,\mathrm m=\sqrt{2{,}25}\,\mathrm m=1{,}50\,\mathrm m.
$$
La tensione va da B verso il muro e verso l'alto. Le sue componenti stanno al modulo $T$ come i cateti stanno all'ipotenusa. Poiché $\dfrac{1{,}20}{1{,}50}=\dfrac45$ e $\dfrac{0{,}90}{1{,}50}=\dfrac35$, se il modulo della tensione è $T$, la sua componente orizzontale vale $-\dfrac45T$ e la componente verticale $\dfrac35T$. Il segno meno indica il verso sinistro, verso il muro.

Prendendo i momenti in A, la reazione della cerniera scompare perché passa per A. Anche la componente orizzontale della tensione ha braccio nullo, perché agisce lungo la barra e passa per A. Restano il momento antiorario della componente verticale della tensione, con braccio $1{,}20\,\mathrm m$, e il momento orario del carico, con braccio $0{,}60\,\mathrm m$. All'equilibrio i due momenti hanno lo stesso modulo.
$$
\dfrac35T\cdot1{,}20=96\cdot0{,}60
\qquad\Longrightarrow\qquad T=80\,\mathrm N.
$$
Il primo membro vale $0{,}72\,T$ e il secondo vale $57{,}6\,\mathrm{N\,m}$, quindi $T=\dfrac{57{,}6}{0{,}72}\,\mathrm N=80\,\mathrm N$.

Le componenti della tensione valgono $-\dfrac45\cdot80=-64\,\mathrm N$ e $+\dfrac35\cdot80=+48\,\mathrm N$. La reazione della cerniera annulla le somme delle forze orizzontali e verticali, perciò i bilanci danno una reazione di $64\,\mathrm N$ verso destra e di $96-48=48\,\mathrm N$ verso l'alto. La cerniera e la fune sostengono ciascuna metà del peso in verticale. Le componenti orizzontali si elidono, cioè hanno somma zero, perché la fune tira verso il muro e la cerniera spinge verso l'esterno.

::grafico{assi=0 uguale=1 linee="0,-.21 0,1.03;0,0 1.2,0;0,.90 1.2,0" punti="0,0,pieno,A;1.2,0,pieno,B" vettori=".6,0,.6,-.42,96 N;1.2,0,.78,.315,T" etichette=".6,.12,0,60 m;1.13,-.13,1,20 m" xmin=-.24 xmax=1.43 ymin=-.5 ymax=1.12 titolo="La componente verticale di T equilibra il momento del carico rispetto alla cerniera A"}
:::

## Leve

:::teorema{#leve titolo="Uguaglianza dei momenti opposti"}
Una **leva** è un'asta rigida che ruota attorno a un perno, detto **fulcro**. L'altalena a bilico e le forbici sono leve. La leva è *ideale* quando il suo peso si trascura e il perno è senza attrito.

In una leva ideale con perno senza attrito, due forze che tendono a far ruotare in versi opposti si equilibrano rispetto al fulcro se $F_1b_1=F_2b_2$, a condizione che gli altri momenti siano nulli o già compensati. I simboli $b_1$ e $b_2$ sono i bracci delle due forze rispetto al fulcro. I due momenti hanno allora lo stesso modulo e versi opposti, quindi la loro somma è zero.

La **forza resistente** è quella da vincere, per esempio il peso di un carico. La **forza motrice** è quella applicata per equilibrarla. Il rapporto fra forza resistente e forza motrice è il rapporto inverso dei loro bracci. Se $F_1$ è la forza resistente e $F_2$ la forza motrice, dividendo entrambi i membri di $F_1b_1=F_2b_2$ per $F_2b_1$ si ottiene
$$
\frac{F_1}{F_2}=\frac{b_2}{b_1}.
$$
Questo rapporto è il **vantaggio** della leva. Se il braccio della forza motrice è il doppio di quello della forza resistente, il vantaggio vale $2$ e la forza motrice è la metà della resistente.

La reazione del fulcro si ricava a parte, dall'equilibrio delle forze.
:::

:::esempio{titolo="Equilibrio con un fulcro che sostiene entrambe le forze"}
Una forza di $45\,\mathrm N$ agisce verso il basso a $0{,}2\,\mathrm m$ a sinistra del fulcro. A $0{,}6\,\mathrm m$ a destra si applicano $15\,\mathrm N$ verso il basso. La prima forza tende a ruotare la leva in senso antiorario e la seconda in senso orario. Poiché $45\cdot0{,}2=9$ e $15\cdot0{,}6=9$, i loro momenti sono $+9$ e $-9\,\mathrm{N\,m}$, con somma zero. Le due forze verso il basso hanno somma $60\,\mathrm N$, perciò il fulcro fornisce $60\,\mathrm N$ verso l'alto per annullare la somma verticale. La sua retta d'azione passa per il fulcro, quindi la reazione ha braccio zero e non altera l'equazione appena usata.
:::

::grafico{assi=0 uguale=1 linee="-1.8,0 3.8,0;-0.32,-0.55 0,0 0.32,-0.55 -0.32,-0.55" vettori="-1,0,-1,-1.8,45 N;3,0,3,-0.6,15 N;0,0,0,2.4,60 N" etichette="-0.5,0.45,0,2 m;1.65,0.45,0,6 m" xmin=-2.5 xmax=4.4 ymin=-2.3 ymax=3 titolo="Leva con momenti opposti e reazione del fulcro verso l'alto"}

:::esempio{titolo="Forze opposte sullo stesso lato del fulcro"}
Un carico di $60\,\mathrm N$ agisce verso il basso a $0{,}30\,\mathrm m$ a destra del fulcro. Una mano solleva l'asta a $0{,}90\,\mathrm m$ dal fulcro, sullo stesso lato, con una forza $F$ verso l'alto. Entrambi i punti di applicazione sono a destra del fulcro e le forze agiscono in versi opposti. Il carico abbassa il lato destro e ha momento orario, quindi negativo. La mano alza il lato destro, quindi la sua forza ha momento positivo.
$$
0{,}90F-0{,}30\cdot60=0,\qquad F=20\,\mathrm N.
$$
Il conto è $0{,}90\,F=18\,\mathrm{N\,m}$, quindi $F=\dfrac{18}{0{,}90}\,\mathrm N=20\,\mathrm N$.

Controllando le forze verticali, la mano solleva con $20\,\mathrm N$ mentre il carico spinge verso il basso con $60\,\mathrm N$. Il fulcro deve fornire i restanti $60\,\mathrm N-20\,\mathrm N=40\,\mathrm N$ verso l'alto. È la direzione delle spinte su quel lato a rendere opposti i momenti.

::grafico{assi=0 uguale=1 linee="-.26,0 1.05,0;-.06,-.1 0,0 .06,-.1 -.06,-.1" vettori=".3,0,.3,-.3,60 N;.9,0,.9,.1,20 N;0,0,0,.2,40 N" etichette=".3,.07,0,30 m;.85,-.09,0,90 m" xmin=-.35 xmax=1.2 ymin=-.39 ymax=.32 titolo="Il carico e la mano sono dalla stessa parte del fulcro. Le loro forze verticali hanno versi opposti."}
:::

## Coppie di forze

::::teorema{#coppie titolo="Risultante nulla e momento non nullo"}
Una **coppia di forze** è formata da due forze parallele con modulo comune $F$, versi opposti e rette d'azione distinte. Le due mani che girano un volante, una spingendo in su e l'altra in giù, esercitano una coppia. La risultante è nulla, perché le due forze hanno lo stesso modulo e versi opposti. Il modulo del momento è invece $F d$, dove $d$ è la distanza perpendicolare fra le rette.

:::dimostrazione
Per calcolare il momento si sceglie un punto sulla retta d'azione di una delle forze. Quella forza ha braccio zero, quindi il suo momento è nullo. L'altra ha braccio $d$, quindi il momento totale ha modulo $Fd$.

Per la dimostrazione vista nell'equilibrio del corpo rigido, cambiare il punto di riferimento sottrae al momento totale il momento della risultante. La risultante nulla della coppia rende quindi il risultato indipendente dalla scelta del punto.
:::
::::

::grafico{assi=0 uguale=1 linee="-2,-2 -2,2;2,-2 2,2" vettori="-2,0,-2,1.6,F;2,0,2,-1.6,F" etichette="0,0.2,d" xmin=-3 xmax=3 ymin=-2.4 ymax=2.4 titolo="Forze verticali opposte a distanza d. Entrambe tendono a ruotare il corpo in senso orario rispetto al punto centrale"}

:::esempio{titolo="Sommare coppie di verso diverso"}
La prima coppia è formata da forze verticali di modulo $35\,\mathrm N$ distanti $0{,}40\,\mathrm m$. La forza di sinistra punta verso il basso e quella di destra verso l'alto, perciò il momento è antiorario e vale $+35\cdot0{,}40=+14\,\mathrm{N\,m}$. Una seconda coppia di forze di modulo $20\,\mathrm N$ distanti $0{,}30\,\mathrm m$ tende a ruotare in senso orario. Il suo contributo vale $-20\cdot0{,}30=-6\,\mathrm{N\,m}$. Ciascuna coppia ha risultante nulla, quindi insieme danno una risultante nulla con momento $+14-6=+8\,\mathrm{N\,m}$. Una terza coppia oraria di $8\,\mathrm{N\,m}$ annullerebbe il momento totale.

::grafico{assi=0 uguale=1 linee="0,0 .4,0;.7,0 1,0" vettori="0,0,0,-.28,35 N;.4,0,.4,.28,35 N;.7,0,.7,.16,20 N;1,0,1,-.16,20 N" etichette=".2,.07,0,40 m;.85,-.08,0,30 m" xmin=-.13 xmax=1.14 ymin=-.37 ymax=.36 titolo="Coppia antioraria a sinistra e oraria a destra. I momenti si sommano con segno."}
:::

## Travi con due appoggi

:::osservazione{#travi titolo="Ricavare le reazioni"}
Un **appoggio** è un sostegno su cui la trave è posata e che la spinge verso l'alto con una reazione verticale. Le reazioni di due appoggi A e B si indicano con $R_A$ e $R_B$.

Per una trave orizzontale di lunghezza $L$ fra due appoggi, un singolo peso $P$ applicato a distanza $a$ dall'appoggio A dà reazione $R_B=\dfrac{Pa}{L}$ nell'altro appoggio se il peso della trave è trascurabile. La formula si ottiene dai momenti rispetto ad A, che eliminano $R_A$, perché $R_A$ è applicata in A e ha braccio zero. Il peso $P$ ha braccio $a$ e momento orario, la reazione $R_B$ ha braccio $L$ e momento antiorario. La somma dei momenti è nulla, quindi
$$
R_BL-Pa=0,\qquad R_B=\frac{Pa}{L}.
$$
Il bilancio verticale $R_A+R_B-P=0$ fornisce poi $R_A=P-R_B$.

Per $L=4\,\mathrm m$, $a=1\,\mathrm m$ e $P=100\,\mathrm N$ si trovano
$$
R_B=\frac{100\,\mathrm N\cdot1\,\mathrm m}{4\,\mathrm m}=25\,\mathrm N,\qquad
R_A=100\,\mathrm N-25\,\mathrm N=75\,\mathrm N.
$$
Se la trave ha peso proprio, lo si aggiunge come forza verticale applicata al suo **baricentro**, che è il punto in cui si considera applicato il peso di un corpo. Una trave è **omogenea** quando è fatta dello stesso materiale e ha lo stesso spessore in ogni tratto. Il suo baricentro è allora nel punto centrale. Con un peso della trave omogenea di $40\,\mathrm N$ si aggiungono $20\,\mathrm N$ a ciascuna reazione, perché il peso proprio agisce al centro. Le reazioni diventano $R_B=45\,\mathrm N$ e $R_A=95\,\mathrm N$.

Lo stesso risultato si verifica con i momenti rispetto a B, che danno $R_A\cdot4=100\cdot3+40\cdot2=380$, in newton metri, quindi $R_A=95\,\mathrm N$.
:::

:::esempio{titolo="Appoggio che si stacca con un carico a sbalzo"}
Un carico è **a sbalzo** quando è applicato su un tratto della trave che sporge oltre un appoggio. Un **appoggio semplice** spinge soltanto verso l'alto, perché la trave vi è posata sopra senza essere fissata.

Gli appoggi A e B distano $3\,\mathrm m$. Una trave di peso trascurabile sporge a destra di B. Un carico di $90\,\mathrm N$ è a $4\,\mathrm m$ da A, quindi $1\,\mathrm m$ oltre B. Il momento attorno ad A impone $3R_B=90\cdot4$, quindi $R_B=\dfrac{360}{3}\,\mathrm N=120\,\mathrm N$. Il bilancio verticale darebbe $R_A=90-120=-30\,\mathrm N$. In A servirebbe una forza verso il basso, che un appoggio semplice non esercita, perciò la trave si stacca da A e ruota attorno a B.

Un **contrappeso** è un peso aggiunto per equilibrarne un altro. Con un contrappeso di $60\,\mathrm N$ a $0{,}50\,\mathrm m$ da A, nei momenti rispetto ad A si aggiunge il termine $60\cdot0{,}50$ e il peso totale diventa $90\,\mathrm N+60\,\mathrm N=150\,\mathrm N$. Vale invece
$$
R_B=\frac{90\cdot4+60\cdot0{,}50}{3}\,\mathrm N=130\,\mathrm N,\qquad
R_A=150\,\mathrm N-130\,\mathrm N=20\,\mathrm N.
$$
Entrambe le reazioni ora possono essere fornite dagli appoggi perché sono rivolte verso l'alto.

Un controllo indipendente consiste nel fare i momenti in B, rispetto a cui $R_A$ è $3\,\mathrm m$ a sinistra, il carico $1\,\mathrm m$ a destra e il contrappeso $2{,}50\,\mathrm m$ a sinistra. Si ottiene la somma $-20\cdot3-90\cdot1+60\cdot2{,}50=-60-90+150=0$, in newton metri.

::grafico{assi=0 uguale=1 linee="-.25,0 4.32,0;-.16,-.28 0,0 .16,-.28 -.16,-.28;2.84,-.28 3,0 3.16,-.28 2.84,-.28" vettori=".5,0,.5,-.56,60 N;4,0,4,-.84,90 N" punti="0,0,pieno,A;3,0,pieno,B" etichette=".62,.24,0,50 m;2.75,.24,3 m;4.05,.24,4 m" xmin=-.55 xmax=4.7 ymin=-1.07 ymax=.55 titolo="Con il contrappeso da 60 N il carico oltre B può essere sostenuto da entrambi gli appoggi"}
:::

## Baricentro

:::definizione{#baricentro titolo="Posizione della risultante dei pesi"}
Ogni parte di un corpo ha un suo peso. Il **baricentro**, indicato con $G$, è il punto in cui si applica il peso totale per ottenere lo stesso momento di tutti i pesi delle singole parti.

Il peso di una massa $m$ è $P=mg$. La massa si misura in chilogrammi, di simbolo $\mathrm{kg}$. La lettera $g$ indica il peso di ogni chilogrammo e sulla superficie terrestre vale circa $9{,}8\,\mathrm{N/kg}$. Il campo di gravità è *uniforme* quando $g$ ha lo stesso valore in tutti i punti del corpo. Il **centro di massa** è il punto la cui posizione è la media delle posizioni delle masse, in cui ogni posizione conta in proporzione alla sua massa. In un campo uniforme il baricentro ha la stessa posizione del centro di massa.

Una massa di $1\,\mathrm{kg}$ è fissata in $x=0$ e una di $3\,\mathrm{kg}$ in $x=4\,\mathrm m$. La coordinata del baricentro si calcola moltiplicando ogni massa per la sua posizione, sommando i prodotti e dividendo per la massa totale.
$$
x_G=\frac{1\,\mathrm{kg}\cdot0\,\mathrm m+3\,\mathrm{kg}\cdot4\,\mathrm m}{1\,\mathrm{kg}+3\,\mathrm{kg}}=\frac{12\,\mathrm{kg\,m}}{4\,\mathrm{kg}}=3\,\mathrm m.
$$
Il baricentro è più vicino alla massa maggiore.

Con le lettere, le masse si numerano $m_1,m_2,\dots$ e le loro posizioni $x_1,x_2,\dots$ La scrittura $m_i$ indica una qualsiasi di queste masse e $x_i$ la sua posizione. Per masse $m_i$ fissate lungo una retta nelle posizioni $x_i$, la coordinata del baricentro è $x_G=\dfrac{\sum m_i x_i}{\sum m_i}$. Una media calcolata in questo modo si chiama **media pesata**.

La formula si ottiene imponendo che il peso totale applicato in $x_G$ abbia lo stesso momento della somma dei pesi individuali. Per due masse, con i momenti calcolati rispetto all'origine,
$$
(m_1+m_2)\,g\,x_G=m_1g\,x_1+m_2g\,x_2.
$$
Il campo $g$ si semplifica, perché moltiplica tutti i termini. Dividendo per $m_1+m_2$ si ottiene la formula.

Il punto medio è il baricentro di un'asta omogenea di sezione costante, cioè con lo stesso spessore in ogni punto, per simmetria. A ogni tratto a sinistra del punto medio corrisponde infatti un tratto uguale a destra. Se si aggiunge una massa a destra del baricentro iniziale, la media pesata si sposta verso destra. La nuova coordinata resta compresa fra la vecchia coordinata e quella della massa aggiunta.
:::

:::esempio{titolo="Riportare il baricentro al punto medio"}
Un'asta omogenea di massa $3\,\mathrm{kg}$ va da $x=0$ a $x=2\,\mathrm m$. Il suo baricentro è nel punto medio, $1\,\mathrm m$. Nel calcolo l'asta conta quindi come una massa di $3\,\mathrm{kg}$ posta in $x=1\,\mathrm m$. Aggiungendo $1\,\mathrm{kg}$ all'estremità destra, in $x=2\,\mathrm m$, si ottiene
$$
x_G=\frac{3\cdot1+1\cdot2}{3+1}\,\mathrm m=1{,}25\,\mathrm m.
$$
Lo spostamento è di $1{,}25\,\mathrm m-1\,\mathrm m=0{,}25\,\mathrm m=25\,\mathrm{cm}$ (centimetri), verso la massa aggiunta.

Per riportare il baricentro a $x=1\,\mathrm m$ si può aggiungere una massa in $x=0$. Verificando i momenti attorno al punto medio, il peso dell'asta ha braccio nullo e i due pesi aggiunti hanno bracci uguali, di $1\,\mathrm m$, da parti opposte. I loro momenti hanno versi opposti e si annullano se i due pesi sono uguali. L'equilibrio richiede quindi un'altra massa di $1\,\mathrm{kg}$. Lo stesso risultato si ottiene imponendo alla media pesata di tornare al valore iniziale. Infatti $\dfrac{1\cdot0+3\cdot1+1\cdot2}{1+3+1}\,\mathrm m=\dfrac55\,\mathrm m=1\,\mathrm m$.

Nella figura $P_a$ è il peso dell'asta, applicato nel punto medio $C$, e $P_m$ è il peso della massa aggiunta in $B$.

::grafico{assi=0 uguale=1 linee="-.12,0 2.12,0" vettori="1,0,1,-.45,P_a;2,0,2,-.15" punti="0,0,pieno,O;1,0,pieno,C;1.25,0,pieno,G;2,0,pieno,B" etichette=".94,.24,1 m;1.35,-.26,1,25 m;2,.22,2 m;2.07,-.19,P_m" xmin=-.25 xmax=2.43 ymin=-.6 ymax=.42 titolo="Prima del contrappeso, G è fra il punto medio C dell'asta e la massa aggiunta in B"}
:::

## Stabilità e ribaltamento

:::teorema{#stabilita titolo="La verticale del baricentro"}
La **base d'appoggio** è la parte del piano delimitata dai punti in cui un corpo tocca il piano. Per una scatola è la faccia inferiore. La *verticale del baricentro* è la retta verticale che passa per il baricentro, cioè la retta d'azione del peso.

Con il solo peso e le reazioni di un appoggio orizzontale, l'equilibrio richiede che la verticale del baricentro incontri la base d'appoggio. Se arriva al bordo, il sistema è alla **soglia**, cioè al caso limite fra equilibrio e ribaltamento. Quando la verticale cade oltre il bordo, il peso produce un momento che tende a ribaltare il corpo attorno allo spigolo, cioè al bordo della base attorno a cui il corpo ruota.

Una spinta orizzontale $F$ applicata ad altezza $h$ ha momento $Fh$ rispetto allo spigolo verso cui il corpo tende a ruotare. Il braccio è $h$ perché la retta d'azione della spinta è orizzontale e passa a distanza $h$ dallo spigolo, che è sul piano. Se il peso è $P$ e la sua retta d'azione dista $b$ dallo spigolo, il peso ha momento $Pb$ di verso opposto, che tiene il corpo appoggiato. Alla soglia vale $Fh=Pb$.

Occorre anche che l'attrito disponibile sia sufficiente a evitare lo scorrimento prima di quella soglia. L'**attrito statico** è la forza con cui il piano si oppone allo scorrimento di un corpo fermo. Il suo valore massimo è il prodotto del coefficiente d'attrito statico per la reazione verticale del piano, come nel capitolo sulle forze.
:::

:::esempio{titolo="Confrontare scorrimento e ribaltamento"}
Una scatola di peso $200\,\mathrm N$ poggia su un piano orizzontale. La verticale del baricentro dista $0{,}20\,\mathrm m$ dallo spigolo di ribaltamento. Una spinta orizzontale applicata a $0{,}80\,\mathrm m$ di altezza fa raggiungere la soglia rotatoria, data da $Fh=Pb$, a
$$
F_{\mathrm{rib}}=\frac{200\cdot0{,}20}{0{,}80}\,\mathrm N=50\,\mathrm N.
$$
Il pedice «rib» abbrevia *ribaltamento*.

Prima del movimento la reazione verticale vale $200\,\mathrm N$, perché equilibra il peso. Con coefficiente d'attrito statico $0{,}20$ l'attrito massimo è $0{,}20\cdot200\,\mathrm N=40\,\mathrm N$. Aumentando lentamente la spinta, si raggiungono prima i $40\,\mathrm N$ e poi i $50\,\mathrm N$, quindi la scatola inizia a scorrere. Con coefficiente $0{,}40$ la soglia di scorrimento sale a $0{,}40\cdot200\,\mathrm N=80\,\mathrm N$. Poiché $50\,\mathrm N$ è minore di $80\,\mathrm N$, si raggiunge prima la soglia di ribaltamento e la scatola si ribalta. La formula dei momenti individua la possibile rotazione, mentre l'attrito determina se la scatola resta ferma abbastanza a lungo per raggiungerla.

Nel grafico la curva $F=\dfrac{40}{h}$ è la spinta di ribaltamento al variare dell'altezza $h$ e le due rette orizzontali sono le soglie di scorrimento.

::grafico{f="40/x;40;80" legenda="ribaltamento;attrito 0,20;attrito 0,40" punti=".8,50,pieno,R;.8,40,pieno,S;.8,80,pieno,T" xmin=.45 xmax=1.1 ymin=30 ymax=96 nomi="h (m),F (N)" titolo="A 0,80 m la soglia di rotazione è tra le due soglie di scorrimento"}
:::

:::osservazione{titolo="Quando si inclina il piano d'appoggio"}
Un piano inclinato è un piano che forma un angolo $\theta$ con l'orizzontale. Il lato *a valle* è quello più basso. Per una scatola su un piano inclinato si misura $h$ perpendicolarmente alla base, dal piano al baricentro, e $b$ lungo il piano, dalla proiezione ortogonale del baricentro al bordo a valle. La **proiezione ortogonale** del baricentro è il punto della base che si raggiunge scendendo dal baricentro perpendicolarmente al piano.

Il peso resta verticale, quindi quando il piano si inclina di $\theta$ la verticale del peso incontra la base più a valle della proiezione ortogonale. Il baricentro, la sua proiezione e il punto in cui la verticale incontra la base formano un triangolo rettangolo. Un cateto è $h$. L'angolo nel baricentro, fra la perpendicolare al piano e la verticale, è uguale a $\theta$. La **tangente** di un angolo, scritta $\tan\theta$, è il rapporto fra il cateto di fronte all'angolo e l'altro cateto. Il cateto di fronte a $\theta$, cioè la distanza fra la proiezione e il punto in cui la verticale incontra la base, è quindi lungo $h\tan\theta$.

Il corpo è alla soglia quando questa distanza è uguale a $b$, perché allora la verticale arriva al bordo, quindi la soglia di ribaltamento è $h\tan\theta=b$. Con $h=0{,}30\,\mathrm m$ e $b=0{,}15\,\mathrm m$ la soglia richiede
$$
\tan\theta=\frac{b}{h}=\frac{0{,}15}{0{,}30}=0{,}50,
$$
che corrisponde a un angolo di circa $27^\circ$.

Su un piano inclinato lo scorrimento inizia quando $\tan\theta$ raggiunge il coefficiente d'attrito statico, perché $\tan\theta$ è il rapporto fra la parte del peso parallela al piano e la parte perpendicolare al piano. Un attrito statico con coefficiente inferiore a $0{,}50$ farebbe iniziare lo scorrimento prima.
:::
