---
titolo: "Sets and elementary logic"
sommario: "Set operations and counting, relations and functions, necessary and sufficient conditions, negation, and counterexamples."
---

## Elements and subsets

:::definizione{#concetti titolo="Membership and inclusion"}
A **set** is a group of objects for which, given any object, it is known whether the object is part of the group or not. The objects that are part of it are called **elements**. A set is denoted by a capital letter, and its elements are written between braces, separated by semicolons. The order in which the elements are written does not matter, so $\{1;2;3\}$ and $\{3;1;2\}$ are the same set.

The symbol $\in$ reads “belongs to.” The expression $x\in A$ means that $x$ is an element of $A$. The symbol $\notin$ reads “does not belong to.” For $A=\{1;2;3\}$ we have $2\in A$ and $5\notin A$.

A set is specified in two ways.

- By listing, that is, by writing all its elements, as in $A=\{1;2;3\}$.
- By a property, that is, by writing the condition that its elements satisfy, as in $A=\{x\in\mathbb Z\mid 1\le x<4\}$.

In the second notation the vertical bar reads “such that.” The symbol $\mathbb Z$ denotes the set of integers $\ldots,-2,-1,0,1,2,\ldots$, from which the elements are selected. The inequality $1\le x<4$ identifies the integers to keep. The sign $\le$ reads “less than or equal to” and includes $1$, while the sign $<$ excludes $4$. The integers that satisfy the condition are $1$, $2$, and $3$, so the two notations describe the same set.

A set $A$ is a **subset** of $B$ when every element of $A$ also belongs to $B$. We write $A\subseteq B$ and read “$A$ is included in $B$.” This relation is called inclusion. For example, $\{1;3\}\subseteq\{1;2;3\}$. If there is also an element of $B$ that does not belong to $A$, the inclusion is proper and we write $A\subsetneq B$. In the example the inclusion is proper, because $2$ belongs to the second set and not to the first.

The **universal set** $U$ is the set of all the objects under consideration in a problem. The empty set $\varnothing$ is the set that has zero elements, and it is a subset of every set $B$. Disproving the inclusion $\varnothing\subseteq B$ would require an element of $\varnothing$ that does not belong to $B$, and $\varnothing$ has no elements.
:::

:::esempio{titolo="Identifying a property and an inclusion"}
Let $U=\{0;1;2;3;4;5;6;7\}$. A multiple of $2$ is a number obtained by multiplying $2$ by an integer, and the same holds for multiples of $4$. Let $B$ be the set of multiples of $2$ in $U$ and $A$ the set of multiples of $4$ in $U$.

Since $0=4\cdot0$, zero is a multiple of $4$ and belongs to $A$. This gives $A=\{0;4\}$ and $B=\{0;2;4;6\}$.

Every multiple of $4$ is written $4k$, where $k$ is an integer. Since $4k=2(2k)$, the same number is also $2$ multiplied by the integer $2k$, so it is a multiple of $2$ and belongs to $B$. It follows that $A\subseteq B$. The number $2$ belongs to $B$ and does not belong to $A$, so the inclusion is proper and $A\subsetneq B$.

In the figure the numbers $1$, $3$, $5$, $7$ are the elements of $U$ outside $B$.

::venn{tipo="incluso" nomi="B,A" zone="ab" universo=1 elementi="a:2,6;ab:0,4;u:1,3,5,7" titolo="The region for $A$ lies inside the region for $B$"}
:::

::::teorema{#doppia-inclusione titolo="Equality by mutual inclusion"}
Two sets are equal when they have the same elements. Two sets $A$ and $B$ are equal if and only if $A\subseteq B$ and $B\subseteq A$. The expression “if and only if” means that each of the two statements is true exactly when the other is true. This criterion is useful when the same set is described by properties written in different ways.

:::dimostrazione
If $A=B$, the two sets have the same elements, so an element of either set belongs to the other and both inclusions hold. Conversely, if both inclusions hold, an element of $A$ belongs to $B$ by the first inclusion and an element of $B$ belongs to $A$ by the second. Thus the sets have the same elements.
:::
::::

:::attenzione
The symbol $\in$ connects an element to a set, while $\subseteq$ connects two sets.

Let $A=\{0;2\}$. Zero is an element of $A$, so $0\in A$. The notation $\{0\}$ instead denotes the set whose only element is zero. The set $\{0\}$ is a subset of $A$ because its only element belongs to $A$, and we write $\{0\}\subseteq A$.

The set $\varnothing$ has zero elements, while $\{0\}$ has one element, so they are distinct.

A set can appear as an element of another set. In $C=\{\varnothing;4\}$ there are two elements, the empty set and the number $4$, so $\varnothing\in C$.
:::

## Union, intersection, and difference

:::definizione{#regole titolo="Operations and membership"}
Let $A$ and $B$ be two subsets of the universal set $U$. Four new sets are built from $A$ and $B$.

- The **union** $A\cup B$ contains the elements belonging to at least one of the two sets, including those belonging to both.
- The **intersection** $A\cap B$ contains the common elements, that is, those belonging to both $A$ and $B$.
- The difference $A\setminus B$ contains the elements of $A$ that do not belong to $B$.
- The **complement** $A^c=U\setminus A$ contains all elements of $U$ that do not belong to $A$.

For $U=\{1;2;3;4;5\}$, $A=\{1;2;3\}$, and $B=\{3;4\}$ we get
$$
\begin{aligned}
A\cup B&=\{1;2;3;4\},& A\cap B&=\{3\},\\[6pt]
A\setminus B&=\{1;2\},& A^c&=\{4;5\}.
\end{aligned}
$$
The complement depends on $U$, while the difference $A\setminus B$ is determined by the two sets $A$ and $B$ alone.

An element $x$ of $U$ lies in exactly one of the four regions determined by $A$ and $B$. The table distinguishes the regions even when one is empty.

| Membership in $A$ | Membership in $B$ | Region of $x$ |
|---|---|---|
| $x\in A$ | $x\in B$ | $x\in A\cap B$ |
| $x\in A$ | $x\notin B$ | $x\in A\setminus B$ |
| $x\notin A$ | $x\in B$ | $x\in B\setminus A$ |
| $x\notin A$ | $x\notin B$ | $x\in U\setminus(A\cup B)$ |

The union combines the first three regions. A requirement of “exactly one of the two sets” includes only the second and third regions. Two sets are **disjoint** when the first region is empty, that is, when $A\cap B=\varnothing$.
:::

:::esempio{titolo="Four regions with specified elements"}
Let $U=\{-2;0;1;2;3;4;5\}$, $A=\{-2;0;3\}$, and $B=\{0;2;4\}$. The number $0$ is the only common element, so $A\cap B=\{0\}$. The union is obtained by keeping every element of $A$ and adding only $2$ and $4$ from $B$, because $0$ is already present. This gives $A\cup B=\{-2;0;2;3;4\}$.

::venn{tipo="due" zone="a,ab,b" universo=1 elementi="a:-2,3;ab:0;b:2,4;u:1,5" titolo="The union includes the three regions inside the circles"}

For the difference $A\setminus B$ we start from $A$ and remove the element $0$, which also belongs to $B$. This gives $A\setminus B=\{-2;3\}$. Reversing the order, we start from $B$ and again remove $0$, so $B\setminus A=\{2;4\}$.

::venn{tipo="due" zone="b" universo=1 elementi="a:-2,3;ab:0;b:2,4;u:1,5" titolo="The difference $B\setminus A$ starts from the circle for $B$"}

For the complement of $A$ we start from $U$ and remove $-2$, $0$, and $3$. This gives $U\setminus A=\{1;2;4;5\}$. The complement contains $2$ and $4$, which belong to $B$, along with the elements outside both sets. The two numbers outside both sets are $1$ and $5$.

::venn{tipo="due" zone="b,u" universo=1 elementi="a:-2,3;ab:0;b:2,4;u:1,5" titolo="The complement of $A$ covers every region outside its circle"}
:::

:::esempio{titolo="When the intersection is empty"}
In $U=\{1;2;3;4;5;6\}$, let $P$ be the set of even numbers and $D$ the set of odd numbers, that is, $P=\{2;4;6\}$ and $D=\{1;3;5\}$. An integer has a unique remainder when divided by $2$. The remainder is $0$ for even numbers and $1$ for odd numbers. Therefore no number is both even and odd, and the two sets are disjoint. Since every number in $U$ is even or odd, their union is all of $U$.

::venn{tipo="disgiunti" nomi="P,D" zone="a,b" universo=1 elementi="a:2,4,6;b:1,3,5" titolo="Parity divides $U$ into two disjoint sets"}
:::

## Counting the regions

::::teorema{#metodo titolo="The union formula"}
A set is finite when its elements can be counted up to the last one. For finite sets $A$ and $B$, write $|A|$ for the number of elements of $A$, also called the cardinality of $A$. For $A=\{1;2;3\}$ we have $|A|=3$. The formula is
$$
|A\cup B|=|A|+|B|-|A\cap B|.
$$
The sum $|A|+|B|$ counts the common elements twice, once in $A$ and once in $B$. Subtracting $|A\cap B|$ leaves every element counted exactly once. For $A=\{1;2;3\}$ and $B=\{3;4\}$ the union is $\{1;2;3;4\}$ and the formula gives $3+2-1=4$.

The three values on the right determine the number of objects satisfying at least one of the two conditions. When the total $|A\cup B|$ is known, the same formula is solved for $|A\cap B|$, which gives $|A\cap B|=|A|+|B|-|A\cup B|$.

:::dimostrazione
We count the union by starting with $A$ and adding only the elements of $B\setminus A$, since these are the only elements of $B$ still to be counted. Hence $|A\cup B|=|A|+|B\setminus A|$. The set $B$ splits into the common part $A\cap B$ and the outside part $B\setminus A$, which are disjoint. Thus $|B|=|A\cap B|+|B\setminus A|$, that is, $|B\setminus A|=|B|-|A\cap B|$. Substituting this value into the sum $|A|+|B\setminus A|$ gives the formula.
:::
::::

:::esempio{titolo="From the outside region to the intersection"}
Out of $30$ students, $17$ attend theatre and $14$ attend music. Five students attend neither workshop. Write $T$ for the set of students who attend theatre and $M$ for the set of students who attend music. The five students with no workshop are outside the union $T\cup M$, so the number who attend at least one is $30-5=25$. The union formula gives
$$
\begin{aligned}
|T\cap M|&=|T|+|M|-|T\cup M|\\[6pt]
&=17+14-25\\[6pt]
&=6.
\end{aligned}
$$
Six students attend both workshops. The theatre-only region has $17-6=11$ students, and the music-only region has $14-6=8$. A student who attends exactly one workshop lies in one of these two regions, so the total requested in that case would be $11+8=19$. The four regions reconstruct the whole class, since $11+6+8+5=30$.

In the figure each number is the cardinality of a region.

::venn{tipo="due" nomi="T,M" zone="a,b" universo=1 elementi="a:11;ab:6;b:8;u:5" titolo="Students attending exactly one workshop lie in the two shaded regions"}
:::

:::osservazione{titolo="Checking that the counts are feasible"}
Let $A$ and $B$ be subsets of a finite universal set $U$. The intersection is contained in each of the two sets, so it has at most as many elements as the smaller one. We write $|A\cap B|\le\min(|A|,|B|)$, where $\min$ denotes the smaller of the two numbers.

The union is contained in $U$, so $|A\cup B|\le |U|$. By the union formula this inequality reads $|A|+|B|-|A\cap B|\le|U|$, which gives $|A\cap B|\ge |A|+|B|-|U|$.

If $14$ people in a group of $20$ use one service and $12$ use another, at least $14+12-20=6$ people use both and at most $12$ use both. A stated intersection of $4$ people would imply a union of $14+12-4=22$ people. The group has $20$ people, so that value contradicts the given universal set.
:::

## Combined operations and De Morgan's laws

::::teorema{#applicazioni titolo="Complements of set operations"}
An element is outside the union of two sets when it is outside both. An element is outside the intersection when it is outside at least one of the two. These two rules are called De Morgan's laws. For subsets $A$ and $B$ of $U$ they are written
$$
\begin{aligned}
(A\cup B)^c&=A^c\cap B^c,\\[6pt]
(A\cap B)^c&=A^c\cup B^c.
\end{aligned}
$$
The laws translate requirements such as “neither condition” using the complements of the individual conditions.

:::dimostrazione
We show that the two sets in each equality have the same elements. Let $x$ be an element of $U$. Belonging to $(A\cup B)^c$ means being outside the union, that is, outside both sets. This is equivalent to belonging to both $A^c$ and $B^c$, hence to $A^c\cap B^c$.

For the second equality, $x$ belongs to $(A\cap B)^c$ when it lies outside the common portion. In this case at least one of the two memberships fails, that is, $x\notin A$ or $x\notin B$. This is equivalent to requiring that $x$ belong to at least one complement, hence to $A^c\cup B^c$. In both cases the equivalence holds for every $x$ in $U$, so the two sets are equal.
:::
::::

:::esempio{titolo="Outside the common portion"}
Let $U=\{0;1;2;3;4;5;6\}$, $A=\{0;2;4;6\}$, and $B=\{4;5;6\}$. The common elements are $4$ and $6$, so $A\cap B=\{4;6\}$. Removing $4$ and $6$ from $U$ gives the complement $(A\cap B)^c=\{0;1;2;3;5\}$.

The same set is obtained by computing the complements first and then the union. We have $A^c=\{1;3;5\}$ and $B^c=\{0;1;2;3\}$, so $A^c\cup B^c=\{0;1;2;3;5\}$. The number $5$ belongs to $B$ and is outside $A$, so it remains in the complement of the intersection.

::venn{tipo="due" zone="a,b,u" ambiente="U" elementi="a:0,2;ab:4,6;b:5;u:1,3" titolo="Three regions of $U$ remain outside the intersection"}
:::

::::teorema{#distributiva titolo="Intersection distributes over union"}
In an expression with several operations, the operation written in brackets is carried out first. For three subsets $A,B,C$ of $U$,
$$
A\cap(B\cup C)=(A\cap B)\cup(A\cap C).
$$
The expression to the left of the equals sign is called the left-hand side and the one to the right the right-hand side.

:::dimostrazione
We show the two inclusions, and equality follows by mutual inclusion. An element of the left-hand side lies in $A$ and in at least one of $B$ and $C$. If it belongs to $B$, it lies in $A\cap B$. If it belongs to $C$, it lies in $A\cap C$. It therefore belongs to the union on the right-hand side. Conversely, an element of the right-hand side belongs to one of the two intersections. This guarantees membership in $A$ and in at least one of $B$ and $C$, hence in the left-hand side.
:::

We also have $A\cup(B\cap C)=(A\cup B)\cap(A\cup C)$. Belonging to $A$ is sufficient for membership in both unions. Outside $A$, membership in both $B$ and $C$ is required, that is, membership in $B\cap C$. In both cases the element belongs to $A\cup(B\cap C)$.
::::

:::esempio{titolo="One condition shared by two alternatives"}
Let $A=\{1;2;3;4\}$, $B=\{2;3;5\}$, and $C=\{3;4;5;6\}$. We first compute the union $B\cup C=\{2;3;4;5;6\}$. The elements of $A$ that belong to this union are $2$, $3$, and $4$, so $A\cap(B\cup C)=\{2;3;4\}$.

With the distributive law we first compute $A\cap B=\{2;3\}$ and $A\cap C=\{3;4\}$, and then take their union. This gives $\{2;3;4\}$ again. The number $3$ satisfies both alternatives and appears once in the result.

In the figure the universal set also contains $7$, which is outside the three sets.

::venn{tipo="tre" zone="ab,ac,abc" universo=1 elementi="a:1;ab:2;ac:4;abc:3;bc:5;c:6;u:7" titolo="The shaded parts of $A$ lie in at least one of $B$ and $C$"}
:::

## Pairs, Cartesian products, and relations

:::definizione{#relazioni titolo="Ordered pairs and Cartesian products"}
An **ordered pair** $(a;b)$ consists of two objects written in a fixed order. The object $a$ is the first coordinate and $b$ is the second. The pairs $(a;b)$ and $(c;d)$ are equal when both conditions are satisfied
$$
\begin{cases}
a=c\\
b=d
\end{cases}
$$
The pairs $(1;2)$ and $(2;1)$ are therefore different, while the sets $\{1;2\}$ and $\{2;1\}$ are equal.

The **Cartesian product** $A\times B$ is the set of all pairs whose first coordinate is in $A$ and whose second coordinate is in $B$. A **relation** from $A$ to $B$ is a subset of $A\times B$, that is, a selection of some of these pairs.

If $A$ and $B$ are finite, each element of $A$ generates exactly $|B|$ pairs, one for each element of $B$. Pairs generated by two distinct elements of $A$ have different first coordinates, so they are different pairs. The counts therefore add up to $|A\times B|=|A|\,|B|$. If one of the two sets is empty, there is no choice available for one of the two coordinates. No pair is formed, so the product is empty.
:::

:::esempio{titolo="Six pairs and a relation"}
Let $A=\{-1;2\}$ and $B=\{0;1;3\}$. The product $A\times B$ has $2\cdot3=6$ pairs. The pairs with first coordinate $-1$ are $(-1;0)$, $(-1;1)$, and $(-1;3)$. The other three have first coordinate $2$ and are $(2;0)$, $(2;1)$, and $(2;3)$.

The relation that requires $a<b$ keeps all three pairs with $a=-1$, because $-1$ is less than $0$, $1$, and $3$. Among those with $a=2$ it keeps only $(2;3)$, because $2<3$ while $2<0$ and $2<1$ are false. The relation is therefore $\{(-1;0);(-1;1);(-1;3);(2;3)\}$.

To decide whether $(3;2)$ belongs to the relation, the coordinates are checked first. Since $3\notin A$, the pair is already outside the product $A\times B$.

In the Cartesian plane the pair $(a;b)$ is the point with $a$ on the horizontal $x$-axis and $b$ on the vertical $y$-axis. The first coordinate of a point is called its abscissa or $x$-coordinate, and the second its ordinate or $y$-coordinate. The three points with $x$-coordinate $-1$ lie on one vertical line and the three points with $x$-coordinate $2$ on another.

::grafico{xmin=-2 xmax=3 ymin=-1 ymax=4 punti="-1,0;-1,1;-1,3;2,0;2,1;2,3" titolo="The six points of $A\times B$ lie on two vertical lines"}
:::

## Relations that are functions

:::definizione{#funzioni titolo="Domain, codomain, and images"}
A **function** $f$ from $A$ to $B$ is a relation that assigns each element $a$ in $A$ exactly one element in $B$. This element is called the image of $a$ and is denoted by $f(a)$, which reads “$f$ of $a$.” The set $A$ is the **domain** and $B$ is the **codomain**. We write $f:A\to B$. The arrow $\mapsto$ connects an element to its image, and $a\mapsto f(a)$ reads “$a$ maps to $f(a)$.”

A function can also be given by a formula. For the function $f(x)=2x+3$ the image of $-1$ is computed by substituting $-1$ for $x$, which gives $f(-1)=2\cdot(-1)+3=1$. When the domain and the codomain are the set $\mathbb R$ of real numbers, that is, of all the numbers represented on the number line, we write $f:\mathbb R\to\mathbb R$.

The image $f(A)$ is the set of elements of $B$ actually obtained as the image of some element of $A$.

To check whether a finite relation is a function, the pairs are grouped by first coordinate. The relation is a function when each element of the domain appears as the first coordinate of exactly one pair.
:::

:::esempio{titolo="The codomain includes values that are not attained"}
Let $A=\{0;1;2\}$ and $B=\{1;3;5;8\}$, and consider the rule $f(x)=2x+1$. The images are
$$
\begin{aligned}
f(0)&=2\cdot0+1=1,\\[6pt]
f(1)&=2\cdot1+1=3,\\[6pt]
f(2)&=2\cdot2+1=5.
\end{aligned}
$$
The rule produces the pairs $(0;1)$, $(1;3)$, and $(2;5)$. Each element of $A$ occurs once as a first coordinate and every second coordinate belongs to $B$, so the rule defines a function from $A$ to $B$. The codomain also contains $8$, which is not the image of any element, while the image is $f(A)=\{1;3;5\}$.

In the graph each given value of $x$ identifies a unique point.

::grafico{xmin=-1 xmax=3 ymin=0 ymax=9 punti="0,1;1,3;2,5" titolo="The graph contains only the points for the specified domain"}
:::

:::attenzione
Let $A=\{0;1;2\}$ and $B=\{3;4\}$.

- The relation $\{(0;3);(1;4)\}$ omits $2$, that is, no pair has $2$ as its first coordinate. The pairs therefore do not define a function from $A$ to $B$.
- The relation $\{(0;3);(0;4);(1;3);(2;3)\}$ assigns two images to $0$ and fails to define a function for a different reason.
- The relation $\{(0;3);(1;3);(2;4)\}$ satisfies both requirements and is a function.

In the third relation the two elements $0$ and $1$ have the same image $3$. This is allowed, because each of the two is assigned a unique value.
:::

## Propositions and truth tables

:::definizione{#esempi titolo="Propositions and connectives"}
A **proposition**, also called a statement, is a sentence that is known to be either true or false. True and false are the two truth values. “$7$ is even” is a false proposition. The expression “$x>3$” depends on the value of $x$, so it becomes a proposition only when a value is assigned to $x$. With $x=5$ the resulting statement, “$5>3$,” is true.

The letters $p$ and $q$ represent propositions. A **connective** is a symbol that forms a new proposition from one or two given propositions.

- The conjunction $p\land q$ reads “$p$ and $q$.” It is true when $p$ and $q$ are both true.
- The disjunction $p\lor q$ reads “$p$ or $q$.” It is true when at least one of $p$ and $q$ is true.
- The negation $\neg p$ reads “not $p$.” It switches the two values, so it is true when $p$ is false and false when $p$ is true.

A **truth table** lists, one per row, all combinations of the values of $p$ and $q$, with the value of the compound propositions.

| $p$ | $q$ | $p\land q$ | $p\lor q$ | $\neg p$ |
|---|---|---|---|---|
| T | T | T | T | F |
| T | F | F | T | F |
| F | T | F | T | T |
| F | F | F | F | T |

The rows are read with **T** for true and **F** for false. In the first row $p$ and $q$ are both true and the disjunction is true, so the “or” used by $\lor$ is inclusive, that is, it covers the case in which both hold. The phrase “exactly one of $p$ and $q$” corresponds only to the two middle rows.
:::

:::esempio{titolo="Reading a compound expression"}
Let $p$ be “$9$ is odd” and $q$ be “$9$ is greater than $10$.” The first is true and the second is false.

For the expression $p\land\neg q$ we first compute $\neg q$. Since $q$ is false, $\neg q$ is true. The propositions $p$ and $\neg q$ are both true, so $p\land\neg q$ is true.

For the expression $\neg(p\land q)$ we first compute the conjunction $p\land q$. Since $q$ is false, $p\land q$ is false, so $\neg(p\land q)$ is true.

With these values of $p$ and $q$ the two expressions have the same value. Two expressions are **equivalent** when they have the same value in every row of the table.

| $p$ | $q$ | $p\land\neg q$ | $\neg(p\land q)$ |
|---|---|---|---|
| T | T | F | F |
| T | F | T | T |
| F | T | F | T |
| F | F | F | T |

In the fourth row, where $p$ and $q$ are both false, the first expression is false and the second is true. The two expressions are therefore not equivalent. A single matching row does not establish equivalence.
:::

## Implications, converses, and contrapositives

::::teorema{#problemi titolo="Sufficient and necessary conditions"}
The **implication** $p\Rightarrow q$ reads “if $p$ then $q$” or “$p$ implies $q$.” The proposition $p$ is the hypothesis and $q$ is the conclusion. The implication $p\Rightarrow q$ is false exactly when $p$ is true and $q$ is false.

| $p$ | $q$ | $p\Rightarrow q$ | $\neg q$ | $\neg p$ | $\neg q\Rightarrow\neg p$ |
|---|---|---|---|---|---|
| T | T | T | F | F | T |
| T | F | F | T | F | F |
| F | T | T | F | T | T |
| F | F | T | T | T | T |

Consider the statement “if an integer is a multiple of $4$, then it is even.” The number $8$ is a multiple of $4$ and is even, as in the first row. The number $6$ is even without being a multiple of $4$, as in the third row. The number $3$ falls in the fourth row. None of the three disproves the statement. Only an odd multiple of $4$ would disprove it, which corresponds to the second row.

If $p\Rightarrow q$ holds, $p$ is a **sufficient** condition for $q$, because the truth of $p$ is enough to have $q$. Moreover, $q$ is a **necessary** condition for $p$, because when $q$ is false $p$ is false too. In the example, being a multiple of $4$ is sufficient for being even, and being even is necessary for being a multiple of $4$.

The **contrapositive** of $p\Rightarrow q$ is the implication $\neg q\Rightarrow\neg p$. The contrapositive always has the same truth value as the original implication.

:::dimostrazione
An implication is false only when its hypothesis is true and its conclusion is false. The contrapositive has hypothesis $\neg q$ and conclusion $\neg p$, so it is false when $\neg q$ is true and $\neg p$ is false, that is, when $q$ is false and $p$ is true. This is the same case in which $p\Rightarrow q$ is false. Both implications are false in the same case and true in the others, so they are equivalent. In the table the third and sixth columns coincide.
:::
::::

:::esempio{titolo="The direction of a criterion"}
Every integer multiple of $12$ is a multiple of $4$. A multiple of $12$ is written $12k$ with $k$ an integer, and writing $12k=4(3k)$ establishes divisibility by $4$. Being a multiple of $12$ is therefore sufficient for being a multiple of $4$.

The **converse** of an implication swaps the hypothesis and the conclusion. Here the converse says that every multiple of $4$ is a multiple of $12$. A **counterexample** is a case that satisfies the hypothesis of a statement and not its conclusion, and a single counterexample is enough to declare the statement false. The integer $8$ is a multiple of $4$, because $8=4\cdot2$, and is not a multiple of $12$. The integer $8$ satisfies the hypothesis of the converse and fails its conclusion, so it is a counterexample and the converse is false.

The contrapositive of the original criterion instead says that every integer that is not a multiple of $4$ is not a multiple of $12$.

The notation $a\mid b$ reads “$a$ divides $b$” and means that $b$ is a multiple of $a$. The notation $a\nmid b$ reads “$a$ does not divide $b$.” With these symbols, $4\mid 8$ and $12\nmid 8$. Here the bar has a different meaning from the one it has in set notation, where it reads “such that.”
:::

## Quantifiers and negation

:::definizione{#quantificatori titolo="Every, at least one, none"}
Let $D$ be a set and $P(x)$ a property of the elements of $D$, that is, a sentence that becomes true or false when an element of $D$ is substituted for $x$. The **quantifiers** are the two symbols $\forall$ and $\exists$, which indicate how many elements of $D$ satisfy the property.

- The symbol $\forall$ reads “for every.” The statement $\forall x\in D,\ P(x)$ means that every element of $D$ satisfies the property, and it is called a universal statement.
- The symbol $\exists$ reads “there exists at least one.” The statement $\exists x\in D,\ P(x)$ means that at least one element of $D$ satisfies it, and it is called an existential statement.

Let $D$ be the set of students in a class and $P(x)$ the property “$x$ has handed in the homework.” “No one has handed it in” is written $\forall x\in D,\ \neg P(x)$.

Negating “every element satisfies it” requires an element that fails it. The negation of “everyone has handed it in” is “at least one student has not handed it in.” Negating “at least one element satisfies it” requires that every element fail it. The negation of “at least one student has handed it in” is “no one has handed it in.”
$$
\begin{aligned}
\neg\bigl(\forall x\in D,\ P(x)\bigr)&\iff\exists x\in D,\ \neg P(x),\\[6pt]
\neg\bigl(\exists x\in D,\ P(x)\bigr)&\iff\forall x\in D,\ \neg P(x).
\end{aligned}
$$
The symbol $\iff$ reads “is equivalent to” or “if and only if.” It means that the two statements are both true or both false.
:::

:::esempio{titolo="Finding a counterexample in a specified domain"}
Let $D=\{-2;-1;0;1;2\}$ and consider the property $x^2>x$. The number $-1$ satisfies it, because $(-1)^2=1$ and $1>-1$. The existential statement is therefore true. An element that makes an existential statement true is called a witness, and here $-1$ is a witness.

The number $0$ fails the property, because $0^2=0$ and $0>0$ is false. The number $0$ is a counterexample to the universal statement, which is therefore false.

The negation of $x^2>x$ is $x^2\le x$. Equality is included because a strict inequality fails both when the first number is less than the second and when the two numbers are equal.
:::

:::esempio{titolo="The order of two quantifiers"}
In $D=\{0;1\}$, it is true that for every $x\in D$ there is a $y\in D$ with $x+y=1$. In this statement $x$ is fixed first, and then a $y$ suited to that $x$ is sought. When $x=0$ we choose $y=1$, because $0+1=1$. When $x=1$ we need $y=0$, because $1+0=1$.

Reading “there is a $y\in D$” first and then “for every $x\in D$” requires a single choice of $y$ to work for both tests. With $y=0$ the test $x=0$ gives $0+0=0$. With $y=1$ the test $x=1$ gives $1+1=2$. The two tests require different values of $y$, so this second statement is false.
:::

:::osservazione{titolo="An empty domain"}
In an empty domain a universal statement is true, because declaring it false would require a counterexample and the domain has no elements. An existential statement is false because there is no element to satisfy the property. The same reasoning explains why $\varnothing$ is a subset of every set $B$. The statement “every element of $\varnothing$ belongs to $B$” is a universal statement on an empty domain.
:::

## Identifying the type of answer

:::osservazione{#controlli titolo="Set, element, and cardinality"}
If $A=\{2;5\}$ and $B=\{5;6\}$, the intersection is the set $\{5\}$, its only element is the number $5$, and its cardinality is $1$. The three answers differ according to the type of object requested.

In questions involving a universal statement, the same check identifies what can serve as a counterexample. The statement “every element of $A$ belongs to $B$” is about the elements of $A$, so a counterexample is an element of $A$. To disprove it, the number $2$ suffices, since it lies in $A$ and is outside $B$.
:::

:::esempio{titolo="From a sentence to regions and back"}
In $U=\{1;2;3;4;5;6;7;8\}$, let $A=\{2;4;6;8\}$ be the even elements and $B=\{5;6;7;8\}$ the elements greater than $4$. The requirement “even or greater than $4$” selects the elements that lie in at least one of the two sets, that is, $A\cup B$.

Its negation selects the complement $(A\cup B)^c$. By De Morgan's first law this set is $A^c\cap B^c$. The elements of $A^c$ are the odd numbers and those of $B^c$ are the numbers less than or equal to $4$, so $A^c\cap B^c$ consists of the odd numbers that are at most $4$. This gives $\{1;3\}$, so the requested cardinality is $2$. A direct check confirms that $1$ and $3$ lie outside both sets.

::venn{tipo="due" zone="u" universo=1 elementi="a:2,4;ab:6,8;b:5,7;u:1,3" titolo="Negating the disjunction selects the region outside both circles"}
:::
