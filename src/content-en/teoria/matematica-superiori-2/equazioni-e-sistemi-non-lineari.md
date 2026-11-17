---
titolo: Nonlinear Equations and Systems
sommario: Factoring, biquadratic equations, equations with radicals and absolute values, quadratic systems, and sum and product.
---

## The Zero-Product Property

:::teorema{#fattorizzazione titolo="Higher-Degree Equations"}
If a product of real numbers is zero, at least one factor is zero. This property allows some equations of degree greater than two to be solved by factoring.

For $x^3-9x=0$, factor out $x$ and factor the difference of squares. This gives $x(x-3)(x+3)=0$ and therefore $x=-3,0,3$.

Expanding the product checks a factorization. Dividing by a factor containing the unknown requires considering separately when that factor is zero. Otherwise, roots can be lost.
:::

## Biquadratic Equations

:::definizione{#biquadratiche titolo="Substituting a Square"}
A **biquadratic equation** has the form $ax^4+bx^2+c=0$ with $a\ne0$. Setting $t=x^2$ gives $at^2+bt+c=0$, subject to $t\ge0$.

Each root $t>0$ gives two roots $x=\pm\sqrt t$. The root $t=0$ gives only $x=0$. Roots $t<0$ give no real solutions.

For $x^4-5x^2+4=0$, we have $t^2-5t+4=0$, so $t=1,4$ and $x=\pm1,\pm2$. For $x^4+x^2-2=0$, the roots in $t$ are $1$ and $-2$. Only $x=\pm1$ remains.
:::

:::esempio{titolo="Zero in the Substitution"}
The equation $x^4+3x^2=0$ becomes $t(t+3)=0$ after setting $t=x^2$. The roots in $t$ are $0$ and $-3$. The second is negative, so it is not the square of a real number. The first gives only $x=0$. The number of solutions for $x$ depends on the signs of the roots in $t$.
:::

## Equations with Radicals

:::teorema{#irrazionali titolo="Conditions Before Squaring"}
The equation $\sqrt{A(x)}=B(x)$ is equivalent to the system
$$
\begin{cases}A(x)\ge0\\B(x)\ge0\\A(x)=B(x)^2.\end{cases}
$$
The first condition gives the domain. The second ensures the side equal to the square root has the right sign. The third states that the squares of the two sides are equal.

The equation $\sqrt{x+6}=x$ requires $x\ge0$. Squaring gives $x^2-x-6=0$, with candidates $3$ and $-2$. Only $3$ meets the condition and satisfies $\sqrt9=3$.

Squaring can introduce extraneous solutions if the sign condition is dropped. For example, $\sqrt4=-2$ is false even though the squares of both sides are equal.
:::

## Equations with More Than One Radical

:::teorema{#due-radicali titolo="Isolation and Verification"}
When there are two radicals, isolate one and check the sign on the other side before squaring. If a radical remains, repeat the process.

For $\sqrt{x+1}+\sqrt x=3$, the domain is $x\ge0$. Isolating the first radical gives $\sqrt{x+1}=3-\sqrt x$. Its right side must be nonnegative, which also requires $x\le9$. Equating the squares gives $1=9-6\sqrt x$, followed by $\sqrt x=\dfrac43$ and $x=\dfrac{16}{9}$. Substitution gives the radical values $\dfrac53$ and $\dfrac43$, whose sum is $3$.

Check the result in the original equation. Solving the last transformed equation alone does not check all the conditions that arose in the intermediate steps.
:::

:::esempio{titolo="A Radical Remains After Squaring"}
To solve $\sqrt{x+4}=\sqrt x+1$, start with $x\ge0$. The right side is positive throughout the domain, so the squares can be equated.

$$
\begin{aligned}
x+4&=x+2\sqrt x+1\\[6pt]
2\sqrt x&=3\\[6pt]
x&=\frac94.
\end{aligned}
$$

At the candidate $x=\dfrac94$, the first radical equals $\dfrac52$ and the right side equals $\dfrac32+1=\dfrac52$. Therefore the equation is satisfied.
:::

## Absolute Value

:::teorema{#assoluto titolo="Distance and Cases"}
For $c>0$, the equation $|A(x)|=c$ is equivalent to $A(x)=c$ or $A(x)=-c$. For $c=0$, it is equivalent to $A(x)=0$. For $c<0$, it has no solution.

For $|x-2|=3$, the solutions are $x=5$ and $x=-1$. Both are at distance $3$ from $2$ on the number line.

If the right side depends on $x$, first require it to be nonnegative. For $|x-1|=x+1$, the condition is $x\ge-1$. Examining the cases $x\ge1$ and $x<1$ leaves only $x=0$.

::grafico{f="abs(x-2);3" punti="-1,3,pieno,A;5,3,pieno,B" xmin=-3 xmax=7 ymin=-1 ymax=7 titolo="The two solutions of $|x-2|=3$"}
:::

:::esempio{titolo="Absolute Value with a Variable Right Side"}
For $|2x-1|=x+2$, the condition $x+2\ge0$ requires $x\ge-2$. The branch $x\ge\dfrac12$ gives $2x-1=x+2$ and the solution $x=3$. The branch $-2\le x<\dfrac12$ gives $1-2x=x+2$ and the solution $x=-\dfrac13$. In both cases, the solution lies in the interval used to remove the absolute value.

::grafico{f="abs(2*x-1);x+2" legenda="y=|2x-1|;y=x+2" xmin=-2 xmax=4 ymin=-1 ymax=7 punti="-0.3333333333,1.6666666667,pieno,A;3,5,pieno,B" titolo="Each intersection lies on one branch of the absolute-value graph"}
:::

## Quadratic Systems

:::teorema{#sistemi titolo="Substituting a Linear Relation"}
A system with one linear and one quadratic equation can be solved by isolating an unknown in the linear equation and substituting it into the other equation.

For $\begin{cases}x+y=5\\x^2+y^2=13\end{cases}$, set $y=5-x$. This gives $x^2+(5-x)^2=13$ and then $x^2-5x+6=0$. The solution pairs are $(2;3)$ and $(3;2)$.

Each root $x$ is paired with the value $y=5-x$. For example, $x=2$ forces $y=3$, and the pair $(2;2)$ violates the first equation. On a graph, the pairs are the intersection points of the curves.

::grafico{f="5-x" curve="sqrt(13)*cos(t),sqrt(13)*sin(t),0,6.283185307" legenda="y=5-x;x^2+y^2=13" punti="2,3,pieno,P;3,2,pieno,Q" xmin=0 xmax=5 ymin=0 ymax=5 uguale=1 titolo="The pairs $(2;3)$ and $(3;2)$ solve the system"}
:::

:::esempio{titolo="One Solution Pair at Tangency"}
In the system $\begin{cases}x+y=4\\x^2+y^2=8\end{cases}$, write $y=4-x$. The second equation becomes $x^2+(4-x)^2=8$, equivalent to $2(x-2)^2=0$. This gives $x=2$ and then $y=2$. The line and circle have only one intersection because the line is tangent to the circle. The two values that a quadratic with a positive discriminant would have coincide here at the double root.
:::

## Sum and Product

:::teorema{#somma-prodotto titolo="Symmetric Systems"}
For $\begin{cases}x+y=s\\xy=p\end{cases}$, the unknowns are the roots of $t^2-st+p=0$. If those roots are distinct, the system has two ordered pairs obtained by swapping the coordinates.

For $s=7$ and $p=10$, the roots are $2$ and $5$. The solutions are $(2;5)$ and $(5;2)$. If the problem asks for two numbers without specifying an order, give just the pair of values.

The identity $x^2+y^2=(x+y)^2-2xy$ relates the sum of squares to the product. For sum $7$ and product $10$, the sum of squares is $49-20=29$.
:::

## Domain and Word Problems

:::osservazione{#dominio titolo="Fractions and Constraints"}
Factoring and substitution preserve the conditions of the original problem. For $\dfrac{x(x-2)(x+2)}{x-2}=0$, exclude $x=2$, leaving $x=0,-2$.

If the unknowns are the sides of a rectangle, they must be positive. For a triangle, each side must also be shorter than the sum of the other two. Roots that violate these constraints cannot represent the figure in the problem.

A system with no solution may have a geometric explanation. If the sum of two real numbers is $2$, their product cannot exceed $1$, because $(x-y)^2=(x+y)^2-4xy\ge0$.
:::
