---
titolo: "Sets and elementary logic"
sommario: "Set operations and counting, relations and functions, necessary and sufficient conditions, negation, and counterexamples."
---

## Elements and subsets

:::definizione{#concetti titolo="Membership and inclusion"}
A **set** is a collection of objects called elements. The expression $x\in A$ means that $x$ is an element of $A$. A set can be specified by listing its elements or by stating a property, as in $A=\{x\in\mathbb Z\mid 1\le x<4\}$. In this notation the bar reads “such that.” The symbol $\mathbb Z$ specifies the integers from which the elements are selected, and the inequality identifies those to keep.

We write $A\subseteq B$ when every element of $A$ belongs to $B$. If there is also an element of $B$ outside $A$, the inclusion is proper and we write $A\subsetneq B$. The **universal set** $U$ specifies which objects are under consideration. The empty set $\varnothing$ has zero elements and is a subset of every set. Disproving this inclusion would require an element of $\varnothing$ outside the other set, and $\varnothing$ has no elements.
:::

:::esempio{titolo="Identifying a property and an inclusion"}
Let $U=\{0;1;2;3;4;5;6;7\}$. Let $B$ be the set of multiples of $2$ in $U$ and $A$ the set of multiples of $4$ in $U$. Since $0=4\cdot0$, zero belongs to $A$. This gives $A=\{0;4\}$ and $B=\{0;2;4;6\}$. Every multiple of $4$ has the form $4k=2(2k)$, so it belongs to $B$. The number $2$ belongs to $B$ and lies outside $A$, so the inclusion is proper.

::venn{tipo="incluso" nomi="B,A" zone="ab" universo=1 elementi="a:2,6;ab:0,4;u:1,3,5,7" titolo="The region for $A$ lies inside the region for $B$"}
:::

::::teorema{#doppia-inclusione titolo="Equality by mutual inclusion"}
Two sets $A$ and $B$ are equal if and only if $A\subseteq B$ and $B\subseteq A$. This criterion is useful when the same set is described by properties written in different ways.

:::dimostrazione
If $A=B$, an element of either set belongs to the other. Conversely, if both inclusions hold, an element of $A$ belongs to $B$ by the first inclusion and an element of $B$ belongs to $A$ by the second. Thus the sets have the same elements.
:::
::::

:::attenzione
Let $A=\{0;2\}$. Zero is an element of $A$, so $0\in A$. The set $\{0\}$ is a subset of $A$ because its only element belongs to $A$. The set $\varnothing$ has zero elements, while $\{0\}$ has one element, so they are distinct.
:::

## Union, intersection, and difference

:::definizione{#regole titolo="Operations and membership"}
For $A,B\subseteq U$, the **union** $A\cup B$ contains the elements belonging to at least one of the two sets. The **intersection** $A\cap B$ contains their common elements. The difference $A\setminus B$ contains the elements of $A$ outside $B$. The **complement** $A^c=U\setminus A$ contains all elements of $U$ outside $A$. The complement depends on $U$, while the difference $A\setminus B$ is determined by the two sets $A$ and $B$ alone.

An element of $U$ lies in exactly one of the four regions determined by $A$ and $B$. The table distinguishes the regions even when one is empty.

| Membership in $A$ | Membership in $B$ | Region of $x$ |
|---|---|---|
| $x\in A$ | $x\in B$ | $x\in A\cap B$ |
| $x\in A$ | $x\notin B$ | $x\in A\setminus B$ |
| $x\notin A$ | $x\in B$ | $x\in B\setminus A$ |
| $x\notin A$ | $x\notin B$ | $x\in U\setminus(A\cup B)$ |

The union combines the first three regions. A requirement of “exactly one” includes only the second and third regions. Two sets are **disjoint** when the first region is empty.
:::

:::esempio{titolo="Four regions with specified elements"}
Let $U=\{-2;0;1;2;3;4;5\}$, $A=\{-2;0;3\}$, and $B=\{0;2;4\}$. The number $0$ is common to the two sets, so $A\cap B=\{0\}$. To find the union, keep every element of $A$ and add only $2$ and $4$ from $B$.

::venn{tipo="due" zone="a,ab,b" universo=1 elementi="a:-2,3;ab:0;b:2,4;u:1,5" titolo="The union includes the three regions inside the circles"}

The difference $A\setminus B$ contains $-2$ and $3$. Reversing the order starts from $B$, so $B\setminus A=\{2;4\}$.

::venn{tipo="due" zone="b" universo=1 elementi="a:-2,3;ab:0;b:2,4;u:1,5" titolo="The difference $B\setminus A$ starts from the circle for $B$"}

The complement $U\setminus A=\{1;2;4;5\}$ contains $2$ and $4$, along with the elements outside both sets. The two numbers outside both sets are $1$ and $5$.

::venn{tipo="due" zone="b,u" universo=1 elementi="a:-2,3;ab:0;b:2,4;u:1,5" titolo="The complement of $A$ covers every region outside its circle"}
:::

:::esempio{titolo="When the intersection is empty"}
In $U=\{1;2;3;4;5;6\}$, let $P$ be the set of even numbers and $D$ the set of odd numbers. An integer has a unique remainder when divided by $2$. Therefore the two sets are disjoint, and since every number in $U$ is even or odd, their union is all of $U$.

::venn{tipo="disgiunti" nomi="P,D" zone="a,b" universo=1 elementi="a:2,4,6;b:1,3,5" titolo="Parity divides $U$ into two disjoint sets"}
:::

## Counting the regions

::::teorema{#metodo titolo="The union formula"}
For finite sets $A$ and $B$, write $|A|$ for the number of elements of $A$. The formula is
$$
|A\cup B|=|A|+|B|-|A\cap B|.
$$
The three values on the right determine the number of objects satisfying at least one of the two conditions. Given the total, the same equation can be solved for $|A\cap B|$.

:::dimostrazione
We can count the union by starting with $A$ and adding only the elements of $B\setminus A$, since these are the only elements of $B$ still to be counted. The set $B$ splits into the common part $A\cap B$ and the outside part $B\setminus A$. Thus $|B\setminus A|=|B|-|A\cap B|$, and the sum $|A|+|B\setminus A|$ gives the formula.
:::
::::

:::esempio{titolo="From the outside region to the intersection"}
Out of $30$ students, $17$ attend theater and $14$ attend music. Five students attend neither workshop. The number who attend at least one is $30-5=25$. Writing $T$ and $M$ for the two sets gives
$$
\begin{aligned}
|T\cap M|&=|T|+|M|-|T\cup M|\\[6pt]
&=17+14-25\\[6pt]
&=6.
\end{aligned}
$$
The theater-only region has $17-6=11$ students, and the music-only region has $14-6=8$. A student who attends exactly one workshop lies in one of these two regions, so the total requested in that case would be $11+8=19$. The four regions reconstruct the whole class, since $11+6+8+5=30$.

::venn{tipo="due" nomi="T,M" zone="a,b" universo=1 elementi="a:11;ab:6;b:8;u:5" titolo="Students attending exactly one workshop lie in the two shaded regions"}
:::

:::osservazione{titolo="Checking that the counts are feasible"}
If $U$ is finite, the intersection is contained in both sets, so $|A\cap B|\le\min(|A|,|B|)$. The relation $|A\cup B|\le |U|$ also gives $|A\cap B|\ge |A|+|B|-|U|$. If $14$ people in a group of $20$ use one service and $12$ use another, at least $14+12-20=6$ people use both. A stated intersection of $4$ people would imply a union of $22$, which is incompatible with the given universal set.
:::

## Combined operations and De Morgan's laws

::::teorema{#applicazioni titolo="Complements of set operations"}
For $A,B\subseteq U$, De Morgan's two laws are
$$
\begin{aligned}
(A\cup B)^c&=A^c\cap B^c,\\[6pt]
(A\cap B)^c&=A^c\cup B^c.
\end{aligned}
$$
The laws translate requirements such as “neither condition” using the complements of the individual conditions.

:::dimostrazione
For an element $x$ of $U$, belonging to $(A\cup B)^c$ means lying outside both sets, hence belonging to $A^c\cap B^c$. For the second equality, if $x$ lies outside the common portion, at least one membership fails. This is equivalent to requiring that $x$ belong to at least one complement. In both cases the equivalence holds for every $x$ in $U$, so the two sets are equal.
:::
::::

:::esempio{titolo="Outside the common portion"}
Let $U=\{0;1;2;3;4;5;6\}$, $A=\{0;2;4;6\}$, and $B=\{4;5;6\}$. Since $A\cap B=\{4;6\}$, its complement is $\{0;1;2;3;5\}$. Computing the complements before the union gives the same set, since $A^c=\{1;3;5\}$ and $B^c=\{0;1;2;3\}$. The number $5$ belongs to $B$ and is outside $A$, so it remains in the complement of the intersection.

::venn{tipo="due" zone="a,b,u" ambiente="U" elementi="a:0,2;ab:4,6;b:5;u:1,3" titolo="Three regions of $U$ remain outside the intersection"}
:::

::::teorema{#distributiva titolo="Intersection distributes over union"}
For three subsets $A,B,C$ of $U$,
$$
A\cap(B\cup C)=(A\cap B)\cup(A\cap C).
$$
:::dimostrazione
An element of the left-hand side lies in $A$ and in at least one of $B$ and $C$. If it belongs to $B$, it lies in $A\cap B$. If it belongs to $C$, it lies in $A\cap C$. It therefore belongs to the union on the right-hand side. Conversely, belonging to either intersection guarantees membership in $A$ and in at least one of $B$ and $C$.
:::

We also have $A\cup(B\cap C)=(A\cup B)\cap(A\cup C)$. Belonging to $A$ is sufficient for membership in both unions. Outside $A$, membership in both $B$ and $C$ is required.
::::

:::esempio{titolo="One condition shared by two alternatives"}
Let $A=\{1;2;3;4\}$, $B=\{2;3;5\}$, and $C=\{3;4;5;6\}$. Since $B\cup C=\{2;3;4;5;6\}$, we get $A\cap(B\cup C)=\{2;3;4\}$. The distributive law gives the union of $\{2;3\}$ and $\{3;4\}$. The number $3$ satisfies both alternatives and appears once in the result.

::venn{tipo="tre" zone="ab,ac,abc" universo=1 elementi="a:1;ab:2;ac:4;abc:3;bc:5;c:6;u:7" titolo="The shaded parts of $A$ lie in at least one of $B$ and $C$"}
:::

## Pairs, Cartesian products, and relations

:::definizione{#relazioni titolo="Ordered pairs and Cartesian products"}
In an **ordered pair** $(a;b)$, $a$ is the first coordinate and $b$ the second. The pairs $(a;b)$ and $(c;d)$ are equal when $a=c$ and $b=d$. The Cartesian product $A\times B$ is the set of pairs whose first coordinate is in $A$ and whose second coordinate is in $B$. A relation from $A$ to $B$ is a subset of $A\times B$.

If $A$ and $B$ are finite, each element of $A$ generates exactly $|B|$ pairs. Pairs generated by distinct elements of $A$ have different first coordinates, so the counts add to $|A\times B|=|A|\,|B|$. If one of the sets is empty, there are zero ways to meet the requirements on the coordinates, so the product is empty.
:::

:::esempio{titolo="Six pairs and a relation"}
Let $A=\{-1;2\}$ and $B=\{0;1;3\}$. The pairs with first coordinate $-1$ are $(-1;0)$, $(-1;1)$, and $(-1;3)$. The other three have first coordinate $2$. The relation that requires $a<b$ keeps all three pairs with $a=-1$ and only $(2;3)$ among those with $a=2$. To decide whether $(3;2)$ belongs to the relation, check the coordinates first. Since $3\notin A$, the pair is already outside the product.

::grafico{xmin=-2 xmax=3 ymin=-1 ymax=4 punti="-1,0;-1,1;-1,3;2,0;2,1;2,3" titolo="The six points of $A\times B$ lie on two vertical lines"}
:::

## Relations that are functions

:::definizione{#funzioni titolo="Domain, codomain, and images"}
A **function** $f$ from $A$ to $B$ is a relation that assigns each element $a$ in $A$ exactly one element in $B$, called its image and denoted by $f(a)$. Set $A$ is the domain and $B$ is the codomain. The image $f(A)$ is the set of elements of $B$ actually obtained. To check a finite relation, group the pairs by first coordinate and check that each element of the domain has exactly one pair.
:::

:::esempio{titolo="The codomain includes values that are not attained"}
The rule $f(x)=2x+1$ with $A=\{0;1;2\}$ and $B=\{1;3;5;8\}$ produces the pairs $(0;1)$, $(1;3)$, and $(2;5)$. Each element of $A$ occurs once and every second coordinate belongs to $B$, so the rule defines a function. The codomain also contains $8$, while the image is $\{1;3;5\}$. In the graph, each given $x$-coordinate identifies a unique point.

::grafico{xmin=-1 xmax=3 ymin=0 ymax=9 punti="0,1;1,3;2,5" titolo="The graph contains only the points for the specified domain"}
:::

:::attenzione
Let $A=\{0;1;2\}$ and $B=\{3;4\}$. The relation $\{(0;3);(1;4)\}$ omits $2$, so the pairs do not define a function from $A$ to $B$. The relation $\{(0;3);(0;4);(1;3);(2;3)\}$ assigns two images to $0$ and fails to define a function for a different reason. The relation $\{(0;3);(1;3);(2;4)\}$ satisfies both requirements. The two elements $0$ and $1$ can share image $3$ because each is assigned a unique value.
:::

## Propositions and truth tables

:::definizione{#esempi titolo="Propositions and connectives"}
A **proposition** is a statement to which a truth value can be assigned. “$7$ is even” is a false proposition. The expression “$x>3$” depends on the value of $x$. When $x=5$ is assigned, the resulting statement is true. The letters $p$ and $q$ represent propositions. The conjunction $p\land q$ requires both to be true, the disjunction $p\lor q$ requires at least one to be true, and the negation $\neg p$ switches the two truth values.

| $p$ | $q$ | $p\land q$ | $p\lor q$ | $\neg p$ |
|---|---|---|---|---|
| T | T | T | T | F |
| T | F | F | T | F |
| F | T | F | T | T |
| F | F | F | F | T |

Read the rows with **T** for true and **F** for false. The first row is allowed by the disjunction, so the “or” used by $\lor$ is inclusive. The phrase “exactly one of $p$ and $q$” corresponds only to the two middle rows.
:::

:::esempio{titolo="Reading a compound expression"}
Let $p$ be “$9$ is odd” and $q$ be “$9$ is greater than $10$.” The first is true and the second is false. Therefore $\neg q$ is true and $p\land\neg q$ is true. The conjunction $p\land q$ is false, so $\neg(p\land q)$ is true. Here the two expressions have the same value, but if $p$ and $q$ are both false, the first is false and the second true. A single matching row does not establish equivalence.
:::

## Implications, converses, and contrapositives

::::teorema{#problemi titolo="Sufficient and necessary conditions"}
The implication $p\Rightarrow q$ is false exactly when $p$ is true and $q$ is false. If $p\Rightarrow q$ holds, $p$ is a **sufficient** condition for $q$ and $q$ is a **necessary** condition for $p$. The contrapositive $\neg q\Rightarrow\neg p$ always has the same truth value as the original implication.

:::dimostrazione
The contrapositive is false when $\neg q$ is true and $\neg p$ is false, that is, when $q$ is false and $p$ is true. Both implications are false in the same case and true in the others, so they are equivalent.
:::
::::

:::esempio{titolo="The direction of a criterion"}
Every integer multiple of $12$ is a multiple of $4$, because writing $12k=4(3k)$ establishes divisibility by $4$. Being a multiple of $12$ is sufficient for being a multiple of $4$. The **converse** reverses the conditions and says that every multiple of $4$ is a multiple of $12$. The integer $8$ satisfies the hypothesis of the converse and fails its conclusion, so it is a counterexample. The contrapositive of the original criterion instead says that every integer that is not a multiple of $4$ is not a multiple of $12$.
:::

## Quantifiers and negation

:::definizione{#quantificatori titolo="Every, at least one, none"}
Let $D$ be a set and $P(x)$ a property of elements of $D$. The statement $\forall x\in D,\ P(x)$ means that every element of $D$ satisfies the property. The statement $\exists x\in D,\ P(x)$ means that at least one element of $D$ satisfies it. Negating “every element satisfies it” requires an element that fails it. Negating “at least one element satisfies it” requires that every element fail it.
$$
\begin{aligned}
\neg\bigl(\forall x\in D,\ P(x)\bigr)&\iff\exists x\in D,\ \neg P(x),\\[6pt]
\neg\bigl(\exists x\in D,\ P(x)\bigr)&\iff\forall x\in D,\ \neg P(x).
\end{aligned}
$$
:::

:::esempio{titolo="Finding a counterexample in a specified domain"}
Let $D=\{-2;-1;0;1;2\}$ and consider the property $x^2>x$. The number $-1$ satisfies it because $1>-1$, but $0$ fails it because $0>0$ is false. Thus the existential statement is true and the universal statement is false. The negation of $x^2>x$ is $x^2\le x$. Equality is included because it is one way a strict inequality can fail.
:::

:::esempio{titolo="The order of two quantifiers"}
In $D=\{0;1\}$, it is true that for every $x\in D$ there is a $y\in D$ with $x+y=1$. When $x=0$ we can choose $y=1$, while when $x=1$ we need $y=0$. Reading “there is a $y\in D$” first and then “for every $x\in D$” requires a single choice of $y$ to work for both tests. The two tests require different values, so the second statement is false.
:::

:::osservazione{titolo="An empty domain"}
In an empty domain a universal statement is true because there is no counterexample. An existential statement is false because there is no element to satisfy the property. The same reasoning explains why $\varnothing$ is a subset of every set.
:::

## Identifying the type of answer

:::osservazione{#controlli titolo="Set, element, and cardinality"}
If $A=\{2;5\}$ and $B=\{5;6\}$, the intersection is $\{5\}$, its only element is $5$, and its cardinality is $1$. The three answers differ according to the type of object requested. In questions involving a universal statement, the same check identifies what can serve as a counterexample. To disprove “every element of $A$ belongs to $B$,” the number $2$ suffices, since it lies in $A$ and is outside $B$.
:::

:::esempio{titolo="From a sentence to regions and back"}
In $U=\{1;2;3;4;5;6;7;8\}$, let $A=\{2;4;6;8\}$ be the even elements and $B=\{5;6;7;8\}$ the elements greater than $4$. The requirement “even or greater than $4$” selects $A\cup B$. Its negation selects $A^c\cap B^c$, which consists of the odd numbers that are at most $4$. This gives $\{1;3\}$, so the requested cardinality is $2$. A direct check confirms that $1$ and $3$ lie outside both sets.

::venn{tipo="due" zone="u" universo=1 elementi="a:2,4;ab:6,8;b:5,7;u:1,3" titolo="Negating the disjunction selects the region outside both circles"}
:::
