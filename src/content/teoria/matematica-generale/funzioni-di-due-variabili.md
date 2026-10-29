---
titolo: Funzioni di due variabili
sommario: Come si descrivono i punti e gli insiemi del piano, come si trovano il dominio e le curve di livello di una funzione di due variabili, come si calcolano le derivate parziali, il gradiente, il piano tangente e il differenziale, e come servono a studiare produzione, utilità e rendimenti di scala.
---

## Il piano ℝ², intorni e insiemi

:::definizione{#piano-r2 titolo="Il piano ℝ²"}
L'insieme $\mathbb{R}^2$ è formato da tutte le **coppie ordinate** $(x, y)$ di numeri reali. Fissato nel piano un riferimento cartesiano ortogonale, a ogni coppia corrisponde un solo punto $P = (x, y)$, e viceversa, quindi $\mathbb{R}^2$ si identifica con il piano. La coppia è *ordinata*, perciò $(1, 3)$ e $(3, 1)$ sono punti diversi. Una funzione di due variabili associa un numero a ogni punto di una regione del piano, e per descrivere queste regioni servono le nozioni di distanza e di intorno.
:::

:::definizione{#distanza titolo="Distanza tra due punti"}
La **distanza** tra i punti $P = (x_1, y_1)$ e $Q = (x_2, y_2)$ è
$$
d(P, Q) = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} .
$$
Le differenze $x_2 - x_1$ e $y_2 - y_1$ sono i cateti di un triangolo rettangolo che ha per ipotenusa il segmento $PQ$, quindi la formula è il teorema di Pitagora. Per $P = (1, 1)$ e $Q = (4, 5)$ si ha $d(P, Q) = \sqrt{3^2 + 4^2} = 5$. La distanza di $P = (x, y)$ dall'origine $O$ è $\sqrt{x^2 + y^2}$, e i punti a distanza $r$ da un punto $(x_0, y_0)$ formano la circonferenza di equazione $(x - x_0)^2 + (y - y_0)^2 = r^2$.

::grafico{linee="1,1 4,5" segmenti="1,1,4,1;4,1,4,5" punti="1,1,pieno,P;4,5,pieno,Q" etichette="2.2,0.55,Δx = 3;4.2,3,Δy = 4;1.4,3.3,d = 5" xmin=-1 xmax=6 ymin=-1 ymax=6 uguale=1 titolo="La distanza tra $P = (1, 1)$ e $Q = (4, 5)$ è l'ipotenusa del triangolo rettangolo di cateti $3$ e $4$, quindi vale $\sqrt{9 + 16} = 5$"}

:::

:::definizione{#intorno titolo="Intorno circolare"}
Siano $P_0 = (x_0, y_0)$ un punto e $r > 0$ un numero reale. L'**intorno circolare** di centro $P_0$ e raggio $r$ è l'insieme dei punti che distano da $P_0$ meno di $r$:
$$
B(P_0, r) = \{ P \in \mathbb{R}^2 : d(P, P_0) < r \} = \{ (x, y) : (x - x_0)^2 + (y - y_0)^2 < r^2 \} .
$$
È il disco di centro $P_0$ e raggio $r$ senza la circonferenza di bordo. Gli intorni hanno nel piano il ruolo che gli intervalli $(x_0 - r, x_0 + r)$ hanno sulla retta. Per esempio $(2, 3)$ appartiene a $B((1, 2), 2)$, perché dista $\sqrt{2} < 2$ dal centro, mentre $(3, 4)$ non vi appartiene, perché dista $\sqrt{8} > 2$.
:::

:::definizione{#punti-interni-frontiera titolo="Punti interni e di frontiera"}
Siano $A$ un sottoinsieme del piano e $P_0$ un punto.

- $P_0$ è **interno** ad $A$ se esiste un intorno $B(P_0, r)$ contenuto in $A$.
- $P_0$ è **esterno** ad $A$ se esiste un intorno $B(P_0, r)$ che non contiene punti di $A$.
- $P_0$ è **di frontiera** per $A$ se *ogni* intorno di $P_0$ contiene sia punti di $A$ sia punti che non stanno in $A$.

L'insieme dei punti di frontiera si chiama **frontiera** di $A$. Un punto di frontiera può appartenere ad $A$ oppure no. Per il disco $A = \{ (x, y) : x^2 + y^2 < 1 \}$ si considera un punto $P_0$ con $x^2 + y^2 < 1$. La sua distanza dall'origine è $d(P_0, O) < 1$, quindi la sua distanza dalla circonferenza è $1 - d(P_0, O)$. Il disco di centro $P_0$ e raggio $r = 1 - d(P_0, O)$ è perciò contenuto in $A$, e $P_0$ è interno. I punti della circonferenza $x^2 + y^2 = 1$ sono invece di frontiera, perché ogni disco centrato in uno di essi contiene punti più vicini all'origine e punti più lontani.

::grafico{f="NaN" curve="cos(t),sin(t),0,6.29" area="0.3+sqrt(abs(0.25-(x-0.3)^2));0.3-sqrt(abs(0.25-(x-0.3)^2));-0.2;0.8|-0.8+sqrt(abs(0.0625-(x-0.6)^2));-0.8-sqrt(abs(0.0625-(x-0.6)^2));0.35;0.85" punti="0.3,0.3,pieno,P₀;0.6,-0.8,pieno,Q" etichette="-0.55,-0.45,A" xmin=-2 xmax=2 ymin=-1.5 ymax=1.5 uguale=1 legenda=";x^2 + y^2 = 1" titolo="Il disco aperto $x^2 + y^2 < 1$ con il bordo tratteggiato; il punto interno $P_0$ ha un intorno contenuto nel disco, mentre ogni intorno del punto di frontiera $Q$ contiene punti dentro e fuori dal disco"}

:::

:::definizione{#aperti-chiusi-limitati titolo="Insiemi aperti, chiusi e limitati"}
Sia $A$ un sottoinsieme del piano.

- $A$ è **aperto** se tutti i suoi punti sono interni, cioè se non contiene nessuno dei suoi punti di frontiera.
- $A$ è **chiuso** se contiene tutti i suoi punti di frontiera.
- $A$ è **limitato** se è contenuto in un disco abbastanza grande, cioè se esiste $R > 0$ tale che $d(P, O) \leq R$ per ogni $P \in A$.

Il disco $x^2 + y^2 < 1$ è aperto e limitato; il disco $x^2 + y^2 \leq 1$ è chiuso e limitato; il semipiano $y > 0$ è aperto e non è limitato. Di regola le disuguaglianze strette tra funzioni continue danno insiemi aperti e quelle larghe danno insiemi chiusi. Gli insiemi chiusi e limitati sono quelli su cui vale il teorema di Weierstrass, e torneranno nell'argomento sui massimi e minimi liberi e vincolati.
:::

:::attenzione
Un insieme può non essere né aperto né chiuso. La corona $A = \{ (x, y) : 1 \leq x^2 + y^2 < 4 \}$ contiene i punti della circonferenza $x^2 + y^2 = 1$, che sono di frontiera, quindi non è aperta. Il punto $(2, 0)$ è di frontiera e non appartiene ad $A$, perché $2^2 + 0^2 = 4$, quindi $A$ non è chiusa.
:::

## Funzioni di due variabili e dominio

:::definizione{#funzione-due-variabili titolo="Funzione di due variabili"}
Sia $D$ un sottoinsieme di $\mathbb{R}^2$. Una **funzione di due variabili** $f : D \to \mathbb{R}$ associa a *ogni* punto $(x, y) \in D$ *uno e un solo* numero reale $f(x, y)$. L'insieme $D$ è il **dominio** e le variabili $x$ e $y$ sono indipendenti, cioè si possono far variare separatamente. Per esempio $f(x, y) = x^2 y - 3y$ in $(2, 1)$ vale $4 - 3 = 1$. Molte grandezze economiche dipendono da più di una variabile; per esempio la quantità prodotta dipende dal capitale e dal lavoro impiegati, e l'utilità di un consumatore dalle quantità dei beni che acquista.
:::

:::definizione{#dominio-due-variabili titolo="Dominio naturale"}
Quando una funzione di due variabili è data solo con la sua formula, il suo **dominio naturale** è l'insieme dei punti $(x, y)$ per cui la formula ha senso. Le condizioni sono le stesse delle funzioni di una variabile:

- i denominatori sono diversi da zero;
- gli argomenti delle radici di indice pari sono maggiori o uguali a zero;
- gli argomenti dei logaritmi sono strettamente positivi.

La differenza sta nelle soluzioni, che sono regioni del piano e si rappresentano con un disegno. Le curve di bordo più frequenti sono rette, parabole e circonferenze.

- La retta $ax + by + c = 0$ divide il piano in due semipiani; in uno vale $ax + by + c > 0$, nell'altro $ax + by + c < 0$, e per sapere quale è quale si sostituisce un punto che non sta sulla retta, di solito l'origine.
- La disuguaglianza $y > g(x)$ individua i punti che stanno sopra il grafico di $g$.
- La disuguaglianza $(x - x_0)^2 + (y - y_0)^2 < r^2$ individua i punti interni al cerchio di centro $(x_0, y_0)$ e raggio $r$.

Nei disegni le curve di bordo che appartengono al dominio si tracciano con la linea continua, quelle che non vi appartengono con la linea tratteggiata.
:::

:::esempio{titolo="Dominio sopra una parabola"}
Per $f(x, y) = \sqrt{y - x^2}$ la radice richiede $y - x^2 \geq 0$, cioè $y \geq x^2$. Il dominio è quindi la regione che sta sopra la parabola $y = x^2$, parabola compresa. Il punto $(0, 1)$ appartiene al dominio, perché $1 \geq 0$, mentre $(2, 1)$ no, perché $1 < 4$. Il dominio contiene la sua frontiera, che è la parabola, quindi è chiuso; non è limitato, perché contiene tutti i punti $(0, y)$ con $y \geq 0$.

::grafico{f="x^2" area="5;x^2;-2.24;2.24" punti="0,1,pieno;2,1,vuoto" xmin=-3 xmax=3 ymin=-1 ymax=5 legenda="y = x^2" titolo="Il dominio di $\sqrt{y - x^2}$ è la regione sopra la parabola $y = x^2$, parabola compresa"}

:::

:::esempio{titolo="Dominio con una radice e un logaritmo"}
Per $f(x, y) = \sqrt{4 - x^2 - y^2} + \ln(y - x)$ le due condizioni devono valere insieme:
$$
\begin{cases}
4 - x^2 - y^2 \geq 0 \\[4pt]
y - x > 0
\end{cases}
\iff
\begin{cases}
x^2 + y^2 \leq 4 \\[4pt]
y > x
\end{cases}
$$
La prima condizione dà il cerchio di centro l'origine e raggio $2$, circonferenza compresa; la seconda dà il semipiano che sta sopra la retta $y = x$, retta esclusa. Il dominio è la loro intersezione, cioè il semicerchio che sta sopra la retta $y = x$. Il dominio è limitato, perché sta nel cerchio di raggio $2$. Non è aperto, perché contiene punti della circonferenza, e non è chiuso, perché non contiene i punti del diametro sulla retta $y = x$.

::grafico{curve="2*cos(t),2*sin(t),0,6.29;t,t,-3,3" area="sqrt(abs(4-x^2));max(x,-sqrt(abs(4-x^2)));-2;1.4142" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 legenda="x^2 + y^2 = 4;y = x" titolo="Il dominio di $\sqrt{4 - x^2 - y^2} + \ln(y - x)$: la parte del cerchio di raggio $2$ sopra la retta $y = x$, con la circonferenza compresa e la retta esclusa"}

:::

## Grafico e curve di livello

:::definizione{#grafico-due-variabili titolo="Grafico di una funzione di due variabili"}
Il **grafico** di $f : D \to \mathbb{R}$ è l'insieme dei punti dello spazio
$$
G_f = \{ (x, y, z) : (x, y) \in D, \ z = f(x, y) \} .
$$
Sopra ogni punto $(x, y)$ del dominio si riporta la quota $z = f(x, y)$, e i punti così ottenuti formano una **superficie**. Il grafico di $f(x, y) = ax + by + c$ è un piano. Il grafico di $f(x, y) = x^2 + y^2$ è un paraboloide, una superficie a forma di coppa con il punto più basso nell'origine, perché $x^2 + y^2 \geq 0$ e vale $0$ solo in $(0, 0)$. Disegnare una superficie a mano è difficile, e per questo si studiano le sue sezioni orizzontali.
:::

:::definizione{#curve-di-livello titolo="Curve di livello"}
Sia $k$ un numero reale. La **curva di livello** $k$ di $f$ è l'insieme dei punti del dominio in cui $f$ vale $k$:
$$
L_k = \{ (x, y) \in D : f(x, y) = k \} .
$$
Nel grafico corrisponde alla sezione della superficie con il piano orizzontale $z = k$, proiettata sul piano $xy$, come le isoipse di una carta geografica. Un insieme $L_k$ può essere vuoto, e curve di livello diverse non hanno punti in comune, perché in un punto $f$ assume un solo valore. Per $f(x, y) = x^2 + y^2$ la curva di livello $k$ è vuota per $k < 0$, si riduce all'origine per $k = 0$ ed è la circonferenza di centro l'origine e raggio $\sqrt{k}$ per $k > 0$. Le curve di livello delle funzioni di produzione e di utilità sono gli isoquanti e le curve di indifferenza.

::grafico{curve="cos(t),sin(t),0,6.29;2*cos(t),2*sin(t),0,6.29" punti="0,0,pieno" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 legenda="x^2 + y^2 = 1;x^2 + y^2 = 4" titolo="Le curve di livello $k = 1$ e $k = 4$ di $f(x, y) = x^2 + y^2$ sono le circonferenze di raggio $1$ e $2$; la curva di livello $0$ è l'origine"}

:::

## Limiti e continuità

:::definizione{#limiti-continuita titolo="Limite e continuità"}
Siano $f : D \to \mathbb{R}$ e $P_0$ un punto interno a $D$ oppure di frontiera per $D$. Si dice che $f$ ha **limite** $\ell$ per $P \to P_0$ se per ogni $\varepsilon > 0$ esiste $\delta > 0$ tale che
$$
P \in D, \quad 0 < d(P, P_0) < \delta \implies |f(P) - \ell| < \varepsilon ,
$$
e si scrive $\displaystyle\lim_{(x, y) \to (x_0, y_0)} f(x, y) = \ell$. La definizione è quella delle funzioni di una variabile, con la distanza nel piano al posto di $|x - x_0|$, e richiede che i valori di $f$ siano vicini a $\ell$ in *tutti* i punti abbastanza vicini a $P_0$, da qualunque direzione ci si avvicini. La funzione è **continua** in $P_0 \in D$ se $\displaystyle\lim_{P \to P_0} f(P) = f(P_0)$. I polinomi in $x$ e $y$, gli esponenziali, i logaritmi, le radici, e le funzioni ottenute da queste con somme, prodotti, quozienti e composizioni sono continui nel loro dominio, come le funzioni di una variabile viste nell'argomento sui limiti e la continuità. Per esempio $\displaystyle\lim_{(x, y) \to (1, 2)} (x^2 y + y) = 2 + 2 = 4$, perché il polinomio è continuo. Per la teoria completa si rimanda all'argomento sulle funzioni di più variabili di Analisi 2.
:::

:::attenzione
Se avvicinandosi a $P_0$ lungo due curve diverse si ottengono due limiti diversi, il limite *non* esiste. La funzione $f(x, y) = \dfrac{2xy}{x^2 + y^2}$, definita fuori dall'origine, sulla retta $y = mx$ con $x \neq 0$ vale
$$
f(x, mx) = \frac{2m x^2}{x^2 + m^2 x^2} = \frac{2m}{1 + m^2} ,
$$
un valore che dipende dalla retta. Sull'asse $x$, con $m = 0$, la funzione vale $0$; sulla retta $y = x$, con $m = 1$, vale $1$. Quindi il limite di $f$ per $(x, y) \to (0, 0)$ non esiste.
:::

:::teorema{#weierstrass-due-variabili titolo="Teorema di Weierstrass in due variabili"}
Sia $f$ continua su un insieme $D$ del piano non vuoto, chiuso e limitato. Allora $f$ ha su $D$ un valore massimo e un valore minimo.

È l'estensione del teorema di Weierstrass visto nell'argomento sui limiti e la continuità, dove l'intervallo chiuso e limitato $[a, b]$ è sostituito da un insieme chiuso e limitato del piano; per la dimostrazione si rimanda ad Analisi 2. Il teorema garantisce l'esistenza dei massimi e dei minimi assoluti che si cercano nell'argomento sui massimi e minimi liberi e vincolati. Se l'insieme non è chiuso la tesi può non valere. Sul disco aperto $x^2 + y^2 < 1$ la funzione $f(x, y) = x$ assume valori vicini quanto si vuole a $1$, ma non il valore $1$, perché il punto $(1, 0)$ non appartiene al disco; perciò il massimo non esiste.
:::

## Derivate parziali e gradiente

:::definizione{#derivate-parziali titolo="Derivate parziali"}
Sia $(x_0, y_0)$ un punto interno al dominio di $f$. Se si tiene fissa $y = y_0$, la funzione $x \mapsto f(x, y_0)$ dipende dalla sola $x$, e la sua derivata in $x_0$ è la **derivata parziale** di $f$ rispetto a $x$:
$$
f_x(x_0, y_0) = \lim_{h \to 0} \frac{f(x_0 + h, y_0) - f(x_0, y_0)}{h} .
$$
Allo stesso modo, tenendo fissa $x = x_0$, si definisce
$$
f_y(x_0, y_0) = \lim_{h \to 0} \frac{f(x_0, y_0 + h) - f(x_0, y_0)}{h} .
$$
Si scrivono anche $\dfrac{\partial f}{\partial x}$ e $\dfrac{\partial f}{\partial y}$. La derivata $f_x$ misura il tasso di variazione di $f$ quando cambia solo $x$; nel grafico è la pendenza della curva che si ottiene tagliando la superficie con il piano verticale $y = y_0$. Per calcolarla si deriva rispetto a $x$ con le regole dell'argomento sulle derivate, trattando $y$ come una costante. Per $f(x, y) = x^2 y + 3y^3$ si ha
$$
f_x(x, y) = 2xy,
\qquad
f_y(x, y) = x^2 + 9y^2 ,
$$
quindi in $(1, 2)$ valgono $f_x(1, 2) = 4$ e $f_y(1, 2) = 1 + 36 = 37$.
:::

:::esempio{titolo="Derivate parziali con le regole di derivazione"}
Per $f(x, y) = e^{xy} + \ln(x^2 + y)$, definita dove $x^2 + y > 0$, la regola della funzione composta dà
$$
f_x(x, y) = y\,e^{xy} + \frac{2x}{x^2 + y},
\qquad
f_y(x, y) = x\,e^{xy} + \frac{1}{x^2 + y} .
$$
Nel calcolo di $f_x$ la derivata di $xy$ rispetto a $x$ è $y$, perché $y$ è una costante; nel calcolo di $f_y$ la derivata di $x^2 + y$ rispetto a $y$ è $1$, perché $x^2$ è una costante. In $(0, 1)$ si ottiene $f_x(0, 1) = 1 + 0 = 1$ e $f_y(0, 1) = 0 + 1 = 1$.
:::

:::definizione{#gradiente titolo="Gradiente"}
Se in $(x, y)$ esistono le due derivate parziali, il **gradiente** di $f$ in $(x, y)$ è il vettore che le ha come componenti:
$$
\nabla f(x, y) = \big( f_x(x, y), \ f_y(x, y) \big) .
$$
Il gradiente riassume in un solo oggetto i tassi di variazione nelle due direzioni degli assi. Si dimostra che, quando non è nullo, indica la direzione in cui $f$ cresce più rapidamente e che è perpendicolare alla curva di livello che passa per il punto; per la prima proprietà si rimanda ad Analisi 2, la seconda segue dalla derivata lungo una curva. Per $f(x, y) = x^2 y + 3y^3$ si ha $\nabla f(1, 2) = (4, 37)$. I punti in cui il gradiente è il vettore nullo si chiamano **punti stazionari**, e sono i candidati massimi e minimi dell'argomento sui massimi e minimi liberi e vincolati.
:::

:::attenzione
Per le funzioni di una variabile la derivabilità implica la continuità; l'esistenza delle derivate parziali, invece, *non* implica la continuità. Si pone $f(x, y) = \dfrac{2xy}{x^2 + y^2}$ per $(x, y) \neq (0, 0)$ e $f(0, 0) = 0$. Sugli assi la funzione vale $0$, quindi $f(h, 0) - f(0, 0) = 0$ e $f(0, h) - f(0, 0) = 0$ per ogni $h$, e risulta $f_x(0, 0) = f_y(0, 0) = 0$. La funzione però non è continua nell'origine, perché il suo limite in $(0, 0)$ non esiste.
:::

## Derivate seconde e teorema di Schwarz

:::definizione{#derivate-seconde titolo="Derivate parziali seconde"}
Le derivate parziali $f_x$ e $f_y$ sono a loro volta funzioni di due variabili, e se sono derivabili le loro derivate parziali sono le **derivate seconde** di $f$:
$$
f_{xx} = (f_x)_x,
\qquad
f_{xy} = (f_x)_y,
\qquad
f_{yx} = (f_y)_x,
\qquad
f_{yy} = (f_y)_y .
$$
Le derivate $f_{xy}$ e $f_{yx}$ si chiamano **derivate miste**; in $f_{xy}$ si deriva prima rispetto a $x$ e poi rispetto a $y$. Per $f(x, y) = x^2 y + 3y^3$, dalle derivate prime $f_x = 2xy$ e $f_y = x^2 + 9y^2$ si ottiene
$$
f_{xx} = 2y,
\qquad
f_{xy} = 2x,
\qquad
f_{yx} = 2x,
\qquad
f_{yy} = 18y .
$$
Le derivate seconde descrivono come cambiano le pendenze, come $f''$ per le funzioni di una variabile.
:::

:::teorema{#teorema-di-schwarz titolo="Teorema di Schwarz"}
Sia $f$ definita su un insieme aperto $A$, e siano le derivate miste $f_{xy}$ e $f_{yx}$ continue in $A$. Allora
$$
f_{xy}(x, y) = f_{yx}(x, y) \qquad \text{per ogni } (x, y) \in A .
$$
Il teorema dice che, per le funzioni usate nelle applicazioni, l'ordine di derivazione non conta, e quindi le derivate seconde distinte da calcolare sono tre. Le ipotesi sono soddisfatte da polinomi, esponenziali, logaritmi e loro combinazioni sui loro domini, che sono aperti. Il calcolo delle due derivate miste serve anche da controllo dei conti, come nell'esempio della definizione, dove entrambe valgono $2x$. Per la dimostrazione si rimanda all'argomento sul calcolo differenziale di Analisi 2.
:::

:::definizione{#matrice-hessiana titolo="Matrice hessiana"}
Se $f$ ha le derivate seconde in $(x, y)$, la **matrice hessiana** di $f$ in $(x, y)$ è la matrice quadrata di ordine $2$
$$
H(x, y) =
\begin{pmatrix}
f_{xx}(x, y) & f_{xy}(x, y) \\
f_{yx}(x, y) & f_{yy}(x, y)
\end{pmatrix} .
$$
Quando valgono le ipotesi del teorema di Schwarz gli elementi fuori dalla diagonale sono uguali, e la matrice hessiana è **simmetrica**, nel senso dell'argomento su matrici, determinanti e sistemi lineari. Per $f(x, y) = x^2 y + 3y^3$ si ha
$$
H(1, 2) =
\begin{pmatrix}
4 & 2 \\
2 & 36
\end{pmatrix},
\qquad
\det H(1, 2) = 144 - 4 = 140 .
$$
Il segno di $\det H$ e di $f_{xx}$ nei punti stazionari permette di riconoscere massimi, minimi e punti di sella, come si vede nell'argomento sui massimi e minimi liberi e vincolati.
:::

## Differenziale, piano tangente e approssimazione lineare

:::definizione{#differenziabilita titolo="Funzione differenziabile"}
Sia $(x_0, y_0)$ un punto interno al dominio di $f$ in cui esistono le derivate parziali $f_x(x_0, y_0)$ e $f_y(x_0, y_0)$. La funzione $f$ è **differenziabile** in $(x_0, y_0)$ se
$$
f(x_0 + h, y_0 + k) = f(x_0, y_0) + f_x(x_0, y_0)\,h + f_y(x_0, y_0)\,k + R(h, k),
$$
con un resto $R(h, k)$ che soddisfa $\displaystyle\lim_{(h, k) \to (0, 0)} \frac{R(h, k)}{\sqrt{h^2 + k^2}} = 0$. In altre parole, per spostamenti piccoli la variazione di $f$ è approssimata da un'espressione lineare in $h$ e $k$, con un errore trascurabile rispetto alla distanza $\sqrt{h^2 + k^2}$ percorsa. Una funzione differenziabile in un punto è continua in quel punto, perché il secondo membro tende a $f(x_0, y_0)$ per $(h, k) \to (0, 0)$. In pratica si usa il **teorema del differenziale totale**, secondo il quale, se $f_x$ e $f_y$ esistono e sono continue in un insieme aperto, allora $f$ è differenziabile in ogni punto di quell'insieme (per la dimostrazione si rimanda ad Analisi 2). Perciò le funzioni costruite con polinomi, esponenziali e logaritmi sono differenziabili nei punti interni del loro dominio.
:::

:::definizione{#piano-tangente titolo="Piano tangente"}
Sia $f$ differenziabile in $(x_0, y_0)$. Il **piano tangente** al grafico di $f$ nel punto $(x_0, y_0, f(x_0, y_0))$ è il piano
$$
z = f(x_0, y_0) + f_x(x_0, y_0)\,(x - x_0) + f_y(x_0, y_0)\,(y - y_0) .
$$
Passa per il punto del grafico e ha nelle direzioni degli assi le stesse pendenze della superficie, $f_x$ e $f_y$; è l'analogo della retta tangente $y = f(x_0) + f'(x_0)\,(x - x_0)$ dell'argomento sulle derivate. Per $f(x, y) = x^2 + y^2$ in $(1, 2)$ si ha $f(1, 2) = 5$, $f_x = 2x = 2$ e $f_y = 2y = 4$, quindi il piano tangente è
$$
z = 5 + 2\,(x - 1) + 4\,(y - 2) = 2x + 4y - 5 .
$$
:::

:::teorema{#differenziale titolo="Differenziale e approssimazione lineare"}
Sia $f$ differenziabile in $(x_0, y_0)$. Il **differenziale** di $f$ in $(x_0, y_0)$ è
$$
df = f_x(x_0, y_0)\,dx + f_y(x_0, y_0)\,dy ,
$$
dove $dx$ e $dy$ sono gli incrementi delle variabili. Per incrementi piccoli vale l'**approssimazione lineare**
$$
f(x_0 + dx, y_0 + dy) \approx f(x_0, y_0) + f_x(x_0, y_0)\,dx + f_y(x_0, y_0)\,dy ,
$$
che segue dalla definizione di differenziabilità trascurando il resto; il secondo membro è la quota del piano tangente. Per $f(x, y) = x^2 + y^2$ con $(x_0, y_0) = (1, 2)$, $dx = 0{,}1$ e $dy = -0{,}1$ si ha $df = 2 \cdot 0{,}1 + 4 \cdot (-0{,}1) = -0{,}2$, quindi $f(1{,}1;\ 1{,}9) \approx 5 - 0{,}2 = 4{,}8$, contro il valore esatto $1{,}21 + 3{,}61 = 4{,}82$.
:::

## Derivata lungo una curva

::::teorema{#derivata-lungo-curva titolo="Derivata lungo una curva"}
Siano $f$ differenziabile in ogni punto di un insieme aperto $A$, e $x(t)$, $y(t)$ due funzioni derivabili su un intervallo $I$, con $(x(t), y(t)) \in A$ per ogni $t \in I$. Allora la funzione di una variabile $g(t) = f(x(t), y(t))$ è derivabile in $I$ e
$$
g'(t) = f_x(x(t), y(t))\,x'(t) + f_y(x(t), y(t))\,y'(t) .
$$
Al variare di $t$ il punto $(x(t), y(t))$ descrive una curva nel piano, e $g(t)$ è il valore di $f$ lungo la curva. Il secondo membro è il **prodotto scalare** del gradiente $\nabla f$ per il vettore velocità $(x'(t), y'(t))$, cioè la somma dei prodotti delle componenti corrispondenti. Per $f(x, y) = x^2 y$ lungo $x(t) = t$, $y(t) = t^2$ si ottiene $g'(t) = 2xy \cdot 1 + x^2 \cdot 2t = 2t^3 + 2t^3 = 4t^3$, lo stesso risultato che si ha derivando direttamente $g(t) = t^4$.

:::dimostrazione
L'idea è applicare la definizione di differenziabilità con gli incrementi delle due variabili prodotti da un incremento $s$ di $t$. Si fissano $t \in I$ e $s \neq 0$, e si pongono $h = x(t + s) - x(t)$ e $k = y(t + s) - y(t)$. Per la differenziabilità di $f$ in $(x(t), y(t))$
$$
\frac{g(t + s) - g(t)}{s} = f_x\,\frac{h}{s} + f_y\,\frac{k}{s} + \frac{R(h, k)}{s} ,
$$
con le derivate parziali calcolate in $(x(t), y(t))$. Per $s \to 0$ i rapporti $\dfrac{h}{s}$ e $\dfrac{k}{s}$ tendono a $x'(t)$ e $y'(t)$, per la definizione di derivata. Resta da mostrare che l'ultimo termine tende a $0$. Quando $(h, k) \neq (0, 0)$ lo si scrive come
$$
\frac{R(h, k)}{s} = \frac{R(h, k)}{\sqrt{h^2 + k^2}} \cdot \frac{\sqrt{h^2 + k^2}}{s} .
$$
Le funzioni $x$ e $y$ sono derivabili, quindi continue, perciò $(h, k) \to (0, 0)$ e il primo fattore tende a $0$. Il secondo fattore è in valore assoluto $\sqrt{\left( \dfrac{h}{s} \right)^2 + \left( \dfrac{k}{s} \right)^2}$, che tende al numero finito $\sqrt{x'(t)^2 + y'(t)^2}$. Il prodotto tende quindi a $0$; quando $(h, k) = (0, 0)$ il resto è nullo, perché $g(t + s) = g(t)$. Ne segue che il rapporto incrementale di $g$ tende a $f_x\,x'(t) + f_y\,y'(t)$.
:::
::::

:::teorema{#gradiente-curve-di-livello titolo="Gradiente e curve di livello"}
Sia $f$ differenziabile su un aperto, e sia $(x(t), y(t))$ una curva derivabile contenuta nella curva di livello $f(x, y) = k$. Allora in ogni punto della curva
$$
f_x\,x'(t) + f_y\,y'(t) = 0 ,
$$
cioè il gradiente è perpendicolare al vettore velocità, che è tangente alla curva di livello. Infatti lungo la curva si ha $g(t) = f(x(t), y(t)) = k$ per ogni $t$, quindi $g'(t) = 0$, e la derivata lungo una curva dà l'uguaglianza. Per $f(x, y) = x^2 + y^2$ nel punto $(1, 1)$ della circonferenza $x^2 + y^2 = 2$ il gradiente è $(2, 2)$, diretto come il raggio e perpendicolare alla retta tangente $x + y = 2$. La stessa uguaglianza dà la pendenza delle curve di livello, ed è il punto di partenza del saggio marginale di sostituzione e del metodo dei moltiplicatori di Lagrange nell'argomento sui massimi e minimi liberi e vincolati.

::grafico{curve="1.4142*cos(t),1.4142*sin(t),0,6.29" vettori="1,1,3,3,∇f" segmenti="-0.5,2.5,2.5,-0.5" punti="1,1,pieno" xmin=-2 xmax=4 ymin=-2 ymax=4 uguale=1 legenda="x^2 + y^2 = 2" titolo="Il gradiente di $f(x, y) = x^2 + y^2$ in $(1, 1)$ è $(2, 2)$ ed è perpendicolare alla tangente $x + y = 2$ (tratteggiata) alla curva di livello $x^2 + y^2 = 2$"}

:::

## Funzioni di produzione e di utilità

:::definizione{#cobb-douglas titolo="Funzione di Cobb-Douglas"}
Una **funzione di produzione** $Q(K, L)$ dà la quantità prodotta da un'impresa che impiega la quantità $K$ di capitale e la quantità $L$ di lavoro, con $K > 0$ e $L > 0$. La **funzione di Cobb-Douglas** è
$$
Q(K, L) = A\,K^{a} L^{b},
\qquad
A > 0, \quad a > 0, \quad b > 0 .
$$
La produzione è positiva e cresce se cresce uno dei due fattori, perché le potenze con esponente positivo sono crescenti. Con $Q(K, L) = 2\,K^{\frac{1}{2}} L^{\frac{1}{2}}$, per esempio, $9$ unità di capitale e $4$ di lavoro producono $Q(9, 4) = 2 \cdot 3 \cdot 2 = 12$ unità. La stessa forma $U(x, y) = x^{a} y^{b}$ si usa come **funzione di utilità** di un consumatore che acquista le quantità $x$ e $y$ di due beni.
:::

:::definizione{#produttivita-marginali titolo="Produttività marginali"}
Le derivate parziali $Q_K$ e $Q_L$ si chiamano **produttività marginali** del capitale e del lavoro. Per l'approssimazione lineare, $Q_L$ è circa l'aumento della produzione dovuto a un'unità di lavoro in più, a capitale invariato. Per la Cobb-Douglas
$$
Q_K = a\,A\,K^{a - 1} L^{b} = \frac{a\,Q}{K},
\qquad
Q_L = b\,A\,K^{a} L^{b - 1} = \frac{b\,Q}{L} .
$$
Con $Q(K, L) = 2\,K^{\frac{1}{2}} L^{\frac{1}{2}}$ in $(9, 4)$ si ha $Q_K = \dfrac{1}{2} \cdot \dfrac{12}{9} = \dfrac{2}{3}$ e $Q_L = \dfrac{1}{2} \cdot \dfrac{12}{4} = \dfrac{3}{2}$. Se $a < 1$, la produttività marginale del capitale decresce al crescere di $K$, perché $Q_{KK} = a(a - 1)\,A\,K^{a - 2} L^{b} < 0$, e si parla di produttività marginale decrescente. Allo stesso modo, nelle funzioni di utilità, le derivate $U_x$ e $U_y$ sono le **utilità marginali** dei due beni.
:::

:::definizione{#isoquanti-indifferenza titolo="Isoquanti e curve di indifferenza"}
Le curve di livello di una funzione di produzione si chiamano **isoquanti**, e l'isoquanto $Q(K, L) = Q_0$ è formato dalle combinazioni di capitale e lavoro che producono la stessa quantità $Q_0$. Le curve di livello di una funzione di utilità si chiamano **curve di indifferenza**, perché il consumatore è indifferente tra i panieri che danno la stessa utilità. Per $Q(K, L) = 2\,K^{\frac{1}{2}} L^{\frac{1}{2}}$ l'isoquanto $Q = 12$ è dato da $\sqrt{KL} = 6$, cioè $K = \dfrac{36}{L}$, un ramo di iperbole decrescente.

::grafico{f="36/x+0*sqrt(x);18-2.25*x" punti="4,9,pieno" xmin=-2 xmax=18 ymin=-2 ymax=18 nomi="L,K" legenda="K = \dfrac{36}{L};K = 18 - \dfrac{9}{4}\,L" titolo="L'isoquanto $Q = 12$ di $Q(K, L) = 2\,K^{\frac{1}{2}} L^{\frac{1}{2}}$ e la sua tangente nel punto $(L, K) = (4, 9)$, di pendenza $-\dfrac{9}{4}$"}

:::

:::teorema{#saggio-marginale-sostituzione titolo="Saggio marginale di sostituzione"}
Sia $Q(K, L)$ differenziabile con $Q_K \neq 0$, e sia l'isoquanto per il punto $(K, L)$ il grafico di una funzione derivabile $K(L)$. Allora la pendenza dell'isoquanto è
$$
K'(L) = -\frac{Q_L}{Q_K} .
$$
Il numero $\mathrm{SMS} = \dfrac{Q_L}{Q_K}$ si chiama **saggio marginale di sostituzione** tecnica, ed è circa la quantità di capitale che si può togliere quando si aggiunge un'unità di lavoro, mantenendo costante la produzione. La formula segue dalla derivata lungo una curva applicata alla curva $L \mapsto (K(L), L)$. Lungo l'isoquanto si ha $Q(K(L), L) = Q_0$, quindi derivando rispetto a $L$ si ha $Q_K\,K'(L) + Q_L = 0$. Per la Cobb-Douglas $\mathrm{SMS} = \dfrac{b\,Q / L}{a\,Q / K} = \dfrac{b}{a} \cdot \dfrac{K}{L}$; con $Q(K, L) = 2\,K^{\frac{1}{2}} L^{\frac{1}{2}}$ in $(9, 4)$ si ottiene $\mathrm{SMS} = \dfrac{9}{4}$, la pendenza cambiata di segno della tangente in figura. Per una funzione di utilità $U(x, y)$ il saggio marginale di sostituzione tra i due beni è allo stesso modo $\dfrac{U_x}{U_y}$.
:::

## Funzioni omogenee e rendimenti di scala

:::definizione{#funzioni-omogenee titolo="Funzioni omogenee"}
Sia $D$ un insieme del piano tale che, se $(x, y) \in D$ e $t > 0$, anche $(tx, ty) \in D$; per esempio il quadrante $x > 0$, $y > 0$. La funzione $f : D \to \mathbb{R}$ è **omogenea di grado** $r$ se
$$
f(tx, ty) = t^{r} f(x, y) \qquad \text{per ogni } (x, y) \in D \text{ e ogni } t > 0 .
$$
Moltiplicando entrambe le variabili per $t$, il valore della funzione viene moltiplicato per $t^{r}$. Il polinomio $x^2 + 3xy$ è omogeneo di grado $2$, perché $(tx)^2 + 3\,(tx)(ty) = t^2 (x^2 + 3xy)$; il polinomio $x^2 + y$ non è omogeneo, perché i suoi termini hanno gradi diversi, e infatti $f(t, t) = t^2 + t$ non è della forma $t^{r} f(1, 1) = 2\,t^{r}$. La Cobb-Douglas è omogenea di grado $a + b$, perché
$$
A\,(tK)^{a} (tL)^{b} = t^{a + b} A\,K^{a} L^{b} .
$$

::grafico{f="36/x+0*sqrt(x);144/x+0*sqrt(x)" segmenti="0,0,8,18" punti="4,9,pieno;8,18,pieno" xmin=-2 xmax=18 ymin=-3 ymax=24 nomi="L,K" legenda="Q = 12;Q = 24" titolo="Per $Q(K, L) = 2\,K^{\frac{1}{2}} L^{\frac{1}{2}}$, omogenea di grado $1$, raddoppiando i fattori da $(L, K) = (4, 9)$ a $(8, 18)$ si passa dall'isoquanto $Q = 12$ all'isoquanto $Q = 24$"}

:::

:::definizione{#rendimenti-di-scala titolo="Rendimenti di scala"}
Sia la funzione di produzione $Q(K, L)$ omogenea di grado $r > 0$. Moltiplicando i due fattori per $t > 1$ la produzione viene moltiplicata per $t^{r}$, e i **rendimenti di scala** sono:

- **crescenti** se $r > 1$, perché allora $t^{r} > t$ e la produzione cresce più dei fattori;
- **costanti** se $r = 1$, perché la produzione cresce nella stessa proporzione dei fattori;
- **decrescenti** se $r < 1$, perché $t^{r} < t$.

Per la Cobb-Douglas i rendimenti dipendono dalla somma degli esponenti $a + b$. La funzione $Q(K, L) = 5\,K^{\frac{1}{3}} L^{\frac{1}{2}}$ ha grado $\dfrac{1}{3} + \dfrac{1}{2} = \dfrac{5}{6} < 1$, quindi ha rendimenti decrescenti; raddoppiando capitale e lavoro la produzione viene moltiplicata per $2^{\frac{5}{6}} \approx 1{,}78$.
:::

::::teorema{#teorema-di-eulero titolo="Teorema di Eulero"}
Sia $f$ differenziabile e omogenea di grado $r$ su un insieme aperto $D$ come nella definizione di funzione omogenea. Allora per ogni $(x, y) \in D$
$$
x\,f_x(x, y) + y\,f_y(x, y) = r\,f(x, y) .
$$
Per $f(x, y) = x^2 + 3xy$, di grado $2$, si ha $x\,(2x + 3y) + y \cdot 3x = 2x^2 + 6xy = 2\,f(x, y)$. In economia, per una funzione di produzione con rendimenti costanti si ha $r = 1$ e $K\,Q_K + L\,Q_L = Q$. Quindi, se ogni fattore è remunerato con la sua produttività marginale, le remunerazioni dei due fattori esauriscono esattamente il prodotto. Con $Q(K, L) = 2\,K^{\frac{1}{2}} L^{\frac{1}{2}}$ in $(9, 4)$ si ottiene $9 \cdot \dfrac{2}{3} + 4 \cdot \dfrac{3}{2} = 6 + 6 = 12 = Q(9, 4)$.

:::dimostrazione
L'idea è derivare rispetto a $t$ i due membri dell'uguaglianza che definisce l'omogeneità. Si fissa $(x, y) \in D$ e si pone $g(t) = f(tx, ty)$ per $t > 0$. Per l'omogeneità $g(t) = t^{r} f(x, y)$, quindi $g'(t) = r\,t^{r - 1} f(x, y)$. D'altra parte $g$ è il valore di $f$ lungo la curva $(tx, ty)$, che ha velocità $(x, y)$, e per la derivata lungo una curva
$$
g'(t) = f_x(tx, ty)\,x + f_y(tx, ty)\,y .
$$
Le due espressioni di $g'(t)$ sono uguali per ogni $t > 0$; per $t = 1$ si ottiene $x\,f_x(x, y) + y\,f_y(x, y) = r\,f(x, y)$.
:::
::::
