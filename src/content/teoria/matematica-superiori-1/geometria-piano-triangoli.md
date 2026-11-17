---
titolo: "Geometria del piano e triangoli"
sommario: "Segmenti, angoli, triangoli e congruenza. Criteri LAL, ALA e LLL, triangolo isoscele, disuguaglianza triangolare e prime dimostrazioni."
---

## Punti, rette, segmenti e triangoli

:::definizione{#concetti titolo="Gli oggetti della geometria del piano"}
Due punti distinti individuano una retta. Il **segmento** $AB$ è la parte di retta compresa tra $A$ e $B$, estremi inclusi. Una **semiretta** ha un'origine e prosegue senza limite in una direzione. Il punto medio $M$ di un segmento appartiene al segmento e soddisfa $AM=MB$.

Un angolo è individuato da due semirette con la stessa origine. Un angolo retto misura $90^\circ$, uno piatto $180^\circ$ e uno giro $360^\circ$. Un angolo acuto ha misura compresa tra $0^\circ$ e $90^\circ$; uno ottuso tra $90^\circ$ e $180^\circ$.

Un **triangolo** ha tre vertici non allineati, tre lati e tre angoli interni. È scaleno se i lati hanno lunghezze tutte diverse, isoscele se ha almeno due lati congruenti, equilatero se ne ha tre. Con questa definizione inclusiva, un triangolo equilatero è anche isoscele. In base agli angoli, un triangolo può essere acutangolo, rettangolo o ottusangolo.

Figure congruenti si possono sovrapporre esattamente con un movimento rigido. I lati e gli angoli corrispondenti hanno quindi misure uguali. Nelle dimostrazioni le uguaglianze si deducono dalle ipotesi e dalle proprietà geometriche.
:::

## Relazioni tra angoli

:::teorema{#regole titolo="Complementari, supplementari e opposti al vertice"}
Due angoli sono **complementari** se la loro somma è $90^\circ$ e **supplementari** se la somma è $180^\circ$. Il complementare di $35^\circ$ misura $55^\circ$. Il supplementare di $35^\circ$ misura $145^\circ$.

Due angoli consecutivi hanno vertice e un lato in comune, con interni disgiunti. Se i lati non comuni sono semirette opposte, gli angoli sono adiacenti e supplementari. Due angoli **opposti al vertice**, formati da due rette incidenti, sono congruenti perché ciascuno è supplementare dello stesso angolo adiacente.

La **bisettrice** divide un angolo in due angoli congruenti. Se l'angolo misura $64^\circ$, ciascuna parte misura $32^\circ$. La bisettrice è una semiretta, mentre il punto medio è un punto del segmento.
:::

## Criteri di congruenza dei triangoli

:::teorema{#metodo titolo="Quali dati determinano un triangolo"}
Per dimostrare la congruenza di due triangoli è sufficiente riconoscere uno dei seguenti criteri, rispettando la corrispondenza tra vertici.

| Criterio | Dati congruenti nei due triangoli |
|---|---|
| Lato-angolo-lato, LAL | Due lati e l'angolo compreso tra essi |
| Angolo-lato-angolo, ALA | Un lato e i due angoli adiacenti a esso |
| Lato-lato-lato, LLL | I tre lati corrispondenti |

L'angolo del criterio LAL deve essere **compreso** fra i lati assegnati. Due lati e un angolo scelto senza questa condizione non garantiscono in generale la congruenza. Due triangoli equilateri di lati $3$ e $6$ hanno gli stessi angoli e lati corrispondenti di diversa lunghezza.

Nella figura $AB=DE=3$, $AC=DF=2$ e gli angoli in $A$ e $D$ sono retti. Per LAL i triangoli sono congruenti. La corrispondenza è $A\leftrightarrow D$, $B\leftrightarrow E$, $C\leftrightarrow F$. Dunque anche $BC=EF$.

::grafico{assi=0 uguale=1 xmin=-1 xmax=9 ymin=-1 ymax=3 linee="0,0 3,0 0,2 0,0;5,0 8,0 5,2 5,0;0,0.25 0.25,0.25 0.25,0;5,0.25 5.25,0.25 5.25,0" punti="0,0;3,0,pieno,B;0,2,pieno,C;5,0;8,0,pieno,E;5,2,pieno,F" etichette="-0.25,-0.4,A;4.75,-0.4,D;1.5,-0.45,3;6.5,-0.45,3;-0.45,1,2;4.55,1,2" titolo="Il criterio LAL si applica ai due triangoli"}
:::

:::attenzione{titolo="Due lati e un angolo non compreso"}
Sulla semiretta di origine $A$ si prendono $B_1$, $H$ e $B_2$, nell’ordine in figura. Si ha $AH=5$ e $HB_1=HB_2=4$. La perpendicolare per $H$ incontra $C$ a distanza $HC=3$. I triangoli $HB_1C$ e $HB_2C$ sono congruenti per LAL, quindi $CB_1=CB_2$.

I triangoli $AB_1C$ e $AB_2C$ hanno pertanto due lati corrispondenti congruenti, $AC$ e $CB_i$, e lo stesso angolo in $A$. L’angolo in $A$ non è compreso fra questi lati. I triangoli hanno $AB_1=1$ e $AB_2=9$, quindi non sono congruenti.

::grafico{assi=0 uguale=1 xmin=-1 xmax=10 ymin=-1.2 ymax=4 linee="0,0 9,0;0,0 5,3 1,0;5,3 9,0;5,0.24 5.24,0.24 5.24,0" segmenti="5,0,5,3" punti="0,0;1,0;5,0;9,0;5,3" etichette="-0.12,-0.43,A;1,-0.47,B_1;5,-0.44,H;9,-0.47,B_2;5,3.44,C" titolo="L’angolo in A è comune ai due triangoli"}
:::

## Somma degli angoli e angolo esterno

:::teorema{#esempi titolo="Un angolo piatto in ogni triangolo"}
Gli angoli interni di un triangolo hanno somma $180^\circ$.
$$
\alpha+\beta+\gamma=180^\circ.
$$
Una giustificazione consiste nel tracciare per un vertice la parallela al lato opposto. Le proprietà degli angoli alterni interni riportano i tre angoli su un unico angolo piatto. Queste relazioni tra rette parallele sono sviluppate nel capitolo successivo.

Se due angoli misurano $48^\circ$ e $67^\circ$, il terzo misura $180^\circ-48^\circ-67^\circ=65^\circ$. In un triangolo rettangolo, i due angoli acuti sono complementari.

Un **angolo esterno**, adiacente a un angolo interno e ottenuto prolungando un lato, è uguale alla somma dei due angoli interni non adiacenti. Se un angolo esterno misura $125^\circ$ e uno dei due interni non adiacenti misura $50^\circ$, l'altro misura $75^\circ$.

::grafico{assi=0 uguale=1 xmin=-1.5 xmax=5.5 ymin=-1 ymax=3 linee="0,0 4,0 1,2 0,0;-1,2 5,2" punti="0,0;4,0;1,2,pieno,C" etichette="-0.2,-0.35,A;4.2,-0.35,B" titolo="La retta per $C$ è parallela ad $AB$. Gli angoli del triangolo si ricompongono in un angolo piatto"}
:::

## Proprietà del triangolo isoscele

:::teorema{#problemi titolo="Dai lati congruenti agli angoli alla base"}
In un triangolo isoscele $ABC$ con $AB=AC$, gli angoli alla base $B$ e $C$ sono congruenti. Per dimostrarlo si traccia la bisettrice $AD$ dell'angolo al vertice, con $D$ sulla base $BC$.

I triangoli $ABD$ e $ACD$ hanno $AB=AC$ per ipotesi, $AD$ in comune e $\widehat{BAD}=\widehat{DAC}$ perché $AD$ è bisettrice. Sono quindi congruenti per LAL. Seguono l'uguaglianza degli angoli in $B$ e $C$ e l'uguaglianza $BD=DC$.

Anche gli angoli $\widehat{ADB}$ e $\widehat{ADC}$ sono congruenti. Poiché sono adiacenti, sommano $180^\circ$ e misurano entrambi $90^\circ$. La bisettrice relativa alla base è dunque anche **mediana** e **altezza**. Una mediana unisce un vertice al punto medio del lato opposto. Un'altezza è perpendicolare alla retta del lato opposto.

::grafico{assi=0 uguale=1 xmin=-3 xmax=3 ymin=-1 ymax=4 linee="-2,0 2,0 0,3 -2,0;0,0.25 0.25,0.25 0.25,0" segmenti="0,3,0,0" punti="0,3,pieno,A;-2,0;2,0,pieno,C;0,0" etichette="-2.25,-0.35,B;0,-0.35,D" titolo="Nel triangolo isoscele $AB=AC$ la bisettrice $AD$ è anche mediana e altezza"}

Se l'angolo al vertice misura $44^\circ$, ciascun angolo alla base misura $\dfrac{180^\circ-44^\circ}{2}=68^\circ$. Se invece un angolo alla base misura $52^\circ$, quello al vertice misura $180^\circ-2\cdot52^\circ=76^\circ$.
:::

## Quando tre lunghezze formano un triangolo

:::teorema{#disuguaglianza titolo="La disuguaglianza triangolare"}
In un triangolo ogni lato è minore della somma degli altri due. Con lati positivi di lunghezze $a$, $b$, $c$, assegnati $a$ e $b$, la condizione sul terzo lato è
$$
|a-b|<c<a+b.
$$
Le disuguaglianze sono strette perché l’uguaglianza darebbe vertici allineati. Per lati noti di $4$ e $7$ centimetri deve essere $3<c<11$ centimetri. La lunghezza $3$ non è ammessa, mentre $5$ è ammessa.

Per controllare tre lunghezze positive già assegnate basta verificare che la più grande sia minore della somma delle altre due. Per $3$, $4$, $8$ il controllo fallisce perché $8>3+4$.
:::

## Dal perimetro ai lati

:::esempio{#applicazioni titolo="Scegliere l'incognita"}
Un triangolo isoscele ha perimetro $32\,\mathrm{cm}$ e base $8\,\mathrm{cm}$. Indicando con $l$ ciascun lato obliquo,
$$
2l+8=32,\qquad 2l=24,\qquad l=12\,\mathrm{cm}.
$$
Il controllo del perimetro dà $12+12+8=32$. La condizione triangolare è soddisfatta, perché $8<12+12$ e $12<12+8$.

Nella scrittura $ABC\cong DEF$, i vertici in posizione corrispondente individuano i lati congruenti. Si ottengono così $AB=DE$, $BC=EF$ e $AC=DF$.
:::

## Costruire e controllare una dimostrazione

:::osservazione{#controlli titolo="Ipotesi, tesi, passaggi"}
Le **ipotesi** sono le informazioni assegnate. La **tesi** è l’affermazione da dimostrare. Nel problema isoscele l'ipotesi è $AB=AC$, mentre la tesi è $\widehat B=\widehat C$.

Ogni passaggio segue da una premessa già giustificata. Per esempio, se $AD$ è una bisettrice, allora divide l’angolo in due parti congruenti per definizione. L’uguaglianza di elementi corrispondenti si può invocare dopo aver dimostrato la congruenza dei triangoli.

Le misure calcolate si possono verificare controllando che gli angoli interni siano positivi e abbiano somma $180^\circ$ e che i lati rispettino la disuguaglianza triangolare. Una figura disegnata senza scala non fornisce misure mancanti.
:::
