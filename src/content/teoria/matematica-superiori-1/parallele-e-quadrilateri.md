---
titolo: "Rette parallele e quadrilateri"
sommario: "Angoli tra parallele e trasversale; parallelogrammi, rettangoli, rombi, quadrati e trapezi. Proprietà, criteri di riconoscimento e problemi con lati e angoli."
---

## Parallele tagliate da una trasversale

:::definizione{#concetti titolo="Riconoscere la posizione degli angoli"}
Nel piano euclideo, due rette distinte sono **parallele** quando non si incontrano. Una trasversale che le interseca forma quattro angoli in ciascuno dei due punti di incontro.

Gli angoli **corrispondenti** occupano la stessa posizione nei due incroci. Gli **alterni interni** stanno tra le due rette e da parti opposte della trasversale. I **coniugati interni** stanno tra le rette e dalla stessa parte della trasversale. La posizione rispetto alle rette e alla trasversale identifica la coppia da usare.

Nella figura gli angoli indicati con $\alpha$ e $\beta$ occupano entrambi la posizione sopra la retta orizzontale e dalla stessa parte della trasversale, quindi sono corrispondenti.

::grafico{assi=0 uguale=1 xmin=-2 xmax=5 ymin=-2 ymax=4 linee="-1.5,0 4.5,0;-1.5,2 4.5,2;-1,-1 3,3" punti="0,0;2,2" etichette="0.7,0.25,α;2.7,2.25,β;-1.2,0.25,r;-1.2,2.25,s" titolo="Per $r\parallel s$, gli angoli corrispondenti $\alpha$ e $\beta$ sono congruenti"}
:::

:::esempio{titolo="La stessa trasversale, due coppie diverse"}
Chiamando $A$ e $B$ gli incroci, l'angolo acuto interno in $A$ e quello acuto interno in $B$ sono alterni interni perché stanno da parti opposte della trasversale. Per cercare invece il coniugato interno dell'angolo in $A$, in $B$ si sceglie il settore ottuso che si trova dalla sua stessa parte. Nelle due figure l'angolo in $A$ resta invariato.

::grafico{assi=0 uguale=1 legenda=0 xmin=-1.7 xmax=4.8 ymin=-0.8 ymax=3.1 linee="-1.5,0 4.5,0;-1.5,2 4.5,2;-0.7,-0.7 3,3" curve="0.62*cos(t),0.62*sin(t),0,0.7853981634;2+0.62*cos(t),2+0.62*sin(t),3.1415926536,3.9269908170" punti="0,0;2,2" etichette="-0.22,-0.29,A;2.2,2.3,B;0.96,0.45,α;1.2,1.58,α" titolo="Alterni interni: angoli uguali ai lati opposti della trasversale"}

::grafico{assi=0 uguale=1 legenda=0 xmin=-1.7 xmax=4.8 ymin=-0.8 ymax=3.1 linee="-1.5,0 4.5,0;-1.5,2 4.5,2;-0.7,-0.7 3,3" curve="0.62*cos(t),0.62*sin(t),0,0.7853981634;2+0.62*cos(t),2+0.62*sin(t),3.9269908170,6.2831853072" punti="0,0;2,2" etichette="-0.22,-0.29,A;2.2,2.3,B;0.96,0.45,α;2.41,1.14,β" titolo="Coniugati interni: due settori dalla stessa parte della trasversale"}
:::

## Proprietà e criteri di parallelismo

:::teorema{#regole titolo="Uguaglianze e somme"}
Se due rette parallele sono tagliate da una trasversale, gli angoli corrispondenti sono congruenti, gli alterni interni sono congruenti e i coniugati interni sono supplementari.

Se un angolo misura $64^\circ$, il suo corrispondente e il suo alterno interno misurano $64^\circ$. Il suo coniugato interno misura $180^\circ-64^\circ=116^\circ$. Le relazioni tra angoli opposti al vertice e adiacenti permettono di ricostruire tutti gli altri angoli.

Per il criterio inverso, l’uguaglianza di una coppia di corrispondenti, l'uguaglianza di una coppia di alterni interni oppure la somma di $180^\circ$ per una coppia di coniugati interni permette di dedurre il parallelismo. L’uguaglianza deve riguardare una delle coppie indicate.

Per esempio, se due coniugati interni misurano $(3x+10)^\circ$ e $(2x+20)^\circ$, il parallelismo richiede $5x+30=180$. Si ottiene $x=30$ e gli angoli sono $100^\circ$ e $80^\circ$.
:::

:::dimostrazione{titolo="Perché le parallele danno corrispondenti congruenti"}
Siano $A$ e $B$ gli incroci di una trasversale con due parallele. La traslazione che porta $A$ in $B$ manda la prima retta sulla parallela che passa per $B$. Manda la trasversale su sé stessa, perché il vettore di traslazione è lungo la trasversale. I due lati di un angolo in $A$ si ritrovano perciò nella stessa posizione in $B$. La traslazione conserva le misure degli angoli, da cui segue l'uguaglianza.
:::

:::dimostrazione{titolo="Dal criterio sui corrispondenti agli altri due"}
Date due rette tagliate dalla trasversale in $A$ e $B$, traccia per $B$ l'unica parallela alla retta che passa per $A$. Per la proprietà diretta, essa forma l'angolo corrispondente alla misura data in $A$. Se anche la seconda retta forma quell'angolo nello stesso settore in $B$, la semiretta che lo delimita ha la stessa direzione. Le due rette per $B$ allora coincidono.

Fissato un angolo interno in $A$, in $B$ il suo alterno interno è opposto al vertice del suo corrispondente. Ha quindi la stessa misura del corrispondente. Uguagliare i due alterni permette di applicare il criterio sui corrispondenti. Per due coniugati interni che sommano a $180^circ$, si sostituisce uno di essi con il suo adiacente supplementare. Si ottengono così due angoli della stessa misura, nella posizione dei corrispondenti.
:::

:::attenzione{titolo="L'uguaglianza da sola non identifica una coppia"}
Una coppia di opposti al vertice è congruente a ogni singolo incrocio, qualunque sia la direzione della seconda retta. Per esempio, una retta orizzontale per $A$ e una retta inclinata per $B$ incontrano entrambe una trasversale verticale. I due retti opposti in $A$ sono uguali, ma l'inclinazione in $B$ mostra che le rette non sono parallele.

::grafico{assi=0 uguale=1 xmin=-2.5 xmax=3.5 ymin=-1.2 ymax=3.7 linee="-2.3,0 3.3,0;-2.2,1.4 3.2,3.2;0,-0.9 0,3.4;0,0.24 0.24,0.24 0.24,0;-0.24,0 -0.24,-0.24 0,-0.24" punti="0,0;0,2.1333333333" etichette="-0.45,0.35,A;0.35,2.17,B" titolo="I due angoli in A sono opposti al vertice. Le due rette hanno direzioni diverse"}
:::

## Quadrilateri e classificazione

:::definizione{#metodo titolo="Dalle proprietà generali alle famiglie"}
Un quadrilatero ha quattro lati e due diagonali. In questo capitolo consideriamo quadrilateri convessi. Una diagonale divide il quadrilatero in due triangoli, quindi la somma degli angoli interni è $360^\circ$.

| Famiglia | Proprietà che la definisce |
|---|---|
| Parallelogramma | Ha entrambe le coppie di lati opposti paralleli |
| Rettangolo | È un parallelogramma con quattro angoli retti |
| Rombo | È un parallelogramma con quattro lati congruenti |
| Quadrato | È un parallelogramma con quattro angoli retti e quattro lati congruenti |
| Trapezio, con la convenzione qui adottata | Ha esattamente una coppia di lati opposti paralleli |

Un quadrato è anche un rettangolo, un rombo e un parallelogramma. Un rettangolo di lati $3$ e $2$ soddisfa la definizione di rettangolo e ha due lunghezze diverse. Alcuni testi richiedono **almeno** una coppia di lati paralleli per il trapezio, includendo i parallelogrammi. Qui si adotta la convenzione di una sola coppia.
:::

:::dimostrazione{titolo="La diagonale conta tutti gli angoli una sola volta"}
Nel quadrilatero convesso $ABCD$ il segmento $AC$ resta all'interno della figura. I triangoli $ABC$ e $ACD$ dividono gli angoli nei vertici $A$ e $C$ in due parti, mentre conservano interi gli angoli in $B$ e in $D$. Sommando i due totali si ottiene $180^circ+180^circ=360^circ$. Ad esempio, tre angoli di $80^circ$, $95^circ$ e $110^circ$ lasciano $75^circ$ per il quarto.
:::

## Proprietà del parallelogramma

:::teorema{#esempi titolo="Lati, angoli e diagonali"}
In un parallelogramma i lati opposti sono congruenti, gli angoli opposti sono congruenti e gli angoli consecutivi sono supplementari. Le diagonali si **bisecano reciprocamente**, cioè si tagliano nei rispettivi punti medi.

Se $ABCD$ è un parallelogramma e le diagonali si incontrano in $O$, allora
$$
AB=CD,\quad BC=AD,\quad AO=OC,\quad BO=OD.
$$
Le uguaglianze $AO=OC$ e $BO=OD$ mettono in relazione separatamente le metà di ciascuna diagonale. Nel parallelogramma generico le diagonali possono avere lunghezze diverse e incontrarsi con un angolo diverso da $90^\circ$.

::grafico{assi=0 uguale=1 xmin=-1 xmax=6.5 ymin=-1 ymax=3.5 linee="0,0 4,0 5.5,2.5 1.5,2.5 0,0" segmenti="0,0,5.5,2.5;4,0,1.5,2.5" punti="0,0;4,0;5.5,2.5,pieno,C;1.5,2.5,pieno,D;2.75,1.25" etichette="-0.2,-0.35,A;4.2,-0.35,B;2.75,1.7,O" titolo="Le diagonali del parallelogramma si incontrano nel punto medio di entrambe"}

Per giustificare l'uguaglianza dei lati opposti si può tracciare la diagonale $AC$. Il parallelismo dà due coppie di angoli alterni interni congruenti e il lato $AC$ è comune. I due triangoli sono congruenti per ALA e quindi hanno congruenti i lati corrispondenti.
:::

:::dimostrazione{titolo="Dai lati paralleli al punto medio comune"}
Le rette $AB$ e $CD$ sono parallele. Le diagonali $AC$ e $BD$ le attraversano e formano due coppie di alterni interni congruenti negli angoli $angle BAO,angle DCO$ e $angle ABO,angle CDO$. Il lato compreso $AB$ è congruente a $CD$, come segue dalla congruenza dei due triangoli costruiti sulla diagonale $AC$. Per ALA, $ABO$ e $CDO$ sono allora congruenti, con $A$ associato a $C$ e $B$ a $D$. Da qui seguono $AO=CO$ e $BO=DO$.
:::

:::esempio{titolo="Ricostruire i quattro angoli"}
Se $angle A=58^circ$, la trasversale $AB$ taglia $AD$ e $BC$ e forma gli angoli consecutivi $A$ e $B$. Sono coniugati interni, quindi $B=122^circ$. Applicando lo stesso ragionamento prima lungo $BC$ e poi lungo $CD$ si trovano $C=58^circ$ e $D=122^circ$. Lo stesso schema spiega perché due angoli opposti sono congruenti: sono supplementari allo stesso angolo consecutivo.
:::

## Riconoscere un parallelogramma

:::teorema{#problemi titolo="Condizioni sufficienti"}
Un quadrilatero convesso è un parallelogramma se soddisfa una delle seguenti condizioni.

- Entrambe le coppie di lati opposti sono congruenti.
- Una coppia di lati opposti è contemporaneamente parallela e congruente.
- Le diagonali si bisecano reciprocamente.

Per dimostrare l’ultimo criterio si assumono $AO=OC$ e $BO=OD$. I triangoli $AOB$ e $COD$ hanno due coppie di lati congruenti e gli angoli in $O$ opposti al vertice, dunque congruenti. Per LAL i triangoli sono congruenti. Dall'uguaglianza degli angoli corrispondenti si ricava $AB\parallel CD$. Ripetendo il ragionamento per l'altra coppia di triangoli si ottiene $AD\parallel BC$.

Se le diagonali si incontrano in $O$ con $AO=OC=4\,\mathrm{cm}$ e $BO=OD=6\,\mathrm{cm}$, il quadrilatero è quindi un parallelogramma. Questi dati da soli non impongono né angoli retti né quattro lati uguali.
:::

:::dimostrazione{titolo="Una coppia di lati opposti paralleli e congruenti"}
Supponi $ABparallel CD$ e $AB=CD$. La diagonale $AC$ è comune ai triangoli $BAC$ e $DCA$. Gli angoli $angle BAC$ e $angle DCA$ sono alterni interni e quindi congruenti. Per LAL i due triangoli sono congruenti. Ne segue che $angle BCA=angle DAC$, che sono alterni interni per le rette $BC$ e $AD$ tagliate da $AC$. Il criterio inverso dà anche $BCparallel AD$.
:::

:::osservazione
Per il criterio con entrambe le coppie di lati opposti congruenti, i triangoli sulla diagonale $AC$ hanno tre coppie di lati congruenti e si usa LLL. Le due uguaglianze di angoli che ne derivano permettono di applicare due volte il criterio degli alterni interni. Anche due coppie di angoli opposti congruenti bastano. In quel caso $2(angle A+angle B)=360^circ$, quindi ogni coppia di angoli consecutivi è supplementare.
:::

## Rettangoli, rombi e quadrati

:::teorema{#casi-particolari titolo="Proprietà aggiuntive delle diagonali"}
In un rettangolo le diagonali sono congruenti e si bisecano. In un rombo le diagonali sono perpendicolari, si bisecano e dividono a metà gli angoli ai vertici. Nel quadrato le diagonali sono congruenti e perpendicolari, oltre a bisecarsi.

In un rettangolo le diagonali possono incontrarsi con un angolo diverso da $90^\circ$. In un rombo le diagonali possono avere lunghezze diverse.

Per un quadrilatero già riconosciuto come parallelogramma, diagonali congruenti permettono di riconoscere un rettangolo. Diagonali perpendicolari permettono di riconoscere un rombo. Entrambi i criteri richiedono che il quadrilatero sia un parallelogramma.

::grafico{assi=0 uguale=1 xmin=-1 xmax=8 ymin=-1 ymax=4 linee="0,0 3,0 3,2 0,2 0,0;4,1.5 5.5,3 7,1.5 5.5,0 4,1.5" segmenti="0,0,3,2;3,0,0,2;4,1.5,7,1.5;5.5,0,5.5,3" titolo="Nel rettangolo le diagonali sono congruenti. Nel quadrato a destra sono anche perpendicolari"}
:::

:::dimostrazione{titolo="Che cosa aggiunge il dato sulle diagonali"}
In un parallelogramma con $AC=BD$, confronta i triangoli $ABC$ e $DCB$. Hanno $BC$ in comune e $AB=DC$, oltre alle diagonali congruenti. Per LLL sono congruenti. Gli angoli consecutivi $angle ABC$ e $angle DCB$ sono dunque congruenti e supplementari, perciò entrambi retti.

Se invece $ACperp BD$, indica con $O$ l'intersezione. I triangoli $AOB$ e $COB$ hanno un angolo retto in $O$, il lato $OB$ in comune e $AO=CO$ per la proprietà del parallelogramma. Per LAL si ha $AB=CB$. Poiché i lati opposti sono già congruenti, tutti e quattro i lati lo sono.
:::

:::esempio{titolo="Un rombo con diagonali di lunghezze diverse"}
Nella figura le diagonali orizzontale e verticale misurano $6$ e $4$. Le quattro metà formano quattro triangoli rettangoli congruenti per LAL, perciò la figura è un rombo. Le due lunghezze diverse escludono che sia un rettangolo.

::grafico{assi=0 uguale=1 xmin=-3.8 xmax=3.8 ymin=-2.65 ymax=2.75 linee="-3,0 0,2 3,0 0,-2 -3,0;0.24,0 0.24,0.24 0,0.24" segmenti="-3,0,3,0;0,-2,0,2" etichette="-3.25,0.27,A;0,2.31,B;3.25,0.27,C;0,-2.31,D;0.29,-0.29,O" titolo="Il punto medio comune O e le diagonali perpendicolari identificano il rombo"}
:::

## Trapezi e problemi di misura

:::definizione{#applicazioni titolo="Basi, altezza e perimetro"}
I lati paralleli di un trapezio si chiamano **basi**. Gli altri due sono i lati non paralleli. L'**altezza** è la distanza tra le rette delle basi, misurata lungo una perpendicolare. Un trapezio isoscele ha lati obliqui congruenti e angoli adiacenti alla stessa base congruenti.

::grafico{assi=0 uguale=1 xmin=-1 xmax=7 ymin=-1 ymax=4 linee="0,0 6,0 4,3 1,3 0,0;1,0.25 1.25,0.25 1.25,0" segmenti="1,3,1,0" punti="0,0;6,0,pieno,B;4,3,pieno,C;1,3,pieno,D;1,0" etichette="-0.2,-0.35,A;1,-0.35,H" titolo="Le basi $AB$ e $DC$ sono parallele. $DH$ è l’altezza, perpendicolare ad $AB$"}

Per un parallelogramma con lati consecutivi $a$ e $b$, il perimetro è $P=2(a+b)$. Se $P=34\,\mathrm{cm}$ e $a=7\,\mathrm{cm}$, allora $b=\dfrac{34}{2}-7=10\,\mathrm{cm}$.

Per un rombo di perimetro $28\,\mathrm{cm}$ ogni lato misura $\dfrac{28}{4}=7\,\mathrm{cm}$. In un quadrilatero con tre angoli di $80^\circ$, $95^\circ$ e $105^\circ$, il quarto misura $360^\circ-80^\circ-95^\circ-105^\circ=80^\circ$.
:::

:::osservazione{titolo="La lunghezza del lato e l'altezza"}
Per un parallelogramma di base $b$ e altezza $h$, vale $A=bh$. L'altezza è la distanza perpendicolare tra le rette dei lati paralleli scelti come basi. Per dimostrare la formula, racchiudi il parallelogramma in un rettangolo di altezza $h$. Se il lato superiore è spostato orizzontalmente di $u$ rispetto a quello inferiore, il rettangolo ha base $b+u$. Dal rettangolo si tolgono due triangoli rettangoli con cateti $u$ e $h$, uno per lato. Rimane $(b+u)h-2(uh/2)=bh$.

Nel rombo, le diagonali di lunghezza $d_1$ e $d_2$ formano quattro triangoli rettangoli con cateti $d_1/2$ e $d_2/2$. Sommando le aree dei quattro triangoli si ottiene $A=d_1d_2/2$. L'uguaglianza dei lati serve per trovare il perimetro, mentre per questa formula bastano le diagonali perpendicolari che si dimezzano.
:::

:::dimostrazione{titolo="L'area del trapezio dalla copia ruotata"}
Unisci a un trapezio una seconda copia ruotata di $180^circ$ intorno al punto medio di un lato obliquo. I due lati obliqui accostati coincidono. Sui due bordi esterni orizzontali si affiancano una base lunga $B$ e una corta $b$. Gli altri due lati esterni sono paralleli per effetto della rotazione, quindi la figura composta è un parallelogramma di base $B+b$ e altezza $h$. Il trapezio occupa metà di quest'area, cioè $dfrac{(B+b)h}{2}$.

::grafico{assi=0 uguale=1 xmin=-1 xmax=13 ymin=-0.8 ymax=3.9 linee="0,0 11,0 12,3 1,3 0,0" segmenti="7,0,5,3;1,0,1,3" poligoni="0,0 7,0 5,3 1,3" etichette="3.6,-0.38,B;9,-0.38,b;3,3.42,b;8.4,3.42,B;0.59,1.45,h" titolo="Un trapezio e la sua copia ruotata formano un parallelogramma"}
:::

:::esempio{titolo="L'altezza si ricava dall'area"}
Per un trapezio con basi $12,mathrm{cm}$ e $8,mathrm{cm}$ e area $70,mathrm{cm}^2$, l'altezza vale $2cdot70/(12+8)=7,mathrm{cm}$. La formula usa la distanza perpendicolare fra le basi, quindi conoscere la lunghezza di un lato obliquo, da sola, non permette di sostituirla a $h$.
:::

## Controllare ciò che si può concludere

:::osservazione{#controlli titolo="Una proprietà non è sempre reversibile"}
Il punto medio comune delle diagonali garantisce che il quadrilatero è un parallelogramma. Per restringere la classificazione al rettangolo serve un’informazione aggiuntiva, come un angolo retto oppure diagonali congruenti.

Un quadrato soddisfa tutte le proprietà del rombo. Per determinare se un rombo è anche un quadrato, si può verificare che abbia almeno un angolo retto. Gli angoli opposti sono congruenti e i consecutivi supplementari, quindi da un angolo retto seguono gli altri tre.
:::

:::attenzione{titolo="Diagonali congruenti in un trapezio"}
Nel trapezio isoscele in figura, $AB$ e $CD$ sono paralleli e di lunghezze diverse. I triangoli $ABC$ e $BAD$ hanno il lato $AB$ in comune, i lati $BC$ e $AD$ congruenti e gli angoli alla base maggiore congruenti. Sono quindi congruenti per LAL, da cui $AC=BD$. Il trapezio ha diagonali congruenti e una sola coppia di lati paralleli.

::grafico{assi=0 uguale=1 xmin=-1 xmax=7 ymin=-0.9 ymax=3.8 linee="0,0 6,0 4.5,3 1.5,3 0,0" segmenti="0,0,4.5,3;6,0,1.5,3" punti="0,0;6,0;4.5,3;1.5,3" etichette="-0.15,-0.35,A;6.15,-0.35,B;4.67,3.35,C;1.33,3.35,D" titolo="Le diagonali del trapezio isoscele sono congruenti"}
:::

:::attenzione{titolo="Diagonali perpendicolari con un solo punto medio"}
Nel quadrilatero in figura, la diagonale orizzontale $AC$ attraversa a metà $BD$, ma $AO=4$ e $OC=2$. Le due diagonali sono perpendicolari. Il loro incrocio non è però il punto medio di entrambe, come richiederebbe un parallelogramma. Ecco perché la perpendicolarità è sufficiente per riconoscere un rombo solo dopo aver dimostrato che la figura è un parallelogramma.

::grafico{assi=0 uguale=1 xmin=-4.8 xmax=2.8 ymin=-3.6 ymax=3.7 linee="-4,0 0,3 2,0 0,-3 -4,0;0.25,0 0.25,0.25 0,0.25" segmenti="-4,0,2,0;0,-3,0,3" etichette="-4.26,0.28,A;0,3.3,B;2.28,0.3,C;0,-3.25,D;0.3,-0.27,O" titolo="O è punto medio di BD. Su AC i due segmenti hanno lunghezze diverse"}
:::
