---
titolo: "Pitagora e teoremi di Euclide"
sommario: "Triangoli rettangoli, teorema di Pitagora e inverso, triangoli notevoli, proiezioni dei cateti e teoremi di Euclide."
---

## Il triangolo rettangolo

:::definizione{#triangolo titolo="Cateti e ipotenusa"}
Un triangolo **rettangolo** ha un angolo di $90^\circ$. I lati che formano quell'angolo sono i **cateti**; il lato opposto è l'**ipotenusa** ed è il più lungo.

Si indicano con $a,b$ i cateti e con $c$ l'ipotenusa. Riconoscere il ruolo dei lati precede la scelta della formula. Se si conosce l'ipotenusa e un cateto, il secondo cateto è minore dell'ipotenusa.

Un triangolo con lati $3,4,5$ è rettangolo e ha ipotenusa $5$. Un triangolo generico non soddisfa automaticamente le formule dei triangoli rettangoli.
:::

## Il teorema di Pitagora

:::teorema{#pitagora titolo="Somma dei quadrati dei cateti"}
In un triangolo rettangolo,
$$
c^2=a^2+b^2.
$$
Quindi $c=\sqrt{a^2+b^2}$, $a=\sqrt{c^2-b^2}$ e $b=\sqrt{c^2-a^2}$.

Una dimostrazione per aree dispone quattro triangoli rettangoli congruenti in un quadrato di lato $a+b$, lasciando al centro un quadrato di lato $c$. L'area esterna è $(a+b)^2$ e quella dei quattro triangoli è $2ab$. Sottraendo segue $c^2=(a+b)^2-2ab=a^2+b^2$.

Con cateti $6$ e $8$ si ottiene $c=\sqrt{36+64}=10$. Il risultato è positivo e maggiore di ciascun cateto.

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 0,3" linee="0.35,0 0.35,0.35 0,0.35" punti="0,0,pieno,A;4,0,pieno,B;0,3,pieno,C" xmin=-1 xmax=5 ymin=-1 ymax=4 titolo="Il lato $BC$ è l’ipotenusa; $AB$ e $AC$ sono i cateti"}
:::

## Il teorema inverso

:::teorema{#inverso titolo="Riconoscere un angolo retto"}
Se tre lunghezze positive formano un triangolo e il quadrato del lato maggiore è la somma dei quadrati degli altri due, il triangolo è rettangolo.

Per $5,12,13$ si ha $25+144=169$, quindi il triangolo è rettangolo. Per $4,5,6$, invece, $16+25\ne36$ e non è rettangolo.

La condizione che i lati formino un triangolo richiede che ciascuno sia minore della somma degli altri due. Il teorema inverso identifica poi l'angolo opposto al lato maggiore come angolo retto.

Moltiplicare tutti i lati di una terna pitagorica per lo stesso numero positivo conserva la relazione. Da $3,4,5$ si ottengono così $9,12,15$.
:::

## Triangoli notevoli

:::teorema{#notevoli titolo="Quadrato ed equilatero"}
Nel triangolo rettangolo isoscele i cateti sono uguali. Se ciascuno misura $l$, l'ipotenusa misura $l\sqrt2$. Di conseguenza un quadrato di lato $l$ ha diagonale $l\sqrt2$.

L'altezza di un triangolo equilatero di lato $l$ divide la base in due parti uguali. Pitagora dà
$$
h=\sqrt{l^2-\left(\frac l2\right)^2}=\frac{\sqrt3}{2}l.
$$
L'area è quindi $\dfrac{\sqrt3}{4}l^2$. Con lato $6$ si hanno altezza $3\sqrt3$ e area $9\sqrt3$.

I due triangoli ottenuti hanno angoli $30^\circ$, $60^\circ$ e $90^\circ$. Il cateto opposto a $30^\circ$ misura metà dell'ipotenusa.

::grafico{assi=0 uguale=1 poligoni="0,0 6,0 3,5.196152" linee="3,0 3,5.196152" xmin=-1 xmax=7 ymin=-1 ymax=6 titolo="L’altezza di un equilatero di lato $6$ misura $3\sqrt3$"}
:::

## Proiezioni sull’ipotenusa

:::definizione{#proiezioni titolo="L’altezza e i segmenti"}
Sia $ABC$ rettangolo in $A$ e sia $H$ il piede dell'altezza su $BC$. Poniamo $BC=c$, $BH=p$, $HC=q$ e $AH=h$. Le due proiezioni sono positive e soddisfano $p+q=c$.

Il segmento $BH$ è la proiezione del cateto $AB$; $HC$ è quella di $AC$. Le corrispondenze vanno conservate nelle formule.

::grafico{assi=0 uguale=1 linee="0,0 5,0 1.8,2.4 0,0;1.8,2.4 1.8,0" punti="0,0,pieno,B;5,0,pieno,C;1.8,2.4,pieno,A;1.8,0,pieno,H" xmin=-1 xmax=6 ymin=-1 ymax=4 titolo="$BH$ e $HC$ sono le proiezioni; $AH$ è l’altezza"}

L'altezza divide il triangolo in due triangoli rettangoli simili a quello iniziale. Le proporzioni fra i loro lati giustificano i teoremi di Euclide.
:::

## Il primo teorema di Euclide

:::teorema{#euclide-primo titolo="Cateto, ipotenusa e proiezione"}
In un triangolo rettangolo il quadrato di un cateto è uguale al prodotto dell'ipotenusa per la proiezione di quel cateto sull'ipotenusa:
$$
AB^2=cp,\qquad AC^2=cq.
$$
Dalla similitudine fra $ABC$ e $HBA$ si ha $BC:AB=AB:BH$. Moltiplicando i medi e gli estremi si ottiene $AB^2=BC\cdot BH$. L'altra relazione si dimostra nello stesso modo.

Se $c=25$ e $p=9$, il cateto corrispondente è $AB=\sqrt{225}=15$. L'altra proiezione è $16$ e l'altro cateto misura $20$.
:::

## Il secondo teorema di Euclide

:::teorema{#euclide-secondo titolo="Altezza e proiezioni"}
Il quadrato dell'altezza relativa all'ipotenusa è il prodotto delle due proiezioni:
$$
h^2=pq.
$$
La similitudine fra i due triangoli piccoli dà $BH:AH=AH:HC$. Il prodotto dei medi è uguale a quello degli estremi, quindi $AH^2=BH\cdot HC$.

Con $p=4$ e $q=9$, l'altezza è $6$ e l'ipotenusa è $13$. I cateti sono $\sqrt{52}$ e $\sqrt{117}$. Questi valori non vanno sostituiti con $4$ e $9$, che sono le loro proiezioni.
:::

## Problemi con più passaggi

:::osservazione{#problemi titolo="Scelta della base per l’area"}
L'area del triangolo rettangolo può essere calcolata in due modi:
$$
A=\frac{AB\cdot AC}{2}=\frac{ch}{2}.
$$
Segue anche $h=\dfrac{AB\cdot AC}{c}$. Con cateti $3$ e $4$ e ipotenusa $5$, l'altezza relativa all'ipotenusa è $\dfrac{12}{5}$.

Per un triangolo isoscele si traccia l'altezza alla base, che la divide a metà. Se i lati obliqui misurano $5$ e la base $6$, l'altezza misura $4$ e l'area $12$.

Prima di applicare Euclide si individua l'ipotenusa. In un triangolo non rettangolo le stesse formule non sono giustificate.
:::
