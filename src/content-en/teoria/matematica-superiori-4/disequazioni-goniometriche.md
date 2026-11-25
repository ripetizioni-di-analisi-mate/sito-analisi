---
titolo: Trigonometric inequalities
sommario: How to solve basic trigonometric inequalities on the unit circle and on a graph, express the solutions over one period and on the entire real line, and work with inequalities reducible to basic ones, linear, homogeneous, and rational inequalities, systems, and the domains of trigonometric functions.
---

## Trigonometric inequalities and periodicity

:::definizione{#disequazione-goniometrica titolo="Trigonometric inequality"}
A **trigonometric inequality** is an inequality in which the unknown $x$ appears in the argument of at least one trigonometric function, for example
$$
2\sin x - 1 > 0 ,
\qquad
\cos^2 x \leq \frac{1}{4} ,
\qquad
\frac{\tan x - 1}{\cos x} \geq 0 .
$$
Solving it means finding all the real numbers $x$, that is, all the angles measured in radians, that make the inequality true. The set of these numbers is called the **solution set**. For example, $x = \dfrac{\pi}{2}$ solves the first inequality because $2\sin\dfrac{\pi}{2} - 1 = 1 > 0$, whereas $x = 0$ does not because $2\sin 0 - 1 = -1 < 0$.
:::

:::richiamo{titolo="Basic trigonometric equations"}
Let $-1 \leq m \leq 1$. Then, with $k \in \mathbb{Z}$,
$$
\sin x = m \iff x = \arcsin m + 2k\pi \quad \text{or} \quad x = \pi - \arcsin m + 2k\pi ,
$$
$$
\cos x = m \iff x = \pm \arccos m + 2k\pi .
$$
For every real $m$, we have $\tan x = m \iff x = \arctan m + k\pi$.
:::

::::teorema{#periodicita-soluzioni titolo="Periodicity of the solution set"}
If all the functions in an inequality are periodic with period $T$, then a number $x$ is a solution if and only if $x + T$ is a solution. It therefore suffices to solve the inequality in an interval of length $T$ and then add $kT$, with $k \in \mathbb{Z}$, to the endpoints of the resulting intervals.

For example, $\sin x$ is positive for $0 < x < \pi$ in the interval $[0, 2\pi)$. Sine has period $2\pi$, so the solution set of $\sin x > 0$ on $\mathbb{R}$ is
$$
2k\pi < x < \pi + 2k\pi , \qquad k \in \mathbb{Z} .
$$
Setting $k = 1$ gives the interval $(2\pi, 3\pi)$, and setting $k = -1$ gives the interval $(-2\pi, -\pi)$.

:::dimostrazione
The idea is that each side of the inequality takes the same value at $x$ as at $x + T$. Let $f(x) > 0$ be the inequality, where $f$ is formed from functions of period $T$. Then $f(x + T) = f(x)$ for every $x$ at which $f$ is defined. If $x$ is a solution, then $f(x) > 0$, so $f(x + T) > 0$ as well, and $x + T$ is a solution. Repeating the argument with $x - T$ in place of $x$ gives the converse.
:::
::::

:::osservazione{#intervallo-base titolo="Choosing the initial interval"}
The interval over which the inequality is first solved can be chosen freely, provided its length is $T$. The usual choice is $[0, 2\pi)$, but when the solutions are near $x = 0$, the interval $[-\pi, \pi)$ gives a more compact expression. For example, the inequality $\cos x > \dfrac{1}{2}$ in $[0, 2\pi)$ has solutions
$$
0 \leq x < \frac{\pi}{3} \quad \text{or} \quad \frac{5\pi}{3} < x < 2\pi ,
$$
that is, two intervals. In $[-\pi, \pi)$, the same solutions form a single interval, $-\dfrac{\pi}{3} < x < \dfrac{\pi}{3}$, and on $\mathbb{R}$ they are written as $-\dfrac{\pi}{3} + 2k\pi < x < \dfrac{\pi}{3} + 2k\pi$.
:::

## Basic sine inequalities

:::teorema{#disequazioni-seno titolo="Basic sine inequalities"}
On the unit circle, the sine of $x$ is the vertical coordinate of the point corresponding to the angle $x$. The inequality $\sin x > m$ therefore asks for the angles whose points lie *above* the horizontal line $y = m$. Let $-1 < m < 1$ and let $\alpha = \arcsin m$, with $-\dfrac{\pi}{2} < \alpha < \dfrac{\pi}{2}$. The line $y = m$ intersects the circle at the points corresponding to $\alpha$ and $\pi - \alpha$, and for $k \in \mathbb{Z}$ we have
$$
\sin x > m \iff \alpha + 2k\pi < x < \pi - \alpha + 2k\pi ,
$$
$$
\sin x < m \iff \pi - \alpha + 2k\pi < x < 2\pi + \alpha + 2k\pi .
$$
With $\geq$ or $\leq$, the endpoints are included. When $m$ lies outside the interval $(-1, 1)$, compare $m$ with the range $[-1, 1]$ of sine.

- If $m \geq 1$, the inequality $\sin x > m$ has no solutions, $\sin x \geq 1$ has the solutions $x = \dfrac{\pi}{2} + 2k\pi$, and $\sin x < m$ holds for every real $x$ if $m > 1$.
- If $m \leq -1$, the inequality $\sin x < m$ has no solutions, and $\sin x > -1$ holds for every $x \neq \dfrac{3\pi}{2} + 2k\pi$.

For $m = \dfrac{1}{2}$, we have $\alpha = \dfrac{\pi}{6}$ and $\pi - \alpha = \dfrac{5\pi}{6}$, so
$$
\sin x > \frac{1}{2} \iff \frac{\pi}{6} + 2k\pi < x < \frac{5\pi}{6} + 2k\pi .
$$

::grafico{curve="cos(t),sin(t),0.5236,2.618;cos(t),sin(t),2.618,6.8068;t,0.5,-1.4,1.4" vettori="0,0,0.866,0.5;0,0,-0.866,0.5" unicolore=1 punti="0.866,0.5,vuoto,π/6;-0.866,0.5,vuoto,5π/6" etichette="1.2,0.35,y = 1/2" xmin=-1.6 xmax=1.6 ymin=-1.4 ymax=1.4 uguale=1 legenda=0 titolo="The points on the circle whose vertical coordinate is greater than $\dfrac{1}{2}$ form the solid arc from $\dfrac{\pi}{6}$ to $\dfrac{5\pi}{6}$. They give the solutions of $\sin x > \dfrac{1}{2}$"}

:::

:::esempio{titolo="Reading a sine inequality from a graph"}
Solve $\sin x \leq -\dfrac{\sqrt{2}}{2}$. In the interval $[0, 2\pi)$, the equation $\sin x = -\dfrac{\sqrt{2}}{2}$ has solutions $\dfrac{5\pi}{4}$ and $\dfrac{7\pi}{4}$ because the corresponding angles lie in the third and fourth quadrants and have reference angle $\dfrac{\pi}{4}$. The graph of $y = \sin x$ lies below the line $y = -\dfrac{\sqrt{2}}{2}$ between these values and meets it at the endpoints. Therefore
$$
\frac{5\pi}{4} + 2k\pi \leq x \leq \frac{7\pi}{4} + 2k\pi , \qquad k \in \mathbb{Z} .
$$

::grafico{f="sin(x);-0.7071" area="-0.7071;sin(x);3.927;5.4978" punti="3.927,-0.7071,pieno;5.4978,-0.7071,pieno" xmin=-0.5 xmax=7 ymin=-1.5 ymax=1.5 legenda="y = \sin x;y = -\dfrac{\sqrt{2}}{2}" titolo="In the interval $[0, 2\pi)$, the sine graph lies below the line $y = -\dfrac{\sqrt{2}}{2}$ for $\dfrac{5\pi}{4} \leq x \leq \dfrac{7\pi}{4}$"}

:::

:::attenzione
In the expression $a + 2k\pi < x < b + 2k\pi$, the left endpoint $a$ must be less than the right endpoint $b$. For $\sin x < \dfrac{1}{2}$, the points move around the circle from $\dfrac{5\pi}{6}$ to $\dfrac{\pi}{6}$ through $\dfrac{3\pi}{2}$, and the expression $\dfrac{5\pi}{6} + 2k\pi < x < \dfrac{\pi}{6} + 2k\pi$ describes the empty set because $\dfrac{5\pi}{6} > \dfrac{\pi}{6}$. Therefore add one full turn to the right endpoint:
$$
\frac{5\pi}{6} + 2k\pi < x < \frac{13\pi}{6} + 2k\pi .
$$
In $[0, 2\pi)$, the same solutions can be written as $0 \leq x < \dfrac{\pi}{6}$ or $\dfrac{5\pi}{6} < x < 2\pi$.
:::

## Basic cosine and tangent inequalities

:::teorema{#disequazioni-coseno titolo="Basic cosine inequalities"}
The cosine of $x$ is the horizontal coordinate of the point corresponding to $x$ on the unit circle, so $\cos x > m$ asks for the points *to the right* of the vertical line $x = m$. Let $-1 < m < 1$ and let $\beta = \arccos m$, with $0 < \beta < \pi$. For $k \in \mathbb{Z}$, we have
$$
\cos x > m \iff -\beta + 2k\pi < x < \beta + 2k\pi ,
$$
$$
\cos x < m \iff \beta + 2k\pi < x < 2\pi - \beta + 2k\pi .
$$
With $\geq$ or $\leq$, the endpoints are included. The cases $m \geq 1$ and $m \leq -1$ are handled as for sine. For example, the only solutions of $\cos x \geq 1$ are $x = 2k\pi$.

For $m = -\dfrac{1}{2}$, we have $\beta = \dfrac{2\pi}{3}$ and $2\pi - \beta = \dfrac{4\pi}{3}$, hence
$$
\cos x < -\frac{1}{2} \iff \frac{2\pi}{3} + 2k\pi < x < \frac{4\pi}{3} + 2k\pi .
$$

::grafico{curve="cos(t),sin(t),2.0944,4.1888;cos(t),sin(t),4.1888,8.3776;-0.5,t,-1.35,1.35" vettori="0,0,-0.5,0.866;0,0,-0.5,-0.866" unicolore=1 punti="-0.5,0.866,vuoto,2π/3;-0.5,-0.866,vuoto,4π/3" etichette="-0.45,1.3,x = −1/2" xmin=-1.6 xmax=1.6 ymin=-1.4 ymax=1.4 uguale=1 legenda=0 titolo="The points with horizontal coordinate less than $-\dfrac{1}{2}$ form the solid arc from $\dfrac{2\pi}{3}$ to $\dfrac{4\pi}{3}$. They give the solutions of $\cos x < -\dfrac{1}{2}$"}

:::

:::esempio{titolo="A cosine inequality with solutions around zero"}
Solve $2\cos x - \sqrt{3} \geq 0$, that is, $\cos x \geq \dfrac{\sqrt{3}}{2}$. Since $\arccos \dfrac{\sqrt{3}}{2} = \dfrac{\pi}{6}$, the points with horizontal coordinate greater than or equal to $\dfrac{\sqrt{3}}{2}$ form the arc from $-\dfrac{\pi}{6}$ to $\dfrac{\pi}{6}$ through the point $(1, 0)$. Therefore
$$
-\frac{\pi}{6} + 2k\pi \leq x \leq \frac{\pi}{6} + 2k\pi , \qquad k \in \mathbb{Z} .
$$
In the interval $[0, 2\pi]$, take $k = 0$ and $k = 1$. The solutions are $0 \leq x \leq \dfrac{\pi}{6}$ or $\dfrac{11\pi}{6} \leq x \leq 2\pi$.
:::

:::teorema{#disequazioni-tangente titolo="Basic tangent inequalities"}
Tangent has period $\pi$, is defined for $x \neq \dfrac{\pi}{2} + k\pi$, and is **increasing** on each interval $\left( -\dfrac{\pi}{2} + k\pi, \dfrac{\pi}{2} + k\pi \right)$, where it takes each real value exactly once. Hence, for every real $m$ and for $k \in \mathbb{Z}$,
$$
\tan x > m \iff \arctan m + k\pi < x < \frac{\pi}{2} + k\pi ,
$$
$$
\tan x < m \iff -\frac{\pi}{2} + k\pi < x < \arctan m + k\pi .
$$
The endpoint $\pm\dfrac{\pi}{2} + k\pi$ is always excluded because tangent is undefined there. The endpoint $\arctan m + k\pi$ is included with $\geq$ or $\leq$. For example, since $\arctan 1 = \dfrac{\pi}{4}$,
$$
\tan x \geq 1 \iff \frac{\pi}{4} + k\pi \leq x < \frac{\pi}{2} + k\pi .
$$

::grafico{f="tan(x);1" punti="0.7854,1,pieno;3.927,1,pieno" asintoti="x=1.5708;x=4.7124" xmin=-1.6 xmax=4.8 ymin=-4 ymax=4 legenda="y = \tan x;y = 1" titolo="The graph of tangent lies above the line $y = 1$ from $\dfrac{\pi}{4}$ to the asymptote $x = \dfrac{\pi}{2}$, and this repeats after each period $\pi$"}

:::

:::osservazione{#disequazioni-cotangente titolo="Cotangent inequalities"}
Cotangent has period $\pi$, is defined for $x \neq k\pi$, and is **decreasing** on each interval $(k\pi, \pi + k\pi)$. Let $\gamma$ be the angle in $(0, \pi)$ for which $\cot \gamma = m$. Then $\cot x > m$ holds for $k\pi < x < \gamma + k\pi$, and $\cot x < m$ holds for $\gamma + k\pi < x < \pi + k\pi$. For example, $\cot \dfrac{\pi}{4} = 1$, so the solutions of $\cot x > 1$ are $k\pi < x < \dfrac{\pi}{4} + k\pi$.
:::

## A transformed argument and solutions in an interval

:::teorema{#argomento-trasformato titolo="Inequalities with a transformed argument"}
An inequality such as $\sin(ax + b) > m$, with $a \neq 0$, can be solved in two steps. Set $t = ax + b$ and solve the basic inequality $\sin t > m$. Then substitute $ax + b$ for $t$ and solve the resulting inequalities for $x$. The period in $x$ becomes $\dfrac{2\pi}{|a|}$ for sine and cosine and $\dfrac{\pi}{|a|}$ for tangent.

For example, to solve $\cos\left( 2x - \dfrac{\pi}{3} \right) \leq \dfrac{1}{2}$, set $t = 2x - \dfrac{\pi}{3}$. The inequality $\cos t \leq \dfrac{1}{2}$ has solutions $\dfrac{\pi}{3} + 2k\pi \leq t \leq \dfrac{5\pi}{3} + 2k\pi$, so
$$
\begin{aligned}
\frac{\pi}{3} + 2k\pi \leq 2x - \frac{\pi}{3} \leq \frac{5\pi}{3} + 2k\pi
&\iff \frac{2\pi}{3} + 2k\pi \leq 2x \leq 2\pi + 2k\pi \\[6pt]
&\iff \frac{\pi}{3} + k\pi \leq x \leq \pi + k\pi .
\end{aligned}
$$
The first step adds $\dfrac{\pi}{3}$ to all three parts, and the second divides by $2$. The period $2k\pi$ is also divided by $2$, becoming $k\pi$.
:::

:::attenzione
When the coefficient of $x$ is negative, the inequality signs reverse when we multiply by a negative number. For $\sin\left( \dfrac{\pi}{3} - x \right) \geq 0$, we have
$$
\begin{aligned}
2k\pi \leq \frac{\pi}{3} - x \leq \pi + 2k\pi
&\iff -\frac{\pi}{3} + 2k\pi \leq -x \leq \frac{2\pi}{3} + 2k\pi \\[6pt]
&\iff -\frac{2\pi}{3} - 2k\pi \leq x \leq \frac{\pi}{3} - 2k\pi .
\end{aligned}
$$
Since $k$ ranges over all of $\mathbb{Z}$, the integer $-k$ also ranges over all of $\mathbb{Z}$, and the solutions can be written as $-\dfrac{2\pi}{3} + 2k\pi \leq x \leq \dfrac{\pi}{3} + 2k\pi$. For $x = 0$, this gives $\sin\dfrac{\pi}{3} > 0$, and indeed $0$ lies in the interval for $k = 0$.
:::

:::teorema{#soluzioni-intervallo titolo="Solutions in a specified interval"}
When solutions are required in an interval $[p, q]$, first write the solutions on $\mathbb{R}$ and then give $k$ the integer values for which the resulting intervals overlap $[p, q]$. The solutions are the intersections of these intervals with $[p, q]$.

For the inequality $\cos\left( 2x - \dfrac{\pi}{3} \right) \leq \dfrac{1}{2}$ on the interval $[0, 2\pi]$, three values of $k$ are needed:

- for $k = -1$, we obtain $\left[ -\dfrac{2\pi}{3}, 0 \right]$, whose only point in common with $[0, 2\pi]$ is $0$;
- for $k = 0$, we obtain $\left[ \dfrac{\pi}{3}, \pi \right]$;
- for $k = 1$, we obtain $\left[ \dfrac{4\pi}{3}, 2\pi \right]$.

The solutions in $[0, 2\pi]$ are therefore $x = 0$, $\dfrac{\pi}{3} \leq x \leq \pi$, and $\dfrac{4\pi}{3} \leq x \leq 2\pi$. The point $x = 0$ is a solution because $\cos\left( -\dfrac{\pi}{3} \right) = \dfrac{1}{2}$.

::grafico{f="cos(2*x-pi/3);0.5" area="0.5;cos(2*x-pi/3);1.0472;3.1416|0.5;cos(2*x-pi/3);4.1888;6.2832" punti="0,0.5,pieno;1.0472,0.5,pieno;3.1416,0.5,pieno;4.1888,0.5,pieno;6.2832,0.5,pieno" xmin=-0.5 xmax=7 ymin=-1.5 ymax=1.5 legenda="y = \cos\left( 2x - \dfrac{\pi}{3} \right);y = \dfrac{1}{2}" titolo="In $[0, 2\pi]$, the graph of $\cos\left( 2x - \dfrac{\pi}{3} \right)$ lies below the line $y = \dfrac{1}{2}$ or meets it at $x = 0$, for $\dfrac{\pi}{3} \leq x \leq \pi$, and for $\dfrac{4\pi}{3} \leq x \leq 2\pi$"}

:::

## Inequalities reducible to basic inequalities

:::teorema{#disequazioni-sostituzione titolo="Inequalities involving a single trigonometric function"}
If an inequality involves only one trigonometric function of the same argument, for example only $\sin x$, set $t = \sin x$ to obtain an algebraic inequality in the variable $t$. Solve this inequality, then return to the variable $x$ by solving the basic inequalities and taking the union of their solutions. With $t = \sin x$ or $t = \cos x$, only the values of $t$ in $[-1, 1]$ are relevant. With $t = \tan x$, every real value is possible.

For example, $2\cos^2 x - \cos x - 1 \leq 0$ becomes, with $t = \cos x$,
$$
2t^2 - t - 1 \leq 0 \iff (2t + 1)(t - 1) \leq 0 \iff -\frac{1}{2} \leq t \leq 1 .
$$
The condition $\cos x \leq 1$ holds for every $x$, so this leaves $\cos x \geq -\dfrac{1}{2}$, that is,
$$
-\frac{2\pi}{3} + 2k\pi \leq x \leq \frac{2\pi}{3} + 2k\pi .
$$

::grafico{curve="cos(t),sin(t),-2.0944,2.0944;cos(t),sin(t),2.0944,4.1888;-0.5,t,-1.35,1.35" punti="-0.5,0.866,pieno,2π/3;-0.5,-0.866,pieno,−2π/3" etichette="-0.45,1.3,x = −1/2" xmin=-1.6 xmax=1.6 ymin=-1.4 ymax=1.4 uguale=1 legenda=0 titolo="The solutions of $2\cos^2 x - \cos x - 1 \leq 0$ correspond to the points with horizontal coordinate $\cos x \geq -\dfrac{1}{2}$, that is, the solid arc from $-\dfrac{2\pi}{3}$ to $\dfrac{2\pi}{3}$"}

:::

:::esempio{titolo="Transforming an inequality using double-angle identities"}
Solve $\cos 2x + 3\cos x + 2 \geq 0$. The inequality contains two different arguments, $2x$ and $x$. The double-angle identity $\cos 2x = 2\cos^2 x - 1$, derived in the topic on trigonometric identities, gives an inequality involving only $\cos x$:
$$
2\cos^2 x + 3\cos x + 1 \geq 0 .
$$
With $t = \cos x$, the trinomial $2t^2 + 3t + 1 = (2t + 1)(t + 1)$ has roots $-1$ and $-\dfrac{1}{2}$ and its graph opens upward, so it is greater than or equal to $0$ for $t \leq -1$ or $t \geq -\dfrac{1}{2}$. Since $\cos x \geq -1$ for every $x$, the condition $\cos x \leq -1$ is equivalent to $\cos x = -1$, that is, to $x = \pi + 2k\pi$. The condition $\cos x \geq -\dfrac{1}{2}$ gives $-\dfrac{2\pi}{3} + 2k\pi \leq x \leq \dfrac{2\pi}{3} + 2k\pi$. The solutions are therefore
$$
-\frac{2\pi}{3} + 2k\pi \leq x \leq \frac{2\pi}{3} + 2k\pi \quad \text{or} \quad x = \pi + 2k\pi .
$$
For $x = \pi$, the left-hand side equals $1 - 3 + 2 = 0$, so the points $x = \pi + 2k\pi$ are solutions. Since there are no other solutions near these points, they are called **isolated solutions**.
:::

:::attenzione
Dividing both sides by an expression containing $x$ changes the solution set if that expression can be negative or zero. For example, dividing $\sin^2 x > \sin x$ by $\sin x$ would give $\sin x > 1$, which has no solutions. Yet the original inequality does have solutions, since for $x = \dfrac{3\pi}{2}$ we have $\sin^2 x = 1 > -1 = \sin x$. Move all terms to the left-hand side and factor:
$$
\sin x\,(\sin x - 1) > 0 .
$$
The factor $\sin x - 1$ is negative for $x \neq \dfrac{\pi}{2} + 2k\pi$, so the product is positive when $\sin x < 0$, that is, for $\pi + 2k\pi < x < 2\pi + 2k\pi$.
:::

## Linear inequalities in sine and cosine

:::definizione{#disequazioni-lineari titolo="A linear inequality in sine and cosine"}
A **linear inequality** in sine and cosine has the form
$$
a\sin x + b\cos x + c > 0 ,
$$
or the same form with $<$, $\geq$, or $\leq$, where $a$, $b$, and $c$ are real numbers with $a \neq 0$ and $b \neq 0$. The name reflects the fact that $\sin x$ and $\cos x$ appear to the first power. For example, $\sin x + \sqrt{3}\cos x > 1$ is linear with $a = 1$, $b = \sqrt{3}$, and $c = -1$. Linear inequalities can be solved using the auxiliary-angle method, the graphical method, or the tangent half-angle formulas.
:::

:::richiamo{titolo="Auxiliary-angle identity"}
Let $a$ and $b$ be real numbers that are not both zero, and let $r = \sqrt{a^2 + b^2}$. Then there is an angle $\varphi$ with $\cos\varphi = \dfrac{a}{r}$ and $\sin\varphi = \dfrac{b}{r}$, and for every real $x$,
$$
a\sin x + b\cos x = r\sin(x + \varphi) .
$$
:::

:::teorema{#metodo-angolo-aggiunto titolo="Auxiliary-angle method"}
By the auxiliary-angle identity, the inequality $a\sin x + b\cos x + c > 0$ becomes $r\sin(x + \varphi) > -c$. Since $r > 0$, division by $r$ preserves the direction of the inequality, and we obtain the basic inequality with a transformed argument
$$
\sin(x + \varphi) > -\frac{c}{r} .
$$
For $\sin x + \sqrt{3}\cos x > 1$, we have $r = \sqrt{1 + 3} = 2$, $\cos\varphi = \dfrac{1}{2}$, and $\sin\varphi = \dfrac{\sqrt{3}}{2}$, so $\varphi = \dfrac{\pi}{3}$ and
$$
2\sin\left( x + \frac{\pi}{3} \right) > 1 \iff \sin\left( x + \frac{\pi}{3} \right) > \frac{1}{2} .
$$
The argument $x + \dfrac{\pi}{3}$ must lie between $\dfrac{\pi}{6} + 2k\pi$ and $\dfrac{5\pi}{6} + 2k\pi$. Subtracting $\dfrac{\pi}{3}$ gives
$$
-\frac{\pi}{6} + 2k\pi < x < \frac{\pi}{2} + 2k\pi .
$$
:::

:::teorema{#metodo-grafico-lineari titolo="Graphical method"}
Set $X = \cos x$ and $Y = \sin x$. The point $(X, Y)$ is the point on the unit circle corresponding to the angle $x$, so it satisfies $X^2 + Y^2 = 1$. The inequality $a\sin x + b\cos x + c > 0$ becomes $aY + bX + c > 0$, which in the $XY$ plane describes a half-plane bounded by the line $aY + bX + c = 0$. The solutions are the angles whose points lie on the circle *and* in the half-plane:
$$
\begin{cases}
aY + bX + c > 0 \\[4pt]
X^2 + Y^2 = 1
\end{cases}
$$
For $\sin x + \sqrt{3}\cos x > 1$, the line is $Y = 1 - \sqrt{3}X$. Substituting into the equation of the circle gives $X^2 + \left( 1 - \sqrt{3}X \right)^2 = 1$, that is, $4X^2 - 2\sqrt{3}X = 0$, with solutions $X = 0$ and $X = \dfrac{\sqrt{3}}{2}$. The line therefore intersects the circle at $(0, 1)$ and $\left( \dfrac{\sqrt{3}}{2}, -\dfrac{1}{2} \right)$, corresponding to the angles $\dfrac{\pi}{2}$ and $-\dfrac{\pi}{6}$. The origin does not satisfy $Y + \sqrt{3}X > 1$, so the half-plane is the one that does *not* contain the origin. The solution arc goes from $-\dfrac{\pi}{6}$ to $\dfrac{\pi}{2}$ through $(1, 0)$. The result agrees with that of the auxiliary-angle method.

::grafico{curve="cos(t),sin(t),-0.5236,1.5708;cos(t),sin(t),1.5708,5.7596;t,1-1.7321*t,-0.25,1.3" punti="0,1,vuoto,π/2;0.866,-0.5,vuoto,−π/6" etichette="0.75,0.35,Y = 1 − √3 X" nomi="X,Y" xmin=-1.6 xmax=1.6 ymin=-1.4 ymax=1.5 uguale=1 legenda=0 titolo="The line $Y = 1 - \sqrt{3}X$ intersects the circle at the points corresponding to the angles $-\dfrac{\pi}{6}$ and $\dfrac{\pi}{2}$. The solid arc lies in the half-plane $Y + \sqrt{3}X > 1$"}

:::

:::osservazione{#metodo-parametriche titolo="Tangent half-angle substitution"}
For $x \neq \pi + 2k\pi$, we can set $t = \tan\dfrac{x}{2}$ and use the tangent half-angle formulas
$$
\sin x = \frac{2t}{1 + t^2} ,
\qquad
\cos x = \frac{1 - t^2}{1 + t^2} .
$$
The inequality becomes a rational inequality in $t$. The values $x = \pi + 2k\pi$, excluded by the substitution, must be checked separately in the original inequality. For $\sin x + \cos x > 1$, multiply both sides by $1 + t^2$, which is positive, to obtain
$$
2t + 1 - t^2 > 1 + t^2 \iff 2t\,(1 - t) > 0 \iff 0 < t < 1 .
$$
The condition $0 < \tan\dfrac{x}{2} < 1$ gives $k\pi < \dfrac{x}{2} < \dfrac{\pi}{4} + k\pi$, that is, $2k\pi < x < \dfrac{\pi}{2} + 2k\pi$. For $x = \pi$, we have $\sin\pi + \cos\pi = -1$, which is not greater than $1$, so the excluded values are not solutions.
:::

## Homogeneous inequalities

:::definizione{#disequazioni-omogenee titolo="A homogeneous quadratic inequality"}
A **homogeneous quadratic** inequality in sine and cosine has the form
$$
a\sin^2 x + b\sin x\cos x + c\cos^2 x > 0 ,
$$
or the same form with $<$, $\geq$, or $\leq$. Every term has total degree $2$ in $\sin x$ and $\cos x$. For example, $\sin^2 x - (1 + \sqrt{3})\sin x\cos x + \sqrt{3}\cos^2 x < 0$ is homogeneous with $a = 1$, $b = -(1 + \sqrt{3})$, and $c = \sqrt{3}$.
:::

::::teorema{#risoluzione-omogenee titolo="Solving homogeneous inequalities"}
For values of $x$ with $\cos x \neq 0$, the inequality $a\sin^2 x + b\sin x\cos x + c\cos^2 x > 0$ is equivalent to
$$
a\tan^2 x + b\tan x + c > 0 .
$$
For values of $x$ with $\cos x = 0$, that is, for $x = \dfrac{\pi}{2} + k\pi$, the left-hand side equals $a$, so these values are solutions if and only if $a > 0$.

In the example $\sin^2 x - (1 + \sqrt{3})\sin x\cos x + \sqrt{3}\cos^2 x < 0$, we obtain, with $t = \tan x$,
$$
t^2 - (1 + \sqrt{3})\,t + \sqrt{3} < 0 \iff (t - 1)(t - \sqrt{3}) < 0 \iff 1 < t < \sqrt{3} .
$$
Hence $\dfrac{\pi}{4} + k\pi < x < \dfrac{\pi}{3} + k\pi$. For $x = \dfrac{\pi}{2} + k\pi$, the left-hand side equals $a = 1$, which is not negative, so these values are not added.

:::dimostrazione
The idea is to divide by $\cos^2 x$, which is positive when $\cos x \neq 0$. Suppose $\cos x \neq 0$. Then $\cos^2 x > 0$, and dividing both sides by a positive number preserves the direction of the inequality. Since $\dfrac{\sin^2 x}{\cos^2 x} = \tan^2 x$ and $\dfrac{\sin x\cos x}{\cos^2 x} = \tan x$, this gives $a\tan^2 x + b\tan x + c > 0$. Now suppose $\cos x = 0$. Then $\sin^2 x = 1 - \cos^2 x = 1$, and the left-hand side reduces to $a \cdot 1 + b \cdot 0 + c \cdot 0 = a$.
:::
::::

:::esempio{titolo="A homogeneous inequality with a zero coefficient"}
Solve $\sin x\cos x + \cos^2 x \leq 0$, which is homogeneous with $a = 0$. For $\cos x \neq 0$, divide by $\cos^2 x > 0$ to obtain $\tan x + 1 \leq 0$, that is, $\tan x \leq -1$, which gives $-\dfrac{\pi}{2} + k\pi < x \leq -\dfrac{\pi}{4} + k\pi$. For $\cos x = 0$, the left-hand side equals $a = 0$, and $0 \leq 0$ is true, so the values $x = -\dfrac{\pi}{2} + k\pi$ are also solutions. Taking the union of the two parts gives
$$
-\frac{\pi}{2} + k\pi \leq x \leq -\frac{\pi}{4} + k\pi .
$$
The same result follows from the factorization $\cos x\,(\sin x + \cos x) \leq 0$.
:::

:::teorema{#riconducibili-omogenee titolo="Inequalities reducible to homogeneous form"}
An inequality of the form $a\sin^2 x + b\sin x\cos x + c\cos^2 x > d$, with $d \neq 0$, becomes homogeneous if the constant term is written as $d = d\,(\sin^2 x + \cos^2 x)$, by the Pythagorean identity. For example,
$$
\sin^2 x + 2\sin x\cos x + 3\cos^2 x > 2
$$
becomes $\sin^2 x + 2\sin x\cos x + 3\cos^2 x - 2\sin^2 x - 2\cos^2 x > 0$, that is,
$$
-\sin^2 x + 2\sin x\cos x + \cos^2 x > 0 .
$$
For $\cos x \neq 0$, this gives $-t^2 + 2t + 1 > 0$ with $t = \tan x$, that is, $t^2 - 2t - 1 < 0$, which holds for $1 - \sqrt{2} < t < 1 + \sqrt{2}$. Since $\tan\dfrac{\pi}{8} = \sqrt{2} - 1$ and $\tan\dfrac{3\pi}{8} = \sqrt{2} + 1$, values obtained using the half-angle identities, we have
$$
-\frac{\pi}{8} + k\pi < x < \frac{3\pi}{8} + k\pi .
$$
For $\cos x = 0$, the left-hand side of the homogeneous form equals $a = -1$, which is not positive, so there are no further solutions to add.
:::

:::osservazione
A homogeneous inequality can also be solved using the double-angle identities, which transform it into a linear inequality in the angle $2x$. Since $\cos^2 x - \sin^2 x = \cos 2x$ and $2\sin x\cos x = \sin 2x$, the inequality in the preceding example becomes $\cos 2x + \sin 2x > 0$, that is, $\sqrt{2}\sin\left( 2x + \dfrac{\pi}{4} \right) > 0$ by the auxiliary-angle method. The solutions $0 + 2k\pi < 2x + \dfrac{\pi}{4} < \pi + 2k\pi$ again give $-\dfrac{\pi}{8} + k\pi < x < \dfrac{3\pi}{8} + k\pi$.
:::

## Product and rational inequalities

:::teorema{#segno-prodotto-quoziente titolo="Determining the sign of a product or quotient"}
A **product** inequality has the form $f_1(x) \cdot f_2(x) \cdots f_n(x) > 0$, and a **rational** inequality has the form $\dfrac{N(x)}{D(x)} > 0$, or the same forms with $<$, $\geq$, or $\leq$. By the sign rules, the sign of a product or quotient depends on the signs of its factors. The method is as follows.

- Choose an interval whose length equals a common period of all the factors, usually $[0, 2\pi)$.
- Determine the sign of each factor in that interval by solving the basic inequality $f_i(x) > 0$, and mark its zeros.
- Record the signs in a **sign chart** and determine the sign of the product or quotient on each interval.
- Select the intervals required and add integer multiples of the period. Zeros of the denominator are always excluded.

For $\cos x\,\big( 2\sin x - \sqrt{3} \big) > 0$, the common period is $2\pi$. The factor $2\sin x - \sqrt{3}$ is positive for $\dfrac{\pi}{3} < x < \dfrac{2\pi}{3}$, and the factor $\cos x$ for $0 \leq x < \dfrac{\pi}{2}$ and for $\dfrac{3\pi}{2} < x < 2\pi$. The sign chart in $[0, 2\pi)$ is

| | $\left( 0, \dfrac{\pi}{3} \right)$ | $\left( \dfrac{\pi}{3}, \dfrac{\pi}{2} \right)$ | $\left( \dfrac{\pi}{2}, \dfrac{2\pi}{3} \right)$ | $\left( \dfrac{2\pi}{3}, \dfrac{3\pi}{2} \right)$ | $\left( \dfrac{3\pi}{2}, 2\pi \right)$ |
| --- | --- | --- | --- | --- | --- |
| $2\sin x - \sqrt{3}$ | $-$ | $+$ | $+$ | $-$ | $-$ |
| $\cos x$ | $+$ | $+$ | $-$ | $-$ | $+$ |
| product | $-$ | $+$ | $-$ | $+$ | $-$ |

The product is positive on the second and fourth intervals, so the solutions are
$$
\frac{\pi}{3} + 2k\pi < x < \frac{\pi}{2} + 2k\pi \quad \text{or} \quad \frac{2\pi}{3} + 2k\pi < x < \frac{3\pi}{2} + 2k\pi .
$$

::grafico{assi=0 uguale=1 linee="1.0472,2 2.0944,2;0,1 1.5708,1;4.7124,1 6.2832,1;1.0472,0 1.5708,0;2.0944,0 4.7124,0" segmenti="0,2,1.0472,2;2.0944,2,6.2832,2;1.5708,1,4.7124,1;0,0,1.0472,0;1.5708,0,2.0944,0;4.7124,0,6.2832,0" punti="1.0472,2,pieno;2.0944,2,pieno;1.5708,1,pieno;4.7124,1,pieno;1.0472,0,vuoto;1.5708,0,vuoto;2.0944,0,vuoto;4.7124,0,vuoto" etichette="-1.6,2,2 sin x − √3;-1.6,1,cos x;-1.6,0,product;0,2.6,0;1.0472,2.6,π/3;1.5708,2.6,π/2;2.0944,2.6,2π/3;4.7124,2.6,3π/2;6.2832,2.6,2π;1.5708,2.25,+;0.52,0.25,−;1.31,0.25,+;1.83,0.25,−;3.4,0.25,+;5.5,0.25,−" xmin=-3 xmax=6.6 ymin=-0.5 ymax=2.9 titolo="Sign chart for $\cos x\,\big( 2\sin x - \sqrt{3} \big)$ in $[0, 2\pi)$. A solid line indicates a positive sign, and a dashed line a negative sign"}

:::

:::esempio{titolo="A rational inequality"}
Solve $\dfrac{1 - 2\sin x}{\sin x} \geq 0$ in $[0, 2\pi)$. The numerator is positive for $\sin x < \dfrac{1}{2}$, that is, for $0 \leq x < \dfrac{\pi}{6}$ and for $\dfrac{5\pi}{6} < x < 2\pi$, and vanishes at $\dfrac{\pi}{6}$ and $\dfrac{5\pi}{6}$. The denominator is positive for $0 < x < \pi$ and vanishes at $0$ and $\pi$, which are therefore excluded. The quotient is

- positive on $\left( 0, \dfrac{\pi}{6} \right)$ and on $\left( \dfrac{5\pi}{6}, \pi \right)$, where both numerator and denominator are positive;
- negative on $\left( \dfrac{\pi}{6}, \dfrac{5\pi}{6} \right)$, where the numerator is negative and the denominator positive;
- negative on $(\pi, 2\pi)$, where the numerator is positive and the denominator negative.

The zeros of the numerator, $\dfrac{\pi}{6}$ and $\dfrac{5\pi}{6}$, make the quotient equal to $0$ and are included. The solutions are therefore $0 < x \leq \dfrac{\pi}{6}$ or $\dfrac{5\pi}{6} \leq x < \pi$, and on $\mathbb{R}$ we add $2k\pi$.
:::

:::attenzione
Multiplying both sides of a rational inequality by its denominator changes the solution set when the denominator can be negative. For example, multiplying $\dfrac{1 - 2\sin x}{\sin x} \geq 0$ by $\sin x$ would give $1 - 2\sin x \geq 0$, which holds for $x = \dfrac{3\pi}{2}$. Yet for $x = \dfrac{3\pi}{2}$ the quotient is $\dfrac{1 + 2}{-1} = -3$, so $\dfrac{3\pi}{2}$ is *not* a solution.
:::

:::osservazione{#fattori-segno-costante titolo="Factors with a constant sign"}
A factor that always has the same sign can be omitted from the sign analysis, provided its restrictions are retained. For example, $2 + \cos x \geq 1$ for every $x$, so $\dfrac{\sin x}{2 + \cos x} > 0$ is equivalent to $\sin x > 0$. The factor $1 - \sin x$ is positive for $x \neq \dfrac{\pi}{2} + 2k\pi$ and zero for $x = \dfrac{\pi}{2} + 2k\pi$, so $\dfrac{2\cos x + 1}{1 - \sin x} \geq 0$ is equivalent to the system
$$
\begin{cases}
2\cos x + 1 \geq 0 \\[4pt]
x \neq \dfrac{\pi}{2} + 2k\pi
\end{cases}
$$
whose solutions are $-\dfrac{2\pi}{3} + 2k\pi \leq x \leq \dfrac{2\pi}{3} + 2k\pi$ with $x \neq \dfrac{\pi}{2} + 2k\pi$.
:::

## Systems of trigonometric inequalities

:::definizione{#sistemi-disequazioni titolo="A system of trigonometric inequalities"}
A **system** of trigonometric inequalities asks for the values of $x$ that satisfy *all* the inequalities simultaneously. Its solution set is therefore the **intersection** of the solution sets of the individual inequalities. Solve each inequality in the same interval whose length equals a common period, intersect the intervals, and finally add integer multiples of the period.

For example, consider the system
$$
\begin{cases}
2\sin x - 1 > 0 \\[4pt]
\tan x < 1
\end{cases}
$$
Sine has period $2\pi$ and tangent has period $\pi$, so a common period is $2\pi$, and we work in $[0, 2\pi)$. The first inequality has solutions $\dfrac{\pi}{6} < x < \dfrac{5\pi}{6}$. The second, repeated on the two branches of tangent in $[0, 2\pi)$, has solutions
$$
0 \leq x < \frac{\pi}{4} , \qquad \frac{\pi}{2} < x < \frac{5\pi}{4} , \qquad \frac{3\pi}{2} < x < 2\pi .
$$
The common points are those of $\left( \dfrac{\pi}{6}, \dfrac{\pi}{4} \right)$ and $\left( \dfrac{\pi}{2}, \dfrac{5\pi}{6} \right)$. The solutions of the system are therefore
$$
\frac{\pi}{6} + 2k\pi < x < \frac{\pi}{4} + 2k\pi \quad \text{or} \quad \frac{\pi}{2} + 2k\pi < x < \frac{5\pi}{6} + 2k\pi .
$$

::grafico{curve="cos(t),sin(t),0.5236,0.7854;cos(t),sin(t),0.7854,1.5708;t,0.5,-1.4,1.4;cos(t),sin(t),1.5708,2.618;cos(t),sin(t),2.618,6.8068;t,t,-1.1,1.1" punti="0.866,0.5,vuoto,π/6;0.7071,0.7071,vuoto,π/4;0,1,vuoto,π/2;-0.866,0.5,vuoto,5π/6" xmin=-1.6 xmax=1.6 ymin=-1.4 ymax=1.4 uguale=1 legenda=0 titolo="The line $y = \dfrac{1}{2}$ separates the points satisfying $\sin x > \dfrac{1}{2}$ from the rest of the circle, and the line $y = x$ passes through the points where $\tan x = 1$. The solid arcs from $\dfrac{\pi}{6}$ to $\dfrac{\pi}{4}$ and from $\dfrac{\pi}{2}$ to $\dfrac{5\pi}{6}$ give the solutions of the system"}

:::

:::osservazione
To check the solutions of a system, substitute an interior value from each resulting interval. In the preceding system, $x = \dfrac{2\pi}{3}$ gives $2\sin x - 1 = \sqrt{3} - 1 > 0$ and $\tan x = -\sqrt{3} < 1$, so it is a solution. The value $x = \dfrac{\pi}{3}$ gives $\tan x = \sqrt{3}$, which is not less than $1$, so it is not a solution even though it satisfies the first inequality.
:::

## Domains of trigonometric functions

:::teorema{#dominio-funzioni-goniometriche titolo="Domain of a trigonometric function"}
The **domain** of a function $y = f(x)$ is the set of values of $x$ for which the expression $f(x)$ is defined. For functions formed from trigonometric functions, the conditions are the following.

- A denominator must differ from $0$.
- The radicand of a root of even index must be greater than or equal to $0$.
- The argument of a logarithm must be greater than $0$.
- The argument of tangent must differ from $\dfrac{\pi}{2} + k\pi$, and the argument of cotangent must differ from $k\pi$.
- The arguments of $\arcsin$ and $\arccos$ must lie in $[-1, 1]$.

All the conditions must hold simultaneously, so write them as a system. The domain is the solution set of that system. For example, the function $f(x) = \sqrt{2\sin x - 1}$ is defined when $2\sin x - 1 \geq 0$, that is, $\sin x \geq \dfrac{1}{2}$, so its domain is
$$
\frac{\pi}{6} + 2k\pi \leq x \leq \frac{5\pi}{6} + 2k\pi .
$$

::grafico{f="sqrt(2*sin(x)-1);sin(x)" punti="0.5236,0,pieno;2.618,0,pieno" segmenti="0.5236,0,0.5236,0.5;2.618,0,2.618,0.5" xmin=-0.5 xmax=6.6 ymin=-1.5 ymax=1.5 legenda="y = \sqrt{2\sin x - 1};y = \sin x" titolo="In $[0, 2\pi]$, the function $\sqrt{2\sin x - 1}$ is defined only where $\sin x \geq \dfrac{1}{2}$, that is, for $\dfrac{\pi}{6} \leq x \leq \dfrac{5\pi}{6}$"}

:::

:::esempio{titolo="Domains involving logarithms and fractions"}
The function $g(x) = \ln(\tan x)$ is defined when the tangent is defined and positive. The system
$$
\begin{cases}
x \neq \dfrac{\pi}{2} + k\pi \\[4pt]
\tan x > 0
\end{cases}
$$
has solutions $k\pi < x < \dfrac{\pi}{2} + k\pi$ because on each branch the tangent is positive between its zero $k\pi$ and the asymptote $\dfrac{\pi}{2} + k\pi$.

The function $h(x) = \dfrac{\sqrt{\cos x}}{2\sin x - 1}$ requires a nonnegative radicand and a nonzero denominator:
$$
\begin{cases}
\cos x \geq 0 \\[4pt]
2\sin x - 1 \neq 0
\end{cases}
$$
In the interval $\left[ -\dfrac{\pi}{2}, \dfrac{3\pi}{2} \right)$, the first condition gives $-\dfrac{\pi}{2} \leq x \leq \dfrac{\pi}{2}$. The second excludes $\dfrac{\pi}{6}$ and $\dfrac{5\pi}{6}$, and of these two values, only $\dfrac{\pi}{6}$ lies in the interval obtained. The domain is therefore
$$
-\frac{\pi}{2} + 2k\pi \leq x < \frac{\pi}{6} + 2k\pi \quad \text{or} \quad \frac{\pi}{6} + 2k\pi < x \leq \frac{\pi}{2} + 2k\pi .
$$
:::
