---
titolo: "Geometria del piano e triangoli"
sommario: "Segmenti, angoli, congruenza e costruzione dei triangoli, con dimostrazioni e controesempi."
---

## Punti, rette e segmenti

:::definizione{#concetti titolo="A partire da due punti distinti"}

Una **retta** è una linea diritta che prosegue senza fine da entrambe le parti. I punti si indicano con lettere maiuscole. Per due punti distinti $A$ e $B$, cioè due punti che non coincidono, passa una sola retta, che si chiama retta $AB$.

Con gli stessi due punti si individuano anche:

- la **semiretta** di origine $A$ passante per $B$ è la parte della retta che comincia in $A$ e prosegue senza fine dalla parte di $B$. Il punto $A$ è l'**origine** della semiretta;
- il **segmento** $AB$ è la parte della retta formata da $A$, da $B$ e dai punti che stanno fra di essi. I punti $A$ e $B$ sono gli **estremi** del segmento.

La scrittura $AB$ indica il segmento e, in un'uguaglianza come $AB=6$, la sua lunghezza, che si misura per esempio in centimetri (simbolo $\mathrm{cm}$). La **distanza** fra due punti è la lunghezza del segmento che li unisce.

Tre o più punti sono **allineati** se appartengono alla stessa retta.

Un punto $M$ del segmento $AB$ lo divide nei tratti $AM$ e $MB$, e la lunghezza del segmento è la somma delle loro lunghezze:

$$
AB=AM+MB.
$$

Il **punto medio** di $AB$ è il punto $M$ del segmento per il quale $AM=MB$. Ciascun tratto è quindi la metà del segmento:

$$
AM=MB=\frac{AB}{2}.
$$

::grafico{assi=0 uguale=1 xmin=-0.8 xmax=8.8 ymin=-0.85 ymax=0.85 linee="0,0 8,0" punti="0,0;3,0;6,0;8,0" etichette="0,-0.44,A;3,-0.44,M;6,-0.44,B;8,-0.44,C;1.5,0.36,3;4.5,0.36,3;7,0.36,2" titolo="$M$ è il punto medio di $AB$ e $AC=AB+BC$"}

In figura $AB=6$ e $M$ è il punto medio di $AB$, quindi $AM=MB=\dfrac{6}{2}=3$. Il punto $B$ sta fra $A$ e $C$, quindi $AC=AB+BC=6+2=8$.

Sapere soltanto che $A,B,C$ sono allineati lascia aperto l'ordine dei punti sulla retta, da cui dipende la somma da scrivere. Se $C$ sta fra $A$ e $B$, vale $AB=AC+CB$. Con $AB=8$ e $AC=5$, se $C$ sta fra $A$ e $B$ si ha $BC=8-5=3$, mentre se $A$ sta fra $B$ e $C$ si ha $BC=8+5=13$.

Nella definizione di punto medio l'appartenenza al segmento è necessaria, perché anche punti fuori dalla retta $AB$ hanno la stessa distanza da $A$ e da $B$.

:::

## Relazioni tra angoli

::::teorema{#regole titolo="Angoli complementari, supplementari e opposti al vertice"}

Un **angolo** è la parte di piano compresa fra due semirette che hanno la stessa origine. Le due semirette sono i **lati** dell'angolo e l'origine comune è il **vertice**. L'**ampiezza** di un angolo misura quanto sono aperti i suoi lati e si esprime in gradi (simbolo $^\circ$).

Gli angoli si indicano con le lettere greche minuscole $\alpha$ (alfa), $\beta$ (beta), $\gamma$ (gamma), $\delta$ (delta). L'angolo di vertice $O$ con i lati che passano per $A$ e per $B$ si scrive $\widehat{AOB}$, con la lettera del vertice al centro. Due angoli sono **congruenti** se hanno la stessa ampiezza. Due segmenti sono congruenti se hanno la stessa lunghezza.

Gli angoli hanno un nome secondo l'ampiezza.

- Un angolo **acuto** è minore di $90^\circ$, per esempio $40^\circ$.
- Un angolo **retto** misura $90^\circ$.
- Un angolo **ottuso** è maggiore di $90^\circ$ e minore di $180^\circ$, per esempio $130^\circ$.
- Un angolo **piatto** misura $180^\circ$. I suoi lati sono **semirette opposte**, cioè due semirette con la stessa origine che insieme formano una retta.
- Un angolo **giro** misura $360^\circ$.

Fra due angoli valgono le relazioni seguenti.

- Due angoli sono **complementari** se la somma delle loro ampiezze è $90^\circ$. Gli angoli di $23^\circ$ e $67^\circ$ sono complementari, perché $23^\circ+67^\circ=90^\circ$.
- Due angoli sono **supplementari** se la somma delle loro ampiezze è $180^\circ$.
- Due angoli sono **consecutivi** se hanno lo stesso vertice e un lato in comune, e si trovano da parti opposte rispetto a quel lato.
- Due angoli sono **adiacenti** se sono consecutivi e i due lati non comuni sono semirette opposte. Insieme formano un angolo piatto, quindi due angoli adiacenti sono supplementari.
- Due rette **incidenti**, cioè due rette che si incontrano in un solo punto, formano quattro angoli attorno a quel punto. Due di questi angoli sono **opposti al vertice** se i lati dell'uno sono le semirette opposte ai lati dell'altro. Due angoli opposti al vertice sono congruenti.

Due rette sono **perpendicolari** se incontrandosi formano quattro angoli retti.

:::dimostrazione

Nella figura le due rette si incontrano in $O$. Gli angoli $\alpha$ e $\gamma$ sono opposti al vertice e l'angolo $\beta$ è adiacente a entrambi.

Gli angoli $\alpha$ e $\beta$ sono adiacenti, quindi $\alpha+\beta=180^\circ$. Anche $\beta$ e $\gamma$ sono adiacenti, quindi $\beta+\gamma=180^\circ$. Le due somme sono perciò uguali, $\alpha+\beta=\beta+\gamma$, e sottraendo $\beta$ a sinistra e a destra dell'uguale resta $\alpha=\gamma$.

Il ragionamento vale anche quando le due rette sono perpendicolari e tutti e quattro gli angoli misurano $90^\circ$.

:::

::grafico{assi=0 uguale=1 xmin=-3 xmax=3 ymin=-2.25 ymax=2.25 linee="-2.7,0 2.7,0;-2.4,-1.75 2.4,1.75" punti="0,0" etichette="1.35,0.43,α;-0.28,1.05,β;-1.35,-0.58,γ;0.3,-0.25,O" titolo="Gli angoli $\alpha$ e $\gamma$ sono supplementari di $\beta$"}

::::

:::esempio{titolo="Bisettrice e angoli adiacenti"}

La **bisettrice** di un angolo è la semiretta che ha origine nel vertice, è interna all'angolo e lo divide in due angoli congruenti. Se l'angolo misura $68^\circ$, ciascuna parte misura $\dfrac{68^\circ}{2}=34^\circ$.

Prolungando un lato dell'angolo di $68^\circ$ oltre il vertice si ottiene l'angolo adiacente, cioè il supplementare, che misura $180^\circ-68^\circ=112^\circ$. La sua bisettrice lo divide in due parti di $\dfrac{112^\circ}{2}=56^\circ$.

L'angolo fra le due bisettrici è formato dalle due metà vicine al lato comune, quindi misura $34^\circ+56^\circ=90^\circ$.

:::

## Triangoli e criteri di congruenza

:::definizione{titolo="Vertici e corrispondenza"}

Un **triangolo** è la figura formata da tre punti non allineati, i **vertici**, e dai tre segmenti che li uniscono, i **lati**. Il triangolo di vertici $A$, $B$, $C$ si scrive $ABC$. I suoi **angoli interni** hanno il vertice in $A$, in $B$ e in $C$. L'angolo in $A$ si scrive $\widehat A$ oppure $\widehat{BAC}$.

Ogni lato è **opposto** al vertice che non gli appartiene e all'angolo in quel vertice. Il lato $BC$ è opposto al vertice $A$. Il **perimetro** è la somma delle lunghezze dei tre lati. Un triangolo con i lati di $3$, $4$ e $5$ centimetri ha perimetro $3+4+5=12\,\mathrm{cm}$.

Rispetto ai lati, un triangolo è

- **scaleno** se i tre lati hanno lunghezze diverse, come $3$, $4$, $5$;
- **isoscele** se almeno due lati sono congruenti, come $5$, $5$, $6$;
- **equilatero** se tutti e tre i lati sono congruenti, come $4$, $4$, $4$. Un triangolo equilatero è quindi anche isoscele.

Rispetto agli angoli, un triangolo è

- **acutangolo** se tutti e tre gli angoli sono acuti;
- **rettangolo** se un angolo è retto. I due lati che formano l'angolo retto si chiamano **cateti** e il lato opposto all'angolo retto si chiama **ipotenusa**;
- **ottusangolo** se un angolo è ottuso.

Due triangoli sono **congruenti** se si possono sovrapporre in modo che coincidano punto per punto. Per sovrapporli si usano i **movimenti rigidi**, che non cambiano lunghezze e ampiezze: la traslazione (la figura scorre senza ruotare), la rotazione attorno a un punto e la riflessione rispetto a una retta, come in uno specchio. I lati e gli angoli che nella sovrapposizione coincidono si dicono **corrispondenti** e sono congruenti.

Il simbolo $\cong$ si legge «è congruente a». Nella scrittura $ABC\cong DEF$ l'ordine delle lettere indica quali vertici si sovrappongono. Il vertice $A$ corrisponde a $D$, $B$ a $E$ e $C$ a $F$. Di conseguenza il lato $AB$ corrisponde a $DE$, il lato $BC$ a $EF$ e il lato $AC$ a $DF$. La stessa congruenza si scrive anche $BCA\cong EFD$, perché l'ordine dei vertici è cambiato allo stesso modo nei due triangoli.

:::

::::teorema{#metodo titolo="Dati sufficienti per la congruenza"}

Un triangolo ha sei elementi, tre lati e tre angoli. Un **criterio di congruenza** è un gruppo di tre uguaglianze fra elementi corrispondenti che basta per concludere che due triangoli sono congruenti. Ciascuno dei tre criteri ha una sigla in cui L sta per lato e A sta per angolo. L'ordine delle lettere indica la posizione degli elementi. In LAL l'angolo sta fra i due lati e in ALA il lato sta fra i due angoli.

| Criterio | Dati da verificare |
|---|---|
| Lato-angolo-lato, LAL | Due lati e l'angolo compreso tra i due lati |
| Angolo-lato-angolo, ALA | Un lato e i due angoli ai suoi estremi |
| Lato-lato-lato, LLL | Tutti e tre i lati |

L'angolo **compreso** fra due lati è l'angolo che ha il vertice nel punto comune ai due lati. Nel triangolo $ABC$ l'angolo compreso fra $AB$ e $AC$ è l'angolo in $A$.

Le uguaglianze riguardano sempre elementi corrispondenti. Una volta stabilita la congruenza, anche gli altri tre elementi corrispondenti sono congruenti.

:::dimostrazione

L'idea è mostrare che i dati di ciascun criterio lasciano una sola posizione possibile per il terzo vertice.

Si sovrappone un lato del primo triangolo al lato corrispondente del secondo, che ha la stessa lunghezza. La retta di questo lato divide il piano in due parti, dette **semipiani**. Si portano i terzi vertici dei due triangoli nello stesso semipiano, riflettendo uno dei triangoli rispetto a quella retta se occorre.

- **LAL.** L'angolo compreso fissa la semiretta, uscente da un estremo del lato sovrapposto, sulla quale si trova il secondo lato. Su una semiretta c'è un solo punto a una data distanza dall'origine. La lunghezza del secondo lato fissa quindi il terzo vertice.
- **ALA.** I due angoli agli estremi del lato sovrapposto fissano due semirette, una uscente da ciascun estremo. Due semirette che stanno su rette diverse hanno al più un punto in comune, cioè uno oppure nessuno. Un punto comune esiste, perché i triangoli esistono, e quel punto è il terzo vertice.
- **LLL.** Le lunghezze degli altri due lati sono le distanze del terzo vertice dai due estremi del lato sovrapposto. La **circonferenza** di centro $P$ e raggio $r$ è formata dai punti che hanno distanza $r$ da $P$. Il terzo vertice appartiene quindi a due circonferenze, che hanno per centri i due estremi e per raggi le due lunghezze. Due circonferenze di questo tipo hanno al più un punto comune in ciascun semipiano. I due punti, uno per semipiano, sono speculari rispetto alla retta del lato, quindi i due triangoli che si ottengono sono congruenti.

In tutti e tre i casi i terzi vertici coincidono, quindi i due triangoli sono sovrapposti e perciò congruenti.

:::

::::

:::esempio{titolo="Associare lati e vertici"}

Nei due triangoli della prima figura $AB=DE=3$, $AC=DF=2$ e gli angoli in $A$ e in $D$ sono retti. Ciascuno dei due angoli retti è compreso fra i due lati dati, quindi per il criterio LAL si ha $ABC\cong DEF$. I lati $BC$ ed $EF$ uniscono vertici corrispondenti, perciò $BC=EF$, anche senza conoscere la loro misura.

::grafico{assi=0 uguale=1 xmin=-0.9 xmax=9 ymin=-0.85 ymax=2.9 linee="0,0 3,0 0,2 0,0;5,0 8,0 5,2 5,0;0,0.25 0.25,0.25 0.25,0;5,0.25 5.25,0.25 5.25,0" punti="0,0;3,0;0,2;5,0;8,0;5,2" etichette="-0.15,-0.42,A;3.1,-0.42,B;-0.18,2.35,C;4.85,-0.42,D;8.1,-0.42,E;4.82,2.35,F;1.5,-0.42,3;6.5,-0.42,3;-0.45,1,2;4.55,1,2" titolo="Gli angoli retti sono compresi fra i due lati assegnati"}

Nella seconda figura si costruisce un triangolo con il lato $AB=6$ e gli altri due lati di lunghezza $5$. Il terzo vertice ha distanza $5$ da $A$ e da $B$, quindi appartiene alle due circonferenze di raggio $5$ che hanno centro in $A$ e in $B$. Di esse la figura mostra solo due archi. I punti comuni sono due, $C$ sopra la retta $AB$ e $C'$ (si legge «C primo») sotto.

I triangoli $ABC$ e $ABC'$ hanno i lati di lunghezze $6$, $5$ e $5$. Per il criterio LLL sono congruenti. I due triangoli sono speculari rispetto alla retta $AB$, cioè si sovrappongono con una riflessione rispetto a quella retta.

::grafico{assi=0 uguale=1 xmin=-0.7 xmax=6.75 ymin=-4.8 ymax=4.8 curve="5*cos(t),5*sin(t),-1.04,1.04;6+5*cos(t),5*sin(t),2.1,4.18" linee="0,0 6,0 3,4 0,0;0,0 3,-4 6,0" punti="0,0;6,0;3,4;3,-4" etichette="-0.25,0.04,A;6.25,0.04,B;3,4.4,C;3,-4.55,C′" titolo="Per il criterio LLL i due punti di intersezione producono triangoli congruenti"}

:::

:::attenzione{titolo="Due lati e un angolo non compreso"}

Due lati e un angolo che *non* è compreso fra di essi non bastano per la congruenza. Lo mostra un **controesempio**, cioè un caso in cui i dati sono uguali e la conclusione è falsa.

Su una semiretta di origine $A$ si prendono, in quest'ordine, i punti $B_1$, $H$, $B_2$ con $AH=5$ e $HB_1=HB_2=4$. Si ha quindi $AB_1=5-4=1$ e $AB_2=5+4=9$. Sulla perpendicolare alla semiretta nel punto $H$ si prende un punto $C$ con $HC=3$.

I triangoli $HB_1C$ e $HB_2C$ hanno il lato $HC$ in comune, i lati $HB_1$ e $HB_2$ congruenti e gli angoli in $H$ retti. Ciascun angolo retto è compreso fra i due lati considerati. Per il criterio LAL i due triangoli sono congruenti, quindi $CB_1=CB_2$.

Si confrontano ora i triangoli $AB_1C$ e $AB_2C$. Hanno il lato $AC$ in comune, i lati $CB_1$ e $CB_2$ congruenti e l'angolo in $A$ in comune. I due lati uguali si incontrano però nel vertice $C$, quindi l'angolo in $A$ non è l'angolo compreso e il criterio LAL non si applica. I terzi lati sono diversi, $AB_1=1$ e $AB_2=9$, perciò i due triangoli non sono congruenti.

::grafico{assi=0 uguale=1 xmin=-0.8 xmax=9.9 ymin=-0.85 ymax=3.8 linee="0,0 9,0;0,0 5,3 1,0;5,3 9,0;5,0.23 5.23,0.23 5.23,0" segmenti="5,0,5,3" punti="0,0;1,0;5,0;9,0;5,3" etichette="-0.14,-0.4,A;1,-0.47,B_1;5,-0.44,H;9,-0.47,B_2;5,3.36,C" titolo="Le due scelte per $B$ danno basi diverse con lo stesso angolo in $A$"}

Anche tre angoli uguali non bastano. Due triangoli equilateri di lato $3$ e di lato $6$ hanno tutti gli angoli corrispondenti della stessa ampiezza e perimetri diversi, $9$ e $18$. I tre angoli fissano la forma del triangolo e lasciano libera la sua grandezza.

:::

## Somma degli angoli e angolo esterno

::::teorema{#esempi titolo="Un angolo piatto in ogni triangolo"}

In ogni triangolo la somma dei tre angoli interni è $180^\circ$, cioè un angolo piatto. Se gli angoli interni sono $\alpha$, $\beta$ e $\gamma$, vale

$$
\alpha+\beta+\gamma=180^\circ.
$$

Ogni angolo interno ha ampiezza maggiore di $0^\circ$.

Un **angolo esterno** di un triangolo è l'angolo formato da un lato e dal prolungamento di un altro lato oltre il vertice comune. È adiacente all'angolo interno che ha lo stesso vertice. Ogni angolo esterno è uguale alla somma dei due angoli interni che non gli sono adiacenti. Nella seconda figura l'angolo esterno in $B$ è indicato con la lettera greca $\varepsilon$ (epsilon) e vale

$$
\varepsilon=\alpha+\gamma.
$$

:::dimostrazione

Due rette sono **parallele** se stanno nello stesso piano e non si incontrano. Quando una terza retta taglia due rette parallele, due angoli che stanno fra le parallele, da parti opposte rispetto alla terza retta e con vertici diversi, si chiamano **alterni interni** e sono congruenti.

Nella prima figura si traccia per $C$ la retta parallela al lato $AB$. La retta $AC$ taglia le due parallele, e l'angolo $\alpha$ in $A$ e l'angolo in $C$ fra la parallela e $AC$, a sinistra di $AC$, sono alterni interni. Questo angolo misura quindi $\alpha$. Allo stesso modo, con la retta $BC$, l'angolo in $C$ fra la parallela e $BC$, a destra di $BC$, misura $\beta$.

Sotto la parallela, attorno a $C$, i tre angoli $\alpha$, $\gamma$ e $\beta$ stanno uno accanto all'altro e formano l'angolo piatto con il vertice in $C$ e i lati sulla parallela. Perciò $\alpha+\gamma+\beta=180^\circ$.

Per l'angolo esterno, nella seconda figura il lato $AB$ è prolungato oltre $B$ fino a $D$. L'angolo esterno $\varepsilon=\widehat{CBD}$ e l'angolo interno $\beta$ sono adiacenti, quindi $\varepsilon+\beta=180^\circ$, cioè $\varepsilon=180^\circ-\beta$. Dalla somma degli angoli interni si ricava $\alpha+\gamma=180^\circ-\beta$. Le due espressioni valgono entrambe $180^\circ-\beta$, perciò $\varepsilon=\alpha+\gamma$.

:::

::grafico{assi=0 uguale=1 xmin=-1.6 xmax=5.5 ymin=-0.8 ymax=2.9 linee="0,0 4,0 1,2 0,0;-1.2,2 5.15,2" punti="0,0;4,0;1,2" etichette="-0.12,-0.4,A;4.18,-0.4,B;1,2.39,C;0.58,0.28,α;3.12,0.19,β;0.35,1.62,α;1.23,1.48,γ;2.25,1.68,β" titolo="Gli angoli $\alpha$, $\gamma$ e $\beta$ formano un angolo piatto in $C$"}

::grafico{assi=0 uguale=1 xmin=-0.65 xmax=6.4 ymin=-0.75 ymax=2.65 linee="0,0 6,0;0,0 1.5,2 4,0" punti="0,0;4,0;1.5,2;6,0" etichette="-0.13,-0.38,A;4,-0.38,B;1.46,2.36,C;6,-0.38,D;0.63,0.29,α;3.2,0.2,β;1.5,1.43,γ;4.37,0.49,ε" titolo="Il prolungamento fino a $D$ forma l’angolo esterno $\varepsilon=\alpha+\gamma$"}

::::

:::esempio{titolo="Calcolare e controllare il terzo angolo"}

Di un triangolo sono noti due angoli interni, di $48^\circ$ e $67^\circ$. La loro somma è $48^\circ+67^\circ=115^\circ$. Il terzo angolo è ciò che manca per arrivare a $180^\circ$:

$$
180^\circ-115^\circ=65^\circ.
$$

I tre angoli, $48^\circ$, $67^\circ$ e $65^\circ$, sono tutti minori di $90^\circ$, quindi il triangolo è acutangolo.

In un triangolo rettangolo l'angolo retto misura $90^\circ$, quindi agli altri due angoli restano $180^\circ-90^\circ=90^\circ$. I due angoli acuti di un triangolo rettangolo sono perciò complementari. Se uno misura $31^\circ$, l'altro misura $90^\circ-31^\circ=59^\circ$.

In un triangolo $ABC$ l'angolo esterno in $B$ misura $124^\circ$ e l'angolo interno in $A$ misura $46^\circ$. L'angolo interno in $B$ è adiacente all'angolo esterno, quindi misura $180^\circ-124^\circ=56^\circ$. L'angolo esterno in $B$ è la somma degli angoli interni in $A$ e in $C$, quindi l'angolo in $C$ misura $124^\circ-46^\circ=78^\circ$. Come controllo, la somma dei tre angoli interni è $46^\circ+56^\circ+78^\circ=180^\circ$.

:::

## Mediana, altezza e bisettrice

:::definizione{#segmenti-triangolo titolo="Tre segmenti dal medesimo vertice"}

Da ogni vertice di un triangolo partono tre segmenti con un nome. Per il vertice $A$ del triangolo $ABC$ sono:

- La **mediana** è il segmento che unisce $A$ al punto medio $M$ del lato opposto $BC$.
- L'**altezza** è il segmento che parte da $A$ e arriva sulla retta $BC$ formando con essa un angolo retto. Il punto $H$ in cui arriva si chiama **piede** dell'altezza.
- La **bisettrice** dell'angolo in $A$ incontra il lato $BC$ in un punto $D$, e i due angoli $\widehat{BAD}$ e $\widehat{DAC}$ sono congruenti. Con la parola bisettrice del triangolo si indica anche il segmento $AD$.

Ciascuno di questi segmenti si dice *relativo* al lato $BC$, cioè al lato su cui arriva.

::grafico{assi=0 uguale=1 xmin=-1.75 xmax=5.65 ymin=-0.85 ymax=3.25 linee="-1,2.6 0,0 5,0 -1,2.6 2.5,0;-1,0 0,0;-1,0.24 -0.76,0.24 -0.76,0" segmenti="-1,2.6,-1,0" punti="-1,2.6;-1,0;0,0;2.5,0;5,0" etichette="-1.14,2.97,A;-1.06,-0.43,H;-0.03,-0.43,B;2.5,-0.43,M;5.12,-0.43,C" titolo="In questo triangolo $AM$ arriva al punto medio e l’altezza $AH$ è esterna"}

Nel triangolo della figura $BC=5$. Il punto $M$ è il punto medio di $BC$, quindi $BM=MC=2{,}5$ e $AM$ è la mediana. L'angolo in $B$ è ottuso, perciò la perpendicolare condotta da $A$ incontra la retta $BC$ sul prolungamento del lato oltre $B$, e l'altezza $AH$ è esterna al triangolo. Il piede sta invece sul lato $BC$ quando gli angoli in $B$ e in $C$ sono acuti. Se l'angolo in $B$ è retto, il piede coincide con $B$ e l'altezza è il cateto $AB$.

Ciascun segmento si riconosce da un dato diverso.

- L'uguaglianza $BM=MC$, con $M$ sul lato $BC$, indica che $AM$ è la mediana.
- Un angolo retto fra il segmento e la retta $BC$ indica l'altezza.
- L'uguaglianza $\widehat{BAD}=\widehat{DAC}$, fra gli angoli in $A$, indica la bisettrice. Gli angoli che $AD$ forma con $BC$ in $D$ servono invece a riconoscere un'altezza.

:::

## Il triangolo isoscele

::::teorema{#problemi titolo="Lati uguali, angoli alla base e segmento dal vertice"}

In un triangolo isoscele i due lati congruenti si chiamano **lati obliqui** e il terzo lato si chiama **base**. L'**angolo al vertice** è l'angolo compreso fra i due lati obliqui. Gli **angoli alla base** sono gli altri due, che hanno il vertice negli estremi della base.

Se nel triangolo $ABC$ si ha $AB=AC$, la base è $BC$ e valgono due proprietà.

- Gli angoli alla base, cioè gli angoli in $B$ e in $C$, sono congruenti.
- La bisettrice dell'angolo al vertice $A$ è anche mediana e altezza relativa alla base.

Nel triangolo della figura $BC=4$ e la bisettrice $AD$ arriva nel punto medio della base, con $BD=DC=2$, formando un angolo retto.

:::dimostrazione

Si traccia la bisettrice dell'angolo in $A$ e si chiama $D$ il punto in cui incontra il lato $BC$. Nei due triangoli $ABD$ e $ACD$ valgono tre uguaglianze.

- $AB=AC$ per ipotesi, cioè perché lo afferma l'enunciato.
- $\widehat{BAD}=\widehat{DAC}$, perché $AD$ è la bisettrice.
- Il lato $AD$ è in comune.

Gli angoli $\widehat{BAD}$ e $\widehat{DAC}$ sono compresi fra questi lati, quindi per il criterio LAL si ha $ABD\cong ACD$, con $A$ che corrisponde ad $A$, $B$ a $C$ e $D$ a $D$. Gli elementi corrispondenti sono congruenti, perciò

$$
\widehat{ABD}=\widehat{ACD},\qquad BD=DC,\qquad \widehat{ADB}=\widehat{ADC}.
$$

La prima uguaglianza dice che gli angoli alla base sono congruenti. Per la seconda, $D$ è il punto medio di $BC$, quindi $AD$ è la mediana. Nella terza, i due angoli in $D$ sono adiacenti e perciò la loro somma è $180^\circ$. Essendo congruenti, ciascuno misura $\dfrac{180^\circ}{2}=90^\circ$. Il segmento $AD$ è quindi perpendicolare a $BC$, cioè è l'altezza.

:::

::grafico{assi=0 uguale=1 xmin=-2.8 xmax=2.8 ymin=-0.95 ymax=3.7 linee="-2,0 2,0 0,3 -2,0;0,3 0,0;0,0.24 0.24,0.24 0.24,0;-1,-0.1 -1,0.1;1,-0.1 1,0.1" punti="0,3;-2,0;2,0;0,0" etichette="0,3.36,A;-2.14,-0.38,B;2.14,-0.38,C;0,-0.43,D" titolo="La bisettrice $AD$ è anche altezza e mediana"}

::::

::::teorema{#isoscele-converso titolo="Dagli angoli alla base ai lati"}

Se in un triangolo $ABC$ gli angoli in $B$ e in $C$ sono congruenti, allora $AB=AC$. Il triangolo è quindi isoscele con base $BC$.

Questo teorema è l'inverso del teorema sugli angoli alla base e serve a riconoscere un triangolo isoscele dagli angoli. Un triangolo con gli angoli di $70^\circ$, $70^\circ$ e $40^\circ$ ha congruenti i due lati opposti agli angoli di $70^\circ$.

:::dimostrazione

Si confronta il triangolo con se stesso, letto con i vertici $B$ e $C$ scambiati, cioè $ABC$ con $ACB$. Il simbolo $\leftrightarrow$ si legge «corrisponde a». Le corrispondenze sono $A\leftrightarrow A$, $B\leftrightarrow C$ e $C\leftrightarrow B$.

- Il lato $BC$ del primo corrisponde al lato $CB$ del secondo. È lo stesso segmento, quindi le lunghezze sono uguali.
- L'angolo in $B$ del primo corrisponde all'angolo in $C$ del secondo. I due angoli sono congruenti per ipotesi.
- L'angolo in $C$ del primo corrisponde all'angolo in $B$ del secondo. Anche questi sono congruenti per ipotesi.

Sono uguali un lato e i due angoli ai suoi estremi, quindi il criterio ALA dà $ABC\cong ACB$. In questa congruenza il lato $AB$ del primo triangolo corrisponde al lato $AC$ del secondo, quindi $AB=AC$.

:::

::::

:::esempio{titolo="Quale angolo si ripete"}

Se l'angolo al vertice misura $44^\circ$, ciascun angolo alla base misura

$$
\frac{180^\circ-44^\circ}{2}=\frac{136^\circ}{2}=68^\circ.
$$

Se invece si conosce un angolo alla base di $52^\circ$, anche l'altro angolo alla base misura $52^\circ$ e l'angolo al vertice misura

$$
180^\circ-2\cdot52^\circ=180^\circ-104^\circ=76^\circ.
$$

Se di un triangolo isoscele si conosce un angolo di $40^\circ$ senza sapere quale sia, gli angoli sono $40^\circ$, $70^\circ$, $70^\circ$ quando quell'angolo è al vertice e $40^\circ$, $40^\circ$, $100^\circ$ quando è alla base.

Un angolo alla base di un triangolo isoscele è sempre acuto. Due angoli alla base di $90^\circ$ o più avrebbero somma almeno $180^\circ$, e per l'angolo al vertice resterebbe un'ampiezza nulla o negativa.

:::

## Costruire un triangolo da tre lunghezze

::::teorema{#disuguaglianza titolo="La disuguaglianza triangolare"}

In ogni triangolo ciascun lato è minore della somma degli altri due e maggiore della loro differenza. Questa proprietà si chiama **disuguaglianza triangolare**.

Siano $a$ e $b$ le lunghezze di due lati, entrambe positive. Una lunghezza $c$ è il terzo lato di un triangolo se e solo se

$$
|a-b|<c<a+b.
$$

Il simbolo $|a-b|$ è il **valore assoluto** di $a-b$ e indica la differenza fra la lunghezza maggiore e la minore, per esempio $|3-5|=5-3=2$. L'espressione «se e solo se» indica che il triangolo esiste quando $c$ soddisfa la doppia disuguaglianza e non esiste negli altri casi.

:::dimostrazione

Per prima cosa si mostra che in un triangolo valgono le disuguaglianze. Il percorso più breve fra due punti è il segmento che li unisce. Il lato di lunghezza $c$ unisce due vertici, mentre il percorso fra gli stessi vertici che passa per il terzo vertice è formato dagli altri due lati ed è lungo $a+b$. Il terzo vertice è fuori dalla retta del lato, quindi questo percorso è più lungo del lato e si ha $c<a+b$. Lo stesso ragionamento sugli altri due lati dà $a<b+c$ e $b<a+c$. Sottraendo $b$ a sinistra e a destra in $a<b+c$ si ottiene $a-b<c$, e sottraendo $a$ in $b<a+c$ si ottiene $b-a<c$. Uno dei due numeri $a-b$ e $b-a$ è $|a-b|$, quindi $|a-b|<c$.

Poi si mostra come si costruisce il triangolo. Si disegna un segmento $AB$ di lunghezza $c$ e si tracciano due circonferenze, una di centro $A$ e raggio $a$, l'altra di centro $B$ e raggio $b$. Il terzo vertice è un punto comune alle due circonferenze. Il numero di punti comuni dipende dalla distanza $c$ fra i centri.

- Se $|a-b|<c<a+b$, le circonferenze si tagliano in due punti, uno in ciascun semipiano rispetto alla retta $AB$. Ognuno dei due punti è un terzo vertice possibile. Per il criterio LLL i due triangoli che si ottengono sono congruenti.
- Se $c=a+b$ oppure $c=|a-b|$, le circonferenze si toccano in un solo punto, detto punto di tangenza, che si trova sulla retta $AB$. In questo caso si ottengono tre punti allineati e nessun triangolo. La figura mostra il caso $a=5$, $b=3$ e $c=8=5+3$.
- Negli altri casi le circonferenze non hanno punti comuni.

:::

::grafico{assi=0 uguale=1 xmin=-0.7 xmax=8.7 ymin=-1.75 ymax=1.8 curve="5*cos(t),5*sin(t),-0.30,0.30;8+3*cos(t),3*sin(t),2.66,3.62" linee="0,0 8,0" punti="0,0;5,0;8,0" etichette="0,-0.35,A;5,-0.43,C;8,-0.35,B;2.5,0.28,5;6.5,0.28,3" titolo="Con $AB=5+3$ gli archi si toccano in un punto allineato"}

::::

:::esempio{titolo="Controlli sui dati"}

Due lati misurano $4$ e $7$ centimetri. Si ha $|4-7|=3$ e $4+7=11$, quindi la condizione sul terzo lato è $3<c<11$. I valori di $c$ maggiori di $3$ e minori di $11$ formano un **intervallo**, che si scrive anche $\left(3,\,11\right)$. I valori $3$ e $11$ sono gli estremi dell'intervallo e sono esclusi.

Le lunghezze $5$ e $10$ centimetri soddisfano la condizione. Con $c=3$ si ha $7=4+3$. Il lato più lungo sarebbe uguale alla somma degli altri due, quindi i tre punti sarebbero allineati.

Se si conoscono già tre lunghezze positive, basta un solo confronto, quello fra la lunghezza maggiore e la somma delle altre due. Le disuguaglianze per le due lunghezze minori sono vere in ogni caso, perché a destra compare la lunghezza maggiore sommata a un numero positivo.

:::

## Dal perimetro ai lati

:::esempio{#applicazioni titolo="Distinguere la base dai lati congruenti"}

Un triangolo isoscele ha perimetro $32\,\mathrm{cm}$ e base $8\,\mathrm{cm}$. Si indica con $l$ la lunghezza in centimetri di ciascuno dei due lati obliqui. Il perimetro è la somma dei tre lati, quindi $l+l+8=32$:

$$
\begin{aligned}
2l+8&=32,\\[6pt]
2l&=32-8=24,\\[6pt]
l&=\frac{24}{2}=12.
\end{aligned}
$$

Nel secondo passaggio si sottrae $8$ a sinistra e a destra dell'uguale. Nel terzo si divide per $2$. I lati misurano $12$, $12$ e $8$ centimetri. La disuguaglianza triangolare è soddisfatta, perché il lato maggiore verifica $12<12+8$. Si sa che il lato di $8\,\mathrm{cm}$ è la base, quindi l'equazione da scrivere è una sola.

Un altro triangolo isoscele ha perimetro $36\,\mathrm{cm}$ e un lato di $10\,\mathrm{cm}$, senza sapere se quel lato è la base. I casi sono due.

- Se il lato di $10\,\mathrm{cm}$ è la base, da $2l+10=36$ si ricava $2l=26$ e ciascun lato obliquo misura $l=\dfrac{36-10}{2}=13\,\mathrm{cm}$. I lati sono $13$, $13$ e $10$, con $13<13+10$.
- Se il lato di $10\,\mathrm{cm}$ è un lato obliquo, anche l'altro lato obliquo misura $10\,\mathrm{cm}$ e la base misura $36-10-10=16\,\mathrm{cm}$. I lati sono $10$, $10$ e $16$, con $16<10+10$.

Entrambe le terne soddisfano la disuguaglianza triangolare, quindi il problema ha due soluzioni. La disuguaglianza triangolare stabilisce quali soluzioni dell'equazione corrispondono a un triangolo che si costruisce davvero.

:::

## Costruire e controllare una dimostrazione

:::esempio{#controlli titolo="Ipotesi, tesi e uso della congruenza"}

Una **dimostrazione** è un ragionamento che parte da ciò che è noto e arriva, un passo alla volta, a ciò che si vuole provare. L'**ipotesi** è ciò che l'enunciato dà per noto. La **tesi** è ciò che si vuole dimostrare. Ogni passo è giustificato da un'ipotesi, da una definizione o da un teorema già dimostrato.

Nell'esempio l'ipotesi è che i segmenti $AB$ e $CD$ stanno su due rette diverse e si incontrano nel punto $M$, che è il punto medio di entrambi. La tesi è $AC=BD$.

1. $M$ è il punto medio di $AB$, quindi $AM=MB$ per la definizione di punto medio.
2. $M$ è il punto medio di $CD$, quindi $CM=MD$ per la stessa definizione.
3. Le rette $AB$ e $CD$ sono incidenti in $M$. Gli angoli $\widehat{AMC}$ e $\widehat{BMD}$ sono opposti al vertice, quindi $\widehat{AMC}=\widehat{BMD}$.
4. Nel triangolo $AMC$ l'angolo $\widehat{AMC}$ è compreso fra i lati $AM$ e $CM$. Nel triangolo $BMD$ l'angolo $\widehat{BMD}$ è compreso fra i lati $MB$ e $MD$. Per il criterio LAL si ha $AMC\cong BMD$, con $A$ che corrisponde a $B$, $M$ a $M$ e $C$ a $D$.
5. I lati $AC$ e $BD$ uniscono vertici corrispondenti, quindi $AC=BD$.

::grafico{assi=0 uguale=1 xmin=-2.8 xmax=2.8 ymin=-3.8 ymax=3.8 linee="-2,-1 2,1;1,-3 -1,3;-2,-1 1,-3;2,1 -1,3" punti="-2,-1;2,1;1,-3;-1,3;0,0" etichette="-2.28,-1.08,A;2.28,1.12,B;1.05,-3.43,C;-1.03,3.43,D;0.4,-0.19,M" titolo="Gli angoli in $M$ usati nel criterio LAL sono opposti al vertice"}

Il criterio LAL nel passo 4 richiede tutte e tre le uguaglianze dei passi 1, 2 e 3. Se $M$ fosse soltanto il punto d'intersezione dei due segmenti, gli angoli opposti al vertice resterebbero congruenti, mentre le uguaglianze $AM=MB$ e $CM=MD$ avrebbero bisogno di altri dati.

In questo controllo, passo per passo, si distinguono le informazioni date dall'ipotesi dalle proprietà che la dimostrazione ha ancora da provare.

:::
