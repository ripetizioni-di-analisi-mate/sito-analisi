---
titolo: Linear inequalities
sommario: Equivalent transformations, intervals, and constraints on prices, capacity, and whole numbers.
---

Linear equations ask which values make two expressions equal. Linear inequalities ask which values put the expressions in a given order. Equivalent transformations are still used, and the solutions are then represented by intervals. Combining simultaneous conditions will be useful for inequalities and systems in the second year.

## Order and equivalent transformations

::::teorema{#ordine titolo="Transformations that preserve or reverse order"}
An inequality compares two numbers. The symbols $<$ and $>$ indicate strict comparisons, while $\le$ and $\ge$ also allow equality. An **inequality in an unknown** asks for the values in a given domain for which the comparison of two expressions is true.

Two inequalities are **equivalent** if they have the same solution set. Adding the same expression, defined throughout the domain, to both sides preserves the direction. Multiplying or dividing both sides by a positive constant preserves the direction. A negative constant reverses it.

:::dimostrazione
Consider the sign of the right-hand side minus the left-hand side. If $a<b$, then $b-a$ is positive. Adding the same number $d$ leaves the difference $(b+d)-(a+d)$ equal to $b-a$. After multiplication by $k$, the difference is $kb-ka=k(b-a)$. It is positive for $k>0$ and negative for $k<0$. Equality is preserved because a zero difference stays zero. The steps can be reversed by subtracting or dividing, as $k$ is nonzero.
:::

::grafico{assi=0 xmin=-5.1 xmax=5.1 ymin=-1.8 ymax=1.77 vettori="-4.7,0.86,4.75,0.86;-4.7,-0.82,4.75,-0.82" punti="1,0.86,pieno;4,0.86,pieno;-1,-0.82,pieno;-4,-0.82,pieno" etichette="1,1.36,1;4,1.36,4;-1,-1.32,−1;-4,-1.32,−4;-2.9,1.36,Original values;2.9,-1.32,Opposite values" titolo="From $1<4$ it follows that $-4<-1$. The larger value moves to the left"}
::::

:::attenzione
Multiplication by zero erases the difference between the two sides. For example, $3<5$ would turn into $0<0$, which is false. With $\le$ the result would instead be $0\le0$ for every value, even when the original comparison is false. Multiplication by zero therefore discards the condition being solved.
:::

## Coefficient, boundary, and direction

:::definizione{#coefficienti titolo="Finding the boundary by isolating the unknown"}
After collecting like terms, a linear inequality can be written by comparing $ax+b$ with zero. If $a\ne0$, the number $-\dfrac ba$ makes the two sides equal and is the **boundary value**. To find the solution set, isolate $x$ and check the sign of the coefficient used in the division. The inequality sign determines whether the boundary belongs to the set.
:::

:::esempio{titolo="Comparing two expressions in the same unknown"}
Find when $2x+6>x+9$. Subtracting $x+6$ from both sides gives $x>3$. At the boundary $x=3$, the two sides give $12=12$. At $x=4$ we have $14>13$, and at $x=2$ we have $10<11$.

::grafico{f="2*x+6;x+9" xmin=-0.4 xmax=6.3 ymin=4.9 ymax=20.2 nomi="x,y" legenda="y=2x+6;y=x+9" punti="3,12,pieno;4,14,pieno;4,13,pieno" segmenti="3,5,3,12;4,13,4,14" titolo="The lines meet at $x=3$. To the right, the first expression is larger than the second"}

For $-2x+1\le7$, subtract $1$ to get $-2x\le6$. Dividing by $-2$ reverses the sign, giving $x\ge-3$. Substituting $x=-3$ gives $7$, which is allowed by $\le$. A smaller value, such as $-4$, gives $9$ and exceeds the upper limit.
:::

::::teorema{#segno-lineare titolo="The sign on either side of the boundary"}
Let $r=-\dfrac ba$ be the boundary for the expression $ax+b$, with $a\ne0$. If $a$ is positive, the expression is negative to the left of $r$ and positive to the right. If $a$ is negative, the signs switch.

:::dimostrazione
Since $ar+b=0$, the expression can be written as $a(x-r)$. For $x<r$ the factor $x-r$ is negative. For $x>r$ it is positive. Multiplication by $a$ gives the sign of the product, so the sign on an entire interval can be determined once the boundary is known.
:::

| Sign of coefficient | $x<r$ | $x=r$ | $x>r$ |
| --- | --- | --- | --- |
| $a>0$ | $-$ | $0$ | $+$ |
| $a<0$ | $+$ | $0$ | $-$ |
::::

## Grouped terms and numerical denominators

:::esempio{#parentesi-e-frazioni titolo="Multiplying by a positive common denominator"}
To solve $\dfrac{-(2x-1)}3+\dfrac{x+5}6\ge1$, multiply the entire inequality by $6$, which is positive. The terms in the first numerator change sign on expansion because that numerator is multiplied by $-2$.

$$
\begin{aligned}
-2(2x-1)+(x+5)&\ge6,\\[6pt]
-4x+2+x+5&\ge6,\\[6pt]
-3x&\ge-1,\\[6pt]
x&\le\frac13.
\end{aligned}
$$

It is the division by $-3$ that reverses the sign. At the boundary $x=\dfrac13$ the original sum equals $1$. Another approach is to combine the fractions first, obtaining $\dfrac{7-3x}{6}$. For this fraction to be at least $1$, its numerator must be at least $6$, since the denominator is positive.
:::

:::osservazione
When a denominator is negative, the sign can be moved to the numerator before clearing the fraction. For example, $\dfrac{3-2x}{-4}<2$ is equivalent to $\dfrac{2x-3}{4}<2$. Multiplying by $4$ gives $2x-3<8$, so $x<\dfrac{11}{2}$. Another approach multiplies the original inequality by $-4$, giving $3-2x>-8$. Subtract $3$ and divide by $-2$, reversing the sign a second time. The two reversals cancel. At the boundary the left side equals $2$, and the strict inequality excludes it.
:::

:::esempio{#cambio-di-variabile titolo="Translating an interval through a change of variable"}
To make $3<10-2x\le7$ easier to read, call the expression $10-2x$ by the name $u$. The constraint becomes $3<u\le7$. From $u=10-2x$ it follows that $x=\dfrac{10-u}{2}$. The endpoint $u=7$ gives $x=\dfrac32$ and remains included. The endpoint $u=3$ gives $x=\dfrac72$ and remains excluded. The order reverses because the numerator $10-u$ decreases as $u$ increases. The solution is $\left[\dfrac32,\dfrac72\right)$.

::grafico{assi=0 xmin=-0.7 xmax=8.2 ymin=-1.88 ymax=1.75 vettori="-0.25,0.88,7.9,0.88;-0.25,-0.84,7.9,-0.84" area="0.97;0.79;3;7|-0.75;-0.93;1.5;3.5" punti="3,0.88,vuoto;7,0.88,pieno;1.5,-0.84,pieno;3.5,-0.84,vuoto" etichette="0.36,1.31,u;3,1.31,3;7,1.31,7;0.36,-1.34,x;1.5,-1.34,3⁄2;3.5,-1.34,7⁄2" titolo="The closed endpoint for $u$ becomes the left endpoint for $x$. The open endpoint moves to the right"}
:::

## Intervals on the real number line

:::definizione{#intervalli titolo="Included, excluded, and unbounded endpoints"}
For $a<b$, the interval $(a,b)$ contains the numbers strictly between $a$ and $b$. The interval $[a,b]$ also includes both endpoints. A square bracket marks an included endpoint, and a round bracket marks an excluded one. In $(a,b]$, only $b$ is included among the endpoints.

::grafico{assi=0 xmin=-2.8 xmax=4 ymin=-0.8 ymax=0.86 area="0.075;-0.075;-1;2" vettori="-2.45,0,3.65,0" punti="-1,0,vuoto;2,0,pieno" etichette="-1,-0.3,−1;2,-0.3,2;3.55,-0.3,x" titolo="The interval $(-1,2]$ includes $2$. The open circle excludes $-1$"}

A **half-line** represents an interval unbounded in one direction. The constraint $x\le-2$ is written $(-\infty,-2]$. The symbol $-\infty$ shows that the interval extends to the left without a first value. Likewise, $+\infty$ shows that it extends to the right. Always use a round bracket next to either symbol.

::grafico{assi=0 xmin=-6.2 xmax=1.9 ymin=-0.8 ymax=0.86 area="0.075;-0.075;-5.8;-2" vettori="-5.45,0,-5.98,0;-5.5,0,1.6,0" punti="-2,0,pieno" etichette="-2,-0.3,−2;1.5,-0.3,x" titolo="The highlighted part includes $-2$ and continues to the left"}

A set containing one point is written with braces, for example $\{2\}$. A set of this kind results when a lower and upper bound agree and both include equality. If either comparison is strict, the solution is the empty set $\varnothing$.
:::

:::osservazione
The complement of an interval in $\mathbb R$ contains the numbers left outside that interval. For example, the complement of $[-1,3)$ is $(-\infty,-1)\cup[3,+\infty)$. The endpoint $-1$ belongs to the original interval, so the complement excludes it. The endpoint $3$ is outside the original interval, so the complement includes it. Every real number belongs to exactly one of the two sets.
:::

## Simultaneous and alternative conditions

::::teorema{#sistemi titolo="Intersection and union of solution sets"}
Let $A$ and $B$ be the sets of numbers that satisfy two conditions. To satisfy both conditions, take the **intersection** $A\cap B$. To satisfy at least one, take the **union** $A\cup B$.

:::dimostrazione
A value satisfying both conditions belongs to $A$ and belongs to $B$. Those are exactly the requirements for belonging to $A\cap B$. When satisfying at least one condition suffices, the value must belong to at least one of $A$ and $B$, which means it belongs to $A\cup B$. The same reasoning determines whether each endpoint is included.
:::
::::

:::esempio{titolo="Reading common solutions on three aligned number lines"}
The conditions $x\ge1$ and $x<4$ give the intersection $[1,+\infty)\cap(-\infty,4)=[1,4)$. The lower bound includes $1$, which also satisfies the upper bound. The number $4$ meets the lower bound but is excluded by the upper one.

::grafico{assi=0 xmin=-0.9 xmax=6.7 ymin=-0.55 ymax=3.4 vettori="-0.55,2.63,6.3,2.63;-0.55,1.57,6.3,1.57;-0.55,0.51,6.3,0.51" area="2.71;2.55;1;6.05|1.65;1.49;-0.5;4|0.59;0.43;1;4" punti="1,2.63,pieno;4,1.57,vuoto;1,0.51,pieno;4,0.51,vuoto" segmenti="1,0.51,1,2.63;4,0.51,4,1.57" etichette="1,0.07,1;4,0.07,4;2.5,0.93,Intersection" titolo="The first two lines show the separate constraints. The third highlights their common part"}

A double inequality is a pair of simultaneous conditions. From $0\le4-2x<6$, subtract $4$ from all three parts to get $-4\le-2x<2$. Dividing by $-2$ gives $2\ge x>-1$. Written from the lower to the upper bound, this is $-1<x\le2$. The boundary giving $4-2x=0$ stays closed, and the one giving $4-2x=6$ stays open.
:::

:::osservazione
If the lower bound is larger than the upper bound, no number meets both constraints. If the bounds are equal, check that value directly. For example, $[-2,1]\cap[1,4)=\{1\}$ because numbers below $1$ are excluded by the second interval and numbers above $1$ by the first. If the first interval were $[-2,1)$, the only candidate would be excluded. Check that endpoint even when the rest of both intervals has already been drawn on the number line.
:::

:::esempio{titolo="Solutions allowed by at least one condition"}
The conditions $x<-3$ or $x\ge2$ give $(-\infty,-3)\cup[2,+\infty)$. The value $0$ is excluded because neither condition allows it. When two intervals meet, their shared endpoint belongs to the union if at least one interval includes it. For example, $(-\infty,1)\cup[1,4) = (-\infty,4)$.

::grafico{assi=0 xmin=-6.2 xmax=5.3 ymin=-0.8 ymax=0.88 vettori="-5.42,0,-5.98,0;-5.5,0,4.95,0" area="0.075;-0.075;-5.8;-3|0.075;-0.075;2;4.72" punti="-3,0,vuoto;2,0,pieno" etichette="-3,-0.32,−3;2,-0.32,2;4.85,-0.32,x" titolo="The union contains two separate half-lines. The values between $-3$ and $2$ are excluded"}
:::

## Zero coefficient and parameters

:::osservazione{#casi titolo="When only constants remain"}
If collecting like terms cancels the terms in $x$, a numerical comparison remains. From $2x+1<2x+4$ we get $1<4$, true for every $x$ in the domain. From $3x+5\le3x+2$ we get $5\le2$, false for every $x$. A comparison of $0\le0$ is true, whereas $0<0$ is false. The original domain still determines which values can be included after the unknown disappears.
:::

:::esempio{titolo="A coefficient whose sign must be determined"}
In the inequality $a(x-2)\le0$, $x$ is the unknown and $a$ is a **parameter** whose value is fixed for each solution. The sign of $a$ determines the next step.

- If $a>0$, division preserves the sign and gives $x\le2$.
- If $a<0$, division reverses the sign and gives $x\ge2$.
- If $a=0$, the comparison is $0\le0$, so every real number is a solution.

For every $a$, the boundary $x=2$ gives a product of zero and is included. If the comparison were strict, the case $a=0$ would give the empty set. Division by $a$ is valid only after establishing its sign and excluding zero.
:::

:::esempio{titolo="Finding a parameter that makes the constraint true for every real number"}
Find the values of $b$ for which $(b-3)x\le3$ holds for every $x$. For $b=3$, the left-hand side is always zero. For $b\ne3$, choose $x=\dfrac4{b-3}$. With this choice the left-hand side is $4$ and the comparison is false. A single counterexample in $x$ rules out the parameter. The only value of $b$ that makes the comparison true for all real numbers is therefore $3$.
:::

## Comparing two price plans

:::esempio{#confronto-di-tariffe titolo="Fixed charge, usage, and equal cost"}
For an order of $n$ printed copies, plan A costs $5+3n$ euros and plan B costs $11+2n$ euros. The number $n$ is a positive integer. To find when A costs less, write $5+3n<11+2n$. Subtracting $5+2n$ from both sides gives $n<6$. Orders of one through five copies satisfy the constraint.

::grafico{f="5+3*x;11+2*x" xmin=-0.5 xmax=9.7 ymin=3.2 ymax=34 nomi="n,C" legenda="A;B" punti="1,8,pieno;5,20,pieno;6,23,pieno;7,25,pieno" segmenti="6,3.5,6,23" titolo="Both plans cost 23 euros at six copies. Below that point A is cheaper"}

At the boundary $n=6$, the two prices agree at $23$ euros. At $n=5$, A costs $20$ euros and B costs $21$ euros. At $n=7$, A costs $26$ euros and B costs $25$ euros. The lower initial charge favours A for small orders. The cost per additional copy favours B as the order grows.
:::

## Thresholds and whole numbers

:::esempio{#problemi titolo="Checking maxima and minima in a whole-number domain"}
A parcel may weigh at most $41\,\mathrm{kg}$. Its packaging weighs $4\,\mathrm{kg}$ and each item weighs $3.5\,\mathrm{kg}$. Let $n$ be the number of items. Then $n\in\{0,1,2,\ldots\}$ and $4+3.5n\le41$. The real-valued bound is $n\le\dfrac{74}{7}$, between $10$ and $11$. At most ten items fit. Ten items bring the weight to $39\,\mathrm{kg}$, and eleven bring it to $42.5\,\mathrm{kg}$.

An order needs more than $20$ pencils and at most $36$ pencils, in full packs of $4$. The constraint $20<4n\le36$ is equivalent to $5<n\le9$. Since $n$ counts packs, the solutions are exactly $6,7,8,9$. The minimum is $6$, since five packs contain exactly $20$ pencils. The maximum is $9$, since nine packs contain $36$ pencils.

::grafico{assi=0 xmin=3.2 xmax=10.8 ymin=-0.95 ymax=1.44 vettori="3.5,0,10.5,0" area="0.075;-0.075;5;9" punti="5,0,vuoto;6,0,pieno;7,0,pieno;8,0,pieno;9,0,pieno" etichette="5,-0.36,5;6,-0.36,6;7,-0.36,7;8,-0.36,8;9,-0.36,9;10.38,-0.36,n" titolo="The highlighted interval contains the real solutions. The filled points show the allowed numbers of packs"}

Check the boundary and the neighbouring integer to verify a maximum or minimum. When the boundary is already an integer, the inequality sign determines whether it is allowed. For example, $n<9$ allows at most $8$, while $n\le9$ also allows $9$.
:::

:::esempio{titolo="Checking a budget and a capacity limit together"}
A workshop needs at least four participants. The workbench has six places, and the cost is a fixed $6$ euros plus $4$ per person. With a budget of $34$ euros, a group of $n$ can pay only when $6+4n\le34$, or $n\le7$. The number of places sets the tighter upper bound. The three constraints allow groups of four, five, or six. A group of seven would cost exactly $34$ euros, but it would need an extra place.
:::

:::esempio{titolo="Counting increments from the first term"}
An activity awards $5$ points in the first round and $3$ more points in each subsequent round than in the previous one. The score in round $n$, for a positive integer $n$, is $5+3(n-1)$. There are $n-1$ increases because the first round already starts at $5$. To find when the score exceeds $20$, solve $5+3(n-1)>20$, giving $n>6$. The sixth round gives exactly $20$ points. The seventh gives $23$, so it is the first round to satisfy the condition.
:::
