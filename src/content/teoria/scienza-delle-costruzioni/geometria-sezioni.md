---
titolo: "Geometria delle sezioni"
sommario: "Come trovare baricentro, momenti d’inerzia e moduli resistenti di una sezione composta, anche con fori."
---

:::percorso
I diagrammi delle sollecitazioni indicano il momento flettente in ogni sezione della trave. Per ricavare le tensioni occorre conoscere anche la forma della sezione. Qui si calcolano le grandezze geometriche che entrano nelle formule della flessione, del taglio e del carico critico.
:::

## Area e momenti statici

:::definizione{#momenti-statici titolo="Momenti statici dell’area"}
La sezione giace nel piano $yz$, con $y$ verticale e $z$ orizzontale. Il **momento statico** rispetto all’asse $z$ è $S_z=\int_A y\,dA$, mentre quello rispetto all’asse $y$ è $S_y=\int_A z\,dA$. Si misurano in $\mathrm{mm^3}$ se le lunghezze sono in millimetri. Nei calcoli di taglio serve spesso il momento statico della sola area al di sopra del punto considerato.
:::

## Baricentro delle sezioni composte

:::teorema{#baricentro titolo="Baricentro per composizione"}
Si dividono le parti piene in figure senza sovrapposizioni. Se $A_i$ è l’area della parte $i$ e $(y_i,z_i)$ è il suo baricentro, allora
$$
y_G=\frac{\sum_i A_i y_i}{\sum_i A_i},
\qquad
z_G=\frac{\sum_i A_i z_i}{\sum_i A_i}.
$$
Per un foro si usa $A_i<0$ nelle somme, mantenendo le coordinate del suo centro. Se la sezione è simmetrica rispetto a un asse, il baricentro appartiene a quell’asse.
:::

## Momenti d’inerzia e teorema di Steiner

:::teorema{#steiner titolo="Teorema di Steiner"}
Il momento d’inerzia rispetto all’asse $z$ è $I_z=\int_A y^2\,dA$. Per un rettangolo di larghezza $b$ lungo $z$ e altezza $h$ lungo $y$, il momento rispetto al proprio asse baricentrico orizzontale vale $I_{z,G}=\dfrac{bh^3}{12}$.
Per passare a un asse parallelo a distanza $d$ dal baricentro, si usa
$$
I_z=I_{z,G}+Ad^2.
$$
Nelle sezioni composte ogni parte va riferita allo stesso asse prima di sommare. Per un foro si sottrae tutto il contributo della parte rimossa, compreso il termine $Ad^2$.
:::

## Assi principali

:::definizione{#assi-principali titolo="Momenti principali d’inerzia"}
Nel riferimento baricentrico si definisce il **prodotto d’inerzia** $I_{yz}=\int_A yz\,dA$. Gli assi principali sono una coppia di assi ortogonali per i quali il prodotto d’inerzia è nullo. Se la sezione ha un asse di simmetria, quell’asse e la sua perpendicolare passante per $G$ sono principali.

Dati $I_y$, $I_z$ e $I_{yz}$ in due assi baricentrici ortogonali, i valori estremi si ottengono con
$$
I_{1,2}=\frac{I_y+I_z}{2}\pm
\sqrt{\left(\frac{I_y-I_z}{2}\right)^2+I_{yz}^2}.
$$
Il minore dei due momenti serve a individuare l’asse più debole quando i vincoli dell’asta sono uguali nei due piani di inflessione.
:::

## Modulo resistente ai due lembi

:::definizione{#modulo-resistente titolo="Modulo resistente elastico"}
Se il momento agisce intorno all’asse principale $z$ e le distanze dei lembi superiore e inferiore da $G$ sono $c_{\mathrm{sup}}$ e $c_{\mathrm{inf}}$, allora
$$
W_{\mathrm{sup}}=\frac{I_z}{c_{\mathrm{sup}}},
\qquad
W_{\mathrm{inf}}=\frac{I_z}{c_{\mathrm{inf}}}.
$$
In flessione semplice la tensione al lembo ha modulo $\dfrac{|M_z|}{W}$. Una sezione a T ha in genere due moduli resistenti diversi per lo stesso asse.
:::

## Controllo delle unità

:::esempio{titolo="Rettangolo alto 120 mm e largo 60 mm"}
Per l’asse baricentrico orizzontale il momento d’inerzia è $I_z=8{,}64\cdot10^6\,\mathrm{mm^4}$. Entrambi i lembi distano $60\,\mathrm{mm}$ dal baricentro, quindi $W_z=144\,000\,\mathrm{mm^3}$. Usando un momento in $\mathrm{N\,mm}$, il rapporto $\dfrac{M_z}{W_z}$ dà una tensione in $\mathrm{N/mm^2}$, cioè in $\mathrm{MPa}$.
:::
