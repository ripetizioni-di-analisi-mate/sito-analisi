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

:::esempio{titolo="A pair can lie on only one of the lines"}
On the graph the lines $y=7-x$ and $y=x-1$ meet at $(4;3)$. The pair $(3;4)$ lies on the descending line because the coordinates add to seven. The rising line has vertical coordinate $2$ at the same input. Locating the points makes the substitution check visible. Both conditions are required when the brace contains two equations.
::grafico{f="7-x;x-1" xmin=0 xmax=8 ymin=-1 ymax=8 punti="4,3,pieno,P;3,4,pieno,Q" titolo="P lies on both lines. Q lies on the descending line only."}
:::

## Substitution and Comparison

::::teorema{#sostituzione titolo="Reducing to One Unknown"}
In the **substitution method**, solve one equation for an unknown and substitute its expression into the other. The system becomes an equation in one unknown together with the relation used to find the other.

For $\begin{cases}x+y=7\\x-y=1\end{cases}$, the first equation gives $y=7-x$. The second gives $x-(7-x)=1$, then $2x=8$ and $x=4$. Finally, $y=7-4=3$.

In the **comparison method**, solve both equations for the same unknown and set the expressions equal. For $y=2x+1$ and $y=-x+7$, this gives $2x+1=-x+7$, so $x=2$ and $y=5$. The expressions are equal because both must give the same value of $y$.

:::dimostrazione
If the first equation is equivalent to $y=u(x)$, any solution must use that value of $y$. You can therefore put $u(x)$ in place of $y$ in the other equation. Conversely, any $x$ that satisfies the new equation gives the pair $(x;u(x))$. It satisfies the first equation by construction and the second by the calculation just performed. Keep $y=u(x)$ so that you can recover the second coordinate.
:::
::::

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

:::osservazione{titolo="Choosing a row that avoids fractions"}
In the previous system the coefficient of $y$ in the second equation is $1$. No division is needed to find $y=4-x$. Isolating the same variable in the first equation gives $y=\dfrac{3x-1}{2}$. This is an equivalent choice, though it introduces denominator $2$ immediately. Equating the two forms expresses the same problem as equality of their vertical coordinates at a common input.
::grafico{f="4-x;(3*x-1)/2" xmin=0 xmax=4 ymin=-1 ymax=6 punti="1.8,2.2,pieno,P" titolo="The two lines have the same vertical coordinate when $x=\dfrac95$"}
:::

## Elimination

::::teorema{#riduzione titolo="Eliminating an Unknown"}
Adding a multiple of one equation to the other gives an equivalent system, with the same solutions. Choose the multiples so that the coefficients of one unknown become opposites.

In the system $\begin{cases}2x+3y=13\\3x-2y=0\end{cases}$, multiply the first equation by $2$ and the second by $3$. Adding gives $13x=26$, so $x=2$. The second equation gives $6-2y=0$, so $y=3$.

Multiplying a whole equation by a number also multiplies the constant term. For example, $x-y=2$ becomes $3x-3y=6$. This gives an equivalent equation because the multiplier is nonzero.

:::dimostrazione
A pair satisfying both equations also satisfies the second plus $k$ times the first. If the first equation is kept, subtracting $k$ times that equation from the new second equation recovers the original. This step is reversible for any $k$. Multiplying a whole equation by a factor is reversible when the factor is nonzero, since you can divide by it.
:::
::::

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

:::esempio{titolo="Using small multiples for elimination"}
In $\begin{cases}4x-6y=2\\6x+9y=21\end{cases}$ we want to eliminate $y$. The least common multiple of the absolute values $6$ and $9$ is $18$. Multiply the first row by $3$ and the second by $2$. Their new coefficients are $-18$ and $18$, so add the rows directly.
$$
\begin{aligned}
12x-18y&=6,\\[6pt]
12x+18y&=42,\\[6pt]
24x&=48\quad\Longrightarrow\quad x=2.
\end{aligned}
$$
The original first equation now gives $8-6y=2$, so $y=1$. The second checks the result with $12+9=21$. A larger common multiple would also work. Using $18$ keeps the intermediate coefficients smaller.
:::

## Determinants and Cramer's Rule

::::teorema{#cramer titolo="Cramer's Rule"}
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

:::dimostrazione
Using $a$ times the second equation minus $d$ times the first also gives $Dy=D_y$. When $D\ne0$, the two identities fix exactly one candidate pair. To see that it satisfies the original equations, expand
$$
\begin{aligned}
aD_x+bD_y&=a(ce-bf)+b(af-cd)=cD,\\[6pt]
dD_x+eD_y&=d(ce-bf)+e(af-cd)=fD.
\end{aligned}
$$
Dividing by $D$ recovers the two constants. The conditions are therefore both necessary and sufficient.
:::
::::

:::esempio{titolo="Using an equation for a vertical line in the determinants"}
For $\begin{cases}x=3\\x+y=5\end{cases}$ the first row has coefficients $1$ and $0$. This gives $D=1$, $D_x=3$, and $D_y=2$. The first row is a vertical line, so it cannot express $y$ as a function of $x$. The determinant method still works because its condition concerns $D$. In this particular case, substituting $x=3$ into the second row is quicker.
::grafico{f="5-x" linee="3,-1 3,6" punti="3,2,pieno,P" xmin=0 xmax=6 ymin=-1 ymax=6 titolo="The vertical line x = 3 meets y = 5 − x at one point"}
:::

## Systems with No Solution or Infinitely Many

::::teorema{#classificazione titolo="Classifying the Solutions"}
If elimination gives $0=k$ with $k\ne0$, the system has no solution. If it gives $0=0$, the eliminated equation followed from the other. If one genuine linear equation in two unknowns remains, the system has infinitely many solutions.

For $\begin{cases}x+y=3\\2x+2y=8\end{cases}$, subtracting twice the first equation from the second gives $0=2$, so there are no solutions. Replacing $8$ with $6$ gives $0=0$, and the solutions are $(t;3-t)$ for every $t\in\mathbb R$.

When all the coefficients of an equation are zero, check the constant term directly. The equation $0x+0y=0$ adds no condition, while $0x+0y=1$ makes the whole system inconsistent. This avoids division by zero.

::grafico{f="3-x;4-x" xmin=-2 xmax=5 ymin=-2 ymax=7 titolo="The lines $y=3-x$ and $y=4-x$ are parallel and distinct"}

:::dimostrazione
A row whose coefficients are all zero imposes only an equality between numbers. If it is false, no pair can satisfy it. If it is true, every pair satisfies it and only the other conditions, if any, remain. In a single nontrivial relation $ax+by=c$, at least one of $a$ and $b$ is nonzero. You can therefore assign any value to one variable and solve for the other, giving infinitely many pairs.
:::
::::

:::osservazione{titolo="A zero determinant calls for a second check"}
Cramer's quotients are undefined when $D=0$. If a row with nonzero coefficients remains, elimination can reveal either a contradiction or that both equations describe the same line. With both coefficient rows and both constants equal to zero, every pair in the plane is allowed.

| After elimination | Solution set |
|---|---|
| A condition $0=k$ with $k\ne0$ | Empty |
| One nontrivial equation and one identity | A line |
| Two identities $0=0$ | The whole plane |
| Two independent conditions | A point |

For $x+y=3$ and $2x+2y=6$, both sides of the second row are twice those of the first. Doubling a row changes its coefficients while keeping the line of points that satisfy it.
::grafico{f="3-x" xmin=-2 xmax=5 ymin=-2 ymax=6 punti="0,3;1,2;3,0" titolo="A single line contains all the solutions to both equations"}
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

:::esempio{titolo="A system that becomes linear on a restricted domain"}
In the first row of
$$
\begin{cases}
\dfrac{x^2-4}{x-2}+y=7\\
x-y=-1
\end{cases}
$$
exclude $x=2$ before canceling. For allowed pairs, the first equation becomes $x+y=5$. Adding it to the other gives $2x=4$ and therefore the candidate $(2;3)$. Its horizontal coordinate is excluded, so the original system has no solution. The solution of the reduced linear system lies exactly at the hole in the first relation.
::grafico{f="5-x;x+1" xmin=-1 xmax=6 ymin=-1 ymax=7 punti="2,3,vuoto" titolo="The reduced lines intersect where the first equation is undefined"}
:::

## Three Unknowns and the Graphical Interpretation

::::teorema{#tre-incognite titolo="Elimination in Larger Systems"}
In a linear system with three unknowns, eliminate one variable from two pairs of equations. Solve the resulting system of two unknowns and recover the last unknown by substitution. All the original equations must be satisfied.

If $x+y+z=9$, $x+y=5$, and $x-y=1$, subtracting the first two equations gives $z=4$. The last two give $x=3$ and $y=2$. The complete check gives $3+2+4=9$, $3+2=5$, and $3-2=1$.

In the plane, the intersection of two lines shows the solution of a system of two equations.

::grafico{f="2*x+1;-x+7" punti="2,5,pieno,P" xmin=-2 xmax=6 ymin=-2 ymax=10 titolo="The lines meet at the solution $(2;5)$"}

:::dimostrazione
If $x$ has a nonzero coefficient in one of the three equations, use that row to eliminate $x$ from the other two. Subtracting those multiples is reversible because the first row remains. Solve the remaining two conditions in $y$ and $z$, then get $x$ from the row that contains it. If no row contains $x$, that variable may be free as long as the conditions on $y$ and $z$ are consistent.
:::
::::

:::esempio{titolo="Eliminating the same variable from two different rows"}
From $x+y+z=6$, $x-y+2z=5$, and $x+2y-z=2$, subtract the first equation from each of the other two. This leaves $-2y+z=-1$ and $y-2z=-4$. The first new equation gives $z=2y-1$. Substitution into the second gives $-3y=-6$, so $y=2$ and $z=3$. The retained equation gives $x=1$. Checking the two original transformed rows gives $1-2+6=5$ and $1+4-3=2$.
::grafico{f="2*x-1;(x+4)/2" xmin=-1 xmax=5 ymin=-1 ymax=7 nomi="y,z" legenda="z=2y-1;z=(y+4)/2" punti="2,3,pieno,P" titolo="The reduced system determines y and z before recovering x"}
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

:::esempio{titolo="An intersection between two whole lesson counts"}
With the pricing plans $C=11+4n$ and $C=2+8n$, equality requires $4n=9$, so $n=\dfrac94$. The equations have a solution, but the number of lessons is a nonnegative integer. At $n=2$ the costs are $19$ and $18$ euros. At $n=3$ they are $23$ and $26$ euros. You can therefore identify the cheaper plan at each neighboring integer even though neither gives equal prices.
::grafico{f="11+4*x;2+8*x" xmin=0 xmax=4 ymin=0 ymax=35 nomi="n,C" legenda="C=11+4n;C=2+8n" punti="2,19;2,18;3,23;3,26;2.25,20,vuoto" titolo="The prices tie between two and three lessons. The cheaper plan changes between those counts."}
:::
