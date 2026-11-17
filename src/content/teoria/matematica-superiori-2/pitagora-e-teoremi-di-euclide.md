---
titolo: "Pitagora e teoremi di Euclide"
sommario: "Triangoli rettangoli, teorema di Pitagora e inverso, triangoli notevoli, proiezioni dei cateti e teoremi di Euclide."
---

## Il triangolo rettangolo

:::definizione{#triangolo titolo="Cateti e ipotenusa"}
Un triangolo **rettangolo** ha un angolo di $90^\circ$. I lati che formano quell’angolo sono i **cateti** $a$ e $b$. Il lato opposto è l’**ipotenusa** $c$. Poiché all’angolo maggiore si oppone il lato più lungo, $c$ è maggiore di ciascun cateto. Questa relazione permette di riconoscere quale lunghezza isolare nel teorema di Pitagora.
:::

:::esempio{titolo="Il triangolo di lati $3$, $4$ e $5$"}
Se l’angolo retto è in $A$, i cateti sono $AB$ e $AC$. L’ipotenusa è quindi il lato $BC$, che dalla figura misura $5$.

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 0,3" linee="0.35,0 0.35,0.35 0,0.35" punti="0,0;4,0;0,3" etichette="-0.25,-0.27,A;4.25,-0.19,B;-0.22,3.17,C;2,-0.28,4;-0.35,1.4,3;2.2,1.9,5" xmin=-1 xmax=5 ymin=-1 ymax=4 titolo="L’ipotenusa $BC$ è opposta all’angolo retto in $A$"}

:::

## Il teorema di Pitagora

::::teorema{#pitagora titolo="Teorema di Pitagora"}
In un triangolo rettangolo con cateti $a$, $b$ e ipotenusa $c$ vale
$$
c^2=a^2+b^2.
$$
La relazione determina un lato quando sono noti gli altri due. Per esempio, se i cateti misurano $6$ e $8$, si ottiene $c=\sqrt{36+64}=10$. Se invece sono noti $c$ e $a$, si isola $b^2=c^2-a^2$ e se ne estrae la radice quadrata.

:::dimostrazione
Si dispongono quattro copie del triangolo lungo i lati di un quadrato di lato $a+b$. Ogni copia occupa un angolo del quadrato esterno e lascia la sua ipotenusa sul bordo del quadrilatero centrale. Quel quadrilatero ha quattro lati uguali a $c$. In ogni suo vertice i due angoli acuti dei triangoli adiacenti sommano $90^\circ$, quindi l’angolo rimanente vale $90^\circ$. La regione centrale è perciò un quadrato.

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 0,3;4,0 7,0 7,4;7,4 7,7 3,7;3,7 0,7 0,3" linee="4,0 7,4 3,7 0,3 4,0" xmin=-0.5 xmax=7.5 ymin=-0.5 ymax=7.5 titolo="Quattro triangoli identici e il quadrato centrale"}

Sottraendo dall’area del quadrato esterno le aree dei quattro triangoli si ottiene
$$
\begin{aligned}
c^2&=(a+b)^2-4\cdot\frac{ab}{2}\\[5pt]
   &=a^2+2ab+b^2-2ab\\[5pt]
   &=a^2+b^2.
\end{aligned}
$$
:::
::::

## Il teorema inverso

:::teorema{#inverso titolo="Teorema inverso di Pitagora"}
Se tre lunghezze positive formano un triangolo e il quadrato del lato maggiore è la somma dei quadrati degli altri due, il triangolo è rettangolo. L’angolo retto è opposto al lato maggiore. Per $5$, $12$ e $13$ vale $5+12>13$, quindi le tre lunghezze formano un triangolo. Inoltre $25+144=169$, perciò l’angolo opposto a $13$ è retto.
:::

:::attenzione
Le lunghezze $4$, $5$ e $6$ formano un triangolo, poiché $4+5>6$. Tuttavia $4^2+5^2=41$ è diverso da $6^2=36$, quindi quel triangolo non è rettangolo.
:::

:::osservazione
Una **terna pitagorica** è una terna di interi positivi che soddisfa il teorema. Moltiplicando tutti i lati per uno stesso intero positivo i quadrati si moltiplicano per lo stesso fattore. Per esempio, da $(3,4,5)$ si ottiene $(9,12,15)$.
:::

## Triangoli notevoli

:::teorema{#notevoli titolo="Quadrato ed equilatero"}
La diagonale di un quadrato di lato $l$ è l’ipotenusa del triangolo rettangolo i cui cateti misurano entrambi $l$. Per Pitagora misura $l\sqrt{2}$.

L’altezza di un triangolo equilatero di lato $l$ divide la base in due segmenti uguali. Il triangolo rettangolo ottenuto ha ipotenusa $l$ e un cateto lungo $\dfrac l2$, quindi
$$
\begin{aligned}
h&=\sqrt{l^2-\left(\frac l2\right)^2}\\[5pt]
 &=\frac{\sqrt3}{2}l.
\end{aligned}
$$
L’area è $\dfrac{lh}{2}=\dfrac{\sqrt3}{4}l^2$. Con $l=6$ si trovano $h=3\sqrt3$ e area $9\sqrt3$.

L’altezza divide in due anche l’angolo al vertice, quindi il triangolo rettangolo ha angoli di $30^\circ$ e $60^\circ$. Il cateto opposto all’angolo di $30^\circ$ è metà dell’ipotenusa.

::grafico{assi=0 uguale=1 poligoni="0,0 6,0 3,5.196152" linee="3,0 3,5.196152;3,0.25 3.25,0.25 3.25,0" etichette="1.5,-0.25,3;4.5,-0.25,3;3.65,2.4,h" xmin=-0.6 xmax=6.6 ymin=-0.8 ymax=6 titolo="L’altezza divide la base in due segmenti di misura $3$"}

:::

## Proiezioni sull’ipotenusa

:::definizione{#proiezioni titolo="Altezza e proiezioni dei cateti"}
Sia $ABC$ rettangolo in $A$ e sia $H$ il piede dell’altezza su $BC$. Si indica con $c$ la lunghezza dell’ipotenusa $BC$, con $p$ la lunghezza di $BH$, con $q$ quella di $HC$ e con $h$ quella di $AH$. Il punto $H$ è interno a $BC$, quindi $p,q>0$ e $p+q=c$.

Per individuare la proiezione del cateto $AB$ si osserva che $B$ appartiene già all’ipotenusa e che $A$ si proietta in $H$. La proiezione è dunque $BH$. Per il cateto $AC$ la proiezione è invece $HC$.

::grafico{assi=0 uguale=1 linee="0,0 5,0 1.8,2.4 0,0;1.8,2.4 1.8,0;1.8,0.25 2.05,0.25 2.05,0" punti="0,0,pieno,B;5,0,pieno,C;1.8,2.4,pieno,A;1.8,0" etichette="0.9,-0.28,p;3.4,-0.28,q;2.09,1.12,h;1.8,-0.34,H" xmin=-0.6 xmax=5.7 ymin=-0.8 ymax=3.25 titolo="Le proiezioni $BH$ e $HC$ ricompongono l’ipotenusa $BC$"}

L’altezza divide il triangolo in due triangoli rettangoli. Ognuno ha un angolo acuto in comune con $ABC$, quindi entrambi sono simili al triangolo iniziale. Le proporzioni fra i lati corrispondenti giustificano i teoremi di Euclide.
:::

## Il primo teorema di Euclide

:::teorema{#euclide-primo titolo="Cateto, ipotenusa e proiezione"}
In un triangolo rettangolo il quadrato di un cateto è uguale al prodotto dell’ipotenusa per la proiezione di quel cateto sull’ipotenusa. Con le notazioni della figura si ha $AB^2=cp$ e $AC^2=cq$.

I triangoli $ABC$ e $HBA$ sono simili. Il rapporto fra le due ipotenuse, $BC$ e $AB$, è quindi uguale al rapporto fra i due cateti adiacenti all’angolo in $B$, cioè $AB$ e $BH$. Dalla proporzione $\dfrac{BC}{AB}=\dfrac{AB}{BH}$ si ricava $AB^2=BC\cdot BH$. Applicando lo stesso ragionamento all’angolo in $C$ si ottiene $AC^2=BC\cdot HC$.
:::

:::esempio{titolo="Calcolo dei cateti dalle proiezioni"}
Se $c=25$ e $p=9$, segue $q=25-9=16$. Il primo teorema di Euclide dà
$$
AB=\sqrt{25\cdot9}=15,
\qquad AC=\sqrt{25\cdot16}=20.
$$
La somma $15^2+20^2=625$ coincide con $25^2$, come prevede il teorema di Pitagora.
:::

## Il secondo teorema di Euclide

:::teorema{#euclide-secondo titolo="Altezza e proiezioni"}
In un triangolo rettangolo il quadrato dell’altezza relativa all’ipotenusa è il prodotto delle proiezioni dei cateti, quindi $h^2=pq$.

Nella similitudine fra $HBA$ e $HAC$, il cateto $BH$ del primo triangolo corrisponde ad $AH$ del secondo, mentre $AH$ del primo corrisponde a $HC$ del secondo. Perciò $\dfrac{BH}{AH}=\dfrac{AH}{HC}$. Il prodotto dei medi è uguale a quello degli estremi, da cui $AH^2=BH\cdot HC$.

Con $p=4$ e $q=9$ si ottiene $h=\sqrt{36}=6$. Il primo teorema di Euclide, applicato con $c=13$, dà invece $AB=\sqrt{52}$ e $AC=\sqrt{117}$.
:::

## Problemi con più passaggi

:::osservazione{#problemi titolo="Scelta della base per l’area"}
L’area $\mathcal{A}$ del triangolo rettangolo si può calcolare scegliendo come base un cateto oppure l’ipotenusa. Nel primo caso l’altro cateto è l’altezza. Nel secondo caso l’altezza è $h$, relativa all’ipotenusa.
$$
\mathcal A=\frac{AB\cdot AC}{2}=\frac{ch}{2}.
$$
Segue $h=\dfrac{AB\cdot AC}{c}$. Per cateti $3$ e $4$ e ipotenusa $5$ si ottiene $h=\dfrac{12}{5}$.
:::

:::esempio{titolo="L’altezza di un isoscele"}
I lati uguali misurano $5$ e la base misura $6$. L’altezza relativa alla base la divide in due segmenti da $3$, perciò si applica Pitagora a uno dei due triangoli rettangoli ottenuti. Si ricavano l’altezza $\sqrt{5^2-3^2}=4$ e l’area $\dfrac{6\cdot4}{2}=12$.
:::
