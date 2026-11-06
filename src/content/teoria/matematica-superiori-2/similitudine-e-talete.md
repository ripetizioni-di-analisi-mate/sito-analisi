---
titolo: "Similitudine e teorema di Talete"
sommario: "Segmenti proporzionali, Talete, criteri di similitudine, corrispondenze fra lati, rapporti di perimetri e aree e scale."
---

## Corrispondenze fra figure

:::definizione{#rapporto titolo="Il rapporto di similitudine"}
Due poligoni sono **simili** se hanno angoli corrispondenti congruenti e lati corrispondenti proporzionali. Il rapporto $k>0$ tra una lunghezza della seconda figura e quella della prima è il **rapporto di similitudine** dalla prima alla seconda.

Se un lato passa da $4$ a $10$, $k=\dfrac{10}{4}=\dfrac52$. Un altro lato di $6$ diventa $15$. Il rapporto inverso è $\dfrac25$ e descrive il passaggio nella direzione opposta.

Un rapporto maggiore di uno produce un ingrandimento, uno minore di uno una riduzione. Con rapporto uno le figure simili sono congruenti.
:::

## Segmenti proporzionali

:::teorema{#proporzioni titolo="Ordine dei termini"}
La proporzione $a:b=c:d$, con denominatori non nulli, equivale ad $ad=bc$. Nei problemi geometrici le lunghezze sono positive.

Se $\dfrac{x}{6}=\dfrac{4}{3}$, moltiplicando si trova $3x=24$ e $x=8$. Se si inverte un rapporto, si deve invertire anche l'altro.

Le corrispondenze sono parte del dato. Nella scrittura $\triangle ABC\sim\triangle DEF$, i vertici corrispondenti sono $A,D$, $B,E$ e $C,F$. Perciò $AB$ corrisponde a $DE$ e $BC$ a $EF$.
:::

## Il teorema di Talete

:::teorema{#talete titolo="Parallele e trasversali"}
Un fascio di rette parallele determina su due trasversali segmenti corrispondenti proporzionali. Con punti $A,B,C$ sulla prima trasversale e $A',B',C'$ sulla seconda,
$$
\frac{AB}{BC}=\frac{A'B'}{B'C'}.
$$
Per segmenti $AB=2$, $BC=3$ e $A'B'=6$ si ottiene $B'C'=9$.

I segmenti devono essere individuati dalle stesse coppie di parallele. Confrontare un segmento totale con uno parziale su una trasversale richiede lo stesso confronto sull'altra.

In un triangolo, una retta parallela a un lato divide gli altri due in parti proporzionali. Questo è il caso usato più spesso negli esercizi.
:::

## Criteri per i triangoli

:::teorema{#criteri titolo="Tre modi di riconoscere la similitudine"}
Due triangoli sono simili se hanno due angoli corrispondenti congruenti. Il terzo è allora congruente perché in entrambi la somma degli angoli è $180^\circ$.

Sono simili anche se hanno tutti e tre i lati corrispondenti proporzionali, oppure due lati corrispondenti proporzionali e l'angolo *compreso* congruente.

Due triangoli con lati $3,4,5$ e $6,8,10$ sono simili con rapporto $2$. Un solo angolo congruente non determina una forma: occorre un altro dato del criterio. Nel criterio dei due lati, l'angolo deve trovarsi fra quei lati.
:::

## Una parallela alla base

:::teorema{#parallela titolo="Triangoli annidati"}
Se $D$ appartiene al lato $AB$, $E$ al lato $AC$ e $DE\parallel BC$, allora $ADE$ e $ABC$ sono simili. Hanno l'angolo $A$ comune e angoli corrispondenti congruenti per il parallelismo.

Valgono quindi
$$
\frac{AD}{AB}=\frac{AE}{AC}=\frac{DE}{BC}.
$$
Se $AD=3$, $AB=9$ e $BC=12$, si ottiene $DE=4$.

::grafico{assi=0 uguale=1 linee="0,0 6,0 2,6 0,0;1,3 4,3" punti="2,6,pieno,A;0,0,pieno,B;6,0,pieno,C;1,3,pieno,D;4,3,pieno,E" xmin=-1 xmax=7 ymin=-1 ymax=7 titolo="La parallela $DE$ determina due triangoli simili"}

Il rapporto fra i segmenti piccoli e quelli grandi è lo stesso su tutti e tre i lati. Il segmento totale $AB$ non va confuso con $DB$.
:::

## Perimetri e altezze

:::teorema{#perimetri titolo="Rapporti lineari"}
Tutte le lunghezze corrispondenti di figure simili si moltiplicano per $k$. Questo vale per lati, altezze, mediane e perimetri.

Se i lati sono moltiplicati per $3$, anche la loro somma è moltiplicata per $3$. Un triangolo con perimetro $14$ ha quindi un simile con perimetro $42$.

Una corrispondenza coerente associa anche i vertici opposti alle basi considerate. L'altezza relativa a un lato corrisponde all'altezza relativa al lato omologo dell'altro triangolo.
:::

## Rapporti fra aree

:::teorema{#aree titolo="Il quadrato del rapporto"}
Il rapporto fra le aree di figure simili è $k^2$. Per i triangoli, base e altezza sono entrambe moltiplicate per $k$, quindi
$$
A_2=\frac{(kb)(kh)}2=k^2A_1.
$$
Lo stesso risultato vale per poligoni simili mediante scomposizione in triangoli.

Con rapporto di lunghezze $3$, un'area di $8$ diventa $72$. Se il rapporto delle aree è $25$, il rapporto delle lunghezze è $5$. Si prende la radice positiva del rapporto delle aree.

::grafico{assi=0 uguale=1 poligoni="0,0 2,0 2,1 0,1;4,0 8,0 8,2 4,2" xmin=-1 xmax=9 ymin=-1 ymax=3 titolo="Rapporto di lunghezze $2$: le aree dei rettangoli sono $2$ e $8$"}
:::

## Scale e applicazioni

:::osservazione{#scale titolo="Lunghezze sulla carta e reali"}
Una scala $1:N$ significa che una lunghezza sulla rappresentazione è $\dfrac1N$ della lunghezza reale, espressa nella stessa unità. Quindi $l_{\mathrm{reale}}=Nl_{\mathrm{carta}}$.

In scala $1:200$, un tratto di $3\,\mathrm{cm}$ rappresenta $600\,\mathrm{cm}=6\,\mathrm m$. Le aree sono invece in rapporto $1:N^2$, perciò una conversione di area richiede il quadrato del fattore.

La similitudine permette anche misure indirette. Con raggi solari paralleli e terreno orizzontale, l'altezza di un oggetto e la sua ombra formano triangoli simili a quelli di un oggetto di altezza nota.
:::
