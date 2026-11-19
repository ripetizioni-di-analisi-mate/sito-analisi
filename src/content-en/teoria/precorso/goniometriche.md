---
titolo: Trigonometric equations and inequalities
sommario: Sine, cosine and tangent on the unit circle, the identities that relate them and the solution methods for every type of trigonometric equation and inequality.
---

## The unit circle

:::definizione{#circonferenza-goniometrica titolo="Unit circle, sine and cosine"}
In the Cartesian plane every point is determined by two coordinates: the **abscissa**, read on the horizontal axis, and the **ordinate**, read on the vertical axis; the origin is the point with coordinates $(0, 0)$. The **unit circle** is the circle with center at the origin and radius $1$. An angle $x$, measured in radians from the positive half of the horizontal axis in the counterclockwise direction, determines a point $P$ on it, and one sets
$$
\cos x = \text{abscissa of } P, \qquad \sin x = \text{ordinate of } P .
$$
Since $P$ lies on the circle of radius $1$, we have $-1 \leq \sin x \leq 1$ and $-1 \leq \cos x \leq 1$. Adding $2\pi$ to the angle does not change the point $P$, therefore sine and cosine are **periodic** with period $2\pi$:
$$
\sin(x + 2\pi) = \sin x, \qquad \cos(x + 2\pi) = \cos x .
$$
Because of this periodicity, a trigonometric equation that has one solution has **infinitely many**, and the solutions are written as families depending on an integer.

::grafico{curve="cos(t),sin(t),0,6.29;0.25*cos(t),0.25*sin(t),0,1.047" uguale=1 xmin=-1.4 xmax=1.4 ymin=-1.3 ymax=1.3 segmenti="0,0,0.5,0.866" vettori="0,0,0.5,0;0.5,0,0.5,0.866,sin x" punti="0.5,0.866,pieno,P" etichette="0.28,0.2,x;0.1,-0.17,cos x" titolo="Unit circle: the angle $x$ determines the point $P$, with abscissa $\cos x$ and ordinate $\sin x$"}
:::

:::osservazione
The radian measure of an angle is the length of the arc that the angle determines on the unit circle. The full turn measures $2\pi$, so the angle of $180°$ corresponds to $\pi$. If $\alpha$ is the measure in degrees and $x$ the measure in radians, the proportion $\alpha : 180 = x : \pi$ therefore holds, that is,
$$
x = \frac{\pi}{180}\,\alpha .
$$
For example, the angle of $150°$ measures $\dfrac{150}{180}\,\pi = \dfrac{5\pi}{6}$, and the angle of $45°$ measures $\dfrac{\pi}{4}$. The solutions of trigonometric equations are written in radians, like the period $2\pi$ that appears in the families of solutions.
:::

:::definizione{#tangente titolo="Tangent"}
$$
\tan x = \frac{\sin x}{\cos x}, \qquad \text{for } \cos x \neq 0, \ \text{that is } x \neq \frac{\pi}{2} + n\pi, \ n \in \mathbb{Z} .
$$
The tangent is **periodic** with period $\pi$: adding $\pi$ to the angle changes the sign of both sine and cosine, therefore their ratio **does not change**. On the unit circle, $\tan x$ is the ordinate of the point where the line through the origin and $P$ intersects the line tangent to the circle at the point $(1, 0)$.

::grafico{curve="cos(t),sin(t),0,6.29" uguale=1 xmin=-1.4 xmax=1.6 ymin=-1.3 ymax=1.4 segmenti="1,-1.3,1,1.4;0,0,1,1" vettori="1,0,1,1,tan x" punti="0.7071,0.7071,pieno,P;1,1,pieno,T" titolo="$\tan x$ is the ordinate of the point $T$ where the line $OP$ meets the line tangent to the circle at $(1, 0)$; here $x = \dfrac{\pi}{4}$ and $\tan x = 1$"}
:::

:::osservazione
The sign of sine and cosine is the sign of the coordinates of $P$, so it depends on the quadrant in which $P$ lies; the tangent is positive when sine and cosine have the same sign.

- First quadrant, $0 < x < \dfrac{\pi}{2}$: $\sin x > 0$, $\cos x > 0$, $\tan x > 0$.
- Second quadrant, $\dfrac{\pi}{2} < x < \pi$: $\sin x > 0$, $\cos x < 0$, $\tan x < 0$.
- Third quadrant, $\pi < x < \dfrac{3\pi}{2}$: $\sin x < 0$, $\cos x < 0$, $\tan x > 0$.
- Fourth quadrant, $\dfrac{3\pi}{2} < x < 2\pi$: $\sin x < 0$, $\cos x > 0$, $\tan x < 0$.

For example, $\dfrac{4\pi}{3} = \pi + \dfrac{\pi}{3}$ lies in the third quadrant, so $\sin\dfrac{4\pi}{3} = -\dfrac{\sqrt{3}}{2}$ and $\cos\dfrac{4\pi}{3} = -\dfrac{1}{2}$, while $\tan\dfrac{4\pi}{3} = \sqrt{3}$ is positive. The sign in the quadrants is used to choose the correct sign when a value is obtained from the Pythagorean identity.
:::

:::definizione{#valori-notevoli titolo="Special values"}
| $x$ | $0$ | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ | $\pi$ | $\dfrac{3\pi}{2}$ |
|---|---|---|---|---|---|---|---|
| $\sin x$ | $0$ | $\dfrac{1}{2}$ | $\dfrac{\sqrt{2}}{2}$ | $\dfrac{\sqrt{3}}{2}$ | $1$ | $0$ | $-1$ |
| $\cos x$ | $1$ | $\dfrac{\sqrt{3}}{2}$ | $\dfrac{\sqrt{2}}{2}$ | $\dfrac{1}{2}$ | $0$ | $-1$ | $0$ |
| $\tan x$ | $0$ | $\dfrac{\sqrt{3}}{3}$ | $1$ | $\sqrt{3}$ | undefined | $0$ | undefined |

These values, together with the symmetries of related angles, cover *all* the special angles of the circle. The solutions of the trigonometric equations in the exercises are almost always expressed with angles from this table.
:::

## The identities

::::teorema{#identita-fondamentale titolo="Pythagorean identity"}
For every $x \in \mathbb{R}$,
$$
\sin^2 x + \cos^2 x = 1 .
$$
It is the **Pythagorean theorem** applied to the triangle with legs $|\cos x|$ and $|\sin x|$ and hypotenuse the radius $1$. It is used to pass from one function to the other: given $\sin x$, the value of $\cos x$ is determined **up to sign**, and the sign is read from the quadrant in which the angle lies. In equations it allows one to write $\sin^2 x = 1 - \cos^2 x$, and with this substitution an equation containing both functions reduces to one containing *a single* function.

:::dimostrazione
The idea is to write that the point $P$ is at distance $1$ from the origin. The point $P = (\cos x, \sin x)$ lies on the circle with center $O = (0, 0)$ and radius $1$, so $\overline{OP} = 1$. By the formula for the distance between two points, which is found in the chapter on analytic geometry,
$$
\overline{OP} = \sqrt{(\cos x - 0)^2 + (\sin x - 0)^2} = \sqrt{\cos^2 x + \sin^2 x} .
$$
Therefore $\sqrt{\cos^2 x + \sin^2 x} = 1$. Both sides are nonnegative, so squaring them gives the equivalent equality $\cos^2 x + \sin^2 x = 1$.
:::
::::

:::esempio
If $\sin x = \dfrac{3}{5}$ and $x$ lies in the second quadrant, then $\cos^2 x = 1 - \dfrac{9}{25} = \dfrac{16}{25}$. In the second quadrant the cosine is **negative**, therefore $\cos x = -\dfrac{4}{5}$.
:::

:::osservazione
Dividing the Pythagorean identity by $\cos^2 x$, with $\cos x \neq 0$, gives
$$
\frac{\sin^2 x}{\cos^2 x} + 1 = \frac{1}{\cos^2 x},
\qquad\text{that is}\qquad
1 + \tan^2 x = \frac{1}{\cos^2 x} .
$$
This form makes it possible to obtain the cosine when the tangent is known. If $\tan x = 2$ and $x$ lies in the third quadrant, then $\cos^2 x = \dfrac{1}{1 + 4} = \dfrac{1}{5}$. In the third quadrant the cosine is negative, so $\cos x = -\dfrac{1}{\sqrt{5}} = -\dfrac{\sqrt{5}}{5}$, and from $\sin x = \tan x \cos x$ it follows that $\sin x = -\dfrac{2\sqrt{5}}{5}$.
:::

:::teorema{#angoli-associati titolo="Related angles"}
For every $x \in \mathbb{R}$:

- $\sin(-x) = -\sin x$ and $\cos(-x) = \cos x$;
- $\sin(\pi - x) = \sin x$ and $\cos(\pi - x) = -\cos x$;
- $\sin(\pi + x) = -\sin x$ and $\cos(\pi + x) = -\cos x$;
- $\sin\left(\dfrac{\pi}{2} - x\right) = \cos x$ and $\cos\left(\dfrac{\pi}{2} - x\right) = \sin x$.

They follow from the **symmetries** of the unit circle with respect to the axes and to the bisector of the first quadrant. They make it possible to reduce *every* angle to the first quadrant and to turn a cosine into a sine, for example in equations of the form $\sin A = \cos B$. From the second line it follows that $\cos\dfrac{5\pi}{6} = \cos\left(\pi - \dfrac{\pi}{6}\right) = -\cos\dfrac{\pi}{6} = -\dfrac{\sqrt{3}}{2}$.

::grafico{curve="cos(t),sin(t),0,6.29" uguale=1 xmin=-1.7 xmax=1.7 ymin=-1.3 ymax=1.3 segmenti="0,0,0.866,0.5;0,0,-0.866,0.5;0,0,-0.866,-0.5;0,0,0.866,-0.5;-0.866,0.5,0.866,0.5;0.866,0.5,0.866,-0.5" punti="0.866,0.5;-0.866,0.5;-0.866,-0.5;0.866,-0.5" etichette="0.95,0.6,x;-1.35,0.62,π − x;-1.35,-0.72,π + x;0.95,-0.72,−x" titolo="With $x = \dfrac{\pi}{6}$: the point of $\pi - x$ is symmetric with respect to the $y$-axis, that of $-x$ with respect to the $x$-axis, that of $\pi + x$ with respect to the origin"}
:::

:::teorema{#formule-di-addizione titolo="Addition and double-angle formulas"}
For every $a, b \in \mathbb{R}$:
$$
\begin{gathered}
\sin(a \pm b) = \sin a \cos b \pm \cos a \sin b, \\[4pt]
\cos(a \pm b) = \cos a \cos b \mp \sin a \sin b .
\end{gathered}
$$
Setting $b = a$ in the formulas with the plus sign gives the **double-angle formulas**:
$$
\sin 2a = 2 \sin a \cos a, \qquad \cos 2a = \cos^2 a - \sin^2 a = 1 - 2\sin^2 a = 2\cos^2 a - 1 .
$$
The two alternative forms of $\cos 2a$ follow from the **Pythagorean identity** and are used when an equation contains $\cos 2x$ together with $\sin x$ or with $\cos x$: the right form turns it into a quadratic equation in a single function.
:::

:::esempio
With the **cosine subtraction formula**:
$$
\begin{aligned}
\cos\frac{\pi}{12} = \cos\left(\frac{\pi}{3} - \frac{\pi}{4}\right)
&= \cos\frac{\pi}{3}\cos\frac{\pi}{4} + \sin\frac{\pi}{3}\sin\frac{\pi}{4} \\[6pt]
&= \frac{1}{2}\cdot\frac{\sqrt{2}}{2} + \frac{\sqrt{3}}{2}\cdot\frac{\sqrt{2}}{2}
= \frac{\sqrt{2} + \sqrt{6}}{4} .
\end{aligned}
$$
:::

:::esempio
Let $a$ be an angle in the second quadrant with $\sin a = \dfrac{3}{5}$ and $\cos a = -\dfrac{4}{5}$. With the **double-angle formulas**:
$$
\begin{aligned}
\sin 2a &= 2 \cdot \frac{3}{5} \cdot \left(-\frac{4}{5}\right) = -\frac{24}{25}, \\[6pt]
\cos 2a &= 1 - 2 \cdot \frac{9}{25} = \frac{25 - 18}{25} = \frac{7}{25} .
\end{aligned}
$$
The sine of $2a$ is negative and the cosine is positive, so the point associated with the angle $2a$ lies in the fourth quadrant.
:::

:::attenzione
The sine of a sum is in general different from the sum of the sines. With $a = b = \dfrac{\pi}{4}$ we have
$$
\sin\left(\frac{\pi}{4} + \frac{\pi}{4}\right) = \sin\frac{\pi}{2} = 1,
\qquad
\sin\frac{\pi}{4} + \sin\frac{\pi}{4} = \sqrt{2} .
$$
Likewise $\sin 2x$ is different from $2\sin x$: for $x = \dfrac{\pi}{2}$ we have $\sin\pi = 0$, while $2\sin\dfrac{\pi}{2} = 2$.
:::

## The graphs of sine and cosine

:::osservazione
The graph of the sine is the **sine wave**: over one period it starts at $0$, rises to $1$ at $\dfrac{\pi}{2}$, returns to $0$ at $\pi$, falls to $-1$ at $\dfrac{3\pi}{2}$ and rises back to $0$ at $2\pi$. The graph of the cosine has the same shape, shifted $\dfrac{\pi}{2}$ to the left, since $\cos x = \sin\left(x + \dfrac{\pi}{2}\right)$.

::grafico{f="sin(x)" xmin=-6.3 xmax=6.3 ymin=-1.5 ymax=1.5 titolo="$y = \sin x$ over two periods"}

::grafico{f="cos(x)" xmin=-6.3 xmax=6.3 ymin=-1.5 ymax=1.5 titolo="$y = \cos x$ over two periods"}

The solutions of the elementary equations can be read from the graph: for $|k| < 1$ the horizontal line $y = k$ intersects the sine wave at **two points** in each period, therefore the solutions form **two families**.
:::

## Elementary equations

:::teorema{#equazioni-elementari titolo="Elementary equations"}
Let $k \in \mathbb{R}$ and let $n \in \mathbb{Z}$.

- $\sin x = k$ with $|k| \leq 1$: if $\alpha$ is an angle with $\sin \alpha = k$, the solutions are
$$
x = \alpha + 2n\pi \quad \text{or} \quad x = \pi - \alpha + 2n\pi .
$$
- $\cos x = k$ with $|k| \leq 1$: if $\alpha$ is an angle with $\cos \alpha = k$, the solutions are
$$
x = \alpha + 2n\pi \quad \text{or} \quad x = -\alpha + 2n\pi .
$$
- $\tan x = k$, for every $k \in \mathbb{R}$: if $\alpha$ is an angle with $\tan \alpha = k$, the solutions are
$$
x = \alpha + n\pi .
$$
- $\sin x = k$ and $\cos x = k$ with $|k| > 1$ **have no solutions**, since sine and cosine take *only* values between $-1$ and $1$.

On the unit circle: the points with ordinate $k$ are the two points of angles $\alpha$ and $\pi - \alpha$, symmetric with respect to the vertical axis; the points with abscissa $k$ are the two points of angles $\alpha$ and $-\alpha$, symmetric with respect to the horizontal axis. The tangent has period $\pi$, hence its solutions are **half a turn** apart.

::grafico{curve="cos(t),sin(t),0,6.29" uguale=1 xmin=-1.4 xmax=1.4 ymin=-1.3 ymax=1.3 segmenti="-1.4,0.866,1.4,0.866;0,0,0.5,0.866;0,0,-0.5,0.866" punti="0.5,0.866,pieno,π/3;-0.5,0.866,pieno,2π/3" titolo="$\sin x = \dfrac{\sqrt{3}}{2}$: the line $y = \dfrac{\sqrt{3}}{2}$ meets the circle at the two points of angles $\dfrac{\pi}{3}$ and $\dfrac{2\pi}{3}$"}
:::

:::esempio{titolo="Three elementary equations"}
- $\sin x = \dfrac{\sqrt{3}}{2}$: from the table $\alpha = \dfrac{\pi}{3}$, therefore $x = \dfrac{\pi}{3} + 2n\pi$ or $x = \dfrac{2\pi}{3} + 2n\pi$.
- $\cos x = -\dfrac{1}{2}$: an angle with this cosine is $\alpha = \dfrac{2\pi}{3}$, therefore $x = \pm\dfrac{2\pi}{3} + 2n\pi$.
- $\tan x = 1$: $\alpha = \dfrac{\pi}{4}$, therefore $x = \dfrac{\pi}{4} + n\pi$.
:::

:::attenzione
The angle $\alpha$ read from the table gives *only one* of the two families. For $\sin x = \dfrac{1}{2}$ the family $x = \dfrac{\pi}{6} + 2n\pi$ does not contain $\dfrac{5\pi}{6}$, which is a solution because $\sin\dfrac{5\pi}{6} = \sin\left(\pi - \dfrac{\pi}{6}\right) = \dfrac{1}{2}$. The second family is obtained from the supplementary angle $\pi - \alpha$ for the sine and from the opposite angle $-\alpha$ for the cosine.
:::

:::osservazione
For the values $0$, $1$ and $-1$ the two families merge into one:

- $\sin x = 0$ for $x = n\pi$; $\sin x = 1$ for $x = \dfrac{\pi}{2} + 2n\pi$; $\sin x = -1$ for $x = -\dfrac{\pi}{2} + 2n\pi$;
- $\cos x = 0$ for $x = \dfrac{\pi}{2} + n\pi$; $\cos x = 1$ for $x = 2n\pi$; $\cos x = -1$ for $x = \pi + 2n\pi$.

For $\sin x = 1$ we have $\alpha = \dfrac{\pi}{2}$ and $\pi - \alpha = \dfrac{\pi}{2}$, so the two families coincide. For $\sin x = 0$ the families $x = 2n\pi$ and $x = \pi + 2n\pi$ together contain all the integer multiples of $\pi$, therefore they are written as $x = n\pi$.
:::

:::esempio{titolo="Argument a multiple of the unknown"}
$\sin 2x = \dfrac{1}{2}$. The equation is elementary in the unknown $2x$, so
$$
2x = \frac{\pi}{6} + 2n\pi \quad \text{or} \quad 2x = \frac{5\pi}{6} + 2n\pi .
$$
Dividing the *whole* right-hand side by $2$, including the term $2n\pi$, gives
$$
x = \frac{\pi}{12} + n\pi \quad \text{or} \quad x = \frac{5\pi}{12} + n\pi .
$$
The solutions repeat every $\pi$, so in the interval $[0, 2\pi)$, that is, for $0 \leq x < 2\pi$, there are four of them: $\dfrac{\pi}{12}$, $\dfrac{5\pi}{12}$, $\dfrac{13\pi}{12}$ and $\dfrac{17\pi}{12}$.

::grafico{f="sin(2*x);0.5" xmin=-0.3 xmax=6.6 ymin=-1.5 ymax=1.5 punti="0.2618,0.5,pieno;1.309,0.5,pieno;3.4034,0.5,pieno;4.4506,0.5,pieno" titolo="On $[0, 2\pi)$ the graph of $y = \sin 2x$ meets the line $y = \dfrac{1}{2}$ at $\dfrac{\pi}{12}$, $\dfrac{5\pi}{12}$, $\dfrac{13\pi}{12}$ and $\dfrac{17\pi}{12}$"}
:::

## Equations reducible to elementary ones

:::teorema{#riconducibili-a-elementari titolo="Equality of two sines or of two cosines"}
For $n \in \mathbb{Z}$:

- $\sin A = \sin B$ *if and only if* $A = B + 2n\pi$ or $A = \pi - B + 2n\pi$;
- $\cos A = \cos B$ *if and only if* $A = B + 2n\pi$ or $A = -B + 2n\pi$.

The alternatives are the same as for the elementary equations: two angles have the same sine when they coincide up to full turns or are **supplementary** up to full turns, and the same cosine when they coincide or are **negatives of each other** up to full turns. An equation of the form $\sin A = \cos B$ is brought into this form with **related angles**, by writing $\cos B = \sin\left(\dfrac{\pi}{2} - B\right)$.
:::

:::esempio
$\sin 2x = \sin\left(x + \dfrac{\pi}{3}\right)$. The two alternatives are
$$
2x = x + \frac{\pi}{3} + 2n\pi \quad \text{or} \quad 2x = \pi - x - \frac{\pi}{3} + 2n\pi ,
$$
therefore the first gives $x = \dfrac{\pi}{3} + 2n\pi$, and the second gives $3x = \dfrac{2\pi}{3} + 2n\pi$, that is $x = \dfrac{2\pi}{9} + \dfrac{2n\pi}{3}$.
:::

## Quadratic equations in sine or cosine

:::teorema{#secondo-grado-goniometriche titolo="Quadratic equations in sine or cosine"}
An equation of the form $a\sin^2 x + b\sin x + c = 0$ is solved with the **substitution** $t = \sin x$, which turns it into the system
$$
\begin{cases}
a t^2 + b t + c = 0 \\[4pt]
-1 \leq t \leq 1
\end{cases}
$$
Each root $t$ with $|t| \leq 1$ gives the elementary equation $\sin x = t$; a root with $|t| > 1$ **must be discarded**, because the condition $-1 \leq t \leq 1$ is not satisfied. The same procedure applies with $t = \cos x$. If the equation contains both $\sin^2 x$ and $\cos x$, the substitution $\sin^2 x = 1 - \cos^2 x$, which follows from the **Pythagorean identity**, expresses it in terms of a single function.
:::

:::esempio
$2\cos^2 x - \cos x - 1 = 0$. Setting $t = \cos x$, the equation $2t^2 - t - 1 = 0$ has roots $t = 1$ and $t = -\dfrac{1}{2}$, both **acceptable**. From $\cos x = 1$ it follows that $x = 2n\pi$; from $\cos x = -\dfrac{1}{2}$ it follows that $x = \pm\dfrac{2\pi}{3} + 2n\pi$.
:::

:::esempio{titolo="Equation with no constant term"}
$2\sin^2 x - \sin x = 0$. Factoring out $\sin x$, the equation becomes $\sin x\,(2\sin x - 1) = 0$, and a product is zero if and only if at least one factor is zero. From $\sin x = 0$ it follows that $x = n\pi$; from $\sin x = \dfrac{1}{2}$ it follows that $x = \dfrac{\pi}{6} + 2n\pi$ or $x = \dfrac{5\pi}{6} + 2n\pi$. Dividing by $\sin x$ would have removed the family $x = n\pi$, which consists of solutions because for $x = n\pi$ both terms equal $0$.
:::

## Homogeneous and linear equations

:::teorema{#omogenee-e-lineari titolo="Homogeneous quadratic equations"}
An equation of the form
$$
a\sin^2 x + b\sin x \cos x + c\cos^2 x = 0
$$
is called **homogeneous of degree two** in sine and cosine. If $a \neq 0$, the points with $\cos x = 0$ are *not* solutions, because for them $\sin^2 x = 1$ and the left-hand side equals $a \neq 0$. One can therefore divide by $\cos^2 x$, obtaining the quadratic equation
$$
a\tan^2 x + b\tan x + c = 0 ,
$$
whose roots give elementary equations in the tangent. If $a = 0$, one factors out $\cos x$ and the equation **splits into two factors**.
:::

:::esempio{titolo="Case with $a = 0$"}
$\sin x \cos x - \sqrt{3}\cos^2 x = 0$. The term in $\sin^2 x$ is missing, so the points with $\cos x = 0$ are solutions and dividing by $\cos^2 x$ would lose them. Factoring out $\cos x$ gives
$$
\cos x\,\left(\sin x - \sqrt{3}\cos x\right) = 0 .
$$
The first factor gives $x = \dfrac{\pi}{2} + n\pi$. The points with $\cos x = 0$ do not make the second factor vanish, because there $\sin x = \pm 1$; we therefore divide by $\cos x$ and obtain $\tan x = \sqrt{3}$, that is, $x = \dfrac{\pi}{3} + n\pi$.
:::

:::osservazione
An equation of the form $a\sin^2 x + b\sin x \cos x + c\cos^2 x = d$, with $d \neq 0$, is brought back to a homogeneous equation by writing $d = d\,(\sin^2 x + \cos^2 x)$, by the Pythagorean identity. For example
$$
\begin{aligned}
\sin^2 x + \sin x \cos x &= 1 \\[4pt]
\sin^2 x + \sin x \cos x &= \sin^2 x + \cos^2 x \\[4pt]
\sin x \cos x - \cos^2 x &= 0 \\[4pt]
\cos x\,(\sin x - \cos x) &= 0 .
\end{aligned}
$$
From $\cos x = 0$ it follows that $x = \dfrac{\pi}{2} + n\pi$; from $\sin x = \cos x$, that is, $\tan x = 1$, it follows that $x = \dfrac{\pi}{4} + n\pi$.
:::

::::teorema{#angolo-aggiunto titolo="Auxiliary angle method"}
Let $a, b$ be not both zero and $R = \sqrt{a^2 + b^2}$. There *exists* an angle $\varphi$ such that
$$
\begin{cases}
\cos\varphi = \dfrac{a}{R} \\[8pt]
\sin\varphi = \dfrac{b}{R}
\end{cases}
$$
and for every $x$,
$$
a\sin x + b\cos x = R\sin(x + \varphi) .
$$
The equality is verified by expanding $R\sin(x + \varphi)$ with the **sine addition formula**. With this form, the linear equation $a\sin x + b\cos x = c$ becomes the elementary equation $\sin(x + \varphi) = \dfrac{c}{R}$, which has solutions *if and only if* $|c| \leq R$.

:::dimostrazione
We show that the point with coordinates $\left(\dfrac{a}{R}, \dfrac{b}{R}\right)$ lies on the unit circle, then we expand $R\sin(x + \varphi)$. Since $a$ and $b$ are not both zero, $R > 0$ and the divisions by $R$ are allowed. We have
$$
\left(\frac{a}{R}\right)^2 + \left(\frac{b}{R}\right)^2 = \frac{a^2 + b^2}{R^2} = 1 ,
$$
so the point lies on the unit circle, and there exists an angle $\varphi$ of which it is the associated point, that is, with $\cos\varphi = \dfrac{a}{R}$ and $\sin\varphi = \dfrac{b}{R}$. By the sine addition formula,
$$
\begin{aligned}
R\sin(x + \varphi) &= R\,(\sin x \cos\varphi + \cos x \sin\varphi) \\[6pt]
&= R\left(\sin x \cdot \frac{a}{R} + \cos x \cdot \frac{b}{R}\right) \\[6pt]
&= a\sin x + b\cos x .
\end{aligned}
$$
:::
::::

:::esempio
$\sin x + \sqrt{3}\cos x = 1$. Here $R = \sqrt{1 + 3} = 2$, and from $\cos\varphi = \dfrac{1}{2}$, $\sin\varphi = \dfrac{\sqrt{3}}{2}$ it follows that $\varphi = \dfrac{\pi}{3}$. The equation becomes $2\sin\left(x + \dfrac{\pi}{3}\right) = 1$, that is $\sin\left(x + \dfrac{\pi}{3}\right) = \dfrac{1}{2}$, therefore
$$
x + \frac{\pi}{3} = \frac{\pi}{6} + 2n\pi \quad \text{or} \quad x + \frac{\pi}{3} = \frac{5\pi}{6} + 2n\pi ,
$$
which gives $x = -\dfrac{\pi}{6} + 2n\pi$ or $x = \dfrac{\pi}{2} + 2n\pi$.

::grafico{f="sin(x)+sqrt(3)*cos(x);1" xmin=-3.5 xmax=6.5 ymin=-2.5 ymax=2.5 punti="-0.5236,1,pieno;1.5708,1,pieno,π/2;5.7596,1,pieno,11π/6" etichette="-1.75,1.3,−π/6" titolo="$y = \sin x + \sqrt{3}\cos x = 2\sin\left(x + \dfrac{\pi}{3}\right)$ oscillates between $-2$ and $2$ and meets the line $y = 1$ at $-\dfrac{\pi}{6}$ and $\dfrac{\pi}{2}$, up to multiples of $2\pi$"}
:::

:::attenzione
Dividing by a factor that can vanish **loses solutions**. In the equation $\sin x \cos x = \cos x$, factoring gives $\cos x\,(\sin x - 1) = 0$, with the families $x = \dfrac{\pi}{2} + n\pi$ (from the first factor) and $x = \dfrac{\pi}{2} + 2n\pi$ (from the second, already contained in the first); dividing by $\cos x$ would have left *only* $\sin x = 1$.
:::

## Elementary inequalities

:::teorema{#disequazioni-goniometriche titolo="Elementary inequalities"}
The inequality $\sin x > k$ with $|k| < 1$ is read on the unit circle: the solutions are the angles whose point has ordinate greater than $k$. The procedure over one period:

1. solve the equation $\sin x = k$ over one turn, finding two angles;
2. the two corresponding points divide the circle into two arcs;
3. the arc whose points have ordinate greater than $k$ gives the interval of solutions;
4. the general solution is obtained by adding $2n\pi$ to the endpoints of the interval.

For $\cos x > k$ the procedure is the same, with the abscissa in place of the ordinate. If $k \geq 1$ the inequality $\sin x > k$ **has no solutions**, because the sine does not exceed $1$; if $k = -1$ all $x$ are solutions except $x = \dfrac{3\pi}{2} + 2n\pi$, where the sine equals $-1$; if $k < -1$ *every* $x \in \mathbb{R}$ is a solution.
:::

:::esempio
$\sin x > \dfrac{1}{2}$. On $[0, 2\pi)$ the equation $\sin x = \dfrac{1}{2}$ has solutions $\dfrac{\pi}{6}$ and $\dfrac{5\pi}{6}$; the arc with ordinate greater than $\dfrac{1}{2}$ is the **upper** one, therefore the solutions over one period are $\dfrac{\pi}{6} < x < \dfrac{5\pi}{6}$ and the general solution is
$$
\frac{\pi}{6} + 2n\pi < x < \frac{5\pi}{6} + 2n\pi, \qquad n \in \mathbb{Z} .
$$

::grafico{curve="cos(t),sin(t),0.5236,2.618;cos(t),sin(t),2.618,6.8068" uguale=1 xmin=-1.4 xmax=1.4 ymin=-1.3 ymax=1.3 segmenti="-1.4,0.5,1.4,0.5;0,0,0.866,0.5;0,0,-0.866,0.5" punti="0.866,0.5,vuoto,π/6;-0.866,0.5,vuoto,5π/6" titolo="$\sin x > \dfrac{1}{2}$: the solid arc, with ordinate greater than $\dfrac{1}{2}$, goes from $\dfrac{\pi}{6}$ to $\dfrac{5\pi}{6}$, endpoints excluded"}
:::

:::esempio
$\cos x > -\dfrac{\sqrt{2}}{2}$. On $[0, 2\pi)$ the equation $\cos x = -\dfrac{\sqrt{2}}{2}$ has solutions $\dfrac{3\pi}{4}$ and $\dfrac{5\pi}{4}$; the arc with abscissa greater than $-\dfrac{\sqrt{2}}{2}$ is the one containing the point of angle $0$, therefore the solutions on $[0, 2\pi)$ are $\left[0, \dfrac{3\pi}{4}\right) \cup \left(\dfrac{5\pi}{4}, 2\pi\right)$, that is, $0 \leq x < \dfrac{3\pi}{4}$ or $\dfrac{5\pi}{4} < x < 2\pi$, and the general solution is
$$
-\frac{3\pi}{4} + 2n\pi < x < \frac{3\pi}{4} + 2n\pi, \qquad n \in \mathbb{Z} .
$$

::grafico{f="cos(x);-0.7071" xmin=-6.5 xmax=6.5 ymin=-1.5 ymax=1.5 area="cos(x);-0.7071;-2.356;2.356|cos(x);-0.7071;3.927;6.5|cos(x);-0.7071;-6.5;-3.927" punti="-2.356,-0.7071,vuoto,−3π/4;2.356,-0.7071,vuoto,3π/4" titolo="$\cos x > -\dfrac{\sqrt{2}}{2}$: the graph of the cosine lies above the line $y = -\dfrac{\sqrt{2}}{2}$ for $-\dfrac{3\pi}{4} < x < \dfrac{3\pi}{4}$, up to multiples of $2\pi$"}
:::

:::attenzione
If the arc of solutions contains the point of angle $0$, the angles found on $[0, 2\pi)$, taken in the order in which the arc runs through them, do not form an interval. For $\cos x > -\dfrac{\sqrt{2}}{2}$ the expression $\dfrac{5\pi}{4} + 2n\pi < x < \dfrac{3\pi}{4} + 2n\pi$ describes the empty set, because $\dfrac{5\pi}{4} > \dfrac{3\pi}{4}$. The endpoint $\dfrac{5\pi}{4}$ is replaced by the angle $\dfrac{5\pi}{4} - 2\pi = -\dfrac{3\pi}{4}$, which determines the same point, and we obtain $-\dfrac{3\pi}{4} + 2n\pi < x < \dfrac{3\pi}{4} + 2n\pi$.
:::

:::esempio{titolo="Inequality with the tangent"}
$\tan x > 1$. The tangent has period $\pi$ and is increasing on the interval $\left(-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right)$, where it is defined. In this interval $\tan x = 1$ for $x = \dfrac{\pi}{4}$, so the inequality is satisfied for $\dfrac{\pi}{4} < x < \dfrac{\pi}{2}$. The endpoint $\dfrac{\pi}{2}$ is excluded because the tangent is not defined there. Adding $n\pi$ gives the general solution
$$
\frac{\pi}{4} + n\pi < x < \frac{\pi}{2} + n\pi, \qquad n \in \mathbb{Z} .
$$

::grafico{f="tan(x);1" xmin=-1.7 xmax=1.7 ymin=-3.5 ymax=3.5 asintoti="x=-1.5708;x=1.5708" segmenti="0.7854,0,0.7854,1" punti="0.7854,1,vuoto,π/4" titolo="$\tan x > 1$ in $\left(-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right)$: the graph of the tangent lies above the line $y = 1$ for $\dfrac{\pi}{4} < x < \dfrac{\pi}{2}$"}
:::

## Inequalities reducible to elementary ones

:::teorema{#disequazioni-riconducibili titolo="Quadratic and rational inequalities"}
A quadratic inequality in a single trigonometric function, for example $a\sin^2 x + b\sin x + c > 0$, is solved with the substitution $t = \sin x$:

1. solve the algebraic inequality $a t^2 + b t + c > 0$, finding one or two intervals of values of $t$;
2. intersect these intervals with $[-1, 1]$, because the sine takes only values in $[-1, 1]$;
3. each remaining condition on $t$ is an elementary inequality in $\sin x$, which is solved on the unit circle;
4. the solutions of alternative conditions are joined, those of conditions to be satisfied together are intersected.

In a rational inequality $\dfrac{N(x)}{D(x)} > 0$ the sign of $N(x)$ and that of $D(x)$ are studied separately over one period and compared with the rule of signs; the points where $D(x) = 0$ are excluded in every case, because the fraction is not defined there.
:::

:::esempio
$2\sin^2 x - \sin x - 1 < 0$ on $[0, 2\pi)$. With $t = \sin x$ the trinomial $2t^2 - t - 1$ has roots $t = -\dfrac{1}{2}$ and $t = 1$, and since the coefficient of $t^2$ is positive the trinomial is negative between the roots. The inequality is therefore equivalent to the system
$$
\begin{cases}
\sin x > -\dfrac{1}{2} \\[8pt]
\sin x < 1
\end{cases}
$$
The first inequality is satisfied on $\left[0, \dfrac{7\pi}{6}\right) \cup \left(\dfrac{11\pi}{6}, 2\pi\right)$, that is, for $0 \leq x < \dfrac{7\pi}{6}$ or $\dfrac{11\pi}{6} < x < 2\pi$. The second is satisfied for every $x$ except $x = \dfrac{\pi}{2}$, where the sine equals $1$. Therefore the solutions are
$$
0 \leq x < \frac{\pi}{2}, \qquad \frac{\pi}{2} < x < \frac{7\pi}{6}, \qquad \frac{11\pi}{6} < x < 2\pi .
$$

::grafico{f="sin(x);-0.5;1" xmin=-0.3 xmax=6.6 ymin=-1.5 ymax=1.5 area="sin(x);-0.5;0;3.6652|sin(x);-0.5;5.7596;6.2832" punti="1.5708,1,vuoto,π/2;3.6652,-0.5,vuoto,7π/6;5.7596,-0.5,vuoto,11π/6" titolo="$-\dfrac{1}{2} < \sin x < 1$ on $[0, 2\pi)$: the graph of the sine lies above the line $y = -\dfrac{1}{2}$, and the point $x = \dfrac{\pi}{2}$, where $\sin x = 1$, is excluded"}
:::
