---
titolo: Sets and elementary logic
sommario: Membership, subsets, set operations, counting, ordered pairs, and first examples of functions. Propositions, implications, and negations.
---

## Elements, sets, and subsets

:::definizione{#concetti titolo="Membership and subsets"}
A set is a collection of elements identified by a precise condition. It can be described by **listing its elements**, as in $A=\{1;2;3\}$, or by stating a property, such as “positive integers less than four.” Reordering or repeating elements leaves the set unchanged.

The symbol $2\in A$ means that $2$ belongs to $A$. The statement $4\notin A$ means it does not belong to that set. The **empty set** $\varnothing$ has no elements. It differs from $\{0\}$, which contains zero.

Write $C\subseteq A$ when every element of $C$ also belongs to $A$. If $C\ne A$, the subset relation is proper and is written $C\subsetneq A$. An example is $\{1;2\}\subsetneq\{1;2;3\}$. Membership relates an element to a set. Inclusion relates two sets.

The **universal set** $U$ specifies which elements are under consideration. Every complement depends on this choice. The symbol $|A|$ denotes the number of elements in a finite set.
:::

## Union, intersection, difference, and complement

:::definizione{#regole titolo="Four set operations"}
The **union** $A\cup B$ contains the elements that belong to at least one of the sets. The **intersection** $A\cap B$ contains the elements shared by both. The **difference** $A\setminus B$ contains the elements of $A$ that do not belong to $B$. The **complement** of $A$ relative to $U$ is $U\setminus A$.

Consider $U=\{1;2;3;4;5;6\}$, $A=\{1;2;3\}$, and $B=\{3;4;5\}$. Then
$$
A\cup B=\{1;2;3;4;5\},\qquad A\cap B=\{3\},
$$
$$
A\setminus B=\{1;2\},\qquad U\setminus A=\{4;5;6\}.
$$
The element $3$ appears only once in the union. The difference depends on the order, as $B\setminus A=\{4;5\}$ shows. Two sets are **disjoint** when their intersection is empty.

::venn{tipo="due" zone="ab" universo=1 elementi="a:1,2;ab:3;b:4,5;u:6" titolo="The intersection $A\cap B$ contains only $3$, the element shared by the sets"}

::venn{tipo="due" zone="a" universo=1 elementi="a:1,2;ab:3;b:4,5;u:6" titolo="The difference $A\setminus B$ keeps $1$ and $2$ and excludes the overlap"}

::venn{tipo="due" zone="b,u" universo=1 elementi="a:1,2;ab:3;b:4,5;u:6" titolo="The complement $U\setminus A$ contains $4$, $5$, and $6$"}
:::

## Counting each element once

:::teorema{#metodo titolo="The formula for the cardinality of a union"}
For two finite sets,
$$
|A\cup B|=|A|+|B|-|A\cap B|.
$$
The sum $|A|+|B|$ counts each shared element twice. Subtracting the size of the intersection once corrects that double count. For disjoint sets, add the two cardinalities.

In a class of $25$ students, $15$ study English, $10$ study French, and $5$ study both languages. There are $15+10-5=20$ students studying at least one language. There are $15-5=10$ students studying only English and $10-5=5$ studying only French. There are $25-20=5$ students studying neither language.

The four disjoint regions have cardinalities $10$, $5$, $5$, and $5$. Their sum is $25$. This check helps when choosing an answer to a quiz question.
:::

:::esempio{titolo="Finding the overlap from the number outside both sets"}
Of $30$ students, $17$ take drama and $14$ take music. Five take neither club, so $30-5=25$ students take at least one. The two club counts add to $31$ because students who take both are counted twice.

$$
\begin{aligned}
|T\cap M|&=|T|+|M|-|T\cup M|\\[6pt]
&=17+14-25=6.
\end{aligned}
$$

::venn{tipo="due" nomi="T,M" zone="ab" universo=1 elementi="a:11;ab:6;b:8;u:5" titolo="The six students who attend both clubs occupy the overlap"}

The drama-only region contains $17-6=11$ students and the music-only region contains $14-6=8$. Including the six students in the overlap and the five outside, the total is $30$.
:::

## Ordered pairs, relations, and functions

:::definizione{#relazioni titolo="From the Cartesian product to a rule of correspondence"}
An **ordered pair** $(a;b)$ distinguishes the first element from the second. The Cartesian product $A\times B$ contains every pair with its first element in $A$ and its second in $B$. If $A=\{1;2\}$ and $B=\{3;4;5\}$, then
$$
A\times B=\{(1;3);(1;4);(1;5);(2;3);(2;4);(2;5)\}.
$$
There are $2\cdot3=6$ pairs. In general, $|A\times B|=|A|\,|B|$. The pair $(3;1)$ does not belong to the Cartesian product in this example.

A **relation** from $A$ to $B$ is a set of pairs drawn from $A\times B$. A **function** from $A$ to $B$ assigns each element of $A$ exactly one element of $B$. Every starting element has a single image. Different elements can have the same image.

The rule $f(x)=2x+1$, with domain $D=\{0;1;2\}$ and codomain $E=\{1;3;5\}$, defines a function.

| $x$ | $0$ | $1$ | $2$ |
|---|---|---|---|
| $f(x)$ | $1$ | $3$ | $5$ |

The table shows every image because the domain contains only these three elements. To check a correspondence, use the stated domain.
:::

## Propositions and connectives

:::definizione{#esempi titolo="And, or, not"}
A **proposition** is a statement with a truth value. “$4$ is even” is true. “$4$ is odd” is false. A statement such as “$x>3$” becomes true or false when the value of $x$ is specified.

The conjunction $p\land q$ is true when both propositions are true. The disjunction $p\lor q$ is an **inclusive or**. It is true when at least one proposition is true, including the case where both are true. The negation $\neg p$ reverses the truth value.

| $p$ | $q$ | $p\land q$ | $p\lor q$ |
|---|---|---|---|
| True | True | True | True |
| True | False | False | True |
| False | True | False | True |
| False | False | False | False |

For example, “$6$ is even and greater than $10$” is false, while “$6$ is even or greater than $10$” is true. Intersection corresponds to “and,” while union corresponds to “or.”
:::

## Implications and their negations

:::teorema{#problemi titolo="Hypotheses, conclusions, and counterexamples"}
The implication $p\Rightarrow q$ is read “if $p$, then $q$.” It is false when the hypothesis $p$ is true and the conclusion $q$ is false. An example in which this happens is a **counterexample**.

“If an integer is a multiple of $6$, then it is a multiple of $3$” is true. The converse is false since $3$ is a multiple of $3$ and is not a multiple of $6$. The **contrapositive** $\neg q\Rightarrow\neg p$ is equivalent to the original implication. It says that if an integer is not a multiple of $3$, then it is not a multiple of $6$.

The negation of “every student submitted the assignment” is “at least one student did not submit the assignment.” The negation of “at least one student submitted the assignment” is “no student submitted the assignment.” The reference group must stay the same.

For a real number $x$, the negation of $x>4$ is $x\le4$, because equality also makes the original statement false. Similarly, negating “$x>0$ and $x<3$” gives “$x\le0$ or $x\ge3$.”
:::

:::esempio{titolo="Sufficient and necessary conditions"}
For integers, being a multiple of $12$ is **sufficient** for being a multiple of $4$ because $12=3\cdot4$. Being a multiple of $4$ is therefore **necessary** for being a multiple of $12$. The integer $8$ is a counterexample to the converse because it is divisible by $4$ and fails the divisibility test for $12$.
:::

## An example with several operations

:::esempio{#applicazioni titolo="The union first, then the complement"}
Let $U=\{1;2;3;4;5;6\}$, $A=\{1;2;3\}$, and $B=\{3;4;5\}$. To find $U\setminus(A\cup B)$, first calculate $A\cup B=\{1;2;3;4;5\}$. Removing these elements from the universal set leaves $\{6\}$.

The result contains the elements that belong to neither $A$ nor $B$. It also equals the intersection of the complements.
$$
(U\setminus A)\cap(U\setminus B)=\{4;5;6\}\cap\{1;2;6\}=\{6\}.
$$
Checking the elements one by one verifies the equality without relying on memory of the notation.
:::

## Checks before answering

:::osservazione{#controlli titolo="Reading the question precisely"}
Identify whether the question asks for a set, an element, or a cardinality. Distinguish “at least one” from “exactly one” and “none” from “not all.” For a Cartesian product, check both positions in the ordered pair. For a complement, identify the universal set.

A single counterexample suffices to disprove a universal statement. A single example that satisfies the condition gives information about that case alone. In a counting problem, all cardinalities must be nonnegative integers. The intersection has at most as many elements as either set.
:::
