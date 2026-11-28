---
titolo: "Nonlinear equations and systems"
sommario: "Factoring, biquadratics, equations with radicals or absolute values, systems, and checking solutions."
---

## Factoring an equation

::::teorema{#fattorizzazione titolo="The zero-product property"}
The **factors** of a product are the expressions being multiplied: in $x(x-3)(x+3)$ the factors are $x$, $x-3$ and $x+3$. A **root**, or **solution**, of an equation is a value of the unknown that makes the equality true. The **domain** is the set of values of the unknown for which every expression is defined.

The **zero-product property** states that, if two or more factors are defined in the domain under consideration, their product is zero exactly when at least one factor is zero. The **left side** of an equation is the expression to the left of the sign $=$, and the **right side** is the one to the right. Therefore an equation whose right side is zero is solved by writing the left side as a product and setting one factor at a time equal to zero.
:::dimostrazione
If a factor equals zero, the product equals zero, because every number multiplied by zero gives zero.

Conversely, let $a$ and $b$ be two factors with $ab=0$ and suppose $a\ne0$. Multiplying both sides by the reciprocal $\dfrac1a$ gives $\dfrac1a\cdot ab=\dfrac1a\cdot0$, that is, $b=0$. Hence at least one of the two factors is zero. With three or more factors the same argument is repeated, treating the product of the first factors as a single factor.
:::
::::

:::esempio{titolo="Each factor gives a case"}
In $x^3-9x=0$ we **factor out** $x$, that is, we write it once in front of what remains of the two terms. Then $x^2-9$ is factored with the **difference of squares** $a^2-b^2=(a-b)(a+b)$, with $a=x$ and $b=3$:

$$
\begin{aligned}
x^3-9x&=x(x^2-9)\\[6pt]
&=x(x-3)(x+3)=0.
\end{aligned}
$$

Each factor gives a root: $x=0$, then $x-3=0$, so $x=3$, and finally $x+3=0$, so $x=-3$. The **solution set** is therefore $\{-3,0,3\}$. In the graph the three solutions are the **x-coordinates** (horizontal coordinates) of the three points where the curve meets the $x$-axis.

Dividing by $x$ at the start would give $x^2=9$, and the root zero would be lost. Division by $x$ makes sense only for $x\ne0$, so we divide after checking the case $x=0$ separately.

::grafico{f="x^3-9*x" xmin=-3.8 xmax=3.8 ymin=-14 ymax=14 punti="-3,0,pieno;0,0,pieno;3,0,pieno" titolo="The three linear factors identify three intersections with the axis"}
:::

:::osservazione{titolo="Distinct zeroes and multiplicity"}
In $x^2(x-2)^3=0$ there are two distinct roots, $0$ and $2$. The factor $x$ occurs twice, because $x^2=x\cdot x$, and the factor $x-2$ occurs three times. The number of times the factor of a root occurs is the **multiplicity** of the root: zero has multiplicity $2$ and the number $2$ has multiplicity $3$. The sum of the multiplicities, $2+3=5$, is the **degree** of the polynomial, that is, its highest exponent. The coefficient of the highest-degree term is the **leading coefficient**; when it equals $1$ the polynomial is **monic**, as in $x(x+1)(x-2)=x^3-x^2-2x$.

Near zero, $x^2$ is positive on both sides while $(x-2)^3$ is negative. The product is therefore negative to the left and to the right of $0$, so the graph touches the axis at $0$ and stays below it. Across $2$, the cubed factor changes sign while $x^2$ stays positive, so the graph crosses the axis. In general, at a root of even multiplicity the graph touches the axis without crossing it, and at a root of odd multiplicity it crosses it. Counting factors distinguishes multiplicity from the number of roots.
:::

## Biquadratic equations

::::teorema{#biquadratiche titolo="From the unknown to its square and back"}
A **biquadratic** equation has the form $ax^4+bx^2+c=0$ with $a\ne0$: it contains only $x^4$, $x^2$ and a number. Since $x^4=(x^2)^2$, we introduce the **auxiliary unknown** $t=x^2$, and the equation becomes quadratic in $t$:

$$
at^2+bt+c=0.
$$

We solve the equation in $t$, keep only the **nonnegative** roots, that is, those with $t\ge0$, and return to $x$ by solving $x^2=t$:

- every $t>0$ gives two opposite values, $x=-\sqrt t$ and $x=\sqrt t$, written together as $x=\pm\sqrt t$ (read “plus or minus”);
- $t=0$ gives only $x=0$;
- $t<0$ gives no real $x$.
:::dimostrazione
For every real number $x$ the square $t=x^2$ is nonnegative and $x^4=(x^2)^2=t^2$. Hence every solution $x$ gives a solution $t\ge0$ of the equation in $t$. Conversely, every solution $t>0$ gives $x=-\sqrt t$ and $x=\sqrt t$, both with square $t$. The value $t=0$ only gives $x=0$. No $t<0$ is the square of a real number. These cases exhaust the correspondence.
:::
::::

:::esempio{titolo="Four roots, or only three"}
In $x^4-5x^2+4=0$ we set $t=x^2$ and obtain $t^2-5t+4=0$. The numbers $1$ and $4$ have sum $5$ and product $4$, so $t^2-5t+4=(t-1)(t-4)$ and the two values of $t$ are $1$ and $4$. Since they are distinct and positive, $x^2=1$ gives $x=\pm1$ and $x^2=4$ gives $x=\pm2$.

In $x^4-4x^2=0$, instead, the equation in $t$ is $t^2-4t=t(t-4)=0$ and gives $t=0$ and $t=4$. From $t=0$ we get only $0$, and from $t=4$ we get $-2$ and $2$, so the solutions are $-2$, $0$ and $2$. In the graph the curve touches the axis at zero without switching sign, because $x^4-4x^2=x^2(x^2-4)$, and the factor $x^2$ gives zero multiplicity two.

::grafico{f="x^4-4*x^2" xmin=-2.65 xmax=2.65 ymin=-5 ymax=10 punti="-2,0,pieno;0,0,pieno;2,0,pieno" titolo="t = 0 gives one horizontal coordinate, while t = 4 gives two"}
:::

:::esempio{titolo="An auxiliary solution that gives no value of x"}
For $x^4+x^2-2=0$ we set $t=x^2$ and obtain $t^2+t-2=(t+2)(t-1)=0$, with $t=-2$ and $t=1$. The value $-2$ must be rejected before taking any square root, because a square is never negative. From $t=1$ we get $-1$ and $1$.

If instead the auxiliary equation were $(t-3)^2=0$, the value $t=3$ would be a **double root**, with the factor $t-3$ repeated twice, and it would still give two distinct real numbers, $-\sqrt3$ and $\sqrt3$. The distinction between the values of $t$ and those of $x$ therefore also matters when there is a double root.
:::

:::osservazione{titolo="Recognising the case of three roots in advance"}
A biquadratic has exactly three distinct real roots when the auxiliary equation has zero and one strictly positive root, that is, one greater than zero.

Zero is a root of $at^2+bt+c=0$ exactly when $c=0$, because substituting $t=0$ leaves $c=0$. The number $c$ is the **constant term**, the term without the unknown. With that constant term we factor out $t$, that is, $at^2+bt=t(at+b)$, and the other root is $-\dfrac ba$. The criterion is therefore

$$
\begin{cases}
c=0,\\[4pt]
-\frac ba>0.
\end{cases}
$$

If the other root is negative or coincides with zero, only $x=0$ remains. A single positive value of $t$ never gives just one real x-coordinate.
:::

## Equations with one square root

::::teorema{#irrazionali titolo="When squaring is reversible"}
An equation is **irrational** when the unknown appears under a root sign. The **radicand** is the expression under the root: in $\sqrt{x+6}$ the radicand is $x+6$. The symbol $\sqrt a$ denotes the **principal square root** of $a$, that is, the nonnegative number whose square is $a$. For example $\sqrt9=3$, even though $(-3)^2=9$ as well. The notations $A(x)$ and $B(x)$ denote two expressions containing $x$.

Where $A(x)$ and $B(x)$ are defined, the equation $\sqrt{A(x)}=B(x)$ is equivalent to

$$
\begin{cases}
A(x)\ge0,\\
B(x)\ge0,\\
A(x)=B(x)^2.
\end{cases}
$$

With the condition $B(x)\ge0$ the step becomes **reversible**, that is, it does not change the solution set.

:::dimostrazione
A real square root exists for a nonnegative radicand, and its value is nonnegative. Hence, if $\sqrt{A(x)}=B(x)$, then $A(x)\ge0$ and $B(x)\ge0$. Equal numbers have equal squares, so $A(x)=B(x)^2$.

Conversely, if $A(x)=B(x)^2$ and $B(x)\ge0$, then $B(x)$ is a nonnegative number with square $A(x)$. Hence $B(x)$ equals the principal root $\sqrt{A(x)}$.
:::
::::

:::esempio{titolo="A candidate has the wrong sign"}
In $\sqrt{x+6}=x$, the radicand requires $x+6\ge0$, that is, $x\ge-6$, and the right side requires $x\ge0$. Squaring gives

$$
\begin{aligned}
x+6&=x^2\\[6pt]
x^2-x-6&=0\\[6pt]
(x-3)(x+2)&=0.
\end{aligned}
$$

The values $3$ and $-2$ are **candidates**, that is, values to be checked in the original equation. Candidate $-2$ satisfies only the domain of the radical, but $\sqrt{-2+6}=\sqrt4=2$, which differs from $-2$. A candidate of this kind is called an **extraneous candidate**. Candidate $3$ checks as $\sqrt9=3$, so the only solution is $x=3$. The two original curves have just one intersection, the point $P=(3;3)$.

A function is **increasing** if its value grows as $x$ grows, and **decreasing** if its value falls. Since $\sqrt x$ increases and $2-x$ decreases, the equation $\sqrt x=2-x$ has at most one solution, which is $x=1$.

::grafico{f="sqrt(x+6);x" legenda="y=\sqrt{x+6};y=x" xmin=-6.7 xmax=5.5 ymin=-3 ymax=5.7 punti="3,3,pieno,P" titolo="Only x = 3 makes the original sides equal"}
:::

:::osservazione{titolo="The same square with different signs"}
The equation $\sqrt{x^2}=x$ has domain $\mathbb R$, the set of all real numbers, because $x^2\ge0$ for every $x$. Equating just the squares would give $x^2=x^2$, which is an **identity**, that is, an equality true for every value of $x$.

The original equation still requires $x\ge0$, because the left side is the **absolute value** $|x|$. The absolute value of a number is the number itself if it is nonnegative, and its opposite if it is negative: $|5|=5$ and $|-3|=3$. This example shows that a transformed equation can even be an identity while the original equality holds only on part of the domain.
:::

:::osservazione{titolo="Roots of odd index"}
The **cube root** $\sqrt[3]a$ is the real number whose cube is $a$: $\sqrt[3]8=2$ and $\sqrt[3]{-27}=-3$, because $(-3)^3=-27$. The real cube root is the inverse of cubing on the whole number line. It can therefore be negative, and cubing preserves equivalence without requiring a particular sign on either side, because different numbers have different cubes.

For example, $\sqrt[3]{x-2}=-3$ is equivalent to $x-2=(-3)^3=-27$, so $x=-25$. The same principle applies when the right side contains the unknown. From $\sqrt[3]x=-x$ we get $x=(-x)^3=-x^3$, that is, $x^3+x=x(x^2+1)=0$. The factor $x^2+1$ is at least $1$, so the only solution is $0$, which also satisfies the original equation.
:::

## Equations with two radicals

:::esempio{#due-radicali titolo="Isolate a radical and retain the sign condition"}
In $\sqrt{x+1}+\sqrt x=3$ both radicands must be nonnegative, and $x\ge0$ is enough, since it also implies $x+1\ge0$. We **isolate** the first radical, that is, we leave it alone on the left side: $\sqrt{x+1}=3-\sqrt x$. The right side must be nonnegative, and $3-\sqrt x\ge0$ means $\sqrt x\le3$, that is, $x\le9$. On the domain $0\le x\le9$ squaring is therefore allowed.

On the right we use the **square of a binomial** $(a-b)^2=a^2-2ab+b^2$ with $a=3$ and $b=\sqrt x$. The term $-2ab=-6\sqrt x$ is the **cross term**.

$$
\begin{aligned}
x+1&=9-6\sqrt x+x\\[6pt]
\sqrt x&=\frac43\\[6pt]
x&=\frac{16}{9}.
\end{aligned}
$$

In the second step we subtract $x$ from both sides, obtain $6\sqrt x=8$ and divide by $6$. The last squaring is reversible because $\dfrac43>0$.

The value belongs to the allowed interval, and the original radicals are $\sqrt{\dfrac{25}{9}}=\dfrac53$ and $\sqrt{\dfrac{16}{9}}=\dfrac43$, with sum $3$. Expanding the square of the binomial retains the cross term, which is exactly where we recover $\sqrt x$. In the graph the vertical segment at $x=9$ marks the point where $y=3-\sqrt x$ reaches the axis.

::grafico{f="sqrt(x+1);3-sqrt(x)" legenda="y=\sqrt{x+1};y=3-\sqrt x" xmin=-0.7 xmax=10.6 ymin=-0.6 ymax=4.3 punti="1.777777778,1.666666667,pieno,P;9,0,pieno" segmenti="9,0,9,3.4" titolo="The side containing 3 − √x must be on or above the axis"}
:::

:::attenzione{titolo="Checking the sign can finish the problem"}
In $\sqrt{x+4}+\sqrt x=1$, the domain is $x\ge0$. For $x\ge0$ the radicand $x+4$ is at least $4$, so the first radical is at least $2$, while the other is nonnegative. Therefore their sum is at least $2$ and cannot be $1$.

Isolating the first radical, $\sqrt{x+4}=1-\sqrt x$, and squaring without checking the sign leads to

$$
\begin{aligned}
x+4&=1-2\sqrt x+x\\[6pt]
2\sqrt x&=-3\\[6pt]
\sqrt x&=-\frac32.
\end{aligned}
$$

Squaring again would produce candidate $\dfrac94$, but the principal root cannot be negative. Stopping at the first impossible condition avoids the extraneous candidate.
:::

:::esempio{titolo="A difference of radicals and a boundary value"}
In $\sqrt{x+4}-\sqrt x=k$ the letter $k$ is a **parameter**, that is, a fixed but unspecified number. We seek solutions for $k>0$, with domain $x\ge0$. After isolating the first root, $\sqrt{x+4}=k+\sqrt x$, the right side is positive on the domain, because $k>0$ and $\sqrt x\ge0$. Squaring gives

$$
\begin{aligned}
x+4&=k^2+2k\sqrt x+x\\[6pt]
4&=k^2+2k\sqrt x\\[6pt]
\sqrt x&=\frac{4-k^2}{2k}.
\end{aligned}
$$

Division by $2k$ is valid because $k>0$, and the result equals $\sqrt x$, so it must be nonnegative. Since the denominator $2k$ is positive, we need $4-k^2\ge0$, that is, $k^2\le4$. At $k=2$ we have $\sqrt x=0$ and the only solution is $x=0$. At $k=1$ we have $\sqrt x=\dfrac32$ and $x=\dfrac94$. Substituting gives $\sqrt{\dfrac{25}{4}}-\sqrt{\dfrac94}=\dfrac52-\dfrac32=1$. For $k>2$ the value $\dfrac{4-k^2}{2k}$ is negative, so the sign condition is not satisfied and there are no solutions. For this reason there is no second squaring.
:::

## Absolute values and case splitting

::::teorema{#assoluto titolo="The sign determines which branch to use"}
The **argument** of an absolute value is the expression inside it: in $|2x-1|$ the argument is $2x-1$. For $|A(x)|=B(x)$ to hold we need $B(x)\ge0$, since an absolute value is never negative. Then the domain is split into two **branches**, that is, two parts on which the argument has constant sign:

- where $A(x)\ge0$ we have $|A(x)|=A(x)$ and we solve $A(x)=B(x)$;
- where $A(x)<0$ we have $|A(x)|=-A(x)$ and we solve $-A(x)=B(x)$.

Each solution must belong to the interval for its branch.
:::dimostrazione
This follows from the definition of absolute value, which returns $A(x)$ in the first case and its opposite in the second. The two cases cover every point in the domain. If $A(x)=0$, both expressions equal zero, so that point solves the equation only when $B(x)=0$ as well.
:::
::::

:::esempio{titolo="Check which branch contains each solution"}
The equation $|2x-1|=x+2$ requires $x+2\ge0$, that is, $x\ge-2$. The argument $2x-1$ is zero at $x=\dfrac12$, which separates the two branches.

- On the branch $x\ge\dfrac12$ the argument is nonnegative, and we solve $2x-1=x+2$, which gives $x=3$.
- On the branch $-2\le x<\dfrac12$ the argument is negative, so $|2x-1|=1-2x$. We solve $1-2x=x+2$, that is, $-3x=1$, and find $x=-\dfrac13$.

Both solutions belong to their own intervals, because $3\ge\dfrac12$ and $-2\le-\dfrac13<\dfrac12$. The corresponding **y-coordinates** (vertical coordinates), $5$ and $\dfrac53$, are the common values of the two sides at the intersections of the graphs; the solutions are the x-coordinates. The point $\left(\dfrac12;0\right)$ of the graph is where $y=|2x-1|$ changes branch.

::grafico{f="abs(2*x-1);x+2" legenda="y=|2x-1|;y=x+2" xmin=-2.5 xmax=4.15 ymin=-0.7 ymax=7.25 punti="-0.333333333,1.666666667,pieno;3,5,pieno;0.5,0,pieno" titolo="Each solution lies on the branch used to find it"}
:::

:::osservazione{titolo="Distance and the solution set"}
On the number line, $|x-2|$ is the distance between $x$ and $2$. The equation $|x-2|=3$ therefore asks for the x-coordinates at distance $3$ from $2$, namely $2-3=-1$ and $2+3=5$. The two values are symmetric about $2$, which is their **midpoint** $\dfrac{-1+5}{2}$. For the same reason, since $|x+1|=|x-(-1)|$, the equation $|x-3|=|x+1|$ asks for the point equidistant from $3$ and $-1$, that is, their midpoint $x=\dfrac{3+(-1)}{2}=1$. Replacing $3$ with zero leaves only $x=2$, and with a negative number there are no solutions.

With a variable right side the number of solutions can change again. In $|x-1|=x-1$, every $x\ge1$ satisfies the equality, because the argument is already nonnegative, while for $x<1$ the right side is negative. The solution set is therefore the interval $[1,+\infty)$, made up of all numbers greater than or equal to $1$. The square bracket indicates that $1$ is included.

If the unknown appears only in $|x|$, we set $t=|x|$, with $t\ge0$. In $\bigl||x|-2\bigr|=1$ we get $|t-2|=1$, that is, $t=1$ or $t=3$, and every $t>0$ gives two opposite values, so $x=\pm1$ and $x=\pm3$.
:::

:::esempio{titolo="Two absolute values allow another step"}
In $|x-5|=|2x-1|$, both sides are nonnegative. Equating their squares is reversible and gives $(x-5)^2=(2x-1)^2$. We move everything to the left side and factor the difference of squares with $a=x-5$ and $b=2x-1$:

$$
\begin{aligned}
(x-5)^2-(2x-1)^2&=0\\[6pt]
\bigl[(x-5)-(2x-1)\bigr]\bigl[(x-5)+(2x-1)\bigr]&=0\\[6pt]
(-x-4)(3x-6)&=0.
\end{aligned}
$$

The candidates are $-4$ and $2$. At the first value both arguments equal $-9$. At the second they are $-3$ and $3$. Two absolute values are therefore equal when their arguments agree or are opposites.
:::

## Systems with a linear and a nonlinear relation

::::teorema{#sistemi titolo="Substituting and reconstructing the pair"}
A **system** is a group of equations that must hold at the same time. A solution is an **ordered pair** $(x;y)$, in which the order matters: $(1;2)$ and $(2;1)$ are different pairs. The system is **nonlinear** when at least one equation is not of first degree, such as $y=x^2$. The notation $y=g(x)$ means that $y$ is given by an expression in $x$, such as $y=2x+3$, and $F(x,y)=0$ denotes another equation in $x$ and $y$.

In a system with $y=g(x)$ and $F(x,y)=0$, we can solve $F(x,g(x))=0$ where the expressions are defined. This is the **substitution method**: $g(x)$ is written in place of $y$, and only the unknown $x$ remains. Each allowed value of $x$ gives the pair $(x;g(x))$.
:::dimostrazione
A pair solving the system satisfies the first equation, so $y=g(x)$, and replacing $y$ with $g(x)$ in the second preserves equality. Conversely, if the equation after substitution holds and the reconstructed pair is allowed, then that pair satisfies both equations of the system. Therefore each pair uses the value $y=g(x)$ associated with its $x$.
:::
::::

:::esempio{titolo="The line meets the parabola at two points"}
The graph of $y=x^2$ is a **parabola**, and that of $y=2x+3$ is a line. At the intersections the two y-coordinates are equal, so $x^2=2x+3$, that is, $x^2-2x-3=0$. Factoring gives $(x-3)(x+1)=0$.

With $x=-1$ the line gives $y=2\cdot(-1)+3=1$. With $x=3$ it gives $y=2\cdot3+3=9$. The solutions are $(-1;1)$ and $(3;9)$. Crossing the two y-coordinates would give pairs that fail the system. The check computes the y-coordinate using both relations.

::grafico{f="x^2;2*x+3" legenda="y=x^2;y=2x+3" xmin=-2 xmax=3.8 ymin=-1.4 ymax=11.8 punti="-1,1,pieno;3,9,pieno" segmenti="-1,0,-1,1;3,0,3,9" titolo="Each intersection has the vertical coordinate required by both curves"}
:::

:::esempio{titolo="From no intersection to tangency"}
With $y=x^2$ and $y=2x+m$, where $m$ is a parameter, equating the y-coordinates gives $x^2-2x=m$. We **complete the square**, that is, we add $1$ to both sides, so that the left side becomes $x^2-2x+1=(x-1)^2$:

$$
(x-1)^2=m+1.
$$

- If $m<-1$, the right side is negative, so it cannot equal a real square, and there are no intersections.
- If $m=-1$, then $(x-1)^2=0$, so $x=1$ and the only pair is $(1;1)$. The line is **tangent** to the parabola, that is, it touches it at a single point without crossing it.
- If $m>-1$, then $x-1=\pm\sqrt{m+1}$, and the two signs give two distinct x-coordinates and hence two pairs.

In the graph the line $y=2x-1$, with $m=-1$, touches the parabola at $(1;1)$, while $y=2x-2$, with $m=-2$, remains below it. If the line were vertical, as in $x=2$, we would instead substitute the value of $x$ into the parabola, obtaining $(2;4)$.

::grafico{f="x^2;2*x-1;2*x-2" legenda="y=x^2;y=2x-1;y=2x-2" xmin=-1.25 xmax=3.15 ymin=-2.65 ymax=6.8 punti="1,1,pieno" titolo="One line is tangent, while the other remains below the parabola"}
:::

## Symmetric systems

::::teorema{#somma-prodotto titolo="Recovering the unknowns from sum and product"}
A system is **symmetric** when swapping $x$ and $y$ leaves the equations unchanged, as in the system with sum $s$ and product $p$:

$$
\begin{cases}
x+y=s,\\
xy=p.
\end{cases}
$$

The unknowns are the roots of the auxiliary equation $t^2-st+p=0$. Its **discriminant** is $\Delta=s^2-4p$ (the Greek letter “delta”), the quantity under the root in the quadratic formula.

- Two distinct real roots $t_1$ and $t_2$ give two ordered pairs, $(t_1;t_2)$ and $(t_2;t_1)$.
- A double root $t_1$ gives a single pair, $(t_1;t_1)$.
- When the roots are not real, that is, when $\Delta<0$, there are no real pairs.
:::dimostrazione
For each pair satisfying the system, expanding the product gives

$$
(t-x)(t-y)=t^2-(x+y)t+xy=t^2-st+p,
$$

so $x$ and $y$ are the roots of $t^2-st+p$. Conversely, the two real roots of the polynomial have sum $s$ and product $p$ by **Viète’s relations**, which link the sum and product of the roots to the coefficients. Swapping them leaves the equations true. The swap gives a second pair only when the roots are distinct.
:::
::::

:::esempio{titolo="Recovering the product from a sum of squares"}
Suppose $x+y=5$ and $x^2+y^2=13$. Expanding the square of the sum and substituting the data gives

$$
\begin{aligned}
(x+y)^2&=x^2+y^2+2xy\\[6pt]
25&=13+2xy\\[6pt]
xy&=6.
\end{aligned}
$$

The equation $t^2-5t+6=(t-2)(t-3)=0$ gives $2$ and $3$. The system admits $(2;3)$ and $(3;2)$, with sum $5$ and sum of squares $4+9=13$. Since $(x+y)^3=x^3+y^3+3xy(x+y)$, we also have $x^3+y^3=(x+y)^3-3xy(x+y)=125-3\cdot6\cdot5=35$. In the graph the first condition is the line $y=5-x$. The second is the **circle** with centre at the origin and radius $\sqrt{13}$ (the points at distance $\sqrt{13}$ from the origin), and the points $P$ and $Q$ are the two solutions. Adding $x\le y$ leaves only $(2;3)$.

::grafico{f="5-x" curve="sqrt(13)*cos(t),sqrt(13)*sin(t),0,6.283185307" legenda="y=5-x;x^2+y^2=13" xmin=-3.95 xmax=5.2 ymin=-3.95 ymax=5.2 uguale=1 punti="2,3,pieno,P;3,2,pieno,Q" titolo="Swapping the coordinates leaves both relations true"}
:::

:::osservazione{titolo="A constraint we can check before using the formula"}
For every pair of real numbers

$$
(x+y)^2-4xy=x^2+2xy+y^2-4xy=x^2-2xy+y^2=(x-y)^2.
$$

Since $(x-y)^2\ge0$, it follows that $s^2-4p\ge0$, that is, $p\le\dfrac{s^2}{4}$. With sum $2$ the greatest product is $\dfrac{2^2}{4}=1$, so requiring sum $2$ and product $3$ violates the condition. With sum $2$ and product $1$ we have $(x-y)^2=4-4=0$, the difference must be zero, and the only pair is $(1;1)$. Since $s^2-4p$ is the discriminant $\Delta$, the condition is the same as $\Delta\ge0$.
:::

:::esempio{titolo="A circle with too small a radius"}
In the system $x+y=4$, $x^2+y^2=q$, we use the equality $(x+y)^2+(x-y)^2=2(x^2+y^2)$, obtained by adding the expansions of the squares. It follows that

$$
(x-y)^2=2(x^2+y^2)-(x+y)^2=2q-16.
$$

Thus $2q-16\ge0$, that is, $q\ge8$, is necessary. At $q=8$ the unknowns are equal and the only pair is $(2;2)$. For $q>8$ the possible differences are $\sqrt{2q-16}$ and $-\sqrt{2q-16}$, opposite and distinct. Each, together with sum $4$, determines a pair. For example, at $q=10$ the differences are $2$ and $-2$, and together with $x+y=4$ they give $(3;1)$ and $(1;3)$.

The circle $x^2+y^2=q$ has radius $\sqrt q$. When $0\le q<8$, the circle is too small to reach the line. Increasing the radius to the boundary value $\sqrt8$ gives tangency.
:::

## Domains and applied constraints

:::esempio{#dominio titolo="Cancelling a factor without restoring its zero"}
The **condition of existence** of a fraction is that the denominator is nonzero. In $\dfrac{x(x-2)(x+2)}{x-2}=0$, the denominator requires $x\ne2$. For $x\ne2$ the factor $x-2$ is shared by numerator and denominator and cancels, so on the domain the equation becomes $x(x+2)=0$.

The remaining solutions are $x=0$ and $x=-2$, which make the numerator zero while leaving the denominator nonzero. The simplified expression would equal $2\cdot4=8$ at $x=2$, but the graph of the fraction omits that point, marked by an open circle. The condition of existence must be kept even when the expression changes form.

::grafico{f="x*(x+2)" xmin=-3.3 xmax=2.9 ymin=-2 ymax=10 punti="-2,0,pieno;0,0,pieno;2,8,vuoto" titolo="The graph has two allowed zeroes and a missing point at (2; 8)"}
:::

:::esempio{titolo="The problem can prescribe an order"}
Two adjacent sides of a rectangle measure $x$ and $y$ centimetres. The measurements satisfy $x+y=7$ and $xy=12$. The auxiliary roots of $t^2-7t+12=(t-3)(t-4)$ are $3$ and $4$, both positive. The ordered pairs are $(3;4)$ and $(4;3)$.

If $x$ specifically denotes the shorter side, we need $x<y$ and keep only $(3;4)$. This choice preserves the area $12\,\mathrm{cm}^2$ and perimeter $14\,\mathrm{cm}$. The constraint comes from the description of the measurements, while the two equations alone are symmetric.
:::

:::esempio{titolo="A radical also represented in the denominator"}
For $\sqrt{x-4}=\dfrac1{x-4}$, the radicand requires $x\ge4$ and the denominator requires $x\ne4$. Together the two conditions give the domain $x>4$.

Let $u=\sqrt{x-4}$. Then $u>0$ and $x-4=u^2$, so the equation becomes $u=\dfrac1{u^2}$. Multiplying both sides by $u^2$ gives $u^3=1$, and the only real number with cube $1$ is $u=1$. From $\sqrt{x-4}=1$ we get $x-4=1$, that is, $x=5$. The condition $u>0$ makes multiplication by $u^2$ reversible, because $u^2$ is nonzero. At $x=5$ both original sides equal $1$.
:::
