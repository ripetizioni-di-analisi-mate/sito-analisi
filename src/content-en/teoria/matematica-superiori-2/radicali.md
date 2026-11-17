---
titolo: Real Numbers and Radicals
sommario: Irrational numbers, real radicals, domain conditions, operations, rationalizing denominators, and rational exponents.
---

## Rational and Irrational Numbers

:::definizione{#reali titolo="The Set of Real Numbers"}
A **rational number** can be written as $\dfrac pq$, with integers $p,q$ and $q\ne0$. Its decimal expansion terminates or repeats. An **irrational number** has a nonterminating, nonrepeating decimal expansion and is not the ratio of two integers. Together, the two kinds of numbers form $\mathbb R$.

For example, $\dfrac38=0.375$ is rational and $\sqrt2$ is irrational. The values $1.41$ and $1.414$ approximate $\sqrt2$. Keep the exact value in calculations and round to the required precision.

Suppose $\sqrt2=\dfrac pq$ were a fraction in lowest terms. Then $p^2=2q^2$ would imply that $p$ is even. Writing $p=2k$ would give $q^2=2k^2$, so $q$ would also be even. The fraction would not be in lowest terms. This contradiction proves irrationality.
:::

## Roots with Even and Odd Indices

:::definizione{#definizione titolo="The Principal Root"}
For $a\ge0$, the value $\sqrt[2m]{a}$ is the unique nonnegative number whose power with exponent $2m$ is $a$. For an odd index $2m+1$, the root exists for every real $a$ and has the same sign as the radicand. The index states the power to which the root must be raised to recover the radicand. The indices considered are integers at least two.

Thus $\sqrt{25}=5$, $\sqrt[4]{16}=2$, and $\sqrt[3]{-27}=-3$. The equation $x^2=25$ has two solutions, $x=\pm5$. The symbol $\sqrt{25}$ refers only to the principal root.

The square root of $-4$ is not real. The cube root of $-8$ is $-2$ because $(-2)^3=-8$.
:::

:::esempio{titolo="Two Operations with Different Results"}
To find the fourth root of $81$, look for a nonnegative number whose fourth power is $81$. Since $3^4=81$, the root is $3$. In the equation $x^4=81$, negative values are also possible. Since $(-3)^4=81$, the solutions are $-3$ and $3$.
:::

## Domain Conditions

:::teorema{#dominio titolo="Radicands and Denominators"}
A radical with an even index requires a nonnegative radicand. If the entire denominator is an even-index radical, its radicand must be strictly positive.

The expression $\sqrt{2x-6}$ requires $x\ge3$. The expression $\dfrac1{\sqrt{2x-6}}$ requires $x>3$. An odd index alone puts no restriction on the sign.

If the radicand is a fraction, the fraction itself must be defined. For $\sqrt{\dfrac{x-1}{x+2}}$, check the sign of the quotient and exclude $x=-2$. The domain is $(-\infty,-2)\cup[1,+\infty)$.

::grafico{f="sqrt(x-1)" xmin=-1 xmax=8 ymin=-1 ymax=4 punti="1,0,pieno,A" titolo="The graph of $y=\sqrt{x-1}$ starts at $(1;0)$"}
:::

:::esempio{titolo="Conditions That Must Hold Together"}
In the expression $\dfrac{\sqrt{2x-1}}{\sqrt{5-x}}$, the numerator can be zero. The denominator must have a real, nonzero square root. The two conditions are

$$
\begin{cases}
2x-1\ge0\\
5-x>0,
\end{cases}
\qquad
\begin{cases}
x\ge\dfrac12\\[4pt]
x<5.
\end{cases}
$$

The domain is $\left[\dfrac12,5\right)$. At $x=\dfrac12$, the fraction is zero and the denominator is positive. At $x=5$, the denominator is zero, so this endpoint is excluded.
:::

## Simplifying Radicals and Taking Out Factors

:::teorema{#semplificazione titolo="Square Factors and Absolute Value"}
For $a\ge0$ and $k\in\mathbb R$, the identity $\sqrt{k^2a}=|k|\sqrt a$ holds. In particular, $\sqrt{x^2}=|x|$ for every real $x$. The absolute value is needed because the principal square root is nonnegative.

For example, $\sqrt{72}=6\sqrt2$ and $\sqrt{(-5)^2}=5$. When $x<0$, the expression $\sqrt{x^2}$ becomes $-x$, which is positive.

For an odd index, $\sqrt[3]{a^3}=a$. Reducing the index and exponent must preserve the original domain. For example, $\sqrt[6]{x^2}=\sqrt[3]{|x|}$ holds for every real number, while $\sqrt[3]x$ would be negative for $x<0$.

::grafico{f="abs(x)" xmin=-4 xmax=4 ymin=-1 ymax=5 titolo="The function $y=\sqrt{x^2}=|x|$ takes nonnegative values"}
:::

:::esempio{titolo="Taking a Variable Outside the Radical"}
For every $x\in\mathbb R$, the value of $18x^2$ is nonnegative. Writing $18x^2=(3x)^2\cdot2$ gives

$$
\sqrt{18x^2}=|3x|\sqrt2=3|x|\sqrt2.
$$

For $x=-2$, the simplified form gives $6\sqrt2$. The absolute value keeps the sign of the principal root even when $x$ is negative.
:::

## Operations

:::teorema{#operazioni titolo="Like Radicals, Products, and Quotients"}
For $a,b\ge0$, the identity $\sqrt a\sqrt b=\sqrt{ab}$ holds. If $b>0$, then $\dfrac{\sqrt a}{\sqrt b}=\sqrt{\dfrac ab}$. Add the coefficients of **like** radicals, which have the same index and radicand.

For example, $\sqrt{12}+\sqrt{27}=2\sqrt3+3\sqrt3=5\sqrt3$. The expression $\sqrt2+\sqrt3$ remains a sum. Squaring the binomial gives $5+2\sqrt6$.

A root does not distribute over addition. For example, $\sqrt{9+16}=5$, whereas $\sqrt9+\sqrt{16}=7$. The product and quotient rules do not give a corresponding rule for sums.
:::

## Rationalizing a Single Radical

:::teorema{#razionalizzazione titolo="Removing a Radical from the Denominator"}
To **rationalize** is to obtain an equivalent fraction with a rational denominator. Multiply the numerator and denominator by the same nonzero factor.

For example
$$
\frac5{\sqrt3}=\frac{5\sqrt3}{3}.
$$
The product $\sqrt3\sqrt3$ equals $3$. For $\dfrac1{\sqrt[3]2}$, multiply by $\sqrt[3]4$ to obtain $\dfrac{\sqrt[3]4}{2}$, because the product of the radicals in the denominator is $\sqrt[3]8=2$.

The transformation preserves the exclusions in the original domain. Simplifying cannot make a value that made the denominator zero admissible.
:::

## The Conjugate

:::teorema{#coniugato titolo="Sums and Differences of Radicals"}
The **conjugate** of $\sqrt a-\sqrt b$ is $\sqrt a+\sqrt b$. For $a,b\ge0$, their product is $a-b$.

For example
$$
\frac1{\sqrt5-\sqrt2}=\frac{\sqrt5+\sqrt2}{5-2}
=\frac{\sqrt5+\sqrt2}{3}.
$$
Change the sign between the terms and keep the radicals unchanged. The identity used is $(u-v)(u+v)=u^2-v^2$.

If $a=b$, the original denominator is zero and the fraction is undefined. The new denominator $a-b$ preserves the same exclusion.
:::

:::esempio{titolo="A Negative Denominator"}
The conjugate of $\sqrt2-3$ is $\sqrt2+3$. Their product is $2-9=-7$, so

$$
\frac{1}{\sqrt2-3}
=\frac{\sqrt2+3}{2-9}
=-\frac{\sqrt2+3}{7}.
$$

Since $\sqrt2<3$, the original denominator is negative. The sign of the result matches the sign of the original fraction.
:::

## Rational Exponents and Comparisons

:::definizione{#potenze titolo="Fractional Exponents"}
For $a>0$, integer $p$, and positive integer $q$, define
$$
a^{\frac pq}=\sqrt[q]{a^p}.
$$
For $q=1$, this is the usual integer power. For example, $16^{\frac34}=8$ and $9^{-\frac12}=\dfrac13$. A positive base lets us apply the exponent rules without changing the domain.

The function $y=\sqrt x$ is increasing on $[0,+\infty)$, so comparing two square roots amounts to comparing the radicands. The numbers $2\sqrt3$ and $3\sqrt2$ are both positive, so compare their squares $12$ and $18$. It follows that $2\sqrt3<3\sqrt2$.

Squaring preserves order among nonnegative numbers. The argument requires that condition.
:::

:::esempio{titolo="A Negative Rational Exponent"}
To calculate $27^{-\frac23}$, first find the cube root of $27$, which is $3$. The exponent $-2$ calls for the reciprocal of the square of $3$. This gives

$$
27^{-\frac23}
=(\sqrt[3]{27})^{-2}
=\frac{1}{3^2}
=\frac19.
$$

Since the base is greater than one and the exponent is negative, the result is between zero and one.
:::
