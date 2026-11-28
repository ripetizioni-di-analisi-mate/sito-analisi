---
titolo: "Pitagora e teoremi di Euclide"
sommario: "Teorema di Pitagora e inverso, diagonali, proiezioni dei cateti, teoremi di Euclide e applicazioni alle distanze."
---

## Cateti e ipotenusa

:::definizione{#triangolo titolo="Partire dall'angolo retto"}

Un **triangolo rettangolo** è un triangolo con un angolo di $90^\circ$, cioè un **angolo retto**; nei disegni l'angolo retto si segna con un piccolo quadrato. I due lati che formano l'angolo retto sono i **cateti**. Il lato opposto all'angolo retto è l'**ipotenusa**. Se l'angolo retto è in $A$, in questo capitolo si scrive $a=AB$ e $b=AC$ per i cateti e $c=BC$ per l'ipotenusa. Perciò $c$ indica sempre il lato che non ha $A$ come estremo. Nel disegno l'ipotenusa può essere obliqua, orizzontale o verticale, a seconda di come è girato il triangolo.

L'angolo retto si riconosce in tre modi:

- è dichiarato nel testo del problema;
- segue dal fatto che due rette sono **perpendicolari**, cioè si incontrano formando angoli retti;
- si ricava dalle misure dei tre lati, con il teorema inverso di Pitagora.

Le relazioni fra i lati di questo capitolo valgono soltanto nei triangoli rettangoli, quindi in ogni problema il primo passo è individuare l'angolo retto.

::grafico{assi=0 uguale=1 xmin=-0.85 xmax=5.65 ymin=-0.82 ymax=4.61 poligoni="0,0 5,0 0,3.75" linee="0.28,0 0.28,0.28 0,0.28" punti="0,0;5,0;0,3.75" etichette="-0.23,-0.38,A;5.19,-0.37,B;-0.2,4.13,C;2.5,-0.39,a;-0.42,1.85,b;2.67,2.25,c" titolo="Il segno in $A$ individua i cateti e il lato opposto $BC$"}

:::

## Il teorema di Pitagora

::::teorema{#pitagora titolo="Una relazione fra quadrati"}

Se il triangolo è rettangolo, il quadrato dell'ipotenusa è uguale alla somma dei quadrati dei cateti.

$$
c^2=a^2+b^2.
$$

Il **quadrato** di una lunghezza è la lunghezza moltiplicata per se stessa ($c^2=c\cdot c$) ed è l'area del quadrato che ha quel lato. Poiché $a^2$ e $b^2$ sono positivi, $c^2$ è maggiore sia di $a^2$ sia di $b^2$; quindi l'ipotenusa è il lato più lungo del triangolo rettangolo.

:::dimostrazione

Si costruisce un quadrato di lato $a+b$ e in ciascuno dei suoi quattro angoli si mette una copia del triangolo, in modo che ogni lato del quadrato grande sia diviso in un tratto $a$ e un tratto $b$. Al centro resta un quadrilatero, e ciascuno dei suoi lati è un'ipotenusa di lunghezza $c$.

La somma degli angoli di un triangolo è $180^\circ$, quindi i due angoli acuti di un triangolo rettangolo insieme misurano $180^\circ-90^\circ=90^\circ$. In ogni vertice del quadrilatero centrale, sul lato del quadrato grande, si forma un angolo piatto di $180^\circ$, composto da un angolo acuto di un triangolo, dall'altro angolo acuto del triangolo vicino e dall'angolo del quadrilatero. L'angolo del quadrilatero misura perciò $180^\circ-90^\circ=90^\circ$. Il quadrilatero centrale ha quattro lati uguali a $c$ e quattro angoli retti, quindi è un quadrato di lato $c$ e la sua area è $c^2$.

::grafico{assi=0 uguale=1 xmin=-0.65 xmax=7.62 ymin=-0.66 ymax=7.67 poligoni="0,0 4,0 0,3;4,0 7,0 7,4;7,4 7,7 3,7;3,7 0,7 0,3" linee="4,0 7,4 3,7 0,3 4,0" etichette="2,-0.39,a;5.5,-0.39,b;4.95,2.15,c" titolo="Il quadrato centrale rimane dopo aver tolto i quattro triangoli"}

L'area del quadrato centrale è l'area del quadrato grande, $(a+b)^2$, meno l'area dei quattro triangoli colorati. Ogni triangolo ha i cateti come base e altezza, quindi ha area $\dfrac{ab}{2}$. Con lo sviluppo del quadrato di un binomio, $(a+b)^2=a^2+2ab+b^2$, si ottiene

$$
\begin{aligned}
c^2&=(a+b)^2-4\cdot\dfrac{ab}{2}\\[6pt]
&=a^2+2ab+b^2-2ab\\[6pt]
&=a^2+b^2 .
\end{aligned}
$$

:::

::::

:::esempio{titolo="Trovare il lato giusto"}

Con cateti di $6$ cm e $8$ cm l'incognita è l'ipotenusa, quindi si sommano i quadrati e si estrae la radice:

$$
c=\sqrt{6^2+8^2}=\sqrt{36+64}=\sqrt{100}=10\,\mathrm{cm}.
$$

Il valore $10$ cm supera entrambi i cateti. Se i dati sono invece $c=13$ cm e $a=5$ cm, l'incognita è un cateto. Si sottrae $a^2$ da entrambi i membri (le due parti dell'uguaglianza) di $c^2=a^2+b^2$ e si ottiene $b^2=c^2-a^2$:

$$
b=\sqrt{13^2-5^2}=\sqrt{169-25}=\sqrt{144}=12\,\mathrm{cm}.
$$

Il numero sotto il segno di radice si chiama **radicando**. In questo secondo calcolo il radicando deve essere positivo, perché il cateto cercato ha lunghezza positiva; questo accade perché l'ipotenusa è più lunga del cateto noto.

I numeri sotto la radice sono misure al quadrato. Con i due lati noti in centimetri, il radicando è in centimetri quadrati ($\mathrm{cm}^2$) e il risultato in centimetri. Le somme e le differenze si eseguono sui quadrati, poi si prende la radice positiva. La somma diretta dei lati, $6+8=14$ cm, è la lunghezza del percorso lungo i due cateti ed è maggiore dell'ipotenusa, lunga $10$ cm.

:::

## Il teorema inverso

::::teorema{#inverso titolo="Dalle tre lunghezze all'angolo retto"}

Il teorema di Pitagora parte dall'angolo retto e arriva a una relazione fra i lati. Il **teorema inverso** percorre la strada opposta: dalle misure dei lati ricava l'angolo retto.

Se le tre lunghezze positive $a,b,c$ formano un triangolo e $c^2=a^2+b^2$, quel triangolo è rettangolo con angolo retto opposto al lato $c$.

:::dimostrazione

Si costruisce un secondo triangolo con due lati lunghi $a$ e $b$ posti su due semirette perpendicolari, così che formino un angolo retto. Questo triangolo è rettangolo, quindi per il teorema di Pitagora il suo terzo lato misura $\sqrt{a^2+b^2}$. Per ipotesi $a^2+b^2=c^2$, perciò il terzo lato misura $c$. I due triangoli hanno allora i tre lati rispettivamente uguali. Per il **criterio LLL** (lato-lato-lato), due triangoli con i tre lati uguali sono congruenti, cioè sovrapponibili, e hanno gli stessi angoli. Dunque anche nel triangolo dato l'angolo opposto a $c$ è retto.

:::

Nella figura la costruzione ha cateti $5$ e $12$; il terzo lato misura $\sqrt{25+144}=\sqrt{169}=13$. Le tre lunghezze $5$, $12$, $13$ formano quindi un triangolo rettangolo.

::grafico{assi=0 uguale=1 xmin=-1.05 xmax=13.03 ymin=-0.82 ymax=6.25 linee="0,0 12,0 0,5 0,0;0,0.37 0.37,0.37 0.37,0" punti="0,0;12,0;0,5" etichette="6,-0.44,12;-0.48,2.49,5;6.02,2.85,13" titolo="La costruzione con cateti $5$ e $12$ coincide con la terna assegnata"}

::::

:::attenzione{titolo="Controllare la terna prima di decidere"}

Tre lunghezze formano un triangolo solo se la maggiore è minore della somma delle altre due. Questa condizione si chiama **disuguaglianza triangolare**.

Con $4,5,6$ il lato maggiore soddisfa $6<4+5=9$, dunque esiste un triangolo. I quadrati danno $4^2+5^2=16+25=41$ e $6^2=36$; poiché $41\ne36$, l'angolo opposto a $6$ non è retto. Con $2,3,5$ si ha $2+3=5$, quindi la disuguaglianza triangolare non è soddisfatta; i tre punti sarebbero allineati e perciò il triangolo non esiste. Il controllo di esistenza e quello sull'angolo retto rispondono quindi a due domande diverse.

Quando tre lunghezze positive soddisfano $c^2=a^2+b^2$, la disuguaglianza triangolare è automaticamente soddisfatta. Infatti

$$
(a+b)^2=a^2+2ab+b^2=c^2+2ab>c^2,
$$

e fra due lunghezze positive è maggiore quella con il quadrato maggiore, dunque $a+b>c$. Per decidere se tre lunghezze positive formano un triangolo rettangolo è perciò sufficiente confrontare il quadrato della lunghezza maggiore con la somma dei quadrati delle altre due. Si sceglie la maggiore perché l'ipotenusa è il lato più lungo.

:::

:::osservazione{titolo="Terne pitagoriche e cambi di scala"}

Una **terna pitagorica** è formata da tre numeri interi positivi che soddisfano l'uguaglianza del teorema, come $3,4,5$: infatti $9+16=25$. Da $3,4,5$ si ricava $9,12,15$ moltiplicando ogni lato per $3$. Ogni quadrato viene moltiplicato per $3^2=9$, e infatti $81+144=225=15^2$; le due parti dell'uguaglianza restano uguali, quindi l'angolo retto si conserva. La diagonale di un quadrato di lato $1$ misura invece $\sqrt{1^2+1^2}=\sqrt2$, che non è un numero intero. È l'ipotenusa di un triangolo rettangolo, ma le sue tre lunghezze $1,1,\sqrt2$ non formano una terna di interi.

:::

## Quadrati ed equilateri

::::teorema{#notevoli titolo="Diagonale, altezza e angoli notevoli"}

In un quadrato di lato $l$, la diagonale misura $l\sqrt2$. In un triangolo **equilatero** (tre lati uguali e tre angoli di $60^\circ$) dello stesso lato, l'altezza misura $\dfrac{\sqrt3}{2}l$ e l'area $\dfrac{\sqrt3}{4}l^2$.

L'**altezza** di un triangolo è il segmento che parte da un vertice e arriva perpendicolare al lato opposto. Queste due formule danno subito diagonale, altezza e area senza rifare ogni volta Pitagora: per $l=4$ cm la diagonale del quadrato è $4\sqrt2$ cm e l'altezza dell'equilatero è $2\sqrt3$ cm.

:::dimostrazione

La diagonale $d$ del quadrato divide il quadrato in due triangoli rettangoli con entrambi i cateti lunghi $l$. Per il teorema di Pitagora

$$
d^2=l^2+l^2=2l^2,\qquad d=\sqrt{2l^2}=l\sqrt2 .
$$

Nell'equilatero $ABC$ si traccia l'altezza $AH$. L'equilatero è in particolare isoscele, e in un triangolo isoscele l'altezza relativa alla base è anche **mediana** (arriva nel punto medio del lato opposto) e **bisettrice** (divide l'angolo al vertice in due angoli uguali). Perciò $HC=\dfrac l2$ e il triangolo $AHC$ è rettangolo in $H$, con ipotenusa $AC=l$. Per il teorema di Pitagora

$$
h^2=l^2-\left(\dfrac l2\right)^2=l^2-\dfrac{l^2}{4}=\dfrac{3l^2}{4},\qquad h=\dfrac{\sqrt3}{2}l .
$$

L'area è base per altezza diviso due:

$$
\mathcal A=\dfrac12\cdot l\cdot\dfrac{\sqrt3}{2}l=\dfrac{\sqrt3}{4}l^2 .
$$

:::

::grafico{assi=0 uguale=1 xmin=-0.75 xmax=4.83 ymin=-0.78 ymax=4.75 linee="0,0 4,0 4,4 0,4 0,0;0,0 4,4;0,0.24 0.24,0.24 0.24,0" etichette="2,-0.41,l;-0.37,2,l;2.34,1.7,d" titolo="La diagonale $d$ è l’ipotenusa fra due lati uguali"}

::grafico{assi=0 uguale=1 xmin=-0.82 xmax=6.79 ymin=-0.85 ymax=6.03 linee="0,0 6,0 3,5.196152 0,0;3,5.196152 3,0;3,0.27 3.27,0.27 3.27,0" punti="0,0;6,0;3,5.196152;3,0" etichette="-0.17,-0.35,B;6.16,-0.35,C;3,5.63,A;3,-0.4,H;1.5,-0.38,l/2;4.5,-0.38,l/2;3.33,2.45,h" titolo="Un lato dell’equilatero è l’ipotenusa del triangolo $AHC$"}

::::

:::esempio{titolo="Usare la diagonale oppure un angolo da trenta gradi"}

Se la diagonale di un quadrato è $10$ cm, da $l\sqrt2=10$ si ricava il lato; moltiplicando numeratore e denominatore per $\sqrt2$ si toglie la radice dal denominatore:

$$
l=\dfrac{10}{\sqrt2}=\dfrac{10\sqrt2}{2}=5\sqrt2\,\mathrm{cm},\qquad \mathcal A=l^2=25\cdot2=50\,\mathrm{cm}^2 .
$$

Il valore $100$ cm$^2$ è il quadrato della diagonale, cioè il doppio dell'area.

L'altezza dell'equilatero è anche bisettrice, quindi divide l'angolo al vertice di $60^\circ$ in due angoli di $30^\circ$. Il triangolo rettangolo $AHC$ ha perciò angoli di $90^\circ$, $60^\circ$ e $30^\circ$. Il lato opposto all'angolo di $30^\circ$ è $HC=\dfrac l2$, metà dell'ipotenusa $AC=l$. Il cateto $AH$, opposto all'angolo di $60^\circ$, è l'altezza dell'equilatero e misura $\dfrac{\sqrt3}{2}$ dell'ipotenusa.

Queste relazioni valgono per ogni triangolo rettangolo con un angolo di $30^\circ$. Un tale triangolo ha gli stessi angoli di $AHC$, quindi è simile ad $AHC$ per il **criterio di similitudine angolo-angolo**: due triangoli con due angoli uguali hanno la stessa forma e i lati proporzionali. Per esempio, con ipotenusa $10$ cm il cateto opposto a $30^\circ$ misura $5$ cm e quello opposto a $60^\circ$ misura $5\sqrt3$ cm.

:::

## Proiezioni sull'ipotenusa

:::definizione{#proiezioni titolo="Proiettare gli estremi del cateto"}

La **proiezione** di un punto su una retta è il **piede** della perpendicolare condotta dal punto alla retta, cioè il punto in cui la perpendicolare incontra la retta. La proiezione di un segmento è il segmento che ha per estremi le proiezioni dei suoi due estremi.

In $ABC$ rettangolo in $A$, l'**altezza relativa all'ipotenusa** è il segmento $AH$ perpendicolare alla retta $BC$, e $H$ è il suo piede. Il piede $H$ è interno al segmento $BC$. Se infatti $H$ cadesse sul prolungamento oltre $B$, il triangolo $AHB$ sarebbe rettangolo in $H$ e il suo angolo in $B$ sarebbe acuto. L'angolo $\widehat{ABC}$, che insieme a quello forma un angolo piatto, sarebbe allora ottuso, e il triangolo $ABC$ avrebbe un angolo retto e uno ottuso, con somma maggiore di $180^\circ$; questo è impossibile. Lo stesso vale oltre $C$.

Nella proiezione del cateto $AB$ sulla retta $BC$, l'estremo $B$ sta già sulla retta e resta fermo, mentre $A$ va in $H$. La proiezione del cateto $AB$ è pertanto $BH$, di lunghezza $p$. Allo stesso modo la proiezione di $AC$ è $HC$, di lunghezza $q$. Si indica con $h=AH$ l'altezza. Entrambe le proiezioni sono positive e, poiché $H$ è interno a $BC$, $p+q=c$.

::grafico{assi=0 uguale=1 xmin=-1.25 xmax=26.35 ymin=-1.35 ymax=13.84 linee="0,0 25,0 9,12 0,0;9,12 9,0;9,0.6 9.6,0.6 9.6,0" punti="0,0;25,0;9,12;9,0" etichette="-0.39,-0.65,B;25.37,-0.66,C;9,12.84,A;9,-0.72,H;4.5,-0.65,p;17,-0.65,q;9.99,5.64,h" titolo="$BH$ parte dallo stesso estremo $B$ del cateto $AB$"}

L'altezza $AH$ divide $ABC$ in due triangoli più piccoli, $HBA$ e $HAC$. Due triangoli sono **simili** (simbolo $\sim$) quando hanno gli angoli uguali; allora i lati opposti ad angoli uguali sono proporzionali. Le corrispondenze si leggono dagli angoli:

- il triangolo intero ha l'angolo retto in $A$, i due più piccoli lo hanno in $H$;
- l'angolo in $B$ è comune a $ABC$ e $HBA$;
- l'angolo in $C$ è comune a $ABC$ e $HAC$.

I tre triangoli hanno quindi due angoli uguali a due a due, e il terzo angolo è uguale perché la somma è sempre $180^\circ$. Ne seguono le similitudini

$$
ABC\sim HBA\sim HAC,
$$

scritte in modo che i vertici corrispondenti occupino lo stesso posto: in $ABC\sim HBA$ il vertice $A$ corrisponde ad $H$, $B$ a $B$ e $C$ ad $A$.

:::

## Il primo teorema di Euclide

::::teorema{#euclide-primo titolo="Cateto, ipotenusa e proiezione corrispondente"}

In un triangolo rettangolo, il quadrato di ciascun cateto è il prodotto dell'ipotenusa per la proiezione di quel cateto sull'ipotenusa.

$$
a^2=cp,\qquad b^2=cq.
$$

Per esempio, con ipotenusa $c=25$ e proiezione $p=9$ il cateto $a$ misura $\sqrt{25\cdot9}=15$.

:::dimostrazione

Nella similitudine $ABC\sim HBA$ i lati corrispondenti stanno nello stesso rapporto. Si confrontano le ipotenuse $BC$ e $AB$ e poi i cateti adiacenti all'angolo in $B$, che sono $AB$ e $BH$. Si ottiene la proporzione

$$
\dfrac{BC}{AB}=\dfrac{AB}{BH}.
$$

Moltiplicando in croce, cioè moltiplicando entrambi i membri per $AB\cdot BH$, si trova $AB^2=BC\cdot BH$, cioè $a^2=cp$. Allo stesso modo la similitudine $ABC\sim HAC$ dà $\dfrac{BC}{AC}=\dfrac{AC}{HC}$, quindi $AC^2=BC\cdot HC$, cioè $b^2=cq$. Ogni cateto è abbinato alla propria proiezione: $AB$ a $BH$, che ha in comune l'estremo $B$, e $AC$ a $HC$, che ha in comune l'estremo $C$.

:::

::::

:::esempio{titolo="Risolvere rispetto a una proiezione"}

Con $c=17$ cm e $a=8$ cm, si divide il quadrato di $8$ per $17$ e si trova la proiezione di $a$; l'altra proiezione è la parte rimanente dell'ipotenusa:

$$
\begin{aligned}
p&=\dfrac{a^2}{c}=\dfrac{64}{17}\,\mathrm{cm},\\[6pt]
q&=17-\dfrac{64}{17}=\dfrac{289-64}{17}=\dfrac{225}{17}\,\mathrm{cm}.
\end{aligned}
$$

Applicando di nuovo il teorema all'altro cateto si ottiene $b=\sqrt{cq}=\sqrt{17\cdot\dfrac{225}{17}}=\sqrt{225}=15$ cm. Le proiezioni risultano entrambe minori di $c$, e $8^2+15^2=64+225=289=17^2$ controlla le misure dei cateti con Pitagora.

Nella formula $p=\dfrac{a^2}{c}$ si dividono centimetri quadrati per centimetri. Il risultato è perciò in centimetri, come deve essere per un segmento dell'ipotenusa.

:::

:::osservazione{titolo="Confrontare cateti e proiezioni"}

Dividendo il primo membro di $a^2=cp$ per il primo membro di $b^2=cq$, e il secondo per il secondo, il fattore $c$ si semplifica e si trova

$$
\dfrac{a^2}{b^2}=\dfrac pq .
$$

Le lunghezze sono positive, quindi il rapporto dei cateti è la radice quadrata del rapporto delle proiezioni. Se $p:q=4:9$, si ha $\dfrac ab=\sqrt{\dfrac49}=\dfrac23$, cioè $a:b=2:3$. Il cateto più lungo corrisponde perciò alla proiezione più lunga.

Sommando le due formule si ottiene invece un controllo diverso:

$$
a^2+b^2=cp+cq=c(p+q)=c\cdot c=c^2,
$$

che è esattamente il teorema di Pitagora. Questa somma da sola non dice quale proiezione appartenga a quale cateto. Per abbinarle si guardano gli estremi $B$ e $C$ nella figura.

:::

## Il secondo teorema di Euclide

::::teorema{#euclide-secondo titolo="Altezza e prodotto delle proiezioni"}

Il quadrato dell'altezza relativa all'ipotenusa di un triangolo rettangolo è il prodotto delle due proiezioni.

$$
h^2=pq.
$$

Per esempio, con proiezioni $p=9$ e $q=16$ l'altezza misura $\sqrt{9\cdot16}=\sqrt{144}=12$.

:::dimostrazione

Nella similitudine $HBA\sim HAC$ il vertice $H$ corrisponde ad $H$, $B$ ad $A$ e $A$ a $C$. Quindi il lato $BH$ del primo triangolo corrisponde al lato $AH$ del secondo, mentre il lato $AH$ del primo corrisponde a $HC$ del secondo. Prendendo i rapporti nello stesso ordine si ottiene la proporzione

$$
\dfrac{BH}{AH}=\dfrac{AH}{HC}.
$$

In una proporzione il prodotto dei medi (i due termini interni, qui $AH$ e $AH$) è uguale al prodotto degli estremi (i due termini esterni, $BH$ e $HC$). Perciò $AH^2=BH\cdot HC$, cioè $h^2=pq$. L'altezza compare due volte, come termine medio della proporzione, perché è un lato comune ai due triangoli con un ruolo diverso in ciascuno; per questo si dice che l'altezza è **medio proporzionale** fra le due proiezioni.

:::

::::

:::esempio{titolo="Ricostruire e controllare le proiezioni"}

Con $h=6$ cm e $p=4$ cm, il secondo teorema dà $q=\dfrac{h^2}{p}=\dfrac{36}{4}=9$ cm. L'ipotenusa vale $c=p+q=4+9=13$ cm. Poiché $p=BH$, il punto $H$ si trova sull'ipotenusa a $4$ cm da $B$. Scambiare i nomi delle proiezioni scambia i cateti corrispondenti e lascia invariati $h$ e $c$.

Se si conosce solo $c$, i valori possibili dell'altezza si trovano scrivendo $q=c-p$, così che $h^2=p(c-p)=cp-p^2$. Si **completa il quadrato**: poiché $\left(p-\dfrac c2\right)^2=p^2-cp+\dfrac{c^2}{4}$, si ha $cp-p^2=\dfrac{c^2}{4}-\left(p-\dfrac c2\right)^2$. Quindi

$$
h^2=p(c-p)=\left(\dfrac c2\right)^2-\left(p-\dfrac c2\right)^2.
$$

Un quadrato non è mai negativo, quindi $h^2\le\left(\dfrac c2\right)^2$ e $h\le\dfrac c2$. L'uguaglianza vale quando $p=\dfrac c2$, cioè quando le proiezioni sono uguali; per il primo teorema, allora $a^2=cp=cq=b^2$ e anche i cateti sono uguali. Per $c=10$ cm il massimo è $h=5$ cm. Il grafico mostra $h^2=p(10-p)$ per $p$ fra $0$ e $10$, e il suo punto più alto è $(5;25)$. I valori agli estremi del grafico darebbero una proiezione nulla e non rappresentano triangoli con due cateti positivi; per questo sono segnati con un cerchietto vuoto.

::grafico{xmin=-0.8 xmax=10.9 ymin=-3.7 ymax=28.3 curve="t,t*(10-t),0,10" nomi="p,y" legenda="y=h^2=p(10-p)" punti="0,0,vuoto;5,25,pieno;10,0,vuoto" segmenti="5,0,5,25" titolo="Con $c=10$, il quadrato dell’altezza è massimo per $p=q=5$"}

:::

::::teorema{#euclide-inverso titolo="Un criterio per riconoscere il retto"}

Il secondo teorema si può anche rovesciare. In un triangolo $ABC$ qualsiasi si traccia l'altezza $AH$ relativa a $BC$, anche senza sapere quanto misura l'angolo in $A$. Se $H$ è interno a $BC$ e $AH^2=BH\cdot HC$, allora il triangolo è rettangolo in $A$.

:::dimostrazione

Si pone $p=BH$, $q=HC$ e $h=AH$. I triangoli $ABH$ e $AHC$ sono retti in $H$, quindi per il teorema di Pitagora $AB^2=p^2+h^2$ e $AC^2=q^2+h^2$. Sommando e usando l'ipotesi $h^2=pq$,

$$
AB^2+AC^2=p^2+q^2+2h^2=p^2+q^2+2pq=(p+q)^2 .
$$

Poiché $H$ è interno a $BC$, si ha $p+q=BC$, quindi $AB^2+AC^2=BC^2$. Per il teorema inverso di Pitagora l'angolo opposto a $BC$, cioè l'angolo in $A$, è retto.

:::

::::

:::esempio{titolo="Partire dall'altezza e dall'ipotenusa"}

Se $c=20$ cm e $h=8$ cm, l'altezza è minore del limite $\dfrac c2=10$ cm. Dalla forma del quadrato appena ottenuta segue

$$
\begin{aligned}
64&=100-(p-10)^2,\\[6pt]
(p-10)^2&=100-64=36,\\[6pt]
p-10&=6\quad\text{oppure}\quad p-10=-6 .
\end{aligned}
$$

Quindi $p$ vale $16$ cm oppure $4$ cm, e $q$ è l'altra lunghezza. Si controllano insieme $4+16=20$ e $4\cdot16=64=8^2$. Si costruisce poi $A$ sulla perpendicolare a $BC$ in $H$, a distanza $h$ da $H$; il criterio appena dimostrato garantisce che l'angolo in $A$ è retto.

Per sapere quale dei due segmenti sia $BH$ serve un'informazione sui cateti. Per esempio, se $AB<AC$ la proiezione di $AB$ è la più corta, quindi $p<q$ e $p=4$ cm. Se invece fosse assegnato $h=11$ cm, si otterrebbe $(p-10)^2=100-121=-21$; nessun quadrato è negativo, perciò con quei dati il triangolo non esiste.

:::

## Area e misure inverse

:::osservazione{#problemi titolo="Due scelte di base"}

L'area di un triangolo è base per altezza diviso due, e come base si può scegliere qualunque lato, con l'altezza relativa a quel lato. In un triangolo rettangolo:

- se la base è un cateto, l'altezza è l'altro cateto;
- se la base è l'ipotenusa, l'altezza è $AH$.

La stessa area $\mathcal A$ si scrive dunque in due modi. Uguagliando le due espressioni, moltiplicando per $2$ e dividendo per $c$ si ricava l'altezza relativa all'ipotenusa:

$$
\mathcal A=\dfrac{ab}{2}=\dfrac{ch}{2},\qquad h=\dfrac{ab}{c}.
$$

Per cateti di $9$ cm e $12$ cm l'ipotenusa è $c=\sqrt{81+144}=\sqrt{225}=15$ cm e l'area è $\dfrac{9\cdot12}{2}=54$ cm$^2$. Dividendo il doppio dell'area per $c$ si ottiene $h=\dfrac{108}{15}=7{,}2$ cm. Questa misura è minore della metà dell'ipotenusa, $7{,}5$ cm, che è il limite ottenuto dal secondo teorema.

:::

:::esempio{titolo="Dall'area a un'altezza possibile"}

Se un triangolo rettangolo ha area $42$ cm$^2$ e ipotenusa $14$ cm, l'altezza relativa all'ipotenusa si ricava anche senza conoscere i cateti:

$$
h=\dfrac{2\mathcal A}{c}=\dfrac{2\cdot42}{14}=6\,\mathrm{cm}.
$$

Il controllo $6\le\dfrac{14}{2}=7$ conferma che l'altezza rispetta il limite.

Sostituendo $h\le\dfrac c2$ nella formula dell'area si ottiene $\mathcal A=\dfrac{ch}{2}\le\dfrac{c}{2}\cdot\dfrac c2=\dfrac{c^2}{4}$. Con ipotenusa $14$ cm l'area massima è dunque $\dfrac{196}{4}=49$ cm$^2$, e si ottiene con i cateti uguali. Un'area assegnata di $50$ cm$^2$ sarebbe incompatibile con l'ipotenusa di $14$ cm. L'equazione $ch=2\mathcal A$ darebbe comunque un numero, $h=\dfrac{100}{14}=\dfrac{50}{7}$ cm, ma questo valore supera $7$ cm e non corrisponde a nessun triangolo rettangolo.

:::

:::esempio{titolo="Un'altezza in un triangolo isoscele"}

Un triangolo **isoscele** ha due lati uguali, detti lati obliqui; il terzo lato è la base. In un isoscele l'altezza relativa alla base è anche mediana, quindi incontra la base nel suo punto medio.

Se un isoscele ha lati uguali di $13$ cm e base di $10$ cm, l'altezza alla base lo divide in due triangoli rettangoli uguali. In ciascuno la metà della base vale $\dfrac{10}{2}=5$ cm ed è un cateto, mentre il lato di $13$ cm è l'ipotenusa. Quindi

$$
h=\sqrt{13^2-5^2}=\sqrt{169-25}=\sqrt{144}=12\,\mathrm{cm},\qquad \mathcal A=\dfrac{10\cdot12}{2}=60\,\mathrm{cm}^2 .
$$

L'angolo retto usato nel teorema di Pitagora è quello in $H$, piede dell'altezza, e nasce dalla costruzione, perché l'altezza è perpendicolare alla base.

::grafico{assi=0 uguale=1 xmin=-0.94 xmax=10.91 ymin=-0.9 ymax=13.05 linee="0,0 10,0 5,12 0,0;5,12 5,0;5,0.32 5.32,0.32 5.32,0" punti="0,0;10,0;5,12;5,0" etichette="2.5,-0.44,5;7.5,-0.44,5;1.83,6.26,13;8.24,6.22,13;5.36,5.72,h" titolo="La mediana alla base produce due triangoli rettangoli congruenti"}

:::

## Distanze sul piano

:::esempio{#distanze titolo="Due spostamenti perpendicolari"}

Su una pianta si va da $P$ a $Q$ per $0{,}3$ km verso est, quindi da $Q$ a $R$ per $400$ m verso nord. Sulla pianta le direzioni est e nord sono perpendicolari, quindi in $Q$ c'è un angolo retto. Si converte $0{,}3$ km in $0{,}3\cdot1000=300$ m, così che le due misure abbiano la stessa unità. Il percorso lungo i due tratti misura $300+400=700$ m. Il segmento diretto $PR$ è l'ipotenusa del triangolo $PQR$:

$$
PR=\sqrt{300^2+400^2}=\sqrt{90\,000+160\,000}=\sqrt{250\,000}=500\,\mathrm{m}.
$$

::grafico{assi=0 uguale=1 xmin=-0.73 xmax=4.02 ymin=-0.77 ymax=4.79 linee="0,0 3,0 3,4;2.76,0 2.76,0.24 3,0.24" segmenti="0,0,3,4" punti="0,0;3,0;3,4" etichette="-0.18,-0.38,P;3.18,-0.38,Q;3.19,4.35,R;1.47,-0.38,300 m;3.56,2,400 m" titolo="La linea tratteggiata è la distanza diretta"}

La distanza diretta è maggiore di ciascun tratto, ma minore del percorso che passa per $Q$. Se la direzione del secondo spostamento cambiasse, le due lunghezze da sole non basterebbero per usare Pitagora, perché è l'informazione sulle direzioni a stabilire l'angolo retto. Lo stesso calcolo dà la **diagonale di un rettangolo**: due lati consecutivi di un rettangolo sono perpendicolari, quindi un rettangolo di lati $300$ m e $400$ m ha diagonale $500$ m.

:::

:::esempio{titolo="Usare le differenze fra coordinate"}

Nel piano cartesiano un punto si indica con le sue **coordinate** $(x;y)$: l'**ascissa** $x$ è la posizione in orizzontale, l'**ordinata** $y$ quella in verticale. I punti $P=(2;-3)$ e $R=(8;5)$ si collegano con un tratto orizzontale da $P$ a $Q=(8;-3)$ e con un tratto verticale da $Q$ a $R$. Le lunghezze dei due tratti sono le differenze delle coordinate prese in **valore assoluto**, cioè senza segno ($|-6|=6$):

$$
\left|8-2\right|=6,\qquad \left|5-(-3)\right|=8 .
$$

Le direzioni degli assi sono perpendicolari, perciò il triangolo $PQR$ è rettangolo in $Q$ e la distanza è

$$
PR=\sqrt{6^2+8^2}=\sqrt{36+64}=\sqrt{100}=10 .
$$

Le differenze delle coordinate si scrivono spesso $\Delta x$ e $\Delta y$ (si legge «delta x»): qui $\Delta x=8-2=6$ e $\Delta y=5-(-3)=8$. Se si scambia l'ordine dei punti, le differenze cambiano segno e i loro quadrati restano uguali; per esempio $(2-8)^2=(-6)^2=36$.

Quando una coordinata coincide, uno dei tratti ha lunghezza zero. In quel caso i due punti sono sulla stessa orizzontale o verticale e la distanza è il valore assoluto dell'altra differenza.

::grafico{xmin=-0.6 xmax=9 ymin=-4.1 ymax=6.2 punti="2,-3,pieno,P;8,5,pieno,R;8,-3,pieno,Q" segmenti="2,-3,8,-3;8,-3,8,5" linee="2,-3 8,5" titolo="I cateti del triangolo sono le differenze orizzontale e verticale"}

:::
