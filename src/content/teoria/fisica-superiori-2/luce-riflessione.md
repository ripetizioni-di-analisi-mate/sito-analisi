---
titolo: "Luce, riflessione e specchi"
sommario: "Propagazione della luce, ombre, riflessione, specchi piani e specchi sferici."
---

## Raggi luminosi

:::definizione{#raggi titolo="Il modello dell'ottica geometrica"}
L'ottica geometrica rappresenta la propagazione della luce mediante **raggi**. In un mezzo omogeneo e isotropo i raggi sono rettilinei. Il modello è adatto quando le dimensioni degli ostacoli sono molto maggiori della lunghezza d'onda. Nel vuoto la velocità è $c\simeq3{,}00\cdot10^8\,\mathrm{m/s}$.

Una sorgente emette luce; un oggetto illuminato è visibile perché una parte della luce che lo colpisce raggiunge l'occhio. Un mezzo trasparente lascia passare la luce, un corpo opaco la intercetta. Nel tempo $\Delta t$, nel vuoto, la luce percorre $s=c\Delta t$.
:::

## Ombre e camera oscura

:::teorema{#ombre titolo="Triangoli simili lungo i raggi"}
Una sorgente puntiforme genera un'ombra netta; una sorgente estesa può generare anche una zona di penombra. Le dimensioni delle ombre si ricavano dalla propagazione rettilinea e dalla similitudine dei triangoli.

Nella camera oscura con foro piccolo, se un oggetto alto $H$ dista $p$ dal foro e lo schermo dista $q$ dal foro, l'immagine ha altezza in modulo $h=H\dfrac{q}{p}$ ed è capovolta. I raggi provenienti dalla parte alta dell'oggetto arrivano alla parte bassa dello schermo.
:::

## Legge della riflessione

:::teorema{#riflessione titolo="Angoli rispetto alla normale"}
Il raggio incidente, quello riflesso e la normale alla superficie nel punto d'incidenza appartengono allo stesso piano. L'angolo di riflessione è uguale all'angolo d'incidenza,
$$\theta_r=\theta_i.$$
Entrambi gli angoli sono misurati rispetto alla normale. Un raggio che forma $30^\circ$ con la superficie forma $60^\circ$ con la normale. Una superficie levigata produce riflessione speculare; una superficie irregolare diffonde la luce in molte direzioni, rispettando localmente la stessa legge.

::grafico{assi=0 linee="-3,0 3,0" segmenti="0,0,0,3" vettori="-2,2,0,0,i;0,0,2,2,r" xmin=-3 xmax=3 ymin=-1 ymax=3 uguale=1 titolo="Lo specchio è orizzontale; i due raggi formano angoli uguali rispetto alla normale verticale"}
:::

## Specchi piani

:::teorema{#piano titolo="Posizione dell'immagine"}
Uno specchio piano forma un'immagine **virtuale**, diritta e della stessa grandezza dell'oggetto. L'immagine si trova dietro lo specchio a una distanza uguale a quella dell'oggetto davanti allo specchio. È virtuale perché i raggi riflessi non passano realmente per l'immagine; vi passano i loro prolungamenti.

Se un oggetto dista $d$ dallo specchio, la distanza tra oggetto e immagine è $2d$. Avvicinando l'oggetto allo specchio di $\Delta d$, la distanza tra oggetto e immagine diminuisce di $2\Delta d$.
:::

## Specchi sferici

:::definizione{#fuoco titolo="Asse principale e fuoco"}
Uno specchio sferico è concavo se la superficie riflettente è quella interna della sfera e convesso se è quella esterna. Per raggi vicini all'asse principale e piccoli angoli, la distanza focale è $f=\dfrac R2$ in modulo, dove $R$ è il raggio di curvatura.

Si adotta la convenzione $p>0$ per l'oggetto reale davanti allo specchio, $q>0$ per l'immagine reale davanti e $q<0$ per quella virtuale dietro. Il fuoco di uno specchio concavo ha $f>0$; quello di uno specchio convesso ha $f<0$.
:::

## Equazione degli specchi e ingrandimento

:::teorema{#equazione titolo="Trovare l'immagine"}
Per uno specchio sferico nell'approssimazione dei raggi parassiali,
$$\frac1p+\frac1q=\frac1f,\qquad M=-\frac qp.$$
$M$ è l'ingrandimento trasversale con segno. Se $M<0$, l'immagine è capovolta; se $M>0$, è diritta. Il modulo $|M|$ confronta le dimensioni dell'immagine e dell'oggetto.

Per uno specchio concavo con $f=10\,\mathrm{cm}$ e oggetto a $p=30\,\mathrm{cm}$, si ha $q=15\,\mathrm{cm}$ e $M=-0{,}50$. L'immagine è reale, capovolta e dimezzata. Con l'oggetto tra vertice e fuoco, $q<0$ e l'immagine è virtuale e ingrandita. Uno specchio convesso forma invece, per un oggetto reale, un'immagine virtuale, diritta e ridotta.
:::
