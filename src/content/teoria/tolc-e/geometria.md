---
titolo: "Geometria piana, solida e analitica per il TOLC-E"
sommario: "Triangoli, aree, superfici e volumi. Coordinate, rette, circonferenze e coniche."
---

:::percorso
Un problema geometrico chiede di passare da un disegno o da un'equazione alla misura cercata. Si individuano prima i lati, le altezze e le unità. Nel piano cartesiano, le coordinate permettono di applicare la stessa idea a rette, circonferenze e coniche.
:::

## Segmenti, angoli e triangoli

:::definizione{#segmenti-e-triangoli titolo="Distanze e relazioni nei triangoli"}
La somma degli angoli interni di un triangolo è $180^\circ$. Ciascun lato deve misurare meno della somma degli altri due. In un triangolo rettangolo, l'**ipotenusa** è il lato opposto all'angolo retto. Se i cateti sono $a,b$ e l'ipotenusa è $c$, per Pitagora $c^2=a^2+b^2$.

L'area di un triangolo vale $\dfrac{bh}{2}$, dove $b$ è un lato scelto come base e $h$ è l'altezza perpendicolare a quella base. Triangoli simili hanno angoli corrispondenti uguali e lati corrispondenti in uno stesso rapporto.
:::

:::esempio{titolo="Il cateto a partire dall'ipotenusa"}
Con ipotenusa $13$ cm e un cateto di $5$ cm, l'altro cateto misura $\sqrt{13^2-5^2}=12$ cm. I cateti sono perpendicolari, quindi l'area misura $\dfrac{5\cdot12}{2}=30$ cm².
:::

## Perimetri, aree e scale

:::definizione{#figure-piane-e-scale titolo="Contorno, superficie e fattori di scala"}
Il **perimetro** è la lunghezza del contorno. L'area del rettangolo o del parallelogramma è $bh$, con $h$ perpendicolare a $b$. L'area del trapezio di basi $B,b$ e altezza $h$ è $\dfrac{(B+b)h}{2}$. Se una figura è composta da parti, i lati condivisi interni non contribuiscono al perimetro esterno.

Una circonferenza di raggio $r$ misura $2\pi r$. Il cerchio racchiuso ha area $\pi r^2$. Un settore di angolo al centro $\alpha$ in gradi occupa la frazione $\dfrac{\alpha}{360^\circ}$ del cerchio. Con un fattore di scala lineare $k>0$, i perimetri variano di un fattore $k$ e le aree di un fattore $k^2$.
:::

:::esempio{titolo="Il bordo di una pianta"}
Un cortile è rappresentato con un rettangolo di $5$ cm per $4$ cm in scala da $1$ a $200$. Un centimetro sulla pianta corrisponde a $2$ m reali. Le dimensioni reali sono quindi $10$ m e $8$ m e l'area è $80$ m².
:::

## Superfici, volumi e capacità

:::definizione{#solidi-e-volumi titolo="Area di base, altezza e misura richiesta"}
Un prisma e un cilindro di base di area $A_b$ e altezza $h$ hanno volume $A_bh$. Per una piramide o un cono con base e altezza assegnate il volume vale $\dfrac{A_bh}{3}$. Una sfera di raggio $r$ ha volume $\dfrac43\pi r^3$ e superficie $4\pi r^2$.

La superficie laterale del cilindro vale $2\pi rh$ perché il suo sviluppo è un rettangolo di lati $2\pi r$ e $h$. Se il cilindro è chiuso si sommano le aree delle due basi. Un litro equivale a $1$ dm³, cioè $1000$ cm³. Se tutte le misure lineari si moltiplicano per $k$, il volume si moltiplica per $k^3$.
:::

:::esempio{titolo="Capacità di un contenitore"}
Una vaschetta rettangolare interna da $25$ cm per $20$ cm per $16$ cm ha volume $8000$ cm³. Dividendo per $1000$ si ottiene una capacità di $8$ litri.
:::

## Coordinate, distanze e rette

:::definizione{#coordinate-e-rette titolo="Punti e pendenze nel piano"}
Per $A(x_1,y_1)$ e $B(x_2,y_2)$, il segmento $AB$ ha lunghezza $\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$. Il punto medio si ottiene facendo la media delle ascisse e quella delle ordinate separatamente.

Una retta non verticale ha equazione $y=mx+q$. Se passa per due punti con ascisse diverse, $m=\dfrac{y_2-y_1}{x_2-x_1}$. Rette non verticali parallele hanno la stessa pendenza. Due rette con pendenze non nulle sono perpendicolari quando il loro prodotto vale $-1$. Una retta verticale $x=k$ è perpendicolare alle rette orizzontali $y=q$.
:::

:::esempio{titolo="Intersezione di due rette"}
Per trovare il punto comune a $y=2x-1$ e $y=-x+5$ si risolve $2x-1=-x+5$. Si ottiene $x=2$ e, sostituendo, $y=3$. Il punto $(2,3)$ verifica entrambe le equazioni.
:::

## Circonferenze e posizioni reciproche

:::definizione{#circonferenze titolo="Centro, raggio e punti d'incontro"}
La circonferenza di centro $(a,b)$ e raggio $r>0$ è l'insieme dei punti che distano $r$ dal centro. La sua equazione è $(x-a)^2+(y-b)^2=r^2$. Nella forma sviluppata si completano i quadrati di $x$ e $y$ per ricavare centro e raggio.

Una retta che ha distanza dal centro minore di $r$ è secante, cioè incontra la circonferenza in due punti. Se la distanza vale $r$, è tangente. Se supera $r$, non ci sono intersezioni.
:::

:::esempio{titolo="Completamento dei quadrati"}
L'equazione $x^2+y^2-6x+4y-3=0$ diventa $(x-3)^2+(y+2)^2=16$. Si aggiungono $9$ e $4$ ai due membri per completare i quadrati. Il centro è $(3,-2)$ e il raggio è $4$.
:::

## Parabola, ellisse e iperbole

:::definizione{#coniche titolo="Le forme canoniche delle coniche"}
La parabola $y=a(x-h)^2+k$, con $a\ne0$, ha vertice $(h,k)$ e asse verticale $x=h$. Per $y=ax^2+bx+c$, l'ascissa del vertice è $-\dfrac{b}{2a}$. Il vertice è un minimo per $a>0$ e un massimo per $a<0$.

L'ellisse centrata nell'origine $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$, con $a,b>0$, incontra gli assi in $(\pm a,0)$ e $(0,\pm b)$. Nell'iperbole $\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1$ i due termini quadratici hanno segni opposti. Essa incontra l'asse $x$ in $(\pm a,0)$ e non incontra l'asse $y$. Anche il grafico di $y=\dfrac{k}{x}$ con $k\ne0$ è un'iperbole, con gli assi cartesiani come asintoti.
:::

:::esempio{titolo="Intersezioni con gli assi"}
Per $\dfrac{x^2}{16}+\dfrac{y^2}{9}=1$, porre $y=0$ dà $x=\pm4$, mentre porre $x=0$ dà $y=\pm3$. Cambiando il segno del termine in $y^2$, le intersezioni con l'asse $x$ rimangono uguali. Con $x=0$ risulterebbe $-y^2=9$, che non ammette soluzioni reali.
:::
