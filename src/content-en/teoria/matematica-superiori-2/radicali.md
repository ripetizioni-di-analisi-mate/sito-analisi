---
titolo: "Real Numbers and Radicals"
sommario: "Real roots, domains, taking out factors, rationalizing denominators and rational exponents, with exact checks and comparisons of signs."
---

## Rational and irrational numbers

:::definizione{#reali titolo="Rational and irrational numbers"}
A number is **rational** if it can be written as $\dfrac pq$ with integers $p$ and $q$ and $q\ne0$. Its decimal expansion terminates or repeats. Real numbers that are not rational are called **irrational**. Their decimal expansions continue without repeating. For example, $\dfrac38=0.375$ is rational.

The diagonal of a unit square has length $\sqrt2$, since the square of the length is $1^2+1^2=2$. The radical gives the exact measurement. The numbers $1.41$ and $1.42$ give lower and upper bounds for it. Their squares are $1.9881$ and $2.0164$, respectively. Squaring preserves order among nonnegative numbers, as shown in the final section.

::struttura{linee="0,0 2,0 2,2 0,2 0,0;0,0 2,2" riferimento=0 etichette="1,-0.33,1;-0.32,1,1;1.07,1.42,√2" titolo="The diagonal of a unit square has length $\sqrt2$"}
:::

::::teorema{titolo="Square roots of integers"}
For a nonnegative integer $m$, the square root $\sqrt m$ is rational if and only if $m$ is a perfect square.
:::dimostrazione
If $\sqrt m$ is rational, write $\sqrt m=\dfrac pq$ in lowest terms with $q>0$. Squaring gives $p^2=mq^2$, so $q^2$ divides $p^2$. Since $p$ and $q$ are coprime, their squares are coprime as well. It follows that $q=1$ and hence $m=p^2$. Conversely, if $m=p^2$ for some integer $p$, then $\sqrt m=|p|$, which is an integer.
:::
::::

:::esempio{titolo="How rationality can change in a calculation"}
The root $\sqrt2$ is irrational because $2$ is not a perfect square. The number $3\sqrt2$ is also irrational. If it were rational, dividing by the rational number $3$ would show that $\sqrt2$ is rational. Two irrational numbers can have a rational product. For example, $\sqrt8=2\sqrt2$ and $\sqrt2\cdot\sqrt8=4$. A sum can also be rational, since $\sqrt2+(5-\sqrt2)=5$. The second term is irrational. If it were rational, subtracting it from $5$ would make $\sqrt2$ rational, in contradiction with the preceding proof.
:::

## Even- and odd-index roots

:::definizione{#definizione titolo="The value of a real radical"}
The index of a root is an integer $n\ge2$. If $n$ is even and $a\ge0$, the symbol $\sqrt[n]{a}$ denotes the unique nonnegative number $r$ satisfying $r^n=a$. If $a<0$, the even-index root is undefined over the reals, since every even power of a real number is nonnegative.

If $n$ is odd, $\sqrt[n]{a}$ is defined for every real number $a$. The result has the same sign as $a$, because an odd power preserves sign. For example, $\sqrt[3]{-8}=-2$ because $(-2)^3=-8$. The root of zero is zero for either kind of index.
:::

:::esempio{titolo="A root and the solutions of an equation"}
The equation $u^2=4$ has solutions $-2$ and $2$. On the graph of $y=x^2$, these are the horizontal coordinates of $A$ and $B$, whose vertical coordinates are both $4$. The graph of the root $y=\sqrt x$ contains the point $C=(4,2)$. The root uses the branch $x\ge0$ of the power function to pick a single value. Swapping the coordinates of $B$ gives $C$, as shown by reflection across the line $y=x$.

::grafico{f="x^2;sqrt(x);x" xmin=-2.6 xmax=4.8 ymin=-0.65 ymax=5.3 punti="-2,4,pieno,A;2,4,pieno,B;4,2,pieno,C" legenda="y=x^2;y=\sqrt{x};y=x" titolo="The square root corresponding to $4$ is $2$"}
:::

## Domain conditions

:::osservazione{#dominio titolo="Which expressions must be defined"}
For an even-index root, the radicand must be defined and nonnegative. If that root is the entire denominator, its value must also be nonzero. Since an even-index root is zero only when its radicand is zero, the radicand must then be strictly positive. An odd-index root puts no restriction on the sign of its radicand, which still has to be defined.

The root $\sqrt{2x-6}$ exists for $x\ge3$ and is zero at $x=3$. Its reciprocal $\dfrac1{\sqrt{2x-6}}$ exists for $x>3$. In the figure, $A$ belongs to the graph of the root. The dashed vertical line marks the input excluded from the reciprocal. Point $B$ belongs to both graphs because the radicand is one at $x=\dfrac72$.

::grafico{f="sqrt(2*x-6);1/sqrt(2*x-6)" xmin=-0.6 xmax=7.4 ymin=-0.6 ymax=3.6 punti="3,0,pieno,A;3.5,1,pieno,B" asintoti="x=3" legenda="y=\sqrt{2x-6};y=\dfrac1{\sqrt{2x-6}}" titolo="The root is defined at $x=3$, while its reciprocal excludes that value"}
:::

:::esempio{titolo="A quotient under the radical"}
For $\sqrt{\dfrac{x-1}{x+2}}$, the quotient must be defined and at least zero. The factor $x+2$ excludes $-2$. The factor $x-1$ vanishes at $1$, where the denominator is positive. Compare the signs of the two factors on the three intervals.

| Interval | $x-1$ | $x+2$ | Quotient |
| --- | --- | --- | --- |
| $x<-2$ | $-$ | $-$ | $+$ |
| $-2<x<1$ | $-$ | $+$ | $-$ |
| $x>1$ | $+$ | $+$ | $+$ |

The domain is $(-\infty,-2)\cup[1,+\infty)$. The value $-2$ is excluded and $1$ is included. For example, on the left branch, taking $x=-3$ gives a quotient of $4$ and a root of $2$.

::grafico{f="sqrt((x-1)/(x+2))" xmin=-7 xmax=7 ymin=-0.5 ymax=3.2 punti="-3,2;1,0,pieno,A" asintoti="x=-2;y=1" legenda="y=\sqrt{\dfrac{x-1}{x+2}}" titolo="The root is defined to the left of $-2$ and from $1$ onwards"}
:::

:::esempio{titolo="Conditions on two nested roots"}
In $\sqrt{2-\sqrt x}$, the inner root requires $x\ge0$. The outer root requires $2-\sqrt x\ge0$. When $x\ge0$, both sides of $\sqrt x\le2$ are nonnegative, so this condition is equivalent to $x\le4$. Both conditions have to hold, giving domain $[0,4]$. At $4$, the inner root is $2$ and the outer root is zero.
:::

:::osservazione{titolo="A denominator can contain more than one term"}
When the denominator is a sum or a difference, first check that each radical exists, then check that the whole denominator is nonzero. For $\dfrac1{\sqrt x+1}$, the input $x=0$ is allowed because the denominator is one. For $\dfrac1{\sqrt x-1}$, the same check excludes $x=1$, where the square root exists but the difference is zero.

For the reciprocal $\dfrac1{\sqrt[3]{x-2}}$, the only input to exclude is $x=2$. For example, at $x=1$ the cube root in the denominator is $-1$, so the reciprocal is $-1$.
:::

## Taking out factors and reducing the index

::::teorema{#semplificazione titolo="Square factors and absolute value"}
For $a\ge0$ and $k\in\mathbb R$,
$$
\sqrt{k^2a}=|k|\sqrt a.
$$
In particular, $\sqrt{x^2}=|x|$ for every real number $x$.
:::dimostrazione
The product $|k|\sqrt a$ is nonnegative. Its square is $|k|^2(\sqrt a)^2=k^2a$. It therefore meets both conditions that characterize the square root of $k^2a$, so it equals that root.
:::
::::

:::esempio{titolo="Taking out constants and changing the index"}
Since $72=6^2\cdot2$, we have $\sqrt{72}=6\sqrt2$. If the factor depends on the variable, as in $\sqrt{18x^2}=\sqrt{(3x)^2\cdot2}$, the result is $3|x|\sqrt2$. At $x=-2$ this equals $6\sqrt2$. The order of the operations gives different conditions. In $(\sqrt x)^2$, the root is taken first, so $x$ must be nonnegative and the result is $x$. The expression $\sqrt{x^2}$ starts by squaring. It is also defined at $x=-2$, where its value is $2$.

Check a change of index against the definition. The root $\sqrt[3]{|x|}$ is nonnegative and its sixth power is $|x|^2=x^2$. It follows that $\sqrt[6]{x^2}=\sqrt[3]{|x|}$ for every real $x$. At $x=-8$ the result is $2$, whereas $\sqrt[3]{x}$ equals $-2$.

::grafico{f="cbrt(abs(x));cbrt(x)" xmin=-10 xmax=10 ymin=-2.8 ymax=2.8 punti="-8,2,pieno,A;-8,-2,pieno,B;8,2" legenda="y=\sqrt[6]{x^2};y=\sqrt[3]{x}" titolo="The sixth root of $x^2$ is nonnegative even when $x<0$"}
:::

:::attenzione{titolo="A zero factor can leave an isolated point"}
The radicand $x^2(x-1)$ is nonnegative for $x\ge1$ and also at $x=0$. At zero, the factor $x^2$ vanishes while $x-1=-1$. The form $|x|\sqrt{x-1}$ is defined only for $x\ge1$. It agrees with the original radical on that interval, while the original radical also includes the isolated zero $A$ in the figure.

::grafico{f="sqrt(x*x*(x-1))" xmin=-1.5 xmax=4.0 ymin=-0.65 ymax=7.5 punti="0,0,pieno,A;1,0,pieno,B;2,2" legenda="y=\sqrt{x^2(x-1)}" titolo="The domain includes $0$ even though $x-1$ is negative there"}
:::

## Operations with radicals

::::teorema{#operazioni titolo="Products and quotients of radicals with the same index"}
For an even index $n$, assume $a,b\ge0$. For an odd index, $a$ and $b$ can be any real numbers. Then
$$
\sqrt[n]{a}\sqrt[n]{b}=\sqrt[n]{ab}.
$$
If also $b\ne0$, then $\dfrac{\sqrt[n]a}{\sqrt[n]b}=\sqrt[n]{\dfrac ab}$.
:::dimostrazione
Raising the product on the left to the power $n$ gives $ab$. If $n$ is even, both factors are nonnegative, so the product has the sign required of the principal root. If $n$ is odd, use the uniqueness of the real root. For the quotient, the same argument applies after confirming that the denominator is nonzero.
:::
::::

:::esempio{titolo="Grouping like radicals after taking out factors"}
Two radicals are **like radicals** if they have the same index and radicand. After taking out factors, factor out the common radical.
$$
\begin{aligned}
\sqrt{48}-\sqrt{12}+\sqrt8
&=4\sqrt3-2\sqrt3+2\sqrt2\\[6pt]
&=2\sqrt3+2\sqrt2.
\end{aligned}
$$
The terms in $\sqrt3$ have coefficients $4$ and $-2$, while the term in $\sqrt2$ forms a separate group. Addition inside a square root follows a different rule. For example, $\sqrt{9+16}=5$, whereas $\sqrt9+\sqrt{16}=7$.
:::

:::attenzione{titolo="The square root of a product can have a wider domain"}
The product $\sqrt{x-1}\sqrt{x+2}$ requires $x\ge1$, since both factors have to exist. The radical $\sqrt{(x-1)(x+2)}$ can also be used for $x\le-2$, since on this interval the product of the two factors is nonnegative. For example, at $x=-3$ the square root of the product is $2$, while the two separate roots are undefined over the reals.
:::

:::esempio{titolo="The domain of a quotient after simplification"}
In the quotient $\dfrac{\sqrt{x^2-1}}{\sqrt{x-1}}$, the denominator requires $x>1$. That condition also makes $(x-1)(x+1)$ positive, so it suffices for the numerator. For allowed inputs,
$$
\begin{aligned}
\frac{\sqrt{x^2-1}}{\sqrt{x-1}}
&=\sqrt{\frac{(x-1)(x+1)}{x-1}}\\[6pt]
&=\sqrt{x+1}.
\end{aligned}
$$
The final radical is defined from $-1$ onwards. In the original quotient, the input $x=1$ would make the denominator zero. The simplified form therefore needs the original restriction $x>1$.
:::

## Rationalizing a single radical

:::definizione{#razionalizzazione titolo="A factor that completes the power"}
To **rationalize** a fraction is to remove radicals from its denominator. With a numerical denominator, the goal is an equivalent fraction with a rational denominator. Multiplying the numerator and denominator by the same nonzero factor preserves the quotient.

For index $n$, a denominator $\sqrt[n]{b^r}$ formed from a power of a positive rational number $b$ can be multiplied by $\sqrt[n]{b^{n-r}}$ if $1\le r<n$. The exponents under the root then add to $n$, so the new denominator is $b$.
:::

:::esempio{titolo="Rationalizing a denominator with a cube root"}
The denominator $\sqrt[3]9=\sqrt[3]{3^2}$ needs one more factor of $3$ under the root to give a cube. Since $\sqrt[3]3$ is positive, the numerator and denominator can both be multiplied by that factor.
$$
\begin{aligned}
\frac{5}{\sqrt[3]9}
&=\frac{5\sqrt[3]3}{\sqrt[3]{9\cdot3}}\\[6pt]
&=\frac{5\sqrt[3]3}{3}.
\end{aligned}
$$
When the denominator depends on $x$, check that the factor being used is defined and nonzero for the values that are to remain in the domain. For example, $\dfrac1{\sqrt x}$ can be rewritten as $\dfrac{\sqrt x}{x}$ on the original domain $x>0$.
:::

:::esempio{titolo="The sign of an odd-index denominator"}
For the denominator $\sqrt[3]{-2}$, use the factor $\sqrt[3]4$ because $(-2)\cdot4=-8$. The new denominator is the cube root of $-8$, which is $-2$.
$$
\frac1{\sqrt[3]{-2}}
=\frac{\sqrt[3]4}{-2}
=-\frac{\sqrt[3]4}{2}.
$$
The chosen factor is positive and the result is negative, as in the original quotient. The odd index allows the cube of a negative number to give a rational denominator.
:::

## The conjugate

::::teorema{#coniugato titolo="Multiplying a sum by its difference"}
Let $u$ and $v$ be real expressions. The sum $u+v$ and the difference $u-v$ are called **conjugates** when rationalizing a denominator. Their product is $u^2-v^2$.
:::dimostrazione
By the distributive property, the mixed terms are $uv$ and $-vu$, which cancel. The terms $u^2$ and $-v^2$ remain. If $u=\sqrt a$ and $v=\sqrt b$ with $a,b\ge0$, the result is $a-b$.
:::
::::

:::esempio{titolo="A difference of roots in the denominator"}
For $\dfrac1{\sqrt5-\sqrt2}$, the conjugate is $\sqrt5+\sqrt2$, which is positive. The product in the denominator is $5-2=3$, giving $\dfrac{\sqrt5+\sqrt2}{3}$. More generally, when the difference $\sqrt a-\sqrt b$ is nonzero, at least one of the roots is positive. Their sum is then a nonzero factor for every input in the fraction's domain.
:::

:::attenzione{titolo="The conjugate of a sum can be zero"}
The fraction $\dfrac1{\sqrt x+2}$ is defined for $x\ge0$. Its conjugate $\sqrt x-2$ is zero at $x=4$, where the original fraction equals $\dfrac14$. For $x\ge0$ and $x\ne4$,
$$
\frac1{\sqrt x+2}
=\frac{\sqrt x-2}{x-4}.
$$
The form with denominator $x-4$ therefore needs the separate value $\dfrac14$ at $x=4$ to represent the whole original function. The open point $A$ marks the value omitted by the rewritten formula on its own.

::grafico{f="1/(sqrt(x)+2)" xmin=-1.25 xmax=11 ymin=-0.09 ymax=0.65 punti="4,0.25,vuoto,A;0,0.5,pieno,B" legenda="y=\dfrac{\sqrt{x}-2}{x-4}\quad(x\ge0,\ x\ne4)" titolo="The quotient with denominator $x-4$ omits the point $(4,\dfrac14)$"}
:::

## Rational exponents

::::teorema{#potenze titolo="A power for each rational exponent"}
For $a>0$, an integer $p$ and a positive integer $q$, define
$$
a^{\frac pq}=\sqrt[q]{a^p}=(\sqrt[q]a)^p.
$$
For $q=1$, this is the usual integer power. The value depends on the rational exponent and is independent of the fraction used to write it.
:::dimostrazione
The two expressions containing a root are positive. Raising either to the power $q$ gives $a^p$. The uniqueness of the positive root shows that these two forms coincide. If $\dfrac pq=\dfrac rs$ with $s>0$, then $a^{\frac rs}$ is positive as well. Raising the two powers to $qs$ gives $a^{ps}$ and $a^{rq}$ respectively. Since $ps=rq$, the two powers are equal.
:::
::::

:::esempio{titolo="A negative exponent and the choice of base"}
To calculate $27^{-\frac23}$, first find the cube root $3$, then take the reciprocal of its square. The result is $\dfrac19$. The definition extends to base zero for positive exponents, by setting $0^{\frac pq}=0$ when $p>0$ and $q>0$. A negative exponent with base zero would require an undefined reciprocal.

The proof for a positive base explains the restriction. Using $\sqrt[q]{a^p}$ with $a=-8$ would give different values for the equivalent fractions $\dfrac13$ and $\dfrac26$. Indeed, $\sqrt[3]{-8}=-2$, while $\sqrt[6]{(-8)^2}=2$.
:::

:::esempio{titolo="Comparing two powers of the same base"}
For $x>0$, we have $x^{\frac32}=x\sqrt x$. If $0<x<1$, multiplying the positive number $\sqrt x$ by $x$ makes it smaller. If $x>1$, the product is larger. At $x=1$ both powers are one, and their graphs meet at $A$. The origin belongs to both graphs once positive powers are extended to zero.

::grafico{f="sqrt(x);x*sqrt(x)" xmin=-0.35 xmax=2.85 ymin=-0.3 ymax=4.75 punti="0,0,pieno;1,1,pieno,A;2.25,1.5,pieno;2.25,3.375,pieno" legenda="y=x^{\frac12};y=x^{\frac32}" titolo="The two powers agree at $x=1$ and their order reverses there"}
:::

:::osservazione{titolo="A power raised to another rational power"}
Let $a>0$. For exponents $\dfrac pq$ and $\dfrac rs$ with $q,s>0$, the positive numbers $(a^{\frac pq})^{\frac rs}$ and $a^{\frac{pr}{qs}}$ both give $a^{pr}$ when raised to $qs$. For the first expression, raising it to $s$ gives $(a^{\frac pq})^r$. Raising that result to $q$ gives $(a^p)^r=a^{pr}$. By uniqueness of the positive root of index $qs$, the original expressions are equal. For example, $8^{\frac23}=4$ and $(8^{\frac23})^{\frac12}=2$. Multiplying the exponents gives $8^{\frac13}=2$ directly.
:::

## Ordering and exact comparisons

:::osservazione{#confronti titolo="Comparing squares after checking the signs"}
If $0\le u<v$, then $v^2-u^2=(v-u)(v+u)>0$, since both factors are positive. Squaring therefore preserves order among nonnegative numbers. Conversely, if $u^2<v^2$ for nonnegative $u$ and $v$, the comparison $u\ge v$ is impossible, because it would give $u^2\ge v^2$. For example, $2\sqrt3<3\sqrt2$ because their squares are $12$ and $18$. To order $-2\sqrt3$ and $-3\sqrt2$, start with their positive opposites. Multiplying by $-1$ reverses the order and gives $-2\sqrt3>-3\sqrt2$.
:::

:::osservazione{titolo="Comparing by cubing"}
For $0\le u<v$, the product $(v-u)(v^2+uv+u^2)$ is positive and equals $v^3-u^3$. Cubing also preserves order between two negative numbers. Take their positive opposites, compare the cubes, and change the signs again. If the numbers are on opposite sides of zero, their cubes keep the corresponding signs. For example, $\sqrt[3]{-9}<-2$ because $-9<(-2)^3=-8$.
:::

:::esempio{titolo="Bounding a sum of two roots"}
The sum $\sqrt7+\sqrt2$ lies between $4$ and $5$. Since $\sqrt7<3$ and $\sqrt2<2$, the sum is less than $5$. For the lower bound, the square of the sum is $9+2\sqrt{14}$. Now $2\sqrt{14}>7$, because their squares are $56$ and $49$. The square of the sum is therefore greater than $16$, so $\sqrt7+\sqrt2>4$.
:::

:::esempio{titolo="Comparing differences of roots"}
The difference between two nearby roots can be studied using the conjugate. For $x\ge0$, the sum $\sqrt{x+1}+\sqrt x$ is positive and
$$
\begin{aligned}
\sqrt{x+1}-\sqrt x
&=\frac{(x+1)-x}{\sqrt{x+1}+\sqrt x}\\[6pt]
&=\frac1{\sqrt{x+1}+\sqrt x}.
\end{aligned}
$$
Both roots in the denominator increase as $x$ increases. The reciprocal therefore decreases. For example, $\sqrt5-\sqrt4$ is greater than $\sqrt{50}-\sqrt{49}$, since it corresponds to the smaller input $x=4$ compared with $x=49$. Point $A$ on the graph corresponds to $x=0$, where the difference is $1$.

::grafico{f="sqrt(x+1)-sqrt(x)" xmin=-0.7 xmax=12 ymin=-0.25 ymax=1.23 punti="0,1,pieno,A" legenda="y=\sqrt{x+1}-\sqrt{x}" titolo="The difference is positive and decreases because the denominator in its equivalent form increases"}
:::
