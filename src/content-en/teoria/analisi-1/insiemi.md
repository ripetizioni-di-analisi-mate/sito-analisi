---
titolo: Sets, induction and elementary functions
sommario: The language of sets and the number sets from N to R, the principle of induction and the binomial theorem, then the elementary functions with their graphs — the starting toolkit for all of analysis.
---

## The language of sets

:::definizione{#insiemi titolo="Set, membership, inclusion"}
A **set** is a collection of objects, called **elements**. The notation $x \in A$ means that $x$ is an element of $A$; $x \notin A$ means that it is not. A set is given by listing its elements, as in $\{1, 2, 3\}$, or by stating the property that identifies them: $\{x \in E : P(x)\}$ is the set of the elements of $E$ for which $P(x)$ is true. The empty set $\emptyset$ is the set with no elements.

$A \subseteq B$ ($A$ is contained in $B$, or $A$ is a **subset** of $B$) means that *every* element of $A$ also belongs to $B$. Equality of sets is equivalent to **double inclusion**:
$$
A = B \iff
\begin{cases}
A \subseteq B \\[2pt]
B \subseteq A
\end{cases}
$$
Double inclusion is the method used to prove that two sets are equal: the two inclusions are verified *separately*.

::venn{tipo="incluso" nomi="B,A" zone="ab" titolo="$A \subseteq B$: every element of $A$ also belongs to $B$"}

:::

:::esempio
$A = \{x \in \mathbb{R} : x^2 < 4\}$. We have $1 \in A$ because $1^2 = 1 < 4$, and $3 \notin A$ because $3^2 = 9 \geq 4$. Moreover $\{0, 1\} \subseteq A$, because both elements satisfy the condition $x^2 < 4$.
:::

:::attenzione
The symbols $\in$ and $\subseteq$ have **different** meanings: $\in$ relates an element to a set, $\subseteq$ relates two sets. For $A = \{1, 2\}$ the correct statements are $1 \in A$ and $\{1\} \subseteq A$; the statements $1 \subseteq A$ and $\{1\} \in A$ are **false**, because $\{1\}$ is not one of the two elements of $A$ and $1$ is not a set.
:::

## Operations on sets

:::definizione{#operazioni-tra-insiemi titolo="Union, intersection, difference, complement"}
For $A$ and $B$ subsets of a universal set $E$:
$$
\begin{gathered}
A \cup B = \{x : x \in A \text{ or } x \in B\}, \qquad
A \cap B = \{x : x \in A \text{ and } x \in B\}, \\[6pt]
A \setminus B = \{x : x \in A \text{ and } x \notin B\}, \qquad
A^{c} = E \setminus A .
\end{gathered}
$$
The "or" of the union is *not* exclusive: the elements common to $A$ and $B$ belong to the union. If $A \cap B = \emptyset$, the sets are called **disjoint**. The complement depends on the universal set $E$; for subsets of $\mathbb{R}$, unless stated otherwise, the universal set is $\mathbb{R}$. The operations translate the logical connectives, therefore the solution set of a system of inequalities is the **intersection** of the solution sets of the individual inequalities, and the solution set of an inequality solved by cases is the **union** of the solutions of the cases.

::venn{tipo="disgiunti" titolo="Disjoint sets: $A \cap B = \emptyset$"}

::venn{ambiente="E" zone="u" universo=1 titolo="De Morgan's law $(A \cup B)^{c} = A^{c} \cap B^{c}$: the elements outside the union are outside $A$ and outside $B$"}

::venn{ambiente="E" zone="a,b,u" universo=1 titolo="De Morgan's law $(A \cap B)^{c} = A^{c} \cup B^{c}$: the elements outside the intersection are outside $A$ or outside $B$"}

::venn{tipo="tre" zone="ab,ac,abc" titolo="Distributive property $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$"}

::venn{tipo="tre" zone="a,ab,ac,abc,bc" titolo="Distributive property $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$"}

:::

:::esempio
$A = \{1, 2, 3, 4\}$ and $B = \{3, 4, 5\}$, with universal set $E = \{1, 2, 3, 4, 5, 6\}$:
$$
A \cup B = \{1, 2, 3, 4, 5\}, \quad A \cap B = \{3, 4\}, \quad A \setminus B = \{1, 2\}, \quad B \setminus A = \{5\}, \quad A^{c} = \{5, 6\} .
$$

::venn{ambiente="E" zone="a,ab,b" elementi="a:1,2;ab:3,4;b:5;u:6" titolo="$A \cup B = \{1, 2, 3, 4, 5\}$"}

::venn{ambiente="E" zone="ab" elementi="a:1,2;ab:3,4;b:5;u:6" titolo="$A \cap B = \{3, 4\}$"}

::venn{ambiente="E" zone="a" elementi="a:1,2;ab:3,4;b:5;u:6" titolo="$A \setminus B = \{1, 2\}$"}

::venn{ambiente="E" zone="a,b" elementi="a:1,2;ab:3,4;b:5;u:6" titolo="$(A \setminus B) \cup (B \setminus A) = \{1, 2, 5\}$: the elements that lie in only one of the two sets form the symmetric difference $A \,\triangle\, B$"}

::venn{ambiente="E" zone="b,u" elementi="a:1,2;ab:3,4;b:5;u:6" titolo="$A^{c} = E \setminus A = \{5, 6\}$"}

:::

:::definizione{#prodotto-cartesiano titolo="Cartesian product"}
The **Cartesian product** of $A$ and $B$ is the set of ordered pairs
$$
A \times B = \{(a, b) : a \in A,\ b \in B\} .
$$
In pairs the order *matters*, so in general $A \times B \neq B \times A$: for $A = \{1, 2\}$ and $B = \{0\}$ we have $A \times B = \{(1, 0), (2, 0)\}$ and $B \times A = \{(0, 1), (0, 2)\}$. The set $\mathbb{R}^2 = \mathbb{R} \times \mathbb{R}$ is the **Cartesian plane**: the graphs of functions are subsets of it, therefore the Cartesian product is the setting of the whole chapter on functions.
:::

## The number sets

:::definizione{#insiemi-numerici titolo="The number sets N, Z, Q, R"}
$$
\mathbb{N} = \{0, 1, 2, 3, \dots\}, \qquad
\mathbb{Z} = \{\dots, -2, -1, 0, 1, 2, \dots\}, \qquad
\mathbb{Q} = \left\{ \frac{m}{n} : m \in \mathbb{Z},\ n \in \mathbb{N},\ n \geq 1 \right\} .
$$
$\mathbb{R}$ is the set of real numbers, which can be represented as finite or infinite decimal expansions; the rationals are *exactly* those with a terminating or repeating decimal expansion. The strict inclusions $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$ hold. Each extension makes solvable equations that were not solvable before: $x + 3 = 1$ has no solution in $\mathbb{N}$ and has one in $\mathbb{Z}$; $2x = 1$ has no solution in $\mathbb{Z}$ and has one in $\mathbb{Q}$; $x^2 = 2$ has no solution in $\mathbb{Q}$, as the theorem on the irrationality of $\sqrt{2}$ shows, and has one in $\mathbb{R}$. Real numbers that are not rational are called **irrational**. $\mathbb{Q}$ is **dense** in $\mathbb{R}$: between two distinct real numbers there is always a rational number, and also an irrational number.
:::

::::teorema{#radice-di-due titolo="Irrationality of the square root of 2"}
There is no rational number $x$ such that $x^2 = 2$: the number $\sqrt{2}$ is **irrational**. The theorem shows that $\mathbb{Q}$ has **gaps**, since elementary geometry already produces the length $\sqrt{2}$ as the diagonal of the square with side $1$. The same argument by contradiction proves the irrationality of $\sqrt{3}$, $\sqrt{5}$, $\sqrt{6}$ and in general of $\sqrt{p}$ with $p$ prime.

:::dimostrazione
Suppose, **by contradiction**, that there exists a rational number whose square is $2$, and write it as a fraction in lowest terms: $x = \dfrac{m}{n}$ with $m$ and $n$ integers having no common divisors, $n \geq 1$. From $\dfrac{m^2}{n^2} = 2$ it follows that $m^2 = 2n^2$, so $m^2$ is even. The square of an odd number is odd, therefore $m$ is even: $m = 2k$ with $k$ an integer. Substituting gives $4k^2 = 2n^2$, that is $n^2 = 2k^2$, so $n^2$ is also even and, for the same reason, $n$ is even. Then $m$ and $n$ have the common divisor $2$, which **contradicts** the assumption that the fraction is in lowest terms. The contradiction shows that no such rational number exists.
:::
::::

## Intervals

:::definizione{#intervalli titolo="Intervals and their notation"}
An **interval** is a subset $I \subseteq \mathbb{R}$ with this property: given two points of $I$, *every* real number between them belongs to $I$. For real $a < b$:
$$
\begin{gathered}
(a, b) = \{x : a < x < b\}, \qquad [a, b] = \{x : a \leq x \leq b\}, \\[6pt]
[a, b) = \{x : a \leq x < b\}, \qquad (a, b] = \{x : a < x \leq b\}, \\[6pt]
(a, +\infty) = \{x : x > a\}, \qquad (-\infty, b] = \{x : x \leq b\}, \qquad (-\infty, +\infty) = \mathbb{R} .
\end{gathered}
$$
A round bracket excludes the endpoint, a square bracket includes it; next to $+\infty$ and $-\infty$, which are not real numbers, the bracket is *always* round. $[a, b]$ is called a **closed bounded interval**, $(a, b)$ an **open interval**. The domains of the elementary functions and the solution sets of inequalities are intervals or unions of intervals, so this notation appears in every function study.
:::

:::esempio{titolo="Operations on intervals"}
$A = [0, 4)$ and $B = (2, 6]$:
$$
A \cup B = [0, 6], \qquad A \cap B = (2, 4), \qquad A \setminus B = [0, 2], \qquad A^{c} = (-\infty, 0) \cup [4, +\infty) .
$$
The point $2$ belongs to $A \setminus B$ because $2 \in A$ and $2 \notin B$, since $B$ excludes its own left endpoint.
:::

## Upper bounds, lower bounds, maximum and minimum

:::definizione{#maggioranti-minoranti titolo="Upper bound, lower bound, bounded set"}
Let $A \subseteq \mathbb{R}$ be nonempty. A number $M \in \mathbb{R}$ is an **upper bound** of $A$ if $a \leq M$ for every $a \in A$; a number $m \in \mathbb{R}$ is a **lower bound** if $m \leq a$ for every $a \in A$. $A$ is called bounded above if it has at least one upper bound, bounded below if it has at least one lower bound, **bounded** if it is both bounded above and bounded below. An upper bound may *not* belong to the set: the upper bounds of $(0, 1)$ are all the numbers in $[1, +\infty)$, and none of them lies in $(0, 1)$. If $M$ is an upper bound, every number larger than $M$ is one too, so the useful information is the smallest of the upper bounds: this number, when it exists, is the supremum.
:::

:::definizione{#massimo-minimo titolo="Maximum and minimum"}
The **maximum** of $A$ is an upper bound that *belongs* to the set:
$$
M = \max A \iff
\begin{cases}
M \in A \\[2pt]
a \leq M \quad \text{for every } a \in A
\end{cases}
$$
The **minimum** is defined analogously with lower bounds. The maximum, when it exists, is **unique**: if $M_1$ and $M_2$ are both maxima, then $M_1 \leq M_2$ because $M_2$ is an upper bound and $M_1 \in A$, and $M_2 \leq M_1$ for the same reason, so $M_1 = M_2$.
:::

:::esempio
$[0, 1]$ has minimum $0$ and maximum $1$. The interval $(0, 1)$ **has no maximum**: indeed, for every $x \in (0, 1)$ the point $\dfrac{x + 1}{2}$ belongs to $(0, 1)$ and is greater than $x$, so no element of the set is an upper bound. For the same reason $(0, 1)$ **has no minimum**.
:::

## Supremum and infimum

:::definizione{#sup-inf titolo="Supremum and infimum"}
Let $A \subseteq \mathbb{R}$ be nonempty. The **supremum** of $A$, denoted by $\sup A$, is the minimum of the set of upper bounds of $A$; the **infimum** $\inf A$ is the maximum of the set of lower bounds. If $A$ is not bounded above we set $\sup A = +\infty$; if it is not bounded below, $\inf A = -\infty$. If the maximum exists, then $\sup A = \max A$; conversely, if $\sup A \in A$, then $\sup A$ is the maximum of $A$. The supremum exists *even* when the maximum does not exist: $\sup\,(0, 1) = 1$ and $\inf\,(0, 1) = 0$, and neither of them belongs to the interval. For this reason sup and inf are the tools used to describe the boundedness of a set and, in the following chapters, of a function or a sequence.
:::

::::teorema{#caratterizzazione-sup titolo="Epsilon characterization of sup and inf"}
Let $A \subseteq \mathbb{R}$ be nonempty and $L \in \mathbb{R}$. Then $L = \sup A$ *if and only if*
$$
\begin{cases}
a \leq L \quad \text{for every } a \in A \\[4pt]
\text{for every } \varepsilon > 0 \ \text{there exists } a \in A \ \text{such that } a > L - \varepsilon
\end{cases}
$$
Analogously, $\ell = \inf A$ if and only if $\ell \leq a$ for every $a \in A$ and for every $\varepsilon > 0$ there exists $a \in A$ such that $a < \ell + \varepsilon$. The first condition says that $L$ is an **upper bound**; the second says that, going below $L$ by *any* amount $\varepsilon$, the set contains an element beyond $L - \varepsilon$. In verifications the second condition becomes an inequality in the variable that describes the elements of $A$.

:::dimostrazione
The second condition states that, for every $\varepsilon > 0$, the number $L - \varepsilon$ is *not* an upper bound of $A$. Since every number less than $L$ can be written as $L - \varepsilon$ for a suitable $\varepsilon > 0$, the two conditions together are equivalent to: $L$ is an upper bound of $A$ and no number less than $L$ is one. This means that $L$ is the **least upper bound**, that is $L = \sup A$. For the infimum the argument is the same, with lower bounds.
:::
::::

:::osservazione
For unbounded sets the characterization takes a different form: $\sup A = +\infty$ is equivalent to saying that for every $M > 0$ there exists $a \in A$ with $a > M$. In particular $\sup \mathbb{N} = +\infty$, because for every real $M$ there exists a natural number greater than $M$ (**Archimedean property** of the real numbers). This fact comes into almost every verification with $\varepsilon$, to guarantee the existence of a natural number $n > \dfrac{1}{\varepsilon}$.
:::

:::esempio{titolo="Verification with the characterization"}
$A = \left\{ \dfrac{1}{n} : n \in \mathbb{N},\ n \geq 1 \right\}$. The supremum is $1$: indeed $1 \in A$ and $\dfrac{1}{n} \leq 1$ for every $n \geq 1$, so $1$ is the maximum, and the maximum coincides with the supremum. The infimum is $0$: since $\dfrac{1}{n} > 0$ for every $n$, the number $0$ is a lower bound; given $\varepsilon > 0$, by the **Archimedean property** there exists a natural number $n > \dfrac{1}{\varepsilon}$, and for this $n$ we have $\dfrac{1}{n} < \varepsilon$. The two conditions of the characterization are **satisfied**, therefore $\inf A = 0$. Since $0 \notin A$, the set **has no minimum**.
:::

## The completeness of R

:::teorema{#completezza titolo="Completeness of R"}
Every nonempty subset of $\mathbb{R}$ that is bounded above has a **supremum** in $\mathbb{R}$; every nonempty subset that is bounded below has an infimum. This property is called **completeness** and is *taken* as an axiom of the real numbers. It distinguishes $\mathbb{R}$ from $\mathbb{Q}$ and is the hypothesis on which the existence theorems of analysis depend: the proof of the intermediate zero theorem, in the chapter on limits and continuity, constructs the zero precisely as the supremum of a set.
:::

:::osservazione
In $\mathbb{Q}$ completeness **does not hold**. Let $A = \{x \in \mathbb{Q} : x \geq 0,\ x^2 < 2\}$: it is nonempty, because $1 \in A$, and it is bounded above, because $x \geq 2$ implies $x^2 \geq 4 > 2$, so $2$ is an upper bound. In $\mathbb{R}$ its supremum is $\sqrt{2}$, which is not rational. Among the rational numbers alone, on the other hand, $A$ has no supremum. Every rational upper bound $L$ satisfies $L > \sqrt{2}$: if $L < \sqrt{2}$, by the **density** of $\mathbb{Q}$ there would exist a rational $q$ with $L < q < \sqrt{2}$, which would belong to $A$ (it is positive, because $L \geq 1$, and its square is less than $2$) and would exceed $L$; the equality $L = \sqrt{2}$ is excluded because $\sqrt{2} \notin \mathbb{Q}$. Again by density there then exists a rational $q'$ with $\sqrt{2} < q' < L$, and $q'$ is an upper bound of $A$ smaller than $L$, since every $x \in A$ satisfies $x < \sqrt{2} < q'$. Hence no rational upper bound is the least of the rational upper bounds and, within $\mathbb{Q}$, the set $A$ **has no supremum**.
:::

## The principle of induction

:::teorema{#induzione titolo="Principle of induction"}
Let $P(n)$ be a statement that depends on a natural number $n$ and let $n_0 \in \mathbb{N}$. If
$$
\begin{cases}
P(n_0) \ \text{is true} \\[4pt]
\text{for every } n \geq n_0, \ \text{if } P(n) \ \text{is true then } P(n+1) \ \text{is true}
\end{cases}
$$
then $P(n)$ is true for *every* $n \geq n_0$. The first condition is called the **base case**, the second the **inductive step**; in the step, the statement $P(n)$ that is assumed true is called the **inductive hypothesis**. The principle is taken as a property of the set $\mathbb{N}$. It is used to prove identities, inequalities and divisibility properties that depend on a natural index, and every proof by induction is organized in the same two points: verification of the base case and verification of the step. The first applications are the formula for the sum of the first $n$ natural numbers and Bernoulli's inequality.
:::

:::attenzione
The inductive step *alone* is not enough: without the base case **nothing can be concluded**. For the statement $P(n)$: "$n \geq n + 1$" the step is verified, because adding $1$ to both sides of $n \geq n + 1$ gives $n + 1 \geq n + 2$; the base case is **false** for every choice of $n_0$, and indeed no $P(n)$ is true.
:::

## The sum of the first n natural numbers

::::teorema{#somma-dei-primi-n titolo="Sum of the first n natural numbers"}
For every $n \geq 1$:
$$
1 + 2 + \cdots + n = \sum_{k=1}^{n} k = \frac{n(n+1)}{2} .
$$
It is the first example of a **proof by induction**, and the formula reappears in the computation of sums and in the chapter on series. For example, the sum of the first $100$ natural numbers is $\dfrac{100 \cdot 101}{2} = 5050$.

:::dimostrazione
Base case ($n = 1$): the left-hand side equals $1$ and the right-hand side $\dfrac{1 \cdot 2}{2} = 1$, so $P(1)$ is true. Step: assume $P(n)$ is true, that is $\displaystyle\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$. Then
$$
\sum_{k=1}^{n+1} k
= \sum_{k=1}^{n} k + (n+1)
= \frac{n(n+1)}{2} + (n+1)
= (n+1)\left( \frac{n}{2} + 1 \right)
= \frac{(n+1)(n+2)}{2} ,
$$
which is the formula with $n + 1$ in place of $n$. Hence $P(n)$ implies $P(n+1)$ and, by the **principle of induction**, the formula holds for every $n \geq 1$.
:::
::::

## Bernoulli's inequality

::::teorema{#bernoulli titolo="Bernoulli's inequality"}
For every real number $x \geq -1$ and every $n \in \mathbb{N}$:
$$
(1 + x)^n \geq 1 + nx .
$$
The inequality bounds a power *from below* by an expression of first degree in $n$, which is much simpler to control. With $x = 1$ it gives $2^n \geq 1 + n$ for every $n$. It is used in the study of the geometric sequence and in the construction of the number $e$; see the chapter on sequences.

:::dimostrazione
We proceed by **induction** on $n$, with $x \geq -1$ fixed. Base case ($n = 0$): $(1 + x)^0 = 1$ and $1 + 0 \cdot x = 1$, so the inequality holds with equality. Step: assume $(1 + x)^n \geq 1 + nx$. Since $x \geq -1$, the factor $1 + x$ is **nonnegative**, so multiplying both sides of the inductive hypothesis by $1 + x$ does *not* change the direction of the inequality:
$$
(1 + x)^{n+1}
= (1 + x)^n (1 + x)
\geq (1 + nx)(1 + x)
= 1 + (n+1)x + nx^2
\geq 1 + (n+1)x ,
$$
since $nx^2 \geq 0$. By the **principle of induction** the inequality holds for every $n$. The hypothesis $x \geq -1$ is used in the **step**: it guarantees that multiplication by $1 + x$ preserves the direction of the inequality.
:::
::::

## The factorial

:::definizione{#fattoriale titolo="Factorial"}
For $n \geq 1$ the **factorial** of $n$ is the product of the natural numbers from $1$ to $n$:
$$
n! = n \cdot (n-1) \cdots 2 \cdot 1, \qquad 0! = 1 .
$$
The **recursive formula** $(n+1)! = (n+1) \cdot n!$ holds, and the choice $0! = 1$ makes it valid also for $n = 0$, besides giving meaning to the formulas for binomial coefficients. The first values are $1! = 1$, $2! = 2$, $3! = 6$, $4! = 24$, $5! = 120$. The factorial counts the ways of ordering $n$ distinct objects and grows *very rapidly*: $10! = 3628800$. In computations factorials are simplified with the recursive formula, for example $\dfrac{10!}{8!} = 10 \cdot 9 = 90$.
:::

## Binomial coefficients

:::definizione{#coefficiente-binomiale titolo="Binomial coefficient"}
For $n, k \in \mathbb{N}$ with $0 \leq k \leq n$:
$$
\binom{n}{k} = \frac{n!}{k!\,(n-k)!} .
$$
The binomial coefficient **counts the subsets** with $k$ elements of a set with $n$ elements, therefore it is *always* a natural number. In computations it is convenient to **simplify the factorials** before multiplying:
$$
\binom{5}{2} = \frac{5!}{2!\,3!} = \frac{5 \cdot 4}{2} = 10 .
$$
:::

:::teorema{#proprieta-binomiali titolo="Properties of binomial coefficients"}
For $0 \leq k \leq n$:
$$
\binom{n}{0} = \binom{n}{n} = 1, \qquad
\binom{n}{k} = \binom{n}{n-k}, \qquad
\binom{n}{k} + \binom{n}{k+1} = \binom{n+1}{k+1} \quad (k \leq n - 1).
$$
The first two properties follow from the definition, since exchanging $k$ with $n - k$ leaves the denominator $k!\,(n-k)!$ unchanged. The third is **Stifel's formula** (Pascal's rule) and is verified by bringing the two fractions to the common denominator $(k+1)!\,(n-k)!$. Stifel's formula generates **Pascal's triangle**, in which each coefficient is the sum of the two coefficients above it, and it enters the inductive step of the proof of the binomial theorem. For example $\dbinom{4}{1} + \dbinom{4}{2} = 4 + 6 = 10 = \dbinom{5}{2}$.
:::

## The binomial theorem

:::teorema{#binomio-di-newton titolo="Binomial theorem"}
For every pair of real numbers $a$ and $b$ and every $n \in \mathbb{N}$:
$$
(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{\,n-k}\, b^{\,k}
= a^n + n\,a^{n-1}b + \binom{n}{2} a^{n-2}b^2 + \cdots + n\,a\,b^{n-1} + b^n .
$$
For $n = 2$ and $n = 3$ the formula gives the square and the cube of a binomial. The proof proceeds by **induction** on $n$: in the step, the expansion of $(a+b)^n$ is multiplied by $a + b$ and like terms are grouped using **Stifel's formula**. The formula makes it possible to expand any power of a binomial and to determine a single term of the expansion *without* computing the others: the term containing $b^k$ is $\dbinom{n}{k} a^{\,n-k} b^{\,k}$.
:::

:::esempio{titolo="Expansion of a power"}
$$
(x + 2)^4
= \sum_{k=0}^{4} \binom{4}{k} x^{\,4-k}\, 2^{\,k}
= x^4 + 4 \cdot 2\,x^3 + 6 \cdot 4\,x^2 + 4 \cdot 8\,x + 16
= x^4 + 8x^3 + 24x^2 + 32x + 16 .
$$
The binomial coefficients $1, 4, 6, 4, 1$ are the row $n = 4$ of **Pascal's triangle**; each of them is multiplied by the corresponding power of $2$.
:::

:::osservazione
From the formula with $a = b = 1$ it follows that
$$
\sum_{k=0}^{n} \binom{n}{k} = 2^n ,
$$
so a set with $n$ elements has $2^n$ **subsets** in total, since $\dbinom{n}{k}$ counts those with $k$ elements. With $a = 1$ and $b = -1$ one obtains instead $\displaystyle\sum_{k=0}^{n} (-1)^k \binom{n}{k} = 0$ for every $n \geq 1$.
:::

## Functions, domain and range

:::definizione{#funzione titolo="Function, domain, codomain and range"}
A function $f : A \to B$ is a rule that assigns to each element $x \in A$ *one and only one* element $f(x) \in B$. The set $A$ is the **domain**, $B$ is the **codomain**; the **range** (or image) is the set of values taken,
$$
f(A) = \{ y \in B : y = f(x) \ \text{for some}\ x \in A \} \subseteq B .
$$
The **graph** of $f$ is the set of points $(x, f(x))$ of the plane, as $x$ varies in $A$. Since each $x$ corresponds to a single value, every vertical line $x = c$ with $c \in A$ meets the graph in *exactly* one point. In this course $A$ and $B$ are subsets of $\mathbb{R}$; limits, derivatives and integrals are defined for functions of this type, therefore domain, range and graph are the starting point of every following chapter.
:::

:::esempio{titolo="Domain and range of x²"}
$f(x) = x^2$ with domain $\mathbb{R}$. Every value taken satisfies $x^2 \geq 0$; conversely every $y \geq 0$ is taken, because $f(\sqrt{y}) = y$. Hence the range is $[0, +\infty)$. The graph is a **parabola** with vertex at the origin.

::grafico{f="x^2" xmin=-3 xmax=3 ymin=-1 ymax=6 titolo="$y = x^2$: domain $\mathbb{R}$, range $[0, +\infty)$"}

:::

## Injectivity, inverse function and composition

:::definizione{#iniettiva-suriettiva titolo="Injective, surjective, bijective function"}
$f : A \to B$ is

- **injective** if distinct elements have distinct images, that is if $f(x_1) = f(x_2)$ implies $x_1 = x_2$;
- **surjective** if the range coincides with the codomain, that is if every $y \in B$ is of the form $f(x)$ for some $x \in A$;
- **bijective** if it is injective and surjective, that is if every $y \in B$ comes from one and only one $x \in A$.

On the graph, injectivity is read with **horizontal lines**: $f$ is injective if every line $y = c$ meets the graph in *at most* one point. $f(x) = x^2$ on $\mathbb{R}$ takes the same value at $1$ and at $-1$, so on $\mathbb{R}$ the line $y = 1$ meets the graph in two points; the restriction to $[0, +\infty)$ is injective. Injectivity decides whether a function is **invertible**, as specified in the next block.

::grafico{f="x^2;1" xmin=-3 xmax=3 ymin=-1 ymax=6 punti="-1,1,pieno;1,1,pieno" titolo="The line $y = 1$ (dashed) meets the parabola $y = x^2$ at the two points with abscissa $-1$ and $1$: on $\mathbb{R}$ the function $x^2$ is not injective"}

::grafico{f="x^2+0*sqrt(x);1" xmin=-3 xmax=3 ymin=-1 ymax=6 punti="1,1,pieno" titolo="Restricted to $[0, +\infty)$, the function $x^2$ is injective: the line $y = 1$ (dashed) meets the graph only at the point $(1, 1)$"}

:::

:::definizione{#funzione-inversa titolo="Inverse function"}
If $f : A \to B$ is bijective, for every $y \in B$ there exists one and only one $x \in A$ with $f(x) = y$; the **inverse function** $f^{-1} : B \to A$ assigns this $x$ to $y$. The following hold:
$$
f^{-1}(f(x)) = x \ \text{for every}\ x \in A, \qquad f(f^{-1}(y)) = y \ \text{for every}\ y \in B .
$$
The point $(a, b)$ belongs to the graph of $f$ *if and only if* $(b, a)$ belongs to the graph of $f^{-1}$, so the graph of $f^{-1}$ is the **reflection** of the graph of $f$ across the bisector $y = x$. When $f$ is injective but the codomain is larger than the range, the **codomain is restricted** to the range and the function so obtained is inverted. With this construction the roots, the logarithm and the inverse trigonometric functions of this chapter are defined.
:::

:::esempio{titolo="Inverse of a linear function"}
$f(x) = 2x - 3$, from $\mathbb{R}$ to $\mathbb{R}$. The equation $y = 2x - 3$ has the unique solution $x = \dfrac{y + 3}{2}$ for every $y$, so $f$ is **bijective** and $f^{-1}(y) = \dfrac{y + 3}{2}$. Check: $f^{-1}(f(x)) = \dfrac{(2x - 3) + 3}{2} = x$.

::grafico{f="2*x-3;(x+3)/2;x" xmin=-5 xmax=6 ymin=-5 ymax=6 uguale=1 punti="0,-3,pieno,P;-3,0,pieno,P′" titolo="$y = 2x - 3$ and its inverse $y = \dfrac{x + 3}{2}$ (dashed) are symmetric with respect to the bisector $y = x$ (red): at the points $P = (0, -3)$ and $P' = (-3, 0)$ the coordinates are swapped"}

:::

:::definizione{#composizione titolo="Composite function"}
Given $f : A \to \mathbb{R}$ and $g : B \to \mathbb{R}$, the **composite function** $g \circ f$ is defined by $(g \circ f)(x) = g(f(x))$, on the domain
$$
\{ x \in A : f(x) \in B \} .
$$
Composition reads complicated functions as **chains of elementary functions**: $h(x) = \sqrt{x^2 + 1}$ is the composite of $f(x) = x^2 + 1$ with $g(y) = \sqrt{y}$. This reading guides the computation of the natural domain and, in the chapter on derivatives, the chain rule.
:::

:::attenzione
Composition depends on the **order** of the factors. With $f(x) = x + 1$ and $g(x) = x^2$ we have $(g \circ f)(x) = (x + 1)^2$ and $(f \circ g)(x) = x^2 + 1$: at $x = 1$ the values are $4$ and $2$, so $g \circ f \neq f \circ g$.
:::

## Symmetry, periodicity, monotonicity and boundedness

:::definizione{#pari-dispari titolo="Even function and odd function"}
Let $A$ be symmetric with respect to the origin, that is $-x \in A$ for every $x \in A$. $f : A \to \mathbb{R}$ is

- **even** if $f(-x) = f(x)$ for every $x \in A$; the graph is symmetric with respect to the $y$-axis;
- **odd** if $f(-x) = -f(x)$ for every $x \in A$; the graph is symmetric with respect to the origin.

The functions $x^2$, $x^4$, $|x|$, $\cos x$ are even; $x$, $x^3$, $\sin x$, $\tan x$ are odd. A symmetry **halves the work**: in function studies $f$ is studied for $x \geq 0$ and the graph is reflected.

::grafico{f="x^2;x^3" xmin=-2.5 xmax=2.5 ymin=-4 ymax=5 punti="-1.5,2.25;1.5,2.25;-1.5,-3.375;1.5,3.375" segmenti="-1.5,2.25,1.5,2.25;-1.5,-3.375,1.5,3.375" titolo="$y = x^2$ is even: the graph is symmetric with respect to the $y$-axis; $y = x^3$ (dashed) is odd: the graph is symmetric with respect to the origin"}

:::

:::definizione{#periodica titolo="Periodic function"}
$f$ is **periodic** with period $T > 0$ if $f(x + T) = f(x)$ for every $x$ in the domain with $x + T$ in the domain. The smallest positive period, when it exists, is the **fundamental period**. $\sin x$ and $\cos x$ have fundamental period $2\pi$; $\tan x$ has fundamental period $\pi$. The graph repeats under horizontal translation by $T$, so the study of a periodic function is carried out on a *single* interval of length $T$. For the same reason trigonometric equations have **infinitely many solutions**, listed with an integer $k$.
:::

:::definizione{#monotona titolo="Monotonic function"}
$f$ is **increasing** on a set $I$ of the domain if $x_1 < x_2$ implies $f(x_1) \leq f(x_2)$, **strictly increasing** if it implies $f(x_1) < f(x_2)$; decreasing and strictly decreasing are defined with the opposite inequalities. A strictly monotonic function is **injective**, because distinct points have distinct images, so it is invertible on its range; the inverse is strictly monotonic in the same direction. Applying a strictly increasing function to both sides of an inequality *preserves* its direction; applying a strictly decreasing function *reverses* it. The exponential and logarithmic inequalities of this chapter are based on this property.
:::

:::definizione{#limitata titolo="Bounded function"}
$f$ is **bounded above** if there exists $M \in \mathbb{R}$ with $f(x) \leq M$ for every $x$ in the domain, **bounded below** if there exists $m \in \mathbb{R}$ with $f(x) \geq m$, **bounded** if both conditions hold, that is if $|f(x)| \leq C$ for a constant $C$. $\sin x$ and $\cos x$ are bounded, with values in $[-1, 1]$; $x^2$ is bounded below and unbounded above. Boundedness is read on the range and reappears in the chapter on limits, in the theorem on a bounded function times an infinitesimal one, and in the Weierstrass theorem.
:::

## Graph transformations

:::teorema{#trasformazioni-del-grafico titolo="Graph transformations"}
From the graph of $f$, for $k > 0$ and $a > 1$, the following graphs are obtained:

- $f(x) + k$: vertical translation upward by $k$; $f(x) - k$: downward;
- $f(x - k)$: horizontal translation to the right by $k$; $f(x + k)$: to the left;
- $a\,f(x)$: vertical stretch by a factor $a$; $\dfrac{f(x)}{a}$: vertical compression;
- $f(a x)$: horizontal compression by a factor $a$; $f\!\left(\dfrac{x}{a}\right)$: horizontal stretch;
- $-f(x)$: reflection across the $x$-axis; $f(-x)$: reflection across the $y$-axis;
- $|f(x)|$: the part of the graph with $f(x) \geq 0$ stays in place, the part with $f(x) < 0$ is reflected above the $x$-axis;
- $f(|x|)$: the part of the graph with $x \geq 0$ stays in place and is also reflected to the left of the $y$-axis; the function obtained is **even**.

The verifications follow from the **definition of graph**: for example $(x_0, y_0)$ belongs to the graph of $f$ if and only if $(x_0 + k, y_0)$ belongs to the graph of $f(x - k)$. With these rules the graph of many functions is drawn starting from the **elementary graphs**, *without* a complete function study.

::grafico{f="x^2;(x-2)^2;x^2+1" xmin=-3 xmax=5 ymin=-1 ymax=7 titolo="From $y = x^2$: $y = (x - 2)^2$ (dashed) is translated to the right by $2$, $y = x^2 + 1$ (red) is translated upward by $1$"}

::grafico{f="exp(x);exp(-x);-exp(x)" xmin=-3 xmax=3 ymin=-5 ymax=5 titolo="From $y = e^x$: $y = e^{-x}$ (dashed) is the reflection across the $y$-axis, $y = -e^x$ (red) is the reflection across the $x$-axis"}

::grafico{f="x^2-2*abs(x);x^2-2*x" xmin=-3.5 xmax=3.5 ymin=-2 ymax=5 titolo="$y = x^2 - 2|x|$ is obtained from $y = x^2 - 2x$ (dashed) by keeping the part with $x \geq 0$ and reflecting it across the $y$-axis"}

:::

:::esempio{titolo="From the graph of x² to that of |x² − 1|"}
From $x^2$ one passes to $x^2 - 1$ by a **vertical translation** downward by $1$; since $x^2 - 1 < 0$ for $-1 < x < 1$, the **absolute value** reflects above the $x$-axis the arc between $-1$ and $1$ and leaves the rest in place.

::grafico{f="abs(x^2-1)" xmin=-3 xmax=3 ymin=-1 ymax=4 titolo="$y = |x^2 - 1|$: the arc with $-1 < x < 1$ is reflected above the $x$-axis"}

:::

## Powers and roots

:::definizione{#potenze titolo="Powers with natural and negative integer exponent"}
For $n \in \mathbb{N}$, $n \geq 1$, the power $f(x) = x^n$ has domain $\mathbb{R}$.

- $n$ even: **even** function, range $[0, +\infty)$, strictly decreasing on $(-\infty, 0]$ and strictly increasing on $[0, +\infty)$.
- $n$ odd: **odd** function, range $\mathbb{R}$, strictly increasing on $\mathbb{R}$.

For a negative integer exponent we set $x^{-n} = \dfrac{1}{x^n}$, with domain $\mathbb{R} \setminus \{0\}$. The reference case is $x^{-1} = \dfrac{1}{x}$: an odd function, strictly decreasing on $(-\infty, 0)$ and on $(0, +\infty)$, with range $\mathbb{R} \setminus \{0\}$. Polynomials and rational functions are built from sums and quotients of these powers, therefore their graphs recur in all the examples of the course.

::grafico{f="x^3" xmin=-2.5 xmax=2.5 ymin=-6 ymax=6 titolo="$y = x^3$: odd, strictly increasing, range $\mathbb{R}$"}

::grafico{f="1/x" xmin=-4 xmax=4 ymin=-4 ymax=4 asintoti="x=0;y=0" titolo="$y = \dfrac{1}{x}$: the graph approaches the lines $x = 0$ and $y = 0$"}

:::

:::definizione{#radici titolo="Roots and powers with rational exponent"}
For $n$ even the power $x^n$ restricted to $[0, +\infty)$ is strictly increasing with range $[0, +\infty)$, so it is **invertible**: the inverse is the $n$-th **root** $\sqrt[n]{x} : [0, +\infty) \to [0, +\infty)$, strictly increasing. For $n$ odd the power $x^n$ is strictly increasing on all of $\mathbb{R}$, therefore the $n$-th root is defined on $\mathbb{R}$; for example $\sqrt[3]{-8} = -2$. For $x > 0$, $m \in \mathbb{Z}$ and $n \geq 1$ we set
$$
x^{\frac{m}{n}} = \sqrt[n]{x^m} ,
$$
in agreement with the properties of powers. The graph of $\sqrt{x}$ is the reflection across the bisector $y = x$ of the branch with $x \geq 0$ of the parabola $y = x^2$, because the two functions are each the **inverse** of the other.

::grafico{f="sqrt(x)" xmin=-1 xmax=9 ymin=-1 ymax=4 titolo="$y = \sqrt{x}$: domain and range $[0, +\infty)$"}

:::

:::attenzione
For an even index, the root of a power returns the **absolute value** of the base: $\sqrt{x^2} = |x|$. For $x = -3$ we have $\sqrt{(-3)^2} = \sqrt{9} = 3 = |-3|$, while the base equals $-3$.
:::

## Exponential and logarithm

:::definizione{#esponenziale titolo="Exponential function"}
For $a > 0$, $a \neq 1$, the **exponential function** $f(x) = a^x$ has domain $\mathbb{R}$ and range $(0, +\infty)$; in particular $a^x > 0$ for *every* $x$. The properties of powers hold:
$$
a^{x+y} = a^x\, a^y, \qquad a^{x-y} = \frac{a^x}{a^y}, \qquad (a^x)^y = a^{x y}, \qquad a^0 = 1 .
$$
For $a > 1$ the function is **strictly increasing**; for $0 < a < 1$ it is **strictly decreasing**. Since $a^x = \left(\dfrac{1}{a}\right)^{-x}$, the graphs for reciprocal bases are symmetric with respect to the $y$-axis. The base most used in analysis is the number $e = 2{,}71828\ldots$; the behavior at the ends of the domain and the standard limits involving $e$ are found in the chapter on limits.

::grafico{f="exp(x)" xmin=-3 xmax=3 ymin=-1 ymax=8 asintoti="y=0" titolo="$y = e^x$: range $(0, +\infty)$, strictly increasing"}

:::

:::definizione{#logaritmo titolo="Logarithm and change of base"}
For $a > 0$, $a \neq 1$, the exponential $a^x$ is strictly monotonic with range $(0, +\infty)$, so it is **invertible**: the inverse is the **logarithm** to base $a$,
$$
y = \log_a x \iff a^y = x \qquad (x > 0) .
$$
The logarithm has domain $(0, +\infty)$ and range $\mathbb{R}$; it is strictly increasing for $a > 1$ and strictly decreasing for $0 < a < 1$. From the properties of the exponential it follows that, for $x, y > 0$ and $\alpha \in \mathbb{R}$:
$$
\log_a (x y) = \log_a x + \log_a y, \qquad \log_a \frac{x}{y} = \log_a x - \log_a y, \qquad \log_a x^{\alpha} = \alpha \log_a x ,
$$
with $\log_a 1 = 0$ and $\log_a a = 1$. The **change of base**, for $b > 0$, $b \neq 1$, is
$$
\log_a x = \frac{\log_b x}{\log_b a} ,
$$
and is obtained by applying $\log_b$ to the identity $a^{\log_a x} = x$, since $\log_b\!\left(a^{\log_a x}\right) = \log_a x \cdot \log_b a$. The logarithm to base $e$ is denoted by $\ln x$; thanks to the change of base every logarithm can be reduced to this one. The graph of $\log_a x$ is the reflection of that of $a^x$ across the bisector $y = x$.

::grafico{f="log(x)" xmin=-1 xmax=8 ymin=-3 ymax=3 asintoti="x=0" titolo="$y = \ln x$: domain $(0, +\infty)$, range $\mathbb{R}$"}

:::

:::attenzione
The identity $\log_a x^{\alpha} = \alpha \log_a x$ requires $x > 0$. For an even exponent and a negative base the correct statement uses the **absolute value**, $\log_a x^2 = 2 \log_a |x|$ for $x \neq 0$: with $x = -2$ we have $\log_2 x^2 = \log_2 4 = 2$, while $\log_2(-2)$ is *not* defined.
:::

## Trigonometric functions and their inverses

:::definizione{#trigonometriche titolo="Sine, cosine and tangent"}
On the circle centered at the origin with radius $1$, the point reached by rotating through an angle $x$, measured in radians from $(1, 0)$ counterclockwise, has coordinates $(\cos x, \sin x)$. The two functions have domain $\mathbb{R}$, range $[-1, 1]$ and fundamental period $2\pi$; $\sin x$ is **odd** and $\cos x$ is **even**. The **tangent** is
$$
\tan x = \frac{\sin x}{\cos x} ,
$$
with domain $x \neq \dfrac{\pi}{2} + k\pi$ ($k \in \mathbb{Z}$), range $\mathbb{R}$, fundamental period $\pi$; it is odd. Notable values:
$$
\begin{array}{c|ccccc}
x & 0 & \dfrac{\pi}{6} & \dfrac{\pi}{4} & \dfrac{\pi}{3} & \dfrac{\pi}{2} \\[8pt]
\hline
\sin x & 0 & \dfrac{1}{2} & \dfrac{\sqrt{2}}{2} & \dfrac{\sqrt{3}}{2} & 1 \\[10pt]
\cos x & 1 & \dfrac{\sqrt{3}}{2} & \dfrac{\sqrt{2}}{2} & \dfrac{1}{2} & 0 \\[10pt]
\tan x & 0 & \dfrac{\sqrt{3}}{3} & 1 & \sqrt{3} & \text{undef.}
\end{array}
$$
These values, together with the symmetries and periodicity, make it possible to write in closed form the solutions of the trigonometric equations in the exercises.

::grafico{f="sin(x)" xmin=-7 xmax=7 ymin=-1.5 ymax=1.5 titolo="$y = \sin x$: periodic with period $2\pi$, range $[-1, 1]$"}

:::

:::teorema{#identita-trigonometriche titolo="Main identities"}
For every $x, y \in \mathbb{R}$:
$$
\sin^2 x + \cos^2 x = 1 ,
$$
which is the **Pythagorean theorem** on the unit circle. **Addition formulas**:
$$
\sin(x + y) = \sin x \cos y + \cos x \sin y, \qquad
\cos(x + y) = \cos x \cos y - \sin x \sin y .
$$
With $y = x$ one obtains the **double-angle formulas**:
$$
\sin 2x = 2 \sin x \cos x, \qquad
\cos 2x = \cos^2 x - \sin^2 x = 2\cos^2 x - 1 = 1 - 2\sin^2 x .
$$
The fundamental identity and the double-angle formulas reduce many trigonometric equations to a *single* unknown function, as in the worked examples of this topic.
:::

:::definizione{#inverse-trigonometriche titolo="Arcsine, arccosine and arctangent"}
The trigonometric functions are periodic, so they are inverted after a **restriction** to an interval of strict monotonicity.

- $\sin x$ restricted to $\left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right]$ is strictly increasing with range $[-1, 1]$; the inverse is $\arcsin : [-1, 1] \to \left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right]$, strictly increasing and odd.
- $\cos x$ restricted to $[0, \pi]$ is strictly decreasing with range $[-1, 1]$; the inverse is $\arccos : [-1, 1] \to [0, \pi]$, strictly decreasing.
- $\tan x$ restricted to $\left(-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right)$ is strictly increasing with range $\mathbb{R}$; the inverse is $\arctan : \mathbb{R} \to \left(-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right)$, strictly increasing and odd.

By definition $\arcsin m$ is the **unique** angle in $\left[-\dfrac{\pi}{2}, \dfrac{\pi}{2}\right]$ whose sine equals $m$; the solutions of trigonometric equations are written with these angles. The arctangent, defined on all of $\mathbb{R}$ and bounded, recurs in the examples of the chapters on limits and derivatives.

::grafico{f="atan(x)" xmin=-6 xmax=6 ymin=-2 ymax=2 asintoti="y=1.5708;y=-1.5708" titolo="$y = \arctan x$: the graph approaches the lines $y = \dfrac{\pi}{2}$ and $y = -\dfrac{\pi}{2}$"}

:::

:::definizione{#iperboliche titolo="Hyperbolic functions"}
Hyperbolic sine and cosine are defined from the exponential:
$$
\sinh x = \frac{e^x - e^{-x}}{2}, \qquad \cosh x = \frac{e^x + e^{-x}}{2}, \qquad \tanh x = \frac{\sinh x}{\cosh x} .
$$
All three have domain $\mathbb{R}$. $\sinh x$ is **odd**, strictly increasing, with range $\mathbb{R}$; $\cosh x$ is **even**, with range $[1, +\infty)$ and minimum value $\cosh 0 = 1$. Fundamental identity:
$$
\cosh^2 x - \sinh^2 x = 1 ,
$$
which is verified by expanding the squares: $\cosh^2 x - \sinh^2 x = \dfrac{e^{2x} + 2 + e^{-2x}}{4} - \dfrac{e^{2x} - 2 + e^{-2x}}{4} = 1$. The point $(\cosh t, \sinh t)$ therefore belongs to the **hyperbola** $x^2 - y^2 = 1$, hence the name. The hyperbolic functions appear in the antiderivatives of some irrational functions, in the chapter on integrals.

::grafico{f="(exp(x)+exp(-x))/2" xmin=-3 xmax=3 ymin=-1 ymax=6 titolo="$y = \cosh x$: even, range $[1, +\infty)$"}

:::

## Natural domain

:::definizione{#dominio-naturale titolo="Natural domain"}
When a function is given by a single analytic expression, the **natural domain** is the set of real numbers for which every operation in the expression is defined. The conditions to impose:

- a denominator is different from $0$;
- the argument of a root of even index is greater than or equal to $0$;
- the argument of a logarithm is greater than $0$;
- the argument of the tangent is different from $\dfrac{\pi}{2} + k\pi$;
- the argument of $\arcsin$ and of $\arccos$ belongs to $[-1, 1]$;
- in $f(x)^{g(x)}$ the base $f(x)$ is greater than $0$.

The conditions must *all* hold at the same point, therefore they are collected in a **system** and the domain is its solution set. The natural domain is the **first step** of every function study and of every limit computation.
:::

:::esempio{titolo="Domain with a logarithm and a root"}
$f(x) = \dfrac{\ln(x - 1)}{\sqrt{4 - x^2}}$. The logarithm requires a positive argument; the root appears in the denominator, so its argument is *strictly* greater than $0$:
$$
\begin{cases}
x - 1 > 0 \\[4pt]
4 - x^2 > 0
\end{cases}
\qquad\text{that is}\qquad
\begin{cases}
x > 1 \\[4pt]
-2 < x < 2
\end{cases}
$$
hence $D = (1, 2)$.
:::

## Elementary equations and inequalities

:::teorema{#equazioni-esponenziali-logaritmiche titolo="Exponential and logarithmic equations and inequalities"}
For $a > 0$, $a \neq 1$, the equation $a^x = b$ has a solution *if and only if* $b > 0$, because the range of the exponential is $(0, +\infty)$; in that case the **unique solution** is $x = \log_a b$, by **injectivity**. For inequalities **strict monotonicity** is applied:

- if $a > 1$, then $a^{f(x)} > a^{g(x)} \iff f(x) > g(x)$;
- if $0 < a < 1$, then $a^{f(x)} > a^{g(x)} \iff f(x) < g(x)$.

For logarithms, the **existence conditions** are added to the comparison of the arguments, and they enter a **system**: for $a > 1$,
$$
\log_a f(x) > \log_a g(x)
\iff
\begin{cases}
f(x) > g(x) \\[4pt]
g(x) > 0
\end{cases}
$$
where the condition $f(x) > 0$ follows from the other two; for $0 < a < 1$ the direction of the comparison between the arguments is **reversed**. These criteria reduce every elementary exponential or logarithmic inequality to an algebraic inequality.
:::

:::esempio
$2^x \geq 8$. Since $8 = 2^3$ and the base $2$ is greater than $1$, the inequality is equivalent to $x \geq 3$. With a base less than $1$: from $\left(\dfrac{1}{2}\right)^{x} \geq 8 = \left(\dfrac{1}{2}\right)^{-3}$, since the base is *less* than $1$, it follows that $x \leq -3$.
:::

:::teorema{#equazioni-trigonometriche titolo="Elementary trigonometric equations"}
The equations $\sin x = m$ and $\cos x = m$ have solutions *only* for $m \in [-1, 1]$, because the range of sine and cosine is $[-1, 1]$. In that case, with $k \in \mathbb{Z}$:

- $\sin x = m$ has solutions $x = \arcsin m + 2k\pi$ or $x = \pi - \arcsin m + 2k\pi$;
- $\cos x = m$ has solutions $x = \arccos m + 2k\pi$ or $x = -\arccos m + 2k\pi$;
- $\tan x = m$, for every $m \in \mathbb{R}$, has solutions $x = \arctan m + k\pi$.

The formulas follow from the **symmetries** and the **periodicity**: on the unit circle the points with ordinate $m$ are *two* in each turn, with angles $\arcsin m$ and $\pi - \arcsin m$; the points with abscissa $m$ have **opposite** angles. More general equations are reduced to these forms using the main identities, as in the worked examples.
:::

:::esempio
$\cos x = \dfrac{1}{2}$. Since $\arccos \dfrac{1}{2} = \dfrac{\pi}{3}$, the solutions are $x = \dfrac{\pi}{3} + 2k\pi$ or $x = -\dfrac{\pi}{3} + 2k\pi$, with $k \in \mathbb{Z}$.
:::
