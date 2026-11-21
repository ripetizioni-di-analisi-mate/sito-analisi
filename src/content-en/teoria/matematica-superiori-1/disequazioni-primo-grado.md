---
titolo: Linear inequalities
sommario: Equivalent transformations, intervals, and constraints on prices, capacity, and whole numbers.
---

In a linear inequality, such as $2x+8>24$, the task is to find all the numbers $x$ for which one expression is greater than, or less than, another. Here the answer is "all the numbers greater than $8$", and it is written as an interval. It is solved with the transformations already used for linear equations, and combining conditions that hold together will be useful for inequalities and systems in the second year.

## Order and equivalent transformations

::::teorema{#ordine titolo="Transformations that preserve or reverse order"}
An **inequality between numbers** is a comparison of two numbers, for example $3<5$. The symbols $<$ ("less than") and $>$ ("greater than") indicate a **strict** comparison, which excludes equality. The symbols $\le$ ("less than or equal to") and $\ge$ ("greater than or equal to") allow it. For example, $5<5$ is false, while $5\le5$ is true.

An **inequality in an unknown** is an inequality containing a letter $x$, called the **unknown**, in place of a number that is not known. An example is $2x+8>24$. The two expressions on either side of the symbol are the **sides**, and the **direction** is the way the symbol points. A **solution** is a number that makes the comparison true when it is put in place of $x$. With $x=9$ the result is $26>24$, which is true, so $9$ is a solution. With $x=7$ the result is $22>24$, which is false. The solution set is denoted by $S$. Solutions are looked for in a given set, the **domain**. Where the text does not specify it, the domain is the set $\mathbb R$ of **real numbers**, that is, the integers, the fractions and all the other decimal numbers.

Two inequalities are **equivalent** if they have the same solution set. The symbol $\iff$ between two inequalities is read "is equivalent to". Three transformations lead from an inequality to an equivalent one.

- Adding the same expression to both sides, or subtracting it, preserves the direction. The expression must be defined throughout the domain, that is, it must have a value for every number in the domain.
- Multiplying or dividing both sides by the same positive constant preserves the direction. A **constant** is a number that does not depend on $x$.
- Multiplying or dividing both sides by the same negative constant reverses the direction, that is, $<$ becomes $>$ and $\le$ becomes $\ge$, and vice versa. This is also described by saying that the sign of the inequality is reversed.

:::dimostrazione
Consider the difference between the right-hand side and the left-hand side. Saying that $a<b$ is the same as saying that $b-a$ is positive.

If the same number $d$ is added to both sides, the new difference is $(b+d)-(a+d)=b-a$. It has stayed the same, so it is still positive and $a+d<b+d$.

If both sides are multiplied by the same number $k$, the new difference is $kb-ka=k(b-a)$, where $k$ has been taken out as a common factor. By the rule of signs, if $k>0$ the product is positive, so $ka<kb$ and the direction is preserved. If $k<0$ the product is negative, so $kb<ka$ and the direction is reversed.

If the two sides are equal, the difference is zero and stays zero after each operation. For this reason the equality allowed by $\le$ and $\ge$ is also preserved.

Each transformation is undone by its inverse, that is, adding $d$ by subtracting $d$, and multiplying by $k$ by dividing by $k$, which is defined because $k$ is nonzero. The new inequality therefore leads back to the original one, and the two have the same solutions.
:::

::grafico{assi=0 xmin=-5.1 xmax=5.1 ymin=-1.8 ymax=1.77 vettori="-4.7,0.86,4.75,0.86;-4.7,-0.82,4.75,-0.82" punti="1,0.86,pieno;4,0.86,pieno;-1,-0.82,pieno;-4,-0.82,pieno" etichette="1,1.36,1;4,1.36,4;-1,-1.32,−1;-4,-1.32,−4;-2.9,1.36,Original values;2.9,-1.32,Opposite values" titolo="From $1<4$ it follows that $-4<-1$. The larger value moves to the left"}

On the number line, the smaller of two numbers is the one further to the left. The bottom line shows the opposites of $1$ and $4$, obtained by multiplying by $-1$. The smaller one is now $-4$, so the direction has been reversed.
::::

:::attenzione
Multiplying both sides by zero is not an equivalent transformation. From $3<5$, which is true, the result would be $0<0$, which is false. From $5\le3$, which is false, the result would be $0\le0$, which is true. After multiplication by zero the unknown disappears, and the comparison obtained gives no information about the original condition.
:::

## Coefficient, boundary, and direction

:::definizione{#coefficienti titolo="Finding the boundary by isolating the unknown"}
An inequality is **linear**, or **of the first degree**, when $x$ appears only multiplied by a number, with no powers such as $x^2$. The number that multiplies $x$ is its **coefficient**. **Like terms** are the terms in $x$ taken together and the numbers taken together, and collecting them means adding them.

Moving all the terms to the left-hand side and collecting like terms turns a linear inequality into a comparison of $ax+b$ with zero, where $a$ and $b$ are numbers. For example, subtracting $24$ from both sides turns $2x+8>24$ into $2x-16>0$, with $a=2$ and $b=-16$.

If $a\ne0$, that is, if $a$ is different from zero, the **boundary value** is the number $-\dfrac ba$, which makes $ax+b$ equal to zero and therefore makes the two sides equal. In the example the boundary value is $-\dfrac{-16}{2}=8$. It separates the numbers that are solutions from the others, and it is also called the **threshold**.

To find the solution set, $x$ is isolated, that is, the inequality is transformed until $x$ stands alone on one side. The last step is the division by the coefficient of $x$, which preserves the direction if the coefficient is positive and reverses it if the coefficient is negative. From $2x>16$, dividing by $2$ gives $x>8$.

The inequality symbol determines whether the boundary value is a solution. With $<$ and $>$ the boundary value is excluded, and with $\le$ and $\ge$ it is included.
:::

:::esempio{titolo="Comparing two expressions in the same unknown"}
The task is to find the numbers $x$ for which $2x+6>x+9$.

$$
\begin{aligned}
2x+6&>x+9,\\[6pt]
2x+6-x-6&>x+9-x-6,\\[6pt]
x&>3.
\end{aligned}
$$

The expression $x+6$ has been subtracted from both sides, and subtraction preserves the direction. At $x=3$, which is the boundary value, both sides equal $12$. At $x=4$ they equal $14$ and $13$, and $14>13$ is true. At $x=2$ they equal $10$ and $11$, and $10>11$ is false.

::grafico{f="2*x+6;x+9" xmin=-0.4 xmax=6.3 ymin=4.9 ymax=20.2 nomi="x,y" legenda="y=2x+6;y=x+9" punti="3,12,pieno;4,14,pieno;4,13,pieno" segmenti="3,5,3,12;4,13,4,14" titolo="The lines meet at $x=3$. To the right, the first expression is larger than the second"}

Each line shows the value of one of the two expressions. To the right of $3$ the line $y=2x+6$ lies above the other, and this corresponds to $x>3$.

The next task is to find the numbers $x$ for which $-2x+1\le7$.

$$
\begin{aligned}
-2x+1&\le7,\\[6pt]
-2x&\le6,\\[6pt]
x&\ge-3.
\end{aligned}
$$

First $1$ has been subtracted from both sides. Then both sides have been divided by $-2$, which is negative, so $\le$ has become $\ge$. At $x=-3$ the left-hand side equals $7$, and $7\le7$ is true, so the boundary value is a solution. At $x=-4$, which is less than $-3$, the left-hand side equals $9$, and $9\le7$ is false.
:::

::::teorema{#segno-lineare titolo="The sign on either side of the boundary"}
The **sign** of an expression states whether its value is positive, negative or zero. Let $r=-\dfrac ba$ be the boundary value of the expression $ax+b$, with $a\ne0$.

- If $a$ is positive, $ax+b$ is negative for $x<r$, that is, to the left of the boundary value, and positive for $x>r$.
- If $a$ is negative, the two signs switch.

Once the boundary value is found, the sign is therefore known for all the numbers on each side. For example, $-2x+6$ has $a=-2$ and boundary value $r=3$, so it is positive for $x<3$ and negative for $x>3$.

:::dimostrazione
The expression $ax+b$ is written as a product of two factors whose signs are known. The boundary value makes the expression zero, that is, $ar+b=0$, so $b=-ar$. Substituting gives $ax+b=ax-ar=a(x-r)$. The factor $x-r$ is negative for $x<r$ and positive for $x>r$. By the rule of signs, if $a>0$ the product $a(x-r)$ has the same sign as $x-r$, and if $a<0$ it has the opposite sign.
:::

| Sign of coefficient | $x<r$ | $x=r$ | $x>r$ |
| --- | --- | --- | --- |
| $a>0$ | $-$ | $0$ | $+$ |
| $a<0$ | $+$ | $0$ | $-$ |
::::

## Grouped terms and numerical denominators

:::esempio{#parentesi-e-frazioni titolo="Multiplying by a positive common denominator"}
The inequality to solve is $\dfrac{-(2x-1)}3+\dfrac{x+5}6\ge1$. The **lowest common multiple** (LCM) of the denominators $3$ and $6$, that is, the smallest number divisible by both, is $6$. Multiplying both sides by $6$, which is positive, removes the fractions and preserves the direction. In the first term $6:3=2$, so the numerator $-(2x-1)$ becomes $-2(2x-1)$. In the second term $6:6=1$ and the numerator stays $x+5$.

$$
\begin{aligned}
-2(2x-1)+(x+5)&\ge6,\\[6pt]
-4x+2+x+5&\ge6,\\[6pt]
-3x+7&\ge6,\\[6pt]
-3x&\ge-1,\\[6pt]
x&\le\frac13.
\end{aligned}
$$

In the second line the two terms of $2x-1$ change sign because they are multiplied by the negative number $-2$. In the third line like terms have been collected, and in the fourth $7$ has been subtracted. In the last line both sides have been divided by $-3$, which is negative, so $\ge$ has become $\le$.

At $x=\dfrac13$ the original sum equals $\dfrac19+\dfrac89=1$, so the boundary value is a solution.

Another approach adds the two fractions first, giving $\dfrac{7-3x}{6}\ge1$. The denominator is positive, so the fraction is at least $1$ when the numerator is at least $6$, that is, $7-3x\ge6$. This is the third line of the calculation.
:::

:::osservazione
A fraction with a negative denominator is rewritten by changing the sign of both the numerator and the denominator, because its value then stays the same. For example, $\dfrac{3-2x}{-4}<2$ is equivalent to $\dfrac{2x-3}{4}<2$. Multiplying by $4$ gives $2x-3<8$. Adding $3$ and dividing by $2$ gives $x<\dfrac{11}{2}$.

Another approach multiplies the original inequality by $-4$. The direction is reversed and the result is $3-2x>-8$. Subtracting $3$ gives $-2x>-11$. Dividing by $-2$ reverses the direction a second time and gives $x<\dfrac{11}{2}$ again. Two reversals bring the direction back to the original one.

At $x=\dfrac{11}{2}$ the original fraction equals $\dfrac{-8}{-4}=2$. The comparison $2<2$ is false, so the boundary value is excluded.
:::

:::esempio{#cambio-di-variabile titolo="Translating an interval through a change of variable"}
The statement $3<10-2x\le7$ requires $10-2x$ to be greater than $3$ and, at the same time, less than or equal to $7$. A **change of variable** consists in giving a new name to an expression. Here $u=10-2x$, and the requirement becomes $3<u\le7$. From $u=10-2x$ it follows that $2x=10-u$, so $x=\dfrac{10-u}{2}$.

- For $u=7$ the result is $x=\dfrac{10-7}{2}=\dfrac32$. The value $u=7$ is allowed, so $x=\dfrac32$ is included.
- For $u=3$ the result is $x=\dfrac{10-3}{2}=\dfrac72$. The value $u=3$ is excluded, so $x=\dfrac72$ is excluded.

As $u$ increases from $3$ to $7$, the numerator $10-u$ decreases, so $x$ decreases from $\dfrac72$ to $\dfrac32$. This is why the order reverses. The solutions are the numbers with $\dfrac32\le x<\dfrac72$, that is, the interval $\left[\dfrac32,\dfrac72\right)$, where $[$ marks an included endpoint and $)$ an excluded endpoint.

::grafico{assi=0 xmin=-0.7 xmax=8.2 ymin=-1.88 ymax=1.75 vettori="-0.25,0.88,7.9,0.88;-0.25,-0.84,7.9,-0.84" area="0.97;0.79;3;7|-0.75;-0.93;1.5;3.5" punti="3,0.88,vuoto;7,0.88,pieno;1.5,-0.84,pieno;3.5,-0.84,vuoto" etichette="0.36,1.31,u;3,1.31,3;7,1.31,7;0.36,-1.34,x;1.5,-1.34,3⁄2;3.5,-1.34,7⁄2" titolo="The closed endpoint for $u$ becomes the left endpoint for $x$. The open endpoint moves to the right"}

The top line shows the values of $u$ and the bottom line the values of $x$. The filled circle, which marks the included endpoint, is on the right for $u$ and on the left for $x$.
:::

## Intervals on the real number line

:::definizione{#intervalli titolo="Included, excluded, and unbounded endpoints"}
On the **real number line** every point corresponds to a real number. An **interval** is the set of all the real numbers between two numbers $a$ and $b$, with $a<b$, called its **endpoints**.

- $(a,b)$ contains the numbers $x$ with $a<x<b$. The endpoints are excluded.
- $[a,b]$ contains the numbers $x$ with $a\le x\le b$. The endpoints are included.
- $(a,b]$ contains the numbers $x$ with $a<x\le b$. Only $b$ is included. In $[a,b)$ only $a$ is included.

A square bracket marks an included endpoint, and a round bracket marks an excluded one. The interval $(-1,2]$ contains, for example, $0$ and $2$, while $-1$ and $3$ are left out.

::grafico{assi=0 xmin=-2.8 xmax=4 ymin=-0.8 ymax=0.86 area="0.075;-0.075;-1;2" vettori="-2.45,0,3.65,0" punti="-1,0,vuoto;2,0,pieno" etichette="-1,-0.3,−1;2,-0.3,2;3.55,-0.3,x" titolo="The interval $(-1,2]$ includes $2$. The open circle excludes $-1$"}

A **half-line**, also called a ray, is an interval that has only one endpoint and continues without end on the other side. The condition $x\le-2$ is written $(-\infty,-2]$. The symbol $\infty$ is read "infinity". The notation $-\infty$ shows that the interval extends to the left without a first value. Likewise, $+\infty$ shows that it extends to the right, and $x>8$ is written $(8,+\infty)$ or $(8,\infty)$. A round bracket is written next to $-\infty$ and $+\infty$, because they are not numbers and do not belong to the interval.

::grafico{assi=0 xmin=-6.2 xmax=1.9 ymin=-0.8 ymax=0.86 area="0.075;-0.075;-5.8;-2" vettori="-5.45,0,-5.98,0;-5.5,0,1.6,0" punti="-2,0,pieno" etichette="-2,-0.3,−2;1.5,-0.3,x" titolo="The highlighted part includes $-2$ and continues to the left"}

A set containing a single number is written with braces, for example $\{2\}$. It results when a lower bound and an upper bound coincide and are both included, as in $x\ge2$ and $x\le2$. If at least one of the two comparisons is strict, as in $x>2$ and $x\le2$, no number satisfies both. The set with no elements is called the **empty set** and is denoted by $\varnothing$.

The **integers** are $\ldots,-2,-1,0,1,2,\ldots$ and their set is denoted by $\mathbb Z$. The notation $x\in\mathbb Z$ is read "$x$ belongs to $\mathbb Z$", while $x\notin\mathbb Z$ is read "$x$ does not belong to $\mathbb Z$". The integers with $8<x\le14$ are $9,10,11,12,13,14$. There are $14-9+1=6$ of them, because $14-9$ counts the steps from $9$ to $14$ and $1$ is added to count $9$ as well.
:::

:::osservazione
The **complement** of an interval in $\mathbb R$ is the set of the real numbers that do not belong to the interval. The complement of $[-1,3)$ is $(-\infty,-1)\cup[3,+\infty)$. The symbol $\cup$ is read "union" and denotes the set that gathers the numbers of the two half-lines. The endpoint $-1$ belongs to the original interval, so it is excluded from the complement. The endpoint $3$ does not belong to the original interval, so it is included in the complement. Every real number belongs to exactly one of the two sets.

The complement is also written $\mathbb R\setminus[-1,3)$, which is read "$\mathbb R$ minus $[-1,3)$". For example, $\mathbb R\setminus\{1\}$ is the set of the real numbers different from $1$.
:::

## Simultaneous and alternative conditions

::::teorema{#sistemi titolo="Intersection and union of solution sets"}
Let $A$ and $B$ be the sets of numbers that satisfy two conditions, for example $A=[1,+\infty)$ for $x\ge1$ and $B=(-\infty,4)$ for $x<4$.

- The **intersection** $A\cap B$ is the set of the numbers that belong both to $A$ and to $B$. It contains the numbers that satisfy *both* conditions.
- The **union** $A\cup B$ is the set of the numbers that belong to at least one of $A$ and $B$. It contains the numbers that satisfy *at least one* condition.

In the example, $2$ satisfies both conditions and belongs to the intersection. The number $5$ satisfies only the first, so it belongs to the union and not to the intersection. Two or more inequalities to be satisfied together form a **system**, and its solutions are the intersection.

:::dimostrazione
A number satisfies both conditions when it belongs to $A$ and belongs to $B$, and this is the definition of belonging to $A\cap B$. A number satisfies at least one condition when it belongs to at least one of $A$ and $B$, and this is the definition of belonging to $A\cup B$. The same reasoning applies to each endpoint.
:::
::::

:::esempio{titolo="Reading common solutions on three aligned number lines"}
The conditions $x\ge1$ and $x<4$ must hold together, so the intersection $[1,+\infty)\cap(-\infty,4)=[1,4)$ is taken. The endpoint $1$ satisfies $x\ge1$ and also $x<4$, so it is included. The endpoint $4$ satisfies $x\ge1$ and does not satisfy $x<4$, so it is excluded.

::grafico{assi=0 xmin=-0.9 xmax=6.7 ymin=-0.55 ymax=3.4 vettori="-0.55,2.63,6.3,2.63;-0.55,1.57,6.3,1.57;-0.55,0.51,6.3,0.51" area="2.71;2.55;1;6.05|1.65;1.49;-0.5;4|0.59;0.43;1;4" punti="1,2.63,pieno;4,1.57,vuoto;1,0.51,pieno;4,0.51,vuoto" segmenti="1,0.51,1,2.63;4,0.51,4,1.57" etichette="1,0.07,1;4,0.07,4;2.5,0.93,Intersection" titolo="The first two lines show the separate constraints. The third highlights their common part"}

A **double inequality** is a short way of writing two simultaneous conditions. The statement $0\le4-2x<6$ requires $0\le4-2x$ and, at the same time, $4-2x<6$. Each operation is applied to all three parts.

$$
\begin{aligned}
0\le4-2x&<6,\\[6pt]
-4\le-2x&<2,\\[6pt]
2\ge x&>-1.
\end{aligned}
$$

First $4$ has been subtracted. Then all three parts have been divided by $-2$, so both symbols have been reversed. The last line, written from the lower bound to the upper bound, is $-1<x\le2$. At $x=2$ the result is $4-2x=0$, an allowed value, so $2$ is included. At $x=-1$ the result is $4-2x=6$, an excluded value, so $-1$ is excluded.
:::

:::osservazione
In an intersection such as the one between $x\ge1$ and $x<4$, one condition sets the lower bound and the other the upper bound. If the lower bound is greater than the upper bound, as in $x\ge5$ and $x<4$, no number satisfies both conditions. If the two bounds coincide, that value is checked directly.

For example, in $[-2,1]\cap[1,4)$ the numbers less than $1$ are excluded by the second interval and the numbers greater than $1$ by the first. The number $1$ belongs to both, so the intersection is $\{1\}$. With $[-2,1)$ in place of $[-2,1]$, the number $1$ is excluded too and the intersection is $\varnothing$.
:::

:::esempio{titolo="Solutions allowed by at least one condition"}
The word "or" between two conditions requires at least one of them to hold, so the union is taken. The conditions $x<-3$ or $x\ge2$ give $(-\infty,-3)\cup[2,+\infty)$. The number $0$ is excluded, because $0<-3$ and $0\ge2$ are both false.

::grafico{assi=0 xmin=-6.2 xmax=5.3 ymin=-0.8 ymax=0.88 vettori="-5.42,0,-5.98,0;-5.5,0,4.95,0" area="0.075;-0.075;-5.8;-3|0.075;-0.075;2;4.72" punti="-3,0,vuoto;2,0,pieno" etichette="-3,-0.32,−3;2,-0.32,2;4.85,-0.32,x" titolo="The union contains two separate half-lines. The values between $-3$ and $2$ are excluded"}

When two intervals have an endpoint in common, that endpoint belongs to the union if at least one of the two includes it. In $(-\infty,1)\cup[1,4)$ the number $1$ is included by the second interval, so the union is $(-\infty,4)$. In $(-\infty,1)\cup(1,+\infty)$ neither interval includes $1$, so the union is $\mathbb R\setminus\{1\}$.
:::

## Zero coefficient and parameters

:::osservazione{#casi titolo="When only constants remain"}
In some inequalities, collecting like terms cancels the terms in $x$. A comparison of two numbers then remains, true or false without depending on $x$.

- From $2x+1<2x+4$, subtracting $2x$ from both sides leaves $1<4$. The comparison is true, so every $x$ in the domain is a solution. The inequality is said to be **always true** and, if the domain is $\mathbb R$, the solution set is written $S=\mathbb R$.
- From $3x+5\le3x+2$, subtracting $3x$ leaves $5\le2$. The comparison is false, so no $x$ is a solution and $S=\varnothing$. The inequality is said to be **impossible**.
- If $0\le0$ remains the comparison is true, whereas if $0<0$ remains it is false.

In these cases the coefficient of $x$ after collecting terms is $0$ and there is no boundary value. The original domain still determines which numbers are solutions. If $x$ counts objects, the solutions of $2x+1<2x+4$ are only $0,1,2,\ldots$
:::

:::esempio{titolo="A coefficient whose sign must be determined"}
A **parameter** is a letter that stands for a fixed but unspecified number, and the solution depends on its value. In the inequality $a(x-2)\le0$ the unknown is $x$ and the parameter is $a$. To isolate $x$, both sides are divided by $a$, and the effect on the direction depends on the sign of $a$.

- If $a>0$, the division preserves the direction. The result is $x-2\le0$, that is, $x\le2$.
- If $a<0$, the division reverses the direction. The result is $x-2\ge0$, that is, $x\ge2$.
- If $a=0$, division by $a$ is not defined. The inequality is $0\cdot(x-2)\le0$, that is, $0\le0$, so every real number is a solution.

In all three cases $x=2$ is a solution, because $a\cdot(2-2)=0$ and $0\le0$ is true. With the strict comparison $a(x-2)<0$, the case $a=0$ would leave $0<0$, which is false, and the solution set would be empty.
:::

:::esempio{titolo="Finding a parameter that makes the constraint true for every real number"}
A **constraint** is a condition to be met. The task is to find the values of the parameter $b$ for which the constraint $(b-3)x\le3$ is true for *every* real number $x$.

For $b=3$ the left-hand side is $0\cdot x=0$ for every $x$, and $0\le3$ is true. The value $b=3$ therefore meets the requirement.

For $b\ne3$ the number $b-3$ is nonzero, and the choice is $x=\dfrac4{b-3}$. With this $x$ the left-hand side equals $(b-3)\cdot\dfrac{4}{b-3}=4$, and $4\le3$ is false. For example, with $b=5$ the constraint is $2x\le3$ and the chosen number is $x=2$.

A single number $x$ that makes the comparison false is enough to rule out that value of $b$, because the requirement concerns every $x$. The only value that meets the requirement is therefore $b=3$.
:::

## Comparing two price plans

:::esempio{#confronto-di-tariffe titolo="Fixed charge, usage, and equal cost"}
To print $n$ copies, plan A charges a fixed $5$ euros plus $3$ euros per copy, so it costs $5+3n$ euros. Plan B charges a fixed $11$ euros plus $2$ euros per copy, so it costs $11+2n$ euros. The number $n$ counts copies, so it is a positive integer.

The sentence "A costs less than B" translates into $5+3n<11+2n$. Subtracting $5+2n$ from both sides gives $n<6$. The positive integers less than $6$ are $1,2,3,4,5$, so A costs less for orders of one to five copies.

::grafico{f="5+3*x;11+2*x" xmin=-0.5 xmax=9.7 ymin=3.2 ymax=34 nomi="n,C" legenda="A;B" punti="1,8,pieno;5,20,pieno;6,23,pieno;7,25,pieno" segmenti="6,3.5,6,23" titolo="Both plans cost 23 euros at six copies. Below that point A is cheaper"}

The horizontal axis shows the number of copies $n$ and the vertical axis the cost $C$ in euros.

The boundary value $n=6$ is the **break-even point**, that is, the number of copies at which the two plans have the same cost, $5+3\cdot6=11+2\cdot6=23$ euros. At $n=5$, A costs $20$ euros and B costs $21$ euros. At $n=7$, A costs $26$ euros and B costs $25$ euros. The lower fixed charge, $5$ euros against $11$, makes A cost less for small orders. Each additional copy costs $3$ euros with A and $2$ with B, so the advantage of A shrinks by $1$ euro per copy, and beyond six copies B costs less.
:::

## Thresholds and whole numbers

:::esempio{#problemi titolo="Checking maxima and minima in a whole-number domain"}
When the unknown counts objects, the inequality is solved over the real numbers and then only the integer solutions are kept. In the text of a problem, "at most" corresponds to $\le$, "at least" to $\ge$, "more than" to $>$ and "less than" to $<$.

A parcel may weigh at most $41\,\mathrm{kg}$ (kilograms). Its packaging weighs $4\,\mathrm{kg}$ and each item weighs $3.5\,\mathrm{kg}$. If $n$ is the number of items, the parcel weighs $4+3.5n$ kilograms and there are two conditions.

$$
\begin{cases}
n\in\{0,1,2,\ldots\}\\
4+3.5n\le41
\end{cases}
$$

Subtracting $4$ gives $3.5n\le37$. Dividing by $3.5$ gives $n\le\dfrac{37}{3.5}=\dfrac{74}{7}$. Since $7\cdot10=70$ and $7\cdot11=77$, this number lies between $10$ and $11$. At most ten items therefore fit. With ten items the parcel weighs $39\,\mathrm{kg}$, and with eleven it weighs $42.5\,\mathrm{kg}$.

An order needs more than $20$ pencils and at most $36$ pencils, in full packs of $4$. If $n$ is the number of packs, the constraint is $20<4n\le36$. Dividing all three parts by $4$ gives $5<n\le9$. Since $n$ counts packs, the solutions are exactly $6,7,8,9$. The minimum is $6$, because five packs contain exactly $20$ pencils. The maximum is $9$, because nine packs contain $36$.

::grafico{assi=0 xmin=3.2 xmax=10.8 ymin=-0.95 ymax=1.44 vettori="3.5,0,10.5,0" area="0.075;-0.075;5;9" punti="5,0,vuoto;6,0,pieno;7,0,pieno;8,0,pieno;9,0,pieno" etichette="5,-0.36,5;6,-0.36,6;7,-0.36,7;8,-0.36,8;9,-0.36,9;10.38,-0.36,n" titolo="The highlighted interval contains the real solutions. The filled points show the allowed numbers of packs"}

A maximum or a minimum is verified by substituting the integer found and the neighbouring integer. When the boundary value is already an integer, the inequality symbol determines whether it is allowed. For example, $n<9$ allows at most $8$, while $n\le9$ also allows $9$. When the boundary value is not an integer and a minimum is sought, the first allowed integer is the one just after it. To have at least $45$ pencils the requirement is $4n\ge45$, that is, $n\ge11.25$, and the minimum is $12$.
:::

:::esempio{titolo="Checking a budget and a capacity limit together"}
A workshop needs a group of at least four participants. The workbench has six places. The cost is a fixed $6$ euros plus $4$ euros per person, and the **budget**, that is, the largest sum that can be spent, is $34$ euros. If $n$ is the number of participants, the three conditions hold together.

$$
\begin{cases}
n\ge4\\
n\le6\\
6+4n\le34
\end{cases}
$$

In the third condition, subtracting $6$ and dividing by $4$ gives $n\le7$. Every number that satisfies $n\le6$ also satisfies $n\le7$, so the tighter upper bound is the one set by the number of places. What remains is $4\le n\le6$, and the allowed groups have four, five or six people. Seven people would cost $6+4\cdot7=34$ euros and would be within the budget, but they would need an extra place.
:::

:::esempio{titolo="Counting increments from the first term"}
An activity awards $5$ points in the first round and, in each subsequent round, $3$ more points than in the previous one. The scores in the first rounds are $5$, $8$, $11$, $14$. An **increment** is an increase of $3$ points. In the second round there is one increment, in the third there are two, and in round $n$ there are $n-1$, because the first round already starts at $5$. The score in round $n$, for a positive integer $n$, is therefore $5+3(n-1)$.

The sentence "the score exceeds $20$" translates into $5+3(n-1)>20$.

$$
\begin{aligned}
5+3(n-1)&>20,\\[6pt]
3(n-1)&>15,\\[6pt]
n-1&>5,\\[6pt]
n&>6.
\end{aligned}
$$

First $5$ has been subtracted, then both sides have been divided by $3$, and finally $1$ has been added. The sixth round gives $5+3\cdot5=20$ points, which do not exceed $20$. The seventh gives $23$, so the seventh is the first round that satisfies the condition.
:::
