---
titolo: "Linear equations"
sommario: "Equivalent transformations, standard form, domains, and choosing the unknown in word problems."
---

## The unknown, the domain, and equivalent transformations

:::definizione{titolo="Equations and solution sets"}
An **equation** is an equality between two expressions containing a letter, usually $x$, that stands for a number to be found. This letter is called the **unknown**. The expression to the left of the $=$ sign is the left **side**, and the one to the right is the right side. In $2x+3=11$ the left side is $2x+3$ and the right side is $11$. The notation $2x$ means the product $2\cdot x$.

A **solution** is a number that, substituted for $x$, gives both sides the same value. The number $4$ is a solution of $2x+3=11$, because $2\cdot4+3=11$. Solving an equation means finding all its solutions. They form the **solution set**, written $S$. For the equation above we write $S=\{4\}$. If no number is a solution we write $S=\varnothing$, where $\varnothing$ is the symbol for the empty set.

An equation is **linear** (or of the first degree) when, once the calculations are carried out, the unknown appears only multiplied by a number, as in $2x+3=11$. A linear equation does not contain $x^2$.

Before solving, we specify the **domain** $D$, the set of values in which we seek a solution and for which both sides are defined, that is, can be calculated. The notation $x\in D$ is read "$x$ belongs to $D$". The symbol $\mathbb R$ denotes the set of real numbers, that is, all the numbers that have a place on the number line: the integers, the fractions, and numbers such as $\sqrt2$. For example, if $D=\mathbb R$, the value $\dfrac52$ solves $2x=5$, because $2\cdot\dfrac52=5$. If only integers are permitted, the same equation has no solution, because $\dfrac52=2.5$ is not an integer.
:::

