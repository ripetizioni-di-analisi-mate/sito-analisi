---
titolo: Funzioni di più variabili
sommario: Lo spazio ℝⁿ con norma, distanza e intorni, gli insiemi del piano, le funzioni di due o più variabili con dominio e insiemi di livello, i limiti in due variabili, la continuità e il teorema di Weierstrass.
---

## Lo spazio ℝⁿ

:::definizione{#spazio-rn titolo="Lo spazio ℝⁿ"}
$\mathbb{R}^n$ è l'insieme delle $n$-uple ordinate di numeri reali $\mathbf{x} = (x_1, \dots, x_n)$. Per $n = 2$ i punti si indicano con $(x, y)$, per $n = 3$ con $(x, y, z)$. La somma e il prodotto per uno scalare si eseguono **componente per componente**:
$$
\mathbf{x} + \mathbf{y} = (x_1 + y_1, \dots, x_n + y_n),
\qquad
\lambda \mathbf{x} = (\lambda x_1, \dots, \lambda x_n) .
$$
Le funzioni di più variabili sono definite su sottoinsiemi di $\mathbb{R}^n$; le definizioni di questo capitolo si enunciano per $n$ qualunque e negli esercizi si usano quasi sempre con $n = 2$.
:::

:::definizione{#norma-e-distanza titolo="Norma euclidea e distanza"}
La **norma euclidea** di $\mathbf{x} \in \mathbb{R}^n$ è
$$
\lVert \mathbf{x} \rVert = \sqrt{x_1^2 + \dots + x_n^2},
\qquad
\lVert (x, y) \rVert = \sqrt{x^2 + y^2} \ \text{ in } \mathbb{R}^2 .
$$
La **distanza** tra due punti $P$ e $Q$ è $d(P, Q) = \lVert P - Q \rVert$; nel piano, per $P = (x_1, y_1)$ e $Q = (x_2, y_2)$,
$$
d(P, Q) = \sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2} .
$$
Per $n = 1$ la norma coincide con il **valore assoluto**, quindi la norma estende a $\mathbb{R}^n$ lo strumento con cui in Analisi 1 si misurano le vicinanze: ogni condizione del tipo $|x - x_0| < \delta$ diventa $\lVert P - P_0 \rVert < \delta$.
:::

:::definizione{#intorno-circolare titolo="Intorno circolare"}
Per $P_0 \in \mathbb{R}^n$ e $r > 0$, l'**intorno** di $P_0$ di raggio $r$ è
$$
B(P_0, r) = \{ P \in \mathbb{R}^n : \lVert P - P_0 \rVert < r \} .
$$
In $\mathbb{R}^2$ è il **disco aperto** di centro $P_0$ e raggio $r$, *senza* la circonferenza di bordo; in $\mathbb{R}^3$ è la **palla aperta**. L'intorno circolare sostituisce l'intervallo $(x_0 - r, x_0 + r)$ di Analisi 1 e compare in tutte le definizioni che seguono: punti interni, insiemi aperti, limiti e continuità.

::grafico{f="NaN" curve="1+1.5*cos(t),1+1.5*sin(t),0,6.29" area="1+sqrt(abs(2.25-(x-1)^2));1-sqrt(abs(2.25-(x-1)^2));-0.5;2.5" segmenti="1,1,2.0607,2.0607" punti="1,1,pieno,P₀" etichette="1.3,1.68,r" xmin=-1.5 xmax=3.5 ymin=-1 ymax=3 uguale=1 titolo="Il disco aperto $B(P_0, r)$: i punti a distanza minore di $r$ da $P_0$, senza la circonferenza di bordo (tratteggiata)"}

:::

## Punti e insiemi del piano

Le definizioni che seguono sono enunciate per $A \subseteq \mathbb{R}^2$ e valgono identiche in $\mathbb{R}^n$.

:::definizione{#punti-interni-esterni-frontiera titolo="Punto interno, esterno, di frontiera"}
Sia $A \subseteq \mathbb{R}^2$ e $P_0 \in \mathbb{R}^2$. Il punto $P_0$ è

- **interno** ad $A$ se esiste un intorno $B(P_0, r)$ contenuto in $A$;
- **esterno** ad $A$ se esiste un intorno $B(P_0, r)$ contenuto nel complementare di $A$;
- **di frontiera** per $A$ se *ogni* intorno di $P_0$ contiene sia punti di $A$ sia punti del complementare.

Ogni punto del piano è *esattamente* di uno dei tre tipi. L'insieme dei punti interni si indica con $\mathring{A}$, l'insieme dei punti di frontiera con $\partial A$. La classificazione dei punti serve a riconoscere gli insiemi aperti e chiusi, che compaiono nelle ipotesi dei teoremi di questo capitolo.
:::

:::esempio{titolo="Punti del disco"}
Sia $A = \{ (x, y) : x^2 + y^2 < 1 \}$ il disco aperto unitario. Un punto con $x^2 + y^2 < 1$ è **interno**, perché il disco $B(P_0, r)$ con $r = 1 - \lVert P_0 \rVert > 0$ è contenuto in $A$. Un punto con $x^2 + y^2 > 1$ è **esterno** per la stessa ragione applicata al complementare. Un punto della circonferenza $x^2 + y^2 = 1$ è **di frontiera**, poiché ogni suo intorno contiene punti dentro e fuori dal disco; quindi $\partial A$ è la circonferenza unitaria, che non appartiene ad $A$.

::grafico{f="NaN" curve="cos(t),sin(t),0,6.29" area="0.2+sqrt(abs(0.1225-(x+0.3)^2));0.2-sqrt(abs(0.1225-(x+0.3)^2));-0.65;0.05|1+sqrt(abs(0.1225-(x-1.5)^2));1-sqrt(abs(0.1225-(x-1.5)^2));1.15;1.85|-0.643+sqrt(abs(0.1225-(x-0.766)^2));-0.643-sqrt(abs(0.1225-(x-0.766)^2));0.416;1.116" punti="-0.3,0.2,pieno,interno;1.5,1,pieno,esterno;0.766,-0.643,pieno,di frontiera" etichette="-0.75,-0.45,A" xmin=-2 xmax=2.6 ymin=-1.5 ymax=1.7 uguale=1 titolo="Il disco aperto $A$, con il bordo tratteggiato: un intorno di un punto interno sta in $A$, un intorno di un punto esterno sta fuori da $A$, ogni intorno di un punto di frontiera contiene punti dentro e fuori"}

:::

:::definizione{#punto-di-accumulazione titolo="Punto di accumulazione"}
$P_0 \in \mathbb{R}^2$ è **di accumulazione** per $A$ se *ogni* intorno di $P_0$ contiene *almeno un* punto di $A$ diverso da $P_0$. Il punto può appartenere ad $A$ oppure no. Un punto di $A$ che non è di accumulazione per $A$ si dice **isolato**. Come in una variabile, il limite per $(x, y) \to (x_0, y_0)$ ha senso soltanto se $(x_0, y_0)$ è di accumulazione per il dominio: negli esercizi il caso tipico è l'origine, punto di accumulazione per $\mathbb{R}^2 \setminus \{(0,0)\}$.
:::

:::definizione{#aperti-e-chiusi titolo="Insieme aperto e insieme chiuso"}
$A \subseteq \mathbb{R}^2$ è **aperto** se ogni suo punto è interno, cioè se $A = \mathring{A}$; è **chiuso** se il suo complementare è aperto, condizione equivalente a $\partial A \subseteq A$. Il disco $x^2 + y^2 < 1$ è aperto; il disco $x^2 + y^2 \leq 1$ è chiuso. In pratica, un insieme definito da disuguaglianze strette tra funzioni continue è aperto, mentre un insieme definito da disuguaglianze larghe o da uguaglianze è chiuso; questo criterio permette di classificare i domini trovati negli esercizi.
:::

:::attenzione
Un insieme che non è aperto *non* è necessariamente chiuso: la corona $\{ (x, y) : 1 \leq x^2 + y^2 < 4 \}$ contiene la circonferenza interna, i cui punti non sono interni, quindi non è aperta; non contiene la circonferenza esterna, che è fatta di punti di frontiera, quindi non è chiusa. Gli insiemi $\mathbb{R}^2$ e $\varnothing$ sono invece *sia* aperti *sia* chiusi.

::grafico{curve="cos(t),sin(t),0,6.29;2*cos(t),2*sin(t),0,6.29" area="sqrt(max(0,4-x^2));sqrt(max(0,1-x^2));-2;2|-sqrt(max(0,1-x^2));-sqrt(max(0,4-x^2));-2;2" xmin=-3 xmax=3 ymin=-2.5 ymax=2.5 uguale=1 titolo="La corona $1 \leq x^2 + y^2 < 4$: la circonferenza interna appartiene all'insieme (linea continua), quella esterna no (tratteggiata)"}

:::

:::definizione{#limitati-e-compatti titolo="Insieme limitato e insieme compatto"}
$A \subseteq \mathbb{R}^2$ è **limitato** se è contenuto in un disco centrato nell'origine, cioè se esiste $R > 0$ con $\lVert P \rVert \leq R$ per ogni $P \in A$. Un insieme chiuso e limitato si dice **compatto**. Il disco chiuso $x^2 + y^2 \leq 4$ è compatto; il semipiano $y \geq 0$ è chiuso ma non limitato, quindi non è compatto. I compatti sono gli insiemi su cui si applica il **teorema di Weierstrass** in più variabili, e su di essi si impostano i problemi di massimo e minimo assoluto.
:::

:::definizione{#insiemi-connessi titolo="Insieme connesso"}
$A \subseteq \mathbb{R}^2$ è **connesso per archi** se ogni coppia di punti di $A$ si può congiungere con una curva continua interamente contenuta in $A$. Un disco e una corona circolare sono connessi; l'unione di due dischi disgiunti non lo è. Su un insieme aperto e connesso una funzione continua che non si annulla in alcun punto ha **segno costante**, perciò la connessione interviene negli studi di segno: il segno si determina in un punto campione per ciascun pezzo connesso.
:::

## Funzioni di due e più variabili

:::definizione{#funzione-due-variabili titolo="Funzione di due o più variabili"}
Una **funzione di due variabili** è una legge $f : A \subseteq \mathbb{R}^2 \to \mathbb{R}$ che a ogni punto $(x, y) \in A$ associa un numero reale $z = f(x, y)$. Il **grafico**
$$
G_f = \{ (x, y, f(x, y)) : (x, y) \in A \} \subset \mathbb{R}^3
$$
è in generale una **superficie** dello spazio. Per $f(x, y) = x^2 + y^2$ il grafico è un paraboloide; per $f(x, y) = 2 - x + y$ è un piano. Con $n \geq 3$ variabili la definizione è identica, ma il grafico vive in $\mathbb{R}^{n+1}$ e non si disegna; per visualizzare la funzione si usano gli insiemi di livello, definiti nel paragrafo sulle curve e superfici di livello.
:::

:::definizione{#dominio-naturale titolo="Dominio naturale"}
Il **dominio naturale** di $f(x, y)$ è l'insieme dei punti del piano in cui l'espressione che definisce $f$ ha significato. Le condizioni sono le stesse di Analisi 1:

- denominatori diversi da zero;
- argomenti delle radici di indice pari maggiori o uguali a zero;
- argomenti dei logaritmi maggiori di zero;
- argomenti di $\arcsin$ e $\arccos$ compresi tra $-1$ e $1$.

Le condizioni da soddisfare *contemporaneamente* si raccolgono in un **sistema**. Il risultato è una regione del piano, descritta dalle disuguaglianze e riconosciuta geometricamente: semipiani, dischi, corone, regioni delimitate da parabole o iperboli. Del dominio si precisa poi se è aperto o chiuso, limitato, connesso, perché queste proprietà decidono quali teoremi si applicano.
:::

:::esempio{titolo="Dominio con il logaritmo"}
$f(x, y) = \ln(xy)$ richiede $xy > 0$, quindi il dominio è
$$
D = \{ (x, y) : xy > 0 \} ,
$$
l'unione del primo e del terzo quadrante aperti, assi esclusi. La disuguaglianza è stretta con funzioni continue, perciò $D$ è **aperto**; **non è limitato** e **non è connesso**, poiché i due quadranti non si possono congiungere con una curva che eviti gli assi.

::grafico{area="3;0;0;3.5|0;-3;-3.5;0" etichette="1.3,1.5,xy > 0;-2.2,-1.6,xy > 0" xmin=-3.5 xmax=3.5 ymin=-3 ymax=3 titolo="Il dominio di $\ln(xy)$: primo e terzo quadrante, assi esclusi"}

:::

## Curve e superfici di livello

:::definizione{#curve-di-livello titolo="Curva di livello"}
Per $f : A \subseteq \mathbb{R}^2 \to \mathbb{R}$ e $k \in \mathbb{R}$, la **curva di livello** $k$ è l'insieme
$$
E_k = \{ (x, y) \in A : f(x, y) = k \} .
$$
È la proiezione sul piano $xy$ dei punti del grafico a quota $z = k$, come le linee di quota di una carta topografica. Al variare di $k$ le curve di livello descrivono la funzione senza il disegno tridimensionale: dove le curve si infittiscono la funzione **varia rapidamente**. Per alcuni valori di $k$ l'insieme $E_k$ può ridursi a un punto oppure essere vuoto, e lo studio di questi casi fa parte dell'esercizio.
:::

:::esempio{titolo="Curve di livello del paraboloide"}
Per $f(x, y) = x^2 + y^2$ la curva di livello $k$ è l'insieme delle soluzioni di $x^2 + y^2 = k$. Se $k > 0$ è la **circonferenza** di centro l'origine e raggio $\sqrt{k}$; se $k = 0$ è il solo punto $(0, 0)$; se $k < 0$ è **vuota**, poiché una somma di quadrati *non* è mai negativa. Le circonferenze si infittiscono allontanandosi dall'origine, e questo riflette la crescita sempre più rapida del paraboloide.

::grafico{curve="cos(t),sin(t),0,6.29;sqrt(2)*cos(t),sqrt(2)*sin(t),0,6.29;sqrt(3)*cos(t),sqrt(3)*sin(t),0,6.29;2*cos(t),2*sin(t),0,6.29" punti="0,0,pieno,k = 0" etichette="0.1,1.04,k = 1;0.1,1.45,k = 2;0.1,1.77,k = 3;0.1,2.04,k = 4" xmin=-3 xmax=3 ymin=-2.5 ymax=2.5 uguale=1 titolo="Curve di livello di $f(x, y) = x^2 + y^2$ per $k = 0, 1, 2, 3, 4$: le circonferenze si infittiscono allontanandosi dall'origine"}

:::

:::definizione{#superfici-di-livello titolo="Superficie di livello"}
Per una funzione di tre variabili $f : A \subseteq \mathbb{R}^3 \to \mathbb{R}$ l'insieme di livello $\{ (x, y, z) \in A : f(x, y, z) = k \}$ è in generale una superficie dello spazio e si chiama **superficie di livello**. Per $f(x, y, z) = x^2 + y^2 + z^2$ le superfici di livello $k > 0$ sono le **sfere** di centro l'origine e raggio $\sqrt{k}$. Poiché il grafico di una funzione di tre variabili non si disegna, le superfici di livello sono il suo principale strumento di visualizzazione.
:::

## Limiti in due variabili

:::definizione{#limite-due-variabili titolo="Limite in due variabili"}
Sia $f : A \subseteq \mathbb{R}^2 \to \mathbb{R}$ e sia $P_0 = (x_0, y_0)$ di accumulazione per $A$. Si scrive
$$
\lim_{(x, y) \to (x_0, y_0)} f(x, y) = L \in \mathbb{R}
$$
se per ogni $\varepsilon > 0$ esiste $\delta > 0$ tale che, per ogni $(x, y) \in A$,
$$
0 < \lVert (x, y) - (x_0, y_0) \rVert < \delta \implies |f(x, y) - L| < \varepsilon .
$$
Il limite è $+\infty$ se per ogni $M > 0$ esiste $\delta > 0$ tale che $f(x, y) > M$ negli stessi punti. La struttura è quella di Analisi 1 con la **norma** al posto del valore assoluto; per questo l'unicità del limite, i limiti di somma, prodotto e quoziente e il teorema del confronto valgono con gli stessi enunciati e le stesse dimostrazioni, e si rimanda al capitolo sui limiti di Analisi 1.
:::

:::osservazione
In una variabile ci si avvicina a $x_0$ da due soli lati, e il limite esiste quando i due limiti laterali coincidono. Nel piano ci si avvicina a $P_0$ lungo *infinite* rette e infinite curve: la definizione chiede che $f(x, y)$ sia vicina a $L$ in *tutti* i punti di un disco bucato attorno a $P_0$, qualunque sia la strada con cui li si raggiunge. L'esistenza del limite è perciò una **condizione più restrittiva**, e la verifica richiede due strumenti distinti: il teorema delle restrizioni per dimostrare che un limite non esiste, il confronto e le coordinate polari per dimostrare che esiste.
:::

::::teorema{#teorema-delle-restrizioni titolo="Teorema delle restrizioni"}
Sia $\displaystyle\lim_{(x, y) \to P_0} f(x, y) = L$ e sia $\gamma(t)$ una curva a valori nel dominio di $f$ con $\gamma(t) \to P_0$ e $\gamma(t) \neq P_0$ per $t \to t_0$. Allora
$$
\lim_{t \to t_0} f(\gamma(t)) = L .
$$
Il limite lungo *ogni* restrizione coincide con il limite della funzione. Il teorema si usa **al contrapposto**: se due restrizioni producono limiti diversi, oppure una restrizione produce un limite che non esiste, allora il limite di $f$ **non esiste**. È lo strumento standard per dimostrare la non esistenza di un limite in due variabili.

:::dimostrazione
Fissato $\varepsilon > 0$, per la definizione di limite esiste $\delta > 0$ tale che $|f(P) - L| < \varepsilon$ per ogni $P$ del dominio con $0 < \lVert P - P_0 \rVert < \delta$. Poiché $\gamma(t) \to P_0$ per $t \to t_0$ e $\gamma(t) \neq P_0$, per $t$ *abbastanza vicino* a $t_0$ risulta $0 < \lVert \gamma(t) - P_0 \rVert < \delta$, quindi $|f(\gamma(t)) - L| < \varepsilon$. Perciò $f(\gamma(t)) \to L$.
:::
::::

:::esempio{titolo="Non esistenza lungo gli assi"}
Per $f(x, y) = \dfrac{2x^2}{x^2 + y^2}$ nell'origine: lungo l'asse $x$, cioè sulla restrizione $y = 0$, si ha $f(x, 0) = \dfrac{2x^2}{x^2} = 2 \to 2$; lungo l'asse $y$ si ha $f(0, y) = 0 \to 0$. Poiché due restrizioni producono **limiti diversi**, il limite per $(x, y) \to (0, 0)$ **non esiste**.
:::

:::attenzione
Le restrizioni dimostrano la *non esistenza* di un limite, *non* la sua esistenza. Per $f(x, y) = \dfrac{x^2 y}{x^4 + y^2}$ ogni retta $y = mx$ dà
$$
f(x, mx) = \frac{m x^3}{x^4 + m^2 x^2} = \frac{m x}{x^2 + m^2} \to 0 ,
$$
e anche l'asse $y$ dà $0$; lungo la parabola $y = x^2$ si ha però $f(x, x^2) = \dfrac{x^4}{2x^4} = \dfrac{1}{2}$. Il limite **non esiste**, benché tutte le rette producano lo stesso valore. Per provare che un limite esiste serve una **maggiorazione**, con il teorema del confronto o con le coordinate polari.

::grafico{f="x^2" segmenti="-1.5,-1.5,2,2;-2,2,1.5,-1.5;-0.75,-1.5,1.25,2.5;-1.25,2.5,0.75,-1.5" punti="0,0,vuoto" xmin=-2.2 xmax=2.2 ymin=-1.5 ymax=2.5 uguale=1 titolo="Le rette $y = mx$ (tratteggiate) e la parabola $y = x^2$ verso l'origine: lungo le rette $f$ tende a $0$, lungo la parabola vale costantemente $\dfrac{1}{2}$"}

:::

## Calcolo dei limiti: confronto e coordinate polari

:::teorema{#confronto-due-variabili titolo="Teorema del confronto in due variabili"}
Se in un intorno di $P_0$ (escluso al più $P_0$) risulta
$$
|f(x, y) - L| \leq g(x, y)
\qquad \text{con} \qquad
\lim_{(x, y) \to P_0} g(x, y) = 0 ,
$$
allora $f(x, y) \to L$ per $(x, y) \to P_0$. La dimostrazione è identica a quella in una variabile e si rimanda al capitolo sui limiti di Analisi 1. È lo strumento con cui si dimostra che un limite *esiste*: si maggiora $|f - L|$ con una funzione più semplice che tende a $0$.
:::

:::proposizione{#maggiorazioni-utili titolo="Maggiorazioni utili"}
Per ogni $(x, y) \in \mathbb{R}^2$ valgono le disuguaglianze
$$
|x| \leq \sqrt{x^2 + y^2},
\qquad
x^2 \leq x^2 + y^2,
\qquad
|xy| \leq \frac{x^2 + y^2}{2} ,
$$
e le analoghe con $y$ al posto di $x$. La terza segue da $(|x| - |y|)^2 \geq 0$ sviluppando il quadrato. Nei limiti con denominatore $x^2 + y^2$ queste disuguaglianze **eliminano il denominatore**: poiché $x^2 \leq x^2 + y^2$, il rapporto $\dfrac{x^2}{x^2 + y^2}$ è compreso tra $0$ e $1$, quindi ogni fattore di questo tipo si maggiora con $1$.
:::

:::teorema{#limitata-per-infinitesima titolo="Limitata per infinitesima"}
Se $|f(x, y)| \leq C$ in un intorno di $P_0$ e $g(x, y) \to 0$ per $(x, y) \to P_0$, allora $f(x, y)\, g(x, y) \to 0$. Segue dal **confronto**, poiché $|f g| \leq C |g| \to 0$. Si usa con i **fattori limitati** tipici: $\sin$ e $\cos$ di qualunque argomento, e i rapporti del tipo $\dfrac{x^2}{x^2 + y^2}$ maggiorati con $1$.
:::

:::esempio{titolo="Limite con maggiorazione"}
$$
\lim_{(x, y) \to (0, 0)} \frac{x y^3}{x^2 + y^2} = 0 .
$$
Poiché $|xy| \leq \dfrac{x^2 + y^2}{2}$, risulta
$$
\left| \frac{x y^3}{x^2 + y^2} \right|
= \frac{|xy|\, y^2}{x^2 + y^2}
\leq \frac{x^2 + y^2}{2} \cdot \frac{y^2}{x^2 + y^2}
= \frac{y^2}{2} ,
$$
e $\dfrac{y^2}{2} \to 0$, quindi per il **confronto** il limite è $0$.
:::

:::proposizione{#coordinate-polari titolo="Calcolo con le coordinate polari"}
Il cambio di coordinate centrato in $P_0 = (x_0, y_0)$ è
$$
x = x_0 + \rho \cos\theta,
\qquad
y = y_0 + \rho \sin\theta,
\qquad \rho > 0, \ \theta \in [0, 2\pi) ,
$$
dove $\rho = \lVert (x, y) - P_0 \rVert$ è la distanza dal punto. Se esiste una funzione $g(\rho)$, indipendente da $\theta$, tale che
$$
\begin{cases}
|f(x_0 + \rho \cos\theta,\; y_0 + \rho \sin\theta) - L| \leq g(\rho) \ \text{ per ogni } \theta \\[4pt]
g(\rho) \to 0 \ \text{ per } \rho \to 0^+
\end{cases}
$$
allora $\displaystyle\lim_{(x, y) \to P_0} f(x, y) = L$. Il metodo conviene quando il **denominatore** è $x^2 + y^2$: con $P_0$ nell'origine diventa $\rho^2$ e si semplifica, poiché $\cos^2\theta + \sin^2\theta = 1$. La maggiorazione *indipendente* da $\theta$ garantisce che l'avvicinamento a $L$ è **uniforme** in tutte le direzioni, come richiede la definizione di limite.

::grafico{curve="1+0.6*cos(t),1+0.6*sin(t),0,0.7" vettori="1,1,2.53,2.288" segmenti="1,1,3.3,1;2.53,1,2.53,2.288" punti="1,1,pieno,P₀;2.53,2.288,pieno,P" etichette="1.5,1.8,ρ;1.7,1.1,θ;1.45,0.78,ρ cos θ;2.62,1.55,ρ sin θ" xmin=-0.5 xmax=4 ymin=-0.5 ymax=3 uguale=1 titolo="Coordinate polari centrate in $P_0$: $\rho$ è la distanza di $P$ da $P_0$, $\theta$ l'angolo con la direzione positiva dell'asse $x$"}

:::

:::esempio{titolo="Limite in coordinate polari"}
$$
\lim_{(x, y) \to (0, 0)} \frac{x^3 + 2y^3}{x^2 + y^2} = 0 .
$$
In coordinate polari il numeratore è $\rho^3(\cos^3\theta + 2\sin^3\theta)$ e il denominatore è $\rho^2$, quindi
$$
\left| \frac{x^3 + 2y^3}{x^2 + y^2} \right|
= \rho\, |\cos^3\theta + 2 \sin^3\theta|
\leq 3\rho = g(\rho) ,
$$
poiché $|\cos\theta| \leq 1$ e $|\sin\theta| \leq 1$. Dato che $g(\rho) = 3\rho \to 0$ per $\rho \to 0^+$ e $g$ *non* dipende da $\theta$, il limite è $0$.
:::

:::attenzione
Calcolare il limite per $\rho \to 0^+$ tenendo $\theta$ fissato equivale a una **restrizione** lungo una semiretta, quindi *non* dimostra l'esistenza del limite. Per $f(x, y) = \dfrac{x^2 y}{x^4 + y^2}$, a ogni $\theta$ fissato il limite per $\rho \to 0^+$ vale $0$, ma il limite in due variabili non esiste, come mostrato con la parabola $y = x^2$. La conclusione è lecita solo con una maggiorazione $g(\rho)$ valida per ogni $\theta$ *contemporaneamente*.
:::

## Continuità

:::definizione{#continuita-due-variabili titolo="Funzione continua"}
Sia $f : A \subseteq \mathbb{R}^2 \to \mathbb{R}$ e sia $P_0 \in A$ di accumulazione per $A$. $f$ è **continua** in $P_0$ se
$$
\lim_{(x, y) \to P_0} f(x, y) = f(P_0) ,
$$
cioè se il limite esiste finito e coincide con il valore della funzione; nei punti isolati di $A$ la funzione si considera continua. $f$ è continua in $A$ se lo è in ogni punto. Per una funzione continua il limite si calcola **per sostituzione**, quindi il lavoro degli esercizi si concentra nei punti in cui la continuità non è garantita dalla forma dell'espressione.
:::

:::teorema{#continuita-elementari-due-variabili titolo="Continuità delle funzioni elementari"}
I polinomi in $x$ e $y$ sono **continui** in $\mathbb{R}^2$; somma, prodotto, quoziente con denominatore non nullo e composizione di funzioni continue sono continui. In particolare, componendo una funzione continua di una variabile con una funzione continua di due variabili si ottiene una funzione continua: $e^{x^2 + y^2}$, $\sin(xy)$ e $\ln(1 + x^2 + y^2)$ sono continue in $\mathbb{R}^2$. Di conseguenza la continuità va verificata con la definizione *soltanto* nei **punti di raccordo** delle funzioni definite a tratti, che è il caso tipico degli esercizi d'esame.
:::

:::esempio{titolo="Continuità da verificare in un solo punto"}
$$
f(x, y) =
\begin{cases}
\dfrac{x^3}{x^2 + y^2} & (x, y) \neq (0, 0) \\[8pt]
0 & (x, y) = (0, 0)
\end{cases}
$$
Fuori dall'origine $f$ è un quoziente di polinomi con denominatore non nullo, quindi è **continua**. Nell'origine la continuità equivale alla condizione $\displaystyle\lim_{(x,y) \to (0,0)} f(x, y) = f(0, 0) = 0$. Poiché $\dfrac{x^2}{x^2 + y^2} \leq 1$, risulta $|f(x, y)| = \dfrac{x^2}{x^2 + y^2}\, |x| \leq |x|$, e $|x| \to 0$; per il **confronto** il limite vale $0$, quindi $f$ è continua anche nell'origine.
:::

:::definizione{#prolungamento-continuita titolo="Prolungamento per continuità"}
Sia $f : A \to \mathbb{R}$ e sia $P_0 \notin A$ un punto di accumulazione per $A$. Se esiste finito
$$
\lim_{(x, y) \to P_0} f(x, y) = L ,
$$
la funzione $\tilde{f}$ che coincide con $f$ su $A$ e vale $L$ in $P_0$ è continua in $P_0$ e si chiama **prolungamento per continuità** di $f$. Se il limite non esiste oppure è infinito, il prolungamento continuo **non è possibile**. L'esercizio tipo assegna una funzione definita su $\mathbb{R}^2 \setminus \{(0,0)\}$ e chiede se si può prolungare nell'origine: la risposta è il calcolo del limite.
:::

:::esempio{titolo="Prolungamento nell'origine"}
$f(x, y) = \dfrac{\ln(1 + x^2 + y^2)}{x^2 + y^2}$ è definita su $\mathbb{R}^2 \setminus \{(0,0)\}$. In coordinate polari la quantità $x^2 + y^2$ diventa $\rho^2$, quindi
$$
f = \frac{\ln(1 + \rho^2)}{\rho^2} \to 1 \qquad \text{per } \rho \to 0^+ ,
$$
per il **limite notevole del logaritmo** con argomento $\rho^2 \to 0$; l'espressione dipende solo da $\rho$, quindi la convergenza è uniforme in $\theta$. Perciò $f$ **si prolunga per continuità** ponendo $\tilde{f}(0, 0) = 1$.
:::

## Il teorema di Weierstrass

:::teorema{#weierstrass-piu-variabili titolo="Teorema di Weierstrass in più variabili"}
Se $K \subset \mathbb{R}^n$ è compatto, cioè chiuso e limitato, e $f : K \to \mathbb{R}$ è continua, allora $f$ ammette **massimo e minimo assoluti** su $K$: esistono $P_m, P_M \in K$ tali che
$$
f(P_m) \leq f(P) \leq f(P_M) \qquad \text{per ogni } P \in K .
$$
L'enunciato estende il teorema di Weierstrass di Analisi 1, con il **compatto** $K$ al posto dell'intervallo $[a, b]$. Garantisce che i problemi di massimo e minimo assoluto su un compatto hanno soluzione; i punti in cui cercarla si determinano con le derivate parziali e i moltiplicatori di Lagrange, e si rimanda al capitolo sui massimi e minimi. La dimostrazione usa le successioni in $\mathbb{R}^n$ e si omette.
:::

:::esempio{titolo="Verifica delle ipotesi"}
Sia $f(x, y) = \dfrac{x + y}{1 + x^2 + y^2}$ su $K = \{ (x, y) : x^2 + y^2 \leq 4 \}$. La funzione è continua su $\mathbb{R}^2$, poiché è un quoziente di polinomi con denominatore mai nullo; l'insieme $K$ è chiuso, perché definito da una disuguaglianza larga, ed è limitato, perché contenuto nel disco di raggio $2$. Entrambe le ipotesi sono verificate, quindi il **teorema di Weierstrass** si applica e $f$ ammette **massimo e minimo assoluti** su $K$.
:::

:::attenzione
Senza la **compattezza** la conclusione *non* è garantita. Sul disco aperto $A = \{ x^2 + y^2 < 1 \}$ la funzione $f(x, y) = x$ è continua e limitata, ma **non ammette massimo**: l'estremo superiore è $1$ e verrebbe assunto solo nel punto $(1, 0)$, che non appartiene ad $A$. Su $\mathbb{R}^2$, chiuso ma non limitato, la stessa funzione non è nemmeno limitata.

::grafico{f="NaN" curve="cos(t),sin(t),0,6.29" area="sqrt(abs(1-x^2));-sqrt(abs(1-x^2));-1;1" punti="1,0,vuoto" etichette="1.1,0.15,(1, 0)" xmin=-1.6 xmax=1.8 ymin=-1.4 ymax=1.4 uguale=1 titolo="Sul disco aperto $x^2 + y^2 < 1$ la funzione $f(x, y) = x$ si avvicina a $1$ verso il punto $(1, 0)$, che non appartiene al disco: il massimo non esiste"}

:::
