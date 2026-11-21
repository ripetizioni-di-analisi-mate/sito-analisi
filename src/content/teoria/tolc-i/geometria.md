---
titolo: "Geometria per il TOLC-I"
sommario: "Figure piane e solide, distanze, similitudine e geometria analitica, con esempi e figure."
---

## Angoli, triangoli e distanze

:::definizione{#angoli titolo="Angoli e rette parallele"}
Un **angolo** è la parte di piano compresa fra due semirette con la stessa origine, detta vertice; una semiretta è la parte di una retta che parte da un punto e prosegue da un solo lato. L'ampiezza si misura in gradi, con simbolo $^\circ$: un giro completo misura $360^\circ$, un angolo piatto $180^\circ$ e un angolo retto $90^\circ$. Un angolo acuto è minore di $90^\circ$; un angolo ottuso è compreso fra $90^\circ$ e $180^\circ$.

Due angoli sono **complementari** se la loro somma è $90^\circ$ e **supplementari** se è $180^\circ$. Il complementare di $38^\circ$ è $52^\circ$ e il supplementare è $180^\circ-38^\circ=142^\circ$.

Due rette che si intersecano formano quattro angoli. Due di essi con un lato in comune si dicono adiacenti; insieme formano un angolo piatto, quindi sono supplementari. Due angoli opposti al vertice, cioè uno di fronte all'altro, sono uguali, perché sono supplementari dello stesso angolo. Se i quattro angoli sono retti, le due rette sono perpendicolari.

Due rette **parallele** sono rette dello stesso piano senza punti in comune. Una retta che le interseca entrambe, detta trasversale, forma con esse otto angoli.

- Gli angoli **corrispondenti** occupano la stessa posizione nelle due intersezioni, per esempio entrambi sopra la parallela e a destra della trasversale, e sono uguali.
- Gli angoli **alterni interni** stanno fra le due parallele, da parti opposte della trasversale, e sono uguali.

Se la trasversale forma con una parallela un angolo di $38^\circ$, l'angolo corrispondente sull'altra misura $38^\circ$ e quello adiacente $142^\circ$. La misura di un angolo si riporta così da una parte all'altra di una figura e si ricava dai dati e da queste relazioni, anche quando l'inclinazione del disegno suggerisce un valore diverso.
:::

::::teorema{#triangoli titolo="Somma degli angoli e disuguaglianza triangolare"}
In un triangolo, cioè nella figura che ha per vertici tre punti non allineati, la somma dei tre angoli interni è $180^\circ$. Se due angoli misurano $50^\circ$ e $60^\circ$, il terzo misura $180^\circ-50^\circ-60^\circ=70^\circ$.

Inoltre ogni lato è minore della somma degli altri due (**disuguaglianza triangolare**). Se due lati misurano $a$ e $b$, il terzo lato $c$ soddisfa
$$
|a-b|<c<a+b,
$$
dove $|a-b|$ è il valore assoluto della differenza, cioè il lato maggiore meno il minore. Con lati $4$ e $7$ il terzo lato è maggiore di $7-4=3$ e minore di $7+4=11$. Tre segmenti lunghi $4$, $7$ e $12$ non formano un triangolo, perché $12>11$.

:::dimostrazione
Per la somma degli angoli si traccia per un vertice la parallela al lato opposto. Essa forma con i due lati uscenti dal vertice due angoli, uguali agli altri due angoli del triangolo perché alterni interni. Con l'angolo del triangolo nel vertice essi formano un angolo piatto, quindi la somma è $180^\circ$.

Per la disuguaglianza, il segmento è il percorso più breve fra due punti, quindi il percorso fra due vertici che passa per il terzo è più lungo del lato che li unisce, cioè $c<a+b$. Allo stesso modo $a<b+c$ e $b<a+c$, cioè $c>a-b$ e $c>b-a$, che insieme equivalgono a $c>|a-b|$.
:::
::::

::::teorema{#pitagora titolo="Teorema di Pitagora"}
Un triangolo **rettangolo** ha un angolo retto. I due lati che lo formano sono i **cateti**; il lato opposto all'angolo retto è l'**ipotenusa**, che è il lato più lungo. Detti $a,b$ i cateti e $c$ l'ipotenusa, vale
$$
c^2=a^2+b^2.
$$
Con il teorema si calcola un lato quando sono noti gli altri due, e quindi una distanza obliqua a partire da due spostamenti perpendicolari. Con cateti $6$ e $8$ si ha $c^2=36+64=100$, quindi $c=10$.

Vale anche il teorema inverso: se il quadrato del lato maggiore è uguale alla somma dei quadrati degli altri due, il triangolo è rettangolo. È il caso dei lati $5$, $12$ e $13$, perché $25+144=169$.

:::dimostrazione
Su ogni lato di un quadrato di lato $a+b$ si segna il punto che lo divide in un tratto lungo $a$ e in uno lungo $b$, sempre nello stesso verso. Unendo i quattro punti il quadrato risulta diviso in quattro triangoli rettangoli uguali, di cateti $a$ e $b$, e in un quadrato interno di lato $c$. Il confronto delle aree dà
$$
(a+b)^2=4\cdot\frac{ab}{2}+c^2.
$$
Il primo membro è $a^2+2ab+b^2$ e il secondo è $2ab+c^2$. Sottraendo $2ab$ da entrambi resta $a^2+b^2=c^2$.
:::
::::

:::esempio{titolo="Un'altezza in un triangolo isoscele"}
Un triangolo isoscele ha due lati uguali; il terzo lato è la base. L'**altezza** relativa a un lato è il segmento perpendicolare condotto a quel lato dal vertice opposto. Nel triangolo isoscele l'altezza relativa alla base la divide a metà.

Nella figura il triangolo $ABC$ ha i lati uguali di $13\,\mathrm{cm}$ e la base $AB$ di $10\,\mathrm{cm}$. L'altezza $CH$ divide la base in due segmenti di $5\,\mathrm{cm}$. Il triangolo $AHC$ è rettangolo in $H$ e ha ipotenusa $AC$, quindi
$$
CH=\sqrt{13^2-5^2}=\sqrt{144}=12\,\mathrm{cm}.
$$
L'area di un triangolo è la metà del prodotto fra una base e l'altezza relativa, quindi l'area di $ABC$ è $\dfrac{10\cdot12}{2}=60\,\mathrm{cm^2}$. Il lato di $13\,\mathrm{cm}$ è obliquo rispetto alla base, perciò l'altezza usata nel prodotto è $CH=12\,\mathrm{cm}$.

::struttura{nodi="A,-5,0;B,5,0;C,0,12;H,0,0" linee="-5,0 5,0 0,12 -5,0;0,0 0,12;0,0.7 0.7,0.7 0.7,0" quote="A,H,5 cm;H,B,5 cm;A,C,13 cm,-0.8" titolo="L'altezza CH divide il triangolo isoscele in due triangoli rettangoli"}
:::

:::osservazione{titolo="Classificazione mediante i lati"}
Un triangolo è acutangolo se ha tre angoli acuti e ottusangolo se ha un angolo ottuso. Siano $a,b,c$ i lati di un triangolo, con $c$ il maggiore. L'angolo più ampio è quello opposto a $c$.

- Se $c^2=a^2+b^2$, il triangolo è rettangolo.
- Se $c^2<a^2+b^2$, il triangolo è acutangolo. Con lati $4$, $5$ e $6$ si ha $36<16+25$.
- Se $c^2>a^2+b^2$, il triangolo è ottusangolo. Con lati $3$, $5$ e $7$ si ha $49>9+25$.

Il criterio segue dal teorema del coseno, $c^2=a^2+b^2-2ab\cos\gamma$, dove $\gamma$ (gamma) è l'angolo opposto a $c$; il teorema è enunciato nel capitolo di trigonometria. Il coseno di un angolo ottuso è negativo, quindi in quel caso $c^2>a^2+b^2$; il coseno di un angolo acuto è positivo, quindi $c^2<a^2+b^2$. Il criterio si applica a lunghezze che soddisfano la disuguaglianza triangolare, come $3$, $5$ e $7$, per le quali $7<3+5$.
:::

## Similitudine e rapporti di scala

:::definizione{#similitudine titolo="Figure simili"}
Due figure sono **simili** se hanno la stessa forma, cioè se una è l'ingrandimento o la riduzione dell'altra. Gli angoli corrispondenti sono uguali e ogni lunghezza della seconda figura è la lunghezza corrispondente della prima moltiplicata per uno stesso numero $k>0$, detto **rapporto di similitudine**.

I triangoli di lati $3,4,5$ e $6,8,10$ sono simili con $k=2$, perché $\dfrac63=\dfrac84=\dfrac{10}{5}=2$. I rapporti si scrivono tutti nello stesso ordine e fra lati corrispondenti, cioè opposti ad angoli uguali. Due triangoli con due coppie di angoli uguali sono simili; infatti anche il terzo angolo è uguale, perché in entrambi la somma è $180^\circ$.

- Lati, altezze e perimetri sono moltiplicati per $k$. Il perimetro è la somma dei lati e nell'esempio passa da $12$ a $24$.
- Le aree sono moltiplicate per $k^2$, perché un'area è il prodotto di due lunghezze. I due triangoli dell'esempio sono rettangoli e hanno aree $\dfrac{3\cdot4}{2}=6$ e $\dfrac{6\cdot8}{2}=24=6\cdot2^2$.
- I volumi di due solidi simili sono moltiplicati per $k^3$. Un cubo di lato $2$ ha volume $8$, uno di lato $6$ ha volume $216=8\cdot3^3$.
:::

:::esempio{titolo="Dalle superfici alle lunghezze"}
Due quadrati hanno aree $18\,\mathrm{cm^2}$ e $50\,\mathrm{cm^2}$. Il rapporto fra le aree è $k^2=\dfrac{18}{50}$, quindi il rapporto fra il lato del primo e quello del secondo è
$$
k=\sqrt{\frac{18}{50}}=\sqrt{\frac{9}{25}}=\frac35.
$$
Lo stesso rapporto vale per i perimetri, che sono lunghezze. Il numero $\dfrac{9}{25}$ è il rapporto fra le aree; usarlo per i lati significherebbe applicare due volte il fattore di scala.

In un disegno in scala $1:200$ ogni lunghezza reale è $200$ volte quella del disegno. Un segmento di $3\,\mathrm{cm}$ rappresenta $3\cdot200=600\,\mathrm{cm}=6\,\mathrm{m}$.
:::

:::osservazione
Un palo e un albero verticali, su un terreno orizzontale, ricevono i raggi del Sole con la stessa direzione. I triangoli rettangoli formati da ciascuno con la propria ombra hanno quindi gli stessi angoli e sono simili. Se il palo è alto $2\,\mathrm{m}$ e ha un'ombra di $3\,\mathrm{m}$, e l'ombra dell'albero misura $12\,\mathrm{m}$, l'altezza $h$ dell'albero soddisfa
$$
\frac{h}{12}=\frac23,\qquad h=12\cdot\frac23=8\,\mathrm{m}.
$$
:::

## Poligoni, aree e scomposizioni

:::definizione{#aree titolo="Area e altezza relativa"}
L'**area** misura l'estensione di una regione piana e si esprime in unità quadrate, come il $\mathrm{cm^2}$. Nelle formule $b$ è un lato scelto come base e l'**altezza** $h$ è la distanza perpendicolare fra la retta della base e il lato opposto oppure, nel triangolo, il vertice opposto.

| Figura | Area | Esempio |
|---|---|---|
| Rettangolo | $bh$ | $b=5$, $h=3$: $15$ |
| Parallelogramma, con i lati opposti paralleli | $bh$ | $b=5$, $h=3$: $15$ |
| Triangolo | $\dfrac{bh}{2}$ | $b=5$, $h=3$: $7{,}5$ |
| Trapezio, con due lati paralleli $B$ e $b$ detti basi | $\dfrac{(B+b)h}{2}$ | $B=7$, $b=3$, $h=4$: $20$ |
| Rombo, con quattro lati uguali e diagonali perpendicolari $d_1$, $d_2$ | $\dfrac{d_1d_2}{2}$ | $d_1=6$, $d_2=8$: $24$ |

Spostando un triangolo da un lato all'altro, un parallelogramma diventa un rettangolo con la stessa base e la stessa altezza. Due copie di un triangolo formano un parallelogramma, quindi l'area del triangolo è la metà; allo stesso modo due copie di un trapezio formano un parallelogramma di base $B+b$. Le diagonali di un rombo, cioè i segmenti che uniscono i vertici opposti, lo dividono in quattro triangoli rettangoli uguali, di cateti $\dfrac{d_1}{2}$ e $\dfrac{d_2}{2}$; ciascuno ha area $\dfrac{d_1d_2}{8}$ e i quattro insieme $\dfrac{d_1d_2}{2}$.

Prima del prodotto le lunghezze si esprimono nella stessa unità.
:::

:::esempio{titolo="Area con una parte asportata"}
Da un rettangolo di $10\,\mathrm{cm}$ per $6\,\mathrm{cm}$ si toglie, in un angolo, un rettangolo di $4\,\mathrm{cm}$ per $2\,\mathrm{cm}$. Nella figura la regione rimasta ha i vertici da $A$ a $F$, e i lati $DC$ ed $ED$ sono il bordo lasciato dalla parte tolta. L'area rimasta è la differenza fra le due aree:
$$
A=10\cdot6-4\cdot2=60-8=52\,\mathrm{cm^2}.
$$
Il perimetro è la somma dei sei lati. I due lati senza misura nella figura sono $BC=6-2=4\,\mathrm{cm}$ ed $EF=10-4=6\,\mathrm{cm}$, quindi il perimetro è $10+4+4+2+6+6=32\,\mathrm{cm}$. L'area è diminuita, mentre il perimetro è quello del rettangolo intero, $2\cdot(10+6)=32\,\mathrm{cm}$, perché i due tratti di contorno tolti sono sostituiti da $DC$ ed $ED$, che hanno le stesse lunghezze.

::struttura{poligoni="0,0 10,0 10,4 6,4 6,6 0,6" nodi="A,0,0;B,10,0;C,10,4;D,6,4;E,6,6;F,0,6" quote="A,B,10 cm;F,A,6 cm;D,C,4 cm;E,D,2 cm" titolo="La regione rimasta ha area 52 centimetri quadrati"}
:::

:::teorema{#poligoni titolo="Angoli e diagonali di un poligono"}
Un **poligono** è una figura piana chiusa delimitata da segmenti, detti lati. È convesso se tutti i suoi angoli interni sono minori di $180^\circ$ ed è regolare se ha tutti i lati uguali e tutti gli angoli uguali. Una **diagonale** è un segmento che unisce due vertici non consecutivi.

Le diagonali tracciate da un solo vertice dividono un poligono convesso con $n\ge3$ lati in $n-2$ triangoli; il simbolo $\ge$ si legge «maggiore o uguale». La somma degli angoli interni è quindi $(n-2)\cdot180^\circ$. Per un esagono, con $n=6$, la somma è $4\cdot180^\circ=720^\circ$.

In un poligono regolare ogni angolo interno misura $\dfrac{(n-2)\cdot180^\circ}{n}$ e ogni angolo esterno, che è il suo supplementare, misura $\dfrac{360^\circ}{n}$. Nell'esagono regolare essi misurano $\dfrac{720^\circ}{6}=120^\circ$ e $\dfrac{360^\circ}{6}=60^\circ$.

Da ogni vertice partono $n-3$ diagonali, perché si escludono il vertice stesso e i due vicini. Nel prodotto $n(n-3)$ ogni diagonale è contata due volte, una per estremo, quindi le diagonali sono $\dfrac{n(n-3)}{2}$. Un esagono ne ha $\dfrac{6\cdot3}{2}=9$.
:::

## Cerchi, archi e corde

:::definizione{#cerchio titolo="Circonferenza e cerchio"}
La **circonferenza** è la linea formata dai punti che hanno la stessa distanza $r>0$, detta raggio, da un punto $O$, detto centro. Il **cerchio** comprende anche i punti interni. Un diametro è un segmento che unisce due punti della circonferenza passando per il centro e misura $2r$. La lunghezza della circonferenza è $2\pi r$ e l'area del cerchio è $\pi r^2$, dove $\pi$ (pi greco) vale circa $3{,}14$. Con $r=5\,\mathrm{cm}$ la circonferenza misura $10\pi\approx31{,}4\,\mathrm{cm}$ e l'area è $25\pi\approx78{,}5\,\mathrm{cm^2}$; il simbolo $\approx$ si legge «circa uguale a». Il raggio compare alla prima potenza nella lunghezza, che si misura in $\mathrm{cm}$, e al quadrato nell'area, che si misura in $\mathrm{cm^2}$.

Una **corda** è un segmento che unisce due punti della circonferenza. La perpendicolare condotta dal centro a una corda la divide a metà. Se la corda dista $d<r$ dal centro, la distanza $d$, metà della corda e un raggio formano un triangolo rettangolo di ipotenusa $r$, quindi metà della corda misura $\sqrt{r^2-d^2}$.

Una retta **tangente** ha in comune con la circonferenza un solo punto, il punto di contatto, e in quel punto è perpendicolare al raggio. Se $T$ è il punto di contatto di una tangente condotta da un punto $P$, il triangolo $OTP$ è quindi rettangolo in $T$.
:::

:::definizione{#settori titolo="Arco e settore circolare"}
Un angolo al centro ha il vertice nel centro del cerchio. I suoi lati delimitano un **arco**, cioè un tratto di circonferenza, e un **settore circolare**, cioè la parte di cerchio compresa fra i due raggi e l'arco. Un settore con angolo al centro $\alpha$ in gradi è la frazione $\dfrac{\alpha}{360^\circ}$ del cerchio. Perciò la lunghezza $\ell$ dell'arco e l'area $A$ del settore sono
$$
\ell=\frac{\alpha}{360^\circ}2\pi r,
\qquad A=\frac{\alpha}{360^\circ}\pi r^2.
$$
Con $r=6\,\mathrm{cm}$ e $\alpha=60^\circ$ la frazione è $\dfrac16$. L'arco misura $\dfrac16\cdot12\pi=2\pi\approx6{,}28\,\mathrm{cm}$ e l'area del settore è $\dfrac16\cdot36\pi=6\pi\approx18{,}85\,\mathrm{cm^2}$. Il contorno del settore comprende l'arco e i due raggi, quindi il perimetro è $\ell+2r=2\pi+12\approx18{,}28\,\mathrm{cm}$.

Un angolo alla circonferenza ha il vertice sulla circonferenza e i lati che passano per i due estremi di un arco. Misura la metà dell'angolo al centro che insiste sullo stesso arco, cioè con i lati passanti per gli stessi estremi: a un angolo al centro di $80^\circ$ corrisponde un angolo alla circonferenza di $40^\circ$. Se l'arco è una semicirconferenza, l'angolo al centro è piatto e l'angolo alla circonferenza è retto.
:::

:::esempio{titolo="Corda e distanza dal centro"}
Una corda $AB$ di una circonferenza di centro $O$ e raggio $5\,\mathrm{cm}$ dista $3\,\mathrm{cm}$ dal centro. Nella figura $OM$ è la perpendicolare condotta dal centro alla corda, quindi misura $3\,\mathrm{cm}$ e $M$ è il punto medio di $AB$. Il triangolo $OMA$ è rettangolo in $M$ e ha ipotenusa $OA=5\,\mathrm{cm}$, quindi
$$
MA=\sqrt{5^2-3^2}=\sqrt{16}=4\,\mathrm{cm}.
$$
La corda intera misura $AB=2\cdot4=8\,\mathrm{cm}$.

::struttura{cerchi="0,0,5" nodi="O,0,0;M,3,0;A,3,4;B,3,-4" linee="0,0 3,4;3,-4 3,4;0,0 3,0" quote="O,M,3 cm,0.5;O,A,5 cm,-0.8" titolo="Il raggio OA e la distanza OM determinano metà della corda AB"}
:::

## Solidi e unità di misura

:::definizione{#volumi titolo="Prismi, piramidi e solidi di rotazione"}
Il **volume** misura lo spazio occupato da un solido e si esprime in unità cubiche, come il $\mathrm{cm^3}$. Un prisma ha due basi uguali e parallele, che sono poligoni; il parallelepipedo rettangolo è il prisma a forma di scatola, con tutte le facce rettangolari. Un cilindro ha per basi due cerchi. Una piramide ha per base un poligono e un cono ha per base un cerchio; entrambi terminano in un vertice. L'altezza $h$ è la distanza perpendicolare fra le due basi oppure fra il vertice e il piano della base, e $A_b$ è l'area della base.

| Solido | Volume | Esempio |
|---|---|---|
| Prisma | $A_bh$ | scatola di lati $3$, $4$, $12$: $3\cdot4\cdot12=144$ |
| Cilindro | $\pi r^2h$ | $r=3$, $h=10$: $90\pi\approx282{,}7$ |
| Piramide | $\dfrac{A_bh}{3}$ | base quadrata di lato $6$, $h=10$: $\dfrac{36\cdot10}{3}=120$ |
| Cono | $\dfrac{\pi r^2h}{3}$ | $r=3$, $h=10$: $30\pi\approx94{,}2$ |
| Sfera di raggio $r$ | $\dfrac43\pi r^3$ | $r=3$: $36\pi\approx113{,}1$ |

Cilindro, cono e sfera sono solidi di rotazione, cioè ottenuti facendo ruotare una figura piana attorno a una retta.

Il fattore $\dfrac13$ riguarda soltanto i volumi di piramidi e coni. La superficie di un solido è la somma delle aree delle parti che lo delimitano.

- La sfera ha superficie $4\pi r^2$.
- La superficie laterale di un cilindro, distesa su un piano, è un rettangolo di lati $2\pi r$ e $h$. Con le due basi la superficie totale è $2\pi rh+2\pi r^2$, che per $r=3$ e $h=10$ vale $60\pi+18\pi=78\pi\approx245{,}0$. Un cilindro aperto sopra ha una sola base.
- In un cono retto, cioè con il vertice sopra il centro della base, l'**apotema** $s$ è la distanza del vertice dalla circonferenza di base. Altezza, raggio e apotema formano un triangolo rettangolo, quindi $s=\sqrt{r^2+h^2}$, e l'area laterale è $\pi rs$. Con $r=3$ e $h=4$ si ha $s=5$ e l'area laterale è $15\pi\approx47{,}1$.
:::

:::esempio{titolo="Diagonale di una scatola"}
Un parallelepipedo rettangolo ha spigoli, cioè lati delle facce, di $3$, $4$ e $12\,\mathrm{cm}$. La diagonale nello spazio unisce due vertici che non stanno su una stessa faccia. La diagonale della base, che è un rettangolo di lati $3\,\mathrm{cm}$ e $4\,\mathrm{cm}$, misura $\sqrt{3^2+4^2}=5\,\mathrm{cm}$. Essa è perpendicolare allo spigolo verticale di $12\,\mathrm{cm}$, quindi la diagonale nello spazio è l'ipotenusa di un triangolo rettangolo e misura
$$
d=\sqrt{5^2+12^2}=\sqrt{169}=13\,\mathrm{cm}.
$$
Il teorema di Pitagora è applicato due volte e, per spigoli $a,b,c$, i due passaggi insieme danno $d=\sqrt{a^2+b^2+c^2}$. In un cubo di spigolo $a$ la diagonale di una faccia misura $\sqrt{a^2+a^2}=a\sqrt2$ e la diagonale nello spazio $\sqrt{3a^2}=a\sqrt3$.
:::

:::osservazione{#unita-geometriche titolo="Conversioni di area e volume"}
Poiché $1\,\mathrm{m}=100\,\mathrm{cm}$, un quadrato di lato $1\,\mathrm{m}$ contiene $100$ file di $100$ quadrati di lato $1\,\mathrm{cm}$. Dunque $1\,\mathrm{m^2}=100^2\,\mathrm{cm^2}=10000\,\mathrm{cm^2}$. Allo stesso modo $1\,\mathrm{m^3}=100^3\,\mathrm{cm^3}=1000000\,\mathrm{cm^3}$.

La capacità di un recipiente si misura in litri, con simbolo $\mathrm{L}$. Un litro è il volume di un cubo di spigolo un decimetro, cioè $10\,\mathrm{cm}$, quindi $1\,\mathrm{L}=1\,\mathrm{dm^3}=1000\,\mathrm{cm^3}$.

Una vasca a forma di parallelepipedo ha la base interna di $40\,\mathrm{cm}$ per $30\,\mathrm{cm}$ e contiene $6\,\mathrm{L}=6000\,\mathrm{cm^3}$ d'acqua. L'acqua occupa un parallelepipedo con la stessa base e con altezza $h$, quindi $40\cdot30\cdot h=6000$ e $h=\dfrac{6000}{1200}=5\,\mathrm{cm}$. La verifica dà $1200\cdot5=6000\,\mathrm{cm^3}$. Il valore trovato è l'altezza dell'acqua; l'altezza della vasca è un'altra grandezza, maggiore o uguale a $5\,\mathrm{cm}$.
:::

## Coordinate, punti medi e luoghi

:::definizione{#coordinate titolo="Distanza e punto medio"}
Nel **piano cartesiano** sono fissate due rette orientate e perpendicolari, l'asse $x$ orizzontale e l'asse $y$ verticale, che si incontrano nell'origine. Le coordinate di un punto $P(x,y)$ sono due: l'**ascissa** $x$ è lo spostamento orizzontale dall'origine, positivo verso destra; l'**ordinata** $y$ è lo spostamento verticale, positivo verso l'alto. Il punto $(3,-2)$ si raggiunge dall'origine con $3$ unità verso destra e $2$ verso il basso.

Dati $A(x_1,y_1)$ e $B(x_2,y_2)$, le differenze $x_2-x_1$ e $y_2-y_1$ sono gli spostamenti orizzontale e verticale da $A$ a $B$, cioè i cateti di un triangolo rettangolo di ipotenusa $AB$. Per il teorema di Pitagora
$$
AB=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}.
$$
Per $A(1,2)$ e $B(4,6)$ gli spostamenti sono $3$ e $4$, quindi $AB=\sqrt{9+16}=5$.

Il **punto medio** di un segmento è il suo punto equidistante, cioè alla stessa distanza, dagli estremi e ha per coordinate le medie delle loro coordinate:
$$
M=\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2}\right).
$$
Il punto medio fra $(-2,5)$ e $(6,-1)$ è $\left(\dfrac{-2+6}{2},\dfrac{5-1}{2}\right)=(2,2)$.

La distanza di $(x,y)$ dall'asse $x$ è $|y|$ e quella dall'asse $y$ è $|x|$. Il valore assoluto è il numero privato del segno, e una distanza è positiva o nulla.
:::

:::definizione{#luoghi titolo="Luoghi geometrici"}
Un **luogo geometrico** è l'insieme di tutti i punti che hanno una stessa proprietà. La circonferenza, per esempio, è il luogo dei punti a distanza $r$ dal centro.

L'**asse** di un segmento $AB$ è la retta perpendicolare al segmento nel suo punto medio, ed è il luogo dei punti equidistanti da $A$ e da $B$. In coordinate la condizione $PA=PB$ si scrive $PA^2=PB^2$, che è priva di radici. Con $A(0,0)$, $B(4,2)$ e $P(x,y)$ si ha $x^2+y^2=(x-4)^2+(y-2)^2$. Sviluppando i quadrati, i termini $x^2$ e $y^2$ si semplificano e resta $0=-8x-4y+20$, cioè la retta $2x+y=5$, che passa per il punto medio $(2,1)$.

In un triangolo le rette di ciascuna delle quattro terne seguenti si incontrano in un punto.

| Rette | Che cosa sono | Punto d'incontro |
|---|---|---|
| Assi dei lati | perpendicolari ai lati nei punti medi | **circocentro**, equidistante dai tre vertici |
| Bisettrici | dividono ciascun angolo interno in due angoli uguali | **incentro**, equidistante dai tre lati |
| Mediane | uniscono ciascun vertice al punto medio del lato opposto | **baricentro** |
| Altezze | perpendicolari condotte da ciascun vertice alla retta del lato opposto | **ortocentro** |

Il baricentro divide ogni mediana in due parti, e quella verso il vertice è il doppio dell'altra (rapporto $2:1$): su una mediana lunga $9\,\mathrm{cm}$ dista $6\,\mathrm{cm}$ dal vertice e $3\,\mathrm{cm}$ dal punto medio del lato. L'ortocentro è interno nei triangoli acutangoli, è il vertice dell'angolo retto nei triangoli rettangoli ed è esterno nei triangoli ottusangoli. I quattro punti sono definiti da proprietà diverse e occupano posizioni diverse; coincidono solo nel triangolo equilatero, che ha i tre lati uguali.
:::

:::osservazione{titolo="Coordinate e trasformazioni"}
Una **trasformazione** del piano associa a ogni punto $(x,y)$ un altro punto e si descrive dicendo come cambiano le coordinate. Le tre che seguono sono applicate a $P(3,1)$.

- La **traslazione** sposta tutti i punti di uno stesso vettore $(u,v)$, cioè di $u$ unità in orizzontale e $v$ in verticale, quindi $(x,y)$ diventa $(x+u,y+v)$. Con il vettore $(2,-4)$ il punto $P$ diventa $(5,-3)$.
- La **simmetria** rispetto a una retta porta ogni punto dall'altra parte della retta, alla stessa distanza, lungo la perpendicolare. Rispetto all'asse $x$ cambia il segno di $y$ e $P$ diventa $(3,-1)$; rispetto all'asse $y$ cambia il segno di $x$ e $P$ diventa $(-3,1)$; rispetto alla retta $y=x$ le coordinate si scambiano e $P$ diventa $(1,3)$.
- L'**omotetia** di centro $C$ e rapporto $k>0$ lascia fermo $C$ e moltiplica per $k$ la distanza da $C$ di ogni altro punto, nella stessa direzione. Se il centro è l'origine, $(x,y)$ diventa $(kx,ky)$ e, con $k=2$, $P$ diventa $(6,2)$.

Traslazioni e simmetrie conservano le distanze. Un'omotetia trasforma ogni figura in una figura simile, con rapporto $k$.

Se il centro $C$ è diverso dall'origine, lo spostamento da $C$ a $P$ si moltiplica per $k$ e si applica a partire da $C$. Con $C(1,2)$ e $k=2$ lo spostamento è $(3-1,1-2)=(2,-1)$ e il suo doppio è $(4,-2)$, quindi $P$ va in $(1+4,2-2)=(5,0)$. Il centro resta fermo e la distanza di $P$ da $C$ raddoppia, da $\sqrt5$ a $2\sqrt5$. Moltiplicando direttamente le coordinate di $P$ per $2$ si ottiene $(6,2)$, che è il risultato dell'omotetia con centro nell'origine.
:::

## Rette e intersezioni

:::definizione{#rette titolo="Pendenza ed equazione della retta"}
Una retta non verticale è formata dai punti $(x,y)$ che soddisfano un'equazione $y=mx+q$. Il **coefficiente angolare** $m$, detto anche pendenza, è la variazione di $y$ quando $x$ aumenta di un'unità: se $m>0$ la retta sale da sinistra verso destra, se $m<0$ scende. Il numero $q$ è l'ordinata del punto in cui la retta incontra l'asse $y$, perché per $x=0$ si ha $y=q$. Nella retta $y=2x+1$ si ha $m=2$ e $q=1$.

Dati due punti della retta con ascisse diverse, $m$ è il rapporto fra lo spostamento verticale e quello orizzontale:
$$
m=\frac{y_2-y_1}{x_2-x_1}.
$$
La retta che passa per $(x_0,y_0)$ con coefficiente angolare $m$ ha equazione $y-y_0=m(x-x_0)$. Per i punti $(1,3)$ e $(3,7)$ si ha $m=\dfrac{7-3}{3-1}=2$. La retta è $y-3=2(x-1)$, cioè $y=2x+1$.

Una retta orizzontale ha equazione $y=k$ e coefficiente angolare zero. Una retta verticale ha equazione $x=k$: i suoi punti hanno la stessa ascissa, quindi nel rapporto che definisce $m$ il denominatore è zero e il coefficiente angolare non è definito.
:::

:::teorema{#parallelismo titolo="Parallelismo, perpendicolarità e distanza"}
Due rette non verticali e distinte, con coefficienti angolari $m_1$ e $m_2$, sono parallele se $m_1=m_2$ e sono perpendicolari se $m_1m_2=-1$. Le rette $y=2x+1$ e $y=-\dfrac12x+4$ sono perpendicolari, perché $2\cdot\left(-\dfrac12\right)=-1$. Una retta verticale $x=k$ e una orizzontale $y=h$ sono sempre perpendicolari; questo caso si riconosce dalle equazioni, perché la retta verticale è priva di coefficiente angolare.

Il punto di intersezione di due rette soddisfa entrambe le equazioni, quindi si trova risolvendo il sistema che esse formano.

- Se il sistema ha una sola soluzione, le rette si incontrano in un punto.
- Se il sistema è impossibile, le rette sono parallele e distinte. Per le rette parallele $y=2x+1$ e $y=2x-3$ l'uguaglianza $2x+1=2x-3$ si riduce a $1=-3$, che è falsa.
- Se le due equazioni hanno le stesse soluzioni, le rette coincidono. È il caso di $y=2x+1$ e $2y=4x+2$.

Ogni retta, anche verticale, si scrive nella forma $ax+by+c=0$, con $a$ e $b$ non entrambi nulli. La distanza di un punto $P(x_0,y_0)$ dalla retta è la lunghezza del segmento perpendicolare condotto da $P$ alla retta, e vale
$$
d=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}.
$$
Il valore assoluto elimina il segno, che dipende dal lato della retta in cui si trova il punto. Per $P(1,2)$ e la retta $3x+4y+4=0$ si ha
$$
d=\frac{|3\cdot1+4\cdot2+4|}{\sqrt{3^2+4^2}}=\frac{15}{5}=3.
$$
Se il numeratore è zero, $P$ soddisfa l'equazione, quindi appartiene alla retta e la distanza è zero.
:::

:::esempio{titolo="Intersezione come condizione comune"}
Nel punto comune alle rette $y=2x+1$ e $y=-x+7$ le due espressioni di $y$ sono uguali, quindi $2x+1=-x+7$. Portando i termini con $x$ al primo membro e i numeri al secondo si ottiene $3x=6$, quindi $x=2$. La prima equazione dà $y=2\cdot2+1=5$ e la seconda dà lo stesso valore, $y=-2+7=5$.

Nel grafico la retta che sale è $y=2x+1$, quella che scende è $y=-x+7$ e il punto segnato è la loro intersezione $(2,5)$.

::grafico{f="2*x+1; -x+7" xmin=-1 xmax=5 ymin=-1 ymax=9 punti="2,5,pieno" titolo="Le due rette condividono il punto (2; 5)"}
:::

## La circonferenza nel piano cartesiano

:::definizione{#circonferenza-cartesiana titolo="Centro e raggio dall'equazione"}
Un punto $P(x,y)$ appartiene alla circonferenza di centro $(a,b)$ e raggio $r>0$ se la sua distanza dal centro è $r$. Elevando al quadrato la formula della distanza si ottiene l'equazione
$$
(x-a)^2+(y-b)^2=r^2.
$$
La circonferenza di centro $(2,-3)$ e raggio $5$ ha equazione $(x-2)^2+(y+3)^2=25$, dove $y+3$ viene da $y-(-3)$.

Il primo membro è il quadrato della distanza dal centro, e il confronto con $r^2$ stabilisce la posizione di un punto.

- Il punto $(5,1)$ dà $3^2+4^2=25$, quindi sta sulla circonferenza.
- L'origine dà $4+9=13<25$, quindi è interna.
- Il punto $(8,0)$ dà $36+9=45>25$, quindi è esterno.

Sviluppando i quadrati l'equazione diventa $x^2+y^2-4x+6y-12=0$, e in questa forma il centro e il raggio non si leggono direttamente. Per ritrovarli si **completano i quadrati**.

1. Si raggruppano i termini e si porta il numero al secondo membro: $(x^2-4x)+(y^2+6y)=12$.
2. L'espressione $x^2-4x$ diventa un quadrato aggiungendo $4$, cioè il quadrato della metà del coefficiente di $x$: $x^2-4x+4=(x-2)^2$.
3. Allo stesso modo $y^2+6y+9=(y+3)^2$.
4. I numeri $4$ e $9$ si aggiungono a entrambi i membri: $(x-2)^2+(y+3)^2=12+4+9=25$.

Il centro è $(2,-3)$ e il raggio è $\sqrt{25}=5$. Una somma di quadrati è positiva o nulla. Perciò, se il secondo membro risulta negativo, nessun punto soddisfa l'equazione; se è zero, la soddisfa il solo centro.
:::

:::osservazione{#intersezioni-circonferenza titolo="Posizione reciproca di rette e circonferenze"}
Una retta che dista $d$ dal centro di una circonferenza di raggio $r$ è **secante** se $d<r$, con due punti in comune, tangente se $d=r$, con un solo punto in comune, ed esterna se $d>r$, senza punti in comune.

Sostituendo l'equazione della retta in quella della circonferenza si ottiene un'equazione di secondo grado, che nei tre casi ha due, una o nessuna soluzione. Per la circonferenza $x^2+y^2=25$, di centro l'origine e raggio $5$, la retta $y=3$ dista $3$ dal centro ed è secante. La sostituzione dà $x^2+9=25$, cioè $x^2=16$, e i punti comuni sono $(4,3)$ e $(-4,3)$.

Per due circonferenze distinte, di raggi $r_1$ e $r_2$ e con i centri a distanza $d$, si confronta $d$ con la somma e con la differenza dei raggi. Negli esempi i raggi sono $5$ e $3$.

| Condizione | Posizione e punti comuni | Esempio |
|---|---|---|
| $d>r_1+r_2$ | esterne, nessun punto | $d=10$ |
| $d=r_1+r_2$ | tangenti esternamente, un punto | $d=8$ |
| $\lvert r_1-r_2\rvert<d<r_1+r_2$ | secanti, due punti | $d=6$ |
| $d=\lvert r_1-r_2\rvert$ | tangenti internamente, un punto | $d=2$ |
| $d<\lvert r_1-r_2\rvert$ | una interna all'altra, nessun punto | $d=1$ |

Due circonferenze con lo stesso centro e lo stesso raggio coincidono e hanno infiniti punti comuni. Questo caso è distinto dalla tangenza interna, benché anche qui $d=\lvert r_1-r_2\rvert=0$.
:::

## Parabole, ellissi e iperboli

:::definizione{#coniche titolo="Riconoscere una conica"}
Parabola, ellisse e iperbole sono curve dette **coniche**. La **parabola** è il luogo dei punti equidistanti da un punto, il fuoco, e da una retta, la direttrice, che non passa per il fuoco. Con asse verticale ha equazione $y=ax^2+bx+c$, con $a\ne0$; il simbolo $\ne$ si legge «diverso da». Il vertice è il punto più basso della curva se $a>0$ e il più alto se $a<0$. Ha ascissa $x_V=-\dfrac{b}{2a}$ e ordinata ottenuta sostituendo $x_V$ nell'equazione. Per $y=x^2-4x+3$ si ha $x_V=\dfrac42=2$ e $y_V=4-8+3=-1$. Completando il quadrato si ha $y=(x^2-4x+4)-1=(x-2)^2-1$. Il quadrato vale zero per $x=2$, quindi il minimo di $y$ è $-1$, il vertice è $(2,-1)$ e l'asse di simmetria è la retta $x=2$.

L'**ellisse** è il luogo dei punti per i quali la somma delle distanze da due punti fissi, i fuochi, è costante. Con il centro nell'origine e gli assi di simmetria sugli assi cartesiani ha equazione $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$, con $a,b>0$. Incontra gli assi nei punti $(\pm a,0)$ e $(0,\pm b)$, dove $\pm a$ indica i due valori $a$ e $-a$. Se $a>b$, i fuochi sono i punti $(\pm c,0)$ con $c=\sqrt{a^2-b^2}$ e la somma delle distanze è $2a$. Per $\dfrac{x^2}{25}+\dfrac{y^2}{9}=1$ si ha $a=5$, $b=3$ e $c=\sqrt{25-9}=4$. Il punto $(0,3)$ dista $\sqrt{4^2+3^2}=5$ da ciascun fuoco, e $5+5=10=2a$.

L'**iperbole** $\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1$ ha i due segni opposti ed è formata da due rami. I vertici sono i punti $(\pm a,0)$. Gli asintoti sono le rette $y=\pm\dfrac ba x$, alle quali i rami si avvicinano allontanandosi dal centro. I fuochi sono i punti $(\pm c,0)$ con $c^2=a^2+b^2$. Per $\dfrac{x^2}{9}-\dfrac{y^2}{16}=1$ si ha $a=3$ e $b=4$, gli asintoti sono $y=\pm\dfrac43x$ e $c=\sqrt{9+16}=5$.

Per riconoscere la conica si divide l'equazione in modo che il secondo membro sia $1$ e poi si leggono i segni e i denominatori. L'equazione $4x^2+9y^2=36$, divisa per $36$, diventa $\dfrac{x^2}{9}+\dfrac{y^2}{4}=1$. I due segni sono positivi, quindi è un'ellisse con $a=3$ e $b=2$.
:::

:::esempio{titolo="Intersezione e tangenza a una parabola"}
La retta $y=2x-1$ incontra la parabola $y=x^2$ nei punti in cui $x^2=2x-1$, cioè $x^2-2x+1=0$. Il primo membro è $(x-1)^2$, quindi l'unica soluzione è $x=1$, con $y=1$. La retta e la parabola hanno in comune il solo punto $(1,1)$ e la retta è **tangente**. Nel grafico la retta tocca la parabola nel punto segnato $(1,1)$ e altrove sta sotto la curva.

Con la retta $y=2x$ l'equazione è $x^2=2x$, cioè $x(x-2)=0$, e i punti comuni sono due, $(0,0)$ e $(2,4)$. I punti comuni sono tanti quante le soluzioni distinte dell'equazione di secondo grado; una soluzione doppia, come $x=1$, corrisponde alla tangenza.

::grafico{f="x^2;2*x-1" xmin=-1 xmax=3 ymin=-2 ymax=6 punti="1,1,pieno" titolo="La retta tocca la parabola nel solo punto (1; 1)"}
:::
