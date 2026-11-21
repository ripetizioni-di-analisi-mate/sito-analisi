---
titolo: "Real Numbers and Radicals"
sommario: "Real roots, domains, taking out factors, rationalising denominators and rational exponents, with exact checks and comparisons of signs."
---

## Rational and irrational numbers

:::definizione{#reali titolo="Rational and irrational numbers"}
A number is **rational** if it can be written as a fraction $\dfrac pq$, with $p$ and $q$ integers and $q\ne0$. For example, $\dfrac38$ is rational, and carrying out the division $3\div8$ gives its decimal expansion $0.375$. The decimal expansion of a rational number either terminates, like $0.375$, or is **repeating**, that is, a group of digits repeats without end, as in $\dfrac13=0.333\ldots$

The **real numbers** are all numbers that have a decimal expansion, terminating or infinite. Real numbers that are not rational are called **irrational**. Their decimal expansion is infinite and does not repeat.

A **radical** is an expression such as $\sqrt2$, made of the root sign and the number written under it, which is called the **radicand**. The **square root** $\sqrt a$ of a number $a\ge0$ (the symbol $\ge$ is read "greater than or equal to") is the positive or zero number whose square is $a$. For example, $\sqrt9=3$, because $3\ge0$ and $3^2=9$.

The diagonal of a square with side $1$ has length $\sqrt2$. Indeed, the diagonal divides the square into two right triangles whose legs have length $1$. By Pythagoras' theorem, the square of the diagonal is $1^2+1^2=2$, so the diagonal is the positive number whose square is $2$. Its exact measurement is the radical $\sqrt2$. The numbers $1.41$ and $1.42$ are a lower and an upper approximation of it, because
$$
1.41^2=1.9881<2,\qquad 1.42^2=2.0164>2.
$$
From these squares it follows that $1.41<\sqrt2<1.42$, because among nonnegative numbers the one with the smaller square is also the smaller number. This property is proved in the last section of the chapter.

::struttura{linee="0,0 2,0 2,2 0,2 0,0;0,0 2,2" riferimento=0 etichette="1,-0.33,1;-0.32,1,1;1.07,1.42,√2" titolo="The diagonal of a unit square has length $\sqrt2$"}
:::

::::teorema{titolo="Square roots of integers"}
An integer is a **perfect square** if it is the square of an integer, such as $0$, $1$, $4$, $9$, $16$, $25$.

For an integer $m\ge0$, the root $\sqrt m$ is rational if and only if $m$ is a perfect square. "If and only if" means that the two statements are either both true or both false. For example, $\sqrt{25}=5$ is rational, while $\sqrt2$, $\sqrt3$ and $\sqrt5$ are irrational.
:::dimostrazione
Suppose that $\sqrt m$ is rational. Then $\sqrt m=\dfrac pq$ with $q>0$ and with the fraction in **lowest terms**, that is, with $p$ and $q$ having no common divisor greater than $1$. Two integers with this property are called **coprime**.

Squaring gives $m=\dfrac{p^2}{q^2}$, so $p^2=mq^2$. Therefore $q^2$ divides $p^2$.

The prime factors of a square are the same as those of its base. Since $p$ and $q$ have no common prime factors, $p^2$ and $q^2$ have none either. A positive number that divides $p^2$ without sharing any prime factor with $p^2$ is $1$, so $q^2=1$ and $q=1$. It follows that $m=p^2$, that is, $m$ is a perfect square.

Conversely, if $m=p^2$ for an integer $p$, then $\sqrt m$ is the nonnegative number between $p$ and $-p$. This integer is rational.
:::
::::

:::esempio{titolo="How rationality can change in a calculation"}
The root $\sqrt2$ is irrational by the preceding theorem, because $2$ is not a perfect square. Other cases follow from this fact.

- The number $3\sqrt2$ is irrational. If it were equal to a rational number $r$, then $\sqrt2=\dfrac r3$ would be rational, because the quotient of two rational numbers is rational.
- The product of two irrational numbers can be rational. For example, $\sqrt8=2\sqrt2$ is irrational and $\sqrt2\cdot\sqrt8=\sqrt{16}=4$.
- The sum of two irrational numbers can also be rational. Indeed, $\sqrt2+(5-\sqrt2)=5$. The second **term** (addend of the sum) $5-\sqrt2$ is irrational. If it were equal to a rational number $r$, then $\sqrt2=5-r$ would be rational, because the difference of two rational numbers is rational, in contradiction with the preceding proof.
:::

## Even- and odd-index roots

:::definizione{#definizione titolo="The value of a real radical"}
The **index** of a root is the integer $n\ge2$ written small on the root sign, like the $3$ in $\sqrt[3]8$. With index $2$ the index is not written, so $\sqrt a$ denotes the square root.

If $n$ is even and $a\ge0$, the symbol $\sqrt[n]{a}$ denotes the unique nonnegative number $r$ satisfying $r^n=a$. It is also called the **principal root**. For example, $\sqrt[4]{16}=2$, because $2\ge0$ and $2^4=16$; also $(-2)^4=16$, but the principal root is the nonnegative value $2$. If $a<0$, the even-index root is not a real number, because an even power of a real number is always greater than or equal to zero, as in $(-3)^2=9$.

If $n$ is odd, $\sqrt[n]{a}$ is the unique real number $r$ with $r^n=a$, and it is defined for every real number $a$. The result has the same sign as $a$, because an odd power preserves the sign of the base. For example, $\sqrt[3]{-8}=-2$, because $(-2)^3=(-2)\cdot(-2)\cdot(-2)=-8$. The root of zero is zero for both even and odd indices.
:::

:::esempio{titolo="A root and the solutions of an equation"}
The equation $u^2=4$ has two solutions, $-2$ and $2$, because $(-2)^2=4$ and $2^2=4$. The root $\sqrt4$, on the other hand, is a single number, $2$, namely the nonnegative solution.

On the graph of $y=x^2$, the two solutions are the **horizontal coordinates** ($x$-coordinates) of the points $A=(-2,4)$ and $B=(2,4)$, which have the same **vertical coordinate** ($y$-coordinate), equal to $4$. The graph of $y=\sqrt x$ contains the point $C=(4,2)$, because $\sqrt4=2$. Swapping the coordinates of $B$ gives $C$, so in the figure $B$ and $C$ are symmetric with respect to the line $y=x$. In the same way, the graph of the root is the reflection, across that line, of only the branch of the parabola with $x\ge0$. This is why the root gives a single value.

::grafico{f="x^2;sqrt(x);x" xmin=-2.6 xmax=4.8 ymin=-0.65 ymax=5.3 punti="-2,4,pieno,A;2,4,pieno,B;4,2,pieno,C" legenda="y=x^2;y=\sqrt{x};y=x" titolo="The square root corresponding to $4$ is $2$"}
:::

## Domain conditions

:::osservazione{#dominio titolo="Which expressions must be defined"}
The **domain** of an expression containing a variable $x$ is the set of real numbers that, substituted for $x$, give a real number. The conditions that determine it are called **domain conditions**.

- An even-index radical requires its radicand to be defined and greater than or equal to zero.
- If that radical is the entire denominator of a fraction, its value must also be nonzero, because division by zero is undefined. An even-index root is zero only when its radicand is zero, so the condition becomes a strictly positive radicand ($>0$).
- An odd-index radical puts no particular restriction on the sign of its radicand, but the radicand must still be defined.

The root $\sqrt{2x-6}$ exists when the radicand is nonnegative:
$$
2x-6\ge0\iff 2x\ge6\iff x\ge3.
$$
The symbol $\iff$ is read "is equivalent to". In the second step $6$ is added to both sides, and in the third both sides are divided by $2$, which is positive. At $x=3$ the root equals $\sqrt0=0$. The reciprocal $\dfrac1{\sqrt{2x-6}}$ has the root in its denominator, so it requires $2x-6>0$, that is, $x>3$. In interval notation the two domains are written $[3,+\infty)$ and $(3,+\infty)$. The symbol $[$ indicates that the endpoint $3$ is included, the symbol $($ that it is excluded, and $+\infty$ (plus infinity) indicates that the interval continues without end to the right.

In the figure, the point $A=(3,0)$ belongs to the graph of the root. The dashed vertical line $x=3$ marks the value excluded from the reciprocal. The point $B=\left(\dfrac72,1\right)$ belongs to both graphs, because at $x=\dfrac72$ the radicand equals $7-6=1$, so the root and its reciprocal both equal $1$.

::grafico{f="sqrt(2*x-6);1/sqrt(2*x-6)" xmin=-0.6 xmax=7.4 ymin=-0.6 ymax=3.6 punti="3,0,pieno,A;3.5,1,pieno,B" asintoti="x=3" legenda="y=\sqrt{2x-6};y=\dfrac1{\sqrt{2x-6}}" titolo="The root is defined at $x=3$, while its reciprocal excludes that value"}
:::

:::esempio{titolo="A quotient under the radical"}
For $\sqrt{\dfrac{x-1}{x+2}}$, the quotient must be defined and greater than or equal to zero. The denominator $x+2$ is zero at $-2$, so $x=-2$ is excluded. The numerator $x-1$ is zero at $1$, where the denominator equals $3$ and the quotient equals zero. The numbers $-2$ and $1$ divide the number line into three intervals. In each one the signs of the two factors are read off. The quotient is positive if the factors have the same sign and negative if they have opposite signs.

| Interval | $x-1$ | $x+2$ | Quotient |
| --- | --- | --- | --- |
| $x<-2$ | $-$ | $-$ | $+$ |
| $-2<x<1$ | $-$ | $+$ | $-$ |
| $x>1$ | $+$ | $+$ | $+$ |

The domain is $(-\infty,-2)\cup[1,+\infty)$. The symbol $-\infty$ (minus infinity) indicates that the first interval continues without end to the left, and the symbol $\cup$ (union) indicates that the numbers of the two intervals are taken together. The value $-2$ is excluded and $1$ is included. For example, $x=-3$ belongs to the left branch and gives the point $(-3,2)$ in the figure:
$$
\frac{-3-1}{-3+2}=\frac{-4}{-1}=4,\qquad\sqrt4=2.
$$
The dashed vertical line marks the excluded value $-2$. For very large or very negative $x$ the quotient gets close to $1$, and the graph gets close to the dashed horizontal line $y=1$.

::grafico{f="sqrt((x-1)/(x+2))" xmin=-7 xmax=7 ymin=-0.5 ymax=3.2 punti="-3,2;1,0,pieno,A" asintoti="x=-2;y=1" legenda="y=\sqrt{\dfrac{x-1}{x+2}}" titolo="The root is defined to the left of $-2$ and from $1$ onwards"}
:::

:::esempio{titolo="Conditions on two nested roots"}
In the expression $\sqrt{2-\sqrt x}$, one root is contained in the other.

- The inner root $\sqrt x$ requires $x\ge0$.
- The outer root requires $2-\sqrt x\ge0$, that is, $\sqrt x\le2$.

For $x\ge0$, both sides of $\sqrt x\le2$ are nonnegative. Among nonnegative numbers, squaring preserves order, so $\sqrt x\le2$ is equivalent to $x\le4$. The two conditions must hold together:
$$
\begin{cases}
x\ge0\\
x\le4
\end{cases}
$$
Therefore the domain is the interval $[0,4]$, with both endpoints included. At $x=4$ the inner root equals $2$ and the outer root equals $\sqrt{2-2}=0$.
:::

:::osservazione{titolo="A denominator can contain more than one term"}
When the denominator is a sum or a difference, the check is done in two steps. First one verifies that each radical exists, then that the whole denominator is nonzero.

- In $\dfrac1{\sqrt x+1}$ the root requires $x\ge0$. The denominator $\sqrt x+1$ is always greater than or equal to $1$, so it is never zero. The input $x=0$ is also allowed, because there the denominator equals $1$.
- In $\dfrac1{\sqrt x-1}$ the root again requires $x\ge0$. The denominator is zero when $\sqrt x=1$, that is, at $x=1$. Therefore $x=1$ is excluded, where the root exists but the difference is zero.

In the reciprocal $\dfrac1{\sqrt[3]{x-2}}$ the root has an odd index, so it exists for every $x$. It is therefore enough to exclude $x=2$, where the denominator equals $\sqrt[3]0=0$. For example, at $x=1$ the root in the denominator is $\sqrt[3]{-1}=-1$, so the value of the reciprocal is $-1$.
:::

## Taking out factors and reducing the index

::::teorema{#semplificazione titolo="Square factors and absolute value"}
The **absolute value** (or **modulus**) $|k|$ of a number $k$ is the number itself without its sign: $|k|=k$ if $k\ge0$ and $|k|=-k$ if $k<0$. For example, $|5|=5$ and $|-5|=5$. On the number line, $|k|$ is the distance of $k$ from $0$, and $|x-3|$ is the distance of $x$ from $3$.

For $a\ge0$ and any real number $k$ (in symbols $k\in\mathbb R$, where $\mathbb R$ denotes the set of real numbers),
$$
\sqrt{k^2a}=|k|\sqrt a.
$$
Bringing a factor outside the root in this way is called **taking out** the factor. In particular, with $a=1$, we have $\sqrt{x^2}=|x|$ for every real number $x$. For example, $\sqrt{(-3)^2}=\sqrt9=3=|-3|$.
:::dimostrazione
By definition, $\sqrt{k^2a}$ is the unique nonnegative number whose square is $k^2a$. Two facts about the number $|k|\sqrt a$ are therefore checked.

- It is nonnegative, because it is the product of two nonnegative numbers.
- Its square is $(|k|\sqrt a)^2=|k|^2(\sqrt a)^2=k^2a$, because $|k|^2=k^2$ and $(\sqrt a)^2=a$.

Therefore $|k|\sqrt a$ has both properties that characterise the square root of $k^2a$, so it equals that root.
:::
::::

:::esempio{titolo="Taking out constants and changing the index"}
To take out a factor, the radicand is written as a product containing a square. Since $72=36\cdot2=6^2\cdot2$, we have
$$
\sqrt{72}=\sqrt{6^2\cdot2}=6\sqrt2.
$$
If the factor depends on the variable, the absolute value appears outside the root:
$$
\sqrt{18x^2}=\sqrt{(3x)^2\cdot2}=|3x|\sqrt2=3|x|\sqrt2.
$$
At $x=-2$ this equals $3\cdot2\sqrt2=6\sqrt2$.

The order of the operations gives different conditions.

- In $(\sqrt x)^2$ the root is taken first, so $x$ is restricted to $x\ge0$ and the result is $x$.
- In $\sqrt{x^2}$ the square is taken first, and it is nonnegative for every $x$. The expression is therefore also defined at $x=-2$, where its value is $\sqrt4=2$.

**Reducing the index** means writing a radical with a smaller index. With a positive radicand, the index and the exponent of the radicand are divided by the same number. For example, $\sqrt[4]9=\sqrt[4]{3^2}=\sqrt3$, because $\sqrt3$ is positive and $(\sqrt3)^4=3^2=9$.

When the radicand contains a variable, a change of index is checked against the definition. The root $\sqrt[3]{|x|}$ is nonnegative and its sixth power is
$$
\left(\sqrt[3]{|x|}\right)^6=\left(\left(\sqrt[3]{|x|}\right)^3\right)^2=|x|^2=x^2.
$$
It follows that $\sqrt[6]{x^2}=\sqrt[3]{|x|}$ for every real $x$. The absolute value is necessary, because at $x=-8$ we have $\sqrt[6]{(-8)^2}=\sqrt[6]{64}=2$, whereas $\sqrt[3]{-8}=-2$. In the figure these values are the points $A=(-8,2)$ and $B=(-8,-2)$. For $x\ge0$ the two graphs coincide, as at the point $(8,2)$.

::grafico{f="cbrt(abs(x));cbrt(x)" xmin=-10 xmax=10 ymin=-2.8 ymax=2.8 punti="-8,2,pieno,A;-8,-2,pieno,B;8,2" legenda="y=\sqrt[6]{x^2};y=\sqrt[3]{x}" titolo="The sixth root of $x^2$ is nonnegative even when $x<0$"}
:::

:::attenzione{titolo="A zero factor can leave an isolated point"}
The radicand $x^2(x-1)$ is the product of $x^2$, which is always greater than or equal to zero, and $x-1$. The product is nonnegative in two cases.

- For $x\ge1$, because both factors are nonnegative.
- For $x=0$, because the factor $x^2$ is zero and therefore the product equals $0\cdot(-1)=0$.

Taking out the factor $x^2$ gives the form $|x|\sqrt{x-1}$, which is defined only for $x\ge1$ because it contains $\sqrt{x-1}$. The two forms agree on that interval, but the original formula also allows $x=0$. In the figure this is the point $A=(0,0)$, an **isolated point**, that is, a point separated from the rest of the graph, which starts at $B=(1,0)$.

::grafico{f="sqrt(x*x*(x-1))" xmin=-1.5 xmax=4.0 ymin=-0.65 ymax=7.5 punti="0,0,pieno,A;1,0,pieno,B;2,2" legenda="y=\sqrt{x^2(x-1)}" titolo="The domain includes $0$ even though $x-1$ is negative there"}
:::

## Operations with radicals

::::teorema{#operazioni titolo="Products and quotients of radicals with the same index"}
Two radicals with the same index are multiplied by multiplying their radicands, as in $\sqrt3\cdot\sqrt{12}=\sqrt{36}=6$. For an even index $n$, assume $a,b\ge0$. For an odd index, $a$ and $b$ can be any real numbers. Then
$$
\sqrt[n]{a}\sqrt[n]{b}=\sqrt[n]{ab}.
$$
If also $b\ne0$, then $\dfrac{\sqrt[n]a}{\sqrt[n]b}=\sqrt[n]{\dfrac ab}$. For example, $\dfrac{\sqrt{75}}{\sqrt3}=\sqrt{25}=5$.
:::dimostrazione
The product $\sqrt[n]a\sqrt[n]b$ is raised to the power $n$. By the rule $(xy)^n=x^ny^n$, this gives $(\sqrt[n]a)^n(\sqrt[n]b)^n=ab$.

- If $n$ is even, both factors are nonnegative, so the product is also nonnegative. The only nonnegative number whose $n$th power is $ab$ is $\sqrt[n]{ab}$, so the product equals it.
- If $n$ is odd, there is only one real number whose $n$th power is $ab$, namely $\sqrt[n]{ab}$, so the product equals it.

For the quotient, the same argument applies with the rule $\left(\dfrac xy\right)^n=\dfrac{x^n}{y^n}$, after confirming that the denominator is nonzero.
:::
::::

:::esempio{titolo="Grouping like radicals after taking out factors"}
Two radicals are **like radicals** if they have the same index and the same radicand, such as $4\sqrt3$ and $-2\sqrt3$. The numbers $4$ and $-2$ that multiply them are called **coefficients**. Like radicals are added by adding their coefficients, just as like monomials are. Radicals with different radicands can become like radicals after taking out factors:
$$
\begin{aligned}
\sqrt{48}-\sqrt{12}+\sqrt8
&=\sqrt{16\cdot3}-\sqrt{4\cdot3}+\sqrt{4\cdot2}\\[6pt]
&=4\sqrt3-2\sqrt3+2\sqrt2\\[6pt]
&=(4-2)\sqrt3+2\sqrt2\\[6pt]
&=2\sqrt3+2\sqrt2.
\end{aligned}
$$
The terms in $\sqrt3$ have coefficients $4$ and $-2$ and are combined. The term in $\sqrt2$ has a different radicand, so it forms a separate group.

The root of a sum is different from the sum of the roots. For example, $\sqrt{9+16}=\sqrt{25}=5$, whereas $\sqrt9+\sqrt{16}=3+4=7$.
:::

:::attenzione{titolo="The square root of a product can have a wider domain"}
The product $\sqrt{x-1}\sqrt{x+2}$ requires both factors to exist:
$$
\begin{cases}
x-1\ge0\\
x+2\ge0
\end{cases}
\iff
\begin{cases}
x\ge1\\
x\ge-2
\end{cases}
\iff x\ge1.
$$
The radical $\sqrt{(x-1)(x+2)}$ only requires the product $(x-1)(x+2)$ to be nonnegative. This happens for $x\ge1$ and also for $x\le-2$, because on this interval both factors are negative or zero and their product is nonnegative. For example, at $x=-3$ the product equals $(-4)\cdot(-1)=4$ and its square root is $2$, while the two separate roots $\sqrt{-4}$ and $\sqrt{-1}$ are not real. Therefore the equality $\sqrt{x-1}\sqrt{x+2}=\sqrt{(x-1)(x+2)}$ holds only for $x\ge1$.
:::

:::esempio{titolo="The domain of a quotient after simplification"}
In the quotient $\dfrac{\sqrt{x^2-1}}{\sqrt{x-1}}$, the denominator is a root, so it requires $x-1>0$, that is, $x>1$. The numerator factors as a difference of squares, $x^2-1=(x-1)(x+1)$. For $x>1$ both factors are positive, so the condition $x>1$ is also enough for the numerator. At the allowed inputs, the quotient rule is used and the factor $x-1$, which is nonzero, is cancelled:
$$
\begin{aligned}
\frac{\sqrt{x^2-1}}{\sqrt{x-1}}
&=\sqrt{\frac{(x-1)(x+1)}{x-1}}\\[6pt]
&=\sqrt{x+1}.
\end{aligned}
$$
On its own, the final radical would be defined for $x\ge-1$. The original quotient, however, is not defined for $x\le1$; for example, at $x=1$ the denominator $\sqrt{x-1}$ equals zero. Therefore the values of the final form can be used only while keeping the restriction $x>1$.
:::

## Rationalising a single radical

:::definizione{#razionalizzazione titolo="A factor that completes the power"}
To **rationalise** a fraction is to remove the radicals from its denominator. With a numerical denominator, the goal is an equivalent fraction, that is, one with the same value, that has a rational denominator. The numerator and denominator are multiplied by the same nonzero factor, so the value of the quotient is preserved. For example, multiplying by $\sqrt3$,
$$
\frac4{\sqrt3}=\frac{4\sqrt3}{\sqrt3\cdot\sqrt3}=\frac{4\sqrt3}{3}.
$$

For index $n$, consider a denominator $\sqrt[n]{b^r}$ formed from a power of a positive rational number $b$, with $1\le r<n$. It is multiplied by $\sqrt[n]{b^{n-r}}$. The product is
$$
\sqrt[n]{b^r}\cdot\sqrt[n]{b^{n-r}}=\sqrt[n]{b^{r+n-r}}=\sqrt[n]{b^n}=b,
$$
because the exponents add and their sum is $n$. Therefore the new denominator is the rational number $b$.
:::

:::esempio{titolo="Rationalising a denominator with a cube root"}
The denominator is $\sqrt[3]9=\sqrt[3]{3^2}$. Under the cube root there are two factors of $3$, while the third power $3^3$ needs three. The missing factor is therefore $\sqrt[3]3$, which is positive. The numerator and denominator are both multiplied by that factor.
$$
\begin{aligned}
\frac{5}{\sqrt[3]9}
&=\frac{5\sqrt[3]3}{\sqrt[3]{9\cdot3}}\\[6pt]
&=\frac{5\sqrt[3]3}{\sqrt[3]{27}}\\[6pt]
&=\frac{5\sqrt[3]3}{3}.
\end{aligned}
$$
If the denominator depends on $x$, one checks that the chosen factor is defined and nonzero for every value in the domain, because otherwise the multiplication would change the domain. For example, $\dfrac1{\sqrt x}$ is defined for $x>0$. On this domain $\sqrt x\ne0$ and $\sqrt x\cdot\sqrt x=x$, so $\dfrac1{\sqrt x}$ can be rewritten as $\dfrac{\sqrt x}{x}$.
:::

:::esempio{titolo="The sign of an odd-index denominator"}
For the denominator $\sqrt[3]{-2}$, the factor $\sqrt[3]4$ is chosen, because $(-2)\cdot4=-8=(-2)^3$ is a cube. The new denominator is the cube root of $-8$, which is $-2$.
$$
\frac1{\sqrt[3]{-2}}
=\frac{\sqrt[3]4}{\sqrt[3]{-8}}
=\frac{\sqrt[3]4}{-2}
=-\frac{\sqrt[3]4}{2}.
$$
The chosen factor is positive, so the result has the same sign as the original quotient. Both are negative, because $\sqrt[3]{-2}<0$. The method uses the cube root of the negative number $-8$, which exists because the index is odd.
:::

## The conjugate

::::teorema{#coniugato titolo="Multiplying a sum by its difference"}
Let $u$ and $v$ be real expressions. The sum $u+v$ and the difference $u-v$ are called **conjugates** when rationalising a denominator. For example, $\sqrt5+\sqrt2$ and $\sqrt5-\sqrt2$ are conjugates. Their product is
$$
(u+v)(u-v)=u^2-v^2.
$$
When $u$ and $v$ are square roots, the squares $u^2$ and $v^2$ no longer contain roots, so this product removes the radicals from a denominator made of two terms.
:::dimostrazione
By the distributive property, each term of the first expression is multiplied by each term of the second:
$$
(u+v)(u-v)=u^2-uv+vu-v^2.
$$
The mixed terms $-uv$ and $vu$ are opposites and cancel. The terms $u^2$ and $-v^2$ remain. If $u=\sqrt a$ and $v=\sqrt b$ with $a,b\ge0$, then $u^2=a$ and $v^2=b$, so the result is $a-b$.
:::
::::

:::esempio{titolo="A difference of roots in the denominator"}
For $\dfrac1{\sqrt5-\sqrt2}$, the conjugate of the denominator is $\sqrt5+\sqrt2$, which is positive and therefore nonzero. The numerator and denominator are multiplied by it:
$$
\frac1{\sqrt5-\sqrt2}
=\frac{\sqrt5+\sqrt2}{(\sqrt5-\sqrt2)(\sqrt5+\sqrt2)}
=\frac{\sqrt5+\sqrt2}{5-2}
=\frac{\sqrt5+\sqrt2}{3}.
$$
The same method works for every nonzero denominator $\sqrt a-\sqrt b$. In that case $\sqrt a\ne\sqrt b$, so at least one of the two roots is positive. Their sum is then positive, so it is a nonzero factor for every input in the fraction's domain.
:::

:::attenzione{titolo="The conjugate of a sum can be zero"}
The fraction $\dfrac1{\sqrt x+2}$ is defined for $x\ge0$, because the denominator $\sqrt x+2$ is at least $2$. The conjugate $\sqrt x-2$, on the other hand, is zero at $x=4$, because $\sqrt4=2$. At that point the original fraction equals $\dfrac1{2+2}=\dfrac14$. For $x\ge0$ and $x\ne4$,
$$
\frac1{\sqrt x+2}
=\frac{\sqrt x-2}{(\sqrt x+2)(\sqrt x-2)}
=\frac{\sqrt x-2}{x-4}.
$$
The new formula is not defined at $x=4$, where the denominator $x-4$ is zero. The form with denominator $x-4$ therefore needs the separate value $\dfrac14$ at $x=4$ to represent the whole original function. In the figure, the open point $A=\left(4,\dfrac14\right)$ marks the value missing from the rewritten formula on its own. The point $B=\left(0,\dfrac12\right)$ is the value at $x=0$, where the original denominator equals $2$.

::grafico{f="1/(sqrt(x)+2)" xmin=-1.25 xmax=11 ymin=-0.09 ymax=0.65 punti="4,0.25,vuoto,A;0,0.5,pieno,B" legenda="y=\dfrac{\sqrt{x}-2}{x-4}\quad(x\ge0,\ x\ne4)" titolo="The quotient with denominator $x-4$ omits the point $(4,\dfrac14)$"}
:::

## Rational exponents

::::teorema{#potenze titolo="A power for each rational exponent"}
A fractional exponent denotes a root. The denominator of the exponent is the index of the root and the numerator is the exponent of the radicand. For $a>0$, an integer $p$ and a positive integer $q$, define
$$
a^{\frac pq}=\sqrt[q]{a^p}=(\sqrt[q]a)^p.
$$
For example, $4^{\frac32}=(\sqrt4)^3=2^3=8$. For $q=1$, this is the usual integer power $a^p$. The value depends only on the number $\dfrac pq$ and is independent of the fraction used to write it. For example, $8^{\frac13}=\sqrt[3]8=2$ and $8^{\frac26}=\sqrt[6]{64}=2$.
:::dimostrazione
The two forms containing a root are positive numbers. Raised to the power $q$, both give $a^p$:
$$
\left(\sqrt[q]{a^p}\right)^q=a^p,\qquad
\left((\sqrt[q]a)^p\right)^q=\left((\sqrt[q]a)^q\right)^p=a^p.
$$
There is only one positive number whose $q$th power is $a^p$ (uniqueness of the positive root), so the two forms coincide.

If $\dfrac pq=\dfrac rs$ with $s>0$, then $ps=rq$, and $a^{\frac rs}$ is positive as well. Raising the two powers to $qs$ gives
$$
\left(a^{\frac pq}\right)^{qs}=\left(\left(a^{\frac pq}\right)^q\right)^s=(a^p)^s=a^{ps},\qquad
\left(a^{\frac rs}\right)^{qs}=\left(\left(a^{\frac rs}\right)^s\right)^q=(a^r)^q=a^{rq}.
$$
Since $ps=rq$, the two results are equal. By the uniqueness of the positive root of index $qs$, $a^{\frac pq}$ and $a^{\frac rs}$ are also equal.
:::
::::

:::esempio{titolo="A negative exponent and the choice of base"}
A negative exponent denotes the reciprocal, that is, $a^{-m}=\dfrac1{a^m}$. The calculation of $27^{-\frac23}$ takes the reciprocal first, then the cube root $\sqrt[3]{27}=3$ and finally the square:
$$
27^{-\frac23}=\frac1{27^{\frac23}}=\frac1{\left(\sqrt[3]{27}\right)^2}=\frac1{3^2}=\frac19.
$$
The definition can be extended to base zero for positive exponents, by setting $0^{\frac pq}=0$ when $p>0$ and $q>0$. A negative exponent with base zero would require the reciprocal of zero, which is undefined.

The preceding proof uses a positive base, and this restriction is necessary. Using $\sqrt[q]{a^p}$ anyway with $a=-8$, the equivalent fractions $\dfrac13$ and $\dfrac26$ would give different values. Indeed,
$$
\sqrt[3]{-8}=-2,\qquad\sqrt[6]{(-8)^2}=\sqrt[6]{64}=2.
$$
:::

:::esempio{titolo="Comparing two powers of the same base"}
For $x>0$, we have $x^{\frac32}=\sqrt{x^3}=\sqrt{x^2\cdot x}=x\sqrt x$. So $x^{\frac32}$ is obtained by multiplying $\sqrt x=x^{\frac12}$ by $x$.

- If $0<x<1$, multiplying the positive number $\sqrt x$ by $x$ makes it smaller, because $x$ is less than $1$. Therefore $x^{\frac32}<x^{\frac12}$.
- If $x>1$, multiplying by $x$ makes it larger. Therefore $x^{\frac32}>x^{\frac12}$.
- At $x=1$ both powers equal $1$, and on the graph they meet at the point $A=(1,1)$.

For example, at $x=2.25$ we have $\sqrt{2.25}=1.5$ and $2.25\cdot1.5=3.375$; these are the two points marked on the right. The origin belongs to both graphs, because for positive exponents we set $0^{\frac pq}=0$.

::grafico{f="sqrt(x);x*sqrt(x)" xmin=-0.35 xmax=2.85 ymin=-0.3 ymax=4.75 punti="0,0,pieno;1,1,pieno,A;2.25,1.5,pieno;2.25,3.375,pieno" legenda="y=x^{\frac12};y=x^{\frac32}" titolo="The two powers agree at $x=1$ and their order reverses there"}
:::

:::osservazione{titolo="A power raised to another rational power"}
With rational exponents too, a power of a power is computed by multiplying the exponents. For example, $8^{\frac23}=(\sqrt[3]8)^2=2^2=4$ and $\left(8^{\frac23}\right)^{\frac12}=\sqrt4=2$. Multiplying the exponents gives $\dfrac23\cdot\dfrac12=\dfrac13$, so directly $8^{\frac13}=2$.

In general, let $a>0$ and let $\dfrac pq$ and $\dfrac rs$ be two exponents with $q,s>0$. The two positive numbers $(a^{\frac pq})^{\frac rs}$ and $a^{\frac{pr}{qs}}$ both give $a^{pr}$ when raised to the power $qs$. For the second this follows from the definition. The first, raised to the power $s$, gives $(a^{\frac pq})^r$; raising that to the power $q$ gives $(a^p)^r=a^{pr}$. By the uniqueness of the positive root of index $qs$, the two expressions are equal.
:::

## Ordering and exact comparisons

:::osservazione{#confronti titolo="Comparing squares after checking the signs"}
Among nonnegative numbers, squaring preserves order. If $0\le u<v$, then
$$
v^2-u^2=(v-u)(v+u)>0,
$$
because both factors are positive. Indeed, $v-u>0$ since $u<v$, and $v+u>0$ since $v>0$. Therefore $u^2<v^2$.

The converse also holds. If $u^2<v^2$ for two nonnegative numbers, then $u<v$. Indeed, $u\ge v$ is impossible, because by the preceding rule it would give $u^2\ge v^2$.

With this rule, two positive radicals can be compared without approximating them. For example, $2\sqrt3<3\sqrt2$, because the squares are $(2\sqrt3)^2=4\cdot3=12$ and $(3\sqrt2)^2=9\cdot2=18$, and $12<18$.

To order the negative numbers $-2\sqrt3$ and $-3\sqrt2$, start from the comparison of their positive opposites, $2\sqrt3<3\sqrt2$. Multiplying both sides of an inequality by $-1$ reverses its direction, so $-2\sqrt3>-3\sqrt2$.
:::

:::osservazione{titolo="Comparing by cubing"}
Cubing preserves order among all real numbers.

- If $0\le u<v$, the product $(v-u)(v^2+uv+u^2)$ equals $v^3-u^3$. The first factor is positive and the second is positive, because $v^2>0$ and the other two terms are nonnegative. Therefore $u^3<v^3$.
- For two negative numbers, take their positive opposites, compare their cubes, and change the signs again, since $(-u)^3=-u^3$.
- If the numbers are on opposite sides of zero, the cube of the negative number is negative and the cube of the other is nonnegative, so the order is preserved.

The same holds for cube roots, because the cube of $\sqrt[3]a$ is $a$. For example, $\sqrt[3]{-9}<-2$, because the cube of $\sqrt[3]{-9}$ is $-9$, the cube of $-2$ is $-8$, and $-9<-8$.
:::

:::esempio{titolo="Bounding a sum of two roots"}
The sum $\sqrt7+\sqrt2$ can be placed between $4$ and $5$ without rounding.

- Since $7<9$, we have $\sqrt7<\sqrt9=3$. Since $2<4$, we have $\sqrt2<\sqrt4=2$. Adding, $\sqrt7+\sqrt2<3+2=5$.
- For the lower bound, the square of the sum is computed with the formula for the square of a binomial, $(u+v)^2=u^2+2uv+v^2$:
$$
(\sqrt7+\sqrt2)^2=7+2\sqrt7\sqrt2+2=9+2\sqrt{14}.
$$
Now $2\sqrt{14}>7$, because both numbers are positive and their squares are $4\cdot14=56$ and $49$. The square of the sum is therefore greater than $9+7=16=4^2$. Since the sum is positive, it follows that $\sqrt7+\sqrt2>4$.
:::

:::esempio{titolo="Comparing differences of roots"}
The difference between two nearby roots can be rewritten using the conjugate. For $x\ge0$, the sum $\sqrt{x+1}+\sqrt x$ is positive, so the numerator and denominator can be multiplied by it:
$$
\begin{aligned}
\sqrt{x+1}-\sqrt x
&=\frac{(\sqrt{x+1}-\sqrt x)(\sqrt{x+1}+\sqrt x)}{\sqrt{x+1}+\sqrt x}\\[6pt]
&=\frac{(x+1)-x}{\sqrt{x+1}+\sqrt x}\\[6pt]
&=\frac1{\sqrt{x+1}+\sqrt x}.
\end{aligned}
$$
As $x$ increases, both roots in the denominator increase, so the denominator increases and the reciprocal decreases. For example, $\sqrt5-\sqrt4$ corresponds to $x=4$ and $\sqrt{50}-\sqrt{49}$ corresponds to $x=49$. Since $4<49$, we have $\sqrt5-\sqrt4>\sqrt{50}-\sqrt{49}$. Point $A$ on the graph corresponds to $x=0$, where the difference is $\sqrt1-\sqrt0=1$.

::grafico{f="sqrt(x+1)-sqrt(x)" xmin=-0.7 xmax=12 ymin=-0.25 ymax=1.23 punti="0,1,pieno,A" legenda="y=\sqrt{x+1}-\sqrt{x}" titolo="The difference is positive and decreases because the denominator in its equivalent form increases"}
:::
