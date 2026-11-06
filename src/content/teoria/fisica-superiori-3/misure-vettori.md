---
titolo: "Misure, incertezze e vettori"
sommario: "Unità del Sistema Internazionale, misure sperimentali, incertezze, componenti e operazioni tra vettori."
---

## Grandezze e unità

:::definizione{#unita titolo="Misurare una grandezza"}
Una **grandezza fisica** è una proprietà che si può misurare confrontandola con un'unità. Scrivere $\ell=2{,}40\,\mathrm m$ significa che la lunghezza vale $2{,}40$ volte il metro. Il numero da solo non determina una lunghezza, perché la stessa indicazione numerica associata ai centimetri rappresenterebbe un'altra misura.

Nel Sistema Internazionale le unità di lunghezza, massa e tempo sono metro, chilogrammo e secondo. Area e volume hanno unità $\mathrm{m^2}$ e $\mathrm{m^3}$; velocità e accelerazione hanno unità $\mathrm{m/s}$ e $\mathrm{m/s^2}$. Per convertire un'area o un volume si eleva anche il fattore di conversione. Poiché $1\,\mathrm{cm}=10^{-2}\,\mathrm m$, risulta $1\,\mathrm{cm^2}=10^{-4}\,\mathrm{m^2}$ e $1\,\mathrm{cm^3}=10^{-6}\,\mathrm{m^3}$.

La **densità** è $\rho=\dfrac mV$. Un campione di massa $0{,}540\,\mathrm{kg}$ e volume $2{,}00\cdot10^{-4}\,\mathrm{m^3}$ ha densità $2700\,\mathrm{kg/m^3}$. La relazione permette anche di ricavare $m=\rho V$ e $V=\dfrac m\rho$.
:::

## Potenze di dieci e controllo delle formule

:::osservazione{#dimensioni titolo="Notazione scientifica e dimensioni"}
La notazione scientifica scrive un numero come $a\cdot10^n$, con $1\leq|a|<10$. Per esempio $0{,}00072\,\mathrm m=7{,}2\cdot10^{-4}\,\mathrm m$. Le potenze di dieci permettono di confrontare gli ordini di grandezza senza perdere gli zeri.

Le **dimensioni fisiche** descrivono la dipendenza di una grandezza da lunghezza, massa e tempo. Una velocità ha dimensioni $LT^{-1}$. Nell'espressione $x=x_0+vt$ tutti i termini hanno dimensione di una lunghezza, perché $[vt]=LT^{-1}T=L$. La formula $x=x_0+v$ sommerebbe grandezze diverse e sarebbe quindi dimensionalmente errata. Il controllo delle dimensioni può escludere una formula; da solo non ne dimostra la correttezza, perché non determina fattori numerici come $2$ o $\pi$.
:::

## Misure ripetute e incertezza

:::definizione{#incertezze titolo="Valore misurato e intervallo"}
Una misura si esprime con un valore stimato e un'**incertezza assoluta**, per esempio $\ell=(12{,}4\pm0{,}1)\,\mathrm{cm}$. L'intervallo dichiarato va da $12{,}3$ a $12{,}5\,\mathrm{cm}$. La scelta dell'incertezza dipende dallo strumento e dalla procedura di misura e va dichiarata.

Per una serie di misure $x_1,\ldots,x_n$ si può usare la media $\bar x=\dfrac{x_1+\cdots+x_n}{n}$. In un trattamento scolastico, quando richiesto, la semidispersione è $\Delta x=\dfrac{x_{\max}-x_{\min}}2$. Essa descrive la dispersione osservata, ma non sostituisce in ogni esperimento la valutazione dell'incertezza strumentale.

L'incertezza relativa è $\varepsilon=\dfrac{\Delta x}{|\bar x|}$, mentre quella percentuale è $100\varepsilon\%$. Con $\bar x=20{,}0\,\mathrm{cm}$ e $\Delta x=0{,}2\,\mathrm{cm}$ si ottiene $\varepsilon=0{,}010$, cioè $1{,}0\%$. L'incertezza assoluta si scrive di norma con una o due cifre significative; il valore viene arrotondato alla stessa posizione decimale.
:::

## Propagazione delle incertezze

:::teorema{#propagazione titolo="Stima massima al primo ordine"}
Per incertezze piccole, una stima prudente dell'incertezza di una somma o differenza si ottiene sommando le incertezze assolute. Per prodotti e quozienti si sommano invece le incertezze relative. Se $z=x+y$, $A=xy$ e $q=\dfrac xy$, allora
$$
\Delta z\leq\Delta x+\Delta y,\qquad
\frac{\Delta A}{|A|}\simeq\frac{\Delta x}{|x|}+\frac{\Delta y}{|y|},\qquad
\frac{\Delta q}{|q|}\simeq\frac{\Delta x}{|x|}+\frac{\Delta y}{|y|}.
$$
Queste sono stime massime al primo ordine; un trattamento statistico con misure indipendenti usa regole diverse. Per un rettangolo con lati $(10{,}0\pm0{,}1)\,\mathrm{cm}$ e $(20{,}0\pm0{,}2)\,\mathrm{cm}$, l'area stimata è $200\,\mathrm{cm^2}$ e l'incertezza relativa massima è circa $2\%$, quindi $\Delta A\simeq4\,\mathrm{cm^2}$.
:::

## Componenti di un vettore

:::definizione{#componenti titolo="Modulo, direzione e verso"}
Uno scalare è descritto da un valore con unità di misura. Un **vettore** richiede anche direzione e verso; spostamento, velocità e forza sono vettori. In un piano cartesiano un vettore $\vec A$ è determinato dalle componenti $A_x,A_y$. Se forma un angolo $\theta$ con il semiasse positivo $x$,
$$
A_x=A\cos\theta,\qquad A_y=A\sin\theta,\qquad A=\sqrt{A_x^2+A_y^2}.
$$
Le componenti possono essere negative; il modulo è sempre non negativo. Un vettore di modulo $10\,\mathrm N$ inclinato di $30^\circ$ ha $A_x\simeq8{,}66\,\mathrm N$ e $A_y=5{,}00\,\mathrm N$. Se le componenti sono $-3\,\mathrm m$ e $4\,\mathrm m$, il modulo è $5\,\mathrm m$ e il vettore si trova nel secondo quadrante. Il solo valore della tangente non determina il quadrante, quindi si controllano anche i segni delle componenti.
:::

::grafico{vettori="0,0,3,4,A" segmenti="3,0,3,4;0,4,3,4" xmin=-1 xmax=5 ymin=-1 ymax=5 uguale=1 titolo="Il vettore con componenti $3$ e $4$ ha modulo $5$"}

## Somme e prodotti

:::teorema{#operazioni titolo="Operazioni tra vettori"}
La somma si costruisce disponendo la coda del secondo vettore sulla punta del primo. In componenti,
$$
R_x=A_x+B_x,\qquad R_y=A_y+B_y.
$$
Con $\vec A=(3,1)\,\mathrm m$ e $\vec B=(-1,3)\,\mathrm m$ si trova $\vec R=(2,4)\,\mathrm m$ e $R=\sqrt{20}\,\mathrm m$. Il modulo della somma coincide con la somma dei moduli soltanto quando i vettori sono concordi sulla stessa retta.

Il **prodotto scalare** è $\vec A\cdot\vec B=AB\cos\theta=A_xB_x+A_yB_y$. Esso misura il contributo di un vettore lungo l'altro e compare nel lavoro di una forza. Due vettori perpendicolari hanno prodotto scalare nullo. Il modulo del prodotto vettoriale è $|\vec A\times\vec B|=AB|\sin\theta|$ e compare nel momento di una forza. La direzione è perpendicolare al piano dei due vettori; il verso è stabilito dalla regola della mano destra.
:::

::grafico{vettori="0,0,3,1,A;3,1,2,4,B;0,0,2,4,R" xmin=-1 xmax=5 ymin=-1 ymax=5 uguale=1 titolo="Somma punta-coda: $\vec R=\vec A+\vec B$"}

::grafico{vettori="0,0,-3,4,A;0,0,4,3,B" xmin=-5 xmax=5 ymin=-1 ymax=5 uguale=1 titolo="I vettori $(-3,4)$ e $(4,3)$ sono perpendicolari perché il prodotto scalare è nullo"}
