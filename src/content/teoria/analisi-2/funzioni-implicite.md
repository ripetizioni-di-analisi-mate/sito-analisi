---
titolo: Funzioni implicite
sommario: Quando un'equazione F(x, y) = 0 definisce una funzione y = φ(x), come si calcolano le derivate di φ senza conoscerla, e come il risultato si estende alle superfici e ai sistemi.
---

## Il problema

:::definizione{#equazione-implicita titolo="Equazione implicita e insieme degli zeri"}
Sia $F : A \subseteq \mathbb{R}^2 \to \mathbb{R}$. L'equazione $F(x, y) = 0$ individua l'insieme degli zeri
$$
Z = \{ (x, y) \in A : F(x, y) = 0 \},
$$
detto anche curva di livello zero di $F$. Molte curve del piano si presentano in questa forma e non come grafici: la circonferenza $x^2 + y^2 - 1 = 0$, l'ellisse $\dfrac{x^2}{4} + y^2 - 1 = 0$, la curva $x^3 + y^3 - 2xy = 0$. Il problema di questo capitolo è stabilire se, vicino a un punto di $Z$, l'insieme $Z$ coincida con il grafico di una funzione $y = \varphi(x)$, e in tal caso calcolarne le derivate.
:::

:::definizione{#funzione-definita-implicitamente titolo="Funzione definita implicitamente"}
Sia $(x_0, y_0) \in Z$. Una funzione $\varphi : I \to \mathbb{R}$, con $I$ intorno di $x_0$, è definita implicitamente dall'equazione $F(x, y) = 0$ vicino a $(x_0, y_0)$ se
$$
\begin{cases}
\varphi(x_0) = y_0 \\[4pt]
F(x, \varphi(x)) = 0 \quad \text{per ogni } x \in I .
\end{cases}
$$
La nozione è locale: la stessa equazione può definire funzioni diverse vicino a punti diversi della curva, e vicino ad alcuni punti può non definirne alcuna.
:::

:::esempio{titolo="La circonferenza non è un grafico, ma lo è localmente"}
Per $F(x, y) = x^2 + y^2 - 1$ l'insieme degli zeri è la circonferenza unitaria, che non è il grafico di alcuna funzione $y = \varphi(x)$: a ogni $x \in (-1, 1)$ corrispondono due punti della curva. Vicino al punto $\left( \dfrac{3}{5}, \dfrac{4}{5} \right)$ la curva coincide con il grafico di $\varphi(x) = \sqrt{1 - x^2}$; vicino a $\left( \dfrac{3}{5}, -\dfrac{4}{5} \right)$ con il grafico di $-\sqrt{1 - x^2}$. Vicino a $(1, 0)$ nessuna funzione di $x$ descrive la curva, perché ogni intorno di $(1, 0)$ contiene, per uno stesso valore $x < 1$, due punti della circonferenza.

::grafico{f="sqrt(1-x*x)" xmin=-1.6 xmax=1.6 ymin=-0.3 ymax=1.4 punti="0.6,0.8" titolo="Il ramo superiore della circonferenza: vicino a (3/5, 4/5) la curva è il grafico di y = √(1 − x²)"}
:::

:::osservazione
In generale risolvere $F(x, y) = 0$ rispetto a $y$ per via algebrica non è possibile. L'equazione $y^5 + y + x = 0$ associa a ogni $x$ una e una sola $y$, poiché la funzione $y \mapsto y^5 + y$ è strettamente crescente e assume tutti i valori reali; la soluzione $y = \varphi(x)$ però non si scrive con funzioni elementari. Il teorema di Dini garantisce esistenza, unicità locale e regolarità della funzione implicita senza esibirla, e ne fornisce le derivate.
:::

## Il teorema di Dini

::::teorema{#teorema-di-dini titolo="Teorema di Dini (due variabili)"}
Sia $F$ di classe $C^1$ in un aperto $A \subseteq \mathbb{R}^2$ e sia $(x_0, y_0) \in A$ tale che
$$
\begin{cases}
F(x_0, y_0) = 0 \\[4pt]
F_y(x_0, y_0) \neq 0 .
\end{cases}
$$
Allora esistono un intorno $I$ di $x_0$, un intorno $J$ di $y_0$ e un'unica funzione $\varphi : I \to J$ tale che $\varphi(x_0) = y_0$ e $F(x, \varphi(x)) = 0$ per ogni $x \in I$. Inoltre $\varphi$ è di classe $C^1$ in $I$ e
$$
\varphi'(x) = -\,\frac{F_x(x, \varphi(x))}{F_y(x, \varphi(x))} .
$$
Il teorema si usa in due tempi: prima si verificano le due condizioni nel punto assegnato, poi si calcola $\varphi'(x_0) = -\dfrac{F_x(x_0, y_0)}{F_y(x_0, y_0)}$ con i valori delle derivate parziali nel punto, senza conoscere $\varphi$.

:::dimostrazione
Sia $F_y(x_0, y_0) > 0$ (nel caso opposto si ragiona su $-F$). Poiché $F_y$ è continua, per la permanenza del segno esiste un rettangolo $R = [x_0 - a, x_0 + a] \times [y_0 - b, y_0 + b] \subseteq A$ in cui $F_y > 0$. Per ogni $x$ fissato la funzione $y \mapsto F(x, y)$ è dunque strettamente crescente su $[y_0 - b, y_0 + b]$. Poiché $F(x_0, y_0) = 0$, risulta $F(x_0, y_0 - b) < 0 < F(x_0, y_0 + b)$; per la continuità di $F$ esiste allora $\delta \in (0, a]$ tale che
$$
F(x, y_0 - b) < 0 < F(x, y_0 + b) \qquad \text{per ogni } x \in I = (x_0 - \delta,\, x_0 + \delta) .
$$
Fissato $x \in I$, la funzione continua $y \mapsto F(x, y)$ cambia segno agli estremi di $[y_0 - b, y_0 + b]$, quindi per il teorema degli zeri esiste $y \in (y_0 - b, y_0 + b)$ con $F(x, y) = 0$; tale $y$ è unico per la stretta monotonia, e si pone $\varphi(x) = y$.

Per la formula della derivata si considera il rapporto incrementale. Posto $P = (x, \varphi(x))$ e $v = (h, \varphi(x + h) - \varphi(x))$, i punti $P$ e $P + v$ appartengono al rettangolo e $F(P) = F(P + v) = 0$; per il teorema di Lagrange applicato lungo il segmento esiste un punto $Q_h$ del segmento tale che
$$
0 = F(P + v) - F(P) = F_x(Q_h)\, h + F_y(Q_h) \bigl( \varphi(x + h) - \varphi(x) \bigr) ,
$$
quindi
$$
\frac{\varphi(x + h) - \varphi(x)}{h} = -\,\frac{F_x(Q_h)}{F_y(Q_h)} .
$$
Su $R$ la funzione $|F_x|$ è limitata e $F_y$ ha minimo positivo, perciò il rapporto incrementale è limitato e $\varphi(x + h) \to \varphi(x)$ per $h \to 0$: $\varphi$ è continua. Di conseguenza $Q_h \to (x, \varphi(x))$ per $h \to 0$, e poiché $F_x$ e $F_y$ sono continue il rapporto incrementale tende a $-\dfrac{F_x(x, \varphi(x))}{F_y(x, \varphi(x))}$. Dunque $\varphi$ è derivabile con la derivata enunciata, che è continua in quanto composizione di funzioni continue, perciò $\varphi$ è di classe $C^1$.
:::
::::

:::richiamo{titolo="Teorema degli zeri"}
Se $g$ è continua su $[a, b]$ e $g(a)\, g(b) < 0$, esiste $c \in (a, b)$ con $g(c) = 0$.
:::

:::richiamo{titolo="Teorema di Lagrange lungo un segmento"}
Se $F$ è differenziabile in un aperto contenente il segmento di estremi $P$ e $P + v$, esiste $t \in (0, 1)$ tale che $F(P + v) - F(P) = \nabla F(P + t\,v) \cdot v$.
:::

:::esempio{titolo="Applicazione alla circonferenza"}
$F(x, y) = x^2 + y^2 - 1$ nel punto $\left( \dfrac{3}{5}, \dfrac{4}{5} \right)$. Risulta $F\!\left( \dfrac{3}{5}, \dfrac{4}{5} \right) = \dfrac{9}{25} + \dfrac{16}{25} - 1 = 0$ e $F_y\!\left( \dfrac{3}{5}, \dfrac{4}{5} \right) = \dfrac{8}{5} \neq 0$, quindi il teorema di Dini si applica e
$$
\varphi'\!\left( \tfrac{3}{5} \right)
= -\,\frac{F_x}{F_y}
= -\,\frac{2 \cdot \dfrac{3}{5}}{2 \cdot \dfrac{4}{5}}
= -\,\frac{3}{4} .
$$
Il valore coincide con la derivata di $\sqrt{1 - x^2}$ in $x = \dfrac{3}{5}$, che qui è nota; il teorema dà lo stesso risultato anche quando la forma esplicita non esiste.
:::

:::osservazione{#scambio-delle-variabili titolo="Lo scambio delle variabili"}
Il teorema vale con i ruoli di $x$ e $y$ scambiati: se $F(x_0, y_0) = 0$ e $F_x(x_0, y_0) \neq 0$, vicino al punto la curva è il grafico di una funzione $x = \psi(y)$ con $\psi'(y) = -\dfrac{F_y}{F_x}$. Nei punti della curva in cui $F_y = 0$ e $F_x \neq 0$ la curva resta quindi localmente un grafico, rispetto all'altra variabile, e la retta tangente è verticale. Nei punti in cui $F_x$ e $F_y$ sono entrambe nulle il teorema non fornisce alcuna informazione, in nessuna delle due direzioni: questi punti si dicono singolari e vanno studiati direttamente.
:::

:::attenzione
La condizione $F_y(x_0, y_0) \neq 0$ è sufficiente, non necessaria. Per $F(x, y) = (y - x^2)^2$ il gradiente è nullo in ogni punto dell'insieme degli zeri, eppure l'insieme è il grafico della funzione $y = x^2$. Quando le ipotesi non sono soddisfatte, l'esistenza della funzione implicita non è esclusa: va decisa studiando l'equazione.
:::

## Derivate successive della funzione implicita

:::proposizione{#derivata-seconda-implicita titolo="Derivata seconda della funzione implicita"}
Se $F$ è di classe $C^2$ e il teorema di Dini si applica, la funzione implicita $\varphi$ è di classe $C^2$ e
$$
\varphi''(x) = -\,\frac{F_{xx} F_y^2 - 2 F_{xy} F_x F_y + F_{yy} F_x^2}{F_y^3} ,
$$
con tutte le derivate parziali calcolate in $(x, \varphi(x))$. La formula si ottiene derivando rispetto a $x$ l'uguaglianza $\varphi' = -\dfrac{F_x}{F_y}$ con la regola della catena e sostituendo di nuovo $\varphi'$. Nei punti in cui $\varphi'(x_0) = 0$, cioè $F_x(x_0, y_0) = 0$, la formula si riduce a
$$
\varphi''(x_0) = -\,\frac{F_{xx}(x_0, y_0)}{F_y(x_0, y_0)} .
$$
:::

:::richiamo{titolo="Regola della catena"}
Se $F$ è differenziabile e $t \mapsto (x(t), y(t))$ è derivabile, allora $h(t) = F(x(t), y(t))$ è derivabile e $h'(t) = F_x\, x'(t) + F_y\, y'(t)$.
:::

:::esempio{titolo="Metodo pratico: derivare l'identità"}
Negli esercizi conviene derivare due volte l'identità $F(x, \varphi(x)) = 0$ anziché applicare la formula. Per la circonferenza $x^2 + y^2 = 1$, con $y = \varphi(x)$, la prima derivazione dà $2x + 2y\,y' = 0$, da cui $y' = -\dfrac{x}{y}$. Derivando ancora si ottiene $2 + 2(y')^2 + 2y\,y'' = 0$, quindi
$$
y'' = -\,\frac{1 + (y')^2}{y}
= -\,\frac{1 + \dfrac{x^2}{y^2}}{y}
= -\,\frac{x^2 + y^2}{y^3}
= -\,\frac{1}{y^3} ,
$$
dove nell'ultimo passaggio si è usata l'equazione della curva.
:::

:::osservazione{#studio-locale-implicita titolo="Studio locale della funzione implicita"}
Le derivate prima e seconda permettono di studiare $\varphi$ senza conoscerla. Il segno di $\varphi' = -\dfrac{F_x}{F_y}$ lungo la curva dà la monotonia; i punti stazionari di $\varphi$ sono i punti della curva in cui $F_x = 0$ (con $F_y \neq 0$), e in tali punti il segno di $\varphi''(x_0) = -\dfrac{F_{xx}}{F_y}$ decide se $x_0$ è punto di massimo locale ($\varphi'' < 0$) o di minimo locale ($\varphi'' > 0$). Il segno di $\varphi''$ dà inoltre la concavità del ramo di curva.
:::

## Retta tangente a una curva di livello

:::proposizione{#retta-tangente-implicita titolo="Retta tangente a una curva definita implicitamente"}
Sia $F$ di classe $C^1$, $F(x_0, y_0) = 0$ e $\nabla F(x_0, y_0) \neq (0, 0)$. La retta tangente alla curva di livello in $(x_0, y_0)$ ha equazione
$$
F_x(x_0, y_0)\,(x - x_0) + F_y(x_0, y_0)\,(y - y_0) = 0 .
$$
Se $F_y(x_0, y_0) \neq 0$ questa retta coincide con la tangente al grafico della funzione implicita, $y = y_0 + \varphi'(x_0)(x - x_0)$, poiché $\varphi'(x_0) = -\dfrac{F_x}{F_y}$; se $F_y(x_0, y_0) = 0$ e $F_x(x_0, y_0) \neq 0$ la retta è verticale, $x = x_0$. La forma con il gradiente tratta quindi i due casi con un'unica equazione.
:::

:::esempio
Retta tangente alla curva $x^2 + 3y^2 = 4$ nel punto $(1, 1)$. Posto $F(x, y) = x^2 + 3y^2 - 4$, si ha $F(1, 1) = 0$, $F_x(1, 1) = 2$ e $F_y(1, 1) = 6$, quindi la tangente è
$$
2(x - 1) + 6(y - 1) = 0,
\qquad \text{cioè} \qquad
x + 3y = 4 .
$$
:::

:::osservazione{#gradiente-ortogonale titolo="Il gradiente è ortogonale alle curve di livello"}
L'equazione della retta tangente si scrive $\nabla F(x_0, y_0) \cdot (x - x_0,\; y - y_0) = 0$: il gradiente è ortogonale alla retta tangente, quindi alla curva di livello. Questa proprietà viene ripresa nel capitolo sui massimi e minimi vincolati, dove fonda il metodo dei moltiplicatori di Lagrange.
:::

## Il teorema di Dini in tre variabili

:::teorema{#teorema-di-dini-tre-variabili titolo="Teorema di Dini (tre variabili)"}
Sia $F$ di classe $C^1$ in un aperto $A \subseteq \mathbb{R}^3$ e sia $P_0 = (x_0, y_0, z_0) \in A$ tale che
$$
\begin{cases}
F(x_0, y_0, z_0) = 0 \\[4pt]
F_z(x_0, y_0, z_0) \neq 0 .
\end{cases}
$$
Allora esistono un intorno $U$ di $(x_0, y_0)$ e un'unica funzione $g : U \to \mathbb{R}$ di classe $C^1$ tale che $g(x_0, y_0) = z_0$ e $F(x, y, g(x, y)) = 0$ in $U$, con
$$
g_x = -\,\frac{F_x}{F_z},
\qquad
g_y = -\,\frac{F_y}{F_z},
$$
dove le derivate parziali di $F$ sono calcolate in $(x, y, g(x, y))$. La dimostrazione ripete quella del caso in due variabili, con la variabile $x$ sostituita dalla coppia $(x, y)$; le formule seguono derivando l'identità $F(x, y, g(x, y)) = 0$ rispetto a $x$ e rispetto a $y$. Il teorema dice che vicino a $P_0$ la superficie di livello $F = 0$ è il grafico di una funzione di due variabili, della quale si sanno calcolare le derivate parziali in $(x_0, y_0)$.
:::

:::proposizione{#piano-tangente-implicito titolo="Piano tangente a una superficie di livello"}
Nelle ipotesi del teorema, il piano tangente alla superficie $F = 0$ in $P_0$ è il piano tangente al grafico di $g$,
$$
z = z_0 + g_x(x_0, y_0)(x - x_0) + g_y(x_0, y_0)(y - y_0) ,
$$
che sostituendo le formule per $g_x$ e $g_y$ diventa
$$
F_x(P_0)(x - x_0) + F_y(P_0)(y - y_0) + F_z(P_0)(z - z_0) = 0 .
$$
Questa forma vale in ogni punto della superficie con $\nabla F(P_0) \neq (0,0,0)$, qualunque sia la variabile rispetto alla quale si applica il teorema: il gradiente di $F$ è il vettore normale al piano tangente, quindi è ortogonale alla superficie di livello.
:::

:::esempio
Piano tangente alla sfera $x^2 + y^2 + z^2 = 9$ nel punto $(1, 2, 2)$. Posto $F(x, y, z) = x^2 + y^2 + z^2 - 9$, si ha $F(1, 2, 2) = 0$ e $\nabla F(1, 2, 2) = (2, 4, 4) \neq (0,0,0)$, quindi il piano tangente è
$$
2(x - 1) + 4(y - 2) + 4(z - 2) = 0,
\qquad \text{cioè} \qquad
x + 2y + 2z = 9 .
$$
Poiché $F_z(1,2,2) = 4 \neq 0$, vicino al punto la sfera è il grafico di una funzione $z = g(x, y)$ con $g_x(1, 2) = -\dfrac{2}{4} = -\dfrac{1}{2}$ e $g_y(1, 2) = -1$.
:::

## Sistemi di equazioni e matrice Jacobiana

:::teorema{#dini-per-sistemi titolo="Il teorema di Dini per i sistemi"}
Siano $F, G$ di classe $C^1$ in un aperto di $\mathbb{R}^3$ e sia $P_0 = (x_0, y_0, z_0)$ una soluzione del sistema
$$
\begin{cases}
F(x, y, z) = 0 \\[4pt]
G(x, y, z) = 0 .
\end{cases}
$$
Se il determinante Jacobiano rispetto alle variabili $(y, z)$ è diverso da zero in $P_0$,
$$
\frac{\partial(F, G)}{\partial(y, z)}(P_0)
= \det \begin{pmatrix} F_y & F_z \\ G_y & G_z \end{pmatrix}(P_0) \neq 0 ,
$$
allora vicino a $P_0$ il sistema definisce due funzioni $y = y(x)$ e $z = z(x)$ di classe $C^1$ con $y(x_0) = y_0$ e $z(x_0) = z_0$. Geometricamente, l'intersezione delle due superfici di livello è vicino a $P_0$ una curva, parametrizzata da $x$. Le derivate $y'(x_0)$ e $z'(x_0)$ si ottengono derivando le due identità rispetto a $x$ e risolvendo il sistema lineare che ne risulta. Lo stesso enunciato vale in generale per $m$ equazioni in $n + m$ variabili: se nel punto il blocco della matrice Jacobiana relativo alle $m$ variabili scelte come dipendenti ha determinante non nullo, il sistema le definisce come funzioni $C^1$ delle altre $n$.
:::

:::esempio
Il sistema di equazioni
$$
\begin{cases}
x^2 + y^2 - z - 1 = 0 \\[4pt]
x + y + z - 3 = 0
\end{cases}
$$
ha la soluzione $P_0 = (1, 1, 1)$. Il determinante Jacobiano rispetto a $(y, z)$ in $P_0$ è
$$
\det \begin{pmatrix} 2y & -1 \\ 1 & 1 \end{pmatrix}_{(1,1,1)} = 2 + 1 = 3 \neq 0 ,
$$
quindi vicino a $P_0$ il sistema definisce $y = y(x)$ e $z = z(x)$. Derivando le due equazioni rispetto a $x$ si ottiene, nel punto,
$$
\begin{cases}
2 + 2\,y'(1) - z'(1) = 0 \\[4pt]
1 + y'(1) + z'(1) = 0 ,
\end{cases}
$$
e sommando le due equazioni risulta $3 + 3\,y'(1) = 0$, perciò $y'(1) = -1$ e $z'(1) = 0$.
:::
