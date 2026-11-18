---
titolo: "Linear equations"
sommario: "Equivalent transformations, standard form, domains, and choosing the unknown in word problems."
---

## The unknown, the domain, and equivalent transformations

:::definizione{titolo="Equations and solution sets"}
An equation asks for which values of the unknown $x$ the expressions on the left and right of the equals sign have the same value. These are the two **sides** of the equation. First specify the domain $D$, the set of values for which both sides are defined and in which we seek a solution. For example, if $D=\mathbb R$, the value $\dfrac52$ solves $2x=5$. If only integers are permitted, the same equation has no solution.
:::

::::teorema{#equivalenza titolo="Reversible transformations"}
Two equations are **equivalent** if they have the same solution set. In a fixed domain, we may add the same expression to both sides, provided it is defined throughout that domain. We may also multiply both sides by the same nonzero number.
:::dimostrazione
For every $x\in D$, adding $H(x)$ to both sides preserves the equality. The reverse operation subtracts $H(x)$. Similarly, multiplying both sides by $c\ne0$ preserves the equality, and dividing by $c$ reverses the step. Each transformation works in both directions, so it also preserves the values at which the two sides differ.
:::
::::

:::esempio{titolo="Making the same change on both pans"}
If two identical boxes and three units weigh eleven units in all, the weight of one box satisfies $2x+3=11$. We can remove three units from each pan in the diagram. Two boxes remain on one side and eight units on the other. Halving both weights gives $x=4$, and indeed $2\cdot4+3=11$. Removing three units from just one pan would upset the balance.

::grafico{xmin=-5.2 xmax=5.2 ymin=-0.45 ymax=3.75 assi=0 uguale=1 poligoni="0,1.48 -0.75,0 0.75,0;-4.2,1.28 -1.1,1.28 -1.28,1.04 -4.02,1.04;1.1,1.28 4.2,1.28 4.02,1.04 1.28,1.04;-3.92,1.28 -2.37,1.28 -2.37,2.01 -3.92,2.01;-2.16,1.28 -1.42,1.28 -1.42,1.82 -2.16,1.82;2.04,1.28 3.33,1.28 3.33,2.15 2.04,2.15" linee="-2.65,2.85 2.65,2.85;-2.65,2.85 -4.2,1.28;-2.65,2.85 -1.1,1.28;2.65,2.85 1.1,1.28;2.65,2.85 4.2,1.28;0,1.48 0,2.85" etichette="-3.35,1.54,2x;-1.98,1.46,3;2.48,1.57,11" titolo="The balance represents the equation 2x + 3 = 11"}
:::

:::attenzione{titolo="A step that loses solutions"}
In $x(x-2)=0$, we can divide by $x$ only when $x\ne0$. This would leave $x-2=0$, giving $x=2$. The original equation also has the solution $x=0$. To recover it, check the case that was excluded before dividing. Similarly, multiplying an equation by zero gives $0=0$ whatever its two sides were, and the step cannot be reversed.
:::

:::osservazione{titolo="The domain is part of the equation"}
Consider $x=0$ and try adding $\dfrac1x$ to both sides. The new equation is defined only for $x\ne0$: the value that solved the original equation is now excluded. An expression defined throughout the domain, such as $x-1$, causes no such problem. It gives $2x-1=x-1$, and subtracting $x-1$ returns us to $x=0$.
:::

## Standard form and graphical interpretation

::::teorema{#lineari titolo="Reducing an equation to ax = b"}
An equation with sides $\alpha x+\beta$ and $\gamma x+\delta$ reduces to $ax=b$, where $a=\alpha-\gamma$ and $b=\delta-\beta$. If $a\ne0$, the only candidate is $x=\dfrac ba$. It is a solution if it belongs to the domain.
:::dimostrazione
Subtract $\gamma x$ and $\beta$ from both sides to leave $(\alpha-\gamma)x=\delta-\beta$. When $a\ne0$, division by $a$ is allowed and gives a single equation $x=\dfrac ba$. Each step preserves the solution set. The formula also covers $b=0$, which gives $x=0$ if the coefficient is nonzero.
:::
::::

:::esempio{titolo="Equal vertical coordinates at the intersection"}
Consider $3x-2=x+4$. Subtracting $x$ and adding $2$ to both sides leaves $2x=6$, so $x=3$. Checking in the original equation gives $3\cdot3-2=7$ and $3+4=7$. The graphs of $y=3x-2$ and $y=x+4$ intersect at $(3,7)$. The horizontal coordinate is the solution, and the vertical coordinate is the common value of the two sides.

::grafico{f="3*x-2;x+4" xmin=-1 xmax=6 ymin=-4 ymax=15 punti="3,7,pieno,P" segmenti="3,0,3,7;0,7,3,7" titolo="At P the horizontal coordinate is the solution and the vertical coordinate is the common value"}
:::

## Parentheses and signs

:::esempio{#parentesi titolo="Expanding the side with a negative multiplier"}
To solve $-3(2x-5)+4=2(x+1)+1$, distribute the factor $-3$ to $2x$ and to $-5$. The product with $-5$ is positive. On the right, combine the $2$ from the expansion with the constant $1$.

$$
\begin{aligned}
-3(2x-5)+4&=2(x+1)+1\\[6pt]
-6x+19&=2x+3\\[6pt]
16&=8x\\[6pt]
x&=2.
\end{aligned}
$$

The third line adds $6x$ and subtracts $3$ on both sides. When substituted into the original equation, the expression in parentheses on the left is $-1$, and the whole side is $-3\cdot(-1)+4=7$. On the right, the value is $2\cdot3+1=7$. To the left of the intersection, the graph of the left-hand side is higher because its slope is negative and the other line has positive slope.

::grafico{f="-6*x+19;2*x+3" xmin=-0.2 xmax=4.2 ymin=-6 ymax=20 punti="2,7,pieno" titolo="The two sides have the same value at x = 2 and switch order across that point"}
:::

:::osservazione{titolo="Keeping a group intact"}
In $4(x-3)=2(x-3)+10$, notice the common group $x-3$. Subtracting $2(x-3)$ from both sides leaves $2(x-3)=10$, giving $x-3=5$ and $x=8$. Expanding both sets of parentheses leads to the same answer. The first method avoids having to check two negative signs in the expansions.
:::

:::esempio{titolo="Subtracting the entire value of a group"}
To solve $11-[2(x+1)-3(x-2)]=17$, we can first call the value in brackets $G$. From $11-G=17$, we get $G=-6$. Expanding the group gives $G=2x+2-3x+6=8-x$, so $8-x=-6$ and $x=14$. To check, $2(x+1)$ equals $30$ and $3(x-2)$ equals $36$. The group is negative, so subtracting it increases the starting value $11$ to $17$. Writing $G=-6$ first predicts this sign.
:::

## Denominators and domain restrictions

::::teorema{#frazioni titolo="Clearing denominators"}
We may multiply both sides by a common multiple of the denominators when it is defined and nonzero at every $x$ in the original domain. The result is an equivalent equation in the same domain.
:::dimostrazione
Write the common multiple as $M(x)$. At every allowed value, dividing by $M(x)$ reverses multiplication by $M(x)$. For numerical denominators, choose any positive common multiple. For denominators containing the unknown, first exclude the values that make them zero and keep those restrictions even after multiplying clears the fractions.
:::
::::

:::esempio{titolo="Multiplying every term"}
In $\dfrac{x-1}{4}-\dfrac{x+2}{6}=1$, the least common multiple is $12$. The factor $12$ must also multiply the term $1$ on the right.

$$
\begin{aligned}
3(x-1)-2(x+2)&=12\\[6pt]
3x-3-2x-4&=12\\[6pt]
x&=19.
\end{aligned}
$$

Checking in the original equation gives $\dfrac{18}{4}-\dfrac{21}{6}=\dfrac92-\dfrac72=1$. The minus sign in front of the second fraction applies to both terms of $2(x+2)$.
:::

:::esempio{titolo="An allowed candidate and an excluded value"}
In $\dfrac{x-3}{x+1}=\dfrac13$, first exclude $x=-1$. Multiplying by $3(x+1)$ leaves $3x-9=x+1$, so $2x=10$ and $x=5$. The candidate belongs to the domain, and substitution gives $\dfrac{5-3}{5+1}=\dfrac13$.

::grafico{xmin=-3 xmax=7 ymin=-0.7 ymax=0.75 uguale=1 assi=0 vettori="-2.75,0,6.61,0" punti="-1,0,vuoto;5,0,pieno" etichette="-1.15,-0.34,−1;4.88,-0.34,5;6.7,0.13,x" titolo="The open circle marks the excluded value and the filled point marks the solution"}
:::

:::attenzione{titolo="Simplifying preserves the original domain"}
In $\dfrac{x-3}{x-3}=0$, the domain excludes $x=3$. The fraction equals $1$ for every allowed $x$, so the equation has no solution. Multiplying the same equation by $x-3$ gives the candidate $x=3$, which the domain excludes. The diagram shows the left side with a missing point and the right side as the line $y=0$.

::grafico{f="1;0" xmin=-1 xmax=6 ymin=-0.75 ymax=1.85 punti="3,1,vuoto" titolo="The left side equals 1 except at x = 3 and never reaches height zero"}
:::

:::esempio{titolo="Cross-multiplication in a proportion"}
In $\dfrac{x}{x+2}=\dfrac34$, the variable denominator requires $x\ne-2$. Multiplying both sides by $4(x+2)$ gives $4x=3(x+2)$. This step is reversible in the allowed domain, so $x=6$ is the only candidate. The check $\dfrac6{6+2}=\dfrac68=\dfrac34$ verifies both that the expression is defined and that the sides are equal. The term cross-multiplication describes what this multiplication produces. Excluding the zeros of the denominators justifies the step.
:::

## One solution, no solutions, or an identity

::::teorema{#classificazione titolo="The three outcomes of reduction"}
After equivalent transformations in domain $D$, the form $ax=b$ has at most one solution if $a\ne0$. If $a=0$ and $b\ne0$, there is no solution. If $a=b=0$, every element of $D$ is a solution, so the equation is an identity in $D$.
:::dimostrazione
In the first case, the only candidate is $\dfrac ba$, which solves the equation if it belongs to $D$. When $a=0$, the product on the left is zero for every $x$. So the equality is always false if $b\ne0$ and always true if $b=0$. Equivalence carries these outcomes back to the original equation.
:::
::::

:::esempio{titolo="Parallel or coincident lines"}
In $2(x+1)=2x+3$, both sides have coefficient $2$ but different constant terms. This reduces to $2=3$, and the corresponding lines stay one unit apart vertically. In $2(x+1)=2x+2$, the right side equals the expansion of the left. The lines coincide, so both sides have the same value at every horizontal coordinate.

::grafico{f="2*x+2;2*x+3" xmin=-3.2 xmax=3 ymin=-4.5 ymax=8.8 punti="0,2,pieno;0,3,pieno" titolo="The two sides of an equation with no solution give parallel lines"}

::grafico{f="2*x+2" xmin=-3.2 xmax=3 ymin=-4.5 ymax=8.8 punti="-1,0,pieno;0,2,pieno;1,4,pieno" titolo="For an identity, one line represents both sides"}
:::

:::osservazione{titolo="Two distinct solutions with linear sides"}
If an equality between two linear sides holds at two different values of $x$, their difference has the form $ax-b$ and vanishes at two points. The case $a\ne0$ would admit just one zero. Hence $a=0$, and since there is at least one solution we must also have $b=0$. The equality is an identity in its domain. The assumption on the sides matters: $x^2=x$ holds at $x=0$ and $x=1$, but at $x=2$ we get $4\ne2$.
:::

## Equations with a parameter

:::esempio{#parametri titolo="Start with the value that makes the coefficient zero"}
In $mx+4=2x+1$, the unknown is $x$ and $m$ is a fixed number whose effect we want to study. The reduced form is $(m-2)x=-3$.

- If $m=2$, we get $0x=-3$, with no solutions.
- If $m\ne2$, the only solution is $x=\dfrac{-3}{m-2}$.

For example, if $m=1$, the coefficient is $-1$ and the solution is $x=3$. The two original sides both equal $7$. Dividing by $m-2$ at the start would prevent us from classifying the case $m=2$.
:::

:::esempio{titolo="A special case where every value is a solution"}
In $(m-2)x=m-2$, both the coefficient and the constant vanish at $m=2$. That gives $0x=0$ and every real number solves the equation. If $m\ne2$, we can divide by $m-2$ and obtain $x=1$. Substituting $1$ gives $m-2$ on both sides for every $m$, but the solution is unique only when $m\ne2$.
:::

:::esempio{titolo="Choosing the parameter that gives a prescribed solution"}
Find $m$ so that $x=2$ solves $(m+1)x=3m-1$. Substituting the prescribed value gives the equation $2m+2=3m-1$, whose solution is $m=3$. With that parameter, the original equation is $4x=8$, so the prescribed solution is indeed unique. For the parameter $m=-1$, we would get $0x=-4$, with no solution. Identify which letter is to be found at each step: in the first substitution $x$ is known, and in the final check $m$ is known.
:::

## Modelling and checking the conditions of the problem

:::esempio{#problemi titolo="An algebraic solution must be possible in context"}
A workshop charges $8$ euros to register and $3$ euros for each activity. If $n$ is the number of activities, the cost is $8+3n$ euros and the domain consists of the nonnegative integers. A total of $26$ euros gives $3n=18$, so $n=6$. The check is $8+3\cdot6=26$.

With a total of $25$ euros, the same formula gives $n=\dfrac{17}{3}$. This is between $5$ and $6$, but only whole activities can be bought. Five activities cost $23$ euros and six cost $26$ euros. There is no way to spend exactly $25$ euros.

::grafico{xmin=3.25 xmax=7.55 ymin=17.2 ymax=32 assi=0 linee="3.65,18.25 7.3,18.25;3.65,18.25 3.65,31.25;3.65,18.95 7.25,29.75;4,18.12 4,18.38;5,18.12 5,18.38;6,18.12 6,18.38;7,18.12 7,18.38" segmenti="3.65,25,7.25,25" punti="4,20,pieno;5,23,pieno;6,26,pieno;7,29,pieno;5.666666667,25,vuoto" etichette="3.32,24.91,25;3.52,31.36,C;7.36,18.3,n;3.94,17.62,4;4.94,17.62,5;5.94,17.62,6;6.94,17.62,7" titolo="The line for the cost reaches 25 between two allowed counts"}
:::

:::esempio{titolo="Consecutive integers and parity"}
If $n$ is the smaller of two consecutive integers, the other is $n+1$. Requiring a sum of $19$ gives $2n+1=19$, hence $n=9$. The integers are $9$ and $10$. A sum of $20$ would give $n=\dfrac{19}{2}$, which is not an integer. More generally, $2n+1$ is always odd for integer $n$, so an even sum can be ruled out before solving.
:::

:::esempio{titolo="Checking when a model is valid"}
Two containers initially hold $3$ and $15$ litres. The first receives $2$ litres per minute and the second loses $1$ litre per minute. While both flows continue, after $t$ minutes the volumes are $3+2t$ and $15-t$. Equating them gives $3t=12$, so $t=4$ and both volumes are $11$ litres. If the first container has capacity $10$ litres, its inflow must stop at $t=\dfrac72$. Then $t=4$ is outside the interval in which both expressions apply.
:::

## Rearranging formulas

:::esempio{#formule titolo="Finding one side from the perimeter"}
The perimeter $P$ of a rectangle of width $b$ and height $h$ satisfies $P=2b+2h$. If $P$ and $b$ are known, subtract $2b$ from both sides and divide by $2$.

$$
2h=P-2b,\qquad h=\frac P2-b.
$$

With $P=30\,\mathrm{cm}$ and $b=6\,\mathrm{cm}$, this gives $h=9\,\mathrm{cm}$. The perimeter calculated from both sides is $2(6+9)=30$ centimetres. The model requires $b>0$ and $P>2b$, because the height must be positive. If $P=2b$, the formula gives a height of zero, which cannot describe a rectangle.

::grafico{xmin=-1.5 xmax=7.45 ymin=-1.03 ymax=10.28 uguale=1 assi=0 poligoni="0,0 6,0 6,9 0,9" etichette="2.8,-0.58,b;-0.75,4.4,h;2.29,9.45,6 cm;6.3,4.4,9 cm" titolo="The half-perimeter is the width plus the height"}
:::

:::esempio{titolo="Finding the time from a measurement"}
A tank holds $V_0$ litres when a tap is opened. While the constant flow rate $q$ continues, the volume at time $t$ is $V=V_0+qt$, with $t$ in minutes and $q$ in litres per minute. The difference $V-V_0$ measures the added water. If $q>0$, the time needed to reach volume $V$ is

$$
t=\frac{V-V_0}{q}.
$$

For $V_0=5$, $q=3$, and $V=17$, we get $t=4$ minutes and the check is $5+3\cdot4=17$. Dividing only the final volume by the flow rate would give the time required to fill the tank from empty. If $q=0$, the volume stays at $V_0$: any other volume is unreachable, and observing $V_0$ does not determine a unique time.
:::

:::osservazione{titolo="Proportional changes"}
In $V=V_0+qt$, the ratio $\dfrac Vt$ depends on $t$ if $V_0\ne0$. Use instead the difference between two measurements $V_1$ and $V_2$ made at times $t_1$ and $t_2$. Subtracting the two formulas gives $V_2-V_1=q(t_2-t_1)$. If the times differ, divide the change in volume by the elapsed time to find $q$. For example, an increase of $9$ litres in $3$ minutes means $3$ litres per minute, whatever the initial volume. Once the flow rate is known, either measurement gives the initial volume, for example $V_0=V_1-qt_1$.
:::
