---
titolo: Polynomial and rational equations and inequalities
sommario: How to solve first- and second-degree equations, how to lower the degree by factorization, and how to study inequalities with the sign of the parabola, the sign chart and systems.
---

## First-degree equations

:::definizione{#equazioni-primo-grado titolo="First-degree equation"}
The equation $ax + b = 0$ with $a \neq 0$ has the unique solution
$$
x = -\frac{b}{a} .
$$
This form is reached with the **equivalence principles**: adding the same quantity to both sides and multiplying both sides by the same nonzero quantity produce equations with the same solutions. For $a = 0$ the equation reduces to $b = 0$ and there are two cases:

- $b \neq 0$: no solution (**impossible equation**);
- $b = 0$: *every* $x$ is a solution (**identity**).

For example, $3(x - 2) + 5 = 2x$ is equivalent to $3x - 1 = 2x$, hence $x = 1$.
:::

## Second-degree equations

::::teorema{#equazioni-secondo-grado titolo="Quadratic formula"}
The equation $ax^2 + bx + c = 0$ with $a \neq 0$ has **discriminant** $\Delta = b^2 - 4ac$. If $\Delta \geq 0$ the solutions are
$$
x = \frac{-b \pm \sqrt{\Delta}}{2a} ;
$$
if $\Delta < 0$ there are **no real solutions**. The formula solves *every* second-degree equation, therefore every polynomial equation is considered solved once it is reduced to factors of degree at most two.

:::dimostrazione
Since $a \neq 0$, multiplying both sides by $4a$ gives the equivalent equation $4a^2 x^2 + 4abx + 4ac = 0$. The first two terms can be **completed to a square**, since $4a^2 x^2 + 4abx = (2ax + b)^2 - b^2$, so the equation can be rewritten as
$$
(2ax + b)^2 = b^2 - 4ac = \Delta .
$$
If $\Delta < 0$ no $x$ satisfies it, because a square is **never negative**. If $\Delta \geq 0$, the equality holds when $2ax + b = \pm\sqrt{\Delta}$, therefore
$$
x = \frac{-b \pm \sqrt{\Delta}}{2a} .
$$
:::
::::

:::definizione{#discriminante titolo="Discriminant"}
The sign of $\Delta = b^2 - 4ac$ counts the real solutions:

- $\Delta > 0$: **two distinct real solutions** $x_1 \neq x_2$;
- $\Delta = 0$: **one double real solution** $x = -\dfrac{b}{2a}$;
- $\Delta < 0$: **no real solution**.

For $x^2 - 2x - 3 = 0$ we have $\Delta = 4 + 12 = 16 > 0$ and the solutions are $x = \dfrac{2 \pm 4}{2}$, that is, $3$ and $-1$. For $x^2 + 2x + 1 = 0$ we have $\Delta = 0$ and $x = -1$ double. For $x^2 + x + 1 = 0$ we have $\Delta = -3 < 0$ and no real solution.
:::

:::definizione{#equazioni-incomplete titolo="Incomplete equations"}
The quadratic formula also applies to equations with $b = 0$ or $c = 0$; these cases are solved directly with fewer computations.

- Equation without constant term $ax^2 + bx = 0$: **factoring out** $x$ gives $x\,(ax + b) = 0$, with solutions $x = 0$ and $x = -\dfrac{b}{a}$.
- Equation without linear term $ax^2 + c = 0$: it is equivalent to $x^2 = -\dfrac{c}{a}$; if $-\dfrac{c}{a} > 0$ the solutions are $x = \pm\sqrt{-\dfrac{c}{a}}$, if $-\dfrac{c}{a} = 0$ the only solution is $x = 0$, if $-\dfrac{c}{a} < 0$ there are no real solutions.

For example, $3x^2 - 12 = 0$ is equivalent to $x^2 = 4$, so $x = \pm 2$.
:::

:::teorema{#somma-e-prodotto titolo="Sum and product of the roots"}
If $\Delta \geq 0$, the roots $x_1$ and $x_2$ of $ax^2 + bx + c = 0$ (possibly coincident) satisfy
$$
x_1 + x_2 = -\frac{b}{a}, \qquad x_1 \cdot x_2 = \frac{c}{a} ,
$$
and the trinomial factors as
$$
ax^2 + bx + c = a\,(x - x_1)(x - x_2) .
$$
The two equalities follow from the **quadratic formula**, by adding and multiplying the expressions of the roots. With them one finds integer roots mentally and factors trinomials: for $x^2 - 7x + 12$ two numbers with sum $7$ and product $12$ are $3$ and $4$, so the roots are $3$ and $4$ and the trinomial is $(x - 3)(x - 4)$.
:::

## Higher-degree equations

:::teorema{#legge-di-annullamento titolo="Zero product property"}
A product is zero *if and only if* *at least one* of the factors is zero:
$$
A \cdot B = 0 \iff A = 0 \ \text{ or } \ B = 0 .
$$
The property turns a high-degree equation into several low-degree equations, therefore solving it goes through **factorization**. From $(x - 1)(x + 4) = 0$ it follows that $x = 1$ or $x = -4$.
:::

:::definizione{#grado-superiore titolo="Solving by factorization"}
A polynomial equation $P(x) = 0$ of degree greater than two is solved in three steps: move every term to the left-hand side, factor $P$ with the factorization strategy (see the chapter on factoring polynomials), apply the **zero product property** to each factor. A polynomial of degree $n$ has **at most** $n$ real roots, so the solutions found with a complete factorization are *all* of them.
:::

:::esempio{titolo="Solving with Ruffini's rule"}
$x^3 - 3x + 2 = 0$. Since $P(1) = 1 - 3 + 2 = 0$, the binomial $x - 1$ divides $P$ and **Ruffini's rule** gives
$$
x^3 - 3x + 2 = (x - 1)(x^2 + x - 2) = (x - 1)^2 (x + 2) ,
$$
where $x^2 + x - 2 = (x - 1)(x + 2)$ is a special trinomial. By the **zero product property** the solutions are $x = 1$ (double) and $x = -2$.
:::

:::definizione{#biquadratiche titolo="Biquadratic equations"}
A **biquadratic equation** has the form $ax^4 + bx^2 + c = 0$. With the **substitution** $t = x^2$ it becomes the second-degree equation $at^2 + bt + c = 0$. For each solution $t_i$ one returns to the variable $x$ by solving $x^2 = t_i$:

- if $t_i > 0$, the solutions are $x = \pm\sqrt{t_i}$;
- if $t_i = 0$, the only solution is $x = 0$;
- if $t_i < 0$, no real $x$ satisfies it, because a square is never negative.

For example, $x^4 - 5x^2 + 4 = 0$ becomes $t^2 - 5t + 4 = 0$, with solutions $t = 1$ and $t = 4$, so $x = \pm 1$ and $x = \pm 2$.
:::

## First-degree inequalities

:::definizione{#disequazioni-primo-grado titolo="First-degree inequality"}
An inequality of the type $ax + b > 0$ (or with $\geq$, $<$, $\leq$) is solved by isolating $x$ with two rules: adding the same quantity to both sides preserves the direction; multiplying both sides by a positive quantity preserves the direction, by a negative quantity **reverses** it. The solutions form a **half-line**. From $5 - 2x > 1$ it follows that $-2x > -4$, and dividing by $-2$, with the direction reversed, $x < 2$.
:::

## Second-degree inequalities

:::teorema{#segno-della-parabola titolo="Sign of the quadratic trinomial"}
Let $y = ax^2 + bx + c$ with $a > 0$ and $\Delta = b^2 - 4ac$. The graph is a parabola opening upward, and the trinomial is positive where the parabola lies **above** the $x$-axis.

- $\Delta > 0$, roots $x_1 < x_2$: the trinomial is positive for $x < x_1$ or $x > x_2$, zero at the roots, negative for $x_1 < x < x_2$.
- $\Delta = 0$, double root $x_0$: the trinomial is positive for *every* $x \neq x_0$ and zero at $x_0$.
- $\Delta < 0$: the trinomial is positive for every $x$.

For $a < 0$ the signs are the **opposite**; alternatively, both sides are multiplied by $-1$ reversing the direction, so as to reduce to the case $a > 0$.

::grafico{f="x*x-2*x-3" xmin=-4 xmax=6 ymin=-5 ymax=7 titolo="y = x² − 2x − 3: the parabola lies above the x-axis for x < −1 and for x > 3, below it between the roots"}
:::

:::esempio
$x^2 - 2x - 3 \geq 0$. The discriminant is $\Delta = 4 + 12 = 16 > 0$ and the roots are $-1$ and $3$. Since $a = 1 > 0$, the trinomial is positive **outside** the interval between the roots and zero at the roots, so the solutions are $x \leq -1$ or $x \geq 3$. For $x^2 + x + 1 > 0$ the discriminant is $\Delta = -3 < 0$ and $a > 0$, so *every* real $x$ is a solution.
:::

## Higher-degree inequalities

:::definizione{#tabella-dei-segni titolo="Sign chart"}
An inequality $P(x) > 0$ (or with $\geq$, $<$, $\leq$) of degree greater than two is studied in three steps: move every term to the left-hand side, factor $P$ into factors of degree at most two, study the sign of each factor. The **sign chart** has one row per factor and one column for each interval determined by the zeros of the factors; the sign of the product on each interval is the **product of the signs** in the column. With the direction $\geq$ or $\leq$ the zeros of $P$ belong to the solutions, with the direction $>$ or $<$ they are **excluded**.
:::

:::esempio{titolo="A sign chart"}
$x^3 - 4x > 0$. The factorization is $x\,(x - 2)(x + 2)$, with zeros $-2$, $0$, $2$. The factor $x + 2$ is positive for $x > -2$, the factor $x$ for $x > 0$, the factor $x - 2$ for $x > 2$.
$$
\begin{array}{c|cccc}
 & x < -2 & -2 < x < 0 & 0 < x < 2 & x > 2 \\ \hline
x + 2 & - & + & + & + \\
x & - & - & + & + \\
x - 2 & - & - & - & + \\ \hline
x\,(x+2)(x-2) & - & + & - & +
\end{array}
$$
The product is positive in the columns with an **even number of minus signs**, so the solutions are $-2 < x < 0$ or $x > 2$.
:::

## Rational inequalities

:::definizione{#disequazioni-fratte titolo="Rational inequalities"}
A **rational inequality** is brought to the form
$$
\frac{N(x)}{D(x)} > 0 \quad (\text{or with } \geq,\ <,\ \leq)
$$
by moving every term to the left-hand side and reducing to a common denominator. The sign of the quotient is studied with the sign chart, with one row for the sign of $N$ and one for the sign of $D$: the quotient has the **same sign** as the product $N \cdot D$. The points where the denominator vanishes are **excluded** from the solutions for *every* direction, because at those points the fraction is not defined; with the direction $\geq$ or $\leq$ the zeros of the numerator are included.
:::

:::attenzione
Multiplying both sides by the denominator presupposes its sign, which depends on $x$. From $\dfrac{1}{x} < 1$ it does *not* follow that $1 < x$: the value $x = -1$ satisfies the first inequality, since $-1 < 1$, and not the second. The correct solutions are $x < 0$ or $x > 1$, and they are obtained from the sign chart of $\dfrac{1 - x}{x}$.
:::

:::esempio
$\dfrac{x + 2}{x - 1} \leq 0$. The numerator is positive for $x > -2$ and zero at $-2$; the denominator is positive for $x > 1$. The quotient is negative where the **signs differ**, that is, for $-2 < x < 1$. The direction $\leq$ includes the zero of the numerator and excludes that of the denominator, so the solutions are $-2 \leq x < 1$.
:::

## Systems of inequalities

:::definizione{#sistemi-di-disequazioni titolo="System of inequalities"}
A system collects inequalities that must hold **simultaneously**, therefore its solutions are the **intersection** of the solution sets of the individual inequalities. Each inequality is solved separately; then the solutions are represented on the same real line and the intervals common to *all* of them are taken.
:::

:::esempio
$$
\begin{cases}
x^2 - 4 < 0 \\[2pt]
2x + 1 \geq 0
\end{cases}
$$
The first inequality is equivalent to $x^2 < 4$ and has solutions $-2 < x < 2$. The second has solutions $x \geq -\dfrac{1}{2}$. The intersection of the two sets is $-\dfrac{1}{2} \leq x < 2$, which is the solution set of the system.
:::
