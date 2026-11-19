---
titolo: Polynomial and rational equations and inequalities
sommario: How to solve equations of the first and second degree, how to lower the degree by factoring, how to handle rational equations and inequalities starting from the conditions of existence, and how to study inequalities with the sign of the parabola, the sign table and systems.
---

## Linear equations

:::definizione{#equazioni-primo-grado titolo="Linear equation"}
The equation $ax + b = 0$ with $a \neq 0$ has the *unique* solution
$$
x = -\frac{b}{a} .
$$
This form is reached with the **equivalence principles**: adding the same quantity to both sides and multiplying both sides by the same *nonzero* quantity produce equations with the same solutions. For $a = 0$ the equation reduces to $b = 0$ and there are two cases:

- $b \neq 0$: no solution (**inconsistent** equation);
- $b = 0$: every $x$ is a solution (**identity**).

For example, $3(x - 2) + 5 = 2x$ is equivalent to $3x - 6 + 5 = 2x$, that is, to $3x - 1 = 2x$. Subtracting $2x$ from both sides and adding $1$ to both sides gives $x = 1$.
:::

:::esempio{titolo="A linear equation with a parameter"}
$(k - 2)\,x = k^2 - 4$, where $k$ is a given real number. The coefficient of $x$ is $k - 2$, so the discussion separates the case in which it is nonzero from the case in which it is zero.

- For $k \neq 2$ both sides are divided by $k - 2$; since $k^2 - 4 = (k - 2)(k + 2)$, the only solution is $x = k + 2$.
- For $k = 2$ the equation becomes $0 \cdot x = 0$, which is an **identity**, therefore every real $x$ is a solution.

For $k = 3$ we obtain $x = 5$; for $k = -2$ we obtain $x = 0$.
:::

:::attenzione
Dividing both sides by an expression containing $x$ presupposes that the expression is nonzero, and can lose solutions. From $x^2 = 3x$, dividing by $x$, we obtain $x = 3$; the value $x = 0$ satisfies the original equation, since $0 = 0$, and it has been lost. Moving everything to the left-hand side gives $x\,(x - 3) = 0$, so the solutions are $0$ and $3$.
:::

## Quadratic equations

::::teorema{#equazioni-secondo-grado titolo="Quadratic formula"}
The equation $ax^2 + bx + c = 0$ with $a \neq 0$ has **discriminant** $\Delta = b^2 - 4ac$. If $\Delta \geq 0$ the solutions are
$$
x = \frac{-b \pm \sqrt{\Delta}}{2a} ;
$$
if $\Delta < 0$ there are **no real solutions**. The formula solves *every* quadratic equation, therefore every polynomial equation is considered solved once it is reduced to factors of degree at most two.

:::dimostrazione
Since $a \neq 0$, multiplying both sides by $4a$ gives the equivalent equation $4a^2 x^2 + 4abx + 4ac = 0$. The first two terms can be **completed to a square**, since $4a^2 x^2 + 4abx = (2ax + b)^2 - b^2$, so the equation can be rewritten as
$$
(2ax + b)^2 = b^2 - 4ac = \Delta .
$$
If $\Delta < 0$ no $x$ satisfies it, because a square is *never* negative. If $\Delta \geq 0$, the equality holds when $2ax + b = \pm\sqrt{\Delta}$, therefore
$$
x = \frac{-b \pm \sqrt{\Delta}}{2a} .
$$
:::
::::

:::osservazione
When the coefficient $b$ is even, that is, $b = 2\beta$, the discriminant is $\Delta = 4\beta^2 - 4ac = 4\left( \beta^2 - ac \right)$, so $\sqrt{\Delta} = 2\sqrt{\dfrac{\Delta}{4}}$ and cancelling the factor $2$ gives the **reduced formula**
$$
x = \frac{-\beta \pm \sqrt{\dfrac{\Delta}{4}}}{a}, \qquad \frac{\Delta}{4} = \beta^2 - ac .
$$
For $x^2 - 6x + 7 = 0$ we have $\beta = -3$ and $\dfrac{\Delta}{4} = 9 - 7 = 2$, so $x = 3 \pm \sqrt{2}$. With the full formula we would have $\Delta = 8$ and $x = \dfrac{6 \pm 2\sqrt{2}}{2}$, which after simplification gives the same result.
:::

:::definizione{#discriminante titolo="Discriminant"}
The sign of $\Delta = b^2 - 4ac$ determines the number of real solutions:

- $\Delta > 0$: **two distinct real solutions** $x_1 \neq x_2$;
- $\Delta = 0$: **one double real solution** $x = -\dfrac{b}{2a}$;
- $\Delta < 0$: **no real solution**.

For $x^2 - 2x - 3 = 0$ we have $\Delta = 4 + 12 = 16 > 0$ and the solutions are $x = \dfrac{2 \pm 4}{2}$, that is, $3$ and $-1$. For $x^2 + 2x + 1 = 0$ we have $\Delta = 0$ and $x = -1$ is a double root. For $x^2 + x + 1 = 0$ we have $\Delta = -3 < 0$ and no real solution.

::grafico{f="x^2-2*x-3;x^2+2*x+1;x^2+x+1" xmin=-4 xmax=4 ymin=-5 ymax=8 punti="3,0,pieno;-1,0,pieno" titolo="$y = x^2 - 2x - 3$ ($\Delta > 0$) meets the $x$-axis at $-1$ and at $3$; $y = x^2 + 2x + 1$ (dashed, $\Delta = 0$) touches it only at $-1$; $y = x^2 + x + 1$ (red, $\Delta < 0$) does not meet it"}

:::

:::esempio{titolo="The discriminant in an equation with a parameter"}
We look for the values of $k$ for which $x^2 - 2kx + k + 2 = 0$ has **two distinct real solutions**. The coefficient $b = -2k$ is even, so we use
$$
\frac{\Delta}{4} = k^2 - (k + 2) = k^2 - k - 2 = (k - 2)(k + 1) .
$$
There are two distinct solutions when $\dfrac{\Delta}{4} > 0$, which is a **quadratic inequality** in the parameter $k$. The product $(k - 2)(k + 1)$ is positive when the two factors have the same sign. They are both positive for $k > 2$ and both negative for $k < -1$, so the condition is satisfied for $k < -1$ or $k > 2$. For $k = -1$ and for $k = 2$ the discriminant is zero and the equation becomes $(x + 1)^2 = 0$ or $(x - 2)^2 = 0$, with a double solution.
:::

:::definizione{#equazioni-incomplete titolo="Incomplete equations"}
The quadratic formula also applies to equations with $b = 0$ or $c = 0$; these cases are solved directly with fewer computations.

- **Equation with no constant term** $ax^2 + bx = 0$: factoring out $x$ gives $x\,(ax + b) = 0$, with solutions $x = 0$ and $x = -\dfrac{b}{a}$.
- **Equation with no linear term** $ax^2 + c = 0$: it is equivalent to $x^2 = -\dfrac{c}{a}$; if $-\dfrac{c}{a} > 0$ the solutions are $x = \pm\sqrt{-\dfrac{c}{a}}$, if $-\dfrac{c}{a} = 0$ the only solution is $x = 0$, if $-\dfrac{c}{a} < 0$ there are no real solutions.

For example, $3x^2 - 12 = 0$ is equivalent to $x^2 = 4$, so $x = \pm 2$.
:::

::::teorema{#somma-e-prodotto titolo="Sum and product of the roots"}
If $\Delta \geq 0$, the roots $x_1$ and $x_2$ of $ax^2 + bx + c = 0$ (possibly coincident) satisfy
$$
x_1 + x_2 = -\frac{b}{a}, \qquad x_1 \cdot x_2 = \frac{c}{a} ,
$$
and the trinomial factors as
$$
ax^2 + bx + c = a\,(x - x_1)(x - x_2) .
$$
The two equalities follow from the **quadratic formula**, by adding and multiplying the expressions of the roots; the factorization is checked by expanding $a\,(x - x_1)(x - x_2) = ax^2 - a\,(x_1 + x_2)\,x + a\,x_1 x_2$ and substituting the sum and the product. With them one finds integer roots mentally and factors trinomials: for $x^2 - 7x + 12$ two numbers with sum $7$ and product $12$ are $3$ and $4$, so the roots are $3$ and $4$ and the trinomial is $(x - 3)(x - 4)$. When the roots are rational, the same factorization is also obtained by finding the rational roots and applying synthetic division, as in the chapter on factoring polynomials; the quadratic formula gives it also when the roots are irrational.

:::dimostrazione
By the quadratic formula the roots are $x_1 = \dfrac{-b - \sqrt{\Delta}}{2a}$ and $x_2 = \dfrac{-b + \sqrt{\Delta}}{2a}$. In the sum the terms with $\sqrt{\Delta}$ cancel, so
$$
x_1 + x_2 = \frac{-2b}{2a} = -\frac{b}{a} .
$$
The product of the numerators is the product of the sum and the difference of $-b$ and $\sqrt{\Delta}$, therefore it equals $b^2 - \Delta = b^2 - \left( b^2 - 4ac \right) = 4ac$, and
$$
x_1 \cdot x_2 = \frac{4ac}{4a^2} = \frac{c}{a} .
$$
If $\Delta = 0$ the two expressions coincide and the computations remain valid with $x_1 = x_2$.
:::
::::

:::osservazione
The sign of the roots can be read from the coefficients without solving the equation. If $\dfrac{c}{a} < 0$, the product of the roots is negative, so the roots are real and **of opposite sign**; indeed the discriminant is positive, because $ac < 0$ gives $-4ac > 0$ and hence $\Delta = b^2 - 4ac > 0$. For $3x^2 + 5x - 7 = 0$ the product equals $-\dfrac{7}{3}$, therefore the equation has one positive root and one negative root; the quadratic formula gives them as $\dfrac{-5 \pm \sqrt{109}}{6}$, that is, approximately $0.91$ and $-2.57$.
:::

## Higher-degree equations

:::teorema{#legge-di-annullamento titolo="Zero product property"}
A product is zero *if and only if* *at least one* of the factors is zero:
$$
A \cdot B = 0 \iff A = 0 \ \text{ or } \ B = 0 .
$$
The property turns a high-degree equation into several low-degree equations, therefore solving passes through **factorization**. From $(x - 1)(x + 4) = 0$ it follows that $x = 1$ or $x = -4$.
:::

:::definizione{#grado-superiore titolo="Solving by factorization"}
A polynomial equation $P(x) = 0$ of degree greater than two is solved in three steps: move every term to the left-hand side, factor $P$ using the **factorization strategy** (see the chapter on factoring polynomials), apply the **zero product property** to each factor. A polynomial of degree $n$ has *at most* $n$ real roots, so the solutions found with a complete factorization are all of them.
:::

:::esempio{titolo="Solving by synthetic division"}
$x^3 - 3x + 2 = 0$. Since $P(1) = 1 - 3 + 2 = 0$, the binomial $x - 1$ divides $P$ and **synthetic division** gives
$$
x^3 - 3x + 2 = (x - 1)(x^2 + x - 2) = (x - 1)^2 (x + 2) ,
$$
where $x^2 + x - 2 = (x - 1)(x + 2)$ is a **monic quadratic trinomial**. By the **zero product property** the solutions are $x = 1$ (double) and $x = -2$.

::grafico{f="x^3-3*x+2" xmin=-2.8 xmax=2.4 ymin=-3 ymax=7 punti="-2,0,pieno;1,0,pieno" titolo="$y = x^3 - 3x + 2 = (x - 1)^2 (x + 2)$ crosses the $x$-axis at the simple solution $-2$ and touches it at the double solution $1$"}

:::

:::definizione{#biquadratiche titolo="Biquadratic equations"}
A **biquadratic equation** has the form $ax^4 + bx^2 + c = 0$. With the **substitution** $t = x^2$ it becomes the quadratic equation $at^2 + bt + c = 0$. For each solution $t_i$ one returns to the variable $x$ by solving $x^2 = t_i$:

- if $t_i > 0$, the solutions are $x = \pm\sqrt{t_i}$;
- if $t_i = 0$, the only solution is $x = 0$;
- if $t_i < 0$, no real $x$ satisfies it, because a square is never negative.

For example, $x^4 - 5x^2 + 4 = 0$ becomes $t^2 - 5t + 4 = 0$, with solutions $t = 1$ and $t = 4$, so $x = \pm 1$ and $x = \pm 2$.

::grafico{f="x^4-5*x^2+4" xmin=-2.7 xmax=2.7 ymin=-3 ymax=6 punti="-2,0,pieno;-1,0,pieno;1,0,pieno;2,0,pieno" titolo="$y = x^4 - 5x^2 + 4$ is symmetric with respect to the $y$-axis and meets the $x$-axis at the four solutions $-2$, $-1$, $1$, $2$"}

:::

:::esempio{titolo="A trinomial equation"}
$x^6 - 9x^3 + 8 = 0$. The equation contains only the degrees $6$, $3$ and $0$, and $x^6 = \left( x^3 \right)^2$, so the substitution $t = x^3$ turns it into
$$
t^2 - 9t + 8 = 0 ,
$$
with solutions $t = 1$ and $t = 8$, because their sum is $9$ and their product is $8$. Unlike the biquadratic case, the equation $x^3 = t$ has one and only one real solution for *every* $t$, namely $x = \sqrt[3]{t}$. Therefore from $x^3 = 1$ it follows that $x = 1$ and from $x^3 = 8$ it follows that $x = 2$. The equation has degree $6$ and only two real solutions; the remaining factors $x^2 + x + 1$ and $x^2 + 2x + 4$ have negative discriminant.

::grafico{f="x^6-9*x^3+8" xmin=-0.8 xmax=2.4 ymin=-14 ymax=14 punti="1,0,pieno;2,0,pieno" titolo="$y = x^6 - 9x^3 + 8$ meets the $x$-axis only at $1$ and at $2$"}

:::

## Linear inequalities

:::definizione{#disequazioni-primo-grado titolo="Linear inequality"}
An inequality of the type $ax + b > 0$ (or with $\geq$, $<$, $\leq$), with $a \neq 0$, is solved by isolating $x$ with two rules: adding the same quantity to both sides preserves the direction; multiplying both sides by a positive quantity preserves the direction, by a *negative* quantity **reverses it**. The solutions form a **half-line**, that is, they are all the numbers less than, or all the numbers greater than, a fixed number. From $5 - 2x > 1$ it follows that $-2x > -4$, and dividing by $-2$, with the direction reversed, $x < 2$.
:::

:::osservazione
If after simplification the coefficient of $x$ is zero, the inequality reduces to an inequality between numbers, and the solutions are either all real numbers or none. The inequality $2(x + 1) > 2x + 5$ becomes $2 > 5$, which is false, so it **has no solutions**. The inequality $2(x + 1) > 2x - 1$ becomes $2 > -1$, which is true, so it is satisfied by *every* real $x$.
:::

## Quadratic inequalities

::::teorema{#segno-della-parabola titolo="Sign of the quadratic trinomial"}
Let $y = ax^2 + bx + c$ with $a > 0$ and $\Delta = b^2 - 4ac$. The graph is a parabola opening upward, treated in the chapter on analytic geometry, and the trinomial is **positive** where the parabola lies **above** the $x$-axis.

- $\Delta > 0$, roots $x_1 < x_2$: the trinomial is positive for $x < x_1$ or $x > x_2$, zero at the roots, negative for $x_1 < x < x_2$.
- $\Delta = 0$, double root $x_0$: the trinomial is positive for every $x \neq x_0$ and zero at $x_0$.
- $\Delta < 0$: the trinomial is positive for every $x$.

For $a < 0$ the signs are the **opposite**; alternatively, both sides are multiplied by $-1$ reversing the direction, so as to reduce to the case $a > 0$.

::grafico{f="x*x-2*x-3" xmin=-4 xmax=6 ymin=-5 ymax=7 punti="-1,0,pieno;3,0,pieno" titolo="$y = x^2 - 2x - 3$: the parabola lies above the $x$-axis for $x < -1$ and for $x > 3$, below it between the roots"}

:::dimostrazione
The idea is to write the trinomial as a product or as a sum of terms of known sign. We distinguish the three cases.

- $\Delta > 0$. By the factorization in the theorem on the sum and product of the roots, $ax^2 + bx + c = a\,(x - x_1)(x - x_2)$, and $a > 0$. For $x < x_1$ the factors $x - x_1$ and $x - x_2$ are both negative, so the product is positive; for $x_1 < x < x_2$ they have opposite signs, so the product is negative; for $x > x_2$ they are both positive, so the product is positive.
- $\Delta = 0$. The factorization becomes $a\,(x - x_0)^2$, which is positive for $x \neq x_0$, because it is the product of the positive number $a$ and the square of a nonzero number.
- $\Delta < 0$. Completing the square as in the proof of the quadratic formula gives
$$
ax^2 + bx + c = a \left[ \left( x + \frac{b}{2a} \right)^2 - \frac{\Delta}{4a^2} \right] .
$$
Since $\Delta < 0$, the term $-\dfrac{\Delta}{4a^2}$ is positive, so the expression in square brackets is the sum of a square and a positive number and is positive for every $x$. Multiplied by $a > 0$ it remains positive.
:::
::::

:::esempio
$x^2 - 2x - 3 \geq 0$. The discriminant is $\Delta = 4 + 12 = 16 > 0$ and the roots are $-1$ and $3$. Since $a = 1 > 0$, the trinomial is positive **outside the interval between the roots** and zero at the roots, so the solutions are $x \leq -1$ or $x \geq 3$. For $x^2 + x + 1 > 0$ the discriminant is $\Delta = -3 < 0$ and $a > 0$, so *every* real $x$ is a solution.
:::

:::attenzione
Taking the square root of both sides of an inequality loses the negative solutions. From $x^2 > 4$ it does *not* follow that $x > 2$: the value $x = -3$ satisfies the first inequality, since $9 > 4$, and not the second. The inequality is equivalent to $(x - 2)(x + 2) > 0$, and the trinomial is positive outside the interval between the roots, so the solutions are $x < -2$ or $x > 2$.

::grafico{f="x^2;4" xmin=-4 xmax=4 ymin=-1 ymax=10 punti="-2,4,vuoto;2,4,vuoto;-3,9,pieno" etichette="-2.2,9,(−3, 9)" titolo="The parabola $y = x^2$ lies above the line $y = 4$ (dashed) for $x < -2$ and for $x > 2$; the point $(-3, 9)$ belongs to the first part"}

:::

## Higher-degree inequalities

:::definizione{#tabella-dei-segni titolo="Sign chart"}
An inequality $P(x) > 0$ (or with $\geq$, $<$, $\leq$) of degree greater than two is studied in three steps: move every term to the left-hand side, factor $P$ into factors of degree at most two, study the sign of each factor. The **sign chart** has one row per factor and one column for each interval determined by the zeros of the factors; the sign of the product on each interval is the **product of the signs** in the column. With the inequality sign $\geq$ or $\leq$ the zeros of $P$ *belong* to the solution set, with the inequality sign $>$ or $<$ they are *excluded*.
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
The product is positive in the columns with an **even** number of minus signs, so the solutions are $-2 < x < 0$ or $x > 2$.

::grafico{f="x^3-4*x" xmin=-2.8 xmax=2.8 ymin=-6 ymax=6 area="x^3-4*x;0;-2;0|x^3-4*x;0;2;2.8" punti="-2,0,vuoto;0,0,vuoto;2,0,vuoto" titolo="$y = x^3 - 4x$ lies above the $x$-axis for $-2 < x < 0$ and for $x > 2$, the shaded intervals where the product is positive"}

:::

:::teorema{#segno-e-molteplicita titolo="Sign of a factor raised to a power"}
Let $c$ be a root of $P$ of multiplicity $m$, that is, $P(x) = (x - c)^m\, Q(x)$ with $Q(c) \neq 0$; the definition of multiplicity is found in the chapter on factoring polynomials. For $x \neq c$ the factor $(x - c)^m$ has sign:

- positive, if $m = 2k$ is even, since $(x - c)^m = \left( (x - c)^{k} \right)^2$ is the square of a nonzero number;
- equal to that of $x - c$, if $m$ is odd, since $(x - c)^m = (x - c)^{m - 1}\,(x - c)$ and $(x - c)^{m - 1}$ is positive, because $m - 1$ is even.

In the sign chart the factor $(x - c)^m$ therefore takes a *single* row, which changes sign at $c$ *only if* $m$ is odd. The factors of $Q$ do not vanish at $c$, so their rows do not change sign at $c$. Therefore $P$ changes sign at the roots of odd multiplicity and keeps its sign at those of even multiplicity, where the graph touches the $x$-axis without crossing it. In the inequality $(x - 1)^2 (x + 3) < 0$ the row of $(x - 1)^2$ has only plus signs, so the sign of the product is that of $x + 3$ and the solutions are $x < -3$.
:::

:::attenzione
With the inequality sign $\leq$ or $\geq$ a root of even multiplicity can be an **isolated** solution, which reading the signs in the chart alone does not show. In the inequality $(x - 1)^2 (x + 3) \leq 0$ the product is negative for $x < -3$ and zero at $-3$ and at $1$. The value $x = 1$ satisfies the inequality, since the left-hand side equals $0$, even though it does not belong to the interval $x \leq -3$. The solutions are therefore $x \leq -3$ or $x = 1$.
:::

## Rational equations

:::definizione{#condizioni-di-esistenza titolo="Domain restrictions"}
An expression with the unknown in a denominator is defined only at the points where *every* denominator is nonzero. The **domain restrictions** are the conditions $D(x) \neq 0$ imposed on all the denominators, and the set of real numbers that satisfy them is the **domain** of the equation or inequality. The conditions are derived from the original expression, because reducing to a common denominator and simplifying can make a denominator disappear. For $\dfrac{1}{x} + \dfrac{3}{x^2 - 4}$ the domain restrictions form the system
$$
\begin{cases}
x \neq 0 \\[2pt]
x^2 - 4 \neq 0
\end{cases}
$$
and the domain is the set of real numbers different from $0$, from $2$ and from $-2$.
:::

:::definizione{#equazioni-fratte titolo="Rational equation"}
An equation is **rational** when the unknown appears in at least one denominator. Moving every term to the left-hand side and reducing to a common denominator, the equation takes the form
$$
\frac{N(x)}{D(x)} = 0 ,
$$
with $N$ and $D$ polynomials. For example $\dfrac{x + 1}{x - 2} = 3$, with the domain restriction $x \neq 2$, becomes $\dfrac{x + 1 - 3\,(x - 2)}{x - 2} = 0$, that is, $\dfrac{7 - 2x}{x - 2} = 0$.
:::

::::teorema{#annullamento-di-una-frazione titolo="Zero of a fraction"}
Let $N$ and $D$ be polynomials. The fraction $\dfrac{N(x)}{D(x)}$ is zero *if and only if* the numerator is zero and the denominator is nonzero:
$$
\frac{N(x)}{D(x)} = 0 \iff
\begin{cases}
N(x) = 0 \\[2pt]
D(x) \neq 0
\end{cases}
$$
The theorem reduces a rational equation to the polynomial equation $N(x) = 0$; its solutions are then compared with the domain restrictions, and those that make a denominator vanish are **discarded**. For $\dfrac{7 - 2x}{x - 2} = 0$ the numerator vanishes at $x = \dfrac{7}{2}$, which is different from $2$, so $x = \dfrac{7}{2}$ is the **solution**.

:::dimostrazione
If $D(x) = 0$, the fraction is not defined at $x$, so $x$ is not a solution whatever the value of $N(x)$. Now let $D(x) \neq 0$. If $\dfrac{N(x)}{D(x)} = 0$, multiplying both sides by the nonzero number $D(x)$ gives $N(x) = 0$. Conversely, if $N(x) = 0$, the fraction equals $\dfrac{0}{D(x)} = 0$. Therefore the solutions are the numbers that satisfy $N(x) = 0$ and $D(x) \neq 0$ *together*.
:::
::::

:::esempio{titolo="A solution to be discarded"}
$\dfrac{x^2}{x - 2} = \dfrac{4}{x - 2}$. The domain restriction is $x \neq 2$. Moving the right-hand side gives
$$
\frac{x^2 - 4}{x - 2} = 0 ,
$$
and the numerator $x^2 - 4 = (x - 2)(x + 2)$ vanishes at $x = 2$ and at $x = -2$. The value $x = 2$ does not satisfy the domain restriction, therefore it is **discarded**; the only solution is $x = -2$.

::grafico{f="x^2/(x-2);4/(x-2)" xmin=-5 xmax=6 ymin=-6 ymax=11 asintoti="x=2" punti="-2,-1,pieno" titolo="The graphs of $y = \dfrac{x^2}{x - 2}$ and of $y = \dfrac{4}{x - 2}$ (dashed) meet only at the point with x-coordinate $-2$; at $x = 2$ neither fraction is defined"}

:::

:::attenzione
Multiplying both sides by the denominator removes the condition $D(x) \neq 0$ and can produce values outside the domain. The equation $\dfrac{x}{x - 1} = \dfrac{1}{x - 1}$, multiplied by $x - 1$, becomes $x = 1$; the value $1$ makes the denominator vanish, so the original equation **has no solutions**.

::grafico{f="x/(x-1);1/(x-1)" xmin=-4 xmax=5 ymin=-6 ymax=7 asintoti="x=1" titolo="For $x \neq 1$ we have $\dfrac{x}{x - 1} - \dfrac{1}{x - 1} = 1$: the two graphs are always $1$ apart vertically and never meet"}

:::

## Rational inequalities

:::definizione{#disequazioni-fratte titolo="Rational inequalities"}
A **rational inequality** is brought to the form
$$
\frac{N(x)}{D(x)} > 0 \quad (\text{or with } \geq,\ <,\ \leq)
$$
by moving every term to the left-hand side and reducing to a common denominator. The sign of the quotient is studied with the sign chart, with one row for the sign of $N$ and one for the sign of $D$ (or one for each of their factors), since the quotient has the **same sign as the product** $N \cdot D$. The points where the denominator vanishes are **excluded** from the solutions for *every* inequality sign, because they do not satisfy the domain restrictions; with the inequality sign $\geq$ or $\leq$ the zeros of the numerator are included.
:::

::::teorema{#segno-del-quoziente titolo="Sign of a quotient"}
Let $N$ and $D$ be polynomials. For every $x$ with $D(x) \neq 0$ the quotient $\dfrac{N(x)}{D(x)}$ has the **same sign** as the product $N(x)\, D(x)$. The theorem justifies the sign chart of rational inequalities: the factors of the numerator and those of the denominator each take a row, and the sign of the fraction on each interval is the **product of the signs** in the column. For example $\dfrac{x - 3}{x + 1}$ and $(x - 3)(x + 1)$ are both negative for $-1 < x < 3$ and both positive for $x < -1$ and for $x > 3$.

:::dimostrazione
Since $D(x) \neq 0$, the square $D(x)^2$ is positive. Multiplying numerator and denominator by $D(x)$ gives
$$
\frac{N(x)}{D(x)} = \frac{N(x)\, D(x)}{D(x)^2} ,
$$
which is the quotient of $N(x)\, D(x)$ by a positive number. Therefore the fraction has the sign of $N(x)\, D(x)$.
:::
::::

:::attenzione
Multiplying both sides by the denominator presupposes its **sign**, which depends on $x$. From $\dfrac{1}{x} < 1$ it does *not* follow that $1 < x$: the value $x = -1$ satisfies the first inequality, since $-1 < 1$, and not the second. The correct solutions are $x < 0$ or $x > 1$, and they are obtained from the **sign chart** of $\dfrac{1 - x}{x}$.

::grafico{f="1/x;1" xmin=-4 xmax=4 ymin=-4 ymax=4 punti="1,1,vuoto" titolo="$y = \dfrac{1}{x}$ lies below the line $y = 1$ (dashed) for $x < 0$ and for $x > 1$"}

:::

:::attenzione
A rational inequality is *not* equivalent to the system requiring numerator and denominator to be positive, because a quotient is positive also when numerator and denominator are both negative. For $\dfrac{x + 2}{x - 1} \geq 0$ the system
$$
\begin{cases}
x + 2 \geq 0 \\[2pt]
x - 1 > 0
\end{cases}
$$
has solutions $x > 1$. The value $x = -3$ does not satisfy the system, and yet $\dfrac{-3 + 2}{-3 - 1} = \dfrac{1}{4} > 0$. The sign chart covers both cases and gives the solutions $x \leq -2$ or $x > 1$.
:::

:::esempio
$\dfrac{x + 2}{x - 1} \leq 0$. The numerator is positive for $x > -2$ and zero at $-2$; the denominator is positive for $x > 1$. The quotient is negative where the signs **differ**, that is, for $-2 < x < 1$. The inequality sign $\leq$ **includes** the zero of the numerator and **excludes** that of the denominator, so the solutions are $-2 \leq x < 1$.

::grafico{f="(x+2)/(x-1)" xmin=-5 xmax=5 ymin=-6 ymax=6 asintoti="x=1;y=1" area="0;(x+2)/(x-1);-2;0.99" punti="-2,0,pieno" titolo="$y = \dfrac{x + 2}{x - 1}$ lies below the $x$-axis or meets it for $-2 \leq x < 1$; at $x = 1$ the fraction is not defined (vertical asymptote)"}

:::

:::esempio{titolo="A rational inequality with four factors"}
$\dfrac{x}{x + 2} \geq \dfrac{1}{x}$. The domain restrictions are $x \neq -2$ and $x \neq 0$. Moving the right-hand side and reducing to a common denominator gives
$$
\frac{x^2 - (x + 2)}{x\,(x + 2)} \geq 0 \quad\Longrightarrow\quad \frac{(x + 1)(x - 2)}{x\,(x + 2)} \geq 0 ,
$$
where the numerator $x^2 - x - 2$ is a monic quadratic trinomial. Each linear factor is negative before its zero and positive after it.
$$
\begin{array}{c|ccccc}
 & x < -2 & -2 < x < -1 & -1 < x < 0 & 0 < x < 2 & x > 2 \\ \hline
x + 2 & - & + & + & + & + \\
x + 1 & - & - & + & + & + \\
x & - & - & - & + & + \\
x - 2 & - & - & - & - & + \\ \hline
\text{quotient} & + & - & + & - & +
\end{array}
$$
The quotient is positive in the columns with an **even** number of minus signs. The inequality sign $\geq$ includes the zeros $-1$ and $2$ of the numerator, while $-2$ and $0$ are excluded by the domain restrictions, so the solutions are $x < -2$ or $-1 \leq x < 0$ or $x \geq 2$.

::grafico{f="x/(x+2);1/x" xmin=-6 xmax=5 ymin=-6 ymax=6 asintoti="x=-2;x=0" punti="-1,-1,pieno;2,0.5,pieno" titolo="The graph of $y = \dfrac{x}{x + 2}$ lies above that of $y = \dfrac{1}{x}$ (dashed) or meets it for $x < -2$, for $-1 \leq x < 0$ and for $x \geq 2$"}

:::

## Systems of inequalities

:::definizione{#sistemi-di-disequazioni titolo="System of inequalities"}
A system collects inequalities that must hold *simultaneously*, therefore its solutions are the **intersection** of the solution sets of the individual inequalities. Each inequality is solved separately; then the solutions are represented on the same real line and the intervals **common to all** of them are taken.
:::

:::esempio
$$
\begin{cases}
x^2 - 4 < 0 \\[2pt]
2x + 1 \geq 0
\end{cases}
$$
The first inequality is equivalent to $x^2 < 4$ and has solutions $-2 < x < 2$. The second has solutions $x \geq -\dfrac{1}{2}$. The **intersection** of the two sets is $-\dfrac{1}{2} \leq x < 2$, which is the solution set of the system.
:::

:::esempio{titolo="A system with no solutions"}
$$
\begin{cases}
x^2 - 1 < 0 \\[2pt]
x - 3 > 0
\end{cases}
$$
The first inequality has solutions $-1 < x < 1$, because the trinomial $x^2 - 1$ has roots $\pm 1$ and is negative between the roots. The second has solutions $x > 3$. Every solution of the first is less than $1$ and every solution of the second is greater than $3$, so the intersection is empty and the system **has no solutions**, even though each inequality has infinitely many.
:::
