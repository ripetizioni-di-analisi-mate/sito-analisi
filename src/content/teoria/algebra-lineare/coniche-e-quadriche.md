---
titolo: Coniche e quadriche
sommario: Come si scrive la matrice di una conica o di una quadrica, come si classifica con gli invarianti e come si riduce a forma canonica con una rotazione e una traslazione, usando autovalori e autovettori.
---

## Ellisse, iperbole e parabola

:::definizione{#conica titolo="Conica"}
Una **conica** è l'insieme dei punti $(x, y)$ del piano che soddisfano un'equazione di secondo grado
$$
a_{11}x^2 + 2a_{12}xy + a_{22}y^2 + 2a_{13}x + 2a_{23}y + a_{33} = 0 ,
$$
con i coefficienti reali e $a_{11}$, $a_{12}$, $a_{22}$ non tutti nulli. I fattori $2$ davanti ai termini misti e lineari servono a scrivere la matrice associata senza frazioni. Lo scopo dell'argomento è riconoscere dall'equazione *quale* curva si ha davanti e *dove* si trova, riportandola a una delle forme canoniche seguenti con un cambiamento di coordinate.
:::

:::osservazione{#forme-canoniche-coniche titolo="Le forme canoniche"}
Le coniche non degeneri, in un riferimento opportuno, hanno una delle equazioni seguenti, già note dalla geometria analitica della scuola.

- **Ellisse**: $\dfrac{x^2}{a^2} + \dfrac{y^2}{b^2} = 1$ con $a \geq b > 0$; è il luogo dei punti con somma delle distanze dai fuochi $(\pm c, 0)$ uguale a $2a$, dove $c^2 = a^2 - b^2$. I numeri $a$ e $b$ sono i semiassi; per $a = b$ si ottiene la circonferenza.
- **Iperbole**: $\dfrac{x^2}{a^2} - \dfrac{y^2}{b^2} = 1$ con $a, b > 0$; è il luogo dei punti con differenza delle distanze dai fuochi $(\pm c, 0)$ uguale a $2a$ in valore assoluto, dove $c^2 = a^2 + b^2$. Gli asintoti sono le rette $y = \pm \dfrac{b}{a}\, x$.
- **Parabola**: $y^2 = 2px$ con $p > 0$; è il luogo dei punti equidistanti dal fuoco $\left( \dfrac{p}{2}, 0 \right)$ e dalla direttrice $x = -\dfrac{p}{2}$.

In forma canonica gli assi coordinati sono assi di simmetria della curva e, per ellisse e iperbole, l'origine è centro di simmetria.

::grafico{curve="3*cos(t),2*sin(t),0,6.29" punti="2.236,0,pieno,F₁;-2.236,0,pieno,F₂" xmin=-4 xmax=4 ymin=-3 ymax=3 uguale=1 titolo="L'ellisse $\dfrac{x^2}{9} + \dfrac{y^2}{4} = 1$, con semiassi $3$ e $2$ e fuochi $(\pm\sqrt{5}, 0)$"}

::grafico{curve="2/cos(t),tan(t),-1.5,4.65" segmenti="-5,-2.5,5,2.5;-5,2.5,5,-2.5" punti="2.236,0,pieno,F₁;-2.236,0,pieno,F₂" xmin=-5 xmax=5 ymin=-3 ymax=3 uguale=1 titolo="L'iperbole $\dfrac{x^2}{4} - y^2 = 1$, con fuochi $(\pm\sqrt{5}, 0)$ e asintoti $y = \pm\dfrac{x}{2}$ (tratteggiati)"}

::grafico{curve="t^2/4,t,-4,4" asintoti="x=-1" punti="1,0,pieno,F" xmin=-2 xmax=5 ymin=-4 ymax=4 uguale=1 titolo="La parabola $y^2 = 4x$, cioè $p = 2$: fuoco $(1, 0)$ e direttrice $x = -1$ (tratteggiata)"}

:::

## La matrice associata a una conica

:::definizione{#matrice-associata-conica titolo="Matrice associata a una conica"}
La **matrice associata** alla conica di equazione $a_{11}x^2 + 2a_{12}xy + a_{22}y^2 + 2a_{13}x + 2a_{23}y + a_{33} = 0$ è la matrice simmetrica di ordine $3$
$$
A = \begin{pmatrix}
a_{11} & a_{12} & a_{13} \\
a_{12} & a_{22} & a_{23} \\
a_{13} & a_{23} & a_{33}
\end{pmatrix} ,
\qquad
A_0 = \begin{pmatrix}
a_{11} & a_{12} \\
a_{12} & a_{22}
\end{pmatrix} ,
$$
dove $A_0$ è il blocco $2 \times 2$ in alto a sinistra, che contiene i soli termini di secondo grado. Con il prodotto righe per colonne l'equazione della conica si scrive
$$
\begin{pmatrix} x & y & 1 \end{pmatrix} A \begin{pmatrix} x \\ y \\ 1 \end{pmatrix} = 0 ,
$$
e questa scrittura permette di trattare i cambiamenti di coordinate come prodotti di matrici. Nella matrice compaiono le *metà* dei coefficienti di $xy$, di $x$ e di $y$.
:::

:::esempio
Per la conica $2x^2 - 4xy + 5y^2 + 2x - 6y + 1 = 0$ si ha $a_{12} = -2$, $a_{13} = 1$, $a_{23} = -3$, quindi
$$
A = \begin{pmatrix}
2 & -2 & 1 \\
-2 & 5 & -3 \\
1 & -3 & 1
\end{pmatrix} ,
\qquad
A_0 = \begin{pmatrix}
2 & -2 \\
-2 & 5
\end{pmatrix} .
$$
Lo sviluppo del prodotto $\begin{pmatrix} x & y & 1 \end{pmatrix} A \begin{pmatrix} x & y & 1 \end{pmatrix}^T$ restituisce l'equazione di partenza, e questo è il controllo più rapido sulla matrice scritta.
:::

## Rototraslazioni e invarianti

:::definizione{#rototraslazione titolo="Rototraslazione"}
Una **rototraslazione** del piano è un cambiamento di coordinate della forma
$$
\begin{pmatrix} x \\ y \end{pmatrix} = R \begin{pmatrix} X \\ Y \end{pmatrix} + \begin{pmatrix} x_0 \\ y_0 \end{pmatrix} ,
$$
con $R \in M_2(\mathbb{R})$ ortogonale ($R^T R = I_2$) e $\det R = 1$. Le colonne di $R$ sono i versori dei nuovi assi $X$ e $Y$, e il punto $(x_0, y_0)$ è la nuova origine. Una rototraslazione conserva distanze e angoli, quindi trasforma una curva in una curva **congruente**; la forma della conica resta la stessa e cambia soltanto l'equazione che la descrive.
:::

:::osservazione{#matrice-dopo-rototraslazione titolo="La matrice dopo una rototraslazione"}
Si scrivano $A$ e la matrice del cambiamento di coordinate a blocchi, con $b = \begin{pmatrix} a_{13} \\ a_{23} \end{pmatrix}$ e $c = \begin{pmatrix} x_0 \\ y_0 \end{pmatrix}$:
$$
A = \begin{pmatrix} A_0 & b \\ b^T & a_{33} \end{pmatrix} ,
\qquad
T = \begin{pmatrix} R & c \\ 0 & 1 \end{pmatrix} ,
\qquad
\begin{pmatrix} x \\ y \\ 1 \end{pmatrix} = T \begin{pmatrix} X \\ Y \\ 1 \end{pmatrix} .
$$
Sostituendo nella scrittura matriciale dell'equazione si ottiene la matrice $A' = T^T A T$ della conica nelle nuove coordinate, e il calcolo a blocchi dà
$$
A' = \begin{pmatrix} R^T A_0 R & R^T (A_0 c + b) \\ (A_0 c + b)^T R & f(x_0, y_0) \end{pmatrix} ,
$$
dove $f(x, y)$ indica il primo membro dell'equazione della conica. La formula mostra separatamente l'effetto delle due parti: la rotazione $R$ agisce sul blocco $A_0$, la traslazione $c$ modifica i termini lineari e il termine noto.
:::

::::teorema{#invarianti-ortogonali titolo="Invarianti ortogonali"}
Sia $A$ la matrice di una conica e sia $A'$ la matrice della stessa conica dopo una rototraslazione. Allora
$$
\begin{cases}
\det A' = \det A \\[4pt]
\det A'_0 = \det A_0 \\[4pt]
\operatorname{tr} A'_0 = \operatorname{tr} A_0
\end{cases}
$$
I tre numeri $I_3 = \det A$, $I_2 = \det A_0$ e $I_1 = \operatorname{tr} A_0$ si chiamano **invarianti ortogonali** della conica. Poiché non dipendono dal riferimento, si possono calcolare sull'equazione assegnata e confrontare con quelli della forma canonica: su questo si basano la classificazione e il calcolo diretto della forma canonica.

:::dimostrazione
La matrice $T$ è triangolare a blocchi, quindi $\det T = \det R \cdot 1 = 1$. Per il **teorema di Binet**
$$
\det A' = \det T^T \cdot \det A \cdot \det T = \det A .
$$
Il blocco $2 \times 2$ di $A'$ è $A'_0 = R^T A_0 R$, e poiché $R$ è ortogonale si ha $R^T = R^{-1}$, quindi $A'_0 = R^{-1} A_0 R$ è simile ad $A_0$. Matrici simili hanno lo stesso polinomio caratteristico, perciò hanno lo stesso determinante e la stessa traccia.
:::
::::

:::richiamo{titolo="Teorema di Binet"}
Se $A, B \in M_n(\mathbb{R})$, allora $\det(AB) = \det A \cdot \det B$.
:::

:::richiamo{titolo="Matrici simili"}
Se $B = P^{-1} A P$ con $P$ invertibile, allora $p_B(\lambda) = p_A(\lambda)$, quindi $\det B = \det A$ e $\operatorname{tr} B = \operatorname{tr} A$.
:::

## Riduzione a forma canonica

::::teorema{#forma-canonica-a-centro titolo="Forma canonica delle coniche a centro"}
Sia data una conica con invarianti $I_3$ e $I_2 \neq 0$, e siano $\lambda_1, \lambda_2$ gli autovalori di $A_0$. Allora esiste una rototraslazione che trasforma l'equazione della conica in
$$
\lambda_1 X^2 + \lambda_2 Y^2 + \frac{I_3}{I_2} = 0 .
$$
La rotazione ha per colonne autovettori di $A_0$ di norma $1$; la traslazione porta l'origine nel punto $(x_0, y_0)$ che risolve $A_0 c = -b$, detto **centro** della conica. Il teorema dà la forma canonica con il solo calcolo degli invarianti e degli autovalori, senza eseguire la sostituzione.

:::dimostrazione
La matrice $A_0$ è simmetrica, quindi per il **teorema spettrale** esiste una base ortonormale di $\mathbb{R}^2$ formata da autovettori $u_1, u_2$ di $A_0$, relativi a $\lambda_1$ e $\lambda_2$. La matrice $R$ con colonne $u_1$ e $u_2$ è ortogonale e ha determinante $\pm 1$; se vale $-1$, si sostituisce $u_2$ con $-u_2$, che è ancora un autovettore. Allora $R^T A_0 R$ è la matrice diagonale con elementi $\lambda_1$ e $\lambda_2$.

Poiché $\det A_0 = I_2 \neq 0$, il sistema $A_0 c = -b$ ha un'unica soluzione $c$. Con queste scelte di $R$ e $c$ la formula della matrice dopo una rototraslazione dà
$$
A' = \begin{pmatrix}
\lambda_1 & 0 & 0 \\
0 & \lambda_2 & 0 \\
0 & 0 & f(x_0, y_0)
\end{pmatrix} ,
$$
quindi l'equazione nelle nuove coordinate è $\lambda_1 X^2 + \lambda_2 Y^2 + f(x_0, y_0) = 0$. Per l'invarianza del determinante $I_3 = \det A' = \lambda_1 \lambda_2\, f(x_0, y_0) = I_2\, f(x_0, y_0)$, perciò $f(x_0, y_0) = \dfrac{I_3}{I_2}$.
:::
::::

:::richiamo{titolo="Teorema spettrale"}
Se $A_0 \in M_n(\mathbb{R})$ è simmetrica, esiste una base ortonormale di $\mathbb{R}^n$ formata da autovettori di $A_0$; la matrice $R$ che ha questi vettori come colonne è ortogonale e $R^T A_0 R$ è diagonale.
:::

::::teorema{#forma-canonica-parabola titolo="Forma canonica della parabola"}
Sia data una conica con $I_2 = 0$ e $I_3 \neq 0$. Allora $I_1 \neq 0$ ed esiste una rototraslazione che trasforma l'equazione in
$$
Y^2 = 2pX ,
\qquad
p = \sqrt{-\frac{I_3}{I_1^3}} ,
$$
cioè la conica è una **parabola**. Il parametro $p$ si ricava dai soli invarianti; la posizione del vertice e dell'asse richiede invece il calcolo in coordinate, descritto nella sezione sulla parabola.

:::dimostrazione
Poiché $\det A_0 = 0$ e $A_0$ non è nulla, gli autovalori di $A_0$ sono $0$ e $I_1 \neq 0$. Una rotazione con colonne $u_1 \in V_0$ e $u_2 \in V_{I_1}$ di norma $1$ porta l'equazione nella forma $I_1 Y^2 + 2\beta X + 2\gamma Y + \delta = 0$, con matrice
$$
\begin{pmatrix}
0 & 0 & \beta \\
0 & I_1 & \gamma \\
\beta & \gamma & \delta
\end{pmatrix} ,
\qquad
\det = -I_1 \beta^2 .
$$
Per l'invarianza $-I_1\beta^2 = I_3 \neq 0$, quindi $\beta \neq 0$ e $\beta^2 = -\dfrac{I_3}{I_1}$. Completando il quadrato in $Y$ e raccogliendo $2\beta$ nei termini rimanenti, una traslazione porta l'equazione in $I_1 Y^2 + 2\beta X = 0$, cioè $Y^2 = -\dfrac{2\beta}{I_1}\, X$. A meno di una rotazione di un angolo piatto, che cambia segno a $X$ e a $Y$, il coefficiente è positivo e vale
$$
2p = \frac{2|\beta|}{|I_1|} ,
\qquad
p = \frac{\sqrt{-I_3 / I_1}}{|I_1|} = \sqrt{-\frac{I_3}{I_1^3}} .
$$
:::
::::

:::osservazione{#procedura-riduzione titolo="Procedura di riduzione"}
Per ridurre una conica a forma canonica e disegnarla nel piano originale si procede così.

- Si scrivono $A$ e $A_0$ e si calcolano $I_1$, $I_2$, $I_3$.
- Si calcolano gli autovalori di $A_0$ e, per ciascuno, un autovettore di norma $1$; con essi si forma $R$, con $\det R = 1$.
- Se $I_2 \neq 0$, si risolve il sistema del centro e si scrive $\lambda_1 X^2 + \lambda_2 Y^2 + \dfrac{I_3}{I_2} = 0$; dividendo per $-\dfrac{I_3}{I_2}$ si leggono i semiassi.
- Se $I_2 = 0$, si scrive $Y^2 = 2pX$ e si determinano asse e vertice.

Il nuovo asse $X$ è la retta per il centro (o per il vertice) con la direzione di $u_1$; il nuovo asse $Y$ ha la direzione di $u_2$.
:::

:::esempio{titolo="Un'ellisse ruotata e traslata"}
Sia $5x^2 - 4xy + 8y^2 - 2x - 28y - 7 = 0$. Si ha
$$
A = \begin{pmatrix}
5 & -2 & -1 \\
-2 & 8 & -14 \\
-1 & -14 & -7
\end{pmatrix} ,
\qquad
I_3 = -1296 ,
\qquad
I_2 = 36 ,
\qquad
I_1 = 13 .
$$
Il polinomio caratteristico di $A_0$ è $\lambda^2 - 13\lambda + 36 = (\lambda - 4)(\lambda - 9)$; gli autospazi sono $V_4 = \langle (2, 1) \rangle$ e $V_9 = \langle (-1, 2) \rangle$. Il sistema del centro $5x - 2y - 1 = 0$, $-2x + 8y - 14 = 0$ dà $(1, 2)$, e $\dfrac{I_3}{I_2} = -36$. Quindi la rototraslazione
$$
\begin{pmatrix} x \\ y \end{pmatrix}
= \frac{1}{\sqrt{5}} \begin{pmatrix} 2 & -1 \\ 1 & 2 \end{pmatrix} \begin{pmatrix} X \\ Y \end{pmatrix}
+ \begin{pmatrix} 1 \\ 2 \end{pmatrix}
$$
porta la conica in $4X^2 + 9Y^2 = 36$, cioè nell'**ellisse** $\dfrac{X^2}{9} + \dfrac{Y^2}{4} = 1$, con semiasse maggiore $3$ lungo la retta $x - 2y + 3 = 0$ e semiasse minore $2$ lungo la retta $2x + y - 4 = 0$.

::grafico{curve="1+(6*cos(t)-2*sin(t))/sqrt(5),2+(3*cos(t)+4*sin(t))/sqrt(5),0,6.29" segmenti="-2.13,0.43,4.13,3.57;0.105,3.79,1.895,0.21" vettori="1,2,2.79,2.89,u₁;1,2,0.11,3.79,u₂" punti="1,2,pieno" xmin=-2.5 xmax=4.5 ymin=-1 ymax=5 uguale=1 titolo="L'ellisse $5x^2 - 4xy + 8y^2 - 2x - 28y - 7 = 0$: centro $(1, 2)$, assi di simmetria (tratteggiati) nelle direzioni degli autovettori $u_1 = \dfrac{(2, 1)}{\sqrt{5}}$ e $u_2 = \dfrac{(-1, 2)}{\sqrt{5}}$"}

:::

## Classificazione delle coniche

:::definizione{#conica-degenere titolo="Conica degenere"}
Una conica si dice **degenere** se $I_3 = \det A = 0$, **non degenere** se $\det A \neq 0$. Le coniche degeneri sono unioni di due rette, reali o complesse; quelle non degeneri sono ellissi, iperboli e parabole. Il determinante della matrice $3 \times 3$ è quindi il primo numero da calcolare.
:::

::::teorema{#classificazione-coniche titolo="Classificazione delle coniche non degeneri"}
Sia data una conica con $I_3 \neq 0$.

- Se $I_2 > 0$, la conica è un'**ellisse**: reale se $I_1 \cdot I_3 < 0$, immaginaria (priva di punti reali) se $I_1 \cdot I_3 > 0$.
- Se $I_2 < 0$, la conica è un'**iperbole**.
- Se $I_2 = 0$, la conica è una **parabola**.

Il criterio usa solo i determinanti e la traccia, quindi riconosce la conica senza ridurla. Per $2x^2 - 4xy + 5y^2 + 2x - 6y + 1 = 0$ si ha $I_3 = -5$, $I_2 = 6 > 0$ e $I_1 \cdot I_3 = 7 \cdot (-5) < 0$, quindi la conica è un'**ellisse reale**.

:::dimostrazione
Se $I_2 \neq 0$, per la forma canonica delle coniche a centro la conica ha equazione $\lambda_1 X^2 + \lambda_2 Y^2 = -\dfrac{I_3}{I_2}$, con $\lambda_1 \lambda_2 = I_2$ e secondo membro diverso da zero.

Se $I_2 > 0$, gli autovalori sono concordi e hanno il segno della loro somma $I_1$, quindi il primo membro ha il segno di $I_1$ oppure è nullo. Ci sono punti reali se e solo se $-\dfrac{I_3}{I_2}$ ha il segno di $I_1$, cioè, poiché $I_2 > 0$, se e solo se $I_1 I_3 < 0$; in questo caso, dividendo per il secondo membro, si ottiene $\dfrac{X^2}{a^2} + \dfrac{Y^2}{b^2} = 1$.

Se $I_2 < 0$, gli autovalori sono discordi; dividendo per il secondo membro i coefficienti di $X^2$ e $Y^2$ risultano uno positivo e uno negativo, e si ottiene un'iperbole con asse trasverso $X$ oppure $Y$.

Se $I_2 = 0$, la tesi è la forma canonica della parabola.
:::
::::

:::osservazione{#circonferenza-iperbole-equilatera titolo="Circonferenze e iperboli equilatere"}
Due casi particolari si leggono direttamente dai coefficienti.

- Un'ellisse è una **circonferenza** se e solo se $\lambda_1 = \lambda_2$, cioè se $A_0$ è multiplo dell'identità: $a_{11} = a_{22}$ e $a_{12} = 0$.
- Un'iperbole è **equilatera** (asintoti perpendicolari, $a = b$) se e solo se $\lambda_1 = -\lambda_2$, cioè se $I_1 = a_{11} + a_{22} = 0$.

Per esempio $3x^2 - 8xy - 3y^2 + 2x + 14y - 13 = 0$ ha $I_2 = -25 < 0$ e $I_1 = 0$, quindi, se non è degenere, è un'iperbole equilatera.
:::

## Centro, assi e asintoti

:::definizione{#centro-conica titolo="Centro di una conica"}
Un punto $C$ è **centro** di una conica se la conica è simmetrica rispetto a $C$. Se $I_2 \neq 0$ la conica ha un unico centro $(x_0, y_0)$, soluzione del sistema
$$
\begin{cases}
a_{11}x + a_{12}y + a_{13} = 0 \\[4pt]
a_{12}x + a_{22}y + a_{23} = 0
\end{cases}
$$
cioè di $A_0 c = -b$. Infatti, traslando l'origine in $(x_0, y_0)$, la formula della matrice dopo una rototraslazione con $R = I_2$ mostra che i termini lineari si annullano; l'equazione contiene allora solo termini di grado $2$ e $0$, ed è invariata dalla simmetria $(X, Y) \mapsto (-X, -Y)$. Per questo ellissi e iperboli si chiamano **coniche a centro**, mentre la parabola ($I_2 = 0$) non ha centro.
:::

:::osservazione{#assi-di-simmetria titolo="Assi di simmetria"}
Gli assi di un'ellisse che non è una circonferenza, o di un'iperbole, sono le rette per il centro parallele agli autovettori di $A_0$. Nella forma canonica sono gli assi $X$ e $Y$, e la rototraslazione li riporta nel piano originale. Se $(l, m)$ è un autovettore, l'asse ha equazione $m(x - x_0) - l(y - y_0) = 0$. L'asse relativo all'autovalore di valore assoluto *minore* contiene i vertici più lontani dal centro: nell'ellisse è l'asse maggiore.
:::

:::osservazione{#asintoti-iperbole titolo="Asintoti di un'iperbole"}
Gli asintoti di un'iperbole di centro $(x_0, y_0)$ sono le rette per il centro con direzione $(l, m)$ tale che
$$
a_{11}l^2 + 2a_{12}lm + a_{22}m^2 = 0 ,
$$
cioè le direzioni su cui si annulla la parte di secondo grado. Equivalentemente, la coppia di asintoti ha equazione $f(x, y) - f(x_0, y_0) = 0$, una conica degenere con lo stesso centro e gli stessi termini di secondo grado. In forma canonica questa regola dà $\lambda_1 X^2 + \lambda_2 Y^2 = 0$, cioè le rette $Y = \pm \sqrt{-\dfrac{\lambda_1}{\lambda_2}}\, X$, che sono gli asintoti $Y = \pm \dfrac{b}{a}\, X$ della forma canonica.
:::

:::esempio{titolo="Un'iperbole equilatera"}
La conica $xy - 1 = 0$ ha $a_{12} = \dfrac{1}{2}$ e tutti gli altri coefficienti nulli tranne $a_{33} = -1$, quindi $I_3 = \dfrac{1}{4}$, $I_2 = -\dfrac{1}{4}$, $I_1 = 0$, quindi è un'**iperbole equilatera**. Il centro è l'origine. Gli autovalori di $A_0$ sono $\pm \dfrac{1}{2}$, con autovettori $(1, 1)$ e $(-1, 1)$, quindi gli assi sono le bisettrici $y = x$ e $y = -x$. Poiché $\dfrac{I_3}{I_2} = -1$, la forma canonica è
$$
\frac{1}{2}X^2 - \frac{1}{2}Y^2 = 1 ,
\qquad
\frac{X^2}{2} - \frac{Y^2}{2} = 1 ,
$$
con semiassi $\sqrt{2}$. La condizione sugli asintoti è $lm = 0$, quindi gli asintoti sono gli assi coordinati.

::grafico{f="1/x" segmenti="-3.2,-3.2,3.2,3.2;-3.2,3.2,3.2,-3.2" punti="1,1,pieno;-1,-1,pieno" xmin=-4 xmax=4 ymin=-3.5 ymax=3.5 uguale=1 titolo="L'iperbole equilatera $xy = 1$: asse trasverso $y = x$ e asse $y = -x$ (tratteggiati), vertici $(1, 1)$ e $(-1, -1)$, asintoti gli assi coordinati"}

:::

## Asse e vertice della parabola

:::osservazione{#asse-e-vertice-parabola titolo="Asse e vertice di una parabola"}
Se $I_2 = 0$, la parte di secondo grado è un quadrato e, a meno di moltiplicare l'equazione per $-1$, si ha $a_{11}x^2 + 2a_{12}xy + a_{22}y^2 = (\alpha x + \beta y)^2$. Si riscrive l'equazione nella forma
$$
(\alpha x + \beta y + t)^2 = \gamma x + \delta y + \varepsilon ,
$$
con $t$ scelto in modo che le rette $\alpha x + \beta y + t = 0$ e $\gamma x + \delta y + \varepsilon = 0$ siano perpendicolari, cioè $\alpha\gamma + \beta\delta = 0$. Allora la prima retta è l'**asse** della parabola, la seconda è la tangente nel vertice, e il **vertice** è la loro intersezione. Il motivo è che le distanze con segno dalle due rette,
$$
Y = \frac{\alpha x + \beta y + t}{\sqrt{\alpha^2 + \beta^2}} ,
\qquad
X = \frac{\gamma x + \delta y + \varepsilon}{\sqrt{\gamma^2 + \delta^2}} ,
$$
sono coordinate in un nuovo riferimento cartesiano ortogonale, nel quale l'equazione diventa $(\alpha^2 + \beta^2)\, Y^2 = \sqrt{\gamma^2 + \delta^2}\; X$, cioè $Y^2 = 2pX$.
:::

:::esempio{titolo="Una parabola con l'asse sulla bisettrice"}
Sia $x^2 - 2xy + y^2 - 4x - 4y = 0$. Si ha $I_2 = 0$, $I_1 = 2$ e $I_3 = -16$, quindi è una **parabola** con $p = \sqrt{\dfrac{16}{8}} = \sqrt{2}$. La parte di secondo grado è $(x - y)^2$, e l'equazione si scrive già
$$
(x - y)^2 = 4x + 4y ,
$$
con le rette $x - y = 0$ e $x + y = 0$ perpendicolari, poiché $1 \cdot 4 + (-1) \cdot 4 = 0$; dunque $t = 0$. L'asse è la retta $y = x$, la tangente nel vertice è $y = -x$ e il vertice è l'origine. Con $X = \dfrac{x + y}{\sqrt{2}}$ e $Y = \dfrac{x - y}{\sqrt{2}}$ l'equazione diventa $2Y^2 = 4\sqrt{2}\, X$, cioè $Y^2 = 2\sqrt{2}\, X$, in accordo con il valore di $p$ ottenuto dagli invarianti.

::grafico{curve="t^2/2+t,t^2/2-t,-5,5" segmenti="-1.5,-1.5,6.5,6.5;-2,2,2,-2" punti="0,0,pieno,V;4,0,pieno;0,4,pieno" xmin=-2.5 xmax=7 ymin=-2.5 ymax=7 uguale=1 titolo="La parabola $(x - y)^2 = 4(x + y)$: asse $y = x$, tangente nel vertice $y = -x$ (tratteggiati) e vertice nell'origine"}

:::

## Coniche degeneri e coniche con parametro

::::teorema{#coniche-degeneri titolo="Classificazione delle coniche degeneri"}
Sia data una conica con $I_3 = 0$.

- Se $I_2 < 0$, la conica è l'unione di **due rette reali incidenti** nel centro.
- Se $I_2 > 0$, la conica è l'unione di due rette complesse coniugate, incidenti nel centro, che è il suo *unico* punto reale.
- Se $I_2 = 0$, la conica è l'unione di **due rette parallele**, reali e distinte, complesse coniugate oppure coincidenti; sono coincidenti se e solo se $\operatorname{rk} A = 1$.

Per scrivere le due rette si fattorizza il polinomio, per esempio risolvendo l'equazione come equazione di secondo grado in una delle due variabili, il cui discriminante risulta un quadrato perfetto.

:::dimostrazione
Se $I_2 \neq 0$, la forma canonica è $\lambda_1 X^2 + \lambda_2 Y^2 = 0$. Con autovalori discordi il primo membro si scompone come $\left( \sqrt{|\lambda_1|}\, X - \sqrt{|\lambda_2|}\, Y \right)\left( \sqrt{|\lambda_1|}\, X + \sqrt{|\lambda_2|}\, Y \right)$, prodotto di due fattori lineari reali; con autovalori concordi l'unica soluzione reale è $X = Y = 0$. Se $I_2 = 0$, con la rotazione usata per la parabola l'equazione diventa $I_1 Y^2 + 2\beta X + 2\gamma Y + \delta = 0$ con $-I_1 \beta^2 = I_3 = 0$, quindi $\beta = 0$ e l'equazione $I_1 Y^2 + 2\gamma Y + \delta = 0$ contiene solo $Y$; le sue due radici, reali distinte, coincidenti o complesse, danno due rette $Y = \text{costante}$.
:::
::::

:::esempio{titolo="Due rette incidenti"}
La conica $x^2 - y^2 + 2x + 4y - 3 = 0$ ha
$$
A = \begin{pmatrix}
1 & 0 & 1 \\
0 & -1 & 2 \\
1 & 2 & -3
\end{pmatrix} ,
\qquad
I_3 = 0 ,
\qquad
I_2 = -1 < 0 ,
$$
quindi è formata da due rette reali incidenti. Completando i quadrati si ottiene $(x + 1)^2 - (y - 2)^2 = 0$, e la differenza di quadrati si scompone in
$$
(x - y + 3)(x + y - 1) = 0 .
$$
Le due rette si incontrano nel centro $(-1, 2)$.

::grafico{f="x+3;1-x" punti="-1,2,pieno" xmin=-5 xmax=3 ymin=-2 ymax=5 uguale=1 titolo="La conica degenere $x^2 - y^2 + 2x + 4y - 3 = 0$: le rette $x - y + 3 = 0$ (in colore) e $x + y - 1 = 0$ (tratteggiata), incidenti nel centro $(-1, 2)$"}

:::

:::osservazione{#coniche-con-parametro titolo="Coniche con parametro"}
Quando l'equazione dipende da un parametro $k$, gli invarianti $I_3(k)$, $I_2(k)$ e $I_1(k)$ sono polinomi in $k$. Si trovano gli zeri di $I_3(k)$, che danno le coniche degeneri, e lo studio del segno di $I_2(k)$ separa ellissi, parabole e iperboli; per i valori con $I_2 > 0$ il segno di $I_1 I_3$ distingue le ellissi reali da quelle immaginarie. I valori di $k$ degeneri si studiano a parte, sostituendoli nell'equazione.
:::

:::esempio
Per $x^2 + 2kxy + y^2 - 1 = 0$ si ha
$$
I_3 = k^2 - 1 ,
\qquad
I_2 = 1 - k^2 ,
\qquad
I_1 = 2 .
$$
Per $k = \pm 1$ la conica è degenere e l'equazione diventa $(x \pm y)^2 = 1$, cioè le due rette parallele $x \pm y = 1$ e $x \pm y = -1$. Per $|k| < 1$ si ha $I_2 > 0$ e $I_1 I_3 = 2(k^2 - 1) < 0$, quindi un'**ellisse reale**, che per $k = 0$ è la circonferenza $x^2 + y^2 = 1$. Per $|k| > 1$ si ha $I_2 < 0$, quindi un'**iperbole**.
:::

## Le quadriche e la loro matrice

:::definizione{#quadrica titolo="Quadrica e matrice associata"}
Una **quadrica** è l'insieme dei punti $(x, y, z)$ dello spazio che soddisfano un'equazione di secondo grado
$$
\begin{aligned}
&a_{11}x^2 + a_{22}y^2 + a_{33}z^2 + 2a_{12}xy + 2a_{13}xz + 2a_{23}yz \\[4pt]
&\quad + 2a_{14}x + 2a_{24}y + 2a_{34}z + a_{44} = 0 .
\end{aligned}
$$
Come per le coniche, la **matrice associata** è la matrice simmetrica $A = (a_{ij})$ di ordine $4$, e $A_0$ è il blocco $3 \times 3$ dei termini di secondo grado:
$$
A = \begin{pmatrix}
a_{11} & a_{12} & a_{13} & a_{14} \\
a_{12} & a_{22} & a_{23} & a_{24} \\
a_{13} & a_{23} & a_{33} & a_{34} \\
a_{14} & a_{24} & a_{34} & a_{44}
\end{pmatrix} .
$$
La quadrica si dice **degenere** se $\det A = 0$. Gli invarianti per rototraslazioni dello spazio sono $\det A$ e gli autovalori di $A_0$, con la stessa dimostrazione del caso delle coniche.
:::

:::teorema{#forma-canonica-quadriche titolo="Forma canonica delle quadriche"}
Sia data una quadrica con matrice $A$ e siano $\lambda_1, \lambda_2, \lambda_3$ gli autovalori di $A_0$.

- Se $\det A_0 \neq 0$, la quadrica ha un unico centro, soluzione di $A_0 c = -b$ con $b = (a_{14}, a_{24}, a_{34})^T$, e una rototraslazione la porta in $\lambda_1 X^2 + \lambda_2 Y^2 + \lambda_3 Z^2 + \dfrac{\det A}{\det A_0} = 0$.
- Se $\det A_0 = 0$ e $\det A \neq 0$, allora $\operatorname{rk} A_0 = 2$ e, detti $\lambda_1, \lambda_2$ gli autovalori non nulli, una rototraslazione la porta in $\lambda_1 X^2 + \lambda_2 Y^2 = 2qZ$, con $q^2 = -\dfrac{\det A}{\lambda_1 \lambda_2}$.

La dimostrazione ripete quella delle coniche con la matrice di rototraslazione di ordine $4$: la rotazione diagonalizza $A_0$ per il teorema spettrale e la traslazione elimina i termini lineari che si possono eliminare. Il secondo caso segue dal calcolo $\det A' = -\lambda_1 \lambda_2\, q^2$ per la matrice della forma $\lambda_1 X^2 + \lambda_2 Y^2 - 2qZ = 0$.
:::

## Classificazione delle quadriche

:::definizione{#quadriche-non-degeneri titolo="Quadriche non degeneri"}
Le quadriche non degeneri, in forma canonica con $a, b, c > 0$, sono le seguenti.

- **Ellissoide**: $\dfrac{X^2}{a^2} + \dfrac{Y^2}{b^2} + \dfrac{Z^2}{c^2} = 1$; le sezioni con piani paralleli ai piani coordinati sono ellissi. Se due semiassi sono uguali è un ellissoide di rotazione, se lo sono tutti e tre è una sfera.
- **Iperboloide a una falda**: $\dfrac{X^2}{a^2} + \dfrac{Y^2}{b^2} - \dfrac{Z^2}{c^2} = 1$; le sezioni con $Z = \text{costante}$ sono ellissi, quelle con $X = 0$ o $Y = 0$ sono iperboli. È una superficie connessa.
- **Iperboloide a due falde**: $\dfrac{X^2}{a^2} + \dfrac{Y^2}{b^2} - \dfrac{Z^2}{c^2} = -1$; non ha punti con $|Z| < c$, quindi è formato da due parti separate.
- **Paraboloide ellittico**: $\dfrac{X^2}{a^2} + \dfrac{Y^2}{b^2} = 2Z$; le sezioni con $Z = \text{costante} > 0$ sono ellissi.
- **Paraboloide iperbolico** (sella): $\dfrac{X^2}{a^2} - \dfrac{Y^2}{b^2} = 2Z$; le sezioni con $X = 0$ e con $Y = 0$ sono parabole con concavità opposte.

C'è inoltre l'ellissoide immaginario $\dfrac{X^2}{a^2} + \dfrac{Y^2}{b^2} + \dfrac{Z^2}{c^2} = -1$, privo di punti reali.

::grafico{curve="1/cos(t),tan(t),-1.5,4.65;tan(t),1/cos(t),-1.5,4.65" segmenti="-3.5,-3.5,3.5,3.5;-3.5,3.5,3.5,-3.5" nomi="x,z" xmin=-4 xmax=4 ymin=-3.5 ymax=3.5 uguale=1 titolo="Sezioni con il piano $y = 0$: l'iperbole $x^2 - z^2 = 1$ dell'iperboloide a una falda $x^2 + y^2 - z^2 = 1$ (in colore) e l'iperbole $z^2 - x^2 = 1$ dell'iperboloide a due falde $x^2 + y^2 - z^2 = -1$ (tratteggiata); le rette $z = \pm x$ sono la sezione del cono $x^2 + y^2 = z^2$"}

::grafico{f="x^2/2;-x^2/2" nomi="x,z" xmin=-3 xmax=3 ymin=-3.5 ymax=3.5 uguale=1 titolo="Il paraboloide iperbolico $x^2 - y^2 = 2z$: la sezione con $y = 0$ è la parabola $z = \dfrac{x^2}{2}$ (in colore), la sezione con $x = 0$ è la parabola $z = -\dfrac{y^2}{2}$ (tratteggiata, con $y$ sull'asse orizzontale)"}

:::

:::definizione{#coni-e-cilindri titolo="Coni e cilindri"}
Le quadriche degeneri con $\operatorname{rk} A = 3$ sono coni e cilindri.

- **Cono**, se $\det A_0 \neq 0$: $\dfrac{X^2}{a^2} + \dfrac{Y^2}{b^2} - \dfrac{Z^2}{c^2} = 0$, con vertice nel centro. Se gli autovalori di $A_0$ sono concordi, l'equazione $\lambda_1 X^2 + \lambda_2 Y^2 + \lambda_3 Z^2 = 0$ ha come unico punto reale il vertice.
- **Cilindro**, se $\det A_0 = 0$: l'equazione canonica non contiene $Z$ ed è quella di una conica del piano $XY$, quindi il cilindro è **ellittico** $\dfrac{X^2}{a^2} + \dfrac{Y^2}{b^2} = 1$, **iperbolico** $\dfrac{X^2}{a^2} - \dfrac{Y^2}{b^2} = 1$ o **parabolico** $Y^2 = 2pX$.

Se $\operatorname{rk} A \leq 2$, la quadrica è una coppia di piani, reali o complessi, distinti o coincidenti.
:::

::::teorema{#riconoscimento-quadriche titolo="Riconoscimento delle quadriche non degeneri"}
Sia data una quadrica con $\det A \neq 0$.

- Se $\det A_0 \neq 0$ e gli autovalori di $A_0$ sono concordi, la quadrica è un **ellissoide**: reale se $\det A < 0$, immaginario se $\det A > 0$.
- Se $\det A_0 \neq 0$ e gli autovalori di $A_0$ non sono concordi, la quadrica è un **iperboloide**: a una falda se $\det A > 0$, a due falde se $\det A < 0$.
- Se $\det A_0 = 0$, la quadrica è un **paraboloide**: ellittico se $\det A < 0$, iperbolico se $\det A > 0$.

Il segno di $\det A$ e i segni degli autovalori bastano quindi a riconoscere la quadrica. Per $x^2 + 2y^2 + 2yz + 2z^2 - 4 = 0$ gli autovalori di $A_0$ sono $1, 1, 3$, concordi, e $\det A = 3 \cdot (-4) = -12 < 0$, quindi la forma canonica è $X^2 + Y^2 + 3Z^2 = 4$, un **ellissoide reale** di rotazione.

:::dimostrazione
Se $\det A_0 \neq 0$, la forma canonica è $\lambda_1 X^2 + \lambda_2 Y^2 + \lambda_3 Z^2 = -h$ con $h = \dfrac{\det A}{\det A_0}$, quindi $\det A = \lambda_1 \lambda_2 \lambda_3\, h$. Cambiando segno a tutta l'equazione, che non cambia il segno di $\det A$ perché $A$ ha ordine $4$, si può supporre che almeno due autovalori siano positivi. Con tre autovalori positivi, $\det A < 0$ equivale a $h < 0$, cioè a secondo membro positivo, quindi a un ellissoide reale; $\det A > 0$ dà secondo membro negativo e nessun punto reale. Con $\lambda_1, \lambda_2 > 0 > \lambda_3$, $\det A > 0$ equivale a $h < 0$, cioè a $\lambda_1 X^2 + \lambda_2 Y^2 - |\lambda_3| Z^2 = |h| > 0$, che è un iperboloide a una falda; $\det A < 0$ dà secondo membro negativo, quindi un iperboloide a due falde. Se $\det A_0 = 0$, dalla forma canonica $\det A = -\lambda_1 \lambda_2\, q^2$, quindi $\det A < 0$ equivale a $\lambda_1 \lambda_2 > 0$, paraboloide ellittico, e $\det A > 0$ a $\lambda_1 \lambda_2 < 0$, paraboloide iperbolico.
:::
::::
