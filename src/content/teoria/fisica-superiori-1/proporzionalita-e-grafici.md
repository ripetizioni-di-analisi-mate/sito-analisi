---
titolo: "Proporzionalità e grafici"
sommario: "Tabelle, proporzionalità diretta e inversa, relazioni affini e lettura delle scale."
---

:::percorso
Si usano rapporti, conversioni e coppie di dati misurati.
Un grafico permette di riconoscere una relazione e controllare come varia una grandezza quando cambia l'altra.
Le stesse idee compariranno nei grafici massa-volume, nella legge di Hooke e nella pressione dei liquidi.
:::

## Assi e scale

:::definizione{#assi titolo="Associare coordinate e grandezze"}
Ogni asse riporta il nome della grandezza e l'unità. In un grafico massa-volume, il volume può stare sull'asse orizzontale e la massa su quello verticale. Il punto (2;6) indica allora un volume di 2 unità e una massa di 6 unità.
Le scale dei due assi possono essere diverse. Tre quadretti verticali non rappresentano necessariamente una variazione numerica di tre. Una pendenza si ricava dalle variazioni delle grandezze, dopo aver letto le scale. La sua unità è quella dell'asse verticale divisa per quella dell'asse orizzontale.
:::

## Proporzionalità diretta

:::definizione{#diretta titolo="Rapporto costante"}
Due grandezze positive sono direttamente proporzionali quando $y=cx$ con $c$ costante. Il rapporto $y/x$ è costante e il grafico è una retta passante per l'origine. Se x raddoppia, anche y raddoppia.
Con $c=3$, ai valori x=1,2,3 corrispondono y=3,6,9. Per trovare x a partire da y si usa $x=y/c$, con $c\ne0$. Un aumento percentuale di x produce lo stesso aumento percentuale di y.

::grafico{f="3*x" xmin=0 xmax=4 ymin=0 ymax=12 nomi="x,y" punti="1,3,pieno,A;2,6,pieno,B" titolo="Nella relazione $y=3x$ il rapporto fra le coordinate resta 3"}
:::

## Proporzionalità inversa

:::definizione{#inversa titolo="Prodotto costante"}
Due grandezze positive sono inversamente proporzionali quando $xy=c$, cioè $y=c/x$ con $c>0$. Il prodotto resta costante. Raddoppiare x dimezza y.
Per $c=12$ le coppie (2;6), (3;4), (4;3) descrivono lo stesso prodotto. Il grafico è un ramo di iperbole; x=0 è escluso. Un esempio è lo spessore di uno strato a volume fissato: se l'area cresce, lo spessore diminuisce.

::grafico{f="12/x" xmin=1 xmax=7 ymin=0 ymax=13 nomi="x,y" punti="2,6,pieno,A;4,3,pieno,B" titolo="Nella relazione $xy=12$ il prodotto resta 12"}
:::

## Relazioni affini

:::definizione{#affine titolo="Pendenza e valore iniziale"}
Una relazione $y=mx+q$ è affine. Il coefficiente m è la pendenza e q è il valore di y per x=0, detto intercetta. Per due punti con coordinate orizzontali diverse,
$$
m=\frac{y_2-y_1}{x_2-x_1},\qquad q=y_1-mx_1.
$$
Un recipiente con 4 L iniziali che riceve 2 L al minuto segue $V=4+2t$. Dopo tre minuti contiene 10 L. La presenza del valore iniziale rende la relazione affine; il rapporto V/t non resta costante.

::grafico{f="2*x;2*x+4" xmin=0 xmax=4 ymin=0 ymax=13 nomi="x,y" legenda="y=2x;y=2x+4" titolo="Stessa pendenza e intercette diverse producono rette parallele"}
:::

## Leggere una tabella

:::osservazione{#tabelle titolo="Scegliere una relazione compatibile con i dati"}
Per riconoscere una proporzionalità diretta si confrontano i rapporti y/x; per una inversa si confrontano i prodotti xy. Per una relazione affine si confrontano le pendenze fra coppie di punti.
I dati (1;5), (2;8), (3;11) hanno variazione di y uguale a 3 per ogni unità di x. Seguono $y=3x+2$, non una proporzionalità diretta. Tre dati coerenti suggeriscono un modello nel campo osservato; non dimostrano che il modello valga per ogni possibile valore esterno alle misure.
:::

## Dipendenze dal quadrato

:::osservazione{#quadratica titolo="Fattori di scala"}
In $y=cx^2$, con c positivo e x positivo, moltiplicare x per un fattore r moltiplica y per $r^2$. In $y=c/x^2$ lo stesso cambiamento moltiplica y per $1/r^2$.
Per esempio, raddoppiare il lato di un quadrato quadruplica l'area. Le due relazioni si distinguono sia dalla proporzionalità diretta sia da quella inversa semplice. Il confronto dei fattori evita di introdurre calcoli più lunghi quando interessa soltanto il rapporto fra valore finale e iniziale.
:::
