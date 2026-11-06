---
titolo: "Principi della dinamica e applicazioni delle forze"
sommario: "Principi di Newton, peso, reazione normale, attrito, molle e piano inclinato."
---

## Forze e risultante

:::definizione{#risultante titolo="La somma delle forze"}
Una **forza** descrive un'interazione e si misura in newton. La risultante $\vec F_R$ è la somma vettoriale di tutte le forze che agiscono sul corpo considerato. Lungo una retta, le forze nello stesso verso si sommano; quelle in versi opposti si sottraggono, dopo avere scelto un verso positivo.

Prima di scrivere l'equazione del moto si individua il corpo studiato e si rappresentano le sole forze che agiscono su di esso. Il peso è esercitato dalla Terra; la reazione normale è esercitata dalla superficie di appoggio.
:::

## Primo principio

:::teorema{#inerzia titolo="Equilibrio e velocità costante"}
In un **sistema di riferimento inerziale**, un corpo su cui agisce una risultante nulla mantiene la propria velocità vettoriale costante. Può dunque essere fermo oppure muoversi di moto rettilineo uniforme. L'inerzia è la proprietà di mantenere tale stato di moto.

L'equilibrio delle forze implica accelerazione nulla. Un carrello che scorre senza attrito continua a muoversi anche quando viene meno la spinta iniziale.
:::

## Secondo principio

:::teorema{#newton titolo="Risultante, massa e accelerazione"}
Per un corpo di massa costante studiato in un riferimento inerziale,
$$\vec F_R=m\vec a.$$
La massa misura l'inerzia e si esprime in chilogrammi. Dalla relazione segue $1\,\mathrm N=1\,\mathrm{kg\,m/s^2}$. A parità di risultante, una massa doppia ha accelerazione dimezzata. In un moto rettilineo si può scrivere $F_R=ma$ con i segni riferiti all'asse scelto.

::grafico{f="0.5*x" xmin=0 xmax=10 ymin=0 ymax=5 nomi="F,a" titolo="Per una massa di $2\,\mathrm{kg}$, l'accelerazione è proporzionale alla risultante"}
:::

## Terzo principio

:::teorema{#azione-reazione titolo="Le due forze di un'interazione"}
Se il corpo A esercita una forza su B, il corpo B esercita su A una forza di uguale modulo e verso opposto. Le due forze agiscono su **corpi diversi**, quindi non si annullano nel calcolo della risultante su un solo corpo.

Per un libro sul tavolo, il peso e la normale possono equilibrarsi, ma appartengono a interazioni diverse. La reazione al peso è l'attrazione gravitazionale che il libro esercita sulla Terra.
:::

## Peso, molla e attrito

:::definizione{#forze titolo="Modelli delle forze più comuni"}
Vicino alla superficie terrestre il peso ha modulo $P=mg$. Una molla ideale, nel regime elastico lineare, esercita una forza di richiamo di modulo $k|\Delta l|$, dove $k$ è la costante elastica in $\mathrm{N/m}$.

L'attrito dinamico su un corpo che scivola ha modulo $F_a=\mu_dN$ ed è opposto al moto relativo. L'attrito statico si adatta alla forza richiesta dall'equilibrio fino al massimo $F_{s,\max}=\mu_sN$. Su un piano orizzontale, con sole forze verticali peso e normale e senza accelerazione verticale, si ha $N=mg$.
:::

## Piano inclinato e moto circolare

:::teorema{#applicazioni titolo="Scegliere gli assi lungo il moto"}
Su un piano inclinato di angolo $\alpha$ rispetto all'orizzontale, il peso ha componente $mg\sin\alpha$ lungo la discesa e $mg\cos\alpha$ perpendicolare al piano. Se il corpo resta a contatto e le altre forze sono parallele al piano, $N=mg\cos\alpha$. Senza attrito l'accelerazione lungo la discesa è $a=g\sin\alpha$.

::grafico{assi=0 linee="0,0 5,0 5,2.887 0,0" poligoni="2,1.155 2.6,1.501 2.35,1.934 1.75,1.588" vettori="2.2,1.5,2.2,0.2,P;2.2,1.5,1.55,2.626,N" xmin=-1 xmax=6 ymin=-1 ymax=4 uguale=1 titolo="Sul piano inclinato il peso è verticale e la normale è perpendicolare alla superficie"}

Nel moto circolare uniforme la risultante radiale è diretta verso il centro e ha modulo $F_c=\dfrac{mv^2}{r}$. La forza centripeta è il nome della risultante radiale; può essere fornita, secondo il problema, da tensione, attrito o altre interazioni.
:::
