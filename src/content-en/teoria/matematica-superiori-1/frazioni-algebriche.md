---
titolo: Algebraic fractions
sommario: Domain restrictions, simplification, operations, and checking excluded values.
---

## Domain restrictions

:::definizione{#dominio titolo="The denominator must be nonzero"}
An **algebraic fraction** is a quotient $\dfrac{P(x)}{Q(x)}$ of polynomials. It is defined for the values of $x$ for which $Q(x)\ne0$. That set of values is the domain of the expression.

For $\dfrac{x+1}{x-3}$, exclude $x=3$. The value $x=-1$ is allowed and makes the fraction zero. If the denominator is $x^2-9=(x-3)(x+3)$, both $3$ and $-3$ are excluded. A zero numerator is allowed when the denominator remains nonzero.
:::

## Canceling factors

:::teorema{#semplificare titolo="Equivalent expression on the original domain"}
A common nonzero factor can be canceled from the numerator and denominator. For $x\ne3$,

$$
\frac{x^2-9}{x-3}
=\frac{(x-3)(x+3)}{x-3}
=x+3.
$$

The value $x=3$ is still excluded from the original expression. An open circle at $(3,6)$ marks the missing point, since $x+3$ gives y-coordinate $6$ there.

::grafico{f="x+3" xmin=-4 xmax=7 ymin=-2 ymax=11 punti="3,6,vuoto" titolo="Graph of the fraction with the point at x = 3 excluded"}

:::

:::attenzione{titolo="Cancellation applies to factors"}
For $x\ne0$, the numerator of $\dfrac{x+3}{x}$ is a sum. Dividing both terms by $x$ gives $1+\dfrac3x$. At $x=2$, the value is $\dfrac52$, so canceling just the term $x$ and writing $3$ gives a different result.
:::

## Addition and subtraction

:::teorema{#somme titolo="Finding a common denominator"}
When the denominators are equal, add or subtract the numerators. When they differ, rewrite the fractions with a common denominator. For $x\ne3,-3$,

$$
\begin{aligned}
\frac1{x-3}+\frac1{x+3}
&=\frac{(x+3)+(x-3)}{(x-3)(x+3)}\\
&=\frac{2x}{x^2-9}.
\end{aligned}
$$

For the difference, subtract the entire second numerator.

$$
\frac1{x-3}-\frac1{x+3}=\frac{(x+3)-(x-3)}{x^2-9}=\frac6{x^2-9}.
$$

The minus sign reverses the sign of both terms in the numerator being subtracted.
:::

:::esempio{titolo="Denominators with a common factor"}
The denominators $x(x-2)$ and $x-2$ share the factor $x-2$. A common denominator is therefore $x(x-2)$. When $x\ne0$ and $x\ne2$, only the second fraction needs rewriting.

$$
\begin{aligned}
\frac{1}{x(x-2)}+\frac{2}{x-2}
&=\frac{1}{x(x-2)}+\frac{2x}{x(x-2)}\\[6pt]
&=\frac{2x+1}{x(x-2)}.
\end{aligned}
$$
:::

## Products and signs

:::teorema{#prodotti titolo="Multiplying and canceling common factors"}
To multiply, multiply the numerators and multiply the denominators. Common factors can be canceled before expanding. For $x\ne3,-3$,

$$
\frac{x-3}{x+3}\cdot\frac{x+3}{2(x-3)}=\frac12.
$$

The original conditions still apply when the result is constant.

The minus sign can be factored out. Since $-x-3=-(x+3)$, for $x\ne-3$ the result is $\dfrac{-x-3}{x+3}=-1$. The expressions $x-3$ and $3-x$ are additive inverses.
:::

## Dividing algebraic fractions

:::teorema{#divisioni titolo="The divisor must be defined and nonzero"}
Dividing by a fraction is equivalent to multiplying by its reciprocal. Both fractions must be defined and the divisor fraction must be nonzero.

For $\dfrac1{x+3}:\dfrac{x-1}{x+3}$, the denominators require $x\ne-3$ and the requirement that the divisor be nonzero gives $x\ne1$. On this domain,

$$
\frac1{x+3}\cdot\frac{x+3}{x-1}=\frac1{x-1}.
$$

The simplified expression still uses the original domain, which excludes $x=-3$ and $x=1$.
:::

## Numerical values and zeros

:::esempio{#valori titolo="Checking that a value is allowed"}
To evaluate $\dfrac{x+1}{x-3}$ at $x=5$, note that the denominator is two and hence nonzero. Substitute the given value.

$$
\frac{5+1}{5-3}=\frac62=3.
$$

Substituting $x=3$ gives an undefined expression.

To find where $\dfrac{x-4}{x+1}$ is zero, set its numerator to zero and check its denominator. This gives $x=4$, where the denominator is five, so the value is allowed. For $\dfrac{(x-4)^2}{x-4}$, the numerator also vanishes at $4$. Its denominator is zero there too, so the fraction has no zeros.
:::
