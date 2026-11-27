---
titolo: Graphing inequalities in two variables
sommario: How to draw the region of the plane described by an inequality in x and y with lines, parabolas, circles, ellipses and hyperbolas, for every symbol, and how the region is prepared for domains, double integrals and maxima and minima.
---

## Introduction

In Mathematical Analysis 2 functions depend on two or more variables. When the variables are two, the sets we work on are regions of the plane, described by inequalities in $x$ and $y$.

:::definizione{#dove-servono titolo="Where graphical inequalities are used"}
A **graphical inequality** is an inequality in $x$ and $y$ that is solved by drawing in the Cartesian plane the set of points that satisfy it. These regions are met at three points of the syllabus.

- **Domain of a function.** The existence conditions form a system of inequalities, and the domain is the region that solves it.
- **Double integrals.** The set of integration must be written as a normal domain with respect to the $x$-axis or to the $y$-axis, because the limits of integration are read off from this description.
- **Maxima and minima on a set, free or constrained.** The set must be recognized and decomposed into interior points, boundary pieces and vertices, because the candidates are sought separately in each part.

In all three cases the first step is to pass from the inequalities to the figure.
:::

:::esempio{titolo="One region, three uses"}
The region $D$ lying between the parabola $y = x^2$ and the line $y = x + 2$ is described by the system
$$
\begin{cases}
y \geq x^2 \\[4pt]
y \leq x + 2
\end{cases}
$$
The two curves meet at the points $A(-1, 1)$ and $B(2, 4)$.

::grafico{regione="y>=x^2; y<=x+2" xmin=-3 xmax=4 ymin=-1 ymax=6 uguale=1 linee="1,1 1,3" punti="1,1,pieno;1,3,pieno;-1,1,pieno,A;2,4,pieno,B" titolo="The region $D$ with a vertical segment crossing it"}

- As a **domain**: $D$ is the domain of the function $f(x, y) = \sqrt{y - x^2} + \sqrt{x + 2 - y}$.
- As a **set of integration**: $D$ is written $-1 \leq x \leq 2$, $x^2 \leq y \leq x + 2$, and the limits of the double integral are read off from this description:
$$
\iint_D f(x, y)\, dx\, dy = \int_{-1}^{2} \left( \int_{x^2}^{x + 2} f(x, y)\, dy \right) dx .
$$
- As a **set for maxima and minima**: the candidates are sought among the interior points, on the arc of the parabola, on the line segment and at the vertices $A$ and $B$.
:::

## Inequalities in two variables

:::definizione{#soluzioni-due-variabili titolo="Solutions of an inequality in two variables"}
A **solution** of the inequality $F(x, y) > 0$ is a pair of numbers $(x_0, y_0)$ for which $F(x_0, y_0) > 0$ is true. Every pair is a point of the Cartesian plane, so the solution set is a **region of the plane**. Solving the inequality graphically means drawing this region.

In the inequality $x + y > 2$ the point $(3, 1)$ is a solution, because $3 + 1 = 4$ and $4 > 2$. The point $(0, 0)$ is not a solution, because $0 > 2$ is false.
:::

:::definizione{#frontiera-e-simboli titolo="Boundary and meaning of the symbols"}
The equation $F(x, y) = 0$ describes a curve, which divides the plane into two or more regions. The curve is called the **boundary**. The symbol of the inequality determines whether the boundary is part of the solutions.

| Symbol | Solutions | Boundary in the drawing |
| --- | --- | --- |
| $F = 0$ | only the points of the curve | solid line |
| $F < 0$, $F > 0$ | one or more regions, curve excluded | dashed line |
| $F \leq 0$, $F \geq 0$ | the same regions and in addition the curve | solid line |
| $F \neq 0$ | the whole plane except the curve | dashed line |

In the figure one chooses a curve and a symbol, and reads which region is shaded and how the boundary is drawn.

::simboli{curva="circonferenza" simbolo="<=" titolo="One curve and the six symbols: the region changes with the symbol"}
:::

:::richiamo{titolo="Bolzano's theorem"}
**Hypotheses.** $\varphi$ is continuous on $[a, b]$ and $\varphi(a)$, $\varphi(b)$ have opposite signs.

**Conclusion.** There exists $t_0 \in (a, b)$ such that $\varphi(t_0) = 0$.
:::

::::teorema{#segno-costante titolo="Constant sign in the regions"}
Let $F$ be a function continuous on the whole plane, as all polynomials in $x$ and $y$ are. Then in each of the regions into which the curve $F(x, y) = 0$ divides the plane, $F$ has **constant sign**.

The theorem justifies the **test point method**. One chooses a point in each region and computes $F$ at that point. The sign found is the sign of $F$ in the whole region.

:::dimostrazione
Let $A$ be one of the regions, that is, a set of points where $F \neq 0$ such that any two of its points can be joined by a continuous arc contained in $A$. Suppose by contradiction that there exist two points $P$ and $Q$ of $A$ with $F(P) > 0$ and $F(Q) < 0$. Let $\gamma : [0, 1] \to A$ be a continuous arc with $\gamma(0) = P$ and $\gamma(1) = Q$. The function $\varphi(t) = F(\gamma(t))$ is continuous on $[0, 1]$, because it is a composition of continuous functions, and we have $\varphi(0) > 0$ and $\varphi(1) < 0$. By Bolzano's theorem there exists $t_0 \in (0, 1)$ with $F(\gamma(t_0)) = 0$. The point $\gamma(t_0)$ belongs to $A$, where $F$ is different from zero, and this is a contradiction. Therefore $F$ has the same sign at all points of $A$.
:::
::::

:::esempio{titolo="Test point"}
In the inequality $x^2 + y^2 - 4 > 0$ the boundary is the circle $x^2 + y^2 = 4$, which divides the plane into two regions. At the origin we have $F(0, 0) = -4$, so $F$ is negative at all interior points. At the point $(3, 0)$ we have $F(3, 0) = 5$, so $F$ is positive at all exterior points. The solutions are therefore the **exterior points** of the circle.

::grafico{regione="x^2+y^2>4" xmin=-4 xmax=4 ymin=-4 ymax=4 uguale=1 punti="0,0,pieno,F < 0;3,0,pieno,F > 0" titolo="$x^2 + y^2 - 4 > 0$ with the two test points"}
:::

:::teorema{#variabile-isolata titolo="Isolated variable rule"}
When one of the two variables is isolated, the region is read off from the inequality.

- $y > f(x)$: the points **above** the graph $y = f(x)$;
- $y < f(x)$: the points **below** the graph;
- $x > g(y)$: the points **to the right** of the curve $x = g(y)$;
- $x < g(y)$: the points **to the left** of the curve.

On the vertical line with $x$-coordinate $x_0$ the point of the graph has $y$-coordinate $f(x_0)$, and a point of the same line with a greater $y$-coordinate lies higher. For the curves $x = g(y)$ the reasoning is the same on horizontal lines. With the variable isolated the region is therefore obtained without a test point.
:::

:::attenzione
To isolate a variable it may be necessary to divide by a negative number, and in that case the direction of the inequality changes. From $4x - 2y < 6$ we obtain $-2y < -4x + 6$, hence $y > 2x - 3$. The region is **above** the line $y = 2x - 3$, while the symbol $<$ of the initial inequality would suggest the points below the line.
:::

## Lines and half-planes

:::definizione{#semipiano titolo="Half-plane"}
A line divides the plane into two regions, called **half-planes**.

- Non-vertical line $y = mx + q$: the inequality $y > mx + q$ describes the half-plane above the line, $y < mx + q$ the one below.
- Vertical line $x = k$: the inequality $x > k$ describes the half-plane to the right, $x < k$ the one to the left.

For a line in implicit form $ax + by + c = 0$ one isolates a variable or uses a test point. If $c \neq 0$ the line does not pass through the origin, and the origin is the most convenient test point, because the left-hand side equals $c$ there.
:::

:::esempio{titolo="Four half-planes"}
In the inequality $y \geq 2x - 1$ the variable $y$ is isolated, so the solutions are the points above the line, line included. In the inequality $2x + 3y < 6$ we use the origin as a test point: $0 < 6$ is true, so the half-plane is the one that contains the origin, line excluded. The inequality $x \geq -1$ describes the half-plane to the right of the vertical line $x = -1$. In the inequality $y > x$ the line passes through the origin, so we take $(0, 1)$ as a test point: $1 > 0$ is true, and the half-plane is the one above the line.

<div class="figure-affiancate">

::grafico{regione="y>=2*x-1" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 titolo="$y \geq 2x - 1$"}

::grafico{regione="2*x+3*y<6" xmin=-2 xmax=4 ymin=-2 ymax=4 uguale=1 titolo="$2x + 3y < 6$"}

::grafico{regione="x>=-1" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 titolo="$x \geq -1$"}

::grafico{regione="y>x" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 punti="0,1,pieno" titolo="$y > x$ with the test point $(0, 1)$"}

</div>
:::

:::definizione{#striscia titolo="Strip"}
A double inequality with the same expression in the middle describes a **strip** lying between two parallel lines. The inequality $|x| \leq 2$ is equivalent to $-2 \leq x \leq 2$. The inequality $|y - x| < 1$ is equivalent to $-1 < y - x < 1$, that is, to $x - 1 < y < x + 1$.

<div class="figure-affiancate">

::grafico{regione="x>=-2; x<=2" xmin=-4 xmax=4 ymin=-4 ymax=4 uguale=1 titolo="$|x| \leq 2$: vertical strip, lines included"}

::grafico{regione="y>x-1; y<x+1" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 titolo="$|y - x| < 1$: strip between $y = x - 1$ and $y = x + 1$, lines excluded"}

</div>

Strips appear in the domains of the functions $\arcsin$ and $\arccos$, whose argument must lie between $-1$ and $1$.
:::

## Parabolas

In a parabola only one variable appears squared. If $x$ appears squared, the axis of the parabola is vertical; if $y$ does, the axis is horizontal.

:::definizione{#parabola-asse-verticale titolo="Parabola with vertical axis"}
The equation is $y = ax^2 + bx + c$ with $a \neq 0$. The vertex has $x$-coordinate $x_V = -\dfrac{b}{2a}$ and $y$-coordinate $y_V = a x_V^2 + b x_V + c$. The parabola opens upward if $a > 0$, downward if $a < 0$.

- $y > ax^2 + bx + c$: the points **above** the parabola;
- $y < ax^2 + bx + c$: the points **below** the parabola.

<div class="figure-affiancate">

::grafico{regione="y>=x^2" xmin=-3 xmax=3 ymin=-1 ymax=5 uguale=1 titolo="$y \geq x^2$"}

::grafico{regione="y<x^2-4*x+3" xmin=-1 xmax=5 ymin=-2 ymax=4 uguale=1 punti="2,-1,pieno,V" titolo="$y < x^2 - 4x + 3$: vertex $(2, -1)$, intersections with the $x$-axis at $1$ and $3$"}

::grafico{regione="y<=2*x-x^2" xmin=-2 xmax=4 ymin=-3 ymax=3 uguale=1 punti="1,1,pieno,V" titolo="$y \leq 2x - x^2$: vertex $(1, 1)$, opening downward"}

</div>
:::

:::definizione{#parabola-asse-orizzontale titolo="Parabola with horizontal axis"}
The equation is $x = ay^2 + by + c$ with $a \neq 0$. The roles of $x$ and $y$ are exchanged: the vertex has $y$-coordinate $y_V = -\dfrac{b}{2a}$ and $x$-coordinate $x_V = a y_V^2 + b y_V + c$. The parabola opens to the right if $a > 0$, to the left if $a < 0$.

- $x > ay^2 + by + c$: the points **to the right** of the parabola;
- $x < ay^2 + by + c$: the points **to the left** of the parabola.

<div class="figure-affiancate">

::grafico{regione="x>y^2" xmin=-1 xmax=5 ymin=-3 ymax=3 uguale=1 titolo="$x > y^2$"}

::grafico{regione="x<=-y^2+2*y+3" xmin=-2 xmax=5 ymin=-2.5 ymax=4.5 uguale=1 punti="4,1,pieno,V" titolo="$x \leq -y^2 + 2y + 3$: vertex $(4, 1)$, the parabola opens to the left"}

</div>

The graph of $y = \sqrt{x}$ is the upper half of the parabola $x = y^2$, and that of $y = -\sqrt{x}$ is the lower half. For this reason parabolas with horizontal axis appear whenever a domain or a double integral contains a square root.
:::

:::definizione{#parabola-traslata titolo="Parabola with vertex away from the origin"}
By completing the square the equation takes the form $y - y_V = a(x - x_V)^2$ or $x - x_V = a(y - y_V)^2$. It is the parabola $y = ax^2$, or $x = ay^2$, translated so that the vertex is $V(x_V, y_V)$. The vertex form makes it possible to draw the parabola without further computations.
:::

:::esempio{titolo="From the general form to the vertex"}
In the inequality $y^2 - 4y - 2x + 6 \leq 0$ the squared variable is $y$, so we isolate $x$.
$$
\begin{aligned}
2x &\geq y^2 - 4y + 6 \\[6pt]
x &\geq \frac{1}{2} y^2 - 2y + 3 \\[6pt]
x &\geq \frac{1}{2} (y - 2)^2 + 1
\end{aligned}
$$
The boundary is the parabola with horizontal axis and vertex $(1, 2)$, which opens to the right. The variable $x$ is isolated with the symbol $\geq$, so the solutions are the points **to the right of the parabola**, parabola included.

::grafico{regione="x>=0.5*(y-2)^2+1" xmin=-1 xmax=6 ymin=-1.5 ymax=5.5 uguale=1 punti="1,2,pieno,V" titolo="$y^2 - 4y - 2x + 6 \leq 0$"}
:::

## Circles

:::definizione{#cerchio-interno-esterno titolo="Interior points and exterior points of a circle"}
The circle with center $C(x_0, y_0)$ and radius $r > 0$ has equation $(x - x_0)^2 + (y - y_0)^2 = r^2$. The left-hand side is the square of the distance of the point $(x, y)$ from the center.

- $(x - x_0)^2 + (y - y_0)^2 < r^2$: the points at distance less than $r$ from the center, that is, the **interior points**;
- $(x - x_0)^2 + (y - y_0)^2 > r^2$: the **exterior points**.

With $\leq$ and $\geq$ the circle is added to the solutions. The set of interior points together with the circle is the **disk**, also called the closed disk. The double inequality $r_1^2 < (x - x_0)^2 + (y - y_0)^2 < r_2^2$ describes an **annulus**.
:::

:::teorema{#centro-e-raggio titolo="From the general form to center and radius"}
The equation $x^2 + y^2 + \alpha x + \beta y + \gamma = 0$ is rewritten by completing the squares:
$$
\left( x + \frac{\alpha}{2} \right)^2 + \left( y + \frac{\beta}{2} \right)^2 = \frac{\alpha^2}{4} + \frac{\beta^2}{4} - \gamma .
$$
Denoting the right-hand side by $k$, there are three cases.

- $k > 0$: circle with center $\left( -\dfrac{\alpha}{2}, -\dfrac{\beta}{2} \right)$ and radius $\sqrt{k}$;
- $k = 0$: the center alone;
- $k < 0$: no points.

The form with center and radius is the one from which the region is read off, so completing the squares is the first step of every inequality with $x^2$ and $y^2$.
:::

:::esempio{titolo="Exterior of a disk with center away from the origin"}
In the inequality $x^2 + y^2 - 2x + 4y - 4 > 0$ we complete the squares in $x$ and in $y$.
$$
\begin{aligned}
(x - 1)^2 - 1 + (y + 2)^2 - 4 - 4 &> 0 \\[6pt]
(x - 1)^2 + (y + 2)^2 &> 9
\end{aligned}
$$
The boundary is the circle with center $(1, -2)$ and radius $3$. The square of the distance from the center is greater than $9$, so the solutions are the **exterior points**, circle excluded.

<div class="figure-affiancate">

::grafico{regione="x^2+y^2<=4" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 titolo="$x^2 + y^2 \leq 4$"}

::grafico{regione="(x-1)^2+(y+2)^2>9" xmin=-3 xmax=5 ymin=-6 ymax=2 uguale=1 punti="1,-2,pieno,C" titolo="$(x - 1)^2 + (y + 2)^2 > 9$"}

::grafico{regione="x^2+y^2>1; x^2+y^2<=4" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 titolo="$1 < x^2 + y^2 \leq 4$: inner circle excluded, outer circle included"}

::grafico{regione="x^2+y^2<=2*x" xmin=-1.5 xmax=2.5 ymin=-2 ymax=2 uguale=1 punti="1,0,pieno,C" titolo="$x^2 + y^2 \leq 2x$, that is, $(x - 1)^2 + y^2 \leq 1$"}

</div>
:::

:::osservazione{#semicirconferenze titolo="Semicircles"}
Isolating $y$ in the equation $x^2 + y^2 = 4$ gives the upper semicircle $y = \sqrt{4 - x^2}$ and the lower one $y = -\sqrt{4 - x^2}$. The double inequality $0 \leq y \leq \sqrt{4 - x^2}$ therefore describes the upper half-disk. With this description disks appear in the limits of double integrals.

::grafico{regione="y>=0; x^2+y^2<=4" xmin=-3 xmax=3 ymin=-2 ymax=4 uguale=1 tracce=0 titolo="$0 \leq y \leq \sqrt{4 - x^2}$"}
:::

:::osservazione{#cerchi-degeneri titolo="Degenerate cases"}
The inequality $(x - 1)^2 + (y + 2)^2 \leq 0$ is satisfied only by the point $(1, -2)$, because a sum of squares is zero only if both squares are zero. The inequality $(x - 1)^2 + (y + 2)^2 > -3$ is satisfied by all points of the plane, because a sum of squares is greater than or equal to zero.
:::

## Ellipses

:::definizione{#ellisse-interno-esterno titolo="Interior points and exterior points of an ellipse"}
The ellipse with center $C(x_0, y_0)$, horizontal semi-axis $a$ and vertical semi-axis $b$ has equation
$$
\frac{(x - x_0)^2}{a^2} + \frac{(y - y_0)^2}{b^2} = 1 .
$$
The vertices are $(x_0 \pm a,\, y_0)$ and $(x_0,\, y_0 \pm b)$. At the center the left-hand side equals $0$, which is less than $1$.

- left-hand side $< 1$: the **interior points**;
- left-hand side $> 1$: the **exterior points**.

An equation $Ax^2 + By^2 + Cx + Dy + E = 0$ with $A$ and $B$ of the same sign and different from each other is brought to this form by completing the squares in $x$ and in $y$ and dividing by the constant term. The ellipse is drawn from the semi-axes, and the region is read off from the symbol.
:::

:::esempio{titolo="Ellipse with center away from the origin"}
In the inequality $4x^2 + y^2 - 8x + 2y + 1 < 0$ we factor out the coefficient of $x^2$ and complete the squares.
$$
\begin{aligned}
4(x^2 - 2x) + (y^2 + 2y) + 1 &< 0 \\[6pt]
4(x - 1)^2 - 4 + (y + 1)^2 - 1 + 1 &< 0 \\[6pt]
4(x - 1)^2 + (y + 1)^2 &< 4 \\[6pt]
(x - 1)^2 + \frac{(y + 1)^2}{4} &< 1
\end{aligned}
$$
The boundary is the ellipse with center $(1, -1)$ with $a = 1$ and $b = 2$. The left-hand side is less than $1$, so the solutions are the **interior points**, ellipse excluded.

<div class="figure-affiancate">

::grafico{regione="x^2/9+y^2/4<=1" xmin=-4 xmax=4 ymin=-4 ymax=4 uguale=1 titolo="$\dfrac{x^2}{9} + \dfrac{y^2}{4} \leq 1$"}

::grafico{regione="4*x^2+y^2>4" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 titolo="$4x^2 + y^2 > 4$, that is, $x^2 + \dfrac{y^2}{4} > 1$"}

::grafico{regione="(x-1)^2+(y+1)^2/4<1" xmin=-2 xmax=4 ymin=-4 ymax=2 uguale=1 punti="1,-1,pieno,C" titolo="$(x - 1)^2 + \dfrac{(y + 1)^2}{4} < 1$"}

</div>
:::

## Hyperbolas

The hyperbola consists of two branches, so it divides the plane into three regions.

:::definizione{#iperbole-rami-orizzontali titolo="Hyperbola with branches to the right and to the left"}
$$
\frac{(x - x_0)^2}{a^2} - \frac{(y - y_0)^2}{b^2} = 1
$$
The center is $C(x_0, y_0)$, the vertices are $(x_0 \pm a,\, y_0)$ and the asymptotes are the lines $y - y_0 = \pm \dfrac{b}{a} (x - x_0)$. At the center the left-hand side equals $0$, which is less than $1$.

- left-hand side $< 1$: the region **between the two branches**, which contains the center;
- left-hand side $> 1$: the two regions **inside the branches**, one to the right and one to the left.
:::

:::definizione{#iperbole-rami-verticali titolo="Hyperbola with branches above and below"}
$$
\frac{(y - y_0)^2}{b^2} - \frac{(x - x_0)^2}{a^2} = 1
$$
The vertices are $(x_0,\, y_0 \pm b)$ and the asymptotes are the same. Here too the left-hand side less than $1$ describes the region between the two branches, and the left-hand side greater than $1$ the two regions inside the branches, one above and one below. The minus sign in front of $x^2$ or of $y^2$ therefore determines on which side the branches lie.

<div class="figure-affiancate">

::grafico{regione="x^2-y^2>=1" xmin=-4 xmax=4 ymin=-4 ymax=4 uguale=1 segmenti="-4,-4,4,4;-4,4,4,-4" titolo="$x^2 - y^2 \geq 1$"}

::grafico{regione="y^2/4-x^2<1" xmin=-4 xmax=4 ymin=-4 ymax=4 uguale=1 segmenti="-2,-4,2,4;-2,4,2,-4" titolo="$\dfrac{y^2}{4} - x^2 < 1$: vertices $(0, \pm 2)$, asymptotes $y = \pm 2x$"}

</div>
:::

:::definizione{#iperbole-equilatera titolo="Rectangular hyperbola referred to its asymptotes"}
The hyperbola $xy = k$, with $k \neq 0$, has the coordinate axes as asymptotes. The branches lie in the first and third quadrants if $k > 0$, in the second and fourth if $k < 0$. At the origin the product $xy$ equals $0$. For $k > 0$ we therefore have:

- $xy < k$: the region between the two branches, which contains the origin and the axes;
- $xy > k$: the two regions beyond the branches.

For $k < 0$ the region that contains the origin is $xy > k$. The hyperbola $(x - x_0)(y - y_0) = k$ is the same curve with asymptotes $x = x_0$ and $y = y_0$. These regions appear in the domains in which a product $xy$ is the argument of a logarithm or of a root.
:::

:::attenzione
Dividing both sides of $xy > 1$ by $x$, the direction depends on the sign of $x$.

- For $x > 0$ we obtain $y > \dfrac{1}{x}$.
- For $x < 0$ we obtain $y < \dfrac{1}{x}$.

The inequality $y > \dfrac{1}{x}$ describes a region different from $xy > 1$, because for $x < 0$ it contains the points above the branch in the third quadrant.

<div class="figure-affiancate">

::grafico{regione="x*y>1" xmin=-4 xmax=4 ymin=-4 ymax=4 uguale=1 titolo="$xy > 1$"}

::grafico{regione="x>0; x*y>1 | x<0; x*y<1" xmin=-4 xmax=4 ymin=-4 ymax=4 uguale=1 tracce=0 titolo="$y > \dfrac{1}{x}$"}

</div>
:::

:::esempio{titolo="Hyperbola with center away from the origin"}
In the inequality $x^2 - 4y^2 - 2x - 16y - 19 \leq 0$ the coefficients of $x^2$ and $y^2$ have opposite signs, so the boundary is a hyperbola.
$$
\begin{aligned}
(x^2 - 2x) - 4(y^2 + 4y) - 19 &\leq 0 \\[6pt]
(x - 1)^2 - 1 - 4(y + 2)^2 + 16 - 19 &\leq 0 \\[6pt]
(x - 1)^2 - 4(y + 2)^2 &\leq 4 \\[6pt]
\frac{(x - 1)^2}{4} - (y + 2)^2 &\leq 1
\end{aligned}
$$
The center is $(1, -2)$, the vertices are $(-1, -2)$ and $(3, -2)$, the asymptotes are $y + 2 = \pm \dfrac{1}{2} (x - 1)$. The left-hand side is less than or equal to $1$, so the solutions form the **region between the two branches**, branches included.

::grafico{regione="(x-1)^2/4-(y+2)^2<=1" xmin=-4 xmax=6 ymin=-7 ymax=3 uguale=1 segmenti="-4,-4.5,6,0.5;-4,0.5,6,-4.5" punti="1,-2,pieno,C" titolo="$\dfrac{(x - 1)^2}{4} - (y + 2)^2 \leq 1$ with the asymptotes"}
:::

:::osservazione{#iperboli-degeneri titolo="Pairs of lines"}
The equation $x^2 - y^2 = 0$ is equivalent to $(x - y)(x + y) = 0$, that is, to the two lines $y = x$ and $y = -x$. The inequality $x^2 - y^2 > 0$ is equivalent to $|x| > |y|$ and describes the two opposite angles that contain the $x$-axis. In the same way $xy > 0$ describes the first and third quadrants, axes excluded.

<div class="figure-affiancate">

::grafico{regione="x^2-y^2>0" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 titolo="$x^2 - y^2 > 0$"}

::grafico{regione="x*y>0" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 titolo="$xy > 0$"}

</div>
:::

## Recognizing the conic and procedure

:::teorema{#riconoscere-la-conica titolo="Recognizing the conic from the coefficients"}
In the equation $Ax^2 + By^2 + Cx + Dy + E = 0$, without the $xy$ term, the curve is recognized from the coefficients of $x^2$ and $y^2$.

| Coefficients | Curve |
| --- | --- |
| $A = B \neq 0$ | circle |
| $A$ and $B$ of the same sign, $A \neq B$ | ellipse |
| $A$ and $B$ of opposite signs | hyperbola |
| $B = 0$, $A \neq 0$, $D \neq 0$ | parabola with vertical axis |
| $A = 0$, $B \neq 0$, $C \neq 0$ | parabola with horizontal axis |

After completing the squares the degenerate cases may occur: a point, no points, a pair of lines. The recognition tells at once which canonical form to look for and therefore which region to expect.

In this chapter the $xy$ term appears only in the hyperbola $xy = k$. Conics with the $xy$ term have rotated axes and are treated in Linear algebra, in the chapter on conics and quadrics. The canonical forms of the conics and completing the square are explained in Precalculus, in the chapter on analytic geometry.
:::

:::osservazione{#procedimento titolo="Procedure"}
A graphical inequality is solved in four steps.

1. All the terms are brought to the left-hand side, so as to compare $F(x, y)$ with $0$, or a variable is isolated.
2. The curve $F(x, y) = 0$ is recognized and drawn, as a solid line with $\leq$, $\geq$, $=$ and as a dashed line with $<$, $>$, $\neq$.
3. The sign of $F$ in each region is determined, with the isolated variable rule or with a test point.
4. The regions in which the inequality is true are shaded.
:::

:::osservazione{#tabella-riassuntiva titolo="Summary table"}
For lines and parabolas the left-hand side is the isolated variable, $y$ or $x$.

| Boundary | Left-hand side less | Left-hand side greater |
| --- | --- | --- |
| $y = mx + q$ | below the line | above the line |
| $x = k$ | to the left | to the right |
| $y = ax^2 + bx + c$ | below the parabola | above the parabola |
| $x = ay^2 + by + c$ | to the left of the parabola | to the right of the parabola |
| $(x - x_0)^2 + (y - y_0)^2 = r^2$ | interior points | exterior points |
| $\dfrac{(x - x_0)^2}{a^2} + \dfrac{(y - y_0)^2}{b^2} = 1$ | interior points | exterior points |
| $\dfrac{(x - x_0)^2}{a^2} - \dfrac{(y - y_0)^2}{b^2} = 1$ | between the two branches | inside the branches |
| $xy = k$, with $k > 0$ | between the two branches | beyond the branches |
:::

## Curves that are not conics

The isolated variable rule holds for the graph of any function, so the regions bounded by exponentials, logarithms and trigonometric functions are drawn in the same way.

:::definizione{#regioni-con-grafici titolo="Regions bounded by the graph of a function"}
Let $f$ be a function defined on an interval $I$. The inequality $y > f(x)$ describes the points above the graph of $f$ and the inequality $y < f(x)$ the points below, **restricted to the $x$-coordinates** $x \in I$. The existence condition of $f$ is therefore part of the region: the inequality $y < \ln x$ is equivalent to the system formed by $x > 0$ and $y < \ln x$.

<div class="figure-affiancate">

::grafico{regione="y>exp(x)" xmin=-4 xmax=3 ymin=-1 ymax=6 uguale=1 titolo="$y > e^x$"}

::grafico{regione="y<log(x)" xmin=-1 xmax=6 ymin=-4 ymax=3 uguale=1 titolo="$y < \ln x$: the region lies to the right of the $y$-axis"}

::grafico{regione="y>=sin(x); y<=1" xmin=-7 xmax=7 ymin=-2 ymax=2 uguale=1 titolo="$\sin x \leq y \leq 1$"}

::grafico{regione="x>=0; y<=sqrt(x)" xmin=-1 xmax=6 ymin=-3 ymax=4 uguale=1 tracce=0 titolo="$y \leq \sqrt{x}$: the curve is the upper half of $x = y^2$"}

</div>
:::

:::teorema{#funzioni-monotone titolo="Inequalities with logarithms, exponentials and roots"}
Let $F$ and $G$ be two expressions in $x$ and $y$. The functions $\ln t$, $e^t$ and $\sqrt{t}$ are strictly increasing, so they preserve the direction of inequalities.

- $\ln F \geq 0$ is equivalent to $F \geq 1$, and $\ln F < 0$ is equivalent to $0 < F < 1$;
- $e^F > e^G$ is equivalent to $F > G$;
- $\sqrt{F} \leq c$, with $c \geq 0$, is equivalent to $0 \leq F \leq c^2$;
- $|F| \leq c$, with $c \geq 0$, is equivalent to $-c \leq F \leq c$.

With these equivalences an inequality that contains a transcendental function is reduced to an inequality between algebraic expressions, and the boundary is again a line or a conic.
:::

:::esempio{titolo="Two domains that reduce to a conic"}
The function $f(x, y) = \sqrt{\ln(x^2 + y^2 - 1)}$ is defined where $\ln(x^2 + y^2 - 1) \geq 0$, that is, where $x^2 + y^2 - 1 \geq 1$. The domain is therefore the set $x^2 + y^2 \geq 2$, formed by the exterior points of the circle with center the origin and radius $\sqrt{2}$, circle included.

The function $g(x, y) = \arcsin(x^2 + y^2 - 2)$ is defined where $-1 \leq x^2 + y^2 - 2 \leq 1$, that is, where $1 \leq x^2 + y^2 \leq 3$. The domain is the **annulus** lying between the circles of radius $1$ and $\sqrt{3}$, both included.

<div class="figure-affiancate">

::grafico{regione="x^2+y^2>=2" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 titolo="Domain of $f$: $x^2 + y^2 \geq 2$"}

::grafico{regione="x^2+y^2>=1; x^2+y^2<=3" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 titolo="Domain of $g$: $1 \leq x^2 + y^2 \leq 3$"}

</div>
:::

## Systems, products and quotients

:::definizione{#sistema-di-disequazioni titolo="System of inequalities"}
The solutions of a system are the points that satisfy *all* the inequalities, that is, the **intersection** of the regions. Each boundary piece follows the symbol of its own inequality. A point where an included boundary meets an excluded boundary does not belong to the region.

<div class="figure-affiancate">

::grafico{regione="y>=x^2; y<=x+2" xmin=-3 xmax=4 ymin=-1 ymax=6 uguale=1 punti="-1,1,pieno;2,4,pieno" titolo="$y \geq x^2$ and $y \leq x + 2$: the curves meet at $(-1, 1)$ and $(2, 4)$"}

::grafico{regione="x^2+y^2>=1; x^2+y^2<=4; x>=0; y>=0" xmin=-1 xmax=3 ymin=-1 ymax=3 uguale=1 titolo="$1 \leq x^2 + y^2 \leq 4$ with $x \geq 0$ and $y \geq 0$"}

::grafico{regione="x>=y^2; x<4" xmin=-1 xmax=6 ymin=-3.5 ymax=3.5 uguale=1 punti="4,2,vuoto;4,-2,vuoto" titolo="$x \geq y^2$ and $x < 4$: the points $(4, \pm 2)$ are excluded"}

</div>

The domains of functions of two variables are almost always systems, because every root, logarithm or denominator adds a condition.
:::

:::esempio{titolo="A domain with three different symbols"}
The function $f(x, y) = \dfrac{\sqrt{y - x^2}}{\ln(4 - x^2 - y^2)}$ is defined where the radicand is greater than or equal to zero, the argument of the logarithm is greater than zero and the denominator is different from zero. The logarithm vanishes when its argument equals $1$, that is, when $x^2 + y^2 = 3$.
$$
\begin{cases}
y \geq x^2 \\[4pt]
x^2 + y^2 < 4 \\[4pt]
x^2 + y^2 \neq 3
\end{cases}
$$
The domain is the part of the disk of radius $2$ that lies above the parabola, with the arc of the circle of radius $\sqrt{3}$ removed. The parabola is included, the two circles are excluded.

::grafico{regione="y>=x^2; x^2+y^2<4; x^2+y^2!=3" xmin=-3 xmax=3 ymin=-2.5 ymax=3.5 uguale=1 punti="1.2496,1.5616,vuoto;-1.2496,1.5616,vuoto;1.1414,1.3028,vuoto;-1.1414,1.3028,vuoto" titolo="The domain of $f$"}
:::

:::teorema{#prodotto-e-quoziente titolo="Product and quotient"}
The inequality $F(x, y) \cdot G(x, y) > 0$ is true at the points where $F$ and $G$ have the same sign. The curves $F = 0$ and $G = 0$ divide the plane into regions. In each of them the sign of $F$ and that of $G$ are determined and the rule of signs is applied, as in the sign analysis of Mathematical Analysis 1. For a quotient the procedure is the same, and the curve where the denominator vanishes is *always* excluded.

<div class="figure-affiancate">

::grafico{regione="x^2+y^2>=1; y>=x | x^2+y^2<=1; y<=x" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 titolo="$(x^2 + y^2 - 1)(y - x) \geq 0$"}

::grafico{regione="y>=x^2; x^2+y^2>4 | y<=x^2; x^2+y^2<4" xmin=-3.5 xmax=3.5 ymin=-3 ymax=4 uguale=1 punti="1.2496,1.5616,vuoto;-1.2496,1.5616,vuoto" titolo="$\dfrac{y - x^2}{x^2 + y^2 - 4} \geq 0$: parabola included, circle excluded"}

</div>
:::

:::osservazione{#valore-assoluto-nel-piano titolo="Absolute value"}
An inequality with absolute values is solved by distinguishing the cases according to the sign of the arguments. Each case is a system, and the region is the union of the regions of the cases. In the inequality $|x| + |y| \leq 1$ the first quadrant gives $x + y \leq 1$, and the other quadrants give the symmetric lines. The region is the square with vertices $(\pm 1, 0)$ and $(0, \pm 1)$.

<div class="figure-affiancate">

::grafico{regione="abs(x)+abs(y)<=1" xmin=-2 xmax=2 ymin=-2 ymax=2 uguale=1 titolo="$|x| + |y| \leq 1$"}

::grafico{regione="y>=abs(x)" xmin=-3 xmax=3 ymin=-2 ymax=4 uguale=1 titolo="$y \geq |x|$"}

</div>
:::

## Normal domains for double integrals

In double integrals the region is given, by a figure or by a system, and must be rewritten in a form from which the limits of integration are read off.

:::definizione{#dominio-normale-x titolo="Normal domain with respect to the x-axis"}
A set $D$ is a **normal domain with respect to the** $x$-axis if it can be written in the form
$$
D = \{ (x, y) : a \leq x \leq b,\ g_1(x) \leq y \leq g_2(x) \}
$$
with $g_1$ and $g_2$ continuous functions on $[a, b]$ and $g_1 \leq g_2$. Every vertical line with $x$-coordinate between $a$ and $b$ meets $D$ in a single segment, which goes from the graph of $g_1$, at the bottom, to the graph of $g_2$, at the top.

In the figure the slider moves the vertical segment in the region lying between $y = x^2$ and $y = x + 2$. For each $x$ the $y$-coordinate of entry and that of exit are read off.

::cursore{tipo="sezione-verticale" titolo="Vertical segments: from $y = x^2$ to $y = x + 2$ for each $x$ between $-1$ and $2$"}
:::

:::definizione{#dominio-normale-y titolo="Normal domain with respect to the y-axis"}
A set $D$ is a **normal domain with respect to the** $y$-axis if it can be written in the form
$$
D = \{ (x, y) : c \leq y \leq d,\ h_1(y) \leq x \leq h_2(y) \}
$$
with $h_1$ and $h_2$ continuous functions on $[c, d]$ and $h_1 \leq h_2$. Every horizontal line with $y$-coordinate between $c$ and $d$ meets $D$ in a single segment, which goes from the curve $x = h_1(y)$, on the left, to the curve $x = h_2(y)$, on the right.

The endpoints of the fixed interval and the two functions become the limits of the double integral. The reduction formulas are in the chapter on double and triple integrals.
:::

:::osservazione{#forma-normale titolo="Procedure for the normal form"}
1. The region is drawn and the points where the boundary curves meet are found.
2. For the form with respect to the $x$-axis, the interval $[a, b]$ is the projection of the region onto the $x$-axis. We isolate $y$ in the equations of the boundary curves: the lowest curve is $g_1$, the highest is $g_2$.
3. For the form with respect to the $y$-axis, the interval $[c, d]$ is the projection onto the $y$-axis. We isolate $x$: the curve on the left is $h_1$, the one on the right is $h_2$.

If the entry curve or the exit curve changes along the interval, the corresponding function is defined piecewise. The region is then split into several normal domains, one for each piece, and the double integral is the sum of the integrals over the single domains.
:::

:::esempio{titolo="The same region in the two forms"}
Let $D$ be the region lying between the parabola $y = x^2$ and the line $y = x + 2$, which meet at $(-1, 1)$ and $(2, 4)$.

With respect to the $x$-axis the projection is the interval $[-1, 2]$. Every vertical segment enters through the parabola and exits through the line, hence
$$
D = \{ (x, y) : -1 \leq x \leq 2,\ x^2 \leq y \leq x + 2 \} .
$$
With respect to the $y$-axis the projection is the interval $[0, 4]$. Isolating $x$, the parabola gives $x = -\sqrt{y}$ and $x = \sqrt{y}$, the line gives $x = y - 2$. The curve on the right is always $x = \sqrt{y}$. The curve on the left is $x = -\sqrt{y}$ for $0 \leq y \leq 1$ and is the line $x = y - 2$ for $1 \leq y \leq 4$, so the function $h_1$ is defined piecewise. The region is written as the union of two normal domains, one for each piece:
$$
\begin{gathered}
D_1 = \{ (x, y) : 0 \leq y \leq 1,\ -\sqrt{y} \leq x \leq \sqrt{y} \} \\[6pt]
D_2 = \{ (x, y) : 1 \leq y \leq 4,\ y - 2 \leq x \leq \sqrt{y} \}
\end{gathered}
$$
With respect to the $x$-axis the limits have **a single expression**, so the double integral is computed with a single iterated integral. With respect to the $y$-axis two are needed.

::cursore{tipo="sezione-orizzontale" valore=2.5 titolo="Horizontal segments: below $y = 1$ they enter through the parabola, above they enter through the line"}
:::

:::esempio{titolo="Three frequent regions"}
<div class="figure-affiancate">

::grafico{regione="y<=x; y>=0; x<=2" xmin=-1 xmax=3 ymin=-1 ymax=3 uguale=1 tracce=0 linee="1.3,0 1.3,1.3" punti="1.3,0,pieno;1.3,1.3,pieno" titolo="Triangle with vertices $(0, 0)$, $(2, 0)$, $(2, 2)$"}

::grafico{regione="x^2+y^2<=4" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 linee="1,-1.732 1,1.732" punti="1,-1.732,pieno;1,1.732,pieno" titolo="Disk $x^2 + y^2 \leq 4$"}

::grafico{regione="x>=y^2; x<=4" xmin=-1 xmax=6 ymin=-3.5 ymax=3.5 uguale=1 tracce=0 linee="1,1 4,1" punti="1,1,pieno;4,1,pieno" titolo="Region between $x = y^2$ and $x = 4$"}

</div>

- **Triangle.** With respect to the $x$-axis: $0 \leq x \leq 2$, $0 \leq y \leq x$. With respect to the $y$-axis: $0 \leq y \leq 2$, $y \leq x \leq 2$.
- **Disk.** With respect to the $x$-axis: $-2 \leq x \leq 2$, $-\sqrt{4 - x^2} \leq y \leq \sqrt{4 - x^2}$. With respect to the $y$-axis: $-2 \leq y \leq 2$, $-\sqrt{4 - y^2} \leq x \leq \sqrt{4 - y^2}$.
- **Region between $x = y^2$ and $x = 4$.** With respect to the $x$-axis: $0 \leq x \leq 4$, $-\sqrt{x} \leq y \leq \sqrt{x}$. With respect to the $y$-axis: $-2 \leq y \leq 2$, $y^2 \leq x \leq 4$.
:::

:::osservazione{#regioni-non-normali titolo="Regions that are not normal"}
The annulus $1 \leq x^2 + y^2 \leq 4$ is not a normal domain with respect to the $x$-axis, because the vertical line $x = 0$ meets it in two segments. By symmetry it is not normal with respect to the $y$-axis either. A region of this type is split into several normal domains or is described in polar coordinates.

::grafico{regione="x^2+y^2>=1; x^2+y^2<=4" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 linee="0,1 0,2;0,-2 0,-1" punti="0,1,pieno;0,2,pieno;0,-1,pieno;0,-2,pieno" titolo="The line $x = 0$ meets the annulus in two segments"}
:::

:::definizione{#regioni-polari titolo="Disks, annuli and sectors in polar coordinates"}
In **polar coordinates** $x = \rho \cos\theta$, $y = \rho \sin\theta$ the number $\rho \geq 0$ is the distance of the point from the origin and $\theta$ is the angle that the point forms with the positive $x$-axis. We have $x^2 + y^2 = \rho^2$, so the regions bounded by circles centered at the origin and by rays issuing from the origin have constant limits.

| Region | In polar coordinates |
| --- | --- |
| $x^2 + y^2 \leq 4$ | $0 \leq \rho \leq 2,\ \ 0 \leq \theta \leq 2\pi$ |
| $1 \leq x^2 + y^2 \leq 4$ | $1 \leq \rho \leq 2,\ \ 0 \leq \theta \leq 2\pi$ |
| $x^2 + y^2 \leq 4$ with $y \geq 0$ | $0 \leq \rho \leq 2,\ \ 0 \leq \theta \leq \pi$ |
| $1 \leq x^2 + y^2 \leq 4$ with $x \geq 0$, $y \geq 0$ | $1 \leq \rho \leq 2,\ \ 0 \leq \theta \leq \dfrac{\pi}{2}$ |
| $x^2 + y^2 \leq 4$ with $y \geq x$ | $0 \leq \rho \leq 2,\ \ \dfrac{\pi}{4} \leq \theta \leq \dfrac{5\pi}{4}$ |
| $x^2 + y^2 \leq 2x$ | $-\dfrac{\pi}{2} \leq \theta \leq \dfrac{\pi}{2},\ \ 0 \leq \rho \leq 2\cos\theta$ |

In the last row the inequality becomes $\rho^2 \leq 2\rho\cos\theta$, that is, $\rho \leq 2\cos\theta$, which requires $\cos\theta \geq 0$. The theorem on the change of variables, with the factor $\rho$ in the integral, is in the chapter on double and triple integrals.
:::

## Interior, boundary and vertices for maxima and minima

In the search for maxima and minima on a set, the candidates are sought separately at the interior points, on the boundary pieces and at the vertices. The set must therefore be recognized and decomposed into these parts.

:::definizione{#scomposizione-di-una-regione titolo="Decomposition of a region"}
Let $D$ be a region described by a system of inequalities with the symbols $\leq$ and $\geq$, bounded by lines and by non-degenerate conics.

- The **interior points** are those at which all the inequalities hold with the strict symbol.
- A **boundary piece** is obtained when one inequality becomes an equality and the others remain. It is an arc of a curve, and it is written with the equation of the curve and with the interval over which the free variable ranges.
- The **vertices** are the points where two pieces meet, and they are found by solving the system of the two equations.

On each boundary piece the function $f(x, y)$ becomes a function of a single variable, to be studied with the methods of Mathematical Analysis 1. The complete method is in the chapter on maxima and minima.
:::

:::esempio{titolo="Three decomposed sets"}
Let $D$ be the region described by $y \geq x^2$ and $y \leq x + 2$.

- Interior points: $x^2 < y < x + 2$.
- First boundary piece: the arc of the parabola $y = x^2$ with $-1 \leq x \leq 2$. On this piece we study $f(x, x^2)$.
- Second boundary piece: the segment $y = x + 2$ with $-1 \leq x \leq 2$. On this piece we study $f(x, x + 2)$.
- Vertices: $A(-1, 1)$ and $B(2, 4)$.

In the half-disk $x^2 + y^2 \leq 4$ with $y \geq 0$ the semicircle is written $x = 2\cos t$, $y = 2\sin t$ with $0 \leq t \leq \pi$, the diameter is written $y = 0$ with $-2 \leq x \leq 2$, and the vertices are $(\pm 2, 0)$. The triangle $x \geq 0$, $y \geq 0$, $x + y \leq 3$ has three sides and the three vertices $(0, 0)$, $(3, 0)$, $(0, 3)$.

<div class="figure-affiancate">

::grafico{regione="y>=x^2; y<=x+2" xmin=-3 xmax=4 ymin=-1 ymax=6 uguale=1 punti="-1,1,pieno,A;2,4,pieno,B" titolo="Arc of the parabola, segment and vertices $A$, $B$"}

::grafico{regione="y>=0; x^2+y^2<=4" xmin=-3 xmax=3 ymin=-2 ymax=4 uguale=1 tracce=0 punti="-2,0,pieno;2,0,pieno" titolo="Semicircle, diameter and two vertices"}

::grafico{regione="x>=0; y>=0; x+y<=3" xmin=-1 xmax=4 ymin=-1 ymax=4 uguale=1 tracce=0 punti="0,0,pieno;3,0,pieno;0,3,pieno" titolo="Three sides and three vertices"}

</div>
:::

:::definizione{#vincolo-di-uguaglianza titolo="Equality constraint"}
In constrained maxima and minima the set is described by an equation $g(x, y) = 0$, called the **constraint**. The set is then the curve alone, without interior points, and it is recognized from the coefficients of $x^2$ and $y^2$ like the boundaries of the regions.

The constraint $x^2 + 4y^2 = 4$, divided by $4$, becomes $\dfrac{x^2}{4} + y^2 = 1$. It is the ellipse centered at the origin with semi-axes $a = 2$ and $b = 1$, which is traversed with $x = 2\cos t$, $y = \sin t$, $0 \leq t \leq 2\pi$. Recognizing the curve makes it possible to parametrize it and to know whether it is a bounded set.

::grafico{regione="x^2+4*y^2=4" xmin=-3 xmax=3 ymin=-2 ymax=2 uguale=1 titolo="The constraint $x^2 + 4y^2 = 4$"}
:::

:::definizione{#limitati-e-chiusi titolo="Bounded sets and closed sets"}
A set in the plane is **bounded** if it is contained in a disk. A set described by a system in which only the symbols $\leq$, $\geq$, $=$ appear, with continuous functions, is **closed**.

| Set | Bounded |
| --- | --- |
| circle, ellipse | yes |
| disk, interior points of an ellipse, annulus | yes |
| line, parabola, hyperbola | no |
| half-plane, strip, exterior points of a circle or of an ellipse | no |
| regions bounded by a single parabola or by a single hyperbola | no |

On a closed and bounded set a continuous function has an absolute maximum and minimum, by the **extreme value theorem**. Recognizing that the set is closed and bounded therefore guarantees, before any computation, that the maximum and the minimum exist. The definitions of open, closed and connected set are in the chapter on functions of several variables.
:::
