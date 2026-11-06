---
titolo: "Equivalenza delle figure piane e aree"
sommario: "Figure equivalenti, scomposizioni, aree di triangoli e quadrilateri, poligoni regolari, problemi inversi e figure composte."
---

## Misurare una superficie

:::definizione{#equivalenza titolo="Equivalenza e congruenza"}
Due figure sono **equivalenti** quando hanno la stessa area. Due figure congruenti hanno la stessa forma e dimensione e sono anche equivalenti. Figure equivalenti possono avere perimetri diversi.

Un rettangolo di lati $2$ e $6$ ha area $12$ e perimetro $16$; uno di lati $3$ e $4$ ha la stessa area ma perimetro $14$. L'uguaglianza delle aree non determina quindi quella dei contorni.

L'area si esprime in unità quadrate. Poiché $1\,\mathrm m=100\,\mathrm{cm}$, si ha $1\,\mathrm m^2=10000\,\mathrm{cm}^2$. La conversione va applicata al quadrato del fattore di lunghezza.
:::

## Scomporre e ricomporre

:::teorema{#scomposizioni titolo="Additività dell’area"}
Se una figura è suddivisa in parti con interni disgiunti, la sua area è la somma delle aree delle parti. Per una regione ottenuta eliminando una figura interna si sottrae invece l'area eliminata.

Un rettangolo $8$ per $5$ con un foro rettangolare $3$ per $2$ ha area $40-6=34$. Il perimetro della regione richiede un altro conto, perché include anche il bordo del foro.

Ricollocare pezzi congruenti senza sovrapposizioni conserva l'area totale. Questa proprietà giustifica il passaggio da un parallelogramma a un rettangolo e molte formule delle figure piane.
:::

## Rettangoli e parallelogrammi

:::teorema{#parallelogramma titolo="Base per altezza"}
Un rettangolo di base $b$ e altezza $h$ ha area $A=bh$. Un parallelogramma con la stessa base e altezza è equivalente al rettangolo e ha la stessa formula.

Nel parallelogramma si può tagliare un triangolo da un lato e ricollocarlo sull'altro, formando un rettangolo. L'altezza è la distanza perpendicolare fra le rette dei lati paralleli.

Se base $7$, lato obliquo $5$ e altezza $4$, l'area è $28$. Il prodotto $7\cdot5$ userebbe un lato che non è perpendicolare alla base.

::grafico{assi=0 uguale=1 poligoni="0,0 6,0 8,3 2,3" linee="2,0 2,3" punti="0,0,pieno,A;6,0,pieno,B;8,3,pieno,C;2,3,pieno,D" xmin=-1 xmax=9 ymin=-1 ymax=4 titolo="L’altezza è perpendicolare alla base del parallelogramma"}
:::

## Triangoli

:::teorema{#triangolo titolo="Metà del parallelogramma"}
Un triangolo di base $b$ e altezza relativa $h$ ha area $A=\dfrac{bh}{2}$. Due copie congruenti del triangolo formano un parallelogramma con la stessa base e altezza.

Triangoli con la stessa base e altezze congruenti sono equivalenti, anche se i vertici opposti occupano posizioni diverse su una retta parallela alla base. Per base $10$ e altezza $3$ l'area è sempre $15$.

In un triangolo ottusangolo il piede di un'altezza può cadere sul prolungamento di un lato. La formula usa ancora la distanza perpendicolare dalla retta della base.

::grafico{assi=0 uguale=1 poligoni="0,0 6,0 2,4" linee="2,0 2,4" punti="0,0,pieno,A;6,0,pieno,B;2,4,pieno,C;2,0,pieno,H" xmin=-1 xmax=7 ymin=-1 ymax=5 titolo="Base $6$ e altezza $4$ danno area $12$"}
:::

## Trapezi

:::teorema{#trapezio titolo="Somma delle basi"}
Per un trapezio con basi $B$ e $b$ e altezza $h$,
$$
A=\frac{(B+b)h}{2}.
$$
Tracciando una diagonale si ottengono due triangoli con basi $B$ e $b$ e la stessa altezza $h$. Sommando le loro aree si dimostra la formula.

Per basi $9$ e $5$ e altezza $4$, l'area è $28$. La formula inversa è $h=\dfrac{2A}{B+b}$. Le basi sono lunghezze positive, quindi la divisione è ammessa.

::grafico{assi=0 uguale=1 poligoni="0,0 9,0 7,4 2,4" linee="2,0 2,4" xmin=-1 xmax=10 ymin=-1 ymax=5 titolo="Un trapezio di basi $9$ e $5$ e altezza $4$ ha area $28$"}
:::

## Rombi e diagonali

:::teorema{#rombo titolo="Diagonali perpendicolari"}
Il rombo ha diagonali perpendicolari che si dividono a metà. Se misurano $D$ e $d$, i quattro triangoli rettangoli hanno cateti $\dfrac D2$ e $\dfrac d2$. La somma delle aree è
$$
A=4\cdot\frac12\frac D2\frac d2=\frac{Dd}{2}.
$$
Per diagonali $12$ e $16$ l'area è $96$. Anche la formula $A=bh$ resta valida se sono noti un lato e la relativa altezza.

La formula con il semiprodotto delle diagonali vale per quadrilateri con diagonali perpendicolari; non si applica automaticamente a ogni quadrilatero.

::grafico{assi=0 uguale=1 poligoni="-8,0 0,6 8,0 0,-6" linee="-8,0 8,0;0,-6 0,6" xmin=-9 xmax=9 ymin=-7 ymax=7 titolo="Le diagonali $16$ e $12$ suddividono il rombo in quattro triangoli rettangoli"}
:::

## Poligoni regolari

:::teorema{#regolari titolo="Perimetro e apotema"}
Un poligono regolare si divide congiungendo il centro ai vertici in triangoli tutti con altezza uguale all'apotema $a$. Sommando le aree e indicando con $P$ il perimetro,
$$
A=\frac{Pa}{2}.
$$
Un pentagono regolare con perimetro $30$ e apotema $4$ ha area $60$. Nel quadrato di lato $l$ l'apotema è $\dfrac l2$; la formula restituisce $l^2$.

La stessa espressione vale per un poligono convesso circoscritto a una circonferenza, perché la distanza del centro da tutti i lati è il raggio della circonferenza inscritta.
:::

## Problemi inversi e figure composte

:::osservazione{#problemi titolo="Incognite e unità"}
Una formula di area può essere risolta rispetto alla misura mancante. Da $A=\dfrac{bh}{2}$ segue $h=\dfrac{2A}b$. Se $A=42\,\mathrm{cm}^2$ e $b=12\,\mathrm{cm}$, si ottiene $h=7\,\mathrm{cm}$.

Quando due lunghezze dipendono dalla stessa incognita, l'area può condurre a un'equazione quadratica. Per un rettangolo di lati $x$ e $x+3$ e area $40$ si risolve $x(x+3)=40$. La soluzione positiva è $5$.

In una figura composta si indicano prima le parti da sommare o sottrarre. Le misure lineari vanno portate alla stessa unità prima di calcolare le aree.
:::
