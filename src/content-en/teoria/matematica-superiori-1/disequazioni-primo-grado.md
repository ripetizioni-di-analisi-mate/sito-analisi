---
titolo: "Linear inequalities"
sommario: "Inequality signs, intervals, simultaneous conditions, and thresholds in word problems."
---

## Inequalities and transformations

:::teorema{#ordine titolo="Preserving or reversing the inequality sign"}
Adding the same quantity to both sides preserves the direction of an inequality. Multiplying or dividing by a positive number preserves the sign. Multiplying or dividing by a negative number reverses it.

For example, multiplying both sides of $2<5$ by $-1$ gives $-2>-5$. This explains the reversal when isolating a variable with a negative coefficient. The signs $<$ and $>$ exclude equality, while $\le$ and $\ge$ include it.
:::

## Isolating the variable

:::esempio{#coefficienti titolo="Positive and negative coefficients"}
The inequality $3x+2>11$ is equivalent to $3x>9$, so $x>3$. Dividing by three preserves the direction of the inequality.

For $-2x+1\le7$, subtracting one gives $-2x\le6$. Dividing by $-2$ reverses the sign and gives

$$
x\ge-3.
$$

The value $x=-3$ is included because it gives equality in the original expression. The inequality is true at $x=0$ and false at $x=-4$. These checks identify which side of the boundary contains the solutions.
:::

## Intervals and solution sets

:::definizione{#intervalli titolo="Included and excluded endpoints"}
The condition $a<x<b$ corresponds to the open interval $(a,b)$. The condition $a\le x\le b$ corresponds to $[a,b]$. The interval $(a,b]$ includes $b$ and excludes $a$.

The condition $x>3$ is written as $(3,+\infty)$, and $x\le3$ is written as $(-\infty,3]$. An infinity symbol indicates that the interval continues without bound. A round parenthesis always appears next to an infinity symbol. On a number line, an open dot indicates an excluded endpoint and a filled dot indicates an included endpoint.
:::

::grafico{assi=0 xmin=-1 xmax=7 ymin=-0.7 ymax=0.8 linee="-0.8,0 6.5,0" vettori="6.4,0,6.8,0" area="0.07;-0.07;2;5" punti="2,0,vuoto;5,0,pieno" etichette="2,-0.3,2;5,-0.3,5;6.8,-0.3,x" titolo="The interval (2, 5] includes 5 and excludes 2"}

## Simultaneous and alternative conditions

:::teorema{#sistemi titolo="Intersection and union of solution sets"}
If two conditions must hold at the same time, take the **intersection** of their solution sets. The conditions $x>2$ and $x\le5$ give $(2,5]$. The conditions $x>5$ and $x\le2$ have no common solutions.

If at least one condition must hold, take the **union**. The conditions $x<-2$ or $x>2$ give $(-\infty,-2)\cup(2,+\infty)$.

A compound inequality describes simultaneous conditions. Starting from $3\le2x+1<7$, subtracting one from all three expressions and dividing them by two gives $1\le x<3$.
:::

:::esempio{titolo="Compound inequality with a negative coefficient"}
Starting from $0\le 4-2x<6$, subtract $4$ from all three expressions to get $-4\le -2x<2$. Dividing all three by $-2$ reverses both comparisons, so $2\ge x>-1$. Writing the lower bound first gives $-1<x\le 2$, which is $(-1,2]$.
:::

## All values or no values

:::osservazione{#casi titolo="Numerical comparisons after simplification"}
When simplifying an inequality, the variable terms can cancel. If a true comparison remains, every value in the original domain is a solution. For example, $2x+1<2x+4$ is equivalent to $1<4$, so it is true for every real number.

If a false comparison remains, the solution set is empty. For example, $3x+5\le3x+2$ is equivalent to $5\le2$. The statement $0<0$ is false, while $0\le0$ is true. Including equality therefore changes the result.
:::

## Thresholds, counting, and integer solutions

:::esempio{#problemi titolo="Maximum affordable quantity and minimum required quantity"}
With $20$ euros and tickets that cost $3$ euros each, the number $x$ of tickets must satisfy $3x\le20$. The real solutions satisfy $x\le\dfrac{20}{3}$, but the context requires a nonnegative integer. The maximum number that can be purchased is therefore $6$. Six tickets cost $18$ euros, while seven would cost $21$ euros and exceed the budget.

To get at least $21$ pencils by buying packs of $4$, solve $4x\ge21$. The real threshold is $\dfrac{21}{4}$ and the least admissible integer is $6$. Five packs contain $20$ pencils, while six contain $24$. The two rounding decisions go in different directions because the first problem asks for a maximum within a budget and the second asks for a minimum that reaches a target quantity.
:::
