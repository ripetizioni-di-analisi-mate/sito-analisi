---
titolo: Trigonometric equations and inequalities
sommario: Sine, cosine and tangent on the unit circle, the identities that relate them, and the solution methods for every type of trigonometric equation and inequality.
---

## The unit circle

:::definizione{#circonferenza-goniometrica titolo="Unit circle, sine and cosine"}
The **unit circle** is the circle with center at the origin and radius $1$. An angle $x$, measured in radians from the positive half of the horizontal axis in the counterclockwise direction, determines a point $P$ on it, and one sets
$$
\cos x = \text{abscissa of } P, \qquad \sin x = \text{ordinate of } P .
$$
Since $P$ lies on the circle of radius $1$, we have $-1 \leq \sin x \leq 1$ and $-1 \leq \cos x \leq 1$. Adding $2\pi$ to the angle does not change the point $P$, therefore sine and cosine are **periodic** with period $2\pi$:
$$
\sin(x + 2\pi) = \sin x, \qquad \cos(x + 2\pi) = \cos x .
$$
Because of this periodicity, a trigonometric equation that has one solution has infinitely many, and the solutions are written as **families** depending on an integer.
:::

:::definizione{#tangente titolo="Tangent"}
$$
\tan x = \frac{\sin x}{\cos x}, \qquad \text{for } \cos x \neq 0, \ \text{that is } x \neq \frac{\pi}{2} + n\pi, \ n \in \mathbb{Z} .
$$
The **tangent** is periodic with period $\pi$: adding $\pi$ to the angle changes the sign of *both* sine and cosine, therefore their ratio does **not change**. On the unit circle, $\tan x$ is the ordinate of the point where the line through the origin and $P$ intersects the line tangent to the circle at the point $(1, 0)$.
:::

:::definizione{#valori-notevoli titolo="Special values"}
| $x$ | $0$ | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ | $\pi$ | $\dfrac{3\pi}{2}$ |
|---|---|---|---|---|---|---|---|
| $\sin x$ | $0$ | $\dfrac{1}{2}$ | $\dfrac{\sqrt{2}}{2}$ | $\dfrac{\sqrt{3}}{2}$ | $1$ | $0$ | $-1$ |
| $\cos x$ | $1$ | $\dfrac{\sqrt{3}}{2}$ | $\dfrac{\sqrt{2}}{2}$ | $\dfrac{1}{2}$ | $0$ | $-1$ | $0$ |
| $\tan x$ | $0$ | $\dfrac{\sqrt{3}}{3}$ | $1$ | $\sqrt{3}$ | undefined | $0$ | undefined |

These values, together with the symmetries of **related angles**, cover *all* the special angles of the circle. The solutions of the trigonometric equations in the exercises are almost always expressed with angles from this table.
:::

## The identities

:::teorema{#identita-fondamentale titolo="Pythagorean identity"}
For every $x \in \mathbb{R}$,
$$
\sin^2 x + \cos^2 x = 1 .
$$
It is the **Pythagorean theorem** applied to the triangle with legs $|\cos x|$ and $|\sin x|$ and hypotenuse the radius $1$. It is used to pass from one function to the other: given $\sin x$, the value of $\cos x$ is determined **up to sign**, and the sign is read from the **quadrant** in which the angle lies. In equations it allows one to write $\sin^2 x = 1 - \cos^2 x$, and with this substitution an equation containing both functions reduces to one containing a single function.
:::

:::esempio
If $\sin x = \dfrac{3}{5}$ and $x$ lies in the second quadrant, then $\cos^2 x = 1 - \dfrac{9}{25} = \dfrac{16}{25}$. In the second quadrant the cosine is **negative**, therefore $\cos x = -\dfrac{4}{5}$.
:::

:::teorema{#angoli-associati titolo="Related angles"}
For every $x \in \mathbb{R}$:

- $\sin(-x) = -\sin x$ and $\cos(-x) = \cos x$;
- $\sin(\pi - x) = \sin x$ and $\cos(\pi - x) = -\cos x$;
- $\sin(\pi + x) = -\sin x$ and $\cos(\pi + x) = -\cos x$;
- $\sin\left(\dfrac{\pi}{2} - x\right) = \cos x$ and $\cos\left(\dfrac{\pi}{2} - x\right) = \sin x$.

They follow from the **symmetries of the unit circle** with respect to the axes and to the bisector of the first quadrant. They make it possible to reduce *every* angle to the first quadrant and to turn a cosine into a sine, for example in equations of the form $\sin A = \cos B$. From the second line it follows that $\cos\dfrac{5\pi}{6} = \cos\left(\pi - \dfrac{\pi}{6}\right) = -\cos\dfrac{\pi}{6} = -\dfrac{\sqrt{3}}{2}$.
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
With the **subtraction formula** for the cosine:
$$
\begin{aligned}
\cos\frac{\pi}{12} = \cos\left(\frac{\pi}{3} - \frac{\pi}{4}\right)
&= \cos\frac{\pi}{3}\cos\frac{\pi}{4} + \sin\frac{\pi}{3}\sin\frac{\pi}{4} \\[6pt]
&= \frac{1}{2}\cdot\frac{\sqrt{2}}{2} + \frac{\sqrt{3}}{2}\cdot\frac{\sqrt{2}}{2}
= \frac{\sqrt{2} + \sqrt{6}}{4} .
\end{aligned}
$$
:::

## The graphs of sine and cosine

:::osservazione
The graph of the sine is the **sine wave**: over one period it starts at $0$, rises to $1$ at $\dfrac{\pi}{2}$, returns to $0$ at $\pi$, falls to $-1$ at $\dfrac{3\pi}{2}$ and rises back to $0$ at $2\pi$. The graph of the cosine has the **same shape**, shifted $\dfrac{\pi}{2}$ to the left, since $\cos x = \sin\left(x + \dfrac{\pi}{2}\right)$.

::grafico{f="sin(x)" xmin=-6.3 xmax=6.3 ymin=-1.5 ymax=1.5 titolo="$y = \sin x$ over two periods"}

::grafico{f="cos(x)" xmin=-6.3 xmax=6.3 ymin=-1.5 ymax=1.5 titolo="$y = \cos x$ over two periods"}

The solutions of the elementary equations can be read from the graph: for $|k| < 1$ the horizontal line $y = k$ intersects the sine wave at two points in each period, therefore the solutions form **two families**.
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
- $\tan x = k$, for *every* $k \in \mathbb{R}$: if $\alpha$ is an angle with $\tan \alpha = k$, the solutions are
$$
x = \alpha + n\pi .
$$
- $\sin x = k$ and $\cos x = k$ with $|k| > 1$ have **no solutions**, since sine and cosine take *only* values between $-1$ and $1$.

On the unit circle: the points with ordinate $k$ are the two points of angles $\alpha$ and $\pi - \alpha$, **symmetric with respect to the vertical axis**; the points with abscissa $k$ are the two points of angles $\alpha$ and $-\alpha$, **symmetric with respect to the horizontal axis**. The tangent has period $\pi$, hence its solutions are half a turn apart.
:::

:::esempio{titolo="Three elementary equations"}
- $\sin x = \dfrac{\sqrt{3}}{2}$: from the table $\alpha = \dfrac{\pi}{3}$, therefore $x = \dfrac{\pi}{3} + 2n\pi$ or $x = \dfrac{2\pi}{3} + 2n\pi$.
- $\cos x = -\dfrac{1}{2}$: an angle with this cosine is $\alpha = \dfrac{2\pi}{3}$, therefore $x = \pm\dfrac{2\pi}{3} + 2n\pi$.
- $\tan x = 1$: $\alpha = \dfrac{\pi}{4}$, therefore $x = \dfrac{\pi}{4} + n\pi$.
:::

## Equations reducible to elementary ones

:::teorema{#riconducibili-a-elementari titolo="Equality of two sines or of two cosines"}
For $n \in \mathbb{Z}$:

- $\sin A = \sin B$ *if and only if* $A = B + 2n\pi$ or $A = \pi - B + 2n\pi$;
- $\cos A = \cos B$ *if and only if* $A = B + 2n\pi$ or $A = -B + 2n\pi$.

The alternatives are the same as for the elementary equations: two angles have the same sine when they coincide up to full turns or are **supplementary** up to full turns, and the same cosine when they coincide or are **opposite** up to full turns. An equation of the form $\sin A = \cos B$ is brought into this form with **related angles**, by writing $\cos B = \sin\left(\dfrac{\pi}{2} - B\right)$.
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
Each root $t$ with $|t| \leq 1$ gives the elementary equation $\sin x = t$; a root with $|t| > 1$ is **discarded**, because the condition $-1 \leq t \leq 1$ is *not* satisfied. The same procedure applies with $t = \cos x$. If the equation contains both $\sin^2 x$ and $\cos x$, the substitution $\sin^2 x = 1 - \cos^2 x$, which follows from the **Pythagorean identity**, brings it to a single function.
:::

:::esempio
$2\cos^2 x - \cos x - 1 = 0$. Setting $t = \cos x$, the equation $2t^2 - t - 1 = 0$ has roots $t = 1$ and $t = -\dfrac{1}{2}$, both **acceptable**. From $\cos x = 1$ it follows that $x = 2n\pi$; from $\cos x = -\dfrac{1}{2}$ it follows that $x = \pm\dfrac{2\pi}{3} + 2n\pi$.
:::

## Homogeneous and linear equations

:::teorema{#omogenee-e-lineari titolo="Homogeneous equations of second degree"}
An equation of the form
$$
a\sin^2 x + b\sin x \cos x + c\cos^2 x = 0
$$
is called **homogeneous of second degree** in sine and cosine. If $a \neq 0$, the points with $\cos x = 0$ are *not* solutions, because for them $\sin^2 x = 1$ and the left-hand side equals $a \neq 0$. One can therefore **divide by** $\cos^2 x$, obtaining the quadratic equation
$$
a\tan^2 x + b\tan x + c = 0 ,
$$
whose roots give **elementary equations in the tangent**. If $a = 0$, one factors out $\cos x$ and the equation splits into two factors.
:::

:::teorema{#angolo-aggiunto titolo="Auxiliary angle method"}
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
The equality is verified by expanding $R\sin(x + \varphi)$ with the **addition formula** for the sine. With this form, the linear equation $a\sin x + b\cos x = c$ becomes the **elementary equation** $\sin(x + \varphi) = \dfrac{c}{R}$, which has solutions *if and only if* $|c| \leq R$.
:::

:::esempio
$\sin x + \sqrt{3}\cos x = 1$. Here $R = \sqrt{1 + 3} = 2$, and from $\cos\varphi = \dfrac{1}{2}$, $\sin\varphi = \dfrac{\sqrt{3}}{2}$ it follows that $\varphi = \dfrac{\pi}{3}$. The equation becomes $2\sin\left(x + \dfrac{\pi}{3}\right) = 1$, that is $\sin\left(x + \dfrac{\pi}{3}\right) = \dfrac{1}{2}$, therefore
$$
x + \frac{\pi}{3} = \frac{\pi}{6} + 2n\pi \quad \text{or} \quad x + \frac{\pi}{3} = \frac{5\pi}{6} + 2n\pi ,
$$
which gives $x = -\dfrac{\pi}{6} + 2n\pi$ or $x = \dfrac{\pi}{2} + 2n\pi$.
:::

:::attenzione
Dividing by a factor that can vanish **loses solutions**. In the equation $\sin x \cos x = \cos x$, factoring gives $\cos x\,(\sin x - 1) = 0$, with the families $x = \dfrac{\pi}{2} + n\pi$ (from the first factor) and $x = \dfrac{\pi}{2} + 2n\pi$ (from the second, already contained in the first); dividing by $\cos x$ would have left *only* $\sin x = 1$.
:::

## Elementary inequalities

:::teorema{#disequazioni-goniometriche titolo="Elementary inequalities"}
The inequality $\sin x > k$ with $|k| < 1$ is read on the **unit circle**: the solutions are the angles whose point has **ordinate greater than** $k$. The procedure over one period:

1. solve the equation $\sin x = k$ over one turn, finding two angles;
2. the two corresponding points divide the circle into two arcs;
3. the arc whose points have ordinate greater than $k$ gives the interval of solutions;
4. the general solution is obtained by adding $2n\pi$ to the endpoints of the interval.

For $\cos x > k$ the procedure is the same, with the abscissa in place of the ordinate. If $k \geq 1$ the inequality $\sin x > k$ has **no solutions**, because the sine does not exceed $1$; if $k = -1$ all $x$ are solutions except $x = \dfrac{3\pi}{2} + 2n\pi$, where the sine equals $-1$; if $k < -1$ *every* $x \in \mathbb{R}$ is a solution.
:::

:::esempio
$\sin x > \dfrac{1}{2}$. On $[0, 2\pi)$ the equation $\sin x = \dfrac{1}{2}$ has solutions $\dfrac{\pi}{6}$ and $\dfrac{5\pi}{6}$; the arc with ordinate greater than $\dfrac{1}{2}$ is the **upper one**, therefore the solutions over one period are $\dfrac{\pi}{6} < x < \dfrac{5\pi}{6}$ and the **general solution** is
$$
\frac{\pi}{6} + 2n\pi < x < \frac{5\pi}{6} + 2n\pi, \qquad n \in \mathbb{Z} .
$$
:::

:::esempio
$\cos x > -\dfrac{\sqrt{2}}{2}$. On $[0, 2\pi)$ the equation $\cos x = -\dfrac{\sqrt{2}}{2}$ has solutions $\dfrac{3\pi}{4}$ and $\dfrac{5\pi}{4}$; the arc with abscissa greater than $-\dfrac{\sqrt{2}}{2}$ is the one containing the point of angle $0$, therefore the solutions on $[0, 2\pi)$ are $\left[0, \dfrac{3\pi}{4}\right) \cup \left(\dfrac{5\pi}{4}, 2\pi\right)$ and the **general solution** is
$$
-\frac{3\pi}{4} + 2n\pi < x < \frac{3\pi}{4} + 2n\pi, \qquad n \in \mathbb{Z} .
$$
:::
