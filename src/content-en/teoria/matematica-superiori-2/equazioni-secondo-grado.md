---
titolo: Quadratic Equations
sommario: Quadratics with or without missing terms, quadratic formula, discriminant, Viète's formulas, rational equations, and word problems.
---

## Standard Form

:::definizione{#forma titolo="Coefficients and Solutions"}
A **quadratic equation** has the form $ax^2+bx+c=0$, with $a\ne0$. The coefficients are real. Before using the formula, expand the products, move all terms to one side, and collect like terms.

From $(x+1)(x+2)=7$ we obtain $x^2+3x-5=0$, so $a=1$, $b=3$, and $c=-5$. The sign of the constant term is part of the coefficient.

A value is a solution if substituting it for $x$ makes the polynomial zero. The equation can have zero, one, or two distinct real roots.
:::

## Incomplete Quadratic Equations

:::teorema{#incomplete titolo="Quadratics with a Missing Term"}
If $b=0$, the equation **has no linear term** and becomes $x^2=-\dfrac ca$. A positive right side gives two opposite roots. If it is zero, the root is zero, and a negative value rules out real solutions.

For $2x^2-18=0$, we have $x^2=9$ and therefore $x=\pm3$. For $x^2+4=0$, there are no real solutions.

If $c=0$, the equation **has no constant term** and factors as $x(ax+b)=0$. The roots are $0$ and $-\dfrac ba$. If $b=0$ as well, they coincide and $0$ is a double root. For $3x^2-12x=0$, the roots are $0$ and $4$. Dividing by $x$ would lose the zero root.
:::

## The Quadratic Formula

:::teorema{#formula titolo="Completing the Square"}
Multiplying $ax^2+bx+c=0$ by $4a$ and completing the square gives
$$
4a^2x^2+4abx+4ac=0
\iff(2ax+b)^2=b^2-4ac.
$$
The **discriminant** is the number $\Delta=b^2-4ac$. If $\Delta\ge0$, taking the square root gives
$$
x=\frac{-b\pm\sqrt\Delta}{2a}.
$$
For $x^2-5x+6=0$, $\Delta=25-24=1$, and the roots are $\dfrac{5\pm1}{2}$, namely $2$ and $3$. Division by $2a$ is allowed because the leading coefficient is nonzero.

If the linear coefficient is $2b'$, the shortened formula $x=\dfrac{-b'\pm\sqrt{(b')^2-ac}}a$ can be used.
:::

## The Discriminant

:::teorema{#discriminante titolo="Number and Nature of the Roots"}
If $\Delta>0$, there are two distinct real roots. If $\Delta=0$, they coincide at $-\dfrac b{2a}$, called a double root. If $\Delta<0$, the equation has no real roots.

For $x^2-4x+1=0$, the exact roots are $2\pm\sqrt3$. For $x^2+2x+5=0$, $\Delta=-16$, so there are no real solutions. For $(x-3)^2=0$, the only distinct root is $3$.

Keep irrational roots in exact form. A double root has exponent two in the factorization and appears once in the solution set.

::grafico{f="(x-2)^2;x^2+1" xmin=-2 xmax=5 ymin=-1 ymax=8 titolo="A double root for $y=(x-2)^2$ and no real roots for $y=x^2+1$"}
:::

:::esempio{titolo="The Discriminant and the x-Intercepts"}
The minimum of $x^2-4x+5$ is $1$ because $x^2-4x+5=(x-2)^2+1$. The parabola therefore lies above the x-axis, and the equation has no real roots. Lowering the constant term from $5$ to $4$ brings the minimum to zero. The parabola then touches the axis at $x=2$, and the equation has a double root. A constant term of $3$ gives $(x-2)^2-1$. The values $x=1$ and $x=3$ make the square equal to $1$ and give two intersections.

::grafico{f="(x-2)^2+1;(x-2)^2;(x-2)^2-1" legenda="y=(x-2)^2+1;y=(x-2)^2;y=(x-2)^2-1" xmin=-0.5 xmax=4.5 ymin=-1.7 ymax=4.2 punti="1,0,pieno,A;2,0,pieno,V;3,0,pieno,B" titolo="The constant term changes the height of the vertex"}
:::

## Viète's Formulas

:::teorema{#viete titolo="Sum, Product, and Factorization"}
If $x_1,x_2$ are the real roots, counting a double root twice,
$$
x_1+x_2=-\frac ba,\qquad x_1x_2=\frac ca,\qquad
ax^2+bx+c=a(x-x_1)(x-x_2).
$$
Expanding the product recovers the coefficients and proves the first two formulas.

For $2x^2-10x+12=0$, the roots are $2$ and $3$. Their sum is $5$, their product is $6$, and the trinomial factors as $2(x-2)(x-3)$. The factor $a$ remains in the factorization.

Two numbers with sum $s$ and product $p$ solve $t^2-st+p=0$. They are real if $s^2-4p\ge0$.
:::

## Rational Equations

:::teorema{#fratte titolo="Domain and Excluded Roots"}
Before clearing denominators, require each of them to be nonzero. Multiply by the common denominator and solve the resulting equation. Keep only the roots in the original domain.

For $\dfrac{x^2-5x+6}{x-2}=0$, exclude $x=2$. The numerator is zero at $2$ and $3$, leaving only $3$. Canceling the factor $x-2$ preserves the exclusion.

Substituting back into the original equation checks both the equality and the denominators. Multiplying by an expression that becomes zero does not make its zero a solution.
:::

:::esempio{titolo="An Excluded Root After Simplification"}
In the equation $\dfrac{x}{x-1}=\dfrac{2}{x(x-1)}$, exclude $x=0$ and $x=1$. On this domain, multiply by $x(x-1)$ to obtain $x^2=2$, giving the candidates $-\sqrt2$ and $\sqrt2$. Both are admissible. Replacing $2$ by $1$ gives $x^2=1$. In that case only $x=-1$ remains, because the candidate $x=1$ makes a denominator zero.
:::

## Equations with Parameters

:::teorema{#parametri titolo="Analyzing the Cases"}
First check that the coefficient of $x^2$ is nonzero. If it vanishes, the degree drops and the equation is analyzed separately.

For $x^2-2x+k=0$, the discriminant is $4-4k$. There are two distinct roots for $k<1$, one double root for $k=1$, and no real roots for $k>1$.

When two positive roots are required, first check that they are real. A positive sum and product then ensure that both are positive. A positive product alone also allows two negative roots.

For $kx^2+x-1=0$, the case $k=0$ gives the linear equation $x-1=0$. The quadratic formula applies only when $k\ne0$.
:::

:::esempio{titolo="Roots with Opposite Signs"}
For $2x^2-3x+k=0$, the product of the real roots is $\dfrac k2$. Two roots of opposite signs therefore require $k<0$. For these values, the discriminant is $9-8k>0$, so the roots are real and distinct. Their product is negative and their signs are opposite. At $k=0$, one root is zero, so the boundary value does not meet the condition.
:::

## Word Problems and Parabolas

:::osservazione{#problemi titolo="Constraints on Solutions"}
If a rectangle has base $h+2$ and area $24$, its height satisfies $h(h+2)=24$. The roots are $4$ and $-6$, and a length must be positive. This gives height $4$ and base $6$.

On the graph, the roots are the x-coordinates where the parabola $y=ax^2+bx+c$ meets the horizontal axis. Their y-coordinates are zero.

::grafico{f="x^2-5*x+6" punti="2,0,pieno,A;3,0,pieno,B" xmin=-1 xmax=6 ymin=-2 ymax=8 titolo="The roots $2$ and $3$ are the x-coordinates of the points on the horizontal axis"}

The graph distinguishes the cases of the discriminant, and the algebra gives the exact roots. In word problems, also check the units, signs, and constraints in the question.
:::
