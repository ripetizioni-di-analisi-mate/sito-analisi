---
titolo: "Forze, attrito ed equilibrio"
sommario: "Forza elastica, attriti, piani inclinati, tensioni, equilibrio del punto materiale e momento delle forze."
---

## Forza normale e tensione

:::definizione{#vincoli titolo="Forze esercitate dai vincoli"}
La **forza normale** è la componente della forza di contatto perpendicolare alla superficie. Il suo modulo dipende dalle altre forze e dall'accelerazione perpendicolare al piano. Su un piano orizzontale, con sole forze verticali peso e normale e con accelerazione verticale nulla, risulta $N=mg$. Se una forza aggiuntiva preme verso il basso, la normale aumenta.

La tensione di un filo teso agisce lungo il filo e tira il corpo verso il tratto di filo adiacente. Un filo ideale non può spingere. Per una massa ferma appesa verticalmente, $T=mg$; se accelera verso l'alto, $T-mg=ma$. Specificare il corpo e il verso positivo impedisce di confondere tensione e peso.
:::

## La forza elastica

:::teorema{#hooke titolo="Legge di Hooke"}
Una molla ideale esercita una forza proporzionale alla deformazione e opposta ad essa,
$$
F_x=-kx.
$$
$x$ è lo spostamento dalla lunghezza a riposo e $k$ la costante elastica, misurata in $\mathrm{N/m}$. La legge è sperimentale e vale nell'intervallo elastico lineare. Con $k=200\,\mathrm{N/m}$ e allungamento $0{,}030\,\mathrm m$, il modulo della forza è $6{,}0\,\mathrm N$.

Una massa appesa ferma ha allungamento $x=\dfrac{mg}{k}$, perché il peso è compensato dalla forza elastica. La coordinata della massa può essere misurata da un'origine diversa; nella legge di Hooke compare sempre la deformazione della molla rispetto alla lunghezza a riposo.
:::

::grafico{f="-2*x" xmin=-3 xmax=3 ymin=-7 ymax=7 nomi="x,F" titolo="La forza elastica ha segno opposto alla deformazione"}

## Attrito statico e dinamico

:::teorema{#attrito titolo="Modello dell’attrito radente"}
Nel modello di attrito radente, l'attrito statico assume il valore necessario all'equilibrio fino al massimo $f_{s,\max}=\mu_sN$. Quindi $0\leq f_s\leq\mu_sN$. Se un corpo riceve una spinta di $3\,\mathrm N$ e il massimo statico è $5\,\mathrm N$, resta fermo con attrito di $3\,\mathrm N$.

Durante lo scorrimento il modulo dell'attrito dinamico è $f_d=\mu_dN$. Il verso è opposto allo scorrimento relativo fra le superfici. Con $N=40\,\mathrm N$ e $\mu_d=0{,}20$, si ha $f_d=8{,}0\,\mathrm N$. I coefficienti sono adimensionali e dipendono dalla coppia di superfici e dalle loro condizioni. La resistenza dell'aria richiede un modello diverso, spesso dipendente dalla velocità.
:::

## Piano inclinato

:::teorema{#piano-inclinato titolo="Scomposizione del peso"}
Su un piano inclinato di $\theta$ rispetto all'orizzontale, le componenti del peso sono $mg\sin\theta$ lungo il piano verso il basso e $mg\cos\theta$ perpendicolare al piano. Se non ci sono altre forze perpendicolari, $N=mg\cos\theta$.

Senza attrito, l'accelerazione lungo la discesa è $a=g\sin\theta$. Con attrito dinamico e corpo che scende,
$$
a=g(\sin\theta-\mu_d\cos\theta).
$$
La formula è ottenuta scrivendo $ma=mg\sin\theta-\mu_dmg\cos\theta$. Se il corpo sale, l'attrito è diretto verso il basso come la componente del peso e cambia l'equazione dei segni. A riposo è possibile l'equilibrio se $mg\sin\theta\leq\mu_smg\cos\theta$, cioè $\tan\theta\leq\mu_s$. La massa si semplifica in questa condizione.
:::

::grafico{assi=0 uguale=1 poligoni="-3,-1 3,-1 3,2.464" vettori="0,0.732,0,-1.268,P;0,0.732,-1,2.464,N" riferimento="0,0.732,30,1.5,x′,y′" xmin=-4 xmax=5 ymin=-3 ymax=4 titolo="Piano inclinato di $30^\circ$: il peso è verticale e la normale è perpendicolare al piano"}

## Equilibrio del punto materiale

:::teorema{#equilibrio titolo="Risultante nulla"}
Un punto materiale in equilibrio statico ha velocità nulla e risultante nulla. Nel piano si impongono insieme $\sum F_x=0$ e $\sum F_y=0$. Un'insegna sospesa a due fili simmetrici che formano angolo $\theta$ con l'orizzontale soddisfa $2T\sin\theta=mg$, quindi $T=\dfrac{mg}{2\sin\theta}$.

Le componenti orizzontali si compensano per simmetria. Con peso $100\,\mathrm N$ e $\theta=30^\circ$, ciascun filo ha tensione $100\,\mathrm N$. Se i fili diventano quasi orizzontali, occorre una tensione molto grande per fornire la stessa componente verticale. L'angolo va definito con precisione, perché misurandolo dalla verticale compare il coseno.
:::

## Momento ed equilibrio dei corpi estesi

:::definizione{#momento-equilibrio titolo="Braccio di una forza"}
Una forza può anche far ruotare un corpo. Il modulo del **momento** rispetto a un punto è $M=Fb$, dove $b$ è la distanza perpendicolare fra il punto e la retta d'azione della forza. In alternativa $M=rF|\sin\theta|$. Nel piano si assegna un segno ai versi di rotazione, per esempio positivo antiorario. L'unità del momento è $\mathrm{N\cdot m}$.

Per l'equilibrio statico di un corpo rigido piano occorrono risultante nulla e somma dei momenti nulla. Una forza di $20\,\mathrm N$ applicata perpendicolarmente a $0{,}30\,\mathrm m$ dal perno ha momento $6{,}0\,\mathrm{N\cdot m}$. Nella leva ideale con forze opposte per effetto rotazionale, $F_1b_1=F_2b_2$. Il peso della leva va incluso quando non è trascurabile; la reazione del perno ha momento nullo rispetto al perno stesso.
:::

::grafico{assi=0 uguale=1 linee="-3,0 3,0" vettori="-2,0,-2,-2,F₁;1,0,1,-2,F₂" punti="0,0,pieno,O" xmin=-4 xmax=4 ymin=-3 ymax=2 titolo="Forze ai lati opposti del perno producono momenti di verso opposto"}
