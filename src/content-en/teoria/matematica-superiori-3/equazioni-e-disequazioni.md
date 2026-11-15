---
titolo: Equations, inequalities and systems
sommario: How to solve polynomial and rational equations, determine the sign of products and trinomials, and work with systems and parameters.
---

## The domain and the solutions

:::definizione{#equazioni titolo="Solution set"}
In an equation, both sides must be defined for the same value of the unknown. The set of values for which both sides can be evaluated is the **domain** of the equation. The numbers in the domain that make the two sides equal form the **solution set**, denoted by $S$.

In the equation $\dfrac{x+2}{x-1}=3$, the denominator is zero at $x=1$, so the domain is $\mathbb R\setminus\{1\}$. For any number in the domain, we can multiply by $x-1$ and reverse the step by dividing by the same factor.

$$
\begin{aligned}
\frac{x+2}{x-1}=3
&\iff x+2=3(x-1) \\[4pt]
&\iff 2x=5 \\[4pt]
&\iff x=\frac52.
\end{aligned}
$$

Since $\dfrac52$ belongs to the domain, the solution set is $S=\left\{\dfrac52\right\}$. The symbol $\iff$ is read *if and only if*. Each line implies the preceding line under the condition $x\neq1$.
:::

:::teorema{#equivalenza titolo="Equivalent transformations"}
Two equations are **equivalent** when they have the same solution set on the domain under consideration. Adding the same expression to both sides is reversible where the expression is defined. Multiplying or dividing both sides by the same expression is reversible where its value is nonzero.

When a factor can be zero, the two cases must be considered before dividing. For example, in $x(x-4)=0$, the value $x=0$ satisfies the equation. For $x\neq0$, we can divide by $x$ to obtain $x=4$. This gives both solutions.
:::

:::esempio{titolo="The zero-product property"}
For any pair of real numbers $u,v$, the product $uv$ is zero if at least one factor is zero. Conversely, if $u\neq0$, dividing the equation $uv=0$ by $u$ gives $v=0$.

Therefore $(x+3)(2x-5)=0$ is equivalent to $x+3=0$ or $2x-5=0$. The solutions are $-3$ and $\dfrac52$. The first value makes the first factor zero, and the second makes the second factor zero. One zero factor is enough for the product to be zero.
:::

## Quadratic equations

::::teorema{#secondo-grado titolo="The quadratic formula"}
Let $a,b,c\in\mathbb R$ with $a\neq0$. The number $\Delta=b^2-4ac$ is the **discriminant**. The number of real roots of $ax^2+bx+c=0$ depends on the sign of $\Delta$.

- If $\Delta>0$, there are two distinct solutions, $\dfrac{-b+\sqrt\Delta}{2a}$ and $\dfrac{-b-\sqrt\Delta}{2a}$.
- If $\Delta=0$, there is one solution, $-\dfrac b{2a}$, called a double root.
- If $\Delta<0$, the real solution set is empty.

:::dimostrazione
The equation can be rearranged to produce the square of $2ax+b$. Since $4a\neq0$, we can multiply by $4a$ and then add $b^2-4ac$ to both sides.

$$
\begin{aligned}
ax^2+bx+c=0
&\iff 4a^2x^2+4abx+4ac=0 \\[4pt]
&\iff 4a^2x^2+4abx+b^2=b^2-4ac \\[4pt]
&\iff (2ax+b)^2=\Delta.
\end{aligned}
$$

The square of a real number is always greater than or equal to zero. For $\Delta>0$, the possibilities are $2ax+b=\sqrt\Delta$ and $2ax+b=-\sqrt\Delta$. For $\Delta=0$, we must have $2ax+b=0$. Solving these linear equations gives the stated roots.
:::
::::

:::esempio{titolo="From the formula to factorization"}
For $2x^2-x-3=0$, the coefficients are $a=2$, $b=-1$, $c=-3$. The formula gives

$$
\begin{aligned}
\Delta &=(-1)^2-4\cdot 2\cdot(-3)=25,\\[4pt]
x_{1,2} &=\frac{1\pm5}{4}.
\end{aligned}
$$

The roots are $-1$ and $\dfrac32$. The polynomial can be written as $2(x+1)\left(x-\dfrac32\right)=(x+1)(2x-3)$. The coefficient $2$ in the first form preserves the coefficient of $x^2$ in the original expression. This factorization will help determine where the trinomial is positive.
:::

:::teorema{#somma-prodotto titolo="Sum and product of the roots"}
If the trinomial $ax^2+bx+c$ with $a\neq0$ has real roots $r$ and $s$, which may coincide, it can be written as $a(x-r)(x-s)$. Expanding the product gives $ax^2-a(r+s)x+ars$. Comparing the coefficients gives

$$
r+s=-\frac ba,\qquad rs=\frac ca.
$$

For example, $x^2+2x-15$ has roots $3$ and $-5$, because their sum is $-2$ and their product is $-15$. This can be checked by expanding $(x-3)(x+5)=x^2+2x-15$. When finding two numbers with the required sum and product takes too long, the quadratic formula is available.
:::

## The sign of a product

:::teorema{#prodotti titolo="Sign chart"}
A product of real factors is zero if at least one factor is zero. When all factors are nonzero, each negative factor reverses the sign. Therefore the product is positive if the number of negative factors is even and negative if that number is odd.

A linear factor $x-r$ is negative to the left of $r$ and positive to the right. For the factor $-2(x-r)$, the signs are reversed because $-2<0$. When the factors are nonzero polynomials, their zeros divide the real number line into intervals. Each factor has a constant sign within each interval, so the sign of the product can be found one interval at a time.
:::

:::esempio{titolo="A simple zero and a double zero"}
To solve $(x+1)^2(x-2)<0$, mark $-1$ and $2$ on the number line. The factor $(x+1)^2$ is positive on both sides of $-1$. The factor $x-2$ is negative for $x<2$.

$$
\begin{array}{c|ccc}
x & (-\infty,-1) & (-1,2) & (2,+\infty)\\ \hline
(x+1)^2 & + & + & +\\
x-2 & - & - & +\\ \hline
(x+1)^2(x-2) & - & - & +
\end{array}
$$

Since the inequality is strict, both zeros are excluded. The solution set is $(-\infty,-1)\cup(-1,2)$. At $-1$ the graph touches the axis and stays below it on both sides. At $2$ the graph crosses the axis and the sign changes.

::grafico{f="(x+1)^2*(x-2)" xmin=-3.1 xmax=3.1 ymin=-13 ymax=12 punti="-1,0,pieno;2,0,pieno" titolo="The product is negative to the left of $2$, with a double zero at $x=-1$"}

:::

:::osservazione
The **multiplicity** of a root $r$ is the number of times the factor $x-r$ appears in the factorization. Near $r$, the other factors keep their signs. An even multiplicity therefore gives the same sign on both sides, whereas an odd multiplicity gives opposite signs. In a non-strict inequality, the zero belongs to the solution set in both cases provided it is in the domain.
:::

## Quadratic inequalities

:::teorema{#disequazioni titolo="Sign of the trinomial"}
After all terms are moved to one side, a quadratic inequality compares the trinomial $ax^2+bx+c$ to zero. Let $a\neq0$ and let $\Delta$ be the discriminant.

- If $\Delta>0$ and the roots are $r<s$, the expression $a(x-r)(x-s)$ has the sign of $a$ outside $[r,s]$. On $(r,s)$ the linear factors have opposite signs, so the trinomial has the opposite sign to $a$.
- If $\Delta=0$ and the double root is $r$, the trinomial equals $a(x-r)^2$. It is zero at $r$ and has the sign of $a$ for every $x\neq r$.
- If $\Delta<0$, the identity $4a(ax^2+bx+c)=(2ax+b)^2-\Delta$ holds. Since $-\Delta>0$, the right-hand side is positive for every $x$. The trinomial therefore has the sign of $a$ on the entire real number line.
:::

:::esempio{titolo="The leading coefficient is negative"}
In $-x^2+x+6\geq0$, the trinomial equals $-(x+2)(x-3)$. For $-2<x<3$, the first linear factor is positive and the second is negative. The minus sign in front of the product therefore makes the trinomial positive on this interval. Outside it, the linear factors have the same sign and the trinomial is negative. Including the zeros gives $[-2,3]$.

::grafico{f="-x^2+x+6" xmin=-4 xmax=5 ymin=-10 ymax=8 punti="-2,0,pieno;3,0,pieno" titolo="The parabola is above the axis for $-2<x<3$ and meets it at both endpoints"}

:::

:::esempio{titolo="Comparing two graphs"}
The inequality $x^2\leq x+2$ asks where the points on the parabola $y=x^2$ are at or below the height of the line $y=x+2$. The difference is $x^2-x-2=(x+1)(x-2)$. The product is negative between the zeros $-1$ and $2$. Since equality holds at the two points of intersection, the solution set is $[-1,2]$.

::grafico{f="x^2;x+2" xmin=-2.5 xmax=3.2 ymin=-1 ymax=8 punti="-1,1,pieno,A;2,4,pieno,B" titolo="Between the x-coordinates of $A$ and $B$, the parabola lies below the line"}

:::

## Rational equations and inequalities

:::teorema{#fratte titolo="Sign of the quotient"}
Let $N(x)$ and $D(x)$ be two real-valued expressions. Where $D(x)\neq0$, the fraction $\dfrac{N(x)}{D(x)}$ is zero when $N(x)=0$. It is positive when the numerator and denominator have the same sign, and negative when they have opposite signs.

When the fraction is compared with a nonzero expression, move all terms to one side and use a common denominator. The domain comes from the denominators in the original expression. A factor may cancel during the calculation, while its zero remains excluded.
:::

:::esempio{titolo="An inequality with two critical values"}
To solve $\dfrac{2}{x-1}\leq1$, we require $x\neq1$. Subtract $1$ from both sides and express the difference as a single fraction.

$$
\frac{2}{x-1}-1=\frac{2-(x-1)}{x-1}=\frac{3-x}{x-1}.
$$

For $x<1$, the numerator is positive and the denominator is negative. For $1<x<3$, both are positive. For $x>3$, the numerator is negative and the denominator is positive. The numerator is zero at $3$ while the denominator remains nonzero. Therefore the solution set is $(-\infty,1)\cup[3,+\infty)$.
:::

:::attenzione
Multiplying an inequality by a negative number reverses its direction. In $\dfrac{2}{x-1}\leq1$, the factor $x-1$ changes sign. For example, $x=0$ satisfies $-2\leq1$. Multiplying without reversing the inequality would give the condition $2\leq x-1$, which is false at $x=0$. The sign analysis of the fraction accounts for both cases.
:::

:::esempio{titolo="The excluded point after cancellation"}
The expression $\dfrac{x^2-9}{x-3}$ is defined for $x\neq3$. On this domain, the numerator equals $(x-3)(x+3)$, so the fraction reduces to $x+3$. To solve $\dfrac{x^2-9}{x-3}\geq0$, intersect $[-3,+\infty)$ with the domain. The solution set is $[-3,3)\cup(3,+\infty)$.

::grafico{f="(x^2-9)/(x-3)" xmin=-5 xmax=6 ymin=-2 ymax=10 punti="-3,0,pieno;3,6,vuoto" titolo="At $x=3$ the fraction is undefined, as the open circle shows"}

:::

## Simultaneous conditions

:::definizione{#sistemi titolo="Intersection of solution sets"}
In a **system**, the same value or pair of values must satisfy all the conditions. For a system of inequalities in one unknown, solve each inequality and take the intersection of the solution sets. When satisfying at least one condition is enough, take the union.

The conditions $x^2\leq 9$ and $x>1$ give $[-3,3]\cap(1,+\infty)=(1,3]$. Replacing *and* with *or* gives $[-3,3]\cup(1,+\infty)=[-3,+\infty)$, because every value greater than $3$ satisfies the second condition.
:::

:::esempio{titolo="Intersecting sets with several intervals"}
Consider the system

$$
\begin{cases}
(x+2)(x-4)\geq0,\\
(x+5)(x-1)<0.
\end{cases}
$$

The first inequality gives $(-\infty,-2]\cup[4,+\infty)$. The second gives $(-5,1)$. The interval $[4,+\infty)$ lies entirely to the right of $1$. The intersection with the first interval runs from $-5$, excluded, to $-2$, included, so the solution set is $(-5,-2]$.
:::

:::esempio{titolo="A system of two equations in two unknowns"}
The pairs $(x,y)$ that satisfy $y=x^2$ and $y=x+2$ lie on both graphs. Since the second equation already gives $y$, substitute $x+2$ into the first. This gives $(x+1)(x-2)=0$, so $x=-1$ or $x=2$.

For $x=-1$ the second equation gives $y=1$, and for $x=2$ it gives $y=4$. Both pairs also satisfy $y=x^2$. The solution set is $\{(-1,1),(2,4)\}$. The x-coordinates give the locations of the intersections along the $x$-axis, while the system requires both coordinates.
:::

## The role of the parameter

:::teorema{#parametri titolo="Checking the cases before dividing"}
A **parameter** is a number fixed for each equation in a family. In $(k-2)x=k-2$, the parameter is $k$ and the unknown is $x$. For every $k\neq2$, dividing by $k-2$ gives $x=1$. For $k=2$, the equation becomes $0=0$, so every real number is a solution.

There are three possibilities for the equation $A(k)x=B(k)$.

- If $A(k)\neq0$, the only solution is $x=\dfrac{B(k)}{A(k)}$.
- If $A(k)=0$ and $B(k)=0$, every real value of $x$ satisfies the equation.
- If $A(k)=0$ and $B(k)\neq0$, no real value of $x$ satisfies the equation.

For a quadratic expression with a parameter, first separate the case in which the coefficient of $x^2$ is zero. Use the discriminant in the cases where the equation actually has degree two.
:::

:::esempio{titolo="The degree drops at one parameter value"}
In the equation $(k-1)x^2-2x+1=0$, setting $k=1$ leaves $-2x+1=0$. This is a linear equation with solution $x=\dfrac12$. For $k\neq1$, calculate

$$
\Delta=(-2)^2-4(k-1)=4(2-k).
$$

For $k<2$ with $k\neq1$, there are two distinct real roots. For $k=2$, the equation becomes $x^2-2x+1=(x-1)^2=0$, so $x=1$ is a double root. For $k>2$, the discriminant is negative and there are no real roots. The values $1$ and $2$ both change the number of solutions for different reasons. The first changes the degree, and the second makes the discriminant zero.
:::

## Word problems and checking the result

:::esempio{#problemi titolo="Dimensions of a rectangle"}
A rectangle has area $40\,\mathrm{cm^2}$, and its longer side is $3\,\mathrm{cm}$ longer than its shorter side. If $x$ is the length of the shorter side in centimeters, the other side has length $x+3$. A side length is positive, so look for a solution with $x>0$.

$$
\begin{aligned}
x(x+3)&=40 \\[4pt]
x^2+3x-40&=0 \\[4pt]
(x-5)(x+8)&=0.
\end{aligned}
$$

The root $-8$ satisfies the equation but lies outside the set of admissible lengths. The root $5$ gives sides of $5\,\mathrm{cm}$ and $8\,\mathrm{cm}$. The product of the lengths is $40$ and their difference is $3$, as required.
:::

:::esempio{titolo="An area threshold with a fixed length"}
A rectangular space against a wall is enclosed using $12\,\mathrm m$ of fencing on the three exposed sides. If the two sides perpendicular to the wall each have length $x$ meters, the parallel side has length $12-2x$ meters. Both lengths are positive, so $0<x<6$. We seek the values for which the area is at least $16\,\mathrm{m^2}$.

$$
\begin{aligned}
x(12-2x)&\geq16 \\[4pt]
-2x^2+12x-16&\geq0 \\[4pt]
-2(x-2)(x-4)&\geq0 \\[4pt]
(x-2)(x-4)&\leq0.
\end{aligned}
$$

The last inequality gives $[2,4]$, which lies within the geometric domain. At both endpoints the area is exactly $16\,\mathrm{m^2}$. At the midpoint $x=3$, the parallel side is $6\,\mathrm m$ long and the area is $18\,\mathrm{m^2}$.

::grafico{f="x*(12-2*x)+0*sqrt(x*(6-x));16" xmin=-0.4 xmax=6.5 ymin=-3 ymax=21 punti="0,0,vuoto;2,16,pieno;4,16,pieno;6,0,vuoto" legenda="y=x(12-2x);y=16" titolo="The area graph is at height $16$ or higher for $2\leq x\leq4$"}

:::
