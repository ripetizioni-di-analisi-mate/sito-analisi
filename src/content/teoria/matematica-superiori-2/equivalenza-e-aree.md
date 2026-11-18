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

:::esempio{titolo="Stessa area, contorni diversi"}
Nel disegno i rettangoli coprono entrambi dodici quadrati unitari. Il primo ha lati di lunghezza $6$ e $2$, il secondo di lunghezza $4$ e $3$. Gli stessi dodici quadrati possono essere riallineati in due modi. Il conteggio dei lati lungo il contorno dà invece rispettivamente $16$ e $14$. Se due rettangoli fossero congruenti, manterrebbero anche i lati corrispondenti, dunque questo è un esempio di equivalenza senza congruenza.

::grafico{assi=0 uguale=1 xmin=-0.7 xmax=12.8 ymin=-0.7 ymax=3.8 linee="0,0 6,0 6,2 0,2 0,0;8,0 12,0 12,3 8,3 8,0;0,1 6,1;1,0 1,2;2,0 2,2;3,0 3,2;4,0 4,2;5,0 5,2;8,1 12,1;8,2 12,2;9,0 9,3;10,0 10,3;11,0 11,3" etichette="3,-0.34,6;-0.25,1.1,2;10,-0.34,4;7.73,1.59,3" titolo="Dodici quadrati unitari disposti in due rettangoli"}
:::

:::attenzione{titolo="Stesso perimetro, aree diverse"}
Viceversa, i rettangoli $4\times8$ e $5\times7$ hanno entrambi perimetro $24$, ma aree $32$ e $35$. A parità di somma $s$ dei due lati, il quadrato di lato $s/2$ ha area almeno pari a quella di un rettangolo di lati $a,b$. Infatti $(s/2)^2-ab=(a-b)^2/4$, che è sempre non negativo e vale zero solo quando i due lati coincidono.
:::

## Scomporre e ricomporre

