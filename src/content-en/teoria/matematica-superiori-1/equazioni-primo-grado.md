---
titolo: "Linear equations"
sommario: "Equivalent equations, solutions, equations with fractions, and modeling word problems."
---

## Equations and equivalence

:::teorema{#equivalenza titolo="Transformations that preserve solutions"}
An **equation** is an equality that contains one or more unknowns. A **solution** is an admissible value that makes the two sides equal. Two equations are equivalent if they have the same solution set.

Adding the same expression to both sides preserves the solutions in the domain where the expression is defined. Multiplying or dividing both sides by the same nonzero number preserves the solutions. For example, subtracting $2$ from both sides of $3x+2=11$ gives $3x=9$. Dividing by $3$ then gives $x=3$. Each operation can be reversed.
:::

:::attenzione{titolo="Dividing by an expression that may be zero"}
Dividing $x(x-2)=0$ by $x$ gives $x=2$ when $x\ne 0$. The original product is also zero at $x=0$. To retain both solutions, use the zero-product property or consider the case $x=0$ separately.
:::

## Standard form and solution

:::teorema{#lineari titolo="The equation ax equals b"}
After simplification, a linear equation has the form $ax=b$, where $a\ne 0$. Since division by $a$ is reversible, the unique solution is $x=\dfrac ba$.

For example, to solve $5x-4=2x+8$, subtract $2x$ from both sides and add $4$ to both sides. This gives $3x=12$, so $x=4$. The sign change when a term moves to the other side follows from adding its opposite to both sides.
:::

:::esempio{titolo="Checking the original equation"}
To check $x=4$ in $5x-4=2x+8$, evaluate the two sides separately: $5\cdot 4-4=16$ and $2\cdot 4+8=16$. The results agree. On the graphs of $y=5x-4$ and $y=2x+8$, this equality corresponds to the point $(4,16)$.
:::

::grafico{f="5*x-4;2*x+8" xmin=-1 xmax=6 ymin=-6 ymax=24 punti="4,16,pieno,P" titolo="Intersection at (4, 16)"}

## Equations with grouped terms

:::esempio{#parentesi titolo="Distributing a negative factor"}
In the following equation, the factor $-2$ multiplies both terms of the binomial $x-3$. The constant term in the expansion is therefore $(-2)(-3)=6$.

$$
\begin{aligned}
-2(x-3)+4 &= x+1 \\[6pt]
-2x+6+4 &= x+1 \\[6pt]
9 &= 3x \\[6pt]
x &= 3
\end{aligned}
$$

The third line follows by adding $2x$ and subtracting $1$ on both sides. Substituting $3$ into the original equation gives $4$ on both sides.
:::

## Numerical and variable denominators

:::teorema{#frazioni titolo="Clearing denominators in the domain"}
When all denominators are nonzero numbers, multiply every term on both sides by the least common multiple of the denominators. Starting with $\dfrac x2-\dfrac x3=4$ and multiplying both sides by $6$ gives $3x-2x=24$, so $x=24$.

When a denominator contains the unknown, find the domain first. The equation $\dfrac{x-3}{x+1}=\dfrac13$ excludes $x=-1$. Within the domain, multiplying by $3(x+1)$ gives $3x-9=x+1$. The candidate $x=5$ belongs to the domain, so it is the solution.
:::

:::esempio{titolo="Candidate outside the domain"}
For $\dfrac{2x-4}{x-2}=0$, the domain requires $x\ne 2$. A fraction is zero when its numerator is zero and its denominator is nonzero. The only zero of the numerator is $2$, which the domain excludes. The solution set is $\varnothing$.
:::

## Equations with no solutions and identities

:::osservazione{#classificazione titolo="When the unknown cancels"}
If simplification gives $0x=b$ with $b\ne 0$, the equation has **no solution**. For example, $2(x+1)=2x+3$ reduces to $2=3$.

If simplification gives $0x=0$, the equality is an **identity** on the original domain. For example, $3(x-2)=3x-6$ holds for every real number. In an equation with algebraic fractions, the values that make a denominator zero remain excluded.
:::

:::esempio{titolo="The role of a parameter"}
In the equation $mx+5=4x+5$, $m$ is a parameter and $x$ is the unknown. Subtracting $4x+5$ from both sides gives $(m-4)x=0$.

- If $m=4$, the equality holds for every $x\in\mathbb R$.
- If $m\ne 4$, dividing by $m-4$ gives the unique solution $x=0$.
:::

## Word problems and rearranging formulas

:::esempio{#problemi titolo="Choosing the unknown and interpreting the result"}
A service charges a fixed fee of $5$ euros plus $3$ euros per activity. If $x$ is the number of activities, the total of $26$ euros gives $5+3x=26$. Subtracting the fixed fee leaves $21$ euros. Dividing by the cost per activity gives $x=7$, a nonnegative integer.

For two consecutive integers with sum $19$, let $x$ be the smaller integer and $x+1$ the larger one. The equation $x+(x+1)=19$ gives $2x=18$. The two integers are therefore $9$ and $10$.

To solve $s=3t+2$ for $t$, subtract $2$ from both sides and divide by $3$. This gives $t=\dfrac{s-2}{3}$. If $s=14$, the rearranged formula gives $t=4$. Substituting it into the original formula returns $s=14$.
:::
