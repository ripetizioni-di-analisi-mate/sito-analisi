---
titolo: "I principi della dinamica"
sommario: "Inerzia, forza risultante, massa, azione e reazione, sistemi collegati e moti circolari."
---

## Forze e corpo da studiare

:::definizione{#risultante titolo="Diagramma delle forze"}
Una forza descrive un'interazione fra corpi. Si misura in newton, con $1\,\mathrm N=1\,\mathrm{kg\cdot m/s^2}$. La **risultante** è la somma vettoriale di tutte le forze applicate al corpo scelto.

Nel diagramma delle forze si rappresenta il corpo e si disegna ogni forza esterna dal suo punto di applicazione o, nel modello di punto materiale, dallo stesso punto. Un libro appoggiato sul tavolo riceve il peso dalla Terra e la forza normale dal tavolo. Le forze che il libro esercita sugli altri corpi non appartengono al suo diagramma. Con due forze orizzontali di $8\,\mathrm N$ verso destra e $3\,\mathrm N$ verso sinistra, la risultante è $5\,\mathrm N$ verso destra.
:::

::grafico{assi=0 uguale=1 poligoni="-0.6,-0.4 0.6,-0.4 0.6,0.4 -0.6,0.4" linee="-3,-0.4 3,-0.4" vettori="0,0,0,2,N;0,0,0,-2,P;0,0,2,0,F" xmin=-4 xmax=4 ymin=-3 ymax=3 titolo="Corpo su un piano: normale, peso e forza applicata hanno origini fisiche distinte"}

## Il primo principio

:::teorema{#inerzia titolo="Principio d’inerzia"}
In un riferimento inerziale un corpo con risultante nulla mantiene la velocità vettoriale costante. La quiete è il caso di velocità nulla; l'altro caso è il moto rettilineo uniforme. Questa è una legge sperimentale della meccanica classica.

Se un disco scorre su un piano orizzontale ideale senza attrito, peso e normale si compensano e il disco conserva la velocità anche senza una spinta continua. Un corpo reale che rallenta ha una risultante opposta alla velocità, dovuta per esempio all'attrito. La risultante nulla non richiede l'assenza di tutte le forze, perché più forze possono compensarsi.
:::

## Il secondo principio

:::teorema{#secondo-principio titolo="Forza e accelerazione"}
Per un corpo di massa costante in un riferimento inerziale,
$$
\sum\vec F=m\vec a.
$$
La massa misura l'inerzia, cioè la resistenza alla variazione della velocità. L'accelerazione ha direzione e verso della risultante. Su due assi si scrive $\sum F_x=ma_x$ e $\sum F_y=ma_y$. Per $m=4{,}0\,\mathrm{kg}$ e risultante $12\,\mathrm N$, il modulo dell'accelerazione è $3{,}0\,\mathrm{m/s^2}$.

Il peso è $\vec P=m\vec g$, diretto verso il basso vicino alla superficie terrestre. La massa si misura in chilogrammi e resta la stessa cambiando luogo; il peso si misura in newton e dipende dal campo gravitazionale. Con $m=2{,}0\,\mathrm{kg}$ e $g=9{,}81\,\mathrm{m/s^2}$, il peso è $19{,}6\,\mathrm N$.
:::

::grafico{f="3*x" xmin=0 xmax=5 ymin=0 ymax=16 nomi="a,F" titolo="Per massa $3\,\mathrm{kg}$, la risultante è proporzionale all’accelerazione"}

## Il terzo principio

:::teorema{#azione-reazione titolo="Forze fra due corpi"}
Se un corpo $A$ esercita una forza su $B$, allora $B$ esercita su $A$ una forza uguale in modulo e opposta in verso,
$$
\vec F_{A\to B}=-\vec F_{B\to A}.
$$
Le due forze agiscono su corpi diversi. Perciò non si cancellano nel diagramma di un singolo corpo. Il peso del libro e la normale del tavolo possono compensarsi, ma non costituiscono una coppia di azione e reazione: la reazione al peso è l'attrazione gravitazionale del libro sulla Terra.

Camminando, il piede spinge il terreno indietro; il terreno esercita sul piede una forza in avanti. È quest'ultima forza esterna che può accelerare la persona. Le forze della coppia esistono insieme, indipendentemente dalle masse o dalle accelerazioni dei due corpi.
:::

## Corpi collegati

:::osservazione{#sistemi-collegati titolo="Tensione e accelerazione comune"}
Un filo ideale è inestensibile e di massa trascurabile. Su una carrucola ideale senza massa e senza attrito la tensione ha lo stesso modulo nei due rami. Il vincolo impone accelerazioni collegate; il verso si sceglie separatamente per ogni corpo.

Per due masse $m_1,m_2$ su un piano orizzontale senza attrito, unite da un filo e trascinate dalla forza $F$, l'accelerazione comune è $a=\dfrac{F}{m_1+m_2}$. Se la forza agisce su $m_1$, la tensione che accelera $m_2$ vale $T=m_2a$. Con $m_1=2\,\mathrm{kg}$, $m_2=3\,\mathrm{kg}$ e $F=10\,\mathrm N$, si trovano $a=2\,\mathrm{m/s^2}$ e $T=6\,\mathrm N$.

Per due masse sospese, con $m_2>m_1$, le equazioni sono $m_2g-T=m_2a$ e $T-m_1g=m_1a$. Sommandole si ricava $a=\dfrac{m_2-m_1}{m_1+m_2}g$.
:::

## Applicazioni verticali e circolari

:::teorema{#dinamica-circolare titolo="Peso apparente e forza radiale"}
In un ascensore che accelera verso l'alto con accelerazione $a$, la normale della bilancia soddisfa $N-mg=ma$, quindi $N=m(g+a)$. Se l'ascensore accelera verso il basso con modulo $a$, risulta $N=m(g-a)$. La bilancia misura una forza di contatto; il peso gravitazionale rimane $mg$. In caduta libera $a=g$ e $N=0$.

Nel moto circolare la componente radiale della risultante è $\sum F_r=\dfrac{mv^2}{r}$ verso il centro. La forza centripeta è il nome di questa risultante radiale: può essere dovuta a tensione, attrito, gravità o a una loro combinazione. Un corpo di $0{,}50\,\mathrm{kg}$ a $4{,}0\,\mathrm{m/s}$ su raggio $2{,}0\,\mathrm m$ richiede risultante radiale $4{,}0\,\mathrm N$. Non si aggiunge una forza centripeta a quelle già disegnate.
:::
