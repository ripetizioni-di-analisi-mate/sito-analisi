---
titolo: Geometria, coordinate e unità di misura
sommario: Conversioni, aree, volumi, similitudine, triangoli rettangoli e primi problemi di geometria analitica.
---

:::percorso
Le proporzioni aiutano a passare da una misura a un'altra e a interpretare una scala. Qui le usi per confrontare figure, ricavare lunghezze da aree e volumi e risolvere problemi sui triangoli. Il piano cartesiano permette poi di esprimere distanze e allineamenti con le coordinate.
:::

## Unità di misura e scale

:::teorema{#conversioni titolo="Conversioni di lunghezza, area e volume"}
Un metro contiene $100$ centimetri. Un metro quadrato è l'area di un quadrato con lati di $100$ centimetri, quindi $1\,\mathrm{m^2}=10\,000\,\mathrm{cm^2}$. Un metro cubo ha tre dimensioni da $100$ centimetri, quindi $1\,\mathrm{m^3}=1\,000\,000\,\mathrm{cm^3}$. Il fattore di conversione della lunghezza va elevato al quadrato per le aree e al cubo per i volumi.
:::

:::esempio{titolo="Capacità di un recipiente"}
Un litro occupa $1\,\mathrm{dm^3}=1\,000\,\mathrm{cm^3}$. Un recipiente da $2{,}4$ litri ha quindi volume $2\,400\,\mathrm{cm^3}$. Dato che $1\,\mathrm{mL}=1\,\mathrm{cm^3}$, contiene anche $2\,400$ millilitri.
:::

:::definizione{#scala-e-similitudine titolo="Scala e figure simili"}
In una pianta in scala uno a cento, una lunghezza sul disegno rappresenta cento volte quella misura nella realtà. Figure **simili** hanno angoli corrispondenti uguali e lunghezze corrispondenti nello stesso rapporto $k$. Quando tutte le lunghezze si moltiplicano per $k$, le aree si moltiplicano per $k^2$ e i volumi per $k^3$.
:::

## Perimetri, aree e figure composte

:::definizione{#perimetri-e-aree titolo="Contorno e superficie"}
Il **perimetro** misura il contorno in unità di lunghezza. L'**area** misura la regione interna in unità quadrate. Un rettangolo di base $b$ e altezza $h$ ha area $bh$. Un triangolo con la stessa base e altezza occupa metà del parallelogramma, quindi ha area $\dfrac{bh}{2}$. Per il trapezio di basi $B$ e $b$ e altezza $h$ l'area è $\dfrac{(B+b)h}{2}$.
:::

:::esempio{titolo="Sottrarre un ritaglio"}
Un pannello rettangolare di $10$ cm per $8$ cm perde un quadrato di lato $3$ cm da un angolo. L'area residua è $80-9=71\,\mathrm{cm^2}$. Per trovare il nuovo perimetro si confrontano i tratti rimossi e quelli aggiunti. I due segmenti rimossi misurano $3$ cm ciascuno e i due nuovi hanno la stessa lunghezza, quindi il perimetro resta $36\,\mathrm{cm}$.
:::

## Angoli e triangoli

:::teorema{#angoli-e-triangoli titolo="Angoli interni e lati di un triangolo"}
La somma degli angoli interni di un triangolo è $180^\circ$. In un isoscele gli angoli opposti ai lati uguali sono uguali. Le lunghezze positive $a,b,c$ formano un triangolo se ciascun lato è minore della somma degli altri due. Fissati $a$ e $b$, questa condizione equivale a $|a-b|<c<a+b$.
:::

:::esempio{titolo="Intervallo per il terzo lato"}
Se due lati misurano $5$ e $8$ centimetri, il terzo ha lunghezza strettamente compresa tra $3$ e $13$ centimetri. A un estremo i tre segmenti si allineano, quindi l'estremo resta escluso.
:::

:::definizione{#gradi-e-radianti titolo="Gradi e radianti"}
Un angolo giro misura $360^\circ$ oppure $2\pi$ radianti. Per convertire da gradi a radianti si moltiplica il numero dei gradi per $\dfrac{\pi}{180}$. Ad esempio $45^\circ$ vale $\dfrac{\pi}{4}$ radianti.
:::

## Pitagora e rapporti trigonometrici

:::teorema{#pitagora titolo="Teorema di Pitagora"}
Se i cateti di un triangolo rettangolo sono $a$ e $b$ e l'ipotenusa è $c$, allora $c^2=a^2+b^2$. L'ipotenusa è il lato opposto all'angolo retto. Con ipotenusa $13$ e un cateto $5$, il secondo cateto misura $\sqrt{13^2-5^2}=\sqrt{144}=12$.

::grafico{linee="0,0 12,0 12,5 0,0" uguale=1 punti="0,0,pieno,A;12,0,pieno,B;12,5,pieno,C" xmin=-1 xmax=14 ymin=-1 ymax=7 titolo="I cateti AB e BC misurano 12 e 5, mentre AC misura 13"}

:::

:::definizione{#rapporti-trigonometrici titolo="Seno, coseno e tangente"}
Fissato un angolo acuto $\theta$ di un triangolo rettangolo, il cateto opposto è quello che non tocca il vertice di $\theta$. L'altro cateto è adiacente. Si ha
$$
\begin{aligned}
\sin\theta &= \frac{\text{cateto opposto}}{\text{ipotenusa}},\\[4pt]
\cos\theta &= \frac{\text{cateto adiacente}}{\text{ipotenusa}},\\[4pt]
\tan\theta &= \frac{\text{cateto opposto}}{\text{cateto adiacente}}.
\end{aligned}
$$
Scambiando l'angolo acuto di riferimento, si scambiano i ruoli dei due cateti.
:::

:::esempio{titolo="Angoli di 30, 45 e 60 gradi"}
Dimezzando un triangolo equilatero si ottiene un triangolo rettangolo di angoli $30^\circ$ e $60^\circ$. Il cateto opposto a $30^\circ$ è metà dell'ipotenusa, quindi $\sin(30^\circ)=\dfrac12$ e $\cos(60^\circ)=\dfrac12$. Nel triangolo rettangolo isoscele i cateti sono uguali, perciò la tangente di ciascun angolo acuto, di $45^\circ$, vale $1$.
:::

:::esempio{titolo="Altezza con una distanza orizzontale"}
A $9$ metri dal piede di un palo, il segmento che va dal suolo alla cima forma con il terreno un angolo $\theta$ con $\tan\theta=\dfrac23$. La distanza orizzontale è il cateto adiacente e l'altezza $h$ è quello opposto. Dunque $\dfrac{h}{9}=\dfrac23$ e $h=6$ metri.
:::

## Cerchio, circonferenza e settori

:::definizione{#cerchio-e-settori titolo="Lunghezza, area e porzioni del cerchio"}
Per raggio $r$ la circonferenza misura $2\pi r$ e il cerchio ha area $\pi r^2$. Un settore di angolo al centro $\alpha$ espresso in gradi occupa la frazione $\dfrac{\alpha}{360^\circ}$ del disco. La stessa frazione, applicata alla lunghezza della circonferenza, dà la lunghezza dell'arco. Se si chiede il perimetro del settore, all'arco si sommano i due raggi.
:::

:::esempio{titolo="Una porzione di novanta gradi"}
Un settore di raggio $4$ cm e angolo al centro $90^\circ$ occupa un quarto del disco. La sua area è $4\pi\,\mathrm{cm^2}$, l'arco misura $2\pi$ cm e il perimetro è $(8+2\pi)$ cm.
:::

## Volume e superficie dei solidi

:::teorema{#solidi titolo="Prismi, cilindri, piramidi e coni"}
Con area di base $A_b$ e altezza perpendicolare $h$, il volume di un prisma o di un cilindro è $A_bh$. Una piramide o un cono con stessa area di base e stessa altezza ha volume $\dfrac{A_bh}{3}$. Un cilindro retto di raggio $r$ ha superficie laterale $2\pi rh$. Aggiungendo le due basi si ottiene la superficie totale $2\pi rh+2\pi r^2$.
:::

:::esempio{titolo="Livello dell'acqua"}
Il fondo di un contenitore rettangolare misura $20$ cm per $25$ cm. Due litri corrispondono a $2\,000\,\mathrm{cm^3}$. Poiché l'area di base è $500\,\mathrm{cm^2}$, il livello sale di $4$ cm se le pareti sono verticali.
:::

## Coordinate, distanze e rette

:::teorema{#distanza-e-punto-medio titolo="Distanza e punto medio"}
Per $A(x_1,y_1)$ e $B(x_2,y_2)$, la distanza è
$$
AB=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}.
$$
Le differenze delle coordinate sono gli spostamenti orizzontale e verticale, perciò la formula segue da Pitagora. Il punto medio ha come coordinate la media delle ascisse e la media delle ordinate.
:::

:::teorema{#rette-nel-piano titolo="Rette parallele e perpendicolari"}
Una retta non verticale ha equazione $y=mx+q$. Due rette non verticali con la stessa pendenza sono parallele se hanno intercette diverse. Due rette con pendenze finite sono perpendicolari quando il prodotto delle pendenze vale $-1$. Una retta verticale $x=c$ è perpendicolare a una retta orizzontale.
:::

:::esempio{titolo="Equazione della retta per un punto"}
Per la parallela a $y=2x+1$ passante per $(3,5)$ si mantiene $m=2$. Imponendo $5=2\cdot3+q$ si trova $q=-1$, quindi la retta è $y=2x-1$.
:::

## Circonferenza nel piano

:::definizione{#circonferenza-analitica titolo="Centro e raggio dalle coordinate"}
La **circonferenza** di centro $(a,b)$ e raggio $r>0$ contiene i punti a distanza $r$ dal centro. Elevando al quadrato l'uguaglianza tra distanza e raggio si ottiene $(x-a)^2+(y-b)^2=r^2$. Per un punto interno al disco la somma dei quadrati è minore di $r^2$.
:::

:::esempio{titolo="Verificare un punto"}
Nella circonferenza $(x-1)^2+(y+2)^2=25$ il centro è $(1,-2)$ e il raggio è $5$. Per il punto $(4,2)$ la somma è $3^2+4^2=25$, quindi il punto è sulla circonferenza.

::grafico{curve="1+5*cos(t),-2+5*sin(t),0,6.28318530718" punti="1,-2,pieno,C;4,2,pieno,P" linee="1,-2 4,2" xmin=-5 xmax=7 ymin=-8 ymax=4 uguale=1 titolo="Il segmento CP collega il centro a un punto sulla circonferenza"}

:::
