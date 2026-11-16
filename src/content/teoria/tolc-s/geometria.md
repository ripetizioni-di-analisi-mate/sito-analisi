---
titolo: "Geometria per il TOLC-S"
sommario: "Figure piane e solide, distanze, similitudine e geometria analitica, con esempi e figure."
---

## Angoli, triangoli e distanze

:::definizione{#angoli titolo="Angoli e rette parallele"}
Un **angolo** misura la rotazione fra due semirette con la stessa origine. Un angolo retto misura $90^\circ$, un angolo piatto $180^\circ$ e un giro completo $360^\circ$. Due angoli sono complementari se la loro somma è $90^\circ$ e supplementari se è $180^\circ$. Quando due rette si intersecano, gli angoli opposti al vertice sono uguali, mentre quelli adiacenti sono supplementari.

Se due rette parallele sono tagliate da una trasversale, gli angoli corrispondenti sono uguali. Questa proprietà permette di trasferire un angolo da una parte della figura all'altra. Per esempio, se un angolo acuto misura $38^\circ$, l'angolo ottuso adiacente misura $180^\circ-38^\circ=142^\circ$. La sola inclinazione apparente del disegno non assegna una misura: valgono i dati e le relazioni dichiarate.
:::

::::teorema{#triangoli titolo="Somma degli angoli e disuguaglianza triangolare"}
In un triangolo non degenere gli angoli interni hanno somma $180^\circ$. Inoltre, se due lati misurano $a$ e $b$, il terzo lato $c$ soddisfa
$$
|a-b|<c<a+b.
$$
Queste condizioni distinguono un triangolo da tre segmenti che non possono chiudersi. Con lati $4$ e $7$, per esempio, il terzo lato deve essere maggiore di $3$ e minore di $11$.

:::dimostrazione
Per la somma degli angoli si traccia da un vertice la parallela al lato opposto. Gli altri due angoli si ritrovano sul vertice come angoli alterni interni, e insieme al terzo formano un angolo piatto. Per la disuguaglianza, il percorso fra due vertici attraverso il terzo è più lungo del segmento diretto; applicando questa osservazione ai tre lati si ottengono sia il limite superiore sia quello inferiore.
:::
::::

::::teorema{#pitagora titolo="Teorema di Pitagora"}
In un triangolo rettangolo, detti $a,b$ i cateti e $c$ l'ipotenusa, vale
$$
c^2=a^2+b^2.
$$
L'ipotenusa è il lato opposto all'angolo retto. La formula permette di ricavare una distanza obliqua da due spostamenti perpendicolari. Vale anche il criterio inverso: se il quadrato del lato maggiore è uguale alla somma dei quadrati degli altri due, il triangolo è rettangolo.

:::dimostrazione
Un quadrato di lato $a+b$ può essere suddiviso in quattro triangoli rettangoli congruenti e un quadrato interno di lato $c$. Confrontando le aree si ottiene $(a+b)^2=4\cdot\dfrac{ab}{2}+c^2$. Sviluppando il quadrato e sottraendo $2ab$ resta $a^2+b^2=c^2$.
:::
::::

:::esempio{titolo="Un'altezza in un triangolo isoscele"}
Un triangolo isoscele ha lati uguali di $13\,\mathrm{cm}$ e base di $10\,\mathrm{cm}$. L'altezza relativa alla base la divide in due segmenti di $5\,\mathrm{cm}$. Ciascuna metà è un triangolo rettangolo, quindi
$$
h=\sqrt{13^2-5^2}=\sqrt{144}=12\,\mathrm{cm}.
$$
L'area è $\dfrac{10\cdot12}{2}=60\,\mathrm{cm^2}$. Il lato di $13\,\mathrm{cm}$ è obliquo rispetto alla base, perciò l'altezza usata nel prodotto è $12\,\mathrm{cm}$.

::struttura{nodi="A,-5,0;B,5,0;C,0,12;H,0,0" linee="-5,0 5,0 0,12 -5,0;0,0 0,12;0,0.7 0.7,0.7 0.7,0" quote="A,H,5 cm;H,B,5 cm;A,C,13 cm,-0.8" titolo="L'altezza CH divide il triangolo isoscele in due triangoli rettangoli"}
:::

:::osservazione{titolo="Classificazione mediante i lati"}
Siano $a,b,c$ i lati di un triangolo e $c$ il maggiore. Se $c^2>a^2+b^2$, l'angolo opposto a $c$ è ottuso; se $c^2<a^2+b^2$, tutti gli angoli sono acuti. La distinzione segue dal teorema del coseno, $c^2=a^2+b^2-2ab\cos\gamma$: il coseno dell'angolo maggiore è negativo nel primo caso e positivo nel secondo. Per applicare il criterio deve prima essere soddisfatta la disuguaglianza triangolare.
:::


## Similitudine e rapporti di scala

:::definizione{#similitudine titolo="Figure simili"}
Due figure sono **simili** se hanno la stessa forma e le lunghezze corrispondenti sono moltiplicate per uno stesso fattore $k>0$. Nei triangoli bastano due coppie di angoli uguali; il terzo angolo coincide perché la somma è $180^\circ$. Il rapporto va scritto nello stesso ordine per tutte le coppie, facendo corrispondere i lati opposti ad angoli uguali.

Se un triangolo ha lati $3,4,5$ e un altro ha lati $6,8,10$, il rapporto dal primo al secondo è $k=2$. Anche le altezze e i perimetri raddoppiano. Per le aree ogni prodotto fra due lunghezze contiene due fattori $k$, quindi il rapporto è $k^2$. Per i volumi di solidi simili è invece $k^3$.
:::

:::esempio{titolo="Dalle superfici alle lunghezze"}
Due quadrati hanno aree $18\,\mathrm{cm^2}$ e $50\,\mathrm{cm^2}$. Il rapporto fra il lato del primo e quello del secondo è
$$
k=\sqrt{\frac{18}{50}}=\sqrt{\frac{9}{25}}=\frac35.
$$
Il rapporto dei perimetri è anch'esso $\dfrac35$. Il rapporto $\dfrac9{25}$ descrive le aree, quindi usarlo per i lati significherebbe contare due volte l'effetto della scala. Nei disegni in scala $1:200$, un segmento lungo $3\,\mathrm{cm}$ rappresenta $600\,\mathrm{cm}=6\,\mathrm{m}$ nella realtà.
:::

:::osservazione
La similitudine si applica alle ombre quando il terreno è orizzontale, gli oggetti sono verticali e i raggi solari hanno la stessa direzione. Le altezze e le ombre formano allora triangoli rettangoli con gli stessi angoli. Un palo alto $2\,\mathrm{m}$ con ombra di $3\,\mathrm{m}$ e un albero con ombra di $12\,\mathrm{m}$ danno $h=12\cdot\dfrac23=8\,\mathrm{m}$. Le condizioni geometriche giustificano la proporzione.
:::

## Poligoni, aree e scomposizioni

:::definizione{#aree titolo="Area e altezza relativa"}
L'**area** misura l'estensione di una regione piana. Per un rettangolo di lati $b,h$ è $bh$. Un parallelogramma di base $b$ e altezza $h$ ha la stessa area: spostando un triangolo laterale si ricompone un rettangolo. L'altezza è la distanza perpendicolare fra le rette che contengono le due basi.

Un triangolo occupa metà del parallelogramma formato con una sua copia, quindi $A=\dfrac{bh}{2}$. Per un trapezio di basi parallele $B,b$ e altezza $h$ vale $A=\dfrac{(B+b)h}{2}$. Le diagonali perpendicolari di un rombo lo dividono in quattro triangoli rettangoli, da cui $A=\dfrac{d_1d_2}{2}$. Le lunghezze sono espresse nella stessa unità prima di eseguire il prodotto.
:::

:::esempio{titolo="Area con una parte asportata"}
Da un rettangolo di $10\,\mathrm{cm}$ per $6\,\mathrm{cm}$ viene tolto un rettangolo di $4\,\mathrm{cm}$ per $2\,\mathrm{cm}$ in un angolo. Poiché le regioni non si sovrappongono, l'area rimasta è
$$
A=10\cdot6-4\cdot2=52\,\mathrm{cm^2}.
$$
Il perimetro richiede invece di seguire il bordo. Togliendo il rettangolino angolare, i tratti esterni eliminati sono sostituiti da tratti della stessa lunghezza, quindi in questo caso il perimetro resta $32\,\mathrm{cm}$. L'area è diminuita mentre il perimetro è rimasto uguale.

::struttura{poligoni="0,0 10,0 10,4 6,4 6,6 0,6" nodi="A,0,0;B,10,0;C,10,4;D,6,4;E,6,6;F,0,6" quote="A,B,10 cm;F,A,6 cm;D,C,4 cm;E,D,2 cm" titolo="La regione rimasta ha area 52 centimetri quadrati"}
:::

:::teorema{#poligoni titolo="Angoli e diagonali di un poligono"}
Un poligono convesso con $n\ge3$ lati si divide in $n-2$ triangoli tracciando le diagonali da un vertice. La somma degli angoli interni è dunque $(n-2)180^\circ$. Se il poligono è regolare, ciascun angolo interno misura $\dfrac{(n-2)180^\circ}{n}$ e ciascun angolo esterno adiacente misura $\dfrac{360^\circ}{n}$.

Da ogni vertice partono $n-3$ diagonali: sono esclusi il vertice stesso e i due vicini. Contando da tutti i vertici ogni diagonale compare due volte, quindi il totale è $\dfrac{n(n-3)}2$. Per un esagono le diagonali sono $9$, mentre la somma degli angoli interni è $720^\circ$.
:::

## Cerchi, archi e corde

:::definizione{#cerchio titolo="Circonferenza e cerchio"}
La **circonferenza** è l'insieme dei punti a distanza $r>0$ da un centro $O$. Il **cerchio** comprende anche i punti interni. Il diametro misura $2r$, la lunghezza della circonferenza è $2\pi r$ e l'area del cerchio è $\pi r^2$. La presenza di $r$ oppure $r^2$ distingue una lunghezza da un'area anche nelle unità.

Una corda congiunge due punti della circonferenza. La perpendicolare dal centro alla corda la divide a metà. Se la sua distanza dal centro è $d<r$, metà corda misura $\sqrt{r^2-d^2}$. Per una tangente, il raggio che raggiunge il punto di contatto è perpendicolare alla retta: questa proprietà fornisce un triangolo rettangolo in molti problemi di distanza.
:::

:::definizione{#settori titolo="Arco e settore circolare"}
Un settore con angolo al centro $\alpha$, misurato in gradi, occupa la frazione $\dfrac{\alpha}{360^\circ}$ del cerchio. Perciò la lunghezza dell'arco $\ell$ e l'area del settore sono
$$
\ell=\frac{\alpha}{360^\circ}2\pi r,
\qquad A=\frac{\alpha}{360^\circ}\pi r^2.
$$
Il perimetro completo del settore comprende l'arco e i due raggi, quindi è $\ell+2r$. Un angolo alla circonferenza misura metà dell'angolo al centro che insiste sullo stesso arco. Se l'arco è una semicirconferenza, l'angolo alla circonferenza è retto.
:::

:::esempio{titolo="Corda e distanza dal centro"}
Una corda in una circonferenza di raggio $5\,\mathrm{cm}$ dista $3\,\mathrm{cm}$ dal centro. Indicata con $M$ la sua metà, il triangolo $OMA$ ha ipotenusa $5$ e un cateto $3$, quindi $MA=\sqrt{25-9}=4\,\mathrm{cm}$. L'intera corda misura $8\,\mathrm{cm}$.

::struttura{cerchi="0,0,5" nodi="O,0,0;M,3,0;A,3,4;B,3,-4" linee="0,0 3,4;3,-4 3,4;0,0 3,0" quote="O,M,3 cm,0.5;O,A,5 cm,-0.8" titolo="Il raggio OA e la distanza OM determinano metà della corda AB"}
:::

## Solidi e unità di misura

:::definizione{#volumi titolo="Prismi, piramidi e solidi di rotazione"}
Il volume di un prisma è $V=A_bh$, dove $A_b$ è l'area della base e $h$ la distanza perpendicolare fra le basi. Il cilindro segue la stessa regola con $A_b=\pi r^2$. Una piramide e un cono hanno volume $\dfrac{A_bh}{3}$. Per una sfera di raggio $r$ valgono
$$
V=\frac43\pi r^3,\qquad S=4\pi r^2.
$$
Il fattore un terzo riguarda il volume di piramidi e coni; la superficie va ricavata dalle facce effettive. Per un cilindro chiuso la superficie totale è $2\pi rh+2\pi r^2$, somma della superficie laterale e delle due basi. Se il cilindro è aperto sopra, compare una sola base. In un cono retto l'apotema è $s=\sqrt{r^2+h^2}$ e l'area laterale è $\pi rs$.
:::

:::esempio{titolo="Diagonale di una scatola"}
Un parallelepipedo rettangolo ha spigoli $3,4,12\,\mathrm{cm}$. La diagonale della base misura $\sqrt{3^2+4^2}=5\,\mathrm{cm}$. Questa diagonale e l'altezza sono perpendicolari, quindi la diagonale nello spazio misura
$$
d=\sqrt{5^2+12^2}=13\,\mathrm{cm}.
$$
Il procedimento usa Pitagora due volte e produce la formula $d=\sqrt{a^2+b^2+c^2}$. Per un cubo di spigolo $a$ dà $a\sqrt3$; la diagonale di una faccia è invece $a\sqrt2$.
:::

:::osservazione{#unita-geometriche titolo="Conversioni di area e volume"}
Poiché $1\,\mathrm{m}=100\,\mathrm{cm}$, un quadrato di lato un metro contiene $100^2=10000$ quadrati di lato un centimetro. Dunque $1\,\mathrm{m^2}=10000\,\mathrm{cm^2}$. Analogamente $1\,\mathrm{m^3}=1000000\,\mathrm{cm^3}$. Per la capacità, $1\,\mathrm{L}=1\,\mathrm{dm^3}=1000\,\mathrm{cm^3}$.

Una vasca con base interna $40\,\mathrm{cm}$ per $30\,\mathrm{cm}$ contiene $6\,\mathrm{L}=6000\,\mathrm{cm^3}$ d'acqua. Il livello è quindi $h=\dfrac{6000}{40\cdot30}=5\,\mathrm{cm}$. L'area della base moltiplicata per l'altezza restituisce il volume assegnato. Questa verifica distingue l'altezza dell'acqua dall'altezza totale del recipiente.
:::

## Coordinate, punti medi e luoghi

:::definizione{#coordinate titolo="Distanza e punto medio"}
Nel piano cartesiano il punto $P(x,y)$ è individuato da due coordinate. Le differenze delle coordinate di $A(x_1,y_1)$ e $B(x_2,y_2)$ sono gli spostamenti orizzontale e verticale fra i punti. Per Pitagora,
$$
AB=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}.
$$
Il punto medio divide entrambi gli spostamenti a metà, quindi
$$
M=\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}\right).
$$
Per esempio, il punto medio fra $(-2,5)$ e $(6,-1)$ è $(2,2)$. La distanza di $(x,y)$ dall'asse orizzontale è $|y|$, mentre quella dall'asse verticale è $|x|$. I valori assoluti esprimono il fatto che una distanza è non negativa.
:::

:::definizione{#luoghi titolo="Luoghi geometrici"}
Un **luogo geometrico** è l'insieme dei punti che soddisfano una proprietà. I punti equidistanti da due punti distinti $A,B$ formano l'asse del segmento, cioè la retta perpendicolare ad $AB$ nel suo punto medio. La proprietà si traduce in $PA^2=PB^2$: i termini quadratici uguali si cancellano e resta un'equazione lineare.

In un triangolo, gli assi dei lati si incontrano nel circocentro, equidistante dai vertici. Le bisettrici interne si incontrano nell'incentro, equidistante dalle rette dei lati. Le mediane congiungono i vertici ai punti medi dei lati opposti; il loro incontro, il baricentro, divide ogni mediana nel rapporto $2:1$ a partire dal vertice. Questi punti rispondono a proprietà diverse e possono occupare posizioni diverse. Le rette delle tre altezze si incontrano nell’**ortocentro**: ogni altezza passa per un vertice ed è perpendicolare alla retta del lato opposto. L’ortocentro è interno nei triangoli acutangoli, coincide con il vertice retto nei rettangoli ed è esterno negli ottusangoli.
:::

:::osservazione{titolo="Coordinate e trasformazioni"}
Le coordinate permettono di descrivere lo spostamento di una figura punto per punto. Una traslazione di vettore $(u,v)$ aggiunge le due componenti alle coordinate, quindi $(x,y)$ diventa $(x+u,y+v)$. Una simmetria rispetto all'asse $x$ cambia il segno di $y$; rispetto all'asse $y$ cambia il segno di $x$; rispetto a $y=x$ scambia le coordinate. Le distanze sono conservate in tutti questi casi.

Se una trasformazione ha centro $C$, si può lavorare con il vettore $P-C$ e sommare di nuovo $C$ alla fine. Per esempio, un'omotetia di rapporto $2$ e centro $(1,2)$ porta $P=(3,1)$ in $(1,2)+2(2,-1)=(5,0)$. Il centro resta fermo e la distanza da esso raddoppia. Applicare il fattore direttamente alle coordinate originali userebbe invece l'origine come centro.
:::


## Rette e intersezioni

:::definizione{#rette titolo="Pendenza ed equazione della retta"}
Una retta non verticale ha equazione $y=mx+q$. Il **coefficiente angolare** $m$ indica la variazione di $y$ quando $x$ aumenta di un'unità; $q$ è l'ordinata del punto in cui la retta incontra l'asse $y$. Da due punti con ascisse diverse si ricava
$$
m=\frac{y_2-y_1}{x_2-x_1}.
$$
Nota la pendenza e un punto $(x_0,y_0)$, la retta si scrive $y-y_0=m(x-x_0)$. Una retta orizzontale ha equazione $y=k$ e pendenza zero. Una verticale ha equazione $x=k$; in questo caso il rapporto che definisce la pendenza ha denominatore zero e non è un numero reale.
:::

:::teorema{#parallelismo titolo="Parallelismo, perpendicolarità e distanza"}
Due rette non verticali distinte sono parallele se hanno lo stesso coefficiente angolare. Due rette con coefficienti $m_1,m_2$ sono perpendicolari se $m_1m_2=-1$. Una verticale e una orizzontale sono perpendicolari e si trattano direttamente dalle loro equazioni.

Per trovare l'intersezione di due rette si impongono entrambe le equazioni. Una soluzione individua un punto comune; un sistema impossibile corrisponde a rette parallele distinte; un'identità corrisponde a rette coincidenti. La distanza da $P(x_0,y_0)$ alla retta $ax+by+c=0$, con $(a,b)\ne(0,0)$, è
$$
d=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}.
$$
Il valore assoluto elimina il segno legato al lato della retta in cui si trova il punto. Se il numeratore è zero, il punto appartiene alla retta e la distanza è zero.
:::

:::esempio{titolo="Intersezione come condizione comune"}
Le rette $y=2x+1$ e $y=-x+7$ si incontrano quando $2x+1=-x+7$. Quindi $3x=6$, $x=2$ e $y=5$. Sostituendo $(2,5)$ in entrambe le equazioni si ottiene rispettivamente $5=5$ e $5=5$.

::grafico{f="2*x+1; -x+7" xmin=-1 xmax=5 ymin=-1 ymax=9 punti="2,5,pieno" titolo="Le due rette condividono il punto (2; 5)"}
:::

## La circonferenza nel piano cartesiano

:::definizione{#circonferenza-cartesiana titolo="Centro e raggio dall'equazione"}
La circonferenza con centro $(a,b)$ e raggio $r>0$ è descritta da
$$
(x-a)^2+(y-b)^2=r^2.
$$
Il membro sinistro è il quadrato della distanza dal centro. Sostituendo le coordinate di un punto, un valore minore di $r^2$ indica un punto interno al cerchio, l'uguaglianza un punto sulla circonferenza e un valore maggiore un punto esterno.

Per leggere centro e raggio da una forma sviluppata si completano i quadrati. Nell'equazione $x^2+y^2-4x+6y-12=0$ si ottiene $(x-2)^2+(y+3)^2=25$. Il centro è $(2,-3)$ e il raggio è $5$. Il termine $25$ è il quadrato del raggio. Se dopo il completamento il secondo membro è negativo, non esistono punti reali; se è zero, il luogo si riduce al solo centro.
:::

:::osservazione{#intersezioni-circonferenza titolo="Posizione reciproca di rette e circonferenze"}
Una retta a distanza $d$ dal centro è secante, tangente o esterna secondo che $d<r$, $d=r$ oppure $d>r$. Sostituendo l'equazione della retta in quella della circonferenza si ottiene la stessa distinzione attraverso le soluzioni dell'equazione di secondo grado.

Per due circonferenze distinte di raggi $r_1,r_2$ e distanza fra i centri $d$, la tangenza esterna corrisponde a $d=r_1+r_2$, quella interna a $d=|r_1-r_2|$. Due intersezioni richiedono $|r_1-r_2|<d<r_1+r_2$. Se i centri e i raggi coincidono, le circonferenze coincidono e i punti comuni sono infiniti; questo caso va separato dalla tangenza interna.
:::

## Trasformazioni e regioni del piano

:::definizione{#trasformazioni titolo="Traslazioni, simmetrie e rotazioni"}
Una traslazione di vettore $(u,v)$ porta $(x,y)$ in $(x+u,y+v)$. Sposta tutti i punti nello stesso modo, quindi conserva distanze, angoli, aree e orientamento. Nella simmetria rispetto all'asse $x$ il punto diventa $(x,-y)$, mentre rispetto all'asse $y$ diventa $(-x,y)$. Riflettere rispetto alla retta $y=x$ scambia le coordinate.

La rotazione di $90^\circ$ antioraria attorno all'origine porta $(x,y)$ in $(-y,x)$. Una rotazione di $180^\circ$ porta $(x,y)$ in $(-x,-y)$. Se il centro è $C(a,b)$, si sottraggono prima le coordinate del centro, si ruota il vettore ottenuto e poi si sommano di nuovo $(a,b)$. Per la rotazione di $180^\circ$ si ottiene direttamente $(2a-x,2b-y)$.

Un'omotetia di centro nell'origine e rapporto $k>0$ porta $(x,y)$ in $(kx,ky)$. Conserva gli angoli, ma moltiplica le distanze per $k$ e le aree per $k^2$. Una circonferenza resta una circonferenza; nelle isometrie il raggio resta uguale, nell'omotetia viene moltiplicato per $k$.
:::

:::esempio{titolo="Ordine delle trasformazioni"}
Il punto $P=(2,1)$ viene traslato di $(3,0)$ e poi riflesso rispetto all'asse $y$. Dopo la traslazione è $(5,1)$, quindi alla fine è $(-5,1)$. Se si inverte l'ordine, la simmetria dà $(-2,1)$ e la traslazione dà $(1,1)$. Le due operazioni non hanno lo stesso effetto quando si cambia l'ordine.

::struttura{punti="2,1,P;5,1,Q;-5,1,R" frecce="0,0,6,0,x;0,0,0,3,y;2,1,5,1;5,1,-5,1" riferimento=0 titolo="P viene traslato in Q e poi riflesso in R"}
:::

:::definizione{#regioni titolo="Condizioni simultanee nel piano"}
Una disequazione lineare descrive un semipiano. La condizione $x\ge2$ comprende la retta verticale $x=2$ e i punti alla sua destra; $y<3$ comprende i punti sotto la retta $y=3$, escludendo la retta. Un sistema richiede che le condizioni siano soddisfatte insieme, quindi descrive l'intersezione delle regioni. Per verificare l'appartenenza di un punto si sostituiscono entrambe le coordinate in tutte le condizioni. Un'equazione aggiunta restringe la regione ai punti della relativa curva.
:::
