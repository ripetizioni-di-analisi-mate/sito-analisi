---
titolo: "Nonlinear equations and systems"
sommario: "Factoring, biquadratics, equations with radicals or absolute values, systems, and checking solutions."
---

## Factoring an equation

::::teorema{#fattorizzazione titolo="The zero-product property"}
If two or more factors are defined in the domain under consideration, their product is zero exactly when at least one factor is zero.
:::dimostrazione
If a factor equals zero, the product equals zero. If every factor is nonzero, we can divide by their product. Assuming that the product is zero would then give $1=0$. So at least one factor must vanish.
:::
::::

:::esempio{titolo="Each factor gives a case"}
In $x^3-9x=0$, factor out $x$ and use the difference of squares to get $x(x-3)(x+3)=0$. Each factor gives a root, so the solution set is $\{-3,0,3\}$. Dividing by $x$ at the start would give $x^2=9$ and lose the root zero. We can divide after checking $x=0$ separately.

::grafico{f="x^3-9*x" xmin=-3.8 xmax=3.8 ymin=-14 ymax=14 punti="-3,0,pieno;0,0,pieno;3,0,pieno" titolo="The three linear factors identify three intersections with the axis"}
:::

:::osservazione{titolo="Distinct zeroes and multiplicity"}
In $x^2(x-2)^3=0$, there are two distinct roots. Zero occurs twice as a root and $2$ occurs three times. Near zero, $x^2$ is positive on both sides while $(x-2)^3$ is negative. The graph touches the axis and stays below it. Across $2$, the cubed factor changes sign while $x^2$ stays positive, and the graph crosses the axis. Counting factors distinguishes multiplicity from the number of roots.
:::

## Biquadratic equations

::::teorema{#biquadratiche titolo="From the unknown to its square and back"}
For $a\ne0$, solve $ax^4+bx^2+c=0$ with $t=x^2$. Solve the equation $at^2+bt+c=0$, keep the roots $t\ge0$, and return to $x$.
:::dimostrazione
Every real $x$ gives a nonnegative $t$ and turns $x^4$ into $t^2$. Conversely, every solution $t>0$ gives $x=-\sqrt t$ and $x=\sqrt t$, both with square $t$. The value $t=0$ only gives $x=0$. No $t<0$ is the square of a real number. These cases exhaust the correspondence.
:::
::::

:::esempio{titolo="Four roots, or only three"}
In $x^4-5x^2+4=0$, the two values of $t$ are $1$ and $4$. Since they are distinct and positive, the roots are $x=\pm1$ and $x=\pm2$. In $x^4-4x^2=0$, instead, the equation $t(t-4)=0$ gives $t=0$ and $t=4$. This gives $-2$, $0$, and $2$. In the second example, the factor $x^2$ makes the graph touch the axis at zero without switching sign.

::grafico{f="x^4-4*x^2" xmin=-2.65 xmax=2.65 ymin=-5 ymax=10 punti="-2,0,pieno;0,0,pieno;2,0,pieno" titolo="t = 0 gives one horizontal coordinate, while t = 4 gives two"}
:::

:::esempio{titolo="An auxiliary solution that gives no value of x"}
For $x^4+x^2-2=0$, we obtain $(t+2)(t-1)=0$. The value $-2$ must be rejected before taking a square root, since a square cannot be negative. From $t=1$ we get $-1$ and $1$. If the auxiliary equation were $(t-3)^2=0$, its only value $t=3$ would still give two distinct real numbers, $-\sqrt3$ and $\sqrt3$. The distinction between the values of $t$ and those of $x$ also matters when there is a double root.
:::

:::osservazione{titolo="Recognising the case of three roots in advance"}
A biquadratic has exactly three distinct real roots when the auxiliary equation has zero and one strictly positive root. Zero is a root of $at^2+bt+c=0$ exactly when $c=0$. With that constant term, factor out $t$ to obtain the other root $-\dfrac ba$. The criterion is therefore $c=0$ and $-\dfrac ba>0$. If the other root is negative or coincides with zero, only $x=0$ remains. A single positive value of $t$ never gives just one real coordinate.
:::

## Equations with one square root

::::teorema{#irrazionali titolo="When squaring is reversible"}
Where $A(x)$ and $B(x)$ are defined, the equation $\sqrt{A(x)}=B(x)$ is equivalent to

$$
\begin{cases}
A(x)\ge0,\\
B(x)\ge0,\\
A(x)=B(x)^2.
\end{cases}
$$

:::dimostrazione
A real square root exists for a nonnegative radicand, and its value is nonnegative. Equal sides have equal squares. Conversely, if $A(x)=B(x)^2$ and $B(x)\ge0$, then $B(x)$ is the nonnegative number with square $A(x)$, so it equals the principal root.
:::
::::

:::esempio{titolo="A candidate has the wrong sign"}
In $\sqrt{x+6}=x$, the radicand requires $x\ge-6$ and the right side requires $x\ge0$. Squaring gives $(x-3)(x+2)=0$. Candidate $-2$ satisfies the domain of the radical, but $\sqrt4=2$, which differs from $-2$. Candidate $3$ checks as $\sqrt9=3$. The two original curves have just one intersection.

::grafico{f="sqrt(x+6);x" legenda="y=\sqrt{x+6};y=x" xmin=-6.7 xmax=5.5 ymin=-3 ymax=5.7 punti="3,3,pieno,P" titolo="Only x = 3 makes the original sides equal"}
:::

:::osservazione{titolo="The same square with different signs"}
The equation $\sqrt{x^2}=x$ has domain $\mathbb R$. Equating just the squares gives $x^2=x^2$. The original equation still requires $x\ge0$, since the left side is $|x|$. This example shows that a transformed equation can even be an identity while the original equality holds only on part of the domain.
:::

:::osservazione{titolo="Roots of odd index"}
The real cube root is the inverse of cubing on the whole number line. It can therefore be negative, and cubing preserves equivalence without requiring a particular sign on either side. For example, $\sqrt[3]{x-2}=-3$ is equivalent to $x-2=-27$, so $x=-25$. The same principle applies when the right side contains the unknown. From $\sqrt[3]x=-x$ we get $x=-x^3$, or $x(x^2+1)=0$. The factor $x^2+1$ is always positive, so the only solution is $0$, which also satisfies the original equation.
:::

## Equations with two radicals

:::esempio{#due-radicali titolo="Isolate a radical and retain the sign condition"}
The equation $\sqrt{x+1}+\sqrt x=3$ requires $x\ge0$. Isolate the first radical to obtain $\sqrt{x+1}=3-\sqrt x$. The right side is nonnegative only for $x\le9$. On the domain $0\le x\le9$, squaring is reversible.

$$
\begin{aligned}
x+1&=9-6\sqrt x+x\\[6pt]
\sqrt x&=\frac43\\[6pt]
x&=\frac{16}{9}.
\end{aligned}
$$

The value belongs to the allowed interval. The original radicals are $\dfrac53$ and $\dfrac43$, with sum $3$. Expanding the square of the binomial retains the cross term, which is exactly where we recover $\sqrt x$.

::grafico{f="sqrt(x+1);3-sqrt(x)" legenda="y=\sqrt{x+1};y=3-\sqrt x" xmin=-0.7 xmax=10.6 ymin=-0.6 ymax=4.3 punti="1.777777778,1.666666667,pieno,P;9,0,pieno" segmenti="9,0,9,3.4" titolo="The side containing 3 − √x must be on or above the axis"}
:::

:::attenzione{titolo="Checking the sign can finish the problem"}
In $\sqrt{x+4}+\sqrt x=1$, the domain is $x\ge0$. The first radical is at least $2$, and the other is nonnegative, so their sum cannot be $1$. Isolating the first radical and squaring without checking the sign gives $\sqrt x=-\dfrac32$. Squaring again would produce candidate $\dfrac94$, but the principal root cannot be negative. Stopping at the first impossible condition avoids the extraneous candidate.
:::

:::esempio{titolo="A difference of radicals and a boundary value"}
In $\sqrt{x+4}-\sqrt x=k$, seek solutions for $k>0$. After isolating the first root, the right side $k+\sqrt x$ is positive on the domain. Squaring gives $4=k^2+2k\sqrt x$. Division by $2k$ is valid and must give a nonnegative result. Thus we need $k^2\le4$. At $k=2$, the only solution is $x=0$. At $k=1$, we get $\sqrt x=\dfrac32$ and $x=\dfrac94$. Substituting gives $\dfrac52-\dfrac32=1$. For $k>2$, there is no reason to square again, because the sign condition already fails.
:::

## Absolute values and case splitting

::::teorema{#assoluto titolo="The sign determines which branch to use"}
For $|A(x)|=B(x)$ to hold we need $B(x)\ge0$. Where $A(x)\ge0$, solve $A(x)=B(x)$, and elsewhere solve $-A(x)=B(x)$. Each solution must belong to the interval for its branch.
:::dimostrazione
This follows from the definition of absolute value, which returns $A(x)$ in the first case and its opposite in the second. Those cases cover every point in the domain. If $A(x)=0$, both expressions agree. That point solves the equation only when $B(x)=0$ as well.
:::
::::

:::esempio{titolo="Check which branch contains each solution"}
The equation $|2x-1|=x+2$ requires $x\ge-2$. On the branch $x\ge\dfrac12$, solve $2x-1=x+2$ to get $x=3$. On the branch $-2\le x<\dfrac12$, solve $1-2x=x+2$ to get $x=-\dfrac13$. Both solutions belong to their own intervals. The corresponding vertical coordinates, $5$ and $\dfrac53$, are the common values of the two sides. The solutions are the values of $x$.

::grafico{f="abs(2*x-1);x+2" legenda="y=|2x-1|;y=x+2" xmin=-2.5 xmax=4.15 ymin=-0.7 ymax=7.25 punti="-0.333333333,1.666666667,pieno;3,5,pieno;0.5,0,pieno" titolo="Each solution lies on the branch used to find it"}
:::

:::osservazione{titolo="Distance and the solution set"}
The equation $|x-2|=3$ asks for the horizontal coordinates at distance $3$ from $2$, giving $-1$ and $5$. Replacing $3$ with zero leaves only $x=2$. With a variable right side the number of solutions can change again. In $|x-1|=x-1$, every $x\ge1$ satisfies the identity, and when $x<1$ the right side is negative. The solution set is therefore $[1,+\infty)$.
:::

:::esempio{titolo="Two absolute values allow another step"}
In $|x-5|=|2x-1|$, both sides are nonnegative. Equating their squares is therefore reversible and gives $(x-5)^2=(2x-1)^2$. Factoring the difference of squares gives $(-x-4)(3x-6)=0$. The candidates are $-4$ and $2$. At the first value both arguments equal $-9$. At the second they are $-3$ and $3$. Thus two absolute values can be equal because their arguments agree or because they are opposites.
:::

## Systems with a linear and a nonlinear relation

::::teorema{#sistemi titolo="Substituting and reconstructing the pair"}
In a system with $y=g(x)$ and $F(x,y)=0$, solve $F(x,g(x))=0$ where the expressions are defined. Each allowed value of $x$ gives the pair $(x,g(x))$.
:::dimostrazione
A pair solving the system satisfies the first equation, so replacing $y$ with $g(x)$ in the second preserves equality. Conversely, if the equation after substitution holds and the reconstructed pair is allowed, then that pair satisfies both equations. Use the value of $y$ associated with each $x$.
:::
::::

:::esempio{titolo="The line meets the parabola at two points"}
For $y=x^2$ and $y=2x+3$, equating the vertical coordinates gives $x^2-2x-3=(x-3)(x+1)=0$. With $x=-1$ the line gives $y=1$. With $x=3$ it gives $y=9$. The solutions are $(-1,1)$ and $(3,9)$. Crossing the two vertical coordinates would give pairs that fail the system. The check computes the vertical coordinate using both relations.

::grafico{f="x^2;2*x+3" legenda="y=x^2;y=2x+3" xmin=-2 xmax=3.8 ymin=-1.4 ymax=11.8 punti="-1,1,pieno;3,9,pieno" segmenti="-1,0,-1,1;3,0,3,9" titolo="Each intersection has the vertical coordinate required by both curves"}
:::

:::esempio{titolo="From no intersection to tangency"}
With $y=x^2$ and $y=2x+m$, substitution gives $(x-1)^2=m+1$. If $m<-1$, the right side cannot equal a real square. If $m=-1$, the only pair is $(1,1)$, and the line is tangent. If $m>-1$, the two signs of the square root give two horizontal coordinates and hence two pairs. If the line were vertical, as in $x=2$, we would instead substitute the value of $x$ into the parabola, obtaining $(2,4)$.

::grafico{f="x^2;2*x-1;2*x-2" legenda="y=x^2;y=2x-1;y=2x-2" xmin=-1.25 xmax=3.15 ymin=-2.65 ymax=6.8 punti="1,1,pieno" titolo="One line is tangent, while the other remains below the parabola"}
:::

## Symmetric systems

::::teorema{#somma-prodotto titolo="Recovering the unknowns from sum and product"}
In the system $x+y=s$, $xy=p$, the unknowns are the roots of $t^2-st+p=0$. Two distinct real roots give two ordered pairs. A double root gives one. When the roots are not real, there are no real pairs.
:::dimostrazione
For each pair satisfying the system, $(t-x)(t-y)=t^2-(x+y)t+xy=t^2-st+p$. Conversely, the two real roots of the polynomial have sum $s$ and product $p$ by Viète’s relations. Swapping them leaves the equations true. The swap gives a second pair only when the roots are distinct.
:::
::::

:::esempio{titolo="Recovering the product from a sum of squares"}
Suppose $x+y=5$ and $x^2+y^2=13$. Expanding the square of the sum gives $25=13+2xy$, so $xy=6$. The equation $t^2-5t+6=0$ gives $2$ and $3$. The system admits $(2,3)$ and $(3,2)$, with sum $5$ and sum of squares $4+9=13$. In the graph the first condition is a line and the second is a circle. Adding $x\le y$ leaves only $(2,3)$.

::grafico{f="5-x" curve="sqrt(13)*cos(t),sqrt(13)*sin(t),0,6.283185307" legenda="y=5-x;x^2+y^2=13" xmin=-3.95 xmax=5.2 ymin=-3.95 ymax=5.2 uguale=1 punti="2,3,pieno,P;3,2,pieno,Q" titolo="Swapping the coordinates leaves both relations true"}
:::

:::osservazione{titolo="A constraint we can check before using the formula"}
From $(x-y)^2=(x+y)^2-4xy\ge0$, we obtain $p\le\dfrac{s^2}{4}$. Requiring sum $2$ and product $3$ violates this condition, since the greatest product is $1$. With sum $2$ and product $1$, the difference must be zero, and the only pair is $(1,1)$. This condition is the same as checking the sign of the discriminant of the auxiliary equation.
:::

:::esempio{titolo="A circle with too small a radius"}
In the system $x+y=4$, $x^2+y^2=q$, we have $(x-y)^2=2q-16$. Thus $q\ge8$ is necessary. At $q=8$ the unknowns are equal and the only pair is $(2,2)$. For $q>8$ the possible differences are opposite and distinct. Each, together with sum $4$, determines a pair. For example, at $q=10$ the differences are $2$ and $-2$, giving $(3,1)$ and $(1,3)$. When $0\le q<8$, the circle is too small to reach the line. Increasing the radius to the boundary gives tangency.
:::

## Domains and applied constraints

:::esempio{#dominio titolo="Cancelling a factor without restoring its zero"}
In $\dfrac{x(x-2)(x+2)}{x-2}=0$, the denominator requires $x\ne2$. Cancelling the shared factor gives $x(x+2)=0$ on the domain. The remaining solutions are $x=0$ and $x=-2$, which make the numerator zero while leaving the denominator nonzero. The simplified expression would equal $8$ at $x=2$, but the graph of the fraction omits that point. Keep the domain restriction even when the expression changes form.

::grafico{f="x*(x+2)" xmin=-3.3 xmax=2.9 ymin=-2 ymax=10 punti="-2,0,pieno;0,0,pieno;2,8,vuoto" titolo="The graph has two allowed zeroes and a missing point at (2, 8)"}
:::

:::esempio{titolo="The problem can prescribe an order"}
Two adjacent sides of a rectangle measure $x$ and $y$ centimetres, with $x+y=7$ and $xy=12$. The auxiliary roots are $3$ and $4$, both positive. The ordered pairs are $(3,4)$ and $(4,3)$. If $x$ specifically denotes the shorter side, we need $x<y$ and keep only $(3,4)$. This choice preserves the area $12\,\mathrm{cm}^2$ and perimeter $14\,\mathrm{cm}$. The constraint comes from the description of the measurements, while the equations alone are symmetric.
:::

:::esempio{titolo="A radical also represented in the denominator"}
For $\sqrt{x-4}=\dfrac1{x-4}$, the domain requires $x>4$, combining the nonnegative radicand with the nonzero denominator. Let $u=\sqrt{x-4}$, so $u>0$ and $x-4=u^2$. The equation becomes $u=\dfrac1{u^2}$, hence $u^3=1$. This gives $u=1$ and $x=5$. The condition $u>0$ makes multiplication by $u^2$ reversible. At $x=5$ both original sides equal $1$.
:::
