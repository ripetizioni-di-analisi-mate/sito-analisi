---
titolo: Elementary logic
sommario: What a proposition is, how propositions are combined with connectives, how statements with quantifiers are negated, and how proofs are built.
---

## Propositions

:::definizione{#proposizioni titolo="Proposition"}
A **proposition** is a statement for which it makes sense to ask whether it is true or false, and which has exactly one of the two truth values. Propositions are denoted by letters such as $p$, $q$, $r$. An equality between numbers and a theorem are examples of propositions.

- "$7$ is a prime number": true proposition.
- "$2 + 2 = 5$": false proposition.
- "$x + 1 = 3$": statement with a variable, which becomes a proposition when a value is assigned to $x$. A statement of this kind is called a **predicate** and is denoted by $p(x)$; predicates also become propositions through quantifiers.
:::

## Logical connectives

Connectives build new propositions from given propositions; the truth value of the result depends only on the truth values of the parts, according to the truth tables.

:::definizione{#negazione titolo="Negation"}
The **negation** of $p$, denoted by $\lnot p$ ("not $p$"), is the proposition that is true when $p$ is false and false when $p$ is true.
$$
\begin{array}{c|c}
p & \lnot p \\
\hline
\text{T} & \text{F} \\
\text{F} & \text{T}
\end{array}
$$
The negation of "$7$ is prime" is "$7$ is not prime". Double negation gives back the original proposition: $\lnot(\lnot p)$ has the same truth table as $p$. Negation appears in counterexamples and in proofs by contradiction.
:::

:::definizione{#congiunzione-disgiunzione titolo="Conjunction and disjunction"}
The **conjunction** $p \land q$ ("$p$ and $q$") is true when $p$ and $q$ are both true. The **disjunction** $p \lor q$ ("$p$ or $q$") is true when *at least one* of $p$ and $q$ is true, including the cases in which both are.
$$
\begin{array}{c|c|c|c}
p & q & p \land q & p \lor q \\
\hline
\text{T} & \text{T} & \text{T} & \text{T} \\
\text{T} & \text{F} & \text{F} & \text{T} \\
\text{F} & \text{T} & \text{F} & \text{T} \\
\text{F} & \text{F} & \text{F} & \text{F}
\end{array}
$$
For $x = 2$: the proposition "$x > 0 \land x > 3$" is false, because the second part is false; the proposition "$x > 0 \lor x > 3$" is true, because the first part is true.

::venn{zone="ab" nomi="P,Q" universo=1 titolo="$P$ and $Q$ are the truth sets of $p(x)$ and $q(x)$: $p \land q$ is true in the intersection $P \cap Q$"}

::venn{zone="a,ab,b" nomi="P,Q" universo=1 titolo="$p \lor q$ is true in the union $P \cup Q$, including the part common to the two sets"}

:::

:::osservazione
In mathematics "or" is **inclusive**: $p \lor q$ is true also when $p$ and $q$ are true together. The statement "$6$ is even or $6$ is divisible by $3$" is true, and both parts are true.
:::

:::teorema{#leggi-di-de-morgan titolo="De Morgan's laws"}
$$
\lnot (p \land q) \equiv \lnot p \lor \lnot q,
\qquad
\lnot (p \lor q) \equiv \lnot p \land \lnot q .
$$
The symbol $\equiv$ indicates that the two propositions have the same truth table. Negation swaps "and" with "or" and negates the individual parts. These laws are used whenever a compound condition is negated, for example a pair of inequalities; they are verified by comparing the truth tables row by row.

::venn{zone="a,b,u" nomi="P,Q" titolo="$\lnot(p \land q)$ is true in the complement of $P \cap Q$, that is, outside $P$ or outside $Q$: it is the truth set of $\lnot p \lor \lnot q$"}

::venn{zone="u" nomi="P,Q" titolo="$\lnot(p \lor q)$ is true in the complement of $P \cup Q$, that is, outside $P$ and outside $Q$: it is the truth set of $\lnot p \land \lnot q$"}

:::

:::esempio{titolo="Negating a conjunction"}
The negation of "$x > 0$ and $x < 5$" is "$x \leq 0$ or $x \geq 5$". Since negating $x > 0$ means asserting $x \leq 0$, by **De Morgan's laws** the conjunction turns into the **disjunction** of the two negations.
:::

## Implication

:::definizione{#implicazione titolo="Implication"}
The **implication** $p \Rightarrow q$ ("if $p$ then $q$") has $p$ as hypothesis and $q$ as conclusion, and it is false in one case only: $p$ true and $q$ false.
$$
\begin{array}{c|c|c}
p & q & p \Rightarrow q \\
\hline
\text{T} & \text{T} & \text{T} \\
\text{T} & \text{F} & \text{F} \\
\text{F} & \text{T} & \text{T} \\
\text{F} & \text{F} & \text{T}
\end{array}
$$
When $p$ is false the implication is true whatever $q$ is: the implication makes a claim only in the cases in which the hypothesis is true. For example "if $x > 3$ then $x > 1$" is true for every real $x$; for $x = 0$ the hypothesis is false and the implication remains true. Every theorem has this form, therefore the truth table of the implication governs the use of theorems.

::venn{tipo="incluso" zone="ab" nomi="Q,P" universo=1 titolo="$p(x) \Rightarrow q(x)$ true for every $x$: the truth set $P$ of the hypothesis is contained in the truth set $Q$ of the conclusion"}

:::

:::teorema{#negazione-dell-implicazione titolo="Negation of an implication"}
$$
\lnot (p \Rightarrow q) \equiv p \land \lnot q .
$$
The implication is false only when the hypothesis is true and the conclusion is false, therefore negating it means asserting exactly this case: the negation of an implication is a **conjunction**. To show that "if $x > 1$ then $x^2 > 4$" is false, one exhibits a value with $x > 1$ and $x^2 \leq 4$, for example $x = \dfrac{3}{2}$, for which $x^2 = \dfrac{9}{4} \leq 4$.
:::

:::definizione{#inversa-contronominale titolo="Converse and contrapositive"}
Given the implication $p \Rightarrow q$:

- the **converse** is $q \Rightarrow p$ (hypothesis and conclusion are swapped);
- the **contrapositive** is $\lnot q \Rightarrow \lnot p$ (hypothesis and conclusion are swapped and both are negated).

The contrapositive is **equivalent** to the original implication: $p \Rightarrow q \equiv \lnot q \Rightarrow \lnot p$, because the two truth tables coincide. The converse instead has a different truth table, therefore it can be *false* even when the implication is true. Proof by contrapositive is based on the equivalence with the contrapositive.
:::

:::esempio
Implication: "if $n$ is a multiple of $4$, then $n$ is even", true. Contrapositive: "if $n$ is odd, then $n$ is not a multiple of $4$", true, as the equivalence guarantees. Converse: "if $n$ is even, then $n$ is a multiple of $4$", **false**, because $n = 6$ is even and $6 = 4 \cdot 1 + 2$ has remainder $2$ in the division by $4$.

::venn{tipo="incluso" nomi="Even,M" zone="ab" elementi="a:2,6,10;ab:4,8,12;u:1,3,5" titolo="The set $M$ of the multiples of $4$ is contained in the set of even numbers: an odd number lies outside the even numbers and therefore outside the multiples of $4$, while $2$, $6$, $10$ are even and not multiples of $4$"}

:::

:::attenzione
From $p \Rightarrow q$ true and $q$ true it does *not* follow that $p$ is true. The implication "if $x > 2$ then $x^2 > 4$" is true; for $x = -3$ the conclusion $x^2 > 4$ is true and the hypothesis $x > 2$ is false.
:::

## Necessary and sufficient condition

:::definizione{#necessaria-sufficiente titolo="Necessary condition and sufficient condition"}
If the implication $p \Rightarrow q$ is true:

- $p$ is a **sufficient condition** for $q$: the truth of $p$ is enough to guarantee the truth of $q$;
- $q$ is a **necessary condition** for $p$: if $q$ is false, then $p$ is false too, by the contrapositive $\lnot q \Rightarrow \lnot p$; hence $p$ can be true *only if* $q$ is true.

If both $p \Rightarrow q$ and $q \Rightarrow p$ hold, one writes $p \Leftrightarrow q$ ("$p$ *if and only if* $q$") and each of the two is a necessary and sufficient condition for the other. In theorems the hypothesis is a sufficient condition for the conclusion; recognizing which direction of the implication has been proved makes it possible to use the theorem in the correct direction.
:::

:::esempio
For a natural number $n$, "being a multiple of $4$" is a *sufficient* condition for "being even", because every multiple of $4$ is even; consequently "being even" is a necessary condition for "being a multiple of $4$". The condition "being even" is instead *not* sufficient for "being a multiple of $4$", because $n = 6$ is even and has remainder $2$ in the division by $4$. In the real numbers $x = 2 \Leftrightarrow x^3 = 8$ holds, because the cube takes each value only once, therefore each equality is a necessary and sufficient condition for the other.
:::

## Quantifiers

:::definizione{#quantificatori titolo="Universal and existential quantifier"}
A predicate $p(x)$ becomes a proposition when the variable is quantified:

- $\forall x \in A : p(x)$ ("for every $x$ in $A$, $p(x)$ holds") is true when $p(x)$ is true for *all* the elements of $A$;
- $\exists x \in A : p(x)$ ("there exists at least one $x$ in $A$ for which $p(x)$ holds") is true when $p(x)$ is true for *at least one* element of $A$.

To prove a universal proposition one needs an argument valid for every element, and a single **counterexample** is enough to refute it; to prove an existential proposition it is enough to exhibit an element that satisfies the predicate.
:::

:::esempio
"$\forall x \in \mathbb{R} : x^2 \geq 0$" is true, because the square of every real number is greater than or equal to zero. "$\forall x \in \mathbb{R} : x^2 > 0$" is false, because for $x = 0$ one has $x^2 = 0$, therefore $x = 0$ is a **counterexample**. "$\exists x \in \mathbb{R} : x^2 = 2$" is true, because $x = \sqrt{2}$ satisfies the equality.

::grafico{f="x^2;2" xmin=-3 xmax=3 ymin=-1 ymax=5 punti="0,0,pieno;1.4142,2,pieno;-1.4142,2,pieno" etichette="0.2,-0.6,x = 0;1.6,1.5,x = √2;-2.35,1.5,x = −√2" titolo="$y = x^2$ lies above the $x$-axis at every point other than $x = 0$, which is the counterexample for $x^2 > 0$; the line $y = 2$ meets the graph at $x = \sqrt{2}$ and at $x = -\sqrt{2}$"}

:::

:::teorema{#negazione-dei-quantificatori titolo="Negation of quantifiers"}
$$
\lnot \bigl( \forall x \in A : p(x) \bigr) \equiv \exists x \in A : \lnot p(x),
\qquad
\lnot \bigl( \exists x \in A : p(x) \bigr) \equiv \forall x \in A : \lnot p(x) .
$$
Negation **swaps** $\forall$ with $\exists$ and **negates the predicate**. With several quantifiers one proceeds from the outside inward, swapping them one by one, and at the end negates the predicate. This rule is needed throughout Analysis, because the definitions of limit contain chains of quantifiers and their negation is the first step of many verifications and proofs.
:::

:::esempio{titolo="Negation with two quantifiers"}
The proposition "$\forall x \in \mathbb{R} \ \exists y \in \mathbb{R} : y > x$" is true, because for every $x$ the number $y = x + 1$ satisfies $y > x$. Its negation is "$\exists x \in \mathbb{R} \ \forall y \in \mathbb{R} : y \leq x$", which asserts the existence of a real number greater than or equal to every real number, and is **false**.
:::

:::osservazione
The order of the quantifiers **changes the meaning**. "$\forall x \ \exists y : y > x$" is true in the reals, because $y$ can depend on $x$; "$\exists y \ \forall x : y > x$" is false, because it requires a single $y$ greater than *all* the $x$, including $y$ itself.
:::

## Proof techniques

The following three techniques prove an implication $p \Rightarrow q$ in different ways.

:::definizione{#dimostrazione-diretta titolo="Direct proof"}
The hypothesis $p$ is assumed true and, through a **chain of deductions**, one arrives at the conclusion $q$. This is the structure of most proofs and of every worked exercise: each step is a small deduction from what has already been established.
:::

:::esempio{titolo="The sum of two even numbers is even"}
By hypothesis $m$ and $n$ are even, therefore $m = 2a$ and $n = 2b$ with $a$ and $b$ integers. Then
$$
m + n = 2a + 2b = 2(a + b) .
$$
The sum is twice the integer $a + b$, hence it is **even**.
:::

:::definizione{#dimostrazione-per-contronominale titolo="Proof by contrapositive"}
To prove $p \Rightarrow q$ one proves the **contrapositive** $\lnot q \Rightarrow \lnot p$, which is an equivalent proposition. It is convenient when the negation of the conclusion is easier to handle than the hypothesis, as in statements about even and odd numbers.
:::

:::esempio{titolo="If n² is even, then n is even"}
The contrapositive is: if $n$ is odd, then $n^2$ is odd. By hypothesis $n = 2a + 1$ with $a$ an integer, therefore
$$
n^2 = 4a^2 + 4a + 1 = 2(2a^2 + 2a) + 1 ,
$$
which is an odd number. The contrapositive is true, hence the original implication is also **true**.
:::

:::definizione{#dimostrazione-per-assurdo titolo="Proof by contradiction"}
One assumes that the conclusion is false and, deducing correctly, arrives at a **contradiction**, that is, at a false proposition or at the negation of the hypothesis. Since only true conclusions follow from true premises, the assumption was false, therefore the conclusion is true. To prove $p \Rightarrow q$ by contradiction one assumes $p \land \lnot q$, which is the negation of the implication.
:::

:::esempio{titolo="The square root of 2 is irrational"}
By contradiction, suppose $\sqrt{2}$ is rational, that is, $\sqrt{2} = \dfrac{m}{n}$ with $m$ and $n$ positive integers with no common factors. Squaring gives $m^2 = 2n^2$, therefore $m^2$ is even; since the square of an odd number is odd, $m$ is even, that is, $m = 2k$ with $k$ an integer. Substituting gives $4k^2 = 2n^2$, that is, $n^2 = 2k^2$, therefore by the same argument $n$ is also even. Then $m$ and $n$ have the common factor $2$, contrary to the choice made at the beginning. The assumption leads to a contradiction, hence $\sqrt{2}$ is **irrational**.
:::
