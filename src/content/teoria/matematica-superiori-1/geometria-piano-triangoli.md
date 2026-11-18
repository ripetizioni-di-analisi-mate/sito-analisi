---
titolo: "Geometria del piano e triangoli"
sommario: "Segmenti, angoli, congruenza e costruzione dei triangoli, con dimostrazioni e controesempi."
---

## Punti, rette e segmenti

:::definizione{#concetti titolo="A partire da due punti distinti"}

Due punti distinti $A$ e $B$ individuano una retta. La semiretta di origine $A$ passante per $B$ contiene i punti che si raggiungono procedendo da $A$ verso $B$. Il segmento $AB$ comprende gli estremi e i punti fra di essi. Con $AB$ si indica anche la lunghezza del segmento, quando si scrivono somme o confronti fra misure.

Se $M$ appartiene al segmento $AB$, i tratti $AM$ e $MB$ danno $AB=AM+MB$. Il **punto medio** soddisfa in più $AM=MB$. Si trova quindi a distanza $\dfrac{AB}{2}$ da ciascun estremo. L'appartenenza al segmento è parte della definizione.

::grafico{assi=0 uguale=1 xmin=-0.8 xmax=8.8 ymin=-0.85 ymax=0.85 linee="0,0 8,0" punti="0,0;3,0;6,0;8,0" etichette="0,-0.44,A;3,-0.44,M;6,-0.44,B;8,-0.44,C;1.5,0.36,3;4.5,0.36,3;7,0.36,2" titolo="$M$ è il punto medio di $AB$ e $AC=AB+BC$"}

In figura $B$ è fra $A$ e $C$, dunque $AC=6+2=8$. La sola informazione che $A,B,C$ sono allineati lascia aperto l'ordine dei punti. Con $C$ fra $A$ e $B$ varrebbe invece $AB=AC+CB$.

:::

## Relazioni tra angoli

::::teorema{#regole titolo="Angoli complementari, supplementari e opposti al vertice"}

Un angolo ha per lati due semirette con origine comune. Tra gli angoli di ampiezza positiva e minore di $180^\circ$, quelli di ampiezza minore di $90^\circ$ sono **acuti**, quelli di $90^\circ$ sono **retti** e quelli maggiori di $90^\circ$ sono **ottusi**. Un angolo piatto misura $180^\circ$, un angolo giro $360^\circ$.

Due angoli sono **complementari** se sommano $90^\circ$ e **supplementari** se sommano $180^\circ$. Due angoli consecutivi condividono vertice e un lato, con interni disgiunti. Se i lati non comuni sono semirette opposte, gli angoli sono **adiacenti** e supplementari. Due angoli opposti al vertice, formati da due rette incidenti, sono congruenti.

:::dimostrazione

Si considerino gli angoli $\alpha$ e $\gamma$ opposti al vertice e l'angolo $\beta$ adiacente a entrambi. Le coppie $\alpha,\beta$ e $\beta,\gamma$ formano ciascuna un angolo piatto. Da $\alpha+\beta=180^\circ=\beta+\gamma$ segue $\alpha=\gamma$. Il ragionamento funziona anche quando le due rette sono perpendicolari e tutti e quattro gli angoli misurano $90^\circ$.

:::

::grafico{assi=0 uguale=1 xmin=-3 xmax=3 ymin=-2.25 ymax=2.25 linee="-2.7,0 2.7,0;-2.4,-1.75 2.4,1.75" punti="0,0" etichette="1.35,0.43,α;-0.28,1.05,β;-1.35,-0.58,γ;0.3,-0.25,O" titolo="Gli angoli $\alpha$ e $\gamma$ sono supplementari di $\beta$"}

::::

:::esempio{titolo="Bisettrice e angoli adiacenti"}

La **bisettrice** di un angolo è la semiretta interna a quell'angolo che lo divide in due angoli congruenti. Se l'angolo misura $68^\circ$, ognuna delle due parti misura $34^\circ$. Si può costruire il supplementare di $112^\circ$ prolungando un lato oltre il vertice. Fra le due bisettrici c'è un angolo di $34^\circ+56^\circ=90^\circ$, formato dalle metà adiacenti al lato comune.

:::

## Triangoli e criteri di congruenza

:::definizione{titolo="Vertici e corrispondenza"}

Un triangolo si forma con tre vertici non allineati e i segmenti che li congiungono. È **scaleno** se tutti i lati hanno lunghezze diverse, **isoscele** se almeno due lati sono congruenti ed **equilatero** se lo sono tutti e tre. Un equilatero è quindi anche isoscele. Rispetto agli angoli, un triangolo è acutangolo se tutti sono acuti, rettangolo se uno è retto e ottusangolo se uno è ottuso.

Due triangoli congruenti si possono sovrapporre esattamente mediante traslazioni, rotazioni o riflessioni. La notazione $ABC\cong DEF$ fissa l'ordine delle corrispondenze. Il vertice $B$ corrisponde a $E$ e il lato $BC$ a $EF$. Scegliere un ordine diverso richiede di riordinare i vertici in entrambi i triangoli.

:::

::::teorema{#metodo titolo="Dati sufficienti per la congruenza"}

Per dimostrare la congruenza è sufficiente uno dei tre gruppi di dati. Le uguaglianze riguardano sempre elementi corrispondenti.

| Criterio | Dati da verificare |
|---|---|
| Lato-angolo-lato, LAL | Due lati e l'angolo compreso tra i due lati |
| Angolo-lato-angolo, ALA | Un lato e i due angoli ai suoi estremi |
| Lato-lato-lato, LLL | Tutti e tre i lati |

:::dimostrazione

Per vedere perché le posizioni contano, si sovrappone un lato assegnato e si porta il terzo vertice nello stesso semipiano, riflettendo uno dei triangoli se occorre. Con LAL l'angolo compreso individua una semiretta e il secondo lato fissa su quella semiretta un unico punto. Con ALA i due angoli ai capi del lato assegnato individuano due semirette, che hanno al più un punto di intersezione e si incontrano perché i triangoli esistono. Con LLL le altre due lunghezze fissano le distanze del terzo vertice dai capi del lato. Le due circonferenze con tali raggi hanno al più un punto comune in ciascun semipiano rispetto alla base. Le due posizioni possibili sono speculari, quindi danno triangoli congruenti.

:::

::::

:::esempio{titolo="Associare lati e vertici"}

Nei due triangoli della prima figura $AB=DE=3$, $AC=DF=2$ e gli angoli in $A$ e $D$ sono retti. Questi angoli sono compresi fra i lati dati. LAL stabilisce $ABC\cong DEF$. Si può quindi dedurre $BC=EF$ anche senza conoscere la misura di quei lati.

Nella seconda figura si costruiscono entrambi i triangoli con base $AB=6$ e lati rimanenti di lunghezza $5$. Ogni possibile terzo vertice appartiene a entrambe le circonferenze di raggio $5$, una centrata in $A$, l'altra in $B$. Si ottengono due disegni speculari, con lo stesso triangolo a meno di un movimento rigido.

::grafico{assi=0 uguale=1 xmin=-0.9 xmax=9 ymin=-0.85 ymax=2.9 linee="0,0 3,0 0,2 0,0;5,0 8,0 5,2 5,0;0,0.25 0.25,0.25 0.25,0;5,0.25 5.25,0.25 5.25,0" punti="0,0;3,0;0,2;5,0;8,0;5,2" etichette="-0.15,-0.42,A;3.1,-0.42,B;-0.18,2.35,C;4.85,-0.42,D;8.1,-0.42,E;4.82,2.35,F;1.5,-0.42,3;6.5,-0.42,3;-0.45,1,2;4.55,1,2" titolo="Gli angoli retti sono compresi fra i due lati assegnati"}

::grafico{assi=0 uguale=1 xmin=-0.7 xmax=6.75 ymin=-4.8 ymax=4.8 curve="5*cos(t),5*sin(t),-1.04,1.04;6+5*cos(t),5*sin(t),2.1,4.18" linee="0,0 6,0 3,4 0,0;0,0 3,-4 6,0" punti="0,0;6,0;3,4;3,-4" etichette="-0.25,0.04,A;6.25,0.04,B;3,4.4,C;3,-4.55,C′" titolo="Per il criterio LLL i due punti di intersezione producono triangoli congruenti"}

:::

:::attenzione{titolo="Due lati e un angolo non compreso"}

Sulla stessa semiretta di origine $A$ si prendono $B_1,H,B_2$ in quest'ordine, con $AH=5$ e $HB_1=HB_2=4$. Si sceglie $C$ sulla perpendicolare in $H$ con $HC=3$. Per LAL i triangoli $HB_1C$ e $HB_2C$ sono congruenti, quindi $CB_1=CB_2$.

Nei triangoli $AB_1C$ e $AB_2C$ sono assegnati $AC$, $CB_i$ e l'angolo in $A$. Il vertice comune dei due lati assegnati è $C$. Le due basi misurano $AB_1=1$ e $AB_2=9$, quindi i triangoli hanno perimetri diversi. Tre angoli assegnati lasciano invece libera la scala. Due equilateri di lati $3$ e $6$ hanno tutti gli angoli corrispondenti della stessa ampiezza e perimetri diversi.

::grafico{assi=0 uguale=1 xmin=-0.8 xmax=9.9 ymin=-0.85 ymax=3.8 linee="0,0 9,0;0,0 5,3 1,0;5,3 9,0;5,0.23 5.23,0.23 5.23,0" segmenti="5,0,5,3" punti="0,0;1,0;5,0;9,0;5,3" etichette="-0.14,-0.4,A;1,-0.47,B_1;5,-0.44,H;9,-0.47,B_2;5,3.36,C" titolo="Le due scelte per $B$ danno basi diverse con lo stesso angolo in $A$"}

:::

## Somma degli angoli e angolo esterno

::::teorema{#esempi titolo="Un angolo piatto in ogni triangolo"}

In un triangolo la somma degli angoli interni è $180^\circ$. Un angolo esterno ottenuto prolungando un lato è uguale alla somma dei due angoli interni non adiacenti.

:::dimostrazione

Si traccia per $C$ la parallela ad $AB$. Il lato $AC$ attraversa le due rette parallele e porta l'angolo in $A$ nel settore a sinistra di $AC$ presso $C$. Allo stesso modo $BC$ porta l'angolo in $B$ nel settore a destra presso $C$. Sono uguaglianze di angoli alterni interni. I due settori e l'angolo interno in $C$ coprono insieme l'angolo piatto sotto la parallela.

Se si prolunga $AB$ oltre $B$, l'angolo esterno $\varepsilon$ e l'angolo interno $\beta$ in $B$ sono adiacenti. Si ha quindi $\varepsilon+\beta=180^\circ$. Confrontando con $\alpha+\beta+\gamma=180^\circ$ si ottiene $\varepsilon=\alpha+\gamma$.

:::

::grafico{assi=0 uguale=1 xmin=-1.6 xmax=5.5 ymin=-0.8 ymax=2.9 linee="0,0 4,0 1,2 0,0;-1.2,2 5.15,2" punti="0,0;4,0;1,2" etichette="-0.12,-0.4,A;4.18,-0.4,B;1,2.39,C;0.58,0.28,α;3.12,0.19,β;0.35,1.62,α;1.23,1.48,γ;2.25,1.68,β" titolo="Gli angoli $\alpha$, $\gamma$ e $\beta$ formano un angolo piatto in $C$"}

::grafico{assi=0 uguale=1 xmin=-0.65 xmax=6.4 ymin=-0.75 ymax=2.65 linee="0,0 6,0;0,0 1.5,2 4,0" punti="0,0;4,0;1.5,2;6,0" etichette="-0.13,-0.38,A;4,-0.38,B;1.46,2.36,C;6,-0.38,D;0.63,0.29,α;3.2,0.2,β;1.5,1.43,γ;4.37,0.49,ε" titolo="Il prolungamento fino a $D$ forma l’angolo esterno $\varepsilon=\alpha+\gamma$"}

::::

:::esempio{titolo="Calcolare e controllare il terzo angolo"}

Se gli angoli interni noti sono $48^\circ$ e $67^\circ$, il terzo misura $65^\circ$. Tutti sono positivi e minori di $90^\circ$, quindi il triangolo è acutangolo. In un triangolo rettangolo i due angoli acuti sono complementari. Se uno misura $31^\circ$, l'altro misura $59^\circ$.

Un angolo esterno di $124^\circ$ adiacente all'angolo in $B$ lascia in $B$ un interno di $56^\circ$. Se l'angolo in $A$ misura $46^\circ$, quello in $C$ vale $124^\circ-46^\circ=78^\circ$. Il totale $46^\circ+56^\circ+78^\circ=180^\circ$ verifica il calcolo.

:::

## Mediana, altezza e bisettrice

:::definizione{#segmenti-triangolo titolo="Tre segmenti dal medesimo vertice"}

Da un vertice $A$ di un triangolo $ABC$ si possono tracciare segmenti distinti. La **mediana** unisce $A$ al punto medio $M$ del lato $BC$. L'**altezza** unisce $A$ al piede $H$ della perpendicolare alla retta $BC$. Il piede può trovarsi sul prolungamento del lato, come in figura. La **bisettrice** dell'angolo in $A$ incontra $BC$ in un punto $D$ tale che $\widehat{BAD}=\widehat{DAC}$. Con la parola bisettrice del triangolo si indica anche il segmento $AD$.

::grafico{assi=0 uguale=1 xmin=-1.75 xmax=5.65 ymin=-0.85 ymax=3.25 linee="-1,2.6 0,0 5,0 -1,2.6 2.5,0;-1,0 0,0;-1,0.24 -0.76,0.24 -0.76,0" segmenti="-1,2.6,-1,0" punti="-1,2.6;-1,0;0,0;2.5,0;5,0" etichette="-1.14,2.97,A;-1.06,-0.43,H;-0.03,-0.43,B;2.5,-0.43,M;5.12,-0.43,C" titolo="In questo triangolo $AM$ arriva al punto medio e l’altezza $AH$ è esterna"}

Un dato come $BM=MC$ permette di identificare un segmento come mediana quando $M$ è sul lato. Un segno di angolo retto alla base identifica invece l'altezza. Per applicare la definizione di bisettrice si devono confrontare gli angoli in $A$, non gli angoli nel punto d'incontro con la base.

:::

## Il triangolo isoscele

::::teorema{#problemi titolo="Lati uguali, angoli alla base e segmento dal vertice"}

Se $AB=AC$, gli angoli alla base $BC$ sono congruenti. La bisettrice dell'angolo in $A$ è anche mediana e altezza relativa alla base.

:::dimostrazione

Sia $D$ il punto in cui la bisettrice dell'angolo in $A$ incontra il lato $BC$. I triangoli $ABD$ e $ACD$ hanno il lato $AD$ in comune, i lati $AB$ e $AC$ congruenti per ipotesi e gli angoli $\widehat{BAD}$ e $\widehat{DAC}$ congruenti per costruzione. Gli angoli sono compresi fra i lati assegnati, quindi vale LAL. Seguono $\widehat{ABD}=\widehat{ACD}$ e $BD=DC$.

I due angoli in $D$ sono anch'essi congruenti. Essendo adiacenti sommano $180^\circ$, perciò misurano entrambi $90^\circ$. Il punto $D$ è dunque il punto medio della base e il piede della perpendicolare alla sua retta.

:::

::grafico{assi=0 uguale=1 xmin=-2.8 xmax=2.8 ymin=-0.95 ymax=3.7 linee="-2,0 2,0 0,3 -2,0;0,3 0,0;0,0.24 0.24,0.24 0.24,0;-1,-0.1 -1,0.1;1,-0.1 1,0.1" punti="0,3;-2,0;2,0;0,0" etichette="0,3.36,A;-2.14,-0.38,B;2.14,-0.38,C;0,-0.43,D" titolo="La bisettrice $AD$ è anche altezza e mediana"}

::::

::::teorema{#isoscele-converso titolo="Dagli angoli alla base ai lati"}

Se in $ABC$ gli angoli in $B$ e $C$ sono uguali, allora $AB=AC$.

:::dimostrazione

Si confronta $ABC$ con $ACB$, cioè la stessa figura con le corrispondenze $A\leftrightarrow A$, $B\leftrightarrow C$ e $C\leftrightarrow B$. La base $BC$ corrisponde a $CB$ e i due angoli ai suoi estremi si corrispondono per ipotesi. Il criterio ALA dà la congruenza in quell'ordine. Fra i lati corrispondenti vi sono proprio $AB$ e $AC$.

:::

::::

:::esempio{titolo="Quale angolo si ripete"}

Se l'angolo al vertice misura $44^\circ$, ciascun angolo alla base misura $\dfrac{180^\circ-44^\circ}{2}=68^\circ$. Se si conosce invece un angolo alla base di $52^\circ$, lo stesso valore compare due volte e quello al vertice misura $180^\circ-2\cdot52^\circ=76^\circ$. Un angolo alla base di un isoscele deve essere acuto, perché due angoli di almeno $90^\circ$ lascerebbero al vertice un'ampiezza nulla o negativa.

:::

## Costruire un triangolo da tre lunghezze

::::teorema{#disuguaglianza titolo="La disuguaglianza triangolare"}

Assegnati due lati positivi di lunghezze $a$ e $b$, una lunghezza $c$ è il terzo lato di un triangolo se e solo se

$$
|a-b|<c<a+b.
$$

:::dimostrazione

Il segmento che congiunge due vertici è più corto del cammino lungo gli altri due lati, perché il terzo vertice è fuori dalla retta del segmento. Si ha così $c<a+b$, insieme ad $a<b+c$ e $b<a+c$. Le ultime due disuguaglianze equivalgono a $|a-b|<c$.

Per la costruzione si disegna un segmento $AB$ di lunghezza $c$ e due circonferenze di centri $A,B$ e raggi $a,b$. Le circonferenze si tagliano in due punti quando la distanza tra i centri supera il valore assoluto della differenza dei raggi ed è minore della loro somma. Ognuno dei punti d'intersezione è un terzo vertice possibile, e il criterio LLL dice che le due scelte sono congruenti. Se la distanza è esattamente la somma o il valore assoluto della differenza dei raggi, il punto di tangenza si trova sulla retta $AB$. In quel caso si ottengono tre punti allineati.

:::

::grafico{assi=0 uguale=1 xmin=-0.7 xmax=8.7 ymin=-1.75 ymax=1.8 curve="5*cos(t),5*sin(t),-0.30,0.30;8+3*cos(t),3*sin(t),2.66,3.62" linee="0,0 8,0" punti="0,0;5,0;8,0" etichette="0,-0.35,A;5,-0.43,C;8,-0.35,B;2.5,0.28,5;6.5,0.28,3" titolo="Con $AB=5+3$ gli archi si toccano in un punto allineato"}

::::

:::esempio{titolo="Controlli sui dati"}

Per lati assegnati di $4$ e $7$ centimetri la condizione è $3<c<11$. Si possono usare $5$ o $10$ centimetri. Con $c=3$ si ha $7=4+3$, quindi il lato più lungo coinciderebbe con la somma degli altri due. Se si conoscono già tre lunghezze positive, basta confrontare la maggiore con la somma delle altre. Infatti per ciascuna delle lunghezze minori la somma delle altre due comprende già la lunghezza maggiore e un addendo positivo.

:::

## Dal perimetro ai lati

:::esempio{#applicazioni titolo="Distinguere la base dai lati congruenti"}

Un triangolo isoscele con perimetro $32\,\mathrm{cm}$ e base $8\,\mathrm{cm}$ ha due lati uguali di lunghezza $l$. L'equazione $2l+8=32$ dà $l=12\,\mathrm{cm}$. Le misure soddisfano la condizione sui lati, perché $12<12+8$. La misura nota della base permette di formulare una sola equazione.

Se il perimetro è $36\,\mathrm{cm}$ e si sa solo che un lato misura $10\,\mathrm{cm}$, ci sono due casi. Se quel lato è la base, ciascuno dei lati uguali misura $(36-10)/2=13\,\mathrm{cm}$. Se è uno dei lati uguali, anche l'altro misura $10\,\mathrm{cm}$ e la base vale $16\,\mathrm{cm}$. Le due terne sono ammesse, perché $13<13+10$ e $16<10+10$. La disuguaglianza triangolare permette di decidere quali soluzioni algebriche si possono costruire.

:::

## Costruire e controllare una dimostrazione

:::esempio{#controlli titolo="Ipotesi, tesi e uso della congruenza"}

Si sa che $M$ è il punto medio dei segmenti $AB$ e $CD$, le cui rette si intersecano in quel punto. La tesi è $AC=BD$. Dalle ipotesi sui punti medi si ricavano $AM=MB$ e $CM=MD$. Poiché le rette sono incidenti, $\widehat{AMC}=\widehat{BMD}$ per la proprietà degli angoli opposti al vertice. L'angolo in ciascun triangolo è compreso fra le coppie di lati appena confrontate. Per LAL vale $AMC\cong BMD$. L'uguaglianza $AC=BD$ segue perché i lati uniscono i vertici corrispondenti $A,B$ e $C,D$.

::grafico{assi=0 uguale=1 xmin=-2.8 xmax=2.8 ymin=-3.8 ymax=3.8 linee="-2,-1 2,1;1,-3 -1,3;-2,-1 1,-3;2,1 -1,3" punti="-2,-1;2,1;1,-3;-1,3;0,0" etichette="-2.28,-1.08,A;2.28,1.12,B;1.05,-3.43,C;-1.03,3.43,D;0.4,-0.19,M" titolo="Gli angoli in $M$ usati nel criterio LAL sono opposti al vertice"}

In un altro disegno $M$ potrebbe essere solo il punto di intersezione. Gli angoli opposti resterebbero congruenti, mentre le uguaglianze di lunghezze avrebbero bisogno di dati ulteriori. Il passaggio che usa LAL richiede tutti e tre i dati. Questa verifica distingue le informazioni date dalle proprietà che la dimostrazione ha ancora da provare.

:::
