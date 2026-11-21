---
titolo: "Rette parallele e quadrilateri"
sommario: "Angoli tra parallele e trasversale; parallelogrammi, rettangoli, rombi, quadrati e trapezi. Proprietà, criteri di riconoscimento e problemi con lati e angoli."
---

## Parallele tagliate da una trasversale

:::definizione{#concetti titolo="Riconoscere la posizione degli angoli"}
Nel piano euclideo, cioè il piano della geometria studiata a scuola, due rette distinte sono **parallele** quando non si incontrano in nessun punto. Per indicare che le rette $r$ e $s$ sono parallele si scrive $r\parallel s$, che si legge «$r$ è parallela a $s$».

Una **trasversale** è una terza retta che taglia entrambe le rette. Il punto in cui la trasversale taglia una delle due rette si chiama incrocio. In ogni incrocio si formano quattro angoli, quindi gli angoli sono otto in tutto.

Gli angoli si confrontano a coppie, uno nel primo incrocio e uno nel secondo. Il nome della coppia dipende dalla posizione dei due angoli.

- Due angoli **corrispondenti** occupano la stessa posizione nei due incroci. Per esempio, sono entrambi sopra la propria retta e a destra della trasversale.
- Due angoli **alterni interni** stanno tra le due rette e da parti opposte della trasversale.
- Due angoli **coniugati interni** stanno tra le due rette e dalla stessa parte della trasversale.

La posizione rispetto alle rette e alla trasversale identifica quindi la coppia.

Nella figura le lettere greche $\alpha$ (alfa) e $\beta$ (beta) indicano due angoli. L'angolo $\alpha$ è sopra la retta $r$ e a destra della trasversale, l'angolo $\beta$ è sopra la retta $s$ e a destra della trasversale, quindi i due angoli sono corrispondenti. Due angoli che hanno la stessa misura si dicono **congruenti**. Quando $r\parallel s$, gli angoli $\alpha$ e $\beta$ sono congruenti per il teorema sulle uguaglianze e le somme.

::grafico{assi=0 uguale=1 xmin=-2 xmax=5 ymin=-2 ymax=4 linee="-1.5,0 4.5,0;-1.5,2 4.5,2;-1,-1 3,3" punti="0,0;2,2" etichette="0.7,0.25,α;2.7,2.25,β;-1.2,0.25,r;-1.2,2.25,s" titolo="Per $r\parallel s$, gli angoli corrispondenti $\alpha$ e $\beta$ sono congruenti"}
:::

:::esempio{titolo="La stessa trasversale, due coppie diverse"}
Un angolo è **acuto** se misura meno di $90^\circ$, **retto** se misura $90^\circ$ e **ottuso** se misura più di $90^\circ$ e meno di $180^\circ$. Nelle due figure le rette orizzontali sono parallele e la trasversale le incontra in $A$ e in $B$ con un'inclinazione di $45^\circ$.

Nella prima figura sono segnati l'angolo acuto interno in $A$, a destra della trasversale, e l'angolo acuto interno in $B$, a sinistra. I due angoli stanno tra le rette e da parti opposte della trasversale, quindi sono alterni interni. Entrambi misurano $45^\circ$ e sono indicati con $\alpha$.

Nella seconda figura l'angolo in $A$ resta invariato. Per trovare il suo coniugato interno si sceglie in $B$ il settore, cioè la regione di piano compresa tra i due lati dell'angolo, che sta tra le rette e a destra della trasversale come l'angolo in $A$. Questo settore è ottuso ed è indicato con $\beta$. La sua misura è $180^\circ-45^\circ=135^\circ$.

::grafico{assi=0 uguale=1 legenda=0 xmin=-1.7 xmax=4.8 ymin=-0.8 ymax=3.1 linee="-1.5,0 4.5,0;-1.5,2 4.5,2;-0.7,-0.7 3,3" curve="0.62*cos(t),0.62*sin(t),0,0.7853981634;2+0.62*cos(t),2+0.62*sin(t),3.1415926536,3.9269908170" punti="0,0;2,2" etichette="-0.22,-0.29,A;2.2,2.3,B;0.96,0.45,α;1.2,1.58,α" titolo="Alterni interni: angoli uguali ai lati opposti della trasversale"}

::grafico{assi=0 uguale=1 legenda=0 xmin=-1.7 xmax=4.8 ymin=-0.8 ymax=3.1 linee="-1.5,0 4.5,0;-1.5,2 4.5,2;-0.7,-0.7 3,3" curve="0.62*cos(t),0.62*sin(t),0,0.7853981634;2+0.62*cos(t),2+0.62*sin(t),3.9269908170,6.2831853072" punti="0,0;2,2" etichette="-0.22,-0.29,A;2.2,2.3,B;0.96,0.45,α;2.41,1.14,β" titolo="Coniugati interni: due settori dalla stessa parte della trasversale"}
:::

## Proprietà e criteri di parallelismo

:::teorema{#regole titolo="Uguaglianze e somme"}
Due angoli sono **supplementari** quando la somma delle loro misure è $180^\circ$, come accade per $70^\circ$ e $110^\circ$.

Se due rette parallele sono tagliate da una trasversale, allora:

- gli angoli corrispondenti sono congruenti;
- gli angoli alterni interni sono congruenti;
- gli angoli coniugati interni sono supplementari.

Se un angolo misura $64^\circ$, il suo corrispondente e il suo alterno interno misurano $64^\circ$. Il suo coniugato interno misura $180^\circ-64^\circ=116^\circ$.

Gli altri angoli si ricostruiscono con due relazioni che valgono in ogni incrocio. Due angoli **opposti al vertice** hanno lo stesso vertice e i lati dell'uno sono i prolungamenti dei lati dell'altro; due angoli opposti al vertice sono congruenti. Due angoli **adiacenti** hanno un lato in comune e gli altri due lati sulla stessa retta, da parti opposte. Insieme formano un **angolo piatto**, cioè un angolo di $180^\circ$, quindi due angoli adiacenti sono supplementari. Nell'incrocio in cui un angolo misura $64^\circ$, l'opposto al vertice misura $64^\circ$ e i due adiacenti misurano $116^\circ$.

Vale anche il **criterio inverso**, che serve a dimostrare che due rette sono parallele partendo dagli angoli. Due rette tagliate da una trasversale sono parallele se è verificata una di queste condizioni:

- due angoli corrispondenti sono congruenti;
- due angoli alterni interni sono congruenti;
- due angoli coniugati interni hanno somma $180^\circ$.

L'uguaglianza o la somma riguarda una delle tre coppie indicate.

Per esempio, due coniugati interni misurano $(3x+10)^\circ$ e $(2x+20)^\circ$, dove $x$ è un numero da trovare. Le rette sono parallele quando la somma delle due misure è $180$:
$$
\begin{aligned}
(3x+10)+(2x+20)&=180\\[6pt]
5x+30&=180\\[6pt]
5x&=150\\[6pt]
x&=30.
\end{aligned}
$$
Nel secondo passaggio si sommano fra loro i termini con la $x$ e fra loro i numeri, nel terzo si sottrae $30$ da entrambi i lati dell'uguale e nel quarto si dividono entrambi i lati per $5$. Con $x=30$ gli angoli misurano $3\cdot30+10=100^\circ$ e $2\cdot30+20=80^\circ$, e infatti $100^\circ+80^\circ=180^\circ$.
:::

:::dimostrazione{titolo="Perché le parallele danno corrispondenti congruenti"}
Siano $A$ e $B$ gli incroci di una trasversale con due rette parallele. Una **traslazione** è uno spostamento in cui tutti i punti si muovono nella stessa direzione, nello stesso verso e della stessa lunghezza. La freccia che descrive lo spostamento si chiama vettore di traslazione. Si considera la traslazione che porta $A$ in $B$.

Una traslazione porta ogni retta in una retta parallela. La prima retta passa per $A$, quindi viene portata nella parallela che passa per $B$, cioè nella seconda retta. Il vettore di traslazione è disposto lungo la trasversale, perciò la trasversale viene portata su sé stessa.

I due lati di un angolo in $A$ si ritrovano perciò nella stessa posizione in $B$, e l'angolo ottenuto è il corrispondente dell'angolo di partenza. Una traslazione conserva le misure degli angoli, perciò i due angoli corrispondenti sono congruenti.
:::

:::dimostrazione{titolo="Dal criterio sui corrispondenti agli altri due"}
Si dimostra prima il criterio sui corrispondenti. Due rette sono tagliate da una trasversale in $A$ e in $B$, e un angolo in $A$ è congruente al suo corrispondente in $B$. Per il punto $B$ passa una sola retta parallela alla retta che passa per $A$. Per la proprietà diretta, la parallela forma in $B$ un angolo corrispondente congruente all'angolo dato in $A$. Anche la seconda retta forma in $B$ un angolo di quella misura nello stesso settore. Una **semiretta** è una delle due parti in cui un punto divide una retta. Le semirette che delimitano i due angoli partono da $B$, stanno dalla stessa parte della trasversale e formano con essa lo stesso angolo, quindi coincidono. Le due rette per $B$ sono allora la stessa retta e la seconda retta è parallela alla prima.

Gli altri due criteri si riportano a quello sui corrispondenti. Si fissa un angolo interno in $A$. In $B$ il suo alterno interno è opposto al vertice del suo corrispondente, quindi ha la stessa misura del corrispondente. Se i due alterni interni sono congruenti, anche i due corrispondenti lo sono e si applica il criterio sui corrispondenti.

Si considerano infine due coniugati interni che hanno somma $180^\circ$. In $B$ si sostituisce il coniugato con il suo angolo adiacente che sta tra le due rette, dall'altra parte della trasversale. L'angolo in $A$ e questo angolo adiacente sono entrambi supplementari del coniugato, quindi hanno la stessa misura. Essi sono alterni interni, perciò si applica il criterio appena dimostrato.
:::

:::attenzione{titolo="L'uguaglianza da sola non identifica una coppia"}
Due angoli opposti al vertice sono congruenti in ogni singolo incrocio, qualunque sia la direzione della seconda retta. La loro uguaglianza riguarda un solo incrocio.

Nella figura una retta orizzontale passa per $A$ e una retta inclinata passa per $B$. Entrambe incontrano una trasversale verticale. I due angoli retti segnati in $A$ sono opposti al vertice e sono uguali. La retta per $B$ è inclinata e la retta per $A$ è orizzontale, quindi le due rette non sono parallele.

::grafico{assi=0 uguale=1 xmin=-2.5 xmax=3.5 ymin=-1.2 ymax=3.7 linee="-2.3,0 3.3,0;-2.2,1.4 3.2,3.2;0,-0.9 0,3.4;0,0.24 0.24,0.24 0.24,0;-0.24,0 -0.24,-0.24 0,-0.24" punti="0,0;0,2.1333333333" etichette="-0.45,0.35,A;0.35,2.17,B" titolo="I due angoli in A sono opposti al vertice. Le due rette hanno direzioni diverse"}
:::

## Quadrilateri e classificazione

:::definizione{#metodo titolo="Dalle proprietà generali alle famiglie"}
Un **quadrilatero** è un poligono con quattro lati e quattro vertici. Il quadrilatero $ABCD$ ha i vertici $A$, $B$, $C$, $D$ e i lati $AB$, $BC$, $CD$, $DA$. Due lati sono **consecutivi** se hanno un vertice in comune, come $AB$ e $BC$, e sono **opposti** se non ne hanno, come $AB$ e $CD$. Gli angoli in $A$ e in $B$, vertici di uno stesso lato, sono consecutivi; gli angoli in $A$ e in $C$ sono opposti. Una **diagonale** è un segmento che unisce due vertici opposti. Le diagonali di $ABCD$ sono due, $AC$ e $BD$.

Un quadrilatero è **convesso** quando tutti i suoi angoli interni misurano meno di $180^\circ$; in questo caso le due diagonali sono interne alla figura. In questo capitolo si considerano quadrilateri convessi. Una diagonale divide il quadrilatero in due triangoli e la somma degli angoli interni di un triangolo è $180^\circ$, quindi la somma degli angoli interni di un quadrilatero è $360^\circ$.

Due segmenti sono congruenti quando hanno la stessa lunghezza.

| Famiglia | Proprietà che la definisce |
|---|---|
| Parallelogramma | Ha entrambe le coppie di lati opposti paralleli |
| Rettangolo | È un parallelogramma con quattro angoli retti |
| Rombo | È un parallelogramma con quattro lati congruenti |
| Quadrato | È un parallelogramma con quattro angoli retti e quattro lati congruenti |
| Trapezio, con la convenzione qui adottata | Ha esattamente una coppia di lati opposti paralleli |

Un quadrato ha quattro angoli retti, quindi è anche un rettangolo. Ha quattro lati congruenti, quindi è anche un rombo. È inoltre un parallelogramma. Un rettangolo di lati $3$ e $2$ soddisfa la definizione di rettangolo e ha due lunghezze diverse, perciò è un rettangolo che non è un quadrato.

Alcuni testi chiamano trapezio un quadrilatero con **almeno** una coppia di lati paralleli. Con quella definizione anche i parallelogrammi sono trapezi. Qui si adotta la convenzione di una sola coppia.
:::

:::dimostrazione{titolo="La diagonale conta tutti gli angoli una sola volta"}
Nel quadrilatero convesso $ABCD$ la diagonale $AC$ è interna alla figura e la divide nei triangoli $ABC$ e $ACD$. La diagonale divide in due parti l'angolo in $A$ e l'angolo in $C$. Gli angoli in $B$ e in $D$ restano interi, ciascuno in un triangolo. La somma degli angoli dei due triangoli è quindi uguale alla somma dei quattro angoli del quadrilatero, e vale
$$
180^\circ+180^\circ=360^\circ.
$$
Per esempio, se tre angoli misurano $80^\circ$, $95^\circ$ e $110^\circ$, la loro somma è $285^\circ$ e il quarto angolo misura $360^\circ-285^\circ=75^\circ$.
:::

## Proprietà del parallelogramma

:::teorema{#esempi titolo="Lati, angoli e diagonali"}
In un parallelogramma:

- i lati opposti sono congruenti;
- gli angoli opposti sono congruenti;
- gli angoli consecutivi sono supplementari;
- le diagonali si **bisecano reciprocamente**, cioè ciascuna divide l'altra in due parti uguali.

Il **punto medio** di un segmento è il punto che lo divide in due parti uguali, quindi le diagonali si tagliano nei rispettivi punti medi.

Se $ABCD$ è un parallelogramma e le diagonali si incontrano in $O$, allora
$$
AB=CD,\quad BC=AD,\quad AO=OC,\quad BO=OD.
$$
L'uguaglianza $AO=OC$ riguarda le due metà della diagonale $AC$, l'uguaglianza $BO=OD$ le due metà della diagonale $BD$. Nel parallelogramma della figura le diagonali hanno lunghezze diverse e si incontrano con un angolo diverso da $90^\circ$.

::grafico{assi=0 uguale=1 xmin=-1 xmax=6.5 ymin=-1 ymax=3.5 linee="0,0 4,0 5.5,2.5 1.5,2.5 0,0" segmenti="0,0,5.5,2.5;4,0,1.5,2.5" punti="0,0;4,0;5.5,2.5,pieno,C;1.5,2.5,pieno,D;2.75,1.25" etichette="-0.2,-0.35,A;4.2,-0.35,B;2.75,1.7,O" titolo="Le diagonali del parallelogramma si incontrano nel punto medio di entrambe"}

L'uguaglianza dei lati opposti si dimostra tracciando la diagonale $AC$, che divide il parallelogramma nei triangoli $ABC$ e $CDA$. Il simbolo $\angle BAC$ indica l'angolo con vertice in $A$ e lati che passano per $B$ e per $C$; la lettera centrale è sempre il vertice.

- Le rette $AB$ e $CD$ sono parallele e $AC$ è una loro trasversale, quindi gli alterni interni $\angle BAC$ e $\angle DCA$ sono congruenti.
- Le rette $BC$ e $AD$ sono parallele e $AC$ è una loro trasversale, quindi gli alterni interni $\angle BCA$ e $\angle DAC$ sono congruenti.
- Il lato $AC$ è comune ai due triangoli.

Il criterio di congruenza ALA (angolo, lato, angolo) afferma che due triangoli sono congruenti, cioè sovrapponibili, se hanno congruenti un lato e i due angoli che hanno il vertice agli estremi di quel lato. I triangoli $ABC$ e $CDA$ sono quindi congruenti per il criterio ALA. In due triangoli congruenti i lati che si corrispondono hanno la stessa lunghezza, perciò $AB=CD$ e $BC=AD$.
:::

:::dimostrazione{titolo="Dai lati paralleli al punto medio comune"}
Le diagonali si incontrano in $O$ e si confrontano i triangoli $ABO$ e $CDO$. Le rette $AB$ e $CD$ sono parallele. La diagonale $AC$ è una loro trasversale, quindi gli alterni interni $\angle BAO$ e $\angle DCO$ sono congruenti. Anche la diagonale $BD$ è una loro trasversale, quindi gli alterni interni $\angle ABO$ e $\angle CDO$ sono congruenti.

Il lato $AB$ è compreso tra i due angoli del primo triangolo, il lato $CD$ tra i due angoli del secondo, e $AB=CD$, come risulta dalla congruenza dei due triangoli costruiti sulla diagonale $AC$. Per il criterio ALA i triangoli $ABO$ e $CDO$ sono allora congruenti, con $A$ che corrisponde a $C$ e $B$ che corrisponde a $D$. I lati corrispondenti sono congruenti, quindi $AO=CO$ e $BO=DO$.
:::

:::esempio{titolo="Ricostruire i quattro angoli"}
Nel parallelogramma $ABCD$ l'angolo in $A$ misura $58^\circ$, cioè $\angle A=58^\circ$.

Le rette $AD$ e $BC$ sono parallele e la retta $AB$ è una loro trasversale. Gli angoli consecutivi in $A$ e in $B$ stanno tra le due parallele e dalla stessa parte di $AB$, quindi sono coniugati interni e sono supplementari:
$$
\angle B=180^\circ-58^\circ=122^\circ.
$$
Lo stesso ragionamento si ripete con la trasversale $BC$ delle parallele $AB$ e $CD$, e poi con la trasversale $CD$ delle parallele $BC$ e $AD$:
$$
\angle C=180^\circ-122^\circ=58^\circ,\qquad \angle D=180^\circ-58^\circ=122^\circ.
$$
Gli angoli opposti in $A$ e in $C$ sono entrambi supplementari dell'angolo in $B$, e per questo motivo sono congruenti.
:::

## Riconoscere un parallelogramma

:::teorema{#problemi titolo="Condizioni sufficienti"}
Una condizione è **sufficiente** quando, se è verificata, la conclusione è garantita. Un quadrilatero convesso è un parallelogramma se soddisfa una delle seguenti condizioni.

- Entrambe le coppie di lati opposti sono congruenti.
- Una coppia di lati opposti è contemporaneamente parallela e congruente.
- Le diagonali si bisecano reciprocamente.

Si dimostra l’ultimo criterio. Le diagonali si incontrano in $O$ e per ipotesi $AO=OC$ e $BO=OD$. Il criterio di congruenza LAL (lato, angolo, lato) afferma che due triangoli sono congruenti se hanno congruenti due lati e l'angolo compreso tra essi. Nei triangoli $AOB$ e $COD$:

- $AO=CO$ e $BO=DO$ per ipotesi;
- gli angoli $\angle AOB$ e $\angle COD$, compresi tra questi lati, sono opposti al vertice e quindi congruenti.

Per il criterio LAL i due triangoli sono congruenti. Gli angoli che si corrispondono sono congruenti, quindi $\angle OAB=\angle OCD$. Questi due angoli sono alterni interni per le rette $AB$ e $CD$ tagliate dalla trasversale $AC$. Per il criterio inverso si ricava $AB\parallel CD$. Ripetendo il ragionamento per i triangoli $AOD$ e $COB$ si ottiene $AD\parallel BC$. Le due coppie di lati opposti sono parallele, perciò il quadrilatero è un parallelogramma.

Se le diagonali si incontrano in $O$ con $AO=OC=4\,\mathrm{cm}$ e $BO=OD=6\,\mathrm{cm}$, il quadrilatero è quindi un parallelogramma. Questi dati da soli non garantiscono né angoli retti né quattro lati uguali.
:::

:::dimostrazione{titolo="Una coppia di lati opposti paralleli e congruenti"}
Per ipotesi $AB\parallel CD$ e $AB=CD$. Si traccia la diagonale $AC$ e si confrontano i triangoli $BAC$ e $DCA$.

- Il lato $AC$ è comune.
- I lati $AB$ e $CD$ sono congruenti per ipotesi.
- Gli angoli $\angle BAC$ e $\angle DCA$ sono alterni interni per le parallele $AB$ e $CD$ tagliate da $AC$, quindi sono congruenti. Ciascuno dei due è compreso tra i lati indicati.

Per il criterio LAL i due triangoli sono congruenti. Ne segue che $\angle BCA=\angle DAC$. Questi due angoli sono alterni interni per le rette $BC$ e $AD$ tagliate da $AC$. Per il criterio inverso anche $BC\parallel AD$, quindi il quadrilatero è un parallelogramma.
:::

:::osservazione
Il primo criterio si dimostra con il criterio di congruenza LLL (lato, lato, lato), secondo il quale due triangoli con i tre lati ordinatamente congruenti sono congruenti. Se entrambe le coppie di lati opposti sono congruenti, i triangoli $ABC$ e $CDA$ costruiti sulla diagonale $AC$ hanno tre coppie di lati congruenti, quindi sono congruenti per LLL. Ne derivano le uguaglianze $\angle BAC=\angle DCA$ e $\angle BCA=\angle DAC$. Il criterio degli alterni interni, applicato due volte, dà $AB\parallel CD$ e $BC\parallel AD$.

Anche due coppie di angoli opposti congruenti bastano. In quel caso $\angle A=\angle C$ e $\angle B=\angle D$, e la somma dei quattro angoli è $360^\circ$. Si ha quindi
$$
2(\angle A+\angle B)=360^\circ,\qquad \angle A+\angle B=180^\circ.
$$
Gli angoli consecutivi in $A$ e in $B$ sono coniugati interni per le rette $AD$ e $BC$ tagliate da $AB$ e sono supplementari, quindi $AD\parallel BC$. Allo stesso modo $\angle B+\angle C=180^\circ$ dà $AB\parallel CD$.
:::

## Rettangoli, rombi e quadrati

:::teorema{#casi-particolari titolo="Proprietà aggiuntive delle diagonali"}
Rettangoli, rombi e quadrati sono parallelogrammi, quindi le loro diagonali si bisecano. Due rette sono **perpendicolari** quando si incontrano formando quattro angoli retti. Ogni famiglia ha una proprietà in più.

- In un rettangolo le diagonali sono congruenti e si bisecano.
- In un rombo le diagonali sono perpendicolari, si bisecano e dividono a metà gli angoli ai vertici. La **bisettrice** di un angolo è la semiretta che lo divide in due angoli congruenti, quindi ogni diagonale del rombo è bisettrice degli angoli nei due vertici che unisce. Se un angolo del rombo misura $70^\circ$, la diagonale che parte da quel vertice lo divide in due angoli di $35^\circ$.
- In un quadrato le diagonali sono congruenti e perpendicolari, oltre a bisecarsi.

Nella figura, a sinistra c'è un rettangolo di lati $3$ e $2$. Le sue diagonali sono congruenti e si incontrano con un angolo diverso da $90^\circ$, come in ogni rettangolo che non è un quadrato. In un rombo che non è un quadrato le diagonali hanno lunghezze diverse. A destra c'è un quadrato con un vertice in alto. Le sue diagonali, una orizzontale e una verticale, misurano entrambe $3$.

Le stesse proprietà servono a riconoscere le figure. Se un quadrilatero è già riconosciuto come parallelogramma:

- diagonali congruenti garantiscono che è un rettangolo;
- diagonali perpendicolari garantiscono che è un rombo.

Entrambi i criteri richiedono che il quadrilatero sia un parallelogramma.

::grafico{assi=0 uguale=1 xmin=-1 xmax=8 ymin=-1 ymax=4 linee="0,0 3,0 3,2 0,2 0,0;4,1.5 5.5,3 7,1.5 5.5,0 4,1.5" segmenti="0,0,3,2;3,0,0,2;4,1.5,7,1.5;5.5,0,5.5,3" titolo="Nel rettangolo le diagonali sono congruenti. Nel quadrato a destra sono anche perpendicolari"}
:::

:::dimostrazione{titolo="Che cosa aggiunge il dato sulle diagonali"}
Si dimostra il primo criterio. In un parallelogramma $ABCD$ con $AC=BD$ si confrontano i triangoli $ABC$ e $DCB$.

- Il lato $BC$ è comune.
- I lati $AB$ e $DC$ sono congruenti, perché sono lati opposti di un parallelogramma.
- I lati $AC$ e $DB$ sono le diagonali, congruenti per ipotesi.

Per il criterio LLL i due triangoli sono congruenti, quindi $\angle ABC=\angle DCB$. Questi due angoli sono consecutivi nel parallelogramma, perciò sono anche supplementari. Due angoli congruenti con somma $180^\circ$ misurano $90^\circ$ ciascuno. Gli angoli opposti di un parallelogramma sono congruenti, quindi tutti e quattro gli angoli sono retti e la figura è un rettangolo.

Si dimostra il secondo criterio. Il simbolo $\perp$ si legge «perpendicolare a». In un parallelogramma $ABCD$ con $AC\perp BD$ si indica con $O$ il punto di incontro delle diagonali e si confrontano i triangoli $AOB$ e $COB$.

- Il lato $OB$ è comune.
- $AO=CO$, perché le diagonali di un parallelogramma si bisecano.
- Gli angoli in $O$, compresi tra questi lati, sono retti.

Per il criterio LAL i due triangoli sono congruenti, quindi $AB=CB$. I lati opposti di un parallelogramma sono congruenti, cioè $AB=CD$ e $CB=AD$. Tutti e quattro i lati hanno allora la stessa lunghezza e la figura è un rombo.
:::

:::esempio{titolo="Un rombo con diagonali di lunghezze diverse"}
Nella figura la diagonale orizzontale $AC$ misura $6$ e la diagonale verticale $BD$ misura $4$. Le diagonali sono perpendicolari e si incontrano in $O$, punto medio di entrambe, quindi $AO=OC=3$ e $BO=OD=2$.

Le quattro metà formano i triangoli $AOB$, $BOC$, $COD$ e $DOA$. Ciascuno ha un angolo retto in $O$ compreso tra un lato lungo $3$ e un lato lungo $2$, quindi i quattro triangoli sono congruenti per il criterio LAL. I loro terzi lati $AB$, $BC$, $CD$ e $DA$ hanno la stessa lunghezza, perciò la figura è un rombo. Un rettangolo ha le diagonali congruenti, mentre qui misurano $6$ e $4$. La figura è quindi un rombo che non è un rettangolo.

::grafico{assi=0 uguale=1 xmin=-3.8 xmax=3.8 ymin=-2.65 ymax=2.75 linee="-3,0 0,2 3,0 0,-2 -3,0;0.24,0 0.24,0.24 0,0.24" segmenti="-3,0,3,0;0,-2,0,2" etichette="-3.25,0.27,A;0,2.31,B;3.25,0.27,C;0,-2.31,D;0.29,-0.29,O" titolo="Il punto medio comune O e le diagonali perpendicolari identificano il rombo"}
:::

## Trapezi e problemi di misura

:::definizione{#applicazioni titolo="Basi, altezza e perimetro"}
I lati paralleli di un trapezio si chiamano **basi**. La più lunga è la base maggiore e la più corta è la base minore. Gli altri due lati, non paralleli, si chiamano **lati obliqui**. L'**altezza** è la distanza tra le rette delle basi, misurata lungo una retta perpendicolare alle basi. Un **trapezio isoscele** ha i lati obliqui congruenti. In un trapezio isoscele i due angoli adiacenti alla stessa base, cioè quelli che hanno il vertice agli estremi di quella base, sono congruenti.

Nel trapezio $ABCD$ della figura la base maggiore è $AB=6$ e la base minore è $DC=3$. Il segmento $DH$, perpendicolare ad $AB$, misura $3$ ed è l'altezza del trapezio. I lati obliqui sono $AD$ e $BC$.

::grafico{assi=0 uguale=1 xmin=-1 xmax=7 ymin=-1 ymax=4 linee="0,0 6,0 4,3 1,3 0,0;1,0.25 1.25,0.25 1.25,0" segmenti="1,3,1,0" punti="0,0;6,0,pieno,B;4,3,pieno,C;1,3,pieno,D;1,0" etichette="-0.2,-0.35,A;1,-0.35,H" titolo="Le basi $AB$ e $DC$ sono parallele. $DH$ è l’altezza, perpendicolare ad $AB$"}

Il **perimetro** di un poligono è la somma delle lunghezze dei suoi lati. In un parallelogramma con lati consecutivi $a$ e $b$ ogni lunghezza compare due volte, perché i lati opposti sono congruenti. Il perimetro è quindi $P=2(a+b)$. La somma $a+b$ è metà del perimetro e si chiama **semiperimetro**. Se $P=34\,\mathrm{cm}$ e $a=7\,\mathrm{cm}$, il semiperimetro è $\dfrac{34}{2}=17\,\mathrm{cm}$ e l'altro lato misura
$$
b=\frac{34}{2}-7=17-7=10\,\mathrm{cm}.
$$
Un rombo ha quattro lati congruenti, quindi il suo perimetro è quattro volte il lato. Per un rombo di perimetro $28\,\mathrm{cm}$ ogni lato misura $\dfrac{28}{4}=7\,\mathrm{cm}$.

In un quadrilatero con tre angoli di $80^\circ$, $95^\circ$ e $105^\circ$, il quarto si ottiene sottraendo le tre misure da $360^\circ$:
$$
360^\circ-80^\circ-95^\circ-105^\circ=80^\circ.
$$
:::

:::osservazione{titolo="La lunghezza del lato e l'altezza"}
L'**area** di una figura è la misura della sua superficie. Per un parallelogramma di base $b$ e altezza $h$ l'area è $A=bh$. La base è uno dei lati e l'altezza è la distanza, misurata lungo una perpendicolare, tra la retta della base e quella del lato opposto.

La formula si dimostra racchiudendo il parallelogramma in un rettangolo di altezza $h$. Il lato superiore del parallelogramma è spostato in orizzontale di una lunghezza $u$ rispetto a quello inferiore, quindi il rettangolo ha base $b+u$ e area $(b+u)h$. Tra il rettangolo e il parallelogramma restano due triangoli rettangoli, uno per lato. Un triangolo rettangolo ha un angolo retto, e i due lati che lo formano si chiamano **cateti**. Ciascuno dei due triangoli ha cateti $u$ e $h$ e area $\dfrac{uh}{2}$. Togliendo i due triangoli dal rettangolo rimane
$$
(b+u)h-2\cdot\frac{uh}{2}=bh+uh-uh=bh.
$$
La lunghezza $u$ è la **proiezione** del lato obliquo sulla retta della base. Il lato obliquo è il lato più lungo del triangolo rettangolo di cateti $u$ e $h$, cioè la sua **ipotenusa**. Per il teorema di Pitagora il quadrato dell'ipotenusa è uguale alla somma dei quadrati dei cateti. Se il lato obliquo misura $5$ e la sua proiezione misura $3$, allora $h^2=5^2-3^2=25-9=16$ e l'altezza misura $h=4$.

In un rombo con diagonali di lunghezza $d_1$ e $d_2$, le diagonali formano quattro triangoli rettangoli con cateti $\dfrac{d_1}{2}$ e $\dfrac{d_2}{2}$. L'area di ciascuno è la metà del prodotto dei cateti. Sommando le quattro aree si ottiene
$$
A=4\cdot\frac{1}{2}\cdot\frac{d_1}{2}\cdot\frac{d_2}{2}=\frac{d_1d_2}{2}.
$$
Con diagonali di $8\,\mathrm{cm}$ e $6\,\mathrm{cm}$ l'area è $\dfrac{8\cdot6}{2}=24\,\mathrm{cm}^2$. Il lato del rombo è l'ipotenusa di un triangolo con cateti $4\,\mathrm{cm}$ e $3\,\mathrm{cm}$, e $4^2+3^2=25=5^2$, quindi il lato misura $5\,\mathrm{cm}$. L'uguaglianza dei lati serve per trovare il perimetro, che qui è $4\cdot5=20\,\mathrm{cm}$. Per la formula dell'area bastano le diagonali perpendicolari che si dimezzano.
:::

:::dimostrazione{titolo="L'area del trapezio dalla copia ruotata"}
Si indicano con $B$ la base maggiore, con $b$ la base minore e con $h$ l'altezza di un trapezio. Al trapezio si unisce una seconda copia, ruotata di $180^\circ$ intorno al punto medio di un lato obliquo. La rotazione porta quel lato obliquo su sé stesso, quindi i due lati obliqui accostati coincidono.

Una rotazione di $180^\circ$ porta ogni retta in una retta parallela. Su ciascuno dei due bordi orizzontali della figura composta si affiancano perciò una base lunga $B$ e una lunga $b$. Gli altri due lati esterni sono un lato obliquo e la sua immagine nella rotazione, quindi sono paralleli. La figura composta è perciò un parallelogramma di base $B+b$ e altezza $h$. La sua area è $(B+b)h$. Il trapezio occupa metà di quest'area, cioè
$$
A=\frac{(B+b)h}{2}.
$$
Nella figura il trapezio colorato ha $B=7$, $b=4$ e $h=3$. Il parallelogramma ha base $11$ e area $33$, quindi il trapezio ha area $\dfrac{33}{2}=16{,}5$.

::grafico{assi=0 uguale=1 xmin=-1 xmax=13 ymin=-0.8 ymax=3.9 linee="0,0 11,0 12,3 1,3 0,0" segmenti="7,0,5,3;1,0,1,3" poligoni="0,0 7,0 5,3 1,3" etichette="3.6,-0.38,B;9,-0.38,b;3,3.42,b;8.4,3.42,B;0.59,1.45,h" titolo="Un trapezio e la sua copia ruotata formano un parallelogramma"}
:::

:::esempio{titolo="L'altezza si ricava dall'area"}
Un trapezio ha basi $12\,\mathrm{cm}$ e $8\,\mathrm{cm}$ e area $70\,\mathrm{cm}^2$. Dalla formula $A=\dfrac{(B+b)h}{2}$ si ricava l'altezza moltiplicando l'area per $2$ e dividendo per la somma delle basi:
$$
h=\frac{2A}{B+b}=\frac{2\cdot70}{12+8}=\frac{140}{20}=7\,\mathrm{cm}.
$$
Nella formula $h$ è la distanza perpendicolare fra le basi. Un lato obliquo non perpendicolare alle basi è più lungo dell'altezza, quindi la lunghezza di un lato obliquo, da sola, non si sostituisce a $h$.
:::

## Controllare ciò che si può concludere

:::osservazione{#controlli titolo="Una proprietà non è sempre reversibile"}
Ogni rettangolo ha le diagonali che si bisecano. Il punto medio comune delle diagonali, da solo, garantisce che il quadrilatero è un parallelogramma. Per concludere che è un rettangolo serve un’informazione aggiuntiva, come un angolo retto oppure diagonali congruenti.

Un quadrato soddisfa tutte le proprietà del rombo. Un rombo è anche un quadrato quando ha almeno un angolo retto. Gli angoli opposti sono congruenti e i consecutivi sono supplementari. Se un angolo misura $90^\circ$, l'opposto misura $90^\circ$ e i due consecutivi misurano $180^\circ-90^\circ=90^\circ$. Da un angolo retto seguono quindi gli altri tre.
:::

:::attenzione{titolo="Diagonali congruenti in un trapezio"}
Diagonali congruenti garantiscono un rettangolo soltanto in un parallelogramma. Nel trapezio isoscele in figura i lati $AB$ e $CD$ sono paralleli e hanno lunghezze diverse, $6$ e $3$. Si confrontano i triangoli $ABC$ e $BAD$.

- Il lato $AB$ è comune.
- I lati obliqui $BC$ e $AD$ sono congruenti.
- Gli angoli $\angle ABC$ e $\angle BAD$, adiacenti alla base maggiore e compresi tra i lati indicati, sono congruenti.

I due triangoli sono quindi congruenti per il criterio LAL, da cui $AC=BD$. Il trapezio ha le diagonali congruenti e una sola coppia di lati paralleli, quindi non è un rettangolo.

::grafico{assi=0 uguale=1 xmin=-1 xmax=7 ymin=-0.9 ymax=3.8 linee="0,0 6,0 4.5,3 1.5,3 0,0" segmenti="0,0,4.5,3;6,0,1.5,3" punti="0,0;6,0;4.5,3;1.5,3" etichette="-0.15,-0.35,A;6.15,-0.35,B;4.67,3.35,C;1.33,3.35,D" titolo="Le diagonali del trapezio isoscele sono congruenti"}
:::

:::attenzione{titolo="Diagonali perpendicolari con un solo punto medio"}
Nel quadrilatero in figura le diagonali $AC$ e $BD$ sono perpendicolari e si incontrano in $O$. La diagonale orizzontale $AC$ taglia $BD$ nel suo punto medio, infatti $BO=OD=3$. Sulla diagonale $AC$ si ha invece $AO=4$ e $OC=2$, quindi $O$ non è il punto medio di $AC$. In un parallelogramma il punto di incontro è il punto medio di entrambe le diagonali, perciò questa figura non è un parallelogramma.

La figura non è nemmeno un rombo, perché per il teorema di Pitagora $AB^2=4^2+3^2=25$ e $BC^2=2^2+3^2=13$. Per questo motivo la perpendicolarità delle diagonali è sufficiente a riconoscere un rombo solo dopo aver dimostrato che la figura è un parallelogramma.

::grafico{assi=0 uguale=1 xmin=-4.8 xmax=2.8 ymin=-3.6 ymax=3.7 linee="-4,0 0,3 2,0 0,-3 -4,0;0.25,0 0.25,0.25 0,0.25" segmenti="-4,0,2,0;0,-3,0,3" etichette="-4.26,0.28,A;0,3.3,B;2.28,0.3,C;0,-3.25,D;0.3,-0.27,O" titolo="O è punto medio di BD. Su AC i due segmenti hanno lunghezze diverse"}
:::
