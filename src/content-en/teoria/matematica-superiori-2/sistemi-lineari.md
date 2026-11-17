---
titolo: Linear Systems
sommario: Systems of two and three equations, substitution, comparison, elimination, Cramer's rule, classification with a parameter, and word problems.
---

## Equations That Must Hold Together

:::definizione{#soluzione titolo="Solution of a System"}
A **solution of a system** of two equations in $x$ and $y$ is an ordered pair that satisfies both equations. The first coordinate always replaces $x$, and the second always replaces $y$. The brace indicates that both conditions must hold at the same time.

In the system
$$
\begin{cases}x+y=7\\x-y=1\end{cases}
$$
the pair $(4;3)$ is a solution because $4+3=7$ and $4-3=1$. The pair $(3;4)$ satisfies only the first equation, so it does not solve the system.

A system is **uniquely solvable** if it has exactly one solution, **inconsistent** if it has none, and **underdetermined** here if it has infinitely many. In a system of two linear equations in two unknowns, each equation with at least one nonzero coefficient represents a line. Intersecting lines give one solution, distinct parallel lines give none, and coincident lines give infinitely many.
:::

## Substitution and Comparison

:::teorema{#sostituzione titolo="Reducing to One Unknown"}
In the **substitution method**, solve one equation for an unknown and substitute its expression into the other. The system becomes an equation in one unknown together with the relation used to find the other.

For $\begin{cases}x+y=7\\x-y=1\end{cases}$, the first equation gives $y=7-x$. The second gives $x-(7-x)=1$, then $2x=8$ and $x=4$. Finally, $y=7-4=3$.

In the **comparison method**, solve both equations for the same unknown and set the expressions equal. For $y=2x+1$ and $y=-x+7$, this gives $2x+1=-x+7$, so $x=2$ and $y=5$. The expressions are equal because both must give the same value of $y$.
:::

:::esempio{titolo="Substitution with a Fractional Solution"}
In the system

$$
\begin{cases}
3x-2y=1\\
x+y=4
\end{cases}
$$

the second equation gives $y=4-x$ without introducing denominators. The first equation becomes

$$
\begin{aligned}
3x-2(4-x)&=1\\[6pt]
3x-8+2x&=1\\[6pt]
5x&=9.
\end{aligned}
$$

The solution is $x=\dfrac95$ and $y=4-\dfrac95=\dfrac{11}5$. The substituted expression is multiplied by $-2$. Therefore the term $-x$ in $4-x$ contributes $+2x$.
:::

## Elimination

:::teorema{#riduzione titolo="Eliminating an Unknown"}
Adding a multiple of one equation to the other gives an equivalent system, with the same solutions. Choose the multiples so that the coefficients of one unknown become opposites.

In the system $\begin{cases}2x+3y=13\\3x-2y=0\end{cases}$, multiply the first equation by $2$ and the second by $3$. Adding gives $13x=26$, so $x=2$. The second equation gives $6-2y=0$, so $y=3$.

Multiplying a whole equation by a number also multiplies the constant term. For example, $x-y=2$ becomes $3x-3y=6$. This gives an equivalent equation because the multiplier is nonzero.
:::

:::esempio{titolo="Elimination by Subtraction"}
In the system

$$
\begin{cases}
3x+4y=10\\
5x+6y=16
\end{cases}
$$

both coefficients of $y$ become $12$ when the first equation is multiplied by $3$ and the second by $2$. The resulting equations are $9x+12y=30$ and $10x+12y=32$. Subtracting the first from the second gives $x=2$. Substituting into the original first equation gives $6+4y=10$, so $y=1$.

Keep one equation and replace the other with the difference. Adding the retained equation to the difference recovers the one that was replaced.
:::

## Determinants and Cramer's Rule

:::teorema{#cramer titolo="Cramer's Rule"}
For the system $\begin{cases}ax+by=c\\dx+ey=f\end{cases}$, define
$$
D=ae-bd,\qquad D_x=ce-bf,\qquad D_y=af-cd.
$$
If $D\ne0$, the unique solution is
$$
x=\frac{D_x}{D},\qquad y=\frac{D_y}{D}.
$$
For $\begin{cases}2x+y=5\\x-y=1\end{cases}$, the calculations give $D=-3$, $D_x=-6$, and $D_y=-3$, so $(x;y)=(2;1)$.

The three determinants can be written as $\begin{vmatrix}a&b\\d&e\end{vmatrix}$, $\begin{vmatrix}c&b\\f&e\end{vmatrix}$, and $\begin{vmatrix}a&c\\d&f\end{vmatrix}$. The determinant of a two-by-two matrix is the product of the entries on the main diagonal minus the product of the entries on the other diagonal.

The formula for $x$ follows by eliminating $y$. Subtract $b$ times the second equation from $e$ times the first. This gives $(ae-bd)x=ce-bf$, which can be divided by $D$ only when $D\ne0$.
:::

## Systems with No Solution or Infinitely Many

:::teorema{#classificazione titolo="Classifying the Solutions"}
If elimination gives $0=k$ with $k\ne0$, the system has no solution. If it gives $0=0$, the eliminated equation followed from the other. If one genuine linear equation in two unknowns remains, the system has infinitely many solutions.

For $\begin{cases}x+y=3\\2x+2y=8\end{cases}$, subtracting twice the first equation from the second gives $0=2$, so there are no solutions. Replacing $8$ with $6$ gives $0=0$, and the solutions are $(t;3-t)$ for every $t\in\mathbb R$.

When all the coefficients of an equation are zero, check the constant term directly. The equation $0x+0y=0$ adds no condition, while $0x+0y=1$ makes the whole system inconsistent. This avoids division by zero.

::grafico{f="3-x;4-x" xmin=-2 xmax=5 ymin=-2 ymax=7 titolo="The lines $y=3-x$ and $y=4-x$ are parallel and distinct"}
:::

## Fractions and Parameters

:::teorema{#parametri titolo="Domain Conditions and Separate Cases"}
To clear numerical denominators, multiply each equation by the least common multiple. If denominators contain variables, first state the conditions that keep them nonzero and check any candidate solutions.

A **parameter** is a letter whose value is held fixed while solving. For $\begin{cases}kx+y=1\\2x+y=3\end{cases}$, the determinant is $k-2$. If $k\ne2$, subtraction leads to $x=-\dfrac2{k-2}$ and then $y=1-kx$. If $k=2$, the two equations have the same left side and different constant terms, so the system has no solution.

Division by $k-2$ was used only when that factor was nonzero. Analyze the excluded case in the original equations.
:::

:::esempio{titolo="A Family of Solutions in the Singular Case"}
Consider

$$
\begin{cases}
kx+2y=6\\
3x+y=3.
\end{cases}
$$

Subtract twice the second equation from the first to obtain $(k-6)x=0$. When $k\ne6$, it follows that $x=0$, and the second equation gives $y=3$. When $k=6$, the first equation is twice the second. Every pair $(t;3-3t)$ with $t\in\mathbb R$ satisfies both. The determinant is zero in this case, and elimination shows that there are infinitely many solutions.
:::

## Three Unknowns and the Graphical Interpretation

:::teorema{#tre-incognite titolo="Elimination in Larger Systems"}
In a linear system with three unknowns, eliminate one variable from two pairs of equations. Solve the resulting system of two unknowns and recover the last unknown by substitution. All the original equations must be satisfied.

If $x+y+z=9$, $x+y=5$, and $x-y=1$, subtracting the first two equations gives $z=4$. The last two give $x=3$ and $y=2$. The complete check gives $3+2+4=9$, $3+2=5$, and $3-2=1$.

In the plane, the intersection of two lines shows the solution of a system of two equations.

::grafico{f="2*x+1;-x+7" punti="2,5,pieno,P" xmin=-2 xmax=6 ymin=-2 ymax=10 titolo="The lines meet at the solution $(2;5)$"}
:::

## Problems with Two Pieces of Information

:::osservazione{#problemi titolo="Choosing the Unknowns and Checking Constraints"}
To translate a problem into equations, name the requested quantities and write one equation for each independent fact. The unknowns keep the same meaning in every equation. After solving, check the constraints in the problem.

If two full-price tickets and one discounted ticket cost $23$ euros, and one full-price and two discounted tickets cost $19$ euros, let $i$ and $r$ be their prices. This gives $\begin{cases}2i+r=23\\i+2r=19\end{cases}$. The solution is $i=9$ and $r=5$ euros, respectively. Substitution recovers both totals.

A number of people must be a nonnegative integer, and a length must be positive. An algebraic solution that violates these conditions does not solve the original problem. The units must also be consistent before the equations are written.
:::

:::esempio{titolo="Two Pricing Plans with the Same Cost"}
Let $n$ be the number of lessons and $C$ the cost in euros. The first pricing plan has a $12$-euro registration fee and costs $4$ euros per lesson. The second has a $3$-euro registration fee and costs $7$ euros per lesson. To find when the plans cost the same, require the same value of $C$.

$$
\begin{cases}
C=12+4n\\
C=3+7n.
\end{cases}
$$

Equating the two expressions gives $12+4n=3+7n$, so $3n=9$ and $n=3$. Both pricing plans then cost $24$ euros. The x-coordinate at the intersection is a nonnegative integer, so it also makes sense as a number of lessons.

::grafico{f="12+4*x;3+7*x" legenda="C=12+4n;C=3+7n" nomi="n,C" xmin=-0.5 xmax=6 ymin=-2 ymax=49 punti="0,12;0,3;3,24,pieno,P" segmenti="3,0,3,24;0,24,3,24" titolo="Both pricing plans cost 24 euros for three lessons"}

:::
