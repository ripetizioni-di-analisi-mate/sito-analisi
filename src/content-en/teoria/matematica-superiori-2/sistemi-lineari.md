---
titolo: Linear Systems
sommario: Systems of two and three equations, substitution, comparison, elimination, Cramer's rule, classification with a parameter, and word problems.
---

## Equations That Must Hold Together

:::definizione{#soluzione titolo="Solution of a System"}
A **linear equation** in $x$ and $y$ is an equation such as $3x-2y=1$, in which the **unknowns** $x$ and $y$ (the letters whose values are sought) appear only to the first degree, that is, without exponents and without products of one another. The numbers that multiply the unknowns are called **coefficients** ($3$ and $-2$); the number without letters is called the **constant term** ($1$). The part to the left of the equals sign is the **left-hand side**, the part to the right is the **right-hand side**.

A **system** is a group of equations to be solved together, and it is written with a brace on the left. A **solution of a system** of two equations in $x$ and $y$ is an ordered pair that satisfies both equations. The pair is written in round brackets with a semicolon, as in $(4;3)$. The first coordinate always replaces $x$, and the second always replaces $y$. The brace indicates that both conditions must hold at the same time.

In the system
$$
\begin{cases}x+y=7\\x-y=1\end{cases}
$$
the pair $(4;3)$ is a solution because $4+3=7$ and $4-3=1$. The pair $(3;4)$ satisfies only the first equation, because $3-4=-1$ and not $1$; so it does not solve the system.

A system is **uniquely solvable** if it has exactly one solution, **inconsistent** if it has none, and **underdetermined** here if it has infinitely many.

In the Cartesian plane every pair $(x;y)$ is a point, whose $x$ is the **x-coordinate** (horizontal coordinate) and whose $y$ is the **y-coordinate** (vertical coordinate). In a system of two linear equations in two unknowns, each equation with at least one nonzero coefficient represents a line, made up of the points that satisfy it. A solution of the system is therefore a point that lies on both lines.
- Two **intersecting** lines, that is, lines that meet at one point, give one solution.
- Two **distinct parallel** lines have no common points, so the system has no solutions.
- Two **coincident** lines, that is, the same line written in two ways, give infinitely many solutions.
:::

:::esempio{titolo="A pair can lie on only one of the lines"}
The two equations of the previous system can be written by isolating $y$. From $x+y=7$ we obtain $y=7-x$; from $x-y=1$ we obtain $y=x-1$. On the graph the line $y=7-x$ goes down from left to right (it is **descending**), while the line $y=x-1$ goes up (it is **rising**). The two lines meet at $P=(4;3)$.

The point $Q=(3;4)$ lies on the descending line, because the sum of its coordinates is $3+4=7$. At the same x-coordinate $3$, the rising line has y-coordinate $3-1=2$ instead, so $Q$ does not lie on it. The graph shows the same check that is carried out by substituting the coordinates into the equations. Both conditions are required when the brace contains two equations.
::grafico{f="7-x;x-1" xmin=0 xmax=8 ymin=-1 ymax=8 punti="4,3,pieno,P;3,4,pieno,Q" titolo="P lies on both lines. Q lies on the descending line only."}
:::

## Substitution and Comparison

::::teorema{#sostituzione titolo="Reducing to One Unknown"}
The **substitution method** consists of three steps.
1. One equation is solved for one unknown, that is, the unknown is written in terms of the other.
2. The expression obtained replaces that unknown in the other equation, which becomes an equation in one unknown.
3. This equation is solved, and the relation from step 1 gives the second unknown.

For $\begin{cases}x+y=7\\x-y=1\end{cases}$, the first equation gives $y=7-x$. In the second, $7-x$ is written in place of $y$:
$$
\begin{aligned}
x-(7-x)&=1\\[6pt]
x-7+x&=1\\[6pt]
2x&=8\\[6pt]
x&=4.
\end{aligned}
$$
Finally, the relation from step 1 gives $y=7-4=3$.

The **comparison method** is a variant. The same unknown is isolated in both equations and the two expressions obtained are set equal. The equality is correct because, at the solution, both expressions represent the same value of $y$. For $y=2x+1$ and $y=-x+7$ we write
$$
\begin{aligned}
2x+1&=-x+7\\[6pt]
3x&=6\\[6pt]
x&=2,
\end{aligned}
$$
and then $y=2\cdot2+1=5$.

:::dimostrazione
Let $u(x)$ denote the expression in $x$ obtained from the first equation, for example $u(x)=7-x$. If the first equation is equivalent to $y=u(x)$, any solution must use that value of $y$. Therefore $u(x)$ can be written in place of $y$ in the other equation, and the solution still satisfies it.

Conversely, any $x$ that satisfies the new equation gives the pair $(x;u(x))$. This pair satisfies the first equation by construction and the second by the calculation just performed. The solutions of the system and those of the transformed system are therefore the same. The relation $y=u(x)$ is kept, because it is needed to recover the second coordinate.
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

the coefficient of $y$ in the second equation is $1$. Subtracting $x$ from both sides gives $y=4-x$ without introducing denominators. The first equation becomes

$$
\begin{aligned}
3x-2(4-x)&=1\\[6pt]
3x-8+2x&=1\\[6pt]
5x&=9.
\end{aligned}
$$

In the second step the factor $-2$ multiplies both terms of $4-x$, so $-2\cdot4=-8$ and $-2\cdot(-x)=+2x$. In the third step $8$ is added to both sides. The solution is $x=\dfrac95$ and
$$
y=4-\frac95=\frac{20}5-\frac95=\frac{11}5.
$$
:::

:::osservazione{titolo="Choosing a row that avoids fractions"}
In the previous system the coefficient of $y$ in the second equation is $1$, so the relation $y=4-x$ is found without division. In the first equation the same unknown is isolated as follows:
$$
\begin{aligned}
3x-2y&=1\\[6pt]
-2y&=1-3x\\[6pt]
y&=\frac{3x-1}{2}.
\end{aligned}
$$
This is an equivalent choice, though it introduces the denominator $2$ immediately. Setting the two forms equal applies the comparison method, $4-x=\dfrac{3x-1}{2}$. On the graph this means looking for the x-coordinate at which the two lines have the same y-coordinate, that is, the point $P$ with x-coordinate $\dfrac95=1.8$ and y-coordinate $\dfrac{11}5=2.2$.
::grafico{f="4-x;(3*x-1)/2" xmin=0 xmax=4 ymin=-1 ymax=6 punti="1.8,2.2,pieno,P" titolo="The two lines have the same vertical coordinate when $x=\dfrac95$"}
:::

## Elimination

::::teorema{#riduzione titolo="Eliminating an Unknown"}
Two systems are **equivalent** if they have the same solutions. Adding a multiple of one equation, that is, that equation multiplied by a number, to the other, while leaving the first unchanged, gives an equivalent system. In the **elimination method** the multiples are chosen so that the coefficients of one unknown become **opposites**, that is, equal apart from the sign, such as $6$ and $-6$. Adding the two equations then removes that unknown.

In the system $\begin{cases}2x+3y=13\\3x-2y=0\end{cases}$ the coefficients of $y$ are $3$ and $-2$. The first equation is multiplied by $2$ and the second by $3$, so the coefficients of $y$ become $6$ and $-6$:
$$
\begin{aligned}
4x+6y&=26\\[6pt]
9x-6y&=0\\[6pt]
13x&=26\quad\Longrightarrow\quad x=2.
\end{aligned}
$$
The third row is the sum of the first two. The original second equation then gives $3\cdot2-2y=0$, that is, $6-2y=0$, so $y=3$.

Multiplying a whole equation by a number also multiplies the constant term. For example, $x-y=2$ becomes $3x-3y=6$. This step gives an equivalent equation because the multiplier is nonzero.

:::dimostrazione
A pair satisfying both equations also satisfies the second plus $k$ times the first, because true equalities are being added. If the first equation is kept, subtracting $k$ times that equation from the new second equation recovers the original. The step can therefore be undone for any $k$; a step of this kind is called **reversible**, and for this reason it neither adds nor removes solutions. Multiplying a whole equation by a factor is reversible when the factor is nonzero, since one can divide by it.
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

both coefficients of $y$ become $12$ when the first equation is multiplied by $3$ and the second by $2$. The resulting equations are $9x+12y=30$ and $10x+12y=32$. Since the coefficients of $y$ are equal rather than opposite, we subtract:
$$
(10x+12y)-(9x+12y)=32-30,\qquad\text{so}\qquad x=2.
$$
Substituting into the original first equation gives $3\cdot2+4y=10$, that is, $6+4y=10$, so $4y=4$ and $y=1$.

One equation is kept while the other is replaced with the difference. Indeed, adding the retained equation to the difference recovers the one that was replaced.
:::

:::esempio{titolo="Using small multiples for elimination"}
In $\begin{cases}4x-6y=2\\6x+9y=21\end{cases}$ we want to eliminate $y$. The **absolute value** of a number is the number without its sign, so the absolute values of the coefficients of $y$ are $6$ and $9$. Their least common multiple, that is, the smallest positive number divisible by both, is $18$. The first row, that is, the first equation, is multiplied by $3$ and the second by $2$. The new rows have coefficients of $y$ equal to $-18$ and $18$, so they are added directly.
$$
\begin{aligned}
12x-18y&=6,\\[6pt]
12x+18y&=42,\\[6pt]
24x&=48\quad\Longrightarrow\quad x=2.
\end{aligned}
$$
The original first equation now gives $8-6y=2$, so $-6y=-6$ and $y=1$. The second checks the result with $12+9=21$. A larger common multiple, such as $36$, would also work; with $18$ the coefficients stay smaller during the steps.
:::

## Determinants and Cramer's Rule

::::teorema{#cramer titolo="Cramer's Rule"}
For the system $\begin{cases}ax+by=c\\dx+ey=f\end{cases}$, the letters $a,b,d,e$ are the coefficients and $c,f$ the constant terms. The numbers are arranged in a **matrix**, that is, a table of rows and columns: each row corresponds to an equation, the first column contains the coefficients of $x$, the second those of $y$, and separately there is the column of constant terms.

The **determinant** of a square matrix with two rows and two columns is the product of the numbers on the main diagonal (from top left to bottom right) minus the product of the numbers on the other diagonal:
$$
\begin{vmatrix}a&b\\d&e\end{vmatrix}=ae-bd.
$$
Three determinants are computed from the system.
- $D$ uses the two columns of coefficients.
- $D_x$ is obtained from $D$ by putting the column of constant terms in place of the column of $x$.
- $D_y$ is obtained from $D$ by putting the column of constant terms in place of the column of $y$.

Therefore
$$
D=ae-bd,\qquad D_x=ce-bf,\qquad D_y=af-cd.
$$
If $D\ne0$, the unique solution is
$$
x=\frac{D_x}{D},\qquad y=\frac{D_y}{D}.
$$
For $\begin{cases}2x+y=5\\x-y=1\end{cases}$, the calculations give
$$
\begin{aligned}
D&=\begin{vmatrix}2&1\\1&-1\end{vmatrix}=2\cdot(-1)-1\cdot1=-3,\\[6pt]
D_x&=\begin{vmatrix}5&1\\1&-1\end{vmatrix}=5\cdot(-1)-1\cdot1=-6,\\[6pt]
D_y&=\begin{vmatrix}2&5\\1&1\end{vmatrix}=2\cdot1-5\cdot1=-3,
\end{aligned}
$$
so $x=\dfrac{-6}{-3}=2$, $y=\dfrac{-3}{-3}=1$, and $(x;y)=(2;1)$.

The three determinants can also be written as $\begin{vmatrix}a&b\\d&e\end{vmatrix}$, $\begin{vmatrix}c&b\\f&e\end{vmatrix}$, and $\begin{vmatrix}a&c\\d&f\end{vmatrix}$.

The formula for $x$ is obtained by eliminating $y$. The first equation is multiplied by $e$ and the second by $b$, and then one is subtracted from the other:
$$
\begin{aligned}
aex+bey&=ce\\[6pt]
bdx+bey&=bf\\[6pt]
(ae-bd)x&=ce-bf.
\end{aligned}
$$
The last row is $Dx=D_x$, which can be divided by $D$ only when $D\ne0$.

:::dimostrazione
In the same way, $a$ times the second equation minus $d$ times the first gives $(ae-bd)y=af-cd$, that is, $Dy=D_y$. When $D\ne0$, the two equalities $Dx=D_x$ and $Dy=D_y$ fix exactly one possible pair. To see that this pair satisfies the original equations, expand the products:
$$
\begin{aligned}
aD_x+bD_y&=a(ce-bf)+b(af-cd)\\[6pt]
&=ace-abf+abf-bcd\\[6pt]
&=c(ae-bd)=cD,\\[6pt]
dD_x+eD_y&=d(ce-bf)+e(af-cd)\\[6pt]
&=cde-bdf+aef-cde\\[6pt]
&=f(ae-bd)=fD.
\end{aligned}
$$
Dividing by $D$ gives $a\dfrac{D_x}{D}+b\dfrac{D_y}{D}=c$ and $d\dfrac{D_x}{D}+e\dfrac{D_y}{D}=f$, that is, the two constant terms are recovered. The formulas therefore give a pair that is a solution, and it is the only possible one.
:::
::::

:::esempio{titolo="Using an equation for a vertical line in the determinants"}
For $\begin{cases}x=3\\x+y=5\end{cases}$ the first row reads $1\cdot x+0\cdot y=3$, so its coefficients are $1$ and $0$. This gives
$$
D=1\cdot1-0\cdot1=1,\qquad D_x=3\cdot1-0\cdot5=3,\qquad D_y=1\cdot5-3\cdot1=2,
$$
so the solution is $(3;2)$. On the graph the first row is the vertical line made up of the points with x-coordinate $3$, so that row cannot express $y$ in terms of $x$. The determinant method still works, because its condition concerns only $D$. In this particular case the quicker calculation is to substitute $x=3$ into the second row, which gives $y=5-3=2$.
::grafico{f="5-x" linee="3,-1 3,6" punti="3,2,pieno,P" xmin=0 xmax=6 ymin=-1 ymax=6 titolo="The vertical line x = 3 meets y = 5 − x at one point"}
:::

## Systems with No Solution or Infinitely Many

::::teorema{#classificazione titolo="Classifying the Solutions"}
If elimination removes both unknowns, an equality between numbers remains.
- If $0=k$ with $k\ne0$ remains, the equality is false for every pair and the system has no solution.
- If $0=0$ remains, the equality is true for every pair, so the eliminated equation followed from the other. If one genuine linear equation in two unknowns remains, that is, one with at least one nonzero coefficient, the system has infinitely many solutions.

For $\begin{cases}x+y=3\\2x+2y=8\end{cases}$, twice the first equation is $2x+2y=6$; the second minus this double gives $0=8-6=2$, so there are no solutions. Replacing $8$ with $6$ gives $0=0$. In this case $x$ is given any value $t$ and $y=3-t$ follows; the solutions are the pairs $(t;3-t)$ for every $t\in\mathbb R$. The symbol $\mathbb R$ denotes the set of real numbers, and $t\in\mathbb R$ reads "$t$ belongs to the reals". The letter $t$ describes all the solutions as its value changes; for $t=0$ we get $(0;3)$, for $t=1$ we get $(1;2)$.

When all the coefficients of an equation are zero, the constant term is examined directly. The equation $0x+0y=0$ is an **identity**, that is, an equality true for every pair, and it adds no condition. The equation $0x+0y=1$ is true for no pair and makes the whole system inconsistent. This reading avoids division by zero coefficients.

The graph shows the inconsistent case. The second equation $2x+2y=8$ is equivalent to $x+y=4$, so the lines are $y=3-x$ and $y=4-x$. They have the same slope and never meet.

::grafico{f="3-x;4-x" xmin=-2 xmax=5 ymin=-2 ymax=7 titolo="The lines $y=3-x$ and $y=4-x$ are parallel and distinct"}

:::dimostrazione
A row whose coefficients are all zero imposes only an equality between numbers. If it is false, no pair can satisfy it. If it is true, every pair satisfies it and only the other conditions, if any, remain. In a single nontrivial relation $ax+by=c$, at least one of $a$ and $b$ is nonzero; for example, if $b\ne0$ then $y=\dfrac{c-ax}{b}$. Any value can therefore be assigned to one variable and the other obtained from it, giving infinitely many pairs.
:::
::::

:::osservazione{titolo="A zero determinant calls for a second check"}
Cramer's quotients are undefined when $D=0$, because division by zero is not possible. If a row with nonzero coefficients remains, elimination can reveal either a contradiction or that both equations describe the same line. With both coefficient rows and both constants equal to zero, every pair in the plane is allowed.

In the table, $\varnothing$ denotes the **empty set** (no solutions) and $\mathbb R^2$ the set of all pairs of real numbers, that is, the whole plane. The set of solutions is often denoted by $S$, for example $S=\{(t;3-t):t\in\mathbb R\}$.

| After elimination | Solution set |
|---|---|
| A condition $0=k$ with $k\ne0$ | Empty |
| One nontrivial equation and one identity | A line |
| Two identities $0=0$ | The whole plane |
| Two independent conditions | A point |

Two left-hand sides are **proportional** when the coefficients of one are those of the other multiplied by the same number. For $x+y=3$ and $2x+2y=6$, both sides of the second row are twice those of the first. Doubling a row changes its coefficients while keeping the line of points that satisfy it. The graph shows the common line $y=3-x$ with three of its points, $(0;3)$, $(1;2)$, and $(3;0)$.

If the left-hand sides are proportional but the constant terms do not follow the same factor, the lines are distinct and parallel. Isolating $y$ in $x+y=3$ and $2x+2y=8$ gives $y=-x+3$ and $y=-x+4$. The number that multiplies $x$ is the **slope** and gives the steepness of the line; for these two lines it is $-1$. The term without $x$ is the **y-intercept**, the y-coordinate of the point where the line crosses the $y$-axis, and for these two lines it is $3$ and $4$. Equal slopes and different intercepts give distinct parallel lines.
::grafico{f="3-x" xmin=-2 xmax=5 ymin=-2 ymax=6 punti="0,3;1,2;3,0" titolo="A single line contains all the solutions to both equations"}
:::

## Fractions and Parameters

:::teorema{#parametri titolo="Domain Conditions and Separate Cases"}
If an equation contains fractions with numerical denominators, all its terms, including the constant term, are multiplied by the least common multiple of the denominators. For example, $\dfrac x2+\dfrac y3=4$ multiplied by $6$ becomes $3x+2y=24$. If denominators contain letters, that is, unknowns, the **conditions** that keep them nonzero are written first, and at the end the candidate solutions are checked against them.

A **parameter** is a letter other than the unknowns, whose value is held fixed while solving; each value of the parameter corresponds to a different system. To **discuss** a system means to state, for each value of the parameter, how many solutions it has and what they are.

For $\begin{cases}kx+y=1\\2x+y=3\end{cases}$, the determinant is $D=k\cdot1-1\cdot2=k-2$. Subtracting the second equation from the first eliminates $y$:
$$
(k-2)x=1-3=-2.
$$
- If $k\ne2$, we divide by $k-2$, so $x=-\dfrac2{k-2}$ and then $y=1-kx$. The system is uniquely solvable.
- If $k=2$, the first equation is $2x+y=1$. The two equations would have the same left-hand side $2x+y$ and different constant terms, $1$ and $3$, so the system has no solution.

Division by $k-2$ was used only when that factor was nonzero. The excluded case is analysed in the original equations. The set of reals except $2$ is written $\mathbb R\setminus\{2\}$.
:::

:::esempio{titolo="A Family of Solutions in the Singular Case"}
Consider

$$
\begin{cases}
kx+2y=6\\
3x+y=3.
\end{cases}
$$

Twice the second equation is $6x+2y=6$. Subtracting it from the first gives
$$
(k-6)x+(2-2)y=6-6,\qquad\text{that is,}\qquad (k-6)x=0.
$$
- When $k\ne6$, we divide by $k-6$, so $x=0$, and the second equation gives $y=3$.
- When $k=6$, the first equation is $6x+2y=6$, twice the second. Every pair $(t;3-3t)$ with $t\in\mathbb R$ satisfies both.

The determinant $D=k\cdot1-2\cdot3=k-6$ is zero exactly in the case $k=6$, which is called the **singular case**; elimination shows that in that case there are infinitely many solutions.
:::

:::esempio{titolo="A system that becomes linear on a restricted domain"}
In the first row of
$$
\begin{cases}
\dfrac{x^2-4}{x-2}+y=7\\
x-y=-1
\end{cases}
$$
the denominator $x-2$ is zero for $x=2$, so $x=2$ is excluded before simplifying. Since $x^2-4=(x-2)(x+2)$, for $x\ne2$ the fraction equals $x+2$ and the first equation becomes $x+2+y=7$, that is, $x+y=5$. Adding it to the other gives $2x=4$, so $x=2$ and $y=3$, and therefore the candidate pair is $(2;3)$. Its x-coordinate is excluded, so the original system has no solution.

The graph shows the simplified lines $y=5-x$ and $y=x+1$, which meet at $(2;3)$, marked with an open circle because the first equation is undefined at that point.
::grafico{f="5-x;x+1" xmin=-1 xmax=6 ymin=-1 ymax=7 punti="2,3,vuoto" titolo="The reduced lines intersect where the first equation is undefined"}
:::

## Three Unknowns and the Graphical Interpretation

::::teorema{#tre-incognite titolo="Elimination in Larger Systems"}
A solution of a system in $x$, $y$, $z$ is an ordered **triple** $(x;y;z)$ that satisfies all the equations. A linear system of three equations in three unknowns is solved as follows.
1. One letter is eliminated from two pairs of equations, for example from the first and second and from the first and third.
2. The resulting system of two equations in two unknowns is solved.
3. The last unknown is recovered by substituting into one of the original equations.

At the end all the original equations must be satisfied.

If $x+y+z=9$, $x+y=5$, and $x-y=1$, the first minus the second gives $z=9-5=4$. The last two, added together, give $2x=6$, so $x=3$, and then $y=5-3=2$. The complete check gives $3+2+4=9$, $3+2=5$, and $3-2=1$.

In the plane, the intersection of two lines shows the solution of a system of two equations. The graph shows the lines $y=2x+1$ and $y=-x+7$ from the comparison method, which meet at the point $(2;5)$.

::grafico{f="2*x+1;-x+7" punti="2,5,pieno,P" xmin=-2 xmax=6 ymin=-2 ymax=10 titolo="The lines meet at the solution $(2;5)$"}

:::dimostrazione
If $x$ has a nonzero coefficient in one of the three equations, that row is used to eliminate $x$ from the other two, by subtracting a multiple of it from each. Subtracting those multiples is reversible because the row used remains in the system, so the solutions do not change. The remaining two conditions in $y$ and $z$ are solved, and then $x$ is found from the row that contains it. If no row contains $x$, that variable is **free**, that is, it can take any real value, as long as the conditions on $y$ and $z$ are consistent.
:::
::::

:::esempio{titolo="Eliminating the same variable from two different rows"}
From $x+y+z=6$, $x-y+2z=5$, and $x+2y-z=2$, the first equation is subtracted from each of the other two:
$$
\begin{aligned}
(x-y+2z)-(x+y+z)&=5-6,\qquad\text{that is,}\qquad -2y+z=-1,\\[6pt]
(x+2y-z)-(x+y+z)&=2-6,\qquad\text{that is,}\qquad y-2z=-4.
\end{aligned}
$$
The first new equation gives $z=2y-1$. Substitution into the second gives $y-2(2y-1)=-4$, that is, $-3y+2=-4$, so $-3y=-6$, hence $y=2$ and $z=2\cdot2-1=3$. The retained equation gives $x=6-2-3=1$. Checking the two original transformed rows gives $1-2+6=5$ and $1+4-3=2$.

The graph has $y$ on the horizontal axis and $z$ on the vertical axis. The lines $z=2y-1$ and $z=\dfrac{y+4}{2}$ represent the two reduced equations and meet at the point $y=2$, $z=3$.
::grafico{f="2*x-1;(x+4)/2" xmin=-1 xmax=5 ymin=-1 ymax=7 nomi="y,z" legenda="z=2y-1;z=(y+4)/2" punti="2,3,pieno,P" titolo="The reduced system determines y and z before recovering x"}
:::

## Problems with Two Pieces of Information

:::osservazione{#problemi titolo="Choosing the Unknowns and Checking Constraints"}
A problem is translated into a system in four steps.
1. A letter is assigned to each requested quantity; the letter keeps the same meaning in every equation.
2. One equation is written for each **independent** fact, that is, for each piece of information that does not follow from the others.
3. The system is solved.
4. The constraints of the problem are checked.

Two full-price tickets and one discounted ticket cost $23$ euros, while one full-price and two discounted tickets cost $19$ euros. Letting $i$ be the price of the full-price ticket and $r$ that of the discounted ticket gives $\begin{cases}2i+r=23\\i+2r=19\end{cases}$. The first equation gives $r=23-2i$; substituting into the second,
$$
\begin{aligned}
i+2(23-2i)&=19\\[6pt]
i+46-4i&=19\\[6pt]
-3i&=-27\\[6pt]
i&=9,
\end{aligned}
$$
and then $r=23-18=5$. The full-price ticket costs $9$ euros and the discounted ticket $5$ euros. Substitution recovers both totals, $18+5=23$ and $9+10=19$.

A number of people or objects is a nonnegative integer; a length is positive. An algebraic solution that violates these conditions does not solve the original problem. The units of measurement must also be the same in all the equations, for example all lengths in centimetres, before the system is written.
:::

:::esempio{titolo="Two Pricing Plans with the Same Cost"}
Let $n$ be the number of lessons and $C$ the cost in euros. The first pricing plan has a $12$-euro registration fee and costs $4$ euros per lesson. The second has a $3$-euro registration fee and costs $7$ euros per lesson. The two plans cost the same when they give the same value of $C$ for the same $n$.

$$
\begin{cases}
C=12+4n\\
C=3+7n.
\end{cases}
$$

Equating the two expressions gives $12+4n=3+7n$, so $12-3=7n-4n$, that is, $3n=9$ and $n=3$. Both pricing plans then cost $12+4\cdot3=24$ euros. The x-coordinate at the intersection is a nonnegative integer, so it also makes sense as a number of lessons.

In the graph the number of lessons $n$ is on the horizontal axis and the cost $C$ on the vertical axis. The two lines start from the registration fees $12$ and $3$ on the vertical axis and meet at the point $P=(3;24)$.

::grafico{f="12+4*x;3+7*x" legenda="C=12+4n;C=3+7n" nomi="n,C" xmin=-0.5 xmax=6 ymin=-2 ymax=49 punti="0,12;0,3;3,24,pieno,P" segmenti="3,0,3,24;0,24,3,24" titolo="Both pricing plans cost 24 euros for three lessons"}

:::

:::esempio{titolo="An intersection between two whole lesson counts"}
With the pricing plans $C=11+4n$ and $C=2+8n$, the equality $11+4n=2+8n$ requires $9=4n$, so $n=\dfrac94=2.25$. The equations have a solution, but the number of lessons is a nonnegative integer, so equal prices never occur.
- At $n=2$ the costs are $11+8=19$ and $2+16=18$ euros, so the second plan is cheaper.
- At $n=3$ the costs are $11+12=23$ and $2+24=26$ euros, so the first plan is cheaper.

The graph shows the four costs at the integers $2$ and $3$ and, with an open circle, the tie point with x-coordinate $2.25$, which does not correspond to a whole number of lessons.
::grafico{f="11+4*x;2+8*x" xmin=0 xmax=4 ymin=0 ymax=35 nomi="n,C" legenda="C=11+4n;C=2+8n" punti="2,19;2,18;3,23;3,26;2.25,20,vuoto" titolo="The prices tie between two and three lessons. The cheaper plan changes between those counts."}
:::
