---
titolo: "Rette parallele e quadrilateri"
sommario: "Angoli tra parallele e trasversale; parallelogrammi, rettangoli, rombi, quadrati e trapezi. Proprietà, criteri di riconoscimento e problemi con lati e angoli."
---

:::percorso
Riprendi gli angoli supplementari e i criteri di congruenza dei triangoli. Studia prima le relazioni tra rette parallele, poi applicale ai quadrilateri. Nelle classificazioni distingui una proprietà comune a tutta una famiglia da una condizione aggiuntiva che individua un caso particolare.
:::

## Parallele tagliate da una trasversale

:::definizione{#concetti titolo="Riconoscere la posizione degli angoli"}
Nel piano euclideo, due rette distinte sono **parallele** quando non si incontrano. Una trasversale che le interseca forma quattro angoli in ciascuno dei due punti di incontro.

Gli angoli **corrispondenti** occupano la stessa posizione nei due incroci. Gli **alterni interni** stanno tra le due rette e da parti opposte della trasversale. I **coniugati interni** stanno tra le rette e dalla stessa parte della trasversale. Prima di applicare una formula, individua la coppia richiesta.

Nella figura gli angoli indicati con $\alpha$ e $\beta$ occupano entrambi la posizione sopra la retta orizzontale e a destra della trasversale: sono corrispondenti.

::grafico{assi=0 uguale=1 xmin=-2 xmax=5 ymin=-2 ymax=4 linee="-1.5,0 4.5,0;-1.5,2 4.5,2;-1,-1 3,3" punti="0,0;2,2" etichette="0.7,0.25,α;2.7,2.25,β;-1.2,0.25,r;-1.2,2.25,s" titolo="Per $r\parallel s$, gli angoli corrispondenti $\alpha$ e $\beta$ sono congruenti"}
:::

## Proprietà e criteri di parallelismo

:::teorema{#regole titolo="Uguaglianze e somme"}
Se due rette parallele sono tagliate da una trasversale, gli angoli corrispondenti sono congruenti, gli alterni interni sono congruenti e i coniugati interni sono supplementari.

Se un angolo misura $64^\circ$, il suo corrispondente e il suo alterno interno misurano $64^\circ$; il suo coniugato interno misura $180^\circ-64^\circ=116^\circ$. Le relazioni tra angoli opposti al vertice e adiacenti permettono di ricostruire tutti gli altri angoli.

Valgono anche i criteri inversi: l'uguaglianza di una coppia di corrispondenti, l'uguaglianza di una coppia di alterni interni oppure la somma di $180^\circ$ per una coppia di coniugati interni permette di dedurre il parallelismo. La coppia deve essere quella descritta dal criterio: due angoli uguali scelti a caso non sono sufficienti.

Per esempio, se due coniugati interni misurano $(3x+10)^\circ$ e $(2x+20)^\circ$, il parallelismo richiede $5x+30=180$. Si ottiene $x=30$ e gli angoli sono $100^\circ$ e $80^\circ$.
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

La classificazione è inclusiva: un quadrato è anche un rettangolo, un rombo e un parallelogramma. Un rettangolo non deve necessariamente essere un quadrato. Alcuni testi definiscono il trapezio richiedendo **almeno** una coppia di lati paralleli: in quel caso includono anche i parallelogrammi. Per evitare equivoci, qui usiamo la convenzione “esattamente una coppia”.
:::

## Proprietà del parallelogramma

:::teorema{#esempi titolo="Lati, angoli e diagonali"}
In un parallelogramma i lati opposti sono congruenti, gli angoli opposti sono congruenti e gli angoli consecutivi sono supplementari. Le diagonali si **bisecano reciprocamente**, cioè si tagliano nei rispettivi punti medi.

Se $ABCD$ è un parallelogramma e le diagonali si incontrano in $O$, allora
$$
AB=CD,\quad BC=AD,\quad AO=OC,\quad BO=OD.
$$
L'uguaglianza $AO=OC$ riguarda le due metà della stessa diagonale; non afferma che $AC=BD$. Nel parallelogramma generico le diagonali non sono necessariamente congruenti o perpendicolari.

::grafico{assi=0 uguale=1 xmin=-1 xmax=6.5 ymin=-1 ymax=3.5 linee="0,0 4,0 5.5,2.5 1.5,2.5 0,0" segmenti="0,0,5.5,2.5;4,0,1.5,2.5" punti="0,0;4,0;5.5,2.5,pieno,C;1.5,2.5,pieno,D;2.75,1.25" etichette="-0.2,-0.35,A;4.2,-0.35,B;2.75,1.7,O" titolo="Le diagonali del parallelogramma si incontrano nel punto medio di entrambe"}

Per giustificare l'uguaglianza dei lati opposti si può tracciare la diagonale $AC$. Il parallelismo dà due coppie di angoli alterni interni congruenti; il lato $AC$ è comune. I due triangoli sono congruenti per ALA e quindi hanno congruenti i lati corrispondenti.
:::

## Riconoscere un parallelogramma

:::teorema{#problemi titolo="Condizioni sufficienti"}
Un quadrilatero convesso è un parallelogramma se soddisfa una delle seguenti condizioni: entrambe le coppie di lati opposti sono congruenti; una coppia di lati opposti è contemporaneamente parallela e congruente; le diagonali si bisecano reciprocamente.

Per l'ultimo criterio, supponi $AO=OC$ e $BO=OD$. I triangoli $AOB$ e $COD$ hanno due coppie di lati congruenti e gli angoli in $O$ opposti al vertice, dunque congruenti. Per LAL i triangoli sono congruenti. Dall'uguaglianza degli angoli corrispondenti si ricava $AB\parallel CD$. Ripetendo il ragionamento per l'altra coppia di triangoli si ottiene $AD\parallel BC$.

Se le diagonali si incontrano in $O$ con $AO=OC=4\,\mathrm{cm}$ e $BO=OD=6\,\mathrm{cm}$, il quadrilatero è quindi un parallelogramma. Questi dati da soli non impongono né angoli retti né quattro lati uguali.
:::

## Rettangoli, rombi e quadrati

:::teorema{#casi-particolari titolo="Proprietà aggiuntive delle diagonali"}
In un rettangolo le diagonali sono congruenti e si bisecano. In un rombo le diagonali sono perpendicolari, si bisecano e dividono a metà gli angoli ai vertici. Nel quadrato valgono entrambe le proprietà: le diagonali sono congruenti e perpendicolari, oltre a bisecarsi.

Le diagonali di un rettangolo non sono in generale perpendicolari; quelle di un rombo non sono in generale congruenti. Un quadrato soddisfa entrambe le condizioni.

Per un quadrilatero già riconosciuto come parallelogramma, diagonali congruenti permettono di riconoscere un rettangolo; diagonali perpendicolari permettono di riconoscere un rombo. È essenziale mantenere l'ipotesi “parallelogramma”: la sola congruenza delle diagonali di un quadrilatero generico non basta per concludere che sia un rettangolo.

::grafico{assi=0 uguale=1 xmin=-1 xmax=8 ymin=-1 ymax=4 linee="0,0 3,0 3,2 0,2 0,0;4,1.5 5.5,3 7,1.5 5.5,0 4,1.5" segmenti="0,0,3,2;3,0,0,2;4,1.5,7,1.5;5.5,0,5.5,3" titolo="Nel rettangolo le diagonali sono congruenti; nel quadrato a destra sono anche perpendicolari"}
:::

## Trapezi e problemi di misura

:::definizione{#applicazioni titolo="Basi, altezza e perimetro"}
I lati paralleli di un trapezio si chiamano **basi**; gli altri due sono i lati obliqui. L'**altezza** è la distanza tra le rette delle basi, misurata lungo una perpendicolare. Un trapezio isoscele ha lati obliqui congruenti e angoli adiacenti alla stessa base congruenti.

::grafico{assi=0 uguale=1 xmin=-1 xmax=7 ymin=-1 ymax=4 linee="0,0 6,0 4,3 1,3 0,0;1,0.25 1.25,0.25 1.25,0" segmenti="1,3,1,0" punti="0,0;6,0,pieno,B;4,3,pieno,C;1,3,pieno,D;1,0" etichette="-0.2,-0.35,A;1,-0.35,H" titolo="Le basi $AB$ e $DC$ sono parallele; $DH$ è l'altezza e non coincide con un lato obliquo"}

Per un parallelogramma con lati consecutivi $a$ e $b$, il perimetro è $P=2(a+b)$. Se $P=34\,\mathrm{cm}$ e $a=7\,\mathrm{cm}$, allora $b=\dfrac{34}{2}-7=10\,\mathrm{cm}$.

Per un rombo di perimetro $28\,\mathrm{cm}$ ogni lato misura $\dfrac{28}{4}=7\,\mathrm{cm}$. In un quadrilatero con tre angoli di $80^\circ$, $95^\circ$ e $105^\circ$, il quarto misura $360^\circ-80^\circ-95^\circ-105^\circ=80^\circ$.
:::

## Controllare ciò che si può concludere

:::osservazione{#controlli titolo="Una proprietà non è sempre reversibile"}
Identifica prima la famiglia geometrica garantita dai dati. Un parallelogramma non diventa un rettangolo solo perché le diagonali si incontrano nel punto medio: questa è una proprietà di tutti i parallelogrammi. Per riconoscere il rettangolo serve un'informazione aggiuntiva, come un angolo retto oppure diagonali congruenti.

Quando una domanda chiede una conclusione “sempre vera”, controlla anche i casi particolari. “Ogni quadrato è un rombo” è vero, mentre “ogni rombo è un quadrato” è falso. Nei calcoli verifica la somma degli angoli, il perimetro e le unità di misura; nelle dimostrazioni cita il criterio usato e tutte le sue ipotesi.
:::
