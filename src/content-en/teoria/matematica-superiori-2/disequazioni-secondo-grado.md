---
titolo: Quadratic and rational inequalities
sommario: Signs of trinomials, roots and discriminants, polynomial and rational inequalities, systems of inequalities, and domains of radicals.
---

## Solution sets

:::definizione{#intervalli titolo="Open and closed intervals"}
Solving an **inequality** means finding all values in the domain for which the comparison holds. The symbol $\le$ allows equality, while $<$ excludes it. A square bracket means the endpoint is included. A parenthesis means it is excluded.

The condition $1<x\le4$ is written as $(1,4]$. The condition $x<1$ or $x>4$ is written as $(-\infty,1)\cup(4,+\infty)$. Endpoints marked by infinity are always open because the infinity symbols do not represent real numbers.

Multiplying or dividing both sides by a negative number reverses the inequality. For example, $-2x>6$ is equivalent to $x<-3$.
:::

## Sign of a trinomial

:::teorema{#segno titolo="Two distinct real roots"}
If $a>0$ and the trinomial has roots $x_1<x_2$, its factored form is $a(x-x_1)(x-x_2)$. For $x<x_1$, both factors are negative. Between the roots they have opposite signs, and for $x>x_2$ both are positive.

The trinomial is positive outside the roots and negative between them. It equals zero at each root. If $a<0$, all the signs reverse.

For $x^2-5x+6=(x-2)(x-3)$, the inequality $x^2-5x+6\le0$ gives $[2,3]$. The strict inequality $>0$ gives $(-\infty,2)\cup(3,+\infty)$.

::grafico{f="x^2-5*x+6" punti="2,0,pieno,A;3,0,pieno,B" xmin=0 xmax=5 ymin=-1 ymax=6 titolo="The trinomial is negative between the roots"}
:::

## A double root or no real roots

:::teorema{#discriminante titolo="The discriminant cases"}
If $\Delta=0$, the trinomial is $a(x-x_0)^2$. It has the sign of $a$ whenever $x\ne x_0$, and is zero at $x_0$. For example, $(x-2)^2>0$ gives $\mathbb R\setminus\{2\}$, and $(x-2)^2\le0$ gives $\{2\}$.

If $\Delta<0$, the trinomial always has the sign of $a$. This follows from completing the square
$$
ax^2+bx+c=a\left[\left(x+\frac b{2a}\right)^2-\frac{\Delta}{4a^2}\right].
$$
The expression inside the square brackets is positive because $-\Delta>0$. Thus $x^2+1>0$ for every real number, and $x^2+1\le0$ has no solutions.

::grafico{f="(x-2)^2" punti="2,0,pieno,A" xmin=-1 xmax=5 ymin=-1 ymax=9 titolo="The square is zero at $2$ and positive elsewhere"}
:::

## Solution procedure

:::teorema{#procedimento titolo="From standard form to the solution"}
Bring all terms to one side, combine like terms, and determine the sign of the resulting expression. Subtracting the same term from both sides explains why it appears with the opposite sign on the other side.

Starting with $x^2\le3x+4$, we obtain $x^2-3x-4\le0$. The roots are $-1$ and $4$, and the leading coefficient is positive. The solution is $[-1,4]$.

Testing values helps verify the sign analysis. The value $x=0$ belongs to the interval and gives $0\le4$. The value $x=5$ lies outside and gives the false statement $25\le19$. Checking individual points complements the sign analysis of the factors.
:::

## Rational inequalities

:::teorema{#fratte titolo="Sign chart and the denominator"}
For a quotient, study the signs of the numerator and denominator separately. The quotient is positive when their signs agree and negative when they differ. Zeros of the denominator are always excluded.

For $\dfrac{x-1}{x-3}\ge0$, the critical points are $1$ and $3$. The sign is positive before $1$, negative between $1$ and $3$, and positive after $3$. The solution is $(-\infty,1]\cup(3,+\infty)$.

Include the zero $1$ because the quotient is defined there and equals zero. The value $3$ is excluded even though equality is allowed. Multiplying directly by $x-3$ without knowing its sign can reverse the inequality.
:::

:::esempio{titolo="Reading the signs of a quotient"}
For $\dfrac{x+2}{x-1}\le0$, the critical points are $-2$ and $1$. The signs of the two factors stay constant within each interval, so one test value per column is enough.

| Interval | $(-\infty,-2)$ | $(-2,1)$ | $(1,+\infty)$ |
| --- | --- | --- | --- |
| Test value | $-3$ | $0$ | $2$ |
| Numerator | $-$ | $+$ | $+$ |
| Denominator | $-$ | $-$ | $+$ |
| Quotient | $+$ | $-$ | $+$ |

The middle column has the required sign. At $-2$, the quotient is zero and the comparison allows equality. At $1$, the quotient is undefined. The result is therefore $[-2,1)$.

::grafico{f="(x+2)/(x-1)" asintoti="x=1;y=1" punti="-2,0,pieno,A" xmin=-5 xmax=5 ymin=-7 ymax=7 titolo="The quotient is nonpositive from -2 to 1, with 1 excluded"}
:::

## Products and multiplicity

:::teorema{#prodotti titolo="Points where the sign changes"}
Near a root $a$ with multiplicity $m$, the polynomial factors as $(x-a)^m g(x)$, with $g(a)\ne0$. The values of $g(x)$ have the same sign throughout a neighborhood of $a$. The factor $(x-a)^m$ changes sign across $a$ when $m$ is odd and stays positive on both sides when $m$ is even.

For $(x-1)^2(x+2)>0$, the square is positive except at $1$. The sign therefore depends on $x+2$, with $1$ excluded. The solution is $(-2,1)\cup(1,+\infty)$.

When a common factor is canceled from the numerator and denominator, its zero remains excluded from the domain. For $\dfrac{(x-1)(x+2)}{x-1}>0$, the conditions become $x>-2$ and $x\ne1$, giving the same set as in the preceding example.
:::

:::attenzione
Canceling a common factor preserves the values of the fraction only on its original domain. For example, $\dfrac{(x-1)(x+3)}{x-1}\ge0$ is equivalent to $x+3\ge0$ for $x\ne1$. The result is $[-3,1)\cup(1,+\infty)$ because the fraction is undefined at $1$.
:::

## Systems

:::definizione{#sistemi titolo="Intersecting the conditions"}
A **system of inequalities** requires all conditions to hold at once. Solve each inequality and take the intersection of its solution sets.

For $\begin{cases}x^2-5x+6\le0\\x>\dfrac52\end{cases}$, intersect $[2,3]$ with $(\dfrac52,+\infty)$. The result is $(\dfrac52,3]$.

The union describes values satisfying at least one condition. If two intervals have no common points, the system has no solutions. For example, $x\le1$ and $x>3$ have empty intersection.
:::

## Domains and applications

:::osservazione{#domini titolo="Roots and constraints"}
The domain of $\sqrt{x^2-4}$ requires $x^2-4\ge0$. The result is $(-\infty,-2]\cup[2,+\infty)$. When the same square root is in the denominator, the condition is $x^2-4>0$, so $\pm2$ is also excluded.

In applications, algebraic inequalities are combined with constraints on the quantities involved. If $x$ represents a length and the calculation gives $-3\le x\le5$, the constraint $x>0$ restricts the answer to $0<x\le5$.

The conditions stated in an application belong to the system from the outset. The final solution must satisfy both the inequality and the constraints of the problem.
:::

:::esempio{titolo="From an inequality to an integer length"}
A rectangular platform has at most $40\,\mathrm{m}^2$ of available area, and its longer side must exceed its shorter side by $3\,\mathrm{m}$. Let $x$ be the length of the shorter side in meters, with $x>0$. Since the area cannot exceed $40\,\mathrm{m}^2$, we obtain

$$
\begin{aligned}
x(x+3)&\le 40,\\
x^2+3x-40&\le0,\\
(x+8)(x-5)&\le0.
\end{aligned}
$$

The trinomial is nonpositive on $[-8,5]$. The condition that a length be positive gives $0<x\le5$. If each side must be a whole number of meters, the only permitted lengths for the shorter side are $1$, $2$, $3$, $4$, and $5$. With $x=5$, the area is exactly $5\cdot8=40\,\mathrm{m}^2$.
:::