:::teorema{#scomposizioni titolo="Additività dell’area"}
Se una figura è suddivisa in parti con interni disgiunti, la sua area è la somma delle aree delle parti. Per una regione ottenuta eliminando una figura interna si sottrae invece l'area eliminata.

Un rettangolo $8$ per $5$ con un foro rettangolare $3$ per $2$ ha area $40-6=34$. Il perimetro della regione richiede un altro conto, perché include anche il bordo del foro.

Ricollocare pezzi congruenti senza sovrapposizioni conserva l'area totale. Questa proprietà giustifica il passaggio da un parallelogramma a un rettangolo e molte formule delle figure piane.
:::

:::esempio{titolo="Una forma a L, due scomposizioni"}
Nella figura a L considera il rettangolo intero $10\times7$. Manca il rettangolo di lati $4$ e $3$, dunque l'area è $70-12=58$. Per scomporre senza sottrarre, traccia il taglio verticale che divide un rettangolo $6\times7$ da uno $4\times4$. I due interni sono disgiunti, quindi $42+16=58$. Il taglio compare nel calcolo delle parti ma rimane interno alla regione e non fa parte del contorno esterno.

::grafico{assi=0 uguale=1 xmin=-0.8 xmax=10.9 ymin=-0.8 ymax=7.9 poligoni="0,0 10,0 10,4 6,4 6,7 0,7" linee="0,0 10,0 10,4 6,4 6,7 0,7 0,0" segmenti="6,0,6,4;6,7,10,7;10,4,10,7" etichette="5,-0.35,10;-0.28,3.5,7;8,7.35,4;10.26,5.5,3" titolo="Si possono sommare i due pezzi o sottrarre il rettangolo mancante"}
:::

:::osservazione{titolo="Il foro e il ritaglio tolgono la stessa area"}
Per un rettangolo $8\times5$, togliere un rettangolo $3\times2$ lascia area $34$ sia quando è completamente interno sia quando occupa un angolo. Nel primo caso il bordo del foro si aggiunge al contorno esterno, per un totale $26+10=36$. Nel secondo si perdono due segmenti esterni di lunghezza $3$ e $2$ e se ne formano due interni al ritaglio con le stesse lunghezze. Il nuovo contorno misura ancora $26$.
:::

:::esempio{titolo="Cosa fare quando le parti si sovrappongono"}
Due rettangoli di lati $7,3$ e $4,5$ si intersecano in un rettangolo $2\times3$. La somma $21+20$ conta due volte l'area comune. Sottraendo una copia dei sei quadrati comuni restano $35$ unità quadrate coperte da almeno un rettangolo. Se si volesse contare solo la parte coperta da uno dei due, si sottrarrebbe invece l'intersezione due volte.

::grafico{assi=0 uguale=1 xmin=-0.7 xmax=9.8 ymin=-0.7 ymax=5.8 linee="0,0 7,0 7,3 0,3 0,0;5,0 9,0 9,5 5,5 5,0" poligoni="5,0 7,0 7,3 5,3" etichette="3.5,-0.33,7;-0.26,1.5,3;7,5.33,4;9.28,2.5,5;6,1.5,6" titolo="La zona evidenziata appartiene a entrambi i rettangoli"}
:::

:::osservazione{titolo="Un bordo comune scompare dal contorno"}
Due rettangoli accostati lungo un segmento di lunghezza $s$, senza sovrapposizione degli interni, conservano la somma delle aree. Il segmento di giunzione è contato in entrambi i perimetri iniziali e, a parte gli estremi, diventa interno all'unione. Il nuovo perimetro è quindi $P_1+P_2-2s$. La sottrazione riguarda quel bordo interno e lascia inalterato il calcolo dell'area.
:::

## Rettangoli e parallelogrammi

:::teorema{#parallelogramma titolo="Base per altezza"}
Un rettangolo di base $b$ e altezza $h$ ha area $A=bh$. Un parallelogramma con la stessa base e altezza è equivalente al rettangolo e ha la stessa formula.

Nel parallelogramma si può tagliare un triangolo da un lato e ricollocarlo sull'altro, formando un rettangolo. L'altezza è la distanza perpendicolare fra le rette dei lati paralleli.

Se base $7$, lato obliquo $5$ e altezza $4$, l'area è $28$. Il prodotto $7\cdot5$ userebbe un lato che non è perpendicolare alla base.

::grafico{assi=0 uguale=1 poligoni="0,0 6,0 8,3 2,3" linee="2,0 2,3" punti="0,0,pieno,A;6,0,pieno,B;8,3,pieno,C;2,3,pieno,D" xmin=-1 xmax=9 ymin=-1 ymax=4 titolo="L’altezza è perpendicolare alla base del parallelogramma"}
:::

:::dimostrazione{titolo="Traslare il triangolo del parallelogramma"}
Nella figura il taglio verticale da $D$ alla base isola il triangolo di base $2$ e altezza $3$. Traslandolo orizzontalmente di una base intera, i suoi lati combaciano con la parte vuota a destra. Il rettangolo ricomposto ha base $6$ e altezza $3$, come il parallelogramma. Il disegno a destra mostra il pezzo trasferito.

::grafico{assi=0 uguale=1 xmin=-0.7 xmax=18 ymin=-0.65 ymax=3.7 linee="0,0 6,0 8,3 2,3 0,0;2,0 2,3;11,0 17,0 17,3 11,3 11,0;15,0 17,3" poligoni="0,0 2,0 2,3;15,0 17,0 17,3" etichette="4,-0.34,6;14,-0.34,6;17.38,1.48,3" titolo="Il triangolo a sinistra riempie lo spazio a destra senza sovrapporsi"}

Quando la proiezione di $D$ cade oltre la base, lo stesso taglio singolo può non produrre il rettangolo. Si può allora racchiudere la figura in un rettangolo di base $b+u$, dove $u$ è lo spostamento orizzontale del lato superiore. I due triangoli esterni hanno cateti $u$ e $h$. Togliendoli resta $(b+u)h-2(uh/2)=bh$.
:::

## Triangoli

:::teorema{#triangolo titolo="Metà del parallelogramma"}
Un triangolo di base $b$ e altezza relativa $h$ ha area $A=\dfrac{bh}{2}$. Due copie congruenti del triangolo formano un parallelogramma con la stessa base e altezza.

Triangoli con la stessa base e altezze congruenti sono equivalenti, anche se i vertici opposti occupano posizioni diverse su una retta parallela alla base. Per base $10$ e altezza $3$ l'area è sempre $15$.

In un triangolo ottusangolo il piede di un'altezza può cadere sul prolungamento di un lato. La formula usa ancora la distanza perpendicolare dalla retta della base.

::grafico{assi=0 uguale=1 poligoni="0,0 6,0 2,4" linee="2,0 2,4" punti="0,0,pieno,A;6,0,pieno,B;2,4,pieno,C;2,0,pieno,H" xmin=-1 xmax=7 ymin=-1 ymax=5 titolo="Base $6$ e altezza $4$ danno area $12$"}
:::

:::esempio{titolo="Altezza esterna in un triangolo ottusangolo"}

Il triangolo $ABC$ ha base $AB=6\,\mathrm{cm}$. Il piede $H$ dell’altezza è sul prolungamento di $AB$ oltre $A$, con $HA=2\,\mathrm{cm}$ e $CH=3\,\mathrm{cm}$. Il triangolo $HBC$ ha base $8$ e quello più piccolo $HAC$ ha base $2$. Entrambi hanno altezza $3$. La differenza delle loro aree è l’area di $ABC$.

$$
\begin{aligned}
\mathcal A_{ABC}&=\frac{8\cdot3}{2}-\frac{2\cdot3}{2} \\[5pt]
&=\frac{6\cdot3}{2}=9\,\mathrm{cm}^2
\end{aligned}
$$

::grafico{assi=0 uguale=1 poligoni="0,0 6,0 -2,3" linee="-2,3 -2,0 0,0;-2,0.3 -1.7,0.3 -1.7,0" punti="0,0,pieno,A;6,0,pieno,B;-2,3,pieno,C;-2,0" etichette="-1,-0.27,2;3,-0.27,6;-2.35,1.35,3;-2.15,-0.37,H" xmin=-3 xmax=7 ymin=-1 ymax=4 titolo="L’altezza $CH$ cade sul prolungamento della base"}
:::

:::dimostrazione{titolo="Raddoppiare il triangolo con una rotazione"}
Prendi una seconda copia di $ABC$ e ruotala di $180^\circ$ attorno al punto medio di $BC$. I due estremi $B,C$ si scambiano e $A$ diventa un punto $D$ dall'altra parte di $BC$. Le coppie $AB,CD$ e $AC,BD$ risultano parallele perché ciascuna è legata dalla rotazione. L'unione è quindi un parallelogramma di base $AB$ e altezza uguale a quella del triangolo. Le copie sono congruenti, quindi ciascuna ha metà dell'area.
:::

:::osservazione
Se $M$ è il punto medio di $AB$, i triangoli $AMC$ e $MBC$ hanno basi uguali e condividono l'altezza da $C$ alla retta $AB$. Hanno perciò la stessa area anche quando i due lati $AC,BC$ sono diversi. Più in generale, dividere la base in una data proporzione divide l'area nella stessa proporzione, perché il fattore altezza è comune.
:::

:::esempio{titolo="Ricavare un'altezza esterna da un lato obliquo"}
Se il piede $H$ cade oltre $B$, si può usare il triangolo rettangolo $BHC$. Con $AB=10$, $BH=4$ e $BC=5$, Pitagora dà $CH=\sqrt{5^2-4^2}=3$. L'area di $ABC$ è $10\cdot3/2=15$. La distanza $BH$ è orizzontale, e serve per ricavare la perpendicolare. Un controllo sottrae $4\cdot3/2$ da $(10+4)\cdot3/2$ e ottiene ancora $15$.
:::

:::esempio{titolo="Cambiare la base richiede cambiare l'altezza"}
Se $AB=12$ e l'altezza da $C$ vale $5$, il triangolo ha area $30$. Usando come base $AC=10$, si ritrova la stessa area con altezza $2\cdot30/10=6$. Il prodotto base per altezza è invariato e, se la base si accorcia, la distanza corrispondente aumenta. Perciò ogni altezza va associata alla retta del proprio lato, anche se entrambe partono da vertici dello stesso triangolo.
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

:::esempio{titolo="Ricavare una base e poi controllarne il ruolo"}
Un trapezio di area $52\,\mathrm{cm}^2$ e altezza $4\,\mathrm{cm}$ ha base minore $10\,\mathrm{cm}$. La somma delle basi è $2A/h=26\,\mathrm{cm}$ e l'altra base misura $16\,\mathrm{cm}$. Sostituendo si ritrova l'area assegnata, e $16>10$ conferma l'ordine delle basi. Se il calcolo desse una misura positiva più piccola di $10$, sarebbe incompatibile con il dato «base minore», anche se il prodotto con l'altezza fosse corretto.
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

:::dimostrazione{titolo="Perché basta la perpendicolarità"}
In un quadrilatero convesso con diagonali perpendicolari $AC,BD$, usa $AC$ come base comune dei triangoli $ABC$ e $ACD$. I piedi delle altezze coincidono nel punto $O$ d'incrocio delle diagonali. Le altezze valgono $BO$ e $DO$, quindi il totale è $AC(BO+DO)/2=AC\cdot BD/2$. Non occorre che $O$ dimezzi le diagonali.

::grafico{assi=0 uguale=1 xmin=-4.8 xmax=2.8 ymin=-1.7 ymax=3.8 poligoni="-4,0 0,3 2,0 0,-1" linee="-4,0 0,3 2,0 0,-1 -4,0;0,0.22 0.22,0.22 0.22,0" segmenti="-4,0,2,0;0,-1,0,3" etichette="-4.28,0.28,A;0,3.27,B;2.29,0.27,C;0,-1.3,D;0.34,-0.34,O" titolo="Le diagonali danno l'area anche se O non è un punto medio"}
:::

:::attenzione{titolo="Due diagonali congruenti possono essere oblique"}
Un rettangolo $4\times2$ ha diagonali entrambe lunghe $\sqrt{20}$, ma la loro metà del prodotto è $10$, mentre l'area vale $8$. Le diagonali non sono perpendicolari. La congruenza delle diagonali da sola non fornisce le altezze necessarie per il calcolo precedente.
:::

## Poligoni regolari

:::teorema{#regolari titolo="Perimetro e apotema"}
Un poligono regolare si divide congiungendo il centro ai vertici in triangoli tutti con altezza uguale all'apotema $a$. Sommando le aree e indicando con $P$ il perimetro,
$$
A=\frac{Pa}{2}.
$$
Un esagono regolare di lato $6$ ha perimetro $36$ e apotema $3\sqrt3$, cioè l’altezza di un triangolo equilatero di lato $6$. La sua area è $54\sqrt3$. Nel quadrato di lato $l$ l'apotema è $\dfrac l2$; la formula restituisce $l^2$.

La stessa espressione vale per un poligono convesso circoscritto a una circonferenza, perché la distanza del centro da tutti i lati è il raggio della circonferenza inscritta.
:::

:::esempio{titolo="Calcolo dell’apotema da una costruzione"}

Congiungendo il centro $O$ ai vertici di un esagono regolare di lato $4$ si ottengono sei triangoli equilateri. L’apotema è l’altezza di uno di questi triangoli. In quello di vertici $O$, $A$, $B$, il piede $H$ dell’altezza divide $AB$ a metà. Nel triangolo rettangolo $OHA$ il cateto $AH$ vale $2$ e l’ipotenusa $OA$ vale $4$.

$$
\begin{aligned}
a&=\sqrt{4^2-2^2}=2\sqrt3 \\[5pt]
\mathcal A&=\frac{(6\cdot4)\,2\sqrt3}{2}=24\sqrt3
\end{aligned}
$$

::grafico{assi=0 uguale=1 poligoni="4,0 2,3.464102 -2,3.464102 -4,0 -2,-3.464102 2,-3.464102" linee="-4,0 4,0;2,3.464102 -2,-3.464102;-2,3.464102 2,-3.464102;0,0 3,1.732051" punti="0,0;4,0,pieno,A;2,3.464102,pieno,B;3,1.732051,pieno,H" etichette="-0.55,0.3,O" xmin=-5 xmax=5 ymin=-4.3 ymax=4.3 titolo="L’apotema $OH$ è l’altezza del triangolo equilatero $OAB$"}
:::

:::dimostrazione{titolo="Quando una sola altezza dà l'intera area"}
Le basi dei triangoli con vertice nel centro sono i lati del poligono. Se l'altezza è la stessa $a$ in ciascun triangolo, la somma è $a(l_1+\dots+l_n)/2=aP/2$. La regolarità è sufficiente perché tutti i lati hanno lo stesso apotema. Anche la tangenza a una stessa circonferenza fornisce un'altezza comune, pur con lati diversi. In un generico poligono convesso, le distanze da un punto interno ai vari lati possono differire e vanno usate separatamente.
:::

## Problemi inversi e figure composte

:::osservazione{#problemi titolo="Incognite e unità"}
Una formula di area può essere risolta rispetto alla misura mancante. Da $A=\dfrac{bh}{2}$ segue $h=\dfrac{2A}b$. Se $A=42\,\mathrm{cm}^2$ e $b=12\,\mathrm{cm}$, si ottiene $h=7\,\mathrm{cm}$.

Quando due lunghezze dipendono dalla stessa incognita, l'area può condurre a un'equazione quadratica. Per un rettangolo di lati $x$ e $x+3$ e area $40$ si risolve $x(x+3)=40$. La soluzione positiva è $5$.

In una figura composta si indicano prima le parti da sommare o sottrarre. Le misure lineari vanno portate alla stessa unità prima di calcolare le aree.
:::

:::esempio{titolo="Dalla soluzione algebrica alla misura"}
Per il rettangolo di area $40$, l'equazione $x(x+3)=40$ diventa $(x-5)(x+8)=0$. Le soluzioni algebriche sono $5$ e $-8$. Solo la prima rappresenta una lunghezza, quindi i lati sono $5$ e $8$. Il loro prodotto verifica l'area e la loro differenza verifica il dato iniziale. La stessa impostazione permette di scartare un valore che renda nulla o negativa una delle dimensioni.
:::

:::esempio{titolo="Portare le lunghezze alla stessa unità"}
Una lastra rettangolare misura $120\,\mathrm{cm}$ per $0{,}8\,\mathrm m$. Convertendo in metri si ha $1{,}2\cdot0{,}8=0{,}96\,\mathrm{m}^2$. Convertendo invece entrambe le lunghezze in centimetri si ha $120\cdot80=9600\,\mathrm{cm}^2$. Le due scritture coincidono dopo avere diviso per $100^2$. Usare insieme i numeri $120$ e $0{,}8$ senza dichiarare le unità non restituisce direttamente un valore in metri quadrati o in centimetri quadrati.
:::

| Dati disponibili | Calcolo | Condizione da verificare |
|---|---|---|
| Base e area del triangolo | $h=2A/b$ | Altezza perpendicolare alla retta della base |
| Area e diagonale del rombo | $d=2A/D$ | Diagonali perpendicolari |
| Area, altezza e una base del trapezio | $B=2A/h-b$ | Base positiva e ordine delle basi |
| Area e perimetro di un poligono regolare | $a=2A/P$ | Altezza comune a tutti i triangoli |
