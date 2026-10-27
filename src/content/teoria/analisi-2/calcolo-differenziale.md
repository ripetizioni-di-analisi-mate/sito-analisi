---
titolo: Calcolo differenziale in più variabili
sommario: Derivate parziali e gradiente, differenziabilità e piano tangente, derivate direzionali e formula del gradiente, regola della catena, derivate seconde e formula di Taylor al secondo ordine.
---

## Derivate parziali e gradiente

:::definizione{#derivata-parziale titolo="Derivata parziale"}
$f : A \subseteq \mathbb{R}^2 \to \mathbb{R}$, $(x_0, y_0)$ interno ad $A$. La derivata parziale di $f$ rispetto a $x$ in $(x_0, y_0)$ è
$$
\frac{\partial f}{\partial x}(x_0, y_0) = \lim_{t \to 0} \frac{f(x_0 + t,\, y_0) - f(x_0, y_0)}{t},
$$
se il limite esiste finito; la derivata parziale rispetto a $y$ si definisce allo stesso modo, con l'incremento sulla seconda variabile. Si scrive anche $f_x(x_0, y_0)$ e $f_y(x_0, y_0)$. Se entrambe esistono, $f$ si dice derivabile in $(x_0, y_0)$. Nel rapporto incrementale di $f_x$ la variabile $y$ resta ferma al valore $y_0$, quindi nel calcolo si deriva rispetto a $x$ trattando $y$ come una costante, con le regole di derivazione di una variabile.
:::

:::esempio
$f(x, y) = x^2 y^3 + \sin x$. Derivando rispetto a $x$ con $y$ costante si ottiene $f_x = 2x y^3 + \cos x$; derivando rispetto a $y$ con $x$ costante si ottiene $f_y = 3 x^2 y^2$, perché $\sin x$ è costante rispetto a $y$ e la sua derivata è nulla.
:::

:::definizione{#gradiente titolo="Gradiente"}
Se $f$ è derivabile in $(x_0, y_0)$, il gradiente di $f$ in $(x_0, y_0)$ è il vettore delle derivate parziali
$$
\nabla f(x_0, y_0) = \bigl( f_x(x_0, y_0),\; f_y(x_0, y_0) \bigr).
$$
Per una funzione di $n$ variabili il gradiente ha $n$ componenti. Il gradiente compare nel differenziale, nella formula della derivata direzionale e nella ricerca dei punti critici, perciò quasi ogni esercizio di questo capitolo inizia con il suo calcolo. Per $f(x, y) = x^2 y^3 + \sin x$ si ha $\nabla f(x, y) = (2x y^3 + \cos x,\; 3x^2 y^2)$.
:::

## Differenziabilità

:::definizione{#differenziabilita titolo="Funzione differenziabile"}
$f : A \to \mathbb{R}$, $(x_0, y_0)$ interno ad $A$. $f$ è differenziabile in $(x_0, y_0)$ se è derivabile in $(x_0, y_0)$ e
$$
\lim_{(h, k) \to (0, 0)} \frac{f(x_0 + h,\, y_0 + k) - f(x_0, y_0) - f_x(x_0, y_0)\, h - f_y(x_0, y_0)\, k}{\sqrt{h^2 + k^2}} = 0 .
$$
L'applicazione lineare $(h, k) \mapsto f_x(x_0, y_0)\, h + f_y(x_0, y_0)\, k$ si chiama differenziale di $f$ in $(x_0, y_0)$. La condizione dice che l'incremento di $f$ è approssimato da una funzione lineare degli incrementi $h$ e $k$, con un errore che è $o\!\left(\sqrt{h^2 + k^2}\right)$:
$$
f(x_0 + h,\, y_0 + k) = f(x_0, y_0) + f_x\, h + f_y\, k + o\!\left(\sqrt{h^2 + k^2}\right).
$$
Negli esercizi la differenziabilità in un punto si verifica calcolando prima le derivate parziali con la definizione e poi questo limite.
:::

:::osservazione
In una variabile derivabilità e differenziabilità sono equivalenti. In due variabili l'esistenza delle derivate parziali è una condizione più debole, poiché le derivate parziali controllano $f$ soltanto lungo le due rette per $(x_0, y_0)$ parallele agli assi, mentre il limite della differenziabilità controlla l'incremento lungo ogni modo di avvicinarsi al punto. Per questo in più variabili la nozione centrale del calcolo differenziale è la differenziabilità.
:::

::::teorema{#differenziabile-implica-continua titolo="La differenziabilità implica la continuità"}
Se $f$ è differenziabile in $(x_0, y_0)$, allora $f$ è continua in $(x_0, y_0)$. Il teorema si usa spesso nella forma seguente: se $f$ non è continua in un punto, allora $f$ non è differenziabile in quel punto.

:::dimostrazione
Per la differenziabilità, per $(h, k) \to (0, 0)$ si ha
$$
f(x_0 + h,\, y_0 + k) - f(x_0, y_0) = f_x\, h + f_y\, k + o\!\left(\sqrt{h^2 + k^2}\right).
$$
I termini $f_x h$ e $f_y k$ tendono a $0$ perché prodotti di una costante per un infinitesimo; il resto tende a $0$ perché rapporto fra un $o\!\left(\sqrt{h^2 + k^2}\right)$ e $1$. Quindi $f(x_0 + h,\, y_0 + k) \to f(x_0, y_0)$, e questa è la continuità di $f$ in $(x_0, y_0)$.
:::
::::

:::attenzione
L'esistenza delle derivate parziali in un punto non garantisce la continuità in quel punto. La funzione
$$
f(x, y) =
\begin{cases}
\dfrac{xy}{x^2 + y^2} & (x, y) \neq (0, 0) \\[10pt]
0 & (x, y) = (0, 0)
\end{cases}
$$
è nulla sugli assi, quindi $f_x(0,0) = f_y(0,0) = 0$ ed entrambe le derivate parziali esistono. Lungo la retta $y = x$ si ha $f(t, t) = \dfrac{t^2}{2t^2} = \dfrac{1}{2}$ per ogni $t \neq 0$, mentre lungo l'asse $x$ la funzione è nulla, quindi il limite di $f$ in $(0,0)$ non esiste e $f$ non è continua nell'origine. Per il teorema precedente $f$ non è differenziabile in $(0,0)$.
:::

## Piano tangente

:::definizione{#piano-tangente titolo="Piano tangente al grafico"}
Se $f$ è differenziabile in $(x_0, y_0)$, il piano tangente al grafico di $f$ nel punto $\bigl(x_0, y_0, f(x_0, y_0)\bigr)$ è il piano di equazione
$$
z = f(x_0, y_0) + f_x(x_0, y_0)\,(x - x_0) + f_y(x_0, y_0)\,(y - y_0).
$$
La differenziabilità dice che la differenza fra $f(x, y)$ e la quota del piano è $o$ della distanza di $(x, y)$ da $(x_0, y_0)$, quindi il piano approssima il grafico al primo ordine, come la retta tangente approssima il grafico di una funzione di una variabile. L'equazione acquista questo significato geometrico soltanto nei punti di differenziabilità.
:::

:::esempio
$f(x, y) = x^2 + y^2$ in $(1, 1)$. Si ha $f(1,1) = 2$, $f_x = 2x$ e $f_y = 2y$, quindi $f_x(1,1) = f_y(1,1) = 2$. Il piano tangente ha equazione
$$
z = 2 + 2(x - 1) + 2(y - 1) = 2x + 2y - 2 .
$$
Le derivate parziali sono continue su tutto $\mathbb{R}^2$, perciò la differenziabilità in $(1,1)$ segue dal teorema del differenziale totale, enunciato nella sezione seguente.
:::

## Il teorema del differenziale totale

La verifica della differenziabilità con la definizione richiede un limite in due variabili; il teorema seguente fornisce una condizione sufficiente molto più rapida.

::::teorema{#teorema-del-differenziale-totale titolo="Teorema del differenziale totale"}
Se le derivate parziali di $f$ esistono in un intorno di $(x_0, y_0)$ e sono continue in $(x_0, y_0)$, allora $f$ è differenziabile in $(x_0, y_0)$. In particolare una funzione di classe $C^1(A)$, cioè con derivate parziali continue in tutto l'aperto $A$, è differenziabile in ogni punto di $A$. Con questo teorema la differenziabilità delle funzioni assegnate da una formula si riconosce dal calcolo delle derivate parziali: per $f(x, y) = e^{xy} + x^2$ si ha $f_x = y\,e^{xy} + 2x$ e $f_y = x\,e^{xy}$, continue su $\mathbb{R}^2$ perché composte di funzioni continue, quindi $f$ è differenziabile in ogni punto. La verifica con la definizione resta necessaria nei punti in cui le derivate parziali non sono continue, tipicamente i punti di raccordo delle funzioni definite a tratti.

:::dimostrazione
L'incremento di $f$ si spezza in due incrementi lungo le direzioni degli assi:
$$
\begin{aligned}
f(x_0 + h,\, y_0 + k) - f(x_0, y_0)
&= \bigl[ f(x_0 + h,\, y_0 + k) - f(x_0,\, y_0 + k) \bigr] \\[4pt]
&\quad + \bigl[ f(x_0,\, y_0 + k) - f(x_0, y_0) \bigr].
\end{aligned}
$$
La funzione $t \mapsto f(t,\, y_0 + k)$ è derivabile nell'intervallo di estremi $x_0$ e $x_0 + h$, perché in un intorno di $(x_0, y_0)$ esiste $f_x$; per il teorema di Lagrange esiste quindi $\xi$ fra $x_0$ e $x_0 + h$ tale che il primo incremento vale $f_x(\xi,\, y_0 + k)\, h$. Per lo stesso motivo esiste $\eta$ fra $y_0$ e $y_0 + k$ tale che il secondo incremento vale $f_y(x_0, \eta)\, k$. Il numeratore del limite della differenziabilità diventa perciò
$$
\bigl[ f_x(\xi,\, y_0 + k) - f_x(x_0, y_0) \bigr] h + \bigl[ f_y(x_0, \eta) - f_y(x_0, y_0) \bigr] k .
$$
Poiché $\dfrac{|h|}{\sqrt{h^2 + k^2}} \leq 1$ e $\dfrac{|k|}{\sqrt{h^2 + k^2}} \leq 1$, il modulo del rapporto della differenziabilità è maggiorato da
$$
\bigl| f_x(\xi,\, y_0 + k) - f_x(x_0, y_0) \bigr| + \bigl| f_y(x_0, \eta) - f_y(x_0, y_0) \bigr| .
$$
Per $(h, k) \to (0, 0)$ i punti $(\xi,\, y_0 + k)$ e $(x_0, \eta)$ tendono a $(x_0, y_0)$, quindi per la continuità di $f_x$ e $f_y$ in $(x_0, y_0)$ entrambi gli addendi tendono a $0$. Per il teorema del confronto il rapporto tende a $0$, perciò $f$ è differenziabile in $(x_0, y_0)$.
:::
::::

:::richiamo{titolo="Teorema di Lagrange"}
Se $g$ è continua in $[a, b]$ e derivabile in $(a, b)$, esiste $c \in (a, b)$ tale che $g(b) - g(a) = g'(c)\,(b - a)$.
:::

:::osservazione
La condizione del teorema è sufficiente e il viceversa è falso: esistono funzioni differenziabili in un punto con derivate parziali discontinue in quel punto, come $f(x, y) = (x^2 + y^2) \sin \dfrac{1}{\sqrt{x^2 + y^2}}$ prolungata con $f(0,0) = 0$, che è differenziabile nell'origine con differenziale nullo. Lo schema delle implicazioni fra le nozioni di questo capitolo è quindi
$$
C^1 \implies \text{differenziabile} \implies \text{continua},
\qquad
\text{differenziabile} \implies \text{derivabile},
$$
e nessuna delle frecce si inverte, come mostrano i controesempi di questo capitolo.
:::

## Derivate direzionali e formula del gradiente

:::definizione{#derivata-direzionale titolo="Derivata direzionale"}
$\mathbf{v} = (v_1, v_2)$ versore, cioè vettore di modulo $1$. La derivata direzionale di $f$ in $(x_0, y_0)$ lungo $\mathbf{v}$ è
$$
D_{\mathbf{v}} f(x_0, y_0) = \lim_{t \to 0} \frac{f(x_0 + t v_1,\, y_0 + t v_2) - f(x_0, y_0)}{t},
$$
se il limite esiste finito. Misura il tasso di variazione di $f$ lungo la retta per $(x_0, y_0)$ di direzione $\mathbf{v}$; per $\mathbf{v} = (1, 0)$ e $\mathbf{v} = (0, 1)$ si ritrovano le derivate parziali $f_x$ e $f_y$. Quando la direzione è assegnata con un vettore $\mathbf{w}$ di modulo qualsiasi, prima si normalizza: $\mathbf{v} = \dfrac{\mathbf{w}}{|\mathbf{w}|}$.
:::

::::teorema{#formula-del-gradiente titolo="Formula del gradiente"}
Se $f$ è differenziabile in $(x_0, y_0)$, allora per ogni versore $\mathbf{v} = (v_1, v_2)$ la derivata direzionale esiste e
$$
D_{\mathbf{v}} f(x_0, y_0) = \nabla f(x_0, y_0) \cdot \mathbf{v} = f_x(x_0, y_0)\, v_1 + f_y(x_0, y_0)\, v_2 .
$$
La formula riduce il calcolo di ogni derivata direzionale a quello delle due derivate parziali. Per $f(x, y) = x^2 + y^2$ in $(1, 0)$, che è differenziabile perché di classe $C^1$, con $\mathbf{v} = \left( \dfrac{\sqrt{2}}{2}, \dfrac{\sqrt{2}}{2} \right)$ si ottiene $D_{\mathbf{v}} f(1, 0) = 2 \cdot \dfrac{\sqrt{2}}{2} + 0 \cdot \dfrac{\sqrt{2}}{2} = \sqrt{2}$.

:::dimostrazione
Nella definizione di differenziabilità si pone $(h, k) = (t v_1,\, t v_2)$; poiché $|\mathbf{v}| = 1$, si ha $\sqrt{h^2 + k^2} = |t|$. Quindi per $t \to 0$
$$
f(x_0 + t v_1,\, y_0 + t v_2) - f(x_0, y_0) = t \,( f_x v_1 + f_y v_2 ) + o(|t|).
$$
Dividendo per $t$ si ottiene il rapporto incrementale della derivata direzionale, pari a $f_x v_1 + f_y v_2 + \dfrac{o(|t|)}{t}$. L'ultimo addendo tende a $0$ per definizione di o-piccolo, perciò il limite esiste e vale $f_x v_1 + f_y v_2$.
:::
::::

:::attenzione
Senza l'ipotesi di differenziabilità la formula del gradiente non si applica, e l'esistenza di tutte le derivate direzionali in un punto non garantisce la differenziabilità né la continuità. Per la funzione $f(x, y) = \dfrac{x^2 y}{x^4 + y^2}$, prolungata con $f(0,0) = 0$, ogni derivata direzionale nell'origine esiste; lungo la parabola $y = x^2$ si ha però $f(t, t^2) = \dfrac{t^4}{2t^4} = \dfrac{1}{2}$ per ogni $t \neq 0$, quindi $f$ non è continua in $(0,0)$ e perciò non è differenziabile in $(0,0)$.
:::

:::teorema{#direzione-di-massima-crescita titolo="Direzione di massima crescita"}
$f$ differenziabile in $(x_0, y_0)$ con $\nabla f(x_0, y_0) \neq (0,0)$. Per la disuguaglianza di Cauchy-Schwarz, per ogni versore $\mathbf{v}$
$$
\bigl| D_{\mathbf{v}} f(x_0, y_0) \bigr| = \bigl| \nabla f(x_0, y_0) \cdot \mathbf{v} \bigr| \leq \bigl| \nabla f(x_0, y_0) \bigr|,
$$
con uguaglianza se e solo se $\mathbf{v}$ è parallelo al gradiente. Quindi la derivata direzionale è massima lungo il versore $\mathbf{v} = \dfrac{\nabla f(x_0, y_0)}{|\nabla f(x_0, y_0)|}$, dove vale $|\nabla f(x_0, y_0)|$, ed è minima lungo il versore opposto, dove vale $-|\nabla f(x_0, y_0)|$. Nelle direzioni ortogonali al gradiente la derivata direzionale è nulla; queste direzioni sono tangenti alla curva di livello di $f$ passante per il punto, perciò il gradiente è ortogonale alle curve di livello. Il risultato risponde alla domanda tipica degli esercizi: in quale direzione $f$ cresce più rapidamente e con quale tasso.
:::

## Regola della catena

::::teorema{#regola-della-catena titolo="Regola della catena"}
Siano $x(t)$ e $y(t)$ derivabili in $t_0$ e sia $f$ differenziabile in $\bigl(x(t_0), y(t_0)\bigr)$. Allora la funzione composta $F(t) = f\bigl(x(t), y(t)\bigr)$ è derivabile in $t_0$ e
$$
F'(t_0) = f_x\bigl(x(t_0), y(t_0)\bigr)\, x'(t_0) + f_y\bigl(x(t_0), y(t_0)\bigr)\, y'(t_0),
$$
cioè $F'(t_0) = \nabla f\bigl(x(t_0), y(t_0)\bigr) \cdot \bigl(x'(t_0), y'(t_0)\bigr)$. Se le variabili intermedie dipendono da due parametri, $x = x(s, t)$ e $y = y(s, t)$ con derivate parziali in $(s_0, t_0)$, la composta $F(s, t) = f\bigl(x(s,t), y(s,t)\bigr)$ ha derivate parziali
$$
\frac{\partial F}{\partial s} = f_x\, \frac{\partial x}{\partial s} + f_y\, \frac{\partial y}{\partial s},
\qquad
\frac{\partial F}{\partial t} = f_x\, \frac{\partial x}{\partial t} + f_y\, \frac{\partial y}{\partial t}.
$$
In ogni caso la derivata rispetto a un parametro è la somma, estesa a tutte le variabili intermedie, della derivata di $f$ rispetto alla variabile moltiplicata per la derivata della variabile rispetto al parametro. La regola serve per derivare funzioni composte senza esplicitarle e per calcolare la variazione di $f$ lungo una curva.

:::dimostrazione
Dimostriamo il caso di un parametro. Posto $h(\tau) = x(t_0 + \tau) - x(t_0)$ e $k(\tau) = y(t_0 + \tau) - y(t_0)$, per la differenziabilità di $f$ si ha
$$
F(t_0 + \tau) - F(t_0) = f_x\, h(\tau) + f_y\, k(\tau) + \omega\bigl(h(\tau), k(\tau)\bigr) \sqrt{h(\tau)^2 + k(\tau)^2},
$$
dove $\omega(h, k) \to 0$ per $(h, k) \to (0, 0)$ e $\omega(0,0) = 0$. Dividendo per $\tau$ si ottiene
$$
\frac{F(t_0 + \tau) - F(t_0)}{\tau} = f_x\, \frac{h(\tau)}{\tau} + f_y\, \frac{k(\tau)}{\tau} + \omega\bigl(h(\tau), k(\tau)\bigr)\, \frac{\sqrt{h(\tau)^2 + k(\tau)^2}}{\tau}.
$$
Per $\tau \to 0$ si ha $\dfrac{h(\tau)}{\tau} \to x'(t_0)$ e $\dfrac{k(\tau)}{\tau} \to y'(t_0)$ per la derivabilità di $x$ e $y$; inoltre $h(\tau) \to 0$ e $k(\tau) \to 0$ per la continuità di $x$ e $y$, quindi $\omega \to 0$. Il fattore $\dfrac{\sqrt{h^2 + k^2}}{|\tau|}$ tende a $\sqrt{x'(t_0)^2 + y'(t_0)^2}$, perciò è limitato, e il prodotto di una funzione limitata per un'infinitesima tende a $0$. Quindi il rapporto incrementale di $F$ tende a $f_x\, x'(t_0) + f_y\, y'(t_0)$. Il caso di due parametri segue applicando questo risultato alle restrizioni con un parametro fermo.
:::
::::

:::esempio
$f(x, y) = x y^2$ con $x(t) = t^2$ e $y(t) = 3t$. Con la regola della catena, poiché $f_x = y^2$ e $f_y = 2xy$,
$$
F'(t) = y^2 \cdot 2t + 2xy \cdot 3 = 9t^2 \cdot 2t + 2 \cdot t^2 \cdot 3t \cdot 3 = 18 t^3 + 18 t^3 = 36 t^3 .
$$
La verifica diretta conferma il risultato: $F(t) = t^2 \cdot 9t^2 = 9t^4$, quindi $F'(t) = 36 t^3$.
:::

## Derivate seconde e matrice hessiana

:::definizione{#derivate-parziali-seconde titolo="Derivate parziali seconde"}
Se $f_x$ e $f_y$ sono a loro volta derivabili, le loro derivate parziali sono le derivate seconde di $f$:
$$
f_{xx} = \frac{\partial}{\partial x} f_x, \qquad
f_{xy} = \frac{\partial}{\partial y} f_x, \qquad
f_{yx} = \frac{\partial}{\partial x} f_y, \qquad
f_{yy} = \frac{\partial}{\partial y} f_y .
$$
Nel simbolo $f_{xy}$ si deriva prima rispetto a $x$ e poi rispetto a $y$; $f_{xy}$ e $f_{yx}$ si chiamano derivate seconde miste. $f$ è di classe $C^2(A)$ se tutte le derivate seconde esistono e sono continue in $A$. Le derivate seconde descrivono la curvatura del grafico e compaiono nella formula di Taylor e nello studio dei massimi e minimi.
:::

:::teorema{#teorema-di-schwarz titolo="Teorema di Schwarz"}
Se le derivate seconde miste $f_{xy}$ e $f_{yx}$ esistono in un intorno di $(x_0, y_0)$ e sono continue in $(x_0, y_0)$, allora
$$
f_{xy}(x_0, y_0) = f_{yx}(x_0, y_0).
$$
In particolare per una funzione di classe $C^2$ l'ordine di derivazione non conta. Negli esercizi il teorema dimezza i calcoli, poiché delle quattro derivate seconde ne bastano tre, e negli esercizi con funzioni regolari il confronto fra $f_{xy}$ e $f_{yx}$ serve da controllo dei conti. La dimostrazione applica due volte il teorema di Lagrange all'incremento doppio $f(x_0 + h, y_0 + k) - f(x_0 + h, y_0) - f(x_0, y_0 + k) + f(x_0, y_0)$ e si rimanda ai testi di riferimento.
:::

:::definizione{#matrice-hessiana titolo="Matrice hessiana"}
Se $f$ ha tutte le derivate seconde in $(x_0, y_0)$, la matrice hessiana di $f$ in $(x_0, y_0)$ è
$$
H_f(x_0, y_0) =
\begin{pmatrix}
f_{xx}(x_0, y_0) & f_{xy}(x_0, y_0) \\[4pt]
f_{yx}(x_0, y_0) & f_{yy}(x_0, y_0)
\end{pmatrix}.
$$
Per il teorema di Schwarz, se $f$ è di classe $C^2$ la matrice è simmetrica. La matrice hessiana raccoglie le derivate seconde come il gradiente raccoglie le prime: fornisce il termine quadratico della formula di Taylor e, nel capitolo sui massimi e minimi, classifica i punti critici attraverso il segno dei suoi autovalori.
:::

:::esempio
$f(x, y) = x^3 + x y^2$. Dalle derivate prime $f_x = 3x^2 + y^2$ e $f_y = 2xy$ si ottengono $f_{xx} = 6x$, $f_{xy} = 2y$, $f_{yx} = 2y$ e $f_{yy} = 2x$, quindi
$$
H_f(x, y) =
\begin{pmatrix}
6x & 2y \\[4pt]
2y & 2x
\end{pmatrix}.
$$
Le derivate miste coincidono, in accordo con il teorema di Schwarz, poiché $f$ è un polinomio e quindi di classe $C^2$.
:::

## Formula di Taylor al secondo ordine

:::teorema{#formula-di-taylor-secondo-ordine titolo="Formula di Taylor al secondo ordine con resto di Peano"}
Se $f$ è di classe $C^2$ in un intorno di $(x_0, y_0)$, allora per $(h, k) \to (0, 0)$
$$
\begin{aligned}
f(x_0 + h,\, y_0 + k) ={}& f(x_0, y_0) + f_x(x_0, y_0)\, h + f_y(x_0, y_0)\, k \\[6pt]
&+ \frac{1}{2} \Bigl( f_{xx}(x_0, y_0)\, h^2 + 2 f_{xy}(x_0, y_0)\, h k + f_{yy}(x_0, y_0)\, k^2 \Bigr) \\[6pt]
&+ o\bigl(h^2 + k^2\bigr).
\end{aligned}
$$
Il polinomio nei termini $h = x - x_0$ e $k = y - y_0$ si chiama polinomio di Taylor di secondo ordine di $f$ centrato in $(x_0, y_0)$; il termine di primo grado è $\nabla f \cdot (h, k)$ e il termine di secondo grado è la forma quadratica associata alla matrice hessiana, con il fattore $\dfrac{1}{2}$. La formula si ottiene applicando la formula di Taylor di una variabile alla funzione $g(t) = f(x_0 + t h,\, y_0 + t k)$, le cui derivate si calcolano con la regola della catena; per il dettaglio si rimanda ai testi di riferimento. Il polinomio approssima $f$ vicino al punto con errore trascurabile rispetto al quadrato della distanza, e nel capitolo sui massimi e minimi il segno del termine quadratico decide la natura dei punti critici.
:::

:::esempio
$f(x, y) = e^x \cos y$ in $(0, 0)$. Si ha $f(0,0) = 1$ e dalle derivate $f_x = e^x \cos y$, $f_y = -e^x \sin y$, $f_{xx} = e^x \cos y$, $f_{xy} = -e^x \sin y$, $f_{yy} = -e^x \cos y$ si ottengono i valori $f_x(0,0) = 1$, $f_y(0,0) = 0$, $f_{xx}(0,0) = 1$, $f_{xy}(0,0) = 0$ e $f_{yy}(0,0) = -1$. Il polinomio di Taylor di secondo ordine è quindi
$$
T_2(x, y) = 1 + x + \frac{x^2}{2} - \frac{y^2}{2}.
$$
:::

:::osservazione
Se $f$ è un polinomio di grado al più $2$, il polinomio di Taylor di secondo ordine centrato in un punto qualsiasi coincide con $f$, perché la differenza fra i due è un polinomio di grado al più $2$ che è $o(h^2 + k^2)$, quindi nullo. Questo fornisce un controllo immediato dei calcoli negli esercizi con funzioni polinomiali.
:::