::::teorema{#equivalenza titolo="Reversible transformations"}
Two equations are **equivalent** if they have the same solution set. For example, $2x+3=11$ and $2x=8$ are equivalent, because each has the number $4$ as its only solution. We write $2x+3=11\iff2x=8$, where the symbol $\iff$ is read "if and only if".

In a fixed domain, an equation is turned into an equivalent one in two ways, called the **principles of equivalence**.

- First principle: we add the same expression to both sides, provided it is defined throughout that domain. Subtracting an expression is the same as adding its opposite, that is, the same expression with its sign changed: the opposite of $3$ is $-3$.
- Second principle: we multiply both sides by the same nonzero number. Dividing by $2$ is the same as multiplying by $\dfrac12$.
:::dimostrazione
Write $H(x)$ for the expression that is added and $c$ for the number we multiply by, with $c\ne0$. For every $x\in D$, adding $H(x)$ to two equal numbers gives two equal numbers, so adding $H(x)$ to both sides preserves the equality. The reverse operation subtracts $H(x)$. Similarly, multiplying both sides by $c\ne0$ preserves the equality, and dividing by $c$ reverses the step.

Each transformation works in both directions. If the two sides were equal at some $x$ after the transformation, the reverse step would make them equal before it as well. So the transformation also preserves the values at which the two sides differ, and the two equations have the same solutions.
:::
::::

:::esempio{titolo="Making the same change on both pans"}
A two-pan balance is level when the weights on the two pans are equal. In the diagram the left pan carries two identical boxes, labelled together as $2x$, and a weight of three units. The right pan carries eleven units. The weight $x$ of one box therefore satisfies $2x+3=11$.

We remove three units from each pan. Two boxes remain on one side and eight units on the other, that is, $2x=8$. Halving both weights gives $x=4$, and indeed $2\cdot4+3=11$.

Removing three units from just one pan would upset the balance, because $8$ units would remain on the left and $11$ on the right.

::grafico{xmin=-5.2 xmax=5.2 ymin=-0.45 ymax=3.75 assi=0 uguale=1 poligoni="0,1.48 -0.75,0 0.75,0;-4.2,1.28 -1.1,1.28 -1.28,1.04 -4.02,1.04;1.1,1.28 4.2,1.28 4.02,1.04 1.28,1.04;-3.92,1.28 -2.37,1.28 -2.37,2.01 -3.92,2.01;-2.16,1.28 -1.42,1.28 -1.42,1.82 -2.16,1.82;2.04,1.28 3.33,1.28 3.33,2.15 2.04,2.15" linee="-2.65,2.85 2.65,2.85;-2.65,2.85 -4.2,1.28;-2.65,2.85 -1.1,1.28;2.65,2.85 1.1,1.28;2.65,2.85 4.2,1.28;0,1.48 0,2.85" etichette="-3.35,1.54,2x;-1.98,1.46,3;2.48,1.57,11" titolo="The balance represents the equation 2x + 3 = 11"}
:::

:::attenzione{titolo="A step that loses solutions"}
A product equals zero when at least one of its factors equals zero. The equation $x(x-2)=0$ therefore has two solutions: $x=0$, which makes the first factor zero, and $x=2$, which makes the second factor zero.

In $x(x-2)=0$, we can divide by $x$ only when $x\ne0$, because division by zero is not defined. After dividing we would be left with $x-2=0$, which gives only $x=2$. The original equation also has the solution $x=0$. To recover it, we check the case that was excluded before dividing.

Similarly, multiplying an equation by zero gives $0=0$ whatever its two sides were. Both $2x=5$ and $2x=7$ lead to the same equality $0=0$, so the step cannot be reversed.
:::

:::osservazione{titolo="The domain is part of the equation"}
The only solution of $x=0$ is the number $0$. Adding $\dfrac1x$ to both sides gives

$$
x+\frac1x=\frac1x.
$$

The fraction $\dfrac1x$ is not defined at $x=0$, because we cannot divide by zero. The new equation is therefore defined only for $x\ne0$, and the value that solved the original equation is now excluded. The two equations are not equivalent.

An expression defined throughout the domain, such as $x-1$, causes no such problem. Adding $x-1$ to both sides of $x=0$ gives $2x-1=x-1$, and subtracting $x-1$ returns us to $x=0$.
:::

## Standard form and graphical interpretation

::::teorema{#lineari titolo="Reducing an equation to ax = b"}
In $5x+1$ the number $5$, which multiplies the unknown, is the **coefficient** of $x$. The number $1$, which is not multiplied by $x$, is the **constant term**. An expression of this kind is called **linear**.

In the equation $5x+1=2x+7$ we subtract $2x$ and $1$ from both sides and obtain $3x=6$. Here $3=5-2$ and $6=7-1$. Dividing by $3$ gives $x=2$, and indeed $5\cdot2+1=11$ and $2\cdot2+7=11$.

With letters, the four numbers are written $\alpha$, $\beta$, $\gamma$, $\delta$ (Greek letters read alpha, beta, gamma, delta). An equation with sides $\alpha x+\beta$ and $\gamma x+\delta$ reduces to $ax=b$, where $a=\alpha-\gamma$ and $b=\delta-\beta$. The form $ax=b$ is the **standard form** of the equation. If $a\ne0$, the only candidate is $x=\dfrac ba$. A candidate is the value produced by the calculations before the domain has been checked. It is a solution if it belongs to the domain.
:::dimostrazione
Subtract $\gamma x$ and $\beta$ from both sides.

$$
\begin{aligned}
\alpha x+\beta&=\gamma x+\delta\\[6pt]
\alpha x-\gamma x+\beta&=\delta\\[6pt]
\alpha x-\gamma x&=\delta-\beta\\[6pt]
(\alpha-\gamma)x&=\delta-\beta.
\end{aligned}
$$

In the last line $x$ has been factored out, which gives $ax=b$. When $a\ne0$, division by $a$ is allowed by the second principle of equivalence and gives a single equation $x=\dfrac ba$. Each step preserves the solution set. The formula also covers $b=0$, which gives $x=0$ if the coefficient is nonzero.
:::
::::

:::esempio{titolo="Equal vertical coordinates at the intersection"}
Consider $3x-2=x+4$. Subtracting $x$ from both sides leaves $2x-2=4$. Adding $2$ to both sides leaves $2x=6$, so $x=3$. Checking in the original equation gives $3\cdot3-2=7$ and $3+4=7$.

In the coordinate plane every point has two coordinates: the **horizontal coordinate** $x$, read on the horizontal axis, and the **vertical coordinate** $y$, read on the vertical axis. The graphs of $y=3x-2$ and $y=x+4$ are two straight lines. Each point of either line has as vertical coordinate the value of the corresponding side calculated at the horizontal coordinate.

The two lines intersect at the point $P$ with coordinates $(3,7)$. The horizontal coordinate $3$ is the solution, and the vertical coordinate $7$ is the common value of the two sides. In the diagram the two segments starting from $P$ reach the axes at $3$ and at $7$.

::grafico{f="3*x-2;x+4" xmin=-1 xmax=6 ymin=-4 ymax=15 punti="3,7,pieno,P" segmenti="3,0,3,7;0,7,3,7" titolo="At P the horizontal coordinate is the solution and the vertical coordinate is the common value"}
:::

## Brackets and signs

:::esempio{#parentesi titolo="Expanding the side with a negative multiplier"}
By the distributive property, a number that multiplies a sum multiplies each term of the sum: $2(x+1)=2\cdot x+2\cdot1=2x+2$.

To solve $-3(2x-5)+4=2(x+1)+1$, the factor $-3$ is distributed to $2x$ and to $-5$. The product with $-5$ is positive, because the product of two negative numbers is positive: $(-3)\cdot(-5)=+15$. On the right, the $2$ from the expansion is combined with the constant $1$.

$$
\begin{aligned}
-3(2x-5)+4&=2(x+1)+1\\[6pt]
-6x+15+4&=2x+2+1\\[6pt]
-6x+19&=2x+3\\[6pt]
16&=8x\\[6pt]
x&=2.
\end{aligned}
$$

The fourth line adds $6x$ and subtracts $3$ on both sides.

When $x=2$ is substituted into the original equation, the expression $2x-5$ is $-1$, and the left side is $-3\cdot(-1)+4=7$. On the right, $x+1$ is $3$ and the value is $2\cdot3+1=7$.

In the graphs of $y=-6x+19$ and $y=2x+3$, the coefficient of $x$ is called the **slope** of the line. With a positive slope the vertical coordinate increases as $x$ increases, and with a negative slope it decreases. To the left of the intersection, the graph of the left-hand side is higher because its slope is negative and the other line has positive slope. For example, at $x=0$ the two sides are $19$ and $3$. To the right of the intersection the order is reversed, and at $x=3$ they are $1$ and $9$.

::grafico{f="-6*x+19;2*x+3" xmin=-0.2 xmax=4.2 ymin=-6 ymax=20 punti="2,7,pieno" titolo="The two sides have the same value at x = 2 and switch order across that point"}
:::

:::osservazione{titolo="Keeping a group intact"}
In $4(x-3)=2(x-3)+10$, the expression $x-3$ appears on both sides and is treated as a single group. Subtracting $2(x-3)$ from both sides leaves $2(x-3)=10$, because four groups minus two groups make two groups. Dividing by $2$ gives $x-3=5$, and adding $3$ gives $x=8$.

Expanding both products leads to the same answer, because $4x-12=2x-6+10$ gives $2x=16$. In the first method the products $4\cdot(-3)$ and $2\cdot(-3)$ do not appear, so there are no two negative signs to check in the expansions.
:::

:::esempio{titolo="Subtracting the entire value of a group"}
In $11-[2(x+1)-3(x-2)]=17$, the square brackets enclose a group that is subtracted as a whole from $11$. Call the value of this group $G$. The equation becomes $11-G=17$. Subtracting $11$ from both sides gives $-G=6$, and multiplying by $-1$ gives $G=-6$.

Expanding the group gives

$$
G=2x+2-3x+6=8-x,
$$

where $+6$ is the product $(-3)\cdot(-2)$. So $8-x=-6$. Subtracting $8$ gives $-x=-14$, and multiplying by $-1$ gives $x=14$.

To check, $2(x+1)$ equals $2\cdot15=30$ and $3(x-2)$ equals $3\cdot12=36$. The group equals $30-36=-6$, so it is negative. Subtracting a negative number is the same as adding its opposite: $11-(-6)=11+6=17$. Subtracting the group therefore increases the starting value $11$ to $17$. Since $G=-6$ was written first, the sign of the group is known before $x$ is calculated.
:::

## Denominators and domain restrictions

::::teorema{#frazioni titolo="Clearing denominators"}
In a fraction the **numerator** is the number, or the expression, above the line, and the **denominator** is the one below the line. In $\dfrac{x-1}{4}$ the numerator is $x-1$ and the denominator is $4$. A **common multiple** of two denominators is a number divisible by both: $12$ and $24$ are common multiples of $4$ and $6$. The smallest one, here $12$, is the **least common multiple**, abbreviated LCM.

We may multiply both sides by a common multiple of the denominators when it is defined and nonzero at every $x$ in the original domain. The result is an equivalent equation in the same domain, in which the fractions no longer appear.

An equation with the unknown in a denominator is called a **rational equation**. A fraction with denominator zero is not defined. For this reason, in a rational equation, the values of $x$ that make a denominator zero are excluded from the domain. The conditions that exclude them, such as $x\ne-1$, are the **domain restrictions**. The domain made of all real numbers except $-1$ is written $D=\mathbb R\setminus\{-1\}$.
:::dimostrazione
Write the common multiple as $M(x)$. At every allowed value, $M(x)$ is a nonzero number. Dividing by $M(x)$ therefore reverses multiplication by $M(x)$, as in the second principle of equivalence. For numerical denominators, any positive common multiple will do. For denominators containing the unknown, the values that make them zero are excluded first, and those restrictions are kept even after multiplying clears the fractions.
:::
::::

:::esempio{titolo="Multiplying every term"}
In $\dfrac{x-1}{4}-\dfrac{x+2}{6}=1$ the denominators are $4$ and $6$, and their least common multiple is $12$. The factor $12$ multiplies every term of the equation, including the term $1$ on the right.

Since $12\div4=3$ and $12\div6=2$, the two fractions become $3(x-1)$ and $2(x+2)$.

$$
\begin{aligned}
3(x-1)-2(x+2)&=12\\[6pt]
3x-3-2x-4&=12\\[6pt]
x-7&=12\\[6pt]
x&=19.
\end{aligned}
$$

The minus sign in front of the second fraction applies to both terms of $2(x+2)$.

Checking in the original equation with $x=19$ gives $\dfrac{18}{4}-\dfrac{21}{6}=\dfrac92-\dfrac72=\dfrac22=1$.
:::

:::esempio{titolo="An allowed candidate and an excluded value"}
In $\dfrac{x-3}{x+1}=\dfrac13$, the denominator $x+1$ equals zero at $x=-1$. We exclude $x=-1$ at once, so the domain is $D=\mathbb R\setminus\{-1\}$. Multiplying by the common multiple $3(x+1)$ cancels $x+1$ on the left and $3$ on the right.

$$
\begin{aligned}
3(x-3)&=x+1\\[6pt]
3x-9&=x+1\\[6pt]
2x&=10\\[6pt]
x&=5.
\end{aligned}
$$

The third line subtracts $x$ and adds $9$ on both sides. The candidate $5$ is different from $-1$, so it belongs to the domain, and substitution gives $\dfrac{5-3}{5+1}=\dfrac26=\dfrac13$. The diagram shows the two values on the number line.

::grafico{xmin=-3 xmax=7 ymin=-0.7 ymax=0.75 uguale=1 assi=0 vettori="-2.75,0,6.61,0" punti="-1,0,vuoto;5,0,pieno" etichette="-1.15,-0.34,−1;4.88,-0.34,5;6.7,0.13,x" titolo="The open circle marks the excluded value and the filled point marks the solution"}
:::

:::attenzione{titolo="Simplifying preserves the original domain"}
In $\dfrac{x-3}{x-3}=0$, the denominator equals zero at $x=3$, so the domain excludes $x=3$. At every other value the fraction divides a nonzero number by itself, so it equals $1$ for every allowed $x$. Since $1\ne0$, no value in the domain makes the two sides equal. The equation therefore has no solution and $S=\varnothing$. An equation with no solution is also called **impossible**.

Multiplying the same equation by $x-3$ gives $x-3=0$ and the candidate $x=3$, which the domain excludes.

The diagram shows the left side, that is, the horizontal line $y=1$ with a missing point at $x=3$, and the right side as the line $y=0$.

::grafico{f="1;0" xmin=-1 xmax=6 ymin=-0.75 ymax=1.85 punti="3,1,vuoto" titolo="The left side equals 1 except at x = 3 and never reaches height zero"}
:::

:::esempio{titolo="Cross-multiplication in a proportion"}
A **proportion** is an equality between two ratios, that is, between two fractions. The notation $x:4=8:2$ has the same meaning as $\dfrac x4=\dfrac82$.

In $\dfrac{x}{x+2}=\dfrac34$, the variable denominator requires $x\ne-2$. Multiplying both sides by $4(x+2)$ gives $4x=3(x+2)$, because $x+2$ cancels on the left and $4$ cancels on the right. Expanding gives $4x=3x+6$, and subtracting $3x$ gives $x=6$. This step is reversible in the allowed domain, so $x=6$ is the only candidate. The check $\dfrac6{6+2}=\dfrac68=\dfrac34$ verifies both that the expression is defined, because the denominator $8$ is nonzero, and that the sides are equal.

The term cross-multiplication describes what this multiplication produces, in which the numerator of each fraction is multiplied by the denominator of the other. The step is justified once the zeros of the denominators have been excluded, because only then is the factor $4(x+2)$ nonzero.
:::

## One solution, no solutions, or an identity

::::teorema{#classificazione titolo="The three outcomes of reduction"}
Three equations already in reduced form show the three outcomes.

- $2x=6$ has the single solution $x=3$. An equation with exactly one solution is called **determinate**.
- $0x=5$ has no solutions, because $0x$ equals zero for every $x$ and $0\ne5$. An equation with no solutions is called **impossible**.
- $0x=0$ is true for every $x$. An equality that is true at every value of the domain is called an **identity**.

In general, after equivalent transformations in domain $D$, the form $ax=b$ has at most one solution if $a\ne0$. If $a=0$ and $b\ne0$, there is no solution. If $a=b=0$, every element of $D$ is a solution, so the equation is an identity in $D$.
:::dimostrazione
In the first case, the only candidate is $\dfrac ba$, which solves the equation if it belongs to $D$. If it does not belong to $D$, there are no solutions. When $a=0$, the product on the left is zero for every $x$. So the equality $0=b$ is always false if $b\ne0$ and always true if $b=0$. Equivalence carries these outcomes back to the original equation, which has the same solutions as the reduced form.
:::
::::

:::esempio{titolo="Parallel or coincident lines"}
In $2(x+1)=2x+3$, the expansion of the left side is $2x+2$. Both sides have coefficient $2$ but different constant terms. Subtracting $2x$ leaves $2=3$, which is false, so the equation is impossible. The corresponding lines $y=2x+2$ and $y=2x+3$ have the same slope and are parallel. They stay one unit apart vertically, because $(2x+3)-(2x+2)=1$ for every $x$. In the first diagram the marked points have horizontal coordinate $0$, where the sides equal $2$ and $3$.

In $2(x+1)=2x+2$, the right side equals the expansion of the left. Subtracting $2x+2$ leaves $0=0$, so the equation is an identity. The lines coincide, so both sides have the same value at every horizontal coordinate. In the second diagram the marked points have horizontal coordinates $-1$, $0$ and $1$, where both sides equal $0$, $2$ and $4$.

::grafico{f="2*x+2;2*x+3" xmin=-3.2 xmax=3 ymin=-4.5 ymax=8.8 punti="0,2,pieno;0,3,pieno" titolo="The two sides of an equation with no solution give parallel lines"}

::grafico{f="2*x+2" xmin=-3.2 xmax=3 ymin=-4.5 ymax=8.8 punti="-1,0,pieno;0,2,pieno;1,4,pieno" titolo="For an identity, one line represents both sides"}
:::

:::osservazione{titolo="Two distinct solutions with linear sides"}
Suppose an equality between two linear sides holds at two different values of $x$. The difference between the left side and the right side has the form $ax-b$, and the equality holds exactly when this difference is zero. The difference therefore vanishes at two points. The case $a\ne0$ would admit just one zero, namely $x=\dfrac ba$. Hence $a=0$. The difference then reduces to $-b$, and since there is at least one solution we must also have $b=0$. The equality is an identity in its domain.

The assumption that the sides are linear is necessary. The equation $x^2=x$ contains $x^2$ and holds at $x=0$ and $x=1$, because $0^2=0$ and $1^2=1$. It is not an identity, because at $x=2$ we get $4\ne2$.
:::

## Equations with a parameter

:::esempio{#parametri titolo="Start with the value that makes the coefficient zero"}
A **parameter** is a letter that stands for a number that is fixed but not specified.

In $mx+4=2x+1$, the unknown is $x$ and $m$ is a fixed number whose effect we want to study. Subtracting $2x$ and $4$ from both sides gives $mx-2x=-3$. Factoring out $x$ gives the reduced form $(m-2)x=-3$. The coefficient of $x$ is $m-2$, and it equals zero when $m=2$.

- If $m=2$, we get $0x=-3$, with no solutions.
- If $m\ne2$, we divide by $m-2$ and the only solution is $x=\dfrac{-3}{m-2}$.

For example, if $m=1$, the coefficient is $-1$ and $-x=-3$ gives $x=3$. The two original sides equal $1\cdot3+4=7$ and $2\cdot3+1=7$. Dividing by $m-2$ at the start would prevent us from classifying the case $m=2$, because the division is allowed only when $m\ne2$.
:::

:::esempio{titolo="A special case where every value is a solution"}
In $(m-2)x=m-2$, both the coefficient and the constant term vanish at $m=2$. That gives $0x=0$ and every real number solves the equation. If $m\ne2$, we can divide by $m-2$ and obtain $x=1$. Substituting $1$ gives $m-2$ on both sides for every $m$, so $x=1$ is a solution for any value of the parameter. The solution is unique only when $m\ne2$.
:::

:::esempio{titolo="Choosing the parameter that gives a prescribed solution"}
We look for $m$ so that $x=2$ solves $(m+1)x=3m-1$. Substituting the prescribed value, the left side becomes $(m+1)\cdot2=2m+2$. The equation to solve becomes $2m+2=3m-1$, in which the letter to be found is $m$. Subtracting $2m$ and adding $1$ on both sides gives $3=m$, that is, $m=3$.

With that parameter the original equation is $4x=8$, whose only solution is $x=2$. For the parameter $m=-1$, we would get $0x=-4$, with no solution.

At each step only one letter is to be found. In the first substitution $x$ is known and $m$ is sought. In the final check $m$ is known and $x$ is sought.
:::

## Modelling and checking the conditions of the problem

:::esempio{#problemi titolo="An algebraic solution must be possible in context"}
The **model** of a problem is the equation that translates its data.

A workshop charges $8$ euros to register and $3$ euros for each activity. If $n$ is the number of activities, the cost is $8+3n$ euros. The number of activities is $0$, $1$, $2$, $3$ and so on, so the domain consists of the nonnegative integers. With a total of $26$ euros the equation is $8+3n=26$. Subtracting $8$ gives $3n=18$, so $n=6$. The check is $8+3\cdot6=26$.

With a total of $25$ euros, the same formula gives $3n=17$, that is, $n=\dfrac{17}{3}$. This is between $5$ and $6$, because $3\cdot5=15$ and $3\cdot6=18$, but only whole activities can be bought. Five activities cost $8+15=23$ euros and six cost $26$ euros, so there is no way to spend exactly $25$ euros.

In the diagram the horizontal axis shows $n$ and the vertical axis shows the cost $C$. The filled points are the costs of $4$, $5$, $6$ and $7$ activities. The segment at height $25$ meets the line at the open point, whose horizontal coordinate is $\dfrac{17}{3}$.

::grafico{xmin=3.25 xmax=7.55 ymin=17.2 ymax=32 assi=0 linee="3.65,18.25 7.3,18.25;3.65,18.25 3.65,31.25;3.65,18.95 7.25,29.75;4,18.12 4,18.38;5,18.12 5,18.38;6,18.12 6,18.38;7,18.12 7,18.38" segmenti="3.65,25,7.25,25" punti="4,20,pieno;5,23,pieno;6,26,pieno;7,29,pieno;5.666666667,25,vuoto" etichette="3.32,24.91,25;3.52,31.36,C;7.36,18.3,n;3.94,17.62,4;4.94,17.62,5;5.94,17.62,6;6.94,17.62,7" titolo="The line for the cost reaches 25 between two allowed counts"}
:::

:::esempio{titolo="Consecutive integers and parity"}
Two integers are consecutive when the second is obtained from the first by adding $1$, like $9$ and $10$. If $n$ is the smaller of two consecutive integers, the other is $n+1$ and their sum is $n+(n+1)=2n+1$. Requiring a sum of $19$ gives $2n+1=19$, hence $2n=18$ and $n=9$. The integers are $9$ and $10$.

A sum of $20$ would give $2n=19$, that is, $n=\dfrac{19}{2}$, which is not an integer. More generally, for integer $n$ the number $2n$ is even, because it is twice an integer. Adding $1$ to an even number gives an odd number, so $2n+1$ is always odd. An even sum is therefore ruled out before solving.
:::

:::esempio{titolo="The mean in an equation"}
The **mean** of several numbers is their sum divided by how many they are. The mean of three numbers is $8$ and the first two are $5$ and $9$. If $x$ is the third, the equation is $\dfrac{5+9+x}{3}=8$. Multiplying by $3$ gives $14+x=24$, so $x=10$. The check is $\dfrac{5+9+10}{3}=\dfrac{24}{3}=8$.
:::

:::esempio{titolo="Checking when a model is valid"}
Two containers initially hold $3$ and $15$ litres. The first receives $2$ litres per minute and the second loses $1$ litre per minute. While both flows continue, after $t$ minutes the volumes are $3+2t$ and $15-t$. The volumes are equal when $3+2t=15-t$. Adding $t$ and subtracting $3$ gives $3t=12$, so $t=4$. The two volumes are $3+2\cdot4=11$ litres and $15-4=11$ litres.

If the first container has capacity $10$ litres, it is full when $3+2t=10$, that is, at $t=\dfrac72$. Its inflow stops at that instant, and from then on the expression $3+2t$ no longer gives its volume. Then $t=4$ is outside the interval in which both expressions apply, because $4>\dfrac72$.
:::

## Rearranging formulas

:::esempio{#formule titolo="Finding one side from the perimeter"}
Rearranging a formula means isolating a different letter in a known formula, with the same steps used to solve an equation.

The perimeter $P$ of a rectangle of width $b$ and height $h$ satisfies $P=2b+2h$. If $P$ and $b$ are known, the unknown is $h$. We subtract $2b$ from both sides and divide by $2$.

$$
2h=P-2b,\qquad h=\frac P2-b.
$$

Half the perimeter, $\dfrac P2$, is called the half-perimeter and is the sum of one width and one height. With $P=30\,\mathrm{cm}$ and $b=6\,\mathrm{cm}$, the half-perimeter is $15\,\mathrm{cm}$ and this gives $h=15-6=9\,\mathrm{cm}$. The perimeter calculated from both sides is $2(6+9)=30$ centimetres.

The model requires $b>0$ and $P>2b$, because the height must be positive. If $P=2b$, the formula gives a height of zero, which cannot describe a rectangle.

::grafico{xmin=-1.5 xmax=7.45 ymin=-1.03 ymax=10.28 uguale=1 assi=0 poligoni="0,0 6,0 6,9 0,9" etichette="2.8,-0.58,b;-0.75,4.4,h;2.29,9.45,6 cm;6.3,4.4,9 cm" titolo="The half-perimeter is the width plus the height"}
:::

:::esempio{titolo="Finding the time from a measurement"}
A tank holds $V_0$ litres when a tap is opened. The symbol $V_0$ is read "V nought" and denotes the initial volume. The **flow rate** $q$ is the number of litres that enter each minute. While the constant flow rate $q$ continues, $qt$ litres enter in $t$ minutes and the volume at time $t$ is $V=V_0+qt$, with $t$ in minutes and $q$ in litres per minute. The difference $V-V_0$ measures the added water. Subtracting $V_0$ from both sides gives $V-V_0=qt$. If $q>0$, we divide by $q$ and the time needed to reach volume $V$ is

$$
t=\frac{V-V_0}{q}.
$$

For $V_0=5$, $q=3$, and $V=17$, the added water is $17-5=12$ litres. We get $t=\dfrac{12}{3}=4$ minutes and the check is $5+3\cdot4=17$. Dividing only the final volume by the flow rate would give $\dfrac{17}{3}$ minutes, which is the time required to fill the tank from empty.

If $q=0$, the volume stays at $V_0$ at every instant. A volume different from $V_0$ is unreachable, while the volume $V_0$ occurs at every instant and so does not determine a unique time.
:::

:::osservazione{titolo="Proportional changes"}
In $V=V_0+qt$, the ratio $\dfrac Vt$ depends on $t$ if $V_0\ne0$. With $V_0=5$ and $q=3$, the ratio equals $8$ at $t=1$ and $\dfrac{11}{2}$ at $t=2$. We use instead the difference between two measurements $V_1$ and $V_2$ made at times $t_1$ and $t_2$. The two formulas are $V_1=V_0+qt_1$ and $V_2=V_0+qt_2$. Subtracting the first from the second eliminates the term $V_0$ and gives $V_2-V_1=q(t_2-t_1)$. If the times differ, we divide by $t_2-t_1$, and the change in volume divided by the elapsed time gives the flow rate $q$. For example, an increase of $9$ litres in $3$ minutes means $\dfrac93=3$ litres per minute, whatever the initial volume. The change in volume is therefore directly proportional to the elapsed time, that is, their ratio is constant.

Once the flow rate is known, either measurement gives the initial volume, for example $V_0=V_1-qt_1$.
:::
