---
titolo: "Formulario di Analisi matematica 2"
sommario: "Le formule di Analisi 2 con le ipotesi: limiti e derivate in più variabili, Dini, Lagrange, integrali di linea, doppi, tripli e di superficie, Green, Gauss e Stokes, serie di potenze e di Fourier."
descrizione: "Formulario di Analisi 2 in PDF: limiti in coordinate polari, Hessiana, Lagrange, integrali doppi e tripli, Green, Gauss, Stokes, serie di Taylor e Fourier."
---

## Limiti e continuità in due variabili

Le dimostrazioni e gli esempi sono nel capitolo [Funzioni di più variabili](/analisi-2/funzioni-di-piu-variabili/teoria).

:::formula{#norma-e-distanza titolo="Norma, distanza e intorno"}
$$
\lVert (x, y) \rVert = \sqrt{x^2 + y^2},
\qquad
d(P, Q) = \sqrt{(x_1 - x_2)^2 + (y_1 - y_2)^2}
$$
$$
B(P_0, r) = \{ P : \lVert P - P_0 \rVert < r \}
$$
Le formule valgono per $P = (x_1, y_1)$, $Q = (x_2, y_2)$ e $r > 0$. In $\mathbb{R}^n$ la norma è la radice quadrata della somma dei quadrati delle $n$ componenti.
:::

:::formula{#condizioni-dominio titolo="Condizioni per il dominio naturale"}
| Espressione | Condizione |
| --- | --- |
| $\dfrac{A}{B}$ | $B \neq 0$ |
| $\sqrt[2k]{A}$ | $A \geq 0$ |
| $\ln A$ | $A > 0$ |
| $\arcsin A$, $\arccos A$ | $-1 \leq A \leq 1$ |

Le condizioni presenti nell'espressione di $f(x, y)$ devono essere soddisfatte insieme, perciò si raccolgono in un sistema.
:::

:::formula{#teorema-delle-restrizioni titolo="Teorema delle restrizioni"}
$$
\lim_{(x, y) \to P_0} f(x, y) = L
\implies
\lim_{t \to t_0} f(\gamma(t)) = L
$$
L'implicazione vale per ogni curva $\gamma$ nel dominio con $\gamma(t) \to P_0$ e $\gamma(t) \neq P_0$ per $t \to t_0$. Quindi, se due restrizioni hanno limiti diversi, il limite di $f$ non esiste. Nell'origine le restrizioni più usate sono $f(x, mx)$, $f(0, y)$ e $f(x, x^2)$.
:::

:::formula{#confronto-due-variabili titolo="Teorema del confronto"}
$$
|f(x, y) - L| \leq g(x, y),
\qquad
\lim_{(x, y) \to P_0} g(x, y) = 0
\implies
\lim_{(x, y) \to P_0} f(x, y) = L
$$
La disuguaglianza deve valere in un intorno di $P_0$, escluso al più $P_0$. Il teorema si usa per dimostrare che un limite esiste.
:::

:::formula{#maggiorazioni-utili titolo="Maggiorazioni utili"}
$$
|x| \leq \sqrt{x^2 + y^2},
\qquad
x^2 \leq x^2 + y^2,
\qquad
|xy| \leq \frac{x^2 + y^2}{2}
$$
$$
0 \leq \frac{x^2}{x^2 + y^2} \leq 1,
\qquad
|\sin t| \leq |t|,
\qquad
|\sin t| \leq 1
$$
Valgono per ogni $(x, y)$ e ogni $t$ reale, il rapporto per $(x, y) \neq (0, 0)$, e valgono anche con $y$ al posto di $x$.
:::

:::formula{#limitata-per-infinitesima titolo="Limitata per infinitesima"}
$$
|f(x, y)| \leq C,
\qquad
\lim_{(x, y) \to P_0} g(x, y) = 0
\implies
\lim_{(x, y) \to P_0} f(x, y)\, g(x, y) = 0
$$
La maggiorazione $|f| \leq C$ deve valere in un intorno di $P_0$. Sono limitati il seno e il coseno di qualunque argomento e i rapporti $\dfrac{x^2}{x^2 + y^2}$ e $\dfrac{xy}{x^2 + y^2}$.
:::

:::formula{#coordinate-polari-limiti titolo="Limiti in coordinate polari"}
$$
x = x_0 + \rho \cos\theta,
\qquad
y = y_0 + \rho \sin\theta,
\qquad
\rho > 0, \ \theta \in [0, 2\pi)
$$
$$
\begin{cases}
|f(x_0 + \rho \cos\theta,\, y_0 + \rho \sin\theta) - L| \leq g(\rho) \ \text{ per ogni } \theta \\[4pt]
g(\rho) \to 0 \ \text{ per } \rho \to 0^+
\end{cases}
\implies
\lim_{(x, y) \to P_0} f(x, y) = L
$$
La funzione $g(\rho)$ deve essere **indipendente da** $\theta$. Con $P_0 = (0, 0)$ si ha $x^2 + y^2 = \rho^2$.
:::

:::formula{#limiti-notevoli-due-variabili titolo="Limiti notevoli con argomento infinitesimo"}
$$
\begin{aligned}
\lim_{(x, y) \to P_0} \frac{\sin g(x, y)}{g(x, y)} &= 1,
\qquad
\lim_{(x, y) \to P_0} \frac{1 - \cos g(x, y)}{g(x, y)^2} = \frac{1}{2} \\[6pt]
\lim_{(x, y) \to P_0} \frac{\ln\bigl(1 + g(x, y)\bigr)}{g(x, y)} &= 1,
\qquad
\lim_{(x, y) \to P_0} \frac{e^{g(x, y)} - 1}{g(x, y)} = 1
\end{aligned}
$$
Valgono se $g(x, y) \to 0$ per $(x, y) \to P_0$ e $g(x, y) \neq 0$ in un intorno di $P_0$ privato di $P_0$. Nell'origine l'argomento tipico è $g = x^2 + y^2$.
:::

:::formula{#continuita-e-prolungamento titolo="Continuità e prolungamento per continuità"}
$$
f \text{ continua in } P_0 \iff \lim_{(x, y) \to P_0} f(x, y) = f(P_0)
$$
La definizione vale per $P_0$ del dominio e di accumulazione per il dominio. Polinomi e funzioni elementari sono continui nel loro dominio, e lo sono anche somme, prodotti, quozienti con denominatore non nullo e composizioni di funzioni continue. Se $P_0$ non appartiene al dominio e il limite esiste finito e vale $L$, la funzione si prolunga per continuità ponendo $\tilde{f}(P_0) = L$.
:::

:::attenzione
Le restrizioni lungo le rette possono avere tutte lo stesso limite anche quando il limite non esiste. Per $f(x, y) = \dfrac{x^2 y}{x^4 + y^2}$ nell'origine si ha $f(x, mx) = \dfrac{mx}{x^2 + m^2} \to 0$ per ogni $m$ e $f(0, y) = 0$, mentre $f(x, x^2) = \dfrac{1}{2}$ per ogni $x \neq 0$. Perciò il limite non esiste.
:::

## Derivate parziali, differenziabilità e piano tangente

Gli enunciati completi e le dimostrazioni sono nel capitolo [Calcolo differenziale in più variabili](/analisi-2/calcolo-differenziale/teoria).

:::formula{#derivate-parziali titolo="Derivate parziali"}
$$
\begin{aligned}
f_x(x_0, y_0) &= \lim_{t \to 0} \frac{f(x_0 + t,\, y_0) - f(x_0, y_0)}{t} \\[6pt]
f_y(x_0, y_0) &= \lim_{t \to 0} \frac{f(x_0,\, y_0 + t) - f(x_0, y_0)}{t}
\end{aligned}
$$
Le derivate esistono se i limiti esistono finiti, con $(x_0, y_0)$ interno al dominio. Nel calcolo di $f_x$ la variabile $y$ si tratta come una costante. Nei punti di raccordo di una funzione definita a tratti si usa la definizione.
:::

:::formula{#gradiente titolo="Gradiente"}
$$
\nabla f(x_0, y_0) = \bigl( f_x(x_0, y_0),\; f_y(x_0, y_0) \bigr),
\qquad
\nabla f = (f_x,\, f_y,\, f_z) \ \text{ in } \mathbb{R}^3
$$
Il gradiente è definito nei punti in cui $f$ è derivabile.
:::

:::formula{#differenziabilita titolo="Differenziabilità"}
$$
\lim_{(h, k) \to (0, 0)} \frac{f(x_0 + h,\, y_0 + k) - f(x_0, y_0) - f_x(x_0, y_0)\, h - f_y(x_0, y_0)\, k}{\sqrt{h^2 + k^2}} = 0
$$
$$
f(x_0 + h,\, y_0 + k) = f(x_0, y_0) + f_x\, h + f_y\, k + o\bigl(\sqrt{h^2 + k^2}\bigr)
$$
Le due scritture sono equivalenti e richiedono che $f$ sia derivabile in $(x_0, y_0)$. Il differenziale è l'applicazione lineare $(h, k) \mapsto f_x(x_0, y_0)\, h + f_y(x_0, y_0)\, k$.
:::

:::formula{#differenziale-totale titolo="Teorema del differenziale totale"}
$$
f_x,\ f_y \ \text{continue in } (x_0, y_0)
\implies
f \ \text{differenziabile in } (x_0, y_0)
$$
Le derivate parziali devono esistere in un intorno del punto. In particolare una funzione di classe $C^1(A)$ è differenziabile in ogni punto dell'aperto $A$.
:::

:::formula{#schema-implicazioni titolo="Schema delle implicazioni"}
$$
C^1 \implies \text{differenziabile} \implies \text{continua},
\qquad
\text{differenziabile} \implies \text{derivabile}
$$
Nessuna delle implicazioni si inverte. Una funzione discontinua in un punto non è quindi differenziabile in quel punto.
:::

:::formula{#piano-tangente-grafico titolo="Piano tangente al grafico"}
$$
z = f(x_0, y_0) + f_x(x_0, y_0)\,(x - x_0) + f_y(x_0, y_0)\,(y - y_0)
$$
L'equazione rappresenta il piano tangente al grafico nel punto $\bigl(x_0, y_0, f(x_0, y_0)\bigr)$ se $f$ è differenziabile in $(x_0, y_0)$. Un vettore normale al piano è $\bigl(f_x(x_0, y_0),\, f_y(x_0, y_0),\, -1\bigr)$.
:::

## Derivata direzionale, regola della catena e formula di Taylor

Le formule sono dimostrate nel capitolo [Calcolo differenziale in più variabili](/analisi-2/calcolo-differenziale/teoria).

:::formula{#derivata-direzionale titolo="Derivata direzionale"}
$$
D_{\mathbf{v}} f(x_0, y_0) = \lim_{t \to 0} \frac{f(x_0 + t v_1,\, y_0 + t v_2) - f(x_0, y_0)}{t}
$$
Il vettore $\mathbf{v} = (v_1, v_2)$ è un versore, cioè $v_1^2 + v_2^2 = 1$. Se la direzione è assegnata con un vettore $\mathbf{w}$ di modulo qualsiasi, si usa $\mathbf{v} = \dfrac{\mathbf{w}}{|\mathbf{w}|}$.
:::

:::formula{#formula-del-gradiente titolo="Formula del gradiente"}
$$
D_{\mathbf{v}} f(x_0, y_0) = \nabla f(x_0, y_0) \cdot \mathbf{v} = f_x(x_0, y_0)\, v_1 + f_y(x_0, y_0)\, v_2
$$
La formula vale se $f$ è **differenziabile** in $(x_0, y_0)$. Negli altri punti la derivata direzionale si calcola con la definizione.
:::

:::formula{#direzione-massima-crescita titolo="Direzione di massima crescita"}
$$
\max_{|\mathbf{v}| = 1} D_{\mathbf{v}} f(x_0, y_0) = |\nabla f(x_0, y_0)|,
\qquad
\mathbf{v} = \frac{\nabla f(x_0, y_0)}{|\nabla f(x_0, y_0)|}
$$
Vale per $f$ differenziabile con $\nabla f(x_0, y_0) \neq (0, 0)$. Il valore minimo $-|\nabla f(x_0, y_0)|$ si ha lungo il versore opposto; lungo le direzioni ortogonali al gradiente la derivata direzionale è nulla, quindi il gradiente è ortogonale alla curva di livello per il punto.
:::

:::formula{#regola-della-catena titolo="Regola della catena con un parametro"}
$$
\frac{d}{dt} f\bigl(x(t), y(t)\bigr) = f_x\bigl(x(t), y(t)\bigr)\, x'(t) + f_y\bigl(x(t), y(t)\bigr)\, y'(t)
$$
Vale se $x(t)$ e $y(t)$ sono derivabili in $t$ e $f$ è differenziabile nel punto $\bigl(x(t), y(t)\bigr)$. In forma vettoriale la derivata è $\nabla f\bigl(x(t), y(t)\bigr) \cdot \bigl(x'(t), y'(t)\bigr)$.
:::

:::formula{#regola-della-catena-due-parametri titolo="Regola della catena con due parametri"}
$$
\frac{\partial F}{\partial s} = f_x\, \frac{\partial x}{\partial s} + f_y\, \frac{\partial y}{\partial s},
\qquad
\frac{\partial F}{\partial t} = f_x\, \frac{\partial x}{\partial t} + f_y\, \frac{\partial y}{\partial t}
$$
Valgono per $F(s, t) = f\bigl(x(s, t), y(s, t)\bigr)$, con $f$ differenziabile e $x$, $y$ dotate di derivate parziali; le derivate di $f$ sono calcolate in $\bigl(x(s, t), y(s, t)\bigr)$.
:::

:::formula{#teorema-di-schwarz titolo="Derivate seconde e teorema di Schwarz"}
$$
f_{xy} = \frac{\partial}{\partial y} f_x,
\qquad
f_{yx} = \frac{\partial}{\partial x} f_y,
\qquad
f_{xy}(x_0, y_0) = f_{yx}(x_0, y_0)
$$
L'uguaglianza delle derivate miste vale se $f_{xy}$ e $f_{yx}$ esistono in un intorno di $(x_0, y_0)$ e sono continue nel punto, in particolare per ogni $f$ di classe $C^2$.
:::

:::formula{#matrice-hessiana titolo="Matrice hessiana"}
$$
H_f(x_0, y_0) =
\begin{pmatrix}
f_{xx}(x_0, y_0) & f_{xy}(x_0, y_0) \\[4pt]
f_{yx}(x_0, y_0) & f_{yy}(x_0, y_0)
\end{pmatrix},
\qquad
\det H_f = f_{xx} f_{yy} - f_{xy}^2
$$
Per $f$ di classe $C^2$ la matrice è simmetrica, per il teorema di Schwarz, e la formula del determinante usa $f_{xy} = f_{yx}$.
:::

:::formula{#formula-di-taylor-secondo-ordine titolo="Formula di Taylor al secondo ordine"}
$$
\begin{aligned}
f(x_0 + h,\, y_0 + k) ={}& f(x_0, y_0) + f_x(x_0, y_0)\, h + f_y(x_0, y_0)\, k \\[6pt]
&+ \frac{1}{2} \Bigl( f_{xx}(x_0, y_0)\, h^2 + 2 f_{xy}(x_0, y_0)\, h k + f_{yy}(x_0, y_0)\, k^2 \Bigr) \\[6pt]
&+ o\bigl(h^2 + k^2\bigr)
\end{aligned}
$$
Vale per $f$ di classe $C^2$ in un intorno di $(x_0, y_0)$ e per $(h, k) \to (0, 0)$, con $h = x - x_0$ e $k = y - y_0$. Il termine di secondo grado è $\dfrac{1}{2}\, (h, k)\, H_f(x_0, y_0)\, (h, k)^{T}$.
:::

## Funzioni implicite e teorema di Dini

Le dimostrazioni e gli esempi si trovano nel capitolo [Funzioni implicite](/analisi-2/funzioni-implicite/teoria).

:::formula{#teorema-di-dini titolo="Teorema di Dini in due variabili"}
$$
\begin{cases}
F(x_0, y_0) = 0 \\[4pt]
F_y(x_0, y_0) \neq 0
\end{cases}
\implies
\varphi'(x) = -\,\frac{F_x(x, \varphi(x))}{F_y(x, \varphi(x))}
$$
Vale per $F$ di classe $C^1$ in un aperto che contiene $(x_0, y_0)$. Nelle ipotesi esistono un intorno $I$ di $x_0$, un intorno $J$ di $y_0$ e un'unica funzione $\varphi : I \to J$ di classe $C^1$ con $\varphi(x_0) = y_0$ e $F(x, \varphi(x)) = 0$ per ogni $x \in I$; in particolare $\varphi'(x_0) = -\dfrac{F_x(x_0, y_0)}{F_y(x_0, y_0)}$.
:::

:::formula{#dini-scambio-variabili titolo="Funzione implicita della variabile y"}
$$
\begin{cases}
F(x_0, y_0) = 0 \\[4pt]
F_x(x_0, y_0) \neq 0
\end{cases}
\implies
\psi'(y) = -\,\frac{F_y(\psi(y), y)}{F_x(\psi(y), y)}
$$
In questo caso vicino al punto la curva $F = 0$ è il grafico di $x = \psi(y)$. Nei punti in cui $F_x$ e $F_y$ sono entrambe nulle il teorema non si applica in nessuna delle due forme, e i punti si dicono singolari.
:::

:::formula{#derivata-seconda-implicita titolo="Derivata seconda della funzione implicita"}
$$
\varphi''(x) = -\,\frac{F_{xx} F_y^2 - 2 F_{xy} F_x F_y + F_{yy} F_x^2}{F_y^3}
$$
Vale per $F$ di classe $C^2$ nelle ipotesi del teorema di Dini, con tutte le derivate parziali calcolate in $(x, \varphi(x))$. Lo stesso risultato si ottiene derivando due volte l'identità $F(x, \varphi(x)) = 0$.
:::

:::formula{#punti-stazionari-implicita titolo="Punti stazionari della funzione implicita"}
$$
\varphi'(x_0) = 0 \iff F_x(x_0, y_0) = 0,
\qquad
\varphi''(x_0) = -\,\frac{F_{xx}(x_0, y_0)}{F_y(x_0, y_0)}
$$
Valgono per $F$ di classe $C^2$, $F(x_0, y_0) = 0$ e $F_y(x_0, y_0) \neq 0$; la seconda formula vale nei punti con $F_x(x_0, y_0) = 0$. Se $\varphi''(x_0) < 0$, il punto $x_0$ è di massimo locale per $\varphi$; se $\varphi''(x_0) > 0$, è di minimo locale.
:::

:::formula{#retta-tangente-implicita titolo="Retta tangente a una curva di livello"}
$$
F_x(x_0, y_0)\,(x - x_0) + F_y(x_0, y_0)\,(y - y_0) = 0
$$
Vale per $F$ di classe $C^1$ con $F(x_0, y_0) = 0$ e $\nabla F(x_0, y_0) \neq (0, 0)$. Il gradiente $\nabla F(x_0, y_0)$ è ortogonale alla curva; se $F_y(x_0, y_0) = 0$, la retta è verticale.
:::

:::formula{#teorema-di-dini-tre-variabili titolo="Teorema di Dini in tre variabili"}
$$
\begin{cases}
F(x_0, y_0, z_0) = 0 \\[4pt]
F_z(x_0, y_0, z_0) \neq 0
\end{cases}
\implies
g_x = -\,\frac{F_x}{F_z},
\qquad
g_y = -\,\frac{F_y}{F_z}
$$
Vale per $F$ di classe $C^1$. Vicino a $(x_0, y_0, z_0)$ la superficie $F = 0$ è il grafico di una funzione $z = g(x, y)$ di classe $C^1$ con $g(x_0, y_0) = z_0$, e le derivate di $F$ sono calcolate in $(x, y, g(x, y))$.
:::

:::formula{#piano-tangente-superficie-livello titolo="Piano tangente a una superficie di livello"}
$$
F_x(P_0)\,(x - x_0) + F_y(P_0)\,(y - y_0) + F_z(P_0)\,(z - z_0) = 0
$$
Vale per $F$ di classe $C^1$ con $F(P_0) = 0$ e $\nabla F(P_0) \neq (0, 0, 0)$, dove $P_0 = (x_0, y_0, z_0)$. Il gradiente $\nabla F(P_0)$ è il vettore normale alla superficie.
:::

:::formula{#dini-per-sistemi titolo="Teorema di Dini per i sistemi"}
$$
\frac{\partial(F, G)}{\partial(y, z)}(P_0)
= \det \begin{pmatrix} F_y & F_z \\ G_y & G_z \end{pmatrix}(P_0) \neq 0
$$
$$
\begin{cases}
F_x + F_y\, y'(x) + F_z\, z'(x) = 0 \\[4pt]
G_x + G_y\, y'(x) + G_z\, z'(x) = 0
\end{cases}
$$
Se $F$ e $G$ sono di classe $C^1$, $P_0$ risolve il sistema $F = 0$, $G = 0$ e il determinante jacobiano è non nullo, vicino a $P_0$ il sistema definisce $y = y(x)$ e $z = z(x)$ di classe $C^1$. Le derivate $y'(x_0)$ e $z'(x_0)$ risolvono il sistema lineare nelle incognite $y'$ e $z'$, con le derivate di $F$ e $G$ calcolate in $P_0$.
:::

## Massimi e minimi liberi e vincolati

I metodi e gli esempi completi sono nel capitolo [Massimi e minimi liberi e vincolati](/analisi-2/massimi-e-minimi/teoria).

:::formula{#punti-critici titolo="Punti critici e teorema di Fermat"}
$$
\begin{cases}
f_x(x_0, y_0) = 0 \\[4pt]
f_y(x_0, y_0) = 0
\end{cases}
$$
Se $(x_0, y_0)$ è un punto di estremo locale interno al dominio e $f$ vi ammette derivate parziali, il sistema è soddisfatto. Gli estremi liberi si cercano quindi tra i punti critici e i punti interni in cui $f$ non è derivabile.
:::

:::formula{#criterio-della-hessiana titolo="Classificazione con la matrice Hessiana"}
$$
\begin{aligned}
\det H > 0, \ f_{xx} > 0 &\implies \text{minimo locale} \\[4pt]
\det H > 0, \ f_{xx} < 0 &\implies \text{massimo locale} \\[4pt]
\det H < 0 &\implies \text{punto di sella}
\end{aligned}
$$
Vale per $f$ di classe $C^2$ in un punto critico, con $H = H_f(x_0, y_0)$ e le derivate calcolate nel punto. Se $\det H = 0$, il criterio non decide.
:::

:::formula{#caso-degenere titolo="Hessiana degenere: studio del segno"}
$$
\begin{aligned}
f(x, y) - f(x_0, y_0) \geq 0 \ \text{ vicino a } (x_0, y_0) &\implies \text{minimo locale} \\[4pt]
f(x, y) - f(x_0, y_0) \leq 0 \ \text{ vicino a } (x_0, y_0) &\implies \text{massimo locale}
\end{aligned}
$$
Lo studio diretto si usa quando $\det H = 0$. Se in *ogni* intorno la differenza assume entrambi i segni, il punto è di sella; per dimostrarlo bastano due curve per il punto lungo le quali la differenza ha segni opposti.
:::

:::formula{#weierstrass-metodo-compatto titolo="Teorema di Weierstrass ed estremi assoluti"}
$$
K \ \text{compatto}, \ f \ \text{continua su } K
\implies
f \ \text{ammette massimo e minimo assoluti su } K
$$
Un insieme di $\mathbb{R}^n$ è compatto se è chiuso e limitato. I candidati sono i punti critici interni, i punti interni in cui $f$ non è derivabile e i punti di estremo della restrizione alla frontiera, vertici compresi; il confronto dei valori di $f$ nei candidati dà massimo e minimo.
:::

:::formula{#studio-della-frontiera titolo="Restrizione alla frontiera"}
$$
g(t) = f(x_0 + r\cos t,\; y_0 + r\sin t),
\qquad
t \in [0, 2\pi]
$$
È la restrizione di $f$ alla circonferenza di centro $(x_0, y_0)$ e raggio $r$. Sul segmento $y = c$ con $x \in [a, b]$ la restrizione è $g(x) = f(x, c)$, da studiare su $[a, b]$ con gli estremi dell'intervallo tra i candidati.
:::

:::formula{#moltiplicatori-di-lagrange titolo="Moltiplicatori di Lagrange con un vincolo"}
$$
\begin{cases}
f_x(x, y) = \lambda\, g_x(x, y) \\[4pt]
f_y(x, y) = \lambda\, g_y(x, y) \\[4pt]
g(x, y) = 0
\end{cases}
$$
Vale per $f$ e $g$ di classe $C^1$. Se $(x_0, y_0)$ è un punto di estremo vincolato con $\nabla g(x_0, y_0) \neq (0, 0)$, esiste $\lambda$ tale che $(x_0, y_0, \lambda)$ risolve il sistema. Se il vincolo è compatto, massimo e minimo si ottengono confrontando i valori di $f$ nelle soluzioni e nei punti del vincolo con $\nabla g = (0, 0)$.
:::

:::formula{#moltiplicatori-due-vincoli titolo="Moltiplicatori di Lagrange con due vincoli"}
$$
\begin{cases}
\nabla f(x, y, z) = \lambda\, \nabla g(x, y, z) + \mu\, \nabla h(x, y, z) \\[4pt]
g(x, y, z) = 0 \\[4pt]
h(x, y, z) = 0
\end{cases}
$$
Vale per $f$, $g$, $h$ di classe $C^1$ nei punti in cui $\nabla g$ e $\nabla h$ sono linearmente indipendenti. Il sistema ha cinque equazioni nelle incognite $x$, $y$, $z$, $\lambda$, $\mu$.
:::

:::formula{#quadrato-della-distanza titolo="Distanza da un punto"}
$$
d^2 = (x - x_0)^2 + (y - y_0)^2 + (z - z_0)^2
$$
La radice quadrata è crescente, perciò la distanza e il suo quadrato hanno gli stessi punti di massimo e di minimo. Nei problemi di distanza minima si ottimizza quindi $d^2$, che non contiene la radice.
:::

:::attenzione
I punti del vincolo in cui $\nabla g = (0, 0)$ non compaiono tra le soluzioni del sistema di Lagrange. Con il vincolo $g(x, y) = y^3 - x^2 = 0$ la funzione $f(x, y) = y$ ha minimo vincolato nell'origine, perché sul vincolo $y = x^{\frac{2}{3}} \geq 0$. Nell'origine il sistema richiede $(0, 1) = \lambda\,(0, 0)$, che non ha soluzione; il punto va aggiunto ai candidati.
:::

## Curve, lunghezza e integrali di linea

Le definizioni e le dimostrazioni sono nel capitolo [Curve e integrali di linea](/analisi-2/curve-e-integrali-di-linea/teoria).

:::formula{#curva-regolare titolo="Curva regolare e versore tangente"}
$$
\gamma'(t) = \bigl(x'(t),\, y'(t),\, z'(t)\bigr) \neq \mathbf{0},
\qquad
T(t) = \frac{\gamma'(t)}{\lVert \gamma'(t) \rVert}
$$
La curva $\gamma : [a, b] \to \mathbb{R}^n$ è regolare se è di classe $C^1$ e $\gamma'(t) \neq \mathbf{0}$ per ogni $t \in (a, b)$. È regolare a tratti se è continua e regolare su ciascun intervallo di una suddivisione di $[a, b]$.
:::

:::formula{#retta-tangente-curva titolo="Retta tangente a una curva parametrica"}
$$
r(s) = \gamma(t_0) + s\, \gamma'(t_0),
\qquad
s \in \mathbb{R}
$$
Vale nei punti con $\gamma'(t_0) \neq \mathbf{0}$. Per una curva piana con $x'(t_0) \neq 0$ la pendenza della retta tangente è $\dfrac{y'(t_0)}{x'(t_0)}$.
:::

:::formula{#formula-della-lunghezza titolo="Lunghezza di una curva"}
$$
L(\gamma) = \int_a^b \lVert \gamma'(t) \rVert \, dt = \int_a^b \sqrt{x'(t)^2 + y'(t)^2 + z'(t)^2} \, dt
$$
Vale per $\gamma$ regolare a tratti; per una curva piana manca il termine $z'(t)^2$. Se la curva percorre più volte lo stesso arco, la formula somma le lunghezze dei passaggi; per le curve semplici dà la lunghezza del sostegno.
:::

:::formula{#lunghezza-grafico-polare titolo="Lunghezza di un grafico e di una curva polare"}
$$
L = \int_a^b \sqrt{1 + f'(x)^2} \, dx,
\qquad
L = \int_{\theta_1}^{\theta_2} \sqrt{\rho(\theta)^2 + \rho'(\theta)^2} \, d\theta
$$
La prima formula vale per il grafico di $f$ di classe $C^1$ su $[a, b]$. La seconda vale per la curva $\rho = \rho(\theta)$, cioè $\gamma(\theta) = \bigl(\rho(\theta)\cos\theta,\, \rho(\theta)\sin\theta\bigr)$, con $\rho$ di classe $C^1$.
:::

:::formula{#ascissa-curvilinea titolo="Ascissa curvilinea"}
$$
s(t) = \int_a^t \lVert \gamma'(\tau) \rVert \, d\tau,
\qquad
ds = \lVert \gamma'(t) \rVert \, dt
$$
Per $\gamma$ regolare la funzione $s$ è strettamente crescente da $[a, b]$ su $[0, L(\gamma)]$. La quantità $ds$ è l'elemento di lunghezza degli integrali di linea.
:::

:::formula{#parametrizzazioni-curve titolo="Parametrizzazioni ricorrenti"}
$$
\begin{aligned}
\text{segmento da } P \text{ a } Q \qquad & \gamma(t) = P + t\,(Q - P), \quad t \in [0, 1] \\[4pt]
\text{circonferenza} \qquad & \gamma(t) = (x_0 + r\cos t,\; y_0 + r\sin t), \quad t \in [0, 2\pi] \\[4pt]
\text{ellisse} \qquad & \gamma(t) = (a\cos t,\; b\sin t), \quad t \in [0, 2\pi] \\[4pt]
\text{elica} \qquad & \gamma(t) = (\cos t,\; \sin t,\; t), \quad \lVert \gamma'(t) \rVert = \sqrt{2}
\end{aligned}
$$
La circonferenza e l'ellisse sono percorse in verso antiorario per $t$ crescente; la circonferenza ha $\lVert \gamma'(t) \rVert = r$.
:::

:::formula{#integrale-prima-specie titolo="Integrale di linea di prima specie"}
$$
\int_\gamma f \, ds = \int_a^b f(\gamma(t))\, \lVert \gamma'(t) \rVert \, dt
$$
Vale per $\gamma$ regolare e $f$ continua sul sostegno; per una curva regolare a tratti si sommano i contributi dei tratti. Il valore non dipende dalla parametrizzazione né dal verso di percorrenza, e per $f = 1$ è la lunghezza.
:::

:::formula{#massa-baricentro-filo titolo="Massa e baricentro di un filo"}
$$
m = \int_\gamma \delta \, ds,
\qquad
\bar{x} = \frac{1}{m} \int_\gamma x\, \delta \, ds,
\qquad
\bar{y} = \frac{1}{m} \int_\gamma y\, \delta \, ds
$$
La densità lineare $\delta \geq 0$ è continua sul sostegno; nello spazio si aggiunge $\bar{z}$. Per un filo omogeneo $\bar{x} = \dfrac{1}{L} \displaystyle\int_\gamma x \, ds$; se il filo è omogeneo e il sostegno è simmetrico rispetto a una retta, il baricentro appartiene a quella retta.
:::

:::formula{#integrale-seconda-specie titolo="Integrale di linea di seconda specie"}
$$
\int_\gamma F \cdot d\gamma = \int_a^b F(\gamma(t)) \cdot \gamma'(t) \, dt
= \int_a^b \bigl( F_1(\gamma(t))\, x'(t) + F_2(\gamma(t))\, y'(t) \bigr) \, dt
$$
Vale per $\gamma$ regolare e $F = (F_1, F_2)$ continuo sul sostegno; nello spazio si aggiunge $F_3(\gamma(t))\, z'(t)$. Con le forme differenziali l'integrale si scrive $\displaystyle\int_\gamma F_1 \, dx + F_2 \, dy$; se $F$ è un campo di forze, l'integrale è il lavoro.
:::

:::formula{#orientazione-integrali-linea titolo="Integrali di linea e orientazione"}
$$
\int_{-\gamma} f \, ds = \int_\gamma f \, ds,
\qquad
\int_{-\gamma} F \cdot d\gamma = -\int_\gamma F \cdot d\gamma
$$
La curva opposta è $(-\gamma)(t) = \gamma(a + b - t)$ con $t \in [a, b]$. L'integrale di seconda specie dipende quindi dal verso di percorrenza indicato nella traccia.
:::

## Campi conservativi, potenziale e teorema di Green

Gli enunciati con le dimostrazioni sono nel capitolo [Campi vettoriali e teorema di Green](/analisi-2/campi-vettoriali/teoria).

:::formula{#campo-conservativo titolo="Campo conservativo e potenziale"}
$$
\nabla U = F,
\qquad
U_x = F_1, \quad U_y = F_2, \quad U_z = F_3
$$
Il campo $F$ è continuo su un aperto connesso $A$ e il potenziale $U$ è di classe $C^1$ su $A$; nel piano manca la terza uguaglianza. Due potenziali dello stesso campo su $A$ differiscono per una costante.
:::

:::formula{#lavoro-campo-conservativo titolo="Lavoro di un campo conservativo"}
$$
\int_\gamma F \cdot d\gamma = U(Q) - U(P),
\qquad
\oint_\gamma F \cdot d\gamma = 0 \ \text{ se } \gamma \text{ è chiusa}
$$
Vale per $F = \nabla U$ su $A$ e $\gamma$ regolare a tratti in $A$ da $P$ a $Q$. Quindi, se la circuitazione di $F$ lungo una curva chiusa contenuta in $A$ è diversa da zero, $F$ non è conservativo in $A$.
:::

:::formula{#campo-irrotazionale titolo="Campo irrotazionale"}
$$
\frac{\partial F_1}{\partial y} = \frac{\partial F_2}{\partial x} \ \text{ in } A,
\qquad
\operatorname{rot} F = (0, 0, 0) \ \text{ in } A \subseteq \mathbb{R}^3
$$
Per $F$ di classe $C^1$ la condizione è *necessaria* perché $F$ sia conservativo. Se le derivate incrociate sono diverse, il campo quindi non è conservativo.
:::

:::formula{#criterio-campi-conservativi titolo="Criterio per i campi conservativi"}
$$
\begin{cases}
F \ \text{di classe } C^1 \text{ e irrotazionale in } A \\[4pt]
A \ \text{semplicemente connesso}
\end{cases}
\implies
F \ \text{conservativo in } A
$$
Sono semplicemente connessi $\mathbb{R}^2$, $\mathbb{R}^3$, gli insiemi convessi, i semipiani e $\mathbb{R}^3$ privato di un punto. Non lo sono $\mathbb{R}^2 \setminus \{(0, 0)\}$, le corone circolari e $\mathbb{R}^3$ privato di una retta.
:::

:::formula{#potenziale-integrazione-successiva titolo="Potenziale per integrazione successiva"}
$$
U(x, y) = \int F_1(x, y) \, dx + c(y),
\qquad
c'(y) = F_2(x, y) - \frac{\partial}{\partial y} \int F_1(x, y) \, dx
$$
La primitiva in $x$ si calcola con $y$ fissata. Se il campo è conservativo, il secondo membro dell'equazione per $c'(y)$ dipende solo da $y$; si integra in $y$ e si ottiene $c(y)$ a meno di una costante.
:::

:::formula{#potenziale-spezzata titolo="Potenziale come lavoro lungo una spezzata"}
$$
U(x, y) = \int_{x_0}^{x} F_1(t, y_0) \, dt + \int_{y_0}^{y} F_2(x, t) \, dt
$$
$$
U(x, y, z) = \int_{x_0}^{x} F_1(t, y_0, z_0) \, dt + \int_{y_0}^{y} F_2(x, t, z_0) \, dt + \int_{z_0}^{z} F_3(x, y, t) \, dt
$$
Valgono per $F$ conservativo su un aperto che contiene la spezzata da $(x_0, y_0)$ a $(x, y)$ con lati paralleli agli assi, nello spazio da $(x_0, y_0, z_0)$ a $(x, y, z)$. Spesso il punto iniziale è l'origine.
:::

:::formula{#teorema-di-green titolo="Teorema di Green"}
$$
\oint_{\partial D} F_1 \, dx + F_2 \, dy
= \iint_D \left( \frac{\partial F_2}{\partial x} - \frac{\partial F_1}{\partial y} \right) dx \, dy
$$
Vale per $D$ dominio regolare con bordo $\partial D$ regolare a tratti e orientato positivamente, e per $F = (F_1, F_2)$ di classe $C^1$ su un aperto contenente $D$. Il bordo è orientato positivamente se lascia $D$ alla propria sinistra: in verso antiorario sul bordo esterno, orario sui bordi dei buchi.
:::

:::formula{#area-con-green titolo="Area con la formula di Green"}
$$
\operatorname{area}(D)
= \oint_{\partial D} x \, dy
= -\oint_{\partial D} y \, dx
= \frac{1}{2} \oint_{\partial D} (x \, dy - y \, dx)
$$
Valgono per $D$ dominio regolare con bordo orientato positivamente. Per l'ellisse $r(t) = (a\cos t,\, b\sin t)$, $t \in [0, 2\pi]$, la terza formula dà $\pi a b$.
:::

:::attenzione
Un campo irrotazionale su un aperto non semplicemente connesso può non essere conservativo. Il campo $F(x, y) = \left( \dfrac{-y}{x^2 + y^2},\, \dfrac{x}{x^2 + y^2} \right)$ è irrotazionale su $\mathbb{R}^2 \setminus \{(0, 0)\}$, ma la sua circuitazione lungo la circonferenza unitaria percorsa in verso antiorario vale $2\pi$. Perciò il campo non è conservativo su $\mathbb{R}^2 \setminus \{(0, 0)\}$; sul semipiano $x > 0$ un potenziale è $\arctan \dfrac{y}{x}$.
:::

## Integrali doppi e tripli e formule di riduzione

Le dimostrazioni e gli esempi sono nel capitolo [Integrali doppi e tripli](/analisi-2/integrali-doppi-e-tripli/teoria).

:::formula{#teorema-di-fubini titolo="Teorema di Fubini sui rettangoli"}
$$
\iint_{[a, b] \times [c, d]} f(x, y)\, dx\, dy
= \int_a^b \left( \int_c^d f(x, y)\, dy \right) dx
= \int_c^d \left( \int_a^b f(x, y)\, dx \right) dy
$$
Vale per $f$ continua sul rettangolo. I due ordini di integrazione danno lo stesso valore.
:::

:::formula{#variabili-separate titolo="Funzioni a variabili separate"}
$$
\iint_{[a, b] \times [c, d]} g(x)\, h(y)\, dx\, dy
= \left( \int_a^b g(x)\, dx \right) \left( \int_c^d h(y)\, dy \right)
$$
Vale per $g$ continua su $[a, b]$ e $h$ continua su $[c, d]$, *solo* su domini rettangolari. Lo stesso vale per tre fattori su un parallelepipedo.
:::

:::formula{#riduzione-domini-normali titolo="Formule di riduzione sui domini normali"}
$$
D = \left\{ (x, y) :
\begin{cases}
a \leq x \leq b \\
g_1(x) \leq y \leq g_2(x)
\end{cases}
\right\}
\implies
\iint_D f\, dx\, dy = \int_a^b \left( \int_{g_1(x)}^{g_2(x)} f(x, y)\, dy \right) dx
$$
$$
D = \left\{ (x, y) :
\begin{cases}
c \leq y \leq d \\
h_1(y) \leq x \leq h_2(y)
\end{cases}
\right\}
\implies
\iint_D f\, dx\, dy = \int_c^d \left( \int_{h_1(y)}^{h_2(y)} f(x, y)\, dx \right) dy
$$
Valgono per $f$ continua su $D$ e funzioni $g_1 \leq g_2$, $h_1 \leq h_2$ continue. La variabile esterna percorre un intervallo fisso.
:::

:::formula{#scambio-ordine titolo="Scambio dell'ordine di integrazione"}
$$
\int_0^1 \left( \int_x^1 f(x, y)\, dy \right) dx
= \int_0^1 \left( \int_0^y f(x, y)\, dx \right) dy
$$
Le due scritture descrivono lo stesso triangolo di vertici $(0, 0)$, $(0, 1)$, $(1, 1)$, normale rispetto a entrambi gli assi. Nel caso generale si disegna il dominio e lo si descrive rispetto all'altro asse.
:::

:::formula{#proprieta-integrale titolo="Linearità, additività e monotonia"}
$$
\iint_{D_1 \cup D_2} f = \iint_{D_1} f + \iint_{D_2} f,
\qquad
\left| \iint_D f \right| \leq \iint_D |f|
$$
L'additività vale se $D_1$ e $D_2$ non hanno punti interni comuni. L'integrale è lineare, e se $f \leq g$ su $D$ allora $\displaystyle\iint_D f \leq \iint_D g$.
:::

:::formula{#simmetrie titolo="Simmetrie del dominio"}
$$
f(-x, y) = -f(x, y) \implies \iint_D f \, dx\, dy = 0,
\qquad
f(-x, y) = f(x, y) \implies \iint_D f \, dx\, dy = 2 \iint_{D^+} f \, dx\, dy
$$
Valgono per $f$ continua su $D$ simmetrico rispetto all'asse $y$, con $D^+$ la parte di $D$ in cui $x \geq 0$. Scambiando $x$ e $y$ si ottengono le formule per i domini simmetrici rispetto all'asse $x$; negli integrali tripli valgono le analoghe rispetto ai piani coordinati.
:::

:::formula{#integrazione-per-fili titolo="Integrazione per fili"}
$$
\iiint_E f\, dx\, dy\, dz
= \iint_D \left( \int_{\alpha(x, y)}^{\beta(x, y)} f(x, y, z)\, dz \right) dx\, dy
$$
Vale per $E = \{ (x, y, z) : (x, y) \in D, \ \alpha(x, y) \leq z \leq \beta(x, y) \}$, con $\alpha \leq \beta$ continue su $D$ e $f$ continua su $E$. Si usa per i solidi compresi tra due grafici.
:::

:::formula{#integrazione-per-strati titolo="Integrazione per strati"}
$$
\iiint_E f\, dx\, dy\, dz = \int_a^b \left( \iint_{E_z} f(x, y, z)\, dx\, dy \right) dz,
\qquad
\iiint_E g(z)\, dx\, dy\, dz = \int_a^b g(z)\, \operatorname{Area}(E_z)\, dz
$$
Valgono per $E$ compreso tra i piani $z = a$ e $z = b$, con $E_z$ la sezione alla quota $z$ e le funzioni integrande continue. La seconda formula si usa quando la funzione dipende solo da $z$.
:::

## Cambiamenti di variabile e jacobiano

Le formule sono spiegate, con le dimostrazioni e gli esempi, nel capitolo [Integrali doppi e tripli](/analisi-2/integrali-doppi-e-tripli/teoria).

:::formula{#cambiamento-di-variabili titolo="Cambiamento di variabili"}
$$
\iint_D f(x, y)\, dx\, dy
= \iint_{D'} f\bigl( x(u, v),\, y(u, v) \bigr)\, |J(u, v)|\, du\, dv,
\qquad
J = \det
\begin{pmatrix}
\dfrac{\partial x}{\partial u} & \dfrac{\partial x}{\partial v} \\[10pt]
\dfrac{\partial y}{\partial u} & \dfrac{\partial y}{\partial v}
\end{pmatrix}
$$
Vale per $\Phi(u, v) = \bigl(x(u, v), y(u, v)\bigr)$ di classe $C^1$, iniettiva all'interno di $D'$, con $J \neq 0$ all'interno di $D'$, $D = \Phi(D')$ e $f$ continua su $D$. Negli integrali tripli $J$ è il determinante della matrice $3 \times 3$ delle derivate parziali.
:::

:::formula{#jacobiano-inverso titolo="Jacobiano della trasformazione inversa"}
$$
\det \frac{\partial(x, y)}{\partial(u, v)} = \frac{1}{\det \dfrac{\partial(u, v)}{\partial(x, y)}}
$$
Vale quando le nuove variabili sono assegnate come $u = u(x, y)$, $v = v(x, y)$ e il determinante a denominatore è non nullo. Per $u = xy$ e $v = \dfrac{y}{x}$ nel primo quadrante si ottiene $dx\, dy = \dfrac{du\, dv}{2v}$.
:::

:::formula{#trasformazioni-lineari titolo="Trasformazioni lineari"}
$$
u = a_1 x + b_1 y,
\quad
v = a_2 x + b_2 y
\implies
dx\, dy = \frac{du\, dv}{|a_1 b_2 - a_2 b_1|}
$$
Vale per $a_1 b_2 - a_2 b_1 \neq 0$. Un parallelogramma con i lati sulle rette lungo le quali $u$ o $v$ è costante diventa un rettangolo del piano $uv$.
:::

:::formula{#coordinate-polari titolo="Coordinate polari"}
$$
x = \rho \cos\theta,
\qquad
y = \rho \sin\theta,
\qquad
dx\, dy = \rho \, d\rho\, d\theta
$$
Valgono per $\rho \geq 0$ e $\theta \in [0, 2\pi)$, con $x^2 + y^2 = \rho^2$. Il cerchio di centro l'origine e raggio $R$ diventa $0 \leq \rho \leq R$, $0 \leq \theta \leq 2\pi$; la corona di raggi $R_1 < R_2$ diventa $R_1 \leq \rho \leq R_2$. Centrate in $(x_0, y_0)$ si scrivono $x = x_0 + \rho\cos\theta$, $y = y_0 + \rho\sin\theta$, con lo stesso jacobiano.
:::

:::formula{#coordinate-ellittiche titolo="Coordinate ellittiche"}
$$
x = a \rho \cos\theta,
\qquad
y = b \rho \sin\theta,
\qquad
dx\, dy = a b \rho \, d\rho\, d\theta
$$
Valgono per $a, b > 0$, $\rho \geq 0$ e $\theta \in [0, 2\pi)$. L'ellisse $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} \leq 1$ diventa $0 \leq \rho \leq 1$, $0 \leq \theta \leq 2\pi$, e la sua area è $\pi a b$.
:::

:::formula{#coordinate-cilindriche titolo="Coordinate cilindriche"}
$$
x = \rho \cos\theta,
\qquad
y = \rho \sin\theta,
\qquad
z = z,
\qquad
dx\, dy\, dz = \rho \, d\rho\, d\theta\, dz
$$
Valgono per $\rho \geq 0$ e $\theta \in [0, 2\pi)$. Si usano per i solidi con asse di simmetria $z$: il cilindro $x^2 + y^2 \leq R^2$, $0 \leq z \leq h$ diventa un parallelepipedo e il cono $z = \sqrt{x^2 + y^2}$ ha equazione $z = \rho$.
:::

:::formula{#coordinate-sferiche titolo="Coordinate sferiche"}
$$
x = r \sin\varphi \cos\theta,
\quad
y = r \sin\varphi \sin\theta,
\quad
z = r \cos\varphi,
\qquad
dx\, dy\, dz = r^2 \sin\varphi \, dr\, d\varphi\, d\theta
$$
Valgono per $r \geq 0$, $\varphi \in [0, \pi]$ colatitudine misurata dal semiasse $z$ positivo e $\theta \in [0, 2\pi)$, con $x^2 + y^2 + z^2 = r^2$. La palla di raggio $R$ diventa $0 \leq r \leq R$, $0 \leq \varphi \leq \pi$, $0 \leq \theta \leq 2\pi$; la semipalla con $z \geq 0$ ha $0 \leq \varphi \leq \dfrac{\pi}{2}$.
:::

:::attenzione
L'elemento d'area in coordinate polari contiene il fattore $\rho$ del jacobiano. Per il cerchio di raggio $R$ si ha $\displaystyle\int_0^{2\pi} \int_0^R \rho \, d\rho \, d\theta = \pi R^2$; senza il fattore $\rho$ si otterrebbe $2\pi R$, che è la lunghezza della circonferenza.
:::

## Aree, volumi, masse e baricentri

Le definizioni ed esempi di calcolo sono nel capitolo [Integrali doppi e tripli](/analisi-2/integrali-doppi-e-tripli/teoria).

:::formula{#area-e-volume titolo="Area e volume come integrali"}
$$
\operatorname{Area}(D) = \iint_D dx\, dy,
\qquad
\operatorname{Vol}(E) = \iiint_E dx\, dy\, dz,
\qquad
\operatorname{Vol} = \iint_D \bigl( f(x, y) - g(x, y) \bigr)\, dx\, dy
$$
La terza formula dà il volume del solido compreso tra i grafici di $g$ e $f$ su $D$, con $g \leq f$ continue. Per $g = 0$ e $f \geq 0$ è il volume sotto il grafico di $f$.
:::

:::formula{#massa-baricentro-lamina titolo="Massa e baricentro di una lamina"}
$$
m = \iint_D \delta \, dx\, dy,
\qquad
\bar{x} = \frac{1}{m} \iint_D x\, \delta \, dx\, dy,
\qquad
\bar{y} = \frac{1}{m} \iint_D y\, \delta \, dx\, dy
$$
La densità superficiale $\delta(x, y) \geq 0$ è continua su $D$. Se la lamina è omogenea, $\delta$ si semplifica e $\bar{x} = \dfrac{1}{\operatorname{Area}(D)} \displaystyle\iint_D x\, dx\, dy$; se la lamina è omogenea e $D$ è simmetrico rispetto a una retta, il baricentro appartiene a quella retta.
:::

:::formula{#massa-baricentro-solido titolo="Massa e baricentro di un solido"}
$$
m = \iiint_E \delta \, dx\, dy\, dz,
\qquad
\bar{z} = \frac{1}{m} \iiint_E z\, \delta \, dx\, dy\, dz
$$
La densità $\delta(x, y, z) \geq 0$ è continua su $E$; le coordinate $\bar{x}$ e $\bar{y}$ si scrivono allo stesso modo con $x$ e $y$ al posto di $z$.
:::

:::formula{#volumi-notevoli titolo="Volumi notevoli"}
| Solido | Volume |
| --- | --- |
| palla di raggio $R$ | $\dfrac{4}{3} \pi R^3$ |
| cilindro di raggio $R$ e altezza $h$ | $\pi R^2 h$ |
| cono di raggio $R$ e altezza $h$ | $\dfrac{1}{3} \pi R^2 h$ |
| ellissoide di semiassi $a$, $b$, $c$ | $\dfrac{4}{3} \pi a b c$ |
| $x^2 + y^2 \leq z \leq h$ | $\dfrac{1}{2} \pi h^2$ |

I valori si ottengono con le coordinate sferiche e cilindriche, con l'integrazione per strati e, per l'ellissoide, con la trasformazione $x = a u$, $y = b v$, $z = c w$, di jacobiano $abc$.
:::

## Superfici parametriche e integrali di superficie

Le dimostrazioni sono nel capitolo [Superfici, flussi e teoremi di Gauss e Stokes](/analisi-2/superfici-e-flussi/teoria).

:::formula{#vettore-normale titolo="Vettore normale e superficie regolare"}
$$
\mathbf{N}(u, v) = \mathbf{r}_u(u, v) \wedge \mathbf{r}_v(u, v),
\qquad
\mathbf{n} = \frac{\mathbf{N}}{\lVert \mathbf{N} \rVert}
$$
Valgono per $\mathbf{r} : D \to \mathbb{R}^3$ di classe $C^1$. La superficie è regolare se $\mathbf{r}$ è iniettiva nei punti interni di $D$ e $\mathbf{N} \neq \mathbf{0}$ nei punti interni di $D$.
:::

:::formula{#prodotto-vettoriale titolo="Prodotto vettoriale"}
$$
\mathbf{r}_u \wedge \mathbf{r}_v =
\begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\[4pt]
x_u & y_u & z_u \\[4pt]
x_v & y_v & z_v
\end{vmatrix}
= \bigl( y_u z_v - z_u y_v,\;\; z_u x_v - x_u z_v,\;\; x_u y_v - y_u x_v \bigr)
$$
Il vettore ottenuto è ortogonale a $\mathbf{r}_u$ e a $\mathbf{r}_v$, e la sua norma è l'area del parallelogramma che hanno per lati.
:::

:::formula{#piano-tangente-superficie titolo="Piano tangente a una superficie parametrica"}
$$
N_1\, (x - x_0) + N_2\, (y - y_0) + N_3\, (z - z_0) = 0
$$
Vale nel punto $P_0 = \mathbf{r}(u_0, v_0) = (x_0, y_0, z_0)$, con $(u_0, v_0)$ interno a $D$ e $\mathbf{N}(u_0, v_0) = (N_1, N_2, N_3) \neq \mathbf{0}$.
:::

:::formula{#superficie-cartesiana titolo="Superficie cartesiana"}
$$
\mathbf{r}(x, y) = \bigl( x,\, y,\, f(x, y) \bigr),
\qquad
\mathbf{N} = \bigl( -f_x,\, -f_y,\, 1 \bigr),
\qquad
\lVert \mathbf{N} \rVert = \sqrt{1 + f_x^2 + f_y^2}
$$
Vale per $f$ di classe $C^1$ su $D$. La superficie è sempre regolare e $\mathbf{N}$ punta verso l'alto.
:::

:::formula{#sfera-e-cilindro titolo="Parametrizzazioni di sfera e cilindro"}
$$
\begin{aligned}
\mathbf{r}(\varphi, \theta) &= \bigl( R \sin\varphi \cos\theta,\; R \sin\varphi \sin\theta,\; R \cos\varphi \bigr),
\qquad \lVert \mathbf{N} \rVert = R^2 \sin\varphi \\[6pt]
\mathbf{r}(\theta, t) &= \bigl( R \cos\theta,\; R \sin\theta,\; t \bigr),
\qquad \mathbf{N} = (R\cos\theta,\; R\sin\theta,\; 0)
\end{aligned}
$$
Per la sfera di raggio $R$ si ha $(\varphi, \theta) \in [0, \pi] \times [0, 2\pi]$ e $\mathbf{N} = \mathbf{r}_\varphi \wedge \mathbf{r}_\theta = R \sin\varphi \; \mathbf{r}(\varphi, \theta)$, che punta verso l'esterno. Per il cilindro $x^2 + y^2 = R^2$ si ha $(\theta, t) \in [0, 2\pi] \times [0, h]$ e $\mathbf{N} = \mathbf{r}_\theta \wedge \mathbf{r}_t$ punta verso l'esterno.
:::

:::formula{#area-di-una-superficie titolo="Area di una superficie"}
$$
\operatorname{Area}(\Sigma) = \iint_D \lVert \mathbf{r}_u \wedge \mathbf{r}_v \rVert \, du \, dv,
\qquad
d\sigma = \lVert \mathbf{r}_u \wedge \mathbf{r}_v \rVert \, du \, dv
$$
Vale per $\Sigma = \mathbf{r}(D)$ regolare; il valore non dipende dalla parametrizzazione. La quantità $d\sigma$ è l'elemento d'area.
:::

:::formula{#area-superficie-cartesiana titolo="Area di una superficie cartesiana"}
$$
\operatorname{Area}(\Sigma) = \iint_D \sqrt{1 + f_x^2 + f_y^2} \; dx \, dy
$$
Vale per il grafico di $f$ di classe $C^1$ su $D$. Per il paraboloide $z = x^2 + y^2$ sopra il disco unitario si ottiene $\dfrac{\pi}{6} \bigl( 5\sqrt{5} - 1 \bigr)$.
:::

:::formula{#area-superficie-di-rotazione titolo="Area di una superficie di rotazione"}
$$
\operatorname{Area}(\Sigma) = 2\pi \int_a^b g(t) \, \sqrt{g'(t)^2 + h'(t)^2} \; dt
$$
$\Sigma$ si ottiene ruotando di un giro attorno all'asse $z$ la curva regolare $x = g(t)$, $z = h(t)$, $t \in [a, b]$, del semipiano $y = 0$, con $g \geq 0$ e $g$, $h$ di classe $C^1$.
:::

:::formula{#aree-notevoli titolo="Aree notevoli"}
| Superficie | Area |
| --- | --- |
| sfera di raggio $R$ | $4 \pi R^2$ |
| calotta sferica di altezza $h$ | $2 \pi R h$ |
| superficie laterale del cilindro | $2 \pi R h$ |
| superficie laterale del cono | $\pi R \sqrt{R^2 + h^2}$ |

$R$ è il raggio della sfera, del cilindro e della base del cono, $h$ l'altezza della calotta, del cilindro e del cono.
:::

:::formula{#integrale-di-superficie titolo="Integrale di superficie"}
$$
\iint_\Sigma f \, d\sigma = \iint_D f\bigl( \mathbf{r}(u, v) \bigr) \, \lVert \mathbf{r}_u \wedge \mathbf{r}_v \rVert \, du \, dv
$$
Vale per $\Sigma = \mathbf{r}(D)$ regolare e $f$ continua su $\Sigma$. Per $f = 1$ si ottiene l'area; se $f$ è una densità superficiale, l'integrale è la massa della superficie.
:::

## Flusso, divergenza e rotore, teoremi di Gauss e Stokes

Gli enunciati e le dimostrazioni dei teoremi sono nel capitolo [Superfici, flussi e teoremi di Gauss e Stokes](/analisi-2/superfici-e-flussi/teoria).

:::formula{#flusso titolo="Flusso di un campo vettoriale"}
$$
\Phi_\Sigma(\mathbf{F}) = \iint_\Sigma \mathbf{F} \cdot \mathbf{n} \; d\sigma
= \iint_D \mathbf{F}\bigl( \mathbf{r}(u, v) \bigr) \cdot \bigl( \mathbf{r}_u \wedge \mathbf{r}_v \bigr) \, du \, dv
$$
Vale per $\Sigma$ regolare orientata da $\mathbf{n}$ e $\mathbf{F}$ continuo su un aperto contenente $\Sigma$. La seconda uguaglianza vale se $\mathbf{r}_u \wedge \mathbf{r}_v$ ha il verso di $\mathbf{n}$; con il verso opposto il flusso cambia segno.
:::

:::formula{#flusso-superficie-cartesiana titolo="Flusso attraverso una superficie cartesiana"}
$$
\Phi_\Sigma(\mathbf{F}) = \iint_D \bigl( -F_1\, f_x - F_2\, f_y + F_3 \bigr) \, dx \, dy
$$
Vale per il grafico di $f$ di classe $C^1$ su $D$ orientato verso l'alto, con le componenti di $\mathbf{F}$ calcolate in $(x, y, f(x, y))$. Con l'orientazione verso il basso il flusso cambia segno.
:::

:::formula{#divergenza titolo="Divergenza"}
$$
\operatorname{div} \mathbf{F} = \frac{\partial F_1}{\partial x} + \frac{\partial F_2}{\partial y} + \frac{\partial F_3}{\partial z}
$$
È definita per $\mathbf{F}$ di classe $C^1$. Il campo è solenoidale se $\operatorname{div} \mathbf{F} = 0$; per $\mathbf{F} = (x, y, z)$ si ha $\operatorname{div} \mathbf{F} = 3$.
:::

:::formula{#rotore titolo="Rotore"}
$$
\operatorname{rot} \mathbf{F} =
\begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\[4pt]
\dfrac{\partial}{\partial x} & \dfrac{\partial}{\partial y} & \dfrac{\partial}{\partial z} \\[6pt]
F_1 & F_2 & F_3
\end{vmatrix}
=
\left( \frac{\partial F_3}{\partial y} - \frac{\partial F_2}{\partial z},\;
\frac{\partial F_1}{\partial z} - \frac{\partial F_3}{\partial x},\;
\frac{\partial F_2}{\partial x} - \frac{\partial F_1}{\partial y} \right)
$$
È definito per $\mathbf{F}$ di classe $C^1$. Per un campo piano $(F_1, F_2, 0)$ con componenti indipendenti da $z$ resta solo la terza componente.
:::

:::formula{#proprieta-divergenza-rotore titolo="Identità di divergenza e rotore"}
$$
\operatorname{rot} (\nabla f) = \mathbf{0},
\qquad
\operatorname{div} (\operatorname{rot} \mathbf{F}) = 0
$$
Valgono per $f$ e $\mathbf{F}$ di classe $C^2$ su un aperto di $\mathbb{R}^3$. Ogni campo gradiente è quindi irrotazionale, e ogni rotore è solenoidale.
:::

:::formula{#teorema-della-divergenza titolo="Teorema della divergenza (Gauss)"}
$$
\iint_{\partial V} \mathbf{F} \cdot \mathbf{n} \; d\sigma
= \iiint_V \operatorname{div} \mathbf{F} \; dx \, dy \, dz
$$
Vale per $V$ dominio regolare dello spazio con frontiera orientata dal versore normale **esterno** e $\mathbf{F}$ di classe $C^1$ su un aperto contenente $V$. Per $\mathbf{F} = (x, y, z)$ il flusso uscente è $3 \operatorname{Vol}(V)$.
:::

:::formula{#chiusura-superficie titolo="Flusso attraverso una superficie aperta"}
$$
\Phi_\Sigma(\mathbf{F}) = \iiint_V \operatorname{div} \mathbf{F} \; dx \, dy \, dz - \Phi_{\Sigma'}(\mathbf{F})
$$
Vale quando la superficie ausiliaria $\Sigma'$ chiude $\Sigma$, cioè $\Sigma \cup \Sigma'$ è la frontiera del dominio regolare $V$, con entrambe le superfici orientate dalla normale esterna a $V$. Di solito $\Sigma'$ è un disco piano.
:::

:::formula{#teorema-di-stokes titolo="Teorema di Stokes"}
$$
\oint_{\partial\Sigma} \mathbf{F} \cdot d\mathbf{r}
= \iint_\Sigma \operatorname{rot} \mathbf{F} \cdot \mathbf{n} \; d\sigma
$$
Vale per $\Sigma$ regolare orientata, con bordo $\partial\Sigma$ chiuso, regolare a tratti e orientato in modo coerente, e per $\mathbf{F}$ di classe $C^1$ su un aperto contenente $\Sigma$. L'orientazione è coerente se un osservatore disposto come $\mathbf{n}$ che percorre il bordo ha la superficie alla sua sinistra; per un grafico orientato verso l'alto il bordo è percorso in verso antiorario visto dall'alto.
:::

## Successioni e serie di funzioni

Le dimostrazioni e i controesempi sono nel capitolo [Successioni e serie di funzioni](/analisi-2/successioni-e-serie-di-funzioni/teoria).

:::formula{#convergenza-puntuale titolo="Convergenza puntuale"}
$$
\lim_{n \to +\infty} f_n(x) = f(x) \qquad \text{per ogni } x \in A
$$
Il limite si calcola per $x$ fissato, con i metodi dei limiti di successioni, distinguendo i casi quando l'espressione lo richiede. La funzione $f$ è il candidato limite per la convergenza uniforme.
:::

:::formula{#criterio-del-sup titolo="Convergenza uniforme e criterio del sup"}
$$
f_n \to f \ \text{uniformemente su } A
\iff
M_n = \sup_{x \in A} |f_n(x) - f(x)| \xrightarrow[n \to +\infty]{} 0
$$
Il valore $M_n$ si trova di solito con lo studio della derivata di $f_n - f$ su $A$. La convergenza uniforme implica la convergenza puntuale, e la risposta dipende dall'insieme $A$.
:::

:::formula{#continuita-limite-uniforme titolo="Continuità del limite uniforme"}
$$
f_n \ \text{continue su } A, \ f_n \to f \ \text{uniformemente su } A
\implies
f \ \text{continua su } A
$$
Perciò, se il limite puntuale di funzioni continue è discontinuo, la convergenza non è uniforme.
:::

:::formula{#scambio-limite-integrale titolo="Passaggio al limite sotto il segno di integrale"}
$$
\lim_{n \to +\infty} \int_a^b f_n(x)\,dx = \int_a^b f(x)\,dx,
\qquad
\left| \int_a^b f_n - \int_a^b f \right| \leq (b - a)\, M_n
$$
Vale per $f_n$ continue su $[a, b]$ con $f_n \to f$ uniformemente su $[a, b]$.
:::

:::formula{#derivazione-per-successioni titolo="Derivazione per successioni"}
$$
\begin{cases}
f_n(x_0) \ \text{converge per almeno un } x_0 \in [a, b] \\[4pt]
f_n' \to g \ \text{uniformemente su } [a, b]
\end{cases}
\implies
\left( \lim_{n \to +\infty} f_n \right)' = \lim_{n \to +\infty} f_n'
$$
Vale per $f_n \in C^1([a, b])$. Nelle ipotesi $f_n$ converge uniformemente su $[a, b]$ a una funzione $f$ di classe $C^1$ con $f' = g$.
:::

:::formula{#convergenza-uniforme-serie titolo="Serie di funzioni: somme parziali e resto"}
$$
s_N(x) = \sum_{n=1}^{N} f_n(x),
\qquad
\sup_{x \in A} \left| \sum_{n = N+1}^{\infty} f_n(x) \right| \xrightarrow[N \to +\infty]{} 0
$$
La serie converge puntualmente in $x$ se la serie numerica $\sum f_n(x)$ converge. La condizione sul resto equivale alla convergenza uniforme su $A$.
:::

:::formula{#criterio-di-weierstrass titolo="Convergenza totale (criterio di Weierstrass)"}
$$
\begin{cases}
|f_n(x)| \leq M_n \ \text{ per ogni } x \in A \\[4pt]
\displaystyle\sum_{n=1}^{\infty} M_n \ \text{ converge}
\end{cases}
\implies
\sum_{n=1}^{\infty} f_n \ \text{converge totalmente, quindi uniformemente, su } A
$$
La scelta più precisa è $M_n = \sup_A |f_n|$. Vale la catena totale $\implies$ uniforme $\implies$ puntuale, e la convergenza totale implica anche la convergenza assoluta in ogni punto di $A$.
:::

:::formula{#serie-di-confronto titolo="Serie numeriche di confronto"}
$$
\sum_{n=1}^{\infty} \frac{1}{n^p} \ \text{converge} \iff p > 1,
\qquad
\sum_{n=0}^{\infty} q^n = \frac{1}{1 - q} \ \text{ per } |q| < 1
$$
Sono le serie usate più spesso per la successione $M_n$ della convergenza totale.
:::

:::formula{#resto-di-leibniz titolo="Resto di una serie a segni alterni"}
$$
\left| \sum_{n=1}^{\infty} (-1)^n a_n - \sum_{n=1}^{N} (-1)^n a_n \right| \leq a_{N+1}
$$
Vale per $(a_n)$ decrescente con $a_n \to 0$. Se $a_n = a_n(x)$ e $\sup_A a_{N+1}(x) \to 0$, la serie converge uniformemente su $A$ anche quando la convergenza non è totale.
:::

:::formula{#teoremi-termine-a-termine titolo="Continuità, integrazione e derivazione termine a termine"}
$$
\int_a^b \sum_{n=1}^{\infty} f_n(x)\,dx = \sum_{n=1}^{\infty} \int_a^b f_n(x)\,dx,
\qquad
\left( \sum_{n=1}^{\infty} f_n \right)' = \sum_{n=1}^{\infty} f_n'
$$
Se le $f_n$ sono continue e la serie converge uniformemente su $[a, b]$, la somma è continua e vale la prima uguaglianza. La seconda vale per $f_n \in C^1([a, b])$ se $\sum f_n(x_0)$ converge in almeno un punto e $\sum f_n'$ converge uniformemente su $[a, b]$, di solito totalmente.
:::

:::attenzione
La convergenza puntuale non conserva la continuità. Le funzioni $f_n(x) = x^n$ sono continue su $[0, 1]$ e convergono puntualmente alla funzione che vale $0$ su $[0, 1)$ e $1$ in $x = 1$, che è discontinua. Su $[0, 1)$ si ha $\sup x^n = 1$ per ogni $n$, quindi la convergenza non è uniforme; su $[0, a]$ con $0 < a < 1$ si ha $M_n = a^n \to 0$ e la convergenza è uniforme.
:::

## Serie di potenze e raggio di convergenza

Le dimostrazioni dei teoremi sul raggio sono nel capitolo [Serie di potenze e serie di Taylor](/analisi-2/serie-di-potenze/teoria).

:::formula{#teorema-del-raggio titolo="Raggio e insieme di convergenza"}
$$
\begin{aligned}
|x - x_0| < R &\implies \sum_{n=0}^{\infty} a_n (x - x_0)^n \ \text{converge assolutamente} \\[4pt]
|x - x_0| > R &\implies \sum_{n=0}^{\infty} a_n (x - x_0)^n \ \text{non converge}
\end{aligned}
$$
$$
(x_0 - R,\; x_0 + R) \subseteq E \subseteq [x_0 - R,\; x_0 + R]
$$
Il raggio $R \in [0, +\infty]$ esiste per ogni serie di potenze; le inclusioni per l'insieme di convergenza $E$ valgono per $0 < R < +\infty$. Nei punti $x_0 \pm R$ il teorema non dà informazioni e le due serie numeriche si studiano a parte.
:::

:::formula{#calcolo-raggio-rapporto titolo="Raggio con il criterio del rapporto"}
$$
\lim_{n \to \infty} \frac{|a_{n+1}|}{|a_n|} = \ell
\implies
R = \frac{1}{\ell}
$$
Vale per $a_n \neq 0$ definitivamente e $\ell \in [0, +\infty]$, con $R = +\infty$ se $\ell = 0$ e $R = 0$ se $\ell = +\infty$. Per $\displaystyle\sum \frac{x^n}{n!}$ si ha $\ell = 0$, quindi $R = +\infty$.
:::

:::formula{#calcolo-raggio-radice titolo="Raggio con il criterio della radice"}
$$
\lim_{n \to \infty} \sqrt[n]{|a_n|} = \ell
\implies
R = \frac{1}{\ell}
$$
Vale con le stesse convenzioni del criterio del rapporto. Si usa quando $a_n$ è una potenza $n$-esima: per $a_n = \left( \dfrac{n}{2n + 1} \right)^{n}$ si ha $\ell = \dfrac{1}{2}$, quindi $R = 2$.
:::

:::formula{#serie-lacunari titolo="Serie lacunari"}
$$
\sum_{n=0}^{\infty} a_n x^{kn} = \sum_{n=0}^{\infty} a_n t^n,
\qquad
t = x^k,
\qquad
R = \sqrt[k]{R_t}
$$
$R$ è il raggio della serie in $x$, $R_t$ quello della serie in $t$ e $k \geq 2$ è intero. Le formule del rapporto e della radice sui coefficienti non si applicano alla serie in $x$, che ha infiniti coefficienti nulli. Per $\displaystyle\sum \frac{x^{2n}}{4^n}$ si ha $R_t = 4$, quindi $R = 2$.
:::

:::formula{#comportamento-agli-estremi titolo="Comportamento agli estremi"}
$$
\begin{aligned}
\sum_{n=1}^{\infty} x^n: &\quad E = (-1, 1) \\[4pt]
\sum_{n=1}^{\infty} \frac{x^n}{n}: &\quad E = [-1, 1) \\[4pt]
\sum_{n=1}^{\infty} \frac{x^n}{n^2}: &\quad E = [-1, 1]
\end{aligned}
$$
Le tre serie hanno raggio $1$. In $x = x_0 \pm R$ si studia la serie numerica con il confronto, il confronto asintotico e il criterio di Leibniz.
:::

:::formula{#proprieta-della-somma titolo="Proprietà della somma"}
$$
f(x) = \sum_{n=0}^{\infty} a_n (x - x_0)^n \ \text{ è continua su } (x_0 - R,\; x_0 + R)
$$
Vale per $R > 0$, perché per *ogni* $0 < r < R$ la serie converge totalmente su $[x_0 - r, x_0 + r]$. Se $R < +\infty$ e la serie converge in $x_0 + R$, per il teorema di Abel $\displaystyle\lim_{x \to (x_0 + R)^-} f(x) = \sum_{n=0}^{\infty} a_n R^n$; lo stesso vale in $x_0 - R$.
:::

:::formula{#derivazione-integrazione-potenze titolo="Derivazione e integrazione termine a termine"}
$$
f'(x) = \sum_{n=1}^{\infty} n\, a_n (x - x_0)^{n-1},
\qquad
\int_{x_0}^{x} f(t)\, dt = \sum_{n=0}^{\infty} \frac{a_n}{n + 1} (x - x_0)^{n+1}
$$
Valgono per ogni $x \in (x_0 - R,\, x_0 + R)$ con $R > 0$. Le due serie hanno lo stesso raggio $R$ della serie di partenza, e $f$ è di classe $C^\infty$ sull'intervallo aperto.
:::

## Sviluppi in serie di Taylor

Le serie di Taylor e la loro validità sono trattate nel capitolo [Serie di potenze e serie di Taylor](/analisi-2/serie-di-potenze/teoria).

:::formula{#serie-di-taylor titolo="Serie di Taylor e unicità dello sviluppo"}
$$
\sum_{n=0}^{\infty} \frac{f^{(n)}(x_0)}{n!} (x - x_0)^n,
\qquad
f(x) = \sum_{n=0}^{\infty} a_n (x - x_0)^n \implies a_n = \frac{f^{(n)}(x_0)}{n!}
$$
La serie è definita per $f$ di classe $C^\infty$ vicino a $x_0$; per $x_0 = 0$ si chiama serie di MacLaurin. L'implicazione vale se lo sviluppo è valido in un intervallo $(x_0 - \delta, x_0 + \delta)$ con $\delta > 0$; quindi ogni sviluppo ottenuto da sviluppi noti è la serie di Taylor della funzione.
:::

:::formula{#criterio-di-sviluppabilita titolo="Criterio di sviluppabilità"}
$$
|f^{(n)}(x)| \leq M L^n \ \text{ per ogni } n \text{ e ogni } x \in I
\implies
f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(x_0)}{n!} (x - x_0)^n \ \text{ su } I
$$
Vale per $f$ di classe $C^\infty$ sull'intervallo $I$ centrato in $x_0$ e costanti $M, L > 0$. Lo sviluppo vale *se e solo se* il resto $f(x) - T_n(x)$ tende a $0$ per $n \to \infty$.
:::

:::formula{#sviluppi-esponenziale-seno-coseno titolo="Esponenziale, seno e coseno"}
$$
\begin{aligned}
e^x &= \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2} + \frac{x^3}{6} + \cdots \\[6pt]
\sin x &= \sum_{n=0}^{\infty} \frac{(-1)^n \, x^{2n+1}}{(2n+1)!} = x - \frac{x^3}{6} + \frac{x^5}{120} - \cdots \\[6pt]
\cos x &= \sum_{n=0}^{\infty} \frac{(-1)^n \, x^{2n}}{(2n)!} = 1 - \frac{x^2}{2} + \frac{x^4}{24} - \cdots
\end{aligned}
$$
I tre sviluppi valgono per ogni $x \in \mathbb{R}$.
:::

:::formula{#sviluppi-serie-geometrica titolo="Serie geometrica e sviluppi collegati"}
$$
\frac{1}{1 - x} = \sum_{n=0}^{\infty} x^n,
\qquad
\frac{1}{1 + x} = \sum_{n=0}^{\infty} (-1)^n x^n,
\qquad
\frac{1}{1 + x^2} = \sum_{n=0}^{\infty} (-1)^n x^{2n}
$$
I tre sviluppi valgono per $-1 < x < 1$.
:::

:::formula{#sviluppi-logaritmo-arcotangente titolo="Logaritmo e arcotangente"}
$$
\begin{aligned}
\ln(1 + x) &= \sum_{n=1}^{\infty} \frac{(-1)^{n+1} \, x^n}{n} && -1 < x \leq 1 \\[6pt]
-\ln(1 - x) &= \sum_{n=1}^{\infty} \frac{x^n}{n} && -1 \leq x < 1 \\[6pt]
\arctan x &= \sum_{n=0}^{\infty} \frac{(-1)^n \, x^{2n+1}}{2n+1} && -1 \leq x \leq 1 \\[6pt]
\ln \frac{1 + x}{1 - x} &= 2 \sum_{n=0}^{\infty} \frac{x^{2n+1}}{2n+1} && -1 < x < 1
\end{aligned}
$$
Gli estremi inclusi seguono dal teorema di Abel; in particolare $\displaystyle\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n} = \ln 2$ e $\displaystyle\sum_{n=0}^{\infty} \frac{(-1)^n}{2n+1} = \frac{\pi}{4}$.
:::

:::formula{#serie-binomiale titolo="Serie binomiale"}
$$
(1 + x)^{\alpha} = \sum_{n=0}^{\infty} \binom{\alpha}{n} x^n,
\qquad
\binom{\alpha}{n} = \frac{\alpha (\alpha - 1) \cdots (\alpha - n + 1)}{n!},
\qquad
\binom{\alpha}{0} = 1
$$
$$
\sqrt{1 + x} = 1 + \frac{x}{2} - \frac{x^2}{8} + \frac{x^3}{16} - \cdots,
\qquad
\frac{1}{\sqrt{1 + x}} = 1 - \frac{x}{2} + \frac{3x^2}{8} - \frac{5x^3}{16} + \cdots
$$
Lo sviluppo vale per $-1 < x < 1$ e $\alpha \in \mathbb{R}$. Per $\alpha \in \mathbb{N}$ la somma è finita e coincide con il binomio di Newton, valido per ogni $x$.
:::

:::formula{#sviluppi-per-sostituzione titolo="Sviluppi per sostituzione"}
$$
g(t) = \sum_{n=0}^{\infty} a_n t^n \ \text{ per } |t| < R
\implies
g(c\,x^k) = \sum_{n=0}^{\infty} a_n c^n x^{kn} \ \text{ per } |c\, x^k| < R
$$
Vale per $c \neq 0$ e $k \geq 1$ intero; la regione di validità si ottiene imponendo all'espressione sostituita la condizione dello sviluppo di partenza. Per esempio $e^{-x^2} = \displaystyle\sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{n!}$ per ogni $x \in \mathbb{R}$.
:::

:::formula{#sviluppi-centrati titolo="Sviluppi centrati in un punto diverso dall'origine"}
$$
\begin{aligned}
e^x &= \sum_{n=0}^{\infty} \frac{e^{x_0}}{n!} (x - x_0)^n && x \in \mathbb{R} \\[6pt]
\frac{1}{x} &= \sum_{n=0}^{\infty} \frac{(-1)^n}{x_0^{n+1}} (x - x_0)^n && |x - x_0| < x_0 \\[6pt]
\ln x &= \ln x_0 + \sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n\, x_0^n} (x - x_0)^n && 0 < x \leq 2 x_0
\end{aligned}
$$
Le ultime due valgono per $x_0 > 0$. Si ottengono dagli sviluppi in $0$ con la sostituzione $t = \dfrac{x - x_0}{x_0}$, oppure con $t = x - x_0$ per l'esponenziale.
:::

:::formula{#somme-serie-numeriche titolo="Somme ottenute per derivazione"}
$$
\sum_{n=1}^{\infty} n\, x^{n-1} = \frac{1}{(1 - x)^2},
\qquad
\sum_{n=1}^{\infty} n\, x^{n} = \frac{x}{(1 - x)^2},
\qquad
\sum_{n=1}^{\infty} n^2 x^{n} = \frac{x (1 + x)}{(1 - x)^3}
$$
Valgono per $-1 < x < 1$. Una serie numerica con termini di questa forma si somma sostituendo il valore di $x$: per $x = \dfrac{1}{2}$ si ottengono $\displaystyle\sum_{n=1}^{\infty} \frac{n}{2^n} = 2$ e $\displaystyle\sum_{n=1}^{\infty} \frac{n^2}{2^n} = 6$.
:::

## Serie di Fourier

Le dimostrazioni e gli esempi sono nel capitolo [Serie di Fourier](/analisi-2/serie-di-fourier/teoria).

:::formula{#coefficienti-di-fourier titolo="Coefficienti e serie di Fourier"}
$$
a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \cos(nx)\, dx \quad (n \geq 0),
\qquad
b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin(nx)\, dx \quad (n \geq 1)
$$
$$
f(x) \sim \frac{a_0}{2} + \sum_{n=1}^{\infty} \bigl( a_n \cos(nx) + b_n \sin(nx) \bigr)
$$
Valgono per $f$ di periodo $2\pi$, integrabile su $[-\pi, \pi]$. Il termine $\dfrac{a_0}{2}$ è la media di $f$ su un periodo; l'integrale si può calcolare su qualunque intervallo di lunghezza $2\pi$.
:::

:::formula{#serie-di-coseni-e-di-seni titolo="Funzioni pari e funzioni dispari"}
$$
\begin{aligned}
f \ \text{pari} &\implies b_n = 0, \quad a_n = \frac{2}{\pi} \int_0^{\pi} f(x) \cos(nx)\, dx \\[6pt]
f \ \text{dispari} &\implies a_n = 0, \quad b_n = \frac{2}{\pi} \int_0^{\pi} f(x) \sin(nx)\, dx
\end{aligned}
$$
Per una funzione pari la serie è di soli coseni, per una funzione dispari è di soli seni. Se si modifica $f$ in un numero finito di punti, i coefficienti restano gli stessi.
:::

:::formula{#ortogonalita titolo="Ortogonalità del sistema trigonometrico"}
$$
\begin{gathered}
\int_{-\pi}^{\pi} \cos(nx) \cos(mx)\, dx = \int_{-\pi}^{\pi} \sin(nx) \sin(mx)\, dx = 0 \quad (n \neq m) \\[6pt]
\int_{-\pi}^{\pi} \cos^2(nx)\, dx = \int_{-\pi}^{\pi} \sin^2(nx)\, dx = \pi,
\qquad
\int_{-\pi}^{\pi} \sin(nx) \cos(mx)\, dx = 0
\end{gathered}
$$
Valgono per ogni coppia di interi $n, m \geq 1$; inoltre $\displaystyle\int_{-\pi}^{\pi} \cos(nx)\, dx = \int_{-\pi}^{\pi} \sin(nx)\, dx = 0$.
:::

:::formula{#integrali-coefficienti titolo="Integrali ricorrenti nei coefficienti"}
$$
\begin{aligned}
\int x \cos(nx)\, dx &= \frac{x \sin(nx)}{n} + \frac{\cos(nx)}{n^2} + c \\[6pt]
\int x \sin(nx)\, dx &= -\frac{x \cos(nx)}{n} + \frac{\sin(nx)}{n^2} + c \\[6pt]
\cos(n\pi) &= (-1)^n, \qquad \sin(n\pi) = 0
\end{aligned}
$$
Le primitive valgono per $n \geq 1$ intero e si ottengono integrando per parti; i valori in $n\pi$ valgono per ogni intero $n$.
:::

:::formula{#convergenza-puntuale-fourier titolo="Convergenza puntuale"}
$$
\frac{a_0}{2} + \sum_{n=1}^{\infty} \bigl( a_n \cos(nx) + b_n \sin(nx) \bigr) = \frac{f(x^+) + f(x^-)}{2}
$$
Vale in ogni $x \in \mathbb{R}$ per $f$ di periodo $2\pi$ e regolare a tratti. Nei punti di continuità la somma è $f(x)$; nei punti di salto è la media dei limiti laterali, e per il prolungamento di una funzione data su $[-\pi, \pi)$ i salti possono trovarsi in $\pm\pi$.
:::

:::formula{#convergenza-uniforme-fourier titolo="Convergenza uniforme"}
$$
\sum_{n=1}^{\infty} \bigl( |a_n| + |b_n| \bigr) \ \text{converge},
\qquad
|a_n \cos(nx) + b_n \sin(nx)| \leq |a_n| + |b_n|
$$
Valgono per $f$ di periodo $2\pi$, **continua su** $\mathbb{R}$ e regolare a tratti. Per il criterio di Weierstrass la serie converge allora totalmente, quindi uniformemente, a $f$ su $\mathbb{R}$. Per una funzione data su $[-\pi, \pi]$ la continuità del prolungamento richiede $f(-\pi) = f(\pi)$.
:::

:::formula{#uguaglianza-di-parseval titolo="Uguaglianza di Parseval"}
$$
\frac{1}{\pi} \int_{-\pi}^{\pi} f(x)^2\, dx
= \frac{a_0^2}{2} + \sum_{n=1}^{\infty} \bigl( a_n^2 + b_n^2 \bigr)
$$
Vale per $f$ di periodo $2\pi$ con quadrato integrabile su $[-\pi, \pi]$. Si usa per sommare serie numeriche con i quadrati dei coefficienti.
:::

:::formula{#periodo-generico titolo="Periodo 2L"}
$$
a_n = \frac{1}{L} \int_{-L}^{L} f(x) \cos\!\left( \frac{n\pi x}{L} \right) dx,
\qquad
b_n = \frac{1}{L} \int_{-L}^{L} f(x) \sin\!\left( \frac{n\pi x}{L} \right) dx
$$
$$
f(x) \sim \frac{a_0}{2} + \sum_{n=1}^{\infty} \left( a_n \cos\!\left( \frac{n\pi x}{L} \right) + b_n \sin\!\left( \frac{n\pi x}{L} \right) \right)
$$
Valgono per $f$ di periodo $2L$, con $L > 0$, integrabile su $[-L, L]$. I teoremi di convergenza e le formule per funzioni pari e dispari restano validi; nell'uguaglianza di Parseval il primo membro diventa $\dfrac{1}{L} \displaystyle\int_{-L}^{L} f(x)^2\, dx$.
:::

:::formula{#sviluppi-fourier-notevoli titolo="Sviluppi di Fourier notevoli"}
$$
\begin{aligned}
x &\sim \sum_{n=1}^{\infty} \frac{2\,(-1)^{n+1}}{n} \sin(nx) && x \in [-\pi, \pi) \\[6pt]
x^2 &\sim \frac{\pi^2}{3} + \sum_{n=1}^{\infty} \frac{4\,(-1)^{n}}{n^2} \cos(nx) && x \in [-\pi, \pi] \\[6pt]
|x| &\sim \frac{\pi}{2} - \frac{4}{\pi} \sum_{k=0}^{\infty} \frac{\cos\bigl((2k+1)x\bigr)}{(2k+1)^2} && x \in [-\pi, \pi] \\[6pt]
q(x) &\sim \frac{4}{\pi} \sum_{k=0}^{\infty} \frac{\sin\bigl((2k+1)x\bigr)}{2k+1} && x \in [-\pi, \pi)
\end{aligned}
$$
Gli sviluppi si riferiscono ai prolungamenti di periodo $2\pi$ delle funzioni indicate. Nell'ultima riga $q$ è l'onda quadra, che vale $-1$ su $[-\pi, 0)$ e $1$ su $[0, \pi)$; i suoi coefficienti sono $b_n = \dfrac{2\bigl(1 - (-1)^n\bigr)}{n\pi}$.
:::

:::formula{#somme-con-fourier titolo="Somme di serie numeriche"}
$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{\pi^2}{6},
\qquad
\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n^2} = \frac{\pi^2}{12},
\qquad
\sum_{k=0}^{\infty} \frac{1}{(2k+1)^2} = \frac{\pi^2}{8},
\qquad
\sum_{n=1}^{\infty} \frac{1}{n^4} = \frac{\pi^4}{90}
$$
Le prime tre si ottengono dalla convergenza puntuale degli sviluppi di $x^2$ in $x = \pi$ e in $x = 0$ e di $|x|$ in $x = 0$; la quarta dall'uguaglianza di Parseval per $x^2$.
:::

:::attenzione
Se $f$ ha un punto di salto, la serie di Fourier non converge uniformemente su $\mathbb{R}$, perché le somme parziali sono continue e il limite uniforme di funzioni continue è continuo. Per il prolungamento di $f(x) = x$ da $[-\pi, \pi)$ i limiti laterali in $x = \pi$ sono $\pi$ e $-\pi$, e la serie in $x = \pi$ converge alla media $0$; la convergenza è quindi soltanto puntuale.
:::
